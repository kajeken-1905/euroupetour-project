import { place } from './placeFactory'
import type { Place } from '../types'

export const placesGEExtra: Place[] = [
  // —— tbilisi ——
  place('tbilisi-fine_dining-1', 'tbilisi', 'fine_dining', 'Shoti', 4.6, 'Tbilisi', '모던 조지아 파인.', 'Modern Georgian fine dining.', { reviewCount: 1200 }),
  place('tbilisi-fine_dining-2', 'tbilisi', 'fine_dining', 'Culinarium', 4.5, 'Tbilisi', '시즌 테이스팅.', 'Seasonal tasting.', { reviewCount: 900 }),
  place('tbilisi-fine_dining-3', 'tbilisi', 'fine_dining', 'Old Town supra classics', 4.5, 'Tbilisi', '전통 수프라 연회.', 'Traditional supra feast.', { reviewCount: 3600 }),
  place('tbilisi-bakery-1', 'tbilisi', 'bakery', 'Shotis puri bakeries', 4.5, 'Tbilisi', '쇼티 빵집.', 'Shoti bread bakeries.', { reviewCount: 4200 }),
  place('tbilisi-bakery-2', 'tbilisi', 'bakery', 'Khachapuri counters', 4.5, 'Tbilisi', '하차푸리 카운터.', 'Khachapuri counters.', { reviewCount: 4800 }),
  place('tbilisi-bakery-3', 'tbilisi', 'bakery', 'Pastry shops Old Town', 4.4, 'Tbilisi', '구시가 페이스트리.', 'Old-town pastry shops.', { reviewCount: 1800 }),
  place('tbilisi-cafe-1', 'tbilisi', 'cafe', 'Specialty coffee Tbilisi', 4.5, 'Tbilisi', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),
  place('tbilisi-cafe-2', 'tbilisi', 'cafe', 'Etseri / courtyard cafés', 4.4, 'Tbilisi', '중정 카페.', 'Courtyard café.', { reviewCount: 1600 }),
  place('tbilisi-cafe-3', 'tbilisi', 'cafe', 'Rustaveli café terraces', 4.3, 'Tbilisi', '대로 테라스 카페.', 'Avenue terrace cafés.', { reviewCount: 2400 }),

  // —— batumi ——
  place('batumi-fine_dining-1', 'batumi', 'fine_dining', 'Lurji Sufra', 4.6, '43 Memed Abashidze Avenue, Batumi', '정통 조지아 요리 레스토랑.', 'Restaurant serving classic Georgian dishes.'),
  place('batumi-bakery-1', 'batumi', 'bakery', 'Dona Bakery and Sweets', 4.6, '41 Vakhtang Gorgasali St, Batumi 6010, Georgia', '다양한 케이크와 페이스트리, 전통 조지아 디저트로 유명한 바투미의 제과점', 'Renowned Batumi confectionery celebrated for its cakes, pastries and traditional Georgian sweets'),
  place('batumi-cafe-1', 'batumi', 'cafe', 'Rhino Coffee', 4.5, '4a Khariton Akhvlediani St, Batumi 6004, Georgia', '세련된 디자인의 모던 커피하우스로 다양한 추출 방식을 갖춘 바투미의 카페', 'Modern Batumi coffee house with a cool design and various brewing methods'),

  // —— kutaisi ——
  place('kutaisi-fine_dining-1', 'kutaisi', 'fine_dining', 'Sisters Restaurant', 4.6, '2 Davit & Konstantine Mkeidze Street, Kutaisi', '레드 브리지 인근 전통 조지아 연회.', 'Traditional Georgian feast near the Red Bridge.'),
  place('kutaisi-bakery-1', 'kutaisi', 'bakery', 'Bubliki Bakery', 4.5, 'Tsminda Nino St 11, 4600 Kutaisi, Georgia', '1997년부터 이어온 쿠타이시 중심가의 베이커리', 'Kutaisi bakery in the city center, operating since 1997'),
  place('kutaisi-cafe-1', 'kutaisi', 'cafe', 'Cafe Neta', 4.4, 'Tamar Mepe Street, Kutaisi, Georgia', '훌륭한 커피와 케이크로 유명한 쿠타이시의 카페', 'Kutaisi café known for expertly crafted coffee and delectable cakes'),

  // —— stepantsminda ——
  place('stepantsminda-fine_dining-1', 'stepantsminda', 'fine_dining', 'Kazbegi Good Food', 4.6, 'Gergetis Ubani E117, Stepantsminda 4485', '아늑한 분위기의 조지아 가정식.', 'Cozy Georgian home cooking.'),
  place('stepantsminda-bakery-1', 'stepantsminda', 'bakery', 'Kazbegi Good Food', 4.3, 'Stepantsminda, Georgia', '훌륭한 수프와 하차푸리, 최고의 빵으로 유명한 스테판츠민다의 로컬 맛집', 'Local favorite in Stepantsminda known for great soups, khachapuri and sublime bread'),
  place('stepantsminda-cafe-1', 'stepantsminda', 'cafe', 'Cafe-Restaurant Kazbegya', 4.4, 'Stepantsminda, Georgia', '알렉산드레 카즈베기 동상 인근 스테판츠민다 중심가의 카페 겸 레스토랑', 'Café-restaurant in central Stepantsminda, steps from the Kazbegi monument'),

  // —— sighnaghi ——
  place('sighnaghi-fine_dining-1', 'sighnaghi', 'fine_dining', 'Restaurant Burji', 4.6, 'Chavchavadze St. 9, Signagi 383210', '도시 최고 전망의 조지아 요리.', 'Georgian cuisine with the town\'s best views.'),

  place('sighnaghi-bakery-1', 'sighnaghi', 'bakery', 'Bakery and Café', 4.5, 'Sighnaghi, Georgia', '조지아식 브런치로 유명한 시그나기의 베이커리 카페', 'Sighnaghi bakery café known for its Georgian brunch'),
  place('sighnaghi-cafe-1', 'sighnaghi', 'cafe', 'ChikChiki Cafe', 4.5, 'Sighnaghi, Georgia', '조지아 요리와 라이브 음악을 함께 즐길 수 있는 시그나기 중심가의 카페', 'Café in the heart of Sighnaghi offering Georgian cuisine and live music'),
]
