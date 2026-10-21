import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import { beenList, toggleBeen, useTrip, type FavoriteKind } from '../trip/store'

/** A yes/no "I've been here" mark for a sight or place; unlike countries and cities it keeps no date. */
export function BeenButton({ kind, id }: { kind: FavoriteKind; id: string }) {
  const { lang } = useLanguage()
  const been = beenList(useTrip(), kind).includes(id)
  return (
    <button
      type="button"
      className={`fav-btn been-btn${been ? ' is-been' : ''}`}
      aria-pressed={been}
      aria-label={t(been ? 'beenRemove' : 'beenAdd', lang)}
      title={t(been ? 'beenRemove' : 'beenAdd', lang)}
      onClick={() => toggleBeen(kind, id)}
    >
      ✓
    </button>
  )
}
