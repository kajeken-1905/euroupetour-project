import { place } from './placeFactory'
import type { Place } from '../types'

export const placesNLExtra: Place[] = [
  // —— rotterdam ——
  place('rotterdam-fine_dining-1', 'rotterdam', 'fine_dining', 'Parkheuvel', 4.6, 'Heuvellaan 21, 3016 GL Rotterdam', '항구 전망의 미쉐린 2스타 레스토랑, 클래식 프렌치 요리.', 'Two-Michelin-star harbor-view restaurant known for classic French finesse.'),
  place('rotterdam-fine_dining-2', 'rotterdam', 'fine_dining', 'FG Restaurant', 4.3, 'Katshoek 37b, 3032 AE Rotterdam', '로테르담을 미식 지도에 올린 미쉐린 2스타 테이스팅 메뉴 레스토랑.', 'Two-Michelin-star tasting-menu restaurant that put Rotterdam on the fine-dining map.'),
  place('rotterdam-fine_dining-3', 'rotterdam', 'fine_dining', 'Zeezout', 4.6, 'Westerkade 11b, 3016 CL Rotterdam', '마스강변의 미쉐린 스타 시푸드 레스토랑.', 'Michelin-starred seafood restaurant on the Maas riverside.', { reviewCount: 1493 }),
  place('rotterdam-fine_dining-4', 'rotterdam', 'fine_dining', 'Amarone', 4.4, 'Meent 72A, Rotterdam', '클래식 프렌치와 일식의 감각을 더한 미쉐린 스타 레스토랑.', 'Michelin-starred restaurant blending classic French technique with subtle Japanese influences.'),
  place('rotterdam-fine_dining-5', 'rotterdam', 'fine_dining', 'Fred', 4.5, 'Honingerdijk 263-265, 3063 AM Rotterdam', '테이블사이드 치즈 카트와 샴페인 서비스로 유명한 마스강 전망의 미쉐린 2스타 레스토랑.', 'Two-Michelin-star Maas-view restaurant famous for its tableside cheese cart and champagne service.'),

  place('rotterdam-bakery-1', 'rotterdam', 'bakery', 'Jan Bussing', 4.8, 'Van Vollenhovenstraat 48a, 3016 BJ Rotterdam', '로테르담 최고로 꼽히는 프렌치풍 전통 베이커리.', 'Widely regarded as Rotterdam\'s best bakery, a traditional French-style boulangerie.'),

  place('rotterdam-cafe-1', 'rotterdam', 'cafe', 'Man Met Bril Koffie', 4.5, 'Vijverhofstraat 70, Rotterdam', '직접 로스팅한 원두로 유명한 로테르담-노르드의 스페셜티 카페.', 'Rotterdam-Noord specialty café known for its on-site-roasted coffee.', { reviewCount: 981 }),

  place('rotterdam-korean-1', 'rotterdam', 'korean', 'Seoul Sista', 4.3, 'Hartmansstraat 31, 3012 VA Rotterdam', '테이블 그릴이 갖춰진 로테르담의 대표 한국식 바비큐.', 'Rotterdam\'s best-known Korean BBQ spot, with tabletop grills built into every table.', { reviewCount: 2636 }),
  place('rotterdam-korean-2', 'rotterdam', 'korean', 'Bap Boss', 4.4, 'Goudsesingel 26, 3011 KB Rotterdam', '닭강정으로 호평받는 2018년 개업 한식당.', 'Korean restaurant open since 2018, praised for its dak-gangjeong (Korean fried chicken).', { reviewCount: 614 }),

  // —— the-hague ——
  place('the-hague-fine_dining-1', 'the-hague', 'fine_dining', 'Restaurant Flair', 4.6, 'The Hague', '모던 파인 다이닝.', 'Modern fine dining.', { reviewCount: 720 }),
  place('the-hague-fine_dining-2', 'the-hague', 'fine_dining', 'The Amusement', 4.5, 'The Hague', '창의 코스.', 'Creative courses.', { reviewCount: 580 }),
  place('the-hague-fine_dining-3', 'the-hague', 'fine_dining', 'Restaurant Oever', 4.5, 'The Hague', '시즌 다이닝.', 'Seasonal dining.', { reviewCount: 640 }),
  place('the-hague-fine_dining-4', 'the-hague', 'fine_dining', 'Bougainville', 4.4, 'The Hague', '클래식 다이닝.', 'Classic dining.', { reviewCount: 860 }),
  place('the-hague-fine_dining-5', 'the-hague', 'fine_dining', 'Catch by Simonis', 4.4, 'Scheveningen', '시푸드.', 'Seafood.', { reviewCount: 1600 }),
  place('the-hague-bakery-1', 'the-hague', 'bakery', 'Boulangerie Collin', 4.5, 'The Hague', '프렌치 베이커리.', 'French bakery.', { reviewCount: 980 }),
  place('the-hague-bakery-2', 'the-hague', 'bakery', 'Warmoes bakery', 4.4, 'The Hague', '로컬 브레드.', 'Local breads.', { reviewCount: 620 }),
  place('the-hague-bakery-5', 'the-hague', 'bakery', 'Bakker van der Zoete', 4.3, 'The Hague', '전통 베이커리.', 'Traditional bakery.', { reviewCount: 800 }),
  place('the-hague-cafe-1', 'the-hague', 'cafe', 'Hooked Coffee', 4.5, 'The Hague', '스페셜티.', 'Specialty.', { reviewCount: 1100 }),
  place('the-hague-cafe-2', 'the-hague', 'cafe', 'Café August', 4.4, 'The Hague', '브런치.', 'Brunch.', { reviewCount: 980 }),
  place('the-hague-cafe-3', 'the-hague', 'cafe', 'Va konz Coffee', 4.5, 'The Hague', '로스터리.', 'Roastery.', { reviewCount: 860 }),
  place('the-hague-cafe-4', 'the-hague', 'cafe', 'The Coffee Company', 4.3, 'The Hague', '캐주얼.', 'Casual.', { reviewCount: 1400 }),

  // —— utrecht ——
  place('utrecht-fine_dining-1', 'utrecht', 'fine_dining', 'Restaurant Blauw', 4.5, 'Utrecht', '인니·모던 다이닝 감성.', 'Modern Indonesian dining.', { reviewCount: 1600 }),
  place('utrecht-fine_dining-2', 'utrecht', 'fine_dining', 'Karel 5', 4.5, 'Utrecht', '호텔 파인 다이닝.', 'Hotel fine dining.', { reviewCount: 860 }),
  place('utrecht-fine_dining-4', 'utrecht', 'fine_dining', 'De Rechtbank', 4.4, 'Utrecht', '로컬 인기.', 'Local favourite.', { reviewCount: 1100 }),
  place('utrecht-fine_dining-5', 'utrecht', 'fine_dining', 'Ledig Erf', 4.3, 'Utrecht', '운하 테라스.', 'Canal terrace.', { reviewCount: 1800 }),
  place('utrecht-bakery-1', 'utrecht', 'bakery', 'Brood & Zo', 4.5, 'Utrecht', '로컬 베이커리.', 'Local bakery.', { reviewCount: 860 }),
  place('utrecht-bakery-3', 'utrecht', 'bakery', 'Le Pain Quotidien Utrecht', 4.3, 'Utrecht', '베이커리 카페.', 'Bakery café.', { reviewCount: 1200 }),
  place('utrecht-cafe-1', 'utrecht', 'cafe', 'Coffee Bru', 4.5, 'Utrecht', '스페셜티.', 'Specialty.', { reviewCount: 1100 }),
  place('utrecht-cafe-2', 'utrecht', 'cafe', 'Koffie Leute', 4.4, 'Utrecht', '캐주얼.', 'Casual.', { reviewCount: 860 }),
  place('utrecht-cafe-4', 'utrecht', 'cafe', 'Broei', 4.4, 'Utrecht', '브런치.', 'Brunch.', { reviewCount: 980 }),
  place('utrecht-cafe-5', 'utrecht', 'cafe', 'Cartier Café', 4.3, 'Utrecht', '운하 카페.', 'Canal café.', { reviewCount: 1400 }),

  // —— haarlem ——
  place('haarlem-fine_dining-1', 'haarlem', 'fine_dining', 'Restaurant Mr. & Mrs.', 4.6, 'Haarlem', '미슐랭 다이닝.', 'Michelin dining.', { reviewCount: 860 }),
  place('haarlem-fine_dining-2', 'haarlem', 'fine_dining', 'De Brandende Braam', 4.5, 'Haarlem', '모던 다이닝.', 'Modern dining.', { reviewCount: 640 }),
  place('haarlem-fine_dining-3', 'haarlem', 'fine_dining', 'Specktakel', 4.4, 'Haarlem', '월드 퀴진.', 'World cuisine.', { reviewCount: 1200 }),
  place('haarlem-fine_dining-4', 'haarlem', 'fine_dining', 'Stempels', 4.4, 'Haarlem', '호텔 다이닝.', 'Hotel dining.', { reviewCount: 720 }),
  place('haarlem-fine_dining-5', 'haarlem', 'fine_dining', 'De Hooybergh', 4.3, 'Haarlem', '로컬.', 'Local.', { reviewCount: 580 }),
  place('haarlem-bakery-1', 'haarlem', 'bakery', 'Banketbakkerij IJsvogel', 4.5, 'Haarlem', '파티세리.', 'Patisserie.', { reviewCount: 980 }),
  place('haarlem-bakery-2', 'haarlem', 'bakery', 'Broodboerderij', 4.4, 'Haarlem', '브레드.', 'Breads.', { reviewCount: 640 }),
  place('haarlem-bakery-4', 'haarlem', 'bakery', 'Jutka & Riska bakery café', 4.4, 'Haarlem', '카페 베이크.', 'Café bakes.', { reviewCount: 860 }),
  place('haarlem-cafe-1', 'haarlem', 'cafe', 'Coffee Lounge Haarlem', 4.4, 'Haarlem', '카페.', 'Café.', { reviewCount: 1100 }),
  place('haarlem-cafe-2', 'haarlem', 'cafe', 'SPØK Haarlem coffee', 4.5, 'Haarlem', '스페셜티.', 'Specialty.', { reviewCount: 720 }),
  place('haarlem-cafe-3', 'haarlem', 'cafe', 'Café Brinkmann', 4.3, 'Haarlem', '광장 카페.', 'Square café.', { reviewCount: 1600 }),
  place('haarlem-cafe-4', 'haarlem', 'cafe', 'Anne&Max Haarlem', 4.3, 'Haarlem', '캐주얼.', 'Casual.', { reviewCount: 980 }),

  // —— delft ——
  place('delft-fine_dining-1', 'delft', 'fine_dining', 'Kek', 4.4, 'Delft', '브런치·라이트 다이닝.', 'Brunch and light dining.', { reviewCount: 1200 }),
  place('delft-fine_dining-3', 'delft', 'fine_dining', 'De Waag', 4.3, 'Delft', '역사 건물 식당.', 'Historic building restaurant.', { reviewCount: 1100 }),
  place('delft-fine_dining-4', 'delft', 'fine_dining', 'Restaurant Aan de Oude Delft', 4.4, 'Delft', '운하뷰.', 'Canal views.', { reviewCount: 720 }),
  place('delft-bakery-2', 'delft', 'bakery', 'Bakkerij Voorhuis', 4.4, 'Delft', '로컬 베이커리.', 'Local bakery.', { reviewCount: 780 }),
  place('delft-cafe-1', 'delft', 'cafe', 'Koffiehuis de Waag', 4.3, 'Delft', '클래식 카페.', 'Classic café.', { reviewCount: 1400 }),
  place('delft-cafe-2', 'delft', 'cafe', 'Kek Delft', 4.5, 'Delft', '인기 카페.', 'Popular café.', { reviewCount: 1600 }),
  place('delft-cafe-3', 'delft', 'cafe', 'Coffee & Cookies Delft', 4.3, 'Delft', '캐주얼.', 'Casual.', { reviewCount: 720 }),

  // —— maastricht ——
  place('maastricht-fine_dining-1', 'maastricht', 'fine_dining', 'Château Neercanne', 4.6, 'Vondopfflaan 798, 6213 NG Maastricht', '17세기 성의 미쉐린 레스토랑.', 'Michelin restaurant in a 17th-century château.'),
  place('maastricht-fine_dining-2', 'maastricht', 'fine_dining', 'Restaurant Beluga Loves You', 4.7, 'Maastricht', '미슐랭 파인 다이닝.', 'Michelin fine dining.', { reviewCount: 980 }),
  place('maastricht-fine_dining-3', 'maastricht', 'fine_dining', 'Tout à Fait', 4.6, 'Maastricht', '프렌치 다이닝.', 'French dining.', { reviewCount: 720 }),
  place('maastricht-fine_dining-4', 'maastricht', 'fine_dining', 'Restaurant Petit Bonheur', 4.5, 'Maastricht', '아늑한 파인 다이닝.', 'Intimate fine dining.', { reviewCount: 640 }),
  place('maastricht-fine_dining-5', 'maastricht', 'fine_dining', 'Nur', 4.5, 'Maastricht', '모던 다이닝.', 'Modern dining.', { reviewCount: 580 }),
  place('maastricht-bakery-1', 'maastricht', 'bakery', 'Bisschopsmolen', 4.6, 'Maastricht', '역사적 제분소 베이커리.', 'Historic mill bakery.', { reviewCount: 1800 }),
  place('maastricht-cafe-1', 'maastricht', 'cafe', 'Coffee Lounge Maastricht', 4.4, 'Maastricht', '카페.', 'Café.', { reviewCount: 960 }),
  place('maastricht-cafe-2', 'maastricht', 'cafe', 'Café Zuid', 4.3, 'Maastricht', '캐주얼.', 'Casual.', { reviewCount: 1100 }),

  // —— giethoorn ——
  place('giethoorn-fine_dining-1', 'giethoorn', 'fine_dining', 'Restaurant De Lindenhof', 4.7, 'Giethoorn', '미슐랭 다이닝(근교 포함).', 'Michelin dining (area).', { reviewCount: 860 }),
  place('giethoorn-fine_dining-2', 'giethoorn', 'fine_dining', 'Restaurant Franssen', 4.4, 'Giethoorn', '로컬 시푸드·더치.', 'Local seafood and Dutch.', { reviewCount: 720 }),
  place('giethoorn-cafe-1', 'giethoorn', 'cafe', 'Café Fanfare', 4.3, 'Giethoorn', '영화로도 유명한 카페.', 'Café known from film fame.', { reviewCount: 1600 }),

]
