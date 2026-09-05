import { place } from './placeFactory'
import type { Place } from '../types'

export const placesNLExtra: Place[] = [
  // —— rotterdam ——
  place('rotterdam-fine_dining-1', 'rotterdam', 'fine_dining', 'Parkheuvel', 4.6, 'Heuvellaan 21, 3016 GL Rotterdam', '항구 전망의 미쉐린 2스타 레스토랑, 클래식 프렌치 요리.', 'Two-Michelin-star harbor-view restaurant known for classic French finesse.'),
  place('rotterdam-fine_dining-2', 'rotterdam', 'fine_dining', 'FG Restaurant', 4.3, 'Katshoek 37b, 3032 AE Rotterdam', '로테르담을 미식 지도에 올린 미쉐린 2스타 테이스팅 메뉴 레스토랑.', 'Two-Michelin-star tasting-menu restaurant that put Rotterdam on the fine-dining map.'),
  place('rotterdam-fine_dining-3', 'rotterdam', 'fine_dining', 'Zeezout', 4.6, 'Westerkade 11b, 3016 CL Rotterdam', '마스강변의 미쉐린 스타 시푸드 레스토랑.', 'Michelin-starred seafood restaurant on the Maas riverside.', { reviewCount: 1493 }),
  place('rotterdam-fine_dining-4', 'rotterdam', 'fine_dining', 'Amarone', 4.4, 'Meent 72A, Rotterdam', '클래식 프렌치와 일식의 감각을 더한 미쉐린 스타 레스토랑.', 'Michelin-starred restaurant blending classic French technique with subtle Japanese influences.'),
  place('rotterdam-fine_dining-5', 'rotterdam', 'fine_dining', 'Fred', 4.5, 'Honingerdijk 263-265, 3063 AM Rotterdam', '테이블사이드 치즈 카트와 샴페인 서비스로 유명한 마스강 전망의 미쉐린 2스타 레스토랑.', 'Two-Michelin-star Maas-view restaurant famous for its tableside cheese cart and champagne service.'),

  place('rotterdam-bakery-1', 'rotterdam', 'bakery', 'Jan Bussing', 4.8, 'Van Vollenhovenstraat 48a, 3016 BJ Rotterdam', '로테르담 최고로 꼽히는 프렌치풍 전통 베이커리.', 'Widely regarded as Rotterdam\'s best bakery, a traditional French-style boulangerie.'),

  place('rotterdam-cafe-1', 'rotterdam', 'cafe', 'Man Met Bril Koffie', 4.5, 'Vijverhofstraat 70, Rotterdam', '직접 로스팅한 원두로 유명한 로테르담-노르드의 스페셜티 카페.', 'Rotterdam-Noord specialty café known for its on-site-roasted coffee.', { reviewCount: 981 }),

  place('rotterdam-korean-1', 'rotterdam', 'korean', 'Seoul Sista', 4.3, 'Hartmansstraat 31, 3012 VA Rotterdam', '테이블 그릴이 갖춰진 로테르담의 대표 한국식 바비큐.', 'Rotterdam\'s best-known Korean BBQ spot, with tabletop grills built into every table.', { reviewCount: 2636 }),
  place('rotterdam-korean-2', 'rotterdam', 'korean', 'Bap Boss', 4.4, 'Goudsesingel 26, 3011 KB Rotterdam', '닭강정으로 호평받는 2018년 개업 한식당.', 'Korean restaurant open since 2018, praised for its dak-gangjeong (Korean fried chicken).', { reviewCount: 614 }),

  // —— the-hague ——
  place('the-hague-fine_dining-1', 'the-hague', 'fine_dining', "Calla's", 4.5, 'Laan van Roos en Doorn 51A, 2514 BC Den Haag', '20년 넘게 이어온 미쉐린 1스타 레스토랑, 세련된 공간에서 즐기는 시즌 요리.', 'One-Michelin-star restaurant serving refined seasonal cuisine in a stylish setting for over 20 years.', { reviewCount: 336 }),
  place('the-hague-fine_dining-2', 'the-hague', 'fine_dining', 'De Basiliek', 4.6, 'Korte Houtstraat 4-A, 2511 CD Den Haag', '푸짐하고 합리적인 가격의 요리로 유명한 미쉐린 빕 구르망 레스토랑.', 'Michelin Bib Gourmand restaurant known for hearty, well-priced dishes.', { reviewCount: 1389 }),
  place('the-hague-fine_dining-3', 'the-hague', 'fine_dining', 'Restaurant Suus', 4.4, 'Plesmanweg 701, 2597 JG Den Haag', '옛 KLM 본사 건물(호텔 더 플레스만) 안의 우아한 유러피언 다이닝.', 'Elegant dining inside the historic former KLM headquarters, serving refined European fare.', { reviewCount: 159 }),
  place('the-hague-fine_dining-4', 'the-hague', 'fine_dining', 'Catch by Simonis', 4.4, 'Dr. Lelykade 43, 2583 CL Den Haag', '스헤베닝언 항구의 미쉐린 등재 시푸드 레스토랑.', 'Michelin-listed seafood restaurant on Scheveningen\'s harbourfront.', { reviewCount: 4208 }),

  place('the-hague-bakery-1', 'the-hague', 'bakery', 'Bartine Bakery & Market', 4.6, 'Piet Heinstraat 72, 2518 CK Den Haag', '사워도우와 터키식 에그 브런치로 인기 있는 동네 베이커리 카페.', 'Popular neighbourhood bakery-café known for sourdough and Turkish-egg brunches.', { reviewCount: 621 }),
  place('the-hague-bakery-2', 'the-hague', 'bakery', 'Philippe Galerne Patisserie', 4.6, 'Aert van der Goesstraat 24, 2582 AK Den Haag', '슈타텐콰르티어 지구의 전통 프렌치 파티스리, 수제 마카롱으로 유명.', 'Traditional French patisserie in the Statenkwartier, prized for handcrafted macarons.', { reviewCount: 483 }),
  place('the-hague-bakery-3', 'the-hague', 'bakery', 'Boulangerie Michel', 4.4, 'Oude Molstraat 17, Den Haag', '2008년 창업한 아티산 프렌치 베이커리 체인.', 'Artisan French bakery chain, founded in 2008.'),

  place('the-hague-cafe-1', 'the-hague', 'cafe', 'Kaafi Specialty Coffee & Brunch Bar', 4.6, 'Prinsestraat 25, 2513 CA Den Haag', '구시가지의 수상 경력이 있는 멀티 로스터 스페셜티 커피·브런치 스팟.', 'Award-winning multi-roaster specialty coffee and brunch spot in the historic centre.', { reviewCount: 1541 }),
  place('the-hague-cafe-2', 'the-hague', 'cafe', 'August', 4.2, 'Turfmarkt 250, 2511 DJ Den Haag', '좋은 커피와 런치로 호평받는 캐주얼 런치 스팟.', 'Casual lunch spot praised for great coffee and lunch fare.', { reviewCount: 285 }),
  place('the-hague-cafe-3', 'the-hague', 'cafe', 'The Coffee Company', 4.1, 'Korte Poten 21, Den Haag', '헤이그 시내 중심가의 믿을 수 있는 네덜란드 커피 체인점.', 'Reliable Dutch coffee chain outpost in the city centre.'),

  place('the-hague-korean-1', 'the-hague', 'korean', 'Seoul Garden', 4.1, 'Bagijnestraat 8, 2511 CK Den Haag', '헤이그 시내의 오래된 정통 한식당.', 'Long-running, classic Korean restaurant in the city centre.', { reviewCount: 109 }),

  // —— utrecht ——
  place('utrecht-fine_dining-1', 'utrecht', 'fine_dining', 'Karel 5', 4.6, 'Geertebolwerk 1, 3511 XA Utrecht', '수도원을 개조한 그랜드 호텔 카럴 V 안의 미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant inside a historic monastery-turned-grand-hotel.', { reviewCount: 205 }),
  place('utrecht-fine_dining-2', 'utrecht', 'fine_dining', 'Restaurant Blauw Utrecht', 4.5, 'Springweg 64, 3511 VT Utrecht', '화려한 라이스테이블로 유명한 미쉐린 빕 구르망 인도네시아 레스토랑.', 'Bib Gourmand Indonesian restaurant celebrated for its colourful rice-table feasts.', { reviewCount: 1076 }),
  place('utrecht-fine_dining-3', 'utrecht', 'fine_dining', 'De Rechtbank', 4.0, 'Korte Nieuwstraat 14, 3512 NM Utrecht', '옛 법원 건물(코트 호텔) 안의 분위기 있는 올데이 다이닝 레스토랑.', 'Atmospheric restaurant set inside a former courthouse, serving all-day dining.', { reviewCount: 1554 }),
  place('utrecht-fine_dining-4', 'utrecht', 'fine_dining', 'Broei', 4.4, 'Oosterkade 24, 3582 AV Utrecht', '운하변의 완전 채식 레스토랑, 창의적인 비건 요리로 유명.', 'Fully plant-based restaurant on the canal, known for creative vegan cooking.', { reviewCount: 1542 }),

  place('utrecht-bakery-1', 'utrecht', 'bakery', 'Bond & Smolders', 4.6, 'Lijnmarkt 9, 3511 KE Utrecht', '위트레흐트 최고의 베이커리로 꼽히는 아티산 제과점.', 'Widely cited as the best bakery in Utrecht, an artisanal bakery-patisserie.', { reviewCount: 703 }),
  place('utrecht-bakery-2', 'utrecht', 'bakery', 'Bakkerswinkel Utrecht', 4.4, 'Wittevrouwenstraat 2, 3512 CT Utrecht', '아침·점심·애프터눈티로 인기 있는 아늑한 지하 베이커리 카페.', 'Cozy cellar bakery-café popular for breakfast, lunch, and high tea.', { reviewCount: 986 }),

  place('utrecht-cafe-1', 'utrecht', 'cafe', 'The Village Coffee & Music', 4.7, 'Voorstraat 44-46, 3512 AP Utrecht', '2011년부터 이어온 스페셜티 커피 바 겸 로스터리.', 'Specialty coffee bar and roastery, a long-standing local favorite since 2011.', { reviewCount: 1143 }),
  place('utrecht-cafe-2', 'utrecht', 'cafe', 'Koffie Leute', 4.6, 'Westerkade 30, 3511 HC Utrecht', '엄선한 원두를 로테이션으로 선보이는 운하변의 보헤미안풍 커피 바.', 'Bohemian canal-side coffee bar praised for carefully sourced, rotating specialty roasts.', { reviewCount: 944 }),
  place('utrecht-cafe-3', 'utrecht', 'cafe', 'Café Ledig Erf', 4.2, 'Tolsteegbrug 3, 3511 ZN Utrecht', '넓은 테라스와 다양한 수제맥주로 유명한 운하변의 클래식 펍.', 'Classic canal-side pub with a large terrace and an extensive craft beer selection.', { reviewCount: 739 }),

  place('utrecht-korean-1', 'utrecht', 'korean', 'Bapsang BBQ', 4.2, 'Proostwetering 80L, 3543 AJ Utrecht', '테이블에서 직접 구워 먹는 인기 한국식 무한리필 바비큐.', 'Popular all-you-can-eat Korean BBQ restaurant where diners grill at the table.', { reviewCount: 1351 }),

  // —— haarlem ——
  place('haarlem-fine_dining-1', 'haarlem', 'fine_dining', 'Restaurant Brick', 4.7, 'Breestraat 24-26, 2011 ZZ Haarlem', '하를럼 1위로 꼽히는 레스토랑, 아늑한 분위기의 시즌 팬유러피언 요리.', 'Ranked the #1 restaurant in Haarlem, a cozy spot with seasonal pan-European cooking.', { reviewCount: 441 }),
  place('haarlem-fine_dining-2', 'haarlem', 'fine_dining', 'De Lachende Javaan', 4.5, 'Frankestraat 25-27, 2011 HT Haarlem', '전통 라이스테이블로 사랑받는 인도네시아 레스토랑.', 'Beloved Indonesian restaurant famous for its traditional rijsttafel feasts.', { reviewCount: 1237 }),
  place('haarlem-fine_dining-3', 'haarlem', 'fine_dining', 'Jopenkerk', 4.2, 'Gedempte Voldersgracht 2, 2011 WD Haarlem', '19세기 교회를 개조한 양조장 겸 레스토랑·카페.', 'A working brewery, restaurant, and café housed in a converted 19th-century church.', { reviewCount: 7497 }),
  place('haarlem-fine_dining-4', 'haarlem', 'fine_dining', 'Ratatouille Food & Wine', 4.6, 'Spaarne 96, Haarlem', '스파르너 강변의 미쉐린 등재 모던 프렌치 레스토랑.', 'Michelin-listed modern French restaurant along the Spaarne river.', { reviewCount: 774 }),

  place('haarlem-bakery-1', 'haarlem', 'bakery', 'Artesano Bakkerij', 5.0, 'Tempeliersstraat 28, 2012 EE Haarlem', '하를럼 유일의 유기농 사워도우 베이커리 겸 스페셜티 커피숍.', 'Haarlem\'s only artisanal organic sourdough bakery, also serving specialty coffee.', { reviewCount: 240 }),
  place('haarlem-bakery-2', 'haarlem', 'bakery', 'Boulangerie Oscar', 4.4, 'Grote Houtstraat 156, 2011 SX Haarlem', '간단한 런치와 빵으로 인기 있는 프렌치풍 베이커리 체인.', 'Popular French-style bakery chain outlet for quick lunches, bread, and pastries.'),

  place('haarlem-cafe-1', 'haarlem', 'cafe', 'Grand Café Brinkmann', 4.2, 'Grote Markt 13, 2011 RC Haarlem', '성 바보 교회 옆 중앙 광장에 위치한 하를럼에서 가장 오래된 우아한 그랜드 카페.', 'Haarlem\'s oldest and most elegant grand café, on the main square by St. Bavo church.', { reviewCount: 2870 }),
  place('haarlem-cafe-2', 'haarlem', 'cafe', 'Anne&Max Haarlem', 4.1, 'Grote Markt 5, 2011 RC Haarlem', '시내 중심가의 밝은 분위기의 올데이 브렉퍼스트·브런치 체인 카페.', 'Bright all-day breakfast-and-brunch chain café in the heart of the city.', { reviewCount: 1258 }),
  place('haarlem-cafe-3', 'haarlem', 'cafe', 'Mica Coffee Bar', 4.6, 'Kleine Houtstraat 103, 2011 DK Haarlem', '홈메이드 페이스트리로 유명한 미니멀한 비건 프렌들리 스페셜티 커피 바.', 'Minimalist, vegan-friendly specialty coffee bar known for homemade pastries.', { reviewCount: 517 }),

  // —— delft ——
  place('delft-fine_dining-1', 'delft', 'fine_dining', 'Restaurant Azurite', 4.9, 'Houttuinen 2, Delft', '마리오 리더 셰프의 미쉐린급 파인 다이닝, 델프트 최고 평가 레스토랑 중 하나.', 'Michelin-recognized fine dining from chef Mario Ridder, one of Delft\'s most acclaimed tables.', { reviewCount: 204 }),
  place('delft-fine_dining-2', 'delft', 'fine_dining', 'Novaela', 4.9, 'Bagijnhof 118, Delft', '델프트 최고 평점 중 하나인 컨템포러리 미쉐린 등재 파인 다이닝.', 'Contemporary Michelin-listed fine-dining restaurant, among the highest-rated in Delft.', { reviewCount: 120 }),
  place('delft-fine_dining-3', 'delft', 'fine_dining', 'Restaurant Le Vieux Jean', 4.7, 'HH Geestkerkhof 3, Delft', '아우더 케르크 인근의 유서 깊은 우아한 파인 다이닝.', 'Elegant, long-established fine-dining restaurant near the Oude Kerk.', { reviewCount: 276 }),

  place('delft-bakery-1', 'delft', 'bakery', 'Bakker Suikerbuik', 4.3, 'Hippolytusbuurt 22-24, 2611 HN Delft', '운하변 테라스를 갖춘 구시가지의 베이커리 겸 런치룸, 애프터눈티로 인기.', 'Historic-centre bakery and lunchroom with a canal-side terrace, popular for high tea.', { reviewCount: 981 }),

  place('delft-cafe-1', 'delft', 'cafe', 'Kek - De koffiebar van Delft', 4.7, 'Voldersgracht 27, 2611 EV Delft', '델프트 3위 레스토랑으로 꼽히는 아늑한 올데이 커피 바 겸 브런치 스팟.', 'Ranked #3 restaurant in Delft, a cozy all-day coffee bar and brunch spot.', { reviewCount: 1266 }),
  place('delft-cafe-2', 'delft', 'cafe', 'De Waag', 4.0, 'Markt 11, 2611 GP Delft', '중앙 광장의 역사적인 카페 겸 레스토랑, 수십 년째 이어진 델프트의 명소.', 'Historic café-restaurant on the main square, a Delft classic for decades.', { reviewCount: 2531 }),
  place('delft-cafe-3', 'delft', 'cafe', 'Neef Rob', 4.8, 'Choorstraat 34, 2611 JG Delft', '델프트 최고의 커피숍으로 여러 차례 선정된 곳, 수제 초콜릿과 차로도 유명.', 'Repeatedly voted Delft\'s best coffee shop, also known for handmade chocolates and teas.', { reviewCount: 333 }),

  // —— maastricht ——
  place('maastricht-fine_dining-1', 'maastricht', 'fine_dining', 'Château Neercanne', 4.7, 'Von Dopfflaan 10, 6213 NG Maastricht', '네덜란드 유일의 계단식 성에 위치한 미쉐린 1스타 레스토랑, 벨기에 국경에 인접.', 'One-Michelin-star restaurant in the Netherlands\' only terraced castle, on the Belgian border.', { reviewCount: 1703 }),
  place('maastricht-fine_dining-2', 'maastricht', 'fine_dining', 'Beluga Loves You', 4.7, 'Plein 1992 12, 6221 JP Maastricht', '셰프 세르베 틸만이 이끄는 미쉐린 1스타 모던 유러피언 레스토랑.', 'One-Michelin-star modern European restaurant led by chef Servais Tielman.', { reviewCount: 632 }),
  place('maastricht-fine_dining-3', 'maastricht', 'fine_dining', 'Tout à Fait', 4.5, 'St-Bernardusstraat 16-18, 6211 HL Maastricht', '2002년부터 미쉐린 스타를 유지해온 구시가지의 프렌치 레스토랑.', 'Michelin-starred (since 2002) French restaurant in the historic centre.', { reviewCount: 336 }),
  place('maastricht-fine_dining-4', 'maastricht', 'fine_dining', 'Petit Bonheur', 4.5, 'Achter de Molens 2, 6211 JC Maastricht', '예케르콰르티어 지구의 17세기 농가를 개조한 프렌치-지중해 레스토랑.', 'French-Mediterranean restaurant in a 17th-century farmhouse in the romantic Jekerkwartier.', { reviewCount: 541 }),

  place('maastricht-bakery-1', 'maastricht', 'bakery', 'Bisschopsmolen', 4.5, 'Stenenbrug 3, 6211 HP Maastricht', '림뷔르흐 명물 플라이(파이)로 유명한 역사적인 제분소 베이커리.', 'Historic working watermill-bakery famous for its Limburgse vlaai.', { reviewCount: 1216 }),

  place('maastricht-cafe-1', 'maastricht', 'cafe', 'Coffeelovers Dominicanen', 4.5, 'Dominicanerkerkstraat 1, 6211 CZ Maastricht', '"세계에서 가장 아름다운 서점"으로 불리는 13세기 도미니크 수도원 성당 안의 에스프레소 바.', 'Espresso bar set inside a converted 13th-century Dominican church, "the most beautiful bookstore in the world."', { reviewCount: 1619 }),
  place('maastricht-cafe-2', 'maastricht', 'cafe', 'Café Zuid', 4.4, 'Plein 1992 15, 6221 JP Maastricht', '뫼즈강이 내려다보이는 선테라스를 갖춘 강변 카페.', 'Riverside café with a sun terrace overlooking the Maas.', { reviewCount: 1508 }),

  // —— giethoorn ——
  place('giethoorn-fine_dining-1', 'giethoorn', 'fine_dining', 'Restaurant De Lindenhof', 4.6, 'Beulakerweg 77, 8355 AC Giethoorn', '스위트룸을 갖춘 미쉐린 2스타 레스토랑, 네덜란드 최고의 파인 다이닝 중 하나.', 'Two-Michelin-star restaurant with suites, one of the country\'s top fine-dining destinations.', { reviewCount: 240 }),
  place('giethoorn-fine_dining-2', 'giethoorn', 'fine_dining', "Restaurant 't Achterhuus", 4.2, 'Dominee T.O. Hylkemaweg 43, 8355 CE Giethoorn', '마을 운하 인근의 컨템포러리 더치 다이닝, 마을 내 2위로 꼽힘.', 'Ranked #2 in the village, contemporary Dutch dining near the village canal.', { reviewCount: 1311 }),

  place('giethoorn-cafe-1', 'giethoorn', 'cafe', 'Grand Café Fanfare', 4.1, 'Binnenpad 68, 8355 BV Giethoorn', '마을 운하변의 향수를 자아내는 빈티지풍 그랜드 카페.', 'Nostalgic, vintage-styled grand café on the village canal.', { reviewCount: 2369 }),

]
