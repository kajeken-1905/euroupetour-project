import { place } from './placeFactory'
import type { Place } from '../types'

export const placesGEExtra: Place[] = [
  // —— tbilisi ——
  place('tbilisi-fine_dining-1', 'tbilisi', 'fine_dining', 'Maspindzelo', '7 Gorgasali St, Abanotubani, Tbilisi', '2008년부터 이어온 아바노투바니의 조지아 가정식 레스토랑.', 'Georgian home-style restaurant in Abanotubani, operating since 2008.'),
  place('tbilisi-fine_dining-2', 'tbilisi', 'fine_dining', 'Culinarium Khasheria', '23 Abano St, Tbilisi', '트위스트를 더한 조지아 요리 레스토랑.', 'Restaurant serving Georgian cuisine with a twist.'),
  place('tbilisi-fine_dining-3', 'tbilisi', 'fine_dining', 'Ethno Tsiskvili', '99 Akaki Beliashvili St, Tbilisi 0159', '2002년부터 이어온 민속 박물관 콘셉트 레스토랑, 전통 음악·춤 공연.', 'Ethnographic restaurant-museum since 2002, with traditional Georgian music and dance.'),
  place('tbilisi-fine_dining-4', 'tbilisi', 'fine_dining', 'Pasanauri', '17 Nikoloz Baratashvili St, Tbilisi 0105', '25년 넘게 킨칼리(만두)를 선보이는 조지아 체인 레스토랑.', 'Georgian chain restaurant serving khinkali dumplings for over 25 years.'),
  place('tbilisi-bakery-1', 'tbilisi', 'bakery', 'Babà Bakery', 'Ivane Machablis St 4, Tbilisi', '크루아상을 굽는 트빌리시의 빵집.', 'Tbilisi bakery baking croissants.'),
  place('tbilisi-bakery-2', 'tbilisi', 'bakery', 'Caravanserai Bakery', '13/40 Sioni St, Tbilisi', '트빌리시 역사박물관 맞은편 구시가의 빵집. 하차푸리가 있습니다.', 'Old Town bakery opposite the Tbilisi History Museum, with khachapuri.'),
  place('tbilisi-cafe-1', 'tbilisi', 'cafe', 'Shavi Coffee Roasters', 'Barnovi St 39, Tbilisi', '2021년 문을 연 베라 지구의 스페셜티 커피 로스터리.', 'Specialty coffee roastery in the Vera district, opened in 2021.'),
  place('tbilisi-cafe-2', 'tbilisi', 'cafe', 'Erti Kava Coffee Room', 'Abashidze Irakli St 81, Vake, Tbilisi', '루스타벨리 거리 근처의 카페. 피스타치오 무스가 있습니다.', 'Café just off Rustaveli Avenue with pistachio mousse.'),
  place('tbilisi-korean-1', 'tbilisi', 'korean', 'Seoul', '7 Budapeshti St, Tbilisi 0160', '전통적인 인테리어의 정통 한식당, 프라이드치킨·김치·라면으로 호평.', 'Authentic Korean restaurant with traditional decor, praised for its fried chicken, kimchi and ramen.'),
  place('tbilisi-korean-2', 'tbilisi', 'korean', 'Korea Restaurant', '4 Ierusalimi St, Tbilisi', '트빌리시의 한식당.', 'Korean restaurant in Tbilisi.'),
  place('tbilisi-korean-3', 'tbilisi', 'korean', 'Sodam Korean Restaurant', '7 Giorgi Akhvlediani St, Tbilisi', '트빌리시의 한식당.', 'Korean restaurant in Tbilisi.'),

  // —— batumi ——
  place('batumi-fine_dining-1', 'batumi', 'fine_dining', 'Lurji Sufra', '43 Memed Abashidze Avenue, Batumi', '정통 조지아 요리 레스토랑.', 'Restaurant serving classic Georgian dishes.'),
  place('batumi-fine_dining-2', 'batumi', 'fine_dining', 'Heart of Batumi', '11 General Mazniashvili St, Batumi 6010', '바투미의 조지아 요리 식당.', 'Georgian restaurant in Batumi.'),
  place('batumi-fine_dining-3', 'batumi', 'fine_dining', 'Sazandari', '78a Zurab Gorgiladze St, Batumi', '전통 라이브 음악과 함께하는 조지아 요리 레스토랑.', 'Georgian restaurant with traditional live music.'),
  place('batumi-bakery-1', 'batumi', 'bakery', 'Dona Bakery and Sweets', '41 Vakhtang Gorgasali St, Batumi 6010, Georgia', '케이크·페이스트리와 조지아 전통 과자를 파는 바투미의 제과점.', 'Batumi pastry shop with cakes, pastries and traditional Georgian sweets.'),
  place('batumi-bakery-2', 'batumi', 'bakery', 'Qooqy Bakery Batumi', '4 Kobaladze St, Batumi', '갓 구운 크루아상과 페이스트리가 있는 아늑한 빵집.', 'Cosy bakery with freshly baked croissants and pastries.'),
  place('batumi-cafe-1', 'batumi', 'cafe', 'Rhino Coffee', '4a Khariton Akhvlediani St, Batumi 6004, Georgia', '세련된 디자인의 모던 커피하우스로 다양한 추출 방식을 갖춘 바투미의 카페', 'Modern Batumi coffee house with a cool design and various brewing methods'),
  place('batumi-cafe-2', 'batumi', 'cafe', 'Capybara Coffee', '16 Zurab Gorgiladze St, Batumi', '카피바라가 있는 컨셉 카페. 바나나 우유 카푸치노가 있습니다.', 'Concept café with resident capybaras and banana-milk cappuccino.'),

  // —— kutaisi ——
  place('kutaisi-fine_dining-1', 'kutaisi', 'fine_dining', 'Sisters Restaurant', '2 Davit & Konstantine Mkeidze Street, Kutaisi', '레드 브리지 인근 전통 조지아 연회.', 'Traditional Georgian feast near the Red Bridge.'),
  place('kutaisi-fine_dining-2', 'kutaisi', 'fine_dining', 'Georgian Cuisine Magnolia', 'Galaktion Tabidze Street 1, 4600 Kutaisi, Georgia', '쿠타이시 전망이 아름다운 아늑한 조지아 요리 레스토랑.', 'Cozy Georgian restaurant with beautiful views of Kutaisi.'),
  place('kutaisi-bakery-1', 'kutaisi', 'bakery', 'Bubliki Bakery', 'Tsminda Nino St 11, 4600 Kutaisi, Georgia', '1997년부터 이어온 쿠타이시 중심가의 베이커리', 'Kutaisi bakery in the city center, operating since 1997'),
  place('kutaisi-bakery-2', 'kutaisi', 'bakery', 'Bakery Sanimusho', 'N16 Tamar The Queen St, Kutaisi', '식사와 커피를 내는 빵집.', 'Bakery serving meals and coffee.'),
  place('kutaisi-cafe-1', 'kutaisi', 'cafe', 'Cafe Neta', 'Tamar Mepe Street, 4600 Kutaisi, Georgia', '커피와 케이크가 있는 쿠타이시의 카페.', 'Kutaisi café with coffee and cakes.'),
  place('kutaisi-cafe-2', 'kutaisi', 'cafe', 'Coffee Bean', '11 Tsminda Nino St, Kutaisi', '쿠타이시의 커피숍.', 'Coffee shop in Kutaisi.'),

  // —— stepantsminda ——
  place('stepantsminda-fine_dining-1', 'stepantsminda', 'fine_dining', 'Kazbegi Good Food', 'Gergetis Ubani E117, Stepantsminda 4485', '아늑한 분위기의 조지아 가정식.', 'Cozy Georgian home cooking.'),
  place('stepantsminda-fine_dining-2', 'stepantsminda', 'fine_dining', 'Maisi - Restaurant in Kazbegi', 'N18 Betlemi St, Stepantsminda, Georgia', '스테판츠민다에서 조지아 요리 레스토랑.', 'Georgian cuisine restaurant in Stepantsminda.'),
  place('stepantsminda-fine_dining-3', 'stepantsminda', 'fine_dining', 'Samani Restaurant', 'N12 Aleksandre Kazbegi St, Stepantsminda, Georgia', '스테판츠민다의 레스토랑.', 'Restaurant in Stepantsminda.'),
  place('stepantsminda-cafe-1', 'stepantsminda', 'cafe', 'Cafe-Restaurant Kazbegya', 'Tergdaleulebi Street 2, Stepantsminda, Georgia', '알렉산드레 카즈베기 동상 인근 스테판츠민다 중심가의 카페 겸 레스토랑', 'Café-restaurant in central Stepantsminda, steps from the Kazbegi monument'),
  place('stepantsminda-cafe-3', 'stepantsminda', 'cafe', 'Cafe Planet Kazbegi', '12a Kazbegi St, Stepantsminda, Georgia', '스테판츠민다 카페 겸 레스토랑.', 'Café and restaurant in Stepantsminda.'),

  // —— sighnaghi ——
  place('sighnaghi-fine_dining-1', 'sighnaghi', 'fine_dining', 'Restaurant Burji', 'Chavchavadze St. 9, Signagi 383210', '전망이 좋은 조지아 요리 식당.', 'Georgian restaurant with views.'),
  place('sighnaghi-fine_dining-2', 'sighnaghi', 'fine_dining', 'Sighnaghi Estate', 'ვახტანგ გორგასლის II ჩიხი, 4200 Sighnaghi, Georgia', '시그나기의 조지아 요리 레스토랑.', 'Georgian cuisine restaurant in Sighnaghi.'),
  place('sighnaghi-fine_dining-3', 'sighnaghi', 'fine_dining', 'Restaurant Qiziki', '6 Sarajishvili St, Sighnaghi, Georgia', '시그나기에서 조지아 요리 레스토랑.', 'Georgian cuisine restaurant in Sighnaghi.'),
  place('sighnaghi-fine_dining-4', 'sighnaghi', 'fine_dining', 'Balcony Sighnaghi', '21 Vakhtang Gorgasali St, Sighnaghi, Georgia', '시그나기의 조지아 요리 레스토랑.', 'Georgian cuisine restaurant in Sighnaghi.'),
  place('sighnaghi-cafe-2', 'sighnaghi', 'cafe', 'Cafe "Medea"', '3 Ketevan Tsamebuli St, Sighnaghi, Georgia', '시그나기 카페.', 'Café in Sighnaghi.'),
]
