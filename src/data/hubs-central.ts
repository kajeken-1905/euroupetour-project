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
  dresden: {
    air: [['Dresden (DRS)', '드레스덴 공항 (DRS)']],
    rail: [
      ['Dresden Hbf', '드레스덴 중앙역'],
      ['Dresden-Neustadt', '드레스덴 노이슈타트역'],
    ],
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
  nuremberg: {
    air: [['Nürnberg (NUE)', '뉘른베르크 공항 (NUE)']],
    rail: [['Nürnberg Hbf', '뉘른베르크 중앙역']],
    bus: [['ZOB Nürnberg', '뉘른베르크 중앙버스터미널 (ZOB)']],
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
    ],
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
      BCN('스페인 바르셀로나|Barcelona, Spain'),
      ['Toulouse–Blagnac (TLS)', '툴루즈 블라냑 공항 (TLS)', '프랑스 툴루즈|Toulouse, France'],
    ],
    bus: [["Estació Nacional d'Autobusos", '안도라 국립 버스터미널', '안도라라베야|Andorra la Vella']],
  },

  // —— pt ——
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
    port: [['DFDS Terminal København', '코펜하겐 DFDS 터미널', '오슬로행 페리|ferry to Oslo']],
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
      ['Vippetangen (DFDS)', '비페탕엔 터미널', '코펜하겐행 페리|ferry to Copenhagen'],
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
    port: [['Fiskepiren', '피스케피렌 터미널', '뤼세피오르 등 근교 배|boats to Lysefjord and nearby islands']],
  },
  trondheim: {
    air: [['Trondheim Værnes (TRD)', '트론헤임 공항 (TRD)']],
    rail: [['Trondheim S', '트론헤임 중앙역']],
  },
  alesund: {
    air: [['Ålesund Vigra (AES)', '올레순 공항 (AES)']],
    bus: [['Ålesund rutebilstasjon', '올레순 버스터미널', '철도 없음|no railway']],
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
  hallstatt: {
    air: [SZG()],
    rail: [['Hallstatt', '할슈타트역', '호수 건너편 · 배로 연결|across the lake · boat link']],
    bus: [['Hallstatt Lahn', '할슈타트 란 버스 정류장']],
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
    air: [PRG(), ['Karlovy Vary (KLV)', '카를로비 바리 공항 (KLV)', '운항편 적음|few flights']],
    rail: [
      ['Karlovy Vary', '카를로비 바리역 (상부역)'],
      ['Karlovy Vary dolní nádraží', '카를로비 바리 하부역'],
    ],
    bus: [['Terminál Karlovy Vary', '카를로비 바리 버스터미널']],
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
  poprad: {
    air: [['Poprad-Tatry (TAT)', '포프라트 타트리 공항 (TAT)', '운항편 적음|few flights'], KRK('폴란드 크라쿠프|Kraków, Poland')],
    rail: [['Poprad-Tatry', '포프라트 타트리역']],
    bus: [['Autobusová stanica Poprad', '포프라트 버스터미널']],
  },
  'banska-bystrica': {
    air: [BTS()],
    rail: [['Banská Bystrica', '반스카비스트리차역']],
    bus: [['Autobusová stanica Banská Bystrica', '반스카비스트리차 버스터미널']],
  },
  trencin: {
    air: [BTS()],
    rail: [['Trenčín', '트렌친역']],
    bus: [['Autobusová stanica Trenčín', '트렌친 버스터미널']],
  },

  // —— hu ——
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
  krakow: {
    air: [['Kraków John Paul II (KRK)', '크라쿠프 공항 (KRK)']],
    rail: [['Kraków Główny', '크라쿠프 중앙역']],
    bus: [['Małopolski Dworzec Autobusowy (MDA)', '크라쿠프 버스터미널 (MDA)']],
  },
  gdansk: {
    air: [['Gdańsk Lech Wałęsa (GDN)', '그단스크 공항 (GDN)']],
    rail: [['Gdańsk Główny', '그단스크 중앙역']],
    bus: [['Dworzec Autobusowy Gdańsk', '그단스크 버스터미널']],
    port: [['Terminal Promowy Gdańsk', '그단스크 페리터미널', '스웨덴행 페리|ferry to Sweden']],
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
  torun: {
    air: [['Bydgoszcz (BZG)', '비드고슈치 공항 (BZG)', '비드고슈치|Bydgoszcz']],
    rail: [
      ['Toruń Główny', '토룬 중앙역'],
      ['Toruń Miasto', '토룬 미아스토역', '구시가지 근처|near the Old Town'],
    ],
    bus: [['Dworzec Autobusowy Toruń', '토룬 버스터미널']],
  },
}
