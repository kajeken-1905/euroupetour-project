import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LanguageToggle } from '../components/LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import {
  clearRecentSearches,
  recentSearches,
  rememberSearch,
  search,
  SEARCH_KINDS,
  type SearchEntry,
} from '../utils/search'

const QUERY_KEY = 'search-query'

export function SearchPage() {
  const { lang } = useLanguage()
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  // Keep the query while the tab is open so coming back from a result shows the same list.
  const [query, setQuery] = useState(() => sessionStorage.getItem(QUERY_KEY) ?? '')
  const [recent, setRecent] = useState(recentSearches)
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
