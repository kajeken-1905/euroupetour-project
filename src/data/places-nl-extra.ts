import { place } from './placeFactory'
import type { Place } from '../types'

export const placesNLExtra: Place[] = [
  // —— rotterdam ——
  place('rotterdam-fine_dining-1', 'rotterdam', 'fine_dining', 'Parkheuvel', 'Heuvellaan 21, 3016 GL Rotterdam', '마스강이 보이는 공원 안의 미쉐린 2스타 프랑스 레스토랑. 화·수요일은 쉽니다.', 'Two-Michelin-star French restaurant in a park by the Maas; closed Tuesdays and Wednesdays.', { michelin: 'star2', image: '/places/rotterdam-fine_dining-1.jpg' }),
  place('rotterdam-fine_dining-2', 'rotterdam', 'fine_dining', 'FG Restaurant', 'Katshoek 37b, 3032 AE Rotterdam', '셰프 프랑수아 회르츠의 미쉐린 2스타 테이스팅 메뉴 레스토랑.', 'Two-Michelin-star tasting-menu restaurant of chef François Geurds.', { michelin: 'star2', image: '/places/rotterdam-fine_dining-2.jpg' }),
  place('rotterdam-fine_dining-3', 'rotterdam', 'fine_dining', 'Zeezout', 'Westerkade 11b, 3016 CL Rotterdam', '마스강변의 미쉐린 1스타 해산물 레스토랑. 수~토요일에 엽니다.', 'One-Michelin-star seafood restaurant on the Maas; Wednesday to Saturday.', { michelin: 'star1' }),
  place('rotterdam-fine_dining-4', 'rotterdam', 'fine_dining', 'Amarone', 'Meent 72a, 3011 JN Rotterdam', '시내 중심의 미쉐린 1스타 레스토랑. 일요일은 쉽니다.', 'One-Michelin-star restaurant in the city centre; closed Sundays.', { michelin: 'star1', image: '/places/rotterdam-fine_dining-4.jpg' }),
  place('rotterdam-fine_dining-5', 'rotterdam', 'fine_dining', 'Fred', 'Boompjes 41, 3011 XB Rotterdam', '마스강변 봄피에스의 미쉐린 2스타 레스토랑. 수·일요일은 쉽니다.', 'Two-Michelin-star restaurant on the Boompjes by the Maas; closed Wednesdays and Sundays.', { michelin: 'star2' }),

  place('rotterdam-bakery-1', 'rotterdam', 'bakery', 'Jan Bussing', 'Van Vollenhovenstraat 27, 3016 BG Rotterdam', '1899년부터 4대째 이어온 빵집. 프랑스풍 빵과 네덜란드 번이 대표입니다.', 'Bakery run by four generations since 1899, known for French-style breads and Dutch buns.'),
  place('rotterdam-bakery-2', 'rotterdam', 'bakery', 'Koekela Rotterdam', 'Nieuwe Binnenweg 79A, 3014 GC Rotterdam', '2003년부터 니우어 빈넨베흐에 자리한 미국식 베이커리. 레몬 머랭 파이가 인기입니다.', 'American-style bakery on the Nieuwe Binnenweg since 2003; the lemon meringue pie is a favourite.'),
  place('rotterdam-bakery-3', 'rotterdam', 'bakery', 'The Cakery Rotterdam', 'Karel Doormanstraat 376, 3012 GP Rotterdam', '치즈케이크·브라우니·바클라바를 내는 디저트 가게. 밤 10시까지 엽니다.', 'Dessert shop with cheesecakes, brownies and baklava, open until 10pm.'),
  place('rotterdam-bakery-5', 'rotterdam', 'bakery', 'Crave Coffee & Bakery', 'Vogelenzang 6, 3011 KR Rotterdam', '마르크트할 근처의 비건 베이커리 카페. 피스타치오 크러핀이 인기입니다.', 'Vegan bakery-café near the Markthal; the pistachio cruffin is a favourite.'),

  place('rotterdam-cafe-1', 'rotterdam', 'cafe', 'Man Met Bril Koffie', 'Vijverhofstraat 70, Rotterdam', '호프보겐 철도 아치 아래의 로스터리 카페. 로스팅 기계가 보이고 주말 브런치가 있습니다.', 'Roastery café under the Hofbogen railway arches, with the roaster on view and weekend brunch.'),
  place('rotterdam-cafe-2', 'rotterdam', 'cafe', 'Amada Coffee', 'Hoogstraat 36a, 3011 PE Rotterdam', '2019년 문을 연 호흐스트라트의 브런치 카페. 팬케이크와 샥슈카, 모카가 인기입니다.', 'Hoogstraat brunch café opened in 2019; pancakes, shakshuka and mocha are favourites.'),
  place('rotterdam-cafe-3', 'rotterdam', 'cafe', "Sherlock's place", 'Grotekerkplein 103, 3011 GC Rotterdam', '모냉 시럽이 다양한 커피숍. 작은 공예품 가게를 겸합니다.', 'Coffee shop with a huge range of Monin syrups, doubling as a small crafts shop.'),
  place('rotterdam-cafe-4', 'rotterdam', 'cafe', 'âme cafe and concept store', 'Eendrachtsweg 19, 3012 LB Rotterdam', '부티크 호텔 아메 1층의 카페 겸 콘셉트 스토어. 일본·북유럽풍 공간에서 쇼쿠닌 커피를 냅니다.', 'Café and concept store on the ground floor of the boutique Hotel âme, serving Shokunin coffee in a Japanese-Scandinavian space.'),
  place('rotterdam-cafe-5', 'rotterdam', 'cafe', 'Nice', 'Hoogstraat 42, 3011 PE Rotterdam', '유리로 된 작은 모퉁이 커피 바. 샌드위치와 페이스트리를 내고 카드 결제만 받습니다.', 'Small glass-walled corner coffee bar with sandwiches and pastries; card only.'),

  place('rotterdam-korean-1', 'rotterdam', 'korean', 'Seoul Sista', 'Hartmansstraat 31, 3012 VA Rotterdam', '테이블에 그릴이 있는 한국식 바비큐 식당. 한국식 치킨과 탕도 냅니다.', 'Korean barbecue with grills built into the tables, plus Korean fried chicken and soups.'),
  place('rotterdam-korean-2', 'rotterdam', 'korean', 'Bap Boss', 'Goudsesingel 26, 3011 KB Rotterdam', '구시가 하우드세싱얼의 작은 한식당.', 'Small Korean restaurant on the Goudsesingel.'),

  // —— the-hague ——
  place('the-hague-fine_dining-1', 'the-hague', 'fine_dining', "Calla's", 'Laan van Roos en Doorn 51A, 2514 BC Den Haag', '19세기 저택의 창작 프렌치 레스토랑. 근처 텃밭 채소를 쓰고 미쉐린 1스타입니다.', 'Creative French restaurant in a 19th-century house using vegetables from a nearby garden; one MICHELIN star.', { michelin: 'star1' }),
  place('the-hague-fine_dining-2', 'the-hague', 'fine_dining', 'De Basiliek', 'Korte Houtstraat 4a, 2511 CD Den Haag', '시내의 미쉐린 빕 구르망 레스토랑. 일요일은 쉽니다.', 'Michelin Bib Gourmand restaurant in the centre; closed Sundays.', { michelin: 'bib' }),
  place('the-hague-fine_dining-3', 'the-hague', 'fine_dining', 'Restaurant Suus', 'Plesmanweg 701, 2597 JG Den Haag', 'KLM 창업자의 아내 이름을 딴 호텔 더 플레스만의 레스토랑. 국제 요리를 하루 종일 냅니다.', 'Restaurant at Hotel De Plesman named after the KLM founder\'s wife, serving international dishes all day.'),
  place('the-hague-fine_dining-4', 'the-hague', 'fine_dining', 'Catch by Simonis', 'Dr. Lelykade 43, 2583 CL Den Haag', '스헤베닝언 항구의 해산물 레스토랑. 미쉐린 가이드에 실려 있습니다.', 'Seafood restaurant in Scheveningen harbour, listed in the MICHELIN Guide.'),

  place('the-hague-bakery-1', 'the-hague', 'bakery', 'Bartine Bakery & Market', 'Piet Heinstraat 72, 2518 CK Den Haag', '카페 바르티너의 자매 빵집. 포장해 가는 빵과 아침 메뉴를 냅니다.', 'Sister bakery of Café Bartine, with takeaway bakes and breakfast.'),
  place('the-hague-bakery-2', 'the-hague', 'bakery', 'Philippe Galerne Patisserie', 'Aert van der Goesstraat 24, 2582 AK Den Haag', '일요일 아침마다 줄 서는 프랑스 빵집. 바게트와 에클레어가 인기입니다.', 'French bakery with Sunday-morning queues; baguettes and éclairs are favourites.'),
  place('the-hague-bakery-3', 'the-hague', 'bakery', 'Boulangerie Michel', 'Oude Molstraat 17, Den Haag', '프랑스식 빵집 체인의 헤이그 지점. 아몬드 크루아상과 키슈를 냅니다.', 'The Hague branch of a French bakery chain, with almond croissants and quiche.'),

  place('the-hague-cafe-1', 'the-hague', 'cafe', 'Kaafi Specialty Coffee & Brunch Bar', 'Prinsestraat 25, 2513 CA Den Haag', '런던 커피 문화에서 영감을 받은 스페셜티 커피·브런치 카페. 주말엔 예약을 권합니다.', 'Specialty coffee and brunch café inspired by London coffee culture; book at weekends.'),
  place('the-hague-cafe-3', 'the-hague', 'cafe', 'The Coffee Company', 'Korte Poten 21, Den Haag', '네덜란드 커피 체인의 시내 지점.', 'City-centre branch of a Dutch coffee chain.'),

  place('the-hague-korean-1', 'the-hague', 'korean', 'Seoul Garden', 'Bagijnestraat 8, 2511 CK Den Haag', '한국인 가족이 운영하는 작은 골목의 한식당. 바비큐 세트와 직접 담근 김치를 냅니다.', 'Korean family-run restaurant in a small alley, with barbecue sets and homemade kimchi.', { image: '/places/the-hague-korean-1.jpg' }),

  // —— utrecht ——
  place('utrecht-fine_dining-1', 'utrecht', 'fine_dining', 'Karel 5', 'Geertebolwerk 1, 3511 XA Utrecht', '옛 수도원을 고친 그랜드 호텔 카럴 V 안의 미쉐린 1스타 레스토랑. 수~토 저녁에 엽니다.', 'One-Michelin-star restaurant in the Grand Hotel Karel V, a converted monastery; Wednesday to Saturday evenings.', { michelin: 'star1', image: '/places/utrecht-fine_dining-1.jpg' }),
  place('utrecht-fine_dining-2', 'utrecht', 'fine_dining', 'Restaurant Blauw Utrecht', 'Springweg 64, 3511 VT Utrecht', '라이스타펠(인도네시아식 여러 접시 정찬)로 알려진 인도네시아 레스토랑. 비건 라이스타펠도 있습니다.', 'Indonesian restaurant known for its rijsttafel, also offered in a vegan version.'),
  place('utrecht-fine_dining-3', 'utrecht', 'fine_dining', 'De Rechtbank', 'Korte Nieuwstraat 14, 3512 NM Utrecht', '옛 법원 건물 코트 호텔의 레스토랑. 아침부터 저녁까지 지역·국제 요리를 냅니다.', 'Restaurant in the former courthouse of the Court Hotel, serving local and international food from breakfast to dinner.', { image: '/places/utrecht-fine_dining-3.jpg' }),
  place('utrecht-fine_dining-4', 'utrecht', 'fine_dining', 'Broei', 'Oosterkade 24, 3582 AV Utrecht', '운하변 테라스가 있는 완전 채식 레스토랑. 빵집도 겸하고 현금은 받지 않습니다.', 'Fully plant-based restaurant with a canal-side terrace and its own bakery; no cash.'),

  place('utrecht-bakery-1', 'utrecht', 'bakery', 'Bond & Smolders', 'Lijnmarkt 9, 3511 KE Utrecht', '에클레어와 레몬 머랭 파이가 인기인 아르티장 제과점. 일·월요일은 쉽니다.', 'Artisan patisserie known for éclairs and lemon meringue pie; closed Sundays and Mondays.'),
  place('utrecht-bakery-2', 'utrecht', 'bakery', 'Bakkerswinkel Utrecht', 'Wittevrouwenstraat 2, 3512 CT Utrecht', '1730년부터 빵을 구워 온 자리의 빵집 겸 런치룸. 운하 옆 아치형 지하실이 있습니다.', 'Bakery-lunchroom on a site baking bread since 1730, with an arched canal-side cellar.'),

  place('utrecht-cafe-1', 'utrecht', 'cafe', 'The Village Coffee & Music', 'Voorstraat 44-46, 3512 AP Utrecht', '2010년 문을 연 커피 바. 록 음악과 라이브 공연이 있고 바나나 브레드가 인기입니다.', 'Coffee bar opened in 2010 with rock music and live gigs; the banana bread is popular.'),
  place('utrecht-cafe-2', 'utrecht', 'cafe', 'Koffie Leute', 'Westerkade 30, 3511 HC Utrecht', '필터 커피를 앞세운 운하변 커피 공간. 보드게임과 거실 같은 분위기가 있습니다.', 'Canal-side coffee spot focused on filter coffee, with board games and a living-room feel.'),
  place('utrecht-cafe-3', 'utrecht', 'cafe', 'Café Ledig Erf', 'Tolsteegbrug 3, 3511 ZN Utrecht', '1978년부터 이 이름을 쓴 운하변 펍. 나무 그늘 아래 넓은 테라스와 벨기에 맥주가 있습니다.', 'Canal-side pub under this name since 1978, with a big tree-shaded terrace and Belgian beers.'),


  // —— haarlem ——
  place('haarlem-fine_dining-1', 'haarlem', 'fine_dining', 'Restaurant Brick', 'Breestraat 24-26, 2011 ZZ Haarlem', '몰레나르 형제가 운영하는 레스토랑. 프랑스 요리를 바탕으로 석 달마다 메뉴가 바뀝니다.', 'Restaurant run by the Moolenaar brothers, French-based with a menu that changes every three months.'),
  place('haarlem-fine_dining-2', 'haarlem', 'fine_dining', 'De Lachende Javaan', 'Frankestraat 25-27, 2011 HT Haarlem', '라이스타펠(인도네시아식 여러 접시 정찬)로 알려진 인도네시아 레스토랑. 월요일은 쉽니다.', 'Indonesian restaurant known for its rijsttafel; closed Mondays.'),
  place('haarlem-fine_dining-3', 'haarlem', 'fine_dining', 'Jopenkerk', 'Gedempte Voldersgracht 2, 2011 WD Haarlem', '1910년 교회를 개조한 요펜 양조장 겸 카페·레스토랑. 양조 과정을 보며 식사할 수 있습니다.', 'Jopen brewery, café and restaurant in a converted 1910 church, where you can watch the brewing.', { image: '/places/haarlem-fine_dining-3.jpg' }),
  place('haarlem-fine_dining-4', 'haarlem', 'fine_dining', 'Ratatouille Food & Wine', 'Spaarne 96, Haarlem', '스파르너 강변의 미쉐린 1스타 프랑스 레스토랑. 월·화요일은 쉽니다.', 'One-Michelin-star French restaurant on the Spaarne; closed Mondays and Tuesdays.', { michelin: 'star1' }),

  place('haarlem-bakery-1', 'haarlem', 'bakery', 'Artesano Bakkerij', 'Tempeliersstraat 28, 2012 EE Haarlem', '하를레메르하우트 지구의 빵집 겸 카페. 포카차와 파이를 커피와 함께 냅니다.', 'Bakery-café in the Haarlemmerhout quarter with focaccia and pies alongside coffee.'),
  place('haarlem-bakery-2', 'haarlem', 'bakery', 'Boulangerie Oscar', 'Grote Houtstraat 156, 2011 SX Haarlem', '유기농 밀가루와 직접 키운 사워도우로 굽는 빵집.', 'Bakery baking with organic flour and its own sourdough.'),

  place('haarlem-cafe-1', 'haarlem', 'cafe', 'Grand Café Brinkmann', 'Grote Markt 13, 2011 RC Haarlem', '1881년부터 그로테 마르크트에 자리한 그랜드 카페. 성 바보 교회가 보이는 넓은 테라스가 있습니다.', 'Grand café on the Grote Markt since 1881, with a big terrace facing St Bavo\'s Church.'),
  place('haarlem-cafe-2', 'haarlem', 'cafe', 'Anne&Max Haarlem', 'Grote Markt 5, 2011 RC Haarlem', '그로테 마르크트의 아침·브런치 체인 카페 플래그십. 넓은 테라스가 있습니다.', 'Flagship of a breakfast and brunch café chain on the Grote Markt, with a large terrace.'),
  place('haarlem-cafe-3', 'haarlem', 'cafe', 'Mica Coffee Bar', 'Kleine Houtstraat 103, 2011 DK Haarlem', '자매가 운영하는 북유럽풍 커피 바. 직접 만든 페이스트리와 비건 메뉴가 있습니다.', 'Scandinavian-style coffee bar run by two sisters, with homemade pastries and vegan options.'),

  // —— delft ——
  place('delft-fine_dining-1', 'delft', 'fine_dining', 'Restaurant Azurite', 'Houttuinen 2, 2611 DX Delft', '델프트의 미쉐린 2스타 레스토랑(2026년 승급).', 'Two-Michelin-star restaurant in Delft (promoted in 2026).', { michelin: 'star2' }),
  place('delft-fine_dining-2', 'delft', 'fine_dining', 'Novaela', 'Bagijnhof 118, 2611 AS Delft', '델프트의 미쉐린 1스타 레스토랑. 월·화요일은 쉽니다.', 'One-Michelin-star restaurant in Delft; closed Mondays and Tuesdays.', { michelin: 'star1' }),
  place('delft-fine_dining-3', 'delft', 'fine_dining', 'Restaurant Le Vieux Jean', 'Heilige Geestkerkhof 3, 2611 HP Delft', '아우더 케르크 근처의 미쉐린 빕 구르망 레스토랑. 수~토요일에 엽니다.', 'Michelin Bib Gourmand restaurant near the Oude Kerk; Wednesday to Saturday.', { michelin: 'bib', image: '/places/delft-fine_dining-3.jpg' }),

  place('delft-bakery-2', 'delft', 'bakery', 'City Bakery Diamond Ring', 'Choorstraat 9, 2611 JE Delft', '1584년 오라녜 공 암살범이 묵었던 여관 자리의 빵집. 시나몬롤과 마지판이 인기이고 포장 전문입니다.', 'Takeaway bakery in the former inn where the Prince of Orange\'s assassin stayed in 1584; cinnamon rolls and marzipan are popular.'),
  place('delft-bakery-3', 'delft', 'bakery', 'Boulangerie Michel Delft', 'Oude Kerkstraat 4d, 2611 EZ Delft', '프랑스인 주인이 운영하는 빵집. 프랑스 빵과 타르트, 키슈를 냅니다.', 'French-run bakery with French bread, tartlets and quiche.'),
  place('delft-bakery-4', 'delft', 'bakery', 'Bombina Bakehouse', 'Hippolytusbuurt 29A, 2611 HP Delft', '델프트 중심의 베이크하우스. 매일 아침 페이스트리를 굽습니다.', 'Bakehouse in central Delft, baking pastries every morning.'),
  place('delft-bakery-5', 'delft', 'bakery', 'The English Bakery', 'Molstraat 19-A, 2611 EN Delft', '숨은 골목의 영국식 빵집. 스콘과 파이를 내고 목~토요일만 엽니다.', 'English-style bakery on a hidden lane with scones and pies; open Thursday to Saturday only.'),

  place('delft-cafe-1', 'delft', 'cafe', 'Kek - De koffiebar van Delft', 'Voldersgracht 27, 2611 EV Delft', '스페셜티 커피와 아침 식사로 인기인 커피 바. 주말 브런치는 붐빕니다.', 'Coffee bar popular for specialty coffee and breakfast; busy at weekend brunch.'),
  place('delft-cafe-2', 'delft', 'cafe', 'De Waag', 'Markt 11, 2611 GP Delft', '마르크트 광장의 옛 계량소 건물 카페 겸 레스토랑. 네덜란드 요리와 테라스가 있습니다.', 'Café-restaurant in the old weigh house on the Markt, with Dutch classics and a terrace.', { image: '/places/delft-cafe-2.jpg' }),
  place('delft-cafe-3', 'delft', 'cafe', 'Neef Rob', 'Choorstraat 34, 2611 JG Delft', '커피·차·초콜릿 가게 겸 시음 카페. 2020년 델프트·남홀란트 최고의 커피숍에 뽑혔습니다.', 'Coffee, tea and chocolate shop with a tasting room; voted best coffee shop in Delft and South Holland in 2020.'),

  // —— maastricht ——
  place('maastricht-fine_dining-1', 'maastricht', 'fine_dining', 'Château Neercanne', 'Von Dopfflaan 10, 6213 NG Maastricht', '계단식 정원이 있는 성 안의 미쉐린 1스타 레스토랑. 월·화요일은 쉽니다.', 'One-Michelin-star restaurant in a château with terraced gardens; closed Mondays and Tuesdays.', { michelin: 'star1', image: '/places/maastricht-fine_dining-1.jpg' }),
  place('maastricht-fine_dining-2', 'maastricht', 'fine_dining', 'Beluga Loves You', 'Plein 1992 12, 6221 JP Maastricht', '셰프 세르베 틸만의 미쉐린 1스타 창작 요리 레스토랑. 수~토요일에 엽니다.', 'One-Michelin-star creative restaurant of chef Servais Tilman; Wednesday to Saturday.', { michelin: 'star1' }),
  place('maastricht-fine_dining-3', 'maastricht', 'fine_dining', 'Tout à Fait', 'St-Bernardusstraat 16, 6211 HL Maastricht', '2002년부터 미쉐린 1스타를 지켜 온 구시가지의 프랑스 레스토랑. 월~수요일은 쉽니다.', 'Old-town French restaurant holding one Michelin star since 2002; closed Monday to Wednesday.', { michelin: 'star1' }),
  place('maastricht-fine_dining-4', 'maastricht', 'fine_dining', 'Petit Bonheur', 'Achter de Molens 2, 6211 JC Maastricht', '예케르 지구 안뜰 호텔의 레스토랑. 프랑스·이탈리아 요리와 와인 셀러가 있습니다.', 'Restaurant of a courtyard hotel in the Jeker Quarter, with French and Italian dishes and a wine cellar.'),

  place('maastricht-bakery-1', 'maastricht', 'bakery', 'Bisschopsmolen', 'Stenenbrug 3, 6211 HP Maastricht', '11세기 기록이 있는 물레방아 옆 빵집. 스펠트 밀로 빵과 플라이를 굽습니다.', 'Bakery beside a water mill recorded since the 11th century, baking bread and vlaai with spelt.', { image: '/places/maastricht-bakery-1.jpg' }),
  place('maastricht-bakery-4', 'maastricht', 'bakery', 'Ginnies', 'Brusselsestraat 95, 6211 PG Maastricht', '북미식 컵케이크·쿠키·케이크 가게. 포장 전문이고 일·월요일은 쉽니다.', 'North American-style cupcake, cookie and cake shop; takeaway only, closed Sundays and Mondays.'),
  place('maastricht-bakery-5', 'maastricht', 'bakery', "Koekmakerij 't Keukske", 'Nieuwstraat 24, 6211 SR Maastricht', '갓 구운 마스트리흐트식 쿠키를 네 가지 맛으로 파는 작은 가게. 림뷔르흐 재료를 씁니다.', 'Tiny shop selling freshly baked Maastricht cookies in four flavours, made with Limburg ingredients.'),

  place('maastricht-cafe-1', 'maastricht', 'cafe', 'Coffeelovers Dominicanen', 'Dominicanerkerkstraat 1, 6211 CZ Maastricht', '13세기 도미니크회 성당을 개조한 서점 안의 카페. 옛 성가대석 자리에 있습니다.', 'Café in the former choir of a 13th-century Dominican church now housing a bookshop.'),
  place('maastricht-cafe-2', 'maastricht', 'cafe', 'Café Zuid', 'Plein 1992 15, 6221 JP Maastricht', '옛 도자기 공장 건물의 강변 카페. 마스강이 보이는 테라스가 있습니다.', 'Riverside café in a former earthenware factory, with a terrace over the Maas.', { image: '/places/maastricht-cafe-2.jpg' }),

  // —— giethoorn ——
  place('giethoorn-fine_dining-1', 'giethoorn', 'fine_dining', 'Restaurant De Lindenhof', 'Beulakerweg 77, 8355 AC Giethoorn', '기트호른의 미쉐린 2스타 레스토랑. 수~일요일에 엽니다.', 'Two-Michelin-star restaurant in Giethoorn; Wednesday to Sunday.', { michelin: 'star2' }),
  place('giethoorn-fine_dining-2', 'giethoorn', 'fine_dining', "Restaurant 't Achterhuus", 'Dominee T.O. Hylkemaweg 43, 8355 CE Giethoorn', '운하변 레스토랑. 노을 전망이 좋습니다.', 'Canal-side restaurant with fine sunset views.'),

  place('giethoorn-cafe-1', 'giethoorn', 'cafe', 'Grand Café Fanfare', 'Binnenpad 68, 8355 BV Giethoorn', '1958년 영화 \'판파레\' 촬영지인 운하변 카페. 맥주 종류가 많고 일요일은 쉽니다.', 'Canal-side café where the 1958 film Fanfare was shot, with a big beer list; closed Sundays.'),
  place('giethoorn-cafe-2', 'giethoorn', 'cafe', 'Grand Café Henri Willig', 'Dominee T.O. Hylkemaweg 39, 8355 CD Giethoorn', '치즈 회사 앙리 빌리흐의 운하변 카페. 치즈 요리와 보트 투어가 있습니다.', 'Canal-side café of cheesemaker Henri Willig, with cheese dishes and boat tours.'),
  place('giethoorn-cafe-3', 'giethoorn', 'cafe', 'Café-Restaurant Smit', 'Zuiderpad 58, 8355 CC Giethoorn', '마을 운하변의 카페 겸 레스토랑. 보트 대여와 테라스가 있습니다.', 'Café-restaurant on the village canal with boat hire and a terrace.'),

]
