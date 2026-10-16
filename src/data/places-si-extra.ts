import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSIExtra: Place[] = [
  // —— ljubljana ——
  place('ljubljana-fine_dining-1', 'ljubljana', 'fine_dining', 'Strelec', 'Grajska planota 1, 1000 Ljubljana, Slovenia', '류블랴나 성 안에 자리한 파인다이닝, 도시 전망과 함께 다코스 테이스팅 메뉴를 제공', 'Fine-dining restaurant inside Ljubljana Castle offering multi-course tasting menus with city views'),
  place('ljubljana-fine_dining-2', 'ljubljana', 'fine_dining', 'JB Restaurant', 'Volčji Potok 43G, 1235 Radomlje, Slovenia', '류블랴나 인근 라돔리예에 위치한 야네즈 브라토브지 셰프의 파인다이닝, 테이스팅 메뉴로 유명', 'Fine-dining restaurant by chef Janez Bratovž in Radomlje near Ljubljana, known for its tasting menus'),
  place('ljubljana-fine_dining-3', 'ljubljana', 'fine_dining', 'AS', 'Čopova ulica 5a, 1000 Ljubljana, Slovenia', '촙바 거리의 인기 레스토랑, 스테이크와 파스타로 알려짐', 'Popular restaurant on Čopova street known for its steaks and pasta'),
  place('ljubljana-fine_dining-4', 'ljubljana', 'fine_dining', 'Gostilna Sokol', 'Ciril-Metodov trg 18, 1000 Ljubljana, Slovenia', '치릴-메토드 광장에 위치한 류블랴나의 대표 전통 슬로베니아 선술집', "Ljubljana's landmark traditional Slovenian gostilna on Ciril-Metodov square"),
  place('ljubljana-bakery-1', 'ljubljana', 'bakery', 'Brot Pekarna', 'Poljanska cesta 11, 1000 Ljubljana, Slovenia', '폴랸스카 거리의 베이커리', 'Bakery on Poljanska street in Ljubljana'),
  place('ljubljana-bakery-3', 'ljubljana', 'bakery', 'Butik lePotica', 'Stari trg 10, 1000 Ljubljana, Slovenia', '스타리 광장의 전통 포티차(호두빵) 전문점, 미니 사이즈로도 판매', 'Specialty shop on Stari trg selling traditional Slovenian potica nut roll, including mini sizes'),
  place('ljubljana-bakery-4', 'ljubljana', 'bakery', 'Pekarna Pečjak (Tržnica Arkade)', 'Adamič-Lundrovo nabrežje 4, 1000 Ljubljana, Slovenia', '류블랴나 중앙시장 아케이드에 위치한 페치니 베이커리 매장', "Pečjak bakery outlet inside the arcade of Ljubljana's central market (Tržnica)"),
  place('ljubljana-cafe-1', 'ljubljana', 'cafe', 'Čokl', 'Krekov trg 9, 1000 Ljubljana, Slovenia', '크레코브 광장의 카페, 테라스에서 류블랴나 성과 인형극장이 보임', 'Cafe on Krekov trg with a terrace overlooking Ljubljana Castle and the puppet theatre', { image: '/places/ljubljana-cafe-1.jpg' }),
  place('ljubljana-cafe-2', 'ljubljana', 'cafe', 'Tozd', 'Cankarjeva cesta 8, 1000 Ljubljana, Slovenia', '칸카르예바 거리의 힙스터 감성 카페 겸 바', 'Hipster-style cafe and bar on Cankarjeva cesta near the riverside', { image: '/places/ljubljana-cafe-2.jpg' }),
  place('ljubljana-cafe-3', 'ljubljana', 'cafe', 'Cafetino', 'Stari trg 5, 1000 Ljubljana, Slovenia', '스타리 광장의 인기 커피숍, 원두를 직접 골라 마실 수 있음', 'Popular coffee shop on Stari trg where customers can choose their own coffee beans'),
  place('ljubljana-korean-1', 'ljubljana', 'korean', '오감 (Ogam)', 'Kolodvorska ulica 7, 1000 Ljubljana, Slovenia', '콜로드보르스카 거리의 인기 한식당', 'Popular Korean restaurant on Kolodvorska street in Ljubljana'),

  // —— bled ——
  place('bled-fine_dining-1', 'bled', 'fine_dining', 'Restaurant Julijana', 'Cesta Svobode 12, 4260 Bled, Slovenia', '그랜드 호텔 토플리체 내 위치한 블레드 호수 전망 파인다이닝, 슬로베니아 미쉐린 가이드 등재', 'Elegant lake-view restaurant at the Grand Hotel Toplice, one of the few Slovenian restaurants featured in the Michelin Guide'),
  place('bled-fine_dining-2', 'bled', 'fine_dining', 'Wine Bar & Restaurant Čarman', 'Cesta svobode 37, 4260 Bled, Slovenia', '체스타 스보보데 거리의 인기 와인바 겸 레스토랑', 'Popular wine bar and restaurant on Cesta svobode in Bled'),
  place('bled-fine_dining-3', 'bled', 'fine_dining', "Oštarija Peglez'n", 'Cesta svobode 19a, 4260 Bled, Slovenia', '블레드의 대표 전통 슬로베니아 레스토랑', "Bled's landmark traditional Slovenian restaurant"),
  place('bled-bakery-1', 'bled', 'bakery', 'Slaščičarna Zima', 'Grajska cesta 3, 4260 Bled, Slovenia', '블레드에서 가장 오래된 전통을 지닌 제과점, 명물 크렘나 레지나(크림 케이크)로 유명', 'Bled\'s longest-standing confectionery, famous for the town\'s signature kremna rezina cream cake'),
  place('bled-bakery-2', 'bled', 'bakery', 'ŠMON Slaščičarna', 'Ljubljanska cesta 11, 4260 Bled, Slovenia', '류블랸스카 거리의 페이스트리 전문점', 'Pastry specialty shop on Ljubljanska cesta in Bled'),
  place('bled-bakery-3', 'bled', 'bakery', 'Pekarna Planika', 'Prešernova cesta 11, 4260 Bled, Slovenia', '프레셰르노바 거리의 베이커리', 'Bakery on Prešernova cesta in Bled'),
  place('bled-cafe-1', 'bled', 'cafe', 'Kavarna Belvedere', 'Cesta svobode 18, 4260 Bled, Slovenia', '건축가 요제 플레치니크가 설계한 파빌리온에서 블레드 호수와 섬 전망을 즐기는 카페', 'Cafe in a pavilion designed by architect Jože Plečnik, offering views of Lake Bled and its island'),
  place('bled-cafe-2', 'bled', 'cafe', 'Kavarna Midva', 'Grajska cesta 10, 4260 Bled, Slovenia', '그라이스카 거리의 인기 커피숍', 'Popular coffee shop on Grajska cesta in Bled'),

  // —— piran ——
  place('piran-fine_dining-1', 'piran', 'fine_dining', 'Pri Mari', 'Dantejeva ulica 17, 6330 Piran, Slovenia', '지역 어부에게서 공수한 신선한 해산물로 유명한 피란의 가족 운영 레스토랑', 'Family-run restaurant in Piran known for fresh seafood sourced from local fishermen'),
  place('piran-fine_dining-2', 'piran', 'fine_dining', 'Seafood Restaurant Polpo', 'Fornače 35, 6330 Piran, Slovenia', '포르나체 지역의 인기 해산물 레스토랑', 'Popular seafood restaurant in the Fornače area of Piran'),
  place('piran-fine_dining-3', 'piran', 'fine_dining', 'Rostelin', 'Gallusova ulica 2, 6330 Piran, Slovenia', '갈루소바 거리의 인기 레스토랑', 'Popular restaurant on Gallusova ulica in Piran'),
  place('piran-bakery-1', 'piran', 'bakery', 'Naša Pekarna', 'Via Fran Levstik 1, 6330 Piran, Slovenia', '타르티니 광장 인근 시장가의 정겨운 피란 베이커리, 신선한 빵과 페이스트리로 인기', 'Cozy Piran bakery near the market by Tartini Square, popular for fresh bread and pastries'),
  place('piran-bakery-2', 'piran', 'bakery', 'Slaščičarna "PIRAN" Pasticceria', 'Cankarjevo nabrežje 1, 6330 Piran, Slovenia', '찬카리예보 나브레제 거리의 페이스트리 전문점', 'Pastry specialty shop on Cankarjevo nabrežje in Piran'),
  place('piran-bakery-3', 'piran', 'bakery', 'Pastry Shop and Café Opera', 'Obala 63, 6330 Piran, Slovenia', '오발라 해안가의 페이스트리숍 겸 카페', 'Pastry shop and cafe on the Obala waterfront in Piran'),
  place('piran-cafe-1', 'piran', 'cafe', 'Caffe Neptun', 'Dantejeva ulica 4, 6330 Piran, Slovenia', '지속가능성과 품질을 함께 추구하는 피란의 스페셜티 커피숍', 'Piran specialty coffee shop focused equally on sustainability and quality'),
  place('piran-cafe-2', 'piran', 'cafe', 'Cafinho Piran', 'Prešernovo nabrežje 4, 6330 Piran, Slovenia', '프레셰르노보 나브레제 해안가의 인기 카페 겸 바', 'Popular cafe and bar on the Prešernovo nabrežje waterfront in Piran'),
  place('piran-cafe-3', 'piran', 'cafe', 'Caffè al Teatro', 'Stjenkova ulica 1, 6330 Piran, Slovenia', '스티엔코바 거리의 카페 겸 바', 'Cafe and bar on Stjenkova ulica in Piran'),

  // —— maribor ——
  place('maribor-fine_dining-1', 'maribor', 'fine_dining', 'Pri Starem Mostu', 'Dravska ulica 9, 2000 Maribor, Slovenia', '마리보르 옛 다리 옆에 위치해 드라바 강 전망을 즐길 수 있는 우아한 레스토랑', 'Elegant restaurant next to Maribor\'s Old Bridge with gorgeous views over the Drava River'),
  place('maribor-fine_dining-2', 'maribor', 'fine_dining', 'Gostinstvo Mak', 'Osojnikova ulica 20, 2000 Maribor, Slovenia', '오소이니코바 거리에 위치한 마리보르의 고급 다이닝 레스토랑', 'Fine-dining restaurant on Osojnikova ulica in Maribor'),
  place('maribor-fine_dining-3', 'maribor', 'fine_dining', 'Restavracija Sedem', 'Cafova ulica 7, 2000 Maribor, Slovenia', '차포바 거리의 인기 레스토랑', 'Popular restaurant on Cafova ulica in Maribor'),
  place('maribor-fine_dining-4', 'maribor', 'fine_dining', 'Mandl Food & Bar', 'Ulica kneza Koclja 6, 2000 Maribor, Slovenia', '크네자 코클랴 거리의 인기 레스토랑 겸 바', 'Popular restaurant and bar on Ulica kneza Koclja in Maribor'),
  place('maribor-fine_dining-5', 'maribor', 'fine_dining', 'Baščaršija (Maribor Poštna)', 'Poštna ulica, 2000 Maribor, Slovenia', '포슈트나 거리의 인기 발칸 요리 레스토랑', 'Popular Balkan-cuisine restaurant on Poštna ulica in Maribor'),
  place('maribor-bakery-1', 'maribor', 'bakery', 'Slovenka', 'Gosposka 9, 2000 Maribor, Slovenia', '슬로베니아 가정식과 건강 디저트, 다양한 베이커리류를 선보이는 마리보르의 인기 베이커리 카페', 'Popular Maribor bakery cafe offering homestyle Slovenian dishes, healthy desserts and a wide baked-goods selection'),
  place('maribor-bakery-2', 'maribor', 'bakery', 'Pekarna Totaj', 'Ruska ulica 7, 2000 Maribor, Slovenia', '루스카 거리의 인기 베이커리', 'Popular bakery on Ruska ulica in Maribor'),
  place('maribor-bakery-3', 'maribor', 'bakery', 'Pekarna Zenit', 'Železnikova ulica 11, 2000 Maribor, Slovenia', '젤레즈니코바 거리의 베이커리', 'Bakery on Železnikova ulica in Maribor'),
  place('maribor-bakery-4', 'maribor', 'bakery', 'Pekarna Studenci', 'Valvasorjeva ulica 70, 2000 Maribor, Slovenia', '발바소리예바 거리의 베이커리', 'Bakery on Valvasorjeva ulica in Maribor'),
  place('maribor-cafe-1', 'maribor', 'cafe', 'HiKoFi', 'Tyrševa 13, 2000 Maribor, Slovenia', '숙련된 바리스타가 내리는 마리보르 최고의 커피로 꼽히는 아담한 스페셜티 커피숍', 'Small specialty coffee shop widely regarded as serving the best coffee in Maribor'),
  place('maribor-cafe-2', 'maribor', 'cafe', 'my Cafe', 'Partizanska cesta 1, 2000 Maribor, Slovenia', '파르티잔스카 대로의 인기 카페', 'Popular cafe on Partizanska cesta in Maribor'),
  place('maribor-cafe-3', 'maribor', 'cafe', 'Rooster Coffee', 'Ulica 10. oktobra 1, 2000 Maribor, Slovenia', '10월 10일 거리의 인기 커피숍', 'Popular coffee shop on Ulica 10. oktobra in Maribor', { image: '/places/maribor-cafe-3.jpg' }),
  place('maribor-cafe-4', 'maribor', 'cafe', 'Caffe Bianco', 'Šolska ulica 46, 2000 Maribor, Slovenia', '숄스카 거리의 커피 전문점', 'Coffee specialty shop on Šolska ulica in Maribor'),

  // —— postojna ——
  place('postojna-fine_dining-1', 'postojna', 'fine_dining', 'Bistro Štorja', 'Ulica 1. maja 1, 6230 Postojna, Slovenia', '전통과 현대적 감각을 조화시킨 포스토이나의 대표 비스트로, 미쉐린 가이드에도 소개됨', 'Postojna\'s leading bistro blending tradition with a modern touch, featured in the Michelin Guide'),
  place('postojna-fine_dining-2', 'postojna', 'fine_dining', 'Ob kaminu', 'Tržaška cesta 88, 6230 Postojna, Slovenia', '트르자슈카 대로의 인기 레스토랑', 'Popular restaurant on Tržaška cesta in Postojna'),

  place('postojna-bakery-1', 'postojna', 'bakery', 'Brilliant Bakery (Pekarna Briljant)', 'Titov trg 3, 6230 Postojna, Slovenia', '포스토이나 중심가의 향토 베이커리, 신선한 빵과 페이스트리, 전통 디저트로 유명', 'Postojna\'s local treasure for fresh bread, pastries and traditional desserts, on the main square'),
  place('postojna-bakery-2', 'postojna', 'bakery', 'Noc in dan', 'Ljubljanska cesta 13, 6230 Postojna, Slovenia', '류블랸스카 거리의 베이커리', 'Bakery on Ljubljanska cesta in Postojna'),
  place('postojna-cafe-1', 'postojna', 'cafe', 'Kavarna Siesta', 'Novi trg 8, TPC Primorka, 6230 Postojna, Slovenia', '직접 만든 케이크와 아이스크림을 선보이는 포스토이나의 카페 겸 페이스트리숍', 'Postojna cafe and pastry shop offering selected coffee, cakes and house-made ice cream'),
  place('postojna-cafe-2', 'postojna', 'cafe', 'Qubik caffe', 'Novi trg 8, 6230 Postojna, Slovenia', '노비 광장의 인기 카페', 'Popular cafe on Novi trg square in Postojna'),
  place('postojna-cafe-3', 'postojna', 'cafe', 'Županova Micka', 'Ljubljanska cesta 1, 6230 Postojna, Slovenia', '류블랸스카 거리의 인기 커피숍', 'Popular coffee shop on Ljubljanska cesta in Postojna'),
]
