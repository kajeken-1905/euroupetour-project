import { useLanguage } from '../contexts/LanguageContext'
import { getStayAreas } from '../data/stay'
import { t } from '../i18n/ui'

/** Neighbourhoods to stay in, each with a Google Maps link to the hotels there. */
export function StayPanel({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const areas = getStayAreas(cityId)
  if (!areas) return null
  return (
    <section className="itinerary-panel" aria-label={t('stayTitle', lang)}>
      <p className="section-label">{t('stayTitle', lang)}</p>
      <div className="transit-card">
        <ul className="stay-list">
          {areas.map((area) => (
            <li key={area.q} className="stay-area">
              <p className="stay-name">
                {area.name[lang]} <span className="stay-tag">{area.tag[lang]}</span>
              </p>
              <p className="stay-note">{area.note[lang]}</p>
              <a
                className="plan-map-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`hotels ${area.q}`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                🏨 {t('stayHotels', lang)} ↗
              </a>
            </li>
          ))}
        </ul>
        <p className="itinerary-note">{t('stayNote', lang)}</p>
      </div>
    </section>
  )
}
