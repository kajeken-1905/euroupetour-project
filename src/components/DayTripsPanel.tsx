import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { getCityBrief as getCity } from '../data/cityIndex'
import { DAY_TRIPS } from '../data/day-trips'
import { getRoutesBetween } from '../data/routes'
import { t } from '../i18n/ui'
import { MODE_ICON, duration } from './RoutesPanel'

function text(value: string, lang: 'ko' | 'en') {
  const [ko, en] = value.split('|')
  return lang === 'ko' ? ko : (en ?? ko)
}

/** Smaller towns worth a day trip from this base, with the quickest way there. */
export function DayTripsPanel({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const trips = DAY_TRIPS[cityId]
  if (!trips) return null
  return (
    <section className="itinerary-panel" aria-label={t('dayTripsTitle', lang)}>
      <p className="section-label">{t('dayTripsTitle', lang)}</p>
      <div className="transit-card">
        <ul className="route-list">
          {trips.map((trip) => {
            const to = getCity(trip.to)
            if (!to) return null
            const route = trip.how ? undefined : getRoutesBetween(cityId, trip.to)[0]
            return (
              <li key={trip.to}>
                <Link className="route-item" to={`/city/${to.id}`}>
                  <span className="route-main">
                    <span className="route-city">{to.name[lang]}</span>
                    <span className="route-time">
                      {route ? (
                        <>
                          <span aria-hidden>{MODE_ICON[route.mode]}</span> {t(`routeMode_${route.mode}`, lang)} ·{' '}
                          {duration(route.minutes, lang)}
                        </>
                      ) : trip.how ? (
                        <>
                          <span aria-hidden>🚗</span> {text(trip.how, lang)}
                        </>
                      ) : null}
                    </span>
                  </span>
                  <span className="route-meta">
                    <span>{text(trip.tip, lang)}</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
        <p className="route-hint">{t('dayTripsHint', lang)}</p>
      </div>
    </section>
  )
}
