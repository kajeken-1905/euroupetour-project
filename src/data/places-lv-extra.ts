import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLVExtra: Place[] = [
  // —— riga ——
  place('riga-fine_dining-4', 'riga', 'fine_dining', 'Art Nouveau district bistros', 4.4, 'Riga', '아르누보 비스트로.', 'Art Nouveau bistros.', { reviewCount: 1200 }),
  place('riga-bakery-1', 'riga', 'bakery', 'Rupjmaize / rye bakeries', 4.5, 'Riga', '호밀빵집.', 'Rye bakeries.', { reviewCount: 2100 }),
  place('riga-bakery-2', 'riga', 'bakery', 'Pastry shops Centrs', 4.4, 'Riga', '센터 페이스트리.', 'Centre pastry shops.', { reviewCount: 1800 }),
  place('riga-bakery-3', 'riga', 'bakery', 'Market bakery stalls', 4.4, 'Riga', '시장 빵 가판.', 'Market bread stalls.', { reviewCount: 2400 }),
  place('riga-cafe-1', 'riga', 'cafe', 'Specialty coffee Riga', 4.5, 'Riga', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),
  place('riga-cafe-2', 'riga', 'cafe', 'Old Town cafés', 4.3, 'Riga', '구시가 카페.', 'Old-town cafés.', { reviewCount: 2800 }),
  place('riga-cafe-3', 'riga', 'cafe', 'Kalnciema / neighbourhood cafés', 4.4, 'Riga', '동네 카페.', 'Neighbourhood cafés.', { reviewCount: 1600 }),

  // —— jurmala ——
  place('jurmala-fine_dining-1', 'jurmala', 'fine_dining', '36.Line Grill Restaurant', 4.4, 'Baznīcas iela 12/14, LV-2015 Jūrmala', '시푸드·지중해 요리 레스토랑.', 'Seafood and Mediterranean cuisine.'),
  place('jurmala-bakery-1', 'jurmala', 'bakery', 'Kalnakrastu Rausu fabrika', 4.5, 'Vienibas prospekts 35, Jūrmala, Latvia', '유르말라 최고의 케이크로 꼽히는 인기 베이커리', 'Jūrmala\'s top-ranked bakery, known for its excellent cakes'),
  place('jurmala-cafe-1', 'jurmala', 'cafe', 'Madam Brioš', 4.5, 'Mellužu prospekts 9, Jūrmala LV-2008, Latvia', '프랑스식 정취가 물씬 풍기는 유르말라의 노변 카페 겸 베이커리', 'Roadside café and bakery in Jūrmala capturing French culinary charm'),

  // —— sigulda ——
  place('sigulda-fine_dining-1', 'sigulda', 'fine_dining', 'Pasēdnīca', 4.5, 'Raiņa iela 2-3, LV-2150 Sigulda', '합리적인 가격의 로컬 요리.', 'Local cuisine at reasonable prices.'),

  place('sigulda-bakery-1', 'sigulda', 'bakery', 'GUSTAVbeķereja', 4.5, 'Sigulda, Latvia', '신선한 머핀으로 유명한 시굴다의 베이커리', 'Sigulda bakery known for its fresh and delicious muffins'),
  place('sigulda-cafe-1', 'sigulda', 'cafe', 'Doma cafe', 4.5, 'L. Paegles iela 15a, Sigulda, Latvia', '아늑한 안뜰과 훌륭한 커피로 유명한 시굴다의 카페', 'Sigulda café known for its cozy courtyard and excellent coffee'),
]
