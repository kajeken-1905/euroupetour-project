import { useLanguage } from '../contexts/LanguageContext'
import { OUTLETS } from '../data/outlets'
import { THEME_PARKS } from '../data/themeparks'
import { t } from '../i18n/ui'
import { assetUrl } from '../utils/assetUrl'
import type { ThemePark } from '../types'

function pick(text: string, lang: 'ko' | 'en'): string {
  const [ko, en] = text.split('|')
  return lang === 'ko' ? ko : (en ?? ko)
}

function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

/** One park: what it is and its season, then the way there from this city, folded until asked for. */
function ThemeParkCard({ park, cityId, outlet = false }: { park: ThemePark; cityId: string; outlet?: boolean }) {
  const { lang } = useLanguage()
  const route = park.from[cityId]
  return (
    <article className="highlight-card gateway-card" id={`${outlet ? 'outlet' : 'park'}-${park.id}`}>
      <a
        className={park.image ? 'highlight-card-main' : 'gateway-card-head'}
        href={mapsUrl(park.maps)}
        target="_blank"
        rel="noreferrer"
        aria-label={`${pick(park.name, lang)} — ${t('openMaps', lang)}`}
      >
        {park.image ? (
          <div
            className="highlight-card-media"
            style={{ backgroundImage: `url(${assetUrl(park.image)})` }}
            role="img"
            aria-label={pick(park.name, lang)}
          />
        ) : (
          <span className="gateway-card-icon" aria-hidden>
            {outlet ? '🛍️' : '🎢'}
          </span>
        )}
        <span className="highlight-card-body">
          <h3>{pick(park.name, lang)}</h3>
          <p>{pick(park.about, lang)}</p>
          {park.tv ? <p className="theme-park-tv">📺 {pick(park.tv, lang)}</p> : null}
          <span className="highlight-card-maps">{t('openMaps', lang)}</span>
        </span>
      </a>
      <details className="gateway-ways">
        <summary>{t(outlet ? 'outletWays' : 'themeParkWays', lang)}</summary>
        <ul className="gateway-options">
          <li className="gateway-option">
            <p className="gateway-option-name">
              <span aria-hidden>{outlet ? '🕘' : '📅'}</span> {t(outlet ? 'outletHours' : 'themeParkSeason', lang)}
            </p>
            <p>{pick(park.season, lang)}</p>
          </li>
          {route ? (
            <li className="gateway-option">
              <p className="gateway-option-name">
                <span aria-hidden>🚆</span> {t('themeParkGetThere', lang)}
              </p>
              <p>{pick(route.how, lang)}</p>
              {route.time ? <p>⏱ {pick(route.time, lang)}</p> : null}
            </li>
          ) : null}
        </ul>
        <a className="visit-link" href={park.site} target="_blank" rel="noreferrer">
          {t('visitSite', lang)} ↗
        </a>
        <p className="visit-checked">
          ✓ {t('themeParkChecked', lang).replace('{y}', park.checked.slice(0, 4)).replace('{m}', String(Number(park.checked.slice(5))))}
        </p>
      </details>
    </article>
  )
}

/** City screen: theme parks in or near the city, as cards in the sights list. */
export function CityThemeParks({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const parks = THEME_PARKS.filter((p) => p.from[cityId])
  if (parks.length === 0) return null
  return (
    <>
      <p className="highlight-group">{t('themeParksTitle', lang)}</p>
      {parks.map((p) => (
        <ThemeParkCard key={p.id} park={p} cityId={cityId} />
      ))}
    </>
  )
}

/** City screen: designer outlets reached from the city, as cards after the theme parks. */
export function CityOutlets({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const list = OUTLETS.filter((p) => p.from[cityId])
  if (list.length === 0) return null
  return (
    <>
      <p className="highlight-group">{t('outletsTitle', lang)}</p>
      {list.map((p) => (
        <ThemeParkCard key={p.id} park={p} cityId={cityId} outlet />
      ))}
    </>
  )
}
