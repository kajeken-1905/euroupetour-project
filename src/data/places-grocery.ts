import { place } from './placeFactory'
import type { Place } from '../types'

/** Grocery stores, markets, and hypermarkets per city. */
export const placesGrocery: Place[] = [
  // —— london ——
  place('london-grocery-1', 'london', 'grocery', 'Borough Market', 4.6, '8 Southwark St, London', '[식료품점] 식료품·식재료 마켓의 명소.', '[Grocery] Iconic food and grocery market.', { reviewCount: 35000 }),

  // —— edinburgh ——
  place('edinburgh-grocery-1', 'edinburgh', 'grocery', 'Farmers Market / Stockbridge', 4.5, 'Stockbridge, Edinburgh', '[식료품점] 로컬 식료품·델리 쇼핑.', '[Grocery] Local groceries and deli shopping.', { reviewCount: 2100 }),

  // —— manchester ——
  place('manchester-grocery-1', 'manchester', 'grocery', 'Mackie Mayor / food hall groceries', 4.5, 'Swan Street, Manchester', '[식료품점] 마켓·식료품 감성 쇼핑.', '[Grocery] Market-style food shopping.', { reviewCount: 4500 }),

  // —— bath ——
  place('bath-grocery-1', 'bath', 'grocery', 'Bath Guildhall Market', 4.4, 'High St, Bath', '[식료품점] 로컬 식료품·특산품 마켓.', '[Grocery] Local groceries and speciality market.', { reviewCount: 1600 }),

  // —— oxford ——
  place('oxford-grocery-1', 'oxford', 'grocery', 'Covered Market Oxford', 4.5, 'Market St, Oxford', '[식료품점] 센터 식료품·델리 마켓.', '[Grocery] Central groceries and deli market.', { reviewCount: 4800 }),

  // —— cambridge ——
  place('cambridge-grocery-1', 'cambridge', 'grocery', 'Cambridge Market Square', 4.4, 'Market Hill, Cambridge', '[식료품점] 오픈에어 식료품·로컬 마켓.', '[Grocery] Open-air groceries and local market.', { reviewCount: 2900 }),

  // —— liverpool ——
  place('liverpool-grocery-1', 'liverpool', 'grocery', 'Liverpool Market / Bold Street groceries', 4.4, 'Bold Street area', '[식료품점] 로컬 식료품·독립 델리.', '[Grocery] Local groceries and indie delis.', { reviewCount: 1800 }),

  // —— brighton ——
  place('brighton-grocery-1', 'brighton', 'grocery', 'Brighton Open Market', 4.5, 'London Rd, Brighton', '[식료품점] 로컬 식료품·프로듀스 마켓.', '[Grocery] Local groceries and produce market.', { reviewCount: 2200 }),

  // —— york ——
  place('york-grocery-1', 'york', 'grocery', 'York Shambles Market / food stalls', 4.4, 'Shambles, York', '[식료품점] 식료품·특산 먹거리 쇼핑.', '[Grocery] Food and speciality grocery shopping.', { reviewCount: 5600 }),

  // —— bristol ——
  place('bristol-grocery-1', 'bristol', 'grocery', 'St Nicholas Market', 4.5, 'Corn St, Bristol', '[식료품점] 식료품·스트리트푸드 마켓.', '[Grocery] Groceries and street-food market.', { reviewCount: 6100 }),

  // —— amsterdam ——
  place('amsterdam-grocery-1', 'amsterdam', 'grocery', 'Albert Cuyp Market', 4.5, 'Albert Cuypstraat, Amsterdam', '[식료품점] 식료품·로컬 마켓의 명소.', '[Grocery] Famous local groceries market.', { reviewCount: 22000 }),

  // —— rotterdam ——
  place('rotterdam-grocery-1', 'rotterdam', 'grocery', 'Markthal Rotterdam', 4.5, 'Dominee Jan Scharpstraat', '[식료품점] 식료품·마켓홀.', '[Grocery] Food hall and groceries.', { reviewCount: 28000 }),

  // —— the-hague ——
  place('the-hague-grocery-1', 'the-hague', 'grocery', 'Haagse Market / local groceries', 4.4, 'Herman Costerstraat', '[식료품점] 대형 로컬 식료품 마켓.', '[Grocery] Large local groceries market.', { reviewCount: 6800 }),

  // —— utrecht ——
  place('utrecht-grocery-1', 'utrecht', 'grocery', 'Vredenburg Market', 4.4, 'Vredenburg, Utrecht', '[식료품점] 주말 식료품 마켓.', '[Grocery] Weekend groceries market.', { reviewCount: 2400 }),

  // —— haarlem ——
  place('haarlem-grocery-1', 'haarlem', 'grocery', 'Grote Markt / local groceries', 4.4, 'Haarlem centre', '[식료품점] 광장 권역 식료품·델리.', '[Grocery] Square-area groceries and delis.', { reviewCount: 1500 }),

  // —— delft ——
  place('delft-grocery-1', 'delft', 'grocery', 'Local cheese & grocery shops', 4.5, 'Delft centre', '[식료품점] 치즈·로컬 식료품점.', '[Grocery] Cheese and local grocery shops.', { reviewCount: 900 }),

  // —— maastricht ——
  place('maastricht-grocery-1', 'maastricht', 'grocery', 'Markt groceries & specialty food', 4.4, 'Markt, Maastricht', '[식료품점] 광장 식료품·특산품.', '[Grocery] Square groceries and specialities.', { reviewCount: 1600 }),

  // —— giethoorn ——
  place('giethoorn-grocery-1', 'giethoorn', 'grocery', 'Local farm shops & groceries', 4.4, 'Giethoorn area', '[식료품점] 농장·로컬 식료품점.', '[Grocery] Farm shops and local groceries.', { reviewCount: 500 }),

  // —— luxembourg-city ——
  place('luxembourg-city-grocery-1', 'luxembourg-city', 'grocery', 'Auchan Kirchberg / grocery hubs', 4.2, 'Kirchberg', '[식료품점] 대형 식료품·하이퍼마켓.', '[Grocery] Large grocery hypermarkets.', { reviewCount: 3500 }),

  // —— vianden ——
  place('vianden-grocery-1', 'vianden', 'grocery', 'Local grocery & specialty shops', 4.3, 'Vianden', '[식료품점] 로컬 식료품·특산품점.', '[Grocery] Local groceries and speciality shops.', { reviewCount: 350 }),

  // —— echternach ——
  place('echternach-grocery-1', 'echternach', 'grocery', 'Local groceries & bakeries supplies', 4.3, 'Echternach', '[식료품점] 로컬 식료품점.', '[Grocery] Local grocery stores.', { reviewCount: 320 }),

  // —— remich ——
  place('remich-grocery-1', 'remich', 'grocery', 'Wine & grocery specialty shops', 4.4, 'Remich', '[식료품점] 와인·식료품 특산점.', '[Grocery] Wine and grocery speciality shops.', { reviewCount: 420 }),

  // —— brussels ——
  place('brussels-grocery-1', 'brussels', 'grocery', 'Place Sainte-Catherine / markets', 4.5, 'Brussels', '[식료품점] 식료품·시푸드·로컬 마켓.', '[Grocery] Groceries, seafood and local markets.', { reviewCount: 5200 }),

  // —— bruges ——
  place('bruges-grocery-1', 'bruges', 'grocery', 'Markt & chocolate/grocery shops', 4.5, 'Markt, Bruges', '[식료품점] 식료품·초콜릿·특산품.', '[Grocery] Groceries, chocolate and specialities.', { reviewCount: 4800 }),

  // —— ghent ——
  place('ghent-grocery-1', 'ghent', 'grocery', 'Ghent Market / local groceries', 4.4, 'Groentenmarkt area', '[식료품점] 로컬 식료품 마켓.', '[Grocery] Local groceries market.', { reviewCount: 2100 }),

  // —— antwerp ——
  place('antwerp-grocery-1', 'antwerp', 'grocery', 'Exotic Market / grocery halls', 4.4, 'Antwerp', '[식료품점] 다국적 식료품 마켓.', '[Grocery] International groceries market.', { reviewCount: 3200 }),

  // —— leuven ——
  place('leuven-grocery-1', 'leuven', 'grocery', 'Weekly market groceries', 4.4, 'Leuven centre', '[식료품점] 주간 식료품 마켓.', '[Grocery] Weekly groceries market.', { reviewCount: 1400 }),

  // —— dinant ——
  place('dinant-grocery-1', 'dinant', 'grocery', 'Local grocery & specialty food', 4.3, 'Dinant', '[식료품점] 로컬 식료품·특산품.', '[Grocery] Local groceries and specialities.', { reviewCount: 380 }),

  // —— oslo ——
  place('oslo-grocery-1', 'oslo', 'grocery', 'Mathallen Oslo', 4.5, 'Vulkan, Oslo', '[식료품점] 식료품·델리 푸드홀.', '[Grocery] Groceries and deli food hall.', { reviewCount: 8900 }),

  // —— bergen ——
  place('bergen-grocery-1', 'bergen', 'grocery', 'Bergen Fish Market / groceries', 4.4, 'Torget, Bergen', '[식료품점] 수산·식료품 마켓.', '[Grocery] Fish and grocery market.', { reviewCount: 7600 }),

  // —— tromso ——
  place('tromso-grocery-1', 'tromso', 'grocery', 'Local grocery stores (Rema/Kiwi area)', 4.3, 'Tromsø', '[식료품점] 로컬 식료품점.', '[Grocery] Local grocery stores.', { reviewCount: 900 }),

  // —— stavanger ——
  place('stavanger-grocery-1', 'stavanger', 'grocery', 'Fish Market & local groceries', 4.4, 'Stavanger', '[식료품점] 수산·로컬 식료품.', '[Grocery] Fish market and local groceries.', { reviewCount: 2100 }),

  // —— trondheim ——
  place('trondheim-grocery-1', 'trondheim', 'grocery', 'Ravnkloa Fish Market / groceries', 4.4, 'Trondheim', '[식료품점] 수산·식료품 마켓.', '[Grocery] Fish and grocery market.', { reviewCount: 1800 }),

  // —— alesund ——
  place('alesund-grocery-1', 'alesund', 'grocery', 'Local seafood & grocery shops', 4.4, 'Ålesund', '[식료품점] 해산물·로컬 식료품점.', '[Grocery] Seafood and local groceries.', { reviewCount: 700 }),

  // —— flam ——
  place('flam-grocery-1', 'flam', 'grocery', 'Local grocery & picnic supplies', 4.3, 'Flåm', '[식료품점] 피크닉·로컬 식료품.', '[Grocery] Picnic and local groceries.', { reviewCount: 500 }),

  // —— helsinki ——
  place('helsinki-grocery-1', 'helsinki', 'grocery', 'Vanha kauppahalli / Market Square', 4.5, 'Helsinki', '[식료품점] 식료품·마켓홀.', '[Grocery] Grocery market hall and square.', { reviewCount: 7200 }),

  // —— turku ——
  place('turku-grocery-1', 'turku', 'grocery', 'Turku Market Hall', 4.5, 'Turku', '[식료품점] 식료품 마켓홀.', '[Grocery] Grocery market hall.', { reviewCount: 2800 }),

  // —— tampere ——
  place('tampere-grocery-1', 'tampere', 'grocery', 'Kauppahalli Tampere', 4.5, 'Tampere', '[식료품점] 식료품 마켓홀.', '[Grocery] Grocery market hall.', { reviewCount: 3200 }),

  // —— rovaniemi ——
  place('rovaniemi-grocery-1', 'rovaniemi', 'grocery', 'Local grocery stores & market', 4.3, 'Rovaniemi', '[식료품점] 로컬 식료품점·마켓.', '[Grocery] Local groceries and market.', { reviewCount: 900 }),

  // —— porvoo ——
  place('porvoo-grocery-1', 'porvoo', 'grocery', 'Porvoo Market Square groceries', 4.4, 'Porvoo', '[식료품점] 광장 식료품·로컬 특산.', '[Grocery] Square groceries and local specialities.', { reviewCount: 1100 }),

  // —— stockholm ——
  place('stockholm-grocery-1', 'stockholm', 'grocery', 'Östermalms Saluhall', 4.6, 'Östermalm, Stockholm', '[식료품점] 프리미엄 식료품 홀.', '[Grocery] Premium grocery food hall.', { reviewCount: 9800 }),

  // —— gothenburg ——
  place('gothenburg-grocery-1', 'gothenburg', 'grocery', 'Feskekörka / Saluhallen', 4.5, 'Gothenburg', '[식료품점] 수산·식료품 홀.', '[Grocery] Fish and grocery halls.', { reviewCount: 6400 }),

  // —— malmo ——
  place('malmo-grocery-1', 'malmo', 'grocery', 'Möllevångstorget market groceries', 4.5, 'Malmö', '[식료품점] 다문화 식료품 마켓.', '[Grocery] Multicultural groceries market.', { reviewCount: 3600 }),

  // —— uppsala ——
  place('uppsala-grocery-1', 'uppsala', 'grocery', 'Uppsala saluhall / groceries', 4.4, 'Uppsala', '[식료품점] 식료품 홀·로컬 마켓.', '[Grocery] Grocery hall and local market.', { reviewCount: 1400 }),

  // —— kiruna ——
  place('kiruna-grocery-1', 'kiruna', 'grocery', 'Local grocery stores', 4.2, 'Kiruna', '[식료품점] 로컬 식료품점.', '[Grocery] Local grocery stores.', { reviewCount: 450 }),

  // —— copenhagen ——
  place('copenhagen-grocery-1', 'copenhagen', 'grocery', 'Torvehallerne', 4.6, 'Israels Plads, Copenhagen', '[식료품점] 식료품·델리 마켓홀.', '[Grocery] Grocery and deli market halls.', { reviewCount: 14000 }),

  // —— aarhus ——
  place('aarhus-grocery-1', 'aarhus', 'grocery', 'Aarhus Street Food / local groceries', 4.5, 'Aarhus', '[식료품점] 푸드홀·로컬 식료품.', '[Grocery] Food hall and local groceries.', { reviewCount: 5200 }),

  // —— odense ——
  place('odense-grocery-1', 'odense', 'grocery', 'Odense Market / groceries', 4.3, 'Odense', '[식료품점] 로컬 식료품 마켓.', '[Grocery] Local groceries market.', { reviewCount: 1200 }),

  // —— aalborg ——
  place('aalborg-grocery-1', 'aalborg', 'grocery', 'Local market & grocery shops', 4.3, 'Aalborg', '[식료품점] 로컬 마켓·식료품점.', '[Grocery] Local market and grocery shops.', { reviewCount: 900 }),

  // —— roskilde ——
  place('roskilde-grocery-1', 'roskilde', 'grocery', 'Local grocery stores & market days', 4.3, 'Roskilde', '[식료품점] 로컬 식료품·마켓 데이.', '[Grocery] Local groceries and market days.', { reviewCount: 550 }),

  // —— extras (grocery 2–4) ——
  place('london-grocery-2', 'london', 'grocery', 'Waitrose & Partners (Marylebone)', 4.3, 'Marylebone, London', '[대형마트] 웨이트로즈 슈퍼마켓.', '[Hypermarket] Waitrose supermarket.', { reviewCount: 3200 }),
  place('london-grocery-3', 'london', 'grocery', 'Sainsbury\'s Local / Oxford Street area', 4.1, 'London', '[슈퍼] 세인즈버리 식료품점.', '[Supermarket] Sainsbury\'s grocery store.', { reviewCount: 2800 }),
  place('london-grocery-4', 'london', 'grocery', 'Whole Foods Market Kensington', 4.2, 'Kensington, London', '[식료품점] 홀푸드 마켓.', '[Grocery] Whole Foods Market.', { reviewCount: 4100 }),
  place('edinburgh-grocery-2', 'edinburgh', 'grocery', 'Marks & Spencer Foodhall', 4.2, 'Edinburgh', '[대형마트] M&S 푸드홀.', '[Hypermarket] M&S Foodhall.', { reviewCount: 1800 }),
  place('edinburgh-grocery-3', 'edinburgh', 'grocery', 'Tesco Extra / city groceries', 4.0, 'Edinburgh', '[슈퍼] 테스코 식료품.', '[Supermarket] Tesco groceries.', { reviewCount: 2200 }),
  place('edinburgh-grocery-4', 'edinburgh', 'grocery', 'Scran / local deli groceries', 4.3, 'Edinburgh', '[식료품점] 로컬 델리·식료품.', '[Grocery] Local deli groceries.', { reviewCount: 900 }),
  place('manchester-grocery-2', 'manchester', 'grocery', 'Booths / premium groceries', 4.3, 'Manchester area', '[대형마트] 부스 프리미엄 그로서리.', '[Hypermarket] Booths premium groceries.', { reviewCount: 1600 }),
  place('manchester-grocery-3', 'manchester', 'grocery', 'Tesco Extra Manchester', 4.0, 'Manchester', '[슈퍼] 테스코 엑스트라.', '[Supermarket] Tesco Extra.', { reviewCount: 2400 }),
  place('manchester-grocery-4', 'manchester', 'grocery', 'Chinatown grocery stores', 4.3, 'Manchester', '[식료품점] 차이나타운 식료품점.', '[Grocery] Chinatown grocery stores.', { reviewCount: 1100 }),
  place('bath-grocery-2', 'bath', 'grocery', 'Waitrose Bath', 4.3, 'Bath', '[대형마트] 웨이트로즈.', '[Hypermarket] Waitrose.', { reviewCount: 1200 }),
  place('bath-grocery-3', 'bath', 'grocery', 'Sainsbury\'s Bath', 4.1, 'Bath', '[슈퍼] 세인즈버리.', '[Supermarket] Sainsbury\'s.', { reviewCount: 1400 }),
  place('bath-grocery-4', 'bath', 'grocery', 'Independent cheese & grocery shops', 4.4, 'Bath', '[식료품점] 치즈·독립 식료품점.', '[Grocery] Cheese and indie groceries.', { reviewCount: 700 }),
  place('oxford-grocery-2', 'oxford', 'grocery', 'Waitrose Oxford', 4.3, 'Oxford', '[대형마트] 웨이트로즈.', '[Hypermarket] Waitrose.', { reviewCount: 1500 }),
  place('oxford-grocery-3', 'oxford', 'grocery', 'Sainsbury\'s / Tesco Oxford', 4.1, 'Oxford', '[슈퍼] 세인즈버리·테스코.', '[Supermarket] Sainsbury\'s and Tesco.', { reviewCount: 1800 }),
  place('oxford-grocery-4', 'oxford', 'grocery', 'Taylor\'s / deli groceries', 4.3, 'Oxford', '[식료품점] 델리·식료품.', '[Grocery] Deli groceries.', { reviewCount: 600 }),
  place('cambridge-grocery-2', 'cambridge', 'grocery', 'Sainsbury\'s Cambridge', 4.2, 'Cambridge', '[대형마트] 세인즈버리.', '[Hypermarket] Sainsbury\'s.', { reviewCount: 1600 }),
  place('cambridge-grocery-3', 'cambridge', 'grocery', 'Tesco Express / city groceries', 4.0, 'Cambridge', '[슈퍼] 테스코 익스프레스.', '[Supermarket] Tesco Express.', { reviewCount: 1200 }),
  place('cambridge-grocery-4', 'cambridge', 'grocery', 'Mill Road grocery stores', 4.4, 'Mill Road, Cambridge', '[식료품점] 밀로드 다국적 식료품점.', '[Grocery] Mill Road international groceries.', { reviewCount: 900 }),
  place('liverpool-grocery-2', 'liverpool', 'grocery', 'Tesco Extra Liverpool', 4.0, 'Liverpool', '[대형마트] 테스코 엑스트라.', '[Hypermarket] Tesco Extra.', { reviewCount: 2100 }),
  place('liverpool-grocery-3', 'liverpool', 'grocery', 'Marks & Spencer Foodhall', 4.2, 'Liverpool', '[슈퍼] M&S 푸드홀.', '[Supermarket] M&S Foodhall.', { reviewCount: 1400 }),
  place('liverpool-grocery-4', 'liverpool', 'grocery', 'Great Homer Street Market groceries', 4.2, 'Liverpool', '[식료품점] 마켓·식료품.', '[Grocery] Market groceries.', { reviewCount: 800 }),
  place('brighton-grocery-2', 'brighton', 'grocery', 'Waitrose Brighton', 4.3, 'Brighton', '[대형마트] 웨이트로즈.', '[Hypermarket] Waitrose.', { reviewCount: 1700 }),
  place('brighton-grocery-3', 'brighton', 'grocery', 'Sainsbury\'s Brighton', 4.1, 'Brighton', '[슈퍼] 세인즈버리.', '[Supermarket] Sainsbury\'s.', { reviewCount: 1500 }),
  place('brighton-grocery-4', 'brighton', 'grocery', 'Infinity Foods / organic groceries', 4.5, 'Brighton', '[식료품점] 유기농·헬스 식료품.', '[Grocery] Organic health groceries.', { reviewCount: 2100 }),
  place('york-grocery-2', 'york', 'grocery', 'Sainsbury\'s York', 4.1, 'York', '[대형마트] 세인즈버리.', '[Hypermarket] Sainsbury\'s.', { reviewCount: 1300 }),
  place('york-grocery-3', 'york', 'grocery', 'Marks & Spencer Foodhall', 4.2, 'York', '[슈퍼] M&S 푸드홀.', '[Supermarket] M&S Foodhall.', { reviewCount: 1100 }),
  place('york-grocery-4', 'york', 'grocery', 'Hairy Fig / deli groceries', 4.4, 'York', '[식료품점] 델리·특산 식료품.', '[Grocery] Deli and speciality groceries.', { reviewCount: 900 }),
  place('bristol-grocery-2', 'bristol', 'grocery', 'Waitrose Clifton / Bristol', 4.3, 'Bristol', '[대형마트] 웨이트로즈.', '[Hypermarket] Waitrose.', { reviewCount: 1600 }),
  place('bristol-grocery-3', 'bristol', 'grocery', 'Tesco Extra Bristol', 4.0, 'Bristol', '[슈퍼] 테스코 엑스트라.', '[Supermarket] Tesco Extra.', { reviewCount: 2000 }),
  place('bristol-grocery-4', 'bristol', 'grocery', 'Harvest / independent groceries', 4.3, 'Bristol', '[식료품점] 독립 식료품점.', '[Grocery] Independent groceries.', { reviewCount: 700 }),
  place('amsterdam-grocery-2', 'amsterdam', 'grocery', 'Albert Heijn XL', 4.2, 'Amsterdam', '[대형마트] 알베르트 헤인 XL.', '[Hypermarket] Albert Heijn XL.', { reviewCount: 5400 }),
  place('amsterdam-grocery-3', 'amsterdam', 'grocery', 'Jumbo / city supermarket', 4.1, 'Amsterdam', '[슈퍼] 줌보 슈퍼마켓.', '[Supermarket] Jumbo supermarket.', { reviewCount: 3200 }),
  place('amsterdam-grocery-4', 'amsterdam', 'grocery', 'Marqt / specialty groceries', 4.3, 'Amsterdam', '[식료품점] 마르크트 프리미엄 식료품.', '[Grocery] Marqt specialty groceries.', { reviewCount: 2100 }),
  place('rotterdam-grocery-2', 'rotterdam', 'grocery', 'Albert Heijn XL Rotterdam', 4.2, 'Rotterdam', '[대형마트] 알베르트 헤인 XL.', '[Hypermarket] Albert Heijn XL.', { reviewCount: 2800 }),
  place('rotterdam-grocery-3', 'rotterdam', 'grocery', 'Jumbo Rotterdam', 4.1, 'Rotterdam', '[슈퍼] 줌보.', '[Supermarket] Jumbo.', { reviewCount: 2200 }),
  place('rotterdam-grocery-4', 'rotterdam', 'grocery', 'Asian grocery stores (Chinatown)', 4.3, 'Rotterdam', '[식료품점] 아시안 식료품점.', '[Grocery] Asian grocery stores.', { reviewCount: 1200 }),
  place('the-hague-grocery-2', 'the-hague', 'grocery', 'Albert Heijn XL The Hague', 4.2, 'The Hague', '[대형마트] 알베르트 헤인 XL.', '[Hypermarket] Albert Heijn XL.', { reviewCount: 2100 }),
  place('the-hague-grocery-3', 'the-hague', 'grocery', 'Jumbo / Plus supermarket', 4.1, 'The Hague', '[슈퍼] 줌보·플러스.', '[Supermarket] Jumbo and Plus.', { reviewCount: 1600 }),
  place('the-hague-grocery-4', 'the-hague', 'grocery', 'International grocery shops', 4.3, 'The Hague', '[식료품점] 다국적 식료품점.', '[Grocery] International grocery shops.', { reviewCount: 900 }),
  place('utrecht-grocery-2', 'utrecht', 'grocery', 'Albert Heijn XL Utrecht', 4.2, 'Utrecht', '[대형마트] 알베르트 헤인 XL.', '[Hypermarket] Albert Heijn XL.', { reviewCount: 2400 }),
  place('utrecht-grocery-3', 'utrecht', 'grocery', 'Jumbo Utrecht', 4.1, 'Utrecht', '[슈퍼] 줌보.', '[Supermarket] Jumbo.', { reviewCount: 1800 }),
  place('utrecht-grocery-4', 'utrecht', 'grocery', 'Specialty cheese & grocery shops', 4.4, 'Utrecht', '[식료품점] 치즈·특산 식료품.', '[Grocery] Cheese and specialty groceries.', { reviewCount: 800 }),
  place('haarlem-grocery-2', 'haarlem', 'grocery', 'Albert Heijn Haarlem', 4.2, 'Haarlem', '[대형마트] 알베르트 헤인.', '[Hypermarket] Albert Heijn.', { reviewCount: 1400 }),
  place('haarlem-grocery-3', 'haarlem', 'grocery', 'Jumbo Haarlem', 4.1, 'Haarlem', '[슈퍼] 줌보.', '[Supermarket] Jumbo.', { reviewCount: 1100 }),
  place('haarlem-grocery-4', 'haarlem', 'grocery', 'Local deli groceries', 4.3, 'Haarlem', '[식료품점] 로컬 델리 식료품.', '[Grocery] Local deli groceries.', { reviewCount: 600 }),
  place('delft-grocery-2', 'delft', 'grocery', 'Albert Heijn Delft', 4.2, 'Delft', '[대형마트] 알베르트 헤인.', '[Hypermarket] Albert Heijn.', { reviewCount: 1000 }),
  place('delft-grocery-3', 'delft', 'grocery', 'Jumbo Delft', 4.1, 'Delft', '[슈퍼] 줌보.', '[Supermarket] Jumbo.', { reviewCount: 850 }),
  place('delft-grocery-4', 'delft', 'grocery', 'Local grocery & cheese shops', 4.3, 'Delft', '[식료품점] 로컬 식료품·치즈점.', '[Grocery] Local grocery and cheese shops.', { reviewCount: 500 }),
  place('maastricht-grocery-2', 'maastricht', 'grocery', 'Albert Heijn Maastricht', 4.2, 'Maastricht', '[대형마트] 알베르트 헤인.', '[Hypermarket] Albert Heijn.', { reviewCount: 1200 }),
  place('maastricht-grocery-3', 'maastricht', 'grocery', 'Jumbo Maastricht', 4.1, 'Maastricht', '[슈퍼] 줌보.', '[Supermarket] Jumbo.', { reviewCount: 1000 }),
  place('maastricht-grocery-4', 'maastricht', 'grocery', 'Local specialty groceries', 4.3, 'Maastricht', '[식료품점] 로컬 특산 식료품.', '[Grocery] Local specialty groceries.', { reviewCount: 550 }),
  place('giethoorn-grocery-2', 'giethoorn', 'grocery', 'Spar / local supermarket', 4.1, 'Giethoorn area', '[대형마트] 스파·로컬 슈퍼.', '[Hypermarket] Spar local supermarket.', { reviewCount: 400 }),
  place('giethoorn-grocery-3', 'giethoorn', 'grocery', 'Farm shop groceries', 4.3, 'Giethoorn', '[슈퍼] 농장 식료품점.', '[Supermarket] Farm shop groceries.', { reviewCount: 350 }),
  place('giethoorn-grocery-4', 'giethoorn', 'grocery', 'Zwolle supermarket day trip', 4.2, 'Zwolle', '[식료품점] 즈볼러 대형 식료품.', '[Grocery] Zwolle large groceries.', { reviewCount: 600 }),
  place('luxembourg-city-grocery-2', 'luxembourg-city', 'grocery', 'Auchan Kirchberg', 4.2, 'Kirchberg', '[대형마트] 오샹 하이퍼마켓.', '[Hypermarket] Auchan hypermarket.', { reviewCount: 2800 }),
  place('luxembourg-city-grocery-3', 'luxembourg-city', 'grocery', 'Cactus / Delhaize supermarket', 4.1, 'Luxembourg City', '[슈퍼] 칵투스·델하이즈.', '[Supermarket] Cactus and Delhaize.', { reviewCount: 1900 }),
  place('luxembourg-city-grocery-4', 'luxembourg-city', 'grocery', 'Asian / specialty grocery shops', 4.3, 'Luxembourg City', '[식료품점] 아시안·특산 식료품점.', '[Grocery] Asian and specialty groceries.', { reviewCount: 800 }),
  place('vianden-grocery-2', 'vianden', 'grocery', 'Cactus / local supermarket', 4.1, 'Vianden area', '[대형마트] 로컬 슈퍼마켓.', '[Hypermarket] Local supermarket.', { reviewCount: 280 }),
  place('vianden-grocery-3', 'vianden', 'grocery', 'Village grocery store', 4.2, 'Vianden', '[슈퍼] 마을 식료품점.', '[Supermarket] Village grocery store.', { reviewCount: 220 }),
  place('vianden-grocery-4', 'vianden', 'grocery', 'Diekirch hypermarket day trip', 4.1, 'Diekirch', '[식료품점] 디키르히 대형마트.', '[Grocery] Diekirch hypermarket.', { reviewCount: 350 }),
  place('echternach-grocery-2', 'echternach', 'grocery', 'Cactus Echternach', 4.1, 'Echternach', '[대형마트] 칵투스 슈퍼.', '[Hypermarket] Cactus supermarket.', { reviewCount: 300 }),
  place('echternach-grocery-3', 'echternach', 'grocery', 'Local grocery store', 4.2, 'Echternach', '[슈퍼] 로컬 식료품점.', '[Supermarket] Local grocery store.', { reviewCount: 240 }),
  place('echternach-grocery-4', 'echternach', 'grocery', 'Trier supermarket day trip', 4.2, 'Trier', '[식료품점] 트리어 대형마트.', '[Grocery] Trier hypermarket day trip.', { reviewCount: 500 }),
  place('remich-grocery-2', 'remich', 'grocery', 'Cactus / local supermarket', 4.1, 'Remich area', '[대형마트] 로컬 슈퍼.', '[Hypermarket] Local supermarket.', { reviewCount: 260 }),
  place('remich-grocery-3', 'remich', 'grocery', 'Wine & grocery specialty', 4.3, 'Remich', '[슈퍼] 와인·식료품 특산.', '[Supermarket] Wine and grocery specialty.', { reviewCount: 320 }),
  place('remich-grocery-4', 'remich', 'grocery', 'Luxembourg City Auchan day trip', 4.2, 'Kirchberg', '[식료품점] 수도 오샹 데이트립.', '[Grocery] Capital Auchan day trip.', { reviewCount: 600 }),
  place('brussels-grocery-2', 'brussels', 'grocery', 'Carrefour / Delhaize hypermarket', 4.1, 'Brussels', '[대형마트] 카르푸·델하이즈.', '[Hypermarket] Carrefour and Delhaize.', { reviewCount: 3600 }),
  place('brussels-grocery-3', 'brussels', 'grocery', 'Bio-Planet / organic supermarket', 4.3, 'Brussels', '[슈퍼] 바이오플래닛 유기농.', '[Supermarket] Bio-Planet organic.', { reviewCount: 1800 }),
  place('brussels-grocery-4', 'brussels', 'grocery', 'Matongé / African-Asian groceries', 4.4, 'Brussels', '[식료품점] 다국적 식료품 거리.', '[Grocery] International grocery streets.', { reviewCount: 2100 }),
  place('bruges-grocery-2', 'bruges', 'grocery', 'Delhaize / Carrefour Bruges', 4.1, 'Bruges', '[대형마트] 델하이즈·카르푸.', '[Hypermarket] Delhaize and Carrefour.', { reviewCount: 1400 }),
  place('bruges-grocery-3', 'bruges', 'grocery', 'Proxy Delhaize centre', 4.1, 'Bruges', '[슈퍼] 센터 슈퍼.', '[Supermarket] Centre supermarket.', { reviewCount: 900 }),
  place('bruges-grocery-4', 'bruges', 'grocery', 'Chocolate & specialty grocery shops', 4.4, 'Bruges', '[식료품점] 초콜릿·특산 식료품.', '[Grocery] Chocolate and specialty groceries.', { reviewCount: 1600 }),
  place('ghent-grocery-2', 'ghent', 'grocery', 'Carrefour / Delhaize Ghent', 4.1, 'Ghent', '[대형마트] 카르푸·델하이즈.', '[Hypermarket] Carrefour and Delhaize.', { reviewCount: 1600 }),
  place('ghent-grocery-3', 'ghent', 'grocery', 'Bio-Planet Ghent', 4.3, 'Ghent', '[슈퍼] 바이오플래닛.', '[Supermarket] Bio-Planet.', { reviewCount: 900 }),
  place('ghent-grocery-4', 'ghent', 'grocery', 'Local market groceries', 4.3, 'Ghent', '[식료품점] 로컬 마켓 식료품.', '[Grocery] Local market groceries.', { reviewCount: 1100 }),
  place('antwerp-grocery-2', 'antwerp', 'grocery', 'Carrefour / Delhaize Antwerp', 4.1, 'Antwerp', '[대형마트] 카르푸·델하이즈.', '[Hypermarket] Carrefour and Delhaize.', { reviewCount: 2200 }),
  place('antwerp-grocery-3', 'antwerp', 'grocery', 'Bio-Planet Antwerp', 4.3, 'Antwerp', '[슈퍼] 바이오플래닛.', '[Supermarket] Bio-Planet.', { reviewCount: 1000 }),
  place('antwerp-grocery-4', 'antwerp', 'grocery', 'Exotic Market groceries', 4.4, 'Antwerp', '[식료품점] 엑조틱 마켓 식료품.', '[Grocery] Exotic Market groceries.', { reviewCount: 1800 }),
  place('leuven-grocery-2', 'leuven', 'grocery', 'Carrefour / Delhaize Leuven', 4.1, 'Leuven', '[대형마트] 카르푸·델하이즈.', '[Hypermarket] Carrefour and Delhaize.', { reviewCount: 1200 }),
  place('leuven-grocery-3', 'leuven', 'grocery', 'Colruyt Leuven', 4.1, 'Leuven', '[슈퍼] 콜라위트.', '[Supermarket] Colruyt.', { reviewCount: 1000 }),
  place('leuven-grocery-4', 'leuven', 'grocery', 'Student-area grocery shops', 4.2, 'Leuven', '[식료품점] 학생가 식료품점.', '[Grocery] Student-area grocery shops.', { reviewCount: 700 }),
  place('dinant-grocery-2', 'dinant', 'grocery', 'Carrefour Express / local supermarket', 4.1, 'Dinant', '[대형마트] 로컬 슈퍼마켓.', '[Hypermarket] Local supermarket.', { reviewCount: 300 }),
  place('dinant-grocery-3', 'dinant', 'grocery', 'Village grocery store', 4.2, 'Dinant', '[슈퍼] 마을 식료품점.', '[Supermarket] Village grocery store.', { reviewCount: 250 }),
  place('dinant-grocery-4', 'dinant', 'grocery', 'Namur hypermarket day trip', 4.2, 'Namur', '[식료품점] 나뮈르 대형마트.', '[Grocery] Namur hypermarket.', { reviewCount: 500 }),
  place('oslo-grocery-2', 'oslo', 'grocery', 'Meny / Coop Mega', 4.2, 'Oslo', '[대형마트] 메니·쿱 메가.', '[Hypermarket] Meny and Coop Mega.', { reviewCount: 2800 }),
  place('oslo-grocery-3', 'oslo', 'grocery', 'Rema 1000 / Kiwi', 4.0, 'Oslo', '[슈퍼] 레마·키위.', '[Supermarket] Rema 1000 and Kiwi.', { reviewCount: 3200 }),
  place('oslo-grocery-4', 'oslo', 'grocery', 'Mathallen specialty groceries', 4.5, 'Oslo', '[식료품점] 마탈렌 특산 식료품.', '[Grocery] Mathallen specialty groceries.', { reviewCount: 4100 }),
  place('bergen-grocery-2', 'bergen', 'grocery', 'Meny Bergen', 4.2, 'Bergen', '[대형마트] 메니.', '[Hypermarket] Meny.', { reviewCount: 1400 }),
  place('bergen-grocery-3', 'bergen', 'grocery', 'Rema 1000 / Kiwi Bergen', 4.0, 'Bergen', '[슈퍼] 레마·키위.', '[Supermarket] Rema and Kiwi.', { reviewCount: 1600 }),
  place('bergen-grocery-4', 'bergen', 'grocery', 'Fish Market grocery stalls', 4.3, 'Bergen', '[식료품점] 생선시장 식료품 스톨.', '[Grocery] Fish Market grocery stalls.', { reviewCount: 2800 }),
  place('tromso-grocery-2', 'tromso', 'grocery', 'Coop Extra / Meny Tromsø', 4.1, 'Tromsø', '[대형마트] 쿱·메니.', '[Hypermarket] Coop and Meny.', { reviewCount: 900 }),
  place('tromso-grocery-3', 'tromso', 'grocery', 'Rema 1000 Tromsø', 4.0, 'Tromsø', '[슈퍼] 레마 1000.', '[Supermarket] Rema 1000.', { reviewCount: 800 }),
  place('tromso-grocery-4', 'tromso', 'grocery', 'Local Arctic specialty groceries', 4.2, 'Tromsø', '[식료품점] 북극 특산 식료품.', '[Grocery] Arctic specialty groceries.', { reviewCount: 400 }),
  place('stavanger-grocery-2', 'stavanger', 'grocery', 'Meny / Coop Mega Stavanger', 4.1, 'Stavanger', '[대형마트] 메니·쿱.', '[Hypermarket] Meny and Coop.', { reviewCount: 1100 }),
  place('stavanger-grocery-3', 'stavanger', 'grocery', 'Rema 1000 Stavanger', 4.0, 'Stavanger', '[슈퍼] 레마 1000.', '[Supermarket] Rema 1000.', { reviewCount: 900 }),
  place('stavanger-grocery-4', 'stavanger', 'grocery', 'Local seafood grocery shops', 4.3, 'Stavanger', '[식료품점] 해산물 식료품점.', '[Grocery] Seafood grocery shops.', { reviewCount: 600 }),
  place('trondheim-grocery-2', 'trondheim', 'grocery', 'Meny / Coop Extra Trondheim', 4.1, 'Trondheim', '[대형마트] 메니·쿱.', '[Hypermarket] Meny and Coop.', { reviewCount: 1000 }),
  place('trondheim-grocery-3', 'trondheim', 'grocery', 'Rema 1000 Trondheim', 4.0, 'Trondheim', '[슈퍼] 레마 1000.', '[Supermarket] Rema 1000.', { reviewCount: 850 }),
  place('trondheim-grocery-4', 'trondheim', 'grocery', 'Ravnkloa grocery stalls', 4.3, 'Trondheim', '[식료품점] 라븐클로아 식료품.', '[Grocery] Ravnkloa grocery stalls.', { reviewCount: 700 }),
  place('alesund-grocery-2', 'alesund', 'grocery', 'Coop Extra / Meny Ålesund', 4.1, 'Ålesund', '[대형마트] 쿱·메니.', '[Hypermarket] Coop and Meny.', { reviewCount: 700 }),
  place('alesund-grocery-3', 'alesund', 'grocery', 'Rema 1000 Ålesund', 4.0, 'Ålesund', '[슈퍼] 레마 1000.', '[Supermarket] Rema 1000.', { reviewCount: 600 }),
  place('alesund-grocery-4', 'alesund', 'grocery', 'Local seafood groceries', 4.3, 'Ålesund', '[식료품점] 로컬 해산물 식료품.', '[Grocery] Local seafood groceries.', { reviewCount: 400 }),
  place('flam-grocery-2', 'flam', 'grocery', 'Spar Flåm / local supermarket', 4.1, 'Flåm', '[대형마트] 스파 로컬 슈퍼.', '[Hypermarket] Spar local supermarket.', { reviewCount: 450 }),
  place('flam-grocery-3', 'flam', 'grocery', 'Picnic grocery supplies', 4.2, 'Flåm', '[슈퍼] 피크닉·여행용 식료품.', '[Supermarket] Picnic travel groceries.', { reviewCount: 350 }),
  place('flam-grocery-4', 'flam', 'grocery', 'Aurland / regional grocery', 4.1, 'Aurland', '[식료품점] 권역 식료품점.', '[Grocery] Regional grocery store.', { reviewCount: 300 }),
  place('helsinki-grocery-2', 'helsinki', 'grocery', 'Prisma / K-Citymarket', 4.2, 'Helsinki', '[대형마트] 프리스마·K시티마켓.', '[Hypermarket] Prisma and K-Citymarket.', { reviewCount: 4200 }),
  place('helsinki-grocery-3', 'helsinki', 'grocery', 'S-market / K-Market', 4.1, 'Helsinki', '[슈퍼] S마켓·K마켓.', '[Supermarket] S-market and K-Market.', { reviewCount: 3600 }),
  place('helsinki-grocery-4', 'helsinki', 'grocery', 'Hakaniemi Market Hall groceries', 4.4, 'Helsinki', '[식료품점] 하카니에미 마켓홀.', '[Grocery] Hakaniemi Market Hall.', { reviewCount: 2800 }),
  place('turku-grocery-2', 'turku', 'grocery', 'Prisma Turku', 4.2, 'Turku', '[대형마트] 프리스마.', '[Hypermarket] Prisma.', { reviewCount: 1600 }),
  place('turku-grocery-3', 'turku', 'grocery', 'S-market Turku', 4.1, 'Turku', '[슈퍼] S마켓.', '[Supermarket] S-market.', { reviewCount: 1200 }),
  place('turku-grocery-4', 'turku', 'grocery', 'Market Hall specialty groceries', 4.4, 'Turku', '[식료품점] 마켓홀 특산 식료품.', '[Grocery] Market Hall specialty groceries.', { reviewCount: 1100 }),
  place('tampere-grocery-2', 'tampere', 'grocery', 'Prisma / Citymarket Tampere', 4.2, 'Tampere', '[대형마트] 프리스마·시티마켓.', '[Hypermarket] Prisma and Citymarket.', { reviewCount: 1900 }),
  place('tampere-grocery-3', 'tampere', 'grocery', 'S-market Tampere', 4.1, 'Tampere', '[슈퍼] S마켓.', '[Supermarket] S-market.', { reviewCount: 1400 }),
  place('tampere-grocery-4', 'tampere', 'grocery', 'Kauppahalli specialty groceries', 4.4, 'Tampere', '[식료품점] 카우파할리 특산.', '[Grocery] Kauppahalli specialty.', { reviewCount: 1300 }),
  place('rovaniemi-grocery-2', 'rovaniemi', 'grocery', 'Prisma Rovaniemi', 4.1, 'Rovaniemi', '[대형마트] 프리스마.', '[Hypermarket] Prisma.', { reviewCount: 1100 }),
  place('rovaniemi-grocery-3', 'rovaniemi', 'grocery', 'S-market / K-Market Rovaniemi', 4.0, 'Rovaniemi', '[슈퍼] S마켓·K마켓.', '[Supermarket] S-market and K-Market.', { reviewCount: 900 }),
  place('rovaniemi-grocery-4', 'rovaniemi', 'grocery', 'Local Lapland specialty groceries', 4.2, 'Rovaniemi', '[식료품점] 라플란드 특산 식료품.', '[Grocery] Lapland specialty groceries.', { reviewCount: 500 }),
  place('porvoo-grocery-2', 'porvoo', 'grocery', 'S-market / K-Supermarket Porvoo', 4.1, 'Porvoo', '[대형마트] S마켓·K슈퍼.', '[Hypermarket] S-market and K-Supermarket.', { reviewCount: 800 }),
  place('porvoo-grocery-3', 'porvoo', 'grocery', 'Local grocery store', 4.2, 'Porvoo', '[슈퍼] 로컬 식료품점.', '[Supermarket] Local grocery store.', { reviewCount: 500 }),
  place('porvoo-grocery-4', 'porvoo', 'grocery', 'Old Porvoo specialty food shops', 4.4, 'Porvoo', '[식료품점] 구시가지 특산 식료품.', '[Grocery] Old town specialty food shops.', { reviewCount: 700 }),
  place('stockholm-grocery-2', 'stockholm', 'grocery', 'ICA Maxi / Coop Forum', 4.2, 'Stockholm', '[대형마트] ICA 맥시·쿱 포럼.', '[Hypermarket] ICA Maxi and Coop Forum.', { reviewCount: 3800 }),
  place('stockholm-grocery-3', 'stockholm', 'grocery', 'Hemköp / Willys', 4.1, 'Stockholm', '[슈퍼] 헴쾨프·빌리스.', '[Supermarket] Hemköp and Willys.', { reviewCount: 2900 }),
  place('stockholm-grocery-4', 'stockholm', 'grocery', 'Östermalms Saluhall groceries', 4.5, 'Stockholm', '[식료품점] 외스테르말름 살루홀.', '[Grocery] Östermalms Saluhall.', { reviewCount: 4500 }),
  place('gothenburg-grocery-2', 'gothenburg', 'grocery', 'ICA Maxi / Coop Gothenburg', 4.2, 'Gothenburg', '[대형마트] ICA·쿱.', '[Hypermarket] ICA and Coop.', { reviewCount: 2400 }),
  place('gothenburg-grocery-3', 'gothenburg', 'grocery', 'Hemköp / Willys Gothenburg', 4.1, 'Gothenburg', '[슈퍼] 헴쾨프·빌리스.', '[Supermarket] Hemköp and Willys.', { reviewCount: 1800 }),
  place('gothenburg-grocery-4', 'gothenburg', 'grocery', 'Saluhallen specialty groceries', 4.4, 'Gothenburg', '[식료품점] 살루할렌 특산.', '[Grocery] Saluhallen specialty.', { reviewCount: 2100 }),
  place('malmo-grocery-2', 'malmo', 'grocery', 'ICA Maxi / Coop Malmö', 4.2, 'Malmö', '[대형마트] ICA·쿱.', '[Hypermarket] ICA and Coop.', { reviewCount: 2000 }),
  place('malmo-grocery-3', 'malmo', 'grocery', 'Hemköp Malmö', 4.1, 'Malmö', '[슈퍼] 헴쾨프.', '[Supermarket] Hemköp.', { reviewCount: 1400 }),
  place('malmo-grocery-4', 'malmo', 'grocery', 'Möllevången grocery shops', 4.4, 'Malmö', '[식료품점] 묄레방엔 다국적 식료품.', '[Grocery] Möllevången international groceries.', { reviewCount: 1600 }),
  place('uppsala-grocery-2', 'uppsala', 'grocery', 'ICA Maxi Uppsala', 4.2, 'Uppsala', '[대형마트] ICA 맥시.', '[Hypermarket] ICA Maxi.', { reviewCount: 1300 }),
  place('uppsala-grocery-3', 'uppsala', 'grocery', 'Coop / Hemköp Uppsala', 4.1, 'Uppsala', '[슈퍼] 쿱·헴쾨프.', '[Supermarket] Coop and Hemköp.', { reviewCount: 1000 }),
  place('uppsala-grocery-4', 'uppsala', 'grocery', 'Saluhall specialty groceries', 4.3, 'Uppsala', '[식료품점] 살루홀 특산.', '[Grocery] Saluhall specialty.', { reviewCount: 700 }),
  place('kiruna-grocery-2', 'kiruna', 'grocery', 'ICA / Coop Kiruna', 4.1, 'Kiruna', '[대형마트] ICA·쿱.', '[Hypermarket] ICA and Coop.', { reviewCount: 500 }),
  place('kiruna-grocery-3', 'kiruna', 'grocery', 'Local supermarket', 4.0, 'Kiruna', '[슈퍼] 로컬 슈퍼.', '[Supermarket] Local supermarket.', { reviewCount: 400 }),
  place('kiruna-grocery-4', 'kiruna', 'grocery', 'Arctic specialty food shops', 4.2, 'Kiruna', '[식료품점] 북극 특산 식료품.', '[Grocery] Arctic specialty food shops.', { reviewCount: 280 }),
  place('copenhagen-grocery-2', 'copenhagen', 'grocery', 'Føtex / Bilka', 4.2, 'Copenhagen', '[대형마트] 푀텍스·빌카.', '[Hypermarket] Føtex and Bilka.', { reviewCount: 4100 }),
  place('copenhagen-grocery-3', 'copenhagen', 'grocery', 'Netto / Rema 1000', 4.0, 'Copenhagen', '[슈퍼] 네토·레마.', '[Supermarket] Netto and Rema 1000.', { reviewCount: 3600 }),
  place('copenhagen-grocery-4', 'copenhagen', 'grocery', 'Torvehallerne specialty groceries', 4.5, 'Copenhagen', '[식료품점] 토르베할렌 특산.', '[Grocery] Torvehallerne specialty.', { reviewCount: 5200 }),
  place('aarhus-grocery-2', 'aarhus', 'grocery', 'Føtex / Bilka Aarhus', 4.2, 'Aarhus', '[대형마트] 푀텍스·빌카.', '[Hypermarket] Føtex and Bilka.', { reviewCount: 2200 }),
  place('aarhus-grocery-3', 'aarhus', 'grocery', 'Netto / Rema Aarhus', 4.0, 'Aarhus', '[슈퍼] 네토·레마.', '[Supermarket] Netto and Rema.', { reviewCount: 1600 }),
  place('aarhus-grocery-4', 'aarhus', 'grocery', 'Local specialty grocery shops', 4.3, 'Aarhus', '[식료품점] 로컬 특산 식료품.', '[Grocery] Local specialty groceries.', { reviewCount: 800 }),
  place('odense-grocery-2', 'odense', 'grocery', 'Føtex / Bilka Odense', 4.1, 'Odense', '[대형마트] 푀텍스·빌카.', '[Hypermarket] Føtex and Bilka.', { reviewCount: 1400 }),
  place('odense-grocery-3', 'odense', 'grocery', 'Netto Odense', 4.0, 'Odense', '[슈퍼] 네토.', '[Supermarket] Netto.', { reviewCount: 1000 }),
  place('odense-grocery-4', 'odense', 'grocery', 'Local grocery & specialty shops', 4.2, 'Odense', '[식료품점] 로컬 식료품·특산.', '[Grocery] Local grocery and specialty.', { reviewCount: 600 }),
  place('aalborg-grocery-2', 'aalborg', 'grocery', 'Føtex / Bilka Aalborg', 4.1, 'Aalborg', '[대형마트] 푀텍스·빌카.', '[Hypermarket] Føtex and Bilka.', { reviewCount: 1300 }),
  place('aalborg-grocery-3', 'aalborg', 'grocery', 'Netto / Rema Aalborg', 4.0, 'Aalborg', '[슈퍼] 네토·레마.', '[Supermarket] Netto and Rema.', { reviewCount: 950 }),
  place('aalborg-grocery-4', 'aalborg', 'grocery', 'Local specialty groceries', 4.2, 'Aalborg', '[식료품점] 로컬 특산 식료품.', '[Grocery] Local specialty groceries.', { reviewCount: 500 }),
  place('roskilde-grocery-2', 'roskilde', 'grocery', 'Føtex / SuperBrugsen Roskilde', 4.1, 'Roskilde', '[대형마트] 푀텍스·슈퍼브룩센.', '[Hypermarket] Føtex and SuperBrugsen.', { reviewCount: 900 }),
  place('roskilde-grocery-3', 'roskilde', 'grocery', 'Netto Roskilde', 4.0, 'Roskilde', '[슈퍼] 네토.', '[Supermarket] Netto.', { reviewCount: 700 }),
  place('roskilde-grocery-4', 'roskilde', 'grocery', 'Local grocery shops', 4.2, 'Roskilde', '[식료품점] 로컬 식료품점.', '[Grocery] Local grocery shops.', { reviewCount: 400 }),

  // —— at / hu / cz ——
  place('vienna-grocery-1', 'vienna', 'grocery', 'Naschmarkt', 4.5, 'Vienna', '[식료품] 나슈마르크트 식료품 마켓.', '[Grocery] Naschmarkt food market.', { reviewCount: 22000 }),
  place('vienna-grocery-2', 'vienna', 'grocery', 'Billa Plus / Spar hypermarket', 4.1, 'Vienna', '[대형마트] 빌라·스파.', '[Hypermarket] Billa and Spar.', { reviewCount: 4800 }),
  place('vienna-grocery-3', 'vienna', 'grocery', 'Merkur / Hofer supermarket', 4.0, 'Vienna', '[슈퍼] 메르쿠르·호퍼.', '[Supermarket] Merkur and Hofer.', { reviewCount: 3600 }),
  place('vienna-grocery-4', 'vienna', 'grocery', 'Bio Company / organic groceries', 4.3, 'Vienna', '[식료품점] 유기농 식료품.', '[Grocery] Organic groceries.', { reviewCount: 1400 }),
  place('salzburg-grocery-1', 'salzburg', 'grocery', 'Grünmarkt', 4.4, 'Salzburg', '[식료품] 녹생시장.', '[Grocery] Green market.', { reviewCount: 2800 }),
  place('salzburg-grocery-2', 'salzburg', 'grocery', 'Spar / Billa Salzburg', 4.1, 'Salzburg', '[대형마트] 스파·빌라.', '[Hypermarket] Spar and Billa.', { reviewCount: 2100 }),
  place('salzburg-grocery-3', 'salzburg', 'grocery', 'Hofer supermarket', 4.0, 'Salzburg', '[슈퍼] 호퍼.', '[Supermarket] Hofer.', { reviewCount: 1600 }),
  place('salzburg-grocery-4', 'salzburg', 'grocery', 'Local deli groceries', 4.3, 'Salzburg', '[식료품점] 로컬 델리.', '[Grocery] Local delis.', { reviewCount: 800 }),
  place('innsbruck-grocery-1', 'innsbruck', 'grocery', 'Markthalle Innsbruck', 4.4, 'Innsbruck', '[식료품] 마켓홀.', '[Grocery] Market hall.', { reviewCount: 1900 }),
  place('innsbruck-grocery-2', 'innsbruck', 'grocery', 'MPreis / Spar', 4.1, 'Innsbruck', '[대형마트] M프라이스·스파.', '[Hypermarket] MPreis and Spar.', { reviewCount: 1500 }),
  place('innsbruck-grocery-3', 'innsbruck', 'grocery', 'Hofer Innsbruck', 4.0, 'Innsbruck', '[슈퍼] 호퍼.', '[Supermarket] Hofer.', { reviewCount: 1200 }),
  place('innsbruck-grocery-4', 'innsbruck', 'grocery', 'Local alpine specialty groceries', 4.3, 'Innsbruck', '[식료품점] 알파인 특산.', '[Grocery] Alpine specialties.', { reviewCount: 600 }),
  place('graz-grocery-1', 'graz', 'grocery', 'Kaiser-Josef-Markt', 4.4, 'Graz', '[식료품] 카이저 요제프 마켓.', '[Grocery] Kaiser Josef Market.', { reviewCount: 1600 }),
  place('graz-grocery-2', 'graz', 'grocery', 'Spar / Billa Graz', 4.1, 'Graz', '[대형마트] 스파·빌라.', '[Hypermarket] Spar and Billa.', { reviewCount: 1400 }),
  place('graz-grocery-3', 'graz', 'grocery', 'Hofer Graz', 4.0, 'Graz', '[슈퍼] 호퍼.', '[Supermarket] Hofer.', { reviewCount: 1100 }),
  place('graz-grocery-4', 'graz', 'grocery', 'Local Styrian groceries', 4.3, 'Graz', '[식료품점] 슈타이어마르크 특산.', '[Grocery] Styrian specialties.', { reviewCount: 700 }),
  place('hallstatt-grocery-1', 'hallstatt', 'grocery', 'Local grocery store', 4.2, 'Hallstatt', '[식료품] 마을 식료품점.', '[Grocery] Village grocery.', { reviewCount: 400 }),
  place('hallstatt-grocery-2', 'hallstatt', 'grocery', 'Spar / Billa nearby', 4.1, 'Hallstatt area', '[대형마트] 근교 슈퍼.', '[Hypermarket] Nearby supermarket.', { reviewCount: 500 }),
  place('hallstatt-grocery-3', 'hallstatt', 'grocery', 'Farm shop groceries', 4.3, 'Hallstatt', '[슈퍼] 농장 식료품.', '[Supermarket] Farm shop.', { reviewCount: 350 }),
  place('hallstatt-grocery-4', 'hallstatt', 'grocery', 'Salzburg grocery day trip', 4.2, 'Salzburg', '[식료품점] 잘츠부르크 대형마트.', '[Grocery] Salzburg hypermarket.', { reviewCount: 800 }),
  place('budapest-grocery-1', 'budapest', 'grocery', 'Great Market Hall', 4.5, 'Budapest', '[식료품] 중앙시장.', '[Grocery] Great Market Hall.', { reviewCount: 28000 }),
  place('budapest-grocery-2', 'budapest', 'grocery', 'Tesco Extra / Auchan', 4.1, 'Budapest', '[대형마트] 테스코·오샹.', '[Hypermarket] Tesco and Auchan.', { reviewCount: 5400 }),
  place('budapest-grocery-3', 'budapest', 'grocery', 'Spar / CBA supermarket', 4.0, 'Budapest', '[슈퍼] 스파·CBA.', '[Supermarket] Spar and CBA.', { reviewCount: 3200 }),
  place('budapest-grocery-4', 'budapest', 'grocery', 'Asian / specialty groceries', 4.3, 'Budapest', '[식료품점] 아시안·특산 식료품.', '[Grocery] Asian specialty groceries.', { reviewCount: 1800 }),
  place('debrecen-grocery-1', 'debrecen', 'grocery', 'Local market Debrecen', 4.3, 'Debrecen', '[식료품] 로컬 마켓.', '[Grocery] Local market.', { reviewCount: 900 }),
  place('debrecen-grocery-2', 'debrecen', 'grocery', 'Tesco / Auchan Debrecen', 4.1, 'Debrecen', '[대형마트] 테스코·오샹.', '[Hypermarket] Tesco and Auchan.', { reviewCount: 1600 }),
  place('debrecen-grocery-3', 'debrecen', 'grocery', 'Spar Debrecen', 4.0, 'Debrecen', '[슈퍼] 스파.', '[Supermarket] Spar.', { reviewCount: 1100 }),
  place('debrecen-grocery-4', 'debrecen', 'grocery', 'Specialty paprika & groceries', 4.3, 'Debrecen', '[식료품점] 파프리카·특산.', '[Grocery] Paprika specialties.', { reviewCount: 500 }),
  place('pecs-grocery-1', 'pecs', 'grocery', 'Local market Pécs', 4.3, 'Pécs', '[식료품] 로컬 마켓.', '[Grocery] Local market.', { reviewCount: 700 }),
  place('pecs-grocery-2', 'pecs', 'grocery', 'Tesco / Spar Pécs', 4.1, 'Pécs', '[대형마트] 테스코·스파.', '[Hypermarket] Tesco and Spar.', { reviewCount: 1200 }),
  place('pecs-grocery-3', 'pecs', 'grocery', 'CBA supermarket', 4.0, 'Pécs', '[슈퍼] CBA.', '[Supermarket] CBA.', { reviewCount: 800 }),
  place('pecs-grocery-4', 'pecs', 'grocery', 'Local wine & grocery shops', 4.3, 'Pécs', '[식료품점] 와인·식료품.', '[Grocery] Wine and groceries.', { reviewCount: 450 }),
  place('szeged-grocery-1', 'szeged', 'grocery', 'Szeged market hall', 4.3, 'Szeged', '[식료품] 마켓홀.', '[Grocery] Market hall.', { reviewCount: 800 }),
  place('szeged-grocery-2', 'szeged', 'grocery', 'Tesco / Auchan Szeged', 4.1, 'Szeged', '[대형마트] 테스코·오샹.', '[Hypermarket] Tesco and Auchan.', { reviewCount: 1300 }),
  place('szeged-grocery-3', 'szeged', 'grocery', 'Spar Szeged', 4.0, 'Szeged', '[슈퍼] 스파.', '[Supermarket] Spar.', { reviewCount: 900 }),
  place('szeged-grocery-4', 'szeged', 'grocery', 'Paprika specialty shops', 4.4, 'Szeged', '[식료품점] 파프리카 특산점.', '[Grocery] Paprika specialty shops.', { reviewCount: 600 }),
  place('eger-grocery-1', 'eger', 'grocery', 'Local market Eger', 4.3, 'Eger', '[식료품] 로컬 마켓.', '[Grocery] Local market.', { reviewCount: 500 }),
  place('eger-grocery-2', 'eger', 'grocery', 'Tesco / Spar Eger', 4.1, 'Eger', '[대형마트] 테스코·스파.', '[Hypermarket] Tesco and Spar.', { reviewCount: 900 }),
  place('eger-grocery-3', 'eger', 'grocery', 'CBA Eger', 4.0, 'Eger', '[슈퍼] CBA.', '[Supermarket] CBA.', { reviewCount: 600 }),
  place('eger-grocery-4', 'eger', 'grocery', 'Wine valley grocery & tasting shops', 4.3, 'Eger', '[식료품점] 와인·식료품.', '[Grocery] Wine and grocery shops.', { reviewCount: 700 }),
  place('prague-grocery-1', 'prague', 'grocery', 'Havelské tržiště / farmers markets', 4.4, 'Prague', '[식료품] 하벨 마켓·파머스.', '[Grocery] Havel market and farmers’ markets.', { reviewCount: 6200 }),
  place('prague-grocery-2', 'prague', 'grocery', 'Albert Hyper / Tesco', 4.1, 'Prague', '[대형마트] 알베르트·테스코.', '[Hypermarket] Albert and Tesco.', { reviewCount: 4800 }),
  place('prague-grocery-3', 'prague', 'grocery', 'Billa / Lidl supermarket', 4.0, 'Prague', '[슈퍼] 빌라·리들.', '[Supermarket] Billa and Lidl.', { reviewCount: 3600 }),
  place('prague-grocery-4', 'prague', 'grocery', 'Asian grocery shops (IP Pavlova area)', 4.3, 'Prague', '[식료품점] 아시안 식료품점.', '[Grocery] Asian grocery shops.', { reviewCount: 1600 }),
  place('brno-grocery-1', 'brno', 'grocery', 'Zelný trh groceries', 4.4, 'Brno', '[식료품] 젤니 트르흐.', '[Grocery] Cabbage Market.', { reviewCount: 2100 }),
  place('brno-grocery-2', 'brno', 'grocery', 'Albert / Tesco Brno', 4.1, 'Brno', '[대형마트] 알베르트·테스코.', '[Hypermarket] Albert and Tesco.', { reviewCount: 1900 }),
  place('brno-grocery-3', 'brno', 'grocery', 'Billa Brno', 4.0, 'Brno', '[슈퍼] 빌라.', '[Supermarket] Billa.', { reviewCount: 1400 }),
  place('brno-grocery-4', 'brno', 'grocery', 'Local specialty groceries', 4.3, 'Brno', '[식료품점] 로컬 특산.', '[Grocery] Local specialties.', { reviewCount: 700 }),
  place('cesky-krumlov-grocery-1', 'cesky-krumlov', 'grocery', 'Town grocery store', 4.2, 'Český Krumlov', '[식료품] 마을 식료품점.', '[Grocery] Town grocery.', { reviewCount: 500 }),
  place('cesky-krumlov-grocery-2', 'cesky-krumlov', 'grocery', 'Billa / Albert nearby', 4.1, 'Český Krumlov area', '[대형마트] 근교 슈퍼.', '[Hypermarket] Nearby supermarket.', { reviewCount: 600 }),
  place('cesky-krumlov-grocery-3', 'cesky-krumlov', 'grocery', 'Local deli groceries', 4.3, 'Český Krumlov', '[슈퍼] 로컬 델리.', '[Supermarket] Local deli.', { reviewCount: 400 }),
  place('cesky-krumlov-grocery-4', 'cesky-krumlov', 'grocery', 'České Budějovice hypermarket day trip', 4.2, 'České Budějovice', '[식료품점] 근교 대형마트.', '[Grocery] Nearby hypermarket.', { reviewCount: 700 }),
  place('karlovy-vary-grocery-1', 'karlovy-vary', 'grocery', 'Local spa-town market', 4.3, 'Karlovy Vary', '[식료품] 스파 타운 마켓.', '[Grocery] Spa-town market.', { reviewCount: 700 }),
  place('karlovy-vary-grocery-2', 'karlovy-vary', 'grocery', 'Albert / Billa Karlovy Vary', 4.1, 'Karlovy Vary', '[대형마트] 알베르트·빌라.', '[Hypermarket] Albert and Billa.', { reviewCount: 1100 }),
  place('karlovy-vary-grocery-3', 'karlovy-vary', 'grocery', 'Lidl Karlovy Vary', 4.0, 'Karlovy Vary', '[슈퍼] 리들.', '[Supermarket] Lidl.', { reviewCount: 800 }),
  place('karlovy-vary-grocery-4', 'karlovy-vary', 'grocery', 'Wafer & specialty grocery shops', 4.3, 'Karlovy Vary', '[식료품점] 웨이퍼·특산 식료품.', '[Grocery] Wafer specialty shops.', { reviewCount: 900 }),
  place('ceske-budejovice-grocery-1', 'ceske-budejovice', 'grocery', 'Local market České Budějovice', 4.3, 'České Budějovice', '[식료품] 로컬 마켓.', '[Grocery] Local market.', { reviewCount: 800 }),
  place('ceske-budejovice-grocery-2', 'ceske-budejovice', 'grocery', 'Albert / Tesco', 4.1, 'České Budějovice', '[대형마트] 알베르트·테스코.', '[Hypermarket] Albert and Tesco.', { reviewCount: 1300 }),
  place('ceske-budejovice-grocery-3', 'ceske-budejovice', 'grocery', 'Billa supermarket', 4.0, 'České Budějovice', '[슈퍼] 빌라.', '[Supermarket] Billa.', { reviewCount: 900 }),
  place('ceske-budejovice-grocery-4', 'ceske-budejovice', 'grocery', 'Beer & specialty groceries', 4.3, 'České Budějovice', '[식료품점] 맥주·특산 식료품.', '[Grocery] Beer specialty groceries.', { reviewCount: 600 }),
]
