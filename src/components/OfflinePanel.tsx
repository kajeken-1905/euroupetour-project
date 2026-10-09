import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import {
  countryImageBytes,
  countryImagePaths,
  offlineSupported,
  removeCountry,
  saveCountry,
  savedCount,
} from '../offline/countryImages'

function megabytes(bytes: number) {
  return bytes >= 10_000_000 ? Math.round(bytes / 1_000_000) : Math.round(bytes / 100_000) / 10
}

export function OfflinePanel({ countryId }: { countryId: string }) {
  const { lang } = useLanguage()
  const [bytes, setBytes] = useState<number>()
  const [saved, setSaved] = useState(() => savedCount(countryId))
  const [progress, setProgress] = useState<[number, number]>()
  const [failed, setFailed] = useState(0)

  useEffect(() => {
    let live = true
    setSaved(savedCount(countryId))
    setFailed(0)
    setBytes(undefined)
    countryImageBytes(countryId).then((b) => {
      if (live) setBytes(b)
    })
    return () => {
      live = false
    }
  }, [countryId])

  if (!offlineSupported || countryImagePaths(countryId).length === 0) return null

  const save = async () => {
    setFailed(0)
    setProgress([0, countryImagePaths(countryId).length])
    const failures = await saveCountry(countryId, (done, total) => setProgress([done, total]))
    setProgress(undefined)
    setFailed(failures)
    setSaved(savedCount(countryId))
  }

  const remove = async () => {
    await removeCountry(countryId)
    setSaved(0)
  }

  const size = bytes ? ` (${lang === 'ko' ? '약 ' : '~'}${megabytes(bytes)}MB)` : ''

  return (
    <section className="offline-panel" aria-label={t('offlineTitle', lang)}>
      <p className="section-label" style={{ marginTop: 22 }}>
        {t('offlineTitle', lang)}
      </p>
      <div className="transit-card">
        <p className="offline-intro">{t('offlineIntro', lang)}</p>
        {progress ? (
          <div className="offline-progress" role="status">
            <progress value={progress[0]} max={progress[1]} />
            <span>
              {t('offlineSaving', lang).replace('{done}', String(progress[0])).replace('{total}', String(progress[1]))}
            </span>
          </div>
        ) : saved > 0 ? (
          <div className="offline-actions">
            <span className="offline-saved">✓ {t('offlineSaved', lang).replace('{n}', String(saved))}</span>
            <button type="button" className="offline-button offline-button-quiet" onClick={remove}>
              {t('offlineRemove', lang)}
            </button>
          </div>
        ) : (
          <div className="offline-actions">
            <button type="button" className="offline-button" onClick={save}>
              {t(failed > 0 ? 'offlineRetry' : 'offlineSave', lang)}
              {size}
            </button>
          </div>
        )}
        {failed > 0 ? <p className="offline-failed">{t('offlineFailed', lang).replace('{n}', String(failed))}</p> : null}
        <p className="itinerary-note">{t('offlineHint', lang)}</p>
      </div>
    </section>
  )
}
