import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLUExtra: Place[] = [
  // —— vianden ——
  place('vianden-fine_dining-1', 'vianden', 'fine_dining', 'Restaurant Victor Hugo', '1 Rue Victor Hugo, Vianden', '강변 좌석이 있는 프랑스 요리 레스토랑.', 'French restaurant with riverside seating.'),
  place('vianden-fine_dining-2', 'vianden', 'fine_dining', 'Auberge Aal Veinen "Beim Hunn"', '114 Grand-rue, L-9411 Vianden', '비안덴 성 아래 옛 대장간 건물의 레스토랑. 숯불구이를 냅니다.', 'Restaurant in a former forge below Vianden Castle, serving charcoal-grilled dishes.'),
  place('vianden-bakery-1', 'vianden', 'bakery', "Au Croissant D'Or", '31 Grand-Rue, 9410 Vianden, Luxembourg', '사워도우와 크루아상을 굽는 구시가의 빵집.', 'Old Town bakery with sourdough and croissants.'),
  place('vianden-cafe-1', 'vianden', 'cafe', 'Café du Pont', '1 Grand-Rue, Vianden', '강변 전망의 카페.', 'Café with riverside views.', { image: '/places/vianden-cafe-1.jpg' }),
  place('vianden-cafe-2', 'vianden', 'cafe', 'Collette Coffee Craft - Café & Roastery', '70 Grand-Rue, Vianden', '비앙덴 성 인근의 카페 겸 로스터리.', 'Café and roastery near Vianden Castle.'),
  place('vianden-cafe-3', 'vianden', 'cafe', 'Café & Nata', '52 Rue du Sanatorium, Vianden', '포르투갈식 에그타르트를 선보이는 비앙덴의 카페.', 'Vianden café known for Portuguese-style egg tart pastries.'),

  // —— echternach ——
  place('echternach-fine_dining-1', 'echternach', 'fine_dining', 'Café de la Poste "Beim Wohli"', '3 Place du Marché, 6460 Echternach, Luxembourg', '에히터나흐 중앙 광장에 위치한 카페 겸 레스토랑, 간단한 요리와 다양한 벨기에 맥주.', "Café-restaurant on Echternach's central market square, serving simple dishes and a range of Belgian beers."),
  place('echternach-fine_dining-2', 'echternach', 'fine_dining', 'Café Restaurant du Musée', '6 Rue du Pont, L-6471 Echternach', '박물관 인근의 카페 겸 레스토랑.', 'Café-restaurant near the local museum.'),
  place('echternach-bakery-1', 'echternach', 'bakery', 'Pâtisserie Hoffmann', '6-8 Rue de la Montagne, L-6470 Echternach', '친절한 서비스로 호평받는 에히터나흐의 제과점.', 'Echternach pâtisserie praised for its friendly service.'),
  place('echternach-bakery-2', 'echternach', 'bakery', 'Fischer', '38 Rue de la Gare, Echternach', '에히터나흐의 베이커리 체인점.', 'Bakery chain location in Echternach.'),
  place('echternach-bakery-3', 'echternach', 'bakery', 'DIETZ', 'Bitburger Str. 1B, Echternach', '에히터나흐의 제과점.', 'Bakery in Echternach.'),

  // —— remich ——
  place('remich-fine_dining-1', 'remich', 'fine_dining', 'Café De L\'Europe Bofferding', 'Quai de la Moselle, 5553 Remich', '모젤강변의 카페 겸 레스토랑, 차분한 분위기와 친절한 서비스로 호평.', "Café-restaurant on the Moselle riverbank, praised for its calm atmosphere and friendly service."),
  place('remich-fine_dining-2', 'remich', 'fine_dining', 'Café de la Poste', '16 Place du Marché, Remich', '레미히 장터 광장의 카페.', 'Café on Remich’s market square.'),
  place('remich-bakery-1', 'remich', 'bakery', 'Patisserie Haan Boulangerie', '19 Place du Marché, Remich', '빵과 페이스트리, 초콜릿을 갖춘 레미히의 베이커리.', 'Remich bakery offering bread, pastries and chocolates.'),
  place('remich-bakery-2', 'remich', 'bakery', 'Mosella', '21 Place du Marché, Remich', '레미히 시장 광장의 제과점.', 'Bakery on Remich\'s market square.'),
  place('remich-bakery-3', 'remich', 'bakery', 'Boulangerie & Patisserie Op Der Musel', '9 Esplanade, Remich', '모젤강변 에스플라나드의 베이커리.', 'Bakery on the Moselle riverside Esplanade.'),

]
