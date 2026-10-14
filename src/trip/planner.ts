import type { City, ItineraryDay } from '../types'
import { getHighlightVisit } from '../data/visit'

export const WEEKDAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const

export interface PlannerInput {
  city: City
  /** The suggested itinerary: its order is the walking order, its trips are the out-of-town days. */
  suggested: ItineraryDay[]
  days: number
  /** Weekday of the first day (0 = Monday); undefined when no date was given, and closed days are then ignored. */
  startWeekday?: number
  /** Minutes of sightseeing (visits and the walks between them) per day. */
  budget: number
  /** Highlight ids to fit in first. */
  favourites: Set<string>
  /** Give a day to an out-of-town trip when there is more than one day. */
  trips: boolean
  /** Verified pins; a stop without one is placed by the suggested itinerary instead. */
  geo: Record<string, [number, number]>
}

export interface PlannedDay {
  stops: string[]
  /** Visits plus the walks between them. */
  minutes: number
  trip?: boolean
  title?: { ko: string; en: string }
}

export interface PlannerResult {
  days: PlannedDay[]
  /** Highlights that did not make it, in the city's own order. */
  left: { id: string; reason: 'time' | 'closed' | 'trip' }[]
}

/** Walk assumed between two stops when either has no pin. */
const HOP = 20
/** Stand-in distance (km) between two stops without pins: next to each other in the suggested plan, or not. */
/** A sight this far (km) from every day so far starts a new day, while days are still to be opened. */
const NEW_DAY = 2
const SAME_GROUP = 0.4
const OTHER_GROUP = 3

/** Middle of the suggested time on site; 45 minutes when none is recorded. */
export function visitMinutes(id: string) {
  const m = getHighlightVisit(id)?.minutes
  return m ? (m[0] + m[1]) / 2 : 45
}

function km(a: [number, number], b: [number, number]) {
  const x = ((b[1] - a[1]) * Math.PI) / 180 * Math.cos((((a[0] + b[0]) / 2) * Math.PI) / 180)
  const y = ((b[0] - a[0]) * Math.PI) / 180
  return 6371 * Math.hypot(x, y)
}

/** Minutes on foot: straight-line distance stretched by 1.3 for streets, at 4.5 km/h. */
function walk(a: string, b: string, geo: PlannerInput['geo']) {
  if (!geo[a] || !geo[b]) return HOP
  return Math.min(60, Math.max(5, Math.round(((km(geo[a], geo[b]) * 1.3) / 4.5) * 60)))
}

function dayLength(stops: string[], geo: PlannerInput['geo']) {
  return stops.reduce((sum, id, i) => sum + visitMinutes(id) + (i > 0 ? walk(stops[i - 1], id, geo) : 0), 0)
}

/**
 * A day-by-day plan from the traveller's conditions. Sights are chosen in order of importance (favourites,
 * then the best-known first) until the time is used up, then spread over the days so that
 * neighbours share a day and nothing lands on a weekday it is closed.
 */
