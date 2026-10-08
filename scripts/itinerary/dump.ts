import { cities } from '../../src/data/cities'
import { getHighlightVisit } from '../../src/data/visit'
import { getCityItinerary } from '../../src/data/itinerary'

// Flat JSON of cities, highlights and itineraries for the route checks in this folder.
const out = cities.map((c) => ({
  id: c.id,
  country: c.countryId,
  ko: c.name.ko,
  en: c.name.en,
  lat: c.lat,
  lng: c.lng,
  itin: getCityItinerary(c.id),
  h: c.highlights.map((h) => {
    const v = getHighlightVisit(h.id)
    return { id: h.id, ko: h.name.ko, en: h.name.en, maps: h.mapsUrl, m: v?.minutes, c: v?.closed }
  }),
}))
console.log(JSON.stringify(out))
