import { place } from './placeFactory'
import type { Place } from '../types'

export const placesGGExtra: Place[] = [
  // —— st-peter-port ——
  place('st-peter-port-fine_dining-1', 'st-peter-port', 'fine_dining', 'Alba', '6-7 Market Street, St Peter Port GY1 1HE', '19세기 시장 건물(레 아르카드)의 장작 그릴 레스토랑. 2026년 미쉐린 빕 구르망을 받았습니다.', 'Wood-fired grill restaurant in the 19th-century Les Arcades market building; MICHELIN Bib Gourmand in 2026.', { michelin: 'bib' }),

  place('st-peter-port-cafe-1', 'st-peter-port', 'cafe', 'Mocca Coffee House', '21A Contrée Mansell, St Peter Port GY1 1HR', '옛 시가의 커피숍. 케이크와 페이스트리, 샌드위치를 냅니다.', 'Old-quarter coffee house with cakes, pastries and sandwiches.'),
  place('st-peter-port-cafe-2', 'st-peter-port', 'cafe', 'The Rooftop Cafe', "Creasey's, Smith Street, St Peter Port GY1 2JN", '크리시스 백화점 2층의 카페. 옥상 쪽으로 시내가 내려다보입니다.', "Café on the first floor of Creasey's store, with rooftop views over the town."),
]
