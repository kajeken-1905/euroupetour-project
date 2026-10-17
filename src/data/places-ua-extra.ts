import { place } from './placeFactory'
import type { Place } from '../types'

export const placesUAExtra: Place[] = [
  // —— kyiv ——
  place('kyiv-fine_dining-1', 'kyiv', 'fine_dining', 'Mirali', 'Tarasa Shevchenko Blvd 1, Kyiv, 01004, Ukraine', '포딜 지구에 위치한 우크라이나 계절 식재료를 활용한 창의적인 파인다이닝', 'Fine-dining restaurant in the Podil district celebrating Ukrainian seasonal and local ingredients with innovative gastronomy'),
  place('kyiv-fine_dining-2', 'kyiv', 'fine_dining', 'KANAPA', 'Andriivskyi Uzviz 19, Kyiv, 01025, Ukraine', '안드리우스키 언덕의 19세기 목조 주택 레스토랑. 우크라이나 전통 요리를 현대적으로 냅니다.', 'Restaurant in a 19th-century wooden house on Andriivskyi Descent, serving modern takes on Ukrainian dishes.', { image: '/places/kyiv-fine_dining-2.jpg' }),
  place('kyiv-fine_dining-3', 'kyiv', 'fine_dining', 'Pivna Duma', 'Khreshchatyk St 10, Kyiv, 01001, Ukraine', '독립 광장 근처의 크래프트 맥주 양조장 겸 레스토랑.', 'Craft brewery and restaurant just off Maidan Nezalezhnosti.'),
  place('kyiv-fine_dining-4', 'kyiv', 'fine_dining', 'Hutorets na Dnipri', 'Naberezhno-Khreshchatytska St 10A, Kyiv, 04070, Ukraine', '드니프로 강변의 우크라이나 식당(1998년부터). 강 전망이 있습니다.', 'Ukrainian restaurant on the Dnipro riverbank (since 1998) with river views.'),
  place('kyiv-bakery-1', 'kyiv', 'bakery', 'Wolkonsky', '26б Velyka Zhytomyrska St, Kyiv, Ukraine, 04053', '프랑스와 우크라이나 제과를 결합한 키이우의 파티스리 카페.', 'Kyiv pâtisserie café blending French and Ukrainian pastry.'),
  place('kyiv-bakery-2', 'kyiv', 'bakery', 'Bakehouse', 'Mechnikova St 9, Kyiv, 01021, Ukraine', '굿와인 매장 안의 프랑스식 사워도우 파티스리.', 'French-style sourdough pâtisserie inside the Good Wine store.'),
  place('kyiv-cafe-1', 'kyiv', 'cafe', 'Come and Stay', 'Velyka Vasylkivska St 23B, Kyiv, Ukraine, 02000', '필터 커피와 에스프레소를 내는 키이우의 커피숍.', 'Kyiv coffee shop serving filter coffee and espresso drinks.'),
  place('kyiv-cafe-2', 'kyiv', 'cafe', 'One Love Coffee', 'PinchukArtCentre, 1/3-2 Velyka Vasylkivska St, Kyiv', '핀추크아트센터 6층의 키이우 중심가 파노라마 전망 카페.', 'Café on the 6th floor of the PinchukArtCentre with panoramic views over central Kyiv.'),
  place('kyiv-cafe-3', 'kyiv', 'cafe', 'Kashtan Coffee', 'Reitarska Street 9B, 01034 Kyiv, Ukraine', '에스프레소 토닉·콜드브루와 디저트가 있는 아늑한 커피숍.', 'Cosy coffee shop with espresso tonic, cold brew and sweets.'),
  place('kyiv-cafe-4', 'kyiv', 'cafe', 'Bimbo Coffee & More', 'Volodymyro-Lybidska Street 16, Kyiv, Ukraine', '에스프레소 토닉과 양파 파이가 있는 키이우 중심가의 스페셜티 커피숍.', 'Central Kyiv specialty coffee shop with espresso tonics and onion pies.'),
  place('kyiv-korean-1', 'kyiv', 'korean', 'Arirang', 'Beresteiskyi Ave 31, Kyiv, 02000, Ukraine', '폴리테크니치니 인스티투트역 근처의 가족 운영 한식당.', 'Family-run Korean restaurant near Politekhnichnyi Instytut station.'),
  place('kyiv-korean-2', 'kyiv', 'korean', 'Kim Kimchi Korean BBQ', 'Velyka Vasylkivska St 38, Kyiv, 02000, Ukraine', '테이블에서 직접 구워 먹는 정통 한국식 바비큐 전문점', 'Authentic Korean barbecue restaurant with tableside charcoal grilling'),
  place('kyiv-korean-3', 'kyiv', 'korean', 'Seoul Soul Korean BBQ & Karaoke Bar', 'Antonovycha St 170, Kyiv, 03150, Ukraine', '한국식 바비큐와 프라이빗 노래방을 함께 즐길 수 있는 키이우의 한식당', 'Korean restaurant in Kyiv combining Korean barbecue with private karaoke rooms'),

  // —— lviv ——
  place('lviv-fine_dining-1', 'lviv', 'fine_dining', 'Amadeus', 'Katedralna Square 7, Lviv, 79008, Ukraine', '대성당 광장의 옛 오스트리아풍 레스토랑.', 'Restaurant on Lviv’s Cathedral Square with an old Austrian-style interior.'),
  place('lviv-fine_dining-2', 'lviv', 'fine_dining', 'Mon Chef', 'Horodotska St 15, Lviv, 79000, Ukraine', '아스토리아 호텔 내에 위치한 리비우의 세련된 유러피언 파인다이닝 레스토랑', "Refined European fine-dining restaurant inside Lviv's Astoria Hotel"),
  place('lviv-bakery-1', 'lviv', 'bakery', 'Cheese Bakery', '120 Shevchenka St, Lviv, Ukraine', '우크라이나식 치즈케이크 시르니크를 파는 리비우의 빵집.', 'Lviv bakery selling syrnyk, a Ukrainian cheesecake.'),
  place('lviv-bakery-2', 'lviv', 'bakery', 'Lviv Croissants', 'Akademika Hnatiuka St 8, Lviv, 79000, Ukraine', '여러 가지 속을 채운 크루아상을 파는 우크라이나 빵집 체인의 리비우 매장.', 'Lviv branch of a Ukrainian bakery chain with many filled croissants.', { image: '/places/lviv-bakery-2.jpg' }),
  place('lviv-cafe-1', 'lviv', 'cafe', 'Svit Kavy', 'Katedralna Square 6, 79029 Lviv, Ukraine', '대성당 광장이 보이는 3층짜리 커피하우스.', 'Three-storey coffee house overlooking the cathedral square.'),
  place('lviv-cafe-2', 'lviv', 'cafe', 'Grand Cafe Leopolis', 'Rynok Square 1, Lviv, 79000, Ukraine', '리노크 광장 시청사 안의 카페. 나폴레옹 케이크 레오폴리스가 있습니다.', 'Café inside the town hall on Rynok Square, with Leopolis napoleon cake.'),

  // —— odesa ——
  // Bernardazzi closed after its home, the Odesa Philharmonic Theatre, was damaged in a Russian missile strike (31 Jan 2025);
  // its team reopened as Lili Bistro at a new address.
  place('odesa-fine_dining-1', 'odesa', 'fine_dining', 'Lili Bistro', 'Sadova St 14, Odesa, 65000, Ukraine', '장작 화덕 피자와 와인을 내는 이탈리아 와인 비스트로.', 'Italian wine bistro serving wood-fired pizza and wine.'),
  place('odesa-fine_dining-2', 'odesa', 'fine_dining', 'Kumanets', 'Havanna St 7, Odesa, 65000, Ukraine', '오데사 중심가에 위치한 우크라이나 전통 요리 전문 레스토랑', 'Ukrainian traditional cuisine restaurant in central Odesa'),
  place('odesa-fine_dining-3', 'odesa', 'fine_dining', 'Dacha', 'Frantsuzkyi Blvd 85, Odesa, 65000, Ukraine', '프랑스 대로의 우크라이나·유럽 가정식 식당.', 'Restaurant on French Boulevard serving Ukrainian and European home cooking.'),

  place('odesa-bakery-1', 'odesa', 'bakery', 'FAB Bakery', 'Kiry Muratovoi St 3, Odesa, Ukraine, 65000', '치즈케이크가 있는 오데사의 빵집(2020년 개업).', 'Odesa bakery with cheesecakes (opened 2020).'),
  place('odesa-bakery-2', 'odesa', 'bakery', 'Breadway', 'Kanatna St 19/21, Odesa, 65000, Ukraine', '셰우첸코 공원 근처의 미국풍 빵집. 크루아상과 수제 빵이 있습니다.', 'American-style bakery near Shevchenko Park with croissants and handmade bread.'),
  place('odesa-cafe-1', 'odesa', 'cafe', 'Foundation Coffee Roasters', 'Zhukovskogo St 19, Odesa, Ukraine, 65026', '오데사의 커피 로스터리 카페.', 'Coffee roastery café in Odesa.'),
  place('odesa-cafe-2', 'odesa', 'cafe', 'Zheto', 'Havanna St 2, Odesa, 65000, Ukraine', '시티 가든 아래의 빈티지풍 커피하우스.', 'Vintage-styled coffee house beneath the City Garden.'),
]
