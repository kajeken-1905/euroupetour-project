import { place } from './placeFactory'
import type { Place } from '../types'

export const placesEEExtra: Place[] = [
  // —— tallinn ——
  place('tallinn-fine_dining-1', 'tallinn', 'fine_dining', 'NOA', 4.6, 'Ranna tee 3, Tallinn', '모던 에스토니아 파인.', 'Modern Estonian fine dining.', { reviewCount: 2306 }),
  place('tallinn-fine_dining-2', 'tallinn', 'fine_dining', 'Restaurant Rataskaevu 16', 4.8, 'Rataskaevu tn 16, Tallinn', '탈린 구시가의 인기 레스토랑.', 'Popular restaurant in Tallinn\'s Old Town.', { reviewCount: 6593 }),
  place('tallinn-fine_dining-3', 'tallinn', 'fine_dining', 'KOGU Resto', 4.8, 'Võrgu tn 6, Tallinn', '탈린의 레스토랑.', 'Restaurant in Tallinn.', { reviewCount: 468 }),
  place('tallinn-fine_dining-4', 'tallinn', 'fine_dining', 'Restaurant Tchaikovsky', 4.7, 'Vene tn 9, Tallinn', '구시가의 러시안 파인 다이닝.', 'Russian fine dining in the Old Town.', { reviewCount: 506 }),
  place('tallinn-fine_dining-5', 'tallinn', 'fine_dining', 'Farm', 4.6, 'Müürivahe 27b, Tallinn', '유럽 요리 레스토랑.', 'European cuisine restaurant.', { reviewCount: 1582 }),
  place('tallinn-bakery-1', 'tallinn', 'bakery', 'RØST Bakery', 4.8, 'Rotermanni tn 14, Tallinn', '모던 베이커리.', 'Modern bakery.', { reviewCount: 3044 }),
  place('tallinn-bakery-2', 'tallinn', 'bakery', 'PullaBakery', 4.9, 'Voorimehe 7, Tallinn', '페이스트리·번 전문점.', 'Pastry and bun specialist.', { reviewCount: 1661 }),
  place('tallinn-bakery-3', 'tallinn', 'bakery', 'Kalamaja Bakery', 4.7, 'Jahu tänav 11, Tallinn', '칼라마야 지구 베이커리.', 'Bakery in the Kalamaja district.', { reviewCount: 1015 }),
  place('tallinn-bakery-4', 'tallinn', 'bakery', 'Bekker Pagariäri', 4.8, 'Kopli tn 27, Tallinn', '호밀빵 전문점.', 'Rye bread specialist.', { reviewCount: 714 }),
  place('tallinn-cafe-1', 'tallinn', 'cafe', 'The Brick Coffee Roastery', 4.8, 'Telliskivi tn 60, Tallinn', '스페셜티 커피 로스터리.', 'Specialty coffee roastery.', { reviewCount: 388 }),
  place('tallinn-cafe-2', 'tallinn', 'cafe', 'Fika Cafe', 4.6, 'Telliskivi tn 60a, Tallinn', '텔리스키비 카페.', 'Telliskivi district café.', { reviewCount: 486 }),
  place('tallinn-cafe-3', 'tallinn', 'cafe', 'Cafe Maiasmokk', 4.5, 'Pikk tn 16, Tallinn', '1864년 개업한 구시가 역사 카페.', 'Historic Old Town café, opened 1864.', { reviewCount: 3894 }),

  // —— tartu ——
  place('tartu-fine_dining-1', 'tartu', 'fine_dining', 'Restaurant Fii', 4.6, 'Rüütli 7, 51007 Tartu', '소피아 호텔의 미식 레스토랑.', 'Fine dining at the Sophia Hotel.'),
  place('tartu-fine_dining-2', 'tartu', 'fine_dining', 'Restoran Hõlm', 4.8, 'Ülikooli tn 14, Tartu', '타르투의 인기 레스토랑.', 'Popular restaurant in Tartu.', { reviewCount: 395 }),
  place('tartu-fine_dining-3', 'tartu', 'fine_dining', 'Chez Andre', 4.6, 'Küütri tn 3, Tartu', '타르투의 레스토랑.', 'Restaurant in Tartu.', { reviewCount: 775 }),
  place('tartu-bakery-1', 'tartu', 'bakery', 'Cruffin Pagarikoda', 4.6, 'J. Kuperjanovi tn 18a, 60517 Tartu, Estonia', '타르투 중심가의 아늑한 베이커리', 'Delightful bakery in the heart of Tartu'),
  place('tartu-bakery-2', 'tartu', 'bakery', 'Patisserie "Almond"', 4.8, 'Veski tn 5a, Tartu', '타르투의 제과점.', 'Patisserie in Tartu.', { reviewCount: 380 }),
  place('tartu-cafe-1', 'tartu', 'cafe', 'Reval Café', 4.4, 'Tartu, Estonia', '크바르탈 쇼핑센터 맞은편의 믿을 수 있는 타르투 카페', 'Reliable Tartu café across from the Kvartal shopping center'),
  place('tartu-cafe-2', 'tartu', 'cafe', 'Cafe-restaurant Werner', 4.6, 'Ülikooli tn 11, Tartu', '타르투의 역사적인 카페.', 'Historic café in Tartu.', { reviewCount: 2486 }),
  place('tartu-cafe-3', 'tartu', 'cafe', 'Karlova Kohv', 4.7, 'Tähe tn 63, Tartu', '스페셜티 커피 전문점.', 'Specialty coffee shop.', { reviewCount: 506 }),

  // —— parnu ——
  place('parnu-fine_dining-1', 'parnu', 'fine_dining', 'Noot Restaurant', 4.6, 'Anton Hansen Tammsaare puiestee 4a, 80010 Pärnu', '패르누의 대표 레스토랑.', 'Leading restaurant in Pärnu.'),
  place('parnu-fine_dining-2', 'parnu', 'fine_dining', 'Supelsaksad Pärnu', 4.7, 'Nikolai tn 32, Pärnu', '패르누의 인기 레스토랑.', 'Popular restaurant in Pärnu.', { reviewCount: 2396 }),
  place('parnu-fine_dining-3', 'parnu', 'fine_dining', 'Mon Ami', 4.6, 'Kuninga tn 11, Pärnu', '패르누의 레스토랑.', 'Restaurant in Pärnu.', { reviewCount: 633 }),

  place('parnu-bakery-1', 'parnu', 'bakery', 'Pärnamäed bakery and café', 4.6, 'Pärnu, Estonia', '레이우 강변에 위치한 패르누의 인기 베이커리 카페', 'Popular Pärnu bakery café on the banks of the River Reiu'),
  place('parnu-bakery-2', 'parnu', 'bakery', 'Leivakas - Pagaritöökoda / Kiviahjupitsa', 4.7, 'Lai tn 10-3, Pärnu', '패르누의 제과점.', 'Bakery in Pärnu.', { reviewCount: 436 }),
  place('parnu-cafe-1', 'parnu', 'cafe', 'Pagaripoisid', 4.5, 'Rüütli tänav 45, 80011 Pärnu, Estonia', '포리지와 커피, 페이스트리로 아침 식사하기 좋은 패르누의 카페', 'Pärnu café perfect for breakfast with porridge, coffee, and pastries'),
  place('parnu-cafe-2', 'parnu', 'cafe', 'Kohvila', 4.8, 'Lai tn 10, Pärnu', '패르누의 카페.', 'Café in Pärnu.', { reviewCount: 161 }),
]
