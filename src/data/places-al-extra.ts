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
  place('berat-bakery-1', 'berat', 'bakery', 'Pasticeri Soni', 4.6, 'Berat, Albania', '베라트에서 평이 아주 좋은 제과점', 'Highly rated bakery-confectionery in Berat'),
  place('berat-cafe-1', 'berat', 'cafe', 'Shtepia e Kafes Gimi', 4.6, 'Berat, Albania', '베라트의 숨은 명소로 불리는 셀프서비스 카페', 'Self-service café described as a hidden gem of Berat town'),

  // —— gjirokaster ——
  place('gjirokaster-fine_dining-1', 'gjirokaster', 'fine_dining', 'Te Kalaja Restaurant', 4.6, 'Gjirokastër Castle area, Gjirokastër 6001', '요새 근처의 전통 레스토랑.', 'Traditional restaurant near the fortress.'),
  place('gjirokaster-bakery-1', 'gjirokaster', 'bakery', 'Antigonea 2000', 4.5, 'Gjirokastër, Albania', '페이스트리·젤라토·커피로 유명한 지로카스터의 인기 베이커리', 'Popular Gjirokastër bakery known for pastries, gelato and coffee'),
  place('gjirokaster-cafe-1', 'gjirokaster', 'cafe', 'Kube Cafe', 4.4, 'Gjirokastër, Albania', '아침 커피 맛집으로 꼽히는 지로카스터의 카페', 'Café known as a favorite spot for morning coffee in Gjirokastër'),

  // —— sarande ——
  place('sarande-fine_dining-1', 'sarande', 'fine_dining', 'Observatory Restaurant', 4.9, 'Godine Nr. 75, Lagja Nr.1, Saranda 9702', '해산물 전문 레스토랑.', 'Seafood-focused restaurant.'),

  place('sarande-bakery-1', 'sarande', 'bakery', 'Memaj Bakery & Pastry', 4.5, 'SH81, Ksamil, Sarandë, Albania', '24시간 운영하는 사란데 인근의 전통 및 현대 페이스트리 전문점', '24-hour bakery near Sarandë offering traditional and contemporary pastries'),
  place('sarande-cafe-1', 'sarande', 'cafe', 'Breakfast & Coffee', 4.5, 'Rrg. Mitat Hoxha, 9701 Sarandë, Albania', '현지인과 여행자가 함께 찾는 사란데의 편안한 카페', 'Relaxed Sarandë café where locals and travelers gather for good coffee'),
]
