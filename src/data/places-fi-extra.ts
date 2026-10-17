import { place } from './placeFactory'
import type { Place } from '../types'

export const placesFIExtra: Place[] = [
  // —— turku ——
  place('turku-fine_dining-1', 'turku', 'fine_dining', 'Restaurant Smör', 'Läntinen Rantakatu 3, 20100 Turku', '투르쿠 대성당 맞은편 19세기 상인 저택의 아치형 지하 레스토랑. 미쉐린 가이드에 실려 있고 저녁에만 엽니다.', 'Restaurant in the vaulted cellar of a 19th-century merchant house opposite Turku Cathedral, listed in the MICHELIN Guide; dinner only.'),
  place('turku-fine_dining-2', 'turku', 'fine_dining', 'Ravintola Kaskis', 'Kaskenkatu 6A, 20700 Turku', '야생·채집 핀란드 식재료로 코스를 내는 미쉐린 1스타 레스토랑. 수~토요일에 엽니다.', 'One-Michelin-star restaurant serving set menus of wild and foraged Finnish produce; Wednesday to Saturday.', { michelin: 'star1' }),
  place('turku-fine_dining-4', 'turku', 'fine_dining', 'Viikinkiravintola Harald', 'Aurakatu 3, 20100 Turku', '바이킹 콘셉트 체인 레스토랑의 투르쿠 지점. 고기·생선 요리를 바이킹 연회 분위기로 냅니다.', 'Turku branch of a Viking-themed restaurant chain serving meat and fish in a feast-hall setting.'),
  place('turku-fine_dining-5', 'turku', 'fine_dining', 'Restaurant Kakolanruusu', 'Graniittilinnankatu 2, 20100 Turku', '옛 카콜라 교도소 야간 병동 건물의 레스토랑. 제철 재료를 장작불에 굽고 함께 나눠 먹는 코스(Feast)를 냅니다.', 'Restaurant in the former night ward of Kakola prison, cooking seasonal produce over open fire with shared Feast menus.'),
  place('turku-bakery-1', 'turku', 'bakery', 'Fazer Café Aurakatu', 'Aurakatu 10, 20100 Turku', '1865년 건물 한사 블록에 있는 파제르 카페. 케이크와 델리 코너가 있습니다.', 'Fazer café in an 1865 building in the Hansa block, with cakes and a deli counter.'),
  place('turku-bakery-2', 'turku', 'bakery', 'Leipomo Gryn', 'Linnankatu 9-11, 20100 Turku', '투르쿠 중심가의 작은 빵집 겸 카페. 크루아상과 호밀 사워도우 빵이 있습니다.', 'Small bakery-café in central Turku with croissants and rye sourdough loaves.'),
  place('turku-bakery-3', 'turku', 'bakery', 'Kosken Leipomo', 'Puutarhakatu 23 B 14, 20100 Turku', '100년 넘게 영업한 투르쿠 제과점의 첫 가게 자리 카페. 피스파 도넛(piispanmunkki)과 호밀빵이 있습니다.', 'Café on the original site of a Turku bakery over a century old, known for piispanmunkki doughnuts and rye bread.'),
  place('turku-bakery-4', 'turku', 'bakery', 'Rebelle - Café Bakery Bistro', 'Eerikinkatu 7b, 20100 Turku', '직접 만든 케이크와 종일 브런치를 내는 카페 비스트로. 일·월요일은 쉬고 반려견 동반이 됩니다.', 'Café-bistro with house-made cakes and all-day brunch; closed Sundays and Mondays; dog-friendly.'),
  place('turku-cafe-1', 'turku', 'cafe', 'Café Art', 'Läntinen Rantakatu 5, 20100 Turku, Finland', '1992년에 문을 연 아우라 강변 극장 다리 옆 카페. 그림이 걸린 작은 방들이 이어지고, 여름엔 강가 테라스가 열립니다.', 'Café by the Theatre Bridge on the Aura river since 1992, with small rooms hung with paintings and a riverside summer terrace.'),
  place('turku-cafe-2', 'turku', 'cafe', 'Frukt Coffee Roasters', 'Graniittilinnankatu 2 k, 20100 Turku', '옛 카콜라 교도소 건물의 소규모 스페셜티 커피 로스터리. 시내 쇼룸·커피바도 있습니다.', 'Small-batch specialty roastery in the former Kakola prison, with a showroom and coffee bar downtown.'),
  place('turku-korean-2', 'turku', 'korean', 'Yummy Korean Turku', 'Hämeenkatu 10, 20500 Turku', '투르쿠 중심가의 아시아식 뷔페 식당(탐페레의 Yummy Korean과 같은 계열).', 'All-you-can-eat Asian buffet in central Turku, related to Yummy Korean in Tampere.'),

  // —— tampere ——
  place('tampere-fine_dining-1', 'tampere', 'fine_dining', 'Kajo', 'Rautatienkatu 12, Tampere', '기차역 근처의 창작 요리 레스토랑. 미쉐린 가이드에 실려 있고 핀란드 제철 재료로 코스를 냅니다.', 'Creative tasting-menu restaurant near the station, listed in the MICHELIN Guide, using seasonal Finnish produce.'),
  place('tampere-fine_dining-2', 'tampere', 'fine_dining', 'Bertha', 'Rautatienkatu 14, Tampere', '기차역 맞은편의 와인 중심 레스토랑. 음료에 맞춘 요리를 냅니다.', 'Wine-focused restaurant opposite the railway station, with dishes designed around the drinks.'),
  place('tampere-fine_dining-3', 'tampere', 'fine_dining', 'Tiiliholvi', 'Kauppakatu 10, 33210 Tampere', '아르누보 건물 지하 아치형 저장고의 프랑스·북유럽 요리 레스토랑. 일요일은 쉬고 예약을 권합니다.', 'French-Nordic restaurant in the vaulted cellar of an Art Nouveau building; closed Sundays, booking advised.', { image: '/places/tampere-fine_dining-3.jpg' }),
  place('tampere-fine_dining-4', 'tampere', 'fine_dining', 'Bistro Henriks', 'Satamakatu 7, Tampere', '오래된 레스토랑 헨릭스를 새로 단장한 비스트로. 프랑스풍 제철 요리를 내고 점심 3코스가 있습니다.', 'Bistro reborn from the long-running Restaurant Henriks, with French-inspired seasonal cooking and a three-course lunch.'),
  place('tampere-bakery-1', 'tampere', 'bakery', 'Pyynikin Näkötornin Kahvila', 'Näkötornintie 20, 33230 Tampere', '퓌니키 전망탑 1층의 가족 운영 카페. 손으로 빚어 튀긴 도넛(무니크)이 유명하고 매일 엽니다(전망탑 입장료 별도).', 'Family-run café at the foot of Pyynikki observation tower, known for hand-made doughnuts; open daily (tower entry extra).'),
  place('tampere-bakery-2', 'tampere', 'bakery', 'Boulangerie Marco', 'Tullikatu 6, 33100 Tampere', '툴린토리 쇼핑센터 안의 프랑스식 빵집. 크루아상·바게트·사워도우와 평일 점심 파스타가 있습니다.', 'French bakery in the Tullintori centre with croissants, baguettes, sourdough and fresh pasta lunches.'),
  place('tampere-bakery-3', 'tampere', 'bakery', 'Konditoria Mari', 'Ahotie 34, 33800 Tampere', '네칼라 지구에서 1970년대부터 영업한 제과점 카페. 도넛과 시나몬롤이 있습니다.', 'Bakery-café in Nekala since the 1970s, known for doughnuts and cinnamon buns.', { image: '/places/tampere-bakery-3.jpg' }),
  place('tampere-bakery-4', 'tampere', 'bakery', 'Bakery Café Puusti', 'Yliopistonkatu 50, 33100 Tampere', '탐페레 홀 근처의 베이커리 카페. 매일 손으로 만드는 시나몬롤이 있고 일요일은 쉽니다.', 'Bakery café near Tampere Hall with cinnamon buns hand-made daily; closed Sundays.'),
  place('tampere-cafe-1', 'tampere', 'cafe', 'Café Europa', 'Aleksanterinkatu 29, Tampere', '중부 유럽 거실 분위기의 카페 겸 바. 샌드위치·디저트가 있고 낮부터 밤늦게까지 엽니다.', 'Café-bar styled like a Central European living room, with sandwiches and desserts, open from midday till late.'),
  place('tampere-cafe-2', 'tampere', 'cafe', 'Thé Hidden', 'Hatanpään valtatie 6B, 33100 Tampere', '케이크와 라테·말차를 내는 작은 카페.', 'Small café with cakes, lattes and iced matcha.'),
  place('tampere-cafe-3', 'tampere', 'cafe', 'The Waffle Cafe Tampere', 'Ojakatu 2, 33100 Tampere', '탐메르 공원 옆 탐페레에서 가장 작은 석조 건물의 와플 카페. 단·짠 와플과 비건·글루텐프리 메뉴가 있습니다.', 'Waffle café in Tampere’s smallest stone house by Tammerpuisto, with sweet and savoury, vegan and gluten-free waffles.'),
  place('tampere-cafe-4', 'tampere', 'cafe', 'Café Metsonkulma', 'Puutarhakatu 20, 33230 Tampere', '샐러드와 케이크·커피를 내는 동네 카페. 비건 메뉴가 있고 야외석이 있습니다.', 'Neighbourhood café with salads, coffee and cake, vegan options and outdoor seating.'),
  place('tampere-korean-2', 'tampere', 'korean', 'Han Guk Tampere', 'Puutarhakatu 12, Tampere', '탐페레 중심가 푸타르하카투의 한식당.', 'Korean restaurant on Puutarhakatu in central Tampere.'),
  place('tampere-korean-3', 'tampere', 'korean', 'Yummy Korean Tampere', 'Hämeenkatu 10, Tampere', '하메엔카투의 한식당.', 'Korean restaurant on Hämeenkatu.'),

  // —— rovaniemi ——
  place('rovaniemi-fine_dining-1', 'rovaniemi', 'fine_dining', 'Ravintola Roka - Street Bistro', 'Ainonkatu 3, 96200 Rovaniemi', '2015년에 문을 연 25석짜리 동네 비스트로. 연어·훈제 송어·순록 요리가 있고 예약은 당일 전화로만 받습니다.', '25-seat neighbourhood bistro opened in 2015, with salmon, smoked vendace and reindeer; same-day phone bookings only.'),
  place('rovaniemi-fine_dining-2', 'rovaniemi', 'fine_dining', 'Restaurant Nili', 'Valtakatu 20, Rovaniemi', '라플란드 요리 식당. 순록 볶음과 링곤베리, 곰고기 요리가 있습니다.', 'Lapland restaurant with sautéed reindeer and lingonberries, plus bear-meat dishes.', { image: '/places/rovaniemi-fine_dining-2.jpg' }),
  place('rovaniemi-fine_dining-3', 'rovaniemi', 'fine_dining', 'Kauppayhtiö', 'Valtakatu 24, 96200 Rovaniemi', '중심가의 버거·피자 가게. 순록 치즈버거와 채식 메뉴가 있고 월요일은 쉽니다.', 'Central burger and pizza spot with a reindeer cheeseburger and veggie options; closed Mondays.', { image: '/places/rovaniemi-fine_dining-3.jpg' }),
  place('rovaniemi-bakery-1', 'rovaniemi', 'bakery', 'Kahvila Konditoria Antinkaapo', 'Rovakatu 13, 96100 Rovaniemi', '1984년부터 영업한 로바니에미 가족 제과점. 직접 구운 빵과 케이크가 있습니다.', 'Family bakery-café in Rovaniemi since 1984, with breads and cakes baked on site.'),
  place('rovaniemi-cafe-1', 'rovaniemi', 'cafe', 'Arktikum Café', 'Pohjoisranta 4, 96200 Rovaniemi, Finland', '북극 박물관 아르크티쿰 안의 카페. 평일 점심 뷔페(샐러드·오늘의 요리·커피)가 있습니다.', 'Café inside the Arktikum museum with a weekday lunch buffet of salads, a daily dish and coffee.'),
  place('rovaniemi-cafe-2', 'rovaniemi', 'cafe', 'Coffee House Rovaniemi', 'Maakuntakatu 30, 96200 Rovaniemi', '로바니에미 중심가의 아늑한 카페.', 'Cosy café in central Rovaniemi.'),
  place('rovaniemi-cafe-3', 'rovaniemi', 'cafe', 'Cafe & Bar 21', 'Rovakatu 21, 96200 Rovaniemi', '중심가의 카페 겸 칵테일 바. 연어나 염소치즈를 올린 와플이 대표 메뉴입니다.', 'Central café and cocktail bar known for savoury and sweet waffles, such as salmon or goat cheese.'),
  place('rovaniemi-korean-1', 'rovaniemi', 'korean', 'Hanki', 'Korkalonkatu 2, 96100 Rovaniemi', '테이블 10개 정도의 작은 한식당. 비빔밥·김치찌개·튀긴 두부가 있습니다.', 'Small Korean restaurant with about ten tables, serving bibimbap, kimchi stew and fried tofu.'),

  // —— porvoo ——
  place('porvoo-fine_dining-1', 'porvoo', 'fine_dining', 'Restaurant VÅR', 'Papinkatu 17, 06100 Porvoo', '1920년대 초콜릿 공장 건물의 미쉐린 1스타 레스토랑. 지역 제철 재료로 코스를 냅니다. 예약이 어렵습니다.', 'Michelin one-star restaurant in a 1920s chocolate factory, serving tasting menus of local seasonal produce; hard to book.', { michelin: 'star1' }),
  place('porvoo-fine_dining-2', 'porvoo', 'fine_dining', 'Bistro Sinne', 'Läntinen Aleksanterinkatu 1, 06100 Porvoo', '제철 지역 식재료로 6코스 테이스팅 메뉴를 내는 비스트로. 여름~가을엔 가재 디너도 있고 예약을 권합니다.', 'Bistro serving a six-course tasting menu of seasonal local produce, with crayfish dinners late summer to autumn; booking recommended.'),
  place('porvoo-bakery-1', 'porvoo', 'bakery', 'Brunberg Old Town Shop', 'Välikatu 4, 06100 Porvoo', '포르보 초콜릿·사탕 회사 브룬베리의 구시가 매장. 초콜릿 키스와 트러플이 있습니다.', 'Old Town shop of Porvoo sweets maker Brunberg, selling chocolate kisses and truffles.'),
  place('porvoo-bakery-3', 'porvoo', 'bakery', 'PetriS Chocolate', 'Jokikatu 16, 06100 Porvoo', '구시가 요키카투의 수제 초콜릿 가게 겸 카페. 트러플과 케이크가 있고 시식할 수 있습니다.', 'Handmade chocolate shop and café on Jokikatu in the Old Town with truffles and cakes; tasting samples offered.'),
  place('porvoo-cafe-1', 'porvoo', 'cafe', 'Porvoon Paahtimo Bar & Café', 'Mannerheiminkatu 2, 06100 Porvoo', '100년 넘은 벽돌 창고 건물의 카페 겸 바. 직접 커피를 볶습니다.', 'Café and bar in a brick warehouse over 100 years old, roasting its own coffee.'),
  place('porvoo-cafe-2', 'porvoo', 'cafe', 'Café Fanny', 'Välikatu 13, 06100 Porvoo', '구시가 광장의 작은 카페. 루네베리 케이크를 1년 내내 팔고 시나몬롤도 있습니다.', 'Small café on the Old Town square selling Runeberg cake year-round, plus cinnamon buns.'),
  place('porvoo-korean-1', 'porvoo', 'korean', 'Kimchi Korean Kitchen', 'Pormestrinkatu 14, 06100 Porvoo', '포르보 중심가의 한식당. 점심 뷔페가 있습니다.', 'Korean restaurant in central Porvoo with a lunch buffet.'),

]
