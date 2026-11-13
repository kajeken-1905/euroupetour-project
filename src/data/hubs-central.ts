import type { RawCityHubs } from './hubs'

type Raw = [string, string, string]
const FRA = (note = '프랑크푸르트|Frankfurt'): Raw => ['Frankfurt am Main (FRA)', '프랑크푸르트 공항 (FRA)', note]
const MUC = (note = '뮌헨|Munich'): Raw => ['München (MUC)', '뮌헨 공항 (MUC)', note]
const BER = (note = '베를린|Berlin'): Raw => ['Berlin Brandenburg (BER)', '베를린 브란덴부르크 공항 (BER)', note]
const BRU = (note = '브뤼셀|Brussels'): Raw => ['Brussels Airport (BRU)', '브뤼셀 공항 (BRU)', note]
const AMS = (note = '암스테르담|Amsterdam'): Raw => ['Amsterdam Schiphol (AMS)', '암스테르담 스히폴 공항 (AMS)', note]
const LUX = (note = '룩셈부르크 시티|Luxembourg City'): Raw => ['Luxembourg Findel (LUX)', '룩셈부르크 공항 (LUX)', note]
const MAD = (note = '마드리드|Madrid'): Raw => ['Madrid–Barajas (MAD)', '마드리드 바라하스 공항 (MAD)', note]
const BCN = (note = '바르셀로나|Barcelona'): Raw => ['Barcelona–El Prat (BCN)', '바르셀로나 엘프라트 공항 (BCN)', note]
const AGP = (note = '말라가|Málaga'): Raw => ['Málaga–Costa del Sol (AGP)', '말라가 공항 (AGP)', note]
const OPO = (note = '포르투|Porto'): Raw => ['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', note]
const LIS = (note = '리스본|Lisbon'): Raw => ['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)', note]
const FAO = (note = '파루|Faro'): Raw => ['Faro (FAO)', '파루 공항 (FAO)', note]
const CPH = (note = '코펜하겐|Copenhagen'): Raw => ['Copenhagen Kastrup (CPH)', '코펜하겐 카스트루프 공항 (CPH)', note]
const ARN = (note = '스톡홀름|Stockholm'): Raw => ['Stockholm Arlanda (ARN)', '스톡홀름 알란다 공항 (ARN)', note]
const HEL = (note = '헬싱키|Helsinki'): Raw => ['Helsinki-Vantaa (HEL)', '헬싱키 반타 공항 (HEL)', note]
const BGO = (note = '베르겐|Bergen'): Raw => ['Bergen Flesland (BGO)', '베르겐 공항 (BGO)', note]
const KEF = (note = '케플라비크|Keflavík'): Raw => ['Keflavík International (KEF)', '케플라비크 국제공항 (KEF)', note]
const VIE = (note = '오스트리아 빈|Vienna, Austria'): Raw => ['Wien-Schwechat (VIE)', '빈 공항 (VIE)', note]
const SZG = (note = '잘츠부르크|Salzburg'): Raw => ['Salzburg W. A. Mozart (SZG)', '잘츠부르크 공항 (SZG)', note]
const PRG = (note = '프라하|Prague'): Raw => ['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', note]
const BTS = (note = '브라티슬라바|Bratislava'): Raw => ['Bratislava M. R. Štefánik (BTS)', '브라티슬라바 공항 (BTS)', note]
const BUD = (note = '부다페스트|Budapest'): Raw => ['Budapest Liszt Ferenc (BUD)', '부다페스트 공항 (BUD)', note]
const KRK = (note = '크라쿠프|Kraków'): Raw => ['Kraków John Paul II (KRK)', '크라쿠프 공항 (KRK)', note]

