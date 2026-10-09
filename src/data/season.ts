import type { City, CitySeason, SeasonRating } from '../types'
import { CLIMATE } from './climate'
import { SEASON_NOTES } from './season-notes'

const MID_MONTH_DAY = [15, 46, 74, 105, 135, 166, 196, 227, 258, 288, 319, 349]

/** Hours between sunrise and sunset at mid-month for a latitude. */
function daylight(lat: number, month: number): number {
  const declination = ((23.44 * Math.PI) / 180) * Math.sin((2 * Math.PI * (284 + MID_MONTH_DAY[month])) / 365)
  const x = -Math.tan((lat * Math.PI) / 180) * Math.tan(declination)
  return Math.round((24 / Math.PI) * Math.acos(Math.max(-1, Math.min(1, x))))
}

/**
 * Weather-only rating: mild and fairly dry is best; cold, very hot or very wet is not ideal.
 * In cool-summer places (peak under 25°C) the warmest months count as best even if they are rainy.
 * December–February never rates above fair on weather alone: days are short and coastal resorts wind down.
 */
function rate(high: number, wetDays: number, peak: number, month: number): SeasonRating {
  if (high < 9 || high >= 33) return 'avoid'
  if (peak < 25 && high >= 13 && high >= peak - 2) return 'best'
  if (high >= 17 && high <= 29) return wetDays >= 16 || month === 11 || month < 2 ? 'ok' : 'best'
  return wetDays >= 20 ? 'avoid' : 'ok'
}

const SYMBOL: Record<string, SeasonRating> = { '+': 'best', o: 'ok', '-': 'avoid' }

export function getCitySeason(city: City): CitySeason | undefined {
  const climate = CLIMATE[city.id]
  if (!climate || city.lat === undefined) return undefined
  const [hi, lo, wet] = climate
  const peak = Math.max(...hi)
  const override = SEASON_NOTES[city.id]
  const [ko, en] = override?.n?.split('|') ?? []
  return {
    months: hi.map((high, m) => ({
      high,
      low: lo[m],
      wetDays: wet[m],
      daylight: daylight(city.lat!, m),
      rating: SYMBOL[override?.r?.[m] ?? ''] ?? rate(high, wet[m], peak, m),
    })),
    ...(ko ? { note: { ko, en: en ?? ko } } : {}),
  }
}
