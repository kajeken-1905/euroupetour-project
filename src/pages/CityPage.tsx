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
import { TravelBanNotice } from '../components/TravelBanNotice'
import { FaresPanel } from '../components/FaresPanel'
import { PassesPanel } from '../components/PassesPanel'
import { getCityPasses } from '../data/passes'
import { VisitStamps } from '../components/VisitStamps'
import { useLanguage } from '../contexts/LanguageContext'
import { getCityTransit } from '../data/transit-city'
import { getCityHubs } from '../data/hubs'
import { getCityRoutes } from '../data/routes'
import { TourButton } from '../components/TourButton'
import { RoutesPanel } from '../components/RoutesPanel'
import { DayTripsPanel } from '../components/DayTripsPanel'
import { NightTrainsPanel } from '../components/NightTrainsPanel'
import { ScenicTrainsPanel } from '../components/ScenicTrainsPanel'
import { FunicularsPanel } from '../components/FunicularsPanel'
import { CityGateways } from '../components/GatewaysPanel'
import { CityThemeParks } from '../components/ThemeParksPanel'
import { useGateways } from '../data/gateways'
import { ItineraryPanel } from '../components/ItineraryPanel'
import { CityMap } from '../components/CityMap'
import { PlannerPanel } from '../components/PlannerPanel'
import { SeasonPanel } from '../components/SeasonPanel'
import { ForecastPanel } from '../components/ForecastPanel'
import { MyPlanPanel } from '../components/MyPlanPanel'
import { FootballClubsPanel } from '../components/FootballPanel'
import { t } from '../i18n/ui'
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

  const placeList = useMemo(
    () => (city ? getPlacesByCityAndCategory(city.id, category) : []),
    [city, category],
  )
  const transit = city ? getCityTransit(city.id) : undefined
  const gateways = (useGateways(city?.countryId ?? '') ?? []).filter((g) => g.cityId === cityId)

  // Arriving from search: jump to the highlight once the shell has reset its scroll position.
  const highlightId = (useLocation().state as { highlightId?: string } | null)?.highlightId
  useEffect(() => {
    if (!highlightId) return
    const timer = setTimeout(() => {
      document.getElementById(highlightId)?.scrollIntoView({ block: 'center' })
    }, 60)
    return () => clearTimeout(timer)
  }, [highlightId, cityId, gateways.length])

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

      <TravelBanNotice countryId={country.id} />

      <ForecastPanel city={city} />
      <SeasonPanel city={city} />

      <MyPlanPanel city={city} />

      <ItineraryPanel city={city} />

      <PlannerPanel city={city} />

      <DayTripsPanel cityId={city.id} />

      <CityMap city={city} />

      <p className="section-label">{t('highlights', lang)}</p>
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
              <HighlightCard highlight={item} gateway={gateways.find((g) => g.highlightId === item.id)} />
            </Fragment>
          )
        })}
        <CityGateways gateways={gateways} />
        <CityThemeParks cityId={city.id} />
      </div>

      <FootballClubsPanel cityId={city.id} />

      <StayPanel cityId={city.id} countryId={country.id} />

      {transit ? (
        <TransitCityPanel
          {...transit}
          hubs={getCityHubs(city.id)}
          cityName={city.name.en}
          airportCard={gateways.find((g) => g.kind === 'air')?.highlightId ?? gateways.find((g) => g.kind === 'air')?.id}
        />
      ) : null}

      <FaresPanel cityId={city.id} />
      <FunicularsPanel cityId={city.id} />
      <PassesPanel passes={getCityPasses(city.id, country.id)} />

      <RoutesPanel routes={getCityRoutes(city.id)} />
      <NightTrainsPanel cityId={city.id} />
      <ScenicTrainsPanel cityId={city.id} />
      <TourButton cityId={city.id} />

      <p className="section-label" style={{ marginTop: 22 }}>
        {t('foodGuide', lang)}
      </p>
      <CategoryTabs value={category} onChange={setCategory} />

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
