import { useEffect, useState } from 'react'
import type { CategoryId, City, Place } from '../types'
import { sortByRating } from '../utils/sortByRating'
import { countries } from './countries'
import { cityIndex } from './cityIndex'

/**
 * Cities (with their sights) and places, loaded one country at a time from the files that
 * scripts/gen-country-data.ts writes, so the city screen fetches its own country rather than all 48.
 * The lookups below see only the countries loaded so far: a screen first waits for what it needs
 * with `useCountryData`. Do not import cities.ts or places.ts in the app — the service worker would
 * then save the whole set a second time.
 */
interface CountryData {
  cities: City[]
  places: Place[]
  /** Each place's position in the full list (see the generator). */
  order: number[]
}

const files = import.meta.glob<CountryData>('./by-country/*.json', { import: 'default' })
const loaded = new Set<string>()
const pending = new Map<string, Promise<void>>()
const cityById = new Map<string, City>()
const placeById = new Map<string, Place>()
const placeOrder = new Map<string, number>()
const placesByCity = new Map<string, Place[]>()
const cityOrder = new Map(cityIndex.map((c, i) => [c.id, i]))

function loadCountry(countryId: string): Promise<void> {
  if (loaded.has(countryId)) return Promise.resolve()
  let promise = pending.get(countryId)
  if (!promise) {
    const file = files[`./by-country/${countryId}.json`]
    promise = (file ? file() : Promise.resolve({ cities: [], places: [], order: [] })).then(
      (data) => {
        for (const city of data.cities) cityById.set(city.id, city)
        data.places.forEach((place, i) => {
          placeById.set(place.id, place)
          placeOrder.set(place.id, data.order[i])
          placesByCity.set(place.cityId, [...(placesByCity.get(place.cityId) ?? []), place])
        })
        loaded.add(countryId)
      },
      (error) => {
        pending.delete(countryId)
        throw error
      },
    )
    pending.set(countryId, promise)
  }
  return promise
}

const ALL = countries.map((c) => c.id)

/**
 * True once the given countries ('all' for every one) are loaded; starts loading them otherwise and
 * re-renders when they arrive.
 */
export function useCountryData(countryIds: string[] | 'all'): boolean {
  const ids = countryIds === 'all' ? ALL : countryIds
  const ready = ids.every((id) => loaded.has(id))
  const [, setTick] = useState(0)
  const key = ids.join(',')
  useEffect(() => {
    if (ready) return
    let live = true
    Promise.allSettled(key.split(',').filter(Boolean).map(loadCountry)).then(() => {
      if (live) setTick((n) => n + 1)
    })
    return () => {
      live = false
    }
  }, [key, ready])
  return ready
}

/** The country of a city, from the always-loaded city index. */
export function countryOfCity(cityId: string) {
  return cityIndex.find((c) => c.id === cityId)?.countryId
}

export function getCity(id: string) {
  return cityById.get(id)
}

export function getPlace(id: string) {
  return placeById.get(id)
}

export function getPlacesByCity(cityId: string): Place[] {
  return placesByCity.get(cityId) ?? []
}

export function getPlacesByCityAndCategory(cityId: string, category: CategoryId) {
  return sortByRating(getPlacesByCity(cityId).filter((p) => p.category === category))
}

/** Loaded cities, in the order of the full list. */
export function loadedCities(): City[] {
  return [...cityById.values()].sort((a, b) => (cityOrder.get(a.id) ?? 0) - (cityOrder.get(b.id) ?? 0))
}

/** Loaded places, in the order of the full list. */
export function loadedPlaces(): Place[] {
  return [...placeById.values()].sort((a, b) => placeOrder.get(a.id)! - placeOrder.get(b.id)!)
}

/** How many countries are loaded; lets a cache built from the loaded data tell when it is stale. */
export function loadedCountryCount() {
  return loaded.size
}
