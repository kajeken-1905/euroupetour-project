import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMEExtra: Place[] = [
  // —— kotor ——
  place('kotor-fine_dining-1', 'kotor', 'fine_dining', 'Galion', 4.6, 'Kotor', '만 전망 해산물 파인.', 'Bay-view seafood fine dining.', { reviewCount: 1200 }),
  place('kotor-fine_dining-2', 'kotor', 'fine_dining', 'Restaurant Vapor', 4.5, 'Kotor', '시즌 해산물.', 'Seasonal seafood.', { reviewCount: 1600 }),
  place('kotor-fine_dining-3', 'kotor', 'fine_dining', 'Old Town konoba classics', 4.4, 'Kotor', '전통 코노바.', 'Traditional konoba.', { reviewCount: 2100 }),
  place('kotor-bakery-1', 'kotor', 'bakery', 'Old Town bakery', 4.4, 'Kotor', '구시가 빵집.', 'Old-town bakery.', { reviewCount: 900 }),
  place('kotor-bakery-2', 'kotor', 'bakery', 'Pastry & gelato counters', 4.3, 'Kotor', '페이스트리·젤라토.', 'Pastry and gelato.', { reviewCount: 1200 }),
  place('kotor-bakery-3', 'kotor', 'bakery', 'Bread house Kotor', 4.3, 'Kotor', '로컬 빵집.', 'Local bakery.', { reviewCount: 700 }),
  place('kotor-bakery-4', 'kotor', 'bakery', 'Café bakery Kotor', 4.3, 'Kotor', '베이커리 카페.', 'Bakery café.', { reviewCount: 800 }),
  place('kotor-cafe-1', 'kotor', 'cafe', 'Square cafés Kotor', 4.4, 'Kotor', '광장 카페.', 'Square café.', { reviewCount: 1800 }),
  place('kotor-cafe-2', 'kotor', 'cafe', 'Specialty coffee Kotor', 4.4, 'Kotor', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 700 }),
  place('kotor-cafe-4', 'kotor', 'cafe', 'Harbour espresso bars', 4.3, 'Kotor', '항구 에스프레소.', 'Harbour espresso.', { reviewCount: 1100 }),

  // —— budva ——
  place('budva-fine_dining-1', 'budva', 'fine_dining', 'Restora Rivijera', 4.5, '16 Njegoševa, Budva', '구시가의 전통 몬테네그로 요리.', 'Traditional Montenegrin cuisine in the Old Town.'),
  place('budva-bakery-1', 'budva', 'bakery', 'Good Food Bakery', 4.4, 'Jadranski put, Budva, Montenegro', '부드바 중심가에서 훌륭한 빵과 로컬 특산품으로 유명한 베이커리', 'Bakery on Budva\'s main street known for excellent bread and local specialities'),
  place('budva-cafe-1', 'budva', 'cafe', 'Monteco Cafe', 4.6, 'Budva, Montenegro', '부드바 최고의 커피와 코워킹 공간을 갖춘 카페', 'Budva café known for its great coffee and co-working space'),

  // —— podgorica ——
  place('podgorica-fine_dining-1', 'podgorica', 'fine_dining', 'Lanterna', 4.6, 'Marka Miljanova 41, Podgorica', '포드고리차의 인기 이탈리안 레스토랑.', 'Popular Italian-style restaurant in Podgorica.'),
  place('podgorica-bakery-1', 'podgorica', 'bakery', 'Sicilia', 4.4, 'Ivana Vujoševića 50, Podgorica, Montenegro', '훌륭한 페이스트리와 피자로 유명한 포드고리차의 인기 베이커리 체인', 'Popular Podgorica bakery chain known for excellent pastries and pizza'),
  place('podgorica-cafe-1', 'podgorica', 'cafe', 'ZRNO', 4.5, 'Podgorica, Montenegro', '포드고리차 최고의 커피로 유명한 아담한 카페', 'Small Podgorica café known for the best coffee in town'),

  // —— herceg-novi ——
  place('herceg-novi-fine_dining-1', 'herceg-novi', 'fine_dining', 'Feral', 4.6, 'Njegoševa, Herceg Novi', '신선한 해산물 전문 레스토랑.', 'Restaurant known for impeccably fresh seafood.'),

  place('herceg-novi-bakery-1', 'herceg-novi', 'bakery', 'Peter\'s Pie & Coffee', 4.6, 'Šetalište Pet Danica, Herceg Novi, Montenegro', '바다 전망 산책로에 위치한 헤르체그노비의 베이커리 카페, 매일 굽는 수제 사워도우로 유명', 'Herceg Novi bakery café on the seafront walkway, known for handmade sourdough baked daily'),
  place('herceg-novi-cafe-1', 'herceg-novi', 'cafe', 'Baguetteria', 4.5, 'Herceg Novi, Montenegro', '신선한 바게트와 크루아상으로 유명한 헤르체그노비의 베이커리 카페', 'Herceg Novi bakery café known for fresh baguettes and excellent croissants'),
]
