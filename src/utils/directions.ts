/** Google Maps accepts an origin, a destination and up to nine stops between them. */
const MAX_STOPS = 11

/**
 * A Google Maps directions link through the given places in order. Each place is passed as the
 * search text of its own map link, so no coordinates are needed. Returns undefined when there are
 * fewer than two places, more than Google accepts, or a place has no search text.
 */
export function directionsUrl(mapsUrls: string[]): string | undefined {
  if (mapsUrls.length < 2 || mapsUrls.length > MAX_STOPS) return undefined
  const queries: string[] = []
  for (const url of mapsUrls) {
    try {
      const query = new URL(url).searchParams.get('query')
      if (!query) return undefined
      queries.push(query)
    } catch {
      return undefined
    }
  }
  const params = new URLSearchParams({ api: '1', origin: queries[0], destination: queries[queries.length - 1] })
  if (queries.length > 2) params.set('waypoints', queries.slice(1, -1).join('|'))
  return `https://www.google.com/maps/dir/?${params.toString()}`
}
