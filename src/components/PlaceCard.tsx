import { Link } from 'react-router-dom'
import type { Place } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { MichelinBadge } from './MichelinBadge'
import { PlaceThumb } from './PlaceThumb'
import { MapLinks } from './MapLinks'
import { FavoriteButton } from './FavoriteButton'
import { BeenButton } from './BeenButton'

export function PlaceCard({ place }: { place: Place }) {
  const { lang } = useLanguage()

  return (
    <article className="place-card">
      <div className="place-card-body">
        <div className="place-card-head">
          <Link to={`/place/${place.id}`}>
            <h3>{place.name}</h3>
          </Link>
          <span className="card-actions">
            <FavoriteButton kind="places" id={place.id} />
            <BeenButton kind="places" id={place.id} />
          </span>
        </div>
        <p className="desc">{place.description[lang]}</p>
        <p className="addr">{place.address}</p>
        <MapLinks url={place.mapsUrl} />
      </div>
      <div className="place-card-media">
        <MichelinBadge michelin={place.michelin} />
        <PlaceThumb place={place} />
      </div>
    </article>
  )
}
