import { place } from './placeFactory'
import type { Place } from '../types'

export const placesHUExtra: Place[] = [
  // —— budapest ——
  place('budapest-fine_dining-1', 'budapest', 'fine_dining', 'Borkonyha Winekitchen', 'Sas utca 3, 1051 Budapest', '헝가리 와인과 함께 내는 미쉐린 1스타 현대 헝가리 요리 레스토랑. 일요일은 쉽니다.', 'One-Michelin-star modern Hungarian restaurant with Hungarian wine pairings; closed Sundays.', { michelin: 'star1', image: '/places/budapest-fine_dining-1.jpg' }),
  place('budapest-fine_dining-2', 'budapest', 'fine_dining', 'Costes Downtown', 'Prestige Hotel, Vigyázó Ferenc utca 5, 1051 Budapest', '프레스티지 호텔 안의 레스토랑. 미쉐린 가이드에 실려 있습니다.', 'Restaurant in the Prestige Hotel, listed in the Michelin Guide.', { image: '/places/budapest-fine_dining-2.jpg' }),
  place('budapest-fine_dining-3', 'budapest', 'fine_dining', 'Babel Budapest', 'Piarista köz 2, 1052 Budapest', '헝가리 전통을 재해석한 테이스팅 메뉴의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star tasting-menu restaurant reinterpreting Hungarian heritage; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('budapest-fine_dining-4', 'budapest', 'fine_dining', 'Hungarikum Bisztró', 'Steindl Imre u. 13, 1051 Budapest', '국회의사당 근처의 작은 헝가리 전통 비스트로. 굴라시·파프리카 치킨을 내고 침발롬 연주가 있습니다. 예약은 온라인으로만 받습니다.', 'Small traditional Hungarian bistro near Parliament serving goulash and chicken paprikash, with cimbalom music; online reservations only.'),
  place('budapest-fine_dining-5', 'budapest', 'fine_dining', 'Kispiac Bisztró', 'Hold utca 13, 1054 Budapest', '홀드 거리 시장 근처의 작은 헝가리 비스트로. 시장에서 산 고기로 송아지 간 커틀릿·삼겹살·오리구이를 냅니다. 테이블이 적어 예약이 좋습니다.', 'Small Hungarian bistro by the Hold utca market hall, cooking market-bought meat such as breaded veal liver, pork belly and roast duck; few tables, so book.'),
  place('budapest-bakery-1', 'budapest', 'bakery', 'Artizán Bakery', 'Hold u. 3, 1054 Budapest', '2015년 홀드 거리에 문을 연 사워도우 빵집. 장시간 발효 빵과 페이스트리, 아침·가벼운 점심을 냅니다.', 'Sourdough bakery opened on Hold utca in 2015, with long-fermented loaves, laminated pastries, breakfast and light lunches.'),
  place('budapest-bakery-2', 'budapest', 'bakery', 'Butter Brothers', 'Lónyay u. 22, 1093 Budapest', '중앙시장 근처 9구의 베이커리 카페. 크루아상과 코코아 롤(커카오시 치거)이 인기입니다.', 'Bakery-café in District IX near the Great Market Hall, known for croissants and kakaós csiga cocoa rolls.'),
  place('budapest-bakery-5', 'budapest', 'bakery', 'Auguszt Cukrászda', 'Kossuth Lajos utca 14–16, 1053 Budapest', '1870년 시작한 오귀스트 가문 제과점의 시내 지점. 도보시·에스테르하지 토르테와 E-80 케이크를 내고 안뜰 좌석이 있습니다.', 'City-centre branch of the Auguszt family confectioners founded in 1870, with Dobos and Esterházy tortes, the E-80 cake and courtyard seating.'),
  place('budapest-cafe-1', 'budapest', 'cafe', 'New York Café', 'Erzsébet krt. 9-11, 1073 Budapest', '1894년 문을 연 뉴욕 팰리스(현 아난타라 호텔)의 카페하우스. 프레스코 장식 실내가 유명하고 오전 일찍이나 밤늦게 가면 줄이 짧습니다.', 'Café-house in the New York Palace (now an Anantara hotel), opened in 1894 and famous for its frescoed interior; queues are shortest early morning or late evening.', { image: '/places/budapest-cafe-1.jpg' }),
  place('budapest-cafe-2', 'budapest', 'cafe', 'Espresso Embassy', 'Arany János utca 15, 1051 Budapest', '성 이슈트반 대성당 근처의 스페셜티 커피 카페. 2013년 지금 자리로 옮겼고 아치형 천장 실내에서 필터 커피·코르타도를 냅니다.', 'Specialty coffee bar near St Stephen’s Basilica, at this address since 2013, serving filter coffee and cortados under a vaulted ceiling.', { image: '/places/budapest-cafe-2.jpg' }),
  place('budapest-cafe-3', 'budapest', 'cafe', 'My Little Melbourne', 'Madách Imre út 3, 1075 Budapest', '유대인 지구 마다치 광장 근처의 스페셜티 커피 카페. 플랫화이트가 대표이고 옆 브루 바에서 핸드드립을 냅니다.', 'Specialty coffee café near Madách Square in the Jewish Quarter, known for its flat white, with manual brews at the Brew Bar next door.'),
  place('budapest-cafe-4', 'budapest', 'cafe', 'Café Gerbeaud', 'Vörösmarty tér 7, 1051 Budapest', '1858년부터 뵈뢰슈마르티 광장을 지킨 카페·제과점. 큰 살롱과 테라스가 있고 값은 비싼 편입니다.', 'Café and confectioner on Vörösmarty Square since 1858, with a grand salon and terrace; prices are high.', { image: '/places/budapest-cafe-4.jpg' }),
  place('budapest-cafe-5', 'budapest', 'cafe', 'Mantra Specialty Coffee Bar', 'Veres Pálné utca 17, 1053 Budapest', '리포트바로시 뒷골목의 스페셜티 커피 카페. 에어로프레스·케멕스·V60으로 라이트 로스트 필터 커피를 내고 테라스가 있습니다.', 'Specialty coffee bar on a Lipótváros backstreet brewing light-roast filter coffee by AeroPress, Chemex and V60, with a terrace.'),
  place('budapest-korean-1', 'budapest', 'korean', 'Arirang', 'Istenhegyi út 25, 1125 Budapest', '부다 12구 안뜰의 한식당. 돌솥비빔밥·김치찌개·고기 요리를 냅니다. 월요일 휴무.', 'Korean restaurant in a Buda courtyard in District XII, serving stone-pot bibimbap, kimchi jjigae and meat dishes; closed Mondays.'),
  place('budapest-korean-2', 'budapest', 'korean', 'Seoul House', 'Fő utca 8, 1011 Budapest', '부다 1구 푀 거리의 한식당. 1991년 설립했고 테이블 바비큐와 반찬을 냅니다.', 'Korean restaurant on Fő utca in Buda’s District I, founded in 1991, with tabletop barbecue and side dishes.'),
  place('budapest-korean-3', 'budapest', 'korean', 'The Gangnam', 'Sas utca 25, 1051 Budapest', '5구 샤시 거리의 한식당. 한국식 바비큐와 찌개를 냅니다. 월요일 휴무.', 'Korean restaurant on Sas utca in District V serving Korean barbecue and stews; closed Mondays.'),
  place('budapest-korean-4', 'budapest', 'korean', 'K-Bunsik', 'Ráday utca 7, 1092 Budapest', '칼빈 광장 근처 라다이 거리의 한식 분식점. 라면과 작은 접시 요리를 냅니다.', 'Korean snack bar on Ráday utca near Kálvin tér serving ramyeon and small plates.'),
  place('budapest-korean-5', 'budapest', 'korean', 'Manna Korean Restaurant', 'Akácfa utca 7, 1072 Budapest', '7구 아카치파 거리의 한식당. 돼지불고기·떡볶이와 찌개를 냅니다.', 'Korean restaurant on Akácfa utca in District VII serving pork bulgogi, spicy rice cakes and stews.'),

  // —— debrecen ——
  place('debrecen-fine_dining-1', 'debrecen', 'fine_dining', 'IKON', 'Piac utca 23, 4031 Debrecen', '피아츠 거리의 레스토랑. 지역 농장 식재료를 쓰고 빵과 데브레첸 소시지를 직접 만듭니다. 미쉐린 가이드에 실려 있고 일·월요일 휴무.', 'Restaurant on Piac utca using produce from local farms and making its own bread and Debrecen sausage; listed in the MICHELIN Guide; closed Sundays and Mondays.'),
  place('debrecen-fine_dining-2', 'debrecen', 'fine_dining', 'Csokonai Restaurant', 'Kossuth utca 21, 4024 Debrecen', '초코나이 극장 맞은편 지하의 헝가리 요리 식당. 양이 넉넉하고 연회장이 있습니다.', 'Cellar restaurant opposite the Csokonai Theatre serving generous Hungarian and international dishes, with a large events hall.'),
  place('debrecen-fine_dining-3', 'debrecen', 'fine_dining', 'Régi Posta Étterem', 'Széchenyi utca 6, 4025 Debrecen', '1690년 지은 데브레첸에서 가장 오래된 건물의 여관 겸 지하 헝가리 요리 식당. 와인 테라스가 있습니다.', 'Inn and cellar-style Hungarian restaurant in Debrecen’s oldest standing building (1690), with a wine terrace.'),
  place('debrecen-bakery-2', 'debrecen', 'bakery', 'Kismandula Cukrászda', 'Liszt Ferenc u. 10, Debrecen', '리스트 페렌츠 거리의 제과점. 케이크·페이스트리와 수제 아이스크림을 내고 주문 케이크도 받습니다.', 'Confectioner on Liszt Ferenc utca with cakes, pastries and homemade ice cream; takes custom cake orders.'),
  place('debrecen-bakery-5', 'debrecen', 'bakery', 'Diti Bakery', 'Csapó u. 64, Debrecen', '차포 거리의 동네 빵집. 빵과 페이스트리를 냅니다.', 'Neighbourhood bakery on Csapó utca selling bread and pastries.'),
  place('debrecen-cafe-2', 'debrecen', 'cafe', 'Black Sheep Micro Roastery & Coffee', 'Csapó utca 23, 4024 Debrecen', '2016년 데브레첸에서 시작한 커피 로스터리 카페. 직접 볶은 원두 커피 수십 종과 브런치·아이스크림을 냅니다.', 'Coffee roastery-café founded in Debrecen in 2016, serving dozens of coffees from its own roasts plus brunch and ice cream.'),

  // —— pecs ——
  place('pecs-fine_dining-1', 'pecs', 'fine_dining', 'Bagolyvár', 'Felsőhavi dűlő 6, 7627 Pécs', '테티에 언덕 위의 헝가리 요리 식당 겸 펜션. 100석 넘는 테라스에서 시내가 내려다보이고 옛 헝가리 요리를 냅니다. 길이 좁아 택시가 편합니다.', 'Hungarian restaurant and guesthouse high on Tettye hill, with a 100-plus-seat terrace overlooking the city and old Hungarian dishes; the road up is narrow, so a taxi is easier.'),
  place('pecs-fine_dining-2', 'pecs', 'fine_dining', 'Original Csülök Bár', 'Pellérdi út 31, 7632 Pécs', '2014년 파타치 지구에서 시작한 가족 운영 식당. 훈제·구운 돼지 족(촐뢰크)이 대표이고 양이 넉넉합니다.', 'Family-run restaurant founded in Patacs in 2014, known for smoked or roast pork knuckle and generous portions.'),
  place('pecs-bakery-1', 'pecs', 'bakery', 'Capri Patisserie', 'Citrom utca 5-7, 7621 Pécs', '1985년부터 영업한 제과점. 이탈리아식 수제 아이스크림과 가족이 만든 디저트가 대표입니다.', 'Confectioner in business since 1985, known for Italian-style craft ice cream and family-made sweets.'),
  place('pecs-bakery-2', 'pecs', 'bakery', 'Trüffel Cukrászda', 'Hársfa út 34, Pécs', '시내에서 20분쯤 걸어가는 곳의 케이크 가게. 뒤쪽에 넓은 테라스·정원과 아이 놀이 공간이 있고 비건 케이크도 있습니다.', 'Cake shop about a 20-minute walk from the centre, with a large terrace and garden with a kids’ play area behind it; vegan cakes too.'),
  place('pecs-bakery-5', 'pecs', 'bakery', "DR. LORR's - Pékstúdó", 'Hajnóczy utca 1, 7633 Pécs', '뉴욕식 시나몬롤을 굽는 빵집. 피스타치오·로투스 등 여러 맛이 있고 수~토요일만 엽니다.', 'Bakery making New York-style cinnamon rolls in flavours such as pistachio and Lotus Biscoff; open Wednesday to Saturday only.'),
  place('pecs-cafe-1', 'pecs', 'cafe', 'Morzsa', 'Király utca 42, 7621 Pécs', '킹 거리의 베이커리 겸 비스트로. 빵과 페이스트리를 굽는 모습을 볼 수 있고 작은 접시 요리를 하루 종일 냅니다. 미쉐린 가이드에 실려 있고 월~수요일 휴무.', 'Bakery-bistro on Király utca where you can watch the bread and pastries being made, with small plates served all day; listed in the MICHELIN Guide; closed Monday to Wednesday.'),
  place('pecs-cafe-2', 'pecs', 'cafe', 'Pécsi Kávé', 'Irgalmasok utcája 6, 7621 Pécs', '역사적 건물 안뜰 정원에 숨은 스페셜티 커피 카페 겸 브루 바.', 'Specialty coffee café and brew bar tucked into the courtyard garden of a historic building.'),

  // —— szeged ——
  place('szeged-fine_dining-1', 'szeged', 'fine_dining', 'Régi Híd Vendéglő', 'Oskola u. 4, 6720 Szeged', '티서강 근처의 소박한 헝가리 요리 식당. 생선 수프·굴라시·잉어 요리를 넉넉하게 냅니다.', 'Rustic Hungarian restaurant near the Tisza serving generous fish soup, goulash and carp.'),
  place('szeged-fine_dining-2', 'szeged', 'fine_dining', 'Roosevelt téri Halászcsárda', 'Roosevelt tér 14, 6720 Szeged', '티서강변의 생선 요리 식당. ‘소금통(쇼타르토)’이라는 별명으로 불리고 세게드식 어부 수프가 대표입니다. 따뜻한 철엔 강가 자리와 민속 음악 연주가 있습니다.', 'Riverside fish restaurant nicknamed the ‘Salt Shaker’ (Sótartó), famous for Szeged fisherman’s soup, with riverside tables and folk music in warm months.'),
  place('szeged-bakery-1', 'szeged', 'bakery', 'Emmarozs', 'Mérey utca 15/a, 6725 Szeged', '천연발효 사워도우 빵집의 첫 매장. 굽는 과정을 볼 수 있고 크루아상·시나몬롤과 에그 베네딕트를 냅니다.', 'Original shop of a sourdough bakery where you can watch the baking, with croissants, cinnamon rolls and eggs Benedict.'),
  place('szeged-bakery-2', 'szeged', 'bakery', 'Csiga Bakery', 'Szent Ferenc u. 12, Szeged', '동네 빵집. 키플리·시나몬롤과 피자, 아이스크림을 팝니다.', 'Neighbourhood bakery selling kifli, cinnamon rolls, pizza and ice cream.'),
  place('szeged-bakery-4', 'szeged', 'bakery', 'Kálvária Cukrászda', 'Kálvária tér 32, Szeged', '1984년 작은 가판대로 시작한 제과점. 케이크와 36가지 아이스크림을 내고 주문 케이크도 만듭니다.', 'Confectioner that began as a small kiosk in 1984, with cakes, 36 flavours of ice cream and custom cakes.'),
  place('szeged-cafe-2', 'szeged', 'cafe', 'Kék Elefánt Kávézó', 'Klauzál tér 5, Szeged', '클라우잘 광장 안뜰에 숨은 작은 스페셜티 커피 카페. 프렌치프레스·드립 커피와 핫초콜릿이 있습니다.', 'Tiny specialty coffee café tucked into a courtyard off Klauzál Square, with French press, drip coffee and hot chocolate.'),
  place('szeged-cafe-3', 'szeged', 'cafe', 'Corso Café', 'Kárász u. 16, Szeged', '카라스 보행자 거리의 카페. 1908~1911년 지은 건물의 옛 코르소 카페 자리이고 그릴 요리와 큰 테라스가 있습니다.', 'Café on pedestrian Kárász utca in the former Corsó café space of a 1908–11 building, with grilled dishes and a big terrace.'),
  place('szeged-cafe-4', 'szeged', 'cafe', 'Saint Cafe & Bistro', 'Szent István tér, 6721 Szeged, Hungary', '봉헌 성당 옆의 카페 겸 와인 바. 크루아상 샌드위치 같은 아침 메뉴와 플랫화이트를 냅니다.', 'Café and wine bar beside the Votive Church, with breakfast such as croissant sandwiches and flat whites.'),
  place('szeged-cafe-5', 'szeged', 'cafe', 'Hét Kávézó', 'Horváth Mihály u. 7, Szeged', '빈티지 분위기의 스페셜티 커피 카페. 필터·콜드브루·니트로 커피와 사워도우 샌드위치를 냅니다. 일요일 휴무.', 'Vintage-style specialty coffee café with filter, cold brew and nitro coffee and sourdough sandwiches; closed Sundays.'),

  // —— eger ——
  place('eger-fine_dining-1', 'eger', 'fine_dining', 'Macok Bistro', 'Tinódi S. tér 4, 3300 Eger', '성벽 옆 구시가 돌길의 가족 운영 비스트로. 헝가리·지중해 요리를 내고 물레방아가 있는 안뜰과 와인 가게가 있습니다. 미쉐린 가이드에 실려 있습니다.', 'Family-run bistro on a cobbled old-town street beside the castle walls, serving Hungarian and Mediterranean dishes, with a water-wheel courtyard and wine shop; listed in the MICHELIN Guide.'),
  place('eger-fine_dining-2', 'eger', 'fine_dining', 'Forst-Ház Étterem és Kávézó', 'Dobó tér 1, 3300 Eger', '2004년부터 도보 광장에서 영업한 레스토랑 겸 카페. 메뉴가 계절마다 바뀌고 사슴 스테이크 등을 내며 광장 쪽 야외석이 있습니다.', 'Restaurant-café on Dobó Square since 2004, with a seasonally changing menu including venison steak and outdoor tables on the square.'),
  place('eger-bakery-2', 'eger', 'bakery', 'Kávésdoboz Coffee Bar & Deli', 'Jókai Mór utca 2, 3300 Eger', '2021년 문을 연 커피 바 겸 델리. 사워도우 빵과 소규모 생산자 식료품, 아침 메뉴를 냅니다.', 'Coffee bar and deli open since 2021, with sourdough bread, small-producer goods and breakfast.'),
  place('eger-cafe-1', 'eger', 'cafe', 'Greek Café', 'Dobó István u. 22, 3300 Eger, Hungary', '성으로 올라가는 도보 거리의 카페. 그리스풍 안뜰에서 30여 가지 커피와 핫초콜릿, 지역 와인을 냅니다.', 'Café on Dobó Street on the way up to the castle, with a Greek-style courtyard, over 30 coffees, hot chocolate and regional wines.'),
  place('eger-cafe-3', 'eger', 'cafe', 'Kis sziget cafe and bar', 'Kertész u. 42, Eger', '시내 중심 밖 주택가의 아늑한 카페 겸 바. 커피·차·샌드위치·와인을 내고 테라스와 놀이 공간이 있으며 현금만 받습니다.', 'Cosy café-bar just outside the centre with coffee, tea, sandwiches and wine, a terrace and a kids’ play corner; cash only.'),
  place('eger-cafe-5', 'eger', 'cafe', 'Manooka Kávézó', 'Bajcsy-Zsilinszky Endre 17, Eger', '2018년 문을 연 시내의 스페셜티 커피·아침 식사 카페. 아기 동반에 맞춘 놀이 공간과 수유실이 있고 비건·글루텐프리 메뉴도 있습니다.', 'Specialty coffee and breakfast café in the centre, open since 2018 and set up for families with a play corner and baby room; vegan and gluten-free options.'),

  // —— tihany ——
  place('tihany-fine_dining-1', 'tihany', 'fine_dining', 'Tihanyi Vinarius', 'Kiserdőtelepi út, 8237 Tihany', '티하니의 컨템퍼러리 레스토랑. 미쉐린 가이드 선정. 지금은 구글지도에 임시 휴업으로 나오니 가기 전에 확인하세요.', 'Contemporary restaurant in Tihany. In the MICHELIN Guide. Google Maps currently shows it as temporarily closed, so check before you go.'),
  place('tihany-bakery-1', 'tihany', 'bakery', 'Apátsági Rege Cukrászda', 'Kossuth Lajos u. 22, 8237 Tihany', '수도원 언덕의 제과점 겸 카페. 테라스에서 벌러톤 호수가 보입니다.', 'Cake shop and café on the abbey hill, with Lake Balaton views from the terrace.'),
  place('tihany-cafe-1', 'tihany', 'cafe', 'Énidő Specialty Cafe', 'Rév u. 2, 8237 Tihany', '페리 선착장 쪽 레브 거리의 스페셜티 커피 카페.', 'Speciality coffee café on Rév utca by the ferry pier.'),

  // —— szentendre ——
  place('szentendre-fine_dining-1', 'szentendre', 'fine_dining', 'Teyföl', 'Városház tér 2, 2000 Szentendre', '시청 광장의 헝가리 요리 식당. 미쉐린 가이드 선정.', 'Hungarian restaurant on the town-hall square. In the MICHELIN Guide.'),
  place('szentendre-cafe-1', 'szentendre', 'cafe', 'Café Lex', 'Alkotmány u. 5, 2000 Szentendre', '구시가 골목의 카페.', 'Café in an old-town lane.'),
  place('szentendre-cafe-2', 'szentendre', 'cafe', 'Parti Medve Könyvesbolt és Kávézó', 'Ignatovity Jakov u. 2, 2000 Szentendre', '서점 겸 카페.', 'Bookshop and café.'),

  // —— gyor: restaurants, bakeries and cafés (2026-11-06) ——
  place('gyor-fine_dining-1', 'gyor', 'fine_dining', 'Lamareda', 'Apáca u. 4, 9022 Győr, Hungary', '구시가 보행자 거리의 오래된 레스토랑 겸 비스트로. 미쉐린 가이드 선정.', 'Long-standing restaurant and bistro on a pedestrian street in the old town. In the MICHELIN Guide.'),
  place('gyor-fine_dining-2', 'gyor', 'fine_dining', 'Komédiás Étterem', 'Czuczor Gergely u. 30, 9022 Győr, Hungary', '구시가의 헝가리 요리 식당.', 'Hungarian restaurant in the old town.'),
  place('gyor-fine_dining-3', 'gyor', 'fine_dining', 'Szalai Vendéglő', 'Kisfaludy u. 34, 9022 Győr, Hungary', '가정식 헝가리 요리를 내는 동네 식당.', 'Neighbourhood restaurant serving home-style Hungarian cooking.'),
  place('gyor-fine_dining-4', 'gyor', 'fine_dining', 'Zöldfa Restaurant', 'Hunyadi u. 2, 9021 Győr, Hungary', '역 근처의 헝가리 요리 식당.', 'Hungarian restaurant near the station.'),
  place('gyor-fine_dining-5', 'gyor', 'fine_dining', 'Faceroom Étterem', 'Pálffy u. 2, 9022 Győr, Hungary', '구시가의 헝가리·현대 요리 레스토랑.', 'Hungarian and modern restaurant in the old town.'),
  place('gyor-cafe-1', 'gyor', 'cafe', 'Másképp Specialty Coffee', 'Dunakapu tér 1, 9022 Győr, Hungary', '두너커푸 광장의 스페셜티 커피 바.', 'Specialty coffee bar on Dunakapu Square.'),
  place('gyor-cafe-2', 'gyor', 'cafe', 'Kávébajusz', 'Bécsi kapu tér 4, 9022 Győr, Hungary', '베치 커푸 광장의 스페셜티 커피 카페 겸 원두 가게.', 'Specialty coffee café and roastery shop on Bécsi kapu Square.'),
  place('gyor-cafe-3', 'gyor', 'cafe', 'Café Frei', 'Czuczor Gergely u. 6, 9022 Győr, Hungary', '구시가 골목의 카페.', 'Café on an old-town lane.'),
  place('gyor-cafe-4', 'gyor', 'cafe', 'Cafe Brunch Győr', 'Baross Gábor út 11-13, 9021 Győr, Hungary', '바로시 거리의 아침·브런치 카페.', 'Breakfast and brunch café on Baross Street.'),
  place('gyor-bakery-1', 'gyor', 'bakery', 'Boulangerie Nice', 'Baross Gábor út 10, 9021 Győr, Hungary', '바로시 거리의 수제 빵집 겸 카페.', 'Artisan bakery and café on Baross Street.'),
  place('gyor-bakery-2', 'gyor', 'bakery', 'Brioche Bakery', 'Arany János u. 15, 9021 Győr, Hungary', '아라니 야노시 거리의 빵집.', 'Bakery on Arany János Street.'),
  place('gyor-bakery-3', 'gyor', 'bakery', 'Eli Pékség', 'Pálffy u. 7, 9022 Győr, Hungary', '구시가의 작은 빵집.', 'Small bakery in the old town.'),

  // —— sopron: restaurants, bakeries and cafés (2026-11-06) ——
  place('sopron-fine_dining-1', 'sopron', 'fine_dining', 'Deák Étterem', 'Erzsébet u. 20, 9400 Sopron, Hungary', '구시가 남쪽의 헝가리 요리 레스토랑.', 'Hungarian restaurant just south of the old town.'),
  place('sopron-fine_dining-2', 'sopron', 'fine_dining', 'Erhardt Étterem', 'Balfi út 10, 9400 Sopron, Hungary', '쇼프론 와인을 갖춘 와인 저장고 겸 레스토랑과 펜션.', 'Restaurant, wine cellar and guesthouse with Sopron wines.'),
  place('sopron-fine_dining-3', 'sopron', 'fine_dining', 'Perkovátz-Ház', 'Széchenyi tér 12, 9400 Sopron, Hungary', '세체니 광장의 레스토랑.', 'Restaurant on Széchenyi Square.'),
  place('sopron-fine_dining-4', 'sopron', 'fine_dining', 'Papa Joe\'s Saloon & Steakhouse', 'Várkerület 108, 9400 Sopron, Hungary', '성벽 순환로의 스테이크하우스.', 'Steakhouse on the ring road around the old walls.'),
  place('sopron-cafe-1', 'sopron', 'cafe', 'Cafe Flow', 'Várkerület 53, 9400 Sopron, Hungary', '성벽 순환로의 카페.', 'Café on the ring road around the old walls.'),
  place('sopron-cafe-2', 'sopron', 'cafe', 'Kultúrpresszó', 'Várkerület 96, 9400 Sopron, Hungary', '성벽 순환로의 커피숍.', 'Coffee shop on the ring road around the old walls.'),
  place('sopron-cafe-3', 'sopron', 'cafe', 'Coffee Clinic Sopron', 'Lackner Kristóf u. 27, 9400 Sopron, Hungary', '스페셜티 커피 가게.', 'Specialty coffee shop.'),
  place('sopron-bakery-1', 'sopron', 'bakery', 'Ágoston Pékműhely', 'Színház u. 25, 9400 Sopron, Hungary', '구시가 근처의 작은 수제 빵집.', 'Small artisan bakery near the old town.'),
  place('sopron-bakery-2', 'sopron', 'bakery', 'Erhardt Pékség', 'Balfi út 8, 9400 Sopron, Hungary', '에르하르트 레스토랑 옆의 빵집.', 'Bakery next to the Erhardt restaurant.'),

  // —— holloko: restaurants, bakeries and cafés (2026-11-06) ——
  place('holloko-fine_dining-1', 'holloko', 'fine_dining', 'Masinás Vendéglő', 'Kossuth u. 93-95, 3176 Hollókő, Hungary', '마을 길가의 헝가리 요리 식당.', 'Hungarian restaurant on the village street.'),
  place('holloko-fine_dining-2', 'holloko', 'fine_dining', 'Muskátli Vendéglő', 'Kossuth u. 61, 3176 Hollókő, Hungary', '옛 마을 안의 팔로츠·헝가리 가정식 식당.', 'Palóc and Hungarian home cooking in the old village.'),
  place('holloko-fine_dining-3', 'holloko', 'fine_dining', 'Mikszáth Étterem', 'Sport utca 14, 3176 Hollókő, Hungary', '마을의 헝가리 요리 식당.', 'Hungarian restaurant in the village.'),

  // —— tokaj: restaurants, bakeries and cafés (2026-11-06) ——
  place('tokaj-fine_dining-1', 'tokaj', 'fine_dining', 'Galuschka Bistro & Garden', 'Bethlen Gábor út 13, 3910 Tokaj, Hungary', '정원이 있는 비스트로. 토카이 와인과 헝가리 요리를 냅니다.', 'Bistro with a garden serving Hungarian dishes and Tokaj wines.'),
  place('tokaj-fine_dining-2', 'tokaj', 'fine_dining', '1737 Terroir Restaurant', 'Kossuth tér 14, 3910 Tokaj, Hungary', '코슈트 광장의 지역 와인·식재료 레스토랑.', 'Restaurant on Kossuth Square built around local wine and produce.'),
  place('tokaj-fine_dining-3', 'tokaj', 'fine_dining', 'Winestone Restaurant', 'Rákóczi út 5, 3910 Tokaj, Hungary', '현대식 유럽 요리 레스토랑.', 'Modern European restaurant.'),
  place('tokaj-fine_dining-4', 'tokaj', 'fine_dining', 'Terülj-Terülj asztalkám', 'Dienes Pál u. 109, 3910 Tokaj, Hungary', '헝가리 요리 식당.', 'Hungarian restaurant.'),
  place('tokaj-cafe-1', 'tokaj', 'cafe', 'Tokaj Coffee Roasting Co.', 'Kossuth tér, 3910 Tokaj, Hungary', '코슈트 광장의 커피 로스터리 카페.', 'Coffee roastery café on Kossuth Square.'),
  place('tokaj-bakery-1', 'tokaj', 'bakery', 'FMX Pékség', 'Tarcali út 6, 3910 Tokaj, Hungary', '마을 입구의 빵집.', 'Bakery at the edge of town.'),

  // —— keszthely: restaurants, bakeries and cafés (2026-11-06) ——
  place('keszthely-fine_dining-1', 'keszthely', 'fine_dining', 'Pajti', 'Bem József u. 1, 8360 Keszthely, Hungary', '시내의 비스트로.', 'Bistro in the town centre.'),
  place('keszthely-fine_dining-2', 'keszthely', 'fine_dining', 'Jóbarát Vendéglő', 'Martinovics u. 1, 8360 Keszthely, Hungary', '헝가리 가정식 식당.', 'Restaurant serving Hungarian home cooking.'),
  place('keszthely-fine_dining-3', 'keszthely', 'fine_dining', 'Tompos Restaurant', 'Pázmány Péter u. 56, 8360 Keszthely, Hungary', '헝가리·유럽 요리 레스토랑.', 'Hungarian and European restaurant.'),
  place('keszthely-cafe-1', 'keszthely', 'cafe', 'Tulipán Kávéház', 'Erzsébet királyné útja 30, 8360 Keszthely, Hungary', '시내의 카페 겸 디저트 가게.', 'Café and cake shop in the town.'),
  place('keszthely-cafe-2', 'keszthely', 'cafe', 'Pelso Cafe', 'Kossuth Lajos u. 38, 8360 Keszthely, Hungary', '보행자 거리 코슈트 거리의 커피숍.', 'Coffee shop on the pedestrian Kossuth Street.'),
  place('keszthely-cafe-3', 'keszthely', 'cafe', 'Part Breakfast & Brunch', 'Bercsényi Miklós u. 65, 8360 Keszthely, Hungary', '호숫가 쪽의 아침·브런치 카페.', 'Breakfast and brunch café towards the lakeshore.'),
  place('keszthely-bakery-1', 'keszthely', 'bakery', 'Madárlátta Pékség', 'Kossuth Lajos u. 39, 8360 Keszthely, Hungary', '코슈트 거리의 빵집.', 'Bakery on Kossuth Street.'),
  place('keszthely-bakery-2', 'keszthely', 'bakery', 'Hosszú Pékség', 'Skála köz, 8360 Keszthely, Hungary', '시내의 빵집.', 'Bakery in the town centre.'),

  // —— szekesfehervar: restaurants, bakeries and cafés (2026-11-27) ——
  place('szekesfehervar-fine_dining-1', 'szekesfehervar', 'fine_dining', '67 Étterem (67 Sigma)', 'Oskola u. 2-4, 8000 Székesfehérvár, Hungary', '헝가리 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.8(리뷰 577개).', 'Hungarian restaurant. Listed in the MICHELIN Guide. Rated 4.8 on Google Maps (577 reviews).'),
  place('szekesfehervar-fine_dining-2', 'szekesfehervar', 'fine_dining', 'bEAT', 'Vörösmarty tér 1, Székesfehérvár, Hungary', '레스토랑. 구글 지도 평점 4.8(리뷰 3309개).', 'Restaurant. Rated 4.8 on Google Maps (3309 reviews).'),
  place('szekesfehervar-fine_dining-3', 'szekesfehervar', 'fine_dining', 'Kiskulacs Vendéglő', 'Budai út 26, Székesfehérvár, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.8(리뷰 2247개).', 'Hungarian restaurant. Rated 4.8 on Google Maps (2247 reviews).'),
  place('szekesfehervar-fine_dining-4', 'szekesfehervar', 'fine_dining', 'Pady\'s Bistro', 'Fő utca 1, Székesfehérvár, Hungary', '비스트로. 구글 지도 평점 4.7(리뷰 602개).', 'Bistro. Rated 4.7 on Google Maps (602 reviews).'),
  place('szekesfehervar-fine_dining-5', 'szekesfehervar', 'fine_dining', 'Kiskakas Vendéglő', 'Kelemen Béla u. 93, Székesfehérvár, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.7(리뷰 2546개).', 'Hungarian restaurant. Rated 4.7 on Google Maps (2546 reviews).'),
  place('szekesfehervar-bakery-1', 'szekesfehervar', 'bakery', 'Már Vártalak pékség, kávézó', 'Király sor 66, Székesfehérvár, Hungary', '빵집. 구글 지도 평점 4.9(리뷰 1083개).', 'Bakery. Rated 4.9 on Google Maps (1083 reviews).'),
  place('szekesfehervar-bakery-2', 'szekesfehervar', 'bakery', 'Cream Patisserie and Cafe', 'Szabadságharcos út 40, Székesfehérvár, Hungary', '과자점. 구글 지도 평점 4.7(리뷰 3197개).', 'Pastry shop. Rated 4.7 on Google Maps (3197 reviews).'),
  place('szekesfehervar-cafe-1', 'szekesfehervar', 'cafe', 'Jóbarátok Kávézó és Bár', 'Távirda u. 23, Székesfehérvár, Hungary', '카페. 구글 지도 평점 4.9(리뷰 397개).', 'Café. Rated 4.9 on Google Maps (397 reviews).'),
  place('szekesfehervar-cafe-2', 'szekesfehervar', 'cafe', 'Szentjánosbogár Specialty Kávékert', 'Liszt Ferenc u. 1, Székesfehérvár, Hungary', '스페셜티 커피 바. 구글 지도 평점 4.9(리뷰 219개).', 'Specialty coffee bar. Rated 4.9 on Google Maps (219 reviews).'),
  place('szekesfehervar-cafe-3', 'szekesfehervar', 'cafe', 'Veled Teljes Specialty Café & Bistro', 'Oskola u. 6, Székesfehérvár, Hungary', '스페셜티 커피 바. 구글 지도 평점 4.8(리뷰 190개).', 'Specialty coffee bar. Rated 4.8 on Google Maps (190 reviews).'),
  place('szekesfehervar-cafe-4', 'szekesfehervar', 'cafe', 'Puhakuckó kávézó', 'Lépcső u. 2, Székesfehérvár, Hungary', '카페. 구글 지도 평점 4.7(리뷰 197개).', 'Café. Rated 4.7 on Google Maps (197 reviews).'),

  // —— veszprem: restaurants, bakeries and cafés (2026-11-27) ——
  place('veszprem-fine_dining-1', 'veszprem', 'fine_dining', 'GUSTO13 Bistro & Delicate', 'Csermák Antal u. 13, Veszprém, Hungary', '지중해 요리 레스토랑. 구글 지도 평점 4.8(리뷰 1437개).', 'Mediterranean restaurant. Rated 4.8 on Google Maps (1437 reviews).'),
  place('veszprem-fine_dining-2', 'veszprem', 'fine_dining', 'Smoke & More', 'Óváros tér 26, Veszprém, Hungary', '그릴 레스토랑. 구글 지도 평점 4.8(리뷰 215개).', 'Grill restaurant. Rated 4.8 on Google Maps (215 reviews).'),
  place('veszprem-fine_dining-3', 'veszprem', 'fine_dining', 'Nosztalgia Garden', 'Kittenberger Kálmán u. 11, Veszprém, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.8(리뷰 418개).', 'Hungarian restaurant. Rated 4.8 on Google Maps (418 reviews).'),
  place('veszprem-fine_dining-4', 'veszprem', 'fine_dining', 'Kiskuti csárda', 'Veszprém, Hungary', '차르다(헝가리 전통 주막 식당). 구글 지도 평점 4.7(리뷰 339개).', 'Csárda (traditional Hungarian inn). Rated 4.7 on Google Maps (339 reviews).'),
  place('veszprem-fine_dining-5', 'veszprem', 'fine_dining', 'Chill Bistro', 'Óváros tér 4, Veszprém, Hungary', '비스트로. 구글 지도 평점 4.5(리뷰 1304개).', 'Bistro. Rated 4.5 on Google Maps (1304 reviews).'),
  place('veszprem-bakery-1', 'veszprem', 'bakery', 'Mákmoiselle Pékség', 'Megyeház tér 2, Veszprém, Hungary', '빵집. 구글 지도 평점 4.7(리뷰 355개).', 'Bakery. Rated 4.7 on Google Maps (355 reviews).'),
  place('veszprem-bakery-2', 'veszprem', 'bakery', 'Mackó Cukrászda Veszprém', 'Megyeház tér 2, Veszprém, Hungary', '과자점. 구글 지도 평점 4.4(리뷰 1459개).', 'Pastry shop. Rated 4.4 on Google Maps (1459 reviews).'),
  place('veszprem-bakery-3', 'veszprem', 'bakery', 'Jakova Bakeries', 'Egyetem u. 19, Veszprém, Hungary', '빵집. 구글 지도 평점 4.3(리뷰 619개).', 'Bakery. Rated 4.3 on Google Maps (619 reviews).'),
  place('veszprem-cafe-1', 'veszprem', 'cafe', 'Tizen1', 'Kossuth Lajos u. 6, Veszprém, Hungary', '카페. 구글 지도 평점 4.8(리뷰 490개).', 'Café. Rated 4.8 on Google Maps (490 reviews).'),
  place('veszprem-cafe-2', 'veszprem', 'cafe', 'KUNSZT!', 'Óváros tér 1, Veszprém, Hungary', '카페. 구글 지도 평점 4.6(리뷰 692개).', 'Café. Rated 4.6 on Google Maps (692 reviews).'),
  place('veszprem-cafe-3', 'veszprem', 'cafe', 'Cafe Frei Balaton', 'Budapest út 20-28, Veszprém, Hungary', '카페. 구글 지도 평점 4.5(리뷰 1526개).', 'Café. Rated 4.5 on Google Maps (1526 reviews).'),

  // —— balatonfured: restaurants, bakeries and cafés (2026-11-27) ——
  place('balatonfured-fine_dining-1', 'balatonfured', 'fine_dining', 'Bistro Sparhelt', 'Szent István tér 7, 8230 Balatonfüred, Hungary', '비스트로. 미쉐린 빕 구르망. 구글 지도 평점 4.6(리뷰 1015개).', 'Bistro. MICHELIN Bib Gourmand. Rated 4.6 on Google Maps (1015 reviews).', { michelin: 'bib' }),
  place('balatonfured-fine_dining-2', 'balatonfured', 'fine_dining', 'Zelna Bisztró', 'Zákonyi Ferenc u. 3-5, 8230 Balatonfüred, Hungary', '비스트로. 미쉐린 가이드 소개. 구글 지도 평점 4.6(리뷰 357개).', 'Bistro. Listed in the MICHELIN Guide. Rated 4.6 on Google Maps (357 reviews).'),
  place('balatonfured-fine_dining-3', 'balatonfured', 'fine_dining', 'Csopaki Resti', 'Kossuth u. 1, 8229 Csopak, Hungary', '초퍼크에 있는 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.8(리뷰 235개).', 'Restaurant in Csopak. Listed in the MICHELIN Guide. Rated 4.8 on Google Maps (235 reviews).'),
  place('balatonfured-fine_dining-4', 'balatonfured', 'fine_dining', 'Petrányi Pince', 'Homokbánya u. 31, 8229 Csopak, Hungary', '초퍼크에 있는 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.7(리뷰 804개).', 'Restaurant in Csopak. Listed in the MICHELIN Guide. Rated 4.7 on Google Maps (804 reviews).'),
  place('balatonfured-fine_dining-5', 'balatonfured', 'fine_dining', 'Víg Molnár Csárda', 'Kőkorsó u. 1, 8229 Csopak, Hungary', '초퍼크에 있는 차르다(헝가리 전통 주막 식당). 미쉐린 가이드 소개. 구글 지도 평점 4.5(리뷰 3349개).', 'Csárda (traditional Hungarian inn) in Csopak. Listed in the MICHELIN Guide. Rated 4.5 on Google Maps (3349 reviews).'),
  place('balatonfured-bakery-1', 'balatonfured', 'bakery', 'Bergmann Cukrászda Balatonfüred', 'Petőfi Sándor u. 64, Balatonfüred, Hungary', '과자점. 구글 지도 평점 4.8(리뷰 721개).', 'Pastry shop. Rated 4.8 on Google Maps (721 reviews).'),
  place('balatonfured-bakery-2', 'balatonfured', 'bakery', 'Füredi Strudel Shop', 'Petőfi Sándor u. 21, Balatonfüred, Hungary', '과자점. 구글 지도 평점 4.8(리뷰 201개).', 'Pastry shop. Rated 4.8 on Google Maps (201 reviews).'),
  place('balatonfured-bakery-3', 'balatonfured', 'bakery', 'Péklány Kézműves Pékség', 'Szent István tér 5-7, Balatonfüred, Hungary', '빵집. 구글 지도 평점 4.6(리뷰 1180개).', 'Bakery. Rated 4.6 on Google Maps (1180 reviews).'),
  place('balatonfured-bakery-4', 'balatonfured', 'bakery', 'Bergmann Confectionery Tea and Coffee', 'Zsigmond u. 1, Balatonfüred, Hungary', '디저트 가게. 구글 지도 평점 4.6(리뷰 3597개).', 'Dessert shop. Rated 4.6 on Google Maps (3597 reviews).'),
  place('balatonfured-cafe-1', 'balatonfured', 'cafe', 'Loom Café & Co.', 'Aranyhíd stny. 8, Balatonfüred, Hungary', '카페. 구글 지도 평점 4.6(리뷰 103개).', 'Café. Rated 4.6 on Google Maps (103 reviews).'),
  place('balatonfured-cafe-2', 'balatonfured', 'cafe', 'Carpe Diem Kávézó & Ételbár', 'Szent István tér 7, Balatonfüred, Hungary', '카페. 구글 지도 평점 4.6(리뷰 87개).', 'Café. Rated 4.6 on Google Maps (87 reviews).'),
  place('balatonfured-cafe-3', 'balatonfured', 'cafe', 'Pazar Coffee Company Balatonfüred', 'Aranyhíd stny. 6, Balatonfüred, Hungary', '카페. 구글 지도 평점 4.5(리뷰 1238개).', 'Café. Rated 4.5 on Google Maps (1238 reviews).'),
  place('balatonfured-cafe-4', 'balatonfured', 'cafe', 'Carolina Cafe and Cocktail Bar', 'Zákonyi Ferenc u. 4, Balatonfüred, Hungary', '카페. 구글 지도 평점 4.5(리뷰 4897개).', 'Café. Rated 4.5 on Google Maps (4897 reviews).'),

  // —— sumeg: restaurants, bakeries and cafés (2026-11-27) ——
  place('sumeg-fine_dining-1', 'sumeg', 'fine_dining', 'B terv Étterem & Kávézó', 'Kossuth Lajos u. 6, Sümeg, Hungary', '레스토랑. 구글 지도 평점 4.7(리뷰 654개).', 'Restaurant. Rated 4.7 on Google Maps (654 reviews).'),
  place('sumeg-fine_dining-2', 'sumeg', 'fine_dining', 'Várcsárda Étterem', 'Kisfaludy kert, Sümeg, Hungary', '차르다(헝가리 전통 주막 식당). 구글 지도 평점 4.6(리뷰 3572개).', 'Csárda (traditional Hungarian inn). Rated 4.6 on Google Maps (3572 reviews).'),
  place('sumeg-fine_dining-3', 'sumeg', 'fine_dining', 'Thirty\'s Étterem & Pizzéria', 'Fő út 84, Sümeg, Hungary', '피자 식당. 구글 지도 평점 4.6(리뷰 772개).', 'Pizza restaurant. Rated 4.6 on Google Maps (772 reviews).'),

  // —— esztergom: restaurants, bakeries and cafés (2026-11-27) ——
  place('esztergom-fine_dining-1', 'esztergom', 'fine_dining', '42 Restaurant', 'Széchenyi tér 23, 2500 Esztergom, Hungary', '현대 요리 레스토랑. 미쉐린 1스타. 구글 지도 평점 4.8(리뷰 323개).', 'Modern cuisine restaurant. One MICHELIN star. Rated 4.8 on Google Maps (323 reviews).', { michelin: 'star1' }),
  place('esztergom-fine_dining-2', 'esztergom', 'fine_dining', 'Koriander Vendéglő', 'Simor János u. 8, Esztergom, Hungary', '레스토랑. 구글 지도 평점 4.9(리뷰 305개).', 'Restaurant. Rated 4.9 on Google Maps (305 reviews).'),
  place('esztergom-fine_dining-3', 'esztergom', 'fine_dining', 'Nonna', 'Széchenyi tér 13, Esztergom, Hungary', '이탈리아 요리 레스토랑. 구글 지도 평점 4.8(리뷰 188개).', 'Italian restaurant. Rated 4.8 on Google Maps (188 reviews).'),
  place('esztergom-fine_dining-4', 'esztergom', 'fine_dining', 'AO•KOI Japán Étterem & Kávézó', 'Madách Imre út 6, Esztergom, Hungary', '일본 요리 레스토랑. 구글 지도 평점 4.8(리뷰 280개).', 'Japanese restaurant. Rated 4.8 on Google Maps (280 reviews).'),
  place('esztergom-fine_dining-5', 'esztergom', 'fine_dining', 'Primate of Esztergom Cellar and Restaurant', 'Szent István tér 12, Esztergom, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.6(리뷰 2715개).', 'Hungarian restaurant. Rated 4.6 on Google Maps (2715 reviews).'),
  place('esztergom-bakery-1', 'esztergom', 'bakery', 'Café La Fontana Esztergom', 'Széchenyi tér 20, Esztergom, Hungary', '과자점. 구글 지도 평점 4.6(리뷰 1501개).', 'Pastry shop. Rated 4.6 on Google Maps (1501 reviews).'),
  place('esztergom-bakery-2', 'esztergom', 'bakery', 'Isler Bakery, Bistro and Kitchen', 'Lőrinc u. 6, Esztergom, Hungary', '빵집. 구글 지도 평점 4.6(리뷰 399개).', 'Bakery. Rated 4.6 on Google Maps (399 reviews).'),
  place('esztergom-bakery-3', 'esztergom', 'bakery', 'Központi Kávéház Szamos Cukrászda', 'Vörösmarty u. 2, Esztergom, Hungary', '과자점. 구글 지도 평점 4.4(리뷰 2096개).', 'Pastry shop. Rated 4.4 on Google Maps (2096 reviews).'),
  place('esztergom-cafe-1', 'esztergom', 'cafe', 'BaBszem kávézó és reggeliző', 'Simor János u. 13, Esztergom, Hungary', '카페. 구글 지도 평점 4.8(리뷰 87개).', 'Café. Rated 4.8 on Google Maps (87 reviews).'),

  // —— koszeg: restaurants, bakeries and cafés (2026-11-27) ——
  place('koszeg-fine_dining-1', 'koszeg', 'fine_dining', 'Dominik Pizzéria & Étterem', 'Várkör 59, Kőszeg, Hungary', '피자 식당. 구글 지도 평점 4.8(리뷰 514개).', 'Pizza restaurant. Rated 4.8 on Google Maps (514 reviews).'),
  place('koszeg-fine_dining-2', 'koszeg', 'fine_dining', 'Ibrahim Cafe and Restaurant', 'Fő tér 17, Kőszeg, Hungary', '레스토랑. 구글 지도 평점 4.6(리뷰 1429개).', 'Restaurant. Rated 4.6 on Google Maps (1429 reviews).'),
  place('koszeg-fine_dining-3', 'koszeg', 'fine_dining', 'Kékfény Étterem és Pizzéria', 'Várkör 25, Kőszeg, Hungary', '레스토랑. 구글 지도 평점 4.5(리뷰 1530개).', 'Restaurant. Rated 4.5 on Google Maps (1530 reviews).'),
  place('koszeg-fine_dining-4', 'koszeg', 'fine_dining', 'Boszorkánykonyha', 'Jurisics tér 13, Kőszeg, Hungary', '레스토랑. 구글 지도 평점 4.5(리뷰 1262개).', 'Restaurant. Rated 4.5 on Google Maps (1262 reviews).'),
  place('koszeg-fine_dining-5', 'koszeg', 'fine_dining', 'Kék Huszár Vendéglő', 'Várkör 60, Kőszeg, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.4(리뷰 1330개).', 'Hungarian restaurant. Rated 4.4 on Google Maps (1330 reviews).'),
  place('koszeg-bakery-1', 'koszeg', 'bakery', 'Bleona Pékség', 'Rákóczi Ferenc u. 29, Kőszeg, Hungary', '빵집. 구글 지도 평점 4.5(리뷰 233개).', 'Bakery. Rated 4.5 on Google Maps (233 reviews).'),
  place('koszeg-bakery-2', 'koszeg', 'bakery', 'Arany Strucc Cukrászda', 'Várkör 126, Kőszeg, Hungary', '과자점. 구글 지도 평점 4.4(리뷰 280개).', 'Pastry shop. Rated 4.4 on Google Maps (280 reviews).'),

  // —— heviz: restaurants, bakeries and cafés (2026-11-27) ——
  place('heviz-fine_dining-1', 'heviz', 'fine_dining', 'Teri mama vendéglője', 'Zrínyi u. 147, Hévíz, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.7(리뷰 2878개).', 'Hungarian restaurant. Rated 4.7 on Google Maps (2878 reviews).'),
  place('heviz-fine_dining-2', 'heviz', 'fine_dining', 'Liget Pizzeria & Restaurant', 'Petőfi Sándor u. 7, Hévíz, Hungary', '레스토랑. 구글 지도 평점 4.7(리뷰 2052개).', 'Restaurant. Rated 4.7 on Google Maps (2052 reviews).'),
  place('heviz-fine_dining-3', 'heviz', 'fine_dining', 'Trattoria Fratelli', 'Attila u. 6, Hévíz, Hungary', '이탈리아 요리 레스토랑. 구글 지도 평점 4.6(리뷰 800개).', 'Italian restaurant. Rated 4.6 on Google Maps (800 reviews).'),
  place('heviz-fine_dining-4', 'heviz', 'fine_dining', 'La Montanara Pizzeria', 'Szent András u. 2, Hévíz, Hungary', '이탈리아 요리 레스토랑. 구글 지도 평점 4.6(리뷰 3543개).', 'Italian restaurant. Rated 4.6 on Google Maps (3543 reviews).'),
  place('heviz-fine_dining-5', 'heviz', 'fine_dining', 'Brix Bistro', 'Rákóczi u. 18, Hévíz, Hungary', '비스트로. 구글 지도 평점 4.5(리뷰 570개).', 'Bistro. Rated 4.5 on Google Maps (570 reviews).'),
  place('heviz-bakery-1', 'heviz', 'bakery', 'Komáromy Pékség Hévíz', 'Honvéd u. 4, Hévíz, Hungary', '빵집. 구글 지도 평점 4.5(리뷰 208개).', 'Bakery. Rated 4.5 on Google Maps (208 reviews).'),
  place('heviz-bakery-2', 'heviz', 'bakery', 'Zalaco Bakery', 'Erzsébet királyné u. 5, Hévíz, Hungary', '빵집. 구글 지도 평점 4.5(리뷰 200개).', 'Bakery. Rated 4.5 on Google Maps (200 reviews).'),
  place('heviz-cafe-1', 'heviz', 'cafe', 'Sissy Kávézó és Fagylaltozó', 'Deák tér, Hévíz, Hungary', '카페. 구글 지도 평점 4.8(리뷰 1524개).', 'Café. Rated 4.8 on Google Maps (1524 reviews).'),
  place('heviz-cafe-2', 'heviz', 'cafe', 'Cafe Relax', 'Széchenyi u. 2, Hévíz, Hungary', '카페. 구글 지도 평점 4.6(리뷰 1053개).', 'Café. Rated 4.6 on Google Maps (1053 reviews).'),
  place('heviz-cafe-3', 'heviz', 'cafe', 'Macchiato Caffe & Lounge', 'Széchenyi u. 7, Hévíz, Hungary', '카페. 구글 지도 평점 4.6(리뷰 2176개).', 'Café. Rated 4.6 on Google Maps (2176 reviews).'),

  // —— villany: restaurants, bakeries and cafés (2026-11-27) ——
  place('villany-fine_dining-1', 'villany', 'fine_dining', 'SAUSKA 48', '048 10 hrsz, 7773 Villány, Hungary', '헝가리 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.8(리뷰 954개).', 'Hungarian restaurant. Listed in the MICHELIN Guide. Rated 4.8 on Google Maps (954 reviews).'),
  place('villany-fine_dining-2', 'villany', 'fine_dining', 'Sárga Ház Borgerező és Bisztró', 'Petőfi Sándor u. 29, Villány, Hungary', '비스트로. 구글 지도 평점 4.8(리뷰 1060개).', 'Bistro. Rated 4.8 on Google Maps (1060 reviews).'),
  place('villany-fine_dining-3', 'villany', 'fine_dining', 'Fülemüle Csárda', 'Villány, Hungary', '차르다(헝가리 전통 주막 식당). 구글 지도 평점 4.7(리뷰 2619개).', 'Csárda (traditional Hungarian inn). Rated 4.7 on Google Maps (2619 reviews).'),
  place('villany-fine_dining-4', 'villany', 'fine_dining', 'A.GERE Restaurant', 'Diófás u. 4-12, Villány, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.6(리뷰 83개).', 'Hungarian restaurant. Rated 4.6 on Google Maps (83 reviews).'),
  place('villany-fine_dining-5', 'villany', 'fine_dining', 'Bock Óbor Étterem', 'Batthyány Lajos u. 15, Villány, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.6(리뷰 699개).', 'Hungarian restaurant. Rated 4.6 on Google Maps (699 reviews).'),
  place('villany-bakery-1', 'villany', 'bakery', 'Villányi Pékség', 'Baross Gábor u. 80, Villány, Hungary', '빵집. 구글 지도 평점 4.3(리뷰 85개).', 'Bakery. Rated 4.3 on Google Maps (85 reviews).'),
  place('villany-cafe-1', 'villany', 'cafe', 'Caffe & Pasta', 'Damjanich János u. 2, Villány, Hungary', '카페. 구글 지도 평점 4.4(리뷰 512개).', 'Café. Rated 4.4 on Google Maps (512 reviews).'),
  place('villany-cafe-2', 'villany', 'cafe', 'Rétesház & Kávézó', 'Baross Gábor u. 60, Villány, Hungary', '카페. 구글 지도 평점 4.3(리뷰 597개).', 'Café. Rated 4.3 on Google Maps (597 reviews).'),

  // —— matra: restaurants, bakeries and cafés (2026-11-27) ——
  place('matra-fine_dining-1', 'matra', 'fine_dining', '4 Évszak - Palóc Étterem', 'Parádi út 8, Mátrafüred, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.5(리뷰 2363개).', 'Hungarian restaurant. Rated 4.5 on Google Maps (2363 reviews).'),
  place('matra-fine_dining-2', 'matra', 'fine_dining', 'Füred Pizza Mátra', 'Parádi út 6, Mátrafüred, Hungary', '피자 식당. 구글 지도 평점 4.4(리뷰 992개).', 'Pizza restaurant. Rated 4.4 on Google Maps (992 reviews).'),
  place('matra-fine_dining-3', 'matra', 'fine_dining', 'Benevár Étterem', 'Parádi út 10, Mátrafüred, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.3(리뷰 2930개).', 'Hungarian restaurant. Rated 4.3 on Google Maps (2930 reviews).'),
  place('matra-fine_dining-4', 'matra', 'fine_dining', 'Kóborló vendéglő', 'Üdülősor u. 59/A, Mátrafüred, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.3(리뷰 1093개).', 'Hungarian restaurant. Rated 4.3 on Google Maps (1093 reviews).'),
  place('matra-cafe-1', 'matra', 'cafe', 'Kávé Placc Mátraháza', 'Toboz tér, Mátraháza, Hungary', '마트러하저에 있는 카페. 구글 지도 평점 5.0(리뷰 81개).', 'Café in Mátraháza. Rated 5.0 on Google Maps (81 reviews).'),

  // —— miskolc: restaurants, bakeries and cafés (2026-11-27) ——
  place('miskolc-fine_dining-1', 'miskolc', 'fine_dining', 'Iszkor', 'Lillafüredi u. 245/5, 3645 Mályinka, Hungary', '마이잉커에 있는 비스트로. 미쉐린 빕 구르망. 구글 지도 평점 4.9(리뷰 947개).', 'Bistro in Mályinka. MICHELIN Bib Gourmand. Rated 4.9 on Google Maps (947 reviews).', { michelin: 'bib' }),
  place('miskolc-fine_dining-2', 'miskolc', 'fine_dining', 'Végállomás bistro&wine', 'Kiss tábornok út 50-52, 3534 Miskolc, Hungary', '레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.7(리뷰 2173개).', 'Restaurant. Listed in the MICHELIN Guide. Rated 4.7 on Google Maps (2173 reviews).'),
  place('miskolc-fine_dining-3', 'miskolc', 'fine_dining', 'Avalon Ristorante', 'Iglói u. 15, 3519 Miskolc, Hungary', '레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.6(리뷰 3891개).', 'Restaurant. Listed in the MICHELIN Guide. Rated 4.6 on Google Maps (3891 reviews).'),
  place('miskolc-fine_dining-4', 'miskolc', 'fine_dining', 'Lestyán Gasztro & Bar', 'Arany János tér 1, Miskolc, Hungary', '레스토랑. 구글 지도 평점 5.0(리뷰 298개).', 'Restaurant. Rated 5.0 on Google Maps (298 reviews).'),
  place('miskolc-fine_dining-5', 'miskolc', 'fine_dining', 'Mángold Bisztró', 'Sütő János u. 44, Miskolc, Hungary', '비스트로. 구글 지도 평점 4.8(리뷰 1075개).', 'Bistro. Rated 4.8 on Google Maps (1075 reviews).'),
  place('miskolc-bakery-1', 'miskolc', 'bakery', 'L&L vadkovászos pékmühely', 'Balassi Bálint u. 25, Miskolc, Hungary', '빵집. 구글 지도 평점 4.8(리뷰 230개).', 'Bakery. Rated 4.8 on Google Maps (230 reviews).'),
  place('miskolc-bakery-2', 'miskolc', 'bakery', 'Édes Szívem Cukrászda', 'Széchenyi István út 32, Miskolc, Hungary', '과자점. 구글 지도 평점 4.8(리뷰 271개).', 'Pastry shop. Rated 4.8 on Google Maps (271 reviews).'),
  place('miskolc-bakery-3', 'miskolc', 'bakery', 'Desszertem cukrászműhely & kávézó', 'Széchenyi István u. 21, Miskolc, Hungary', '디저트 가게. 구글 지도 평점 4.7(리뷰 1262개).', 'Dessert shop. Rated 4.7 on Google Maps (1262 reviews).'),
  place('miskolc-cafe-1', 'miskolc', 'cafe', 'Spiral Coffee', 'Széchenyi István u. 91, Miskolc, Hungary', '스페셜티 커피 바. 구글 지도 평점 4.8(리뷰 155개).', 'Specialty coffee bar. Rated 4.8 on Google Maps (155 reviews).'),
  place('miskolc-cafe-2', 'miskolc', 'cafe', 'Sub Rosa Cafe', 'Széchenyi István u. 21, Miskolc, Hungary', '카페. 구글 지도 평점 4.8(리뷰 323개).', 'Café. Rated 4.8 on Google Maps (323 reviews).'),
  place('miskolc-cafe-3', 'miskolc', 'cafe', 'Paris Cafe', 'Dessewffy Arisztid u. 6, Miskolc, Hungary', '카페. 구글 지도 평점 4.8(리뷰 258개).', 'Café. Rated 4.8 on Google Maps (258 reviews).'),
  place('miskolc-cafe-4', 'miskolc', 'cafe', 'The Sweets Bar', 'Széchenyi István út 66, Miskolc, Hungary', '브런치 카페. 구글 지도 평점 4.8(리뷰 339개).', 'Brunch café. Rated 4.8 on Google Maps (339 reviews).'),
  place('miskolc-cafe-5', 'miskolc', 'cafe', 'Antik Art Café', 'Déryné u. 2, Miskolc, Hungary', '카페. 구글 지도 평점 4.5(리뷰 308개).', 'Café. Rated 4.5 on Google Maps (308 reviews).'),

  // —— aggtelek: restaurants, bakeries and cafés (2026-11-27) ——
  place('aggtelek-fine_dining-1', 'aggtelek', 'fine_dining', 'Kertem pizzéria', 'Kossuth Lajos út 57/C, Aggtelek, Hungary', '피자 식당. 구글 지도 평점 4.9(리뷰 464개).', 'Pizza restaurant. Rated 4.9 on Google Maps (464 reviews).'),

  // —— sarospatak: restaurants, bakeries and cafés (2026-11-27) ——
  place('sarospatak-fine_dining-1', 'sarospatak', 'fine_dining', 'Béla Király Udvar Étterem-Kávézó', 'Béla király tér 3, Sárospatak, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.9(리뷰 713개).', 'Hungarian restaurant. Rated 4.9 on Google Maps (713 reviews).'),
  place('sarospatak-fine_dining-2', 'sarospatak', 'fine_dining', 'Hotel Bodrog Étterem & Héliosz Terasz', 'Rákóczi út 58, Sárospatak, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.8(리뷰 134개).', 'Hungarian restaurant. Rated 4.8 on Google Maps (134 reviews).'),
  place('sarospatak-fine_dining-3', 'sarospatak', 'fine_dining', 'Lángos Sütöde', 'Béla király tér 1, Sárospatak, Hungary', '랑고시(헝가리식 튀김빵) 가게. 구글 지도 평점 4.8(리뷰 256개).', 'Lángos shop. Rated 4.8 on Google Maps (256 reviews).'),
  place('sarospatak-fine_dining-4', 'sarospatak', 'fine_dining', 'A Boros Borbár és Étterem', 'Rákóczi út 21, Sárospatak, Hungary', '와인 바 레스토랑. 구글 지도 평점 4.7(리뷰 997개).', 'Wine bar and restaurant. Rated 4.7 on Google Maps (997 reviews).'),
  place('sarospatak-fine_dining-5', 'sarospatak', 'fine_dining', 'Collegno Pizzeria And Ristorante', 'Szent Erzsébet u. 8, Sárospatak, Hungary', '피자 식당. 구글 지도 평점 4.7(리뷰 2594개).', 'Pizza restaurant. Rated 4.7 on Google Maps (2594 reviews).'),
  place('sarospatak-bakery-1', 'sarospatak', 'bakery', 'Heitzmann Cukrászda', 'Táncsics Mihály u. 9, Sárospatak, Hungary', '과자점. 구글 지도 평점 4.4(리뷰 505개).', 'Pastry shop. Rated 4.4 on Google Maps (505 reviews).'),
  place('sarospatak-bakery-2', 'sarospatak', 'bakery', 'Ljikaj Pékség', 'Rákóczi út 39, Sárospatak, Hungary', '빵집. 구글 지도 평점 4.4(리뷰 188개).', 'Bakery. Rated 4.4 on Google Maps (188 reviews).'),
  place('sarospatak-cafe-1', 'sarospatak', 'cafe', 'Mázsa Kávéház', 'Szeles u. 40, Sárospatak, Hungary', '카페. 구글 지도 평점 5.0(리뷰 81개).', 'Café. Rated 5.0 on Google Maps (81 reviews).'),

  // —— kecskemet: restaurants, bakeries and cafés (2026-11-27) ——
  place('kecskemet-fine_dining-1', 'kecskemet', 'fine_dining', 'Fekete Gólya Étterem', 'Borbás 50, Kecskemét, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.8(리뷰 8514개).', 'Hungarian restaurant. Rated 4.8 on Google Maps (8514 reviews).'),
  place('kecskemet-fine_dining-2', 'kecskemet', 'fine_dining', 'Kecskeméti Csárda és Borház', 'Kölcsey u. 7, Kecskemét, Hungary', '차르다(헝가리 전통 주막 식당). 구글 지도 평점 4.8(리뷰 3094개).', 'Csárda (traditional Hungarian inn). Rated 4.8 on Google Maps (3094 reviews).'),
  place('kecskemet-fine_dining-3', 'kecskemet', 'fine_dining', 'Jungle Garden', 'Hornyik János krt. 4, Kecskemét, Hungary', '현대 요리 레스토랑. 구글 지도 평점 4.8(리뷰 117개).', 'Modern cuisine restaurant. Rated 4.8 on Google Maps (117 reviews).'),
  place('kecskemet-fine_dining-4', 'kecskemet', 'fine_dining', 'RIZZ Burger & BBQ Kecskemét', 'Csáky u. 18, Kecskemét, Hungary', '햄버거 식당. 구글 지도 평점 4.8(리뷰 806개).', 'Burger restaurant. Rated 4.8 on Google Maps (806 reviews).'),
  place('kecskemet-fine_dining-5', 'kecskemet', 'fine_dining', 'Sasfészek Étterem', 'Alsócsalános 3, Kecskemét, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.7(리뷰 3544개).', 'Hungarian restaurant. Rated 4.7 on Google Maps (3544 reviews).'),
  place('kecskemet-bakery-1', 'kecskemet', 'bakery', 'Abigél pékség és kávézó', 'Széchenyi tér 14, Kecskemét, Hungary', '빵집. 구글 지도 평점 4.9(리뷰 89개).', 'Bakery. Rated 4.9 on Google Maps (89 reviews).'),
  place('kecskemet-bakery-2', 'kecskemet', 'bakery', 'Bazsalikomos kert és pékség', 'Budai u. 12, Kecskemét, Hungary', '빵집. 구글 지도 평점 4.8(리뷰 364개).', 'Bakery. Rated 4.8 on Google Maps (364 reviews).'),
  place('kecskemet-bakery-3', 'kecskemet', 'bakery', 'Yuzu Art Cake', 'Rákóczi út 4, Kecskemét, Hungary', '케이크 가게. 구글 지도 평점 4.6(리뷰 173개).', 'Cake shop. Rated 4.6 on Google Maps (173 reviews).'),
  place('kecskemet-cafe-1', 'kecskemet', 'cafe', 'NANO Specialty Coffee', 'Kossuth tér 6-7, Kecskemét, Hungary', '스페셜티 커피 바. 구글 지도 평점 4.9(리뷰 419개).', 'Specialty coffee bar. Rated 4.9 on Google Maps (419 reviews).'),
  place('kecskemet-cafe-2', 'kecskemet', 'cafe', 'Lechner Kávéház', 'Kossuth tér 1, Kecskemét, Hungary', '카페. 구글 지도 평점 4.5(리뷰 273개).', 'Café. Rated 4.5 on Google Maps (273 reviews).'),
  place('kecskemet-cafe-3', 'kecskemet', 'cafe', 'Café Plázs Kecskemét', 'Nyíri út 57, Kecskemét, Hungary', '카페. 구글 지도 평점 4.5(리뷰 726개).', 'Café. Rated 4.5 on Google Maps (726 reviews).'),

  // —— kalocsa: restaurants, bakeries and cafés (2026-11-27) ——
  place('kalocsa-fine_dining-1', 'kalocsa', 'fine_dining', 'RIZZ Burger & BBQ Kalocsa', 'Szent István király út 89, Kalocsa, Hungary', '햄버거 식당. 구글 지도 평점 4.9(리뷰 265개).', 'Burger restaurant. Rated 4.9 on Google Maps (265 reviews).'),
  place('kalocsa-fine_dining-2', 'kalocsa', 'fine_dining', 'Diófa Vendéglő', 'Petőfi Sándor u. 67, Kalocsa, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.7(리뷰 262개).', 'Hungarian restaurant. Rated 4.7 on Google Maps (262 reviews).'),
  place('kalocsa-fine_dining-3', 'kalocsa', 'fine_dining', 'Kék Duna Vendéglő Étterem', 'Kalocsa, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.6(리뷰 2450개).', 'Hungarian restaurant. Rated 4.6 on Google Maps (2450 reviews).'),
  place('kalocsa-fine_dining-4', 'kalocsa', 'fine_dining', 'Il Primo Ristorante', 'Szent István király út 51, Kalocsa, Hungary', '이탈리아 요리 레스토랑. 구글 지도 평점 4.6(리뷰 578개).', 'Italian restaurant. Rated 4.6 on Google Maps (578 reviews).'),
  place('kalocsa-fine_dining-5', 'kalocsa', 'fine_dining', 'Nyárfa vendéglő', 'Bátyai út 13, Kalocsa, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.5(리뷰 787개).', 'Hungarian restaurant. Rated 4.5 on Google Maps (787 reviews).'),
  place('kalocsa-bakery-1', 'kalocsa', 'bakery', 'Félegyházi Pékség', 'Szent István király út 55, Kalocsa, Hungary', '빵집. 구글 지도 평점 4.4(리뷰 157개).', 'Bakery. Rated 4.4 on Google Maps (157 reviews).'),

  // —— godollo: restaurants, bakeries and cafés (2026-11-27) ——
  place('godollo-fine_dining-1', 'godollo', 'fine_dining', 'Happy Day Barbecue & Burger Bár', 'Bajcsy-Zsilinszky u. 19, Gödöllő, Hungary', '바비큐 식당. 구글 지도 평점 4.8(리뷰 964개).', 'Barbecue restaurant. Rated 4.8 on Google Maps (964 reviews).'),
  place('godollo-fine_dining-2', 'godollo', 'fine_dining', 'Yellow Pub Restaurant', 'Dózsa György út 64, Gödöllő, Hungary', '레스토랑. 구글 지도 평점 4.7(리뷰 2318개).', 'Restaurant. Rated 4.7 on Google Maps (2318 reviews).'),
  place('godollo-fine_dining-3', 'godollo', 'fine_dining', 'Sziget Vendéglő', 'Szabadság út 139, Gödöllő, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.5(리뷰 1594개).', 'Hungarian restaurant. Rated 4.5 on Google Maps (1594 reviews).'),
  place('godollo-fine_dining-4', 'godollo', 'fine_dining', 'Kemencés Vendéglő', 'Kossuth Lajos u. 31-33, Gödöllő, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.5(리뷰 1514개).', 'Hungarian restaurant. Rated 4.5 on Google Maps (1514 reviews).'),
  place('godollo-bakery-1', 'godollo', 'bakery', 'Solier Cafe', 'Dózsa György út 13, Gödöllő, Hungary', '과자점. 구글 지도 평점 4.7(리뷰 1052개).', 'Pastry shop. Rated 4.7 on Google Maps (1052 reviews).'),
  place('godollo-bakery-2', 'godollo', 'bakery', 'Tóth Bakery', 'Szabadság tér 8, Gödöllő, Hungary', '빵집. 구글 지도 평점 4.5(리뷰 365개).', 'Bakery. Rated 4.5 on Google Maps (365 reviews).'),
  place('godollo-cafe-1', 'godollo', 'cafe', 'Caravella Café', 'Szilhát u. 40, Gödöllő, Hungary', '카페. 구글 지도 평점 4.9(리뷰 1027개).', 'Café. Rated 4.9 on Google Maps (1027 reviews).'),

  // —— visegrad-hu: restaurants, bakeries and cafés (2026-11-27) ——
  place('visegrad-hu-fine_dining-1', 'visegrad-hu', 'fine_dining', 'Restaurant Panoráma', 'Panoráma u. 2, Visegrád, Hungary', '레스토랑. 구글 지도 평점 4.8(리뷰 2551개).', 'Restaurant. Rated 4.8 on Google Maps (2551 reviews).'),
  place('visegrad-hu-fine_dining-2', 'visegrad-hu', 'fine_dining', 'VIRTU Restaurant', 'Dombóvári út 28, Visegrád, Hungary', '레스토랑. 구글 지도 평점 4.7(리뷰 1509개).', 'Restaurant. Rated 4.7 on Google Maps (1509 reviews).'),
  place('visegrad-hu-fine_dining-3', 'visegrad-hu', 'fine_dining', 'Renaissance Restaurant', 'Fő u. 11, Visegrád, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.7(리뷰 5929개).', 'Hungarian restaurant. Rated 4.7 on Google Maps (5929 reviews).'),
  place('visegrad-hu-fine_dining-4', 'visegrad-hu', 'fine_dining', 'Kovács-Kert Étterem', 'Rév u. 4, Visegrád, Hungary', '헝가리 요리 레스토랑. 구글 지도 평점 4.5(리뷰 2794개).', 'Hungarian restaurant. Rated 4.5 on Google Maps (2794 reviews).'),
  place('visegrad-hu-fine_dining-5', 'visegrad-hu', 'fine_dining', 'Gulyás Csárda', 'Nagy Lajos u. 4, Visegrád, Hungary', '차르다(헝가리 전통 주막 식당). 구글 지도 평점 4.3(리뷰 2026개).', 'Csárda (traditional Hungarian inn). Rated 4.3 on Google Maps (2026 reviews).'),
  place('visegrad-hu-bakery-1', 'visegrad-hu', 'bakery', 'Édeske Alíz Cukrászda', 'Dózsa György út 21, Visegrád, Hungary', '과자점. 구글 지도 평점 4.6(리뷰 2060개).', 'Pastry shop. Rated 4.6 on Google Maps (2060 reviews).'),
  place('visegrad-hu-bakery-2', 'visegrad-hu', 'bakery', 'Rigoletto Cukrászda', 'Rév u. 13, Visegrád, Hungary', '디저트 가게. 구글 지도 평점 4.6(리뷰 1254개).', 'Dessert shop. Rated 4.6 on Google Maps (1254 reviews).'),
]
