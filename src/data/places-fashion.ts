import { place } from './placeFactory'
import type { Place } from '../types'

/** Fashion & outlet picks per city. */
export const placesFashion: Place[] = [
  // —— london ——
  place('london-fashion-1', 'london', 'fashion', 'Selfridges Oxford Street', 4.5, 'Oxford Street, London', '[패션] 플래그십 패션·럭셔리 백화점.', '[Fashion] Flagship fashion and luxury department store.', { reviewCount: 42000 }),
  place('london-fashion-2', 'london', 'fashion', 'Bicester Village', 4.4, 'Bicester, Oxfordshire', '[아울렛] 런던 근교 프리미엄 아울렛.', '[Outlet] Premium designer outlet near London.', { reviewCount: 28000 }),

  // —— edinburgh ——
  place('edinburgh-fashion-1', 'edinburgh', 'fashion', 'Multrees Walk / Harvey Nichols', 4.4, 'Multrees Walk, Edinburgh', '[패션] 하이엔드 패션 거리.', '[Fashion] High-end fashion street.', { reviewCount: 3200 }),
  place('edinburgh-fashion-2', 'edinburgh', 'fashion', 'Livingston Designer Outlet', 4.3, 'Livingston', '[아울렛] 스코틀랜드 대표 디자이너 아울렛.', '[Outlet] Scotland’s main designer outlet.', { reviewCount: 8600 }),

  // —— manchester ——
  place('manchester-fashion-1', 'manchester', 'fashion', 'Selfridges Exchange Square', 4.4, 'Exchange Square, Manchester', '[패션] 맨체스터 패션·라이프스타일 허브.', '[Fashion] Fashion and lifestyle hub.', { reviewCount: 12000 }),
  place('manchester-fashion-2', 'manchester', 'fashion', 'Cheshire Oaks Designer Outlet', 4.3, 'Ellesmere Port', '[아울렛] 북서부 대형 디자이너 아울렛.', '[Outlet] Large designer outlet in the North West.', { reviewCount: 19000 }),

  // —— bath ——
  place('bath-fashion-1', 'bath', 'fashion', 'SouthGate Bath', 4.3, 'SouthGate, Bath', '[패션] 센터 패션·하이스트리트.', '[Fashion] City-centre fashion high street.', { reviewCount: 2800 }),
  place('bath-fashion-2', 'bath', 'fashion', 'Clarks Village (Street)', 4.2, 'Street, Somerset', '[아울렛] 배스 근교 클래식 아울렛.', '[Outlet] Classic outlet village near Bath.', { reviewCount: 7400 }),

  // —— oxford ——
  place('oxford-fashion-1', 'oxford', 'fashion', 'Westgate Oxford', 4.3, 'Westgate, Oxford', '[패션] 현대 패션 쇼핑몰.', '[Fashion] Modern fashion shopping centre.', { reviewCount: 5200 }),
  place('oxford-fashion-2', 'oxford', 'fashion', 'Bicester Village', 4.4, 'Bicester', '[아울렛] 옥스퍼드 접근 쉬운 프리미엄 아울렛.', '[Outlet] Premium outlet easy from Oxford.', { reviewCount: 28000 }),

  // —— cambridge ——
  place('cambridge-fashion-1', 'cambridge', 'fashion', 'Grand Arcade', 4.3, 'St Andrew\'s St, Cambridge', '[패션] 시내 패션·브랜드 몰.', '[Fashion] City fashion and brand mall.', { reviewCount: 3100 }),
  place('cambridge-fashion-2', 'cambridge', 'fashion', 'Freeport Braintree (day trip)', 4.2, 'Braintree', '[아울렛] 캠브리지 권역 아울렛 데이트립.', '[Outlet] Outlet day trip from Cambridge.', { reviewCount: 6200 }),

  // —— liverpool ——
  place('liverpool-fashion-1', 'liverpool', 'fashion', 'Liverpool ONE', 4.4, 'Liverpool ONE', '[패션] 수변 패션·라이프스타일 몰.', '[Fashion] Waterfront fashion lifestyle mall.', { reviewCount: 15000 }),
  place('liverpool-fashion-2', 'liverpool', 'fashion', 'Freeport Fleetwood / Cheshire Oaks day trip', 4.2, 'North West', '[아울렛] 근교 아울렛 데이트립.', '[Outlet] Nearby outlet day trips.', { reviewCount: 5000 }),

  // —— brighton ——
  place('brighton-fashion-1', 'brighton', 'fashion', 'North Laine & Churchill Square', 4.4, 'Brighton', '[패션] 인디 패션·하이스트리트.', '[Fashion] Indie fashion and high street.', { reviewCount: 6400 }),
  place('brighton-fashion-2', 'brighton', 'fashion', 'McArthurGlen Ashford / Designer Outlet day trip', 4.2, 'Kent/Sussex', '[아울렛] 남부 아울렛 데이트립.', '[Outlet] Southern England outlet day trip.', { reviewCount: 4500 }),

  // —— york ——
  place('york-fashion-1', 'york', 'fashion', 'Coppergate Shopping Centre', 4.2, 'Coppergate, York', '[패션] 시내 패션·브랜드.', '[Fashion] City fashion and brands.', { reviewCount: 2100 }),
  place('york-fashion-2', 'york', 'fashion', 'McArthurGlen York Designer Outlet', 4.3, 'St Nicholas Ave, York', '[아울렛] 요크 디자이너 아울렛.', '[Outlet] York designer outlet.', { reviewCount: 9800 }),

  // —— bristol ——
  place('bristol-fashion-1', 'bristol', 'fashion', 'Cabot Circus', 4.3, 'Bond St, Bristol', '[패션] 브리스틀 대표 패션 몰.', '[Fashion] Bristol’s main fashion mall.', { reviewCount: 8700 }),
  place('bristol-fashion-2', 'bristol', 'fashion', 'McArthurGlen Bristol Swindon day trip', 4.2, 'Swindon area', '[아울렛] 근교 아울렛 옵션.', '[Outlet] Nearby outlet option.', { reviewCount: 7200 }),

  // —— amsterdam ——
  place('amsterdam-fashion-1', 'amsterdam', 'fashion', 'De Bijenkorf Amsterdam', 4.4, 'Dam Square, Amsterdam', '[패션] 네덜란드 대표 패션 백화점.', '[Fashion] Netherlands’ flagship fashion department store.', { reviewCount: 18000 }),
  place('amsterdam-fashion-2', 'amsterdam', 'fashion', 'Batavia Stad Fashion Outlet', 4.3, 'Lelystad', '[아울렛] 암스테르담 근교 패션 아울렛.', '[Outlet] Fashion outlet near Amsterdam.', { reviewCount: 12000 }),

  // —— rotterdam ——
  place('rotterdam-fashion-1', 'rotterdam', 'fashion', 'Koopgoot / Beurstraverse', 4.2, 'Coolsingel, Rotterdam', '[패션] 지하·센터 패션 쇼핑.', '[Fashion] Central fashion shopping arcade.', { reviewCount: 5400 }),
  place('rotterdam-fashion-2', 'rotterdam', 'fashion', 'Designer Outlet Roermond (day trip)', 4.4, 'Roermond', '[아울렛] 네덜란드 대표 대형 아울렛.', '[Outlet] Netherlands’ major designer outlet.', { reviewCount: 21000 }),

  // —— the-hague ——
  place('the-hague-fashion-1', 'the-hague', 'fashion', 'De Bijenkorf The Hague', 4.3, 'Wagenstraat, The Hague', '[패션] 헤이그 패션 백화점.', '[Fashion] Fashion department store in The Hague.', { reviewCount: 4200 }),
  place('the-hague-fashion-2', 'the-hague', 'fashion', 'Designer Outlet Roermond (day trip)', 4.4, 'Roermond', '[아울렛] 근교 프리미엄 아울렛.', '[Outlet] Nearby premium outlet.', { reviewCount: 21000 }),

  // —— utrecht ——
  place('utrecht-fashion-1', 'utrecht', 'fashion', 'Hoog Catharijne', 4.3, 'Utrecht Centraal', '[패션] 역세권 패션 쇼핑몰.', '[Fashion] Station-area fashion mall.', { reviewCount: 11000 }),
  place('utrecht-fashion-2', 'utrecht', 'fashion', 'Batavia Stad / Roermond day trip', 4.3, 'Netherlands', '[아울렛] 근교 아울렛 데이트립.', '[Outlet] Outlet day trips nearby.', { reviewCount: 8000 }),

  // —— haarlem ——
  place('haarlem-fashion-1', 'haarlem', 'fashion', 'Grote Houtstraat shopping street', 4.4, 'Haarlem', '[패션] 시내 패션 스트리트.', '[Fashion] City fashion street.', { reviewCount: 1800 }),
  place('haarlem-fashion-2', 'haarlem', 'fashion', 'Batavia Stad Fashion Outlet', 4.3, 'Lelystad', '[아울렛] 하를렘에서 접근 가능한 아울렛.', '[Outlet] Outlet accessible from Haarlem.', { reviewCount: 12000 }),

  // —— delft ——
  place('delft-fashion-1', 'delft', 'fashion', 'City centre boutiques (Markt)', 4.3, 'Markt, Delft', '[패션] 도심 부티크·패션.', '[Fashion] Centre boutiques and fashion.', { reviewCount: 1200 }),
  place('delft-fashion-2', 'delft', 'fashion', 'Designer Outlet Roermond (day trip)', 4.4, 'Roermond', '[아울렛] 근교 아울렛.', '[Outlet] Nearby outlet.', { reviewCount: 21000 }),

  // —— maastricht ——
  place('maastricht-fashion-1', 'maastricht', 'fashion', 'Entre Deux / city boutiques', 4.3, 'Maastricht', '[패션] 센터 패션·부티크.', '[Fashion] Centre fashion and boutiques.', { reviewCount: 2100 }),
  place('maastricht-fashion-2', 'maastricht', 'fashion', 'Designer Outlet Roermond', 4.4, 'Roermond', '[아울렛] 마스트리흐트에서 가까운 대형 아울렛.', '[Outlet] Major outlet close to Maastricht.', { reviewCount: 21000 }),

  // —— giethoorn ——
  place('giethoorn-fashion-1', 'giethoorn', 'fashion', 'Village craft & souvenir shops', 4.2, 'Giethoorn', '[패션] 마을 공예·패션 소품 숍.', '[Fashion] Village craft and fashion-accessory shops.', { reviewCount: 800 }),
  place('giethoorn-fashion-2', 'giethoorn', 'fashion', 'Zwolle / nearby outlet day trip', 4.1, 'Overijssel', '[아울렛] 근교 도시 아울렛·몰 데이트립.', '[Outlet] Nearby town outlet/mall day trip.', { reviewCount: 600 }),

  // —— luxembourg-city ——
  place('luxembourg-city-fashion-1', 'luxembourg-city', 'fashion', 'Avenue de la Liberté / Grand Rue', 4.4, 'Luxembourg City', '[패션] 시내 패션·럭셔리 거리.', '[Fashion] City fashion and luxury streets.', { reviewCount: 2800 }),
  place('luxembourg-city-fashion-2', 'luxembourg-city', 'fashion', 'Designer Outlet Zweibrücken (day trip)', 4.3, 'Germany', '[아울렛] 근교 크로스보더 아울렛.', '[Outlet] Cross-border outlet day trip.', { reviewCount: 9000 }),

  // —— vianden ——
  place('vianden-fashion-1', 'vianden', 'fashion', 'Old town boutiques', 4.2, 'Vianden', '[패션] 구시가지 부티크·기념품 패션.', '[Fashion] Old-town boutiques and fashion souvenirs.', { reviewCount: 400 }),
  place('vianden-fashion-2', 'vianden', 'fashion', 'Luxembourg City outlet day trip', 4.2, 'Luxembourg', '[아울렛] 수도·근교 아울렛 데이트립.', '[Outlet] Capital/outlet day trip.', { reviewCount: 1200 }),

  // —— echternach ——
  place('echternach-fashion-1', 'echternach', 'fashion', 'Town centre shops', 4.2, 'Echternach', '[패션] 타운 센터 패션·소품.', '[Fashion] Town-centre fashion and gifts.', { reviewCount: 380 }),
  place('echternach-fashion-2', 'echternach', 'fashion', 'Trier / Germany outlet day trip', 4.2, 'Trier area', '[아울렛] 국경 넘어 아울렛·몰.', '[Outlet] Cross-border outlet/mall trip.', { reviewCount: 2100 }),

  // —— remich ——
  place('remich-fashion-1', 'remich', 'fashion', 'Moselle promenade shops', 4.2, 'Remich', '[패션] 모젤 강변 소품·패션.', '[Fashion] Moselle promenade shops and fashion.', { reviewCount: 360 }),
  place('remich-fashion-2', 'remich', 'fashion', 'Luxembourg / Trier shopping day trip', 4.2, 'Region', '[아울렛] 근교 쇼핑·아울렛 데이트립.', '[Outlet] Regional shopping/outlet day trip.', { reviewCount: 1500 }),

  // —— brussels ——
  place('brussels-fashion-1', 'brussels', 'fashion', 'Avenue Louise / Rue Neuve', 4.3, 'Brussels', '[패션] 패션 스트리트·하이스트리트.', '[Fashion] Fashion avenue and high street.', { reviewCount: 7600 }),
  place('brussels-fashion-2', 'brussels', 'fashion', 'Maasmechelen Village', 4.4, 'Maasmechelen', '[아울렛] 벨기에 대표 디자이너 아울렛.', '[Outlet] Belgium’s flagship designer outlet.', { reviewCount: 14000 }),

  // —— bruges ——
  place('bruges-fashion-1', 'bruges', 'fashion', 'Steenstraat shopping street', 4.3, 'Bruges', '[패션] 시내 패션·브랜드 거리.', '[Fashion] City fashion brand street.', { reviewCount: 2400 }),
  place('bruges-fashion-2', 'bruges', 'fashion', 'Maasmechelen Village (day trip)', 4.4, 'Maasmechelen', '[아울렛] 근교 프리미엄 아울렛.', '[Outlet] Nearby premium outlet.', { reviewCount: 14000 }),

  // —— ghent ——
  place('ghent-fashion-1', 'ghent', 'fashion', 'Veldstraat shopping street', 4.3, 'Ghent', '[패션] 겐트 메인 패션 거리.', '[Fashion] Ghent’s main fashion street.', { reviewCount: 2900 }),
  place('ghent-fashion-2', 'ghent', 'fashion', 'Maasmechelen Village (day trip)', 4.4, 'Maasmechelen', '[아울렛] 근교 아울렛.', '[Outlet] Nearby outlet.', { reviewCount: 14000 }),

  // —— antwerp ——
  place('antwerp-fashion-1', 'antwerp', 'fashion', 'Meir / Schuttershofstraat', 4.5, 'Antwerp', '[패션] 앤트워프 패션 허브.', '[Fashion] Antwerp fashion hub.', { reviewCount: 6800 }),
  place('antwerp-fashion-2', 'antwerp', 'fashion', 'Maasmechelen Village', 4.4, 'Maasmechelen', '[아울렛] 근교 디자이너 아울렛.', '[Outlet] Nearby designer outlet.', { reviewCount: 14000 }),

  // —— leuven ——
  place('leuven-fashion-1', 'leuven', 'fashion', 'Bondgenotenlaan shopping', 4.3, 'Leuven', '[패션] 시내 패션·학생가 쇼핑.', '[Fashion] City fashion and student shopping.', { reviewCount: 1800 }),
  place('leuven-fashion-2', 'leuven', 'fashion', 'Maasmechelen Village (day trip)', 4.4, 'Maasmechelen', '[아울렛] 근교 아울렛.', '[Outlet] Nearby outlet.', { reviewCount: 14000 }),

  // —— dinant ——
  place('dinant-fashion-1', 'dinant', 'fashion', 'Town centre boutiques', 4.2, 'Dinant', '[패션] 강변 타운 부티크.', '[Fashion] Riverside town boutiques.', { reviewCount: 420 }),
  place('dinant-fashion-2', 'dinant', 'fashion', 'Namur / regional outlet day trip', 4.1, 'Wallonia', '[아울렛] 근교 도시 쇼핑·아울렛.', '[Outlet] Regional shopping/outlet day trip.', { reviewCount: 900 }),

  // —— oslo ——
  place('oslo-fashion-1', 'oslo', 'fashion', 'Karl Johans gate / Paleet', 4.3, 'Oslo', '[패션] 오슬로 메인 패션 거리.', '[Fashion] Oslo’s main fashion street.', { reviewCount: 5400 }),
  place('oslo-fashion-2', 'oslo', 'fashion', 'Oslo Fashion Outlet Vestby', 4.3, 'Vestby', '[아울렛] 오슬로 근교 패션 아울렛.', '[Outlet] Fashion outlet near Oslo.', { reviewCount: 7200 }),

  // —— bergen ——
  place('bergen-fashion-1', 'bergen', 'fashion', 'Strandgaten shopping', 4.3, 'Bergen', '[패션] 시내 패션·브랜드.', '[Fashion] City fashion and brands.', { reviewCount: 2100 }),
  place('bergen-fashion-2', 'bergen', 'fashion', 'Oslo/Bergen regional outlet day trip', 4.1, 'Norway', '[아울렛] 권역 아울렛·몰 데이트립.', '[Outlet] Regional outlet/mall day trip.', { reviewCount: 800 }),

  // —— tromso ——
  place('tromso-fashion-1', 'tromso', 'fashion', 'Storgata shopping', 4.2, 'Tromsø', '[패션] 시내 패션·아웃도어 숍.', '[Fashion] City fashion and outdoor shops.', { reviewCount: 1400 }),
  place('tromso-fashion-2', 'tromso', 'fashion', 'Regional mall shopping (Jekta)', 4.2, 'Tromsø', '[아울렛] 시내 몰·할인 쇼핑.', '[Outlet] City mall and value shopping.', { reviewCount: 2200 }),

  // —— stavanger ——
  place('stavanger-fashion-1', 'stavanger', 'fashion', 'Kirkegata / centre fashion', 4.3, 'Stavanger', '[패션] 센터 패션 거리.', '[Fashion] Centre fashion streets.', { reviewCount: 1600 }),
  place('stavanger-fashion-2', 'stavanger', 'fashion', 'Kvadrat Shopping (Sandnes)', 4.3, 'Sandnes', '[아울렛] 스타방에르 권역 대형 몰·아울렛 감성.', '[Outlet] Large regional mall/outlet-style shopping.', { reviewCount: 4800 }),

  // —— trondheim ——
  place('trondheim-fashion-1', 'trondheim', 'fashion', 'Nordre gate shopping', 4.3, 'Trondheim', '[패션] 시내 패션 메인 스트리트.', '[Fashion] Main city fashion street.', { reviewCount: 1900 }),
  place('trondheim-fashion-2', 'trondheim', 'fashion', 'City Syd / regional outlet-style mall', 4.2, 'Trondheim', '[아울렛] 권역 몰·할인 쇼핑.', '[Outlet] Regional mall and value shopping.', { reviewCount: 2700 }),

  // —— alesund ——
  place('alesund-fashion-1', 'alesund', 'fashion', 'Kongens gate boutiques', 4.3, 'Ålesund', '[패션] 아르누보 거리 부티크·패션.', '[Fashion] Art Nouveau street boutiques.', { reviewCount: 900 }),
  place('alesund-fashion-2', 'alesund', 'fashion', 'Ålesund shopping centre / day trip malls', 4.2, 'Ålesund', '[아울렛] 시내 몰·근교 쇼핑.', '[Outlet] City mall and nearby shopping.', { reviewCount: 1100 }),

  // —— flam ——
  place('flam-fashion-1', 'flam', 'fashion', 'Flåm village shops', 4.2, 'Flåm', '[패션] 마을 기념품·아웃도어 패션.', '[Fashion] Village souvenirs and outdoor fashion.', { reviewCount: 1200 }),
  place('flam-fashion-2', 'flam', 'fashion', 'Bergen shopping day trip', 4.2, 'Bergen', '[아울렛] 베르겐 몰·아울렛 데이트립.', '[Outlet] Bergen mall/outlet day trip.', { reviewCount: 1500 }),

  // —— helsinki ——
  place('helsinki-fashion-1', 'helsinki', 'fashion', 'Stockmann / Aleksanterinkatu', 4.4, 'Helsinki', '[패션] 핀란드 대표 패션 백화점·거리.', '[Fashion] Flagship fashion department store and street.', { reviewCount: 9800 }),
  place('helsinki-fashion-2', 'helsinki', 'fashion', 'Designer Outlet Helsinki (Vanha Kauppala)', 4.3, 'Vantaa area', '[아울렛] 헬싱키 권역 디자이너 아울렛.', '[Outlet] Designer outlet in Helsinki region.', { reviewCount: 5600 }),

  // —— turku ——
  place('turku-fashion-1', 'turku', 'fashion', 'Yliopistonkatu shopping', 4.3, 'Turku', '[패션] 시내 패션 거리.', '[Fashion] City fashion street.', { reviewCount: 1600 }),
  place('turku-fashion-2', 'turku', 'fashion', 'Skanssi / regional outlet-style mall', 4.2, 'Turku', '[아울렛] 권역 몰·할인 쇼핑.', '[Outlet] Regional mall and value shopping.', { reviewCount: 2400 }),

  // —— tampere ——
  place('tampere-fashion-1', 'tampere', 'fashion', 'Hämeenkatu shopping', 4.3, 'Tampere', '[패션] 메인 패션 스트리트.', '[Fashion] Main fashion street.', { reviewCount: 2100 }),
  place('tampere-fashion-2', 'tampere', 'fashion', 'Ideapark Lempäälä', 4.3, 'Lempäälä', '[아울렛] 탐페레 근교 초대형 쇼핑·아울렛 감성.', '[Outlet] Huge nearby shopping/outlet-style complex.', { reviewCount: 6900 }),

  // —— rovaniemi ——
  place('rovaniemi-fashion-1', 'rovaniemi', 'fashion', 'Santa Claus Village shops', 4.2, 'Rovaniemi', '[패션] 관광·패션·기념품 쇼핑.', '[Fashion] Tourist fashion and souvenir shopping.', { reviewCount: 5400 }),
  place('rovaniemi-fashion-2', 'rovaniemi', 'fashion', 'Revontuli / city mall shopping', 4.2, 'Rovaniemi', '[아울렛] 시내 몰·할인 쇼핑.', '[Outlet] City mall and value shopping.', { reviewCount: 1800 }),

  // —— porvoo ——
  place('porvoo-fashion-1', 'porvoo', 'fashion', 'Old Porvoo boutiques', 4.4, 'Porvoo', '[패션] 구시가지 부티크·패션.', '[Fashion] Old town boutiques and fashion.', { reviewCount: 1600 }),
  place('porvoo-fashion-2', 'porvoo', 'fashion', 'Helsinki outlet day trip', 4.3, 'Helsinki region', '[아울렛] 헬싱키 아울렛 데이트립.', '[Outlet] Helsinki outlet day trip.', { reviewCount: 3000 }),

  // —— stockholm ——
  place('stockholm-fashion-1', 'stockholm', 'fashion', 'Biblioteksgatan / NK Stockholm', 4.5, 'Stockholm', '[패션] 럭셔리·패션 쇼핑 거리.', '[Fashion] Luxury and fashion shopping streets.', { reviewCount: 11000 }),
  place('stockholm-fashion-2', 'stockholm', 'fashion', 'Barkarby Outlet / Freeport', 4.3, 'Järfälla', '[아울렛] 스톡홀름 근교 아울렛.', '[Outlet] Outlet near Stockholm.', { reviewCount: 8700 }),

  // —— gothenburg ——
  place('gothenburg-fashion-1', 'gothenburg', 'fashion', 'Avenyn / Nordstan', 4.3, 'Gothenburg', '[패션] 패션 거리·대형 몰.', '[Fashion] Fashion avenue and major mall.', { reviewCount: 7600 }),
  place('gothenburg-fashion-2', 'gothenburg', 'fashion', 'Freeport / Torp shopping day trip', 4.2, 'West Sweden', '[아울렛] 근교 아울렛·몰.', '[Outlet] Nearby outlet and mall options.', { reviewCount: 4200 }),

  // —— malmo ——
  place('malmo-fashion-1', 'malmo', 'fashion', 'Södergatan / Emporia', 4.4, 'Malmö', '[패션] 시내 패션·대형 몰.', '[Fashion] City fashion and major mall.', { reviewCount: 8900 }),
  place('malmo-fashion-2', 'malmo', 'fashion', 'Designer Outlet Helsingborg day trip', 4.3, 'Helsingborg', '[아울렛] 근교 디자이너 아울렛.', '[Outlet] Nearby designer outlet.', { reviewCount: 5100 }),

  // —— uppsala ——
  place('uppsala-fashion-1', 'uppsala', 'fashion', 'Svartbäcksgatan shopping', 4.3, 'Uppsala', '[패션] 시내 패션·학생가 쇼핑.', '[Fashion] City fashion and student shopping.', { reviewCount: 1700 }),
  place('uppsala-fashion-2', 'uppsala', 'fashion', 'Stockholm outlet day trip', 4.3, 'Stockholm region', '[아울렛] 스톡홀름 아울렛 데이트립.', '[Outlet] Stockholm outlet day trip.', { reviewCount: 4000 }),

  // —— kiruna ——
  place('kiruna-fashion-1', 'kiruna', 'fashion', 'City centre outdoor & fashion shops', 4.1, 'Kiruna', '[패션] 아웃도어·시내 패션.', '[Fashion] Outdoor and city fashion shops.', { reviewCount: 600 }),
  place('kiruna-fashion-2', 'kiruna', 'fashion', 'Regional mall / Luleå day trip', 4.1, 'Norrbotten', '[아울렛] 권역 몰·쇼핑 데이트립.', '[Outlet] Regional mall shopping day trip.', { reviewCount: 800 }),

  // —— copenhagen ——
  place('copenhagen-fashion-1', 'copenhagen', 'fashion', 'Strøget / Illum', 4.4, 'Copenhagen', '[패션] 보행자 거리 패션·백화점.', '[Fashion] Pedestrian fashion street and department store.', { reviewCount: 16000 }),
  place('copenhagen-fashion-2', 'copenhagen', 'fashion', 'Designer Outlet Ringsted', 4.3, 'Ringsted', '[아울렛] 코펜하겐 근교 디자이너 아울렛.', '[Outlet] Designer outlet near Copenhagen.', { reviewCount: 7800 }),

  // —— aarhus ——
  place('aarhus-fashion-1', 'aarhus', 'fashion', 'Søndergade shopping street', 4.3, 'Aarhus', '[패션] 시내 메인 패션 거리.', '[Fashion] Main city fashion street.', { reviewCount: 2800 }),
  place('aarhus-fashion-2', 'aarhus', 'fashion', 'Designer Outlet Billund / regional outlets', 4.2, 'Jutland', '[아울렛] 유틀란트 권역 아울렛.', '[Outlet] Jutland regional outlets.', { reviewCount: 3500 }),

  // —— odense ——
  place('odense-fashion-1', 'odense', 'fashion', 'Vestergade shopping', 4.2, 'Odense', '[패션] 시내 패션 거리.', '[Fashion] City fashion street.', { reviewCount: 1600 }),
  place('odense-fashion-2', 'odense', 'fashion', 'Rosengårdcentret / outlet-style mall', 4.2, 'Odense', '[아울렛] 대형 몰·할인 쇼핑.', '[Outlet] Large mall and value shopping.', { reviewCount: 3100 }),

  // —— aalborg ——
  place('aalborg-fashion-1', 'aalborg', 'fashion', 'Bispensgade shopping', 4.3, 'Aalborg', '[패션] 시내 패션 스트리트.', '[Fashion] City fashion street.', { reviewCount: 1500 }),
  place('aalborg-fashion-2', 'aalborg', 'fashion', 'Aalborg Storcenter / regional outlets', 4.2, 'Aalborg', '[아울렛] 몰·권역 아울렛 옵션.', '[Outlet] Mall and regional outlet options.', { reviewCount: 2400 }),

  // —— roskilde ——
  place('roskilde-fashion-1', 'roskilde', 'fashion', 'Town centre boutiques', 4.2, 'Roskilde', '[패션] 타운 센터 패션·부티크.', '[Fashion] Town-centre fashion and boutiques.', { reviewCount: 700 }),
  place('roskilde-fashion-2', 'roskilde', 'fashion', 'Copenhagen outlet day trip', 4.3, 'Zealand', '[아울렛] 코펜하겐 아울렛 데이트립.', '[Outlet] Copenhagen outlet day trip.', { reviewCount: 4000 }),

  // —— extras (fashion-3) ——
  place('london-fashion-3', 'london', 'fashion', 'Liberty London', 4.5, 'Regent St, London', '[패션] 리버티 백화점·패션 아이콘.', '[Fashion] Liberty department store fashion icon.', { reviewCount: 12000 }),
  place('edinburgh-fashion-3', 'edinburgh', 'fashion', 'Jenners / Princes Street fashion', 4.3, 'Princes Street, Edinburgh', '[패션] 프린시스 스트리트 패션.', '[Fashion] Princes Street fashion shopping.', { reviewCount: 2800 }),
  place('manchester-fashion-3', 'manchester', 'fashion', 'Arndale / Market Street fashion', 4.2, 'Market Street, Manchester', '[패션] 마켓 스트리트 패션 몰.', '[Fashion] Market Street fashion mall.', { reviewCount: 6500 }),
  place('bath-fashion-3', 'bath', 'fashion', 'Milsom Street boutiques', 4.4, 'Milsom St, Bath', '[패션] 밀섬 스트리트 부티크.', '[Fashion] Milsom Street boutiques.', { reviewCount: 1600 }),
  place('oxford-fashion-3', 'oxford', 'fashion', 'Cornmarket Street fashion', 4.2, 'Cornmarket St, Oxford', '[패션] 콘마켓 하이스트리트 패션.', '[Fashion] Cornmarket high-street fashion.', { reviewCount: 2100 }),
  place('cambridge-fashion-3', 'cambridge', 'fashion', 'Lion Yard shopping', 4.2, 'Lion Yard, Cambridge', '[패션] 라이언 야드 패션 몰.', '[Fashion] Lion Yard fashion mall.', { reviewCount: 1800 }),
  place('liverpool-fashion-3', 'liverpool', 'fashion', 'Metquarter / Church Street fashion', 4.3, 'Church Street, Liverpool', '[패션] 처치 스트리트 패션.', '[Fashion] Church Street fashion.', { reviewCount: 3200 }),
  place('brighton-fashion-3', 'brighton', 'fashion', 'The Lanes boutiques', 4.5, 'The Lanes, Brighton', '[패션] 레인즈 인디 부티크.', '[Fashion] Indie boutiques in The Lanes.', { reviewCount: 4100 }),
  place('york-fashion-3', 'york', 'fashion', 'Stonegate fashion boutiques', 4.3, 'Stonegate, York', '[패션] 스톤게이트 부티크.', '[Fashion] Stonegate fashion boutiques.', { reviewCount: 1900 }),
  place('bristol-fashion-3', 'bristol', 'fashion', 'Cribbs Causeway fashion (day trip)', 4.2, 'Cribbs Causeway', '[패션] 대형 패션 몰 데이트립.', '[Fashion] Large fashion mall day trip.', { reviewCount: 7800 }),
  place('amsterdam-fashion-3', 'amsterdam', 'fashion', 'Nine Streets / 9 Straatjes', 4.5, 'Jordaan, Amsterdam', '[패션] 나인 스트리트 부티크.', '[Fashion] Nine Streets boutiques.', { reviewCount: 5600 }),
  place('rotterdam-fashion-3', 'rotterdam', 'fashion', 'Lijnbaan shopping street', 4.3, 'Lijnbaan, Rotterdam', '[패션] 라인반 패션 거리.', '[Fashion] Lijnbaan fashion street.', { reviewCount: 3400 }),
  place('the-hague-fashion-3', 'the-hague', 'fashion', 'Grote Marktstraat fashion', 4.3, 'Grote Marktstraat, The Hague', '[패션] 그로테 마르크트스트라트 패션.', '[Fashion] Grote Marktstraat fashion.', { reviewCount: 2600 }),
  place('utrecht-fashion-3', 'utrecht', 'fashion', 'Oudegracht boutiques', 4.4, 'Oudegracht, Utrecht', '[패션] 아우데흐라흐트 부티크.', '[Fashion] Oudegracht boutiques.', { reviewCount: 1700 }),
  place('haarlem-fashion-3', 'haarlem', 'fashion', 'Barteljorisstraat fashion', 4.3, 'Haarlem', '[패션] 바르텔요리스스트라트 패션.', '[Fashion] Barteljorisstraat fashion.', { reviewCount: 1100 }),
  place('delft-fashion-3', 'delft', 'fashion', 'Choorstraat boutiques', 4.2, 'Delft', '[패션] 시내 부티크 거리.', '[Fashion] City boutique street.', { reviewCount: 700 }),
  place('maastricht-fashion-3', 'maastricht', 'fashion', 'Stokstraat / fashion quarter', 4.4, 'Maastricht', '[패션] 스토크스트라트 패션 지구.', '[Fashion] Stokstraat fashion quarter.', { reviewCount: 1400 }),
  place('giethoorn-fashion-3', 'giethoorn', 'fashion', 'Nearby Zwolle fashion mall', 4.2, 'Zwolle', '[패션] 즈볼러 근교 패션 몰.', '[Fashion] Nearby Zwolle fashion mall.', { reviewCount: 900 }),
  place('luxembourg-city-fashion-3', 'luxembourg-city', 'fashion', 'Royal-Hamilius shopping', 4.3, 'Luxembourg City', '[패션] 로열-하밀리우스 패션 몰.', '[Fashion] Royal-Hamilius fashion mall.', { reviewCount: 2100 }),
  place('vianden-fashion-3', 'vianden', 'fashion', 'Diekirch / regional fashion day trip', 4.1, 'Diekirch', '[패션] 권역 패션 데이트립.', '[Fashion] Regional fashion day trip.', { reviewCount: 400 }),
  place('echternach-fashion-3', 'echternach', 'fashion', 'Luxembourg City fashion day trip', 4.2, 'Luxembourg City', '[패션] 수도 패션 데이트립.', '[Fashion] Capital fashion day trip.', { reviewCount: 600 }),
  place('remich-fashion-3', 'remich', 'fashion', 'Mondorf / regional fashion', 4.1, 'Mondorf-les-Bains', '[패션] 권역 패션·스파 타운 쇼핑.', '[Fashion] Regional fashion shopping.', { reviewCount: 350 }),
  place('brussels-fashion-3', 'brussels', 'fashion', 'Galeries Royales Saint-Hubert', 4.5, 'Brussels', '[패션] 생튀베르 갤러리 패션.', '[Fashion] Galeries Royales fashion arcade.', { reviewCount: 8900 }),
  place('bruges-fashion-3', 'bruges', 'fashion', 'Zilverpand shopping', 4.3, 'Bruges', '[패션] 질버판트 패션 코트.', '[Fashion] Zilverpand fashion court.', { reviewCount: 1500 }),
  place('ghent-fashion-3', 'ghent', 'fashion', 'Korenmarkt fashion area', 4.3, 'Ghent', '[패션] 코렌마르크트 패션 권역.', '[Fashion] Korenmarkt fashion area.', { reviewCount: 1700 }),
  place('antwerp-fashion-3', 'antwerp', 'fashion', 'Nationalestraat fashion district', 4.5, 'Antwerp', '[패션] 내셔널스트라트 패션 지구.', '[Fashion] Nationalestraat fashion district.', { reviewCount: 3200 }),
  place('leuven-fashion-3', 'leuven', 'fashion', 'Diestsestraat fashion', 4.3, 'Leuven', '[패션] 디스트세스트라트 패션.', '[Fashion] Diestsestraat fashion.', { reviewCount: 1200 }),
  place('dinant-fashion-3', 'dinant', 'fashion', 'Namur fashion day trip', 4.2, 'Namur', '[패션] 나뮈르 패션 데이트립.', '[Fashion] Namur fashion day trip.', { reviewCount: 700 }),
  place('oslo-fashion-3', 'oslo', 'fashion', 'Byporten / Oslo City fashion', 4.2, 'Oslo', '[패션] 비포르텐·오슬로 시티 패션.', '[Fashion] Byporten and Oslo City fashion.', { reviewCount: 4100 }),
  place('bergen-fashion-3', 'bergen', 'fashion', 'Galleries / Xhibition fashion', 4.2, 'Bergen', '[패션] 갤러리·엑시비션 패션 몰.', '[Fashion] Galleries and Xhibition fashion mall.', { reviewCount: 1800 }),
  place('tromso-fashion-3', 'tromso', 'fashion', 'Jekta Storsenter fashion', 4.2, 'Tromsø', '[패션] 젝타 몰 패션.', '[Fashion] Jekta mall fashion.', { reviewCount: 1600 }),
  place('stavanger-fashion-3', 'stavanger', 'fashion', 'Arkaden / centre fashion', 4.2, 'Stavanger', '[패션] 아르카덴 센터 패션.', '[Fashion] Arkaden centre fashion.', { reviewCount: 1200 }),
  place('trondheim-fashion-3', 'trondheim', 'fashion', 'Mercur / Thomas Angells gate fashion', 4.2, 'Trondheim', '[패션] 머큐르·센터 패션.', '[Fashion] Mercur and centre fashion.', { reviewCount: 1100 }),
  place('alesund-fashion-3', 'alesund', 'fashion', 'Amfi Moa fashion (day trip)', 4.2, 'Ålesund area', '[패션] 암피 모아 패션 몰.', '[Fashion] Amfi Moa fashion mall.', { reviewCount: 1400 }),
  place('flam-fashion-3', 'flam', 'fashion', 'Flåm Railway shop / outdoor fashion', 4.1, 'Flåm', '[패션] 아웃도어·기념품 패션.', '[Fashion] Outdoor and souvenir fashion.', { reviewCount: 800 }),
  place('helsinki-fashion-3', 'helsinki', 'fashion', 'Kamppi Centre fashion', 4.3, 'Kamppi, Helsinki', '[패션] 캄피 센터 패션.', '[Fashion] Kamppi Centre fashion.', { reviewCount: 6700 }),
  place('turku-fashion-3', 'turku', 'fashion', 'Hansakortteli fashion', 4.2, 'Turku', '[패션] 한사코르텔리 패션.', '[Fashion] Hansakortteli fashion.', { reviewCount: 1900 }),
  place('tampere-fashion-3', 'tampere', 'fashion', 'Ratina shopping centre fashion', 4.3, 'Tampere', '[패션] 라티나 몰 패션.', '[Fashion] Ratina mall fashion.', { reviewCount: 2800 }),
  place('rovaniemi-fashion-3', 'rovaniemi', 'fashion', 'Sampokeskus fashion', 4.1, 'Rovaniemi', '[패션] 삼포케스쿠스 패션.', '[Fashion] Sampokeskus fashion.', { reviewCount: 900 }),
  place('porvoo-fashion-3', 'porvoo', 'fashion', 'Old Porvoo design shops', 4.4, 'Porvoo', '[패션] 구시가지 디자인·패션 숍.', '[Fashion] Old town design and fashion shops.', { reviewCount: 1200 }),
  place('stockholm-fashion-3', 'stockholm', 'fashion', 'Gallerian / Hamngatan fashion', 4.3, 'Stockholm', '[패션] 갈레리안·함가탄 패션.', '[Fashion] Gallerian and Hamngatan fashion.', { reviewCount: 7200 }),
  place('gothenburg-fashion-3', 'gothenburg', 'fashion', 'NK Gothenburg / Fredsgatan', 4.3, 'Gothenburg', '[패션] NK·프레드스가탄 패션.', '[Fashion] NK and Fredsgatan fashion.', { reviewCount: 3100 }),
  place('malmo-fashion-3', 'malmo', 'fashion', 'Triangeln / Södra Förstadsgatan fashion', 4.3, 'Malmö', '[패션] 트리앙겔른 패션.', '[Fashion] Triangeln fashion.', { reviewCount: 2900 }),
  place('uppsala-fashion-3', 'uppsala', 'fashion', 'Forumgallerian fashion', 4.2, 'Uppsala', '[패션] 포럼갈레리안 패션.', '[Fashion] Forumgallerian fashion.', { reviewCount: 1400 }),
  place('kiruna-fashion-3', 'kiruna', 'fashion', 'Galleria / centre fashion', 4.1, 'Kiruna', '[패션] 시내 갤러리아 패션.', '[Fashion] Centre galleria fashion.', { reviewCount: 400 }),
  place('copenhagen-fashion-3', 'copenhagen', 'fashion', 'Illum / Magasin du Nord fashion', 4.4, 'Copenhagen', '[패션] 일룸·마가쟁 백화점 패션.', '[Fashion] Illum and Magasin fashion.', { reviewCount: 9800 }),
  place('aarhus-fashion-3', 'aarhus', 'fashion', 'Bruuns Galleri fashion', 4.3, 'Aarhus', '[패션] 브룬스 갤러리 패션.', '[Fashion] Bruuns Galleri fashion.', { reviewCount: 3600 }),
  place('odense-fashion-3', 'odense', 'fashion', 'Magasin / centre fashion', 4.2, 'Odense', '[패션] 마가쟁·센터 패션.', '[Fashion] Magasin and centre fashion.', { reviewCount: 1600 }),
  place('aalborg-fashion-3', 'aalborg', 'fashion', 'Friis shopping centre fashion', 4.2, 'Aalborg', '[패션] 프리스 몰 패션.', '[Fashion] Friis mall fashion.', { reviewCount: 2100 }),
  place('roskilde-fashion-3', 'roskilde', 'fashion', 'Ro\'s Torv fashion', 4.2, 'Roskilde', '[패션] 로스 토르브 패션 몰.', '[Fashion] Ro\'s Torv fashion mall.', { reviewCount: 1100 }),

  // —— at / hu / cz ——
  place('vienna-fashion-1', 'vienna', 'fashion', 'Mariahilfer Straße', 4.4, 'Vienna', '[패션] 빈 메인 패션 거리.', '[Fashion] Vienna’s main fashion street.', { reviewCount: 8900 }),
  place('vienna-fashion-2', 'vienna', 'fashion', 'Designer Outlet Parndorf', 4.4, 'Parndorf', '[아울렛] 빈 근교 대형 아울렛.', '[Outlet] Major outlet near Vienna.', { reviewCount: 16000 }),
  place('vienna-fashion-3', 'vienna', 'fashion', 'Goldenes Quartier', 4.5, 'Vienna', '[패션] 럭셔리 패션 지구.', '[Fashion] Luxury fashion quarter.', { reviewCount: 3200 }),
  place('salzburg-fashion-1', 'salzburg', 'fashion', 'Getreidegasse boutiques', 4.4, 'Salzburg', '[패션] 게트라이데가세 부티크.', '[Fashion] Getreidegasse boutiques.', { reviewCount: 2800 }),
  place('salzburg-fashion-2', 'salzburg', 'fashion', 'Designer Outlet Salzburg', 4.3, 'Salzburg', '[아울렛] 잘츠부르크 아울렛.', '[Outlet] Salzburg designer outlet.', { reviewCount: 5400 }),
  place('salzburg-fashion-3', 'salzburg', 'fashion', 'Europark fashion mall', 4.2, 'Salzburg', '[패션] 유로파크 패션 몰.', '[Fashion] Europark fashion mall.', { reviewCount: 3100 }),
  place('innsbruck-fashion-1', 'innsbruck', 'fashion', 'Maria-Theresien-Straße', 4.3, 'Innsbruck', '[패션] 메인 패션 거리.', '[Fashion] Main fashion street.', { reviewCount: 2100 }),
  place('innsbruck-fashion-2', 'innsbruck', 'fashion', 'Designer Outlet Brenner day trip', 4.2, 'Brenner area', '[아울렛] 근교 아울렛.', '[Outlet] Nearby outlet.', { reviewCount: 1800 }),
  place('innsbruck-fashion-3', 'innsbruck', 'fashion', 'Rathausgalerien fashion', 4.2, 'Innsbruck', '[패션] 시청 갤러리 패션.', '[Fashion] City hall galleries fashion.', { reviewCount: 1400 }),
  place('graz-fashion-1', 'graz', 'fashion', 'Herrengasse fashion', 4.3, 'Graz', '[패션] 헤렌가세 패션.', '[Fashion] Herrengasse fashion.', { reviewCount: 1600 }),
  place('graz-fashion-2', 'graz', 'fashion', 'Designer Outlet Graz / regional', 4.2, 'Styria', '[아울렛] 권역 아울렛.', '[Outlet] Regional outlet.', { reviewCount: 1200 }),
  place('graz-fashion-3', 'graz', 'fashion', 'Citypark Graz fashion', 4.2, 'Graz', '[패션] 시티파크 몰.', '[Fashion] Citypark mall.', { reviewCount: 1900 }),
  place('hallstatt-fashion-1', 'hallstatt', 'fashion', 'Village boutiques', 4.2, 'Hallstatt', '[패션] 마을 부티크·소품.', '[Fashion] Village boutiques.', { reviewCount: 600 }),
  place('hallstatt-fashion-2', 'hallstatt', 'fashion', 'Salzburg outlet day trip', 4.3, 'Salzburg', '[아울렛] 잘츠부르크 아울렛 데이트립.', '[Outlet] Salzburg outlet day trip.', { reviewCount: 2000 }),
  place('hallstatt-fashion-3', 'hallstatt', 'fashion', 'Gmunden / regional fashion', 4.1, 'Gmunden', '[패션] 권역 패션.', '[Fashion] Regional fashion.', { reviewCount: 400 }),
  place('budapest-fashion-1', 'budapest', 'fashion', 'Andrássy / Fashion Street', 4.4, 'Budapest', '[패션] 안드라시·패션 스트리트.', '[Fashion] Andrássy and Fashion Street.', { reviewCount: 5600 }),
  place('budapest-fashion-2', 'budapest', 'fashion', 'Designer Outlet Premier Budapest', 4.3, 'Biatorbágy', '[아울렛] 부다페스트 근교 아울렛.', '[Outlet] Outlet near Budapest.', { reviewCount: 7200 }),
  place('budapest-fashion-3', 'budapest', 'fashion', 'Váci Street fashion', 4.3, 'Budapest', '[패션] 바치 거리 패션.', '[Fashion] Váci Street fashion.', { reviewCount: 9800 }),
  place('debrecen-fashion-1', 'debrecen', 'fashion', 'Piac utca fashion', 4.2, 'Debrecen', '[패션] 피아츠 거리 패션.', '[Fashion] Piac Street fashion.', { reviewCount: 1100 }),
  place('debrecen-fashion-2', 'debrecen', 'fashion', 'Budapest outlet day trip', 4.3, 'Budapest region', '[아울렛] 수도 아울렛 데이트립.', '[Outlet] Capital outlet day trip.', { reviewCount: 2500 }),
  place('debrecen-fashion-3', 'debrecen', 'fashion', 'Fórum Debrecen fashion', 4.2, 'Debrecen', '[패션] 포럼 몰 패션.', '[Fashion] Forum mall fashion.', { reviewCount: 1600 }),
  place('pecs-fashion-1', 'pecs', 'fashion', 'Király utca boutiques', 4.3, 'Pécs', '[패션] 키라이 거리 부티크.', '[Fashion] Király Street boutiques.', { reviewCount: 900 }),
  place('pecs-fashion-2', 'pecs', 'fashion', 'Regional outlet / Budapest day trip', 4.2, 'Hungary', '[아울렛] 권역·수도 아울렛.', '[Outlet] Regional/capital outlet.', { reviewCount: 1200 }),
  place('pecs-fashion-3', 'pecs', 'fashion', 'Árkád Pécs fashion', 4.2, 'Pécs', '[패션] 아르카드 몰.', '[Fashion] Árkád mall.', { reviewCount: 1300 }),
  place('szeged-fashion-1', 'szeged', 'fashion', 'Kárász utca fashion', 4.2, 'Szeged', '[패션] 카라스 거리 패션.', '[Fashion] Kárász Street fashion.', { reviewCount: 1000 }),
  place('szeged-fashion-2', 'szeged', 'fashion', 'Budapest outlet day trip', 4.3, 'Budapest region', '[아울렛] 수도 아울렛.', '[Outlet] Capital outlet.', { reviewCount: 2000 }),
  place('szeged-fashion-3', 'szeged', 'fashion', 'Plaza Szeged fashion', 4.1, 'Szeged', '[패션] 플라자 몰.', '[Fashion] Plaza mall.', { reviewCount: 1100 }),
  place('eger-fashion-1', 'eger', 'fashion', 'Dobó Square boutiques', 4.2, 'Eger', '[패션] 광장 부티크.', '[Fashion] Square boutiques.', { reviewCount: 700 }),
  place('eger-fashion-2', 'eger', 'fashion', 'Budapest outlet day trip', 4.3, 'Budapest region', '[아울렛] 수도 아울렛.', '[Outlet] Capital outlet.', { reviewCount: 1800 }),
  place('eger-fashion-3', 'eger', 'fashion', 'Agria Park fashion', 4.1, 'Eger', '[패션] 아그리아 파크 몰.', '[Fashion] Agria Park mall.', { reviewCount: 900 }),
  place('prague-fashion-1', 'prague', 'fashion', 'Pařížská / Na Příkopě fashion', 4.5, 'Prague', '[패션] 파리슈카·나프르지코페.', '[Fashion] Pařížská and Na Příkopě.', { reviewCount: 7800 }),
  place('prague-fashion-2', 'prague', 'fashion', 'Fashion Arena Prague Outlet', 4.3, 'Štěrboholy', '[아울렛] 프라하 패션 아레나.', '[Outlet] Prague Fashion Arena.', { reviewCount: 9100 }),
  place('prague-fashion-3', 'prague', 'fashion', 'Palladium Prague fashion', 4.3, 'Prague', '[패션] 팔라디움 몰.', '[Fashion] Palladium mall.', { reviewCount: 6500 }),
  place('brno-fashion-1', 'brno', 'fashion', 'Masarykova fashion street', 4.3, 'Brno', '[패션] 마사리코바 패션.', '[Fashion] Masarykova fashion.', { reviewCount: 1800 }),
  place('brno-fashion-2', 'brno', 'fashion', 'Olympia Brno / outlet-style', 4.2, 'Brno', '[아울렛] 올림피아 몰·아울렛 감성.', '[Outlet] Olympia mall/outlet-style.', { reviewCount: 3200 }),
  place('brno-fashion-3', 'brno', 'fashion', 'Vaňkovka fashion', 4.2, 'Brno', '[패션] 반코프카 몰.', '[Fashion] Vaňkovka mall.', { reviewCount: 2400 }),
  place('cesky-krumlov-fashion-1', 'cesky-krumlov', 'fashion', 'Old town boutiques', 4.3, 'Český Krumlov', '[패션] 구시가 부티크.', '[Fashion] Old-town boutiques.', { reviewCount: 1100 }),
  place('cesky-krumlov-fashion-2', 'cesky-krumlov', 'fashion', 'Prague outlet day trip', 4.3, 'Prague', '[아울렛] 프라하 아울렛 데이트립.', '[Outlet] Prague outlet day trip.', { reviewCount: 2500 }),
  place('cesky-krumlov-fashion-3', 'cesky-krumlov', 'fashion', 'České Budějovice fashion day trip', 4.2, 'České Budějovice', '[패션] 근교 도시 패션.', '[Fashion] Nearby city fashion.', { reviewCount: 800 }),
  place('karlovy-vary-fashion-1', 'karlovy-vary', 'fashion', 'Spa boulevard boutiques', 4.3, 'Karlovy Vary', '[패션] 스파 거리 부티크.', '[Fashion] Spa boulevard boutiques.', { reviewCount: 1200 }),
  place('karlovy-vary-fashion-2', 'karlovy-vary', 'fashion', 'Prague outlet day trip', 4.3, 'Prague', '[아울렛] 프라하 아울렛.', '[Outlet] Prague outlet.', { reviewCount: 2200 }),
  place('karlovy-vary-fashion-3', 'karlovy-vary', 'fashion', 'Varyáda fashion mall', 4.1, 'Karlovy Vary', '[패션] 바랴다 몰.', '[Fashion] Varyáda mall.', { reviewCount: 900 }),
  place('ceske-budejovice-fashion-1', 'ceske-budejovice', 'fashion', 'Piaristické Square fashion', 4.2, 'České Budějovice', '[패션] 광장 권역 패션.', '[Fashion] Square-area fashion.', { reviewCount: 1000 }),
  place('ceske-budejovice-fashion-2', 'ceske-budejovice', 'fashion', 'Igy Centrum / outlet-style', 4.2, 'České Budějovice', '[아울렛] IGY 몰.', '[Outlet] IGY mall.', { reviewCount: 1600 }),
  place('ceske-budejovice-fashion-3', 'ceske-budejovice', 'fashion', 'Mercury shopping fashion', 4.1, 'České Budějovice', '[패션] 머큐리 몰.', '[Fashion] Mercury mall.', { reviewCount: 1200 }),

  // —— fr / ch / de / it ——
  place('paris-fashion-1', 'paris', 'fashion', 'Champs-Élysées / Rue Saint-Honoré', 4.5, 'Paris', '[패션] 샹젤리제·생토노레.', '[Fashion] Champs-Élysées and Saint-Honoré.', { reviewCount: 18000 }),
  place('paris-fashion-2', 'paris', 'fashion', 'La Vallée Village', 4.4, 'Marne-la-Vallée', '[아울렛] 파리 근교 아울렛.', '[Outlet] Outlet near Paris.', { reviewCount: 14000 }),
  place('paris-fashion-3', 'paris', 'fashion', 'Le Marais boutiques', 4.5, 'Paris', '[패션] 마레 부티크.', '[Fashion] Marais boutiques.', { reviewCount: 9200 }),
  place('lyon-fashion-1', 'lyon', 'fashion', 'Lyon fashion street', 4.3, 'Lyon', '[패션] Lyon 메인 패션 거리.', '[Fashion] Lyon fashion street.', { reviewCount: 1600 }),
  place('lyon-fashion-2', 'lyon', 'fashion', 'Lyon designer outlet / day trip', 4.2, 'Lyon', '[아울렛] Lyon 권역 아울렛.', '[Outlet] Lyon-area outlet.', { reviewCount: 1400 }),
  place('lyon-fashion-3', 'lyon', 'fashion', 'Lyon shopping mall fashion', 4.2, 'Lyon', '[패션] Lyon 몰 패션.', '[Fashion] Lyon mall fashion.', { reviewCount: 1200 }),
  place('marseille-fashion-1', 'marseille', 'fashion', 'Marseille fashion street', 4.3, 'Marseille', '[패션] Marseille 메인 패션 거리.', '[Fashion] Marseille fashion street.', { reviewCount: 1600 }),
  place('marseille-fashion-2', 'marseille', 'fashion', 'Marseille designer outlet / day trip', 4.2, 'Marseille', '[아울렛] Marseille 권역 아울렛.', '[Outlet] Marseille-area outlet.', { reviewCount: 1400 }),
  place('marseille-fashion-3', 'marseille', 'fashion', 'Marseille shopping mall fashion', 4.2, 'Marseille', '[패션] Marseille 몰 패션.', '[Fashion] Marseille mall fashion.', { reviewCount: 1200 }),
  place('nice-fashion-1', 'nice', 'fashion', 'Nice fashion street', 4.3, 'Nice', '[패션] Nice 메인 패션 거리.', '[Fashion] Nice fashion street.', { reviewCount: 1600 }),
  place('nice-fashion-2', 'nice', 'fashion', 'Nice designer outlet / day trip', 4.2, 'Nice', '[아울렛] Nice 권역 아울렛.', '[Outlet] Nice-area outlet.', { reviewCount: 1400 }),
  place('nice-fashion-3', 'nice', 'fashion', 'Nice shopping mall fashion', 4.2, 'Nice', '[패션] Nice 몰 패션.', '[Fashion] Nice mall fashion.', { reviewCount: 1200 }),
  place('bordeaux-fashion-1', 'bordeaux', 'fashion', 'Bordeaux fashion street', 4.3, 'Bordeaux', '[패션] Bordeaux 메인 패션 거리.', '[Fashion] Bordeaux fashion street.', { reviewCount: 1600 }),
  place('bordeaux-fashion-2', 'bordeaux', 'fashion', 'Bordeaux designer outlet / day trip', 4.2, 'Bordeaux', '[아울렛] Bordeaux 권역 아울렛.', '[Outlet] Bordeaux-area outlet.', { reviewCount: 1400 }),
  place('bordeaux-fashion-3', 'bordeaux', 'fashion', 'Bordeaux shopping mall fashion', 4.2, 'Bordeaux', '[패션] Bordeaux 몰 패션.', '[Fashion] Bordeaux mall fashion.', { reviewCount: 1200 }),
  place('zurich-fashion-1', 'zurich', 'fashion', 'Bahnhofstrasse', 4.5, 'Zurich', '[패션] 반호프슈트라세 럭셔리.', '[Fashion] Bahnhofstrasse luxury.', { reviewCount: 8600 }),
  place('zurich-fashion-2', 'zurich', 'fashion', 'FoxTown / outlet day trip', 4.3, 'Mendrisio', '[아울렛] 폭스타운 아울렛.', '[Outlet] FoxTown outlet.', { reviewCount: 7200 }),
  place('zurich-fashion-3', 'zurich', 'fashion', 'Niederdorf boutiques', 4.3, 'Zurich', '[패션] 니더도르프 부티크.', '[Fashion] Niederdorf boutiques.', { reviewCount: 2400 }),
  place('geneva-fashion-1', 'geneva', 'fashion', 'Geneva fashion street', 4.3, 'Geneva', '[패션] Geneva 메인 패션 거리.', '[Fashion] Geneva fashion street.', { reviewCount: 1600 }),
  place('geneva-fashion-2', 'geneva', 'fashion', 'Geneva designer outlet / day trip', 4.2, 'Geneva', '[아울렛] Geneva 권역 아울렛.', '[Outlet] Geneva-area outlet.', { reviewCount: 1400 }),
  place('geneva-fashion-3', 'geneva', 'fashion', 'Geneva shopping mall fashion', 4.2, 'Geneva', '[패션] Geneva 몰 패션.', '[Fashion] Geneva mall fashion.', { reviewCount: 1200 }),
  place('bern-fashion-1', 'bern', 'fashion', 'Bern fashion street', 4.3, 'Bern', '[패션] Bern 메인 패션 거리.', '[Fashion] Bern fashion street.', { reviewCount: 1600 }),
  place('bern-fashion-2', 'bern', 'fashion', 'Bern designer outlet / day trip', 4.2, 'Bern', '[아울렛] Bern 권역 아울렛.', '[Outlet] Bern-area outlet.', { reviewCount: 1400 }),
  place('bern-fashion-3', 'bern', 'fashion', 'Bern shopping mall fashion', 4.2, 'Bern', '[패션] Bern 몰 패션.', '[Fashion] Bern mall fashion.', { reviewCount: 1200 }),
  place('lucerne-fashion-1', 'lucerne', 'fashion', 'Lucerne fashion street', 4.3, 'Lucerne', '[패션] Lucerne 메인 패션 거리.', '[Fashion] Lucerne fashion street.', { reviewCount: 1600 }),
  place('lucerne-fashion-2', 'lucerne', 'fashion', 'Lucerne designer outlet / day trip', 4.2, 'Lucerne', '[아울렛] Lucerne 권역 아울렛.', '[Outlet] Lucerne-area outlet.', { reviewCount: 1400 }),
  place('lucerne-fashion-3', 'lucerne', 'fashion', 'Lucerne shopping mall fashion', 4.2, 'Lucerne', '[패션] Lucerne 몰 패션.', '[Fashion] Lucerne mall fashion.', { reviewCount: 1200 }),
  place('interlaken-fashion-1', 'interlaken', 'fashion', 'Interlaken fashion street', 4.3, 'Interlaken', '[패션] Interlaken 메인 패션 거리.', '[Fashion] Interlaken fashion street.', { reviewCount: 1600 }),
  place('interlaken-fashion-2', 'interlaken', 'fashion', 'Interlaken designer outlet / day trip', 4.2, 'Interlaken', '[아울렛] Interlaken 권역 아울렛.', '[Outlet] Interlaken-area outlet.', { reviewCount: 1400 }),
  place('interlaken-fashion-3', 'interlaken', 'fashion', 'Interlaken shopping mall fashion', 4.2, 'Interlaken', '[패션] Interlaken 몰 패션.', '[Fashion] Interlaken mall fashion.', { reviewCount: 1200 }),
  place('berlin-fashion-1', 'berlin', 'fashion', 'Kurfürstendamm / Friedrichstraße', 4.4, 'Berlin', '[패션] 쿠담·프리드리히슈트라세.', '[Fashion] Ku\'damm and Friedrichstraße.', { reviewCount: 9800 }),
  place('berlin-fashion-2', 'berlin', 'fashion', 'Outlet Berlin / Designer Outlets', 4.3, 'Berlin region', '[아울렛] 베를린 권역 아울렛.', '[Outlet] Berlin-area outlets.', { reviewCount: 6400 }),
  place('berlin-fashion-3', 'berlin', 'fashion', 'Hackescher Markt boutiques', 4.4, 'Berlin', '[패션] 하케셔 마르크트 부티크.', '[Fashion] Hackescher Markt boutiques.', { reviewCount: 4200 }),
  place('munich-fashion-1', 'munich', 'fashion', 'Munich fashion street', 4.3, 'Munich', '[패션] Munich 메인 패션 거리.', '[Fashion] Munich fashion street.', { reviewCount: 1600 }),
  place('munich-fashion-2', 'munich', 'fashion', 'Munich designer outlet / day trip', 4.2, 'Munich', '[아울렛] Munich 권역 아울렛.', '[Outlet] Munich-area outlet.', { reviewCount: 1400 }),
  place('munich-fashion-3', 'munich', 'fashion', 'Munich shopping mall fashion', 4.2, 'Munich', '[패션] Munich 몰 패션.', '[Fashion] Munich mall fashion.', { reviewCount: 1200 }),
  place('hamburg-fashion-1', 'hamburg', 'fashion', 'Hamburg fashion street', 4.3, 'Hamburg', '[패션] Hamburg 메인 패션 거리.', '[Fashion] Hamburg fashion street.', { reviewCount: 1600 }),
  place('hamburg-fashion-2', 'hamburg', 'fashion', 'Hamburg designer outlet / day trip', 4.2, 'Hamburg', '[아울렛] Hamburg 권역 아울렛.', '[Outlet] Hamburg-area outlet.', { reviewCount: 1400 }),
  place('hamburg-fashion-3', 'hamburg', 'fashion', 'Hamburg shopping mall fashion', 4.2, 'Hamburg', '[패션] Hamburg 몰 패션.', '[Fashion] Hamburg mall fashion.', { reviewCount: 1200 }),
  place('cologne-fashion-1', 'cologne', 'fashion', 'Cologne fashion street', 4.3, 'Cologne', '[패션] Cologne 메인 패션 거리.', '[Fashion] Cologne fashion street.', { reviewCount: 1600 }),
  place('cologne-fashion-2', 'cologne', 'fashion', 'Cologne designer outlet / day trip', 4.2, 'Cologne', '[아울렛] Cologne 권역 아울렛.', '[Outlet] Cologne-area outlet.', { reviewCount: 1400 }),
  place('cologne-fashion-3', 'cologne', 'fashion', 'Cologne shopping mall fashion', 4.2, 'Cologne', '[패션] Cologne 몰 패션.', '[Fashion] Cologne mall fashion.', { reviewCount: 1200 }),
  place('frankfurt-fashion-1', 'frankfurt', 'fashion', 'Frankfurt fashion street', 4.3, 'Frankfurt', '[패션] Frankfurt 메인 패션 거리.', '[Fashion] Frankfurt fashion street.', { reviewCount: 1600 }),
  place('frankfurt-fashion-2', 'frankfurt', 'fashion', 'Frankfurt designer outlet / day trip', 4.2, 'Frankfurt', '[아울렛] Frankfurt 권역 아울렛.', '[Outlet] Frankfurt-area outlet.', { reviewCount: 1400 }),
  place('frankfurt-fashion-3', 'frankfurt', 'fashion', 'Frankfurt shopping mall fashion', 4.2, 'Frankfurt', '[패션] Frankfurt 몰 패션.', '[Fashion] Frankfurt mall fashion.', { reviewCount: 1200 }),
  place('rome-fashion-1', 'rome', 'fashion', 'Via Condotti / Via del Corso', 4.5, 'Rome', '[패션] 콘도티·델 코르소.', '[Fashion] Condotti and Del Corso.', { reviewCount: 12000 }),
  place('rome-fashion-2', 'rome', 'fashion', 'Castel Romano Designer Outlet', 4.3, 'Rome', '[아울렛] 카스텔 로마노 아울렛.', '[Outlet] Castel Romano outlet.', { reviewCount: 8600 }),
  place('rome-fashion-3', 'rome', 'fashion', 'Via del Governo Vecchio boutiques', 4.4, 'Rome', '[패션] 구시가 부티크.', '[Fashion] Old-town boutiques.', { reviewCount: 3100 }),
  place('milan-fashion-1', 'milan', 'fashion', 'Quadrilatero della Moda', 4.6, 'Milan', '[패션] 패션 사각형 지구.', '[Fashion] Fashion Quadrilatero.', { reviewCount: 15000 }),
  place('milan-fashion-2', 'milan', 'fashion', 'Serravalle Designer Outlet', 4.4, 'Serravalle', '[아울렛] 세라발레 아울렛.', '[Outlet] Serravalle outlet.', { reviewCount: 12000 }),
  place('milan-fashion-3', 'milan', 'fashion', 'Corso Buenos Aires', 4.3, 'Milan', '[패션] 부에노스아이레스 거리.', '[Fashion] Corso Buenos Aires.', { reviewCount: 7800 }),
  place('florence-fashion-1', 'florence', 'fashion', 'Florence fashion street', 4.3, 'Florence', '[패션] Florence 메인 패션 거리.', '[Fashion] Florence fashion street.', { reviewCount: 1600 }),
  place('florence-fashion-2', 'florence', 'fashion', 'Florence designer outlet / day trip', 4.2, 'Florence', '[아울렛] Florence 권역 아울렛.', '[Outlet] Florence-area outlet.', { reviewCount: 1400 }),
  place('florence-fashion-3', 'florence', 'fashion', 'Florence shopping mall fashion', 4.2, 'Florence', '[패션] Florence 몰 패션.', '[Fashion] Florence mall fashion.', { reviewCount: 1200 }),
  place('venice-fashion-1', 'venice', 'fashion', 'Venice fashion street', 4.3, 'Venice', '[패션] Venice 메인 패션 거리.', '[Fashion] Venice fashion street.', { reviewCount: 1600 }),
  place('venice-fashion-2', 'venice', 'fashion', 'Venice designer outlet / day trip', 4.2, 'Venice', '[아울렛] Venice 권역 아울렛.', '[Outlet] Venice-area outlet.', { reviewCount: 1400 }),
  place('venice-fashion-3', 'venice', 'fashion', 'Venice shopping mall fashion', 4.2, 'Venice', '[패션] Venice 몰 패션.', '[Fashion] Venice mall fashion.', { reviewCount: 1200 }),
  place('naples-fashion-1', 'naples', 'fashion', 'Naples fashion street', 4.3, 'Naples', '[패션] Naples 메인 패션 거리.', '[Fashion] Naples fashion street.', { reviewCount: 1600 }),
  place('naples-fashion-2', 'naples', 'fashion', 'Naples designer outlet / day trip', 4.2, 'Naples', '[아울렛] Naples 권역 아울렛.', '[Outlet] Naples-area outlet.', { reviewCount: 1400 }),
  place('naples-fashion-3', 'naples', 'fashion', 'Naples shopping mall fashion', 4.2, 'Naples', '[패션] Naples 몰 패션.', '[Fashion] Naples mall fashion.', { reviewCount: 1200 }),

  // —— fr/ch/de/it city extras ——
  place('strasbourg-fashion-1', 'strasbourg', 'fashion', 'Strasbourg fashion street', 4.3, 'Strasbourg', '[패션] Strasbourg 메인 패션 거리.', '[Fashion] Strasbourg fashion street.', { reviewCount: 1400 }),
  place('strasbourg-fashion-2', 'strasbourg', 'fashion', 'Strasbourg outlet / day trip', 4.2, 'Strasbourg', '[아울렛] Strasbourg 권역 아울렛.', '[Outlet] Strasbourg-area outlet.', { reviewCount: 1200 }),
  place('strasbourg-fashion-3', 'strasbourg', 'fashion', 'Strasbourg mall fashion', 4.2, 'Strasbourg', '[패션] Strasbourg 몰 패션.', '[Fashion] Strasbourg mall fashion.', { reviewCount: 1000 }),
  place('annecy-fashion-1', 'annecy', 'fashion', 'Annecy fashion street', 4.3, 'Annecy', '[패션] Annecy 메인 패션 거리.', '[Fashion] Annecy fashion street.', { reviewCount: 1400 }),
  place('annecy-fashion-2', 'annecy', 'fashion', 'Annecy outlet / day trip', 4.2, 'Annecy', '[아울렛] Annecy 권역 아울렛.', '[Outlet] Annecy-area outlet.', { reviewCount: 1200 }),
  place('annecy-fashion-3', 'annecy', 'fashion', 'Annecy mall fashion', 4.2, 'Annecy', '[패션] Annecy 몰 패션.', '[Fashion] Annecy mall fashion.', { reviewCount: 1000 }),
  place('avignon-fashion-1', 'avignon', 'fashion', 'Avignon fashion street', 4.3, 'Avignon', '[패션] Avignon 메인 패션 거리.', '[Fashion] Avignon fashion street.', { reviewCount: 1400 }),
  place('avignon-fashion-2', 'avignon', 'fashion', 'Avignon outlet / day trip', 4.2, 'Avignon', '[아울렛] Avignon 권역 아울렛.', '[Outlet] Avignon-area outlet.', { reviewCount: 1200 }),
  place('avignon-fashion-3', 'avignon', 'fashion', 'Avignon mall fashion', 4.2, 'Avignon', '[패션] Avignon 몰 패션.', '[Fashion] Avignon mall fashion.', { reviewCount: 1000 }),
  place('basel-fashion-1', 'basel', 'fashion', 'Basel fashion street', 4.3, 'Basel', '[패션] Basel 메인 패션 거리.', '[Fashion] Basel fashion street.', { reviewCount: 1400 }),
  place('basel-fashion-2', 'basel', 'fashion', 'Basel outlet / day trip', 4.2, 'Basel', '[아울렛] Basel 권역 아울렛.', '[Outlet] Basel-area outlet.', { reviewCount: 1200 }),
  place('basel-fashion-3', 'basel', 'fashion', 'Basel mall fashion', 4.2, 'Basel', '[패션] Basel 몰 패션.', '[Fashion] Basel mall fashion.', { reviewCount: 1000 }),
  place('zermatt-fashion-1', 'zermatt', 'fashion', 'Zermatt fashion street', 4.3, 'Zermatt', '[패션] Zermatt 메인 패션 거리.', '[Fashion] Zermatt fashion street.', { reviewCount: 1400 }),
  place('zermatt-fashion-2', 'zermatt', 'fashion', 'Zermatt outlet / day trip', 4.2, 'Zermatt', '[아울렛] Zermatt 권역 아울렛.', '[Outlet] Zermatt-area outlet.', { reviewCount: 1200 }),
  place('zermatt-fashion-3', 'zermatt', 'fashion', 'Zermatt mall fashion', 4.2, 'Zermatt', '[패션] Zermatt 몰 패션.', '[Fashion] Zermatt mall fashion.', { reviewCount: 1000 }),
  place('lausanne-fashion-1', 'lausanne', 'fashion', 'Lausanne fashion street', 4.3, 'Lausanne', '[패션] Lausanne 메인 패션 거리.', '[Fashion] Lausanne fashion street.', { reviewCount: 1400 }),
  place('lausanne-fashion-2', 'lausanne', 'fashion', 'Lausanne outlet / day trip', 4.2, 'Lausanne', '[아울렛] Lausanne 권역 아울렛.', '[Outlet] Lausanne-area outlet.', { reviewCount: 1200 }),
  place('lausanne-fashion-3', 'lausanne', 'fashion', 'Lausanne mall fashion', 4.2, 'Lausanne', '[패션] Lausanne 몰 패션.', '[Fashion] Lausanne mall fashion.', { reviewCount: 1000 }),
  place('dresden-fashion-1', 'dresden', 'fashion', 'Dresden fashion street', 4.3, 'Dresden', '[패션] Dresden 메인 패션 거리.', '[Fashion] Dresden fashion street.', { reviewCount: 1400 }),
  place('dresden-fashion-2', 'dresden', 'fashion', 'Dresden outlet / day trip', 4.2, 'Dresden', '[아울렛] Dresden 권역 아울렛.', '[Outlet] Dresden-area outlet.', { reviewCount: 1200 }),
  place('dresden-fashion-3', 'dresden', 'fashion', 'Dresden mall fashion', 4.2, 'Dresden', '[패션] Dresden 몰 패션.', '[Fashion] Dresden mall fashion.', { reviewCount: 1000 }),
  place('heidelberg-fashion-1', 'heidelberg', 'fashion', 'Heidelberg fashion street', 4.3, 'Heidelberg', '[패션] Heidelberg 메인 패션 거리.', '[Fashion] Heidelberg fashion street.', { reviewCount: 1400 }),
  place('heidelberg-fashion-2', 'heidelberg', 'fashion', 'Heidelberg outlet / day trip', 4.2, 'Heidelberg', '[아울렛] Heidelberg 권역 아울렛.', '[Outlet] Heidelberg-area outlet.', { reviewCount: 1200 }),
  place('heidelberg-fashion-3', 'heidelberg', 'fashion', 'Heidelberg mall fashion', 4.2, 'Heidelberg', '[패션] Heidelberg 몰 패션.', '[Fashion] Heidelberg mall fashion.', { reviewCount: 1000 }),
  place('nuremberg-fashion-1', 'nuremberg', 'fashion', 'Nuremberg fashion street', 4.3, 'Nuremberg', '[패션] Nuremberg 메인 패션 거리.', '[Fashion] Nuremberg fashion street.', { reviewCount: 1400 }),
  place('nuremberg-fashion-2', 'nuremberg', 'fashion', 'Nuremberg outlet / day trip', 4.2, 'Nuremberg', '[아울렛] Nuremberg 권역 아울렛.', '[Outlet] Nuremberg-area outlet.', { reviewCount: 1200 }),
  place('nuremberg-fashion-3', 'nuremberg', 'fashion', 'Nuremberg mall fashion', 4.2, 'Nuremberg', '[패션] Nuremberg 몰 패션.', '[Fashion] Nuremberg mall fashion.', { reviewCount: 1000 }),
  place('bologna-fashion-1', 'bologna', 'fashion', 'Bologna fashion street', 4.3, 'Bologna', '[패션] Bologna 메인 패션 거리.', '[Fashion] Bologna fashion street.', { reviewCount: 1400 }),
  place('bologna-fashion-2', 'bologna', 'fashion', 'Bologna outlet / day trip', 4.2, 'Bologna', '[아울렛] Bologna 권역 아울렛.', '[Outlet] Bologna-area outlet.', { reviewCount: 1200 }),
  place('bologna-fashion-3', 'bologna', 'fashion', 'Bologna mall fashion', 4.2, 'Bologna', '[패션] Bologna 몰 패션.', '[Fashion] Bologna mall fashion.', { reviewCount: 1000 }),
  place('verona-fashion-1', 'verona', 'fashion', 'Verona fashion street', 4.3, 'Verona', '[패션] Verona 메인 패션 거리.', '[Fashion] Verona fashion street.', { reviewCount: 1400 }),
  place('verona-fashion-2', 'verona', 'fashion', 'Verona outlet / day trip', 4.2, 'Verona', '[아울렛] Verona 권역 아울렛.', '[Outlet] Verona-area outlet.', { reviewCount: 1200 }),
  place('verona-fashion-3', 'verona', 'fashion', 'Verona mall fashion', 4.2, 'Verona', '[패션] Verona 몰 패션.', '[Fashion] Verona mall fashion.', { reviewCount: 1000 }),
  place('turin-fashion-1', 'turin', 'fashion', 'Turin fashion street', 4.3, 'Turin', '[패션] Turin 메인 패션 거리.', '[Fashion] Turin fashion street.', { reviewCount: 1400 }),
  place('turin-fashion-2', 'turin', 'fashion', 'Turin outlet / day trip', 4.2, 'Turin', '[아울렛] Turin 권역 아울렛.', '[Outlet] Turin-area outlet.', { reviewCount: 1200 }),
  place('turin-fashion-3', 'turin', 'fashion', 'Turin mall fashion', 4.2, 'Turin', '[패션] Turin 몰 패션.', '[Fashion] Turin mall fashion.', { reviewCount: 1000 }),

  // —— fr/ch/de/it city batch2 ——
  place('toulouse-fashion-1', 'toulouse', 'fashion', 'Toulouse fashion street', 4.3, 'Toulouse', '[패션] Toulouse 메인 패션 거리.', '[Fashion] Toulouse fashion street.', { reviewCount: 1200 }),
  place('toulouse-fashion-2', 'toulouse', 'fashion', 'Toulouse outlet / day trip', 4.2, 'Toulouse', '[아울렛] Toulouse 권역 아울렛.', '[Outlet] Toulouse-area outlet.', { reviewCount: 1000 }),
  place('toulouse-fashion-3', 'toulouse', 'fashion', 'Toulouse mall fashion', 4.2, 'Toulouse', '[패션] Toulouse 몰 패션.', '[Fashion] Toulouse mall fashion.', { reviewCount: 900 }),
  place('montpellier-fashion-1', 'montpellier', 'fashion', 'Montpellier fashion street', 4.3, 'Montpellier', '[패션] Montpellier 메인 패션 거리.', '[Fashion] Montpellier fashion street.', { reviewCount: 1200 }),
  place('montpellier-fashion-2', 'montpellier', 'fashion', 'Montpellier outlet / day trip', 4.2, 'Montpellier', '[아울렛] Montpellier 권역 아울렛.', '[Outlet] Montpellier-area outlet.', { reviewCount: 1000 }),
  place('montpellier-fashion-3', 'montpellier', 'fashion', 'Montpellier mall fashion', 4.2, 'Montpellier', '[패션] Montpellier 몰 패션.', '[Fashion] Montpellier mall fashion.', { reviewCount: 900 }),
  place('dijon-fashion-1', 'dijon', 'fashion', 'Dijon fashion street', 4.3, 'Dijon', '[패션] Dijon 메인 패션 거리.', '[Fashion] Dijon fashion street.', { reviewCount: 1200 }),
  place('dijon-fashion-2', 'dijon', 'fashion', 'Dijon outlet / day trip', 4.2, 'Dijon', '[아울렛] Dijon 권역 아울렛.', '[Outlet] Dijon-area outlet.', { reviewCount: 1000 }),
  place('dijon-fashion-3', 'dijon', 'fashion', 'Dijon mall fashion', 4.2, 'Dijon', '[패션] Dijon 몰 패션.', '[Fashion] Dijon mall fashion.', { reviewCount: 900 }),
  place('chamonix-fashion-1', 'chamonix', 'fashion', 'Chamonix fashion street', 4.3, 'Chamonix', '[패션] Chamonix 메인 패션 거리.', '[Fashion] Chamonix fashion street.', { reviewCount: 1200 }),
  place('chamonix-fashion-2', 'chamonix', 'fashion', 'Chamonix outlet / day trip', 4.2, 'Chamonix', '[아울렛] Chamonix 권역 아울렛.', '[Outlet] Chamonix-area outlet.', { reviewCount: 1000 }),
  place('chamonix-fashion-3', 'chamonix', 'fashion', 'Chamonix mall fashion', 4.2, 'Chamonix', '[패션] Chamonix 몰 패션.', '[Fashion] Chamonix mall fashion.', { reviewCount: 900 }),
  place('lugano-fashion-1', 'lugano', 'fashion', 'Lugano fashion street', 4.3, 'Lugano', '[패션] Lugano 메인 패션 거리.', '[Fashion] Lugano fashion street.', { reviewCount: 1200 }),
  place('lugano-fashion-2', 'lugano', 'fashion', 'Lugano outlet / day trip', 4.2, 'Lugano', '[아울렛] Lugano 권역 아울렛.', '[Outlet] Lugano-area outlet.', { reviewCount: 1000 }),
  place('lugano-fashion-3', 'lugano', 'fashion', 'Lugano mall fashion', 4.2, 'Lugano', '[패션] Lugano 몰 패션.', '[Fashion] Lugano mall fashion.', { reviewCount: 900 }),
  place('montreux-fashion-1', 'montreux', 'fashion', 'Montreux fashion street', 4.3, 'Montreux', '[패션] Montreux 메인 패션 거리.', '[Fashion] Montreux fashion street.', { reviewCount: 1200 }),
  place('montreux-fashion-2', 'montreux', 'fashion', 'Montreux outlet / day trip', 4.2, 'Montreux', '[아울렛] Montreux 권역 아울렛.', '[Outlet] Montreux-area outlet.', { reviewCount: 1000 }),
  place('montreux-fashion-3', 'montreux', 'fashion', 'Montreux mall fashion', 4.2, 'Montreux', '[패션] Montreux 몰 패션.', '[Fashion] Montreux mall fashion.', { reviewCount: 900 }),
  place('grindelwald-fashion-1', 'grindelwald', 'fashion', 'Grindelwald fashion street', 4.3, 'Grindelwald', '[패션] Grindelwald 메인 패션 거리.', '[Fashion] Grindelwald fashion street.', { reviewCount: 1200 }),
  place('grindelwald-fashion-2', 'grindelwald', 'fashion', 'Grindelwald outlet / day trip', 4.2, 'Grindelwald', '[아울렛] Grindelwald 권역 아울렛.', '[Outlet] Grindelwald-area outlet.', { reviewCount: 1000 }),
  place('grindelwald-fashion-3', 'grindelwald', 'fashion', 'Grindelwald mall fashion', 4.2, 'Grindelwald', '[패션] Grindelwald 몰 패션.', '[Fashion] Grindelwald mall fashion.', { reviewCount: 900 }),
  place('st-moritz-fashion-1', 'st-moritz', 'fashion', 'St. Moritz fashion street', 4.3, 'St. Moritz', '[패션] St. Moritz 메인 패션 거리.', '[Fashion] St. Moritz fashion street.', { reviewCount: 1200 }),
  place('st-moritz-fashion-2', 'st-moritz', 'fashion', 'St. Moritz outlet / day trip', 4.2, 'St. Moritz', '[아울렛] St. Moritz 권역 아울렛.', '[Outlet] St. Moritz-area outlet.', { reviewCount: 1000 }),
  place('st-moritz-fashion-3', 'st-moritz', 'fashion', 'St. Moritz mall fashion', 4.2, 'St. Moritz', '[패션] St. Moritz 몰 패션.', '[Fashion] St. Moritz mall fashion.', { reviewCount: 900 }),
  place('stuttgart-fashion-1', 'stuttgart', 'fashion', 'Stuttgart fashion street', 4.3, 'Stuttgart', '[패션] Stuttgart 메인 패션 거리.', '[Fashion] Stuttgart fashion street.', { reviewCount: 1200 }),
  place('stuttgart-fashion-2', 'stuttgart', 'fashion', 'Stuttgart outlet / day trip', 4.2, 'Stuttgart', '[아울렛] Stuttgart 권역 아울렛.', '[Outlet] Stuttgart-area outlet.', { reviewCount: 1000 }),
  place('stuttgart-fashion-3', 'stuttgart', 'fashion', 'Stuttgart mall fashion', 4.2, 'Stuttgart', '[패션] Stuttgart 몰 패션.', '[Fashion] Stuttgart mall fashion.', { reviewCount: 900 }),
  place('leipzig-fashion-1', 'leipzig', 'fashion', 'Leipzig fashion street', 4.3, 'Leipzig', '[패션] Leipzig 메인 패션 거리.', '[Fashion] Leipzig fashion street.', { reviewCount: 1200 }),
  place('leipzig-fashion-2', 'leipzig', 'fashion', 'Leipzig outlet / day trip', 4.2, 'Leipzig', '[아울렛] Leipzig 권역 아울렛.', '[Outlet] Leipzig-area outlet.', { reviewCount: 1000 }),
  place('leipzig-fashion-3', 'leipzig', 'fashion', 'Leipzig mall fashion', 4.2, 'Leipzig', '[패션] Leipzig 몰 패션.', '[Fashion] Leipzig mall fashion.', { reviewCount: 900 }),
  place('rothenburg-fashion-1', 'rothenburg', 'fashion', 'Rothenburg ob der Tauber fashion street', 4.3, 'Rothenburg ob der Tauber', '[패션] Rothenburg ob der Tauber 메인 패션 거리.', '[Fashion] Rothenburg ob der Tauber fashion street.', { reviewCount: 1200 }),
  place('rothenburg-fashion-2', 'rothenburg', 'fashion', 'Rothenburg ob der Tauber outlet / day trip', 4.2, 'Rothenburg ob der Tauber', '[아울렛] Rothenburg ob der Tauber 권역 아울렛.', '[Outlet] Rothenburg ob der Tauber-area outlet.', { reviewCount: 1000 }),
  place('rothenburg-fashion-3', 'rothenburg', 'fashion', 'Rothenburg ob der Tauber mall fashion', 4.2, 'Rothenburg ob der Tauber', '[패션] Rothenburg ob der Tauber 몰 패션.', '[Fashion] Rothenburg ob der Tauber mall fashion.', { reviewCount: 900 }),
  place('potsdam-fashion-1', 'potsdam', 'fashion', 'Potsdam fashion street', 4.3, 'Potsdam', '[패션] Potsdam 메인 패션 거리.', '[Fashion] Potsdam fashion street.', { reviewCount: 1200 }),
  place('potsdam-fashion-2', 'potsdam', 'fashion', 'Potsdam outlet / day trip', 4.2, 'Potsdam', '[아울렛] Potsdam 권역 아울렛.', '[Outlet] Potsdam-area outlet.', { reviewCount: 1000 }),
  place('potsdam-fashion-3', 'potsdam', 'fashion', 'Potsdam mall fashion', 4.2, 'Potsdam', '[패션] Potsdam 몰 패션.', '[Fashion] Potsdam mall fashion.', { reviewCount: 900 }),
  place('amalfi-fashion-1', 'amalfi', 'fashion', 'Amalfi fashion street', 4.3, 'Amalfi', '[패션] Amalfi 메인 패션 거리.', '[Fashion] Amalfi fashion street.', { reviewCount: 1200 }),
  place('amalfi-fashion-2', 'amalfi', 'fashion', 'Amalfi outlet / day trip', 4.2, 'Amalfi', '[아울렛] Amalfi 권역 아울렛.', '[Outlet] Amalfi-area outlet.', { reviewCount: 1000 }),
  place('amalfi-fashion-3', 'amalfi', 'fashion', 'Amalfi mall fashion', 4.2, 'Amalfi', '[패션] Amalfi 몰 패션.', '[Fashion] Amalfi mall fashion.', { reviewCount: 900 }),
  place('siena-fashion-1', 'siena', 'fashion', 'Siena fashion street', 4.3, 'Siena', '[패션] Siena 메인 패션 거리.', '[Fashion] Siena fashion street.', { reviewCount: 1200 }),
  place('siena-fashion-2', 'siena', 'fashion', 'Siena outlet / day trip', 4.2, 'Siena', '[아울렛] Siena 권역 아울렛.', '[Outlet] Siena-area outlet.', { reviewCount: 1000 }),
  place('siena-fashion-3', 'siena', 'fashion', 'Siena mall fashion', 4.2, 'Siena', '[패션] Siena 몰 패션.', '[Fashion] Siena mall fashion.', { reviewCount: 900 }),
  place('genoa-fashion-1', 'genoa', 'fashion', 'Genoa fashion street', 4.3, 'Genoa', '[패션] Genoa 메인 패션 거리.', '[Fashion] Genoa fashion street.', { reviewCount: 1200 }),
  place('genoa-fashion-2', 'genoa', 'fashion', 'Genoa outlet / day trip', 4.2, 'Genoa', '[아울렛] Genoa 권역 아울렛.', '[Outlet] Genoa-area outlet.', { reviewCount: 1000 }),
  place('genoa-fashion-3', 'genoa', 'fashion', 'Genoa mall fashion', 4.2, 'Genoa', '[패션] Genoa 몰 패션.', '[Fashion] Genoa mall fashion.', { reviewCount: 900 }),
  place('palermo-fashion-1', 'palermo', 'fashion', 'Palermo fashion street', 4.3, 'Palermo', '[패션] Palermo 메인 패션 거리.', '[Fashion] Palermo fashion street.', { reviewCount: 1200 }),
  place('palermo-fashion-2', 'palermo', 'fashion', 'Palermo outlet / day trip', 4.2, 'Palermo', '[아울렛] Palermo 권역 아울렛.', '[Outlet] Palermo-area outlet.', { reviewCount: 1000 }),
  place('palermo-fashion-3', 'palermo', 'fashion', 'Palermo mall fashion', 4.2, 'Palermo', '[패션] Palermo 몰 패션.', '[Fashion] Palermo mall fashion.', { reviewCount: 900 }),
]
