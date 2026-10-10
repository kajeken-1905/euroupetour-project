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

/**
 * When two cities have no direct entry: the one-change surface route with the shortest two legs.
 * The legs are real entries; the time spent changing is not known and is left out.
 */
export function getViaRoute(fromCityId: string, toCityId: string): [CityRoute, CityRoute] | undefined {
  let best: [CityRoute, CityRoute] | undefined
  for (const first of getCityRoutes(fromCityId)) {
    if (first.mode === 'flight' || first.toCityId === toCityId) continue
    const second = getRoutesBetween(first.toCityId, toCityId).find((route) => route.mode !== 'flight')
    if (second && (!best || first.minutes + second.minutes < best[0].minutes + best[1].minutes)) best = [first, second]
  }
  return best
}
