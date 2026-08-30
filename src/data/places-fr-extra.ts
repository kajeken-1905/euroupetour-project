import { place } from './placeFactory'
import type { Place } from '../types'

export const placesFRExtra: Place[] = [
  // —— paris ——
  place('paris-fine_dining-1', 'paris', 'fine_dining', 'Arpège', 4.7, 'Paris', '미슐랭 채소 중심 파인 다이닝.', 'Michelin vegetable-focused fine dining.', { reviewCount: 1800 }),
  place('paris-fine_dining-2', 'paris', 'fine_dining', 'Le Comptoir du Relais', 4.5, 'Paris', '비스트로 클래식.', 'Classic bistro.', { reviewCount: 4200 }),
  place('paris-fine_dining-3', 'paris', 'fine_dining', 'Septime', 4.6, 'Paris', '모던 프렌치 코스.', 'Modern French tasting.', { reviewCount: 2100 }),
  place('paris-fine_dining-4', 'paris', 'fine_dining', 'Bouillon Chartier', 4.3, 'Paris', '전통 부용 식당.', 'Historic bouillon canteen.', { reviewCount: 18000 }),
  place('paris-fine_dining-5', 'paris', 'fine_dining', 'L\'Ami Jean', 4.5, 'Paris', '바스크 감성 비스트로.', 'Basque-spirited bistro.', { reviewCount: 3200 }),
  place('paris-bakery-1', 'paris', 'bakery', 'Du Pain et des Idées', 4.6, 'Paris', '유명 사워도우·페이스트리.', 'Famous sourdough and pastries.', { reviewCount: 4800 }),
  place('paris-bakery-2', 'paris', 'bakery', 'Poilâne', 4.5, 'Paris', '상징적 빵집.', 'Iconic bakery.', { reviewCount: 5600 }),
  place('paris-bakery-3', 'paris', 'bakery', 'Stohrer', 4.5, 'Paris', '역사적 파티스리.', 'Historic pâtisserie.', { reviewCount: 3900 }),
  place('paris-bakery-4', 'paris', 'bakery', 'Blé Sucré', 4.6, 'Paris', '크루아상·타르트.', 'Croissants and tarts.', { reviewCount: 2800 }),
  place('paris-cafe-1', 'paris', 'cafe', 'Café de Flore', 4.3, 'Paris', '생제르맹 클래식 카페.', 'Classic Saint-Germain café.', { reviewCount: 16000 }),
  place('paris-cafe-2', 'paris', 'cafe', 'Beans on Fire', 4.5, 'Paris', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('paris-cafe-3', 'paris', 'cafe', 'Coutume Café', 4.5, 'Paris', '로스터리 카페.', 'Roastery café.', { reviewCount: 2100 }),
  place('paris-cafe-4', 'paris', 'cafe', 'Café Kitsuné', 4.4, 'Paris', '트렌디 카페.', 'Trendy café.', { reviewCount: 2600 }),
  place('paris-korean-1', 'paris', 'korean', 'La Table de Mee', 4.5, '6 Rue des Ciseaux, 75006 Paris', '미쉐린 빕 구르망 한식당.', 'Michelin Bib Gourmand Korean restaurant.'),

  // —— lyon ——
  place('lyon-fine_dining-1', 'lyon', 'fine_dining', 'La Mère Brazier', 4.6, '16 Rue Saint-Georges, 69005 Lyon', '리옹 미식의 전설, 미쉐린 스타 레스토랑.', 'Legendary Lyon dining, Michelin-starred.'),

  // —— marseille ——
  place('marseille-fine_dining-1', 'marseille', 'fine_dining', 'Le Petit Nice Passedat', 4.7, '17 Rue des Braves Anse de Maldormé, 13007 Marseille', '미쉐린 3스타 레스토랑.', 'Three-Michelin-star restaurant.'),

  // —— nice ——
  place('nice-fine_dining-1', 'nice', 'fine_dining', 'Le Chantecler', 4.6, '37 Promenade des Anglais, 06000 Nice', '네그레스코 호텔의 미식 레스토랑.', 'Fine dining at the Hotel Negresco.'),

  // —— bordeaux ——
  place('bordeaux-fine_dining-1', 'bordeaux', 'fine_dining', 'Le Cent 33', 4.6, '133 Rue du Jardin public, 33000 Bordeaux', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),

  // —— strasbourg ——
  place('strasbourg-fine_dining-1', 'strasbourg', 'fine_dining', 'Restaurant Chez Yvonne', 4.5, '10 Rue du Sanglier, 67000 Strasbourg', '스트라스부르의 대표 전통 윈스튜브.', 'Strasbourg\'s iconic traditional winstub.'),

  // —— annecy ——
  place('annecy-fine_dining-1', 'annecy', 'fine_dining', 'Cozna', 4.6, '22 Faubourg Sainte-Claire, 74000 Annecy', '구시가의 우아하고 창의적인 요리.', 'Elegant, innovative cuisine in the Old Town.'),

  // —— avignon ——
  place('avignon-fine_dining-1', 'avignon', 'fine_dining', 'La Mirande', 4.6, '4 Place de la Mirande, 84000 Avignon', '클래식 프렌치 요리 레스토랑.', 'Classic French cuisine restaurant.'),

  // —— toulouse ——
  place('toulouse-fine_dining-1', 'toulouse', 'fine_dining', 'Michel Sarran', 4.6, '21 Boulevard Armand Duportal, 31000 Toulouse', '미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant.'),

  // —— montpellier ——
  place('montpellier-fine_dining-1', 'montpellier', 'fine_dining', 'Le Jardin des Sens', 4.6, 'Place de la Canourgue, 34000 Montpellier', '지중해 정원 뷰의 미쉐린 레스토랑.', 'Michelin restaurant with Mediterranean garden views.'),

  // —— dijon ——
  place('dijon-fine_dining-1', 'dijon', 'fine_dining', 'L\'Essentiel', 4.6, '12 Rue Audra, 21000 Dijon', '계절 메뉴의 모던 프렌치 요리.', 'Modern French cuisine with a seasonal menu.'),

  // —— chamonix ——
  place('chamonix-fine_dining-1', 'chamonix', 'fine_dining', 'Restaurant Albert 1er', 4.6, '38 Route du Bouchet, 74400 Chamonix-Mont-Blanc', '1903년부터 이어온 전통 레스토랑.', 'Traditional restaurant serving since 1903.'),

]
