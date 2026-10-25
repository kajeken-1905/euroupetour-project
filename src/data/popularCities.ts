/**
 * "Most visited cities" for the search screen: European cities in order of international visitors in 2024, the
 * latest year with an official count for every city. Most figures are foreign guests arriving at accommodation;
 * London and Dublin only publish visitor-survey counts and Istanbul and Antalya border entries (method), and a few
 * are worked out from official totals (approx). Sources: scripts/popular_cities_sources.md.
 */
export interface PopularCity {
  cityId: string
  /** International visitors in 2024, in millions. */
  millions: number
  /** How the city counts them: accommodation guests unless noted. */
  method?: 'survey' | 'border'
  /** Worked out from official totals rather than counted directly. */
  approx?: boolean
}

export const POPULAR_CITIES: PopularCity[] = [
  { cityId: 'london', millions: 20.95, method: 'survey' },
  { cityId: 'istanbul', millions: 18.58, method: 'border' },
  { cityId: 'antalya', millions: 16.93, method: 'border' },
  { cityId: 'paris', millions: 12.3 },
  { cityId: 'rome', millions: 11.65 },
  { cityId: 'amsterdam', millions: 7.37 },
  { cityId: 'barcelona', millions: 6.95 },
  { cityId: 'prague', millions: 6.51 },
  { cityId: 'vienna', millions: 6.4 },
  { cityId: 'budapest', millions: 6.0, approx: true },
  { cityId: 'madrid', millions: 5.81 },
  { cityId: 'lisbon', millions: 5.5 },
  { cityId: 'milan', millions: 5.3, approx: true },
  { cityId: 'venice', millions: 5.11 },
  { cityId: 'berlin', millions: 4.72 },
  { cityId: 'athens', millions: 4.5, approx: true },
  { cityId: 'dublin', millions: 4.09, method: 'survey' },
  { cityId: 'munich', millions: 3.87 },
]
