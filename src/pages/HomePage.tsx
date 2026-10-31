import { lazy, Suspense, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CityListItem } from '../components/CityListItem'
import { LanguageToggle } from '../components/LanguageToggle'
import { getCityBrief } from '../data/cityIndex'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import { useTrip } from '../trip/store'
import { useVisitedPlaces } from '../hooks/useVisitedPlaces'

// Route, plans, favourites and the backup need every city's data, so they load on their own and only when there is something saved.
const TripSections = lazy(() => import('../components/TripSections'))

/** Whether this browser holds anything of the traveller's own: route, plans, favourites or visit records. */
function useHasSaved() {
  const trip = useTrip()
  const { data: visits } = useVisitedPlaces()
  return (
    trip.route.length > 0 ||
    Object.keys(trip.plans).length > 0 ||
    trip.highlights.length > 0 ||
    trip.places.length > 0 ||
    trip.beenHighlights.length > 0 ||
    trip.beenPlaces.length > 0 ||
    trip.gateways.length > 0 ||
    trip.beenGateways.length > 0 ||
    Object.keys(visits.countries).length > 0 ||
    Object.keys(visits.cities).length > 0
  )
}

const POPULAR_CITIES = ['paris', 'rome', 'barcelona', 'london', 'prague', 'vienna', 'amsterdam', 'florence']

/** For a first visit, when nothing is saved yet: a few well-known cities and what the app can do. */
function HomeStart() {
  const { lang } = useLanguage()
  const cities = POPULAR_CITIES.map(getCityBrief).filter((c) => !!c)
  return (
    <section className="home-trip home-start" aria-label={t('homeStartTitle', lang)}>
      <div className="home-trip-head">
        <span className="home-kicker">START ✦</span>
        <h2 className="home-trip-title">{t('homeStartTitle', lang)}</h2>
      </div>
      <p className="section-label">{t('homePopular', lang)}</p>
      <div className="city-list">
        {cities.map((city) => (
          <CityListItem key={city.id} city={city} />
        ))}
      </div>
      <p className="section-label">{t('homeFeaturesTitle', lang)}</p>
      <div className="transit-card">
        <ul className="home-features">
          <li>{t('homeFeaturePlan', lang)}</li>
          <li>{t('homeFeatureMap', lang)}</li>
          <li>{t('homeFeatureOffline', lang)}</li>
          <li>{t('homeFeatureBeen', lang)}</li>
        </ul>
        <Link to="/countries" className="plan-btn home-countries-link">
          {t('homeAllCountries', lang)} →
        </Link>
      </div>
    </section>
  )
}

/** "My trip" on the home screen: loads the route, plans and favourites when any are saved, or on request. */
function HomeTrip() {
  const { lang } = useLanguage()
  const [start, setStart] = useState(false)
  const saved = useHasSaved()
  // Arriving from a city's "in your route" button: bring this section into view once it is there.
  const scrollTo = (useLocation().state as { scrollTo?: string } | null)?.scrollTo
  useEffect(() => {
    if (scrollTo !== 'my-trip') return
    const timer = setTimeout(() => document.getElementById('my-trip')?.scrollIntoView({ block: 'start' }), 400)
    return () => clearTimeout(timer)
  }, [scrollTo])
  return (
    <section id="my-trip" className="home-trip" aria-label={t('homeTripTitle', lang)}>
      <div className="home-trip-head">
        <span className="home-kicker">MY TRIP ✦</span>
        <h2 className="home-trip-title">{t('homeTripTitle', lang)}</h2>
      </div>
      {saved || start ? (
        <Suspense fallback={<p className="route-hint">…</p>}>
          <TripSections />
        </Suspense>
      ) : (
        <div className="transit-card">
          <p className="route-hint" style={{ marginTop: 0 }}>
            {t('homeTripIntro', lang)}
          </p>
          <p className="route-hint">{t('tripEmpty', lang)}</p>
          <div className="plan-actions">
            <button type="button" className="plan-btn" onClick={() => setStart(true)}>
              {t('homeTripStart', lang)}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export function HomePage() {
  const { lang } = useLanguage()
  const saved = useHasSaved()

  return (
    <div className="home-neon">
      <header className="top-bar home-head">
        <div className="home-head-text">
          <span className="home-kicker">EUROPE TOUR</span>
          <h1>{t('appTitle', lang)}</h1>
          <p>{t('checklistSubtitle', lang)}</p>
        </div>
        <LanguageToggle />
      </header>

      <HomeTrip />

      {saved ? null : <HomeStart />}
    </div>
  )
}
