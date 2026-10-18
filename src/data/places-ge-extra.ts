import { place } from './placeFactory'
import type { Place } from '../types'

export const placesGEExtra: Place[] = [
  // —— tbilisi ——
  place('tbilisi-fine_dining-1', 'tbilisi', 'fine_dining', 'Maspindzelo', '7 Gorgasali St, Abanotubani, Tbilisi', '아바노투바니 유황 온천 옆 강변의 조지아 요리 식당. 힌칼리·므츠바디·오자후리를 냅니다.', 'Georgian restaurant on the embankment by the Abanotubani sulphur baths, serving khinkali, mtsvadi and ojakhuri.'),
  place('tbilisi-fine_dining-2', 'tbilisi', 'fine_dining', 'Culinarium Khasheria', '9/11 Samghebro St, Tbilisi', '테쿠나 가체칠라제 셰프의 현대 조지아 요리 식당. 2026년 아바노 거리에서 구시가 삼게브로 거리로 옮겼고 카시·힌칼리 수프가 대표입니다.', 'Chef Tekuna Gachechiladze’s modern Georgian restaurant, moved in 2026 from Abano Street to Samghebro Street in the old town; known for khashi and khinkali soup.'),
  place('tbilisi-fine_dining-3', 'tbilisi', 'fine_dining', 'Ethno Tsiskvili', '99 Akaki Beliashvili St, Tbilisi 0159', '디고미 지구의 민속 콘셉트 레스토랑. 2002년 문을 열었고 물레방아와 폭포가 있으며 저녁마다 조지아 민속춤·합창 공연을 합니다.', 'Ethnographic-style restaurant in Dighomi, open since 2002, built around a watermill and waterfall, with Georgian folk dance and polyphonic singing in the evenings.'),
  place('tbilisi-fine_dining-4', 'tbilisi', 'fine_dining', 'Pasanauri', '17 Nikoloz Baratashvili St, Tbilisi 0105', '바라타시빌리 거리의 힌칼리 식당. 24시간 영업하고 고기 힌칼리 ‘파사나우리 스페셜’과 채소 힌칼리가 있습니다.', 'Khinkali restaurant on Baratashvili Street, open 24 hours, with the meaty ‘Pasanauri special’ and vegetable versions.'),
  place('tbilisi-bakery-2', 'tbilisi', 'bakery', 'Caravanserai Bakery', '13/40 Sioni St, Tbilisi', '구시가 시오니 거리 지하의 빵집. 간판이 없고, 점토 화덕 벽에 붙여 굽는 토니스 푸리를 바로 꺼내 팝니다.', 'Unsigned basement bakery on Sioni Street in the old town, selling tonis puri peeled straight off the wall of a clay oven.'),
  place('tbilisi-korean-1', 'tbilisi', 'korean', 'Seoul', '7 Budapeshti St, Tbilisi 0160', '바케-사부르탈로 지구 부다페스트 거리의 한식당. 돌솥비빔밥·삼겹살·떡볶이·김밥을 냅니다.', 'Korean restaurant on Budapest Street in Vake-Saburtalo serving stone-pot bibimbap, samgyeopsal, tteokbokki and kimbap.'),

  // —— batumi ——
  place('batumi-fine_dining-1', 'batumi', 'fine_dining', 'Lurji Sufra', '33 Akhmed Melashvili St, Batumi', '조지아 요리 식당. 양고기 차나히·므차디·하르초·하차푸리를 냅니다.', 'Georgian restaurant serving lamb chanakhi, mchadi, kharcho and khachapuri.'),
  place('batumi-fine_dining-2', 'batumi', 'fine_dining', 'Heart of Batumi', '11 Giorgi Mazniashvili St, Batumi 6010', '테라스가 있는 소박한 조지아 요리 식당. 구운 가지·송아지 샤슬릭·하차푸리를 냅니다.', 'Down-to-earth Georgian restaurant with a terrace, serving baked aubergine, veal shashlik and khachapuri.'),
  place('batumi-fine_dining-3', 'batumi', 'fine_dining', 'Sazandari', '78 Zurab Gorgiladze St, Batumi', '고르길라제 거리의 조지아 요리 식당. 큰 나무 테이블이 놓인 어두운 실내입니다.', 'Georgian restaurant on Zurab Gorgiladze Street with a dim interior and big wooden tables.'),
  place('batumi-bakery-1', 'batumi', 'bakery', 'Dona Bakeshop & Cafe', '41 Vakhtang Gorgasali St, Batumi 6010, Georgia', '작은 디저트 카페 겸 베이커리. 나폴레옹 케이크·바클라바가 인기이고 계산 후 자리에 앉는 방식입니다.', 'Small dessert café and bakery known for napoleon cake and baklava; you pay at the counter before sitting down.'),
  place('batumi-cafe-1', 'batumi', 'cafe', 'Rhino Coffee', '4a Khariton Akhvlediani St, Batumi 6004, Georgia', '하리톤 아흐블레디아니 거리의 스페셜티 커피 카페. 오래 앉아 있기 좋고 오후 늦게 문을 엽니다.', 'Specialty coffee café on Khariton Akhvlediani Street, good for long stays; opens in the late afternoon.'),

  // —— kutaisi ——
  place('kutaisi-fine_dining-1', 'kutaisi', 'fine_dining', 'Sisters Restaurant', '35 Zakaria Paliashvili St, Kutaisi', '조지아·유럽 요리 식당. 엘라르지 등 조지아 요리를 내고 야외석과 라이브 음악이 있습니다. 오후 2시에 문을 엽니다.', 'Georgian and European restaurant serving elarji and other Georgian dishes, with outdoor seating and live music; opens at 2 pm.'),
  place('kutaisi-fine_dining-2', 'kutaisi', 'fine_dining', 'Georgian Cuisine Magnolia', 'Galaktion Tabidze Street 1, 4600 Kutaisi, Georgia', '리오니강 옆 갈락티온 타비제 동상 근처 호텔 마그놀리아의 조지아 요리 식당. 아자리아식 하차푸리가 인기입니다.', 'Georgian restaurant of Hotel Magnolia by the Galaktion Tabidze statue on the Rioni, known for its Adjarian khachapuri.'),
  place('kutaisi-bakery-2', 'kutaisi', 'bakery', 'Bakery Sanimusho', '16 Tamar Mepe St, Kutaisi', '타마르 메페 거리의 베이커리 겸 카페. 하차푸리·로비아니와 조지아식 샐러드, 꿀 케이크를 냅니다.', 'Bakery-café on Tamar Mepe Street serving khachapuri, lobiani, Georgian salads and honey cake.'),
  place('kutaisi-cafe-1', 'kutaisi', 'cafe', 'Cafe Neta', '13 Tamar Mepe St, Kutaisi', '타마르 메페 거리의 제과점 겸 카페. 컵케이크와 조지아식 토피 케이크, 짭짤한 페이스트리가 있습니다.', 'Pastry café on Tamar Mepe Street with cupcakes, Georgian toffee cake and savoury pastries.'),

  // —— stepantsminda ——
  place('stepantsminda-fine_dining-1', 'stepantsminda', 'fine_dining', 'Kazbegi Good Food', 'Aleksandre Kazbegi St, Stepantsminda 4700', '작은 조지아 가정식 식당. 하차푸리·양고기 케밥·양배추롤과 직접 담근 차차를 냅니다.', 'Small, homely Georgian restaurant serving khachapuri, lamb kebab, cabbage rolls and homemade chacha.'),
  place('stepantsminda-fine_dining-2', 'stepantsminda', 'fine_dining', 'Maisi - Restaurant in Kazbegi', 'Betlemi St, Stepantsminda', '베틀레미 거리 숙소 단지 옆의 조지아 요리 식당.', 'Georgian restaurant beside a lodge complex on Betlemi Street.'),

  // —— sighnaghi ——
  place('sighnaghi-fine_dining-1', 'sighnaghi', 'fine_dining', 'Restaurant Burji', 'Chavchavadze St. 9, Signagi 383210', '차브차바제 거리의 조지아 요리 식당. 바비큐(므츠바디)가 중심입니다.', 'Georgian restaurant on Chavchavadze Street focused on barbecue (mtsvadi).'),
  place('sighnaghi-fine_dining-3', 'sighnaghi', 'fine_dining', 'Restaurant Qiziki', '6 Sarajishvili St, Sighnaghi, Georgia', '사라지시빌리 거리의 조지아 요리 식당. 지역 식재료를 씁니다.', 'Georgian restaurant on Sarajishvili Street cooking with local produce.'),
  place('sighnaghi-fine_dining-4', 'sighnaghi', 'fine_dining', 'Balcony Sighnaghi', '21 Vakhtang Gorgasali St, Sighnaghi, Georgia', '바흐탕 고르가살리 거리의 조지아 요리 식당.', 'Georgian restaurant on Vakhtang Gorgasali Street.'),
  place('sighnaghi-cafe-2', 'sighnaghi', 'cafe', 'Cafe "Medea"', '3A Ketevan Tsamebuli St, Sighnaghi', '성벽 근처의 카페. 조지아 요리와 지역 와이너리 와인, 레드와인 아이스크림을 냅니다.', 'Café near the town walls serving Georgian dishes, local wines and red-wine ice cream.'),
]
