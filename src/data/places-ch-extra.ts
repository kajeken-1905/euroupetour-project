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
  place('zurich-cafe-3', 'zurich', 'cafe', 'Balthasar / specialty peers', 4.5, 'Zurich', '스페셜티.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('zurich-cafe-4', 'zurich', 'cafe', 'Café Sprüngli', 4.4, 'Zurich', '페이스트리 카페.', 'Pastry café.', { reviewCount: 5400 }),
  place('zurich-korean-1', 'zurich', 'korean', 'Akaraka', 4.5, 'Bäckerstrasse 30, 8004 Zürich', '취리히의 정통 한식당.', 'Authentic Korean restaurant in Zürich.'),

  // —— geneva ——
  place('geneva-fine_dining-1', 'geneva', 'fine_dining', 'Domaine de Chateauvieux', 4.6, 'Place du Petit-Saconnex 6, 1209 Genève', '제네바 근교의 미쉐린 레스토랑.', 'Michelin restaurant near Geneva.'),
  place('geneva-korean-1', 'geneva', 'korean', 'BAP Urban Korean Food', 4.5, 'Rue de Coutance 25, 1201 Genève', '생제르베 지구의 한식 레스토랑.', 'Korean restaurant in the Saint-Gervais district.'),

  // —— bern ——
  place('bern-fine_dining-1', 'bern', 'fine_dining', 'Kornhauskeller', 4.5, 'Kornhausplatz 18, 3011 Bern', '역사적인 건물의 스위스·지중해 요리.', 'Swiss-Mediterranean cuisine in a historic building.'),

  // —— lucerne ——
  place('lucerne-fine_dining-1', 'lucerne', 'fine_dining', 'Zunfthausrestaurant Pfistern', 4.4, 'Kornmarkt 4, 6004 Luzern', '길드하우스의 전통 스위스 요리.', 'Traditional Swiss cuisine in a historic guild house.'),

  // —— interlaken ——
  place('interlaken-fine_dining-1', 'interlaken', 'fine_dining', 'Restaurant Brasserie 17', 4.4, 'Rosenstrasse 17, 3800 Interlaken', '인터라켄의 인기 브라세리.', 'Popular brasserie in Interlaken.'),

  // —— basel ——
  place('basel-fine_dining-1', 'basel', 'fine_dining', 'Cheval Blanc', 4.6, 'St. Johanns-Ring 34, 4056 Basel', '프렌치 오트 퀴진 레스토랑.', 'French haute cuisine restaurant.'),

  // —— zermatt ——
  place('zermatt-fine_dining-1', 'zermatt', 'fine_dining', 'Zum See', 4.7, 'Zum See 24, 3920 Zermatt', '38년 전통의 산장 레스토랑.', 'Mountain restaurant with 38 years of tradition.'),

  // —— lausanne ——
  place('lausanne-fine_dining-1', 'lausanne', 'fine_dining', 'Anne-Sophie Pic', 4.6, 'Chemin de Beau-Rivage 21, 1006 Lausanne', '프렌치 미식의 대가가 선보이는 레스토랑.', 'Restaurant by a celebrated French culinary master.'),

  // —— lugano ——
  place('lugano-fine_dining-1', 'lugano', 'fine_dining', 'Antica Osteria del Porto', 4.5, 'Viale Carlo Cattaneo 21, 6900 Lugano', '호수 생선 요리 전문 레스토랑.', 'Restaurant specializing in fresh lake fish.'),

  // —— montreux ——
  place('montreux-fine_dining-1', 'montreux', 'fine_dining', 'La Rouvenaz', 4.4, 'Rue du Marché 1, 1820 Montreux', '해산물·피자 전문 이탈리안 레스토랑.', 'Italian restaurant known for seafood and pizza.'),

  // —— grindelwald ——
  place('grindelwald-fine_dining-1', 'grindelwald', 'fine_dining', 'Glacier', 4.6, 'Endweg 55, 3818 Grindelwald', '알프스 전망의 모던 스위스 요리.', 'Modern Swiss cuisine with Alpine views.'),

  // —— st-moritz ——
  place('st-moritz-fine_dining-1', 'st-moritz', 'fine_dining', 'Restaurant Krone', 4.6, 'Via Maistra 44, 7500 St. Moritz', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),

]
