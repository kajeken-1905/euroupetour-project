import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLUExtra: Place[] = [
  // —— vianden ——
  place('vianden-fine_dining-1', 'vianden', 'fine_dining', 'Restaurant Victor Hugo', 4.0, '1 Rue Victor Hugo, Vianden', '강변 좌석의 프랑스 요리 레스토랑, 비앙덴 최고로 꼽히는 곳.', "French cuisine restaurant with waterside seating, regarded as Vianden's best."),
  place('vianden-fine_dining-2', 'vianden', 'fine_dining', 'Auberge Aal Veinen "Beim Hunn"', 4.6, '114 Grand-rue, L-9411 Vianden', '비앙덴 성 아래 옛 대장간 건물의 레스토랑, 숯불구이 요리로 유명.', "Restaurant in a former castle forge below Vianden Castle, known for its charcoal-grilled specialties.", { reviewCount: 1000 }),
  place('vianden-bakery-1', 'vianden', 'bakery', "Au Croissant D'Or", 3.7, 'Grand Rue, Vianden', '구시가 중심의 아르티장 베이커리, 사워도우 빵과 크루아상으로 유명.', "Artisan bakery in the heart of the Old Town, known for its sourdough bread and croissants."),
  place('vianden-cafe-1', 'vianden', 'cafe', 'Café du Pont', 4.0, '1 Grand-Rue, Vianden', '강변 전망의 카페.', 'Café with riverside views.'),
  place('vianden-cafe-2', 'vianden', 'cafe', 'Collette Coffee Craft - Café & Roastery', 4.9, '70 Grand-Rue, Vianden', '비앙덴 성 인근의 카페 겸 로스터리.', 'Café and roastery near Vianden Castle.', { reviewCount: 203 }),
  place('vianden-cafe-3', 'vianden', 'cafe', 'Café & Nata', 5.0, '52 Rue du Sanatorium, Vianden', '포르투갈식 에그타르트를 선보이는 비앙덴의 카페.', 'Vianden café known for Portuguese-style egg tart pastries.', { reviewCount: 28 }),

  // —— echternach ——
  place('echternach-fine_dining-1', 'echternach', 'fine_dining', 'Café de la Poste "Beim Wohli"', 3.5, 'Place du Marché, Echternach', '에히터나흐 중앙 광장에 위치한 카페 겸 레스토랑, 간단한 요리와 다양한 벨기에 맥주.', "Café-restaurant on Echternach's central market square, serving simple dishes and a range of Belgian beers.", { reviewCount: 24 }),
  place('echternach-fine_dining-2', 'echternach', 'fine_dining', 'Café Restaurant du Musée', 4.0, '6 Rue du Pont, L-6471 Echternach', '박물관 인근의 카페 겸 레스토랑.', 'Café-restaurant near the local museum.'),
  place('echternach-bakery-1', 'echternach', 'bakery', 'Pâtisserie Hoffmann', 4.4, '6-8 Rue de la Montagne, L-6470 Echternach', '친절한 서비스로 호평받는 에히터나흐의 제과점.', 'Echternach pâtisserie praised for its friendly service.'),
  place('echternach-bakery-2', 'echternach', 'bakery', 'Fischer', 4.1, '38 Rue de la Gare, Echternach', '에히터나흐의 베이커리 체인점.', 'Bakery chain location in Echternach.', { reviewCount: 365 }),
  place('echternach-bakery-3', 'echternach', 'bakery', 'DIETZ', 4.5, 'Bitburger Str. 1B, Echternach', '많은 리뷰를 받은 에히터나흐의 제과점.', 'Bakery in Echternach with a large number of reviews.', { reviewCount: 446 }),

  // —— remich ——
  place('remich-fine_dining-1', 'remich', 'fine_dining', 'Café De L\'Europe Bofferding', 4.5, 'Quai de la Moselle, Remich', '모젤강변의 카페 겸 레스토랑, 차분한 분위기와 친절한 서비스로 호평.', "Café-restaurant on the Moselle riverbank, praised for its calm atmosphere and friendly service."),
  place('remich-fine_dining-2', 'remich', 'fine_dining', 'Café de la Poste', 4.3, '16 Place du Marché, Remich', '좋은 커피로 유명한 레미히 광장의 카페.', "Café on Remich's market square, known for its good coffee.", { reviewCount: 102 }),
  place('remich-bakery-1', 'remich', 'bakery', 'Patisserie Haan Boulangerie', 3.8, '19 Place du Marché, Remich', '빵과 페이스트리, 초콜릿을 갖춘 레미히의 베이커리.', 'Remich bakery offering bread, pastries and chocolates.', { reviewCount: 24 }),
  place('remich-bakery-2', 'remich', 'bakery', 'Mosella', 4.1, '21 Place du Marché, Remich', '레미히 시장 광장의 제과점.', 'Bakery on Remich\'s market square.', { reviewCount: 185 }),
  place('remich-bakery-3', 'remich', 'bakery', 'Boulangerie & Patisserie Op Der Musel', 4.4, '9 Esplanade, Remich', '모젤강변 에스플라나드의 베이커리.', 'Bakery on the Moselle riverside Esplanade.', { reviewCount: 25 }),

]
