import { place } from './placeFactory'
import type { Place } from '../types'

export const placesNLExtra: Place[] = [
  // —— rotterdam ——
  place('rotterdam-fine_dining-1', 'rotterdam', 'fine_dining', 'Parkheuvel', 'Heuvellaan 21, 3016 GL Rotterdam', '마스강이 보이는 공원 안의 미쉐린 2스타 프랑스 레스토랑. 화·수요일은 쉽니다.', 'Two-Michelin-star French restaurant in a park by the Maas; closed Tuesdays and Wednesdays.', { michelin: 'star2', image: '/places/rotterdam-fine_dining-1.jpg' }),
  place('rotterdam-fine_dining-2', 'rotterdam', 'fine_dining', 'FG Restaurant', 'Katshoek 37b, 3032 AE Rotterdam', '셰프 프랑수아 회르츠의 미쉐린 2스타 테이스팅 메뉴 레스토랑.', 'Two-Michelin-star tasting-menu restaurant of chef François Geurds.', { michelin: 'star2', image: '/places/rotterdam-fine_dining-2.jpg' }),
  place('rotterdam-fine_dining-3', 'rotterdam', 'fine_dining', 'Zeezout', 'Westerkade 11b, 3016 CL Rotterdam', '마스강변의 미쉐린 1스타 해산물 레스토랑. 수~토요일에 엽니다.', 'One-Michelin-star seafood restaurant on the Maas; Wednesday to Saturday.', { michelin: 'star1' }),
  place('rotterdam-fine_dining-4', 'rotterdam', 'fine_dining', 'Amarone', 'Meent 72a, 3011 JN Rotterdam', '시내 중심의 미쉐린 1스타 레스토랑. 일요일은 쉽니다.', 'One-Michelin-star restaurant in the city centre; closed Sundays.', { michelin: 'star1', image: '/places/rotterdam-fine_dining-4.jpg' }),
  place('rotterdam-fine_dining-5', 'rotterdam', 'fine_dining', 'Fred', 'Boompjes 41, 3011 XB Rotterdam', '마스강변 봄피에스의 미쉐린 2스타 레스토랑. 수·일요일은 쉽니다.', 'Two-Michelin-star restaurant on the Boompjes by the Maas; closed Wednesdays and Sundays.', { michelin: 'star2' }),

  place('rotterdam-bakery-1', 'rotterdam', 'bakery', 'Jan Bussing', 'Van Vollenhovenstraat 48a, 3016 BJ Rotterdam', '프랑스식 전통 빵집.', 'Traditional French-style bakery.'),
  place('rotterdam-bakery-2', 'rotterdam', 'bakery', 'Koekela Rotterdam', 'Nieuwe Binnenweg 79A, 3014 GC Rotterdam', '로테르담의 빵집.', 'Bakery in Rotterdam.'),
  place('rotterdam-bakery-3', 'rotterdam', 'bakery', 'The Cakery Rotterdam', 'Karel Doormanstraat 376, 3012 GP Rotterdam', '프렌치풍 제과점.', 'French-style bakery.'),
  place('rotterdam-bakery-4', 'rotterdam', 'bakery', 'La Maison du pain', 'Hoogstraat 22A, 3011 PC Rotterdam', '프렌치풍 베이커리.', 'French-style bakery.'),
  place('rotterdam-bakery-5', 'rotterdam', 'bakery', 'Crave Coffee & Bakery', 'Vogelenzang 6, 3011 KR Rotterdam', '커피 & 베이커리.', 'Coffee and bakery spot.'),

  place('rotterdam-cafe-1', 'rotterdam', 'cafe', 'Man Met Bril Koffie', 'Vijverhofstraat 70, Rotterdam', '매장에서 원두를 볶는 로테르담 북부의 스페셜티 카페.', 'Specialty café in Rotterdam-Noord roasting its own coffee.'),
  place('rotterdam-cafe-2', 'rotterdam', 'cafe', 'Amada Coffee', 'Hoogstraat 36a, 3011 PE Rotterdam', '커피숍.', 'Coffee shop.'),
  place('rotterdam-cafe-3', 'rotterdam', 'cafe', "Sherlock's place", 'Grotekerkplein 103, 3011 GC Rotterdam', '흐로테케르크플레인의 커피숍.', 'Coffee shop on Grotekerkplein.'),
  place('rotterdam-cafe-4', 'rotterdam', 'cafe', 'âme cafe and concept store', 'Eendrachtsweg 19, 3012 LB Rotterdam', '카페 겸 컨셉 스토어.', 'Café and concept store combined.'),
  place('rotterdam-cafe-5', 'rotterdam', 'cafe', 'Nice', 'Hoogstraat 42, 3011 PE Rotterdam', '커피숍.', 'Coffee shop.'),

  place('rotterdam-korean-1', 'rotterdam', 'korean', 'Seoul Sista', 'Hartmansstraat 31, 3012 VA Rotterdam', '테이블마다 그릴이 있는 로테르담의 한국식 바비큐 식당.', 'Rotterdam Korean barbecue with a grill at every table.'),
  place('rotterdam-korean-2', 'rotterdam', 'korean', 'Bap Boss', 'Goudsesingel 26, 3011 KB Rotterdam', '닭강정으로 호평받는 2018년 개업 한식당.', 'Korean restaurant open since 2018, praised for its dak-gangjeong (Korean fried chicken).'),

  // —— the-hague ——
  place('the-hague-fine_dining-1', 'the-hague', 'fine_dining', "Calla's", 'Laan van Roos en Doorn 51A, 2514 BC Den Haag', '계절 요리를 내는 덴하그의 미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant in The Hague serving seasonal cooking.'),
  place('the-hague-fine_dining-2', 'the-hague', 'fine_dining', 'De Basiliek', 'Korte Houtstraat 4a, 2511 CD Den Haag', '시내의 미쉐린 빕 구르망 레스토랑. 일요일은 쉽니다.', 'Michelin Bib Gourmand restaurant in the centre; closed Sundays.', { michelin: 'bib' }),
  place('the-hague-fine_dining-3', 'the-hague', 'fine_dining', 'Restaurant Suus', 'Plesmanweg 701, 2597 JG Den Haag', '옛 KLM 본사 건물(호텔 더 플레스만) 안의 우아한 유러피언 다이닝.', 'Elegant dining inside the historic former KLM headquarters, serving refined European fare.'),
  place('the-hague-fine_dining-4', 'the-hague', 'fine_dining', 'Catch by Simonis', 'Dr. Lelykade 43, 2583 CL Den Haag', '스헤베닝언 항구의 해산물 레스토랑.', 'Seafood restaurant on Scheveningen harbour.'),

  place('the-hague-bakery-1', 'the-hague', 'bakery', 'Bartine Bakery & Market', 'Piet Heinstraat 72, 2518 CK Den Haag', '사워도우와 터키식 달걀 브런치가 있는 동네 빵집 겸 카페.', 'Neighbourhood bakery café with sourdough and Turkish-egg brunch.'),
  place('the-hague-bakery-2', 'the-hague', 'bakery', 'Philippe Galerne Patisserie', 'Aert van der Goesstraat 24, 2582 AK Den Haag', '스타텐콰르티어 지구의 프랑스식 파티스리. 수제 마카롱이 있습니다.', 'French pâtisserie in the Statenkwartier with handmade macarons.'),
  place('the-hague-bakery-3', 'the-hague', 'bakery', 'Boulangerie Michel', 'Oude Molstraat 17, Den Haag', '2008년 창업한 아티산 프렌치 베이커리 체인.', 'Artisan French bakery chain, founded in 2008.'),

  place('the-hague-cafe-1', 'the-hague', 'cafe', 'Kaafi Specialty Coffee & Brunch Bar', 'Prinsestraat 25, 2513 CA Den Haag', '여러 로스터의 원두를 쓰는 구시가의 스페셜티 커피·브런치 카페.', 'Multi-roaster specialty coffee and brunch café in the historic centre.'),
  place('the-hague-cafe-2', 'the-hague', 'cafe', 'August', 'Turfmarkt 250, 2511 DJ Den Haag', '좋은 커피와 런치로 호평받는 캐주얼 런치 스팟.', 'Casual lunch spot praised for great coffee and lunch fare.'),
  place('the-hague-cafe-3', 'the-hague', 'cafe', 'The Coffee Company', 'Korte Poten 21, Den Haag', '헤이그 시내 중심가의 믿을 수 있는 네덜란드 커피 체인점.', 'Reliable Dutch coffee chain outpost in the city centre.'),

  place('the-hague-korean-1', 'the-hague', 'korean', 'Seoul Garden', 'Bagijnestraat 8, 2511 CK Den Haag', '헤이그 시내의 오래된 정통 한식당.', 'Long-running, classic Korean restaurant in the city centre.', { image: '/places/the-hague-korean-1.jpg' }),

  // —— utrecht ——
  place('utrecht-fine_dining-1', 'utrecht', 'fine_dining', 'Karel 5', 'Geertebolwerk 1, 3511 XA Utrecht', '옛 수도원을 고친 그랜드 호텔 카럴 V 안의 미쉐린 1스타 레스토랑. 수~토 저녁에 엽니다.', 'One-Michelin-star restaurant in the Grand Hotel Karel V, a converted monastery; Wednesday to Saturday evenings.', { michelin: 'star1', image: '/places/utrecht-fine_dining-1.jpg' }),
  place('utrecht-fine_dining-2', 'utrecht', 'fine_dining', 'Restaurant Blauw Utrecht', 'Springweg 64, 3511 VT Utrecht', '라이스타펠(인도네시아식 한상)을 내는 미쉐린 빕 구르망 인도네시아 식당.', 'Michelin Bib Gourmand Indonesian restaurant serving rijsttafel.'),
  place('utrecht-fine_dining-3', 'utrecht', 'fine_dining', 'De Rechtbank', 'Korte Nieuwstraat 14, 3512 NM Utrecht', '옛 법원 건물(코트 호텔) 안의 분위기 있는 올데이 다이닝 레스토랑.', 'Atmospheric restaurant set inside a former courthouse, serving all-day dining.', { image: '/places/utrecht-fine_dining-3.jpg' }),
  place('utrecht-fine_dining-4', 'utrecht', 'fine_dining', 'Broei', 'Oosterkade 24, 3582 AV Utrecht', '운하변의 비건 레스토랑.', 'Plant-based restaurant on the canal.'),

  place('utrecht-bakery-1', 'utrecht', 'bakery', 'Bond & Smolders', 'Lijnmarkt 9, 3511 KE Utrecht', '위트레흐트의 아르티장 빵집 겸 제과점.', 'Artisan bakery and pâtisserie in Utrecht.'),
  place('utrecht-bakery-2', 'utrecht', 'bakery', 'Bakkerswinkel Utrecht', 'Wittevrouwenstraat 2, 3512 CT Utrecht', '아침·점심·애프터눈 티를 내는 지하 빵집 겸 카페.', 'Cellar bakery café serving breakfast, lunch and high tea.'),

  place('utrecht-cafe-1', 'utrecht', 'cafe', 'The Village Coffee & Music', 'Voorstraat 44-46, 3512 AP Utrecht', '2011년부터 이어온 스페셜티 커피 바 겸 로스터리.', 'Specialty coffee bar and roastery, a long-standing local favorite since 2011.'),
  place('utrecht-cafe-2', 'utrecht', 'cafe', 'Koffie Leute', 'Westerkade 30, 3511 HC Utrecht', '엄선한 원두를 로테이션으로 선보이는 운하변의 보헤미안풍 커피 바.', 'Bohemian canal-side coffee bar praised for carefully sourced, rotating specialty roasts.'),
  place('utrecht-cafe-3', 'utrecht', 'cafe', 'Café Ledig Erf', 'Tolsteegbrug 3, 3511 ZN Utrecht', '넓은 테라스와 수제 맥주가 있는 운하변 펍.', 'Canal-side pub with a big terrace and craft beers.'),

  place('utrecht-korean-1', 'utrecht', 'korean', 'Bapsang BBQ', 'Proostwetering 80L, 3543 AJ Utrecht', '테이블에서 고기를 굽는 무한 리필 한국식 바비큐.', 'All-you-can-eat Korean barbecue with tableside grilling.'),

  // —— haarlem ——
  place('haarlem-fine_dining-1', 'haarlem', 'fine_dining', 'Restaurant Brick', 'Breestraat 24-26, 2011 ZZ Haarlem', '계절 유럽 요리를 내는 하를럼의 아늑한 레스토랑.', 'Cosy Haarlem restaurant serving seasonal European cooking.'),
  place('haarlem-fine_dining-2', 'haarlem', 'fine_dining', 'De Lachende Javaan', 'Frankestraat 25-27, 2011 HT Haarlem', '라이스타펠을 내는 인도네시아 식당.', 'Indonesian restaurant serving rijsttafel.'),
  place('haarlem-fine_dining-3', 'haarlem', 'fine_dining', 'Jopenkerk', 'Gedempte Voldersgracht 2, 2011 WD Haarlem', '19세기 교회를 개조한 양조장 겸 레스토랑·카페.', 'A working brewery, restaurant, and café housed in a converted 19th-century church.', { image: '/places/haarlem-fine_dining-3.jpg' }),
  place('haarlem-fine_dining-4', 'haarlem', 'fine_dining', 'Ratatouille Food & Wine', 'Spaarne 96, Haarlem', '스파르너 강변의 미쉐린 1스타 프랑스 레스토랑. 월·화요일은 쉽니다.', 'One-Michelin-star French restaurant on the Spaarne; closed Mondays and Tuesdays.', { michelin: 'star1' }),

  place('haarlem-bakery-1', 'haarlem', 'bakery', 'Artesano Bakkerij', 'Tempeliersstraat 28, 2012 EE Haarlem', '유기농 사워도우 빵집 겸 스페셜티 커피숍.', 'Organic sourdough bakery and specialty coffee shop.'),
  place('haarlem-bakery-2', 'haarlem', 'bakery', 'Boulangerie Oscar', 'Grote Houtstraat 156, 2011 SX Haarlem', '점심과 빵을 파는 프랑스식 빵집 체인 매장.', 'French-style bakery chain outlet for lunch, bread and pastries.'),

  place('haarlem-cafe-1', 'haarlem', 'cafe', 'Grand Café Brinkmann', 'Grote Markt 13, 2011 RC Haarlem', '성 바보 교회 옆 중앙 광장의 그랜드 카페.', 'Grand café on the main square by St Bavo’s church.'),
  place('haarlem-cafe-2', 'haarlem', 'cafe', 'Anne&Max Haarlem', 'Grote Markt 5, 2011 RC Haarlem', '시내 중심가의 밝은 분위기의 올데이 브렉퍼스트·브런치 체인 카페.', 'Bright all-day breakfast-and-brunch chain café in the heart of the city.'),
  place('haarlem-cafe-3', 'haarlem', 'cafe', 'Mica Coffee Bar', 'Kleine Houtstraat 103, 2011 DK Haarlem', '홈메이드 페이스트리가 있는 스페셜티 커피 바. 비건 메뉴도 있습니다.', 'Specialty coffee bar with homemade pastries and vegan options.'),

  // —— delft ——
  place('delft-fine_dining-1', 'delft', 'fine_dining', 'Restaurant Azurite', 'Houttuinen 2, 2611 DX Delft', '델프트의 미쉐린 2스타 레스토랑(2026년 승급).', 'Two-Michelin-star restaurant in Delft (promoted in 2026).', { michelin: 'star2' }),
  place('delft-fine_dining-2', 'delft', 'fine_dining', 'Novaela', 'Bagijnhof 118, 2611 AS Delft', '델프트의 미쉐린 1스타 레스토랑. 월·화요일은 쉽니다.', 'One-Michelin-star restaurant in Delft; closed Mondays and Tuesdays.', { michelin: 'star1' }),
  place('delft-fine_dining-3', 'delft', 'fine_dining', 'Restaurant Le Vieux Jean', 'Heilige Geestkerkhof 3, 2611 HP Delft', '아우더 케르크 근처의 미쉐린 빕 구르망 레스토랑. 수~토요일에 엽니다.', 'Michelin Bib Gourmand restaurant near the Oude Kerk; Wednesday to Saturday.', { michelin: 'bib', image: '/places/delft-fine_dining-3.jpg' }),

  place('delft-bakery-1', 'delft', 'bakery', 'Bakker Suikerbuik', 'Hippolytusbuurt 22-24, 2611 HN Delft', '운하변 테라스가 있는 구시가의 빵집 겸 런치룸. 애프터눈 티가 있습니다.', 'Old-town bakery and lunchroom with a canal-side terrace and high tea.'),
  place('delft-bakery-2', 'delft', 'bakery', 'City Bakery Diamond Ring', 'Choorstraat 9, 2611 JE Delft', '포장과 배달 위주의 빵집.', 'Bakery focused on takeaway and delivery.'),
  place('delft-bakery-3', 'delft', 'bakery', 'Boulangerie Michel Delft', 'Oude Kerkstraat 4d, 2611 EZ Delft', '아티산 프렌치 베이커리 체인의 델프트 지점.', 'Delft branch of the artisan French bakery chain.'),
  place('delft-bakery-4', 'delft', 'bakery', 'Bombina Bakehouse', 'Hippolytusbuurt 29A, 2611 HP Delft', '베이커리.', 'Bakery.'),
  place('delft-bakery-5', 'delft', 'bakery', 'The English Bakery', 'Molstraat 19-A, 2611 EN Delft', '영국식 베이커리.', 'English-style bakery.'),

  place('delft-cafe-1', 'delft', 'cafe', 'Kek - De koffiebar van Delft', 'Voldersgracht 27, 2611 EV Delft', '델프트 3위 레스토랑으로 꼽히는 아늑한 올데이 커피 바 겸 브런치 스팟.', 'Ranked #3 restaurant in Delft, a cozy all-day coffee bar and brunch spot.'),
  place('delft-cafe-2', 'delft', 'cafe', 'De Waag', 'Markt 11, 2611 GP Delft', '중앙 광장의 오래된 카페 겸 레스토랑.', 'Long-established café-restaurant on the main square.', { image: '/places/delft-cafe-2.jpg' }),
  place('delft-cafe-3', 'delft', 'cafe', 'Neef Rob', 'Choorstraat 34, 2611 JG Delft', '수제 초콜릿과 차도 파는 델프트의 커피숍.', 'Delft coffee shop also selling handmade chocolates and teas.'),

  // —— maastricht ——
  place('maastricht-fine_dining-1', 'maastricht', 'fine_dining', 'Château Neercanne', 'Von Dopfflaan 10, 6213 NG Maastricht', '계단식 정원이 있는 성 안의 미쉐린 1스타 레스토랑. 월·화요일은 쉽니다.', 'One-Michelin-star restaurant in a château with terraced gardens; closed Mondays and Tuesdays.', { michelin: 'star1', image: '/places/maastricht-fine_dining-1.jpg' }),
  place('maastricht-fine_dining-2', 'maastricht', 'fine_dining', 'Beluga Loves You', 'Plein 1992 12, 6221 JP Maastricht', '셰프 세르베 틸만의 미쉐린 1스타 창작 요리 레스토랑. 수~토요일에 엽니다.', 'One-Michelin-star creative restaurant of chef Servais Tilman; Wednesday to Saturday.', { michelin: 'star1' }),
  place('maastricht-fine_dining-3', 'maastricht', 'fine_dining', 'Tout à Fait', 'St-Bernardusstraat 16, 6211 HL Maastricht', '2002년부터 미쉐린 1스타를 지켜 온 구시가지의 프랑스 레스토랑. 월~수요일은 쉽니다.', 'Old-town French restaurant holding one Michelin star since 2002; closed Monday to Wednesday.', { michelin: 'star1' }),
  place('maastricht-fine_dining-4', 'maastricht', 'fine_dining', 'Petit Bonheur', 'Achter de Molens 2, 6211 JC Maastricht', '예케르콰르티어 지구의 17세기 농가를 개조한 프렌치-지중해 레스토랑.', 'French-Mediterranean restaurant in a 17th-century farmhouse in the romantic Jekerkwartier.'),

  place('maastricht-bakery-1', 'maastricht', 'bakery', 'Bisschopsmolen', 'Stenenbrug 3, 6211 HP Maastricht', '림뷔르흐 파이(플라이)를 굽는 옛 물레방아 빵집.', 'Bakery in a historic watermill baking Limburg vlaai.', { image: '/places/maastricht-bakery-1.jpg' }),
  place('maastricht-bakery-2', 'maastricht', 'bakery', 'Patisserie Peter Lemmens', 'Glacisweg 30H, 6212 BS Maastricht', '파티스리.', 'Patisserie.'),
  place('maastricht-bakery-3', 'maastricht', 'bakery', 'Patisserie Noblesse', 'Scharnerweg 37, 6224 JC Maastricht', '프렌치 파티스리.', 'French patisserie.'),
  place('maastricht-bakery-4', 'maastricht', 'bakery', 'Ginnies', 'Brusselsestraat 95, 6211 PG Maastricht', '베이커리.', 'Bakery.'),
  place('maastricht-bakery-5', 'maastricht', 'bakery', "Koekmakerij 't Keukske", 'Nieuwstraat 24, 6211 SR Maastricht', '쿠키 전문점.', 'Cookie specialist.'),

  place('maastricht-cafe-1', 'maastricht', 'cafe', 'Coffeelovers Dominicanen', 'Dominicanerkerkstraat 1, 6211 CZ Maastricht', '"세계에서 가장 아름다운 서점"으로 불리는 13세기 도미니크 수도원 성당 안의 에스프레소 바.', 'Espresso bar set inside a converted 13th-century Dominican church, "the most beautiful bookstore in the world."'),
  place('maastricht-cafe-2', 'maastricht', 'cafe', 'Café Zuid', 'Plein 1992 15, 6221 JP Maastricht', '뫼즈강이 내려다보이는 선테라스를 갖춘 강변 카페.', 'Riverside café with a sun terrace overlooking the Maas.', { image: '/places/maastricht-cafe-2.jpg' }),

  // —— giethoorn ——
  place('giethoorn-fine_dining-1', 'giethoorn', 'fine_dining', 'Restaurant De Lindenhof', 'Beulakerweg 77, 8355 AC Giethoorn', '기트호른의 미쉐린 2스타 레스토랑. 수~일요일에 엽니다.', 'Two-Michelin-star restaurant in Giethoorn; Wednesday to Sunday.', { michelin: 'star2' }),
  place('giethoorn-fine_dining-2', 'giethoorn', 'fine_dining', "Restaurant 't Achterhuus", 'Dominee T.O. Hylkemaweg 43, 8355 CE Giethoorn', '마을 운하 인근의 컨템포러리 더치 다이닝, 마을 내 2위로 꼽힘.', 'Ranked #2 in the village, contemporary Dutch dining near the village canal.'),

  place('giethoorn-cafe-1', 'giethoorn', 'cafe', 'Grand Café Fanfare', 'Binnenpad 68, 8355 BV Giethoorn', '마을 운하변의 향수를 자아내는 빈티지풍 그랜드 카페.', 'Nostalgic, vintage-styled grand café on the village canal.'),
  place('giethoorn-cafe-2', 'giethoorn', 'cafe', 'Grand Café Henri Willig', 'Dominee T.O. Hylkemaweg 39, 8355 CD Giethoorn', '네덜란드 치즈 농장 앙리 빌리흐가 운영하는 그랜드 카페.', 'Grand café run by the Dutch cheese farm Henri Willig.'),
  place('giethoorn-cafe-3', 'giethoorn', 'cafe', 'Café-Restaurant Smit', 'Zuiderpad 58, 8355 CG Giethoorn', '마을 운하변의 카페 겸 레스토랑.', 'Café-restaurant on the village canal.'),

]
