import { place } from './placeFactory'
import type { Place } from '../types'

export const placesUAExtra: Place[] = [
  // —— kyiv ——
  place('kyiv-fine_dining-1', 'kyiv', 'fine_dining', 'Mirali', 4.6, 'Tarasa Shevchenko Blvd 1, Kyiv, 01004, Ukraine', '포딜 지구에 위치한 우크라이나 계절 식재료를 활용한 창의적인 파인다이닝', 'Fine-dining restaurant in the Podil district celebrating Ukrainian seasonal and local ingredients with innovative gastronomy'),
  place('kyiv-fine_dining-2', 'kyiv', 'fine_dining', 'KANAPA', 4.5, 'Andriivskyi Uzviz 19, Kyiv, 01025, Ukraine', '안드리이우스키 언덕의 19세기 목조 가옥에 자리한 레스토랑, 현대적으로 재해석한 우크라이나 전통 요리로 키이우 파인다이닝 1위로 꼽힘', "Restaurant in a 19th-century wooden house on Andriivskyi Descent, serving modern reinterpretations of traditional Ukrainian dishes and widely ranked Kyiv's top fine-dining spot"),
  place('kyiv-fine_dining-3', 'kyiv', 'fine_dining', 'Pivna Duma', 4.5, 'Khreshchatyk St 10, Kyiv, 01001, Ukraine', '마이단 네잘레즈노스티 인근에 위치한 키이우에서 가장 오래된 크래프트 브루어리 겸 레스토랑', "Kyiv's oldest craft brewery and restaurant, located just off Maidan Nezalezhnosti"),
  place('kyiv-fine_dining-4', 'kyiv', 'fine_dining', 'Hutorets na Dnipri', 4.6, 'Naberezhno-Khreshchatytska St 10A, Kyiv, 04070, Ukraine', '드니프로 강변에 자리한 1998년 개업한 우크라이나 전통 요리 레스토랑, 강변 전망과 다양한 보드카로 유명', 'Ukrainian restaurant on the Dnipro riverbank open since 1998, known for its river views and extensive vodka selection'),
  place('kyiv-bakery-1', 'kyiv', 'bakery', 'Wolkonsky', 4.5, '26б Velyka Zhytomyrska St, Kyiv, Ukraine, 04053', '프랑스와 우크라이나 제과 전통을 결합한 키이우의 대표 파티스리 카페', 'Kyiv\'s leading patisserie cafe blending French and Ukrainian pastry traditions'),
  place('kyiv-bakery-2', 'kyiv', 'bakery', 'Bakehouse', 5.0, 'Mechnikova St 9, Kyiv, 01021, Ukraine', '굿와인 매장 안에 자리한 사워도우 전문 프랑스식 파티스리, 매일 정성껏 구운 천연 발효 빵과 디저트로 유명', 'French-style sourdough patisserie inside the Good Wine store, known for daily naturally fermented breads and desserts'),
  place('kyiv-cafe-1', 'kyiv', 'cafe', 'Come and Stay', 4.6, 'Velyka Vasylkivska St 23B, Kyiv, Ukraine, 02000', '다양한 필터 커피와 에스프레소로 사랑받는 키이우 최고의 커피숍 중 하나', 'One of Kyiv\'s most consistently top-rated coffee shops, known for its filter coffee and espresso drinks'),
  place('kyiv-korean-1', 'kyiv', 'korean', 'Arirang', 4.5, 'Beresteiskyi Ave 31, Kyiv, 02000, Ukraine', '폴리테크닉 인스티튜트 역 인근에 위치한, 20년 넘게 이어온 키이우 최초의 한식당', "Kyiv's very first Korean restaurant, family-run for over 20 years near Politekhnichnyi Instytut station"),
  place('kyiv-korean-2', 'kyiv', 'korean', 'Kim Kimchi Korean BBQ', 4.6, 'Velyka Vasylkivska St 38, Kyiv, 02000, Ukraine', '테이블에서 직접 구워 먹는 정통 한국식 바비큐 전문점', 'Authentic Korean barbecue restaurant with tableside charcoal grilling'),
  place('kyiv-korean-3', 'kyiv', 'korean', 'Seoul Soul Korean BBQ & Karaoke Bar', 4.9, 'Antonovycha St 170, Kyiv, 03150, Ukraine', '한국식 바비큐와 프라이빗 노래방을 함께 즐길 수 있는 키이우의 한식당', 'Korean restaurant in Kyiv combining Korean barbecue with private karaoke rooms'),

  // —— lviv ——
  place('lviv-fine_dining-1', 'lviv', 'fine_dining', 'Amadeus', 4.6, 'Katedralna Square 7, Lviv, 79008, Ukraine', '리비우 대성당 광장에 위치한 옛 오스트리아풍 인테리어가 돋보이는 유서 깊은 레스토랑', 'Renowned restaurant on Lviv\'s Katedralna Square with an atmospheric Old Austrian-style interior'),
  place('lviv-fine_dining-2', 'lviv', 'fine_dining', 'Mon Chef', 4.2, 'Horodotska St 15, Lviv, 79000, Ukraine', '아스토리아 호텔 내에 위치한 리비우의 세련된 유러피언 파인다이닝 레스토랑', "Refined European fine-dining restaurant inside Lviv's Astoria Hotel"),
  place('lviv-bakery-1', 'lviv', 'bakery', 'Cheese Bakery', 4.5, '120 Shevchenka St, Lviv, Ukraine', '우크라이나식 치즈케이크 시르니크로 유명한 리비우의 베이커리', 'Lviv bakery known for syrnyk, a Ukrainian cheesecake-like specialty'),
  place('lviv-bakery-2', 'lviv', 'bakery', 'Lviv Croissants', 4.3, 'Akademika Hnatiuka St 8, Lviv, 79000, Ukraine', '다양한 속재료의 크루아상으로 유명한 우크라이나 전역 체인의 리비우 매장', 'Lviv branch of the nationwide Ukrainian bakery chain known for its wide variety of filled croissants'),
  place('lviv-cafe-1', 'lviv', 'cafe', 'Svit Kavy', 4.6, 'Katedralna Square 6, 79029 Lviv, Ukraine', '대성당 광장에 위치한 3층 규모의 리비우 대표 커피하우스', 'Three-story landmark Lviv coffee house overlooking the cathedral square'),
  place('lviv-cafe-2', 'lviv', 'cafe', 'Grand Cafe Leopolis', 4.4, 'Rynok Square 1, Lviv, 79000, Ukraine', '리노크 광장 시청사(라투샤) 건물에 자리한 리비우의 역사적인 카페, 나폴레옹 케이크 레오폴리스로 유명', "Historic café inside Lviv's town hall (Ratusha) on Rynok Square, famous for its Leopolis napoleon cake"),

  // —— odesa ——
  // Bernardazzi closed after its home, the Odesa Philharmonic Theatre, was damaged in a Russian missile strike (31 Jan 2025);
  // its team reopened as Lili Bistro at a new address.
  place('odesa-fine_dining-1', 'odesa', 'fine_dining', 'Lili Bistro', 4.6, 'Sadova St 14, Odesa, 65000, Ukraine', '필하모닉 극장 피격으로 문을 닫은 베르나르다치 팀이 새로 연 이탈리안 와인 비스트로, 장작 화덕 피자와 와인 리스트로 유명', "Italian wine bistro opened by the team behind the now-closed Bernardazzi after their Philharmonic Theatre home was damaged in a missile strike, known for wood-fired pizza and its wine list"),
  place('odesa-fine_dining-2', 'odesa', 'fine_dining', 'Kumanets', 4.6, 'Havanna St 7, Odesa, 65000, Ukraine', '오데사 중심가에 위치한 우크라이나 전통 요리 전문 레스토랑', 'Ukrainian traditional cuisine restaurant in central Odesa'),
  place('odesa-fine_dining-3', 'odesa', 'fine_dining', 'Dacha', 4.5, 'Frantsuzkyi Blvd 85, Odesa, 65000, Ukraine', '프랑스 대로에 위치한 오데사 최고 인기 레스토랑 중 하나, 우크라이나·유럽 가정식 요리', "One of Odesa's most popular restaurants, on French Boulevard, serving Ukrainian and European home-style cuisine"),

  place('odesa-bakery-1', 'odesa', 'bakery', 'FAB Bakery', 4.6, 'Kiry Muratovoi St 3, Odesa, Ukraine, 65000', '2020년부터 사랑받아 온 오데사의 인기 베이커리, 치즈케이크로 유명', 'Beloved Odesa bakery since 2020, known for its heavenly cheesecakes'),
  place('odesa-bakery-2', 'odesa', 'bakery', 'Breadway', 4.5, 'Kanatna St 19/21, Odesa, 65000, Ukraine', '셰브첸코 공원 인근에 위치한 미국풍 인테리어의 베이커리, 크루아상과 수제 빵으로 인기', 'American-style bakery near Shevchenko Park, popular for its croissants and handmade breads'),
  place('odesa-cafe-1', 'odesa', 'cafe', 'Foundation Coffee Roasters', 4.7, 'Zhukovskogo St 19, Odesa, Ukraine, 65026', '우크라이나 최고의 로스터리 중 하나로 꼽히는 오데사의 커피숍', 'Odesa coffee shop widely regarded as one of the best coffee roasters in Ukraine'),
  place('odesa-cafe-2', 'odesa', 'cafe', 'Zheto', 4.6, 'Havanna St 2, Odesa, 65000, Ukraine', '시티 가든 아래에 자리한 오데사의 인기 커피하우스, 빈티지한 인테리어로 유명', "Popular Odesa coffee house beneath the City Garden, known for its vintage-styled interior"),
]
