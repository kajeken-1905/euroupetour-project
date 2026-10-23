import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LanguageToggle } from '../components/LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'
import { getCityBrief } from '../data/cityIndex'
import { countryOfCity, getCity, useCountryData } from '../data/countryData'
import { t } from '../i18n/ui'
import { decodeShare } from '../trip/share'
import { stopInfo } from '../trip/shareText'
import { setPlan, setRoute, useTrip, type PlanDay } from '../trip/store'
import { directionsUrl } from '../utils/directions'

/** A plan or route someone sent as a link: shown read-only, with a button to take it into this browser. */
export function SharePage() {
  const { lang } = useLanguage()
  const shared = decodeShare(useLocation().hash.slice(1))

  return (
    <div>
      <header className="page-header">
        <div className="top-bar" style={{ paddingTop: 0 }}>
          <div>
            <Link to="/" className="back-link">
              ← {t('home', lang)}
            </Link>
            <h2>{t('shareReceivedTitle', lang)}</h2>
          </div>
          <LanguageToggle />
        </div>
      </header>
      {!shared ? (
        <div className="empty-state">{t('shareBroken', lang)}</div>
      ) : shared.kind === 'plan' ? (
        <SharedPlan cityId={shared.cityId} days={shared.days} />
      ) : (
        <SharedRoute route={shared.route} />
      )}
    </div>
  )
}

function SharedPlan({ cityId, days }: { cityId: string; days: PlanDay[] }) {
  const country = countryOfCity(cityId)
  const ready = useCountryData(country ? [country] : [])
  const { lang } = useLanguage()
  const trip = useTrip()
  const navigate = useNavigate()
  const [confirming, setConfirming] = useState(false)
  if (!country) return <div className="empty-state">{t('shareBroken', lang)}</div>
  if (!ready) return null
  const city = getCity(cityId)
  if (!city) return <div className="empty-state">{t('shareBroken', lang)}</div>

  // Keep only stops this version of the app still knows.
  const known = days.map((day) => ({ ...day, stops: day.stops.filter((id) => stopInfo(city, id, lang)) }))
  const take = () => {
    setPlan(city.id, known)
    navigate(`/city/${city.id}`)
  }

  return (
    <section className="itinerary-panel">
      <p className="section-label">
        {t('sharePlanHeading', lang).replace('{city}', city.name[lang]).replace('{n}', String(known.length))}
      </p>
      <div className="transit-card">
        <ol className="itinerary-days">
          {known.map((day, d) => {
            const stops = day.stops.map((id) => stopInfo(city, id, lang)!)
            const directions = directionsUrl(stops.map((s) => s.mapsUrl))
            return (
              <li key={d} className="itinerary-day">
                <p className="itinerary-day-title">
                  {[t('itineraryDayN', lang).replace('{n}', String(d + 1)), day.title?.[lang]].filter(Boolean).join(' · ')}
                </p>
                <p className="trip-stops">
                  {stops.length ? stops.map((s) => (s.place ? `🍽 ${s.name}` : s.name)).join(' → ') : t('planEmptyDay', lang)}
                </p>
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
          {trip.plans[city.id] && !confirming ? (
            <button type="button" className="plan-btn" onClick={() => setConfirming(true)}>
              {t('shareTakePlan', lang)}
            </button>
          ) : (
            <button type="button" className={`plan-btn${confirming ? ' plan-btn-danger' : ''}`} onClick={take}>
              {t(confirming ? 'shareReplacePlan' : 'shareTakePlan', lang)}
            </button>
          )}
          <Link className="plan-btn" to={`/city/${city.id}`}>
            {city.name[lang]} →
          </Link>
        </div>
        {confirming ? <p className="itinerary-note">{t('shareReplacePlanNote', lang)}</p> : null}
        <p className="itinerary-note">{t('shareLocalNote', lang)}</p>
      </div>
    </section>
  )
}

function SharedRoute({ route }: { route: string[] }) {
  const { lang } = useLanguage()
  const trip = useTrip()
  const navigate = useNavigate()
  const [confirming, setConfirming] = useState(false)
  const cities = route.map((id) => getCityBrief(id)).filter((c) => !!c)
  if (cities.length === 0) return <div className="empty-state">{t('shareBroken', lang)}</div>
  const take = () => {
    setRoute(cities.map((c) => c.id))
    navigate('/', { state: { scrollTo: 'my-trip' } })
  }

  return (
    <section className="itinerary-panel">
      <p className="section-label">{t('shareRouteHeading', lang).replace('{n}', String(cities.length))}</p>
      <div className="transit-card">
        <ol className="tour-shared">
          {cities.map((c, i) => (
            <li key={`${c.id}-${i}`}>
              <Link to={`/city/${c.id}`}>{c.name[lang]}</Link>
            </li>
          ))}
        </ol>
        <div className="plan-actions">
          {trip.route.length > 0 && !confirming ? (
            <button type="button" className="plan-btn" onClick={() => setConfirming(true)}>
              {t('shareTakeRoute', lang)}
            </button>
          ) : (
            <button type="button" className={`plan-btn${confirming ? ' plan-btn-danger' : ''}`} onClick={take}>
              {t(confirming ? 'shareReplaceRoute' : 'shareTakeRoute', lang)}
            </button>
          )}
        </div>
        {confirming ? <p className="itinerary-note">{t('shareReplaceRouteNote', lang)}</p> : null}
        <p className="itinerary-note">{t('shareLocalNote', lang)}</p>
      </div>
    </section>
  )
}
