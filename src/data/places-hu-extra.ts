import { place } from './placeFactory'
import type { Place } from '../types'

export const placesHUExtra: Place[] = [
  // —— budapest ——
  place('budapest-fine_dining-1', 'budapest', 'fine_dining', 'Borkonyha Winekitchen', 4.6, 'Sas utca 3, 1051 Budapest', '미슐랭 1스타, 200여 종의 헝가리 와인을 페어링하는 모던 헝가리 요리.', 'One-Michelin-star restaurant pairing modern Hungarian cuisine with over 200 local wines.', { reviewCount: 2416 }),
  place('budapest-fine_dining-2', 'budapest', 'fine_dining', 'Costes Downtown', 4.7, 'Vigyázó Ferenc u. 5, 1051 Budapest', '2015년 개업, 매년 미슐랭 가이드에 오른 모던 파인 다이닝.', 'Modern fine dining, listed in the Michelin Guide every year since opening in 2015.', { reviewCount: 5971 }),
  place('budapest-fine_dining-3', 'budapest', 'fine_dining', 'Babel Budapest', 4.6, 'Piarista köz 2, 1052 Budapest', '미슐랭 1스타, 헝가리 헤리티지를 반영한 창의적 테이스팅 메뉴.', "One-Michelin-star restaurant with a creative tasting menu rooted in Hungarian heritage."),
  place('budapest-fine_dining-4', 'budapest', 'fine_dining', 'Hungarikum Bisztró', 4.7, 'Steindl Imre u. 13, 1051 Budapest', '넉넉한 양과 침발롬 연주로 유명한 전통 헝가리 비스트로.', 'Traditional Hungarian bistro known for generous portions and live cimbalom music.', { reviewCount: 23931 }),
  place('budapest-fine_dining-5', 'budapest', 'fine_dining', 'Kispiac Bisztró', 4.4, 'Hold utca 13, Budapest', '아늑한 헝가리 요리 비스트로, 멧돼지 굴라시로 유명.', 'Cozy Hungarian bistro known for its wild boar goulash.', { reviewCount: 4456 }),
  place('budapest-bakery-1', 'budapest', 'bakery', 'Artizán Bakery', 4.8, 'Hold u. 3, 1054 Budapest', '롱퍼먼트 사워도우로 유명한 부다페스트 최고의 베이커리.', "One of Budapest's top bakeries, known for its long-fermented sourdough."),
  place('budapest-bakery-2', 'budapest', 'bakery', 'Butter Brothers', 4.7, 'Lónyay u. 22, 1093 Budapest', '2012년부터 이어온 부다페스트 최고의 크루아상 베이커리.', "Budapest's top croissant bakery, operating since 2012.", { reviewCount: 2668 }),
  place('budapest-bakery-3', 'budapest', 'bakery', 'Jenői Pékség', 4.9, 'Kossuth Lajos u. 19, 2093 Budajenő', '부다페스트 근교 부다예뇌 마을의 천연발효 아르티장 베이커리.', 'Natural-leaven artisan bakery in the village of Budajenő, near Budapest.', { reviewCount: 195 }),
  place('budapest-bakery-4', 'budapest', 'bakery', 'Café Gerbeaud bakery', 4.2, 'Vörösmarty tér 7, 1051 Budapest', '1858년 개업, 전통 헝가리 페이스트리로 유명한 역사적 카페의 제과 부문.', "Confectionery arm of a historic café that opened in 1858, known for traditional Hungarian pastries.", { reviewCount: 9800 }),
  place('budapest-bakery-5', 'budapest', 'bakery', 'Auguszt Cukrászda', 4.3, 'Kossuth Lajos utca 14–16, 1053 Budapest', '1870년부터 이어온 헝가리 최고령 제과점.', "Hungary's oldest confectionery, established 1870.", { reviewCount: 800 }),
  place('budapest-cafe-1', 'budapest', 'cafe', 'New York Café', 3.9, 'Erzsébet krt. 9-11, 1073 Budapest', '화려한 궁전풍 인테리어로 유명한 역사적 카페하우스.', 'Historic coffee house famous for its ornate palace-like interior.', { reviewCount: 21925 }),
  place('budapest-cafe-2', 'budapest', 'cafe', 'Espresso Embassy', 4.7, 'Arany János utca 15, 1051 Budapest', '부다페스트 금융가의 스페셜티 커피 선구자.', "Pioneer of Budapest's specialty coffee scene in the financial district.", { reviewCount: 4907 }),
  place('budapest-cafe-3', 'budapest', 'cafe', 'My Little Melbourne', 4.4, 'Madách Imre út 3, 1075 Budapest', '헝가리 스페셜티 커피의 선구자, 바리스타 학교도 운영.', "Pioneer of Hungary's specialty coffee scene, also runs a barista school.", { reviewCount: 5969 }),
  place('budapest-cafe-4', 'budapest', 'cafe', 'Café Gerbeaud', 4.2, 'Vörösmarty tér 7, 1051 Budapest', '1858년부터 이어온 역사적 카페하우스, 화려한 인테리어로 유명.', 'Historic coffee house since 1858, known for its elegant interior.', { reviewCount: 12000 }),
  place('budapest-cafe-5', 'budapest', 'cafe', 'Mantra Specialty Coffee Bar', 4.7, 'Veres Pálné utca 17, 1053 Budapest', '다운타운 뒷골목의 스페셜티 커피.', 'Specialty coffee on a charming downtown backstreet.', { reviewCount: 500 }),
  place('budapest-korean-1', 'budapest', 'korean', 'Arirang', 4.5, 'Ilka utca 22, 1043 Budapest', '조용한 골목의 정통 한식당.', 'Authentic Korean restaurant on a quiet street.'),
  place('budapest-korean-2', 'budapest', 'korean', 'Seoul House', 4.4, 'Fő utca 8, 1011 Budapest', '1990년부터 이어온 부다페스트 최초의 한식당.', "Budapest's first Korean restaurant, since 1990.", { reviewCount: 500 }),
  place('budapest-korean-3', 'budapest', 'korean', 'The Gangnam', 4.6, 'Sas utca 25, 1051 Budapest', '정통 한식과 한국식 바베큐.', 'Authentic Korean cuisine and BBQ.', { reviewCount: 620 }),
  place('budapest-korean-4', 'budapest', 'korean', 'K-Bunsik', 4.5, 'Ráday utca 7, 1092 Budapest', '떡볶이·김밥 등 한국식 길거리 분식과 치킨.', 'Korean street food bunsik — tteokbokki, kimbap, fried chicken.', { reviewCount: 200 }),
  place('budapest-korean-5', 'budapest', 'korean', 'Manna Korean Restaurant', 4.4, 'Akácfa utca 7, 1072 Budapest', '바삭한 한국식 치킨으로 유명.', 'Known for crispy Korean fried chicken.', { reviewCount: 300 }),

  // —— debrecen ——
  place('debrecen-fine_dining-1', 'debrecen', 'fine_dining', 'IKON', 4.6, 'Piac utca 23, 4031 Debrecen', '부다페스트 밖 헝가리 최고 레스토랑.', 'One of Hungary\'s best restaurants outside Budapest.'),
  place('debrecen-fine_dining-2', 'debrecen', 'fine_dining', 'Csokonai Restaurant', 4.9, 'Kossuth utca 21, 4024 Debrecen', '데브레첸 중심가의 코지한 전통 헝가리 레스토랑, 초코나이 스테이크로 유명.', 'Cozy traditional Hungarian restaurant in central Debrecen, known for its Csokonai steak.', { reviewCount: 3816 }),
  place('debrecen-fine_dining-3', 'debrecen', 'fine_dining', 'Régi Posta Étterem', 4.5, 'Kossuth u. 4, 4024 Debrecen', '17세기 건물의 헝가리식 셀러 레스토랑.', 'Hungarian-style cellar restaurant in a 17th-century building.', { reviewCount: 110 }),
  place('debrecen-bakery-1', 'debrecen', 'bakery', 'Pallag Spájz', 4.6, 'Bethlen u. 46, 4026 Debrecen, Hungary', '피스타치오 크루아상으로 유명한 데브레첸의 인기 베이커리', 'Popular Debrecen bakery known for its pistachio croissant'),
  place('debrecen-cafe-1', 'debrecen', 'cafe', 'Cafe Frei Debrecen Főtér', 4.5, 'Piac u. 39/A, 4025 Debrecen, Hungary', '다양한 커피와 디저트를 갖춘 데브레첸의 커피하우스', 'Debrecen coffee house offering an international array of coffees and desserts'),
  place('debrecen-cafe-2', 'debrecen', 'cafe', 'Black Sheep Micro Roastery & Coffee', 4.7, 'Csapó u. 6, 4024 Debrecen', '자가 로스팅 커피와 브런치로 유명한 마이크로 로스터리.', 'Micro-roastery known for its self-roasted coffee and brunch.'),
  place('debrecen-korean-1', 'debrecen', 'korean', 'Zing Korean Restaurant', 4.7, 'Nagyerdei körút 98, Debrecen', '데브레첸의 한식당.', 'Korean restaurant in Debrecen.'),
  place('debrecen-korean-2', 'debrecen', 'korean', 'The Charm (Csám Koreai Étterem)', 4.3, 'Péterfia u. 13-19, Debrecen', '전통·현대 한식을 두루 갖춘 한식당, 치킨과 매운 돼지고기·소고기 요리로 호평.', 'Korean restaurant serving traditional and modern dishes, praised for its chicken and spicy pork/beef.', { reviewCount: 151 }),

  // —— pecs ——
  place('pecs-fine_dining-1', 'pecs', 'fine_dining', 'Bagolyvár', 4.5, 'Felsőhavi dűlő 6, 7627 Pécs', '테티에 언덕의 전망 좋은 레스토랑.', 'Restaurant with panoramic views on Tettye hill.'),
  place('pecs-bakery-1', 'pecs', 'bakery', 'Capri Patisserie', 4.5, 'Pécs, 7621, Hungary', '우체국 궁전 앞에 위치한 페치 현지인들의 숨은 페이스트리 명소', 'Hidden pastry shop favorite of local families, in front of the Palace of the Post Office in Pécs'),
  place('pecs-cafe-1', 'pecs', 'cafe', 'Morzsa', 4.5, 'Király utca 14, 7622 Pécs, Hungary', '스칸디나비아풍 감성의 페치 베이커리 겸 레스토랑', 'Pécs bakery-restaurant with Scandinavian flair'),

  // —— szeged ——
  place('szeged-fine_dining-1', 'szeged', 'fine_dining', 'Régi Híd Vendéglő', 4.5, 'Oskola u. 4, 6720 Szeged', '합리적인 가격의 정통 헝가리 요리.', 'Authentic Hungarian cuisine at fair prices.'),
  place('szeged-bakery-1', 'szeged', 'bakery', 'Emmarozs', 4.6, 'Mérey utca 15/a, 6722 Szeged, Hungary', '세게드에서 가장 잘 알려진 아르티장 베이커리', 'One of the best-known artisan bakeries in Szeged'),
  place('szeged-cafe-1', 'szeged', 'cafe', 'A Cappella Cukrászda', 4.5, 'Kárász utca 6, 6720 Szeged, Hungary', '전통과 현대 케이크를 두루 갖춘 세게드 중심가의 카페', 'Café in central Szeged offering a huge selection of traditional and modern cakes'),

  // —— eger ——
  place('eger-fine_dining-1', 'eger', 'fine_dining', 'Macok Bistro', 4.6, 'Tinódi S. tér 4, 3300 Eger', '헝가리 전역에서 손꼽히는 비스트로.', 'Bistro ranked among the best in Hungary.'),

  place('eger-bakery-1', 'eger', 'bakery', 'Lipóti Bakery & Café', 4.6, 'Eger, 3300, Hungary', '도보 이슈트반 광장 인근의 헝가리식 페이스트리 베이커리 카페', 'Bakery café near Dobó István Square offering Hungarian pastries'),
  place('eger-cafe-1', 'eger', 'cafe', 'Greek Café', 4.5, 'Dobó István u. 22, 3300 Eger, Hungary', '30여 종의 커피와 가장 진한 핫초콜릿으로 유명한 에게르의 카페', 'Eger café serving over 30 coffee specialities and famously rich hot chocolate'),
]
