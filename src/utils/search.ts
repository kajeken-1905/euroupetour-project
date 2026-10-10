import { countries, getCountry } from '../data/countries'
import { cities, getCity } from '../data/cities'
import { places } from '../data/places'
import { CATEGORIES, type CategoryId } from '../types'

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
  /** City the entry sits in, for "파리 카페"-style queries. */
  cityId?: string
  countryId?: string
  category?: CategoryId
  /** Normalised name and description, matched when a query names a city plus a word. */
  text?: string
  /** Sub line shown when the entry was found through its description. */
  detail?: { ko: string; en: string }
}

/** Words that mean one of the place categories. */
const CATEGORY_WORDS: Record<CategoryId, string[]> = {
  fine_dining: ['맛집', '식당', '음식점', '레스토랑', '로컬푸드', '현지음식', 'restaurant', 'restaurants', 'food', 'localfood', 'dining'],
  korean: ['한식', '한식당', '한국음식', '한국음식점', '한국식당', 'korean', 'koreanfood', 'koreanrestaurant'],
  cafe: ['카페', '커피', '커피숍', 'cafe', 'cafes', 'coffee'],
  bakery: ['베이커리', '빵집', '빵', '제과점', 'bakery', 'bakeries', 'bread'],
}

/** Words that mean "all sights of this city". */
const SIGHT_WORDS = ['관광', '관광지', '관광포인트', '명소', '볼거리', '가볼만한곳', 'sights', 'sight', 'attractions', 'thingstodo']

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
  scope: Pick<SearchEntry, 'cityId' | 'countryId' | 'category' | 'text' | 'detail'> = {},
): SearchEntry {
  const names = [...new Set([title.ko, title.en, ...extraNames].map(normalize).filter(Boolean))]
  return { kind, key, title, sub, to, highlightId, names, initials: initialsOf(title.ko), ...scope }
}

function textOf(name: { ko: string; en: string }, description: { ko: string; en: string }): string {
  return [name.ko, name.en, description.ko, description.en].map(normalize).join(' ')
}

let index: SearchEntry[] | undefined

function buildIndex(): SearchEntry[] {
  const out: SearchEntry[] = []
  for (const c of countries) {
    out.push(entry('country', c.id, c.name, { ko: '', en: '' }, `/country/${c.id}`, [c.nativeName], undefined, { countryId: c.id }))
  }
  for (const city of cities) {
    const country = getCountry(city.countryId)
    if (!country) continue
    const at = { cityId: city.id, countryId: country.id }
    out.push(entry('city', city.id, city.name, country.name, `/city/${city.id}`, [city.nativeName], undefined, at))
    const where = { ko: `${country.name.ko} · ${city.name.ko}`, en: `${country.name.en} · ${city.name.en}` }
    for (const h of city.highlights) {
      out.push(
        entry('highlight', h.id, h.name, where, `/city/${city.id}`, [], h.id, {
          ...at,
          text: textOf(h.name, h.description),
          detail: { ko: `${city.name.ko} · ${h.description.ko}`, en: `${city.name.en} · ${h.description.en}` },
        }),
      )
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
        [],
        undefined,
        {
          cityId: city.id,
          countryId: city.countryId,
          category: p.category,
          text: textOf({ ko: p.name, en: p.name }, p.description),
          detail: {
            ko: `${city.name.ko} · ${category?.ko ?? ''} · ${p.description.ko}`,
            en: `${city.name.en} · ${category?.en ?? ''} · ${p.description.en}`,
          },
        },
      ),
    )
  }
  return out
}

export const SEARCH_KINDS: SearchKind[] = ['country', 'city', 'highlight', 'place']

export type SearchResults = Record<SearchKind, { items: SearchEntry[]; total: number }>

/**
 * "파리 카페", "로마 젤라토", "프랑스 빵집": a city or country name plus a word. The word is read as a
 * place category or "sights" when it is one, and otherwise looked up in names and descriptions.
 */
function scopedSearch(all: SearchEntry[], query: string): SearchEntry[] {
  const tokens = query.trim().split(/\s+/).map(normalize).filter(Boolean)
  if (tokens.length < 2) return []
  // The place name may come first or last and may itself be several words ("san sebastian cafe").
  for (let n = tokens.length - 1; n >= 1; n -= 1) {
    for (const [where, word] of [
      [tokens.slice(0, n).join(''), tokens.slice(n).join('')],
      [tokens.slice(-n).join(''), tokens.slice(0, -n).join('')],
    ]) {
      const cityIds = new Set<string>()
      const countryIds = new Set<string>()
      for (const e of all) {
        if (e.kind === 'city' && e.names.includes(where)) cityIds.add(e.cityId!)
        else if (e.kind === 'country' && e.names.includes(where)) countryIds.add(e.countryId!)
      }
      if (cityIds.size === 0 && countryIds.size === 0) continue
      const inScope = (e: SearchEntry) =>
        (e.cityId !== undefined && cityIds.has(e.cityId)) || (e.countryId !== undefined && countryIds.has(e.countryId))
      const category = (Object.keys(CATEGORY_WORDS) as CategoryId[]).find((c) => CATEGORY_WORDS[c].includes(word))
      if (category) return all.filter((e) => e.kind === 'place' && e.category === category && inScope(e))
      if (SIGHT_WORDS.includes(word)) return all.filter((e) => e.kind === 'highlight' && inScope(e))
      const found = all
        .filter((e) => (e.kind === 'place' || e.kind === 'highlight') && e.text?.includes(word) && inScope(e))
        .map((e) => (e.names.some((name) => name.includes(word)) || !e.detail ? e : { ...e, sub: e.detail }))
      if (found.length > 0) return found
    }
  }
  return []
}

/**
 * Search over countries, cities, highlights and places. A city or country name followed by a word
 * lists that kind of place there; otherwise names are matched exact, then prefix, then inner.
 */
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
  const scoped = byInitials ? [] : scopedSearch(index, query)
  const seen = new Set<string>()
  for (const e of [...scoped, ...exact, ...prefix, ...inner]) {
    const id = `${e.kind}:${e.key}`
    if (seen.has(id)) continue
    seen.add(id)
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
