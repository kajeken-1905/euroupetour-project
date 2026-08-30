import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLIExtra: Place[] = [
  // —— vaduz ——
  place('vaduz-fine_dining-1', 'vaduz', 'fine_dining', 'Restaurant Torkel', 4.6, 'Vaduz', '왕실 와이너리 다이닝.', 'Princely winery dining.', { reviewCount: 700 }),
  place('vaduz-fine_dining-2', 'vaduz', 'fine_dining', 'Hotel restaurant Vaduz', 4.4, 'Vaduz', '호텔 파인 다이닝.', 'Hotel fine dining.', { reviewCount: 600 }),
  place('vaduz-fine_dining-3', 'vaduz', 'fine_dining', 'Alpine bistro Vaduz', 4.4, 'Vaduz', '알파인 비스트로.', 'Alpine bistro.', { reviewCount: 800 }),
  place('vaduz-fine_dining-4', 'vaduz', 'fine_dining', 'Rhine-view dining', 4.3, 'Vaduz', '라인 전망 다이닝.', 'Rhine-view dining.', { reviewCount: 540 }),
  place('vaduz-fine_dining-5', 'vaduz', 'fine_dining', 'Local Liechtenstein cuisine', 4.3, 'Vaduz', '로컬 공국 요리.', 'Local princely cuisine.', { reviewCount: 720 }),
  place('vaduz-bakery-1', 'vaduz', 'bakery', 'Bäckerei Vaduz', 4.5, 'Vaduz', '스위스식 빵집.', 'Swiss-style bakery.', { reviewCount: 800 }),
  place('vaduz-bakery-2', 'vaduz', 'bakery', 'Konditorei Vaduz', 4.4, 'Vaduz', '케이크·페이스트리.', 'Cakes and pastries.', { reviewCount: 640 }),
  place('vaduz-bakery-3', 'vaduz', 'bakery', 'Mountain bread shop', 4.3, 'Vaduz', '산악 빵집.', 'Mountain bread shop.', { reviewCount: 480 }),
  place('vaduz-bakery-4', 'vaduz', 'bakery', 'Café bakery Städtle', 4.3, 'Vaduz', '슈테틀레 베이커리 카페.', 'Städtle bakery café.', { reviewCount: 700 }),
  place('vaduz-cafe-1', 'vaduz', 'cafe', 'Specialty coffee Vaduz', 4.5, 'Vaduz', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 560 }),
  place('vaduz-cafe-2', 'vaduz', 'cafe', 'Städtle café', 4.4, 'Vaduz', '메인 거리 카페.', 'Main-street café.', { reviewCount: 900 }),
  place('vaduz-cafe-3', 'vaduz', 'cafe', 'Museum café', 4.3, 'Vaduz', '미술관 카페.', 'Museum café.', { reviewCount: 480 }),
  place('vaduz-cafe-4', 'vaduz', 'cafe', 'Brunch café Vaduz', 4.3, 'Vaduz', '브런치 카페.', 'Brunch café.', { reviewCount: 420 }),

  // —— schaan ——
  place('schaan-fine_dining-1', 'schaan', 'fine_dining', 'Restaurant Forum', 4.4, 'Gapetschstrasse 87, 9494 Schaan', '슈니첼·코르동 블루의 전통 요리.', 'Traditional dishes like schnitzel and cordon bleu.'),
  place('schaan-bakery-1', 'schaan', 'bakery', 'Bäckerei Gassner', 4.5, 'Landstrasse 170, 9494 Schaan, Liechtenstein', '전통 제빵 기술로 만든 빵과 페이스트리로 유명한 샤안의 베이커리', 'Schaan bakery known for traditional baking and homemade specialties'),
  place('schaan-cafe-1', 'schaan', 'cafe', 'Café Wanger', 4.4, 'Landstrasse 40a, 9494 Schaan, Liechtenstein', '매주 토요일 아침 뷔페로 인기 있는 샤안의 카페 겸 베이커리', 'Schaan café and bakery popular for its Saturday breakfast buffet'),

  // —— malbun ——
  place('malbun-fine_dining-1', 'malbun', 'fine_dining', 'Restaurant Vogeli', 4.3, '9497 Malbun', '산악 전망의 유러피언 요리.', 'European cuisine with mountain views.'),

  place('malbun-bakery-1', 'malbun', 'bakery', 'Vögeli Alpenhotel Malbun', 4.3, 'Malbun, 9497 Triesenberg, Liechtenstein', '지역 특산 재료로 만든 아침 뷔페로 유명한 말분의 알펜호텔', 'Malbun\'s oldest alpine hotel, known for its breakfast buffet of local ingredients'),
  place('malbun-cafe-1', 'malbun', 'cafe', 'Restaurant Turna', 4.3, 'Im Malbun 55, 9497 Triesenberg, Liechtenstein', '지역 특선 요리와 올데이 다이닝을 제공하는 말분의 레스토랑 겸 카페', 'Malbun restaurant and café offering regional specialties and all-day dining'),
]
