import { place } from './placeFactory'
import type { Place } from '../types'

export const placesGRExtra: Place[] = [
  // —— athens ——
  place('athens-fine_dining-1', 'athens', 'fine_dining', 'Hytra', 4.6, 'Athens', '모던 그리스 코스.', 'Modern Greek tasting.', { reviewCount: 1200 }),
  place('athens-fine_dining-2', 'athens', 'fine_dining', 'Cookoovaya', 4.5, 'Athens', '시즌 그리스 다이닝.', 'Seasonal Greek dining.', { reviewCount: 1800 }),
  place('athens-fine_dining-3', 'athens', 'fine_dining', 'Funky Gourmet', 4.5, 'Athens', '창의 아테네 다이닝.', 'Creative Athens dining.', { reviewCount: 1600 }),
  place('athens-fine_dining-4', 'athens', 'fine_dining', 'Klimataria', 4.4, 'Athens', '전통 타베르나.', 'Traditional taverna.', { reviewCount: 4200 }),
  place('athens-fine_dining-5', 'athens', 'fine_dining', 'Seychelles', 4.5, 'Athens', '모던 타베르나.', 'Modern taverna.', { reviewCount: 2800 }),
  place('athens-bakery-1', 'athens', 'bakery', 'Ariston bakery', 4.4, 'Athens', '시티 베이커리.', 'City bakery.', { reviewCount: 1600 }),
  place('athens-bakery-2', 'athens', 'bakery', 'Takis Bakery', 4.4, 'Athens', '로컬 빵·페이스트리.', 'Local bread and pastries.', { reviewCount: 2100 }),
  place('athens-bakery-3', 'athens', 'bakery', 'Bread & Co Athens', 4.3, 'Athens', '사워도우.', 'Sourdough.', { reviewCount: 900 }),
  place('athens-bakery-4', 'athens', 'bakery', 'Traditional koulouri stalls', 4.3, 'Athens', '쿨루리 가판.', 'Koulouri stalls.', { reviewCount: 3200 }),
  place('athens-cafe-1', 'athens', 'cafe', 'Tailor Made', 4.5, 'Athens', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2400 }),
  place('athens-cafe-2', 'athens', 'cafe', 'Bean Around Town', 4.4, 'Athens', '로스터리 카페.', 'Roastery café.', { reviewCount: 1100 }),
  place('athens-cafe-3', 'athens', 'cafe', 'Café Avissinia', 4.3, 'Athens', '모나스티라키 전망 카페.', 'Monastiraki view café.', { reviewCount: 2800 }),
  place('athens-cafe-4', 'athens', 'cafe', 'Little Tree Books & Coffee', 4.4, 'Athens', '북카페.', 'Book café.', { reviewCount: 980 }),

  // —— santorini ——
  place('santorini-fine_dining-1', 'santorini', 'fine_dining', 'Selene', 4.6, 'Pyrgos, Santorini 84700', '그리스 최고 레스토랑 중 하나.', 'Regarded as one of Greece\'s best restaurants.'),
  place('santorini-bakery-1', 'santorini', 'bakery', 'Furnissimo Bakery', 4.6, 'Mesarias-Archeas Thiras, Mesaria 490 83, Greece', '최고의 크루아상과 커피로 유명한 산토리니의 베이커리', 'Santorini bakery known for its excellent croissants and coffee'),
  place('santorini-cafe-1', 'santorini', 'cafe', 'Milopetra', 4.5, 'Fira, Santorini 847 00, Greece', '전통과 서양식 케이크를 두루 갖춘 산토리니의 베이커리 카페', 'Santorini bakery café offering a wide variety of traditional and continental cakes'),

  // —— heraklion ——
  place('heraklion-fine_dining-1', 'heraklion', 'fine_dining', 'Thigaterra', 4.6, 'Leof. Andrea Papandreou 109, Heraklion 71414', '모던하게 재해석한 크레타 요리.', 'Cretan cuisine reimagined in a modern style.'),
  place('heraklion-bakery-1', 'heraklion', 'bakery', 'Kritikos Fournos Daily Bakery', 4.6, 'Leoforos Ikarou 32, 71306 Heraklion, Greece', '크레타 최고의 베이커리로 꼽히는 이라클리오의 인기 명소', 'Widely regarded as the best bakery in Crete'),
  place('heraklion-cafe-1', 'heraklion', 'cafe', 'Crumb Cafe', 4.5, 'Heraklion, Greece', '비건·글루텐프리 옵션을 갖춘 이라클리오의 브런치 카페', 'Heraklion brunch café with vegan and gluten-free options'),

  // —— mykonos ——
  place('mykonos-fine_dining-1', 'mykonos', 'fine_dining', 'M-Eating', 4.6, 'Kouzi Georgouli 53, Mykonos 84600', '미코노스 타운 최고 평가 레스토랑.', 'Top-rated restaurant in Mykonos Town.'),
  place('mykonos-bakery-1', 'mykonos', 'bakery', 'Il Forno di Gerasimo', 4.4, 'Ignatiou Basoula 21, Mykonos 846 00, Greece', '미코노스 초라에서 24시간 운영하는 베이커리 겸 카페', '24-hour bakery and café in Mykonos\'s Chora district'),
  place('mykonos-cafe-1', 'mykonos', 'cafe', 'Kastro\'s Restaurant', 4.5, 'Agion Anargyron 1, Little Venice, Mykonos 846 00, Greece', '리틀 베니스의 바다 전망 테라스로 유명한 미코노스의 카페 겸 레스토랑', 'Mykonos café-restaurant in Little Venice famous for its seaside terrace views'),

  // —— rhodes ——
  place('rhodes-fine_dining-1', 'rhodes', 'fine_dining', 'Marco Polo Mansion', 4.6, 'Agiou Fanouriou 40-42, Rhodes 85100', '구시가의 인기 레스토랑.', 'Popular restaurant in the Old Town.'),
  place('rhodes-bakery-1', 'rhodes', 'bakery', 'Stani Bakery & Pastry Shop', 4.5, 'Agias Anastasias 28, Rodos 851 00, Greece', '로도스의 인기 베이커리 겸 페이스트리 숍', 'Popular bakery and pastry shop in Rhodes'),
  place('rhodes-cafe-1', 'rhodes', 'cafe', 'Bon Bonheur', 4.5, 'Agias Anastasias & Paleon Patron Germanou, Rodos 851 00, Greece', '도넛과 와플, 샌드위치로 유명한 로도스의 아침식사 카페', 'Rhodes breakfast café known for donuts, waffles and sandwiches'),

  // —— thessaloniki ——
  place('thessaloniki-fine_dining-1', 'thessaloniki', 'fine_dining', 'Ergon Agora', 4.6, 'P. Mela 42, Thessaloniki 54622', '팜투테이블 콘셉트의 레스토랑.', 'Farm-to-table concept restaurant.'),
  place('thessaloniki-bakery-1', 'thessaloniki', 'bakery', 'Bougatsa Bantis', 4.6, 'Panagias Faneromenis 33, 546 32 Thessaloniki, Greece', '부가차의 명소로 꼽히는 테살로니키의 전통 제과점', 'Thessaloniki institution famous for its bougatsa pastry'),
  place('thessaloniki-cafe-1', 'thessaloniki', 'cafe', 'Blé Taste Gallery', 4.6, 'P. Mela 37, 546 22 Thessaloniki, Greece', '고급 페이스트리와 수제 아이스크림으로 유명한 테살로니키의 카페', 'Thessaloniki café known for refined pastries and handmade ice cream'),

  // —— corfu ——
  place('corfu-fine_dining-1', 'corfu', 'fine_dining', 'The Venetian Well', 4.6, '1 Lilli Desylla Square, Kerkyra 49100', '구시가 광장의 분위기 있는 레스토랑.', 'Atmospheric restaurant on the Old Town square.'),
  place('corfu-bakery-1', 'corfu', 'bakery', 'Starenio Bakery', 4.6, 'Themistokleous Kotardou 42, 491 00 Kerkyra, Greece', '1994년부터 이어온 케르키라 시청 광장의 베이커리', 'Corfu Town Hall Square bakery serving delightful treats since 1994'),
  place('corfu-cafe-1', 'corfu', 'cafe', 'Bristol Café', 4.4, 'Kapodistriou Street, 491 00 Kerkyra, Greece', '베네치아 양식 건물에 자리한 케르키라 구시가지의 레트로 카페', 'Retro café in a Venetian building in Corfu\'s old town'),

  // —— nafplio ——
  place('nafplio-fine_dining-1', 'nafplio', 'fine_dining', 'Byzantio', 4.5, 'Papanikolaou 32, Nafplio 21100', '그리스·세르비아 요리 레스토랑.', 'Restaurant serving Greek and Serbian cuisine.'),

  place('nafplio-bakery-1', 'nafplio', 'bakery', 'Kosmos Bakery', 4.5, 'Nafplio, 211 00, Greece', '빵과 디저트, 아이스크림을 두루 갖춘 나프플리오 초입의 베이커리', 'Bakery at the entrance of Nafplio offering pastries, breads and desserts'),
  place('nafplio-cafe-1', 'nafplio', 'cafe', 'Sokaki Cafe', 4.4, 'Plateia Syndagmatos 3, 211 00 Nafplio, Greece', '신타그마 광장에 위치한 나프플리오의 카페', 'Nafplio café on Constitution Square'),
]
