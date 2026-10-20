import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSEExtra: Place[] = [
  // —— gothenburg ——
  place('gothenburg-fine_dining-1', 'gothenburg', 'fine_dining', 'Project', 'Södra Vägen 45, 412 54 Göteborg', '예테보리의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant in Gothenburg; closed Sundays and Mondays.', { michelin: 'star1', image: '/places/gothenburg-fine_dining-1.jpg' }),
  place('gothenburg-fine_dining-2', 'gothenburg', 'fine_dining', 'Koka', 'Viktoriagatan 12, 411 25 Göteborg', '뉴 노르딕 요리를 내는 예테보리의 미쉐린 1스타 레스토랑. 일요일은 쉽니다.', 'One-Michelin-star New Nordic restaurant in Gothenburg; closed Sundays.', { michelin: 'star1', image: '/places/gothenburg-fine_dining-2.jpg' }),
  place('gothenburg-fine_dining-3', 'gothenburg', 'fine_dining', 'Sjömagasinet', 'Adolf Edelsvärds Gata 5, 414 51 Göteborg', '1775년 동인도회사 창고를 쓰는 클리판의 해산물 레스토랑. 강이 보입니다.', 'Seafood restaurant in a 1775 East India Company warehouse in Klippan, with river views.', { image: '/places/gothenburg-fine_dining-3.jpg' }),
  place('gothenburg-fine_dining-4', 'gothenburg', 'fine_dining', 'Bhoga', 'Norra Hamngatan 10, 411 14 Göteborg', '한동안 문을 닫았다가 다시 연 현대 요리 레스토랑. 미쉐린 가이드에 실려 있습니다.', 'Modern restaurant that reopened after a break, listed in the MICHELIN Guide.', { image: '/places/gothenburg-fine_dining-4.jpg' }),
  place('gothenburg-fine_dining-5', 'gothenburg', 'fine_dining', 'KaiFo', 'Södra Vägen 24, 412 54 Göteborg', '아시안 퓨전 식당.', 'Asian fusion restaurant.'),
  place('gothenburg-bakery-1', 'gothenburg', 'bakery', 'Da Matteo', 'Magasinsgatan 17A, 411 18 Göteborg', '로스터리 사워도우 베이커리.', 'Roastery sourdough bakery.', { image: '/places/gothenburg-bakery-1.jpg' }),
  place('gothenburg-bakery-2', 'gothenburg', 'bakery', 'Mr Cake', 'Lilla Badhusgatan 2B, 411 21 Göteborg', '케이크·페이스트리 전문점.', 'Cake and pastry specialist.'),
  place('gothenburg-cafe-2', 'gothenburg', 'cafe', 'Café Husaren', 'Haga Nygata 28, 411 22 Göteborg', '거대 시나몬롤(하가불렌).', 'Giant cinnamon bun (Hagabullen).', { image: '/places/gothenburg-cafe-2.jpg' }),
  place('gothenburg-cafe-3', 'gothenburg', 'cafe', 'Bar Italia', 'Prinsgatan 7, 413 05 Göteborg', '이탈리안 에스프레소 바.', 'Italian espresso bar.'),
  place('gothenburg-cafe-4', 'gothenburg', 'cafe', 'Kaffelabbet', 'Landsvägsgatan 15, 413 04 Göteborg', '스페셜티 커피 로스터리.', 'Specialty coffee roastery.'),
  place('gothenburg-korean-1', 'gothenburg', 'korean', 'KOMO Korean Steakhouse & Bar', 'Sankt Eriksgatan 5, 411 05 Göteborg', '한국식 스테이크하우스·BBQ.', 'Korean steakhouse and BBQ.'),

  // —— malmo ——
  place('malmo-fine_dining-1', 'malmo', 'fine_dining', 'Vollmers', 'Tegelgårdsgatan 5, 211 33 Malmö', '말뫼의 미쉐린 2스타 레스토랑. 수~토 저녁에 엽니다.', 'Two-Michelin-star restaurant in Malmö; Wednesday to Saturday evenings.', { michelin: 'star2' }),
  place('malmo-fine_dining-2', 'malmo', 'fine_dining', 'Atmosfär', 'Fersens väg 4, 211 42 Malmö', '모던 스칸디나비안.', 'Modern Scandinavian.'),
  place('malmo-fine_dining-4', 'malmo', 'fine_dining', 'Lyran', 'Simrishamnsgatan 36A, 214 23 Malmö', '지하 셀러 다이닝.', 'Cellar dining.'),
  place('malmo-bakery-1', 'malmo', 'bakery', 'Hollandia', 'Södra Förstadsgatan 8, 211 43 Malmö', '1903년 문을 연 말뫼의 콘디토리(제과점). 프린세스 케이크가 있습니다.', 'Malmö konditori opened in 1903, with princess cake.'),
  place('malmo-bakery-3', 'malmo', 'bakery', 'Söderberg & Sara', 'Mäster Danielsgatan 3, 211 58 Malmö, Sweden', '사워도우·카다멈 번·장작 화덕 피자가 있는 빵집.', 'Bakery with sourdough, cardamom buns and wood-fired pizza.'),
  place('malmo-cafe-1', 'malmo', 'cafe', 'Solde Kaffebar', 'Regementsgatan 2, 211 42 Malmö', '2006년부터 원두를 직접 볶아 온 말뫼의 스페셜티 커피 바.', 'Malmö specialty coffee bar that has roasted its own beans since 2006.'),
  place('malmo-cafe-2', 'malmo', 'cafe', 'Far i Hatten', 'Amiralsgatan 35, Folkets Park, 214 37 Malmö', '공원 안 레스토랑·카페.', 'Restaurant-café in Folkets Park.', { image: '/places/malmo-cafe-2.jpg' }),
  place('malmo-cafe-3', 'malmo', 'cafe', 'Lilla Kafferosteriet', 'Baltzarsgatan 24, 211 36 Malmö', '커피 로스터리.', 'Coffee roastery.'),
  place('malmo-korean-1', 'malmo', 'korean', 'Namu', 'Landbygatan 5, 211 34 Malmö', '마스터셰프 스웨덴 우승자가 연 말뫼 최초의 한식당. 나눠 먹는 요리를 냅니다.', 'Malmö\'s first Korean restaurant, opened by a Swedish MasterChef winner, serving dishes to share.'),

  // —— uppsala ——
  place('uppsala-fine_dining-1', 'uppsala', 'fine_dining', 'Domtrappkällaren', 'S:t Eriks Gränd 15, 753 10 Uppsala', '역사적 지하 다이닝.', 'Historic cellar dining.'),
  place('uppsala-fine_dining-2', 'uppsala', 'fine_dining', 'Hambergs Fisk', 'Fyristorg 8, Uppsala', '웁살라의 해산물 레스토랑.', 'Seafood restaurant in Uppsala.'),
  place('uppsala-bakery-1', 'uppsala', 'bakery', 'Ofvandahls', 'Sysslomansgatan 5, 753 11 Uppsala', '1878년 개업 전통 콘디토리.', 'Classic konditori since 1878.', { image: '/places/uppsala-bakery-1.jpg' }),
  place('uppsala-bakery-2', 'uppsala', 'bakery', 'Güntherska Hovkonditori', 'Östra Ågatan 31, 753 22 Uppsala', '전통 스위스풍 콘디토리.', 'Traditional Swiss-style konditori.'),
  place('uppsala-cafe-2', 'uppsala', 'cafe', 'Kafferummet Storken', 'Stora Torget 3, 753 20 Uppsala', '1989년부터 이어온 스토르토리에트의 아늑한 카페.', 'Cosy café on Stortorget, going since 1989.'),
  place('uppsala-cafe-3', 'uppsala', 'cafe', 'Stationen', 'Olof Palmes plats 6, 753 19 Uppsala, Sweden', '에스프레소를 내는 웁살라의 카페 겸 브라스리.', 'Uppsala café-brasserie serving espresso.'),

  // —— kiruna ——
  place('kiruna-fine_dining-1', 'kiruna', 'fine_dining', 'Icehotel Restaurant', 'Marknadsvägen 63, 981 91 Jukkasjärvi', '아이스호텔의 레스토랑. 라플란드 지역 재료로 요리하며 미리 예약해야 합니다.', 'Icehotel’s restaurant, cooking with Lapland produce; book well ahead.'),

]
