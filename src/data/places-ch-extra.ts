import { place } from './placeFactory'
import type { Place } from '../types'

export const placesCHExtra: Place[] = [
  // —— zurich ——
  place('zurich-fine_dining-1', 'zurich', 'fine_dining', 'Restaurant Bindella', 4.5, 'Zurich', '이탈리안·스위스 파인.', 'Italian-Swiss fine dining.', { reviewCount: 1600 }),
  place('zurich-fine_dining-2', 'zurich', 'fine_dining', 'Kronenhalle', 4.5, 'Zurich', '클래식 취리히 다이닝.', 'Classic Zurich dining.', { reviewCount: 4200 }),
  place('zurich-fine_dining-3', 'zurich', 'fine_dining', 'Maison Manesse', 4.6, 'Zurich', '모던 시즌 코스.', 'Modern seasonal tasting.', { reviewCount: 980 }),
  place('zurich-fine_dining-4', 'zurich', 'fine_dining', 'Zeughauskeller', 4.4, 'Zurich', '전통 스위스 요리.', 'Traditional Swiss.', { reviewCount: 6800 }),
  place('zurich-fine_dining-5', 'zurich', 'fine_dining', 'Hiltl', 4.4, 'Zurich', '채식 다이닝 클래식.', 'Classic vegetarian dining.', { reviewCount: 5200 }),
  place('zurich-bakery-1', 'zurich', 'bakery', 'Confiserie Sprüngli', 4.5, 'Zurich', '초콜릿·페이스트리.', 'Chocolate and pastries.', { reviewCount: 8600 }),
  place('zurich-bakery-2', 'zurich', 'bakery', 'Bachmann', 4.4, 'Zurich', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 2100 }),
  place('zurich-bakery-3', 'zurich', 'bakery', 'Markthalle bakery counters', 4.3, 'Zurich', '마켓 베이커리.', 'Market bakeries.', { reviewCount: 1200 }),
  place('zurich-bakery-4', 'zurich', 'bakery', 'Bäckerei Conditorei local', 4.3, 'Zurich', '로컬 빵집.', 'Local bakery.', { reviewCount: 900 }),
  place('zurich-cafe-1', 'zurich', 'cafe', 'Café Schober', 4.4, 'Zurich', '클래식 카페.', 'Classic café.', { reviewCount: 3200 }),
  place('zurich-cafe-2', 'zurich', 'cafe', 'Milchbar', 4.5, 'Zurich', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1800 }),
  place('zurich-cafe-3', 'zurich', 'cafe', 'Balthasar', 4.5, 'Zurich', '스페셜티.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('zurich-cafe-4', 'zurich', 'cafe', 'Café Sprüngli', 4.4, 'Zurich', '페이스트리 카페.', 'Pastry café.', { reviewCount: 5400 }),
  place('zurich-korean-1', 'zurich', 'korean', 'Akaraka', 4.5, 'Bäckerstrasse 30, 8004 Zürich', '취리히의 정통 한식당.', 'Authentic Korean restaurant in Zürich.'),

  // —— geneva ——
  place('geneva-fine_dining-1', 'geneva', 'fine_dining', 'Domaine de Chateauvieux', 4.6, 'Place du Petit-Saconnex 6, 1209 Genève', '제네바 근교의 미쉐린 레스토랑.', 'Michelin restaurant near Geneva.'),
  place('geneva-korean-1', 'geneva', 'korean', 'BAP Urban Korean Food', 4.5, 'Rue de Coutance 25, 1201 Genève', '생제르베 지구의 한식 레스토랑.', 'Korean restaurant in the Saint-Gervais district.'),
  place('geneva-bakery-1', 'geneva', 'bakery', 'Sawerdō', 4.5, 'Rue Micheli-du-Crest 1, 1205 Genève, Switzerland', '직접 구운 사워도우 빵과 브런치로 인기 있는 제네바의 베이커리 카페', 'Popular Geneva bakery café known for its own sourdough bread and brunch'),
  place('geneva-cafe-1', 'geneva', 'cafe', 'Un Pure Délice', 4.4, 'Boulevard du Pont-d\'Arve 6, 1205 Genève, Switzerland', '제네바의 아늑한 베이커리 겸 티룸', 'Cozy bakery and tea room in Geneva'),

  // —— bern ——
  place('bern-fine_dining-1', 'bern', 'fine_dining', 'Kornhauskeller', 4.5, 'Kornhausplatz 18, 3011 Bern', '역사적인 건물의 스위스·지중해 요리.', 'Swiss-Mediterranean cuisine in a historic building.'),
  place('bern-bakery-1', 'bern', 'bakery', 'Bread à Porter', 4.5, 'Münstergasse 74, 3011 Bern, Switzerland', '사워도우와 지역 재료를 활용한 베른의 인기 베이커리', 'Popular Bern bakery known for sourdough and regional ingredients'),
  place('bern-cafe-1', 'bern', 'cafe', 'Bohnenblust', 4.4, 'Bern, Switzerland', '혁신적이고 창의적인 베이커리 제품으로 유명한 베른의 카페', 'Bern café known for innovative, creative baked goods'),

  // —— lucerne ——
  place('lucerne-fine_dining-1', 'lucerne', 'fine_dining', 'Zunfthausrestaurant Pfistern', 4.4, 'Kornmarkt 4, 6004 Luzern', '길드하우스의 전통 스위스 요리.', 'Traditional Swiss cuisine in a historic guild house.'),
  place('lucerne-bakery-1', 'lucerne', 'bakery', 'Confiserie Bachmann', 4.5, 'Bahnhofplatz, 6003 Luzern, Switzerland', '루체른의 대표 제과점으로 갓 만든 초콜릿과 아이스크림으로 유명', 'Lucerne\'s leading confiserie, known for fresh chocolates and ice cream'),
  place('lucerne-cafe-1', 'lucerne', 'cafe', 'Macchi', 4.4, 'Pilatusstrasse 5, 6003 Luzern, Switzerland', '루체른 기차역 인근의 합리적인 가격의 베이커리 카페', 'Bakery café near Lucerne train station offering fresh pastries at fair prices'),

  // —— interlaken ——
  place('interlaken-fine_dining-1', 'interlaken', 'fine_dining', 'Restaurant Brasserie 17', 4.4, 'Rosenstrasse 17, 3800 Interlaken', '인터라켄의 인기 브라세리.', 'Popular brasserie in Interlaken.'),
  place('interlaken-bakery-1', 'interlaken', 'bakery', 'Bäckerei-Konditorei Mohler', 4.6, 'Beatenbergstrasse 1, 3800 Unterseen, Interlaken, Switzerland', '현지인들이 아침마다 줄 서서 찾는 운터제엔의 인기 베이커리', 'Popular Unterseen bakery where locals queue every morning for fresh bread'),
  place('interlaken-cafe-1', 'interlaken', 'cafe', 'Confiserie Rieder', 4.5, 'Marktgasse 2, 3800 Interlaken, Switzerland', '디저트와 따뜻한 음료로 유명한 인터라켄의 카페', 'Interlaken café specializing in sweets and hot drinks'),

  // —— basel ——
  place('basel-fine_dining-1', 'basel', 'fine_dining', 'Cheval Blanc', 4.6, 'St. Johanns-Ring 34, 4056 Basel', '프렌치 오트 퀴진 레스토랑.', 'French haute cuisine restaurant.'),
  place('basel-bakery-1', 'basel', 'bakery', 'Confiserie Schiesser', 4.5, 'Marktplatz 19, 4051 Basel, Switzerland', '1870년부터 이어진 스위스에서 가장 오래된 커피하우스', 'Family-run institution since 1870, the oldest coffee house in Switzerland'),
  place('basel-cafe-1', 'basel', 'cafe', 'Confiserie Brändli', 4.4, 'Barfüsserplatz 20, 4051 Basel, Switzerland', '바르퓌서광장에 위치한 바젤의 인기 제과 카페', 'Popular confiserie café on Barfüsserplatz in Basel'),

  // —— zermatt ——
  place('zermatt-fine_dining-1', 'zermatt', 'fine_dining', 'Zum See', 4.7, 'Zum See 24, 3920 Zermatt', '38년 전통의 산장 레스토랑.', 'Mountain restaurant with 38 years of tradition.'),
  place('zermatt-bakery-1', 'zermatt', 'bakery', 'Bäckerei Fuchs', 4.5, 'Bahnhofstrasse 28, 3920 Zermatt, Switzerland', '1965년부터 이어온 체르마트의 가족 운영 베이커리', 'Family bakery in Zermatt running since 1965'),
  place('zermatt-cafe-1', 'zermatt', 'cafe', 'Backzeit Bakery & Café', 4.5, 'Zermatt, 3920, Switzerland', '유기농 사워도우로 유명한 체르마트의 베이커리 카페', 'Zermatt bakery café renowned for its organic sourdough'),

  // —— lausanne ——
  place('lausanne-fine_dining-1', 'lausanne', 'fine_dining', 'Anne-Sophie Pic', 4.6, 'Chemin de Beau-Rivage 21, 1006 Lausanne', '프렌치 미식의 대가가 선보이는 레스토랑.', 'Restaurant by a celebrated French culinary master.'),
  place('lausanne-bakery-1', 'lausanne', 'bakery', 'Boulangerie Bread Store', 4.6, 'Rue Grand-Saint-Jean 6, 1003 Lausanne, Switzerland', '매일 빠르게 매진되는 르뱅 발효빵으로 유명한 로잔의 베이커리', 'Lausanne bakery known for its levain-leavened bread that sells out daily'),
  place('lausanne-cafe-1', 'lausanne', 'cafe', 'Bluebird Café', 4.5, 'Rôtillon, 1003 Lausanne, Switzerland', '로잔 로티용 지구에 위치한 인기 카페', 'Popular café in Lausanne\'s Rôtillon district'),

  // —— lugano ——
  place('lugano-fine_dining-1', 'lugano', 'fine_dining', 'Antica Osteria del Porto', 4.5, 'Viale Carlo Cattaneo 21, 6900 Lugano', '호수 생선 요리 전문 레스토랑.', 'Restaurant specializing in fresh lake fish.'),
  place('lugano-bakery-1', 'lugano', 'bakery', 'Peverelli Panetteria', 4.5, 'Via Giulio Vicari 14, 6900 Lugano, Switzerland', '카사라테 지역 최고의 크루아상과 장인 빵으로 유명한 루가노의 빵집', 'Lugano bakery known for the best croissants and artisanal bread in Cassarate'),
  place('lugano-cafe-1', 'lugano', 'cafe', 'Grand Café Al Porto', 4.5, 'Via Pessina 3, 6900 Lugano, Switzerland', '훌륭한 파티스리로 유명한 루가노의 역사적 카페', 'Historic Lugano café renowned for its glorious patisserie'),

  // —— montreux ——
  place('montreux-fine_dining-1', 'montreux', 'fine_dining', 'La Rouvenaz', 4.4, 'Rue du Marché 1, 1820 Montreux', '해산물·피자 전문 이탈리안 레스토랑.', 'Italian restaurant known for seafood and pizza.'),
  place('montreux-bakery-1', 'montreux', 'bakery', 'Zurcher', 4.6, 'Avenue du Casino 45, 1820 Montreux, Switzerland', '장인 빵과 초콜릿, 아늑한 티룸을 갖춘 몽트뢰의 대표 제과점', 'Montreux\'s leading confiserie with artisanal bread, chocolates and a cosy tearoom'),
  place('montreux-cafe-1', 'montreux', 'cafe', 'Tea Room de la Baye', 4.6, 'Vieille Ville, 1820 Montreux, Switzerland', '몽트뢰 구시가지에 위치한 평이 좋은 티룸', 'Highly rated tea room in Montreux\'s old town'),

  // —— grindelwald ——
  place('grindelwald-fine_dining-1', 'grindelwald', 'fine_dining', 'Glacier', 4.6, 'Endweg 55, 3818 Grindelwald', '알프스 전망의 모던 스위스 요리.', 'Modern Swiss cuisine with Alpine views.'),
  place('grindelwald-bakery-1', 'grindelwald', 'bakery', 'Bäckerei Wüthrich', 4.5, 'Ischweg 1, 3818 Grindelwald, Switzerland', '그린델발트에서 신선한 빵과 페이스트리로 사랑받는 베이커리', 'Beloved Grindelwald bakery for fresh bread and pastries'),
  place('grindelwald-cafe-1', 'grindelwald', 'cafe', 'Ringgenberg Bäckerei Konditorei Café', 4.5, 'Grindelwald, 3818, Switzerland', '샘물로 만든 사워도우 빵이 유명한 그린델발트 중심가의 베이커리 카페', 'Bakery café on Grindelwald\'s main street known for sourdough made with local spring water'),

  // —— st-moritz ——
  place('st-moritz-fine_dining-1', 'st-moritz', 'fine_dining', 'Restaurant Krone', 4.6, 'Via Maistra 44, 7500 St. Moritz', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),

  place('st-moritz-bakery-1', 'st-moritz', 'bakery', 'Bäckerei Bad', 4.5, 'Via dal Bagn 4, 7500 St. Moritz, Switzerland', '1년 365일 문을 여는 생모리츠의 전통 베이커리, 엥가딘 너트 케이크로 유명', 'Traditional St. Moritz bakery open 365 days a year, known for Engadine nut cake'),
  place('st-moritz-cafe-1', 'st-moritz', 'cafe', 'Cafe Hanselmann', 4.6, 'Via Maistra 8, 7500 St. Moritz, Switzerland', '125년 넘는 역사를 가진 생모리츠의 대표 카페 겸 초콜릿 숍', 'St. Moritz\'s iconic café and chocolate shop with over 125 years of history'),
]
