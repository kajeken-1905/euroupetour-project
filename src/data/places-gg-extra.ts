import { place } from './placeFactory'
import type { Place } from '../types'

export const placesGGExtra: Place[] = [
  // —— st-peter-port ——
  place('st-peter-port-fine_dining-1', 'st-peter-port', 'fine_dining', 'Alba', '6-7 Market Street, St Peter Port GY1 1HE', '19세기 시장 건물(레 아르카드)의 장작 그릴 레스토랑. 2026년 미쉐린 빕 구르망을 받았습니다.', 'Wood-fired grill restaurant in the 19th-century Les Arcades market building; MICHELIN Bib Gourmand in 2026.', { michelin: 'bib' }),

  place('st-peter-port-cafe-1', 'st-peter-port', 'cafe', 'Mocca Coffee House', '21A Contrée Mansell, St Peter Port GY1 1HR', '옛 시가의 커피숍. 케이크와 페이스트리, 샌드위치를 냅니다.', 'Old-quarter coffee house with cakes, pastries and sandwiches.'),
  place('st-peter-port-cafe-2', 'st-peter-port', 'cafe', 'The Rooftop Cafe', "Creasey's, Smith Street, St Peter Port GY1 2JN", '크리시스 백화점 2층의 카페. 옥상 쪽으로 시내가 내려다보입니다.', "Café on the first floor of Creasey's store, with rooftop views over the town."),

  // —— sark (Sark Tourism eat & drink list; hotel websites) ——
  place('sark-fine_dining-1', 'sark', 'fine_dining', "Hugo's Restaurant & Bar", 'Dixcart Hotel, Sark GY10 1SD', '딕스카트 호텔 레스토랑. 섬에서 기른 고기·채소와 랍스터·가리비 같은 근해 해산물을 프랑스식으로 냅니다.', 'Dixcart Hotel restaurant cooking island-reared meat and vegetables and local lobster and scallops in a classic French style.'),
  place('sark-fine_dining-2', 'sark', 'fine_dining', 'Stocks Hotel Restaurant', 'Stocks Hotel, Sark GY10 1SD', '참나무 패널 방의 저녁 전용 레스토랑. 제철 메뉴로 하루 두 번 손님을 받아 예약이 꼭 필요합니다.', 'Evening-only restaurant in an oak-panelled room with a seasonal menu and two sittings a night; booking is essential.'),
  place('sark-cafe-1', 'sark', 'cafe', 'Bon Marin Cafe', 'Island Hall, Sark', '섬 한가운데 아일랜드 홀의 카페. 샌드위치와 화덕 피자, 아이스크림을 팝니다.', 'Café in the Island Hall at the centre of the island, with sandwiches, stone-baked pizza and ice cream.'),
  place('sark-cafe-2', 'sark', 'cafe', 'The Sark Yard', 'The Avenue, Sark', '애비뉴 거리의 야외 카페. 커피와 직접 구운 케이크, 게살 샌드위치를 냅니다.', 'Open-air café on the Avenue with coffee, home-baked cakes and crab sandwiches.'),
]
