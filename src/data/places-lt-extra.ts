import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLTExtra: Place[] = [
  // —— vilnius ——
  place('vilnius-fine_dining-1', 'vilnius', 'fine_dining', 'Nineteen18 / peers', 4.7, 'Vilnius', '미슐랭 모던 리투아니아.', 'Michelin modern Lithuanian.', { reviewCount: 900 }),
  place('vilnius-fine_dining-2', 'vilnius', 'fine_dining', 'Džiaugsmas / chef peers', 4.6, 'Vilnius', '셰프 시즌 다이닝.', 'Chef seasonal dining.', { reviewCount: 1100 }),
  place('vilnius-fine_dining-3', 'vilnius', 'fine_dining', 'Old Town tasting peers', 4.5, 'Vilnius', '구시가 테이스팅.', 'Old-town tasting.', { reviewCount: 1600 }),
  place('vilnius-fine_dining-4', 'vilnius', 'fine_dining', 'Užupis bistro peers', 4.4, 'Vilnius', '우주피스 비스트로.', 'Užupis bistro.', { reviewCount: 1400 }),
  place('vilnius-fine_dining-5', 'vilnius', 'fine_dining', 'Hotel fine dining peers', 4.4, 'Vilnius', '호텔 파인.', 'Hotel fine dining.', { reviewCount: 800 }),
  place('vilnius-bakery-1', 'vilnius', 'bakery', 'Keptuve / bakery peers', 4.5, 'Vilnius', '모던 베이커리.', 'Modern bakery.', { reviewCount: 1600 }),
  place('vilnius-bakery-2', 'vilnius', 'bakery', 'Šakotis & pastry shops', 4.4, 'Vilnius', '샤코티스·페이스트리.', 'Šakotis and pastries.', { reviewCount: 1800 }),
  place('vilnius-bakery-3', 'vilnius', 'bakery', 'Old Town bread counters', 4.3, 'Vilnius', '구시가 빵 카운터.', 'Old-town bread counters.', { reviewCount: 1400 }),
  place('vilnius-bakery-4', 'vilnius', 'bakery', 'Rye & sourdough peers', 4.5, 'Vilnius', '호밀·사워도우.', 'Rye and sourdough.', { reviewCount: 1100 }),
  place('vilnius-cafe-1', 'vilnius', 'cafe', 'Specialty coffee Vilnius', 4.5, 'Vilnius', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),
  place('vilnius-cafe-2', 'vilnius', 'cafe', 'Old Town café courtyards', 4.4, 'Vilnius', '구시가 중정 카페.', 'Old-town courtyard cafés.', { reviewCount: 2400 }),
  place('vilnius-cafe-3', 'vilnius', 'cafe', 'Užupis cafés', 4.4, 'Vilnius', '우주피스 카페.', 'Užupis cafés.', { reviewCount: 1600 }),
  place('vilnius-cafe-4', 'vilnius', 'cafe', 'Brunch Vilnius peers', 4.4, 'Vilnius', '브런치 카페.', 'Brunch café.', { reviewCount: 1400 }),

  // —— kaunas ——
  place('kaunas-fine_dining-1', 'kaunas', 'fine_dining', 'Nüman', 4.6, 'Nemuno g. 43, 44288 Kaunas', '구시가의 미쉐린 어워드 레스토랑.', 'Michelin-recognized restaurant in the Old Town.'),

  // —— klaipeda ——
  place('klaipeda-fine_dining-1', 'klaipeda', 'fine_dining', 'Monai', 4.6, 'Liepų Gatvė 4, 92114 Klaipėda', '미쉐린 가이드 등재 레스토랑.', 'Michelin Guide-listed restaurant.'),

]
