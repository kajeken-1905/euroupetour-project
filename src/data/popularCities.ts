/**
 * "Most visited cities" for the search screen: European cities in order of international visitors.
 * The top four are Euromonitor's Top 100 City Destinations 2025 (international arrivals, the only European
 * figures it publishes openly); the rest are each city's own official count of foreign guests for 2025, or for
 * 2024 where 2025 is not out yet, and a few are worked out from official totals (marked approx). Methods differ,
 * so the order is a rough guide. Sources: scripts/popular_cities_sources.md.
 */
export interface PopularCity {
  cityId: string
  /** International visitors, in millions. */
  millions: number
  /** The year the figure is for. */
  year: 2024 | 2025
  basis: 'euromonitor' | 'official'
  /** Worked out from official totals rather than counted directly. */
  approx?: boolean
}

export const POPULAR_CITIES: PopularCity[] = [
  { cityId: 'london', millions: 22.7, year: 2025, basis: 'euromonitor' },
  { cityId: 'istanbul', millions: 19.7, year: 2025, basis: 'euromonitor' },
  { cityId: 'antalya', millions: 18.6, year: 2025, basis: 'euromonitor' },
  { cityId: 'paris', millions: 18.3, year: 2025, basis: 'euromonitor' },
  { cityId: 'rome', millions: 12.0, year: 2025, basis: 'official' },
  { cityId: 'amsterdam', millions: 7.7, year: 2025, basis: 'official' },
  { cityId: 'barcelona', millions: 7.46, year: 2025, basis: 'official' },
  { cityId: 'prague', millions: 6.7, year: 2025, basis: 'official' },
  { cityId: 'vienna', millions: 6.4, year: 2024, basis: 'official' },
  { cityId: 'madrid', millions: 6.07, year: 2025, basis: 'official' },
  { cityId: 'budapest', millions: 6.0, year: 2024, basis: 'official', approx: true },
  { cityId: 'lisbon', millions: 5.5, year: 2024, basis: 'official' },
  { cityId: 'milan', millions: 5.3, year: 2024, basis: 'official', approx: true },
  { cityId: 'venice', millions: 5.11, year: 2024, basis: 'official' },
  { cityId: 'athens', millions: 5.0, year: 2025, basis: 'official', approx: true },
  { cityId: 'berlin', millions: 4.49, year: 2025, basis: 'official' },
  { cityId: 'dublin', millions: 4.09, year: 2024, basis: 'official' },
  { cityId: 'munich', millions: 3.84, year: 2025, basis: 'official' },
]
