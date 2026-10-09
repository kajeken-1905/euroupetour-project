import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { City } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { places } from '../data/places'
import { t } from '../i18n/ui'
import { setPlan, useTrip, type PlanDay } from '../trip/store'
import { closures, dayMinutes, hours, jump } from './ItineraryPanel'

/** Move a stop up or down; at the edge of a day it crosses into the neighbouring day. */
function moveStop(days: PlanDay[], d: number, i: number, dir: -1 | 1): PlanDay[] {
  const next = days.map((day) => ({ ...day, stops: [...day.stops] }))
  const stops = next[d].stops
  const j = i + dir
  if (j >= 0 && j < stops.length) {
    ;[stops[i], stops[j]] = [stops[j], stops[i]]
  } else if (next[d + dir]) {
    const [id] = stops.splice(i, 1)
    if (dir < 0) next[d + dir].stops.push(id)
    else next[d + dir].stops.unshift(id)
  }
  return next
}

export function MyPlanPanel({ city }: { city: City }) {
  const { lang } = useLanguage()
  const trip = useTrip()
  const [confirming, setConfirming] = useState(false)
  const days = trip.plans[city.id]
  if (!days) return null

  const highlightById = new Map(city.highlights.map((h) => [h.id, h]))
  const cityPlaces = places.filter((p) => p.cityId === city.id)
  const placeById = new Map(cityPlaces.map((p) => [p.id, p]))
  const known = (id: string) => highlightById.has(id) || placeById.has(id)
  const used = new Set(days.flatMap((d) => d.stops))

  const savedHighlights = city.highlights.filter((h) => !used.has(h.id) && trip.highlights.includes(h.id))
  const savedPlaces = cityPlaces.filter((p) => !used.has(p.id) && trip.places.includes(p.id))
  const otherHighlights = city.highlights.filter((h) => !used.has(h.id) && !trip.highlights.includes(h.id))
  const canAdd = savedHighlights.length + savedPlaces.length + otherHighlights.length > 0

  const save = (next: PlanDay[]) => setPlan(city.id, next)
  const update = (d: number, stops: string[]) => save(days.map((day, i) => (i === d ? { ...day, stops } : day)))

  return (
    <section className="itinerary-panel" aria-label={t('planTitle', lang)}>
      <p className="section-label">{t('planTitle', lang)}</p>
      <div className="transit-card">
        <ol className="itinerary-days">
          {days.map((day, d) => {
            const stops = day.stops.filter(known)
            const visible: PlanDay = { ...day, stops }
            const total = dayMinutes(visible)
            const heading = [t('itineraryDayN', lang).replace('{n}', String(d + 1)), day.title?.[lang]]
              .filter(Boolean)
              .join(' · ')
            return (
              <li key={d} className="itinerary-day">
                <div className="plan-day-head">
                  <p className="itinerary-day-title">{heading}</p>
                  {days.length > 1 ? (
                    <button type="button" className="plan-text-btn" onClick={() => save(days.filter((_, i) => i !== d))}>
                      {t('planRemoveDay', lang)}
                    </button>
                  ) : null}
                </div>
                {stops.length === 0 ? <p className="itinerary-total">{t('planEmptyDay', lang)}</p> : null}
                <ul className="plan-stops">
                  {stops.map((id, i) => {
                    const highlight = highlightById.get(id)
                    const name = highlight ? highlight.name[lang] : placeById.get(id)!.name
                    const first = d === 0 && i === 0
                    const last = d === days.length - 1 && i === stops.length - 1
                    return (
                      <li key={id} className="plan-stop">
                        {highlight ? (
                          <button type="button" className="plan-stop-name" onClick={() => jump(id)}>
                            {name}
                          </button>
                        ) : (
                          <Link className="plan-stop-name" to={`/place/${id}`}>
                            🍽 {name}
                          </Link>
                        )}
                        <button
                          type="button"
                          className="plan-icon-btn"
                          disabled={first}
                          aria-label={`${name} — ${t('planUp', lang)}`}
                          onClick={() => save(moveStop(days.map((x, k) => (k === d ? visible : x)), d, i, -1))}
                        >
                          ▲
                        </button>
                        <button
                          type="button"
                          className="plan-icon-btn"
                          disabled={last}
                          aria-label={`${name} — ${t('planDown', lang)}`}
                          onClick={() => save(moveStop(days.map((x, k) => (k === d ? visible : x)), d, i, 1))}
                        >
                          ▼
                        </button>
                        <button
                          type="button"
                          className="plan-icon-btn"
                          aria-label={`${name} — ${t('planRemoveStop', lang)}`}
                          onClick={() => update(d, stops.filter((s) => s !== id))}
                        >
                          ✕
                        </button>
                      </li>
                    )
                  })}
                </ul>
                {total[1] > 0 ? (
                  <p className="itinerary-total">⏱ {t('itineraryTotal', lang).replace('{t}', hours(total, lang))}</p>
                ) : null}
                {closures(visible, highlightById, lang).map((line) => (
                  <p key={line} className="itinerary-closed">🗓 {line}</p>
                ))}
                {canAdd ? (
                  <select
                    className="plan-add"
                    value=""
                    aria-label={t('planAddStop', lang)}
                    onChange={(e) => e.target.value && update(d, [...stops, e.target.value])}
                  >
                    <option value="">＋ {t('planAddStop', lang)}</option>
                    {savedHighlights.length + savedPlaces.length > 0 ? (
                      <optgroup label={`♥ ${t('favTitle', lang)}`}>
                        {savedHighlights.map((h) => (
                          <option key={h.id} value={h.id}>{h.name[lang]}</option>
                        ))}
                        {savedPlaces.map((p) => (
                          <option key={p.id} value={p.id}>🍽 {p.name}</option>
                        ))}
                      </optgroup>
                    ) : null}
                    {otherHighlights.length > 0 ? (
                      <optgroup label={t('highlights', lang)}>
                        {otherHighlights.map((h) => (
                          <option key={h.id} value={h.id}>{h.name[lang]}</option>
                        ))}
                      </optgroup>
                    ) : null}
                  </select>
                ) : null}
              </li>
            )
          })}
        </ol>
        <div className="plan-actions">
          <button type="button" className="plan-btn" onClick={() => save([...days, { stops: [] }])}>
            ＋ {t('planAddDay', lang)}
          </button>
          {confirming ? (
            <>
              <button type="button" className="plan-btn plan-btn-danger" onClick={() => setPlan(city.id, undefined)}>
                {t('planClearConfirm', lang)}
              </button>
              <button type="button" className="plan-btn" onClick={() => setConfirming(false)}>
                {t('planCancel', lang)}
              </button>
            </>
          ) : (
            <button type="button" className="plan-btn" onClick={() => setConfirming(true)}>
              {t('planClear', lang)}
            </button>
          )}
        </div>
        <p className="itinerary-note">{t('planNote', lang)}</p>
      </div>
    </section>
  )
}
