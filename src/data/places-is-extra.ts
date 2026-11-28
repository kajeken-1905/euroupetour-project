import { place } from './placeFactory'
import type { Place } from '../types'

export const placesISExtra: Place[] = [
  // —— reykjavik ——
  place('reykjavik-fine_dining-1', 'reykjavik', 'fine_dining', 'Dill Restaurant', 'Laugavegur 59, 101 Reykjavík', '2017년 아이슬란드에서 처음 미쉐린 별을 받은 뉴 노르딕 레스토랑. 2026년 현재 1스타입니다.', 'New Nordic restaurant that won Iceland’s first Michelin star in 2017; one star in 2026.', { michelin: 'star1' }),
  place('reykjavik-fine_dining-2', 'reykjavik', 'fine_dining', 'ÓX', 'Laugavegur 55, 101 Reykjavík', '라우가베구르의 작은 셰프 카운터 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'Small chef’s-counter restaurant with one Michelin star on Laugavegur; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('reykjavik-fine_dining-3', 'reykjavik', 'fine_dining', 'Grillmarkaðurinn', 'Lækjargata 2A, 101 Reykjavík', '흐레프나 새트란 셰프의 그릴 레스토랑. 지역 농가 식재료로 생선과 고기를 굽고 테이스팅 메뉴가 있습니다. 저녁에만 엽니다.', 'Chef Hrefna Sætran’s grill restaurant, cooking fish and meat from local farms over the grill, with a tasting menu; dinner only.'),
  place('reykjavik-fine_dining-4', 'reykjavik', 'fine_dining', 'Fiskmarkaðurinn (Fish Market)', 'Aðalstræti 12, 101 Reykjavík', '2007년 흐레프나 새트란 셰프가 연 해산물 레스토랑. 시내에서 가장 오래된 건물 중 하나에 있고 아이슬란드 식재료에 일본식 감각을 더합니다.', 'Seafood restaurant founded in 2007 by chef Hrefna Sætran in one of central Reykjavík’s oldest buildings, giving Icelandic ingredients a Japanese touch.'),
  place('reykjavik-fine_dining-5', 'reykjavik', 'fine_dining', 'Matur og Drykkur', 'Mýrargata 31, 101 Reykjavík', '아이슬란드 전통 요리를 현대적으로 풀어 내는 레스토랑. 저녁에만 열고 월·화요일은 쉽니다. 미쉐린 가이드에 실려 있습니다.', 'Restaurant reworking traditional Icelandic dishes, open for dinner only and closed Mondays and Tuesdays; listed in the MICHELIN Guide.'),
  place('reykjavik-bakery-1', 'reykjavik', 'bakery', 'Brauð & Co', 'Austurstræti 17, 101 Reykjavík', '잉골프 광장 근처의 작은 빵집. 시나몬롤과 사워도우가 대표이고 아침 7시에 엽니다.', 'Small bakery near Ingólfstorg known for cinnamon rolls and sourdough, opening at 7 am.'),
  place('reykjavik-bakery-2', 'reykjavik', 'bakery', 'Sandholt', 'Laugavegur 36, 101 Reykjavík', '1920년부터 4대째 이어 온 가족 빵집. 사워도우와 크루아상·비나르브라우드가 유명하고 종일 아침 메뉴를 냅니다.', 'Family bakery run by the fourth generation since 1920, famous for sourdough, croissants and vínarbrauð, with all-day breakfast.'),
  place('reykjavik-bakery-3', 'reykjavik', 'bakery', 'Bernhöftsbakarí', 'Klapparstígur 3, 101 Reykjavík', '1834년 문을 연 아이슬란드 최초의 빵집. 시내 원래 자리에서 클라파르스티구르의 작은 가게로 옮겼습니다.', 'Iceland’s first bakery, founded in 1834, now in a smaller shop on Klapparstígur after leaving its original downtown site.'),
  place('reykjavik-bakery-4', 'reykjavik', 'cafe', 'Café Babalú', 'Skólavörðustígur 22a, 101 Reykjavík', '할그림스키르캬에서 내려오는 길의 노랑·파랑 외관 카페. 빈티지 소품으로 꾸몄고 치즈케이크와 비건 칠리가 인기입니다.', 'Yellow-and-blue café on the street down from Hallgrímskirkja, crammed with vintage curios, known for cheesecake and vegan chilli.', { image: '/places/reykjavik-bakery-4.jpg' }),
  place('reykjavik-cafe-1', 'reykjavik', 'cafe', 'Reykjavík Roasters', 'Brautarholti 2, 105 Reykjavík', '2015년 문을 연 레이캬비크 로스터스의 두 번째 매장. 가장 넓고 핸드드립 브루 바와 음식 메뉴가 있습니다.', 'Reykjavík Roasters’ second café, opened in 2015 and the roomiest, with a hand-brew bar and a fuller food menu.'),
  place('reykjavik-cafe-3', 'reykjavik', 'cafe', 'The Laundromat Café', 'Austurstræti 9, 101 Reykjavík', '미국식 다이너 분위기의 브런치 카페. 지하에 세탁기가 있고 아이 놀이방과 아이용 브런치가 있습니다.', 'American-diner-style brunch café with laundry machines in the basement, a kids’ playroom and a children’s brunch.'),
  place('reykjavik-cafe-4', 'reykjavik', 'cafe', 'Stofan Café', 'Vesturgata 3, 101 Reykjavík', '잉골프 광장 근처의 2층 카페. 1층은 아침·커피, 지하는 아이슬란드 맥주를 내고 보드게임과 책이 있습니다.', 'Two-level café near Ingólfstorg: breakfast and coffee upstairs, Icelandic beers in the basement, with board games and books.', { image: '/places/reykjavik-cafe-4.jpg' }),

  // —— akureyri ——
  place('akureyri-fine_dining-2', 'akureyri', 'fine_dining', 'Strikið', 'Skipagata 14, 600 Akureyri', '2005년 문을 연 사무 건물 5층 레스토랑. 피오르와 산이 보이고 아이슬란드 식재료로 양고기·해산물 수프와 초밥을 냅니다.', 'Fifth-floor restaurant in an office building, open since 2005, with views over the fjord and mountains and Icelandic lamb, seafood soup and sushi.'),
  place('akureyri-fine_dining-3', 'akureyri', 'fine_dining', 'Rub23', 'Kaupvangsstræti 6, 600 Akureyri, Iceland', '아이슬란드 어부·농가 식재료로 해산물·초밥·스테이크를 내는 레스토랑. 점심 뷔페가 있습니다.', 'Restaurant serving seafood, sushi and steak from Icelandic fishermen and farmers, with a lunch buffet.'),
  place('akureyri-bakery-2', 'akureyri', 'bakery', 'Axelsbakarí', 'Hvannavellir 14, Akureyri, Iceland', '1996년 문을 연 동네 빵집 겸 카페.', 'Neighbourhood bakery-café open since 1996.'),
  place('akureyri-bakery-3', 'akureyri', 'bakery', 'Bakaríið við Brúna', 'Dalsbraut 1, Akureyri, Iceland', '20년 넘게 영업한 빵집. 클레이누르 같은 아이슬란드 과자와 초콜릿 케이크, 빵 그릇에 담은 수프를 냅니다.', 'Bakery in business for over 20 years, with Icelandic treats such as kleinur, chocolate sheet cake and soup served in a bread bowl.'),
  place('akureyri-cafe-1', 'akureyri', 'cafe', 'Blaa Kannan Cafe', 'Hafnarstræti 96, Akureyri, Iceland', '중심가의 파란 건물 카페. 아침 빵, 점심 수프와 오늘의 요리, 아이슬란드식 케이크를 냅니다.', 'Café in a blue building on the main street with morning bread, lunchtime soup and daily dishes, and Icelandic layer cakes.'),
  place('akureyri-cafe-2', 'akureyri', 'cafe', 'Ketilkaffi', 'Kaupvangsstræti 8, 600 Akureyri', '아쿠레이리 미술관 건물 안의 스페셜티 커피 카페. 생선 수프와 사워도우를 곁들인 아침 메뉴가 있습니다.', 'Specialty coffee café inside the Akureyri Art Museum, with fish soup and breakfast plates with sourdough.'),

  // —— vik ——
  place('vik-fine_dining-1', 'vik', 'fine_dining', 'Suður-Vík', 'Suðurvíkurvegur 1, 870 Vík', '언덕 전망의 아이슬란드 가정식.', 'Icelandic comfort food with hillside views.'),
  place('vik-fine_dining-2', 'vik', 'fine_dining', 'The Soup Company', 'Víkurbraut 5, 870 Vík', '비크의 수프 전문점.', 'Soup specialist in Vík.'),
  place('vik-fine_dining-3', 'vik', 'fine_dining', 'Smiðjan Brugghús', 'Sunnubraut 15, 870 Vík', '수제 맥주와 버거를 내는 비크의 브루하우스.', 'Brewhouse in Vík serving craft beer and burgers.'),
  place('vik-bakery-1', 'vik', 'bakery', 'Lava Bakery and Coffee', 'Austurvegur 20, 870 Vík, Iceland', '빵·페이스트리·케이크를 굽는 비크의 빵집 겸 카페.', 'Vík bakery café with bread, pastries and cakes.'),
  place('vik-cafe-1', 'vik', 'cafe', 'Halldorskaffi', 'Víkurbraut 28, 870 Vik, Iceland', '비크의 오래된 건물에 있는 아늑한 카페 겸 레스토랑.', 'Cosy café-restaurant in an old building in Vík.'),
  place('vik-cafe-2', 'vik', 'cafe', 'Skool Beans', 'Klettsvegur 9, 870 Vík', '노란 스쿨버스를 개조한 스페셜티 카페 겸 로스터리. 장작 난로와 베이글·빵이 있습니다.', 'Speciality café and roastery in a converted school bus, with a wood-burning stove, bagels and baked goods.'),

  // —— husavik ——
  place('husavik-fine_dining-1', 'husavik', 'fine_dining', 'Naustið', 'Ásgarðsvegur 1, 640 Húsavík', '후사비크 중심의 작은 가족 운영 해산물 식당. 생선 수프와 그날 잡은 생선, 직접 구운 빵을 내고 테라스가 있습니다.', 'Small family-run seafood restaurant in central Húsavík with fish soup, the daily catch and homemade bread, plus a terrace.'),
  place('husavik-fine_dining-3', 'husavik', 'fine_dining', 'Gamli Baukur', 'Hafnarstétt 9, 640 Húsavík', '항구의 유목(떠내려온 나무)으로 지은 식당. 생선·수프·샐러드를 내고 위층은 바입니다.', 'Harbourside restaurant built of driftwood, serving fish, soups and salads, with a bar upstairs.'),
  place('husavik-bakery-1', 'husavik', 'bakery', 'Heimabakarí', 'Garðarsbraut 15, 640 Húsavík, Iceland', '항구 근처의 빵집 겸 카페. 시나몬롤 스누두르가 대표이고 일요일은 쉽니다.', 'Bakery-café near the harbour best known for its snúður cinnamon rolls; closed Sundays.'),
  place('husavik-cafe-2', 'husavik', 'cafe', 'Hérna Húsavík', 'Stórigarður 11, Húsavík', '미용실과 공간을 함께 쓰는 작은 카페. 일리 커피와 시나몬번·파니니·수프를 내고 손뜨개 소품도 팝니다.', 'Small café sharing its space with a hair salon, serving Illy coffee, cinnamon buns, paninis and soup, and selling hand-knitted woollens.'),

  // —— selfoss ——
  place('selfoss-fine_dining-1', 'selfoss', 'fine_dining', 'Messinn Selfossi', 'Brúarstræti 6a, 800 Selfoss', '아이슬란드 해산물 전문 레스토랑.', 'Restaurant specializing in Icelandic seafood.'),
  place('selfoss-fine_dining-2', 'selfoss', 'fine_dining', 'Tryggvaskáli', 'Tryggvatorg, 800 Selfoss', '1890년 지은 셀포스의 옛 건물에 있는 북유럽 요리 레스토랑.', 'Nordic restaurant in an 1890 house in Selfoss.'),
  place('selfoss-cafe-1', 'selfoss', 'fine_dining', 'Kaffi Krús', 'Austurvegur 7, 800 Selfoss, Iceland', '리모델링한 옛 가옥의 레스토랑 겸 카페. 생선·버거·피자와 디저트를 냅니다.', 'Restaurant-café in a renovated old house serving fish, burgers, pizza and desserts.', { image: '/places/selfoss-cafe-1.jpg' }),
  place('selfoss-cafe-2', 'selfoss', 'cafe', 'Konungskaffi', 'Brúarstræti 2, 800 Selfoss', '셀포스 새 구시가지의 복원 건물 카페. 1907년 덴마크 국왕 방문용으로 지은 집을 본떴고 오픈 샌드위치·사과 케이크·스키르 치즈케이크를 냅니다.', 'Café in a reconstructed building in Selfoss’s new old town, modelled on a house built for the Danish king’s 1907 visit, serving open sandwiches, apple cake and skyr cheesecake.'),
  place('selfoss-cafe-3', 'selfoss', 'cafe', 'Bókakaffið - Books & Coffee', 'Austurvegur 22, 800 Selfoss', '새 책과 헌책을 함께 파는 서점 겸 카페. 아이슬란드 남부의 유일한 서점으로 소개된 곳입니다.', 'Bookshop-café selling new and second-hand books, described as the only bookshop in south Iceland.'),
  place('selfoss-cafe-4', 'selfoss', 'cafe', 'Byrja', 'Austurvegur 3-5, 800 Selfoss', '로터리 옆 크로난 건물의 브런치 카페. 에그 베네딕트·수프·버거를 내고 비건·글루텐프리 메뉴와 아이 놀이 공간이 있습니다.', 'Brunch café in the Krónan building by the roundabout with eggs Benedict, soups and burgers, vegan and gluten-free options and a kids’ play corner.'),

  // —— vestmannaeyjar: restaurants, bakeries and cafés (2026-11-14) ——
  place('vestmannaeyjar-fine_dining-1', 'vestmannaeyjar', 'fine_dining', 'Vöruhúsið', 'Skólavegur 1, Vestmannaeyjar', '베스트만나에이야르의 레스토랑. 구글 지도 평점 4.9.', 'Restaurant in Vestmannaeyjar. Rated 4.9 on Google Maps.'),
  place('vestmannaeyjar-fine_dining-2', 'vestmannaeyjar', 'fine_dining', 'Slippurinn', 'Strandvegur 76, Vestmannaeyjar', '베스트만나에이야르의 아이슬란드 요리 식당. 구글 지도 평점 4.8.', 'Icelandic restaurant in Vestmannaeyjar. Rated 4.8 on Google Maps.'),
  place('vestmannaeyjar-fine_dining-3', 'vestmannaeyjar', 'fine_dining', 'Tanginn', 'Básaskersbryggja 8, Vestmannaeyjar', '베스트만나에이야르의 항구 식당. 구글 지도 평점 4.4.', 'Harbourside diner in Vestmannaeyjar. Rated 4.4 on Google Maps.'),
  place('vestmannaeyjar-fine_dining-4', 'vestmannaeyjar', 'fine_dining', 'Kráin - Local Restaurant', 'Bárustígur 1, Vestmannaeyjar', '베스트만나에이야르의 레스토랑. 구글 지도 평점 4.7.', 'Restaurant in Vestmannaeyjar. Rated 4.7 on Google Maps.'),
  place('vestmannaeyjar-fine_dining-5', 'vestmannaeyjar', 'fine_dining', 'The Brothers Brewery', 'Bárustígur 7, Vestmannaeyjar', '베스트만나에이야르의 브루펍. 구글 지도 평점 4.8.', 'Brewpub in Vestmannaeyjar. Rated 4.8 on Google Maps.'),
  place('vestmannaeyjar-bakery-1', 'vestmannaeyjar', 'bakery', 'Vigtin bakhús', 'Strandvegur 30, Vestmannaeyjar', '베스트만나에이야르의 빵집 겸 카페. 구글 지도 평점 4.6.', 'Bakery and café in Vestmannaeyjar. Rated 4.6 on Google Maps.'),

  // —— hofn: restaurants, bakeries and cafés (2026-11-14) ——
  place('hofn-fine_dining-1', 'hofn', 'fine_dining', 'Pakkhús Restaurant', 'Krosseyjarvegur 3, Höfn', '회픈의 랑구스틴(아이슬란드 랍스터) 요리로 유명한 식당. 구글 지도 평점 4.7.', 'Restaurant known for langoustine in Höfn. Rated 4.7 on Google Maps.'),
  place('hofn-fine_dining-2', 'hofn', 'fine_dining', 'Kaffi Hornið', 'Hafnarbraut 42, Höfn', '회픈의 카페 겸 식당. 구글 지도 평점 4.5.', 'Café restaurant in Höfn. Rated 4.5 on Google Maps.'),
  place('hofn-fine_dining-3', 'hofn', 'fine_dining', 'Birki Restaurant', 'Hafnarbraut 4, Höfn', '회픈의 레스토랑. 구글 지도 평점 4.7.', 'Restaurant in Höfn. Rated 4.7 on Google Maps.'),
  place('hofn-fine_dining-4', 'hofn', 'fine_dining', 'Hafnarbúðin', 'Ránarslóð 2a, Höfn', '회픈의 항구 식당. 구글 지도 평점 4.7.', 'Harbourside diner in Höfn. Rated 4.7 on Google Maps.'),
  place('hofn-fine_dining-5', 'hofn', 'fine_dining', 'Heppa Restaurant', 'Heppuvegur 6, Höfn', '회픈의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Höfn. Rated 4.5 on Google Maps.'),
  place('hofn-bakery-1', 'hofn', 'bakery', 'Ljósdís Kaffihús & Bakarí', 'Hafnarbraut 34, Höfn', '회픈의 빵집 겸 카페. 구글 지도 평점 4.9.', 'Bakery and café in Höfn. Rated 4.9 on Google Maps.'),

  // —— stykkisholmur: restaurants, bakeries and cafés (2026-11-14) ——
  place('stykkisholmur-fine_dining-1', 'stykkisholmur', 'fine_dining', 'Sjávarpakkhúsið', 'Hafnargata 2, Stykkishólmur', '스티키스홀뮈르의 해산물 식당. 구글 지도 평점 4.8.', 'Seafood restaurant in Stykkishólmur. Rated 4.8 on Google Maps.'),
  place('stykkisholmur-fine_dining-2', 'stykkisholmur', 'fine_dining', 'Narfeyrarstofa', 'Aðalgata 3, Stykkishólmur', '스티키스홀뮈르의 아이슬란드 요리 식당. 구글 지도 평점 4.6.', 'Icelandic restaurant in Stykkishólmur. Rated 4.6 on Google Maps.'),
  place('stykkisholmur-bakery-1', 'stykkisholmur', 'bakery', 'Nesbrauð', 'Nesvegur, Stykkishólmur', '스티키스홀뮈르의 빵집. 구글 지도 평점 4.6.', 'Bakery in Stykkishólmur. Rated 4.6 on Google Maps.'),

  // —— isafjordur: restaurants, bakeries and cafés (2026-11-14) ——
  place('isafjordur-fine_dining-1', 'isafjordur', 'fine_dining', 'Húsið', 'Hrannargata 2, Ísafjörður', '이사피외르뒤르의 아이슬란드 요리 식당. 구글 지도 평점 4.7.', 'Icelandic restaurant in Ísafjörður. Rated 4.7 on Google Maps.'),
  place('isafjordur-fine_dining-2', 'isafjordur', 'fine_dining', 'Thai Tawee', 'Hafnarstræti 9, Ísafjörður', '이사피외르뒤르의 태국 요리 식당. 구글 지도 평점 4.7.', 'Thai restaurant in Ísafjörður. Rated 4.7 on Google Maps.'),
  place('isafjordur-bakery-1', 'isafjordur', 'bakery', 'Kaffihús Bakarans', 'Hafnarstræti 14, Ísafjörður', '이사피외르뒤르의 빵집 겸 카페. 구글 지도 평점 4.5.', 'Bakery and café in Ísafjörður. Rated 4.5 on Google Maps.'),
  place('isafjordur-cafe-1', 'isafjordur', 'cafe', 'Heimabyggð', 'Aðalstræti 22b, Ísafjörður', '이사피외르뒤르의 카페. 구글 지도 평점 4.7.', 'Café in Ísafjörður. Rated 4.7 on Google Maps.'),

  // —— myvatn: restaurants, bakeries and cafés (2026-11-14) ——
  place('myvatn-fine_dining-1', 'myvatn', 'fine_dining', 'Mylla Restaurant', 'Reykjahlíð, Mývatn', '미바튼의 아이슬란드 요리 식당. 구글 지도 평점 4.4.', 'Icelandic restaurant in Mývatn. Rated 4.4 on Google Maps.'),
  place('myvatn-fine_dining-2', 'myvatn', 'fine_dining', 'Eldey Restaurant', 'Olnbogaás, Mývatn', '미바튼의 아이슬란드 요리 식당. 구글 지도 평점 4.6.', 'Icelandic restaurant in Mývatn. Rated 4.6 on Google Maps.'),

  // —— seydisfjordur: restaurants, bakeries and cafés (2026-11-14) ——
  place('seydisfjordur-fine_dining-1', 'seydisfjordur', 'fine_dining', 'Aldan Restaurant', 'Norðurgata 2, Seyðisfjörður', '세이디스피외르뒤르의 아이슬란드 요리 식당. 구글 지도 평점 4.6.', 'Icelandic restaurant in Seyðisfjörður. Rated 4.6 on Google Maps.'),
  place('seydisfjordur-fine_dining-2', 'seydisfjordur', 'fine_dining', 'Skaftfell Bistro', 'Austurvegur 42, Seyðisfjörður', '세이디스피외르뒤르의 비스트로. 구글 지도 평점 4.6.', 'Bistro in Seyðisfjörður. Rated 4.6 on Google Maps.'),

  // —— reykjanesbaer: restaurants, bakeries and cafés (2026-11-28) ——
  place('reykjanesbaer-fine_dining-1', 'reykjanesbaer', 'fine_dining', 'Oriento', 'Hafnargata, Reykjanesbær, Iceland', '지중해 요리 레스토랑. 구글 지도 평점 4.7(리뷰 770개).', 'Mediterranean restaurant. Rated 4.7 on Google Maps (770 reviews).'),
  place('reykjanesbaer-fine_dining-2', 'reykjanesbaer', 'fine_dining', 'Antons Mamma Mia', 'Hafnargata 18, Reykjanesbær, Iceland', '이탈리아 요리 레스토랑. 구글 지도 평점 4.5(리뷰 549개).', 'Italian restaurant. Rated 4.5 on Google Maps (549 reviews).'),
  place('reykjanesbaer-fine_dining-3', 'reykjanesbaer', 'fine_dining', 'NAN DEN Shawarma', 'Hafnargata 28, Reykjanesbær, Iceland', '샤와르마 식당. 구글 지도 평점 4.7(리뷰 243개).', 'Shawarma restaurant. Rated 4.7 on Google Maps (243 reviews).'),
  place('reykjanesbaer-fine_dining-4', 'reykjanesbaer', 'fine_dining', 'Veitingastaðurinn Ráin', 'Hafnargata 19, Reykjanesbær, Iceland', '레스토랑. 구글 지도 평점 4.4(리뷰 521개).', 'Restaurant. Rated 4.4 on Google Maps (521 reviews).'),
  place('reykjanesbaer-fine_dining-5', 'reykjanesbaer', 'fine_dining', 'LiBRARY bistro/bar', 'Hafnargata 57, Reykjanesbær, Iceland', '비스트로. 구글 지도 평점 4.3(리뷰 560개).', 'Bistro. Rated 4.3 on Google Maps (560 reviews).'),
  place('reykjanesbaer-bakery-1', 'reykjanesbaer', 'bakery', 'Sigurjónsbakarí', 'Hólmgarður 2, Reykjanesbær, Iceland', '빵집. 구글 지도 평점 4.7(리뷰 461개).', 'Bakery. Rated 4.7 on Google Maps (461 reviews).'),
  place('reykjanesbaer-bakery-2', 'reykjanesbaer', 'bakery', 'Kökulist Bakery', 'Hólagata 17, Reykjanesbær, Iceland', '빵집. 구글 지도 평점 4.6(리뷰 1174개).', 'Bakery. Rated 4.6 on Google Maps (1174 reviews).'),
  place('reykjanesbaer-cafe-1', 'reykjanesbaer', 'cafe', 'Lava sweets & cafe', 'Hafnargata 23, Reykjanesbær, Iceland', '카페. 구글 지도 평점 4.9(리뷰 260개).', 'Café. Rated 4.9 on Google Maps (260 reviews).'),

  // —— borgarnes: restaurants, bakeries and cafés (2026-11-28) ——
  place('borgarnes-fine_dining-1', 'borgarnes', 'fine_dining', 'Bara Borgarnes', 'Brákarbraut 3, Borgarnes, Iceland', '레스토랑. 구글 지도 평점 4.8(리뷰 971개).', 'Restaurant. Rated 4.8 on Google Maps (971 reviews).'),
  place('borgarnes-fine_dining-2', 'borgarnes', 'fine_dining', 'Þúfan - pizzeria & espresso bar', 'Hrafnaklettur 1b, Borgarnes, Iceland', '피자 식당. 구글 지도 평점 5.0(리뷰 309개).', 'Pizza restaurant. Rated 5.0 on Google Maps (309 reviews).'),
  place('borgarnes-fine_dining-3', 'borgarnes', 'fine_dining', 'Settlement Centre Restaurant', 'Brákarbraut 13-15, Borgarnes, Iceland', '아이슬란드 요리 레스토랑. 구글 지도 평점 4.5(리뷰 222개).', 'Icelandic restaurant. Rated 4.5 on Google Maps (222 reviews).'),
  place('borgarnes-fine_dining-4', 'borgarnes', 'fine_dining', 'Dirty Burger And Ribs', 'Brúartorg 6, Borgarnes, Iceland', '햄버거 식당. 구글 지도 평점 4.5(리뷰 481개).', 'Burger restaurant. Rated 4.5 on Google Maps (481 reviews).'),
  place('borgarnes-fine_dining-5', 'borgarnes', 'fine_dining', 'Grill 66 Borgarnesi', 'Brúartorg 8, Borgarnes, Iceland', '레스토랑. 구글 지도 평점 4.3(리뷰 144개).', 'Restaurant. Rated 4.3 on Google Maps (144 reviews).'),
  place('borgarnes-bakery-1', 'borgarnes', 'bakery', 'Geirabakarí Kaffihús', 'Borgarnes, Iceland', '빵집. 구글 지도 평점 4.4(리뷰 816개).', 'Bakery. Rated 4.4 on Google Maps (816 reviews).'),
  place('borgarnes-cafe-1', 'borgarnes', 'cafe', 'Blómasetrið - Kaffi Kyrrð', 'Borgarnes, Iceland', '카페. 구글 지도 평점 4.8(리뷰 1052개).', 'Café. Rated 4.8 on Google Maps (1052 reviews).'),

  // —— grundarfjordur: restaurants, bakeries and cafés (2026-11-28) ——
  place('grundarfjordur-fine_dining-1', 'grundarfjordur', 'fine_dining', 'Harbour Cafe', 'Nesvegur 5, Grundarfjörður, Iceland', '아이슬란드 요리 레스토랑. 구글 지도 평점 4.8(리뷰 2588개).', 'Icelandic restaurant. Rated 4.8 on Google Maps (2588 reviews).'),
  place('grundarfjordur-fine_dining-2', 'grundarfjordur', 'fine_dining', 'Mæstro - Street food', 'Grundargata, Grundarfjörður, Iceland', '길거리 음식 식당. 구글 지도 평점 4.7(리뷰 220개).', 'Street-food restaurant. Rated 4.7 on Google Maps (220 reviews).'),
  place('grundarfjordur-cafe-1', 'grundarfjordur', 'cafe', 'Valeria specialty coffee, art & souvenirs', 'Grundargata 24, Grundarfjörður, Iceland', '직접 원두를 볶는 커피숍. 구글 지도 평점 4.9(리뷰 959개).', 'Coffee roastery café. Rated 4.9 on Google Maps (959 reviews).'),
  place('grundarfjordur-cafe-2', 'grundarfjordur', 'cafe', 'Græna kompaníið', 'Hrannarstígur 5, Grundarfjörður, Iceland', '카페. 구글 지도 평점 4.7(리뷰 270개).', 'Café. Rated 4.7 on Google Maps (270 reviews).'),

  // —— holmavik: restaurants, bakeries and cafés (2026-11-28) ——
  place('holmavik-fine_dining-1', 'holmavik', 'fine_dining', 'Café Riis', 'Hafnarbraut 39, Hólmavík, Iceland', '아이슬란드 요리 레스토랑. 구글 지도 평점 4.6(리뷰 691개).', 'Icelandic restaurant. Rated 4.6 on Google Maps (691 reviews).'),
  place('holmavik-fine_dining-2', 'holmavik', 'fine_dining', 'Kaffi Galdur', 'Höfðagata 8-10, Hólmavík, Iceland', '해산물 레스토랑. 구글 지도 평점 4.5(리뷰 122개).', 'Seafood restaurant. Rated 4.5 on Google Maps (122 reviews).'),

  // —— hvammstangi: restaurants, bakeries and cafés (2026-11-28) ——
  place('hvammstangi-fine_dining-1', 'hvammstangi', 'fine_dining', 'Sjávarborg Restaurant', 'Strandgata 1, Hvammstangi, Iceland', '레스토랑. 구글 지도 평점 4.6(리뷰 1357개).', 'Restaurant. Rated 4.6 on Google Maps (1357 reviews).'),
  place('hvammstangi-fine_dining-2', 'hvammstangi', 'fine_dining', 'Selur matstofa', 'Hvammstangabraut 40, Hvammstangi, Iceland', '레스토랑. 구글 지도 평점 4.5(리뷰 153개).', 'Restaurant. Rated 4.5 on Google Maps (153 reviews).'),

  // —— saudarkrokur: restaurants, bakeries and cafés (2026-11-28) ——
  place('saudarkrokur-fine_dining-1', 'saudarkrokur', 'fine_dining', 'Sauðá', 'Sauðárhlíð 70, Sauðárkrókur, Iceland', '아이슬란드 요리 레스토랑. 구글 지도 평점 4.5(리뷰 129개).', 'Icelandic restaurant. Rated 4.5 on Google Maps (129 reviews).'),
  place('saudarkrokur-fine_dining-2', 'saudarkrokur', 'fine_dining', 'Hard Wok Cafe', 'Aðalgata 8, Sauðárkrókur, Iceland', '레스토랑. 구글 지도 평점 4.4(리뷰 419개).', 'Restaurant. Rated 4.4 on Google Maps (419 reviews).'),
  place('saudarkrokur-fine_dining-3', 'saudarkrokur', 'fine_dining', 'Kaffi Krókur', 'Aðalgata 16, Sauðárkrókur, Iceland', '아이슬란드 요리 레스토랑. 구글 지도 평점 4.3(리뷰 349개).', 'Icelandic restaurant. Rated 4.3 on Google Maps (349 reviews).'),
  place('saudarkrokur-bakery-1', 'saudarkrokur', 'bakery', 'Sauðárkróksbakarí', 'Aðalgata 5, Sauðárkrókur, Iceland', '빵집. 구글 지도 평점 4.7(리뷰 406개).', 'Bakery. Rated 4.7 on Google Maps (406 reviews).'),

  // —— siglufjordur: restaurants, bakeries and cafés (2026-11-28) ——
  place('siglufjordur-bakery-1', 'siglufjordur', 'bakery', 'Aðalbakarí', 'Aðalgata 26, Siglufjörður, Iceland', '빵집. 구글 지도 평점 4.7(리뷰 356개).', 'Bakery. Rated 4.7 on Google Maps (356 reviews).'),

  // —— dalvik: restaurants, bakeries and cafés (2026-11-28) ——
  place('dalvik-fine_dining-1', 'dalvik', 'fine_dining', 'Baccalá Bar', 'Hauganes, Iceland', '하우가네스에 있는 해산물 레스토랑. 구글 지도 평점 4.8(리뷰 512개).', 'Seafood restaurant in Hauganes. Rated 4.8 on Google Maps (512 reviews).'),
  place('dalvik-cafe-1', 'dalvik', 'cafe', 'Gísli Eiríkur Helgi Kaffihús Bakkabræðra', 'Grundargata 1, Dalvík, Iceland', '카페. 구글 지도 평점 4.9(리뷰 887개).', 'Café. Rated 4.9 on Google Maps (887 reviews).'),

  // —— egilsstadir: restaurants, bakeries and cafés (2026-11-28) ——
  place('egilsstadir-fine_dining-1', 'egilsstadir', 'fine_dining', 'Frú Nielsen', 'Tjarnarbraut 1, Egilsstaðir, Iceland', '건강식 식당. 구글 지도 평점 4.8(리뷰 96개).', 'Health-food restaurant. Rated 4.8 on Google Maps (96 reviews).'),
  place('egilsstadir-fine_dining-2', 'egilsstadir', 'fine_dining', 'Kjöt & fiskur - Fresh Fish', 'Kaupvangur, Egilsstaðir, Iceland', '피시 앤드 칩스 식당. 구글 지도 평점 4.7(리뷰 577개).', 'Fish-and-chips restaurant. Rated 4.7 on Google Maps (577 reviews).'),
  place('egilsstadir-fine_dining-3', 'egilsstadir', 'fine_dining', 'Askur Pizzeria', 'Fagradalsbraut 25, Egilsstaðir, Iceland', '피자 식당. 구글 지도 평점 4.6(리뷰 1645개).', 'Pizza restaurant. Rated 4.6 on Google Maps (1645 reviews).'),
  place('egilsstadir-fine_dining-4', 'egilsstadir', 'fine_dining', 'Obo Diner', 'Fagradalsbraut 13, Egilsstaðir, Iceland', '다이너. 구글 지도 평점 4.6(리뷰 269개).', 'Diner. Rated 4.6 on Google Maps (269 reviews).'),
  place('egilsstadir-cafe-1', 'egilsstadir', 'cafe', 'Bókakaffi Hlöðum', 'Fellabær, Iceland', '페들라바이르에 있는 카페. 구글 지도 평점 4.7(리뷰 291개).', 'Café in Fellabær. Rated 4.7 on Google Maps (291 reviews).'),

  // —— djupivogur: restaurants, bakeries and cafés (2026-11-28) ——
  place('djupivogur-fine_dining-1', 'djupivogur', 'fine_dining', 'Hafið bistro', 'Vogaland 2, Djúpivogur, Iceland', '비스트로. 구글 지도 평점 4.4(리뷰 331개).', 'Bistro. Rated 4.4 on Google Maps (331 reviews).'),
  place('djupivogur-fine_dining-2', 'djupivogur', 'fine_dining', 'Restaurant Framtíð', 'Vogaland 4, Djúpivogur, Iceland', '아이슬란드 요리 레스토랑. 구글 지도 평점 4.4(리뷰 243개).', 'Icelandic restaurant. Rated 4.4 on Google Maps (243 reviews).'),
  place('djupivogur-cafe-1', 'djupivogur', 'cafe', 'Langabúð - Café', 'Búð 1, Djúpivogur, Iceland', '카페. 구글 지도 평점 4.5(리뷰 648개).', 'Café. Rated 4.5 on Google Maps (648 reviews).'),

  // —— hveragerdi: restaurants, bakeries and cafés (2026-11-28) ——
  place('hveragerdi-fine_dining-1', 'hveragerdi', 'fine_dining', 'Hofland Eatery', 'Sunnumörk 2, Hveragerði, Iceland', '피자 식당. 구글 지도 평점 4.8(리뷰 351개).', 'Pizza restaurant. Rated 4.8 on Google Maps (351 reviews).'),
  place('hveragerdi-fine_dining-2', 'hveragerdi', 'fine_dining', 'Ölverk Pizza & Brewery', 'Breiðamörk 2, Hveragerði, Iceland', '직접 맥주를 빚는 양조장 식당. 구글 지도 평점 4.6(리뷰 983개).', 'Brewpub restaurant. Rated 4.6 on Google Maps (983 reviews).'),
  place('hveragerdi-fine_dining-3', 'hveragerdi', 'fine_dining', 'Matkráin', 'Breiðamörk 10, Hveragerði, Iceland', '덴마크 요리 식당. 구글 지도 평점 4.5(리뷰 288개).', 'Danish restaurant. Rated 4.5 on Google Maps (288 reviews).'),
  place('hveragerdi-fine_dining-4', 'hveragerdi', 'fine_dining', 'Frost & Fire restaurant', 'Hverhamar, Hveragerði, Iceland', '아이슬란드 요리 레스토랑. 구글 지도 평점 4.5(리뷰 86개).', 'Icelandic restaurant. Rated 4.5 on Google Maps (86 reviews).'),
  place('hveragerdi-bakery-1', 'hveragerdi', 'bakery', 'Almar Bakari', 'Sunnumörk 2, Hveragerði, Iceland', '빵집. 구글 지도 평점 4.6(리뷰 602개).', 'Bakery. Rated 4.6 on Google Maps (602 reviews).'),
  place('hveragerdi-cafe-1', 'hveragerdi', 'cafe', 'Rósakaffi', 'Breiðamörk 3, Hveragerði, Iceland', '카페. 구글 지도 평점 4.6(리뷰 229개).', 'Café. Rated 4.6 on Google Maps (229 reviews).'),
  place('hveragerdi-cafe-2', 'hveragerdi', 'cafe', 'Reykjadalur Café', 'Reykjadalur, Hveragerði, Iceland', '카페. 구글 지도 평점 4.6(리뷰 283개).', 'Café. Rated 4.6 on Google Maps (283 reviews).'),

  // —— fludir: restaurants, bakeries and cafés (2026-11-28) ——
  place('fludir-fine_dining-1', 'fludir', 'fine_dining', 'Farmers Bistro', 'Garðastígur 8, Flúðir, Iceland', '비스트로. 구글 지도 평점 4.7(리뷰 849개).', 'Bistro. Rated 4.7 on Google Maps (849 reviews).'),
  place('fludir-fine_dining-2', 'fludir', 'fine_dining', 'Restaurant Minilik', 'Flúðir, Iceland', '에티오피아 요리 식당. 구글 지도 평점 4.6(리뷰 555개).', 'Ethiopian restaurant. Rated 4.6 on Google Maps (555 reviews).'),
  place('fludir-bakery-1', 'fludir', 'bakery', 'Flúða Bakarí', 'Smiðjustígur 10, Flúðir, Iceland', '빵집. 구글 지도 평점 5.0(리뷰 215개).', 'Bakery. Rated 5.0 on Google Maps (215 reviews).'),

  // —— hvolsvollur: restaurants, bakeries and cafés (2026-11-28) ——
  place('hvolsvollur-fine_dining-1', 'hvolsvollur', 'fine_dining', 'Midgard Restaurant', 'Dufþaksbraut 14, Hvolsvöllur, Iceland', '레스토랑. 구글 지도 평점 4.9(리뷰 618개).', 'Restaurant. Rated 4.9 on Google Maps (618 reviews).'),
  place('hvolsvollur-fine_dining-2', 'hvolsvollur', 'fine_dining', 'Hotel Hvolsvöllur Restaurant & Bar', 'Hlíðarvegur 9, Hvolsvöllur, Iceland', '레스토랑. 구글 지도 평점 4.7(리뷰 80개).', 'Restaurant. Rated 4.7 on Google Maps (80 reviews).'),
  place('hvolsvollur-fine_dining-3', 'hvolsvollur', 'fine_dining', 'Valhalla Restaurant', 'Hlíðarvegur 14, Hvolsvöllur, Iceland', '레스토랑. 구글 지도 평점 4.4(리뷰 1245개).', 'Restaurant. Rated 4.4 on Google Maps (1245 reviews).'),
  place('hvolsvollur-fine_dining-4', 'hvolsvollur', 'fine_dining', 'Hygge Restaurant & Bar', 'Hellishólar, Iceland', '헤들리스홀라르에 있는 레스토랑. 구글 지도 평점 4.8(리뷰 1322개).', 'Restaurant in Hellishólar. Rated 4.8 on Google Maps (1322 reviews).'),

  // —— kirkjubaejarklaustur: restaurants, bakeries and cafés (2026-11-28) ——
  place('kirkjubaejarklaustur-fine_dining-1', 'kirkjubaejarklaustur', 'fine_dining', 'Klaustur Restaurant & Bar', 'Kirkjubæjarklaustur, Iceland', '아이슬란드 요리 레스토랑. 구글 지도 평점 4.6(리뷰 217개).', 'Icelandic restaurant. Rated 4.6 on Google Maps (217 reviews).'),
  place('kirkjubaejarklaustur-fine_dining-2', 'kirkjubaejarklaustur', 'fine_dining', 'Systrakaffi', 'Kirkjubæjarklaustur, Iceland', '아이슬란드 요리 레스토랑. 구글 지도 평점 4.5(리뷰 1896개).', 'Icelandic restaurant. Rated 4.5 on Google Maps (1896 reviews).'),
]
