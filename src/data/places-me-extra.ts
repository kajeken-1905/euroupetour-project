import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMEExtra: Place[] = [
  // —— kotor ——
  place('kotor-fine_dining-1', 'kotor', 'fine_dining', 'Galion', 'Njegoseva, 85339 Kotor, Montenegro', '마리나 너머 구시가가 보이는 바닷가 해산물 레스토랑. 겨울에는 대개 문을 닫습니다.', 'Waterfront seafood restaurant looking across the marina to the old town; usually closed in winter.'),
  place('kotor-fine_dining-2', 'kotor', 'fine_dining', 'Konoba Scala Santa', 'Stari Grad 295, Kotor', '1931년 문을 연 코토르에서 가장 오래된 식당. 17세기 저택의 돌 아치 1층에서 해산물을 냅니다.', 'Kotor\'s oldest restaurant, opened in 1931, serving seafood in the stone-vaulted ground floor of a 17th-century palazzo.'),
  place('kotor-fine_dining-3', 'kotor', 'fine_dining', 'Konoba Cesarica', 'Stari Grad 375, Kotor', '구시가 조용한 골목의 해산물 식당. 생선과 홍합 요리를 냅니다.', 'Seafood restaurant on a quiet old-town lane, serving fish and mussels.'),

  place('kotor-bakery-2', 'kotor', 'bakery', 'Senso Bakery', 'Old Town 360, Kotor', '구시가의 4석짜리 작은 가족 카페. 피스타치오 크림 크루아상이 유명합니다.', 'Tiny four-seat family café in the old town, known for croissants with pistachio cream.'),
  place('kotor-bakery-3', 'kotor', 'bakery', 'Patisserie by Wine House', 'Stari Grad 488, Kotor', '구시가 좁은 골목 옆의 작은 파티세리. 크루아상과 직접 구운 타르트·케이크를 냅니다.', 'Small patisserie by one of the old town\'s narrowest lanes, with croissants and home-baked tarts and cakes.'),

  place('kotor-cafe-1', 'kotor', 'cafe', 'CAVE Coffee Specialty', 'TC Kamelija, Trg Mata Petrovića, 85330 Kotor, Montenegro', '카멜리야 쇼핑센터의 스페셜티 커피 키오스크. 플랫화이트가 호평을 받고 현금만 받는다는 후기가 있습니다.', 'Specialty coffee kiosk in the Kamelija shopping centre; the flat white is praised, and reviews say cash only.'),
  place('kotor-cafe-2', 'kotor', 'cafe', 'Forza Cafe', 'Armory square, 85330 Kotor, Montenegro', '구시가 가장 큰 광장의 카페. 진열장 가득한 케이크와 크렘슈니테가 인기입니다.', 'Café on the old town\'s biggest square, known for its large cake display and kremšnita.'),

  // —— budva ——
  place('budva-fine_dining-1', 'budva', 'fine_dining', 'Rivijera Restaurant', '16 Njegoševa, Budva', '구시가의 몬테네그로 전통 요리 식당. 소고기 스튜와 수제 파스타가 추천됩니다.', 'Old Town restaurant serving traditional Montenegrin food; the beef stew with homemade pasta is recommended.'),
  place('budva-fine_dining-2', 'budva', 'fine_dining', 'Jadran', 'Slovenska obala, 85310 Budva, Montenegro', '40년 넘은 해변 해산물 레스토랑. 스베티 니콜라 섬이 보이고 그날 잡은 생선을 골라 먹습니다.', 'Waterfront seafood restaurant of over 40 years facing Sveti Nikola island; pick your fish from the day\'s catch.', { image: '/places/budva-fine_dining-2.jpg' }),
  place('budva-fine_dining-5', 'budva', 'fine_dining', 'Piano Nobile', '7 Cara Dušana, Budva', '구시가의 야외 좌석 레스토랑. 버거와 파스타가 인기입니다.', 'Old Town restaurant with outdoor seating, popular for burgers and pasta.'),
  place('budva-cafe-1', 'budva', 'cafe', 'Monteco Cafe', 'The Old Bakery Residences, 85310 Budva, Montenegro', '올드 베이커리 레지던스 1층의 코워킹 겸 카페. 평일에만 엽니다.', 'Coworking space and café on the first floor of the Old Bakery Residences; open weekdays only.'),
  place('budva-cafe-2', 'budva', 'cafe', 'Caffe Fiorino Budva', '20 Stjepana Mitrova Ljubiše, Budva', '구시가의 작은 카페. 치즈케이크와 밀크셰이크가 인기이고 그늘진 자리가 있습니다.', 'Small Old Town café popular for cheesecakes and milkshakes, with a shaded corner.'),
  place('budva-cafe-3', 'budva', 'cafe', 'North Coffee Shop', 'Stefan Mitrov Ljubiša, 85313 Budva, Montenegro', '구시가 한가운데의 아늑한 커피숍. 고양이가 살고 플랫화이트가 인기입니다.', 'Cosy coffee shop in the heart of the Old Town with a resident cat; the flat white is popular.'),
  place('budva-cafe-4', 'budva', 'cafe', 'Akacia Coffee Budva', '36 Blaža Jovanovića, Budva', '직접 원두를 볶는 스페셜티 커피숍 겸 브런치 카페. 목요일은 쉽니다.', 'Specialty coffee roastery and brunch café; closed Thursdays.'),
  place('budva-korean-1', 'budva', 'korean', 'Korean Food Montenegro', 'Ulica 13. Jula 4, Budva', '부드바의 한식당. 비빔밥이 가장 호평을 받습니다.', 'Korean restaurant in Budva; the bibimbap gets the best reviews.'),

  // —— podgorica ——
  place('podgorica-fine_dining-1', 'podgorica', 'fine_dining', 'Konoba \'Lanterna\' Podgorica', 'Kralja Nikole 36, Podgorica', '1630년에 지은 옛 가옥 안의 레스토랑. 화덕 피자와 지역 요리를 내고 일요일엔 음악 공연이 열립니다.', 'Restaurant in a house dating from 1630, with stone-oven pizza and local dishes; music on Sundays.'),
  place('podgorica-fine_dining-2', 'podgorica', 'fine_dining', 'Pod Volat', 'Trg Vojvode Bećira Osmanagića 1, Podgorica', '시계탑 옆 스타라 바로시의 오래된 전통 식당. 푸짐한 모둠 그릴이 유명합니다.', 'Long-running traditional restaurant by the Clock Tower in Stara Varoš, known for its huge mixed grill.'),
  place('podgorica-fine_dining-3', 'podgorica', 'fine_dining', 'SPAGO', 'Radoja Dakića 35, Podgorica', '이탈리아 레스토랑. 피자와 크럼블 디저트가 호평을 받습니다.', 'Italian restaurant praised for its pizza and crumble desserts.'),
  place('podgorica-fine_dining-4', 'podgorica', 'fine_dining', 'Diplomat Restoran', 'Miljana Vukova 7, Podgorica', '몬테네그로 특선과 국제 요리를 내는 레스토랑. 퍼프 페이스트리 스테이크가 인기입니다.', 'Restaurant serving Montenegrin specialities and international dishes; the steak in puff pastry is popular.'),
  place('podgorica-bakery-2', 'podgorica', 'bakery', 'Pekara BITE Bakery', 'Svetozara Markovića 31, Podgorica', '포드고리차의 동네 빵집.', 'Neighbourhood bakery in Podgorica.'),
  place('podgorica-cafe-1', 'podgorica', 'cafe', 'ZRNO', 'Rimski Trg 2, Podgorica', '로마 광장의 커피 바. 원두를 골라 마실 수 있고 실내외 자리가 넉넉합니다.', 'Coffee bar on Roman Square where you can pick your beans, with plenty of indoor and outdoor seating.'),

  // —— herceg-novi ——
  place('herceg-novi-fine_dining-1', 'herceg-novi', 'fine_dining', 'Konoba Feral', 'Vasa Ćukovića 4, Herceg Novi', '가족이 운영하는 구시가의 해산물 코노바. 생선 수프와 먹물 리소토가 인기입니다.', 'Family-run old-town seafood konoba; fish soup and black risotto are favourites.'),
  place('herceg-novi-fine_dining-2', 'herceg-novi', 'fine_dining', 'Amber restaurant', 'Mića Vavića bb, 85340 Herceg Novi, Montenegro', '토플라 강가의 300년 된 물레방앗간 건물에 있는 조지아 레스토랑. 하차푸리와 힌칼리가 인기입니다.', 'Georgian restaurant in a 300-year-old mill building by the river at Topla; khachapuri and khinkali are favourites.'),
  place('herceg-novi-fine_dining-3', 'herceg-novi', 'fine_dining', 'Tri Lipe', 'Stepenište Iva Andrića 28, Herceg Novi', '보리수 세 그루 그늘 아래 테라스가 있는 몬테네그로 전통 식당. 그릴 고기와 해산물이 대표입니다.', 'Traditional Montenegrin restaurant with a terrace shaded by three linden trees; grilled meat and seafood.'),
  place('herceg-novi-fine_dining-4', 'herceg-novi', 'fine_dining', 'Konoba Kruso Herceg Novi', 'Šetalište 5. Danica, 85340 Herceg Novi, Montenegro', '바닷가 산책로의 레스토랑 겸 카페·피자집. 해산물과 테라스 전망이 호평을 받습니다.', 'Seafront promenade restaurant, café and pizzeria, praised for seafood and terrace views.'),

  place('herceg-novi-bakery-1', 'herceg-novi', 'bakery', 'Peter\'s Pie & Coffee', 'Šetalište Pet Danica 18A, Herceg Novi', '바다 산책로의 작은 카페. 직접 만든 파이·수프·디저트와 채식 메뉴를 냅니다.', 'Small café on the seafront promenade with homemade pies, soups, desserts and vegetarian options.'),
  place('herceg-novi-cafe-2', 'herceg-novi', 'cafe', 'Do-Do Café', '36 Šetalište Pet Danica, Herceg Novi', '슈크베르 항구 산책로의 카페. 젤라토와 브런치, 스무디를 냅니다.', 'Café on the promenade by Škver harbour serving gelato, brunch and smoothies.'),
  place('herceg-novi-cafe-3', 'herceg-novi', 'cafe', 'FABRIKA COFFEE Herceg Novi', '13 Njegoševa, Herceg Novi', '구시가의 스페셜티 로스터리 카페. 목련 나무 아래 안뜰 자리가 있습니다.', 'Specialty roastery café in the old town with a courtyard under a big magnolia.'),
  place('herceg-novi-cafe-4', 'herceg-novi', 'cafe', 'Koffein Specialty coffee shop', '2 Stepeniste 28 oktobra, Herceg Novi', '니콜라 주르코비치 광장으로 오르는 계단의 스페셜티 커피숍. 니트로 커피도 있습니다.', 'Specialty coffee shop on the steps up to Nikola Đurković Square, with nitro coffee too.'),
  place('herceg-novi-cafe-5', 'herceg-novi', 'cafe', 'Coffee Novi', '106 Njegoševa, Herceg Novi', '필터 커피가 대표인 커피숍. 컵을 가져가면 10% 할인해 줍니다.', 'Coffee shop best known for filter coffee; 10% off if you bring your own cup.'),
]
