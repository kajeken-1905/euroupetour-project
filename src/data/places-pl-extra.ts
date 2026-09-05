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
  place('krakow-bakery-1', 'krakow', 'bakery', 'Massolit Bakery & Cafe', 4.5, 'Kazimierza Brodzińskiego 4, 30-506 Kraków, Poland', '카지미에시 지구 게토 영웅 광장 인근의 인기 베이커리 카페, 맛있는 빵과 베이글로 유명', 'Popular Kraków bakery café near Plac Bohaterów Getta, known for delicious bread and bagels'),
  place('krakow-cafe-1', 'krakow', 'cafe', 'Lajkonik Bakery & Cafe', 4.4, 'Tomasza 25, 31-027 Kraków, Poland', '달콤한 폰치키(잼 도넛)로 유명한 크라쿠프의 베이커리 카페 체인', 'Kraków bakery café chain known for its sweet pączki jelly donuts'),

  // —— gdansk ——
  place('gdansk-fine_dining-1', 'gdansk', 'fine_dining', 'Kubicki Restaurant', 4.5, 'Wartka 5, 80-855 Gdańsk', '그단스크 구시가의 대표 레스토랑.', 'Leading restaurant in Gdańsk\'s Old Town.'),
  place('gdansk-bakery-1', 'gdansk', 'bakery', 'Cukiernia W-Z', 4.5, 'Podwale Staromiejskie 82, 80-844 Gdańsk, Poland', '그단스크 구시가지의 유명한 폴란드 전통 제과점, 사과 샤를로트카로 유명', 'Well-known traditional Polish bakery in Gdansk\'s old town, famous for apple szarlotka'),
  place('gdansk-cafe-1', 'gdansk', 'cafe', 'Pożegnanie z Afryką', 4.5, 'Grobla III 1/6D, 80-840 Gdańsk, Poland', '세계 각지 원두를 취급하는 그단스크의 인기 스페셜티 커피숍', 'Popular specialty coffee shop in Gdansk sourcing beans from around the world'),

  // —— wroclaw ——
  place('wroclaw-fine_dining-1', 'wroclaw', 'fine_dining', 'Restauracja Katedralna 9', 4.5, 'Katedralna 9, 50-328 Wrocław', '오스트루프 툼스키의 전망 좋은 레스토랑.', 'Restaurant with views on Ostrów Tumski.'),
  place('wroclaw-bakery-1', 'wroclaw', 'bakery', 'Chimney Cake Bakery', 4.5, 'Marszałka Józefa Piłsudskiego 14, 50-033 Wrocław, Poland', '헝가리식 킈르퇴시칼라치(굴뚝빵)를 갓 구워 파는 브로츠와프의 인기 베이커리', 'Popular Wroclaw bakery serving warm Hungarian-style chimney cakes with various toppings'),
  place('wroclaw-cafe-1', 'wroclaw', 'cafe', 'Paloma', 4.6, 'Plac Solny 8-9, 50-062 Wrocław, Poland', '우크라이나인이 운영하는 브로츠와프의 스페셜티 커피 로스터리 겸 카페', 'Ukrainian-owned specialty coffee roastery and cafe in central Wroclaw'),

  // —— poznan ——
  place('poznan-fine_dining-1', 'poznan', 'fine_dining', 'Ptasie Radio', 4.6, 'Stanisława Wyspiańskiego 26A, 60-751 Poznań', '아르누보 건물의 컨트리 시크 레스토랑.', 'Country-chic restaurant in an Art Nouveau building.'),
  place('poznan-bakery-1', 'poznan', 'bakery', 'Mąka Woda Sól', 4.5, 'Aleje Karola Marcinkowskiego 14, 61-827 Poznań, Poland', '크루아상과 빵으로 유명한 포즈난의 인기 베이커리 카페', 'Popular Poznan bakery cafe known for croissants and bread, great for breakfast'),
  place('poznan-cafe-1', 'poznan', 'cafe', 'GLANC', 4.5, 'Ulica Józefa Strusia 9, 60-740 Poznań, Poland', '발틱 타워 옆에 위치한 우아한 인테리어의 포즈난 카페', 'Elegant Poznan cafe with marble tables located beside the Baltyk Tower'),

  // —— zakopane ——
  place('zakopane-fine_dining-1', 'zakopane', 'fine_dining', 'Zakopiańska', 4.6, 'Jagiellońska 18, 34-500 Zakopane', '자코파네 최고 평가 레스토랑.', 'Widely regarded as the best restaurant in Zakopane.'),
  place('zakopane-bakery-1', 'zakopane', 'bakery', 'Piekarnia-Cukiernia Dańca', 4.6, 'ul. Kościeliska 5, 34-500 Zakopane, Poland', '친절한 서비스와 다양한 케이크로 유명한 자코파네의 인기 제과점', 'Popular Zakopane bakery known for friendly service and an impressive cake selection'),
  place('zakopane-cafe-1', 'zakopane', 'cafe', 'LA MANO Speciality Coffee', 4.7, 'Władysława Orkana 1F, 34-500 Zakopane, Poland', '15년 경력의 오너가 운영하는 자코파네의 스페셜티 커피 & 와인바', 'Specialty coffee and wine bar in Zakopane run by owners with 15 years of experience'),

  // —— torun ——
  place('torun-fine_dining-1', 'torun', 'fine_dining', '4 Pory Roku', 4.6, 'Toruń', '토룬 최고 평가 레스토랑.', 'Widely regarded as the best restaurant in Toruń.'),

  place('torun-bakery-1', 'torun', 'bakery', 'Bread House Cafe', 4.6, 'Fosa Staromiejska 2, 87-100 Toruń, Poland', '비건 디저트와 짭짤한 간식으로 유명한 토룬의 인기 베이커리 카페', 'Popular Torun bakery cafe praised for its wide vegan sweets and savory snacks selection'),
  place('torun-cafe-1', 'torun', 'cafe', 'Grand Coffee', 4.5, 'Rynek Staromiejski 12, 87-100 Toruń, Poland', '토룬에서 가장 오래된 카페, 시그니처 커피와 치즈케이크로 유명', 'Torun\'s oldest cafe, known for its signature coffee and velvety cheesecake'),
]
