// Writes public/offline-images.json — every local photo shown for each country (its landmark, its cities'
// pictures and sights, and its places), which "save for offline" downloads. Kept out of the app bundle so the
// country screen does not have to load every city's places to list them. Runs before dev and build:
//   rolldown scripts/gen-offline-images.ts --file node_modules/.cache/gen-offline-images.mjs && node <that file>
import { writeFileSync } from 'node:fs'
import { countries } from '../src/data/countries'
import { cities } from '../src/data/cities'
import { places } from '../src/data/places'

const local = (p: string | undefined): p is string => !!p && !/^(https?:|data:)/i.test(p)
const images = Object.fromEntries(
  countries.map((country) => {
    const own = cities.filter((c) => c.countryId === country.id)
    const ids = new Set(own.map((c) => c.id))
    const paths = [
      country.landmarkImage,
      ...own.flatMap((c) => [c.signatureImage, ...c.highlights.map((h) => h.image)]),
      ...places.filter((p) => ids.has(p.cityId)).map((p) => p.image),
    ]
    return [country.id, [...new Set(paths.filter(local))]]
  }),
)
writeFileSync(new URL('../../public/offline-images.json', import.meta.url), JSON.stringify(images))
console.log(`offline-images.json: ${Object.values(images).flat().length} photos in ${countries.length} countries`)
