import { place } from './placeFactory'
import type { Place } from '../types'

export const placesATExtra: Place[] = [
  // —— vienna ——
  place('vienna-fine_dining-1', 'vienna', 'fine_dining', 'Steirereck', 'Am Heumarkt 2A, Vienna', '도나우 운하변 미슐랭 파인 다이닝.', 'Canal-side Michelin fine dining.', { image: '/places/vienna-fine_dining-1.jpg' }),
  place('vienna-fine_dining-2', 'vienna', 'fine_dining', 'Restaurant TIAN', 'Himmelpfortgasse 23, Vienna', '채식 파인 다이닝.', 'Vegetarian fine dining.'),
  place('vienna-fine_dining-3', 'vienna', 'fine_dining', 'Mraz & Sohn', 'Wallensteinstraße 59, 1200 Vienna, Austria', '창의 코스 다이닝.', 'Creative tasting menus.'),
  place('vienna-fine_dining-4', 'vienna', 'fine_dining', 'Plachutta Wollzeile', 'Wollzeile 38, Vienna', '타펠슈피츠 클래식.', 'Classic Tafelspitz.', { image: '/places/vienna-fine_dining-4.jpg' }),
  place('vienna-fine_dining-5', 'vienna', 'fine_dining', 'Figlmüller', 'Wollzeile 5, Vienna', '슈니첼의 대명사.', 'Iconic Wiener Schnitzel.', { image: '/places/vienna-fine_dining-5.jpg' }),
  place('vienna-bakery-1', 'vienna', 'bakery', 'Ströck', 'Mariahilfer Straße, 1060 Vienna, Austria', '비엔나 빵·페이스트리 체인.', 'Vienna bread and pastry chain.', { image: '/places/vienna-bakery-1.jpg' }),
  place('vienna-bakery-2', 'vienna', 'bakery', 'Der Mann', 'Durchlaufstraße, 1200 Vienna, Austria', '로컬 베이커리.', 'Local bakery.'),
  place('vienna-bakery-3', 'vienna', 'bakery', 'Demel', 'Kohlmarkt 14, Vienna', '황실 페이스트리 숍.', 'Imperial pastry shop.', { image: '/places/vienna-bakery-3.jpg' }),
  place('vienna-bakery-4', 'vienna', 'bakery', 'Gragger & Cie', 'Josefstädter Straße 52, 1080 Vienna, Austria', '사워도우 베이커리.', 'Sourdough bakery.'),
  place('vienna-bakery-5', 'vienna', 'bakery', 'Kurkonditorei Oberlaa', 'Neuer Markt 16, 1010 Wien', '빈 전역의 인기 제과점 체인.', 'Popular confiserie chain with multiple Vienna locations.', { image: '/places/vienna-bakery-5.jpg' }),
  place('vienna-cafe-1', 'vienna', 'cafe', 'Café Central', 'Herrengasse 14, Vienna', '클래식 카페하우스.', 'Classic coffee house.', { image: '/places/vienna-cafe-1.jpg' }),
  place('vienna-cafe-2', 'vienna', 'cafe', 'Café Sacher', 'Philharmoniker Str. 4, Vienna', '자허토르테의 본거지.', 'Home of the Sachertorte.', { image: '/places/vienna-cafe-2.jpg' }),
  place('vienna-cafe-3', 'vienna', 'cafe', 'Café Hawelka', 'Dorotheergasse 6, Vienna', '예술가들의 카페.', 'Artists’ café.', { image: '/places/vienna-cafe-3.jpg' }),
  place('vienna-cafe-4', 'vienna', 'cafe', 'Balthasar Kaffee Bar', 'Praterstraße, 1020 Vienna, Austria', '스페셜티 커피.', 'Specialty coffee.'),
  place('vienna-cafe-5', 'vienna', 'cafe', 'Kaffemik', 'Zollergasse 5, 1070 Wien', '7구의 모던 스페셜티 커피.', "Modern specialty coffee in Vienna's 7th district.", { image: '/places/vienna-cafe-5.jpg' }),
  place('vienna-korean-1', 'vienna', 'korean', 'Yori', 'Wiesingerstraße 8, 1010 Wien', '빈 시내의 정통 한식당.', 'Authentic Korean dining in central Vienna.'),
  place('vienna-korean-2', 'vienna', 'korean', 'Vienna Bunsik', 'Fasangasse 15, 1030 Wien', '떡볶이·김밥·라면 등 가족 운영 분식.', 'Family-run bunsik counter — tteokbokki, kimbap, ramyeon.'),
  place('vienna-korean-3', 'vienna', 'korean', 'Das Kimchi', 'Marxergasse 15, 1030 Wien', '가족 운영 정통 한식당.', 'Family-run authentic Korean restaurant.'),
  place('vienna-korean-4', 'vienna', 'korean', 'Sang Sang', 'Gumpendorferstraße 14, 1060 Wien', '한국식 바베큐와 스시.', 'Korean BBQ and sushi.'),
  place('vienna-korean-5', 'vienna', 'korean', 'Gaon', 'Apollogasse 20/1, 1070 Wien', '마리아힐퍼 인근의 정통 한식당.', "Authentic Korean restaurant near Mariahilfer Straße."),

  // —— salzburg ——
  place('salzburg-fine_dining-1', 'salzburg', 'fine_dining', 'Esszimmer', 'Müllner Hauptstraße 33, 5020 Salzburg', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),
  place('salzburg-fine_dining-2', 'salzburg', 'fine_dining', 'St. Peter Stiftskulinarium', 'Sankt-Peter-Bezirk 1/4, 5020 Salzburg', '803년 문헌에 처음 등장하는 유럽에서 가장 오래된 레스토랑, 잘츠부르거 노케를로 유명.', 'Europe\'s oldest restaurant, first documented in 803, famous for its Salzburger Nockerl.'),
  place('salzburg-fine_dining-3', 'salzburg', 'fine_dining', 'Ikarus', 'Wilhelm-Spazier-Straße 7A, Hangar-7, 5020 Salzburg', '매달 세계적인 셰프가 바뀌는 미슐랭 2스타 레스토랑, 항가-7에 위치.', 'Two-Michelin-star restaurant in Hangar-7 with a rotating monthly guest chef.'),
  place('salzburg-fine_dining-4', 'salzburg', 'fine_dining', 'Zum Eulenspiegel', 'Hagenauerplatz 2, 5020 Salzburg', '모차르트 생가 맞은편, 미로 같은 옛 가옥의 전통 오스트리아 레스토랑.', 'Traditional Austrian restaurant in a warren-like old house opposite Mozart\'s birthplace.', { image: '/places/salzburg-fine_dining-4.jpg' }),
  place('salzburg-bakery-1', 'salzburg', 'bakery', 'The Bakery by Didi Maier', 'Müllner Hauptstraße 4, 5020 Salzburg, Austria', '모던 감성의 잘츠부르크 인기 베이커리 카페', 'Modern, urban bakery café popular in Salzburg'),
  place('salzburg-bakery-2', 'salzburg', 'bakery', 'Café-Konditorei Fürst', 'Brodgasse 13, 5020 Salzburg', '1884년 오리지널 모차르트쿠겔을 만들어낸 잘츠부르크의 제과점.', 'The Salzburg confectioner that created the original Mozartkugel in 1884.'),
  place('salzburg-bakery-3', 'salzburg', 'bakery', 'Bäckerei Flöckner', 'Fadingerstraße 1a, 5020 Salzburg', '지역민에게 사랑받는 잘츠부르크의 전통 빵집.', 'Traditional Salzburg bakery beloved by locals.'),
  place('salzburg-cafe-1', 'salzburg', 'cafe', 'Café Tomaselli', 'Kapitelplatz 8, 5020 Salzburg, Austria', '1703년부터 이어온 잘츠부르크 구시가지의 유서 깊은 커피하우스', 'Historic coffee house in Salzburg\'s old town, serving since 1703', { image: '/places/salzburg-cafe-1.jpg' }),
  place('salzburg-cafe-2', 'salzburg', 'cafe', 'Café Bazar', 'Schwarzstraße 3, 5020 Salzburg', '잘차흐 강 건너 구시가 전망의 유서 깊은 카페.', 'Historic café across the Salzach with views back to the Old Town.', { image: '/places/salzburg-cafe-2.jpg' }),
  place('salzburg-cafe-3', 'salzburg', 'cafe', 'Kaffee-Alchemie', 'Rudolfskai 38, 5020 Salzburg', '잘츠부르크 스페셜티 커피 씬을 대표하는 로스터리 카페.', 'Roastery café at the forefront of Salzburg\'s specialty coffee scene.'),
  place('salzburg-cafe-4', 'salzburg', 'cafe', '220 Grad', 'Chiemseegasse 5, 5020 Salzburg', '축제극장 인근의 자가 로스팅 카페.', 'House-roasting café near the Festspielhaus.'),

  // —— innsbruck ——
  place('innsbruck-fine_dining-1', 'innsbruck', 'fine_dining', 'Ottoburg', 'Herzog-Friedrich-Straße 1, 6020 Innsbruck', '구시가 최고 전망의 레스토랑.', 'Restaurant with the Old Town\'s best views.', { image: '/places/innsbruck-fine_dining-1.jpg' }),
  place('innsbruck-fine_dining-2', 'innsbruck', 'fine_dining', 'Die Wilderin', 'Seilergasse 5, 6020 Innsbruck', '제철 지역 식재료를 코투테일 방식으로 다루는 구시가의 인기 레스토랑.', 'Popular Old Town restaurant working seasonal regional produce nose-to-tail.'),
  place('innsbruck-fine_dining-3', 'innsbruck', 'fine_dining', 'Lichtblick', 'Maria-Theresien-Straße 18 (7th floor), 6020 Innsbruck', '시내와 산을 한눈에 담는 크리에이티브 코스 레스토랑.', 'Creative tasting-menu restaurant with panoramic views of the city and mountains.'),
  place('innsbruck-fine_dining-4', 'innsbruck', 'fine_dining', 'Weinhaus Happ', 'Herzog-Friedrich-Straße 14, 6020 Innsbruck', '황금지붕 맞은편의 전통 티롤 요리 레스토랑.', 'Traditional Tyrolean restaurant opposite the Golden Roof.', { image: '/places/innsbruck-fine_dining-4.jpg' }),
  place('innsbruck-bakery-1', 'innsbruck', 'bakery', 'Joast', 'Maria-Theresien-Straße 57, 6020 Innsbruck, Austria', '유기농 재료를 사용하는 인스브루크의 베이커리 카페', 'Organic bakery café on Innsbruck\'s main street'),
  place('innsbruck-bakery-2', 'innsbruck', 'bakery', 'Café-Konditorei Munding', 'Kiebachgasse 16, 6020 Innsbruck', '1803년부터 이어온 티롤에서 가장 오래된 제과점.', 'Tyrol\'s oldest patisserie, in business since 1803.'),
  place('innsbruck-bakery-3', 'innsbruck', 'bakery', 'Strudel-Café Kröll', 'Hofgasse 6, 6020 Innsbruck', '황금지붕 인근 골목의 슈트루델 전문 카페.', 'Strudel specialist in an alley near the Golden Roof.', { image: '/places/innsbruck-bakery-3.jpg' }),
  place('innsbruck-cafe-1', 'innsbruck', 'cafe', 'Katzunghaus', 'Herzog-Friedrich-Straße 16, 6020 Innsbruck, Austria', '직접 구운 케이크와 슈트루델로 유명한 구시가지 카페', 'Café in the old town known for its own freshly baked cakes and strudels'),
  place('innsbruck-cafe-2', 'innsbruck', 'cafe', 'Café Central', 'Gilmstraße 5, 6020 Innsbruck', '인스브루크에 남은 마지막 빈 스타일 커피하우스.', 'The last Viennese-style coffee house in Innsbruck.', { image: '/places/innsbruck-cafe-2.jpg' }),
  place('innsbruck-cafe-3', 'innsbruck', 'cafe', 'Kaffeefabrik', 'Universitätsstraße 3, 6020 Innsbruck', '대학가의 스페셜티 커피 로스터리.', 'Specialty coffee roastery in the university quarter.'),

  // —— graz ——
  place('graz-fine_dining-1', 'graz', 'fine_dining', 'Artis', 'Schmiedgasse 20, 8010 Graz', '미쉐린 가이드 등재 레스토랑.', 'Michelin Guide-listed restaurant.'),
  place('graz-fine_dining-2', 'graz', 'fine_dining', 'Der Steirer', 'Belgiergasse 1, 8020 Graz', '구시가 인근의 트렌디한 슈타이어마르크 요리 비스트로 겸 레스토랑.', 'Trendy Styrian bistro-restaurant near the Old Town.', { image: '/places/graz-fine_dining-2.jpg' }),
  place('graz-fine_dining-3', 'graz', 'fine_dining', 'Landhauskeller', 'Schmiedgasse 9, 8010 Graz', '르네상스 안뜰에 자리한 역사적인 오스트리아 요리 레스토랑.', 'Historic Austrian restaurant set in a Renaissance courtyard.'),
  place('graz-fine_dining-4', 'graz', 'fine_dining', 'Aiola Upstairs', 'Schlossberg 2, 8010 Graz', '슐로스베르크 정상의 도시 전망 모던 레스토랑.', 'Modern restaurant atop the Schlossberg with skyline views.'),
  place('graz-bakery-1', 'graz', 'bakery', 'Bäckerei Sorger', 'Dietrichsteinplatz 13, 8010 Graz, Austria', '직접 로스팅한 커피와 아침 식사로 유명한 그라츠 베이커리 체인', 'Bakery chain known for fresh breakfast and its own coffee roasting'),
  place('graz-bakery-2', 'graz', 'bakery', 'Hofbäckerei Edegger-Tax', 'Hofgasse 6, 8010 Graz', '1569년부터 이어온 그라츠에서 가장 오래된 빵집, 조각된 목재 파사드로 유명.', 'Graz\'s oldest bakery, since 1569, known for its carved wooden shopfront.', { image: '/places/graz-bakery-2.jpg' }),
  place('graz-bakery-3', 'graz', 'bakery', 'Konditorei Philipp', 'Graz 8010, Austria', '1926년부터 이어온 초콜릿·케이크·아이스크림 제과점.', 'Chocolate, cake and ice-cream confectioner in business since 1926.'),
  place('graz-cafe-1', 'graz', 'cafe', 'Martin Auer', 'Theodor-Körner-Straße 60, 8010 Graz, Austria', '자체 제과로 만든 데니시 페이스트리가 유명한 그라츠 카페', 'Café known for Danish pastries baked in its own bakery'),
  place('graz-cafe-2', 'graz', 'cafe', 'Tribeka', 'Grazbachgasse 39, 8010 Graz', '현지인이 즐겨 찾는 그라츠의 대표 스페셜티 커피 카페.', 'One of Graz\'s go-to specialty coffee cafés, a local favourite.', { image: '/places/graz-cafe-2.jpg' }),
  place('graz-cafe-3', 'graz', 'cafe', 'Café Fotter', 'Grabenstraße 68, 8010 Graz', '대학가 인근, 장미정원이 있는 유서 깊은 카페.', 'Historic café with a rose garden near the university quarter.', { image: '/places/graz-cafe-3.jpg' }),

  // —— hallstatt ——
  place('hallstatt-fine_dining-1', 'hallstatt', 'fine_dining', 'Bräugasthof', 'Salzbergstraße 1, 4830 Hallstatt', '호수 전망의 전통 오스트리아 요리.', 'Traditional Austrian dishes with lake views.', { image: '/places/hallstatt-fine_dining-1.jpg' }),

  place('hallstatt-bakery-1', 'hallstatt', 'bakery', 'Maislinger', 'Seestraße 156, 4830 Hallstatt, Austria', '할슈타트 호숫가에 위치한 전통 베이커리, 자연 발효 사워도우로 유명', 'Lakeside bakery in Hallstatt known for its own natural sourdough'),
  place('hallstatt-cafe-1', 'hallstatt', 'cafe', 'Café Derbl', 'Hallstatt, 4830, Austria', '마을 중심가에서 커피와 홈메이드 케이크를 즐길 수 있는 카페', 'Café in the town center known for coffee and homemade cakes'),
]
