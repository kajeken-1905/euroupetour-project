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

  // —— podgorica ——
  place('podgorica-fine_dining-1', 'podgorica', 'fine_dining', 'Lanterna', 4.6, 'Marka Miljanova 41, Podgorica', '포드고리차의 인기 이탈리안 레스토랑.', 'Popular Italian-style restaurant in Podgorica.'),

  // —— herceg-novi ——
  place('herceg-novi-fine_dining-1', 'herceg-novi', 'fine_dining', 'Feral', 4.6, 'Njegoševa, Herceg Novi', '신선한 해산물 전문 레스토랑.', 'Restaurant known for impeccably fresh seafood.'),

]
