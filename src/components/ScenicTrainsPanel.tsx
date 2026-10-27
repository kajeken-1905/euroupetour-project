import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { getCityBrief as getCity } from '../data/cityIndex'
import { getCityScenicTrains, getCountryScenicTrains } from '../data/scenic-trains'
import { t } from '../i18n/ui'

function pick(text: string, lang: 'ko' | 'en'): string {
  const [ko, en] = text.split('|')
  return lang === 'ko' ? ko : (en ?? ko)
}

export function ScenicTrainsPanel({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const trains = getCityScenicTrains(cityId)
  if (trains.length === 0) return null

  return (
    <section className="routes-panel" aria-label={t('scenicTrainsTitle', lang)}>
      <p className="section-label" style={{ marginTop: 22 }}>
        {t('scenicTrainsTitle', lang)}
      </p>
      <div className="transit-card">
        <ul className="night-train-list">
          {trains.map((train) => (
            <li key={train.id} className="night-train">
              <div className="night-train-head">
                <span className="night-train-name">
                  <span aria-hidden>🚞</span> {train.name}
                </span>
                {train.resv ? <span className="route-resv">{t('scenicTrainsResv', lang)}</span> : null}
              </div>
              <p className="night-train-note">{pick(train.route, lang)}</p>
              {train.season ? <p className="night-train-note">🗓️ {pick(train.season, lang)}</p> : null}
              <a className="night-train-book" href={train.url} target="_blank" rel="noreferrer">
                {t('scenicTrainsSite', lang)} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Country screen: the country's scenic lines, each with the app cities it is reached from. */
export function CountryScenicTrainsPanel({ countryId, cityIds }: { countryId: string; cityIds: string[] }) {
  const { lang } = useLanguage()
  const trains = getCountryScenicTrains(countryId, cityIds)
  if (trains.length === 0) return null

  return (
    <section className="routes-panel" aria-label={t('scenicTrainsTitle', lang)}>
      <p className="section-label">{t('scenicTrainsTitle', lang)}</p>
      <div className="transit-card">
        <ul className="night-train-list">
          {trains.map((train) => (
            <li key={train.id} className="night-train">
              <div className="night-train-head">
                <span className="night-train-name">
                  <span aria-hidden>🚞</span> {train.name}
                </span>
                {train.resv ? <span className="route-resv">{t('scenicTrainsResv', lang)}</span> : null}
              </div>
              <p className="night-train-note">{pick(train.route, lang)}</p>
              {train.season ? <p className="night-train-note">🗓️ {pick(train.season, lang)}</p> : null}
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
              <a className="night-train-book" href={train.url} target="_blank" rel="noreferrer">
                {t('scenicTrainsSite', lang)} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
