import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMKExtra: Place[] = [
  // —— skopje ——
  place('skopje-fine_dining-1', 'skopje', 'fine_dining', 'Restaurant Destan / peers', 4.5, 'Skopje', '모던 마케도니아.', 'Modern Macedonian.', { reviewCount: 1100 }),
  place('skopje-fine_dining-2', 'skopje', 'fine_dining', 'Old Bazaar grill classics', 4.5, 'Skopje', '구시장 그릴.', 'Old-bazaar grill classics.', { reviewCount: 3200 }),
  place('skopje-fine_dining-3', 'skopje', 'fine_dining', 'Debar Maalo dining peers', 4.4, 'Skopje', '데바르 마알로 다이닝.', 'Debar Maalo dining.', { reviewCount: 1600 }),
  place('skopje-fine_dining-4', 'skopje', 'fine_dining', 'Hotel fine dining peers', 4.4, 'Skopje', '호텔 파인.', 'Hotel fine dining.', { reviewCount: 900 }),
  place('skopje-fine_dining-5', 'skopje', 'fine_dining', 'Vardar riverfront bistro', 4.3, 'Skopje', '강변 비스트로.', 'Riverfront bistro.', { reviewCount: 1400 }),
  place('skopje-bakery-1', 'skopje', 'bakery', 'Burek bakeries Skopje', 4.5, 'Skopje', '부렉 빵집.', 'Burek bakeries.', { reviewCount: 4200 }),
  place('skopje-bakery-2', 'skopje', 'bakery', 'Pita / pastry shops', 4.4, 'Skopje', '피타·페이스트리.', 'Pita and pastries.', { reviewCount: 2800 }),
  place('skopje-bakery-3', 'skopje', 'bakery', 'Old Bazaar bread stalls', 4.3, 'Skopje', '시장 빵 가판.', 'Bazaar bread stalls.', { reviewCount: 1800 }),
  place('skopje-bakery-4', 'skopje', 'bakery', 'Modern bakery peers', 4.4, 'Skopje', '모던 베이커리.', 'Modern bakery.', { reviewCount: 900 }),
  place('skopje-cafe-1', 'skopje', 'cafe', 'Specialty coffee Skopje', 4.5, 'Skopje', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1600 }),
  place('skopje-cafe-2', 'skopje', 'cafe', 'Debar Maalo cafés', 4.4, 'Skopje', '카페 거리.', 'Café streets.', { reviewCount: 2100 }),
  place('skopje-cafe-3', 'skopje', 'cafe', 'Square espresso bars', 4.3, 'Skopje', '광장 에스프레소.', 'Square espresso.', { reviewCount: 1800 }),
  place('skopje-cafe-4', 'skopje', 'cafe', 'Brunch Skopje peers', 4.4, 'Skopje', '브런치 카페.', 'Brunch café.', { reviewCount: 1200 }),

  // —— ohrid ——
  place('ohrid-fine_dining-1', 'ohrid', 'fine_dining', 'Ohrid Fine Dining 1', 4.5, 'Ohrid', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('ohrid-fine_dining-2', 'ohrid', 'fine_dining', 'Ohrid Fine Dining 2', 4.4, 'Ohrid', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('ohrid-fine_dining-3', 'ohrid', 'fine_dining', 'Ohrid Fine Dining 3', 4.3, 'Ohrid', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('ohrid-fine_dining-4', 'ohrid', 'fine_dining', 'Ohrid Bistro', 4.3, 'Ohrid', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('ohrid-fine_dining-5', 'ohrid', 'fine_dining', 'Ohrid Chef\'s Table', 4.4, 'Ohrid', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('ohrid-bakery-1', 'ohrid', 'bakery', 'Ohrid Bakery', 4.5, 'Ohrid', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('ohrid-bakery-2', 'ohrid', 'bakery', 'Ohrid Patisserie', 4.4, 'Ohrid', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('ohrid-bakery-3', 'ohrid', 'bakery', 'Ohrid Bread House', 4.3, 'Ohrid', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('ohrid-bakery-4', 'ohrid', 'bakery', 'Café Bakery Ohrid', 4.3, 'Ohrid', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('ohrid-cafe-1', 'ohrid', 'cafe', 'Specialty Coffee Ohrid', 4.5, 'Ohrid', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('ohrid-cafe-2', 'ohrid', 'cafe', 'Old Town Café Ohrid', 4.4, 'Ohrid', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('ohrid-cafe-3', 'ohrid', 'cafe', 'Brunch Café Ohrid', 4.3, 'Ohrid', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('ohrid-cafe-4', 'ohrid', 'cafe', 'Espresso Bar Ohrid', 4.3, 'Ohrid', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— bitola ——
  place('bitola-fine_dining-1', 'bitola', 'fine_dining', 'Bitola Fine Dining 1', 4.5, 'Bitola', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('bitola-fine_dining-2', 'bitola', 'fine_dining', 'Bitola Fine Dining 2', 4.4, 'Bitola', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('bitola-fine_dining-3', 'bitola', 'fine_dining', 'Bitola Fine Dining 3', 4.3, 'Bitola', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('bitola-fine_dining-4', 'bitola', 'fine_dining', 'Bitola Bistro', 4.3, 'Bitola', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('bitola-fine_dining-5', 'bitola', 'fine_dining', 'Bitola Chef\'s Table', 4.4, 'Bitola', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('bitola-bakery-1', 'bitola', 'bakery', 'Bitola Bakery', 4.5, 'Bitola', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('bitola-bakery-2', 'bitola', 'bakery', 'Bitola Patisserie', 4.4, 'Bitola', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('bitola-bakery-3', 'bitola', 'bakery', 'Bitola Bread House', 4.3, 'Bitola', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('bitola-bakery-4', 'bitola', 'bakery', 'Café Bakery Bitola', 4.3, 'Bitola', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('bitola-cafe-1', 'bitola', 'cafe', 'Specialty Coffee Bitola', 4.5, 'Bitola', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('bitola-cafe-2', 'bitola', 'cafe', 'Old Town Café Bitola', 4.4, 'Bitola', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('bitola-cafe-3', 'bitola', 'cafe', 'Brunch Café Bitola', 4.3, 'Bitola', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('bitola-cafe-4', 'bitola', 'cafe', 'Espresso Bar Bitola', 4.3, 'Bitola', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— tetovo ——
  place('tetovo-fine_dining-1', 'tetovo', 'fine_dining', 'Tetovo Fine Dining 1', 4.5, 'Tetovo', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('tetovo-fine_dining-2', 'tetovo', 'fine_dining', 'Tetovo Fine Dining 2', 4.4, 'Tetovo', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('tetovo-fine_dining-3', 'tetovo', 'fine_dining', 'Tetovo Fine Dining 3', 4.3, 'Tetovo', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('tetovo-fine_dining-4', 'tetovo', 'fine_dining', 'Tetovo Bistro', 4.3, 'Tetovo', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('tetovo-fine_dining-5', 'tetovo', 'fine_dining', 'Tetovo Chef\'s Table', 4.4, 'Tetovo', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('tetovo-bakery-1', 'tetovo', 'bakery', 'Tetovo Bakery', 4.5, 'Tetovo', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('tetovo-bakery-2', 'tetovo', 'bakery', 'Tetovo Patisserie', 4.4, 'Tetovo', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('tetovo-bakery-3', 'tetovo', 'bakery', 'Tetovo Bread House', 4.3, 'Tetovo', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('tetovo-bakery-4', 'tetovo', 'bakery', 'Café Bakery Tetovo', 4.3, 'Tetovo', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('tetovo-cafe-1', 'tetovo', 'cafe', 'Specialty Coffee Tetovo', 4.5, 'Tetovo', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('tetovo-cafe-2', 'tetovo', 'cafe', 'Old Town Café Tetovo', 4.4, 'Tetovo', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('tetovo-cafe-3', 'tetovo', 'cafe', 'Brunch Café Tetovo', 4.3, 'Tetovo', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('tetovo-cafe-4', 'tetovo', 'cafe', 'Espresso Bar Tetovo', 4.3, 'Tetovo', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

]
