// Regions for the country list (2026-11-08, user's choice): the five common divisions of Europe — Western, Northern,
// Southern, Eastern and Southeastern Europe/Balkans — with Türkiye in the Balkans group and the Caucasus in Eastern
// Europe, then North Africa and the Middle East. 'mena' regions are drawn in the blue palette. Ids not yet in countries.ts are skipped, so the later
// North Africa & Middle East countries can be listed ahead of time.
export interface CountryRegion {
  id: string
  title: { ko: string; en: string }
  mena?: boolean
  countryIds: string[]
}

export const countryRegions: CountryRegion[] = [
  { id: 'west', title: { ko: '서유럽', en: 'Western Europe' }, countryIds: ['fr', 'de', 'nl', 'be', 'ch', 'at', 'lu', 'mc', 'li'] },
  { id: 'north', title: { ko: '북유럽', en: 'Northern Europe' }, countryIds: ['uk', 'ie', 'im', 'je', 'gg', 'no', 'se', 'dk', 'fi', 'is', 'fo', 'gl', 'ee', 'lv', 'lt'] },
  { id: 'south', title: { ko: '남유럽', en: 'Southern Europe' }, countryIds: ['it', 'es', 'pt', 'gr', 'hr', 'va', 'sm', 'ad', 'mt', 'cy', 'xc', 'gi'] },
  { id: 'east', title: { ko: '동유럽', en: 'Eastern Europe' }, countryIds: ['ua', 'pl', 'ro', 'cz', 'hu', 'by', 'bg', 'sk', 'md', 'ru', 'ge', 'am', 'az'] },
  { id: 'balkans', title: { ko: '남동유럽·발칸반도', en: 'Southeastern Europe & the Balkans' }, countryIds: ['rs', 'ba', 'al', 'mk', 'si', 'me', 'xk', 'tr'] },
  { id: 'nafrica', title: { ko: '북아프리카', en: 'North Africa' }, mena: true, countryIds: ['ma', 'tn', 'dz', 'eg', 'ly'] },
  { id: 'mideast', title: { ko: '중동', en: 'Middle East' }, mena: true, countryIds: ['il', 'jo', 'ae', 'qa', 'sa', 'kw'] },
]
