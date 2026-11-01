import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { getCity } from '../data/countryData'
import { getCityRoutes, getRoutesBetween, getSurfacePath } from '../data/routes'
import { t } from '../i18n/ui'
import { clearPlans, setRoute, setRouteDate, useTrip } from '../trip/store'
import type { City, CityRoute, Lang } from '../types'
import { search } from '../utils/search'
import { shareUrl } from '../trip/share'
import { routeText } from '../trip/shareText'
import { ShareButtons } from './ShareButtons'
import { duration, MODE_ICON } from './RoutesPanel'
import { TripCityPlan, useOpenKeys } from './TripCityPlan'

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
  const path = getSurfacePath(from.id, to.id)
  const stops = path ? path.map((leg) => getCity(leg.fromCityId)) : []
  if (!path || stops.some((c) => !c)) {
    return (
      <div className="tour-leg tour-leg-none">
        {t('tourNoDirect', lang)} {t('tourNoInfo', lang)}
      </div>
    )
  }
  const via = (stops.slice(1) as City[]).map((c) => c.name[lang]).join(' · ')
  return (
    <div className="tour-leg tour-leg-none">
      <span>
        {t('tourNoDirect', lang)} {t('tourVia', lang).replace('{city}', via)}:
      </span>
      {path.map((leg, i) => {
        const a = stops[i] as City
        const b = i + 1 < path.length ? (stops[i + 1] as City) : to
        return <LegLine key={a.id} route={leg.route} lang={lang} label={`${a.name[lang]} → ${b.name[lang]}`} />
      })}
      <span>{t('tourViaNote', lang)}</span>
    </div>
  )
}

/** One line for a closed leg: the fastest direct way, or that the trip goes via another city or is unknown. */
function legSummary(from: City, to: City, lang: Lang) {
  if (from.id === to.id) return t('tourSame', lang)
  const [fastest] = getRoutesBetween(from.id, to.id)
  if (fastest) return `${MODE_ICON[fastest.mode]} ${t(`routeMode_${fastest.mode}`, lang)} · ${duration(fastest.minutes, lang)}`
  return getSurfacePath(from.id, to.id) ? `🔁 ${t('tourLegVia', lang)}` : t('tourNoDirect', lang)
}

/**
 * The trip on the home screen: the route's cities in order, each with its own plan (open to read, edit or delete),
 * the connection between each pair, and plans for cities not on the route yet. Open/closed state is per browser.
 */
