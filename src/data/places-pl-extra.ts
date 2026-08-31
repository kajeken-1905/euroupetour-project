import { place } from './placeFactory'
import type { Place } from '../types'

export const placesPLExtra: Place[] = [
  // —— warsaw ——
  place('warsaw-fine_dining-1', 'warsaw', 'fine_dining', 'Senses', 4.6, 'Warsaw', '모던 폴란드 파인.', 'Modern Polish fine dining.', { reviewCount: 900 }),
  place('warsaw-fine_dining-2', 'warsaw', 'fine_dining', 'Nolita', 4.5, 'Warsaw', '창의 코스.', 'Creative tasting.', { reviewCount: 1100 }),
  place('warsaw-fine_dining-3', 'warsaw', 'fine_dining', 'Stary Dom', 4.4, 'Warsaw', '전통 폴란드 요리.', 'Traditional Polish cuisine.', { reviewCount: 2800 }),
  place('warsaw-fine_dining-4', 'warsaw', 'fine_dining', 'Polka', 4.4, 'Warsaw', '홈스타일 폴란드.', 'Homestyle Polish.', { reviewCount: 2100 }),
  place('warsaw-fine_dining-5', 'warsaw', 'fine_dining', 'Bibenda', 4.5, 'Warsaw', '시즌 비스트로.', 'Seasonal bistro.', { reviewCount: 1600 }),
  place('warsaw-bakery-1', 'warsaw', 'bakery', 'Cukiernia Sowa', 4.4, 'Warsaw', '케이크·페이스트리.', 'Cakes and pastries.', { reviewCount: 3200 }),
  place('warsaw-bakery-2', 'warsaw', 'bakery', 'Piecyk bakery', 4.4, 'Warsaw', '로컬 빵집.', 'Local bakery.', { reviewCount: 1200 }),
  place('warsaw-bakery-3', 'warsaw', 'bakery', 'Zieniec', 4.5, 'Warsaw', '사워도우.', 'Sourdough.', { reviewCount: 900 }),
  place('warsaw-bakery-4', 'warsaw', 'bakery', 'A. Blikle', 4.4, 'Warsaw', '역사적 파티스리.', 'Historic pastry shop.', { reviewCount: 4800 }),
  place('warsaw-cafe-1', 'warsaw', 'cafe', 'Cafe Kafka', 4.5, 'Warsaw', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1600 }),
  place('warsaw-cafe-2', 'warsaw', 'cafe', 'Cukiernia Pawłowicz café', 4.3, 'Warsaw', '클래식 카페.', 'Classic café.', { reviewCount: 2100 }),
  place('warsaw-cafe-3', 'warsaw', 'cafe', 'Forum Meat & Coffee', 4.4, 'Warsaw', '브런치 카페.', 'Brunch café.', { reviewCount: 1400 }),
  place('warsaw-cafe-4', 'warsaw', 'cafe', 'Coffee Affair', 4.4, 'Warsaw', '로스터리 카페.', 'Roastery café.', { reviewCount: 1100 }),
  place('warsaw-korean-1', 'warsaw', 'korean', 'Miss Kimchi', 4.5, 'Żelazna 28/30, Warszawa', '한국식 치킨으로 유명한 한식당.', 'Korean restaurant known for its fried chicken.'),

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
