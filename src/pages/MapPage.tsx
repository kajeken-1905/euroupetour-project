import { useMemo } from 'react'
import { EuropeMap } from '../components/EuropeMap'
import { LanguageToggle } from '../components/LanguageToggle'
import { cities } from '../data/cities'
import { useLanguage } from '../contexts/LanguageContext'
import { useVisitedPlaces } from '../hooks/useVisitedPlaces'
import { t } from '../i18n/ui'

export function MapPage() {
  const { lang } = useLanguage()
  const { data: visitedData } = useVisitedPlaces()

  // A country counts as visited once it has its own visit record, or any of
  // its cities does — matches the map's own fill logic in EuropeMap.
  const visitedCountryCount = useMemo(() => {
    const ids = new Set(Object.keys(visitedData.countries))
    for (const cityId of Object.keys(visitedData.cities)) {
      const city = cities.find((c) => c.id === cityId)
      if (city) ids.add(city.countryId)
    }
    return ids.size
  }, [visitedData])

  const visitedCityCount = Object.keys(visitedData.cities).length

  const summary = t('mapVisitedSummary', lang)
    .replace('{countries}', String(visitedCountryCount))
    .replace('{cities}', String(visitedCityCount))

  return (
    <div className="theme-page">
      <header className="top-bar">
        <div>
          <h1>{t('map', lang)}</h1>
          <p>{t('mapSubtitle', lang)}</p>
        </div>
        <LanguageToggle />
      </header>
      <EuropeMap />
      <p className="map-visited-summary">{summary}</p>
    </div>
  )
}
