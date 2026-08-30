import { place } from './placeFactory'
import type { Place } from '../types'

export const placesIEExtra: Place[] = [
  // —— dublin ——
  place('dublin-fine_dining-1', 'dublin', 'fine_dining', 'Chapter One', 4.7, 'Dublin', '미슐랭 아일랜드 코스.', 'Michelin Irish tasting.', { reviewCount: 1400 }),
  place('dublin-fine_dining-2', 'dublin', 'fine_dining', 'Restaurant Patrick Guilbaud', 4.6, 'Dublin', '클래식 파인 다이닝.', 'Classic fine dining.', { reviewCount: 1200 }),
  place('dublin-fine_dining-3', 'dublin', 'fine_dining', 'The Greenhouse', 4.5, 'Dublin', '모던 아일랜드.', 'Modern Irish.', { reviewCount: 1100 }),
  place('dublin-fine_dining-4', 'dublin', 'fine_dining', 'Fallon & Byrne', 4.4, 'Dublin', '마켓·다이닝.', 'Market dining.', { reviewCount: 2800 }),
  place('dublin-fine_dining-5', 'dublin', 'fine_dining', 'The Winding Stair', 4.4, 'Dublin', '리버뷰 아일랜드 요리.', 'River-view Irish cooking.', { reviewCount: 2100 }),
  place('dublin-bakery-1', 'dublin', 'bakery', 'Bread 41', 4.6, 'Dublin', '사워도우 베이커리.', 'Sourdough bakery.', { reviewCount: 2400 }),
  place('dublin-bakery-2', 'dublin', 'bakery', 'Joe\'s Bakery', 4.4, 'Dublin', '로컬 빵집.', 'Local bakery.', { reviewCount: 1200 }),
  place('dublin-bakery-3', 'dublin', 'bakery', 'The Cake Café', 4.4, 'Dublin', '케이크·브런치.', 'Cakes and brunch.', { reviewCount: 1800 }),
  place('dublin-bakery-4', 'dublin', 'bakery', 'Cornucopia bakery counter', 4.3, 'Dublin', '베이커리 카운터.', 'Bakery counter.', { reviewCount: 1600 }),
  place('dublin-cafe-1', 'dublin', 'cafe', '3fe Coffee', 4.6, 'Dublin', '스페셜티 로스터리.', 'Specialty roastery.', { reviewCount: 2800 }),
  place('dublin-cafe-2', 'dublin', 'cafe', 'Kaph', 4.5, 'Dublin', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1600 }),
  place('dublin-cafe-3', 'dublin', 'cafe', 'Bewley\'s', 4.3, 'Dublin', '클래식 카페.', 'Classic café.', { reviewCount: 6200 }),
  place('dublin-cafe-4', 'dublin', 'cafe', 'Two Boys Brew', 4.4, 'Dublin', '브런치 카페.', 'Brunch café.', { reviewCount: 1400 }),
  place('dublin-korean-1', 'dublin', 'korean', 'Arisu', 4.5, '120 Capel St, Dublin D01 KC63', '더블린 최초의 한식 바비큐 전문점.', 'Dublin\'s first Korean BBQ restaurant.'),

  // —— galway ——
  place('galway-fine_dining-1', 'galway', 'fine_dining', 'Ard Bia at Nimmo\'s', 4.6, 'Long Walk, Spanish Arch, Galway City', '코립강 전망의 대표 레스토랑.', 'Leading restaurant overlooking the River Corrib.'),
  place('galway-bakery-1', 'galway', 'bakery', 'Magpie Bakery', 4.6, 'Unit 12, The Cornstore, Galway H91 CC44, Ireland', '매일 매장에서 직접 사워도우 빵과 페이스트리를 만드는 골웨이의 베이커리', 'Galway bakery baking sourdough bread and pastries on-site daily'),
  place('galway-cafe-1', 'galway', 'cafe', 'C\'est la Vie Fabrique Boulangerie Café', 4.6, 'Galway, Ireland', '파리지앵 정통 불랑주리를 경험할 수 있는 골웨이의 프렌치 베이커리 카페', 'Galway French bakery café offering an authentic Parisian boulangerie experience'),

  // —— cork ——
  place('cork-fine_dining-1', 'cork', 'fine_dining', 'Market Lane Restaurant', 4.6, '5-6 Oliver Plunkett St, Cork City, T12 T959', '코크 시내 중심의 수상 경력 레스토랑.', 'Award-winning restaurant in central Cork.'),
  place('cork-bakery-1', 'cork', 'bakery', 'Ross Bakery & Café', 4.5, 'Magazine Rd, The Lough, Cork T12 VK61, Ireland', '합리적인 가격에 다양한 빵을 즐길 수 있는 코크의 인기 베이커리', 'Popular Cork bakery known for its delightful atmosphere and reasonable prices'),
  place('cork-cafe-1', 'cork', 'cafe', 'The Grumpy Bakers', 4.5, 'Cork, Ireland', '훌륭한 페이스트리와 커피로 유명한 코크의 아늑한 카페', 'Cozy Cork café known for delectable pastries and heavenly coffee'),

  // —— killarney ——
  place('killarney-fine_dining-1', 'killarney', 'fine_dining', 'Bricín Restaurant and Boxty House', 4.6, '26 High Street, Killarney, V93 EE61', '하이 스트리트의 정통 아일랜드 요리.', 'Traditional Irish cuisine on High Street.'),
  place('killarney-bakery-1', 'killarney', 'bakery', 'Killarney Bakery', 4.5, '19 Plunkett St, Killarney V93 K290, Co. Kerry, Ireland', '킬라니 최고로 꼽히는 전통 베이커리', 'Widely regarded as Killarney\'s best bakery'),
  place('killarney-cafe-1', 'killarney', 'cafe', 'Reidy\'s Cafe & Bakery', 4.5, 'Killarney, Co. Kerry, Ireland', '숙련된 바리스타의 스페셜티 커피와 매일 구운 페이스트리로 유명한 킬라니의 카페', 'Killarney café known for skilled-barista specialty coffee and daily-baked pastries'),

  // —— kilkenny ——
  place('kilkenny-fine_dining-1', 'kilkenny', 'fine_dining', 'The Arches', 4.5, '5 Gas House Ln, Kilkenny, R95 X092', '킬케니의 인기 레스토랑.', 'Popular restaurant in Kilkenny.'),
  place('kilkenny-bakery-1', 'kilkenny', 'bakery', 'Arán Artisan Bakery and Bistro', 4.6, '8 Barrack Street, Kilkenny R95 YF30, Ireland', '아일랜드 타임스 선정 최고의 점심 명소에 오른 킬케니의 아르티장 베이커리', 'Kilkenny artisan bakery named among Ireland\'s top lunch spots by the Irish Times'),
  place('kilkenny-cafe-1', 'kilkenny', 'cafe', 'The Pantry Country Kitchen', 4.4, 'Kieran Street, Kilkenny, Ireland', '직접 만드는 빵과 페이스트리로 유명한 킬케니 시내의 카페', 'Kilkenny city-center café known for freshly made breads and pastries'),

  // —— limerick ——
  place('limerick-fine_dining-1', 'limerick', 'fine_dining', 'Freddy\'s', 4.5, '100 O\'Connell St, Limerick, V94 XY0P', '리머릭의 활기찬 다이닝 명소.', 'A lively dining spot in Limerick.'),

  place('limerick-bakery-1', 'limerick', 'bakery', 'Bean a Tí Bakery & Cafe', 4.5, '1 Little Catherine Street, Limerick, Ireland', '1966년부터 이어온 리머릭의 가족 운영 베이커리', 'Family-run Limerick bakery baking since 1966'),
  place('limerick-cafe-1', 'limerick', 'cafe', 'Bowes Ryan Bakery & Cafe', 4.4, 'Arthurs Quay, Limerick, Ireland', '아서스 퀘이에 위치한 리머릭의 베이커리 카페', 'Limerick bakery café at Arthurs Quay'),
]
