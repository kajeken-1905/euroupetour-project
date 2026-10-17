import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLIExtra: Place[] = [
  // —— vaduz ——
  place('vaduz-fine_dining-1', 'vaduz', 'fine_dining', 'Restaurant Marée', 'Mareestrasse 29, 9490 Vaduz', '파크 호텔 존넨호프 안의 레스토랑. 미쉐린 가이드에 실려 있습니다.', 'Restaurant in the Park Hotel Sonnenhof, listed in the Michelin Guide.'),
  place('vaduz-fine_dining-2', 'vaduz', 'fine_dining', 'Restaurant Torkel', 'Hintergass 9, 9490 Vaduz', '왕실 포도밭 안의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant among the princely vineyards; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('vaduz-fine_dining-3', 'vaduz', 'fine_dining', 'Schlössle Mahal', 'Fürst-Franz-Josef-Strasse 68, 9490 Vaduz', '전통 인테리어의 인도 요리 레스토랑.', 'Indian restaurant with traditional decor.'),
  place('vaduz-bakery-1', 'vaduz', 'bakery', 'Balu Bäckerei Konditorei', 'Städtle 17, 9490 Vaduz', '슈테틀레 중심가의 베이커리 겸 제과점, 실내외 좌석을 갖춤.', 'Bakery and pâtisserie in the heart of Städtle, with indoor and outdoor seating.'),
  place('vaduz-bakery-2', 'vaduz', 'bakery', 'Dorfbeck Dörig AG', 'Altenbach 14, 9490 Vaduz', '파두츠 외곽의 베이커리.', 'Bakery on the outskirts of Vaduz.'),
  place('vaduz-cafe-1', 'vaduz', 'cafe', 'Cafe Amann', 'Äulestrasse 56, 9490 Vaduz', '초콜릿 크루아상이 있는 빵집 겸 카페.', 'Bakery café with chocolate croissants.'),
  place('vaduz-cafe-2', 'vaduz', 'cafe', '44 Café im Hof', 'Städtle 44, 9490 Vaduz', '리히텐슈타인 국립박물관 맞은편 카페. 밀크셰이크와 페이스트리가 있습니다.', 'Café opposite the Liechtenstein National Museum with milkshakes and pastries.'),

  // —— schaan ——
  place('schaan-fine_dining-1', 'schaan', 'fine_dining', 'Restaurant Forum', 'Gapetschstrasse 87, 9494 Schaan', '슈니첼·코르동 블루의 전통 요리, 가성비 좋은 스위스·유럽 요리.', 'Traditional dishes like schnitzel and cordon bleu, affordable Swiss-European cuisine.'),
  place('schaan-fine_dining-2', 'schaan', 'fine_dining', 'Liechtensteiner Braustube', 'Im alten Riet 156, 9494 Schaan', '직접 맥주를 만드는 샤안의 브루펍 레스토랑.', 'Brewpub restaurant in Schaan brewing its own beer.'),
  place('schaan-fine_dining-3', 'schaan', 'fine_dining', 'Restaurant Rössle', 'Landstrasse 48, 9494 Schaan', '전통 가스트호프 스타일의 샤안 레스토랑.', 'Traditional Gasthof-style restaurant in Schaan.'),
  place('schaan-bakery-1', 'schaan', 'bakery', 'Bäckerei Gassner', 'Landstrasse 170, 9494 Schaan, Liechtenstein', '전통 방식으로 빵과 페이스트리를 굽는 샤안의 빵집.', 'Schaan bakery making bread and pastries the traditional way.'),
  place('schaan-bakery-2', 'schaan', 'bakery', 'Gusto Italiano GmbH', 'Landstrasse 3, 9494 Schaan', '이탈리아식 페이스트리를 선보이는 샤안의 제과점.', 'Pastry shop in Schaan specializing in Italian-style pastries.'),
  place('schaan-cafe-1', 'schaan', 'cafe', 'Café Wanger', 'Landstrasse 40a, 9494 Schaan, Liechtenstein', '토요일 아침 뷔페가 있는 샤안의 카페 겸 빵집.', 'Schaan café-bakery with a Saturday breakfast buffet.'),
  place('schaan-cafe-2', 'schaan', 'cafe', 'mueslicup', 'Landstrasse 7, 9494 Schaan', '뮤즐리를 내는 아담한 카페.', 'Small café serving muesli.'),

  // —— malbun ——
  place('malbun-fine_dining-1', 'malbun', 'fine_dining', 'Restaurant Vogeli', '9497 Malbun', '산악 전망의 유러피언 요리.', 'European cuisine with mountain views.'),
  place('malbun-fine_dining-2', 'malbun', 'fine_dining', 'Pizzeria Restaurant Gitzihöll', 'Heitastrasse 3, 9497 Malbun', '말분의 피자 전문 레스토랑.', 'Pizza restaurant in Malbun.'),

  place('malbun-bakery-1', 'malbun', 'bakery', 'Vögeli Alpenhotel Malbun', 'Malbun, 9497 Triesenberg, Liechtenstein', '지역 재료로 아침 뷔페를 내는 말분의 알프스 호텔.', 'Malbun alpine hotel with a breakfast buffet of local produce.'),
  place('malbun-cafe-1', 'malbun', 'cafe', 'Restaurant Turna', 'Im Malbun 55, 9497 Triesenberg, Liechtenstein', '지역 특선 요리와 올데이 다이닝을 제공하는 말분의 레스토랑 겸 카페', 'Malbun restaurant and café offering regional specialties and all-day dining'),
]
