import type { RawCityHubs } from './hubs'

// Shared airports referenced from several nearby towns.
const CDG = (note = '파리|Paris'): [string, string, string] => ['Paris Charles de Gaulle (CDG)', '샤를 드 골 공항 (CDG)', note]
const ORY = (note = '파리|Paris'): [string, string, string] => ['Paris Orly (ORY)', '오를리 공항 (ORY)', note]
const NCE = (note = '니스|Nice'): [string, string, string] => ["Nice Côte d'Azur (NCE)", '니스 코트다쥐르 공항 (NCE)', note]
const GVA = (note = '스위스 제네바|Geneva, Switzerland'): [string, string, string] => ['Genève Aéroport (GVA)', '제네바 공항 (GVA)', note]
const LHR = (note = '런던|London'): [string, string, string] => ['London Heathrow (LHR)', '히스로 공항 (LHR)', note]
const ZRH = (note = '취리히|Zurich'): [string, string, string] => ['Zürich Flughafen (ZRH)', '취리히 공항 (ZRH)', note]
const MXP = (note = '밀라노|Milan'): [string, string, string] => ['Milano Malpensa (MXP)', '밀라노 말펜사 공항 (MXP)', note]
const VRN = (note = '베로나|Verona'): [string, string, string] => ['Verona Villafranca (VRN)', '베로나 공항 (VRN)', note]
const VCE = (note = '베네치아|Venice'): [string, string, string] => ['Venezia Marco Polo (VCE)', '베네치아 마르코 폴로 공항 (VCE)', note]
const BLQ = (note = '볼로냐|Bologna'): [string, string, string] => ['Bologna Guglielmo Marconi (BLQ)', '볼로냐 공항 (BLQ)', note]
const FLR = (note = '피렌체|Florence'): [string, string, string] => ['Firenze Peretola (FLR)', '피렌체 공항 (FLR)', note]
const FCO = (note = '로마|Rome'): [string, string, string] => ['Roma Fiumicino (FCO)', '로마 피우미치노 공항 (FCO)', note]
const NAP = (note = '나폴리|Naples'): [string, string, string] => ['Napoli Capodichino (NAP)', '나폴리 공항 (NAP)', note]
const BRI = (note = '바리|Bari'): [string, string, string] => ['Bari Karol Wojtyła (BRI)', '바리 공항 (BRI)', note]
const CTA = (note = '카타니아|Catania'): [string, string, string] => ['Catania Fontanarossa (CTA)', '카타니아 공항 (CTA)', note]

