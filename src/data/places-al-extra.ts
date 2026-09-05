import { place } from './placeFactory'
import type { Place } from '../types'

export const placesALExtra: Place[] = [
  // —— tirana ——
  place('tirana-fine_dining-1', 'tirana', 'fine_dining', 'Mullixhiu', 4.2, 'Shëtitorja Lasgush Poradeci, Tirana', '농가·시즌 알바니아 파인.', 'Farm and seasonal Albanian fine dining.', { reviewCount: 2334 }),
  place('tirana-fine_dining-2', 'tirana', 'fine_dining', 'Oda Garden', 5.0, 'Rruga Shenasi Dishnica, Tirana', '전통 알바니아 요리·건강식 레스토랑.', 'Traditional Albanian and healthy-food restaurant.', { reviewCount: 8274 }),
  place('tirana-fine_dining-3', 'tirana', 'fine_dining', 'Artigiano Restaurant', 5.0, 'Rruga Papa Gjon Pali II, Tirana', '이탈리안 레스토랑.', 'Italian restaurant.', { reviewCount: 10053 }),
  place('tirana-fine_dining-4', 'tirana', 'fine_dining', 'Restaurant Kripë Dhe Piper (Salt and Pepper)', 5.0, 'Rruga Sami Frashëri, Tirana', '유러피안·시푸드 레스토랑.', 'European and seafood restaurant.', { reviewCount: 3099 }),
  place('tirana-fine_dining-5', 'tirana', 'fine_dining', 'EJA Restaurant', 5.0, 'Rruga Gjin Bue Shpata, Tirana', '유러피안·알바니아 레스토랑.', 'European and Albanian restaurant.', { reviewCount: 2089 }),
  place('tirana-bakery-1', 'tirana', 'bakery', 'Byrektore', 4.7, 'Bulevardi Gjergj Fishta 4, Tirana', '부렉 전문점.', 'Byrek specialist.', { reviewCount: 274 }),
  place('tirana-bakery-2', 'tirana', 'bakery', 'Dani Byrektore', 4.8, 'Rruga Myrtezim Këlliçi 2, Tirana', '부렉 전문점.', 'Byrek specialist.', { reviewCount: 270 }),
  place('tirana-bakery-3', 'tirana', 'bakery', 'Byrek Special "Luani"', 4.5, 'Bardhok Biba, Tirana', '부렉 전문점.', 'Byrek specialist.', { reviewCount: 491 }),
  place('tirana-cafe-1', 'tirana', 'cafe', "Frut'za Vogel | Specialty Coffee", 4.9, 'Gjergj Fishta, Tirana', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 226 }),
  place('tirana-cafe-2', 'tirana', 'cafe', "Frut'za | Blloku - Specialty Coffee & All Day Brunch", 4.8, 'Andon Zako Çajupi, Tirana', '블로쿠 스페셜티 커피·브런치.', 'Blloku specialty coffee and brunch.', { reviewCount: 385 }),
  place('tirana-cafe-3', 'tirana', 'cafe', 'SECA Coffee', 5.0, 'Rruga Janos Hunyadi, Tirana', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 271 }),

  // —— berat ——
  place('berat-fine_dining-1', 'berat', 'fine_dining', 'Homemade Food Lili', 4.5, 'Rruga Nikolla Buhuri, Berat 5001', '구시가의 전통 알바니아 가정식.', 'Traditional Albanian home cooking in the Old Town.'),
  place('berat-fine_dining-2', 'berat', 'fine_dining', 'Bar-Restorant Zonja Gjenë', 5.0, 'Rruga Antipatrea, Mangalem, Berat 5001', '망갈렘 지구의 인기 레스토랑 겸 바.', 'Popular restaurant and bar in the Mangalem quarter.', { reviewCount: 2331 }),
  place('berat-bakery-1', 'berat', 'bakery', 'Pasticeri Soni', 4.6, 'Berat, Albania', '베라트에서 평이 아주 좋은 제과점', 'Highly rated bakery-confectionery in Berat'),
  place('berat-bakery-2', 'berat', 'bakery', 'Pastiçeri Tori', 4.8, 'Llambi Guxhumani, Mangalem, Berat 5001', '망갈렘 지구의 제과점.', 'Pastry shop in the Mangalem quarter.', { reviewCount: 263 }),
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
