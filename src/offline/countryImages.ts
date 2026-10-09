import { getCountry } from '../data/countries'
import { getCitiesByCountry } from '../data/cities'
import { places } from '../data/places'
import { assetUrl } from '../utils/assetUrl'

/** Must match the runtime image cache name in sw.template.js. */
const IMAGES = 'images-v1'
const SAVED_KEY = 'offline-countries'

export const offlineSupported = typeof window !== 'undefined' && 'caches' in window && 'serviceWorker' in navigator

/** Public paths (e.g. `/highlights/x.jpg`) of every local photo shown for a country. */
export function countryImagePaths(countryId: string): string[] {
  const country = getCountry(countryId)
  if (!country) return []
  const cities = getCitiesByCountry(countryId)
  const cityIds = new Set(cities.map((c) => c.id))
  const paths = [
    country.landmarkImage,
    ...cities.flatMap((c) => [c.signatureImage, ...c.highlights.map((h) => h.image)]),
    ...places.filter((p) => cityIds.has(p.cityId)).map((p) => p.image),
  ]
  return [...new Set(paths.filter((p): p is string => !!p && !/^(https?:|data:)/i.test(p)))]
}

let sizes: Promise<Record<string, number>> | undefined

/** Total size in bytes, from the build-time `image-sizes.json`; undefined if it cannot be loaded. */
export async function countryImageBytes(countryId: string): Promise<number | undefined> {
  sizes ??= fetch(assetUrl('/image-sizes.json')).then((r) => (r.ok ? r.json() : Promise.reject(new Error('sizes'))))
  try {
    const table = await sizes
    return countryImagePaths(countryId).reduce((sum, p) => sum + (table[p.replace(/^\//, '')] ?? 0), 0)
  } catch {
    sizes = undefined
    return undefined
  }
}

function readSaved(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(SAVED_KEY) ?? '{}')
  } catch {
    return {}
  }
}

function writeSaved(saved: Record<string, number>) {
  try {
    localStorage.setItem(SAVED_KEY, JSON.stringify(saved))
  } catch {
    // Storage may be unavailable (private mode); the photos are still cached.
  }
}

/** Number of photos saved for the country, or 0 if it has not been saved. */
export function savedCount(countryId: string): number {
  return readSaved()[countryId] ?? 0
}

/** Downloads the country's photos into the image cache. Returns how many failed. */
export async function saveCountry(
  countryId: string,
  onProgress: (done: number, total: number) => void,
): Promise<number> {
  const urls = countryImagePaths(countryId).map(assetUrl)
  const cache = await caches.open(IMAGES)
  navigator.storage?.persist?.().catch(() => {})
  let done = 0
  let failed = 0
  const queue = [...urls]
  const worker = async () => {
    for (let url = queue.shift(); url; url = queue.shift()) {
      try {
        if (!(await cache.match(url))) {
          const response = await fetch(url)
          if (!response.ok) throw new Error(String(response.status))
          await cache.put(url, response)
        }
      } catch {
        failed += 1
      }
      done += 1
      onProgress(done, urls.length)
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker))
  if (failed === 0) writeSaved({ ...readSaved(), [countryId]: urls.length })
  return failed
}

/** Removes the country's photos, keeping any that another saved country also uses. */
export async function removeCountry(countryId: string) {
  const saved = readSaved()
  delete saved[countryId]
  const keep = new Set(Object.keys(saved).flatMap(countryImagePaths))
  const cache = await caches.open(IMAGES)
  await Promise.all(
    countryImagePaths(countryId)
      .filter((p) => !keep.has(p))
      .map((p) => cache.delete(assetUrl(p))),
  )
  writeSaved(saved)
}
