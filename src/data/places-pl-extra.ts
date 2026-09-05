import { place } from './placeFactory'
import type { Place } from '../types'

export const placesPLExtra: Place[] = [
  // —— warsaw ——
  place('warsaw-fine_dining-1', 'warsaw', 'fine_dining', 'Senses', 4.6, 'Bielańska 12, 00-085 Warszawa', '미쉐린 1스타 레스토랑, 폴란드 전통 풍미를 현대적으로 재해석.', 'One-Michelin-star restaurant reinterpreting classic Polish flavors with modern technique.'),
  place('warsaw-fine_dining-2', 'warsaw', 'fine_dining', 'Nolita', 4.6, 'Wilcza 46, 00-679 Warszawa', '오픈 키친에서 폴란드·지중해·동남아 요리를 결합한 모던 다이닝.', 'Modern dining with an open kitchen blending Polish, Mediterranean, and Southeast Asian flavors.', { reviewCount: 1876 }),
  place('warsaw-fine_dining-3', 'warsaw', 'fine_dining', 'Stary Dom', 4.6, 'Puławska 104/106, 02-620 Warszawa', '전통 폴란드 요리를 선보이는 대형 브라세리.', 'Large brasserie serving traditional Polish cuisine.'),
  place('warsaw-fine_dining-4', 'warsaw', 'fine_dining', 'Polka', 3.5, 'Świętojańska 2, 00-288 Warszawa', '구시가 왕궁 옆 옛 건물에서 즐기는 프렌치풍 폴란드 요리.', 'French-inflected Polish cuisine served in a historic building next to the Royal Castle in the Old Town.', { reviewCount: 5264 }),
  place('warsaw-fine_dining-5', 'warsaw', 'fine_dining', 'Bibenda', 4.3, 'Nowogrodzka 10, 00-511 Warszawa', '채식 메뉴가 풍부한 인기 와인 비스트로.', 'Popular wine bistro with a wine-forward, vegetarian-friendly menu.', { reviewCount: 4620 }),

  place('warsaw-bakery-1', 'warsaw', 'bakery', 'Cukiernia Sowa', 4.1, 'Chmielna 11, 00-021 Warszawa', '1946년 창업한 가족 운영 제과점 체인, 케이크·페이스트리로 유명.', 'Family-run patisserie chain founded in 1946, known for cakes and pastries.'),
  place('warsaw-bakery-2', 'warsaw', 'bakery', 'A. Blikle', 4.1, 'Nowy Świat 35, 00-029 Warszawa', '1869년부터 이어온 바르샤바에서 가장 유명한 제과점, 폰치키(잼 도넛)로 유명.', 'Warsaw\'s most famous patisserie since 1869, renowned for its pączki jelly doughnuts.', { reviewCount: 529 }),

  place('warsaw-cafe-1', 'warsaw', 'cafe', 'Cafe Kafka', 4.5, 'Oboźna 3, 00-340 Warszawa', '노트북 작업하기 좋은 바르샤바의 인기 카페.', 'Popular laptop-friendly café in Warsaw.'),
  place('warsaw-cafe-2', 'warsaw', 'cafe', 'Cukiernia Pawłowicz', 4.5, 'Chmielna 13, Warszawa', '1917년 창업한 전통 폴란드 파치키(도넛) 제과점.', 'Traditional Polish pączki (doughnut) patisserie, established in 1917.', { reviewCount: 800 }),
  place('warsaw-cafe-3', 'warsaw', 'cafe', 'Forum', 4.9, 'Elektoralna 11, 00-137 Warszawa', '폴란드 바리스타 챔피언십 수상자들이 운영하는 바르샤바 최고의 스페셜티 커피바.', 'Warsaw\'s most decorated specialty coffee bar, run by Polish Barista Championship title holders.'),

  place('warsaw-korean-1', 'warsaw', 'korean', 'Miss Kimchi', 4.4, 'Żelazna 58/62, Warszawa', '한국식 치킨으로 유명한 한식당.', 'Korean restaurant known for its fried chicken.', { reviewCount: 8108 }),

  // —— krakow ——
  place('krakow-fine_dining-1', 'krakow', 'fine_dining', 'Starka', 4.6, 'Józefa 14, 31-056 Kraków', '카지미에시 지구의 전통 폴란드 요리.', 'Traditional Polish cuisine in the Kazimierz district.'),
  place('krakow-fine_dining-2', 'krakow', 'fine_dining', 'Pod Wawelem Kompania Kuflowa', 4.5, 'Świętej Gertrudy 26/29, 31-048 Kraków', '바벨성 인근의 인기 폴란드 요리 레스토랑, 리뷰 3만 건이 넘는 크라쿠프 명물.', 'Hugely popular Polish restaurant near Wawel Castle, with over 30,000 reviews.', { reviewCount: 33799 }),
  place('krakow-fine_dining-3', 'krakow', 'fine_dining', 'Morskie Oko', 4.6, 'Plac Szczepański 8, 31-011 Kraków', '전통 폴란드 요리로 유명한 인기 레스토랑.', 'Popular restaurant known for traditional Polish cuisine.', { reviewCount: 12541 }),
  place('krakow-fine_dining-4', 'krakow', 'fine_dining', 'Szara Gęś w Kuchni Restaurant', 4.6, 'Rynek Główny 17, 31-008 Kraków', '중앙광장(리넥 그웨브니)의 고급 폴란드 요리 레스토랑.', 'Upscale Polish cuisine restaurant on the Main Market Square.', { reviewCount: 2799 }),
  place('krakow-fine_dining-5', 'krakow', 'fine_dining', 'Pierwszy Stopień Restaurant', 4.7, 'Krakowska 17, 31-062 Kraków', '카지미에시 지구의 평점 높은 폴란드 요리 레스토랑.', 'Highly rated Polish cuisine restaurant in the Kazimierz district.', { reviewCount: 4416 }),

  place('krakow-bakery-1', 'krakow', 'bakery', 'Massolit Bakery & Cafe', 4.5, 'Kazimierza Brodzińskiego 4, 30-506 Kraków, Poland', '카지미에시 지구 게토 영웅 광장 인근의 인기 베이커리 카페, 맛있는 빵과 베이글로 유명', 'Popular Kraków bakery café near Plac Bohaterów Getta, known for delicious bread and bagels'),
  place('krakow-bakery-2', 'krakow', 'bakery', 'The Morning Hug Bakery & Coffee', 4.9, 'Św. Tomasza 22, 31-021 Kraków', '평점 높은 베이커리 겸 커피숍, 크루아상과 페이스트리로 인기.', 'Highly rated bakery and coffee spot popular for croissants and pastries.', { reviewCount: 469 }),
  place('krakow-bakery-3', 'krakow', 'bakery', 'Chimney Cake Bakery', 4.7, 'Basztowa 26A, 31-131 Kraków', '헝가리식 킈르퇴시칼라치(굴뚝빵)를 파는 크라쿠프의 인기 베이커리.', 'Popular Kraków bakery serving warm Hungarian-style chimney cakes.', { reviewCount: 1904 }),
  place('krakow-bakery-4', 'krakow', 'bakery', 'Confectionery Under Arcades', 4.9, 'Krakowska 5, 31-066 Kraków', '평점 높은 인기 제과점, 다양한 폴란드 전통 케이크로 유명.', 'Highly rated confectionery known for a wide range of traditional Polish cakes.', { reviewCount: 1981 }),
  place('krakow-bakery-5', 'krakow', 'bakery', 'Lajkonik Piekarnia i Kawiarnia', 4.5, 'Plac Dominikański 2, 31-043 Kraków', '도미니칸 광장의 라이코니크 베이커리 카페 지점, 아침·점심 메뉴도 제공.', 'Dominican Square branch of the Lajkonik bakery-café chain, also serving breakfast and lunch.', { reviewCount: 2141 }),

  place('krakow-cafe-1', 'krakow', 'cafe', 'Lajkonik Bakery & Cafe', 4.4, 'Tomasza 25, 31-027 Kraków, Poland', '달콤한 폰치키(잼 도넛)로 유명한 크라쿠프의 베이커리 카페 체인', 'Kraków bakery café chain known for its sweet pączki jelly donuts'),
  place('krakow-cafe-2', 'krakow', 'cafe', 'Gossip Cafe', 4.8, 'Świętego Jana 30, 31-018 Kraków', '평점 높은 인기 카페, 구시가지 중심가에 위치.', 'Highly rated, popular café in the heart of the Old Town.', { reviewCount: 4091 }),
  place('krakow-cafe-3', 'krakow', 'cafe', 'B.O.H.O Coffee&Bar', 4.8, 'Stolarska 6, 31-043 Kraków', '평점 높은 스페셜티 커피 & 바.', 'Highly rated specialty coffee and bar.', { reviewCount: 1602 }),
  place('krakow-cafe-4', 'krakow', 'cafe', 'Cytat Café', 4.6, 'Miodowa 23, 31-055 Kraków', '카지미에시 지구의 평점 높은 카페.', 'Highly rated café in the Kazimierz district.', { reviewCount: 5462 }),
  place('krakow-cafe-5', 'krakow', 'cafe', 'Camelot Cafe', 4.5, 'Św. Tomasza 17, 31-021 Kraków', '구시가지의 인기 커피숍, 예약도 가능.', 'Popular coffee shop in the Old Town, with reservations available.', { reviewCount: 5264 }),

  // —— gdansk ——
  place('gdansk-fine_dining-1', 'gdansk', 'fine_dining', 'Kubicki Restaurant', 4.5, 'Wartka 5, 80-855 Gdańsk', '그단스크 구시가의 대표 레스토랑.', 'Leading restaurant in Gdańsk\'s Old Town.'),
  place('gdansk-fine_dining-2', 'gdansk', 'fine_dining', 'Restauracja Bazar', 4.7, 'Szafarnia 6, 80-755 Gdańsk', '샤파르니아의 평점 높은 전통 폴란드 요리 레스토랑.', 'Highly rated traditional Polish cuisine restaurant on Szafarnia.', { reviewCount: 3008 }),
  place('gdansk-fine_dining-3', 'gdansk', 'fine_dining', 'Motlava Restaurant', 4.7, 'Stara Stocznia 2/1, 80-751 Gdańsk', '옛 조선소 부지의 평점 높은 폴란드 요리 레스토랑.', 'Highly rated Polish cuisine restaurant on the old shipyard grounds.', { reviewCount: 2307 }),
  place('gdansk-fine_dining-4', 'gdansk', 'fine_dining', 'Swojski Smak', 4.6, 'Jana Heweliusza 25/27, 80-861 Gdańsk', '가정식 폴란드 요리로 유명한 인기 레스토랑.', 'Popular restaurant known for home-style Polish cooking.', { reviewCount: 8163 }),
  place('gdansk-fine_dining-5', 'gdansk', 'fine_dining', 'Pierogarnia Mandu Gdańsk Śródmieście', 4.8, 'Elżbietańska 4/8, 80-849 Gdańsk', '만두(피에로기) 전문점, 그단스크에서 가장 많은 리뷰를 받은 레스토랑 중 하나.', 'Pierogi specialist, one of Gdańsk\'s most-reviewed restaurants.', { reviewCount: 17220 }),

  place('gdansk-bakery-1', 'gdansk', 'bakery', 'Cukiernia W-Z', 4.5, 'Podwale Staromiejskie 82, 80-844 Gdańsk, Poland', '그단스크 구시가지의 유명한 폴란드 전통 제과점, 사과 샤를로트카로 유명', 'Well-known traditional Polish bakery in Gdansk\'s old town, famous for apple szarlotka'),
  place('gdansk-bakery-2', 'gdansk', 'bakery', 'CZULE Piekarnia', 4.7, 'Podwale Staromiejskie 62/68A, 80-846 Gdańsk', '구시가지의 평점 높은 베이커리.', 'Highly rated bakery in the Old Town.', { reviewCount: 189 }),
  place('gdansk-bakery-3', 'gdansk', 'bakery', 'Pan Precel', 4.7, 'Długa 20/21, 80-827 Gdańsk', '드우가 거리의 평점 높은 인기 베이커리, 프레첼로 유명.', 'Popular bakery on Długa street, known for its pretzels.', { reviewCount: 582 }),
  place('gdansk-bakery-4', 'gdansk', 'bakery', 'OMNI KAISER Patisserie', 4.5, 'Długie Pobrzeże 13, 80-888 Gdańsk', '모트와바 강변의 인기 파티스리.', 'Popular patisserie on the Motława riverside.', { reviewCount: 782 }),
  place('gdansk-bakery-5', 'gdansk', 'bakery', 'Piekarnia Gdańsk', 4.3, 'Rajska 8, 80-850 Gdańsk', '라이스카 거리의 베이커리.', 'Bakery on Rajska street.', { reviewCount: 852 }),

  place('gdansk-cafe-1', 'gdansk', 'cafe', 'Pożegnanie z Afryką', 4.5, 'Grobla III 1/6D, 80-840 Gdańsk, Poland', '세계 각지 원두를 취급하는 그단스크의 인기 스페셜티 커피숍', 'Popular specialty coffee shop in Gdansk sourcing beans from around the world'),
  place('gdansk-cafe-2', 'gdansk', 'cafe', 'Kawiarnia Drukarnia', 4.7, 'Mariacka 36, 80-833 Gdańsk', '마리아츠카 거리의 평점 높은 인기 카페.', 'Highly rated, popular café on Mariacka street.', { reviewCount: 5444 }),
  place('gdansk-cafe-3', 'gdansk', 'cafe', 'Leń', 4.8, 'Ul. Piwna 52/53, 80-831 Gdańsk', '피브나 거리의 평점 높은 인기 카페.', 'Highly rated, popular café on Piwna street.', { reviewCount: 2004 }),
  place('gdansk-cafe-4', 'gdansk', 'cafe', 'Kaffe Perro Negro', 4.8, 'Świętego Ducha 37/39, 80-834 Gdańsk', '성령 거리의 평점 높은 카페.', 'Highly rated café on Świętego Ducha street.', { reviewCount: 1604 }),
  place('gdansk-cafe-5', 'gdansk', 'cafe', 'Kawiarnia Retro', 4.7, 'Ul. Piwna 5/6, 80-831 Gdańsk', '피브나 거리의 레트로풍 인기 카페.', 'Popular retro-styled café on Piwna street.', { reviewCount: 3338 }),

  // —— wroclaw ——
  place('wroclaw-fine_dining-1', 'wroclaw', 'fine_dining', 'Restauracja Katedralna 9', 4.5, 'Katedralna 9, 50-328 Wrocław', '오스트루프 툼스키의 전망 좋은 레스토랑.', 'Restaurant with views on Ostrów Tumski.'),
  place('wroclaw-fine_dining-2', 'wroclaw', 'fine_dining', 'Konspira', 4.6, 'Plac Solny 11, 50-062 Wrocław', '음식 양이 푸짐한 브로츠와프의 오래된 폴란드 요리 식당.', 'Long-running Polish restaurant known for generous portions.', { reviewCount: 12339 }),
  place('wroclaw-fine_dining-3', 'wroclaw', 'fine_dining', 'Wrocławska', 4.6, 'Szewska 59/60, 50-139 Wrocław', '평점 높은 인기 레스토랑, 브로츠와프 대표 요리를 선보인다.', 'Highly rated, popular restaurant showcasing signature Wrocław dishes.', { reviewCount: 4361 }),
  place('wroclaw-fine_dining-4', 'wroclaw', 'fine_dining', 'Pod Papugami - Restaurant & Cocktail Bar', 4.6, 'Sukiennice 9a, 50-107 Wrocław', '수키에니체의 평점 높은 레스토랑 겸 칵테일 바.', 'Highly rated restaurant and cocktail bar on Sukiennice.', { reviewCount: 3498 }),
  place('wroclaw-fine_dining-5', 'wroclaw', 'fine_dining', 'STÓŁ na Szwedzkiej - studio kulinarne', 4.8, 'Szwedzka 17A, 51-128 Wrocław', '평점 높은 컬리너리 스튜디오형 레스토랑.', 'Highly rated culinary-studio-style restaurant.', { reviewCount: 1860 }),

  place('wroclaw-bakery-1', 'wroclaw', 'bakery', 'Chimney Cake Bakery', 4.5, 'Marszałka Józefa Piłsudskiego 14, 50-033 Wrocław, Poland', '헝가리식 킈르퇴시칼라치(굴뚝빵)를 갓 구워 파는 브로츠와프의 인기 베이커리', 'Popular Wroclaw bakery serving warm Hungarian-style chimney cakes with various toppings'),
  place('wroclaw-bakery-2', 'wroclaw', 'bakery', 'Poko Bakery & Cafe', 4.6, 'Świętego Antoniego 2/4, 50-073 Wrocław', '포코이호프 파사주 안의 평점 높은 베이커리 카페.', 'Highly rated bakery café inside the Pokoyhof passage.', { reviewCount: 1450 }),
  place('wroclaw-bakery-3', 'wroclaw', 'bakery', 'Dessert Boutique – Cukiernia Premium Wrocław', 4.8, 'Świętego Mikołaja 43, 50-127 Wrocław', '평점 높은 프리미엄 제과점.', 'Highly rated premium confectionery.', { reviewCount: 582 }),
  place('wroclaw-bakery-4', 'wroclaw', 'bakery', 'Hert Bakery', 4.5, 'Rynek 46/47, 50-116 Wrocław', '중앙광장(리넥)에 위치한 인기 베이커리.', 'Popular bakery right on the Market Square.', { reviewCount: 947 }),
  place('wroclaw-bakery-5', 'wroclaw', 'bakery', 'Tortownia na Bema', 4.9, 'Krupnicza 8, 50-075 Wrocław', '평점 높은 제과점, 주문 제작 케이크로 유명.', 'Highly rated confectionery known for custom-made cakes.', { reviewCount: 767 }),

  place('wroclaw-cafe-1', 'wroclaw', 'cafe', 'Paloma', 4.6, 'Plac Solny 8-9, 50-062 Wrocław, Poland', '우크라이나인이 운영하는 브로츠와프의 스페셜티 커피 로스터리 겸 카페', 'Ukrainian-owned specialty coffee roastery and cafe in central Wroclaw'),
  place('wroclaw-cafe-2', 'wroclaw', 'cafe', 'Gniazdo', 4.6, 'Świdnicka 36, 50-066 Wrocław', '시비드니카 거리의 평점 높은 인기 카페.', 'Highly rated, popular café on Świdnicka street.', { reviewCount: 4232 }),
  place('wroclaw-cafe-3', 'wroclaw', 'cafe', 'Vinyl Cafe', 4.7, 'Kotlarska 35/36, 50-153 Wrocław', '코틀라르스카 거리의 평점 높은 카페.', 'Highly rated café on Kotlarska street.', { reviewCount: 3250 }),
  place('wroclaw-cafe-4', 'wroclaw', 'cafe', 'Chmiel kawę', 4.9, 'Szewska 27A, 50-139 Wrocław', '평점 높은 스페셜티 커피숍.', 'Highly rated specialty coffee shop.', { reviewCount: 1560 }),
  place('wroclaw-cafe-5', 'wroclaw', 'cafe', 'Yerba Café', 4.9, 'Księcia Witolda 21, 50-243 Wrocław', '평점 높은 브렉퍼스트 카페, 예약도 가능.', 'Highly rated breakfast café, reservations available.', { reviewCount: 1503 }),

  // —— poznan ——
  place('poznan-fine_dining-1', 'poznan', 'fine_dining', 'Ptasie Radio', 4.6, 'Stanisława Wyspiańskiego 26A, 60-751 Poznań', '아르누보 건물의 컨트리 시크 레스토랑.', 'Country-chic restaurant in an Art Nouveau building.'),
  place('poznan-fine_dining-2', 'poznan', 'fine_dining', 'Wiejskie Jadło Poznań', 4.6, 'Stary Rynek 77, 61-772 Poznań', '중앙광장의 인기 폴란드 시골 요리 레스토랑.', 'Popular Polish country-style cuisine restaurant on the Old Market Square.', { reviewCount: 9430 }),
  place('poznan-fine_dining-3', 'poznan', 'fine_dining', 'Restauracja Vis A Vis Koziołków', 4.8, 'Stary Rynek 40, 61-772 Poznań', '중앙광장의 평점 높은 폴란드 요리 레스토랑.', 'Highly rated Polish cuisine restaurant on the Old Market Square.', { reviewCount: 8286 }),
  place('poznan-fine_dining-4', 'poznan', 'fine_dining', 'Na Winklu', 4.8, 'Śródka 1, 61-125 Poznań', '시루드카 지구의 평점 높은 폴란드 요리 레스토랑.', 'Highly rated Polish cuisine restaurant in the Śródka district.', { reviewCount: 3256 }),
  place('poznan-fine_dining-5', 'poznan', 'fine_dining', 'NOOKS', 4.9, 'Poplińskich 1, 61-762 Poznań', '평점 높은 인기 레스토랑, 예약 필수.', 'Highly rated, popular restaurant; reservations recommended.', { reviewCount: 1424 }),

  place('poznan-bakery-1', 'poznan', 'bakery', 'Mąka Woda Sól', 4.5, 'Aleje Karola Marcinkowskiego 14, 61-827 Poznań, Poland', '크루아상과 빵으로 유명한 포즈난의 인기 베이커리 카페', 'Popular Poznan bakery cafe known for croissants and bread, great for breakfast'),
  place('poznan-bakery-2', 'poznan', 'bakery', 'ROGAL Świętomarciński', 4.5, 'Stary Rynek 11/17, 61-772 Poznań', '포즈난 명물 성 마르틴 크루아상(로갈) 전문점.', 'Specialist in Poznań\'s iconic St. Martin\'s croissant (rogal świętomarciński).', { reviewCount: 774 }),
  place('poznan-bakery-3', 'poznan', 'bakery', 'TCB Tokyo Cheesecake Bakery STARE MIASTO', 4.8, 'Plac Kolegiacki 8, 61-841 Poznań', '평점 높은 일본식 치즈케이크 전문 베이커리.', 'Highly rated bakery specializing in Japanese-style cheesecake.', { reviewCount: 1211 }),
  place('poznan-bakery-4', 'poznan', 'bakery', 'Artisan Poznań', 4.3, 'Szkolna 9, 61-833 Poznań', '슈콜나 거리의 베이커리.', 'Bakery on Szkolna street.', { reviewCount: 743 }),
  place('poznan-bakery-5', 'poznan', 'bakery', 'inna.piekarnia', 4.5, 'Garbary 26, 61-867 Poznań', '가르바리 거리의 베이커리.', 'Bakery on Garbary street.', { reviewCount: 256 }),

  place('poznan-cafe-1', 'poznan', 'cafe', 'GLANC', 4.5, 'Ulica Józefa Strusia 9, 60-740 Poznań, Poland', '발틱 타워 옆에 위치한 우아한 인테리어의 포즈난 카페', 'Elegant Poznan cafe with marble tables located beside the Baltyk Tower'),
  place('poznan-cafe-2', 'poznan', 'cafe', 'Oldskulowa Cafe & Restaurant', 4.8, 'Fredry 2, 61-701 Poznań', '평점 높은 인기 카페 겸 레스토랑.', 'Highly rated, popular café and restaurant.', { reviewCount: 1589 }),
  place('poznan-cafe-3', 'poznan', 'cafe', 'Stragan Kawiarnia', 4.7, 'Ratajczaka 31, 61-816 Poznań', '평점 높은 인기 카페.', 'Highly rated, popular café.', { reviewCount: 1970 }),
  place('poznan-cafe-4', 'poznan', 'cafe', 'LAGACCA Cafe', 4.8, 'Woźna 21, 61-777 Poznań', '평점 높은 카페, 좋은 커피로 유명.', 'Highly rated café known for good coffee.', { reviewCount: 1302 }),
  place('poznan-cafe-5', 'poznan', 'cafe', 'Kaferdam', 4.6, 'Grobla 30, 61-859 Poznań', '평점 높은 카페.', 'Highly rated café.', { reviewCount: 1057 }),

  // —— zakopane ——
  place('zakopane-fine_dining-1', 'zakopane', 'fine_dining', 'Zakopiańska', 4.6, 'Jagiellońska 18, 34-500 Zakopane', '자코파네 최고 평가 레스토랑.', 'Widely regarded as the best restaurant in Zakopane.'),
  place('zakopane-fine_dining-2', 'zakopane', 'fine_dining', 'Gazdowo Kuźnia', 4.6, 'Krupówki 1, 34-500 Zakopane', '크루푸프키 거리의 평점 높은 고랄레(산악민) 전통 요리 레스토랑.', 'Highly rated restaurant on Krupówki serving traditional Góral highlander cuisine.', { reviewCount: 13786 }),
  place('zakopane-fine_dining-3', 'zakopane', 'fine_dining', 'Bąkowo Zohylina Niźnio', 4.6, 'Józefa Piłsudskiego 6, 34-500 Zakopane', '평점 높은 폴란드 산악 요리 레스토랑.', 'Highly rated Polish highland-cuisine restaurant.', { reviewCount: 12872 }),
  place('zakopane-fine_dining-4', 'zakopane', 'fine_dining', 'Marzanna i Ryszard Bubka', 4.7, 'Droga Oswalda Balzera 17e, 34-500 Zakopane', '평점 높은 전통 폴란드 요리 레스토랑.', 'Highly rated traditional Polish cuisine restaurant.', { reviewCount: 9229 }),
  place('zakopane-fine_dining-5', 'zakopane', 'fine_dining', 'Karczma Zapiecek', 4.5, 'Krupówki 43, 34-500 Zakopane', '크루푸프키 거리의 전통 폴란드 여관식 레스토랑.', 'Traditional Polish tavern-style restaurant on Krupówki.', { reviewCount: 14080 }),

  place('zakopane-bakery-1', 'zakopane', 'bakery', 'Piekarnia-Cukiernia Dańca', 4.6, 'ul. Kościeliska 5, 34-500 Zakopane, Poland', '친절한 서비스와 다양한 케이크로 유명한 자코파네의 인기 제과점', 'Popular Zakopane bakery known for friendly service and an impressive cake selection'),
  place('zakopane-bakery-2', 'zakopane', 'bakery', 'Lwów Croissants', 4.8, 'Krupówki 41, 34-500 Zakopane', '크루푸프키 거리의 평점 높은 크루아상 전문점.', 'Highly rated croissant specialist on Krupówki street.', { reviewCount: 790 }),
  place('zakopane-bakery-3', 'zakopane', 'bakery', 'Cukiernia SAMANTA (Krupówki)', 4.4, 'Krupówki 4a, 34-500 Zakopane', '크루푸프키 거리의 인기 제과점 체인 지점.', 'Krupówki-street branch of the popular Samanta confectionery chain.', { reviewCount: 2664 }),
  place('zakopane-bakery-4', 'zakopane', 'bakery', 'Cukiernia SAMANTA (Kasprusie)', 4.6, 'Kasprusie 34, 34-500 Zakopane', '카스프루시에 거리의 사만타 제과점 지점.', 'Kasprusie-street branch of the Samanta confectionery chain.', { reviewCount: 2003 }),

  place('zakopane-cafe-1', 'zakopane', 'cafe', 'LA MANO Speciality Coffee', 4.7, 'Władysława Orkana 1F, 34-500 Zakopane, Poland', '15년 경력의 오너가 운영하는 자코파네의 스페셜티 커피 & 와인바', 'Specialty coffee and wine bar in Zakopane run by owners with 15 years of experience'),
  place('zakopane-cafe-2', 'zakopane', 'cafe', 'STRH Bistro Art Cafe', 4.7, 'Krupówki 4a, 34-500 Zakopane', '크루푸프키 거리의 평점 높은 비스트로 아트 카페.', 'Highly rated bistro art café on Krupówki street.', { reviewCount: 6665 }),
  place('zakopane-cafe-3', 'zakopane', 'cafe', 'Kawiarnia Filiżanki', 4.7, 'Grunwaldzka 4A, 34-500 Zakopane', '평점 높은 브렉퍼스트 카페.', 'Highly rated breakfast café.', { reviewCount: 2472 }),
  place('zakopane-cafe-4', 'zakopane', 'cafe', 'Eko Chatka', 4.9, 'Droga Oswalda Balzera 21, 34-500 Zakopane', '평점 높은 카페.', 'Highly rated café.', { reviewCount: 690 }),
  place('zakopane-cafe-5', 'zakopane', 'cafe', 'Cafe Tygodnik Podhalański', 4.5, 'Tadeusza Kościuszki 3, 34-500 Zakopane', '평점 높은 카페.', 'Highly rated café.', { reviewCount: 2060 }),

  // —— torun ——
  place('torun-fine_dining-1', 'torun', 'fine_dining', '4 Pory Roku', 4.6, 'Toruń', '토룬 최고 평가 레스토랑.', 'Widely regarded as the best restaurant in Toruń.'),
  place('torun-fine_dining-2', 'torun', 'fine_dining', 'Restauracja Chleb i Wino Toruń', 4.7, 'Rynek Staromiejski 22, 87-100 Toruń', '중앙광장의 평점 높은 유러피언 요리 레스토랑.', 'Highly rated European cuisine restaurant on the Old Market Square.', { reviewCount: 13065 }),
  place('torun-fine_dining-3', 'torun', 'fine_dining', 'Pierogarnia Stary Toruń', 4.6, 'Most Pauliński 2/10, 87-100 Toruń', '만두(피에로기) 전문점, 평점 높은 인기 레스토랑.', 'Pierogi specialist, a highly rated and popular restaurant.', { reviewCount: 16127 }),
  place('torun-fine_dining-4', 'torun', 'fine_dining', 'Restauracja Piernicova', 4.8, 'Przedzamcze 6B, 87-100 Toruń', '토룬 명물 진저브레드(피에르니크)를 테마로 한 평점 높은 레스토랑.', 'Highly rated restaurant themed around Toruń\'s iconic gingerbread (piernik).', { reviewCount: 1623 }),
  place('torun-fine_dining-5', 'torun', 'fine_dining', 'Restauracja Dobrý Den', 4.9, 'Rynek Staromiejski 1, 87-100 Toruń', '중앙광장의 평점 높은 레스토랑.', 'Highly rated restaurant on the Old Market Square.', { reviewCount: 1080 }),

  place('torun-bakery-1', 'torun', 'bakery', 'Bread House Cafe', 4.6, 'Fosa Staromiejska 2, 87-100 Toruń, Poland', '비건 디저트와 짭짤한 간식으로 유명한 토룬의 인기 베이커리 카페', 'Popular Torun bakery cafe praised for its wide vegan sweets and savory snacks selection'),
  place('torun-bakery-2', 'torun', 'bakery', 'Batumi Bakery', 4.9, 'Chełmińska 7, 87-100 Toruń', '평점 높은 베이커리.', 'Highly rated bakery.', { reviewCount: 114 }),
  place('torun-bakery-3', 'torun', 'bakery', 'Atelier Piernika', 4.8, 'Rynek Nowomiejski 22, 87-100 Toruń', '토룬 명물 진저브레드(피에르니크) 공방 겸 베이커리.', 'Bakery and workshop specializing in Toruń\'s iconic gingerbread (piernik).', { reviewCount: 63 }),
  place('torun-bakery-4', 'torun', 'bakery', 'Kawiarnia i Cukiernia Lenkiewicz', 4.6, 'Wielkie Garbary 14, 87-100 Toruń', '평점 높은 카페 겸 제과점.', 'Highly rated café and confectionery.', { reviewCount: 3255 }),
  place('torun-bakery-5', 'torun', 'bakery', 'Dobra Pączkarnia Toruń', 4.6, 'Szeroka 25, 87-100 Toruń', '폰치키(잼 도넛) 전문점.', 'Specialist in pączki jelly doughnuts.', { reviewCount: 623 }),

  place('torun-cafe-1', 'torun', 'cafe', 'Grand Coffee', 4.5, 'Rynek Staromiejski 12, 87-100 Toruń, Poland', '토룬에서 가장 오래된 카페, 시그니처 커피와 치즈케이크로 유명', 'Torun\'s oldest cafe, known for its signature coffee and velvety cheesecake'),
  place('torun-cafe-2', 'torun', 'cafe', 'Projekt Nano', 4.9, 'Podmurna 14, 87-100 Toruń', '평점 높은 인기 카페.', 'Highly rated, popular café.', { reviewCount: 2081 }),
  place('torun-cafe-3', 'torun', 'cafe', 'Torunianka Cafe', 4.9, 'Franciszkańska 16/1, 87-100 Toruń', '평점 높은 카페.', 'Highly rated café.', { reviewCount: 444 }),
  place('torun-cafe-4', 'torun', 'cafe', 'Neko Cafe', 4.7, 'Chełmińska 11, 87-100 Toruń', '헤움민스카 거리의 고양이 카페.', 'Cat café on Chełmińska street.', { reviewCount: 2223 }),
  place('torun-cafe-5', 'torun', 'cafe', 'Podmurna cafe', 4.9, 'Podmurna 81, 87-100 Toruń', '평점 높은 카페.', 'Highly rated café.', { reviewCount: 116 }),
]
