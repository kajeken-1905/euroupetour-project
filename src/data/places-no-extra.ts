import { place } from './placeFactory'
import type { Place } from '../types'

export const placesNOExtra: Place[] = [
  // —— bergen ——
  place('bergen-fine_dining-1', 'bergen', 'fine_dining', 'Restaurant 1877', 'Vetrlidsallmenningen 2, Bergen', '1876년 지은 옛 육류 시장 건물의 레스토랑. 노르웨이 전통에 뿌리를 둔 5코스 메뉴를 냅니다.', 'Restaurant in the 1876 meat-market building, serving a five-course menu rooted in Norwegian tradition.'),
  place('bergen-fine_dining-3', 'bergen', 'fine_dining', 'Lysverket', 'Rasmus Meyers Allé 9, 5015 Bergen', 'KODE 미술관 건물 안의 미쉐린 1스타 레스토랑. 화~토 저녁에 엽니다.', 'One-Michelin-star restaurant in the KODE art museum building; Tuesday to Saturday evenings.', { michelin: 'star1', image: '/places/bergen-fine_dining-3.jpg' }),
  place('bergen-fine_dining-4', 'bergen', 'fine_dining', 'Gaptrast', 'Baneveien 16, 5010 Bergen', '서부 노르웨이 식재료로 요리하는 미쉐린 2스타 레스토랑(2026년 승급). 수~토 저녁에 엽니다.', 'Two-Michelin-star restaurant cooking with western Norwegian produce (promoted in 2026); Wednesday to Saturday evenings.', { michelin: 'star2' }),

  place('bergen-bakery-1', 'bergen', 'bakery', 'Godt Brød', 'Marken 1, 5017 Bergen', '1995년 베르겐에서 시작한 유기농 빵집 체인의 마르켄 지점. 옛 낙농장 건물에 있습니다.', 'Marken branch of the organic bakery chain founded in Bergen in 1995, in a former dairy.'),
  place('bergen-bakery-3', 'bergen', 'bakery', 'Donutbakeren', 'C. Sundts gate 26, 5004 Bergen', '주인이 직접 굽는 수제 도넛 가게. 라즈베리·오레오·레몬 커드 맛이 있습니다.', 'Owner-run shop making homemade donuts, with flavours like raspberry, Oreo and lemon curd.'),
  place('bergen-bakery-4', 'bergen', 'bakery', 'Godt Brød Fløyen', 'Vetrlidsallmenningen 19, 5014 Bergen', '플뢰위엔 케이블카 근처의 유기농 빵집 체인 지점. 샌드위치를 골라 만들 수 있습니다.', 'Branch of the organic bakery chain near the Fløyen funicular, with build-your-own sandwiches.'),
  place('bergen-bakery-5', 'bergen', 'bakery', 'Baker Brun', 'Klostergaten 2, 5005 Bergen', '1893년부터 이어온 베르겐 빵집 체인의 클로스테레 지점. 계피빵 스킬링스볼레가 대표입니다.', 'Klosteret branch of a Bergen bakery chain dating from 1893, famous for its skillingsbolle cinnamon bun.', { image: '/places/bergen-bakery-5.jpg' }),

  place('bergen-cafe-1', 'bergen', 'cafe', 'Det Lille Kaffekompaniet', 'Nedre Fjellsmauet 2, 5018 Bergen', '1990년대 대학생들이 시작한 베르겐에서 가장 작은 커피숍. 플뢰위엔 케이블카 바로 위 골목에 있습니다.', 'Bergen\'s smallest coffee shop, started by students in the 1990s, in a lane just above the Fløyen funicular.', { image: '/places/bergen-cafe-1.jpg' }),
  place('bergen-cafe-2', 'bergen', 'cafe', 'Café Opera', 'Engen 18, 5011 Bergen', '약 35년 전 베르겐에 카푸치노를 처음 들여온 카페. 공연·클럽 행사가 열립니다.', 'Café that brought the cappuccino to Bergen some 35 years ago, also hosting gigs and club nights.', { image: '/places/bergen-cafe-2.jpg' }),
  place('bergen-cafe-3', 'bergen', 'cafe', 'Blom', 'John Lunds plass 1, Fosswinckelsgate, 5007 Bergen', '2011년 대학가에 문을 연 작은 커피숍. V60 필터 커피를 냅니다.', 'Small coffee shop opened in 2011 in the university district, serving V60 filter coffee.'),

  place('bergen-korean-1', 'bergen', 'korean', 'Kogi', 'Kong Oscars gate 29, Bergen', '2020년 문을 연 한국식 바비큐 식당. 푸드트럭으로 시작했고 닭강정이 인기입니다.', 'Korean barbecue restaurant opened in 2020 after starting as a food truck; dakgangjeong is a favourite.'),

  // —— tromso ——
  place('tromso-fine_dining-1', 'tromso', 'fine_dining', 'Restaurant Smak', 'Stakkevollvegen 39, 9010 Tromsø', '2010년부터 셰프 부부가 운영하는 22석 파인다이닝. 북노르웨이 식재료로 요리하고 수~토요일 저녁만 엽니다.', '22-seat fine-dining room run by a chef couple since 2010, cooking with Northern Norwegian produce; dinner Wednesday to Saturday.'),
  place('tromso-fine_dining-2', 'tromso', 'fine_dining', 'Hildr', 'Skippergata 11, 9008 Tromsø', '1833년 건물의 레스토랑. 북노르웨이 식재료에 국제 풍미를 더하고 화~토요일 저녁만 엽니다.', 'Restaurant in an 1833 building mixing Northern Norwegian produce with international flavours; dinner Tuesday to Saturday.'),
  place('tromso-fine_dining-3', 'tromso', 'fine_dining', 'Fiskekompaniet', 'Killengrens gate 6, 9008 Tromsø', '항구 옆 해산물 레스토랑. 저녁엔 3·5코스 메뉴와 굴·캐비아를 냅니다.', 'Harbourside seafood restaurant with three- and five-course dinner menus, oysters and caviar.'),

  place('tromso-bakery-1', 'tromso', 'bakery', 'Vervet Bakeri', 'Gjøastredet 1, 9008 Tromsø', '베르베트 신시가지의 동네 빵집. 빵 굽는 모습을 볼 수 있습니다.', 'Neighbourhood bakery in the new Vervet district where you can watch the baking.'),
  place('tromso-bakery-2', 'tromso', 'bakery', 'Backstube Tromsø', 'Storgata 70, 9008 Tromsø', '시내 중심의 셀프서비스 빵집 체인 지점. 아침·점심용 빵과 페이스트리를 냅니다.', 'Self-service bakery chain branch in the centre, with bread and pastries for breakfast and lunch.'),

  place('tromso-cafe-1', 'tromso', 'cafe', 'Risø', 'Strandgata 32, 9008 Tromsø', '시내 중심의 커피 바. 직접 구운 시나몬롤이 유명하고 일요일은 쉽니다.', 'Central coffee bar famous for its homemade cinnamon rolls; closed Sundays.'),
  place('tromso-cafe-2', 'tromso', 'cafe', 'Kaffebønna', 'Stortorget 3, 9008 Tromsø', '1998년 문을 연 트롬쇠 커피 체인의 본점. 항구가 보이는 창가와 스콜레브뢰가 있습니다.', 'Main branch of a Tromsø coffee chain founded in 1998, with harbour-view windows and skolebrød.', { image: '/places/tromso-cafe-2.jpg' }),

  // —— stavanger ——
  place('stavanger-fine_dining-1', 'stavanger', 'fine_dining', 'RE-NAA', 'Nordbøgata 8, 4006 Stavanger', '스타방에르의 미쉐린 3스타 레스토랑. 수~토 저녁에 엽니다.', 'Three-Michelin-star restaurant in Stavanger; Wednesday to Saturday evenings.', { michelin: 'star3', image: '/places/stavanger-fine_dining-1.jpg' }),
  place('stavanger-fine_dining-2', 'stavanger', 'fine_dining', 'Sabi Omakase', 'Pedersgata 38, 4013 Stavanger', '작은 오마카세 카운터의 미쉐린 1스타 스시 레스토랑. 수~토 저녁에 엽니다.', 'Small omakase counter with one Michelin star; Wednesday to Saturday evenings.', { michelin: 'star1' }),
  place('stavanger-fine_dining-3', 'stavanger', 'fine_dining', 'Fisketorget Stavanger', 'Strandkaien 37, 4005 Stavanger', '항구 앞 생선 가게 겸 레스토랑. 생선 수프와 새우 샌드위치가 대표입니다.', 'Harbourside fish market and restaurant; fish soup and the shrimp sandwich are the classics.'),
  place('stavanger-fine_dining-4', 'stavanger', 'fine_dining', 'Matbaren Bistro by Renaa', 'Steinkargata 10, Breitorget, 4006 Stavanger', '레나 그룹의 프랑스식 비스트로. 지역 식재료로 요리합니다.', 'French-style bistro from the Renaa group, cooking with local produce.'),

  place('stavanger-bakery-1', 'stavanger', 'bakery', 'Kanelsnurren Verksgata', 'Verksgata 24, 4013 Stavanger', '2013년 제빵사 부부가 시작한 빵집 겸 카페. 시나몬롤이 대표입니다.', 'Bakery-café started in 2013 by a master baker and his partner, known for cinnamon rolls.'),
  place('stavanger-bakery-3', 'stavanger', 'bakery', 'Rosenkildehaven Bageri', 'Bakergata 9, 4013 Stavanger', '1770년대 옛 빵집 건물의 장작 화덕 빵집. 전기 없이 굽고 빵 하나에 사흘이 걸립니다.', 'Wood-fired bakery in a 1770s bakehouse, baking without electricity; each loaf takes three days.'),
  place('stavanger-bakery-4', 'stavanger', 'bakery', 'Molinå Bakery', 'Verksgata 17A, 4013 Stavanger', '직접 밀가루를 빻는 사워도우 빵집 겸 카페. 엠파나다와 시나몬번이 있고 월·화요일은 쉽니다.', 'Sourdough bakery-café that mills its own flour, with empanadas and cinnamon buns; closed Mondays and Tuesdays.'),

  place('stavanger-cafe-1', 'stavanger', 'cafe', 'Kokko Kaffebar', 'Østervåg 43, 4006 Stavanger', '직접 원두를 볶는 3층 커피숍. 유리 천장 너머로 로스터리가 보입니다.', 'Three-floor coffee shop roasting its own beans, with a glass ceiling onto the roastery.'),
  place('stavanger-cafe-2', 'stavanger', 'cafe', 'Bøker og Børst', 'Øvre Holmegate 32, 4006 Stavanger', '책을 사거나 바꿀 수 있는 카페 겸 바. 뒷마당에서 보드게임을 합니다.', 'Café-bar full of books to buy or swap, with board games in the back garden.'),
  place('stavanger-cafe-3', 'stavanger', 'cafe', 'Micro Kaffi', 'Nytorget 17, 4013 Stavanger', '로갈란드 미술관 안의 작은 스페셜티 커피 바. 필터 커피가 대표입니다.', 'Tiny specialty coffee bar inside the Rogaland Art Centre, known for filter coffee.'),

  // —— trondheim ——
  place('trondheim-fine_dining-1', 'trondheim', 'fine_dining', 'Fagn', 'Ørjaveita 4, 7010 Trondheim', '트뢰넬라그 식재료로 테이스팅 메뉴를 내는 미쉐린 1스타 레스토랑.', 'One-Michelin-star tasting-menu restaurant cooking with Trøndelag produce.', { michelin: 'star1' }),
  place('trondheim-fine_dining-2', 'trondheim', 'fine_dining', 'Speilsalen', 'Dronningens gate 5, 7011 Trondheim', '브리타니아 호텔 안의 미쉐린 1스타 다이닝룸. 수~토 저녁에 엽니다.', 'One-Michelin-star dining room in the Britannia Hotel; Wednesday to Saturday evenings.', { michelin: 'star1' }),
  place('trondheim-fine_dining-3', 'trondheim', 'fine_dining', 'Søstrene Karlsen', 'TMV-kaia 25, 7042 Trondheim', '2004년 문을 연 부둣가 레스토랑 겸 바. 해산물 요리와 옥상 테라스가 있습니다.', 'Waterfront restaurant and bar opened in 2004, with seafood dishes and a rooftop terrace.'),
  place('trondheim-fine_dining-4', 'trondheim', 'fine_dining', 'Baklandet Skydsstation', 'Øvre Bakklandet 33, Trondheim', '옛 건물을 복원한 카페 겸 레스토랑. 순록 스튜와 생선 수프, 아쿠아비트가 다양합니다.', 'Café-restaurant in a restored old building, with reindeer stew, fish soup and a big aquavit list.', { image: '/places/trondheim-fine_dining-4.jpg' }),

  place('trondheim-bakery-1', 'trondheim', 'bakery', 'Hevd Bakeri & Pizzeria', 'Kongens gate 18, 7011 Trondheim', '낮에는 사워도우 빵집, 오후부터는 화덕 피자집이 되는 가게.', 'Sourdough bakery by day that turns into a stone-oven pizzeria in the afternoon.'),
  place('trondheim-bakery-2', 'trondheim', 'bakery', 'Rosenborg Bakeri', 'Rosenborg gate 8-10, 7014 Trondheim', '1902년부터 4대째 이어온 트론헤임 빵집 체인. 원래 빵집 자리에 본점이 있습니다.', 'Trondheim bakery chain run by four generations since 1902, with its main shop on the original site.', { image: '/places/trondheim-bakery-2.jpg' }),
  place('trondheim-bakery-5', 'trondheim', 'bakery', 'ISAK Bakeri', 'Kongens gate 2, 7011 Trondheim', '레스토랑 셀란라의 자매 빵집. 고대 곡물로 빵을 굽고 아침엔 창구에서 빵을 팝니다.', 'Sister bakery of restaurant Sellanraa, baking with ancient grains and selling bread from a window in the morning.'),


  // —— alesund ——
  place('alesund-fine_dining-1', 'alesund', 'fine_dining', 'Apotekergata No. 5', 'Apotekergata 5, 6004 Ålesund', '1904년 부두 창고 건물의 모던 비스트로. 순뫼레 지역 식재료를 쓰고 여름엔 떠 있는 바지선에서 식사합니다.', 'Modern bistro in a 1904 waterfront warehouse using Sunnmøre produce, with summer dining on a floating barge.'),
  place('alesund-fine_dining-2', 'alesund', 'fine_dining', 'XL Diner', 'Skaregata 1B, 6002 Ålesund', '유럽에서 손꼽히는 규모의 바칼라오(염장대구) 레스토랑. 역사적인 부두에 있습니다.', 'One of Europe\'s largest bacalao (clipfish) restaurants, on a historic quay.'),

  // —— flam ——
  place('flam-fine_dining-1', 'flam', 'fine_dining', 'Ægir Gastropub', 'A-Feltvegen 19, 5743 Flåm', '9m 벽난로가 있는 바이킹풍 양조 펍. 다섯 가지 요리와 맥주를 짝지은 플레이트가 대표입니다.', 'Viking-style brewpub with a 9-metre fireplace; the signature plank pairs five dishes with five beers.'),
  place('flam-fine_dining-2', 'flam', 'fine_dining', 'Restaurant Arven', 'Nedre Fretheim 7, Fretheim Hotel, 5743 Flåm', '프레트하임 호텔 2층의 레스토랑. 피오르 전망이 있고 메뉴가 계절마다 바뀝니다.', 'Restaurant on the second floor of the Fretheim Hotel with fjord views and a seasonal menu.'),

  // —— alesund: bakeries and cafés (2026-11-04) ——
  place('alesund-bakery-1', 'alesund', 'bakery', 'Walderhaug Bakery and Confectioner', 'Tollbugata 6, 6002 Ålesund', '시내 중심의 빵집 겸 제과점.', 'Bakery and confectioner in the town centre.'),
  place('alesund-cafe-1', 'alesund', 'cafe', 'Racoon Coffee', 'Kongens gate 6, 6002 Ålesund', '시내 중심의 커피숍.', 'Coffee shop in the town centre.'),
  place('alesund-cafe-2', 'alesund', 'cafe', 'Dråpe Ålesund Kaffehus', 'Storgata 4, 6002 Ålesund', '시내 중심의 카페.', 'Café in the town centre.'),

  // —— flam: bakeries and cafés (2026-11-04) ——
  place('flam-cafe-1', 'flam', 'cafe', 'Coffee & Eats', 'Flåm Market, 5743 Flåm', '플롬역 앞 상가의 커피·샌드위치 가게.', 'Coffee and sandwich shop in the shopping arcade by Flåm station.'),

  // —— fredrikstad: restaurants, bakeries and cafés (2026-11-13) ——
  place('fredrikstad-fine_dining-1', 'fredrikstad', 'fine_dining', 'Restaurant Koriander Matværste', 'Jens Wilhelmsens gate 7, Fredrikstad', '프레드릭스타드의 레스토랑. 구글 지도 평점 4.9.', 'Restaurant in Fredrikstad. Rated 4.9 on Google Maps.'),
  place('fredrikstad-fine_dining-2', 'fredrikstad', 'fine_dining', 'Restaurant Slippen', 'Verkstedveien 12, Fredrikstad', '프레드릭스타드의 강변 레스토랑. 구글 지도 평점 4.6.', 'Waterfront restaurant in Fredrikstad. Rated 4.6 on Google Maps.'),
  place('fredrikstad-fine_dining-3', 'fredrikstad', 'fine_dining', 'Elina House', 'Farmanns gate 1, Fredrikstad', '프레드릭스타드의 레스토랑. 구글 지도 평점 4.8.', 'Restaurant in Fredrikstad. Rated 4.8 on Google Maps.'),
  place('fredrikstad-fine_dining-4', 'fredrikstad', 'fine_dining', 'Restaurant Mother India', 'Storgata 20, Fredrikstad', '프레드릭스타드의 인도 요리 식당. 구글 지도 평점 4.5.', 'Indian restaurant in Fredrikstad. Rated 4.5 on Google Maps.'),
  place('fredrikstad-bakery-1', 'fredrikstad', 'bakery', 'Odds konditori', 'Farmanns gate 3, Fredrikstad', '프레드릭스타드의 제과점. 구글 지도 평점 4.6.', 'Pâtisserie in Fredrikstad. Rated 4.6 on Google Maps.'),
  place('fredrikstad-bakery-2', 'fredrikstad', 'bakery', 'Bakfickan', 'Olaf M. Holwechs gate 2, Fredrikstad', '프레드릭스타드의 빵집. 구글 지도 평점 4.6.', 'Bakery in Fredrikstad. Rated 4.6 on Google Maps.'),
  place('fredrikstad-bakery-3', 'fredrikstad', 'bakery', 'Backstube Fredrikstad', 'Nygaardsgata 55, Fredrikstad', '프레드릭스타드의 빵집. 구글 지도 평점 4.4.', 'Bakery in Fredrikstad. Rated 4.4 on Google Maps.'),
  place('fredrikstad-cafe-1', 'fredrikstad', 'cafe', 'Café Cicignon', 'Ridehusgata 14, Fredrikstad', '프레드릭스타드의 구시가지(감레뷔엔) 카페. 구글 지도 평점 4.7.', 'Café in the Old Town (Gamlebyen) in Fredrikstad. Rated 4.7 on Google Maps.'),
  place('fredrikstad-cafe-2', 'fredrikstad', 'cafe', 'Mormors Cafe', 'Raadhusgaten 18 a, Fredrikstad', '프레드릭스타드의 카페. 구글 지도 평점 4.3.', 'Café in Fredrikstad. Rated 4.3 on Google Maps.'),
  place('fredrikstad-cafe-3', 'fredrikstad', 'cafe', 'Café Magenta', 'Toldbodgaten 105, Fredrikstad', '프레드릭스타드의 구시가지 카페. 구글 지도 평점 4.4.', 'Café in the Old Town in Fredrikstad. Rated 4.4 on Google Maps.'),

  // —— lillehammer: restaurants, bakeries and cafés (2026-11-13) ——
  place('lillehammer-fine_dining-1', 'lillehammer', 'fine_dining', 'Hvelvet', 'Stortorget 1, Lillehammer', '릴레함메르의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Lillehammer. Rated 4.5 on Google Maps.'),
  place('lillehammer-fine_dining-2', 'lillehammer', 'fine_dining', 'LYNG mat & bar', 'Nymosvingen 2, Lillehammer', '릴레함메르의 노르웨이 요리 식당. 구글 지도 평점 4.8.', 'Norwegian restaurant in Lillehammer. Rated 4.8 on Google Maps.'),
  place('lillehammer-fine_dining-3', 'lillehammer', 'fine_dining', 'OLIVEN Spiseri', 'Storgata 57, Lillehammer', '릴레함메르의 그리스 요리 식당. 구글 지도 평점 4.7.', 'Greek restaurant in Lillehammer. Rated 4.7 on Google Maps.'),
  place('lillehammer-fine_dining-4', 'lillehammer', 'fine_dining', 'Det Lille Pannekakehuset', 'Nymosvingen 10, Lillehammer', '릴레함메르의 팬케이크 식당. 구글 지도 평점 4.6.', 'Pancake restaurant in Lillehammer. Rated 4.6 on Google Maps.'),
  place('lillehammer-bakery-1', 'lillehammer', 'bakery', 'Lillehammer Bakeri', 'Mesnakvartalet 15, Lillehammer', '릴레함메르의 빵집. 구글 지도 평점 4.8.', 'Bakery in Lillehammer. Rated 4.8 on Google Maps.'),
  place('lillehammer-cafe-1', 'lillehammer', 'cafe', 'Cafe Sorgenfri', 'Storgata 64A, Lillehammer', '릴레함메르의 카페. 구글 지도 평점 4.7.', 'Café in Lillehammer. Rated 4.7 on Google Maps.'),
  place('lillehammer-cafe-2', 'lillehammer', 'cafe', 'Brygg Kaffebar', 'Kirkegata 68, Lillehammer', '릴레함메르의 커피 전문점. 구글 지도 평점 4.8.', 'Coffee bar in Lillehammer. Rated 4.8 on Google Maps.'),
  place('lillehammer-cafe-3', 'lillehammer', 'cafe', 'Kafe Fønix', 'Storgata 46, Lillehammer', '릴레함메르의 카페. 구글 지도 평점 4.8.', 'Café in Lillehammer. Rated 4.8 on Google Maps.'),

  // —— kristiansand: restaurants, bakeries and cafés (2026-11-13) ——
  place('kristiansand-fine_dining-1', 'kristiansand', 'fine_dining', 'Smag & Behag', 'Dronningens gate 48a, Kristiansand', '크리스티안산의 레스토랑. 구글 지도 평점 4.8.', 'Restaurant in Kristiansand. Rated 4.8 on Google Maps.'),
  place('kristiansand-fine_dining-2', 'kristiansand', 'fine_dining', 'TilStede mat og mer', 'Markens gate 29, Kristiansand', '크리스티안산의 레스토랑. 구글 지도 평점 4.7.', 'Restaurant in Kristiansand. Rated 4.7 on Google Maps.'),
  place('kristiansand-fine_dining-3', 'kristiansand', 'fine_dining', 'Bønder i Byen', 'Rådhusgata 16, Kristiansand', '크리스티안산의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Kristiansand. Rated 4.5 on Google Maps.'),
  place('kristiansand-fine_dining-4', 'kristiansand', 'fine_dining', 'Sjøhuset Restaurant', 'Østre Strandgate 12, Kristiansand', '크리스티안산의 해산물 식당. 구글 지도 평점 4.4.', 'Seafood restaurant in Kristiansand. Rated 4.4 on Google Maps.'),
  place('kristiansand-bakery-1', 'kristiansand', 'bakery', 'The Odd Bakery', 'Kronprinsens gate 57, Kristiansand', '크리스티안산의 빵집. 구글 지도 평점 4.8.', 'Bakery in Kristiansand. Rated 4.8 on Google Maps.'),
  place('kristiansand-bakery-2', 'kristiansand', 'bakery', 'Grim bakeri & konditori', 'Grim Torv 3, Kristiansand', '크리스티안산의 빵집·제과점. 구글 지도 평점 4.3.', 'Bakery and pâtisserie in Kristiansand. Rated 4.3 on Google Maps.'),
  place('kristiansand-cafe-1', 'kristiansand', 'cafe', 'Cuba Life Kaffebar', 'Tollbodgata 6, Kristiansand', '크리스티안산의 커피 전문점. 구글 지도 평점 4.8.', 'Coffee bar in Kristiansand. Rated 4.8 on Google Maps.'),
  place('kristiansand-cafe-2', 'kristiansand', 'cafe', 'Spiren Kafe', 'Dronningens gate 52, Kristiansand', '크리스티안산의 채식 카페. 구글 지도 평점 4.7.', 'Vegetarian café in Kristiansand. Rated 4.7 on Google Maps.'),
  place('kristiansand-cafe-3', 'kristiansand', 'cafe', 'Camillo Bastrup', 'Markens gate 53, Kristiansand', '크리스티안산의 카페. 구글 지도 평점 4.6.', 'Café in Kristiansand. Rated 4.6 on Google Maps.'),

  // —— voss: restaurants, bakeries and cafés (2026-11-13) ——
  place('voss-fine_dining-1', 'voss', 'fine_dining', 'Eyyes Lokanta', 'Gurid Almenningens Plass 1, Voss', '보스의 튀르키예 요리 식당. 구글 지도 평점 4.8.', 'Turkish restaurant in Voss. Rated 4.8 on Google Maps.'),
  place('voss-fine_dining-2', 'voss', 'fine_dining', 'Vossa Sushi', 'Uttrågata 29, Voss', '보스의 초밥집. 구글 지도 평점 4.8.', 'Sushi restaurant in Voss. Rated 4.8 on Google Maps.'),
  place('voss-bakery-1', 'voss', 'bakery', 'VossaBakst', 'Vangsgata 38, Voss', '보스의 빵집. 구글 지도 평점 4.5.', 'Bakery in Voss. Rated 4.5 on Google Maps.'),
  place('voss-cafe-1', 'voss', 'cafe', 'Vangen Café', 'Hestavangen 3, Voss', '보스의 카페. 구글 지도 평점 4.5.', 'Café in Voss. Rated 4.5 on Google Maps.'),
  place('voss-cafe-2', 'voss', 'cafe', 'Skrot Kafé & Bar', 'Vangsgata 31, Voss', '보스의 카페·바. 구글 지도 평점 4.8.', 'Café and bar in Voss. Rated 4.8 on Google Maps.'),

  // —— odda: restaurants, bakeries and cafés (2026-11-13) ——
  place('odda-fine_dining-1', 'odda', 'fine_dining', 'Aaks Bistro', 'Eitrheimsvegen 10, Odda', '오다의 노르웨이 요리 식당. 구글 지도 평점 4.8.', 'Norwegian restaurant in Odda. Rated 4.8 on Google Maps.'),
  place('odda-fine_dining-2', 'odda', 'fine_dining', 'Ferskvaren', 'Røldalsvegen 31, Odda', '오다의 노르웨이 요리 식당. 구글 지도 평점 4.6.', 'Norwegian restaurant in Odda. Rated 4.6 on Google Maps.'),
  place('odda-fine_dining-3', 'odda', 'fine_dining', 'Langhuset Restaurant', 'Hjøllovegen 12, Odda', '오다의 노르웨이 요리 식당. 구글 지도 평점 4.5.', 'Norwegian restaurant in Odda. Rated 4.5 on Google Maps.'),
  place('odda-cafe-1', 'odda', 'cafe', 'Cafe Verket', 'Smelteverket 8, Odda', '오다의 옛 제련소 단지의 카페. 구글 지도 평점 4.7.', 'Café in the old smelter complex in Odda. Rated 4.7 on Google Maps.'),
  place('odda-cafe-2', 'odda', 'cafe', 'Kafe Pause', 'Røldalsvegen 18-24, Odda', '오다의 카페. 구글 지도 평점 4.3.', 'Café in Odda. Rated 4.3 on Google Maps.'),

  // —— geiranger: restaurants, bakeries and cafés (2026-11-13) ——
  place('geiranger-fine_dining-1', 'geiranger', 'fine_dining', 'Brasserie Posten', 'Geirangervegen 4, Geiranger', '예이랑에르의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Geiranger. Rated 4.6 on Google Maps.'),
  place('geiranger-cafe-1', 'geiranger', 'cafe', 'CaféOlé', 'Maråkvegen 19, Geiranger', '예이랑에르의 카페. 구글 지도 평점 4.4.', 'Café in Geiranger. Rated 4.4 on Google Maps.'),

  // —— roros: restaurants, bakeries and cafés (2026-11-13) ——
  place('roros-fine_dining-1', 'roros', 'fine_dining', 'Burger and beers', 'Henrik Grønns vei 6, Røros', '뢰로스의 버거 식당. 구글 지도 평점 4.7.', 'Burger restaurant in Røros. Rated 4.7 on Google Maps.'),
  place('roros-bakery-1', 'roros', 'bakery', 'Trygstad bakeri og konditori', 'Kjerkgata 12, Røros', '뢰로스의 빵집·제과점. 구글 지도 평점 4.6.', 'Bakery and pâtisserie in Røros. Rated 4.6 on Google Maps.'),
  place('roros-bakery-2', 'roros', 'bakery', 'Bakeriet på Røros', 'Hans Aasengata 5, Røros', '뢰로스의 빵집. 구글 지도 평점 4.5.', 'Bakery in Røros. Rated 4.5 on Google Maps.'),

  // —— bodo: restaurants, bakeries and cafés (2026-11-13) ——
  place('bodo-fine_dining-1', 'bodo', 'fine_dining', 'Brasilia Bodø', 'Sjøgata 31B, Bodø', '보되의 브라질 요리 식당. 구글 지도 평점 4.6.', 'Brazilian restaurant in Bodø. Rated 4.6 on Google Maps.'),
  place('bodo-fine_dining-2', 'bodo', 'fine_dining', 'Bryggerikaia', 'Sjøgata 1, Bodø', '보되의 노르웨이 요리 식당. 구글 지도 평점 4.3.', 'Norwegian restaurant in Bodø. Rated 4.3 on Google Maps.'),
  place('bodo-fine_dining-3', 'bodo', 'fine_dining', 'Hundholmen Brygghus', 'Tollbugata 13, Bodø', '보되의 양조장 레스토랑. 구글 지도 평점 4.4.', 'Brewpub restaurant in Bodø. Rated 4.4 on Google Maps.'),
  place('bodo-fine_dining-4', 'bodo', 'fine_dining', 'Pangea Kitchen & Bar', 'Storgata 5C, Bodø', '보되의 레스토랑. 구글 지도 평점 4.4.', 'Restaurant in Bodø. Rated 4.4 on Google Maps.'),
  place('bodo-bakery-1', 'bodo', 'bakery', 'Berbusmel', 'Storgata 7C, Bodø', '보되의 빵집. 구글 지도 평점 4.6.', 'Bakery in Bodø. Rated 4.6 on Google Maps.'),
  place('bodo-bakery-2', 'bodo', 'bakery', 'Craig Alibone Pâtisserie', 'Torvgata 1, Bodø', '보되의 제과점. 구글 지도 평점 4.7.', 'Pâtisserie in Bodø. Rated 4.7 on Google Maps.'),
  place('bodo-bakery-3', 'bodo', 'bakery', 'Baker Olsen', 'Sjøgata 33, Bodø', '보되의 빵집. 구글 지도 평점 4.4.', 'Bakery in Bodø. Rated 4.4 on Google Maps.'),
  place('bodo-cafe-1', 'bodo', 'cafe', 'Maloca Coffee & Food', 'Dronningens gate 30, Bodø', '보되의 카페. 구글 지도 평점 4.5.', 'Café in Bodø. Rated 4.5 on Google Maps.'),

  // —— lofoten: restaurants, bakeries and cafés (2026-11-13) ——
  place('lofoten-fine_dining-1', 'lofoten', 'fine_dining', 'Børsen Spiseri', 'Gunnar Bergs vei 2, Svolvær', '스볼베르의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Svolvær. Rated 4.6 on Google Maps.'),
  place('lofoten-fine_dining-2', 'lofoten', 'fine_dining', 'Fellini Restaurant', 'Vestfjordgata 8, Svolvær', '스볼베르의 이탈리아 요리 식당. 구글 지도 평점 4.5.', 'Italian restaurant in Svolvær. Rated 4.5 on Google Maps.'),
  place('lofoten-fine_dining-3', 'lofoten', 'fine_dining', 'Anita\'s Sjømat', 'Sakrisøy', '사크리쇠위의 해산물 식당. 구글 지도 평점 4.6.', 'Seafood restaurant on Sakrisøy. Rated 4.6 on Google Maps.'),
  place('lofoten-fine_dining-4', 'lofoten', 'fine_dining', 'Tapperiet Bistro', 'Reineveien 164, Reine', '레이네의 비스트로. 구글 지도 평점 4.5.', 'Bistro in Reine. Rated 4.5 on Google Maps.'),
  place('lofoten-fine_dining-5', 'lofoten', 'fine_dining', 'Restaurant Gammelbua', 'Reineveien 165, Reine', '레이네의 레스토랑. 구글 지도 평점 4.7.', 'Restaurant in Reine. Rated 4.7 on Google Maps.'),
  place('lofoten-fine_dining-6', 'lofoten', 'fine_dining', 'Maren Anna', 'Gamle Sørvågen 12, Sørvågen', '쇠르보겐의 해산물 식당. 구글 지도 평점 4.6.', 'Seafood restaurant in Sørvågen. Rated 4.6 on Google Maps.'),
  place('lofoten-bakery-1', 'lofoten', 'bakery', 'Bakeriet på Å', 'Å vegen 21, Å', '오(Å) 마을의 빵집. 구글 지도 평점 4.5.', 'Bakery in Å. Rated 4.5 on Google Maps.'),
  place('lofoten-bakery-2', 'lofoten', 'bakery', 'Lofoten Bakeri', 'Storgata 34, Leknes', '레크네스의 빵집. 구글 지도 평점 4.5.', 'Bakery in Leknes. Rated 4.5 on Google Maps.'),
  place('lofoten-cafe-1', 'lofoten', 'cafe', 'Henningsvær Lysstøperi og Cafe', 'Gammelveien 2, Henningsvær', '헨닝스베르의 양초 공방 카페. 구글 지도 평점 4.7.', 'Candle workshop and café in Henningsvær. Rated 4.7 on Google Maps.'),
  place('lofoten-cafe-2', 'lofoten', 'cafe', 'Klatrekaféen', 'Misværveien 10, Henningsvær', '헨닝스베르의 카페. 구글 지도 평점 4.6.', 'Café in Henningsvær. Rated 4.6 on Google Maps.'),
  place('lofoten-cafe-3', 'lofoten', 'cafe', 'Deja Brew', 'Sivert Nilsens gt. 26, Svolvær', '스볼베르의 커피 전문점. 구글 지도 평점 4.7.', 'Coffee bar in Svolvær. Rated 4.7 on Google Maps.'),
  place('lofoten-cafe-4', 'lofoten', 'cafe', 'Chocolateroom', 'Gravdalsgata 15, Leknes', '레크네스의 카페. 구글 지도 평점 4.9.', 'Café in Leknes. Rated 4.9 on Google Maps.'),

  // —— honningsvag: restaurants, bakeries and cafés (2026-11-13) ——
  place('honningsvag-fine_dining-1', 'honningsvag', 'fine_dining', 'Corner Spiseri', 'Fiskeriveien 2A, Honningsvåg', '호닝스보그의 레스토랑. 구글 지도 평점 4.4.', 'Restaurant in Honningsvåg. Rated 4.4 on Google Maps.'),
  place('honningsvag-fine_dining-2', 'honningsvag', 'fine_dining', 'Havly Restaurant', 'Storgata 12B, Honningsvåg', '호닝스보그의 레스토랑. 구글 지도 평점 4.4.', 'Restaurant in Honningsvåg. Rated 4.4 on Google Maps.'),
  place('honningsvag-fine_dining-3', 'honningsvag', 'fine_dining', 'Soi 9 Restaurant & Bar', 'Sjøgata 6, Honningsvåg', '호닝스보그의 태국 요리 식당. 구글 지도 평점 4.5.', 'Thai restaurant in Honningsvåg. Rated 4.5 on Google Maps.'),
  place('honningsvag-bakery-1', 'honningsvag', 'bakery', 'Honni Bakes', 'Sjøgata 2, Honningsvåg', '호닝스보그의 빵집. 구글 지도 평점 4.6.', 'Bakery in Honningsvåg. Rated 4.6 on Google Maps.'),
  place('honningsvag-cafe-1', 'honningsvag', 'cafe', 'NOR Cafe & Bistro', 'Holmen 6B, Honningsvåg', '호닝스보그의 카페·비스트로. 구글 지도 평점 4.7.', 'Café and bistro in Honningsvåg. Rated 4.7 on Google Maps.'),
  place('honningsvag-cafe-2', 'honningsvag', 'cafe', 'KOS Kitchen and Small Shop', 'Storgata 22, Honningsvåg', '호닝스보그의 카페. 구글 지도 평점 4.5.', 'Café in Honningsvåg. Rated 4.5 on Google Maps.'),

  // —— halden: restaurants, bakeries and cafés (2026-11-27) ——
  place('halden-fine_dining-1', 'halden', 'fine_dining', 'Restaurant Curtisen', 'Indre Festning 2, Fredriksten festning, Halden, Norway', '파인 다이닝 레스토랑. 구글 지도 평점 4.9(리뷰 266개).', 'Fine-dining restaurant. Rated 4.9 on Google Maps (266 reviews).'),
  place('halden-fine_dining-2', 'halden', 'fine_dining', 'Halden Chef\'s Collective', 'Torget 5, Halden, Norway', '스칸디나비아 요리 레스토랑. 구글 지도 평점 4.5(리뷰 450개).', 'Scandinavian restaurant. Rated 4.5 on Google Maps (450 reviews).'),
  place('halden-fine_dining-3', 'halden', 'fine_dining', 'Bryggekanten Restaurant Halden', 'Kongens Brygge 6, Halden, Norway', '레스토랑. 구글 지도 평점 4.4(리뷰 111개).', 'Restaurant. Rated 4.4 on Google Maps (111 reviews).'),
  place('halden-fine_dining-4', 'halden', 'fine_dining', 'Bakgården Restaurant', 'Storgata 22B, Halden, Norway', '노르웨이 요리 레스토랑. 구글 지도 평점 4.3(리뷰 369개).', 'Norwegian restaurant. Rated 4.3 on Google Maps (369 reviews).'),
  place('halden-fine_dining-5', 'halden', 'fine_dining', 'Dickens Restaurant', 'Storgata 9, Halden, Norway', '피자 식당. 구글 지도 평점 4.5(리뷰 221개).', 'Pizza restaurant. Rated 4.5 on Google Maps (221 reviews).'),
  place('halden-bakery-1', 'halden', 'bakery', 'Bread & Water', 'Torget 5, Halden, Norway', '빵집. 구글 지도 평점 4.6(리뷰 116개).', 'Bakery. Rated 4.6 on Google Maps (116 reviews).'),
  place('halden-bakery-2', 'halden', 'bakery', 'Motz&Kringla Fisketorget', 'Fisketorget 1, Halden, Norway', '빵집. 구글 지도 평점 4.5(리뷰 163개).', 'Bakery. Rated 4.5 on Google Maps (163 reviews).'),
  place('halden-cafe-1', 'halden', 'cafe', 'Kafé Erlandsen', 'Storgata 10, Halden, Norway', '카페. 구글 지도 평점 4.3(리뷰 154개).', 'Café. Rated 4.3 on Google Maps (154 reviews).'),

  // —— kongsberg: restaurants, bakeries and cafés (2026-11-27) ——
  place('kongsberg-fine_dining-1', 'kongsberg', 'fine_dining', 'Arctic Ramen', 'Chr. IV. des gate 14, Kongsberg, Norway', '라멘 식당. 구글 지도 평점 4.9(리뷰 206개).', 'Ramen restaurant. Rated 4.9 on Google Maps (206 reviews).'),
  place('kongsberg-fine_dining-2', 'kongsberg', 'fine_dining', 'Tråkka Mat & Vinhus', 'Nymoens Torg 2, Kongsberg, Norway', '레스토랑. 구글 지도 평점 4.9(리뷰 80개).', 'Restaurant. Rated 4.9 on Google Maps (80 reviews).'),
  place('kongsberg-fine_dining-3', 'kongsberg', 'fine_dining', 'Vår Bistro', 'Nymoens Skrågate 2, Kongsberg, Norway', '비스트로. 구글 지도 평점 4.6(리뷰 213개).', 'Bistro. Rated 4.6 on Google Maps (213 reviews).'),
  place('kongsberg-fine_dining-4', 'kongsberg', 'fine_dining', 'Kraft Pizzeria Kongsberg', '17. Mai Gata, Kongsberg, Norway', '피자 식당. 구글 지도 평점 4.6(리뷰 193개).', 'Pizza restaurant. Rated 4.6 on Google Maps (193 reviews).'),
  place('kongsberg-fine_dining-5', 'kongsberg', 'fine_dining', 'Velvet Restaurant & Bar', 'Storgata 6, Kongsberg, Norway', '레스토랑. 구글 지도 평점 4.5(리뷰 138개).', 'Restaurant. Rated 4.5 on Google Maps (138 reviews).'),
  place('kongsberg-bakery-1', 'kongsberg', 'bakery', 'Lågen Bakeri og Konditori', 'Bussedalen 1, Kongsberg, Norway', '빵집. 구글 지도 평점 4.9(리뷰 85개).', 'Bakery. Rated 4.9 on Google Maps (85 reviews).'),
  place('kongsberg-bakery-2', 'kongsberg', 'bakery', 'Lampeland Bakeri og Konditori', 'Dyrmyrgata 5, Kongsberg, Norway', '빵집. 구글 지도 평점 4.4(리뷰 85개).', 'Bakery. Rated 4.4 on Google Maps (85 reviews).'),
  place('kongsberg-cafe-1', 'kongsberg', 'cafe', 'Kirkens Bymisjon Kafé Kongsberg', 'Stiksrudgata 1A, Kongsberg, Norway', '카페. 구글 지도 평점 4.8(리뷰 89개).', 'Café. Rated 4.8 on Google Maps (89 reviews).'),

  // —— tonsberg: restaurants, bakeries and cafés (2026-11-27) ——
  place('tonsberg-fine_dining-1', 'tonsberg', 'fine_dining', 'Grand Café Tønsberg', 'Storgaten 24, Tønsberg, Norway', '레스토랑. 구글 지도 평점 4.8(리뷰 147개).', 'Restaurant. Rated 4.8 on Google Maps (147 reviews).'),
  place('tonsberg-fine_dining-2', 'tonsberg', 'fine_dining', 'Kapadokya Restaurant Tønsberg', 'Nedre Langgate 28b, Tønsberg, Norway', '튀르키예 요리 레스토랑. 구글 지도 평점 4.7(리뷰 701개).', 'Turkish restaurant. Rated 4.7 on Google Maps (701 reviews).'),
  place('tonsberg-fine_dining-3', 'tonsberg', 'fine_dining', '2 Friends Steak House', 'Conradis gate 7, Tønsberg, Norway', '스테이크 하우스. 구글 지도 평점 4.7(리뷰 198개).', 'Steakhouse. Rated 4.7 on Google Maps (198 reviews).'),
  place('tonsberg-fine_dining-4', 'tonsberg', 'fine_dining', 'Kverneriet Tønsberg', 'Rambergveien 15, Tønsberg, Norway', '햄버거 식당. 구글 지도 평점 4.6(리뷰 1759개).', 'Burger restaurant. Rated 4.6 on Google Maps (1759 reviews).'),
  place('tonsberg-fine_dining-5', 'tonsberg', 'fine_dining', 'Havariet', 'Nedre Langgate 30E, Tønsberg, Norway', '해산물 레스토랑. 구글 지도 평점 4.3(리뷰 1312개).', 'Seafood restaurant. Rated 4.3 on Google Maps (1312 reviews).'),
  place('tonsberg-bakery-1', 'tonsberg', 'bakery', 'Nøtterø Bakeri & Konditori Tønsberg Torg', 'Storgaten 39, Tønsberg, Norway', '빵집. 구글 지도 평점 4.3(리뷰 261개).', 'Bakery. Rated 4.3 on Google Maps (261 reviews).'),
  place('tonsberg-bakery-2', 'tonsberg', 'bakery', 'WITH Brød&Kaffe', 'Storgaten 29, Tønsberg, Norway', '빵집. 구글 지도 평점 4.3(리뷰 268개).', 'Bakery. Rated 4.3 on Google Maps (268 reviews).'),
  place('tonsberg-cafe-1', 'tonsberg', 'cafe', 'Skaperverket kafé', 'Rådhusgaten 4, Tønsberg, Norway', '카페. 구글 지도 평점 4.7(리뷰 152개).', 'Café. Rated 4.7 on Google Maps (152 reviews).'),
  place('tonsberg-cafe-2', 'tonsberg', 'cafe', 'bare barista kaffebar Jernbanen', 'Øvre Langgate 44, Tønsberg, Norway', '스페셜티 커피 바. 구글 지도 평점 4.3(리뷰 267개).', 'Specialty coffee bar. Rated 4.3 on Google Maps (267 reviews).'),

  // —— arendal: restaurants, bakeries and cafés (2026-11-27) ——
  place('arendal-fine_dining-1', 'arendal', 'fine_dining', 'Happy Time Pizza og Kebab Arendal', 'Tollbodgaten 5, Arendal, Norway', '피자 식당. 구글 지도 평점 4.7(리뷰 141개).', 'Pizza restaurant. Rated 4.7 on Google Maps (141 reviews).'),
  place('arendal-fine_dining-2', 'arendal', 'fine_dining', 'Hong Kong Restaurant Arendal', 'Østre gate 1, Arendal, Norway', '아시아 요리 레스토랑. 구글 지도 평점 4.6(리뷰 505개).', 'Asian restaurant. Rated 4.6 on Google Maps (505 reviews).'),
  place('arendal-fine_dining-3', 'arendal', 'fine_dining', 'Blom Restaurant', 'Langbryggen 9, Arendal, Norway', '타파스 바. 구글 지도 평점 4.6(리뷰 248개).', 'Tapas bar. Rated 4.6 on Google Maps (248 reviews).'),
  place('arendal-bakery-1', 'arendal', 'bakery', 'Mikrobageriet Kloppene', 'Kloppene 7B, Arendal, Norway', '빵집. 구글 지도 평점 4.7(리뷰 116개).', 'Bakery. Rated 4.7 on Google Maps (116 reviews).'),
  place('arendal-bakery-2', 'arendal', 'bakery', 'Myrene Hjemmebakeri', 'Strømsbusletta 9, Arendal, Norway', '빵집. 구글 지도 평점 4.4(리뷰 118개).', 'Bakery. Rated 4.4 on Google Maps (118 reviews).'),
  place('arendal-bakery-3', 'arendal', 'bakery', 'Baker Jørgensen Torvet', 'Torvet 11, Arendal, Norway', '빵집. 구글 지도 평점 4.3(리뷰 394개).', 'Bakery. Rated 4.3 on Google Maps (394 reviews).'),
  place('arendal-cafe-1', 'arendal', 'cafe', 'Kolonialen kafé', 'Løddesølveien 1, Arendal, Norway', '카페. 구글 지도 평점 4.7(리뷰 156개).', 'Café. Rated 4.7 on Google Maps (156 reviews).'),
  place('arendal-cafe-2', 'arendal', 'cafe', 'Cafe Victor', 'Kirkegaten 5, Arendal, Norway', '카페. 구글 지도 평점 4.5(리뷰 361개).', 'Café. Rated 4.5 on Google Maps (361 reviews).'),
  place('arendal-cafe-3', 'arendal', 'cafe', 'Koselig Café', 'Torvgaten 3, Arendal, Norway', '디저트 가게. 구글 지도 평점 4.5(리뷰 85개).', 'Dessert shop. Rated 4.5 on Google Maps (85 reviews).'),

  // —— lom: restaurants, bakeries and cafés (2026-11-27) ——
  place('lom-fine_dining-1', 'lom', 'fine_dining', 'Brimi Sæter', 'Smørlivegen, 2685 Garmo, Norway', '가르모에 있는 노르웨이 요리 레스토랑. 구글 지도 평점 4.6(리뷰 436개).', 'Norwegian restaurant in Garmo. Rated 4.6 on Google Maps (436 reviews).'),
  place('lom-bakery-1', 'lom', 'bakery', 'Bakeriet i Lom', 'Sognefjellsvegen 7, Lom, Norway', '빵집. 구글 지도 평점 4.5(리뷰 3592개).', 'Bakery. Rated 4.5 on Google Maps (3592 reviews).'),

  // —— loen: restaurants, bakeries and cafés (2026-11-27) ——
  place('loen-fine_dining-1', 'loen', 'fine_dining', 'Hoven Restaurant', 'Fjordvegen 1002, 6789 Loen, Norway', '노르웨이 요리 레스토랑. 구글 지도 평점 4.4(리뷰 1639개).', 'Norwegian restaurant. Rated 4.4 on Google Maps (1639 reviews).'),
  place('loen-cafe-1', 'loen', 'cafe', 'Kafe Båtutleige', '6789 Loen, Norway', '카페. 구글 지도 평점 4.6(리뷰 170개).', 'Café. Rated 4.6 on Google Maps (170 reviews).'),

  // —— eidfjord: restaurants, bakeries and cafés (2026-11-27) ——
  place('eidfjord-fine_dining-1', 'eidfjord', 'fine_dining', 'Ilden kafé & Restaurant', 'Lægreidsvegen 9, Eidfjord, Norway', '바비큐 식당. 구글 지도 평점 4.9(리뷰 106개).', 'Barbecue restaurant. Rated 4.9 on Google Maps (106 reviews).'),
  place('eidfjord-fine_dining-2', 'eidfjord', 'fine_dining', 'Vik Pensjonat', 'Simadalsvegen 10, 5783 Eidfjord, Norway', '노르웨이 요리 레스토랑. 구글 지도 평점 4.4(리뷰 396개).', 'Norwegian restaurant. Rated 4.4 on Google Maps (396 reviews).'),
  place('eidfjord-cafe-1', 'eidfjord', 'cafe', 'Fjord & Mountain cafe and Kremmeri', 'Eidfjordvegen 277, 5783 Eidfjord, Norway', '카페. 구글 지도 평점 4.6(리뷰 769개).', 'Café. Rated 4.6 on Google Maps (769 reviews).'),

  // —— andalsnes: restaurants, bakeries and cafés (2026-11-27) ——
  place('andalsnes-fine_dining-1', 'andalsnes', 'fine_dining', 'Sødahlhuset', 'Gamle Romsdalsvegen 8, Åndalsnes, Norway', '레스토랑. 구글 지도 평점 4.7(리뷰 888개).', 'Restaurant. Rated 4.7 on Google Maps (888 reviews).'),
  place('andalsnes-fine_dining-2', 'andalsnes', 'fine_dining', 'Eggen Restaurant', 'Nesaksla Mountain, 6300 Åndalsnes, Norway', '노르웨이 요리 레스토랑. 구글 지도 평점 4.6(리뷰 523개).', 'Norwegian restaurant. Rated 4.6 on Google Maps (523 reviews).'),
  place('andalsnes-fine_dining-3', 'andalsnes', 'fine_dining', 'Bakgården Thai Restaurant', 'Vollan 5, Åndalsnes, Norway', '태국 요리 레스토랑. 구글 지도 평점 4.3(리뷰 411개).', 'Thai restaurant. Rated 4.3 on Google Maps (411 reviews).'),
  place('andalsnes-cafe-1', 'andalsnes', 'cafe', 'Vollan Cafe', 'Vollan 17, Åndalsnes, Norway', '카페. 구글 지도 평점 4.3(리뷰 94개).', 'Café. Rated 4.3 on Google Maps (94 reviews).'),

  // —— kristiansund: restaurants, bakeries and cafés (2026-11-27) ——
  place('kristiansund-fine_dining-1', 'kristiansund', 'fine_dining', 'Namaste Indian Tandoori', 'Fosnagata 1, Kristiansund, Norway', '인도 요리 레스토랑. 구글 지도 평점 4.8(리뷰 258개).', 'Indian restaurant. Rated 4.8 on Google Maps (258 reviews).'),
  place('kristiansund-fine_dining-2', 'kristiansund', 'fine_dining', 'Boteco', 'Skolegata 16, Kristiansund, Norway', '레스토랑. 구글 지도 평점 4.5(리뷰 743개).', 'Restaurant. Rated 4.5 on Google Maps (743 reviews).'),
  place('kristiansund-fine_dining-3', 'kristiansund', 'fine_dining', 'Bryggekanten Brasserie Restaurant og Bar', 'Storkaia 1, Kristiansund, Norway', '브라세리. 구글 지도 평점 4.3(리뷰 907개).', 'Brasserie. Rated 4.3 on Google Maps (907 reviews).'),
  place('kristiansund-fine_dining-4', 'kristiansund', 'fine_dining', 'Smia restaurant', 'Fosnagata 30B, Kristiansund, Norway', '레스토랑. 구글 지도 평점 4.3(리뷰 688개).', 'Restaurant. Rated 4.3 on Google Maps (688 reviews).'),
  place('kristiansund-bakery-1', 'kristiansund', 'bakery', 'Tor Sevaldsen Løkkemyra', 'Industriveien 10, 6517 Kristiansund, Norway', '빵집. 구글 지도 평점 4.6(리뷰 330개).', 'Bakery. Rated 4.6 on Google Maps (330 reviews).'),

  // —— vesteralen: restaurants, bakeries and cafés (2026-11-27) ——
  place('vesteralen-fine_dining-1', 'vesteralen', 'fine_dining', 'Kvitnes Gård', 'Møysalveien 2659, 8413 Kvitnes, Norway', '크비트네스에 있는 현대 요리 레스토랑. 미쉐린 1스타. 구글 지도 평점 4.9(리뷰 207개).', 'Modern cuisine restaurant in Kvitnes. One MICHELIN star. Rated 4.9 on Google Maps (207 reviews).', { michelin: 'star1' }),
  place('vesteralen-fine_dining-2', 'vesteralen', 'fine_dining', 'Arresten', 'Prinsensgate 6, Andenes, Norway', '노르웨이 요리 레스토랑. 구글 지도 평점 4.4(리뷰 1023개).', 'Norwegian restaurant. Rated 4.4 on Google Maps (1023 reviews).'),
  place('vesteralen-fine_dining-3', 'vesteralen', 'fine_dining', 'Mea Pub', 'Sjøgata 20, Andenes, Norway', '펍. 구글 지도 평점 4.6(리뷰 203개).', 'Pub. Rated 4.6 on Google Maps (203 reviews).'),
  place('vesteralen-cafe-1', 'vesteralen', 'cafe', 'Lysverket kafé', 'Kong Hans gate 1b, Andenes, Norway', '카페. 구글 지도 평점 4.6(리뷰 182개).', 'Café. Rated 4.6 on Google Maps (182 reviews).'),

  // —— senja: restaurants, bakeries and cafés (2026-11-27) ——
  place('senja-fine_dining-1', 'senja', 'fine_dining', 'Senja By Heart', 'Nedre Ferånna 49, 9381 Torsken, Norway', '토르스켄에 있는 노르웨이 요리 레스토랑. 구글 지도 평점 4.8(리뷰 298개).', 'Norwegian restaurant in Torsken. Rated 4.8 on Google Maps (298 reviews).'),
  place('senja-fine_dining-2', 'senja', 'fine_dining', 'Roalden Kafè og Mathus', 'Mefjordveien 1537, 9386 Senjahopen, Norway', '센야호펜에 있는 레스토랑. 구글 지도 평점 4.8(리뷰 293개).', 'Restaurant in Senjahopen. Rated 4.8 on Google Maps (293 reviews).'),
  place('senja-fine_dining-3', 'senja', 'fine_dining', 'Skreien Spiseri', 'Spiraveien 53, 9380 Gryllefjord, Norway', '그륄레피오르에 있는 레스토랑. 구글 지도 평점 4.7(리뷰 337개).', 'Restaurant in Gryllefjord. Rated 4.7 on Google Maps (337 reviews).'),
  place('senja-fine_dining-4', 'senja', 'fine_dining', 'Senjastua', 'Laukhellaveien 2, 9303 Silsand, Norway', '실산에 있는 레스토랑. 구글 지도 평점 4.5(리뷰 752개).', 'Restaurant in Silsand. Rated 4.5 on Google Maps (752 reviews).'),
  place('senja-fine_dining-5', 'senja', 'fine_dining', 'DiOne Thaimat', 'Storgata 7, Finnsnes, Norway', '태국 요리 레스토랑. 구글 지도 평점 4.4(리뷰 257개).', 'Thai restaurant. Rated 4.4 on Google Maps (257 reviews).'),
  place('senja-cafe-1', 'senja', 'cafe', 'En Kaffe Te', 'Storgata 18, Finnsnes, Norway', '카페. 구글 지도 평점 4.6(리뷰 123개).', 'Café. Rated 4.6 on Google Maps (123 reviews).'),

  // —— alta: restaurants, bakeries and cafés (2026-11-27) ——
  place('alta-fine_dining-1', 'alta', 'fine_dining', 'Aurora Grill', 'Jernveien 1, Alta, Norway', '레스토랑. 구글 지도 평점 4.8(리뷰 88개).', 'Restaurant. Rated 4.8 on Google Maps (88 reviews).'),
  place('alta-fine_dining-2', 'alta', 'fine_dining', 'Raus Social', 'Markedsgata 10, Alta, Norway', '레스토랑. 구글 지도 평점 4.8(리뷰 102개).', 'Restaurant. Rated 4.8 on Google Maps (102 reviews).'),
  place('alta-fine_dining-3', 'alta', 'fine_dining', 'Norí Restaurant & Bar', 'Markedsgata 18, Alta, Norway', '레스토랑. 구글 지도 평점 4.6(리뷰 597개).', 'Restaurant. Rated 4.6 on Google Maps (597 reviews).'),
  place('alta-fine_dining-4', 'alta', 'fine_dining', 'Vanvittig Grill', 'Skoleveien 1, Alta, Norway', '인도 요리 레스토랑. 구글 지도 평점 4.6(리뷰 442개).', 'Indian restaurant. Rated 4.6 on Google Maps (442 reviews).'),
  place('alta-fine_dining-5', 'alta', 'fine_dining', 'Erica mat & vinbar', 'Markedsgata 21, Alta, Norway', '와인 바 레스토랑. 구글 지도 평점 4.3(리뷰 352개).', 'Wine bar and restaurant. Rated 4.3 on Google Maps (352 reviews).'),
  place('alta-bakery-1', 'alta', 'bakery', 'Østlyngens Bakeri & Konditori', 'Altaveien 302, Alta, Norway', '빵집. 구글 지도 평점 4.6(리뷰 203개).', 'Bakery. Rated 4.6 on Google Maps (203 reviews).'),

  // —— kirkenes: restaurants, bakeries and cafés (2026-11-27) ——
  place('kirkenes-fine_dining-1', 'kirkenes', 'fine_dining', 'Johnny\'s lunch bar', 'Kielland Torkildsens gate 7, Kirkenes, Norway', '이탈리아 요리 레스토랑. 구글 지도 평점 4.8(리뷰 123개).', 'Italian restaurant. Rated 4.8 on Google Maps (123 reviews).'),
  place('kirkenes-fine_dining-2', 'kirkenes', 'fine_dining', 'Aurora Restobar', 'Dr. Wessels gate 7, Kirkenes, Norway', '노르웨이 요리 레스토랑. 구글 지도 평점 4.7(리뷰 222개).', 'Norwegian restaurant. Rated 4.7 on Google Maps (222 reviews).'),
  place('kirkenes-fine_dining-3', 'kirkenes', 'fine_dining', 'Bangkok Restaurant Kirkenes', 'Dr. Wessels gate 9, Kirkenes, Norway', '태국 요리 레스토랑. 구글 지도 평점 4.6(리뷰 250개).', 'Thai restaurant. Rated 4.6 on Google Maps (250 reviews).'),
  place('kirkenes-fine_dining-4', 'kirkenes', 'fine_dining', 'Surf & Turf Restaurant', 'Dr. Wessels gate 2, Kirkenes, Norway', '노르웨이 요리 레스토랑. 구글 지도 평점 4.4(리뷰 558개).', 'Norwegian restaurant. Rated 4.4 on Google Maps (558 reviews).'),
  place('kirkenes-cafe-1', 'kirkenes', 'cafe', 'Café Visit', 'Havneveien 1, Kirkenes, Norway', '카페. 구글 지도 평점 4.3(리뷰 344개).', 'Café. Rated 4.3 on Google Maps (344 reviews).'),

  // —— longyearbyen: restaurants, bakeries and cafés (2026-11-27) ——
  place('longyearbyen-fine_dining-1', 'longyearbyen', 'fine_dining', 'Gruvelageret', 'Longyearbyen 9170, Svalbard', '레스토랑. 구글 지도 평점 4.7(리뷰 152개).', 'Restaurant. Rated 4.7 on Google Maps (152 reviews).'),
  place('longyearbyen-fine_dining-2', 'longyearbyen', 'fine_dining', 'Vinterhagen Restaurant & Bar', 'Longyearbyen 9170, Svalbard', '레스토랑. 구글 지도 평점 4.7(리뷰 485개).', 'Restaurant. Rated 4.7 on Google Maps (485 reviews).'),
  place('longyearbyen-fine_dining-3', 'longyearbyen', 'fine_dining', 'Restaurant Polfareren', 'Vei 221, Longyearbyen 9170, Svalbard', '레스토랑. 구글 지도 평점 4.6(리뷰 115개).', 'Restaurant. Rated 4.6 on Google Maps (115 reviews).'),
  place('longyearbyen-fine_dining-4', 'longyearbyen', 'fine_dining', 'Huset Restaurant', 'Vei 300, Longyearbyen 9170, Svalbard', '레스토랑. 구글 지도 평점 4.5(리뷰 591개).', 'Restaurant. Rated 4.5 on Google Maps (591 reviews).'),
  place('longyearbyen-fine_dining-5', 'longyearbyen', 'fine_dining', 'Restaurant Kroa', 'Longyearbyen 9170, Svalbard', '스테이크 하우스. 구글 지도 평점 4.5(리뷰 1222개).', 'Steakhouse. Rated 4.5 on Google Maps (1222 reviews).'),
  place('longyearbyen-cafe-1', 'longyearbyen', 'cafe', 'Café Huskies', 'Vei 509, Longyearbyen 9170, Svalbard', '카페. 구글 지도 평점 4.8(리뷰 614개).', 'Café. Rated 4.8 on Google Maps (614 reviews).'),
  place('longyearbyen-cafe-2', 'longyearbyen', 'cafe', 'Fruene', 'Lompen Senteret, Longyearbyen 9170, Svalbard', '카페. 구글 지도 평점 4.5(리뷰 583개).', 'Café. Rated 4.5 on Google Maps (583 reviews).'),
]
