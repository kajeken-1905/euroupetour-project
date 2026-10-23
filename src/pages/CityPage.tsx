import { Fragment, useEffect, useMemo, useState, type CSSProperties } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { countryOfCity, getCity, getPlacesByCityAndCategory, useCountryData } from '../data/countryData'
import { getCountry } from '../data/countries'
import { CategoryTabs } from '../components/CategoryTabs'
import { PlaceCard } from '../components/PlaceCard'
import { HighlightCard } from '../components/HighlightCard'
import { LanguageToggle } from '../components/LanguageToggle'
import { TransitCityPanel } from '../components/TransitPanel'
import { StayPanel } from '../components/StayPanel'
import { FaresPanel } from '../components/FaresPanel'
import { VisitStamps } from '../components/VisitStamps'
import { useLanguage } from '../contexts/LanguageContext'
import { getCityTransit } from '../data/transit-city'
import { getCityHubs } from '../data/hubs'
import { getCityRoutes } from '../data/routes'
import { TourButton } from '../components/TourButton'
import { RoutesPanel } from '../components/RoutesPanel'
import { ItineraryPanel } from '../components/ItineraryPanel'
import { CityMap } from '../components/CityMap'
import { PlannerPanel } from '../components/PlannerPanel'
import { SeasonPanel } from '../components/SeasonPanel'
import { MyPlanPanel } from '../components/MyPlanPanel'
import { FootballClubsPanel } from '../components/FootballPanel'
import { t } from '../i18n/ui'
import { useTrip } from '../trip/store'
import { bilingualName, titleNames } from '../utils/placeNames'
import type { CategoryId } from '../types'

/** Waits for the city's country to load (see countryData.ts). */
export function CityPage() {
  const { cityId = '' } = useParams()
  const countryId = countryOfCity(cityId)
  return useCountryData(countryId ? [countryId] : []) ? <CityView /> : null
}

function CityView() {
  const { cityId = '' } = useParams()
  const { lang } = useLanguage()
  const city = getCity(cityId)
  const country = city ? getCountry(city.countryId) : undefined
  const [category, setCategory] = useState<CategoryId>('fine_dining')
  const trip = useTrip()

  const placeList = useMemo(
    () => (city ? getPlacesByCityAndCategory(city.id, category) : []),
    [city, category],
  )
  const transit = city ? getCityTransit(city.id) : undefined

  // Arriving from search: jump to the highlight once the shell has reset its scroll position.
  const highlightId = (useLocation().state as { highlightId?: string } | null)?.highlightId
  useEffect(() => {
    if (!highlightId) return
    const timer = setTimeout(() => {
      document.getElementById(highlightId)?.scrollIntoView({ block: 'center' })
    }, 60)
    return () => clearTimeout(timer)
  }, [highlightId, cityId])

  if (!city || !country) {
    return (
      <div className="page-header">
        <Link to="/" className="back-link">
          ← {t('home', lang)}
        </Link>
        <h2>Not found</h2>
      </div>
    )
  }

  const { main, alt } = titleNames(city.name, city.nativeName, lang)

  const { primary, secondary, accent } = country.flagColors
  const themeVars = {
    '--c-primary': primary,
    '--c-secondary': secondary,
    '--c-accent': accent,
  } as CSSProperties

  return (
    <div className="city-page theme-page" style={themeVars}>
      <header className="page-header">
        <div className="top-bar" style={{ paddingTop: 0 }}>
          <div>
            <Link to={`/country/${country.id}`} className="back-link">
              ← {bilingualName(country.name, lang)}
            </Link>
            <h2 className="local-title">
              <span className="local-title-main">{main}</span>
              {alt ? <span className="local-title-alt">{alt}</span> : null}
            </h2>
            <p className="blurb">{city.blurb[lang]}</p>
          </div>
          <div className="top-bar-side">
            <LanguageToggle />
            <VisitStamps kind="cities" placeId={city.id} />
          </div>
        </div>
      </header>

      <SeasonPanel city={city} />

      <MyPlanPanel city={city} />

      <ItineraryPanel city={city} />

      <PlannerPanel city={city} />

      <CityMap city={city} />

      <p className="section-label">
        {t('highlights', lang)}
        <BeenCount ids={city.highlights.map((h) => h.id)} been={trip.beenHighlights} />
      </p>
      <p className="phase-note" style={{ marginTop: 0 }}>
        {t('highlightHint', lang)}
      </p>
      <div className="highlight-list">
        {city.highlights.map((item, i) => {
          const prevGroup = city.highlights[i - 1]?.group?.[lang]
          const showGroup = item.group && item.group[lang] !== prevGroup
          return (
            <Fragment key={item.id}>
              {showGroup ? (
                <p className="highlight-group">{item.group![lang]}</p>
              ) : null}
              <HighlightCard highlight={item} />
            </Fragment>
          )
        })}
      </div>

      <FootballClubsPanel cityId={city.id} />

      <StayPanel cityId={city.id} />

      {transit ? (
        <TransitCityPanel {...transit} hubs={getCityHubs(city.id)} cityName={city.name.en} />
      ) : null}

      <FaresPanel cityId={city.id} />

      <RoutesPanel routes={getCityRoutes(city.id)} />
      <TourButton cityId={city.id} />

      <p className="section-label" style={{ marginTop: 22 }}>
        {t('foodGuide', lang)}
      </p>
      <CategoryTabs value={category} onChange={setCategory} />
      {placeList.some((p) => trip.beenPlaces.includes(p.id)) ? (
        <p className="section-label" style={{ marginTop: 0 }}>
          <BeenCount ids={placeList.map((p) => p.id)} been={trip.beenPlaces} />
        </p>
      ) : null}

      {placeList.length === 0 ? (
        <div className="empty-state">
          {t(category === 'korean' ? 'noKoreanRestaurant' : 'limitedCategory', lang)}
        </div>
      ) : (
        <>
          {placeList.length < 5 ? (
            <p className="phase-note">{t('limitedCategory', lang)}</p>
          ) : null}
          <div className="place-list">
            {placeList.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/** "✓ 3/8 visited" beside a list heading; nothing until at least one is marked. */
function BeenCount({ ids, been }: { ids: string[]; been: string[] }) {
  const { lang } = useLanguage()
  const n = ids.filter((id) => been.includes(id)).length
  if (n === 0) return null
  return (
    <span className="been-count">
      {t('beenCount', lang).replace('{n}', String(n)).replace('{total}', String(ids.length))}
    </span>
  )
}
