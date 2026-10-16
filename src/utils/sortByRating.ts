import type { Michelin, Place } from '../types'

const RANK: Record<Michelin, number> = { star3: 4, star2: 3, star1: 2, bib: 1 }

/** Michelin-recognised places first; otherwise the curated order is kept. */
export function sortByRating(list: Place[]): Place[] {
  return [...list].sort((a, b) => (b.michelin ? RANK[b.michelin] : 0) - (a.michelin ? RANK[a.michelin] : 0))
}
