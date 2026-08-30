import { place } from './placeFactory'
import type { Place } from '../types'

export const placesEEExtra: Place[] = [
  // —— tallinn ——
  place('tallinn-fine_dining-1', 'tallinn', 'fine_dining', 'NOA / modern Estonian peers', 4.6, 'Tallinn', '모던 에스토니아 파인.', 'Modern Estonian fine dining.', { reviewCount: 1200 }),
  place('tallinn-fine_dining-2', 'tallinn', 'fine_dining', 'Old Town tasting peers', 4.5, 'Tallinn', '구시가 테이스팅.', 'Old-town tasting.', { reviewCount: 1600 }),
  place('tallinn-fine_dining-3', 'tallinn', 'fine_dining', 'Michelin / chef peers', 4.6, 'Tallinn', '셰프 파인 다이닝.', 'Chef fine dining.', { reviewCount: 900 }),
  place('tallinn-fine_dining-4', 'tallinn', 'fine_dining', 'Harbour bistro peers', 4.4, 'Tallinn', '항구 비스트로.', 'Harbour bistro.', { reviewCount: 1400 }),
  place('tallinn-fine_dining-5', 'tallinn', 'fine_dining', 'Farm-to-table peers', 4.5, 'Tallinn', '팜투테이블.', 'Farm-to-table.', { reviewCount: 1100 }),
  place('tallinn-bakery-1', 'tallinn', 'bakery', 'Karakter / bakery peers', 4.5, 'Tallinn', '모던 베이커리.', 'Modern bakery.', { reviewCount: 1600 }),
  place('tallinn-bakery-2', 'tallinn', 'bakery', 'Kringel & pastry shops', 4.4, 'Tallinn', '크링겔·페이스트리.', 'Kringel and pastries.', { reviewCount: 2100 }),
  place('tallinn-bakery-3', 'tallinn', 'bakery', 'Old Town bakery counters', 4.3, 'Tallinn', '구시가 빵 카운터.', 'Old-town bakery counters.', { reviewCount: 1800 }),
  place('tallinn-bakery-4', 'tallinn', 'bakery', 'Rye bread houses', 4.4, 'Tallinn', '호밀빵집.', 'Rye bread houses.', { reviewCount: 1400 }),
  place('tallinn-cafe-1', 'tallinn', 'cafe', 'Specialty coffee Tallinn', 4.5, 'Tallinn', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),
  place('tallinn-cafe-2', 'tallinn', 'cafe', 'Telliskivi cafés', 4.5, 'Tallinn', '텔리스키비 카페.', 'Telliskivi cafés.', { reviewCount: 2400 }),
  place('tallinn-cafe-3', 'tallinn', 'cafe', 'Old Town café terraces', 4.3, 'Tallinn', '구시가 테라스.', 'Old-town terraces.', { reviewCount: 3200 }),
  place('tallinn-cafe-4', 'tallinn', 'cafe', 'Brunch Tallinn peers', 4.4, 'Tallinn', '브런치 카페.', 'Brunch café.', { reviewCount: 1600 }),

  // —— tartu ——
  place('tartu-fine_dining-1', 'tartu', 'fine_dining', 'Tartu Fine Dining 1', 4.5, 'Tartu', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('tartu-fine_dining-2', 'tartu', 'fine_dining', 'Tartu Fine Dining 2', 4.4, 'Tartu', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('tartu-fine_dining-3', 'tartu', 'fine_dining', 'Tartu Fine Dining 3', 4.3, 'Tartu', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('tartu-fine_dining-4', 'tartu', 'fine_dining', 'Tartu Bistro', 4.3, 'Tartu', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('tartu-fine_dining-5', 'tartu', 'fine_dining', 'Tartu Chef\'s Table', 4.4, 'Tartu', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('tartu-bakery-1', 'tartu', 'bakery', 'Tartu Bakery', 4.5, 'Tartu', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('tartu-bakery-2', 'tartu', 'bakery', 'Tartu Patisserie', 4.4, 'Tartu', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('tartu-bakery-3', 'tartu', 'bakery', 'Tartu Bread House', 4.3, 'Tartu', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('tartu-bakery-4', 'tartu', 'bakery', 'Café Bakery Tartu', 4.3, 'Tartu', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('tartu-cafe-1', 'tartu', 'cafe', 'Specialty Coffee Tartu', 4.5, 'Tartu', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('tartu-cafe-2', 'tartu', 'cafe', 'Old Town Café Tartu', 4.4, 'Tartu', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('tartu-cafe-3', 'tartu', 'cafe', 'Brunch Café Tartu', 4.3, 'Tartu', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('tartu-cafe-4', 'tartu', 'cafe', 'Espresso Bar Tartu', 4.3, 'Tartu', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— parnu ——
  place('parnu-fine_dining-1', 'parnu', 'fine_dining', 'Pärnu Fine Dining 1', 4.5, 'Pärnu', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('parnu-fine_dining-2', 'parnu', 'fine_dining', 'Pärnu Fine Dining 2', 4.4, 'Pärnu', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('parnu-fine_dining-3', 'parnu', 'fine_dining', 'Pärnu Fine Dining 3', 4.3, 'Pärnu', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('parnu-fine_dining-4', 'parnu', 'fine_dining', 'Pärnu Bistro', 4.3, 'Pärnu', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('parnu-fine_dining-5', 'parnu', 'fine_dining', 'Pärnu Chef\'s Table', 4.4, 'Pärnu', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('parnu-bakery-1', 'parnu', 'bakery', 'Pärnu Bakery', 4.5, 'Pärnu', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('parnu-bakery-2', 'parnu', 'bakery', 'Pärnu Patisserie', 4.4, 'Pärnu', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('parnu-bakery-3', 'parnu', 'bakery', 'Pärnu Bread House', 4.3, 'Pärnu', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('parnu-bakery-4', 'parnu', 'bakery', 'Café Bakery Pärnu', 4.3, 'Pärnu', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('parnu-cafe-1', 'parnu', 'cafe', 'Specialty Coffee Pärnu', 4.5, 'Pärnu', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('parnu-cafe-2', 'parnu', 'cafe', 'Old Town Café Pärnu', 4.4, 'Pärnu', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('parnu-cafe-3', 'parnu', 'cafe', 'Brunch Café Pärnu', 4.3, 'Pärnu', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('parnu-cafe-4', 'parnu', 'cafe', 'Espresso Bar Pärnu', 4.3, 'Pärnu', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

]
