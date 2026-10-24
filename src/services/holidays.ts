import { useEffect, useState } from 'react'

/**
 * Public holidays from Nager.Date (https://date.nager.at), fetched per country and year and kept
 * in localStorage for a week. Kosovo is not covered and Azerbaijan comes back empty, so those
 * simply show nothing.
 */
export interface Holiday {
  /** YYYY-MM-DD */
  date: string
  localName: string
  name: string
  /** False when only some regions observe it (e.g. Scotland only). */
  nationwide: boolean
}

const API = 'https://date.nager.at/api/v3/PublicHolidays'
const WEEK = 7 * 24 * 60 * 60 * 1000
const pending = new Map<string, Promise<Holiday[]>>()

/** Our country ids are ISO codes except the United Kingdom. */
const isoCode = (countryId: string) => (countryId === 'uk' ? 'GB' : countryId.toUpperCase())

function readCache(key: string): Holiday[] | undefined {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return undefined
    const { at, list } = JSON.parse(raw) as { at: number; list: Holiday[] }
    return Date.now() - at < WEEK && Array.isArray(list) ? list : undefined
  } catch {
    return undefined
  }
}

function writeCache(key: string, list: Holiday[]) {
  try {
    localStorage.setItem(key, JSON.stringify({ at: Date.now(), list }))
  } catch {
    // Storage may be full or blocked; the list still shows for this visit.
  }
}

function fetchYear(countryId: string, year: number): Promise<Holiday[]> {
  const key = `holidays-${countryId}-${year}`
  const cached = readCache(key)
  if (cached) return Promise.resolve(cached)
  if (!pending.has(key)) {
    pending.set(
      key,
      fetch(`${API}/${year}/${isoCode(countryId)}`)
        .then((r) => (r.status === 200 ? r.json() : []))
        .then((rows: { date: string; localName: string; name: string; global: boolean }[]) => {
          const list = rows.map((h) => ({ date: h.date, localName: h.localName, name: h.name, nationwide: h.global }))
          writeCache(key, list)
          return list
        })
        .catch(() => {
          pending.delete(key)
          return []
        }),
    )
  }
  return pending.get(key)!
}

/** Holidays for the given years; undefined while loading. */
export function useHolidays(countryId: string | undefined, years: number[]): Holiday[] | undefined {
  const [list, setList] = useState<Holiday[] | undefined>(undefined)
  const yearsKey = years.join(',')
  useEffect(() => {
    if (!countryId) return
    let live = true
    setList(undefined)
    Promise.all(yearsKey.split(',').map((y) => fetchYear(countryId, Number(y)))).then((lists) => {
      if (live) setList(lists.flat())
    })
    return () => {
      live = false
    }
  }, [countryId, yearsKey])
  return list
}

/** YYYY-MM-DD for a local date. */
export function isoDate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
