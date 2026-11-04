import { place } from './placeFactory'
import type { Place } from '../types'

export const placesHRExtra: Place[] = [
  // —— zagreb ——
  place('zagreb-fine_dining-1', 'zagreb', 'fine_dining', 'Noel', 'Ul. popa Dukljanina 1, 10000 Zagreb', '자그레브의 미쉐린 1스타 레스토랑. 계절 테이스팅 메뉴를 냅니다. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant in Zagreb with seasonal tasting menus; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('zagreb-fine_dining-2', 'zagreb', 'fine_dining', 'Dubravkin Put', 'Dubravkin Put 2, 10000 Zagreb', '투슈카나츠 숲속의 미쉐린 1스타 레스토랑. 일요일은 쉽니다.', 'One-Michelin-star restaurant in the Tuškanac woods; closed Sundays.', { michelin: 'star1' }),
  place('zagreb-fine_dining-4', 'zagreb', 'fine_dining', 'Vinodol', 'Ulica Nikole Tesle 10, 10000 Zagreb', '반 옐라치치 광장 근처의 크로아티아 전통 요리 식당. 지붕 덮인 안뜰에서 가츠카강 송어·슈트루클리·파슈티차다를 냅니다.', 'Traditional Croatian restaurant near Ban Jelačić Square with a covered courtyard dining room, serving Gacka trout, štrukli and pašticada.', { image: '/places/zagreb-fine_dining-4.jpg' }),
  place('zagreb-fine_dining-5', 'zagreb', 'fine_dining', 'Zinfandel\'s', 'Antuna Mihanovića 1, 10000 Zagreb', '에스플러네이드 호텔 안의 레스토랑. 미쉐린 가이드에 실려 있습니다.', 'Restaurant in the Esplanade hotel, listed in the MICHELIN Guide.'),
  place('zagreb-bakery-2', 'zagreb', 'bakery', 'Vincek', 'Ilica 18, 10000 Zagreb', '1977년부터 빈체크 가족이 운영하는 케이크·아이스크림 가게. 푸니쿨라 근처 일리차 거리에 있고 자그레브식 크렘슈니타가 대표입니다.', 'Cake and ice-cream shop run by the Vincek family since 1977, on Ilica near the funicular, known for its Zagreb-style kremšnita.'),
  place('zagreb-bakery-3', 'zagreb', 'bakery', 'Torte i to', 'Grahorova Ul. 5, 10000 Zagreb', '자그레브에 여러 곳이 있는 케이크 카페의 그라호로바 거리 지점. 치즈케이크가 대표입니다.', 'Grahorova Street branch of a Zagreb cake café chain best known for its cheesecake.'),
  place('zagreb-cafe-1', 'zagreb', 'cafe', 'Cogito Coffee', 'Varšavska Ulica 11, 10000 Zagreb', '꽃 광장 근처 바르샤브스카 거리 통로 입구의 스페셜티 커피 카페. 직접 볶은 블렌드와 싱글 오리진을 냅니다.', 'Specialty coffee bar at the entrance to a passage off Varšavska near Flower Square, serving its own roasted blends and single origins.'),
  place('zagreb-cafe-2', 'zagreb', 'cafe', 'Eli\'s Caffé', 'Ilica 63, 10000 Zagreb', '일리차 거리의 커피 로스터리 카페. 바리스타 니크 오로시가 운영하고 전 세계 커피 명소 600곳을 고른 책에 실렸습니다.', 'Roaster-café on Ilica run by barista Nik Orosi, included in a Phaidon guide to 600 of the world’s best places to drink coffee.'),
  place('zagreb-cafe-4', 'zagreb', 'cafe', 'Botaničar', 'Trg Marka Marulića 6, 10000 Zagreb', '식물원 근처의 카페 겸 바·작은 갤러리. 자그레브 로스터리 커피와 크로아티아 와인을 내고 책 행사·어쿠스틱 공연을 엽니다.', 'Café-bar and small gallery near the Botanical Garden, serving Zagreb-roasted coffee and Croatian wines, with book launches and acoustic gigs.'),

  // —— dubrovnik ——
  place('dubrovnik-fine_dining-1', 'dubrovnik', 'fine_dining', 'Nautika Restaurant', 'Brsalje 3, 20000 Dubrovnik', '필레 문 옆 성벽 아래 바다를 내려다보는 레스토랑. 저녁에만 열고 미쉐린 가이드에 실려 있습니다.', 'Restaurant beside the Pile Gate overlooking the sea below the walls, open for dinner only; listed in the MICHELIN Guide.'),
  place('dubrovnik-fine_dining-2', 'dubrovnik', 'fine_dining', 'Restaurant Kopun', 'Polj. R. Boškovića 7, 20000 Dubrovnik', '예수회 성당 앞 광장의 크로아티아 요리 식당. 거세 수탉(카폰) 요리가 대표이고 통째 속을 채운 카폰은 하루 전 주문해야 합니다. 1월 휴무.', 'Croatian restaurant on the square below the Jesuit church, known for capon dishes; the whole stuffed capon must be ordered a day ahead. Closed in January.'),
  place('dubrovnik-fine_dining-3', 'dubrovnik', 'fine_dining', 'Gradska Kavana Arsenal', 'Pred Dvorom 1, 20000 Dubrovnik', '렉터 궁전 옆 옛 조선소 건물의 카페 겸 레스토랑. 1895년부터 이어졌고 구항구가 보이는 테라스에서 생선·브루데트를 냅니다.', 'Café-restaurant in a former ship-repair arsenal next to the Rector’s Palace, dating from 1895, serving fish and brudet on a terrace over the old harbour.'),
  place('dubrovnik-fine_dining-4', 'dubrovnik', 'fine_dining', 'Fish Restaurant Proto', 'Široka ul. 1, 20000 Dubrovnik', '1886년 문을 연 구시가의 해산물 레스토랑. 숯불 문어·농어·새우 부자라를 내고 미쉐린 가이드에 실려 있습니다.', 'Old-town seafood restaurant founded in 1886, serving charcoal-grilled octopus, sea bass and prawns buzara; listed in the MICHELIN Guide.'),
  place('dubrovnik-bakery-1', 'dubrovnik', 'bakery', 'Klas Bakery', 'Ul. Iva Dulčića 12, 20000 Dubrovnik, Croatia', '4·6번 버스 정류장 근처의 동네 빵집. 부렉과 사과·체리 슈트루델을 팝니다.', 'Neighbourhood bakery near the line 4 and 6 bus stop, selling burek and apple and cherry strudel.'),
  place('dubrovnik-bakery-2', 'dubrovnik', 'bakery', 'Holy Burek', 'Ul. od Puča 22, 20000 Dubrovnik', '구시가 푸차 거리의 포장 전문 부렉 가게. 오픈 키친에서 송아지고기·치즈·시금치 부렉을 굽습니다.', 'Takeaway-only burek shop on Od Puča in the old town, baking veal, cheese and spinach burek in an open kitchen.'),
  place('dubrovnik-cafe-2', 'dubrovnik', 'cafe', 'Cogito Coffee Shop', 'Stajeva ul. 5, 20000 Dubrovnik', '해양 박물관 근처 아치 통로의 작은 스페셜티 커피 카페. 자그레브 로스터 코기토의 원두를 쓰고 바깥 돌길에 좌석이 있습니다.', 'Tiny specialty coffee bar in an arched passage near the Maritime Museum, using beans from Zagreb roaster Cogito, with seats out on the cobbles.'),

  // —— split ——
  place('split-fine_dining-1', 'split', 'fine_dining', 'Villa Spiza', 'Kružićeva 3, 21000 Split', '구시가 보산스카 거리 근처의 작은 비스트로. 달마티아 가정식을 매일 시장과 어획에 맞춰 바꿔 냅니다. 예약·카드 결제 안 됨, 일요일 휴무.', 'Tiny old-town bistro off Bosanska Street, cooking Dalmatian dishes that change daily with the market and the catch; no reservations or cards, closed Sundays.'),
  place('split-fine_dining-2', 'split', 'fine_dining', 'Konoba Fetivi', 'Tomica Stine 4, 21000 Split', '바로슈 지구의 해산물·지중해 요리 코노바. 미쉐린 가이드에 실려 있습니다.', 'Konoba in the Varoš quarter serving seafood and Mediterranean dishes, listed in the MICHELIN Guide.'),
  place('split-fine_dining-3', 'split', 'fine_dining', 'Portofino', 'Poljana Grgura Ninskog 7, 21000 Split', '디오클레티아누스 궁전 안 작은 광장의 레스토랑. 스테이크·파스타·해산물을 냅니다.', 'Restaurant on a small piazza inside Diocletian’s Palace serving steak, pasta and seafood.'),
  place('split-bakery-1', 'split', 'bakery', 'Kruščić', 'Obrov 6, 21000 Split', '구시가 생선 시장 뒤의 장인 빵집. 바게트·사워도우와 비스카 포가차를 굽고 오후 2시에 닫으며 일요일은 쉽니다.', 'Artisan bakery behind the fish market in the old town, baking baguettes, sourdough and Viška pogača; closes at 2 pm and on Sundays.'),
  place('split-bakery-3', 'split', 'bakery', 'Oš Kolač - Artisan Cakes and Pastries', 'Ćirila i Metoda 4, 21000 Split', '스플리트 최초의 장인 파티스리. 미국 CIA 출신 테아 마무트 셰프가 계절 케이크와 쿠키를 만들고 포장 위주입니다. 일요일 휴무.', 'Split’s first artisan pâtisserie, where CIA-trained chef Tea Mamut makes seasonal cakes and cookies, mostly to take away; closed Sundays.'),
  place('split-bakery-4', 'split', 'bakery', 'ST Burek', 'Domaldova ul. 13, 21000 Split', '도말도바 거리의 오래된 부렉 전문점. 치즈·고기·시금치·사과 부렉과 커피를 냅니다.', 'Long-running burek shop on Domaldova Street with cheese, meat, spinach and apple burek, plus coffee.', { image: '/places/split-bakery-4.jpg' }),
  place('split-bakery-5', 'split', 'bakery', 'Cookie Lab', 'Put Firula 1, 21000 Split', '바치비체 해변 근처의 쿠키·케이크 가게 겸 카페.', 'Cookie and cake shop-café near Bačvice beach.'),
  place('split-cafe-1', 'split', 'bakery', 'Bobis-Riva', 'Obala hrvatskog narodnog preporoda 20, 21000 Split', '리바 산책로의 오래된 빵집 겸 카페. 1949년부터 영업했다고 하며 슈트루델·도넛 같은 페이스트리와 아이스크림을 냅니다.', 'Long-running bakery-café on the Riva promenade (in business since around 1949), serving pastries such as strudel and doughnuts, plus ice cream.'),
  place('split-cafe-2', 'split', 'cafe', 'D16 Coffee', 'Dominisova ul. 16, 21000 Split', '디오클레티아누스 궁전 안 골목의 스페셜티 커피 카페. 직접 볶은 원두로 V60·콜드브루를 내고 작은 뒤뜰 테라스가 있습니다.', 'Specialty coffee bar in a lane inside Diocletian’s Palace, roasting its own beans for V60 and cold brew, with a small back terrace.'),

  // —— zadar ——
  place('zadar-fine_dining-1', 'zadar', 'fine_dining', 'Pet Bunara', 'Stratico ul. 1, 23000 Zadar', '구시가 다섯 우물 광장 근처 돌집의 레스토랑. 유리 바닥 아래로 옛 성벽이 보이고 달마티아 요리를 현대적으로 냅니다.', 'Restaurant in an old stone building near Five Wells Square, with a glass floor over the old city walls and a modern take on Dalmatian cooking.'),
  place('zadar-fine_dining-2', 'zadar', 'fine_dining', 'Restaurant Kornat', 'Liburnska obala 6, 23000 Zadar', '여객항 근처 해안가의 지중해 요리 레스토랑. 오징어 먹물 리소토·아귀 요리가 대표이고 테라스가 있습니다.', 'Mediterranean restaurant on the seafront near the ferry port, known for black risotto and monkfish, with a terrace.'),
  place('zadar-fine_dining-3', 'zadar', 'fine_dining', 'Restaurant Niko', 'Obala kneza Domagoja 9, 23000 Zadar', '푼타미카 반도 바닷가의 해산물 레스토랑. 1963년부터 영업했고 장작불 생선구이와 수조의 랍스터를 냅니다.', 'Seafood restaurant by the sea on the Puntamika peninsula, open since 1963, grilling fish over wood and serving lobster from its own tank.'),
  place('zadar-bakery-1', 'zadar', 'bakery', 'Pekara Dalmatinka', 'Ul. Špire Brusine 16, 23000 Zadar, Croatia', '구시가의 빵집 겸 패스트푸드점. 부렉과 치즈 피타가 인기이고 밤 10시까지 엽니다.', 'Old-town bakery and snack shop known for burek and cheese pita, open until 10 pm.'),
  place('zadar-cafe-1', 'zadar', 'cafe', 'Coffee & Cake', 'Braće Vranjanina 14, 23000 Zadar, Croatia', '2016년 문을 연 카페. 직접 구운 케이크와 페이스트리를 내고 글루텐프리·비건 메뉴도 있습니다.', 'Café open since 2016 with home-baked cakes and pastries, including gluten-free and vegan options.'),

  // —— rovinj ——
  place('rovinj-fine_dining-1', 'rovinj', 'fine_dining', 'Monte', 'Montalbano 75, 52210 Rovinj', '구시가 언덕 성 에우페미아 성당 아래의 레스토랑. 저녁에만 엽니다. 미쉐린 1스타.', 'Restaurant below St Euphemia’s church at the top of the old town, open for dinner only. One MICHELIN star.', { michelin: 'star1' }),
  place('rovinj-fine_dining-2', 'rovinj', 'fine_dining', 'La Puntulina', 'Ul. Sv. Križa 38, 52210 Rovinj', '구시가 바닷가 바위 위의 해산물 레스토랑. 2004년부터 펠리체르 가족이 운영하고 말바지야 와인이 많습니다.', 'Seafood restaurant on the rocks at the edge of the old town, run by the Pellizzer family since 2004, with a big Malvazija list.'),
  place('rovinj-fine_dining-3', 'rovinj', 'fine_dining', 'Kantinon Tavern', 'Obala Alda Rismonda 18, 52210 Rovinj', '항구 끝 옛 와인 저장고의 이스트라 요리 식당. 지역 해산물과 플류칸치 파스타를 냅니다.', 'Istrian restaurant in a former wine cellar at the end of the harbour, serving local seafood and pljukanci pasta.'),
  place('rovinj-cafe-1', 'rovinj', 'cafe', 'Augusto', 'Ulica Ricarda Daveggia 7, 52210 Rovinj', '로빈의 스페셜티 커피숍. 플랫화이트와 핸드드립이 인기입니다.', 'Specialty coffee shop in Rovinj, known for flat whites and pour-overs.'),
  place('rovinj-cafe-2', 'rovinj', 'cafe', 'TUNI GALLERY - specialty coffee shop', 'Ul. Joakima Rakovca 46, 52210 Rovinj', '스페셜티 커피 카페 겸 갤러리. 주인이 만든 도자기를 전시하고 니트로 콜드브루·콜드드립을 냅니다.', 'Specialty coffee café and gallery showing the owner’s handmade ceramics, serving nitro cold brew and cold drip.'),
  place('rovinj-cafe-4', 'rovinj', 'cafe', 'Cinema', 'Trg brodogradilišta, 52210 Rovinj', '조선소 광장의 카페 바. 아침 메뉴와 젤라토·크루아상·와플을 냅니다.', 'Café-bar on Shipyard Square serving breakfast, gelato, croissants and waffles.'),
  place('rovinj-cafe-5', 'rovinj', 'cafe', 'Viecia Batana cafe', 'Trg Maršala Tita, 52210 Rovinj', '티토 광장 항구 쪽의 카페 바. 햇볕 드는 테라스에서 커피와 크렘피타 같은 케이크를 내고 현금만 받는다는 후기가 많습니다.', 'Café-bar on the harbour side of Tito Square with a sunny terrace, coffee and cakes such as kremšnita; reviewers report it is cash only.'),

  // —— hvar ——
  place('hvar-fine_dining-1', 'hvar', 'fine_dining', 'Mediterraneo Dine & Wine', 'Braće Bibić 15, 21450 Hvar', '구시가 꽃 덩굴 안뜰의 레스토랑. 생선 요리 중심에 60일 숙성 립아이도 있고 크로아티아 와인이 많습니다. 미쉐린 가이드에 실려 있습니다.', 'Restaurant in a flower-draped courtyard in the old town, centred on fish with a 60-day-aged ribeye and plenty of Croatian wine; listed in the MICHELIN Guide.'),
  place('hvar-fine_dining-2', 'hvar', 'fine_dining', 'Konoba Menego', 'Ulica kroz Grodu 26, 21450 Hvar', '구시가 골목의 달마티아식 코노바. 옛 사진과 소품으로 꾸몄고 파그 치즈·프르슈트와 자기 포도밭 와인을 냅니다. 4~11월 영업.', 'Dalmatian konoba in an old-town lane decorated with old photos and artefacts, serving Pag cheese, pršut and wine from the owners’ vineyard; open April to November.'),
  place('hvar-fine_dining-3', 'hvar', 'fine_dining', 'Dalmatino', 'Ul. Sveti Marak 1, 21450 Hvar', '광장 근처 돌길의 해산물·스테이크 레스토랑. 문어 카르파초·새우 리소토·샤토브리앙을 냅니다. 4~10월 영업.', 'Seafood and steak restaurant on a stone lane near the main square, serving octopus carpaccio, shrimp risotto and châteaubriand; open April to October.'),
  place('hvar-bakery-1', 'hvar', 'bakery', 'Nonica Caffe Bar', 'Kroz Burak 23, 21450 Hvar, Croatia', '부라크 골목의 작은 제과점 겸 카페. 올리브유와 향신료로 만든 흐바르 전통 과자 포르스키 콜로치가 대표이고 관광철에만 엽니다.', 'Small pastry shop and café in a Burak alley, known for the olive-oil-and-spice Hvar biscuit forski koloč; open in the tourist season only.'),
  place('hvar-bakery-2', 'hvar', 'bakery', 'Pastry Shop Sweets', 'Janka Zazjala 33, 21450 Hvar', '구시가의 파티스리. 레몬 타르트·라벤더 치즈케이크·무화과 케이크와 크림 파프레냐크를 냅니다.', 'Old-town pâtisserie with lemon tart, lavender cheesecake, fig cake and a creamy take on paprenjak biscuits.'),
  place('hvar-cafe-2', 'hvar', 'cafe', 'kava37', 'Kroz Burak 37, 21450 Hvar', '리바 옆 골목의 스페셜티 커피 카페. 2018년 시작한 흐바르 커피 브랜드의 첫 가게로 V60·콜드브루를 내고 원두도 팝니다.', 'Specialty coffee bar in a lane off the Riva, the first shop of a Hvar coffee brand founded in 2018, serving V60 and cold brew and selling its own beans.'),
  place('hvar-cafe-3', 'hvar', 'cafe', 'Coffee Snob - Specialty Coffee', 'Dr. Mate Miličića 13, 21450 Hvar', '구시가 골목의 스페셜티 커피 카페. 핸드드립·에스프레소를 내고 테라스가 있습니다.', 'Specialty coffee café in an old-town lane serving pour-over and espresso, with a terrace.'),
  place('hvar-cafe-4', 'hvar', 'cafe', 'Oasis Specialty Coffee and Juice Bar', 'Trg svetog Stjepana 18, 21450 Hvar', '성 스테판 광장(퍄차)의 스페셜티 커피·주스 바. 피스타치오 크루아상·아이스 말차 라테가 있고 반려동물 동반이 됩니다.', 'Specialty coffee and juice bar on St Stephen’s Square (Pjaca) with pistachio croissants and iced matcha; pet-friendly.'),

  // —— trogir ——
  place('trogir-fine_dining-1', 'trogir', 'fine_dining', 'Il Ponte', 'Kardinala Alojza Stepinca 15a, 21220 Trogir', '구시가 맞은편 치오보섬 쪽 다리 옆의 컨템퍼러리 레스토랑. 미쉐린 가이드 선정.', 'Contemporary restaurant by the bridge to Čiovo, across from the old town. In the MICHELIN Guide.'),
  place('trogir-fine_dining-2', 'trogir', 'fine_dining', 'Konoba Škrapa', 'Ul. Hrvatskih mučenika 13, 21220 Trogir', '구시가의 달마티아 요리 식당.', 'Dalmatian restaurant in the old town.'),
  place('trogir-bakery-1', 'trogir', 'bakery', 'Balina Trogir', 'Šubićeva ul. 18, 21220 Trogir', '달마티아 튀김 과자 프리툴레 가게.', 'Shop for fritule, Dalmatian fried doughnuts.'),
  place('trogir-cafe-1', 'trogir', 'cafe', 'CHI Specialty Coffee Roasters', 'Budislavićeva ul. 3A, 21220 Trogir', '구시가의 스페셜티 커피 로스터리.', 'Speciality coffee roaster in the old town.'),
  place('trogir-cafe-2', 'trogir', 'cafe', 'Cafe Smokvica', 'Radovanov trg 9, 21220 Trogir', '구시가 라도반 광장의 카페.', 'Café on Radovan Square in the old town.'),

  // —— plitvice ——
  place('plitvice-fine_dining-1', 'plitvice', 'fine_dining', 'Restaurant Petar', 'Rastovača 4, 53231 Plitvička Jezera', '국립공원 1번 입구 근처 라스토바차 마을의 식당.', 'Restaurant in Rastovača village near Entrance 1.'),
  place('plitvice-fine_dining-2', 'plitvice', 'fine_dining', 'Degenija', 'Selište Drežničko bb, 47245 Rakovica', '공원 북쪽 국도변의 크로아티아 요리 식당.', 'Croatian restaurant on the main road north of the park.'),

  // —— pula: restaurants, bakeries and cafés (2026-11-04) ——
  place('pula-fine_dining-1', 'pula', 'fine_dining', 'Ribarska Koliba', 'Verudela 3, 52100 Pula', '베루델라 반도 바닷가의 해산물 레스토랑. 미쉐린 가이드 선정.', 'Seafood restaurant by the sea on the Verudela peninsula. In the MICHELIN Guide.'),
  place('pula-fine_dining-2', 'pula', 'fine_dining', 'Batelina', 'Čimulje 25, 52203 Banjole', '풀라 남쪽 반욜레 마을의 해산물 식당. 미쉐린 가이드 선정.', 'Seafood restaurant in Banjole village south of Pula. In the MICHELIN Guide.'),
  place('pula-fine_dining-3', 'pula', 'fine_dining', 'Konoba Boccaporta', 'Dolinka 18, 52100 Pula', '시내의 콘오바(전통 식당).', 'Konoba (traditional tavern) in the town.'),
  place('pula-fine_dining-4', 'pula', 'fine_dining', 'Kod Kadre', 'Ul. Nikole Tesle 50A, 52100 Pula', '시내의 식당.', 'Restaurant in the town.'),
  place('pula-bakery-1', 'pula', 'bakery', 'Bakery Istra', 'Rovinjska ul. 13, 52100 Pula', '시내의 빵집.', 'Bakery in the town.'),
  place('pula-cafe-1', 'pula', 'cafe', 'Kavana Lattiera', 'Ul. Alda Negrija 37, 52100 Pula', '시내의 카페.', 'Café in the town.'),
  place('pula-cafe-2', 'pula', 'cafe', 'La Resistance', 'Emova ul. 1, 52100 Pula', '시내의 커피숍.', 'Coffee shop in the town.'),

  // —— porec: restaurants, bakeries and cafés (2026-11-04) ——
  place('porec-fine_dining-1', 'porec', 'fine_dining', 'Harry’s Piccolo Poreč', 'Pical 2, 52440 Poreč', '구시가 북쪽 해변의 컨템퍼러리 레스토랑. 미쉐린 1스타.', 'Contemporary restaurant on the beach north of the old town. One Michelin star.', { michelin: 'star1' }),
  place('porec-fine_dining-2', 'porec', 'fine_dining', 'JAZ by Ana Roš', 'Obala Maršala Tita 24, 52440 Poreč', '슬로베니아 셰프 아나 로시의 지중해 요리 레스토랑. 미쉐린 가이드 선정.', 'Mediterranean restaurant by Slovenian chef Ana Roš. In the MICHELIN Guide.'),
  place('porec-fine_dining-3', 'porec', 'fine_dining', 'Spinnaker', 'Obala Maršala Tita 15, 52440 Poreč', '항구 앞의 해산물 레스토랑. 미쉐린 가이드 선정.', 'Seafood restaurant on the harbour front. In the MICHELIN Guide.'),
  place('porec-fine_dining-4', 'porec', 'fine_dining', 'Konoba aba', 'Ul. Matka Vlačića 2, 52440 Poreč', '구시가의 콘오바.', 'Konoba in the old town.'),
  place('porec-bakery-1', 'porec', 'bakery', 'MOREA bakery and brunch', 'Ul. Pietra Kandlera 3, 52440 Poreč', '구시가의 빵집 겸 브런치 카페.', 'Bakery and brunch café in the old town.'),
  place('porec-bakery-2', 'porec', 'bakery', 'Bread Point', 'Ul. Bože Milanovića 24, 52440 Poreč', '시내의 빵집.', 'Bakery in the town.'),
  place('porec-cafe-1', 'porec', 'cafe', 'Yesterday Caffe Bar', 'Park Olge Ban 2, 52440 Poreč', '공원 옆 카페.', 'Café by the park.'),
  place('porec-cafe-2', 'porec', 'cafe', 'Cafe Legend of M', 'Ul. Istarskog razvoda 7, 52440 Poreč', '시내의 카페.', 'Café in the town.'),

  // —— sibenik: restaurants, bakeries and cafés (2026-11-04) ——
  place('sibenik-fine_dining-1', 'sibenik', 'fine_dining', 'Pelegrini', 'Jurja Dalmatinca 1, 22000 Šibenik', '대성당 앞의 모던 요리 레스토랑. 미쉐린 1스타. 지금은 구글지도에 임시 휴업으로 나오니(겨울 휴업일 수 있음) 가기 전에 확인하세요.', 'Modern restaurant facing the cathedral. One Michelin star. Google Maps currently shows it as temporarily closed (possibly a winter break), so check before you go.', { michelin: 'star1' }),
  place('sibenik-fine_dining-2', 'sibenik', 'fine_dining', 'Restoran Pjat', 'Trg Pavla Šubića I 3, 22000 Šibenik', '구시가 광장의 식당.', 'Restaurant on an old-town square.'),
  place('sibenik-fine_dining-3', 'sibenik', 'fine_dining', 'Konoba Marenda', 'Ul. Bonina iz Milana 5, 22000 Šibenik', '구시가의 콘오바.', 'Konoba in the old town.'),
  place('sibenik-cafe-1', 'sibenik', 'cafe', 'Faust Caffe', 'Obala prvoboraca 30, 22000 Šibenik', '해안길의 카페.', 'Café on the waterfront.'),
  place('sibenik-cafe-2', 'sibenik', 'cafe', 'Moderato Coffee & Cakes', 'Ul. Stjepana Radića 1, 22000 Šibenik', '커피와 케이크를 내는 카페.', 'Café for coffee and cakes.'),

  // —— korcula: restaurants, bakeries and cafés (2026-11-04) ——
  place('korcula-fine_dining-1', 'korcula', 'fine_dining', 'LD Restaurant', 'Don Pavla Poše 1-6, 20260 Korčula', '성벽 위 테라스의 모던 요리 레스토랑. 미쉐린 1스타. 지금은 구글지도에 임시 휴업으로 나오니(겨울 휴업일 수 있음) 가기 전에 확인하세요.', 'Modern restaurant on a terrace atop the walls. One Michelin star. Google Maps currently shows it as temporarily closed (possibly a winter break), so check before you go.', { michelin: 'star1' }),
  place('korcula-fine_dining-2', 'korcula', 'fine_dining', 'Filippi', 'Šetalište Petra Kanavelića, 20260 Korčula', '구시가 성벽 산책로의 지중해 요리 레스토랑. 미쉐린 가이드 선정.', 'Mediterranean restaurant on the old-town wall promenade. In the MICHELIN Guide.'),
  place('korcula-fine_dining-3', 'korcula', 'fine_dining', 'Konoba Mate', 'Pupnat 28, 20260 Pupnat', '섬 안쪽 푸프나트 마을의 시골 요리 콘오바. 미쉐린 빕 구르망. 지금은 구글지도에 임시 휴업으로 나오니(겨울 휴업일 수 있음) 가기 전에 확인하세요.', 'Country-cooking konoba in the inland village of Pupnat. Michelin Bib Gourmand. Google Maps currently shows it as temporarily closed (possibly a winter break), so check before you go.', { michelin: 'bib' }),
  place('korcula-bakery-1', 'korcula', 'bakery', 'Cukarin', 'Ul. Hrvatske Bratske Zajednice, 20260 Korčula', '코르출라 전통 과자 쿠카린을 파는 과자점.', 'Sweet shop selling cukarin, Korčula’s traditional biscuits.'),
  place('korcula-cafe-1', 'korcula', 'cafe', 'Modro specialty coffee', 'Ul. Hrvatske Bratske Zajednice 82, 20260 Korčula', '스페셜티 커피숍.', 'Speciality coffee shop.'),
  place('korcula-cafe-2', 'korcula', 'cafe', 'Cafe Gallery', 'Prolaz Tri Sulara 6, 20260 Korčula', '구시가의 카페.', 'Café in the old town.'),
]
