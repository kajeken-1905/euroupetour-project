import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMEExtra: Place[] = [
  // —— kotor ——
  place('kotor-fine_dining-1', 'kotor', 'fine_dining', 'Galion', 4.6, 'Kotor', '만 전망 해산물 파인.', 'Bay-view seafood fine dining.', { reviewCount: 1200 }),
  place('kotor-fine_dining-2', 'kotor', 'fine_dining', 'Restaurant Vapor / peers', 4.5, 'Kotor', '시즌 해산물.', 'Seasonal seafood.', { reviewCount: 1600 }),
  place('kotor-fine_dining-3', 'kotor', 'fine_dining', 'Old Town konoba classics', 4.4, 'Kotor', '전통 코노바.', 'Traditional konoba.', { reviewCount: 2100 }),
  place('kotor-fine_dining-4', 'kotor', 'fine_dining', 'Marriott / hotel fine peers', 4.4, 'Kotor', '호텔 파인 다이닝.', 'Hotel fine dining.', { reviewCount: 900 }),
  place('kotor-fine_dining-5', 'kotor', 'fine_dining', 'Waterfront bistro peers', 4.4, 'Kotor', '해안 비스트로.', 'Waterfront bistro.', { reviewCount: 1400 }),
  place('kotor-bakery-1', 'kotor', 'bakery', 'Old Town bakery', 4.4, 'Kotor', '구시가 빵집.', 'Old-town bakery.', { reviewCount: 900 }),
  place('kotor-bakery-2', 'kotor', 'bakery', 'Pastry & gelato counters', 4.3, 'Kotor', '페이스트리·젤라토.', 'Pastry and gelato.', { reviewCount: 1200 }),
  place('kotor-bakery-3', 'kotor', 'bakery', 'Bread house Kotor', 4.3, 'Kotor', '로컬 빵집.', 'Local bakery.', { reviewCount: 700 }),
  place('kotor-bakery-4', 'kotor', 'bakery', 'Café bakery Kotor', 4.3, 'Kotor', '베이커리 카페.', 'Bakery café.', { reviewCount: 800 }),
  place('kotor-cafe-1', 'kotor', 'cafe', 'Square cafés Kotor', 4.4, 'Kotor', '광장 카페.', 'Square café.', { reviewCount: 1800 }),
  place('kotor-cafe-2', 'kotor', 'cafe', 'Specialty coffee Kotor', 4.4, 'Kotor', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 700 }),
  place('kotor-cafe-3', 'kotor', 'cafe', 'Walls viewpoint café peers', 4.3, 'Kotor', '전망 카페.', 'Viewpoint café.', { reviewCount: 900 }),
  place('kotor-cafe-4', 'kotor', 'cafe', 'Harbour espresso bars', 4.3, 'Kotor', '항구 에스프레소.', 'Harbour espresso.', { reviewCount: 1100 }),

  // —— budva ——
  place('budva-fine_dining-1', 'budva', 'fine_dining', 'Budva Fine Dining 1', 4.5, 'Budva', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('budva-fine_dining-2', 'budva', 'fine_dining', 'Budva Fine Dining 2', 4.4, 'Budva', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('budva-fine_dining-3', 'budva', 'fine_dining', 'Budva Fine Dining 3', 4.3, 'Budva', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('budva-fine_dining-4', 'budva', 'fine_dining', 'Budva Bistro', 4.3, 'Budva', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('budva-fine_dining-5', 'budva', 'fine_dining', 'Budva Chef\'s Table', 4.4, 'Budva', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('budva-bakery-1', 'budva', 'bakery', 'Budva Bakery', 4.5, 'Budva', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('budva-bakery-2', 'budva', 'bakery', 'Budva Patisserie', 4.4, 'Budva', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('budva-bakery-3', 'budva', 'bakery', 'Budva Bread House', 4.3, 'Budva', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('budva-bakery-4', 'budva', 'bakery', 'Café Bakery Budva', 4.3, 'Budva', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('budva-cafe-1', 'budva', 'cafe', 'Specialty Coffee Budva', 4.5, 'Budva', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('budva-cafe-2', 'budva', 'cafe', 'Old Town Café Budva', 4.4, 'Budva', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('budva-cafe-3', 'budva', 'cafe', 'Brunch Café Budva', 4.3, 'Budva', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('budva-cafe-4', 'budva', 'cafe', 'Espresso Bar Budva', 4.3, 'Budva', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— podgorica ——
  place('podgorica-fine_dining-1', 'podgorica', 'fine_dining', 'Podgorica Fine Dining 1', 4.5, 'Podgorica', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('podgorica-fine_dining-2', 'podgorica', 'fine_dining', 'Podgorica Fine Dining 2', 4.4, 'Podgorica', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('podgorica-fine_dining-3', 'podgorica', 'fine_dining', 'Podgorica Fine Dining 3', 4.3, 'Podgorica', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('podgorica-fine_dining-4', 'podgorica', 'fine_dining', 'Podgorica Bistro', 4.3, 'Podgorica', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('podgorica-fine_dining-5', 'podgorica', 'fine_dining', 'Podgorica Chef\'s Table', 4.4, 'Podgorica', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('podgorica-bakery-1', 'podgorica', 'bakery', 'Podgorica Bakery', 4.5, 'Podgorica', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('podgorica-bakery-2', 'podgorica', 'bakery', 'Podgorica Patisserie', 4.4, 'Podgorica', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('podgorica-bakery-3', 'podgorica', 'bakery', 'Podgorica Bread House', 4.3, 'Podgorica', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('podgorica-bakery-4', 'podgorica', 'bakery', 'Café Bakery Podgorica', 4.3, 'Podgorica', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('podgorica-cafe-1', 'podgorica', 'cafe', 'Specialty Coffee Podgorica', 4.5, 'Podgorica', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('podgorica-cafe-2', 'podgorica', 'cafe', 'Old Town Café Podgorica', 4.4, 'Podgorica', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('podgorica-cafe-3', 'podgorica', 'cafe', 'Brunch Café Podgorica', 4.3, 'Podgorica', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('podgorica-cafe-4', 'podgorica', 'cafe', 'Espresso Bar Podgorica', 4.3, 'Podgorica', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— herceg-novi ——
  place('herceg-novi-fine_dining-1', 'herceg-novi', 'fine_dining', 'Herceg Novi Fine Dining 1', 4.5, 'Herceg Novi', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('herceg-novi-fine_dining-2', 'herceg-novi', 'fine_dining', 'Herceg Novi Fine Dining 2', 4.4, 'Herceg Novi', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('herceg-novi-fine_dining-3', 'herceg-novi', 'fine_dining', 'Herceg Novi Fine Dining 3', 4.3, 'Herceg Novi', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('herceg-novi-fine_dining-4', 'herceg-novi', 'fine_dining', 'Herceg Novi Bistro', 4.3, 'Herceg Novi', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('herceg-novi-fine_dining-5', 'herceg-novi', 'fine_dining', 'Herceg Novi Chef\'s Table', 4.4, 'Herceg Novi', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('herceg-novi-bakery-1', 'herceg-novi', 'bakery', 'Herceg Novi Bakery', 4.5, 'Herceg Novi', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('herceg-novi-bakery-2', 'herceg-novi', 'bakery', 'Herceg Novi Patisserie', 4.4, 'Herceg Novi', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('herceg-novi-bakery-3', 'herceg-novi', 'bakery', 'Herceg Novi Bread House', 4.3, 'Herceg Novi', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('herceg-novi-bakery-4', 'herceg-novi', 'bakery', 'Café Bakery Herceg Novi', 4.3, 'Herceg Novi', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('herceg-novi-cafe-1', 'herceg-novi', 'cafe', 'Specialty Coffee Herceg Novi', 4.5, 'Herceg Novi', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('herceg-novi-cafe-2', 'herceg-novi', 'cafe', 'Old Town Café Herceg Novi', 4.4, 'Herceg Novi', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('herceg-novi-cafe-3', 'herceg-novi', 'cafe', 'Brunch Café Herceg Novi', 4.3, 'Herceg Novi', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('herceg-novi-cafe-4', 'herceg-novi', 'cafe', 'Espresso Bar Herceg Novi', 4.3, 'Herceg Novi', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

]
