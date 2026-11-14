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

  // —— kiruna: bakeries and cafés (2026-11-04) ——
  place('kiruna-cafe-1', 'kiruna', 'cafe', 'DET café', 'Stadshustorget 1, 981 30 Kiruna', '새 시청 광장의 커피숍.', 'Coffee shop on the new town-hall square.'),

  // —— falun: restaurants, bakeries and cafés (2026-11-14) ——
  place('falun-fine_dining-1', 'falun', 'fine_dining', 'Blackstone Steakhouse Falun', 'Hälsingtorget 1, Falun', '팔룬의 스테이크하우스. 구글 지도 평점 4.5.', 'Steakhouse in Falun. Rated 4.5 on Google Maps.'),
  place('falun-fine_dining-2', 'falun', 'fine_dining', 'Spruthuset', 'Östra Hamngatan 7, Falun', '팔룬의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Falun. Rated 4.5 on Google Maps.'),
  place('falun-fine_dining-3', 'falun', 'fine_dining', 'Aaima Kitchen', 'Åsgatan 29 C, Falun', '팔룬의 인도 요리 식당. 구글 지도 평점 4.6.', 'Indian restaurant in Falun. Rated 4.6 on Google Maps.'),
  place('falun-fine_dining-4', 'falun', 'fine_dining', 'Geschwornergården Restaurant', 'Gruvgatan 55, Falun', '팔룬의 스웨덴 요리 식당. 구글 지도 평점 4.3.', 'Swedish restaurant in Falun. Rated 4.3 on Google Maps.'),
  place('falun-fine_dining-5', 'falun', 'fine_dining', 'Banken Bar & Brasserie', 'Åsgatan 41, Falun', '팔룬의 브라스리. 구글 지도 평점 4.3.', 'Brasserie in Falun. Rated 4.3 on Google Maps.'),
  place('falun-bakery-1', 'falun', 'bakery', 'Falu Bread and Pattiserie', 'Åsgatan 28, Falun', '팔룬의 빵집. 구글 지도 평점 4.5.', 'Bakery in Falun. Rated 4.5 on Google Maps.'),
  place('falun-cafe-1', 'falun', 'cafe', 'Konditori Focus', 'Myntgatan 10, Falun', '팔룬의 콘디토리 카페. 구글 지도 평점 4.3.', 'Konditori café in Falun. Rated 4.3 on Google Maps.'),
  place('falun-cafe-2', 'falun', 'cafe', 'Gjuthuset Café och butik', 'Krongårdsvägen 11, Falun', '팔룬의 카페. 구글 지도 평점 4.7.', 'Café in Falun. Rated 4.7 on Google Maps.'),

  // —— lund: restaurants, bakeries and cafés (2026-11-14) ——
  place('lund-fine_dining-1', 'lund', 'fine_dining', 'Mat & Destillat', 'Kyrkogatan 17, Lund', '룬드의 파인 다이닝. 구글 지도 평점 4.6.', 'Fine-dining restaurant in Lund. Rated 4.6 on Google Maps.'),
  place('lund-fine_dining-2', 'lund', 'fine_dining', 'Trädgården - Restaurang & Bar', 'Mårtenstorget 6, Lund', '룬드의 스웨덴 요리 식당. 구글 지도 평점 4.7.', 'Swedish restaurant in Lund. Rated 4.7 on Google Maps.'),
  place('lund-fine_dining-3', 'lund', 'fine_dining', 'Fengsson Dumpling House', 'Winstrupsgatan, Lund', '룬드의 만두 전문점. 구글 지도 평점 4.6.', 'Dumpling house in Lund. Rated 4.6 on Google Maps.'),
  place('lund-fine_dining-4', 'lund', 'fine_dining', 'Buljong', 'Östra Mårtensgatan 6, Lund', '룬드의 수프 가게. 구글 지도 평점 4.9.', 'Soup shop in Lund. Rated 4.9 on Google Maps.'),
  place('lund-fine_dining-5', 'lund', 'fine_dining', 'Klostergatans vin & delikatess', 'Klostergatan 3, Lund', '룬드의 와인 바 겸 식당. 구글 지도 평점 4.5.', 'Wine bar and restaurant in Lund. Rated 4.5 on Google Maps.'),
  place('lund-bakery-1', 'lund', 'bakery', 'MANNZ BAGERI', 'Sankt Petri kyrkogata 5, Lund', '룬드의 빵집. 구글 지도 평점 4.9.', 'Bakery in Lund. Rated 4.9 on Google Maps.'),
  place('lund-bakery-2', 'lund', 'bakery', 'Broder Jakobs Stenugnsbageri', 'Klostergatan 9, Lund', '룬드의 돌화덕 빵집. 구글 지도 평점 4.7.', 'Stone-oven bakery in Lund. Rated 4.7 on Google Maps.'),
  place('lund-bakery-3', 'lund', 'bakery', 'Annes Konditori', 'Kung Oskars väg 5, Lund', '룬드의 콘디토리(전통 제과점). 구글 지도 평점 4.3.', 'Konditori (traditional pâtisserie) in Lund. Rated 4.3 on Google Maps.'),
  place('lund-cafe-1', 'lund', 'cafe', 'Love Coffee', 'Klostergatan 1L, Lund', '룬드의 커피숍. 구글 지도 평점 4.5.', 'Coffee shop in Lund. Rated 4.5 on Google Maps.'),
  place('lund-cafe-2', 'lund', 'cafe', 'Guatemalan Coffee', 'Mårtenstorget 1, Lund', '룬드의 커피숍. 구글 지도 평점 5.0.', 'Coffee shop in Lund. Rated 5.0 on Google Maps.'),
  place('lund-cafe-3', 'lund', 'cafe', 'il Café D´italia', 'Kyrkogatan 21, Lund', '룬드의 카페. 구글 지도 평점 4.6.', 'Café in Lund. Rated 4.6 on Google Maps.'),

  // —— ystad: restaurants, bakeries and cafés (2026-11-14) ——
  place('ystad-fine_dining-1', 'ystad', 'fine_dining', 'Grändens mat', 'Besökaregränd 3, Ystad', '위스타드의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Ystad. Rated 4.6 on Google Maps.'),
  place('ystad-fine_dining-2', 'ystad', 'fine_dining', 'Le petit bistrot', 'Stora Östergatan 32, Ystad', '위스타드의 프랑스 비스트로. 구글 지도 평점 4.5.', 'French bistro in Ystad. Rated 4.5 on Google Maps.'),
  place('ystad-fine_dining-3', 'ystad', 'fine_dining', 'Upp Eller Ner', 'Stortorget 11, Ystad', '위스타드의 레스토랑. 구글 지도 평점 4.3.', 'Restaurant in Ystad. Rated 4.3 on Google Maps.'),
  place('ystad-fine_dining-4', 'ystad', 'fine_dining', 'Maltes Mackor', 'Stora Östergatan 12, Ystad', '위스타드의 샌드위치 식당. 구글 지도 평점 4.8.', 'Sandwich restaurant in Ystad. Rated 4.8 on Google Maps.'),
  place('ystad-fine_dining-5', 'ystad', 'fine_dining', 'Restaurang Tumült', 'Björnstjernegatan 5, Ystad', '위스타드의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Ystad. Rated 4.5 on Google Maps.'),
  place('ystad-bakery-1', 'ystad', 'bakery', 'Söderberg & Sara Stenugnsbageri', 'Regementsgatan 2, Ystad', '위스타드의 돌화덕 빵집. 구글 지도 평점 4.4.', 'Stone-oven bakery in Ystad. Rated 4.4 on Google Maps.'),
  place('ystad-cafe-1', 'ystad', 'cafe', 'Maria Caféet', 'Stortorget 15, Ystad', '위스타드의 카페. 구글 지도 평점 4.5.', 'Café in Ystad. Rated 4.5 on Google Maps.'),
  place('ystad-cafe-2', 'ystad', 'cafe', 'Café Lurblåsaren', 'Stortorget 3, Ystad', '위스타드의 커피숍. 구글 지도 평점 4.3.', 'Coffee shop in Ystad. Rated 4.3 on Google Maps.'),
  place('ystad-cafe-3', 'ystad', 'cafe', 'Glassmakeriet in Ystad', 'Teatergränd 1, Ystad', '위스타드의 젤라토 가게. 구글 지도 평점 4.6.', 'Ice-cream shop in Ystad. Rated 4.6 on Google Maps.'),

  // —— kalmar: restaurants, bakeries and cafés (2026-11-14) ——
  place('kalmar-fine_dining-1', 'kalmar', 'fine_dining', 'Storgatan 11', 'Storgatan 11, Kalmar', '칼마르의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Kalmar. Rated 4.6 on Google Maps.'),
  place('kalmar-fine_dining-2', 'kalmar', 'fine_dining', 'Symposium', 'Storgatan 26, Kalmar', '칼마르의 그리스 요리 식당. 구글 지도 평점 4.7.', 'Greek restaurant in Kalmar. Rated 4.7 on Google Maps.'),
  place('kalmar-fine_dining-3', 'kalmar', 'fine_dining', 'Postgatan', 'Postgatan 5, Kalmar', '칼마르의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Kalmar. Rated 4.6 on Google Maps.'),
  place('kalmar-fine_dining-4', 'kalmar', 'fine_dining', 'Gangnam', 'Fiskaregatan 33, Kalmar', '칼마르의 한식당. 구글 지도 평점 4.6.', 'Korean restaurant in Kalmar. Rated 4.6 on Google Maps.'),
  place('kalmar-fine_dining-5', 'kalmar', 'fine_dining', 'Slipkajen', 'Utrustningskajen 15, Kalmar', '칼마르의 항구 레스토랑. 구글 지도 평점 4.6.', 'Harbourside restaurant in Kalmar. Rated 4.6 on Google Maps.'),
  place('kalmar-bakery-1', 'kalmar', 'bakery', 'Ekelunds Konditori', 'Esplanaden 11, Kalmar', '칼마르의 콘디토리(전통 제과점). 구글 지도 평점 4.3.', 'Konditori (traditional pâtisserie) in Kalmar. Rated 4.3 on Google Maps.'),
  place('kalmar-bakery-2', 'kalmar', 'bakery', 'Holmgrens Eftr Konditori', 'Kaggensgatan 5, Kalmar', '칼마르의 콘디토리(전통 제과점). 구글 지도 평점 4.3.', 'Konditori (traditional pâtisserie) in Kalmar. Rated 4.3 on Google Maps.'),
  place('kalmar-bakery-3', 'kalmar', 'bakery', 'L:a Manilla', 'Bragegatan 1, Kalmar', '칼마르의 빵집. 구글 지도 평점 4.6.', 'Bakery in Kalmar. Rated 4.6 on Google Maps.'),
  place('kalmar-cafe-1', 'kalmar', 'cafe', 'Kullzénska caféet', 'Kaggensgatan 26, Kalmar', '칼마르의 카페. 구글 지도 평점 4.5.', 'Café in Kalmar. Rated 4.5 on Google Maps.'),
  place('kalmar-cafe-2', 'kalmar', 'cafe', 'Balck Coffee - Kafferosteri', 'Polhemsgatan 30, Kalmar', '칼마르의 커피 로스터리 카페. 구글 지도 평점 4.7.', 'Coffee roastery café in Kalmar. Rated 4.7 on Google Maps.'),
  place('kalmar-cafe-3', 'kalmar', 'cafe', 'Hamnkaféet', 'Skeppsbron 13, Kalmar', '칼마르의 항구 카페. 구글 지도 평점 4.3.', 'Harbourside café in Kalmar. Rated 4.3 on Google Maps.'),
  place('kalmar-cafe-4', 'kalmar', 'cafe', 'Mormors Brödbod i Kalmar', 'Fiskaregatan 14, Kalmar', '칼마르의 카페. 구글 지도 평점 4.7.', 'Café in Kalmar. Rated 4.7 on Google Maps.'),

  // —— karlskrona: restaurants, bakeries and cafés (2026-11-14) ——
  place('karlskrona-fine_dining-1', 'karlskrona', 'fine_dining', 'Silver spoon Karlskrona', 'Parkgatan 1, Karlskrona', '칼스크로나의 인도 요리 식당. 구글 지도 평점 4.9.', 'Indian restaurant in Karlskrona. Rated 4.9 on Google Maps.'),
  place('karlskrona-fine_dining-2', 'karlskrona', 'fine_dining', 'ANTONIO\'S', 'Borgmästarekajen 34A, Karlskrona', '칼스크로나의 이탈리아 요리 식당. 구글 지도 평점 4.5.', 'Italian restaurant in Karlskrona. Rated 4.5 on Google Maps.'),
  place('karlskrona-fine_dining-3', 'karlskrona', 'fine_dining', 'Elsas lilla krog', 'Ronnebygatan 30, Karlskrona', '칼스크로나의 레스토랑. 구글 지도 평점 4.4.', 'Restaurant in Karlskrona. Rated 4.4 on Google Maps.'),
  place('karlskrona-fine_dining-4', 'karlskrona', 'fine_dining', 'Bún Vietnamese Street food', 'Kyrkogatan 15, Karlskrona', '칼스크로나의 베트남 길거리 음식점. 구글 지도 평점 4.8.', 'Vietnamese street-food restaurant in Karlskrona. Rated 4.8 on Google Maps.'),
  place('karlskrona-fine_dining-5', 'karlskrona', 'fine_dining', 'Kajen 22', 'Borgmästarekajen 2, Karlskrona', '칼스크로나의 항구 레스토랑. 구글 지도 평점 4.8.', 'Harbourside restaurant in Karlskrona. Rated 4.8 on Google Maps.'),
  place('karlskrona-bakery-1', 'karlskrona', 'bakery', 'Gylles', 'Norra Kungsgatan 22, Karlskrona', '칼스크로나의 콘디토리(전통 제과점). 구글 지도 평점 4.4.', 'Konditori (traditional pâtisserie) in Karlskrona. Rated 4.4 on Google Maps.'),
  place('karlskrona-bakery-2', 'karlskrona', 'bakery', 'The sisters Lindqvist Cafe & Sourdough Bakery', 'Borgmästaregatan 3, Karlskrona', '칼스크로나의 사워도우 빵집 겸 카페. 구글 지도 평점 4.4.', 'Sourdough bakery and café in Karlskrona. Rated 4.4 on Google Maps.'),
  place('karlskrona-bakery-3', 'karlskrona', 'bakery', 'Nelly\'s Cafe and bakery', 'Landsvägsgatan 2, Karlskrona', '칼스크로나의 빵집. 구글 지도 평점 4.3.', 'Bakery in Karlskrona. Rated 4.3 on Google Maps.'),
  place('karlskrona-cafe-1', 'karlskrona', 'cafe', 'Choco Mania', 'Landbrogatan 6, Karlskrona', '칼스크로나의 카페. 구글 지도 평점 4.4.', 'Café in Karlskrona. Rated 4.4 on Google Maps.'),

  // —— visby: restaurants, bakeries and cafés (2026-11-14) ——
  place('visby-fine_dining-1', 'visby', 'fine_dining', 'Bakfickan', 'Stora torget 1, Visby', '비스뷔의 해산물 식당. 구글 지도 평점 4.6.', 'Seafood restaurant in Visby. Rated 4.6 on Google Maps.'),
  place('visby-fine_dining-2', 'visby', 'fine_dining', 'Surfers Visby', 'Södra Kyrkogatan 1, Visby', '비스뷔의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Visby. Rated 4.5 on Google Maps.'),
  place('visby-fine_dining-3', 'visby', 'fine_dining', 'Gamla Masters', 'Södra Kyrkogatan 10, Visby', '비스뷔의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Visby. Rated 4.5 on Google Maps.'),
  place('visby-fine_dining-4', 'visby', 'fine_dining', 'Bad Wolf BBQ', 'Adelsgatan 1B, Visby', '비스뷔의 바비큐 식당. 구글 지도 평점 4.6.', 'Barbecue restaurant in Visby. Rated 4.6 on Google Maps.'),
  place('visby-fine_dining-5', 'visby', 'fine_dining', 'Hop Shed Brew Pub', 'Broväg 119, Visby', '비스뷔의 브루펍. 구글 지도 평점 4.7.', 'Brewpub in Visby. Rated 4.7 on Google Maps.'),
  place('visby-bakery-1', 'visby', 'bakery', 'Warfsholm Bageri Visby innerstad', 'Södra Kyrkogatan 7, Visby', '비스뷔의 빵집. 구글 지도 평점 4.5.', 'Bakery in Visby. Rated 4.5 on Google Maps.'),
  place('visby-bakery-2', 'visby', 'bakery', 'Brödboden Södertorg', 'Södertorg 25, Visby', '비스뷔의 빵집. 구글 지도 평점 4.4.', 'Bakery in Visby. Rated 4.4 on Google Maps.'),
  place('visby-cafe-1', 'visby', 'cafe', 'Babka Café', 'Adelsgatan 2C, Visby', '비스뷔의 커피숍. 구글 지도 평점 4.9.', 'Coffee shop in Visby. Rated 4.9 on Google Maps.'),
  place('visby-cafe-2', 'visby', 'cafe', 'Fiket i Visby', 'Österväg 2, Visby', '비스뷔의 커피숍. 구글 지도 평점 4.5.', 'Coffee shop in Visby. Rated 4.5 on Google Maps.'),
  place('visby-cafe-3', 'visby', 'cafe', 'Ett Rum För Resande Café', 'S:t Hansgatan 15, Visby', '비스뷔의 정원 카페. 구글 지도 평점 4.6.', 'Garden café in Visby. Rated 4.6 on Google Maps.'),
  place('visby-cafe-4', 'visby', 'cafe', 'Sankt Hans Café', 'S:t Hansplan 2, Visby', '비스뷔의 정원 카페. 구글 지도 평점 4.4.', 'Garden café in Visby. Rated 4.4 on Google Maps.'),

  // —— hoga-kusten: restaurants, bakeries and cafés (2026-11-14) ——
  place('hoga-kusten-bakery-1', 'hoga-kusten', 'bakery', '1923 Tunnbröd & Deli', 'Industrivägen 10, Ullånger', '회가쿠스텐의 툰브뢰드(북부 얇은 빵) 빵집 겸 델리. 구글 지도 평점 4.6.', 'Tunnbröd (thin flatbread) bakery and deli in the High Coast. Rated 4.6 on Google Maps.'),
  place('hoga-kusten-cafe-1', 'hoga-kusten', 'cafe', 'Glassbaronen', 'Sundbrogatan 21, Ullånger', '회가쿠스텐의 젤라토 가게. 구글 지도 평점 4.4.', 'Ice-cream shop in the High Coast. Rated 4.4 on Google Maps.'),

  // —— are: restaurants, bakeries and cafés (2026-11-14) ——
  place('are-fine_dining-1', 'are', 'fine_dining', 'Imilla', 'Torggränd 2B, Åre', '오레의 파인 다이닝. 구글 지도 평점 5.0.', 'Fine-dining restaurant in Åre. Rated 5.0 on Google Maps.'),
  place('are-fine_dining-2', 'are', 'fine_dining', 'Supper Åre', 'Parkvägen 1, Åre', '오레의 레스토랑. 구글 지도 평점 4.4.', 'Restaurant in Åre. Rated 4.4 on Google Maps.'),
  place('are-fine_dining-3', 'are', 'fine_dining', 'Husk Bar & Bistro', 'Stationsvägen 16, Åre', '오레의 비스트로. 구글 지도 평점 4.7.', 'Bistro in Åre. Rated 4.7 on Google Maps.'),
  place('are-fine_dining-4', 'are', 'fine_dining', 'Crêperie & Logi Åre', 'Årevägen 70, Åre', '오레의 크레프 가게. 구글 지도 평점 4.5.', 'Crêperie in Åre. Rated 4.5 on Google Maps.'),
  place('are-bakery-1', 'are', 'bakery', 'Grädda Bageri Åre', 'Årevägen 150, Åre', '오레의 빵집. 구글 지도 평점 4.5.', 'Bakery in Åre. Rated 4.5 on Google Maps.'),
  place('are-cafe-1', 'are', 'cafe', 'Åre Kafferosteri', 'Årevägen 89, Åre', '오레의 커피 로스터리 카페. 구글 지도 평점 4.5.', 'Coffee roastery café in Åre. Rated 4.5 on Google Maps.'),

  // —— lulea: restaurants, bakeries and cafés (2026-11-14) ——
  place('lulea-fine_dining-1', 'lulea', 'fine_dining', 'Restaurang CG', 'Storgatan 9, Luleå', '룰레오의 북유럽 요리 식당. 구글 지도 평점 4.6.', 'Scandinavian restaurant in Luleå. Rated 4.6 on Google Maps.'),
  place('lulea-fine_dining-2', 'lulea', 'fine_dining', 'A.Ts Krog', 'Småbåtsgatan 8H, Luleå', '룰레오의 모던 유러피언 식당. 구글 지도 평점 4.8.', 'Modern European restaurant in Luleå. Rated 4.8 on Google Maps.'),
  place('lulea-fine_dining-3', 'lulea', 'fine_dining', 'La Bottega', 'Småbåtsgatan 2C, Luleå', '룰레오의 이탈리아 요리 식당. 구글 지도 평점 4.4.', 'Italian restaurant in Luleå. Rated 4.4 on Google Maps.'),
  place('lulea-fine_dining-4', 'lulea', 'fine_dining', 'Kazoku', 'Smedjegatan 10, Luleå', '룰레오의 일식당. 구글 지도 평점 4.7.', 'Japanese restaurant in Luleå. Rated 4.7 on Google Maps.'),
  place('lulea-fine_dining-5', 'lulea', 'fine_dining', 'Hemmagastronomi', 'Norra Strandgatan 1, Luleå', '룰레오의 스웨덴 요리 식당. 구글 지도 평점 4.4.', 'Swedish restaurant in Luleå. Rated 4.4 on Google Maps.'),
  place('lulea-bakery-1', 'lulea', 'bakery', 'Holms Konditori', 'Ringgatan 61, Luleå', '룰레오의 콘디토리(전통 제과점). 구글 지도 평점 4.5.', 'Konditori (traditional pâtisserie) in Luleå. Rated 4.5 on Google Maps.'),
  place('lulea-bakery-2', 'lulea', 'bakery', 'Lilla Skafferiet', 'Björkgatan 41, Luleå', '룰레오의 빵집. 구글 지도 평점 4.5.', 'Bakery in Luleå. Rated 4.5 on Google Maps.'),
  place('lulea-bakery-3', 'lulea', 'bakery', 'Café Condis', 'Skeppsbrogatan 25, Luleå', '룰레오의 콘디토리(전통 제과점). 구글 지도 평점 4.4.', 'Konditori (traditional pâtisserie) in Luleå. Rated 4.4 on Google Maps.'),
  place('lulea-cafe-1', 'lulea', 'cafe', 'Cloud Café', 'Storgatan 7A, Luleå', '룰레오의 카페. 구글 지도 평점 4.6.', 'Café in Luleå. Rated 4.6 on Google Maps.'),
  place('lulea-cafe-2', 'lulea', 'cafe', 'Café La Vache', 'Kungsgatan 24B, Luleå', '룰레오의 카페. 구글 지도 평점 4.4.', 'Café in Luleå. Rated 4.4 on Google Maps.'),

  // —— abisko: restaurants, bakeries and cafés (2026-11-14) ——
  place('abisko-fine_dining-1', 'abisko', 'fine_dining', 'Brasserie Fjällköket', 'Lapportsvägen 30, Abisko', '아비스코의 브라스리. 구글 지도 평점 4.7.', 'Brasserie in Abisko. Rated 4.7 on Google Maps.'),
]
