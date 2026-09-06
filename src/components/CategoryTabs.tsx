import { CATEGORIES, type CategoryId } from '../types'
import { useLanguage } from '../contexts/LanguageContext'

const ORDER: CategoryId[] = ['fine_dining', 'cafe', 'bakery', 'korean']

export function CategoryTabs({
  value,
  onChange,
}: {
  value: CategoryId
  onChange: (id: CategoryId) => void
}) {
  const { lang } = useLanguage()

  return (
    <div className="category-tabs" role="tablist" aria-label="Categories">
      <div className="category-tabs-row">
        {ORDER.map((id) => {
          const cat = CATEGORIES.find((c) => c.id === id)
          if (!cat) return null
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={value === cat.id}
              className={value === cat.id ? 'active' : undefined}
              onClick={() => onChange(cat.id)}
            >
              {lang === 'ko' ? cat.ko : cat.en}
            </button>
          )
        })}
      </div>
    </div>
  )
}
