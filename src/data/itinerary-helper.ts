import type { CityItinerary, ItineraryDay } from '../types'

/** [title as 'ko|en' ('' for none), ...highlight numbers in walking order] */
export type RawDay = [string, ...number[]]
/** A bare number list is a single untitled day. */
export type RawItinerary = number[] | { days: RawDay[]; trips?: RawDay[] }

function day(cityId: string, [title, ...nums]: RawDay, trip: boolean): ItineraryDay {
  const [ko, en] = title.split('|')
  return {
    ...(ko ? { title: { ko, en: en ?? ko } } : {}),
    stops: nums.map((n) => `${cityId}-h${n}`),
    ...(trip ? { trip } : {}),
  }
}

export function buildItineraries(raw: Record<string, RawItinerary>): Record<string, CityItinerary> {
  const out: Record<string, CityItinerary> = {}
  for (const [cityId, r] of Object.entries(raw)) {
    out[cityId] = Array.isArray(r)
      ? { days: [day(cityId, ['', ...r], false)] }
      : {
          days: [
            ...r.days.map((d) => day(cityId, d, false)),
            ...(r.trips ?? []).map((d) => day(cityId, d, true)),
          ],
        }
  }
  return out
}
