import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import { toggleFavorite, useTrip, type FavoriteKind } from '../trip/store'

export function FavoriteButton({ kind, id, className = '' }: { kind: FavoriteKind; id: string; className?: string }) {
  const { lang } = useLanguage()
  const saved = useTrip()[kind].includes(id)
  return (
    <button
      type="button"
      className={`fav-btn${saved ? ' is-saved' : ''}${className ? ` ${className}` : ''}`}
      aria-pressed={saved}
      aria-label={t(saved ? 'favRemove' : 'favAdd', lang)}
      title={t(saved ? 'favRemove' : 'favAdd', lang)}
      onClick={() => toggleFavorite(kind, id)}
    >
      {saved ? '♥' : '♡'}
    </button>
  )
}
