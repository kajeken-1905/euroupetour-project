import { place } from './placeFactory'
import type { Place } from '../types'

export const placesEEExtra: Place[] = [
  // —— tallinn ——
  place('tallinn-fine_dining-1', 'tallinn', 'fine_dining', 'NOA', 'Ranna tee 3, Tallinn', '모던 에스토니아 파인.', 'Modern Estonian fine dining.', { image: '/places/tallinn-fine_dining-1.jpg' }),
  place('tallinn-fine_dining-2', 'tallinn', 'fine_dining', 'Restaurant Rataskaevu 16', 'Rataskaevu tn 16, Tallinn', '탈린 구시가의 레스토랑.', 'Restaurant in Tallinn’s Old Town.'),
  place('tallinn-fine_dining-3', 'tallinn', 'fine_dining', 'KOGU Resto', 'Võrgu tn 6, Tallinn', '탈린의 레스토랑.', 'Restaurant in Tallinn.'),
  place('tallinn-fine_dining-4', 'tallinn', 'fine_dining', 'Restaurant Tchaikovsky', 'Vene tn 9, Tallinn', '구시가의 러시안 파인 다이닝.', 'Russian fine dining in the Old Town.'),
  place('tallinn-fine_dining-5', 'tallinn', 'fine_dining', 'Farm', 'Müürivahe 27b, Tallinn', '유럽 요리 레스토랑.', 'European cuisine restaurant.', { image: '/places/tallinn-fine_dining-5.jpg' }),
  place('tallinn-bakery-1', 'tallinn', 'bakery', 'RØST Bakery', 'Rotermanni tn 14, Tallinn', '모던 베이커리.', 'Modern bakery.'),
  place('tallinn-bakery-2', 'tallinn', 'bakery', 'PullaBakery', 'Voorimehe 7, Tallinn', '페이스트리·번 전문점.', 'Pastry and bun specialist.'),
  place('tallinn-bakery-3', 'tallinn', 'bakery', 'Kalamaja Bakery', 'Jahu tänav 11, Tallinn', '칼라마야 지구 베이커리.', 'Bakery in the Kalamaja district.'),
  place('tallinn-bakery-4', 'tallinn', 'bakery', 'Bekker Pagariäri', 'Kopli tn 27, Tallinn', '호밀빵 전문점.', 'Rye bread specialist.'),
  place('tallinn-cafe-1', 'tallinn', 'cafe', 'The Brick Coffee Roastery', 'Telliskivi tn 60, Tallinn', '스페셜티 커피 로스터리.', 'Specialty coffee roastery.', { image: '/places/tallinn-cafe-1.jpg' }),
  place('tallinn-cafe-2', 'tallinn', 'cafe', 'Fika Cafe', 'Telliskivi tn 60a, Tallinn', '텔리스키비 카페.', 'Telliskivi district café.'),
  place('tallinn-cafe-3', 'tallinn', 'cafe', 'Cafe Maiasmokk', 'Pikk tn 16, Tallinn', '1864년 개업한 구시가 역사 카페.', 'Historic Old Town café, opened 1864.', { image: '/places/tallinn-cafe-3.jpg' }),

  // —— tartu ——
  place('tartu-fine_dining-1', 'tartu', 'fine_dining', 'Restaurant Fii', 'Rüütli 7, 51007 Tartu', '소피아 호텔의 미식 레스토랑.', 'Fine dining at the Sophia Hotel.'),
  place('tartu-fine_dining-2', 'tartu', 'fine_dining', 'Restoran Hõlm', 'Ülikooli tn 14, Tartu', '타르투의 레스토랑.', 'Restaurant in Tartu.'),
  place('tartu-fine_dining-3', 'tartu', 'fine_dining', 'Chez Andre', 'Küütri tn 3, Tartu', '타르투의 레스토랑.', 'Restaurant in Tartu.'),
  place('tartu-bakery-1', 'tartu', 'bakery', 'Cruffin Pagarikoda', 'J. Kuperjanovi tn 18a, 60517 Tartu, Estonia', '타르투 중심가의 아늑한 베이커리', 'Delightful bakery in the heart of Tartu'),
  place('tartu-bakery-2', 'tartu', 'bakery', 'Patisserie "Almond"', 'Veski tn 5a, Tartu', '타르투의 제과점.', 'Patisserie in Tartu.'),
  place('tartu-cafe-1', 'tartu', 'cafe', 'Reval Café', 'Riia 4, 51004 Tartu, Estonia', '크바르탈 쇼핑센터 맞은편의 믿을 수 있는 타르투 카페', 'Reliable Tartu café across from the Kvartal shopping center'),
  place('tartu-cafe-2', 'tartu', 'cafe', 'Cafe-restaurant Werner', 'Ülikooli tn 11, Tartu', '타르투의 역사적인 카페.', 'Historic café in Tartu.'),
  place('tartu-cafe-3', 'tartu', 'cafe', 'Karlova Kohv', 'Tähe tn 63, Tartu', '스페셜티 커피 전문점.', 'Specialty coffee shop.'),

  // —— parnu ——
  place('parnu-fine_dining-1', 'parnu', 'fine_dining', 'Noot Restaurant', 'Anton Hansen Tammsaare puiestee 4a, 80010 Pärnu', '패르누의 레스토랑.', 'Restaurant in Pärnu.'),
  place('parnu-fine_dining-2', 'parnu', 'fine_dining', 'Supelsaksad Pärnu', 'Nikolai tn 32, Pärnu', '패르누의 레스토랑.', 'Restaurant in Pärnu.'),
  place('parnu-fine_dining-3', 'parnu', 'fine_dining', 'Mon Ami', 'Kuninga tn 11, Pärnu', '패르누의 레스토랑.', 'Restaurant in Pärnu.'),

  place('parnu-bakery-1', 'parnu', 'bakery', 'Pärnamäed bakery and café', 'Reiu küla, Häädemeeste vald, 86101 Pärnu maakond, Estonia', '레이우 강변의 빵집 겸 카페.', 'Bakery café on the banks of the River Reiu.'),
  place('parnu-bakery-2', 'parnu', 'bakery', 'Leivakas - Pagaritöökoda / Kiviahjupitsa', 'Lai tn 10-3, Pärnu', '패르누의 제과점.', 'Bakery in Pärnu.'),
  place('parnu-cafe-1', 'parnu', 'cafe', 'Pagaripoisid', 'Rüütli tänav 45, 80011 Pärnu, Estonia', '포리지와 커피, 페이스트리로 아침 식사하기 좋은 패르누의 카페', 'Pärnu café perfect for breakfast with porridge, coffee, and pastries'),
  place('parnu-cafe-2', 'parnu', 'cafe', 'Kohvila', 'Lai tn 10, Pärnu', '패르누의 카페.', 'Café in Pärnu.'),
]
