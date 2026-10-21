import type { CityHighlight, HighlightVisit, Lang } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import { assetUrl } from '../utils/assetUrl'
import { getHighlightVisit } from '../data/visit'
import { FavoriteButton } from './FavoriteButton'
import { BeenButton } from './BeenButton'

export const DAYS: Record<string, { ko: string; en: string }> = {
  mon: { ko: '월', en: 'Mon' },
  tue: { ko: '화', en: 'Tue' },
  wed: { ko: '수', en: 'Wed' },
  thu: { ko: '목', en: 'Thu' },
  fri: { ko: '금', en: 'Fri' },
  sat: { ko: '토', en: 'Sat' },
  sun: { ko: '일', en: 'Sun' },
}

function duration([min, max]: [number, number], lang: Lang) {
  const one = (m: number) => {
    if (m < 60) return lang === 'ko' ? `${m}분` : `${m} min`
    const h = Math.round((m / 60) * 10) / 10
    return lang === 'ko' ? `${h}시간` : `${h} h`
  }
  if (min === max) return one(min)
  if (min >= 60 || max < 60) {
    const unit = max < 60 ? (lang === 'ko' ? '분' : ' min') : lang === 'ko' ? '시간' : ' h'
    const n = (m: number) => (max < 60 ? m : Math.round((m / 60) * 10) / 10)
    return `${n(min)}–${n(max)}${unit}`
  }
  return `${one(min)}–${one(max)}`
}

function closedLabel(closed: string, lang: Lang) {
  if (closed === 'daily') return t('visitDaily', lang)
  const days = closed.split(',').map((d) => DAYS[d]?.[lang] ?? d)
  return lang === 'ko' ? `${days.join('·')}요일 ${t('visitClosed', lang)}` : `${t('visitClosed', lang)} ${days.join(', ')}`
}

function host(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]
}

/** Today as YYYY-MM-DD in the traveller's own time zone. */
function today() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function VisitInfo({ visit }: { visit: HighlightVisit }) {
  const { lang } = useLanguage()
  // A dated notice drops out once its last day has passed, so it never outlives what it describes.
  const notices = (visit.notices ?? []).filter((n) => n.until >= today())
  const hasTags = visit.minutes || visit.closed || visit.booking
  return (
    <div className="highlight-visit">
      {hasTags ? (
        <div className="visit-tags">
          {visit.minutes ? <span className="visit-tag">⏱ {duration(visit.minutes, lang)}</span> : null}
          {visit.closed ? <span className="visit-tag">🗓 {closedLabel(visit.closed, lang)}</span> : null}
          {visit.booking ? (
            <span className={`visit-tag visit-tag-${visit.booking}`}>🎟 {t(`visitBooking_${visit.booking}`, lang)}</span>
          ) : null}
        </div>
      ) : null}
      {visit.note ? <p className="visit-note">{visit.note[lang]}</p> : null}
      {notices.map((n) => (
        <p key={n.until + n.text.en} className="visit-note">
          {n.text[lang]}
        </p>
      ))}
      {visit.tickets ? (
        <a className="visit-link" href={visit.tickets} target="_blank" rel="noreferrer">
          {t('visitTickets', lang)}: {host(visit.tickets)}
        </a>
      ) : null}
      {visit.site ? (
        <a className="visit-link" href={visit.site} target="_blank" rel="noreferrer">
          {t('visitSite', lang)}: {host(visit.site)}
        </a>
      ) : null}
      {visit.checked ? (
        <p className="visit-checked">
          ✓ {t('visitChecked', lang).replace('{y}', visit.checked.slice(0, 4)).replace('{m}', String(Number(visit.checked.slice(5))))}
        </p>
      ) : null}
    </div>
  )
}

export function HighlightCard({ highlight }: { highlight: CityHighlight }) {
  const { lang } = useLanguage()
  const visit = getHighlightVisit(highlight.id)

  return (
    <article className="highlight-card" id={highlight.id}>
      <a
        className="highlight-card-main"
        href={highlight.mapsUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`${highlight.name[lang]} — ${t('openMaps', lang)}`}
      >
        <div
          className="highlight-card-media"
          style={{ backgroundImage: `url(${assetUrl(highlight.image)})` }}
          role="img"
          aria-label={highlight.name[lang]}
        />
        <div className="highlight-card-body">
          <h3>{highlight.name[lang]}</h3>
          <p>{highlight.description[lang]}</p>
          <span className="highlight-card-maps">{t('openMaps', lang)}</span>
        </div>
      </a>
      <div className="card-float-actions">
        <FavoriteButton kind="highlights" id={highlight.id} />
        <BeenButton kind="highlights" id={highlight.id} />
      </div>
      {visit ? <VisitInfo visit={visit} /> : null}
    </article>
  )
}
