// Regions for the country list (2026-11-08, user's choice): the five common divisions of Europe — Western, Northern,
// Southern, Eastern and Southeastern Europe/Balkans — with Türkiye in the Balkans group and the Caucasus in Eastern
// Europe, then North Africa and the Middle East. Within each region: neighbours together, west to east; Northern
// Cyprus, Ukraine and Belarus last (user, 2026-11-08). 'mena' regions are drawn in the blue palette. Ids not yet in countries.ts are skipped, so the later
// North Africa & Middle East countries can be listed ahead of time.
export interface CountryRegion {
  id: string
  title: { ko: string; en: string }
  mena?: boolean
  countryIds: string[]
}

export const countryRegions: CountryRegion[] = [
  { id: 'west', title: { ko: '서유럽', en: 'Western Europe' }, countryIds: ['fr', 'mc', 'de', 'nl', 'be', 'lu', 'ch', 'li', 'at'] },
  { id: 'north', title: { ko: '북유럽', en: 'Northern Europe' }, countryIds: ['uk', 'ie', 'im', 'je', 'gg', 'dk', 'no', 'se', 'fi', 'is', 'fo', 'gl', 'ee', 'lv', 'lt'] },
  { id: 'south', title: { ko: '남유럽', en: 'Southern Europe' }, countryIds: ['es', 'pt', 'ad', 'gi', 'it', 'va', 'sm', 'mt', 'hr', 'gr', 'cy', 'xc'] },
  { id: 'east', title: { ko: '동유럽', en: 'Eastern Europe' }, countryIds: ['pl', 'cz', 'sk', 'hu', 'ro', 'md', 'ge', 'am', 'az', 'ru', 'ua', 'by'] },
  { id: 'balkans', title: { ko: '남동유럽·발칸반도', en: 'Southeastern Europe & the Balkans' }, countryIds: ['si', 'ba', 'rs', 'me', 'xk', 'mk', 'al', 'bg', 'tr'] },
  { id: 'nafrica', title: { ko: '북아프리카', en: 'North Africa' }, mena: true, countryIds: ['ma', 'tn', 'dz', 'eg', 'ly'] },
  { id: 'mideast', title: { ko: '중동', en: 'Middle East' }, mena: true, countryIds: ['jo', 'qa', 'il', 'ae', 'sa', 'kw', 'ir', 'iq', 'ps', 'ye', 'om'] },
]
