import { Link } from 'react-router-dom'
import { countries } from '../data/countries'
import { countryRegions } from '../data/countryRegions'
import { CountryCard } from '../components/CountryCard'
import { LanguageToggle } from '../components/LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

const byId = new Map(countries.map((c) => [c.id, c]))
const listed = new Set(countryRegions.flatMap((r) => r.countryIds))

export function CountriesPage() {
  const { lang } = useLanguage()
  // Regions with at least one country in the app; any country not yet assigned to a region goes in a last group.
  const regions = countryRegions
    .map((r) => ({ ...r, items: r.countryIds.flatMap((id) => byId.get(id) ?? []) }))
    .filter((r) => r.items.length > 0)
  const rest = countries.filter((c) => !listed.has(c.id))

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
      <nav className="country-region-jump" aria-label={t('countries', lang)}>
        {regions.map((r) => (
          <a key={r.id} href={`#region-${r.id}`} className={r.mena ? 'country-region-chip country-region-chip--mena' : 'country-region-chip'}>
            {r.title[lang]}
          </a>
        ))}
      </nav>
      {regions.map((r) => (
        <section key={r.id} id={`region-${r.id}`} className="country-region">
          <h2 className={r.mena ? 'country-region-heading country-region-heading--mena' : 'country-region-heading'}>
            {r.title[lang]} <span className="country-region-count">{r.items.length}</span>
          </h2>
          <div className="country-grid">
            {r.items.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>
        </section>
      ))}
      {rest.length > 0 ? (
        <div className="country-grid">
          {rest.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
