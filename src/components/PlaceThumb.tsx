import type { Place } from '../types'

/**
 * Renders a visited-in-person photo for a place when one has been added
 * (`place.image`, typically `/places/<id>.jpg`). Renders nothing otherwise —
 * no placeholder.
 */
export function PlaceThumb({ place, size = 104 }: { place: Place; size?: number }) {
  if (!place.image) return null

  return (
    <img
      className="place-thumb"
      src={place.image}
      alt={place.name}
      loading="lazy"
      width={size}
      height={size}
    />
  )
}
