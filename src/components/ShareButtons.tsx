import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import { copyText, shareOut } from '../trip/share'

/** "Share" (the phone's share sheet, or copy) and "Copy as text" for a plan or route. */
export function ShareButtons({ title, text, url }: { title: string; text: string; url: string }) {
  const { lang } = useLanguage()
  const [message, setMessage] = useState('')
  const full = `${text}\n📲 ${t('shareOpenInApp', lang)}: ${url}`
  return (
    <>
      <div className="plan-actions">
        <button
          type="button"
          className="plan-btn"
          onClick={async () => {
            const result = await shareOut(title, text, url)
            setMessage(result === 'copied' ? t('shareCopied', lang) : '')
          }}
        >
          📤 {t('shareButton', lang)}
        </button>
        <button
          type="button"
          className="plan-btn"
          onClick={async () => setMessage(t((await copyText(full)) ? 'shareTextCopied' : 'shareCopyFailed', lang))}
        >
          📋 {t('shareCopyText', lang)}
        </button>
      </div>
      {message ? <p className="itinerary-total" role="status">{message}</p> : null}
    </>
  )
}
