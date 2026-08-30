import { place } from './placeFactory'
import type { Place } from '../types'

export const placesRSExtra: Place[] = [
  // —— belgrade ——
  place('belgrade-fine_dining-1', 'belgrade', 'fine_dining', 'Homa', 4.7, 'Belgrade', '미슐랭 모던 세르비아.', 'Michelin modern Serbian.', { reviewCount: 900 }),
  place('belgrade-fine_dining-2', 'belgrade', 'fine_dining', 'Langouste', 4.6, 'Belgrade', '해산물 파인 다이닝.', 'Seafood fine dining.', { reviewCount: 1100 }),
  place('belgrade-fine_dining-3', 'belgrade', 'fine_dining', 'Salon 1905 / classic peers', 4.5, 'Belgrade', '클래식 파인.', 'Classic fine dining.', { reviewCount: 1200 }),
  place('belgrade-fine_dining-4', 'belgrade', 'fine_dining', 'Skadarlija tavern classics', 4.4, 'Belgrade', '스카다르리야 선술집.', 'Skadarlija tavern classics.', { reviewCount: 4800 }),
  place('belgrade-fine_dining-5', 'belgrade', 'fine_dining', 'Lorenzo & Kakalamba peers', 4.5, 'Belgrade', '창의 캐주얼 파인.', 'Creative casual fine.', { reviewCount: 2100 }),
  place('belgrade-bakery-1', 'belgrade', 'bakery', 'Pekara local chains', 4.3, 'Belgrade', '로컬 빵집.', 'Local bakery.', { reviewCount: 2800 }),
  place('belgrade-bakery-2', 'belgrade', 'bakery', 'Sourdough Belgrade peers', 4.5, 'Belgrade', '사워도우.', 'Sourdough.', { reviewCount: 1100 }),
  place('belgrade-bakery-3', 'belgrade', 'bakery', 'Burek & pastry shops', 4.5, 'Belgrade', '부렉·페이스트리.', 'Burek and pastries.', { reviewCount: 4200 }),
  place('belgrade-bakery-4', 'belgrade', 'bakery', 'Cake shops Centar', 4.4, 'Belgrade', '도심 케이크 숍.', 'Central cake shops.', { reviewCount: 1800 }),
  place('belgrade-cafe-1', 'belgrade', 'cafe', 'Specialty coffee Belgrade', 4.5, 'Belgrade', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),
  place('belgrade-cafe-2', 'belgrade', 'cafe', 'Kafeterija / peers', 4.4, 'Belgrade', '로스터리 카페.', 'Roastery café.', { reviewCount: 1600 }),
  place('belgrade-cafe-3', 'belgrade', 'cafe', 'Dorćol café streets', 4.4, 'Belgrade', '도르촐 카페 거리.', 'Dorćol café streets.', { reviewCount: 2400 }),
  place('belgrade-cafe-4', 'belgrade', 'cafe', 'Brunch Belgrade peers', 4.4, 'Belgrade', '브런치 카페.', 'Brunch café.', { reviewCount: 1800 }),

  // —— novi-sad ——
  place('novi-sad-fine_dining-1', 'novi-sad', 'fine_dining', 'Novi Sad Fine Dining 1', 4.5, 'Novi Sad', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('novi-sad-fine_dining-2', 'novi-sad', 'fine_dining', 'Novi Sad Fine Dining 2', 4.4, 'Novi Sad', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('novi-sad-fine_dining-3', 'novi-sad', 'fine_dining', 'Novi Sad Fine Dining 3', 4.3, 'Novi Sad', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('novi-sad-fine_dining-4', 'novi-sad', 'fine_dining', 'Novi Sad Bistro', 4.3, 'Novi Sad', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('novi-sad-fine_dining-5', 'novi-sad', 'fine_dining', 'Novi Sad Chef\'s Table', 4.4, 'Novi Sad', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('novi-sad-bakery-1', 'novi-sad', 'bakery', 'Novi Sad Bakery', 4.5, 'Novi Sad', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('novi-sad-bakery-2', 'novi-sad', 'bakery', 'Novi Sad Patisserie', 4.4, 'Novi Sad', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('novi-sad-bakery-3', 'novi-sad', 'bakery', 'Novi Sad Bread House', 4.3, 'Novi Sad', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('novi-sad-bakery-4', 'novi-sad', 'bakery', 'Café Bakery Novi Sad', 4.3, 'Novi Sad', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('novi-sad-cafe-1', 'novi-sad', 'cafe', 'Specialty Coffee Novi Sad', 4.5, 'Novi Sad', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('novi-sad-cafe-2', 'novi-sad', 'cafe', 'Old Town Café Novi Sad', 4.4, 'Novi Sad', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('novi-sad-cafe-3', 'novi-sad', 'cafe', 'Brunch Café Novi Sad', 4.3, 'Novi Sad', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('novi-sad-cafe-4', 'novi-sad', 'cafe', 'Espresso Bar Novi Sad', 4.3, 'Novi Sad', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— nis ——
  place('nis-fine_dining-1', 'nis', 'fine_dining', 'Niš Fine Dining 1', 4.5, 'Niš', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('nis-fine_dining-2', 'nis', 'fine_dining', 'Niš Fine Dining 2', 4.4, 'Niš', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('nis-fine_dining-3', 'nis', 'fine_dining', 'Niš Fine Dining 3', 4.3, 'Niš', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('nis-fine_dining-4', 'nis', 'fine_dining', 'Niš Bistro', 4.3, 'Niš', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('nis-fine_dining-5', 'nis', 'fine_dining', 'Niš Chef\'s Table', 4.4, 'Niš', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('nis-bakery-1', 'nis', 'bakery', 'Niš Bakery', 4.5, 'Niš', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('nis-bakery-2', 'nis', 'bakery', 'Niš Patisserie', 4.4, 'Niš', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('nis-bakery-3', 'nis', 'bakery', 'Niš Bread House', 4.3, 'Niš', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('nis-bakery-4', 'nis', 'bakery', 'Café Bakery Niš', 4.3, 'Niš', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('nis-cafe-1', 'nis', 'cafe', 'Specialty Coffee Niš', 4.5, 'Niš', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('nis-cafe-2', 'nis', 'cafe', 'Old Town Café Niš', 4.4, 'Niš', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('nis-cafe-3', 'nis', 'cafe', 'Brunch Café Niš', 4.3, 'Niš', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('nis-cafe-4', 'nis', 'cafe', 'Espresso Bar Niš', 4.3, 'Niš', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— subotica ——
  place('subotica-fine_dining-1', 'subotica', 'fine_dining', 'Subotica Fine Dining 1', 4.5, 'Subotica', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('subotica-fine_dining-2', 'subotica', 'fine_dining', 'Subotica Fine Dining 2', 4.4, 'Subotica', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('subotica-fine_dining-3', 'subotica', 'fine_dining', 'Subotica Fine Dining 3', 4.3, 'Subotica', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('subotica-fine_dining-4', 'subotica', 'fine_dining', 'Subotica Bistro', 4.3, 'Subotica', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('subotica-fine_dining-5', 'subotica', 'fine_dining', 'Subotica Chef\'s Table', 4.4, 'Subotica', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('subotica-bakery-1', 'subotica', 'bakery', 'Subotica Bakery', 4.5, 'Subotica', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('subotica-bakery-2', 'subotica', 'bakery', 'Subotica Patisserie', 4.4, 'Subotica', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('subotica-bakery-3', 'subotica', 'bakery', 'Subotica Bread House', 4.3, 'Subotica', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('subotica-bakery-4', 'subotica', 'bakery', 'Café Bakery Subotica', 4.3, 'Subotica', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('subotica-cafe-1', 'subotica', 'cafe', 'Specialty Coffee Subotica', 4.5, 'Subotica', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('subotica-cafe-2', 'subotica', 'cafe', 'Old Town Café Subotica', 4.4, 'Subotica', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('subotica-cafe-3', 'subotica', 'cafe', 'Brunch Café Subotica', 4.3, 'Subotica', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('subotica-cafe-4', 'subotica', 'cafe', 'Espresso Bar Subotica', 4.3, 'Subotica', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

]
