import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { getCityBrief as getCity } from '../data/cityIndex'
import { getCityNightTrains } from '../data/night-trains'
import { t } from '../i18n/ui'

function pick(text: string, lang: 'ko' | 'en'): string {
  const [ko, en] = text.split('|')
  return lang === 'ko' ? ko : (en ?? ko)
}

export function NightTrainsPanel({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const trains = getCityNightTrains(cityId)
  if (trains.length === 0) return null

  return (
    <section className="routes-panel" aria-label={t('nightTrainsTitle', lang)}>
      <p className="section-label" style={{ marginTop: 22 }}>
        {t('nightTrainsTitle', lang)}
      </p>
      <div className="transit-card">
        <ul className="night-train-list">
          {trains.map(({ train, to }) => (
            <li key={train.id} className="night-train">
              <div className="night-train-head">
                <span className="night-train-name">
                  <span aria-hidden>🌙</span> {train.name}
                </span>
                <span className="night-train-operator">{train.operator}</span>
              </div>
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
              {train.note ? <p className="night-train-note">{pick(train.note, lang)}</p> : null}
              <a className="night-train-book" href={train.url} target="_blank" rel="noreferrer">
                {t('nightTrainsBook', lang)} ↗
              </a>
            </li>
          ))}
        </ul>
        <p className="route-hint">{t('nightTrainsHint', lang)}</p>
      </div>
    </section>
  )
}
