import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { getCityBrief as getCity } from '../data/cityIndex'
import { getCityNightTrains, getCountryNightTrains } from '../data/night-trains'
import { t } from '../i18n/ui'
import type { NightTrain } from '../types'

export function pick(text: string, lang: 'ko' | 'en'): string {
  const [ko, en] = text.split('|')
  return lang === 'ko' ? ko : (en ?? ko)
}

/** Each line end to end; `homeIds` cities get the dark chip. */
export function NightTrainLines({ lines, homeIds = [] }: { lines: string[][]; homeIds?: string[] }) {
  const { lang } = useLanguage()
  return (
    <>
      {lines.map((line) => (
        <div key={line.join('-')} className="night-train-stops">
          {line.map((id, i) => {
            const city = getCity(id)
            if (!city) return null
            return (
              <span key={id} className="night-train-leg">
                {i > 0 ? <span aria-hidden>–</span> : null}
                <Link className={`night-train-stop${homeIds.includes(id) ? ' is-home' : ''}`} to={`/city/${id}`}>
                  {city.name[lang]}
                </Link>
              </span>
            )
          })}
        </div>
      ))}
    </>
  )
}

/** Name and operator line of a night-train card. */
export function NightTrainHead({ train }: { train: NightTrain }) {
  const { lang } = useLanguage()
  return (
    <div className="night-train-head">
      <span className="night-train-name">
        <span aria-hidden>🌙</span> {pick(train.name, lang)}
      </span>
      <span className="night-train-operator">{train.operator}</span>
    </div>
  )
}

/** Note and booking link under a night train's stops. */
export function NightTrainFoot({ train }: { train: NightTrain }) {
  const { lang } = useLanguage()
  return (
    <>
      {train.note ? <p className="night-train-note">{pick(train.note, lang)}</p> : null}
      <a className="night-train-book" href={train.url} target="_blank" rel="noreferrer">
        {t('nightTrainsBook', lang)} ↗
      </a>
    </>
  )
}

function Panel({ label, children }: { label?: boolean; children: ReactNode }) {
  const { lang } = useLanguage()
  return (
    <section className="routes-panel" aria-label={t('nightTrainsTitle', lang)}>
      <p className="section-label" style={label ? { marginTop: 22 } : undefined}>
        {t('nightTrainsTitle', lang)}
      </p>
      <div className="transit-card">
        {children}
        <p className="route-hint">{t('nightTrainsHint', lang)}</p>
      </div>
    </section>
  )
}

export function NightTrainsPanel({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const trains = getCityNightTrains(cityId)
  if (trains.length === 0) return null

  return (
    <Panel label>
      <ul className="night-train-list">
        {trains.map(({ train, to }) => (
          <li key={train.id} className="night-train">
            <NightTrainHead train={train} />
            <div className="night-train-stops">
              {to.map((id) => {
                const city = getCity(id)
                return city ? (
                  <Link key={id} className="night-train-stop" to={`/city/${id}`}>
                    {city.name[lang]}
                  </Link>
                ) : null
              })}
            </div>
            <NightTrainFoot train={train} />
          </li>
        ))}
      </ul>
    </Panel>
  )
}

/** Country screen: every line that calls at one of the country's cities, shown end to end. */
export function CountryNightTrainsPanel({ cityIds }: { cityIds: string[] }) {
  const trains = getCountryNightTrains(cityIds)
  if (trains.length === 0) return null

  return (
    <Panel>
      <ul className="night-train-list">
        {trains.map(({ train, lines }) => (
          <li key={train.id} className="night-train">
            <NightTrainHead train={train} />
            <NightTrainLines lines={lines} homeIds={cityIds} />
            <NightTrainFoot train={train} />
          </li>
        ))}
      </ul>
    </Panel>
  )
}
