import { place } from './placeFactory'
import type { Place } from '../types'

export const placesATExtra: Place[] = [
  // —— vienna ——
  place('vienna-fine_dining-1', 'vienna', 'fine_dining', 'Steirereck', 'Am Heumarkt 2A, Vienna', '도나우 운하변 미슐랭 파인 다이닝.', 'Canal-side Michelin fine dining.', { michelin: 'star3', image: '/places/vienna-fine_dining-1.jpg' }),
  place('vienna-fine_dining-2', 'vienna', 'fine_dining', 'Restaurant TIAN', 'Himmelpfortgasse 23, Vienna', '채식 파인 다이닝.', 'Vegetarian fine dining.', { michelin: 'star1' }),
  place('vienna-fine_dining-3', 'vienna', 'fine_dining', 'Mraz & Sohn', 'Wallensteinstraße 59, 1200 Vienna, Austria', '창의 코스 다이닝.', 'Creative tasting menus.', { michelin: 'star2' }),
  place('vienna-fine_dining-4', 'vienna', 'fine_dining', 'Plachutta Wollzeile', 'Wollzeile 38, 1010 Wien', '타펠슈피츠 클래식.', 'Classic Tafelspitz.', { image: '/places/vienna-fine_dining-4.jpg' }),
  place('vienna-fine_dining-5', 'vienna', 'fine_dining', 'Figlmüller', 'Wollzeile 5, 1010 Wien', '1905년부터 슈니첼을 내 온 식당. 점심에는 자리가 차니 예약을 권합니다.', 'Serving schnitzel since 1905; book ahead as lunch fills up.', { image: '/places/vienna-fine_dining-5.jpg' }),
  place('vienna-bakery-2', 'vienna', 'bakery', 'Der Mann', 'Mariahilfer Straße 1, 1060 Wien', '빈 곳곳에 지점이 있는 빵집 체인.', 'Bakery chain with branches across Vienna.'),
  place('vienna-bakery-3', 'vienna', 'bakery', 'Demel', 'Kohlmarkt 14, 1010 Wien', '호프부르크 근처의 옛 황실 납품 제과점(1786년 창업).', 'Former imperial court confectioner near the Hofburg, founded 1786.', { image: '/places/vienna-bakery-3.jpg' }),
  place('vienna-bakery-4', 'vienna', 'bakery', 'Gragger & Cie', 'Spiegelgasse 23, 1010 Wien', '매장 안 장작 화덕에서 사워도우를 굽는 빵집.', 'Bakery baking sourdough in an on-site wood-fired oven.'),
  place('vienna-bakery-5', 'vienna', 'bakery', 'Kurkonditorei Oberlaa', 'Neuer Markt 16, 1010 Wien', '빈에 여러 지점을 둔 제과점 체인의 노이어 마르크트 본점.', 'Neuer Markt flagship of a Viennese pâtisserie chain.', { image: '/places/vienna-bakery-5.jpg' }),
  place('vienna-cafe-1', 'vienna', 'cafe', 'Café Central', 'Herrengasse 14, 1010 Wien', '1876년 문을 연 빈의 대표 커피하우스. 2026년 3월부터 대대적인 보수로 닫고 그해 겨울 다시 열 예정이라는 보도가 있으니 가기 전에 확인하세요(그동안 프라이웅 3에 임시 매장 운영).', 'Vienna’s landmark coffee house, opened 1876. Reported closed for a major renovation from March 2026 with reopening planned for winter 2026—check before going (a pop-up runs at Freyung 3 meanwhile).', { image: '/places/vienna-cafe-1.jpg' }),
  place('vienna-cafe-2', 'vienna', 'cafe', 'Café Sacher', 'Philharmonikerstraße 4, 1010 Wien', '자허 호텔 안의 카페. 원조 자허토르테로 유명합니다.', 'Café inside Hotel Sacher, home of the original Sachertorte.', { image: '/places/vienna-cafe-2.jpg' }),
  place('vienna-cafe-3', 'vienna', 'cafe', 'Café Hawelka', 'Dorotheergasse 6, 1010 Wien', '1939년부터 하벨카 가족이 운영하는 커피하우스. 저녁 8시부터 부흐텔른을 냅니다.', 'Coffee house run by the Hawelka family since 1939; Buchteln served from 8 pm.', { image: '/places/vienna-cafe-3.jpg' }),
  place('vienna-cafe-4', 'vienna', 'cafe', 'Balthasar Kaffee Bar', 'Praterstraße 38, 1020 Wien', '스페셜티 커피.', 'Specialty coffee.'),
  place('vienna-cafe-5', 'vienna', 'cafe', 'Kaffemik', 'Zollergasse 5, 1070 Wien', '7구의 모던 스페셜티 커피.', "Modern specialty coffee in Vienna's 7th district.", { image: '/places/vienna-cafe-5.jpg' }),
  place('vienna-korean-1', 'vienna', 'korean', 'Yori', 'Wiesingerstraße 8, 1010 Wien', '1구의 한식당. 테이블 바비큐와 라면·찌개·덮밥을 냅니다.', 'Korean restaurant in the 1st district with tabletop barbecue, ramyeon, stews and rice dishes.'),
  place('vienna-korean-2', 'vienna', 'korean', 'Vienna Bunsik', 'Fasangasse 15, 1030 Wien', '떡볶이·김밥·라면 등 가족 운영 분식.', 'Family-run bunsik counter — tteokbokki, kimbap, ramyeon.'),
  place('vienna-korean-3', 'vienna', 'korean', 'Das Kimchi', 'Marxergasse 15, 1030 Wien', '란트슈트라세의 한식당. 비빔밥·불고기·바비큐와 채식 메뉴가 있습니다.', 'Landstraße Korean restaurant with bibimbap, bulgogi, barbecue and vegetarian dishes.'),
  place('vienna-korean-4', 'vienna', 'korean', 'Sang Sang', 'Gumpendorferstraße 14, 1060 Wien', '6구의 아시아 식당. 한식과 스시를 냅니다.', 'Asian restaurant in the 6th district serving Korean food and sushi.'),
  place('vienna-korean-5', 'vienna', 'korean', 'Gaon', 'Apollogasse 20/1, 1070 Wien', '7구의 한식당. 비빔밥·불고기·테이블 바비큐와 물냉면이 있습니다.', 'Korean restaurant in the 7th district with bibimbap, bulgogi, tabletop barbecue and cold noodles.'),

  // —— salzburg ——
  place('salzburg-fine_dining-1', 'salzburg', 'fine_dining', 'Esszimmer', 'Müllner Hauptstraße 33, 5020 Salzburg', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.', { michelin: 'star1' }),
  place('salzburg-fine_dining-2', 'salzburg', 'fine_dining', 'St. Peter Stiftskulinarium', 'Sankt-Peter-Bezirk 1/4, 5020 Salzburg', '803년 문헌에 처음 등장하는 유럽에서 가장 오래된 레스토랑, 잘츠부르거 노케를로 유명.', 'Europe\'s oldest restaurant, first documented in 803, famous for its Salzburger Nockerl.'),
  place('salzburg-fine_dining-3', 'salzburg', 'fine_dining', 'Ikarus', 'Wilhelm-Spazier-Straße 7A, Hangar-7, 5020 Salzburg', '매달 세계적인 셰프가 바뀌는 미슐랭 2스타 레스토랑, 항가-7에 위치.', 'Two-Michelin-star restaurant in Hangar-7 with a rotating monthly guest chef.', { michelin: 'star2' }),
  place('salzburg-fine_dining-4', 'salzburg', 'fine_dining', 'Zum Eulenspiegel', 'Hagenauerplatz 2, 5020 Salzburg', '모차르트 생가 맞은편, 미로 같은 옛 가옥의 전통 오스트리아 레스토랑.', 'Traditional Austrian restaurant in a warren-like old house opposite Mozart\'s birthplace.', { image: '/places/salzburg-fine_dining-4.jpg' }),
  place('salzburg-bakery-1', 'salzburg', 'bakery', 'The Bakery by Didi Maier', 'Europastraße 1 (Europark), 5020 Salzburg', '유로파크 쇼핑센터 안의 1950년대풍 베이커리 카페.', '1950s-style bakery-café inside the Europark shopping centre.'),
  place('salzburg-bakery-2', 'salzburg', 'bakery', 'Café-Konditorei Fürst', 'Brodgasse 13, 5020 Salzburg', '1884년부터 이어온 구시가 제과점. 오리지널 모차르트쿠겔을 지금도 매일 손으로 만듭니다.', 'Old Town pastry shop since 1884, still hand-making the original Mozartkugel daily.'),
  place('salzburg-cafe-1', 'salzburg', 'cafe', 'Café Tomaselli', 'Alter Markt 9, 5020 Salzburg', '알터 마르크트의 오래된 커피하우스. 예약을 받지 않습니다.', 'Historic coffee house on the Alter Markt; no reservations.', { image: '/places/salzburg-cafe-1.jpg' }),
  place('salzburg-cafe-2', 'salzburg', 'cafe', 'Café Bazar', 'Schwarzstraße 3, 5020 Salzburg', '1882년부터 카페가 있던 잘차흐 강변 건물의 커피하우스. 아침 식사를 종일 냅니다.', 'Riverside coffee house in a building home to a café since 1882; breakfast all day.', { image: '/places/salzburg-cafe-2.jpg' }),
  place('salzburg-cafe-3', 'salzburg', 'cafe', 'Kaffee-Alchemie', 'Rudolfskai 38, 5020 Salzburg', '잘츠부르크 스페셜티 커피 씬을 대표하는 로스터리 카페.', 'Roastery café at the forefront of Salzburg\'s specialty coffee scene.'),
  place('salzburg-cafe-4', 'salzburg', 'cafe', '220 Grad', 'Chiemseegasse 5, 5020 Salzburg', '축제극장 인근의 자가 로스팅 카페.', 'House-roasting café near the Festspielhaus.'),

  // —— innsbruck ——
  place('innsbruck-fine_dining-1', 'innsbruck', 'fine_dining', 'Ottoburg', 'Herzog-Friedrich-Straße 1, 6020 Innsbruck', '구시가 옛 탑 건물 여러 층에 자리한 티롤 요리 식당. 인 강과 황금지붕이 보입니다.', 'Tyrolean restaurant over several floors of an old tower, with views of the Inn and the Golden Roof.', { image: '/places/innsbruck-fine_dining-1.jpg' }),
  place('innsbruck-fine_dining-2', 'innsbruck', 'fine_dining', 'Die Wilderin', 'Seilergasse 5, 6020 Innsbruck', '제철 티롤 재료로 매일 바뀌는 메뉴를 내는 구시가 식당. 통째로 들여온 고기를 직접 손질합니다. 예약을 권합니다.', 'Old Town restaurant with a daily menu from seasonal Tyrolean produce, butchering whole animals in-house; booking recommended.'),
  place('innsbruck-fine_dining-3', 'innsbruck', 'fine_dining', 'Lichtblick', 'Maria-Theresien-Straße 18 (Rathausgalerien, 7th floor), 6020 Innsbruck', '라트하우스갈레리엔 7층의 레스토랑. 낮에는 카페, 저녁에는 코스 요리이고 지붕과 알프스가 보입니다.', 'Seventh-floor restaurant in the Rathausgalerien—café by day, set menus by night—with views over rooftops and the Alps.'),
  place('innsbruck-fine_dining-4', 'innsbruck', 'fine_dining', 'Weinhaus Happ', 'Herzog-Friedrich-Straße 14, 6020 Innsbruck', '15세기부터 와인을 팔아 온 구시가 호텔 겸 식당. 티롤 요리를 냅니다.', 'Old Town hotel-restaurant serving wine since the 15th century, with Tyrolean dishes.', { image: '/places/innsbruck-fine_dining-4.jpg' }),
  place('innsbruck-bakery-2', 'innsbruck', 'bakery', 'Café-Konditorei Munding', 'Kiebachgasse 16, 6020 Innsbruck', '1803년부터 이어온 티롤에서 가장 오래된 제과점.', 'Tyrol\'s oldest patisserie, in business since 1803.'),
  place('innsbruck-bakery-3', 'innsbruck', 'bakery', 'Strudel-Café Kröll', 'Hofgasse 6, 6020 Innsbruck', '황금지붕 인근 골목의 슈트루델 전문 카페.', 'Strudel specialist in an alley near the Golden Roof.', { image: '/places/innsbruck-bakery-3.jpg' }),
  place('innsbruck-cafe-1', 'innsbruck', 'cafe', 'Café Katzung', 'Herzog-Friedrich-Straße 16, 6020 Innsbruck, Austria', '늦은 고딕 양식 카충하우스 건물의 구시가 카페.', 'Old Town café in the late-Gothic Katzunghaus.'),
  place('innsbruck-cafe-2', 'innsbruck', 'cafe', 'Café Central', 'Gilmstraße 5, 6020 Innsbruck', '1884년부터 이어온 빈 스타일 커피하우스. 신문이 많고 일요일·공휴일에 쉽니다.', 'Viennese-style coffee house since 1884, with plenty of newspapers; closed Sundays and holidays.', { image: '/places/innsbruck-cafe-2.jpg' }),

  // —— graz ——
  place('graz-fine_dining-1', 'graz', 'fine_dining', 'Artis', 'Schmiedgasse 20, 8010 Graz', '미쉐린 가이드 등재 레스토랑.', 'Michelin Guide-listed restaurant.', { michelin: 'star1' }),
  place('graz-fine_dining-2', 'graz', 'fine_dining', 'Der Steirer', 'Belgiergasse 1, 8020 Graz', '구시가 인근의 트렌디한 슈타이어마르크 요리 비스트로 겸 레스토랑.', 'Trendy Styrian bistro-restaurant near the Old Town.', { image: '/places/graz-fine_dining-2.jpg' }),
  place('graz-fine_dining-3', 'graz', 'fine_dining', 'Landhauskeller', 'Schmiedgasse 9, 8010 Graz', '르네상스 안뜰에 자리한 역사적인 오스트리아 요리 레스토랑.', 'Historic Austrian restaurant set in a Renaissance courtyard.'),
  place('graz-fine_dining-4', 'graz', 'fine_dining', 'Aiola Upstairs', 'Schlossberg 2, 8010 Graz', '슐로스베르크 위의 레스토랑. 유리벽 너머로 그라츠 지붕이 내려다보이고 예약을 권합니다.', 'Restaurant on the Schlossberg with glass walls overlooking Graz’s rooftops; booking recommended.'),
  place('graz-bakery-1', 'graz', 'bakery', 'Bäckerei Sorger', 'Sporgasse 4, 8010 Graz', '슈타이어마르크의 빵집 체인. 구시가 슈포르가세의 본점은 역사적인 건물에 있습니다.', 'Styrian bakery chain; its Sporgasse flagship sits in a historic Old Town building.'),
  place('graz-bakery-2', 'graz', 'bakery', 'Hofbäckerei Edegger-Tax', 'Hofgasse 6, 8010 Graz', '1569년부터 이어온 그라츠에서 가장 오래된 빵집, 조각된 목재 파사드로 유명.', 'Graz\'s oldest bakery, since 1569, known for its carved wooden shopfront.', { image: '/places/graz-bakery-2.jpg' }),
  place('graz-bakery-3', 'graz', 'bakery', 'Konditorei Philipp', 'Krenngasse 38, 8010 Graz', '케이크·프랄린·아이스크림으로 알려진 그라츠의 제과점.', 'Graz pastry shop known for cakes, pralines and ice cream.'),
  place('graz-cafe-1', 'graz', 'cafe', 'Martin Auer', 'Hans-Sachs-Gasse 4, 8010 Graz (Kindercafé)', '그라츠에 지점이 많은 빵집 카페 체인. 투멜플라츠의 키즈 카페 지점은 아이와 가기 좋습니다.', 'Graz bakery-café chain with many branches; the Tummelplatz Kindercafé suits families.'),
  place('graz-cafe-2', 'graz', 'cafe', 'Tribeka', 'Grieskai 2, 8020 Graz', '현지인이 즐겨 찾는 그라츠의 대표 스페셜티 커피 카페.', 'One of Graz\'s go-to specialty coffee cafés, a local favourite.', { image: '/places/graz-cafe-2.jpg' }),
  place('graz-cafe-3', 'graz', 'cafe', 'Café Fotter', 'Attemsgasse 6, 8010 Graz', '1922년 문을 연 대학가의 오래된 카페. 장미 정원이 있습니다.', 'University-quarter café open since 1922, with a rose garden.', { image: '/places/graz-cafe-3.jpg' }),

  // —— hallstatt ——
  place('hallstatt-fine_dining-1', 'hallstatt', 'fine_dining', 'Bräugasthof Lobisser', 'Seestraße 120, 4830 Hallstatt', '15세기부터 이어온 호숫가 여관 식당. 5~10월에 호수 테라스를 엽니다.', 'Lakeside inn restaurant dating from the 15th century; the lake terrace opens May–October.', { image: '/places/hallstatt-fine_dining-1.jpg' }),

  place('hallstatt-bakery-1', 'hallstatt', 'bakery', 'Maislinger', 'Seestraße 156, 4830 Hallstatt, Austria', '호숫가의 빵집 겸 카페. 소금 광산 염수와 자체 사워도우로 매일 빵을 굽습니다.', 'Lakeside bakery-café baking daily with salt-mine brine and its own sourdough.'),
  place('hallstatt-cafe-1', 'hallstatt', 'cafe', 'Café Derbl', 'Marktplatz 61, 4830 Hallstatt', '마르크트 광장의 카페 겸 식당. 직접 만든 케이크와 지역 요리를 냅니다.', 'Café-restaurant on the market square serving homemade cakes and regional dishes.'),
]
