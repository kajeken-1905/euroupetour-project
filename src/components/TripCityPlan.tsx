import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { City } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { getPlace } from '../data/countryData'
import { t } from '../i18n/ui'
import { setPlan, useTrip } from '../trip/store'
import { directionsUrl } from '../utils/directions'
import { MyPlanPanel } from './MyPlanPanel'

const OPEN_KEY = 'trip-open-v1'

function readOpen(): string[] {
  try {
    const raw = JSON.parse(localStorage.getItem(OPEN_KEY) ?? '[]')
    return Array.isArray(raw) ? raw.filter((v): v is string => typeof v === 'string') : []
  } catch {
    return []
  }
}

/** Which plans and legs of the trip timeline are open; remembered in this browser only. */
export function useOpenKeys() {
  const [open, setOpen] = useState(() => new Set(readOpen()))
  const save = (next: Set<string>) => {
    setOpen(next)
    try {
      localStorage.setItem(OPEN_KEY, JSON.stringify([...next]))
    } catch {
      // Private windows may refuse storage; the panels still open and close for this visit.
    }
  }
  return {
    isOpen: (key: string) => open.has(key),
    toggle: (key: string) => {
      const next = new Set(open)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      save(next)
    },
    setAll: (keys: string[], on: boolean) => {
      const next = new Set(open)
      for (const key of keys) {
        if (on) next.add(key)
        else next.delete(key)
      }
      save(next)
    },
  }
}

/**
 * A city's own plan inside the trip timeline on the home screen: a one-line summary that opens to the days, an edit
 * mode with the same editor as the city screen, and delete. Without a plan it links to the city to make one.
 */
export function TripCityPlan({ city, open, onToggle }: { city: City; open: boolean; onToggle: () => void }) {
  const { lang } = useLanguage()
  const trip = useTrip()
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const days = trip.plans[city.id]

  if (!days) {
    return (
      <Link className="trip-plan-make" to={`/city/${city.id}`}>
        ＋ {t('tripMakePlan', lang)} →
      </Link>
    )
  }

  const names = new Map<string, string>(city.highlights.map((h) => [h.id, h.name[lang]]))
  const mapsUrls = new Map<string, string>(city.highlights.map((h) => [h.id, h.mapsUrl]))
  const stopCount = days.reduce((n, d) => n + d.stops.length, 0)
  const openStop = (id: string) =>
    names.has(id) ? navigate(`/city/${city.id}`, { state: { highlightId: id } }) : navigate(`/place/${id}`)

  return (
    <div className="trip-plan-block">
      <button type="button" className="trip-toggle" aria-expanded={open} onClick={onToggle}>
        <span className="trip-toggle-icon" aria-hidden="true">{open ? '▾' : '▸'}</span>
        {t('tripPlanSummary', lang).replace('{n}', String(days.length)).replace('{s}', String(stopCount))}
      </button>
      {!open ? null : editing ? (
        <>
          <MyPlanPanel city={city} embedded onStop={openStop} />
          <div className="plan-actions">
            <button type="button" className="plan-btn" onClick={() => setEditing(false)}>
              {t('tripEditDone', lang)}
            </button>
          </div>
        </>
      ) : (
        <>
          <ol className="itinerary-days">
            {days.map((day, d) => {
              const stops = day.stops
                .map((id) => names.get(id) ?? getPlace(id)?.name)
                .filter((n): n is string => !!n)
              const directions = directionsUrl(
                day.stops.map((id) => mapsUrls.get(id) ?? getPlace(id)?.mapsUrl).filter((u): u is string => !!u),
              )
              return (
                <li key={d} className="itinerary-day">
                  <p className="itinerary-day-title">
                    {[t('itineraryDayN', lang).replace('{n}', String(d + 1)), day.title?.[lang]].filter(Boolean).join(' · ')}
                  </p>
                  <p className="trip-stops">{stops.length ? stops.join(' → ') : t('planEmptyDay', lang)}</p>
                  {directions ? (
                    <a className="plan-map-link" href={directions} target="_blank" rel="noopener noreferrer">
                      🗺 {t('planDirections', lang)} ↗
                    </a>
                  ) : null}
                </li>
              )
            })}
          </ol>
          <div className="plan-actions">
            <button type="button" className="plan-btn" onClick={() => setEditing(true)}>
              ✏️ {t('tripEditPlan', lang)}
            </button>
            {confirming ? (
              <>
                <button
                  type="button"
                  className="plan-btn plan-btn-danger"
                  onClick={() => {
                    setPlan(city.id, undefined)
                    setConfirming(false)
                  }}
                >
                  {t('planClearConfirm', lang)}
                </button>
                <button type="button" className="plan-btn" onClick={() => setConfirming(false)}>
                  {t('planCancel', lang)}
                </button>
              </>
            ) : (
              <button
                type="button"
                className="plan-btn"
                aria-label={`${city.name[lang]} — ${t('tripDeletePlan', lang)}`}
                onClick={() => setConfirming(true)}
              >
                {t('tripDeletePlan', lang)}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
