import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLTExtra: Place[] = [
  // —— vilnius ——
  place('vilnius-fine_dining-1', 'vilnius', 'fine_dining', 'Nineteen18', 'Dominikonų g. 11, 01131 Vilnius', '미슐랭 1스타, 리투아니아 식재료로 만든 10코스 테이스팅 메뉴.', 'One-Michelin-star restaurant offering a 10-course tasting menu built on Lithuanian ingredients.'),
  place('vilnius-fine_dining-2', 'vilnius', 'fine_dining', 'Džiaugsmas', 'Vilniaus g. 28, 01402 Vilnius', '2017년 개업한 미슐랭 1스타 레스토랑, 구시가 중심의 오픈 키친.', 'One-Michelin-star restaurant opened in 2017, with an open kitchen in the heart of the Old Town.', { image: '/places/vilnius-fine_dining-2.jpg' }),
  place('vilnius-bakery-1', 'vilnius', 'bakery', 'Pilies Kepyklėlė', 'Pilies g. 19, 01123 Vilnius', '전통 리투아니아 요리와 현대적 카페 메뉴를 함께 선보이는 베이커리 카페.', 'Bakery café blending traditional Lithuanian dishes with modern café fare.', { image: '/places/vilnius-bakery-1.jpg' }),
  place('vilnius-bakery-2', 'vilnius', 'bakery', 'Boulangerie Vilnius', 'Gėlių g. 3, Vilnius', '정통 프랑스식 제과점, 크루아상과 바게트로 인기.', 'Authentic French bakery popular for its croissants and baguettes.'),
  place('vilnius-bakery-3', 'vilnius', 'bakery', 'Kmyninė kepykla (Duona)', 'Liejyklos g. 6, Vilnius', '구시가 인근 베이커리.', 'Bakery near the Old Town.'),
  place('vilnius-bakery-4', 'vilnius', 'bakery', 'Pinavija Café & Bakery', 'Vilniaus g. 21, Vilnius', '프랑스식 페이스트리를 선보이는 인기 베이커리 카페.', 'Popular bakery café serving French-style pastries.'),
  place('vilnius-bakery-5', 'vilnius', 'bakery', 'La Madeleine Bakery', 'Užupio g. 13, Vilnius', '우주피스 지구의 프랑스식 제과점.', 'French bakery in the Užupis district.'),
  place('vilnius-cafe-1', 'vilnius', 'cafe', 'BREW Specialty Coffee', 'Algirdo g. 38, 03218 Vilnius', 'MO 뮤지엄 인근의 자가 로스팅 스페셜티 커피숍.', 'Specialty coffee shop near the MO Museum, roasting its own beans.'),
  place('vilnius-cafe-2', 'vilnius', 'cafe', 'Backstage Café', 'Vokiečių g. 6, 01130 Vilnius, Lithuania', '2017년부터 이어온 스페셜티 커피 로스터리, 시나몬 페이스트리로 유명.', 'Specialty coffee roastery since 2017, known for its cinnamon pastries.'),
  place('vilnius-korean-1', 'vilnius', 'korean', 'Restoranas KOREAN TASTE', 'Vokiečių g. 2, 01130 Vilnius', '직접 구워 먹는 한국식 바비큐 레스토랑.', 'Korean BBQ restaurant where guests grill their own meat.'),

  // —— kaunas ——
  place('kaunas-fine_dining-1', 'kaunas', 'fine_dining', 'Nüman', 'Nemuno g. 43, 44288 Kaunas', '구시가의 미쉐린 어워드 레스토랑.', 'Michelin-recognized restaurant in the Old Town.'),
  place('kaunas-fine_dining-2', 'kaunas', 'fine_dining', 'Bernelių Užeiga', 'Baltų pr. 81, 48231 Kaunas, Lithuania', '전통 리투아니아 요리를 선보이는 카우나스의 대표 레스토랑, 민속 의상을 입은 직원들.', "Kaunas institution serving traditional Lithuanian cuisine, with staff in folk costumes."),
  place('kaunas-fine_dining-3', 'kaunas', 'fine_dining', 'Avilys', 'Vilniaus gatvė 34, 44287 Kaunas', '구시가 지하 공간의 리투아니아·유럽 요리 레스토랑, 자가 양조 맥주로 유명.', "Lithuanian-European restaurant in a cellar-like Old Town space, known for its house-brewed beer."),
  place('kaunas-bakery-1', 'kaunas', 'bakery', 'Motiejaus kepyklėlė', 'Vilniaus gatvė 7, 44280 Kaunas, Lithuania', '리투아니아 최고의 베이커리로 꼽히는 카우나스 구시가지의 명소', 'Widely regarded as one of the best bakeries in Lithuania, in Kaunas\'s Old Town'),
  place('kaunas-bakery-2', 'kaunas', 'bakery', 'Kasdienybės Bakehouse', 'E. Ožeškienės g. 3, Kaunas', '카우나스 베이크하우스.', 'Bakehouse in Kaunas.'),
  place('kaunas-bakery-3', 'kaunas', 'bakery', 'Habits Bakery', 'Gedimino g. 42, Kaunas', '카우나스 중심가의 베이커리.', 'Popular bakery in central Kaunas.'),
  place('kaunas-bakery-4', 'kaunas', 'bakery', 'LUCCI Bakery', 'Muitinės g. 13-3, Kaunas', '카우나스 베이커리.', 'Bakery in Kaunas.'),
  place('kaunas-bakery-5', 'kaunas', 'bakery', 'Bundu', 'E. Ožeškienės g. 11, Kaunas', '카우나스 베이커리.', 'Bakery in Kaunas.'),
  place('kaunas-cafe-1', 'kaunas', 'cafe', 'Koffee Lab', 'K. Donelaičio g. 60, 44248 Kaunas, Lithuania', '자체 로스팅 커피로 유명한 카우나스의 모던 카페', 'Modern Kaunas café known for its on-site roasted coffee'),
  place('kaunas-cafe-2', 'kaunas', 'cafe', 'NYC Coffee Co.', 'Maironio g. 20, Kaunas', '카우나스 커피숍.', 'Coffee shop in Kaunas.'),
  place('kaunas-cafe-3', 'kaunas', 'cafe', 'Kavalierius', 'I. Kanto g. 25, Kaunas', '카우나스 커피숍.', 'Coffee shop in Kaunas.'),
  place('kaunas-cafe-4', 'kaunas', 'cafe', 'Green Cafe', 'Laisvės al. 80, Kaunas', '라이스베스 거리의 인기 카페테리아.', 'Popular cafeteria-style café on Laisvės Alley.'),
  place('kaunas-cafe-5', 'kaunas', 'cafe', 'Trys kartai - coffee and desserts', 'S. Daukanto g. 28, Kaunas', '커피와 디저트를 함께 즐길 수 있는 카우나스의 카페.', 'Kaunas café serving coffee alongside desserts.'),
  place('kaunas-korean-1', 'kaunas', 'korean', 'OK Korean Chicken', 'Vytauto Prospektas 83, Kaunas', '카우나스의 한국식 프라이드치킨 전문점.', 'Korean fried chicken specialist in Kaunas.'),

  // —— klaipeda ——
  place('klaipeda-fine_dining-1', 'klaipeda', 'fine_dining', 'Monai', 'Liepų Gatvė 4, 92114 Klaipėda', '미쉐린 가이드 등재 레스토랑.', 'Michelin Guide-listed restaurant.'),
  place('klaipeda-fine_dining-2', 'klaipeda', 'fine_dining', 'Stora Antis', 'Tiltų g. 6, 91248 Klaipėda', '가족 운영 가스트로펍 겸 박물관, 전통 리투아니아·동유럽 요리.', 'Family-run gastropub-museum serving traditional Lithuanian and Eastern European cuisine.'),
  place('klaipeda-fine_dining-3', 'klaipeda', 'fine_dining', 'Senoji Hansa', 'Kurpių g., 91248 Klaipėda', '넉넉한 양의 정통 리투아니아 요리로 호평받는 레스토랑.', 'Restaurant praised for its authentic Lithuanian dishes and generous portions.'),
  place('klaipeda-bakery-1', 'klaipeda', 'bakery', 'Gardumėlis', 'Sandėlių g. 15, Klaipėda, Lithuania', '밀푀유와 리투아니아 전통 키비나이로 유명한 클라이페다의 베이커리 카페', 'Klaipėda bakery café known for millefeuille pastries and traditional Lithuanian kibinai'),
  place('klaipeda-bakery-2', 'klaipeda', 'bakery', 'AZUKERIA', 'Turgaus g. 11, Klaipėda', '클라이페다의 제과점.', 'Bakery in Klaipėda.'),
  place('klaipeda-bakery-3', 'klaipeda', 'bakery', 'Bandelių kepyklėlė', 'J. Janonio g. 6, Klaipėda', '클라이페다 베이커리 카페.', 'Bakery café in Klaipėda.'),
  place('klaipeda-bakery-4', 'klaipeda', 'bakery', 'Gabalėlis torto', 'Turgaus a. 16, Klaipėda', '클라이페다 제과점.', 'Bakery in Klaipėda.'),
  place('klaipeda-bakery-5', 'klaipeda', 'bakery', 'La Farine', 'H. Manto g. 23, Klaipėda', '프랑스식 제과점.', 'French-style bakery.'),
  place('klaipeda-cafe-1', 'klaipeda', 'cafe', 'Vanilės namai', 'H. Manto g. 9, Klaipėda, Lithuania', '강가 근처에 위치한 클라이페다의 매력적인 디저트 카페', 'Charming dessert café near the river in Klaipėda'),
  place('klaipeda-cafe-2', 'klaipeda', 'cafe', 'Come Come', 'Vėtros g. 8, Klaipėda', '클라이페다의 인기 카페.', 'Popular café in Klaipėda.'),
  place('klaipeda-cafe-3', 'klaipeda', 'cafe', 'CAFFEINE LT', 'Žvejų g. 1, Klaipėda', '클라이페다 커피숍.', 'Coffee shop in Klaipėda.'),
  place('klaipeda-cafe-4', 'klaipeda', 'cafe', 'Coffee King', 'H. Manto g. 13, Klaipėda', '클라이페다 커피숍.', 'Coffee shop in Klaipėda.'),
  place('klaipeda-cafe-5', 'klaipeda', 'cafe', 'Musangas', 'Liepų g. 64, Klaipėda', '클라이페다 카페테리아.', 'Cafeteria-style café in Klaipėda.'),
]
