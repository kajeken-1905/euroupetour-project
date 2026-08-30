import { place } from './placeFactory'
import type { Place } from '../types'

export const placesCYExtra: Place[] = [
  // —— nicosia ——
  place('nicosia-fine_dining-1', 'nicosia', 'fine_dining', 'Modern Cypriot tasting peers', 4.5, 'Nicosia', '모던 키프로스 코스.', 'Modern Cypriot tasting.', { reviewCount: 900 }),
  place('nicosia-fine_dining-2', 'nicosia', 'fine_dining', 'Meze house classics', 4.5, 'Nicosia', '전통 메제.', 'Classic meze house.', { reviewCount: 2800 }),
  place('nicosia-fine_dining-3', 'nicosia', 'fine_dining', 'Old City tavern peers', 4.4, 'Nicosia', '구시가 선술집.', 'Old-city tavern.', { reviewCount: 1600 }),
  place('nicosia-fine_dining-4', 'nicosia', 'fine_dining', 'Hotel fine dining peers', 4.4, 'Nicosia', '호텔 파인.', 'Hotel fine dining.', { reviewCount: 800 }),
  place('nicosia-fine_dining-5', 'nicosia', 'fine_dining', 'Wine bar dining peers', 4.4, 'Nicosia', '와인 바 다이닝.', 'Wine-bar dining.', { reviewCount: 1100 }),
  place('nicosia-bakery-1', 'nicosia', 'bakery', 'Halloumi pie bakeries', 4.5, 'Nicosia', '할루미 파이 빵집.', 'Halloumi pie bakeries.', { reviewCount: 2100 }),
  place('nicosia-bakery-2', 'nicosia', 'bakery', 'Baklava pastry shops', 4.5, 'Nicosia', '바클라바·과자.', 'Baklava and sweets.', { reviewCount: 1800 }),
  place('nicosia-bakery-3', 'nicosia', 'bakery', 'Village bread counters', 4.3, 'Nicosia', '빌리지 브레드.', 'Village bread.', { reviewCount: 1200 }),
  place('nicosia-bakery-4', 'nicosia', 'bakery', 'Modern sourdough peers', 4.4, 'Nicosia', '사워도우.', 'Sourdough.', { reviewCount: 700 }),
  place('nicosia-cafe-1', 'nicosia', 'cafe', 'Specialty coffee Nicosia', 4.5, 'Nicosia', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('nicosia-cafe-2', 'nicosia', 'cafe', 'Ledra Street cafés', 4.3, 'Nicosia', '레드라 카페.', 'Ledra Street cafés.', { reviewCount: 2100 }),
  place('nicosia-cafe-3', 'nicosia', 'cafe', 'Courtyard coffee houses', 4.4, 'Nicosia', '중정 커피하우스.', 'Courtyard coffee houses.', { reviewCount: 1600 }),
  place('nicosia-cafe-4', 'nicosia', 'cafe', 'Brunch Nicosia peers', 4.4, 'Nicosia', '브런치 카페.', 'Brunch café.', { reviewCount: 1100 }),

  // —— limassol ——
  place('limassol-fine_dining-1', 'limassol', 'fine_dining', 'Limassol Fine Dining 1', 4.5, 'Limassol', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('limassol-fine_dining-2', 'limassol', 'fine_dining', 'Limassol Fine Dining 2', 4.4, 'Limassol', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('limassol-fine_dining-3', 'limassol', 'fine_dining', 'Limassol Fine Dining 3', 4.3, 'Limassol', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('limassol-fine_dining-4', 'limassol', 'fine_dining', 'Limassol Bistro', 4.3, 'Limassol', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('limassol-fine_dining-5', 'limassol', 'fine_dining', 'Limassol Chef\'s Table', 4.4, 'Limassol', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('limassol-bakery-1', 'limassol', 'bakery', 'Limassol Bakery', 4.5, 'Limassol', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('limassol-bakery-2', 'limassol', 'bakery', 'Limassol Patisserie', 4.4, 'Limassol', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('limassol-bakery-3', 'limassol', 'bakery', 'Limassol Bread House', 4.3, 'Limassol', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('limassol-bakery-4', 'limassol', 'bakery', 'Café Bakery Limassol', 4.3, 'Limassol', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('limassol-cafe-1', 'limassol', 'cafe', 'Specialty Coffee Limassol', 4.5, 'Limassol', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('limassol-cafe-2', 'limassol', 'cafe', 'Old Town Café Limassol', 4.4, 'Limassol', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('limassol-cafe-3', 'limassol', 'cafe', 'Brunch Café Limassol', 4.3, 'Limassol', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('limassol-cafe-4', 'limassol', 'cafe', 'Espresso Bar Limassol', 4.3, 'Limassol', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— paphos ——
  place('paphos-fine_dining-1', 'paphos', 'fine_dining', 'Paphos Fine Dining 1', 4.5, 'Paphos', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('paphos-fine_dining-2', 'paphos', 'fine_dining', 'Paphos Fine Dining 2', 4.4, 'Paphos', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('paphos-fine_dining-3', 'paphos', 'fine_dining', 'Paphos Fine Dining 3', 4.3, 'Paphos', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('paphos-fine_dining-4', 'paphos', 'fine_dining', 'Paphos Bistro', 4.3, 'Paphos', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('paphos-fine_dining-5', 'paphos', 'fine_dining', 'Paphos Chef\'s Table', 4.4, 'Paphos', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('paphos-bakery-1', 'paphos', 'bakery', 'Paphos Bakery', 4.5, 'Paphos', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('paphos-bakery-2', 'paphos', 'bakery', 'Paphos Patisserie', 4.4, 'Paphos', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('paphos-bakery-3', 'paphos', 'bakery', 'Paphos Bread House', 4.3, 'Paphos', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('paphos-bakery-4', 'paphos', 'bakery', 'Café Bakery Paphos', 4.3, 'Paphos', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('paphos-cafe-1', 'paphos', 'cafe', 'Specialty Coffee Paphos', 4.5, 'Paphos', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('paphos-cafe-2', 'paphos', 'cafe', 'Old Town Café Paphos', 4.4, 'Paphos', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('paphos-cafe-3', 'paphos', 'cafe', 'Brunch Café Paphos', 4.3, 'Paphos', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('paphos-cafe-4', 'paphos', 'cafe', 'Espresso Bar Paphos', 4.3, 'Paphos', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— ayia-napa ——
  place('ayia-napa-fine_dining-1', 'ayia-napa', 'fine_dining', 'Ayia Napa Fine Dining 1', 4.5, 'Ayia Napa', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('ayia-napa-fine_dining-2', 'ayia-napa', 'fine_dining', 'Ayia Napa Fine Dining 2', 4.4, 'Ayia Napa', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('ayia-napa-fine_dining-3', 'ayia-napa', 'fine_dining', 'Ayia Napa Fine Dining 3', 4.3, 'Ayia Napa', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('ayia-napa-fine_dining-4', 'ayia-napa', 'fine_dining', 'Ayia Napa Bistro', 4.3, 'Ayia Napa', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('ayia-napa-fine_dining-5', 'ayia-napa', 'fine_dining', 'Ayia Napa Chef\'s Table', 4.4, 'Ayia Napa', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('ayia-napa-bakery-1', 'ayia-napa', 'bakery', 'Ayia Napa Bakery', 4.5, 'Ayia Napa', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('ayia-napa-bakery-2', 'ayia-napa', 'bakery', 'Ayia Napa Patisserie', 4.4, 'Ayia Napa', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('ayia-napa-bakery-3', 'ayia-napa', 'bakery', 'Ayia Napa Bread House', 4.3, 'Ayia Napa', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('ayia-napa-bakery-4', 'ayia-napa', 'bakery', 'Café Bakery Ayia Napa', 4.3, 'Ayia Napa', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('ayia-napa-cafe-1', 'ayia-napa', 'cafe', 'Specialty Coffee Ayia Napa', 4.5, 'Ayia Napa', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('ayia-napa-cafe-2', 'ayia-napa', 'cafe', 'Old Town Café Ayia Napa', 4.4, 'Ayia Napa', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('ayia-napa-cafe-3', 'ayia-napa', 'cafe', 'Brunch Café Ayia Napa', 4.3, 'Ayia Napa', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('ayia-napa-cafe-4', 'ayia-napa', 'cafe', 'Espresso Bar Ayia Napa', 4.3, 'Ayia Napa', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

]
