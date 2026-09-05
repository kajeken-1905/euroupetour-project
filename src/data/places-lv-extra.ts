import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLVExtra: Place[] = [
  // —— riga ——
  place('riga-fine_dining-1', 'riga', 'fine_dining', 'Milda', 4.4, 'Kungu iela 8, LV-1050 Riga', '라트비아 펠메니·회색 완두콩 요리 등 전통 요리를 선보이는 미쉐린 빕 구르망 레스토랑.', 'Bib Gourmand restaurant serving Latvian classics like pelmeni and grey peas with bacon.'),
  place('riga-fine_dining-2', 'riga', 'fine_dining', 'Rozengrāls', 4.5, 'Rozena iela 1, LV-1050 Riga', '1293년부터 이어져 온 구시가지 지하 와인 저장고에서 즐기는 중세풍 라트비아 요리.', 'Medieval-themed Latvian restaurant in a historic Old Town wine cellar dating back to 1293.'),
  place('riga-fine_dining-3', 'riga', 'fine_dining', 'Zviedru Vārti', 4.5, 'Torņa iela 4-1a, LV-1050 Riga', '스웨덴 문 옆에 위치한 가족 운영 레스토랑, 정통 라트비아 가정식 요리 전문.', 'Family-run restaurant beside the Swedish Gate specializing in authentic Latvian home cooking.'),
  place('riga-fine_dining-4', 'riga', 'fine_dining', 'Salve', 4.2, 'Rātslaukums 5, LV-1050 Riga', '구시가지 시청 광장의 역사적 건물에서 전통 라트비아 요리를 현대적으로 재해석.', 'Modern take on traditional Latvian cuisine in a historic building on Riga\'s Town Hall Square.'),
  place('riga-fine_dining-5', 'riga', 'fine_dining', 'LIDO Alus Sēta', 4.4, 'Krāmu iela 2, LV-1050 Riga', '구시가지의 인기 셀프서비스 라트비아 전통 음식점, 훈제고기·양배추롤 등 판매.', 'Popular self-service Latvian canteen in the Old Town serving smoked meats, cabbage rolls, and more.'),

  place('riga-bakery-1', 'riga', 'bakery', 'Mīkla', 4.4, 'Dzirnavu iela 42, LV-1010 Riga', '스웨덴·일본에서 수련한 베이커가 운영하는 사워도우·카다멈 번 전문 베이커리.', 'Bakery known for sourdough bread and cardamom buns, run by a baker trained in Sweden and Japan.'),
  place('riga-bakery-2', 'riga', 'bakery', 'Mārtiņa Beķereja', 4.3, 'Brīvības iela 80, LV-1011 Riga', '라트비아에서 가장 오래된 제과점 체인, 계피번 등 합리적인 가격의 전통 페이스트리 판매.', 'Latvia\'s oldest confectionery chain, offering traditional pastries like cinnamon buns at affordable prices.'),
  place('riga-bakery-3', 'riga', 'bakery', 'Kūkotava', 4.1, 'Tērbatas iela 12-1, LV-1011 Riga', '리가 중심가의 아늑한 베이커리 카페, 케이크·에클레어·전통 라트비아 디저트 판매.', 'Cozy bakery-café in central Riga offering cakes, éclairs, and traditional Latvian sweets.'),

  place('riga-cafe-1', 'riga', 'cafe', 'Rocket Bean Roastery', 4.6, 'Miera iela 29/31, LV-1013 Riga', '2015년 설립된 리가의 대표 스페셜티 커피 로스터리.', 'Riga\'s flagship specialty coffee roastery, established in 2015.'),
  place('riga-cafe-2', 'riga', 'cafe', 'STRADA Coffee Bar', 4.5, 'Jāņa iela 5, LV-1050 Riga', '구시가지 가장 오래된 거리에 위치한 스페셜티 커피·차 전문 카페.', 'Specialty coffee and tea café on Old Town\'s oldest street.'),
  place('riga-cafe-3', 'riga', 'cafe', 'MiiT Coffee', 4.3, 'Lāčplēša iela 10, LV-1010 Riga', '자전거 공방에서 출발한 채식·비건 친화적 스페셜티 커피 카페.', 'Vegetarian and vegan-friendly specialty coffee café that started out as a bicycle workshop.'),

  place('riga-korean-1', 'riga', 'korean', 'Soraksans', 4.4, 'Miesnieku iela 12, LV-1050 Riga', '구시가지에 위치한 리가의 대표 한식당, 비빔밥·바비큐 메뉴로 인기.', 'Riga\'s go-to Korean restaurant in the Old Town, popular for its bibimbap and BBQ dishes.'),

  // —— jurmala ——
  place('jurmala-fine_dining-1', 'jurmala', 'fine_dining', '36.Line Grill Restaurant', 4.4, 'Baznīcas iela 2B, LV-2015 Jūrmala', '해변 바로 옆에 위치한 유르말라 1위 레스토랑, 시푸드·지중해 요리 전문(미쉐린 가이드 등재).', 'Jūrmala\'s top-rated beachfront restaurant specializing in seafood and Mediterranean cuisine (listed in the Michelin Guide).'),
  place('jurmala-fine_dining-2', 'jurmala', 'fine_dining', 'KinzaHouse', 4.6, 'Baznīcas iela 2/3, Jūrmala', '많은 리뷰를 받은 유르말라의 조지아 요리 레스토랑.', 'Georgian restaurant in Jūrmala with a large number of reviews.', { reviewCount: 4215 }),
  place('jurmala-fine_dining-3', 'jurmala', 'fine_dining', 'Majorenhoff', 4.4, 'Jomas iela 42, Jūrmala', '요마스 거리의 인기 레스토랑.', 'Popular restaurant on Jomas Street.', { reviewCount: 1572 }),
  place('jurmala-fine_dining-4', 'jurmala', 'fine_dining', 'HOUSE OF LIGHT', 4.5, 'Jomas iela 63, Jūrmala', '요마스 거리의 인기 레스토랑.', 'Popular restaurant on Jomas Street.', { reviewCount: 2139 }),
  place('jurmala-fine_dining-5', 'jurmala', 'fine_dining', 'Dukāts', 4.4, 'Baznīcas iela 12/14, Jūrmala', '많은 리뷰를 받은 유르말라의 비스트로.', 'Bistro in Jūrmala with a large number of reviews.', { reviewCount: 1832 }),
  place('jurmala-bakery-1', 'jurmala', 'bakery', 'Kalnakrastu Rausu fabrika', 4.5, 'Vienibas prospekts 35, Jūrmala, Latvia', '유르말라 최고의 케이크로 꼽히는 인기 베이커리', 'Jūrmala\'s top-ranked bakery, known for its excellent cakes'),
  place('jurmala-bakery-2', 'jurmala', 'bakery', 'Bitīte', 4.7, 'Jomas iela 63, Jūrmala', '많은 리뷰를 받은 유르말라의 제과점.', 'Bakery in Jūrmala with a large number of reviews.', { reviewCount: 1440 }),
  place('jurmala-bakery-3', 'jurmala', 'bakery', 'The Loaf', 4.5, 'Jomas iela 37, Jūrmala', '요마스 거리의 제과점.', 'Bakery on Jomas Street.', { reviewCount: 19 }),
  place('jurmala-cafe-1', 'jurmala', 'cafe', 'Madam Brioš', 4.5, 'Mellužu prospekts 9, Jūrmala LV-2008, Latvia', '프랑스식 정취가 물씬 풍기는 유르말라의 노변 카페 겸 베이커리', 'Roadside café and bakery in Jūrmala capturing French culinary charm'),
  place('jurmala-cafe-2', 'jurmala', 'cafe', 'Simply Beach House', 4.5, 'Pilsoņu iela 1, Majori, Jūrmala', '많은 리뷰를 받은 유르말라 해변가의 커피숍.', 'Beachfront coffee shop in Jūrmala with a large number of reviews.', { reviewCount: 960 }),
  place('jurmala-cafe-3', 'jurmala', 'cafe', 'Kafijas stūrītis', 4.5, 'Bulduru prospekts 35, Jūrmala', '많은 리뷰를 받은 유르말라의 카페.', 'Café in Jūrmala with a large number of reviews.', { reviewCount: 863 }),
  place('jurmala-cafe-4', 'jurmala', 'cafe', 'Atmosphere Cafe Bulduri', 4.5, 'Vienības prospekts, Bulduri, Jūrmala', '불두리 지구의 카페.', 'Café in the Bulduri district.', { reviewCount: 384 }),
  place('jurmala-cafe-5', 'jurmala', 'cafe', 'MT Caffe', 4.9, 'Jomas iela 58-k-3, Jūrmala', '높은 평점의 유르말라 카페.', 'Highly rated café in Jūrmala.', { reviewCount: 56 }),

  // —— sigulda ——
  place('sigulda-fine_dining-1', 'sigulda', 'fine_dining', 'Pasēdnīca', 4.5, 'Raiņa iela 2-3, LV-2150 Sigulda', '합리적인 가격의 로컬 요리.', 'Local cuisine at reasonable prices.'),
  place('sigulda-fine_dining-2', 'sigulda', 'fine_dining', 'Kungu rija, restorāns', 4.7, 'Kungu rija, Sigulda', '많은 리뷰를 받은 시굴다의 레스토랑.', 'Restaurant in Sigulda with a large number of reviews.', { reviewCount: 1861 }),
  place('sigulda-fine_dining-3', 'sigulda', 'fine_dining', 'Hotel Sigulda restaurant', 4.6, 'Pils iela 6, Sigulda', '시굴다의 호텔 레스토랑.', 'Hotel restaurant in Sigulda.', { reviewCount: 131 }),
  place('sigulda-fine_dining-4', 'sigulda', 'fine_dining', 'Bazārs', 4.8, 'Ausekļa iela 7b, Sigulda', '높은 평점의 시굴다 뷔페 레스토랑.', 'Highly rated buffet restaurant in Sigulda.', { reviewCount: 183 }),
  place('sigulda-fine_dining-5', 'sigulda', 'fine_dining', 'Kazene', 4.5, 'Pils iela 4b, Sigulda', '시굴다의 레스토랑.', 'Restaurant in Sigulda.', { reviewCount: 108 }),

  place('sigulda-bakery-1', 'sigulda', 'bakery', 'GUSTAVbeķereja', 5.0, 'Krišjāņa Valdemāra iela 2, Sigulda, LV-2150', '신선한 머핀으로 유명한 시굴다의 베이커리', 'Sigulda bakery known for its fresh and delicious muffins'),
  place('sigulda-bakery-2', 'sigulda', 'bakery', 'Sucre, kafejnīca', 4.9, 'Rūdolfa Blaumaņa iela 2, Sigulda', '만점에 가까운 평점의 시굴다 베이커리.', 'Near-perfectly rated bakery in Sigulda.', { reviewCount: 372 }),
  place('sigulda-cafe-1', 'sigulda', 'cafe', 'Doma cafe', 4.5, 'L. Paegles iela 15a, Sigulda, Latvia', '아늑한 안뜰과 훌륭한 커피로 유명한 시굴다의 카페', 'Sigulda café known for its cozy courtyard and excellent coffee'),
  place('sigulda-cafe-2', 'sigulda', 'cafe', 'Mr. Biskvits', 4.7, 'Ausekļa iela 9, Sigulda', '많은 리뷰를 받은 시굴다의 카페.', 'Café in Sigulda with a large number of reviews.', { reviewCount: 2137 }),
  place('sigulda-cafe-3', 'sigulda', 'cafe', 'Complex Cathouse (Kaķu Māja)', 4.5, 'Pils iela 8, Sigulda', '고양이 테마의 시굴다 카페.', 'Cat-themed café in Sigulda.', { reviewCount: 2126 }),
  place('sigulda-cafe-4', 'sigulda', 'cafe', 'Eklers', 4.6, 'Pils iela 1, Sigulda', '많은 리뷰를 받은 시굴다의 카페.', 'Café in Sigulda with a large number of reviews.', { reviewCount: 947 }),
  place('sigulda-cafe-5', 'sigulda', 'cafe', 'Pie Vītoliem', 4.7, 'Pils iela 1-A, Sigulda', '높은 평점의 시굴다 카페.', 'Highly rated café in Sigulda.', { reviewCount: 348 }),
]
