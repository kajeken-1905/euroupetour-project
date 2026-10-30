import { lazy, Suspense, type CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCountry } from '../data/countries'
import { getCityBriefsByCountry as getCitiesByCountry } from '../data/cityIndex'
import { CityListItem } from '../components/CityListItem'
import { LanguageToggle } from '../components/LanguageToggle'
import { PhrasePanel } from '../components/PhrasePanel'
import { VisitStamps } from '../components/VisitStamps'
import { TransitCountryPanel } from '../components/TransitPanel'
import { EssentialsPanel } from '../components/EssentialsPanel'
import { TravelBanNotice } from '../components/TravelBanNotice'
import { PassesPanel } from '../components/PassesPanel'
import { CountryNightTrainsPanel } from '../components/NightTrainsPanel'
import { CountryAirportsPanel } from '../components/GatewaysPanel'
import { useGateways } from '../data/gateways'
import { CountryScenicTrainsPanel } from '../components/ScenicTrainsPanel'
import { HolidaysPanel } from '../components/HolidaysPanel'
import { getCountryPasses } from '../data/passes'
import { FootballLeaguePanel } from '../components/FootballPanel'
import { getCountryEssentials } from '../data/essentials'
import { useLanguage } from '../contexts/LanguageContext'
import { useDailyExchangeRates } from '../hooks/useDailyExchangeRates'
import { getCountryTransit } from '../data/transit'
import { formatFxLine } from '../services/exchangeRates'
import { t } from '../i18n/ui'
import { titleNames } from '../utils/placeNames'
import { assetUrl } from '../utils/assetUrl'
import { hexToRgba } from '../utils/color'

// Needs every sight and place of the country to list their photos, so it loads after the page.
const OfflinePanel = lazy(() => import('../components/OfflinePanel').then((m) => ({ default: m.OfflinePanel })))

export function CountryPage() {
  const { countryId = '' } = useParams()
  const { lang } = useLanguage()
  const country = getCountry(countryId)
  const cityList = getCitiesByCountry(countryId)
  const gateways = useGateways(countryId)
  const { getRate, loading, error, data } = useDailyExchangeRates()

  if (!country) {
    return (
      <div className="page-header">
        <Link to="/countries" className="back-link">
          ← {t('backToCountries', lang)}
        </Link>
        <h2>Not found</h2>
      </div>
    )
  }

  const { main, alt: altNames } = titleNames(country.name, country.nativeName, lang)

  const rate = getRate(country.currencyCode)
  let rateText = t('exchangeRateLoading', lang)
  if (!loading && error) rateText = t('exchangeRateError', lang)
  if (!loading && rate) {
    rateText = formatFxLine(country.currencyCode, country.currencySymbol, rate, lang)
  }
  const transit = getCountryTransit(country.id)
  const essentials = getCountryEssentials(country.id)
  const { primary, secondary, accent } = country.flagColors
  const themeVars = {
    '--c-primary': primary,
    '--c-secondary': secondary,
    '--c-accent': accent,
  } as CSSProperties

  const factItems = [
    { label: t('population', lang), value: country.facts.population[lang] },
    { label: t('area', lang), value: country.facts.area[lang] },
    {
      label: t('capital', lang),
      value: country.facts.capital[lang],
      badge: country.schengen ? t('schengenYes', lang) : t('schengenNo', lang),
      badgeTone: country.schengen ? 'yes' : 'no',
    },
    {
      label: t('currency', lang),
      value: country.facts.currency[lang],
      extra: rateText,
      extraLabel: t('exchangeRate', lang),
    },
  ] as const

  return (
    <div className="country-page theme-page" style={themeVars}>
      <section
        className="country-hero country-hero--flag"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(8, 10, 16, 0.72) 0%, rgba(8, 10, 16, 0.38) 45%, rgba(8, 10, 16, 0.8) 100%),
            linear-gradient(150deg, ${hexToRgba(primary, 0.55)} 0%, transparent 55%, ${hexToRgba(secondary, 0.5)} 100%),
            url(${assetUrl(country.flagImage)})
          `,
        }}
      >
        <span className="country-hero-stripe" aria-hidden />
        <div className="top-bar" style={{ paddingTop: 0 }}>
          <div>
            <Link to="/countries" className="back-link">
              ← {t('backToCountries', lang)}
            </Link>
            <h2 className="local-title">
              <span className="local-title-main">
                <img className="flag flag-img" src={assetUrl(country.flagImage)} alt="" aria-hidden />{' '}
                {main}
              </span>
              {altNames ? <span className="local-title-alt">{altNames}</span> : null}
            </h2>
            <p className="blurb">{country.blurb[lang]}</p>
          </div>
          <div className="top-bar-side">
            <LanguageToggle />
            <VisitStamps kind="countries" placeId={country.id} />
          </div>
        </div>

        <div className="country-facts" aria-label={t('countryFacts', lang)}>
          {factItems.map((item) => (
            <div
              className={`country-fact${
                'extra' in item || 'badge' in item ? ' country-fact--wide' : ''
              }`}
              key={item.label}
            >
              <span className="country-fact-label">{item.label}</span>
              <div className="country-fact-main">
                <strong className="country-fact-value">{item.value}</strong>
                {'badge' in item ? (
                  <span
                    className={`schengen-badge schengen-badge--${item.badgeTone}`}
                    title={t('schengen', lang)}
                  >
                    {item.badge}
                  </span>
                ) : null}
              </div>
              {'extra' in item ? (
                <p className="country-fact-rate">
                  <span className="country-fact-rate-label">{item.extraLabel}</span>
                  {item.extra}
                </p>
              ) : null}
            </div>
          ))}
        </div>
        {data ? (
          <p className="fx-note">{t('exchangeRateUpdated', lang)}</p>
        ) : null}
      </section>

      <TravelBanNotice countryId={country.id} />

      <PhrasePanel countryId={country.id} />

      {transit ? <TransitCountryPanel transit={transit} /> : null}

      {gateways ? <CountryAirportsPanel gateways={gateways} /> : null}

      <PassesPanel passes={getCountryPasses(country.id)} />

      <CountryNightTrainsPanel cityIds={cityList.map((c) => c.id)} />

      <CountryScenicTrainsPanel countryId={country.id} cityIds={cityList.map((c) => c.id)} />

      {essentials ? <EssentialsPanel essentials={essentials} countryId={country.id} schengen={country.schengen} /> : null}

      <HolidaysPanel countryId={country.id} />

      <FootballLeaguePanel countryId={country.id} />

      <Suspense fallback={null}>
        <OfflinePanel countryId={country.id} />
      </Suspense>

      <p className="section-label">{t('cities', lang)}</p>
      {country.cityGroups ? (
        country.cityGroups.map((group) => (
          <section key={group.title.en} className="city-group">
            <p className="city-group-title">{group.title[lang]}</p>
            <div className="city-list">
              {group.cityIds
                .map((id) => cityList.find((c) => c.id === id))
                .filter((city) => city !== undefined)
                .map((city) => (
                  <CityListItem key={city.id} city={city} />
                ))}
            </div>
          </section>
        ))
      ) : (
        <div className="city-list">
          {cityList.map((city) => (
            <CityListItem key={city.id} city={city} />
          ))}
        </div>
      )}
      <p className="phase-note">{t('phaseNote', lang)}</p>
    </div>
  )
}
