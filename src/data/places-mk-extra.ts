import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMKExtra: Place[] = [
  // —— skopje ——
  place('skopje-fine_dining-1', 'skopje', 'fine_dining', 'Destan', 'Salih Asim, Old Bazaar, Skopje 1000', '1913년부터 이어왔다고 알려진 구시장의 케밥 식당. 소·양고기 케바피와 솜운 빵을 냅니다.', 'Old Bazaar kebab house said to date from 1913, serving beef-and-lamb kebapi with somun bread.'),
  place('skopje-fine_dining-2', 'skopje', 'fine_dining', 'Pivnica An', 'Kapan An, Old Bazaar, 1000 Skopje, North Macedonia', '15세기 여관 카판 안 건물의 레스토랑. 안뜰 테라스에서 마케도니아 요리를 냅니다.', 'Restaurant in the 15th-century Kapan An inn, serving Macedonian food in the courtyard.'),
  place('skopje-fine_dining-3', 'skopje', 'fine_dining', 'Soul Kitchen - Macedonian Wine & Cuisine', 'Kej 13-ti Noemvri 8, Skopje', '바르다르 강변의 레스토랑. 현대적으로 해석한 마케도니아 요리와 마케도니아 와인을 냅니다.', 'Vardar riverside restaurant serving Macedonian favourites with modern twists and Macedonian wine.'),

  place('skopje-bakery-2', 'skopje', 'bakery', 'Bakery La Delicious', 'Leninova 44, Skopje', '시내 중심과 공원 근처의 심야 빵집. 부렉과 피자 바니츠카가 인기입니다.', 'Late-night bakery near the centre and the park, popular for burek and pizza banitsa.'),

  place('skopje-cafe-1', 'skopje', 'cafe', 'Cafe Bar Vinyl', 'Partizanski Odredi 14, Skopje', '시내와 데바르 말로 사이의 인더스트리얼 분위기 카페. DJ 공연이 열립니다.', 'Industrial-style café between the centre and Debar Maalo, with DJ nights.'),
  place('skopje-cafe-2', 'skopje', 'cafe', 'The Dude Specialty Coffee', 'Apostle Guslarot 16, Skopje', '필터 커피가 중심인 스페셜티 커피숍.', 'Specialty coffee shop centred on filter coffee.'),
  place('skopje-cafe-3', 'skopje', 'cafe', 'Central Park', 'Gradski Park, Skopje 1000', '시립 공원 안의 카페. 실내외 자리에서 커피·디저트·칵테일을 냅니다.', 'Café inside the City Park with indoor and outdoor seating, serving coffee, desserts and cocktails.'),
  place('skopje-cafe-5', 'skopje', 'cafe', 'Café Metanoja', 'Maksim Gorki 19, Skopje', '책으로 둘러싸인 문학 카페. 문화 행사가 열리고 일요일은 쉽니다.', 'Book-lined literary café hosting cultural events; closed Sundays.'),

  // —— ohrid ——
  place('ohrid-fine_dining-1', 'ohrid', 'fine_dining', 'Gladiator', 'Braka Miladinovi br. 14, Ohrid', '고대 원형극장 옆의 가족 운영 식당. 위층 테라스에서 극장이 내려다보입니다.', 'Family-run restaurant beside the ancient amphitheatre, with an upstairs terrace overlooking it.'),
  place('ohrid-fine_dining-3', 'ohrid', 'fine_dining', 'Restaurant Kajche', 'Ilindenska 22, Ohrid', '호숫가의 긴 테라스가 있는 레스토랑. 발칸식 아침 식사도 냅니다.', 'Lakeshore restaurant with a long terrace, also serving Balkan breakfasts.'),
  place('ohrid-fine_dining-4', 'ohrid', 'fine_dining', 'The Lion Ohrid', 'Kej Makedonija 81, Ohrid', '호숫가 산책로의 레스토랑. 샐러드·갈비·버거와 아침 식사가 호평을 받습니다.', 'Restaurant on the lakeside promenade, praised for salads, ribs, burgers and breakfast.'),

  place('ohrid-bakery-1', 'ohrid', 'bakery', 'Ohrid City Bakery', 'Bulevar Turistichka 47, Ohrid, North Macedonia', '관광지에서 조금 떨어진 30년 넘은 동네 빵집. 부렉이 대표 메뉴입니다.', 'Neighbourhood bakery of over 30 years, a little away from the tourist area, best known for burek.'),
  place('ohrid-bakery-3', 'ohrid', 'bakery', 'Bakery Lihnida', 'Makedonski Prosvetiteli, 6000 Ohrid, North Macedonia', '시내 중심의 빵집. 부렉이 괜찮다는 평이 있습니다.', 'Central bakery whose burek gets good mentions.'),

  place('ohrid-cafe-1', 'ohrid', 'cafe', 'Roastery (Artisan Coffee House)', 'Kosta Abrash 19, Ohrid, North Macedonia', '호숫가 구시가 한가운데의 스페셜티 커피 로스터리 카페. 갓 볶은 원두를 씁니다.', 'Specialty coffee roastery café in the heart of the lakeside old town, using freshly roasted beans.'),
  place('ohrid-cafe-2', 'ohrid', 'cafe', 'Retro 45 Café', 'Kosta Abrash 45, Ohrid', '코스타 아브라시 거리의 카페. 커피·차와 샌드위치, 디저트를 냅니다.', 'Café on Kosta Abrash street with coffee, tea, sandwiches and desserts.'),
  place('ohrid-cafe-4', 'ohrid', 'cafe', 'Fort Cafe - Samoilova Tvrdina Ohrid', 'Kuzman Kapidan 94A, Ohrid', '사무일 요새 바로 옆의 카페. 골동품으로 꾸몄고 호수와 시내가 내려다보입니다.', 'Café right beside Samuel\'s Fortress, decorated with antiques, with views over the lake and town.'),

  // —— bitola ——
  place('bitola-fine_dining-1', 'bitola', 'fine_dining', 'Gradska Kefeana', 'Marshal Tito 85, 7000 Bitola, North Macedonia', '시로크 소칵 보행자 거리의 레스토랑. 에피날 호텔 레스토랑으로도 불립니다.', 'Restaurant on the Širok Sokak pedestrian street, also known as the Epinal restaurant.'),
  place('bitola-fine_dining-2', 'bitola', 'fine_dining', 'Restoran Adriatik', 'Kumrovec b.b., Bukovski Livadi, 7000 Bitola, North Macedonia', '부코프스키 리바디 지구의 레스토랑. 오븐 구이 갈비와 수제 소시지가 인기입니다.', 'Restaurant in the Bukovski Livadi area, popular for oven-baked ribs and homemade sausages.'),
  place('bitola-fine_dining-3', 'bitola', 'fine_dining', 'Lounge Bar Manaki', 'Roosevelt 17, Bitola', '루스벨트 거리의 라운지 바 겸 레스토랑.', 'Lounge bar and restaurant on Roosevelt street.'),
  place('bitola-fine_dining-4', 'bitola', 'fine_dining', 'Meze Bar Dionis', 'Vlatko Milenkoski 7, Bitola', '가족이 운영하는 메제 바. 그릴 돼지갈비와 차지키가 인기이고 일요일은 쉽니다.', 'Family-run meze bar popular for grilled pork ribs and tzatziki; closed Sundays.'),

  place('bitola-bakery-1', 'bitola', 'bakery', 'Bakery Boulevard', '1-vi Maj Boulevard b.b., Bitola', '1일 5월 대로의 빵집.', 'Bakery on 1st May Boulevard.'),

  place('bitola-cafe-1', 'bitola', 'cafe', 'Cafe Pajton', 'Shirok Sokak 87, Bitola, North Macedonia', '시로크 소칵 거리의 카페. 에스프레소를 마시며 거리 구경하기 좋고 브라우니가 추천됩니다.', 'Café on Širok Sokak, good for espresso and people-watching; the brownie is recommended.'),
  place('bitola-cafe-2', 'bitola', 'cafe', 'Coffee Aero', 'Shirok Sokak 143, Bitola', '시로크 소칵 거리의 카페.', 'Café on Širok Sokak.'),
  place('bitola-cafe-5', 'bitola', 'cafe', 'GT Caffe', 'Marsal Tito 55, Bitola', '마르샬 티토 거리의 카페 겸 제과점. 케이크가 비톨라에서 손꼽힌다는 평이 있습니다.', 'Café and patisserie on Maršal Tito street; reviewers rate its cakes among Bitola\'s best.'),

  // —— tetovo ——
  place('tetovo-fine_dining-1', 'tetovo', 'fine_dining', 'Restaurant Bakal', 'Marshal Tito 44, Brvenica 1216, North Macedonia', '테토보 남쪽 브르베니차 마을의 레스토랑. 지역·국제 요리를 내고 넓은 정원 테라스가 있습니다.', 'Restaurant in Brvenica village south of Tetovo, with local and international dishes and a large garden terrace.', { image: '/places/tetovo-fine_dining-1.jpg' }),
  place('tetovo-fine_dining-2', 'tetovo', 'fine_dining', 'Restoran Belamia', 'Goce Delchev 108, Tetovo', '오래된 레스토랑. 수제 소시지와 마케도니아·세르비아 요리가 대표입니다.', 'Long-established restaurant known for homemade sausages and Macedonian and Serbian classics.'),
  place('tetovo-fine_dining-3', 'tetovo', 'fine_dining', 'Restaurant Dubrovnik', 'Jane Sandanski 116, Tetovo', '야네 산단스키 거리의 레스토랑.', 'Restaurant on Jane Sandanski street.'),


  place('tetovo-cafe-3', 'tetovo', 'cafe', 'Lokal Coffee Shop', 'JNA 85, Tetovo', '테토보의 커피숍. 디카페인과 식물성 우유가 있습니다.', 'Tetovo coffee shop with decaf and plant-based milk.'),

  // —— struga: restaurants, bakeries and cafés (2026-11-16) ——
  place('struga-fine_dining-1', 'struga', 'fine_dining', 'ANTIKA Restaurant', 'Kej Boris Kidrič 34, Struga', '스트루가의 호숫가 산책로의 식당. 구글 지도 평점 4.6.', 'Restaurant on the lakeside promenade in Struga. Rated 4.6 on Google Maps.'),
  place('struga-fine_dining-2', 'struga', 'fine_dining', 'Boemska Kafana', 'Dimitar Vlahov, Struga', '스트루가의 전통 카파나(선술집식 식당). 구글 지도 평점 4.8.', 'Traditional kafana in Struga. Rated 4.8 on Google Maps.'),
  place('struga-fine_dining-3', 'struga', 'fine_dining', 'Stanica Oaza', 'Pablo Neruda, Struga', '스트루가의 식당. 구글 지도 평점 4.8.', 'Restaurant in Struga. Rated 4.8 on Google Maps.'),
  place('struga-fine_dining-4', 'struga', 'fine_dining', 'Kočva Mala', 'Goce Delčev, Struga', '스트루가의 식당. 구글 지도 평점 4.8.', 'Restaurant in Struga. Rated 4.8 on Google Maps.'),
  place('struga-fine_dining-5', 'struga', 'fine_dining', 'Escobar Struga', 'Kej Boris Kidrič 10, Struga', '스트루가의 호숫가 산책로의 식당. 구글 지도 평점 4.3.', 'Restaurant on the lakeside promenade in Struga. Rated 4.3 on Google Maps.'),
  place('struga-bakery-1', 'struga', 'bakery', 'Burek Polog', 'Turistička 18, Struga', '스트루가의 부렉 전문 빵집. 구글 지도 평점 4.7.', 'Burek bakery in Struga. Rated 4.7 on Google Maps.'),
  place('struga-bakery-2', 'struga', 'bakery', 'Dredheza 2', 'Maršal Tito, Struga', '스트루가의 디저트 가게. 구글 지도 평점 4.4.', 'Dessert shop in Struga. Rated 4.4 on Google Maps.'),
  place('struga-cafe-1', 'struga', 'cafe', 'Relax Caffe', 'Vlado Maleski, Struga', '스트루가의 카페. 구글 지도 평점 4.5.', 'Café in Struga. Rated 4.5 on Google Maps.'),
  place('struga-cafe-2', 'struga', 'cafe', 'Regatta', 'Partizanska 19, Struga', '스트루가의 카페. 구글 지도 평점 4.8.', 'Café in Struga. Rated 4.8 on Google Maps.'),
  place('struga-cafe-3', 'struga', 'cafe', 'Griffon Coffee & Lounge Bar', '15-ti Korpus, Struga', '스트루가의 카페. 구글 지도 평점 4.6.', 'Café in Struga. Rated 4.6 on Google Maps.'),

  // —— prilep: restaurants, bakeries and cafés (2026-11-16) ——
  place('prilep-fine_dining-1', 'prilep', 'fine_dining', 'Gostilnica Sokače', 'Jane Sandanski, Prilep', '프릴레프의 전통 식당(고스틸니차). 구글 지도 평점 4.8.', 'Traditional gostilnica in Prilep. Rated 4.8 on Google Maps.'),
  place('prilep-fine_dining-2', 'prilep', 'fine_dining', 'Gostilnica Izgrev', 'Jane Sandanski 1, Prilep', '프릴레프의 전통 식당(고스틸니차). 구글 지도 평점 4.7.', 'Traditional gostilnica in Prilep. Rated 4.7 on Google Maps.'),
  place('prilep-fine_dining-3', 'prilep', 'fine_dining', 'Aj Po Edna Restaurant', 'Ilinden, Prilep', '프릴레프의 식당. 구글 지도 평점 4.5.', 'Restaurant in Prilep. Rated 4.5 on Google Maps.'),
  place('prilep-fine_dining-4', 'prilep', 'fine_dining', 'Gostilnica Stara Tabana', 'Joska Jordanoski 38, Prilep', '프릴레프의 숯불구이 식당. 구글 지도 평점 4.9.', 'Grill restaurant in Prilep. Rated 4.9 on Google Maps.'),
  place('prilep-fine_dining-5', 'prilep', 'fine_dining', 'Kermes', 'ul. 513 2/8, Prilep', '프릴레프의 숯불구이 식당. 구글 지도 평점 4.5.', 'Grill restaurant in Prilep. Rated 4.5 on Google Maps.'),
  place('prilep-cafe-1', 'prilep', 'cafe', 'The Story Coffee', 'Braḱa Miladinovci 5a, Prilep', '프릴레프의 커피숍. 구글 지도 평점 4.6.', 'Coffee shop in Prilep. Rated 4.6 on Google Maps.'),
  place('prilep-cafe-2', 'prilep', 'cafe', 'Hive Café', 'ul. 513 2/6, Prilep', '프릴레프의 커피숍. 구글 지도 평점 4.5.', 'Coffee shop in Prilep. Rated 4.5 on Google Maps.'),
  place('prilep-cafe-3', 'prilep', 'cafe', 'Luvr', 'Bulevar Goce Delčev 30/1, Prilep', '프릴레프의 카페. 구글 지도 평점 4.7.', 'Café in Prilep. Rated 4.7 on Google Maps.'),
  place('prilep-cafe-4', 'prilep', 'cafe', 'Kafeterija', 'Republikanska, Prilep', '프릴레프의 커피숍. 구글 지도 평점 4.5.', 'Coffee shop in Prilep. Rated 4.5 on Google Maps.'),
  place('prilep-cafe-5', 'prilep', 'cafe', 'Kafe Doma Prilep', 'Ivo Lola Ribar 44, Prilep', '프릴레프의 카페. 구글 지도 평점 4.6.', 'Café in Prilep. Rated 4.6 on Google Maps.'),

  // —— krusevo: restaurants, bakeries and cafés (2026-11-16) ——
  place('krusevo-fine_dining-1', 'krusevo', 'fine_dining', 'Krushevska Odaja', 'Todor Proeski 71, Kruševo', '크루셰보의 전통 식당. 구글 지도 평점 4.4.', 'Traditional restaurant in Kruševo. Rated 4.4 on Google Maps.'),
  place('krusevo-fine_dining-2', 'krusevo', 'fine_dining', 'Pizzeria Roma', 'Ilindenska 39, Kruševo', '크루셰보의 피자 식당. 구글 지도 평점 4.5.', 'Pizzeria in Kruševo. Rated 4.5 on Google Maps.'),
  place('krusevo-fine_dining-3', 'krusevo', 'fine_dining', 'Pizza Skar', 'Ilindenska 108, Kruševo', '크루셰보의 피자 식당. 구글 지도 평점 4.4.', 'Pizzeria in Kruševo. Rated 4.4 on Google Maps.'),
  place('krusevo-fine_dining-4', 'krusevo', 'fine_dining', 'Pub & Restaurant Istra', 'Todor Proeski 2, Kruševo', '크루셰보의 펍 겸 식당. 구글 지도 평점 4.8.', 'Pub and restaurant in Kruševo. Rated 4.8 on Google Maps.'),
  place('krusevo-fine_dining-5', 'krusevo', 'fine_dining', 'Duomo Lounge & Bar', 'Ilindenska 22, Kruševo', '크루셰보의 식당 겸 라운지 바. 구글 지도 평점 4.4.', 'Restaurant and lounge bar in Kruševo. Rated 4.4 on Google Maps.'),
  place('krusevo-cafe-1', 'krusevo', 'cafe', 'Café Old School', 'Blagoj Celev 2, Kruševo', '크루셰보의 카페. 구글 지도 평점 4.4.', 'Café in Kruševo. Rated 4.4 on Google Maps.'),

  // —— stip: restaurants, bakeries and cafés (2026-11-16) ——
  place('stip-fine_dining-1', 'stip', 'fine_dining', 'HighlightS - Restaurant & Bar', 'Veljko Vlahović, Štip', '슈티프의 식당 겸 바. 구글 지도 평점 4.8.', 'Restaurant and bar in Štip. Rated 4.8 on Google Maps.'),
  place('stip-fine_dining-2', 'stip', 'fine_dining', 'Vodenicata Kaj Jove', 'Bregalnička 1, Štip', '슈티프의 가족 식당. 구글 지도 평점 4.7.', 'Family-friendly restaurant in Štip. Rated 4.7 on Google Maps.'),
  place('stip-fine_dining-3', 'stip', 'fine_dining', 'Gostilnica Štipska Kuḱa Pastrma', 'Veljko Vlahović 2, Štip', '슈티프의 슈티프 전통 요리 파스트르마 식당. 구글 지도 평점 4.5.', 'Restaurant for the local pastrma dish in Štip. Rated 4.5 on Google Maps.'),
  place('stip-fine_dining-4', 'stip', 'fine_dining', 'Sutjeska - Tile', 'Sutjeska 45, Štip', '슈티프의 식당. 구글 지도 평점 4.4.', 'Restaurant in Štip. Rated 4.4 on Google Maps.'),
  place('stip-fine_dining-5', 'stip', 'fine_dining', 'Radio Cafe Kanal 77', '5ta Partiska Konferencija, Štip', '슈티프의 식당. 구글 지도 평점 4.4.', 'Restaurant in Štip. Rated 4.4 on Google Maps.'),
  place('stip-cafe-1', 'stip', 'cafe', 'Angels Cafe', 'Pirinska, Štip', '슈티프의 카페. 구글 지도 평점 4.6.', 'Café in Štip. Rated 4.6 on Google Maps.'),
  place('stip-cafe-2', 'stip', 'cafe', 'Coffee Lab', 'Vančo Prke, Štip', '슈티프의 커피숍. 구글 지도 평점 4.3.', 'Coffee shop in Štip. Rated 4.3 on Google Maps.'),

  // —— tetovo: restaurants, bakeries and cafés (2026-11-16) ——
  place('tetovo-bakery-1', 'tetovo', 'bakery', 'Burek Adriana', 'Jane Sandanski 62, Tetovo', '테토보의 부렉 전문 빵집. 구글 지도 평점 4.9.', 'Burek bakery in Tetovo. Rated 4.9 on Google Maps.'),
  place('tetovo-bakery-2', 'tetovo', 'bakery', 'Garden Juice & Cake', 'Derviš Cara 35, Tetovo', '테토보의 케이크 가게. 구글 지도 평점 4.4.', 'Cake shop in Tetovo. Rated 4.4 on Google Maps.'),
  place('tetovo-cafe-4', 'tetovo', 'cafe', 'Simple Cafe', 'Boris Kidrič 29, Tetovo', '테토보의 카페. 구글 지도 평점 4.6.', 'Café in Tetovo. Rated 4.6 on Google Maps.'),

  // —— skopje: restaurants, bakeries and cafés (2026-11-16) ——
  place('skopje-bakery-3', 'skopje', 'bakery', 'Silbo', 'Majakovski 3, Skopje', '스코페의 빵집. 구글 지도 평점 4.5.', 'Bakery in Skopje. Rated 4.5 on Google Maps.'),
  place('skopje-bakery-4', 'skopje', 'bakery', 'Pan Pan Aerodrom', 'Franjo Kluz 14, Skopje', '스코페의 빵집 겸 스페셜티 커피. 구글 지도 평점 4.7.', 'Bakery and specialty coffee in Skopje. Rated 4.7 on Google Maps.'),
  place('skopje-bakery-5', 'skopje', 'bakery', 'Delice Patisserie Skopje', 'Ḱurčiska, Skopje', '스코페의 파티스리. 구글 지도 평점 4.9.', 'Patisserie in Skopje. Rated 4.9 on Google Maps.'),
  place('skopje-bakery-6', 'skopje', 'bakery', 'Oriolo Skopje', 'Naum Naumovski Borče 40, Skopje', '스코페의 빵집. 구글 지도 평점 4.6.', 'Bakery in Skopje. Rated 4.6 on Google Maps.'),

  // —— bitola: restaurants, bakeries and cafés (2026-11-16) ——
  place('bitola-bakery-2', 'bitola', 'bakery', 'Fresh', 'Petar Petrović Njegoš 13, Bitola', '비톨라의 빵집. 구글 지도 평점 4.7.', 'Bakery in Bitola. Rated 4.7 on Google Maps.'),
]
