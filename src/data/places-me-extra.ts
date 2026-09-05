import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMEExtra: Place[] = [
  // —— kotor ——
  place('kotor-fine_dining-1', 'kotor', 'fine_dining', 'Galion', 4.2, 'Šuranj bb, Kotor', '코토르 마리나와 구시가 전망의 해산물 파인 다이닝.', 'Waterfront fine-dining restaurant with views of Kotor marina and the Old Town, known for seafood.', { reviewCount: 1200 }),
  place('kotor-fine_dining-2', 'kotor', 'fine_dining', 'Konoba Scala Santa', 4.4, 'Stari Grad 295, Kotor', '1931년 개업한 코토르에서 가장 오래된 레스토랑, 신선한 해산물 요리.', 'Kotor\'s oldest restaurant, open since 1931, known for fresh fish and seafood.', { reviewCount: 3183 }),
  place('kotor-fine_dining-3', 'kotor', 'fine_dining', 'Konoba Cesarica', 4.3, 'Stari Grad 375, Kotor', '현지 어부가 직접 잡은 해산물로 매일 메뉴가 바뀌는 가족 운영 코노바.', 'Family-run konoba whose menu changes daily with the owner-fisherman\'s fresh catch.'),

  place('kotor-bakery-1', 'kotor', 'bakery', 'Pekara Vrmac', 4.8, 'Škaljari, Kotor', '구시가 북문 인근의 전통 베이커리, 부렉·소시지롤·크림파이로 인기.', 'Traditional bakery near the Old Town\'s North Gate, popular for burek, sausage rolls, and cream pies.'),
  place('kotor-bakery-2', 'kotor', 'bakery', 'Senso Bakery', 4.9, 'Old Town 360, Kotor', '매우 많은 리뷰를 받은 구시가지의 베이커리.', 'Old Town bakery with an exceptionally large number of reviews.', { reviewCount: 2731 }),
  place('kotor-bakery-3', 'kotor', 'bakery', 'Patisserie by Wine House', 4.8, 'Stari Grad 488, Kotor', '많은 리뷰를 받은 구시가지의 파티세리.', 'Old Town patisserie with a large number of reviews.', { reviewCount: 685 }),
  place('kotor-bakery-4', 'kotor', 'bakery', 'Sandrela Pekara / Bakery', 4.8, 'Jadranska 76, Kotor', '많은 리뷰를 받은 코토르의 베이커리.', 'Bakery in Kotor with a large number of reviews.', { reviewCount: 681 }),
  place('kotor-bakery-5', 'kotor', 'bakery', 'Dolce Boka', 4.9, 'Ulica 2 (sjever-jug), Kotor', '높은 평점의 코토르 제과점.', 'Highly rated bakery in Kotor.', { reviewCount: 89 }),

  place('kotor-cafe-1', 'kotor', 'cafe', 'CAVE Coffee Specialty', 4.9, 'TC Kamelija, Square Mata Petrovića, Kotor', '코토르의 스페셜티 커피 기준점, 지역·해외 로스터리 원두 사용.', 'Kotor\'s benchmark for specialty coffee, sourcing beans from regional and international roasters.', { reviewCount: 700 }),
  place('kotor-cafe-2', 'kotor', 'cafe', 'Forza Cafe', 3.7, 'Square of the Arms, Kotor', '구시가 중심 광장의 카페, 모스크바 케이크로 유명.', 'Café on the Old Town\'s main square, famous for its Moscow cake.'),

  // —— budva ——
  place('budva-fine_dining-1', 'budva', 'fine_dining', 'Rivijera Restaurant', 4.6, '16 Njegoševa, Budva', '구시가의 전통 몬테네그로 요리, 해산물·지중해 요리로 인기.', 'Restaurant in the Old Town popular for Montenegrin and Mediterranean seafood dishes.'),
  place('budva-fine_dining-2', 'budva', 'fine_dining', 'Jadran', 4.3, 'Slovenska Obala, Budva', '매우 많은 리뷰를 받은 부드바의 해안가 해산물 레스토랑.', 'Beachfront seafood restaurant in Budva with an exceptionally large number of reviews.', { reviewCount: 8124 }),
  place('budva-fine_dining-3', 'budva', 'fine_dining', 'Pastabar', 4.6, 'Petra I Petrovića, Budva', '매우 많은 리뷰를 받은 부드바의 음식점.', 'Restaurant in Budva with an exceptionally large number of reviews.', { reviewCount: 2190 }),
  place('budva-fine_dining-4', 'budva', 'fine_dining', 'Pera, Focaccia & Resto-Bar', 4.9, '18 Vranjak, Budva', '높은 평점의 부드바 이탈리아 레스토랑.', 'Highly rated Italian restaurant in Budva.', { reviewCount: 1439 }),
  place('budva-fine_dining-5', 'budva', 'fine_dining', 'Piano Nobile', 4.5, '7 Cara Dušana, Budva', '많은 리뷰를 받은 부드바의 스테이크 레스토랑.', 'Steak restaurant in Budva with a large number of reviews.', { reviewCount: 1163 }),
  place('budva-bakery-1', 'budva', 'bakery', 'Good Food Bakery', 5.0, 'Jadranski put bb, Budva', '부드바 중심가에서 훌륭한 빵과 로컬 특산품으로 유명한 베이커리', 'Bakery on Budva\'s main street known for excellent bread and local specialities'),
  place('budva-bakery-2', 'budva', 'bakery', 'SKJAĆATA', 5.0, '4 Stjepana Mitrova Ljubiše, Budva', '만점 평점의 부드바 제과점.', 'Perfectly rated bakery in Budva.', { reviewCount: 178 }),
  place('budva-bakery-3', 'budva', 'bakery', 'Branka Pastry Shop', 4.6, '11 Mediteranska, Budva', '많은 리뷰를 받은 부드바의 패스트리숍.', 'Pastry shop in Budva with a large number of reviews.', { reviewCount: 485 }),
  place('budva-bakery-4', 'budva', 'bakery', 'Cap Cap Bakery', 4.5, '37 Mediteranska, Budva', '많은 리뷰를 받은 부드바의 제과점.', 'Bakery in Budva with a large number of reviews.', { reviewCount: 152 }),
  place('budva-bakery-5', 'budva', 'bakery', 'Old Town Bakery', 4.4, '22 Petra I Petrovića, Budva', '부드바 구시가지의 제과점.', 'Bakery in Budva\'s Old Town.', { reviewCount: 104 }),
  place('budva-cafe-1', 'budva', 'cafe', 'Monteco Cafe', 5.0, 'The Old Bakery Residences, Budva', '부드바 최고의 커피와 코워킹 공간을 갖춘 카페', 'Budva café known for its great coffee and co-working space'),
  place('budva-cafe-2', 'budva', 'cafe', 'Caffe Fiorino Budva', 4.8, '20 Stjepana Mitrova Ljubiše, Budva', '많은 리뷰를 받은 부드바의 카페.', 'Café in Budva with a large number of reviews.', { reviewCount: 777 }),
  place('budva-cafe-3', 'budva', 'cafe', 'North Coffee Shop', 4.9, 'Stjepana Mitrova Ljubiše, Budva', '높은 평점의 부드바 커피숍.', 'Highly rated coffee shop in Budva.', { reviewCount: 658 }),
  place('budva-cafe-4', 'budva', 'cafe', 'Akacia Coffee Budva', 4.7, '36 Blaža Jovanovića, Budva', '많은 리뷰를 받은 부드바의 커피숍.', 'Coffee shop in Budva with a large number of reviews.', { reviewCount: 440 }),
  place('budva-cafe-5', 'budva', 'cafe', 'Peacock Coffee House', 4.8, '54 Mainski put, Budva', '많은 리뷰를 받은 부드바의 커피숍.', 'Coffee shop in Budva with a large number of reviews.', { reviewCount: 404 }),
  place('budva-korean-1', 'budva', 'korean', 'Korean Food Montenegro', 4.1, 'Ulica 13. Jula 4, Budva', '한국 식재료를 직접 공수해 비빔밥·라면·김치 등을 선보이는 부드바의 정통 한식당.', 'Budva\'s authentic Korean kitchen serving bibimbap, ramen, and kimchi with ingredients sourced from Korea.'),

  // —— podgorica ——
  place('podgorica-fine_dining-1', 'podgorica', 'fine_dining', 'Konoba \'Lanterna\' Podgorica', 4.5, 'Marka Miljanova 41, Podgorica', '1630년에 지어진 스타라 바로시 지구의 역사적 가옥에서 즐기는 전통 몬테네그로 요리.', 'Traditional Montenegrin cuisine served in a historic 1630 house in the Stara Varoš district.'),
  place('podgorica-fine_dining-2', 'podgorica', 'fine_dining', 'Pod Volat', 4.3, 'Trg Vojvode Bećira Osmanagića 1, Podgorica', '매우 많은 리뷰를 받은 포드고리차의 대표 음식점.', 'Podgorica institution with an exceptionally large number of reviews.', { reviewCount: 4311 }),
  place('podgorica-fine_dining-3', 'podgorica', 'fine_dining', 'SPAGO', 4.8, 'Radoja Dakića 35, Podgorica', '높은 평점의 포드고리차 음식점.', 'Highly rated restaurant in Podgorica.', { reviewCount: 1877 }),
  place('podgorica-fine_dining-4', 'podgorica', 'fine_dining', 'Diplomat Restoran', 4.8, 'Miljana Vukova 7, Podgorica', '높은 평점의 포드고리차 음식점.', 'Highly rated restaurant in Podgorica.', { reviewCount: 737 }),
  place('podgorica-fine_dining-5', 'podgorica', 'fine_dining', 'Restoran Protokol', 4.9, 'Ulica Marka Đukanovića 1/1, Podgorica', '만점에 가까운 평점의 포드고리차 음식점.', 'Near-perfectly rated restaurant in Podgorica.', { reviewCount: 712 }),
  place('podgorica-bakery-1', 'podgorica', 'bakery', 'Sicilia', 3.9, 'Ivana Vujoševića 50, Podgorica, Montenegro', '훌륭한 페이스트리와 피자로 유명한 포드고리차의 인기 베이커리 체인', 'Popular Podgorica bakery chain known for excellent pastries and pizza'),
  place('podgorica-bakery-2', 'podgorica', 'bakery', 'Pekara BITE Bakery', 4.3, 'Svetozara Markovića 31, Podgorica', '포드고리차의 제과점.', 'Bakery in Podgorica.', { reviewCount: 135 }),
  place('podgorica-bakery-3', 'podgorica', 'bakery', 'Rod Artisan Bakery', 5.0, 'Bulevar Peka Dapčevića 28, Podgorica', '만점 평점의 포드고리차 아르티장 베이커리.', 'Perfectly rated artisan bakery in Podgorica.', { reviewCount: 43 }),
  place('podgorica-bakery-4', 'podgorica', 'bakery', 'GIGI pancakes', 4.9, 'Moskovska, Podgorica', '높은 평점의 포드고리차 팬케이크 전문점.', 'Highly rated pancake specialist in Podgorica.', { reviewCount: 222 }),
  place('podgorica-cafe-1', 'podgorica', 'cafe', 'ZRNO', 4.4, 'Rimski Trg 2, Podgorica', '포드고리차 최고의 커피로 유명한 아담한 카페', 'Small Podgorica café known for the best coffee in town', { reviewCount: 346 }),
  place('podgorica-cafe-2', 'podgorica', 'cafe', 'BRIEF coffee & brunch', 4.7, 'Filipa Bajkovića 9/1, Podgorica', '많은 리뷰를 받은 포드고리차의 카페.', 'Café in Podgorica with a large number of reviews.', { reviewCount: 405 }),
  place('podgorica-cafe-3', 'podgorica', 'cafe', 'Oliva coffee', 4.7, 'Trša Međedovića 26, Podgorica', '많은 리뷰를 받은 포드고리차의 커피숍.', 'Coffee shop in Podgorica with a large number of reviews.', { reviewCount: 355 }),
  place('podgorica-cafe-4', 'podgorica', 'cafe', 'Coffee Circus Drži Prži', 5.0, 'Vuka Karadžića 9, Podgorica', '만점 평점의 포드고리차 커피숍.', 'Perfectly rated coffee shop in Podgorica.', { reviewCount: 165 }),

  // —— herceg-novi ——
  place('herceg-novi-fine_dining-1', 'herceg-novi', 'fine_dining', 'Konoba Feral', 4.3, 'Vasa Ćukovića 4, Herceg Novi', '30년 넘게 전통 요리를 지켜온 헤르체그노비의 대표 코노바, 신선한 해산물 전문.', 'Herceg Novi\'s go-to konoba, preserving traditional recipes for over 30 years with impeccably fresh seafood.'),
  place('herceg-novi-fine_dining-2', 'herceg-novi', 'fine_dining', 'Amber restaurant', 4.9, 'Mića Vavića bb, Herceg Novi', '높은 평점의 헤르체그노비 음식점.', 'Highly rated restaurant in Herceg Novi.', { reviewCount: 1167 }),
  place('herceg-novi-fine_dining-3', 'herceg-novi', 'fine_dining', 'Tri Lipe', 4.5, 'Stepenište Iva Andrića 28, Herceg Novi', '매우 많은 리뷰를 받은 헤르체그노비의 음식점.', 'Restaurant in Herceg Novi with an exceptionally large number of reviews.', { reviewCount: 2155 }),
  place('herceg-novi-fine_dining-4', 'herceg-novi', 'fine_dining', 'Konoba Kruso Herceg Novi', 4.5, 'Šetalište Pet Danica, Herceg Novi', '많은 리뷰를 받은 헤르체그노비의 지중해 요리 코노바.', 'Mediterranean-cuisine konoba in Herceg Novi with a large number of reviews.', { reviewCount: 1321 }),
  place('herceg-novi-fine_dining-5', 'herceg-novi', 'fine_dining', 'Konoba Kaleta Karaca', 4.9, 'Stari Grad, Herceg Novi', '높은 평점의 헤르체그노비 구시가지 코노바.', 'Highly rated konoba in Herceg Novi\'s Old Town.', { reviewCount: 441 }),

  place('herceg-novi-bakery-1', 'herceg-novi', 'bakery', 'Peter\'s Pie & Coffee', 4.6, 'Šetalište Pet Danica 18A, Herceg Novi', '바다 전망 산책로에 위치한 헤르체그노비의 베이커리 카페, 매일 굽는 수제 사워도우로 유명', 'Herceg Novi bakery café on the seafront walkway, known for handmade sourdough baked daily'),
  place('herceg-novi-bakery-2', 'herceg-novi', 'bakery', 'PEKARELA', 4.7, 'Jadranska magistrala, Herceg Novi', '많은 리뷰를 받은 헤르체그노비의 제과점.', 'Bakery in Herceg Novi with a large number of reviews.', { reviewCount: 159 }),
  place('herceg-novi-bakery-3', 'herceg-novi', 'bakery', 'Pekara Poslastičarnica TAJNA', 4.5, '52 Njegoševa, Herceg Novi', '헤르체그노비의 제과점.', 'Bakery in Herceg Novi.', { reviewCount: 75 }),
  place('herceg-novi-cafe-1', 'herceg-novi', 'cafe', 'Baguetteria', 4.0, 'Lazure Marina, Herceg Novi', '신선한 바게트와 크루아상으로 유명한 헤르체그노비의 베이커리 카페', 'Herceg Novi bakery café known for fresh baguettes and excellent croissants'),
  place('herceg-novi-cafe-2', 'herceg-novi', 'cafe', 'Do-Do Café', 4.7, '36 Šetalište Pet Danica, Herceg Novi', '매우 많은 리뷰를 받은 헤르체그노비의 카페.', 'Café in Herceg Novi with an exceptionally large number of reviews.', { reviewCount: 1533 }),
  place('herceg-novi-cafe-3', 'herceg-novi', 'cafe', 'FABRIKA COFFEE Herceg Novi', 4.7, '13 Njegoševa, Herceg Novi', '많은 리뷰를 받은 헤르체그노비의 커피숍.', 'Coffee shop in Herceg Novi with a large number of reviews.', { reviewCount: 379 }),
  place('herceg-novi-cafe-4', 'herceg-novi', 'cafe', 'Koffein Specialty coffee shop', 4.8, '2 Stepeniste 28 oktobra, Herceg Novi', '많은 리뷰를 받은 헤르체그노비의 스페셜티 커피숍.', 'Specialty coffee shop in Herceg Novi with a large number of reviews.', { reviewCount: 324 }),
  place('herceg-novi-cafe-5', 'herceg-novi', 'cafe', 'Coffee Novi', 4.8, '106 Njegoševa, Herceg Novi', '많은 리뷰를 받은 헤르체그노비의 커피숍.', 'Coffee shop in Herceg Novi with a large number of reviews.', { reviewCount: 293 }),
]
