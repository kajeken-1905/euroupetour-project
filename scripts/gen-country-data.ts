// Writes, from cities.ts and places.ts:
//  - src/data/by-country/<id>.json — each country's cities (with their sights) and places, so the city screen
//    loads one country instead of all of them (src/data/countryData.ts). Not committed; rebuilt every time.
//  - public/offline-images.json — every local photo shown for each country (its landmark, its cities' pictures
//    and sights, its places and its football clubs' crests), which "save for offline" downloads.
// Runs before dev and build (places.ts uses extension-less imports, so it is bundled first):
//   rolldown scripts/gen-country-data.ts --file node_modules/.cache/gen-country-data.mjs && node <that file>
import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { countries } from '../src/data/countries'
import { cities } from '../src/data/cities'
import { places } from '../src/data/places'
import { FOOTBALL_CLUBS } from '../src/data/football'

const root = new URL('../../', import.meta.url)
const dir = new URL('src/data/by-country/', root)
rmSync(dir, { recursive: true, force: true })
mkdirSync(dir, { recursive: true })

const local = (p: string | undefined): p is string => !!p && !/^(https?:|data:)/i.test(p)
const images: Record<string, string[]> = {}
let written = 0
for (const country of countries) {
  const own = cities.filter((c) => c.countryId === country.id)
  const ids = new Set(own.map((c) => c.id))
  const order = places.flatMap((p, i) => (ids.has(p.cityId) ? [i] : []))
  const ownPlaces = order.map((i) => places[i])
  // `order` keeps each place's position in the full list, so lists rebuilt from several countries
  // (search, My trip) come out in the same order as before the split.
  writeFileSync(new URL(`${country.id}.json`, dir), JSON.stringify({ cities: own, places: ownPlaces, order }))
  written += own.length
  const paths = [
    country.landmarkImage,
    ...own.flatMap((c) => [c.signatureImage, ...c.highlights.map((h) => h.image)]),
    ...ownPlaces.map((p) => p.image),
    // Crests of the football clubs shown on the country's city pages.
    ...own.flatMap((c) => (FOOTBALL_CLUBS[c.id] ?? []).filter((club) => club.crest).map((club) => `/crests/${club.id.toLowerCase()}.png`)),
  ]
  images[country.id] = [...new Set(paths.filter(local))]
}
if (written !== cities.length) throw new Error(`${cities.length - written} cities belong to no country`)
writeFileSync(new URL('public/offline-images.json', root), JSON.stringify(images))
console.log(
  `by-country: ${readdirSync(dir).length} files, ${written} cities, ${places.length} places; ` +
    `offline-images.json: ${Object.values(images).flat().length} photos`,
)
