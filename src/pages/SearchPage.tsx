import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCityBrief } from '../data/cityIndex'
import { getCountry } from '../data/countries'
import { ERA_GROUPS } from '../data/eraCities'
import { CountryStamp } from '../components/CountryStamp'
import { LanguageToggle } from '../components/LanguageToggle'
import { TrainTripsPanel } from '../components/TrainTripsPanel'
import { useLanguage } from '../contexts/LanguageContext'
import { useVisitedPlaces } from '../hooks/useVisitedPlaces'
import { t } from '../i18n/ui'
import { getCity, useCountryData } from '../data/countryData'
import { assetUrl } from '../utils/assetUrl'
import {
  clearRecentSearches,
  recentSearches,
  rememberSearch,
  search,
  SEARCH_KINDS,
  type SearchEntry,
} from '../utils/search'

const QUERY_KEY = 'search-query'

/** One recommended city as a photo card, with the visit stamp when the user has been there. */
function RecommendedCity({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const { data: visitedData } = useVisitedPlaces()
  const city = getCityBrief(cityId)
  if (!city) return null
  // Same stamp as the city lists: the country's, with the latest visit's date.
  const latestVisit = [...(visitedData.cities[cityId] ?? [])].sort((a, b) => b.year - a.year || b.month - a.month)[0]
  const country = getCountry(city.countryId)
  return (
    <li>
      <Link
        to={`/city/${cityId}`}
        className="city-item popular-card"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(10, 12, 18, 0.15) 0%, rgba(10, 12, 18, 0.25) 45%, rgba(10, 12, 18, 0.82) 100%),
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
        <span className="popular-body">
          <strong className="popular-name">{city.name[lang]}</strong>
          <span className="popular-country">{country?.name[lang] ?? ''}</span>
          <span className="popular-blurb">{getCity(cityId)?.blurb[lang] ?? ''}</span>
        </span>
      </Link>
    </li>
  )
}

/** Recommended cities by period of history, mixed culture and landscape. */
function RecommendedCities() {
  const { lang } = useLanguage()
  return (
    <section className="popular-cities" aria-label={t('popularTitle', lang)}>
      <p className="section-label">{t('popularTitle', lang)}</p>
      {ERA_GROUPS.map((group, i) => (
        <section key={group.id} className="popular-group" aria-label={group.title[lang]}>
          {ERA_GROUPS[i - 1]?.kind !== group.kind ? (
            <p className="popular-kind">{t(`popularKind_${group.kind}`, lang)}</p>
          ) : null}
          <div className="popular-group-head">
            <h3 className="popular-group-title">
              {group.title[lang]} <span className="popular-group-period">{group.period[lang]}</span>
            </h3>
            <p className="popular-group-note">{group.note[lang]}</p>
          </div>
          <ul className="popular-list">
            {group.cityIds.map((id) => (
              <RecommendedCity key={id} cityId={id} />
            ))}
          </ul>
        </section>
      ))}
    </section>
  )
}

/** Search covers every country's cities and places. */
export function SearchPage() {
  return useCountryData('all') ? <SearchView /> : null
}

function SearchView() {
  const { lang } = useLanguage()
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  // Keep the query while the tab is open so coming back from a result shows the same list.
  const [query, setQuery] = useState(() => sessionStorage.getItem(QUERY_KEY) ?? '')
  const [recent, setRecent] = useState(recentSearches)
  // Train picked from the results: the query is cleared and its card opens in the train list.
  const [trainFocus, setTrainFocus] = useState<string>()
  const deferred = useDeferredValue(query)
  const results = useMemo(() => search(deferred), [deferred])
  const total = SEARCH_KINDS.reduce((sum, k) => sum + results[k].total, 0)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const update = (value: string) => {
    setQuery(value)
    sessionStorage.setItem(QUERY_KEY, value)
  }

  const open = (e: SearchEntry) => {
    rememberSearch(query)
    if (e.kind === 'train') {
      setRecent(recentSearches())
      update('')
      setTrainFocus(e.key)
      return
    }
    navigate(e.to, e.highlightId ? { state: { highlightId: e.highlightId } } : undefined)
  }

  const typed = deferred.trim() !== ''

  return (
    <div className="search-page">
      <header className="page-header">
        <div className="top-bar" style={{ paddingTop: 0 }}>
          <h2>{t('search', lang)}</h2>
          <LanguageToggle />
        </div>
        <div className="search-box">
          <input
            ref={inputRef}
            className="search-input"
            type="search"
            value={query}
            onChange={(e) => update(e.target.value)}
            placeholder={t('searchPlaceholder', lang)}
            aria-label={t('search', lang)}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="search"
          />
        </div>
      </header>

      {!typed ? (
        <>
          {recent.length > 0 ? (
            <section>
              <div className="search-group-head">
                <p className="section-label">{t('searchRecent', lang)}</p>
                <button
                  type="button"
                  className="search-clear"
                  onClick={() => {
                    clearRecentSearches()
                    setRecent([])
                  }}
                >
                  {t('searchClear', lang)}
                </button>
              </div>
              <div className="itinerary-stops">
                {recent.map((r) => (
                  <button key={r} type="button" className="itinerary-stop" onClick={() => update(r)}>
                    {r}
                  </button>
                ))}
              </div>
            </section>
          ) : null}
          <p className="phase-note">{t('searchHint', lang)}</p>
          <RecommendedCities />
          <TrainTripsPanel focus={trainFocus} />
        </>
      ) : total === 0 ? (
        <div className="empty-state">{t('searchEmpty', lang)}</div>
      ) : (
        SEARCH_KINDS.map((kind) => {
          const group = results[kind]
          if (group.total === 0) return null
          return (
            <section key={kind} className="search-group">
              <p className="section-label">
                {t(`searchKind_${kind}`, lang)} {group.total}
              </p>
              <ul className="search-list">
                {group.items.map((e) => {
                  const other = lang === 'ko' ? e.title.en : e.title.ko
                  return (
                    <li key={e.key}>
                      <button type="button" className="search-item" onClick={() => open(e)}>
                        <span className="search-item-title">
                          {e.title[lang]}
                          {other !== e.title[lang] ? <span className="search-item-alt">{other}</span> : null}
                        </span>
                        {e.sub[lang] ? <span className="search-item-sub">{e.sub[lang]}</span> : null}
                      </button>
                    </li>
                  )
                })}
              </ul>
              {group.total > group.items.length ? (
                <p className="phase-note" style={{ marginTop: 6 }}>
                  {t('searchMore', lang).replace('{n}', String(group.total - group.items.length))}
                </p>
              ) : null}
            </section>
          )
        })
      )}
    </div>
  )
}
