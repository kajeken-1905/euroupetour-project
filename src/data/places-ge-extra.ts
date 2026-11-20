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

  // —— stepantsminda: bakeries and cafés (2026-11-04) ——
  place('stepantsminda-bakery-1', 'stepantsminda', 'bakery', 'Cafe Green Corner', 'Tergdaleulebi St 6g, Stepantsminda 4700', '마을의 빵집 겸 카페.', 'Village bakery and café.'),

  // —— mtskheta: restaurants, bakeries and cafés (2026-11-20) ——
  place('mtskheta-fine_dining-1', 'mtskheta', 'fine_dining', 'Street Garden Mtskheta', '55 Arsukidze St, Mtskheta', '스베티츠호벨리 대성당 앞 거리의 조지아 요리 식당. 구글 지도 평점 4.7.', 'Georgian restaurant on the street by Svetitskhoveli Cathedral. Rated 4.7 on Google Maps.'),
  place('mtskheta-fine_dining-2', 'mtskheta', 'fine_dining', 'Sasperia Restaurant', '3 Sanapiro St, Mtskheta', '강변길의 조지아 요리 식당. 구글 지도 평점 4.7.', 'Georgian restaurant on the riverside street. Rated 4.7 on Google Maps.'),
  place('mtskheta-fine_dining-3', 'mtskheta', 'fine_dining', 'Armazis Kheoba', '1 Armazi St, Mtskheta', '아라그비 강가 아르마지의 조지아 요리 식당. 구글 지도 평점 4.5.', 'Georgian restaurant at Armazi by the Aragvi river. Rated 4.5 on Google Maps.'),
  place('mtskheta-cafe-1', 'mtskheta', 'cafe', 'Café So Vida', '23 Arsukidze St, Mtskheta', '대성당 앞 거리의 커피숍. 구글 지도 평점 4.6.', 'Coffee shop on the street by the cathedral. Rated 4.6 on Google Maps.'),
  place('mtskheta-cafe-2', 'mtskheta', 'cafe', 'Cafe Bagineti on the river', '5 Sanapiro St, Mtskheta', '강가 강변길의 카페. 구글 지도 평점 4.6.', 'Café on the riverside street. Rated 4.6 on Google Maps.'),

  // —— gori: restaurants, bakeries and cafés (2026-11-20) ——
  place('gori-fine_dining-1', 'gori', 'fine_dining', 'Shin da Gori', '1 Rusudan Korkadze St, Gori', '시내의 조지아 요리 식당. 구글 지도 평점 4.4.', 'Georgian restaurant in town. Rated 4.4 on Google Maps.'),
  place('gori-fine_dining-2', 'gori', 'fine_dining', 'Joseph', '11 Stalin Ave, Gori', '스탈린 대로의 조지아 요리 식당. 구글 지도 평점 4.4.', 'Georgian restaurant on Stalin Avenue. Rated 4.4 on Google Maps.'),
  place('gori-bakery-1', 'gori', 'bakery', 'Kasradzeebi', '2 Grigol Robakidze St, Gori', '과자·페이스트리 가게. 구글 지도 평점 4.9.', 'Pastry shop. Rated 4.9 on Google Maps.'),
  place('gori-cafe-1', 'gori', 'cafe', 'Eto\'s Cake House', '73 Petre Bagrationi St, Gori', '케이크를 내는 카페. 구글 지도 평점 4.8.', 'Café serving cakes. Rated 4.8 on Google Maps.'),

  // —— telavi: restaurants, bakeries and cafés (2026-11-20) ——
  place('telavi-fine_dining-1', 'telavi', 'fine_dining', 'Doli', '11 Cholokashvili St, Telavi', '시내 중심의 조지아 요리 식당. 구글 지도 평점 4.7.', 'Georgian restaurant in the centre. Rated 4.7 on Google Maps.'),
  place('telavi-fine_dining-2', 'telavi', 'fine_dining', 'Badia', '13 Teimuraz Bagrationi St, Telavi', '조지아 요리 식당. 구글 지도 평점 4.7.', 'Georgian restaurant. Rated 4.7 on Google Maps.'),
  place('telavi-fine_dining-3', 'telavi', 'fine_dining', 'VinoOdor Telavi', '2 Bakhtrioni St, Telavi', '카헤티 와인을 곁들이는 조지아 요리 식당. 구글 지도 평점 4.7.', 'Georgian restaurant with Kakheti wines. Rated 4.7 on Google Maps.'),
  place('telavi-fine_dining-4', 'telavi', 'fine_dining', 'HB Telavi', '56a Ilia Chavchavadze St, Telavi', '조지아 요리 식당. 구글 지도 평점 4.8.', 'Georgian restaurant. Rated 4.8 on Google Maps.'),
  place('telavi-cafe-1', 'telavi', 'cafe', 'Cafe Gisheri', '2 Nadikvari St, Telavi', '나디크바리 공원 가는 길의 디저트 카페. 구글 지도 평점 4.5.', 'Dessert café on the way to Nadikvari park. Rated 4.5 on Google Maps.'),

  // —— akhaltsikhe: restaurants, bakeries and cafés (2026-11-20) ——
  place('akhaltsikhe-fine_dining-1', 'akhaltsikhe', 'fine_dining', 'Darani Georgian Cuisine', '4-6 Tamar Mepe St, Akhaltsikhe', '조지아 요리 식당. 구글 지도 평점 4.8.', 'Georgian restaurant. Rated 4.8 on Google Maps.'),
  place('akhaltsikhe-fine_dining-2', 'akhaltsikhe', 'fine_dining', 'Old Bar-Restaurant', '3 Kostava St, Akhaltsikhe', '시내의 조지아 요리 식당. 구글 지도 평점 4.7.', 'Georgian restaurant in town. Rated 4.7 on Google Maps.'),
  place('akhaltsikhe-fine_dining-3', 'akhaltsikhe', 'fine_dining', 'Restaurant Millennium Rabati', '98 Eqvtime Atoneli St, Akhaltsikhe', '라바티 성 가까이의 조지아 요리 식당. 구글 지도 평점 4.8.', 'Georgian restaurant near Rabati Castle. Rated 4.8 on Google Maps.'),
  place('akhaltsikhe-bakery-1', 'akhaltsikhe', 'bakery', 'SL Company (Cake and Pizza House)', '61 Kostava St, Akhaltsikhe', '케이크와 피자를 굽는 빵집. 구글 지도 평점 4.6.', 'Bakery for cakes and pizza. Rated 4.6 on Google Maps.'),

  // —— borjomi: restaurants, bakeries and cafés (2026-11-20) ——
  place('borjomi-fine_dining-1', 'borjomi', 'fine_dining', 'Dimitri\'s Wine Cellar and Restaurant', '40 9 April St, Borjomi', '와인 저장고를 겸한 조지아 요리 식당. 구글 지도 평점 4.7.', 'Georgian restaurant with a wine cellar. Rated 4.7 on Google Maps.'),
  place('borjomi-fine_dining-2', 'borjomi', 'fine_dining', 'Ambari', '20 Shota Rustaveli St, Borjomi', '조지아 요리 식당. 구글 지도 평점 4.7.', 'Georgian restaurant. Rated 4.7 on Google Maps.'),
  place('borjomi-fine_dining-3', 'borjomi', 'fine_dining', 'Cafe & Restaurant De Novo', '2 Kostava St, Borjomi', '공원역 옆의 조지아 요리 식당. 구글 지도 평점 4.6.', 'Georgian restaurant by the Park station. Rated 4.6 on Google Maps.'),
  place('borjomi-cafe-1', 'borjomi', 'cafe', 'Café Iggy', '1 Kostava St, Borjomi', '중앙공원 입구 근처의 카페 겸 식당. 구글 지도 평점 4.6.', 'Café-restaurant near the Central Park entrance. Rated 4.6 on Google Maps.'),
  place('borjomi-cafe-2', 'borjomi', 'cafe', 'Inka Café', '2 9 April St, Borjomi', '시내 중심의 카페. 구글 지도 평점 4.5.', 'Café in the centre. Rated 4.5 on Google Maps.'),

  // —— zugdidi: restaurants, bakeries and cafés (2026-11-20) ——
  place('zugdidi-fine_dining-1', 'zugdidi', 'fine_dining', 'Restaurant Tavaduri', '2 Lev Tolstoy St, Zugdidi', '조지아 요리 식당. 구글 지도 평점 4.7.', 'Georgian restaurant. Rated 4.7 on Google Maps.'),
  place('zugdidi-fine_dining-2', 'zugdidi', 'fine_dining', 'Folk House', '28 Tamar Mepe St, Zugdidi', '조지아 요리 식당. 구글 지도 평점 4.9.', 'Georgian restaurant. Rated 4.9 on Google Maps.'),
  place('zugdidi-fine_dining-3', 'zugdidi', 'fine_dining', 'Panama Restaurant', '12 Tavisupleba St, Zugdidi', '시내 식당. 구글 지도 평점 4.9.', 'Restaurant in town. Rated 4.9 on Google Maps.'),
  place('zugdidi-bakery-1', 'zugdidi', 'bakery', 'Tamtini Bakery and Cafe', '87a Rustaveli St, Zugdidi', '루스타벨리 거리의 빵집 겸 카페. 구글 지도 평점 4.6.', 'Bakery-café on Rustaveli Street. Rated 4.6 on Google Maps.'),
  place('zugdidi-cafe-1', 'zugdidi', 'cafe', 'Cafeteria Miel', '79a Rustaveli St, Zugdidi', '루스타벨리 거리의 카페. 구글 지도 평점 5.0.', 'Café on Rustaveli Street. Rated 5.0 on Google Maps.'),

  // —— mestia: restaurants, bakeries and cafés (2026-11-20) ——
  place('mestia-fine_dining-1', 'mestia', 'fine_dining', 'Café Laila', '7 Seti Square, Mestia', '세티 광장의 조지아 요리 식당. 구글 지도 평점 4.4.', 'Georgian restaurant on Seti Square. Rated 4.4 on Google Maps.'),
  place('mestia-fine_dining-2', 'mestia', 'fine_dining', 'Blue Mountains', '26 Tamar Mepe St, Mestia', '조지아 요리 식당. 구글 지도 평점 4.5.', 'Georgian restaurant. Rated 4.5 on Google Maps.'),
  place('mestia-fine_dining-3', 'mestia', 'fine_dining', 'Terrace Tower', '27 Tamar Mepe St, Mestia', '테라스가 있는 조지아 요리 식당. 구글 지도 평점 4.5.', 'Georgian restaurant with a terrace. Rated 4.5 on Google Maps.'),
  place('mestia-cafe-1', 'mestia', 'cafe', 'Coffee Kor', '8 Seti Square, Mestia', '세티 광장의 커피숍. 구글 지도 평점 4.7.', 'Coffee shop on Seti Square. Rated 4.7 on Google Maps.'),
  place('mestia-cafe-2', 'mestia', 'cafe', 'Cafe Blooms', '3 Agmashenebeli St, Mestia', '카페. 구글 지도 평점 4.8.', 'Café. Rated 4.8 on Google Maps.'),

  // —— tbilisi: restaurants, bakeries and cafés (2026-11-20) ——
  place('tbilisi-cafe-1', 'tbilisi', 'cafe', 'Shavi Coffee Roasters', '40 Mikheil Zandukeli St, Tbilisi', '직접 볶는 스페셜티 커피 로스터리 카페. 구글 지도 평점 4.7.', 'Specialty coffee roaster\'s café. Rated 4.7 on Google Maps.'),
  place('tbilisi-cafe-2', 'tbilisi', 'cafe', 'Sali Coffee', '30 Anton Katalikosi St, Tbilisi', '커피숍. 구글 지도 평점 4.8.', 'Coffee shop. Rated 4.8 on Google Maps.'),
  place('tbilisi-cafe-3', 'tbilisi', 'cafe', 'Tsvari Roasters', '64 Egnate Ninoshvili St, Tbilisi', '스페셜티 커피 로스터리 카페. 구글 지도 평점 4.9.', 'Specialty coffee roaster\'s café. Rated 4.9 on Google Maps.'),
]
