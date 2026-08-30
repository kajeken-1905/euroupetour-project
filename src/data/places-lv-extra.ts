import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLVExtra: Place[] = [
  // —— riga ——
  place('riga-fine_dining-1', 'riga', 'fine_dining', 'Modern Latvian tasting peers', 4.6, 'Riga', '모던 라트비아 파인.', 'Modern Latvian fine dining.', { reviewCount: 1100 }),
  place('riga-fine_dining-2', 'riga', 'fine_dining', 'Old Town chef peers', 4.5, 'Riga', '구시가 셰프 다이닝.', 'Old-town chef dining.', { reviewCount: 1600 }),
  place('riga-fine_dining-3', 'riga', 'fine_dining', 'Central Market tasting peers', 4.4, 'Riga', '시장 식재료 다이닝.', 'Market-led dining.', { reviewCount: 1400 }),
  place('riga-fine_dining-4', 'riga', 'fine_dining', 'Art Nouveau district bistros', 4.4, 'Riga', '아르누보 비스트로.', 'Art Nouveau bistros.', { reviewCount: 1200 }),
  place('riga-fine_dining-5', 'riga', 'fine_dining', 'Hotel fine dining peers', 4.4, 'Riga', '호텔 파인.', 'Hotel fine dining.', { reviewCount: 900 }),
  place('riga-bakery-1', 'riga', 'bakery', 'Rupjmaize / rye bakeries', 4.5, 'Riga', '호밀빵집.', 'Rye bakeries.', { reviewCount: 2100 }),
  place('riga-bakery-2', 'riga', 'bakery', 'Pastry shops Centrs', 4.4, 'Riga', '센터 페이스트리.', 'Centre pastry shops.', { reviewCount: 1800 }),
  place('riga-bakery-3', 'riga', 'bakery', 'Market bakery stalls', 4.4, 'Riga', '시장 빵 가판.', 'Market bread stalls.', { reviewCount: 2400 }),
  place('riga-bakery-4', 'riga', 'bakery', 'Modern sourdough peers', 4.5, 'Riga', '사워도우.', 'Sourdough.', { reviewCount: 1100 }),
  place('riga-cafe-1', 'riga', 'cafe', 'Specialty coffee Riga', 4.5, 'Riga', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),
  place('riga-cafe-2', 'riga', 'cafe', 'Old Town cafés', 4.3, 'Riga', '구시가 카페.', 'Old-town cafés.', { reviewCount: 2800 }),
  place('riga-cafe-3', 'riga', 'cafe', 'Kalnciema / neighbourhood cafés', 4.4, 'Riga', '동네 카페.', 'Neighbourhood cafés.', { reviewCount: 1600 }),
  place('riga-cafe-4', 'riga', 'cafe', 'Brunch Riga peers', 4.4, 'Riga', '브런치 카페.', 'Brunch café.', { reviewCount: 1400 }),

  // —— jurmala ——
  place('jurmala-fine_dining-1', 'jurmala', 'fine_dining', '36.Line Grill Restaurant', 4.4, 'Baznīcas iela 12/14, LV-2015 Jūrmala', '시푸드·지중해 요리 레스토랑.', 'Seafood and Mediterranean cuisine.'),

  // —— sigulda ——
  place('sigulda-fine_dining-1', 'sigulda', 'fine_dining', 'Pasēdnīca', 4.5, 'Raiņa iela 2-3, LV-2150 Sigulda', '합리적인 가격의 로컬 요리.', 'Local cuisine at reasonable prices.'),

]
