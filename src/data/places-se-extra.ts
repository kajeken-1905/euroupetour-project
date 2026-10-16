import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSEExtra: Place[] = [
  // —— gothenburg ——
  place('gothenburg-fine_dining-1', 'gothenburg', 'fine_dining', 'Project', 'Södra Vägen 45, 412 54 Göteborg', '미슐랭 1스타 다이닝.', 'Michelin 1-star dining.', { image: '/places/gothenburg-fine_dining-1.jpg' }),
  place('gothenburg-fine_dining-2', 'gothenburg', 'fine_dining', 'Koka', 'Viktoriagatan 12, 411 25 Göteborg', '뉴 노르딕 미슐랭 1스타.', 'New Nordic, Michelin 1-star.', { image: '/places/gothenburg-fine_dining-2.jpg' }),
  place('gothenburg-fine_dining-3', 'gothenburg', 'fine_dining', 'Sjömagasinet', 'Adolf Edelsvärds Gata 5, 414 51 Göteborg', '시푸드.', 'Seafood.', { image: '/places/gothenburg-fine_dining-3.jpg' }),
  place('gothenburg-fine_dining-4', 'gothenburg', 'fine_dining', 'Bhoga', 'Norra Hamngatan 10, 411 14 Göteborg', '모던 다이닝 미슐랭.', 'Modern Michelin dining.', { image: '/places/gothenburg-fine_dining-4.jpg' }),
  place('gothenburg-fine_dining-5', 'gothenburg', 'fine_dining', 'KaiFo', 'Södra Vägen 24, 412 54 Göteborg', '아시안 퓨전, 로컬 인기.', 'Asian fusion, local favorite.'),
  place('gothenburg-bakery-1', 'gothenburg', 'bakery', 'Da Matteo', 'Magasinsgatan 17A, 411 18 Göteborg', '로스터리 사워도우 베이커리.', 'Roastery sourdough bakery.', { image: '/places/gothenburg-bakery-1.jpg' }),
  place('gothenburg-bakery-2', 'gothenburg', 'bakery', 'Mr Cake', 'Lilla Badhusgatan 2B, 411 21 Göteborg', '케이크·페이스트리 전문점.', 'Cake and pastry specialist.'),
  place('gothenburg-cafe-2', 'gothenburg', 'cafe', 'Café Husaren', 'Haga Nygata 28, 411 22 Göteborg', '거대 시나몬롤(하가불렌).', 'Giant cinnamon bun (Hagabullen).', { image: '/places/gothenburg-cafe-2.jpg' }),
  place('gothenburg-cafe-3', 'gothenburg', 'cafe', 'Bar Italia', 'Prinsgatan 7, 413 05 Göteborg', '이탈리안 에스프레소 바.', 'Italian espresso bar.'),
  place('gothenburg-cafe-4', 'gothenburg', 'cafe', 'Kaffelabbet', 'Landsvägsgatan 15, 413 04 Göteborg', '스페셜티 커피 로스터리.', 'Specialty coffee roastery.'),
  place('gothenburg-korean-1', 'gothenburg', 'korean', 'KOMO Korean Steakhouse & Bar', 'Sankt Eriksgatan 5, 411 05 Göteborg', '한국식 스테이크하우스·BBQ.', 'Korean steakhouse and BBQ.'),

  // —— malmo ——
  place('malmo-fine_dining-1', 'malmo', 'fine_dining', 'Vollmers', 'Tegelgårdsgatan 5, 211 33 Malmö', '미슐랭 2스타 다이닝.', 'Michelin 2-star dining.'),
  place('malmo-fine_dining-2', 'malmo', 'fine_dining', 'Atmosfär', 'Fersens Väg 4, Malmö', '모던 스칸디나비안.', 'Modern Scandinavian.'),
  place('malmo-fine_dining-3', 'malmo', 'fine_dining', 'Bastard', 'Mäster Johansgatan 11, 211 21 Malmö', '와인바 다이닝, 빕 구르망.', 'Wine-bar dining, Bib Gourmand.'),
  place('malmo-fine_dining-4', 'malmo', 'fine_dining', 'Lyran', 'Simrishamnsgatan 36A, Malmö', '지하 셀러 다이닝.', 'Cellar dining.'),
  place('malmo-bakery-1', 'malmo', 'bakery', 'Hollandia', 'Södra Förstadsgatan 8, 211 43 Malmö', '1903년 문을 연 말뫼에서 가장 오래된 콘디토리, 프린세스토르타로 유명.', "Malmö's oldest konditori, opened 1903, famous for its princess cake."),
  place('malmo-bakery-2', 'malmo', 'bakery', 'St Jakobs Stenugnsbageri', 'Lokgatan 1, 211 22 Malmö, Sweden', '카르다몸 번과 계절 특선으로 유명한, 시내에 여러 지점을 둔 장작 화덕 베이커리.', 'Wood-fired bakery with several city locations, known for cardamom buns and seasonal specials.'),
  place('malmo-bakery-3', 'malmo', 'bakery', 'Söderberg & Sara', 'Mäster Danielsgatan 3, 211 57 Malmö, Sweden', '사워도우 빵과 카르다몸 번, 장작 화덕 피자로 유명한 베이커리.', 'Bakery known for sourdough breads, cardamom buns and wood-fired pizza.'),
  place('malmo-cafe-1', 'malmo', 'cafe', 'Solde Coffee', 'Hantverkaregatan 12, 211 55 Malmö', '스페셜티 커피.', 'Specialty coffee.'),
  place('malmo-cafe-2', 'malmo', 'cafe', 'Far i Hatten', 'Amiralsgatan 35, Folkets Park, 214 37 Malmö', '공원 안 레스토랑·카페.', 'Restaurant-café in Folkets Park.', { image: '/places/malmo-cafe-2.jpg' }),
  place('malmo-cafe-3', 'malmo', 'cafe', 'Lilla Kafferosteriet', 'Baltzarsgatan 24A, Malmö', '커피 로스터리.', 'Coffee roastery.'),
  place('malmo-korean-1', 'malmo', 'korean', 'Namu', 'Landbygatan 5, Malmö', '한식 다이닝.', 'Korean dining.'),

  // —— uppsala ——
  place('uppsala-fine_dining-1', 'uppsala', 'fine_dining', 'Domtrappkällaren', 'S:t Eriks Gränd 15, 753 10 Uppsala', '역사적 지하 다이닝.', 'Historic cellar dining.'),
  place('uppsala-fine_dining-2', 'uppsala', 'fine_dining', 'Hambergs Fisk', 'Fyristorg 8, Uppsala', '시푸드, 우플란드 1위.', 'Seafood, #1 in Uppsala.'),
  place('uppsala-bakery-1', 'uppsala', 'bakery', 'Ofvandahls', 'Sysslomansgatan 5, 753 11 Uppsala', '1878년 개업 전통 콘디토리.', 'Classic konditori since 1878.', { image: '/places/uppsala-bakery-1.jpg' }),
  place('uppsala-bakery-2', 'uppsala', 'bakery', 'Güntherska Hovkonditori', 'Östra Ågatan 31, Uppsala', '전통 스위스풍 콘디토리.', 'Traditional Swiss-style konditori.'),
  place('uppsala-cafe-2', 'uppsala', 'cafe', 'Kafferummet Storken', 'Stortorget, 753 20 Uppsala', '1989년부터 이어온 스토르토리에트의 아늑한 카페.', 'Cosy café on Stortorget, going since 1989.'),
  place('uppsala-cafe-3', 'uppsala', 'cafe', 'Stationen', 'Olof Palmes plats 6, 753 19 Uppsala, Sweden', '우플란드 최고의 에스프레소로 꼽히는 카페 겸 브라스리.', "Café-brasserie regarded for possibly Uppsala's best espresso."),
  place('uppsala-cafe-4', 'uppsala', 'cafe', 'Broströms Kafé Godsmagasinet', 'Roslagsgatan 1, Godsmagasinet, 753 27 Uppsala, Sweden', '웁살라 커피 로스터리의 원두를 쓰는 아늑한 카페.', 'Cosy café serving beans from Uppsala Kafferosteriet.'),

  // —— kiruna ——
  place('kiruna-fine_dining-1', 'kiruna', 'fine_dining', 'Icehotel Restaurant (The Veranda)', 'Marknadsvägen 63, 981 91 Jukkasjärvi', '아이스호텔 다이닝.', 'Icehotel dining.'),
  place('kiruna-cafe-1', 'kiruna', 'cafe', 'Icehotel Café', 'Marknadsvägen 63, 981 91 Jukkasjärvi', '아이스호텔 카페.', 'Icehotel café.'),

]
