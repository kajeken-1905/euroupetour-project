import { useLanguage } from '../contexts/LanguageContext'
import { getCityFuniculars } from '../data/funiculars'
import { t } from '../i18n/ui'

function pick(text: string, lang: 'ko' | 'en'): string {
  const [ko, en] = text.split('|')
  return lang === 'ko' ? ko : (en ?? ko)
}

export function FunicularsPanel({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const items = getCityFuniculars(cityId)
  if (items.length === 0) return null

  return (
    <section className="routes-panel" aria-label={t('funicularsTitle', lang)}>
      <p className="section-label" style={{ marginTop: 22 }}>
        {t('funicularsTitle', lang)}
      </p>
      <div className="transit-card">
        <ul className="night-train-list">
          {items.map((item) => (
            <li key={item.name} className="night-train">
              <div className="night-train-head">
                <span className="night-train-name">
                  <span aria-hidden>🚡</span> {item.name}
                </span>
              </div>
              <p className="night-train-note">{pick(item.route, lang)}</p>
              {item.ticket ? <p className="night-train-note">🎫 {pick(item.ticket, lang)}</p> : null}
              {item.status ? <p className="route-resv night-train-status">⚠️ {pick(item.status, lang)}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
