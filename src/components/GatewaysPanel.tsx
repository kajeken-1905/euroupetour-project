import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { getCityBrief } from '../data/cityIndex'
import { t } from '../i18n/ui'
import type { Gateway, GatewayOption } from '../types'

function pick(text: string, lang: 'ko' | 'en'): string {
  const [ko, en] = text.split('|')
  return lang === 'ko' ? ko : (en ?? ko)
}

const KIND_ICON: Record<Gateway['kind'], string> = { air: '✈️', rail: '🚆', port: '⛴️' }
const MODE_ICON: Record<GatewayOption['mode'], string> = {
  metro: '🚇',
  train: '🚆',
  bus: '🚌',
  tram: '🚊',
  taxi: '🚕',
  walk: '🚶',
  boat: '⛴️',
}

function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

/** The ways between a gateway and the city, folded until asked for. */
export function GatewayWays({ gateway }: { gateway: Gateway }) {
  const { lang } = useLanguage()
  return (
    <details className="gateway-ways">
      <summary>{t(gateway.kind === 'air' ? 'gatewayToCityAir' : 'gatewayToCity', lang)}</summary>
      <ul className="gateway-options">
        {gateway.options.map((o) => (
          <li key={o.name} className="gateway-option">
            <p className="gateway-option-name">
              <span aria-hidden>{MODE_ICON[o.mode]}</span> {pick(o.name, lang)}
            </p>
            <p>{pick(o.route, lang)}</p>
            {o.time ? <p>⏱ {pick(o.time, lang)}</p> : null}
            {o.fare ? <p>💶 {pick(o.fare, lang)}</p> : null}
            {o.ticket ? <p>🎫 {pick(o.ticket, lang)}</p> : null}
          </li>
        ))}
      </ul>
      {gateway.note ? <p className="gateway-note">{pick(gateway.note, lang)}</p> : null}
      {gateway.site ? (
        <a className="visit-link" href={gateway.site} target="_blank" rel="noreferrer">
          {t('visitSite', lang)} ↗
        </a>
      ) : null}
      <p className="visit-checked">
        ✓ {t('gatewayChecked', lang).replace('{y}', gateway.checked.slice(0, 4)).replace('{m}', String(Number(gateway.checked.slice(5))))}
      </p>
    </details>
  )
}

/** One airport, station or port: what it is, then each way into the centre. */
function GatewayCard({ gateway }: { gateway: Gateway }) {
  const { lang } = useLanguage()
  return (
    <article className="highlight-card gateway-card" id={gateway.id}>
      <a className="gateway-card-head" href={mapsUrl(gateway.maps)} target="_blank" rel="noreferrer">
        <span className="gateway-card-icon" aria-hidden>
          {KIND_ICON[gateway.kind]}
        </span>
        <span className="highlight-card-body">
          <h3>
            {pick(gateway.name, lang)}
            {gateway.code ? <span className="gateway-code">{gateway.code}</span> : null}
          </h3>
          <p>{pick(gateway.about, lang)}</p>
          <span className="highlight-card-maps">{t('openMaps', lang)}</span>
        </span>
      </a>
      <GatewayWays gateway={gateway} />
    </article>
  )
}

/** City screen: airports, stations and ports that have no sight card of their own, as cards in the sights list. */
export function CityGateways({ gateways }: { gateways: Gateway[] }) {
  const { lang } = useLanguage()
  const own = gateways.filter((g) => !g.highlightId)
  if (own.length === 0) return null
  return (
    <>
      <p className="highlight-group">{t('gatewaysTitle', lang)}</p>
      {own.map((g) => (
        <GatewayCard key={g.id} gateway={g} />
      ))}
    </>
  )
}

/** Country screen: international airports, each with its city and the ways into town. */
export function CountryAirportsPanel({ gateways }: { gateways: Gateway[] }) {
  const { lang } = useLanguage()
  const airports = gateways.filter((g) => g.kind === 'air' && g.intl)
  if (airports.length === 0) return null
  return (
    <section className="routes-panel" aria-label={t('airportsTitle', lang)}>
      <p className="section-label">{t('airportsTitle', lang)}</p>
      <div className="transit-card">
        <ul className="night-train-list">
          {airports.map((a) => {
            const city = getCityBrief(a.cityId)
            return (
              <li key={a.id} className="night-train">
                <div className="night-train-head">
                  <span className="night-train-name">
                    <span aria-hidden>✈️</span> {pick(a.name, lang)}
                  </span>
                  {a.code ? <span className="night-train-operator">{a.code}</span> : null}
                </div>
                <p className="night-train-note">{a.options.map((o) => pick(o.name, lang)).join(' · ')}</p>
                {city ? (
                  <Link className="night-train-book" to={`/city/${city.id}`} state={{ highlightId: a.id }}>
                    {t('airportsHowTo', lang).replace('{city}', city.name[lang])} →
                  </Link>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