export function buildPlan(input: PlannerInput): PlannerResult {
  const { city, suggested, days, startWeekday, budget, favourites, geo } = input
  const closedOn = (id: string, day: number) =>
    startWeekday !== undefined &&
    (getHighlightVisit(id)?.closed ?? '').split(',').includes(WEEKDAYS[(startWeekday + day) % 7])

  const route = suggested.flatMap((d) => d.stops)
  const group = new Map(suggested.flatMap((d, i) => d.stops.map((id) => [id, i] as const)))
  const tripDays = suggested.filter((d) => d.trip && d.stops.length > 0)
  const outOfTown = new Set(tripDays.flatMap((d) => d.stops))
  const plan: (PlannedDay | undefined)[] = Array.from({ length: days }, () => undefined)

  // Out-of-town trips take a day each, from the last day backwards: at most a third of the stay.
  const tripSlots = input.trips && days > 1 ? Math.min(tripDays.length, Math.max(1, Math.floor(days / 3))) : 0
  const byFavourite = [...tripDays].sort(
    (a, b) => Number(b.stops.some((id) => favourites.has(id))) - Number(a.stops.some((id) => favourites.has(id))),
  )
  for (const trip of byFavourite.slice(0, tripSlots)) {
    for (let day = days - 1; day >= 0; day--) {
      if (plan[day] || trip.stops.some((id) => closedOn(id, day))) continue
      plan[day] = { stops: trip.stops, minutes: dayLength(trip.stops, geo), trip: true, title: trip.title }
      break
    }
  }
  const townDays = plan.flatMap((d, i) => (d ? [] : [i]))

  // 1) Choose: favourites first, then the city's own order, until the days are full.
  // The city lists its sights district by district; the id number is the better guide to importance,
  // because the best-known sights were entered first (paris-h1 is the Eiffel Tower, -h2 the Louvre).
  const number = (id: string) => Number(id.slice(id.lastIndexOf('-h') + 2)) || 999
  const inTown = city.highlights
    .map((h) => h.id)
    .filter((id) => !outOfTown.has(id))
    .sort((a, b) => number(a) - number(b))
  const ranked = [...inTown.filter((id) => favourites.has(id)), ...inTown.filter((id) => !favourites.has(id))]
  const reason = new Map<string, 'time' | 'closed' | 'trip'>()
  const chosen: string[] = []
  let total = 0
  for (const id of ranked) {
    if (townDays.every((day) => closedOn(id, day))) reason.set(id, townDays.length > 0 ? 'closed' : 'time')
    else if (total + visitMinutes(id) + HOP > townDays.length * budget) reason.set(id, 'time')
    else {
      chosen.push(id)
      total += visitMinutes(id) + HOP
    }
  }

  // 2) Place, most important first (sights tied to a weekday ahead of the rest). A sight joins the day whose
  //    stops are nearest; it opens a new day when it is far from all of them or fits in none, but only as many
  //    days are opened this way as the chosen sights need, so that a long stay is not spread thin.
  const stops = new Map(townDays.map((day) => [day, [] as string[]]))
  const apart = (a: string, b: string) =>
    geo[a] && geo[b] ? km(geo[a], geo[b]) : group.has(a) && group.get(a) === group.get(b) ? SAME_GROUP : OTHER_GROUP
  const fits = (id: string, day: number) => {
    const there = stops.get(day)!
    return !closedOn(id, day) && (there.length === 0 || dayLength([...there, id], geo) <= budget * 1.05)
  }
  const needed = Math.min(townDays.length, Math.max(1, Math.ceil(total / budget)))
  const open: number[] = []
  const constrained = (id: string) => townDays.some((day) => closedOn(id, day))
  const near = (id: string, day: number) => Math.min(...stops.get(day)!.map((other) => apart(id, other)))
  for (const id of [...chosen].sort((x, y) => Number(constrained(y)) - Number(constrained(x)))) {
    const beside = open.filter((d) => fits(id, d)).sort((x, y) => near(id, x) - near(id, y))[0]
    const fresh = townDays.find((d) => stops.get(d)!.length === 0 && fits(id, d))
    const day =
      fresh !== undefined && open.length < needed && (beside === undefined || near(id, beside) > NEW_DAY)
        ? fresh
        : (beside ?? fresh)
    if (day === undefined) reason.set(id, 'time')
    else {
      stops.get(day)!.push(id)
      if (!open.includes(day)) open.push(day)
    }
  }

  // The choice above only estimated the walks; where a day still has room, take the next sights in line.
  for (const id of ranked) {
    if (reason.get(id) !== 'time') continue
    const day = open.filter((d) => fits(id, d)).sort((x, y) => near(id, x) - near(id, y))[0]
    if (day === undefined) continue
    stops.get(day)!.push(id)
    reason.delete(id)
  }

  // 3) Order a day: start where the suggested plan starts, then always the nearest stop next.
  const routeIndex = (id: string) => (route.includes(id) ? route.indexOf(id) : route.length + inTown.indexOf(id))
  const tour = (placed: string[]) => {
    const todo = [...placed].sort((a, b) => routeIndex(a) - routeIndex(b))
    const walked: string[] = []
    while (todo.length > 0) {
      const last = walked[walked.length - 1]
      const pinned = last && geo[last] ? todo.filter((id) => geo[id]) : []
      const next = pinned.length
        ? pinned.reduce((a, c) => (km(geo[last], geo[c]) < km(geo[last], geo[a]) ? c : a))
        : todo[0]
      walked.push(next)
      todo.splice(todo.indexOf(next), 1)
    }
    // The order they were fitted in is known to be within the day; keep it if the walk came out longer.
    return dayLength(walked, geo) <= dayLength(placed, geo) ? walked : placed
  }

  // 4) Tidy up: the important sights took their places first, which can part neighbours (the Forum from the
  //    Colosseum). Swap two stops between days, or move one, whenever that shortens the walking overall.
  const ok = (list: string[], day: number) =>
    list.every((id) => !closedOn(id, day)) && (list.length <= 1 || dayLength(tour(list), geo) <= budget * 1.05)
  const walking = (list: string[]) => dayLength(tour(list), geo) - list.reduce((sum, id) => sum + visitMinutes(id), 0)
  for (let round = 0, improved = true; improved && round < 40; round++) {
    improved = false
    for (const a of open)
      for (const b of open) {
        if (a === b) continue
        const from = stops.get(a)!
        const to = stops.get(b)!
        const before = walking(from) + walking(to)
        let best: [string[], string[]] | undefined
        let bestGain = 1 // minutes; ignore changes too small to matter
        const consider = (nextFrom: string[], nextTo: string[]) => {
          const gain = before - walking(nextFrom) - walking(nextTo)
          if (gain > bestGain && nextFrom.length > 0 && ok(nextFrom, a) && ok(nextTo, b)) {
            best = [nextFrom, nextTo]
            bestGain = gain
          }
        }
        for (const x of from) {
          consider(from.filter((id) => id !== x), [...to, x])
          if (a < b) for (const y of to) consider([...from.filter((id) => id !== x), y], [...to.filter((id) => id !== y), x])
        }
        if (best) {
          stops.set(a, best[0])
          stops.set(b, best[1])
          improved = true
        }
      }
  }
  for (const day of townDays) {
    const walked = tour(stops.get(day)!)
    plan[day] = { stops: walked, minutes: dayLength(walked, geo) }
  }

  for (const id of outOfTown) if (!plan.some((d) => d?.stops.includes(id))) reason.set(id, 'trip')
  return {
    days: plan.map((d) => d ?? { stops: [], minutes: 0 }),
    left: city.highlights.flatMap((h) => (reason.has(h.id) ? [{ id: h.id, reason: reason.get(h.id)! }] : [])),
  }
}
