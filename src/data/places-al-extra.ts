import { place } from './placeFactory'
import type { Place } from '../types'

export const placesALExtra: Place[] = [
  // —— tirana ——
  place('tirana-fine_dining-1', 'tirana', 'fine_dining', 'Mullixhiu', 4.7, 'Tirana', '농가·시즌 알바니아 파인.', 'Farm and seasonal Albanian fine dining.', { reviewCount: 1100 }),
  place('tirana-fine_dining-2', 'tirana', 'fine_dining', 'Modern Balkan tasting peers', 4.5, 'Tirana', '모던 발칸 코스.', 'Modern Balkan tasting.', { reviewCount: 900 }),
  place('tirana-fine_dining-3', 'tirana', 'fine_dining', 'Blloku bistro peers', 4.4, 'Tirana', '블로쿠 비스트로.', 'Blloku bistro.', { reviewCount: 2100 }),
  place('tirana-fine_dining-4', 'tirana', 'fine_dining', 'Traditional tavolina peers', 4.4, 'Tirana', '전통 가정식.', 'Traditional home cooking.', { reviewCount: 1800 }),
  place('tirana-fine_dining-5', 'tirana', 'fine_dining', 'Hotel fine dining peers', 4.4, 'Tirana', '호텔 파인.', 'Hotel fine dining.', { reviewCount: 800 }),
  place('tirana-bakery-1', 'tirana', 'bakery', 'Byrek bakeries Tirana', 4.5, 'Tirana', '부렉 빵집.', 'Byrek bakeries.', { reviewCount: 3600 }),
  place('tirana-bakery-2', 'tirana', 'bakery', 'Petulla / pastry shops', 4.4, 'Tirana', '페툴라·페이스트리.', 'Petulla and pastries.', { reviewCount: 2100 }),
  place('tirana-bakery-3', 'tirana', 'bakery', 'Neighbourhood bread shops', 4.3, 'Tirana', '동네 빵집.', 'Neighbourhood bakeries.', { reviewCount: 1600 }),
  place('tirana-bakery-4', 'tirana', 'bakery', 'Modern bakery peers', 4.4, 'Tirana', '모던 베이커리.', 'Modern bakery.', { reviewCount: 900 }),
  place('tirana-cafe-1', 'tirana', 'cafe', 'Specialty coffee Tirana', 4.5, 'Tirana', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1800 }),
  place('tirana-cafe-2', 'tirana', 'cafe', 'Blloku café terraces', 4.4, 'Tirana', '블로쿠 테라스.', 'Blloku terrace cafés.', { reviewCount: 2800 }),
  place('tirana-cafe-3', 'tirana', 'cafe', 'Square espresso bars', 4.3, 'Tirana', '광장 에스프레소.', 'Square espresso.', { reviewCount: 2100 }),
  place('tirana-cafe-4', 'tirana', 'cafe', 'Brunch Tirana peers', 4.4, 'Tirana', '브런치 카페.', 'Brunch café.', { reviewCount: 1400 }),

  // —— berat ——
  place('berat-fine_dining-1', 'berat', 'fine_dining', 'Berat Fine Dining 1', 4.5, 'Berat', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('berat-fine_dining-2', 'berat', 'fine_dining', 'Berat Fine Dining 2', 4.4, 'Berat', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('berat-fine_dining-3', 'berat', 'fine_dining', 'Berat Fine Dining 3', 4.3, 'Berat', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('berat-fine_dining-4', 'berat', 'fine_dining', 'Berat Bistro', 4.3, 'Berat', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('berat-fine_dining-5', 'berat', 'fine_dining', 'Berat Chef\'s Table', 4.4, 'Berat', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('berat-bakery-1', 'berat', 'bakery', 'Berat Bakery', 4.5, 'Berat', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('berat-bakery-2', 'berat', 'bakery', 'Berat Patisserie', 4.4, 'Berat', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('berat-bakery-3', 'berat', 'bakery', 'Berat Bread House', 4.3, 'Berat', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('berat-bakery-4', 'berat', 'bakery', 'Café Bakery Berat', 4.3, 'Berat', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('berat-cafe-1', 'berat', 'cafe', 'Specialty Coffee Berat', 4.5, 'Berat', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('berat-cafe-2', 'berat', 'cafe', 'Old Town Café Berat', 4.4, 'Berat', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('berat-cafe-3', 'berat', 'cafe', 'Brunch Café Berat', 4.3, 'Berat', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('berat-cafe-4', 'berat', 'cafe', 'Espresso Bar Berat', 4.3, 'Berat', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— gjirokaster ——
  place('gjirokaster-fine_dining-1', 'gjirokaster', 'fine_dining', 'Gjirokastër Fine Dining 1', 4.5, 'Gjirokastër', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('gjirokaster-fine_dining-2', 'gjirokaster', 'fine_dining', 'Gjirokastër Fine Dining 2', 4.4, 'Gjirokastër', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('gjirokaster-fine_dining-3', 'gjirokaster', 'fine_dining', 'Gjirokastër Fine Dining 3', 4.3, 'Gjirokastër', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('gjirokaster-fine_dining-4', 'gjirokaster', 'fine_dining', 'Gjirokastër Bistro', 4.3, 'Gjirokastër', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('gjirokaster-fine_dining-5', 'gjirokaster', 'fine_dining', 'Gjirokastër Chef\'s Table', 4.4, 'Gjirokastër', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('gjirokaster-bakery-1', 'gjirokaster', 'bakery', 'Gjirokastër Bakery', 4.5, 'Gjirokastër', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('gjirokaster-bakery-2', 'gjirokaster', 'bakery', 'Gjirokastër Patisserie', 4.4, 'Gjirokastër', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('gjirokaster-bakery-3', 'gjirokaster', 'bakery', 'Gjirokastër Bread House', 4.3, 'Gjirokastër', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('gjirokaster-bakery-4', 'gjirokaster', 'bakery', 'Café Bakery Gjirokastër', 4.3, 'Gjirokastër', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('gjirokaster-cafe-1', 'gjirokaster', 'cafe', 'Specialty Coffee Gjirokastër', 4.5, 'Gjirokastër', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('gjirokaster-cafe-2', 'gjirokaster', 'cafe', 'Old Town Café Gjirokastër', 4.4, 'Gjirokastër', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('gjirokaster-cafe-3', 'gjirokaster', 'cafe', 'Brunch Café Gjirokastër', 4.3, 'Gjirokastër', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('gjirokaster-cafe-4', 'gjirokaster', 'cafe', 'Espresso Bar Gjirokastër', 4.3, 'Gjirokastër', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— sarande ——
  place('sarande-fine_dining-1', 'sarande', 'fine_dining', 'Sarandë Fine Dining 1', 4.5, 'Sarandë', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('sarande-fine_dining-2', 'sarande', 'fine_dining', 'Sarandë Fine Dining 2', 4.4, 'Sarandë', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('sarande-fine_dining-3', 'sarande', 'fine_dining', 'Sarandë Fine Dining 3', 4.3, 'Sarandë', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('sarande-fine_dining-4', 'sarande', 'fine_dining', 'Sarandë Bistro', 4.3, 'Sarandë', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('sarande-fine_dining-5', 'sarande', 'fine_dining', 'Sarandë Chef\'s Table', 4.4, 'Sarandë', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('sarande-bakery-1', 'sarande', 'bakery', 'Sarandë Bakery', 4.5, 'Sarandë', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('sarande-bakery-2', 'sarande', 'bakery', 'Sarandë Patisserie', 4.4, 'Sarandë', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('sarande-bakery-3', 'sarande', 'bakery', 'Sarandë Bread House', 4.3, 'Sarandë', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('sarande-bakery-4', 'sarande', 'bakery', 'Café Bakery Sarandë', 4.3, 'Sarandë', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('sarande-cafe-1', 'sarande', 'cafe', 'Specialty Coffee Sarandë', 4.5, 'Sarandë', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('sarande-cafe-2', 'sarande', 'cafe', 'Old Town Café Sarandë', 4.4, 'Sarandë', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('sarande-cafe-3', 'sarande', 'cafe', 'Brunch Café Sarandë', 4.3, 'Sarandë', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('sarande-cafe-4', 'sarande', 'cafe', 'Espresso Bar Sarandë', 4.3, 'Sarandë', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

]
