import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import type { CityHubs, CountryTransit, TransitApp, TransitHub, TransitModeId } from '../types'
import { TRANSIT_MODE_ORDER } from '../data/transit'
import { assetUrl } from '../utils/assetUrl'

const MODE_ICON: Record<TransitModeId, string> = {
  metro: '🚇',
  tram: '🚊',
  bus: '🚌',
  train: '🚆',
  ferry: '⛴️',
  rideshare: '🚗',
  taxi: '🚕',
  bike: '🚲',
  walk: '🚶',
}

function modeLabel(mode: TransitModeId, lang: 'ko' | 'en'): string {
  const key = `transitMode_${mode}` as const
  return t(key, lang)
}

function appInitials(name: string): string {
  const parts = name.replace(/[^a-zA-Z0-9가-힣\s]/g, ' ').trim().split(/\s+/)
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
}

function TransitAppChip({ app, lang }: { app: TransitApp; lang: 'ko' | 'en' }) {
  const [broken, setBroken] = useState(false)
  const showIcon = Boolean(app.icon) && !broken

  return (
    <a
      className="transit-app-chip"
      href={app.url}
      target="_blank"
      rel="noreferrer"
    >
      {showIcon ? (
        <img
          className="transit-app-thumb"
          src={assetUrl(app.icon!)}
          alt=""
          width={40}
          height={40}
          loading="lazy"
          onError={() => setBroken(true)}
        />
      ) : (
        <span className="transit-app-fallback" aria-hidden>
          {appInitials(app.name)}
        </span>
      )}
      <span className="transit-app-text">
        <span className="transit-app-name">{app.name}</span>
        {app.note ? <span className="transit-app-note">{app.note[lang]}</span> : null}
      </span>
    </a>
  )
}

function TransitAppList({ apps, lang }: { apps: TransitApp[]; lang: 'ko' | 'en' }) {
  return (
    <div className="transit-apps">
      <span className="transit-apps-label">{t('transitApps', lang)}</span>
      <div className="transit-app-list">
        {apps.map((app) => (
          <TransitAppChip key={app.url + app.name} app={app} lang={lang} />
        ))}
      </div>
    </div>
  )
}

export function TransitCountryPanel({ transit }: { transit: CountryTransit }) {
  const { lang } = useLanguage()

  return (
    <section className="transit-panel" aria-label={t('transitCountry', lang)}>
      <p className="section-label">{t('transitCountry', lang)}</p>
      <div className="transit-card">
        <p className="transit-summary">{transit.summary[lang]}</p>
        <dl className="transit-facts">
          <div>
            <dt>{t('transitDrivingSide', lang)}</dt>
            <dd>
              {transit.drivingSide === 'left'
                ? t('transitDriveLeft', lang)
                : t('transitDriveRight', lang)}
            </dd>
          </div>
          <div>
            <dt>{t('transitLongDistance', lang)}</dt>
            <dd>{transit.longDistance[lang]}</dd>
          </div>
          {transit.nationalPasses ? (
            <div>
              <dt>{t('transitPasses', lang)}</dt>
              <dd>{transit.nationalPasses[lang]}</dd>
            </div>
          ) : null}
          {transit.paymentTip ? (
            <div>
              <dt>{t('transitPayment', lang)}</dt>
              <dd>{transit.paymentTip[lang]}</dd>
            </div>
          ) : null}
        </dl>
        {transit.apps && transit.apps.length > 0 ? (
          <TransitAppList apps={transit.apps} lang={lang} />
        ) : null}
      </div>
    </section>
  )
}

const HUB_ROWS = [
  ['air', '✈️', 'transitHubAir'],
  ['rail', '🚆', 'transitHubRail'],
  ['bus', '🚌', 'transitHubBus'],
  ['port', '⛴️', 'transitHubPort'],
] as const

const STATION_WORD = /gare|station|bahnhof|hbf|stazione|estaci|nádraží|stanica|stacija|stotis|jaam|kolodvor|garı|vağzal|centrale?|central|rautatieasema/i

function hubMapsUrl(hub: TransitHub, kind: 'air' | 'rail' | 'bus' | 'port', cityName: string): string {
  // A note usually means the hub is outside the city, so don't pin it to the city name.
  // Port notes describe routes rather than a location, so ports always get the city hint.
  const where = hub.note && kind !== 'port' ? '' : ` ${cityName}`
  const suffix = kind === 'rail' && !STATION_WORD.test(hub.name) ? ' railway station' : ''
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hub.name + suffix + where)}`
}

function TransitHubList({ hubs, cityName, lang }: { hubs: CityHubs; cityName: string; lang: 'ko' | 'en' }) {
  const rows = HUB_ROWS.filter(([key]) => (hubs[key]?.length ?? 0) > 0)
  if (rows.length === 0) return null

  return (
    <div className="transit-block">
      <h3>{t('transitHubs', lang)}</h3>
      <dl className="transit-hubs">
        {rows.map(([key, icon, label]) => (
          <div key={key}>
            <dt>
              <span aria-hidden>{icon}</span> {t(label, lang)}
            </dt>
            <dd>
              {hubs[key]!.map((hub) => (
                <a
                  key={hub.name}
                  className="transit-hub"
                  href={hubMapsUrl(hub, key, cityName)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {lang === 'ko' ? hub.ko : hub.name}
                  {hub.note ? <span className="transit-hub-note">{hub.note[lang]}</span> : null}
                </a>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function TransitCityPanel({
  modes,
  airportToCity,
  howTo,
  apps,
  tip,
  hubs,
  cityName,
}: {
  hubs?: CityHubs
  cityName: string
  modes: TransitModeId[]
  airportToCity?: { ko: string; en: string }
  howTo: { ko: string; en: string }
  apps: TransitApp[]
  tip?: { ko: string; en: string }
}) {
  const { lang } = useLanguage()
  const ordered = TRANSIT_MODE_ORDER.filter((m) => modes.includes(m))

  return (
    <section className="transit-panel" aria-label={t('transitCity', lang)}>
      <p className="section-label" style={{ marginTop: 22 }}>
        {t('transitCity', lang)}
      </p>
      <div className="transit-card">
        <div className="transit-modes" aria-label={t('transitModes', lang)}>
          {ordered.map((mode) => (
            <span key={mode} className="transit-mode-chip">
              <span aria-hidden>{MODE_ICON[mode]}</span>
              {modeLabel(mode, lang)}
            </span>
          ))}
        </div>
        {hubs ? <TransitHubList hubs={hubs} cityName={cityName} lang={lang} /> : null}
        {airportToCity ? (
          <div className="transit-block">
            <h3>{t('transitAirport', lang)}</h3>
            <p>{airportToCity[lang]}</p>
          </div>
        ) : null}
        <div className="transit-block">
          <h3>{t('transitHowTo', lang)}</h3>
          <p>{howTo[lang]}</p>
        </div>
        {apps.length > 0 ? <TransitAppList apps={apps} lang={lang} /> : null}
        {tip ? (
          <p className="transit-tip">
            <strong>{t('transitTip', lang)}</strong> {tip[lang]}
          </p>
        ) : null}
      </div>
    </section>
  )
}
