import { useEffect, useState } from 'react'
import type { Gateway } from '../types'

// One module per country, fetched only when a city or country screen needs it.
const modules = import.meta.glob<{ GATEWAYS: Gateway[] }>('./gateways/*.ts')
const cache = new Map<string, Gateway[]>()

/** The country's airports, stations and ports; `undefined` while loading, `[]` when there are none. */
export function useGateways(countryId: string): Gateway[] | undefined {
  const [list, setList] = useState(() => cache.get(countryId))
  useEffect(() => {
    if (cache.has(countryId)) {
      setList(cache.get(countryId))
      return
    }
    const load = modules[`./gateways/${countryId}.ts`]
    if (!load) {
      cache.set(countryId, [])
      setList([])
      return
    }
    let live = true
    load().then((m) => {
      cache.set(countryId, m.GATEWAYS)
      if (live) setList(m.GATEWAYS)
    })
    return () => {
      live = false
    }
  }, [countryId])
  return list
}
