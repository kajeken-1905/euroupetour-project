import { Link } from 'react-router-dom'
import type { Country } from '../types'
import { CountryStamp } from './CountryStamp'
import { useLanguage } from '../contexts/LanguageContext'
import { useVisitedPlaces } from '../hooks/useVisitedPlaces'
import { t } from '../i18n/ui'
import { assetUrl } from '../utils/assetUrl'

export function CountryCard({ country }: { country: Country }) {
  const { lang } = useLanguage()
  const { data: visitedData } = useVisitedPlaces()
  const cityCount = country.cityIds.length
  const displayName = country.name[lang]
  const showNative = country.nativeName !== displayName

  // Visited once the country itself has a visit record, or any of its
  // cities does — matches the map's own "visited" definition.
  const visits = [
    ...(visitedData.countries[country.id] ?? []),
    ...country.cityIds.flatMap((cityId) => visitedData.cities[cityId] ?? []),
  ]
  const latestVisit = [...visits].sort((a, b) => b.year - a.year || b.month - a.month)[0]

  return (
    <Link
      to={`/country/${country.id}`}
      className="country-card"
      style={{
        backgroundImage: `
          linear-gradient(160deg, rgba(12, 14, 20, 0.72) 0%, rgba(12, 14, 20, 0.45) 45%, rgba(12, 14, 20, 0.62) 100%),
          url(${assetUrl(country.landmarkImage)})
        `,
      }}
    >
      {latestVisit ? (
        <CountryStamp
          id={country.id}
          nameEn={country.name.en}
          date={`${latestVisit.year} · ${String(latestVisit.month).padStart(2, '0')}`}
          className="country-card-stamp"
        />
      ) : null}
      <div className="name-row">
        <span className="flag" aria-hidden>
          {country.flag}
        </span>
        <h2 className="name">
          {displayName}
          {showNative ? (
            <span className="native-name"> · {country.nativeName}</span>
          ) : null}
        </h2>
      </div>
      <p className="blurb">{country.blurb[lang]}</p>
      <div className="meta">
        {cityCount}
        {t('citiesCount', lang)}
      </div>
    </Link>
  )
}
