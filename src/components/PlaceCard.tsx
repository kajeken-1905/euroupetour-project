import { Link } from 'react-router-dom'
import type { Place } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { RatingStars } from './RatingStars'
import { PlaceThumb } from './PlaceThumb'
import { MapLinks } from './MapLinks'
import { t } from '../i18n/ui'

export function PlaceCard({ place }: { place: Place }) {
  const { lang } = useLanguage()

  return (
    <article className="place-card">
      <div className="place-card-body">
        <Link to={`/place/${place.id}`}>
          <h3>{place.name}</h3>
        </Link>
        <p className="desc">{place.description[lang]}</p>
        <p className="addr">{place.address}</p>
        {place.reviewCount ? (
          <p className="addr">
            {place.reviewCount.toLocaleString()} {t('reviews', lang)}
          </p>
        ) : null}
        <MapLinks url={place.mapsUrl} />
      </div>
      <div className="place-card-media">
        <RatingStars rating={place.rating} />
        <PlaceThumb place={place} />
      </div>
    </article>
  )
}
