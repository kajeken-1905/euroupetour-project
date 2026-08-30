import { place } from './placeFactory'
import type { Place } from '../types'

export const placesEEExtra: Place[] = [
  // —— tallinn ——
  place('tallinn-fine_dining-1', 'tallinn', 'fine_dining', 'NOA', 4.6, 'Tallinn', '모던 에스토니아 파인.', 'Modern Estonian fine dining.', { reviewCount: 1200 }),
  place('tallinn-bakery-1', 'tallinn', 'bakery', 'Karakter', 4.5, 'Tallinn', '모던 베이커리.', 'Modern bakery.', { reviewCount: 1600 }),
  place('tallinn-bakery-2', 'tallinn', 'bakery', 'Kringel & pastry shops', 4.4, 'Tallinn', '크링겔·페이스트리.', 'Kringel and pastries.', { reviewCount: 2100 }),
  place('tallinn-bakery-3', 'tallinn', 'bakery', 'Old Town bakery counters', 4.3, 'Tallinn', '구시가 빵 카운터.', 'Old-town bakery counters.', { reviewCount: 1800 }),
  place('tallinn-bakery-4', 'tallinn', 'bakery', 'Rye bread houses', 4.4, 'Tallinn', '호밀빵집.', 'Rye bread houses.', { reviewCount: 1400 }),
  place('tallinn-cafe-1', 'tallinn', 'cafe', 'Specialty coffee Tallinn', 4.5, 'Tallinn', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),
  place('tallinn-cafe-2', 'tallinn', 'cafe', 'Telliskivi cafés', 4.5, 'Tallinn', '텔리스키비 카페.', 'Telliskivi cafés.', { reviewCount: 2400 }),
  place('tallinn-cafe-3', 'tallinn', 'cafe', 'Old Town café terraces', 4.3, 'Tallinn', '구시가 테라스.', 'Old-town terraces.', { reviewCount: 3200 }),

  // —— tartu ——
  place('tartu-fine_dining-1', 'tartu', 'fine_dining', 'Restaurant Fii', 4.6, 'Rüütli 7, 51007 Tartu', '소피아 호텔의 미식 레스토랑.', 'Fine dining at the Sophia Hotel.'),

  // —— parnu ——
  place('parnu-fine_dining-1', 'parnu', 'fine_dining', 'Noot Restaurant', 4.6, 'Anton Hansen Tammsaare puiestee 4a, 80010 Pärnu', '패르누의 대표 레스토랑.', 'Leading restaurant in Pärnu.'),

]
