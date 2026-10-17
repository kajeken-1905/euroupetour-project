import { place } from './placeFactory'
import type { Place } from '../types'

export const placesFRExtra: Place[] = [
  // —— paris ——
  place('paris-fine_dining-1', 'paris', 'fine_dining', 'Arpège', '84 Rue de Varenne, 75007 Paris, France', '셰프 알랭 파사르의 채소 중심 미쉐린 3스타 레스토랑. 주말은 쉽니다.', 'Three-Michelin-star vegetable-led restaurant of chef Alain Passard; closed at weekends.', { michelin: 'star3', image: '/places/paris-fine_dining-1.jpg' }),
  place('paris-fine_dining-2', 'paris', 'fine_dining', 'Le Comptoir du Relais', '9 Carrefour de l’Odéon, 75006 Paris, France', '오데옹 교차로의 비스트로. 미쉐린 가이드에 실려 있고 매일 정오부터 밤까지 엽니다.', 'Bistro on the Carrefour de l’Odéon, listed in the MICHELIN Guide, open daily from noon until late.', { image: '/places/paris-fine_dining-2.jpg' }),
  place('paris-fine_dining-3', 'paris', 'fine_dining', 'Septime', '80 Rue de Charonne, 75011 Paris, France', '모던 프렌치 코스.', 'Modern French tasting.'),
  place('paris-fine_dining-4', 'paris', 'fine_dining', 'Bouillon Chartier', '7 Rue du Faubourg Montmartre, 75009 Paris, France', '전통 부용 식당.', 'Historic bouillon canteen.', { image: '/places/paris-fine_dining-4.jpg' }),
  place('paris-fine_dining-5', 'paris', 'fine_dining', 'L\'Ami Jean', '27 Rue Malar, 75007 Paris', '바스크 감성 비스트로.', 'Basque-spirited bistro.', { image: '/places/paris-fine_dining-5.jpg' }),
  place('paris-bakery-1', 'paris', 'bakery', 'Du Pain et des Idées', '34 Rue Yves Toudic, 75010 Paris, France', '생마르탱 운하 근처, 1875년부터 빵집이던 역사 기념물 가게. 팽 데 자미와 에스카르고(달팽이 모양 페이스트리)가 대표이고 주말은 쉽니다.', 'Bakery near Canal Saint-Martin in a listed shop dating from 1875, known for its pain des amis and escargot pastries; closed weekends.'),
  place('paris-bakery-2', 'paris', 'bakery', 'Poilâne', '38 Rue Debelleyme, 75003 Paris, France', '마레 지구의 푸알란 빵집 겸 카페. 둥근 사워도우 빵과 함께 빵을 곁들인 식사 메뉴가 있습니다. 월요일은 쉽니다.', 'Poilâne bakery-café in the Marais, with its round sourdough loaves and a bread-based dining menu; closed Mondays.', { image: '/places/paris-bakery-2.jpg' }),
  place('paris-bakery-3', 'paris', 'bakery', 'Stohrer', '51 Rue Montorgueil, 75002 Paris, France', '1730년 문을 연 파리에서 가장 오래된 제과점. 바바 오 럼이 대표이고 실내 장식이 역사 기념물입니다.', 'Paris’s oldest pâtisserie, founded in 1730, known for its baba au rhum, with a listed historic interior.', { image: '/places/paris-bakery-3.jpg' }),
  place('paris-bakery-4', 'paris', 'bakery', 'Blé Sucré', '7 Rue Antoine Vollon, 75012 Paris, France', '레드뤼롤랭 역 근처 광장 앞의 작은 빵집. 크루아상·팽오쇼콜라·레몬 타르트가 있고 월요일은 쉽니다.', 'Pocket-sized bakery facing a square near Ledru-Rollin, with croissants, pain au chocolat and lemon tart; closed Mondays.'),
  place('paris-bakery-5', 'paris', 'bakery', 'Boulangerie Utopie', '20 Rue Jean-Pierre Timbaud, 75011 Paris, France', '2024년 파리 바게트 대회 우승 빵집. 창의적인 비에누아즈리가 있고 월요일은 쉽니다.', 'Winner of the 2024 best-baguette competition in Paris, also known for inventive viennoiserie; closed Mondays.'),
  place('paris-bakery-6', 'paris', 'bakery', 'Ladurée Royale', '16 Rue Royale, 75008 Paris, France', '1862년 빵집으로 시작한 라뒤레의 본점 찻집. 마카롱이 대표이고 2층이 옛 살롱 드 테입니다.', 'Ladurée’s original tearoom, a bakery founded in 1862, famous for macarons; the upstairs rooms are the historic salon de thé.', { image: '/places/paris-bakery-6.jpg' }),
  place('paris-cafe-1', 'paris', 'cafe', 'Café de Flore', '172 Boulevard Saint-Germain, 75006 Paris, France', '1887년 문을 연 생제르맹의 카페. 사르트르와 보부아르가 글을 쓰던 곳이고 핫초콜릿이 유명합니다.', 'Saint-Germain café opened in 1887 where Sartre and Beauvoir wrote, known for its hot chocolate.', { image: '/places/paris-cafe-1.jpg' }),
  place('paris-cafe-3', 'paris', 'cafe', 'Coutume Café', '47 Rue de Babylone, 75007 Paris, France', '2011년 문을 연 파리 스페셜티 커피 1세대 로스터리 카페. 주말 브런치가 인기라 예약을 권합니다.', 'Pioneering Paris specialty roastery café opened in 2011; weekend brunch is popular, so book ahead.', { image: '/places/paris-cafe-3.jpg' }),
  place('paris-cafe-4', 'paris', 'cafe', 'Café Kitsuné', '32 Avenue de l’Opéra, 75002 Paris, France', '패션 브랜드 메종 키츠네의 카페. 매일 엽니다.', 'Café of fashion label Maison Kitsuné; open daily.', { image: '/places/paris-cafe-4.jpg' }),
  place('paris-cafe-5', 'paris', 'cafe', 'Ten Belles', '10 Rue de la Grange aux Belles, 75010 Paris, France', '생마르탱 운하 근처의 스페셜티 커피 로스터리.', 'Specialty coffee roastery near the Canal Saint-Martin.', { image: '/places/paris-cafe-5.jpg' }),
  place('paris-korean-1', 'paris', 'korean', 'La Table de Mee', '6 Rue des Ciseaux, 75006 Paris', '파리의 한식당.', 'Korean restaurant in Paris.'),
  place('paris-korean-2', 'paris', 'korean', 'Guibine', '44 Rue Sainte-Anne, 75002 Paris, France', '생트안 거리의 한식당.', 'Korean restaurant on Rue Sainte-Anne.', { image: '/places/paris-korean-2.jpg' }),
  place('paris-korean-3', 'paris', 'korean', 'MariMari', "23 Rue d'Antin, 75002 Paris, France", '김밥·떡볶이 등 한국식 길거리 분식을 선보이는 파리의 캐주얼 한식당', 'Casual Paris Korean eatery specializing in street-food bunsik like kimbap and tteokbokki'),
  place('paris-korean-4', 'paris', 'korean', 'K-CHIMAEK', '139 Rue de Tolbiac, 75013 Paris, France', '치킨·맥주와 떡볶이를 내는 한식 분식집.', 'Korean snack bar serving fried chicken with beer and tteokbokki.'),
  place('paris-korean-5', 'paris', 'korean', 'Kimchi', '5 Rue de Louvois, 75002 Paris, France', '생트안 지구 인근의 정통 한식당', "Authentic Korean restaurant near Paris's Rue Sainte-Anne district"),

  // —— lyon ——
  place('lyon-fine_dining-1', 'lyon', 'fine_dining', 'La Mère Brazier', '12 Rue Royale, 69001 Lyon', '리옹의 역사적인 미쉐린 2스타 레스토랑. 여는 날이 적으니 미리 확인하세요.', 'Historic two-Michelin-star restaurant in Lyon; open few days, so check ahead.', { michelin: 'star2', image: '/places/lyon-fine_dining-1.jpg' }),
  place('lyon-fine_dining-2', 'lyon', 'fine_dining', 'Café des Fédérations', '8 Rue du Major Martin, 69001 Lyon', '1872년에 문을 연 테로 광장 근처의 리옹 부숑. 크넬 같은 리옹 요리와 오늘의 메뉴가 있고 매일 엽니다.', 'Lyon bouchon near Place des Terreaux, founded 1872, serving classics such as quenelles and a daily menu; open daily.', { image: '/places/lyon-fine_dining-2.jpg' }),
  place('lyon-fine_dining-3', 'lyon', 'fine_dining', "Le Poêlon d'Or", "29 Rue des Remparts d'Ainay, 69002 Lyon", '1860년 와인 가게에서 시작한 아네 지구의 부숑. 크넬과 럼 바바가 있고 화~토요일에 엽니다.', 'Bouchon in the Ainay quarter, a wine counter founded in 1860, serving quenelles and rum baba; open Tuesday to Saturday.'),
  place('lyon-fine_dining-4', 'lyon', 'fine_dining', 'Bouchon Les Lyonnais', '19 Rue de la Bombarde, 69005 Lyon', '푸르비에르 언덕 아래 비외 리옹의 부숑. 타블리에 드 사푀르·크넬·프랄린 타르트가 있습니다.', 'Bouchon in Vieux Lyon below Fourvière, with tablier de sapeur, quenelles and praline tart.'),
  place('lyon-bakery-1', 'lyon', 'bakery', 'Boulangerie du Palais', '8 Rue du Palais de Justice, 69005 Lyon, France', '생장 지구의 빵집. 2023년 제과사 세바스티앵 부이예가 인수했고 분홍 프랄린 브리오슈·타르트가 대표입니다. 주말엔 줄이 깁니다.', 'Bakery in the Saint-Jean quarter taken over by pastry chef Sébastien Bouillet in 2023, known for pink praline brioche and tart; long weekend queues.', { image: '/places/lyon-bakery-1.jpg' }),
  place('lyon-bakery-2', 'lyon', 'bakery', 'Boulangerie Saint Paul', '8 Place Saint-Paul, 69005 Lyon, France', '비외 리옹 생폴 광장의 빵집. 팽오쇼콜라와 키슈·샌드위치가 있습니다.', 'Bakery on Place Saint-Paul in Vieux Lyon with pain au chocolat, quiches and sandwiches.'),
  place('lyon-bakery-3', 'lyon', 'bakery', 'Pralus La Boulangerie', '18 Quai Saint-Antoine, 69002 Lyon, France', '초콜릿 가문 프랄뤼가 2024년 리옹에 처음 연 빵집. 유기농 사워도우 빵을 무게로 팔고 강변 테라스가 있습니다.', 'The Pralus chocolate family’s first Lyon bakery (2024), selling organic sourdough loaves by weight, with a small riverside terrace.'),
  place('lyon-bakery-4', 'lyon', 'bakery', 'Aux Merveilleux De Fred', '32 Rue Grenette, 69002 Lyon, France', '머랭 케이크 메르베유로 알려진 제과 체인의 리옹 매장. 브리오슈도 있고 좌석은 없습니다.', 'Lyon branch of the pastry chain known for meringue merveilleux, also selling brioche; no seating.', { image: '/places/lyon-bakery-4.jpg' }),
  place('lyon-bakery-5', 'lyon', 'bakery', 'partisan boulanger', "2 Rue du Chariot d'Or, 69004 Lyon, France", '크루아루스의 빵집. 카무트·외알밀 등 옛 곡물 사워도우 빵을 굽습니다.', 'Croix-Rousse bakery baking sourdough loaves from heritage grains such as khorasan and einkorn.'),
  place('lyon-cafe-1', 'lyon', 'cafe', 'Slake Coffee House', '9 Rue de l\'Ancienne Préfecture, 69002 Lyon, France', '리옹 초기 스페셜티 커피숍 중 하나. 직접 만든 페이스트리가 있고 뒤쪽 방은 노트북 작업하기 좋습니다.', 'One of Lyon’s early specialty coffee shops, with homemade pastries and a back room good for laptop work.'),
  place('lyon-cafe-2', 'lyon', 'cafe', 'Puzzle Café', '1 Rue des Estrées, 69005 Lyon', '비외 리옹으로 옮긴 스페셜티 커피 카페. 수~일요일에 엽니다.', 'Specialty coffee café, now in Vieux Lyon; open Wednesday to Sunday.'),
  place('lyon-cafe-3', 'lyon', 'cafe', 'Café Mokxa', '5 Rue Bellecordière, 69002 Lyon', '2011년에 문을 연 리옹 로스터리 목사의 플래그십 카페. 에스프레소·카푸치노·필터를 한 번에 맛보는 세트가 있습니다.', 'Flagship café of Lyon roaster Mokxa, opened in 2011, with a trio of espresso, cappuccino and filter.'),

  // —— marseille ——
  place('marseille-fine_dining-1', 'marseille', 'fine_dining', 'Le Petit Nice Passedat', '17 Rue des Braves Anse de Maldormé, 13007 Marseille', '말도르메 해안의 미쉐린 3스타 해산물 레스토랑. 일·월요일은 쉽니다.', 'Three-Michelin-star seafood restaurant on the Anse de Maldormé; closed Sundays and Mondays.', { michelin: 'star3' }),
  place('marseille-fine_dining-2', 'marseille', 'fine_dining', 'Une Table au Sud', '2 Quai du Port, 13002 Marseille', '구항구가 보이는 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant overlooking the Old Port; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('marseille-fine_dining-3', 'marseille', 'fine_dining', 'Chez Madie Les Galinettes', '138 Quai du Port, 13002 Marseille', '구항구 앞의 프로방스 가정식 식당. 부야베스와 고기·생선 요리가 있고 항구 쪽 테라스가 있습니다.', 'Traditional Provençal restaurant on the Old Port with bouillabaisse and meat and fish dishes, and a harbour terrace.'),
  place('marseille-fine_dining-4', 'marseille', 'fine_dining', 'Chez Fonfon', '140 Rue du Vallon des Auffes, 13007 Marseille', '발롱 데 조프 어촌 포구의 1952년 가족 식당. 부야베스로 알려져 있고 미쉐린 가이드에 실려 있습니다.', 'Family restaurant (1952) in the Vallon des Auffes fishing cove, known for bouillabaisse and listed in the MICHELIN Guide.', { image: '/places/marseille-fine_dining-4.jpg' }),
  place('marseille-fine_dining-5', 'marseille', 'fine_dining', 'Restaurant Péron', '56 Corniche Président John Fitzgerald Kennedy, 13007 Marseille', '1885년부터 식당이 있던 코르니슈 해안의 지중해 요리 레스토랑. 프리울 섬과 이프 성이 보이는 테라스가 있고 일·월요일은 쉽니다.', 'Mediterranean restaurant on the Corniche, a dining spot since 1885, with terrace views of the Frioul islands and Château d’If; closed Sundays and Mondays.'),
  place('marseille-bakery-1', 'marseille', 'bakery', 'Le Four des Navettes', '136 Rue Sainte, 13007 Marseille, France', '1781년에 문을 연 마르세유에서 가장 오래된 빵집. 18세기 아치형 화덕에서 나베트 과자만 굽고, 매년 성촉절엔 대주교가 화덕을 축복합니다.', 'Marseille’s oldest bakery (1781), baking only navette biscuits in its 18th-century vaulted oven, blessed each Candlemas by the archbishop.', { image: '/places/marseille-bakery-1.jpg' }),
  place('marseille-bakery-2', 'marseille', 'bakery', 'Le Bar à Pain MARSEILLE', '18 Cours Joseph Thierry, 13001 Marseille', '유기농 밀가루 사워도우 빵을 굽는 빵집 겸 카페. 브리오슈·샌드위치·타르트도 있고 일·월요일은 쉽니다.', 'Bakery-café baking organic-flour sourdough, plus brioche, sandwiches and tarts; closed Sundays and Mondays.'),
  place('marseille-cafe-1', 'marseille', 'cafe', 'Sylvain Depuichaffray', '66 Rue Grignan, 13006 Marseille, France', '2004년에 문을 연 제과점 겸 찻집. 밀푀유와 피낭시에가 대표이고 샐러드·샌드위치도 있습니다. 일요일은 쉽니다.', 'Pâtisserie and tearoom opened in 2004, known for millefeuille and financiers, with salads and sandwiches too; closed Sundays.'),
  place('marseille-cafe-2', 'marseille', 'cafe', 'Torréfaction Noailles', '56 la Canebière, 13001 Marseille', '카네비에르 거리의 커피 로스터 가게 겸 카페. 커피·차·초콜릿·과자를 매장에서 먹거나 살 수 있습니다.', 'Coffee roaster’s shop and café on La Canebière, selling coffee, tea, chocolate and sweets to enjoy in or take away.'),
  place('marseille-korean-1', 'marseille', 'korean', 'Mamaco – Madame Corée', '14 Rue Corneille, 13001 Marseille', '오페라 극장 근처의 한식당. 비빔밥·김치·한국식 고기구이가 있고 수요일은 쉽니다.', 'Korean restaurant near the Opéra with bibimbap, kimchi and Korean barbecue; closed Wednesdays.'),
  place('marseille-korean-2', 'marseille', 'korean', 'Busan', '6 Rue du Rouet, 13006 Marseille', '카스텔란 근처의 한식당. 한국식 고기구이가 중심이고 비빔밥·불고기·떡볶이도 있습니다. 일요일은 쉽니다.', 'Korean restaurant near Castellane focusing on Korean barbecue, with bibimbap, bulgogi and tteokbokki; closed Sundays.'),

  // —— nice ——
  place('nice-fine_dining-1', 'nice', 'fine_dining', 'Le Chantecler', '37 Promenade des Anglais, 06000 Nice', '영국인 산책로의 호텔 네그레스코 안 미쉐린 1스타 레스토랑.', 'Michelin one-star restaurant inside the Hôtel Negresco on the Promenade des Anglais.', { michelin: 'star1' }),
  place('nice-fine_dining-2', 'nice', 'fine_dining', 'Chez Pipo', '13 Rue Bavastro, 06300 Nice', '구항구 근처의 소카(병아리콩 전병) 식당. 장작불 돌화덕에 굽고 피살라디에르도 있습니다. 월·화요일은 쉽니다.', 'Socca (chickpea pancake) restaurant near the old port, baked in a wood-fired stone oven, with pissaladière too; closed Mondays and Tuesdays.', { image: '/places/nice-fine_dining-2.jpg' }),
  place('nice-fine_dining-3', 'nice', 'fine_dining', "Chez Thérésa", '28 Rue Droite, 06300 Nice', '1925년부터 영업한 구시가의 소카 가게. 장작 화덕에 굽고 살레야 시장에서도 팝니다. 월요일은 쉽니다.', 'Socca shop in Vieux Nice since 1925, baked in a wood oven and also sold at the Cours Saleya market; closed Mondays.'),
  place('nice-fine_dining-4', 'nice', 'fine_dining', "La Socca d'Or", '45 Rue Bonaparte, 06300 Nice', '1989년부터 영업한 구시가의 니스 요리 식당. 장작 화덕 소카·피살라디에르·파르시가 있고 수·일요일은 쉽니다.', 'Niçoise restaurant in the old town since 1989 with wood-fired socca, pissaladière and farcis; closed Wednesdays and Sundays.'),
  place('nice-bakery-1', 'nice', 'bakery', 'Pâtisserie Canet', '25 Boulevard Gambetta, 06000 Nice, France', '1927년부터 감베타 대로에서 영업한 제과점. 찻집 공간이 있고 일요일은 쉽니다.', 'Pâtisserie on Boulevard Gambetta since 1927, with a tearoom corner; closed Sundays.'),
  place('nice-bakery-2', 'nice', 'bakery', 'Boulangerie Jeannot', '8 Rue Saint-François de Paule, 06300 Nice', '구시가 오페라 극장 근처의 빵집. 비에누아즈리와 빵이 있고 매일 엽니다.', 'Bakery near the Opéra in Vieux Nice with viennoiserie and breads; open daily.'),
  place('nice-cafe-1', 'nice', 'cafe', 'Mama Baker', '13 Rue de Lépante, 06000 Nice, France', '유기농 사워도우 빵집 겸 카페. 시나몬롤과 비에누아즈리, 에스프레소가 있습니다. 일요일은 쉽니다.', 'Organic sourdough bakery-café with cinnamon rolls, viennoiserie and espresso; closed Sundays.'),
  place('nice-cafe-2', 'nice', 'cafe', 'Maison Karlie', '36 Rue Pastorelli, 06000 Nice', '구시가 근처의 작은 카페. 지역에서 볶은 원두로 필터 커피를 내고, 직접 구운 마들렌·피낭시에와 브런치가 있습니다.', 'Small café near the old town serving filter coffee from locally roasted beans, homemade madeleines and financiers, and brunch.'),
  place('nice-korean-1', 'nice', 'korean', 'Sixsa', '9 Rue Chauvain, 06000 Nice', '2020년에 친구들이 문을 연 작은 한식당. 비빔밥·잡채·만두와 흑임자 롤케이크가 있습니다.', 'Small Korean restaurant opened by friends in 2020, with bibimbap, japchae, mandu and a black-sesame roll cake.'),

  // —— bordeaux ——
  place('bordeaux-fine_dining-1', 'bordeaux', 'fine_dining', 'Le Cent 33', '133 Rue du Jardin public, 33000 Bordeaux', '보르도의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant in Bordeaux; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('bordeaux-fine_dining-2', 'bordeaux', 'fine_dining', 'La Tupina', '6 Rue Porte de la Monnaie, 33000 Bordeaux', '벽난로 불에 고기를 굽는 남서부 요리 식당. 미쉐린 가이드에 실려 있습니다.', 'South-West French restaurant cooking meat over an open hearth, listed in the MICHELIN Guide.', { image: '/places/bordeaux-fine_dining-2.jpg' }),
  place('bordeaux-fine_dining-3', 'bordeaux', 'fine_dining', 'Le Bouchon Bordelais', '2 Rue Courbin, 33000 Bordeaux', '중심가의 작은 비스트로. 제철 메뉴가 자주 바뀌고 4코스 정식이 있습니다. 일·월요일은 쉬고 예약을 권합니다.', 'Small central bistro with a frequently changing seasonal menu and a four-course set; closed Sundays and Mondays, booking advised.'),
  place('bordeaux-bakery-1', 'bordeaux', 'bakery', 'Cassonade', '53 Rue Saint-James, 33000 Bordeaux, France', '그로스 클로슈 종탑 건물의 카늘레 가게. 럼·바닐라·초콜릿·비건 카늘레가 있고 매일 엽니다.', 'Cannelé shop in the Grosse Cloche gate with rum, vanilla, chocolate and vegan cannelés; open daily.', { image: '/places/bordeaux-bakery-1.jpg' }),
  place('bordeaux-bakery-2', 'bordeaux', 'bakery', 'Boulangerie Louis Lamour', '7 Rue Ravez, 33000 Bordeaux', '중심가의 빵집. 시골빵·덴마크 페이스트리·쇼콜라틴이 있고 일요일은 쉽니다. 빵은 일찍 떨어집니다.', 'Central bakery with pain de campagne, Danish pastries and chocolatines; closed Sundays; bread sells out early.'),
  place('bordeaux-cafe-1', 'bordeaux', 'cafe', 'Goûtu par Oven Heaven', '51 Cours de la Marne, 33000 Bordeaux, France', '카퓌생 지구의 제과점 겸 스페셜티 커피 카페. 형제가 운영하며 커피는 직접 볶습니다. 시나몬롤·플랑·쇼콜라틴이 있고 월요일은 쉽니다.', 'Pastry and specialty coffee shop in the Capucins district run by two brothers who roast their own coffee; cinnamon rolls, flan and chocolatines; closed Mondays.'),
  place('bordeaux-cafe-2', 'bordeaux', 'cafe', 'Black List Café', '27 Place Pey Berland, 33000 Bordeaux', '페이 베를랑 광장의 작은 스페셜티 커피 카페. 필터 커피와 브런치, 직접 구운 쿠키가 있습니다.', 'Small specialty coffee café on Place Pey-Berland with filter coffee, brunch and house-baked cookies.'),
  place('bordeaux-korean-1', 'bordeaux', 'korean', 'Mokoji Grill', '45 Rue du Pas Saint Georges, 33000 Bordeaux', '한국식 고기구이 식당. 큰 철판에 고기와 채소를 함께 굽고 비빔밥·김치도 있습니다. 오픈테이블로 예약할 수 있습니다.', 'Korean barbecue restaurant grilling meat and vegetables on a large shared pan, plus bibimbap and kimchi; bookable on OpenTable.'),

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
  place('annecy-fine_dining-1', 'annecy', 'fine_dining', 'Cozna', '22 Faubourg Sainte-Claire, 74000 Annecy', '구시가 생트클레르 거리의 식당. 미쉐린 가이드에 실려 있습니다.', 'Restaurant on Faubourg Sainte-Claire in the old town, listed in the MICHELIN Guide.'),
  place('annecy-fine_dining-2', 'annecy', 'fine_dining', 'Savoie Bar', '1 Place Saint François de Sales, 74000 Annecy', '생프랑수아드살 광장의 사부아 요리 식당. 일요일은 쉽니다.', 'Savoyard restaurant on Place Saint-François-de-Sales; closed Sundays.'),
  place('annecy-fine_dining-3', 'annecy', 'fine_dining', 'Ô Savoyard', '1 Rue Perrière, 74000 Annecy', '운하 옆 샬레풍 건물의 사부아 요리 식당. 라클렛·타르티플레트·퐁뒤가 있습니다.', 'Savoyard restaurant in a chalet-style building by the canal, serving raclette, tartiflette and fondue.'),
  place('annecy-bakery-1', 'annecy', 'bakery', 'Boulangerie Rouge', '3 Rue du Lac, 74000 Annecy', '구시가 호숫가 길목의 빵집. 가토 드 사부아와 프랄린 브리오슈가 있습니다.', 'Old-town bakery near the lake with gâteau de Savoie and praline brioche.'),
  place('annecy-bakery-2', 'annecy', 'bakery', 'Boulangerie Pâtisserie Alexandre Perchat', '6 Rue Président Favre, 74000 Annecy', '봉리외 근처의 빵집. 크루아상·밀푀유·쿠키와 키슈가 있습니다.', 'Bakery near Bonlieu with croissants, millefeuille, cookies and quiches.'),
  place('annecy-cafe-2', 'annecy', 'cafe', 'Café Bunna', '17 Rue Jean-Jacques Rousseau, 74000 Annecy', '구시가의 작은 스페셜티 커피 카페. 라테와 당근 케이크가 있고 월·화요일은 쉽니다.', 'Small specialty coffee café in the old town with lattes and carrot cake; closed Mondays and Tuesdays.'),

  // —— avignon ——
  place('avignon-fine_dining-1', 'avignon', 'fine_dining', 'La Mirande', '4 Place de l’Amirande, 84000 Avignon', '교황청 뒤편 호텔 라 미랑드의 레스토랑. 미쉐린 가이드에 실려 있고 목~일요일에 엽니다.', 'Restaurant of the Hôtel La Mirande behind the Papal Palace, listed in the MICHELIN Guide; open Thursday to Sunday.', { image: '/places/avignon-fine_dining-1.jpg' }),
  place('avignon-fine_dining-2', 'avignon', 'fine_dining', 'Pollen', '18 Rue Joseph Vernet, 84000 Avignon', '미쉐린 1스타 레스토랑. 제철 지역 재료로 만드는 서프라이즈 코스를 내고 주말은 쉽니다.', 'Michelin one-star restaurant serving a surprise menu built on seasonal local produce; closed weekends.', { michelin: 'star1' }),
  place('avignon-fine_dining-3', 'avignon', 'fine_dining', "L'Agapé", '21 Place des Corps Saints, 84000 Avignon', '코르생 광장 테라스가 있는 현대 요리 식당. 미쉐린 가이드에 실려 있습니다.', 'Modern-cuisine restaurant with a terrace on Place des Corps-Saints, listed in the MICHELIN Guide.'),
  place('avignon-bakery-1', 'avignon', 'bakery', 'Maison Violette', '30 Place des Corps Saints, 84000 Avignon, France', '코르생 광장의 빵집. 옥수수·해초·스펠트 등 여러 곡물빵과 비에누아즈리가 있습니다.', 'Bakery on Place des Corps-Saints with many speciality breads (corn, seaweed, spelt) and viennoiserie.'),
  place('avignon-bakery-2', 'avignon', 'bakery', 'la PauZe | Boulangerie Pâtisseries Artisanale', '160 Avenue Pierre Semard, 84000 Avignon, France', '성벽 밖 피에르 세마르 대로의 동네 빵집. 매일 이른 아침부터 엽니다.', 'Neighbourhood bakery on Avenue Pierre Semard outside the walls, open daily from early morning.'),
  place('avignon-bakery-4', 'avignon', 'bakery', 'The Taste Factory', '48 Rue de la Bonneterie, 84000 Avignon, France', '제과사와 제빵사가 함께 운영하는 구시가 빵집(La Fabrique des Saveurs). 아망딘·크로캉·푸가스 같은 프로방스 과자가 있습니다.', 'Old-town bakery run by a pastry chef and a baker (also called La Fabrique des Saveurs), with Provençal amandines, croquants and fougasse.'),
  place('avignon-bakery-5', 'avignon', 'bakery', "Boulangerie Saint-Ruf - l'épi d'or", '63 Avenue Saint-Ruf, 84000 Avignon, France', '생뤼프 지구의 동네 빵집. 프랑스 빵과 함께 튀니지·중동식 과자도 있습니다.', 'Neighbourhood bakery in Saint-Ruf with French breads plus Tunisian and oriental pastries.'),
  place('avignon-cafe-1', 'avignon', 'cafe', 'Bella Ciao – Boulangerie Utopiste', '43 Rue des Fourbisseurs, 84000 Avignon, France', '유기농 사워도우 빵집. 제빵사가 밤샘 작업을 하지 않도록 오전 10시에 엽니다. 일·월요일은 쉽니다.', 'Organic sourdough bakery that opens at 10am so its bakers don’t work nights; closed Sundays and Mondays.'),
  place('avignon-cafe-2', 'avignon', 'cafe', 'Café Tulipe', '7 Rue des Trois Faucons, 84000 Avignon', '2019년에 문을 연 구시가 보행자 거리의 스페셜티 커피 카페. 브런치와 귀리우유 아이스 라테·말차가 있습니다.', 'Specialty coffee café on a pedestrian old-town street, opened in 2019, with brunch, oat-milk iced lattes and matcha.'),

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
  place('montpellier-fine_dining-1', 'montpellier', 'fine_dining', 'Le Jardin des Sens', 'Place de la Canourgue, 34000 Montpellier', '푸르셀 형제가 호텔 리셰 드 벨발(옛 시청 저택)에서 2021년 다시 연 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'Michelin one-star restaurant reopened in 2021 by the Pourcel brothers in the Hôtel Richer de Belleval, a former town-hall mansion; closed Sundays and Mondays.', { michelin: 'star1', image: '/places/montpellier-fine_dining-1.jpg' }),
  place('montpellier-fine_dining-2', 'montpellier', 'fine_dining', 'Leclère', '8 Rue André-Michel, 34000 Montpellier', '몽펠리에의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant in Montpellier; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('montpellier-bakery-2', 'montpellier', 'bakery', 'Des Rêves et du Pain', '10 Rue Eugène Lisbonne, 34000 Montpellier, France', '구시가 에퀴송의 천연 발효빵 빵집. 2015년 프랑스 최고 빵집에 뽑혔고 오래된 화덕을 씁니다.', 'Naturally leavened bakery in the Écusson old town, named Best Bakery in France in 2015, baking in an old oven.'),
  place('montpellier-bakery-3', 'montpellier', 'bakery', 'Maison Bonnaire', '45 Rue Saint-Guilhem, 34000 Montpellier, France', '생기욤 거리의 제과점 겸 빵집. 에클레르와 파네토네로 알려져 있고 토요일 아침엔 줄이 깁니다.', 'Pâtisserie-bakery on Rue Saint-Guilhem known for éclairs and panettone; long Saturday-morning queues.'),
  place('montpellier-bakery-4', 'montpellier', 'bakery', 'Daveloza St Denis', '6 Rue du Grand Saint-Jean, 34000 Montpellier, France', '에퀴송의 빵집. 유기농 밀가루와 천연 발효종으로 빵을 굽고 일·월요일은 쉽니다.', 'Écusson bakery using organic flour and natural sourdough; closed Sundays and Mondays.'),
  place('montpellier-bakery-5', 'montpellier', 'bakery', 'Pain Brut', '9 Boulevard Victor Hugo, 34000 Montpellier, France', '빅토르 위고 대로의 빵집. 피스타치오 롤·포카치아 등이 있고 비건 메뉴도 있습니다. 일·월요일은 쉽니다.', 'Bakery on Boulevard Victor-Hugo with pistachio rolls, focaccia and vegan options; closed Sundays and Mondays.'),
  place('montpellier-cafe-1', 'montpellier', 'bakery', 'PANA Boulangerie', '79 Rue du Faubourg Figuerolles, 34070 Montpellier', '포카차와 사워도우로 정평이 난 몽펠리에의 베이커리 카페', 'Highly recommended Montpellier bakery café known for focaccia and sourdough'),
  place('montpellier-cafe-2', 'montpellier', 'cafe', 'Café BUN', '5 Rue des Étuves, 34000 Montpellier', '구시가 에퀴송의 스페셜티 커피 카페. 직접 원두를 볶고 브런치와 비건 메뉴가 있습니다.', 'Specialty coffee café in the Écusson old town, roasting its own beans, with brunch and vegan options.'),

  // —— dijon ——
  place('dijon-fine_dining-2', 'dijon', 'fine_dining', "DZ'envies", '12 Rue Odebert, 21000 Dijon', '디종 중앙시장 근처의 식당. 미쉐린 가이드에 실려 있고 페르시예·외프 앙 뫼레트 같은 부르고뉴 요리와 점심 정식이 있습니다. 일·월요일은 쉽니다.', 'Restaurant near Dijon’s covered market, listed in the MICHELIN Guide, with Burgundian dishes such as jambon persillé and œufs en meurette and a lunch set; closed Sundays and Mondays.'),
  place('dijon-bakery-2', 'dijon', 'bakery', "Tartin'Art", '8 Rue Musette, 21000 Dijon', '구시가 뮈제트 거리의 빵집.', 'Bakery on Rue Musette in the old town.'),
  place('dijon-cafe-2', 'dijon', 'cafe', 'Espresso-T', '21 Rue de la Poste, 21000 Dijon', '직접 원두를 볶는 커피숍. 프랑스 바리스타 대회 결선 진출자가 운영하고 버블티·바나나 브레드도 있습니다. 일·월요일은 쉽니다.', 'Coffee shop roasting on site, run by a French barista championship finalist, with bubble tea and banana bread; closed Sundays and Mondays.'),

  // —— chamonix ——
  place('chamonix-fine_dining-1', 'chamonix', 'fine_dining', 'Restaurant Albert 1er', '38 Route du Bouchet, 74400 Chamonix-Mont-Blanc', '호텔 아모 알베르 1세의 미쉐린 1스타 레스토랑. 저녁에만 열고 수·목요일은 쉽니다.', 'Michelin one-star restaurant of the Hameau Albert 1er hotel; dinner only, closed Wednesdays and Thursdays.', { michelin: 'star1' }),
  place('chamonix-fine_dining-2', 'chamonix', 'fine_dining', 'Le Monchu', '1 Rue Lyret, 74400 Chamonix-Mont-Blanc', '카지노 근처, 옛 사부아 농가 자재로 지은 식당. 장작불 사부아 요리와 퐁뒤·라클렛이 있고 매일 엽니다.', 'Restaurant near the Casino built with parts of an old Savoyard farm, serving open-fire Savoyard dishes, fondue and raclette; open daily.'),
  place('chamonix-fine_dining-3', 'chamonix', 'fine_dining', 'La Calèche', '18 Rue du Docteur Paccard, 74400 Chamonix-Mont-Blanc', '1946년부터 한 가족이 운영하는 사부아 요리 식당. 옛 산악 장비와 스키로 꾸몄고 퐁뒤·라클렛·타르티플레트가 있습니다.', 'Savoyard restaurant run by the same family since 1946, decorated with old mountain gear and skis, serving fondue, raclette and tartiflette.', { image: '/places/chamonix-fine_dining-3.jpg' }),
  place('chamonix-bakery-1', 'chamonix', 'bakery', 'Le Fournil Chamoniard', '204 Avenue de l’Aiguille du Midi, 74400 Chamonix-Mont-Blanc, France', '에귀 뒤 미디 케이블카 역 근처의 빵집. 매일 아침 일찍 열어 아침 줄이 깁니다.', 'Bakery near the Aiguille du Midi cable car, open daily from early morning, with long queues at breakfast.'),
  place('chamonix-bakery-2', 'chamonix', 'bakery', "Boulangerie L'Al'Pain", '620 Route du Plagnolet, 74400 Chamonix-Mont-Blanc', '아르장티에르 쪽 플라뇰레 길의 빵집. 페이스트리·케이크와 커피가 있고 좌석이 넉넉합니다. 월요일은 쉽니다.', 'Bakery on Route du Plagnolet towards Argentière with pastries, cakes, coffee and plenty of seating; closed Mondays.'),
  place('chamonix-cafe-2', 'chamonix', 'cafe', 'Moody Coffee Roasters', "195 Avenue de l'Aiguille du Midi, 74400 Chamonix-Mont-Blanc", '직접 원두를 볶는 스페셜티 커피 카페. 매주 볶은 원두에 따라 메뉴가 바뀝니다.', 'Specialty coffee café roasting its own beans weekly; the coffee on offer depends on the latest roast.'),

  // —— giverny ——
  place('giverny-fine_dining-1', 'giverny', 'fine_dining', 'Les Nymphéas', '109 Rue Claude Monet, 27620 Giverny', '모네의 집과 정원 바로 맞은편의 노르망디 비스트로 겸 찻집. 꽃이 가득한 테라스가 있습니다.', 'Norman bistro and tearoom directly opposite Monet’s house and gardens, with a flower-filled terrace.'),
  place('giverny-fine_dining-2', 'giverny', 'fine_dining', 'Ancien Hôtel Baudy', '81 Rue Claude Monet, 27620 Giverny', '인상파 화가들이 묵던 1890년대 여관 건물의 비스트로. 바우디 오믈렛이 대표 메뉴이고 정원 테라스가 있습니다.', 'Bistro in the 1890s inn where Impressionist painters stayed, known for its omelette Baudy, with a garden terrace.', { image: '/places/giverny-fine_dining-2.jpg' }),

  // —— fontainebleau ——
  place('fontainebleau-bakery-1', 'fontainebleau', 'bakery', 'Frédéric Cassel', '71 Rue Grande, 77300 Fontainebleau', '2013년 세계 제과 챔피언 프레데리크 카셀의 본점. 밀푀유와 마카롱이 있고 월요일은 쉽니다.', 'Flagship shop of 2013 world pastry champion Frédéric Cassel, with millefeuille and macarons; closed Mondays.', { image: '/places/fontainebleau-bakery-1.jpg' }),
  place('fontainebleau-fine_dining-1', 'fontainebleau', 'fine_dining', 'La Petite Ardoise', '16 Rue Montebello, 77300 Fontainebleau, France', '차양 테라스와 들보 천장의 파리풍 비스트로. 매일 바뀌는 요리와 와인 리스트가 있습니다.', 'Parisian-style bistro with an awning-shaded terrace and beamed room, daily-changing dishes and a good wine list.'),

  // —— chartres ——
  place('chartres-fine_dining-1', 'chartres', 'fine_dining', 'Le Georges', 'Le Grand Monarque, 22 Place des Épars, 28000 Chartres', '그랑 모나르크 호텔 안의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant in the Grand Monarque hotel; closed Sundays and Mondays.', { michelin: 'star1' }),

  // —— reims ——
  place('reims-fine_dining-1', 'reims', 'fine_dining', 'Le Parc Les Crayères', '64 Boulevard Henry Vasnier, 51100 Reims', '크레예르 저택 호텔의 미쉐린 2스타 레스토랑. 월·화요일은 쉽니다.', 'Two-Michelin-star restaurant in the Domaine Les Crayères; closed Mondays and Tuesdays.', { michelin: 'star2' }),
  place('reims-cafe-1', 'reims', 'cafe', 'Café du Palais', '14 Place Myron Herrick, 51100 Reims', '아르데코풍의 오래된 랭스 카페 겸 브라스리.', 'Long-running Art Deco café-brasserie.', { image: '/places/reims-cafe-1.jpg' }),
  place('reims-bakery-1', 'reims', 'bakery', 'Maison Fossier', '25 Cours Langlet, 51100 Reims', '1756년부터 랭스의 분홍 비스킷을 굽는 과자점.', 'Maker of Reims pink biscuits since 1756.', { image: '/places/reims-bakery-1.jpg' }),

  // —— amboise ——
  place('amboise-fine_dining-1', 'amboise', 'fine_dining', 'L\'Écluse', 'Rue Racine, 37400 Amboise', '앙부아즈 성 근처의 비스트로노미 식당. 미쉐린 가이드에 실려 있고 버드나무 그늘 테라스가 있습니다. 일·월요일은 쉽니다.', 'Bistronomic restaurant near the château, listed in the MICHELIN Guide, with a willow-shaded terrace; closed Sundays and Mondays.'),
  place('amboise-bakery-1', 'amboise', 'bakery', 'Pâtisserie Bigot', '2 Rue Nationale, 37400 Amboise', '1913년부터 앙부아즈 성 맞은편에서 영업한 제과점 겸 찻집. 초콜릿·아이스크림·퓌 다무르가 있습니다.', 'Pâtisserie and tearoom opposite the Château d’Amboise since 1913, with chocolates, ice cream and puits d’amour.'),

  // —— rouen ——
  place('rouen-fine_dining-1', 'rouen', 'fine_dining', 'La Couronne', '31 Place du Vieux-Marché, 76000 Rouen', '1345년부터 이어졌다고 알려진 루앙의 여관 식당.', 'Rouen inn restaurant said to date back to 1345.'),
  place('rouen-fine_dining-2', 'rouen', 'fine_dining', 'Gill', '8-9 Quai de la Bourse, 76000 Rouen', '센강이 보이는 루앙의 레스토랑. 파티스리도 함께 합니다.', 'Rouen restaurant overlooking the Seine, with its own pâtisserie.'),
  place('rouen-cafe-1', 'rouen', 'cafe', 'Dame Cakes', '70 Rue Saint-Romain, 76000 Rouen', '대성당 옆 루이 15세풍 찻집.', 'Louis XV-style tearoom beside the cathedral.', { image: '/places/rouen-cafe-1.jpg' }),

  // —— honfleur ——
  place('honfleur-fine_dining-1', 'honfleur', 'fine_dining', 'SaQuaNa', '22 Place Hamelin, 14600 Honfleur, France', '셰프 알렉상드르 부르다의 식당 겸 빵집·제과점. 미쉐린 가이드에 실려 있고 시간대에 따라 찻집으로도 운영하며 일본식 메뉴도 있습니다. 월·화요일은 쉽니다.', 'Chef Alexandre Bourdas’s restaurant, bakery and pâtisserie, listed in the MICHELIN Guide, doubling as a tearoom and with a Japanese section on the menu; closed Mondays and Tuesdays.'),
  place('honfleur-fine_dining-2', 'honfleur', 'fine_dining', 'La Fleur de Sel', '17 Rue Haute, 14600 Honfleur', '구시가의 현대 요리 식당. 미쉐린 가이드에 실려 있고 월·화요일은 쉽니다.', 'Modern-cuisine restaurant in the historic quarter, listed in the MICHELIN Guide; closed Mondays and Tuesdays.'),
  place('honfleur-fine_dining-3', 'honfleur', 'fine_dining', 'Le Bréard', '7 Rue du Puits, 14600 Honfleur', '비외 바생 근처의 작은 식당. 미쉐린 가이드에 실려 있고 노르망디 재료로 세 가지 코스를 냅니다.', 'Small restaurant near the Vieux Bassin, listed in the MICHELIN Guide, offering three set menus of Norman produce.'),

  // —— etretat ——
  place('etretat-fine_dining-1', 'etretat', 'fine_dining', 'Le Clos Lupin', '37 Rue Alphonse Karr, 76790 Étretat, France', '모리스 르블랑이 아르센 뤼팽을 쓴 1900년 저택의 가족 비스트로. 매주 바뀌는 제철 코스를 내고 예약은 받지 않으니 일찍 가세요. 일·월요일은 쉽니다.', 'Family bistro in the 1900 mansion where Maurice Leblanc wrote Arsène Lupin, with a weekly seasonal set menu; no bookings, so arrive early; closed Sundays and Mondays.'),
  place('etretat-fine_dining-2', 'etretat', 'fine_dining', 'Le Donjon (Domaine Saint Clair)', 'Chemin de Saint-Clair, 76790 Étretat', '에트르타 절벽이 보이는 언덕 위 성 호텔의 레스토랑. 미쉐린 가이드에 실려 있고 페캉 어시장 해산물로 코스를 냅니다.', 'Restaurant of a hilltop château hotel overlooking the Étretat cliffs, listed in the MICHELIN Guide, with menus built on seafood from the Fécamp fish auction.'),

  // —— bayeux ——
  place('bayeux-fine_dining-1', 'bayeux', 'fine_dining', 'La Rapière', '53 Rue Saint-Jean, 14400 Bayeux', '15세기 건물의 식당. 미쉐린 가이드에 실려 있고 노르망디 재료로 요리합니다.', 'Restaurant in a 15th-century building, listed in the MICHELIN Guide, cooking with Normandy produce.'),
  place('bayeux-fine_dining-2', 'bayeux', 'fine_dining', 'Le Pommier', '38-40 Rue des Cuisiniers, 14400 Bayeux', '대성당 근처의 프랑스 가정식 식당. 오래 거래한 지역 생산자의 제철 재료로 요리하고 채식 메뉴도 있습니다.', 'Traditional French restaurant near the cathedral, cooking seasonal produce from long-standing local suppliers, with vegetarian options.'),

  // —— saint-malo ——
  place('saint-malo-fine_dining-1', 'saint-malo', 'fine_dining', 'Le Comptoir Breizh Café', '6 Rue de l\'Orme, 35400 Saint-Malo', '유기농 메밀 갈레트와 사과주 60종의 크레프 레스토랑.', 'Crêperie with organic buckwheat galettes and 60 ciders.'),

  // —— la-rochelle ——
  place('la-rochelle-fine_dining-1', 'la-rochelle', 'fine_dining', 'Christopher Coutanceau', 'Plage de la Concurrence, 17000 La Rochelle', '콩퀴랑스 해변의 미쉐린 3스타 해산물 레스토랑. 일·월요일은 쉽니다.', 'Three-Michelin-star seafood restaurant on the Plage de la Concurrence; closed Sundays and Mondays.', { michelin: 'star3' }),
  place('la-rochelle-fine_dining-2', 'la-rochelle', 'fine_dining', 'Bar André', '5 Rue Saint-Jean du Pérot, 17000 La Rochelle', '1947년부터 구항구 탑 아래에서 영업한 해산물 식당. 해산물 슈크루트와 피노 홍합 요리(무클라드)가 있습니다.', 'Seafood restaurant at the foot of the Old Port towers since 1947, with seafood choucroute and mouclade.', { image: '/places/la-rochelle-fine_dining-2.jpg' }),

  // —— arcachon ——
  place('arcachon-fine_dining-1', 'arcachon', 'fine_dining', 'La Cabane du Mimbeau', '28 Avenue de la Conche, 33970 Lège-Cap-Ferret, France', '밈보 만에 면한 굴 시식 오두막. 굴·새우·테린을 지역 와인과 함께 냅니다. 성수기엔 예약하세요.', 'Oyster-tasting shack on the Mimbeau basin with oysters, shrimp and terrines plus local wine; book in season.'),
  place('arcachon-fine_dining-2', 'arcachon', 'fine_dining', 'Chez Boulan', '2 Rue des Palmiers, 33970 Lège-Cap-Ferret, France', '밈보 만과 필라 사구가 보이는 굴 양식 가족의 오두막. 수상 경력이 있는 굴을 냅니다.', 'Oyster farmers’ cabin facing the Mimbeau basin and the Dune du Pilat, serving their award-winning oysters.'),
  place('arcachon-fine_dining-3', 'arcachon', 'fine_dining', 'La Cabane d\'Hortense', 'Rue des Tamaris (Les Youkas), 33970 Lège-Cap-Ferret', '캅페레 레 유카스 굴 양식촌의 굴·해산물 오두막 식당.', 'Oyster and seafood shack in the Les Youkas oyster quarter of Cap Ferret.'),

  // —— biarritz ——
  place('biarritz-bakery-1', 'biarritz', 'bakery', 'Miremont', '1 Bis Place Georges Clemenceau, 64200 Biarritz', '1872년에 문을 연 클레망소 광장의 제과점 겸 찻집. 실내외 장식이 역사 기념물로 지정돼 있습니다.', 'Pâtisserie and tearoom on Place Clemenceau dating from 1872, its décor listed as a historic monument.', { image: '/places/biarritz-bakery-1.jpg' }),
  place('biarritz-fine_dining-1', 'biarritz', 'fine_dining', 'La Belloteka', '8 Rue du Centre, 64200 Biarritz', '레알 시장 근처의 숯불 그릴 식당 겸 바. 60일 숙성 갈리시아 소고기와 나눠 먹는 요리가 있고 저녁에만 엽니다.', 'Charcoal-grill restaurant and bar near Les Halles with 60-day-aged Galician beef and sharing plates; dinner only.'),

  // —— ajaccio ——
  place('ajaccio-fine_dining-1', 'ajaccio', 'fine_dining', 'A Nepita', '4 Rue San Lazaro, 20000 Ajaccio, France', '미쉐린 가이드에 실린 구시가의 작은 식당. 코르시카 재료로 현대적인 요리를 냅니다.', 'Small old-town restaurant listed in the MICHELIN Guide, cooking modern dishes with Corsican produce.'),
  place('ajaccio-fine_dining-2', 'ajaccio', 'fine_dining', 'A Terrazza (Les Mouettes)', '9 Cours Lucien Bonaparte, 20000 Ajaccio, France', '아작시오만에 면한 호텔 레 무에트의 테라스 레스토랑. 코르시카·남부 이탈리아풍 지중해 요리를 냅니다.', 'Terrace restaurant of Hôtel Les Mouettes on the Gulf of Ajaccio, serving Mediterranean dishes inspired by Corsica and southern Italy.'),
  place('ajaccio-fine_dining-3', 'ajaccio', 'fine_dining', 'Rosette et Charlot', '86 Rue Cardinal Fesch, 20000 Ajaccio, France', '카르디날 페슈 거리의 식당. 평일 점심·저녁과 토요일 점심에 엽니다.', 'Restaurant on Rue Cardinal Fesch, open weekday lunch and dinner and Saturday lunch.'),

  // —— bonifacio ——
  place('bonifacio-fine_dining-1', 'bonifacio', 'fine_dining', 'Da Passano', '53 Quai Jérôme Comparetti, 20169 Bonifacio, France', '항구 석회암 절벽을 파낸 아치형 공간의 타파스식 코르시카 식당 겸 와인 바. 미쉐린 가이드에 실려 있고 5~10월에 엽니다.', 'Tapas-style Corsican restaurant and wine bar in a vaulted room cut into the harbour cliff, listed in the MICHELIN Guide; open May to October.'),
  place('bonifacio-fine_dining-2', 'bonifacio', 'fine_dining', 'Kissing Pigs', '15 Quai Banda del Ferro, 20169 Bonifacio, France', '항구 끝의 코르시카 식당 겸 와인 바. 토종 돼지(누스트랄레) 샤퀴테리와 잔으로 파는 코르시카 와인 40여 종이 있습니다.', 'Corsican restaurant and wine bar at the end of the quay, with Nustrale pork charcuterie and over 40 Corsican wines by the glass.', { image: '/places/bonifacio-fine_dining-2.jpg' }),
  place('bonifacio-fine_dining-3', 'bonifacio', 'fine_dining', 'L\'A Cheda', 'Cavallo Morto, 20169 Bonifacio', '정원 텃밭 재료를 쓰는 호텔 레스토랑.', 'Hotel restaurant cooking from its own garden.'),

  // —— calvi ——
  place('calvi-fine_dining-1', 'calvi', 'fine_dining', 'Umami', 'Quai Adolphe Landry, 20260 Calvi, France', '칼비 항구 앞 코르시카 요리 식당. 정어리 구이·생선 수프 등 생선 요리가 중심이고 관광철에만 엽니다.', 'Corsican restaurant on the Calvi harbour focusing on fish such as grilled sardines and fish soup; open in season only.'),
  place('calvi-fine_dining-3', 'calvi', 'fine_dining', 'A Mandria di Pigna', 'Strada di a Croce, 20220 Pigna, France', '피냐 마을 입구 옛 양 우리 건물의 가족 식당. 미쉐린 가이드에 실려 있고 텃밭 채소와 장작불에 구운 새끼돼지·양고기를 냅니다. 4~10월 초에 엽니다(칼비에서 차로 20분).', 'Family restaurant in a former sheepfold at the entrance to Pigna, listed in the MICHELIN Guide, with garden vegetables and wood-fired suckling pig and lamb; open April to early October (20 min drive from Calvi).'),
]
