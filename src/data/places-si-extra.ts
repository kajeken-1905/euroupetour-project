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

  // —— postojna: bakeries and cafés (2026-11-04) ——
  place('postojna-cafe-1', 'postojna', 'cafe', 'Qubik caffe', 'Novi trg 8, 6230 Postojna', '시내 광장의 카페.', 'Café on the town square.'),
  place('postojna-cafe-2', 'postojna', 'cafe', 'Time Out Caffè', 'Tržaška cesta 62, 6230 Postojna', '시내의 카페.', 'Café in the town.'),

  // —— bohinj: restaurants, bakeries and cafés (2026-11-06) ——
  place('bohinj-fine_dining-1', 'bohinj', 'fine_dining', 'Restavracija Majerca', 'Stara Fužina 19, 4265 Bohinjsko jezero, Slovenia', '스타라 푸지나 마을 부티크 호텔 안의 아담한 레스토랑. 미쉐린 빕 구르망.', 'Intimate restaurant in a boutique hotel in Stara Fužina village. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('bohinj-fine_dining-2', 'bohinj', 'fine_dining', 'Vila Muhr Gourmet', 'Ribčev Laz 45, 4265 Bohinjsko jezero, Slovenia', '호숫가 마을 리브체우 라즈의 고급 레스토랑.', 'Fine-dining restaurant in the lakeside village of Ribčev Laz.'),
  place('bohinj-fine_dining-3', 'bohinj', 'fine_dining', 'Restaurant Sunrose 7', 'Triglavska cesta 7, 4264 Bohinjska Bistrica, Slovenia', '보힌스카 비스트리차 호텔의 레스토랑.', 'Hotel restaurant in Bohinjska Bistrica.'),
  place('bohinj-bakery-1', 'bohinj', 'bakery', 'Pekarna Planika', 'Triglavska cesta 52, 4264 Bohinjska Bistrica, Slovenia', '보힌스카 비스트리차의 빵집.', 'Bakery in Bohinjska Bistrica.'),

  // —— ptuj: restaurants, bakeries and cafés (2026-11-06) ——
  place('ptuj-fine_dining-1', 'ptuj', 'fine_dining', 'Gostilna Amadeus', 'Prešernova ulica 36, 2250 Ptuj, Slovenia', '구시가의 슬로베니아 요리 식당.', 'Slovenian restaurant in the old town.'),
  place('ptuj-fine_dining-2', 'ptuj', 'fine_dining', 'Gostilna Ribič', 'Dravska ulica 9, 2250 Ptuj, Slovenia', '드라바 강가의 생선·슬로베니아 요리 식당.', 'Fish and Slovenian dishes by the Drava.'),
  place('ptuj-fine_dining-3', 'ptuj', 'fine_dining', 'Gostilna Rozika', 'Slomškova ulica 7, 2250 Ptuj, Slovenia', '구시가의 가정식 식당.', 'Home-style restaurant in the old town.'),
  place('ptuj-fine_dining-4', 'ptuj', 'fine_dining', 'Restaurant Pomaranča', 'Ob Dravi 3a, 2250 Ptuj, Slovenia', '드라바 강변의 레스토랑.', 'Restaurant on the Drava riverside.'),
  place('ptuj-cafe-1', 'ptuj', 'cafe', 'Kavarna Bodi', 'Ulica heroja Lacka 8, 2250 Ptuj, Slovenia', '구시가의 카페.', 'Café in the old town.'),
  place('ptuj-cafe-2', 'ptuj', 'cafe', 'Kavoteka', 'Ulica 25. maja 13b, 2250 Ptuj, Slovenia', '커피 카페.', 'Coffee café.'),
  place('ptuj-cafe-3', 'ptuj', 'cafe', 'Kavarna Malina', 'Novi trg 3, 2250 Ptuj, Slovenia', '노비 광장의 카페.', 'Café on Novi trg.'),
  place('ptuj-cafe-4', 'ptuj', 'cafe', 'Čokoladna kavarna Teta Frida', 'Mestni trg 2, 2250 Ptuj, Slovenia', '시청 광장의 초콜릿 카페.', 'Chocolate café on the town-hall square.'),
  place('ptuj-bakery-1', 'ptuj', 'bakery', 'Brahaj pekarstvo', 'Ulica heroja Lacka 10, 2250 Ptuj, Slovenia', '구시가의 빵집.', 'Bakery in the old town.'),
  place('ptuj-bakery-2', 'ptuj', 'bakery', 'Trgovina presta', 'Miklošičeva ulica 3, 2250 Ptuj, Slovenia', '프레첼과 빵을 파는 작은 가게.', 'Small shop selling pretzels and bread.'),

  // —— bovec: restaurants, bakeries and cafés (2026-11-06) ——
  place('bovec-fine_dining-1', 'bovec', 'fine_dining', 'Hiša Franko', 'Staro selo 1, 5222 Kobarid, Slovenia', '코바리드 근처 셰프 아나 로시의 레스토랑. 미쉐린 3스타.', 'Chef Ana Roš’s restaurant near Kobarid. Three MICHELIN stars.', { michelin: 'star3' }),
  place('bovec-fine_dining-2', 'bovec', 'fine_dining', 'Hiša Polonka', 'Gregorčičeva ulica 1, 5222 Kobarid, Slovenia', '코바리드 중심의 선술집 겸 식당. 미쉐린 가이드 선정.', 'Lively tavern-restaurant in the centre of Kobarid. In the MICHELIN Guide.'),
  place('bovec-fine_dining-3', 'bovec', 'fine_dining', 'Bistro 9:45', 'Ravni Laz 18, 5230 Bovec, Slovenia', '보베츠 외곽 자연 속의 작은 비스트로. 미쉐린 가이드 선정.', 'Small bistro in the countryside on the edge of Bovec. In the MICHELIN Guide.'),
  place('bovec-fine_dining-4', 'bovec', 'fine_dining', 'Gostilna Žvikar', 'Podklopca 4, 5230 Bovec, Slovenia', '보베츠의 슬로베니아 요리 식당.', 'Slovenian restaurant in Bovec.'),
  place('bovec-bakery-1', 'bovec', 'bakery', 'Pekarna Bovec', 'Mala vas 14, 5230 Bovec, Slovenia', '마을 빵집.', 'Village bakery.'),

  // —— koper: restaurants, bakeries and cafés (2026-11-06) ——
  place('koper-fine_dining-1', 'koper', 'fine_dining', 'Kogo', 'Šmarska cesta 1, 6000 Koper, Slovenia', '시내에서 조금 떨어진 현대식 레스토랑. 미쉐린 가이드 선정.', 'Modern restaurant a little out of the centre. In the MICHELIN Guide.'),
  place('koper-fine_dining-2', 'koper', 'fine_dining', 'Salicornia', 'Sermin 74, 6000 Koper, Slovenia', '시내 외곽 세르민의 밝은 레스토랑. 미쉐린 가이드 선정.', 'Bright restaurant in Sermin, on the edge of town. In the MICHELIN Guide.'),
  place('koper-fine_dining-3', 'koper', 'fine_dining', 'Restavracija Hotela Marina', 'Veliki trg 11, 6310 Izola, Slovenia', '이졸라 항구 앞 호텔 레스토랑. 미쉐린 가이드 선정.', 'Hotel restaurant facing Izola harbour. In the MICHELIN Guide.'),
  place('koper-fine_dining-4', 'koper', 'fine_dining', 'Stella Maris', 'Ukmarjev trg, 6000 Koper, Slovenia', '항구 앞의 생선 식당 겸 바.', 'Fish canteen and bar by the harbour.'),
  place('koper-fine_dining-5', 'koper', 'fine_dining', 'Gostilna Pri Tinetu', 'Gortanov trg 14, 6000 Koper, Slovenia', '구시가의 가정식 식당.', 'Home-style restaurant in the old town.'),
  place('koper-fine_dining-6', 'koper', 'fine_dining', 'Capra', 'Pristaniška ulica, 6000 Koper, Slovenia', '항구 쪽의 지중해 요리 레스토랑.', 'Mediterranean restaurant near the port.'),
  place('koper-cafe-1', 'koper', 'cafe', 'Kavarna Kapitanija', 'Ukmarjev trg 8, 6000 Koper, Slovenia', '항구 앞 광장의 카페.', 'Café on the harbour square.'),
  place('koper-cafe-2', 'koper', 'cafe', 'Golden Loggia', 'Titov trg 1, 6000 Koper, Slovenia', '티토 광장 로지아 안의 카페.', 'Café in the loggia on Tito Square.'),
  place('koper-cafe-3', 'koper', 'cafe', 'Kavarna & Brunch Cappuccino', 'Kopališko nabrežje, 6000 Koper, Slovenia', '바닷가 산책로의 카페 겸 브런치 가게.', 'Café and brunch spot on the seafront promenade.'),
  place('koper-bakery-1', 'koper', 'bakery', 'Slaščičarna Tradicija', 'Repičeva ulica 2, 6000 Koper, Slovenia', '구시가의 과자점.', 'Pastry shop in the old town.'),
  place('koper-bakery-2', 'koper', 'bakery', 'Europa Bakery', 'Kidričeva ulica 4, 6000 Koper, Slovenia', '구시가의 빵집.', 'Bakery in the old town.'),
]
