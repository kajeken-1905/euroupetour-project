export interface Visit {
  year: number
  month: number
}

export interface VisitedPlaces {
  countries: Record<string, Visit[]>
  cities: Record<string, Visit[]>
}

export type VisitKind = 'countries' | 'cities'

export function emptyVisitedPlaces(): VisitedPlaces {
  return { countries: {}, cities: {} }
}
