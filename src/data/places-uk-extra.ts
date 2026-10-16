import { place } from './placeFactory'
import type { Place } from '../types'

export const placesUKExtra: Place[] = [
  // —— edinburgh ——
  place('edinburgh-fine_dining-1', 'edinburgh', 'fine_dining', 'Restaurant Martin Wishart', '54 Shore, EH6 6RA City of Edinburgh, United Kingdom', '미슐랭 시푸드 파인 다이닝.', 'Michelin seafood fine dining.'),
  place('edinburgh-fine_dining-2', 'edinburgh', 'fine_dining', 'The Kitchin', '76-78 Commercial Street, EH6 6LX City of Edinburgh, United Kingdom', '리스의 뉴 스코티시 퀴진.', 'New Scottish cuisine in Leith.', { image: '/places/edinburgh-fine_dining-2.jpg' }),
  place('edinburgh-fine_dining-3', 'edinburgh', 'fine_dining', 'Restaurant Number One', '1 Princes Street, EH2 2EQ City of Edinburgh, United Kingdom', '발모럴 호텔의 클래식 파인 다이닝.', 'Classic fine dining at The Balmoral.', { image: '/places/edinburgh-fine_dining-3.jpg' }),
  place('edinburgh-fine_dining-4', 'edinburgh', 'fine_dining', 'Timberyard', '10 Lady Lawson Street, EH3 9DS City of Edinburgh, United Kingdom', '산지 재료 중심 모던 스코티시.', 'Modern Scottish from local producers.'),
  place('edinburgh-fine_dining-5', 'edinburgh', 'fine_dining', 'Aizle', 'The Garden Room, Kimpton Charlotte Square, 38 Charlotte Square, Edinburgh EH2 4HQ, United Kingdom', '시즌 코스 중심 인티메이트 다이닝.', 'Intimate seasonal tasting menus.'),
  place('edinburgh-bakery-1', 'edinburgh', 'bakery', 'Twelve Triangles', '90 Brunswick Street, EH7 5HU City of Edinburgh, United Kingdom', '사워도우·페이스트리 인기 베이커리.', 'Favourite for sourdough and pastries.'),
  place('edinburgh-bakery-2', 'edinburgh', 'bakery', 'The Pastry Section', '143 Great Junction Street, EH6 5JB City of Edinburgh, United Kingdom', '크루아상·타르트로 줄 서는 곳.', 'Queues for croissants and tarts.'),
  place('edinburgh-bakery-4', 'edinburgh', 'bakery', 'Lovecrumbs', '155 West Port, EH3 9DP City of Edinburgh, United Kingdom', '케이크·커피가 좋은 베이커리 카페.', 'Bakery café known for cakes and coffee.'),
  place('edinburgh-cafe-1', 'edinburgh', 'cafe', 'Brew Lab Coffee', '6-8 South College Street, Edinburgh EH8 9AA, United Kingdom', '스페셜티 커피의 로컬 성지.', 'Local specialty coffee landmark.'),
  place('edinburgh-cafe-2', 'edinburgh', 'cafe', 'Williams & Johnson Coffee Co.', '67 Commercial Street, EH6 6LH City of Edinburgh, United Kingdom', '로스터리 카페.', 'Roastery café.'),
  place('edinburgh-cafe-3', 'edinburgh', 'cafe', 'The Milkman', '52 Cockburn Street, EH1 1PB City of Edinburgh, United Kingdom', '로열 마일 근처 작은 커피 바.', 'Tiny coffee bar near the Royal Mile.', { image: '/places/edinburgh-cafe-3.jpg' }),
  place('edinburgh-cafe-4', 'edinburgh', 'cafe', 'Cairngorm Coffee', 'Melville Place, Edinburgh (West End)', '웨스트엔드의 스페셜티 커피 카페. 바깥 자리에서 세인트 메리 대성당이 보입니다.', 'West End specialty coffee café with outdoor seats facing St Mary’s Cathedral.', { image: '/places/edinburgh-cafe-4.jpg' }),
  place('edinburgh-cafe-5', 'edinburgh', 'cafe', 'Fortitude Coffee', '4 Abbey Mount, EH8 8EJ City of Edinburgh, United Kingdom', '에스프레소 바 스타일.', 'Espresso-bar style café.', { image: '/places/edinburgh-cafe-5.jpg' }),

  // —— manchester ——
  place('manchester-fine_dining-1', 'manchester', 'fine_dining', 'Mana', '42 Blossom Street, M4 6BF Manchester, United Kingdom', '뉴 노르딕 감성 미슐랭 다이닝.', 'New Nordic-spirited Michelin dining.'),
  place('manchester-fine_dining-2', 'manchester', 'fine_dining', 'The French at Midland Hotel', '16 Peter Street, Manchester M60 2DS, United Kingdom', '클래식 프렌치 파인 다이닝.', 'Classic French fine dining.'),
  place('manchester-fine_dining-3', 'manchester', 'fine_dining', 'Adam Reid at The French', 'Peter Street, M60 2DS Manchester, United Kingdom', '현대 브리티시 코스.', 'Modern British tasting menus.'),
  place('manchester-fine_dining-4', 'manchester', 'fine_dining', 'Higher Ground', '7 New York Street, M1 4DY Manchester, United Kingdom', '산지 재료 중심 모던 다이닝.', 'Producer-led modern dining.'),
  place('manchester-fine_dining-5', 'manchester', 'fine_dining', 'Where The Light Gets In', '7 Rostron Brow, SK1 1JY Stockport, United Kingdom', '북서부 모던 다이닝 씬.', 'NW England modern dining scene.'),
  place('manchester-bakery-1', 'manchester', 'bakery', 'Pollen Bakery', '8 New Union Street, M4 6FQ Manchester, United Kingdom', '사워도우로 유명한 베이커리.', 'Famous sourdough bakery.'),
  place('manchester-bakery-2', 'manchester', 'bakery', 'Companio Bakery', '35 Radium Street, M4 6AD Manchester, United Kingdom', '아티산 브레드·페이스트리.', 'Artisan breads and pastries.'),
  place('manchester-bakery-3', 'manchester', 'bakery', 'Gooey', '37 Ducie Street, M1 2JW Manchester, United Kingdom', '시나몬롤·브런치 인기.', 'Cinnamon buns and brunch favourite.'),
  place('manchester-bakery-4', 'manchester', 'bakery', 'Holy Grain Sourdough Bakery', 'Arch 122 Woollam Pl, Manchester M3 4JJ, UK', '사워도우 전문 소규모 베이커리.', 'Small bakery specializing in sourdough.'),
  place('manchester-cafe-1', 'manchester', 'cafe', 'Foundation Coffee House', '74 Princess Street, M1 6JD Manchester, United Kingdom', '노던 쿼터 스페셜티.', 'Northern Quarter specialty coffee.', { image: '/places/manchester-cafe-1.jpg' }),
  place('manchester-cafe-2', 'manchester', 'cafe', 'Ancoats Coffee Co.', 'Unit 9 Redhill Street, M4 5BA Manchester, United Kingdom', '로스터리 카페.', 'Roastery café.'),
  place('manchester-cafe-3', 'manchester', 'cafe', 'Grindsmith', 'Blue, M50 2TG Salford, United Kingdom', '모던 에스프레소 바.', 'Modern espresso bars.', { image: '/places/manchester-cafe-3.jpg' }),
  place('manchester-cafe-5', 'manchester', 'cafe', 'Fig + Sparrow', '20 Oldham Street, M1 1JN Manchester, United Kingdom', '디자인 감성 카페.', 'Design-led café.'),

  // —— bath ——
  place('bath-fine_dining-1', 'bath', 'fine_dining', 'Menu Gordon Jones', '2 Wellsway, BA2 3AQ Bath, United Kingdom', '인티메이트 테이스팅 메뉴.', 'Intimate tasting menus.'),
  place('bath-fine_dining-2', 'bath', 'fine_dining', 'The Olive Tree', 'The Queensberry Hotel, 4-7 Russel Street, Bath BA1 2QF, United Kingdom', '퀸스베리 호텔 미슐랭.', 'Michelin at The Queensberry.', { image: '/places/bath-fine_dining-2.jpg' }),
  place('bath-fine_dining-3', 'bath', 'fine_dining', 'Allium at The Abbey Hotel', 'The Abbey Hotel, North Parade, Bath BA1 1LF, United Kingdom', '시즌 브리티시 다이닝.', 'Seasonal British dining.'),
  place('bath-fine_dining-4', 'bath', 'fine_dining', 'Corkage', '5 Chapel Row, BA1 1HN Bath, United Kingdom', '와인바 감성 스몰플레이트.', 'Wine-bar small plates.'),
  place('bath-fine_dining-5', 'bath', 'fine_dining', 'The Pump Room Restaurant', 'Stall Street, BA1 1LZ Bath, United Kingdom', '애프터눈 티·클래식.', 'Afternoon tea and classics.'),
  place('bath-bakery-1', 'bath', 'bakery', 'Bertinet Bakery', '1 New Bond Street Place, BA1 1BH Bath, United Kingdom', '리처드 베르티네 베이커리.', 'Richard Bertinet’s bakery.'),
  place('bath-bakery-2', 'bath', 'bakery', 'Mokoko Bakery', '4 Foundry Ln, Bath BA2 3GZ, UK', '오픈 키친의 아티산 페이스트리 베이커리.', 'Open-kitchen artisan pastry bakery.'),
  place('bath-bakery-3', 'bath', 'bakery', 'Mjölk Café & Bakery', '13 Abbey Churchyard, Bath BA1 1LZ, UK', '로만 바스 옆 작은 카페 베이커리.', 'Small café-bakery beside the Roman Baths.'),
  place('bath-bakery-4', 'bath', 'bakery', 'The Bath Bun Tea Shoppe', '2 Abbey Green, Bath BA1 1NW, United Kingdom', '바스번 전통.', 'Traditional Bath buns.'),
  place('bath-cafe-1', 'bath', 'cafe', 'Society Café', '4-5 Kingsmead Square, BA1 2AB Bath, United Kingdom', '스페셜티 커피.', 'Specialty coffee.', { image: '/places/bath-cafe-1.jpg' }),
  place('bath-cafe-2', 'bath', 'cafe', 'Colonna & Small’s', '6 Chapel Row, Bath BA1 1HT, United Kingdom', '월드클래스 커피 바.', 'World-class coffee bar.'),
  place('bath-cafe-3', 'bath', 'cafe', 'Café Retro', '18 York Street, Bath BA1 1NG, United Kingdom', '캐주얼 브런치.', 'Casual brunch.', { image: '/places/bath-cafe-3.jpg' }),
  place('bath-cafe-5', 'bath', 'cafe', 'Boston Tea Party', 'Monmouth Street, BA1 2AE Bath, United Kingdom', '브런치 체인 인기점.', 'Popular brunch spot.'),

  // —— oxford ——
  place('oxford-fine_dining-2', 'oxford', 'fine_dining', 'Cherwell Boathouse', '50 Bardwell Road, OX2 6ST Oxford, United Kingdom', '강변 파인 캐주얼.', 'Riverside fine-casual.', { image: '/places/oxford-fine_dining-2.jpg' }),
  place('oxford-fine_dining-3', 'oxford', 'fine_dining', 'Gees Restaurant', '61-63 Banbury Road, Oxford OX2 6PE, United Kingdom', '온실 공간 다이닝.', 'Conservatory dining.'),
  place('oxford-fine_dining-4', 'oxford', 'fine_dining', 'The Perch', 'Binsey Lane, OX2 0NG Oxford, United Kingdom', '템스강변 고스포트.', 'Thames-side gastropub.', { image: '/places/oxford-fine_dining-4.jpg' }),
  place('oxford-fine_dining-5', 'oxford', 'fine_dining', 'Quod Restaurant & Bar', '92-94 High Street, OX1 4BJ Oxford, United Kingdom', '올드뱅크 호텔 다이닝.', 'Old Bank Hotel dining.'),
  place('oxford-bakery-1', 'oxford', 'bakery', 'Hamblin Bread', '247 Iffley Rd, Oxford OX4 1SJ, UK', '전설적인 사워도우로 유명한 베이커리.', 'Bakery renowned for its legendary sourdough.', { image: '/places/oxford-bakery-1.jpg' }),
  place('oxford-cafe-1', 'oxford', 'cafe', 'The Missing Bean', '14 Turl Street, OX1 3DQ Oxford, United Kingdom', '옥스퍼드 대표 스페셜티.', 'Oxford specialty favourite.', { image: '/places/oxford-cafe-1.jpg' }),
  place('oxford-cafe-2', 'oxford', 'cafe', 'Peloton Espresso', '76 Cowley Road, OX4 1JB Oxford, United Kingdom', '작지만 강한 커피.', 'Tiny powerful coffee bar.', { image: '/places/oxford-cafe-2.jpg' }),
  place('oxford-cafe-3', 'oxford', 'cafe', 'Handle Bar Café', "28-32 St Michael's Street, Oxford OX1 2EB, United Kingdom", '자전거 테마 카페.', 'Bike-themed café.', { image: '/places/oxford-cafe-3.jpg' }),
  place('oxford-cafe-4', 'oxford', 'cafe', 'Vaults & Garden', '2 King Edward Street, OX1 4HS Oxford, United Kingdom', '교회 정원 카페.', 'Churchyard café.'),
  place('oxford-cafe-5', 'oxford', 'cafe', 'Broche Specialty Coffee', '165 Kingston Rd, Oxford OX2 6EG, UK', '제리코 지역의 아늑한 스페셜티 커피숍.', 'Cosy specialty coffee shop in Jericho.'),

  // —— cambridge ——
  place('cambridge-fine_dining-1', 'cambridge', 'fine_dining', 'Midsummer House', 'Midsummer Common, Cambridge CB4 1HA, UK', '미드서머 커먼 강변에 위치한 케임브리지 유일의 미쉐린 2스타 레스토랑', 'Cambridge\'s only 2-Michelin-starred restaurant, set beside the river on Midsummer Common', { image: '/places/cambridge-fine_dining-1.jpg' }),
  place('cambridge-fine_dining-3', 'cambridge', 'fine_dining', 'The Oak Bistro', '6 Lensfield Road, CB2 1EG Cambridge, United Kingdom', '로컬 인기 비스트로.', 'Local favourite bistro.', { image: '/places/cambridge-fine_dining-3.jpg' }),
  place('cambridge-bakery-1', 'cambridge', 'bakery', 'Fitzbillies', '52a Trumpington Street, CB2 1RG Cambridge, United Kingdom', '첼시번으로 전설적.', 'Legendary Chelsea buns.', { image: '/places/cambridge-bakery-1.jpg' }),
  place('cambridge-bakery-2', 'cambridge', 'bakery', 'Bakehouse Cambridge', 'Oxford Street, 2747 Sydney, Australia', '아티산 브레드.', 'Artisan breads.'),
  place('cambridge-cafe-1', 'cambridge', 'cafe', 'Hot Numbers Coffee', '4 Trumpington Street, CB2 1QA Cambridge, United Kingdom', '로스터리 카페.', 'Roastery café.'),
  place('cambridge-cafe-2', 'cambridge', 'cafe', 'Bould Brothers Coffee', '16 Round Church St, Cambridge CB5 8AD, UK', '케임브리지 최고 인기 스페셜티 커피숍.', 'One of Cambridge\'s most popular specialty coffee shops.'),
  place('cambridge-cafe-3', 'cambridge', 'cafe', 'Espresso Library', '210 East Road, CB1 1BG Cambridge, United Kingdom', '스페셜티·브런치.', 'Specialty and brunch.', { image: '/places/cambridge-cafe-3.jpg' }),
  place('cambridge-cafe-4', 'cambridge', 'cafe', 'Urban Larder', '9 The Broadway, CB1 3AH Cambridge, United Kingdom', '캐주얼 카페.', 'Casual café.'),
  place('cambridge-cafe-5', 'cambridge', 'cafe', 'Michaelhouse Café', 'Trinity Street, CB2 1SU Cambridge, United Kingdom', '교회 안 카페.', 'Café inside a church.', { image: '/places/cambridge-cafe-5.jpg' }),

  // —— liverpool ——
  place('liverpool-fine_dining-1', 'liverpool', 'fine_dining', 'Daise By Tony Parkin', '11 Rose Mount, Oxton, Birkenhead, Prenton CH43 5SG, UK', '옥스턴의 테이스팅 메뉴 파인 다이닝, 옛 Restaurant Fraiche 자리.', 'Tasting-menu fine dining in Oxton, on the former Restaurant Fraiche site.'),
  place('liverpool-fine_dining-2', 'liverpool', 'fine_dining', 'The Art School Restaurant', '1 Sugnall Street, L7 7EB Liverpool, United Kingdom', '시티센터 미슐랭급.', 'City-centre Michelin-level dining.'),
  place('liverpool-fine_dining-3', 'liverpool', 'fine_dining', 'Lunya', '55 Hanover Street, L1 4LN Liverpool, United Kingdom', '스패니시·로컬 퓨전 감성.', 'Spanish-local dining energy.'),
  place('liverpool-fine_dining-4', 'liverpool', 'fine_dining', 'Maray', '91 Bold Street, L1 4HF Liverpool, United Kingdom', '모던 스몰플레이트.', 'Modern small plates.'),
  place('liverpool-fine_dining-5', 'liverpool', 'fine_dining', 'Belzan', '371 Smithdown Road, Liverpool L15 3JJ, United Kingdom', '남부 리버풀 핫플.', 'South Liverpool hotspot.', { image: '/places/liverpool-fine_dining-5.jpg' }),
  place('liverpool-bakery-1', 'liverpool', 'bakery', 'Rough Handmade', 'Britannia Pavilion, Royal Albert Dock, Liverpool L3 4AD, UK', '로열 알버트 독의 인기 베이커리, 크루아상으로 유명.', 'Popular bakery at the Royal Albert Dock, known for its croissants.'),
  place('liverpool-bakery-3', 'liverpool', 'bakery', 'The Baltic Bakehouse', '46 Bridgewater Street, L1 0AY Liverpool, United Kingdom', '사워도우 유명.', 'Known for sourdough.'),
  place('liverpool-bakery-4', 'liverpool', 'bakery', 'Homebaked Anfield', '197-199 Oakfield Road, Anfield, Liverpool L4 0UF, United Kingdom', '커뮤니티 베이커리.', 'Community bakery.'),
  place('liverpool-cafe-1', 'liverpool', 'cafe', 'Bold Street Coffee', '89 Bold Street, L1 4HF Liverpool, United Kingdom', '볼드스트리트 스페셜티.', 'Bold Street specialty.'),
  place('liverpool-cafe-5', 'liverpool', 'cafe', 'Leaf', '364-368 Smithdown Road, L15 5AN Liverpool, United Kingdom', '차·커피·공연 공간.', 'Tea, coffee, and events.'),

  // —— brighton ——
  place('brighton-fine_dining-1', 'brighton', 'fine_dining', 'The Salt Room', "106 King's Road, BN1 2FU Brighton, United Kingdom", '시푸드 파인 다이닝.', 'Seafood fine dining.'),
  place('brighton-fine_dining-2', 'brighton', 'fine_dining', '64 Degrees', '53 Meeting House Lane, Brighton BN1 1HB, United Kingdom', '스몰플레이트 핫플.', 'Small-plates hotspot.'),
  place('brighton-fine_dining-4', 'brighton', 'fine_dining', 'The Coal Shed', '30-31 North Street, BN1 1EB Brighton, United Kingdom', '스테이크·시푸드.', 'Steak and seafood.', { image: '/places/brighton-fine_dining-4.jpg' }),
  place('brighton-fine_dining-5', 'brighton', 'fine_dining', 'Silo', 'Silo Court, 80603 Brighton, United States', '제로웨이스트 다이닝.', 'Zero-waste dining.', { image: '/places/brighton-fine_dining-5.jpg' }),
  place('brighton-bakery-2', 'brighton', 'bakery', 'The Flour Pot Bakery', '124 Elm Grove, BN2 3DB Brighton, United Kingdom', '브라이튼 인기 베이커리.', 'Brighton favourite bakery.', { image: '/places/brighton-bakery-2.jpg' }),
  place('brighton-bakery-3', 'brighton', 'bakery', 'Julien Plumart', '48 Queens Rd, Brighton and Hove, Brighton BN1 3XB, UK', '마카롱·크루아상으로 유명한 프렌치 파티스리.', 'French patisserie known for macarons and croissants.', { image: '/places/brighton-bakery-3.jpg' }),
  place('brighton-bakery-4', 'brighton', 'bakery', 'Bakehouse Brighton', '153 Brighton Road, 7030 Brighton, Australia', '사워도우.', 'Sourdough.'),
  place('brighton-cafe-2', 'brighton', 'cafe', 'Joe’s Café', '24 Upper Hamilton Rd, Brighton BN1 5DF', '세븐 다이얼스 근처의 작은 동네 카페. 지역 농산물로 만든 아침·브런치.', 'Small neighbourhood café near Seven Dials, serving breakfast and brunch from local suppliers.'),
  place('brighton-cafe-3', 'brighton', 'cafe', 'Metrodeco', "38 Upper St James's Street, Brighton BN2 1JN, United Kingdom", '빈티지 티·커피.', 'Vintage tea and coffee.', { image: '/places/brighton-cafe-3.jpg' }),

  // —— york ——
  place('york-fine_dining-1', 'york', 'fine_dining', 'The Star Inn the City', 'Museum Street, YO1 7DR York, United Kingdom', '강변 모던 브리티시.', 'Riverside modern British.', { image: '/places/york-fine_dining-1.jpg' }),
  place('york-fine_dining-2', 'york', 'fine_dining', 'Roots', 'Marygate, YO30 7BH York, United Kingdom', '톰슨의 시즌 다이닝.', 'Seasonal dining from Tommy Banks team.', { image: '/places/york-fine_dining-2.jpg' }),
  place('york-fine_dining-3', 'york', 'fine_dining', 'Skosh', '98 Micklegate, YO1 6JX York, United Kingdom', '스몰플레이트 창의 요리.', 'Creative small plates.', { image: '/places/york-fine_dining-3.jpg' }),
  place('york-fine_dining-4', 'york', 'fine_dining', 'The Path', "The Queen's Path, YO1 7JD York, United Kingdom", '모던 테이스팅.', 'Modern tasting menus.'),
  place('york-fine_dining-5', 'york', 'fine_dining', 'Melton’s', '7 Scarcroft Road, York YO23 1ND, United Kingdom', '로컬 클래식.', 'Local classic.'),
  place('york-bakery-3', 'york', 'bakery', 'Haxby Bakehouse', 'Ryedale Court, YO32 3SA Haxby, United Kingdom', '사워도우 유명.', 'Known for sourdough.'),
  place('york-bakery-5', 'york', 'bakery', 'Bettys Café Tea Rooms bakery', "6-8 St Helen's Square, YO1 8QP York, United Kingdom", '요크셔 티룸 베이크.', 'Yorkshire tearoom bakes.'),
  place('york-cafe-1', 'york', 'cafe', 'Spring Espresso', '21 Lendal, YO1 8AQ York, United Kingdom', '스페셜티 커피.', 'Specialty coffee.', { image: '/places/york-cafe-1.jpg' }),
  place('york-cafe-2', 'york', 'cafe', 'Brew & Brownie', '5 Museum Street, YO1 7DT York, United Kingdom', '브런치 카페.', 'Brunch café.', { image: '/places/york-cafe-2.jpg' }),
  place('york-cafe-3', 'york', 'cafe', 'Bettys', '1 Parliament Street, HG1 2QU Harrogate, United Kingdom', '전설적 티룸.', 'Legendary tearoom.', { image: '/places/york-cafe-3.jpg' }),
  place('york-cafe-4', 'york', 'cafe', 'Partisan', '112 Micklegate, YO1 6JX York, United Kingdom', '모던 카페.', 'Modern café.', { image: '/places/york-cafe-4.jpg' }),
  place('york-cafe-5', 'york', 'cafe', 'Perky Peacock', '3-5 Tanner Row, YO1 6HU York, United Kingdom', '탑 게이트 카페.', 'Tower gateway café.', { image: '/places/york-cafe-5.jpg' }),

  // —— bristol ——
  place('bristol-fine_dining-1', 'bristol', 'fine_dining', 'Bulrush', '21 Cotham Road South, BS6 5TZ Bristol, United Kingdom', '미슐랭 모던 브리티시.', 'Michelin modern British.', { image: '/places/bristol-fine_dining-1.jpg' }),
  place('bristol-fine_dining-2', 'bristol', 'fine_dining', 'Wilson’s', '24 Chandos Road, Bristol BS6 6PF, United Kingdom', '시즌·산지 코스.', 'Seasonal producer menus.'),
  place('bristol-fine_dining-5', 'bristol', 'fine_dining', 'Birch', 'Herbert Street, BS5 9BL Bristol, United Kingdom', '내추럴 와인·스몰플레이트.', 'Natural wine and small plates.'),
  place('bristol-bakery-1', 'bristol', 'bakery', 'Hart’s Bakery', 'Arch 35, Lower Approach Road, Temple Meads, Bristol BS1 6QS, United Kingdom', '역 앞 전설 베이커리.', 'Legendary bakery by the station.', { image: '/places/bristol-bakery-1.jpg' }),
  place('bristol-bakery-2', 'bristol', 'bakery', 'Better Food bakery', 'Gaol Ferry Steps, BS1 6WE Bristol, United Kingdom', '유기농 베이크.', 'Organic bakes.'),
  place('bristol-bakery-3', 'bristol', 'bakery', 'The Bristol Loaf', '94-96 Bedminster Parade, BS3 4HL Bristol, United Kingdom', '사워도우.', 'Sourdough.'),
  place('bristol-cafe-1', 'bristol', 'cafe', 'Full Court Press', '59 Broad Street, BS1 2EJ Bristol, United Kingdom', '스페셜티 성지.', 'Specialty coffee landmark.', { image: '/places/bristol-cafe-1.jpg' }),
  place('bristol-cafe-2', 'bristol', 'cafe', 'Tradewind Espresso', '118 Whiteladies Road, Bristol BS8 2RP, United Kingdom', '에스프레소 바.', 'Espresso bar.', { image: '/places/bristol-cafe-2.jpg' }),
  place('bristol-cafe-3', 'bristol', 'cafe', 'Small Street Espresso', '23 Small Street, BS1 1DW Bristol, United Kingdom', '작은 커피 바.', 'Tiny coffee bar.'),
  place('bristol-cafe-4', 'bristol', 'cafe', 'Friska', '36 Victoria Street, Bristol BS1 6BY, United Kingdom', '헬시 카페.', 'Healthy café.'),
  place('bristol-cafe-5', 'bristol', 'cafe', 'Boston Tea Party Bristol', '4 Whiteladies Road, BS8 2QY Bristol, United Kingdom', '브런치.', 'Brunch.'),

  // —— canterbury ——
  place('canterbury-fine_dining-1', 'canterbury', 'fine_dining', 'The Goods Shed', 'Station Road West, Canterbury CT2 8AN', '매일 열리는 농산물 시장 위의 제철 요리 레스토랑.', 'Seasonal restaurant above a daily farmers\' market.', { image: '/places/canterbury-fine_dining-1.jpg' }),
  place('canterbury-bakery-1', 'canterbury', 'bakery', 'The Goods Shed Bakery', 'Station Road West, Canterbury CT2 8AN', '굿즈 셰드 안에서 직접 굽는 빵과 페이스트리.', 'In-house breads and pastries at The Goods Shed.'),
  place('canterbury-cafe-1', 'canterbury', 'cafe', 'The Refectory Kitchen', "16 St Dunstan's Street, Canterbury CT2 8AF, United Kingdom", '세인트 던스턴의 인기 브런치 카페.', 'Popular St Dunstan\'s brunch café.', { image: '/places/canterbury-cafe-1.jpg' }),
  place('canterbury-cafe-2', 'canterbury', 'cafe', 'Cafe Chambers', '59 Palace Street, CT1 2DY Canterbury, United Kingdom', '위층에서 대성당이 보이는 팬케이크 카페.', 'Pancake café with cathedral views from upstairs.'),

  // —— windsor ——
  place('windsor-fine_dining-1', 'windsor', 'fine_dining', 'The Boatman', '10 Thames Side, Windsor SL4 1QN, United Kingdom', '윈저 성 아래 템스강변의 유일한 펍.', 'Windsor\'s only riverside pub, below the castle.'),
  place('windsor-fine_dining-2', 'windsor', 'fine_dining', 'Meimo', '69-70 Peascod Street, SL4 1DE Windsor, United Kingdom', '성 근처의 모로코·지중해 레스토랑.', 'Moroccan-Mediterranean restaurant near the castle.'),
  place('windsor-fine_dining-3', 'windsor', 'fine_dining', 'The Waterman\'s Arms', 'Brocas Street, Eton SL4 6BW', '윈저에서 다리를 건너면 바로 있는 1682년 무렵부터의 이튼 펍. 조정 기념품이 걸려 있습니다.', 'Eton pub dating from around 1682, just over the bridge from Windsor, hung with rowing memorabilia.', { image: '/places/windsor-fine_dining-3.jpg' }),

  // —— salisbury ——
  place('salisbury-fine_dining-1', 'salisbury', 'fine_dining', 'Haunch of Venison', '1-5 Minster Street, Salisbury SP1 1TB', '솔즈베리에서 가장 오래된 여관 겸 펍, 사슴고기 요리.', 'Salisbury\'s oldest hostelry, known for venison dishes.', { image: '/places/salisbury-fine_dining-1.jpg' }),
  place('salisbury-cafe-1', 'salisbury', 'cafe', 'Salisbury Museum Café', "The King's House, 65 The Close, Salisbury SP1 2EN, United Kingdom", '대성당 맞은편 박물관 카페, 크림 티.', 'Museum café opposite the cathedral, with cream teas.'),

  // —— cotswolds ——
  place('cotswolds-fine_dining-1', 'cotswolds', 'fine_dining', 'The Old New Inn', 'Rissington Road, Bourton-on-the-Water GL54 2AF, United Kingdom', '텃밭 재료를 쓰는 버턴온더워터의 펍.', 'Bourton pub cooking with its own allotment produce.', { image: '/places/cotswolds-fine_dining-1.jpg' }),
  place('cotswolds-fine_dining-2', 'cotswolds', 'fine_dining', 'The Porch House', '1 Digbeth Street, Stow-on-the-Wold GL54 1BN, United Kingdom', '스토온더월드의 오래된 여관 펍.', 'Historic inn-pub in Stow-on-the-Wold.', { image: '/places/cotswolds-fine_dining-2.jpg' }),
  place('cotswolds-bakery-1', 'cotswolds', 'bakery', 'The Bakery on the Water', '1 Sherborne Street, Bourton-on-the-Water GL54 2BY, United Kingdom', '강가의 베이커리, 페이스트리와 스콘.', 'Riverside bakery for pastries and scones.', { image: '/places/cotswolds-bakery-1.jpg' }),
  place('cotswolds-cafe-1', 'cotswolds', 'cafe', 'Bantam Tea Rooms', 'High Street, Chipping Campden GL55 6HB, United Kingdom', '300년 된 치핑캠든의 티룸.', '300-year-old tea room in Chipping Campden.'),

  // —— stratford-upon-avon ——
  place('stratford-upon-avon-fine_dining-1', 'stratford-upon-avon', 'fine_dining', 'The Opposition', '13 Sheep Street, Stratford-upon-Avon CV37 6EF', '16세기 건물의 공연 전후 식사 명소 비스트로.', 'Pre- and post-theatre bistro in a 16th-century building.'),
  place('stratford-upon-avon-bakery-1', 'stratford-upon-avon', 'bakery', 'Hobsons Patisseries', '1 Henley Street, CV37 6PT Stratford-on-Avon, United Kingdom', '셰익스피어 생가 근처의 파이·애프터눈 티.', 'Pies and afternoon tea near Shakespeare\'s Birthplace.'),
  place('stratford-upon-avon-cafe-1', 'stratford-upon-avon', 'cafe', 'Fourteas Tea Room', '24 Sheep Street, Stratford-upon-Avon CV37 6EF, United Kingdom', '1940년대 콘셉트의 빈티지 티룸.', '1940s-themed vintage tea room.'),

  // —— lake-district ——
  place('lake-district-fine_dining-1', 'lake-district', 'fine_dining', 'Forest Side', 'Keswick Road, Grasmere LA22 9RN, United Kingdom', '텃밭과 채집 재료로 요리하는 그래스미어의 레스토랑.', 'Grasmere restaurant cooking from its garden and foraging.', { image: '/places/lake-district-fine_dining-1.jpg' }),
  place('lake-district-fine_dining-2', 'lake-district', 'fine_dining', 'The Old Stamp House', 'Church Street, Ambleside LA22 0BU, United Kingdom', '컴브리아 향토 요리를 내는 앰블사이드의 작은 레스토랑.', 'Small Ambleside restaurant championing Cumbrian dishes.'),
  place('lake-district-bakery-1', 'lake-district', 'bakery', 'Grasmere Gingerbread Shop', 'Church Cottage, Grasmere LA22 9SW, United Kingdom', '1854년 사라 넬슨이 만든 그래스미어 진저브레드의 원조.', 'Home of Sarah Nelson\'s Grasmere gingerbread since 1854.'),
  place('lake-district-fine_dining-3', 'lake-district', 'fine_dining', 'Zeffirellis', '2 Compston Road, Ambleside LA22 9AD, United Kingdom', '채식 이탈리안 레스토랑 겸 재즈 카페.', 'Vegetarian Italian restaurant and jazz café.'),

  // —— st-ives ——
  place('st-ives-fine_dining-1', 'st-ives', 'fine_dining', 'Porthminster Beach Café', 'Porthminster Beach, St Ives TR26 2EB', '해변 위의 수상 경력 해산물 레스토랑.', 'Award-winning seafood restaurant right on the beach.'),
  place('st-ives-fine_dining-2', 'st-ives', 'fine_dining', 'Porthminster Kitchen', 'Wharf Road, TR26 1LG St. Ives, United Kingdom', '항구가 내려다보이는 자매 레스토랑.', 'Sister restaurant overlooking the harbor.', { image: '/places/st-ives-fine_dining-2.jpg' }),

  // —— glasgow ——
  place('glasgow-fine_dining-1', 'glasgow', 'fine_dining', 'Ubiquitous Chip', '12 Ashton Lane, Glasgow G12 8SJ', '1971년부터 창의적인 스코틀랜드 요리를 내는 웨스트엔드 명소.', 'West End institution for inventive Scottish food since 1971.', { image: '/places/glasgow-fine_dining-1.jpg' }),
  place('glasgow-fine_dining-2', 'glasgow', 'fine_dining', 'Ox and Finch', '920 Sauchiehall Street, Glasgow G3 7TF', '미쉐린 가이드에 오른 지중해풍 스몰 플레이트 비스트로.', 'Michelin-listed bistro of Mediterranean small plates.'),
  place('glasgow-cafe-1', 'glasgow', 'cafe', 'Mackintosh at the Willow', '215-217 Sauchiehall Street, Glasgow G2 3EX', '찰스 레니 매킨토시가 설계한 티룸의 애프터눈 티.', 'Afternoon tea in Charles Rennie Mackintosh\'s tea room.', { image: '/places/glasgow-cafe-1.jpg' }),

  // —— stirling ——
  place('stirling-cafe-1', 'stirling', 'cafe', 'Darnley Coffee House', '18 Bow Street, Stirling FK8 1BS', '성 아래 역사 건물의 수프·토스티 카페.', 'Soup-and-toastie café in a historic building below the castle.', { image: '/places/stirling-cafe-1.jpg' }),
  place('stirling-fine_dining-1', 'stirling', 'fine_dining', 'Brea', '5 Baker Street, FK8 1BJ Stirling, United Kingdom', '성 근처의 스코틀랜드 가정식 카페 레스토랑.', 'Café-restaurant of Scottish home cooking near the castle.'),
  place('stirling-cafe-2', 'stirling', 'cafe', 'Legends at Cowane’s', 'Cowane’s Hospital, St John Street, Stirling', '17세기 구빈원 코웨인스 호스피털의 길드홀과 정원 테라스에서 여는 카페.', 'Café in the Guildhall and garden terrace of 17th-century Cowane’s Hospital.'),

  // —— st-andrews ——
  place('st-andrews-fine_dining-1', 'st-andrews', 'fine_dining', 'The Seafood Ristorante', 'The Scores, St Andrews KY16 9AB', '바다 위 유리 큐브 속 해산물 레스토랑.', 'Seafood restaurant in a glass cube over the bay.'),
  place('st-andrews-bakery-1', 'st-andrews', 'bakery', 'Jannettas Gelateria', '31 South Street, St Andrews KY16 9QR', '54가지 맛의 오래된 젤라테리아.', 'Long-running gelateria with 54 flavors.'),
  place('st-andrews-cafe-1', 'st-andrews', 'cafe', 'Northpoint Cafe', '24 North Street, St Andrews KY16 9AQ', '윌리엄 왕자 커플이 다녔다는 브런치 카페.', 'Brunch café known as a royal-couple haunt.', { image: '/places/st-andrews-cafe-1.jpg' }),

  // —— inverness ——
  place('inverness-fine_dining-1', 'inverness', 'fine_dining', 'Rocpool', '1 Ness Walk, Inverness IV3 5NE', '인버네스 최고로 꼽히는 강변 레스토랑.', 'Riverside restaurant often ranked Inverness\'s best.'),
  place('inverness-fine_dining-2', 'inverness', 'fine_dining', 'The Mustard Seed', '16 Fraser Street, Inverness IV1 1DW', '옛 교회 건물의 강 전망 레스토랑.', 'River-view restaurant in a former church.'),
  place('inverness-fine_dining-3', 'inverness', 'fine_dining', 'Café 1', '75 Castle Street, Inverness IV2 3EA', '성 근처의 모던 스코틀랜드 비스트로.', 'Modern Scottish bistro near the castle.'),

  // —— isle-of-skye ——
  place('isle-of-skye-fine_dining-1', 'isle-of-skye', 'fine_dining', 'The Three Chimneys', 'Colbost, Dunvegan, Isle of Skye IV55 8ZT', '100년 된 돌집의 스카이섬 대표 레스토랑.', 'Skye\'s celebrated restaurant in a century-old stone cottage.'),
  place('isle-of-skye-fine_dining-2', 'isle-of-skye', 'fine_dining', 'Scorrybreac', '7 Bosville Terrace, Portree IV51 9DG', '포트리 항구 위의 모던 스코틀랜드 요리.', 'Modern Scottish cooking above Portree harbour.'),
  place('isle-of-skye-cafe-1', 'isle-of-skye', 'cafe', 'Cafe Arriba', 'Quay Brae, Portree IV51 9DB', '항구가 보이는 포트리의 캐주얼 카페.', 'Casual Portree café overlooking the harbour.'),

  // —— cardiff ——
  place('cardiff-cafe-1', 'cardiff', 'cafe', 'Hard Lines', 'Cowbridge Road East, CF5 1GX Cardiff, United Kingdom', '카디프 마켓 안의 스페셜티 커피 로스터리 카페.', 'Specialty roaster\'s coffee bar in Cardiff Market.'),
  place('cardiff-bakery-1', 'cardiff', 'bakery', 'Cardiff Bakestones', 'Stall 161-165, Cardiff Central Market, Cardiff CF10 1AU, United Kingdom', '전통 철판에서 굽는 웰시 케이크.', 'Welsh cakes cooked on a traditional bakestone.'),
  place('cardiff-bakery-2', 'cardiff', 'bakery', 'Fabulous Welshcakes', 'Bute Street, CF10 5BZ Cardiff, United Kingdom', '다양한 맛의 웰시 케이크 전문점.', 'Welsh cake shop with many flavors.'),

  // —— conwy ——
  place('conwy-fine_dining-1', 'conwy', 'fine_dining', 'Watson\'s Bistro', 'Bishop\'s Yard, Chapel Street, Conwy LL32 8BP', '지역 식재료를 쓰는 가족 운영 비스트로.', 'Family-run bistro showcasing local produce.'),
  place('conwy-fine_dining-2', 'conwy', 'fine_dining', 'The Erskine Arms', 'Rosehill Street, Conwy LL32 8LD', '성 근처 조지 시대 여관의 펍 레스토랑.', 'Pub-restaurant in a Georgian coaching inn by the castle.', { image: '/places/conwy-fine_dining-2.jpg' }),
  place('conwy-cafe-1', 'conwy', 'cafe', 'L\'s Coffee & Bookshop', '7 High Street, Conwy LL32 8DB', '책방을 겸한 콘위의 커피숍.', 'Coffee shop and bookshop in Conwy.'),

  // —— snowdonia ——
  place('snowdonia-cafe-1', 'snowdonia', 'cafe', 'Pete\'s Eats', '40 High Street, Llanberis LL55 4EU', '등산가들의 전설적인 아지트였던 란베리스 식당.', 'Llanberis café-restaurant, a legendary climbers\' hangout.'),
  place('snowdonia-fine_dining-1', 'snowdonia', 'fine_dining', 'Hangin\' Pizzeria', 'Unit 1, Station Approach, Betws-y-Coed LL24 0AE', '베투시코이드의 캐주얼 피자 가게.', 'Laid-back pizza spot in Betws-y-Coed.'),

  // —— tenby ——
  place('tenby-fine_dining-1', 'tenby', 'fine_dining', 'Plantagenet House', 'Quay Hill, Tenby SA70 7BX', '텐비에서 가장 오래된 건물 속 레스토랑.', 'Restaurant in Tenby\'s oldest building.'),
  place('tenby-fine_dining-2', 'tenby', 'fine_dining', 'D. Fecci and Sons', 'Lower Frog Street, SA70 7HT Tenby, United Kingdom', '1935년부터 이어온 피시 앤 칩스.', 'Fish and chips since 1935.'),
  place('tenby-bakery-1', 'tenby', 'bakery', 'The Original Fecci\'s Ice Cream Parlour', 'Lower Frog Street, Tenby SA70 7HS', '1919년부터 이어온 텐비의 아이스크림 가게.', 'Tenby\'s ice-cream institution since 1919.'),

  // —— belfast ——
  place('belfast-fine_dining-1', 'belfast', 'fine_dining', 'OX', '1 Oxford Street, Belfast BT1 3LA', '미쉐린 스타를 받은 강변 레스토랑.', 'Michelin-starred riverside restaurant.'),
  place('belfast-fine_dining-2', 'belfast', 'fine_dining', 'Deanes EIPIC', '28-40 Howard Street, Belfast BT1 6PF', '마이클 딘 셰프의 미쉐린 스타 레스토랑.', 'Chef Michael Deane\'s Michelin-starred restaurant.'),
  place('belfast-cafe-1', 'belfast', 'cafe', 'Established Coffee', '54 Hill Street, Belfast BT1 2LB', '캐시드럴 쿼터의 스페셜티 커피숍.', 'Specialty coffee in the Cathedral Quarter.'),

  // —— giants-causeway ——
  place('giants-causeway-fine_dining-1', 'giants-causeway', 'fine_dining', 'The Bushmills Inn', '9 Dunluce Road, Bushmills BT57 8QG', 'AA 로제트를 받은 오래된 여관 레스토랑.', 'AA Rosette-winning restaurant in an old coaching inn.'),
  place('giants-causeway-fine_dining-3', 'giants-causeway', 'fine_dining', 'Tartine at the Distillers Arms', '140 Main Street, Bushmills BT57 8QE', '옛 증류소를 개조한 레스토랑.', 'Restaurant in a converted distillery building.'),

  // —— derry ——
  place('derry-fine_dining-1', 'derry', 'fine_dining', 'Walled City Brewery', 'Ebrington Square, Derry BT47 6FA', '양조장과 레스토랑을 함께 운영하는 브루펍.', 'Brewpub with a working brewery and restaurant.', { image: '/places/derry-fine_dining-1.jpg' }),
  place('derry-fine_dining-2', 'derry', 'fine_dining', 'Pyke ’n’ Pommes POD', '124 Strand Road, Derry BT48 7NS', '강변의 버스·컨테이너 주방에서 시작한 길거리 음식점. 시내 매장은 2026년 초 문을 닫았습니다.', 'Quayside street-food kitchen in a bus and container; the town restaurant closed in early 2026.', { image: '/places/derry-fine_dining-2.jpg' }),
]
