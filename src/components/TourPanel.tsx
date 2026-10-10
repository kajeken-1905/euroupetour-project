import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { getCity } from '../data/cities'
import { getCityRoutes, getRoutesBetween, getViaRoute } from '../data/routes'
import { t } from '../i18n/ui'
import { setRoute, useTrip } from '../trip/store'
import type { City, CityRoute, Lang } from '../types'
import { search } from '../utils/search'
import { duration, MODE_ICON } from './RoutesPanel'

function LegLine({ route, lang, label }: { route: CityRoute; lang: Lang; label?: string }) {
  return (
    <span className="tour-leg-line">
      <span className="route-time">
        {label ? `${label} ` : ''}
        <span aria-hidden>{MODE_ICON[route.mode]}</span> {t(`routeMode_${route.mode}`, lang)} ·{' '}
        {duration(route.minutes, lang)}
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
    </span>
  )
}

/** How to get from one city of the route to the next; nothing is estimated when there is no entry. */
function Leg({ from, to, lang }: { from: City; to: City; lang: Lang }) {
  if (from.id === to.id) return <div className="tour-leg tour-leg-none">{t('tourSame', lang)}</div>
  const direct = getRoutesBetween(from.id, to.id)
  if (direct.length > 0) {
    return (
      <div className="tour-leg">
        {direct.map((route) => (
          <LegLine key={route.mode} route={route} lang={lang} />
        ))}
      </div>
    )
  }
  const via = getViaRoute(from.id, to.id)
  const mid = via ? getCity(via[0].toCityId) : undefined
  if (!via || !mid) {
    return (
      <div className="tour-leg tour-leg-none">
        {t('tourNoDirect', lang)} {t('tourNoInfo', lang)}
      </div>
    )
  }
  return (
    <div className="tour-leg tour-leg-none">
      <span>
        {t('tourNoDirect', lang)} {t('tourVia', lang).replace('{city}', mid.name[lang])}:
      </span>
      <LegLine route={via[0]} lang={lang} label={`${from.name[lang]} → ${mid.name[lang]}`} />
      <LegLine route={via[1]} lang={lang} label={`${mid.name[lang]} → ${to.name[lang]}`} />
      <span>{t('tourViaNote', lang)}</span>
    </div>
  )
}

