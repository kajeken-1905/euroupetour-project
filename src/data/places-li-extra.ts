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

  place('malbun-fine_dining-3', 'malbun', 'fine_dining', 'Restaurant Turna', 'Im Malbun 55, 9497 Triesenberg, Liechtenstein', '셰프가 직접 지역 식재료로 요리하는 말분의 레스토랑. 정원과 테라스가 있습니다.', 'Malbun restaurant where the chef cooks with regional ingredients; garden and terrace.'),

  // —— vaduz: restaurants, bakeries and cafés (2026-11-21) ——
  place('vaduz-fine_dining-4', 'vaduz', 'fine_dining', 'Chapter Two', 'Städtle 23, 9490 Vaduz', '미쉐린 가이드에 실린 슈테틀레 거리의 현대 요리 레스토랑.', 'Contemporary restaurant on the Städtle, listed in the MICHELIN Guide.'),

  // —— balzers: restaurants, bakeries and cafés (2026-11-21) ——
  place('balzers-fine_dining-1', 'balzers', 'fine_dining', 'Zentrum Balzers - Ristorante Pizzeria', 'Gnetsch 34, 9496 Balzers', '발처스 중심의 이탈리아식 피자집 겸 레스토랑. 구글 지도 평점 4.6.', 'Italian pizzeria and restaurant in central Balzers. Rated 4.6 on Google Maps.'),

  // —— triesenberg: restaurants, bakeries and cafés (2026-11-21) ——
  place('triesenberg-fine_dining-1', 'triesenberg', 'fine_dining', 'Berggasthaus Masescha', 'Maseschastrasse 48, 9497 Triesenberg', '마제샤 예배당 옆, 라인 계곡이 내려다보이는 산 식당. 구글 지도 평점 4.8.', 'Mountain inn beside the Masescha chapel, looking down over the Rhine valley. Rated 4.8 on Google Maps.'),
  place('triesenberg-fine_dining-2', 'triesenberg', 'fine_dining', 'Restaurant Kainer', 'Landstrasse 10, 9497 Triesenberg', '트리젠베르크 마을 중심의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in the centre of Triesenberg. Rated 4.5 on Google Maps.'),
  place('triesenberg-fine_dining-3', 'triesenberg', 'fine_dining', 'Edelweiss', 'Bergstrasse 5, 9497 Triesenberg', '성 요셉 성당 가까이의 스위스 요리 레스토랑. 구글 지도 평점 4.5.', 'Swiss restaurant near St Joseph’s Church. Rated 4.5 on Google Maps.'),
  place('triesenberg-fine_dining-4', 'triesenberg', 'fine_dining', 'Berggasthaus Matu', 'Gafleistrasse, 9497 Triesenberg', '마제샤에서 가플라이로 오르는 길의 산 식당. 구글 지도 평점 4.6.', 'Mountain inn on the road from Masescha up to Gaflei. Rated 4.6 on Google Maps.'),
  place('triesenberg-fine_dining-5', 'triesenberg', 'fine_dining', 'Restaurant Heusträffl', 'Landstrasse 102, 9497 Triesenberg', '피자와 포장 주문을 하는 트리젠베르크의 동네 식당. 구글 지도 평점 4.5.', 'Local Triesenberg restaurant serving pizza, with takeaway. Rated 4.5 on Google Maps.'),
  place('triesenberg-bakery-1', 'triesenberg', 'bakery', 'Café Bäckerei Guflina', 'Rotenbodenstrasse 3, 9497 Triesenberg', '마을 중심의 빵집 겸 카페. 구글 지도 평점 4.5.', 'Bakery-café in the village centre. Rated 4.5 on Google Maps.'),

  // —— eschen-nendeln: restaurants, bakeries and cafés (2026-11-21) ——
  place('eschen-nendeln-fine_dining-1', 'eschen-nendeln', 'fine_dining', 'Fago by meier', 'St. Luzi-Strasse 22, 9492 Eschen', '에셴 중심의 스위스 요리 레스토랑. 구글 지도 평점 4.7.', 'Swiss restaurant in central Eschen. Rated 4.7 on Google Maps.'),
  place('eschen-nendeln-fine_dining-2', 'eschen-nendeln', 'fine_dining', 'Eintracht', 'Essanestrasse 73, 9492 Eschen', '에셴의 이탈리아 요리 레스토랑. 구글 지도 평점 4.8.', 'Italian restaurant in Eschen. Rated 4.8 on Google Maps.'),
  place('eschen-nendeln-fine_dining-3', 'eschen-nendeln', 'fine_dining', 'ESSwerk', 'Wirtschaftspark 55, 9492 Eschen', '에셴 비즈니스 단지 안의 캐주얼 레스토랑. 구글 지도 평점 4.5.', 'Casual restaurant in the Eschen business park. Rated 4.5 on Google Maps.'),
  place('eschen-nendeln-bakery-1', 'eschen-nendeln', 'bakery', 'Georg Brot & Kaffee', 'St. Martins-Ring 3, 9492 Eschen', '성 마르틴 성당 가까이의 빵집 겸 커피집. 구글 지도 평점 4.5.', 'Bakery and coffee bar near St Martin’s Church. Rated 4.5 on Google Maps.'),
  place('eschen-nendeln-bakery-2', 'eschen-nendeln', 'bakery', 'Mündle Bäckerei Konditorei', 'St. Luzi-Strasse 21, 9492 Eschen', '에셴 중심의 빵집 겸 제과점·카페. 구글 지도 평점 4.5.', 'Bakery, pastry shop and café in central Eschen. Rated 4.5 on Google Maps.'),
  place('eschen-nendeln-bakery-3', 'eschen-nendeln', 'bakery', 'Wüst', 'Essanestrasse 42, 9492 Eschen', '에셴의 빵집 겸 카페. 구글 지도 평점 4.4.', 'Bakery-café in Eschen. Rated 4.4 on Google Maps.'),

  // —— schellenberg: restaurants, bakeries and cafés (2026-11-21) ——
  place('schellenberg-fine_dining-1', 'schellenberg', 'fine_dining', 'Restaurant Weinlaube', 'Hinterschloss 15, 9488 Schellenberg', '노이셸렌베르크 성터 아래의 클래식 요리 레스토랑으로, 미쉐린 가이드에 실려 있습니다. 구글 지도 평점 4.9.', 'Classic-cuisine restaurant below the Neu-Schellenberg ruins, listed in the MICHELIN Guide. Rated 4.9 on Google Maps.'),
  place('schellenberg-fine_dining-2', 'schellenberg', 'fine_dining', 'Wirtschaft zum Löwen', 'Winkel 5, 9488 Schellenberg', '힌터셸렌베르크의 스위스 요리 식당. 구글 지도 평점 4.8.', 'Swiss inn in Hinterschellenberg. Rated 4.8 on Google Maps.'),
]
