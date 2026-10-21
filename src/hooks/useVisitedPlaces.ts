import { useSyncExternalStore } from 'react'
import { emptyVisitedPlaces, type Visit, type VisitedPlaces, type VisitKind } from '../types/visits'

const STORAGE_KEY = 'mvp-visited-places-v1'

function visitList(value: unknown): Visit[] {
  if (!Array.isArray(value)) return []
  return value.filter(
    (v): v is Visit =>
      !!v && typeof v === 'object' && Number.isInteger((v as Visit).year) && Number.isInteger((v as Visit).month),
  )
}

function visitGroup(value: unknown): Record<string, Visit[]> {
  const group: Record<string, Visit[]> = {}
  if (!value || typeof value !== 'object') return group
  for (const [id, visits] of Object.entries(value as Record<string, unknown>)) {
    const list = visitList(visits)
    if (list.length) group[id] = list
  }
  return group
}

/** Coerce anything read from storage or an imported file into valid visit records. */
export function parseVisits(value: unknown): VisitedPlaces {
  const raw = (value && typeof value === 'object' ? value : {}) as Partial<VisitedPlaces>
  return { countries: visitGroup(raw.countries), cities: visitGroup(raw.cities) }
}

function load(): VisitedPlaces {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? parseVisits(JSON.parse(raw)) : emptyVisitedPlaces()
  } catch {
    return emptyVisitedPlaces()
  }
}

function sortVisits(visits: Visit[]): Visit[] {
  return [...visits].sort((a, b) => a.year - b.year || a.month - b.month)
}

// One copy shared by every screen, so a change (or an imported backup) shows everywhere at once.
let data = load()
const listeners = new Set<() => void>()

function commit(next: VisitedPlaces) {
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

export function getVisitedPlaces(): VisitedPlaces {
  return data
}

/** Merge an imported backup: visits are combined, the same month is kept once. */
export function mergeVisits(incoming: VisitedPlaces) {
  const merge = (current: Record<string, Visit[]>, extra: Record<string, Visit[]>) => {
    const out = { ...current }
    for (const [id, visits] of Object.entries(extra)) {
      const seen = new Set((out[id] ?? []).map((v) => `${v.year}-${v.month}`))
      out[id] = sortVisits([...(out[id] ?? []), ...visits.filter((v) => !seen.has(`${v.year}-${v.month}`))])
    }
    return out
  }
  commit({ countries: merge(data.countries, incoming.countries), cities: merge(data.cities, incoming.cities) })
}

export function useVisitedPlaces() {
  const current = useSyncExternalStore(subscribe, () => data)

  const getVisits = (kind: VisitKind, id: string): Visit[] => current[kind][id] ?? []

  const addVisit = (kind: VisitKind, id: string, visit: Visit) => {
    commit({ ...data, [kind]: { ...data[kind], [id]: sortVisits([...(data[kind][id] ?? []), visit]) } })
  }

  const removeVisit = (kind: VisitKind, id: string, index: number) => {
    const next = (data[kind][id] ?? []).filter((_, i) => i !== index)
    const nextGroup = { ...data[kind] }
    if (next.length) nextGroup[id] = next
    else delete nextGroup[id]
    commit({ ...data, [kind]: nextGroup })
  }

  return { data: current, getVisits, addVisit, removeVisit }
}
