// Travel regions for the country list (2026-11-08, user-approved): countries often visited together, roughly west to
// east. 'mena' regions are drawn in the blue palette. Ids not yet in countries.ts are skipped, so the later
// North Africa & Middle East countries can be listed ahead of time.
export interface CountryRegion {
  id: string
  title: { ko: string; en: string }
  mena?: boolean
  countryIds: string[]
}

export const countryRegions: CountryRegion[] = [
  { id: 'west', title: { ko: '서유럽', en: 'Western Europe' }, countryIds: ['fr', 'mc', 'be', 'nl', 'lu'] },
  { id: 'british', title: { ko: '영국·아일랜드', en: 'Britain & Ireland' }, countryIds: ['uk', 'ie', 'im', 'je', 'gg'] },
  { id: 'iberia', title: { ko: '이베리아반도', en: 'Iberia' }, countryIds: ['es', 'pt', 'ad', 'gi'] },
  { id: 'italy', title: { ko: '이탈리아·몰타', en: 'Italy & Malta' }, countryIds: ['it', 'va', 'sm', 'mt'] },
  { id: 'central', title: { ko: '중부 유럽', en: 'Central Europe' }, countryIds: ['de', 'ch', 'li', 'at', 'cz', 'sk', 'hu', 'pl'] },
  { id: 'nordic', title: { ko: '북유럽', en: 'Nordic countries' }, countryIds: ['dk', 'se', 'no', 'fi', 'is', 'fo', 'gl'] },
  { id: 'baltic', title: { ko: '발트 3국', en: 'Baltic states' }, countryIds: ['ee', 'lv', 'lt'] },
  { id: 'balkans', title: { ko: '발칸반도', en: 'The Balkans' }, countryIds: ['si', 'hr', 'ba', 'me', 'rs', 'xk', 'mk', 'al', 'bg', 'ro'] },
  { id: 'eastmed', title: { ko: '동지중해', en: 'Eastern Mediterranean' }, countryIds: ['gr', 'cy', 'xc', 'tr'] },
  { id: 'caucasus', title: { ko: '코카서스', en: 'The Caucasus' }, countryIds: ['ge', 'am', 'az'] },
  { id: 'east', title: { ko: '동유럽', en: 'Eastern Europe' }, countryIds: ['ua', 'md', 'by', 'ru'] },
  { id: 'nafrica', title: { ko: '북아프리카', en: 'North Africa' }, mena: true, countryIds: ['ma', 'tn', 'dz', 'eg', 'ly'] },
  { id: 'mideast', title: { ko: '중동', en: 'Middle East' }, mena: true, countryIds: ['il', 'jo', 'ae', 'qa', 'sa', 'kw'] },
]
