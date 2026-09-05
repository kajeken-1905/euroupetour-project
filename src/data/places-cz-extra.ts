import { place } from './placeFactory'
import type { Place } from '../types'

export const placesCZExtra: Place[] = [
  // —— prague ——
  place('prague-fine_dining-1', 'prague', 'fine_dining', 'La Degustation Bohême Bourgeoise', 4.7, 'Prague', '미슐랭 보헤미안 코스.', 'Michelin Bohemian tasting.', { reviewCount: 1400 }),
  place('prague-fine_dining-2', 'prague', 'fine_dining', 'Field', 4.6, 'Prague', '시즌 체코 파인 다이닝.', 'Seasonal Czech fine dining.', { reviewCount: 1100 }),
  place('prague-fine_dining-3', 'prague', 'fine_dining', 'Lokál', 4.4, 'Prague', '모던 체코 다이닝.', 'Modern Czech dining.', { reviewCount: 2800 }),
  place('prague-fine_dining-4', 'prague', 'fine_dining', 'Kantýna', 4.5, 'Prague', '정육점 감성 다이닝.', 'Butchery-style dining.', { reviewCount: 3600 }),
  place('prague-fine_dining-5', 'prague', 'fine_dining', 'U Modré Kachničky', 4.4, 'Prague', '클래식 체코 요리.', 'Classic Czech cuisine.', { reviewCount: 4200 }),
  place('prague-bakery-1', 'prague', 'bakery', 'Antonínovo pekařství', 4.5, 'Prague', '사워도우 베이커리.', 'Sourdough bakery.', { reviewCount: 1800 }),
  place('prague-bakery-2', 'prague', 'bakery', 'Pekařství Kabát', 4.4, 'Prague', '로컬 빵집.', 'Local bakery.', { reviewCount: 1200 }),
  place('prague-bakery-3', 'prague', 'bakery', 'Café Savoy bakery counter', 4.4, 'Prague', '페이스트리 카운터.', 'Pastry counter.', { reviewCount: 2100 }),
  place('prague-bakery-4', 'prague', 'bakery', 'Good Food Coffee & Bakery', 4.3, 'Prague', '베이커리 카페.', 'Bakery café.', { reviewCount: 980 }),
  place('prague-cafe-1', 'prague', 'cafe', 'Café Louvre', 4.5, 'Prague', '클래식 카페하우스.', 'Classic coffee house.', { reviewCount: 8600 }),
  place('prague-cafe-2', 'prague', 'cafe', 'EMA espresso bar', 4.6, 'Na Florenci 1420/3, Prague', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 3813 }),
  place('prague-cafe-3', 'prague', 'cafe', 'Café Savoy', 4.5, 'Prague', '그랜드 카페.', 'Grand café.', { reviewCount: 7200 }),
  place('prague-cafe-4', 'prague', 'cafe', 'Můj šálek kávy', 4.5, 'Prague', '로스터리 카페.', 'Roastery café.', { reviewCount: 3100 }),
  place('prague-korean-1', 'prague', 'korean', 'Matzip', 4.5, 'Dušní 1082/6, 110 00 Praha 1', '구시가의 한식 비스트로.', 'Korean bistro in the Old Town.'),

  // —— brno ——
  place('brno-fine_dining-1', 'brno', 'fine_dining', 'Špaliček', 4.5, 'Zelný trh 332/12, 602 00 Brno', '전통 체코 요리 레스토랑.', 'Traditional Czech restaurant.'),
  place('brno-fine_dining-2', 'brno', 'fine_dining', 'Borgo Agnese', 4.7, 'Kopečná 980/13, 602 00 Brno', '브르노의 인기 지중해 레스토랑.', 'Popular Mediterranean restaurant in Brno.', { reviewCount: 1491 }),
  place('brno-fine_dining-3', 'brno', 'fine_dining', 'Vittorio Restaurant', 4.8, 'Pekařská 398/4, 602 00 Brno', '브르노의 지중해 레스토랑.', 'Mediterranean restaurant in Brno.', { reviewCount: 560 }),
  place('brno-bakery-1', 'brno', 'bakery', 'Matějovo pekařství', 4.5, 'Hybešova 437/46, 602 00 Brno, Czech Republic', '1953년부터 이어온 브르노 첼니 트르흐의 전통 빵집', 'Traditional Brno bakery near the Cabbage Market, operating since 1953'),
  place('brno-bakery-2', 'brno', 'bakery', 'Les Fournils de France Brno', 4.9, 'Koblížná 64/10, 602 00 Brno', '프랑스식 베이커리.', 'French-style bakery.', { reviewCount: 84 }),
  place('brno-bakery-3', 'brno', 'bakery', 'William Thomas Artisan Bakery', 4.7, 'Josefská 492/2, 602 00 Brno', '수제 베이커리.', 'Artisan bakery.', { reviewCount: 276 }),
  place('brno-cafe-1', 'brno', 'cafe', 'SKØG', 4.6, 'Dominikánské náměstí 5, 602 00 Brno, Czech Republic', '훌륭한 커피와 홈메이드 빵으로 유명한 브르노의 인기 카페', 'Popular Brno café known for great coffee and homemade bread'),
  place('brno-cafe-2', 'brno', 'cafe', 'Monogram Espresso Bar', 4.9, '12, Kapucínské nám. 310, 602 00 Brno', '스페셜티 커피 전문점.', 'Specialty coffee shop.', { reviewCount: 1063 }),
  place('brno-cafe-3', 'brno', 'cafe', 'Caffé del Saggio', 4.8, 'Helceletova 232/4, 602 00 Brno', '브르노의 카페.', 'Café in Brno.', { reviewCount: 594 }),

  // —— cesky-krumlov ——
  place('cesky-krumlov-fine_dining-1', 'cesky-krumlov', 'fine_dining', 'Švejk Restaurant', 4.5, 'Šatlavská 157, 381 01 Český Krumlov', '구시가의 전통 체코 요리.', 'Traditional Czech cuisine in the Old Town.'),
  place('cesky-krumlov-fine_dining-2', 'cesky-krumlov', 'fine_dining', 'Řízková restaurace Pivoňka', 4.7, 'U Zelené Ratolesti 232, 381 01 Český Krumlov', '체코 요리 전문 레스토랑.', 'Restaurant specializing in Czech cuisine.', { reviewCount: 1207 }),
  place('cesky-krumlov-fine_dining-3', 'cesky-krumlov', 'fine_dining', 'Restaurant Jelenka', 4.5, 'Latrán 138, 381 01 Český Krumlov', '체스키크룸로프의 레스토랑.', 'Restaurant in Český Krumlov.', { reviewCount: 2567 }),
  place('cesky-krumlov-bakery-1', 'cesky-krumlov', 'bakery', 'Grill Baguette Rustika', 4.4, 'Panská 32, 381 01 Český Krumlov, Czech Republic', '바게트 샌드위치와 아침 메뉴로 유명한 체스키크룸로프의 베이커리', 'Český Krumlov bakery known for baguette sandwiches and breakfast items'),
  place('cesky-krumlov-bakery-2', 'cesky-krumlov', 'bakery', 'Café Bakery', 4.7, 'Široká 80, 381 01 Český Krumlov', '카페 겸 베이커리.', 'Café and bakery.', { reviewCount: 190 }),
  place('cesky-krumlov-bakery-3', 'cesky-krumlov', 'bakery', 'PECiVÁL Český Krumlov', 4.8, 'Horní 149, 381 01 Český Krumlov', '체스키크룸로프의 제과점.', 'Bakery in Český Krumlov.', { reviewCount: 38 }),
  place('cesky-krumlov-cafe-1', 'cesky-krumlov', 'cafe', 'Drunken Coffee', 4.6, 'Dlouhá 95, 381 01 Český Krumlov, Czech Republic', '성 전망을 즐기며 스페셜티 커피를 마실 수 있는 체스키크룸로프의 카페', 'Český Krumlov café with panoramic castle-tower views and specialty roasted espresso'),
  place('cesky-krumlov-cafe-2', 'cesky-krumlov', 'cafe', 'Authentic cafe', 4.6, 'nám. Svornosti 8, 381 01 Český Krumlov', '체스키크룸로프의 카페.', 'Café in Český Krumlov.', { reviewCount: 1179 }),
  place('cesky-krumlov-cafe-3', 'cesky-krumlov', 'cafe', 'Cafein', 4.8, 'Latrán 106, 381 01 Český Krumlov', '체스키크룸로프의 스페셜티 커피.', 'Specialty coffee in Český Krumlov.', { reviewCount: 283 }),

  // —— karlovy-vary ——
  place('karlovy-vary-fine_dining-1', 'karlovy-vary', 'fine_dining', 'Promenáda', 4.5, 'Karlovy Vary', '카를로비바리 최고 평가 레스토랑.', 'Top-rated restaurant in Karlovy Vary.'),
  place('karlovy-vary-fine_dining-2', 'karlovy-vary', 'fine_dining', 'Staroslovanská kuchyně Karlovy Vary', 4.7, 'Moskevská 1010/18, 360 01 Karlovy Vary', '카를로비바리의 인기 레스토랑.', 'Popular restaurant in Karlovy Vary.', { reviewCount: 4358 }),
  place('karlovy-vary-fine_dining-3', 'karlovy-vary', 'fine_dining', 'Restaurace La Hospoda Karlovy Vary', 4.7, 'nábř. J. Palacha 1024/26, 360 01 Karlovy Vary', '카를로비바리의 레스토랑.', 'Restaurant in Karlovy Vary.', { reviewCount: 2146 }),
  place('karlovy-vary-bakery-1', 'karlovy-vary', 'bakery', 'Just Cake', 4.6, 'T. G. Masaryka 894, 360 01 Karlovy Vary, Czech Republic', '자매가 운영하는 카를로비바리의 인기 케이크 전문점', 'Popular Karlovy Vary bakery run by two sisters, known for beautiful cakes'),
  place('karlovy-vary-bakery-2', 'karlovy-vary', 'bakery', 'Parisienne - sweet desserts & café', 4.9, 'Moskevská 20, 360 01 Karlovy Vary', '디저트·베이커리 카페.', 'Dessert and bakery café.', { reviewCount: 465 }),
  place('karlovy-vary-cafe-1', 'karlovy-vary', 'cafe', 'Café Pupp', 4.5, 'Mírové náměstí 2, 360 01 Karlovy Vary, Czech Republic', '그랜드호텔 품에 위치한 카를로비바리의 유서 깊은 카페', 'Historic café inside the Grandhotel Pupp, carrying Karlovy Vary\'s oldest hospitality tradition'),
  place('karlovy-vary-cafe-2', 'karlovy-vary', 'cafe', 'BAGEL Lounge', 4.7, 'T. G. Masaryka 825/45, 360 01 Karlovy Vary', '카를로비바리의 카페.', 'Café in Karlovy Vary.', { reviewCount: 4156 }),
  place('karlovy-vary-cafe-3', 'karlovy-vary', 'cafe', 'Republica coffee', 4.6, 'T. G. Masaryka 894, 360 01 Karlovy Vary', '스페셜티 커피 전문점.', 'Specialty coffee shop.', { reviewCount: 1977 }),

  // —— ceske-budejovice ——
  place('ceske-budejovice-fine_dining-1', 'ceske-budejovice', 'fine_dining', 'BRIO Restaurant', 4.6, 'Riegrova 1867/8, 370 01 České Budějovice', '매일 바뀌는 런치 메뉴의 레스토랑.', 'Restaurant with a daily-changing lunch menu.'),
  place('ceske-budejovice-fine_dining-2', 'ceske-budejovice', 'fine_dining', 'Restaurace Masné krámy', 4.5, 'Krajinská 13, 370 01 České Budějovice', '유서 깊은 건물의 체스케부데요비체 대표 레스토랑.', 'Landmark restaurant in a historic building in České Budějovice.', { reviewCount: 8010 }),
  place('ceske-budejovice-fine_dining-3', 'ceske-budejovice', 'fine_dining', 'Paluba', 4.6, 'Na Mlýnské Stoce 81, 370 01 České Budějovice', '체스케부데요비체의 레스토랑.', 'Restaurant in České Budějovice.', { reviewCount: 2013 }),

  place('ceske-budejovice-bakery-1', 'ceske-budejovice', 'bakery', 'DéKáčko', 4.3, 'Nádražní 1759, 370 01 České Budějovice, Czech Republic', '커피와 다양한 페이스트리·샌드위치를 즐길 수 있는 베이커리 카페', 'Bakery café offering a wide variety of coffee, pastries and sandwiches'),
  place('ceske-budejovice-bakery-2', 'ceske-budejovice', 'bakery', 'Leipomo Pekárna', 5.0, 'Panská 164/20, 370 01 České Budějovice', '체스케부데요비체의 제과점.', 'Bakery in České Budějovice.', { reviewCount: 143 }),
  place('ceske-budejovice-bakery-3', 'ceske-budejovice', 'bakery', 'Pastry_Romana_Liebing', 4.9, 'Resslova 2601/8, 370 01 České Budějovice', '패스트리 전문점.', 'Pastry specialist.', { reviewCount: 94 }),
  place('ceske-budejovice-cafe-1', 'ceske-budejovice', 'cafe', 'Cukrárna Jindrak', 4.4, 'České Budějovice, Czech Republic', '체스케부데요비체에서 가장 유명한 전통 제과점', 'České Budějovice\'s most famous traditional confectionery'),
  place('ceske-budejovice-cafe-2', 'ceske-budejovice', 'cafe', 'Café Datel', 4.7, 'Piaristická 22/8, 370 01 České Budějovice', '체스케부데요비체의 카페.', 'Café in České Budějovice.', { reviewCount: 2072 }),
  place('ceske-budejovice-cafe-3', 'ceske-budejovice', 'cafe', 'Praži Café', 4.7, 'Na Mlýnské Stoce 282/11, 370 01 České Budějovice', '체스케부데요비체의 에스프레소 바.', 'Espresso bar in České Budějovice.', { reviewCount: 752 }),
]
