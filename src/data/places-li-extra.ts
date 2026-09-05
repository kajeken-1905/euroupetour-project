import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLIExtra: Place[] = [
  // —— vaduz ——
  place('vaduz-fine_dining-1', 'vaduz', 'fine_dining', 'Restaurant Marée', 4.8, 'Mareestrasse 29, 9490 Vaduz', '파크 호텔 존넨호프 내 미슐랭 1스타 레스토랑.', 'One-Michelin-star restaurant inside the Park Hotel Sonnenhof.', { reviewCount: 290 }),
  place('vaduz-fine_dining-2', 'vaduz', 'fine_dining', 'Restaurant Torkel', 4.8, 'Hintergasse 9, 9490 Vaduz', '왕실 포도밭 한가운데의 미슐랭 1스타 레스토랑, 오래된 와인 압착기가 보존된 공간.', "One-Michelin-star restaurant amid the princely vineyards, built around a preserved antique wine press.", { reviewCount: 151 }),
  place('vaduz-fine_dining-3', 'vaduz', 'fine_dining', 'Schlössle Mahal', 4.4, 'Fürst-Franz-Josef-Strasse 68, 9490 Vaduz', '전통 인테리어의 인도 요리 레스토랑.', 'Indian restaurant with traditional decor.', { reviewCount: 446 }),
  place('vaduz-bakery-1', 'vaduz', 'bakery', 'Balu Bäckerei Konditorei', 4.3, 'Städtle 17, 9490 Vaduz', '슈테틀레 중심가의 베이커리 겸 제과점, 실내외 좌석을 갖춤.', 'Bakery and pâtisserie in the heart of Städtle, with indoor and outdoor seating.', { reviewCount: 347 }),
  place('vaduz-bakery-2', 'vaduz', 'bakery', 'Dorfbeck Dörig AG', 4.8, 'Altenbach 14, 9490 Vaduz', '높은 평점을 자랑하는 파두츠 외곽의 베이커리.', 'Highly rated bakery on the outskirts of Vaduz.', { reviewCount: 39 }),
  place('vaduz-cafe-1', 'vaduz', 'cafe', 'Cafe Amann', 4.2, 'Äulestrasse 56, 9490 Vaduz', '현지인들이 즐겨 찾는 베이커리 카페, 초콜릿 크루아상으로 유명.', 'Bakery café popular with locals, known for its chocolate croissants.'),
  place('vaduz-cafe-2', 'vaduz', 'cafe', '44 Café im Hof', 4.6, 'Städtle 44, 9490 Vaduz', '리히텐슈타인 국립박물관 맞은편의 카페, 수제 밀크셰이크와 페이스트리로 유명.', "Café opposite the Liechtenstein National Museum, known for its homemade milkshakes and pastries.", { reviewCount: 86 }),

  // —— schaan ——
  place('schaan-fine_dining-1', 'schaan', 'fine_dining', 'Restaurant Forum', 4.6, 'Gapetschstrasse 87, 9494 Schaan', '슈니첼·코르동 블루의 전통 요리, 가성비 좋은 스위스·유럽 요리.', 'Traditional dishes like schnitzel and cordon bleu, affordable Swiss-European cuisine.', { reviewCount: 378 }),
  place('schaan-fine_dining-2', 'schaan', 'fine_dining', 'Liechtensteiner Braustube', 4.6, 'Im alten Riet 156, 9494 Schaan', '자가 양조 맥주로 유명한 샤안의 브루펍 레스토랑.', 'Brewpub restaurant in Schaan known for its house-brewed beer.', { reviewCount: 329 }),
  place('schaan-fine_dining-3', 'schaan', 'fine_dining', 'Restaurant Rössle', 4.5, 'Landstrasse 48, 9494 Schaan', '전통 가스트호프 스타일의 샤안 레스토랑.', 'Traditional Gasthof-style restaurant in Schaan.', { reviewCount: 233 }),
  place('schaan-bakery-1', 'schaan', 'bakery', 'Bäckerei Gassner', 4.5, 'Landstrasse 170, 9494 Schaan, Liechtenstein', '전통 제빵 기술로 만든 빵과 페이스트리로 유명한 샤안의 베이커리', 'Schaan bakery known for traditional baking and homemade specialties'),
  place('schaan-bakery-2', 'schaan', 'bakery', 'Gusto Italiano GmbH', 4.7, 'Landstrasse 3, 9494 Schaan', '이탈리아식 페이스트리를 선보이는 샤안의 제과점.', 'Pastry shop in Schaan specializing in Italian-style pastries.', { reviewCount: 37 }),
  place('schaan-cafe-1', 'schaan', 'cafe', 'Café Wanger', 4.4, 'Landstrasse 40a, 9494 Schaan, Liechtenstein', '매주 토요일 아침 뷔페로 인기 있는 샤안의 카페 겸 베이커리', 'Schaan café and bakery popular for its Saturday breakfast buffet'),
  place('schaan-cafe-2', 'schaan', 'cafe', 'mueslicup', 5.0, 'Landstrasse 7, 9494 Schaan', '리히텐슈타인 최고의 뮤즐리로 꼽히는 아담한 카페.', "Cozy café known for the country's best muesli.", { reviewCount: 26 }),

  // —— malbun ——
  place('malbun-fine_dining-1', 'malbun', 'fine_dining', 'Restaurant Vogeli', 4.3, '9497 Malbun', '산악 전망의 유러피언 요리.', 'European cuisine with mountain views.'),
  place('malbun-fine_dining-2', 'malbun', 'fine_dining', 'Pizzeria Restaurant Gitzihöll', 4.4, 'Heitastrasse 3, 9497 Malbun', '말분의 피자 전문 레스토랑.', 'Pizza restaurant in Malbun.', { reviewCount: 257 }),

  place('malbun-bakery-1', 'malbun', 'bakery', 'Vögeli Alpenhotel Malbun', 4.3, 'Malbun, 9497 Triesenberg, Liechtenstein', '지역 특산 재료로 만든 아침 뷔페로 유명한 말분의 알펜호텔', 'Malbun\'s oldest alpine hotel, known for its breakfast buffet of local ingredients'),
  place('malbun-cafe-1', 'malbun', 'cafe', 'Restaurant Turna', 4.3, 'Im Malbun 55, 9497 Triesenberg, Liechtenstein', '지역 특선 요리와 올데이 다이닝을 제공하는 말분의 레스토랑 겸 카페', 'Malbun restaurant and café offering regional specialties and all-day dining'),
]
