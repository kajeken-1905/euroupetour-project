import { useLanguage } from '../contexts/LanguageContext'
import { FESTIVALS } from '../data/festivals'
import { t } from '../i18n/ui'
import { assetUrl } from '../utils/assetUrl'

function pick(text: string, lang: 'ko' | 'en'): string {
  const [ko, en] = text.split('|')
  return lang === 'ko' ? ko : (en ?? ko)
}

/** City screen: the city's festivals as cards after the outlets, each with its photo, when it is held and the next
    announced dates. */
export function CityFestivals({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const list = FESTIVALS.filter((f) => f.cityIds.includes(cityId))
  if (list.length === 0) return null
  return (
    <>
      <p className="highlight-group">{t('festivalsTitle', lang)}</p>
      {list.map((f) => (
        <article key={f.id} className="highlight-card festival-card" id={`festival-${f.id}`}>
          {f.image ? (
            <div
              className="highlight-card-media"
              style={{ backgroundImage: `url(${assetUrl(f.image)})` }}
              role="img"
              aria-label={pick(f.name, lang)}
            />
          ) : null}
          <div className="highlight-card-body">
            <h3>{pick(f.name, lang)}</h3>
            <p>{pick(f.about, lang)}</p>
            <p className="festival-when">
              📅 <b>{t('festivalWhen', lang)}</b> {pick(f.when, lang)}
            </p>
            {f.next ? (
              <p className="festival-when">
                🗓 <b>{t('festivalNext', lang)}</b> {pick(f.next, lang)}
              </p>
            ) : null}
            {f.site ? (
              <a className="visit-link" href={f.site} target="_blank" rel="noreferrer">
                {t('visitSite', lang)} ↗
              </a>
            ) : null}
            <p className="visit-checked">
              ✓{' '}
              {t('festivalChecked', lang)
                .replace('{y}', f.checked.slice(0, 4))
                .replace('{m}', String(Number(f.checked.slice(5))))}
            </p>
          </div>
        </article>
      ))}
    </>
  )
}
