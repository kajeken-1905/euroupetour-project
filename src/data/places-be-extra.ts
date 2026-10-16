import { place } from './placeFactory'
import type { Place } from '../types'

export const placesBEExtra: Place[] = [
  // —— bruges ——
  place('bruges-fine_dining-1', 'bruges', 'fine_dining', 'Sans Cravate', 'Langestraat 159, 8000 Brugge', '헹크 반 아우덴호버 셰프의 창작 프랑스 요리.', 'Creative French cooking by chef Henk Van Oudenhove.', { michelin: 'star1', image: '/places/bruges-fine_dining-1.jpg' }),
  place('bruges-fine_dining-2', 'bruges', 'fine_dining', 'Seafoodbar Belge', 'Eiermarkt 14, 8000 Brugge', '마르크트 근처 작은 광장의 해산물 바. 홍합과 부야베스.', 'Seafood bar on a small square near the Markt: mussels and bouillabaisse.'),
  place('bruges-fine_dining-3', 'bruges', 'fine_dining', 'Restaurant Couvert', 'Eekhoutstraat 17A, 8000 Brugge', '좌석이 적은 가족 운영 비스트로노미 레스토랑. 제철 벨기에·프랑스 요리.', 'Small family-run bistronomy restaurant with a seasonal Belgian-French menu.'),
  place('bruges-fine_dining-4', 'bruges', 'fine_dining', 'Bistro Zwart Huis', 'Kuipersstraat 23, 8000 Brugge', '1482년 건물의 비스트로. 플랑드르식 스튜와 스테이크, 격주 일요일 재즈 공연.', 'Bistro in a 1482 building serving Flemish stews and steaks, with jazz every other Sunday.'),
  place('bruges-fine_dining-5', 'bruges', 'fine_dining', 'Poules Moules', 'Simon Stevinplein 9, 8000 Brugge', '홍합 요리 전문점.', 'Mussels specialist.'),
  place('bruges-bakery-1', 'bruges', 'bakery', 'Oud Huis Deman', 'Vuldersstraat 42, 8000 Brugge', '브뤼허의 전통 쿠키·비스킷 빵집.', 'Traditional Bruges biscuit and cookie bakery.'),
  place('bruges-bakery-3', 'bruges', 'bakery', 'The Chocolate Line', 'Simon Stevinplein 19, 8000 Brugge', '유명 초콜릿 전문점.', 'Renowned chocolate shop.', { image: '/places/bruges-bakery-3.jpg' }),
  place('bruges-bakery-4', 'bruges', 'bakery', 'Carpe Diem Bakery & Tea-room', 'Wijngaardstraat 8, 8000 Brugge', '베긴회·사랑의 호수 근처의 빵집 겸 티룸. 나무 장식 실내에서 와플과 케이크.', 'Bakery and wood-panelled tearoom near the Beguinage and Minnewater, known for waffles and cakes.'),
  place('bruges-bakery-5', 'bruges', 'bakery', 'Otto Waffle Atelier', 'Katelijnestraat 1, 8000 Brugge', '글루텐 없는 와플 전문점. 앉을 자리는 거의 없고 포장 위주.', 'Gluten-free waffle shop; mostly takeaway, with little seating.', { image: '/places/bruges-bakery-5.jpg' }),
  place('bruges-cafe-1', 'bruges', 'cafe', 'Vero Caffè', 'Sint-Jansplein 9, 8000 Brugge', '조용한 광장의 커피·브런치 카페. 테라스와 직접 구운 케이크.', 'Coffee and brunch cafe on a quiet square, with a terrace and home-baked cakes.'),
  place('bruges-cafe-2', 'bruges', 'cafe', 'Café Vlissinghe', 'Blekersstraat 2, 8000 Brugge', '1515년 기록이 남은 브뤼허의 가장 오래된 카페.', 'Bruges’ oldest cafe, first recorded in 1515.', { image: '/places/bruges-cafe-2.jpg' }),
  place('bruges-cafe-3', 'bruges', 'cafe', 'Coffeebar Adriaan', 'Adriaan Willaertstraat 7, 8000 Brugge', '시립극장 근처 옛 은행 건물의 스페셜티 커피 바. 아침·점심.', 'Specialty coffee bar in a former bank near the City Theatre; breakfast and lunch.'),
  place('bruges-cafe-4', 'bruges', 'cafe', 'Kottee Kaffee', 'Ezelstraat 68, 8000 Brugge', '브런치 카페.', 'Brunch café.'),

  // —— ghent ——
  place('ghent-fine_dining-1', 'ghent', 'fine_dining', 'OAK', 'Burgstraat 16, 9000 Gent', '마르셀루 발라르딘 셰프의 창작 요리 레스토랑.', 'Chef Marcelo Ballardin’s creative restaurant.', { michelin: 'star1' }),
  place('ghent-fine_dining-2', 'ghent', 'fine_dining', 'Publiek', 'Ham 39, 9000 Gent', '헨트 중심가의 창의적인 레스토랑.', 'Inventive restaurant in central Ghent.', { michelin: 'star1' }),
  place('ghent-fine_dining-3', 'ghent', 'fine_dining', 'Vrijmoed', 'Vlaanderenstraat 22, 9000 Gent', '미하엘 브레이무트 셰프의 레스토랑.', 'Chef Michaël Vrijmoed’s restaurant.', { michelin: 'star2' }),
  place('ghent-fine_dining-4', 'ghent', 'fine_dining', 'Mosquito Coast', 'Hoogpoort 28, 9000 Gent', '시청 근처의 여행 테마 카페. 세계 요리·칵테일과 뒤뜰 테라스.', 'Travel-themed cafe near the town hall with world dishes, cocktails and a back garden.'),
  place('ghent-fine_dining-5', 'ghent', 'fine_dining', 'Pakhuis', 'Schuurkenstraat 4, 9000 Gent', '19세기 창고를 고친 대형 브라스리. 굴·해산물 플래터와 플랑드르 요리.', 'Large brasserie in a restored 19th-century warehouse: oysters, seafood platters and Flemish dishes.', { image: '/places/ghent-fine_dining-5.jpg' }),
  place('ghent-bakery-1', 'ghent', 'bakery', 'Himschoot', 'Groentenmarkt 1, 9000 Gent', '1880년부터 이어진 헨트에서 가장 오래된 빵집. 17세기 지하 작업장에서 굽는 설탕빵.', 'Ghent’s oldest bakery (since 1880), baking sugar bread in a 17th-century cellar.'),
  place('ghent-bakery-2', 'ghent', 'bakery', 'Joost Arijs Patisserie & Chocolaterie', 'Vlaanderenstraat 24, 9000 Gent', '골미요가 벨기에 최고 파티스리로 꼽은 요스트 아레이스의 파티스리 겸 쇼콜라트리.', 'Joost Arijs’ patisserie and chocolaterie, named Belgium’s best patisserie by Gault&Millau.'),
  place('ghent-bakery-3', 'ghent', 'cafe', 'Mokabon', 'Donkersteeg 35, 9000 Gent', '헨트 최초의 커피바로 불리는 오래된 커피집.', 'Long-standing coffee house, often called Ghent’s first coffee bar.', { image: '/places/ghent-bakery-3.jpg' }),
  place('ghent-bakery-4', 'ghent', 'bakery', 'Madam Bakster', 'Brabantdam 142, 9000 Gent', '정제 설탕·동물성 재료 없이 만드는 비건 빵집 겸 카페.', 'Vegan bakery-cafe making pastries without refined sugar or animal products.'),
  place('ghent-cafe-1', 'ghent', 'cafe', 'WAY Specialty Coffee Roasters', 'Dok Noord 4E/001, 9000 Gent', '옛 세탁기 공장을 고친 도크 노르트의 로스터리 카페.', 'Roastery cafe in a former washing-machine factory at Dok Noord.'),
  place('ghent-cafe-2', 'ghent', 'cafe', 'OR Coffee Lab', 'Sint-Pietersnieuwstraat 126A, 9000 Gent', '직접 볶은 커피와 아침·점심을 내는 OR 커피의 커피랩.', 'OR Coffee’s coffee lab with in-house roasted coffee, breakfast and lunch.'),
  place('ghent-cafe-3', 'ghent', 'cafe', 'Vandekerckhove & Bar', 'Brabantdam 55, 9000 Gent', '1854년부터 이어진 가족 커피 로스터리와 커피 바.', 'Family coffee roastery since 1854, with a coffee bar.'),
  place('ghent-cafe-4', 'ghent', 'cafe', 'Café Vooruit', 'Sint-Pietersnieuwstraat 23, 9000 Gent', '아르데코 건물 문화센터 부르위트의 대형 카페 겸 레스토랑.', 'Large cafe-restaurant in the Art Deco Vooruit arts centre.', { image: '/places/ghent-cafe-4.jpg' }),
  place('ghent-cafe-5', 'ghent', 'cafe', 'Café Theatre', 'Schouwburgstraat 7, 9000 Gent', '오페라 하우스 옆 브라스리 겸 카페. 프랑스·벨기에 요리와 칵테일 바.', 'Brasserie-cafe beside the opera house with French-Belgian cooking and a cocktail bar.'),
  place('ghent-korean-1', 'ghent', 'korean', "Kim's Kitchen", 'Oudburg 23, 9000 Gent', '한국식 바비큐·김치볶음밥·치킨을 내는 한식당.', 'Korean restaurant with barbecue, kimchi fried rice and fried chicken.'),

  // —— antwerp ——
  place('antwerp-fine_dining-2', 'antwerp', 'fine_dining', 'The Jane', 'Paradeplein 1, 2018 Antwerpen', '옛 군 병원 예배당을 고친 닉 브릴의 레스토랑.', 'Nick Bril’s restaurant in a converted former military hospital chapel.', { michelin: 'star2', image: '/places/antwerp-fine_dining-2.jpg' }),
  place('antwerp-fine_dining-3', 'antwerp', 'fine_dining', 'Nathan', 'Lange Koepoortstraat 13, 2000 Antwerpen', '구시가의 모던 레스토랑.', 'Modern restaurant in the old town.', { michelin: 'star1' }),
  place('antwerp-fine_dining-4', 'antwerp', 'fine_dining', 'Zilte', 'Hanzestedenplaats 5, 2000 Antwerpen', 'MAS 박물관 9층, 비키 회너스 셰프의 레스토랑.', 'Chef Viki Geunes’ restaurant on the 9th floor of the MAS museum.', { michelin: 'star3' }),
  place('antwerp-fine_dining-5', 'antwerp', 'fine_dining', 'RAS', 'Ernest Van Dijckkaai 37, 2000 Antwerpen', '스헬더강과 부두가 보이는 강변 테라스의 모던 레스토랑.', 'Modern restaurant with a riverside terrace overlooking the Scheldt.'),
  place('antwerp-bakery-1', 'antwerp', 'bakery', 'Domestic Bakkerij & High Tea', 'Lange Gasthuisstraat 5, 2000 Antwerpen', '앞쪽은 빵집, 안쪽은 점심 코너, 위층은 하이티 공간. 장기 발효 사워도우.', 'Bakery at the front, lunch corner at the back and high tea upstairs; long-fermented sourdough.'),
  place('antwerp-bakery-2', 'antwerp', 'bakery', 'Goossens Bakkerij', 'Korte Gasthuisstraat 31, 2000 Antwerpen', '1884년부터 같은 거리에 있는 빵집. 건포도 호밀빵 ‘로헤페르돔메커’가 유명.', 'Bakery on the same street since 1884, famous for its rye-and-raisin roggeverdommeke.'),
  place('antwerp-bakery-3', 'antwerp', 'bakery', 'Patisserie Lints', 'Vleminckveld 68, 2000 Antwerpen', '30년 넘게 가족이 운영하는 파티스리 겸 티룸. 하이티도 있습니다.', 'Family-run patisserie and tearoom for over 30 years, with high tea.'),
  place('antwerp-bakery-4', 'antwerp', 'bakery', 'Bakery Dellafaille', 'Museumstraat 2, 2000 Antwerpen', '사워도우와 무화과 바게트, 쿠키·크루아상을 내는 빵집.', 'Bakery known for sourdough, fig baguette and Belgian koffiekoeken.'),
  place('antwerp-cafe-1', 'antwerp', 'cafe', 'Normo Coffee Roasters', 'Minderbroedersrui 30, 2000 Antwerpen', '자가 로스팅 스페셜티 커피.', 'Specialty coffee with in-house roasting.'),
  place('antwerp-cafe-2', 'antwerp', 'cafe', 'Caffènation', 'Mechelsesteenweg 16, 2018 Antwerpen', '안트베르펜 스페셜티 커피를 연 로스터리 카페. 원두도 판매.', 'Pioneering Antwerp roastery cafe; also sells whole beans.'),
  place('antwerp-cafe-3', 'antwerp', 'cafe', 'Buchbar', 'Scheldestraat 79, 2000 Antwerpen', '주인이 직접 읽은 책을 파는 서점 겸 카페. 브런치·점심.', 'Bookshop-cafe whose owners stock books they have read; brunch and lunch.'),
  place('antwerp-cafe-4', 'antwerp', 'cafe', 'Vitrin', 'Marnixplaats 14, 2000 Antwerpen', '넵튠 조각상이 보이는 마르닉스 광장 테라스의 카페 겸 칵테일 바.', 'Cafe and cocktail bar with a terrace on Marnixplaats, overlooking the Neptune statue.'),
  place('antwerp-korean-1', 'antwerp', 'korean', 'Chingu Antwerp', 'Oude Beurs 52, 2000 Antwerpen', '불고기·떡볶이·김치찌개를 반찬과 함께 내는 한식당.', 'Korean restaurant serving bulgogi, tteokbokki and kimchi stew with side dishes.'),

  // —— leuven ——
  place('leuven-fine_dining-1', 'leuven', 'fine_dining', 'EED', 'Vaartstraat 14, 3000 Leuven', '운하 근처의 모던 레스토랑.', 'Modern restaurant near the canal.', { michelin: 'star1' }),
  place('leuven-fine_dining-2', 'leuven', 'fine_dining', 'EssenCiel', 'Bondgenotenlaan 114, 3000 Leuven', '시내 중심가의 창작 요리 레스토랑.', 'Creative restaurant on the main avenue.', { michelin: 'star1' }),
  place('leuven-fine_dining-3', 'leuven', 'fine_dining', 'Zarza', 'Bondgenotenlaan 92, 3000 Leuven', '작은 정원이 있는 아늑한 레스토랑. 창의적으로 다듬은 벨기에 요리.', 'Cosy restaurant with a town garden, serving Belgian dishes with creative touches.'),
  place('leuven-fine_dining-4', 'leuven', 'fine_dining', 'Domus', 'Tiensestraat 8, 3000 Leuven', '1985년부터 직접 맥주를 빚는 하우스 브루어리 겸 레스토랑. 중세 지하실이 있습니다.', 'Brewpub-restaurant brewing its own beers since 1985, with a medieval cellar.', { image: '/places/leuven-fine_dining-4.jpg' }),
  place('leuven-fine_dining-5', 'leuven', 'fine_dining', 'Mykene', 'Muntstraat 44, 3000 Leuven', '보행자 거리 옛 저택의 벨기에 요리 레스토랑. 제철 재료와 벨기에 맥주.', 'Belgian restaurant in an old townhouse on a pedestrian street, with seasonal produce and Belgian beers.'),
  place('leuven-bakery-1', 'leuven', 'bakery', 'Patisserie Zuut', 'Vismarkt 2, 3000 Leuven', '쇼콜라티에와 파티시에가 함께 연 파티스리. 프랄린·타르트·케이크, 안쪽에 티룸.', 'Patisserie opened by a chocolatier and a pastry chef: pralines, tarts and cakes, with a tearoom at the back.'),
  place('leuven-cafe-1', 'leuven', 'cafe', 'MOK', 'Diestsestraat 165, 3000 Leuven', '브뤼셀 공방에서 볶은 원두를 쓰는 스페셜티 커피 바.', 'Specialty coffee bar serving beans roasted at its Brussels workshop.'),
  place('leuven-cafe-2', 'leuven', 'cafe', 'Madmum', 'Tiensestraat 38, 3000 Leuven', '2018년 문을 연 매드멈의 첫 지점. 커피와 브런치, 야외 테라스.', 'Madmum’s first branch (2018): coffee, brunch and an outdoor terrace.'),
  place('leuven-cafe-3', 'leuven', 'cafe', 'Café Commerce', 'Herbert Hooverplein 16, 3000 Leuven', '1864년부터 이어진 갈색 카페. 벨기에 맥주와 테라스.', 'Brown cafe dating from 1864 with Belgian beers and a terrace.'),
  place('leuven-cafe-4', 'leuven', 'cafe', 'De Blauwe Kater', 'Mechelsestraat 51, 3000 Leuven', '오래된 재즈·블루스 바. 학기 중 월요일 밤 무료 라이브, 병맥주 100여 종.', 'Long-established jazz and blues bar with free live music on term-time Mondays and 100+ bottled beers.'),
  place('leuven-korean-1', 'leuven', 'korean', 'Oh, My Kimchi!', 'Busleidengang 6D, 3000 Leuven', '저녁에만 여는 한식당.', 'Korean restaurant, open for dinner.'),

  // —— dinant ——
  place('dinant-fine_dining-1', 'dinant', 'fine_dining', 'Le Confessionnal', 'Rue Rémy Himmer 4, 5500 Dinant', '레페 수도원 맞은편의 정겨운 프랑스 가정식 레스토랑. 자주 바뀌는 전통 메뉴.', 'Friendly French restaurant opposite Leffe Abbey with a regularly changing traditional menu.', { michelin: 'bib' }),
  place('dinant-fine_dining-2', 'dinant', 'fine_dining', 'La Broche', 'Rue Grande 22, 5500 Dinant', '구시가 중심 거리의 미쉐린 가이드 선정 레스토랑.', 'Restaurant on the main street, listed in the Michelin Guide.'),
  place('dinant-fine_dining-3', 'dinant', 'fine_dining', 'Le Wiertz', 'Place Albert Ier 1, 5500 Dinant', '1983년부터 이어진 레스토랑. 젤란트 홍합이 대표 메뉴.', 'Restaurant running since 1983, specialising in Zeeland mussels.'),
  place('dinant-bakery-1', 'dinant', 'bakery', 'Patisserie Jacobs', 'Rue Grande 147, 5500 Dinant', '1860년부터 같은 자리에서 꿀 비스킷 ‘쿠크 드 디낭’을 굽는 집. 티룸도 있습니다.', 'Family bakery making couques de Dinant honey biscuits on the same street since 1860, with a tearoom.'),
  place('dinant-cafe-1', 'dinant', 'cafe', 'Le Cerf Vert', 'Avenue Winston Churchill 32, 5500 Dinant', '뫼즈강 오른쪽 기슭의 호텔 겸 레스토랑·바.', 'Hotel with a restaurant and bar on the right bank of the Meuse.'),
  place('dinant-cafe-2', 'dinant', 'cafe', 'Café Leffe', 'Rue Adolphe Sax 2, 5500 Dinant', '참사회 성당 맞은편, 뫼즈강 전망의 바 겸 브라스리.', 'Bar-brasserie opposite the collegiate church, with views of the Meuse.', { image: '/places/dinant-cafe-2.jpg' }),

]
