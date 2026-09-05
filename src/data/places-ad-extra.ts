import { place } from './placeFactory'
import type { Place } from '../types'

export const placesADExtra: Place[] = [
  // —— andorra-la-vella ——
  place('andorra-la-vella-fine_dining-1', 'andorra-la-vella', 'fine_dining', 'Vitobe - Wine BAR', 4.6, 'Carrer Prat de la Creu, 29, Andorra la Vella', '와인 바 겸 그릴.', 'Wine bar and grill.', { reviewCount: 99 }),
  place('andorra-la-vella-fine_dining-2', 'andorra-la-vella', 'fine_dining', 'Restaurant Celler d\'En Toni', 4.5, 'Carrer Verge del Pilar, 4, AD500 Andorra la Vella', '카탈란·안도라 다이닝.', 'Catalan–Andorran dining.', { reviewCount: 574 }),
  place('andorra-la-vella-fine_dining-3', 'andorra-la-vella', 'fine_dining', 'Restaurant Eric Marty', 4.9, 'C/ Mossèn Tremosa, 6, Andorra la Vella', '프렌치·안도라 파인 다이닝.', 'French-Andorran fine dining.', { reviewCount: 388 }),
  place('andorra-la-vella-fine_dining-4', 'andorra-la-vella', 'fine_dining', 'Restaurant el Crostó', 4.7, 'Cap del Carrer, 7, Andorra la Vella', '전통 안도라 요리.', 'Traditional Andorran cuisine.', { reviewCount: 703 }),
  place('andorra-la-vella-fine_dining-5', 'andorra-la-vella', 'fine_dining', 'Alta Taberna Aires Gourmet', 4.9, 'Carrer Bonaventura Riberaygua, 9, Andorra la Vella', '고메 타파스·그릴.', 'Gourmet tapas and grill.', { reviewCount: 685 }),
  place('andorra-la-vella-bakery-1', 'andorra-la-vella', 'bakery', 'ART I PA II', 4.2, 'Carrer Ciutat de Consuegra, 4, Andorra la Vella', '카탈란식 빵집.', 'Catalan-style bakery.', { reviewCount: 510 }),
  place('andorra-la-vella-bakery-2', 'andorra-la-vella', 'bakery', 'Levaduramadre', 4.4, 'Carrer Bonaventura Riberaygua, 18, Andorra la Vella', '스페인 베이커리 체인.', 'Spanish bakery chain branch.', { reviewCount: 48 }),
  place('andorra-la-vella-bakery-3', 'andorra-la-vella', 'bakery', 'Horno', 4.5, 'Av. Meritxell, 11, Andorra la Vella', '베이커리.', 'Bakery.', { reviewCount: 38 }),
  place('andorra-la-vella-bakery-4', 'andorra-la-vella', 'bakery', 'Hugo Pa', 4.4, 'Cap del Carrer, 3, Andorra la Vella', '베이커리.', 'Bakery.', { reviewCount: 41 }),
  place('andorra-la-vella-cafe-1', 'andorra-la-vella', 'cafe', 'Kofi - Specialty Coffee Roasters & Brunch', 4.8, 'Av. Dr. Mitjavila, 45, Local 2, Andorra la Vella', '스페셜티 로스터리·브런치.', 'Specialty coffee roastery and brunch.', { reviewCount: 520 }),
  place('andorra-la-vella-cafe-2', 'andorra-la-vella', 'cafe', 'Coffee To Be (Co.Be)', 4.6, 'Carrer Prat de la Creu, 29, Andorra la Vella', '스페셜티 커피·브런치.', 'Specialty coffee and brunch.', { reviewCount: 241 }),
  place('andorra-la-vella-cafe-3', 'andorra-la-vella', 'cafe', 'Riverside Brunch & Lunch', 4.4, 'Av. Dr. Mitjavila, 36, Andorra la Vella', '브런치·스페셜티 커피.', 'Brunch and specialty coffee.', { reviewCount: 398 }),
  place('andorra-la-vella-cafe-4', 'andorra-la-vella', 'cafe', 'Alt Benestar Cafe', 4.8, 'Carrer Copríncep François Mitterrand, 2, Local 5, Andorra la Vella', '카페.', 'Café.', { reviewCount: 229 }),

  // —— pas-de-la-casa ——
  place('pas-de-la-casa-fine_dining-1', 'pas-de-la-casa', 'fine_dining', 'El Provençal', 4.5, 'Carrer Catalunya 13, AD200 Pas de la Casa', '프랑스 요리 전문 레스토랑.', 'Restaurant specializing in French cuisine.'),
  place('pas-de-la-casa-bakery-1', 'pas-de-la-casa', 'bakery', 'Pastisseria La Camarguesa', 4.5, 'Av. d\'Encamp 29, AD200 Pas de la Casa, Andorra', '1986년부터 이어온 파스 데 라 카사의 프랑스식 베이커리, 스키 슬로프 전망 테라스가 특징', 'French-style bakery in Pas de la Casa since 1986, with a sunny terrace overlooking the ski slopes'),
  place('pas-de-la-casa-cafe-1', 'pas-de-la-casa', 'cafe', 'Chez André', 4.4, 'Pas de la Casa, AD200, Andorra', '합리적인 가격의 맛있는 아침 식사로 인기 있는 파스 데 라 카사의 카페', 'Popular Pas de la Casa breakfast spot known for good food at fair prices'),

  // —— ordino ——
  place('ordino-fine_dining-1', 'ordino', 'fine_dining', 'Topic Restaurant', 4.5, 'Carrer Mossèn Cinto Verdaguer 1, AD300 Ordino', '안도라 전통 요리 레스토랑.', 'Andorran cuisine restaurant.'),
  place('ordino-fine_dining-2', 'ordino', 'fine_dining', 'Vertical Ordino', 4.8, 'Ordino, AD300, Andorra', '지역민들이 극찬하는 오르디노의 유러피안·지중해 레스토랑', 'Highly rated European–Mediterranean restaurant in Ordino', { reviewCount: 1136 }),
  place('ordino-fine_dining-3', 'ordino', 'fine_dining', 'Restaurant Gaspá', 4.7, 'Ordino, AD300, Andorra', '24시간 운영하는 오르디노의 유러피안·스페인 레스토랑', '24-hour European–Spanish restaurant in Ordino', { reviewCount: 184 }),

  place('ordino-bakery-1', 'ordino', 'bakery', 'Fleca Font', 4.4, 'Ordino, AD300, Andorra', '매일 아침 갓 구운 페이스트리 향이 가득한 오르디노의 인기 빵집', 'Beloved Ordino bakery filling the morning air with the aroma of fresh pastries'),
  place('ordino-cafe-1', 'ordino', 'cafe', 'Hors Categorie Andorra', 4.3, 'Plaça Major 10, AD300 Ordino, Andorra', '오르디노 중앙 광장에 위치한 카페 겸 레스토랑', 'Café and restaurant on Ordino\'s central square'),
]
