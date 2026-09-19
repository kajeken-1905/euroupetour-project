import { useEffect, useState } from 'react'
import { emptyVisitedPlaces, type Visit, type VisitedPlaces, type VisitKind } from '../types/visits'

const STORAGE_KEY = 'mvp-visited-places-v1'

function load(): VisitedPlaces {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyVisitedPlaces()
    const parsed = JSON.parse(raw) as Partial<VisitedPlaces>
    return {
      countries: parsed.countries ?? {},
      cities: parsed.cities ?? {},
    }
  } catch {
    return emptyVisitedPlaces()
  }
}

function sortVisits(visits: Visit[]): Visit[] {
  return [...visits].sort((a, b) => a.year - b.year || a.month - b.month)
}

export function useVisitedPlaces() {
  const [data, setData] = useState<VisitedPlaces>(() => load())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const getVisits = (kind: VisitKind, id: string): Visit[] => data[kind][id] ?? []

  const addVisit = (kind: VisitKind, id: string, visit: Visit) => {
    setData((prev) => ({
      ...prev,
      [kind]: {
        ...prev[kind],
        [id]: sortVisits([...(prev[kind][id] ?? []), visit]),
      },
    }))
  }

  const removeVisit = (kind: VisitKind, id: string, index: number) => {
    setData((prev) => {
      const current = prev[kind][id] ?? []
      const next = current.filter((_, i) => i !== index)
      const nextGroup = { ...prev[kind] }
      if (next.length) nextGroup[id] = next
      else delete nextGroup[id]
      return { ...prev, [kind]: nextGroup }
    })
  }

  return { data, getVisits, addVisit, removeVisit }
}
