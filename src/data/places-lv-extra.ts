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
]
