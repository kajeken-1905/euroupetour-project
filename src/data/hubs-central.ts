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
  quedlinburg: {
    air: [['Leipzig/Halle (LEJ)', '라이프치히/할레 공항 (LEJ)', '라이프치히|Leipzig'], ['Berlin Brandenburg (BER)', '베를린 브란덴부르크 공항 (BER)', '베를린|Berlin']],
    rail: [['Quedlinburg', '크베들린부르크역'], ['Wernigerode', '베르니게로데역', '브로켄행 협궤 열차|narrow-gauge trains to the Brocken']],
  },
  schwerin: {
    air: [['Hamburg (HAM)', '함부르크 공항 (HAM)', '함부르크|Hamburg']],
    rail: [['Schwerin Hbf', '슈베린 중앙역']],
  },
  konstanz: {
    air: [['Zürich (ZRH)', '취리히 공항 (ZRH)', '스위스 취리히|Zürich, Switzerland'], ['Friedrichshafen (FDH)', '프리드리히스하펜 공항 (FDH)', '프리드리히스하펜|Friedrichshafen']],
    rail: [['Konstanz', '콘스탄츠역', '구시가와 항구 바로 앞|next to the old town and harbour']],
    port: [['Konstanz Hafen', '콘스탄츠 항구', '보덴호 유람선|Lake Constance boats']],
  },
  eisenach: {
    air: [['Erfurt-Weimar (ERF)', '에르푸르트-바이마르 공항 (ERF)', '에르푸르트|Erfurt'], FRA()],
    rail: [['Eisenach', '아이제나흐역']],
  },
  hannover: {
    air: [['Hannover (HAJ)', '하노버 공항 (HAJ)']],
    rail: [['Hannover Hbf', '하노버 중앙역']],
  },
  hameln: {
    air: [['Hannover (HAJ)', '하노버 공항 (HAJ)']],
    rail: [['Hameln', '하멜른역', '구시가까지 걸어서 약 15분|about 15 min walk to the old town'], ['Hildesheim Hbf', '힐데스하임 중앙역']],
  },
  goslar: {
    air: [['Hannover (HAJ)', '하노버 공항 (HAJ)']],
    rail: [['Goslar', '고슬라어역']],
  },
  luneburg: {
    air: [['Hamburg (HAM)', '함부르크 공항 (HAM)', '함부르크|Hamburg']],
    rail: [['Lüneburg', '뤼네부르크역'], ['Celle', '첼레역']],
  },
  wismar: {
    air: [['Hamburg (HAM)', '함부르크 공항 (HAM)', '함부르크|Hamburg']],
    rail: [['Wismar', '비스마르역']],
  },
  rostock: {
    air: [['Rostock-Laage (RLG)', '로스토크 공항 (RLG)', '운항편 적음|few flights'], ['Hamburg (HAM)', '함부르크 공항 (HAM)', '함부르크|Hamburg']],
    rail: [['Rostock Hbf', '로스토크 중앙역'], ['Warnemünde', '바르네뮌데역']],
    port: [['Warnemünde Cruise Center', '바르네뮌데 크루즈 터미널'], ['Rostock Überseehafen', '로스토크 국제항', '스칸디나비아행 페리|ferries to Scandinavia']],
  },
  stralsund: {
    air: [['Rostock-Laage (RLG)', '로스토크 공항 (RLG)', '운항편 적음|few flights'], ['Berlin Brandenburg (BER)', '베를린 브란덴부르크 공항 (BER)', '베를린|Berlin']],
    rail: [['Stralsund Hbf', '슈트랄준트 중앙역'], ['Ostseebad Binz', '빈츠역', '뤼겐섬|Rügen']],
  },
  bonn: {
    air: [['Köln Bonn (CGN)', '쾰른 본 공항 (CGN)']],
    rail: [['Bonn Hbf', '본 중앙역']],
  },
  dusseldorf: {
    air: [['Düsseldorf (DUS)', '뒤셀도르프 공항 (DUS)']],
    rail: [['Düsseldorf Hbf', '뒤셀도르프 중앙역'], ['Düsseldorf Flughafen', '뒤셀도르프 공항역']],
  },
  wuppertal: {
    air: [['Düsseldorf (DUS)', '뒤셀도르프 공항 (DUS)']],
    rail: [['Wuppertal Hbf', '부퍼탈 중앙역']],
  },
  essen: {
    air: [['Düsseldorf (DUS)', '뒤셀도르프 공항 (DUS)']],
    rail: [['Essen Hbf', '에센 중앙역']],
  },
  dortmund: {
    air: [['Dortmund (DTM)', '도르트문트 공항 (DTM)'], ['Düsseldorf (DUS)', '뒤셀도르프 공항 (DUS)', '뒤셀도르프|Düsseldorf']],
    rail: [['Dortmund Hbf', '도르트문트 중앙역']],
  },
  munster: {
    air: [['Münster Osnabrück (FMO)', '뮌스터 오스나브뤼크 공항 (FMO)'], ['Düsseldorf (DUS)', '뒤셀도르프 공항 (DUS)', '뒤셀도르프|Düsseldorf']],
    rail: [['Münster (Westf) Hbf', '뮌스터 중앙역']],
  },
  darmstadt: {
    air: [FRA()],
    rail: [['Darmstadt Hbf', '다름슈타트 중앙역']],
  },
  marburg: {
    air: [FRA()],
    rail: [['Marburg (Lahn)', '마르부르크역']],
  },
  kassel: {
    air: [FRA()],
    rail: [['Kassel-Wilhelmshöhe', '카셀 빌헬름스회에역', 'ICE 정차역|ICE station'], ['Kassel Hbf', '카셀 중앙역']],
  },
  mainz: {
    air: [FRA()],
    rail: [['Mainz Hbf', '마인츠 중앙역'], ['Speyer Hbf', '슈파이어 중앙역']],
  },
  saarbrucken: {
    air: [['Saarbrücken (SCN)', '자르브뤼켄 공항 (SCN)', '운항편 적음|few flights'], FRA(), LUX()],
    rail: [['Saarbrücken Hbf', '자르브뤼켄 중앙역']],
  },
  karlsruhe: {
    air: [['Karlsruhe/Baden-Baden (FKB)', '카를스루에/바덴바덴 공항 (FKB)'], FRA()],
    rail: [['Karlsruhe Hbf', '카를스루에 중앙역']],
  },
  'baden-baden': {
    air: [['Karlsruhe/Baden-Baden (FKB)', '카를스루에/바덴바덴 공항 (FKB)']],
    rail: [['Baden-Baden', '바덴바덴역', '시내까지 약 4km, 버스|about 4 km to the centre, by bus']],
  },
  ulm: {
    air: [['Stuttgart (STR)', '슈투트가르트 공항 (STR)', '슈투트가르트|Stuttgart'], MUC()],
    rail: [['Ulm Hbf', '울름 중앙역'], ['Tübingen Hbf', '튀빙겐 중앙역']],
  },
  augsburg: {
    air: [MUC()],
    rail: [['Augsburg Hbf', '아우크스부르크 중앙역']],
  },
  landshut: {
    air: [MUC('뮌헨 (약 35km)|Munich (about 35 km)')],
    rail: [['Landshut (Bay) Hbf', '란츠후트 중앙역', '구시가까지 버스|bus to the old town']],
  },
  chiemsee: {
    air: [MUC(), SZG()],
    rail: [['Prien am Chiemsee', '프린 암 킴제역']],
    port: [['Prien-Stock', '프린-슈톡 선착장', '섬행 배|boats to the islands']],
  },
  bayreuth: {
    air: [['Nürnberg (NUE)', '뉘른베르크 공항 (NUE)', '뉘른베르크|Nuremberg']],
    rail: [['Bayreuth Hbf', '바이로이트 중앙역']],
  },
  nordlingen: {
    air: [MUC(), ['Nürnberg (NUE)', '뉘른베르크 공항 (NUE)', '뉘른베르크|Nuremberg']],
    rail: [['Nördlingen', '뇌르틀링겐역']],
  },
  passau: {
    air: [MUC(), ['Linz (LNZ)', '린츠 공항 (LNZ)', '오스트리아 린츠|Linz, Austria']],
    rail: [['Passau Hbf', '파사우 중앙역']],
    port: [['Passau Anlegestelle', '파사우 선착장', '도나우 유람선|Danube boats']],
  },
  oberstdorf: {
    air: [MUC(), ['Memmingen (FMM)', '메밍겐 공항 (FMM)', '저가 항공|low-cost flights']],
    rail: [['Oberstdorf', '오버스트도르프역']],
  },
  meissen: {
    air: [['Dresden (DRS)', '드레스덴 공항 (DRS)', '드레스덴|Dresden']],
    rail: [['Meißen', '마이센역'], ['Meißen Altstadt', '마이센 구시가역']],
  },
  wittenberg: {
    air: [BER()],
    rail: [['Lutherstadt Wittenberg Hbf', '비텐베르크 중앙역'], ['Dessau Hbf', '데사우 중앙역']],
  },
  naumburg: {
    air: [['Leipzig/Halle (LEJ)', '라이프치히/할레 공항 (LEJ)']],
    rail: [['Naumburg (Saale) Hbf', '나움부르크 중앙역', '시내까지 약 1.5km|about 1.5 km to the centre'], ['Halle (Saale) Hbf', '할레 중앙역']],
  },
  erfurt: {
    air: [['Erfurt-Weimar (ERF)', '에르푸르트-바이마르 공항 (ERF)', '운항편 적음|few flights'], FRA()],
    rail: [['Erfurt Hbf', '에르푸르트 중앙역', 'ICE 교차역|ICE hub']],
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
  murcia: {
    air: [['Región de Murcia (RMU)', '무르시아 공항 (RMU)'], ['Alicante–Elche (ALC)', '알리칸테 공항 (ALC)', '알리칸테|Alicante']],
    rail: [['Murcia del Carmen', '무르시아 델 카르멘역']],
    bus: [['Estación de Autobuses de Murcia', '무르시아 버스터미널']],
  },
  cartagena: {
    air: [['Región de Murcia (RMU)', '무르시아 공항 (RMU)'], ['Alicante–Elche (ALC)', '알리칸테 공항 (ALC)', '알리칸테|Alicante']],
    rail: [['Cartagena', '카르타헤나역']],
    bus: [['Estación de Autobuses de Cartagena', '카르타헤나 버스터미널']],
  },
  'vitoria-gasteiz': {
    air: [['Bilbao (BIO)', '빌바오 공항 (BIO)', '빌바오|Bilbao'], ['Vitoria (VIT)', '비토리아 공항 (VIT)', '운항편 적음|few flights']],
    rail: [['Vitoria-Gasteiz', '비토리아가스테이스역']],
    bus: [['Estación de Autobuses de Vitoria-Gasteiz', '비토리아 버스터미널']],
  },
  'a-coruna': {
    air: [['A Coruña (LCG)', '아코루냐 공항 (LCG)'], ['Santiago (SCQ)', '산티아고 공항 (SCQ)', '산티아고|Santiago']],
    rail: [['A Coruña', '아코루냐역']],
    bus: [['Estación de Autobuses de A Coruña', '아코루냐 버스터미널']],
  },
  lugo: {
    air: [['Santiago (SCQ)', '산티아고 공항 (SCQ)', '산티아고|Santiago'], ['A Coruña (LCG)', '아코루냐 공항 (LCG)', '아코루냐|A Coruña']],
    rail: [['Lugo', '루고역']],
    bus: [['Estación de Autobuses de Lugo', '루고 버스터미널']],
  },
  sarria: {
    air: [['Santiago (SCQ)', '산티아고 공항 (SCQ)', '산티아고|Santiago']],
    rail: [['Sarria', '사리아역']],
    bus: [['Sarria bus stop', '사리아 버스 정류장', '루고·산티아고행|to Lugo, Santiago']],
  },
  vigo: {
    air: [['Vigo (VGO)', '비고 공항 (VGO)'], ['Santiago (SCQ)', '산티아고 공항 (SCQ)', '산티아고|Santiago']],
    rail: [['Vigo-Urzáiz', '비고 우르사이스역', '고속열차|high-speed trains'], ['Vigo-Guixar', '비고 기샤르역', '포르투행 열차|trains to Porto']],
    port: [['Estación Marítima de Vigo', '비고 여객 터미널', '시에스 제도행 배|boats to the Cíes Islands']],
  },
  pontevedra: {
    air: [['Vigo (VGO)', '비고 공항 (VGO)', '비고|Vigo'], ['Santiago (SCQ)', '산티아고 공항 (SCQ)', '산티아고|Santiago']],
    rail: [['Pontevedra', '폰테베드라역']],
    bus: [['Estación de Autobuses de Pontevedra', '폰테베드라 버스터미널']],
  },
  'las-palmas': {
    air: [['Gran Canaria (LPA)', '그란카나리아 공항 (LPA)']],
    port: [['Puerto de La Luz', '라 루스 항구', '테네리페·란사로테 등 섬 사이 페리|inter-island ferries']],
  },
  lanzarote: {
    air: [['Lanzarote (ACE)', '란사로테 공항 (ACE)']],
    port: [['Puerto de Arrecife', '아레시페 항구', '섬 사이 페리|inter-island ferries']],
  },
  gijon: {
    air: [['Asturias (OVD)', '아스투리아스 공항 (OVD)']],
    rail: [['Gijón', '히혼역']],
    bus: [['Estación de Autobuses de Gijón', '히혼 버스터미널']],
  },
  valladolid: {
    air: [MAD()],
    rail: [['Valladolid Campo Grande', '바야돌리드 캄포 그란데역']],
    bus: [['Estación de Autobuses de Valladolid', '바야돌리드 버스터미널']],
  },
  astorga: {
    air: [MAD()],
    rail: [['Astorga', '아스토르가역', '시내까지 걸어서 약 15분|about 15 min’s walk to the centre']],
    bus: [['Estación de Autobuses de Astorga', '아스토르가 버스터미널']],
  },
  ponferrada: {
    air: [MAD()],
    rail: [['Ponferrada', '폰페라다역']],
    bus: [['Estación de Autobuses de Ponferrada', '폰페라다 버스터미널']],
  },
  almagro: {
    air: [MAD()],
    rail: [['Ciudad Real', '시우다드레알역', '마드리드행 AVE, 알마그로까지 약 25km|AVE to Madrid; about 25 km to Almagro'], ['Almagro', '알마그로역', '지역 열차|regional trains']],
  },
  siguenza: {
    air: [MAD()],
    rail: [['Sigüenza', '시구엔사역']],
  },
  antequera: {
    air: [AGP()],
    rail: [['Antequera-Santa Ana', '안테케라 산타아나역', 'AVE, 시내까지 택시 약 15분|AVE; about 15 min by taxi to town'], ['Antequera', '안테케라역', '지역 열차|regional trains']],
    bus: [['Estación de Autobuses de Antequera', '안테케라 버스터미널']],
  },
  huesca: {
    air: [['Zaragoza (ZAZ)', '사라고사 공항 (ZAZ)', '사라고사|Zaragoza'], MAD()],
    rail: [['Huesca', '우에스카역']],
    bus: [['Estación Intermodal de Huesca', '우에스카 버스터미널']],
  },
  cadaques: {
    air: [['Girona (GRO)', '지로나 공항 (GRO)', '지로나|Girona'], BCN()],
    bus: [['Cadaqués bus station', '카다케스 버스 정류장', '바르셀로나·피게레스행|to Barcelona, Figueres']],
  },
  peniscola: {
    air: [['Castellón (CDT)', '카스테욘 공항 (CDT)', '운항편 적음|few flights'], ['Valencia (VLC)', '발렌시아 공항 (VLC)', '발렌시아|Valencia']],
    rail: [['Benicarló-Peñíscola', '베니카를로-페니스콜라역', '마을까지 약 7km, 버스나 택시|about 7 km to the village, bus or taxi']],
  },
  'santo-domingo-de-la-calzada': {
    air: [['Bilbao (BIO)', '빌바오 공항 (BIO)', '빌바오|Bilbao']],
    bus: [['Santo Domingo bus stop', '산토도밍고 버스 정류장', '로그로뇨·부르고스행|to Logroño, Burgos']],
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
  beirut: {
    air: [['Beirut–Rafic Hariri International (BEY)', '베이루트 라피크 하리리 국제공항 (BEY)', '시내까지 차로 약 20분|about 20 min to the city by car']],
  },
  byblos: {
  },
  bsharri: {
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

  'escaldes-engordany': {
    air: [
      ["Andorra–La Seu d'Urgell (LEU)", '안도라–라 세우 두르젤 공항 (LEU)', '스페인 라 세우 두르젤 · 마드리드·팔마행 주 2회|La Seu d’Urgell, Spain · Madrid and Palma twice a week'],
      BCN('스페인 바르셀로나|Barcelona, Spain'),
      ['Toulouse–Blagnac (TLS)', '툴루즈 블라냑 공항 (TLS)', '프랑스 툴루즈|Toulouse, France'],
    ],
    rail: [["L'Hospitalet-près-l'Andorre", '로스피탈레 프레 랑도르역', '프랑스 · 안도라엔 철도 없음|France · no railway in Andorra']],
    bus: [["Estació Nacional d'Autobusos", '안도라 국립 버스터미널', '안도라라베야|Andorra la Vella']],
  },
  'la-massana': {
    air: [
      ["Andorra–La Seu d'Urgell (LEU)", '안도라–라 세우 두르젤 공항 (LEU)', '스페인 라 세우 두르젤 · 마드리드·팔마행 주 2회|La Seu d’Urgell, Spain · Madrid and Palma twice a week'],
      BCN('스페인 바르셀로나|Barcelona, Spain'),
      ['Toulouse–Blagnac (TLS)', '툴루즈 블라냑 공항 (TLS)', '프랑스 툴루즈|Toulouse, France'],
    ],
    bus: [["Estació Nacional d'Autobusos", '안도라 국립 버스터미널', '안도라라베야|Andorra la Vella']],
  },
  canillo: {
    air: [
      ["Andorra–La Seu d'Urgell (LEU)", '안도라–라 세우 두르젤 공항 (LEU)', '스페인 라 세우 두르젤 · 마드리드·팔마행 주 2회|La Seu d’Urgell, Spain · Madrid and Palma twice a week'],
      BCN('스페인 바르셀로나|Barcelona, Spain'),
      ['Toulouse–Blagnac (TLS)', '툴루즈 블라냑 공항 (TLS)', '프랑스 툴루즈|Toulouse, France'],
    ],
    bus: [["Estació Nacional d'Autobusos", '안도라 국립 버스터미널', '안도라라베야|Andorra la Vella']],
  },
  soldeu: {
    air: [
      ["Andorra–La Seu d'Urgell (LEU)", '안도라–라 세우 두르젤 공항 (LEU)', '스페인 라 세우 두르젤 · 마드리드·팔마행 주 2회|La Seu d’Urgell, Spain · Madrid and Palma twice a week'],
      BCN('스페인 바르셀로나|Barcelona, Spain'),
      ['Toulouse–Blagnac (TLS)', '툴루즈 블라냑 공항 (TLS)', '프랑스 툴루즈|Toulouse, France'],
    ],
    rail: [["L'Hospitalet-près-l'Andorre", '로스피탈레 프레 랑도르역', '프랑스 · 안도라엔 철도 없음|France · no railway in Andorra']],
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
  'ponte-de-lima': {
    air: [['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']],
    bus: [['Ponte de Lima bus station', '폰테 드 리마 버스 터미널', '포르투·브라가행|to Porto, Braga']],
  },
  geres: {
    air: [['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']],
    bus: [['Gerês', '제레스 버스 정류장', '브라가행|to Braga']],
  },
  braganca: {
    air: [['Bragança (BGC)', '브라간사 공항 (BGC)', '운항편 적음|few flights'], ['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']],
    bus: [['Bragança bus station', '브라간사 버스 터미널', '포르투·리스본행|to Porto, Lisbon']],
  },
  'vila-real': {
    air: [['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']],
    bus: [['Vila Real bus station', '빌라 레알 버스 터미널', '포르투행|to Porto']],
  },
  viseu: {
    air: [['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']],
    bus: [['Viseu bus station', '비세우 버스 터미널', '리스본·포르투·코임브라행|to Lisbon, Porto, Coimbra']],
  },
  piodao: {
    air: [['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)', '리스본|Lisbon'], ['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']],
  },
  bucaco: {
    air: [['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']],
    rail: [['Luso-Buçaco', '루소-부사코역']],
  },
  almeida: {
    air: [['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']],
    rail: [['Guarda', '과르다역', '알메이다까지 차로 약 45분|about 45 min by car to Almeida']],
  },
  sesimbra: {
    air: [['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)', '리스본|Lisbon']],
    bus: [['Sesimbra bus terminal', '세짐브라 버스 터미널', '리스본행|to Lisbon']],
  },
  mertola: {
    air: [['Faro (FAO)', '파루 공항 (FAO)', '파루|Faro']],
    bus: [['Mértola bus station', '메르톨라 버스 정류장', '리스본·베자행|to Lisbon, Beja']],
  },
  'vila-nova-de-milfontes': {
    air: [['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)', '리스본|Lisbon'], ['Faro (FAO)', '파루 공항 (FAO)', '파루|Faro']],
    bus: [['Vila Nova de Milfontes bus stop', '밀폰테스 버스 정류장', '리스본행|to Lisbon']],
  },
  silves: {
    air: [['Faro (FAO)', '파루 공항 (FAO)', '파루|Faro']],
    rail: [['Silves', '실브스역', '마을까지 약 2km|about 2 km to town']],
  },
  albufeira: {
    air: [['Faro (FAO)', '파루 공항 (FAO)', '파루|Faro']],
    rail: [['Albufeira-Ferreiras', '알부페이라-페헤이라스역', '시내까지 버스|bus to town']],
    bus: [['Albufeira bus terminal', '알부페이라 버스 터미널']],
  },
  horta: {
    air: [['Horta (HOR)', '오르타 공항 (HOR)']],
    port: [['Horta ferry terminal', '오르타 선착장', '피쿠섬 마달레나행|to Madalena, Pico']],
  },
  pico: {
    air: [['Pico (PIX)', '피쿠 공항 (PIX)']],
    port: [['Madalena', '마달레나 선착장', '오르타행|to Horta']],
  },
  'porto-moniz': {
    air: [['Madeira (FNC)', '마데이라 공항 (FNC)', '푼샬|Funchal']],
    bus: [['Porto Moniz bus stop', '포르투 모니스 버스 정류장', '푼샬행|to Funchal']],
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

  skagen: {
    air: [['Aalborg (AAL)', '올보르 공항 (AAL)']],
    rail: [['Skagen', '스카겐역', '프레데릭스하운 환승|change at Frederikshavn']],
  },
  ribe: {
    air: [['Billund (BLL)', '빌룬 공항 (BLL)']],
    rail: [['Ribe', '리베역']],
  },
  billund: {
    air: [['Billund (BLL)', '빌룬 공항 (BLL)']],
    bus: [['Billund Lufthavn', '빌룬 공항 버스 정류장', '바일레·오르후스행|to Vejle and Aarhus']],
  },
  bornholm: {
    air: [['Bornholm (RNN)', '보른홀름 공항 (RNN)', '뢴네 남동쪽 5km|5 km south-east of Rønne']],
    port: [['Rønne', '뢴네 항구', '이스타(스웨덴)·쾨게행 배|ferries to Ystad (Sweden) and Køge']],
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
  falun: {
    rail: [['Falun Centralstation', '팔룬 중앙역']],
  },
  lund: {
    rail: [['Lund Central', '룬드 중앙역']],
  },
  ystad: {
    rail: [['Ystad', '위스타드역']],
    port: [['Ystad', '위스타드 항구', '덴마크 보른홀름·폴란드행|ferries to Bornholm (Denmark) and Poland']],
  },
  kalmar: {
    air: [['Kalmar Öland (KLR)', '칼마르 욀란드 공항 (KLR)']],
    rail: [['Kalmar Centralstation', '칼마르 중앙역']],
  },
  karlskrona: {
    air: [['Ronneby (RNB)', '론네뷔 공항 (RNB)', '시내에서 약 25km|about 25 km from town']],
    rail: [['Karlskrona Centralstation', '칼스크로나 중앙역']],
  },
  visby: {
    air: [['Visby (VBY)', '비스뷔 공항 (VBY)']],
    port: [['Visby', '비스뷔 항구', '니네스함·오스카르스함행 데스티나숀 고틀란드|Destination Gotland to Nynäshamn and Oskarshamn']],
  },
  'hoga-kusten': {
    air: [['Kramfors-Sollefteå (KRF)', '크람포르스 공항 (KRF)']],
    rail: [['Kramfors', '크람포르스역'], ['Örnsköldsvik C', '외른셸스비크 중앙역']],
  },
  are: {
    air: [['Åre Östersund (OSD)', '오레 외스테르순드 공항 (OSD)', '오레까지 약 100km|about 100 km to Åre']],
    rail: [['Åre', '오레역']],
  },
  lulea: {
    air: [['Luleå (LLA)', '룰레오 공항 (LLA)']],
    rail: [['Luleå', '룰레오역']],
  },
  abisko: {
    rail: [['Abisko Turiststation', '아비스코 투리스트스타숀역']],
  },

  sigtuna: {
    air: [['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)']],
    bus: [['Sigtuna busstation', '시그투나 버스 정류장', '메르스타역·알란다행|to Märsta station, Arlanda']],
  },
  vaxholm: {
    air: [['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)']],
    bus: [['Vaxholm busstation', '박스홀름 버스 정류장', '스톡홀름 테크니스카 회그스콜란행|to Tekniska högskolan, Stockholm']],
    port: [['Vaxholm', '박스홀름 선착장', '스톡홀름 스트룀카옌·군도행|to Strömkajen and the islands']],
  },
  orebro: {
    air: [['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차로 약 2시간 30분|About 2 hr 30 min by train']],
    rail: [['Örebro C', '외레브로 중앙역']],
    bus: [['Örebro resecentrum', '외레브로 버스터미널']],
  },
  vasteras: {
    air: [['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차·버스로 약 1시간 30분|About 1 hr 30 min by train or bus']],
    rail: [['Västerås C', '베스테로스 중앙역']],
    bus: [['Västerås resecentrum', '베스테로스 버스터미널']],
  },
  vadstena: {
    air: [['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차·버스로 약 3시간 30분|About 3 hr 30 min by train and bus']],
    bus: [['Vadstena busstation', '바드스테나 버스 정류장', '미엘뷔·모탈라행|to Mjölby, Motala']],
  },
  linkoping: {
    air: [['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차로 약 2시간 30분|About 2 hr 30 min by train']],
    rail: [['Linköping C', '린셰핑 중앙역']],
    bus: [['Linköping resecentrum', '린셰핑 버스터미널']],
  },
  jonkoping: {
    air: [['Göteborg Landvetter (GOT)', '예테보리 란드베테르 공항 (GOT)', '버스로 약 1시간 30분|About 1 hr 30 min by bus']],
    rail: [['Jönköping C', '옌셰핑 중앙역', '네셰 환승|change at Nässjö']],
    bus: [['Jönköping resecentrum', '옌셰핑 버스터미널']],
  },
  vaxjo: {
    air: [['Växjö Småland (VXO)', '벡셰 공항 (VXO)'], ['Copenhagen Kastrup (CPH)', '코펜하겐 공항 (CPH)', '덴마크 · 기차로 연결|Denmark · linked by train']],
    rail: [['Växjö', '벡셰역']],
    bus: [['Växjö resecentrum', '벡셰 버스터미널']],
  },
  helsingborg: {
    air: [['Copenhagen Kastrup (CPH)', '코펜하겐 공항 (CPH)', '덴마크 · 기차로 연결|Denmark · linked by train']],
    rail: [['Helsingborg C (Knutpunkten)', '헬싱보리 중앙역']],
    bus: [['Knutpunkten', '크눗풍크텐 버스터미널']],
    port: [['Helsingborg', '헬싱보리 여객선 터미널', '덴마크 헬싱외르행 20분|to Helsingør, Denmark, 20 min']],
  },
  simrishamn: {
    air: [['Copenhagen Kastrup (CPH)', '코펜하겐 공항 (CPH)', '덴마크 · 기차로 연결|Denmark · linked by train'], ['Malmö (MMX)', '말뫼 공항 (MMX)']],
    rail: [['Simrishamn', '시므리스함역', '말뫼행 종착역|end of the line from Malmö']],
    bus: [['Simrishamn busstation', '시므리스함 버스 정류장']],
  },
  smogen: {
    air: [['Göteborg Landvetter (GOT)', '예테보리 란드베테르 공항 (GOT)']],
    bus: [['Smögen', '스뫼겐 버스 정류장', '쿵스함·우데발라행|to Kungshamn, Uddevalla']],
  },
  karlstad: {
    air: [['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차로 약 3시간|About 3 hr by train']],
    rail: [['Karlstad C', '칼스타드 중앙역']],
    bus: [['Karlstad busstation', '칼스타드 버스터미널']],
  },
  mora: {
    air: [['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차로 약 4시간|About 4 hr by train']],
    rail: [['Mora', '모라역', '레트비크역도 같은 노선|Rättvik on the same line']],
    bus: [['Mora busstation', '모라 버스 정류장']],
  },
  gavle: {
    air: [['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차로 약 1시간|About 1 hr by train']],
    rail: [['Gävle C', '예블레 중앙역']],
    bus: [['Gävle resecentrum', '예블레 버스터미널']],
  },
  umea: {
    air: [['Umeå (UME)', '우메오 공항 (UME)']],
    rail: [['Umeå C', '우메오 중앙역']],
    bus: [['Vasaplan', '바사플란 버스 정류장']],
    port: [['Holmsund', '홀름순드 항구', '핀란드 바사행|to Vaasa, Finland']],
  },
  jokkmokk: {
    air: [['Luleå (LLA)', '룰레오 공항 (LLA)', '버스로 약 3시간|About 3 hr by bus']],
    bus: [['Jokkmokk busstation', '요크모크 버스 정류장', '룰레오·옐리바레행|to Luleå, Gällivare']],
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
  naantali: {
    air: [['Turku (TKU)', '투르쿠 공항 (TKU)']],
  },
  rauma: {
    bus: [['Rauman linja-autoasema', '라우마 버스터미널', '여객 철도 없음|no passenger railway']],
  },
  mariehamn: {
    air: [['Mariehamn (MHQ)', '마리에함 공항 (MHQ)']],
    port: [['Mariehamns hamn', '마리에함 항구', '투르쿠·헬싱키·스톡홀름행 페리|ferries to Turku, Helsinki and Stockholm']],
  },
  jyvaskyla: {
    air: [['Jyväskylä (JYV)', '위배스퀼래 공항 (JYV)']],
    rail: [['Jyväskylä', '위배스퀼래역']],
    bus: [['Jyväskylän matkakeskus', '위배스퀼래 교통센터']],
  },
  kuopio: {
    air: [['Kuopio (KUO)', '쿠오피오 공항 (KUO)']],
    rail: [['Kuopio', '쿠오피오역']],
    bus: [['Kuopion matkakeskus', '쿠오피오 교통센터']],
  },
  savonlinna: {
    air: [['Savonlinna (SVL)', '사본린나 공항 (SVL)']],
    rail: [['Savonlinna', '사본린나역']],
    bus: [['Savonlinnan matkakeskus', '사본린나 교통센터']],
  },
  oulu: {
    air: [['Oulu (OUL)', '오울루 공항 (OUL)']],
    rail: [['Oulu', '오울루역']],
    bus: [['Oulun linja-autoasema', '오울루 버스터미널']],
  },
  kemi: {
    air: [['Kemi-Tornio (KEM)', '케미 토르니오 공항 (KEM)']],
    rail: [['Kemi', '케미역']],
    bus: [['Kemin linja-autoasema', '케미 버스터미널']],
  },
  levi: {
    air: [['Kittilä (KTT)', '키틸래 공항 (KTT)']],
    bus: [['Levi', '레비 버스 정류장']],
  },
  inari: {
    air: [['Ivalo (IVL)', '이발로 공항 (IVL)']],
    bus: [['Inari', '이나리 버스 정류장']],
  },

  hameenlinna: {
    air: [HEL('기차로 약 1시간|About 1 hr by train')],
    rail: [['Hämeenlinna', '하메엔린나역']],
    bus: [['Hämeenlinnan linja-autoasema', '하메엔린나 버스터미널']],
  },
  lahti: {
    air: [HEL('기차로 약 1시간|About 1 hr by train')],
    rail: [['Lahti', '라티역']],
    bus: [['Lahden matkakeskus', '라티 여행 센터(버스)']],
  },
  kotka: {
    air: [HEL('버스로 약 2시간|About 2 hr by bus')],
    rail: [['Kotka', '코트카역', '코우볼라행|to Kouvola']],
    bus: [['Kotkan linja-autoasema', '코트카 버스터미널', '헬싱키행|to Helsinki']],
  },
  lappeenranta: {
    air: [HEL('기차로 약 2시간|About 2 hr by train')],
    rail: [['Lappeenranta', '라펜란타역']],
    bus: [['Lappeenrannan matkakeskus', '라펜란타 버스터미널']],
  },
  imatra: {
    air: [HEL('기차로 약 2시간 30분|About 2.5 hr by train')],
    rail: [['Imatra', '이마트라역']],
    bus: [['Imatran matkakeskus', '이마트라 여행 센터(버스)']],
  },
  fiskars: {
    air: [HEL('기차·버스로 약 1시간 30분|About 1.5 hr by train and bus')],
    rail: [['Karis (Karjaa)', '카리스(카리아)역', '버스·택시로 약 15분|about 15 min by bus or taxi']],
    bus: [['Fiskars', '피스카스 버스 정류장', '카리스역행|to Karis station']],
  },
  hanko: {
    air: [HEL('기차로 약 2시간|About 2 hr by train')],
    rail: [['Hanko', '항코역', '카리스 환승|change at Karis']],
    bus: [['Hangon linja-autoasema', '항코 버스터미널']],
  },
  pori: {
    air: [HEL('기차로 약 3시간|About 3 hr by train')],
    rail: [['Pori', '포리역', '탐페레행|to Tampere']],
    bus: [['Porin linja-autoasema', '포리 버스터미널']],
  },
  vaasa: {
    air: [['Vaasa (VAA)', '바사 공항 (VAA)']],
    rail: [['Vaasa', '바사역']],
    bus: [['Vaasan linja-autoasema', '바사 버스터미널']],
    port: [['Vaasan satama', '바사 항구', '우메오행 페리|ferries to Umeå']],
  },
  koli: {
    air: [['Joensuu (JOE)', '요엔수 공항 (JOE)', '차로 약 1시간|About 1 hr by car']],
    rail: [['Joensuu', '요엔수역', '버스·택시로 약 1시간|about 1 hr by bus or taxi']],
  },
  mikkeli: {
    air: [HEL('기차로 약 2시간 30분|About 2.5 hr by train')],
    rail: [['Mikkeli', '미켈리역']],
    bus: [['Mikkelin linja-autoasema', '미켈리 버스터미널']],
  },
  mantta: {
    air: [['Tampere-Pirkkala (TMP)', '탐페레 피르칼라 공항 (TMP)', '차로 약 1시간 30분|About 1.5 hr by car']],
    bus: [['Mäntän linja-autoasema', '맨태 버스 정류장', '탐페레행|to Tampere']],
  },
  ruka: {
    air: [['Kuusamo (KAO)', '쿠사모 공항 (KAO)', '버스로 약 30분|About 30 min by bus']],
  },
  saariselka: {
    air: [['Ivalo (IVL)', '이발로 공항 (IVL)', '버스로 약 30분|About 30 min by bus']],
    bus: [['Saariselkä', '사리셀캐 버스 정류장', '로바니에미·이발로행|to Rovaniemi, Ivalo']],
  },
  akaslompolo: {
    air: [['Kittilä (KTT)', '키틸래 공항 (KTT)', '버스로 약 50분|About 50 min by bus']],
    rail: [['Kolari', '콜라리역', '겨울철 야간열차|winter night trains']],
  },
  kilpisjarvi: {
    bus: [['Kilpisjärvi', '킬피스예르비 버스 정류장', '로바니에미행|to Rovaniemi']],
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
  fredrikstad: {
    rail: [['Fredrikstad', '프레드릭스타드역']],
    bus: [['Fredrikstad bussterminal', '프레드릭스타드 버스터미널']],
  },
  lillehammer: {
    rail: [['Lillehammer', '릴레함메르역', '오슬로 공항·오슬로 직행|direct to Oslo Airport and Oslo']],
    bus: [['Lillehammer skysstasjon', '릴레함메르 버스 정류장']],
  },
  kristiansand: {
    air: [['Kristiansand Kjevik (KRS)', '크리스티안산 공항 (KRS)']],
    rail: [['Kristiansand', '크리스티안산역']],
    port: [['Kristiansand ferry terminal', '크리스티안산 페리 터미널', '덴마크 히르트스할스행|ferries to Hirtshals, Denmark']],
  },
  voss: {
    rail: [['Voss', '보스역', '베르겐선 · 베르겐 약 1시간 15분|Bergen Line · about 1 hr 15 to Bergen']],
    bus: [['Voss skysstasjon', '보스 버스 정류장']],
  },
  odda: {
    air: [['Bergen (BGO)', '베르겐 공항 (BGO)', '버스로 약 3시간|About 3 hrs by bus']],
    bus: [['Odda rutebilstasjon', '오다 버스터미널', '철도 없음|no railway']],
  },
  geiranger: {
    air: [['Ålesund Vigra (AES)', '올레순 공항 (AES)', '차로 약 3시간|About 3 hrs by car']],
    bus: [['Geiranger', '예이랑에르 버스 정류장', '여름철 위주|mainly summer']],
    port: [['Geiranger', '예이랑에르 선착장', '헬레쉴트행 카페리 · 여름엔 후르티그루텐|car ferry to Hellesylt · Hurtigruten in summer']],
  },
  roros: {
    air: [['Røros (RRS)', '뢰로스 공항 (RRS)', '오슬로행 소형기|small planes to Oslo']],
    rail: [['Røros', '뢰로스역', '트론헤임·하마르행 뢰로스선|Røros Line to Trondheim and Hamar']],
  },
  bodo: {
    air: [['Bodø (BOO)', '보되 공항 (BOO)', '시내에서 가까움|close to the centre']],
    rail: [['Bodø', '보되역', '트론헤임행 노를란선 · 야간열차|Nordland Line to Trondheim · night train']],
    port: [['Bodø ferjeterminal', '보되 페리 터미널', '로포텐행 카페리·쾌속선, 후르티그루텐|ferries and express boats to Lofoten, Hurtigruten']],
  },
  lofoten: {
    air: [['Svolvær (SVJ)', '스볼베르 공항 (SVJ)'], ['Leknes (LKN)', '레크네스 공항 (LKN)']],
    bus: [['Svolvær', '스볼베르 버스 정류장']],
    port: [
      ['Svolvær', '스볼베르 항구', '보되행 쾌속선 · 후르티그루텐|express boat to Bodø · Hurtigruten'],
      ['Moskenes', '모스케네스 항구', '보되행 카페리|car ferry to Bodø'],
    ],
  },
  honningsvag: {
    air: [['Honningsvåg Valan (HVG)', '호닝스보그 공항 (HVG)', '트롬쇠 등 경유 소형기|small planes via Tromsø and others']],
    port: [['Honningsvåg', '호닝스보그 항구', '후르티그루텐 연안 여객선|Hurtigruten coastal voyage']],
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

  halden: {
    air: [['Oslo Gardermoen (OSL)', '오슬로 가르데르모엔 공항 (OSL)']],
    rail: [['Halden', '할덴역', '오슬로·예테보리행|to Oslo, Gothenburg']],
    bus: [['Halden bussterminal', '할덴 버스터미널']],
  },
  kongsberg: {
    air: [['Oslo Gardermoen (OSL)', '오슬로 가르데르모엔 공항 (OSL)'], ['Sandefjord Torp (TRF)', '산데피오르 토르프 공항 (TRF)', '저비용 항공|low-cost carriers']],
    rail: [['Kongsberg', '콩스베르그역']],
    bus: [['Kongsberg skysstasjon', '콩스베르그 버스 정류장']],
  },
  tonsberg: {
    air: [['Sandefjord Torp (TRF)', '산데피오르 토르프 공항 (TRF)', '저비용 항공|low-cost carriers'], ['Oslo Gardermoen (OSL)', '오슬로 가르데르모엔 공항 (OSL)']],
    rail: [['Tønsberg', '퇸스베르그역']],
    bus: [['Tønsberg bussterminal', '퇸스베르그 버스터미널']],
  },
  rjukan: {
    air: [['Sandefjord Torp (TRF)', '산데피오르 토르프 공항 (TRF)', '저비용 항공|low-cost carriers'], ['Oslo Gardermoen (OSL)', '오슬로 가르데르모엔 공항 (OSL)']],
    bus: [['Rjukan rutebilstasjon', '류칸 버스 정류장', '오슬로·노토덴행|to Oslo, Notodden']],
  },
  arendal: {
    air: [['Kristiansand Kjevik (KRS)', '크리스티안산 공항 (KRS)', '버스로 약 1시간|About 1 hr by bus']],
    rail: [['Arendal', '아렌달역', '넬라우 환승|change at Nelaug']],
    bus: [['Arendal rutebilstasjon', '아렌달 버스터미널']],
  },
  lom: {
    air: [['Oslo Gardermoen (OSL)', '오슬로 가르데르모엔 공항 (OSL)']],
    rail: [['Otta', '오타역', '버스로 약 1시간|About 1 hr by bus']],
    bus: [['Lom skysstasjon', '롬 버스 정류장', '오타역행|to Otta station']],
  },
  balestrand: {
    air: [['Sogndal (SOG)', '송달 공항 (SOG)', '오슬로행 소형기|small planes to Oslo'], ['Bergen Flesland (BGO)', '베르겐 공항 (BGO)']],
    bus: [['Balestrand kai', '발레스트란 선착장', '송달·피에를란행 버스|buses to Sogndal, Fjærland']],
    port: [['Balestrand kai', '발레스트란 선착장', '베르겐·플롬행 쾌속선|express boats to Bergen, Flåm']],
  },
  loen: {
    air: [['Sandane (SDN)', '산다네 공항 (SDN)', '오슬로행 소형기|small planes to Oslo'], ['Ålesund Vigra (AES)', '올레순 공항 (AES)', '차로 약 2시간 30분|About 2½ hrs by car']],
    bus: [['Loen', '로엔 버스 정류장', '스트륀·베르겐행|to Stryn, Bergen']],
    port: [['Olden', '올덴 크루즈 부두']],
  },
  eidfjord: {
    air: [['Bergen Flesland (BGO)', '베르겐 공항 (BGO)']],
    bus: [['Eidfjord', '에이드피오르 버스 정류장', '보스·게일로행|to Voss, Geilo']],
    port: [['Eidfjord', '에이드피오르 부두', '크루즈선|cruise ships']],
  },
  andalsnes: {
    air: [['Molde Årø (MOL)', '몰데 공항 (MOL)', '버스로 약 1시간 30분|About 1½ hrs by bus']],
    rail: [['Åndalsnes', '온달스네스역', '돔보스 환승|change at Dombås']],
    bus: [['Åndalsnes stasjon', '온달스네스역 버스', '올레순·몰데행|to Ålesund, Molde']],
  },
  kristiansund: {
    air: [['Kristiansund Kvernberget (KSU)', '크리스티안순 공항 (KSU)']],
    bus: [['Kristiansund rutebilstasjon', '크리스티안순 버스터미널']],
    port: [['Kristiansund hurtigbåtterminal', '크리스티안순 여객선 터미널', '후르티그루텐·트론헤임행 쾌속선|Hurtigruten, express boat to Trondheim']],
  },
  vesteralen: {
    air: [['Andøya Andenes (ANX)', '안되야 공항 (ANX)', '오슬로·보되행|to Oslo, Bodø'], ['Harstad/Narvik Evenes (EVE)', '하르스타드·나르비크 공항 (EVE)', '차로 약 3시간|About 3 hrs by car']],
    bus: [['Andenes', '안데네스 버스 정류장', '소르틀란·스토크마르크네스행|to Sortland, Stokmarknes']],
    port: [['Andenes ferjekai', '안데네스 선착장', '센야 그륄레피오르행 여름 페리|summer ferry to Gryllefjord, Senja']],
  },
  senja: {
    air: [['Bardufoss (BDU)', '바르두포스 공항 (BDU)', '차로 약 1시간|About 1 hr by car'], ['Tromsø Langnes (TOS)', '트롬쇠 공항 (TOS)']],
    bus: [['Finnsnes', '핀스네스 버스 정류장']],
    port: [['Finnsnes hurtigbåtkai', '핀스네스 쾌속선 부두', '트롬쇠행 쾌속선·후르티그루텐|express boat to Tromsø, Hurtigruten']],
  },
  alta: {
    air: [['Alta (ALF)', '알타 공항 (ALF)', '시내에서 가까움|close to the centre']],
    bus: [['Alta sentrum', '알타 버스 정류장', '함메르페스트·호닝스보그행|to Hammerfest, Honningsvåg']],
  },
  kirkenes: {
    air: [['Kirkenes Høybuktmoen (KKN)', '키르케네스 공항 (KKN)', '오슬로·트롬쇠행|to Oslo, Tromsø']],
    bus: [['Kirkenes', '키르케네스 버스 정류장']],
    port: [['Kirkenes Hurtigruten', '키르케네스 후르티그루텐 부두', '연안 여객선 종착·출발지|start and end of the coastal voyage']],
  },
  longyearbyen: {
    air: [['Svalbard Longyear (LYR)', '스발바르 공항 (LYR)', '오슬로·트롬쇠행 · 솅겐 밖|to Oslo, Tromsø · outside Schengen']],
    bus: [['Longyearbyen', '롱위에아르뷔엔 공항버스', '항공편 시간에 맞춰 운행|timed to flights']],
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
  vestmannaeyjar: {
    air: [['Vestmannaeyjar (VEY)', '베스트만나에이야르 공항 (VEY)']],
    port: [['Vestmannaeyjahöfn', '베스트만나에이야르 항구', '란데이야회픈행 헤르욜퓌르 페리|Herjólfur ferry to Landeyjahöfn']],
  },
  hofn: {
    air: [['Hornafjörður (HFN)', '호르나피외르뒤르 공항 (HFN)']],
  },
  stykkisholmur: {
    port: [['Stykkishólmur', '스티키스홀뮈르 항구', '플라테이·브랸슬래퀴르행 발뒤르 페리|Baldur ferry to Flatey and Brjánslækur']],
  },
  isafjordur: {
    air: [['Ísafjörður (IFJ)', '이사피외르뒤르 공항 (IFJ)']],
  },
  myvatn: {
    air: [['Akureyri (AEY)', '아쿠레이리 공항 (AEY)', '아쿠레이리|Akureyri']],
  },
  seydisfjordur: {
    air: [['Egilsstaðir (EGS)', '에길스타디르 공항 (EGS)']],
    port: [['Seyðisfjörður', '세이디스피외르뒤르 항구', '페로 제도·덴마크행 노뢰나 페리|Norröna ferry to the Faroe Islands and Denmark']],
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

  'st-wolfgang': {
    air: [SZG()],
    bus: [['St. Wolfgang', '장크트볼프강 버스 정류장', '스트로블·바트 이슐행 546번|bus 546 to Strobl and Bad Ischl']],
  },
  melk: {
    air: [VIE()],
    rail: [['Melk', '멜크역']],
  },
  eisenstadt: {
    air: [VIE()],
    rail: [['Eisenstadt', '아이젠슈타트역'], ['Neusiedl am See', '노이지들암제역']],
  },
  alpbach: {
    air: [['Innsbruck (INN)', '인스브루크 공항 (INN)', '인스브루크|Innsbruck'], MUC()],
    rail: [['Brixlegg', '브릭슬레크역', '알프바흐행 620번 버스|bus 620 to Alpbach']],
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

  lednice: {
    air: [VIE(), ['Brno (BRQ)', '브르노 공항 (BRQ)']],
    rail: [['Valtice', '발티체역'], ['Břeclav', '브르제츨라프역', '레드니체행 버스|buses to Lednice']],
  },
  litomysl: {
    air: [PRG()],
    bus: [['Litomyšl', '리토미슐 버스터미널', '프라하행|to Prague']],
  },
  kromeriz: {
    air: [PRG()],
    rail: [['Kroměříž', '크로메르지시역', '훌린 환승|change at Hulín']],
  },
  'cesky-raj': {
    air: [PRG()],
    rail: [['Turnov', '투르노프역'], ['Jičín', '이친역']],
  },
  'melnik-cz': {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Mělník', '멜니크역']],
    bus: [['Mělník, autobusové nádraží', '멜니크 버스터미널', '프라하행|to Prague']],
  },
  konopiste: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Benešov u Prahy', '베네쇼프역', '성까지 약 2km|about 2 km to the castle']],
  },
  tabor: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Tábor', '타보르역', '프라하·체스케부데요비체행|to Prague, České Budějovice']],
    bus: [['Tábor, autobusové nádraží', '타보르 버스터미널']],
  },
  trebon: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Třeboň', '트르제본역']],
    bus: [['Třeboň, autobusové nádraží', '트르제본 버스터미널']],
  },
  'jindrichuv-hradec': {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Jindřichův Hradec', '인드르지후프흐라데츠역', '좁은 궤도 열차 출발|narrow-gauge trains start here']],
    bus: [['Jindřichův Hradec, autobusové nádraží', '인드르지후프흐라데츠 버스터미널']],
  },
  slavonice: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Slavonice', '슬라보니체역']],
    bus: [['Slavonice, autobusové nádraží', '슬라보니체 버스 정류장']],
  },
  sumava: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Lipno nad Vltavou', '리프노 나드 블타보우역']],
    bus: [['Lipno nad Vltavou, bus', '리프노 나드 블타보우 버스 정류장', '체스키크룸로프행|to Český Krumlov']],
  },
  'marianske-lazne': {
    air: [['Karlovy Vary (KLV)', '카를로비바리 공항 (KLV)', '운항편 적음|few flights'], ['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Mariánské Lázně', '마리안스케라즈네역', '플젠·헤프행|to Plzeň, Cheb']],
    bus: [['Mariánské Lázně, autobusové nádraží', '마리안스케라즈네 버스터미널']],
  },
  cheb: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Cheb', '헤프역', '독일행 열차|trains to Germany']],
    bus: [['Cheb, autobusové nádraží', '헤프 버스터미널']],
  },
  terezin: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Litoměřice hlavní nádraží', '리토메르지체 중앙역']],
    bus: [['Terezín, autobusová zastávka', '테레진 버스 정류장', '프라하행|to Prague']],
  },
  liberec: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Liberec', '리베레츠역']],
    bus: [['Liberec, autobusové nádraží', '리베레츠 버스터미널', '프라하행|to Prague']],
  },
  'hradec-kralove': {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Hradec Králové hlavní nádraží', '흐라데츠크랄로베 중앙역']],
    bus: [['Hradec Králové, terminál HD', '흐라데츠크랄로베 버스터미널']],
  },
  kuks: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Kuks', '쿠크스역', '야로메르시·트루트노프행|to Jaroměř, Trutnov']],
  },
  adrspach: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Adršpach', '아드르슈파흐역', '바위 도시 입구 앞|by the rock-town entrance']],
  },
  krkonose: {
    air: [['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    bus: [['Špindlerův Mlýn, autobusové nádraží', '슈핀들레루프믈린 버스터미널', '프라하행|to Prague']],
  },
  pardubice: {
    air: [['Pardubice (PED)', '파르두비체 공항 (PED)', '운항편 적음|few flights'], ['Praha Václav Havel (PRG)', '프라하 공항 (PRG)', '프라하|Prague']],
    rail: [['Pardubice hlavní nádraží', '파르두비체 중앙역']],
    bus: [['Pardubice, autobusové nádraží', '파르두비체 버스터미널']],
  },
  trebic: {
    air: [['Brno–Tuřany (BRQ)', '브르노 공항 (BRQ)', '브르노|Brno']],
    rail: [['Třebíč', '트르제비치역']],
    bus: [['Třebíč, autobusové nádraží', '트르제비치 버스터미널']],
  },
  zdar: {
    air: [['Brno–Tuřany (BRQ)', '브르노 공항 (BRQ)', '브르노|Brno']],
    rail: [['Žďár nad Sázavou', '즈다르 나드 사자보우역']],
    bus: [['Žďár nad Sázavou, autobusové nádraží', '즈다르 버스터미널']],
  },
  slavkov: {
    air: [['Brno–Tuřany (BRQ)', '브르노 공항 (BRQ)', '브르노|Brno']],
    rail: [['Slavkov u Brna', '슬라프코프 우 브르나역']],
  },
  pernstejn: {
    air: [['Brno–Tuřany (BRQ)', '브르노 공항 (BRQ)', '브르노|Brno']],
    rail: [['Nedvědice', '네드볘디체역', '성까지 걸어서 오름|walk up to the castle']],
  },
  jeseniky: {
    air: [['Ostrava Leoš Janáček (OSR)', '오스트라바 공항 (OSR)', '오스트라바|Ostrava']],
    rail: [['Jeseník', '예세니크역']],
    bus: [['Jeseník, autobusové nádraží', '예세니크 버스터미널']],
  },
  zlin: {
    air: [['Brno–Tuřany (BRQ)', '브르노 공항 (BRQ)', '브르노|Brno']],
    rail: [['Zlín střed', '즐린 중앙역']],
    bus: [['Zlín, autobusové nádraží', '즐린 버스터미널', '브르노·프라하행|to Brno, Prague']],
  },
  luhacovice: {
    air: [['Brno–Tuřany (BRQ)', '브르노 공항 (BRQ)', '브르노|Brno']],
    rail: [['Luhačovice', '루하초비체역']],
    bus: [['Luhačovice, autobusové nádraží', '루하초비체 버스터미널']],
  },
  velehrad: {
    air: [['Brno–Tuřany (BRQ)', '브르노 공항 (BRQ)', '브르노|Brno']],
    rail: [['Staré Město u Uherského Hradiště', '스타레메스토역', '우헤르스케흐라디슈테 · 장거리 열차|for Uherské Hradiště · long-distance trains']],
    bus: [['Uherské Hradiště, autobusové nádraží', '우헤르스케흐라디슈테 버스터미널']],
  },
  roznov: {
    air: [['Ostrava Leoš Janáček (OSR)', '오스트라바 공항 (OSR)', '오스트라바|Ostrava']],
    rail: [['Rožnov pod Radhoštěm', '로주노프역']],
    bus: [['Rožnov pod Radhoštěm, autobusové nádraží', '로주노프 버스터미널']],
  },
  ostrava: {
    air: [['Ostrava Leoš Janáček (OSR)', '오스트라바 공항 (OSR)']],
    rail: [['Ostrava hlavní nádraží', '오스트라바 중앙역'], ['Ostrava-Svinov', '오스트라바 스비노프역']],
    bus: [['Ostrava, ÚAN', '오스트라바 중앙 버스터미널']],
  },
  stramberk: {
    air: [['Ostrava Leoš Janáček (OSR)', '오스트라바 공항 (OSR)', '오스트라바|Ostrava']],
    rail: [['Štramberk', '슈트람베르크역']],
  },
  opava: {
    air: [['Ostrava Leoš Janáček (OSR)', '오스트라바 공항 (OSR)', '오스트라바|Ostrava']],
    rail: [['Opava východ', '오파바 동역']],
    bus: [['Opava, autobusové nádraží', '오파바 버스터미널']],
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

  szekesfehervar: {
    air: [BUD()],
    rail: [['Székesfehérvár', '세케슈페헤르바르역']],
    bus: [['Székesfehérvár autóbusz-állomás', '세케슈페헤르바르 버스터미널']],
  },
  veszprem: {
    air: [BUD()],
    rail: [['Veszprém', '베스프렘역', '시내까지 버스|bus to the centre']],
    bus: [['Veszprém autóbusz-állomás', '베스프렘 버스터미널', '부다페스트·발라톤행|to Budapest, Lake Balaton']],
  },
  balatonfured: {
    air: [BUD()],
    rail: [['Balatonfüred', '벌러톤퓌레드역']],
    port: [['Balatonfüred hajóállomás', '벌러톤퓌레드 선착장', '티하니·시오포크행 배|boats to Tihany, Siófok']],
  },
  sumeg: {
    air: [['Hévíz–Balaton (SOB)', '헤비즈-발라톤 공항 (SOB)'], BUD()],
    rail: [['Sümeg', '슈메그역']],
    bus: [['Sümeg autóbusz-állomás', '슈메그 버스터미널']],
  },
  esztergom: {
    air: [BUD()],
    rail: [['Esztergom', '에스테르곰역']],
    bus: [['Esztergom autóbusz-állomás', '에스테르곰 버스터미널', '부다페스트·비셰그라드행|to Budapest, Visegrád']],
  },
  koszeg: {
    air: [VIE('오스트리아 빈|Vienna, Austria'), BUD()],
    rail: [['Kőszeg', '쾨세그역', '솜버트헤이행|to Szombathely']],
    bus: [['Kőszeg autóbusz-állomás', '쾨세그 버스터미널']],
  },
  heviz: {
    air: [['Hévíz–Balaton (SOB)', '헤비즈-발라톤 공항 (SOB)'], BUD()],
    bus: [['Hévíz autóbusz-állomás', '헤비즈 버스터미널', '케스트헤이·부다페스트행|to Keszthely, Budapest']],
  },
  villany: {
    air: [BUD()],
    rail: [['Villány', '빌라니역', '페치행|to Pécs']],
  },
  matra: {
    air: [BUD()],
    bus: [['Mátrafüred autóbusz-megálló', '마트러퓌레드 버스 정류장', '죈죄시행|to Gyöngyös']],
  },
  miskolc: {
    air: [BUD()],
    rail: [['Miskolc-Tiszai', '미슈콜츠 티서이역']],
    bus: [['Miskolc Búza téri autóbusz-állomás', '미슈콜츠 버스터미널']],
  },
  aggtelek: {
    air: [BUD()],
    bus: [['Aggtelek, barlang', '아그텔레크 동굴 버스 정류장', '미슈콜츠행|to Miskolc']],
  },
  sarospatak: {
    air: [BUD()],
    rail: [['Sárospatak', '사로슈퍼터크역']],
  },
  kecskemet: {
    air: [BUD()],
    rail: [['Kecskemét', '케치케메트역']],
    bus: [['Kecskemét Széchenyivárosi autóbusz-állomás', '케치케메트 버스터미널']],
  },
  kalocsa: {
    air: [BUD()],
    bus: [['Kalocsa autóbusz-állomás', '칼로처 버스터미널', '부다페스트행|to Budapest']],
  },
  godollo: {
    air: [BUD()],
    rail: [['Gödöllő', '괴될뢰역', '부다페스트 동역행·HÉV H8|to Budapest-Keleti; HÉV H8']],
  },
  'visegrad-hu': {
    air: [BUD()],
    bus: [['Visegrád, Nagymarosi rév', '비셰그라드 버스 정류장', '부다페스트·에스테르곰행|to Budapest, Esztergom']],
    port: [['Visegrád hajóállomás', '비셰그라드 선착장', '부다페스트행 배·너지마로시 나룻배|boats to Budapest, ferry to Nagymaros']],
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
