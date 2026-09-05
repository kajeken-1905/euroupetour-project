import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSEExtra: Place[] = [
  // —— gothenburg ——
  place('gothenburg-fine_dining-1', 'gothenburg', 'fine_dining', 'Project', 4.6, 'Södra Vägen 45, 412 54 Göteborg', '미슐랭 1스타 다이닝.', 'Michelin 1-star dining.', { reviewCount: 351 }),
  place('gothenburg-fine_dining-2', 'gothenburg', 'fine_dining', 'Koka', 4.7, 'Viktoriagatan 12, 411 25 Göteborg', '뉴 노르딕 미슐랭 1스타.', 'New Nordic, Michelin 1-star.', { reviewCount: 933 }),
  place('gothenburg-fine_dining-3', 'gothenburg', 'fine_dining', 'Sjömagasinet', 4.4, 'Adolf Edelsvärds Gata 5, 414 51 Göteborg', '시푸드.', 'Seafood.', { reviewCount: 1925 }),
  place('gothenburg-fine_dining-4', 'gothenburg', 'fine_dining', 'Bhoga', 4.4, 'Norra Hamngatan 10, 411 14 Göteborg', '모던 다이닝 미슐랭.', 'Modern Michelin dining.', { reviewCount: 1298 }),
  place('gothenburg-fine_dining-5', 'gothenburg', 'fine_dining', 'KaiFo', 4.3, 'Södra Vägen 24, 412 54 Göteborg', '아시안 퓨전, 로컬 인기.', 'Asian fusion, local favorite.', { reviewCount: 401 }),
  place('gothenburg-bakery-1', 'gothenburg', 'bakery', 'Da Matteo', 4.4, 'Magasinsgatan 17A, 411 18 Göteborg', '로스터리 사워도우 베이커리.', 'Roastery sourdough bakery.', { reviewCount: 751 }),
  place('gothenburg-bakery-2', 'gothenburg', 'bakery', 'Mr Cake', 4.2, 'Lilla Badhusgatan 2B, 411 21 Göteborg', '케이크·페이스트리 전문점.', 'Cake and pastry specialist.', { reviewCount: 2726 }),
  place('gothenburg-cafe-1', 'gothenburg', 'cafe', 'Da Matteo', 4.4, 'Magasinsgatan 17A, 411 18 Göteborg', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 751 }),
  place('gothenburg-cafe-2', 'gothenburg', 'cafe', 'Café Husaren', 4.4, 'Haga Nygata 28, 411 22 Göteborg', '거대 시나몬롤(하가불렌).', 'Giant cinnamon bun (Hagabullen).', { reviewCount: 4930 }),
  place('gothenburg-cafe-3', 'gothenburg', 'cafe', 'Bar Italia', 4.0, 'Prinsgatan 7, 413 05 Göteborg', '이탈리안 에스프레소 바.', 'Italian espresso bar.'),
  place('gothenburg-cafe-4', 'gothenburg', 'cafe', 'Kaffelabbet', 4.8, 'Landsvägsgatan 15, 413 04 Göteborg', '스페셜티 커피 로스터리.', 'Specialty coffee roastery.', { reviewCount: 249 }),
  place('gothenburg-korean-1', 'gothenburg', 'korean', 'KOMO Korean Steakhouse & Bar', 4.9, 'Sankt Eriksgatan 5, 411 05 Göteborg', '한국식 스테이크하우스·BBQ.', 'Korean steakhouse and BBQ.', { reviewCount: 1053 }),

  // —— malmo ——
  place('malmo-fine_dining-1', 'malmo', 'fine_dining', 'Vollmers', 4.8, 'Tegelgårdsgatan 5, 211 33 Malmö', '미슐랭 2스타 다이닝.', 'Michelin 2-star dining.', { reviewCount: 412 }),
  place('malmo-fine_dining-2', 'malmo', 'fine_dining', 'Atmosfär', 4.9, 'Fersens Väg 4, Malmö', '모던 스칸디나비안.', 'Modern Scandinavian.', { reviewCount: 2723 }),
  place('malmo-fine_dining-3', 'malmo', 'fine_dining', 'Bastard', 4.7, 'Mäster Johansgatan 11, 211 21 Malmö', '와인바 다이닝, 빕 구르망.', 'Wine-bar dining, Bib Gourmand.', { reviewCount: 322 }),
  place('malmo-fine_dining-4', 'malmo', 'fine_dining', 'Lyran', 4.7, 'Simrishamnsgatan 36A, Malmö', '지하 셀러 다이닝.', 'Cellar dining.', { reviewCount: 819 }),
  place('malmo-cafe-1', 'malmo', 'cafe', 'Solde Coffee', 4.5, 'Hantverkaregatan 12, 211 55 Malmö', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1200 }),
  place('malmo-cafe-2', 'malmo', 'cafe', 'Far i Hatten', 4.3, 'Amiralsgatan 35, Folkets Park, 214 37 Malmö', '공원 안 레스토랑·카페.', 'Restaurant-café in Folkets Park.', { reviewCount: 1400 }),
  place('malmo-cafe-3', 'malmo', 'cafe', 'Lilla Kafferosteriet', 4.1, 'Baltzarsgatan 24A, Malmö', '커피 로스터리.', 'Coffee roastery.', { reviewCount: 10 }),
  place('malmo-korean-1', 'malmo', 'korean', 'Namu', 4.9, 'Landbygatan 5, Malmö', '한식 다이닝.', 'Korean dining.', { reviewCount: 2331 }),

  // —— uppsala ——
  place('uppsala-fine_dining-1', 'uppsala', 'fine_dining', 'Domtrappkällaren', 4.8, 'S:t Eriks Gränd 15, 753 10 Uppsala', '역사적 지하 다이닝.', 'Historic cellar dining.', { reviewCount: 3936 }),
  place('uppsala-fine_dining-2', 'uppsala', 'fine_dining', 'Hambergs Fisk', 4.6, 'Fyristorg 8, Uppsala', '시푸드, 우플란드 1위.', 'Seafood, #1 in Uppsala.', { reviewCount: 1140 }),
  place('uppsala-bakery-1', 'uppsala', 'bakery', 'Ofvandahls', 4.2, 'Sysslomansgatan 5, 753 11 Uppsala', '1878년 개업 전통 콘디토리.', 'Classic konditori since 1878.', { reviewCount: 940 }),
  place('uppsala-bakery-2', 'uppsala', 'bakery', 'Güntherska Hovkonditori', 5.0, 'Östra Ågatan 31, Uppsala', '전통 스위스풍 콘디토리.', 'Traditional Swiss-style konditori.'),
  place('uppsala-cafe-1', 'uppsala', 'cafe', 'Ofvandahls', 4.2, 'Sysslomansgatan 5, 753 11 Uppsala', '전통 카페.', 'Traditional café.', { reviewCount: 940 }),

  // —— kiruna ——
  place('kiruna-fine_dining-1', 'kiruna', 'fine_dining', 'Icehotel Restaurant (The Veranda)', 5.0, 'Marknadsvägen 63, 981 91 Jukkasjärvi', '아이스호텔 다이닝.', 'Icehotel dining.'),
  place('kiruna-cafe-1', 'kiruna', 'cafe', 'Icehotel Café', 5.0, 'Marknadsvägen 63, 981 91 Jukkasjärvi', '아이스호텔 카페.', 'Icehotel café.'),

]
