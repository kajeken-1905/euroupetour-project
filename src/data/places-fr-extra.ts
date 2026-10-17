import { place } from './placeFactory'
import type { Place } from '../types'

export const placesFRExtra: Place[] = [
  // —— paris ——
  place('paris-fine_dining-1', 'paris', 'fine_dining', 'Arpège', '84 Rue de Varenne, 75007 Paris, France', '셰프 알랭 파사르의 채소 중심 미쉐린 3스타 레스토랑. 주말은 쉽니다.', 'Three-Michelin-star vegetable-led restaurant of chef Alain Passard; closed at weekends.', { michelin: 'star3', image: '/places/paris-fine_dining-1.jpg' }),
  place('paris-fine_dining-2', 'paris', 'fine_dining', 'Le Comptoir du Relais', "Carrefour de l'Odéon, 75006 Paris, France", '비스트로 클래식.', 'Classic bistro.', { image: '/places/paris-fine_dining-2.jpg' }),
  place('paris-fine_dining-3', 'paris', 'fine_dining', 'Septime', '80 Rue de Charonne, 75011 Paris, France', '모던 프렌치 코스.', 'Modern French tasting.'),
  place('paris-fine_dining-4', 'paris', 'fine_dining', 'Bouillon Chartier', '7 Rue du Faubourg Montmartre, 75009 Paris, France', '전통 부용 식당.', 'Historic bouillon canteen.', { image: '/places/paris-fine_dining-4.jpg' }),
  place('paris-fine_dining-5', 'paris', 'fine_dining', 'L\'Ami Jean', '27 Rue Malar, 75007 Paris', '바스크 감성 비스트로.', 'Basque-spirited bistro.', { image: '/places/paris-fine_dining-5.jpg' }),
  place('paris-bakery-1', 'paris', 'bakery', 'Du Pain et des Idées', 'Rue de Marseille, 75010 Paris, France', '사워도우와 페이스트리를 파는 빵집.', 'Bakery with sourdough and pastries.'),
  place('paris-bakery-2', 'paris', 'bakery', 'Poilâne', '38 Rue Debelleyme, 75003 Paris, France', '파리의 빵집.', 'Bakery in Paris.', { image: '/places/paris-bakery-2.jpg' }),
  place('paris-bakery-3', 'paris', 'bakery', 'Stohrer', '51 Rue Montorgueil, 75002 Paris, France', '역사적 파티스리.', 'Historic pâtisserie.', { image: '/places/paris-bakery-3.jpg' }),
  place('paris-bakery-4', 'paris', 'bakery', 'Blé Sucré', '7 Rue Antoine Vollon, 75012 Paris, France', '크루아상·타르트.', 'Croissants and tarts.'),
  place('paris-bakery-5', 'paris', 'bakery', 'Boulangerie Utopie', '20 Rue Jean-Pierre Timbaud, 75011 Paris, France', '11구의 빵집.', 'Bakery in the 11th arrondissement.'),
  place('paris-bakery-6', 'paris', 'bakery', 'Ladurée Royale', '16 Rue Royale, 75008 Paris, France', '1862년 창업한 마카롱의 대명사, 마들렌 성당 근처의 본점 살롱 드 테', 'The macaron house founded in 1862 — its original tea room near La Madeleine', { image: '/places/paris-bakery-6.jpg' }),
  place('paris-cafe-1', 'paris', 'cafe', 'Café de Flore', 'Rue Saint-Benoît, 75006 Paris, France', '생제르맹 클래식 카페.', 'Classic Saint-Germain café.', { image: '/places/paris-cafe-1.jpg' }),
  place('paris-cafe-2', 'paris', 'cafe', 'Beans on Fire', 'Route de la Porte Saint-James, 75116 Paris, France', '스페셜티 커피.', 'Specialty coffee.'),
  place('paris-cafe-3', 'paris', 'cafe', 'Coutume Café', '47 Rue de Babylone, 75007 Paris, France', '로스터리 카페.', 'Roastery café.', { image: '/places/paris-cafe-3.jpg' }),
  place('paris-cafe-4', 'paris', 'cafe', 'Café Kitsuné', "Avenue de l'Opéra, 75002 Paris, France", '트렌디 카페.', 'Trendy café.', { image: '/places/paris-cafe-4.jpg' }),
  place('paris-cafe-5', 'paris', 'cafe', 'Ten Belles', '10 Rue de la Grange aux Belles, 75010 Paris, France', '생마르탱 운하 근처의 스페셜티 커피 로스터리.', 'Specialty coffee roastery near the Canal Saint-Martin.', { image: '/places/paris-cafe-5.jpg' }),
  place('paris-korean-1', 'paris', 'korean', 'La Table de Mee', '6 Rue des Ciseaux, 75006 Paris', '파리의 한식당.', 'Korean restaurant in Paris.'),
  place('paris-korean-2', 'paris', 'korean', 'Guibine', '44 Rue Sainte-Anne, 75002 Paris, France', '생트안 거리의 한식당.', 'Korean restaurant on Rue Sainte-Anne.', { image: '/places/paris-korean-2.jpg' }),
  place('paris-korean-3', 'paris', 'korean', 'MariMari', "23 Rue d'Antin, 75002 Paris, France", '김밥·떡볶이 등 한국식 길거리 분식을 선보이는 파리의 캐주얼 한식당', 'Casual Paris Korean eatery specializing in street-food bunsik like kimbap and tteokbokki'),
  place('paris-korean-4', 'paris', 'korean', 'K-CHIMAEK', '139 Rue de Tolbiac, 75013 Paris, France', '치킨·맥주와 떡볶이를 내는 한식 분식집.', 'Korean snack bar serving fried chicken with beer and tteokbokki.'),
  place('paris-korean-5', 'paris', 'korean', 'Kimchi', '5 Rue de Louvois, 75002 Paris, France', '생트안 지구 인근의 정통 한식당', "Authentic Korean restaurant near Paris's Rue Sainte-Anne district"),

  // —— lyon ——
  place('lyon-fine_dining-1', 'lyon', 'fine_dining', 'La Mère Brazier', '12 Rue Royale, 69001 Lyon', '리옹의 역사적인 미쉐린 2스타 레스토랑. 여는 날이 적으니 미리 확인하세요.', 'Historic two-Michelin-star restaurant in Lyon; open few days, so check ahead.', { michelin: 'star2', image: '/places/lyon-fine_dining-1.jpg' }),
  place('lyon-fine_dining-2', 'lyon', 'fine_dining', 'Café des Fédérations', '8 Rue du Major Martin, 69001 Lyon', '150년 넘는 역사의 정통 리옹 부숑.', 'Authentic Lyon bouchon with over 150 years of history.', { image: '/places/lyon-fine_dining-2.jpg' }),
  place('lyon-fine_dining-3', 'lyon', 'fine_dining', "Le Poêlon d'Or", "29 Rue des Remparts d'Ainay, 69002 Lyon", '아네 지구의 부숑(리옹식 식당). 리옹식 샐러드가 있습니다.', 'Bouchon in the Ainay district serving Lyon salad.'),
  place('lyon-fine_dining-4', 'lyon', 'fine_dining', 'Bouchon Les Lyonnais', '19 Rue de la Bombarde, 69005 Lyon', '비외 리옹의 전통 부숑 레스토랑.', 'Traditional bouchon restaurant in Vieux Lyon.'),
  place('lyon-bakery-1', 'lyon', 'bakery', 'Boulangerie du Palais', '8 Rue du Palais de Justice, 69005 Lyon, France', '리옹 구시가지 생장 거리에 위치한 분홍빛 창문의 베이커리', 'Bakery with a distinctive pink window in Lyon\'s old town on Rue Saint Jean', { image: '/places/lyon-bakery-1.jpg' }),
  place('lyon-bakery-2', 'lyon', 'bakery', 'Boulangerie Saint Paul', '8 Place Saint-Paul, 69005 Lyon, France', '생폴 광장의 빵집.', 'Bakery on Place Saint-Paul.'),
  place('lyon-bakery-3', 'lyon', 'bakery', 'Pralus La Boulangerie', '18 Quai Saint-Antoine, 69002 Lyon, France', '초콜릿 브랜드 프랄뤼가 운영하는 빵집.', 'Bakery run by the Pralus chocolate house.'),
  place('lyon-bakery-4', 'lyon', 'bakery', 'Aux Merveilleux De Fred', '32 Rue Grenette, 69002 Lyon, France', '머랭 케이크 메르베유를 파는 프랑스 제과 체인.', 'French pastry chain selling meringue-based merveilleux.', { image: '/places/lyon-bakery-4.jpg' }),
  place('lyon-bakery-5', 'lyon', 'bakery', 'partisan boulanger', "2 Rue du Chariot d'Or, 69004 Lyon, France", '리옹의 아르티장 빵집.', 'Artisan bakery in Lyon.'),
  place('lyon-cafe-1', 'lyon', 'cafe', 'Slake Coffee House', '9 Rue de l\'Ancienne Préfecture, 69002 Lyon, France', '2015년부터 스페셜티 커피와 홈메이드 페이스트리를 선보이는 리옹의 카페', 'Lyon café serving specialty coffee and homemade pastries since 2015'),
  place('lyon-cafe-2', 'lyon', 'cafe', 'Puzzle Café', '4 rue de la Poulaillerie, 69002 Lyon', '유럽 각지의 로스터리를 순환 소개하는 스페셜티 커피.', 'Specialty coffee shop rotating craft roasters from across Europe.'),
  place('lyon-cafe-3', 'lyon', 'cafe', 'Café Mokxa', '5 Rue Bellecordière, 69002 Lyon', '2011년 시작한 리옹의 스페셜티 커피 로스터리.', 'Lyon specialty coffee roastery, started in 2011.'),
  place('lyon-korean-1', 'lyon', 'korean', 'Kimchique', '74 Rue Garibaldi, 69006 Lyon', '일식과 한식을 함께 내는 식당.', 'Restaurant serving Japanese and Korean food.'),

  // —— marseille ——
  place('marseille-fine_dining-1', 'marseille', 'fine_dining', 'Le Petit Nice Passedat', '17 Rue des Braves Anse de Maldormé, 13007 Marseille', '말도르메 해안의 미쉐린 3스타 해산물 레스토랑. 일·월요일은 쉽니다.', 'Three-Michelin-star seafood restaurant on the Anse de Maldormé; closed Sundays and Mondays.', { michelin: 'star3' }),
  place('marseille-fine_dining-2', 'marseille', 'fine_dining', 'Une Table au Sud', '2 Quai du Port, 13002 Marseille', '구항구가 보이는 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant overlooking the Old Port; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('marseille-fine_dining-3', 'marseille', 'fine_dining', 'Chez Madie Les Galinettes', '138 Quai du Port, 13002 Marseille', '구항구가 보이는 프로방스 식당(1995년부터). 부야베스가 있습니다.', 'Provençal restaurant overlooking the Old Port (since 1995) serving bouillabaisse.'),
  place('marseille-fine_dining-4', 'marseille', 'fine_dining', 'Chez Fonfon', '140 Rue du Vallon des Auffes, 13007 Marseille', '어촌 발롱 데 조프의 부야베스 식당.', 'Bouillabaisse restaurant in the fishing cove of Vallon des Auffes.', { image: '/places/marseille-fine_dining-4.jpg' }),
  place('marseille-fine_dining-5', 'marseille', 'fine_dining', 'Restaurant Péron', '56 Corniche Président John Fitzgerald Kennedy, 13007 Marseille', '1885년부터 이어진 해안 전망 레스토랑.', 'Restaurant with coastal views, operating since 1885.'),
  place('marseille-bakery-1', 'marseille', 'bakery', 'Le Four des Navettes', '136 Rue Sainte, 13007 Marseille, France', '1781년부터 이어진 마르세유의 빵집.', 'Marseille bakery operating since 1781.', { image: '/places/marseille-bakery-1.jpg' }),
  place('marseille-bakery-2', 'marseille', 'bakery', 'Le Bar à Pain MARSEILLE', '18 Cours Joseph Thierry, 13001 Marseille', '유기농 밀가루로 빵과 페이스트리를 굽는 빵집.', 'Bakery making bread and pastries with organic flour.'),
  place('marseille-cafe-1', 'marseille', 'cafe', 'Sylvain Depuichaffray', '66 Rue Grignan, 13006 Marseille, France', '마르세유의 커피 카페.', 'Coffee café in Marseille.'),
  place('marseille-cafe-2', 'marseille', 'cafe', 'Torréfaction Noailles', '56 la Canebière, 13001 Marseille', '1927년부터 이어온 가족 운영 커피 로스터리.', 'Family-run coffee roastery operating since 1927.'),
  place('marseille-korean-1', 'marseille', 'korean', 'Ma.Ma.Co', '14 Rue Corneille, 13001 Marseille', '마르세유 오페라 인근의 한식당, 떡볶이·비빔밥·프라이드치킨 등.', 'Korean restaurant near the Marseille Opera serving tteokbokki, bibimbap, fried chicken and more.'),
  place('marseille-korean-2', 'marseille', 'korean', 'Busan Castellane', '6 Rue du Rouet, 13006 Marseille', '카스텔란 지구의 한국식 바베큐 전문점, 자가제 김치.', 'Korean BBQ specialist in the Castellane district, known for homemade kimchi.'),

  // —— nice ——
  place('nice-fine_dining-1', 'nice', 'fine_dining', 'Le Chantecler', '37 Promenade des Anglais, 06000 Nice', '네그레스코 호텔의 미식 레스토랑.', 'Fine dining at the Hotel Negresco.'),
  place('nice-fine_dining-2', 'nice', 'fine_dining', 'Chez Pipo', '13 Rue Bavastro, 06300 Nice', '1923년부터 장작 오븐으로 소카(병아리콩 전병)를 굽는 가게.', 'Socca (chickpea pancake) shop baking in a wood-fired oven since 1923.', { image: '/places/nice-fine_dining-2.jpg' }),
  place('nice-fine_dining-3', 'nice', 'fine_dining', "Chez Thérésa", '28 Rue Droite, 06300 Nice', '1925년부터 이어온 니스 구시가의 전통 소카 노점.', "Traditional socca stall in Vieux Nice, serving since 1925."),
  place('nice-fine_dining-4', 'nice', 'fine_dining', "La Socca d'Or", '45 Rue Bonaparte, 06300 Nice', '1989년부터 이어온 니스 로컬 요리 전문점.', 'Nice specialties restaurant serving locals and visitors since 1989.'),
  place('nice-bakery-1', 'nice', 'bakery', 'Pâtisserie Canet', '25 Boulevard Gambetta, 06000 Nice, France', '니스의 제과점.', 'Pâtisserie in Nice.'),
  place('nice-bakery-2', 'nice', 'bakery', 'Boulangerie Jeannot', '8 Rue Saint-François de Paule, 06300 Nice', '니스 오페라 극장 근처 구시가의 빵집. 크루아상이 있습니다.', 'Old Town bakery near the Nice Opera House with croissants.'),
  place('nice-cafe-1', 'nice', 'cafe', 'Mama Baker', '13 Rue de Lépante, 06000 Nice, France', '초콜릿 번이 있는 니스의 유기농 빵집 겸 카페.', 'Organic Nice bakery café with chocolate buns.'),
  place('nice-cafe-2', 'nice', 'cafe', 'Maison Karlie', '36 Rue Pastorelli, 06000 Nice', '2022년부터 이어온 마이크로 로스터리 겸 카페.', 'Micro-roastery and coffeeshop operating since 2022.'),
  place('nice-korean-1', 'nice', 'korean', 'Sixsa', '9 Rue Chauvain, 06000 Nice', '2020년부터 이어온 한식당, 비빔밥·불고기 등.', 'Korean restaurant since 2020 serving bibimbap, bulgogi and more.'),

  // —— bordeaux ——
  place('bordeaux-fine_dining-1', 'bordeaux', 'fine_dining', 'Le Cent 33', '133 Rue du Jardin public, 33000 Bordeaux', '보르도의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant in Bordeaux; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('bordeaux-fine_dining-2', 'bordeaux', 'fine_dining', 'La Tupina', '6 Rue Porte de la Monnaie, 33000 Bordeaux', '전통 화덕 요리를 내는 보르도의 레스토랑.', 'Bordeaux restaurant cooking over an open fire.', { image: '/places/bordeaux-fine_dining-2.jpg' }),
  place('bordeaux-fine_dining-3', 'bordeaux', 'fine_dining', 'Le Bouchon Bordelais', '2 Rue Courbin, 33000 Bordeaux', '창의적인 테이스팅 메뉴로 호평받는 비스트로.', 'Bistro praised for its creative, artfully presented tasting menus.'),
  place('bordeaux-bakery-1', 'bordeaux', 'bakery', 'Cassonade', 'Rue Saint-James, 33000 Bordeaux, France', '그로스 클로슈 종탑 근처의 빵집.', 'Bakery near the Grosse Cloche belfry.', { image: '/places/bordeaux-bakery-1.jpg' }),
  place('bordeaux-bakery-2', 'bordeaux', 'bakery', 'Boulangerie Louis Lamour', '7 Rue Ravez, 33000 Bordeaux', '보르도 중심가의 정통 베이커리, 매일 아침 신선하게 굽는다.', 'Traditional bakery in central Bordeaux, everything baked fresh each morning.'),
  place('bordeaux-cafe-1', 'bordeaux', 'cafe', 'Goûtu par Oven Heaven', 'Marché des Capucins, 33000 Bordeaux, France', '갓 구운 크루아상과 커피가 있는 보르도의 카페.', 'Bordeaux café with fresh croissants and coffee.'),
  place('bordeaux-cafe-2', 'bordeaux', 'cafe', 'Black List Café', '27 Place Pey Berland, 33000 Bordeaux', '페이 베를랑 광장 인근의 보헤미안풍 커피숍, 브런치와 홈메이드 페이스트리.', 'Bohemian coffee shop near Place Pey Berland, known for brunch and homemade pastries.'),
  place('bordeaux-korean-1', 'bordeaux', 'korean', 'Mokoji Grill', '45 Rue du Pas Saint Georges, 33000 Bordeaux', '보르도의 한국식 바비큐·와인 레스토랑.', 'Korean BBQ and wine restaurant in Bordeaux.'),
  place('bordeaux-korean-2', 'bordeaux', 'korean', 'Korea Box', '4 Rue de Cursol, 33000 Bordeaux', '보르도의 한식당.', 'Korean restaurant in Bordeaux.'),

  // —— strasbourg ——
  place('strasbourg-fine_dining-1', 'strasbourg', 'fine_dining', 'Restaurant Chez Yvonne', '10 Rue du Sanglier, 67000 Strasbourg', '스트라스부르의 전통 윈스튜브(알자스 선술집).', 'Traditional winstub (Alsatian tavern) in Strasbourg.', { image: '/places/strasbourg-fine_dining-1.jpg' }),
  place('strasbourg-fine_dining-2', 'strasbourg', 'fine_dining', 'Le Tire-Bouchon', '5 Rue des Tailleurs de Pierre, 67000 Strasbourg', '대성당 근처의 전통 알자스 윈스튜브.', 'Traditional Alsatian winstub near the cathedral.', { image: '/places/strasbourg-fine_dining-2.jpg' }),
  place('strasbourg-fine_dining-3', 'strasbourg', 'fine_dining', 'Winstub Zuem Strissel', '5 Place de la Grande Boucherie, 67000 Strasbourg', '1385년 기록이 남은 스트라스부르의 윈스튜브.', 'Strasbourg winstub with records dating back to 1385.'),
  place('strasbourg-fine_dining-4', 'strasbourg', 'fine_dining', "L'Atelier 116", '116 Grand Rue, 67000 Strasbourg', '프티트 프랑스 근처의 빵집 겸 레스토랑.', 'Bakery-restaurant near Petite France.'),
  place('strasbourg-bakery-1', 'strasbourg', 'bakery', 'La Gare\'Mandise', '8 Place de la Gare, 67000 Strasbourg, France', '스트라스부르 기차역 앞의 베이커리 겸 살롱 드 테', 'Bakery and tea salon in front of Strasbourg\'s train station'),
  place('strasbourg-bakery-2', 'strasbourg', 'bakery', "L'Eden Libre de Gluten Strasbourg", '15 Place du Temple Neuf, 67000 Strasbourg, France', '스트라스부르의 글루텐프리 전문 베이커리.', 'Gluten-free specialty bakery in Strasbourg.'),
  place('strasbourg-bakery-3', 'strasbourg', 'bakery', 'Au Pain De Mon Grand-père', '1 Rue des Hallebardes, 67000 Strasbourg, France', '대성당 근처의 빵집.', 'Bakery near the cathedral.'),
  place('strasbourg-bakery-4', 'strasbourg', 'bakery', 'Les Mains Dans la Farine', '16 Rue du 22 Novembre, 67000 Strasbourg, France', '다양한 빵과 페이스트리를 갖춘 스트라스부르의 베이커리.', 'Strasbourg bakery with a wide selection of bread and pastries.'),
  place('strasbourg-cafe-1', 'strasbourg', 'cafe', 'Chez Christian', 'Rue Mercière, 67000 Strasbourg, France', '스트라스부르 대성당 옆의 고급 페이스트리·초콜릿 전문점', 'Upscale pastry and chocolate shop next to Strasbourg Cathedral', { image: '/places/strasbourg-cafe-1.jpg' }),
  place('strasbourg-cafe-2', 'strasbourg', 'cafe', 'Café Bretelles', '36 Rue du Bain aux Plantes, 67000 Strasbourg', '2014년 문을 연 스트라스부르의 스페셜티 커피숍.', 'Strasbourg specialty coffee shop, open since 2014.'),
  place('strasbourg-korean-1', 'strasbourg', 'korean', 'Seoul Station', '24 Rue des Frères, 67000 Strasbourg', '스트라스부르의 한식당.', 'Korean restaurant in Strasbourg.'),
  place('strasbourg-korean-2', 'strasbourg', 'korean', 'Miriné', '3 Rue du 22 Novembre, 67000 Strasbourg', '스트라스부르의 한식당.', 'Korean restaurant in Strasbourg.'),

  // —— annecy ——
  place('annecy-fine_dining-1', 'annecy', 'fine_dining', 'Cozna', '22 Faubourg Sainte-Claire, 74000 Annecy', '구시가의 우아하고 창의적인 요리.', 'Elegant, innovative cuisine in the Old Town.'),
  place('annecy-fine_dining-2', 'annecy', 'fine_dining', 'Savoie Bar', '1 Place Saint François de Sales, 74000 Annecy', '19세기 말부터 이어온 사부아 가정식 레스토랑.', 'Savoyard home-style restaurant operating since the late 19th century.'),
  place('annecy-fine_dining-3', 'annecy', 'fine_dining', 'Ô Savoyard', '1 Rue Perrière, 74000 Annecy', '라클렛·타르티플레트·퐁뒤 등 사부아 전통 요리 전문점.', 'Restaurant specializing in traditional Savoyard dishes — raclette, tartiflette, fondue.'),
  place('annecy-bakery-1', 'annecy', 'bakery', 'Boulangerie Rouge', 'Annecy, 74000, France', '사부아 지방 빵을 굽는 안시의 빵집.', 'Annecy bakery baking Savoie breads.'),
  place('annecy-bakery-2', 'annecy', 'bakery', 'Boulangerie Pâtisserie Alexandre Perchat', '6 Rue Président Favre, 74000 Annecy', '구시가 중심의 제과점. 크루아상이 있습니다.', 'Pâtisserie in the heart of the Old Town with croissants.'),
  place('annecy-cafe-1', 'annecy', 'cafe', 'Au Péché Mignon', '9 Rue Jean-Jacques Rousseau, 74000 Annecy, France', '디저트가 있는 안시 구시가의 작은 카페.', 'Small café in Annecy’s old town serving desserts.'),
  place('annecy-cafe-2', 'annecy', 'cafe', 'Café Bunna', '17 Rue Jean-Jacques Rousseau, 74000 Annecy', '플랫화이트와 홈메이드 페이스트리가 있는 안시의 카페.', 'Annecy café with flat whites and homemade pastries.'),
  place('annecy-korean-1', 'annecy', 'korean', 'TOM', '9 Avenue du Rhône, 74000 Annecy', '한식·일식·몽골식을 함께 선보이는 레스토랑, 김치찌개로 호평.', 'Restaurant blending Korean, Japanese and Mongolian cuisine, praised for its kimchi jjigae.'),

  // —— avignon ——
  place('avignon-fine_dining-1', 'avignon', 'fine_dining', 'La Mirande', '4 Place de la Mirande, 84000 Avignon', '클래식 프렌치 요리 레스토랑.', 'Classic French cuisine restaurant.', { image: '/places/avignon-fine_dining-1.jpg' }),
  place('avignon-fine_dining-2', 'avignon', 'fine_dining', 'Pollen', '18 Rue Joseph Vernet, 84000 Avignon', '제철 지역 재료로 서프라이즈 코스를 내는 레스토랑.', 'Restaurant serving a surprise set menu of seasonal local produce.'),
  place('avignon-fine_dining-3', 'avignon', 'fine_dining', "L'Agapé", '21 Place des Corps Saints, 84000 Avignon', '나무가 우거진 광장에 테라스가 있는 레스토랑.', 'Restaurant with a terrace on a leafy square.'),
  place('avignon-bakery-1', 'avignon', 'bakery', 'Maison Violette', 'Place des Corps Saints, 84000 Avignon, France', '빵과 페이스트리를 굽는 아비뇽의 전통 빵집.', 'Traditional Avignon bakery with bread and pastries.'),
  place('avignon-bakery-2', 'avignon', 'bakery', 'la PauZe | Boulangerie Pâtisseries Artisanale', '160 Avenue Pierre Semard, 84000 Avignon, France', '아비뇽의 아르티장 빵집.', 'Artisan bakery in Avignon.'),
  place('avignon-bakery-3', 'avignon', 'bakery', 'Les Saveurs des Sillons', '5 Boulevard Raspail, 84000 Avignon, France', '라스파유 대로의 빵집.', 'Bakery on Boulevard Raspail.'),
  place('avignon-bakery-4', 'avignon', 'bakery', 'The Taste Factory', '48 Rue de la Bonneterie, 84000 Avignon, France', '구시가의 베이커리.', 'Bakery in the old town of Avignon.'),
  place('avignon-bakery-5', 'avignon', 'bakery', "Boulangerie Saint-Ruf - l'épi d'or", '63 Avenue Saint-Ruf, 84000 Avignon, France', '생뤼프 지구의 동네 베이커리.', 'Neighborhood bakery in the Saint-Ruf district.'),
  place('avignon-cafe-1', 'avignon', 'cafe', 'Bella Ciao – Boulangerie Utopiste', 'Avignon, 84000, France', '통곡물 빵과 주문 즉시 만드는 샌드위치가 있는 빵집 겸 카페.', 'Bakery café with whole-grain bread and made-to-order sandwiches.'),
  place('avignon-cafe-2', 'avignon', 'cafe', 'Café Tulipe', '21 Rue des Trois Faucons, 84000 Avignon', '케멕스·니트로 콜드브루 등 다양한 추출 방식의 스페셜티 커피숍.', 'Specialty coffee shop offering chemex, nitro cold brew and more.'),
  place('avignon-korean-1', 'avignon', 'korean', 'BAPJIP', '6 Place de la Principale, 84000 Avignon', '아비뇽 중심가의 한식당, 파전·비빔밥으로 호평.', 'Korean restaurant in central Avignon, praised for its pajeon and bibimbap.'),

  // —— toulouse ——
  place('toulouse-fine_dining-1', 'toulouse', 'fine_dining', 'Michel Sarran', '21 Boulevard Armand Duportal, 31000 Toulouse', '셰프 미셸 사랑의 미쉐린 1스타 레스토랑. 주말은 쉽니다.', 'One-Michelin-star restaurant of chef Michel Sarran; closed at weekends.', { michelin: 'star1' }),
  place('toulouse-fine_dining-2', 'toulouse', 'fine_dining', 'Le Colombier', '14 Rue Bayard, 31000 Toulouse', '1874년부터 카술레를 내는 툴루즈 식당.', 'Toulouse restaurant serving cassoulet since 1874.'),
  place('toulouse-fine_dining-3', 'toulouse', 'fine_dining', 'Émile', '13 Place Saint-Georges, 31000 Toulouse', '남서 프랑스 요리 식당(1947년부터). 오리 콩피 카술레가 있습니다.', 'South-West French restaurant (since 1947) serving duck-confit cassoulet.'),
  place('toulouse-bakery-1', 'toulouse', 'bakery', 'La Boulange Saint Georges', '21 Rue Charles de Rémusat, 31000 Toulouse, France', '팽 오 레쟁과 크루아상을 굽는 툴루즈의 빵집.', 'Toulouse bakery with pain aux raisins and croissants.'),
  place('toulouse-bakery-2', 'toulouse', 'bakery', 'Les Frères Chapelier - Boulangerie Bio Artisanale', '23 Rue Léon Gambetta, 31000 Toulouse, France', '카피톨 인근의 유기농 장인 베이커리.', 'Organic artisan bakery near Place du Capitole.'),
  place('toulouse-bakery-3', 'toulouse', 'bakery', 'Boulangerie Maurice', '8 Grande Rue Nazareth, 31000 Toulouse, France', '툴루즈에서 베이커리.', 'Bakery in Toulouse.'),
  place('toulouse-bakery-4', 'toulouse', 'bakery', 'Boulangerie Pâtisserie Saint Aubin', '38 Rue Pierre-Paul Riquet, 31000 Toulouse, France', '생토뱅 지구의 빵집.', 'Bakery in the Saint-Aubin district.'),
  place('toulouse-bakery-5', 'toulouse', 'bakery', 'Boulangerie Saint Sernin', '64 Rue du Taur, 31000 Toulouse, France', '생세르냉 대성당 근처의 빵집.', 'Bakery near the Basilica of Saint-Sernin.'),
  place('toulouse-cafe-1', 'toulouse', 'cafe', 'L\'Autre Salon de Thé', '7 Pl. de la Patte d\'Oie, 31300 Toulouse, France', '매력적인 분위기의 툴루즈 티살롱', 'Charming tea salon in Toulouse'),
  place('toulouse-cafe-2', 'toulouse', 'cafe', 'La Fiancée', '54 Rue Peyrolières, 31000 Toulouse', '테라스와 홈메이드 시럽 커피가 있는 브런치 카페.', 'Brunch café with a terrace and homemade-syrup coffees.'),
  place('toulouse-korean-1', 'toulouse', 'korean', 'Séoul Restaurant Coréen', 'Toulouse, 31000, France', '툴루즈의 한국식 바비큐 식당.', 'Korean barbecue restaurant in Toulouse.'),
  place('toulouse-korean-2', 'toulouse', 'korean', 'Hwaban', '1 Place Riquet, 31000 Toulouse', '한국 길거리 음식 전문점, 비빔밥으로 호평.', 'Korean street food specialist, praised for its bibimbap.'),

  // —— montpellier ——
  place('montpellier-fine_dining-1', 'montpellier', 'fine_dining', 'Le Jardin des Sens', 'Place de la Canourgue, 34000 Montpellier', '정원이 보이는 몽펠리에의 레스토랑.', 'Montpellier restaurant with garden views.', { image: '/places/montpellier-fine_dining-1.jpg' }),
  place('montpellier-fine_dining-2', 'montpellier', 'fine_dining', 'Leclère', '8 Rue André-Michel, 34000 Montpellier', '몽펠리에의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant in Montpellier; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('montpellier-fine_dining-3', 'montpellier', 'fine_dining', 'Bistrot des Arceaux', '25 Rue Hippolyte, 34000 Montpellier', '아르소 지구의 아늑한 비스트로, 홈메이드 요리로 호평.', 'Cozy bistro in the Arceaux district, praised for its homemade dishes.'),
  place('montpellier-bakery-1', 'montpellier', 'bakery', 'Au Rythme du Pain', '2 Rue de la Carbonnerie, 34000 Montpellier, France', '100% 유기농 재료로 빵을 만드는 몽펠리에의 베이커리', 'Montpellier bakery celebrating bread-making with 100% organic ingredients'),
  place('montpellier-bakery-2', 'montpellier', 'bakery', 'Des Rêves et du Pain', '10 Rue Eugène Lisbonne, 34000 Montpellier, France', '몽펠리에의 빵집.', 'Bakery in Montpellier.'),
  place('montpellier-bakery-3', 'montpellier', 'bakery', 'Maison Bonnaire', '45 Rue Saint-Guilhem, 34000 Montpellier, France', '생기욤 거리의 제과점.', 'Pastry shop on Rue Saint-Guilhem.'),
  place('montpellier-bakery-4', 'montpellier', 'bakery', 'Daveloza St Denis', '6 Rue du Grand Saint-Jean, 34000 Montpellier, France', '몽펠리에에서 제과점.', 'Pastry shop in Montpellier.'),
  place('montpellier-bakery-5', 'montpellier', 'bakery', 'Pain Brut', '9 Boulevard Victor Hugo, 34000 Montpellier, France', '빅토르 위고 대로의 빵집.', 'Bakery on Boulevard Victor Hugo.'),
  place('montpellier-cafe-1', 'montpellier', 'bakery', 'PANA Boulangerie', '79 Rue du Faubourg Figuerolles, 34070 Montpellier', '포카차와 사워도우로 정평이 난 몽펠리에의 베이커리 카페', 'Highly recommended Montpellier bakery café known for focaccia and sourdough'),
  place('montpellier-cafe-2', 'montpellier', 'cafe', 'Café BUN', '5 Rue des Étuves, 34000 Montpellier', '몽펠리에의 서드웨이브 스페셜티 로스터리.', "Montpellier's third-wave specialty coffee roastery."),

  // —— dijon ——
  place('dijon-fine_dining-1', 'dijon', 'fine_dining', 'L\'Essentiel', '12 Rue Audra, 21000 Dijon', '계절 메뉴의 모던 프렌치 요리.', 'Modern French cuisine with a seasonal menu.'),
  place('dijon-fine_dining-2', 'dijon', 'fine_dining', "DZ'envies", '12 Rue Odebert, 21000 Dijon', '디종 중앙시장 맞은편의 비스트로노미, 계절 시장 식재료 활용.', "Bistronomy restaurant opposite Dijon's covered market, built on seasonal market produce."),
  place('dijon-bakery-1', 'dijon', 'bakery', 'Jean-Rémi Gallet\'s Bakery', '19 Av. Gustave Eiffel, 21000 Dijon, France', '지역 친환경 재료로 페이스트리를 직접 만드는 디종의 빵집.', 'Dijon bakery making all its pastries in-house from local, eco-friendly ingredients.'),
  place('dijon-bakery-2', 'dijon', 'bakery', "Tartin'Art", '8 Rue Musette, 21000 Dijon', '빵과 페이스트리, 아침 세트가 있는 빵집.', 'Bakery with bread, pastries and breakfast sets.'),
  place('dijon-cafe-1', 'dijon', 'cafe', 'Patisserie-Café', '2 Rue Jean Jacques Rousseau, 21000 Dijon, France', '갓 구운 크루아상과 팽오쇼콜라를 즐길 수 있는 디종의 카페', 'Dijon café offering fresh croissants, pastries and pain au chocolat'),
  place('dijon-cafe-2', 'dijon', 'cafe', 'Espresso-T', '21 Rue de la Poste, 21000 Dijon', '프랑스 바리스타 대회 결선 진출자가 운영하는 커피숍. 대만식 버블티도 있습니다.', 'Coffee shop run by a French barista championship finalist, also serving Taiwanese bubble tea.'),
  place('dijon-korean-1', 'dijon', 'korean', 'Épicerie Coréenne', '65 Rue Monge, 21000 Dijon', '한국 식료품점 겸 식당, 김치볶음밥·비빔밥 등 100% 홈메이드 한식.', 'Korean grocery store and eatery serving 100% homemade Korean dishes like kimchi fried rice and bibimbap.'),

  // —— chamonix ——
  place('chamonix-fine_dining-1', 'chamonix', 'fine_dining', 'Restaurant Albert 1er', '38 Route du Bouchet, 74400 Chamonix-Mont-Blanc', '1903년부터 이어온 전통 레스토랑.', 'Traditional restaurant serving since 1903.'),
  place('chamonix-fine_dining-2', 'chamonix', 'fine_dining', 'Le Monchu', '1 Rue Lyret, 74400 Chamonix-Mont-Blanc', '샤모니 중심가의 사부아 요리 식당. 퐁뒤·라클레트가 있습니다.', 'Savoyard restaurant in central Chamonix serving fondue and raclette.'),
  place('chamonix-fine_dining-3', 'chamonix', 'fine_dining', 'La Calèche', '18 Rue du Docteur Paccard, 74400 Chamonix-Mont-Blanc', '옛 석조 농가 건물의 전통 사부아 요리 전문점, 20여 가지 사부아 요리.', 'Traditional Savoyard restaurant in an old stone farmhouse, offering over 20 Savoyard dishes.', { image: '/places/chamonix-fine_dining-3.jpg' }),
  place('chamonix-bakery-1', 'chamonix', 'bakery', 'Le Fournil Chamoniard', '195 Av. de l\'Aiguille du Midi, 74400 Chamonix-Mont-Blanc, France', '샤모니의 빵집.', 'Bakery in Chamonix.'),
  place('chamonix-bakery-2', 'chamonix', 'bakery', "Boulangerie L'Al'Pain", '620 Route du Plagnolet, 74400 Chamonix-Mont-Blanc', '크루아상을 굽는 아르장티에르의 빵집.', 'Bakery in Argentière with croissants.'),
  place('chamonix-cafe-1', 'chamonix', 'cafe', 'Café Tartine', 'Chamonix, 74400, France', '직접 구운 두꺼운 빵 위에 타르틴을 올려주는 샤모니 중심가의 카페', 'Café in the heart of Chamonix known for tartines on thick house-baked bread'),
  place('chamonix-cafe-2', 'chamonix', 'cafe', 'Moody Coffee Roasters', "195 Avenue de l'Aiguille du Midi, 74400 Chamonix-Mont-Blanc", '샤모니의 소규모 스페셜티 커피 로스터리 겸 베이커리.', 'Small-batch specialty coffee roastery and artisanal bakery in Chamonix.'),
  place('chamonix-korean-1', 'chamonix', 'korean', 'Munchie', '87 Rue des Moulins, 74400 Chamonix-Mont-Blanc', '샤모니 중심가의 한식당, 해물 전골로 호평.', 'Korean restaurant in central Chamonix, praised for its seafood hotpot.'),

  // —— giverny ——
  place('giverny-fine_dining-1', 'giverny', 'fine_dining', 'Les Nymphéas', '109 Rue Claude Monet, 27620 Giverny', '모네의 정원 바로 맞은편의 노르망디 요리 식당.', 'Normandy restaurant right across from Monet\'s garden.'),
  place('giverny-fine_dining-2', 'giverny', 'fine_dining', 'Ancien Hôtel Baudy', '81 Rue Claude Monet, 27620 Giverny', '인상파 화가들이 묵었던 옛 여관의 레스토랑. 보디 오믈렛이 있습니다.', 'Restaurant in the former inn where Impressionist painters stayed, serving the omelette Baudy.', { image: '/places/giverny-fine_dining-2.jpg' }),

  // —— fontainebleau ——
  place('fontainebleau-bakery-1', 'fontainebleau', 'bakery', 'Frédéric Cassel', '71 Rue Grande, 77300 Fontainebleau', '밀푀유와 마카롱을 파는 파티시에 매장.', 'Pâtissier shop selling mille-feuille and macarons.', { image: '/places/fontainebleau-bakery-1.jpg' }),
  place('fontainebleau-fine_dining-1', 'fontainebleau', 'fine_dining', 'La Petite Ardoise', '16 Rue Montebello, 77300 Fontainebleau, France', '파리풍 분위기의 합리적인 비스트로.', 'Well-priced bistro with a Parisian feel.'),

  // —— chartres ——
  place('chartres-fine_dining-1', 'chartres', 'fine_dining', 'Le Georges', 'Le Grand Monarque, 22 Place des Épars, 28000 Chartres', '그랑 모나르크 호텔 안의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant in the Grand Monarque hotel; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('chartres-fine_dining-2', 'chartres', 'fine_dining', 'Le Bistrot de la Cathédrale', '1 Cloître Notre-Dame, 28000 Chartres', '대성당이 보이는 테라스의 비스트로.', 'Bistro with a terrace facing the cathedral.'),

  // —— reims ——
  place('reims-fine_dining-1', 'reims', 'fine_dining', 'Le Parc Les Crayères', '64 Boulevard Henry Vasnier, 51100 Reims', '크레예르 저택 호텔의 미쉐린 2스타 레스토랑. 월·화요일은 쉽니다.', 'Two-Michelin-star restaurant in the Domaine Les Crayères; closed Mondays and Tuesdays.', { michelin: 'star2' }),
  place('reims-cafe-1', 'reims', 'cafe', 'Café du Palais', '14 Place Myron Herrick, 51100 Reims', '아르데코풍의 오래된 랭스 카페 겸 브라스리.', 'Long-running Art Deco café-brasserie.', { image: '/places/reims-cafe-1.jpg' }),
  place('reims-bakery-1', 'reims', 'bakery', 'Maison Fossier', '25 Cours Langlet, 51100 Reims', '1756년부터 랭스의 분홍 비스킷을 굽는 과자점.', 'Maker of Reims pink biscuits since 1756.', { image: '/places/reims-bakery-1.jpg' }),

  // —— amboise ——
  place('amboise-fine_dining-1', 'amboise', 'fine_dining', 'L\'Écluse', 'Rue Racine, 37400 Amboise', '루아르강이 보이는 창작 요리 레스토랑.', 'Creative cooking with a view of the Loire.'),
  place('amboise-bakery-1', 'amboise', 'bakery', 'Pâtisserie Bigot', '2 Rue Nationale, 37400 Amboise', '1913년부터 앙부아즈 성 맞은편의 제과점 겸 찻집.', 'Pâtisserie and tearoom opposite the château since 1913.'),

  // —— rouen ——
  place('rouen-fine_dining-1', 'rouen', 'fine_dining', 'La Couronne', '31 Place du Vieux-Marché, 76000 Rouen', '1345년부터 이어졌다고 알려진 루앙의 여관 식당.', 'Rouen inn restaurant said to date back to 1345.'),
  place('rouen-fine_dining-2', 'rouen', 'fine_dining', 'Gill', '8-9 Quai de la Bourse, 76000 Rouen', '센강이 보이는 루앙의 레스토랑. 파티스리도 함께 합니다.', 'Rouen restaurant overlooking the Seine, with its own pâtisserie.'),
  place('rouen-cafe-1', 'rouen', 'cafe', 'Dame Cakes', '70 Rue Saint-Romain, 76000 Rouen', '대성당 옆 루이 15세풍 찻집.', 'Louis XV-style tearoom beside the cathedral.', { image: '/places/rouen-cafe-1.jpg' }),

  // —— honfleur ——
  place('honfleur-fine_dining-1', 'honfleur', 'fine_dining', 'SaQuaNa', '22 Place Hamelin, 14600 Honfleur, France', '2스타 셰프의 베이커리 겸 이자카야.', 'Bakery-izakaya from a two-star chef.'),
  place('honfleur-fine_dining-2', 'honfleur', 'fine_dining', 'La Fleur de Sel', '17 Rue Haute, 14600 Honfleur', '비외 바생 근처의 레스토랑.', 'Restaurant near the Vieux Bassin.'),
  place('honfleur-fine_dining-3', 'honfleur', 'fine_dining', 'Le Bréard', '7 Rue du Puits, 14600 Honfleur', '생트 카트린 광장 근처의 미식 레스토랑.', 'Gourmet restaurant near Place Sainte-Catherine.'),

  // —— etretat ——
  place('etretat-fine_dining-1', 'etretat', 'fine_dining', 'Le Clos Lupin', '37 Rue Alphonse Karr, 76790 Étretat, France', '칠판 메뉴의 제철 프랑스 비스트로.', 'Seasonal French bistro with a chalkboard menu.'),
  place('etretat-fine_dining-2', 'etretat', 'fine_dining', 'Le Donjon (Domaine Saint Clair)', 'Chemin de Saint-Clair, 76790 Étretat', '언덕 위 성 호텔의 레스토랑.', 'Restaurant in a hilltop château hotel.'),

  // —— bayeux ——
  place('bayeux-fine_dining-1', 'bayeux', 'fine_dining', 'La Rapière', '53 Rue Saint-Jean, 14400 Bayeux', '15세기 건물의 레스토랑.', 'Restaurant in a 15th-century building.'),
  place('bayeux-fine_dining-2', 'bayeux', 'fine_dining', 'Le Pommier', '38-40 Rue des Cuisiniers, 14400 Bayeux', '노르망디 향토 요리 레스토랑.', 'Traditional Normandy cooking.'),

  // —— saint-malo ——
  place('saint-malo-fine_dining-1', 'saint-malo', 'fine_dining', 'Le Comptoir Breizh Café', '6 Rue de l\'Orme, 35400 Saint-Malo', '유기농 메밀 갈레트와 사과주 60종의 크레프 레스토랑.', 'Crêperie with organic buckwheat galettes and 60 ciders.'),

  // —— la-rochelle ——
  place('la-rochelle-fine_dining-1', 'la-rochelle', 'fine_dining', 'Christopher Coutanceau', 'Plage de la Concurrence, 17000 La Rochelle', '콩퀴랑스 해변의 미쉐린 3스타 해산물 레스토랑. 일·월요일은 쉽니다.', 'Three-Michelin-star seafood restaurant on the Plage de la Concurrence; closed Sundays and Mondays.', { michelin: 'star3' }),
  place('la-rochelle-fine_dining-2', 'la-rochelle', 'fine_dining', 'Bar André', '5 Rue Saint-Jean du Pérot, 17000 La Rochelle', '1947년부터 구항구 앞 해산물 레스토랑.', 'Old-port seafood institution since 1947.', { image: '/places/la-rochelle-fine_dining-2.jpg' }),

  // —— arcachon ——
  place('arcachon-fine_dining-1', 'arcachon', 'fine_dining', 'La Cabane du Mimbeau', 'Avenue de la Conche, 33970 Lège-Cap-Ferret, France', '6대째 굴 양식가가 운영하는 굴 오두막.', 'Oyster shack run by six generations of oyster farmers.'),
  place('arcachon-fine_dining-2', 'arcachon', 'fine_dining', 'Chez Boulan', '2 Rue des Palmiers, 33970 Lège-Cap-Ferret, France', '캅 페레의 굴 식당.', 'Oyster restaurant in Cap Ferret.'),
  place('arcachon-fine_dining-3', 'arcachon', 'fine_dining', 'La Cabane d\'Hortense', 'Rue des Tamaris (Les Youkas), 33970 Lège-Cap-Ferret', '캅페레 레 유카스 굴 양식촌의 굴·해산물 오두막 식당.', 'Oyster and seafood shack in the Les Youkas oyster quarter of Cap Ferret.'),

  // —— biarritz ——
  place('biarritz-bakery-1', 'biarritz', 'bakery', 'Miremont', '1 Bis Place Georges Clemenceau, 64200 Biarritz', '1872년 문을 연 바다 전망 찻집.', 'Tearoom with sea views, opened in 1872.', { image: '/places/biarritz-bakery-1.jpg' }),
  place('biarritz-fine_dining-1', 'biarritz', 'fine_dining', 'La Belloteka', 'Les Halles, 64200 Biarritz', '레알 시장 안의 바스크 요리 식당.', 'Basque dishes in the Les Halles market.'),

  // —— ajaccio ——
  place('ajaccio-fine_dining-1', 'ajaccio', 'fine_dining', 'A Nepita', '4 Rue San Lazaro, 20000 Ajaccio, France', '코르시카 요리를 현대적으로 내는 아늑한 식당.', 'Cozy spot for modern Corsican cooking.'),
  place('ajaccio-fine_dining-2', 'ajaccio', 'fine_dining', 'A Terrazza (Les Mouettes)', '9 Cours Lucien Bonaparte, 20000 Ajaccio, France', '아작시오만 전망 테라스의 호텔 레스토랑.', 'Hotel restaurant with a terrace over the bay.'),
  place('ajaccio-fine_dining-3', 'ajaccio', 'fine_dining', 'Rosette et Charlotte', '87 Rue Cardinal Fesch, 20090 Ajaccio, France', '제철 재료의 가정식 요리.', 'Seasonal, home-style cooking.'),

  // —— bonifacio ——
  place('bonifacio-fine_dining-1', 'bonifacio', 'fine_dining', 'Da Passano', 'Quai Jérome Comparetti, 20169 Bonifacio / Bunifaziu, France', '절벽 위 구시가의 코르시카 요리 식당.', 'Corsican restaurant in the clifftop old town.'),
  place('bonifacio-fine_dining-2', 'bonifacio', 'fine_dining', 'Kissing Pigs', 'Quai Banda del Ferro, 20169 Bonifacio / Bunifaziu, France', '자체 농장 돼지로 만든 샤퀴테리 레스토랑.', 'Charcuterie from the owner\'s own farm, by the marina.', { image: '/places/bonifacio-fine_dining-2.jpg' }),
  place('bonifacio-fine_dining-3', 'bonifacio', 'fine_dining', 'L\'A Cheda', 'Cavallo Morto, 20169 Bonifacio', '정원 텃밭 재료를 쓰는 호텔 레스토랑.', 'Hotel restaurant cooking from its own garden.'),

  // —— calvi ——
  place('calvi-fine_dining-1', 'calvi', 'fine_dining', 'Umami', 'Quai Adolphe Landry, 20260 Calvi, France', '항구 앞 코르시카 요리 레스토랑.', 'Corsican cooking on the harbour quay.'),
  place('calvi-fine_dining-2', 'calvi', 'fine_dining', 'A Casetta', 'Strada di Casta, 20246 Santo-Pietro-di-Tenda, France', '바다 전망 테라스의 샤퀴테리·브루스케타.', 'Sea-view terrace for charcuterie boards.'),
  place('calvi-fine_dining-3', 'calvi', 'fine_dining', 'A Mandria di Pigna', 'Strada di a Croce, 20220 Pigna, France', '옛 양 우리를 개조한 코르시카 향토 요리 식당(칼비에서 차로 20분).', 'Corsican grill in an old sheepfold, 20 min from Calvi.'),
]
