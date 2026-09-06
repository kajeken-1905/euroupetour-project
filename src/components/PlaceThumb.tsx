import { useState } from 'react'
import type { CategoryId, Place } from '../types'

const CATEGORY_STYLE: Record<CategoryId, { bg: string; fg: string; glyph: string }> = {
  fine_dining: { bg: '#f2e7d6', fg: '#875327', glyph: '🍽️' },
  cafe: { bg: '#e8ded1', fg: '#6f4e37', glyph: '☕' },
  bakery: { bg: '#f6e6c6', fg: '#976610', glyph: '🥐' },
  korean: { bg: '#efdede', fg: '#a03a3a', glyph: '🍚' },
}

/** Small deterministic hue shift so neighbouring placeholder tiles look distinct. */
function hueShift(id: string): number {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0
  return (((h % 24) + 24) % 24) - 12
}

export function PlaceThumb({ place, size = 104 }: { place: Place; size?: number }) {
  const [failed, setFailed] = useState(false)
  const src = place.image ?? `/places/${place.id}.jpg`
  const style = CATEGORY_STYLE[place.category]

  if (!failed) {
    return (
      <img
        className="place-thumb"
        src={src}
        alt={place.name}
        loading="lazy"
        width={size}
        height={size}
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <span
      className="place-thumb place-thumb-ph"
      role="img"
      aria-label={place.name}
      style={{
        width: size,
        height: size,
        background: style.bg,
        filter: `hue-rotate(${hueShift(place.id)}deg)`,
      }}
    >
      <span className="place-thumb-glyph" aria-hidden>
        {style.glyph}
      </span>
      <span className="place-thumb-name" style={{ color: style.fg }}>
        {place.name}
      </span>
    </span>
  )
}
