import { useSyncExternalStore } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import { applyUpdate, hasUpdate, subscribeUpdate } from '../offline/serviceWorker'

export function UpdateBanner() {
  const { lang } = useLanguage()
  const ready = useSyncExternalStore(subscribeUpdate, hasUpdate)
  if (!ready) return null
  return (
    <div className="update-banner" role="status">
      <span>{t('updateReady', lang)}</span>
      <button type="button" onClick={applyUpdate}>
        {t('updateReload', lang)}
      </button>
    </div>
  )
}
