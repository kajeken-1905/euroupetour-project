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
  left: { id: string; reason: 'time' | 'closed' | 'trip' | 'shut' }[]
}

/** Walk assumed between two stops when either has no pin. */
const HOP = 20
/** A sight within this distance (km) of a day's stops counts as nearby. */
const NEAR = 1.2
/** ...and within this distance (km) of the sight the day was built around, so that a day does not creep across town. */
const SPREAD = 2.5
/** Stand-in distance (km) between two stops without pins: next to each other in the suggested plan, or not. */
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
 * A day-by-day plan from the traveller's conditions. Each day is built around the most important sight still
 * waiting (favourites, then the best-known), filled with important sights nearby until the time is used up,
 * and nothing lands on a weekday it is closed.
 */
export function buildPlan(input: PlannerInput): PlannerResult {
  const { city, suggested, days, startWeekday, budget, favourites, geo } = input
  const closedOn = (id: string, day: number) =>
    startWeekday !== undefined &&
    (getHighlightVisit(id)?.closed ?? '').split(',').includes(WEEKDAYS[(startWeekday + day) % 7])

  const route = suggested.flatMap((d) => d.stops)
  const group = new Map(suggested.flatMap((d, i) => d.stops.map((id) => [id, i] as const)))
  const tripDays = suggested
    .filter((d) => d.trip)
    .map((d) => ({ ...d, stops: d.stops.filter((id) => !getHighlightVisit(id)?.shut) }))
    .filter((d) => d.stops.length > 0)
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

  // Importance: favourites first, then the id number. The city lists its sights district by district; the id
  // number is the better guide, because the best-known sights were entered first (paris-h1 is the Eiffel Tower).
  const number = (id: string) => Number(id.slice(id.lastIndexOf('-h') + 2)) || 999
  const inTown = city.highlights
    .map((h) => h.id)
    .filter((id) => !outOfTown.has(id))
    .sort((a, b) => number(a) - number(b))
  const ranked = [...inTown.filter((id) => favourites.has(id)), ...inTown.filter((id) => !favourites.has(id))]
  const rank = new Map(ranked.map((id, i) => [id, i]))
  const reason = new Map<string, 'time' | 'closed' | 'trip' | 'shut'>()
  // Places shut for a long time (renovation, closed for good) are never planned.
  for (const h of city.highlights) if (getHighlightVisit(h.id)?.shut) reason.set(h.id, 'shut')
  for (const id of ranked)
    if (!reason.has(id) && townDays.every((day) => closedOn(id, day))) reason.set(id, townDays.length > 0 ? 'closed' : 'time')

  const apart = (a: string, b: string) =>
    geo[a] && geo[b] ? km(geo[a], geo[b]) : group.has(a) && group.get(a) === group.get(b) ? SAME_GROUP : OTHER_GROUP

  // Order a day: start where the suggested plan starts, then always the nearest stop next.
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

  // 1) Fill the days one by one. Each day starts from the most important sight still waiting (one that can only
  //    go on this day comes first), then takes the most important sights near the ones it already has. A sight
  //    further away joins only while the day is still short, so that a day stays in one part of town.
  //    When everything fits with room to spare, the days are filled evenly rather than the last one left thin.
  const waiting = ranked.filter((id) => !reason.has(id))
  const allTime = waiting.reduce((sum, id) => sum + visitMinutes(id) + HOP, 0)
  const needed = Math.min(townDays.length, Math.max(1, Math.ceil(allTime / budget)))
  const target = allTime <= townDays.length * budget ? Math.min(budget, (allTime / needed) * 1.15) : budget
  const stops = new Map(townDays.map((day) => [day, [] as string[]]))
  // Before a day is opened beyond those needed, and at the end, a sight left over joins a nearby day with room.
  const squeeze = () => {
    for (const id of [...waiting]) {
      const day = townDays
        .filter((d) => stops.get(d)!.length > 0 && !closedOn(id, d))
        .map((d) => ({ d, near: Math.min(...stops.get(d)!.map((other) => apart(id, other))) }))
        .filter(({ d, near }) => near <= NEAR * 2 && dayLength(tour([...stops.get(d)!, id]), geo) <= budget * 1.05)
        .sort((a, b) => a.near - b.near)[0]?.d
      if (day === undefined) continue
      stops.get(day)!.push(id)
      waiting.splice(waiting.indexOf(id), 1)
    }
  }
  for (const [n, day] of townDays.entries()) {
    if (n >= needed) squeeze()
    const later = townDays.slice(n)
    const open = waiting.filter((id) => !closedOn(id, day))
    if (open.length === 0) continue
    const onlyHere = open
      .slice(0, later.length)
      .find((id) => later.every((other) => other === day || closedOn(id, other)))
    const there = [onlyHere ?? open[0]]
    waiting.splice(waiting.indexOf(there[0]), 1)
    const limit = n < needed ? target : budget
    for (;;) {
      const fitting = waiting.filter((id) => !closedOn(id, day) && dayLength(tour([...there, id]), geo) <= limit * 1.05)
      const distance = (id: string) => Math.min(...there.map((other) => apart(id, other)))
      const next =
        fitting.find((id) => distance(id) <= NEAR && apart(id, there[0]) <= SPREAD) ??
        (dayLength(tour(there), geo) < limit * 0.6
          ? fitting.slice(0, 5).sort((a, b) => distance(a) - distance(b))[0]
          : undefined)
      if (next === undefined) break
      there.push(next)
      waiting.splice(waiting.indexOf(next), 1)
    }
    stops.set(day, there)
  }
  squeeze()

  // 2) A favourite that found no place takes the room of the least important sights of the nearest day.
  for (const id of waiting.filter((id) => favourites.has(id))) {
    const options = townDays
      .filter((day) => !closedOn(id, day))
      .map((day) => {
        const kept = [...stops.get(day)!].sort((a, b) => rank.get(a)! - rank.get(b)!)
        while (kept.length > 0 && dayLength(tour([...kept, id]), geo) > budget * 1.05 && !favourites.has(kept[kept.length - 1]))
          kept.pop()
        const near = Math.min(OTHER_GROUP * 2, ...stops.get(day)!.map((other) => apart(id, other)))
        return { day, kept, near }
      })
      .filter((o) => dayLength(tour([...o.kept, id]), geo) <= budget * 1.05 || o.kept.length === 0)
      .sort((a, b) => b.kept.length - a.kept.length || a.near - b.near)
    if (options.length === 0) continue
    const { day, kept } = options[0]
    for (const dropped of stops.get(day)!) if (!kept.includes(dropped)) waiting.push(dropped)
    stops.set(day, [...kept, id])
    waiting.splice(waiting.indexOf(id), 1)
  }
  for (const id of waiting) reason.set(id, 'time')
  const open = townDays.filter((day) => stops.get(day)!.length > 0)

  // 3) Tidy up: the important sights took their places first, which can part neighbours (the Forum from the
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

  // 4) A day left very short (a sight or two the estimate above did not see fitting elsewhere) is folded into
  //    nearby days with room, when all of its stops find one.
  for (const day of [...open].sort((a, b) => dayLength(stops.get(a)!, geo) - dayLength(stops.get(b)!, geo))) {
    const short = stops.get(day)!
    if (short.length === 0 || dayLength(tour(short), geo) >= target * 0.4) continue
    const moved = new Map(open.filter((d) => d !== day).map((d) => [d, [...stops.get(d)!]]))
    const placed = short.every((id) => {
      const into = [...moved.keys()]
        .filter((d) => moved.get(d)!.length > 0 && ok([...moved.get(d)!, id], d))
        .map((d) => ({ d, near: Math.min(...moved.get(d)!.map((other) => apart(id, other))) }))
        .filter(({ near }) => near <= NEAR * 2)
        .sort((a, b) => a.near - b.near)[0]?.d
      if (into !== undefined) moved.get(into)!.push(id)
      return into !== undefined
    })
    if (!placed) continue
    for (const [d, list] of moved) stops.set(d, list)
    stops.set(day, [])
  }

  // Days used go first, so that the empty ones are at the end of the stay (unless that would move a sight onto
  // a weekday it is closed).
  const used = townDays.map((day) => stops.get(day)!).filter((list) => list.length > 0)
  if (used.every((list, i) => list.every((id) => !closedOn(id, townDays[i]))))
    townDays.forEach((day, i) => stops.set(day, used[i] ?? []))
  for (const day of townDays) {
    const walked = tour(stops.get(day)!)
    plan[day] = { stops: walked, minutes: dayLength(walked, geo) }
  }

  for (const id of outOfTown) if (!reason.has(id) && !plan.some((d) => d?.stops.includes(id))) reason.set(id, 'trip')
  return {
    days: plan.map((d) => d ?? { stops: [], minutes: 0 }),
    left: city.highlights.flatMap((h) => (reason.has(h.id) ? [{ id: h.id, reason: reason.get(h.id)! }] : [])),
  }
}
