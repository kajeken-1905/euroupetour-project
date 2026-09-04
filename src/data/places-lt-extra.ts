import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLTExtra: Place[] = [
  // —— vilnius ——
  place('vilnius-fine_dining-1', 'vilnius', 'fine_dining', 'Nineteen18', 4.8, 'Dominikonų g. 11, 01131 Vilnius', '미슐랭 1스타, 리투아니아 식재료로 만든 10코스 테이스팅 메뉴.', 'One-Michelin-star restaurant offering a 10-course tasting menu built on Lithuanian ingredients.', { reviewCount: 556 }),
  place('vilnius-fine_dining-2', 'vilnius', 'fine_dining', 'Džiaugsmas', 4.6, 'Vilniaus g. 28, 01402 Vilnius', '2017년 개업한 미슐랭 1스타 레스토랑, 구시가 중심의 오픈 키친.', 'One-Michelin-star restaurant opened in 2017, with an open kitchen in the heart of the Old Town.', { reviewCount: 1232 }),
  place('vilnius-bakery-1', 'vilnius', 'bakery', 'Pilies Kepyklėlė', 4.6, 'Pilies g. 19, 01123 Vilnius', '전통 리투아니아 요리와 현대적 카페 메뉴를 함께 선보이는 베이커리 카페.', 'Bakery café blending traditional Lithuanian dishes with modern café fare.'),
  place('vilnius-cafe-1', 'vilnius', 'cafe', 'BREW Specialty Coffee', 4.6, 'Algirdo g. 38, 03218 Vilnius', 'MO 뮤지엄 인근의 자가 로스팅 스페셜티 커피숍.', 'Specialty coffee shop near the MO Museum, roasting its own beans.', { reviewCount: 283 }),
  place('vilnius-cafe-2', 'vilnius', 'cafe', 'Backstage Café', 4.3, 'Vokiečių g., Vilnius', '2017년부터 이어온 스페셜티 커피 로스터리, 시나몬 페이스트리로 유명.', 'Specialty coffee roastery since 2017, known for its cinnamon pastries.'),
  place('vilnius-korean-1', 'vilnius', 'korean', 'Restoranas KOREAN TASTE', 4.2, 'Vokiečių g. 2, 01130 Vilnius', '직접 구워 먹는 한국식 바비큐 레스토랑.', 'Korean BBQ restaurant where guests grill their own meat.'),

  // —— kaunas ——
  place('kaunas-fine_dining-1', 'kaunas', 'fine_dining', 'Nüman', 4.6, 'Nemuno g. 43, 44288 Kaunas', '구시가의 미쉐린 어워드 레스토랑.', 'Michelin-recognized restaurant in the Old Town.'),
  place('kaunas-fine_dining-2', 'kaunas', 'fine_dining', 'Bernelių Užeiga', 4.1, 'Kaunas Old Town, Lithuania', '전통 리투아니아 요리를 선보이는 카우나스의 대표 레스토랑, 민속 의상을 입은 직원들.', "Kaunas institution serving traditional Lithuanian cuisine, with staff in folk costumes.", { reviewCount: 793 }),
  place('kaunas-fine_dining-3', 'kaunas', 'fine_dining', 'Avilys', 4.5, 'Vilniaus gatvė 34, 44287 Kaunas', '구시가 지하 공간의 리투아니아·유럽 요리 레스토랑, 자가 양조 맥주로 유명.', "Lithuanian-European restaurant in a cellar-like Old Town space, known for its house-brewed beer.", { reviewCount: 1080 }),
  place('kaunas-bakery-1', 'kaunas', 'bakery', 'Motiejaus kepyklėlė', 4.7, 'Vilniaus gatvė 7, 44280 Kaunas, Lithuania', '리투아니아 최고의 베이커리로 꼽히는 카우나스 구시가지의 명소', 'Widely regarded as one of the best bakeries in Lithuania, in Kaunas\'s Old Town'),
  place('kaunas-cafe-1', 'kaunas', 'cafe', 'Koffee Lab', 4.5, 'K. Donelaičio g. 60, 44248 Kaunas, Lithuania', '자체 로스팅 커피로 유명한 카우나스의 모던 카페', 'Modern Kaunas café known for its on-site roasted coffee'),
  place('kaunas-korean-1', 'kaunas', 'korean', 'OK Korean Chicken', 4.0, 'Vytauto Prospektas 83, Kaunas', '카우나스의 한국식 프라이드치킨 전문점.', 'Korean fried chicken specialist in Kaunas.', { reviewCount: 129 }),

  // —— klaipeda ——
  place('klaipeda-fine_dining-1', 'klaipeda', 'fine_dining', 'Monai', 4.6, 'Liepų Gatvė 4, 92114 Klaipėda', '미쉐린 가이드 등재 레스토랑.', 'Michelin Guide-listed restaurant.'),
  place('klaipeda-fine_dining-2', 'klaipeda', 'fine_dining', 'Stora Antis', 4.8, 'Tiltų g. 6, 91248 Klaipėda', '가족 운영 가스트로펍 겸 박물관, 전통 리투아니아·동유럽 요리.', 'Family-run gastropub-museum serving traditional Lithuanian and Eastern European cuisine.', { reviewCount: 592 }),
  place('klaipeda-fine_dining-3', 'klaipeda', 'fine_dining', 'Senoji Hansa', 4.3, 'Kurpių g., 91248 Klaipėda', '넉넉한 양의 정통 리투아니아 요리로 호평받는 레스토랑.', 'Restaurant praised for its authentic Lithuanian dishes and generous portions.', { reviewCount: 2279 }),
  place('klaipeda-bakery-1', 'klaipeda', 'bakery', 'Gardumėlis', 4.5, 'Sandėlių g. 15, Klaipėda, Lithuania', '밀푀유와 리투아니아 전통 키비나이로 유명한 클라이페다의 베이커리 카페', 'Klaipėda bakery café known for millefeuille pastries and traditional Lithuanian kibinai'),
  place('klaipeda-cafe-1', 'klaipeda', 'cafe', 'Vanilės namai', 4.5, 'H. Manto g. 9, Klaipėda, Lithuania', '강가 근처에 위치한 클라이페다의 매력적인 디저트 카페', 'Charming dessert café near the river in Klaipėda'),
]
