import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLVExtra: Place[] = [
  // —— riga ——
  place('riga-fine_dining-1', 'riga', 'fine_dining', 'Milda', 'Grēcinieku iela 26, LV-1050 Riga', '구시가지의 라트비아 전통 요리 식당. 미쉐린 가이드에 실려 있고 월요일은 쉽니다.', 'Traditional Latvian restaurant in the old town, listed in the Michelin Guide; closed Mondays.', { image: '/places/riga-fine_dining-1.jpg' }),
  place('riga-fine_dining-2', 'riga', 'fine_dining', 'Rozengrāls', 'Rozena iela 1, LV-1050 Riga', '1293년부터 이어져 온 구시가지 지하 와인 저장고에서 즐기는 중세풍 라트비아 요리.', 'Medieval-themed Latvian restaurant in a historic Old Town wine cellar dating back to 1293.', { image: '/places/riga-fine_dining-2.jpg' }),
  place('riga-fine_dining-3', 'riga', 'fine_dining', 'Zviedru Vārti', 'Torņa iela 4-1a, LV-1050 Riga', '스웨덴 문 옆에 위치한 가족 운영 레스토랑, 정통 라트비아 가정식 요리 전문.', 'Family-run restaurant beside the Swedish Gate specializing in authentic Latvian home cooking.'),
  place('riga-fine_dining-4', 'riga', 'fine_dining', 'Salve', 'Rātslaukums 5, LV-1050 Riga', '구시가지 시청 광장의 역사적 건물에서 전통 라트비아 요리를 현대적으로 재해석.', 'Modern take on traditional Latvian cuisine in a historic building on Riga\'s Town Hall Square.'),
  place('riga-fine_dining-5', 'riga', 'fine_dining', 'LIDO Alus Sēta', 'Krāmu iela 2, LV-1050 Riga', '훈제 고기·양배추롤 등을 고르는 구시가의 셀프서비스 라트비아 식당.', 'Self-service Latvian canteen in the Old Town with smoked meats and cabbage rolls.'),

  place('riga-bakery-1', 'riga', 'bakery', 'Mīkla', 'Dzirnavu iela 42, LV-1010 Riga', '스웨덴·일본에서 수련한 베이커가 운영하는 사워도우·카다멈 번 전문 베이커리.', 'Bakery known for sourdough bread and cardamom buns, run by a baker trained in Sweden and Japan.'),
  place('riga-bakery-2', 'riga', 'bakery', 'Mārtiņa Beķereja', 'Brīvības iela 80, LV-1011 Riga', '시나몬번 같은 전통 페이스트리를 파는 라트비아 제과점 체인.', 'Latvian pastry chain selling traditional pastries such as cinnamon buns.'),
  place('riga-bakery-3', 'riga', 'bakery', 'Kūkotava', 'Tērbatas iela 12-1, LV-1011 Riga', '리가 중심가의 아늑한 베이커리 카페, 케이크·에클레어·전통 라트비아 디저트 판매.', 'Cozy bakery-café in central Riga offering cakes, éclairs, and traditional Latvian sweets.'),

  place('riga-cafe-1', 'riga', 'cafe', 'Rocket Bean Roastery', 'Miera iela 29/31, LV-1013 Riga', '2015년 시작한 리가의 스페셜티 커피 로스터리.', 'Riga specialty coffee roastery founded in 2015.'),
  place('riga-cafe-2', 'riga', 'cafe', 'STRADA Coffee Bar', 'Jāņa iela 5, LV-1050 Riga', '구시가의 스페셜티 커피·차 카페.', 'Specialty coffee and tea café in the Old Town.'),
  place('riga-cafe-3', 'riga', 'cafe', 'MiiT Coffee', 'Lāčplēša iela 10, LV-1010 Riga', '자전거 공방에서 출발한 채식·비건 친화적 스페셜티 커피 카페.', 'Vegetarian and vegan-friendly specialty coffee café that started out as a bicycle workshop.'),

  place('riga-korean-1', 'riga', 'korean', 'Soraksans', 'Miesnieku iela 12, LV-1050 Riga', '구시가의 한식당. 비빔밥과 바비큐가 있습니다.', 'Korean restaurant in the Old Town with bibimbap and barbecue.'),

  // —— jurmala ——
  place('jurmala-fine_dining-1', 'jurmala', 'fine_dining', '36.Line Grill Restaurant', 'Baznīcas iela 2B, LV-2015 Jūrmala', '해변 바로 옆의 해산물·지중해 요리 레스토랑.', 'Beachfront restaurant serving seafood and Mediterranean dishes.'),
  place('jurmala-fine_dining-2', 'jurmala', 'fine_dining', 'KinzaHouse', 'Baznīcas iela 2/3, Jūrmala', '유르말라의 조지아 요리 레스토랑.', 'Georgian restaurant in Jūrmala.'),
  place('jurmala-fine_dining-3', 'jurmala', 'fine_dining', 'Majorenhoff', 'Jomas iela 42, Jūrmala', '요마스 거리의 레스토랑.', 'Restaurant on Jomas Street.', { image: '/places/jurmala-fine_dining-3.jpg' }),
  place('jurmala-fine_dining-4', 'jurmala', 'fine_dining', 'HOUSE OF LIGHT', 'Jomas iela, Majori, Jūrmala', '요마스 거리의 그릴 바. 샤슬릭과 와인 리스트가 인기입니다.', 'Grill bar on Jomas Street, known for shashlik and its wine list.'),
  place('jurmala-fine_dining-5', 'jurmala', 'fine_dining', 'Dukāts', 'Baznīcas iela 12/14, Jūrmala', '유르말라의 비스트로.', 'Bistro in Jūrmala.'),
  place('jurmala-bakery-1', 'jurmala', 'bakery', 'Kalnakrastu Rausu fabrika', 'Vienibas prospekts 35, Jūrmala, Latvia', '케이크가 있는 유르말라의 빵집.', 'Jūrmala bakery with cakes.'),
  place('jurmala-bakery-2', 'jurmala', 'bakery', 'Bitīte', 'Jomas iela 63, Jūrmala LV-2015', '마요리 해변 근처의 가족 운영 카페·제과점. 매일 페이스트리와 케이크를 굽습니다.', 'Family-run café and patisserie near the beach in Majori, baking pastries and cakes daily.'),
  place('jurmala-bakery-3', 'jurmala', 'bakery', 'The Loaf', 'Jomas iela 37, Jūrmala', '요마스 거리의 제과점.', 'Bakery on Jomas Street.'),
  place('jurmala-cafe-1', 'jurmala', 'cafe', 'Madam Brioš', 'Mellužu prospekts 9, Jūrmala LV-2008, Latvia', '프랑스식 정취가 물씬 풍기는 유르말라의 노변 카페 겸 베이커리', 'Roadside café and bakery in Jūrmala capturing French culinary charm'),
  place('jurmala-cafe-2', 'jurmala', 'cafe', 'Simply Beach House', 'Pilsoņu iela 1, Majori, Jūrmala', '유르말라 해변가의 커피숍.', 'Beachfront coffee shop in Jūrmala.'),
  place('jurmala-cafe-3', 'jurmala', 'cafe', 'Kafijas stūrītis', 'Bulduru prospekts 35, Jūrmala', '유르말라의 카페.', 'Café in Jūrmala.'),
  place('jurmala-cafe-5', 'jurmala', 'cafe', 'MT Caffe', 'Jomas iela 58-k-3, Jūrmala', '유르말라 카페.', 'Café in Jūrmala.'),

  // —— sigulda ——
  place('sigulda-fine_dining-1', 'sigulda', 'fine_dining', 'Pasēdnīca', 'Raiņa iela 2-3, LV-2150 Sigulda', '합리적인 가격의 로컬 요리.', 'Local cuisine at reasonable prices.'),
  place('sigulda-fine_dining-2', 'sigulda', 'fine_dining', 'Kungu rija, restorāns', 'Kungu rija, Turaida, Krimuldas pagasts, LV-2150 Siguldas novads, Latvia', '시굴다의 레스토랑.', 'Restaurant in Sigulda.'),
  place('sigulda-fine_dining-3', 'sigulda', 'fine_dining', 'Hotel Sigulda restaurant', 'Pils iela 6, Sigulda', '시굴다의 호텔 레스토랑.', 'Hotel restaurant in Sigulda.'),
  place('sigulda-fine_dining-4', 'sigulda', 'fine_dining', 'Bazārs', 'Ausekļa iela 7b, Sigulda', '시굴다 뷔페 레스토랑.', 'Buffet restaurant in Sigulda.'),
  place('sigulda-fine_dining-5', 'sigulda', 'fine_dining', 'Kazene', 'Pils iela 4b, Sigulda', '시굴다의 레스토랑.', 'Restaurant in Sigulda.'),

  place('sigulda-bakery-1', 'sigulda', 'bakery', 'GUSTAVbeķereja', 'Krišjāņa Valdemāra iela 2, Sigulda, LV-2150', '머핀을 굽는 시굴다의 빵집.', 'Sigulda bakery with muffins.'),
  place('sigulda-bakery-2', 'sigulda', 'bakery', 'Sucre, kafejnīca', 'Rūdolfa Blaumaņa iela 2, Sigulda', '시굴다 베이커리.', 'Bakery in Sigulda.'),
  place('sigulda-cafe-1', 'sigulda', 'cafe', 'Doma cafe', 'L. Paegles iela 15a, Sigulda, Latvia', '안뜰이 있는 시굴다의 커피 카페.', 'Sigulda coffee café with a courtyard.'),
  place('sigulda-cafe-2', 'sigulda', 'cafe', 'Mr. Biskvits', 'Ausekļa iela 9, Sigulda', '시굴다의 카페.', 'Café in Sigulda.'),
  place('sigulda-cafe-3', 'sigulda', 'cafe', 'Complex Cathouse (Kaķu Māja)', 'Pils iela 8, Sigulda', '고양이 테마의 시굴다 카페.', 'Cat-themed café in Sigulda.'),
  place('sigulda-cafe-4', 'sigulda', 'cafe', 'Eklers', 'Pils iela 1, Sigulda', '시굴다의 카페.', 'Café in Sigulda.'),
  place('sigulda-cafe-5', 'sigulda', 'cafe', 'Pie Vītoliem', 'Pils iela 1-A, Sigulda', '시굴다 카페.', 'Café in Sigulda.'),
]
