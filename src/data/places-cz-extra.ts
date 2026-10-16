import { place } from './placeFactory'
import type { Place } from '../types'

export const placesCZExtra: Place[] = [
  // —— prague ——
  place('prague-fine_dining-1', 'prague', 'fine_dining', 'La Degustation Bohême Bourgeoise', 'Haštalská 18, 110 00 Prague, Czechia', '미슐랭 보헤미안 코스.', 'Michelin Bohemian tasting.', { image: '/places/prague-fine_dining-1.jpg' }),
  place('prague-fine_dining-2', 'prague', 'fine_dining', 'Field', 'U Milosrdných 12, 110 00 Prague 1, Czechia', '시즌 체코 파인 다이닝.', 'Seasonal Czech fine dining.', { image: '/places/prague-fine_dining-2.jpg' }),
  place('prague-fine_dining-3', 'prague', 'fine_dining', 'Lokál', 'Míšeňská 12, 118 00 Prague, Czechia', '모던 체코 다이닝.', 'Modern Czech dining.'),
  place('prague-fine_dining-4', 'prague', 'fine_dining', 'Kantýna', 'Politických vězňů 1511/5, 116 47 Prague, Czechia', '정육점 감성 다이닝.', 'Butchery-style dining.'),
  place('prague-fine_dining-5', 'prague', 'fine_dining', 'U Modré Kachničky', 'Michalská, 116 65 Prague, Czechia', '클래식 체코 요리.', 'Classic Czech cuisine.', { image: '/places/prague-fine_dining-5.jpg' }),
  place('prague-bakery-1', 'prague', 'bakery', 'Antonínovo pekařství', 'Francouzská 585/1, 120 00 Prague, Czechia', '사워도우 베이커리.', 'Sourdough bakery.'),
  place('prague-bakery-2', 'prague', 'bakery', 'Pekařství Kabát', 'Nové Butovice, 158 00 Prague, Czechia', '로컬 빵집.', 'Local bakery.'),
  place('prague-bakery-4', 'prague', 'bakery', 'Good Food Coffee & Bakery', 'Karlova 3, 110 00 Prague, Czechia', '베이커리 카페.', 'Bakery café.'),
  place('prague-cafe-1', 'prague', 'cafe', 'Café Louvre', 'Národní 22, 110 00 Prague, Czechia', '클래식 카페하우스.', 'Classic coffee house.', { image: '/places/prague-cafe-1.jpg' }),
  place('prague-cafe-2', 'prague', 'cafe', 'EMA espresso bar', 'Na Florenci 1420/3, Prague', '스페셜티 커피.', 'Specialty coffee.', { image: '/places/prague-cafe-2.jpg' }),
  place('prague-cafe-3', 'prague', 'cafe', 'Café Savoy', 'Vítězná 124/5, 150 00 Prague, Czechia', '그랜드 카페.', 'Grand café.', { image: '/places/prague-cafe-3.jpg' }),
  place('prague-cafe-4', 'prague', 'cafe', 'Můj šálek kávy', 'Křižíkova 386/105, 186 00 Prague, Czechia', '로스터리 카페.', 'Roastery café.', { image: '/places/prague-cafe-4.jpg' }),
  place('prague-korean-1', 'prague', 'korean', 'Matzip', 'Dušní 1082/6, 110 00 Praha 1', '구시가의 한식 비스트로.', 'Korean bistro in the Old Town.'),

  // —— brno ——
  place('brno-fine_dining-1', 'brno', 'fine_dining', 'Špaliček', 'Zelný trh 332/12, 602 00 Brno', '전통 체코 요리 레스토랑.', 'Traditional Czech restaurant.'),
  place('brno-fine_dining-2', 'brno', 'fine_dining', 'Borgo Agnese', 'Kopečná 980/13, 602 00 Brno', '브르노의 인기 지중해 레스토랑.', 'Popular Mediterranean restaurant in Brno.'),
  place('brno-fine_dining-3', 'brno', 'fine_dining', 'Vittorio Restaurant', 'Pekařská 398/4, 602 00 Brno', '브르노의 지중해 레스토랑.', 'Mediterranean restaurant in Brno.'),
  place('brno-bakery-1', 'brno', 'bakery', 'Matějovo pekařství', 'Hybešova 437/46, 602 00 Brno, Czech Republic', '1953년부터 이어온 브르노 첼니 트르흐의 전통 빵집', 'Traditional Brno bakery near the Cabbage Market, operating since 1953'),
  place('brno-bakery-2', 'brno', 'bakery', 'Les Fournils de France Brno', 'Koblížná 64/10, 602 00 Brno', '프랑스식 베이커리.', 'French-style bakery.'),
  place('brno-bakery-3', 'brno', 'bakery', 'William Thomas Artisan Bakery', 'Josefská 492/2, 602 00 Brno', '수제 베이커리.', 'Artisan bakery.'),
  place('brno-cafe-1', 'brno', 'cafe', 'SKØG', 'Dominikánské náměstí 5, 602 00 Brno, Czech Republic', '훌륭한 커피와 홈메이드 빵으로 유명한 브르노의 인기 카페', 'Popular Brno café known for great coffee and homemade bread', { image: '/places/brno-cafe-1.jpg' }),
  place('brno-cafe-2', 'brno', 'cafe', 'Monogram Espresso Bar', '12, Kapucínské nám. 310, 602 00 Brno', '스페셜티 커피 전문점.', 'Specialty coffee shop.'),
  place('brno-cafe-3', 'brno', 'cafe', 'Caffé del Saggio', 'Helceletova 232/4, 602 00 Brno', '브르노의 카페.', 'Café in Brno.'),

  // —— cesky-krumlov ——
  place('cesky-krumlov-fine_dining-1', 'cesky-krumlov', 'fine_dining', 'Švejk Restaurant', 'Šatlavská 157, 381 01 Český Krumlov', '구시가의 전통 체코 요리.', 'Traditional Czech cuisine in the Old Town.', { image: '/places/cesky-krumlov-fine_dining-1.jpg' }),
  place('cesky-krumlov-fine_dining-2', 'cesky-krumlov', 'fine_dining', 'Řízková restaurace Pivoňka', 'U Zelené Ratolesti 232, 381 01 Český Krumlov', '체코 요리 전문 레스토랑.', 'Restaurant specializing in Czech cuisine.'),
  place('cesky-krumlov-fine_dining-3', 'cesky-krumlov', 'fine_dining', 'Restaurant Jelenka', 'Latrán 138, 381 01 Český Krumlov', '체스키크룸로프의 레스토랑.', 'Restaurant in Český Krumlov.'),
  place('cesky-krumlov-bakery-1', 'cesky-krumlov', 'bakery', 'Grill Baguette Rustika', 'Panská 32, 381 01 Český Krumlov, Czech Republic', '바게트 샌드위치와 아침 메뉴로 유명한 체스키크룸로프의 베이커리', 'Český Krumlov bakery known for baguette sandwiches and breakfast items'),
  place('cesky-krumlov-bakery-2', 'cesky-krumlov', 'bakery', 'Café Bakery', 'Široká 80, 381 01 Český Krumlov', '카페 겸 베이커리.', 'Café and bakery.'),
  place('cesky-krumlov-bakery-3', 'cesky-krumlov', 'bakery', 'PECiVÁL Český Krumlov', 'Horní 149, 381 01 Český Krumlov', '체스키크룸로프의 제과점.', 'Bakery in Český Krumlov.'),
  place('cesky-krumlov-cafe-1', 'cesky-krumlov', 'cafe', 'Drunken Coffee', 'Dlouhá 95, 381 01 Český Krumlov, Czech Republic', '성 전망을 즐기며 스페셜티 커피를 마실 수 있는 체스키크룸로프의 카페', 'Český Krumlov café with panoramic castle-tower views and specialty roasted espresso'),
  place('cesky-krumlov-cafe-2', 'cesky-krumlov', 'cafe', 'Authentic cafe', 'nám. Svornosti 8, 381 01 Český Krumlov', '체스키크룸로프의 카페.', 'Café in Český Krumlov.'),
  place('cesky-krumlov-cafe-3', 'cesky-krumlov', 'cafe', 'Cafein', 'Latrán 106, 381 01 Český Krumlov', '체스키크룸로프의 스페셜티 커피.', 'Specialty coffee in Český Krumlov.'),

  // —— karlovy-vary ——
  place('karlovy-vary-fine_dining-1', 'karlovy-vary', 'fine_dining', 'Promenáda', 'Tržiště 31, 360 01 Karlovy Vary, Czechia', '카를로비바리 최고 평가 레스토랑.', 'Top-rated restaurant in Karlovy Vary.'),
  place('karlovy-vary-fine_dining-2', 'karlovy-vary', 'fine_dining', 'Staroslovanská kuchyně Karlovy Vary', 'Moskevská 1010/18, 360 01 Karlovy Vary', '카를로비바리의 인기 레스토랑.', 'Popular restaurant in Karlovy Vary.'),
  place('karlovy-vary-fine_dining-3', 'karlovy-vary', 'fine_dining', 'Restaurace La Hospoda Karlovy Vary', 'nábř. J. Palacha 1024/26, 360 01 Karlovy Vary', '카를로비바리의 레스토랑.', 'Restaurant in Karlovy Vary.'),
  place('karlovy-vary-bakery-1', 'karlovy-vary', 'bakery', 'Just Cake', 'T. G. Masaryka 894, 360 01 Karlovy Vary, Czech Republic', '자매가 운영하는 카를로비바리의 인기 케이크 전문점', 'Popular Karlovy Vary bakery run by two sisters, known for beautiful cakes'),
  place('karlovy-vary-bakery-2', 'karlovy-vary', 'bakery', 'Parisienne - sweet desserts & café', 'Moskevská 20, 360 01 Karlovy Vary', '디저트·베이커리 카페.', 'Dessert and bakery café.'),
  place('karlovy-vary-cafe-1', 'karlovy-vary', 'cafe', 'Café Pupp', 'Mírové náměstí 2, 360 01 Karlovy Vary, Czech Republic', '그랜드호텔 품에 위치한 카를로비바리의 유서 깊은 카페', 'Historic café inside the Grandhotel Pupp, carrying Karlovy Vary\'s oldest hospitality tradition', { image: '/places/karlovy-vary-cafe-1.jpg' }),
  place('karlovy-vary-cafe-2', 'karlovy-vary', 'cafe', 'BAGEL Lounge', 'T. G. Masaryka 825/45, 360 01 Karlovy Vary', '카를로비바리의 카페.', 'Café in Karlovy Vary.'),
  place('karlovy-vary-cafe-3', 'karlovy-vary', 'cafe', 'Republica coffee', 'T. G. Masaryka 894, 360 01 Karlovy Vary', '스페셜티 커피 전문점.', 'Specialty coffee shop.'),

  // —— ceske-budejovice ——
  place('ceske-budejovice-fine_dining-1', 'ceske-budejovice', 'fine_dining', 'BRIO Restaurant', 'Riegrova 1867/8, 370 01 České Budějovice', '매일 바뀌는 런치 메뉴의 레스토랑.', 'Restaurant with a daily-changing lunch menu.'),
  place('ceske-budejovice-fine_dining-2', 'ceske-budejovice', 'fine_dining', 'Restaurace Masné krámy', 'Krajinská 13, 370 01 České Budějovice', '유서 깊은 건물의 체스케부데요비체 대표 레스토랑.', 'Landmark restaurant in a historic building in České Budějovice.', { image: '/places/ceske-budejovice-fine_dining-2.jpg' }),
  place('ceske-budejovice-fine_dining-3', 'ceske-budejovice', 'fine_dining', 'Paluba', 'Na Mlýnské Stoce 81, 370 01 České Budějovice', '체스케부데요비체의 레스토랑.', 'Restaurant in České Budějovice.'),

  place('ceske-budejovice-bakery-1', 'ceske-budejovice', 'bakery', 'DéKáčko', 'Nádražní 1759, 370 01 České Budějovice, Czech Republic', '커피와 다양한 페이스트리·샌드위치를 즐길 수 있는 베이커리 카페', 'Bakery café offering a wide variety of coffee, pastries and sandwiches'),
  place('ceske-budejovice-bakery-2', 'ceske-budejovice', 'bakery', 'Leipomo Pekárna', 'Panská 164/20, 370 01 České Budějovice', '체스케부데요비체의 제과점.', 'Bakery in České Budějovice.'),
  place('ceske-budejovice-bakery-3', 'ceske-budejovice', 'bakery', 'Pastry_Romana_Liebing', 'Resslova 2601/8, 370 01 České Budějovice', '패스트리 전문점.', 'Pastry specialist.'),
  place('ceske-budejovice-cafe-1', 'ceske-budejovice', 'cafe', 'Cukrárna Jindrak', 'České Budějovice, Czech Republic', '체스케부데요비체에서 가장 유명한 전통 제과점', 'České Budějovice\'s most famous traditional confectionery'),
  place('ceske-budejovice-cafe-2', 'ceske-budejovice', 'cafe', 'Café Datel', 'Piaristická 22/8, 370 01 České Budějovice', '체스케부데요비체의 카페.', 'Café in České Budějovice.'),
  place('ceske-budejovice-cafe-3', 'ceske-budejovice', 'cafe', 'Praži Café', 'Na Mlýnské Stoce 282/11, 370 01 České Budějovice', '체스케부데요비체의 에스프레소 바.', 'Espresso bar in České Budějovice.'),
]
