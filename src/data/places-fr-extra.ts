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
  place('marseille-fine_dining-2', 'marseille', 'fine_dining', 'Une Table au Sud', 4.5, '2 Quai du Port, 13002 Marseille', '구항구 전망의 미슐랭 1스타 레스토랑, 부야베스로 유명.', 'One-Michelin-star restaurant overlooking the Old Port, known for its bouillabaisse.', { reviewCount: 2612 }),
  place('marseille-fine_dining-3', 'marseille', 'fine_dining', 'Chez Madie Les Galinettes', 4.3, '138 Quai du Port, 13002 Marseille', '1995년부터 이어온 구항구뷰 프로방스 로컬 식당, 부야베스로 유명.', 'Provençal local restaurant overlooking the Old Port, operating since 1995, known for bouillabaisse.'),
  place('marseille-fine_dining-4', 'marseille', 'fine_dining', 'Chez Fonfon', 4.9, '140 Rue du Vallon des Auffes, 13007 Marseille', '발롱 데 오프 어촌의 전통 부야베스 명소.', 'Traditional bouillabaisse restaurant in the fishing cove of Vallon des Auffes.', { reviewCount: 8631 }),
  place('marseille-fine_dining-5', 'marseille', 'fine_dining', 'Restaurant Péron', 4.3, '56 Corniche Président John Fitzgerald Kennedy, 13007 Marseille', '1885년부터 이어온 마르세유에서 가장 오래된 레스토랑, 해안 전망.', "Marseille's oldest continuously operating restaurant, since 1885, with sweeping coastal views."),
  place('marseille-bakery-1', 'marseille', 'bakery', 'Le Four des Navettes', 4.5, '136 Rue Sainte, 13007 Marseille, France', '1781년부터 이어온 마르세유에서 가장 오래된 베이커리', 'Marseille\'s oldest bakery, operating since 1781'),
  place('marseille-bakery-2', 'marseille', 'bakery', 'Le Bar à Pain MARSEILLE', 3.9, '18 Cours Joseph Thierry, 13001 Marseille', '유기농 밀가루로 만든 빵과 페이스트리로 유명한 베이커리.', 'Bakery known for bread and pastries made with organic flour.', { reviewCount: 2599 }),
  place('marseille-cafe-1', 'marseille', 'cafe', 'Sylvain Depuichaffray', 4.5, 'Marseille, France', '훌륭한 커피로 정평이 난 마르세유의 인기 카페', 'Popular Marseille café praised for its excellent coffee'),
  place('marseille-cafe-2', 'marseille', 'cafe', 'Torréfaction Noailles', 4.3, '56 la Canebière, 13001 Marseille', '1927년부터 이어온 가족 운영 커피 로스터리.', 'Family-run coffee roastery operating since 1927.', { reviewCount: 179 }),
  place('marseille-korean-1', 'marseille', 'korean', 'Ma.Ma.Co', 4.8, '14 Rue Corneille, 13001 Marseille', '마르세유 오페라 인근의 한식당, 떡볶이·비빔밥·프라이드치킨 등.', 'Korean restaurant near the Marseille Opera serving tteokbokki, bibimbap, fried chicken and more.', { reviewCount: 88 }),
  place('marseille-korean-2', 'marseille', 'korean', 'Busan Castellane', 4.6, '6 Rue du Rouet, 13006 Marseille', '카스텔란 지구의 한국식 바베큐 전문점, 자가제 김치.', 'Korean BBQ specialist in the Castellane district, known for homemade kimchi.', { reviewCount: 650 }),

  // —— nice ——
  place('nice-fine_dining-1', 'nice', 'fine_dining', 'Le Chantecler', 4.6, '37 Promenade des Anglais, 06000 Nice', '네그레스코 호텔의 미식 레스토랑.', 'Fine dining at the Hotel Negresco.'),
  place('nice-fine_dining-2', 'nice', 'fine_dining', 'Chez Pipo', 4.5, '13 Rue Bavastro, 06300 Nice', '1923년부터 이어온 소카(병아리콩 팬케이크) 명소, 장작 오븐 사용.', "Nice's iconic socca (chickpea pancake) spot since 1923, cooked in a wood-fired oven."),
  place('nice-fine_dining-3', 'nice', 'fine_dining', "Chez Thérésa", 4.0, '28 Rue Droite, 06300 Nice', '1925년부터 이어온 니스 구시가의 전통 소카 노점.', "Traditional socca stall in Vieux Nice, serving since 1925."),
  place('nice-fine_dining-4', 'nice', 'fine_dining', "La Socca d'Or", 4.3, '45 Rue Bonaparte, 06300 Nice', '1989년부터 이어온 니스 로컬 요리 전문점.', 'Nice specialties restaurant serving locals and visitors since 1989.'),
  place('nice-bakery-1', 'nice', 'bakery', 'Pâtisserie Canet', 4.6, '25 Boulevard Gambetta, 06000 Nice, France', '니스 최고의 페이스트리로 꼽히는 제과점', 'Widely regarded as having the best pastries in Nice'),
  place('nice-bakery-2', 'nice', 'bakery', 'Boulangerie Jeannot', 4.0, '8 Rue Saint-François de Paule, 06300 Nice', '니스 오페라하우스 인근의 구시가 베이커리, 크루아상으로 유명.', "Old Town bakery near the Nice Opera House, known for its croissants.", { reviewCount: 1212 }),
  place('nice-cafe-1', 'nice', 'cafe', 'Mama Baker', 4.5, '13 Rue de Lépante, 06000 Nice, France', '초콜릿 번으로 유명한 니스의 유기농 베이커리 카페', 'Organic Nice bakery café known for its unrivaled chocolate buns'),
  place('nice-cafe-2', 'nice', 'cafe', 'Maison Karlie', 4.8, '36 Rue Pastorelli, 06000 Nice', '2022년부터 이어온 마이크로 로스터리 겸 카페.', 'Micro-roastery and coffeeshop operating since 2022.'),
  place('nice-korean-1', 'nice', 'korean', 'Sixsa', 4.5, '9 Rue Chauvain, 06000 Nice', '2020년부터 이어온 한식당, 비빔밥·불고기 등.', 'Korean restaurant since 2020 serving bibimbap, bulgogi and more.', { reviewCount: 728 }),

  // —— bordeaux ——
  place('bordeaux-fine_dining-1', 'bordeaux', 'fine_dining', 'Le Cent 33', 4.6, '133 Rue du Jardin public, 33000 Bordeaux', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),
  place('bordeaux-fine_dining-2', 'bordeaux', 'fine_dining', 'La Tupina', 4.6, '6 Rue Porte de la Monnaie, 33000 Bordeaux', '전통 화덕 요리로 유명한 보르도의 대표 레스토랑.', 'Bordeaux institution known for cooking over a traditional open fire.', { reviewCount: 4059 }),
  place('bordeaux-fine_dining-3', 'bordeaux', 'fine_dining', 'Le Bouchon Bordelais', 4.7, '2 Rue Courbin, 33000 Bordeaux', '창의적인 테이스팅 메뉴로 호평받는 비스트로.', 'Bistro praised for its creative, artfully presented tasting menus.'),
  place('bordeaux-bakery-1', 'bordeaux', 'bakery', 'Cassonade', 4.5, 'Rue Saint-James, 33000 Bordeaux, France', '그로스 클로슈 종탑 인근의 유명 보르도 베이커리', 'Renowned Bordeaux bakery near the Grosse Cloche belfry'),
  place('bordeaux-bakery-2', 'bordeaux', 'bakery', 'Boulangerie Louis Lamour', 4.5, '7 Rue Ravez, 33000 Bordeaux', '보르도 중심가의 정통 베이커리, 매일 아침 신선하게 굽는다.', 'Traditional bakery in central Bordeaux, everything baked fresh each morning.', { reviewCount: 939 }),
  place('bordeaux-cafe-1', 'bordeaux', 'cafe', 'Goûtu par Oven Heaven', 4.6, 'Marché des Capucins, 33000 Bordeaux, France', '갓 구운 크루아상과 훌륭한 커피로 보르도 최고로 꼽히는 카페', 'Widely regarded as Bordeaux\'s best café, with fresh croissants and expertly crafted coffee'),
  place('bordeaux-cafe-2', 'bordeaux', 'cafe', 'Black List Café', 4.7, '27 Place Pey Berland, 33000 Bordeaux', '페이 베를랑 광장 인근의 보헤미안풍 커피숍, 브런치와 홈메이드 페이스트리.', 'Bohemian coffee shop near Place Pey Berland, known for brunch and homemade pastries.'),
  place('bordeaux-korean-1', 'bordeaux', 'korean', 'Mokoji Grill', 4.3, '45 Rue du Pas Saint Georges, 33000 Bordeaux', '보르도의 한국식 바비큐·와인 레스토랑.', 'Korean BBQ and wine restaurant in Bordeaux.', { reviewCount: 2012 }),
  place('bordeaux-korean-2', 'bordeaux', 'korean', 'Korea Box', 4.5, '4 Rue de Cursol, 33000 Bordeaux', '보르도의 한식당.', 'Korean restaurant in Bordeaux.', { reviewCount: 109 }),

  // —— strasbourg ——
  place('strasbourg-fine_dining-1', 'strasbourg', 'fine_dining', 'Restaurant Chez Yvonne', 4.5, '10 Rue du Sanglier, 67000 Strasbourg', '스트라스부르의 대표 전통 윈스튜브.', 'Strasbourg\'s iconic traditional winstub.'),
  place('strasbourg-fine_dining-2', 'strasbourg', 'fine_dining', 'Le Tire-Bouchon', 4.1, '5 Rue des Tailleurs de Pierre, 67000 Strasbourg', '미슐랭 빕구르망 선정, 대성당 인근의 전통 알자스 윈스튜브.', 'Michelin Bib Gourmand traditional Alsatian winstub near the Cathedral.', { reviewCount: 10536 }),
  place('strasbourg-fine_dining-3', 'strasbourg', 'fine_dining', 'Winstub Zuem Strissel', 4.5, '5 Place de la Grande Boucherie, 67000 Strasbourg', '1385년부터 이어온 스트라스부르에서 가장 오래된 윈스튜브.', "Strasbourg's oldest winstub, dating back to 1385."),
  place('strasbourg-fine_dining-4', 'strasbourg', 'fine_dining', "L'Atelier 116", 4.4, '116 Grand Rue, 67000 Strasbourg', '프티 프랑스 인근의 인기 베이커리 겸 레스토랑.', 'Popular bakery-restaurant near Petite France.', { reviewCount: 4657 }),
  place('strasbourg-bakery-1', 'strasbourg', 'bakery', 'La Gare\'Mandise', 4.4, '8 Place de la Gare, 67000 Strasbourg, France', '스트라스부르 기차역 앞의 베이커리 겸 살롱 드 테', 'Bakery and tea salon in front of Strasbourg\'s train station'),
  place('strasbourg-cafe-1', 'strasbourg', 'cafe', 'Chez Christian', 4.5, 'Rue Mercière, 67000 Strasbourg, France', '스트라스부르 대성당 옆의 고급 페이스트리·초콜릿 전문점', 'Upscale pastry and chocolate shop next to Strasbourg Cathedral'),
  place('strasbourg-cafe-2', 'strasbourg', 'cafe', 'Café Bretelles', 4.4, '36 Rue du Bain aux Plantes, 67000 Strasbourg', '2014년부터 이어온 스트라스부르 최초의 스페셜티 커피숍.', "Strasbourg's original specialty coffee shop, open since 2014."),
  place('strasbourg-korean-1', 'strasbourg', 'korean', 'Seoul Station', 4.8, '24 Rue des Frères, 67000 Strasbourg', '스트라스부르의 한식당.', 'Korean restaurant in Strasbourg.', { reviewCount: 1365 }),
  place('strasbourg-korean-2', 'strasbourg', 'korean', 'Miriné', 4.6, '3 Rue du 22 Novembre, 67000 Strasbourg', '스트라스부르의 한식당.', 'Korean restaurant in Strasbourg.'),

  // —— annecy ——
  place('annecy-fine_dining-1', 'annecy', 'fine_dining', 'Cozna', 4.6, '22 Faubourg Sainte-Claire, 74000 Annecy', '구시가의 우아하고 창의적인 요리.', 'Elegant, innovative cuisine in the Old Town.'),
  place('annecy-fine_dining-2', 'annecy', 'fine_dining', 'Savoie Bar', 4.5, '1 Place Saint François de Sales, 74000 Annecy', '19세기 말부터 이어온 사부아 가정식 레스토랑.', 'Savoyard home-style restaurant operating since the late 19th century.'),
  place('annecy-fine_dining-3', 'annecy', 'fine_dining', 'Ô Savoyard', 3.6, '1 Rue Perrière, 74000 Annecy', '라클렛·타르티플레트·퐁뒤 등 사부아 전통 요리 전문점.', 'Restaurant specializing in traditional Savoyard dishes — raclette, tartiflette, fondue.'),
  place('annecy-bakery-1', 'annecy', 'bakery', 'Boulangerie Rouge', 4.5, 'Annecy, 74000, France', '사부아식 특산 빵으로 유명한 안시의 인기 베이커리', 'Popular Annecy bakery known for Savoie specialty breads'),
  place('annecy-bakery-2', 'annecy', 'bakery', 'Boulangerie Pâtisserie Alexandre Perchat', 4.5, '6 Rue Président Favre, 74000 Annecy', '구시가 중심의 아름다운 제과점, 크루아상으로 유명.', "Beautiful patisserie in the heart of the Old Town, known for its croissants."),
  place('annecy-cafe-1', 'annecy', 'cafe', 'Au Péché Mignon', 4.5, '9 Rue Jean-Jacques Rousseau, 74000 Annecy, France', '달콤한 디저트로 유명한 안시 구시가지의 아담한 카페', 'Quaint café in Annecy\'s old town serving delectable sweets'),
  place('annecy-cafe-2', 'annecy', 'cafe', 'Café Bunna', 4.8, '17 Rue Jean-Jacques Rousseau, 74000 Annecy', '안시 최고의 카페로 꼽히는 곳, 플랫화이트와 홈메이드 페이스트리.', "Widely regarded as Annecy's best café, known for its flat white and homemade pastries."),
  place('annecy-korean-1', 'annecy', 'korean', 'TOM', 4.9, '9 Avenue du Rhône, 74000 Annecy', '한식·일식·몽골식을 함께 선보이는 레스토랑, 김치찌개로 호평.', 'Restaurant blending Korean, Japanese and Mongolian cuisine, praised for its kimchi jjigae.', { reviewCount: 179 }),

  // —— avignon ——
  place('avignon-fine_dining-1', 'avignon', 'fine_dining', 'La Mirande', 4.6, '4 Place de la Mirande, 84000 Avignon', '클래식 프렌치 요리 레스토랑.', 'Classic French cuisine restaurant.'),
  place('avignon-fine_dining-2', 'avignon', 'fine_dining', 'Pollen', 4.8, '18 Rue Joseph Vernet, 84000 Avignon', '미슐랭 1스타, 제철 로컬 식재료를 활용한 서프라이즈 코스.', 'One-Michelin-star restaurant offering a surprise tasting menu built on seasonal local produce.', { reviewCount: 500 }),
  place('avignon-fine_dining-3', 'avignon', 'fine_dining', "L'Agapé", 4.4, '21 Place des Corps Saints, 84000 Avignon', '미슐랭 빕구르망 선정, 초록빛 광장 테라스가 있는 레스토랑.', 'Michelin Bib Gourmand restaurant with a leafy square terrace.', { reviewCount: 1895 }),
  place('avignon-bakery-1', 'avignon', 'bakery', 'Maison Violette', 4.6, 'Place des Corps Saints, 84000 Avignon, France', '훌륭한 빵과 페이스트리로 유명한 아비뇽의 전통 베이커리', 'Traditional Avignon bakery known for exceptional bread and pastries'),
  place('avignon-cafe-1', 'avignon', 'cafe', 'Bella Ciao – Boulangerie Utopiste', 4.5, 'Avignon, 84000, France', '통곡물 빵과 갓 만든 샌드위치로 유명한 아비뇽의 베이커리 카페', 'Avignon bakery café known for whole-grain bread and made-to-order sandwiches'),
  place('avignon-cafe-2', 'avignon', 'cafe', 'Café Tulipe', 4.5, '21 Rue des Trois Faucons, 84000 Avignon', '케멕스·니트로 콜드브루 등 다양한 추출 방식의 스페셜티 커피숍.', 'Specialty coffee shop offering chemex, nitro cold brew and more.'),
  place('avignon-korean-1', 'avignon', 'korean', 'BAPJIP', 4.8, '6 Place de la Principale, 84000 Avignon', '아비뇽 중심가의 한식당, 파전·비빔밥으로 호평.', 'Korean restaurant in central Avignon, praised for its pajeon and bibimbap.', { reviewCount: 13 }),

  // —— toulouse ——
  place('toulouse-fine_dining-1', 'toulouse', 'fine_dining', 'Michel Sarran', 4.6, '21 Boulevard Armand Duportal, 31000 Toulouse', '미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant.'),
  place('toulouse-fine_dining-2', 'toulouse', 'fine_dining', 'Le Colombier', 4.3, '14 Rue Bayard, 31000 Toulouse', '1874년부터 이어온 카술레 전문점, 툴루즈의 대표 노포.', 'Toulouse institution serving cassoulet since 1874.', { reviewCount: 1382 }),
  place('toulouse-fine_dining-3', 'toulouse', 'fine_dining', 'Émile', 4.4, '13 Place Saint-Georges, 31000 Toulouse', '1947년부터 이어온 남서프랑스 요리 전문점, 오리콩피 카술레로 유명.', "South-West French restaurant since 1947, known for its duck confit cassoulet.", { reviewCount: 3648 }),
  place('toulouse-bakery-1', 'toulouse', 'bakery', 'La Boulange Saint Georges', 4.6, '21 Rue Charles de Rémusat, 31000 Toulouse, France', '툴루즈 최고의 팽 오 레쟁과 크루아상으로 유명한 베이커리', 'Toulouse bakery known for some of the best pain au raisin and croissants in the city'),
  place('toulouse-cafe-1', 'toulouse', 'cafe', 'L\'Autre Salon de Thé', 4.5, '7 Pl. de la Patte d\'Oie, 31300 Toulouse, France', '매력적인 분위기의 툴루즈 티살롱', 'Charming tea salon in Toulouse'),
  place('toulouse-cafe-2', 'toulouse', 'cafe', 'La Fiancée', 4.6, '54 Rue Peyrolières, 31000 Toulouse', '테라스와 홈메이드 시럽 커피로 인기 있는 브런치 카페.', 'Popular brunch café known for its terrace and homemade-syrup coffees.'),
  place('toulouse-korean-1', 'toulouse', 'korean', 'Séoul Restaurant Coréen', 4.2, 'Toulouse, 31000, France', '툴루즈에서 유일하게 한국식 바베큐를 선보이는 레스토랑.', "Toulouse's only restaurant offering Korean barbecue.", { reviewCount: 703 }),
  place('toulouse-korean-2', 'toulouse', 'korean', 'Hwaban', 4.7, '1 Place Riquet, 31000 Toulouse', '한국 길거리 음식 전문점, 비빔밥으로 호평.', 'Korean street food specialist, praised for its bibimbap.'),

  // —— montpellier ——
  place('montpellier-fine_dining-1', 'montpellier', 'fine_dining', 'Le Jardin des Sens', 4.6, 'Place de la Canourgue, 34000 Montpellier', '지중해 정원 뷰의 미쉐린 레스토랑.', 'Michelin restaurant with Mediterranean garden views.'),
  place('montpellier-fine_dining-2', 'montpellier', 'fine_dining', 'Leclère', 4.6, '6 Rue des Écoles Laïques, 34000 Montpellier', '미슐랭 스타 레스토랑, 매일 들어오는 신선한 식재료로 짠 단일 코스.', 'Michelin-starred restaurant serving a single tasting menu built on ultra-fresh daily produce.', { reviewCount: 2228 }),
  place('montpellier-fine_dining-3', 'montpellier', 'fine_dining', 'Bistrot des Arceaux', 4.4, '25 Rue Hippolyte, 34000 Montpellier', '아르소 지구의 아늑한 비스트로, 홈메이드 요리로 호평.', 'Cozy bistro in the Arceaux district, praised for its homemade dishes.', { reviewCount: 304 }),
  place('montpellier-bakery-1', 'montpellier', 'bakery', 'Au Rythme du Pain', 4.6, '2 Rue de la Carbonnerie, 34000 Montpellier, France', '100% 유기농 재료로 빵을 만드는 몽펠리에의 베이커리', 'Montpellier bakery celebrating bread-making with 100% organic ingredients'),
  place('montpellier-cafe-1', 'montpellier', 'cafe', 'PANA Boulangerie', 4.6, 'Montpellier, 34000, France', '포카차와 사워도우로 정평이 난 몽펠리에의 베이커리 카페', 'Highly recommended Montpellier bakery café known for focaccia and sourdough'),
  place('montpellier-cafe-2', 'montpellier', 'cafe', 'Café BUN', 4.6, '5 Rue des Étuves, 34000 Montpellier', '몽펠리에의 서드웨이브 스페셜티 로스터리.', "Montpellier's third-wave specialty coffee roastery.", { reviewCount: 822 }),
  place('montpellier-korean-1', 'montpellier', 'korean', 'Umami - La Cinquième Saveur', 4.7, 'Montpellier, 34000, France', '2017년 마스터셰프 코리아 출신 셰프가 연 한·일·프 퓨전 비스트로노미, 비빔밥 우마미로 유명.', "Korean-Japanese-French fusion bistronomy opened in 2017 by a former MasterChef Korea finalist, known for its Bibimbap Umami.", { reviewCount: 305 }),

  // —— dijon ——
  place('dijon-fine_dining-1', 'dijon', 'fine_dining', 'L\'Essentiel', 4.6, '12 Rue Audra, 21000 Dijon', '계절 메뉴의 모던 프렌치 요리.', 'Modern French cuisine with a seasonal menu.'),
  place('dijon-fine_dining-2', 'dijon', 'fine_dining', "DZ'envies", 4.0, '12 Rue Odebert, 21000 Dijon', '디종 중앙시장 맞은편의 비스트로노미, 계절 시장 식재료 활용.', "Bistronomy restaurant opposite Dijon's covered market, built on seasonal market produce.", { reviewCount: 8810 }),
  place('dijon-bakery-1', 'dijon', 'bakery', 'Jean-Rémi Gallet\'s Bakery', 4.6, '19 Av. Gustave Eiffel, 21000 Dijon, France', '지역 친환경 재료로 만든 100% 홈메이드 페이스트리로 유명한 디종의 베이커리', 'Dijon bakery known for 100% homemade pastries using local, eco-friendly ingredients'),
  place('dijon-bakery-2', 'dijon', 'bakery', "Tartin'Art", 4.2, '8 Rue Musette, 21000 Dijon', '다양한 빵과 페이스트리, 가성비 좋은 아침 세트로 유명한 베이커리.', 'Bakery known for its wide bread and pastry selection and good-value breakfast sets.', { reviewCount: 618 }),
  place('dijon-cafe-1', 'dijon', 'cafe', 'Patisserie-Café', 4.4, '2 Rue Jean Jacques Rousseau, 21000 Dijon, France', '갓 구운 크루아상과 팽오쇼콜라를 즐길 수 있는 디종의 카페', 'Dijon café offering fresh croissants, pastries and pain au chocolat'),
  place('dijon-cafe-2', 'dijon', 'cafe', 'Espresso-T', 4.6, '21 Rue de la Poste, 21000 Dijon', '프랑스 바리스타 챔피언십 결선 진출자가 운영하는 커피숍, 대만식 버블티도 인기.', 'Coffee shop run by a French barista championship finalist, also known for Taiwanese bubble tea.', { reviewCount: 142 }),
  place('dijon-korean-1', 'dijon', 'korean', 'Épicerie Coréenne', 4.6, '65 Rue Monge, 21000 Dijon', '한국 식료품점 겸 식당, 김치볶음밥·비빔밥 등 100% 홈메이드 한식.', 'Korean grocery store and eatery serving 100% homemade Korean dishes like kimchi fried rice and bibimbap.'),

  // —— chamonix ——
  place('chamonix-fine_dining-1', 'chamonix', 'fine_dining', 'Restaurant Albert 1er', 4.6, '38 Route du Bouchet, 74400 Chamonix-Mont-Blanc', '1903년부터 이어온 전통 레스토랑.', 'Traditional restaurant serving since 1903.'),
  place('chamonix-fine_dining-2', 'chamonix', 'fine_dining', 'Le Monchu', 4.4, '1 Rue Lyret, 74400 Chamonix-Mont-Blanc', '샤모니 중심가의 사부아 요리 전문점, 퐁뒤·라클렛으로 유명.', 'Savoyard restaurant in central Chamonix, known for fondue and raclette.', { reviewCount: 5297 }),
  place('chamonix-fine_dining-3', 'chamonix', 'fine_dining', 'La Calèche', 4.2, '18 Rue du Docteur Paccard, 74400 Chamonix-Mont-Blanc', '옛 석조 농가 건물의 전통 사부아 요리 전문점, 20여 가지 사부아 요리.', 'Traditional Savoyard restaurant in an old stone farmhouse, offering over 20 Savoyard dishes.', { reviewCount: 4347 }),
  place('chamonix-bakery-1', 'chamonix', 'bakery', 'Le Fournil Chamoniard', 4.5, '195 Av. de l\'Aiguille du Midi, 74400 Chamonix-Mont-Blanc, France', '지역 주민과 방문객 모두에게 사랑받는 샤모니의 베이커리', 'Popular Chamonix bakery beloved by locals and visitors alike'),
  place('chamonix-bakery-2', 'chamonix', 'bakery', "Boulangerie L'Al'Pain", 4.4, '620 Route du Plagnolet, 74400 Chamonix-Mont-Blanc', '수상 경력의 크루아상으로 유명한 아르장티에르의 베이커리.', 'Award-winning bakery in Argentière known for its croissants.'),
  place('chamonix-cafe-1', 'chamonix', 'cafe', 'Café Tartine', 4.5, 'Chamonix, 74400, France', '직접 구운 두꺼운 빵 위에 타르틴을 올려주는 샤모니 중심가의 카페', 'Café in the heart of Chamonix known for tartines on thick house-baked bread'),
  place('chamonix-cafe-2', 'chamonix', 'cafe', 'Moody Coffee Roasters', 4.9, "195 Avenue de l'Aiguille du Midi, 74400 Chamonix-Mont-Blanc", '샤모니의 소규모 스페셜티 커피 로스터리 겸 베이커리.', 'Small-batch specialty coffee roastery and artisanal bakery in Chamonix.', { reviewCount: 67 }),
  place('chamonix-korean-1', 'chamonix', 'korean', 'Munchie', 4.4, '87 Rue des Moulins, 74400 Chamonix-Mont-Blanc', '샤모니 중심가의 한식당, 해물 전골로 호평.', 'Korean restaurant in central Chamonix, praised for its seafood hotpot.', { reviewCount: 706 }),
]
