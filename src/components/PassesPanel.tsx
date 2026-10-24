import { useLanguage } from '../contexts/LanguageContext'
import type { Pass } from '../data/passes'
import { t } from '../i18n/ui'

/** Travel passes and city cards: what they cover, kinds and prices, and the official place to buy. */
export function PassesPanel({ passes }: { passes: Pass[] }) {
  const { lang } = useLanguage()
  if (passes.length === 0) return null
  return (
    <section className="itinerary-panel" aria-label={t('passesTitle', lang)}>
      <p className="section-label">{t('passesTitle', lang)}</p>
      {passes.map((pass) => {
        const [year, month] = pass.checked.split('-')
        return (
          <div key={pass.name.en} className="transit-card pass-card">
            <p className="pass-name">{pass.name[lang]}</p>
            <p className="stay-note">{pass.covers[lang]}</p>
            <table className="fares-table">
              <tbody>
                {pass.rows.map((row) => (
                  <tr key={row.name.en}>
                    <th scope="row">{row.name[lang]}</th>
                    <td className={row.price ? undefined : 'pass-price-site'}>{row.price || t('passesSeeSite', lang)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {pass.tips.map((tip) => (
              <p key={tip.en} className="stay-note">
                💡 {tip[lang]}
              </p>
            ))}
            <p className="itinerary-note">
              <a className="pass-buy" href={pass.buy} target="_blank" rel="noopener noreferrer">
                {t('passesBuy', lang)} ↗
              </a>{' '}
              · {t('passesChecked', lang).replace('{y}', year).replace('{m}', String(Number(month)))}
            </p>
          </div>
        )
      })}
    </section>
  )
}
