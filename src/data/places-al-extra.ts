import { place } from './placeFactory'
import type { Place } from '../types'

export const placesALExtra: Place[] = [
  // —— tirana ——
  place('tirana-fine_dining-1', 'tirana', 'fine_dining', 'Mullixhiu', 4.7, 'Tirana', '농가·시즌 알바니아 파인.', 'Farm and seasonal Albanian fine dining.', { reviewCount: 1100 }),
  place('tirana-bakery-1', 'tirana', 'bakery', 'Byrek bakeries Tirana', 4.5, 'Tirana', '부렉 빵집.', 'Byrek bakeries.', { reviewCount: 3600 }),
  place('tirana-bakery-2', 'tirana', 'bakery', 'Petulla / pastry shops', 4.4, 'Tirana', '페툴라·페이스트리.', 'Petulla and pastries.', { reviewCount: 2100 }),
  place('tirana-bakery-3', 'tirana', 'bakery', 'Neighbourhood bread shops', 4.3, 'Tirana', '동네 빵집.', 'Neighbourhood bakeries.', { reviewCount: 1600 }),
  place('tirana-cafe-1', 'tirana', 'cafe', 'Specialty coffee Tirana', 4.5, 'Tirana', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1800 }),
  place('tirana-cafe-2', 'tirana', 'cafe', 'Blloku café terraces', 4.4, 'Tirana', '블로쿠 테라스.', 'Blloku terrace cafés.', { reviewCount: 2800 }),
  place('tirana-cafe-3', 'tirana', 'cafe', 'Square espresso bars', 4.3, 'Tirana', '광장 에스프레소.', 'Square espresso.', { reviewCount: 2100 }),

  // —— berat ——
  place('berat-fine_dining-1', 'berat', 'fine_dining', 'Homemade Food Lili', 4.5, 'Rruga Nikolla Buhuri, Berat 5001', '구시가의 전통 알바니아 가정식.', 'Traditional Albanian home cooking in the Old Town.'),

  // —— gjirokaster ——
  place('gjirokaster-fine_dining-1', 'gjirokaster', 'fine_dining', 'Te Kalaja Restaurant', 4.6, 'Gjirokastër Castle area, Gjirokastër 6001', '요새 근처의 전통 레스토랑.', 'Traditional restaurant near the fortress.'),

  // —— sarande ——
  place('sarande-fine_dining-1', 'sarande', 'fine_dining', 'Observatory Restaurant', 4.9, 'Godine Nr. 75, Lagja Nr.1, Saranda 9702', '해산물 전문 레스토랑.', 'Seafood-focused restaurant.'),

]
