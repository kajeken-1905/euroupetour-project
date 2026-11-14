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

  // —— naantali: restaurants, bakeries and cafés (2026-11-14) ——
  place('naantali-fine_dining-1', 'naantali', 'fine_dining', 'Ravintola Metsätähti', 'Immasentie 1, Naantali', '난탈리의 점심 뷔페 식당. 구글 지도 평점 4.6.', 'Lunch restaurant in Naantali. Rated 4.6 on Google Maps.'),
  place('naantali-fine_dining-2', 'naantali', 'fine_dining', 'Kultaranta Heineken House', 'Särkänsalmentie 178, Naantali', '난탈리의 피자 가게. 구글 지도 평점 4.3.', 'Pizzeria in Naantali. Rated 4.3 on Google Maps.'),
  place('naantali-cafe-1', 'naantali', 'cafe', 'Cafe Akseli', 'Tullikatu 13, Naantali', '난탈리의 카페. 구글 지도 평점 4.4.', 'Café in Naantali. Rated 4.4 on Google Maps.'),

  // —— rauma: restaurants, bakeries and cafés (2026-11-14) ——
  place('rauma-fine_dining-1', 'rauma', 'fine_dining', 'Wanhan Rauman Kellari', 'Anundilankatu 8, Rauma', '라우마의 핀란드 요리 식당. 구글 지도 평점 4.4.', 'Finnish restaurant in Rauma. Rated 4.4 on Google Maps.'),
  place('rauma-fine_dining-2', 'rauma', 'fine_dining', 'Ravintola Kalatori', 'Kalatori 4, Rauma', '라우마의 핀란드 요리 식당. 구글 지도 평점 4.7.', 'Finnish restaurant in Rauma. Rated 4.7 on Google Maps.'),
  place('rauma-fine_dining-3', 'rauma', 'fine_dining', 'Marina Vista Rauma', 'Suvitie 14, Rauma', '라우마의 항구 레스토랑. 구글 지도 평점 4.4.', 'Harbourside restaurant in Rauma. Rated 4.4 on Google Maps.'),
  place('rauma-fine_dining-4', 'rauma', 'fine_dining', 'Ravintola Sydvest', 'Kuninkaankatu 6, Rauma', '라우마의 모던 유러피언 식당. 구글 지도 평점 4.4.', 'Modern European restaurant in Rauma. Rated 4.4 on Google Maps.'),
  place('rauma-fine_dining-5', 'rauma', 'fine_dining', 'Osteria da Filippo', 'Isokirkkokatu 9, Rauma', '라우마의 이탈리아 요리 식당. 구글 지도 평점 4.3.', 'Italian restaurant in Rauma. Rated 4.3 on Google Maps.'),
  place('rauma-bakery-1', 'rauma', 'bakery', 'Kontio\'s Bakery', 'Karjalankatu 3, Rauma', '라우마의 빵집. 구글 지도 평점 4.5.', 'Bakery in Rauma. Rated 4.5 on Google Maps.'),
  place('rauma-cafe-1', 'rauma', 'cafe', 'Café Kontion Kahvila', 'Kuninkaankatu 9, Rauma', '라우마의 카페. 구글 지도 평점 4.5.', 'Café in Rauma. Rated 4.5 on Google Maps.'),
  place('rauma-cafe-2', 'rauma', 'cafe', 'Kahvila Prassen', 'Kuninkaankatu 16, Rauma', '라우마의 카페. 구글 지도 평점 4.5.', 'Café in Rauma. Rated 4.5 on Google Maps.'),
  place('rauma-cafe-3', 'rauma', 'cafe', 'Wanhan Rauman KaffeBar', 'Kuninkaankatu 27, Rauma', '라우마의 커피숍. 구글 지도 평점 4.6.', 'Coffee shop in Rauma. Rated 4.6 on Google Maps.'),
  place('rauma-cafe-4', 'rauma', 'cafe', 'Café Sali & Lounge', 'Kuninkaankatu 22, Rauma', '라우마의 카페. 구글 지도 평점 4.4.', 'Café in Rauma. Rated 4.4 on Google Maps.'),
  place('rauma-cafe-5', 'rauma', 'cafe', 'Puistokahvila', 'Valtakatu 2 B, Rauma', '라우마의 공원 파빌리온 식당. 구글 지도 평점 4.4.', 'Park pavilion restaurant in Rauma. Rated 4.4 on Google Maps.'),

  // —— mariehamn: restaurants, bakeries and cafés (2026-11-14) ——
  place('mariehamn-fine_dining-1', 'mariehamn', 'fine_dining', 'Indigo Restaurant & Bar', 'Nygatan 1, Mariehamn', '마리에함의 레스토랑. 구글 지도 평점 4.4.', 'Restaurant in Mariehamn. Rated 4.4 on Google Maps.'),
  place('mariehamn-fine_dining-2', 'mariehamn', 'fine_dining', 'Kallas Stadskrog', 'Norra Esplanadgatan 2, Mariehamn', '마리에함의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Mariehamn. Rated 4.5 on Google Maps.'),
  place('mariehamn-fine_dining-3', 'mariehamn', 'fine_dining', 'Thai street food', 'Strandgatan 21, Mariehamn', '마리에함의 태국 요리 식당. 구글 지도 평점 4.4.', 'Thai restaurant in Mariehamn. Rated 4.4 on Google Maps.'),
  place('mariehamn-fine_dining-4', 'mariehamn', 'fine_dining', 'Kvarter5', 'Norragatan 10, Mariehamn', '마리에함의 레스토랑. 구글 지도 평점 4.3.', 'Restaurant in Mariehamn. Rated 4.3 on Google Maps.'),
  place('mariehamn-fine_dining-5', 'mariehamn', 'fine_dining', 'Restaurang Nautical', 'Hamngatan 2, Mariehamn', '마리에함의 항구 레스토랑. 구글 지도 평점 4.4.', 'Harbourside restaurant in Mariehamn. Rated 4.4 on Google Maps.'),
  place('mariehamn-bakery-1', 'mariehamn', 'bakery', 'Johannas Hembakta', 'Stornäsvägen 40, Mariehamn', '마리에함의 빵집. 구글 지도 평점 4.6.', 'Bakery in Mariehamn. Rated 4.6 on Google Maps.'),
  place('mariehamn-bakery-2', 'mariehamn', 'bakery', 'Julius Café & Konditori', 'Torggatan 10, Mariehamn', '마리에함의 카페 겸 제과점. 구글 지도 평점 4.3.', 'Café and pâtisserie in Mariehamn. Rated 4.3 on Google Maps.'),
  place('mariehamn-cafe-1', 'mariehamn', 'cafe', 'Bagarstugan Cafe & Vin', 'Ekonomiegatan 2, Mariehamn', '마리에함의 카페 겸 와인 바. 구글 지도 평점 4.5.', 'Café and wine bar in Mariehamn. Rated 4.5 on Google Maps.'),
  place('mariehamn-cafe-2', 'mariehamn', 'cafe', 'Café Viktor', 'Torggatan 15, Mariehamn', '마리에함의 카페. 구글 지도 평점 4.6.', 'Café in Mariehamn. Rated 4.6 on Google Maps.'),
  place('mariehamn-cafe-3', 'mariehamn', 'cafe', 'Black Cat cafe', 'Norragatan 15, Mariehamn', '마리에함의 카페. 구글 지도 평점 4.4.', 'Café in Mariehamn. Rated 4.4 on Google Maps.'),
  place('mariehamn-cafe-4', 'mariehamn', 'cafe', 'Bagel Bee Coffee Bar', 'Torggatan 6, Mariehamn', '마리에함의 커피숍. 구글 지도 평점 4.3.', 'Coffee shop in Mariehamn. Rated 4.3 on Google Maps.'),

  // —— jyvaskyla: restaurants, bakeries and cafés (2026-11-14) ——
  place('jyvaskyla-fine_dining-1', 'jyvaskyla', 'fine_dining', 'Ravintola Marani Jyväskylä', 'Kauppalaispiha 1, Jyväskylä', '위배스퀼래의 조지아 요리 식당. 구글 지도 평점 4.8.', 'Georgian restaurant in Jyväskylä. Rated 4.8 on Google Maps.'),
  place('jyvaskyla-fine_dining-2', 'jyvaskyla', 'fine_dining', 'Amano Restaurant', 'Asemakatu 7, Jyväskylä', '위배스퀼래의 일식당. 구글 지도 평점 4.6.', 'Japanese restaurant in Jyväskylä. Rated 4.6 on Google Maps.'),
  place('jyvaskyla-fine_dining-3', 'jyvaskyla', 'fine_dining', 'Pasargad Indian Cuisine', 'Ahjokatu 12, Jyväskylä', '위배스퀼래의 인도 요리 식당. 구글 지도 평점 4.9.', 'Indian restaurant in Jyväskylä. Rated 4.9 on Google Maps.'),
  place('jyvaskyla-fine_dining-4', 'jyvaskyla', 'fine_dining', 'Ravintola Kissanviikset', 'Puistokatu 3, Jyväskylä', '위배스퀼래의 핀란드 요리 식당. 구글 지도 평점 4.6.', 'Finnish restaurant in Jyväskylä. Rated 4.6 on Google Maps.'),
  place('jyvaskyla-fine_dining-5', 'jyvaskyla', 'fine_dining', 'Restaurant Pöllöwaari', 'Yliopistonkatu 23, Jyväskylä', '위배스퀼래의 레스토랑. 구글 지도 평점 4.7.', 'Restaurant in Jyväskylä. Rated 4.7 on Google Maps.'),
  place('jyvaskyla-bakery-1', 'jyvaskyla', 'bakery', 'Caffitella leipomomyymälä', 'Härkökuja 4, Jyväskylä', '위배스퀼래의 빵집. 구글 지도 평점 4.5.', 'Bakery in Jyväskylä. Rated 4.5 on Google Maps.'),
  place('jyvaskyla-bakery-2', 'jyvaskyla', 'bakery', 'Ruthin Leipomo', 'Metsäraivio 1, Jyväskylä', '위배스퀼래의 빵집. 구글 지도 평점 4.5.', 'Bakery in Jyväskylä. Rated 4.5 on Google Maps.'),
  place('jyvaskyla-cafe-1', 'jyvaskyla', 'cafe', 'Kahvila Miriam\'s', 'Asemakatu 12, Jyväskylä', '위배스퀼래의 커피숍. 구글 지도 평점 4.5.', 'Coffee shop in Jyväskylä. Rated 4.5 on Google Maps.'),
  place('jyvaskyla-cafe-2', 'jyvaskyla', 'cafe', 'Valkoinen Puu Jyväskylä', 'Cygnaeuksenkatu 2, Jyväskylä', '위배스퀼래의 카페. 구글 지도 평점 4.4.', 'Café in Jyväskylä. Rated 4.4 on Google Maps.'),
  place('jyvaskyla-cafe-3', 'jyvaskyla', 'cafe', 'Lutakon Teeleidi', 'Schaumanin puistotie 2, Jyväskylä', '위배스퀼래의 커피숍. 구글 지도 평점 4.7.', 'Coffee shop in Jyväskylä. Rated 4.7 on Google Maps.'),

  // —— kuopio: restaurants, bakeries and cafés (2026-11-14) ——
  place('kuopio-fine_dining-1', 'kuopio', 'fine_dining', 'Ravintola Boka', 'Koljonniemenkatu 2, Kuopio', '쿠오피오의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Kuopio. Rated 4.6 on Google Maps.'),
  place('kuopio-fine_dining-2', 'kuopio', 'fine_dining', 'Gallá Kitchen & Bar', 'Puijonkatu 32, Kuopio', '쿠오피오의 핀란드 요리 식당. 구글 지도 평점 4.6.', 'Finnish restaurant in Kuopio. Rated 4.6 on Google Maps.'),
  place('kuopio-fine_dining-3', 'kuopio', 'fine_dining', 'Cai Ji Noodle House', 'Ajurinkatu 16, Kuopio', '쿠오피오의 국수 가게. 구글 지도 평점 4.8.', 'Noodle shop in Kuopio. Rated 4.8 on Google Maps.'),
  place('kuopio-fine_dining-4', 'kuopio', 'fine_dining', 'Ravintola Musta Lammas', 'Satamakatu 4, Kuopio', '쿠오피오의 파인 다이닝. 구글 지도 평점 4.6.', 'Fine-dining restaurant in Kuopio. Rated 4.6 on Google Maps.'),
  place('kuopio-fine_dining-5', 'kuopio', 'fine_dining', 'Muikkuravintola Sampo', 'Kauppakatu 13, Kuopio', '쿠오피오의 호수 생선 무이쿠 전문 식당. 구글 지도 평점 4.5.', 'Restaurant specialising in vendace (muikku) in Kuopio. Rated 4.5 on Google Maps.'),
  place('kuopio-bakery-1', 'kuopio', 'bakery', 'Kalakukkoleipomo Hanna Partanen', 'Kasarmikatu 15, Kuopio', '쿠오피오의 칼라쿠코 빵집. 구글 지도 평점 4.7.', 'Kalakukko bakery in Kuopio. Rated 4.7 on Google Maps.'),
  place('kuopio-bakery-2', 'kuopio', 'bakery', 'Kahvila-konditoria Houkutus', 'Kauppakatu 49, Kuopio', '쿠오피오의 카페 겸 제과점. 구글 지도 평점 4.4.', 'Café and pâtisserie in Kuopio. Rated 4.4 on Google Maps.'),
  place('kuopio-bakery-3', 'kuopio', 'bakery', 'Rami Kuopio', 'Puijonkatu 23, Kuopio', '쿠오피오의 제과점. 구글 지도 평점 4.3.', 'Pâtisserie in Kuopio. Rated 4.3 on Google Maps.'),
  place('kuopio-cafe-1', 'kuopio', 'cafe', 'Kahvila Kaneli', 'Kauppakatu 22, Kuopio', '쿠오피오의 카페. 구글 지도 평점 4.6.', 'Café in Kuopio. Rated 4.6 on Google Maps.'),
  place('kuopio-cafe-2', 'kuopio', 'cafe', 'Kaffeteria mummola', 'Puijonkatu 27, Kuopio', '쿠오피오의 카페. 구글 지도 평점 4.7.', 'Café in Kuopio. Rated 4.7 on Google Maps.'),
  place('kuopio-cafe-3', 'kuopio', 'cafe', 'Kahvila Kantti', 'Museokatu 1, Kuopio', '쿠오피오의 카페. 구글 지도 평점 4.4.', 'Café in Kuopio. Rated 4.4 on Google Maps.'),

  // —— savonlinna: restaurants, bakeries and cafés (2026-11-14) ——
  place('savonlinna-fine_dining-1', 'savonlinna', 'fine_dining', 'Ravintola Himalayan Bite', 'Karjalantie 11, Savonlinna', '사본린나의 네팔 요리 식당. 구글 지도 평점 4.9.', 'Nepalese restaurant in Savonlinna. Rated 4.9 on Google Maps.'),
  place('savonlinna-fine_dining-2', 'savonlinna', 'fine_dining', 'Ravintola Majakka', 'Satamakatu 11, Savonlinna', '사본린나의 핀란드 요리 식당. 구글 지도 평점 4.3.', 'Finnish restaurant in Savonlinna. Rated 4.3 on Google Maps.'),
  place('savonlinna-fine_dining-3', 'savonlinna', 'fine_dining', 'Waahto Brewhouse', 'Satamapuistonkatu 5, Savonlinna', '사본린나의 브루펍. 구글 지도 평점 4.3.', 'Brewpub in Savonlinna. Rated 4.3 on Google Maps.'),
  place('savonlinna-bakery-1', 'savonlinna', 'bakery', 'Kakkukaaos', 'Olavinkatu 35, Savonlinna', '사본린나의 제과점. 구글 지도 평점 4.8.', 'Pâtisserie in Savonlinna. Rated 4.8 on Google Maps.'),
  place('savonlinna-bakery-2', 'savonlinna', 'bakery', 'Kotileipomo Kupsakka', 'Heikinpohjantie 59, Savonlinna', '사본린나의 빵집. 구글 지도 평점 4.4.', 'Bakery in Savonlinna. Rated 4.4 on Google Maps.'),
  place('savonlinna-cafe-1', 'savonlinna', 'cafe', 'Phin Cafe Station', 'Olavinkatu 35, Savonlinna', '사본린나의 커피숍. 구글 지도 평점 4.9.', 'Coffee shop in Savonlinna. Rated 4.9 on Google Maps.'),
  place('savonlinna-cafe-2', 'savonlinna', 'cafe', 'Kahvila Leivintupa', 'Kirkkokatu 8, Savonlinna', '사본린나의 카페. 구글 지도 평점 4.4.', 'Café in Savonlinna. Rated 4.4 on Google Maps.'),

  // —— oulu: restaurants, bakeries and cafés (2026-11-14) ——
  place('oulu-fine_dining-1', 'oulu', 'fine_dining', 'Tamada', 'Pakkahuoneenkatu 8, Oulu', '오울루의 조지아 요리 식당. 구글 지도 평점 4.9.', 'Georgian restaurant in Oulu. Rated 4.9 on Google Maps.'),
  place('oulu-fine_dining-2', 'oulu', 'fine_dining', 'Pho Dat Viet Ravintola', 'Pakkahuoneenkatu 9, Oulu', '오울루의 베트남 요리 식당. 구글 지도 평점 4.9.', 'Vietnamese restaurant in Oulu. Rated 4.9 on Google Maps.'),
  place('oulu-fine_dining-3', 'oulu', 'fine_dining', 'Alfred Kitchen & Bar', 'Pakkahuoneenkatu 24, Oulu', '오울루의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Oulu. Rated 4.6 on Google Maps.'),
  place('oulu-fine_dining-4', 'oulu', 'fine_dining', 'Ravintola Hugo', 'Rantakatu 4, Oulu', '오울루의 레스토랑. 구글 지도 평점 4.7.', 'Restaurant in Oulu. Rated 4.7 on Google Maps.'),
  place('oulu-fine_dining-5', 'oulu', 'fine_dining', 'Uleåborg 1881', 'Aittatori 4-5, Oulu', '오울루의 핀란드 요리 식당. 구글 지도 평점 4.7.', 'Finnish restaurant in Oulu. Rated 4.7 on Google Maps.'),
  place('oulu-bakery-1', 'oulu', 'bakery', 'Mon Chou Pâtisserie', 'Pakkahuoneenkatu 5 B 20, Oulu', '오울루의 제과점. 구글 지도 평점 4.8.', 'Pâtisserie in Oulu. Rated 4.8 on Google Maps.'),
  place('oulu-bakery-2', 'oulu', 'bakery', 'Kreema', 'Kainuuntie 1, Oulu', '오울루의 빵집. 구글 지도 평점 4.5.', 'Bakery in Oulu. Rated 4.5 on Google Maps.'),
  place('oulu-bakery-3', 'oulu', 'bakery', 'Huovisen Bakery', 'Ilmarinkatu 16, Oulu', '오울루의 빵집. 구글 지도 평점 4.5.', 'Bakery in Oulu. Rated 4.5 on Google Maps.'),
  place('oulu-cafe-1', 'oulu', 'cafe', 'Cafe Konstantiina', 'Torikatu 12, Oulu', '오울루의 카페. 구글 지도 평점 4.9.', 'Café in Oulu. Rated 4.9 on Google Maps.'),
  place('oulu-cafe-2', 'oulu', 'cafe', 'Kauppahallin Kahvila', 'Kauppatori, Oulu', '오울루의 시장 홀 카페. 구글 지도 평점 4.7.', 'Market-hall café in Oulu. Rated 4.7 on Google Maps.'),
  place('oulu-cafe-3', 'oulu', 'cafe', 'Magnolia Coffee & Bakery', 'Torikatu 15-17, Oulu', '오울루의 커피숍. 구글 지도 평점 4.3.', 'Coffee shop in Oulu. Rated 4.3 on Google Maps.'),
  place('oulu-cafe-4', 'oulu', 'cafe', 'Samba Café - Brazilian Coffee', 'Hallituskatu 30, Oulu', '오울루의 커피숍. 구글 지도 평점 4.9.', 'Coffee shop in Oulu. Rated 4.9 on Google Maps.'),

  // —— kemi: restaurants, bakeries and cafés (2026-11-14) ——
  place('kemi-fine_dining-1', 'kemi', 'fine_dining', 'Thai Onzon', 'Valtakatu 5, Kemi', '케미의 태국 요리 식당. 구글 지도 평점 4.6.', 'Thai restaurant in Kemi. Rated 4.6 on Google Maps.'),
  place('kemi-fine_dining-2', 'kemi', 'fine_dining', 'Pizzeria San Milano', 'Meripuistonpolku 11, Kemi', '케미의 피자 가게. 구글 지도 평점 4.6.', 'Pizzeria in Kemi. Rated 4.6 on Google Maps.'),
  place('kemi-fine_dining-3', 'kemi', 'fine_dining', 'Kemin Puistopaviljonki', 'Meripuistonpolku 11, Kemi', '케미의 공원 파빌리온 식당. 구글 지도 평점 4.3.', 'Park pavilion restaurant in Kemi. Rated 4.3 on Google Maps.'),
  place('kemi-bakery-1', 'kemi', 'bakery', 'Confectionery Miorita', 'Valtakatu 5, Kemi', '케미의 제과점. 구글 지도 평점 4.3.', 'Pâtisserie in Kemi. Rated 4.3 on Google Maps.'),
  place('kemi-cafe-1', 'kemi', 'cafe', 'Cafe Hertta Kemi', 'Rautatiekatu 1, Kemi', '케미의 카페. 구글 지도 평점 4.7.', 'Café in Kemi. Rated 4.7 on Google Maps.'),
  place('kemi-cafe-2', 'kemi', 'cafe', 'Satamakaffila Nuotta', 'Rantabulevardi 7, Kemi', '케미의 항구 카페. 구글 지도 평점 4.4.', 'Harbourside café in Kemi. Rated 4.4 on Google Maps.'),

  // —— levi: restaurants, bakeries and cafés (2026-11-14) ——
  place('levi-fine_dining-1', 'levi', 'fine_dining', 'Ravintola NiliPoro', 'Torikuja 4, Levi', '레비의 순록 요리 레스토랑. 구글 지도 평점 4.5.', 'Reindeer-meat restaurant in Levi. Rated 4.5 on Google Maps.'),
  place('levi-fine_dining-2', 'levi', 'fine_dining', 'Salteriet Levi', 'Torikuja 5, Levi', '레비의 핀란드 요리 식당. 구글 지도 평점 4.8.', 'Finnish restaurant in Levi. Rated 4.8 on Google Maps.'),
  place('levi-fine_dining-3', 'levi', 'fine_dining', 'Ravintola Pihvipirtti', 'Hissitie 14, Levi', '레비의 스테이크 식당. 구글 지도 평점 4.5.', 'Steak restaurant in Levi. Rated 4.5 on Google Maps.'),
  place('levi-fine_dining-4', 'levi', 'fine_dining', 'Restaurant Ämmilä', 'Rakkavaarantie 3, Levi', '레비의 라플란드 요리 식당. 구글 지도 평점 4.4.', 'Lappish restaurant in Levi. Rated 4.4 on Google Maps.'),
  place('levi-fine_dining-5', 'levi', 'fine_dining', 'Myllyn Äijä', 'Myllyjoentie 2, Levi', '레비의 핀란드 요리 식당. 구글 지도 평점 4.4.', 'Finnish restaurant in Levi. Rated 4.4 on Google Maps.'),
  place('levi-bakery-1', 'levi', 'bakery', 'Pannukakkutalo Levi', 'Torikuja 10, Levi', '레비의 팬케이크 가게. 구글 지도 평점 4.3.', 'Pancake house in Levi. Rated 4.3 on Google Maps.'),
  place('levi-cafe-1', 'levi', 'cafe', 'Coffee House Levi', 'Tähtitie 5, Levi', '레비의 카페. 구글 지도 평점 4.3.', 'Café in Levi. Rated 4.3 on Google Maps.'),
  place('levi-cafe-2', 'levi', 'cafe', 'Campfire Barista', 'Hissitie 8, Levi', '레비의 커피숍. 구글 지도 평점 4.9.', 'Coffee shop in Levi. Rated 4.9 on Google Maps.'),
  place('levi-cafe-3', 'levi', 'cafe', 'Kota Cafe & Bar', 'Torikuja 3, Levi', '레비의 카페 겸 바. 구글 지도 평점 4.4.', 'Café and bar in Levi. Rated 4.4 on Google Maps.'),

  // —— inari: restaurants, bakeries and cafés (2026-11-14) ——
  place('inari-fine_dining-1', 'inari', 'fine_dining', 'PaPaNa', 'Inarintie 49, Inari', '이나리의 펍 겸 식당. 구글 지도 평점 4.3.', 'Pub restaurant in Inari. Rated 4.3 on Google Maps.'),
  place('inari-fine_dining-2', 'inari', 'fine_dining', 'ScanBurger Inari', 'Menesjärventie 1, Inari', '이나리의 버거 가게. 구글 지도 평점 4.4.', 'Burger restaurant in Inari. Rated 4.4 on Google Maps.'),
]
