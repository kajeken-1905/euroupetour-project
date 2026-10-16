import type { Michelin } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

/** The Michelin Guide distinction, shown only where the guide confirms it. */
export function MichelinBadge({ michelin }: { michelin?: Michelin }) {
  const { lang } = useLanguage()
  if (!michelin) return null
  return <span className="michelin">{t(`michelin_${michelin}`, lang)}</span>
}
