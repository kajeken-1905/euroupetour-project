import { useSyncExternalStore } from 'react'

/** One day of a personal plan; stops are highlight or place ids. */
export interface PlanDay {
  title?: { ko: string; en: string }
  stops: string[]
}

export interface TripData {
  /** Saved highlight ids. */
  highlights: string[]
  /** Saved place ids. */
  places: string[]
  /** City id → the user's own day-by-day plan. */
  plans: Record<string, PlanDay[]>
  /** City ids in travel order; a city may appear twice (a round trip). */
  route: string[]
  /** The day the traveller will actually be in each route city ('YYYY-MM-DD' or ''), same order as `route`. */
  routeDates: string[]
  /** Highlight ids the traveller has been to. */
  beenHighlights: string[]
  /** Place ids the traveller has been to. */
  beenPlaces: string[]
  /** Saved airport, station and port ids. */
  gateways: string[]
  /** Airport, station and port ids the traveller has been to. */
  beenGateways: string[]
}

export type FavoriteKind = 'highlights' | 'places' | 'gateways'

const STORAGE_KEY = 'my-trip-v1'

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/

const strings = (value: unknown): string[] =>
  Array.isArray(value) ? [...new Set(value.filter((v): v is string => typeof v === 'string'))] : []

/** Coerce anything read from storage or an imported file into a valid TripData. */
export function parseTrip(value: unknown): TripData | undefined {
  if (!value || typeof value !== 'object') return undefined
  const raw = value as Record<string, unknown>
  const plans: Record<string, PlanDay[]> = {}
  if (raw.plans && typeof raw.plans === 'object') {
    for (const [cityId, days] of Object.entries(raw.plans as Record<string, unknown>)) {
      if (!Array.isArray(days)) continue
      plans[cityId] = days
        .filter((d): d is Record<string, unknown> => !!d && typeof d === 'object')
        .map((d) => {
          const title = d.title as { ko?: unknown; en?: unknown } | undefined
          return {
            ...(title && typeof title.ko === 'string' && typeof title.en === 'string'
              ? { title: { ko: title.ko, en: title.en } }
              : {}),
            stops: strings(d.stops),
          }
        })
    }
  }
  const route = Array.isArray(raw.route) ? raw.route.filter((v): v is string => typeof v === 'string') : []
  const dates = Array.isArray(raw.routeDates) ? raw.routeDates : []
  const routeDates = route.map((_, i) => {
    const d = dates[i]
    return typeof d === 'string' && ISO_DAY.test(d) ? d : ''
  })
  return {
    highlights: strings(raw.highlights),
    places: strings(raw.places),
    plans,
    route,
    routeDates,
    beenHighlights: strings(raw.beenHighlights),
    beenPlaces: strings(raw.beenPlaces),
    gateways: strings(raw.gateways),
    beenGateways: strings(raw.beenGateways),
  }
}

const EMPTY: TripData = {
  highlights: [],
  places: [],
  plans: {},
  route: [],
  routeDates: [],
  beenHighlights: [],
  beenPlaces: [],
  gateways: [],
  beenGateways: [],
}

function load(): TripData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return (raw && parseTrip(JSON.parse(raw))) || EMPTY
  } catch {
    return EMPTY
  }
}

let data = load()
const listeners = new Set<() => void>()

function commit(next: TripData) {
  data = next
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // Storage full or blocked: keep working in memory.
  }
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useTrip(): TripData {
  return useSyncExternalStore(subscribe, () => data)
}

export function toggleFavorite(kind: FavoriteKind, id: string) {
  const list = data[kind]
  commit({ ...data, [kind]: list.includes(id) ? list.filter((v) => v !== id) : [...list, id] })
}

const BEEN_KEY = { highlights: 'beenHighlights', places: 'beenPlaces', gateways: 'beenGateways' } as const

/** The ids of sights or places marked as visited. */
export function beenList(trip: TripData, kind: FavoriteKind): string[] {
  return trip[BEEN_KEY[kind]]
}

export function toggleBeen(kind: FavoriteKind, id: string) {
  const key = BEEN_KEY[kind]
  const list = data[key]
  commit({ ...data, [key]: list.includes(id) ? list.filter((v) => v !== id) : [...list, id] })
}

/** Save a city's plan, or drop it when `days` is undefined. */
export function setPlan(cityId: string, days: PlanDay[] | undefined) {
  const plans = { ...data.plans }
  if (days) plans[cityId] = days
  else delete plans[cityId]
  commit({ ...data, plans })
}

/** Drop every city's plan; favourites are kept. */
export function clearPlans() {
  commit({ ...data, plans: {} })
}

/**
 * Replace the multi-city route. Without `dates`, a stop keeps its visit date when the same city stays in the same
 * position (adding cities at the end keeps every date); other stops start without one.
 */
export function setRoute(route: string[], dates?: string[]) {
  const routeDates = route.map((id, i) => (dates ? (dates[i] ?? '') : data.route[i] === id ? (data.routeDates[i] ?? '') : ''))
  commit({ ...data, route, routeDates })
}

/** Set or clear ('') the visit date of the route stop at `index`. */
export function setRouteDate(index: number, date: string) {
  const routeDates = data.route.map((_, i) => (i === index ? date : (data.routeDates[i] ?? '')))
  commit({ ...data, routeDates })
}

/** Merge an imported backup: favourites and visited marks are combined; plans for the same city and a non-empty route come from the file. */
export function mergeTrip(incoming: TripData) {
  commit({
    highlights: [...new Set([...data.highlights, ...incoming.highlights])],
    places: [...new Set([...data.places, ...incoming.places])],
    plans: { ...data.plans, ...incoming.plans },
    route: incoming.route.length > 0 ? incoming.route : data.route,
    routeDates: incoming.route.length > 0 ? incoming.routeDates : data.routeDates,
    beenHighlights: [...new Set([...data.beenHighlights, ...incoming.beenHighlights])],
    beenPlaces: [...new Set([...data.beenPlaces, ...incoming.beenPlaces])],
    gateways: [...new Set([...data.gateways, ...incoming.gateways])],
    beenGateways: [...new Set([...data.beenGateways, ...incoming.beenGateways])],
  })
}
