import { countries, getCountry } from '../data/countries'
import { cities, getCity } from '../data/cities'
import { places } from '../data/places'
import { CATEGORIES } from '../types'

export type SearchKind = 'country' | 'city' | 'highlight' | 'place'

export interface SearchEntry {
  kind: SearchKind
  key: string
  title: { ko: string; en: string }
  /** Where the entry belongs, e.g. "프랑스 · 파리". */
  sub: { ko: string; en: string }
  to: string
  /** Highlight card to scroll to on the city page. */
  highlightId?: string
  /** Normalised names to match against. */
  names: string[]
  /** Initial consonants of the Korean name, for ㅍㄹ-style queries. */
  initials: string
}

const INITIALS = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'

/** Lower-case, strip accents, spaces and punctuation; Hangul syllables are kept whole. */
export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .normalize('NFC')
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .replace(/[^\p{L}\p{N}]/gu, '')
}

function initialsOf(text: string): string {
  let out = ''
  for (const ch of text) {
    const code = ch.charCodeAt(0) - 0xac00
    if (code >= 0 && code <= 11171) out += INITIALS[Math.floor(code / 588)]
  }
  return out
}

function entry(
  kind: SearchKind,
  key: string,
  title: { ko: string; en: string },
  sub: { ko: string; en: string },
  to: string,
  extraNames: string[] = [],
  highlightId?: string,
): SearchEntry {
  const names = [...new Set([title.ko, title.en, ...extraNames].map(normalize).filter(Boolean))]
  return { kind, key, title, sub, to, highlightId, names, initials: initialsOf(title.ko) }
}

let index: SearchEntry[] | undefined

function buildIndex(): SearchEntry[] {
  const out: SearchEntry[] = []
  for (const c of countries) {
    out.push(entry('country', c.id, c.name, { ko: '', en: '' }, `/country/${c.id}`, [c.nativeName]))
  }
  for (const city of cities) {
    const country = getCountry(city.countryId)
    if (!country) continue
    out.push(entry('city', city.id, city.name, country.name, `/city/${city.id}`, [city.nativeName]))
    const where = { ko: `${country.name.ko} · ${city.name.ko}`, en: `${country.name.en} · ${city.name.en}` }
    for (const h of city.highlights) {
      out.push(entry('highlight', h.id, h.name, where, `/city/${city.id}`, [], h.id))
    }
  }
  for (const p of places) {
    const city = getCity(p.cityId)
    if (!city) continue
    const category = CATEGORIES.find((c) => c.id === p.category)
    out.push(
      entry(
        'place',
        p.id,
        { ko: p.name, en: p.name },
        { ko: `${city.name.ko} · ${category?.ko ?? ''}`, en: `${city.name.en} · ${category?.en ?? ''}` },
        `/place/${p.id}`,
      ),
    )
  }
  return out
}

export const SEARCH_KINDS: SearchKind[] = ['country', 'city', 'highlight', 'place']

export type SearchResults = Record<SearchKind, { items: SearchEntry[]; total: number }>

/** Name search over countries, cities, highlights and places; exact, then prefix, then inner matches. */
export function search(query: string, limit = 20): SearchResults {
  index ??= buildIndex()
  const results: SearchResults = {
    country: { items: [], total: 0 },
    city: { items: [], total: 0 },
    highlight: { items: [], total: 0 },
    place: { items: [], total: 0 },
  }
  const raw = query.replace(/\s/g, '')
  const q = normalize(query)
  const byInitials = raw.length >= 2 && [...raw].every((ch) => INITIALS.includes(ch))
  if (!q && !byInitials) return results

  const exact: SearchEntry[] = []
  const prefix: SearchEntry[] = []
  const inner: SearchEntry[] = []
  for (const e of index) {
    const names = byInitials ? [e.initials] : e.names
    const needle = byInitials ? raw : q
    if (names.includes(needle)) exact.push(e)
    else if (names.some((n) => n.startsWith(needle))) prefix.push(e)
    else if (names.some((n) => n.includes(needle))) inner.push(e)
  }
  for (const e of [...exact, ...prefix, ...inner]) {
    const group = results[e.kind]
    group.total += 1
    if (group.items.length < limit) group.items.push(e)
  }
  return results
}

const RECENT_KEY = 'recent-searches'

export function recentSearches(): string[] {
  try {
    const list = JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]')
    return Array.isArray(list) ? list.filter((v) => typeof v === 'string').slice(0, 5) : []
  } catch {
    return []
  }
}

export function rememberSearch(query: string): string[] {
  const q = query.trim()
  const list = q ? [q, ...recentSearches().filter((v) => v !== q)].slice(0, 5) : recentSearches()
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(list))
  } catch {
    // Storage may be unavailable; recent searches are a convenience only.
  }
  return list
}

export function clearRecentSearches() {
  try {
    localStorage.removeItem(RECENT_KEY)
  } catch {
    // ignore
  }
}
