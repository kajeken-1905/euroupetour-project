import type { RawItinerary } from './itinerary-helper'

/** Greece, Cyprus, the Balkans, Türkiye, Bulgaria, Romania, the Caucasus, Ukraine, Moldova and Northern Cyprus. */
export const itinerarySouth: Record<string, RawItinerary> = {
  meteora: [1, 2, 3, 4, 6, 5],
  delphi: { days: [['', 4, 1, 3, 2]], trips: [['아라호바|Arachova', 5]] },
  sounion: [4, 3, 5, 1, 2],
  zakynthos: {
    days: [['', 4]],
    trips: [
      ['블루 케이브와 나바지오|Blue Caves & Navagio', 2, 1],
      ['마라토니시|Marathonisi', 3],
      ['케리 절벽|Keri cliffs', 5],
    ],
  },
  olympia: [5, 1, 3, 4, 2],
  chania: {
    days: [['', 1, 6, 2]],
    trips: [
      ['발로스 석호|Balos Lagoon', 3],
      ['엘라포니시|Elafonisi', 4],
      ['사마리아 협곡|Samaria Gorge', 5],
    ],
  },
  naxos: { days: [['', 1, 2, 3]], trips: [['데메테르 신전과 할키|Temple of Demeter & Chalki', 5, 4]] },
  athens: {
    days: [
      ['아크로폴리스와 플라카|Acropolis & Plaka', 1, 2, 11, 3, 12, 4, 5, 14],
      ['신타그마와 콜로나키|Syntagma & Kolonaki', 6, 16, 7, 8, 13, 17, 10],
      ['박물관과 시장|Museums & market', 9, 18, 15],
    ],
    trips: [['스타브로스 니아르코스 센터|SNF Cultural Center', 19]],
  },
  aegina: [2, 5, 1, 3, 4],
  hydra: [1, 2, 3, 4, 5],
  santorini: { days: [['피라·이메로비글리와 오이아|Fira, Imerovigli & Oia', 2, 6, 1], ['남쪽: 유적과 와이너리|The south: ruins & wineries', 4, 3, 7, 8, 5]] },
  heraklion: { days: [['', 2, 5, 7, 4, 3, 6]], trips: [['크노소스|Knossos', 1]] },
  mykonos: { days: [['', 3, 6, 1, 2, 4]], trips: [['델로스|Delos', 5]] },
  kalamata: { days: [['', 1, 2, 3]], trips: [['고대 메세니|Ancient Messene', 4], ['미스트라스|Mystras', 5], ['마니 반도|The Mani', 6]] },
  monemvasia: [1, 2, 3, 4],
  kavala: { days: [['', 1, 2, 3, 4]], trips: [['필리피|Philippi', 5], ['타소스섬|Thasos', 6]] },
  ioannina: { days: [['', 1, 2, 3, 4]], trips: [['자고리와 비코스 협곡|Zagori & the Vikos Gorge', 5]] },
  kefalonia: { days: [['', 1, 2, 3], ['', 4, 5, 6]] },
  paros: { days: [['', 1, 2, 4, 3, 5]], trips: [['안티파로스|Antiparos', 6]] },
  milos: { days: [['', 1, 4, 3, 2]], trips: [['클레프티코 보트 투어|Kleftiko boat trip', 5]] },
  rethymno: { days: [['', 1, 3, 2]], trips: [['아르카디 수도원|Arkadi Monastery', 4]] },
  'agios-nikolaos': { days: [['', 1, 3]], trips: [['스피날롱가|Spinalonga', 2], ['크리차|Kritsa', 4]] },
  symi: [1, 2, 3],
  kos: { days: [['', 1, 2, 3, 4, 5]] },
  patmos: [4, 2, 1, 3],
  rhodes: { days: [['', 4, 1, 6, 2, 7, 8]], trips: [['참비카 해변과 린도스|Tsambika & Lindos', 5, 3]] },
  thessaloniki: { days: [['해안과 시장|Seafront & markets', 2, 10, 1, 5, 8, 9], ['로마 유적과 윗마을|Roman sites & the Upper Town', 6, 4, 7, 3]] },
  corfu: {
    days: [['', 9, 3, 6, 1, 2, 8, 7]],
    trips: [
      ['아킬레이온|Achilleion', 5],
      ['팔레오카스트리차|Paleokastritsa', 4],
    ],
  },
  nafplio: { days: [['', 3, 4, 1, 5, 2]], trips: [['미케네와 에피다우로스|Mycenae & Epidaurus', 6, 7], ['네메아|Nemea', 8]] },
  zagreb: [4, 11, 3, 7, 10, 9, 6, 13, 1, 2, 8, 14, 12, 5],
  dubrovnik: {
    days: [
      ['구시가|Old town', 10, 17, 9, 2, 7, 15, 16, 8, 6, 19, 12, 11],
      ['성벽과 로브리예나츠|Walls & Lovrijenac', 1, 3, 18, 13, 4],
    ],
    trips: [
      ['로크룸 섬|Lokrum', 5],
      ['스톤|Ston', 20, 14],
    ],
  },
  split: {
    days: [['', 9, 1, 7, 15, 6, 4, 8, 10, 2, 3, 11, 12]],
    trips: [
      ['흐바르·브라치|Hvar or Brač', 5],
      ['클리스와 살로나|Klis & Salona', 13, 14],
    ],
  },
  zadar: { days: [['', 7, 8, 5, 4, 3, 11, 6, 9, 1, 2]], trips: [['닌|Nin', 10]] },
  sibenik: {
    days: [['', 1, 2, 3, 4]],
    trips: [
      ['성 니콜라 요새|St Nicholas Fortress', 5],
      ['크르카 국립공원|Krka National Park', 6],
    ],
  },
  rovinj: {
    days: [['', 3, 8, 6, 2, 7, 1, 4]],
    trips: [
      ['붉은 섬|Red Island', 5],
      ['림 피오르|Lim Bay', 9],
    ],
  },
  pula: {
    days: [['', 1, 2, 3, 4, 5]],
    trips: [
      ['브리유니 국립공원|Brijuni National Park', 6],
      ['카메냐크 곶|Cape Kamenjak', 7],
    ],
  },
  porec: { days: [['', 2, 1, 3, 4]], trips: [['모토분|Motovun', 5]] },
  hvar: {
    days: [['', 2, 6, 8, 7, 1]],
    trips: [
      ['파클레니 제도|Pakleni Islands', 3],
      ['스타리그라드와 라벤더 밭|Stari Grad & lavender fields', 5, 4],
    ],
  },
  korcula: {
    days: [['', 1, 2, 3]],
    trips: [
      ['룸바르다|Lumbarda', 4],
      ['바디야섬|Badija', 5],
    ],
  },
  trogir: [5, 4, 1, 7, 6, 3, 2],
  plitvice: { days: [['', 7, 1, 5, 6, 3, 2]], trips: [['라스토케|Rastoke', 4]] },
  istanbul: {
    days: [
      ['술탄아흐메트|Sultanahmet', 8, 1, 2, 7, 6],
      ['바자르와 보스포루스|Bazaars & the Bosphorus', 3, 13, 14, 12, 4],
      ['갈라타·베이올루와 해협|Galata, Beyoğlu & the strait', 20, 5, 21, 18, 22, 23],
      ['골든혼 서쪽|Golden Horn west', 15, 16, 17],
    ],
    trips: [
      ['아시아 쪽|Asian side', 26, 25],
      ['프린스 제도|Princes’ Islands', 27],
    ],
  },
  ankara: {
    days: [
      ['성채와 박물관|Citadel & museums', 5, 3, 2, 8, 7, 6],
      ['아느트카비르|Anıtkabir', 1, 4],
    ],
  },
  izmir: {
    days: [['', 3, 6, 2, 7, 4, 1]],
    trips: [
      ['에페소스|Ephesus', 5],
      ['페르가몬|Pergamon', 9],
      ['체슈메·알라차트|Çeşme & Alaçatı', 8],
    ],
  },
  antalya: {
    days: [
      ['칼레이치|Kaleiçi', 6, 7, 1, 3, 8],
      ['두덴 폭포와 라라|Düden & Lara', 2, 4],
    ],
    trips: [
      ['아스펜도스·시데|Aspendos & Side', 5, 10],
      ['페르게|Perge', 9],
    ],
  },
  goreme: {
    days: [
      ['열기구와 북부|Balloon & the north', 1, 2, 6, 8],
      ['지하도시와 계곡|Underground city & valleys', 5, 4, 10, 3, 7],
    ],
    trips: [['으흘라라 계곡|Ihlara Valley', 9]],
  },
  bursa: {
    days: [['', 7, 1, 3, 8, 2, 6]],
    trips: [
      ['울루다으|Uludağ', 4],
      ['주말르크즈크|Cumalıkızık', 5],
    ],
  },
  trabzon: {
    days: [['', 2, 4, 5]],
    trips: [
      ['수멜라 수도원|Sumela Monastery', 1],
      ['우준괼|Uzungöl', 3],
    ],
  },
  pamukkale: {
    days: [['', 1, 2, 3, 4, 5, 8]],
    trips: [
      ['라오디케아|Laodicea', 6],
      ['아프로디시아스|Aphrodisias', 7],
    ],
  },
  selcuk: {"days": [["", 1, 2, 3, 4, 5]], "trips": [["성모 마리아의 집|House of the Virgin Mary", 6], ["쉬린제|Şirince", 7]]},
  bodrum: {"days": [["", 1, 2, 3, 4, 5]], "trips": [["귀뮈실뤼크|Gümüşlük", 6]]},
  fethiye: {"days": [["", 1, 2, 3]], "trips": [["욀뤼데니즈|Ölüdeniz", 4], ["나비 계곡|Butterfly Valley", 5], ["사클르켄트 협곡|Saklıkent Gorge", 6]]},
  kas: {"days": [["", 2, 1]], "trips": [["케코바 보트|Kekova boat", 3], ["카푸타시 해변|Kaputaş", 4], ["메이스섬|Meis", 5], ["파타라|Patara", 6]]},
  olympos: {"days": [["", 1, 2, 3]], "trips": [["파셀리스|Phaselis", 4], ["타흐탈르 케이블카|Tahtalı cable car", 5]]},
  alanya: {"days": [["", 1, 2, 3, 4, 5]]},
  ayvalik: {"days": [["", 1, 2, 3]], "trips": [["쿤다섬|Cunda Island", 4], ["사름사클르 해변|Sarımsaklı", 5]]},
  canakkale: {"days": [["", 1, 2, 3]], "trips": [["트로이|Troy", 4, 5], ["갈리폴리|Gallipoli", 6]]},
  konya: {"days": [["", 1, 2, 3, 4, 5]], "trips": [["차탈회위크|Çatalhöyük", 6]]},
  safranbolu: {"days": [["", 1, 2, 3, 4]], "trips": [["요뤼크 마을|Yörük village", 5], ["인제카야 수도교|İncekaya", 6]]},
  amasra: {"days": [["", 1, 2, 3, 4, 5]]},
  edirne: {"days": [["", 1, 2, 3, 4, 5, 6]]},
  kars: {"days": [["", 1, 2, 3]], "trips": [["아니 유적|Ani", 4], ["츨드르 호수|Lake Çıldır", 5]]},
  gaziantep: {"days": [["", 1, 2, 3, 4, 5]]},
  sanliurfa: {"days": [["", 1, 2, 3, 4]], "trips": [["괴베클리 테페|Göbekli Tepe", 5], ["하란|Harran", 6]]},
  mardin: {"days": [["", 1, 2, 3, 4]], "trips": [["데이룰자파란 수도원|Deyrulzafaran", 5], ["다라|Dara", 6], ["미디야트·모르 가브리엘|Midyat & Mor Gabriel", 7]]},
  sofia: {
    days: [
      ['중심가 동쪽|East of the centre', 1, 7, 8, 6, 2],
      ['중심가 서쪽|West of the centre', 10, 9, 11, 3],
      ['남부·비토샤|South & Vitosha', 12, 4, 5],
    ],
    trips: [['릴라 수도원|Rila Monastery', 13]],
  },
  plovdiv: {
    days: [
      ['', 5, 8, 7, 2, 1],
      ['', 4, 6, 3],
    ],
    trips: [['바치코보 수도원|Bachkovo Monastery', 9]],
  },
  varna: {
    days: [['', 4, 5, 6, 3, 1, 2]],
    trips: [
      ['알라자 수도원|Aladzha Monastery', 7],
      ['포비티 카마니|Pobiti Kamani', 8],
    ],
  },
  'veliko-tarnovo': {
    days: [
      ['', 1, 3, 7],
      ['', 6, 2, 4],
    ],
    trips: [
      ['아르바나시|Arbanasi', 5],
      ['에타르 민속 마을|Etar', 8],
    ],
  },
  nessebar: { days: [['', 3, 1, 6, 7, 2, 5, 4]] },
  burgas: { days: [['', 4, 3, 1, 2]], trips: [['성 아나스타시아섬|St Anastasia Island', 5]] },
  sozopol: { days: [['', 1, 3, 2, 4]], trips: [['로포타모강|Ropotamo River', 5]] },
  bansko: { days: [['', 1, 2, 3, 4]], trips: [['피린 국립공원|Pirin National Park', 5]] },
  koprivshtitsa: { days: [['', 5, 1, 2, 4, 3]] },
  melnik: { days: [['', 1, 3, 4, 2]], trips: [['로젠 수도원|Rozhen Monastery', 5]] },
  kazanlak: { days: [['', 1, 2, 3, 4]], trips: [['쉽카 기념 교회|Shipka Memorial Church', 5]] },
  ruse: { days: [['', 1, 3, 2, 4]], trips: [['이바노보 바위 교회|Ivanovo Rock Churches', 5]] },
  bucharest: {
    days: [
      ['구시가·의회궁|Old Town & Parliament', 1, 12, 2, 7, 8],
      ['혁명광장·칼레아 빅토리에이|Revolution Square & Calea Victoriei', 9, 3, 6, 5],
      ['북부|North', 10, 11, 4],
    ],
    trips: [['모고쇼아이아 궁전|Mogoșoaia Palace', 13]],
  },
  brasov: {
    days: [['', 2, 1, 5, 7, 6, 3]],
    trips: [
      ['브란 성·라슈노프 요새|Bran & Râșnov', 8, 4],
      ['프레지메르|Prejmer', 9],
    ],
  },
  sibiu: {
    days: [['', 1, 8, 2, 3, 7, 6, 4]],
    trips: [
      ['아스트라 박물관|ASTRA Museum', 5],
      ['트란스퍼거러산 도로|Transfăgărășan', 9],
    ],
  },
  sighisoara: {
    days: [['', 1, 2, 3, 4, 6, 5]],
    trips: [
      ['비에르탄|Biertan', 7],
      ['비스크리|Viscri', 8],
    ],
  },
  'cluj-napoca': {
    days: [
      ['', 2, 1, 7, 6, 3, 4],
      ['', 5, 8],
    ],
    trips: [['투르다 소금 광산|Salina Turda', 9]],
  },
  timisoara: { days: [['', 1, 6, 2, 3, 5, 4, 7]] },
  constanta: { days: [['', 1, 4, 2, 3], ['', 5]] },
  tulcea: { days: [['', 3, 2, 1]], trips: [['다뉴브 삼각주 배 투어|Danube Delta boat trip', 4], ['에니살라 요새|Enisala Fortress', 5]] },
  sinaia: { days: [['', 3, 1, 2, 4]], trips: [['바벨레와 스핑크스|Babele & the Sphinx', 5]] },
  oradea: { days: [['', 1, 2, 5, 4, 3]] },
  iasi: { days: [['', 1, 2, 3, 5, 4]] },
  suceava: { days: [['', 1, 3, 2]], trips: [['보로네츠·수체비차 수도원|Voroneț & Sucevița', 4, 5]] },
  'sighetu-marmatiei': { days: [['', 1, 2, 3]], trips: [['사푼차·버르사나|Săpânța & Bârsana', 4, 5]] },
  ljubljana: {
    days: [
      ['구시가와 성|Old town & castle', 3, 5, 6, 2, 1, 4],
      ['티볼리와 플레치니크|Tivoli & Plečnik', 8, 10, 7, 9],
    ],
    trips: [
      ['슈코퓨 로카|Škofja Loka', 11],
      ['벨리카 플라니나|Velika Planina', 12],
    ],
  },
  bled: { days: [['', 1, 2, 4, 3, 5]], trips: [['빈트가르 협곡|Vintgar Gorge', 6]] },
  bohinj: { days: [['', 1, 2, 3, 4], ['산과 폭포|Peaks & falls', 5, 6]] },
  bovec: { days: [['', 1, 2, 3, 4]], trips: [['코바리드 박물관|Kobarid Museum', 5], ['코쟈크 폭포|Kozjak Waterfall', 6]] },
  piran: { days: [['', 5, 1, 6, 2, 3, 4]], trips: [['세초블레 염전|Sečovlje Salina', 7]] },
  koper: { days: [['', 1, 2, 3], ['이졸라|Izola', 4]], trips: [['흐라스토블레|Hrastovlje', 5], ['스트룬얀 절벽|Strunjan', 6]] },
  maribor: { days: [['', 3, 1, 6, 8, 7, 2, 4]], trips: [['포호리예|Pohorje', 5]] },
  ptuj: [1, 2, 6, 3, 4, 5],
  postojna: { days: [['', 1, 3, 4, 5]], trips: [['프레드야마 성|Predjama Castle', 2], ['슈코찬 동굴|Škocjan Caves', 6], ['리피차|Lipica', 7]] },
  sarajevo: {
    days: [
      ['바슈차르시야와 구시가|Baščaršija & old town', 1, 2, 6, 4, 7, 9],
      ['산과 전쟁의 기억|Mountain & war memory', 5, 8],
    ],
    trips: [
      ['희망의 터널|Tunnel of Hope', 3],
      ['브렐로 보스네|Vrelo Bosne', 10],
    ],
  },
  visegrad: { days: [['', 1, 2, 3]], trips: [['도브룬 수도원|Dobrun Monastery', 4]] },
  srebrenica: [1, 2, 3],
  mostar: { days: [['', 3, 2, 1, 4, 6, 7]], trips: [['블라가이|Blagaj', 5], ['크라비차 폭포|Kravica', 8], ['포치텔리|Počitelj', 9]] },
  trebinje: { days: [['', 1, 5, 2, 3], ['와인|Wine', 4]] },
  'banja-luka': [2, 6, 5, 3, 1, 4],
  travnik: { days: [['', 2, 3, 5, 6, 1]], trips: [['플리바 호수와 야이체|Pliva lakes & Jajce', 4]] },
  jajce: [1, 2, 3, 4, 5, 6],
  neum: [2, 1, 3],
  kotor: { days: [['', 1, 2, 8, 7, 5, 3]], trips: [['코토르만 유람선|Bay of Kotor boat trip', 4], ['페라스트|Perast', 6]] },
  perast: { days: [['', 1, 2, 3, 4]], trips: [['리산|Risan', 5]] },
  budva: {
    days: [['', 1, 6, 4, 2]],
    trips: [
      ['스베티 니콜라 섬|Sveti Nikola Island', 3],
      ['스베티 스테판|Sveti Stefan', 5],
    ],
  },
  ulcinj: { days: [['', 1, 2, 3], ['해변과 염전|Beaches & salina', 4, 5]], trips: [['아다 보야나|Ada Bojana', 6]] },
  podgorica: { days: [['', 3, 6, 5, 2, 4, 1], ['와인|Wine', 7]], trips: [['스카다르 호수|Lake Skadar', 8], ['오스트로그 수도원|Ostrog Monastery', 9]] },
  cetinje: { days: [['', 1, 2, 3, 4]], trips: [['로브첸|Lovćen', 5], ['리예카 츠르노예비차|Rijeka Crnojevića', 6]] },
  zabljak: { days: [['', 1, 2]], trips: [['타라 협곡 다리|Tara Bridge', 3], ['두르미토르 고리 도로|Durmitor Ring', 4]] },
  'herceg-novi': [3, 2, 6, 1, 5, 4],
  belgrade: {
    days: [
      ['칼레메그단과 구시가|Kalemegdan & old town', 1, 4, 9, 6, 2],
      ['브라차르와 데디네|Vračar & Dedinje', 3, 7, 8],
      ['강변과 제문|Rivers & Zemun', 10, 5],
    ],
    trips: [['아발라 탑|Avala Tower', 11]],
  },
  golubac: { days: [['', 2, 1]], trips: [['레펜스키 비르|Lepenski Vir', 3], ['철의 문 협곡|Iron Gates', 4], ['비미나치움|Viminacium', 5]] },
  'novi-sad': { days: [['', 2, 4, 3, 1]], trips: [['스렘스키 카를로브치|Sremski Karlovci', 5], ['프루슈카 고라 수도원|Fruška Gora monasteries', 6]] },
  'sremski-karlovci': { days: [['', 1, 2, 3, 5, 4]], trips: [['크루셰돌 수도원|Krušedol Monastery', 6]] },
  nis: [1, 4, 3, 2, 5],
  zlatibor: { days: [['', 1, 2]], trips: [['스토피차 동굴|Stopića Cave', 3], ['시로고이노|Sirogojno', 4], ['샤르간 8 열차|Šargan Eight', 5], ['드르벤그라드|Drvengrad', 6]] },
  kraljevo: { days: [['', 1, 2]], trips: [['스투데니차 수도원|Studenica', 3], ['마글리치 요새|Maglič', 4]] },
  subotica: { days: [['', 2, 1, 4, 6, 5]], trips: [['팔리치 호수|Lake Palić', 3]] },
  tbilisi: [4, 3, 5, 1, 2],
  batumi: { days: [['', 5, 2, 4, 1]], trips: [['바투미 식물원|Batumi Botanical Garden', 3]] },
  kutaisi: {
    days: [['', 4, 1]],
    trips: [
      ['겔라티 수도원|Gelati Monastery', 2],
      ['사타플리아와 프로메테우스 동굴|Sataplia & Prometheus Cave', 5, 3],
    ],
  },
  stepantsminda: { days: [['', 5, 1, 2]], trips: [['그벨레티 폭포와 다리알리 협곡|Gveleti & Dariali Gorge', 4, 3]] },
  sighnaghi: [2, 4, 1, 5, 3],
  skopje: {
    days: [
      ['구시장·요새|Old Bazaar & fortress', 1, 2, 6, 7, 5],
      ['강 남쪽 신시가|South of the river', 3, 10, 8, 9, 11],
    ],
    trips: [['마트카 협곡|Matka Canyon', 4]],
  },
  ohrid: {
    days: [
      ['', 3, 8, 6, 7, 5, 4, 2],
      ['', 1],
    ],
    trips: [
      ['성 나움 수도원|St Naum', 9],
      ['갈리치차 국립공원|Galičica', 10],
    ],
  },
  bitola: {
    days: [['', 3, 7, 5, 1, 6, 4, 2]],
    trips: [['펠리스테르 국립공원|Pelister National Park', 8]],
  },
  tetovo: {
    days: [['', 1, 4, 5, 2, 7]],
    trips: [
      ['포포바 샵카|Popova Šapka', 3],
      ['레쇼크 수도원|Lešok Monastery', 6],
    ],
  },
  struga: { days: [['', 1, 2, 3, 4]], trips: [['베브차니 샘|Vevčani Springs', 5]] },
  prilep: { days: [['', 3, 4, 2, 1]], trips: [['트레스카베츠 수도원|Treskavec Monastery', 5]] },
  krusevo: { days: [['', 5, 4, 2, 1, 3]] },
  stip: { days: [['', 2, 3, 4, 1]], trips: [['바르갈라 유적|Bargala', 5]] },
  nicosia: {
    days: [
      ['구시가 서쪽|Old town west', 12, 1, 8, 9, 3, 13, 5],
      ['구시가 동쪽·박물관|Old town east & museums', 6, 7, 11, 10, 4],
    ],
    trips: [['마하이라스 수도원|Machairas', 14]],
  },
  limassol: {
    days: [['', 3, 9, 1, 2, 5, 4]],
    trips: [
      ['쿠리온과 콜로시 성|Kourion & Kolossi', 6, 7],
      ['아마투스|Amathus', 8],
      ['아크로티리 소금 호수|Akrotiri', 10],
      ['오모도스|Omodos', 11],
      ['거버너스 비치|Governor’s Beach', 12],
    ],
  },
  paphos: {
    days: [
      ['카토 파포스|Kato Paphos', 2, 7, 1, 4, 8],
      ['구시가와 왕들의 무덤|Old town & Tombs', 9, 3],
    ],
    trips: [
      ['아프로디테 바위와 쿠클리아|Aphrodite’s Rock & Kouklia', 5, 11],
      ['아기오스 네오피토스|Agios Neophytos', 6],
      ['페야 바다 동굴과 코랄 베이|Peyia & Coral Bay', 13, 10],
      ['아바카스 협곡과 라라 베이|Avakas & Lara', 12, 14],
    ],
  },
  'ayia-napa': {
    days: [['', 1, 3, 6, 4, 2]],
    trips: [
      ['케이프 그레코와 코노스 베이|Cape Greco & Konnos', 5, 9, 7],
      ['피그 트리 베이|Fig Tree Bay', 8],
      ['마크로니소스와 아기아 테클라|Makronissos', 10],
    ],
  },
  larnaca: {"days": [["", 1, 3, 2, 5, 4]], "trips": [["키티 교회|Kiti", 6], ["히로키티아와 레프카라|Choirokoitia & Lefkara", 7, 8], ["스타브로부니 수도원|Stavrovouni", 9], ["제노비아 난파선|Zenobia", 10]]},
  troodos: {"days": [["", 1, 2]], "trips": [["아시누·아라쿠 교회|Asinou & Araka", 3, 4], ["키코스 수도원과 트로니|Kykkos & Throni", 5, 6], ["올림포스산과 칼레도니아 폭포|Olympos & Caledonia", 7, 8], ["플라트레스와 밀로메리스 폭포|Platres & Millomeris", 10, 9]]},
  polis: {"days": [["", 5, 1, 2, 3]], "trips": [["블루 라군 보트|Blue Lagoon boat", 4]]},
  tirana: {
    days: [
      ['중심가|City centre', 1, 8, 5, 7, 10, 9],
      ['블로쿠·남쪽|Blloku & south', 4, 2, 11],
    ],
    trips: [['다이티 산과 벙크아트 1|Mount Dajti & Bunk’Art 1', 3, 6]],
  },
  berat: [2, 8, 7, 5, 3, 1, 6, 4],
  gjirokaster: [2, 7, 5, 1, 3, 6, 4, 8],
  sarande: {
    days: [['', 1, 7, 2, 6]],
    trips: [
      ['부트린트와 크사밀|Butrint & Ksamil', 4, 5],
      ['블루 아이와 메소포탐|Blue Eye & Mesopotam', 8, 3],
    ],
  },
  durres: [1, 3, 2, 5, 4],
  kruje: [3, 1, 5, 2, 4],
  shkoder: { days: [['', 3, 2, 1, 4]], trips: [['메스 다리|Mes Bridge', 5]] },
  korce: { days: [['', 1, 4, 3, 2]], trips: [['보스코포여|Voskopojë', 5]] },
  vlore: {
    days: [['', 1, 2, 3]],
    trips: [
      ['즈베르네츠 수도원|Zvërnec', 4],
      ['로고라 고개|Llogara Pass', 5],
    ],
  },
  himare: {
    days: [['', 2, 1, 3]],
    trips: [
      ['포르토 팔레르모 성|Porto Palermo', 4],
      ['드흐르미와 지프 해변|Dhërmi & Gjipe', 5],
    ],
  },
  kyiv: [2, 3, 1],
  lviv: [1, 2, 3],
  odesa: [2, 3, 1],
  chisinau: {
    days: [
      ['중심가|City centre', 4, 1, 2, 12, 11, 10, 3],
      ['박물관과 공원|Museums & parks', 6, 5, 8, 9, 7],
    ],
    trips: [
      ['크리코바 와이너리|Cricova', 14],
      ['밀레슈티 미치 와이너리|Mileștii Mici', 15],
      ['카스텔 미미|Castel Mimi', 17],
      ['카프리아나·한쿠 수도원|Căpriana & Hâncu', 16, 19],
      ['마누크 베이 저택|Manuc Bey Mansion', 18],
    ],
  },
  'orheiul-vechi': {
    days: [['', 3, 1, 4, 2]],
    trips: [['오르헤이 시내와 쿠르키 수도원|Orhei town & Curchi', 6, 5]],
  },
  soroca: {
    days: [['', 1, 3, 2, 4]],
    trips: [
      ['코사우치 수도원|Cosăuți', 5],
      ['루디 수도원|Rudi', 6],
      ['자프카 수도원|Japca', 7],
    ],
  },
  saharna: { days: [['', 1, 2, 3]], trips: [['티포바 동굴 수도원|Țipova', 4, 5]] },
  purcari: { days: [['', 1, 2, 3]], trips: [['카우셰니 교회|Căușeni church', 4]] },
  comrat: {
    days: [['', 3, 2, 1]],
    trips: [
      ['베살마 박물관|Besalma', 4],
      ['베레우 호수|Lake Beleu', 5],
    ],
  },
  yerevan: [2, 3, 1],
  gyumri: [1, 3, 2],
  dilijan: [3, 2, 1],
  baku: [3, 2, 1],
  sheki: [3, 2, 1],
  gabala: [1, 2, 3],
  pristina: { days: [['', 3, 4, 2, 1, 6, 5]], trips: [['그라차니차 수도원|Gračanica', 7], ['곰 보호소|Bear Sanctuary', 8]] },
  prizren: [4, 3, 2, 7, 6, 5, 1],
  gjakova: { days: [['', 1, 2, 3, 4]], trips: [['테르지 다리|Terzi Bridge', 5]] },
  rahovec: [4, 1, 3, 2],
  peja: { days: [['', 3, 4, 2]], trips: [['루고바 협곡|Rugova Canyon', 1], ['비소키 데차니|Visoki Dečani', 5], ['라다바츠 동굴|Radavc Cave', 6]] },
  // Northern Cyprus
  'north-nicosia': [4, 1, 2, 3],
  kyrenia: { days: [['', 1, 2]], trips: [['산 위 수도원과 성|Abbey and castle in the hills', 3, 4]] },
  famagusta: { days: [['', 4, 1, 2]], trips: [['살라미스|Salamis', 3]] },
}
