import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMKExtra: Place[] = [
  // —— skopje ——
  place('skopje-fine_dining-1', 'skopje', 'fine_dining', 'Restaurant Destan', 4.5, 'Skopje', '모던 마케도니아.', 'Modern Macedonian.', { reviewCount: 1100 }),
  place('skopje-fine_dining-2', 'skopje', 'fine_dining', 'Old Bazaar grill classics', 4.5, 'Skopje', '구시장 그릴.', 'Old-bazaar grill classics.', { reviewCount: 3200 }),
  place('skopje-fine_dining-5', 'skopje', 'fine_dining', 'Vardar riverfront bistro', 4.3, 'Skopje', '강변 비스트로.', 'Riverfront bistro.', { reviewCount: 1400 }),
  place('skopje-bakery-1', 'skopje', 'bakery', 'Burek bakeries Skopje', 4.5, 'Skopje', '부렉 빵집.', 'Burek bakeries.', { reviewCount: 4200 }),
  place('skopje-bakery-2', 'skopje', 'bakery', 'Pita / pastry shops', 4.4, 'Skopje', '피타·페이스트리.', 'Pita and pastries.', { reviewCount: 2800 }),
  place('skopje-bakery-3', 'skopje', 'bakery', 'Old Bazaar bread stalls', 4.3, 'Skopje', '시장 빵 가판.', 'Bazaar bread stalls.', { reviewCount: 1800 }),
  place('skopje-cafe-1', 'skopje', 'cafe', 'Specialty coffee Skopje', 4.5, 'Skopje', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1600 }),
  place('skopje-cafe-2', 'skopje', 'cafe', 'Debar Maalo cafés', 4.4, 'Skopje', '카페 거리.', 'Café streets.', { reviewCount: 2100 }),
  place('skopje-cafe-3', 'skopje', 'cafe', 'Square espresso bars', 4.3, 'Skopje', '광장 에스프레소.', 'Square espresso.', { reviewCount: 1800 }),

  // —— ohrid ——
  place('ohrid-fine_dining-1', 'ohrid', 'fine_dining', 'Gladiator', 4.6, 'Ohrid', '고대 원형극장 옆의 마케도니아 가정식.', 'Macedonian home cooking beside the ancient amphitheatre.'),
  place('ohrid-bakery-1', 'ohrid', 'bakery', 'Ohrid City Bakery', 4.5, 'Bulevar Turistichka 47, Ohrid, North Macedonia', '30년 넘는 역사를 자랑하는 오흐리드에서 가장 오래된 제과점, 부렉으로 유명', 'Ohrid\'s oldest bakery institution with over three decades of history, famous for burek'),
  place('ohrid-cafe-1', 'ohrid', 'cafe', 'Joy Cafe and Bakery', 4.5, '7-mi Noemvri br. 45A, 6000 Ohrid, North Macedonia', '파리지앵 스타일 페이스트리로 유명한 오흐리드의 카페', 'Ohrid café known for Parisian-style pastries'),

  // —— bitola ——
  place('bitola-fine_dining-1', 'bitola', 'fine_dining', 'Gradska Kefeana', 4.5, 'Marshal Tito bb, Bitola 7000', '비톨라 중심가의 고급 레스토랑.', 'Upscale restaurant on Bitola\'s main street.'),
  place('bitola-bakery-1', 'bitola', 'bakery', 'Bakery Boulevard', 4.4, 'Sts. Cyril and Methodius, Bitola, North Macedonia', '24시간 운영하는 비톨라의 인기 베이커리', 'Popular 24-hour bakery in Bitola'),
  place('bitola-cafe-1', 'bitola', 'cafe', 'Cafe Pajton', 4.4, 'Shirok Sokak, Bitola, North Macedonia', '시로크 소칵 거리의 에스프레소와 사람 구경으로 유명한 비톨라의 카페', 'Bustling Bitola café on Shirok Sokak, perfect for espresso and people-watching'),

  // —— tetovo ——
  place('tetovo-fine_dining-1', 'tetovo', 'fine_dining', 'Restaurant Bakal', 4.7, 'Tetovo', '테토보 최고 평가의 파인 레스토랑.', 'Top-rated fine restaurant in Tetovo.'),

  place('tetovo-bakery-1', 'tetovo', 'bakery', 'Bakal Bakery', 4.5, 'Иво Лола Рибар 137, 1200 Tetovo, North Macedonia', '테토보의 평이 좋은 베이커리', 'Well-reviewed bakery in Tetovo'),
  place('tetovo-cafe-1', 'tetovo', 'cafe', 'Ambrosia Bakery & Coffee Shop', 4.4, 'Tetovo, North Macedonia', '베이커리와 카페를 함께 즐길 수 있는 테토보의 명소', 'Tetovo spot combining bakery and café services'),
]
