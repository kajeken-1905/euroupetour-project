import { place } from './placeFactory'
import type { Place } from '../types'

export const placesGEExtra: Place[] = [
  // —— tbilisi ——
  place('tbilisi-fine_dining-1', 'tbilisi', 'fine_dining', 'Maspindzelo', 4.8, '7 Gorgasali St, Abanotubani, Tbilisi', '2008년부터 이어온 아바노투바니의 조지아 가정식 레스토랑.', 'Georgian home-style restaurant in Abanotubani, operating since 2008.', { reviewCount: 3384 }),
  place('tbilisi-fine_dining-2', 'tbilisi', 'fine_dining', 'Culinarium Khasheria', 4.3, '23 Abano St, Tbilisi', '트위스트를 더한 조지아 요리 레스토랑.', 'Restaurant serving Georgian cuisine with a twist.', { reviewCount: 1104 }),
  place('tbilisi-fine_dining-3', 'tbilisi', 'fine_dining', 'Ethno Tsiskvili', 4.8, '99 Akaki Beliashvili St, Tbilisi 0159', '2002년부터 이어온 민속 박물관 콘셉트 레스토랑, 전통 음악·춤 공연.', 'Ethnographic restaurant-museum since 2002, with traditional Georgian music and dance.', { reviewCount: 6933 }),
  place('tbilisi-fine_dining-4', 'tbilisi', 'fine_dining', 'Pasanauri', 4.5, '17 Nikoloz Baratashvili St, Tbilisi 0105', '25년 넘게 킨칼리(만두)를 선보이는 조지아 체인 레스토랑.', 'Georgian chain restaurant serving khinkali dumplings for over 25 years.'),
  place('tbilisi-bakery-1', 'tbilisi', 'bakery', 'Babà Bakery', 4.8, 'Ivane Machablis St 4, Tbilisi', '버터리한 크루아상으로 유명한 트빌리시의 인기 베이커리.', "Popular Tbilisi bakery known for its buttery croissants.", { reviewCount: 1678 }),
  place('tbilisi-bakery-2', 'tbilisi', 'bakery', 'Caravanserai Bakery', 4.3, '13/40 Sioni St, Tbilisi', '트빌리시 역사박물관 맞은편 구시가의 숨은 베이커리, 하차푸리로 유명.', "Hidden Old Town bakery opposite the Tbilisi History Museum, known for khachapuri.", { reviewCount: 236 }),
  place('tbilisi-cafe-1', 'tbilisi', 'cafe', 'Shavi Coffee Roasters', 4.9, 'Barnovi St 39, Tbilisi', '2021년 문을 연 베라 지구의 스페셜티 커피 로스터리.', 'Specialty coffee roastery in the Vera district, opened in 2021.', { reviewCount: 84 }),
  place('tbilisi-cafe-2', 'tbilisi', 'cafe', 'Erti Kava Coffee Room', 4.5, 'Abashidze Irakli St 81, Vake, Tbilisi', '루스타벨리 대로 인근 카페, 피스타치오 무스로 유명.', 'Café just off Rustaveli Avenue, known for its pistachio mousse.', { reviewCount: 2032 }),
  place('tbilisi-korean-1', 'tbilisi', 'korean', 'Seoul', 4.8, '7 Budapeshti St, Tbilisi 0160', '전통적인 인테리어의 정통 한식당, 프라이드치킨·김치·라면으로 호평.', 'Authentic Korean restaurant with traditional decor, praised for its fried chicken, kimchi and ramen.', { reviewCount: 1177 }),
  place('tbilisi-korean-2', 'tbilisi', 'korean', 'Korea Restaurant', 4.5, '4 Ierusalimi St, Tbilisi', '트빌리시의 한식당.', 'Korean restaurant in Tbilisi.', { reviewCount: 86 }),
  place('tbilisi-korean-3', 'tbilisi', 'korean', 'Sodam Korean Restaurant', 4.7, '7 Giorgi Akhvlediani St, Tbilisi', '트빌리시의 한식당.', 'Korean restaurant in Tbilisi.'),

  // —— batumi ——
  place('batumi-fine_dining-1', 'batumi', 'fine_dining', 'Lurji Sufra', 4.6, '43 Memed Abashidze Avenue, Batumi', '정통 조지아 요리 레스토랑.', 'Restaurant serving classic Georgian dishes.'),
  place('batumi-fine_dining-2', 'batumi', 'fine_dining', 'Heart of Batumi', 4.6, '11 General Mazniashvili St, Batumi 6010', '바투미 최고의 조지아 요리 레스토랑으로 꼽히는 곳.', "Widely regarded as one of Batumi's best restaurants for Georgian cuisine.", { reviewCount: 4827 }),
  place('batumi-fine_dining-3', 'batumi', 'fine_dining', 'Sazandari', 4.3, '78a Zurab Gorgiladze St, Batumi', '전통 라이브 음악과 함께하는 조지아 요리 레스토랑.', 'Georgian restaurant with traditional live music.'),
  place('batumi-bakery-1', 'batumi', 'bakery', 'Dona Bakery and Sweets', 4.6, '41 Vakhtang Gorgasali St, Batumi 6010, Georgia', '다양한 케이크와 페이스트리, 전통 조지아 디저트로 유명한 바투미의 제과점', 'Renowned Batumi confectionery celebrated for its cakes, pastries and traditional Georgian sweets'),
  place('batumi-bakery-2', 'batumi', 'bakery', 'Qooqy Bakery Batumi', 4.8, '4 Kobaladze St, Batumi', '갓 구운 크루아상과 페이스트리로 유명한 아늑한 베이커리.', 'Cozy bakery known for its freshly baked croissants and pastries.'),
  place('batumi-cafe-1', 'batumi', 'cafe', 'Rhino Coffee', 4.5, '4a Khariton Akhvlediani St, Batumi 6004, Georgia', '세련된 디자인의 모던 커피하우스로 다양한 추출 방식을 갖춘 바투미의 카페', 'Modern Batumi coffee house with a cool design and various brewing methods'),
  place('batumi-cafe-2', 'batumi', 'cafe', 'Capybara Coffee', 4.9, '16 Zurab Gorgiladze St, Batumi', '카피바라와 함께하는 독특한 컨셉의 카페, 바나나 밀크 카푸치노로 유명.', 'Unique café concept featuring resident capybaras, known for its banana milk cappuccino.', { reviewCount: 292 }),

  // —— kutaisi ——
  place('kutaisi-fine_dining-1', 'kutaisi', 'fine_dining', 'Sisters Restaurant', 4.6, '2 Davit & Konstantine Mkeidze Street, Kutaisi', '레드 브리지 인근 전통 조지아 연회.', 'Traditional Georgian feast near the Red Bridge.'),
  place('kutaisi-fine_dining-2', 'kutaisi', 'fine_dining', 'Georgian Cuisine Magnolia', 4.4, 'Kutaisi, Georgia', '쿠타이시 전망이 아름다운 아늑한 조지아 요리 레스토랑.', 'Cozy Georgian restaurant with beautiful views of Kutaisi.'),
  place('kutaisi-bakery-1', 'kutaisi', 'bakery', 'Bubliki Bakery', 4.5, 'Tsminda Nino St 11, 4600 Kutaisi, Georgia', '1997년부터 이어온 쿠타이시 중심가의 베이커리', 'Kutaisi bakery in the city center, operating since 1997'),
  place('kutaisi-bakery-2', 'kutaisi', 'bakery', 'Bakery Sanimusho', 4.5, 'N16 Tamar The Queen St, Kutaisi', '가성비 좋은 한 끼와 향긋한 커피로 유명한 베이커리.', 'Bakery known for its good-value meals and aromatic coffee.', { reviewCount: 162 }),
  place('kutaisi-cafe-1', 'kutaisi', 'cafe', 'Cafe Neta', 4.4, 'Tamar Mepe Street, Kutaisi, Georgia', '훌륭한 커피와 케이크로 유명한 쿠타이시의 카페', 'Kutaisi café known for expertly crafted coffee and delectable cakes'),
  place('kutaisi-cafe-2', 'kutaisi', 'cafe', 'Coffee Bean', 4.3, '11 Tsminda Nino St, Kutaisi', '누구나 만날 수 있는 상징적인 커피숍.', 'Iconic coffee spot where everyone in town meets.'),

  // —— stepantsminda ——
  place('stepantsminda-fine_dining-1', 'stepantsminda', 'fine_dining', 'Kazbegi Good Food', 4.6, 'Gergetis Ubani E117, Stepantsminda 4485', '아늑한 분위기의 조지아 가정식.', 'Cozy Georgian home cooking.'),
  place('stepantsminda-cafe-1', 'stepantsminda', 'cafe', 'Cafe-Restaurant Kazbegya', 4.4, 'Stepantsminda, Georgia', '알렉산드레 카즈베기 동상 인근 스테판츠민다 중심가의 카페 겸 레스토랑', 'Café-restaurant in central Stepantsminda, steps from the Kazbegi monument'),

  // —— sighnaghi ——
  place('sighnaghi-fine_dining-1', 'sighnaghi', 'fine_dining', 'Restaurant Burji', 4.6, 'Chavchavadze St. 9, Signagi 383210', '도시 최고 전망의 조지아 요리.', 'Georgian cuisine with the town\'s best views.'),
  place('sighnaghi-cafe-1', 'sighnaghi', 'cafe', 'ChikChiki Cafe', 4.2, 'Sighnaghi, Georgia', '조지아 요리와 라이브 음악을 함께 즐길 수 있는 시그나기 중심가의 카페', 'Café in the heart of Sighnaghi offering Georgian cuisine and live music'),
]
