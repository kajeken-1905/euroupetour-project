import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLVExtra: Place[] = [
  // —— riga ——
  place('riga-fine_dining-1', 'riga', 'fine_dining', 'Milda', 'Grēcinieku iela 26, LV-1050 Riga', '구시가지의 라트비아 전통 요리 식당. 미쉐린 가이드에 실려 있고 월요일은 쉽니다.', 'Traditional Latvian restaurant in the old town, listed in the Michelin Guide; closed Mondays.', { image: '/places/riga-fine_dining-1.jpg' }),
  place('riga-fine_dining-2', 'riga', 'fine_dining', 'Rozengrāls', 'Rozena iela 1, LV-1050 Riga', '1293년부터 이어져 온 구시가지 지하 와인 저장고에서 즐기는 중세풍 라트비아 요리.', 'Medieval-themed Latvian restaurant in a historic Old Town wine cellar dating back to 1293.', { image: '/places/riga-fine_dining-2.jpg' }),
  place('riga-fine_dining-3', 'riga', 'fine_dining', 'Zviedru Vārti', 'Torņa iela 4-1a, LV-1050 Riga', '스웨덴 문 근처 지하 식당의 라트비아 가정식 레스토랑. 회색 완두콩·감자전이 인기입니다.', 'Latvian home-cooking restaurant in a cellar near the Swedish Gate; grey peas and potato pancakes are favourites.'),
  place('riga-fine_dining-4', 'riga', 'fine_dining', 'Salve', 'Rātslaukums 5, LV-1050 Riga', '시청 광장의 라트비아 전통 레스토랑. 맥주 수프와 단지 고기 요리를 냅니다.', 'Traditional Latvian restaurant on Town Hall Square, serving beer soup and meat in pots.'),
  place('riga-fine_dining-5', 'riga', 'fine_dining', 'LIDO Alus Sēta', 'Tirgoņu iela 6, LV-1050 Riga', '훈제 고기·양배추롤 등을 고르는 구시가의 셀프서비스 라트비아 식당.', 'Self-service Latvian canteen in the Old Town with smoked meats and cabbage rolls.'),

  place('riga-bakery-1', 'riga', 'bakery', 'Mīkla', 'Dzirnavu iela 42, LV-1010 Riga', '사워도우 빵과 카다멈 번·크루아상으로 알려진 작은 빵집.', 'Small bakery known for sourdough bread, cardamom buns and croissants.'),
  place('riga-bakery-2', 'riga', 'bakery', 'Mārtiņa Beķereja', 'Brīvības iela 80, LV-1011 Riga', '리가에서 오래된 빵집 체인의 지점. 저렴한 라트비아 전통 페이스트리를 냅니다.', 'Branch of a long-running Riga bakery chain with cheap traditional Latvian pastries.'),
  place('riga-bakery-3', 'riga', 'bakery', 'Kūkotava', 'Tērbatas iela 12-1, LV-1011 Riga', '리가 중심가의 카페 겸 빵집. 브라우니·케이크·페이스트리를 냅니다.', 'Central Riga café-bakery with brownies, cakes and pastries.'),

  place('riga-cafe-1', 'riga', 'cafe', 'Rocket Bean Roastery', 'Miera iela 29/31, LV-1013 Riga', '옛 양말 공장 건물의 로스터리 카페. 싱글 오리진 필터 커피와 브런치를 냅니다.', 'Roastery café in an old sock factory, serving single-origin filter coffee and brunch.'),
  place('riga-cafe-2', 'riga', 'cafe', 'STRADA Coffee Bar', 'Jāņa iela 5, LV-1050 Riga', '성 베드로 성당 근처 구시가의 작은 커피 바. 여름 테라스가 있습니다.', 'Small Old Town coffee bar near St Peter\'s Church, with a summer terrace.'),
  place('riga-cafe-3', 'riga', 'cafe', 'MiiT Coffee', 'Lāčplēša iela 10, LV-1010 Riga', '자전거 공방에서 시작한 채식·비건 카페. 스페셜티 커피를 냅니다.', 'Vegetarian and vegan café that began as a bicycle workshop, serving specialty coffee.'),

  place('riga-korean-1', 'riga', 'korean', 'Soraksans', 'Miesnieku iela 12, LV-1050 Riga', '구시가의 한식당. 비빔밥과 바비큐가 있습니다.', 'Korean restaurant in the Old Town with bibimbap and barbecue.'),

  // —— jurmala ——
  place('jurmala-fine_dining-1', 'jurmala', 'fine_dining', '36.Line Grill Restaurant', 'Baznīcas iela 2B, LV-2015 Jūrmala', '두불티 해변의 숯불 요리 레스토랑. 셰프 라우리스 알렉세예우스가 이끌고 미쉐린 가이드에 실렸습니다.', 'Charcoal-grill restaurant on the Dubulti seafront led by chef Lauris Aleksejevs, listed in the MICHELIN Guide.'),
  place('jurmala-fine_dining-2', 'jurmala', 'fine_dining', 'KinzaHouse', 'Baznīcas iela 2/3, Jūrmala', '캅카스 출신 요리사가 장작 그릴로 요리하는 조지아·캅카스 레스토랑. 힌칼리와 하차푸리가 인기입니다.', 'Georgian and Caucasian restaurant with a wood grill run by Caucasian cooks; khinkali and khachapuri are favourites.'),
  place('jurmala-fine_dining-3', 'jurmala', 'fine_dining', 'Majorenhoff', 'Jomas iela 42, Jūrmala', '요마스 거리의 레스토랑. 이탈리아·유럽 요리를 내고 거리가 보이는 여름 테라스가 있습니다.', 'Jomas Street restaurant serving Italian and European dishes, with a summer terrace over the street.', { image: '/places/jurmala-fine_dining-3.jpg' }),
  place('jurmala-fine_dining-4', 'jurmala', 'fine_dining', 'HOUSE OF LIGHT', 'Jomas iela, Majori, Jūrmala', '요마스 거리의 그릴 바. 샤슬릭과 와인 리스트가 인기입니다.', 'Grill bar on Jomas Street, known for shashlik and its wine list.'),
  place('jurmala-fine_dining-5', 'jurmala', 'fine_dining', 'Dukāts', 'Baznīcas iela 12/14, Jūrmala', '30년 된 가족 운영 비스트로. 직접 굽는 페이스트리와 저렴한 점심을 냅니다.', 'Family-run bistro of some 30 years, with its own bakery and cheap lunches.'),
  place('jurmala-bakery-2', 'jurmala', 'bakery', 'Bitīte', 'Jomas iela 63, Jūrmala LV-2015', '마요리 해변 근처의 가족 운영 카페·제과점. 매일 페이스트리와 케이크를 굽습니다.', 'Family-run café and patisserie near the beach in Majori, baking pastries and cakes daily.'),
  place('jurmala-cafe-1', 'jurmala', 'cafe', 'Madam Brioš', 'Mellužu prospekts 9, Jūrmala LV-2008, Latvia', '멜루지의 프랑스식 빵집 겸 카페. 페이스트리와 프랑스 가정식을 내고 요리 교실도 엽니다.', 'French bakery-café in Melluži with pastries and French home cooking; also runs cooking classes.'),
  place('jurmala-cafe-2', 'jurmala', 'cafe', 'Simply Beach House', 'Pilsoņu iela 1, Majori, Jūrmala', '마요리 해변 바로 앞의 카페. 노을 전망이 좋고 겨울에도 엽니다.', 'Café right on Majori beach with sunset views, open in winter too.'),
  place('jurmala-cafe-3', 'jurmala', 'cafe', 'Kafijas stūrītis', 'Bulduru prospekts 35, Jūrmala', '해변에서 150m 거리의 불두리 동네 카페. 직접 만든 디저트와 \'베츠리가\' 케이크를 냅니다.', 'Neighbourhood café in Bulduri, 150 m from the beach, with homemade desserts including Vecrīga cake.'),
  place('jurmala-cafe-5', 'jurmala', 'cafe', 'MT Caffe', 'Jomas iela 58-k-3, Jūrmala', '요마스 거리가 내다보이는 카페 겸 바. 라트비아에서 볶은 커피를 내고 월·화요일은 쉽니다.', 'Café-bar overlooking Jomas Street with Latvian-roasted coffee; closed Mondays and Tuesdays.'),

  // —— sigulda ——
  place('sigulda-fine_dining-2', 'sigulda', 'fine_dining', 'Kungu rija, restorāns', 'Kungu rija, Turaida, Krimuldas pagasts, LV-2150 Siguldas novads, Latvia', '투라이다 박물관 보호구역에서 700m 떨어진 통나무 건물의 시골풍 레스토랑. 훈제 메기·사슴고기 등 라트비아 요리를 냅니다.', 'Country-style restaurant in a log building 700 m from Turaida Museum Reserve, serving Latvian dishes like smoked catfish and venison.'),
  place('sigulda-fine_dining-3', 'sigulda', 'fine_dining', 'Hotel Sigulda restaurant', 'Pils iela 6, Sigulda', '1889년 지은 호텔 시굴다의 레스토랑. 유럽 요리를 내고 여름엔 공원이 보이는 테라스가 열립니다.', 'Restaurant of Hotel Sigulda, built in 1889, serving European dishes with a park-view summer terrace.'),

  place('sigulda-bakery-1', 'sigulda', 'bakery', 'GUSTAVbeķereja', 'Strēlnieku iela 2, Sigulda, LV-2150', '시굴다 중심가의 빵집 체인 지점. 매일 굽는 페이스트리를 냅니다.', 'Sigulda branch of a bakery chain, with pastries baked fresh daily.'),
  place('sigulda-cafe-1', 'sigulda', 'cafe', 'Doma cafe', 'Leona Paegles iela 15A, Sigulda, LV-2150', '정원과 야외 테라스가 있는 가족 운영 카페. 버거·와플을 내고 월요일은 쉽니다.', 'Family-run café with a garden and terrace, serving burgers and waffles; closed Mondays.'),
  place('sigulda-cafe-2', 'sigulda', 'cafe', 'Mr. Biskvits', 'Ausekļa iela 9, Sigulda', '2012년 찻집으로 시작한 카페 겸 제과점. 시나몬롤이 인기입니다.', 'Café and pastry shop that began as a tea room in 2012; the cinnamon rolls are popular.'),
  place('sigulda-cafe-3', 'sigulda', 'cafe', 'Complex Cathouse (Kaķu Māja)', 'Pils iela 8, Sigulda', '구트마니스 동굴 무늬로 꾸민 비스트로. 라트비아 가정식을 고르는 방식이고 아침마다 빵을 굽습니다.', 'Bistro decorated with Gūtmanis Cave motifs, serving pick-your-own Latvian home cooking, with pastries baked each morning.'),
  place('sigulda-cafe-4', 'sigulda', 'cafe', 'Eklers', 'Pils iela 1, Sigulda', '에클레어와 케이크, 팬케이크를 내는 빵집 겸 카페. 라트비아 꿀 케이크도 있습니다.', 'Bakery-café with éclairs, cakes and pancakes, plus Latvian honey cake.'),

  // —— cesis: restaurants, bakeries and cafés (2026-11-14) ——
  place('cesis-fine_dining-1', 'cesis', 'fine_dining', 'H.E. Vanadziņš', 'Rīgas iela 15, Cēsis', '체시스의 미쉐린 빕 구르망 모던 유러피언 식당입니다.', 'MICHELIN Bib Gourmand modern european restaurant in Cēsis.', { michelin: 'bib' }),
  place('cesis-fine_dining-2', 'cesis', 'fine_dining', 'Kest', 'Valmieras iela 1, Cēsis', '미쉐린 가이드에 선정된 체시스의 모던 유러피언 식당입니다.', 'Listed in the MICHELIN Guide: modern european restaurant in Cēsis.'),
  place('cesis-fine_dining-3', 'cesis', 'fine_dining', 'Jāņoga', 'Valmieras iela 21a, Cēsis', '체시스의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Cēsis. Rated 4.6 on Google Maps.'),
  place('cesis-fine_dining-4', 'cesis', 'fine_dining', 'Mala', 'Lenču iela 11, Cēsis', '체시스의 카페 겸 식당. 구글 지도 평점 4.7.', 'Café restaurant in Cēsis. Rated 4.7 on Google Maps.'),
  place('cesis-fine_dining-5', 'cesis', 'fine_dining', 'Pasēdnīca', 'Raunas iela 15, Cēsis', '체시스의 비스트로. 구글 지도 평점 4.5.', 'Bistro in Cēsis. Rated 4.5 on Google Maps.'),
  place('cesis-bakery-1', 'cesis', 'bakery', 'Cēsu Maize', 'Rīgas iela 18, Cēsis', '체시스의 빵집. 구글 지도 평점 4.8.', 'Bakery in Cēsis. Rated 4.8 on Google Maps.'),
  place('cesis-bakery-2', 'cesis', 'bakery', 'Vinetas un Allas Kārumlāde', 'Rīgas iela 12, Cēsis', '체시스의 디저트 카페. 구글 지도 평점 4.7.', 'Dessert café in Cēsis. Rated 4.7 on Google Maps.'),
  place('cesis-cafe-1', 'cesis', 'cafe', 'Cafe SEZONA', 'Rīgas iela 11, Cēsis', '체시스의 커피숍. 구글 지도 평점 4.7.', 'Coffee shop in Cēsis. Rated 4.7 on Google Maps.'),
  place('cesis-cafe-2', 'cesis', 'cafe', 'Pagrabiņš', 'Vienības laukums 1, Cēsis', '체시스의 카페. 구글 지도 평점 4.4.', 'Café in Cēsis. Rated 4.4 on Google Maps.'),
  place('cesis-cafe-3', 'cesis', 'cafe', 'Cafe 7 Bar', 'Rīgas iela 7, Cēsis', '체시스의 커피숍. 구글 지도 평점 4.7.', 'Coffee shop in Cēsis. Rated 4.7 on Google Maps.'),

  // —— kuldiga: restaurants, bakeries and cafés (2026-11-14) ——
  place('kuldiga-fine_dining-1', 'kuldiga', 'fine_dining', 'DUNA - taproom & kitchen', 'Kaļķu iela 14, Kuldīga', '미쉐린 가이드에 선정된 쿨디가의 수제 맥주 탭룸 겸 식당입니다.', 'Listed in the MICHELIN Guide: craft-beer taproom and kitchen in Kuldīga.'),
  place('kuldiga-fine_dining-2', 'kuldiga', 'fine_dining', 'Goldingen Room', 'Baznīcas iela 2, Kuldīga', '쿨디가의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Kuldīga. Rated 4.5 on Google Maps.'),
  place('kuldiga-fine_dining-3', 'kuldiga', 'fine_dining', 'Pagrabiņš', 'Baznīcas iela 5, Kuldīga', '쿨디가의 레스토랑. 구글 지도 평점 4.4.', 'Restaurant in Kuldīga. Rated 4.4 on Google Maps.'),
  place('kuldiga-fine_dining-4', 'kuldiga', 'fine_dining', 'Kursas Zeme', 'Baznīcas iela 6, Kuldīga', '쿨디가의 모던 유러피언 식당. 구글 지도 평점 4.5.', 'Modern European restaurant in Kuldīga. Rated 4.5 on Google Maps.'),
  place('kuldiga-bakery-1', 'kuldiga', 'bakery', 'Pī Cafe', 'Liepājas iela 46, Kuldīga', '쿨디가의 빵집 겸 카페. 구글 지도 평점 4.8.', 'Bakery and café in Kuldīga. Rated 4.8 on Google Maps.'),
  place('kuldiga-bakery-2', 'kuldiga', 'bakery', 'Celms maize', 'Liepājas iela 23, Kuldīga', '쿨디가의 빵집. 구글 지도 평점 4.9.', 'Bakery in Kuldīga. Rated 4.9 on Google Maps.'),
  place('kuldiga-cafe-1', 'kuldiga', 'cafe', 'The Marmalade', 'Pasta iela 5, Kuldīga', '쿨디가의 카페. 구글 지도 평점 4.9.', 'Café in Kuldīga. Rated 4.9 on Google Maps.'),
  place('kuldiga-cafe-2', 'kuldiga', 'cafe', 'Riverside', 'Stendes iela 2, Kuldīga', '쿨디가의 커피숍. 구글 지도 평점 4.6.', 'Coffee shop in Kuldīga. Rated 4.6 on Google Maps.'),
  place('kuldiga-cafe-3', 'kuldiga', 'cafe', 'Pagalms', 'Dzirnavu iela 11, Kuldīga', '쿨디가의 커피숍. 구글 지도 평점 4.8.', 'Coffee shop in Kuldīga. Rated 4.8 on Google Maps.'),

  // —— liepaja: restaurants, bakeries and cafés (2026-11-14) ——
  place('liepaja-fine_dining-1', 'liepaja', 'fine_dining', 'MO', 'Friča Brīvzemnieka iela 7, Liepāja', '미쉐린 가이드에 선정된 리예파야의 라트비아 전통 요리 식당입니다.', 'Listed in the MICHELIN Guide: traditional latvian restaurant in Liepāja.'),
  place('liepaja-fine_dining-2', 'liepaja', 'fine_dining', 'Hot Potato', 'Lielā iela 3, Liepāja', '리예파야의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Liepāja. Rated 4.6 on Google Maps.'),
  place('liepaja-fine_dining-3', 'liepaja', 'fine_dining', 'Shafran', 'Vecā ostmala 29, Liepāja', '리예파야의 아제르바이잔 요리 식당. 구글 지도 평점 4.7.', 'Azerbaijani restaurant in Liepāja. Rated 4.7 on Google Maps.'),
  place('liepaja-fine_dining-4', 'liepaja', 'fine_dining', 'Teika', 'Lielā iela 7, Liepāja', '리예파야의 모던 유러피언 식당. 구글 지도 평점 4.7.', 'Modern European restaurant in Liepāja. Rated 4.7 on Google Maps.'),
  place('liepaja-fine_dining-5', 'liepaja', 'fine_dining', 'Piano', 'Vecā ostmala 40, Liepāja', '리예파야의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Liepāja. Rated 4.5 on Google Maps.'),
  place('liepaja-bakery-1', 'liepaja', 'bakery', 'Boulangerie', 'Kuršu iela 2, Liepāja', '리예파야의 빵집 겸 카페. 구글 지도 평점 4.4.', 'Bakery and café in Liepāja. Rated 4.4 on Google Maps.'),
  place('liepaja-bakery-2', 'liepaja', 'bakery', 'ROMA Beķereja', 'Zivju iela 3, Liepāja', '리예파야의 빵집. 구글 지도 평점 4.6.', 'Bakery in Liepāja. Rated 4.6 on Google Maps.'),
  place('liepaja-bakery-3', 'liepaja', 'bakery', 'Miko, Konditorija', 'Brīvības iela 9, Liepāja', '리예파야의 제과점. 구글 지도 평점 4.6.', 'Pâtisserie in Liepāja. Rated 4.6 on Google Maps.'),
  place('liepaja-cafe-1', 'liepaja', 'cafe', 'Kafejnīca Darbnīca', 'Lielā iela 8, Liepāja', '리예파야의 카페. 구글 지도 평점 4.7.', 'Café in Liepāja. Rated 4.7 on Google Maps.'),
  place('liepaja-cafe-2', 'liepaja', 'cafe', 'Papus Liepāja', 'Jūrmalas parks 7, Liepāja', '리예파야의 공원 카페. 구글 지도 평점 4.7.', 'Park café in Liepāja. Rated 4.7 on Google Maps.'),
  place('liepaja-cafe-3', 'liepaja', 'cafe', 'Vējš Cafe', 'Graudu iela 45-1, Liepāja', '리예파야의 커피숍. 구글 지도 평점 4.7.', 'Coffee shop in Liepāja. Rated 4.7 on Google Maps.'),

  // —— ventspils: restaurants, bakeries and cafés (2026-11-14) ——
  place('ventspils-fine_dining-1', 'ventspils', 'fine_dining', 'VINDAVA Cafe', 'Pils iela 25, Ventspils', '벤츠필스의 카페 겸 식당. 구글 지도 평점 4.9.', 'Café restaurant in Ventspils. Rated 4.9 on Google Maps.'),
  place('ventspils-fine_dining-2', 'ventspils', 'fine_dining', 'Skroderkrogs', 'Skroderu iela 6, Ventspils', '벤츠필스의 옛 선술집 분위기의 식당. 구글 지도 평점 4.7.', 'Tavern-style restaurant in Ventspils. Rated 4.7 on Google Maps.'),
  place('ventspils-fine_dining-3', 'ventspils', 'fine_dining', 'Café Dzintarjūra', 'Ganību iela 26, Ventspils', '벤츠필스의 피자 가게. 구글 지도 평점 4.7.', 'Pizzeria in Ventspils. Rated 4.7 on Google Maps.'),
  place('ventspils-fine_dining-4', 'ventspils', 'fine_dining', 'Ērmanītis', 'Saules iela 16, Ventspils', '벤츠필스의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Ventspils. Rated 4.5 on Google Maps.'),
  place('ventspils-fine_dining-5', 'ventspils', 'fine_dining', 'Pastnieks Ēdamistaba', 'Platā iela 4-11, Ventspils', '벤츠필스의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Ventspils. Rated 4.6 on Google Maps.'),
  place('ventspils-bakery-1', 'ventspils', 'bakery', 'Ramala, radošā maizes laboratorija', 'Lielais prospekts 48, Ventspils', '벤츠필스의 빵집. 구글 지도 평점 4.7.', 'Bakery in Ventspils. Rated 4.7 on Google Maps.'),
  place('ventspils-bakery-2', 'ventspils', 'bakery', 'Ventspils Kārumnieks', 'Lielā iela 20, Ventspils', '벤츠필스의 제과점. 구글 지도 평점 4.6.', 'Pâtisserie in Ventspils. Rated 4.6 on Google Maps.'),
  place('ventspils-cafe-1', 'ventspils', 'cafe', 'Rātsgalds', 'Baznīcas iela 2, Ventspils', '벤츠필스의 카페. 구글 지도 평점 4.6.', 'Café in Ventspils. Rated 4.6 on Google Maps.'),
  place('ventspils-cafe-2', 'ventspils', 'cafe', 'Kafetērija Bitīte', 'Kuldīgas iela 14/16, Ventspils', '벤츠필스의 카페. 구글 지도 평점 4.8.', 'Café in Ventspils. Rated 4.8 on Google Maps.'),
  place('ventspils-cafe-3', 'ventspils', 'cafe', 'Dārzā Ventspils', 'Inženieru iela 43, Ventspils', '벤츠필스의 카페. 구글 지도 평점 4.8.', 'Café in Ventspils. Rated 4.8 on Google Maps.'),

  // —— daugavpils: restaurants, bakeries and cafés (2026-11-14) ——
  place('daugavpils-fine_dining-1', 'daugavpils', 'fine_dining', 'Jazz&Wine', 'Rīgas iela 64A, Daugavpils', '다우가프필스의 재즈 와인 레스토랑. 구글 지도 평점 4.6.', 'Jazz and wine restaurant in Daugavpils. Rated 4.6 on Google Maps.'),
  place('daugavpils-fine_dining-2', 'daugavpils', 'fine_dining', 'Gubernators', 'Lāčplēša iela 10, Daugavpils', '다우가프필스의 라트비아 전통 요리 식당. 구글 지도 평점 4.5.', 'Traditional Latvian restaurant in Daugavpils. Rated 4.5 on Google Maps.'),
  place('daugavpils-fine_dining-3', 'daugavpils', 'fine_dining', 'Odesa Mamma', 'Saules iela 42, Daugavpils', '다우가프필스의 우크라이나 요리 식당. 구글 지도 평점 4.6.', 'Ukrainian restaurant in Daugavpils. Rated 4.6 on Google Maps.'),
  place('daugavpils-fine_dining-4', 'daugavpils', 'fine_dining', 'Vēsma Gastrobārs', 'Rīgas iela 49, Daugavpils', '다우가프필스의 가스트로 바. 구글 지도 평점 4.3.', 'Gastropub in Daugavpils. Rated 4.3 on Google Maps.'),
  place('daugavpils-bakery-1', 'daugavpils', 'bakery', 'Nekomimi bakery', 'Viestura iela 2, Daugavpils', '다우가프필스의 빵집 겸 카페. 구글 지도 평점 4.8.', 'Bakery and café in Daugavpils. Rated 4.8 on Google Maps.'),
  place('daugavpils-cafe-1', 'daugavpils', 'cafe', 'WakeCup Coffee', 'Saules iela 23, Daugavpils', '다우가프필스의 커피숍. 구글 지도 평점 4.9.', 'Coffee shop in Daugavpils. Rated 4.9 on Google Maps.'),
  place('daugavpils-cafe-2', 'daugavpils', 'cafe', 'Imbir Food Stories', 'Saules iela 39, Daugavpils', '다우가프필스의 카페. 구글 지도 평점 4.5.', 'Café in Daugavpils. Rated 4.5 on Google Maps.'),
  place('daugavpils-cafe-3', 'daugavpils', 'cafe', 'What about coffee?', 'Mihoelsa iela 41, Daugavpils', '다우가프필스의 커피숍. 구글 지도 평점 4.8.', 'Coffee shop in Daugavpils. Rated 4.8 on Google Maps.'),
]
