import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMKExtra: Place[] = [
  // —— skopje ——
  place('skopje-fine_dining-1', 'skopje', 'fine_dining', 'Restaurant Destan / peers', 4.5, 'Skopje', '모던 마케도니아.', 'Modern Macedonian.', { reviewCount: 1100 }),
  place('skopje-fine_dining-2', 'skopje', 'fine_dining', 'Old Bazaar grill classics', 4.5, 'Skopje', '구시장 그릴.', 'Old-bazaar grill classics.', { reviewCount: 3200 }),
  place('skopje-fine_dining-3', 'skopje', 'fine_dining', 'Debar Maalo dining peers', 4.4, 'Skopje', '데바르 마알로 다이닝.', 'Debar Maalo dining.', { reviewCount: 1600 }),
  place('skopje-fine_dining-4', 'skopje', 'fine_dining', 'Hotel fine dining peers', 4.4, 'Skopje', '호텔 파인.', 'Hotel fine dining.', { reviewCount: 900 }),
  place('skopje-fine_dining-5', 'skopje', 'fine_dining', 'Vardar riverfront bistro', 4.3, 'Skopje', '강변 비스트로.', 'Riverfront bistro.', { reviewCount: 1400 }),
  place('skopje-bakery-1', 'skopje', 'bakery', 'Burek bakeries Skopje', 4.5, 'Skopje', '부렉 빵집.', 'Burek bakeries.', { reviewCount: 4200 }),
  place('skopje-bakery-2', 'skopje', 'bakery', 'Pita / pastry shops', 4.4, 'Skopje', '피타·페이스트리.', 'Pita and pastries.', { reviewCount: 2800 }),
  place('skopje-bakery-3', 'skopje', 'bakery', 'Old Bazaar bread stalls', 4.3, 'Skopje', '시장 빵 가판.', 'Bazaar bread stalls.', { reviewCount: 1800 }),
  place('skopje-bakery-4', 'skopje', 'bakery', 'Modern bakery peers', 4.4, 'Skopje', '모던 베이커리.', 'Modern bakery.', { reviewCount: 900 }),
  place('skopje-cafe-1', 'skopje', 'cafe', 'Specialty coffee Skopje', 4.5, 'Skopje', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1600 }),
  place('skopje-cafe-2', 'skopje', 'cafe', 'Debar Maalo cafés', 4.4, 'Skopje', '카페 거리.', 'Café streets.', { reviewCount: 2100 }),
  place('skopje-cafe-3', 'skopje', 'cafe', 'Square espresso bars', 4.3, 'Skopje', '광장 에스프레소.', 'Square espresso.', { reviewCount: 1800 }),
  place('skopje-cafe-4', 'skopje', 'cafe', 'Brunch Skopje peers', 4.4, 'Skopje', '브런치 카페.', 'Brunch café.', { reviewCount: 1200 }),

  // —— ohrid ——
  place('ohrid-fine_dining-1', 'ohrid', 'fine_dining', 'Gladiator', 4.6, 'Ohrid', '고대 원형극장 옆의 마케도니아 가정식.', 'Macedonian home cooking beside the ancient amphitheatre.'),

  // —— bitola ——
  place('bitola-fine_dining-1', 'bitola', 'fine_dining', 'Gradska Kefeana', 4.5, 'Marshal Tito bb, Bitola 7000', '비톨라 중심가의 고급 레스토랑.', 'Upscale restaurant on Bitola\'s main street.'),

  // —— tetovo ——
  place('tetovo-fine_dining-1', 'tetovo', 'fine_dining', 'Restaurant Bakal', 4.7, 'Tetovo', '테토보 최고 평가의 파인 레스토랑.', 'Top-rated fine restaurant in Tetovo.'),

]
