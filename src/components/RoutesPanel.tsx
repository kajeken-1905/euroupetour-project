import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { getCity } from '../data/cities'
import { t } from '../i18n/ui'
import type { CityRoute, RouteMode } from '../types'

const MODE_ICON: Record<RouteMode, string> = {
  train: '🚆',
  bus: '🚌',
  ferry: '⛴️',
  mixed: '🚆',
  flight: '✈️',
}

function duration(minutes: number, lang: 'ko' | 'en'): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (lang === 'ko') return `약 ${h ? `${h}시간` : ''}${h && m ? ' ' : ''}${m ? `${m}분` : ''}`
  return `about ${h ? `${h}h` : ''}${h && m ? ' ' : ''}${m ? `${m}m` : ''}`
}

export function RoutesPanel({ routes }: { routes: CityRoute[] }) {
  const { lang } = useLanguage()
  if (routes.length === 0) return null

  return (
    <section className="routes-panel" aria-label={t('routesTitle', lang)}>
      <p className="section-label" style={{ marginTop: 22 }}>
        {t('routesTitle', lang)}
      </p>
      <div className="transit-card">
        <ul className="route-list">
          {routes.map((route) => {
            const to = getCity(route.toCityId)
            if (!to) return null
            return (
              <li key={`${route.toCityId}-${route.mode}`}>
                <Link className="route-item" to={`/city/${to.id}`}>
                  <span className="route-main">
                    <span className="route-city">{to.name[lang]}</span>
                    <span className="route-time">
                      <span aria-hidden>{MODE_ICON[route.mode]}</span> {t(`routeMode_${route.mode}`, lang)} ·{' '}
                      {duration(route.minutes, lang)}
                    </span>
                  </span>
                  <span className="route-meta">
                    {route.from ? (
                      <span>
                        {t('routeFrom', lang)}: {route.from[lang]}
                      </span>
                    ) : null}
                    {route.note ? <span>{route.note[lang]}</span> : null}
                    {route.mode === 'flight' ? <span>{t('routeFlightHint', lang)}</span> : null}
                    {route.reservation ? <span className="route-resv">{t('routeReservation', lang)}</span> : null}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
        <p className="route-hint">{t('routesHint', lang)}</p>
      </div>
    </section>
  )
}
