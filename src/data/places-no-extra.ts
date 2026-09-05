import { place } from './placeFactory'
import type { Place } from '../types'

export const placesNOExtra: Place[] = [
  // —— bergen ——
  place('bergen-fine_dining-1', 'bergen', 'fine_dining', 'Restaurant 1877', 4.7, 'Vetrlidsallmenningen 2, Bergen', '1877년 지어진 육류시장 건물을 개조한 레스토랑, 계절 노르웨이 요리 전문.', 'Restaurant in an 1877 former meat-market building, specializing in seasonal Norwegian cuisine.'),
  place('bergen-fine_dining-2', 'bergen', 'fine_dining', 'Bare Vestland', 4.5, 'Torgallmenningen 2, 5014 Bergen', '베르겐 뵈르스 호텔 그룹의 셰어링 플레이트 레스토랑, 베스트란드 지역 식재료 중심.', 'Small-sharing-plates restaurant from the Bergen Børs Hotel group, spotlighting Vestland regional produce.'),
  place('bergen-fine_dining-3', 'bergen', 'fine_dining', 'Lysverket', 4.2, 'Rasmus Meyers Allé 9, 5015 Bergen', 'KODE 4 미술관 안의 미쉐린 1스타 레스토랑, 신선한 해산물 중심 노르딕 테이스팅 메뉴.', 'One-Michelin-star restaurant inside the KODE 4 art museum, serving a Nordic tasting menu built on fresh seafood.'),
  place('bergen-fine_dining-4', 'bergen', 'fine_dining', 'Gaptrast', 5.0, 'Baneveien 16, Bergen', '미쉐린 2스타 레스토랑, 서부 노르웨이 식재료를 살린 야심찬 요리.', 'Two-Michelin-star restaurant serving ambitious, ingredient-driven Western Norway cuisine.'),

  place('bergen-bakery-1', 'bergen', 'bakery', 'Godt Brød', 4.4, 'Marken 1, 5017 Bergen', '역사적인 마르켄 거리에 위치한 노르웨이 유기농 베이커리 체인.', 'Norwegian organic-bakery chain outlet on the historic Marken street.'),
  place('bergen-bakery-2', 'bergen', 'bakery', 'Omni Kaiser Patisserie', 4.6, 'Olav Kyrres gate 31, 5015 Bergen', '올라브 쿠레스 거리의 평점 높은 파티스리.', 'Highly rated patisserie on Olav Kyrres gate.', { reviewCount: 145 }),
  place('bergen-bakery-3', 'bergen', 'bakery', 'Donutbakeren', 4.7, 'C. Sundts gate 26, 5004 Bergen', '평점 높은 도넛 전문 베이커리.', 'Highly rated bakery specializing in donuts.', { reviewCount: 264 }),
  place('bergen-bakery-4', 'bergen', 'bakery', 'Good Bread Floyen', 4.5, 'Vetrlidsallmenningen 19, 5014 Bergen', '평점 높은 인기 베이커리, 배달 서비스도 운영.', 'Popular, highly rated bakery that also offers delivery.', { reviewCount: 1028 }),
  place('bergen-bakery-5', 'bergen', 'bakery', 'Baker Brun', 4.6, 'Klostergaten 2, 5005 Bergen', '베르겐의 역사적인 베이커리 체인, 스킬링스볼레(계피빵)로 유명.', 'Historic Bergen bakery chain famous for its skillingsboller cinnamon buns.', { reviewCount: 239 }),

  place('bergen-cafe-1', 'bergen', 'cafe', 'Det Lille Kaffekompaniet', 4.7, 'Nedre Fjellsmauet 2, 5018 Bergen', '당근 케이크와 카푸치노로 유명한 베르겐의 작은 스페셜티 커피숍.', 'Tiny, highly rated specialty coffee shop famed for its carrot cake and cappuccinos.'),
  place('bergen-cafe-2', 'bergen', 'cafe', 'Café Opera', 3.8, 'Engen 18, 5011 Bergen', '국립극장 옆 35년 전통의 카페 겸 레스토랑 겸 갤러리.', 'A 35-year-old café-restaurant-art-gallery institution next to the National Theatre.'),
  place('bergen-cafe-3', 'bergen', 'cafe', 'Blom', 4.5, 'John Lunds plass 1, Fosswinckelsgate, 5007 Bergen', '대학가에 위치한 아늑한 커피숍, 좋은 원두와 페이스트리로 인기.', 'Cozy university-district coffee shop known for quality coffee and pastries.'),

  place('bergen-korean-1', 'bergen', 'korean', 'Kogi', 4.8, 'Kong Oscars gate 29, Bergen', '노르웨이 최초의 한식당, 테이블에 내장된 그릴로 즐기는 한국식 바비큐.', 'Norway\'s first Korean restaurant, with built-in tabletop grills for a full Korean BBQ experience.'),

  // —— tromso ——
  place('tromso-fine_dining-1', 'tromso', 'fine_dining', 'Restaurant Smak', 4.9, 'Stakkevollvegen 39, 9010 Tromsø', '북노르웨이를 대표하는 셰프 부부의 인티메이트 파인 다이닝.', 'Intimate fine-dining restaurant by a chef couple, one of Northern Norway\'s most acclaimed gastronomic destinations.', { reviewCount: 352 }),
  place('tromso-fine_dining-2', 'tromso', 'fine_dining', 'Hildr', 4.5, 'Skippergata 11, 9008 Tromsø', '노르웨이풍 5코스 테이스팅 메뉴와 칵테일 페어링을 선보이는 예술적인 가스트로 바.', 'Artistic gastro bar serving a five-course Norwegian-inspired tasting menu with cocktail pairings.', { reviewCount: 451 }),
  place('tromso-fine_dining-3', 'tromso', 'fine_dining', 'Fiskekompaniet', 4.3, 'Killengrens gate 6, 9008 Tromsø', '북극해에서 잡은 신선한 해산물 테이스팅 메뉴로 유명한 항구가 레스토랑.', 'Harbourside seafood restaurant known for tasting menus built on fresh Arctic catch.', { reviewCount: 1769 }),

  place('tromso-bakery-1', 'tromso', 'bakery', 'Vervet Bakeri', 4.7, 'Gjøastredet 1, 9008 Tromsø', '베르베트 워터프론트 지구의 트렌디한 베이커리, 항구와 산 전망을 즐기며 갓 구운 빵을 맛볼 수 있다.', 'Trendy bakery in the Vervet waterfront district, baking bread on-site with harbour and mountain views.', { reviewCount: 561 }),
  place('tromso-bakery-2', 'tromso', 'bakery', 'Backstube Tromsø', 4.5, 'Storgata 70, 9008 Tromsø', '트롬쇠 중심가에 위치한 셀프서비스 베이커리 카페테리아.', 'Self-service bakery-cafeteria on Tromsø\'s main pedestrian street.', { reviewCount: 637 }),

  place('tromso-cafe-1', 'tromso', 'cafe', 'Risø', 4.7, 'Strandgata 32, 9008 Tromsø', '싱글 오리진 푸어오버와 라떼아트로 유명한 스페셜티 커피 바.', 'Specialty coffee bar known for single-origin pour-overs and latte art.', { reviewCount: 1625 }),
  place('tromso-cafe-2', 'tromso', 'cafe', 'Kaffebønna', 4.3, 'Stortorget 3, 9008 Tromsø', '트롬쇠에서 가장 잘 알려진 로컬 커피 체인, 중앙 광장에 위치.', 'Tromsø\'s best-known local coffee chain, on the main square.'),
  place('tromso-cafe-3', 'tromso', 'cafe', 'Selfie Konditori', 4.8, 'Grønnegata 38, 9008 Tromsø', '모녀가 함께 운영하는 아늑한 카페, 케이크로 인기.', 'Charming café run by a mother-daughter team, known for its cakes.', { reviewCount: 119 }),

  // —— stavanger ——
  place('stavanger-fine_dining-1', 'stavanger', 'fine_dining', 'RE-NAA', 4.5, 'Nordbøgata 8, 4006 Stavanger', '아일러트 스미스 호텔 안의 미쉐린 3스타 시푸드 테이스팅 레스토랑.', 'Three-Michelin-star seafood tasting menu restaurant inside the Eilert Smith Hotel.'),
  place('stavanger-fine_dining-2', 'stavanger', 'fine_dining', 'Sabi Omakase', 4.3, 'Pedersgata 38, 4013 Stavanger', '단 10석의 미쉐린 1스타 오마카세 카운터, 약 20코스의 일식 스시 경험.', 'One-Michelin-star omakase counter seating just 10 guests for a roughly 20-course Japanese sushi experience.', { reviewCount: 256 }),
  place('stavanger-fine_dining-3', 'stavanger', 'fine_dining', 'Fisketorget Stavanger', 4.5, 'Strandkaien 37, 4005 Stavanger', '신선한 해산물과 클래식 노르웨이 생선 수프로 유명한 항구가 시푸드 레스토랑 겸 수산시장.', 'Harbourside seafood restaurant and fish market known for fresh catch and classic Norwegian fish soup.', { reviewCount: 1843 }),
  place('stavanger-fine_dining-4', 'stavanger', 'fine_dining', 'Matbaren Bistro by Renaa', 4.4, 'Steinkargata 10, Breitorget, 4006 Stavanger', '레나 레스토랑 그룹의 프렌치풍 비스트로, 편안한 분위기의 스몰 플레이트.', 'French-inspired bistro from the Renaa restaurant group, offering refined small plates in a relaxed setting.', { reviewCount: 805 }),

  place('stavanger-bakery-1', 'stavanger', 'bakery', 'Kanelsnurren Verksgata', 4.5, 'Verksgata 24, 4013 Stavanger', '큼직한 시나몬롤로 현지에서 사랑받는 베이커리 카페.', 'Bakery-café beloved locally for its oversized cinnamon rolls.'),
  place('stavanger-bakery-2', 'stavanger', 'bakery', 'Kanelsnurren avd. Stavanger sentrum', 4.5, 'Søregata 4, 4006 Stavanger', '스타방에르 시내 중심가의 카넬스누렌 지점.', 'City-centre branch of the Kanelsnurren cinnamon-roll bakery chain.', { reviewCount: 246 }),
  place('stavanger-bakery-3', 'stavanger', 'bakery', 'Rosenkildehaven Bageri', 4.9, 'Bakergata 9, 4013 Stavanger', '평점 높은 베이커리.', 'Highly rated bakery.', { reviewCount: 63 }),
  place('stavanger-bakery-4', 'stavanger', 'bakery', 'Molinå Bakery', 4.7, 'Verksgata 17A, 4013 Stavanger', '평점 높은 베이커리.', 'Highly rated bakery.', { reviewCount: 180 }),

  place('stavanger-cafe-1', 'stavanger', 'cafe', 'Kokko Kaffebar', 4.8, 'Østervåg 43, 4006 Stavanger', '세련된 노르딕 디자인의 3층 건물에 위치한 스페셜티 커피 로스터리.', 'Specialty coffee roastery spread across three floors of striking Nordic design.'),
  place('stavanger-cafe-2', 'stavanger', 'cafe', 'Bøker og Børst', 4.6, 'Øvre Holmegate 32, 4006 Stavanger', '수제 커피와 중고 서점, 보드게임을 함께 즐길 수 있는 독특한 카페.', 'Quirky café combining craft coffee with secondhand books and board games.'),
  place('stavanger-cafe-3', 'stavanger', 'cafe', 'Micro Kaffi', 4.8, 'Nytorget 17, 4013 Stavanger', '정교한 추출과 실력있는 바리스타로 유명한 작은 스페셜티 커피 바.', 'Tiny specialty coffee bar known for exacting brews and expert baristas.'),

  // —— trondheim ——
  place('trondheim-fine_dining-1', 'trondheim', 'fine_dining', 'Fagn', 5.0, 'Ørjaveita 4, 7010 Trondheim', '트뢰넬라그 지역 식재료만으로 구성한 테이스팅 메뉴의 미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant with a tasting menu built entirely around hyper-local Trøndelag ingredients.', { reviewCount: 835 }),
  place('trondheim-fine_dining-2', 'trondheim', 'fine_dining', 'Speilsalen', 4.9, 'Dronningens gate 5, Britannia Hotel, Trondheim', '역사적인 브리타니아 호텔 안의 미쉐린 1스타 다이닝룸, 컨템포러리 노르딕 요리.', 'One-Michelin-star dining room inside the historic Britannia Hotel, serving contemporary Nordic cuisine.'),
  place('trondheim-fine_dining-3', 'trondheim', 'fine_dining', 'Søstrene Karlsen', 4.8, 'TMV-kaia 25, 7042 Trondheim', '옛 조선소 부두에 위치한 워터프론트 레스토랑, 계절 노르웨이 메뉴.', 'Waterfront restaurant on the old shipyard quay, known for its seasonal Norwegian menu and harbor views.', { reviewCount: 1066 }),
  place('trondheim-fine_dining-4', 'trondheim', 'fine_dining', 'Baklandet Skydsstation', 4.8, 'Øvre Bakklandet 33, Trondheim', '내셔널지오그래픽이 선정한 적 있는, 100년 넘은 옛 역참 카페 겸 레스토랑.', 'A century-old former coaching-station café-restaurant once named "Café of the Year" by National Geographic.', { reviewCount: 3225 }),

  place('trondheim-bakery-1', 'trondheim', 'bakery', 'Hevd Bakeri & Pizzeria', 4.8, 'Kongens gate 18, 7011 Trondheim', '낮에는 사워도우·페이스트리 베이커리, 밤에는 화덕 피자집.', 'Bakery by day serving sourdough and pastries, wood-fired pizzeria by night.', { reviewCount: 665 }),
  place('trondheim-bakery-2', 'trondheim', 'bakery', 'Rosenborg Bakeri', 4.4, 'Rosenborg gate 8-10, 7014 Trondheim', '로센보르 거리의 인기 베이커리.', 'Popular bakery on Rosenborg gate.', { reviewCount: 562 }),
  place('trondheim-bakery-3', 'trondheim', 'bakery', 'French pleasures AS', 4.8, 'Haakon VIIs gt. 27, 7041 Trondheim', '평점 높은 프렌치풍 베이커리.', 'Highly rated French-style bakery.', { reviewCount: 196 }),
  place('trondheim-bakery-4', 'trondheim', 'bakery', 'Backstube Trondheim Jomfrugata', 4.7, 'Jomfrugata 5, 7014 Trondheim', '욤프루가타 거리의 평점 높은 베이커리.', 'Highly rated bakery on Jomfrugata street.', { reviewCount: 145 }),
  place('trondheim-bakery-5', 'trondheim', 'bakery', 'ISAK Bakeri', 4.9, 'Kongens gate 2, 7011 Trondheim', '평점 높은 베이커리.', 'Highly rated bakery.', { reviewCount: 80 }),

  place('trondheim-cafe-1', 'trondheim', 'cafe', 'Dromedar Kaffebar (Øya)', 4.8, 'Håkon Jarls Gate 2, 7030 Trondheim', '트론헤임의 인기 로컬 커피 체인 드로메다르의 지점.', 'Neighborhood outpost of Trondheim\'s popular home-grown coffee bar chain.'),
  place('trondheim-cafe-2', 'trondheim', 'cafe', 'Dromedar Kaffebar (Bakklandet)', 4.3, 'Nedre Bakklandet 3, 7014 Trondheim', '역사적인 바클란데트 지구에 위치한 드로메다르 커피바.', 'Coffee bar in the historic Bakklandet district, part of the local Dromedar chain.'),

  // —— alesund ——
  place('alesund-fine_dining-1', 'alesund', 'fine_dining', 'Restauranthuset No5', 4.0, 'Apotekergata 5, 6004 Ålesund', '1907년 지어진 아르누보 양식 어물 창고를 개조한 시푸드 파인 다이닝, 북해에서 잡은 현지 생선 전문.', 'Seafood fine dining inside a converted 1907 Art Nouveau fishing warehouse, specializing in locally caught North Sea fish.'),
  place('alesund-fine_dining-2', 'alesund', 'fine_dining', 'XL Diner', 4.3, 'Skaregata 1B, 6002 Ålesund', '유럽 최고의 바칼라오(염장대구) 요리로 꼽히는 항구 전망 시푸드 레스토랑.', 'Harbor-view seafood spot rated one of Europe\'s best for bacalao (salt cod).'),

  // —— flam ——
  place('flam-fine_dining-1', 'flam', 'fine_dining', 'Ægir Gastropub', 4.4, 'A-Feltvegen 25, 5743 Flåm', '9미터 벽난로를 중심으로 한 바이킹풍 브루펍 레스토랑, 자체 양조 맥주와 페어링하는 현지 노르웨이 요리.', 'Viking-inspired brewpub-restaurant built around a 9-metre fireplace, pairing local Norwegian dishes with its own craft beers.', { reviewCount: 1905 }),
  place('flam-fine_dining-2', 'flam', 'fine_dining', 'Restaurant Arven', 4.1, 'Stasjonsvegen 8, Fretheim Hotel, 5743 Flåm', '유기농 현지 식재료로 만든 노르웨이 요리와 풍성한 해산물을 선보이는 역사적인 호텔 레스토랑.', 'Historic hotel dining room serving Norwegian cuisine from organic, locally sourced ingredients with a strong seafood selection.'),
]
