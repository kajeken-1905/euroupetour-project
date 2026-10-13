import { lazy, Suspense, useEffect, useState } from 'react'
import type { City } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { getCityItinerary } from '../data/itinerary'
import { t } from '../i18n/ui'
import { useTrip } from '../trip/store'
import { jump } from './ItineraryPanel'

const CityMapView = lazy(() => import('./CityMapView'))

/** Highlights of one city on a street map; only places whose position two sources agree on get a pin. */
export function CityMap({ city }: { city: City }) {
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [geo, setGeo] = useState<Record<string, [number, number]> | null>(null)
  const [day, setDay] = useState(-1)
  const plan = useTrip().plans[city.id]

  useEffect(() => {
    setOpen(false)
    setDay(-1)
  }, [city.id])
  useEffect(() => {
    if (open && !geo) import('../data/geo').then((m) => setGeo(m.HIGHLIGHT_GEO))
  }, [open, geo])

  const byId = new Map(city.highlights.map((h) => [h.id, h]))
  const suggested = getCityItinerary(city.id)?.days ?? []
  // The traveller's own plan, once there is one, replaces the suggested days.
  const mine = plan && plan.length > 0
  const days = (mine ? plan.map((d) => ({ ...d, trip: false })) : suggested)
    .map((d) => ({ ...d, stops: d.stops.filter((id) => byId.has(id)) }))
    .filter((d) => d.stops.length > 0)
  // Day trips (Versailles from Paris) would zoom the overview out to the whole region.
  const far = new Set(suggested.filter((d) => d.trip).flatMap((d) => d.stops))
  const shown = day >= 0 && days[day] ? days[day].stops.map((id) => byId.get(id)!) : city.highlights
  const pins = geo
    ? shown.flatMap((h, i) =>
        geo[h.id]
          ? [{ id: h.id, name: h.name[lang], at: geo[h.id], n: day >= 0 ? i + 1 : undefined, far: day < 0 && far.has(h.id) }]
          : [],
      )
    : []
  const missing = geo ? shown.filter((h) => !geo[h.id]) : []

  let dayNo = 0
  return (
    <section className="city-map" aria-label={t('cityMapTitle', lang)}>
      <p className="section-label">{t('cityMapTitle', lang)}</p>
      <div className="transit-card">
        {!open ? (
          <>
            <button type="button" className="plan-btn" onClick={() => setOpen(true)}>
              {t('cityMapOpen', lang)}
            </button>
            <p className="route-hint">{t('cityMapHint', lang)}</p>
          </>
        ) : !geo ? (
          <p className="route-hint">{t('cityMapLoading', lang)}</p>
        ) : (
          <>
            {days.length > 0 ? (
              <div className="itinerary-stops city-map-days">
                <button type="button" className={`itinerary-stop${day < 0 ? ' is-on' : ''}`} onClick={() => setDay(-1)}>
                  {t('cityMapAll', lang)}
                </button>
                {days.map((d, i) => {
                  const label = mine
                    ? `${t('planTitle', lang)} ${t('itineraryDayN', lang).replace('{n}', String(i + 1))}`
                    : d.trip
                      ? [t('itineraryTrip', lang), d.title?.[lang]].filter(Boolean).join(' · ')
                      : days.filter((x) => !x.trip).length > 1
                        ? t('itineraryDayN', lang).replace('{n}', String(++dayNo))
                        : t('itineraryTitle', lang)
                  return (
                    <button key={i} type="button" className={`itinerary-stop${day === i ? ' is-on' : ''}`} onClick={() => setDay(i)}>
                      {label}
                    </button>
                  )
                })}
              </div>
            ) : null}
            {pins.length > 0 ? (
              <Suspense fallback={<p className="route-hint">{t('cityMapLoading', lang)}</p>}>
                <CityMapView pins={pins} onPick={jump} />
              </Suspense>
            ) : (
              <p className="route-hint">{t('cityMapNone', lang)}</p>
            )}
            {day >= 0 && pins.length > 0 ? (
              <ol className="city-map-list">
                {shown.map((h, i) => (
                  <li key={h.id} className={geo[h.id] ? '' : 'is-missing'}>
                    <span className="tour-stop-n">{i + 1}</span>
                    <button type="button" className="city-map-popup" onClick={() => jump(h.id)}>
                      {h.name[lang]}
                    </button>
                  </li>
                ))}
              </ol>
            ) : null}
            {missing.length > 0 && pins.length > 0 ? (
              <p className="route-hint">
                {t('cityMapMissing', lang).replace('{n}', String(missing.length))}: {missing.map((h) => h.name[lang]).join(', ')}
              </p>
            ) : null}
            <p className="route-hint">{t('cityMapNote', lang)}</p>
          </>
        )}
      </div>
    </section>
  )
}
