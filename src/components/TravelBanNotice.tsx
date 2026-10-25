import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

/** Countries the Korean government has made travel-ban areas (passport use restricted). */
const TRAVEL_BAN = new Set(['ua'])
const MOFA_ALERTS = 'https://www.0404.go.kr/travelAlert/apntStatus/stepTravelAlert'

export const isTravelBan = (countryId: string) => TRAVEL_BAN.has(countryId)

/** Warning at the top of a travel-ban country's pages. */
export function TravelBanNotice({ countryId }: { countryId: string }) {
  const { lang } = useLanguage()
  if (!isTravelBan(countryId)) return null
  return (
    <section className="ban-notice" role="note" aria-label={t('travelBanTitle', lang)}>
      <p className="ban-notice-title">⛔ {t('travelBanTitle', lang)}</p>
      <p className="ban-notice-text">{t('travelBanText', lang)}</p>
      <a className="plan-map-link" href={MOFA_ALERTS} target="_blank" rel="noopener noreferrer">
        {t('travelBanLink', lang)} ↗
      </a>
    </section>
  )
}
