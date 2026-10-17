import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMEExtra: Place[] = [
  // —— kotor ——
  place('kotor-fine_dining-1', 'kotor', 'fine_dining', 'Galion', 'Njegoseva, 85339 Kotor, Montenegro', '코토르 마리나와 구시가 전망의 해산물 파인 다이닝.', 'Waterfront fine-dining restaurant with views of Kotor marina and the Old Town, known for seafood.'),
  place('kotor-fine_dining-2', 'kotor', 'fine_dining', 'Konoba Scala Santa', 'Stari Grad 295, Kotor', '1931년 문을 연 코토르의 해산물 식당.', 'Kotor seafood restaurant open since 1931.'),
  place('kotor-fine_dining-3', 'kotor', 'fine_dining', 'Konoba Cesarica', 'Stari Grad 375, Kotor', '현지 어부가 직접 잡은 해산물로 매일 메뉴가 바뀌는 가족 운영 코노바.', 'Family-run konoba whose menu changes daily with the owner-fisherman\'s fresh catch.'),

  place('kotor-bakery-2', 'kotor', 'bakery', 'Senso Bakery', 'Old Town 360, Kotor', '매우 구시가지의 베이커리.', 'Old Town bakery.'),
  place('kotor-bakery-3', 'kotor', 'bakery', 'Patisserie by Wine House', 'Stari Grad 488, Kotor', '구시가지의 파티세리.', 'Old Town patisserie.'),
  place('kotor-bakery-4', 'kotor', 'bakery', 'Sandrela Pekara / Bakery', 'Jadranska 76, Kotor', '코토르의 베이커리.', 'Bakery in Kotor.'),
  place('kotor-bakery-5', 'kotor', 'bakery', 'Dolce Boka', 'Ulica 2 (sjever-jug), Kotor', '코토르 제과점.', 'Bakery in Kotor.'),

  place('kotor-cafe-1', 'kotor', 'cafe', 'CAVE Coffee Specialty', 'TC Kamelija, Trg Mata Petrovića, 85330 Kotor, Montenegro', '코토르의 스페셜티 커피 기준점, 지역·해외 로스터리 원두 사용.', 'Kotor\'s benchmark for specialty coffee, sourcing beans from regional and international roasters.'),
  place('kotor-cafe-2', 'kotor', 'cafe', 'Forza Cafe', 'Armory square, 85330 Kotor, Montenegro', '구시가 중앙 광장의 카페. 모스크바 케이크가 있습니다.', 'Café on the Old Town’s main square with Moscow cake.'),

  // —— budva ——
  place('budva-fine_dining-1', 'budva', 'fine_dining', 'Rivijera Restaurant', '16 Njegoševa, Budva', '몬테네그로·지중해 해산물 요리를 내는 구시가의 식당.', 'Old Town restaurant serving Montenegrin and Mediterranean seafood.'),
  place('budva-fine_dining-2', 'budva', 'fine_dining', 'Jadran', 'Lovćenska, 86000 Budva, Montenegro', '매우 부드바의 해안가 해산물 레스토랑.', 'Beachfront seafood restaurant in Budva.', { image: '/places/budva-fine_dining-2.jpg' }),
  place('budva-fine_dining-3', 'budva', 'fine_dining', 'Pastabar', 'Petra I Petrovića, Old Town, 85310 Budva, Montenegro', '매우 부드바의 음식점.', 'Restaurant in Budva.'),
  place('budva-fine_dining-4', 'budva', 'fine_dining', 'Pera, Focaccia & Resto-Bar', '18 Vranjak, Budva', '부드바 이탈리아 레스토랑.', 'Italian restaurant in Budva.'),
  place('budva-fine_dining-5', 'budva', 'fine_dining', 'Piano Nobile', '7 Cara Dušana, Budva', '부드바의 스테이크 레스토랑.', 'Steak restaurant in Budva.'),
  place('budva-bakery-1', 'budva', 'bakery', 'Good Food Bakery', 'Nikole Tesle 34, 81350 Budva, Montenegro', '빵과 지역 특산품을 파는 부드바 중심가의 빵집.', 'Bakery on Budva’s main street with bread and local specialities.'),
  place('budva-bakery-2', 'budva', 'bakery', 'SKJAĆATA', '4 Stjepana Mitrova Ljubiše, Budva', '부드바 제과점.', 'Bakery in Budva.'),
  place('budva-bakery-3', 'budva', 'bakery', 'Branka Pastry Shop', '11 Mediteranska, Budva', '부드바의 패스트리숍.', 'Pastry shop in Budva.'),
  place('budva-bakery-4', 'budva', 'bakery', 'Cap Cap Bakery', '37 Mediteranska, Budva', '부드바의 제과점.', 'Bakery in Budva.'),
  place('budva-bakery-5', 'budva', 'bakery', 'Old Town Bakery', '22 Petra I Petrovića, Budva', '부드바 구시가지의 제과점.', 'Bakery in Budva\'s Old Town.'),
  place('budva-cafe-1', 'budva', 'cafe', 'Monteco Cafe', 'The Old Bakery Residences, 85310 Budva, Montenegro', '코워킹 공간이 있는 부드바의 커피 카페.', 'Budva coffee café with a co-working space.'),
  place('budva-cafe-2', 'budva', 'cafe', 'Caffe Fiorino Budva', '20 Stjepana Mitrova Ljubiše, Budva', '부드바의 카페.', 'Café in Budva.'),
  place('budva-cafe-3', 'budva', 'cafe', 'North Coffee Shop', 'Stefan Mitrov Ljubiša, 85313 Budva, Montenegro', '부드바 커피숍.', 'Coffee shop in Budva.'),
  place('budva-cafe-4', 'budva', 'cafe', 'Akacia Coffee Budva', '36 Blaža Jovanovića, Budva', '부드바의 커피숍.', 'Coffee shop in Budva.'),
  place('budva-cafe-5', 'budva', 'cafe', 'Peacock Coffee House', '54 Mainski put, Budva', '부드바의 커피숍.', 'Coffee shop in Budva.'),
  place('budva-korean-1', 'budva', 'korean', 'Korean Food Montenegro', 'Ulica 13. Jula 4, Budva', '한국 식재료를 직접 공수해 비빔밥·라면·김치 등을 선보이는 부드바의 정통 한식당.', 'Budva\'s authentic Korean kitchen serving bibimbap, ramen, and kimchi with ingredients sourced from Korea.'),

  // —— podgorica ——
  place('podgorica-fine_dining-1', 'podgorica', 'fine_dining', 'Konoba \'Lanterna\' Podgorica', 'Marka Miljanova 41, Podgorica', '1630년에 지어진 스타라 바로시 지구의 역사적 가옥에서 즐기는 전통 몬테네그로 요리.', 'Traditional Montenegrin cuisine served in a historic 1630 house in the Stara Varoš district.'),
  place('podgorica-fine_dining-2', 'podgorica', 'fine_dining', 'Pod Volat', 'Trg Vojvode Bećira Osmanagića 1, Podgorica', '포드고리차의 식당.', 'Restaurant in Podgorica.'),
  place('podgorica-fine_dining-3', 'podgorica', 'fine_dining', 'SPAGO', 'Radoja Dakića 35, Podgorica', '포드고리차 음식점.', 'Restaurant in Podgorica.'),
  place('podgorica-fine_dining-4', 'podgorica', 'fine_dining', 'Diplomat Restoran', 'Miljana Vukova 7, Podgorica', '포드고리차 음식점.', 'Restaurant in Podgorica.'),
  place('podgorica-fine_dining-5', 'podgorica', 'fine_dining', 'Restoran Protokol', 'Ulica Marka Đukanovića 1/1, Podgorica', '포드고리차 음식점.', 'Restaurant in Podgorica.'),
  place('podgorica-bakery-1', 'podgorica', 'bakery', 'Sicilia', 'Ivana Vujoševića 50, Podgorica, Montenegro', '페이스트리와 피자를 파는 포드고리차의 빵집 체인.', 'Podgorica bakery chain with pastries and pizza.'),
  place('podgorica-bakery-2', 'podgorica', 'bakery', 'Pekara BITE Bakery', 'Svetozara Markovića 31, Podgorica', '포드고리차의 제과점.', 'Bakery in Podgorica.'),
  place('podgorica-bakery-3', 'podgorica', 'bakery', 'Rod Artisan Bakery', 'Bulevar Peka Dapčevića 28, Podgorica', '포드고리차 아르티장 베이커리.', 'Artisan bakery in Podgorica.'),
  place('podgorica-cafe-1', 'podgorica', 'cafe', 'ZRNO', 'Rimski Trg 2, Podgorica', '포드고리차의 작은 커피 카페.', 'Small coffee café in Podgorica.'),
  place('podgorica-cafe-2', 'podgorica', 'cafe', 'BRIEF coffee & brunch', 'Filipa Bajkovića 9/1, Podgorica', '포드고리차의 카페.', 'Café in Podgorica.'),
  place('podgorica-cafe-3', 'podgorica', 'cafe', 'Oliva coffee', 'Trša Međedovića 26, Podgorica', '포드고리차의 커피숍.', 'Coffee shop in Podgorica.'),
  place('podgorica-cafe-4', 'podgorica', 'cafe', 'Coffee Circus Drži Prži', 'Vuka Karadžića 9, Podgorica', '포드고리차 커피숍.', 'Coffee shop in Podgorica.'),

  // —— herceg-novi ——
  place('herceg-novi-fine_dining-1', 'herceg-novi', 'fine_dining', 'Konoba Feral', 'Vasa Ćukovića 4, Herceg Novi', '해산물을 내는 헤르체그노비의 코노바.', 'Herceg Novi konoba serving seafood.'),
  place('herceg-novi-fine_dining-2', 'herceg-novi', 'fine_dining', 'Amber restaurant', 'Njegoševa, 85347 Herceg Novi, Montenegro', '헤르체그노비 음식점.', 'Restaurant in Herceg Novi.'),
  place('herceg-novi-fine_dining-3', 'herceg-novi', 'fine_dining', 'Tri Lipe', 'Stepenište Iva Andrića 28, Herceg Novi', '매우 헤르체그노비의 음식점.', 'Restaurant in Herceg Novi.'),
  place('herceg-novi-fine_dining-4', 'herceg-novi', 'fine_dining', 'Konoba Kruso Herceg Novi', 'Šetalište 5. Danica, 85340 Herceg Novi, Montenegro', '헤르체그노비의 지중해 요리 코노바.', 'Mediterranean-cuisine konoba in Herceg Novi.'),

  place('herceg-novi-bakery-1', 'herceg-novi', 'bakery', 'Peter\'s Pie & Coffee', 'Šetalište Pet Danica 18A, Herceg Novi', '바닷가 산책로의 빵집 겸 카페. 매일 사워도우를 굽습니다.', 'Bakery café on the seafront promenade, baking sourdough daily.'),
  place('herceg-novi-bakery-3', 'herceg-novi', 'bakery', 'Pekara Poslastičarnica TAJNA', '52 Njegoševa, Herceg Novi', '헤르체그노비의 제과점.', 'Bakery in Herceg Novi.'),
  place('herceg-novi-cafe-2', 'herceg-novi', 'cafe', 'Do-Do Café', '36 Šetalište Pet Danica, Herceg Novi', '매우 헤르체그노비의 카페.', 'Café in Herceg Novi.'),
  place('herceg-novi-cafe-3', 'herceg-novi', 'cafe', 'FABRIKA COFFEE Herceg Novi', '13 Njegoševa, Herceg Novi', '헤르체그노비의 커피숍.', 'Coffee shop in Herceg Novi.'),
  place('herceg-novi-cafe-4', 'herceg-novi', 'cafe', 'Koffein Specialty coffee shop', '2 Stepeniste 28 oktobra, Herceg Novi', '헤르체그노비의 스페셜티 커피숍.', 'Specialty coffee shop in Herceg Novi.'),
  place('herceg-novi-cafe-5', 'herceg-novi', 'cafe', 'Coffee Novi', '106 Njegoševa, Herceg Novi', '헤르체그노비의 커피숍.', 'Coffee shop in Herceg Novi.'),
]
