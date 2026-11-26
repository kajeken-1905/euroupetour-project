import { place } from './placeFactory'
import type { Place } from '../types'

export const placesGRExtra: Place[] = [
  // —— athens ——
  place('athens-fine_dining-1', 'athens', 'fine_dining', 'Hytra', '1 Petrou Kokkali Street, 115 21 Athens', '아테네의 미쉐린 1스타 레스토랑. 월·화요일은 쉽니다.', 'One-Michelin-star restaurant in Athens; closed Mondays and Tuesdays.', { michelin: 'star1', image: '/places/athens-fine_dining-1.jpg' }),
  place('athens-fine_dining-2', 'athens', 'fine_dining', 'Cookoovaya', '2a Mexi Chatzigianni, Athens 115 28', '페리클리스 코스키나스 셰프의 그리스 요리 레스토랑. 오픈 키친에서 단품과 세트 메뉴(채식 포함)를 내고 미쉐린 가이드에 실려 있습니다.', 'Greek restaurant led by chef Periklis Koskinas, with an open kitchen, à la carte and set menus including a vegetarian one; listed in the MICHELIN Guide.'),
  place('athens-fine_dining-4', 'athens', 'fine_dining', 'Klimataria', 'Plateia Theatrou 2, Athina 105 52', '1927년부터 가족이 운영하는 테아트루 광장의 타베르나. 숯불구이와 통 와인을 내고 저녁 늦게 레베티코 라이브 연주가 있습니다.', 'Family-run taverna on Theatrou Square since 1927, serving charcoal grills and barrel wine, with live rebetiko late in the evening.'),
  place('athens-fine_dining-5', 'athens', 'fine_dining', 'Seychelles', 'Keramikou 49, Athina 104 36', '케라미코스 지구의 그리스 요리 비스트로. 병아리콩·페타, 토마토·주키니 튀김 같은 간결한 요리를 냅니다.', 'Greek bistro in Kerameikos serving simple, well-made dishes such as chickpeas with feta and tomato-courgette fritters.'),
  place('athens-bakery-1', 'athens', 'bakery', 'Ariston', 'Voulis 10, 105 62 Athens', '신타그마 광장 뒤 불리스 거리의 파이 가게. 1910년부터 한 가족이 운영하고 반달 모양 치즈 파이 쿠루 티로피타가 대표입니다. 일요일 휴무.', 'Family-run pie shop on Voulis Street behind Syntagma since 1910, famous for its half-moon kourou cheese pie; closed Sundays.'),
  place('athens-bakery-2', 'athens', 'bakery', 'Takis Bakery', 'Misaraliotou 14, Athens 117 42', '1971년부터 쿠카키에서 영업한 동네 빵집. 참깨 빵 쿨루리와 빵·파이를 굽고 일요일은 쉽니다.', 'Koukaki neighbourhood bakery since 1971, known for its koulouri sesame rings plus breads and pies; closed Sundays.'),
  place('athens-bakery-4', 'athens', 'bakery', 'To Koulouri tou Psyrri', '23 Karaiskaki St, Psyrri, Athens', '프시리의 쿨루리(참깨 빵 고리) 전문 빵집. 새벽부터 굽고 포장만 됩니다.', 'Psyrri bakery specialising in koulouri sesame bread rings, baked from the early hours; takeaway only.'),
  place('athens-cafe-2', 'athens', 'cafe', 'TAF Coffee', '7 Emmanouil Benaki, Exarchia, Athens', '엑사르히아의 스페셜티 커피 카페 겸 로스터리. 2009년 문을 열었고 일요일은 쉽니다.', 'Specialty coffee bar and roastery in Exarchia, open since 2009; closed Sundays.', { image: '/places/athens-cafe-2.jpg' }),
  place('athens-cafe-3', 'athens', 'cafe', 'Café Avissinia', '7 Kynetou, Monastiraki, Athens 105 55', '1986년부터 아비시니아 광장을 지킨 카페 겸 식당. 소아시아풍 그리스 요리를 내고 위층에서 파르테논이 보이며 라이브 음악이 자주 있습니다. 월요일 휴무.', 'Café-restaurant on Avissinia Square since 1986, serving Asia Minor-influenced Greek dishes, with Parthenon views upstairs and frequent live music; closed Mondays.'),
  place('athens-cafe-4', 'athens', 'cafe', 'Little Tree Books & Coffee', 'Καβαλλότι 2, 117 42 Athens, Greece', '아크로폴리스 박물관 근처의 서점 겸 카페. 커피·케이크·샌드위치를 내고 영어책도 있습니다. 월요일 휴무.', 'Bookshop-café near the Acropolis Museum with coffee, cakes and sandwiches and English-language books on the shelves; closed Mondays.'),
  place('athens-korean-1', 'athens', 'korean', 'Dosirak', '33 Voulis, Syntagma, Athens', '신타그마 근처 불리스 거리의 한식·일식 식당. 불고기·비빔밥·잡채·교자를 냅니다.', 'Korean and Japanese restaurant on Voulis Street near Syntagma, serving bulgogi, bibimbap, japchae and gyoza.'),

  // —— santorini ——
  place('santorini-fine_dining-1', 'santorini', 'fine_dining', 'Selene', 'Katikies Garden, Fira, Santorini 847 00', '1986년 피르고스에서 시작해 지금은 피라의 옛 수도원 건물(카티키스 가든 호텔)로 옮긴 레스토랑. 에토레 보트리니 셰프가 이끌고 키클라데스 식재료로 요리합니다.', 'Restaurant founded in Pyrgos in 1986, now in a former monastery at the Katikies Garden hotel in Fira, led by chef Ettore Botrini and cooking with Cycladic produce.', { image: '/places/santorini-fine_dining-1.jpg' }),
  place('santorini-fine_dining-2', 'santorini', 'fine_dining', 'Argo Restaurant', 'Main footpath, Fira, Santorini 847 00', '피라 중심가의 칼데라 전망 레스토랑, 현대적으로 재해석한 산토리니 요리.', 'Restaurant in central Fira with caldera views, offering a contemporary take on Santorinian cuisine.'),
  place('santorini-fine_dining-3', 'santorini', 'fine_dining', 'Parea Tavern', 'Fira, Santorini 847 00', '2005년부터 이어온 그리스·지중해 요리 타베르나, 무사카로 유명.', 'Greek-Mediterranean taverna since 2005, known for its moussaka.', { image: '/places/santorini-fine_dining-3.jpg' }),
  place('santorini-bakery-1', 'santorini', 'bakery', 'Furnissimo Bakery', 'Mesarias-Archeas Thiras, Mesaria 490 83, Greece', '메사리아의 베이커리 카페. 크루아상·브라우니·샌드위치와 커피를 냅니다.', 'Bakery-café in Mesaria with croissants, brownies, sandwiches and coffee.'),
  place('santorini-bakery-2', 'santorini', 'bakery', 'The Family Bakery', 'Eparchiaki Odos Firon-Ormou Perissis, Megalochori 84700', '메갈로호리 마을 입구 큰길가의 빵집. 24시간 열고 그리스 파이·크루아상·바클라바·케이크를 냅니다.', 'Bakery at the turn-off into Megalochori, open 24 hours, with Greek pies, croissants, baklava and cakes.'),
  place('santorini-cafe-1', 'santorini', 'cafe', 'Milopetra', 'Dekigala 40c, Fira 847 00', '피라의 베이커리 카페. 그리스식·서양식 케이크와 아침 식사, 생과일주스를 냅니다.', 'Bakery-café in Fira with Greek and continental cakes, breakfast and fresh juices.'),

  // —— heraklion ——
  place('heraklion-fine_dining-1', 'heraklion', 'fine_dining', 'Thigaterra', 'Andrea Papandreou 109, Ammoudara, Heraklion 714 14', '이라클리오 서쪽 암무다라의 슬로푸드 크레타 요리 식당. 그리스 생산자 식재료로 계절 메뉴를 냅니다.', 'Slow Food-minded Cretan restaurant in Ammoudara, west of Heraklion, with a seasonal menu built on Greek producers.'),
  place('heraklion-fine_dining-2', 'heraklion', 'fine_dining', 'Peskesi', 'Kapetan Charalampi 6-8, Heraklion 712 02', '구시가의 복원한 저택에 자리한 크레타 요리 식당. 하라소의 자체 농장 식재료를 씁니다.', 'Cretan restaurant in a restored mansion in the old town, using produce from its own farm at Harasso.', { image: '/places/heraklion-fine_dining-2.jpg' }),
  place('heraklion-fine_dining-3', 'heraklion', 'fine_dining', 'Antipodas', 'Korai 13, Iraklio 71202', '코라이 보행자 거리 안뜰의 크레타 요리 식당. 큰 테라스가 있고 포도잎 쌈·문어구이 등을 냅니다.', 'Cretan restaurant in a courtyard off pedestrian Korai Street, with a large terrace and dishes such as stuffed vine leaves and grilled octopus.'),
  place('heraklion-bakery-1', 'heraklion', 'bakery', 'Kritikos Fournos Daily Bakery', 'Leoforos Ikarou 32, 71306 Heraklion, Greece', '크레타 빵집 체인의 이카루 대로 지점. 빵·케이크·에크멕 카다이피 등을 팔고 밤늦게까지 엽니다.', 'Ikarou Avenue branch of a Cretan bakery chain, selling bread, cakes and ekmek kataifi, open late into the night.'),
  place('heraklion-bakery-2', 'heraklion', 'bakery', 'Phyllosophies (Liontaria)', 'Plateia Eleftheriou Venizelou 33, Heraklion 71202', '리온다리아(사자) 광장의 부가차 가게. 1922년 스미르나 출신 장인이 연 가게에서 이어졌고 크림·미지트라 부가차를 즉석에서 채워 줍니다.', 'Bougatsa shop on Lions Square descended from a shop opened in 1922 by a phyllo maker from Smyrna, filling bougatsa with cream or mizithra to order.'),
  place('heraklion-bakery-4', 'heraklion', 'bakery', 'Zimoto', 'Plateia Kallergon, Heraklion 71202', '칼레르곤 광장의 크루아상 전문점. 달콤하고 짭짤한 크루아상과 페이스트리, 샌드위치를 냅니다.', 'Croissant shop on Kallergon Square with sweet and savoury croissants, puff pastries and sandwiches.'),
  place('heraklion-cafe-1', 'heraklion', 'cafe', 'Crumb Healthy Living Lab', 'Alexandrou Papanastasiou 28, Heraklion', '칼레르곤 광장에서 파파나스타시우 거리로 옮긴 건강식 브런치 카페. 비건 메뉴가 많고 알레르기 표시가 꼼꼼합니다.', 'Health-focused brunch café, moved from Kallergon Square to Papanastasiou Street, with plenty of clearly labelled vegan options.'),
  place('heraklion-cafe-2', 'heraklion', 'cafe', 'Utopia Cafe', 'Chandakos 51, Heraklion 71202', '한도코스 거리의 초콜릿 카페. 핫초콜릿 종류가 많고 퐁뒤와 맥주도 있습니다.', 'Chocolate café on Chandakos Street with a long list of hot chocolates, plus fondue and beers.'),

  // —— mykonos ——
  place('mykonos-fine_dining-1', 'mykonos', 'fine_dining', 'M-Eating', 'Kalogera 10, Mykonos 846 00', '마토야니 근처 20세기 초 건물의 레스토랑. 키클라데스 요리를 현대적으로 풀어 내고 저녁에만 엽니다.', 'Dinner-only restaurant in an early-20th-century building near Matoyianni, giving Cycladic recipes a modern treatment.'),
  place('mykonos-fine_dining-2', 'mykonos', 'fine_dining', 'Baboulas Ouzeri', 'Old Port, Mykonos Town 84600', '구항구와 기알로스 사이 물가의 우제리. 메제와 생선·해산물, 우조를 냅니다.', 'Waterside ouzeri between the Old Port and Gialos, serving meze, fresh fish and seafood with ouzo.'),
  place('mykonos-fine_dining-3', 'mykonos', 'fine_dining', 'Karavaki', 'Agios Eleftherios, Vencia Boutique Hotel, Mykonos Town 84600', '벤치아 부티크 호텔의 지중해 요리 식당 겸 라운지. 노을이 보이는 테라스가 있습니다.', 'Mediterranean restaurant and lounge at the Vencia Boutique Hotel, with a sunset terrace.'),
  place('mykonos-bakery-1', 'mykonos', 'bakery', 'Il Forno di Gerasimo', 'Agion Gerasimon 13, Mykonos 846 00', '초라의 그리스·이탈리아식 빵집. 여러 가지 빵과 페이스트리, 피자를 내고 성수기에는 늦게까지 엽니다.', 'Greek-Italian bakery in Chora with several breads, pastries and pizza, open very late in high season.'),
  place('mykonos-bakery-3', 'mykonos', 'bakery', 'Gioras Wood Medieval Mykonian Bakery', 'Agiou Efthimiou, Mykonos 846 00', '200년 넘게 한 가족이 이어 온 지하의 장작 화덕 빵집. 시골빵·러스크·바클라바·아몬드 과자를 굽습니다.', 'Underground wood-fired bakery run by the same family for over 200 years, baking country bread, rusks, baklava and almond biscuits.'),
  place('mykonos-bakery-4', 'mykonos', 'bakery', 'Bakery Psilos', 'Kalogera 31, Mykonos 846 00', '초라 칼로게라 거리의 가족 빵집. 페타 롤과 달콤하고 짭짤한 페이스트리를 냅니다.', 'Family bakery on Kalogera Street in Chora with feta rolls and sweet and savoury pastries.'),
  place('mykonos-cafe-1', 'mykonos', 'fine_dining', 'Kastro\'s Restaurant', 'Agion Anargyron 1, Little Venice, Mykonos 846 00, Greece', '리틀 베니스의 바다 위로 튀어나온 바 겸 레스토랑. 해산물과 그리스 요리를 내고 노을 명소입니다.', 'Bar-restaurant hanging over the sea in Little Venice, serving seafood and Greek dishes; a popular sunset spot.'),

  // —— rhodes ——
  place('rhodes-fine_dining-1', 'rhodes', 'fine_dining', 'Marco Polo Mansion', 'Agiou Fanouriou 40-42, Rhodes 85100', '구시가의 복원한 중세 저택 호텔 안뜰 레스토랑. 2008년 문을 열었고 생선·문어·양고기를 냅니다. 겨울엔 쉬는 철이 있습니다.', 'Courtyard restaurant in a restored medieval mansion hotel in the old town, open since 2008, serving fish, octopus and lamb; closes for part of the winter.'),
  place('rhodes-fine_dining-2', 'rhodes', 'fine_dining', 'Alexis 4 Seasons', 'Aristotelous 33, Rhodes 851 00', '구시가 히포크라테스 광장 근처의 해산물 레스토랑. 담장 안 정원과 옥상 테라스가 있습니다.', 'Seafood restaurant near Hippocrates Square in the old town, with a walled garden and a roof terrace.'),
  place('rhodes-fine_dining-3', 'rhodes', 'fine_dining', 'Romeo Restaurant', '7-9 Menekleous St, Old Town, Rhodes', '구시가 소크라투스 거리 근처의 500년 된 건물에 자리한 그리스 요리 식당. 정원 좌석이 있고 그리스 음악 라이브 공연을 합니다.', 'Greek restaurant in a restored 500-year-old building near Sokratous Street in the old town, with garden seating and live Greek music.'),
  place('rhodes-bakery-2', 'rhodes', 'bakery', 'Fournariko Bakery', 'Sokratous 41, Rhodes Old Town 851 00', '구시가의 24시간 빵집. 장작 화덕으로 여러 가지 피타와 파이를 굽고 바클라바·오렌지 케이크도 있습니다.', 'Round-the-clock bakery in the old town baking many kinds of pitas and pies in a wood-fired oven, plus baklava and orange cake.'),
  place('rhodes-bakery-3', 'rhodes', 'bakery', 'Old Town Corner Bakery Shop', 'Omirou 88, Rhodes Old Town 851 00', '구시가 성 아타나시오스 문 안쪽의 작은 베이커리 카페. 크루아상·애플파이·클럽 샌드위치를 냅니다.', 'Tiny bakery-café just inside St Athanasios’ Gate in the old town, with croissants, apple pie and club sandwiches.'),
  place('rhodes-cafe-1', 'rhodes', 'cafe', 'Bon Bonheur', 'Iroon Politechniou 20, Rodos 851 00', '로도스 신시가지의 베이커리 카페. 도넛·와플·베이글·샌드위치를 냅니다.', 'Bakery-café in Rhodes new town serving doughnuts, waffles, bagels and sandwiches.'),
  place('rhodes-cafe-2', 'rhodes', 'cafe', 'Monk Coffee / The Pure Roasters', 'Ethnarchou Makariou 14, Rodos 85131', '섬에서 직접 원두를 볶는 스페셜티 커피 카페 겸 로스터리. 시미행 페리 승강장 근처이고 일요일은 쉽니다.', 'Specialty coffee shop and roastery that roasts its beans on the island, near the Symi ferry departures; closed Sundays.'),

  // —— thessaloniki ——
  place('thessaloniki-fine_dining-1', 'thessaloniki', 'fine_dining', 'Ergon Agora', 'P. Mela 42, Thessaloniki 54622', '그리스 생산자 식료품점과 레스토랑을 함께 운영하는 곳. 메제 스타일의 그리스 요리와 브런치를 냅니다.', 'Combined Greek-producer deli market and restaurant serving meze-style Greek dishes and brunch.'),
  place('thessaloniki-fine_dining-2', 'thessaloniki', 'fine_dining', 'Massalia', '6 Manousogiannaki Emmanouil St & 23 Filikis Etaireias St, Thessaloniki 54621', '2014년 보행자 골목 모퉁이에 문을 연 창작 그리스 메제 식당. 제철 재료로 메뉴가 자주 바뀌고 우조·치푸로가 많습니다.', 'Creative Greek meze restaurant on a pedestrian corner since 2014, with a menu that changes with the seasons and a big range of ouzo and tsipouro.'),
  place('thessaloniki-fine_dining-3', 'thessaloniki', 'fine_dining', 'Omikron', 'Oplopoiou 3, Ladadika, Thessaloniki', '라다디카 지구의 작은 그리스·지중해 요리 식당. 프랑스에서 일한 셰프 겸 주인이 칠판 메뉴로 생선구이·해산물 리소토 등을 냅니다.', 'Small Greek-Mediterranean restaurant in Ladadika whose chef-owner trained in France, with a blackboard menu of grilled fish and seafood risotto.'),
  place('thessaloniki-bakery-1', 'thessaloniki', 'bakery', 'Bougatsa Bantis', 'Panagias Faneromenis 33, 546 32 Thessaloniki, Greece', '1969년 문을 연 부가차 가게. 3대째 직접 민 반죽으로 차가운 크림 부가차를 대리석 카운터에서 냅니다.', 'Bougatsa shop opened in 1969, now in its third generation, serving cold-cream bougatsa from hand-stretched pastry at a marble counter.'),
  place('thessaloniki-bakery-2', 'thessaloniki', 'bakery', 'Terkenlis', 'Tsimiski 30 & Aristotelous, Thessaloniki 546 36', '1948년 창업한 제과점의 가장 오래된 가게. 마흘레피 향의 추레키(초콜릿 코팅 포함)가 대표입니다.', 'The oldest shop of the confectioner founded in 1948, best known for its mahlepi-scented tsoureki, including chocolate-covered versions.'),
  place('thessaloniki-bakery-3', 'thessaloniki', 'bakery', 'Trigona Elenidi', 'Dimitriou Gounari 13, Thessaloniki 546 22', '1960년 파노라마에서 시작한 트리고나 가게의 시내 지점. 시럽에 적신 필로 삼각형에 주문 즉시 크림을 채웁니다.', 'Downtown shop of the trigona maker founded in Panorama in 1960: syrup-soaked phyllo triangles filled with cream to order.'),
  place('thessaloniki-cafe-1', 'thessaloniki', 'cafe', 'Blé Taste Gallery', 'Agias Sofias 19, Thessaloniki 546 22', '아야스 소피아스 보행자 거리의 베이커리·파티스리 겸 비스트로. 24시간 열고 장작 화덕 빵과 사워도우 페이스트리, 마케도니아·크레타 파이를 냅니다.', 'Bakery, pâtisserie and bistro on pedestrian Agias Sofias, open 24 hours, with wood-fired bread, sourdough pastries and Macedonian and Cretan pies.'),
  place('thessaloniki-cafe-2', 'thessaloniki', 'cafe', 'Father Coffee & Vinyl', 'Stratigou Kallari 9, Thessaloniki', '화이트 타워 근처의 커피 로스터리 카페 겸 레코드 가게. 재즈·펑크·아프로 음반을 팝니다.', 'Coffee roaster-café and record shop near the White Tower, selling jazz, funk and Afro vinyl.'),

  // —— corfu ——
  place('corfu-fine_dining-1', 'corfu', 'fine_dining', 'The Venetian Well', '1 Lilli Desylla Square, Kerkyra 49100', '크레마스티 성당 앞 1699년 베네치아 우물 옆의 레스토랑. 코르푸 전통 요리를 현대적으로 풀어 내고 메뉴가 자주 바뀝니다.', 'Restaurant beside a 1699 Venetian well in front of the Kremasti church, reworking Corfiot recipes with a small, frequently changing menu.'),
  place('corfu-fine_dining-2', 'corfu', 'fine_dining', 'Rex Restaurant', 'Kapodistriou 66, Kerkyra 49100', '1932년부터 리스톤 옆에서 영업한 식당. 1955년부터 카차로스 가족이 운영하고 소프리토·부르데토·파스티차다 등 코르푸 요리를 냅니다.', 'Restaurant next to the Liston since 1932, run by the Katsaros family since 1955, serving Corfiot sofrito, bourdeto and pastitsada.'),
  place('corfu-bakery-1', 'corfu', 'bakery', 'Starenio Bakery', 'Guilford 61, Kerkyra 491 00', '구시가 길퍼드 거리의 베이커리. 20년 넘게 영업했고 아침 파이와 금귤 치즈케이크·당근 케이크가 있습니다.', 'Bakery on Guilford Street in the old town, in business for over 20 years, with breakfast pies, kumquat cheesecake and carrot cake.'),
  place('corfu-bakery-2', 'corfu', 'bakery', 'Panetteria', 'Vrachlioti 3, Kerkyra 491 00', '구시가 골목의 작은 가족 빵집. 시금치·치즈 파이, 부가차, 사워도우 빵을 냅니다. 일요일 휴무.', 'Small family bakery in an old-town lane with spinach and cheese pies, bougatsa and sourdough bread; closed Sundays.'),
  place('corfu-bakery-3', 'corfu', 'bakery', 'Rose’s Bakery', 'Paleologou 71, Kerkyra 491 00', '달걀·유제품을 쓰지 않는 채식 베이커리. 타히니·초콜릿 등 여러 가지 바클라바가 있습니다.', 'Vegetarian bakery using no eggs or dairy, with many kinds of baklava including tahini and chocolate.'),
  place('corfu-cafe-1', 'corfu', 'cafe', 'Bristol Café', 'Evgeniou Voulgareos 49, Kerkyra 491 00', '구시가의 레트로 카페 겸 바. 아르누보풍 실내에서 커피·칵테일을 내고 저녁엔 재즈·블루스 연주가 있기도 합니다.', 'Retro café-bar in the old town with an Art Nouveau-touched interior, serving coffee and cocktails, sometimes with evening jazz and blues.'),
  place('corfu-cafe-2', 'corfu', 'cafe', 'Cafetierra', 'Kapodistriou 8, Kerkyra 49100', '2007년 문을 연 섬 최초의 스페셜티 커피 로스터리 카페. 가게 안쪽 로스터로 직접 볶습니다.', 'The island’s first specialty coffee micro-roastery, founded in 2007, roasting on site at the back of the café.'),

  // —— nafplio ——
  place('nafplio-fine_dining-1', 'nafplio', 'fine_dining', 'Byzantio', 'Vas. Alexandrou 15, Nafplio 21100', '구시가 조용한 보행자 거리의 타베르나. 무사카·게미스타 등 그리스 가정식과 숯불구이, 발칸 요리를 냅니다. 수요일 휴무.', 'Taverna on a quiet pedestrian street in the old town serving Greek home cooking such as moussaka and gemista, charcoal grills and Balkan dishes; closed Wednesdays.'),
  place('nafplio-fine_dining-2', 'nafplio', 'fine_dining', 'Karima Kastro', 'Papanikolaou 32, Nafplio 21100', '구시가 남쪽 조용한 골목의 가족 운영 식당. 그리스 가정식과 해산물에 창의적인 손길을 더합니다.', 'Family-run restaurant on a quiet street on the south side of the old town, adding creative touches to Greek home cooking and seafood.'),

  place('nafplio-bakery-1', 'nafplio', 'bakery', 'Kosmos Bakery', 'Argous 78, Nafplio 211 00', '2021년 나프플리오 초입에 문을 연 베이커리 카페. 빵·디저트·아이스크림을 내고 실내외 좌석이 넓습니다.', 'Bakery-café at the entrance to Nafplio, open since 2021, with breads, desserts and ice cream and plenty of indoor and outdoor seating.'),
  place('nafplio-cafe-1', 'nafplio', 'cafe', 'Sokaki Cafe', 'Ethnikis Antistaseos 8, Nafplio 211 00', '1989년부터 신타그마 광장의 카페. 아침 식사·크레페·칵테일을 냅니다.', 'Café on Syntagma Square since 1989, serving breakfast, crêpes and cocktails.'),

  // —— meteora ——
  place('meteora-fine_dining-1', 'meteora', 'fine_dining', 'Meteora Restaurant (Gkertsou)', 'Trikalon 2, 422 00 Kalambaka, Greece', '1925년부터 게르초 가족이 운영하는 칼람바카 시청 광장의 식당. 할머니 요리법의 무사카·가지 사가나키·수제 소시지를 냅니다. 수요일 휴무.', 'Run by the Gkertsou family since 1925 on Kalambaka’s Town Hall Square, serving grandmother’s moussaka, aubergine saganaki and homemade sausage; closed Wednesdays.'),
  place('meteora-fine_dining-2', 'meteora', 'fine_dining', 'Taverna Xarama', 'Patriarchou Dimitriou 39, Kastraki, 422 00 Kalambaka, Greece', '칼람바카–카스트라키 도로에서 몇 계단 내려간 곳의 전통 타베르나. 오븐 요리와 숯불구이를 냅니다.', 'Traditional taverna a few steps down from the Kalambaka–Kastraki road, serving oven-baked dishes and grills.'),
  place('meteora-fine_dining-3', 'meteora', 'fine_dining', 'Taverna Gardenia', 'Kastraki, 422 00 Kalambaka', '1998년부터 카스트라키 중심가에서 가족이 운영하는 타베르나. 무사카·수블라키와 지역 와인을 냅니다.', 'Family-run taverna on Kastraki’s main street since 1998, serving moussaka, souvlaki and local wine.'),
  place('meteora-fine_dining-4', 'meteora', 'fine_dining', 'Panellinio', 'Plateia Dimarcheiou, 422 00 Kalambaka, Greece', '칼람바카 시청 광장 분수 옆의 타베르나. 양갈비·무사카·오븐 양고기를 냅니다.', 'Taverna beside the fountain on Kalambaka’s Town Hall Square, serving lamb chops, moussaka and oven-roast lamb.'),

  // —— delphi ——
  place('delphi-fine_dining-1', 'delphi', 'fine_dining', 'Epikouros', '33 V. Pavlou & Friderikis, Delphi 330 54', '델포이 중심가의 그리스·지중해 요리 식당. 계곡과 코린트만이 보입니다.', 'Greek and Mediterranean restaurant on Delphi’s main street with views over the gorge and the Gulf of Corinth.'),
  place('delphi-fine_dining-2', 'delphi', 'fine_dining', 'Taverna Vakhos', 'Apollonos 31, 330 54 Delphi, Greece', '계곡이 보이는 가족 운영 타베르나. 직접 기른 올리브와 지역 식재료를 쓰고 채식·비건 메뉴가 많습니다.', 'Family-run taverna with valley views, using its own olives and local produce, with many vegetarian and vegan dishes.'),

  // —— sounion ——
  place('sounion-fine_dining-1', 'sounion', 'fine_dining', 'Ilias (Elias)', 'Below the Temple of Poseidon, Sounio', '포세이돈 신전에서 가장 가까운 바다 전망 해산물 식당.', 'Sea-view seafood taverna closest to the temple.'),
  place('sounion-fine_dining-2', 'sounion', 'fine_dining', 'Theodoros & Eleni', 'Legrena, Greece', '레그레나의 해산물 타베르나. 페타 소스 홍합찜이 유명합니다.', 'Seafood taverna in Legrena, famous for mussels steamed in feta sauce.'),
  place('sounion-fine_dining-3', 'sounion', 'fine_dining', 'Taverna Syrtaki', 'Leoforos Souniou 114, Kato Sounio 195 00, Greece', '포세이돈 신전에서 차로 5분 거리의 해산물 타베르나. 생선구이·오징어·홍합을 내고 바다가 보입니다.', 'Seafood taverna five minutes’ drive from the Temple of Poseidon, serving grilled fish, squid and mussels with sea views.'),

  // —— olympia ——
  place('olympia-fine_dining-1', 'olympia', 'fine_dining', 'Taverna Bacchus', 'Miraka (Ancient Pisa) 10, 270 65 Ancient Olympia, Greece', '고대 올림피아에서 3km 떨어진 미라카(고대 피사) 마을의 돌집 여관 겸 타베르나. 지역 식재료로 요리합니다.', 'Stone guesthouse and taverna in Miraka (Ancient Pisa), 3 km from Ancient Olympia, cooking with local produce.'),
  place('olympia-fine_dining-2', 'olympia', 'fine_dining', 'Aegean Restaurant', 'Georgiou Douma 4, 270 65 Ancient Olympia, Greece', '고대 올림피아 중심가 근처의 그리스 타베르나. 채식 메뉴가 많고 콩 수프·가지 요리·바클라바를 냅니다.', 'Greek taverna near Ancient Olympia’s main street with a wide range of vegetarian dishes such as bean soup and aubergine, plus baklava.', { image: '/places/olympia-fine_dining-2.jpg' }),
  place('olympia-fine_dining-3', 'olympia', 'fine_dining', 'Taverna Orestis', 'Π. Σπηλιοπούλου, 270 65 Municipal Unit of Archea Olympia, Greece', '유적지에서 걸어갈 수 있는 타베르나. 문어구이·무사카·양갈비를 냅니다.', 'Taverna within walking distance of the archaeological site, serving grilled octopus, moussaka and lamb chops.'),

  // —— chania ——
  place('chania-fine_dining-1', 'chania', 'fine_dining', 'Tamam', 'Zampeliou 49, Chania 731 31', '구시가의 옛 오스만 목욕탕 건물에 자리한 크레타·레반트 요리 식당. 메제와 이란식 향신료 밥이 인기입니다.', 'Cretan-Levantine restaurant in a former Ottoman bathhouse in the old town, known for its mezedes and Iranian-spiced rice.', { image: '/places/chania-fine_dining-1.jpg' }),
  place('chania-fine_dining-2', 'chania', 'fine_dining', 'Chrisostomos', 'Defkalionos & Ikarou, 731 32 Chania, Greece', '구시가의 크레타 전통 타베르나. 스파키아식 요리와 장작 화덕에 구운 양·염소고기, 직접 구운 빵을 냅니다.', 'Traditional Cretan taverna in the old town serving Sfakian dishes, lamb and goat from the wood-fired oven, and its own bread.'),
  place('chania-bakery-1', 'chania', 'bakery', 'Bougatsa Iordanis', 'Apokoronou 24, Chania 731 34', '1924년부터 4대째 이어 온 부가차 가게. 하니아 미지트라 치즈를 넣은 부가차와 커스터드 부가차를 아침에만 팝니다.', 'Bougatsa shop run by the same family for four generations since 1924, selling bougatsa with Chania mizithra cheese or custard, mornings only.'),

  // —— naxos ——
  place('naxos-fine_dining-1', 'naxos', 'fine_dining', 'Scirocco', 'Plateia Protodikiou, Naxos 843 00', '프로토디키우 광장의 가족 운영 타베르나. 20년 가까이 영업했고 무사카·양고기 스튜·오렌지 파이를 냅니다.', 'Family-run taverna on Protodikiou Square, open for nearly 20 years, serving moussaka, lamb stew and orange pie.'),
  place('naxos-fine_dining-2', 'naxos', 'fine_dining', 'Taverna Axiotissa', 'ΠΥΡΓΑΚΙ ΑΓΙΑΣΟΣ, 843 02 Municipality of Naxos and the Lesser Cyclades, Greece', '낙소스 타운 남쪽 18km 카스트라키의 타베르나. 2000년 문을 열었고 직접 기른 채소와 농장 식재료로 요리합니다.', 'Taverna in Kastraki, 18 km south of Naxos Town, open since 2000 and cooking with produce from the owners’ own garden and farm.'),

  // —— zakynthos ——
  place('zakynthos-fine_dining-1', 'zakynthos', 'fine_dining', 'Spartakos Tavern', 'Lomvardou 74, 291 00 Zakynthos, Greece', '자킨토스 타운 항구 쪽 롬바르두 거리의 타베르나. 해산물과 양고기 클레프티코를 냅니다.', 'Taverna on Lomvardou Street by the Zakynthos Town harbour, serving seafood and lamb kleftiko.'),
  place('zakynthos-fine_dining-2', 'zakynthos', 'fine_dining', 'Porto Limnionas Tavern', 'Porto Limnionas, Agios Leon, 290 92 Zakynthos, Greece', '서해안 포르토 림니오나스 만 절벽 위의 타베르나. 해산물을 내고 계단으로 바다에 내려갈 수 있습니다.', 'Clifftop taverna above the Porto Limnionas cove on the west coast, serving seafood, with steps down to the water.'),
  place('zakynthos-fine_dining-3', 'zakynthos', 'fine_dining', 'Taverna Apelati', 'Zakynthos–Keri Road, Apelati, 290 92 Keri, Greece', '케리 근처 아펠라티의 가족 운영 타베르나. 자기 포도밭 와인과 무사카·토끼 요리를 냅니다. 일요일 휴무.', 'Family-run taverna at Apelati near Keri, serving wine from its own vineyard with moussaka and rabbit; closed Sundays.'),

  // —— hydra ——
  place('hydra-fine_dining-1', 'hydra', 'fine_dining', 'Paradosiakó', 'Tompazi 8, Hydra 180 40', '항구 뒤편의 그리스 가정식 식당.', 'Greek home-style restaurant behind the harbour.'),
  place('hydra-fine_dining-2', 'hydra', 'fine_dining', 'Veranda Restaurant', 'Sahini 4, Hydra 180 40', '항구가 내려다보이는 테라스 식당.', 'Terrace restaurant overlooking the harbour.'),
  place('hydra-bakery-1', 'hydra', 'bakery', 'Tsagkaris Pastries', 'Ikonomou, Hydra 180 40', '이드라 아몬드 과자를 파는 제과점.', 'Pastry shop selling Hydra’s almond sweets.'),

  // —— aegina ——
  place('aegina-fine_dining-1', 'aegina', 'fine_dining', 'Ouzeri o Skotadis', 'Leof. Dimokratias 46, Aegina 180 10', '항구 앞 해안길의 우제리.', 'Ouzeri on the harbour-front avenue.'),
  place('aegina-fine_dining-2', 'aegina', 'fine_dining', 'Maistrali Restaurant', 'Leof. N. Kazantzaki 3, Aegina 180 10', '항구 근처의 그리스 요리 식당.', 'Greek restaurant near the harbour.'),
  place('aegina-bakery-1', 'aegina', 'bakery', 'Mourtzis Pistachio', 'Leof. Dimokratias 6, Aegina 180 10', '에기나 특산 피스타치오와 전통 과자를 파는 가게.', 'Shop selling Aegina’s pistachios and traditional sweets.'),
  place('aegina-bakery-2', 'aegina', 'bakery', 'Melenio', 'Mitropoleos 4, Aegina 180 10', '시내의 파티스리.', 'Patisserie in the town.'),
  place('aegina-cafe-1', 'aegina', 'cafe', 'Remvi', 'Leof. Dimokratias 51, Aegina 180 10', '항구 앞 해안길의 커피숍.', 'Coffee shop on the harbour-front avenue.'),

  // —— meteora: bakeries and cafés (2026-11-04) ——
  place('meteora-bakery-1', 'meteora', 'bakery', 'Patisserie Robos', 'Trikalon 16, Kalambaka 422 00', '칼람바카 시내의 제과점.', 'Pastry shop in Kalambaka town.'),
  place('meteora-cafe-1', 'meteora', 'cafe', 'Octo Coffee & Breakfast', 'Trikalon 20, Kalambaka 422 00', '칼람바카 시내의 커피·브런치 카페.', 'Coffee and breakfast café in Kalambaka town.'),

  // —— delphi: bakeries and cafés (2026-11-04) ——
  place('delphi-cafe-1', 'delphi', 'cafe', 'Phileo Cafe Bar', 'Friderikis 7, Delfi 330 54', '델피 마을 중심 거리의 카페.', 'Café on the main street of Delphi village.'),

  // —— zakynthos: bakeries and cafés (2026-11-04) ——
  place('zakynthos-bakery-1', 'zakynthos', 'bakery', 'Artogōniá', 'Koliva 83, Zakynthos 291 00', '자킨토스 시내의 빵집.', 'Bakery in Zakynthos town.'),
  place('zakynthos-cafe-1', 'zakynthos', 'cafe', 'Monk Cafe', 'Dragona 4, Zakynthos 291 00', '자킨토스 시내의 커피숍.', 'Coffee shop in Zakynthos town.'),
  place('zakynthos-cafe-2', 'zakynthos', 'cafe', 'CAPU Coffee Food', 'Tavoulari 6, Zakynthos 291 00', '자킨토스 시내의 카페.', 'Café in Zakynthos town.'),

  // —— olympia: bakeries and cafés (2026-11-04) ——
  place('olympia-bakery-1', 'olympia', 'bakery', 'Sweet Creations', 'Avgerinou 5, Archaia Olympia 270 65', '고대 올림피아 마을의 제과점.', 'Pastry shop in the village of Ancient Olympia.'),

  // —— naxos: bakeries and cafés (2026-11-04) ——
  place('naxos-bakery-1', 'naxos', 'bakery', 'Naxos Bakery', 'Sokratous Papavasiliou, Naxos 843 00', '낙소스 시내의 빵집.', 'Bakery in Naxos town.'),
  place('naxos-cafe-1', 'naxos', 'cafe', 'Avaton 1739', 'Kastro, Naxos 843 00', '카스트로(성채) 안의 카페 겸 와인 바. 옥상 테라스가 있습니다.', 'Café and wine bar inside the Kastro, with a roof terrace.'),

  // —— kalamata: restaurants, bakeries and cafés (2026-11-13) ——
  place('kalamata-fine_dining-1', 'kalamata', 'fine_dining', 'Aphrálato', 'Miaouli 30, Kalamata', '칼라마타의 레스토랑. 구글 지도 평점 4.8.', 'Restaurant in Kalamata. Rated 4.8 on Google Maps.'),
  place('kalamata-fine_dining-2', 'kalamata', 'fine_dining', 'To katofli', 'Salaminos 20, Kalamata', '칼라마타의 레스토랑. 구글 지도 평점 4.8.', 'Restaurant in Kalamata. Rated 4.8 on Google Maps.'),
  place('kalamata-fine_dining-3', 'kalamata', 'fine_dining', 'Kardamo', 'Sidirodromikou Stathmou 21, Kalamata', '칼라마타의 그리스 요리 식당. 구글 지도 평점 4.6.', 'Greek restaurant in Kalamata. Rated 4.6 on Google Maps.'),
  place('kalamata-fine_dining-4', 'kalamata', 'fine_dining', 'Ta Rolla', 'Spartis 53, Kalamata', '칼라마타의 그리스 요리 식당. 구글 지도 평점 4.6.', 'Greek restaurant in Kalamata. Rated 4.6 on Google Maps.'),
  place('kalamata-bakery-1', 'kalamata', 'bakery', 'Pes Alevri (Πες Αλεύρι)', 'Kampysi 17, Kalamata', '칼라마타의 빵집. 구글 지도 평점 4.9.', 'Bakery in Kalamata. Rated 4.9 on Google Maps.'),
  place('kalamata-bakery-2', 'kalamata', 'bakery', 'Apolausi Sweet Lab', 'Κρήτης 22 και Μαιζώνος 103, Kalamata', '칼라마타의 제과점. 구글 지도 평점 4.7.', 'Patisserie in Kalamata. Rated 4.7 on Google Maps.'),
  place('kalamata-bakery-3', 'kalamata', 'bakery', 'Bake My Day', 'Navarinou 93, Kalamata', '칼라마타의 페이스트리 가게. 구글 지도 평점 4.5.', 'Pastry shop in Kalamata. Rated 4.5 on Google Maps.'),
  place('kalamata-cafe-1', 'kalamata', 'cafe', 'AfoiManetta', 'King George Square, Kalamata', '칼라마타의 카페. 구글 지도 평점 4.8.', 'Café in Kalamata. Rated 4.8 on Google Maps.'),
  place('kalamata-cafe-2', 'kalamata', 'cafe', 'Lord Cafe', 'Faron 143, Kalamata', '칼라마타의 카페. 구글 지도 평점 4.9.', 'Café in Kalamata. Rated 4.9 on Google Maps.'),
  place('kalamata-cafe-3', 'kalamata', 'cafe', 'Kalimera Artisan Coffee', 'Faron 150, Kalamata', '칼라마타의 카페. 구글 지도 평점 4.7.', 'Café in Kalamata. Rated 4.7 on Google Maps.'),

  // —— monemvasia: restaurants, bakeries and cafés (2026-11-13) ——
  place('monemvasia-fine_dining-1', 'monemvasia', 'fine_dining', 'Voltes', 'Γιάννη Ρίτσου, Monemvasia', '모넴바시아의 그리스 요리 식당. 구글 지도 평점 4.8.', 'Greek restaurant in Monemvasia. Rated 4.8 on Google Maps.'),
  place('monemvasia-fine_dining-2', 'monemvasia', 'fine_dining', 'Oinomelo', 'Γιάννη Ρίτσου, Monemvasia', '모넴바시아의 그리스 요리 식당. 구글 지도 평점 4.6.', 'Greek restaurant in Monemvasia. Rated 4.6 on Google Maps.'),
  place('monemvasia-fine_dining-3', 'monemvasia', 'fine_dining', 'Mateo\'s', 'Malvazia 3, Monemvasia', '모넴바시아의 해산물 식당. 구글 지도 평점 4.6.', 'Seafood restaurant in Monemvasia. Rated 4.6 on Google Maps.'),
  place('monemvasia-bakery-1', 'monemvasia', 'bakery', 'Charamis Cakeshop (Χαράμης)', '23ης Ιουλίου 1821 6, Monemvasia', '모넴바시아의 제과점. 구글 지도 평점 4.7.', 'Patisserie in Monemvasia. Rated 4.7 on Google Maps.'),
  place('monemvasia-bakery-2', 'monemvasia', 'bakery', 'Bakery Kamarinos', '23ης Ιουλίου 1821 17, Monemvasia', '모넴바시아의 빵집. 구글 지도 평점 4.4.', 'Bakery in Monemvasia. Rated 4.4 on Google Maps.'),
  place('monemvasia-cafe-1', 'monemvasia', 'cafe', 'Enetiko Cafe & Cocktail Bar', 'Γιάννη Ρίτσου, Monemvasia', '모넴바시아의 카페. 구글 지도 평점 4.5.', 'Café in Monemvasia. Rated 4.5 on Google Maps.'),

  // —— kavala: restaurants, bakeries and cafés (2026-11-13) ——
  place('kavala-fine_dining-1', 'kavala', 'fine_dining', 'Atopo Bistronomy', 'Lamprou Katsoni 3, Kavala', '카발라의 레스토랑. 구글 지도 평점 4.9.', 'Restaurant in Kavala. Rated 4.9 on Google Maps.'),
  place('kavala-fine_dining-2', 'kavala', 'fine_dining', 'Ta Batzanakia', 'Volou 91, Kavala', '카발라의 그리스 요리 식당. 구글 지도 평점 4.8.', 'Greek restaurant in Kavala. Rated 4.8 on Google Maps.'),
  place('kavala-fine_dining-3', 'kavala', 'fine_dining', 'Apiko Tsipouradiko (Απίκο Τσιπουράδικο)', 'Erithrou Stavrou 2, Kavala', '카발라의 메제(작은 접시 요리) 식당. 구글 지도 평점 4.5.', 'Small-plates (meze) restaurant in Kavala. Rated 4.5 on Google Maps.'),
  place('kavala-fine_dining-4', 'kavala', 'fine_dining', 'Mermaids And Guys', 'Ellis 2-10, Kavala', '카발라의 레스토랑. 구글 지도 평점 4.7.', 'Restaurant in Kavala. Rated 4.7 on Google Maps.'),
  place('kavala-bakery-1', 'kavala', 'bakery', 'Ntinos Patisserie', 'El. Venizelou 25, Kavala', '카발라의 제과점. 구글 지도 평점 4.8.', 'Patisserie in Kavala. Rated 4.8 on Google Maps.'),
  place('kavala-bakery-2', 'kavala', 'bakery', 'Boulangerie Boutique by Chef Konstandinos', 'Poulidou 31, Kavala', '카발라의 제과점. 구글 지도 평점 4.8.', 'Patisserie in Kavala. Rated 4.8 on Google Maps.'),
  place('kavala-bakery-3', 'kavala', 'bakery', 'Wood Bakery I Trapeza (Η Τράπεζα)', 'Tenedou 32, Kavala', '카발라의 빵집. 구글 지도 평점 4.7.', 'Bakery in Kavala. Rated 4.7 on Google Maps.'),
  place('kavala-cafe-1', 'kavala', 'cafe', 'Chateau Espresso Bar', 'Poulidou 10, Kavala', '카발라의 에스프레소 바. 구글 지도 평점 4.9.', 'Espresso bar in Kavala. Rated 4.9 on Google Maps.'),
  place('kavala-cafe-2', 'kavala', 'cafe', 'Good Morning bread & coffee', 'Zaloggou 15, Kavala', '카발라의 카페. 구글 지도 평점 4.8.', 'Café in Kavala. Rated 4.8 on Google Maps.'),
  place('kavala-cafe-3', 'kavala', 'cafe', 'Caffeine Roastery', 'Chrisostomou Smirnis 8, Kavala', '카발라의 카페. 구글 지도 평점 4.6.', 'Café in Kavala. Rated 4.6 on Google Maps.'),

  // —— ioannina: restaurants, bakeries and cafés (2026-11-13) ——
  place('ioannina-fine_dining-1', 'ioannina', 'fine_dining', 'Balsamico', 'Plateia Neomartiros Georgiou 17, Ioannina', '이오아니나의 그리스 요리 식당. 구글 지도 평점 4.7.', 'Greek restaurant in Ioannina. Rated 4.7 on Google Maps.'),
  place('ioannina-fine_dining-2', 'ioannina', 'fine_dining', 'Metsovitiki Folia', 'Averof 101, Ioannina', '이오아니나의 숯불구이 식당. 구글 지도 평점 4.8.', 'Grill restaurant in Ioannina. Rated 4.8 on Google Maps.'),
  place('ioannina-fine_dining-3', 'ioannina', 'fine_dining', 'Presveia Restaurant Meze', 'Leof. Karamanli 17, Ioannina', '이오아니나의 메제(작은 접시 요리) 식당. 구글 지도 평점 4.7.', 'Small-plates (meze) restaurant in Ioannina. Rated 4.7 on Google Maps.'),
  place('ioannina-fine_dining-4', 'ioannina', 'fine_dining', 'Fysa Roufa', 'Averof 45, Ioannina', '이오아니나의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Ioannina. Rated 4.6 on Google Maps.'),
  place('ioannina-bakery-1', 'ioannina', 'bakery', 'Melísitos', '28is Oktovriou 9, Ioannina', '이오아니나의 빵집. 구글 지도 평점 4.9.', 'Bakery in Ioannina. Rated 4.9 on Google Maps.'),
  place('ioannina-bakery-2', 'ioannina', 'bakery', 'Gateaux', 'Fotou Tzavella 5, Ioannina', '이오아니나의 제과점. 구글 지도 평점 4.6.', 'Patisserie in Ioannina. Rated 4.6 on Google Maps.'),
  place('ioannina-cafe-1', 'ioannina', 'cafe', 'YARD Specialty Coffee & Brunch', 'Kon/nou Karamanli 2, Ioannina', '이오아니나의 브런치 카페. 구글 지도 평점 4.8.', 'Brunch café in Ioannina. Rated 4.8 on Google Maps.'),
  place('ioannina-cafe-2', 'ioannina', 'cafe', 'Coffee Lab', 'Pirsinela 12, Ioannina', '이오아니나의 카페. 구글 지도 평점 4.8.', 'Café in Ioannina. Rated 4.8 on Google Maps.'),
  place('ioannina-cafe-3', 'ioannina', 'cafe', 'Limné', 'Stratarchou Papagou 30, Ioannina', '이오아니나의 카페. 구글 지도 평점 5.0.', 'Café in Ioannina. Rated 5.0 on Google Maps.'),

  // —— kefalonia: restaurants, bakeries and cafés (2026-11-13) ——
  place('kefalonia-fine_dining-1', 'kefalonia', 'fine_dining', 'Palia Plaka', 'Agnis Metaxa 2, Argostoli', '아르고스톨리의 그리스 요리 식당. 구글 지도 평점 4.7.', 'Greek restaurant in Argostoli. Rated 4.7 on Google Maps.'),
  place('kefalonia-fine_dining-2', 'kefalonia', 'fine_dining', 'Tzivras', 'Vandorou 1, Argostoli', '아르고스톨리의 레스토랑. 구글 지도 평점 4.7.', 'Restaurant in Argostoli. Rated 4.7 on Google Maps.'),
  place('kefalonia-fine_dining-3', 'kefalonia', 'fine_dining', 'Edepa (Εδεπά)', 'Sitemporon 59, Argostoli', '아르고스톨리의 메제(작은 접시 요리) 식당. 구글 지도 평점 4.9.', 'Small-plates (meze) restaurant in Argostoli. Rated 4.9 on Google Maps.'),
  place('kefalonia-fine_dining-4', 'kefalonia', 'fine_dining', 'Baroque le Bistrot', 'P. Vallianou 3, Argostoli', '아르고스톨리의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Argostoli. Rated 4.6 on Google Maps.'),
  place('kefalonia-bakery-1', 'kefalonia', 'bakery', 'Sesoulas Bakery', 'Sotiros 11, Argostoli', '아르고스톨리의 빵집. 구글 지도 평점 4.9.', 'Bakery in Argostoli. Rated 4.9 on Google Maps.'),
  place('kefalonia-bakery-2', 'kefalonia', 'bakery', 'Manentis Bakery (Αρτοποιείο Μανέντης)', 'Leof. Antoni Tritsi 41, Argostoli', '아르고스톨리의 페이스트리 가게. 구글 지도 평점 4.8.', 'Pastry shop in Argostoli. Rated 4.8 on Google Maps.'),
  place('kefalonia-cafe-1', 'kefalonia', 'cafe', 'Antico - Cafe Del Corso', 'Lithostroto 7, Argostoli', '아르고스톨리의 카페. 구글 지도 평점 4.4.', 'Café in Argostoli. Rated 4.4 on Google Maps.'),
  place('kefalonia-cafe-2', 'kefalonia', 'cafe', 'Soulatso Cafe', 'Leof. Antoni Tritsi, Argostoli', '아르고스톨리의 카페. 구글 지도 평점 4.6.', 'Café in Argostoli. Rated 4.6 on Google Maps.'),

  // —— paros: restaurants, bakeries and cafés (2026-11-13) ——
  place('paros-fine_dining-1', 'paros', 'fine_dining', 'Parea Cuisine', 'Γλαύκου 13, Paros', '파로스의 레스토랑. 구글 지도 평점 4.7.', 'Restaurant in Paros. Rated 4.7 on Google Maps.'),
  place('paros-fine_dining-2', 'paros', 'fine_dining', 'The Little Green Rocket', 'Christou Konstantopoulos, Paros', '파로스의 레스토랑. 구글 지도 평점 4.7.', 'Restaurant in Paros. Rated 4.7 on Google Maps.'),
  place('paros-fine_dining-3', 'paros', 'fine_dining', 'Basilikos', 'Marpissa, Paros', '파로스의 그리스 요리 식당. 구글 지도 평점 4.9.', 'Greek restaurant in Paros. Rated 4.9 on Google Maps.'),
  place('paros-bakery-1', 'paros', 'bakery', 'OASIS Local Bakery', 'Διασταύρωση Λογαρά, Paros', '파로스의 페이스트리 가게. 구글 지도 평점 4.8.', 'Pastry shop in Paros. Rated 4.8 on Google Maps.'),
  place('paros-bakery-2', 'paros', 'bakery', 'Pastry Shop Antonis', 'Ναούσης, Paros', '파로스의 페이스트리 가게. 구글 지도 평점 4.6.', 'Pastry shop in Paros. Rated 4.6 on Google Maps.'),
  place('paros-cafe-1', 'paros', 'cafe', 'YaYa Cafe and Bar', 'Mavrogeni Sq, Paros', '파로스의 브런치 카페. 구글 지도 평점 4.8.', 'Brunch café in Paros. Rated 4.8 on Google Maps.'),
  place('paros-cafe-2', 'paros', 'cafe', 'Coffee Paros', 'Epar.Od. Naoussas-Marpissas, Paros', '파로스의 카페. 구글 지도 평점 4.5.', 'Café in Paros. Rated 4.5 on Google Maps.'),

  // —— milos: restaurants, bakeries and cafés (2026-11-13) ——
  place('milos-fine_dining-1', 'milos', 'fine_dining', 'DOM', 'Epar.Od. Triovasalou - Apollonion, Milos', '밀로스의 레스토랑. 구글 지도 평점 4.8.', 'Restaurant in Milos. Rated 4.8 on Google Maps.'),
  place('milos-fine_dining-2', 'milos', 'fine_dining', 'Karodromos', 'Karodromos, Milos', '밀로스의 레스토랑. 구글 지도 평점 4.7.', 'Restaurant in Milos. Rated 4.7 on Google Maps.'),
  place('milos-fine_dining-3', 'milos', 'fine_dining', 'Nostos Seafood Experience', 'Adama-Zephyria, Milos', '밀로스의 해산물 식당. 구글 지도 평점 4.6.', 'Seafood restaurant in Milos. Rated 4.6 on Google Maps.'),
  place('milos-fine_dining-4', 'milos', 'fine_dining', 'Estia Milos', 'Adama-Zephyria, Milos', '밀로스의 그리스 요리 식당. 구글 지도 평점 4.6.', 'Greek restaurant in Milos. Rated 4.6 on Google Maps.'),
  place('milos-cafe-1', 'milos', 'cafe', 'Mentor Coffee Guidance & More', 'Adama-Zephyria, Milos', '밀로스의 카페. 구글 지도 평점 4.6.', 'Café in Milos. Rated 4.6 on Google Maps.'),

  // —— rethymno: restaurants, bakeries and cafés (2026-11-13) ——
  place('rethymno-fine_dining-1', 'rethymno', 'fine_dining', 'Stella\'s Kitchen', 'Souliou 55, Rethymno', '레팀노의 레스토랑. 구글 지도 평점 4.9.', 'Restaurant in Rethymno. Rated 4.9 on Google Maps.'),
  place('rethymno-fine_dining-2', 'rethymno', 'fine_dining', 'Othonas Taverna', 'Mavrokordatou Alexandrou 27, Rethymno', '레팀노의 그리스 요리 식당. 구글 지도 평점 4.8.', 'Greek restaurant in Rethymno. Rated 4.8 on Google Maps.'),
  place('rethymno-fine_dining-3', 'rethymno', 'fine_dining', 'Adama Restaurant', 'Titou Petihaki 33, Rethymno', '레팀노의 지중해 요리 식당. 구글 지도 평점 4.9.', 'Mediterranean restaurant in Rethymno. Rated 4.9 on Google Maps.'),
  place('rethymno-fine_dining-4', 'rethymno', 'fine_dining', 'Kapilio', 'Xanthoudidou 7, Rethymno', '레팀노의 그리스 요리 식당. 구글 지도 평점 4.8.', 'Greek restaurant in Rethymno. Rated 4.8 on Google Maps.'),
  place('rethymno-bakery-1', 'rethymno', 'bakery', 'Handmade Traditional Philo Workshop', 'Βερνάρδου 30, Rethymno', '레팀노의 필로 반죽 공방 겸 가게. 구글 지도 평점 4.9.', 'Filo pastry workshop and shop in Rethymno. Rated 4.9 on Google Maps.'),
  place('rethymno-bakery-2', 'rethymno', 'bakery', 'Ma Douce Patisserie-Café', 'Sofokli Venizelou 45, Rethymno', '레팀노의 제과점. 구글 지도 평점 4.7.', 'Patisserie in Rethymno. Rated 4.7 on Google Maps.'),
  place('rethymno-bakery-3', 'rethymno', 'bakery', 'Rustico Bakery', 'Papanastasiou 2, Rethymno', '레팀노의 빵집. 구글 지도 평점 4.7.', 'Bakery in Rethymno. Rated 4.7 on Google Maps.'),
  place('rethymno-cafe-1', 'rethymno', 'cafe', 'Barrio The Neighbourhood Cafe', 'Dimitrakaki 1, Rethymno', '레팀노의 카페. 구글 지도 평점 4.8.', 'Café in Rethymno. Rated 4.8 on Google Maps.'),
  place('rethymno-cafe-2', 'rethymno', 'cafe', 'Vivliothiki Café', 'Kountouriotou 127, Rethymno', '레팀노의 카페. 구글 지도 평점 4.7.', 'Café in Rethymno. Rated 4.7 on Google Maps.'),
  place('rethymno-cafe-3', 'rethymno', 'cafe', 'Yellow Brunch Cafe', 'Kountouriotou 200, Rethymno', '레팀노의 브런치 카페. 구글 지도 평점 4.9.', 'Brunch café in Rethymno. Rated 4.9 on Google Maps.'),

  // —— agios-nikolaos: restaurants, bakeries and cafés (2026-11-13) ——
  place('agios-nikolaos-fine_dining-1', 'agios-nikolaos', 'fine_dining', 'To Mesogeiako', 'Akti Koundourou 12, Agios Nikolaos', '아기오스 니콜라오스의 지중해 요리 식당. 구글 지도 평점 4.8.', 'Mediterranean restaurant in Agios Nikolaos. Rated 4.8 on Google Maps.'),
  place('agios-nikolaos-fine_dining-2', 'agios-nikolaos', 'fine_dining', 'Karnagio / Pita tou Riga', 'Kon/nou Paleologou 24, Agios Nikolaos', '아기오스 니콜라오스의 그리스식 파이(피타) 식당. 구글 지도 평점 4.7.', 'Greek pie (pita) restaurant in Agios Nikolaos. Rated 4.7 on Google Maps.'),
  place('agios-nikolaos-fine_dining-3', 'agios-nikolaos', 'fine_dining', 'Migomis Piano Restaurant & Café', 'Nikolaou Plastira 20, Agios Nikolaos', '아기오스 니콜라오스의 레스토랑. 구글 지도 평점 4.7.', 'Restaurant in Agios Nikolaos. Rated 4.7 on Google Maps.'),
  place('agios-nikolaos-fine_dining-4', 'agios-nikolaos', 'fine_dining', 'Limni', 'Kon/nou Paleologou 8, Agios Nikolaos', '아기오스 니콜라오스의 그리스 요리 식당. 구글 지도 평점 4.6.', 'Greek restaurant in Agios Nikolaos. Rated 4.6 on Google Maps.'),
  place('agios-nikolaos-bakery-1', 'agios-nikolaos', 'bakery', 'Milo Patisserie (Μήλο Ζαχαροπλαστείο)', 'Λουί Παστέρ 1, Agios Nikolaos', '아기오스 니콜라오스의 페이스트리 가게. 구글 지도 평점 4.6.', 'Pastry shop in Agios Nikolaos. Rated 4.6 on Google Maps.'),
  place('agios-nikolaos-bakery-2', 'agios-nikolaos', 'bakery', 'Perfect', 'Kontogianni 14, Agios Nikolaos', '아기오스 니콜라오스의 페이스트리 가게. 구글 지도 평점 4.6.', 'Pastry shop in Agios Nikolaos. Rated 4.6 on Google Maps.'),
  place('agios-nikolaos-cafe-1', 'agios-nikolaos', 'cafe', 'Palazzo Cafe Bar', 'Ακτή Πάγκαλου 8, Agios Nikolaos', '아기오스 니콜라오스의 카페. 구글 지도 평점 4.7.', 'Café in Agios Nikolaos. Rated 4.7 on Google Maps.'),
  place('agios-nikolaos-cafe-2', 'agios-nikolaos', 'cafe', 'Flow coffee and more', 'Akti Koundourou 19, Agios Nikolaos', '아기오스 니콜라오스의 카페. 구글 지도 평점 5.0.', 'Café in Agios Nikolaos. Rated 5.0 on Google Maps.'),
  place('agios-nikolaos-cafe-3', 'agios-nikolaos', 'cafe', 'Deja Vu', 'Akti Papa Nikolaou Pagalou 11, Agios Nikolaos', '아기오스 니콜라오스의 카페. 구글 지도 평점 4.8.', 'Café in Agios Nikolaos. Rated 4.8 on Google Maps.'),

  // —— symi: restaurants, bakeries and cafés (2026-11-13) ——
  place('symi-fine_dining-1', 'symi', 'fine_dining', 'Agora Symi', 'Kali Strata, Symi', '시미의 레스토랑. 구글 지도 평점 4.8.', 'Restaurant in Symi. Rated 4.8 on Google Maps.'),
  place('symi-fine_dining-2', 'symi', 'fine_dining', 'Georgio & Maria', 'Chorio, Symi', '시미의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Symi. Rated 4.5 on Google Maps.'),
  place('symi-bakery-1', 'symi', 'bakery', 'The Panormitis Bakery – Gialos', 'Gialos, Symi', '시미의 빵집. 구글 지도 평점 4.8.', 'Bakery in Symi. Rated 4.8 on Google Maps.'),
  place('symi-bakery-2', 'symi', 'bakery', 'Sweet Aigli', 'Gialos, Symi', '시미의 제과점. 구글 지도 평점 4.9.', 'Patisserie in Symi. Rated 4.9 on Google Maps.'),
  place('symi-cafe-1', 'symi', 'cafe', 'Mediterraneo Café', 'Gialos 2, Symi', '시미의 카페. 구글 지도 평점 4.7.', 'Café in Symi. Rated 4.7 on Google Maps.'),
  place('symi-cafe-2', 'symi', 'cafe', 'Lefteris Coffee Shop (Καφενείον ο Λευτέρης)', 'Chorio, Symi', '시미의 카페. 구글 지도 평점 4.7.', 'Café in Symi. Rated 4.7 on Google Maps.'),
  place('symi-cafe-3', 'symi', 'cafe', 'Pap-illon Coffee & Desserts', 'Kali Strata, Symi', '시미의 카페. 구글 지도 평점 4.7.', 'Café in Symi. Rated 4.7 on Google Maps.'),

  // —— kos: restaurants, bakeries and cafés (2026-11-13) ——
  place('kos-fine_dining-1', 'kos', 'fine_dining', 'Plaza Traditional Greek Restaurant', 'Sokratous 6, Kos', '코스 시내의 그리스 요리 식당. 구글 지도 평점 4.8.', 'Greek restaurant in Kos Town. Rated 4.8 on Google Maps.'),
  place('kos-fine_dining-2', 'kos', 'fine_dining', 'Elia', 'Apellou 27, Kos', '코스 시내의 그리스 요리 식당. 구글 지도 평점 4.6.', 'Greek restaurant in Kos Town. Rated 4.6 on Google Maps.'),
  place('kos-fine_dining-3', 'kos', 'fine_dining', 'Soul Kitchen', 'Alexandrou Ypsilantou 18, Kos', '코스 시내의 지중해 요리 식당. 구글 지도 평점 4.8.', 'Mediterranean restaurant in Kos Town. Rated 4.8 on Google Maps.'),
  place('kos-fine_dining-4', 'kos', 'fine_dining', 'Noah\'s Ark', 'Mpoumpoulinas 14, Kos', '코스 시내의 아르메니아 요리 식당. 구글 지도 평점 4.8.', 'Armenian restaurant in Kos Town. Rated 4.8 on Google Maps.'),
  place('kos-bakery-1', 'kos', 'bakery', 'Gianniotiko Bakery (Γιαννιώτικο Αρτοζαχαροπλαστείο)', 'Αρίστωνος 7, Kos', '코스 시내의 빵집. 구글 지도 평점 4.7.', 'Bakery in Kos Town. Rated 4.7 on Google Maps.'),
  place('kos-bakery-2', 'kos', 'bakery', 'Xeni\'s Homemade Sweets', 'Ifestou 30, Kos', '코스 시내의 페이스트리 가게. 구글 지도 평점 4.8.', 'Pastry shop in Kos Town. Rated 4.8 on Google Maps.'),
  place('kos-bakery-3', 'kos', 'bakery', 'Lune Croissanterie', 'Antinavarchou Ioannidi 10, Kos', '코스 시내의 빵집. 구글 지도 평점 4.5.', 'Bakery in Kos Town. Rated 4.5 on Google Maps.'),
  place('kos-cafe-1', 'kos', 'cafe', 'The Cup', 'Vasileos Pavlou 22, Kos', '코스 시내의 카페. 구글 지도 평점 4.8.', 'Café in Kos Town. Rated 4.8 on Google Maps.'),
  place('kos-cafe-2', 'kos', 'cafe', 'Alchimion Coffee and Brunch', 'Vasileos Pavlou 33, Kos', '코스 시내의 브런치 카페. 구글 지도 평점 4.8.', 'Brunch café in Kos Town. Rated 4.8 on Google Maps.'),
  place('kos-cafe-3', 'kos', 'cafe', 'Royal Cafe Kos', 'Navarinou 14, Kos', '코스 시내의 카페. 구글 지도 평점 4.8.', 'Café in Kos Town. Rated 4.8 on Google Maps.'),

  // —— patmos: restaurants, bakeries and cafés (2026-11-13) ——
  place('patmos-fine_dining-1', 'patmos', 'fine_dining', 'Loza', 'Chora, Patmos', '파트모스의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Patmos. Rated 4.6 on Google Maps.'),
  place('patmos-fine_dining-2', 'patmos', 'fine_dining', 'Ktima Petra', 'Petra, Patmos', '파트모스의 그리스 요리 식당. 구글 지도 평점 4.6.', 'Greek restaurant in Patmos. Rated 4.6 on Google Maps.'),
  place('patmos-fine_dining-3', 'patmos', 'fine_dining', 'Pleiades Bar Restaurant', 'Loukakia, Patmos', '파트모스의 그리스 요리 식당. 구글 지도 평점 4.8.', 'Greek restaurant in Patmos. Rated 4.8 on Google Maps.'),
  place('patmos-bakery-1', 'patmos', 'bakery', 'Christodoulos Confectionery', 'Patmos', '파트모스의 제과점. 구글 지도 평점 4.8.', 'Patisserie in Patmos. Rated 4.8 on Google Maps.'),
  place('patmos-cafe-1', 'patmos', 'cafe', 'Ta Kardasia', 'Patmos', '파트모스의 카페. 구글 지도 평점 4.8.', 'Café in Patmos. Rated 4.8 on Google Maps.'),

  // —— halkidiki: restaurants, bakeries and cafés (2026-11-26) ——
  place('halkidiki-fine_dining-1', 'halkidiki', 'fine_dining', 'To Mageireio (The Kitchen)', 'Leof. Sithonias, Nikiti, Greece', '니키티에 있는 그리스 요리 레스토랑. 구글 지도 평점 4.7(리뷰 207개).', 'Greek restaurant in Nikiti. Rated 4.7 on Google Maps (207 reviews).'),
  place('halkidiki-fine_dining-2', 'halkidiki', 'fine_dining', 'Yours Bar Restaurant', 'Leof. Sithonias, Nikiti, Greece', '니키티에 있는 레스토랑. 구글 지도 평점 4.7(리뷰 584개).', 'Restaurant in Nikiti. Rated 4.7 on Google Maps (584 reviews).'),
  place('halkidiki-fine_dining-3', 'halkidiki', 'fine_dining', 'Alexandros Cafe Restaurant Bar', 'Egialou 30, Nikiti, Greece', '니키티에 있는 레스토랑. 구글 지도 평점 4.5(리뷰 3482개).', 'Restaurant in Nikiti. Rated 4.5 on Google Maps (3482 reviews).'),
  place('halkidiki-fine_dining-4', 'halkidiki', 'fine_dining', 'Olympus Grill Nikiti', 'Nikiti beach, Nikiti, Greece', '니키티에 있는 그릴 레스토랑. 구글 지도 평점 4.5(리뷰 865개).', 'Grill restaurant in Nikiti. Rated 4.5 on Google Maps (865 reviews).'),
  place('halkidiki-fine_dining-5', 'halkidiki', 'fine_dining', 'Taverna Limeri', 'Neakitou, Nikiti, Greece', '니키티에 있는 그리스 타베르나. 구글 지도 평점 4.4(리뷰 127개).', 'Greek taverna in Nikiti. Rated 4.4 on Google Maps (127 reviews).'),
  place('halkidiki-bakery-1', 'halkidiki', 'bakery', 'The Mall - Pastry - Cafe', 'Neakitou, Nikiti, Greece', '니키티에 있는 과자점. 구글 지도 평점 4.7(리뷰 774개).', 'Pastry shop in Nikiti. Rated 4.7 on Google Maps (774 reviews).'),
  place('halkidiki-bakery-2', 'halkidiki', 'bakery', 'Pralina Pastry Shop', 'Nikiti 630 88, Greece', '니키티에 있는 과자점. 구글 지도 평점 4.7(리뷰 352개).', 'Pastry shop in Nikiti. Rated 4.7 on Google Maps (352 reviews).'),
  place('halkidiki-bakery-3', 'halkidiki', 'bakery', 'Fayaz', 'Main road, Nikiti, Greece', '니키티에 있는 과자점. 구글 지도 평점 4.6(리뷰 577개).', 'Pastry shop in Nikiti. Rated 4.6 on Google Maps (577 reviews).'),
  place('halkidiki-bakery-4', 'halkidiki', 'bakery', 'Tasos', 'Nikiti 630 88, Greece', '니키티에 있는 빵집. 구글 지도 평점 4.5(리뷰 1227개).', 'Bakery in Nikiti. Rated 4.5 on Google Maps (1227 reviews).'),
  place('halkidiki-bakery-5', 'halkidiki', 'bakery', 'Gavanas bakery - cafe - patisserie', 'Epar. Od. Nikitis-Sartis, Nikiti, Greece', '니키티에 있는 빵집. 구글 지도 평점 4.5(리뷰 1347개).', 'Bakery in Nikiti. Rated 4.5 on Google Maps (1347 reviews).'),
  place('halkidiki-cafe-1', 'halkidiki', 'cafe', 'Day by Day', 'Leof. Sithonias, Nikiti, Greece', '니키티에 있는 카페. 구글 지도 평점 4.6(리뷰 943개).', 'Café in Nikiti. Rated 4.6 on Google Maps (943 reviews).'),
  place('halkidiki-cafe-2', 'halkidiki', 'cafe', 'Espresso Bar', 'Epar. Od. Nikitis-Sartis, Nikiti, Greece', '니키티에 있는 카페. 구글 지도 평점 4.6(리뷰 228개).', 'Café in Nikiti. Rated 4.6 on Google Maps (228 reviews).'),
  place('halkidiki-cafe-3', 'halkidiki', 'cafe', 'Bruno Coffee Stores', 'Leof. Sithonias, Nikiti, Greece', '니키티에 있는 카페. 구글 지도 평점 4.5(리뷰 382개).', 'Café in Nikiti. Rated 4.5 on Google Maps (382 reviews).'),

  // —— kastoria: restaurants, bakeries and cafés (2026-11-26) ——
  place('kastoria-fine_dining-1', 'kastoria', 'fine_dining', 'Kalnterimi', 'Vizantiou 12, Kastoria, Greece', '레스토랑. 구글 지도 평점 4.9(리뷰 2341개).', 'Restaurant. Rated 4.9 on Google Maps (2341 reviews).'),
  place('kastoria-fine_dining-2', 'kastoria', 'fine_dining', 'Pasatempos', 'Ermou 6, Kastoria, Greece', '레스토랑. 구글 지도 평점 4.9(리뷰 1870개).', 'Restaurant. Rated 4.9 on Google Maps (1870 reviews).'),
  place('kastoria-fine_dining-3', 'kastoria', 'fine_dining', 'Chousmeti', 'Orestiados 79, Kastoria, Greece', '레스토랑. 구글 지도 평점 4.8(리뷰 862개).', 'Restaurant. Rated 4.8 on Google Maps (862 reviews).'),
  place('kastoria-fine_dining-4', 'kastoria', 'fine_dining', 'En Kairo', 'Meg. Alexandrou 139, Kastoria, Greece', '레스토랑. 구글 지도 평점 4.8(리뷰 4512개).', 'Restaurant. Rated 4.8 on Google Maps (4512 reviews).'),
  place('kastoria-fine_dining-5', 'kastoria', 'fine_dining', 'To Steki tis Pareas', 'Ipolochagou Diakou 10, Kastoria, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.7(리뷰 3573개).', 'Greek restaurant. Rated 4.7 on Google Maps (3573 reviews).'),
  place('kastoria-bakery-1', 'kastoria', 'bakery', 'Susami', 'Grammou 1, Kastoria, Greece', '과자점. 구글 지도 평점 4.8(리뷰 245개).', 'Pastry shop. Rated 4.8 on Google Maps (245 reviews).'),
  place('kastoria-bakery-2', 'kastoria', 'bakery', 'Bakery Yfantidis', 'Athanasiou Diakou 40, Kastoria, Greece', '과자점. 구글 지도 평점 4.7(리뷰 609개).', 'Pastry shop. Rated 4.7 on Google Maps (609 reviews).'),
  place('kastoria-bakery-3', 'kastoria', 'bakery', 'Bougatsa Cafe Cultures', 'Athanasiou Diakou 12, Kastoria, Greece', '부가차(그리스식 파이) 가게. 구글 지도 평점 5.0(리뷰 142개).', 'Bougatsa (Greek custard pie) shop. Rated 5.0 on Google Maps (142 reviews).'),
  place('kastoria-cafe-1', 'kastoria', 'cafe', 'Cafe 108', 'Mitropoleos 108, Kastoria, Greece', '카페. 구글 지도 평점 4.9(리뷰 157개).', 'Café. Rated 4.9 on Google Maps (157 reviews).'),
  place('kastoria-cafe-2', 'kastoria', 'cafe', 'Fellowship of Magic', 'Meg. Alexandrou 97, Kastoria, Greece', '카페. 구글 지도 평점 4.9(리뷰 91개).', 'Café. Rated 4.9 on Google Maps (91 reviews).'),
  place('kastoria-cafe-3', 'kastoria', 'cafe', 'Idees Art Cafe', 'Vizantiou, Doltso, Kastoria, Greece', '카페. 구글 지도 평점 4.8(리뷰 1236개).', 'Café. Rated 4.8 on Google Maps (1236 reviews).'),
  place('kastoria-cafe-4', 'kastoria', 'cafe', 'D\'Oro Cafe', 'Leof. Kiknon 2, Kastoria, Greece', '카페. 구글 지도 평점 4.7(리뷰 239개).', 'Café. Rated 4.7 on Google Maps (239 reviews).'),

  // —— parga: restaurants, bakeries and cafés (2026-11-26) ——
  place('parga-fine_dining-1', 'parga', 'fine_dining', 'Agnanti Rooftop', 'Agias Marinis 1, Parga, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.9(리뷰 1043개).', 'Greek restaurant. Rated 4.9 on Google Maps (1043 reviews).'),
  place('parga-fine_dining-2', 'parga', 'fine_dining', 'Bianco Restaurant', 'Agiou Athanasiou 1, Parga, Greece', '지중해 요리 레스토랑. 구글 지도 평점 4.7(리뷰 1462개).', 'Mediterranean restaurant. Rated 4.7 on Google Maps (1462 reviews).'),
  place('parga-fine_dining-3', 'parga', 'fine_dining', 'Taverna Lithos', 'K. Mavromichali 34, Parga, Greece', '그리스 타베르나. 구글 지도 평점 4.7(리뷰 1644개).', 'Greek taverna. Rated 4.7 on Google Maps (1644 reviews).'),
  place('parga-fine_dining-4', 'parga', 'fine_dining', 'Piatto Open Cuisine', 'Anexartisias 13, Parga, Greece', '이탈리아 요리 레스토랑. 구글 지도 평점 4.6(리뷰 837개).', 'Italian restaurant. Rated 4.6 on Google Maps (837 reviews).'),
  place('parga-fine_dining-5', 'parga', 'fine_dining', 'Bacchos', 'Anexartisias 63, Parga, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.5(리뷰 3261개).', 'Greek restaurant. Rated 4.5 on Google Maps (3261 reviews).'),
  place('parga-bakery-1', 'parga', 'bakery', 'Lolis Bakery', 'Riga Feraiou 12, Parga, Greece', '빵집. 구글 지도 평점 4.7(리뷰 225개).', 'Bakery. Rated 4.7 on Google Maps (225 reviews).'),
  place('parga-bakery-2', 'parga', 'bakery', 'The Green Bakery', 'Spirou Livada 40, Parga, Greece', '빵집. 구글 지도 평점 4.6(리뷰 1358개).', 'Bakery. Rated 4.6 on Google Maps (1358 reviews).'),
  place('parga-bakery-3', 'parga', 'bakery', 'Maestro Bakery', 'Parga 480 60, Greece', '빵집. 구글 지도 평점 4.6(리뷰 226개).', 'Bakery. Rated 4.6 on Google Maps (226 reviews).'),
  place('parga-bakery-4', 'parga', 'bakery', 'Axni', 'Livada Spirou 3, Parga, Greece', '과자점. 구글 지도 평점 4.6(리뷰 95개).', 'Pastry shop. Rated 4.6 on Google Maps (95 reviews).'),
  place('parga-cafe-1', 'parga', 'cafe', 'Dear People', 'Dimoulitsa Patatoukou 6, Parga, Greece', '카페. 구글 지도 평점 4.9(리뷰 322개).', 'Café. Rated 4.9 on Google Maps (322 reviews).'),
  place('parga-cafe-2', 'parga', 'cafe', 'Brazilian Cup', 'Spirou Livada 21, Parga, Greece', '카페. 구글 지도 평점 4.8(리뷰 835개).', 'Café. Rated 4.8 on Google Maps (835 reviews).'),
  place('parga-cafe-3', 'parga', 'cafe', '5th Street Cafe', 'Riga Feraiou, Parga, Greece', '카페. 구글 지도 평점 4.8(리뷰 134개).', 'Café. Rated 4.8 on Google Maps (134 reviews).'),
  place('parga-cafe-4', 'parga', 'cafe', 'Limoncello Gastro Bar', 'Dimoulitsa Patatoukou 10, Parga, Greece', '카페. 구글 지도 평점 4.7(리뷰 165개).', 'Café. Rated 4.7 on Google Maps (165 reviews).'),

  // —— volos: restaurants, bakeries and cafés (2026-11-26) ——
  place('volos-fine_dining-1', 'volos', 'fine_dining', 'Staphylos', 'Melounas 6, Volos, Greece', '레스토랑. 구글 지도 평점 4.8(리뷰 2919개).', 'Restaurant. Rated 4.8 on Google Maps (2919 reviews).'),
  place('volos-fine_dining-2', 'volos', 'fine_dining', 'Vinsanto', 'Argonafton 45, Volos, Greece', '이탈리아 요리 레스토랑. 구글 지도 평점 4.8(리뷰 1095개).', 'Italian restaurant. Rated 4.8 on Google Maps (1095 reviews).'),
  place('volos-fine_dining-3', 'volos', 'fine_dining', 'Avli Eatery', 'Kartali Ioanni 39, Volos, Greece', '레스토랑. 구글 지도 평점 4.7(리뷰 983개).', 'Restaurant. Rated 4.7 on Google Maps (983 reviews).'),
  place('volos-fine_dining-4', 'volos', 'fine_dining', 'Flokos', 'Kiprou 42, Volos, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.7(리뷰 1483개).', 'Greek restaurant. Rated 4.7 on Google Maps (1483 reviews).'),
  place('volos-fine_dining-5', 'volos', 'fine_dining', 'Veggera', 'Sarantaporou 39, Volos, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.6(리뷰 2195개).', 'Greek restaurant. Rated 4.6 on Google Maps (2195 reviews).'),
  place('volos-bakery-1', 'volos', 'bakery', 'Glyko Styllas', 'Iasonos 135, Volos, Greece', '과자점. 구글 지도 평점 4.8(리뷰 1736개).', 'Pastry shop. Rated 4.8 on Google Maps (1736 reviews).'),
  place('volos-bakery-2', 'volos', 'bakery', 'Palaios Fournos', 'Krokiou 58, Volos, Greece', '빵집. 구글 지도 평점 4.7(리뷰 525개).', 'Bakery. Rated 4.7 on Google Maps (525 reviews).'),
  place('volos-bakery-3', 'volos', 'bakery', 'Farine Cafe-Boulangerie', 'Iolkou 314, Volos, Greece', '빵집. 구글 지도 평점 4.5(리뷰 98개).', 'Bakery. Rated 4.5 on Google Maps (98 reviews).'),
  place('volos-cafe-1', 'volos', 'cafe', 'C\'est La Vie', 'Makrynitsis 37, Volos, Greece', '카페. 구글 지도 평점 4.9(리뷰 380개).', 'Café. Rated 4.9 on Google Maps (380 reviews).'),
  place('volos-cafe-2', 'volos', 'cafe', '30B Espresso Slow Bar', 'Sokratous 30b, Volos, Greece', '스페셜티 커피 바. 구글 지도 평점 4.9(리뷰 100개).', 'Specialty coffee bar. Rated 4.9 on Google Maps (100 reviews).'),
  place('volos-cafe-3', 'volos', 'cafe', 'Self the Place', 'T. Oikonomaki 54, Volos, Greece', '카페. 구글 지도 평점 4.9(리뷰 137개).', 'Café. Rated 4.9 on Google Maps (137 reviews).'),
  place('volos-cafe-4', 'volos', 'cafe', 'NOMAS Quality Street Coffee', '28is Oktovriou 149, Volos, Greece', '스페셜티 커피 바. 구글 지도 평점 4.8(리뷰 126개).', 'Specialty coffee bar. Rated 4.8 on Google Maps (126 reviews).'),
  place('volos-cafe-5', 'volos', 'cafe', 'Rust and Roast', 'El. Venizelou 78, Volos, Greece', '스페셜티 커피 바. 구글 지도 평점 4.8(리뷰 84개).', 'Specialty coffee bar. Rated 4.8 on Google Maps (84 reviews).'),

  // —— skiathos: restaurants, bakeries and cafés (2026-11-26) ——
  place('skiathos-fine_dining-1', 'skiathos', 'fine_dining', 'Agnadio', 'Vigles, Skiathos 370 02, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.9(리뷰 1198개).', 'Greek restaurant. Rated 4.9 on Google Maps (1198 reviews).'),
  place('skiathos-fine_dining-2', 'skiathos', 'fine_dining', 'Scala', 'Antiploiarchou Laskou, Skiathos 370 02, Greece', '레스토랑. 구글 지도 평점 4.8(리뷰 493개).', 'Restaurant. Rated 4.8 on Google Maps (493 reviews).'),
  place('skiathos-fine_dining-3', 'skiathos', 'fine_dining', 'Giardino Segreto', 'Evangelistrias 14, Skiathos, Greece', '지중해 요리 레스토랑. 구글 지도 평점 4.8(리뷰 699개).', 'Mediterranean restaurant. Rated 4.8 on Google Maps (699 reviews).'),
  place('skiathos-fine_dining-4', 'skiathos', 'fine_dining', 'Crazy Cow Restaurant', 'Evangelistrias, Skiathos, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.7(리뷰 217개).', 'Greek restaurant. Rated 4.7 on Google Maps (217 reviews).'),
  place('skiathos-fine_dining-5', 'skiathos', 'fine_dining', 'Bourtzi Skiathos', 'Bourtzi, Skiathos port, Greece', '레스토랑. 구글 지도 평점 4.6(리뷰 3603개).', 'Restaurant. Rated 4.6 on Google Maps (3603 reviews).'),
  place('skiathos-bakery-1', 'skiathos', 'bakery', 'Bekatsaki', 'Skiathos 370 02, Greece', '빵집. 구글 지도 평점 4.9(리뷰 94개).', 'Bakery. Rated 4.9 on Google Maps (94 reviews).'),
  place('skiathos-bakery-2', 'skiathos', 'bakery', 'Dafni\'s Sweets', 'Terma Papadiamanti, Skiathos 370 02, Greece', '과자점. 구글 지도 평점 4.8(리뷰 286개).', 'Pastry shop. Rated 4.8 on Google Maps (286 reviews).'),
  place('skiathos-bakery-3', 'skiathos', 'bakery', 'Ariston', '1st km ring road, Skiathos, Greece', '과자점. 구글 지도 평점 4.6(리뷰 253개).', 'Pastry shop. Rated 4.6 on Google Maps (253 reviews).'),
  place('skiathos-cafe-1', 'skiathos', 'cafe', 'Gusto', 'Syntagmatarchou Riga, Skiathos 370 02, Greece', '카페. 구글 지도 평점 4.9(리뷰 159개).', 'Café. Rated 4.9 on Google Maps (159 reviews).'),
  place('skiathos-cafe-2', 'skiathos', 'cafe', 'Phaos World', 'Papadiamanti 63, Skiathos, Greece', '카페. 구글 지도 평점 4.9(리뷰 555개).', 'Café. Rated 4.9 on Google Maps (555 reviews).'),
  place('skiathos-cafe-3', 'skiathos', 'cafe', 'Cafe Nostalgic', 'Papadiamanti square, Skiathos, Greece', '카페. 구글 지도 평점 4.8(리뷰 413개).', 'Café. Rated 4.8 on Google Maps (413 reviews).'),
  place('skiathos-cafe-4', 'skiathos', 'cafe', 'Las Ramblas', 'Ring road, Skiathos 370 02, Greece', '카페. 구글 지도 평점 4.8(리뷰 341개).', 'Café. Rated 4.8 on Google Maps (341 reviews).'),

  // —— skopelos: restaurants, bakeries and cafés (2026-11-26) ——
  place('skopelos-fine_dining-1', 'skopelos', 'fine_dining', 'Costas by Vista Mare Island', 'Skopelos harbour, Skopelos 370 03, Greece', '레스토랑. 구글 지도 평점 4.9(리뷰 383개).', 'Restaurant. Rated 4.9 on Google Maps (383 reviews).'),
  place('skopelos-fine_dining-2', 'skopelos', 'fine_dining', 'Finikas Restaurant', 'Skopelos 370 03, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.6(리뷰 782개).', 'Greek restaurant. Rated 4.6 on Google Maps (782 reviews).'),
  place('skopelos-fine_dining-3', 'skopelos', 'fine_dining', 'Azan', 'Skopelos 370 03, Greece', '레스토랑. 구글 지도 평점 4.6(리뷰 614개).', 'Restaurant. Rated 4.6 on Google Maps (614 reviews).'),
  place('skopelos-fine_dining-4', 'skopelos', 'fine_dining', 'Stou Dimitraki', 'Ampeliki, Skopelos 370 03, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.5(리뷰 3169개).', 'Greek restaurant. Rated 4.5 on Google Maps (3169 reviews).'),
  place('skopelos-fine_dining-5', 'skopelos', 'fine_dining', 'Olivo Restaurant', 'Doulidou 1, Skopelos, Greece', '지중해 요리 레스토랑. 구글 지도 평점 4.4(리뷰 924개).', 'Mediterranean restaurant. Rated 4.4 on Google Maps (924 reviews).'),
  place('skopelos-bakery-1', 'skopelos', 'bakery', 'To Kafasi', 'Manolaki, Skopelos, Greece', '과자점. 구글 지도 평점 4.9(리뷰 89개).', 'Pastry shop. Rated 4.9 on Google Maps (89 reviews).'),
  place('skopelos-bakery-2', 'skopelos', 'bakery', 'Artissimo', 'Epar. Od. Skopelou-Loutrakiou, Skopelos 370 03, Greece', '빵집. 구글 지도 평점 4.8(리뷰 89개).', 'Bakery. Rated 4.8 on Google Maps (89 reviews).'),
  place('skopelos-bakery-3', 'skopelos', 'bakery', 'Ambrosia', 'Skopelos 370 03, Greece', '과자점. 구글 지도 평점 4.8(리뷰 462개).', 'Pastry shop. Rated 4.8 on Google Maps (462 reviews).'),
  place('skopelos-bakery-4', 'skopelos', 'bakery', 'Kochylis Bakery & Patisserie', 'Skopelos 370 03, Greece', '빵집. 구글 지도 평점 4.5(리뷰 1480개).', 'Bakery. Rated 4.5 on Google Maps (1480 reviews).'),
  place('skopelos-cafe-1', 'skopelos', 'cafe', 'Decimo Coffee & Brunch', 'Skopelos 370 03, Greece', '브런치 카페. 구글 지도 평점 4.9(리뷰 1083개).', 'Brunch café. Rated 4.9 on Google Maps (1083 reviews).'),
  place('skopelos-cafe-2', 'skopelos', 'cafe', 'Kanela Homemade Delicacies', 'El. Venizelou, Skopelos, Greece', '카페. 구글 지도 평점 4.5(리뷰 1083개).', 'Café. Rated 4.5 on Google Maps (1083 reviews).'),
  place('skopelos-cafe-3', 'skopelos', 'cafe', 'EN PLO Coffee Brunch', 'Skopelos 370 03, Greece', '브런치 카페. 구글 지도 평점 4.5(리뷰 367개).', 'Brunch café. Rated 4.5 on Google Maps (367 reviews).'),
  place('skopelos-cafe-4', 'skopelos', 'cafe', 'Anemos Coffee Brunch', 'Skopelos seafront, Greece', '브런치 카페. 구글 지도 평점 4.5(리뷰 349개).', 'Brunch café. Rated 4.5 on Google Maps (349 reviews).'),

  // —— lefkada: restaurants, bakeries and cafés (2026-11-26) ——
  place('lefkada-fine_dining-1', 'lefkada', 'fine_dining', 'To Alliotiko', 'Aggelou Sikelianou, Lefkada, Greece', '해산물 레스토랑. 구글 지도 평점 4.9(리뷰 85개).', 'Seafood restaurant. Rated 4.9 on Google Maps (85 reviews).'),
  place('lefkada-fine_dining-2', 'lefkada', 'fine_dining', 'Navis Restaurant & Cocktail Bar', 'Seafront, Lefkada, Greece', '현대 요리 레스토랑. 구글 지도 평점 4.8(리뷰 229개).', 'Modern cuisine restaurant. Rated 4.8 on Google Maps (229 reviews).'),
  place('lefkada-fine_dining-3', 'lefkada', 'fine_dining', 'Kelari', 'Central square, Lefkada, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.8(리뷰 820개).', 'Greek restaurant. Rated 4.8 on Google Maps (820 reviews).'),
  place('lefkada-fine_dining-4', 'lefkada', 'fine_dining', 'Pastino', 'Tzavala 3, Lefkada, Greece', '이탈리아 요리 레스토랑. 구글 지도 평점 4.8(리뷰 184개).', 'Italian restaurant. Rated 4.8 on Google Maps (184 reviews).'),
  place('lefkada-fine_dining-5', 'lefkada', 'fine_dining', 'Magiko Fagito', 'Dimitriou Golemi & Kefallinias, Lefkada, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.6(리뷰 583개).', 'Greek restaurant. Rated 4.6 on Google Maps (583 reviews).'),
  place('lefkada-bakery-1', 'lefkada', 'bakery', 'Zesta Xefournismata', 'Pefaneromenis 18, Lefkada, Greece', '빵집. 구글 지도 평점 5.0(리뷰 791개).', 'Bakery. Rated 5.0 on Google Maps (791 reviews).'),
  place('lefkada-bakery-2', 'lefkada', 'bakery', 'Papadopoulos Pastry Shop', '8is Merarchias 21, Lefkada, Greece', '과자점. 구글 지도 평점 4.9(리뷰 148개).', 'Pastry shop. Rated 4.9 on Google Maps (148 reviews).'),
  place('lefkada-bakery-3', 'lefkada', 'bakery', 'Sakis Bakery', 'A. Katopodi, Lefkada, Greece', '빵집. 구글 지도 평점 4.8(리뷰 245개).', 'Bakery. Rated 4.8 on Google Maps (245 reviews).'),
  place('lefkada-bakery-4', 'lefkada', 'bakery', 'Argiros Bakery', 'Iroon Polytechneiou & Tzeveleki, Lefkada, Greece', '과자점. 구글 지도 평점 4.6(리뷰 832개).', 'Pastry shop. Rated 4.6 on Google Maps (832 reviews).'),
  place('lefkada-cafe-1', 'lefkada', 'cafe', 'Ristretto Espresso Bar', 'Dimitriou Golemi 26, Lefkada, Greece', '카페. 구글 지도 평점 4.7(리뷰 690개).', 'Café. Rated 4.7 on Google Maps (690 reviews).'),
  place('lefkada-cafe-2', 'lefkada', 'cafe', '12 Cafe', 'Pefaneromenis 12, Lefkada, Greece', '카페. 구글 지도 평점 4.7(리뷰 319개).', 'Café. Rated 4.7 on Google Maps (319 reviews).'),
  place('lefkada-cafe-3', 'lefkada', 'cafe', 'Smol Coffee & Space', 'I. Valaoriti 20, Lefkada, Greece', '카페. 구글 지도 평점 4.5(리뷰 306개).', 'Café. Rated 4.5 on Google Maps (306 reviews).'),

  // —— patras: restaurants, bakeries and cafés (2026-11-26) ——
  place('patras-fine_dining-1', 'patras', 'fine_dining', 'Argo', 'Ir. Politechniou 78, Patras, Greece', '레스토랑. 구글 지도 평점 4.8(리뷰 1309개).', 'Restaurant. Rated 4.8 on Google Maps (1309 reviews).'),
  place('patras-fine_dining-2', 'patras', 'fine_dining', 'Rooster', 'Trion Navarchon 39, Patras, Greece', '레스토랑. 구글 지도 평점 4.7(리뷰 3324개).', 'Restaurant. Rated 4.7 on Google Maps (3324 reviews).'),
  place('patras-fine_dining-3', 'patras', 'fine_dining', 'Salumeria', 'Karaiskaki 202, Patras, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.6(리뷰 2645개).', 'Greek restaurant. Rated 4.6 on Google Maps (2645 reviews).'),
  place('patras-fine_dining-4', 'patras', 'fine_dining', 'Sailing Club of Patras', 'Ir. Politechniou 17, Patras, Greece', '레스토랑. 구글 지도 평점 4.6(리뷰 2227개).', 'Restaurant. Rated 4.6 on Google Maps (2227 reviews).'),
  place('patras-fine_dining-5', 'patras', 'fine_dining', 'Noesis', 'Amerikis 1, Patras, Greece', '레스토랑. 구글 지도 평점 4.6(리뷰 690개).', 'Restaurant. Rated 4.6 on Google Maps (690 reviews).'),
  place('patras-bakery-1', 'patras', 'bakery', 'Alyon Fine Pastry', 'Patreos 90, Patras, Greece', '과자점. 구글 지도 평점 4.9(리뷰 106개).', 'Pastry shop. Rated 4.9 on Google Maps (106 reviews).'),
  place('patras-bakery-2', 'patras', 'bakery', 'Teligades', 'Maizonos 98, Patras, Greece', '과자점. 구글 지도 평점 4.9(리뷰 114개).', 'Pastry shop. Rated 4.9 on Google Maps (114 reviews).'),
  place('patras-bakery-3', 'patras', 'bakery', 'Kooky & Co', 'Riga Fereou 101, Patras, Greece', '쿠키 가게. 구글 지도 평점 4.9(리뷰 222개).', 'Cookie shop. Rated 4.9 on Google Maps (222 reviews).'),
  place('patras-bakery-4', 'patras', 'bakery', 'Grande Mylonas', 'Patron Klaous 54, Patras, Greece', '과자점. 구글 지도 평점 4.7(리뷰 1572개).', 'Pastry shop. Rated 4.7 on Google Maps (1572 reviews).'),
  place('patras-bakery-5', 'patras', 'bakery', 'Madlin Bakery', 'Pantanassis 21, Patras, Greece', '빵집. 구글 지도 평점 4.6(리뷰 356개).', 'Bakery. Rated 4.6 on Google Maps (356 reviews).'),
  place('patras-cafe-1', 'patras', 'cafe', '224 Coffee', 'Papanastasiou 97, Patras, Greece', '스페셜티 커피 바. 구글 지도 평점 4.9(리뷰 128개).', 'Specialty coffee bar. Rated 4.9 on Google Maps (128 reviews).'),
  place('patras-cafe-2', 'patras', 'cafe', 'Stis Giagias', 'Panagouli 21B, Patras, Greece', '카페. 구글 지도 평점 4.7(리뷰 725개).', 'Café. Rated 4.7 on Google Maps (725 reviews).'),
  place('patras-cafe-3', 'patras', 'cafe', 'I Love Cafe', 'Ellinos Stratiotou 101, Patras, Greece', '카페. 구글 지도 평점 4.7(리뷰 178개).', 'Café. Rated 4.7 on Google Maps (178 reviews).'),
  place('patras-cafe-4', 'patras', 'cafe', 'Dose Coffee Bar', 'Ir. Politechniou 50, Patras, Greece', '카페. 구글 지도 평점 4.5(리뷰 1673개).', 'Café. Rated 4.5 on Google Maps (1673 reviews).'),

  // —— spetses: restaurants, bakeries and cafés (2026-11-26) ——
  place('spetses-fine_dining-1', 'spetses', 'fine_dining', 'Kafenion', 'Spetses 180 50, Greece', '작은 접시 요리 식당. 구글 지도 평점 4.7(리뷰 325개).', 'Small-plates restaurant. Rated 4.7 on Google Maps (325 reviews).'),
  place('spetses-fine_dining-2', 'spetses', 'fine_dining', 'To Pachni', 'Spetses 180 50, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.6(리뷰 651개).', 'Greek restaurant. Rated 4.6 on Google Maps (651 reviews).'),
  place('spetses-fine_dining-3', 'spetses', 'fine_dining', 'Agios', 'Dapia, Spetses, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.5(리뷰 783개).', 'Greek restaurant. Rated 4.5 on Google Maps (783 reviews).'),
  place('spetses-fine_dining-4', 'spetses', 'fine_dining', 'Mourayo', 'Old Harbour, Spetses 180 50, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.4(리뷰 1532개).', 'Greek restaurant. Rated 4.4 on Google Maps (1532 reviews).'),
  place('spetses-bakery-1', 'spetses', 'bakery', 'Vanilla', 'Spetses 180 50, Greece', '과자점. 구글 지도 평점 4.7(리뷰 128개).', 'Pastry shop. Rated 4.7 on Google Maps (128 reviews).'),
  place('spetses-bakery-2', 'spetses', 'bakery', 'Karagiannis Bakery', 'Spetses 180 50, Greece', '빵집. 구글 지도 평점 4.4(리뷰 374개).', 'Bakery. Rated 4.4 on Google Maps (374 reviews).'),
  place('spetses-cafe-1', 'spetses', 'cafe', 'Cielo Mar', 'Spetses 180 50, Greece', '카페. 구글 지도 평점 4.7(리뷰 1975개).', 'Café. Rated 4.7 on Google Maps (1975 reviews).'),
  place('spetses-cafe-2', 'spetses', 'cafe', 'Balkoni', 'Anargirou, Spetses 180 50, Greece', '카페. 구글 지도 평점 4.6(리뷰 507개).', 'Café. Rated 4.6 on Google Maps (507 reviews).'),
  place('spetses-cafe-3', 'spetses', 'cafe', 'Taratsa', 'Epar. Od. Spetson-Moni Agion Anargiron, Spetses, Greece', '카페. 구글 지도 평점 4.5(리뷰 157개).', 'Café. Rated 4.5 on Google Maps (157 reviews).'),

  // —— pylos: restaurants, bakeries and cafés (2026-11-26) ——
  place('pylos-fine_dining-1', 'pylos', 'fine_dining', 'Sto Steno', 'Avxentiou 2, Pylos, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.8(리뷰 559개).', 'Greek restaurant. Rated 4.8 on Google Maps (559 reviews).'),
  place('pylos-fine_dining-2', 'pylos', 'fine_dining', 'Elia', 'Gialova 240 01, Greece', '얄로바에 있는 그리스 요리 레스토랑. 구글 지도 평점 4.6(리뷰 4375개).', 'Greek restaurant in Gialova. Rated 4.6 on Google Maps (4375 reviews).'),
  place('pylos-fine_dining-3', 'pylos', 'fine_dining', 'Gonia tis Gefsis', 'Trion Navarchon square, Pylos, Greece', '기로스 식당. 구글 지도 평점 4.4(리뷰 515개).', 'Gyros restaurant. Rated 4.4 on Google Maps (515 reviews).'),
  place('pylos-fine_dining-4', 'pylos', 'fine_dining', 'O Aetos', 'Pylos 240 01, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.3(리뷰 1712개).', 'Greek restaurant. Rated 4.3 on Google Maps (1712 reviews).'),
  place('pylos-bakery-1', 'pylos', 'bakery', 'Athanasiou Traditional Bakery', 'Peisistratou, Pylos, Greece', '빵집. 구글 지도 평점 4.7(리뷰 227개).', 'Bakery. Rated 4.7 on Google Maps (227 reviews).'),
  place('pylos-cafe-1', 'pylos', 'cafe', 'Desire', 'Tsamadou, Pylos, Greece', '카페. 구글 지도 평점 4.4(리뷰 314개).', 'Café. Rated 4.4 on Google Maps (314 reviews).'),
  place('pylos-cafe-2', 'pylos', 'cafe', 'Cupallou', 'Trion Navarchon square, Pylos, Greece', '카페. 구글 지도 평점 4.3(리뷰 247개).', 'Café. Rated 4.3 on Google Maps (247 reviews).'),

  // —— lesbos: restaurants, bakeries and cafés (2026-11-26) ——
  place('lesbos-fine_dining-1', 'lesbos', 'fine_dining', 'Kokkini Patata', 'Komninaki 9, Mytilene, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.9(리뷰 680개).', 'Greek restaurant. Rated 4.9 on Google Maps (680 reviews).'),
  place('lesbos-fine_dining-2', 'lesbos', 'fine_dining', 'To Kantari', 'Chrysostomou Smyrnis 33, Mytilene, Greece', '레스토랑. 구글 지도 평점 4.9(리뷰 150개).', 'Restaurant. Rated 4.9 on Google Maps (150 reviews).'),
  place('lesbos-fine_dining-3', 'lesbos', 'fine_dining', 'Impasto', 'Samou 4, Mytilene, Greece', '이탈리아 요리 레스토랑. 구글 지도 평점 4.8(리뷰 266개).', 'Italian restaurant. Rated 4.8 on Google Maps (266 reviews).'),
  place('lesbos-fine_dining-4', 'lesbos', 'fine_dining', 'Umami The 5th Taste', 'Mitropoleos 15, Mytilene, Greece', '레스토랑. 구글 지도 평점 4.7(리뷰 425개).', 'Restaurant. Rated 4.7 on Google Maps (425 reviews).'),
  place('lesbos-fine_dining-5', 'lesbos', 'fine_dining', 'Kafeneion O Ermis', 'Kornarou 2, Mytilene, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.5(리뷰 1569개).', 'Greek restaurant. Rated 4.5 on Google Maps (1569 reviews).'),
  place('lesbos-bakery-1', 'lesbos', 'bakery', 'To Stahy', 'Papadiamanti 64, Mytilene, Greece', '과자점. 구글 지도 평점 4.8(리뷰 85개).', 'Pastry shop. Rated 4.8 on Google Maps (85 reviews).'),
  place('lesbos-bakery-2', 'lesbos', 'bakery', 'Pantazis Patisserie', 'Asklipiou 92, Mytilene, Greece', '과자점. 구글 지도 평점 4.6(리뷰 147개).', 'Pastry shop. Rated 4.6 on Google Maps (147 reviews).'),
  place('lesbos-bakery-3', 'lesbos', 'bakery', 'Sugar House', 'P. Kountourioti 3, Mytilene, Greece', '과자점. 구글 지도 평점 4.3(리뷰 1341개).', 'Pastry shop. Rated 4.3 on Google Maps (1341 reviews).'),
  place('lesbos-cafe-1', 'lesbos', 'cafe', 'Entos Cafe', 'Manou Katraki 1, Mytilene, Greece', '카페. 구글 지도 평점 5.0(리뷰 211개).', 'Café. Rated 5.0 on Google Maps (211 reviews).'),
  place('lesbos-cafe-2', 'lesbos', 'cafe', 'Basfanar Koulour', 'Ermou 100, Mytilene, Greece', '카페. 구글 지도 평점 4.9(리뷰 663개).', 'Café. Rated 4.9 on Google Maps (663 reviews).'),
  place('lesbos-cafe-3', 'lesbos', 'cafe', '19 Espresso - Gastro Bar', 'Archipelagous 19, Mytilene, Greece', '카페. 구글 지도 평점 4.9(리뷰 122개).', 'Café. Rated 4.9 on Google Maps (122 reviews).'),
  place('lesbos-cafe-4', 'lesbos', 'cafe', 'Coffee Factory', 'P. Kountourioti 15, Mytilene, Greece', '카페. 구글 지도 평점 4.8(리뷰 185개).', 'Café. Rated 4.8 on Google Maps (185 reviews).'),
  place('lesbos-cafe-5', 'lesbos', 'cafe', 'Flert Artisan Coffee', 'P. Kountourioti 47G, Mytilene, Greece', '스페셜티 커피 바. 구글 지도 평점 4.7(리뷰 167개).', 'Specialty coffee bar. Rated 4.7 on Google Maps (167 reviews).'),

  // —— chios: restaurants, bakeries and cafés (2026-11-26) ——
  place('chios-fine_dining-1', 'chios', 'fine_dining', 'Merokamato', 'Mikiadon 3, Chios, Greece', '작은 접시 요리 식당. 구글 지도 평점 4.9(리뷰 93개).', 'Small-plates restaurant. Rated 4.9 on Google Maps (93 reviews).'),
  place('chios-fine_dining-2', 'chios', 'fine_dining', 'To Kountouroudi', 'Aplotarias 27G, Chios, Greece', '지중해 요리 레스토랑. 구글 지도 평점 4.8(리뷰 781개).', 'Mediterranean restaurant. Rated 4.8 on Google Maps (781 reviews).'),
  place('chios-fine_dining-3', 'chios', 'fine_dining', 'Ouzeri The Mills', 'Kalouta 109, Chios, Greece', '우제리(우조와 안주를 내는 식당). 구글 지도 평점 4.7(리뷰 243개).', 'Ouzeri (ouzo and meze restaurant). Rated 4.7 on Google Maps (243 reviews).'),
  place('chios-fine_dining-4', 'chios', 'fine_dining', 'Stou Giorgou', 'Geor. Papandreou 11, Chios, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.6(리뷰 711개).', 'Greek restaurant. Rated 4.6 on Google Maps (711 reviews).'),
  place('chios-fine_dining-5', 'chios', 'fine_dining', 'The Pastards', 'Michael Livanou 13, Chios, Greece', '이탈리아 요리 레스토랑. 구글 지도 평점 4.5(리뷰 2276개).', 'Italian restaurant. Rated 4.5 on Google Maps (2276 reviews).'),
  place('chios-bakery-1', 'chios', 'bakery', 'Perris', 'Leof. Egeou 2, Chios, Greece', '빵집. 구글 지도 평점 4.8(리뷰 879개).', 'Bakery. Rated 4.8 on Google Maps (879 reviews).'),
  place('chios-bakery-2', 'chios', 'bakery', 'Karveli Bakery', 'Polytechneiou 13, Chios, Greece', '과자점. 구글 지도 평점 4.8(리뷰 186개).', 'Pastry shop. Rated 4.8 on Google Maps (186 reviews).'),
  place('chios-bakery-3', 'chios', 'bakery', 'Artonostimies Stathi Tomazou', 'Karamani 27, Chios, Greece', '빵집. 구글 지도 평점 4.7(리뷰 155개).', 'Bakery. Rated 4.7 on Google Maps (155 reviews).'),
  place('chios-cafe-1', 'chios', 'cafe', 'Nook 56', 'Leof. Egeou 56, Chios, Greece', '카페. 구글 지도 평점 4.8(리뷰 174개).', 'Café. Rated 4.8 on Google Maps (174 reviews).'),
  place('chios-cafe-2', 'chios', 'cafe', 'Icing Sugar and Cinnamon', 'Souri 85, Chios, Greece', '카페. 구글 지도 평점 4.6(리뷰 2199개).', 'Café. Rated 4.6 on Google Maps (2199 reviews).'),
  place('chios-cafe-3', 'chios', 'cafe', '44 Bar Coffee Shop', 'Leof. Egeou 44, Chios, Greece', '카페. 구글 지도 평점 4.6(리뷰 2271개).', 'Café. Rated 4.6 on Google Maps (2271 reviews).'),
  place('chios-cafe-4', 'chios', 'cafe', 'Piperoriza', 'Dorotheou Proiou 9, Chios, Greece', '카페. 구글 지도 평점 4.6(리뷰 1196개).', 'Café. Rated 4.6 on Google Maps (1196 reviews).'),
  place('chios-cafe-5', 'chios', 'cafe', 'Rodi', 'Magaziotissis 1, Chios, Greece', '카페. 구글 지도 평점 4.6(리뷰 1090개).', 'Café. Rated 4.6 on Google Maps (1090 reviews).'),

  // —— syros: restaurants, bakeries and cafés (2026-11-26) ——
  place('syros-fine_dining-1', 'syros', 'fine_dining', 'Laoutari Kafreneio', 'Thermopylon 18, Ermoupoli, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.7(리뷰 1311개).', 'Greek restaurant. Rated 4.7 on Google Maps (1311 reviews).'),
  place('syros-fine_dining-2', 'syros', 'fine_dining', 'To Mikraki', 'Thermopylon & Folegandrou 4, Ermoupoli, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.7(리뷰 1325개).', 'Greek restaurant. Rated 4.7 on Google Maps (1325 reviews).'),
  place('syros-fine_dining-3', 'syros', 'fine_dining', 'To Tsipouradiko tis Mirsinis', 'Akti Papagou 6, Ermoupoli, Greece', '해산물 레스토랑. 구글 지도 평점 4.6(리뷰 4002개).', 'Seafood restaurant. Rated 4.6 on Google Maps (4002 reviews).'),
  place('syros-fine_dining-4', 'syros', 'fine_dining', 'Amvix', 'Akti Papagou 26, Ermoupoli, Greece', '이탈리아 요리 레스토랑. 구글 지도 평점 4.6(리뷰 3186개).', 'Italian restaurant. Rated 4.6 on Google Maps (3186 reviews).'),
  place('syros-fine_dining-5', 'syros', 'fine_dining', 'Amarone', 'Akti Petrou Ralli 42, Ermoupoli, Greece', '이탈리아 요리 레스토랑. 구글 지도 평점 4.6(리뷰 187개).', 'Italian restaurant. Rated 4.6 on Google Maps (187 reviews).'),
  place('syros-bakery-1', 'syros', 'bakery', 'The Home of Agnes', 'Neoriou 3, Ermoupoli, Greece', '과자점. 구글 지도 평점 4.7(리뷰 268개).', 'Pastry shop. Rated 4.7 on Google Maps (268 reviews).'),
  place('syros-bakery-2', 'syros', 'bakery', 'Ntanos', 'Iroon Polytechneiou 20, Ermoupoli, Greece', '빵집. 구글 지도 평점 4.6(리뷰 255개).', 'Bakery. Rated 4.6 on Google Maps (255 reviews).'),
  place('syros-bakery-3', 'syros', 'bakery', 'Artisti Prozymi', 'Ermoupoli 841 00, Greece', '과자점. 구글 지도 평점 4.4(리뷰 408개).', 'Pastry shop. Rated 4.4 on Google Maps (408 reviews).'),
  place('syros-cafe-1', 'syros', 'cafe', 'Psyra', 'Vokotopoulou 10, Ermoupoli, Greece', '카페. 구글 지도 평점 4.9(리뷰 170개).', 'Café. Rated 4.9 on Google Maps (170 reviews).'),
  place('syros-cafe-2', 'syros', 'cafe', 'Timeout Speciality Coffee', 'Neoriou & Geor. Petritsi, Ermoupoli, Greece', '스페셜티 커피 바. 구글 지도 평점 4.9(리뷰 158개).', 'Specialty coffee bar. Rated 4.9 on Google Maps (158 reviews).'),
  place('syros-cafe-3', 'syros', 'cafe', 'Happen', 'Stefanou Kiparissou 6, Ermoupoli, Greece', '카페. 구글 지도 평점 4.9(리뷰 110개).', 'Café. Rated 4.9 on Google Maps (110 reviews).'),
  place('syros-cafe-4', 'syros', 'cafe', 'Epta', 'Peloponnisou 7, Ermoupoli, Greece', '카페. 구글 지도 평점 4.8(리뷰 1400개).', 'Café. Rated 4.8 on Google Maps (1400 reviews).'),
  place('syros-cafe-5', 'syros', 'cafe', 'The Corner Cafe', 'Vikela 3, Ermoupoli, Greece', '베이글 카페. 구글 지도 평점 4.6(리뷰 321개).', 'Bagel café. Rated 4.6 on Google Maps (321 reviews).'),

  // —— tinos: restaurants, bakeries and cafés (2026-11-26) ——
  place('tinos-fine_dining-1', 'tinos', 'fine_dining', 'Forty One 41', 'Leof. Stavrou Kionion, Tinos, Greece', '레스토랑. 구글 지도 평점 4.9(리뷰 204개).', 'Restaurant. Rated 4.9 on Google Maps (204 reviews).'),
  place('tinos-fine_dining-2', 'tinos', 'fine_dining', 'Travixti', 'Taxiarchon square, Tinos, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.8(리뷰 133개).', 'Greek restaurant. Rated 4.8 on Google Maps (133 reviews).'),
  place('tinos-fine_dining-3', 'tinos', 'fine_dining', 'Mikro Karavi', 'Trion Ierarchon, Tinos, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.5(리뷰 1717개).', 'Greek restaurant. Rated 4.5 on Google Maps (1717 reviews).'),
  place('tinos-fine_dining-4', 'tinos', 'fine_dining', 'Botilia Tinos Greek Restaurant', 'Alexandrou Lagourou, Tinos, Greece', '그리스 요리 레스토랑. 구글 지도 평점 4.4(리뷰 668개).', 'Greek restaurant. Rated 4.4 on Google Maps (668 reviews).'),
  place('tinos-bakery-1', 'tinos', 'bakery', 'Bakery Manelas', 'Mark. Krikeli 2, Tinos, Greece', '빵집. 구글 지도 평점 4.7(리뷰 231개).', 'Bakery. Rated 4.7 on Google Maps (231 reviews).'),
  place('tinos-bakery-2', 'tinos', 'bakery', 'To Spitiko', 'Zanaki Alavanou & 25is Martiou, Tinos, Greece', '과자점. 구글 지도 평점 4.4(리뷰 182개).', 'Pastry shop. Rated 4.4 on Google Maps (182 reviews).'),
  place('tinos-bakery-3', 'tinos', 'bakery', 'O Triantaritis', 'Agias Paraskevis 14, Tinos, Greece', '과자점. 구글 지도 평점 4.3(리뷰 99개).', 'Pastry shop. Rated 4.3 on Google Maps (99 reviews).'),
  place('tinos-cafe-1', 'tinos', 'cafe', 'Holy Hood', 'Evangelistrias 49, Tinos, Greece', '카페. 구글 지도 평점 4.9(리뷰 290개).', 'Café. Rated 4.9 on Google Maps (290 reviews).'),
  place('tinos-cafe-2', 'tinos', 'cafe', 'Kalimera', 'Evangelistrias 20, Tinos, Greece', '카페. 구글 지도 평점 4.9(리뷰 194개).', 'Café. Rated 4.9 on Google Maps (194 reviews).'),
  place('tinos-cafe-3', 'tinos', 'cafe', 'Mikro Tinos', 'Evangelistrias 42, Tinos, Greece', '카페. 구글 지도 평점 4.7(리뷰 1719개).', 'Café. Rated 4.7 on Google Maps (1719 reviews).'),
  place('tinos-cafe-4', 'tinos', 'cafe', 'Myrtilo Bistro', 'Vitali & Afentouli, Tinos, Greece', '브런치 카페. 구글 지도 평점 4.6(리뷰 2388개).', 'Brunch café. Rated 4.6 on Google Maps (2388 reviews).'),
  place('tinos-cafe-5', 'tinos', 'cafe', 'Mermigo', 'Seafront, Tinos, Greece', '카페. 구글 지도 평점 4.6(리뷰 94개).', 'Café. Rated 4.6 on Google Maps (94 reviews).'),

  // —— folegandros: restaurants, bakeries and cafés (2026-11-26) ——
  place('folegandros-fine_dining-1', 'folegandros', 'fine_dining', 'Belegra Aegean Tastes', 'Kalderimi, Chora, Folegandros, Greece', '지중해 요리 레스토랑. 구글 지도 평점 4.7(리뷰 335개).', 'Mediterranean restaurant. Rated 4.7 on Google Maps (335 reviews).'),
  place('folegandros-fine_dining-2', 'folegandros', 'fine_dining', 'To Zimaraki', 'Kalderimi, Chora, Folegandros, Greece', '이탈리아 요리 레스토랑. 구글 지도 평점 4.7(리뷰 767개).', 'Italian restaurant. Rated 4.7 on Google Maps (767 reviews).'),
  place('folegandros-fine_dining-3', 'folegandros', 'fine_dining', 'Pounta', 'Pounta square, Chora, Folegandros, Greece', '레스토랑. 구글 지도 평점 4.7(리뷰 941개).', 'Restaurant. Rated 4.7 on Google Maps (941 reviews).'),
  place('folegandros-fine_dining-4', 'folegandros', 'fine_dining', 'Sinadisi', 'Ano Meria 840 11, Folegandros, Greece', '아노 메리아에 있는 그리스 요리 레스토랑. 구글 지도 평점 4.7(리뷰 1197개).', 'Greek restaurant in Ano Meria. Rated 4.7 on Google Maps (1197 reviews).'),
  place('folegandros-fine_dining-5', 'folegandros', 'fine_dining', 'O Psaromiligkas', 'Agkali 840 11, Folegandros, Greece', '앙갈리에 있는 해산물 레스토랑. 구글 지도 평점 4.7(리뷰 633개).', 'Seafood restaurant in Agkali. Rated 4.7 on Google Maps (633 reviews).'),
  place('folegandros-bakery-1', 'folegandros', 'bakery', 'Kanela Coffee & Bakery', 'Chora, Folegandros 840 11, Greece', '과자점. 구글 지도 평점 4.7(리뷰 151개).', 'Pastry shop. Rated 4.7 on Google Maps (151 reviews).'),
  place('folegandros-bakery-2', 'folegandros', 'bakery', 'The Baker', 'Chora, Folegandros 840 11, Greece', '빵집. 구글 지도 평점 4.6(리뷰 408개).', 'Bakery. Rated 4.6 on Google Maps (408 reviews).'),

  // —— amorgos: restaurants, bakeries and cafés (2026-11-26) ——
  place('amorgos-fine_dining-1', 'amorgos', 'fine_dining', 'Alifoni', 'Xylokeratidi, Katapola 840 08, Greece', '카타폴라에 있는 그리스 요리 레스토랑. 구글 지도 평점 4.8(리뷰 135개).', 'Greek restaurant in Katapola. Rated 4.8 on Google Maps (135 reviews).'),
  place('amorgos-fine_dining-2', 'amorgos', 'fine_dining', 'Giorgalinis', 'Vroutsis 840 08, Greece', '브루치스에 있는 그리스 요리 레스토랑. 구글 지도 평점 4.7(리뷰 535개).', 'Greek restaurant in Vroutsis. Rated 4.7 on Google Maps (535 reviews).'),
  place('amorgos-fine_dining-3', 'amorgos', 'fine_dining', 'Mythos', 'Katapola 840 08, Greece', '카타폴라에 있는 그리스 요리 레스토랑. 구글 지도 평점 4.7(리뷰 701개).', 'Greek restaurant in Katapola. Rated 4.7 on Google Maps (701 reviews).'),
  place('amorgos-fine_dining-4', 'amorgos', 'fine_dining', 'Limani Restaurant', 'Aegiali 840 08, Greece', '에길리에 있는 그리스 요리 레스토랑. 구글 지도 평점 4.5(리뷰 1399개).', 'Greek restaurant in Aegiali. Rated 4.5 on Google Maps (1399 reviews).'),
  place('amorgos-bakery-1', 'amorgos', 'bakery', 'Tratarisma Pastries-Cafe', 'Langada 840 08, Greece', '랑가다에 있는 과자점. 구글 지도 평점 4.8(리뷰 580개).', 'Pastry shop in Langada. Rated 4.8 on Google Maps (580 reviews).'),
  place('amorgos-bakery-2', 'amorgos', 'bakery', 'Kallisto', 'Chora 840 08, Amorgos, Greece', '과자점. 구글 지도 평점 4.7(리뷰 1171개).', 'Pastry shop. Rated 4.7 on Google Maps (1171 reviews).'),
]