export const hubsCentral: Record<string, RawCityHubs> = {
  // —— de ——
  hamburg: {
    air: [['Hamburg (HAM)', '함부르크 공항 (HAM)']],
    rail: [
      ['Hamburg Hbf', '함부르크 중앙역'],
      ['Hamburg-Altona', '함부르크 알토나역'],
    ],
    bus: [['ZOB Hamburg', '함부르크 중앙버스터미널 (ZOB)']],
  },
  lubeck: {
    air: [['Hamburg (HAM)', '함부르크 공항 (HAM)', '함부르크|Hamburg']],
    rail: [['Lübeck Hbf', '뤼베크 중앙역']],
  },
  bremen: {
    air: [['Bremen (BRE)', '브레멘 공항 (BRE)']],
    rail: [['Bremen Hbf', '브레멘 중앙역']],
  },
  berlin: {
    air: [['Berlin Brandenburg (BER)', '베를린 브란덴부르크 공항 (BER)']],
    rail: [
      ['Berlin Hbf', '베를린 중앙역'],
      ['Berlin Südkreuz', '베를린 쥐트크로이츠역'],
      ['Berlin Ostbahnhof', '베를린 동역'],
    ],
    bus: [['ZOB Berlin', '베를린 중앙버스터미널 (ZOB)']],
  },
  potsdam: {
    air: [BER()],
    rail: [['Potsdam Hbf', '포츠담 중앙역']],
  },
  aachen: {
    air: [['Cologne Bonn (CGN)', '쾰른 본 공항 (CGN)', '쾰른|Cologne'], ['Düsseldorf (DUS)', '뒤셀도르프 공항 (DUS)', '뒤셀도르프|Düsseldorf']],
    rail: [['Aachen Hbf', '아헨 중앙역']],
  },
  cochem: {
    air: [['Köln Bonn (CGN)', '쾰른 본 공항 (CGN)', '쾰른|Cologne'], FRA()],
    rail: [['Cochem (Mosel)', '코헴역']],
  },
  cologne: {
    air: [
      ['Köln Bonn (CGN)', '쾰른 본 공항 (CGN)'],
      ['Düsseldorf (DUS)', '뒤셀도르프 공항 (DUS)', '뒤셀도르프|Düsseldorf'],
    ],
    rail: [
      ['Köln Hbf', '쾰른 중앙역'],
      ['Köln Messe/Deutz', '쾰른 메세/도이츠역'],
    ],
  },
  rudesheim: {
    air: [FRA()],
    rail: [['Rüdesheim (Rhein)', '뤼데스하임역']],
  },
  trier: {
    air: [LUX(), FRA()],
    rail: [['Trier Hbf', '트리어 중앙역']],
  },
  frankfurt: {
    air: [['Frankfurt am Main (FRA)', '프랑크푸르트 공항 (FRA)']],
    rail: [
      ['Frankfurt (Main) Hbf', '프랑크푸르트 중앙역'],
      ['Frankfurt Flughafen Fernbahnhof', '프랑크푸르트 공항 장거리역'],
    ],
    bus: [['Fernbusbahnhof Frankfurt', '프랑크푸르트 장거리 버스터미널', '중앙역 남쪽|south side of the main station']],
  },
  leipzig: {
    air: [['Leipzig/Halle (LEJ)', '라이프치히/할레 공항 (LEJ)']],
    rail: [['Leipzig Hbf', '라이프치히 중앙역']],
    bus: [['Fernbusterminal Leipzig', '라이프치히 장거리 버스터미널']],
  },
  weimar: {
    air: [['Erfurt-Weimar (ERF)', '에르푸르트-바이마르 공항 (ERF)'], ['Leipzig/Halle (LEJ)', '라이프치히/할레 공항 (LEJ)', '라이프치히|Leipzig']],
    rail: [['Weimar', '바이마르역']],
  },
  dresden: {
    air: [['Dresden (DRS)', '드레스덴 공항 (DRS)']],
    rail: [
      ['Dresden Hbf', '드레스덴 중앙역'],
      ['Dresden-Neustadt', '드레스덴 노이슈타트역'],
    ],
  },
  gorlitz: {
    air: [['Dresden (DRS)', '드레스덴 공항 (DRS)', '드레스덴|Dresden']],
    rail: [['Görlitz', '괴를리츠역']],
  },
  heidelberg: {
    air: [FRA()],
    rail: [['Heidelberg Hbf', '하이델베르크 중앙역']],
  },
  stuttgart: {
    air: [['Stuttgart (STR)', '슈투트가르트 공항 (STR)']],
    rail: [['Stuttgart Hbf', '슈투트가르트 중앙역']],
    bus: [['Stuttgart Airport Busterminal (SAB)', '슈투트가르트 공항 버스터미널 (SAB)', '공항 옆|at the airport']],
  },
  rothenburg: {
    air: [['Nürnberg (NUE)', '뉘른베르크 공항 (NUE)', '뉘른베르크|Nuremberg'], FRA()],
    rail: [['Rothenburg ob der Tauber', '로텐부르크역', '슈타이나흐에서 환승|change at Steinach']],
  },
  bamberg: {
    air: [['Nürnberg (NUE)', '뉘른베르크 공항 (NUE)', '뉘른베르크|Nuremberg']],
    rail: [['Bamberg', '밤베르크역']],
  },
  wurzburg: {
    air: [FRA(), ['Nürnberg (NUE)', '뉘른베르크 공항 (NUE)', '뉘른베르크|Nuremberg']],
    rail: [['Würzburg Hbf', '뷔르츠부르크 중앙역']],
  },
  regensburg: {
    air: [MUC(), ['Nürnberg (NUE)', '뉘른베르크 공항 (NUE)', '뉘른베르크|Nuremberg']],
    rail: [['Regensburg Hbf', '레겐스부르크 중앙역']],
  },
  'garmisch-partenkirchen': {
    air: [MUC(), ['Innsbruck (INN)', '인스브루크 공항 (INN)', '오스트리아 인스브루크|Innsbruck, Austria']],
    rail: [['Garmisch-Partenkirchen', '가르미슈파르텐키르헨역']],
  },
  nuremberg: {
    air: [['Nürnberg (NUE)', '뉘른베르크 공항 (NUE)']],
    rail: [['Nürnberg Hbf', '뉘른베르크 중앙역']],
    bus: [['ZOB Nürnberg', '뉘른베르크 중앙버스터미널 (ZOB)']],
  },
  berchtesgaden: {
    air: [SZG(), MUC()],
    rail: [['Berchtesgaden Hbf', '베르히테스가덴 중앙역', '프라이라싱에서 환승|change at Freilassing']],
    bus: [['Berchtesgaden Hbf (Bus 840)', '중앙역 버스 정류장', '잘츠부르크행 840번|bus 840 to Salzburg']],
  },
  freiburg: {
    air: [['EuroAirport Basel-Mulhouse-Freiburg (BSL)', '유로에어포트 (BSL)', '스위스 바젤|Basel, Switzerland'], FRA()],
    rail: [['Freiburg (Breisgau) Hbf', '프라이부르크 중앙역']],
  },
  lindau: {
    air: [['Friedrichshafen (FDH)', '프리드리히스하펜 공항 (FDH)', '프리드리히스하펜|Friedrichshafen'], ['Zürich (ZRH)', '취리히 공항 (ZRH)', '스위스 취리히|Zürich, Switzerland']],
    rail: [
      ['Lindau-Reutin', '린다우-로이틴역', '장거리 열차|long-distance trains'],
      ['Lindau-Insel', '린다우 섬역', '구시가|old town'],
    ],
  },
  munich: {
    air: [
      ['München (MUC)', '뮌헨 공항 (MUC)'],
      ['Memmingen (FMM)', '메밍겐 공항 (FMM)', '메밍겐 · 저비용 항공|Memmingen · low-cost carriers'],
    ],
    rail: [
      ['München Hbf', '뮌헨 중앙역'],
      ['München Ost', '뮌헨 동역'],
    ],
    bus: [['ZOB München', '뮌헨 중앙버스터미널 (ZOB)']],
  },
  fussen: {
    air: [MUC(), ['Memmingen (FMM)', '메밍겐 공항 (FMM)', '메밍겐|Memmingen']],
    rail: [['Füssen', '퓌센역']],
  },

  // —— be ——
  brussels: {
    air: [
      ['Brussels Airport (BRU)', '브뤼셀 공항 (BRU)'],
      ['Brussels South Charleroi (CRL)', '샤를루아 공항 (CRL)', '샤를루아 · 저비용 항공|Charleroi · low-cost carriers'],
    ],
    rail: [
      ['Bruxelles-Midi / Brussel-Zuid', '브뤼셀 미디(남)역'],
      ['Bruxelles-Central / Brussel-Centraal', '브뤼셀 중앙역'],
      ['Bruxelles-Nord / Brussel-Noord', '브뤼셀 북역'],
    ],
  },
  bruges: {
    air: [BRU()],
    rail: [['Brugge', '브뤼헤역']],
  },
  ghent: {
    air: [BRU()],
    rail: [['Gent-Sint-Pieters', '겐트 신트피터르스역']],
  },
  antwerp: {
    air: [BRU(), ['Antwerp (ANR)', '안트베르펜 공항 (ANR)', '운항편 적음|few flights']],
    rail: [['Antwerpen-Centraal', '안트베르펜 중앙역']],
  },
  leuven: {
    air: [BRU()],
    rail: [['Leuven', '뢰번역']],
  },
  mechelen: {
    air: [BRU('기차로 약 10분|About 10 min by train')],
    rail: [['Mechelen', '메헬렌역']],
  },
  dinant: {
    air: [['Brussels South Charleroi (CRL)', '샤를루아 공항 (CRL)', '샤를루아|Charleroi'], BRU()],
    rail: [['Dinant', '디낭역']],
  },

  // —— nl ——
  amsterdam: {
    air: [['Amsterdam Schiphol (AMS)', '스히폴 공항 (AMS)']],
    rail: [
      ['Amsterdam Centraal', '암스테르담 중앙역'],
      ['Amsterdam Zuid', '암스테르담 자위트역'],
    ],
    bus: [['Amsterdam Sloterdijk', '암스테르담 슬로터데이크 버스 정류장', '장거리 버스|long-distance coaches']],
    port: [['Felison Terminal, IJmuiden', '에이마위던 펠리손 터미널', '에이마위던 · 영국 뉴캐슬행|IJmuiden · ferry to Newcastle']],
  },
  rotterdam: {
    air: [['Rotterdam The Hague (RTM)', '로테르담 헤이그 공항 (RTM)'], AMS()],
    rail: [['Rotterdam Centraal', '로테르담 중앙역']],
    port: [['Europoort ferry terminal', '유로포르트 페리터미널', '영국 헐행 페리|ferry to Hull']],
  },
  'the-hague': {
    air: [['Rotterdam The Hague (RTM)', '로테르담 헤이그 공항 (RTM)', '로테르담|Rotterdam'], AMS()],
    rail: [
      ['Den Haag Centraal', '헤이그 중앙역'],
      ['Den Haag HS', '헤이그 HS역'],
    ],
  },
  utrecht: {
    air: [AMS()],
    rail: [['Utrecht Centraal', '위트레흐트 중앙역']],
  },
  haarlem: {
    air: [AMS()],
    rail: [['Haarlem', '하를렘역']],
  },
  delft: {
    air: [['Rotterdam The Hague (RTM)', '로테르담 헤이그 공항 (RTM)', '로테르담|Rotterdam'], AMS()],
    rail: [['Delft', '델프트역']],
  },
  maastricht: {
    air: [
      ['Maastricht Aachen (MST)', '마스트리흐트 아헨 공항 (MST)', '운항편 적음|few flights'],
      ['Eindhoven (EIN)', '에인트호번 공항 (EIN)', '에인트호번|Eindhoven'],
    ],
    rail: [['Maastricht', '마스트리흐트역']],
  },
  leiden: {
    air: [AMS('스히폴 공항까지 기차로 약 15분|About 15 min by train')],
    rail: [['Leiden Centraal', '레이던 중앙역']],
  },
  giethoorn: {
    air: [AMS()],
    rail: [['Steenwijk', '스테인베이크역', '스테인베이크 · 버스 연결|Steenwijk · bus link']],
  },

  // —— lu ——
  'luxembourg-city': {
    air: [['Luxembourg Findel (LUX)', '룩셈부르크 공항 (LUX)']],
    rail: [['Gare de Luxembourg', '룩셈부르크역']],
  },
  vianden: {
    air: [LUX()],
    rail: [['Ettelbruck', '에텔브뤼크역', '에텔브뤼크 · 버스 연결|Ettelbruck · bus link']],
  },
  clervaux: {
    air: [LUX('기차로 약 1시간 10분|About 1 hr 10 by train')],
    rail: [['Clervaux', '클레르보역']],
  },
  echternach: {
    air: [LUX()],
    bus: [['Echternach Gare', '에히터나흐 버스터미널', '철도 없음|no railway']],
  },
  remich: {
    air: [LUX()],
    bus: [['Remich Gare routière', '레미히 버스터미널', '철도 없음|no railway']],
  },

  // —— es ——
  madrid: {
    air: [['Madrid–Barajas (MAD)', '바라하스 공항 (MAD)']],
    rail: [
      ['Madrid Puerta de Atocha', '아토차역'],
      ['Madrid Chamartín', '차마르틴역'],
    ],
    bus: [
      ['Estación Sur de Autobuses', '남부 버스터미널 (멘데스 알바로)'],
      ['Intercambiador de Avenida de América', '아베니다 데 아메리카 버스터미널'],
      ['Intercambiador de Moncloa', '몬클로아 환승 터미널', '세고비아·엘에스코리알행 버스, 메트로 3·6호선 몬클로아역|buses to Segovia and El Escorial; Metro lines 3 and 6 (Moncloa)'],
    ],
  },
  avila: {
    air: [MAD()],
    rail: [['Ávila', '아빌라역', '구시가까지 걸어서 약 15분|about 15 min walk to the old town']],
    bus: [['Estación de Autobuses de Ávila', '아빌라 버스터미널']],
  },
  segovia: {
    air: [MAD()],
    rail: [
      ['Segovia-Guiomar', '세고비아 기오마르역', '고속철 · 시 외곽|high-speed · outside town'],
      ['Segovia', '세고비아역', '일반 열차|regional trains'],
    ],
    bus: [['Estación de Autobuses de Segovia', '세고비아 버스터미널']],
  },
  salamanca: {
    air: [MAD()],
    rail: [['Salamanca', '살라망카역']],
    bus: [['Estación de Autobuses de Salamanca', '살라망카 버스터미널']],
  },
  cuenca: {
    air: [MAD()],
    rail: [['Cuenca Fernando Zóbel', '쿠엔카 페르난도 소벨역', '고속열차역 · 시내까지 버스|high-speed station · bus to town']],
    bus: [['Estación de Autobuses de Cuenca', '쿠엔카 버스터미널']],
  },
  toledo: {
    air: [MAD()],
    rail: [['Toledo', '톨레도역']],
    bus: [['Estación de Autobuses de Toledo', '톨레도 버스터미널']],
  },
  barcelona: {
    air: [
      ['Barcelona–El Prat (BCN)', '엘프라트 공항 (BCN)'],
      ['Girona–Costa Brava (GRO)', '지로나 공항 (GRO)', '지로나 · 저비용 항공|Girona · low-cost carriers'],
    ],
    rail: [
      ['Barcelona Sants', '바르셀로나 산츠역'],
      ['Estació de França', '프란사역'],
    ],
    bus: [
      ['Estació del Nord', '북부 버스터미널'],
      ['Estació d’Autobusos de Sants', '산츠 버스터미널'],
    ],
    port: [['Port de Barcelona', '바르셀로나 항구', '발레아레스 제도·이탈리아행 페리|ferries to the Balearics and Italy']],
  },
  montserrat: {
    air: [BCN()],
    rail: [
      ['Monistrol de Montserrat', '모니스트롤 데 몬세라트역', '산악열차 환승|change to the rack railway'],
      ['Aeri de Montserrat', '아에리 데 몬세라트역', '케이블카 환승|change to the cable car'],
    ],
  },
  tarragona: {
    air: [BCN(), ['Reus (REU)', '레우스 공항 (REU)', '레우스|Reus']],
    rail: [
      ['Tarragona', '타라고나역', '구시가 아래 해안|on the coast below the old town'],
      ['Camp de Tarragona', '캄프 데 타라고나역', '고속열차역 · 시내까지 버스|high-speed station · bus to town'],
    ],
  },
  sitges: {
    air: [BCN()],
    rail: [['Sitges', '시체스역']],
  },
  girona: {
    air: [['Girona–Costa Brava (GRO)', '지로나 공항 (GRO)'], BCN()],
    rail: [['Girona', '지로나역']],
    bus: [['Estació d’Autobusos de Girona', '지로나 버스터미널']],
  },
  zaragoza: {
    air: [['Zaragoza (ZAZ)', '사라고사 공항 (ZAZ)']],
    rail: [['Zaragoza-Delicias', '사라고사 델리시아스역']],
    bus: [['Estación Central de Autobuses (Delicias)', '사라고사 중앙 버스터미널', '기차역과 같은 건물|same building as the rail station']],
  },
  valencia: {
    air: [['Valencia (VLC)', '발렌시아 공항 (VLC)']],
    rail: [
      ['València Joaquín Sorolla', '발렌시아 호아킨 소로야역', '고속철|high-speed'],
      ['València Nord', '발렌시아 북역'],
    ],
    bus: [['Estació d’Autobusos de València', '발렌시아 버스터미널']],
    port: [['Port de València', '발렌시아 항구', '발레아레스 제도행 페리|ferries to the Balearics']],
  },
  palma: {
    air: [['Palma de Mallorca (PMI)', '팔마 데 마요르카 공항 (PMI)']],
    rail: [['Estació Intermodal de Palma', '팔마 인테르모달역']],
    bus: [['Estació Intermodal de Palma', '팔마 인테르모달 버스터미널', '기차역과 통합|shared with the rail station']],
    port: [['Port de Palma', '팔마 항구', '바르셀로나·발렌시아·이비사행 페리|ferries to Barcelona, Valencia and Ibiza']],
  },
  cadiz: {
    rail: [['Cádiz', '카디스역', '구시가 입구|at the edge of the old town']],
  },
  leon: {
    air: [MAD()],
    rail: [['León', '레온역']],
    bus: [['Estación de Autobuses de León', '레온 버스터미널']],
  },
  burgos: {
    air: [MAD()],
    rail: [['Burgos Rosa de Lima', '부르고스 로사 데 리마역', '시내까지 버스로 약 15분|about 15 min by bus to the centre']],
    bus: [['Estación de Autobuses de Burgos', '부르고스 버스터미널']],
  },
  logrono: {
    air: [['Bilbao (BIO)', '빌바오 공항 (BIO)', '빌바오|Bilbao']],
    rail: [['Logroño', '로그로뇨역']],
    bus: [['Estación de Autobuses de Logroño', '로그로뇨 버스터미널']],
  },
  pamplona: {
    air: [['Pamplona (PNA)', '팜플로나 공항 (PNA)'], ['Bilbao (BIO)', '빌바오 공항 (BIO)', '빌바오|Bilbao']],
    rail: [['Pamplona-Iruña', '팜플로나역', '시내까지 버스로 약 15분|about 15 min by bus to the centre']],
    bus: [['Estación de Autobuses de Pamplona', '팜플로나 버스터미널']],
  },
  santander: {
    air: [['Santander Seve Ballesteros (SDR)', '산탄데르 공항 (SDR)']],
    rail: [['Santander', '산탄데르역']],
    port: [['Puerto de Santander', '산탄데르 항구', '영국 포츠머스·플리머스행 페리|ferries to Portsmouth and Plymouth']],
  },
  oviedo: {
    air: [['Asturias (OVD)', '아스투리아스 공항 (OVD)']],
    rail: [['Oviedo', '오비에도역']],
    bus: [['Estación de Autobuses de Oviedo', '오비에도 버스터미널']],
  },
  teruel: {
    air: [['Valencia (VLC)', '발렌시아 공항 (VLC)', '발렌시아|Valencia']],
    rail: [['Teruel', '테루엘역']],
    bus: [['Estación de Autobuses de Teruel', '테루엘 버스터미널']],
  },
  caceres: {
    air: [MAD(), ['Badajoz (BJZ)', '바다호스 공항 (BJZ)', '바다호스|Badajoz']],
    rail: [['Cáceres', '카세레스역']],
    bus: [['Estación de Autobuses de Cáceres', '카세레스 버스터미널']],
  },
  merida: {
    air: [['Badajoz (BJZ)', '바다호스 공항 (BJZ)', '바다호스|Badajoz'], ['Sevilla (SVQ)', '세비야 공항 (SVQ)', '세비야|Seville']],
    rail: [['Mérida', '메리다역']],
    bus: [['Estación de Autobuses de Mérida', '메리다 버스터미널']],
  },
  ubeda: {
    air: [['Granada (GRX)', '그라나다 공항 (GRX)', '그라나다|Granada'], AGP()],
    rail: [['Linares-Baeza', '리나레스 바에사역', '우베다까지 버스·택시로 약 30분|about 30 min to Úbeda by bus or taxi']],
    bus: [['Estación de Autobuses de Úbeda', '우베다 버스터미널']],
  },
  jerez: {
    air: [['Jerez (XRY)', '헤레스 공항 (XRY)'], ['Sevilla (SVQ)', '세비야 공항 (SVQ)', '세비야|Seville']],
    rail: [['Jerez de la Frontera', '헤레스역']],
    bus: [['Estación de Autobuses de Jerez', '헤레스 버스터미널']],
  },
  tarifa: {
    air: [['Gibraltar (GIB)', '지브롤터 공항 (GIB)', '지브롤터|Gibraltar'], AGP()],
    bus: [['Estación de Autobuses de Tarifa', '타리파 버스 정류장']],
    port: [['Puerto de Tarifa', '타리파 항구', '모로코 탕헤르행 페리|ferries to Tangier, Morocco']],
  },
  almeria: {
    air: [['Almería (LEI)', '알메리아 공항 (LEI)']],
    rail: [['Almería', '알메리아 역(버스·기차 통합)']],
    port: [['Puerto de Almería', '알메리아 항구', '모로코·알제리행 페리|ferries to Morocco and Algeria']],
  },
  alicante: {
    air: [['Alicante–Elche (ALC)', '알리칸테 엘체 공항 (ALC)']],
    rail: [['Alicante-Terminal', '알리칸테 테르미날역']],
    bus: [['Estación de Autobuses de Alicante', '알리칸테 버스터미널']],
  },
  ibiza: {
    air: [['Ibiza (IBZ)', '이비사 공항 (IBZ)']],
    port: [['Puerto de Ibiza', '이비사 항구', '바르셀로나·발렌시아·팔마·포르멘테라행 페리|ferries to Barcelona, Valencia, Palma and Formentera']],
  },
  menorca: {
    air: [['Menorca (MAH)', '메노르카 공항 (MAH)']],
    port: [['Port de Maó', '마온 항구', '바르셀로나·팔마행 페리|ferries to Barcelona and Palma'], ['Port de Ciutadella', '시우타데야 항구', '마요르카 알쿠디아행 페리|ferries to Alcúdia, Mallorca']],
  },
  tenerife: {
    air: [['Tenerife Norte (TFN)', '테네리페 북부 공항 (TFN)'], ['Tenerife Sur (TFS)', '테네리페 남부 공항 (TFS)']],
    port: [['Puerto de Santa Cruz de Tenerife', '산타 크루스 항구', '다른 카나리아 섬행 페리|ferries to the other Canary Islands']],
  },
  marrakech: {
    air: [['Marrakech Menara (RAK)', '마라케시 메나라 공항 (RAK)']],
    rail: [['Marrakech', '마라케시역 (ONCF)']],
    bus: [['Gare routière CTM / Supratours', 'CTM·수프라투르 버스터미널', '역 옆|by the station']],
  },
  essaouira: {
    air: [['Essaouira-Mogador (ESU)', '에사우이라 공항 (ESU)'], ['Marrakech Menara (RAK)', '마라케시 공항 (RAK)', '마라케시|Marrakech']],
    bus: [['Supratours Essaouira', '수프라투르 터미널', '마라케시행|to Marrakech']],
  },
  merzouga: {
    air: [['Errachidia Moulay Ali Cherif (ERH)', '에라시디아 공항 (ERH)'], ['Marrakech Menara (RAK)', '마라케시 공항 (RAK)', '마라케시|Marrakech'], ['Fès–Saïss (FEZ)', '페스 공항 (FEZ)', '페스|Fez']],
    bus: [['Supratours Merzouga', '수프라투르 정류장', '마라케시·페스행 야간버스|night buses to Marrakech and Fez']],
  },
  fez: {
    air: [['Fès–Saïss (FEZ)', '페스 사이스 공항 (FEZ)']],
    rail: [['Fès', '페스역 (ONCF)']],
    bus: [['Gare routière CTM Fès', 'CTM 버스터미널']],
  },
  chefchaouen: {
    air: [['Tangier Ibn Battouta (TNG)', '탕헤르 공항 (TNG)', '탕헤르|Tangier'], ['Fès–Saïss (FEZ)', '페스 공항 (FEZ)', '페스|Fez']],
    bus: [['Gare routière CTM Chefchaouen', 'CTM 버스터미널']],
  },
  tangier: {
    air: [['Tangier Ibn Battouta (TNG)', '탕헤르 이븐 바투타 공항 (TNG)']],
    rail: [['Tanger Ville', '탕헤르 빌역', '고속열차 알 보라크|Al Boraq high-speed']],
    port: [['Tanger Ville port', '탕헤르 시내 항구', '스페인 타리파행 페리|ferries to Tarifa, Spain'], ['Tanger Med', '탕헤르 메드 항', '알헤시라스행 페리 · 시내에서 약 45km|ferries to Algeciras, about 45 km from the city']],
  },
  rabat: {
    air: [['Rabat–Salé (RBA)', '라바트 살레 공항 (RBA)'], ['Casablanca Mohammed V (CMN)', '카사블랑카 공항 (CMN)', '카사블랑카|Casablanca']],
    rail: [['Rabat Ville', '라바트 빌역'], ['Rabat Agdal', '라바트 아그달역', '고속열차 알 보라크|Al Boraq high-speed']],
  },
  casablanca: {
    air: [['Casablanca Mohammed V (CMN)', '카사블랑카 모하메드 5세 공항 (CMN)', '시내까지 기차로 약 35분|about 35 min to the city by train']],
    rail: [['Casa-Voyageurs', '카사블랑카 보야죄르역', '고속열차·마라케시행|high-speed and to Marrakech'], ['Casa-Port', '카사블랑카 포르역']],
  },
  tunis: {
    air: [['Tunis–Carthage (TUN)', '튀니스 카르타고 공항 (TUN)']],
    rail: [['Tunis Ville', '튀니스 역 (SNCFT)'], ['Tunis Marine', '튀니스 마린역', '카르타고·시디 부 사이드행 TGM|TGM to Carthage and Sidi Bou Said']],
    port: [['La Goulette', '라 굴레트 항', '이탈리아·프랑스행 페리|ferries to Italy and France']],
  },
  sousse: {
    air: [['Monastir Habib Bourguiba (MIR)', '모나스티르 공항 (MIR)', '모나스티르|Monastir'], ['Enfidha–Hammamet (NBE)', '엔피다 하마메트 공항 (NBE)']],
    rail: [['Sousse Voyageurs', '수스역'], ['Sousse Bab Jedid', '수스 밥 즈디드역', '모나스티르·마흐디아행 사헬 전철|Sahel metro to Monastir and Mahdia']],
  },
  monastir: {
    air: [['Monastir Habib Bourguiba (MIR)', '모나스티르 하비브 부르기바 공항 (MIR)']],
    rail: [['Monastir', '모나스티르역', '수스·마흐디아행 사헬 전철|Sahel metro to Sousse and Mahdia']],
  },
  kairouan: {
    air: [['Monastir Habib Bourguiba (MIR)', '모나스티르 공항 (MIR)', '모나스티르|Monastir'], ['Enfidha–Hammamet (NBE)', '엔피다 하마메트 공항 (NBE)']],
    bus: [['Kairouan louage station', '카이루안 루아지 정류장', '수스·튀니스행|to Sousse and Tunis']],
  },
  cairo: {
    air: [['Cairo International (CAI)', '카이로 국제공항 (CAI)'], ['Sphinx International (SPX)', '스핑크스 국제공항 (SPX)', '기자 서쪽|west of Giza']],
    rail: [['Ramses (Cairo Station)', '람세스역']],
  },
  luxor: {
    air: [['Luxor International (LXR)', '룩소르 공항 (LXR)']],
    rail: [['Luxor', '룩소르역']],
  },
  aswan: {
    air: [['Aswan International (ASW)', '아스완 공항 (ASW)'], ['Abu Simbel (ABS)', '아부심벨 공항 (ABS)']],
    rail: [['Aswan', '아스완역']],
  },
  alexandria: {
    air: [['Borg El Arab (HBE)', '보르그 엘 아랍 공항 (HBE)']],
    rail: [['Misr Station', '미스르역']],
  },
  hurghada: {
    air: [['Hurghada International (HRG)', '후르가다 공항 (HRG)']],
    bus: [['Go Bus Hurghada', '고버스 터미널', '룩소르·카이로행|to Luxor and Cairo']],
  },
  amman: {
    air: [['Queen Alia International (AMM)', '퀸 알리아 국제공항 (AMM)']],
    bus: [['JETT Abdali', 'JETT 압달리 터미널', '페트라·아카바행|to Petra and Aqaba']],
  },
  petra: {
    air: [['Queen Alia International (AMM)', '퀸 알리아 공항 (AMM)', '암만|Amman'], ['King Hussein International (AQJ)', '아카바 공항 (AQJ)', '아카바|Aqaba']],
    bus: [['JETT Wadi Musa', 'JETT 와디 무사 정류장', '암만행|to Amman']],
  },
  'wadi-rum': {
    air: [['King Hussein International (AQJ)', '아카바 공항 (AQJ)', '아카바|Aqaba']],
  },
  aqaba: {
    air: [['King Hussein International (AQJ)', '킹 후세인 국제공항 (AQJ)']],
    bus: [['JETT Aqaba', 'JETT 아카바 터미널', '암만행|to Amman']],
  },
  edfu: {
    air: [['Aswan International (ASW)', '아스완 공항 (ASW)', '아스완|Aswan'], ['Luxor International (LXR)', '룩소르 공항 (LXR)', '룩소르|Luxor']],
    rail: [['Edfu', '에드푸역']],
  },
  'kom-ombo': {
    air: [['Aswan International (ASW)', '아스완 공항 (ASW)', '아스완|Aswan']],
    rail: [['Kom Ombo', '콤옴보역', '신전까지 택시로 약 15분|about 15 min by taxi to the temple']],
  },
  'abu-simbel': {
    air: [['Abu Simbel (ABS)', '아부심벨 공항 (ABS)', '카이로·아스완 국내선|domestic flights from Cairo and Aswan']],
  },
  doha: {
    air: [['Hamad International (DOH)', '하마드 국제공항 (DOH)', '지하철 레드 라인으로 시내까지 약 20분|about 20 min to the city on the Metro Red Line']],
    rail: [['Msheireb', '무셰이레브역', '도하 지하철 세 노선 환승역|interchange of all three Metro lines']],
  },
  jerusalem: {
    air: [['Ben Gurion (TLV)', '벤구리온 공항 (TLV)', '고속철도로 약 25분|about 25 min by fast train']],
    rail: [['Jerusalem–Yitzhak Navon', '예루살렘 이츠하크 나본역']],
    bus: [['Jerusalem Central Bus Station', '예루살렘 중앙 버스터미널']],
  },
  'tel-aviv': {
    air: [['Ben Gurion (TLV)', '벤구리온 공항 (TLV)', '기차로 약 15분|about 15 min by train']],
    rail: [['Tel Aviv Savidor Center', '텔아비브 사비도르 센터역'], ['Tel Aviv HaHagana', '텔아비브 하하가나역']],
  },
  haifa: {
    air: [['Ben Gurion (TLV)', '벤구리온 공항 (TLV)', '텔아비브|Tel Aviv']],
    rail: [['Haifa Merkaz HaShmona', '하이파 메르카즈 하슈모나역']],
  },
  'dead-sea': {
    air: [['Ben Gurion (TLV)', '벤구리온 공항 (TLV)', '텔아비브|Tel Aviv'], ['Ramon (ETM)', '라몬 공항 (ETM)', '에일라트|Eilat']],
    bus: [['Ein Bokek bus stop', '엔 보케크 정류장', '예루살렘행 버스|buses to Jerusalem']],
  },
  dubai: {
    air: [['Dubai International (DXB)', '두바이 국제공항 (DXB)', '지하철 레드 라인으로 시내까지 약 20~30분|about 20–30 min to the city on the Metro Red Line']],
    rail: [['BurJuman', '버주만역', '레드·그린 라인 환승역|Red and Green Line interchange']],
    bus: [['Al Ghubaiba Bus Station', '알 구바이바 버스터미널', '아부다비·샤르자행|to Abu Dhabi and Sharjah']],
  },
  'abu-dhabi': {
    air: [['Zayed International (AUH)', '자이드 국제공항 (AUH)', '택시·버스로 시내까지 약 30~40분|about 30–40 min to the city by taxi or bus']],
    bus: [['Abu Dhabi Central Bus Station', '아부다비 중앙 버스터미널', '두바이·알아인행|to Dubai and Al Ain']],
  },
  'al-ain': {
    air: [['Zayed International (AUH)', '자이드 국제공항 (AUH)', '아부다비|Abu Dhabi']],
    bus: [['Al Ain Central Bus Station', '알아인 중앙 버스터미널', '아부다비·두바이행|to Abu Dhabi and Dubai']],
  },
  riyadh: {
    air: [['King Khalid International (RUH)', '킹 칼리드 국제공항 (RUH)', '시내까지 차로 약 30~40분|about 30–40 min to the city by car']],
    rail: [['Riyadh station (SAR)', '리야드역 (SAR)', '담맘·북부선|to Dammam and the north']],
  },
  jeddah: {
    air: [['King Abdulaziz International (JED)', '킹 압둘아지즈 국제공항 (JED)', '시내까지 차로 약 30분|about 30 min to the city by car']],
    rail: [['Jeddah Al-Sulaimaniyah (Haramain)', '제다 알술라이마니야역 (하라메인 고속철도)', '메디나행|to Medina']],
  },
  alula: {
    air: [['AlUla International (ULH)', '알울라 국제공항 (ULH)', '구시가까지 차로 약 30분|about 30 min to the old town by car']],
  },
  'kuwait-city': {
    air: [['Kuwait International (KWI)', '쿠웨이트 국제공항 (KWI)', '시내까지 차로 약 20~30분|about 20–30 min to the city by car']],
  },
  algiers: {
    air: [['Houari Boumediene (ALG)', '우아리 부메디엔 공항 (ALG)', '시내까지 차로 약 30분|about 30 min to the city by car']],
    rail: [['Alger Agha', '알제 아가역', '오랑·콘스탄틴행|to Oran and Constantine']],
  },
  oran: {
    air: [['Ahmed Ben Bella (ORN)', '아흐메드 벤 벨라 공항 (ORN)', '시내까지 차로 약 20분|about 20 min to the city by car']],
    rail: [['Oran station', '오랑역', '알제행|to Algiers']],
  },
  constantine: {
    air: [['Mohamed Boudiaf (CZL)', '모하메드 부디아프 공항 (CZL)', '시내까지 차로 약 20~30분|about 20–30 min to the city by car']],
    rail: [['Constantine station', '콘스탄틴역', '알제행|to Algiers']],
  },
  ghardaia: {
    air: [['Noumérat – Moufdi Zakaria (GHA)', '누메라트 공항 (GHA)', '시내까지 차로 약 20분|about 20 min to town by car']],
  },
  tripoli: {
    air: [['Mitiga International (MJI)', '미티가 국제공항 (MJI)', '시내에서 동쪽으로 약 8km|about 8 km east of the centre']],
  },
  ghadames: {
    air: [['Ghadames (LTD)', '가다메스 공항 (LTD)', '국내선|domestic flights']],
  },
  cyrene: {
    air: [['Al Abraq (LAQ)', '알 아브라크 공항 (LAQ)', '국내선|domestic flights']],
  },
  tehran: {
    air: [['Imam Khomeini International (IKA)', '이맘 호메이니 국제공항 (IKA)', '국제선 · 시내까지 차로 약 1시간|international · about 1 hr to the city by car'], ['Mehrabad (THR)', '메흐라바드 공항 (THR)', '국내선 · 시내 서쪽|domestic · west of the centre']],
    rail: [['Tehran Railway Station', '테헤란역', '카샨·이스파한·야즈드·시라즈행|to Kashan, Isfahan, Yazd and Shiraz']],
  },
  kashan: {
    rail: [['Kashan station', '카샨역', '테헤란·이스파한행|to Tehran and Isfahan']],
  },
  isfahan: {
    air: [['Isfahan International (IFN)', '이스파한 국제공항 (IFN)', '시내까지 차로 약 30~40분|about 30–40 min to the city by car']],
    rail: [['Isfahan station', '이스파한역', '테헤란·야즈드행|to Tehran and Yazd']],
  },
  yazd: {
    air: [['Shahid Sadooghi (AZD)', '야즈드 공항 (AZD)', '시내까지 차로 약 15분|about 15 min to the city by car']],
    rail: [['Yazd station', '야즈드역', '테헤란·이스파한행|to Tehran and Isfahan']],
  },
  shiraz: {
    air: [['Shiraz International (SYZ)', '시라즈 국제공항 (SYZ)', '시내까지 차로 약 20분|about 20 min to the city by car']],
  },
  baghdad: {
    air: [['Baghdad International (BGW)', '바그다드 국제공항 (BGW)', '시내에서 서쪽으로 약 16km|about 16 km west of the centre']],
  },
  basra: {
    air: [['Basra International (BSR)', '바스라 국제공항 (BSR)', '시내까지 차로 약 30분|about 30 min to the city by car']],
  },
  erbil: {
    air: [['Erbil International (EBL)', '에르빌 국제공항 (EBL)', '시내까지 차로 약 15분|about 15 min to the city by car']],
  },
  sanaa: {
    air: [['Sana’a International (SAH)', '사나 국제공항 (SAH)', '2025년 공습 피해 · 예멘인만 출국 가능|damaged by air strikes in 2025; departures for Yemenis only']],
  },
  shibam: {
    air: [['Seiyun (GXF)', '세이윤 공항 (GXF)', '시밤까지 차로 약 30분|about 30 min to Shibam by car']],
  },
  socotra: {
    air: [['Socotra (SCT)', '소코트라 공항 (SCT)', '하디부까지 차로 약 20분|about 20 min to Hadibu by car']],
  },
  aden: {
    air: [['Aden International (ADE)', '아덴 국제공항 (ADE)', '시내까지 차로 약 15분|about 15 min to the city by car']],
  },
  damascus: {
    air: [['Damascus International (DAM)', '다마스쿠스 국제공항 (DAM)', '시내에서 남동쪽으로 약 25km|about 25 km south-east of the centre']],
  },
  homs: {
  },
  palmyra: {
  },
  aleppo: {
    air: [['Aleppo International (ALP)', '알레포 국제공항 (ALP)', '시내에서 동쪽으로 약 10km|about 10 km east of the centre']],
  },
  kabul: {
    air: [['Kabul International (KBL)', '카불 국제공항 (KBL)', '시내에서 북동쪽으로 약 5km|about 5 km north-east of the centre']],
  },
  bamiyan: {
    air: [['Bamyan (BIN)', '바미안 공항 (BIN)', '국내선|domestic flights']],
  },
  'mazar-i-sharif': {
    air: [['Mazar-i-Sharif International (MZR)', '마자르이샤리프 국제공항 (MZR)', '시내에서 동쪽으로 약 9km|about 9 km east of the centre']],
  },
  herat: {
    air: [['Herat International (HEA)', '헤라트 국제공항 (HEA)', '시내에서 남쪽으로 약 15km|about 15 km south of the centre']],
  },
  muscat: {
    air: [['Muscat International (MCT)', '무스카트 국제공항 (MCT)', '무트라까지 차로 약 30분|about 30 min to Mutrah by car']],
    bus: [['Mwasalat Ruwi bus station', '루위 버스 터미널', '니즈와·수르·살랄라행|to Nizwa, Sur and Salalah']],
  },
  nizwa: {
    bus: [['Nizwa bus stop', '니즈와 버스 정류장', '무스카트행|to Muscat']],
  },
  sur: {
    bus: [['Sur bus stop', '수르 버스 정류장', '무스카트행|to Muscat']],
  },
  salalah: {
    air: [['Salalah International (SLL)', '살랄라 국제공항 (SLL)', '시내까지 차로 약 10분|about 10 min to the city by car']],
  },
  bethlehem: {
    bus: [['Bab al-Zqaq bus stop', '바브 알 즈칵 정류장', '예루살렘행 231번 버스|bus 231 to Jerusalem']],
  },
  jericho: {
  },
  hebron: {
  },
  ramallah: {
    bus: [['Ramallah central bus station', '라말라 중앙 버스 터미널', '예루살렘·서안 각 도시행|to Jerusalem and other West Bank towns']],
  },
  seville: {
    air: [['Sevilla (SVQ)', '세비야 공항 (SVQ)']],
    rail: [['Sevilla Santa Justa', '세비야 산타 후스타역']],
    bus: [
      ['Estación de Autobuses Plaza de Armas', '플라사 데 아르마스 버스터미널'],
      ['Estación de Autobuses Prado de San Sebastián', '프라도 데 산 세바스티안 버스터미널'],
    ],
  },
  cordoba: {
    air: [['Sevilla (SVQ)', '세비야 공항 (SVQ)', '세비야|Seville'], AGP()],
    rail: [['Córdoba', '코르도바역']],
    bus: [['Estación de Autobuses de Córdoba', '코르도바 버스터미널']],
  },
  granada: {
    air: [['Granada–Jaén F. García Lorca (GRX)', '그라나다 공항 (GRX)'], AGP()],
    rail: [['Granada', '그라나다역']],
    bus: [['Estación de Autobuses de Granada', '그라나다 버스터미널']],
  },
  malaga: {
    air: [['Málaga–Costa del Sol (AGP)', '말라가 공항 (AGP)']],
    rail: [['Málaga María Zambrano', '말라가 마리아 삼브라노역']],
    bus: [['Estación de Autobuses de Málaga', '말라가 버스터미널']],
  },
  ronda: {
    air: [AGP()],
    rail: [['Ronda', '론다역']],
    bus: [['Estación de Autobuses de Ronda', '론다 버스터미널']],
  },
  nerja: {
    air: [AGP()],
  },
  gibraltar: {
    air: [['Gibraltar (GIB)', '지브롤터 공항 (GIB)'], AGP('스페인 말라가|Málaga, Spain')],
    bus: [['Estación de Autobuses de La Línea', '라 리네아 버스터미널', '스페인 쪽 국경 도시|Spanish border town']],
  },
  bilbao: {
    air: [['Bilbao (BIO)', '빌바오 공항 (BIO)']],
    rail: [['Bilbao-Abando', '빌바오 아반도역']],
    bus: [['Bilbao Intermodal', '빌바오 인테르모달 버스터미널']],
  },
  'san-sebastian': {
    air: [
      ['San Sebastián (EAS)', '산세바스티안 공항 (EAS)', '온다리비아 · 운항편 적음|Hondarribia · few flights'],
      ['Bilbao (BIO)', '빌바오 공항 (BIO)', '빌바오|Bilbao'],
    ],
    rail: [['Donostia-San Sebastián', '산세바스티안역']],
    bus: [['Estación de Autobuses de Donostia', '산세바스티안 버스터미널']],
  },
  santiago: {
    air: [['Santiago–Rosalía de Castro (SCQ)', '산티아고 공항 (SCQ)']],
    rail: [['Santiago de Compostela', '산티아고 데 콤포스텔라역']],
    bus: [['Estación Intermodal de Santiago', '산티아고 인테르모달 버스터미널']],
  },

  // —— ad ——
  'andorra-la-vella': {
    air: [
      ["Andorra–La Seu d'Urgell (LEU)", '안도라–라 세우 두르젤 공항 (LEU)', '스페인 라 세우 두르젤 · 마드리드·팔마행 주 2회|La Seu d’Urgell, Spain · Madrid and Palma twice a week'],
      BCN('스페인 바르셀로나|Barcelona, Spain'),
      ['Toulouse–Blagnac (TLS)', '툴루즈 블라냑 공항 (TLS)', '프랑스 툴루즈|Toulouse, France'],
    ],
    rail: [["L'Hospitalet-près-l'Andorre", '로스피탈레 프레 랑도르역', '프랑스 · 안도라엔 철도 없음|France · no railway in Andorra']],
    bus: [["Estació Nacional d'Autobusos", '안도라 국립 버스터미널']],
  },
  'pas-de-la-casa': {
    air: [['Toulouse–Blagnac (TLS)', '툴루즈 블라냑 공항 (TLS)', '프랑스 툴루즈|Toulouse, France']],
    rail: [["L'Hospitalet-près-l'Andorre", '로스피탈레 프레 랑도르역', '프랑스 · 안도라엔 철도 없음|France · no railway in Andorra']],
  },
  ordino: {
    air: [
      ["Andorra–La Seu d'Urgell (LEU)", '안도라–라 세우 두르젤 공항 (LEU)', '스페인 라 세우 두르젤 · 마드리드·팔마행 주 2회|La Seu d’Urgell, Spain · Madrid and Palma twice a week'],
      BCN('스페인 바르셀로나|Barcelona, Spain'),
      ['Toulouse–Blagnac (TLS)', '툴루즈 블라냑 공항 (TLS)', '프랑스 툴루즈|Toulouse, France'],
    ],
    bus: [["Estació Nacional d'Autobusos", '안도라 국립 버스터미널', '안도라라베야|Andorra la Vella']],
  },

  // —— pt ——
  'peso-da-regua': {
    air: [['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']],
    rail: [['Peso da Régua', '페주 다 헤구아역', '도루선|Douro line']],
  },
  lamego: {
    air: [['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']],
    rail: [['Peso da Régua', '페주 다 헤구아역', '라메구까지 버스로 약 25분|about 25 min to Lamego by bus']],
    bus: [['Lamego bus station', '라메구 버스터미널']],
  },
  amarante: {
    air: [['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']],
    bus: [['Amarante bus station', '아마란트 버스터미널', '포르투행 버스|buses to Porto']],
  },
  'viana-do-castelo': {
    air: [['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']],
    rail: [['Viana do Castelo', '비아나 두 카스텔루역']],
  },
  alcobaca: {
    air: [['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)', '리스본|Lisbon']],
    bus: [['Alcobaça bus station', '알코바사 버스터미널', '리스본·나자레·바탈랴행|to Lisbon, Nazaré and Batalha']],
  },
  setubal: {
    air: [['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)', '리스본|Lisbon']],
    rail: [['Setúbal', '세투발역', '리스본행 페르타구스|Fertagus to Lisbon']],
    port: [['Setúbal ferry', '세투발 페리 터미널', '트로이아행|to Tróia']],
  },
  ericeira: {
    air: [['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)', '리스본|Lisbon']],
    bus: [['Ericeira bus station', '에리세이라 버스터미널', '리스본 캄푸 그란드행|to Lisbon Campo Grande']],
  },
  manteigas: {
    air: [['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)', '리스본|Lisbon'], ['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']],
    rail: [['Covilhã', '코빌량역', '만테이가스까지 차로 약 40분|about 40 min to Manteigas by car']],
  },
  monsanto: {
    air: [['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)', '리스본|Lisbon']],
    rail: [['Castelo Branco', '카스텔루 브랑쿠역', '몬산투까지 버스·택시로 약 1시간|about 1 hr to Monsanto by bus or taxi']],
  },
  tavira: {
    air: [['Faro (FAO)', '파루 공항 (FAO)', '파루|Faro']],
    rail: [['Tavira', '타비라역']],
  },
  marvao: {
    air: [['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)', '리스본|Lisbon']],
    bus: [['Portalegre bus station', '포르탈레그르 버스터미널', '마르바웅까지 버스(평일)·택시|weekday bus or taxi to Marvão']],
  },
  elvas: {
    air: [['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)', '리스본|Lisbon'], ['Badajoz (BJZ)', '바다호스 공항 (BJZ)', '스페인 바다호스|Badajoz, Spain']],
    bus: [['Elvas bus station', '엘바스 버스터미널']],
  },
  'ponta-delgada': {
    air: [['Ponta Delgada João Paulo II (PDL)', '폰타 델가다 공항 (PDL)']],
  },
  'angra-do-heroismo': {
    air: [['Terceira Lajes (TER)', '테르세이라 공항 (TER)']],
  },
  porto: {
    air: [['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)']],
    rail: [
      ['Porto-Campanhã', '포르투 캄파냐역'],
      ['Porto-São Bento', '포르투 상벤투역'],
    ],
    bus: [['Terminal Intermodal de Campanhã', '캄파냐 버스터미널']],
  },
  braga: {
    air: [OPO()],
    rail: [['Braga', '브라가역']],
    bus: [['Central de Camionagem de Braga', '브라가 버스터미널']],
  },
  guimaraes: {
    air: [OPO()],
    rail: [['Guimarães', '기마랑이스역']],
    bus: [['Central de Camionagem de Guimarães', '기마랑이스 버스터미널']],
  },
  aveiro: {
    air: [OPO()],
    rail: [['Aveiro', '아베이루역']],
  },
  coimbra: {
    air: [OPO(), LIS()],
    rail: [['Coimbra-B', '코임브라 B역']],
    bus: [['Terminal Rodoviário de Coimbra', '코임브라 버스터미널']],
  },
  tomar: {
    air: [LIS()],
    rail: [['Tomar', '토마르역']],
  },
  fatima: {
    air: [LIS()],
    bus: [['Terminal Rodoviário de Fátima', '파티마 버스터미널', '시내에 기차역 없음|no station in town']],
  },
  nazare: {
    air: [LIS()],
    rail: [['Valado–Nazaré–Alcobaça', '발라두역', '발라두 · 나자레엔 역 없음|Valado · no station in Nazaré']],
    bus: [['Terminal Rodoviário da Nazaré', '나자레 버스터미널']],
  },
  obidos: {
    air: [LIS()],
    rail: [['Óbidos', '오비두스역', '운행 열차 적음|few trains']],
  },
  lisbon: {
    air: [['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)']],
    rail: [
      ['Lisboa Santa Apolónia', '산타 아폴로니아역'],
      ['Lisboa Oriente', '오리엔트역'],
      ['Rossio', '호시우역', '신트라행|trains to Sintra'],
      ['Cais do Sodré', '카이스 두 소드레역', '카스카이스행|trains to Cascais'],
    ],
    bus: [
      ['Terminal Rodoviário de Sete Rios', '세트 히우스 버스터미널'],
      ['Gare do Oriente', '오리엔트 버스터미널'],
    ],
  },
  sintra: {
    air: [LIS()],
    rail: [['Sintra', '신트라역']],
  },
  cascais: {
    air: [LIS()],
    rail: [['Cascais', '카스카이스역']],
  },
  evora: {
    air: [LIS()],
    rail: [['Évora', '에보라역']],
    bus: [['Terminal Rodoviário de Évora', '에보라 버스터미널']],
  },
  lagos: {
    air: [FAO()],
    rail: [['Lagos', '라고스역']],
    bus: [['Terminal Rodoviário de Lagos', '라고스 버스터미널']],
  },
  faro: {
    air: [['Faro (FAO)', '파루 공항 (FAO)']],
    rail: [['Faro', '파루역']],
    bus: [['Terminal Rodoviário de Faro', '파루 버스터미널']],
  },
  funchal: {
    air: [['Madeira Cristiano Ronaldo (FNC)', '마데이라 공항 (FNC)']],
    port: [['Porto do Funchal', '푼샬 항구', '포르투산투행 페리|ferry to Porto Santo']],
  },

  // —— dk ——
  copenhagen: {
    air: [['Copenhagen Kastrup (CPH)', '카스트루프 공항 (CPH)']],
    rail: [
      ['København H', '코펜하겐 중앙역'],
      ['Nørreport', '뇌레포르트역'],
    ],
    bus: [['Københavns Busterminal', '코펜하겐 버스터미널']],
    port: [['Oslo ferry terminal (Dampfærgevej 30)', '오슬로행 페리터미널 (담프페르게바이)', '오슬로행 페리 · Go Nordic Cruiseline|ferry to Oslo · Go Nordic Cruiseline']],
  },
  aarhus: {
    air: [
      ['Aarhus (AAR)', '오르후스 공항 (AAR)'],
      ['Billund (BLL)', '빌룬 공항 (BLL)', '빌룬|Billund'],
    ],
    rail: [['Aarhus H', '오르후스 중앙역']],
    bus: [['Aarhus Rutebilstation', '오르후스 버스터미널']],
    port: [['Aarhus Færgehavn', '오르후스 페리항', '셸란섬행 쾌속선|fast ferry to Zealand']],
  },
  odense: {
    air: [CPH(), ['Billund (BLL)', '빌룬 공항 (BLL)', '빌룬|Billund']],
    rail: [['Odense', '오덴세역']],
  },
  aalborg: {
    air: [['Aalborg (AAL)', '올보르 공항 (AAL)']],
    rail: [['Aalborg', '올보르역']],
    bus: [['Aalborg Busterminal', '올보르 버스터미널']],
  },
  roskilde: {
    air: [CPH()],
    rail: [['Roskilde', '로스킬데역']],
  },

  // —— se ——
  stockholm: {
    air: [
      ['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)'],
      ['Stockholm Bromma (BMA)', '브롬마 공항 (BMA)'],
      ['Stockholm Skavsta (NYO)', '스카브스타 공항 (NYO)', '뉘셰핑 · 저비용 항공|Nyköping · low-cost carriers'],
    ],
    rail: [['Stockholm Central', '스톡홀름 중앙역']],
    bus: [['Cityterminalen', '시티터미널렌']],
    port: [
      ['Värtahamnen', '베르타함넨 항구', '헬싱키·탈린·투르쿠행|ferries to Helsinki, Tallinn and Turku'],
      ['Stadsgården', '스타스고르덴 터미널', '바이킹 라인|Viking Line'],
    ],
  },
  gothenburg: {
    air: [['Göteborg Landvetter (GOT)', '예테보리 란드베테르 공항 (GOT)']],
    rail: [['Göteborg Central', '예테보리 중앙역']],
    bus: [['Nils Ericson Terminalen', '닐스 에릭손 터미널']],
    port: [['Stena Line Danmarksterminalen', '스테나 라인 덴마크 터미널', '덴마크 프레데릭스하운행|ferry to Frederikshavn, Denmark']],
  },
  malmo: {
    air: [CPH('덴마크 코펜하겐|Copenhagen, Denmark'), ['Malmö (MMX)', '말뫼 공항 (MMX)']],
    rail: [['Malmö Central', '말뫼 중앙역']],
  },
  uppsala: {
    air: [ARN()],
    rail: [['Uppsala Central', '웁살라 중앙역']],
  },
  kiruna: {
    air: [['Kiruna (KRN)', '키루나 공항 (KRN)']],
    rail: [['Kiruna', '키루나역']],
  },

  // —— fi ——
  helsinki: {
    air: [['Helsinki-Vantaa (HEL)', '헬싱키 반타 공항 (HEL)']],
    rail: [
      ['Helsingin päärautatieasema', '헬싱키 중앙역'],
      ['Pasila', '파실라역'],
    ],
    bus: [['Kamppi', '캄피 버스터미널']],
    port: [
      ['Länsisatama (West Harbour)', '서항 (랜시사타마)', '탈린행 페리|ferries to Tallinn'],
      ['Olympiaterminaali', '올림피아 터미널', '스톡홀름행|ferries to Stockholm'],
      ['Katajanokan terminaali', '카타야노카 터미널', '스톡홀름·탈린행|ferries to Stockholm and Tallinn'],
    ],
  },
  turku: {
    air: [['Turku (TKU)', '투르쿠 공항 (TKU)'], HEL()],
    rail: [['Turku', '투르쿠역']],
    bus: [['Turun linja-autoasema', '투르쿠 버스터미널']],
    port: [['Turun satama', '투르쿠 항구', '스톡홀름행 페리|ferries to Stockholm']],
  },
  tampere: {
    air: [['Tampere-Pirkkala (TMP)', '탐페레 피르칼라 공항 (TMP)'], HEL()],
    rail: [['Tampere', '탐페레역']],
    bus: [['Tampereen linja-autoasema', '탐페레 버스터미널']],
  },
  rovaniemi: {
    air: [['Rovaniemi (RVN)', '로바니에미 공항 (RVN)']],
    rail: [['Rovaniemi', '로바니에미역']],
    bus: [['Rovaniemen linja-autoasema', '로바니에미 버스터미널']],
  },
  porvoo: {
    air: [HEL()],
    bus: [['Porvoon linja-autoasema', '포르보 버스터미널', '여객 철도 없음|no passenger railway']],
  },

  // —— no ——
  oslo: {
    air: [
      ['Oslo Gardermoen (OSL)', '오슬로 가르데르모엔 공항 (OSL)'],
      ['Sandefjord Torp (TRF)', '산데피오르 토르프 공항 (TRF)', '산데피오르 · 저비용 항공|Sandefjord · low-cost carriers'],
    ],
    rail: [
      ['Oslo S', '오슬로 중앙역'],
      ['Nationaltheatret', '나쇼날테아트레역'],
    ],
    bus: [['Oslo bussterminal', '오슬로 버스터미널']],
    port: [
      ['Vippetangen', '비페탕엔 터미널', '코펜하겐행 페리 · Go Nordic Cruiseline|ferry to Copenhagen · Go Nordic Cruiseline'],
      ['Hjortnes (Color Line)', '요르트네스 터미널', '독일 킬행 페리|ferry to Kiel, Germany'],
    ],
  },
  bergen: {
    air: [['Bergen Flesland (BGO)', '베르겐 공항 (BGO)']],
    rail: [['Bergen', '베르겐역']],
    bus: [['Bergen busstasjon', '베르겐 버스터미널']],
    port: [
      ['Strandkaiterminalen', '스트란카이 터미널', '피오르 쾌속선|fjord express boats'],
      ['Hurtigruteterminalen', '후르티그루텐 터미널', '연안 여객선|coastal voyage'],
    ],
  },
  tromso: {
    air: [['Tromsø Langnes (TOS)', '트롬쇠 공항 (TOS)']],
    bus: [['Prostneset', '프로스트네세 터미널', '철도 없음|no railway']],
    port: [['Prostneset', '프로스트네세 터미널', '후르티그루텐 연안 여객선|Hurtigruten coastal voyage']],
  },
  stavanger: {
    air: [['Stavanger Sola (SVG)', '스타방에르 공항 (SVG)']],
    rail: [['Stavanger', '스타방에르역']],
    bus: [['Stavanger Byterminalen', '스타방에르 뷔터미널렌']],
    port: [
      ['Strandkaien', '스트란카이엔 부두', '뤼세피오르 유람선|Lysefjord cruises'],
      ['Fiskepiren', '피스케피렌 터미널', '근교 섬·피오르 마을행 쾌속선|express boats to nearby islands and fjord villages'],
    ],
  },
  trondheim: {
    air: [['Trondheim Værnes (TRD)', '트론헤임 공항 (TRD)']],
    rail: [['Trondheim S', '트론헤임 중앙역']],
  },
  alesund: {
    air: [['Ålesund Vigra (AES)', '올레순 공항 (AES)']],
    bus: [['Keiser Wilhelms gate', '카이세르 빌헬름스 거리 버스 정류장', '시내 중심 정류장 · 철도 없음|city-centre stops · no railway']],
    port: [['Skansekaia', '스칸세카이아 부두', '후르티그루텐 연안 여객선|Hurtigruten coastal voyage']],
  },
  flam: {
    air: [BGO()],
    rail: [
      ['Flåm', '플롬역', '플롬 산악철도|Flåm Railway'],
      ['Myrdal', '뮈르달역', '베르겐선 환승역|Bergen Line interchange'],
    ],
    port: [['Flåm kai', '플롬 선착장', '구드방엔행 피오르 크루즈|fjord cruise to Gudvangen']],
  },

  // —— is ——
  reykjavik: {
    air: [
      ['Keflavík International (KEF)', '케플라비크 국제공항 (KEF)'],
      ['Reykjavík (RKV)', '레이캬비크 공항 (RKV)', '국내선|domestic flights'],
    ],
    bus: [['BSÍ', 'BSÍ 버스터미널', '아이슬란드엔 철도 없음|no railways in Iceland']],
  },
  akureyri: {
    air: [['Akureyri (AEY)', '아쿠레이리 공항 (AEY)']],
  },
  vik: {
    air: [KEF()],
  },
  husavik: {
    air: [['Akureyri (AEY)', '아쿠레이리 공항 (AEY)', '아쿠레이리|Akureyri']],
  },
  selfoss: {
    air: [KEF()],
  },

  // —— at ——
  vienna: {
    air: [['Wien-Schwechat (VIE)', '빈 공항 (VIE)']],
    rail: [
      ['Wien Hbf', '빈 중앙역'],
      ['Wien Westbahnhof', '빈 서역'],
      ['Wien Mitte', '빈 미테역', '공항철도 CAT|City Airport Train'],
    ],
    bus: [['Vienna International Busterminal (VIB)', '빈 국제 버스터미널 (VIB)']],
  },
  salzburg: {
    air: [['Salzburg W. A. Mozart (SZG)', '잘츠부르크 공항 (SZG)']],
    rail: [['Salzburg Hbf', '잘츠부르크 중앙역']],
  },
  innsbruck: {
    air: [['Innsbruck (INN)', '인스브루크 공항 (INN)']],
    rail: [['Innsbruck Hbf', '인스브루크 중앙역']],
  },
  graz: {
    air: [['Graz (GRZ)', '그라츠 공항 (GRZ)']],
    rail: [['Graz Hbf', '그라츠 중앙역']],
  },
  linz: {
    air: [['Linz (LNZ)', '린츠 공항 (LNZ)'], VIE('빈|Vienna')],
    rail: [['Linz Hbf', '린츠 중앙역']],
  },
  durnstein: {
    air: [VIE('빈|Vienna')],
    rail: [['Krems an der Donau', '크렘스역', '뒤른슈타인까지 715번 버스|bus 715 to Dürnstein']],
    port: [['Dürnstein', '뒤른슈타인 선착장', '바하우 유람선|Wachau boats']],
  },
  'bad-ischl': {
    air: [SZG()],
    rail: [['Bad Ischl', '바트 이슐역']],
    bus: [['Bad Ischl Bahnhof', '바트 이슐역 버스 정류장', '잘츠부르크행 150번 버스|bus 150 to Salzburg']],
  },
  werfen: {
    air: [SZG()],
    rail: [['Werfen', '베르펜역']],
  },
  'zell-am-see': {
    air: [SZG(), ['Innsbruck (INN)', '인스브루크 공항 (INN)', '인스브루크|Innsbruck']],
    rail: [['Zell am See', '첼암제역']],
    bus: [['Zell am See Bahnhof', '첼암제역 버스 정류장', '카프룬행 660번·크리믈행 670번|bus 660 to Kaprun, 670 to Krimml']],
  },
  kitzbuhel: {
    air: [['Innsbruck (INN)', '인스브루크 공항 (INN)', '인스브루크|Innsbruck'], SZG(), MUC()],
    rail: [['Kitzbühel', '키츠뷔엘역']],
  },
  bregenz: {
    air: [['Zürich Flughafen (ZRH)', '취리히 공항 (ZRH)', '스위스 취리히|Zurich, Switzerland'], ['Friedrichshafen (FDH)', '프리드리히스하펜 공항 (FDH)', '독일 프리드리히스하펜|Friedrichshafen, Germany']],
    rail: [['Bregenz', '브레겐츠역']],
    port: [['Bregenz Hafen', '브레겐츠 항구', '보덴 호수 유람선|Lake Constance boats']],
  },
  klagenfurt: {
    air: [['Klagenfurt (KLU)', '클라겐푸르트 공항 (KLU)'], VIE()],
    rail: [['Klagenfurt Hbf', '클라겐푸르트 중앙역']],
  },
  hallstatt: {
    air: [SZG()],
    rail: [['Hallstatt', '할슈타트역', '호수 건너편 · 배로 연결|across the lake · boat link']],
    bus: [['Hallstatt Lahn', '할슈타트 란 버스 정류장']],
    port: [['Hallstatt Markt', '할슈타트 마르크트 선착장', '기차역 연결 배·호수 유람선|boat to the rail station and lake cruises']],
  },

  // —— cz ——
  prague: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)']],
    rail: [
      ['Praha hlavní nádraží', '프라하 중앙역'],
      ['Praha-Holešovice', '프라하 홀레쇼비체역'],
    ],
    bus: [['ÚAN Florenc', '플로렌츠 중앙버스터미널']],
  },
  plzen: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Plzeň hlavní nádraží', '플젠 중앙역']],
    bus: [['Plzeň CAN', '플젠 중앙 버스터미널']],
  },
  'kutna-hora': {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [
      ['Kutná Hora hlavní nádraží', '쿠트나호라 중앙역', '세들레츠 근처 · 시내까지 연결 열차|near Sedlec · connecting train to the town'],
      ['Kutná Hora město', '쿠트나호라 시내역'],
    ],
  },
  mikulov: {
    air: [['Brno–Tuřany (BRQ)', '브르노 공항 (BRQ)', '브르노|Brno'], VIE()],
    rail: [['Mikulov na Moravě', '미쿨로프역']],
  },
  znojmo: {
    air: [VIE('오스트리아 빈 · 기차로 약 2시간|Vienna, Austria · about 2 hrs by train'), ['Brno (BRQ)', '브르노 공항 (BRQ)', '브르노|Brno']],
    rail: [['Znojmo', '즈노이모역']],
    bus: [['Znojmo autobusové nádraží', '즈노이모 버스터미널']],
  },
  telc: {
    air: [['Brno–Tuřany (BRQ)', '브르노 공항 (BRQ)', '브르노|Brno'], PRG()],
    bus: [['Telč, autobusové nádraží', '텔치 버스터미널']],
  },
  brno: {
    air: [['Brno–Tuřany (BRQ)', '브르노 공항 (BRQ)', '운항편 적음|few flights'], VIE()],
    rail: [['Brno hlavní nádraží', '브르노 중앙역']],
    bus: [['ÚAN Zvonařka', '즈보나르슈카 중앙버스터미널']],
  },
  'cesky-krumlov': {
    air: [PRG()],
    rail: [['Český Krumlov', '체스키 크룸로프역']],
    bus: [['Autobusové nádraží Český Krumlov', '체스키 크룸로프 버스터미널']],
  },
  'karlovy-vary': {
    air: [PRG(), ['Karlovy Vary (KLV)', '카를로비 바리 공항 (KLV)', '정기편 없음 · 전세기 위주|no scheduled flights · charters only']],
    rail: [
      ['Karlovy Vary', '카를로비 바리역 (상부역)'],
      ['Karlovy Vary dolní nádraží', '카를로비 바리 하부역'],
    ],
    bus: [['Terminál Karlovy Vary', '카를로비 바리 버스터미널']],
  },
  hrensko: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague'], ['Dresden (DRS)', '드레스덴 공항 (DRS)', '드레스덴|Dresden']],
    rail: [['Děčín hlavní nádraží', '데친 중앙역', '흐렌스코까지 434번 버스|bus 434 to Hřensko']],
    bus: [['Hřensko', '흐렌스코 버스 정류장']],
  },
  olomouc: {
    air: [PRG('기차로 약 2시간 20분|About 2 hrs 20 by train'), VIE('기차로 약 2시간 40분, 브르제츨라프 환승|About 2 hrs 40 by train, change at Břeclav')],
    rail: [['Olomouc hlavní nádraží', '올로모우츠 중앙역']],
  },
  'ceske-budejovice': {
    air: [PRG()],
    rail: [['České Budějovice', '체스케 부데요비체역']],
    bus: [['Autobusové nádraží České Budějovice', '체스케 부데요비체 버스터미널']],
  },

  // —— sk ——
  bratislava: {
    air: [['Bratislava M. R. Štefánik (BTS)', '브라티슬라바 공항 (BTS)'], VIE()],
    rail: [['Bratislava hlavná stanica', '브라티슬라바 중앙역']],
    bus: [['Autobusová stanica Nivy', '니비 버스터미널']],
  },
  kosice: {
    air: [['Košice (KSC)', '코시체 공항 (KSC)']],
    rail: [['Košice', '코시체역']],
    bus: [['Autobusová stanica Košice', '코시체 버스터미널']],
  },
  bardejov: {
    air: [['Košice (KSC)', '코시체 공항 (KSC)', '코시체|Košice']],
    rail: [['Bardejov', '바르데요프역', '열차 적음 · 프레쇼우 환승|few trains · change at Prešov']],
    bus: [['Bardejov, autobusová stanica', '바르데요프 버스터미널']],
  },
  poprad: {
    air: [['Poprad-Tatry (TAT)', '포프라트 타트리 공항 (TAT)', '런던행 주 2회 위주|mainly London twice a week'], KRK('폴란드 크라쿠프|Kraków, Poland')],
    rail: [['Poprad-Tatry', '포프라트 타트리역']],
    bus: [['Autobusová stanica Poprad', '포프라트 버스터미널']],
  },
  levoca: {
    air: [['Poprad-Tatry (TAT)', '포프라트 타트리 공항 (TAT)', '포프라트|Poprad'], ['Košice (KSC)', '코시체 공항 (KSC)', '코시체|Košice']],
    rail: [['Spišská Nová Ves', '스피시스카노바베스역', '레보차행 버스 약 20분|bus to Levoča, about 20 min']],
    bus: [['Levoča, autobusová stanica', '레보차 버스터미널']],
  },
  'banska-bystrica': {
    air: [BTS()],
    rail: [['Banská Bystrica', '반스카비스트리차역']],
    bus: [['Autobusová stanica Banská Bystrica', '반스카비스트리차 버스터미널']],
  },
  'banska-stiavnica': {
    air: [BTS('기차·버스로 약 3시간 20분|About 3 hrs 20 by train and bus')],
    rail: [['Banská Štiavnica', '반스카슈티아브니차역', '구시가까지 오르막 약 2km|about 2 km uphill to the old town']],
    bus: [['Banská Štiavnica, autobusová stanica', '반스카슈티아브니차 버스 정류장']],
  },
  trencin: {
    air: [BTS()],
    rail: [['Trenčín', '트렌친역']],
    bus: [['Autobusová stanica Trenčín', '트렌친 버스터미널']],
  },
  nitra: {
    air: [BTS('버스로 약 1시간 15분|About 1 hr 15 by bus')],
    rail: [['Nitra', '니트라역']],
    bus: [['Nitra, autobusová stanica', '니트라 버스터미널']],
  },

  // —— hu ——
  tihany: {
    air: [BUD('기차·버스로 약 3시간|About 3 hrs by train and bus')],
    rail: [['Balatonfüred', '발라톤퓌레드역', '티하니까지 7355번 버스로 약 15분|bus 7355 to Tihany, about 15 min']],
  },
  keszthely: {
    air: [['Hévíz–Balaton (SOB)', '헤비즈-발라톤 공항 (SOB)', '사르멜레크|Sármellék'], BUD()],
    rail: [['Keszthely', '케스트헤이역']],
    bus: [['Keszthely autóbusz-állomás', '케스트헤이 버스터미널']],
  },
  szentendre: {
    air: [BUD()],
    rail: [['Szentendre HÉV', '센텐드레 HÉV역', '부다페스트 바차니 광장행 교외선 H5|suburban line H5 to Batthyány tér']],
  },
  gyor: {
    air: [VIE('오스트리아 빈 · 기차로 약 1시간 30분|Vienna, Austria · about 1 hr 30 by train'), BUD()],
    rail: [['Győr', '죄르역']],
    bus: [['Győr autóbusz-állomás', '죄르 버스터미널']],
  },
  sopron: {
    air: [VIE('오스트리아 빈 · 기차로 약 1시간 30분|Vienna, Austria · about 1 hr 30 by train'), BUD()],
    rail: [['Sopron', '쇼프론역']],
    bus: [['Sopron autóbusz-állomás', '쇼프론 버스터미널']],
  },
  budapest: {
    air: [['Budapest Liszt Ferenc (BUD)', '부다페스트 공항 (BUD)']],
    rail: [
      ['Budapest-Keleti', '부다페스트 동역 (켈레티)'],
      ['Budapest-Nyugati', '부다페스트 서역 (뉴가티)'],
      ['Budapest-Déli', '부다페스트 남역 (델리)'],
    ],
    bus: [['Népliget autóbusz-pályaudvar', '네플리게트 버스터미널']],
  },
  debrecen: {
    air: [['Debrecen (DEB)', '데브레첸 공항 (DEB)'], BUD()],
    rail: [['Debrecen', '데브레첸역']],
    bus: [['Debrecen autóbusz-állomás', '데브레첸 버스터미널']],
  },
  pecs: {
    air: [BUD()],
    rail: [['Pécs', '페치역']],
    bus: [['Pécs autóbusz-állomás', '페치 버스터미널']],
  },
  szeged: {
    air: [BUD()],
    rail: [['Szeged', '세게드역']],
    bus: [['Mars tér autóbusz-állomás', '마르스 광장 버스터미널']],
  },
  eger: {
    air: [BUD()],
    rail: [['Eger', '에게르역']],
    bus: [['Eger autóbusz-állomás', '에게르 버스터미널']],
  },
  holloko: {
    air: [BUD('버스로 약 2시간 30분|About 2 hrs 30 by bus')],
    bus: [['Hollókő', '홀로쾨 버스 정류장']],
  },
  tokaj: {
    air: [['Debrecen (DEB)', '데브레첸 공항 (DEB)', '데브레첸|Debrecen'], BUD()],
    rail: [['Tokaj', '토카이역', '마을까지 걸어서 약 15분|about 15 min on foot to the town']],
  },

  // —— pl ——
  warsaw: {
    air: [
      ['Warszawa Chopin (WAW)', '바르샤바 쇼팽 공항 (WAW)'],
      ['Warszawa-Modlin (WMI)', '바르샤바 모들린 공항 (WMI)', '모들린 · 저비용 항공|Modlin · low-cost carriers'],
    ],
    rail: [
      ['Warszawa Centralna', '바르샤바 중앙역'],
      ['Warszawa Zachodnia', '바르샤바 서역'],
    ],
    bus: [['Dworzec Autobusowy Warszawa Zachodnia', '바르샤바 서부 버스터미널']],
  },
  lodz: {
    air: [['Łódź Władysław Reymont (LCJ)', '우치 공항 (LCJ)', '노선 적음|few routes'], ['Warszawa Chopin (WAW)', '바르샤바 쇼팽 공항 (WAW)', '바르샤바|Warsaw']],
    rail: [['Łódź Fabryczna', '우치 파브리치나역']],
  },
  krakow: {
    air: [['Kraków John Paul II (KRK)', '크라쿠프 공항 (KRK)']],
    rail: [['Kraków Główny', '크라쿠프 중앙역']],
    bus: [['Małopolski Dworzec Autobusowy (MDA)', '크라쿠프 버스터미널 (MDA)']],
  },
  czestochowa: {
    air: [['Katowice (KTW)', '카토비체 공항 (KTW)', '카토비체|Katowice'], KRK('크라쿠프|Kraków')],
    rail: [['Częstochowa', '쳉스토호바역']],
  },
  gdansk: {
    air: [['Gdańsk Lech Wałęsa (GDN)', '그단스크 공항 (GDN)']],
    rail: [['Gdańsk Główny', '그단스크 중앙역']],
    bus: [['Dworzec Autobusowy Gdańsk', '그단스크 버스터미널']],
    port: [['Terminal Promowy Westerplatte', '베스테르플라테 페리터미널', '스웨덴행 페리|ferry to Sweden']],
  },
  malbork: {
    air: [['Gdańsk Lech Wałęsa (GDN)', '그단스크 공항 (GDN)', '그단스크|Gdańsk']],
    rail: [['Malbork', '말보르크역', '성까지 걸어서 약 15분|about 15 min on foot to the castle']],
  },
  wroclaw: {
    air: [['Wrocław Copernicus (WRO)', '브로츠와프 공항 (WRO)']],
    rail: [['Wrocław Główny', '브로츠와프 중앙역']],
    bus: [['Dworzec Autobusowy Wrocław', '브로츠와프 버스터미널']],
  },
  poznan: {
    air: [['Poznań–Ławica (POZ)', '포즈난 공항 (POZ)']],
    rail: [['Poznań Główny', '포즈난 중앙역']],
    bus: [['Dworzec Autobusowy Poznań', '포즈난 버스터미널']],
  },
  zakopane: {
    air: [KRK()],
    rail: [['Zakopane', '자코파네역']],
    bus: [['Dworzec Autobusowy Zakopane', '자코파네 버스터미널']],
  },
  lublin: {
    air: [['Lublin (LUZ)', '루블린 공항 (LUZ)']],
    rail: [['Lublin Główny', '루블린 중앙역']],
    bus: [['Dworzec Lublin', '루블린 버스터미널']],
  },
  torun: {
    air: [['Bydgoszcz (BZG)', '비드고슈치 공항 (BZG)', '비드고슈치|Bydgoszcz']],
    rail: [
      ['Toruń Główny', '토룬 중앙역'],
      ['Toruń Miasto', '토룬 미아스토역', '구시가지 근처|near the Old Town'],
    ],
    bus: [['Dworzec Autobusowy Toruń', '토룬 버스터미널']],
  },
}
