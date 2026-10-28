import type { CityRoute, RouteMode } from '../types'
import { routesFr } from './routes-fr'
import { routesWest } from './routes-west'
import { routesCentral } from './routes-central'
import { routesEast } from './routes-east'

/**
 * One connection between two cities, entered once and shown from both ends.
 * [cityA, cityB, mode, minutes, reservation, stationAtA 'ko|en', stationAtB 'ko|en', note 'ko|en']
 */
export type RawRoute = [
  a: string,
  b: string,
  mode: RouteMode,
  minutes: number,
  reservation: boolean,
  fromA?: string,
  fromB?: string,
  note?: string,
]

const RAW: RawRoute[] = [...routesFr, ...routesWest, ...routesCentral, ...routesEast]

function text(value?: string) {
  if (!value) return undefined
  const [ko, en] = value.split('|')
  return { ko, en: en ?? ko }
}

export function getCityRoutes(cityId: string): CityRoute[] {
  const out: CityRoute[] = []
  for (const [a, b, mode, minutes, reservation, fromA, fromB, note] of RAW) {
    if (a === cityId) out.push({ toCityId: b, mode, minutes, reservation, from: text(fromA), note: text(note) })
    else if (b === cityId) out.push({ toCityId: a, mode, minutes, reservation, from: text(fromB), note: text(note) })
  }
  return out.sort((x, y) => x.minutes - y.minutes)
}

/** Direct connections from one city to another, fastest first. */
export function getRoutesBetween(fromCityId: string, toCityId: string): CityRoute[] {
  return getCityRoutes(fromCityId).filter((route) => route.toCityId === toCityId)
}

/** One leg of a multi-change journey: the city it leaves from and the recorded connection. */
export interface PathLeg {
  fromCityId: string
  route: CityRoute
}

// Changing trains is never free; this keeps a path with fewer changes ahead of a marginally faster one.
const CHANGE_PENALTY = 30
const MAX_LEGS = 7

function shortestPath(fromCityId: string, toCityId: string, modes: RouteMode[]): PathLeg[] | undefined {
  const best = new Map<string, { cost: number; legs: PathLeg[] }>([[fromCityId, { cost: 0, legs: [] }]])
  const queue = [fromCityId]
  while (queue.length > 0) {
    queue.sort((a, b) => best.get(a)!.cost - best.get(b)!.cost)
    const city = queue.shift()!
    const here = best.get(city)!
    if (city === toCityId) return here.legs
    if (here.legs.length >= MAX_LEGS) continue
    for (const route of getCityRoutes(city)) {
      if (!modes.includes(route.mode)) continue
      const cost = here.cost + route.minutes + (here.legs.length > 0 ? CHANGE_PENALTY : 0)
      const seen = best.get(route.toCityId)
      if (seen && seen.cost <= cost) continue
      best.set(route.toCityId, { cost, legs: [...here.legs, { fromCityId: city, route }] })
      if (!queue.includes(route.toCityId)) queue.push(route.toCityId)
    }
  }
  return undefined
}

/**
 * When two cities have no direct entry: the quickest surface journey through other cities, by train if
 * possible, otherwise with buses and ferries too. Every leg is a real entry; time spent changing is not known
 * and is left out of what is shown.
 */
export function getSurfacePath(fromCityId: string, toCityId: string): PathLeg[] | undefined {
  return (
    shortestPath(fromCityId, toCityId, ['train']) ??
    shortestPath(fromCityId, toCityId, ['train', 'mixed', 'bus', 'ferry'])
  )
}
