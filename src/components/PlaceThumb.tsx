import type { Place } from '../types'
import { assetUrl } from '../utils/assetUrl'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

/**
 * Renders a photo for a place when one has been added (`place.image`,
 * typically `/places/<id>.jpg`). Without one, renders a same-size tile that
 * opens the place on Google Maps, where visitors' photos can be browsed —
 * those photos can't be copied into the app.
 */
export function PlaceThumb({ place, size = 104 }: { place: Place; size?: number }) {
  const { lang } = useLanguage()

  if (!place.image) {
    return (
      <a
        className="place-thumb place-thumb--link"
        href={place.mapsUrl}
        target="_blank"
        rel="noreferrer"
      >
        <span className="place-thumb-icon" aria-hidden>
          📷
        </span>
        <span className="place-thumb-label">{t('viewPhotos', lang)}</span>
        <span className="place-thumb-sub">Google Maps</span>
      </a>
    )
  }

  return (
    <img
      className="place-thumb"
      src={assetUrl(place.image)}
      alt={place.name}
      loading="lazy"
      width={size}
      height={size}
    />
  )
}
