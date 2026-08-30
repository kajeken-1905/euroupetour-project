import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLTExtra: Place[] = [
  // —— vilnius ——
  place('vilnius-fine_dining-1', 'vilnius', 'fine_dining', 'Nineteen18', 4.7, 'Vilnius', '미슐랭 모던 리투아니아.', 'Michelin modern Lithuanian.', { reviewCount: 900 }),
  place('vilnius-fine_dining-2', 'vilnius', 'fine_dining', 'Džiaugsmas', 4.6, 'Vilnius', '셰프 시즌 다이닝.', 'Chef seasonal dining.', { reviewCount: 1100 }),
  place('vilnius-bakery-1', 'vilnius', 'bakery', 'Keptuvė', 4.5, 'Vilnius', '모던 베이커리.', 'Modern bakery.', { reviewCount: 1600 }),
  place('vilnius-bakery-2', 'vilnius', 'bakery', 'Šakotis & pastry shops', 4.4, 'Vilnius', '샤코티스·페이스트리.', 'Šakotis and pastries.', { reviewCount: 1800 }),
  place('vilnius-bakery-3', 'vilnius', 'bakery', 'Old Town bread counters', 4.3, 'Vilnius', '구시가 빵 카운터.', 'Old-town bread counters.', { reviewCount: 1400 }),
  place('vilnius-cafe-1', 'vilnius', 'cafe', 'Specialty coffee Vilnius', 4.5, 'Vilnius', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),
  place('vilnius-cafe-2', 'vilnius', 'cafe', 'Old Town café courtyards', 4.4, 'Vilnius', '구시가 중정 카페.', 'Old-town courtyard cafés.', { reviewCount: 2400 }),
  place('vilnius-cafe-3', 'vilnius', 'cafe', 'Užupis cafés', 4.4, 'Vilnius', '우주피스 카페.', 'Užupis cafés.', { reviewCount: 1600 }),

  // —— kaunas ——
  place('kaunas-fine_dining-1', 'kaunas', 'fine_dining', 'Nüman', 4.6, 'Nemuno g. 43, 44288 Kaunas', '구시가의 미쉐린 어워드 레스토랑.', 'Michelin-recognized restaurant in the Old Town.'),
  place('kaunas-bakery-1', 'kaunas', 'bakery', 'Motiejaus kepyklėlė', 4.7, 'Vilniaus gatvė 7, 44280 Kaunas, Lithuania', '리투아니아 최고의 베이커리로 꼽히는 카우나스 구시가지의 명소', 'Widely regarded as one of the best bakeries in Lithuania, in Kaunas\'s Old Town'),
  place('kaunas-cafe-1', 'kaunas', 'cafe', 'Koffee Lab', 4.5, 'K. Donelaičio g. 60, 44248 Kaunas, Lithuania', '자체 로스팅 커피로 유명한 카우나스의 모던 카페', 'Modern Kaunas café known for its on-site roasted coffee'),

  // —— klaipeda ——
  place('klaipeda-fine_dining-1', 'klaipeda', 'fine_dining', 'Monai', 4.6, 'Liepų Gatvė 4, 92114 Klaipėda', '미쉐린 가이드 등재 레스토랑.', 'Michelin Guide-listed restaurant.'),

  place('klaipeda-bakery-1', 'klaipeda', 'bakery', 'Gardumėlis', 4.5, 'Sandėlių g. 15, Klaipėda, Lithuania', '밀푀유와 리투아니아 전통 키비나이로 유명한 클라이페다의 베이커리 카페', 'Klaipėda bakery café known for millefeuille pastries and traditional Lithuanian kibinai'),
  place('klaipeda-cafe-1', 'klaipeda', 'cafe', 'Vanilės namai', 4.5, 'H. Manto g. 9, Klaipėda, Lithuania', '강가 근처에 위치한 클라이페다의 매력적인 디저트 카페', 'Charming dessert café near the river in Klaipėda'),
]