export const hubsWest: Record<string, RawCityHubs> = {
  // —— fr ——
  paris: {
    air: [
      ['Paris Charles de Gaulle (CDG)', '샤를 드 골 공항 (CDG)'],
      ['Paris Orly (ORY)', '오를리 공항 (ORY)'],
      ['Paris Beauvais (BVA)', '보베 공항 (BVA)', '보베 · 저비용 항공|Beauvais · low-cost carriers'],
    ],
    rail: [
      ['Gare du Nord', '파리 북역'],
      ['Gare de Lyon', '리옹역'],
      ['Gare Montparnasse', '몽파르나스역'],
      ["Gare de l'Est", '파리 동역'],
      ['Gare Saint-Lazare', '생라자르역'],
      ["Gare d'Austerlitz", '오스테를리츠역'],
    ],
    bus: [['Gare routière Paris Bercy Seine', '베르시 센 버스터미널']],
  },
  giverny: {
    air: [CDG()],
    rail: [['Gare de Vernon–Giverny', '베르농-지베르니역', '베르농|Vernon']],
  },
  fontainebleau: {
    air: [ORY()],
    rail: [['Gare de Fontainebleau–Avon', '퐁텐블로-아봉역']],
  },
  chartres: {
    air: [ORY()],
    rail: [['Gare de Chartres', '샤르트르역']],
  },
  reims: {
    air: [CDG()],
    rail: [
      ['Gare de Reims', '랭스역'],
      ['Gare de Champagne-Ardenne TGV', '샹파뉴아르덴 TGV역', '시 외곽 · TGV|outside town · TGV'],
    ],
  },
  rouen: {
    air: [CDG()],
    rail: [['Gare de Rouen-Rive-Droite', '루앙 리브드루아트역']],
    bus: [['Halte routière de Rouen', '루앙 버스터미널']],
  },
  honfleur: {
    air: [CDG()],
    rail: [['Gare de Trouville-Deauville', '트루빌-도빌역', '도빌 · 옹플뢰르엔 역 없음|Deauville · no station in Honfleur']],
    bus: [['Gare routière de Honfleur', '옹플뢰르 버스터미널']],
  },
  etretat: {
    air: [CDG()],
    rail: [['Gare du Havre', '르아브르역', '르아브르 · 에트르타엔 역 없음|Le Havre · no station in Étretat']],
  },
  bayeux: {
    air: [['Caen–Carpiquet (CFR)', '캉 카르피케 공항 (CFR)', '캉|Caen'], CDG()],
    rail: [['Gare de Bayeux', '바이외역']],
  },
  'mont-saint-michel': {
    air: [['Rennes–Saint-Jacques (RNS)', '렌 생자크 공항 (RNS)', '렌|Rennes']],
    rail: [
      ['Gare de Pontorson–Mont-Saint-Michel', '퐁토르송-몽생미셸역', '퐁토르송 · 셔틀버스 연결|Pontorson · shuttle bus'],
      ['Gare de Rennes', '렌역', '렌 · 직행버스 연결|Rennes · direct coach'],
    ],
  },
  'saint-malo': {
    air: [
      ['Rennes–Saint-Jacques (RNS)', '렌 생자크 공항 (RNS)', '렌|Rennes'],
      ['Dinard–Pleurtuit–Saint-Malo (DNR)', '디나르 공항 (DNR)', '디나르 · 운항편 적음|Dinard · few flights'],
    ],
    rail: [['Gare de Saint-Malo', '생말로역']],
    port: [['Gare maritime du Naye', '나예 여객터미널', '영국·채널 제도행 페리|ferries to the UK and Channel Islands']],
  },
  strasbourg: {
    air: [['Strasbourg (SXB)', '스트라스부르 공항 (SXB)']],
    rail: [['Gare de Strasbourg-Ville', '스트라스부르역']],
    bus: [["Gare routière Place de l'Étoile", '플라스 드 레투알 버스터미널']],
  },
  amboise: {
    air: [['Tours Val de Loire (TUF)', '투르 발드루아르 공항 (TUF)', '투르|Tours'], ORY()],
    rail: [["Gare d'Amboise", '앙부아즈역']],
  },
  'la-rochelle': {
    air: [['La Rochelle–Île de Ré (LRH)', '라로셸 일드레 공항 (LRH)']],
    rail: [['Gare de La Rochelle-Ville', '라로셸역']],
  },
  dijon: {
    air: [['Lyon–Saint-Exupéry (LYS)', '리옹 생텍쥐페리 공항 (LYS)', '리옹|Lyon'], CDG()],
    rail: [['Gare de Dijon-Ville', '디종역']],
  },
  lyon: {
    air: [['Lyon–Saint-Exupéry (LYS)', '리옹 생텍쥐페리 공항 (LYS)']],
    rail: [
      ['Gare de Lyon-Part-Dieu', '리옹 파르디외역'],
      ['Gare de Lyon-Perrache', '리옹 페라슈역'],
    ],
    bus: [['Gare routière de Lyon-Perrache', '리옹 페라슈 버스터미널']],
  },
  annecy: {
    air: [GVA(), ['Lyon–Saint-Exupéry (LYS)', '리옹 생텍쥐페리 공항 (LYS)', '리옹|Lyon']],
    rail: [["Gare d'Annecy", '안시역']],
    bus: [["Gare routière d'Annecy", '안시 버스터미널']],
    port: [["Embarcadère d'Annecy", '안시 선착장', '안시호 유람선|Lake Annecy boats']],
  },
  chamonix: {
    air: [GVA()],
    rail: [['Gare de Chamonix-Mont-Blanc', '샤모니 몽블랑역']],
    bus: [['Gare routière Chamonix Sud', '샤모니 쉬드 버스터미널']],
  },
  bordeaux: {
    air: [['Bordeaux–Mérignac (BOD)', '보르도 메리냑 공항 (BOD)']],
    rail: [['Gare de Bordeaux-Saint-Jean', '보르도 생장역']],
  },
  arcachon: {
    air: [['Bordeaux–Mérignac (BOD)', '보르도 메리냑 공항 (BOD)', '보르도|Bordeaux']],
    rail: [["Gare d'Arcachon", '아르카숑역']],
  },
  biarritz: {
    air: [['Biarritz Pays Basque (BIQ)', '비아리츠 공항 (BIQ)']],
    rail: [['Gare de Biarritz', '비아리츠역']],
  },
  toulouse: {
    air: [['Toulouse–Blagnac (TLS)', '툴루즈 블라냑 공항 (TLS)']],
    rail: [['Gare de Toulouse-Matabiau', '툴루즈 마타비오역']],
    bus: [['Gare routière de Toulouse', '툴루즈 버스터미널']],
  },
  montpellier: {
    air: [['Montpellier–Méditerranée (MPL)', '몽펠리에 공항 (MPL)']],
    rail: [
      ['Gare de Montpellier-Saint-Roch', '몽펠리에 생로슈역'],
      ['Gare de Montpellier-Sud-de-France', '몽펠리에 쉬드 드 프랑스역', '시 외곽 · TGV|outside town · TGV'],
    ],
    bus: [['Gare routière Sabines', '사빈 버스터미널']],
  },
  avignon: {
    air: [['Marseille Provence (MRS)', '마르세유 프로방스 공항 (MRS)', '마르세유|Marseille']],
    rail: [
      ["Gare d'Avignon-Centre", '아비뇽 상트르역'],
      ["Gare d'Avignon TGV", '아비뇽 TGV역', '시 외곽 · TGV|outside town · TGV'],
    ],
    bus: [["Gare routière d'Avignon", '아비뇽 버스터미널']],
  },
  marseille: {
    air: [['Marseille Provence (MRS)', '마르세유 프로방스 공항 (MRS)']],
    rail: [['Gare de Marseille-Saint-Charles', '마르세유 생샤를역']],
    bus: [['Gare routière Saint-Charles', '생샤를 버스터미널']],
    port: [['Gare maritime de Marseille (La Joliette)', '마르세유 여객터미널 (라 졸리에트)', '코르시카·북아프리카행|ferries to Corsica and North Africa']],
  },
  cannes: {
    air: [NCE()],
    rail: [['Gare de Cannes', '칸역']],
    bus: [['Gare routière de Cannes', '칸 버스터미널']],
    port: [['Vieux Port de Cannes', '칸 구항구', '레랭 제도행 배|boats to the Lérins Islands']],
  },
  nice: {
    air: [["Nice Côte d'Azur (NCE)", '니스 코트다쥐르 공항 (NCE)']],
    rail: [['Gare de Nice-Ville', '니스역']],
    port: [['Port Lympia', '니스 항구 (포르 랭피아)']],
  },
  ajaccio: {
    air: [['Ajaccio Napoléon Bonaparte (AJA)', '아작시오 나폴레옹 보나파르트 공항 (AJA)']],
    rail: [["Gare d'Ajaccio", '아작시오역']],
    bus: [["Gare routière d'Ajaccio", '아작시오 버스터미널']],
    port: [["Gare maritime d'Ajaccio", '아작시오 여객터미널', '프랑스 본토행 페리|ferries to mainland France']],
  },
  bonifacio: {
    air: [['Figari–Sud Corse (FSC)', '피가리 쉬드 코르스 공항 (FSC)', '피가리|Figari']],
    port: [['Port de Bonifacio', '보니파시오 항구', '사르데냐행 페리|ferries to Sardinia']],
  },
  calvi: {
    air: [['Calvi–Sainte-Catherine (CLY)', '칼비 생트카트린 공항 (CLY)']],
    rail: [['Gare de Calvi', '칼비역']],
  },

  // —— mc ——
  monaco: {
    air: [NCE('프랑스 니스|Nice, France')],
    rail: [['Gare de Monaco–Monte-Carlo', '모나코 몬테카를로역']],
  },
  'monte-carlo': {
    air: [NCE('프랑스 니스|Nice, France')],
    rail: [['Gare de Monaco–Monte-Carlo', '모나코 몬테카를로역']],
  },

  // —— uk ——
  london: {
    air: [
      ['London Heathrow (LHR)', '히스로 공항 (LHR)'],
      ['London Gatwick (LGW)', '개트윅 공항 (LGW)'],
      ['London Stansted (STN)', '스탠스테드 공항 (STN)'],
    ],
    rail: [
      ['St Pancras International', '세인트 판크라스 인터내셔널역'],
      ["King's Cross", '킹스크로스역'],
      ['Paddington', '패딩턴역'],
      ['Euston', '유스턴역'],
      ['Victoria', '빅토리아역'],
      ['Waterloo', '워털루역'],
    ],
    bus: [['Victoria Coach Station', '빅토리아 코치 스테이션']],
  },
  windsor: {
    air: [LHR()],
    rail: [
      ['Windsor & Eton Central', '윈저 앤 이튼 센트럴역'],
      ['Windsor & Eton Riverside', '윈저 앤 이튼 리버사이드역'],
    ],
  },
  canterbury: {
    air: [['London Gatwick (LGW)', '개트윅 공항 (LGW)', '런던|London']],
    rail: [
      ['Canterbury West', '캔터베리 웨스트역'],
      ['Canterbury East', '캔터베리 이스트역'],
    ],
    bus: [['Canterbury Bus Station', '캔터베리 버스 스테이션']],
  },
  brighton: {
    air: [['London Gatwick (LGW)', '개트윅 공항 (LGW)', '런던|London']],
    rail: [['Brighton', '브라이턴역']],
    bus: [['Pool Valley Coach Station', '풀 밸리 코치 스테이션']],
  },
  oxford: {
    air: [LHR()],
    rail: [['Oxford', '옥스퍼드역']],
    bus: [['Gloucester Green Bus Station', '글로스터 그린 버스 스테이션']],
  },
  cotswolds: {
    air: [['Birmingham (BHX)', '버밍엄 공항 (BHX)', '버밍엄|Birmingham'], LHR()],
    rail: [
      ['Moreton-in-Marsh', '모턴인마시역'],
      ['Kemble', '켐블역'],
    ],
  },
  'stratford-upon-avon': {
    air: [['Birmingham (BHX)', '버밍엄 공항 (BHX)', '버밍엄|Birmingham']],
    rail: [['Stratford-upon-Avon', '스트랫퍼드어폰에이번역']],
  },
  cambridge: {
    air: [['London Stansted (STN)', '스탠스테드 공항 (STN)', '런던|London']],
    rail: [['Cambridge', '케임브리지역']],
    bus: [['Drummer Street Bus Station', '드러머 스트리트 버스 스테이션']],
  },
  bath: {
    air: [['Bristol (BRS)', '브리스틀 공항 (BRS)', '브리스틀|Bristol']],
    rail: [['Bath Spa', '바스 스파역']],
    bus: [['Bath Bus Station', '바스 버스 스테이션']],
  },
  bristol: {
    air: [['Bristol (BRS)', '브리스틀 공항 (BRS)']],
    rail: [['Bristol Temple Meads', '브리스틀 템플 미즈역']],
    bus: [['Bristol Bus & Coach Station', '브리스틀 버스·코치 스테이션']],
  },
  salisbury: {
    air: [['Southampton (SOU)', '사우샘프턴 공항 (SOU)', '사우샘프턴|Southampton'], LHR()],
    rail: [['Salisbury', '솔즈베리역']],
  },
  'st-ives': {
    air: [['Cornwall Airport Newquay (NQY)', '뉴키 콘월 공항 (NQY)', '뉴키|Newquay']],
    rail: [['St Ives', '세인트아이브스역']],
  },
  manchester: {
    air: [['Manchester (MAN)', '맨체스터 공항 (MAN)']],
    rail: [
      ['Manchester Piccadilly', '맨체스터 피커딜리역'],
      ['Manchester Victoria', '맨체스터 빅토리아역'],
    ],
    bus: [['Chorlton Street Coach Station', '촐턴 스트리트 코치 스테이션']],
  },
  liverpool: {
    air: [['Liverpool John Lennon (LPL)', '리버풀 존 레넌 공항 (LPL)']],
    rail: [['Liverpool Lime Street', '리버풀 라임 스트리트역']],
    bus: [['Liverpool ONE Bus Station', '리버풀 원 버스 스테이션']],
    port: [['Pier Head Ferry Terminal', '피어 헤드 페리터미널', '머지 페리·맨섬행|Mersey Ferry and Isle of Man']],
  },
  york: {
    air: [
      ['Leeds Bradford (LBA)', '리즈 브래드퍼드 공항 (LBA)', '리즈|Leeds'],
      ['Manchester (MAN)', '맨체스터 공항 (MAN)', '맨체스터|Manchester'],
    ],
    rail: [['York', '요크역']],
  },
  'lake-district': {
    air: [['Manchester (MAN)', '맨체스터 공항 (MAN)', '맨체스터|Manchester']],
    rail: [
      ['Windermere', '윈더미어역'],
      ['Oxenholme Lake District', '옥슨홈 레이크 디스트릭트역', '본선 환승역|main-line interchange'],
      ['Penrith North Lakes', '펜리스역'],
    ],
    port: [
      ['Bowness Pier', '보네스 선착장', '윈더미어호 유람선|Windermere lake cruises'],
      ['Ambleside Pier (Waterhead)', '앰블사이드 선착장', '윈더미어호 유람선|Windermere lake cruises'],
    ],
  },
  edinburgh: {
    air: [['Edinburgh (EDI)', '에든버러 공항 (EDI)']],
    rail: [
      ['Edinburgh Waverley', '에든버러 웨이벌리역'],
      ['Haymarket', '헤이마켓역'],
    ],
    bus: [['Edinburgh Bus Station', '에든버러 버스 스테이션']],
  },
  glasgow: {
    air: [
      ['Glasgow (GLA)', '글래스고 공항 (GLA)'],
      ['Glasgow Prestwick (PIK)', '프레스트윅 공항 (PIK)', '프레스트윅|Prestwick'],
    ],
    rail: [
      ['Glasgow Central', '글래스고 센트럴역'],
      ['Glasgow Queen Street', '글래스고 퀸 스트리트역'],
    ],
    bus: [['Buchanan Bus Station', '뷰캐넌 버스 스테이션']],
  },
  stirling: {
    air: [
      ['Edinburgh (EDI)', '에든버러 공항 (EDI)', '에든버러|Edinburgh'],
      ['Glasgow (GLA)', '글래스고 공항 (GLA)', '글래스고|Glasgow'],
    ],
    rail: [['Stirling', '스털링역']],
    bus: [['Stirling Bus Station', '스털링 버스 스테이션']],
  },
  'st-andrews': {
    air: [['Edinburgh (EDI)', '에든버러 공항 (EDI)', '에든버러|Edinburgh']],
    rail: [['Leuchars', '루카스역', '루카스 · 세인트앤드루스엔 역 없음|Leuchars · no station in St Andrews']],
    bus: [['St Andrews Bus Station', '세인트앤드루스 버스 스테이션']],
  },
  inverness: {
    air: [['Inverness (INV)', '인버네스 공항 (INV)']],
    rail: [['Inverness', '인버네스역']],
    bus: [['Inverness Bus Station', '인버네스 버스 스테이션']],
  },
  'isle-of-skye': {
    air: [['Inverness (INV)', '인버네스 공항 (INV)', '인버네스|Inverness']],
    rail: [
      ['Kyle of Lochalsh', '카일 오브 로할시역', '본토 · 스카이 다리 앞|mainland · by the Skye Bridge'],
      ['Mallaig', '말레이그역', '본토 · 페리 연결|mainland · ferry link'],
    ],
    bus: [['Somerled Square, Portree', '포트리 소멀레드 스퀘어 정류장']],
    port: [
      ['Armadale Ferry Terminal', '아머데일 페리터미널', '말레이그행 페리|ferry to Mallaig'],
      ['Uig Ferry Terminal', '위그 페리터미널', '아우터헤브리디스행|ferries to the Outer Hebrides'],
    ],
  },
  cardiff: {
    air: [['Cardiff (CWL)', '카디프 공항 (CWL)']],
    rail: [['Cardiff Central', '카디프 센트럴역']],
    bus: [['Cardiff Bus Interchange', '카디프 버스 인터체인지']],
  },
  tenby: {
    air: [['Cardiff (CWL)', '카디프 공항 (CWL)', '카디프|Cardiff']],
    rail: [['Tenby', '텐비역']],
  },
  snowdonia: {
    air: [
      ['Manchester (MAN)', '맨체스터 공항 (MAN)', '맨체스터|Manchester'],
      ['Liverpool John Lennon (LPL)', '리버풀 존 레넌 공항 (LPL)', '리버풀|Liverpool'],
    ],
    rail: [
      ['Betws-y-Coed', '베투스이코이드역'],
      ['Bangor', '뱅거역'],
    ],
  },
  conwy: {
    air: [
      ['Manchester (MAN)', '맨체스터 공항 (MAN)', '맨체스터|Manchester'],
      ['Liverpool John Lennon (LPL)', '리버풀 존 레넌 공항 (LPL)', '리버풀|Liverpool'],
    ],
    rail: [
      ['Conwy', '콘위역'],
      ['Llandudno Junction', '랜디드노 정션역', '본선 주요 역|main-line stop'],
    ],
  },
  belfast: {
    air: [
      ['Belfast International (BFS)', '벨파스트 국제공항 (BFS)'],
      ['George Best Belfast City (BHD)', '조지 베스트 벨파스트 시티 공항 (BHD)'],
    ],
    rail: [
      ['Belfast Grand Central Station', '벨파스트 그랜드 센트럴역'],
      ['Lanyon Place', '래니언 플레이스역'],
    ],
    bus: [['Belfast Grand Central Station', '벨파스트 그랜드 센트럴역', '기차역과 통합|shared with the rail station']],
    port: [['Belfast Harbour ferry terminals', '벨파스트 항구 페리터미널', '스코틀랜드·잉글랜드행 페리|ferries to Scotland and England']],
  },
  'giants-causeway': {
    air: [['Belfast International (BFS)', '벨파스트 국제공항 (BFS)', '벨파스트|Belfast']],
    rail: [
      ['Portrush', '포트러시역'],
      ['Coleraine', '콜레인역'],
    ],
  },
  derry: {
    air: [['City of Derry (LDY)', '시티 오브 데리 공항 (LDY)']],
    rail: [['Derry~Londonderry', '데리/런던데리역']],
    bus: [['Foyle Street Bus Station', '포일 스트리트 버스 스테이션']],
  },

  // —— ie ——
  dublin: {
    air: [['Dublin (DUB)', '더블린 공항 (DUB)']],
    rail: [
      ['Dublin Heuston', '더블린 휴스턴역'],
      ['Dublin Connolly', '더블린 코널리역'],
    ],
    bus: [['Busáras', '부사라스 (중앙 버스터미널)']],
    port: [['Dublin Port', '더블린 항구', '영국·프랑스행 페리|ferries to Britain and France']],
  },
  galway: {
    air: [
      ['Shannon (SNN)', '섀넌 공항 (SNN)', '섀넌|Shannon'],
      ['Ireland West Airport Knock (NOC)', '녹 공항 (NOC)', '녹|Knock'],
    ],
    rail: [['Galway Ceannt', '골웨이 캔트역']],
    bus: [['Galway Coach Station', '골웨이 코치 스테이션']],
  },
  cork: {
    air: [['Cork (ORK)', '코크 공항 (ORK)']],
    rail: [['Cork Kent', '코크 켄트역']],
    bus: [['Parnell Place Bus Station', '파넬 플레이스 버스 스테이션']],
    port: [['Ringaskiddy Ferry Terminal', '링가스키디 페리터미널', '프랑스행 페리|ferries to France']],
  },
  killarney: {
    air: [['Kerry (KIR)', '케리 공항 (KIR)', '파란포어|Farranfore']],
    rail: [['Killarney', '킬라니역']],
    bus: [['Killarney Bus Station', '킬라니 버스 스테이션']],
  },
  kilkenny: {
    air: [['Dublin (DUB)', '더블린 공항 (DUB)', '더블린|Dublin']],
    rail: [['Kilkenny MacDonagh', '킬케니 맥도나역']],
  },
  limerick: {
    air: [['Shannon (SNN)', '섀넌 공항 (SNN)', '섀넌|Shannon']],
    rail: [['Limerick Colbert', '리머릭 콜버트역']],
    bus: [['Limerick Colbert Bus Station', '리머릭 콜버트 버스 스테이션', '기차역과 같은 건물|same building as the rail station']],
  },

  // —— ch ——
  zurich: {
    air: [['Zürich Flughafen (ZRH)', '취리히 공항 (ZRH)']],
    rail: [['Zürich HB', '취리히 중앙역']],
    bus: [['Busbahnhof Zürich Sihlquai', '취리히 질크바이 버스터미널']],
    port: [['Zürich Bürkliplatz', '취리히 뷔르클리플라츠 선착장', '취리히호 유람선|Lake Zurich boats']],
  },
  geneva: {
    air: [['Genève Aéroport (GVA)', '제네바 공항 (GVA)']],
    rail: [['Genève-Cornavin', '제네바 코르나뱅역']],
    bus: [['Gare routière de Genève', '제네바 버스터미널']],
    port: [['Genève Mont-Blanc (CGN)', '제네바 몽블랑 선착장', '레만호 유람선|Lake Geneva boats']],
  },
  bern: {
    air: [ZRH(), ['Bern (BRN)', '베른 공항 (BRN)', '운항편 적음|few flights']],
    rail: [['Bern', '베른역']],
  },
  lucerne: {
    air: [ZRH()],
    rail: [['Luzern', '루체른역']],
    port: [['Luzern Bahnhofquai', '루체른 반호프케 선착장', '비츠나우·베기스·플뤼엘렌행 호수 배|lake boats to Vitznau, Weggis and Flüelen']],
  },
  interlaken: {
    air: [ZRH()],
    rail: [
      ['Interlaken Ost', '인터라켄 동역'],
      ['Interlaken West', '인터라켄 서역'],
    ],
    port: [
      ['Interlaken Ost (See)', '인터라켄 동역 선착장', '브리엔츠호 유람선|Lake Brienz boats'],
      ['Interlaken West (See)', '인터라켄 서역 선착장', '툰호 유람선|Lake Thun boats'],
    ],
  },
  basel: {
    air: [['EuroAirport Basel-Mulhouse-Freiburg (BSL)', '유로에어포트 바젤 (BSL)']],
    rail: [
      ['Basel SBB', '바젤 SBB역'],
      ['Basel Badischer Bahnhof', '바젤 바디셔역', '독일 철도 역|German rail station'],
    ],
  },
  zermatt: {
    air: [GVA('제네바|Geneva'), ZRH()],
    rail: [['Zermatt', '체르마트역', '차량 진입 불가 · 테슈에서 셔틀열차|car-free · shuttle train from Täsch']],
  },
  lausanne: {
    air: [GVA('제네바|Geneva')],
    rail: [['Lausanne', '로잔역']],
    port: [['Lausanne-Ouchy (CGN)', '로잔 우시 선착장', '프랑스 에비앙행 배|boats to Évian, France']],
  },
  lugano: {
    air: [['Milano Malpensa (MXP)', '밀라노 말펜사 공항 (MXP)', '이탈리아 밀라노|Milan, Italy'], ZRH()],
    rail: [['Lugano', '루가노역']],
    port: [['Lugano Centrale (Navigazione Lago di Lugano)', '루가노 첸트랄레 선착장', '간드리아·모르코테행 호수 배|lake boats to Gandria and Morcote']],
  },
  montreux: {
    air: [GVA('제네바|Geneva')],
    rail: [['Montreux', '몽트뢰역']],
    port: [['Montreux débarcadère (CGN)', '몽트뢰 선착장', '시옹성·브베·로잔행 배|boats to Chillon Castle, Vevey and Lausanne']],
  },
  grindelwald: {
    air: [ZRH()],
    rail: [
      ['Grindelwald', '그린델발트역'],
      ['Grindelwald Terminal', '그린델발트 터미널역'],
    ],
  },
  'st-moritz': {
    air: [ZRH()],
    rail: [['St. Moritz', '생모리츠역']],
  },

  // —— li ——
  vaduz: {
    air: [ZRH('스위스 취리히|Zurich, Switzerland')],
    rail: [
      ['Sargans', '자르간스역', '스위스 · 버스 연결|Switzerland · bus link'],
      ['Buchs SG', '북스역', '스위스 · 버스 연결|Switzerland · bus link'],
    ],
    bus: [['Vaduz Post', '파두츠 포스트 정류장']],
  },
  schaan: {
    air: [ZRH('스위스 취리히|Zurich, Switzerland')],
    rail: [
      ['Schaan-Vaduz', '샨-파두츠역', '정차 열차 적음|few trains stop'],
      ['Buchs SG', '북스역', '스위스|Switzerland'],
    ],
    bus: [['Schaan Bahnhof', '샨 반호프 정류장']],
  },
  malbun: {
    air: [ZRH('스위스 취리히|Zurich, Switzerland')],
    rail: [['Sargans', '자르간스역', '스위스 · 파두츠 경유 버스|Switzerland · bus via Vaduz']],
  },

  // —— it ——
  milan: {
    air: [
      ['Milano Malpensa (MXP)', '말펜사 공항 (MXP)'],
      ['Milano Linate (LIN)', '리나테 공항 (LIN)'],
      ['Milano Bergamo (BGY)', '베르가모 공항 (BGY)', '베르가모 · 저비용 항공|Bergamo · low-cost carriers'],
    ],
    rail: [
      ['Milano Centrale', '밀라노 중앙역'],
      ['Milano Porta Garibaldi', '밀라노 포르타 가리발디역'],
      ['Milano Cadorna', '밀라노 카도르나역'],
    ],
    bus: [['Autostazione di Lampugnano', '람푸냐노 버스터미널']],
  },
  como: {
    air: [MXP()],
    rail: [
      ['Como San Giovanni', '코모 산조반니역'],
      ['Como Lago', '코모 라고역'],
    ],
    port: [['Como Piazza Cavour (Navigazione Lago di Como)', '코모 피아차 카보우르 선착장', '벨라조·바렌나행 호수 배|lake boats to Bellagio and Varenna']],
  },
  bergamo: {
    air: [['Milano Bergamo (BGY)', '베르가모 공항 (BGY)']],
    rail: [['Bergamo', '베르가모역']],
    bus: [['Autostazione di Bergamo', '베르가모 버스터미널']],
  },
  stresa: {
    air: [MXP()],
    rail: [['Stresa', '스트레사역']],
    port: [['Imbarcadero di Stresa', '스트레사 선착장', '보로메오 제도행 배|boats to the Borromean Islands']],
  },
  sirmione: {
    air: [VRN()],
    rail: [['Desenzano del Garda–Sirmione', '데센차노 델 가르다-시르미오네역', '데센차노 · 시르미오네엔 역 없음|Desenzano · no station in Sirmione']],
    port: [['Imbarcadero di Sirmione', '시르미오네 선착장', '데센차노 등 가르다호 마을행 배|lake boats to Desenzano and other Garda towns']],
  },
  mantua: {
    air: [VRN()],
    rail: [['Mantova', '만토바역']],
  },
  turin: {
    air: [['Torino Caselle (TRN)', '토리노 공항 (TRN)']],
    rail: [
      ['Torino Porta Nuova', '토리노 포르타 누오바역'],
      ['Torino Porta Susa', '토리노 포르타 수사역'],
    ],
    bus: [['Autostazione di Torino', '토리노 버스터미널']],
  },
  genoa: {
    air: [['Genova Cristoforo Colombo (GOA)', '제노바 공항 (GOA)']],
    rail: [
      ['Genova Piazza Principe', '제노바 피아차 프린치페역'],
      ['Genova Brignole', '제노바 브리뇰레역'],
    ],
    port: [['Stazione Marittima di Genova', '제노바 여객터미널', '사르데냐·시칠리아·코르시카행|ferries to Sardinia, Sicily and Corsica']],
  },
  portofino: {
    air: [['Genova Cristoforo Colombo (GOA)', '제노바 공항 (GOA)', '제노바|Genoa']],
    rail: [['Santa Margherita Ligure–Portofino', '산타 마르게리타 리구레-포르토피노역', '산타 마르게리타 · 포르토피노엔 역 없음|Santa Margherita · no station in Portofino']],
    port: [['Molo Umberto I', '포르토피노 선착장', '산타 마르게리타·라팔로행 배|boats to Santa Margherita and Rapallo']],
  },
  'cinque-terre': {
    air: [
      ['Pisa Galileo Galilei (PSA)', '피사 공항 (PSA)', '피사|Pisa'],
      ['Genova Cristoforo Colombo (GOA)', '제노바 공항 (GOA)', '제노바|Genoa'],
    ],
    rail: [
      ['La Spezia Centrale', '라스페치아 중앙역', '관문 도시|gateway city'],
      ['Monterosso', '몬테로소역'],
      ['Riomaggiore', '리오마조레역'],
    ],
  },
  venice: {
    air: [
      ['Venezia Marco Polo (VCE)', '마르코 폴로 공항 (VCE)'],
      ['Treviso (TSF)', '트레비소 공항 (TSF)', '트레비소 · 저비용 항공|Treviso · low-cost carriers'],
    ],
    rail: [
      ['Venezia Santa Lucia', '베네치아 산타루치아역'],
      ['Venezia Mestre', '베네치아 메스트레역', '본토|mainland'],
    ],
    bus: [['Piazzale Roma', '피아찰레 로마 버스터미널']],
    port: [['Venezia Terminal Passeggeri', '베네치아 여객터미널']],
  },
  verona: {
    air: [['Verona Villafranca (VRN)', '베로나 공항 (VRN)']],
    rail: [['Verona Porta Nuova', '베로나 포르타 누오바역']],
    bus: [['Autostazione di Verona Porta Nuova', '베로나 포르타 누오바 버스터미널']],
  },
  vicenza: {
    air: [VRN(), VCE()],
    rail: [['Vicenza', '비첸차역']],
  },
  padua: {
    air: [VCE()],
    rail: [['Padova', '파도바역']],
    bus: [['Autostazione di Padova', '파도바 버스터미널']],
  },
  trieste: {
    air: [['Trieste Airport (TRS)', '트리에스테 공항 (TRS)']],
    rail: [['Trieste Centrale', '트리에스테 중앙역']],
    bus: [['Autostazione di Trieste', '트리에스테 버스터미널']],
  },
  bolzano: {
    air: [VRN(), ['Innsbruck (INN)', '인스브루크 공항 (INN)', '오스트리아 인스브루크|Innsbruck, Austria']],
    rail: [['Bolzano/Bozen', '볼차노역']],
    bus: [['Autostazione di Bolzano', '볼차노 버스터미널']],
  },
  cortina: {
    air: [VCE()],
    rail: [['Calalzo–Pieve di Cadore–Cortina', '칼랄초역', '칼랄초 · 코르티나엔 역 없음|Calalzo · no station in Cortina']],
    bus: [['Autostazione di Cortina', '코르티나 버스터미널']],
  },
  bologna: {
    air: [['Bologna Guglielmo Marconi (BLQ)', '볼로냐 공항 (BLQ)']],
    rail: [['Bologna Centrale', '볼로냐 중앙역']],
    bus: [['Autostazione di Bologna', '볼로냐 버스터미널']],
  },
  modena: {
    air: [BLQ()],
    rail: [['Modena', '모데나역']],
    bus: [['Autostazione di Modena', '모데나 버스터미널']],
  },
  parma: {
    air: [BLQ(), ['Parma (PMF)', '파르마 공항 (PMF)', '운항편 적음|few flights']],
    rail: [['Parma', '파르마역']],
  },
  ferrara: {
    air: [BLQ()],
    rail: [['Ferrara', '페라라역']],
  },
  ravenna: {
    air: [BLQ()],
    rail: [['Ravenna', '라벤나역']],
  },
  rome: {
    air: [
      ['Roma Fiumicino (FCO)', '피우미치노 공항 (FCO)'],
      ['Roma Ciampino (CIA)', '참피노 공항 (CIA)'],
    ],
    rail: [
      ['Roma Termini', '로마 테르미니역'],
      ['Roma Tiburtina', '로마 티부르티나역'],
    ],
    bus: [['Autostazione Tibus (Tiburtina)', '티부르티나 버스터미널 (Tibus)']],
  },
  florence: {
    air: [
      ['Firenze Peretola (FLR)', '피렌체 공항 (FLR)'],
      ['Pisa Galileo Galilei (PSA)', '피사 공항 (PSA)', '피사|Pisa'],
    ],
    rail: [['Firenze Santa Maria Novella', '피렌체 산타 마리아 노벨라역']],
    bus: [
      ['Autostazione Busitalia', '부시탈리아 버스터미널', '중앙역 옆|next to the main station'],
      ['Villa Costanza', '빌라 코스탄차 정류장', '장거리 버스 · 트램 T1 종점|long-distance coaches · tram T1 terminus'],
    ],
  },
  pisa: {
    air: [['Pisa Galileo Galilei (PSA)', '피사 공항 (PSA)']],
    rail: [['Pisa Centrale', '피사 중앙역']],
  },
  lucca: {
    air: [['Pisa Galileo Galilei (PSA)', '피사 공항 (PSA)', '피사|Pisa']],
    rail: [['Lucca', '루카역']],
  },
  siena: {
    air: [FLR()],
    rail: [['Siena', '시에나역']],
    bus: [['Piazza Gramsci', '피아차 그람시 버스 정류장']],
  },
  'san-gimignano': {
    air: [FLR(), ['Pisa Galileo Galilei (PSA)', '피사 공항 (PSA)', '피사|Pisa']],
    rail: [['Poggibonsi–San Gimignano', '포지본시-산지미냐노역', '포지본시 · 버스 연결|Poggibonsi · bus link']],
  },
  montepulciano: {
    air: [FLR()],
    rail: [['Chiusi–Chianciano Terme', '키우시-키안차노 테르메역', '키우시 · 버스 연결|Chiusi · bus link']],
    bus: [['Autostazione di Montepulciano', '몬테풀차노 버스터미널']],
  },
  perugia: {
    air: [['Perugia San Francesco d’Assisi (PEG)', '페루자 공항 (PEG)']],
    rail: [['Perugia', '페루자역']],
    bus: [['Piazza Partigiani', '피아차 파르티자니 버스터미널']],
  },
  assisi: {
    air: [['Perugia San Francesco d’Assisi (PEG)', '페루자 공항 (PEG)', '페루자|Perugia']],
    rail: [['Assisi', '아시시역', '산타 마리아 델리 안젤리 · 언덕 아래|Santa Maria degli Angeli · below the hill town']],
  },
  orvieto: {
    air: [FCO()],
    rail: [['Orvieto', '오르비에토역']],
  },
  urbino: {
    air: [
      ['Ancona Falconara (AOI)', '안코나 공항 (AOI)', '안코나|Ancona'],
      ['Rimini Federico Fellini (RMI)', '리미니 공항 (RMI)', '리미니|Rimini'],
    ],
    rail: [['Pesaro', '페사로역', '페사로 · 우르비노엔 역 없음|Pesaro · no station in Urbino']],
  },
  naples: {
    air: [['Napoli Capodichino (NAP)', '나폴리 공항 (NAP)']],
    rail: [['Napoli Centrale', '나폴리 중앙역']],
    bus: [['Metropark Napoli Centrale', '나폴리 메트로파크 버스터미널', '중앙역 뒤|behind the main station']],
    port: [
      ['Molo Beverello', '몰로 베베렐로', '카프리·이스키아행 쾌속선|fast boats to Capri and Ischia'],
      ['Calata Porta di Massa', '칼라타 포르타 디 마사', '카페리|car ferries'],
    ],
  },
  pompeii: {
    air: [NAP()],
    rail: [
      ['Pompei Scavi–Villa dei Misteri', '폼페이 스카비역', '유적 입구 · 치르쿰베수비아나선|by the ruins · Circumvesuviana'],
      ['Pompei', '폼페이역', '국철|Trenitalia'],
    ],
  },
  sorrento: {
    air: [NAP()],
    rail: [['Sorrento', '소렌토역', '치르쿰베수비아나선|Circumvesuviana']],
    port: [['Marina Piccola', '마리나 피콜라 항구', '카프리·나폴리행 배|boats to Capri and Naples']],
  },
  positano: {
    air: [NAP()],
    rail: [['Sorrento', '소렌토역', '소렌토 · SITA 버스 연결|Sorrento · SITA bus link']],
    port: [['Molo di Positano (Spiaggia Grande)', '포지타노 선착장', '아말피·카프리행 배|boats to Amalfi and Capri']],
  },
  amalfi: {
    air: [NAP()],
    rail: [['Salerno', '살레르노역', '살레르노 · 버스·페리 연결|Salerno · bus and ferry link']],
    bus: [['Piazza Flavio Gioia', '피아차 플라비오 조이아 버스터미널']],
    port: [['Molo Pennello', '몰로 펜넬로 선착장', '포지타노·살레르노·카프리행 배|boats to Positano, Salerno and Capri']],
  },
  capri: {
    air: [NAP()],
    port: [['Marina Grande', '마리나 그란데 항구', '나폴리·소렌토행 배|boats to Naples and Sorrento']],
  },
  bari: {
    air: [['Bari Karol Wojtyła (BRI)', '바리 공항 (BRI)']],
    rail: [['Bari Centrale', '바리 중앙역']],
    port: [['Porto di Bari', '바리 항구', '그리스·크로아티아·알바니아행 페리|ferries to Greece, Croatia and Albania']],
  },
  alberobello: {
    air: [BRI()],
    rail: [['Alberobello', '알베로벨로역']],
  },
  'polignano-a-mare': {
    air: [BRI()],
    rail: [['Polignano a Mare', '폴리냐노 아 마레역']],
  },
  lecce: {
    air: [['Brindisi Salento (BDS)', '브린디시 공항 (BDS)', '브린디시|Brindisi']],
    rail: [['Lecce', '레체역']],
  },
  matera: {
    air: [BRI()],
    rail: [['Matera Centrale', '마테라 중앙역', '사철 FAL · 바리 연결|FAL private line · to Bari']],
  },
  tropea: {
    air: [['Lamezia Terme (SUF)', '라메치아 테르메 공항 (SUF)', '라메치아 테르메|Lamezia Terme']],
    rail: [['Tropea', '트로페아역']],
  },
  palermo: {
    air: [['Palermo Falcone Borsellino (PMO)', '팔레르모 공항 (PMO)']],
    rail: [['Palermo Centrale', '팔레르모 중앙역']],
    port: [['Porto di Palermo', '팔레르모 항구', '나폴리·제노바행 페리|ferries to Naples and Genoa']],
  },
  cefalu: {
    air: [['Palermo Falcone Borsellino (PMO)', '팔레르모 공항 (PMO)', '팔레르모|Palermo']],
    rail: [['Cefalù', '체팔루역']],
  },
  agrigento: {
    air: [['Palermo Falcone Borsellino (PMO)', '팔레르모 공항 (PMO)', '팔레르모|Palermo']],
    rail: [['Agrigento Centrale', '아그리젠토 중앙역']],
    bus: [['Piazzale Rosselli', '피아찰레 로셀리 버스터미널']],
  },
  siracusa: {
    air: [CTA()],
    rail: [['Siracusa', '시라쿠사역']],
  },
  catania: {
    air: [['Catania Fontanarossa (CTA)', '카타니아 공항 (CTA)']],
    rail: [['Catania Centrale', '카타니아 중앙역']],
    bus: [['Terminal Bus Catania', '카타니아 버스터미널', '중앙역 근처|near the main station']],
    port: [['Porto di Catania', '카타니아 항구']],
  },
  taormina: {
    air: [CTA()],
    rail: [['Taormina–Giardini', '타오르미나-자르디니역', '해안 · 언덕 위 시내까지 버스|on the coast · bus up to town']],
    bus: [['Terminal Bus Taormina', '타오르미나 버스터미널']],
  },
  cagliari: {
    air: [['Cagliari Elmas (CAG)', '칼리아리 공항 (CAG)']],
    rail: [['Cagliari', '칼리아리역']],
    bus: [['Stazione ARST Piazza Matteotti', '피아차 마테오티 ARST 버스터미널']],
    port: [['Porto di Cagliari', '칼리아리 항구', '이탈리아 본토행 페리|ferries to mainland Italy']],
  },
  alghero: {
    air: [['Alghero Fertilia (AHO)', '알게로 공항 (AHO)']],
    rail: [['Alghero', '알게로역', '사사리행 지선|branch line to Sassari']],
  },
  olbia: {
    air: [['Olbia Costa Smeralda (OLB)', '올비아 공항 (OLB)']],
    rail: [['Olbia', '올비아역']],
    port: [['Porto di Olbia (Isola Bianca)', '올비아 항구 (이솔라 비앙카)', '이탈리아 본토행 페리|ferries to mainland Italy']],
  },
  'cala-gonone': {
    air: [['Olbia Costa Smeralda (OLB)', '올비아 공항 (OLB)', '올비아|Olbia']],
  },

  // —— va ——
  'vatican-city': {
    air: [FCO('로마|Rome'), ['Roma Ciampino (CIA)', '참피노 공항 (CIA)', '로마|Rome']],
    rail: [
      ['Roma San Pietro', '로마 산피에트로역', '로마 · 바티칸 바로 옆|Rome · next to the Vatican'],
      ['Roma Termini', '로마 테르미니역', '로마|Rome'],
    ],
  },

  // —— sm ——
  'san-marino-city': {
    air: [
      ['Rimini Federico Fellini (RMI)', '리미니 공항 (RMI)', '이탈리아 리미니|Rimini, Italy'],
      BLQ('이탈리아 볼로냐|Bologna, Italy'),
    ],
    rail: [['Rimini', '리미니역', '이탈리아 · 산마리노행 버스|Italy · bus to San Marino']],
    bus: [['Piazzale Calcigni', '피아찰레 칼치니 버스 정류장']],
  },
  'borgo-maggiore': {
    air: [
      ['Rimini Federico Fellini (RMI)', '리미니 공항 (RMI)', '이탈리아 리미니|Rimini, Italy'],
      BLQ('이탈리아 볼로냐|Bologna, Italy'),
    ],
    rail: [['Rimini', '리미니역', '이탈리아 · 산마리노행 버스|Italy · bus to San Marino']],
  },
}
