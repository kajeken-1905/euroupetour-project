import { place } from './placeFactory'
import type { Place } from '../types'

export const placesBGExtra: Place[] = [
  // —— sofia ——
  place('sofia-fine_dining-1', 'sofia', 'fine_dining', 'Made in Blue', 4.5, 'Sofia', '모던 불가리아 다이닝.', 'Modern Bulgarian dining.', { reviewCount: 1100 }),
  place('sofia-fine_dining-2', 'sofia', 'fine_dining', 'Cosmos', 4.5, 'Sofia', '창의 코스 파인.', 'Creative tasting fine dining.', { reviewCount: 900 }),
  place('sofia-fine_dining-3', 'sofia', 'fine_dining', 'Raketa Rakia Bar', 4.4, 'Sofia', '로컬 라키아·캐주얼.', 'Local rakia and casual dining.', { reviewCount: 2100 }),
  place('sofia-fine_dining-4', 'sofia', 'fine_dining', 'Before & After', 4.4, 'Sofia', '시즌 비스트로.', 'Seasonal bistro.', { reviewCount: 1400 }),
  place('sofia-fine_dining-5', 'sofia', 'fine_dining', 'Manastirska Magernitsa', 4.4, 'Sofia', '전통 불가리아 요리.', 'Traditional Bulgarian cuisine.', { reviewCount: 2800 }),
  place('sofia-bakery-1', 'sofia', 'bakery', 'Penchevi / local bakeries', 4.4, 'Sofia', '바니차·로컬 빵.', 'Banitsa and local bread.', { reviewCount: 1600 }),
  place('sofia-bakery-2', 'sofia', 'bakery', 'Sweet & Coffee', 4.3, 'Sofia', '케이크·페이스트리.', 'Cakes and pastries.', { reviewCount: 1200 }),
  place('sofia-bakery-3', 'sofia', 'bakery', 'Bread House Sofia', 4.4, 'Sofia', '사워도우 베이커리.', 'Sourdough bakery.', { reviewCount: 900 }),
  place('sofia-bakery-4', 'sofia', 'bakery', 'Traditional bakery stalls', 4.3, 'Sofia', '시장 빵 가판.', 'Market bakery stalls.', { reviewCount: 1400 }),
  place('sofia-cafe-1', 'sofia', 'cafe', 'Coffee Break', 4.5, 'Sofia', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1600 }),
  place('sofia-cafe-2', 'sofia', 'cafe', 'The Stairs / loft cafés', 4.4, 'Sofia', '로프트 카페.', 'Loft café.', { reviewCount: 1200 }),
  place('sofia-cafe-3', 'sofia', 'cafe', 'Cafe Theatre', 4.3, 'Sofia', '클래식 카페.', 'Classic café.', { reviewCount: 1800 }),
  place('sofia-cafe-4', 'sofia', 'cafe', 'Brunch cafés Vitosha', 4.4, 'Sofia', '비토샤 브런치.', 'Vitosha brunch cafés.', { reviewCount: 1400 }),

  // —— plovdiv ——
  place('plovdiv-fine_dining-1', 'plovdiv', 'fine_dining', 'Pavaj', 4.5, 'Zlatarska 7, Kapana District, Plovdiv 4000', '카파나 지구의 대표 불가리아 요리.', 'Leading Bulgarian restaurant in the Kapana District.'),
  place('plovdiv-bakery-1', 'plovdiv', 'bakery', 'Bakery Art', 4.5, 'Kiril i Metodiy St 16, 4000 Plovdiv, Bulgaria', '플로브디프에서 가장 오래된 빵집 중 하나로 다양한 페이스트리로 유명', 'One of Plovdiv\'s oldest bakeries, known for its wide variety of pastries'),
  place('plovdiv-cafe-1', 'plovdiv', 'cafe', 'El Greco', 4.4, 'Plovdiv, Bulgaria', '플로브디프 중심가의 인기 베이커리 카페', 'Popular bakery café in central Plovdiv'),

  // —— varna ——
  place('varna-fine_dining-1', 'varna', 'fine_dining', 'Mehana Kashtata', 4.4, 'Makedonia 154, 9000 Varna', '전통 불가리아 가정식.', 'Traditional Bulgarian home cooking.'),
  place('varna-bakery-1', 'varna', 'bakery', 'Bakery Parmaksazov', 4.5, 'ul. Dragoman 28, 9000 Varna, Bulgaria', '코주낙(부활절 빵)으로 유명한 바르나의 전통 빵집', 'Traditional Varna bakery famous for its kozunak (Easter bread)'),
  place('varna-cafe-1', 'varna', 'cafe', 'The Social Teahouse', 4.5, 'ul. Slivnitsa 5, 9000 Varna, Bulgaria', '코워킹 공간을 갖춘 세련된 분위기의 바르나 카페', 'Stylish Varna café with a coworking area, great for breakfast'),

  // —— veliko-tarnovo ——
  place('veliko-tarnovo-fine_dining-1', 'veliko-tarnovo', 'fine_dining', 'Kolyo Ficheto Complex', 4.5, 'Georgi S. Rakovski 19, Veliko Tarnovo 5000', '19세기 건물의 역사적인 레스토랑.', 'Historic restaurant in a 19th-century inn.'),
  place('veliko-tarnovo-bakery-1', 'veliko-tarnovo', 'bakery', 'Kozunacheni Komincheta', 4.4, 'Veliko Tarnovo, Bulgaria', '달콤한 코주낙 빵으로 유명한 벨리코 터르노보의 인기 베이커리', 'Popular Veliko Tarnovo bakery known for its sweet kozunak bread'),
  place('veliko-tarnovo-cafe-1', 'veliko-tarnovo', 'cafe', 'Amaretto', 4.4, 'bul. Nezavisimost 39, 5000 Veliko Tarnovo, Bulgaria', '셀프 서비스 방식의 인기 커피숍, 페이스트리로 유명', 'Popular self-service coffee shop known for its pastries'),

  // —— nessebar ——
  place('nessebar-fine_dining-1', 'nessebar', 'fine_dining', 'Old Nessebar', 4.5, 'Ivan Alexander 11, Nessebar 8230', '바다 전망의 시푸드 레스토랑.', 'Seafood restaurant with sea views.'),

  place('nessebar-bakery-1', 'nessebar', 'bakery', 'Foyer Café & Bakery', 4.6, 'str. Perla 55, Nessebar, Bulgaria', '네세바르 신시가지에서 연중 운영되는 인기 베이커리 카페', 'Popular year-round bakery café in Nessebar\'s New Town'),
  place('nessebar-cafe-1', 'nessebar', 'cafe', '221B Baker Street', 4.6, 'Nessebar, Bulgaria', '네세바르에서 최고의 페이스트리와 홈메이드 케이크로 알려진 카페', 'Café known for the best pastry and homemade cakes in Nessebar'),
]
