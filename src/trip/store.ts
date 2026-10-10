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
}

export type FavoriteKind = 'highlights' | 'places'

const STORAGE_KEY = 'my-trip-v1'

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
  return { highlights: strings(raw.highlights), places: strings(raw.places), plans, route }
}

const EMPTY: TripData = { highlights: [], places: [], plans: {}, route: [] }

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

/** Replace the multi-city route. */
export function setRoute(route: string[]) {
  commit({ ...data, route })
}

/** Merge an imported backup: favourites are combined; plans for the same city and a non-empty route come from the file. */
export function mergeTrip(incoming: TripData) {
  commit({
    highlights: [...new Set([...data.highlights, ...incoming.highlights])],
    places: [...new Set([...data.places, ...incoming.places])],
    plans: { ...data.plans, ...incoming.plans },
    route: incoming.route.length > 0 ? incoming.route : data.route,
  })
}
