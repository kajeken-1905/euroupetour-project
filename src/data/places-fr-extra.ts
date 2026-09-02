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
  place('paris-bakery-5', 'paris', 'bakery', 'Boulangerie Utopie', 4.6, '20 Rue Jean-Pierre Timbaud, 75011 Paris, France', '2024년 파리 최고의 바게트로 선정된 11구의 인기 베이커리', "Popular 11th-arrondissement bakery awarded Paris's best baguette in 2024", { reviewCount: 2200 }),
  place('paris-cafe-1', 'paris', 'cafe', 'Café de Flore', 4.3, 'Paris', '생제르맹 클래식 카페.', 'Classic Saint-Germain café.', { reviewCount: 16000 }),
  place('paris-cafe-2', 'paris', 'cafe', 'Beans on Fire', 4.5, 'Paris', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('paris-cafe-3', 'paris', 'cafe', 'Coutume Café', 4.5, 'Paris', '로스터리 카페.', 'Roastery café.', { reviewCount: 2100 }),
  place('paris-cafe-4', 'paris', 'cafe', 'Café Kitsuné', 4.4, 'Paris', '트렌디 카페.', 'Trendy café.', { reviewCount: 2600 }),
  place('paris-cafe-5', 'paris', 'cafe', 'Ten Belles', 4.5, '10 Rue de la Grange aux Belles, 75010 Paris, France', '생마르탱 운하 인근의 파리 대표 스페셜티 커피 로스터리', "Landmark Paris specialty coffee roastery near the Canal Saint-Martin", { reviewCount: 1900 }),
  place('paris-korean-1', 'paris', 'korean', 'La Table de Mee', 4.5, '6 Rue des Ciseaux, 75006 Paris', '미쉐린 빕 구르망 한식당.', 'Michelin Bib Gourmand Korean restaurant.'),
  place('paris-korean-2', 'paris', 'korean', 'Guibine', 4.4, '44 Rue Sainte-Anne, 75002 Paris, France', '생트안 거리의 인기 한식당', 'Popular Korean restaurant on Rue Sainte-Anne'),
  place('paris-korean-3', 'paris', 'korean', 'MariMari', 4.5, "23 Rue d'Antin, 75002 Paris, France", '김밥·떡볶이 등 한국식 길거리 분식을 선보이는 파리의 캐주얼 한식당', 'Casual Paris Korean eatery specializing in street-food bunsik like kimbap and tteokbokki'),
  place('paris-korean-4', 'paris', 'korean', 'K-CHIMAEK', 4.4, '139 Rue de Tolbiac, 75013 Paris, France', '치맥과 떡볶이로 유명한 파리의 한식 분식 전문점', 'Paris Korean bunsik spot known for chimaek (fried chicken and beer) and tteokbokki'),
  place('paris-korean-5', 'paris', 'korean', 'Kimchi', 4.3, '5 Rue de Louvois, 75002 Paris, France', '생트안 지구 인근의 정통 한식당', "Authentic Korean restaurant near Paris's Rue Sainte-Anne district"),

  // —— lyon ——
  place('lyon-fine_dining-1', 'lyon', 'fine_dining', 'La Mère Brazier', 4.6, '16 Rue Saint-Georges, 69005 Lyon', '리옹 미식의 전설, 미쉐린 스타 레스토랑.', 'Legendary Lyon dining, Michelin-starred.'),
  place('lyon-fine_dining-2', 'lyon', 'fine_dining', 'Café des Fédérations', 4.2, '8 Rue du Major Martin, 69001 Lyon', '150년 넘는 역사의 정통 리옹 부숑.', 'Authentic Lyon bouchon with over 150 years of history.'),
  place('lyon-fine_dining-3', 'lyon', 'fine_dining', "Le Poêlon d'Or", 4.4, "29 Rue des Remparts d'Ainay, 69002 Lyon", '아네 지구의 정통 부숑, 리옹식 샐러드로 유명.', 'Authentic bouchon in the Ainay district, known for its Lyon salad.'),
  place('lyon-fine_dining-4', 'lyon', 'fine_dining', 'Bouchon Les Lyonnais', 4.1, '19 Rue de la Bombarde, 69005 Lyon', '비외 리옹의 전통 부숑 레스토랑.', 'Traditional bouchon restaurant in Vieux Lyon.'),
  place('lyon-bakery-1', 'lyon', 'bakery', 'Boulangerie du Palais', 4.5, '8 Rue du Palais de Justice, 69005 Lyon, France', '리옹 구시가지 생장 거리에 위치한 분홍빛 창문의 베이커리', 'Bakery with a distinctive pink window in Lyon\'s old town on Rue Saint Jean'),
  place('lyon-cafe-1', 'lyon', 'cafe', 'Slake Coffee House', 4.6, '9 Rue de l\'Ancienne Préfecture, 69002 Lyon, France', '2015년부터 스페셜티 커피와 홈메이드 페이스트리를 선보이는 리옹의 카페', 'Lyon café serving specialty coffee and homemade pastries since 2015'),
  place('lyon-cafe-2', 'lyon', 'cafe', 'Puzzle Café', 5.0, '4 rue de la Poulaillerie, 69002 Lyon', '유럽 각지의 로스터리를 순환 소개하는 스페셜티 커피.', 'Specialty coffee shop rotating craft roasters from across Europe.'),
  place('lyon-cafe-3', 'lyon', 'cafe', 'Café Mokxa', 4.3, '5 Rue Bellecordière, 69002 Lyon', '2011년부터 이어온 리옹 최초의 스페셜티 커피 로스터리.', "Lyon's original specialty coffee roastery, since 2011.", { reviewCount: 480 }),
  place('lyon-korean-1', 'lyon', 'korean', 'Kimchique', 5.0, '74 Rue Garibaldi, 69006 Lyon', '일식과 한식을 함께 선보이는 인기 레스토랑.', 'Popular restaurant blending Japanese and Korean cuisine.', { reviewCount: 107 }),

  // —— marseille ——
  place('marseille-fine_dining-1', 'marseille', 'fine_dining', 'Le Petit Nice Passedat', 4.7, '17 Rue des Braves Anse de Maldormé, 13007 Marseille', '미쉐린 3스타 레스토랑.', 'Three-Michelin-star restaurant.'),
  place('marseille-bakery-1', 'marseille', 'bakery', 'Le Four des Navettes', 4.5, '136 Rue Sainte, 13007 Marseille, France', '1781년부터 이어온 마르세유에서 가장 오래된 베이커리', 'Marseille\'s oldest bakery, operating since 1781'),
  place('marseille-cafe-1', 'marseille', 'cafe', 'Sylvain Depuichaffray', 4.5, 'Marseille, France', '훌륭한 커피로 정평이 난 마르세유의 인기 카페', 'Popular Marseille café praised for its excellent coffee'),

  // —— nice ——
  place('nice-fine_dining-1', 'nice', 'fine_dining', 'Le Chantecler', 4.6, '37 Promenade des Anglais, 06000 Nice', '네그레스코 호텔의 미식 레스토랑.', 'Fine dining at the Hotel Negresco.'),
  place('nice-bakery-1', 'nice', 'bakery', 'Pâtisserie Canet', 4.6, '25 Boulevard Gambetta, 06000 Nice, France', '니스 최고의 페이스트리로 꼽히는 제과점', 'Widely regarded as having the best pastries in Nice'),
  place('nice-cafe-1', 'nice', 'cafe', 'Mama Baker', 4.5, '13 Rue de Lépante, 06000 Nice, France', '초콜릿 번으로 유명한 니스의 유기농 베이커리 카페', 'Organic Nice bakery café known for its unrivaled chocolate buns'),

  // —— bordeaux ——
  place('bordeaux-fine_dining-1', 'bordeaux', 'fine_dining', 'Le Cent 33', 4.6, '133 Rue du Jardin public, 33000 Bordeaux', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),
  place('bordeaux-bakery-1', 'bordeaux', 'bakery', 'Cassonade', 4.5, 'Rue Saint-James, 33000 Bordeaux, France', '그로스 클로슈 종탑 인근의 유명 보르도 베이커리', 'Renowned Bordeaux bakery near the Grosse Cloche belfry'),
  place('bordeaux-cafe-1', 'bordeaux', 'cafe', 'Goûtu par Oven Heaven', 4.6, 'Marché des Capucins, 33000 Bordeaux, France', '갓 구운 크루아상과 훌륭한 커피로 보르도 최고로 꼽히는 카페', 'Widely regarded as Bordeaux\'s best café, with fresh croissants and expertly crafted coffee'),

  // —— strasbourg ——
  place('strasbourg-fine_dining-1', 'strasbourg', 'fine_dining', 'Restaurant Chez Yvonne', 4.5, '10 Rue du Sanglier, 67000 Strasbourg', '스트라스부르의 대표 전통 윈스튜브.', 'Strasbourg\'s iconic traditional winstub.'),
  place('strasbourg-bakery-1', 'strasbourg', 'bakery', 'La Gare\'Mandise', 4.4, '8 Place de la Gare, 67000 Strasbourg, France', '스트라스부르 기차역 앞의 베이커리 겸 살롱 드 테', 'Bakery and tea salon in front of Strasbourg\'s train station'),
  place('strasbourg-cafe-1', 'strasbourg', 'cafe', 'Chez Christian', 4.5, 'Rue Mercière, 67000 Strasbourg, France', '스트라스부르 대성당 옆의 고급 페이스트리·초콜릿 전문점', 'Upscale pastry and chocolate shop next to Strasbourg Cathedral'),

  // —— annecy ——
  place('annecy-fine_dining-1', 'annecy', 'fine_dining', 'Cozna', 4.6, '22 Faubourg Sainte-Claire, 74000 Annecy', '구시가의 우아하고 창의적인 요리.', 'Elegant, innovative cuisine in the Old Town.'),
  place('annecy-bakery-1', 'annecy', 'bakery', 'Boulangerie Rouge', 4.5, 'Annecy, 74000, France', '사부아식 특산 빵으로 유명한 안시의 인기 베이커리', 'Popular Annecy bakery known for Savoie specialty breads'),
  place('annecy-cafe-1', 'annecy', 'cafe', 'Au Péché Mignon', 4.5, '9 Rue Jean-Jacques Rousseau, 74000 Annecy, France', '달콤한 디저트로 유명한 안시 구시가지의 아담한 카페', 'Quaint café in Annecy\'s old town serving delectable sweets'),

  // —— avignon ——
  place('avignon-fine_dining-1', 'avignon', 'fine_dining', 'La Mirande', 4.6, '4 Place de la Mirande, 84000 Avignon', '클래식 프렌치 요리 레스토랑.', 'Classic French cuisine restaurant.'),
  place('avignon-bakery-1', 'avignon', 'bakery', 'Maison Violette', 4.6, 'Place des Corps Saints, 84000 Avignon, France', '훌륭한 빵과 페이스트리로 유명한 아비뇽의 전통 베이커리', 'Traditional Avignon bakery known for exceptional bread and pastries'),
  place('avignon-cafe-1', 'avignon', 'cafe', 'Bella Ciao – Boulangerie Utopiste', 4.5, 'Avignon, 84000, France', '통곡물 빵과 갓 만든 샌드위치로 유명한 아비뇽의 베이커리 카페', 'Avignon bakery café known for whole-grain bread and made-to-order sandwiches'),

  // —— toulouse ——
  place('toulouse-fine_dining-1', 'toulouse', 'fine_dining', 'Michel Sarran', 4.6, '21 Boulevard Armand Duportal, 31000 Toulouse', '미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant.'),
  place('toulouse-bakery-1', 'toulouse', 'bakery', 'La Boulange Saint Georges', 4.6, '21 Rue Charles de Rémusat, 31000 Toulouse, France', '툴루즈 최고의 팽 오 레쟁과 크루아상으로 유명한 베이커리', 'Toulouse bakery known for some of the best pain au raisin and croissants in the city'),
  place('toulouse-cafe-1', 'toulouse', 'cafe', 'L\'Autre Salon de Thé', 4.5, '7 Pl. de la Patte d\'Oie, 31300 Toulouse, France', '매력적인 분위기의 툴루즈 티살롱', 'Charming tea salon in Toulouse'),

  // —— montpellier ——
  place('montpellier-fine_dining-1', 'montpellier', 'fine_dining', 'Le Jardin des Sens', 4.6, 'Place de la Canourgue, 34000 Montpellier', '지중해 정원 뷰의 미쉐린 레스토랑.', 'Michelin restaurant with Mediterranean garden views.'),
  place('montpellier-bakery-1', 'montpellier', 'bakery', 'Au Rythme du Pain', 4.6, '2 Rue de la Carbonnerie, 34000 Montpellier, France', '100% 유기농 재료로 빵을 만드는 몽펠리에의 베이커리', 'Montpellier bakery celebrating bread-making with 100% organic ingredients'),
  place('montpellier-cafe-1', 'montpellier', 'cafe', 'PANA Boulangerie', 4.6, 'Montpellier, 34000, France', '포카차와 사워도우로 정평이 난 몽펠리에의 베이커리 카페', 'Highly recommended Montpellier bakery café known for focaccia and sourdough'),

  // —— dijon ——
  place('dijon-fine_dining-1', 'dijon', 'fine_dining', 'L\'Essentiel', 4.6, '12 Rue Audra, 21000 Dijon', '계절 메뉴의 모던 프렌치 요리.', 'Modern French cuisine with a seasonal menu.'),
  place('dijon-bakery-1', 'dijon', 'bakery', 'Jean-Rémi Gallet\'s Bakery', 4.6, '19 Av. Gustave Eiffel, 21000 Dijon, France', '지역 친환경 재료로 만든 100% 홈메이드 페이스트리로 유명한 디종의 베이커리', 'Dijon bakery known for 100% homemade pastries using local, eco-friendly ingredients'),
  place('dijon-cafe-1', 'dijon', 'cafe', 'Patisserie-Café', 4.4, '2 Rue Jean Jacques Rousseau, 21000 Dijon, France', '갓 구운 크루아상과 팽오쇼콜라를 즐길 수 있는 디종의 카페', 'Dijon café offering fresh croissants, pastries and pain au chocolat'),

  // —— chamonix ——
  place('chamonix-fine_dining-1', 'chamonix', 'fine_dining', 'Restaurant Albert 1er', 4.6, '38 Route du Bouchet, 74400 Chamonix-Mont-Blanc', '1903년부터 이어온 전통 레스토랑.', 'Traditional restaurant serving since 1903.'),

  place('chamonix-bakery-1', 'chamonix', 'bakery', 'Le Fournil Chamoniard', 4.5, '195 Av. de l\'Aiguille du Midi, 74400 Chamonix-Mont-Blanc, France', '지역 주민과 방문객 모두에게 사랑받는 샤모니의 베이커리', 'Popular Chamonix bakery beloved by locals and visitors alike'),
  place('chamonix-cafe-1', 'chamonix', 'cafe', 'Café Tartine', 4.5, 'Chamonix, 74400, France', '직접 구운 두꺼운 빵 위에 타르틴을 올려주는 샤모니 중심가의 카페', 'Café in the heart of Chamonix known for tartines on thick house-baked bread'),
]
