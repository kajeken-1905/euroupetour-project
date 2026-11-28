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

  // —— sigtuna: restaurants, bakeries and cafés (2026-11-27) ——
  place('sigtuna-fine_dining-1', 'sigtuna', 'fine_dining', 'Båthuset Krog & Bar', 'Hamngatan 2, Sigtuna, Sweden', '레스토랑. 구글 지도 평점 4.7(리뷰 341개).', 'Restaurant. Rated 4.7 on Google Maps (341 reviews).'),
  place('sigtuna-fine_dining-2', 'sigtuna', 'fine_dining', 'Cicciotto', 'Stora Gatan 34, Sigtuna, Sweden', '이탈리아 요리 레스토랑. 구글 지도 평점 4.4(리뷰 787개).', 'Italian restaurant. Rated 4.4 on Google Maps (787 reviews).'),
  place('sigtuna-fine_dining-3', 'sigtuna', 'fine_dining', 'Paco´s Sigtuna', 'Stora Brännbovägen 31, Sigtuna, Sweden', '멕시코 요리 식당. 구글 지도 평점 4.7(리뷰 459개).', 'Mexican restaurant. Rated 4.7 on Google Maps (459 reviews).'),
  place('sigtuna-fine_dining-4', 'sigtuna', 'fine_dining', 'Farbror Blå', 'Stora Gatan 4d, Sigtuna, Sweden', '레스토랑. 구글 지도 평점 4.3(리뷰 486개).', 'Restaurant. Rated 4.3 on Google Maps (486 reviews).'),
  place('sigtuna-fine_dining-5', 'sigtuna', 'fine_dining', 'Restaurang Kopparkitteln', 'Stora Gatan 31, Sigtuna, Sweden', '레스토랑. 구글 지도 평점 4.3(리뷰 613개).', 'Restaurant. Rated 4.3 on Google Maps (613 reviews).'),
  place('sigtuna-bakery-1', 'sigtuna', 'bakery', 'Pelles och Maries brödbutik', 'Stora Gatan 29, Sigtuna, Sweden', '빵집. 구글 지도 평점 4.9(리뷰 93개).', 'Bakery. Rated 4.9 on Google Maps (93 reviews).'),
  place('sigtuna-bakery-2', 'sigtuna', 'bakery', 'Balders Bröd Köpmangården', 'Stora Gatan 45, Sigtuna, Sweden', '빵집. 구글 지도 평점 4.4(리뷰 97개).', 'Bakery. Rated 4.4 on Google Maps (97 reviews).'),
  place('sigtuna-cafe-1', 'sigtuna', 'cafe', 'Café Valvet', 'Stora Gatan 40c, Sigtuna, Sweden', '카페. 구글 지도 평점 4.3(리뷰 902개).', 'Café. Rated 4.3 on Google Maps (902 reviews).'),

  // —— vaxholm: restaurants, bakeries and cafés (2026-11-27) ——
  place('vaxholm-fine_dining-1', 'vaxholm', 'fine_dining', 'Unique Living Restaurant & Interior', 'Hamngatan 40, Vaxholm, Sweden', '스뫼레브뢰드(오픈 샌드위치) 식당. 구글 지도 평점 4.9(리뷰 138개).', 'Smørrebrød (open sandwich) restaurant. Rated 4.9 on Google Maps (138 reviews).'),
  place('vaxholm-fine_dining-2', 'vaxholm', 'fine_dining', 'Dee Dee thaikök - Vaxholm', 'Söderhamnsplan 1, Vaxholm, Sweden', '태국 요리 레스토랑. 구글 지도 평점 4.7(리뷰 346개).', 'Thai restaurant. Rated 4.7 on Google Maps (346 reviews).'),
  place('vaxholm-fine_dining-3', 'vaxholm', 'fine_dining', 'Magasinet i Waxholm', 'Fiskaregatan 1, Vaxholm, Sweden', '레스토랑. 구글 지도 평점 4.3(리뷰 148개).', 'Restaurant. Rated 4.3 on Google Maps (148 reviews).'),
  place('vaxholm-bakery-1', 'vaxholm', 'bakery', 'Gateau Vaxholm', 'Hamngatan 12, Vaxholm, Sweden', '빵집. 구글 지도 평점 4.3(리뷰 221개).', 'Bakery. Rated 4.3 on Google Maps (221 reviews).'),
  place('vaxholm-cafe-1', 'vaxholm', 'cafe', 'Camilles Trädgård & Café', 'Fiskaregatan 12, Vaxholm, Sweden', '카페. 구글 지도 평점 4.8(리뷰 719개).', 'Café. Rated 4.8 on Google Maps (719 reviews).'),
  place('vaxholm-cafe-2', 'vaxholm', 'cafe', 'Roddarhuset Art Gallery & Cafe', 'Östra Ekuddsgatan 21, Vaxholm, Sweden', '카페. 구글 지도 평점 4.5(리뷰 303개).', 'Café. Rated 4.5 on Google Maps (303 reviews).'),
  place('vaxholm-cafe-3', 'vaxholm', 'cafe', 'Glass på Hörnet', 'Hamngatan 2, Vaxholm, Sweden', '아이스크림 가게. 구글 지도 평점 4.5(리뷰 519개).', 'Ice-cream shop. Rated 4.5 on Google Maps (519 reviews).'),

  // —— orebro: restaurants, bakeries and cafés (2026-11-27) ——
  place('orebro-fine_dining-1', 'orebro', 'fine_dining', 'Restaurang Rocca', 'Engelbrektsgatan 45, Örebro, Sweden', '레스토랑. 구글 지도 평점 4.9(리뷰 262개).', 'Restaurant. Rated 4.9 on Google Maps (262 reviews).'),
  place('orebro-fine_dining-2', 'orebro', 'fine_dining', 'Osteria da Alfonso', 'Storgatan 18, Örebro, Sweden', '이탈리아 요리 레스토랑. 구글 지도 평점 4.7(리뷰 430개).', 'Italian restaurant. Rated 4.7 on Google Maps (430 reviews).'),
  place('orebro-fine_dining-3', 'orebro', 'fine_dining', 'Restaurang Amano', 'Kungsgatan 1, Örebro, Sweden', '레스토랑. 구글 지도 평점 4.6(리뷰 466개).', 'Restaurant. Rated 4.6 on Google Maps (466 reviews).'),
  place('orebro-fine_dining-4', 'orebro', 'fine_dining', 'Blackstone Steakhouse Örebro', 'Storgatan 3, Örebro, Sweden', '스테이크 하우스. 구글 지도 평점 4.6(리뷰 365개).', 'Steakhouse. Rated 4.6 on Google Maps (365 reviews).'),
  place('orebro-fine_dining-5', 'orebro', 'fine_dining', 'Fratelli Örebro', 'Stortorget 8, Örebro, Sweden', '이탈리아 요리 레스토랑. 구글 지도 평점 4.4(리뷰 2859개).', 'Italian restaurant. Rated 4.4 on Google Maps (2859 reviews).'),
  place('orebro-bakery-1', 'orebro', 'bakery', 'Malins Hembageri', 'Engelbrektsgatan 70, Örebro, Sweden', '빵집. 구글 지도 평점 4.5(리뷰 156개).', 'Bakery. Rated 4.5 on Google Maps (156 reviews).'),
  place('orebro-bakery-2', 'orebro', 'bakery', 'Konditori Västerport', 'Ekersgatan 21, Örebro, Sweden', '빵집. 구글 지도 평점 4.4(리뷰 140개).', 'Bakery. Rated 4.4 on Google Maps (140 reviews).'),
  place('orebro-bakery-3', 'orebro', 'bakery', 'Hälls Konditori Centralpalatset', 'Olaigatan 17, Örebro, Sweden', '과자점. 구글 지도 평점 4.3(리뷰 320개).', 'Pastry shop. Rated 4.3 on Google Maps (320 reviews).'),
  place('orebro-bakery-4', 'orebro', 'bakery', 'Princess Konditori', 'Storgatan 47, Örebro, Sweden', '과자점. 구글 지도 평점 4.3(리뷰 328개).', 'Pastry shop. Rated 4.3 on Google Maps (328 reviews).'),
  place('orebro-cafe-1', 'orebro', 'cafe', 'Sture Café', 'Sturegatan 2, Örebro, Sweden', '카페. 구글 지도 평점 4.6(리뷰 136개).', 'Café. Rated 4.6 on Google Maps (136 reviews).'),
  place('orebro-cafe-2', 'orebro', 'cafe', 'Old Örebro Café & Conference', 'Bertil Waldéns gata 14, Örebro, Sweden', '카페. 구글 지도 평점 4.3(리뷰 461개).', 'Café. Rated 4.3 on Google Maps (461 reviews).'),

  // —— vasteras: restaurants, bakeries and cafés (2026-11-27) ——
  place('vasteras-fine_dining-1', 'vasteras', 'fine_dining', 'Frank', 'Stora Gatan 3, Västerås, Sweden', '레스토랑. 구글 지도 평점 4.7(리뷰 514개).', 'Restaurant. Rated 4.7 on Google Maps (514 reviews).'),
  place('vasteras-fine_dining-2', 'vasteras', 'fine_dining', 'Vinoteket Lothar', 'Karlsgatan 4, Västerås, Sweden', '와인 바 레스토랑. 구글 지도 평점 4.6(리뷰 471개).', 'Wine bar and restaurant. Rated 4.6 on Google Maps (471 reviews).'),
  place('vasteras-fine_dining-3', 'vasteras', 'fine_dining', 'Limone Ristorante Italiano', 'Stora Gatan 4, Västerås, Sweden', '이탈리아 요리 레스토랑. 구글 지도 평점 4.5(리뷰 1392개).', 'Italian restaurant. Rated 4.5 on Google Maps (1392 reviews).'),
  place('vasteras-fine_dining-4', 'vasteras', 'fine_dining', 'Kajplats 9', 'Sjötullsgatan 2, Västerås, Sweden', '레스토랑. 구글 지도 평점 4.4(리뷰 2010개).', 'Restaurant. Rated 4.4 on Google Maps (2010 reviews).'),
  place('vasteras-fine_dining-5', 'vasteras', 'fine_dining', 'St.Thomas Restaurang', 'Västra Ringvägen 21B, Västerås, Sweden', '레바논 요리 식당. 구글 지도 평점 4.9(리뷰 282개).', 'Lebanese restaurant. Rated 4.9 on Google Maps (282 reviews).'),
  place('vasteras-bakery-1', 'vasteras', 'bakery', 'Bageri April', 'Vasagatan 17, Västerås, Sweden', '빵집. 구글 지도 평점 4.6(리뷰 366개).', 'Bakery. Rated 4.6 on Google Maps (366 reviews).'),
  place('vasteras-bakery-2', 'vasteras', 'bakery', 'Bread & Sweets by Jennie', 'Öster Mälarstrands Allé 18, Västerås, Sweden', '빵집. 구글 지도 평점 4.6(리뷰 332개).', 'Bakery. Rated 4.6 on Google Maps (332 reviews).'),
  place('vasteras-bakery-3', 'vasteras', 'bakery', 'Kopparlundens Bageri', 'Kopparlundsvägen 7, Västerås, Sweden', '빵집. 구글 지도 평점 4.6(리뷰 397개).', 'Bakery. Rated 4.6 on Google Maps (397 reviews).'),
  place('vasteras-bakery-4', 'vasteras', 'bakery', 'Nakoula Sweets', 'Bomullsvägen 1, Västerås, Sweden', '과자점. 구글 지도 평점 4.8(리뷰 106개).', 'Pastry shop. Rated 4.8 on Google Maps (106 reviews).'),
  place('vasteras-cafe-1', 'vasteras', 'cafe', 'Vanilla Cafe', 'Karlsgatan 18, Västerås, Sweden', '카페. 구글 지도 평점 4.8(리뷰 304개).', 'Café. Rated 4.8 on Google Maps (304 reviews).'),
  place('vasteras-cafe-2', 'vasteras', 'cafe', 'Maria Therese', 'Kungsgatan 2, Västerås, Sweden', '카페. 구글 지도 평점 4.8(리뷰 221개).', 'Café. Rated 4.8 on Google Maps (221 reviews).'),
  place('vasteras-cafe-3', 'vasteras', 'cafe', 'Karma - All Day Brunch', 'Smedjegatan 4, Västerås, Sweden', '브런치 카페. 구글 지도 평점 4.6(리뷰 94개).', 'Brunch café. Rated 4.6 on Google Maps (94 reviews).'),
  place('vasteras-cafe-4', 'vasteras', 'cafe', 'Cafe Mosaic', 'Smedjegatan 2, Västerås, Sweden', '카페. 구글 지도 평점 4.4(리뷰 127개).', 'Café. Rated 4.4 on Google Maps (127 reviews).'),

  // —— vadstena: restaurants, bakeries and cafés (2026-11-27) ——
  place('vadstena-fine_dining-1', 'vadstena', 'fine_dining', 'Restaurang Bakgatan', 'Bakgatan 15, Vadstena, Sweden', '레스토랑. 구글 지도 평점 4.6(리뷰 158개).', 'Restaurant. Rated 4.6 on Google Maps (158 reviews).'),
  place('vadstena-fine_dining-2', 'vadstena', 'fine_dining', 'Ejnebergs bistro', 'Storgatan, Vadstena, Sweden', '비스트로. 구글 지도 평점 4.7(리뷰 149개).', 'Bistro. Rated 4.7 on Google Maps (149 reviews).'),
  place('vadstena-bakery-1', 'vadstena', 'bakery', 'Bageri Hamilton', 'Hovsgatan 1, Vadstena, Sweden', '빵집. 구글 지도 평점 4.6(리뷰 228개).', 'Bakery. Rated 4.6 on Google Maps (228 reviews).'),
  place('vadstena-cafe-1', 'vadstena', 'cafe', 'Café Nostalgi', 'Rådhustorget 1, Vadstena, Sweden', '카페. 구글 지도 평점 4.7(리뷰 145개).', 'Café. Rated 4.7 on Google Maps (145 reviews).'),

  // —— linkoping: restaurants, bakeries and cafés (2026-11-27) ——
  place('linkoping-fine_dining-1', 'linkoping', 'fine_dining', 'JORD', 'Johannesborgsparken 1A, 582 49 Linköping, Sweden', '레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.7(리뷰 360개).', 'Restaurant. Listed in the MICHELIN Guide. Rated 4.7 on Google Maps (360 reviews).'),
  place('linkoping-fine_dining-2', 'linkoping', 'fine_dining', 'Restaurant Alfama', 'Apotekaregatan 8, Linköping, Sweden', '포르투갈 요리 레스토랑. 구글 지도 평점 4.7(리뷰 715개).', 'Portuguese restaurant. Rated 4.7 on Google Maps (715 reviews).'),
  place('linkoping-fine_dining-3', 'linkoping', 'fine_dining', 'Dahlboms Mat & Bar', 'Nygatan 29, Linköping, Sweden', '레스토랑. 구글 지도 평점 4.6(리뷰 439개).', 'Restaurant. Rated 4.6 on Google Maps (439 reviews).'),
  place('linkoping-fine_dining-4', 'linkoping', 'fine_dining', 'Stångs Magasin', 'Södra Stånggatan 1, Linköping, Sweden', '레스토랑. 구글 지도 평점 4.4(리뷰 992개).', 'Restaurant. Rated 4.4 on Google Maps (992 reviews).'),
  place('linkoping-bakery-1', 'linkoping', 'bakery', 'Bakery Normandie', 'Torggatan 1B, Linköping, Sweden', '빵집. 구글 지도 평점 4.9(리뷰 235개).', 'Bakery. Rated 4.9 on Google Maps (235 reviews).'),
  place('linkoping-bakery-2', 'linkoping', 'bakery', 'Lanemo Patisserie & Bakery', 'Västra Vägen 6, Linköping, Sweden', '과자점. 구글 지도 평점 4.6(리뷰 812개).', 'Pastry shop. Rated 4.6 on Google Maps (812 reviews).'),
  place('linkoping-bakery-3', 'linkoping', 'bakery', 'Tannefors Hembageri', 'Nya Tanneforsvägen 41, Linköping, Sweden', '빵집. 구글 지도 평점 4.5(리뷰 488개).', 'Bakery. Rated 4.5 on Google Maps (488 reviews).'),
  place('linkoping-bakery-4', 'linkoping', 'bakery', 'Petra\'s Cake', 'Storgatan 50, Linköping, Sweden', '케이크 가게. 구글 지도 평점 4.9(리뷰 154개).', 'Cake shop. Rated 4.9 on Google Maps (154 reviews).'),
  place('linkoping-cafe-1', 'linkoping', 'cafe', 'Simon\'s Roastery & Bakery', 'Storgatan 39G, Linköping, Sweden', '직접 원두를 볶는 커피숍. 구글 지도 평점 4.6(리뷰 1082개).', 'Coffee roastery café. Rated 4.6 on Google Maps (1082 reviews).'),
  place('linkoping-cafe-2', 'linkoping', 'cafe', 'Babettes Kafferi', 'Stora Badstugatan 4, Linköping, Sweden', '카페. 구글 지도 평점 4.6(리뷰 1203개).', 'Café. Rated 4.6 on Google Maps (1203 reviews).'),
  place('linkoping-cafe-3', 'linkoping', 'cafe', 'Dolce Vita Linköping', 'Johannes Magnus väg 26, Linköping, Sweden', '카페. 구글 지도 평점 4.8(리뷰 166개).', 'Café. Rated 4.8 on Google Maps (166 reviews).'),

  // —— jonkoping: restaurants, bakeries and cafés (2026-11-27) ——
  place('jonkoping-fine_dining-1', 'jonkoping', 'fine_dining', 'BASTA - Italiensk Restaurang Jönköping', 'Östra Storgatan 2, Jönköping, Sweden', '이탈리아 요리 레스토랑. 구글 지도 평점 4.8(리뷰 2437개).', 'Italian restaurant. Rated 4.8 on Google Maps (2437 reviews).'),
  place('jonkoping-fine_dining-2', 'jonkoping', 'fine_dining', 'Rotisserie Jönköping', 'Södra Strandgatan 25D, Jönköping, Sweden', '바비큐 식당. 구글 지도 평점 4.9(리뷰 309개).', 'Barbecue restaurant. Rated 4.9 on Google Maps (309 reviews).'),
  place('jonkoping-fine_dining-3', 'jonkoping', 'fine_dining', 'Restaurang Mangi', 'Smedjegatan 12B, Jönköping, Sweden', '이탈리아 요리 레스토랑. 구글 지도 평점 4.8(리뷰 141개).', 'Italian restaurant. Rated 4.8 on Google Maps (141 reviews).'),
  place('jonkoping-fine_dining-4', 'jonkoping', 'fine_dining', 'Si Chuan', 'Klostergatan 27, Jönköping, Sweden', '아시아 요리 레스토랑. 구글 지도 평점 4.7(리뷰 250개).', 'Asian restaurant. Rated 4.7 on Google Maps (250 reviews).'),
  place('jonkoping-fine_dining-5', 'jonkoping', 'fine_dining', 'Indiska Köket', 'Kapellgatan 15, Jönköping, Sweden', '인도 요리 레스토랑. 구글 지도 평점 4.6(리뷰 1805개).', 'Indian restaurant. Rated 4.6 on Google Maps (1805 reviews).'),
  place('jonkoping-bakery-1', 'jonkoping', 'bakery', 'Konditori Napoleon', 'Barnarpsgatan 17, Jönköping, Sweden', '과자점. 구글 지도 평점 4.4(리뷰 336개).', 'Pastry shop. Rated 4.4 on Google Maps (336 reviews).'),
  place('jonkoping-bakery-2', 'jonkoping', 'bakery', 'Wallentins Konditori', 'Kortebovägen 5, Jönköping, Sweden', '과자점. 구글 지도 평점 4.5(리뷰 103개).', 'Pastry shop. Rated 4.5 on Google Maps (103 reviews).'),
  place('jonkoping-bakery-3', 'jonkoping', 'bakery', 'Gilberts Konditori', 'Ekhagsringen 2, Jönköping, Sweden', '과자점. 구글 지도 평점 4.4(리뷰 127개).', 'Pastry shop. Rated 4.4 on Google Maps (127 reviews).'),
  place('jonkoping-cafe-1', 'jonkoping', 'cafe', 'STUK - Cafe Jönköping', 'Lantmätargränd 3, Jönköping, Sweden', '카페. 구글 지도 평점 4.6(리뷰 820개).', 'Café. Rated 4.6 on Google Maps (820 reviews).'),
  place('jonkoping-cafe-2', 'jonkoping', 'cafe', 'Lindstrom\'s Cafe', 'Klostergatan 63, Jönköping, Sweden', '카페. 구글 지도 평점 4.5(리뷰 430개).', 'Café. Rated 4.5 on Google Maps (430 reviews).'),

  // —— vaxjo: restaurants, bakeries and cafés (2026-11-27) ——
  place('vaxjo-fine_dining-1', 'vaxjo', 'fine_dining', 'PM & Vänner', 'Västergatan 10, 352 31 Växjö, Sweden', '창작 요리 레스토랑. 미쉐린 1스타. 구글 지도 평점 4.4(리뷰 1391개).', 'Creative restaurant. One MICHELIN star. Rated 4.4 on Google Maps (1391 reviews).', { michelin: 'star1' }),
  place('vaxjo-fine_dining-2', 'vaxjo', 'fine_dining', 'Delhi 6', 'Kungsgatan 1, Växjö, Sweden', '인도 요리 레스토랑. 구글 지도 평점 4.8(리뷰 208개).', 'Indian restaurant. Rated 4.8 on Google Maps (208 reviews).'),
  place('vaxjo-fine_dining-3', 'vaxjo', 'fine_dining', 'Saigon Kitchen', 'Västra Esplanaden 9A, Växjö, Sweden', '베트남 요리 식당. 구글 지도 평점 4.7(리뷰 120개).', 'Vietnamese restaurant. Rated 4.7 on Google Maps (120 reviews).'),
  place('vaxjo-fine_dining-4', 'vaxjo', 'fine_dining', 'Izakaya Moshi', 'Kungsgatan 6A, Växjö, Sweden', '일본 요리 레스토랑. 구글 지도 평점 4.5(리뷰 746개).', 'Japanese restaurant. Rated 4.5 on Google Maps (746 reviews).'),
  place('vaxjo-fine_dining-5', 'vaxjo', 'fine_dining', 'Umami Monkey', 'Storgatan 18, Växjö, Sweden', '아시아 요리 레스토랑. 구글 지도 평점 4.3(리뷰 1074개).', 'Asian restaurant. Rated 4.3 on Google Maps (1074 reviews).'),
  place('vaxjo-bakery-1', 'vaxjo', 'bakery', 'TårtaGården Bageri & Café', 'Verkstadsgatan 18E, Växjö, Sweden', '빵집. 구글 지도 평점 4.7(리뷰 107개).', 'Bakery. Rated 4.7 on Google Maps (107 reviews).'),
  place('vaxjo-bakery-2', 'vaxjo', 'bakery', 'Hovs Bageri', 'Östregårdsgatan 7, Växjö, Sweden', '빵집. 구글 지도 평점 4.6(리뷰 118개).', 'Bakery. Rated 4.6 on Google Maps (118 reviews).'),
  place('vaxjo-bakery-3', 'vaxjo', 'bakery', 'Toftastrand konditori', 'Lenhovdavägen 72, Växjö, Sweden', '과자점. 구글 지도 평점 4.5(리뷰 1033개).', 'Pastry shop. Rated 4.5 on Google Maps (1033 reviews).'),
  place('vaxjo-bakery-4', 'vaxjo', 'bakery', 'Broqvist konditori', 'Kronobergsgatan 14, Växjö, Sweden', '과자점. 구글 지도 평점 4.4(리뷰 745개).', 'Pastry shop. Rated 4.4 on Google Maps (745 reviews).'),
  place('vaxjo-bakery-5', 'vaxjo', 'bakery', 'Munges Bageri & Café', 'Öjabyvägen 20A, Växjö, Sweden', '빵집. 구글 지도 평점 4.4(리뷰 171개).', 'Bakery. Rated 4.4 on Google Maps (171 reviews).'),
  place('vaxjo-cafe-1', 'vaxjo', 'cafe', 'Bönan & Mustaschen', 'Storgatan 8, Växjö, Sweden', '카페. 구글 지도 평점 4.8(리뷰 262개).', 'Café. Rated 4.8 on Google Maps (262 reviews).'),
  place('vaxjo-cafe-2', 'vaxjo', 'cafe', 'Top Notch Bakery', 'Klostergatan 7, Växjö, Sweden', '카페. 구글 지도 평점 4.6(리뷰 331개).', 'Café. Rated 4.6 on Google Maps (331 reviews).'),
  place('vaxjo-cafe-3', 'vaxjo', 'cafe', 'Mammornas cafe', 'Vilhelm Mobergs gata 4, Växjö, Sweden', '카페. 구글 지도 평점 4.7(리뷰 104개).', 'Café. Rated 4.7 on Google Maps (104 reviews).'),
  place('vaxjo-cafe-4', 'vaxjo', 'cafe', 'Askelyckans Konditori', 'Storgatan 25, Växjö, Sweden', '카페. 구글 지도 평점 4.4(리뷰 305개).', 'Café. Rated 4.4 on Google Maps (305 reviews).'),

  // —— helsingborg: restaurants, bakeries and cafés (2026-11-27) ——
  place('helsingborg-fine_dining-1', 'helsingborg', 'fine_dining', 'Restaurang Stubinen', 'Drottninggatan 30, Helsingborg, Sweden', '스칸디나비아 요리 레스토랑. 구글 지도 평점 4.9(리뷰 210개).', 'Scandinavian restaurant. Rated 4.9 on Google Maps (210 reviews).'),
  place('helsingborg-fine_dining-2', 'helsingborg', 'fine_dining', 'Le Coq Rouge', 'Bruksgatan 19, Helsingborg, Sweden', '프랑스 요리 레스토랑. 구글 지도 평점 4.6(리뷰 473개).', 'French restaurant. Rated 4.6 on Google Maps (473 reviews).'),
  place('helsingborg-fine_dining-3', 'helsingborg', 'fine_dining', 'Vibes', 'Ängelholmsvägen 16, Helsingborg, Sweden', '레스토랑. 구글 지도 평점 4.8(리뷰 240개).', 'Restaurant. Rated 4.8 on Google Maps (240 reviews).'),
  place('helsingborg-fine_dining-4', 'helsingborg', 'fine_dining', 'Madame Mustache', 'Norra Storgatan 9, Helsingborg, Sweden', '프랑스 요리 레스토랑. 구글 지도 평점 4.4(리뷰 945개).', 'French restaurant. Rated 4.4 on Google Maps (945 reviews).'),
  place('helsingborg-fine_dining-5', 'helsingborg', 'fine_dining', 'Olsons skafferi', 'Mariagatan 6, Helsingborg, Sweden', '이탈리아 요리 레스토랑. 구글 지도 평점 4.4(리뷰 1612개).', 'Italian restaurant. Rated 4.4 on Google Maps (1612 reviews).'),
  place('helsingborg-bakery-1', 'helsingborg', 'bakery', 'Backhaus Bageri & Café', 'Järnvägsgatan 13, Helsingborg, Sweden', '빵집. 구글 지도 평점 4.5(리뷰 1027개).', 'Bakery. Rated 4.5 on Google Maps (1027 reviews).'),
  place('helsingborg-bakery-2', 'helsingborg', 'bakery', 'Thores Bageri', 'Strandbadsvägen 11, Helsingborg, Sweden', '빵집. 구글 지도 평점 4.5(리뷰 116개).', 'Bakery. Rated 4.5 on Google Maps (116 reviews).'),
  place('helsingborg-bakery-3', 'helsingborg', 'bakery', 'Börjes Konditori & Bageri', 'Tågagatan 76, Helsingborg, Sweden', '과자점. 구글 지도 평점 4.6(리뷰 182개).', 'Pastry shop. Rated 4.6 on Google Maps (182 reviews).'),
  place('helsingborg-cafe-1', 'helsingborg', 'cafe', 'Margit café', 'Kullagatan 36, Helsingborg, Sweden', '카페. 구글 지도 평점 4.7(리뷰 398개).', 'Café. Rated 4.7 on Google Maps (398 reviews).'),
  place('helsingborg-cafe-2', 'helsingborg', 'cafe', 'Bruket kaffebar', 'Bruksgatan 9, Helsingborg, Sweden', '스페셜티 커피 바. 구글 지도 평점 4.6(리뷰 825개).', 'Specialty coffee bar. Rated 4.6 on Google Maps (825 reviews).'),
  place('helsingborg-cafe-3', 'helsingborg', 'cafe', 'Ebbas Fik', 'Bruksgatan 20, Helsingborg, Sweden', '카페. 구글 지도 평점 4.5(리뷰 1132개).', 'Café. Rated 4.5 on Google Maps (1132 reviews).'),
  place('helsingborg-cafe-4', 'helsingborg', 'cafe', 'Sweet House Cafe', 'Södergatan 18, Helsingborg, Sweden', '카페. 구글 지도 평점 4.4(리뷰 710개).', 'Café. Rated 4.4 on Google Maps (710 reviews).'),

  // —— simrishamn: restaurants, bakeries and cafés (2026-11-27) ——
  place('simrishamn-fine_dining-1', 'simrishamn', 'fine_dining', 'VYN', 'Höga vägen 72, 272 92 Simrishamn, Sweden', '창작 요리 레스토랑. 미쉐린 2스타. 구글 지도 평점 4.8(리뷰 410개).', 'Creative restaurant. Two MICHELIN stars. Rated 4.8 on Google Maps (410 reviews).', { michelin: 'star2' }),
  place('simrishamn-fine_dining-2', 'simrishamn', 'fine_dining', 'Sjöfolket - Ekströms Fisk & Restaurang', 'Svartehallsvägen 11, Simrishamn, Sweden', '해산물 레스토랑. 구글 지도 평점 4.5(리뷰 1380개).', 'Seafood restaurant. Rated 4.5 on Google Maps (1380 reviews).'),
  place('simrishamn-fine_dining-3', 'simrishamn', 'fine_dining', 'Restaurang Cimbris', 'Storgatan 10, Simrishamn, Sweden', '레스토랑. 구글 지도 평점 4.5(리뷰 137개).', 'Restaurant. Rated 4.5 on Google Maps (137 reviews).'),
  place('simrishamn-fine_dining-4', 'simrishamn', 'fine_dining', 'Restaurang Vibe', 'Storgatan 8, Simrishamn, Sweden', '레스토랑. 구글 지도 평점 4.5(리뷰 163개).', 'Restaurant. Rated 4.5 on Google Maps (163 reviews).'),
  place('simrishamn-fine_dining-5', 'simrishamn', 'fine_dining', 'Fuji Sushi', 'Storgatan 21, Simrishamn, Sweden', '스시 레스토랑. 구글 지도 평점 4.7(리뷰 116개).', 'Sushi restaurant. Rated 4.7 on Google Maps (116 reviews).'),
  place('simrishamn-bakery-1', 'simrishamn', 'bakery', 'Bagaren & Konditorn på Österlen', 'Storgatan 19, Simrishamn, Sweden', '빵집. 구글 지도 평점 4.3(리뷰 247개).', 'Bakery. Rated 4.3 on Google Maps (247 reviews).'),
  place('simrishamn-cafe-1', 'simrishamn', 'cafe', 'Mårtens Kök och Café', 'Storgatan 32, Simrishamn, Sweden', '카페. 구글 지도 평점 4.3(리뷰 218개).', 'Café. Rated 4.3 on Google Maps (218 reviews).'),
  place('simrishamn-cafe-2', 'simrishamn', 'cafe', 'Olaols Gelato Österlen', 'Karlstorpsvägen 40, Simrishamn, Sweden', '아이스크림 가게. 구글 지도 평점 4.4(리뷰 496개).', 'Ice-cream shop. Rated 4.4 on Google Maps (496 reviews).'),

  // —— smogen: restaurants, bakeries and cafés (2026-11-27) ——
  place('smogen-fine_dining-1', 'smogen', 'fine_dining', 'Göstas Fiskekrog', 'Fiskhamnsgatan 32, Smögen, Sweden', '해산물 레스토랑. 구글 지도 평점 4.3(리뷰 915개).', 'Seafood restaurant. Rated 4.3 on Google Maps (915 reviews).'),
  place('smogen-fine_dining-2', 'smogen', 'fine_dining', 'Thai Ja Smögen', 'Hamngatan 6, Smögen, Sweden', '태국 요리 레스토랑. 구글 지도 평점 4.7(리뷰 242개).', 'Thai restaurant. Rated 4.7 on Google Maps (242 reviews).'),

  // —— karlstad: restaurants, bakeries and cafés (2026-11-27) ——
  place('karlstad-fine_dining-1', 'karlstad', 'fine_dining', 'Kinoko Ramen by Madam Kong', 'Fredsgatan 3A, Karlstad, Sweden', '라멘 식당. 구글 지도 평점 4.8(리뷰 474개).', 'Ramen restaurant. Rated 4.8 on Google Maps (474 reviews).'),
  place('karlstad-fine_dining-2', 'karlstad', 'fine_dining', 'Fenan Kök & Bar', 'Tynäsgatan 10, Karlstad, Sweden', '해산물 레스토랑. 구글 지도 평점 4.8(리뷰 101개).', 'Seafood restaurant. Rated 4.8 on Google Maps (101 reviews).'),
  place('karlstad-fine_dining-3', 'karlstad', 'fine_dining', 'Sultan Kolgrill', 'Blockgatan 9, Karlstad, Sweden', '튀르키예 요리 레스토랑. 구글 지도 평점 4.8(리뷰 728개).', 'Turkish restaurant. Rated 4.8 on Google Maps (728 reviews).'),
  place('karlstad-fine_dining-4', 'karlstad', 'fine_dining', 'Restaurang Baran', 'Stenhagsgatan 12, Karlstad, Sweden', '바비큐 식당. 구글 지도 평점 4.7(리뷰 300개).', 'Barbecue restaurant. Rated 4.7 on Google Maps (300 reviews).'),
  place('karlstad-fine_dining-5', 'karlstad', 'fine_dining', 'Blackstone Steakhouse Karlstad', 'Tynäsgatan 10, Karlstad, Sweden', '스테이크 하우스. 구글 지도 평점 4.5(리뷰 519개).', 'Steakhouse. Rated 4.5 on Google Maps (519 reviews).'),
  place('karlstad-bakery-1', 'karlstad', 'bakery', 'Artisan Bread', 'Kasernhöjden 4, Karlstad, Sweden', '빵집. 구글 지도 평점 4.6(리뷰 1372개).', 'Bakery. Rated 4.6 on Google Maps (1372 reviews).'),
  place('karlstad-bakery-2', 'karlstad', 'bakery', 'Zahraa Cake', 'Nygatan 8, Karlstad, Sweden', '케이크 가게. 구글 지도 평점 4.9(리뷰 163개).', 'Cake shop. Rated 4.9 on Google Maps (163 reviews).'),
  place('karlstad-bakery-3', 'karlstad', 'bakery', 'V Lindhés Bageri & Konditori', 'Vikengatan 5, Karlstad, Sweden', '과자점. 구글 지도 평점 4.4(리뷰 189개).', 'Pastry shop. Rated 4.4 on Google Maps (189 reviews).'),
  place('karlstad-cafe-1', 'karlstad', 'cafe', 'Rådhuscaféet', 'Tingvallagatan 8, Karlstad, Sweden', '카페. 구글 지도 평점 4.6(리뷰 82개).', 'Café. Rated 4.6 on Google Maps (82 reviews).'),
  place('karlstad-cafe-2', 'karlstad', 'cafe', 'Kafé Rosteriet', 'Tolagsgatan 2, Karlstad, Sweden', '직접 원두를 볶는 커피숍. 구글 지도 평점 4.4(리뷰 642개).', 'Coffee roastery café. Rated 4.4 on Google Maps (642 reviews).'),
  place('karlstad-cafe-3', 'karlstad', 'cafe', 'Café Råtorp', 'Råtorpsvägen 22, Karlstad, Sweden', '카페. 구글 지도 평점 4.4(리뷰 595개).', 'Café. Rated 4.4 on Google Maps (595 reviews).'),

  // —— mora: restaurants, bakeries and cafés (2026-11-27) ——
  place('mora-fine_dining-1', 'mora', 'fine_dining', 'Björka Brygghus', 'Kyrkogatan 35, Mora, Sweden', '직접 맥주를 빚는 양조장 식당. 구글 지도 평점 4.8(리뷰 101개).', 'Brewpub restaurant. Rated 4.8 on Google Maps (101 reviews).'),
  place('mora-fine_dining-2', 'mora', 'fine_dining', 'Restaurang Ä:t', 'Siljanssågsvägen 11, Mora, Sweden', '레스토랑. 구글 지도 평점 4.6(리뷰 207개).', 'Restaurant. Rated 4.6 on Google Maps (207 reviews).'),
  place('mora-fine_dining-3', 'mora', 'fine_dining', 'Käk & Plock', 'Kyrkogatan 10, Mora, Sweden', '레스토랑. 구글 지도 평점 4.4(리뷰 754개).', 'Restaurant. Rated 4.4 on Google Maps (754 reviews).'),
  place('mora-bakery-1', 'mora', 'bakery', 'Mora Kaffestuga', 'Kyrkogatan 8, Mora, Sweden', '과자점. 구글 지도 평점 4.4(리뷰 1392개).', 'Pastry shop. Rated 4.4 on Google Maps (1392 reviews).'),
  place('mora-cafe-1', 'mora', 'cafe', 'Korsnäsgården', 'Moragatan 9, Mora, Sweden', '카페. 구글 지도 평점 4.7(리뷰 212개).', 'Café. Rated 4.7 on Google Maps (212 reviews).'),
  place('mora-cafe-2', 'mora', 'cafe', 'Café Zorn', 'Vasagatan 34c, Mora, Sweden', '카페. 구글 지도 평점 4.5(리뷰 462개).', 'Café. Rated 4.5 on Google Maps (462 reviews).'),
  place('mora-cafe-3', 'mora', 'cafe', 'Geci Coffee', 'Kyrkogatan 4, Mora, Sweden', '카페. 구글 지도 평점 4.4(리뷰 498개).', 'Café. Rated 4.4 on Google Maps (498 reviews).'),

  // —— gavle: restaurants, bakeries and cafés (2026-11-27) ——
  place('gavle-fine_dining-1', 'gavle', 'fine_dining', 'Matildas', 'Timmermansgatan 23, Gävle, Sweden', '스웨덴 요리 레스토랑. 구글 지도 평점 4.7(리뷰 438개).', 'Swedish restaurant. Rated 4.7 on Google Maps (438 reviews).'),
  place('gavle-fine_dining-2', 'gavle', 'fine_dining', 'Verovin', 'Norra Kungsgatan 11, Gävle, Sweden', '레스토랑. 구글 지도 평점 4.7(리뷰 319개).', 'Restaurant. Rated 4.7 on Google Maps (319 reviews).'),
  place('gavle-fine_dining-3', 'gavle', 'fine_dining', 'Blackstone Steakhouse Gävle', 'Drottninggatan 28, Gävle, Sweden', '스테이크 하우스. 구글 지도 평점 4.6(리뷰 1093개).', 'Steakhouse. Rated 4.6 on Google Maps (1093 reviews).'),
  place('gavle-fine_dining-4', 'gavle', 'fine_dining', 'BASTA - Gävle', 'Drottninggatan 18, Gävle, Sweden', '이탈리아 요리 레스토랑. 구글 지도 평점 4.5(리뷰 1741개).', 'Italian restaurant. Rated 4.5 on Google Maps (1741 reviews).'),
  place('gavle-fine_dining-5', 'gavle', 'fine_dining', 'Church Street Saloon', 'Kyrkogatan 11, Gävle, Sweden', '미국식 레스토랑. 구글 지도 평점 4.4(리뷰 1613개).', 'American restaurant. Rated 4.4 on Google Maps (1613 reviews).'),
  place('gavle-bakery-1', 'gavle', 'bakery', 'Bageri Kavlat & Klart Magasinet', 'Norra Skeppsbron 1, Gävle, Sweden', '빵집. 구글 지도 평점 4.6(리뷰 330개).', 'Bakery. Rated 4.6 on Google Maps (330 reviews).'),
  place('gavle-bakery-2', 'gavle', 'bakery', 'Épi Bageri & Café', 'Norra Kungsgatan 11, Gävle, Sweden', '빵집. 구글 지도 평점 4.3(리뷰 401개).', 'Bakery. Rated 4.3 on Google Maps (401 reviews).'),
  place('gavle-bakery-3', 'gavle', 'bakery', 'Konditori Lido Söder', 'Södra Kungsgatan 10, Gävle, Sweden', '과자점. 구글 지도 평점 4.3(리뷰 920개).', 'Pastry shop. Rated 4.3 on Google Maps (920 reviews).'),
  place('gavle-cafe-1', 'gavle', 'cafe', 'Elsas Coffeeshop', 'Västra Vägen 4, Gävle, Sweden', '카페. 구글 지도 평점 4.5(리뷰 712개).', 'Café. Rated 4.5 on Google Maps (712 reviews).'),
  place('gavle-cafe-2', 'gavle', 'cafe', 'Café Bogården', 'Kungsbäcksvägen 39, Gävle, Sweden', '카페. 구글 지도 평점 4.6(리뷰 101개).', 'Café. Rated 4.6 on Google Maps (101 reviews).'),

  // —— umea: restaurants, bakeries and cafés (2026-11-27) ——
  place('umea-fine_dining-1', 'umea', 'fine_dining', 'Hunger och Törst', 'Vasagatan 1, Umeå, Sweden', '파인 다이닝 레스토랑. 구글 지도 평점 4.6(리뷰 510개).', 'Fine-dining restaurant. Rated 4.6 on Google Maps (510 reviews).'),
  place('umea-fine_dining-2', 'umea', 'fine_dining', 'Köksbaren', 'Rådhusesplanaden 17B, Umeå, Sweden', '개스트로펍. 구글 지도 평점 4.6(리뷰 1284개).', 'Gastropub. Rated 4.6 on Google Maps (1284 reviews).'),
  place('umea-fine_dining-3', 'umea', 'fine_dining', 'GREKISKA grill & bar', 'Storgatan 43, Umeå, Sweden', '그리스 요리 레스토랑. 구글 지도 평점 4.6(리뷰 648개).', 'Greek restaurant. Rated 4.6 on Google Maps (648 reviews).'),
  place('umea-fine_dining-4', 'umea', 'fine_dining', 'Tehran Restaurang Umeå', 'Rådhusesplanaden 18E, Umeå, Sweden', '페르시아 요리 레스토랑. 구글 지도 평점 4.6(리뷰 181개).', 'Persian restaurant. Rated 4.6 on Google Maps (181 reviews).'),
  place('umea-fine_dining-5', 'umea', 'fine_dining', 'Gotthards Krog', 'Storgatan 46, Umeå, Sweden', '스웨덴 요리 레스토랑. 구글 지도 평점 4.3(리뷰 649개).', 'Swedish restaurant. Rated 4.3 on Google Maps (649 reviews).'),
  place('umea-bakery-1', 'umea', 'bakery', 'Laure\'s Fika', 'Järnvägstorget 14, Umeå, Sweden', '빵집. 구글 지도 평점 4.9(리뷰 156개).', 'Bakery. Rated 4.9 on Google Maps (156 reviews).'),
  place('umea-bakery-2', 'umea', 'bakery', 'Hagabröd i Umeå', 'Axlavägen 1, Umeå, Sweden', '빵집. 구글 지도 평점 4.7(리뷰 96개).', 'Bakery. Rated 4.7 on Google Maps (96 reviews).'),
  place('umea-bakery-3', 'umea', 'bakery', 'Ullas Kondis Västerslätt', 'Timotejvägen 4, Umeå, Sweden', '과자점. 구글 지도 평점 4.4(리뷰 266개).', 'Pastry shop. Rated 4.4 on Google Maps (266 reviews).'),
  place('umea-bakery-4', 'umea', 'bakery', 'Nya Konditoriet i Umeå', 'Kungsgatan 57, Umeå, Sweden', '과자점. 구글 지도 평점 4.3(리뷰 695개).', 'Pastry shop. Rated 4.3 on Google Maps (695 reviews).'),
  place('umea-cafe-1', 'umea', 'cafe', 'Bokcafé Pilgatan', 'Pilgatan 14, Umeå, Sweden', '카페. 구글 지도 평점 4.6(리뷰 196개).', 'Café. Rated 4.6 on Google Maps (196 reviews).'),
  place('umea-cafe-2', 'umea', 'cafe', 'Costas Of Sweden Roastery & Brewbar', 'Kungsgatan 46b, Umeå, Sweden', '직접 원두를 볶는 커피숍. 구글 지도 평점 4.5(리뷰 350개).', 'Coffee roastery café. Rated 4.5 on Google Maps (350 reviews).'),
  place('umea-cafe-3', 'umea', 'cafe', 'Gamla bibliotekscaféet', 'Rådhusesplanaden 6, Umeå, Sweden', '카페. 구글 지도 평점 4.3(리뷰 314개).', 'Café. Rated 4.3 on Google Maps (314 reviews).'),

  // —— jokkmokk: restaurants, bakeries and cafés (2026-11-27) ——
  place('jokkmokk-fine_dining-1', 'jokkmokk', 'fine_dining', 'Krog Lokal', 'Porjusvägen 7, Jokkmokk, Sweden', '스웨덴 요리 레스토랑. 구글 지도 평점 4.5(리뷰 161개).', 'Swedish restaurant. Rated 4.5 on Google Maps (161 reviews).'),
  place('jokkmokk-fine_dining-2', 'jokkmokk', 'fine_dining', 'Lilla Paradiset Pizzeria', 'Storgatan 28, Jokkmokk, Sweden', '피자 식당. 구글 지도 평점 4.4(리뷰 654개).', 'Pizza restaurant. Rated 4.4 on Google Maps (654 reviews).'),
  place('jokkmokk-fine_dining-3', 'jokkmokk', 'fine_dining', 'Restaurang Ga La Mair', 'Porjusvägen 4, Jokkmokk, Sweden', '태국 요리 레스토랑. 구글 지도 평점 4.3(리뷰 295개).', 'Thai restaurant. Rated 4.3 on Google Maps (295 reviews).'),
  place('jokkmokk-bakery-1', 'jokkmokk', 'bakery', 'City Konditoriet i Jokkmokk', 'Storgatan 28c, Jokkmokk, Sweden', '과자점. 구글 지도 평점 4.4(리뷰 330개).', 'Pastry shop. Rated 4.4 on Google Maps (330 reviews).'),
]
