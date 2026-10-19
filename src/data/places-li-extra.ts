import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLIExtra: Place[] = [
  // —— vaduz ——
  place('vaduz-fine_dining-1', 'vaduz', 'fine_dining', 'Restaurant Marée', 'Mareestrasse 29, 9490 Vaduz', '파크 호텔 존넨호프 안의 레스토랑. 미쉐린 가이드에 실려 있습니다.', 'Restaurant in the Park Hotel Sonnenhof, listed in the Michelin Guide.'),
  place('vaduz-fine_dining-2', 'vaduz', 'fine_dining', 'Restaurant Torkel', 'Hintergass 9, 9490 Vaduz', '왕실 포도밭 안의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant among the princely vineyards; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('vaduz-fine_dining-3', 'vaduz', 'fine_dining', 'Schlössle Mahal', 'Fürst-Franz-Josef-Strasse 68, 9490 Vaduz', '점심 뷔페와 저녁 단품 메뉴를 내는 인도 레스토랑. 채식 메뉴가 다양합니다.', 'Indian restaurant with a lunch buffet and à la carte dinners, with plenty of vegetarian dishes.'),
  place('vaduz-bakery-1', 'vaduz', 'bakery', 'Balu Bäckerei Konditorei', 'Städtle 17, 9490 Vaduz', '슈테틀레 중심의 작은 빵집 겸 카페. 엥가딘 호두 케이크와 배 빵을 냅니다.', 'Small bakery-café in the heart of the Städtle, with Engadine nut cake and pear bread.'),
  place('vaduz-bakery-2', 'vaduz', 'bakery', 'Dorfbeck Dörig AG', 'Altenbach 14, 9490 Vaduz', '파두츠 알텐바흐의 동네 빵집 겸 제과점.', 'Neighbourhood bakery and pastry shop on Altenbach in Vaduz.'),
  place('vaduz-cafe-1', 'vaduz', 'cafe', 'Cafe Amann', 'Äulestrasse 56, 9490 Vaduz', '1874년부터 아만 가족이 운영하는 빵집 겸 카페. 점심 특선이 빨리 떨어집니다.', 'Bakery-café run by the Amann family since 1874; the lunch specials sell out fast.'),
  place('vaduz-cafe-2', 'vaduz', 'cafe', '44 Café im Hof', 'Städtle 44, 9490 Vaduz', '정부 청사 옆 안뜰의 카페. 샤안의 뎀멜 로스터리 커피를 내고 평일 08~17시에 엽니다.', 'Courtyard café beside the government building, serving coffee from Schaan\'s Demmel roastery; weekdays 8am to 5pm.'),

  // —— schaan ——
  place('schaan-fine_dining-1', 'schaan', 'fine_dining', 'Restaurant Forum', 'Gapetschstrasse 87, 9494 Schaan', '슈니첼·코르동 블뢰·취리히식 송아지 요리를 내는 전통 레스토랑. 여름에는 산이 보이는 테라스가 열립니다.', 'Traditional restaurant serving schnitzel, cordon bleu and veal Zurich-style; mountain-view terrace in summer.'),
  place('schaan-fine_dining-2', 'schaan', 'fine_dining', 'Liechtensteiner Braustube', 'Im alten Riet 156, 9494 Schaan', '자체 양조장 맥주와 계절 요리를 내는 브루펍 레스토랑. 비어가든이 있습니다.', 'Brewpub restaurant with beer from its own brewery and seasonal dishes; beer garden.'),
  place('schaan-fine_dining-3', 'schaan', 'fine_dining', 'Restaurant Rössle', 'Landstrasse 48, 9494 Schaan', '190년 역사의 샤안 레스토랑. 코르동 블뢰와 슈니첼이 호평을 받습니다.', 'Schaan restaurant with some 190 years of history, praised for its cordon bleu and schnitzel.'),
  place('schaan-cafe-1', 'schaan', 'cafe', 'Café Wanger', 'Landstrasse 40a, 9494 Schaan, Liechtenstein', '바커라이 방거의 카페 겸 케이크 가게. 토요일 아침 뷔페가 인기입니다.', 'Café and cake shop of the Wanger bakery, popular for its Saturday breakfast buffet.'),

  // —— malbun ——
  place('malbun-fine_dining-1', 'malbun', 'fine_dining', 'Restaurant Vogeli', 'Im Malbun 11, 9497 Triesenberg, Liechtenstein', '말분에서 가장 오래된 호텔 안의 레스토랑. 지역·국제 요리를 내고 해 드는 테라스가 있습니다.', 'Restaurant in Malbun\'s oldest hotel, serving regional and international dishes, with a sun terrace.'),
  place('malbun-fine_dining-2', 'malbun', 'fine_dining', 'Pizzeria Restaurant Gitzihöll', 'Heitastrasse 3, 9497 Malbun', '직접 만든 샐러드 소스를 쓰는 피자가 대표인 말분의 피자집. 화·수요일은 쉽니다.', 'Malbun pizzeria known for pizza made with its homemade salad sauce; closed Tuesdays and Wednesdays.'),

  place('malbun-cafe-1', 'malbun', 'cafe', 'Restaurant Turna', 'Im Malbun 55, 9497 Triesenberg, Liechtenstein', '셰프가 직접 지역 식재료로 요리하는 말분의 레스토랑. 정원과 테라스가 있습니다.', 'Malbun restaurant where the chef cooks with regional ingredients; garden and terrace.'),
]
