import { useLanguage } from '../contexts/LanguageContext'
import { getCityFares } from '../data/fares'
import { t } from '../i18n/ui'

/** Public transport fares from the operator's own price page, with the month they were checked. */
export function FaresPanel({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const fares = getCityFares(cityId)
  if (!fares) return null
  const [year, month] = fares.checked.split('-')
  // A price may carry its own wording per language, as 'ko|en'.
  const price = (p: string) => (p.includes('|') ? p.split('|')[lang === 'ko' ? 0 : 1] : p)
  return (
    <section className="itinerary-panel" aria-label={t('faresTitle', lang)}>
      <p className="section-label">{t('faresTitle', lang)}</p>
      <div className="transit-card">
        <table className="fares-table">
          <tbody>
            {fares.rows.map((row) => (
              <tr key={row.name.en}>
                <th scope="row">{row.name[lang]}</th>
                <td>{price(row.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {fares.tips.map((tip) => (
          <p key={tip.en} className="stay-note">
            💡 {tip[lang]}
          </p>
        ))}
        <p className="itinerary-note">
          {t('faresNote', lang).replace('{y}', year).replace('{m}', String(Number(month)))}{' '}
          <a href={fares.source} target="_blank" rel="noopener noreferrer">
            {t('faresSource', lang)} ↗
          </a>
        </p>
      </div>
    </section>
  )
}
