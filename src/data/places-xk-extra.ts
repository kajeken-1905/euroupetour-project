import { place } from './placeFactory'
import type { Place } from '../types'

export const placesXKExtra: Place[] = [
  // —— pristina ——
  place('pristina-fine_dining-1', 'pristina', 'fine_dining', 'Sospiro Restaurant', 4.6, 'Rruga California 52, Marigona Residence, Prishtina, Kosovo', '코소보 최초의 이탈리안 파인다이닝 레스토랑', 'Kosovo\'s first exclusive Italian fine-dining restaurant'),
  place('pristina-fine_dining-1', 'pristina', 'fine_dining', 'Pristina Fine Dining 1', 4.6, 'Pristina', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 320 }),
  place('pristina-fine_dining-2', 'pristina', 'fine_dining', 'Pristina Fine Dining 2', 4.2, 'Pristina', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 560 }),
  place('pristina-fine_dining-3', 'pristina', 'fine_dining', 'Pristina Fine Dining 3', 4.5, 'Pristina', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 720 }),
  place('pristina-bakery-1', 'pristina', 'bakery', 'Pristina Bakery 1', 4.3, 'Pristina', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 1100 }),
  place('pristina-bakery-2', 'pristina', 'bakery', 'Pristina Bakery 2', 4.5, 'Pristina', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 980 }),
  place('pristina-bakery-3', 'pristina', 'bakery', 'Pristina Bakery 3', 4.5, 'Pristina', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 480 }),
  place('pristina-cafe-1', 'pristina', 'cafe', 'Specialty Coffee Pristina 1', 4.2, 'Pristina', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 560 }),
  place('pristina-cafe-2', 'pristina', 'cafe', 'Pristina Café 2', 4.5, 'Pristina', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 860 }),
  place('pristina-cafe-3', 'pristina', 'cafe', 'Pristina Café 3', 4.5, 'Pristina', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 560 }),

  // —— prizren ——
  place('prizren-fine_dining-1', 'prizren', 'fine_dining', 'Te Syla', 4.5, 'Rruga Sejdi Begu, Prizren 20000, Kosovo', '샤데르반 광장 인근 비스트리차 강이 내려다보이는 테라스로 유명한 프리즈렌의 대표 레스토랑', 'Prizren\'s best-known restaurant, near Shadërvan Square with a terrace overlooking the Bistrica River'),
  place('prizren-fine_dining-1', 'prizren', 'fine_dining', 'Prizren Fine Dining 1', 4.5, 'Prizren', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 2100 }),
  place('prizren-fine_dining-2', 'prizren', 'fine_dining', 'Prizren Fine Dining 2', 4.3, 'Prizren', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 1400 }),
  place('prizren-fine_dining-3', 'prizren', 'fine_dining', 'Prizren Fine Dining 3', 4.6, 'Prizren', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 980 }),
  place('prizren-bakery-1', 'prizren', 'bakery', 'Prizren Bakery 1', 4.7, 'Prizren', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 560 }),
  place('prizren-bakery-2', 'prizren', 'bakery', 'Prizren Bakery 2', 4.7, 'Prizren', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 640 }),
  place('prizren-bakery-3', 'prizren', 'bakery', 'Prizren Bakery 3', 4.6, 'Prizren', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 560 }),
  place('prizren-cafe-1', 'prizren', 'cafe', 'Specialty Coffee Prizren 1', 4.6, 'Prizren', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 320 }),
  place('prizren-cafe-2', 'prizren', 'cafe', 'Prizren Café 2', 4.3, 'Prizren', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 860 }),
  place('prizren-cafe-3', 'prizren', 'cafe', 'Prizren Café 3', 4.6, 'Prizren', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 980 }),

  // —— peja ——
  place('peja-fine_dining-1', 'peja', 'fine_dining', 'Kulla e Zenel Beut', 4.5, '51 William Walker Street, Pejë, Kosovo', '페야 중심가에 위치한 문화유산 저택을 개조한 레스토랑으로 두카기니 지역 전통 요리를 선보임', 'Restaurant in a historic tower house in central Peja serving traditional dishes of the Dukagjini region'),
  place('peja-fine_dining-1', 'peja', 'fine_dining', 'Peja Fine Dining 1', 4.6, 'Peja', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 640 }),
  place('peja-fine_dining-2', 'peja', 'fine_dining', 'Peja Fine Dining 2', 4.3, 'Peja', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 1100 }),
  place('peja-fine_dining-3', 'peja', 'fine_dining', 'Peja Fine Dining 3', 4.4, 'Peja', '모던 코스 다이닝.', 'Modern course dining.', { reviewCount: 640 }),
  place('peja-bakery-1', 'peja', 'bakery', 'Peja Bakery 1', 4.3, 'Peja', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 2100 }),
  place('peja-bakery-2', 'peja', 'bakery', 'Peja Bakery 2', 4.3, 'Peja', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 860 }),
  place('peja-bakery-3', 'peja', 'bakery', 'Peja Bakery 3', 4.3, 'Peja', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 480 }),
  place('peja-cafe-1', 'peja', 'cafe', 'Specialty Coffee Peja 1', 4.7, 'Peja', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 720 }),
  place('peja-cafe-2', 'peja', 'cafe', 'Peja Café 2', 4.4, 'Peja', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('peja-cafe-3', 'peja', 'cafe', 'Peja Café 3', 4.4, 'Peja', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1400 }),

]
