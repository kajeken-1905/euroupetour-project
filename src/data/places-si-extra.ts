import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSIExtra: Place[] = [
  // —— ljubljana ——
  place('ljubljana-fine_dining-1', 'ljubljana', 'fine_dining', 'Strelec', 'Grajska planota 1, 1000 Ljubljana, Slovenia', '류블랴나성 안의 미쉐린 1스타 레스토랑. 도시 전망과 함께 테이스팅 메뉴를 냅니다.', 'One-Michelin-star restaurant inside Ljubljana Castle, serving tasting menus with city views.', { michelin: 'star1' }),
  place('ljubljana-fine_dining-2', 'ljubljana', 'fine_dining', 'JB Restaurant', 'Volčji Potok 43G, 1235 Radomlje, Slovenia', '류블랴나 근교 라돔리에의 셰프 야네즈 브라토브시 레스토랑. 테이스팅 메뉴를 냅니다.', 'Restaurant of chef Janez Bratovž in Radomlje near Ljubljana, serving tasting menus.'),
  place('ljubljana-fine_dining-3', 'ljubljana', 'fine_dining', 'AS', 'Čopova ulica 5a, 1000 Ljubljana, Slovenia', '촙바 거리의 레스토랑. 스테이크와 파스타가 있습니다.', 'Restaurant on Čopova street with steaks and pasta.'),
  place('ljubljana-fine_dining-4', 'ljubljana', 'fine_dining', 'Gostilna Sokol', 'Ciril-Metodov trg 18, 1000 Ljubljana, Slovenia', '치릴-메토드 광장의 슬로베니아 전통 선술집.', 'Traditional Slovenian gostilna on Ciril-Metodov square.'),
  place('ljubljana-bakery-1', 'ljubljana', 'bakery', 'Brot Pekarna', 'Poljanska cesta 11, 1000 Ljubljana, Slovenia', '폴랸스카 거리의 베이커리', 'Bakery on Poljanska street in Ljubljana'),
  place('ljubljana-bakery-3', 'ljubljana', 'bakery', 'Butik lePotica', 'Stari trg 10, 1000 Ljubljana, Slovenia', '스타리 광장의 전통 포티차(호두빵) 전문점, 미니 사이즈로도 판매', 'Specialty shop on Stari trg selling traditional Slovenian potica nut roll, including mini sizes'),
  place('ljubljana-cafe-1', 'ljubljana', 'cafe', 'Čokl', 'Krekov trg 8, 1000 Ljubljana, Slovenia', '크레코브 광장의 카페, 테라스에서 류블랴나 성과 인형극장이 보임', 'Cafe on Krekov trg with a terrace overlooking Ljubljana Castle and the puppet theatre', { image: '/places/ljubljana-cafe-1.jpg' }),
  place('ljubljana-cafe-2', 'ljubljana', 'cafe', 'Tozd', 'Cankarjeva cesta 8, 1000 Ljubljana, Slovenia', '칸카르예바 거리의 힙스터 감성 카페 겸 바', 'Hipster-style cafe and bar on Cankarjeva cesta near the riverside', { image: '/places/ljubljana-cafe-2.jpg' }),
  place('ljubljana-cafe-3', 'ljubljana', 'cafe', 'Cafetino', 'Stari trg 5, 1000 Ljubljana, Slovenia', '스타리 광장의 커피숍. 원두를 골라 마실 수 있습니다.', 'Coffee shop on Stari trg where you can choose your beans.'),
  place('ljubljana-korean-1', 'ljubljana', 'korean', 'Ogam', 'Miklošičeva cesta 9d, 1000 Ljubljana, Slovenia', '미클로시체바 거리 상가 안의 가족 운영 한식당. 일요일은 쉽니다.', 'Family-run Korean restaurant in a shopping arcade on Miklošičeva cesta; closed Sundays.'),

  // —— bled ——
  place('bled-fine_dining-1', 'bled', 'fine_dining', 'Restaurant Julijana', 'Cesta Svobode 12, 4260 Bled, Slovenia', '그랜드 호텔 토플리체 안의 레스토랑. 미쉐린 가이드에 실려 있고 일·월요일은 쉽니다.', 'Restaurant in the Grand Hotel Toplice, listed in the Michelin Guide; closed Sundays and Mondays.'),
  place('bled-fine_dining-2', 'bled', 'fine_dining', 'Wine Bar & Restaurant Čarman', 'Cesta svobode 37, 4260 Bled, Slovenia', '체스타 스보보데 거리의 와인 바 겸 레스토랑.', 'Wine bar and restaurant on Cesta svobode in Bled.'),
  place('bled-fine_dining-3', 'bled', 'fine_dining', "Oštarija Peglez'n", 'Cesta svobode 19a, 4260 Bled, Slovenia', '블레드의 슬로베니아 전통 식당.', 'Traditional Slovenian restaurant in Bled.'),
  place('bled-bakery-1', 'bled', 'bakery', 'Slaščičarna Zima', 'Grajska cesta 3, 4260 Bled, Slovenia', '블레드 크림 케이크(크렘나 레지나)를 파는 제과점.', 'Pastry shop selling Bled’s kremna rezina cream cake.'),
  place('bled-bakery-2', 'bled', 'bakery', 'ŠMON Slaščičarna', 'Ljubljanska cesta 11, 4260 Bled, Slovenia', '류블랸스카 거리의 페이스트리 전문점', 'Pastry specialty shop on Ljubljanska cesta in Bled'),
  place('bled-bakery-3', 'bled', 'bakery', 'Pekarna Planika', 'Prešernova cesta 11, 4260 Bled, Slovenia', '프레셰르노바 거리의 베이커리', 'Bakery on Prešernova cesta in Bled'),
  place('bled-cafe-1', 'bled', 'cafe', 'Kavarna Belvedere', 'Cesta svobode 18, 4260 Bled, Slovenia', '요제 플레치니크가 설계한 빌라 블레드 정원의 파빌리온 카페. 5~9월에만 엽니다.', 'Pavilion café designed by Jože Plečnik in the grounds of Vila Bled; open May to September only.'),

  // —— piran ——
  place('piran-fine_dining-1', 'piran', 'fine_dining', 'Pri Mari', 'Dantejeva ulica 17, 6330 Piran, Slovenia', '지역 어부의 생선을 쓰는 피란의 가족 운영 식당.', 'Family-run Piran restaurant using fish from local fishermen.'),
  place('piran-fine_dining-2', 'piran', 'fine_dining', 'Seafood Restaurant Polpo', 'Fornače 35, 6330 Piran, Slovenia', '포르나체 지역의 해산물 식당.', 'Seafood restaurant in the Fornače area of Piran.'),
  place('piran-fine_dining-3', 'piran', 'fine_dining', 'Gostilna Rostelin', 'Kosovelova ulica 2, 6330 Piran, Slovenia', '피란 구시가의 가스틸나(전통 식당).', 'Gostilna (traditional inn) in Piran\'s old town.'),
  place('piran-bakery-1', 'piran', 'bakery', 'Naša Pekarna', 'Via Fran Levstik 1, 6330 Piran, Slovenia', '타르티니 광장 근처 시장가의 빵집.', 'Bakery near the market by Tartini Square.'),
  place('piran-bakery-2', 'piran', 'bakery', 'Slaščičarna "PIRAN" Pasticceria', 'Cankarjevo nabrežje 1, 6330 Piran, Slovenia', '찬카리예보 나브레제 거리의 페이스트리 전문점', 'Pastry specialty shop on Cankarjevo nabrežje in Piran'),
  place('piran-cafe-1', 'piran', 'cafe', 'Caffe Neptun', 'Dantejeva ulica 4, 6330 Piran, Slovenia', '지속가능성과 품질을 함께 추구하는 피란의 스페셜티 커피숍', 'Piran specialty coffee shop focused equally on sustainability and quality'),
  place('piran-cafe-2', 'piran', 'cafe', 'Cafinho Piran', 'Prešernovo nabrežje 4, 6330 Piran, Slovenia', '프레셰르노보 해안 산책로의 카페 겸 바.', 'Café and bar on the Prešernovo nabrežje waterfront.'),
  place('piran-cafe-3', 'piran', 'cafe', 'Caffè al Teatro', 'Stjenkova ulica 1, 6330 Piran, Slovenia', '스티엔코바 거리의 카페 겸 바', 'Cafe and bar on Stjenkova ulica in Piran'),

  // —— maribor ——
  place('maribor-fine_dining-2', 'maribor', 'fine_dining', 'Restavracija Mak', 'Osojnikova ulica 20, 2000 Maribor, Slovenia', '셰프 다비드 브라치코가 긴 테이스팅 메뉴 하나만 내는 마리보르의 레스토랑.', 'Maribor restaurant where chef David Vračko serves a single long tasting menu.'),
  place('maribor-fine_dining-3', 'maribor', 'fine_dining', 'Restavracija Sedem', 'Cafova ulica 7, 2000 Maribor, Slovenia', '차포바 거리의 레스토랑.', 'Restaurant on Cafova ulica in Maribor.'),
  place('maribor-fine_dining-5', 'maribor', 'fine_dining', 'Baščaršija', 'Poštna ulica 8, 2000 Maribor, Slovenia', '포슈트나 거리의 발칸 요리 식당.', 'Balkan restaurant on Poštna ulica in Maribor.'),
  place('maribor-bakery-2', 'maribor', 'bakery', 'Pekarna Totaj', 'Ruska ulica 7, 2000 Maribor, Slovenia', '루스카 거리의 빵집.', 'Bakery on Ruska ulica in Maribor.'),
  place('maribor-bakery-3', 'maribor', 'bakery', 'Pekarna Zenit', 'Železnikova ulica 11, 2000 Maribor, Slovenia', '젤레즈니코바 거리의 베이커리', 'Bakery on Železnikova ulica in Maribor'),
  place('maribor-cafe-1', 'maribor', 'cafe', 'HiKoFi', 'Tyrševa 13, 2000 Maribor, Slovenia', '마리보르의 작은 스페셜티 커피숍.', 'Small specialty coffee shop in Maribor.'),
  place('maribor-cafe-2', 'maribor', 'cafe', 'my Cafe', 'Partizanska cesta 1, 2000 Maribor, Slovenia', '파르티잔스카 대로의 카페.', 'Café on Partizanska cesta in Maribor.'),
  place('maribor-cafe-3', 'maribor', 'cafe', 'Rooster Coffee', 'Ulica 10. oktobra 1, 2000 Maribor, Slovenia', '10월 10일 거리의 커피숍.', 'Coffee shop on Ulica 10. oktobra in Maribor.', { image: '/places/maribor-cafe-3.jpg' }),

  // —— postojna ——
  place('postojna-fine_dining-1', 'postojna', 'fine_dining', 'Bistro Štorja', 'Ulica 1. maja 1, 6230 Postojna, Slovenia', '전통과 현대 감각을 섞은 포스토이나의 비스트로.', 'Postojna bistro mixing traditional and modern cooking.'),
  place('postojna-fine_dining-2', 'postojna', 'fine_dining', 'Gostilna Ob Kaminu', 'Tržaška cesta 88, 6230 Postojna, Slovenia', '트르자슈카 대로의 레스토랑.', 'Restaurant on Tržaška cesta in Postojna.'),

]
