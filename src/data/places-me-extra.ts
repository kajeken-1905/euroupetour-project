import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMEExtra: Place[] = [
  // —— kotor ——
  place('kotor-fine_dining-1', 'kotor', 'fine_dining', 'Galion', 4.2, 'Šuranj bb, Kotor', '코토르 마리나와 구시가 전망의 해산물 파인 다이닝.', 'Waterfront fine-dining restaurant with views of Kotor marina and the Old Town, known for seafood.', { reviewCount: 1200 }),
  place('kotor-fine_dining-2', 'kotor', 'fine_dining', 'Konoba Scala Santa', 4.4, 'Stari Grad 295, Kotor', '1931년 개업한 코토르에서 가장 오래된 레스토랑, 신선한 해산물 요리.', 'Kotor\'s oldest restaurant, open since 1931, known for fresh fish and seafood.', { reviewCount: 3183 }),
  place('kotor-fine_dining-3', 'kotor', 'fine_dining', 'Konoba Cesarica', 4.3, 'Stari Grad 375, Kotor', '현지 어부가 직접 잡은 해산물로 매일 메뉴가 바뀌는 가족 운영 코노바.', 'Family-run konoba whose menu changes daily with the owner-fisherman\'s fresh catch.'),

  place('kotor-bakery-1', 'kotor', 'bakery', 'Pekara Vrmac', 4.8, 'Škaljari, Kotor', '구시가 북문 인근의 전통 베이커리, 부렉·소시지롤·크림파이로 인기.', 'Traditional bakery near the Old Town\'s North Gate, popular for burek, sausage rolls, and cream pies.'),

  place('kotor-cafe-1', 'kotor', 'cafe', 'CAVE Coffee Specialty', 4.9, 'TC Kamelija, Square Mata Petrovića, Kotor', '코토르의 스페셜티 커피 기준점, 지역·해외 로스터리 원두 사용.', 'Kotor\'s benchmark for specialty coffee, sourcing beans from regional and international roasters.', { reviewCount: 700 }),
  place('kotor-cafe-2', 'kotor', 'cafe', 'Forza Cafe', 3.7, 'Square of the Arms, Kotor', '구시가 중심 광장의 카페, 모스크바 케이크로 유명.', 'Café on the Old Town\'s main square, famous for its Moscow cake.'),

  // —— budva ——
  place('budva-fine_dining-1', 'budva', 'fine_dining', 'Rivijera Restaurant', 4.6, '16 Njegoševa, Budva', '구시가의 전통 몬테네그로 요리, 해산물·지중해 요리로 인기.', 'Restaurant in the Old Town popular for Montenegrin and Mediterranean seafood dishes.'),
  place('budva-bakery-1', 'budva', 'bakery', 'Good Food Bakery', 5.0, 'Jadranski put bb, Budva', '부드바 중심가에서 훌륭한 빵과 로컬 특산품으로 유명한 베이커리', 'Bakery on Budva\'s main street known for excellent bread and local specialities'),
  place('budva-cafe-1', 'budva', 'cafe', 'Monteco Cafe', 5.0, 'The Old Bakery Residences, Budva', '부드바 최고의 커피와 코워킹 공간을 갖춘 카페', 'Budva café known for its great coffee and co-working space'),
  place('budva-korean-1', 'budva', 'korean', 'Korean Food Montenegro', 4.1, 'Ulica 13. Jula 4, Budva', '한국 식재료를 직접 공수해 비빔밥·라면·김치 등을 선보이는 부드바의 정통 한식당.', 'Budva\'s authentic Korean kitchen serving bibimbap, ramen, and kimchi with ingredients sourced from Korea.'),

  // —— podgorica ——
  place('podgorica-fine_dining-1', 'podgorica', 'fine_dining', 'Konoba \'Lanterna\' Podgorica', 4.5, 'Marka Miljanova 41, Podgorica', '1630년에 지어진 스타라 바로시 지구의 역사적 가옥에서 즐기는 전통 몬테네그로 요리.', 'Traditional Montenegrin cuisine served in a historic 1630 house in the Stara Varoš district.'),
  place('podgorica-bakery-1', 'podgorica', 'bakery', 'Sicilia', 3.9, 'Ivana Vujoševića 50, Podgorica, Montenegro', '훌륭한 페이스트리와 피자로 유명한 포드고리차의 인기 베이커리 체인', 'Popular Podgorica bakery chain known for excellent pastries and pizza'),
  place('podgorica-cafe-1', 'podgorica', 'cafe', 'ZRNO', 4.4, 'Rimski Trg 2, Podgorica', '포드고리차 최고의 커피로 유명한 아담한 카페', 'Small Podgorica café known for the best coffee in town', { reviewCount: 346 }),

  // —— herceg-novi ——
  place('herceg-novi-fine_dining-1', 'herceg-novi', 'fine_dining', 'Konoba Feral', 4.3, 'Vasa Ćukovića 4, Herceg Novi', '30년 넘게 전통 요리를 지켜온 헤르체그노비의 대표 코노바, 신선한 해산물 전문.', 'Herceg Novi\'s go-to konoba, preserving traditional recipes for over 30 years with impeccably fresh seafood.'),

  place('herceg-novi-bakery-1', 'herceg-novi', 'bakery', 'Peter\'s Pie & Coffee', 4.6, 'Šetalište Pet Danica 18A, Herceg Novi', '바다 전망 산책로에 위치한 헤르체그노비의 베이커리 카페, 매일 굽는 수제 사워도우로 유명', 'Herceg Novi bakery café on the seafront walkway, known for handmade sourdough baked daily'),
  place('herceg-novi-cafe-1', 'herceg-novi', 'cafe', 'Baguetteria', 4.0, 'Lazure Marina, Herceg Novi', '신선한 바게트와 크루아상으로 유명한 헤르체그노비의 베이커리 카페', 'Herceg Novi bakery café known for fresh baguettes and excellent croissants'),
]
