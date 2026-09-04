import { place } from './placeFactory'
import type { Place } from '../types'

export const placesIEExtra: Place[] = [
  // —— dublin ——
  place('dublin-fine_dining-1', 'dublin', 'fine_dining', 'Chapter One', 4.8, '18-19 Parnell Square, Dublin', '미슐랭 2스타, 아일랜드·유럽산 최고급 식재료를 프랑스 기법으로 요리.', 'Two-Michelin-star restaurant using prime Irish and European ingredients with classical French technique.', { reviewCount: 5609 }),
  place('dublin-fine_dining-2', 'dublin', 'fine_dining', 'Restaurant Patrick Guilbaud', 4.5, '21 Upper Merrion Street, Dublin', '1996년부터 미슐랭 2스타를 유지해온 더블린 대표 파인 다이닝.', "Dublin's leading fine dining restaurant, holding two Michelin stars since 1996.", { reviewCount: 2320 }),
  place('dublin-fine_dining-3', 'dublin', 'fine_dining', 'Bastible', 4.6, '111 South Circular Road, Dublin D08 RW2K', '2022년 미슐랭 1스타를 받은 캐주얼한 분위기의 테이스팅 메뉴 레스토랑.', 'Relaxed, no-dress-code restaurant serving a tasting menu, awarded a Michelin star in 2022.'),
  place('dublin-fine_dining-4', 'dublin', 'fine_dining', 'Fallon & Byrne', 4.8, '11-17 Exchequer Street, Dublin 2', '아티장 식재료를 갖춘 푸드홀 겸 레스토랑.', 'Food hall and restaurant featuring artisan local and international produce.', { reviewCount: 127 }),
  place('dublin-fine_dining-5', 'dublin', 'fine_dining', 'The Winding Stair', 4.3, '40 Ormond Quay Lower, Dublin 1', '리피강과 하페니 다리 전망의 서점 위 레스토랑.', 'Restaurant above a bookshop with views of the River Liffey and Ha\'penny Bridge.', { reviewCount: 2788 }),
  place('dublin-bakery-1', 'dublin', 'bakery', 'Bread 41', 4.5, '41 Pearse Street, Dublin D02 H308', '사워도우와 크루아상으로 유명한 더블린의 인기 베이커리.', "Popular Dublin bakery known for its sourdough and croissants.", { reviewCount: 3989 }),
  place('dublin-bakery-2', 'dublin', 'bakery', 'Panem', 4.7, '21-22 Ormond Quay Lower, Dublin D01 AE95', '1996년부터 이어온 이탈리아·프랑스식 베이커리 카페.', 'Italian-French bakery café operating since 1996.', { reviewCount: 1195 }),
  place('dublin-bakery-3', 'dublin', 'bakery', 'The Cake Café', 4.3, '8 Pleasants Place, Dublin', '아늑한 안뜰 좌석으로 유명한 케이크·브런치 카페.', 'Cake and brunch café known for its charming courtyard seating.'),
  place('dublin-bakery-4', 'dublin', 'bakery', 'Flower & Bean', 4.9, '113 Cork Street, Dublin D08 YY40', '스페셜티 커피와 아르티장 베이커리, 가족 친화적인 분위기.', 'Specialty coffee and artisan bakery with a family-friendly atmosphere.'),
  place('dublin-cafe-1', 'dublin', 'cafe', '3fe Coffee', 3.8, '32/34 Lower Grand Canal Street, Dublin 2', '2009년부터 이어온 더블린의 스페셜티 커피 허브.', "Dublin's specialty coffee hub since 2009.", { reviewCount: 138 }),
  place('dublin-cafe-2', 'dublin', 'cafe', 'Kaph', 4.3, '31 Drury Street, Dublin 2', '그래프턴 스트리트 인근의 인기 스페셜티 커피숍.', 'Popular specialty coffee shop near Grafton Street.'),
  place('dublin-cafe-3', 'dublin', 'cafe', 'Bewley\'s', 3.8, '78-79 Grafton Street, Dublin D02 K033', '1927년 개업, 스테인드글라스로 유명한 역사적 카페.', 'Historic café since 1927, famous for its stained glass windows.', { reviewCount: 8928 }),
  place('dublin-cafe-4', 'dublin', 'cafe', 'Two Boys Brew', 4.6, '375 North Circular Road, Dublin', '멜버른식 브런치와 커피로 유명한 카페.', 'Café known for Melbourne-style brunch and coffee.'),
  place('dublin-korean-1', 'dublin', 'korean', 'Arisu', 4.5, '120 Capel St, Dublin D01 KC63', '더블린 최초의 한식 바비큐 전문점.', 'Dublin\'s first Korean BBQ restaurant.'),
  place('dublin-korean-2', 'dublin', 'korean', 'Kimchi Hophouse', 4.4, '160-161 Parnell St, Dublin D01 Y4A7', '더블린에서 가장 오래된 한식당, 전통 한식과 아이리시 펍을 결합.', "Dublin's oldest Korean restaurant, blending traditional Korean cuisine with an Irish pub.", { reviewCount: 1500 }),
  place('dublin-korean-3', 'dublin', 'korean', 'Korean Table', 4.7, '50a Manor Street, Stoneybatter, Dublin 7', '셰프 비비안 조가 이끄는 가정식 한식당, 해물파전으로 유명.', "Home-style Korean restaurant led by chef-owner Vivian Cho, known for its seafood pancake.", { reviewCount: 511 }),
  place('dublin-korean-4', 'dublin', 'korean', 'Dalang Korean Restaurant', 4.8, '65 Dame St, Dublin', '템플 바 인근의 한식당.', 'Korean restaurant near Temple Bar.', { reviewCount: 1570 }),

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
