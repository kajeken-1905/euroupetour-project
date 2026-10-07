import { useLanguage } from '../contexts/LanguageContext'
import { CONSULAR_CALL_CENTRE } from '../data/essentials'
import { t } from '../i18n/ui'
import type { CountryEssentials } from '../types'

function tel(number: string) {
  return `tel:${number.replace(/[^+\d]/g, '')}`
}

const TEXT_ROWS = [
  ['safety', 'essSafety'],
  ['entry', 'essEntry'],
  ['telecom', 'essTelecom'],
  ['power', 'essPower'],
  ['tipping', 'essTipping'],
  ['water', 'essWater'],
  ['shops', 'essShops'],
  ['toilets', 'essToilets'],
  ['time', 'essTime'],
] as const

export function EssentialsPanel({ essentials }: { essentials: CountryEssentials }) {
  const { lang } = useLanguage()
  const { embassy } = essentials

  return (
    <section className="transit-panel" aria-label={t('essentialsTitle', lang)}>
      <p className="section-label">{t('essentialsTitle', lang)}</p>
      <div className="transit-card">
        <dl className="transit-facts">
          <div className="ess-first">
            <dt>{t('essEmergency', lang)}</dt>
            <dd className="ess-numbers">
              {essentials.emergency.map((item) => (
                <a key={item.number} className="ess-number" href={tel(item.number)}>
                  <strong>{item.number}</strong>
                  <span>{item.label[lang]}</span>
                </a>
              ))}
            </dd>
          </div>
          {embassy ? (
            <div>
              <dt>{t('essEmbassy', lang)}</dt>
              <dd>
                <a href={embassy.source} target="_blank" rel="noreferrer">
                  {embassy.name[lang]}
                </a>
                <br />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(embassy.address)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {embassy.address}
                </a>
                <br />
                <a href={tel(embassy.phone)}>{embassy.phone}</a>
                {embassy.afterHours ? (
                  <>
                    {' · '}
                    {t('essEmbassyAfterHours', lang)}: <a href={tel(embassy.afterHours)}>{embassy.afterHours}</a>
                  </>
                ) : null}
                <br />
                {t('essConsularCall', lang)}: <a href={tel(CONSULAR_CALL_CENTRE)}>{CONSULAR_CALL_CENTRE}</a>
                {embassy.note ? (
                  <>
                    <br />
                    <span className="ess-note">{embassy.note[lang]}</span>
                  </>
                ) : null}
              </dd>
            </div>
          ) : null}
          {TEXT_ROWS.map(([key, label]) => (
            <div key={key}>
              <dt>{t(label, lang)}</dt>
              <dd>{essentials[key][lang]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
