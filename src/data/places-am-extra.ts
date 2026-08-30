import { place } from './placeFactory'
import type { Place } from '../types'

export const placesAMExtra: Place[] = [
  // —— yerevan ——
  place('yerevan-fine_dining-1', 'yerevan', 'fine_dining', 'Lavash', 4.5, '21 Tumanyan St, Yerevan 0001', '예레반의 인기 아르메니아 레스토랑.', 'Popular Armenian restaurant in Yerevan.'),
  place('yerevan-fine_dining-1', 'yerevan', 'fine_dining', 'Yerevan Fine Dining 1', 4.4, 'Yerevan', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 560 }),
  place('yerevan-fine_dining-2', 'yerevan', 'fine_dining', 'Yerevan Fine Dining 2', 4.5, 'Yerevan', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 1400 }),
  place('yerevan-fine_dining-3', 'yerevan', 'fine_dining', 'Yerevan Fine Dining 3', 4.7, 'Yerevan', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 1600 }),
  place('yerevan-bakery-1', 'yerevan', 'bakery', 'Yerevan Bakery 1', 4.4, 'Yerevan', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 320 }),
  place('yerevan-bakery-2', 'yerevan', 'bakery', 'Yerevan Bakery 2', 4.3, 'Yerevan', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 860 }),
  place('yerevan-bakery-3', 'yerevan', 'bakery', 'Yerevan Bakery 3', 4.6, 'Yerevan', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 720 }),
  place('yerevan-cafe-1', 'yerevan', 'cafe', 'Specialty Coffee Yerevan 1', 4.3, 'Yerevan', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 640 }),
  place('yerevan-cafe-2', 'yerevan', 'cafe', 'Yerevan Café 2', 4.6, 'Yerevan', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 480 }),
  place('yerevan-cafe-3', 'yerevan', 'cafe', 'Yerevan Café 3', 4.2, 'Yerevan', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),

  // —— gyumri ——
  place('gyumri-fine_dining-1', 'gyumri', 'fine_dining', 'Gwoog Gastrohouse', 4.6, 'Tigran Mets Avenue 11/3, Gyumri', '귬리의 대표 로컬 레스토랑.', 'Well-loved local restaurant in Gyumri.'),
  place('gyumri-fine_dining-1', 'gyumri', 'fine_dining', 'Gyumri Fine Dining 1', 4.3, 'Gyumri', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 1400 }),
  place('gyumri-fine_dining-2', 'gyumri', 'fine_dining', 'Gyumri Fine Dining 2', 4.6, 'Gyumri', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 980 }),
  place('gyumri-fine_dining-3', 'gyumri', 'fine_dining', 'Gyumri Fine Dining 3', 4.7, 'Gyumri', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 1400 }),
  place('gyumri-bakery-1', 'gyumri', 'bakery', 'Gyumri Bakery 1', 4.6, 'Gyumri', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 640 }),
  place('gyumri-bakery-2', 'gyumri', 'bakery', 'Gyumri Bakery 2', 4.6, 'Gyumri', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 980 }),
  place('gyumri-bakery-3', 'gyumri', 'bakery', 'Gyumri Bakery 3', 4.7, 'Gyumri', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 2100 }),
  place('gyumri-cafe-1', 'gyumri', 'cafe', 'Specialty Coffee Gyumri 1', 4.4, 'Gyumri', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('gyumri-cafe-2', 'gyumri', 'cafe', 'Gyumri Café 2', 4.4, 'Gyumri', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 640 }),
  place('gyumri-cafe-3', 'gyumri', 'cafe', 'Gyumri Café 3', 4.3, 'Gyumri', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 860 }),

  // —— dilijan ——
  place('dilijan-fine_dining-1', 'dilijan', 'fine_dining', 'Tava Restaurant', 4.5, 'Myasnikyan 37/4, Dilijan', '딜리잔의 대표 레스토랑.', 'Leading restaurant in Dilijan.'),
  place('dilijan-fine_dining-1', 'dilijan', 'fine_dining', 'Dilijan Fine Dining 1', 4.2, 'Dilijan', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 480 }),
  place('dilijan-fine_dining-2', 'dilijan', 'fine_dining', 'Dilijan Fine Dining 2', 4.7, 'Dilijan', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 860 }),
  place('dilijan-fine_dining-3', 'dilijan', 'fine_dining', 'Dilijan Fine Dining 3', 4.2, 'Dilijan', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 640 }),
  place('dilijan-bakery-1', 'dilijan', 'bakery', 'Dilijan Bakery 1', 4.3, 'Dilijan', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 1100 }),
  place('dilijan-bakery-2', 'dilijan', 'bakery', 'Dilijan Bakery 2', 4.3, 'Dilijan', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 560 }),
  place('dilijan-bakery-3', 'dilijan', 'bakery', 'Dilijan Bakery 3', 4.6, 'Dilijan', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 1600 }),
  place('dilijan-cafe-1', 'dilijan', 'cafe', 'Specialty Coffee Dilijan 1', 4.5, 'Dilijan', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 640 }),
  place('dilijan-cafe-2', 'dilijan', 'cafe', 'Dilijan Café 2', 4.6, 'Dilijan', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 980 }),
  place('dilijan-cafe-3', 'dilijan', 'cafe', 'Dilijan Café 3', 4.3, 'Dilijan', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 480 }),

]
