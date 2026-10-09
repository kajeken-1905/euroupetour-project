import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LanguageToggle } from '../components/LanguageToggle'
import { FavoriteButton } from '../components/FavoriteButton'
import { useLanguage } from '../contexts/LanguageContext'
import { cities, getCity } from '../data/cities'
import { getPlace } from '../data/places'
import { t } from '../i18n/ui'
import type { City, CityHighlight, Place } from '../types'
import { clearPlans, mergeTrip, parseTrip, setPlan, useTrip } from '../trip/store'

let highlightCity: Map<string, City> | undefined

/** The city each highlight belongs to (ids alone do not say, since city ids contain hyphens). */
function cityOfHighlight(id: string) {
  highlightCity ??= new Map(cities.flatMap((c) => c.highlights.map((h) => [h.id, c] as const)))
  return highlightCity.get(id)
}

export function MyTripPage() {
  const { lang } = useLanguage()
  const trip = useTrip()
  const navigate = useNavigate()
  const fileRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState('')
  // What a delete button is waiting to confirm: a city id, or 'all' for the reset button.
  const [confirming, setConfirming] = useState<string | null>(null)

  const plans = Object.entries(trip.plans)
    .map(([cityId, days]) => ({ city: getCity(cityId), days }))
    .filter((p): p is { city: City; days: typeof p.days } => !!p.city)

  const groups = new Map<string, { city: City; highlights: CityHighlight[]; places: Place[] }>()
  const group = (city: City) => {
    if (!groups.has(city.id)) groups.set(city.id, { city, highlights: [], places: [] })
    return groups.get(city.id)!
  }
  for (const id of trip.highlights) {
    const city = cityOfHighlight(id)
    const highlight = city?.highlights.find((h) => h.id === id)
    if (city && highlight) group(city).highlights.push(highlight)
  }
  for (const id of trip.places) {
    const place = getPlace(id)
    const city = place ? getCity(place.cityId) : undefined
    if (place && city) group(city).places.push(place)
  }

  const exportFile = () => {
    const blob = new Blob([JSON.stringify({ app: 'europe-tour', version: 1, ...trip }, null, 2)], {
      type: 'application/json',
    })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'my-trip.json'
    a.click()
    URL.revokeObjectURL(a.href)
  }

  const importFile = async (file: File | undefined) => {
    if (!file) return
    try {
      const raw = JSON.parse(await file.text())
      const parsed = raw?.app === 'europe-tour' ? parseTrip(raw) : undefined
      if (!parsed) throw new Error('not a backup')
      mergeTrip(parsed)
      setMessage(t('tripImported', lang))
    } catch {
      setMessage(t('tripImportFailed', lang))
    }
    if (fileRef.current) fileRef.current.value = ''
  }

  const empty = plans.length === 0 && groups.size === 0

  return (
    <div className="search-page">
      <header className="page-header">
        <div className="top-bar" style={{ paddingTop: 0 }}>
          <h2>{t('trip', lang)}</h2>
          <LanguageToggle />
        </div>
      </header>

      {empty ? <div className="empty-state">{t('tripEmpty', lang)}</div> : null}

      {plans.length > 0 ? (
        <section className="search-group">
          <div className="search-group-head">
            <p className="section-label">
              {t('planTitle', lang)} {plans.length}
            </p>
            {confirming === 'all' ? (
              <span className="trip-confirm">
                <button
                  type="button"
                  className="plan-btn plan-btn-danger"
                  onClick={() => {
                    clearPlans()
                    setConfirming(null)
                  }}
                >
                  {t('tripResetConfirm', lang)}
                </button>
                <button type="button" className="plan-btn" onClick={() => setConfirming(null)}>
                  {t('planCancel', lang)}
                </button>
              </span>
            ) : (
              <button type="button" className="plan-btn" onClick={() => setConfirming('all')}>
                {t('tripReset', lang)}
              </button>
            )}
          </div>
          {plans.map(({ city, days }) => {
            const names = new Map<string, string>(city.highlights.map((h) => [h.id, h.name[lang]]))
            return (
              <div key={city.id} className="transit-card trip-plan">
                <div className="trip-plan-head">
                  <Link className="trip-city" to={`/city/${city.id}`}>
                    {city.name[lang]} →
                  </Link>
                  {confirming === city.id ? (
                    <span className="trip-confirm">
                      <button
                        type="button"
                        className="plan-btn plan-btn-danger"
                        onClick={() => {
                          setPlan(city.id, undefined)
                          setConfirming(null)
                        }}
                      >
                        {t('planClearConfirm', lang)}
                      </button>
                      <button type="button" className="plan-btn" onClick={() => setConfirming(null)}>
                        {t('planCancel', lang)}
                      </button>
                    </span>
                  ) : (
                    <button
                      type="button"
                      className="plan-btn"
                      aria-label={`${city.name[lang]} — ${t('tripDeletePlan', lang)}`}
                      onClick={() => setConfirming(city.id)}
                    >
                      {t('tripDeletePlan', lang)}
                    </button>
                  )}
                </div>
                <ol className="itinerary-days">
                  {days.map((day, d) => {
                    const stops = day.stops
                      .map((id) => names.get(id) ?? getPlace(id)?.name)
                      .filter((n): n is string => !!n)
                    return (
                      <li key={d} className="itinerary-day">
                        <p className="itinerary-day-title">
                          {[t('itineraryDayN', lang).replace('{n}', String(d + 1)), day.title?.[lang]]
                            .filter(Boolean)
                            .join(' · ')}
                        </p>
                        <p className="trip-stops">{stops.length ? stops.join(' → ') : t('planEmptyDay', lang)}</p>
                      </li>
                    )
                  })}
                </ol>
              </div>
            )
          })}
        </section>
      ) : null}

      {groups.size > 0 ? (
        <section className="search-group">
          <p className="section-label">
            {t('favTitle', lang)} {trip.highlights.length + trip.places.length}
          </p>
          {[...groups.values()].map(({ city, highlights, places }) => (
            <div key={city.id} className="trip-fav-group">
              <Link className="trip-city" to={`/city/${city.id}`}>
                {city.name[lang]} →
              </Link>
              <ul className="search-list">
                {highlights.map((h) => (
                  <li key={h.id} className="trip-fav">
                    <button
                      type="button"
                      className="search-item"
                      onClick={() => navigate(`/city/${city.id}`, { state: { highlightId: h.id } })}
                    >
                      <span className="search-item-title">{h.name[lang]}</span>
                      <span className="search-item-sub">{t('searchKind_highlight', lang)}</span>
                    </button>
                    <FavoriteButton kind="highlights" id={h.id} />
                  </li>
                ))}
                {places.map((p) => (
                  <li key={p.id} className="trip-fav">
                    <button type="button" className="search-item" onClick={() => navigate(`/place/${p.id}`)}>
                      <span className="search-item-title">{p.name}</span>
                      <span className="search-item-sub">{t('searchKind_place', lang)}</span>
                    </button>
                    <FavoriteButton kind="places" id={p.id} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ) : null}

      <section className="search-group">
        <p className="section-label">{t('tripBackup', lang)}</p>
        <div className="transit-card">
          <p className="itinerary-note" style={{ marginTop: 0 }}>{t('tripBackupNote', lang)}</p>
          <div className="plan-actions">
            <button type="button" className="plan-btn" onClick={exportFile} disabled={empty}>
              {t('tripExport', lang)}
            </button>
            <button type="button" className="plan-btn" onClick={() => fileRef.current?.click()}>
              {t('tripImport', lang)}
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              hidden
              onChange={(e) => importFile(e.target.files?.[0])}
            />
          </div>
          {message ? <p className="itinerary-total" role="status">{message}</p> : null}
        </div>
      </section>
    </div>
  )
}
