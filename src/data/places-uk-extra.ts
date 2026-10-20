import { place } from './placeFactory'
import type { Place } from '../types'

export const placesUKExtra: Place[] = [
  // —— edinburgh ——
  place('edinburgh-fine_dining-1', 'edinburgh', 'fine_dining', 'Restaurant Martin Wishart', '54 The Shore, Leith, Edinburgh EH6 6RA', '리스 항구의 미쉐린 1스타 레스토랑. 수~토요일에 엽니다.', 'One-Michelin-star restaurant on the Shore in Leith; Wednesday to Saturday.', { michelin: 'star1' }),
  place('edinburgh-fine_dining-2', 'edinburgh', 'fine_dining', 'The Kitchin', '78 Commercial Quay, Leith, Edinburgh EH6 6LX', '리스의 미쉐린 1스타 스코틀랜드 요리 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star Scottish restaurant in Leith; closed Sundays and Mondays.', { michelin: 'star1', image: '/places/edinburgh-fine_dining-2.jpg' }),
  place('edinburgh-fine_dining-3', 'edinburgh', 'fine_dining', 'Restaurant Number One', '1 Princes Street, EH2 2EQ City of Edinburgh, United Kingdom', '발모럴 호텔의 코스 요리 레스토랑.', 'Tasting-menu restaurant at The Balmoral hotel.', { image: '/places/edinburgh-fine_dining-3.jpg' }),
  place('edinburgh-fine_dining-4', 'edinburgh', 'fine_dining', 'Timberyard', '10 Lady Lawson Street, EH3 9DS City of Edinburgh, United Kingdom', '옛 창고 건물의 미쉐린 1스타 레스토랑. 월·화요일은 쉽니다.', 'One-Michelin-star restaurant in a former warehouse; closed Mondays and Tuesdays.', { michelin: 'star1' }),
  place('edinburgh-bakery-1', 'edinburgh', 'bakery', 'Twelve Triangles', '90 Brunswick Street, EH7 5HU City of Edinburgh, United Kingdom', '2014년 문을 연 사워도우·도넛 빵집.', 'Sourdough and doughnut bakery, open since 2014.'),
  place('edinburgh-bakery-2', 'edinburgh', 'bakery', 'The Pastry Section', '143 Great Junction Street, EH6 5JB City of Edinburgh, United Kingdom', '리스의 케이크·페이스트리 가게. 당근 케이크와 시나몬 번이 있습니다.', 'Leith cake and pastry shop, with carrot cake and cinnamon buns.'),
  place('edinburgh-bakery-4', 'edinburgh', 'bakery', 'Lovecrumbs', '155 West Port, EH3 9DP City of Edinburgh, United Kingdom', '2010년 문을 연 웨스트 포트의 케이크 카페. 매일 굽는 조각 케이크를 냅니다.', 'Cake café on West Port, open since 2010, with a daily-changing slice counter.'),
  place('edinburgh-cafe-1', 'edinburgh', 'cafe', 'Union Brew Lab', '6-8 South College Street, Edinburgh EH8 9AA, United Kingdom', '2012년 문을 연 스페셜티 커피숍. 지금은 로스터 유니언이 운영합니다.', 'Specialty coffee shop opened in 2012, now run by the roaster Union.'),
  place('edinburgh-cafe-2', 'edinburgh', 'cafe', 'Williams & Johnson Coffee Co.', 'Custom Lane, 1 Customs Wharf, Leith, Edinburgh EH6 6AL, United Kingdom', '리스 커스텀 레인 건물 안의 로스터리 카페.', 'Roastery café inside the Custom Lane building in Leith.'),
  place('edinburgh-cafe-3', 'edinburgh', 'cafe', 'The Milkman', '52 Cockburn Street, EH1 1PB City of Edinburgh, United Kingdom', '콕번 거리의 작은 커피숍.', 'Small coffee shop on Cockburn Street.', { image: '/places/edinburgh-cafe-3.jpg' }),
  place('edinburgh-cafe-4', 'edinburgh', 'cafe', 'Cairngorm Coffee', 'Melville Place, Edinburgh (West End)', '웨스트엔드의 스페셜티 커피 카페. 바깥 자리에서 세인트 메리 대성당이 보입니다.', 'West End specialty coffee café with outdoor seats facing St Mary’s Cathedral.', { image: '/places/edinburgh-cafe-4.jpg' }),

  // —— manchester ——
  place('manchester-fine_dining-1', 'manchester', 'fine_dining', 'Mana', '42 Blossom Street, Ancoats, Manchester M4 6BF', '앤코츠의 미쉐린 1스타 레스토랑. 수~토요일에 엽니다.', 'One-Michelin-star restaurant in Ancoats; Wednesday to Saturday.', { michelin: 'star1' }),
  place('manchester-fine_dining-3', 'manchester', 'fine_dining', 'Adam Reid at The French', 'The Midland, Peter Street, Manchester M60 2DS, United Kingdom', '미들랜드 호텔 안의 코스 요리 전용 레스토랑. 셰프 애덤 리드가 이끕니다.', 'Tasting-menu restaurant in The Midland hotel, led by chef Adam Reid.'),
  place('manchester-fine_dining-4', 'manchester', 'fine_dining', 'Higher Ground', 'Faulkner House, New York Street, Manchester M1 4DY, United Kingdom', '포크너 하우스의 비스트로. 자체 텃밭 채소로 나눠 먹는 요리를 냅니다. 미쉐린 빕 구르망.', 'Bistro in Faulkner House serving sharing plates with produce from its own market garden. Michelin Bib Gourmand.', { michelin: 'bib' }),
  place('manchester-fine_dining-5', 'manchester', 'fine_dining', 'Where The Light Gets In', '7 Rostron Brow, SK1 1JY Stockport, United Kingdom', '2016년 문을 연 스톡포트의 로프트형 코스 요리 레스토랑.', 'Loft-style tasting-menu restaurant in Stockport, open since 2016.'),
  place('manchester-bakery-1', 'manchester', 'bakery', 'Pollen Bakery', '8 New Union Street, M4 6FQ Manchester, United Kingdom', '앤코츠 마리나 옆의 빵집. 시나몬 모닝 번으로 알려져 있습니다.', 'Bakery by Ancoats Marina, known for its cinnamon morning bun.'),
  place('manchester-bakery-2', 'manchester', 'bakery', 'Companio Bakery', '35 Radium Street, M4 6AD Manchester, United Kingdom', '앤코츠의 작은 테이크아웃 빵집. 크루아상과 페이스트리를 냅니다.', 'Small grab-and-go bakery in Ancoats, serving croissants and pastries.'),
  place('manchester-bakery-3', 'manchester', 'bakery', 'Gooey', 'Ducie Street Warehouse, 51 Ducie Street, Manchester M1 2JW, United Kingdom', '피커딜리역 근처 듀시 스트리트 웨어하우스 안의 디저트 빵집.', 'Dessert bakery inside Ducie Street Warehouse near Piccadilly station.'),
  place('manchester-cafe-2', 'manchester', 'cafe', 'Ancoats Coffee Co.', 'Unit 9, Royal Mills, 17 Redhill Street, Manchester M4 5BA, United Kingdom', '2015년부터 앤코츠 로열 밀스에서 영업하는 로스터리 카페.', 'Roastery café in Royal Mills, Ancoats, since 2015.'),
  place('manchester-cafe-5', 'manchester', 'cafe', 'Fig + Sparrow', '20 Oldham Street, M1 1JN Manchester, United Kingdom', '노던 쿼터의 카페 겸 소품 가게. 브런치를 냅니다.', 'Northern Quarter café and gift shop serving brunch.'),

  // —— bath ——
  place('bath-fine_dining-1', 'bath', 'fine_dining', 'Menu Gordon Jones', '2 Wellsway, BA2 3AQ Bath, United Kingdom', '셰프가 매일 바꾸는 \'서프라이즈 메뉴\'를 내는 오픈 키친 레스토랑. 수~토요일만 엽니다.', 'Open-kitchen restaurant serving a daily-changing surprise menu; open Wednesday to Saturday.'),
  place('bath-fine_dining-2', 'bath', 'fine_dining', 'The Olive Tree', 'The Queensberry Hotel, 4-7 Russel Street, Bath BA1 2QF, United Kingdom', '퀸즈베리 호텔 안의 미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant in the Queensberry Hotel.', { michelin: 'star1', image: '/places/bath-fine_dining-2.jpg' }),
  place('bath-fine_dining-3', 'bath', 'fine_dining', 'Allium at The Abbey Hotel', 'The Abbey Hotel, 1-3 North Parade, Bath BA1 1LF, United Kingdom', '애비 호텔의 브라세리. 웨스트 컨트리 식재료로 영국 요리를 냅니다.', 'Brasserie at The Abbey Hotel, serving British dishes from West Country produce.'),
  place('bath-fine_dining-4', 'bath', 'fine_dining', 'Corkage', '5 Chapel Row, BA1 1HN Bath, United Kingdom', '퀸 스퀘어 옆의 와인 바 겸 레스토랑. 제철 스몰 플레이트와 와인 리스트가 있습니다.', 'Wine bar and restaurant off Queen Square, with seasonal small plates and a long wine list.'),
  place('bath-fine_dining-5', 'bath', 'fine_dining', 'The Pump Room Restaurant', 'Stall Street, BA1 1LZ Bath, United Kingdom', '로마 목욕탕 옆 18세기 펌프 룸의 레스토랑. 아침·브런치와 애프터눈 티를 냅니다.', 'Restaurant in the 18th-century Pump Room beside the Roman Baths, serving breakfast, brunch and afternoon tea.'),
  place('bath-bakery-3', 'bath', 'bakery', 'Mjölk Café & Bakery', '13 Abbey Churchyard, Bath BA1 1LZ, UK', '배스 사원 앞 광장의 북유럽풍 카페 겸 베이커리.', 'Nordic-style café and bakery on the square by Bath Abbey.'),
  place('bath-bakery-4', 'bath', 'bakery', 'The Bath Bun', '2A Abbey Green, Bath BA1 1NW, United Kingdom', '애비 그린 광장의 전통 티룸. 이름처럼 배스 번과 애프터눈 티를 냅니다.', 'Traditional tearoom on Abbey Green, serving Bath buns and afternoon tea.'),
  place('bath-cafe-1', 'bath', 'cafe', 'Society Café', '4-5 Kingsmead Square, BA1 2AB Bath, United Kingdom', '킹스미드 광장 모퉁이의 커피숍. 광장 쪽 야외 좌석이 넓습니다.', 'Coffee shop on a corner of Kingsmead Square, with plenty of outdoor seating on the square.', { image: '/places/bath-cafe-1.jpg' }),
  place('bath-cafe-2', 'bath', 'cafe', 'Colonna & Small’s', '6 Chapel Row, Bath BA1 1HT, United Kingdom', '퀸 스퀘어 옆 채플 로의 스페셜티 커피숍.', 'Specialty coffee shop on Chapel Row by Queen Square.'),
  place('bath-cafe-3', 'bath', 'cafe', 'Café Retro', '18 York Street, Bath BA1 1NG, United Kingdom', '배스 사원이 보이는 2층짜리 카페. 아침 메뉴를 종일 냅니다.', 'Two-floor café overlooking Bath Abbey, with a breakfast menu.', { image: '/places/bath-cafe-3.jpg' }),
  place('bath-cafe-5', 'bath', 'cafe', 'Boston Tea Party', '19 Kingsmead Square, Bath BA1 2AE, United Kingdom', '킹스미드 광장의 카페 체인 지점. 브런치와 커피를 냅니다.', 'Kingsmead Square branch of the café chain, serving brunch and coffee.'),

  // —— oxford ——
  place('oxford-fine_dining-2', 'oxford', 'fine_dining', 'Cherwell Boathouse', '50 Bardwell Road, OX2 6ST Oxford, United Kingdom', '1904년부터 이어진 처웰강 변 보트하우스의 레스토랑. 펀트 대여도 합니다.', 'Restaurant at a riverside boathouse on the Cherwell dating from 1904, which also rents punts.', { image: '/places/oxford-fine_dining-2.jpg' }),
  place('oxford-fine_dining-3', 'oxford', 'fine_dining', 'Gees Restaurant', '61-63 Banbury Road, Oxford OX2 6PE, United Kingdom', '빅토리아 시대 온실 건물의 지중해식 레스토랑.', 'Mediterranean-style restaurant in a Victorian conservatory.'),
  place('oxford-fine_dining-4', 'oxford', 'fine_dining', 'The Perch', 'Binsey Lane, OX2 0NG Oxford, United Kingdom', '포트 메도 근처 빈시 마을의 펍. 정원과 식당이 있습니다.', 'Pub in Binsey near Port Meadow, with a garden and dining room.', { image: '/places/oxford-fine_dining-4.jpg' }),
  place('oxford-fine_dining-5', 'oxford', 'fine_dining', 'Quod Restaurant & Bar', '92-94 High Street, OX1 4BJ Oxford, United Kingdom', '올드 뱅크 호텔의 레스토랑 겸 바. 하이 스트리트에서 래드클리프 카메라가 보입니다.', 'Restaurant and bar of the Old Bank Hotel on the High Street, looking out to the Radcliffe Camera.'),
  place('oxford-bakery-1', 'oxford', 'bakery', 'Hamblin Bread', '247 Iffley Rd, Oxford OX4 1SJ, UK', '이플리 로드의 동네 빵집 겸 카페.', 'Neighbourhood bakery café on Iffley Road.', { image: '/places/oxford-bakery-1.jpg' }),
  place('oxford-cafe-1', 'oxford', 'cafe', 'The Missing Bean', '14 Turl Street, OX1 3DQ Oxford, United Kingdom', '턴 스트리트의 스페셜티 커피숍. 원두를 직접 볶습니다.', 'Specialty coffee shop on Turl Street that roasts its own beans.', { image: '/places/oxford-cafe-1.jpg' }),
  place('oxford-cafe-2', 'oxford', 'cafe', 'Peloton Espresso', '76 Cowley Road, OX4 1JB Oxford, United Kingdom', '카울리 로드의 자전거 테마 커피숍. 안뜰 좌석이 있습니다.', 'Cycling-themed coffee shop on Cowley Road, with a courtyard.', { image: '/places/oxford-cafe-2.jpg' }),
  place('oxford-cafe-3', 'oxford', 'cafe', 'Handle Bar Café', "28-32 St Michael's Street, Oxford OX1 2EB, United Kingdom", '시내 중심의 자전거 테마 카페. 브런치를 냅니다.', 'Cycling-themed café in the city centre, serving brunch.', { image: '/places/oxford-cafe-3.jpg' }),
  place('oxford-cafe-5', 'oxford', 'cafe', 'Broche Specialty Coffee', '165 Kingston Rd, Oxford OX2 6EG, UK', '제리코 킹스턴 로드의 작은 창구식 커피숍. 바깥 테이블만 있습니다.', 'Small hatch-style coffee shop on Kingston Road in Jericho, with outdoor tables only.'),

  // —— cambridge ——
  place('cambridge-fine_dining-1', 'cambridge', 'fine_dining', 'Midsummer House', 'Midsummer Common, Cambridge CB4 1HA, UK', '캠강변 미드서머 커먼의 미쉐린 2스타 레스토랑. 수~토요일에 엽니다.', 'Two-Michelin-star restaurant on Midsummer Common by the Cam; Wednesday to Saturday.', { michelin: 'star2', image: '/places/cambridge-fine_dining-1.jpg' }),
  place('cambridge-fine_dining-3', 'cambridge', 'fine_dining', 'The Oak Bistro', '6 Lensfield Road, CB2 1EG Cambridge, United Kingdom', '옛 여관 건물의 비스트로. 영국·유럽 요리와 안뜰 좌석이 있습니다.', 'Bistro in a former inn, serving British and European dishes with courtyard seating.', { image: '/places/cambridge-fine_dining-3.jpg' }),
  place('cambridge-bakery-1', 'cambridge', 'bakery', 'Fitzbillies', '51-52 Trumpington Street, Cambridge CB2 1RG, United Kingdom', '첼시 번으로 알려진 트럼핑턴 거리의 베이커리 카페.', 'Bakery café on Trumpington Street, known for its Chelsea buns.', { image: '/places/cambridge-bakery-1.jpg' }),
  place('cambridge-cafe-1', 'cambridge', 'cafe', 'Hot Numbers Coffee', '4 Trumpington Street, CB2 1QA Cambridge, United Kingdom', '트럼핑턴 거리의 로스터리 카페 지점.', 'Trumpington Street branch of a local roaster\'s café.'),
  place('cambridge-cafe-2', 'cambridge', 'cafe', 'Bould Brothers Coffee', '16 Round Church St, Cambridge CB5 8AD, UK', '라운드 처치 맞은편의 아주 작은 스페셜티 커피숍.', 'Tiny specialty coffee shop opposite the Round Church.'),
  place('cambridge-cafe-4', 'cambridge', 'cafe', 'Urban Larder', '9 The Broadway, Mill Road, Cambridge CB1 3NA, United Kingdom', '밀 로드의 카페 겸 델리. 매주 새 맛 도넛을 냅니다.', 'Mill Road café and deli, with a new doughnut flavour each week.'),
  place('cambridge-cafe-5', 'cambridge', 'cafe', 'Michaelhouse Café', 'Trinity Street, CB2 1SU Cambridge, United Kingdom', '트리니티 거리 성 미카엘 교회 안의 카페. 제철 점심과 케이크를 냅니다.', 'Café inside St Michael\'s Church on Trinity Street, serving seasonal lunches and cakes.', { image: '/places/cambridge-cafe-5.jpg' }),

  // —— liverpool ——
  place('liverpool-fine_dining-1', 'liverpool', 'fine_dining', 'Daise by Tony Parkin', '11 Rose Mount, Oxton, Birkenhead, Prenton CH43 5SG, UK', '2026년 2월 옥스턴에 문을 연 셰프 토니 파킨의 코스 요리 레스토랑.', 'Chef Tony Parkin\'s tasting-menu restaurant in Oxton, opened in February 2026.'),
  place('liverpool-fine_dining-2', 'liverpool', 'fine_dining', 'The Art School Restaurant', '1 Sugnall Street, L7 7EB Liverpool, United Kingdom', '옛 미술학교 건물의 레스토랑. 미쉐린 가이드에 실려 있습니다.', 'Restaurant in a former art school building, listed in the MICHELIN Guide.'),
  place('liverpool-fine_dining-3', 'liverpool', 'fine_dining', 'Lunya', '55 Hanover Street, L1 4LN Liverpool, United Kingdom', '리버풀 원의 카탈루냐·스페인 요리 레스토랑 겸 델리.', 'Catalan and Spanish restaurant and deli in Liverpool ONE.'),
  place('liverpool-fine_dining-4', 'liverpool', 'fine_dining', 'Maray', '91 Bold Street, L1 4HF Liverpool, United Kingdom', '2014년 문을 연 볼드 스트리트의 지중해·중동식 스몰 플레이트 레스토랑.', 'Bold Street restaurant serving Mediterranean and Middle Eastern small plates, open since 2014.'),
  place('liverpool-fine_dining-5', 'liverpool', 'fine_dining', 'Belzan', '371 Smithdown Road, Liverpool L15 3JJ, United Kingdom', '스미스다운 로드의 동네 비스트로. 수~일요일 엽니다.', 'Neighbourhood bistro on Smithdown Road, open Wednesday to Sunday.', { image: '/places/liverpool-fine_dining-5.jpg' }),
  place('liverpool-bakery-1', 'liverpool', 'bakery', 'Rough Handmade', 'Unit 2A, Britannia Pavilion, Royal Albert Dock, Liverpool L3 4AD, United Kingdom', '로열 앨버트 독의 빵집 겸 카페. 오픈 키친이 있습니다.', 'Bakery café at the Royal Albert Dock, with an open kitchen.'),
  place('liverpool-bakery-3', 'liverpool', 'bakery', 'The Baltic Bakehouse', '46 Bridgewater Street, L1 0AY Liverpool, United Kingdom', '발틱 트라이앵글의 빵집 겸 카페. 사워도우와 페이스트리를 냅니다.', 'Bakery café in the Baltic Triangle, serving sourdough and pastries.'),
  place('liverpool-bakery-4', 'liverpool', 'bakery', 'Homebaked Anfield', '197-199 Oakfield Road, Anfield, Liverpool L4 0UF, United Kingdom', '안필드 경기장 콥 스탠드 맞은편의 협동조합 빵집. 파이로 알려져 있습니다.', 'Co-operative bakery opposite the Kop at Anfield, known for its pies.'),
  place('liverpool-cafe-1', 'liverpool', 'cafe', 'Bold Street Coffee', '89 Bold Street, L1 4HF Liverpool, United Kingdom', '2009년부터 볼드 스트리트에서 영업하는 스페셜티 커피숍.', 'Specialty coffee shop on Bold Street since 2009.'),
  place('liverpool-cafe-5', 'liverpool', 'cafe', 'Leaf', '364-368 Smithdown Road, L15 5AN Liverpool, United Kingdom', '2019년 문을 연 스미스다운 로드의 카페. 아침부터 저녁까지 식사를 냅니다.', 'Café on Smithdown Road, opened in 2019, serving food from breakfast to evening.'),

  // —— brighton ——
  place('brighton-fine_dining-1', 'brighton', 'fine_dining', 'The Salt Room', "106 King's Road, BN1 2FU Brighton, United Kingdom", '해변 도로의 해산물 레스토랑.', 'Seafood restaurant on the seafront road.'),
  place('brighton-fine_dining-2', 'brighton', 'fine_dining', '64 Degrees', '53 Meeting House Lane, Brighton BN1 1HB, United Kingdom', '더 레인스 골목의 오픈 키친 레스토랑. 작은 접시 코스 요리를 냅니다.', 'Open-kitchen restaurant in The Lanes, serving small-plate tasting menus.'),
  place('brighton-fine_dining-4', 'brighton', 'fine_dining', 'The Coal Shed', '30-31 North Street, BN1 1EB Brighton, United Kingdom', '노스 스트리트의 숯불 스테이크·해산물 레스토랑.', 'Charcoal-grill steak and seafood restaurant on North Street.', { image: '/places/brighton-fine_dining-4.jpg' }),
  place('brighton-bakery-2', 'brighton', 'bakery', 'The Flour Pot Bakery', '124 Elm Grove, BN2 3DB Brighton, United Kingdom', '엘름 그로브의 동네 빵집. 빵을 매일 밤 굽습니다.', 'Neighbourhood bakery on Elm Grove, baking bread every night.', { image: '/places/brighton-bakery-2.jpg' }),
  place('brighton-cafe-2', 'brighton', 'cafe', 'Joe’s Café', '24 Upper Hamilton Rd, Brighton BN1 5DF', '세븐 다이얼스 근처의 작은 동네 카페. 지역 농산물로 만든 아침·브런치.', 'Small neighbourhood café near Seven Dials, serving breakfast and brunch from local suppliers.'),
  place('brighton-cafe-3', 'brighton', 'cafe', 'Metrodeco', "38 Upper St James's Street, Brighton BN2 1JN, United Kingdom", '켐프타운의 빈티지 티룸. 애프터눈 티와 브런치를 냅니다.', 'Vintage tearoom in Kemptown serving afternoon tea and brunch.', { image: '/places/brighton-cafe-3.jpg' }),

  // —— york ——
  place('york-fine_dining-1', 'york', 'fine_dining', 'The Star Inn the City', 'Lendal Engine House, Museum Street, York YO1 7DR, United Kingdom', '뮤지엄 가든 옆 옛 기관실 건물의 강변 레스토랑.', 'Riverside restaurant in the old engine house by the Museum Gardens.', { image: '/places/york-fine_dining-1.jpg' }),
  place('york-fine_dining-2', 'york', 'fine_dining', 'Roots', 'Marygate, YO30 7BH York, United Kingdom', '옛 펍 건물의 코스 요리 레스토랑. 셰프 토미 뱅크스 가족 농장의 식재료를 씁니다. 미쉐린 1스타.', 'Tasting-menu restaurant in a former pub, using produce from chef Tommy Banks\'s family farm. One Michelin star.', { michelin: 'star1', image: '/places/york-fine_dining-2.jpg' }),
  place('york-fine_dining-3', 'york', 'fine_dining', 'Skosh', '98 Micklegate, YO1 6JX York, United Kingdom', '미클게이트의 스몰 플레이트 레스토랑. 일본·중동풍 요리를 오픈 키친에서 냅니다.', 'Small-plates restaurant on Micklegate with Japanese and Middle Eastern influences and an open kitchen.', { image: '/places/york-fine_dining-3.jpg' }),
  place('york-fine_dining-5', 'york', 'fine_dining', 'Melton’s', '7 Scarcroft Road, York YO23 1ND, United Kingdom', '1990년 문을 연 스카크로프트 로드의 레스토랑. 코스 요리를 냅니다.', 'Restaurant on Scarcroft Road, open since 1990, serving tasting menus.'),
  place('york-bakery-5', 'york', 'bakery', 'Bettys Café Tea Rooms', "6-8 St Helen's Square, YO1 8QP York, United Kingdom", '세인트 헬렌 광장의 3층짜리 티룸. 퀸 메리호를 본뜬 실내에서 애프터눈 티를 냅니다.', 'Three-storey tearoom on St Helen\'s Square, serving afternoon tea in rooms inspired by the Queen Mary liner.'),
  place('york-cafe-1', 'york', 'cafe', 'Spring Espresso', '21 Lendal, YO1 8AQ York, United Kingdom', '스페셜티 커피.', 'Specialty coffee.', { image: '/places/york-cafe-1.jpg' }),
  place('york-cafe-2', 'york', 'cafe', 'Brew & Brownie', '5 Museum Street, YO1 7DT York, United Kingdom', '뮤지엄 스트리트의 카페. 브라우니와 브런치를 냅니다.', 'Café on Museum Street serving brownies and brunch.', { image: '/places/york-cafe-2.jpg' }),
  place('york-cafe-4', 'york', 'cafe', 'Partisan', '112 Micklegate, YO1 6JX York, United Kingdom', '미클게이트의 가족 운영 카페. 제철 브런치를 냅니다.', 'Family-run café on Micklegate serving seasonal brunch.', { image: '/places/york-cafe-4.jpg' }),
  place('york-cafe-5', 'york', 'cafe', 'Perky Peacock', 'Barker Tower, North Street, York YO1 6BE, United Kingdom', '레덜 다리 옆 중세 탑 안의 작은 카페.', 'Tiny café inside a medieval tower beside Lendal Bridge.', { image: '/places/york-cafe-5.jpg' }),

  // —— bristol ——
  place('bristol-fine_dining-1', 'bristol', 'fine_dining', 'Bulrush', '21 Cotham Road South, BS6 5TZ Bristol, United Kingdom', '코섬의 미쉐린 1스타 현대 영국 요리 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star modern British restaurant in Cotham; closed Sundays and Mondays.', { michelin: 'star1', image: '/places/bristol-fine_dining-1.jpg' }),
  place('bristol-fine_dining-2', 'bristol', 'fine_dining', 'Wilson’s', '24 Chandos Road, Bristol BS6 6PF, United Kingdom', '레드랜드의 미쉐린 1스타 계절 요리 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star seasonal restaurant in Redland; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('bristol-bakery-1', 'bristol', 'bakery', 'Hart’s Bakery', 'Arch 35, Lower Approach Road, Temple Meads, Bristol BS1 6QS, United Kingdom', '템플 미즈역 아래 철도 아치의 빵집 겸 카페.', 'Bakery and café in a railway arch under Temple Meads station.', { image: '/places/bristol-bakery-1.jpg' }),
  place('bristol-bakery-2', 'bristol', 'cafe', 'Better Food Wapping Wharf', '1-5 Gaol Ferry Steps, Wapping Wharf, Bristol BS1 6WE, United Kingdom', '와핑 워프의 유기농 식료품점 겸 카페. 테라스가 있습니다.', 'Organic grocery and café at Wapping Wharf, with a terrace.'),
  place('bristol-bakery-3', 'bristol', 'bakery', 'The Bristol Loaf', '94-96 Bedminster Parade, BS3 4HL Bristol, United Kingdom', '베드민스터의 빵집 겸 카페. 직접 구운 빵과 브런치를 냅니다.', 'Bedminster bakery and café, serving its own bread and brunch.'),
  place('bristol-cafe-1', 'bristol', 'cafe', 'Full Court Press', '59 Broad Street, BS1 2EJ Bristol, United Kingdom', '구시가 브로드 스트리트의 스페셜티 커피숍. 근처에 자체 로스터리가 있습니다.', 'Specialty coffee shop on Broad Street in the old city, with its own roastery nearby.', { image: '/places/bristol-cafe-1.jpg' }),
  place('bristol-cafe-3', 'bristol', 'cafe', 'Small Street Espresso', '23 Small Street, BS1 1DW Bristol, United Kingdom', '2012년 문을 연 구시가의 작은 에스프레소 바.', 'Tiny old-city espresso bar, open since 2012.'),
  place('bristol-cafe-5', 'bristol', 'cafe', 'Boston Tea Party Bristol', 'St Johns Court, Whiteladies Road, Clifton, Bristol BS8 2QY, United Kingdom', '클리프턴 화이트레이디스 로드의 카페 체인 지점.', 'Whiteladies Road branch of the café chain in Clifton.'),

  // —— canterbury ——
  place('canterbury-fine_dining-1', 'canterbury', 'fine_dining', 'The Goods Shed', 'Station Road West, Canterbury CT2 8AN', '매일 열리는 농산물 시장 위의 제철 요리 레스토랑.', 'Seasonal restaurant above a daily farmers\' market.', { image: '/places/canterbury-fine_dining-1.jpg' }),
  place('canterbury-bakery-1', 'canterbury', 'bakery', 'The Goods Shed Bakery', 'Station Road West, Canterbury CT2 8AN', '굿즈 셰드 안에서 직접 굽는 빵과 페이스트리.', 'In-house breads and pastries at The Goods Shed.'),
  place('canterbury-cafe-1', 'canterbury', 'cafe', 'The Refectory Kitchen', "16 St Dunstan's Street, Canterbury CT2 8AF, United Kingdom", '2003년부터 영업한 세인트 던스턴 거리의 브런치 카페. 예약을 받지 않습니다.', 'Brunch café on St Dunstan\'s Street since 2003; no reservations.', { image: '/places/canterbury-cafe-1.jpg' }),
  place('canterbury-cafe-2', 'canterbury', 'cafe', 'Cafe Chambers', '59 Palace Street, CT1 2DY Canterbury, United Kingdom', '팰리스 거리의 브런치 카페. 위층에서 대성당이 보이고 비건 메뉴가 있습니다.', 'Brunch café on Palace Street with cathedral views upstairs and a vegan menu.'),

  // —— windsor ——
  place('windsor-fine_dining-1', 'windsor', 'fine_dining', 'The Boatman', '10 Thames Side, Windsor SL4 1QN, United Kingdom', '1829년 무렵부터 이어진 템스강 변의 펍. 강가 테라스가 있습니다.', 'Thames-side pub dating from at least 1829, with a riverside terrace.'),
  place('windsor-fine_dining-2', 'windsor', 'fine_dining', 'Meimo', '69-70 Peascod Street, SL4 1DE Windsor, United Kingdom', '피스코드 거리 끝의 모로코·지중해 레스토랑. 타진을 냅니다.', 'Moroccan and Mediterranean restaurant at the end of Peascod Street, serving tagines.'),
  place('windsor-fine_dining-3', 'windsor', 'fine_dining', 'The Waterman\'s Arms', 'Brocas Street, Eton SL4 6BW', '윈저에서 다리를 건너면 바로 있는 1682년 무렵부터의 이튼 펍. 조정 기념품이 걸려 있습니다.', 'Eton pub dating from around 1682, just over the bridge from Windsor, hung with rowing memorabilia.', { image: '/places/windsor-fine_dining-3.jpg' }),

  // —— salisbury ——
  place('salisbury-fine_dining-1', 'salisbury', 'fine_dining', 'Haunch of Venison', '1-5 Minster Street, Salisbury SP1 1TB', '14~15세기 건물의 역사적인 펍. 위층에 식당이 있습니다.', 'Historic pub in a 14th–15th-century building, with an upstairs dining room.', { image: '/places/salisbury-fine_dining-1.jpg' }),
  place('salisbury-cafe-1', 'salisbury', 'cafe', 'Salisbury Museum Café', "The King's House, 65 The Close, Salisbury SP1 2EN, United Kingdom", '대성당 서쪽 정면 맞은편 솔즈베리 박물관(킹스 하우스)의 카페. 정원에서 대성당이 보입니다.', 'Café of the Salisbury Museum in the King\'s House, opposite the cathedral\'s west front; its garden looks onto the cathedral.'),

  // —— cotswolds ——
  place('cotswolds-fine_dining-1', 'cotswolds', 'fine_dining', 'The Old New Inn', 'Rissington Road, Bourton-on-the-Water GL54 2AF, United Kingdom', '1712년부터 이어진 버턴온더워터의 여관 펍. 식사는 정해진 요일·시간에만 냅니다.', 'Inn and pub in Bourton-on-the-Water dating from 1712; food is served only on set days and times.', { image: '/places/cotswolds-fine_dining-1.jpg' }),
  place('cotswolds-fine_dining-2', 'cotswolds', 'fine_dining', 'The Porch House', '1 Digbeth Street, Stow-on-the-Wold GL54 1BN, United Kingdom', '영국에서 가장 오래된 여관이라고 알려진 스토온더월드의 여관. 레스토랑과 펍이 있습니다.', 'Stow-on-the-Wold inn said to be England\'s oldest, with a restaurant and a pub.', { image: '/places/cotswolds-fine_dining-2.jpg' }),
  place('cotswolds-bakery-1', 'cotswolds', 'bakery', 'The Bakery on the Water', '1 Sherborne Street, Bourton-on-the-Water GL54 2BY, United Kingdom', '1978년 문을 연 버턴온더워터의 가족 운영 빵집 겸 카페. 강가 좌석이 있습니다.', 'Family-run bakery café in Bourton-on-the-Water, open since 1978, with riverside seating.', { image: '/places/cotswolds-bakery-1.jpg' }),
  place('cotswolds-cafe-1', 'cotswolds', 'cafe', 'Bantam Tea Rooms', 'High Street, Chipping Campden GL55 6HB, United Kingdom', '치핑 캠든 하이 스트리트의 1693년 건물에 있는 티룸. 매일 스콘과 케이크를 굽습니다.', 'Tearoom in a 1693 building on Chipping Campden\'s High Street, baking scones and cakes daily.'),

  // —— stratford-upon-avon ——
  place('stratford-upon-avon-fine_dining-1', 'stratford-upon-avon', 'fine_dining', 'The Opposition', '13 Sheep Street, Stratford-upon-Avon CV37 6EF', '로열 셰익스피어 극장 근처의 모던 유럽 비스트로. 공연 전후 식사로 알려져 있습니다.', 'Modern European bistro near the Royal Shakespeare Theatre, known for pre- and post-theatre meals.'),
  place('stratford-upon-avon-bakery-1', 'stratford-upon-avon', 'bakery', 'Hobsons Patisseries', '1 Henley Street, CV37 6PT Stratford-on-Avon, United Kingdom', '셰익스피어 생가 근처의 가족 운영 파티스리. 스콘과 크림 티를 냅니다.', 'Family-run patisserie near Shakespeare\'s Birthplace, serving scones and cream teas.'),
  place('stratford-upon-avon-cafe-1', 'stratford-upon-avon', 'cafe', 'Fourteas Tea Room', '24 Sheep Street, Stratford-upon-Avon CV37 6EF, United Kingdom', '로열 셰익스피어 극장 근처의 1940년대 테마 티룸. 애프터눈 티를 냅니다.', '1940s-themed tearoom near the Royal Shakespeare Theatre, serving afternoon tea.'),

  // —— lake-district ——
  place('lake-district-fine_dining-1', 'lake-district', 'fine_dining', 'Forest Side', 'Keswick Road, Grasmere LA22 9RN, United Kingdom', '그래스미어의 미쉐린 1스타 레스토랑. 텃밭과 채집 재료로 요리합니다.', 'One-Michelin-star restaurant in Grasmere cooking with garden and foraged produce.', { michelin: 'star1', image: '/places/lake-district-fine_dining-1.jpg' }),
  place('lake-district-fine_dining-2', 'lake-district', 'fine_dining', 'The Old Stamp House', 'Church Street, Ambleside LA22 0BU, United Kingdom', '앰블사이드의 작은 미쉐린 1스타 레스토랑. 컴브리아 향토 재료를 씁니다.', 'Small one-Michelin-star restaurant in Ambleside cooking with Cumbrian produce.', { michelin: 'star1' }),
  place('lake-district-bakery-1', 'lake-district', 'bakery', 'Grasmere Gingerbread Shop', 'Church Cottage, Grasmere LA22 9SW, United Kingdom', '1854년 그래스미어 진저브레드가 처음 만들어진 오두막의 가게.', 'Shop in the cottage where Grasmere Gingerbread was first made in 1854.'),
  place('lake-district-fine_dining-3', 'lake-district', 'fine_dining', 'Zeffirellis', '2 Compston Road, Ambleside LA22 9AD, United Kingdom', '1980년부터 앰블사이드 중심가에서 영업하는 레스토랑. 영화관·재즈 바와 함께 있습니다.', 'Restaurant in central Ambleside since 1980, sharing its site with a cinema and jazz bar.'),

  // —— st-ives ——
  place('st-ives-fine_dining-1', 'st-ives', 'fine_dining', 'Porthminster Beach Café', 'Porthminster Beach, St Ives TR26 2EB', '포스민스터 해변 바로 앞의 해산물·지중해식 레스토랑.', 'Seafood and Mediterranean-leaning restaurant right on Porthminster Beach.'),
  place('st-ives-fine_dining-2', 'st-ives', 'fine_dining', 'Porthminster Kitchen', 'Wharf Road, TR26 1LG St. Ives, United Kingdom', '세인트아이브스 항구 위 2층의 레스토랑. 콘월 식재료로 작은 접시 요리를 냅니다.', 'First-floor restaurant above St Ives harbour serving small plates of Cornish produce.', { image: '/places/st-ives-fine_dining-2.jpg' }),

  // —— glasgow ——
  place('glasgow-fine_dining-1', 'glasgow', 'fine_dining', 'Ubiquitous Chip', '8-12 Ashton Lane, Glasgow G12 8SJ', '애슈턴 레인의 스코틀랜드 요리 레스토랑. 식물과 연못으로 꾸민 안뜰 식당이 있습니다.', 'Scottish restaurant on Ashton Lane, with a courtyard dining room full of plants and a fish pond.', { image: '/places/glasgow-fine_dining-1.jpg' }),
  place('glasgow-fine_dining-2', 'glasgow', 'fine_dining', 'Ox and Finch', '920 Sauchiehall Street, Glasgow G3 7TF', '사우키홀 거리의 스몰 플레이트 비스트로. 미쉐린 가이드에 실려 있고 2025년 초 새 단장했습니다.', 'Small-plates bistro on Sauchiehall Street, listed in the MICHELIN Guide, refurbished in early 2025.'),
  place('glasgow-cafe-1', 'glasgow', 'cafe', 'The Mackintosh Tearooms', '215-217 Sauchiehall Street, Glasgow G2 3EX', '매킨토시가 1903년 설계한 윌로 티룸 건물의 찻집. 2026년 2월 이름이 바뀌었습니다.', 'Tearoom in the Willow Tea Rooms building designed by Mackintosh in 1903; renamed in February 2026.', { image: '/places/glasgow-cafe-1.jpg' }),

  // —— stirling ——
  place('stirling-cafe-1', 'stirling', 'cafe', 'Darnley Coffee House', '18 Bow Street, Stirling FK8 1BS', '16세기 아치형 천장의 지하 공간을 쓰는 구시가의 커피하우스.', 'Old-town coffee house in a 16th-century barrel-vaulted building.', { image: '/places/stirling-cafe-1.jpg' }),
  place('stirling-fine_dining-1', 'stirling', 'fine_dining', 'Brea', '5 Baker Street, FK8 1BJ Stirling, United Kingdom', '베이커 스트리트의 스코틀랜드 요리 레스토랑. 해기스·컬런 스킹크를 냅니다.', 'Scottish restaurant on Baker Street serving dishes such as haggis and cullen skink.'),
  place('stirling-cafe-2', 'stirling', 'cafe', 'Legends at Cowane’s', 'Cowane’s Hospital, St John Street, Stirling', '17세기 구빈원 코웨인스 호스피털의 길드홀과 정원 테라스에서 여는 카페.', 'Café in the Guildhall and garden terrace of 17th-century Cowane’s Hospital.'),

  // —— st-andrews ——
  place('st-andrews-fine_dining-1', 'st-andrews', 'fine_dining', 'The Seafood Ristorante', 'Bruce Embankment, The Scores, St Andrews KY16 9AB', '바닷가 유리 건물의 해산물 레스토랑. 스코틀랜드 생선을 오픈 키친에서 요리합니다.', 'Seafront glass-box seafood restaurant cooking Scottish fish in an open kitchen.'),
  place('st-andrews-bakery-1', 'st-andrews', 'bakery', 'Jannettas Gelateria', '31 South Street, St Andrews KY16 9QR', '사우스 스트리트의 오래된 젤라토 가게.', 'Long-established gelato shop on South Street.'),
  place('st-andrews-cafe-1', 'st-andrews', 'cafe', 'Northpoint Cafe', '24 North Street, St Andrews KY16 9AQ', '노스 스트리트의 커피숍.', 'Coffee shop on North Street.', { image: '/places/st-andrews-cafe-1.jpg' }),

  // —— inverness ——
  place('inverness-fine_dining-1', 'inverness', 'fine_dining', 'Rocpool', '1 Ness Walk, Inverness IV3 5NE', '네스강과 성이 보이는 강변의 브라세리. 스코틀랜드 식재료를 씁니다.', 'Riverside brasserie with views of the Ness and the castle, using Scottish produce.'),
  place('inverness-fine_dining-2', 'inverness', 'fine_dining', 'The Mustard Seed', '16 Fraser Street, Inverness IV1 1DW', '네스강 변 옛 교회 건물의 레스토랑. 강이 보이는 테라스가 있습니다.', 'Restaurant in a converted church on the River Ness, with a river-view terrace.'),
  place('inverness-fine_dining-3', 'inverness', 'fine_dining', 'Café 1', '75 Castle Street, Inverness IV2 3EA', '캐슬 스트리트의 스코틀랜드 요리 레스토랑. 오픈 키친이고 자체 농장 식재료를 씁니다.', 'Scottish restaurant on Castle Street with an open kitchen, using produce from its own croft.'),

  // —— isle-of-skye ——
  place('isle-of-skye-fine_dining-1', 'isle-of-skye', 'fine_dining', 'The Three Chimneys', 'Colbost, Dunvegan, Isle of Skye IV55 8ZT', '1984년 문을 연 던비건 호숫가 오두막의 해산물 코스 레스토랑.', 'Seafood tasting-menu restaurant in a lochside cottage on Loch Dunvegan, open since 1984.'),
  place('isle-of-skye-fine_dining-2', 'isle-of-skye', 'fine_dining', 'Scorrybreac', '7 Bosville Terrace, Portree IV51 9DG', '포트리 항구 위의 작은 레스토랑. 스코틀랜드 제철 식재료를 씁니다. 예약을 권합니다.', 'Small restaurant above Portree harbour, cooking seasonal Scottish produce; booking advised.'),
  place('isle-of-skye-cafe-1', 'isle-of-skye', 'cafe', 'Cafe Arriba', 'Quay Brae, Portree IV51 9DB', '포트리 항구가 보이는 2층 카페. 종일 아침 식사와 채식 메뉴가 있습니다.', 'First-floor café overlooking Portree harbour, with all-day breakfasts and vegetarian dishes.'),

  // —— cardiff ——
  place('cardiff-cafe-1', 'cardiff', 'cafe', 'Hard Lines', 'Cowbridge Road East, CF5 1GX Cardiff, United Kingdom', '캔턴의 카페 겸 로스터리. 브런치를 냅니다.', 'Café and roastery in Canton, serving brunch.'),
  place('cardiff-bakery-1', 'cardiff', 'bakery', 'Cardiff Bakestones', 'Stall 161-165, Cardiff Central Market, Cardiff CF10 1AU, United Kingdom', '카디프 중앙시장의 웰시 케이크 노점. 철판에 굽는 모습을 볼 수 있습니다.', 'Welsh-cake stall in Cardiff Central Market, where you can watch them cooked on the griddle.'),
  place('cardiff-bakery-2', 'cardiff', 'bakery', 'Fabulous Welshcakes', 'Mermaid Quay, Bute Street, Cardiff CF10 5BZ, United Kingdom', '카디프 베이 머메이드 키의 웰시 케이크 가게. 이 집의 첫 매장입니다.', 'Welsh-cake shop at Mermaid Quay in Cardiff Bay, the business\'s first shop.'),

  // —— conwy ——
  place('conwy-fine_dining-2', 'conwy', 'fine_dining', 'The Erskine Arms', 'Rosehill Street, Conwy LL32 8LD', '콘위 성벽 안의 조지 시대 역마차 여관 펍. 선데이 로스트를 냅니다.', 'Georgian coaching-inn pub inside Conwy\'s town walls, known for Sunday roasts.', { image: '/places/conwy-fine_dining-2.jpg' }),
  place('conwy-cafe-1', 'conwy', 'cafe', 'L\'s Coffee & Bookshop', '7 High Street, Conwy LL32 8DB', '책방을 겸한 콘위의 커피숍.', 'Coffee shop and bookshop in Conwy.'),

  // —— snowdonia ——
  place('snowdonia-cafe-1', 'snowdonia', 'cafe', 'Pete\'s Eats', '40 High Street, Llanberis LL55 4EU', '1978년 문을 연 등산객·암벽등반가의 카페. 2025년 11월 새 주인으로 다시 열었습니다.', 'Walkers\' and climbers\' café open since 1978, reopened under new owners in November 2025.'),
  place('snowdonia-fine_dining-1', 'snowdonia', 'fine_dining', 'Hangin\' Pizzeria', 'Unit 1, Station Approach, Betws-y-Coed LL24 0AE', '베투시코이드의 캐주얼 피자 가게.', 'Laid-back pizza spot in Betws-y-Coed.'),

  // —— tenby ——
  place('tenby-fine_dining-1', 'tenby', 'fine_dining', 'Plantagenet House', 'Quay Hill, Tenby SA70 7BX', '중세 플랑드르식 굴뚝이 남은 옛 건물의 레스토랑.', 'Restaurant in a historic building with a medieval Flemish chimney.'),
  place('tenby-fine_dining-2', 'tenby', 'fine_dining', 'D. Fecci and Sons', 'Lower Frog Street, Tenby SA70 7HS, United Kingdom', '1935년부터 이어온 피시앤칩스 가게 겸 식당. 지역 생선을 쓰고 글루텐프리도 있습니다.', 'Fish-and-chip restaurant and takeaway since 1935, using local fish, with gluten-free options.'),
  place('tenby-bakery-1', 'tenby', 'bakery', 'The Original Fecci\'s Ice Cream Parlour', 'Lower Frog Street, Tenby SA70 7HS', '1919년부터 이어온 텐비의 아이스크림 가게.', 'Tenby\'s ice-cream institution since 1919.'),

  // —— belfast ——
  place('belfast-fine_dining-1', 'belfast', 'fine_dining', 'OX', '1 Oxford Street, Belfast BT1 3LA', '벨파스트 강변의 미쉐린 1스타 레스토랑.', 'One-Michelin-star riverside restaurant in Belfast.', { michelin: 'star1' }),
  place('belfast-cafe-1', 'belfast', 'cafe', 'Established Coffee', '54 Hill Street, Belfast BT1 2LB', '캐서드럴 쿼터의 미니멀한 커피숍. 종일 브런치를 냅니다.', 'Minimalist coffee shop in the Cathedral Quarter, serving all-day brunch.'),

  // —— giants-causeway ——
  place('giants-causeway-fine_dining-1', 'giants-causeway', 'fine_dining', 'The Bushmills Inn', '9 Dunluce Road, Bushmills BT57 8QG', '17세기 마구간과 와인 저장고를 고친 부시밀스 인 호텔의 레스토랑. 연중 매일 엽니다.', 'Restaurant in the Bushmills Inn\'s 17th-century stables and wine cellar, open every day of the year.'),
  place('giants-causeway-fine_dining-3', 'giants-causeway', 'fine_dining', 'Tartine at the Distillers Arms', '140 Main Street, Bushmills BT57 8QE', '증류소 주인의 옛집을 고친 부시밀스의 모던 브라세리.', 'Modern brasserie in Bushmills, in a former home of the distillery owners.'),

  // —— derry ——
  place('derry-fine_dining-1', 'derry', 'fine_dining', 'Walled City Brewery', '70 Ebrington Square, Derry BT47 6FA', '에브링턴 광장의 양조장 겸 탭룸. 직접 만든 맥주와 식사를 냅니다.', 'Brewery and taproom on Ebrington Square, serving its own beers with food.', { image: '/places/derry-fine_dining-1.jpg' }),
  place('derry-fine_dining-2', 'derry', 'fine_dining', 'Pyke ’n’ Pommes POD', '124 Strand Road, Derry BT48 7NS', '강변의 버스·컨테이너 주방에서 시작한 길거리 음식점. 시내 매장은 2026년 초 문을 닫았습니다.', 'Quayside street-food kitchen in a bus and container; the town restaurant closed in early 2026.', { image: '/places/derry-fine_dining-2.jpg' }),
]