/** The multi-city route on the My trip tab: cities in order with the connection between each pair. */
export function TourPanel() {
  const { lang } = useLanguage()
  const trip = useTrip()
  const [query, setQuery] = useState('')
  const [confirming, setConfirming] = useState(false)

  const stops = trip.route.map((id) => getCity(id)).filter((c): c is City => !!c)
  const ids = stops.map((c) => c.id)
  const last = stops[stops.length - 1]

  const matches = useMemo(() => (query.trim() ? search(query, 6).city.items : []), [query])
  const onward = last
    ? getCityRoutes(last.id)
        .map((route) => getCity(route.toCityId))
        .filter((c, i, all): c is City => !!c && all.indexOf(c) === i && !ids.includes(c.id))
        .slice(0, 8)
    : []
  const planned = Object.keys(trip.plans)
    .map((id) => getCity(id))
    .filter((c): c is City => !!c && !ids.includes(c.id))

  const add = (cityId: string) => {
    setRoute([...ids, cityId])
    setQuery('')
  }
  const move = (index: number, by: number) => {
    const next = [...ids]
    const [id] = next.splice(index, 1)
    next.splice(index + by, 0, id)
    setRoute(next)
  }

  let known = 0
  let minutes = 0
  for (let i = 1; i < stops.length; i += 1) {
    const [fastest] = getRoutesBetween(stops[i - 1].id, stops[i].id)
    if (fastest) {
      known += 1
      minutes += fastest.minutes
    }
  }
  const legs = Math.max(stops.length - 1, 0)

  return (
    <section className="search-group">
      <div className="search-group-head">
        <p className="section-label">
          {t('tourTitle', lang)} {stops.length > 0 ? stops.length : ''}
        </p>
        {stops.length === 0 ? null : confirming ? (
          <span className="trip-confirm">
            <button
              type="button"
              className="plan-btn plan-btn-danger"
              onClick={() => {
                setRoute([])
                setConfirming(false)
              }}
            >
              {t('tourClear', lang)}
            </button>
            <button type="button" className="plan-btn" onClick={() => setConfirming(false)}>
              {t('planCancel', lang)}
            </button>
          </span>
        ) : (
          <button type="button" className="plan-btn" onClick={() => setConfirming(true)}>
            {t('tourClear', lang)}
          </button>
        )}
      </div>
      <div className="transit-card">
        {stops.length > 0 ? (
          <ol className="tour-stops">
            {stops.map((city, i) => {
              const days = trip.plans[city.id]?.length
              return (
                <li key={`${city.id}-${i}`}>
                  {i > 0 ? <Leg from={stops[i - 1]} to={city} lang={lang} /> : null}
                  <div className="tour-stop">
                    <span className="tour-stop-n">{i + 1}</span>
                    <Link className="tour-stop-city" to={`/city/${city.id}`}>
                      {city.name[lang]}
                      {days ? (
                        <span className="tour-stop-days">{t('tourDays', lang).replace('{n}', String(days))}</span>
                      ) : null}
                    </Link>
                    <button
                      type="button"
                      className="plan-icon-btn"
                      aria-label={`${city.name[lang]} — ${t('planUp', lang)}`}
                      disabled={i === 0}
                      onClick={() => move(i, -1)}
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      className="plan-icon-btn"
                      aria-label={`${city.name[lang]} — ${t('planDown', lang)}`}
                      disabled={i === stops.length - 1}
                      onClick={() => move(i, 1)}
                    >
                      ↓
                    </button>
                    <button
                      type="button"
                      className="plan-icon-btn"
                      aria-label={`${city.name[lang]} — ${t('tourRemove', lang)}`}
                      onClick={() => setRoute(ids.filter((_, n) => n !== i))}
                    >
                      ×
                    </button>
                  </div>
                </li>
              )
            })}
          </ol>
        ) : null}
        {legs > 0 && known > 0 ? (
          <p className="itinerary-total">
            {t(known === legs ? 'tourTotal' : 'tourTotalPartial', lang)
              .replace('{n}', String(legs))
              .replace('{m}', String(known))
              .replace('{time}', duration(minutes, lang))}
          </p>
        ) : null}

        <input
          className="search-input tour-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('tourAdd', lang)}
          aria-label={t('tourAdd', lang)}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />
        {matches.length > 0 ? (
          <div className="itinerary-stops tour-picks">
            {matches.map((e) => (
              <button key={e.key} type="button" className="itinerary-stop" onClick={() => add(e.key)}>
                + {e.title[lang]} <span className="itinerary-stop-more">{e.sub[lang]}</span>
              </button>
            ))}
          </div>
        ) : null}
        {!query.trim() && onward.length > 0 ? (
          <>
            <p className="tour-pick-label">{t('tourNext', lang).replace('{city}', last.name[lang])}</p>
            <div className="itinerary-stops tour-picks">
              {onward.map((c) => (
                <button key={c.id} type="button" className="itinerary-stop" onClick={() => add(c.id)}>
                  + {c.name[lang]}
                </button>
              ))}
            </div>
          </>
        ) : null}
        {!query.trim() && planned.length > 0 ? (
          <>
            <p className="tour-pick-label">{t('tourFromPlans', lang)}</p>
            <div className="itinerary-stops tour-picks">
              {planned.map((c) => (
                <button key={c.id} type="button" className="itinerary-stop" onClick={() => add(c.id)}>
                  + {c.name[lang]}
                </button>
              ))}
            </div>
          </>
        ) : null}
        <p className="route-hint">{t('tourHint', lang)}</p>
      </div>
    </section>
  )
}
