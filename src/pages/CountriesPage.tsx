import { Link } from 'react-router-dom'
import { countries } from '../data/countries'
import { CountryCard } from '../components/CountryCard'
import { LanguageToggle } from '../components/LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

export function CountriesPage() {
  const { lang } = useLanguage()
  const europe = countries.filter((c) => c.region !== 'mena')
  const mena = countries.filter((c) => c.region === 'mena')
  const hasMena = mena.length > 0

  return (
    <div className="theme-page">
      <header className="top-bar">
        <div>
          <Link to="/" className="back-link">
            ← {t('home', lang)}
          </Link>
          <h1>{t('countries', lang)}</h1>
        </div>
        <LanguageToggle />
      </header>
      {hasMena ? (
        <>
          <h2 className="country-region-heading">{t('regionEurope', lang)}</h2>
          <div className="country-grid">
            {europe.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>
          <h2 className="country-region-heading country-region-heading--mena">{t('regionMena', lang)}</h2>
          <div className="country-grid">
            {mena.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>
        </>
      ) : (
        <div className="country-grid">
          {countries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      )}
    </div>
  )
}
