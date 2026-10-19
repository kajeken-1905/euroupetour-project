import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLTExtra: Place[] = [
  // —— vilnius ——
  place('vilnius-fine_dining-1', 'vilnius', 'fine_dining', 'Nineteen18', 'Dominikonų g. 11, 01131 Vilnius', '리투아니아 식재료로 테이스팅 메뉴를 내는 미쉐린 1스타 레스토랑. 수~토 저녁에 엽니다.', 'One-Michelin-star tasting-menu restaurant using Lithuanian produce; Wednesday to Saturday evenings.', { michelin: 'star1' }),
  place('vilnius-fine_dining-2', 'vilnius', 'fine_dining', 'Džiaugsmas', 'Vilniaus g. 28, 01402 Vilnius', '구시가지의 미쉐린 1스타 레스토랑. 오픈 키친이 있고 수~토 저녁에 엽니다.', 'One-Michelin-star restaurant in the old town with an open kitchen; Wednesday to Saturday evenings.', { michelin: 'star1', image: '/places/vilnius-fine_dining-2.jpg' }),
  place('vilnius-bakery-1', 'vilnius', 'bakery', 'Pilies Kepyklėlė', 'Pilies g. 19, 01123 Vilnius', '필리에스 거리의 작은 빵집 겸 카페. 직접 만든 케이크·크레페와 꿀 케이크를 냅니다.', 'Small bakery-café on Pilies Street with homemade cakes, crêpes and honey cake.', { image: '/places/vilnius-bakery-1.jpg' }),
  place('vilnius-bakery-2', 'vilnius', 'bakery', 'Boulangerie Vilnius', 'Gėlių g. 3, Vilnius', '1998년 문을 연 리투아니아 최초의 프랑스식 빵집. 가족이 운영하고 크루아상이 인기입니다.', 'Lithuania\'s first French bakery, opened in 1998 and still family-run; popular for croissants.'),
  place('vilnius-bakery-4', 'vilnius', 'bakery', 'Pinavija Café & Bakery', 'Vilniaus g. 21, Vilnius', '가족이 운영하는 리투아니아식 빵집 카페. 갓 구운 키비나이와 샤코티스 케이크로 알려졌습니다.', 'Family-run Lithuanian bakery café known for hot kibinai pastries and šakotis tree cake.'),
  place('vilnius-cafe-1', 'vilnius', 'cafe', 'BREW Specialty Coffee', 'Algirdo g. 38, 03218 Vilnius', '리투아니아의 대표 스페셜티 커피 브랜드 BREW의 알기르도 지점. 필터·콜드브루를 냅니다.', 'Algirdo branch of BREW, a leading Lithuanian specialty coffee name, serving filter and cold brew.'),
  place('vilnius-cafe-2', 'vilnius', 'cafe', 'Backstage Café', 'Vokiečių g. 6, 01130 Vilnius, Lithuania', '구시가의 스페셜티 커피 카페. 브런치 문화를 이끈 곳으로 시나몬번이 호평을 받습니다.', 'Old Town specialty coffee café that helped shape Vilnius brunch culture; its cinnamon buns are praised.'),
  place('vilnius-korean-1', 'vilnius', 'korean', 'Restoranas KOREAN TASTE', 'Vokiečių g. 2, 01130 Vilnius', '구시가 보키에치우 거리의 한식당. 김치와 한식 요리를 냅니다.', 'Korean restaurant on Vokiečių street in the Old Town.'),

  // —— kaunas ——
  place('kaunas-fine_dining-1', 'kaunas', 'fine_dining', 'Nüman', 'Nemuno g. 43, 44288 Kaunas', '네무나스 거리의 레스토랑. 미쉐린 가이드에 실려 있습니다.', 'Restaurant on Nemuno Street, listed in the MICHELIN Guide.'),
  place('kaunas-fine_dining-2', 'kaunas', 'fine_dining', 'Bernelių Užeiga', 'Baltų pr. 81, 48231 Kaunas, Lithuania', '실라이니아이 지구에 있는 전통 리투아니아 요리 레스토랑 체인의 지점.', 'Šilainiai branch of a traditional Lithuanian restaurant chain.'),
  place('kaunas-fine_dining-3', 'kaunas', 'fine_dining', 'Avilys', 'Vilniaus gatvė 34, 44287 Kaunas', '구시가 옛 지하 저장고의 양조 레스토랑. 꿀맥주가 대표이고 맥주 수프를 냅니다.', 'Brewery restaurant in historic Old Town cellars; honey beer is the signature, and there\'s beer soup.'),
  place('kaunas-bakery-2', 'kaunas', 'bakery', 'Kasdienybės Bakehouse', 'E. Ožeškienės g. 3, Kaunas', '스칸디나비아풍 실내의 베이크하우스. 시나몬번과 크루아상이 인기이고 주말엔 빨리 떨어집니다.', 'Bakehouse with a Scandinavian-style interior; cinnamon buns and croissants sell out fast at weekends.'),
  place('kaunas-bakery-3', 'kaunas', 'bakery', 'Habits Bakery', 'Gedimino g. 42, 44240 Kaunas', '성 미카엘 대천사 성당 옆의 베이커리. 아침 메뉴를 종일 내고 크루아상이 인기입니다.', 'Bakery beside St Michael the Archangel\'s Church, serving breakfast all day; known for its croissants.'),
  place('kaunas-bakery-4', 'kaunas', 'bakery', 'LUCCI Bakery', 'Muitinės g. 13-3, Kaunas', '구시가 빌니우스 거리 근처의 이탈리아식 베이커리. 오전 8시~오후 3시경 엽니다.', 'Italian-style bakery near Vilniaus Street in the Old Town, open roughly 8am to 3pm.'),
  place('kaunas-cafe-1', 'kaunas', 'cafe', 'Koffee Lab', 'Jonavos g. 10-1, 44269 Kaunas, Lithuania', '구시가에서 가족이 운영하는 스페셜티 커피숍. 직접 볶은 원두를 씁니다.', 'Family-run specialty coffee shop in the Old Town, using freshly roasted beans.'),
  place('kaunas-cafe-2', 'kaunas', 'cafe', 'NYC Coffee Co.', 'Maironio g. 20, Kaunas', '필터 커피를 내는 카우나스 중심가의 커피숍. 반려견 동반이 가능합니다.', 'Central Kaunas coffee shop serving filter coffee; dog-friendly.'),
  place('kaunas-cafe-3', 'kaunas', 'cafe', 'Kavalierius', 'I. Kanto g. 25, Kaunas', '파네베지스에서 시작한 3세대 커피숍의 카우나스 지점. 아침 메뉴와 직접 구운 페이스트리를 냅니다.', 'Kaunas branch of a third-wave coffee shop founded in Panevėžys, with breakfast and homemade pastries.'),
  place('kaunas-cafe-4', 'kaunas', 'cafe', 'Green Cafe', 'Laisvės al. 80, Kaunas', '라이스베스 거리의 체인 카페. 커피와 아늑한 분위기로 인기입니다.', 'Chain café on Laisvės alėja, popular for its coffee and cosy feel.'),
  place('kaunas-cafe-5', 'kaunas', 'cafe', 'Trys kartai - coffee and desserts', 'S. Daukanto g. 28, Kaunas', '커피와 케이크를 내는 조용한 카페. 사과 케이크와 진한 핫초코가 인기입니다.', 'Quiet café for coffee and cake; the apple cake and thick hot chocolate are favourites.'),

  // —— klaipeda ——
  place('klaipeda-fine_dining-1', 'klaipeda', 'fine_dining', 'Monai', 'Liepų Gatvė 4, 92114 Klaipėda', '현대 요리 레스토랑. 미쉐린 가이드에 실려 있습니다.', 'Modern-cuisine restaurant listed in the MICHELIN Guide.'),
  place('klaipeda-fine_dining-2', 'klaipeda', 'fine_dining', 'Stora Antis', 'Tiltų g. 6, 91248 Klaipėda', '19세기 지하 저장고의 레스토랑. 골동품으로 꾸며 박물관 같고 보르시와 리투아니아 요리를 냅니다.', 'Restaurant in a 19th-century cellar filled with antiques, serving borscht and Lithuanian dishes.'),
  place('klaipeda-fine_dining-3', 'klaipeda', 'fine_dining', 'Senoji Hansa', 'Kurpių g. 1, Klaipėda', '극장 광장에 면한 바 겸 레스토랑. 고기 요리·팬케이크·체펠리나이가 인기이고 양이 많습니다.', 'Bar-restaurant on Theatre Square, popular for meat dishes, pancakes and cepelinai in big portions.'),
  place('klaipeda-bakery-3', 'klaipeda', 'bakery', 'Bandelių kepyklėlė', 'J. Janonio g. 6, Klaipėda', '베제(BEZĖ)가 운영하는 빵집. 번과 주문 케이크를 만듭니다.', 'Bun bakery run by BEZĖ, also making cakes to order.'),
  place('klaipeda-cafe-2', 'klaipeda', 'cafe', 'Ateik Ateik', 'Vėtros g. 8, Klaipėda', '멜르나게 방파제 근처 해변의 작은 카페. 여름철에 특히 인기입니다.', 'Small beach café near the Melnragė breakwater, especially popular in summer.'),
  place('klaipeda-cafe-4', 'klaipeda', 'cafe', 'Coffee King', 'H. Manto g. 13, Klaipėda', '중심가의 아늑한 커피숍. 주말 아침 메뉴가 있고 가끔 라이브 연주가 열립니다.', 'Cosy central coffee shop with weekend breakfast and occasional live music.'),
]
