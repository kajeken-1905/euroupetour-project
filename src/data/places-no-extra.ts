import { place } from './placeFactory'
import type { Place } from '../types'

export const placesNOExtra: Place[] = [
  // —— bergen ——
  place('bergen-fine_dining-1', 'bergen', 'fine_dining', 'Restaurant 1877', 'Vetrlidsallmenningen 2, Bergen', '1877년 지어진 육류시장 건물을 개조한 레스토랑, 계절 노르웨이 요리 전문.', 'Restaurant in an 1877 former meat-market building, specializing in seasonal Norwegian cuisine.'),
  place('bergen-fine_dining-2', 'bergen', 'fine_dining', 'Bare Vestland', 'Torgallmenningen 2, 5014 Bergen', '베르겐 뵈르스 호텔 그룹의 셰어링 플레이트 레스토랑, 베스트란드 지역 식재료 중심.', 'Small-sharing-plates restaurant from the Bergen Børs Hotel group, spotlighting Vestland regional produce.'),
  place('bergen-fine_dining-3', 'bergen', 'fine_dining', 'Lysverket', 'Rasmus Meyers Allé 9, 5015 Bergen', 'KODE 미술관 건물 안의 미쉐린 1스타 레스토랑. 화~토 저녁에 엽니다.', 'One-Michelin-star restaurant in the KODE art museum building; Tuesday to Saturday evenings.', { michelin: 'star1', image: '/places/bergen-fine_dining-3.jpg' }),
  place('bergen-fine_dining-4', 'bergen', 'fine_dining', 'Gaptrast', 'Baneveien 16, 5010 Bergen', '서부 노르웨이 식재료로 요리하는 미쉐린 2스타 레스토랑(2026년 승급). 수~토 저녁에 엽니다.', 'Two-Michelin-star restaurant cooking with western Norwegian produce (promoted in 2026); Wednesday to Saturday evenings.', { michelin: 'star2' }),

  place('bergen-bakery-1', 'bergen', 'bakery', 'Godt Brød', 'Marken 1, 5017 Bergen', '역사적인 마르켄 거리에 위치한 노르웨이 유기농 베이커리 체인.', 'Norwegian organic-bakery chain outlet on the historic Marken street.'),
  place('bergen-bakery-2', 'bergen', 'bakery', 'Omni Kaiser Patisserie', 'Olav Kyrres gate 31, 5015 Bergen', '올라브 쿠레스 거리의 파티스리.', 'Patisserie on Olav Kyrres gate.'),
  place('bergen-bakery-3', 'bergen', 'bakery', 'Donutbakeren', 'C. Sundts gate 26, 5004 Bergen', '도넛 전문 베이커리.', 'Bakery specializing in donuts.'),
  place('bergen-bakery-4', 'bergen', 'bakery', 'Good Bread Floyen', 'Vetrlidsallmenningen 19, 5014 Bergen', '배달도 하는 빵집.', 'Bakery that also delivers.'),
  place('bergen-bakery-5', 'bergen', 'bakery', 'Baker Brun', 'Klostergaten 2, 5005 Bergen', '스킬링스볼레(시나몬번)를 파는 베르겐의 빵집 체인.', 'Bergen bakery chain selling skillingsboller cinnamon buns.', { image: '/places/bergen-bakery-5.jpg' }),

  place('bergen-cafe-1', 'bergen', 'cafe', 'Det Lille Kaffekompaniet', 'Nedre Fjellsmauet 2, 5018 Bergen', '당근 케이크와 카푸치노가 있는 작은 스페셜티 커피숍.', 'Tiny specialty coffee shop with carrot cake and cappuccinos.', { image: '/places/bergen-cafe-1.jpg' }),
  place('bergen-cafe-2', 'bergen', 'cafe', 'Café Opera', 'Engen 18, 5011 Bergen', '국립극장 옆 35년 전통의 카페 겸 레스토랑 겸 갤러리.', 'A 35-year-old café-restaurant-art-gallery institution next to the National Theatre.', { image: '/places/bergen-cafe-2.jpg' }),
  place('bergen-cafe-3', 'bergen', 'cafe', 'Blom', 'John Lunds plass 1, Fosswinckelsgate, 5007 Bergen', '대학가의 아늑한 커피숍. 페이스트리가 있습니다.', 'Cosy university-district coffee shop with pastries.'),

  place('bergen-korean-1', 'bergen', 'korean', 'Kogi', 'Kong Oscars gate 29, Bergen', '테이블 그릴이 있는 한국식 바비큐 식당.', 'Korean barbecue restaurant with tabletop grills.'),

  // —— tromso ——
  place('tromso-fine_dining-1', 'tromso', 'fine_dining', 'Restaurant Smak', 'Stakkevollvegen 39, 9010 Tromsø', '셰프 부부가 운영하는 작은 파인다이닝 레스토랑.', 'Intimate fine-dining restaurant run by a chef couple.'),
  place('tromso-fine_dining-2', 'tromso', 'fine_dining', 'Hildr', 'Skippergata 11, 9008 Tromsø', '노르웨이풍 5코스 테이스팅 메뉴와 칵테일 페어링을 선보이는 예술적인 가스트로 바.', 'Artistic gastro bar serving a five-course Norwegian-inspired tasting menu with cocktail pairings.'),
  place('tromso-fine_dining-3', 'tromso', 'fine_dining', 'Fiskekompaniet', 'Killengrens gate 6, 9008 Tromsø', '북극해 해산물로 테이스팅 메뉴를 내는 항구 레스토랑.', 'Harbourside restaurant serving tasting menus of Arctic seafood.'),

  place('tromso-bakery-1', 'tromso', 'bakery', 'Vervet Bakeri', 'Gjøastredet 1, 9008 Tromsø', '베르베트 워터프론트 지구의 트렌디한 베이커리, 항구와 산 전망을 즐기며 갓 구운 빵을 맛볼 수 있다.', 'Trendy bakery in the Vervet waterfront district, baking bread on-site with harbour and mountain views.'),
  place('tromso-bakery-2', 'tromso', 'bakery', 'Backstube Tromsø', 'Storgata 70, 9008 Tromsø', '트롬쇠 중심가에 위치한 셀프서비스 베이커리 카페테리아.', 'Self-service bakery-cafeteria on Tromsø\'s main pedestrian street.'),

  place('tromso-cafe-1', 'tromso', 'cafe', 'Risø', 'Strandgata 32, 9008 Tromsø', '싱글 오리진 핸드드립을 내는 스페셜티 커피 바.', 'Specialty coffee bar serving single-origin pour-overs.'),
  place('tromso-cafe-2', 'tromso', 'cafe', 'Kaffebønna', 'Stortorget 3, 9008 Tromsø', '중앙 광장의 트롬쇠 커피 체인 매장.', 'Tromsø coffee chain outlet on the main square.', { image: '/places/tromso-cafe-2.jpg' }),
  place('tromso-cafe-3', 'tromso', 'cafe', 'Selfie Konditori', 'Grønnegata 38, 9008 Tromsø', '모녀가 운영하는 아늑한 카페. 케이크가 있습니다.', 'Cosy café run by a mother and daughter, with cakes.'),

  // —— stavanger ——
  place('stavanger-fine_dining-1', 'stavanger', 'fine_dining', 'RE-NAA', 'Nordbøgata 8, 4006 Stavanger', '스타방에르의 미쉐린 3스타 레스토랑. 수~토 저녁에 엽니다.', 'Three-Michelin-star restaurant in Stavanger; Wednesday to Saturday evenings.', { michelin: 'star3', image: '/places/stavanger-fine_dining-1.jpg' }),
  place('stavanger-fine_dining-2', 'stavanger', 'fine_dining', 'Sabi Omakase', 'Pedersgata 38, 4013 Stavanger', '작은 오마카세 카운터의 미쉐린 1스타 스시 레스토랑. 수~토 저녁에 엽니다.', 'Small omakase counter with one Michelin star; Wednesday to Saturday evenings.', { michelin: 'star1' }),
  place('stavanger-fine_dining-3', 'stavanger', 'fine_dining', 'Fisketorget Stavanger', 'Strandkaien 37, 4005 Stavanger', '항구의 해산물 레스토랑 겸 수산 시장. 노르웨이식 생선 수프가 있습니다.', 'Harbourside seafood restaurant and fish market serving Norwegian fish soup.'),
  place('stavanger-fine_dining-4', 'stavanger', 'fine_dining', 'Matbaren Bistro by Renaa', 'Steinkargata 10, Breitorget, 4006 Stavanger', '레나 레스토랑 그룹의 프렌치풍 비스트로, 편안한 분위기의 스몰 플레이트.', 'French-inspired bistro from the Renaa restaurant group, offering refined small plates in a relaxed setting.'),

  place('stavanger-bakery-1', 'stavanger', 'bakery', 'Kanelsnurren Verksgata', 'Verksgata 24, 4013 Stavanger', '큼직한 시나몬롤을 굽는 빵집 겸 카페.', 'Bakery café with oversized cinnamon rolls.'),
  place('stavanger-bakery-2', 'stavanger', 'bakery', 'Kanelsnurren avd. Stavanger sentrum', 'Søregata 4, 4006 Stavanger', '스타방에르 시내 중심가의 카넬스누렌 지점.', 'City-centre branch of the Kanelsnurren cinnamon-roll bakery chain.'),
  place('stavanger-bakery-3', 'stavanger', 'bakery', 'Rosenkildehaven Bageri', 'Bakergata 9, 4013 Stavanger', '베이커리.', 'Bakery.'),
  place('stavanger-bakery-4', 'stavanger', 'bakery', 'Molinå Bakery', 'Verksgata 17A, 4013 Stavanger', '베이커리.', 'Bakery.'),

  place('stavanger-cafe-1', 'stavanger', 'cafe', 'Kokko Kaffebar', 'Østervåg 43, 4006 Stavanger', '세련된 노르딕 디자인의 3층 건물에 위치한 스페셜티 커피 로스터리.', 'Specialty coffee roastery spread across three floors of striking Nordic design.'),
  place('stavanger-cafe-2', 'stavanger', 'cafe', 'Bøker og Børst', 'Øvre Holmegate 32, 4006 Stavanger', '수제 커피와 중고 서점, 보드게임을 함께 즐길 수 있는 독특한 카페.', 'Quirky café combining craft coffee with secondhand books and board games.'),
  place('stavanger-cafe-3', 'stavanger', 'cafe', 'Micro Kaffi', 'Nytorget 17, 4013 Stavanger', '작은 스페셜티 커피 바.', 'Small specialty coffee bar.'),

  // —— trondheim ——
  place('trondheim-fine_dining-1', 'trondheim', 'fine_dining', 'Fagn', 'Ørjaveita 4, 7010 Trondheim', '트뢰넬라그 식재료로 테이스팅 메뉴를 내는 미쉐린 1스타 레스토랑.', 'One-Michelin-star tasting-menu restaurant cooking with Trøndelag produce.', { michelin: 'star1' }),
  place('trondheim-fine_dining-2', 'trondheim', 'fine_dining', 'Speilsalen', 'Dronningens gate 5, 7011 Trondheim', '브리타니아 호텔 안의 미쉐린 1스타 다이닝룸. 수~토 저녁에 엽니다.', 'One-Michelin-star dining room in the Britannia Hotel; Wednesday to Saturday evenings.', { michelin: 'star1' }),
  place('trondheim-fine_dining-3', 'trondheim', 'fine_dining', 'Søstrene Karlsen', 'TMV-kaia 25, 7042 Trondheim', '옛 조선소 부두에 위치한 워터프론트 레스토랑, 계절 노르웨이 메뉴.', 'Waterfront restaurant on the old shipyard quay, known for its seasonal Norwegian menu and harbor views.'),
  place('trondheim-fine_dining-4', 'trondheim', 'fine_dining', 'Baklandet Skydsstation', 'Øvre Bakklandet 33, Trondheim', '내셔널지오그래픽이 선정한 적 있는, 100년 넘은 옛 역참 카페 겸 레스토랑.', 'A century-old former coaching-station café-restaurant once named "Café of the Year" by National Geographic.', { image: '/places/trondheim-fine_dining-4.jpg' }),

  place('trondheim-bakery-1', 'trondheim', 'bakery', 'Hevd Bakeri & Pizzeria', 'Kongens gate 18, 7011 Trondheim', '낮에는 사워도우·페이스트리 베이커리, 밤에는 화덕 피자집.', 'Bakery by day serving sourdough and pastries, wood-fired pizzeria by night.'),
  place('trondheim-bakery-2', 'trondheim', 'bakery', 'Rosenborg Bakeri', 'Rosenborg gate 8-10, 7014 Trondheim', '로센보르 거리의 빵집.', 'Bakery on Rosenborg gate.', { image: '/places/trondheim-bakery-2.jpg' }),
  place('trondheim-bakery-3', 'trondheim', 'bakery', 'French pleasures AS', 'Haakon VIIs gt. 27, 7041 Trondheim', '프렌치풍 베이커리.', 'French-style bakery.'),
  place('trondheim-bakery-4', 'trondheim', 'bakery', 'Backstube Trondheim Jomfrugata', 'Jomfrugata 5, 7014 Trondheim', '욤프루가타 거리의 베이커리.', 'Bakery on Jomfrugata street.'),
  place('trondheim-bakery-5', 'trondheim', 'bakery', 'ISAK Bakeri', 'Kongens gate 2, 7011 Trondheim', '베이커리.', 'Bakery.'),

  place('trondheim-cafe-1', 'trondheim', 'cafe', 'Dromedar Kaffebar (Øya)', 'Håkon Jarls Gate 2, 7030 Trondheim', '트론헤임 커피 체인 드로메다르의 매장.', 'Outlet of the Trondheim coffee chain Dromedar.'),
  place('trondheim-cafe-2', 'trondheim', 'cafe', 'Dromedar Kaffebar (Bakklandet)', 'Nedre Bakklandet 3, 7014 Trondheim', '역사적인 바클란데트 지구에 위치한 드로메다르 커피바.', 'Coffee bar in the historic Bakklandet district, part of the local Dromedar chain.'),

  // —— alesund ——
  place('alesund-fine_dining-1', 'alesund', 'fine_dining', 'Restauranthuset No5', 'Apotekergata 5, 6004 Ålesund', '1907년 지어진 아르누보 양식 어물 창고를 개조한 시푸드 파인 다이닝, 북해에서 잡은 현지 생선 전문.', 'Seafood fine dining inside a converted 1907 Art Nouveau fishing warehouse, specializing in locally caught North Sea fish.'),
  place('alesund-fine_dining-2', 'alesund', 'fine_dining', 'XL Diner', 'Skaregata 1B, 6002 Ålesund', '항구가 보이는 해산물 식당. 바칼라오(염장 대구 요리)가 있습니다.', 'Harbour-view seafood restaurant serving bacalao (salt cod).'),

  // —— flam ——
  place('flam-fine_dining-1', 'flam', 'fine_dining', 'Ægir Gastropub', 'A-Feltvegen 25, 5743 Flåm', '9미터 벽난로를 중심으로 한 바이킹풍 브루펍 레스토랑, 자체 양조 맥주와 페어링하는 현지 노르웨이 요리.', 'Viking-inspired brewpub-restaurant built around a 9-metre fireplace, pairing local Norwegian dishes with its own craft beers.'),
  place('flam-fine_dining-2', 'flam', 'fine_dining', 'Restaurant Arven', 'Stasjonsvegen 8, Fretheim Hotel, 5743 Flåm', '유기농 현지 식재료로 만든 노르웨이 요리와 풍성한 해산물을 선보이는 역사적인 호텔 레스토랑.', 'Historic hotel dining room serving Norwegian cuisine from organic, locally sourced ingredients with a strong seafood selection.'),
]
