import { place } from './placeFactory'
import type { Place } from '../types'

export const placesUAExtra: Place[] = [
  // —— kyiv ——
  place('kyiv-fine_dining-1', 'kyiv', 'fine_dining', 'Mirali', 4.6, 'Tarasa Shevchenko Blvd 1, Kyiv, 01004, Ukraine', '포딜 지구에 위치한 우크라이나 계절 식재료를 활용한 창의적인 파인다이닝', 'Fine-dining restaurant in the Podil district celebrating Ukrainian seasonal and local ingredients with innovative gastronomy'),
  place('kyiv-fine_dining-1', 'kyiv', 'fine_dining', 'Kyiv Fine Dining 1', 4.5, 'Kyiv', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 320 }),
  place('kyiv-fine_dining-2', 'kyiv', 'fine_dining', 'Kyiv Fine Dining 2', 4.6, 'Kyiv', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 640 }),
  place('kyiv-bakery-1', 'kyiv', 'bakery', 'Kyiv Bakery 1', 4.5, 'Kyiv', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 1400 }),
  place('kyiv-bakery-2', 'kyiv', 'bakery', 'Kyiv Bakery 2', 4.2, 'Kyiv', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 980 }),
  place('kyiv-bakery-3', 'kyiv', 'bakery', 'Kyiv Bakery 3', 4.2, 'Kyiv', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 480 }),
  place('kyiv-cafe-1', 'kyiv', 'cafe', 'Specialty Coffee Kyiv 1', 4.3, 'Kyiv', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('kyiv-cafe-2', 'kyiv', 'cafe', 'Kyiv Café 2', 4.5, 'Kyiv', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('kyiv-cafe-3', 'kyiv', 'cafe', 'Kyiv Café 3', 4.3, 'Kyiv', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),

  // —— lviv ——
  place('lviv-fine_dining-1', 'lviv', 'fine_dining', 'Amadeus', 4.5, 'Yana Mateika St 6, Lviv, 79000, Ukraine', '리비우 중심가의 옛 오스트리아풍 인테리어가 돋보이는 유서 깊은 레스토랑', 'Renowned restaurant in the heart of Lviv with an atmospheric Old Austrian-style interior'),
  place('lviv-fine_dining-1', 'lviv', 'fine_dining', 'Lviv Fine Dining 1', 4.6, 'Lviv', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 560 }),
  place('lviv-fine_dining-2', 'lviv', 'fine_dining', 'Lviv Fine Dining 2', 4.5, 'Lviv', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 860 }),
  place('lviv-fine_dining-3', 'lviv', 'fine_dining', 'Lviv Fine Dining 3', 4.3, 'Lviv', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 640 }),
  place('lviv-bakery-1', 'lviv', 'bakery', 'Lviv Bakery 1', 4.7, 'Lviv', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 860 }),
  place('lviv-bakery-2', 'lviv', 'bakery', 'Lviv Bakery 2', 4.3, 'Lviv', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 980 }),
  place('lviv-bakery-3', 'lviv', 'bakery', 'Lviv Bakery 3', 4.2, 'Lviv', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 860 }),
  place('lviv-cafe-1', 'lviv', 'cafe', 'Specialty Coffee Lviv 1', 4.5, 'Lviv', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 320 }),
  place('lviv-cafe-2', 'lviv', 'cafe', 'Lviv Café 2', 4.6, 'Lviv', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('lviv-cafe-3', 'lviv', 'cafe', 'Lviv Café 3', 4.3, 'Lviv', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 980 }),

  // —— odesa ——
  place('odesa-fine_dining-1', 'odesa', 'fine_dining', 'Bernardazzi', 4.7, 'Deribasivska St 20, Odesa, 65026, Ukraine', '오데사 최고급 레스토랑으로 꼽히는 아르누보 양식의 이탈리안 레스토랑', 'Widely regarded as Odesa\'s finest restaurant, an upscale Italian dining room in an authentic Art Nouveau setting'),
  place('odesa-fine_dining-1', 'odesa', 'fine_dining', 'Odesa Fine Dining 1', 4.5, 'Odesa', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 480 }),
  place('odesa-fine_dining-2', 'odesa', 'fine_dining', 'Odesa Fine Dining 2', 4.2, 'Odesa', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 640 }),
  place('odesa-fine_dining-3', 'odesa', 'fine_dining', 'Odesa Fine Dining 3', 4.6, 'Odesa', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 480 }),
  place('odesa-bakery-1', 'odesa', 'bakery', 'Odesa Bakery 1', 4.6, 'Odesa', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 480 }),
  place('odesa-bakery-2', 'odesa', 'bakery', 'Odesa Bakery 2', 4.4, 'Odesa', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 1100 }),
  place('odesa-bakery-3', 'odesa', 'bakery', 'Odesa Bakery 3', 4.5, 'Odesa', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 860 }),
  place('odesa-cafe-1', 'odesa', 'cafe', 'Specialty Coffee Odesa 1', 4.3, 'Odesa', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 860 }),
  place('odesa-cafe-2', 'odesa', 'cafe', 'Odesa Café 2', 4.3, 'Odesa', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 720 }),
  place('odesa-cafe-3', 'odesa', 'cafe', 'Odesa Café 3', 4.6, 'Odesa', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),

]