export function TourPanel() {
  const { lang } = useLanguage()
  const trip = useTrip()
  const [query, setQuery] = useState('')
  const [confirming, setConfirming] = useState<'route' | 'plans' | null>(null)
  const openKeys = useOpenKeys()

  // Route entries whose city is known, each keeping its index in the stored route (for its visit date).
  const entries = trip.route
    .map((id, index) => ({ city: getCity(id), index }))
    .filter((e): e is { city: City; index: number } => !!e.city)
  const stops = entries.map((e) => e.city)
  const ids = stops.map((c) => c.id)
  const dates = entries.map((e) => trip.routeDates[e.index] ?? '')
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
    setRoute([...ids, cityId], [...dates, ''])
    setQuery('')
  }
  const move = (index: number, by: number) => {
    const next = [...ids]
    const nextDates = [...dates]
    const [id] = next.splice(index, 1)
    const [date] = nextDates.splice(index, 1)
    next.splice(index + by, 0, id)
    nextDates.splice(index + by, 0, date)
    setRoute(next, nextDates)
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
  const hasPlans = Object.keys(trip.plans).length > 0
  // A city on the route twice shows its plan at its first stop only.
  const planAt = (i: number) => ids.indexOf(ids[i]) === i && ids[i] in trip.plans
  const legKey = (i: number) => `leg:${ids[i - 1]}>${ids[i]}`
  const toggleKeys = [
    ...stops.flatMap((_, i) => [...(planAt(i) ? [`plan:${ids[i]}`] : []), ...(i > 0 ? [legKey(i)] : [])]),
    ...planned.map((c) => `plan:${c.id}`),
  ]
  const allOpen = toggleKeys.length > 0 && toggleKeys.every(openKeys.isOpen)

  return (
    <section className="search-group">
      <div className="search-group-head">
        <p className="section-label">
          {t('tourTitle', lang)} {stops.length > 0 ? stops.length : ''}
        </p>
        {confirming ? (
          <span className="trip-confirm">
            <button
              type="button"
              className="plan-btn plan-btn-danger"
              onClick={() => {
                if (confirming === 'route') setRoute([])
                else clearPlans()
                setConfirming(null)
              }}
            >
              {t(confirming === 'route' ? 'tourClear' : 'tripResetConfirm', lang)}
            </button>
            <button type="button" className="plan-btn" onClick={() => setConfirming(null)}>
              {t('planCancel', lang)}
            </button>
          </span>
        ) : (
          <span className="trip-confirm">
            {toggleKeys.length > 0 ? (
              <button type="button" className="plan-btn" onClick={() => openKeys.setAll(toggleKeys, !allOpen)}>
                {t(allOpen ? 'tourCollapseAll' : 'tourExpandAll', lang)}
              </button>
            ) : null}
            {hasPlans ? (
              <button type="button" className="plan-btn" onClick={() => setConfirming('plans')}>
                {t('tripReset', lang)}
              </button>
            ) : null}
            {stops.length > 0 ? (
              <button type="button" className="plan-btn" onClick={() => setConfirming('route')}>
                {t('tourClear', lang)}
              </button>
            ) : null}
          </span>
        )}
      </div>
      <div className="transit-card">
        {stops.length > 0 ? (
          <ol className="tour-stops">
            {stops.map((city, i) => {
              return (
                <li key={`${city.id}-${i}`}>
                  {i > 0 ? (
                    <div className="tour-leg-wrap">
                      <button
                        type="button"
                        className="trip-toggle tour-leg-toggle"
                        aria-expanded={openKeys.isOpen(legKey(i))}
                        onClick={() => openKeys.toggle(legKey(i))}
                      >
                        <span className="trip-toggle-icon" aria-hidden="true">
                          {openKeys.isOpen(legKey(i)) ? '▾' : '▸'}
                        </span>
                        {legSummary(stops[i - 1], city, lang)}
                      </button>
                      {openKeys.isOpen(legKey(i)) ? <Leg from={stops[i - 1]} to={city} lang={lang} /> : null}
                    </div>
                  ) : null}
                  <div className="tour-stop">
                    <span className="tour-stop-n">{i + 1}</span>
                    <Link className="tour-stop-city" to={`/city/${city.id}`}>
                      {city.name[lang]}

                    </Link>
                    <input
                      className="tour-stop-date"
                      type="date"
                      value={dates[i]}
                      onChange={(e) => setRouteDate(entries[i].index, e.target.value)}
                      aria-label={`${city.name[lang]} — ${t('tourDate', lang)}`}
                      title={t('tourDate', lang)}
                    />
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
                      onClick={() => setRoute(ids.filter((_, n) => n !== i), dates.filter((_, n) => n !== i))}
                    >
                      ×
                    </button>
                  </div>
                  {ids.indexOf(city.id) === i ? (
                    <div className="tour-stop-plan">
                      <TripCityPlan
                        city={city}
                        open={openKeys.isOpen(`plan:${city.id}`)}
                        onToggle={() => openKeys.toggle(`plan:${city.id}`)}
                      />
                    </div>
                  ) : null}
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
        {stops.length > 1 ? (
          <ShareButtons
            title={t('shareRouteHeading', lang).replace('{n}', String(stops.length))}
            text={routeText(stops, lang, dates)}
            url={shareUrl({ kind: 'route', route: ids, dates })}
          />
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
        {planned.length > 0 ? (
          <div className="tour-off-route">
            <p className="tour-pick-label">{t('tripPlansOffRoute', lang)}</p>
            {planned.map((c) => (
              <div key={c.id} className="tour-off-route-city">
                <div className="trip-plan-head">
                  <Link className="trip-city" to={`/city/${c.id}`}>
                    {c.name[lang]} →
                  </Link>
                  <button type="button" className="plan-btn" onClick={() => add(c.id)}>
                    + {t('tourAddCity', lang)}
                  </button>
                </div>
                <TripCityPlan city={c} open={openKeys.isOpen(`plan:${c.id}`)} onToggle={() => openKeys.toggle(`plan:${c.id}`)} />
              </div>
            ))}
          </div>
        ) : null}
        <p className="route-hint">{t('tourHint', lang)}</p>
      </div>
    </section>
  )
}
