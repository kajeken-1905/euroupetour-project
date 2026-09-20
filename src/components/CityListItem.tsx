import { Link } from 'react-router-dom'
import type { City } from '../types'
import { CountryStamp } from './CountryStamp'
import { getCountry } from '../data/countries'
import { useLanguage } from '../contexts/LanguageContext'
import { useVisitedPlaces } from '../hooks/useVisitedPlaces'
import { assetUrl } from '../utils/assetUrl'

export function CityListItem({ city }: { city: City }) {
  const { lang } = useLanguage()
  const { data: visitedData } = useVisitedPlaces()
  const highlight = city.highlights[0]?.name[lang] ?? ''
  const altNames = [city.name.en, city.nativeName]
    .filter((v, i, arr) => v !== city.name.ko && arr.indexOf(v) === i)
    .join(' · ')

  // A city's stamp is its parent country's — cities have no illustration of
  // their own, same convention as VisitStamps.
  const visits = visitedData.cities[city.id] ?? []
  const latestVisit = [...visits].sort((a, b) => b.year - a.year || b.month - a.month)[0]
  const country = latestVisit ? getCountry(city.countryId) : undefined

  return (
    <Link
      to={`/city/${city.id}`}
      className="city-item"
      style={{
        backgroundImage: `
          linear-gradient(100deg, rgba(10, 12, 18, 0.78) 0%, rgba(10, 12, 18, 0.35) 55%, rgba(10, 12, 18, 0.55) 100%),
          url(${assetUrl(city.signatureImage)})
        `,
      }}
    >
      {latestVisit && country ? (
        <CountryStamp
          id={country.id}
          nameEn={country.name.en}
          date={`${latestVisit.year} · ${String(latestVisit.month).padStart(2, '0')}`}
          className="city-item-stamp"
        />
      ) : null}
      <strong className="local-title">
        <span className="local-title-main">{city.name.ko}</span>
        {altNames ? <span className="local-title-alt">{altNames}</span> : null}
      </strong>
      <span className="city-highlight">{highlight}</span>
    </Link>
  )
}
