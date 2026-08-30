import { place } from './placeFactory'
import type { Place } from '../types'

export const placesCYExtra: Place[] = [
  // —— nicosia ——
  place('nicosia-fine_dining-2', 'nicosia', 'fine_dining', 'Meze house classics', 4.5, 'Nicosia', '전통 메제.', 'Classic meze house.', { reviewCount: 2800 }),
  place('nicosia-bakery-1', 'nicosia', 'bakery', 'Halloumi pie bakeries', 4.5, 'Nicosia', '할루미 파이 빵집.', 'Halloumi pie bakeries.', { reviewCount: 2100 }),
  place('nicosia-bakery-2', 'nicosia', 'bakery', 'Baklava pastry shops', 4.5, 'Nicosia', '바클라바·과자.', 'Baklava and sweets.', { reviewCount: 1800 }),
  place('nicosia-bakery-3', 'nicosia', 'bakery', 'Village bread counters', 4.3, 'Nicosia', '빌리지 브레드.', 'Village bread.', { reviewCount: 1200 }),
  place('nicosia-cafe-1', 'nicosia', 'cafe', 'Specialty coffee Nicosia', 4.5, 'Nicosia', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('nicosia-cafe-2', 'nicosia', 'cafe', 'Ledra Street cafés', 4.3, 'Nicosia', '레드라 카페.', 'Ledra Street cafés.', { reviewCount: 2100 }),
  place('nicosia-cafe-3', 'nicosia', 'cafe', 'Courtyard coffee houses', 4.4, 'Nicosia', '중정 커피하우스.', 'Courtyard coffee houses.', { reviewCount: 1600 }),

  // —— limassol ——
  place('limassol-fine_dining-1', 'limassol', 'fine_dining', 'Ousia Soulful Kitchen', 4.5, '24 Irenes Street, Medieval Castle Square, Limassol 3042', '구시가 캐슬 광장의 레스토랑.', 'Restaurant by the Old Town\'s Castle Square.'),

  // —— paphos ——
  place('paphos-fine_dining-1', 'paphos', 'fine_dining', '7 St. George\'s Tavern', 4.6, 'Anthipolochagou Georgiou Savva 37, Yeroskipou, Paphos 8201', '유기농 재료의 정통 키프로스 메제.', 'Authentic Cypriot meze from organic, local ingredients.'),

  // —— ayia-napa ——
  place('ayia-napa-fine_dining-1', 'ayia-napa', 'fine_dining', 'Old Village Tavern', 4.5, '48 Nissi Avenue, Ayia Napa 5330', '전통 키프로스 타베르나.', 'Traditional Cypriot taverna.'),

]
