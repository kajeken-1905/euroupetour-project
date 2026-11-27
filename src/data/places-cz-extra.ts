import { place } from './placeFactory'
import type { Place } from '../types'

export const placesCZExtra: Place[] = [
  // —— prague ——
  place('prague-fine_dining-1', 'prague', 'fine_dining', 'La Degustation Bohême Bourgeoise', 'Haštalská 18, 110 00 Prague, Czechia', '체코 전통 요리를 현대적으로 풀어낸 코스 요리 레스토랑. 미쉐린 1스타.', 'Tasting-menu restaurant reinventing traditional Czech cooking. One Michelin star.', { michelin: 'star1', image: '/places/prague-fine_dining-1.jpg' }),
  place('prague-fine_dining-2', 'prague', 'fine_dining', 'Field', 'U Milosrdných 12, 110 00 Prague 1, Czechia', '구시가지의 계절 코스 요리 레스토랑. 미쉐린 1스타.', 'Seasonal tasting-menu restaurant in the Old Town. One Michelin star.', { michelin: 'star1', image: '/places/prague-fine_dining-2.jpg' }),
  place('prague-fine_dining-3', 'prague', 'fine_dining', 'Lokál U Bílé kuželky', 'Míšeňská 80/12, 118 00 Praha 1', '카를교 가까운 말라스트라나의 체코 선술집. 탱크 필스너 맥주와 체코 전통 요리를 냅니다.', 'Malá Strana pub near Charles Bridge serving tank Pilsner and classic Czech dishes.'),
  place('prague-fine_dining-4', 'prague', 'fine_dining', 'Kantýna', 'Politických vězňů 1511/5, 116 47 Prague, Czechia', '옛 은행 건물의 고기 식당 겸 정육점. 카운터에서 고기를 골라 먹습니다.', 'Meat restaurant and butcher in a former bank; choose your cut at the counter.'),
  place('prague-fine_dining-5', 'prague', 'fine_dining', 'U Modré Kachničky II', 'Michalská 16, 110 00 Praha 1', '구시가지의 체코 요리 레스토랑. 오리 요리가 대표 메뉴입니다(말라스트라나 본점의 2호점).', 'Old Town Czech restaurant known for duck (second branch of the Malá Strana original).', { image: '/places/prague-fine_dining-5.jpg' }),
  place('prague-bakery-1', 'prague', 'bakery', 'Antonínovo pekařství', 'Francouzská 585/1, 120 00 Prague, Czechia', '비노흐라디의 빵집. 사워도우 빵과 체코식 과자·케이크를 팝니다.', 'Vinohrady bakery selling sourdough loaves and Czech pastries and cakes.'),
  place('prague-bakery-4', 'prague', 'bakery', 'Good Food Coffee & Bakery', 'Husova 157/18, 110 00 Praha 1', '카를교 근처의 굴뚝빵(트르델니크) 가게. 아이스크림을 넣은 굴뚝빵과 글루텐프리 메뉴가 있습니다.', 'Chimney-cake (trdelník) shop near Charles Bridge, with ice-cream versions and gluten-free options.'),
  place('prague-cafe-1', 'prague', 'cafe', 'Café Louvre', 'Národní 22, 110 00 Prague, Czechia', '1902년 문을 연 아르누보풍 카페. 카프카·아인슈타인이 드나들었고 아침부터 저녁까지 식사를 냅니다.', 'Art Nouveau café opened in 1902, once frequented by Kafka and Einstein, serving meals from breakfast to dinner.', { image: '/places/prague-cafe-1.jpg' }),
  place('prague-cafe-2', 'prague', 'cafe', 'EMA espresso bar', 'Na Florenci 1420/3, Prague', '중앙역 근처의 스페셜티 커피 바. 여러 로스터리 원두와 샌드위치·샐러드를 냅니다.', 'Specialty coffee bar near the main station with beans from several roasters, sandwiches and salads.', { image: '/places/prague-cafe-2.jpg' }),
  place('prague-cafe-3', 'prague', 'cafe', 'Café Savoy', 'Vítězná 124/5, 150 00 Praha 5', '1893년경 문을 연 말라스트라나의 그랜드 카페. 네오르네상스 천장 아래서 아침 식사와 체코 요리, 직접 구운 과자를 냅니다. 예약을 권합니다.', 'Grand café in Malá Strana dating to about 1893, under a neo-Renaissance ceiling, serving breakfast, Czech dishes and its own pastries; booking advised.', { image: '/places/prague-cafe-3.jpg' }),
  place('prague-cafe-4', 'prague', 'cafe', 'Můj šálek kávy', 'Křižíkova 386/105, 186 00 Prague, Czechia', '카를린의 스페셜티 커피 카페. 더블샷 로스터리가 운영하며 아침 메뉴와 디저트가 있습니다.', 'Karlín specialty coffee café run by the Doubleshot roastery, with breakfasts and desserts.', { image: '/places/prague-cafe-4.jpg' }),
  place('prague-korean-1', 'prague', 'korean', 'Matzip', 'Dušní 1082/6, 110 00 Praha 1', '구시가지의 한식당. 김치전·만두·탕수육·치킨 등을 냅니다.', 'Old Town Korean restaurant serving kimchijeon, mandu, tangsuyuk and fried chicken.'),

  // —— brno ——
  place('brno-fine_dining-2', 'brno', 'fine_dining', 'Borgo Agnese', 'Kopečná 980/43, 602 00 Brno', '2008년 문을 연 지중해 요리 레스토랑. 13세기 교회 유적이 남은 건물에 있습니다. 예약을 권합니다.', 'Mediterranean restaurant opened in 2008 in a building that incorporates remains of a 13th-century church; booking advised.'),
  place('brno-fine_dining-3', 'brno', 'fine_dining', 'Vittorio Restaurant', 'Pekařská 398/4, 602 00 Brno', '시내 중심의 지중해풍 레스토랑. 테이스팅 메뉴가 있고 일요일은 쉽니다.', 'Mediterranean-inspired restaurant in central Brno with a tasting menu; closed Sundays.'),
  place('brno-bakery-1', 'brno', 'bakery', 'Matějovo pekařství', 'Zelný trh, 602 00 Brno', '젤니 트르흐 광장의 체코 빵집 체인 매장.', 'Zelný trh branch of a Czech bakery chain.'),
  place('brno-bakery-3', 'brno', 'bakery', 'William Thomas Artisan Bakery', 'Josefská 492/2, 602 00 Brno', '2016년 차고에서 시작한 브르노 수제 빵집. 버터 크루아상이 알려져 있고 2층에 셀프 좌석이 있습니다.', 'Brno craft bakery that started in a garage in 2016, known for its butter croissant, with self-service seating upstairs.'),
  place('brno-cafe-1', 'brno', 'cafe', 'SKØG Urban Hub', 'Dominikánské náměstí 187/5, 602 00 Brno', '카페·바·로스터리·문화 공간을 겸한 곳. 커피와 팬케이크·버거가 있고 저녁엔 칵테일을 냅니다.', 'Café, bar, roastery and culture space with coffee, pancakes and burgers, and cocktails in the evening.', { image: '/places/brno-cafe-1.jpg' }),
  place('brno-cafe-2', 'brno', 'cafe', 'Monogram Espresso Bar', 'Kapucínské náměstí 310/12, 602 00 Brno', '체코 바리스타 챔피언이 운영하는 아주 작은 에스프레소 바.', 'Tiny espresso bar run by a Czech barista champion.'),
  place('brno-cafe-3', 'brno', 'cafe', 'Caffé del Saggio', 'Helceletova 232/4, 602 00 Brno', '1920년대풍으로 꾸민 작은 카페. 직접 볶은 원두를 팝니다.', 'Small 1920s-style café selling its own roasted coffee.'),

  // —— cesky-krumlov ——
  place('cesky-krumlov-fine_dining-1', 'cesky-krumlov', 'fine_dining', 'Švejk Restaurant', 'Latrán 12, 381 01 Český Krumlov', '르네상스 목조 천장 홀의 체코·남보헤미아 요리 식당. 필스너 맥주를 냅니다.', 'Czech and South Bohemian restaurant in a hall with a Renaissance beamed ceiling, pouring Pilsner.', { image: '/places/cesky-krumlov-fine_dining-1.jpg' }),
  place('cesky-krumlov-fine_dining-2', 'cesky-krumlov', 'fine_dining', 'Řízková restaurace Pivoňka', 'U Zelené Ratolesti 232, 381 01 Český Krumlov', '르네상스 건물의 슈니첼 전문 식당. 정원 자리가 있고 계절에 따라 엽니다.', 'Schnitzel restaurant in a Renaissance building with a garden; seasonal opening.'),
  place('cesky-krumlov-fine_dining-3', 'cesky-krumlov', 'fine_dining', 'Restaurant Jelenka', 'Chvalšinská 138, 381 01 Český Krumlov', '체코·유럽 요리 식당. 야외 자리가 넓고 연중 엽니다.', 'Czech and European restaurant with large outdoor seating, open all year.'),
  place('cesky-krumlov-bakery-2', 'cesky-krumlov', 'bakery', 'Café & Bakery Krumlovský mlýn', 'Široká 80, 381 01 Český Krumlov', '크룸로프 물레방아 레스토랑 단지의 빵집 카페. 장시간 발효 빵과 아침 메뉴가 있습니다.', 'Bakery café at the Krumlov mill complex with long-fermented bread and breakfast dishes.'),
  place('cesky-krumlov-cafe-1', 'cesky-krumlov', 'cafe', 'Drunken Coffee', 'Dlouhá 95, 381 01 Český Krumlov, Czech Republic', '구시가지의 카페. 크멘 로스터리 원두와 매일 만드는 케이크가 있고 강과 성이 보이는 정원이 있습니다.', 'Old-town café with KMEN roastery coffee, daily homemade cakes and a garden facing the river and castle.'),
  place('cesky-krumlov-cafe-2', 'cesky-krumlov', 'cafe', 'Authentic cafe', 'nám. Svornosti 8, 381 01 Český Krumlov', '스보르노스티 광장의 가족 운영 카페 겸 제과점. 체코 전통 케이크와 오리 구이 등 식사도 냅니다.', 'Family-run café and patisserie on the main square, with traditional Czech cakes and meals such as roast duck.'),
  place('cesky-krumlov-cafe-3', 'cesky-krumlov', 'cafe', 'Cafein', 'Latrán 106, 381 01 Český Krumlov', '중심가에서 조금 떨어진 라트란 거리의 커피숍. 필터 커피와 브런치가 있습니다.', 'Coffee shop on Latrán a little outside the centre, with filter coffee and brunch.'),

  // —— karlovy-vary ——
  place('karlovy-vary-fine_dining-1', 'karlovy-vary', 'fine_dining', 'Promenáda', 'Tržiště 31, 360 01 Karlovy Vary, Czechia', '트르주니 콜로나다 옆 프로메나다 호텔의 레스토랑. 현대적인 체코 요리를 냅니다.', 'Restaurant of the Promenáda hotel next to the Market Colonnade, serving modern Czech cooking.'),
  place('karlovy-vary-fine_dining-2', 'karlovy-vary', 'fine_dining', 'Staroslovanská kuchyně Karlovy Vary', 'Moskevská 1010/18, 360 01 Karlovy Vary', '옛 슬라브풍 식당. 보르시·샤슬릭·펠메니와 직접 빚은 맥주를 냅니다.', 'Old-Slavic-themed restaurant serving borscht, shashlik, pelmeni and house-brewed beer.'),
  place('karlovy-vary-fine_dining-3', 'karlovy-vary', 'fine_dining', 'Restaurace La Hospoda Karlovy Vary', 'nábř. J. Palacha 1024/26, 360 01 Karlovy Vary', '체코 전통 요리를 현대적으로 내는 필스너 맥주 식당.', 'Pilsner beer restaurant serving traditional Czech dishes in a modern style.'),
  place('karlovy-vary-bakery-1', 'karlovy-vary', 'bakery', 'Just Cake', 'Dr. Engla 1065/4, 360 01 Karlovy Vary', '자매가 운영하는 케이크 가게. 지역 재료로 파블로바 등 디저트를 만듭니다.', 'Cake shop run by two sisters, making pavlova and other desserts with mostly local ingredients.'),
  place('karlovy-vary-bakery-2', 'karlovy-vary', 'bakery', 'Parisienne - sweet desserts & café', 'Moskevská 20, 360 01 Karlovy Vary', '주인이 매일 케이크와 과자를 만드는 디저트 카페. 아침 메뉴와 커피도 있습니다.', 'Dessert café where the owner bakes cakes and pastries daily, also serving breakfast and coffee.'),
  place('karlovy-vary-cafe-1', 'karlovy-vary', 'cafe', 'Café Pupp', 'Mírové náměstí 2, 360 01 Karlovy Vary, Czech Republic', '그랜드호텔 푸프의 카페. 창업자 레시피로 만든 푸프 케이크를 냅니다.', 'Café of the Grandhotel Pupp, serving Pupp cake made to the founder’s recipe.', { image: '/places/karlovy-vary-cafe-1.jpg' }),
  place('karlovy-vary-cafe-2', 'karlovy-vary', 'cafe', 'BAGEL Lounge', 'T. G. Masaryka 825/45, 360 01 Karlovy Vary', '보행자 거리의 베이글 카페. 아침·브런치 메뉴를 냅니다.', 'Bagel café on the pedestrian street, serving breakfast and brunch.'),
  place('karlovy-vary-cafe-3', 'karlovy-vary', 'cafe', 'Republica coffee', 'T. G. Masaryka 894/28, 360 01 Karlovy Vary', '원두를 직접 볶는 스페셜티 커피 카페. 정원 자리와 브런치 메뉴가 있습니다.', 'Specialty coffee café roasting in-house, with a garden and brunch menu.'),

  // —— ceske-budejovice ——
  place('ceske-budejovice-fine_dining-1', 'ceske-budejovice', 'fine_dining', 'BRIO Restaurant', 'Riegrova 1867/8, 370 01 České Budějovice', '매일 바뀌는 점심 메뉴가 있는 레스토랑. 일요일은 쉽니다.', 'Restaurant with a daily-changing lunch menu; closed Sundays.'),
  place('ceske-budejovice-fine_dining-2', 'ceske-budejovice', 'fine_dining', 'Restaurace Masné krámy', 'Krajinská 13, 370 01 České Budějovice', '16세기 건물의 부드바르 맥주 레스토랑. 스비치코바·굴라시 등 체코 요리를 냅니다.', 'Budvar beer restaurant in a 16th-century building, serving Czech dishes such as svíčková and goulash.', { image: '/places/ceske-budejovice-fine_dining-2.jpg' }),
  place('ceske-budejovice-fine_dining-3', 'ceske-budejovice', 'fine_dining', 'Paluba', 'Na Mlýnské Stoce 81, 370 01 České Budějovice', '옛 물레방아 수로 위에 걸친 유리벽 레스토랑. 체코·세계 요리와 채식 메뉴를 냅니다.', 'Glass-walled restaurant built over the old mill race, serving Czech and international dishes with vegetarian options.'),

  place('ceske-budejovice-bakery-2', 'ceske-budejovice', 'bakery', 'Leipomo Pekárna', 'Panská 164/20, 370 01 České Budějovice', '2022년 문을 연 체코·핀란드 수제 빵집. 핀란드식 시나몬 롤(코르바푸스티)이 대표 빵입니다.', 'Czech-Finnish craft bakery opened in 2022, known for Finnish cinnamon buns (korvapuusti).'),
  place('ceske-budejovice-bakery-3', 'ceske-budejovice', 'bakery', 'Pastry Romana Liebing', 'Resslova 2601/8, 370 04 České Budějovice', '구시가지 근처의 카페 겸 제과점. 파블로바·슈크림과 브런치 메뉴가 있습니다.', 'Café and pâtisserie near the old town with pavlova, cream puffs and a brunch menu.'),
  place('ceske-budejovice-cafe-2', 'ceske-budejovice', 'cafe', 'Café Datel', 'Piaristická 22/8, 370 01 České Budějovice', '체코·유럽 로스터리 원두를 쓰는 스페셜티 커피 카페. 직접 만든 디저트와 생맥주도 있습니다.', 'Specialty coffee café using Czech and European roasters, with homemade desserts and draught beer.'),
  place('ceske-budejovice-cafe-3', 'ceske-budejovice', 'cafe', 'Praži Café', 'Na Mlýnské Stoce 282/11, 370 01 České Budějovice', '옛 성문 이름을 딴 건물의 카페 겸 비스트로. 아침·주말 브런치·점심을 내고 정원 자리가 있습니다.', 'Café-bistro in the house named after the old Prague Gate, serving breakfast, weekend brunch and lunch, with a garden.'),

  // —— olomouc ——
  place('olomouc-fine_dining-1', 'olomouc', 'fine_dining', 'Entrée', 'Ostravská 1, 779 00 Olomouc', '모던 요리를 내는 올로모우츠의 미쉐린 1스타 레스토랑.', 'Olomouc’s One-Michelin-star restaurant of modern cooking.', { michelin: 'star1' }),
  place('olomouc-fine_dining-2', 'olomouc', 'fine_dining', 'Long Story Short Eatery & Bakery', 'Koželužská 945/31, 779 00 Olomouc', '직접 구운 빵과 모던 요리를 내는 식당 겸 빵집. 미쉐린 빕 구르망.', 'Eatery and bakery with its own bread and modern dishes. Michelin Bib Gourmand.', { michelin: 'bib' }),
  place('olomouc-fine_dining-3', 'olomouc', 'fine_dining', 'STeaK Restaurant', 'Lipenská 11/7, 779 00 Olomouc', '그릴 스테이크 레스토랑. 미쉐린 가이드 선정.', 'Grill and steak restaurant. In the MICHELIN Guide.'),
  place('olomouc-bakery-1', 'olomouc', 'bakery', 'Pekařství Sázava', 'Ostružnická 343, 779 00 Olomouc', '구시가 오스트루주니츠카 거리의 빵집.', 'Bakery on Ostružnická street in the old town.'),
  place('olomouc-cafe-1', 'olomouc', 'cafe', 'Pikola espresso bar', 'Ostružnická 337/30, 779 00 Olomouc', '구시가 오스트루주니츠카 거리의 에스프레소 바.', 'Espresso bar on Ostružnická street in the old town.'),
  place('olomouc-cafe-2', 'olomouc', 'cafe', 'KAFE JAK LUSK', 'třída Svobody 646/4, 779 00 Olomouc', '구시가 가장자리 스보보디 거리의 카페.', 'Café on třída Svobody at the edge of the old town.'),

  // —— telc ——
  place('telc-bakery-1', 'telc', 'bakery', 'Cukrárna-Kavárna Haas', 'nám. Zachariáše z Hradce 2, 588 56 Telč', '중앙 광장의 제과점 겸 카페.', 'Cake shop and café on the main square.'),
  place('telc-cafe-1', 'telc', 'cafe', 'Café Telč', 'Na Můstku 37, 588 56 Telč', '구시가의 에스프레소 바.', 'Espresso bar in the old town.'),

  // —— mikulov ——
  place('mikulov-fine_dining-1', 'mikulov', 'fine_dining', 'Bistro Drogérka', 'Náměstí 28/23, 692 01 Mikulov', '중앙 광장의 비스트로.', 'Bistro on the main square.'),
  place('mikulov-fine_dining-2', 'mikulov', 'fine_dining', 'Bistro W Kodiak', 'Jiráskova 2, 692 01 Mikulov', '시내의 비스트로.', 'Bistro in the town.'),
  place('mikulov-bakery-1', 'mikulov', 'bakery', 'Pekařství a bistro Křižákovi', 'Náměstí 207, 692 01 Mikulov', '중앙 광장의 빵집 겸 비스트로.', 'Bakery and bistro on the main square.'),
  place('mikulov-cafe-1', 'mikulov', 'cafe', 'moji', 'Svobody 240/4, 692 01 Mikulov', '시내의 커피숍.', 'Coffee shop in the town.'),

  // —— plzen: restaurants, bakeries and cafés (2026-11-06) ——
  place('plzen-fine_dining-1', 'plzen', 'fine_dining', 'Na Spilce', 'U Prazdroje 64/7, 301 00 Plzeň, Czechia', '필스너 우르켈 양조장 안 둥근 천장 지하 저장고의 체코 전통 요리 식당. 미쉐린 가이드 선정.', 'Traditional Czech cooking in a vaulted cellar on the Pilsner Urquell brewery grounds. In the MICHELIN Guide.'),
  place('plzen-fine_dining-2', 'plzen', 'fine_dining', 'Štipec', 'Riegrova 208/5, 301 00 Plzeň, Czechia', '시내 중심의 현대식 체코 요리 식당. 미쉐린 빕 구르망.', 'Contemporary Czech cooking in the city centre. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('plzen-fine_dining-3', 'plzen', 'fine_dining', 'U Salzmannů', 'Pražská 90/8, 301 00 Plzeň, Czechia', '오래된 맥줏집 겸 체코 요리 식당.', 'Long-established pub-restaurant serving Czech food.'),
  place('plzen-fine_dining-4', 'plzen', 'fine_dining', 'Rango', 'Pražská 89/10, 301 00 Plzeň, Czechia', '프라시스카 거리의 레스토랑.', 'Restaurant on Pražská Street.'),
  place('plzen-fine_dining-5', 'plzen', 'fine_dining', 'U Mansfelda', 'Dřevěná 9, 301 00 Plzeň, Czechia', '구시가의 체코 요리 식당 겸 와인 바.', 'Czech restaurant and wine bar in the old town.'),
  place('plzen-cafe-1', 'plzen', 'cafe', 'Schovaná Kavárna', 'Zbrojnická 6, 301 00 Plzeň, Czechia', '구시가 골목 안의 카페.', 'Café tucked away on an old-town lane.'),
  place('plzen-cafe-2', 'plzen', 'cafe', 'Pappa Coffee', 'Veleslavínova 8, 301 00 Plzeň, Czechia', '구시가의 커피숍.', 'Coffee shop in the old town.'),
  place('plzen-cafe-3', 'plzen', 'cafe', 'Orient Coffee', 'nám. Republiky 3, 301 00 Plzeň, Czechia', '공화국 광장의 카페.', 'Café on Republic Square.'),
  place('plzen-cafe-4', 'plzen', 'cafe', 'Caffe Diem', 'Pražská 59/31, 301 00 Plzeň, Czechia', '프라시스카 거리의 커피숍.', 'Coffee shop on Pražská Street.'),
  place('plzen-bakery-1', 'plzen', 'bakery', 'Francouzská pekárna U Gaela', 'Sady 5. května 24, 301 00 Plzeň, Czechia', '프랑스식 빵집.', 'French-style bakery.'),
  place('plzen-bakery-2', 'plzen', 'bakery', 'Pekařství Na Rybníčkách', 'Jungmannova 3, 301 00 Plzeň, Czechia', '시내의 빵집.', 'Bakery in the city centre.'),

  // —— kutna-hora: restaurants, bakeries and cafés (2026-11-06) ——
  place('kutna-hora-fine_dining-1', 'kutna-hora', 'fine_dining', 'Restaurace Dačický', 'Rakova 8, 284 01 Kutná Hora, Czechia', '중세풍으로 꾸민 체코 전통 요리 식당.', 'Traditional Czech restaurant with medieval-style decor.'),
  place('kutna-hora-fine_dining-2', 'kutna-hora', 'fine_dining', 'V Ruthardce', 'Dačického nám. 15, 284 01 Kutná Hora, Czechia', '구시가 광장의 식당.', 'Restaurant on an old-town square.'),
  place('kutna-hora-fine_dining-3', 'kutna-hora', 'fine_dining', 'Čtyři sestry', 'Havlíčkovo nám. 512, 284 01 Kutná Hora, Czechia', '정원 좌석이 있는 식당.', 'Restaurant with a garden.'),
  place('kutna-hora-fine_dining-4', 'kutna-hora', 'fine_dining', 'Factory Bistro', 'Česká 184/1, 284 01 Kutná Hora, Czechia', '구시가의 비스트로.', 'Bistro in the old town.'),
  place('kutna-hora-cafe-1', 'kutna-hora', 'cafe', 'Vaškovy dobroty', 'Havlíčkovo nám. 513, 284 01 Kutná Hora, Czechia', '커피와 페이스트리를 내는 작은 카페.', 'Small café with coffee and pastries.'),
  place('kutna-hora-cafe-2', 'kutna-hora', 'cafe', 'Coffeehood', 'Starosedlecká, 284 03 Kutná Hora-Sedlec, Czechia', '세들레츠의 커피숍.', 'Coffee shop in Sedlec.'),
  place('kutna-hora-cafe-3', 'kutna-hora', 'cafe', 'Turistka', 'Barborská 29/22, 284 01 Kutná Hora, Czechia', '바르보르스카 거리의 커피숍.', 'Coffee shop on Barborská Street.'),
  place('kutna-hora-cafe-4', 'kutna-hora', 'cafe', 'Kafírnictví', 'Palackého nám. 510, 284 01 Kutná Hora, Czechia', '팔라츠키 광장의 카페.', 'Café on Palacký Square.'),
  place('kutna-hora-bakery-1', 'kutna-hora', 'bakery', 'Chleby jako v nebi', 'Kollárova 313/8, 284 01 Kutná Hora, Czechia', '빵집 겸 비스트로.', 'Bakery and bistro.'),
  place('kutna-hora-bakery-2', 'kutna-hora', 'bakery', 'Cukrárna U Kraba', 'Tylova 505, 284 01 Kutná Hora, Czechia', '과자점.', 'Pastry shop.'),

  // —— znojmo: restaurants, bakeries and cafés (2026-11-06) ——
  place('znojmo-fine_dining-1', 'znojmo', 'fine_dining', 'BaJo Bistro', 'Horní Česká 12, 669 02 Znojmo, Czechia', '구시가의 비스트로.', 'Bistro in the old town.'),
  place('znojmo-fine_dining-2', 'znojmo', 'fine_dining', 'Hospůdka Maxwilliam', 'U Brány 435/1, 669 02 Znojmo, Czechia', '체코 요리 선술집.', 'Czech pub-restaurant.'),
  place('znojmo-fine_dining-3', 'znojmo', 'fine_dining', 'Gastro-bar23', 'Obroková 283/23, 669 02 Znojmo, Czechia', '시청 탑 근처의 식당.', 'Restaurant near the town hall tower.'),
  place('znojmo-fine_dining-4', 'znojmo', 'fine_dining', 'Restaurace Mikuláš', 'Staré Město 109/1, 669 02 Znojmo, Czechia', '성 니콜라스 성당 근처의 비스트로.', 'Bistro near St Nicholas Church.'),
  place('znojmo-fine_dining-5', 'znojmo', 'fine_dining', 'Tusto Znojmo', 'Dolní Česká 300, 669 02 Znojmo, Czechia', '이탈리아 요리 식당.', 'Italian restaurant.'),
  place('znojmo-cafe-1', 'znojmo', 'cafe', 'Půlnapůl', 'Horní Česká, 669 02 Znojmo, Czechia', '구시가의 커피숍.', 'Coffee shop in the old town.'),
  place('znojmo-cafe-2', 'znojmo', 'cafe', 'Káva na Knopp', 'Malá Michalská 1, 669 02 Znojmo, Czechia', '구시가의 커피숍.', 'Coffee shop in the old town.'),
  place('znojmo-cafe-3', 'znojmo', 'cafe', 'Cappuccino Café', 'Horní nám. 138/5, 669 02 Znojmo, Czechia', '위쪽 광장의 카페.', 'Café on Upper Square.'),
  place('znojmo-cafe-4', 'znojmo', 'cafe', 'Kafe U Radnice', 'Obroková 270/3, 669 02 Znojmo, Czechia', '시청 탑 옆의 카페.', 'Café beside the town hall tower.'),

  // —— hrensko: restaurants, bakeries and cafés (2026-11-06) ——
  place('hrensko-fine_dining-1', 'hrensko', 'fine_dining', 'ARRIGŌ', 'Duchcovská 827/6, 405 02 Děčín, Czechia', '데친의 레스토랑 겸 카페·델리. 아침부터 저녁까지 엽니다. 미쉐린 가이드 선정.', 'Restaurant, café and deli in Děčín, open from breakfast to dinner. In the MICHELIN Guide.'),
  place('hrensko-fine_dining-2', 'hrensko', 'fine_dining', 'Restaurant Bamboo', 'Hřensko 125, 407 17 Hřensko, Czechia', '흐렌스코 마을의 식당.', 'Restaurant in Hřensko village.'),

  // —— lednice: restaurants, bakeries and cafés (2026-11-22) ——
  place('lednice-fine_dining-1', 'lednice', 'fine_dining', 'ESSENS', 'K Zámečku 16, 691 43 Hlohovec', '레드니체–발티체 일대 흘로호베츠 마을의 미쉐린 1스타 레스토랑.', 'One-MICHELIN-star restaurant in Hlohovec, a village in the Lednice–Valtice area.', { michelin: 'star1' }),
  place('lednice-fine_dining-2', 'lednice', 'fine_dining', 'Zlatá Terasa', 'Zámek 1, 691 42 Valtice', '발티체 성 안의 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Restaurant in Valtice Château, listed in the MICHELIN Guide.'),
  place('lednice-fine_dining-3', 'lednice', 'fine_dining', 'Burgr\'s Club', '21. dubna 694, 691 44 Lednice', '레드니체 마을의 버거·고기 요리 식당. 구글 지도 평점 4.7.', 'Burger and grill restaurant in Lednice village. Rated 4.7 on Google Maps.'),
  place('lednice-fine_dining-4', 'lednice', 'fine_dining', 'Hospůdka U Korunky', 'Břeclavská 359, 691 44 Lednice', '레드니체의 체코 선술집 식당. 구글 지도 평점 4.6.', 'Czech pub restaurant in Lednice. Rated 4.6 on Google Maps.'),
  place('lednice-fine_dining-5', 'lednice', 'fine_dining', 'Pivovar Lednice', 'Břeclavská 368, 691 44 Lednice', '레드니체의 양조장 겸 식당. 구글 지도 평점 4.5.', 'Brewpub in Lednice. Rated 4.5 on Google Maps.'),
  place('lednice-cafe-1', 'lednice', 'cafe', 'Pražírna a kavárna coffeesquare', 'U Jednoty 253, 691 44 Lednice', '원두를 직접 볶는 레드니체의 카페. 구글 지도 평점 4.8.', 'Roastery café in Lednice. Rated 4.8 on Google Maps.'),
  place('lednice-cafe-2', 'lednice', 'cafe', 'Kavárna & vinárna Knoll', '21. dubna 702, 691 44 Lednice', '레드니체의 카페 겸 와인 바. 구글 지도 평점 4.7.', 'Café and wine bar in Lednice. Rated 4.7 on Google Maps.'),
  place('lednice-cafe-3', 'lednice', 'cafe', 'Zahrada café Valtice', 'Zámecká 3/1, 691 42 Valtice', '발티체 성 근처의 카페. 구글 지도 평점 4.7.', 'Café near Valtice Château. Rated 4.7 on Google Maps.'),

  // —— litomysl: restaurants, bakeries and cafés (2026-11-22) ——
  place('litomysl-fine_dining-1', 'litomysl', 'fine_dining', 'Bohém', 'Šantovo náměstí 181, 570 01 Litomyšl', '리토미슬의 향토 요리 식당으로 미쉐린 가이드에 실려 있습니다. 구글 지도 평점 4.6.', 'Regional-cuisine restaurant in Litomyšl, listed in the MICHELIN Guide. Rated 4.6 on Google Maps.'),
  place('litomysl-fine_dining-2', 'litomysl', 'fine_dining', 'Restaurace U Kolji', 'Mařákova 365, 570 01 Litomyšl', '리토미슬의 우크라이나 요리 식당. 구글 지도 평점 4.6.', 'Ukrainian restaurant in Litomyšl. Rated 4.6 on Google Maps.'),
  place('litomysl-fine_dining-3', 'litomysl', 'fine_dining', 'Restaurace a café U medvěda', 'Na Lánech 764, 570 01 Litomyšl', '리토미슬의 체코 식당 겸 카페. 구글 지도 평점 4.4.', 'Czech restaurant and café in Litomyšl. Rated 4.4 on Google Maps.'),
  place('litomysl-bakery-1', 'litomysl', 'bakery', 'Pekařství a cukrářství Sázava', 'Smetanovo náměstí 108, 570 01 Litomyšl', '광장의 빵집 겸 제과점. 구글 지도 평점 4.7.', 'Bakery and patisserie on the main square. Rated 4.7 on Google Maps.'),
  place('litomysl-bakery-2', 'litomysl', 'bakery', 'Makronky Diana Mauerová', 'Smetanovo náměstí 139, 570 01 Litomyšl', '광장의 마카롱 가게. 구글 지도 평점 4.9.', 'Macaron shop on the main square. Rated 4.9 on Google Maps.'),
  place('litomysl-cafe-1', 'litomysl', 'cafe', 'Kafemysl', 'Smetanovo náměstí 100, 570 01 Litomyšl', '광장의 카페. 구글 지도 평점 4.8.', 'Café on the main square. Rated 4.8 on Google Maps.'),
  place('litomysl-cafe-2', 'litomysl', 'cafe', 'Dvorek Litomyšl', 'Smetanovo náměstí 129, 570 01 Litomyšl', '광장 안뜰의 카페. 구글 지도 평점 4.8.', 'Courtyard café on the main square. Rated 4.8 on Google Maps.'),
  place('litomysl-cafe-3', 'litomysl', 'cafe', 'Chocco Caffé', 'Smetanovo náměstí 117, 570 01 Litomyšl', '광장의 카페. 구글 지도 평점 4.7.', 'Café on the main square. Rated 4.7 on Google Maps.'),
  place('litomysl-cafe-4', 'litomysl', 'cafe', 'Caffe Delizia', 'Smetanovo náměstí 53, 570 01 Litomyšl', '원두를 직접 볶는 광장의 카페. 구글 지도 평점 4.7.', 'Roastery café on the main square. Rated 4.7 on Google Maps.'),
  place('litomysl-cafe-5', 'litomysl', 'cafe', 'Café & Bar No3', 'Smetanovo náměstí 73, 570 01 Litomyšl', '광장의 에스프레소 바. 구글 지도 평점 4.7.', 'Espresso bar on the main square. Rated 4.7 on Google Maps.'),

  // —— kromeriz: restaurants, bakeries and cafés (2026-11-22) ——
  place('kromeriz-fine_dining-1', 'kromeriz', 'fine_dining', 'Café Bistro Matiné', 'Ztracená 11, 767 01 Kroměříž', '구시가의 프랑스식 비스트로. 구글 지도 평점 4.6.', 'French bistro in the old town. Rated 4.6 on Google Maps.'),
  place('kromeriz-fine_dining-2', 'kromeriz', 'fine_dining', 'Špagetárna Kroměříž', 'Milíčovo náměstí 489/8, 767 01 Kroměříž', '생면 파스타 식당. 구글 지도 평점 4.7.', 'Fresh-pasta restaurant. Rated 4.7 on Google Maps.'),
  place('kromeriz-fine_dining-3', 'kromeriz', 'fine_dining', 'Earnest', 'Tovačovského 2828/22, 767 01 Kroměříž', '카페 겸 식당. 구글 지도 평점 4.7.', 'Café-kitchen. Rated 4.7 on Google Maps.'),
  place('kromeriz-fine_dining-4', 'kromeriz', 'fine_dining', 'Flavor Of India', 'Velehradská 507/41, 767 01 Kroměříž', '인도 요리 식당. 구글 지도 평점 4.8.', 'Indian restaurant. Rated 4.8 on Google Maps.'),
  place('kromeriz-fine_dining-5', 'kromeriz', 'fine_dining', 'Radegastovna Kroměříž', 'Velehradská 4248/24A, 767 01 Kroměříž', '체코 선술집 식당. 구글 지도 평점 4.5.', 'Czech pub restaurant. Rated 4.5 on Google Maps.'),
  place('kromeriz-cafe-1', 'kromeriz', 'cafe', 'Velo Café', 'Velké náměstí 46, 767 01 Kroměříž', '대광장의 카페. 구글 지도 평점 4.6.', 'Café on the main square. Rated 4.6 on Google Maps.'),
  place('kromeriz-cafe-2', 'kromeriz', 'cafe', 'Novákova zahrada', 'Ztracená 69/13, 767 01 Kroměříž', '정원이 있는 구시가의 카페. 구글 지도 평점 4.9.', 'Garden café in the old town. Rated 4.9 on Google Maps.'),
  place('kromeriz-cafe-3', 'kromeriz', 'cafe', 'River Café', 'Spáčilova 569/27, 767 01 Kroměříž', '강가의 카페. 구글 지도 평점 4.8.', 'Riverside café. Rated 4.8 on Google Maps.'),

  // —— cesky-raj: restaurants, bakeries and cafés (2026-11-22) ——
  place('cesky-raj-fine_dining-1', 'cesky-raj', 'fine_dining', 'PUKU Bistro', 'Skálova 68, 511 01 Turnov', '거점 투르노프의 비스트로. 구글 지도 평점 4.8.', 'Bistro in Turnov, the base town. Rated 4.8 on Google Maps.'),
  place('cesky-raj-fine_dining-2', 'cesky-raj', 'fine_dining', 'EMOI', 'Sobotecká 595, 511 01 Turnov', '투르노프의 베트남 식당. 구글 지도 평점 4.8.', 'Vietnamese restaurant in Turnov. Rated 4.8 on Google Maps.'),
  place('cesky-raj-fine_dining-3', 'cesky-raj', 'fine_dining', 'FEWA', 'Sobotecká 223, 511 01 Turnov', '투르노프의 인도·네팔 식당. 구글 지도 평점 4.9.', 'Indian and Nepali restaurant in Turnov. Rated 4.9 on Google Maps.'),
  place('cesky-raj-fine_dining-4', 'cesky-raj', 'fine_dining', 'Pizzerie Restaurant Plaudit', 'Bezručova 698, 511 01 Turnov', '투르노프의 피자 식당. 구글 지도 평점 4.3.', 'Pizzeria in Turnov. Rated 4.3 on Google Maps.'),
  place('cesky-raj-bakery-1', 'cesky-raj', 'bakery', 'Vaše Selka', 'Nádražní 1064, 511 01 Turnov', '투르노프의 제과점. 구글 지도 평점 4.5.', 'Patisserie in Turnov. Rated 4.5 on Google Maps.'),
  place('cesky-raj-cafe-1', 'cesky-raj', 'cafe', 'Panorama Café', 'Jiráskova 127, 511 01 Turnov', '투르노프의 카페. 구글 지도 평점 4.8.', 'Café in Turnov. Rated 4.8 on Google Maps.'),
  place('cesky-raj-cafe-2', 'cesky-raj', 'cafe', 'Café Depo', 'Nádražní 1118, 511 01 Turnov', '투르노프 역 근처의 카페. 구글 지도 평점 4.7.', 'Café near Turnov station. Rated 4.7 on Google Maps.'),
  place('cesky-raj-cafe-3', 'cesky-raj', 'cafe', 'Bistro Kafe Kytka', 'Na Sboře 2271, 511 01 Turnov', '투르노프의 카페. 구글 지도 평점 4.6.', 'Café in Turnov. Rated 4.6 on Google Maps.'),

  // —— melnik-cz: restaurants, bakeries and cafés (2026-11-27) ——
  place('melnik-cz-fine_dining-1', 'melnik-cz', 'fine_dining', 'Veranda pod Soutokem', 'Legionářů 84, Mělník, Czechia', '우크라이나 요리 식당. 구글 지도 평점 4.8(리뷰 265개).', 'Ukrainian restaurant. Rated 4.8 on Google Maps (265 reviews).'),
  place('melnik-cz-fine_dining-2', 'melnik-cz', 'fine_dining', 'Brloh Barbecue', 'Bezručova 613/30, Mělník, Czechia', '바비큐 식당. 구글 지도 평점 4.7(리뷰 1011개).', 'Barbecue restaurant. Rated 4.7 on Google Maps (1011 reviews).'),
  place('melnik-cz-fine_dining-3', 'melnik-cz', 'fine_dining', 'U Císaře Rudolfa', 'Mělník, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.6(리뷰 110개).', 'Czech restaurant. Rated 4.6 on Google Maps (110 reviews).'),
  place('melnik-cz-fine_dining-4', 'melnik-cz', 'fine_dining', 'Dobrý Kanec - Hostinec', 'Mělník, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.5(리뷰 1116개).', 'Czech restaurant. Rated 4.5 on Google Maps (1116 reviews).'),
  place('melnik-cz-fine_dining-5', 'melnik-cz', 'fine_dining', 'Restaurace Na Hradbách', 'nám. Míru 10, Mělník, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.3(리뷰 1277개).', 'Czech restaurant. Rated 4.3 on Google Maps (1277 reviews).'),
  place('melnik-cz-bakery-1', 'melnik-cz', 'bakery', 'Cukrářské bistro EVA', 'Přístavní 1264/23, Mělník, Czechia', '과자점. 구글 지도 평점 4.8(리뷰 130개).', 'Pastry shop. Rated 4.8 on Google Maps (130 reviews).'),
  place('melnik-cz-bakery-2', 'melnik-cz', 'bakery', 'Cake art', 'nám. Míru 27/13, Mělník, Czechia', '케이크 가게. 구글 지도 평점 4.7(리뷰 336개).', 'Cake shop. Rated 4.7 on Google Maps (336 reviews).'),
  place('melnik-cz-bakery-3', 'melnik-cz', 'bakery', 'Pekařství Paul', 'Fibichova 268, Mělník, Czechia', '빵집. 구글 지도 평점 4.6(리뷰 261개).', 'Bakery. Rated 4.6 on Google Maps (261 reviews).'),
  place('melnik-cz-cafe-1', 'melnik-cz', 'cafe', 'Kafe Mělník ve Věži', '5. května, Mělník, Czechia', '카페. 구글 지도 평점 4.8(리뷰 503개).', 'Café. Rated 4.8 on Google Maps (503 reviews).'),
  place('melnik-cz-cafe-2', 'melnik-cz', 'cafe', 'Kafe Mělník Bistro', 'Bezručova 614/31, Mělník, Czechia', '카페. 구글 지도 평점 4.8(리뷰 673개).', 'Café. Rated 4.8 on Google Maps (673 reviews).'),
  place('melnik-cz-cafe-3', 'melnik-cz', 'cafe', 'Nejen kafe 2', 'Ostruhova 63/2, Mělník, Czechia', '카페. 구글 지도 평점 4.7(리뷰 284개).', 'Café. Rated 4.7 on Google Maps (284 reviews).'),

  // —— konopiste: restaurants, bakeries and cafés (2026-11-27) ——
  place('konopiste-fine_dining-1', 'konopiste', 'fine_dining', 'Gateway of India', 'Masarykovo nám. 225, Benešov, Czechia', '인도 요리 레스토랑. 구글 지도 평점 4.9(리뷰 608개).', 'Indian restaurant. Rated 4.9 on Google Maps (608 reviews).'),
  place('konopiste-fine_dining-2', 'konopiste', 'fine_dining', 'Restaurace Na Karlově', 'Na Karlově 97, Benešov, Czechia', '레스토랑. 구글 지도 평점 5.0(리뷰 112개).', 'Restaurant. Rated 5.0 on Google Maps (112 reviews).'),
  place('konopiste-fine_dining-3', 'konopiste', 'fine_dining', 'La Pausa', 'Masarykovo nám. 5, Benešov, Czechia', '레스토랑. 구글 지도 평점 4.6(리뷰 461개).', 'Restaurant. Rated 4.6 on Google Maps (461 reviews).'),
  place('konopiste-bakery-1', 'konopiste', 'bakery', 'Italská cukrárna a kavárna v Benešově', 'Karla Nového 2156, Benešov, Czechia', '디저트 가게. 구글 지도 평점 4.3(리뷰 562개).', 'Dessert shop. Rated 4.3 on Google Maps (562 reviews).'),
  place('konopiste-cafe-1', 'konopiste', 'cafe', 'Garáž Kafé', 'Na Chmelnici 2104, Benešov, Czechia', '카페. 구글 지도 평점 4.9(리뷰 204개).', 'Café. Rated 4.9 on Google Maps (204 reviews).'),
  place('konopiste-cafe-2', 'konopiste', 'cafe', 'Café na slovíčko', 'Masarykovo nám. 102, Benešov, Czechia', '카페. 구글 지도 평점 4.8(리뷰 171개).', 'Café. Rated 4.8 on Google Maps (171 reviews).'),
  place('konopiste-cafe-3', 'konopiste', 'cafe', 'Cafe U Piaristů', 'Piaristická ulička, Benešov, Czechia', '카페. 구글 지도 평점 4.7(리뷰 424개).', 'Café. Rated 4.7 on Google Maps (424 reviews).'),
  place('konopiste-cafe-4', 'konopiste', 'cafe', 'Čas na kávu', 'Karla Nového 2363, Benešov, Czechia', '카페. 구글 지도 평점 4.6(리뷰 496개).', 'Café. Rated 4.6 on Google Maps (496 reviews).'),

  // —— tabor: restaurants, bakeries and cafés (2026-11-27) ——
  place('tabor-fine_dining-1', 'tabor', 'fine_dining', 'Restaurant Goldie', 'Žižkovo Náměstí 20, 390 01 Tábor, Czechia', '레스토랑. 미쉐린 빕 구르망. 구글 지도 평점 4.4(리뷰 573개).', 'Restaurant. MICHELIN Bib Gourmand. Rated 4.4 on Google Maps (573 reviews).', { michelin: 'bib' }),
  place('tabor-fine_dining-2', 'tabor', 'fine_dining', 'MACE restaurant', '9. května 2471, Tábor, Czechia', '현대 요리 레스토랑. 구글 지도 평점 4.6(리뷰 591개).', 'Modern cuisine restaurant. Rated 4.6 on Google Maps (591 reviews).'),
  place('tabor-fine_dining-3', 'tabor', 'fine_dining', 'Výkvět bistro', 'Žižkovo Náměstí 7, Tábor, Czechia', '이탈리아 요리 레스토랑. 구글 지도 평점 4.7(리뷰 412개).', 'Italian restaurant. Rated 4.7 on Google Maps (412 reviews).'),
  place('tabor-fine_dining-4', 'tabor', 'fine_dining', 'RAFARIZ noodle house', 'Pražská 231, Tábor, Czechia', '아시아 요리 레스토랑. 구글 지도 평점 4.8(리뷰 967개).', 'Asian restaurant. Rated 4.8 on Google Maps (967 reviews).'),
  place('tabor-fine_dining-5', 'tabor', 'fine_dining', 'Bistro Pražská', 'Pražská 207, Tábor, Czechia', '비스트로. 구글 지도 평점 4.7(리뷰 386개).', 'Bistro. Rated 4.7 on Google Maps (386 reviews).'),
  place('tabor-bakery-1', 'tabor', 'bakery', 'MOCCACAFÉ', 'Pražská 232, Tábor, Czechia', '과자점. 구글 지도 평점 4.8(리뷰 3053개).', 'Pastry shop. Rated 4.8 on Google Maps (3053 reviews).'),
  place('tabor-bakery-2', 'tabor', 'bakery', 'Pekárna Lužnice', 'Bechyňská 413/19, Tábor, Czechia', '빵집. 구글 지도 평점 4.8(리뷰 95개).', 'Bakery. Rated 4.8 on Google Maps (95 reviews).'),
  place('tabor-bakery-3', 'tabor', 'bakery', 'Café Budík Tábor', 'Kotnovská 174/18, Tábor, Czechia', '케이크 가게. 구글 지도 평점 4.8(리뷰 534개).', 'Cake shop. Rated 4.8 on Google Maps (534 reviews).'),
  place('tabor-bakery-4', 'tabor', 'bakery', 'Cafe Campanila', 'Farského 1461/2, Tábor, Czechia', '케이크 가게. 구글 지도 평점 4.3(리뷰 627개).', 'Cake shop. Rated 4.3 on Google Maps (627 reviews).'),
  place('tabor-cafe-1', 'tabor', 'cafe', 'Café Mañana', 'Klokotská 113, Tábor, Czechia', '카페. 구글 지도 평점 4.8(리뷰 165개).', 'Café. Rated 4.8 on Google Maps (165 reviews).'),
  place('tabor-cafe-2', 'tabor', 'cafe', 'Kávová Zastávka', 'Žižkova 611/1, Tábor, Czechia', '카페. 구글 지도 평점 4.8(리뷰 584개).', 'Café. Rated 4.8 on Google Maps (584 reviews).'),
  place('tabor-cafe-3', 'tabor', 'cafe', 'Café Svět', 'nám. F. Křižíka 1291, Tábor, Czechia', '카페. 구글 지도 평점 4.7(리뷰 443개).', 'Café. Rated 4.7 on Google Maps (443 reviews).'),

  // —— trebon: restaurants, bakeries and cafés (2026-11-27) ——
  place('trebon-fine_dining-1', 'trebon', 'fine_dining', 'Šupina a Šupinka', 'Valy 155, 379 01 Třeboň, Czechia', '지역 요리 레스토랑. 미쉐린 빕 구르망. 구글 지도 평점 4.5(리뷰 3575개).', 'Regional cooking restaurant. MICHELIN Bib Gourmand. Rated 4.5 on Google Maps (3575 reviews).', { michelin: 'bib' }),
  place('trebon-fine_dining-2', 'trebon', 'fine_dining', 'Restaurace Vratislavský Dům', 'Březanova 84, 379 01 Třeboň I, Czechia', '그릴 레스토랑. 미쉐린 빕 구르망. 구글 지도 평점 4.5(리뷰 304개).', 'Grill restaurant. MICHELIN Bib Gourmand. Rated 4.5 on Google Maps (304 reviews).', { michelin: 'bib' }),
  place('trebon-fine_dining-3', 'trebon', 'fine_dining', 'Kelly\'s Tavern', 'Zámek I/110, Třeboň, Czechia', '레스토랑. 구글 지도 평점 4.7(리뷰 2339개).', 'Restaurant. Rated 4.7 on Google Maps (2339 reviews).'),
  place('trebon-fine_dining-4', 'trebon', 'fine_dining', 'Bistro 105', 'Masarykovo náměstí 105, Třeboň, Czechia', '비스트로. 구글 지도 평점 4.6(리뷰 774개).', 'Bistro. Rated 4.6 on Google Maps (774 reviews).'),
  place('trebon-bakery-1', 'trebon', 'bakery', 'Pekařství v Žitě', 'Táboritská 44, Třeboň, Czechia', '빵집. 구글 지도 평점 4.6(리뷰 117개).', 'Bakery. Rated 4.6 on Google Maps (117 reviews).'),
  place('trebon-cafe-1', 'trebon', 'cafe', 'Kafe ke kašně', 'Masarykovo náměstí 104, Třeboň, Czechia', '카페. 구글 지도 평점 4.9(리뷰 348개).', 'Café. Rated 4.9 on Google Maps (348 reviews).'),
  place('trebon-cafe-2', 'trebon', 'cafe', 'Srdcovka Café', 'Březanova 81, Třeboň, Czechia', '카페. 구글 지도 평점 4.8(리뷰 161개).', 'Café. Rated 4.8 on Google Maps (161 reviews).'),
  place('trebon-cafe-3', 'trebon', 'cafe', 'Aroma coffee', 'Svobody 1109, Třeboň, Czechia', '카페. 구글 지도 평점 4.8(리뷰 449개).', 'Café. Rated 4.8 on Google Maps (449 reviews).'),
  place('trebon-cafe-4', 'trebon', 'cafe', 'Bon-TRE cafe', 'Svobody 273, Třeboň, Czechia', '카페. 구글 지도 평점 4.8(리뷰 218개).', 'Café. Rated 4.8 on Google Maps (218 reviews).'),
  place('trebon-cafe-5', 'trebon', 'cafe', 'Fajn Café Třeboň', 'Masné krámy, Třeboň, Czechia', '카페. 구글 지도 평점 4.7(리뷰 524개).', 'Café. Rated 4.7 on Google Maps (524 reviews).'),

  // —— jindrichuv-hradec: restaurants, bakeries and cafés (2026-11-27) ——
  place('jindrichuv-hradec-fine_dining-1', 'jindrichuv-hradec', 'fine_dining', 'Cantina Mexicana', 'Růžová 3, Jindřichův Hradec, Czechia', '멕시코 요리 식당. 구글 지도 평점 4.9(리뷰 542개).', 'Mexican restaurant. Rated 4.9 on Google Maps (542 reviews).'),
  place('jindrichuv-hradec-fine_dining-2', 'jindrichuv-hradec', 'fine_dining', 'Kapr pod Hradem', 'Pod hradem 281, Jindřichův Hradec, Czechia', '레스토랑. 구글 지도 평점 4.7(리뷰 361개).', 'Restaurant. Rated 4.7 on Google Maps (361 reviews).'),
  place('jindrichuv-hradec-fine_dining-3', 'jindrichuv-hradec', 'fine_dining', 'Restaurace U Lucerny', 'Štítného 128, Jindřichův Hradec, Czechia', '레스토랑. 구글 지도 평점 4.6(리뷰 716개).', 'Restaurant. Rated 4.6 on Google Maps (716 reviews).'),
  place('jindrichuv-hradec-fine_dining-4', 'jindrichuv-hradec', 'fine_dining', 'Restaurace Černej pták', 'Štítného 117, Jindřichův Hradec, Czechia', '레스토랑. 구글 지도 평점 4.4(리뷰 2117개).', 'Restaurant. Rated 4.4 on Google Maps (2117 reviews).'),
  place('jindrichuv-hradec-fine_dining-5', 'jindrichuv-hradec', 'fine_dining', 'Restaurace Smetana', 'Dobrovského 2, Jindřichův Hradec, Czechia', '레스토랑. 구글 지도 평점 4.3(리뷰 178개).', 'Restaurant. Rated 4.3 on Google Maps (178 reviews).'),
  place('jindrichuv-hradec-bakery-1', 'jindrichuv-hradec', 'bakery', 'Cukrářství Lavendy', 'Balbínovo nám. 17, Jindřichův Hradec, Czechia', '케이크 가게. 구글 지도 평점 4.8(리뷰 346개).', 'Cake shop. Rated 4.8 on Google Maps (346 reviews).'),
  place('jindrichuv-hradec-bakery-2', 'jindrichuv-hradec', 'bakery', 'Koláčovna', 'Masarykovo nám. 105, Jindřichův Hradec, Czechia', '빵집. 구글 지도 평점 4.8(리뷰 263개).', 'Bakery. Rated 4.8 on Google Maps (263 reviews).'),
  place('jindrichuv-hradec-bakery-3', 'jindrichuv-hradec', 'bakery', 'DéKáčko - Cukrářství Kaštánek', 'Masarykovo nám. 168, Jindřichův Hradec, Czechia', '빵집. 구글 지도 평점 4.3(리뷰 468개).', 'Bakery. Rated 4.3 on Google Maps (468 reviews).'),
  place('jindrichuv-hradec-cafe-1', 'jindrichuv-hradec', 'cafe', 'Mocca Caffe', 'Jarošovská 61, Jindřichův Hradec, Czechia', '카페. 구글 지도 평점 4.8(리뷰 151개).', 'Café. Rated 4.8 on Google Maps (151 reviews).'),
  place('jindrichuv-hradec-cafe-2', 'jindrichuv-hradec', 'cafe', 'Kolonial coffee', 'Na Hradbách 48, Jindřichův Hradec, Czechia', '카페. 구글 지도 평점 4.7(리뷰 792개).', 'Café. Rated 4.7 on Google Maps (792 reviews).'),
  place('jindrichuv-hradec-cafe-3', 'jindrichuv-hradec', 'cafe', 'Taste Coffee', 'Masarykovo nám. 69, Jindřichův Hradec, Czechia', '카페. 구글 지도 평점 4.7(리뷰 173개).', 'Café. Rated 4.7 on Google Maps (173 reviews).'),
  place('jindrichuv-hradec-cafe-4', 'jindrichuv-hradec', 'cafe', 'Agnes Café', 'Panská 111, Jindřichův Hradec, Czechia', '카페. 구글 지도 평점 4.5(리뷰 310개).', 'Café. Rated 4.5 on Google Maps (310 reviews).'),

  // —— slavonice: restaurants, bakeries and cafés (2026-11-27) ——
  place('slavonice-fine_dining-1', 'slavonice', 'fine_dining', 'Restaurace U Pampiho', 'Svatopluka Čecha 256, Slavonice, Czechia', '레스토랑. 구글 지도 평점 4.3(리뷰 266개).', 'Restaurant. Rated 4.3 on Google Maps (266 reviews).'),
  place('slavonice-bakery-1', 'slavonice', 'bakery', 'Pekařství Peros', 'Úvoz 121, Slavonice, Czechia', '빵집. 구글 지도 평점 4.8(리뷰 106개).', 'Bakery. Rated 4.8 on Google Maps (106 reviews).'),
  place('slavonice-cafe-1', 'slavonice', 'cafe', 'Kavárna U nás doma', 'Horní nám. 526, Slavonice, Czechia', '카페. 구글 지도 평점 4.5(리뷰 304개).', 'Café. Rated 4.5 on Google Maps (304 reviews).'),
  place('slavonice-cafe-2', 'slavonice', 'cafe', 'Atomika Kavárna & Bar', 'Horní nám. 532, Slavonice, Czechia', '카페. 구글 지도 평점 4.5(리뷰 105개).', 'Café. Rated 4.5 on Google Maps (105 reviews).'),
  place('slavonice-cafe-3', 'slavonice', 'cafe', 'Kafe hrnky', 'nám. Míru 465, Slavonice, Czechia', '카페. 구글 지도 평점 4.4(리뷰 140개).', 'Café. Rated 4.4 on Google Maps (140 reviews).'),

  // —— sumava: restaurants, bakeries and cafés (2026-11-27) ——
  place('sumava-fine_dining-1', 'sumava', 'fine_dining', 'Restaurace Star Lipno', 'Kobylnice 49, Kobylnice, Lipno nad Vltavou, Czechia', '코빌니체에 있는 체코 요리 레스토랑. 구글 지도 평점 4.7(리뷰 392개).', 'Czech restaurant in Kobylnice. Rated 4.7 on Google Maps (392 reviews).'),
  place('sumava-fine_dining-2', 'sumava', 'fine_dining', 'MOLO Restaurant', 'Lipno nad Vltavou 517, Czechia', '현대 요리 레스토랑. 구글 지도 평점 4.5(리뷰 450개).', 'Modern cuisine restaurant. Rated 4.5 on Google Maps (450 reviews).'),
  place('sumava-fine_dining-3', 'sumava', 'fine_dining', 'Admirál - Restaurace', 'Lipno nad Vltavou 92, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.3(리뷰 1182개).', 'Czech restaurant. Rated 4.3 on Google Maps (1182 reviews).'),
  place('sumava-bakery-1', 'sumava', 'bakery', 'Cukrárna U Kostela Frymburk', 'Frymburk 37, Frymburk, Lipno nad Vltavou, Czechia', '프림부르크에 있는 케이크 가게. 구글 지도 평점 4.6(리뷰 355개).', 'Cake shop in Frymburk. Rated 4.6 on Google Maps (355 reviews).'),

  // —— marianske-lazne: restaurants, bakeries and cafés (2026-11-27) ——
  place('marianske-lazne-fine_dining-1', 'marianske-lazne', 'fine_dining', 'Restaurace Tusculum', 'Sadová 31, Mariánské Lázně, Czechia', '현대 요리 레스토랑. 구글 지도 평점 4.8(리뷰 1262개).', 'Modern cuisine restaurant. Rated 4.8 on Google Maps (1262 reviews).'),
  place('marianske-lazne-fine_dining-2', 'marianske-lazne', 'fine_dining', 'Restaurace U Opata', 'Ibsenova 92/2, Mariánské Lázně, Czechia', '현대 요리 레스토랑. 구글 지도 평점 4.7(리뷰 344개).', 'Modern cuisine restaurant. Rated 4.7 on Google Maps (344 reviews).'),
  place('marianske-lazne-fine_dining-3', 'marianske-lazne', 'fine_dining', 'Česká hospůdka', 'Klíčová 179/10, Mariánské Lázně, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.7(리뷰 4833개).', 'Czech restaurant. Rated 4.7 on Google Maps (4833 reviews).'),
  place('marianske-lazne-fine_dining-4', 'marianske-lazne', 'fine_dining', 'Restaurant Kamenný dvůr', 'Hlavní tř. 396, Mariánské Lázně, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.6(리뷰 1181개).', 'Czech restaurant. Rated 4.6 on Google Maps (1181 reviews).'),
  place('marianske-lazne-fine_dining-5', 'marianske-lazne', 'fine_dining', 'Restaurant Filip', 'Poštovní 96, Mariánské Lázně, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.5(리뷰 1578개).', 'Czech restaurant. Rated 4.5 on Google Maps (1578 reviews).'),
  place('marianske-lazne-bakery-1', 'marianske-lazne', 'bakery', 'Dolce Italia', 'Hlavní tř. 322/98, Mariánské Lázně, Czechia', '과자점. 구글 지도 평점 4.7(리뷰 846개).', 'Pastry shop. Rated 4.7 on Google Maps (846 reviews).'),
  place('marianske-lazne-cafe-1', 'marianske-lazne', 'cafe', 'Kavárna 18g', 'Hlavní tř. 279/7, Mariánské Lázně, Czechia', '카페. 구글 지도 평점 4.8(리뷰 658개).', 'Café. Rated 4.8 on Google Maps (658 reviews).'),
  place('marianske-lazne-cafe-2', 'marianske-lazne', 'cafe', 'Old School Café', 'Hlavní tř. 679/58B, Mariánské Lázně, Czechia', '카페. 구글 지도 평점 4.8(리뷰 583개).', 'Café. Rated 4.8 on Google Maps (583 reviews).'),
  place('marianske-lazne-cafe-3', 'marianske-lazne', 'cafe', 'Edward Café', 'Goethovo nám., Mariánské Lázně, Czechia', '카페. 구글 지도 평점 4.8(리뷰 299개).', 'Café. Rated 4.8 on Google Maps (299 reviews).'),
  place('marianske-lazne-cafe-4', 'marianske-lazne', 'cafe', 'Fuente Cafe', 'Goethovo nám. 625/33, Mariánské Lázně, Czechia', '카페. 구글 지도 평점 4.7(리뷰 462개).', 'Café. Rated 4.7 on Google Maps (462 reviews).'),
  place('marianske-lazne-cafe-5', 'marianske-lazne', 'cafe', 'Cafe Bar Modra', 'Hlavní tř. 45, Mariánské Lázně, Czechia', '카페. 구글 지도 평점 4.5(리뷰 2321개).', 'Café. Rated 4.5 on Google Maps (2321 reviews).'),

  // —— cheb: restaurants, bakeries and cafés (2026-11-27) ——
  place('cheb-fine_dining-1', 'cheb', 'fine_dining', 'Botanik bistro', 'nám. Krále Jiřího z Poděbrad 487/41, Cheb, Czechia', '비스트로. 구글 지도 평점 4.8(리뷰 455개).', 'Bistro. Rated 4.8 on Google Maps (455 reviews).'),
  place('cheb-fine_dining-2', 'cheb', 'fine_dining', 'Santachj Asian Fusion & Sushi Bar', 'Pivovarská 669/30, Cheb, Czechia', '아시아 요리 레스토랑. 구글 지도 평점 4.8(리뷰 200개).', 'Asian restaurant. Rated 4.8 on Google Maps (200 reviews).'),
  place('cheb-fine_dining-3', 'cheb', 'fine_dining', 'Hostinec pod Hradem', 'Cheb, Czechia', '레스토랑. 구글 지도 평점 4.7(리뷰 567개).', 'Restaurant. Rated 4.7 on Google Maps (567 reviews).'),
  place('cheb-fine_dining-4', 'cheb', 'fine_dining', 'Euro-Asia restaurant', 'Jateční 447/18, Cheb, Czechia', '아시아 요리 레스토랑. 구글 지도 평점 4.7(리뷰 147개).', 'Asian restaurant. Rated 4.7 on Google Maps (147 reviews).'),
  place('cheb-fine_dining-5', 'cheb', 'fine_dining', 'Restaurace Hvězda', 'nám. Krále Jiřího z Poděbrad 4/19, Cheb, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.5(리뷰 1787개).', 'Czech restaurant. Rated 4.5 on Google Maps (1787 reviews).'),
  place('cheb-cafe-1', 'cheb', 'cafe', 'El Caffe Cheb', 'nám. Krále Jiřího z Poděbrad 3/18, Cheb, Czechia', '카페. 구글 지도 평점 4.7(리뷰 402개).', 'Café. Rated 4.7 on Google Maps (402 reviews).'),
  place('cheb-cafe-2', 'cheb', 'cafe', 'Café Domeček', 'Brandlova 2339, Cheb, Czechia', '카페. 구글 지도 평점 4.7(리뷰 406개).', 'Café. Rated 4.7 on Google Maps (406 reviews).'),
  place('cheb-cafe-3', 'cheb', 'cafe', 'Kočičí kavárna', 'Svobody 7/1, Cheb, Czechia', '카페. 구글 지도 평점 4.7(리뷰 118개).', 'Café. Rated 4.7 on Google Maps (118 reviews).'),
  place('cheb-cafe-4', 'cheb', 'cafe', 'Café & Baguetterie', 'nám. Krále Jiřího z Poděbrad 495/53, Cheb, Czechia', '카페. 구글 지도 평점 4.6(리뷰 439개).', 'Café. Rated 4.6 on Google Maps (439 reviews).'),

  // —— terezin: restaurants, bakeries and cafés (2026-11-27) ——
  place('terezin-fine_dining-1', 'terezin', 'fine_dining', '1994 Asian Restaurant', 'Velká Dominikánská 118/22, Litoměřice, Czechia', '베트남 요리 식당. 구글 지도 평점 4.8(리뷰 420개).', 'Vietnamese restaurant. Rated 4.8 on Google Maps (420 reviews).'),
  place('terezin-fine_dining-2', 'terezin', 'fine_dining', 'Tandoor Indian Restaurant Litoměřice', 'Kapucínské nám. 200/6, Litoměřice, Czechia', '인도 요리 레스토랑. 구글 지도 평점 4.8(리뷰 588개).', 'Indian restaurant. Rated 4.8 on Google Maps (588 reviews).'),
  place('terezin-fine_dining-3', 'terezin', 'fine_dining', 'NO.1 Pravá Vietnamská Restaurace', 'Kostelní nám. 234/2, Litoměřice, Czechia', '베트남 요리 식당. 구글 지도 평점 4.7(리뷰 528개).', 'Vietnamese restaurant. Rated 4.7 on Google Maps (528 reviews).'),
  place('terezin-fine_dining-4', 'terezin', 'fine_dining', 'Dobrá Bašta', 'Mezibraní 5, Litoměřice, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.6(리뷰 2381개).', 'Czech restaurant. Rated 4.6 on Google Maps (2381 reviews).'),
  place('terezin-fine_dining-5', 'terezin', 'fine_dining', 'Bistro Rezavá', 'Dlouhá 211/10, Litoměřice, Czechia', '비스트로. 구글 지도 평점 4.6(리뷰 359개).', 'Bistro. Rated 4.6 on Google Maps (359 reviews).'),
  place('terezin-bakery-1', 'terezin', 'bakery', 'Leonardo', 'Mírové nám. 154, Litoměřice, Czechia', '케이크 가게. 구글 지도 평점 4.3(리뷰 332개).', 'Cake shop. Rated 4.3 on Google Maps (332 reviews).'),
  place('terezin-cafe-1', 'terezin', 'cafe', 'Kafe Kontik', 'Želetická 2372, Litoměřice, Czechia', '카페. 구글 지도 평점 4.9(리뷰 165개).', 'Café. Rated 4.9 on Google Maps (165 reviews).'),
  place('terezin-cafe-2', 'terezin', 'cafe', 'Valchiria Coffee Roastery', 'Michalská 1478/19, Litoměřice, Czechia', '직접 원두를 볶는 커피숍. 구글 지도 평점 4.9(리뷰 138개).', 'Coffee roastery café. Rated 4.9 on Google Maps (138 reviews).'),
  place('terezin-cafe-3', 'terezin', 'cafe', 'Kafe doma', 'Mírové nám. 157/30, Litoměřice, Czechia', '카페. 구글 지도 평점 4.8(리뷰 1595개).', 'Café. Rated 4.8 on Google Maps (1595 reviews).'),
  place('terezin-cafe-4', 'terezin', 'cafe', 'Kávovna Litoměřice', 'Jarošova, Litoměřice, Czechia', '카페. 구글 지도 평점 4.8(리뷰 114개).', 'Café. Rated 4.8 on Google Maps (114 reviews).'),
  place('terezin-cafe-5', 'terezin', 'cafe', 'Coffee with Steam', 'Jarošova 165/32, Litoměřice, Czechia', '카페. 구글 지도 평점 4.7(리뷰 3591개).', 'Café. Rated 4.7 on Google Maps (3591 reviews).'),

  // —— liberec: restaurants, bakeries and cafés (2026-11-27) ——
  place('liberec-fine_dining-1', 'liberec', 'fine_dining', 'Nakraji Liberec', 'U Nisy 916/12, 460 07 Liberec, Czechia', '레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.7(리뷰 592개).', 'Restaurant. Listed in the MICHELIN Guide. Rated 4.7 on Google Maps (592 reviews).'),
  place('liberec-fine_dining-2', 'liberec', 'fine_dining', 'V Bezovém Údolí (The Elderberry House)', 'Kryštofovo Údolí 17, 460 01 Kryštofovo Údolí, Czechia', '크리슈토포보우돌리에 있는 지역 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.6(리뷰 139개).', 'Regional cooking restaurant in Kryštofovo Údolí. Listed in the MICHELIN Guide. Rated 4.6 on Google Maps (139 reviews).'),
  place('liberec-fine_dining-3', 'liberec', 'fine_dining', 'Dim Sum Spot Liberec', 'Široká 174/28, Liberec, Czechia', '중국 요리 식당. 구글 지도 평점 4.8(리뷰 650개).', 'Chinese restaurant. Rated 4.8 on Google Maps (650 reviews).'),
  place('liberec-fine_dining-4', 'liberec', 'fine_dining', 'Liên Quán Liberec', '5. května 159/15, Liberec, Czechia', '아시아 요리 레스토랑. 구글 지도 평점 4.9(리뷰 167개).', 'Asian restaurant. Rated 4.9 on Google Maps (167 reviews).'),
  place('liberec-fine_dining-5', 'liberec', 'fine_dining', 'Black Horse', 'Nerudovo nám. 108, Liberec, Czechia', '아일랜드식 펍. 구글 지도 평점 4.6(리뷰 1980개).', 'Irish pub. Rated 4.6 on Google Maps (1980 reviews).'),
  place('liberec-bakery-1', 'liberec', 'bakery', 'Pekařství Koláček', 'Hanychovská 622/1, Liberec, Czechia', '빵집. 구글 지도 평점 4.9(리뷰 99개).', 'Bakery. Rated 4.9 on Google Maps (99 reviews).'),
  place('liberec-bakery-2', 'liberec', 'bakery', 'Cukrárna Sladká tečka', 'Lesní 686/1, Liberec, Czechia', '과자점. 구글 지도 평점 4.5(리뷰 770개).', 'Pastry shop. Rated 4.5 on Google Maps (770 reviews).'),
  place('liberec-cafe-1', 'liberec', 'cafe', 'VITA Café Bistro', 'Zhořelecká 414/19, Liberec, Czechia', '카페. 구글 지도 평점 4.8(리뷰 679개).', 'Café. Rated 4.8 on Google Maps (679 reviews).'),
  place('liberec-cafe-2', 'liberec', 'cafe', 'Jedno Kafe', 'Frýdlantská 1321, Liberec, Czechia', '카페. 구글 지도 평점 4.8(리뷰 457개).', 'Café. Rated 4.8 on Google Maps (457 reviews).'),
  place('liberec-cafe-3', 'liberec', 'cafe', 'Kavárna Bez konceptu', 'Husova 1094, Liberec, Czechia', '카페. 구글 지도 평점 4.7(리뷰 1735개).', 'Café. Rated 4.7 on Google Maps (1735 reviews).'),
  place('liberec-cafe-4', 'liberec', 'cafe', 'Fofr Kafe', 'nám. Dr. E. Beneše 13/16, Liberec, Czechia', '카페. 구글 지도 평점 4.7(리뷰 693개).', 'Café. Rated 4.7 on Google Maps (693 reviews).'),
  place('liberec-cafe-5', 'liberec', 'cafe', 'Wink Café', 'nám. Tržní 876/11, Liberec, Czechia', '카페. 구글 지도 평점 4.7(리뷰 427개).', 'Café. Rated 4.7 on Google Maps (427 reviews).'),

  // —— hradec-kralove: restaurants, bakeries and cafés (2026-11-27) ——
  place('hradec-kralove-fine_dining-1', 'hradec-kralove', 'fine_dining', 'Šatlava', 'Dlouhá 101/13, 500 03 Hradec Králové, Czechia', '체코 요리 레스토랑. 미쉐린 빕 구르망. 구글 지도 평점 4.8(리뷰 2587개).', 'Czech restaurant. MICHELIN Bib Gourmand. Rated 4.8 on Google Maps (2587 reviews).', { michelin: 'bib' }),
  place('hradec-kralove-fine_dining-2', 'hradec-kralove', 'fine_dining', 'Restaurant Archway', 'Velké nám. 144/14A, Hradec Králové, Czechia', '레스토랑. 구글 지도 평점 4.7(리뷰 1010개).', 'Restaurant. Rated 4.7 on Google Maps (1010 reviews).'),
  place('hradec-kralove-fine_dining-3', 'hradec-kralove', 'fine_dining', 'Restaurant Na Statku', 'Pražská tř. 29, Hradec Králové, Czechia', '레스토랑. 구글 지도 평점 4.6(리뷰 2716개).', 'Restaurant. Rated 4.6 on Google Maps (2716 reviews).'),
  place('hradec-kralove-fine_dining-4', 'hradec-kralove', 'fine_dining', 'Aquarium Restaurant', 'Rybova 1901/14, Hradec Králové, Czechia', '레스토랑. 구글 지도 평점 4.6(리뷰 819개).', 'Restaurant. Rated 4.6 on Google Maps (819 reviews).'),
  place('hradec-kralove-fine_dining-5', 'hradec-kralove', 'fine_dining', 'Grill Duran', 'Sekaninova 398/2, Hradec Králové, Czechia', '그릴 레스토랑. 구글 지도 평점 4.5(리뷰 2607개).', 'Grill restaurant. Rated 4.5 on Google Maps (2607 reviews).'),
  place('hradec-kralove-bakery-1', 'hradec-kralove', 'bakery', 'Bistro v Pekárně', 'Františka Halase 1887/12a, Hradec Králové, Czechia', '빵집. 구글 지도 평점 4.8(리뷰 478개).', 'Bakery. Rated 4.8 on Google Maps (478 reviews).'),
  place('hradec-kralove-bakery-2', 'hradec-kralove', 'bakery', 'V mouce - řemeslná pekárna', 'Velké nám. 27, Hradec Králové, Czechia', '빵집. 구글 지도 평점 4.7(리뷰 104개).', 'Bakery. Rated 4.7 on Google Maps (104 reviews).'),
  place('hradec-kralove-bakery-3', 'hradec-kralove', 'bakery', 'Sázava Bakery', 'Pospíšilova 1157, Hradec Králové, Czechia', '빵집. 구글 지도 평점 4.6(리뷰 162개).', 'Bakery. Rated 4.6 on Google Maps (162 reviews).'),
  place('hradec-kralove-cafe-1', 'hradec-kralove', 'cafe', 'Café Na kole', 'Velké nám. 130, Hradec Králové, Czechia', '카페. 구글 지도 평점 4.7(리뷰 911개).', 'Café. Rated 4.7 on Google Maps (911 reviews).'),
  place('hradec-kralove-cafe-2', 'hradec-kralove', 'cafe', 'Café 149', 'Velké nám. 149, Hradec Králové, Czechia', '카페. 구글 지도 평점 4.5(리뷰 192개).', 'Café. Rated 4.5 on Google Maps (192 reviews).'),

  // —— kuks: restaurants, bakeries and cafés (2026-11-27) ——
  place('kuks-fine_dining-1', 'kuks', 'fine_dining', 'Lavender Kuks', 'Kuks 80, Czechia', '레스토랑. 구글 지도 평점 4.6(리뷰 172개).', 'Restaurant. Rated 4.6 on Google Maps (172 reviews).'),
  place('kuks-fine_dining-2', 'kuks', 'fine_dining', 'Restaurant Baroque', 'Kuks 57, Czechia', '레스토랑. 구글 지도 평점 4.4(리뷰 913개).', 'Restaurant. Rated 4.4 on Google Maps (913 reviews).'),
  place('kuks-cafe-1', 'kuks', 'cafe', 'LoriCafé Kuks', 'Kuks 90, Czechia', '카페. 구글 지도 평점 4.8(리뷰 985개).', 'Café. Rated 4.8 on Google Maps (985 reviews).'),

  // —— adrspach: restaurants, bakeries and cafés (2026-11-27) ——
  place('adrspach-fine_dining-1', 'adrspach', 'fine_dining', 'Kovářova Kobyla', 'Adršpach 193, Czechia', '레스토랑. 구글 지도 평점 4.8(리뷰 1399개).', 'Restaurant. Rated 4.8 on Google Maps (1399 reviews).'),
  place('adrspach-fine_dining-2', 'adrspach', 'fine_dining', 'Qadr rest & bar', 'Adršpach 77, Czechia', '레스토랑. 구글 지도 평점 4.5(리뷰 1157개).', 'Restaurant. Rated 4.5 on Google Maps (1157 reviews).'),
  place('adrspach-fine_dining-3', 'adrspach', 'fine_dining', 'Hostinec U Tošováka', 'Dolní Adršpach 68, Czechia', '레스토랑. 구글 지도 평점 4.4(리뷰 1856개).', 'Restaurant. Rated 4.4 on Google Maps (1856 reviews).'),
  place('adrspach-fine_dining-4', 'adrspach', 'fine_dining', 'Skalní Mlýn Adršpach', 'Adršpach, Czechia', '레스토랑. 구글 지도 평점 4.3(리뷰 1478개).', 'Restaurant. Rated 4.3 on Google Maps (1478 reviews).'),
  place('adrspach-cafe-1', 'adrspach', 'cafe', 'Café & Bistro Na kus řeči', 'Zámecká 22, Adršpach, Czechia', '카페. 구글 지도 평점 4.8(리뷰 642개).', 'Café. Rated 4.8 on Google Maps (642 reviews).'),
  place('adrspach-cafe-2', 'adrspach', 'cafe', 'Café bar K2', 'Dolní Adršpach 128, Czechia', '카페. 구글 지도 평점 4.5(리뷰 707개).', 'Café. Rated 4.5 on Google Maps (707 reviews).'),

  // —— krkonose: restaurants, bakeries and cafés (2026-11-27) ——
  place('krkonose-fine_dining-1', 'krkonose', 'fine_dining', 'Soyka', 'Bedřichov 52, 543 51 Špindlerův Mlýn, Czechia', '레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.6(리뷰 348개).', 'Restaurant. Listed in the MICHELIN Guide. Rated 4.6 on Google Maps (348 reviews).'),
  place('krkonose-fine_dining-2', 'krkonose', 'fine_dining', 'Savoya', 'Harrachova 23, 543 51 Špindlerův Mlýn, Czechia', '레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.7(리뷰 602개).', 'Restaurant. Listed in the MICHELIN Guide. Rated 4.7 on Google Maps (602 reviews).'),
  place('krkonose-fine_dining-3', 'krkonose', 'fine_dining', 'Restaurant Legenda by Windsor', 'Špindlerův Mlýn 13, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.8(리뷰 178개).', 'Czech restaurant. Rated 4.8 on Google Maps (178 reviews).'),
  place('krkonose-fine_dining-4', 'krkonose', 'fine_dining', 'Bakchus Restaurant & Café', 'Špindlerův Mlýn 223, Czechia', '스테이크 하우스. 구글 지도 평점 4.7(리뷰 1189개).', 'Steakhouse. Rated 4.7 on Google Maps (1189 reviews).'),
  place('krkonose-fine_dining-5', 'krkonose', 'fine_dining', 'Jasmine Restaurant', 'Špindlerův Mlýn 121, Czechia', '인도 요리 레스토랑. 구글 지도 평점 4.7(리뷰 1004개).', 'Indian restaurant. Rated 4.7 on Google Maps (1004 reviews).'),
  place('krkonose-bakery-1', 'krkonose', 'bakery', 'Zmrzka z hor', 'Špindlerův Mlýn, Czechia', '아이스크림 가게. 구글 지도 평점 4.8(리뷰 122개).', 'Ice-cream shop. Rated 4.8 on Google Maps (122 reviews).'),
  place('krkonose-cafe-1', 'krkonose', 'cafe', 'Café Restaurant SRUB pod Medvědínem', 'Špindlerův Mlýn, Czechia', '카페. 구글 지도 평점 4.7(리뷰 1241개).', 'Café. Rated 4.7 on Google Maps (1241 reviews).'),

  // —— pardubice: restaurants, bakeries and cafés (2026-11-27) ——
  place('pardubice-fine_dining-1', 'pardubice', 'fine_dining', 'Tlustá Kachna', 'Resselovo nám. 6, 537 01 Chrudim, Czechia', '흐루딤에 있는 체코 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.7(리뷰 659개).', 'Czech restaurant in Chrudim. Listed in the MICHELIN Guide. Rated 4.7 on Google Maps (659 reviews).'),
  place('pardubice-fine_dining-2', 'pardubice', 'fine_dining', 'El Patio Pardubice', 'tř. Míru 65, Pardubice, Czechia', '레스토랑. 구글 지도 평점 4.9(리뷰 434개).', 'Restaurant. Rated 4.9 on Google Maps (434 reviews).'),
  place('pardubice-fine_dining-3', 'pardubice', 'fine_dining', 'La Tāble Pardubice', 'Na Hrádku 724, Pardubice, Czechia', '현대 요리 레스토랑. 구글 지도 평점 4.8(리뷰 86개).', 'Modern cuisine restaurant. Rated 4.8 on Google Maps (86 reviews).'),
  place('pardubice-fine_dining-4', 'pardubice', 'fine_dining', 'Restaurace nejen Dvorek', 'tř. Míru 66, Pardubice, Czechia', '현대 요리 레스토랑. 구글 지도 평점 4.7(리뷰 2538개).', 'Modern cuisine restaurant. Rated 4.7 on Google Maps (2538 reviews).'),
  place('pardubice-fine_dining-5', 'pardubice', 'fine_dining', 'Jako dřív', '17. listopadu 2723, Pardubice, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.6(리뷰 154개).', 'Czech restaurant. Rated 4.6 on Google Maps (154 reviews).'),
  place('pardubice-bakery-1', 'pardubice', 'bakery', 'Pekárna Sázava', 'Jindřišská 785, Pardubice, Czechia', '빵집. 구글 지도 평점 4.8(리뷰 260개).', 'Bakery. Rated 4.8 on Google Maps (260 reviews).'),
  place('pardubice-bakery-2', 'pardubice', 'bakery', 'Pekárna Trouba', 'Zámecká 19, Pardubice, Czechia', '빵집. 구글 지도 평점 4.7(리뷰 136개).', 'Bakery. Rated 4.7 on Google Maps (136 reviews).'),
  place('pardubice-bakery-3', 'pardubice', 'bakery', 'Patisserie Milano Pardubice', 'Smilova 412, Pardubice, Czechia', '과자점. 구글 지도 평점 4.6(리뷰 271개).', 'Pastry shop. Rated 4.6 on Google Maps (271 reviews).'),
  place('pardubice-cafe-1', 'pardubice', 'cafe', 'Kafe, víno, kokino', 'U Divadla 620, Pardubice, Czechia', '카페. 구글 지도 평점 4.9(리뷰 377개).', 'Café. Rated 4.9 on Google Maps (377 reviews).'),
  place('pardubice-cafe-2', 'pardubice', 'cafe', 'Bakla café', 'Pernštýnská 40, Pardubice, Czechia', '카페. 구글 지도 평점 4.8(리뷰 569개).', 'Café. Rated 4.8 on Google Maps (569 reviews).'),
  place('pardubice-cafe-3', 'pardubice', 'cafe', 'Epeé cafe', 'Na Hrádku 98, Pardubice, Czechia', '카페. 구글 지도 평점 4.8(리뷰 223개).', 'Café. Rated 4.8 on Google Maps (223 reviews).'),
  place('pardubice-cafe-4', 'pardubice', 'cafe', 'Westie Coffee', 'Smilova 1904, Pardubice, Czechia', '카페. 구글 지도 평점 4.8(리뷰 92개).', 'Café. Rated 4.8 on Google Maps (92 reviews).'),
  place('pardubice-cafe-5', 'pardubice', 'cafe', 'Cafe Bajer', 'tř. Míru 763, Pardubice, Czechia', '카페. 구글 지도 평점 4.6(리뷰 1819개).', 'Café. Rated 4.6 on Google Maps (1819 reviews).'),

  // —— trebic: restaurants, bakeries and cafés (2026-11-27) ——
  place('trebic-fine_dining-1', 'trebic', 'fine_dining', 'Adam\'s Bar & Bistro', 'Komenského nám. 138/10, Třebíč, Czechia', '비스트로. 구글 지도 평점 4.8(리뷰 1784개).', 'Bistro. Rated 4.8 on Google Maps (1784 reviews).'),
  place('trebic-fine_dining-2', 'trebic', 'fine_dining', 'Mount Everest Restaurace', 'Okrajová 1350, Třebíč, Czechia', '네팔 요리 식당. 구글 지도 평점 4.7(리뷰 251개).', 'Nepalese restaurant. Rated 4.7 on Google Maps (251 reviews).'),
  place('trebic-fine_dining-3', 'trebic', 'fine_dining', 'Hotel Kocour & Restaurant', 'Třebíč, Czechia', '레스토랑. 구글 지도 평점 4.5(리뷰 1500개).', 'Restaurant. Rated 4.5 on Google Maps (1500 reviews).'),
  place('trebic-fine_dining-4', 'trebic', 'fine_dining', 'Black House', 'Karlovo nám. 22/16, Třebíč, Czechia', '레스토랑. 구글 지도 평점 4.3(리뷰 1098개).', 'Restaurant. Rated 4.3 on Google Maps (1098 reviews).'),
  place('trebic-bakery-1', 'trebic', 'bakery', 'For Patisserie Ovens', 'Žerotínovo nám. 8, Třebíč, Czechia', '과자점. 구글 지도 평점 4.8(리뷰 426개).', 'Pastry shop. Rated 4.8 on Google Maps (426 reviews).'),
  place('trebic-bakery-2', 'trebic', 'bakery', 'GelateriaRoma', 'V. Nezvala 95/2, Třebíč, Czechia', '아이스크림 가게. 구글 지도 평점 4.6(리뷰 260개).', 'Ice-cream shop. Rated 4.6 on Google Maps (260 reviews).'),
  place('trebic-cafe-1', 'trebic', 'cafe', 'Mosa Kafe', 'Žerotínovo nám. 21, Třebíč, Czechia', '카페. 구글 지도 평점 5.0(리뷰 162개).', 'Café. Rated 5.0 on Google Maps (162 reviews).'),
  place('trebic-cafe-2', 'trebic', 'cafe', 'Kiwi Café', 'Hasskova 66/7, Třebíč, Czechia', '카페. 구글 지도 평점 4.9(리뷰 98개).', 'Café. Rated 4.9 on Google Maps (98 reviews).'),
  place('trebic-cafe-3', 'trebic', 'cafe', 'Café Art Třebíč', 'Blahoslavova 88/19, Třebíč, Czechia', '카페. 구글 지도 평점 4.7(리뷰 545개).', 'Café. Rated 4.7 on Google Maps (545 reviews).'),

  // —— zdar: restaurants, bakeries and cafés (2026-11-27) ——
  place('zdar-fine_dining-1', 'zdar', 'fine_dining', 'Papi\'s Bistro Bar Café', 'Veselská 16/29, Žďár nad Sázavou, Czechia', '비스트로. 구글 지도 평점 4.8(리뷰 224개).', 'Bistro. Rated 4.8 on Google Maps (224 reviews).'),
  place('zdar-fine_dining-2', 'zdar', 'fine_dining', 'Phame Kitchen', 'nám. Republiky 32, Žďár nad Sázavou, Czechia', '아시아 요리 레스토랑. 구글 지도 평점 4.7(리뷰 449개).', 'Asian restaurant. Rated 4.7 on Google Maps (449 reviews).'),
  place('zdar-fine_dining-3', 'zdar', 'fine_dining', 'Poppet Restaurant', 'nám. Republiky 70, Žďár nad Sázavou, Czechia', '레스토랑. 구글 지도 평점 4.5(리뷰 1145개).', 'Restaurant. Rated 4.5 on Google Maps (1145 reviews).'),
  place('zdar-fine_dining-4', 'zdar', 'fine_dining', 'Oáza bistro', 'Havlíčkovo nám. 260/19, Žďár nad Sázavou, Czechia', '비스트로. 구글 지도 평점 4.5(리뷰 568개).', 'Bistro. Rated 4.5 on Google Maps (568 reviews).'),
  place('zdar-bakery-1', 'zdar', 'bakery', 'Cukrárna Amarena', 'Nádražní 678/3, Žďár nad Sázavou, Czechia', '디저트 가게. 구글 지도 평점 4.8(리뷰 257개).', 'Dessert shop. Rated 4.8 on Google Maps (257 reviews).'),
  place('zdar-cafe-1', 'zdar', 'cafe', 'Café Stalingrad', 'Brodská 1826/13, Žďár nad Sázavou, Czechia', '카페. 구글 지도 평점 4.8(리뷰 162개).', 'Café. Rated 4.8 on Google Maps (162 reviews).'),
  place('zdar-cafe-2', 'zdar', 'cafe', 'Aunt Hana\'s Café', 'Veselská 5/5, Žďár nad Sázavou, Czechia', '카페. 구글 지도 평점 4.7(리뷰 500개).', 'Café. Rated 4.7 on Google Maps (500 reviews).'),
  place('zdar-cafe-3', 'zdar', 'cafe', 'Malá kavárna', 'Havlíčkovo nám. 253/5, Žďár nad Sázavou, Czechia', '카페. 구글 지도 평점 4.7(리뷰 210개).', 'Café. Rated 4.7 on Google Maps (210 reviews).'),
  place('zdar-cafe-4', 'zdar', 'cafe', 'P Cafe', 'nám. Republiky 72/4, Žďár nad Sázavou, Czechia', '카페. 구글 지도 평점 4.5(리뷰 1038개).', 'Café. Rated 4.5 on Google Maps (1038 reviews).'),

  // —— slavkov: restaurants, bakeries and cafés (2026-11-27) ——
  place('slavkov-fine_dining-1', 'slavkov', 'fine_dining', 'Slavkovský pivovar', 'U Mlýna 1422, Slavkov u Brna, Czechia', '직접 맥주를 빚는 양조장 식당. 구글 지도 평점 4.6(리뷰 1795개).', 'Brewpub restaurant. Rated 4.6 on Google Maps (1795 reviews).'),
  place('slavkov-fine_dining-2', 'slavkov', 'fine_dining', 'Vina House', 'Brněnská 642, Slavkov u Brna, Czechia', '베트남 요리 식당. 구글 지도 평점 4.6(리뷰 285개).', 'Vietnamese restaurant. Rated 4.6 on Google Maps (285 reviews).'),
  place('slavkov-fine_dining-3', 'slavkov', 'fine_dining', 'Wings pizzerie a restaurant', 'Palackého nám. 75, Slavkov u Brna, Czechia', '피자 식당. 구글 지도 평점 4.5(리뷰 1301개).', 'Pizza restaurant. Rated 4.5 on Google Maps (1301 reviews).'),
  place('slavkov-fine_dining-4', 'slavkov', 'fine_dining', 'Hostinec U Černého lva', 'Palackého nám. 81, Slavkov u Brna, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.4(리뷰 185개).', 'Czech restaurant. Rated 4.4 on Google Maps (185 reviews).'),
  place('slavkov-bakery-1', 'slavkov', 'bakery', 'Cukrárna a kavárna U Tří císařů', 'Palackého nám. 73, Slavkov u Brna, Czechia', '케이크 가게. 구글 지도 평점 4.6(리뷰 765개).', 'Cake shop. Rated 4.6 on Google Maps (765 reviews).'),
  place('slavkov-bakery-2', 'slavkov', 'bakery', 'Pekárna Herold', 'Palackého nám. 76, Slavkov u Brna, Czechia', '빵집. 구글 지도 평점 4.5(리뷰 111개).', 'Bakery. Rated 4.5 on Google Maps (111 reviews).'),
  place('slavkov-cafe-1', 'slavkov', 'cafe', 'Cafe Doubek Slavkov', 'Československé armády 1885, Slavkov u Brna, Czechia', '카페. 구글 지도 평점 4.8(리뷰 215개).', 'Café. Rated 4.8 on Google Maps (215 reviews).'),
  place('slavkov-cafe-2', 'slavkov', 'cafe', 'Styl kavárna a cukrárna', 'Palackého nám. 82, Slavkov u Brna, Czechia', '카페. 구글 지도 평점 4.6(리뷰 977개).', 'Café. Rated 4.6 on Google Maps (977 reviews).'),

  // —— pernstejn: restaurants, bakeries and cafés (2026-11-27) ——
  place('pernstejn-fine_dining-1', 'pernstejn', 'fine_dining', 'Pizzerie 16', 'Nedvědice 16, Czechia', '네드볘디체에 있는 피자 식당. 구글 지도 평점 4.5(리뷰 631개).', 'Pizza restaurant in Nedvědice. Rated 4.5 on Google Maps (631 reviews).'),
  place('pernstejn-fine_dining-2', 'pernstejn', 'fine_dining', 'Hradní krčma Pernštejn', 'Pernštejn 18, Nedvědice, Czechia', '레스토랑. 구글 지도 평점 4.4(리뷰 141개).', 'Restaurant. Rated 4.4 on Google Maps (141 reviews).'),
  place('pernstejn-fine_dining-3', 'pernstejn', 'fine_dining', 'Bistro U Ježků', 'Nedvědice 439, Czechia', '네드볘디체에 있는 비스트로. 구글 지도 평점 4.4(리뷰 101개).', 'Bistro in Nedvědice. Rated 4.4 on Google Maps (101 reviews).'),
  place('pernstejn-fine_dining-4', 'pernstejn', 'fine_dining', 'Restaurace pod Pernštejnem', 'Nedvědice 76, Czechia', '네드볘디체에 있는 레스토랑. 구글 지도 평점 4.3(리뷰 1565개).', 'Restaurant in Nedvědice. Rated 4.3 on Google Maps (1565 reviews).'),
  place('pernstejn-bakery-1', 'pernstejn', 'bakery', 'Cukrárna Milena', 'Nedvědice 31, Czechia', '네드볘디체에 있는 디저트 가게. 구글 지도 평점 4.7(리뷰 381개).', 'Dessert shop in Nedvědice. Rated 4.7 on Google Maps (381 reviews).'),

  // —— jeseniky: restaurants, bakeries and cafés (2026-11-27) ——
  place('jeseniky-fine_dining-1', 'jeseniky', 'fine_dining', 'Naše BiSTRO Jeseník', 'Tyršova 319/28, Jeseník, Czechia', '예세니크에 있는 비스트로. 구글 지도 평점 4.9(리뷰 1231개).', 'Bistro in Jeseník. Rated 4.9 on Google Maps (1231 reviews).'),
  place('jeseniky-fine_dining-2', 'jeseniky', 'fine_dining', 'Náš Gemer', 'nám. Svobody 875, Jeseník, Czechia', '예세니크에 있는 피자 식당. 구글 지도 평점 4.7(리뷰 153개).', 'Pizza restaurant in Jeseník. Rated 4.7 on Google Maps (153 reviews).'),
  place('jeseniky-fine_dining-3', 'jeseniky', 'fine_dining', 'Restaurace Křížový vrch', 'Za Pilou 6, Jeseník, Czechia', '예세니크에 있는 체코 요리 레스토랑. 구글 지도 평점 4.5(리뷰 2562개).', 'Czech restaurant in Jeseník. Rated 4.5 on Google Maps (2562 reviews).'),
  place('jeseniky-cafe-1', 'jeseniky', 'cafe', 'Valhalla', 'Dukelská 717, Jeseník, Czechia', '예세니크에 있는 카페. 구글 지도 평점 4.9(리뷰 134개).', 'Café in Jeseník. Rated 4.9 on Google Maps (134 reviews).'),
  place('jeseniky-cafe-2', 'jeseniky', 'cafe', 'NAKAFE Jeseník', 'Revoluční 141/2, Jeseník, Czechia', '예세니크에 있는 카페. 구글 지도 평점 4.8(리뷰 202개).', 'Café in Jeseník. Rated 4.8 on Google Maps (202 reviews).'),
  place('jeseniky-cafe-3', 'jeseniky', 'cafe', 'Lucoli Espresso & Gin', 'Lipovská 263/53, Jeseník, Czechia', '예세니크에 있는 카페. 구글 지도 평점 4.8(리뷰 132개).', 'Café in Jeseník. Rated 4.8 on Google Maps (132 reviews).'),
  place('jeseniky-cafe-4', 'jeseniky', 'cafe', 'Vinckovo - kavárna a dortírna', 'Priessnitzova 175/37, Jeseník, Czechia', '예세니크에 있는 카페. 구글 지도 평점 4.7(리뷰 1251개).', 'Café in Jeseník. Rated 4.7 on Google Maps (1251 reviews).'),
  place('jeseniky-cafe-5', 'jeseniky', 'cafe', 'Ennea Caffe & Shop', 'nám. Svobody 832, Jeseník, Czechia', '예세니크에 있는 카페. 구글 지도 평점 4.7(리뷰 884개).', 'Café in Jeseník. Rated 4.7 on Google Maps (884 reviews).'),

  // —— zlin: restaurants, bakeries and cafés (2026-11-27) ——
  place('zlin-fine_dining-1', 'zlin', 'fine_dining', 'La Villa Restaurant', 'Stráže 3661, 760 01 Zlín, Czechia', '프랑스 요리 레스토랑. 미쉐린 1스타. 구글 지도 평점 4.8(리뷰 445개).', 'French restaurant. One MICHELIN star. Rated 4.8 on Google Maps (445 reviews).', { michelin: 'star1' }),
  place('zlin-fine_dining-2', 'zlin', 'fine_dining', 'Prostē Restaurace', 'Vavrečkova 7074, Zlín, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.8(리뷰 85개).', 'Czech restaurant. Rated 4.8 on Google Maps (85 reviews).'),
  place('zlin-fine_dining-3', 'zlin', 'fine_dining', 'Restaurace U Johana', 'Zlín, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.7(리뷰 2600개).', 'Czech restaurant. Rated 4.7 on Google Maps (2600 reviews).'),
  place('zlin-fine_dining-4', 'zlin', 'fine_dining', 'Bistrov Zlín', 'Podlesí II 5610, Zlín, Czechia', '햄버거 식당. 구글 지도 평점 4.7(리뷰 192개).', 'Burger restaurant. Rated 4.7 on Google Maps (192 reviews).'),
  place('zlin-fine_dining-5', 'zlin', 'fine_dining', 'Viet Village', 'Kvítková 124/11, Zlín, Czechia', '아시아 요리 레스토랑. 구글 지도 평점 4.6(리뷰 610개).', 'Asian restaurant. Rated 4.6 on Google Maps (610 reviews).'),
  place('zlin-bakery-1', 'zlin', 'bakery', 'Svoboda & Březík', 'J. A. Bati 5648, Zlín, Czechia', '빵집. 구글 지도 평점 4.6(리뷰 102개).', 'Bakery. Rated 4.6 on Google Maps (102 reviews).'),
  place('zlin-bakery-2', 'zlin', 'bakery', 'Garibaldi Pastry Shop', 'nám. Míru 63, Zlín, Czechia', '디저트 가게. 구글 지도 평점 4.5(리뷰 284개).', 'Dessert shop. Rated 4.5 on Google Maps (284 reviews).'),
  place('zlin-cafe-1', 'zlin', 'cafe', 'Pikola Espresso Bar Zlín', 'Zarámí 90, Zlín, Czechia', '카페. 구글 지도 평점 4.9(리뷰 80개).', 'Café. Rated 4.9 on Google Maps (80 reviews).'),
  place('zlin-cafe-2', 'zlin', 'cafe', 'Le Mimosa', 'Fügnerovo nábř. 1797, Zlín, Czechia', '카페. 구글 지도 평점 4.9(리뷰 87개).', 'Café. Rated 4.9 on Google Maps (87 reviews).'),
  place('zlin-cafe-3', 'zlin', 'cafe', 'Bus Cafe 96', 'Devadesátá 7008, Zlín, Czechia', '카페. 구글 지도 평점 4.8(리뷰 178개).', 'Café. Rated 4.8 on Google Maps (178 reviews).'),

  // —— luhacovice: restaurants, bakeries and cafés (2026-11-27) ——
  place('luhacovice-fine_dining-1', 'luhacovice', 'fine_dining', 'Racek Restaurant', 'Dr. Palka Blaho 960, Luhačovice, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.5(리뷰 2425개).', 'Czech restaurant. Rated 4.5 on Google Maps (2425 reviews).'),
  place('luhacovice-fine_dining-2', 'luhacovice', 'fine_dining', 'Divadelní restaurace a kavárna', 'Dr. Palka Blaho 416, Luhačovice, Czechia', '레스토랑. 구글 지도 평점 4.4(리뷰 863개).', 'Restaurant. Rated 4.4 on Google Maps (863 reviews).'),
  place('luhacovice-bakery-1', 'luhacovice', 'bakery', 'Cukrárna Dobrá Naděje', 'Masarykova 1151, Luhačovice, Czechia', '과자점. 구글 지도 평점 4.5(리뷰 297개).', 'Pastry shop. Rated 4.5 on Google Maps (297 reviews).'),
  place('luhacovice-cafe-1', 'luhacovice', 'cafe', 'Jizba Luhačovice', 'Masarykova 198, Luhačovice, Czechia', '카페. 구글 지도 평점 4.8(리뷰 904개).', 'Café. Rated 4.8 on Google Maps (904 reviews).'),
  place('luhacovice-cafe-2', 'luhacovice', 'cafe', 'Marco Polo Café', 'Doktora Veselého 347, Luhačovice, Czechia', '카페. 구글 지도 평점 4.7(리뷰 425개).', 'Café. Rated 4.7 on Google Maps (425 reviews).'),
  place('luhacovice-cafe-3', 'luhacovice', 'cafe', 'Bonjour Caffe', 'Nábřeží 1066, Luhačovice, Czechia', '카페. 구글 지도 평점 4.6(리뷰 669개).', 'Café. Rated 4.6 on Google Maps (669 reviews).'),
  place('luhacovice-cafe-4', 'luhacovice', 'cafe', 'Cafe in Myslivně', 'Dr. Palka Blaho 122, Luhačovice, Czechia', '카페. 구글 지도 평점 4.6(리뷰 1222개).', 'Café. Rated 4.6 on Google Maps (1222 reviews).'),

  // —— velehrad: restaurants, bakeries and cafés (2026-11-27) ——
  place('velehrad-fine_dining-1', 'velehrad', 'fine_dining', 'Restaurace Koníček', 'Družstevní 167, Uherské Hradiště, Czechia', '레스토랑. 구글 지도 평점 4.7(리뷰 775개).', 'Restaurant. Rated 4.7 on Google Maps (775 reviews).'),
  place('velehrad-fine_dining-2', 'velehrad', 'fine_dining', 'Makalu Hradiště', 'Šromova 137, Uherské Hradiště, Czechia', '인도 요리 레스토랑. 구글 지도 평점 4.7(리뷰 283개).', 'Indian restaurant. Rated 4.7 on Google Maps (283 reviews).'),
  place('velehrad-fine_dining-3', 'velehrad', 'fine_dining', 'TOM Restaurant', 'Prostřední 38, Uherské Hradiště, Czechia', '아시아 요리 레스토랑. 구글 지도 평점 4.6(리뷰 1173개).', 'Asian restaurant. Rated 4.6 on Google Maps (1173 reviews).'),
  place('velehrad-fine_dining-4', 'velehrad', 'fine_dining', 'Beef & Pizza', 'Stojanova 1335, Uherské Hradiště, Czechia', '레스토랑. 구글 지도 평점 4.4(리뷰 1892개).', 'Restaurant. Rated 4.4 on Google Maps (1892 reviews).'),
  place('velehrad-fine_dining-5', 'velehrad', 'fine_dining', 'U Bláznivé slepice', 'Mariánské nám. 64, Uherské Hradiště, Czechia', '레스토랑. 구글 지도 평점 4.3(리뷰 1714개).', 'Restaurant. Rated 4.3 on Google Maps (1714 reviews).'),
  place('velehrad-bakery-1', 'velehrad', 'bakery', 'Pospolu Bakery & Espresso Bar', 'Na Rybníku 1057, Uherské Hradiště, Czechia', '빵집. 구글 지도 평점 4.7(리뷰 99개).', 'Bakery. Rated 4.7 on Google Maps (99 reviews).'),
  place('velehrad-bakery-2', 'velehrad', 'bakery', 'Svoboda & Březík', 'Prostřední 135, Uherské Hradiště, Czechia', '빵집. 구글 지도 평점 4.5(리뷰 282개).', 'Bakery. Rated 4.5 on Google Maps (282 reviews).'),
  place('velehrad-cafe-1', 'velehrad', 'cafe', 'BO café', 'Masarykovo nám. 155, Uherské Hradiště, Czechia', '카페. 구글 지도 평점 4.7(리뷰 159개).', 'Café. Rated 4.7 on Google Maps (159 reviews).'),
  place('velehrad-cafe-2', 'velehrad', 'cafe', 'Caféčko', 'Františkánská 1333, Uherské Hradiště, Czechia', '카페. 구글 지도 평점 4.7(리뷰 93개).', 'Café. Rated 4.7 on Google Maps (93 reviews).'),
  place('velehrad-cafe-3', 'velehrad', 'cafe', 'Café-bistro Titique', 'Nádražní 27, Uherské Hradiště, Czechia', '카페. 구글 지도 평점 4.6(리뷰 379개).', 'Café. Rated 4.6 on Google Maps (379 reviews).'),

  // —— roznov: restaurants, bakeries and cafés (2026-11-27) ——
  place('roznov-fine_dining-1', 'roznov', 'fine_dining', 'TAT Bistro', 'Meziříčská 730, Rožnov pod Radhoštěm, Czechia', '비스트로. 구글 지도 평점 4.8(리뷰 203개).', 'Bistro. Rated 4.8 on Google Maps (203 reviews).'),
  place('roznov-fine_dining-2', 'roznov', 'fine_dining', 'Koliba na Pasekách', 'Rožnov pod Radhoštěm 2675, Czechia', '레스토랑. 구글 지도 평점 4.6(리뷰 285개).', 'Restaurant. Rated 4.6 on Google Maps (285 reviews).'),
  place('roznov-fine_dining-3', 'roznov', 'fine_dining', 'Pivnice Harcovna', 'Tylovice 1884, Rožnov pod Radhoštěm, Czechia', '직접 맥주를 빚는 양조장 식당. 구글 지도 평점 4.6(리뷰 878개).', 'Brewpub restaurant. Rated 4.6 on Google Maps (878 reviews).'),
  place('roznov-fine_dining-4', 'roznov', 'fine_dining', 'Albert Malek Restaurant', 'Pivovarská 6, Rožnov pod Radhoštěm, Czechia', '레스토랑. 구글 지도 평점 4.5(리뷰 241개).', 'Restaurant. Rated 4.5 on Google Maps (241 reviews).'),
  place('roznov-fine_dining-5', 'roznov', 'fine_dining', 'Rožnovský pivovar', 'Pivovarská 6, Rožnov pod Radhoštěm, Czechia', '직접 맥주를 빚는 양조장 식당. 구글 지도 평점 4.4(리뷰 3448개).', 'Brewpub restaurant. Rated 4.4 on Google Maps (3448 reviews).'),
  place('roznov-bakery-1', 'roznov', 'bakery', 'Arete Bakery', 'Masarykovo nám. 130, Rožnov pod Radhoštěm, Czechia', '빵집. 구글 지도 평점 4.7(리뷰 171개).', 'Bakery. Rated 4.7 on Google Maps (171 reviews).'),
  place('roznov-bakery-2', 'roznov', 'bakery', 'Darina Bakery Bistro & Café', 'Nádražní 624, Rožnov pod Radhoštěm, Czechia', '빵집. 구글 지도 평점 4.6(리뷰 86개).', 'Bakery. Rated 4.6 on Google Maps (86 reviews).'),
  place('roznov-cafe-1', 'roznov', 'cafe', 'Janniecs Coffee Shop', 'Bezručova 211, Rožnov pod Radhoštěm, Czechia', '카페. 구글 지도 평점 4.7(리뷰 350개).', 'Café. Rated 4.7 on Google Maps (350 reviews).'),
  place('roznov-cafe-2', 'roznov', 'cafe', 'Kaféčko', 'Pivovarská 2187, Rožnov pod Radhoštěm, Czechia', '카페. 구글 지도 평점 4.6(리뷰 639개).', 'Café. Rated 4.6 on Google Maps (639 reviews).'),

  // —— ostrava: restaurants, bakeries and cafés (2026-11-27) ——
  place('ostrava-fine_dining-1', 'ostrava', 'fine_dining', 'Pelmeški', 'Českobratrská 113/22, Ostrava, Czechia', '레스토랑. 구글 지도 평점 4.9(리뷰 1070개).', 'Restaurant. Rated 4.9 on Google Maps (1070 reviews).'),
  place('ostrava-fine_dining-2', 'ostrava', 'fine_dining', 'Hogo Fogo Bistro', 'Sokolská tř. 871/6, Ostrava, Czechia', '비스트로. 구글 지도 평점 4.8(리뷰 2010개).', 'Bistro. Rated 4.8 on Google Maps (2010 reviews).'),
  place('ostrava-fine_dining-3', 'ostrava', 'fine_dining', 'Stračena Garden', 'Polanecká 56, Ostrava, Czechia', '스테이크 하우스. 구글 지도 평점 4.8(리뷰 566개).', 'Steakhouse. Rated 4.8 on Google Maps (566 reviews).'),
  place('ostrava-fine_dining-4', 'ostrava', 'fine_dining', 'L\'Osteria Ostrava', 'Ruská 2994/18, Ostrava, Czechia', '이탈리아 요리 레스토랑. 구글 지도 평점 4.7(리뷰 1983개).', 'Italian restaurant. Rated 4.7 on Google Maps (1983 reviews).'),
  place('ostrava-fine_dining-5', 'ostrava', 'fine_dining', 'Restaurace U Dvořáčků', 'Hladnovská 1311/19, Ostrava, Czechia', '체코 요리 레스토랑. 구글 지도 평점 4.6(리뷰 3053개).', 'Czech restaurant. Rated 4.6 on Google Maps (3053 reviews).'),
  place('ostrava-bakery-1', 'ostrava', 'bakery', 'Croissant House', 'Českobratrská 22, Ostrava, Czechia', '빵집. 구글 지도 평점 4.6(리뷰 295개).', 'Bakery. Rated 4.6 on Google Maps (295 reviews).'),
  place('ostrava-bakery-2', 'ostrava', 'bakery', 'Sweet Times', '28. října 220/51, Ostrava, Czechia', '과자점. 구글 지도 평점 4.6(리뷰 567개).', 'Pastry shop. Rated 4.6 on Google Maps (567 reviews).'),
  place('ostrava-cafe-1', 'ostrava', 'cafe', 'KIKAFE Ostrava', 'Přívozská 154/9, Ostrava, Czechia', '카페. 구글 지도 평점 4.9(리뷰 142개).', 'Café. Rated 4.9 on Google Maps (142 reviews).'),
  place('ostrava-cafe-2', 'ostrava', 'cafe', 'Cafe Daniel', 'Žerotínova 1230/1, Ostrava, Czechia', '카페. 구글 지도 평점 4.8(리뷰 802개).', 'Café. Rated 4.8 on Google Maps (802 reviews).'),
  place('ostrava-cafe-3', 'ostrava', 'cafe', 'Shothouse', 'Nádražní 756/49, Ostrava, Czechia', '카페. 구글 지도 평점 4.8(리뷰 372개).', 'Café. Rated 4.8 on Google Maps (372 reviews).'),
  place('ostrava-cafe-4', 'ostrava', 'cafe', 'AlterNativa Café', '17. listopadu 768, Ostrava, Czechia', '카페. 구글 지도 평점 4.7(리뷰 916개).', 'Café. Rated 4.7 on Google Maps (916 reviews).'),
  place('ostrava-cafe-5', 'ostrava', 'cafe', 'MILU-ju-CAFÉ', 'Jiráskovo nám. 283/3, Ostrava, Czechia', '카페. 구글 지도 평점 4.7(리뷰 323개).', 'Café. Rated 4.7 on Google Maps (323 reviews).'),

  // —— stramberk: restaurants, bakeries and cafés (2026-11-27) ——
  place('stramberk-fine_dining-1', 'stramberk', 'fine_dining', 'Bistro Bašta 20', 'Dolní Bašta 20, Štramberk, Czechia', '비스트로. 구글 지도 평점 4.9(리뷰 329개).', 'Bistro. Rated 4.9 on Google Maps (329 reviews).'),
  place('stramberk-fine_dining-2', 'stramberk', 'fine_dining', 'Pizzerie Piccolo', 'Náměstí 10, Štramberk, Czechia', '피자 식당. 구글 지도 평점 4.7(리뷰 1893개).', 'Pizza restaurant. Rated 4.7 on Google Maps (1893 reviews).'),

  // —— opava: restaurants, bakeries and cafés (2026-11-27) ——
  place('opava-fine_dining-1', 'opava', 'fine_dining', 'BBQ-Art Bistro', 'Olomoucká 2979/117, Opava, Czechia', '바비큐 식당. 구글 지도 평점 4.9(리뷰 234개).', 'Barbecue restaurant. Rated 4.9 on Google Maps (234 reviews).'),
  place('opava-fine_dining-2', 'opava', 'fine_dining', 'Na Kamenci', 'Bílovecká 177/170, Opava, Czechia', '레스토랑. 구글 지도 평점 4.8(리뷰 180개).', 'Restaurant. Rated 4.8 on Google Maps (180 reviews).'),
  place('opava-fine_dining-3', 'opava', 'fine_dining', 'Botaniqa Bistro & Café', 'Růžová 14, Opava, Czechia', '비스트로. 구글 지도 평점 4.8(리뷰 271개).', 'Bistro. Rated 4.8 on Google Maps (271 reviews).'),
  place('opava-fine_dining-4', 'opava', 'fine_dining', 'Kyo Sushi', 'Horní nám. 58, Opava, Czechia', '스시 레스토랑. 구글 지도 평점 4.7(리뷰 517개).', 'Sushi restaurant. Rated 4.7 on Google Maps (517 reviews).'),
  place('opava-fine_dining-5', 'opava', 'fine_dining', 'Taste of India Opava', 'Horní nám. 284/57, Opava, Czechia', '인도 요리 레스토랑. 구글 지도 평점 4.7(리뷰 644개).', 'Indian restaurant. Rated 4.7 on Google Maps (644 reviews).'),
  place('opava-cafe-1', 'opava', 'cafe', 'Máma mele kafe', 'Hrnčířská 3, Opava, Czechia', '카페. 구글 지도 평점 4.8(리뷰 161개).', 'Café. Rated 4.8 on Google Maps (161 reviews).'),
  place('opava-cafe-2', 'opava', 'cafe', 'FoxCoffee', 'Pekařská 133/2, Opava, Czechia', '카페. 구글 지도 평점 4.8(리뷰 335개).', 'Café. Rated 4.8 on Google Maps (335 reviews).'),
  place('opava-cafe-3', 'opava', 'cafe', 'Caffé Dolce Vita', 'Hrnčířská 8, Opava, Czechia', '카페. 구글 지도 평점 4.3(리뷰 767개).', 'Café. Rated 4.3 on Google Maps (767 reviews).'),
]
