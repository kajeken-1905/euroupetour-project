import { place } from './placeFactory'
import type { Place } from '../types'

export const placesHRExtra: Place[] = [
  // —— zagreb ——
  place('zagreb-fine_dining-1', 'zagreb', 'fine_dining', 'Noel', 4.5, 'Ul. popa Dukljanina 1, 10000 Zagreb', '자그레브 최초의 미슐랭 1스타 레스토랑, 계절별 테이스팅 메뉴.', "Zagreb's first Michelin-star restaurant, with a seasonal tasting menu.", { reviewCount: 1641 }),
  place('zagreb-fine_dining-2', 'zagreb', 'fine_dining', 'Dubravkin Put', 4.5, 'Dubravkin Put 2, 10000 Zagreb', '투슈카나츠 숲속의 미슐랭 1스타 레스토랑, 생선 요리로 유명.', 'One-Michelin-star restaurant in Tuškanac Forest, known for its fish dishes.'),
  place('zagreb-fine_dining-3', 'zagreb', 'fine_dining', 'Mundoaka Street Food', 4.5, 'Petrinjska Ulica 2, 10000 Zagreb', '반 옐라치치 광장 인근의 창의적인 스트리트 푸드 레스토랑.', 'Creative street food restaurant near Ban Jelačić Square.', { reviewCount: 1886 }),
  place('zagreb-fine_dining-4', 'zagreb', 'fine_dining', 'Vinodol', 4.2, 'Ulica Nikole Tesle 10, 10000 Zagreb', '자그레브 중심가의 전통 크로아티아 요리 레스토랑, 슈트루클리로 유명.', 'Traditional Croatian restaurant in central Zagreb, known for its štrukli.', { reviewCount: 11017 }),
  place('zagreb-fine_dining-5', 'zagreb', 'fine_dining', 'Zinfandel\'s', 4.6, 'Antuna Mihanovića 1, 10000 Zagreb', '에스플러네이드 호텔 내 미슐랭 그린스타 레스토랑.', 'Michelin Green Star restaurant inside the historic Esplanade Hotel.', { reviewCount: 1542 }),
  place('zagreb-bakery-1', 'zagreb', 'bakery', 'Pekara Dubravica', 4.5, 'Dolac 2, 10000 Zagreb', '자그레브 최고의 베이커리로 꼽히는 곳, 부렉이 유명.', "Widely regarded as Zagreb's best bakery, known for its burek.", { reviewCount: 416 }),
  place('zagreb-bakery-2', 'zagreb', 'bakery', 'Vincek', 4.5, 'Ilica 18, 10000 Zagreb', '1977년부터 이어온 케이크·아이스크림 전문점.', 'Cake and ice cream specialist since 1977.', { reviewCount: 3066 }),
  place('zagreb-bakery-3', 'zagreb', 'bakery', 'Torte i to', 4.5, 'Grahorova Ul. 5, 10000 Zagreb', '치즈케이크와 베이글로 유명한 인기 페이스트리숍.', 'Popular pastry shop known for its cheesecake and bagels.'),
  place('zagreb-cafe-1', 'zagreb', 'cafe', 'Cogito Coffee', 4.7, 'Varšavska Ulica 11, 10000 Zagreb', '크로아티아에 서드웨이브 커피를 처음 소개한 로스터리.', "One of the first to bring third-wave coffee to Croatia.", { reviewCount: 99 }),
  place('zagreb-cafe-2', 'zagreb', 'cafe', 'Eli\'s Caffé', 4.6, 'Ilica 63, 10000 Zagreb', '도시 최고의 에스프레소로 꼽히는 인기 카페.', "Popular café known for some of the city's best espresso.", { reviewCount: 1330 }),
  place('zagreb-cafe-3', 'zagreb', 'cafe', 'Kino Europa Café', 4.5, 'Varšavska ulica 3, 10000 Zagreb', '1925년 지어진 영화관 내 카페, 예술영화 상영과 함께.', 'Café inside a 1925 cinema, alongside independent and festival film screenings.'),
  place('zagreb-cafe-4', 'zagreb', 'cafe', 'Botaničar', 4.6, 'Trg Marka Marulića 6, 10000 Zagreb', '식물원 인근의 보태니컬 콘셉트 카페.', 'Botanical-themed café near the Botanical Garden.', { reviewCount: 2224 }),

  // —— dubrovnik ——
  place('dubrovnik-fine_dining-1', 'dubrovnik', 'fine_dining', 'Nautika Restaurant', 4.6, 'Brsalje 3, 20000 Dubrovnik', '구시가 성벽 옆의 대표 레스토랑.', 'Landmark restaurant by the Old Town walls.'),
  place('dubrovnik-bakery-1', 'dubrovnik', 'bakery', 'Klas Bakery', 4.5, 'Ul. Iva Dulčića 12, 20000 Dubrovnik, Croatia', '부렉과 애플 슈트루델로 유명한 두브로브니크의 인기 베이커리', 'Popular Dubrovnik bakery known for burek and apple strudel'),
  place('dubrovnik-cafe-1', 'dubrovnik', 'cafe', 'Caffe Bar Mabelle', 4.4, 'Ul. kralja Tomislava 7, 20000 Dubrovnik, Croatia', '두브로브니크의 인기 카페 바', 'Popular café bar in Dubrovnik'),

  // —— split ——
  place('split-fine_dining-1', 'split', 'fine_dining', 'Villa Spiza', 4.6, 'Kružićeva 3, 21000 Split', '스플리트 최고 평가 레스토랑.', 'Top-rated restaurant in Split.'),
  place('split-bakery-1', 'split', 'bakery', 'Kruscic Bakery', 4.6, 'Split, 21000, Croatia', '생선 시장 근처 스플리트 구시가지의 아르티장 베이커리', 'Artisan bakery near the Fish Market in Split\'s Old Town'),
  place('split-cafe-1', 'split', 'cafe', 'Bobis-Riva', 4.4, 'Domovinskog rata 20, 21000 Split, Croatia', '스플리트 리바 산책로에 위치한 인기 카페', 'Popular café on Split\'s Riva promenade'),

  // —— zadar ——
  place('zadar-fine_dining-1', 'zadar', 'fine_dining', 'Pet Bunara', 4.6, 'Stratico ul. 1, 23000 Zadar', '해산물·육류 요리 레스토랑.', 'Restaurant serving seafood and meat dishes.'),
  place('zadar-bakery-1', 'zadar', 'bakery', 'Pekara Dalmatinka', 4.5, 'Ul. Špire Brusine 16, 23000 Zadar, Croatia', '구시가지에서 갓 구운 부렉과 치즈 피타로 인기 있는 자다르의 베이커리', 'Popular Old Town Zadar bakery known for fresh burek and cheese pita'),
  place('zadar-cafe-1', 'zadar', 'cafe', 'Coffee & Cake', 4.5, 'Braće Vranjanina 14, 23000 Zadar, Croatia', '홈메이드 케이크와 비건·글루텐프리 옵션을 갖춘 자다르의 카페', 'Zadar café with homemade cakes and vegan/gluten-free options'),

  // —— rovinj ——
  place('rovinj-fine_dining-1', 'rovinj', 'fine_dining', 'Monte', 4.7, 'Šetalište Vijeća Europe 1-2, 52210 Rovinj', '크로아티아를 대표하는 유명 레스토랑.', 'One of Croatia\'s most celebrated restaurants.'),
  place('rovinj-bakery-1', 'rovinj', 'bakery', 'Mlinar', 4.4, 'Rovinj, 52210, Croatia', '로빈지 최고로 꼽히는 빵·부렉 전문 베이커리 체인', 'Widely regarded as Rovinj\'s best bakery for bread and burek'),
  place('rovinj-cafe-1', 'rovinj', 'cafe', 'Augusto Coffee', 4.6, 'Rovinj, 52210, Croatia', '메인 스트리트 인근의 신선한 로빈지 카페', 'Fresh new café near Rovinj\'s main street'),

  // —— hvar ——
  place('hvar-fine_dining-1', 'hvar', 'fine_dining', 'Mediterraneo Dine & Wine', 4.6, 'Braće Bibić 15, 21450 Hvar', '미쉐린 가이드 등재 레스토랑.', 'Michelin Guide-listed restaurant.'),

  place('hvar-bakery-1', 'hvar', 'bakery', 'Nonica Caffe Bar', 4.4, 'Kroz Burak 23, 21450 Hvar, Croatia', '흐바르 명물 흐바르스키 콜라치로 유명한 구시가지의 베이커리 카페', 'Hvar Old Town bakery café famous for the local Hvarski kolač cake'),
  place('hvar-cafe-1', 'hvar', 'cafe', 'Kava', 4.5, 'Ul. Sveti Marak 2, 21450 Hvar, Croatia', '자체 로스팅 에스프레소로 유명한 흐바르 구시가의 스페셜티 커피숍', 'Specialty coffee shop in Hvar\'s Old Town known for freshly roasted espresso'),
]
