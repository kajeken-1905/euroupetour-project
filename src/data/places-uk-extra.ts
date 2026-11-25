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

  // —— whitby ——
  place('whitby-fine_dining-1', 'whitby', 'fine_dining', 'Magpie Café', '14 Pier Road, Whitby YO21 3PU', '항구 앞의 피시앤칩스·해산물 식당.', 'Fish-and-chips and seafood restaurant facing the harbour.'),
  place('whitby-fine_dining-2', 'whitby', 'fine_dining', 'Trenchers', 'New Quay Road, Whitby YO21 1DH', '역 근처의 피시앤칩스·해산물 식당.', 'Fish-and-chips and seafood restaurant near the station.'),
  place('whitby-fine_dining-3', 'whitby', 'fine_dining', 'The Brasserie at Saltmoore', 'Saltmoore, Sandsend Road, Whitby YO21 3ST', '샌즈엔드 길 호텔의 모던 브리티시 레스토랑. 미쉐린 가이드 선정.', 'Modern British restaurant in a hotel on the Sandsend road. In the MICHELIN Guide.'),
  place('whitby-bakery-1', 'whitby', 'bakery', 'Botham\'s of Whitby', '35/39 Skinner Street, Whitby YO21 3AH', '스키너 거리의 오래된 빵집 겸 찻집.', 'Long-established bakery and tea room on Skinner Street.'),
  place('whitby-cafe-1', 'whitby', 'cafe', 'Sherlocks Coffee Shop', 'Rose and Crown Yard, 10 Flowergate, Whitby YO21 3BA', '플라워게이트 골목 안쪽의 커피숍.', 'Coffee shop in a yard off Flowergate.'),
  place('whitby-cafe-2', 'whitby', 'cafe', 'Mr Cooper’s Coffee House', '72 Church Street, Whitby YO22 4AS', '수도원 쪽 처치 거리의 커피하우스.', 'Coffee house on Church Street, on the abbey side.'),

  // —— windsor: bakeries and cafés (2026-11-04) ——
  place('windsor-bakery-1', 'windsor', 'bakery', 'Rex Artisan Bakery', '46 Peascod Street, Windsor SL4 1DE', '피스코드 거리의 빵집.', 'Bakery on Peascod Street.'),
  place('windsor-cafe-1', 'windsor', 'cafe', 'Cinnamon Cafe', 'Windsor Royal Station, Jubilee Arch, Windsor SL4 1PJ', '옛 왕실 역 건물의 카페.', 'Café in the old Windsor Royal Station building.'),

  // —— st-ives: bakeries and cafés (2026-11-04) ——
  place('st-ives-bakery-1', 'st-ives', 'bakery', 'St Ives Bakery', '52 Fore Street, St Ives TR26 1HE', '포어 거리의 빵집. 코니시 패스티를 팝니다.', 'Bakery on Fore Street selling Cornish pasties.'),
  place('st-ives-cafe-1', 'st-ives', 'cafe', 'Olives Cafe', 'Island Square, Island Road, St Ives TR26 1NT', '아일랜드 광장의 카페.', 'Café on Island Square.'),
  place('st-ives-cafe-2', 'st-ives', 'cafe', 'Yallah Cafe', 'Wharf Road, St Ives TR26 1LF', '항구 부두 길의 커피숍.', 'Coffee shop on Wharf Road by the harbour.'),

  // —— inverness: bakeries and cafés (2026-11-04) ——
  place('inverness-bakery-1', 'inverness', 'bakery', 'XOKO Bakehouse and Cantina', '13 Bridge Street, Inverness IV1 1HG', '네스강 다리 앞의 빵집 겸 카페.', 'Bakery-café by the Ness bridge.'),
  place('inverness-bakery-2', 'inverness', 'bakery', 'The Bakery', '72 Tomnahurich Street, Inverness IV3 5DT', '네스강 서쪽의 빵집.', 'Bakery west of the River Ness.'),
  place('inverness-cafe-1', 'inverness', 'cafe', 'Ember Kafe', '19 Queensgate, Inverness IV1 1DF', '시내 중심 퀸스게이트의 카페.', 'Café on Queensgate in the centre.'),
  place('inverness-cafe-2', 'inverness', 'cafe', 'Café de Paulo', 'Arcade 7, Victorian Market, Inverness IV1 1PQ', '빅토리안 마켓 안의 카페.', 'Café inside the Victorian Market.'),

  // —— derry: bakeries and cafés (2026-11-04) ——
  place('derry-bakery-1', 'derry', 'bakery', 'Jerusalem Bakery & Coffeehouse', '45 Great James Street, Londonderry BT48 7DF', '그레이트 제임스 거리의 빵집 겸 카페.', 'Bakery and coffee house on Great James Street.'),
  place('derry-bakery-2', 'derry', 'bakery', 'Doherty\'s Home Bakery', '23 William Street, Londonderry BT48 6EP', '성벽 밖 윌리엄 거리의 빵집.', 'Bakery on William Street outside the walls.'),
  place('derry-cafe-1', 'derry', 'cafe', 'The Scullery Cafe', '48 Waterloo Street, Londonderry BT48 6HF', '성벽 아래 워털루 거리의 카페.', 'Café on Waterloo Street below the walls.'),
  place('derry-cafe-2', 'derry', 'cafe', 'Patricia\'s Coffee House', 'Atlantic Quay, 100-114 Strand Road, Londonderry', '스트랜드 거리의 커피하우스.', 'Coffee house on the Strand Road.'),

  // —— durham: restaurants, bakeries and cafés (2026-11-06) ——
  place('durham-fine_dining-1', 'durham', 'fine_dining', 'Coarse', 'Reform Pl, North Rd, Durham DH1 4RZ', '역 근처 리폼 플레이스의 모던 브리티시 레스토랑. 미쉐린 가이드 선정.', 'Modern British restaurant on Reform Place near the station. In the MICHELIN Guide.'),
  place('durham-fine_dining-2', 'durham', 'fine_dining', 'Isla', '53 North Rd, Durham DH1 4SF', '노스 로드의 모던 브리티시 식당. 미쉐린 가이드 선정.', 'Modern British restaurant on North Road. In the MICHELIN Guide.'),
  place('durham-fine_dining-3', 'durham', 'fine_dining', 'The Cellar Door', '41 Saddler St, Durham DH1 3NU', '새들러 스트리트의 모던 유럽 요리 레스토랑.', 'Modern European restaurant on Saddler Street.'),
  place('durham-fine_dining-4', 'durham', 'fine_dining', 'Akarsu Turkish Restaurant & Grill', '21 Silver St, Durham DH1 3RB', '실버 스트리트의 터키 그릴 식당.', 'Turkish grill restaurant on Silver Street.'),
  place('durham-cafe-1', 'durham', 'cafe', 'Cafédral Durham', '1 First floor, Owengate, Durham DH1 3HB', '대성당으로 오르는 오언게이트 길의 2층 카페.', 'First-floor café on Owengate, the lane up to the cathedral.'),
  place('durham-cafe-2', 'durham', 'cafe', 'Vennels Café', '71 Saddler St, Durham DH1 3NP', '새들러 스트리트 골목 안의 카페.', 'Café down an alley off Saddler Street.'),
  place('durham-cafe-3', 'durham', 'cafe', 'Porcelain Coffee Bar', '3C Old Elvet, Durham DH1 3HL', '올드 엘벳의 작은 커피 바.', 'Small coffee bar on Old Elvet.'),
  place('durham-bakery-1', 'durham', 'bakery', 'The Nook', 'The Nook, Market Hall, Durham DH1 3NJ', '마켓 홀 안의 작은 빵집.', 'Small bakery stall inside the Market Hall.'),

  // —— chester: restaurants, bakeries and cafés (2026-11-06) ——
  place('chester-fine_dining-1', 'chester', 'fine_dining', 'Upstairs at the Grill', '70 Watergate St, Chester CH1 2LA', '워터게이트 스트리트의 스테이크·그릴 레스토랑. 미쉐린 가이드 선정.', 'Steak and grill restaurant on Watergate Street. In the MICHELIN Guide.'),
  place('chester-fine_dining-2', 'chester', 'fine_dining', 'Noted', '63 Bridge St, Chester CH1 1NG', '브리지 스트리트의 모던 요리 레스토랑. 미쉐린 가이드 선정.', 'Modern restaurant on Bridge Street. In the MICHELIN Guide.'),
  place('chester-fine_dining-3', 'chester', 'fine_dining', 'The Jolly Gardeners', '33 Christleton Rd, Chester CH3 5UF', '구시가 동쪽의 펍 레스토랑. 미쉐린 가이드 선정.', 'Pub restaurant east of the old town. In the MICHELIN Guide.'),
  place('chester-fine_dining-4', 'chester', 'fine_dining', 'La Fattoria', '25 Lower Bridge St, Chester CH1 1RS', '로어 브리지 스트리트의 이탈리아 식당.', 'Italian restaurant on Lower Bridge Street.'),
  place('chester-fine_dining-5', 'chester', 'fine_dining', 'Chez Jules in Chester', '71 Northgate St, Chester CH1 2HQ', '노스게이트 스트리트의 프랑스 비스트로.', 'French bistro on Northgate Street.'),
  place('chester-cafe-1', 'chester', 'cafe', 'Marmalade', '67 Northgate St, Chester CH1 2HQ', '노스게이트 스트리트의 브런치 카페.', 'Brunch café on Northgate Street.'),
  place('chester-cafe-2', 'chester', 'cafe', 'Bean & Cole', '41 Frodsham St, Chester CH1 3JJ', '프로드셤 스트리트의 스페셜티 커피숍.', 'Specialty coffee shop on Frodsham Street.'),
  place('chester-cafe-3', 'chester', 'cafe', 'The Flower Cup', '61 Watergate St, Chester CH1 2LE', '워터게이트 스트리트의 카페.', 'Café on Watergate Street.'),
  place('chester-bakery-1', 'chester', 'bakery', 'Kookaburra Bakehouse', '2 Goss St, Chester CH1 2BG', '구시가 고스 스트리트의 빵집.', 'Bakery on Goss Street in the old town.'),
  place('chester-bakery-2', 'chester', 'bakery', 'Pastry Pédaleur', 'Unit 12, Market Hall, Hunter St, Chester CH1 2AR', '마켓 홀 안의 페이스트리 가게.', 'Pastry shop inside the Market Hall.'),
  place('chester-bakery-3', 'chester', 'bakery', 'Olawa Bakery Chester', '139 Brook St, Chester CH1 3DU', '역 가까운 브룩 스트리트의 빵집.', 'Bakery on Brook Street near the station.'),

  // —— dover: restaurants, bakeries and cafés (2026-11-06) ——
  place('dover-fine_dining-1', 'dover', 'fine_dining', 'Il Rustico Restaurant', '4 Bench St, Dover CT16 1JH', '시내 벤치 스트리트의 이탈리아 식당.', 'Italian restaurant on Bench Street in the town centre.'),
  place('dover-fine_dining-2', 'dover', 'fine_dining', 'Aspendos Dover', '12 King St, Dover CT16 1NU', '킹 스트리트의 터키 식당.', 'Turkish restaurant on King Street.'),
  place('dover-cafe-1', 'dover', 'cafe', 'Castle Street Coffee', '53 Castle St., Dover CT16 1PT', '성으로 오르는 캐슬 스트리트의 커피숍.', 'Coffee shop on Castle Street, the road up to the castle.'),
  place('dover-cafe-2', 'dover', 'cafe', 'The Nook', '9 High St, Dover CT16 1DP', '하이 스트리트의 아침·점심 카페.', 'Breakfast and lunch café on the High Street.'),
  place('dover-cafe-3', 'dover', 'cafe', 'Cafe Melange', '16 Cannon St, Dover CT16 1BZ', '시내 캐넌 스트리트의 카페.', 'Café on Cannon Street in the town centre.'),
  place('dover-bakery-1', 'dover', 'bakery', 'The Kent Bakery Co', '67 London Rd, Buckland, Dover CT17 0SP', '시내 북쪽 런던 로드의 빵집.', 'Bakery on London Road north of the centre.'),

  // —— fort-william: restaurants, bakeries and cafés (2026-11-06) ——
  place('fort-william-fine_dining-1', 'fort-william', 'fine_dining', 'Seasgair by Michel Roux Jr', 'Inverlochy Castle, Torlundy, Fort William PH33 6SN', '시내 북쪽 인버로키 성 호텔의 모던 프렌치 레스토랑. 미쉐린 가이드 선정.', 'Modern French restaurant at the Inverlochy Castle hotel north of town. In the MICHELIN Guide.'),
  place('fort-william-fine_dining-2', 'fort-william', 'fine_dining', 'The Geographer', '88 High St, Fort William PH33 6AD', '하이 스트리트의 식당.', 'Restaurant on the High Street.'),
  place('fort-william-fine_dining-3', 'fort-william', 'fine_dining', 'Crannog at Garrison West', '4 Cameron Square, Fort William PH33 6AJ', '캐머런 광장의 스코틀랜드 해산물 레스토랑.', 'Scottish seafood restaurant on Cameron Square.'),
  place('fort-william-cafe-1', 'fort-william', 'cafe', 'The Fort Coffee Collective', 'Fassifern Rd, Fort William PH33 6QX', '파시펀 로드의 커피숍.', 'Coffee shop on Fassifern Road.'),
  place('fort-william-cafe-2', 'fort-william', 'cafe', 'The Wildcat', '21 High St, Fort William PH33 6DH', '하이 스트리트의 카페.', 'Café on the High Street.'),
  place('fort-william-cafe-3', 'fort-william', 'cafe', 'The Kilted Camel', '151 High St, Fort William PH33 6EA', '하이 스트리트 끝의 카페.', 'Café at the end of the High Street.'),
  place('fort-william-bakery-1', 'fort-william', 'bakery', 'Nevis Bakery', '49 High St, Fort William PH33 6DH', '하이 스트리트의 동네 빵집.', 'Local bakery on the High Street.'),

  // —— portsmouth: restaurants, bakeries and cafés (2026-11-22) ——
  place('portsmouth-fine_dining-1', 'portsmouth', 'fine_dining', 'Fuegos Street', '93 Elm Grove, Southsea, Portsmouth', '사우스시의 텍스멕스 식당. 구글 지도 평점 4.8.', 'Tex-Mex restaurant in Southsea. Rated 4.8 on Google Maps.'),
  place('portsmouth-fine_dining-2', 'portsmouth', 'fine_dining', 'Farm Kitchen', '67 Palmerston Road, Southsea, Portsmouth', '사우스시 팔머스턴 로드의 지중해식 식당. 구글 지도 평점 4.7.', 'Mediterranean restaurant on Palmerston Road, Southsea. Rated 4.7 on Google Maps.'),
  place('portsmouth-fine_dining-3', 'portsmouth', 'fine_dining', 'Smoke and Mirrors', '39 High Street, Old Portsmouth', '올드 포츠머스 하이 스트리트의 레스토랑. 구글 지도 평점 5.0.', 'Restaurant on the High Street in Old Portsmouth. Rated 5.0 on Google Maps.'),
  place('portsmouth-fine_dining-4', 'portsmouth', 'fine_dining', 'Ugly Bird Japanese Restaurant', 'Catherine House, Stanhope Road, Portsmouth', '시내 중심의 일식당. 구글 지도 평점 4.7.', 'Japanese restaurant in the city centre. Rated 4.7 on Google Maps.'),
  place('portsmouth-fine_dining-5', 'portsmouth', 'fine_dining', 'Ottoman Kitchen Portsmouth', '91-93 London Road, Portsmouth', '런던 로드의 튀르키예 식당. 구글 지도 평점 4.6.', 'Turkish restaurant on London Road. Rated 4.6 on Google Maps.'),
  place('portsmouth-bakery-1', 'portsmouth', 'bakery', 'Crazy Crumb Bakery and Café', '19 Marmion Road, Southsea, Portsmouth', '사우스시 마미언 로드의 빵집 겸 카페. 구글 지도 평점 4.8.', 'Bakery and café on Marmion Road, Southsea. Rated 4.8 on Google Maps.'),
  place('portsmouth-bakery-2', 'portsmouth', 'bakery', 'Bread Addiction', '54 Elm Grove, Southsea, Portsmouth', '사우스시 엘름 그로브의 빵집. 구글 지도 평점 4.7.', 'Bakery on Elm Grove, Southsea. Rated 4.7 on Google Maps.'),
  place('portsmouth-cafe-1', 'portsmouth', 'cafe', 'The Spinnaker Café', '96 Broad Street, Old Portsmouth', '올드 포츠머스 항구 입구의 카페. 구글 지도 평점 4.7.', 'Café at the harbour mouth in Old Portsmouth. Rated 4.7 on Google Maps.'),
  place('portsmouth-cafe-2', 'portsmouth', 'cafe', 'The Canteen', 'Point Battery & Barracks, Broad Street, Old Portsmouth', '옛 포대 건물 안의 카페. 구글 지도 평점 4.5.', 'Café in the old Point Battery and Barracks. Rated 4.5 on Google Maps.'),
  place('portsmouth-cafe-3', 'portsmouth', 'cafe', 'The Coffee House', '18 Highland Road, Southsea, Portsmouth', '사우스시의 커피숍. 구글 지도 평점 4.9.', 'Coffee shop in Southsea. Rated 4.9 on Google Maps.'),
  place('portsmouth-cafe-4', 'portsmouth', 'cafe', 'Flora', '69-71 Milton Road, Portsmouth', '밀턴 로드의 브런치 카페. 구글 지도 평점 4.7.', 'Breakfast and brunch café on Milton Road. Rated 4.7 on Google Maps.'),

  // —— penzance: restaurants, bakeries and cafés (2026-11-22) ——
  place('penzance-fine_dining-1', 'penzance', 'fine_dining', 'The Shore', '13-14 Alverton Street, Penzance TR18 2QP', '펜잔스 시내의 해산물 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Seafood restaurant in Penzance, listed in the MICHELIN Guide.'),
  place('penzance-fine_dining-2', 'penzance', 'fine_dining', 'Tolcarne Inn', 'Tolcarne Terrace, Newlyn TR18 5PR', '뉴린 항구 옆의 펍 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Pub restaurant by Newlyn harbour, listed in the MICHELIN Guide.'),
  place('penzance-fine_dining-3', 'penzance', 'fine_dining', 'argoe', 'Newlyn TR18 5HW', '뉴린 항구의 해산물 식당으로 미쉐린 가이드에 실려 있습니다.', 'Seafood restaurant at Newlyn harbour, listed in the MICHELIN Guide.'),
  place('penzance-fine_dining-4', 'penzance', 'fine_dining', 'The Old Coastguard', 'The Parade, Mousehole TR19 6PR', '마우스홀 바닷가 호텔의 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Restaurant in a seafront hotel in Mousehole, listed in the MICHELIN Guide.'),
  place('penzance-fine_dining-5', 'penzance', 'fine_dining', 'Barbican Bistro', 'Barbican Lane, Penzance', '항구 옆 바비칸 골목의 비스트로. 구글 지도 평점 4.8.', 'Bistro on Barbican Lane by the harbour. Rated 4.8 on Google Maps.'),
  place('penzance-bakery-1', 'penzance', 'bakery', 'Loafs Bakery', '63 Causewayhead, Penzance', '코즈웨이헤드 거리의 빵집. 구글 지도 평점 4.8.', 'Bakery on Causewayhead. Rated 4.8 on Google Maps.'),
  place('penzance-bakery-2', 'penzance', 'bakery', 'BakedPZ', '5 Albert Street, Penzance', '앨버트 거리의 케이크 가게. 구글 지도 평점 5.0.', 'Cake shop on Albert Street. Rated 5.0 on Google Maps.'),
  place('penzance-bakery-3', 'penzance', 'bakery', 'Lavenders Deli Bakery', '6A Alverton Street, Penzance', '앨버턴 거리의 델리 빵집. 구글 지도 평점 4.6.', 'Deli and bakery on Alverton Street. Rated 4.6 on Google Maps.'),
  place('penzance-cafe-1', 'penzance', 'cafe', 'The Honey Pot', '5 Parade Street, Penzance', '퍼레이드 거리의 카페. 구글 지도 평점 4.7.', 'Café on Parade Street. Rated 4.7 on Google Maps.'),
  place('penzance-cafe-2', 'penzance', 'cafe', 'The Quirky Bird Cafe', '34 Market Jew Street, Penzance', '마켓 주 거리의 커피숍. 구글 지도 평점 4.7.', 'Coffee shop on Market Jew Street. Rated 4.7 on Google Maps.'),
  place('penzance-cafe-3', 'penzance', 'cafe', 'Harbourside Cafe', 'Wharf Road, Penzance', '항구 앞 워프 로드의 카페. 구글 지도 평점 4.6.', 'Café on Wharf Road by the harbour. Rated 4.6 on Google Maps.'),
  place('penzance-cafe-4', 'penzance', 'cafe', 'Flatties Coffee Co', '2nd Floor, 28 Market Jew Street, Penzance', '마켓 주 거리 2층의 커피숍. 구글 지도 평점 4.9.', 'First-floor coffee shop on Market Jew Street. Rated 4.9 on Google Maps.'),
  place('penzance-cafe-5', 'penzance', 'cafe', 'The Terrace', '15 Market Jew Street, Penzance', '마켓 주 거리의 카페. 구글 지도 평점 4.6.', 'Café on Market Jew Street. Rated 4.6 on Google Maps.'),

  // —— lincoln: restaurants, bakeries and cafés (2026-11-22) ——
  place('lincoln-fine_dining-1', 'lincoln', 'fine_dining', 'The Jews House Restaurant', '15 The Strait, Lincoln', '스트레이트 거리 주스 하우스 건물의 파인다이닝. 구글 지도 평점 4.7.', 'Fine dining in the Jew’s House on The Strait. Rated 4.7 on Google Maps.'),
  place('lincoln-fine_dining-2', 'lincoln', 'fine_dining', 'Lawson’s Bar & Bistro', '8-9 The Strait, Lincoln', '스트레이트 거리의 영국식 비스트로. 구글 지도 평점 4.8.', 'Modern British bistro on The Strait. Rated 4.8 on Google Maps.'),
  place('lincoln-fine_dining-3', 'lincoln', 'fine_dining', 'Olé Olé Tapas Bar & Restaurant', '3 Ingleman Place, Union Road, Lincoln', '성 서쪽의 스페인 타파스 식당. 구글 지도 평점 4.8.', 'Spanish tapas restaurant west of the castle. Rated 4.8 on Google Maps.'),
  place('lincoln-fine_dining-4', 'lincoln', 'fine_dining', 'La Trattoria Da Vincenzo', '14 West Parade, Lincoln', '웨스트 퍼레이드의 이탈리아 식당. 구글 지도 평점 4.8.', 'Italian restaurant on West Parade. Rated 4.8 on Google Maps.'),
  place('lincoln-fine_dining-5', 'lincoln', 'fine_dining', 'Tipsy Teapot', '14 Clasketgate, Lincoln', '클래스켓게이트의 레스토랑 겸 바. 구글 지도 평점 4.7.', 'Restaurant and bar on Clasketgate. Rated 4.7 on Google Maps.'),
  place('lincoln-bakery-1', 'lincoln', 'bakery', 'Lincoln Bagel Co', '12 Guildhall Street, Lincoln', '길드홀 거리의 베이글 빵집. 구글 지도 평점 4.5.', 'Bagel bakery on Guildhall Street. Rated 4.5 on Google Maps.'),
  place('lincoln-bakery-2', 'lincoln', 'bakery', 'Cake Box Lincoln', '353 High Street, Lincoln', '하이 스트리트의 케이크 가게. 구글 지도 평점 4.7.', 'Cake shop on the High Street. Rated 4.7 on Google Maps.'),
  place('lincoln-bakery-3', 'lincoln', 'bakery', 'J Ram Cafe-Bakery', '247 High Street, Lincoln', '하이 스트리트의 빵집 겸 카페. 구글 지도 평점 4.8.', 'Bakery-café on the High Street. Rated 4.8 on Google Maps.'),
  place('lincoln-cafe-1', 'lincoln', 'cafe', 'Cafe St. Paul’s', '12 St Paul’s Lane, Lincoln', '대성당 근처 업힐 지구의 카페. 구글 지도 평점 4.8.', 'Café in the Uphill quarter near the cathedral. Rated 4.8 on Google Maps.'),
  place('lincoln-cafe-2', 'lincoln', 'cafe', 'Rising Cafe', 'Alive, Newland, Lincoln', '뉴랜드의 카페. 구글 지도 평점 4.8.', 'Café on Newland. Rated 4.8 on Google Maps.'),
  place('lincoln-cafe-3', 'lincoln', 'cafe', 'Coffee Aroma', '24 Guildhall Street, Lincoln', '길드홀 거리의 커피숍. 구글 지도 평점 4.7.', 'Coffee shop on Guildhall Street. Rated 4.7 on Google Maps.'),
  place('lincoln-cafe-4', 'lincoln', 'cafe', 'Amanda’s Cafe', 'Unit 1, Thorngate House, St Swithins Square, Lincoln', '세인트 스위딘스 광장의 커피숍. 구글 지도 평점 4.8.', 'Coffee shop on St Swithin’s Square. Rated 4.8 on Google Maps.'),
  place('lincoln-cafe-5', 'lincoln', 'cafe', 'Lincoln Cathedral Cafe', 'Lincoln Cathedral, Minster Yard, Lincoln', '링컨 대성당 안의 카페. 구글 지도 평점 4.3.', 'Café inside Lincoln Cathedral. Rated 4.3 on Google Maps.'),

  // —— oban: restaurants, bakeries and cafés (2026-11-22) ——
  place('oban-fine_dining-1', 'oban', 'fine_dining', 'Coast Restaurant', '104 George Street, Oban', '조지 거리의 영국식 레스토랑. 구글 지도 평점 4.7.', 'British restaurant on George Street. Rated 4.7 on Google Maps.'),
  place('oban-fine_dining-2', 'oban', 'fine_dining', 'EE-USK', 'North Pier, Oban', '노스 피어의 해산물 레스토랑. 구글 지도 평점 4.5.', 'Seafood restaurant on the North Pier. Rated 4.5 on Google Maps.'),
  place('oban-fine_dining-3', 'oban', 'fine_dining', 'Waterfront Fishouse Restaurant', '1 Railway Pier, Oban', '레일웨이 피어의 해산물 레스토랑. 구글 지도 평점 4.4.', 'Seafood restaurant on the Railway Pier. Rated 4.4 on Google Maps.'),
  place('oban-fine_dining-4', 'oban', 'fine_dining', 'Hidden Steakhouse', '60 George Street, Oban', '조지 거리의 스테이크 하우스. 구글 지도 평점 4.5.', 'Steakhouse on George Street. Rated 4.5 on Google Maps.'),
  place('oban-fine_dining-5', 'oban', 'fine_dining', 'Cuan Mor', '60 George Street, Oban', '항구 앞 조지 거리의 스코틀랜드 식당. 구글 지도 평점 4.3.', 'Scottish restaurant on George Street by the harbour. Rated 4.3 on Google Maps.'),
  place('oban-cafe-1', 'oban', 'cafe', 'Hinba Speciality Coffee', '62 George Street, Oban', '조지 거리의 스페셜티 커피숍. 구글 지도 평점 4.7.', 'Speciality coffee shop on George Street. Rated 4.7 on Google Maps.'),
  place('oban-cafe-2', 'oban', 'cafe', 'Roxy’s Coffee & Tea House', '7 Argyll Square, Oban', '아가일 광장의 커피·찻집. 구글 지도 평점 4.7.', 'Coffee and tea house on Argyll Square. Rated 4.7 on Google Maps.'),
  place('oban-cafe-3', 'oban', 'cafe', 'Anchor and Steam', '7 Albany Street, Oban', '올버니 거리의 커피숍. 구글 지도 평점 4.9.', 'Coffee shop on Albany Street. Rated 4.9 on Google Maps.'),
  place('oban-cafe-4', 'oban', 'cafe', 'Julie’s Coffee House', '33 Stafford Street, Oban', '스태퍼드 거리의 커피숍. 구글 지도 평점 4.7.', 'Coffee shop on Stafford Street. Rated 4.7 on Google Maps.'),
  place('oban-cafe-5', 'oban', 'cafe', 'Oban Chocolate Company', '34 Corran Esplanade, Oban', '바닷가 코런 에스플러네이드의 초콜릿 가게 겸 카페. 구글 지도 평점 4.7.', 'Chocolate shop and café on Corran Esplanade. Rated 4.7 on Google Maps.'),

  // —— llangollen: restaurants, bakeries and cafés (2026-11-22) ——
  place('llangollen-fine_dining-1', 'llangollen', 'fine_dining', 'The Corn Mill', 'Dee Ln, Llangollen LL20 8PN', '디강 가 옛 방앗간 건물의 펍 레스토랑. 구글 지도 평점 4.6.', 'Pub restaurant in an old mill building on the Dee. Rated 4.6 on Google Maps.'),
  place('llangollen-fine_dining-2', 'llangollen', 'fine_dining', 'Three Eagles', 'Bridge St, Llangollen LL20 8PF', '지중해 요리 레스토랑·바. 구글 지도 평점 4.5.', 'Mediterranean restaurant and bar. Rated 4.5 on Google Maps.'),
  place('llangollen-fine_dining-3', 'llangollen', 'fine_dining', 'Dee Side Cafe Bistro', 'Dee Ln, Llangollen', '디강 가의 비스트로. 구글 지도 평점 4.5.', 'Bistro on the Dee. Rated 4.5 on Google Maps.'),
  place('llangollen-fine_dining-4', 'llangollen', 'fine_dining', 'Fouzi\'s Café Bar & Pizzeria', '7 Bridge St, Llangollen', '피자집 겸 카페 바. 구글 지도 평점 4.6.', 'Pizzeria and café bar. Rated 4.6 on Google Maps.'),
  place('llangollen-fine_dining-5', 'llangollen', 'fine_dining', 'Rani Kitchen', '4-5 Victoria Square, Llangollen', '인도 요리 식당. 구글 지도 평점 4.8.', 'Indian restaurant. Rated 4.8 on Google Maps.'),
  place('llangollen-bakery-1', 'llangollen', 'bakery', 'Anna\'s Bakery', '7 Oak St, Llangollen LL20 8NR', '동네 빵집. 구글 지도 평점 4.9.', 'Local bakery. Rated 4.9 on Google Maps.'),
  place('llangollen-cafe-1', 'llangollen', 'cafe', 'The Little Pickle', '18 Bridge St, Llangollen', '브리지 스트리트의 작은 카페. 구글 지도 평점 5.0.', 'Small café on Bridge Street. Rated 5.0 on Google Maps.'),
  place('llangollen-cafe-2', 'llangollen', 'cafe', 'Finley\'s Cafe & Sandwich Bar', '5 Abbey Rd, Llangollen', '카페 겸 샌드위치 가게. 구글 지도 평점 4.8.', 'Café and sandwich bar. Rated 4.8 on Google Maps.'),
  place('llangollen-cafe-3', 'llangollen', 'cafe', 'Courtyard Coffee Shop', 'Castle St, Llangollen', '캐슬 스트리트의 커피숍. 구글 지도 평점 4.8.', 'Coffee shop on Castle Street. Rated 4.8 on Google Maps.'),
  place('llangollen-cafe-4', 'llangollen', 'cafe', 'George\'s Cafe', '4 Market St, Llangollen', '마켓 스트리트의 카페. 구글 지도 평점 4.7.', 'Café on Market Street. Rated 4.7 on Google Maps.'),
  place('llangollen-cafe-5', 'llangollen', 'cafe', 'Cottage Tearooms & Bistro', '5 Castle St, Llangollen LL20 8PE', '찻집 겸 비스트로. 구글 지도 평점 4.5.', 'Tearoom and bistro. Rated 4.5 on Google Maps.'),

  // —— newcastle: restaurants, bakeries and cafés (2026-11-25) ——
  place('newcastle-fine_dining-1', 'newcastle', 'fine_dining', 'House of Tides', '28-30 Close, Newcastle upon Tyne NE1 3RF, United Kingdom', '현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine restaurant. One MICHELIN star.', { michelin: 'star1' }),
  place('newcastle-fine_dining-2', 'newcastle', 'fine_dining', 'Solstice by Kenny Atkinson', '5-7 Side, Newcastle upon Tyne NE1 3JE, United Kingdom', '현대 영국 요리 레스토랑. 미쉐린 1스타.', 'Modern British restaurant. One MICHELIN star.', { michelin: 'star1' }),
  place('newcastle-fine_dining-3', 'newcastle', 'fine_dining', 'The Broad Chare', '25 Broad Chare, Newcastle upon Tyne NE1 3DQ, United Kingdom', '펍 레스토랑. 미쉐린 빕 구르망.', 'Pub restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('newcastle-fine_dining-4', 'newcastle', 'fine_dining', 'Rebel', '150 Heaton Park Road, Newcastle upon Tyne NE6 5NR, United Kingdom', '현대 영국 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.8(리뷰 130개).', 'Modern British restaurant. Listed in the MICHELIN Guide. Rated 4.8 on Google Maps (130 reviews).'),
  place('newcastle-fine_dining-5', 'newcastle', 'fine_dining', 'The French Quarter', 'Arch 6 Westgate Road, Newcastle upon Tyne, United Kingdom', '프랑스 요리 레스토랑. 구글 지도 평점 4.7(리뷰 1141개).', 'French restaurant. Rated 4.7 on Google Maps (1141 reviews).'),
  place('newcastle-bakery-1', 'newcastle', 'bakery', 'Northern Rye', '4 Riverside Walk, Newcastle upon Tyne, United Kingdom', '빵집. 구글 지도 평점 4.9(리뷰 515개).', 'Bakery. Rated 4.9 on Google Maps (515 reviews).'),
  place('newcastle-bakery-2', 'newcastle', 'bakery', 'Pink Lane Bakery', '40 Pink Lane, Newcastle upon Tyne, United Kingdom', '빵집. 구글 지도 평점 4.8(리뷰 524개).', 'Bakery. Rated 4.8 on Google Maps (524 reviews).'),
  place('newcastle-bakery-3', 'newcastle', 'bakery', 'Big River Bakery', '42 Wretham Place, Newcastle upon Tyne, United Kingdom', '빵집. 구글 지도 평점 4.8(리뷰 350개).', 'Bakery. Rated 4.8 on Google Maps (350 reviews).'),
  place('newcastle-bakery-4', 'newcastle', 'bakery', 'Breadpoint', '13 Low Friar Street, Newcastle upon Tyne, United Kingdom', '빵집. 구글 지도 평점 4.7(리뷰 358개).', 'Bakery. Rated 4.7 on Google Maps (358 reviews).'),
  place('newcastle-cafe-1', 'newcastle', 'cafe', 'Lagom Coffee Bar', '8 Monk Street, Newcastle upon Tyne, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 559개).', 'Café. Rated 4.9 on Google Maps (559 reviews).'),
  place('newcastle-cafe-2', 'newcastle', 'cafe', 'Sorcerer Coffee', 'Arch 4 Forth Street, Newcastle upon Tyne, United Kingdom', '스페셜티 커피 바. 구글 지도 평점 4.9(리뷰 258개).', 'Specialty coffee bar. Rated 4.9 on Google Maps (258 reviews).'),
  place('newcastle-cafe-3', 'newcastle', 'cafe', 'Café 11', '11 Leazes Crescent, Newcastle upon Tyne, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 479개).', 'Café. Rated 4.7 on Google Maps (479 reviews).'),
  place('newcastle-cafe-4', 'newcastle', 'cafe', 'Laneway & Co', '17-19 High Bridge, Newcastle upon Tyne, United Kingdom', '카페. 구글 지도 평점 4.6(리뷰 524개).', 'Café. Rated 4.6 on Google Maps (524 reviews).'),

  // —— hadrians-wall: restaurants, bakeries and cafés (2026-11-25) ——
  place('hadrians-wall-fine_dining-1', 'hadrians-wall', 'fine_dining', 'Pine', 'Vallum Farm, Military Road, East Wallhouses NE18 0LL, United Kingdom', '이스트 월하우시스에 있는 현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine restaurant in East Wallhouses. One MICHELIN star.', { michelin: 'star1' }),
  place('hadrians-wall-fine_dining-2', 'hadrians-wall', 'fine_dining', 'Danielle\'s Bistro', '12 Eastgate, Hexham, United Kingdom', '레스토랑. 구글 지도 평점 4.8(리뷰 303개).', 'Restaurant. Rated 4.8 on Google Maps (303 reviews).'),
  place('hadrians-wall-fine_dining-3', 'hadrians-wall', 'fine_dining', 'Bouchon Bistrot', '4-6 Gilesgate, Hexham, United Kingdom', '프랑스 요리 레스토랑. 구글 지도 평점 4.7(리뷰 621개).', 'French restaurant. Rated 4.7 on Google Maps (621 reviews).'),
  place('hadrians-wall-fine_dining-4', 'hadrians-wall', 'fine_dining', 'Cilantro', '19 Market Place, Hexham, United Kingdom', '레스토랑. 구글 지도 평점 4.7(리뷰 365개).', 'Restaurant. Rated 4.7 on Google Maps (365 reviews).'),
  place('hadrians-wall-cafe-1', 'hadrians-wall', 'cafe', 'Marketplace Coffee', '14 Market Place, Hexham, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 109개).', 'Café. Rated 4.8 on Google Maps (109 reviews).'),
  place('hadrians-wall-cafe-2', 'hadrians-wall', 'cafe', 'Hextol Tans', '11 St Mary\'s Chare, Hexham, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 153개).', 'Café. Rated 4.8 on Google Maps (153 reviews).'),
  place('hadrians-wall-cafe-3', 'hadrians-wall', 'cafe', 'The Garden Coffee House', '20 Hallgate, Hexham, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 241개).', 'Café. Rated 4.7 on Google Maps (241 reviews).'),

  // —— alnwick: restaurants, bakeries and cafés (2026-11-25) ——
  place('alnwick-fine_dining-1', 'alnwick', 'fine_dining', 'Sonnet', '41 Bondgate Without, Alnwick NE66 1PR, United Kingdom', '현대 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 5.0(리뷰 130개).', 'Modern cuisine restaurant. Listed in the MICHELIN Guide. Rated 5.0 on Google Maps (130 reviews).'),
  place('alnwick-fine_dining-2', 'alnwick', 'fine_dining', 'Ristorante Tirreno', '45 Bondgate Without, Alnwick, United Kingdom', '이탈리아 요리 레스토랑. 구글 지도 평점 4.7(리뷰 670개).', 'Italian restaurant. Rated 4.7 on Google Maps (670 reviews).'),
  place('alnwick-fine_dining-3', 'alnwick', 'fine_dining', 'Mumbai of Alnwick', '15 Narrowgate, Alnwick, United Kingdom', '인도 요리 레스토랑. 구글 지도 평점 4.7(리뷰 654개).', 'Indian restaurant. Rated 4.7 on Google Maps (654 reviews).'),
  place('alnwick-fine_dining-4', 'alnwick', 'fine_dining', 'Adam and Eve', '3 Clayport Street, Alnwick, United Kingdom', '레스토랑. 구글 지도 평점 4.6(리뷰 565개).', 'Restaurant. Rated 4.6 on Google Maps (565 reviews).'),
  place('alnwick-cafe-1', 'alnwick', 'cafe', 'The Northern Angels', '7-9 Market Street, Alnwick, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 179개).', 'Café. Rated 4.9 on Google Maps (179 reviews).'),
  place('alnwick-cafe-2', 'alnwick', 'cafe', 'Grannies', '18 Narrowgate, Alnwick, United Kingdom', '찻집. 구글 지도 평점 4.7(리뷰 258개).', 'Tea room. Rated 4.7 on Google Maps (258 reviews).'),

  // —— haworth: restaurants, bakeries and cafés (2026-11-25) ——
  place('haworth-fine_dining-1', 'haworth', 'fine_dining', 'Slow Food Kitchen', '2-4 Main Street, Haworth, United Kingdom', '레스토랑. 구글 지도 평점 4.9(리뷰 90개).', 'Restaurant. Rated 4.9 on Google Maps (90 reviews).'),
  place('haworth-fine_dining-2', 'haworth', 'fine_dining', 'Pavé', '98b Main Street, Haworth, United Kingdom', '레스토랑. 구글 지도 평점 4.8(리뷰 382개).', 'Restaurant. Rated 4.8 on Google Maps (382 reviews).'),
  place('haworth-fine_dining-3', 'haworth', 'fine_dining', 'Haworth Steam Brewing Co', '98 Main Street, Haworth, United Kingdom', '직접 맥주를 빚는 양조장 식당. 구글 지도 평점 4.8(리뷰 231개).', 'Brewpub restaurant. Rated 4.8 on Google Maps (231 reviews).'),
  place('haworth-fine_dining-4', 'haworth', 'fine_dining', 'The Hawthorn', '103-109 Main Street, Haworth, United Kingdom', '레스토랑. 구글 지도 평점 4.7(리뷰 676개).', 'Restaurant. Rated 4.7 on Google Maps (676 reviews).'),
  place('haworth-cafe-1', 'haworth', 'cafe', 'The Buffet Car Cafe', '4 Station Road, Haworth, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 107개).', 'Café. Rated 4.9 on Google Maps (107 reviews).'),
  place('haworth-cafe-2', 'haworth', 'cafe', 'Cobbles & Clay', '70 Main Street, Haworth, United Kingdom', '카페. 구글 지도 평점 4.5(리뷰 1114개).', 'Café. Rated 4.5 on Google Maps (1114 reviews).'),
  place('haworth-cafe-3', 'haworth', 'cafe', 'Haworth Old Post Office', '121 Main Street, Haworth, United Kingdom', '카페. 구글 지도 평점 4.5(리뷰 184개).', 'Café. Rated 4.5 on Google Maps (184 reviews).'),

  // —— peak-district: restaurants, bakeries and cafés (2026-11-25) ——
  place('peak-district-fine_dining-1', 'peak-district', 'fine_dining', 'Lovage by Lee Smith', 'Bath Street, Bakewell DE45 1DS, United Kingdom', '현대 영국 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.9(리뷰 201개).', 'Modern British restaurant. Listed in the MICHELIN Guide. Rated 4.9 on Google Maps (201 reviews).'),
  place('peak-district-fine_dining-2', 'peak-district', 'fine_dining', 'Fischer\'s Baslow Hall', 'Calver Road, Baslow DE45 1RR, United Kingdom', '배슬로에 있는 현대 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.8(리뷰 471개).', 'Modern cuisine restaurant in Baslow. Listed in the MICHELIN Guide. Rated 4.8 on Google Maps (471 reviews).'),
  place('peak-district-fine_dining-3', 'peak-district', 'fine_dining', 'The Peacock at Rowsley', 'Rowsley DE4 2EB, United Kingdom', '라우슬리에 있는 현대 영국 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.6(리뷰 468개).', 'Modern British restaurant in Rowsley. Listed in the MICHELIN Guide. Rated 4.6 on Google Maps (468 reviews).'),
  place('peak-district-bakery-1', 'peak-district', 'bakery', 'The Bakewell Tart Shop and Coffee House', '18 Matlock Street, Bakewell, United Kingdom', '과자점. 구글 지도 평점 4.3(리뷰 970개).', 'Pastry shop. Rated 4.3 on Google Maps (970 reviews).'),
  place('peak-district-cafe-1', 'peak-district', 'cafe', 'River and Roast Upstairs Cafe', '3B Market Street, Bakewell, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 395개).', 'Café. Rated 4.9 on Google Maps (395 reviews).'),
  place('peak-district-cafe-2', 'peak-district', 'cafe', 'Porter', '2 Bridge Street, Bakewell, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 89개).', 'Café. Rated 4.8 on Google Maps (89 reviews).'),
  place('peak-district-cafe-3', 'peak-district', 'cafe', 'The Honey Bun Cafe', '1 Water Lane, Bakewell, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 166개).', 'Café. Rated 4.7 on Google Maps (166 reviews).'),

  // —— birmingham: restaurants, bakeries and cafés (2026-11-25) ——
  place('birmingham-fine_dining-1', 'birmingham', 'fine_dining', 'Opheem', '65 Summer Row, Birmingham B3 1JJ, United Kingdom', '인도 요리 레스토랑. 미쉐린 2스타.', 'Indian restaurant. Two MICHELIN stars.', { michelin: 'star2' }),
  place('birmingham-fine_dining-2', 'birmingham', 'fine_dining', 'Adam\'s', '16 Waterloo Street, Birmingham B2 5UG, United Kingdom', '현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine restaurant. One MICHELIN star.', { michelin: 'star1' }),
  place('birmingham-fine_dining-3', 'birmingham', 'fine_dining', 'The Wilderness', '27 Warstone Lane, Birmingham B18 6JQ, United Kingdom', '현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine restaurant. One MICHELIN star.', { michelin: 'star1' }),
  place('birmingham-fine_dining-4', 'birmingham', 'fine_dining', 'Tropea', '27 Lordswood Road, Harborne, Birmingham B17 9RP, United Kingdom', '이탈리아 요리 레스토랑. 미쉐린 빕 구르망.', 'Italian restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('birmingham-fine_dining-5', 'birmingham', 'fine_dining', 'Riverine Rabbit', '1464 Pershore Road, Stirchley, Birmingham B30 2NT, United Kingdom', '현대 요리 레스토랑. 미쉐린 빕 구르망.', 'Modern cuisine restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('birmingham-bakery-1', 'birmingham', 'bakery', 'The Layers', '179 High Street, Birmingham, United Kingdom', '빵집. 구글 지도 평점 4.9(리뷰 165개).', 'Bakery. Rated 4.9 on Google Maps (165 reviews).'),
  place('birmingham-bakery-2', 'birmingham', 'bakery', 'The Hive Café and Bakery', '43-47 Vittoria Street, Birmingham, United Kingdom', '빵집. 구글 지도 평점 4.8(리뷰 425개).', 'Bakery. Rated 4.8 on Google Maps (425 reviews).'),
  place('birmingham-cafe-1', 'birmingham', 'cafe', 'BERRY Coffee', '204 Newhall Street, Birmingham, United Kingdom', '스페셜티 커피 바. 구글 지도 평점 4.9(리뷰 123개).', 'Specialty coffee bar. Rated 4.9 on Google Maps (123 reviews).'),
  place('birmingham-cafe-2', 'birmingham', 'cafe', 'The Coffee Bar Collective', '12 Temple Row, Birmingham, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 1534개).', 'Café. Rated 4.9 on Google Maps (1534 reviews).'),
  place('birmingham-cafe-3', 'birmingham', 'cafe', 'Coffee Joint', '110 Digbeth, Birmingham, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 341개).', 'Café. Rated 4.9 on Google Maps (341 reviews).'),
  place('birmingham-cafe-4', 'birmingham', 'cafe', 'Elio Café', '65 Wharfside Street, Birmingham, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 409개).', 'Café. Rated 4.7 on Google Maps (409 reviews).'),

  // —— warwick: restaurants, bakeries and cafés (2026-11-25) ——
  place('warwick-fine_dining-1', 'warwick', 'fine_dining', 'The Cross', '16 New Street, Kenilworth CV8 2EZ, United Kingdom', '케닐워스에 있는 현대 영국 요리 레스토랑. 미쉐린 1스타.', 'Modern British restaurant in Kenilworth. One MICHELIN star.', { michelin: 'star1' }),
  place('warwick-fine_dining-2', 'warwick', 'fine_dining', 'HEM', '22 Market Place, Warwick CV34 4SL, United Kingdom', '현대 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.9(리뷰 65개).', 'Modern cuisine restaurant. Listed in the MICHELIN Guide. Rated 4.9 on Google Maps (65 reviews).'),
  place('warwick-fine_dining-3', 'warwick', 'fine_dining', 'La Mesa', '5B Old Square, Warwick, United Kingdom', '레스토랑. 구글 지도 평점 4.9(리뷰 291개).', 'Restaurant. Rated 4.9 on Google Maps (291 reviews).'),
  place('warwick-fine_dining-4', 'warwick', 'fine_dining', 'Red Hot Mamma', '62 Market Place, Warwick, United Kingdom', '레스토랑. 구글 지도 평점 4.8(리뷰 1157개).', 'Restaurant. Rated 4.8 on Google Maps (1157 reviews).'),
  place('warwick-fine_dining-5', 'warwick', 'fine_dining', 'Smith Street Greek Restaurant', '32-34 Smith Street, Warwick, United Kingdom', '그리스 요리 레스토랑. 구글 지도 평점 4.8(리뷰 165개).', 'Greek restaurant. Rated 4.8 on Google Maps (165 reviews).'),
  place('warwick-bakery-1', 'warwick', 'bakery', 'Bread & Co', '60 Smith Street, Warwick, United Kingdom', '빵집. 구글 지도 평점 4.8(리뷰 560개).', 'Bakery. Rated 4.8 on Google Maps (560 reviews).'),
  place('warwick-bakery-2', 'warwick', 'bakery', 'Pastelaria Portuguesa', '57 Coten End, Warwick, United Kingdom', '과자점. 구글 지도 평점 4.5(리뷰 567개).', 'Pastry shop. Rated 4.5 on Google Maps (567 reviews).'),
  place('warwick-cafe-1', 'warwick', 'cafe', 'Jack\'s Shack', '3c Jury Street, Warwick, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 231개).', 'Café. Rated 4.9 on Google Maps (231 reviews).'),
  place('warwick-cafe-2', 'warwick', 'cafe', 'The Coffee Junction', '1 St Johns, Warwick, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 136개).', 'Café. Rated 4.8 on Google Maps (136 reviews).'),

  // —— norwich: restaurants, bakeries and cafés (2026-11-25) ——
  place('norwich-fine_dining-1', 'norwich', 'fine_dining', 'Benedicts', '9 St Benedicts Street, Norwich NR2 4PE, United Kingdom', '현대 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.8(리뷰 559개).', 'Modern cuisine restaurant. Listed in the MICHELIN Guide. Rated 4.8 on Google Maps (559 reviews).'),
  place('norwich-fine_dining-2', 'norwich', 'fine_dining', 'Benoli', '5 Orford Street, Norwich NR1 3LE, United Kingdom', '이탈리아 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.7(리뷰 937개).', 'Italian restaurant. Listed in the MICHELIN Guide. Rated 4.7 on Google Maps (937 reviews).'),
  place('norwich-fine_dining-3', 'norwich', 'fine_dining', 'Blossom', '79 Upper St Giles Street, Norwich NR2 1AB, United Kingdom', '현대 영국 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.9(리뷰 71개).', 'Modern British restaurant. Listed in the MICHELIN Guide. Rated 4.9 on Google Maps (71 reviews).'),
  place('norwich-fine_dining-4', 'norwich', 'fine_dining', 'The Wildebeest', '82-86 Norwich Road, Stoke Holy Cross NR14 8QJ, United Kingdom', '스토크 홀리 크로스에 있는 레스토랑. 미쉐린 빕 구르망.', 'Restaurant in Stoke Holy Cross. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('norwich-fine_dining-5', 'norwich', 'fine_dining', 'J.C. Pinto', '1 St John Maddermarket, Norwich, United Kingdom', '레스토랑. 구글 지도 평점 4.7(리뷰 480개).', 'Restaurant. Rated 4.7 on Google Maps (480 reviews).'),
  place('norwich-bakery-1', 'norwich', 'bakery', 'Devecchio Bakery', '5 Lobster Lane, Norwich, United Kingdom', '빵집. 구글 지도 평점 4.9(리뷰 151개).', 'Bakery. Rated 4.9 on Google Maps (151 reviews).'),
  place('norwich-bakery-2', 'norwich', 'bakery', 'Bread Source', '93 Upper St Giles Street, Norwich, United Kingdom', '빵집. 구글 지도 평점 4.6(리뷰 506개).', 'Bakery. Rated 4.6 on Google Maps (506 reviews).'),
  place('norwich-bakery-3', 'norwich', 'bakery', 'Two Magpies Bakery', '27-29 Timber Hill, Norwich, United Kingdom', '빵집. 구글 지도 평점 4.5(리뷰 504개).', 'Bakery. Rated 4.5 on Google Maps (504 reviews).'),
  place('norwich-cafe-1', 'norwich', 'cafe', 'Butterfly Café', '114A King Street, Norwich, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 275개).', 'Café. Rated 4.8 on Google Maps (275 reviews).'),
  place('norwich-cafe-2', 'norwich', 'cafe', 'Carberrys Café', '18 Wensum Street, Norwich, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 192개).', 'Café. Rated 4.8 on Google Maps (192 reviews).'),
  place('norwich-cafe-3', 'norwich', 'cafe', 'No33 Exchange Street', '31-33 Exchange Street, Norwich, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 2082개).', 'Café. Rated 4.7 on Google Maps (2082 reviews).'),
  place('norwich-cafe-4', 'norwich', 'cafe', 'The Yard Coffee', 'Red Lion Street, Norwich, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 295개).', 'Café. Rated 4.7 on Google Maps (295 reviews).'),

  // —— winchester: restaurants, bakeries and cafés (2026-11-25) ——
  place('winchester-fine_dining-1', 'winchester', 'fine_dining', 'The Chesil Rectory', '1 Chesil Street, Winchester SO23 0HU, United Kingdom', '현대 영국 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.7(리뷰 1324개).', 'Modern British restaurant. Listed in the MICHELIN Guide. Rated 4.7 on Google Maps (1324 reviews).'),
  place('winchester-fine_dining-2', 'winchester', 'fine_dining', 'Pulpo Negro', '28 Broad Street, Alresford SO24 9AQ, United Kingdom', '얼즈퍼드에 있는 현대 스페인 요리 레스토랑. 미쉐린 빕 구르망.', 'Contemporary Spanish restaurant in Alresford. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('winchester-fine_dining-3', 'winchester', 'fine_dining', 'Toast Winchester', '6 Jewry Street, Winchester, United Kingdom', '레스토랑. 구글 지도 평점 4.9(리뷰 699개).', 'Restaurant. Rated 4.9 on Google Maps (699 reviews).'),
  place('winchester-fine_dining-4', 'winchester', 'fine_dining', 'Bangkok Bistro', '16 Jewry Street, Winchester, United Kingdom', '태국 요리 레스토랑. 구글 지도 평점 4.8(리뷰 844개).', 'Thai restaurant. Rated 4.8 on Google Maps (844 reviews).'),
  place('winchester-bakery-1', 'winchester', 'bakery', 'Hoxton Bakehouse', '40 Jewry Street, Winchester, United Kingdom', '빵집. 구글 지도 평점 4.6(리뷰 344개).', 'Bakery. Rated 4.6 on Google Maps (344 reviews).'),
  place('winchester-cafe-1', 'winchester', 'cafe', 'Josie\'s', '28 Jewry Street, Winchester, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 6514개).', 'Café. Rated 4.9 on Google Maps (6514 reviews).'),
  place('winchester-cafe-2', 'winchester', 'cafe', 'RØST', '14 Stockbridge Road, Winchester, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 210개).', 'Café. Rated 4.9 on Google Maps (210 reviews).'),
  place('winchester-cafe-3', 'winchester', 'cafe', 'Kavi Coffee', '12 Jewry Street, Winchester, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 359개).', 'Café. Rated 4.7 on Google Maps (359 reviews).'),

  // —— rye: restaurants, bakeries and cafés (2026-11-25) ——
  place('rye-fine_dining-1', 'rye', 'fine_dining', 'The Union Rye', '8 East Street, Rye, United Kingdom', '레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.6(리뷰 751개).', 'Restaurant. Listed in the MICHELIN Guide. Rated 4.6 on Google Maps (751 reviews).'),
  place('rye-fine_dining-2', 'rye', 'fine_dining', 'No 50', '50 Cinque Ports Street, Rye, United Kingdom', '레스토랑. 구글 지도 평점 4.9(리뷰 86개).', 'Restaurant. Rated 4.9 on Google Maps (86 reviews).'),
  place('rye-fine_dining-3', 'rye', 'fine_dining', 'Landgate Bistro', '56 Landgate, Rye, United Kingdom', '레스토랑. 구글 지도 평점 4.7(리뷰 308개).', 'Restaurant. Rated 4.7 on Google Maps (308 reviews).'),
  place('rye-bakery-1', 'rye', 'bakery', 'Cornish Bakery', '86 High Street, Rye, United Kingdom', '빵집. 구글 지도 평점 4.5(리뷰 551개).', 'Bakery. Rated 4.5 on Google Maps (551 reviews).'),
  place('rye-cafe-1', 'rye', 'cafe', 'Ground Up Coffee Shop', '86 Fishmarket Road, Rye, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 294개).', 'Café. Rated 4.9 on Google Maps (294 reviews).'),
  place('rye-cafe-2', 'rye', 'cafe', 'GROUNDED', '7 Lion Street, Rye, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 149개).', 'Café. Rated 4.8 on Google Maps (149 reviews).'),

  // —— wells: restaurants, bakeries and cafés (2026-11-25) ——
  place('wells-fine_dining-1', 'wells', 'fine_dining', 'Root', '12 Sadler Street, Wells, United Kingdom', '채식 레스토랑. 미쉐린 빕 구르망.', 'Vegetarian restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('wells-fine_dining-2', 'wells', 'fine_dining', 'Queen of Cups', '10-12 Northload Street, Glastonbury BA6 9JJ, United Kingdom', '글래스턴베리에 있는 중동 요리 레스토랑. 미쉐린 빕 구르망.', 'Middle Eastern restaurant in Glastonbury. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('wells-fine_dining-3', 'wells', 'fine_dining', 'Rona Mezze Bar', '20 Union Street, Wells, United Kingdom', '레스토랑. 구글 지도 평점 4.8(리뷰 130개).', 'Restaurant. Rated 4.8 on Google Maps (130 reviews).'),
  place('wells-fine_dining-4', 'wells', 'fine_dining', 'The Olive Tree', '5 Sadler Street, Wells, United Kingdom', '레스토랑. 구글 지도 평점 4.7(리뷰 184개).', 'Restaurant. Rated 4.7 on Google Maps (184 reviews).'),
  place('wells-fine_dining-5', 'wells', 'fine_dining', 'The Good Earth', '4 Priory Road, Wells, United Kingdom', '레스토랑. 구글 지도 평점 4.7(리뷰 484개).', 'Restaurant. Rated 4.7 on Google Maps (484 reviews).'),
  place('wells-bakery-1', 'wells', 'bakery', 'Loaf', '38 Market Street, Wells, United Kingdom', '빵집. 구글 지도 평점 4.6(리뷰 468개).', 'Bakery. Rated 4.6 on Google Maps (468 reviews).'),
  place('wells-cafe-1', 'wells', 'cafe', 'Cafe Nostra', '14 Broad Street, Wells, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 186개).', 'Café. Rated 4.8 on Google Maps (186 reviews).'),
  place('wells-cafe-2', 'wells', 'cafe', 'Blossom\'s of Wells', '25-27 Broad Street, Wells, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 93개).', 'Café. Rated 4.8 on Google Maps (93 reviews).'),
  place('wells-cafe-3', 'wells', 'cafe', 'Niche', '21 Market Place, Wells, United Kingdom', '카페. 구글 지도 평점 4.6(리뷰 105개).', 'Café. Rated 4.6 on Google Maps (105 reviews).'),

  // —— jurassic-coast: restaurants, bakeries and cafés (2026-11-25) ——
  place('jurassic-coast-fine_dining-1', 'jurassic-coast', 'fine_dining', 'Sandro\'s', '2-3 Drakes Way, Lyme Regis, United Kingdom', '레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.9(리뷰 94개).', 'Restaurant. Listed in the MICHELIN Guide. Rated 4.9 on Google Maps (94 reviews).'),
  place('jurassic-coast-fine_dining-2', 'jurassic-coast', 'fine_dining', 'Eat at Millside', '1 Mill Lane, Lyme Regis, United Kingdom', '레스토랑. 구글 지도 평점 4.8(리뷰 467개).', 'Restaurant. Rated 4.8 on Google Maps (467 reviews).'),
  place('jurassic-coast-fine_dining-3', 'jurassic-coast', 'fine_dining', 'Harbour Inn', '23 Marine Parade, Lyme Regis, United Kingdom', '펍 레스토랑. 구글 지도 평점 4.4(리뷰 1380개).', 'Pub restaurant. Rated 4.4 on Google Maps (1380 reviews).'),
  place('jurassic-coast-bakery-1', 'jurassic-coast', 'bakery', 'Town Mill Bakery', 'Coombe Street, Lyme Regis, United Kingdom', '빵집. 구글 지도 평점 4.7(리뷰 694개).', 'Bakery. Rated 4.7 on Google Maps (694 reviews).'),

  // —— loch-lomond: restaurants, bakeries and cafés (2026-11-25) ——
  place('loch-lomond-fine_dining-1', 'loch-lomond', 'fine_dining', 'LOMA by Graeme Cheevers', 'Cameron House Hotel, A82, Alexandria G83 8QZ, United Kingdom', '현대 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.9(리뷰 147개).', 'Modern cuisine restaurant. Listed in the MICHELIN Guide. Rated 4.9 on Google Maps (147 reviews).'),
  place('loch-lomond-fine_dining-2', 'loch-lomond', 'fine_dining', 'The Village Rest', 'Pier Road, Luss G83 8NY, United Kingdom', '레스토랑. 구글 지도 평점 4.5(리뷰 2040개).', 'Restaurant. Rated 4.5 on Google Maps (2040 reviews).'),

  // —— dundee: restaurants, bakeries and cafés (2026-11-25) ——
  place('dundee-fine_dining-1', 'dundee', 'fine_dining', 'Eastfield', '91 Perth Road, Dundee, United Kingdom', '현대 영국 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.9(리뷰 117개).', 'Modern British restaurant. Listed in the MICHELIN Guide. Rated 4.9 on Google Maps (117 reviews).'),
  place('dundee-fine_dining-2', 'dundee', 'fine_dining', 'Collinsons', '122 Brown Street, Broughty Ferry, Dundee DD5 1EN, United Kingdom', '클래식 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.6(리뷰 278개).', 'Classic cuisine restaurant. Listed in the MICHELIN Guide. Rated 4.6 on Google Maps (278 reviews).'),
  place('dundee-fine_dining-3', 'dundee', 'fine_dining', 'The Selkie', '27 Exchange Street, Dundee, United Kingdom', '레스토랑. 구글 지도 평점 4.8(리뷰 514개).', 'Restaurant. Rated 4.8 on Google Maps (514 reviews).'),
  place('dundee-fine_dining-4', 'dundee', 'fine_dining', 'Mirch Masala', '5 Hawkhill, Dundee, United Kingdom', '인도 요리 레스토랑. 구글 지도 평점 4.9(리뷰 1181개).', 'Indian restaurant. Rated 4.9 on Google Maps (1181 reviews).'),
  place('dundee-fine_dining-5', 'dundee', 'fine_dining', 'Milas', '5 Whitehall Street, Dundee, United Kingdom', '레스토랑. 구글 지도 평점 4.7(리뷰 1083개).', 'Restaurant. Rated 4.7 on Google Maps (1083 reviews).'),
  place('dundee-bakery-1', 'dundee', 'bakery', 'Clark\'s Bakery', '3 Annfield Street, Dundee, United Kingdom', '빵집. 구글 지도 평점 4.5(리뷰 2229개).', 'Bakery. Rated 4.5 on Google Maps (2229 reviews).'),
  place('dundee-cafe-1', 'dundee', 'cafe', 'EH9 Espresso', '248 Perth Road, Dundee, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 299개).', 'Café. Rated 4.9 on Google Maps (299 reviews).'),
  place('dundee-cafe-2', 'dundee', 'cafe', 'Noch Coffee Co.', '69 Perth Road, Dundee, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 85개).', 'Café. Rated 4.9 on Google Maps (85 reviews).'),
  place('dundee-cafe-3', 'dundee', 'cafe', 'Dundee Espresso Lab', '31 Commercial Street, Dundee, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 161개).', 'Café. Rated 4.7 on Google Maps (161 reviews).'),

  // —— pitlochry: restaurants, bakeries and cafés (2026-11-25) ——
  place('pitlochry-fine_dining-1', 'pitlochry', 'fine_dining', 'Killiecrankie House', 'Killiecrankie, Pitlochry PH16 5LG, United Kingdom', '킬리크랭키에 있는 현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine restaurant in Killiecrankie. One MICHELIN star.', { michelin: 'star1' }),
  place('pitlochry-fine_dining-2', 'pitlochry', 'fine_dining', 'The Old Manse of Blair', 'Blair Atholl, Pitlochry PH18 5TN, United Kingdom', '블레어 애솔에 있는 현대 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.6(리뷰 218개).', 'Modern cuisine restaurant in Blair Atholl. Listed in the MICHELIN Guide. Rated 4.6 on Google Maps (218 reviews).'),
  place('pitlochry-fine_dining-3', 'pitlochry', 'fine_dining', 'Victoria\'s Restaurant', '45 Atholl Road, Pitlochry, United Kingdom', '레스토랑. 구글 지도 평점 4.5(리뷰 2357개).', 'Restaurant. Rated 4.5 on Google Maps (2357 reviews).'),
  place('pitlochry-cafe-1', 'pitlochry', 'cafe', 'Jessie\'s', '3A Atholl Road, Pitlochry, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 405개).', 'Café. Rated 4.8 on Google Maps (405 reviews).'),
  place('pitlochry-cafe-2', 'pitlochry', 'cafe', 'Garden Cafe', '43 Atholl Road, Pitlochry, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 430개).', 'Café. Rated 4.7 on Google Maps (430 reviews).'),
  place('pitlochry-cafe-3', 'pitlochry', 'cafe', 'Cafe Calluna', '90 Atholl Road, Pitlochry, United Kingdom', '카페. 구글 지도 평점 4.5(리뷰 763개).', 'Café. Rated 4.5 on Google Maps (763 reviews).'),

  // —— aberdeen: restaurants, bakeries and cafés (2026-11-25) ——
  place('aberdeen-fine_dining-1', 'aberdeen', 'fine_dining', 'Café Bohème', '23 Windmill Brae, Aberdeen, United Kingdom', '프랑스 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.7(리뷰 622개).', 'French restaurant. Listed in the MICHELIN Guide. Rated 4.7 on Google Maps (622 reviews).'),
  place('aberdeen-fine_dining-2', 'aberdeen', 'fine_dining', 'Mara', '40 Thistle Street, Aberdeen AB10 1XD, United Kingdom', '이탈리아 요리 레스토랑. 미쉐린 빕 구르망.', 'Italian restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('aberdeen-fine_dining-3', 'aberdeen', 'fine_dining', 'Oki Doki Georgian Restaurant', '27 Windmill Brae, Aberdeen, United Kingdom', '레스토랑. 구글 지도 평점 4.9(리뷰 204개).', 'Restaurant. Rated 4.9 on Google Maps (204 reviews).'),
  place('aberdeen-fine_dining-4', 'aberdeen', 'fine_dining', 'Travancore', '11 Holburn Street, Aberdeen, United Kingdom', '인도 요리 레스토랑. 구글 지도 평점 4.7(리뷰 876개).', 'Indian restaurant. Rated 4.7 on Google Maps (876 reviews).'),
  place('aberdeen-bakery-1', 'aberdeen', 'bakery', 'Bandit Bakery', '51H Rose Street, Aberdeen, United Kingdom', '빵집. 구글 지도 평점 4.9(리뷰 312개).', 'Bakery. Rated 4.9 on Google Maps (312 reviews).'),
  place('aberdeen-bakery-2', 'aberdeen', 'bakery', 'Fat Batch', '57 Elmbank Terrace, Aberdeen, United Kingdom', '빵집. 구글 지도 평점 4.8(리뷰 92개).', 'Bakery. Rated 4.8 on Google Maps (92 reviews).'),
  place('aberdeen-bakery-3', 'aberdeen', 'bakery', 'The Bread Maker', '50-52 Rosemount Viaduct, Aberdeen, United Kingdom', '빵집. 구글 지도 평점 4.6(리뷰 325개).', 'Bakery. Rated 4.6 on Google Maps (325 reviews).'),
  place('aberdeen-cafe-1', 'aberdeen', 'cafe', 'Turquoise Cafe & Eatery', '28 Holburn Street, Aberdeen, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 424개).', 'Café. Rated 4.9 on Google Maps (424 reviews).'),
  place('aberdeen-cafe-2', 'aberdeen', 'cafe', 'Cafe Oregano', '33 Holburn Street, Aberdeen, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 353개).', 'Café. Rated 4.9 on Google Maps (353 reviews).'),
  place('aberdeen-cafe-3', 'aberdeen', 'cafe', 'Mount', '6 Upperkirkgate, Aberdeen, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 247개).', 'Café. Rated 4.8 on Google Maps (247 reviews).'),

  // —— speyside: restaurants, bakeries and cafés (2026-11-25) ——
  place('speyside-fine_dining-1', 'speyside', 'fine_dining', 'TimeSpirit', 'The Macallan Estate, Easter Elchies, Aberlour AB38 9RX, United Kingdom', '애버라워에 있는 현대 요리 레스토랑. 미쉐린 가이드 소개.', 'Modern cuisine restaurant in Aberlour. Listed in the MICHELIN Guide.'),
  place('speyside-cafe-1', 'speyside', 'cafe', 'The Coffee Pot', '7 Balvenie Street, Dufftown, United Kingdom', '카페. 구글 지도 평점 4.5(리뷰 301개).', 'Café. Rated 4.5 on Google Maps (301 reviews).'),

  // —— cairngorms: restaurants, bakeries and cafés (2026-11-25) ——
  place('cairngorms-fine_dining-1', 'cairngorms', 'fine_dining', 'Delaneys\' Restaurant', '131 Grampian Road, Aviemore, United Kingdom', '레스토랑. 구글 지도 평점 4.9(리뷰 320개).', 'Restaurant. Rated 4.9 on Google Maps (320 reviews).'),
  place('cairngorms-cafe-1', 'cairngorms', 'cafe', 'Ryvoan Café', 'Myrtlefield Business Park, Aviemore, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 341개).', 'Café. Rated 4.8 on Google Maps (341 reviews).'),
  place('cairngorms-cafe-2', 'cairngorms', 'cafe', 'The Coffee Pot', '125 Grampian Road, Aviemore, United Kingdom', '카페. 구글 지도 평점 4.6(리뷰 843개).', 'Café. Rated 4.6 on Google Maps (843 reviews).'),

  // —— mull: restaurants, bakeries and cafés (2026-11-25) ——
  place('mull-bakery-1', 'mull', 'bakery', 'Tobermory Bakery & Tea Room', 'Main Street, Tobermory, United Kingdom', '빵집. 구글 지도 평점 4.5(리뷰 368개).', 'Bakery. Rated 4.5 on Google Maps (368 reviews).'),

  // —— arran: restaurants, bakeries and cafés (2026-11-25) ——
  place('arran-fine_dining-1', 'arran', 'fine_dining', 'The Parlour', 'Kames Cottage, Brodick KA27 8BU, United Kingdom', '레스토랑. 구글 지도 평점 4.8(리뷰 569개).', 'Restaurant. Rated 4.8 on Google Maps (569 reviews).'),
  place('arran-cafe-1', 'arran', 'cafe', 'Janie\'s', 'Duchess Court, Brodick KA27 8DD, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 152개).', 'Café. Rated 4.7 on Google Maps (152 reviews).'),

  // —— islay: restaurants, bakeries and cafés (2026-11-25) ——
  place('islay-fine_dining-1', 'islay', 'fine_dining', 'Bowmore Hotel Restaurant', 'Jamieson Street, Bowmore PA43 7HL, United Kingdom', '레스토랑. 구글 지도 평점 4.8(리뷰 191개).', 'Restaurant. Rated 4.8 on Google Maps (191 reviews).'),
  place('islay-fine_dining-2', 'islay', 'fine_dining', 'Peatzeria', '22 Shore Street, Bowmore, United Kingdom', '레스토랑. 구글 지도 평점 4.5(리뷰 832개).', 'Restaurant. Rated 4.5 on Google Maps (832 reviews).'),
  place('islay-cafe-1', 'islay', 'cafe', 'Labels', 'Shore Street, Bowmore PA43 7LB, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 128개).', 'Café. Rated 4.9 on Google Maps (128 reviews).'),

  // —— orkney: restaurants, bakeries and cafés (2026-11-25) ——
  place('orkney-cafe-1', 'orkney', 'cafe', 'Archive Coffee', '8 Laing Street, Kirkwall, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 540개).', 'Café. Rated 4.7 on Google Maps (540 reviews).'),
  place('orkney-cafe-2', 'orkney', 'cafe', 'SunBean Coffee House', '35 Victoria Street, Kirkwall, United Kingdom', '카페. 구글 지도 평점 4.6(리뷰 111개).', 'Café. Rated 4.6 on Google Maps (111 reviews).'),
  place('orkney-fine_dining-1', 'orkney', 'fine_dining', 'Helgi\'s', '14 Harbour Street, Kirkwall, United Kingdom', '레스토랑. 구글 지도 평점 4.4(리뷰 825개).', 'Restaurant. Rated 4.4 on Google Maps (825 reviews).'),

  // —— swansea: restaurants, bakeries and cafés (2026-11-25) ——
  place('swansea-fine_dining-1', 'swansea', 'fine_dining', 'Beach House', 'Oxwich Beach, Swansea SA3 1LS, United Kingdom', '옥스위치에 있는 현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine restaurant in Oxwich. One MICHELIN star.', { michelin: 'star1' }),
  place('swansea-fine_dining-2', 'swansea', 'fine_dining', 'The Shed Restaurant', 'J Shed Arcade, Kings Road, Swansea, United Kingdom', '펍 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.5(리뷰 261개).', 'Pub restaurant. Listed in the MICHELIN Guide. Rated 4.5 on Google Maps (261 reviews).'),
  place('swansea-fine_dining-3', 'swansea', 'fine_dining', 'Antep Restaurant', '84 The Kingsway, Swansea, United Kingdom', '레스토랑. 구글 지도 평점 4.8(리뷰 124개).', 'Restaurant. Rated 4.8 on Google Maps (124 reviews).'),
  place('swansea-fine_dining-4', 'swansea', 'fine_dining', 'Belle Vue Bistro', '6-8 Bellevue Way, Swansea, United Kingdom', '레스토랑. 구글 지도 평점 4.7(리뷰 603개).', 'Restaurant. Rated 4.7 on Google Maps (603 reviews).'),
  place('swansea-bakery-1', 'swansea', 'bakery', 'Saint Hugo Bakery & Café', '11 St Mary\'s Square, Swansea, United Kingdom', '빵집. 구글 지도 평점 4.7(리뷰 109개).', 'Bakery. Rated 4.7 on Google Maps (109 reviews).'),
  place('swansea-bakery-2', 'swansea', 'bakery', 'Little Valley Bakery', '197 St Helen\'s Avenue, Swansea, United Kingdom', '빵집. 구글 지도 평점 4.6(리뷰 91개).', 'Bakery. Rated 4.6 on Google Maps (91 reviews).'),
  place('swansea-cafe-1', 'swansea', 'cafe', 'Crafty Smuggler Coffee Roastery', '82 Western Street, Swansea, United Kingdom', '직접 원두를 볶는 커피숍. 구글 지도 평점 4.9(리뷰 186개).', 'Coffee roastery café. Rated 4.9 on Google Maps (186 reviews).'),
  place('swansea-cafe-2', 'swansea', 'cafe', 'GlenAlly Marina Cafe', '5 Abernethy Quay, Swansea, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 91개).', 'Café. Rated 4.9 on Google Maps (91 reviews).'),
  place('swansea-cafe-3', 'swansea', 'cafe', 'Duck & Dough', '37 Marlborough Road, Swansea, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 107개).', 'Café. Rated 4.8 on Google Maps (107 reviews).'),

  // —— brecon-beacons: restaurants, bakeries and cafés (2026-11-25) ——
  place('brecon-beacons-fine_dining-1', 'brecon-beacons', 'fine_dining', 'The Felin Fach Griffin', 'Felinfach, Brecon LD3 0UB, United Kingdom', '현대 영국 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.5(리뷰 744개).', 'Modern British restaurant. Listed in the MICHELIN Guide. Rated 4.5 on Google Maps (744 reviews).'),
  place('brecon-beacons-fine_dining-2', 'brecon-beacons', 'fine_dining', 'Brecon Tap', '6 Bulwark, Brecon, United Kingdom', '펍 레스토랑. 구글 지도 평점 4.6(리뷰 1290개).', 'Pub restaurant. Rated 4.6 on Google Maps (1290 reviews).'),
  place('brecon-beacons-bakery-1', 'brecon-beacons', 'bakery', 'The Cookhouse (St Mary\'s Bakery)', '4 St Mary Street, Brecon, United Kingdom', '빵집. 구글 지도 평점 4.8(리뷰 81개).', 'Bakery. Rated 4.8 on Google Maps (81 reviews).'),
  place('brecon-beacons-cafe-1', 'brecon-beacons', 'cafe', 'Arabellas Artisan Eatery', '35 High Street, Brecon, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 97개).', 'Café. Rated 4.7 on Google Maps (97 reviews).'),
  place('brecon-beacons-cafe-2', 'brecon-beacons', 'cafe', 'Rich Way Cafe', '4-5 Rich Way, Brecon, United Kingdom', '카페. 구글 지도 평점 4.6(리뷰 156개).', 'Café. Rated 4.6 on Google Maps (156 reviews).'),

  // —— hay-on-wye: restaurants, bakeries and cafés (2026-11-25) ——
  place('hay-on-wye-fine_dining-1', 'hay-on-wye', 'fine_dining', 'FIR by Matt Sampson', 'Lion Street, Hay-on-Wye HR3 5AA, United Kingdom', '창작 요리 레스토랑. 미쉐린 가이드 소개.', 'Creative restaurant. Listed in the MICHELIN Guide.'),
  place('hay-on-wye-fine_dining-2', 'hay-on-wye', 'fine_dining', 'Tomatitos', '38 Lion Street, Hay-on-Wye, United Kingdom', '타파스 바. 구글 지도 평점 4.7(리뷰 733개).', 'Tapas bar. Rated 4.7 on Google Maps (733 reviews).'),
  place('hay-on-wye-fine_dining-3', 'hay-on-wye', 'fine_dining', 'Three Tuns', '4 Broad Street, Hay-on-Wye, United Kingdom', '펍 레스토랑. 구글 지도 평점 4.5(리뷰 848개).', 'Pub restaurant. Rated 4.5 on Google Maps (848 reviews).'),
  place('hay-on-wye-cafe-1', 'hay-on-wye', 'cafe', 'The Bean Box', '4 Bridge Street, Hay-on-Wye, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 234개).', 'Café. Rated 4.8 on Google Maps (234 reviews).'),
  place('hay-on-wye-cafe-2', 'hay-on-wye', 'cafe', 'The Salad Project', '1 Lion Street, Hay-on-Wye, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 133개).', 'Café. Rated 4.9 on Google Maps (133 reviews).'),

  // —— st-davids: restaurants, bakeries and cafés (2026-11-25) ——
  place('st-davids-fine_dining-1', 'st-davids', 'fine_dining', 'Blas', 'Twr y Felin Hotel, St Davids, United Kingdom', '현대 요리 레스토랑. 미쉐린 가이드 소개.', 'Modern cuisine restaurant. Listed in the MICHELIN Guide.'),
  place('st-davids-fine_dining-2', 'st-davids', 'fine_dining', 'MINNOW', 'Ty Eurvil, Maes Dyfed, St Davids, United Kingdom', '레스토랑. 구글 지도 평점 4.9(리뷰 137개).', 'Restaurant. Rated 4.9 on Google Maps (137 reviews).'),
  place('st-davids-fine_dining-3', 'st-davids', 'fine_dining', 'The Bishops', '22-23 Cross Square, St Davids, United Kingdom', '펍 레스토랑. 구글 지도 평점 4.4(리뷰 1682개).', 'Pub restaurant. Rated 4.4 on Google Maps (1682 reviews).'),
  place('st-davids-cafe-1', 'st-davids', 'cafe', 'GRAIN', '1 High Street, St Davids, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 698개).', 'Café. Rated 4.7 on Google Maps (698 reviews).'),
  place('st-davids-cafe-2', 'st-davids', 'cafe', 'The Really Wild Emporium', '24 High Street, St Davids, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 209개).', 'Café. Rated 4.8 on Google Maps (209 reviews).'),

  // —— aberystwyth: restaurants, bakeries and cafés (2026-11-25) ——
  place('aberystwyth-fine_dining-1', 'aberystwyth', 'fine_dining', 'Ynyshir', 'Eglwys Fach, Machynlleth SY20 8TA, United Kingdom', '마컨슬레스에 있는 창작 요리 레스토랑. 미쉐린 2스타.', 'Creative restaurant in Machynlleth. Two MICHELIN stars.', { michelin: 'star2' }),
  place('aberystwyth-fine_dining-2', 'aberystwyth', 'fine_dining', 'Gwen', '21 Heol Maengwyn, Machynlleth SY20 8EB, United Kingdom', '마컨슬레스에 있는 현대 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.8(리뷰 66개).', 'Modern cuisine restaurant in Machynlleth. Listed in the MICHELIN Guide. Rated 4.8 on Google Maps (66 reviews).'),
  place('aberystwyth-fine_dining-3', 'aberystwyth', 'fine_dining', 'Dragonfly Bistro', '7 St James\'s Square, Aberystwyth, United Kingdom', '레스토랑. 구글 지도 평점 4.9(리뷰 251개).', 'Restaurant. Rated 4.9 on Google Maps (251 reviews).'),
  place('aberystwyth-fine_dining-4', 'aberystwyth', 'fine_dining', 'Y Gornel', '11 Princess Street, Aberystwyth, United Kingdom', '레스토랑. 구글 지도 평점 4.9(리뷰 239개).', 'Restaurant. Rated 4.9 on Google Maps (239 reviews).'),
  place('aberystwyth-fine_dining-5', 'aberystwyth', 'fine_dining', 'Kwizinn', '2A Portland Road, Aberystwyth, United Kingdom', '레스토랑. 구글 지도 평점 4.9(리뷰 137개).', 'Restaurant. Rated 4.9 on Google Maps (137 reviews).'),
  place('aberystwyth-cafe-1', 'aberystwyth', 'cafe', 'Medina', '10 Queen\'s Road, Aberystwyth, United Kingdom', '카페. 구글 지도 평점 4.6(리뷰 1463개).', 'Café. Rated 4.6 on Google Maps (1463 reviews).'),
  place('aberystwyth-cafe-2', 'aberystwyth', 'cafe', 'Little Devil\'s Café', '20 Terrace Road, Aberystwyth, United Kingdom', '카페. 구글 지도 평점 4.6(리뷰 794개).', 'Café. Rated 4.6 on Google Maps (794 reviews).'),

  // —— caernarfon: restaurants, bakeries and cafés (2026-11-25) ——
  place('caernarfon-fine_dining-1', 'caernarfon', 'fine_dining', 'Sosban & The Old Butchers', 'Trinity House, 1 High Street, Menai Bridge LL59 5EE, United Kingdom', '메나이 브리지에 있는 현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine restaurant in Menai Bridge. One MICHELIN star.', { michelin: 'star1' }),
  place('caernarfon-fine_dining-2', 'caernarfon', 'fine_dining', 'The Gunroom Restaurant', 'Bontnewydd, Caernarfon LL54 7YF, United Kingdom', '현대 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.7(리뷰 114개).', 'Modern cuisine restaurant. Listed in the MICHELIN Guide. Rated 4.7 on Google Maps (114 reviews).'),
  place('caernarfon-fine_dining-3', 'caernarfon', 'fine_dining', 'Y Gegin Fach', '7 Pool Hill, Caernarfon, United Kingdom', '레스토랑. 구글 지도 평점 4.9(리뷰 180개).', 'Restaurant. Rated 4.9 on Google Maps (180 reviews).'),
  place('caernarfon-fine_dining-4', 'caernarfon', 'fine_dining', 'Osteria', '26 Hole in the Wall Street, Caernarfon, United Kingdom', '이탈리아 요리 레스토랑. 구글 지도 평점 4.6(리뷰 252개).', 'Italian restaurant. Rated 4.6 on Google Maps (252 reviews).'),
  place('caernarfon-fine_dining-5', 'caernarfon', 'fine_dining', 'Wal Restaurant', '4 Palace Street, Caernarfon, United Kingdom', '레스토랑. 구글 지도 평점 4.5(리뷰 707개).', 'Restaurant. Rated 4.5 on Google Maps (707 reviews).'),
  place('caernarfon-cafe-1', 'caernarfon', 'cafe', 'Caffi Cei', '31 Bridge Street, Caernarfon, United Kingdom', '카페. 구글 지도 평점 4.5(리뷰 135개).', 'Café. Rated 4.5 on Google Maps (135 reviews).'),

  // —— strangford-lough: restaurants, bakeries and cafés (2026-11-25) ——
  place('strangford-lough-fine_dining-1', 'strangford-lough', 'fine_dining', 'RockSalt Kitchen & Bar', '18 Frances Street, Newtownards, United Kingdom', '레스토랑. 구글 지도 평점 4.8(리뷰 133개).', 'Restaurant. Rated 4.8 on Google Maps (133 reviews).'),
  place('strangford-lough-fine_dining-2', 'strangford-lough', 'fine_dining', 'Haptik', '29 Frances Street, Newtownards, United Kingdom', '레스토랑. 구글 지도 평점 4.8(리뷰 731개).', 'Restaurant. Rated 4.8 on Google Maps (731 reviews).'),
  place('strangford-lough-fine_dining-3', 'strangford-lough', 'fine_dining', 'The Foxes Den', '17 Jubilee Road, Newtownards, United Kingdom', '레스토랑. 구글 지도 평점 4.7(리뷰 1143개).', 'Restaurant. Rated 4.7 on Google Maps (1143 reviews).'),
  place('strangford-lough-cafe-1', 'strangford-lough', 'cafe', '7th Heaven', '8 Court Street, Newtownards, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 282개).', 'Café. Rated 4.8 on Google Maps (282 reviews).'),
  place('strangford-lough-cafe-2', 'strangford-lough', 'cafe', 'Cafollas at the Square', '15 Conway Square, Newtownards, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 784개).', 'Café. Rated 4.7 on Google Maps (784 reviews).'),

  // —— newcastle-mourne: restaurants, bakeries and cafés (2026-11-25) ——
  place('newcastle-mourne-fine_dining-1', 'newcastle-mourne', 'fine_dining', 'Villa Vinci', '31 Main Street, Newcastle, County Down, United Kingdom', '이탈리아 요리 레스토랑. 구글 지도 평점 4.7(리뷰 1726개).', 'Italian restaurant. Rated 4.7 on Google Maps (1726 reviews).'),
  place('newcastle-mourne-fine_dining-2', 'newcastle-mourne', 'fine_dining', 'Ola Cantina Mexican Grill', '4 Causeway Road, Newcastle, County Down, United Kingdom', '레스토랑. 구글 지도 평점 4.9(리뷰 129개).', 'Restaurant. Rated 4.9 on Google Maps (129 reviews).'),
  place('newcastle-mourne-cafe-1', 'newcastle-mourne', 'cafe', 'Birch', '51 Central Promenade, Newcastle, County Down, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 242개).', 'Café. Rated 4.8 on Google Maps (242 reviews).'),
  place('newcastle-mourne-cafe-2', 'newcastle-mourne', 'cafe', 'Shimna Café', '2 Main Street, Newcastle, County Down, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 442개).', 'Café. Rated 4.7 on Google Maps (442 reviews).'),
  place('newcastle-mourne-cafe-3', 'newcastle-mourne', 'cafe', 'Railway Street Cafe & Brew Bar', '2 Railway Street, Newcastle, County Down, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 473개).', 'Café. Rated 4.7 on Google Maps (473 reviews).'),

  // —— armagh: restaurants, bakeries and cafés (2026-11-25) ——
  place('armagh-fine_dining-1', 'armagh', 'fine_dining', 'Mulberry Bistro', '6 Cathedral Road, Armagh, United Kingdom', '레스토랑. 구글 지도 평점 4.7(리뷰 379개).', 'Restaurant. Rated 4.7 on Google Maps (379 reviews).'),
  place('armagh-fine_dining-2', 'armagh', 'fine_dining', 'Keegan\'s Bar & Restaurant', '48 Irish Street, Armagh, United Kingdom', '펍 레스토랑. 구글 지도 평점 4.7(리뷰 612개).', 'Pub restaurant. Rated 4.7 on Google Maps (612 reviews).'),
  place('armagh-cafe-1', 'armagh', 'cafe', 'Sojourn Coffee', '6 Barrack Street, Armagh, United Kingdom', '카페. 구글 지도 평점 4.9(리뷰 212개).', 'Café. Rated 4.9 on Google Maps (212 reviews).'),
  place('armagh-cafe-2', 'armagh', 'cafe', 'The Craic\'d Pot Coffee House', '25 Upper English Street, Armagh, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 414개).', 'Café. Rated 4.8 on Google Maps (414 reviews).'),

  // —— enniskillen: restaurants, bakeries and cafés (2026-11-25) ——
  place('enniskillen-fine_dining-1', 'enniskillen', 'fine_dining', '28 At The Hollow', '6 Church Street, Enniskillen, United Kingdom', '레스토랑. 구글 지도 평점 4.8(리뷰 222개).', 'Restaurant. Rated 4.8 on Google Maps (222 reviews).'),
  place('enniskillen-fine_dining-2', 'enniskillen', 'fine_dining', 'The Street Kitchen', '30 Paget Lane, Enniskillen, United Kingdom', '레스토랑. 구글 지도 평점 4.8(리뷰 203개).', 'Restaurant. Rated 4.8 on Google Maps (203 reviews).'),
  place('enniskillen-fine_dining-3', 'enniskillen', 'fine_dining', 'Dollakis', '2 Cross Street, Enniskillen, United Kingdom', '레스토랑. 구글 지도 평점 4.7(리뷰 517개).', 'Restaurant. Rated 4.7 on Google Maps (517 reviews).'),
  place('enniskillen-cafe-1', 'enniskillen', 'cafe', 'The Toastery + Supper Club', '22 Church Street, Enniskillen, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 394개).', 'Café. Rated 4.8 on Google Maps (394 reviews).'),
  place('enniskillen-cafe-2', 'enniskillen', 'cafe', 'Westend Coffee Shop', '39 Darling Street, Enniskillen, United Kingdom', '카페. 구글 지도 평점 4.8(리뷰 138개).', 'Café. Rated 4.8 on Google Maps (138 reviews).'),
  place('enniskillen-cafe-3', 'enniskillen', 'cafe', 'The Bees Knees Cafe', '37 Townhall Street, Enniskillen, United Kingdom', '카페. 구글 지도 평점 4.7(리뷰 472개).', 'Café. Rated 4.7 on Google Maps (472 reviews).'),
]
