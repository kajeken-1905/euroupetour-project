import { place } from './placeFactory'
import type { Place } from '../types'

export const placesNLExtra: Place[] = [
  // —— rotterdam ——
  place('rotterdam-fine_dining-1', 'rotterdam', 'fine_dining', 'Parkheuvel', 'Heuvellaan 21, 3016 GL Rotterdam', '항구 전망의 미쉐린 2스타 레스토랑, 클래식 프렌치 요리.', 'Two-Michelin-star harbor-view restaurant known for classic French finesse.', { image: '/places/rotterdam-fine_dining-1.jpg' }),
  place('rotterdam-fine_dining-2', 'rotterdam', 'fine_dining', 'FG Restaurant', 'Katshoek 37b, 3032 AE Rotterdam', '로테르담을 미식 지도에 올린 미쉐린 2스타 테이스팅 메뉴 레스토랑.', 'Two-Michelin-star tasting-menu restaurant that put Rotterdam on the fine-dining map.', { image: '/places/rotterdam-fine_dining-2.jpg' }),
  place('rotterdam-fine_dining-3', 'rotterdam', 'fine_dining', 'Zeezout', 'Westerkade 11b, 3016 CL Rotterdam', '마스강변의 미쉐린 스타 시푸드 레스토랑.', 'Michelin-starred seafood restaurant on the Maas riverside.'),
  place('rotterdam-fine_dining-4', 'rotterdam', 'fine_dining', 'Amarone', 'Meent 72A, Rotterdam', '클래식 프렌치와 일식의 감각을 더한 미쉐린 스타 레스토랑.', 'Michelin-starred restaurant blending classic French technique with subtle Japanese influences.', { image: '/places/rotterdam-fine_dining-4.jpg' }),
  place('rotterdam-fine_dining-5', 'rotterdam', 'fine_dining', 'Fred', 'Honingerdijk 263-265, 3063 AM Rotterdam', '테이블사이드 치즈 카트와 샴페인 서비스로 유명한 마스강 전망의 미쉐린 2스타 레스토랑.', 'Two-Michelin-star Maas-view restaurant famous for its tableside cheese cart and champagne service.'),

  place('rotterdam-bakery-1', 'rotterdam', 'bakery', 'Jan Bussing', 'Van Vollenhovenstraat 48a, 3016 BJ Rotterdam', '로테르담 최고로 꼽히는 프렌치풍 전통 베이커리.', 'Widely regarded as Rotterdam\'s best bakery, a traditional French-style boulangerie.'),
  place('rotterdam-bakery-2', 'rotterdam', 'bakery', 'Koekela Rotterdam', 'Nieuwe Binnenweg 79A, 3014 GC Rotterdam', '평점 높은 인기 베이커리.', 'Popular, highly rated bakery.'),
  place('rotterdam-bakery-3', 'rotterdam', 'bakery', 'The Cakery Rotterdam', 'Karel Doormanstraat 376, 3012 GP Rotterdam', '평점 높은 프렌치풍 제과점.', 'Highly rated French-style bakery.'),
  place('rotterdam-bakery-4', 'rotterdam', 'bakery', 'La Maison du pain', 'Hoogstraat 22A, 3011 PC Rotterdam', '평점 높은 프렌치풍 베이커리.', 'Highly rated French-style bakery.'),
  place('rotterdam-bakery-5', 'rotterdam', 'bakery', 'Crave Coffee & Bakery', 'Vogelenzang 6, 3011 KR Rotterdam', '평점 높은 커피 & 베이커리.', 'Highly rated coffee and bakery spot.'),

  place('rotterdam-cafe-1', 'rotterdam', 'cafe', 'Man Met Bril Koffie', 'Vijverhofstraat 70, Rotterdam', '직접 로스팅한 원두로 유명한 로테르담-노르드의 스페셜티 카페.', 'Rotterdam-Noord specialty café known for its on-site-roasted coffee.'),
  place('rotterdam-cafe-2', 'rotterdam', 'cafe', 'Amada Coffee', 'Hoogstraat 36a, 3011 PE Rotterdam', '평점 높은 커피숍.', 'Highly rated coffee shop.'),
  place('rotterdam-cafe-3', 'rotterdam', 'cafe', "Sherlock's place", 'Grotekerkplein 103, 3011 GC Rotterdam', '흐로테케르크플레인의 평점 높은 커피숍.', 'Highly rated coffee shop on Grotekerkplein.'),
  place('rotterdam-cafe-4', 'rotterdam', 'cafe', 'âme cafe and concept store', 'Eendrachtsweg 19, 3012 LB Rotterdam', '카페 겸 컨셉 스토어.', 'Café and concept store combined.'),
  place('rotterdam-cafe-5', 'rotterdam', 'cafe', 'Nice', 'Hoogstraat 42, 3011 PE Rotterdam', '평점 높은 커피숍.', 'Highly rated coffee shop.'),

  place('rotterdam-korean-1', 'rotterdam', 'korean', 'Seoul Sista', 'Hartmansstraat 31, 3012 VA Rotterdam', '테이블 그릴이 갖춰진 로테르담의 대표 한국식 바비큐.', 'Rotterdam\'s best-known Korean BBQ spot, with tabletop grills built into every table.'),
  place('rotterdam-korean-2', 'rotterdam', 'korean', 'Bap Boss', 'Goudsesingel 26, 3011 KB Rotterdam', '닭강정으로 호평받는 2018년 개업 한식당.', 'Korean restaurant open since 2018, praised for its dak-gangjeong (Korean fried chicken).'),

  // —— the-hague ——
  place('the-hague-fine_dining-1', 'the-hague', 'fine_dining', "Calla's", 'Laan van Roos en Doorn 51A, 2514 BC Den Haag', '20년 넘게 이어온 미쉐린 1스타 레스토랑, 세련된 공간에서 즐기는 시즌 요리.', 'One-Michelin-star restaurant serving refined seasonal cuisine in a stylish setting for over 20 years.'),
  place('the-hague-fine_dining-2', 'the-hague', 'fine_dining', 'De Basiliek', 'Korte Houtstraat 4-A, 2511 CD Den Haag', '푸짐하고 합리적인 가격의 요리로 유명한 미쉐린 빕 구르망 레스토랑.', 'Michelin Bib Gourmand restaurant known for hearty, well-priced dishes.'),
  place('the-hague-fine_dining-3', 'the-hague', 'fine_dining', 'Restaurant Suus', 'Plesmanweg 701, 2597 JG Den Haag', '옛 KLM 본사 건물(호텔 더 플레스만) 안의 우아한 유러피언 다이닝.', 'Elegant dining inside the historic former KLM headquarters, serving refined European fare.'),
  place('the-hague-fine_dining-4', 'the-hague', 'fine_dining', 'Catch by Simonis', 'Dr. Lelykade 43, 2583 CL Den Haag', '스헤베닝언 항구의 미쉐린 등재 시푸드 레스토랑.', 'Michelin-listed seafood restaurant on Scheveningen\'s harbourfront.'),

  place('the-hague-bakery-1', 'the-hague', 'bakery', 'Bartine Bakery & Market', 'Piet Heinstraat 72, 2518 CK Den Haag', '사워도우와 터키식 에그 브런치로 인기 있는 동네 베이커리 카페.', 'Popular neighbourhood bakery-café known for sourdough and Turkish-egg brunches.'),
  place('the-hague-bakery-2', 'the-hague', 'bakery', 'Philippe Galerne Patisserie', 'Aert van der Goesstraat 24, 2582 AK Den Haag', '슈타텐콰르티어 지구의 전통 프렌치 파티스리, 수제 마카롱으로 유명.', 'Traditional French patisserie in the Statenkwartier, prized for handcrafted macarons.'),
  place('the-hague-bakery-3', 'the-hague', 'bakery', 'Boulangerie Michel', 'Oude Molstraat 17, Den Haag', '2008년 창업한 아티산 프렌치 베이커리 체인.', 'Artisan French bakery chain, founded in 2008.'),

  place('the-hague-cafe-1', 'the-hague', 'cafe', 'Kaafi Specialty Coffee & Brunch Bar', 'Prinsestraat 25, 2513 CA Den Haag', '구시가지의 수상 경력이 있는 멀티 로스터 스페셜티 커피·브런치 스팟.', 'Award-winning multi-roaster specialty coffee and brunch spot in the historic centre.'),
  place('the-hague-cafe-2', 'the-hague', 'cafe', 'August', 'Turfmarkt 250, 2511 DJ Den Haag', '좋은 커피와 런치로 호평받는 캐주얼 런치 스팟.', 'Casual lunch spot praised for great coffee and lunch fare.'),
  place('the-hague-cafe-3', 'the-hague', 'cafe', 'The Coffee Company', 'Korte Poten 21, Den Haag', '헤이그 시내 중심가의 믿을 수 있는 네덜란드 커피 체인점.', 'Reliable Dutch coffee chain outpost in the city centre.'),

  place('the-hague-korean-1', 'the-hague', 'korean', 'Seoul Garden', 'Bagijnestraat 8, 2511 CK Den Haag', '헤이그 시내의 오래된 정통 한식당.', 'Long-running, classic Korean restaurant in the city centre.', { image: '/places/the-hague-korean-1.jpg' }),

  // —— utrecht ——
  place('utrecht-fine_dining-1', 'utrecht', 'fine_dining', 'Karel 5', 'Geertebolwerk 1, 3511 XA Utrecht', '수도원을 개조한 그랜드 호텔 카럴 V 안의 미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant inside a historic monastery-turned-grand-hotel.', { image: '/places/utrecht-fine_dining-1.jpg' }),
  place('utrecht-fine_dining-2', 'utrecht', 'fine_dining', 'Restaurant Blauw Utrecht', 'Springweg 64, 3511 VT Utrecht', '화려한 라이스테이블로 유명한 미쉐린 빕 구르망 인도네시아 레스토랑.', 'Bib Gourmand Indonesian restaurant celebrated for its colourful rice-table feasts.'),
  place('utrecht-fine_dining-3', 'utrecht', 'fine_dining', 'De Rechtbank', 'Korte Nieuwstraat 14, 3512 NM Utrecht', '옛 법원 건물(코트 호텔) 안의 분위기 있는 올데이 다이닝 레스토랑.', 'Atmospheric restaurant set inside a former courthouse, serving all-day dining.', { image: '/places/utrecht-fine_dining-3.jpg' }),
  place('utrecht-fine_dining-4', 'utrecht', 'fine_dining', 'Broei', 'Oosterkade 24, 3582 AV Utrecht', '운하변의 완전 채식 레스토랑, 창의적인 비건 요리로 유명.', 'Fully plant-based restaurant on the canal, known for creative vegan cooking.'),

  place('utrecht-bakery-1', 'utrecht', 'bakery', 'Bond & Smolders', 'Lijnmarkt 9, 3511 KE Utrecht', '위트레흐트 최고의 베이커리로 꼽히는 아티산 제과점.', 'Widely cited as the best bakery in Utrecht, an artisanal bakery-patisserie.'),
  place('utrecht-bakery-2', 'utrecht', 'bakery', 'Bakkerswinkel Utrecht', 'Wittevrouwenstraat 2, 3512 CT Utrecht', '아침·점심·애프터눈티로 인기 있는 아늑한 지하 베이커리 카페.', 'Cozy cellar bakery-café popular for breakfast, lunch, and high tea.'),

  place('utrecht-cafe-1', 'utrecht', 'cafe', 'The Village Coffee & Music', 'Voorstraat 44-46, 3512 AP Utrecht', '2011년부터 이어온 스페셜티 커피 바 겸 로스터리.', 'Specialty coffee bar and roastery, a long-standing local favorite since 2011.'),
  place('utrecht-cafe-2', 'utrecht', 'cafe', 'Koffie Leute', 'Westerkade 30, 3511 HC Utrecht', '엄선한 원두를 로테이션으로 선보이는 운하변의 보헤미안풍 커피 바.', 'Bohemian canal-side coffee bar praised for carefully sourced, rotating specialty roasts.'),
  place('utrecht-cafe-3', 'utrecht', 'cafe', 'Café Ledig Erf', 'Tolsteegbrug 3, 3511 ZN Utrecht', '넓은 테라스와 다양한 수제맥주로 유명한 운하변의 클래식 펍.', 'Classic canal-side pub with a large terrace and an extensive craft beer selection.'),

  place('utrecht-korean-1', 'utrecht', 'korean', 'Bapsang BBQ', 'Proostwetering 80L, 3543 AJ Utrecht', '테이블에서 직접 구워 먹는 인기 한국식 무한리필 바비큐.', 'Popular all-you-can-eat Korean BBQ restaurant where diners grill at the table.'),

  // —— haarlem ——
  place('haarlem-fine_dining-1', 'haarlem', 'fine_dining', 'Restaurant Brick', 'Breestraat 24-26, 2011 ZZ Haarlem', '하를럼 1위로 꼽히는 레스토랑, 아늑한 분위기의 시즌 팬유러피언 요리.', 'Ranked the #1 restaurant in Haarlem, a cozy spot with seasonal pan-European cooking.'),
  place('haarlem-fine_dining-2', 'haarlem', 'fine_dining', 'De Lachende Javaan', 'Frankestraat 25-27, 2011 HT Haarlem', '전통 라이스테이블로 사랑받는 인도네시아 레스토랑.', 'Beloved Indonesian restaurant famous for its traditional rijsttafel feasts.'),
  place('haarlem-fine_dining-3', 'haarlem', 'fine_dining', 'Jopenkerk', 'Gedempte Voldersgracht 2, 2011 WD Haarlem', '19세기 교회를 개조한 양조장 겸 레스토랑·카페.', 'A working brewery, restaurant, and café housed in a converted 19th-century church.', { image: '/places/haarlem-fine_dining-3.jpg' }),
  place('haarlem-fine_dining-4', 'haarlem', 'fine_dining', 'Ratatouille Food & Wine', 'Spaarne 96, Haarlem', '스파르너 강변의 미쉐린 등재 모던 프렌치 레스토랑.', 'Michelin-listed modern French restaurant along the Spaarne river.'),

  place('haarlem-bakery-1', 'haarlem', 'bakery', 'Artesano Bakkerij', 'Tempeliersstraat 28, 2012 EE Haarlem', '하를럼 유일의 유기농 사워도우 베이커리 겸 스페셜티 커피숍.', 'Haarlem\'s only artisanal organic sourdough bakery, also serving specialty coffee.'),
  place('haarlem-bakery-2', 'haarlem', 'bakery', 'Boulangerie Oscar', 'Grote Houtstraat 156, 2011 SX Haarlem', '간단한 런치와 빵으로 인기 있는 프렌치풍 베이커리 체인.', 'Popular French-style bakery chain outlet for quick lunches, bread, and pastries.'),

  place('haarlem-cafe-1', 'haarlem', 'cafe', 'Grand Café Brinkmann', 'Grote Markt 13, 2011 RC Haarlem', '성 바보 교회 옆 중앙 광장에 위치한 하를럼에서 가장 오래된 우아한 그랜드 카페.', 'Haarlem\'s oldest and most elegant grand café, on the main square by St. Bavo church.'),
  place('haarlem-cafe-2', 'haarlem', 'cafe', 'Anne&Max Haarlem', 'Grote Markt 5, 2011 RC Haarlem', '시내 중심가의 밝은 분위기의 올데이 브렉퍼스트·브런치 체인 카페.', 'Bright all-day breakfast-and-brunch chain café in the heart of the city.'),
  place('haarlem-cafe-3', 'haarlem', 'cafe', 'Mica Coffee Bar', 'Kleine Houtstraat 103, 2011 DK Haarlem', '홈메이드 페이스트리로 유명한 미니멀한 비건 프렌들리 스페셜티 커피 바.', 'Minimalist, vegan-friendly specialty coffee bar known for homemade pastries.'),

  // —— delft ——
  place('delft-fine_dining-1', 'delft', 'fine_dining', 'Restaurant Azurite', 'Houttuinen 2, Delft', '마리오 리더 셰프의 미쉐린급 파인 다이닝, 델프트 최고 평가 레스토랑 중 하나.', 'Michelin-recognized fine dining from chef Mario Ridder, one of Delft\'s most acclaimed tables.'),
  place('delft-fine_dining-2', 'delft', 'fine_dining', 'Novaela', 'Bagijnhof 118, Delft', '델프트 최고 평점 중 하나인 컨템포러리 미쉐린 등재 파인 다이닝.', 'Contemporary Michelin-listed fine-dining restaurant, among the highest-rated in Delft.'),
  place('delft-fine_dining-3', 'delft', 'fine_dining', 'Restaurant Le Vieux Jean', 'HH Geestkerkhof 3, Delft', '아우더 케르크 인근의 유서 깊은 우아한 파인 다이닝.', 'Elegant, long-established fine-dining restaurant near the Oude Kerk.', { image: '/places/delft-fine_dining-3.jpg' }),

  place('delft-bakery-1', 'delft', 'bakery', 'Bakker Suikerbuik', 'Hippolytusbuurt 22-24, 2611 HN Delft', '운하변 테라스를 갖춘 구시가지의 베이커리 겸 런치룸, 애프터눈티로 인기.', 'Historic-centre bakery and lunchroom with a canal-side terrace, popular for high tea.'),
  place('delft-bakery-2', 'delft', 'bakery', 'City Bakery Diamond Ring', 'Choorstraat 9, 2611 JE Delft', '인기 베이커리, 테이크아웃과 배달 전문.', 'Popular bakery specializing in takeaway and delivery.'),
  place('delft-bakery-3', 'delft', 'bakery', 'Boulangerie Michel Delft', 'Oude Kerkstraat 4d, 2611 EZ Delft', '아티산 프렌치 베이커리 체인의 델프트 지점.', 'Delft branch of the artisan French bakery chain.'),
  place('delft-bakery-4', 'delft', 'bakery', 'Bombina Bakehouse', 'Hippolytusbuurt 29A, 2611 HP Delft', '평점 높은 베이커리.', 'Highly rated bakery.'),
  place('delft-bakery-5', 'delft', 'bakery', 'The English Bakery', 'Molstraat 19-A, 2611 EN Delft', '평점 높은 영국식 베이커리.', 'Highly rated English-style bakery.'),

  place('delft-cafe-1', 'delft', 'cafe', 'Kek - De koffiebar van Delft', 'Voldersgracht 27, 2611 EV Delft', '델프트 3위 레스토랑으로 꼽히는 아늑한 올데이 커피 바 겸 브런치 스팟.', 'Ranked #3 restaurant in Delft, a cozy all-day coffee bar and brunch spot.'),
  place('delft-cafe-2', 'delft', 'cafe', 'De Waag', 'Markt 11, 2611 GP Delft', '중앙 광장의 역사적인 카페 겸 레스토랑, 수십 년째 이어진 델프트의 명소.', 'Historic café-restaurant on the main square, a Delft classic for decades.', { image: '/places/delft-cafe-2.jpg' }),
  place('delft-cafe-3', 'delft', 'cafe', 'Neef Rob', 'Choorstraat 34, 2611 JG Delft', '델프트 최고의 커피숍으로 여러 차례 선정된 곳, 수제 초콜릿과 차로도 유명.', 'Repeatedly voted Delft\'s best coffee shop, also known for handmade chocolates and teas.'),

  // —— maastricht ——
  place('maastricht-fine_dining-1', 'maastricht', 'fine_dining', 'Château Neercanne', 'Von Dopfflaan 10, 6213 NG Maastricht', '네덜란드 유일의 계단식 성에 위치한 미쉐린 1스타 레스토랑, 벨기에 국경에 인접.', 'One-Michelin-star restaurant in the Netherlands\' only terraced castle, on the Belgian border.', { image: '/places/maastricht-fine_dining-1.jpg' }),
  place('maastricht-fine_dining-2', 'maastricht', 'fine_dining', 'Beluga Loves You', 'Plein 1992 12, 6221 JP Maastricht', '셰프 세르베 틸만이 이끄는 미쉐린 1스타 모던 유러피언 레스토랑.', 'One-Michelin-star modern European restaurant led by chef Servais Tielman.'),
  place('maastricht-fine_dining-3', 'maastricht', 'fine_dining', 'Tout à Fait', 'St-Bernardusstraat 16-18, 6211 HL Maastricht', '2002년부터 미쉐린 스타를 유지해온 구시가지의 프렌치 레스토랑.', 'Michelin-starred (since 2002) French restaurant in the historic centre.'),
  place('maastricht-fine_dining-4', 'maastricht', 'fine_dining', 'Petit Bonheur', 'Achter de Molens 2, 6211 JC Maastricht', '예케르콰르티어 지구의 17세기 농가를 개조한 프렌치-지중해 레스토랑.', 'French-Mediterranean restaurant in a 17th-century farmhouse in the romantic Jekerkwartier.'),

  place('maastricht-bakery-1', 'maastricht', 'bakery', 'Bisschopsmolen', 'Stenenbrug 3, 6211 HP Maastricht', '림뷔르흐 명물 플라이(파이)로 유명한 역사적인 제분소 베이커리.', 'Historic working watermill-bakery famous for its Limburgse vlaai.', { image: '/places/maastricht-bakery-1.jpg' }),
  place('maastricht-bakery-2', 'maastricht', 'bakery', 'Patisserie Peter Lemmens', 'Glacisweg 30H, 6212 BS Maastricht', '평점 높은 파티스리.', 'Highly rated patisserie.'),
  place('maastricht-bakery-3', 'maastricht', 'bakery', 'Patisserie Noblesse', 'Scharnerweg 37, 6224 JC Maastricht', '평점 높은 프렌치 파티스리.', 'Highly rated French patisserie.'),
  place('maastricht-bakery-4', 'maastricht', 'bakery', 'Ginnies', 'Brusselsestraat 95, 6211 PG Maastricht', '평점 높은 베이커리.', 'Highly rated bakery.'),
  place('maastricht-bakery-5', 'maastricht', 'bakery', "Koekmakerij 't Keukske", 'Nieuwstraat 24, 6211 SR Maastricht', '평점 높은 쿠키 전문점.', 'Highly rated cookie specialist.'),

  place('maastricht-cafe-1', 'maastricht', 'cafe', 'Coffeelovers Dominicanen', 'Dominicanerkerkstraat 1, 6211 CZ Maastricht', '"세계에서 가장 아름다운 서점"으로 불리는 13세기 도미니크 수도원 성당 안의 에스프레소 바.', 'Espresso bar set inside a converted 13th-century Dominican church, "the most beautiful bookstore in the world."'),
  place('maastricht-cafe-2', 'maastricht', 'cafe', 'Café Zuid', 'Plein 1992 15, 6221 JP Maastricht', '뫼즈강이 내려다보이는 선테라스를 갖춘 강변 카페.', 'Riverside café with a sun terrace overlooking the Maas.', { image: '/places/maastricht-cafe-2.jpg' }),

  // —— giethoorn ——
  place('giethoorn-fine_dining-1', 'giethoorn', 'fine_dining', 'Restaurant De Lindenhof', 'Beulakerweg 77, 8355 AC Giethoorn', '스위트룸을 갖춘 미쉐린 2스타 레스토랑, 네덜란드 최고의 파인 다이닝 중 하나.', 'Two-Michelin-star restaurant with suites, one of the country\'s top fine-dining destinations.'),
  place('giethoorn-fine_dining-2', 'giethoorn', 'fine_dining', "Restaurant 't Achterhuus", 'Dominee T.O. Hylkemaweg 43, 8355 CE Giethoorn', '마을 운하 인근의 컨템포러리 더치 다이닝, 마을 내 2위로 꼽힘.', 'Ranked #2 in the village, contemporary Dutch dining near the village canal.'),

  place('giethoorn-cafe-1', 'giethoorn', 'cafe', 'Grand Café Fanfare', 'Binnenpad 68, 8355 BV Giethoorn', '마을 운하변의 향수를 자아내는 빈티지풍 그랜드 카페.', 'Nostalgic, vintage-styled grand café on the village canal.'),
  place('giethoorn-cafe-2', 'giethoorn', 'cafe', 'Grand Café Henri Willig', 'Dominee T.O. Hylkemaweg 39, 8355 CD Giethoorn', '네덜란드 치즈 농장 앙리 빌리흐가 운영하는 그랜드 카페.', 'Grand café run by the Dutch cheese farm Henri Willig.'),
  place('giethoorn-cafe-3', 'giethoorn', 'cafe', 'Café-Restaurant Smit', 'Zuiderpad 58, 8355 CG Giethoorn', '마을 운하변의 카페 겸 레스토랑.', 'Café-restaurant on the village canal.'),

]
