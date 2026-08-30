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
  place('kaunas-fine_dining-1', 'kaunas', 'fine_dining', 'Kaunas Fine Dining 1', 4.5, 'Kaunas', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('kaunas-fine_dining-2', 'kaunas', 'fine_dining', 'Kaunas Fine Dining 2', 4.4, 'Kaunas', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('kaunas-fine_dining-3', 'kaunas', 'fine_dining', 'Kaunas Fine Dining 3', 4.3, 'Kaunas', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('kaunas-fine_dining-4', 'kaunas', 'fine_dining', 'Kaunas Bistro', 4.3, 'Kaunas', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('kaunas-fine_dining-5', 'kaunas', 'fine_dining', 'Kaunas Chef\'s Table', 4.4, 'Kaunas', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('kaunas-bakery-1', 'kaunas', 'bakery', 'Kaunas Bakery', 4.5, 'Kaunas', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('kaunas-bakery-2', 'kaunas', 'bakery', 'Kaunas Patisserie', 4.4, 'Kaunas', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('kaunas-bakery-3', 'kaunas', 'bakery', 'Kaunas Bread House', 4.3, 'Kaunas', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('kaunas-bakery-4', 'kaunas', 'bakery', 'Café Bakery Kaunas', 4.3, 'Kaunas', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('kaunas-cafe-1', 'kaunas', 'cafe', 'Specialty Coffee Kaunas', 4.5, 'Kaunas', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('kaunas-cafe-2', 'kaunas', 'cafe', 'Old Town Café Kaunas', 4.4, 'Kaunas', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('kaunas-cafe-3', 'kaunas', 'cafe', 'Brunch Café Kaunas', 4.3, 'Kaunas', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('kaunas-cafe-4', 'kaunas', 'cafe', 'Espresso Bar Kaunas', 4.3, 'Kaunas', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— klaipeda ——
  place('klaipeda-fine_dining-1', 'klaipeda', 'fine_dining', 'Klaipėda Fine Dining 1', 4.5, 'Klaipėda', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('klaipeda-fine_dining-2', 'klaipeda', 'fine_dining', 'Klaipėda Fine Dining 2', 4.4, 'Klaipėda', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('klaipeda-fine_dining-3', 'klaipeda', 'fine_dining', 'Klaipėda Fine Dining 3', 4.3, 'Klaipėda', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('klaipeda-fine_dining-4', 'klaipeda', 'fine_dining', 'Klaipėda Bistro', 4.3, 'Klaipėda', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('klaipeda-fine_dining-5', 'klaipeda', 'fine_dining', 'Klaipėda Chef\'s Table', 4.4, 'Klaipėda', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('klaipeda-bakery-1', 'klaipeda', 'bakery', 'Klaipėda Bakery', 4.5, 'Klaipėda', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('klaipeda-bakery-2', 'klaipeda', 'bakery', 'Klaipėda Patisserie', 4.4, 'Klaipėda', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('klaipeda-bakery-3', 'klaipeda', 'bakery', 'Klaipėda Bread House', 4.3, 'Klaipėda', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('klaipeda-bakery-4', 'klaipeda', 'bakery', 'Café Bakery Klaipėda', 4.3, 'Klaipėda', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('klaipeda-cafe-1', 'klaipeda', 'cafe', 'Specialty Coffee Klaipėda', 4.5, 'Klaipėda', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('klaipeda-cafe-2', 'klaipeda', 'cafe', 'Old Town Café Klaipėda', 4.4, 'Klaipėda', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('klaipeda-cafe-3', 'klaipeda', 'cafe', 'Brunch Café Klaipėda', 4.3, 'Klaipėda', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('klaipeda-cafe-4', 'klaipeda', 'cafe', 'Espresso Bar Klaipėda', 4.3, 'Klaipėda', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

]
