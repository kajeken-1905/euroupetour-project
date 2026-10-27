import { place } from './placeFactory'
import type { Place } from '../types'

export const placesXCExtra: Place[] = [
  // —— kyrenia ——
  place('kyrenia-fine_dining-1', 'kyrenia', 'fine_dining', "Niazi's", 'Kordonboyu Caddesi (opposite the Dome Hotel), Kyrenia', '돔 호텔 맞은편의 케밥·메제 레스토랑. 매일 점심부터 엽니다.', 'Kebab and meze restaurant opposite the Dome Hotel, open daily from lunchtime.'),
  place('kyrenia-cafe-1', 'kyrenia', 'cafe', 'Tezgah Cafe & Patisserie', 'Kemerli Konak Boutique Hotel, Dereboyu Sokak, Zeytinlik, Kyrenia', '제이틴리크 마을의 부티크 호텔 케메를리 코나크 안 카페. 키프로스식 아침과 디저트를 냅니다.', 'Café inside the Kemerli Konak boutique hotel in Zeytinlik village, serving Cypriot breakfasts and cakes.'),

  // —— north-nicosia ——
  place('north-nicosia-fine_dining-1', 'north-nicosia', 'fine_dining', 'Sedirhan', 'Büyük Han, North Nicosia', '뷔윅 한 안뜰의 식당. 튀르키예·키프로스 가정식을 냅니다.', 'Restaurant in the Büyük Han courtyard serving Turkish and Cypriot dishes.'),

  place('north-nicosia-cafe-1', 'north-nicosia', 'cafe', "Rüstem's Bookshop", 'Girne Caddesi (opposite the Evkaf building, near Sarayönü Square), North Nicosia', '1937년 문을 연, 섬에서 가장 오래된 서점 안의 카페. 2층에는 점심을 내는 작은 식당이 있습니다.', 'Café inside the island’s oldest working bookshop, opened in 1937, with a small lunch restaurant upstairs.'),

  // —— famagusta ——
  place('famagusta-fine_dining-1', 'famagusta', 'fine_dining', 'Aspava Restaurant & Bar', 'Liman Yolu Sokak (Walled City), Famagusta', '성벽 안 구시가의 튀르키예 식당. 숯불 고기 모둠과 메제가 대표 메뉴이고, 차림표가 없으니 값을 먼저 물어보세요.', 'Turkish restaurant inside the walls, known for its mixed grill board and meze; there is no printed menu, so ask prices when ordering.'),
  place('famagusta-bakery-1', 'famagusta', 'bakery', 'Petek Patisserie', 'Liman Yolu Sokak (opposite Desdemona Park), Famagusta', '1983년 문을 연 제과점. 케이크·로쿰·바클라바와 아이스크림을 팝니다.', 'Patisserie open since 1983, selling cakes, lokum, baklava and ice cream.'),
]
