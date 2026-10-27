import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { getCityBrief as getCity } from '../data/cityIndex'
import { getCityScenicTrains, getCountryScenicTrains } from '../data/scenic-trains'
import { t } from '../i18n/ui'
import type { ScenicTrain } from '../types'
import { pick } from './NightTrainsPanel'

/** Name and reservation tag of a scenic-train card. */
export function ScenicTrainHead({ train }: { train: ScenicTrain }) {
  const { lang } = useLanguage()
  return (
    <div className="night-train-head">
      <span className="night-train-name">
        <span aria-hidden>🚞</span> {pick(train.name, lang)}
      </span>
      {train.resv ? <span className="route-resv">{t('scenicTrainsResv', lang)}</span> : null}
    </div>
  )
}

/** Route, season, the app cities it is reached from (when `cities`) and the official site. */
export function ScenicTrainBody({ train, cities }: { train: ScenicTrain; cities?: boolean }) {
  const { lang } = useLanguage()
  return (
    <>
      <p className="night-train-note">{pick(train.route, lang)}</p>
      {train.season ? <p className="night-train-note">🗓️ {pick(train.season, lang)}</p> : null}
      {cities ? (
        <div className="night-train-stops">
          {train.cities.map((id) => {
            const city = getCity(id)
            return city ? (
              <Link key={id} className="night-train-stop" to={`/city/${id}`}>
                {city.name[lang]}
              </Link>
            ) : null
          })}
        </div>
      ) : null}
      <a className="night-train-book" href={train.url} target="_blank" rel="noreferrer">
        {t('scenicTrainsSite', lang)} ↗
      </a>
    </>
  )
}

function Panel({ trains, label, cities }: { trains: ScenicTrain[]; label?: boolean; cities?: boolean }) {
  const { lang } = useLanguage()
  if (trains.length === 0) return null

  return (
    <section className="routes-panel" aria-label={t('scenicTrainsTitle', lang)}>
      <p className="section-label" style={label ? { marginTop: 22 } : undefined}>
        {t('scenicTrainsTitle', lang)}
      </p>
      <div className="transit-card">
        <ul className="night-train-list">
          {trains.map((train) => (
            <li key={train.id} className="night-train">
              <ScenicTrainHead train={train} />
              <ScenicTrainBody train={train} cities={cities} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ScenicTrainsPanel({ cityId }: { cityId: string }) {
  return <Panel trains={getCityScenicTrains(cityId)} label />
}

/** Country screen: the country's scenic lines, each with the app cities it is reached from. */
export function CountryScenicTrainsPanel({ countryId, cityIds }: { countryId: string; cityIds: string[] }) {
  return <Panel trains={getCountryScenicTrains(countryId, cityIds)} cities />
}
