import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSIExtra: Place[] = [
  // —— ljubljana ——
  place('ljubljana-fine_dining-1', 'ljubljana', 'fine_dining', 'Strelec', 4.7, 'Grajska planota 1, 1000 Ljubljana, Slovenia', '류블랴나 성 안에 자리한 파인다이닝, 도시 전망과 함께 다코스 테이스팅 메뉴를 제공', 'Fine-dining restaurant inside Ljubljana Castle offering multi-course tasting menus with city views', { reviewCount: 811 }),
  place('ljubljana-fine_dining-2', 'ljubljana', 'fine_dining', 'JB Restaurant', 4.6, 'Volčji Potok 43G, 1235 Radomlje, Slovenia', '류블랴나 인근 라돔리예에 위치한 야네즈 브라토브지 셰프의 파인다이닝, 테이스팅 메뉴로 유명', 'Fine-dining restaurant by chef Janez Bratovž in Radomlje near Ljubljana, known for its tasting menus', { reviewCount: 608 }),
  place('ljubljana-fine_dining-3', 'ljubljana', 'fine_dining', 'AS', 4.3, 'Čopova ulica 5a, 1000 Ljubljana, Slovenia', '촙바 거리의 인기 레스토랑, 스테이크와 파스타로 알려짐', 'Popular restaurant on Čopova street known for its steaks and pasta', { reviewCount: 1004 }),
  place('ljubljana-fine_dining-4', 'ljubljana', 'fine_dining', 'Gostilna Sokol', 4.3, 'Ciril-Metodov trg 18, 1000 Ljubljana, Slovenia', '치릴-메토드 광장에 위치한 류블랴나의 대표 전통 슬로베니아 선술집', "Ljubljana's landmark traditional Slovenian gostilna on Ciril-Metodov square", { reviewCount: 9920 }),
  place('ljubljana-bakery-1', 'ljubljana', 'bakery', 'Brot Pekarna', 4.8, 'Poljanska cesta 11, 1000 Ljubljana, Slovenia', '폴랸스카 거리의 높은 평점을 받는 베이커리', 'Highly rated bakery on Poljanska street in Ljubljana', { reviewCount: 443 }),
  place('ljubljana-bakery-3', 'ljubljana', 'bakery', 'Butik lePotica', 4.4, 'Stari trg 10, 1000 Ljubljana, Slovenia', '스타리 광장의 전통 포티차(호두빵) 전문점, 미니 사이즈로도 판매', 'Specialty shop on Stari trg selling traditional Slovenian potica nut roll, including mini sizes', { reviewCount: 125 }),
  place('ljubljana-bakery-4', 'ljubljana', 'bakery', 'Pekarna Pečjak (Tržnica Arkade)', 4.5, 'Adamič-Lundrovo nabrežje 4, 1000 Ljubljana, Slovenia', '류블랴나 중앙시장 아케이드에 위치한 페치니 베이커리 매장', "Pečjak bakery outlet inside the arcade of Ljubljana's central market (Tržnica)", { reviewCount: 84 }),
  place('ljubljana-cafe-1', 'ljubljana', 'cafe', 'Čokl', 4.6, 'Krekov trg 9, 1000 Ljubljana, Slovenia', '크레코브 광장의 카페, 테라스에서 류블랴나 성과 인형극장이 보임', 'Cafe on Krekov trg with a terrace overlooking Ljubljana Castle and the puppet theatre', { reviewCount: 655 }),
  place('ljubljana-cafe-2', 'ljubljana', 'cafe', 'Tozd', 4.5, 'Cankarjeva cesta 8, 1000 Ljubljana, Slovenia', '칸카르예바 거리의 힙스터 감성 카페 겸 바', 'Hipster-style cafe and bar on Cankarjeva cesta near the riverside', { reviewCount: 1412 }),
  place('ljubljana-cafe-3', 'ljubljana', 'cafe', 'Cafetino', 4.7, 'Stari trg 5, 1000 Ljubljana, Slovenia', '스타리 광장의 인기 커피숍, 원두를 직접 골라 마실 수 있음', 'Popular coffee shop on Stari trg where customers can choose their own coffee beans', { reviewCount: 1202 }),
  place('ljubljana-korean-1', 'ljubljana', 'korean', '오감 (Ogam)', 4.6, 'Kolodvorska ulica 7, 1000 Ljubljana, Slovenia', '콜로드보르스카 거리의 인기 한식당', 'Popular Korean restaurant on Kolodvorska street in Ljubljana', { reviewCount: 838 }),

  // —— bled ——
  place('bled-fine_dining-1', 'bled', 'fine_dining', 'Restaurant Julijana', 4.6, 'Cesta Svobode 12, 4260 Bled, Slovenia', '그랜드 호텔 토플리체 내 위치한 블레드 호수 전망 파인다이닝, 슬로베니아 미쉐린 가이드 등재', 'Elegant lake-view restaurant at the Grand Hotel Toplice, one of the few Slovenian restaurants featured in the Michelin Guide'),
  place('bled-bakery-1', 'bled', 'bakery', 'Slaščičarna Zima', 4.4, 'Grajska cesta 3, 4260 Bled, Slovenia', '블레드에서 가장 오래된 전통을 지닌 제과점, 명물 크렘나 레지나(크림 케이크)로 유명', 'Bled\'s longest-standing confectionery, famous for the town\'s signature kremna rezina cream cake'),
  place('bled-cafe-1', 'bled', 'cafe', 'Kavarna Belvedere', 4.4, 'Cesta svobode 18, 4260 Bled, Slovenia', '건축가 요제 플레치니크가 설계한 파빌리온에서 블레드 호수와 섬 전망을 즐기는 카페', 'Cafe in a pavilion designed by architect Jože Plečnik, offering views of Lake Bled and its island'),

  // —— piran ——
  place('piran-fine_dining-1', 'piran', 'fine_dining', 'Pri Mari', 4.6, 'Dantejeva ulica 17, 6330 Piran, Slovenia', '지역 어부에게서 공수한 신선한 해산물로 유명한 피란의 가족 운영 레스토랑', 'Family-run restaurant in Piran known for fresh seafood sourced from local fishermen'),
  place('piran-bakery-1', 'piran', 'bakery', 'Naša Pekarna', 4.4, 'Via Fran Levstik 1, 6330 Piran, Slovenia', '타르티니 광장 인근 시장가의 정겨운 피란 베이커리, 신선한 빵과 페이스트리로 인기', 'Cozy Piran bakery near the market by Tartini Square, popular for fresh bread and pastries'),
  place('piran-cafe-1', 'piran', 'cafe', 'Caffe Neptun', 4.6, 'Dantejeva ulica 4, 6330 Piran, Slovenia', '지속가능성과 품질을 함께 추구하는 피란의 스페셜티 커피숍', 'Piran specialty coffee shop focused equally on sustainability and quality'),

  // —— maribor ——
  place('maribor-fine_dining-1', 'maribor', 'fine_dining', 'Pri Starem Mostu', 4.4, 'Dravska ulica 9, 2000 Maribor, Slovenia', '마리보르 옛 다리 옆에 위치해 드라바 강 전망을 즐길 수 있는 우아한 레스토랑', 'Elegant restaurant next to Maribor\'s Old Bridge with gorgeous views over the Drava River'),
  place('maribor-bakery-1', 'maribor', 'bakery', 'Slovenka', 4.4, 'Gosposka 9, 2000 Maribor, Slovenia', '슬로베니아 가정식과 건강 디저트, 다양한 베이커리류를 선보이는 마리보르의 인기 베이커리 카페', 'Popular Maribor bakery cafe offering homestyle Slovenian dishes, healthy desserts and a wide baked-goods selection'),
  place('maribor-cafe-1', 'maribor', 'cafe', 'HiKoFi', 4.7, 'Tyrševa 13, 2000 Maribor, Slovenia', '숙련된 바리스타가 내리는 마리보르 최고의 커피로 꼽히는 아담한 스페셜티 커피숍', 'Small specialty coffee shop widely regarded as serving the best coffee in Maribor'),

  // —— postojna ——
  place('postojna-fine_dining-1', 'postojna', 'fine_dining', 'Bistro Štorja', 4.5, 'Ulica 1. maja 1, 6230 Postojna, Slovenia', '전통과 현대적 감각을 조화시킨 포스토이나의 대표 비스트로, 미쉐린 가이드에도 소개됨', 'Postojna\'s leading bistro blending tradition with a modern touch, featured in the Michelin Guide'),

  place('postojna-bakery-1', 'postojna', 'bakery', 'Brilliant Bakery (Pekarna Briljant)', 4.5, 'Titov trg 3, 6230 Postojna, Slovenia', '포스토이나 중심가의 향토 베이커리, 신선한 빵과 페이스트리, 전통 디저트로 유명', 'Postojna\'s local treasure for fresh bread, pastries and traditional desserts, on the main square'),
  place('postojna-cafe-1', 'postojna', 'cafe', 'Kavarna Siesta', 4.4, 'Novi trg 8, TPC Primorka, 6230 Postojna, Slovenia', '직접 만든 케이크와 아이스크림을 선보이는 포스토이나의 카페 겸 페이스트리숍', 'Postojna cafe and pastry shop offering selected coffee, cakes and house-made ice cream'),
]
