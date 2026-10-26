import { place } from './placeFactory'
import type { Place } from '../types'

// Restaurants from the MICHELIN Guide's Jersey list (updated 27 March 2026) and their own websites.
export const placesJEExtra: Place[] = [
  // —— st-helier ——
  place('st-helier-fine_dining-1', 'st-helier', 'fine_dining', 'Bohemia', 'The Club Hotel & Spa, Green Street, St Helier JE2 4UH', '클럽 호텔 안의 미쉐린 1스타 레스토랑. 20년 가까이 별을 지켜 왔습니다.', 'One-Michelin-star restaurant in The Club Hotel, which has held its star for some twenty years.', { michelin: 'star1' }),
  place('st-helier-fine_dining-2', 'st-helier', 'fine_dining', 'Samphire', '7-11 Don Street, St Helier JE2 4TQ', '저지 식재료로 요리하는 레스토랑. 일·월요일은 쉽니다.', 'Restaurant cooking with Jersey produce; closed Sundays and Mondays.'),
  place('st-helier-fine_dining-3', 'st-helier', 'fine_dining', 'Tassili', 'Esplanade, St Helier JE2 3QA', '에스플러네이드의 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Restaurant on the Esplanade, listed in the MICHELIN Guide.'),

  // —— gorey ——
  place('gorey-fine_dining-1', 'gorey', 'fine_dining', 'Bass and Lobster', 'Gorey Coast Road, St Martin JE3 6EU', '고리 해안 도로의 비스트로식 해산물 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Bistro-style seafood restaurant on the Gorey coast road, listed in the MICHELIN Guide.'),
]
