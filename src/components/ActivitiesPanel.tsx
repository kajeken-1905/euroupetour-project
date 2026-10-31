import { useLanguage } from '../contexts/LanguageContext'
import { ACTIVITIES } from '../data/activities'
import { t } from '../i18n/ui'
import { assetUrl } from '../utils/assetUrl'
import type { Activity } from '../types'

function pick(text: string, lang: 'ko' | 'en'): string {
  const [ko, en] = text.split('|')
  return lang === 'ko' ? ko : (en ?? ko)
}

const KIND_ICON: Record<Activity['kind'], string> = {
  paragliding: '🪂',
  skydiving: '🪂',
  rafting: '🚣',
  canyoning: '🧗',
  kayak: '🛶',
  hiking: '🥾',
  sledging: '🛷',
  swimming: '🏊',
  bungee: '🪢',
  'via-ferrata': '🧗',
}

function ActivityCard({ a }: { a: Activity }) {
  const { lang } = useLanguage()
  const rows: [string, string, string | undefined][] = [
    ['📍', t('activityWhere', lang), a.where],
    ['📅', t('activitySeason', lang), a.season],
    ['⏱', t('activityTime', lang), a.time],
    ['✋', t('activityNeeds', lang), a.needs],
    ['🎫', t('activityBook', lang), a.book],
  ]
  return (
    <article className="highlight-card gateway-card" id={`activity-${a.id}`}>
      {a.image ? (
        <div className="highlight-card-media" style={{ backgroundImage: `url(${assetUrl(a.image)})` }} role="img" aria-label={pick(a.name, lang)} />
      ) : null}
      <div className="highlight-card-body">
        <h3>
          <span aria-hidden>{KIND_ICON[a.kind]}</span> {pick(a.name, lang)}
        </h3>
        <p>{pick(a.about, lang)}</p>
      </div>
      <details className="gateway-ways">
        <summary>{t('activityDetails', lang)}</summary>
        <ul className="gateway-options">
          {rows
            .filter(([, , v]) => v)
            .map(([icon, label, v]) => (
              <li key={label} className="gateway-option">
                <p className="gateway-option-name">
                  <span aria-hidden>{icon}</span> {label}
                </p>
                <p>{pick(v!, lang)}</p>
              </li>
            ))}
        </ul>
        {a.note ? <p className="gateway-note">⚠️ {pick(a.note, lang)}</p> : null}
        <a className="visit-link" href={a.site} target="_blank" rel="noreferrer">
          {t('visitSite', lang)} ↗
        </a>
        <p className="visit-checked">
          ✓ {t('activityChecked', lang).replace('{y}', a.checked.slice(0, 4)).replace('{m}', String(Number(a.checked.slice(5))))}
        </p>
      </details>
    </article>
  )
}

/** City screen: outdoor activities from the city, as cards after the sights. */
export function CityActivities({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const list = ACTIVITIES.filter((a) => a.cityId === cityId)
  if (list.length === 0) return null
  return (
    <>
      <p className="highlight-group">{t('activitiesTitle', lang)}</p>
      {list.map((a) => (
        <ActivityCard key={a.id} a={a} />
      ))}
    </>
  )
}
