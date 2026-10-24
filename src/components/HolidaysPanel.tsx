import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import { isoDate, useHolidays } from '../services/holidays'

const WEEKDAYS = { ko: ['일', '월', '화', '수', '목', '금', '토'], en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] }
const SHOW_DAYS = 120

/** The country's public holidays in the next few months, when shops and museums may close. */
export function HolidaysPanel({ countryId }: { countryId: string }) {
  const { lang } = useLanguage()
  const today = new Date()
  const year = today.getFullYear()
  const holidays = useHolidays(countryId, [year, year + 1])
  if (!holidays) return null

  const from = isoDate(today)
  const until = isoDate(new Date(year, today.getMonth(), today.getDate() + SHOW_DAYS))
  // The same day can be listed twice (e.g. two regions); keep the first.
  const seen = new Set<string>()
  const upcoming = holidays
    .filter((h) => h.date >= from && h.date <= until)
    .sort((a, b) => a.date.localeCompare(b.date))
    .filter((h) => (seen.has(h.date + h.name) ? false : (seen.add(h.date + h.name), true)))
  if (holidays.length === 0) return null

  const label = (iso: string) => {
    const [y, m, d] = iso.split('-').map(Number)
    const wd = WEEKDAYS[lang][new Date(y, m - 1, d).getDay()]
    return lang === 'ko' ? `${m}월 ${d}일(${wd})` : `${wd} ${d} ${new Date(y, m - 1, d).toLocaleString('en', { month: 'short' })}`
  }

  return (
    <section className="itinerary-panel" aria-label={t('holidaysTitle', lang)}>
      <p className="section-label">{t('holidaysTitle', lang)}</p>
      <div className="transit-card">
        {upcoming.length ? (
          <table className="fares-table holidays-table">
            <tbody>
              {upcoming.map((h) => (
                <tr key={h.date + h.name}>
                  <th scope="row">{label(h.date)}</th>
                  <td>
                    {h.name}
                    {h.localName !== h.name ? <span className="holiday-local"> · {h.localName}</span> : null}
                    {h.nationwide ? null : <span className="holiday-region"> {t('holidaysRegional', lang)}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="stay-note">{t('holidaysNone', lang)}</p>
        )}
        <p className="stay-note">💡 {t('holidaysTip', lang)}</p>
        <p className="itinerary-note">
          {t('holidaysSource', lang)}{' '}
          <a href="https://date.nager.at" target="_blank" rel="noopener noreferrer">
            Nager.Date ↗
          </a>
        </p>
      </div>
    </section>
  )
}
