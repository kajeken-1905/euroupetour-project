import { useEffect, useMemo, useState } from 'react'
import type { City } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { getCityItinerary } from '../data/itinerary'
import { getHighlightVisit } from '../data/visit'
import { t } from '../i18n/ui'
import { buildPlan, WEEKDAYS } from '../trip/planner'
import { setPlan, useTrip } from '../trip/store'
import { DAYS } from './HighlightCard'
import { hours, jump } from './ItineraryPanel'
import { isoDate, useHolidays } from '../services/holidays'

/** Minutes of sightseeing a day for each pace. */
const PACES = [
  { key: 'plannerEasy', minutes: 240 },
  { key: 'plannerNormal', minutes: 360 },
  { key: 'plannerFull', minutes: 480 },
] as const

/** `2026-11-02` → local midnight; undefined for an empty or malformed value. */
function parseDate(value: string) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : undefined
}

/** Builds a day-by-day plan for the city from a few conditions; saving it makes it the traveller's own plan. */
export function PlannerPanel({ city }: { city: City }) {
  const { lang } = useLanguage()
  const trip = useTrip()
  const [open, setOpen] = useState(false)
  const [geo, setGeo] = useState<Record<string, [number, number]> | null>(null)
  const [days, setDays] = useState(2)
  const [date, setDate] = useState('')
  const [pace, setPace] = useState(1)
  const [useFavourites, setUseFavourites] = useState(true)
  const [useTrips, setUseTrips] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setOpen(false)
    setSaved(false)
    setConfirming(false)
  }, [city.id])
  useEffect(() => {
    if (open && !geo) import('../data/geo').then((m) => setGeo(m.HIGHLIGHT_GEO))
  }, [open, geo])

  const suggested = useMemo(() => {
    const ids = new Set(city.highlights.map((h) => h.id))
    return (getCityItinerary(city.id)?.days ?? [])
      .map((d) => ({ ...d, stops: d.stops.filter((id) => ids.has(id)) }))
      .filter((d) => d.stops.length > 0)
  }, [city])
  const favourites = useMemo(
    () => new Set(city.highlights.map((h) => h.id).filter((id) => trip.highlights.includes(id))),
    [city, trip.highlights],
  )
  const hasTrips = suggested.some((d) => d.trip)
  const start = parseDate(date)
  const startWeekday = start ? (start.getDay() + 6) % 7 : undefined
  // Public holidays on the chosen dates, when shops and museums may close.
  const holidays = useHolidays(start ? city.countryId : undefined, start ? [start.getFullYear(), start.getFullYear() + 1] : [])

  const result = useMemo(
    () =>
      geo
        ? buildPlan({
            city,
            suggested,
            days,
            startWeekday,
            budget: PACES[pace].minutes,
            favourites: useFavourites ? favourites : new Set(),
            trips: useTrips && hasTrips,
            geo,
          })
        : undefined,
    [geo, city, suggested, days, startWeekday, pace, useFavourites, favourites, useTrips, hasTrips],
  )

  if (city.highlights.length < 2) return null
  if (!open) {
    return (
      <section className="itinerary-panel planner" aria-label={t('plannerTitle', lang)}>
        <div className="plan-actions">
          <button type="button" className="plan-btn" onClick={() => setOpen(true)}>
            {t('plannerOpen', lang)}
          </button>
        </div>
      </section>
    )
  }

  const byId = new Map(city.highlights.map((h) => [h.id, h]))
  const change = <T,>(set: (value: T) => void) => (value: T) => {
    set(value)
    setSaved(false)
    setConfirming(false)
  }
  /** "11월 2일(월)" / "Mon 2 Nov" for the nth day, or just the weekday rule when no date was given. */
  const dateLabel = (n: number) => {
    if (!start) return undefined
    const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + n)
    const wd = DAYS[WEEKDAYS[(d.getDay() + 6) % 7]]
    return {
      ko: `${d.getMonth() + 1}월 ${d.getDate()}일(${wd.ko})`,
      en: `${wd.en} ${d.getDate()} ${d.toLocaleString('en', { month: 'short' })}`,
    }
  }
  /** The holiday falling on the nth day, if any. */
  const holidayOn = (n: number) => {
    if (!start || !holidays) return undefined
    const day = isoDate(new Date(start.getFullYear(), start.getMonth(), start.getDate() + n))
    return holidays.find((h) => h.date === day)
  }
  const filled = result?.days.filter((d) => d.stops.length > 0) ?? []
  const hasPlan = city.id in trip.plans
  const save = () => {
    if (!result) return
    setPlan(
      city.id,
      result.days.flatMap((d, i) => {
        if (d.stops.length === 0) return []
        const label = dateLabel(i)
        const title = label
          ? { ko: [label.ko, d.title?.ko].filter(Boolean).join(' · '), en: [label.en, d.title?.en].filter(Boolean).join(' · ') }
          : d.title
        return [{ ...(title ? { title } : {}), stops: d.stops }]
      }),
    )
    setSaved(true)
    setConfirming(false)
  }
  const reasons = {
    time: 'plannerLeftTime',
    closed: 'plannerLeftClosed',
    trip: 'plannerLeftTrip',
    shut: 'plannerLeftShut',
  } as const

  return (
    <section className="itinerary-panel planner" aria-label={t('plannerTitle', lang)}>
      <p className="section-label">{t('plannerTitle', lang)}</p>
      <div className="transit-card">
        <div className="planner-form">
          <label className="planner-field">
            <span>{t('plannerDays', lang)}</span>
            <select value={days} onChange={(e) => change(setDays)(Number(e.target.value))}>
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <option key={n} value={n}>
                  {t('plannerDaysN', lang).replace('{n}', String(n))}
                </option>
              ))}
            </select>
          </label>
          <label className="planner-field">
            <span>{t('plannerDate', lang)}</span>
            <input type="date" value={date} onChange={(e) => change(setDate)(e.target.value)} />
          </label>
        </div>
        <div className="planner-field">
          <span>{t('plannerPace', lang)}</span>
          <div className="itinerary-stops">
            {PACES.map((p, i) => (
              <button
                key={p.key}
                type="button"
                className={`itinerary-stop${pace === i ? ' is-on' : ''}`}
                aria-pressed={pace === i}
                onClick={() => change(setPace)(i)}
              >
                {t(p.key, lang)}
              </button>
            ))}
          </div>
        </div>
        {favourites.size > 0 ? (
          <label className="planner-check">
            <input type="checkbox" checked={useFavourites} onChange={(e) => change(setUseFavourites)(e.target.checked)} />
            {t('plannerFavourites', lang).replace('{n}', String(favourites.size))}
          </label>
        ) : null}
        {hasTrips ? (
          <label className="planner-check">
            <input
              type="checkbox"
              checked={useTrips}
              disabled={days < 2}
              onChange={(e) => change(setUseTrips)(e.target.checked)}
            />
            {t('plannerTrips', lang)}
          </label>
        ) : null}
        {start ? null : <p className="route-hint">{t('plannerNoDate', lang)}</p>}

        {result ? (
          <>
            <ol className="itinerary-days planner-result">
              {result.days.map((day, i) => {
                const label = dateLabel(i)?.[lang]
                const heading = [
                  t('itineraryDayN', lang).replace('{n}', String(i + 1)),
                  label,
                  day.trip ? t('itineraryTrip', lang) : undefined,
                  day.title?.[lang],
                ]
                  .filter(Boolean)
                  .join(' · ')
                const holiday = holidayOn(i)
                return (
                  <li key={i} className="itinerary-day">
                    <p className="itinerary-day-title">{heading}</p>
                    {holiday ? (
                      <p className="planner-holiday">
                        🎌 {t('plannerHoliday', lang).replace('{name}', holiday.name)}
                        {holiday.nationwide ? '' : ` (${t('holidaysRegional', lang)})`}
                      </p>
                    ) : null}
                    {day.stops.length === 0 ? (
                      <p className="itinerary-total">{t('plannerEmptyDay', lang)}</p>
                    ) : (
                      <>
                        <div className="itinerary-stops">
                          {day.stops.map((id, n) => {
                            const booking = getHighlightVisit(id)?.booking
                            return (
                              <span key={id} className="itinerary-stop-wrap">
                                {n > 0 ? <span className="itinerary-arrow" aria-hidden="true">→</span> : null}
                                <button type="button" className="itinerary-stop" onClick={() => jump(id)}>
                                  {favourites.has(id) ? '♥ ' : ''}
                                  {byId.get(id)!.name[lang]}
                                  {booking === 'required' || booking === 'recommended' ? ' 🎫' : ''}
                                </button>
                              </span>
                            )
                          })}
                        </div>
                        <p className="itinerary-total">
                          ⏱ {t('plannerTotal', lang).replace('{t}', hours([day.minutes, day.minutes], lang))}
                        </p>
                      </>
                    )}
                  </li>
                )
              })}
            </ol>
            {result.left.length > 0 ? (
              <div className="itinerary-more">
                <p className="itinerary-day-title">{t('plannerLeft', lang)}</p>
                <div className="itinerary-stops">
                  {result.left.map(({ id, reason }) => (
                    <button key={id} type="button" className="itinerary-stop itinerary-stop-more" onClick={() => jump(id)}>
                      {byId.get(id)!.name[lang]}
                      {reason === 'time' ? '' : ` · ${t(reasons[reason], lang)}`}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
            <p className="itinerary-note">{t('plannerNote', lang)}</p>
            <div className="plan-actions">
              {saved ? (
                <span className="offline-saved">✓ {t('plannerSaved', lang)}</span>
              ) : hasPlan && !confirming ? (
                <button type="button" className="plan-btn" disabled={filled.length === 0} onClick={() => setConfirming(true)}>
                  {t('plannerReplace', lang)}
                </button>
              ) : (
                <button
                  type="button"
                  className={`plan-btn${hasPlan ? ' plan-btn-danger' : ''}`}
                  disabled={filled.length === 0}
                  onClick={save}
                >
                  {t(hasPlan ? 'plannerReplaceConfirm' : 'plannerSave', lang)}
                </button>
              )}
              {confirming ? (
                <button type="button" className="plan-btn" onClick={() => setConfirming(false)}>
                  {t('plannerCancel', lang)}
                </button>
              ) : null}
            </div>
          </>
        ) : (
          <p className="route-hint">…</p>
        )}
      </div>
    </section>
  )
}
