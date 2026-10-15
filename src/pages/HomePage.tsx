import { lazy, Suspense, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LanguageToggle } from '../components/LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import { useTrip } from '../trip/store'

// Route, plans and favourites need every city's data, so they load on their own and only when there is something saved.
const TripSections = lazy(() => import('../components/TripSections'))

/** "My trip" on the home screen: loads the route, plans and favourites when any are saved, or on request. */
function HomeTrip() {
  const { lang } = useLanguage()
  const trip = useTrip()
  const [start, setStart] = useState(false)
  const saved =
    trip.route.length > 0 || Object.keys(trip.plans).length > 0 || trip.highlights.length > 0 || trip.places.length > 0
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

  return (
    <div className="home-neon">
      <header className="top-bar">
        <div>
          <span className="home-kicker">EUROPE TOUR</span>
          <h1>{t('appTitle', lang)}</h1>
          <p>{t('checklistSubtitle', lang)}</p>
        </div>
        <LanguageToggle />
      </header>

      <HomeTrip />
    </div>
  )
}
