import { useMemo, useState } from 'react'
import { EuropeMap, type MapRegion } from '../components/EuropeMap'
import { countries } from '../data/countries'
import { LanguageToggle } from '../components/LanguageToggle'
import { cityIndex as cities } from '../data/cityIndex'
import { useLanguage } from '../contexts/LanguageContext'
import { useVisitedPlaces } from '../hooks/useVisitedPlaces'
import { t } from '../i18n/ui'

export function MapPage() {
  const { lang } = useLanguage()
  const { data: visitedData } = useVisitedPlaces()
  const [region, setRegion] = useState<MapRegion>('europe')
  // The region tabs only appear once there is a North Africa & Middle East country to show.
  const hasMena = countries.some((c) => c.region === 'mena')

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
      {hasMena ? (
        <div className="category-tabs map-region-tabs" role="tablist" aria-label={t('map', lang)}>
          <div className="category-tabs-row">
            {(['europe', 'mena'] as const).map((r) => (
              <button
                key={r}
                type="button"
                role="tab"
                aria-selected={region === r}
                className={region === r ? `active map-region-tab--${r}` : `map-region-tab--${r}`}
                onClick={() => setRegion(r)}
              >
                {t(r === 'europe' ? 'regionEurope' : 'regionMena', lang)}
              </button>
            ))}
          </div>
        </div>
      ) : null}
      <EuropeMap key={region} region={region} />
      <p className="map-visited-summary">{summary}</p>
    </div>
  )
}
