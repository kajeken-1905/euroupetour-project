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
]
