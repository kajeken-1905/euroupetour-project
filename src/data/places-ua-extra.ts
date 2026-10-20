import { place } from './placeFactory'
import type { Place } from '../types'

export const placesUAExtra: Place[] = [
  // —— kyiv ——
  place('kyiv-fine_dining-1', 'kyiv', 'fine_dining', 'Mirali', 'Mezhyhirska St 82, Kyiv, 02000, Ukraine', '포딜 지구의 모던 우크라이나 요리 레스토랑. 2021년 셰프 미랄리 딜바지가 열었습니다.', 'Modern Ukrainian restaurant in Podil, opened in 2021 by chef Mirali Dilbazi.'),
  place('kyiv-fine_dining-2', 'kyiv', 'fine_dining', 'KANAPA', 'Andriivskyi Uzviz 19, Kyiv, 01025, Ukraine', '안드리이우스키 언덕길의 모던 우크라이나 요리 레스토랑.', 'Modern Ukrainian restaurant on Andriivskyi Descent.', { image: '/places/kyiv-fine_dining-2.jpg' }),
  place('kyiv-fine_dining-4', 'kyiv', 'fine_dining', 'Hutorets na Dnipri', 'Naberezhno-Khreshchatytska St 10A, Kyiv, 04070, Ukraine', '드니프로강 위 배에 자리한 우크라이나 요리 레스토랑.', 'Ukrainian restaurant aboard a boat on the Dnipro river.'),
  place('kyiv-cafe-1', 'kyiv', 'cafe', 'Come and Stay', 'Velyka Vasylkivska St 23B, Kyiv, Ukraine, 02000', '레프 톨스토이 광장 근처 골목의 작은 카페. 핸드드립 커피를 냅니다.', 'Small café on a backstreet near Lva Tolstoho Square, serving pour-over coffee.'),
  place('kyiv-cafe-3', 'kyiv', 'cafe', 'Kashtan Coffee', 'Reitarska St 9B, 01034 Kyiv, Ukraine', '레이타르스카 거리 안뜰의 작은 에스프레소 바.', 'Small espresso bar in a courtyard on Reitarska Street.'),

  // —— lviv ——
  place('lviv-fine_dining-1', 'lviv', 'fine_dining', 'Amadeus', 'Katedralna Square 7, Lviv, 79008, Ukraine', '라틴 대성당 옆 대성당 광장의 유럽 요리 레스토랑. 지붕 덮인 여름 테라스가 있습니다.', 'European restaurant on Cathedral Square next to the Latin Cathedral, with a covered summer terrace.'),
  place('lviv-fine_dining-2', 'lviv', 'fine_dining', 'Mon Chef', 'Horodotska St 15, Lviv, 79000, Ukraine', '아스토리아 호텔 건물의 고기 요리 레스토랑. 출입구가 따로 있습니다.', 'Meat-focused restaurant in the Astoria Hotel building, with its own entrance.'),
  place('lviv-cafe-1', 'lviv', 'cafe', 'Svit Kavy', 'Katedralna Square 6, 79029 Lviv, Ukraine', '대성당 광장의 커피숍. 원두를 직접 볶습니다.', 'Coffee shop on Cathedral Square that roasts its own beans.'),
  place('lviv-cafe-2', 'lviv', 'cafe', 'Grand Cafe Leopolis', 'Rynok Square 1, Lviv, 79000, Ukraine', '시청사(라투샤) 건물 안의 카페. 리비우 역사 사진으로 꾸몄고 \'레오폴리스\' 케이크를 냅니다.', 'Café inside the Town Hall building, decorated with historic Lviv photos and serving the Leopolis cake.'),

  // —— odesa ——
  // Bernardazzi closed after its home, the Odesa Philharmonic Theatre, was damaged in a Russian missile strike (31 Jan 2025);
  // its team reopened as Lili Bistro at a new address.
  place('odesa-fine_dining-2', 'odesa', 'fine_dining', 'Kumanets', 'Havanna St 7, Odesa, 65000, Ukraine', '자수와 화덕으로 꾸민 우크라이나 전통 요리 식당. 바레니키·보르시를 냅니다.', 'Ukrainian restaurant with embroidery and a wood stove, serving varenyky and borscht.'),
  place('odesa-fine_dining-3', 'odesa', 'fine_dining', 'Dacha', 'Frantsuzkyi Blvd 85, bldg 15, Odesa, 65000, Ukraine', '정원이 있는 옛 저택의 레스토랑. 오데사 가정식을 냅니다.', 'Restaurant in an old mansion with gardens, serving home-style Odesa cooking.'),

  place('odesa-bakery-2', 'odesa', 'bakery', 'Breadway', 'Kanatna St 19/21, Odesa, 65000, Ukraine', '분홍·파랑 인테리어의 베이커리 카페. 빵·디저트와 아침 식사를 냅니다.', 'Bakery café with a pink-and-blue interior, serving bread, desserts and breakfast.'),
  place('odesa-cafe-1', 'odesa', 'cafe', 'Foundation Coffee Place', 'Sviatoslava Karavanskoho St 19, Odesa, 65026, Ukraine', '오데사 로스터리 파운데이션 커피의 시내 중심 매장.', 'City-centre café of the Odesa roaster Foundation Coffee.'),
  place('odesa-cafe-2', 'odesa', 'cafe', 'Zheto', 'Havanna St 2, Odesa, 65000, Ukraine', '골동품 가구·식기·책으로 꾸민 카페. 강연·전시가 열립니다.', 'Café furnished with antique furniture, crockery and books, hosting talks and exhibitions.'),
]
