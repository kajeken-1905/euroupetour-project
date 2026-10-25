/**
 * "Most visited cities" for the search screen: European cities in order of international visitors in 2025.
 * The top four are Euromonitor's Top 100 City Destinations 2025 (international arrivals, the only European
 * figures it publishes openly); the rest are each city's own official 2025 count of foreign guests, so the
 * methods differ a little and the order is approximate. Only cities with a confirmed official 2025 figure are
 * listed; Vienna, Milan, Venice, Lisbon, Budapest, Athens and Dublin are to be added once theirs are published.
 * Sources: scripts/popular_cities_sources.md.
 */
export interface PopularCity {
  cityId: string
  /** International visitors in 2025, in millions. */
  millions: number
  basis: 'euromonitor' | 'official'
}

export const POPULAR_CITIES_2025: PopularCity[] = [
  { cityId: 'london', millions: 22.7, basis: 'euromonitor' },
  { cityId: 'istanbul', millions: 19.7, basis: 'euromonitor' },
  { cityId: 'antalya', millions: 18.6, basis: 'euromonitor' },
  { cityId: 'paris', millions: 18.3, basis: 'euromonitor' },
  { cityId: 'rome', millions: 12.0, basis: 'official' },
  { cityId: 'amsterdam', millions: 7.7, basis: 'official' },
  { cityId: 'barcelona', millions: 7.46, basis: 'official' },
  { cityId: 'prague', millions: 6.7, basis: 'official' },
  { cityId: 'madrid', millions: 6.07, basis: 'official' },
  { cityId: 'berlin', millions: 4.49, basis: 'official' },
  { cityId: 'munich', millions: 3.84, basis: 'official' },
]
