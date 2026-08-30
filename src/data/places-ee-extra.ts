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
  place('tartu-bakery-1', 'tartu', 'bakery', 'Cruffin Pagarikoda', 4.6, 'J. Kuperjanovi tn 18a, 60517 Tartu, Estonia', '타르투 중심가의 아늑한 베이커리', 'Delightful bakery in the heart of Tartu'),
  place('tartu-cafe-1', 'tartu', 'cafe', 'Reval Café', 4.4, 'Tartu, Estonia', '크바르탈 쇼핑센터 맞은편의 믿을 수 있는 타르투 카페', 'Reliable Tartu café across from the Kvartal shopping center'),

  // —— parnu ——
  place('parnu-fine_dining-1', 'parnu', 'fine_dining', 'Noot Restaurant', 4.6, 'Anton Hansen Tammsaare puiestee 4a, 80010 Pärnu', '패르누의 대표 레스토랑.', 'Leading restaurant in Pärnu.'),

  place('parnu-bakery-1', 'parnu', 'bakery', 'Pärnamäed bakery and café', 4.6, 'Pärnu, Estonia', '레이우 강변에 위치한 패르누의 인기 베이커리 카페', 'Popular Pärnu bakery café on the banks of the River Reiu'),
  place('parnu-cafe-1', 'parnu', 'cafe', 'Pagaripoisid', 4.5, 'Rüütli tänav 45, 80011 Pärnu, Estonia', '포리지와 커피, 페이스트리로 아침 식사하기 좋은 패르누의 카페', 'Pärnu café perfect for breakfast with porridge, coffee, and pastries'),
]
