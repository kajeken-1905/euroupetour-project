import { place } from './placeFactory'
import type { Place } from '../types'

export const placesPLExtra: Place[] = [
  // —— warsaw ——
  place('warsaw-fine_dining-1', 'warsaw', 'fine_dining', 'Senses', 'Bielańska 12, 00-085 Warszawa', '폴란드 전통 맛을 현대적으로 해석하는 레스토랑.', 'Restaurant giving Polish flavours a modern take.', { image: '/places/warsaw-fine_dining-1.jpg' }),
  place('warsaw-fine_dining-2', 'warsaw', 'fine_dining', 'Nolita', 'Wilcza 46, 00-679 Warszawa', '오픈 키친에서 폴란드·지중해·동남아 요리를 결합한 모던 다이닝.', 'Modern dining with an open kitchen blending Polish, Mediterranean, and Southeast Asian flavors.'),
  place('warsaw-fine_dining-3', 'warsaw', 'fine_dining', 'Stary Dom', 'Puławska 104/106, 02-620 Warszawa', '전통 폴란드 요리를 선보이는 대형 브라세리.', 'Large brasserie serving traditional Polish cuisine.'),
  place('warsaw-fine_dining-4', 'warsaw', 'fine_dining', 'Polka', 'Świętojańska 2, 00-288 Warszawa', '구시가 왕궁 옆 옛 건물에서 즐기는 프렌치풍 폴란드 요리.', 'French-inflected Polish cuisine served in a historic building next to the Royal Castle in the Old Town.', { image: '/places/warsaw-fine_dining-4.jpg' }),
  place('warsaw-fine_dining-5', 'warsaw', 'fine_dining', 'Bibenda', 'Nowogrodzka 10, 00-511 Warszawa', '채식 메뉴가 많은 와인 비스트로.', 'Wine bistro with plenty of vegetarian dishes.'),

  place('warsaw-bakery-1', 'warsaw', 'bakery', 'Cukiernia Sowa', 'Chmielna 11, 00-021 Warszawa', '1946년 시작한 가족 운영 제과점 체인. 케이크와 페이스트리가 있습니다.', 'Family-run pâtisserie chain founded in 1946, with cakes and pastries.'),
  place('warsaw-bakery-2', 'warsaw', 'bakery', 'A. Blikle', 'Nowy Świat 35, 00-029 Warszawa', '1869년부터 이어진 바르샤바의 제과점. 폰치키(잼 도넛)가 있습니다.', 'Warsaw pastry shop operating since 1869, with pączki doughnuts.'),

  place('warsaw-cafe-1', 'warsaw', 'cafe', 'Cafe Kafka', 'Oboźna 3, 00-340 Warszawa', '노트북 작업하기 좋은 바르샤바의 카페.', 'Laptop-friendly café in Warsaw.'),
  place('warsaw-cafe-2', 'warsaw', 'cafe', 'Cukiernia Pawłowicz', 'Chmielna 13, Warszawa', '1917년 창업한 전통 폴란드 파치키(도넛) 제과점.', 'Traditional Polish pączki (doughnut) patisserie, established in 1917.'),
  place('warsaw-cafe-3', 'warsaw', 'cafe', 'Forum', 'Elektoralna 11, 00-137 Warszawa', '바르샤바의 스페셜티 커피 바.', 'Specialty coffee bar in Warsaw.'),

  place('warsaw-korean-1', 'warsaw', 'korean', 'Miss Kimchi', 'Żelazna 58/62, Warszawa', '한국식 치킨을 내는 한식당.', 'Korean restaurant serving fried chicken.'),

  // —— krakow ——
  place('krakow-fine_dining-1', 'krakow', 'fine_dining', 'Starka', 'Józefa 14, 31-056 Kraków', '카지미에시의 폴란드 비스트로. 직접 숙성한 보드카와 만두·훈제 오리를 냅니다.', 'Polish bistro in Kazimierz with house-aged vodkas, dumplings and smoked duck.'),
  place('krakow-fine_dining-2', 'krakow', 'fine_dining', 'Pod Wawelem Kompania Kuflowa', 'Świętej Gertrudy 26/29, 31-048 Kraków', '바벨성 맞은편 호텔 1층의 맥주 레스토랑. 큰 맥주잔과 푸짐한 고기 요리가 특징입니다.', 'Beer restaurant on the ground floor of a hotel opposite Wawel, with big mugs of beer and hearty meat dishes.'),
  place('krakow-fine_dining-3', 'krakow', 'fine_dining', 'Morskie Oko', 'Plac Szczepański 8, 31-011 Kraków', '아르누보 건물의 산악 지방풍 레스토랑. 저녁에는 전통 의상 차림 가수들이 공연합니다.', 'Highlander-style restaurant in an Art Nouveau building, with costumed folk singers in the evenings.'),
  place('krakow-fine_dining-4', 'krakow', 'fine_dining', 'Szara Gęś w Kuchni Restaurant', 'Rynek Główny 17, 31-008 Kraków', '중앙광장의 모던 폴란드 레스토랑. 가금류 요리에 강하고 와인 리스트로 상을 받았습니다.', 'Modern Polish restaurant on the Main Square, strong on poultry, with an award-winning wine list.'),
  place('krakow-fine_dining-5', 'krakow', 'fine_dining', 'Pierwszy Stopień Restaurant', 'Krakowska 17, 31-062 Kraków', '카지미에시의 레스토랑. 지역 식재료로 폴란드·국제 요리를 내고 채식 메뉴가 많습니다.', 'Kazimierz restaurant cooking Polish and international dishes with local produce; plenty of vegetarian options.'),

  place('krakow-bakery-3', 'krakow', 'bakery', 'Chimney Cake Bakery', 'Basztowa 26A, 31-131 Kraków', '헝가리식 굴뚝빵 킈르퇴시칼라치 가게. 아이스크림을 굴뚝빵 콘에 담아 줍니다.', 'Hungarian chimney-cake shop that also serves ice cream in chimney-cake cones.'),
  place('krakow-bakery-4', 'krakow', 'bakery', 'Confectionery Under Arcades', 'Krakowska 5, 31-066 Kraków', '카지미에시 근처의 제과점. 퐁치키(잼 도넛)가 크라쿠프 최고 순위에 오른 적이 있습니다.', 'Pastry shop near Kazimierz whose pączki once topped a ranking of Kraków\'s best doughnuts.'),
  place('krakow-bakery-5', 'krakow', 'bakery', 'Lajkonik Piekarnia i Kawiarnia', 'Plac Dominikański 2, 31-043 Kraków', '크라쿠프 빵집 카페 체인 라이코니크의 도미니칸 광장 지점.', 'Dominican Square branch of the Kraków bakery-café chain Lajkonik.'),

  place('krakow-cafe-2', 'krakow', 'cafe', 'Gossip Cafe', 'Świętego Jana 30, 31-018 Kraków', '구시가의 아침·브런치 카페. 프렌치토스트와 오믈렛이 인기입니다.', 'Old Town breakfast and brunch café; French toast and omelettes are favourites.', { image: '/places/krakow-cafe-2.jpg' }),
  place('krakow-cafe-3', 'krakow', 'cafe', 'B.O.H.O Coffee&Bar', 'Stolarska 6, 31-043 Kraków', '아치형 창과 개성 있는 가구로 꾸민 카페 겸 바.', 'Café-bar with arched windows and eclectic furniture.'),
  place('krakow-cafe-4', 'krakow', 'cafe', 'Cytat Café', 'Miodowa 23, 31-055 Kraków', '중고 책으로 가득한 카지미에시의 문학 카페. 큰 커피에는 인용구를 적어 줍니다.', 'Literary café in Kazimierz full of second-hand books; large coffees come with a printed quote.'),
  place('krakow-cafe-5', 'krakow', 'cafe', 'Camelot Cafe', 'Św. Tomasza 17, 31-021 Kraków', '민속 공예품으로 꾸민 구시가의 카페. 지하에는 극장이 있습니다.', 'Old Town café decorated with folk art, with a theatre in its cellars.'),

  // —— gdansk ——
  place('gdansk-fine_dining-1', 'gdansk', 'fine_dining', 'Kubicki Restaurant', 'Wartka 5, 80-855 Gdańsk', '1918년 카페로 시작한 그단스크에서 가장 오래된 레스토랑. 모트와바 강가 자리와 피아노 연주가 있습니다.', 'Gdańsk\'s oldest restaurant, begun as a café in 1918, with riverside tables and live piano.'),
  place('gdansk-fine_dining-2', 'gdansk', 'fine_dining', 'Restauracja Bazar', 'Szafarnia 6, 80-755 Gdańsk', '폴란드 가정식을 새롭게 낸 레스토랑. 오리 피에로기가 인기입니다.', 'Restaurant giving Polish comfort food a twist; the duck dumplings are popular.'),
  place('gdansk-fine_dining-3', 'gdansk', 'fine_dining', 'Motlava Restaurant', 'Stara Stocznia 2/1, 80-751 Gdańsk', '구시가 건너편 옛 조선소 부지의 폴란드 레스토랑. 손으로 빚은 만두를 냅니다.', 'Polish restaurant on the old shipyard site across from the Old Town, with handmade dumplings.'),
  place('gdansk-fine_dining-4', 'gdansk', 'fine_dining', 'Swojski Smak', 'Jana Heweliusza 25/27, 80-861 Gdańsk', '구시가 중심의 폴란드 가정식 식당. 가격이 저렴합니다.', 'Polish home-cooking restaurant in the centre at affordable prices.'),
  place('gdansk-fine_dining-5', 'gdansk', 'fine_dining', 'Pierogarnia Mandu Gdańsk Śródmieście', 'Elżbietańska 4/8, 80-849 Gdańsk', '주문 즉시 빚는 피에로기 전문점. 글루텐 프리·채식 피에로기도 있습니다.', 'Pierogi house making dumplings to order, including gluten-free and vegetarian versions.'),

  place('gdansk-bakery-1', 'gdansk', 'bakery', 'Cukiernia W-Z', 'Słodowników 1, 80-823 Gdańsk, Poland', '그단스크에서 오래된 제과점 중 하나. 체리 퐁치키와 사과 샤를로트카가 인기입니다.', 'One of Gdańsk\'s oldest pastry shops; the cherry pączki and apple szarlotka are favourites.'),
  place('gdansk-bakery-4', 'gdansk', 'bakery', 'OMNI KAISER Patisserie', 'Długie Pobrzeże 13, 80-888 Gdańsk', '모트와바 강변의 현대식 제과점. 케이크와 디저트가 대표입니다.', 'Modern patisserie on the Motława waterfront, focused on cakes and desserts.'),
  place('gdansk-bakery-5', 'gdansk', 'bakery', 'Piekarnia Gdańsk', 'Rajska 8, 80-850 Gdańsk', '구시가 라이스카 거리의 빵집. 아침·점심 메뉴도 있습니다.', 'Bakery on Rajska street near the Old Town, also serving breakfast and lunch.'),

  place('gdansk-cafe-2', 'gdansk', 'cafe', 'Kawiarnia Drukarnia', 'Mariacka 36, 80-833 Gdańsk', '전후 첫 인쇄소 자리였던 마리아츠카 거리의 스페셜티 커피 카페. 브런치와 케이크가 인기입니다.', 'Specialty coffee café on Mariacka in a former printing house, popular for brunch and cakes.'),
  place('gdansk-cafe-3', 'gdansk', 'cafe', 'Leń', 'Ul. Piwna 52/53, 80-831 Gdańsk', '피브나 거리의 아늑한 카페. 브루잉 커피와 차, 직접 만든 치즈케이크를 냅니다.', 'Cosy café on Piwna with brewed coffee, many teas and homemade cheesecake.'),
  place('gdansk-cafe-4', 'gdansk', 'cafe', 'Kaffe Perro Negro', 'Świętego Ducha 37/39, 80-834 Gdańsk', '관광객 붐비는 곳에서 살짝 비켜난 아담한 카페. 에스프레소 토닉과 사과 파이가 인기입니다.', 'Intimate café a step away from the tourist crowds; espresso tonic and apple pie are favourites.'),
  place('gdansk-cafe-5', 'gdansk', 'cafe', 'Kawiarnia Retro', 'Ul. Piwna 5/6, 80-831 Gdańsk', '재봉틀 테이블로 꾸민 레트로 카페. 메밀 초콜릿 케이크가 유명합니다.', 'Retro café with sewing-machine tables, famous for its buckwheat chocolate cake.'),

  // —— wroclaw ——
  place('wroclaw-fine_dining-1', 'wroclaw', 'fine_dining', 'Restauracja Katedralna 9', 'Katedralna 9, 50-328 Wrocław', '오스트루프 툼스키의 전망 좋은 레스토랑.', 'Restaurant with views on Ostrów Tumski.'),
  place('wroclaw-fine_dining-2', 'wroclaw', 'fine_dining', 'Konspira', 'Plac Solny 11, 50-062 Wrocław', '음식 양이 푸짐한 브로츠와프의 오래된 폴란드 요리 식당.', 'Long-running Polish restaurant known for generous portions.', { image: '/places/wroclaw-fine_dining-2.jpg' }),
  place('wroclaw-fine_dining-3', 'wroclaw', 'fine_dining', 'Wrocławska', 'Szewska 59/60, 50-139 Wrocław', '브로츠와프 요리를 내는 식당.', 'Restaurant serving Wrocław dishes.'),
  place('wroclaw-fine_dining-4', 'wroclaw', 'fine_dining', 'Pod Papugami - Restaurant & Cocktail Bar', 'Sukiennice 9a, 50-107 Wrocław', '수키에니체의 레스토랑 겸 칵테일 바.', 'Restaurant and cocktail bar on Sukiennice.'),
  place('wroclaw-fine_dining-5', 'wroclaw', 'fine_dining', 'STÓŁ na Szwedzkiej - studio kulinarne', 'Szwedzka 17A, 51-128 Wrocław', '컬리너리 스튜디오형 레스토랑.', 'Culinary-studio-style restaurant.'),

  place('wroclaw-bakery-1', 'wroclaw', 'bakery', 'Chimney Cake Bakery', 'Marszałka Józefa Piłsudskiego 14, 50-033 Wrocław, Poland', '헝가리식 굴뚝빵을 구워 파는 브로츠와프의 가게.', 'Wrocław shop baking Hungarian-style chimney cakes.'),
  place('wroclaw-bakery-2', 'wroclaw', 'bakery', 'Poko Bakery & Cafe', 'Świętego Antoniego 2/4, 50-073 Wrocław', '포코이호프 파사주 안의 베이커리 카페.', 'Bakery café inside the Pokoyhof passage.'),
  place('wroclaw-bakery-3', 'wroclaw', 'bakery', 'Dessert Boutique – Cukiernia Premium Wrocław', 'Świętego Mikołaja 43, 50-127 Wrocław', '프리미엄 제과점.', 'Premium confectionery.'),
  place('wroclaw-bakery-4', 'wroclaw', 'bakery', 'Hert Bakery', 'Rynek 46/47, 50-116 Wrocław', '중앙 광장(리네크)의 빵집.', 'Bakery on the Market Square.'),
  place('wroclaw-bakery-5', 'wroclaw', 'bakery', 'Tortownia na Bema', 'Krupnicza 8, 50-075 Wrocław', '주문 케이크를 만드는 제과점.', 'Confectionery making custom cakes.'),

  place('wroclaw-cafe-1', 'wroclaw', 'cafe', 'Paloma', 'Plac Solny 8-9, 50-062 Wrocław, Poland', '우크라이나인이 운영하는 브로츠와프의 스페셜티 커피 로스터리 겸 카페', 'Ukrainian-owned specialty coffee roastery and cafe in central Wroclaw'),
  place('wroclaw-cafe-2', 'wroclaw', 'cafe', 'Gniazdo', 'Świdnicka 36, 50-066 Wrocław', '시비드니츠카 거리의 카페.', 'Café on Świdnicka street.'),
  place('wroclaw-cafe-3', 'wroclaw', 'cafe', 'Vinyl Cafe', 'Kotlarska 35/36, 50-153 Wrocław', '코틀라르스카 거리의 카페.', 'Café on Kotlarska street.'),
  place('wroclaw-cafe-4', 'wroclaw', 'cafe', 'Chmiel kawę', 'Szewska 27A, 50-139 Wrocław', '스페셜티 커피숍.', 'Specialty coffee shop.'),
  place('wroclaw-cafe-5', 'wroclaw', 'cafe', 'Yerba Café', 'Księcia Witolda 21, 50-243 Wrocław', '브렉퍼스트 카페, 예약도 가능.', 'Breakfast café, reservations available.'),

  // —— poznan ——
  place('poznan-fine_dining-1', 'poznan', 'fine_dining', 'Ptasie Radio', 'Kościuszki 74/3, Poznań', '투빔의 동시에서 이름을 딴 새 테마 카페 겸 레스토랑. 20년 넘게 이어왔고 여름엔 정원이 열립니다.', 'Bird-themed café-restaurant named after a Tuwim children\'s poem, running for over 20 years, with a summer garden.'),
  place('poznan-fine_dining-2', 'poznan', 'fine_dining', 'Wiejskie Jadło Poznań', 'Stary Rynek 77, 61-772 Poznań', '중앙광장의 폴란드 전통 식당. 빵 그릇 주레크와 골롱카가 대표입니다.', 'Traditional Polish restaurant on the Old Market Square; żurek in a bread bowl and golonka are signatures.'),
  place('poznan-fine_dining-3', 'poznan', 'fine_dining', 'Restauracja Vis A Vis Koziołków', 'Stary Rynek 40, 61-772 Poznań', '시청이 보이는 중앙광장의 레스토랑. 오리 콩피와 거위 버거를 냅니다.', 'Old Market Square restaurant facing the Town Hall, with duck confit and a goose burger.'),
  place('poznan-fine_dining-4', 'poznan', 'fine_dining', 'Na Winklu', 'Śródka 1, 61-125 Poznań', '2015년부터 시루드카 모퉁이에 있는 피에로기 식당. 계절 메뉴가 있습니다.', 'Pierogi restaurant on a Śródka corner since 2015, with seasonal specials.'),
  place('poznan-fine_dining-5', 'poznan', 'fine_dining', 'NOOKS', 'Poplińskich 1, 61-762 Poznań', '그릴 고기와 해산물이 중심인 지하 레스토랑. 미쉐린 가이드에 실렸고 예약을 권합니다.', 'Basement restaurant centred on grilled meat and seafood, listed in the MICHELIN Guide; booking advised.'),

  place('poznan-bakery-2', 'poznan', 'bakery', 'ROGAL Świętomarciński', 'Stary Rynek 11/17, 61-772 Poznań', '파베우 미에샤와가 운영하는 가족 제과점. 포즈난 명물 성 마르틴 크루아상을 매일 굽습니다.', 'Family pastry shop run by Paweł Mieszała, baking Poznań\'s St Martin\'s croissants daily.'),
  place('poznan-bakery-4', 'poznan', 'bakery', 'Artisan Poznań', 'Szkolna 9, 61-833 Poznań', '구시가의 빵집 겸 카페. 아침·샌드위치·수프·디저트를 냅니다.', 'Old Town bakery-café with breakfast, sandwiches, soups and desserts.'),

  place('poznan-cafe-2', 'poznan', 'cafe', 'Oldskulowa Cafe & Restaurant', 'Fredry 2, 61-701 Poznań', '허스키가 사는 레트로풍 카페. 다양한 추출 커피와 하루 종일 아침 메뉴를 냅니다.', 'Retro café with a resident husky, serving coffee by several brew methods and all-day breakfast.'),
  place('poznan-cafe-3', 'poznan', 'cafe', 'Stragan Kawiarnia', 'Ratajczaka 31, 61-816 Poznań', '2010년대 초부터 있는 스페셜티 커피 카페. 자체 로스터리 원두와 매일 굽는 베이글을 냅니다.', 'Specialty coffee café since the early 2010s, with beans from its own roastery and daily-baked bagels.'),
  place('poznan-cafe-4', 'poznan', 'cafe', 'LAGACCA Cafe', 'Woźna 21, 61-777 Poznań', '예지체의 브리스만을 이은 구시가 근처 스페셜티 커피 카페. 드립과 케멕스를 냅니다.', 'Specialty coffee café near the Old Market, successor to Jeżyce\'s Brisman, serving drip and Chemex.'),

  // —— zakopane ——
  place('zakopane-fine_dining-1', 'zakopane', 'fine_dining', 'Zakopiańska', 'Jagiellońska 18, 34-500 Zakopane', '자코파네의 레스토랑.', 'Restaurant in Zakopane.'),
  place('zakopane-fine_dining-2', 'zakopane', 'fine_dining', 'Gazdowo Kuźnia', 'Krupówki 1, 34-500 Zakopane', '크루푸프키 거리의 고랄레(산악민) 전통 요리 레스토랑.', 'Restaurant on Krupówki serving traditional Góral highlander cuisine.'),
  place('zakopane-fine_dining-3', 'zakopane', 'fine_dining', 'Bąkowo Zohylina Niźnio', 'Józefa Piłsudskiego 6, 34-500 Zakopane', '폴란드 산악 요리 레스토랑.', 'Polish highland-cuisine restaurant.'),
  place('zakopane-fine_dining-4', 'zakopane', 'fine_dining', 'Marzanna i Ryszard Bubka', 'Droga Oswalda Balzera 17e, 34-500 Zakopane', '전통 폴란드 요리 레스토랑.', 'Traditional Polish cuisine restaurant.'),
  place('zakopane-fine_dining-5', 'zakopane', 'fine_dining', 'Karczma Zapiecek', 'Krupówki 43, 34-500 Zakopane', '크루푸프키 거리의 전통 폴란드 여관식 레스토랑.', 'Traditional Polish tavern-style restaurant on Krupówki.'),

  place('zakopane-bakery-1', 'zakopane', 'bakery', 'Piekarnia-Cukiernia Dańca', 'ul. Kościeliska 5, 34-500 Zakopane, Poland', '케이크가 다양한 자코파네의 제과점.', 'Zakopane bakery with a wide choice of cakes.'),
  place('zakopane-bakery-2', 'zakopane', 'bakery', 'Lwów Croissants', 'Krupówki 41, 34-500 Zakopane', '크루푸프키 거리의 크루아상 전문점.', 'Croissant specialist on Krupówki street.'),
  place('zakopane-bakery-3', 'zakopane', 'bakery', 'Cukiernia SAMANTA (Krupówki)', 'Krupówki 4a, 34-500 Zakopane', '크루푸프키 거리의 인기 제과점 체인 지점.', 'Krupówki-street branch of the popular Samanta confectionery chain.'),
  place('zakopane-bakery-4', 'zakopane', 'bakery', 'Cukiernia SAMANTA (Kasprusie)', 'Kasprusie 34, 34-500 Zakopane', '카스프루시에 거리의 사만타 제과점 지점.', 'Kasprusie-street branch of the Samanta confectionery chain.'),

  place('zakopane-cafe-1', 'zakopane', 'cafe', 'LA MANO Speciality Coffee', 'Władysława Orkana 1F, 34-500 Zakopane, Poland', '15년 경력의 오너가 운영하는 자코파네의 스페셜티 커피 & 와인바', 'Specialty coffee and wine bar in Zakopane run by owners with 15 years of experience'),
  place('zakopane-cafe-2', 'zakopane', 'cafe', 'STRH Bistro Art Cafe', 'Krupówki 4a (top floor), 34-500 Zakopane', '크루푸프키 거리 건물 꼭대기 층의 비스트로 카페. 타트라 산이 보이는 테라스가 있습니다.', 'Bistro café on the top floor of a Krupówki building, with a terrace facing the Tatras.'),
  place('zakopane-cafe-3', 'zakopane', 'cafe', 'Kawiarnia Filiżanki', 'Grunwaldzka 4A, 34-500 Zakopane', '브렉퍼스트 카페.', 'Breakfast café.'),
  place('zakopane-cafe-4', 'zakopane', 'cafe', 'Eko Chatka', 'Droga Oswalda Balzera 21, 34-500 Zakopane', '카페.', 'Café.'),
  place('zakopane-cafe-5', 'zakopane', 'cafe', 'Cafe Tygodnik Podhalański', 'Tadeusza Kościuszki 3, 34-500 Zakopane', '카페.', 'Café.'),

  // —— torun ——
  place('torun-fine_dining-1', 'torun', 'fine_dining', '4 Pory Roku', 'Przedzamcze 4-6, 87-100 Toruń, Poland', '토룬의 레스토랑.', 'Restaurant in Toruń.'),
  place('torun-fine_dining-2', 'torun', 'fine_dining', 'Restauracja Chleb i Wino Toruń', 'Rynek Staromiejski 22, 87-100 Toruń', '중앙광장의 유러피언 요리 레스토랑.', 'European cuisine restaurant on the Old Market Square.'),
  place('torun-fine_dining-3', 'torun', 'fine_dining', 'Pierogarnia Stary Toruń', 'Most Pauliński 2/10, 87-100 Toruń', '피에로기(폴란드 만두) 식당.', 'Pierogi restaurant.'),
  place('torun-fine_dining-4', 'torun', 'fine_dining', 'Restauracja Piernicova', 'Przedzamcze 6B, 87-100 Toruń', '토룬 생강빵(피에르니크)을 테마로 한 식당.', 'Restaurant themed around Toruń gingerbread (piernik).'),
  place('torun-fine_dining-5', 'torun', 'fine_dining', 'Restauracja Dobrý Den', 'Rynek Staromiejski 1, 87-100 Toruń', '중앙광장의 레스토랑.', 'Restaurant on the Old Market Square.'),

  place('torun-bakery-1', 'torun', 'bakery', 'Bread House Cafe', 'Fosa Staromiejska 2, 87-100 Toruń, Poland', '직접 굽는 빵과 베이글, 비건 아침 메뉴가 있는 카페.', 'Café with house-baked bread, bagels and vegan breakfasts.'),
  place('torun-bakery-4', 'torun', 'bakery', 'Kawiarnia i Cukiernia Lenkiewicz', 'Wielkie Garbary 14, 87-100 Toruń', '카페 겸 제과점.', 'Café and confectionery.'),
  place('torun-bakery-5', 'torun', 'bakery', 'Dobra Pączkarnia Toruń', 'Szeroka 25, 87-100 Toruń', '폰치키(잼 도넛) 전문점.', 'Specialist in pączki jelly doughnuts.'),

  place('torun-cafe-1', 'torun', 'cafe', 'Grand Coffee', 'Rynek Staromiejski 12, 87-100 Toruń, Poland', '커피와 치즈케이크가 있는 토룬의 오래된 카페.', 'Long-established Toruń café with coffee and cheesecake.'),
  place('torun-cafe-2', 'torun', 'cafe', 'Projekt Nano', 'Podmurna 14, 87-100 Toruń', '토룬의 카페.', 'Café in Toruń.'),
  place('torun-cafe-3', 'torun', 'cafe', 'Torunianka Cafe', 'Franciszkańska 16/1, 87-100 Toruń', '카페.', 'Café.'),
  place('torun-cafe-4', 'torun', 'cafe', 'Neko Cafe', 'Chełmińska 11, 87-100 Toruń', '헤움민스카 거리의 고양이 카페.', 'Cat café on Chełmińska street.'),
  place('torun-cafe-5', 'torun', 'cafe', 'Podmurna cafe', 'Podmurna 81, 87-100 Toruń', '카페.', 'Café.'),
]
