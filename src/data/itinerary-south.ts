import type { RawItinerary } from './itinerary-helper'

/** Greece, Cyprus, the Balkans, Türkiye, Bulgaria, Romania, the Caucasus, Ukraine, Moldova and Northern Cyprus. */
export const itinerarySouth: Record<string, RawItinerary> = {
  meteora: [1, 2, 3, 4, 5],
  delphi: { days: [['', 4, 1, 3, 2]], trips: [['아라호바|Arachova', 5]] },
  sounion: [4, 3, 1, 2],
  zakynthos: {
    days: [['', 4]],
    trips: [
      ['블루 케이브와 나바요|Blue Caves & Navagio', 2, 1],
      ['마라토니시|Marathonisi', 3],
    ],
  },
  olympia: [5, 1, 3, 4, 2],
  chania: {
    days: [['', 1, 2]],
    trips: [
      ['발로스 석호|Balos Lagoon', 3],
      ['엘라포니시|Elafonisi', 4],
      ['사마리아 협곡|Samaria Gorge', 5],
    ],
  },
  naxos: { days: [['', 1, 2, 3]], trips: [['데메테르 신전과 할키|Temple of Demeter & Chalki', 5, 4]] },
  athens: [1, 2, 3, 6, 5, 4],
  aegina: [2, 5, 1, 3, 4],
  hydra: [1, 2, 3, 4, 5],
  santorini: [4, 3, 5, 2, 1],
  heraklion: [1, 2, 4, 3],
  mykonos: { days: [['', 3, 1, 2, 4]], trips: [['델로스|Delos', 5]] },
  rhodes: { days: [['', 4, 2, 1]], trips: [['참비카 해변과 린도스|Tsambika & Lindos', 5, 3]] },
  thessaloniki: [2, 1, 5, 4, 3],
  corfu: {
    days: [['', 3, 2, 1]],
    trips: [
      ['아킬레이온|Achilleion', 5],
      ['팔레오카스트리차|Paleokastritsa', 4],
    ],
  },
  nafplio: { days: [['', 3, 4, 1, 5, 2]], trips: [['미케네와 에피다우로스|Mycenae & Epidaurus', 6, 7]] },
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
      ['술탄아흐메트|Sultanahmet', 6, 1, 2, 3],
      ['갈라타와 보스포루스|Galata & the Bosphorus', 5, 4],
    ],
  },
  ankara: [1, 3, 2, 5, 4],
  izmir: { days: [['', 3, 2, 4, 1]], trips: [['에페소스|Ephesus', 5]] },
  antalya: { days: [['', 1, 2, 4]], trips: [['아스펜도스|Aspendos', 5]] },
  goreme: {
    days: [
      ['열기구와 북부|Balloon & the north', 1, 2, 6, 8],
      ['지하도시와 계곡|Underground city & valleys', 5, 4, 3, 7],
    ],
  },
  bursa: {
    days: [['', 1, 3, 2]],
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
  pamukkale: [1, 4, 5, 3, 2],
  sofia: { days: [['', 3, 2, 6, 1]], trips: [['보야나 교회와 비토샤 산|Boyana Church & Vitosha', 4, 5]] },
  plovdiv: [3, 4, 1, 2, 5],
  varna: [4, 3, 5, 1, 2],
  'veliko-tarnovo': { days: [['', 4, 2, 3, 1]], trips: [['아르바나시|Arbanasi', 5]] },
  nessebar: [3, 5, 1, 2, 4],
  bucharest: [1, 2, 3, 6, 5, 4],
  brasov: { days: [['', 2, 1, 5, 3]], trips: [['브란 성|Bran Castle', 4]] },
  sibiu: { days: [['', 1, 2, 3, 4]], trips: [['아스트라 박물관|ASTRA Museum', 5]] },
  sighisoara: [1, 3, 2, 5, 4],
  'cluj-napoca': [5, 2, 1, 3, 4],
  timisoara: [1, 5, 2, 3, 4],
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
  budva: {
    days: [['', 1, 6, 4, 2]],
    trips: [
      ['스베티 니콜라 섬|Sveti Nikola Island', 3],
      ['스베티 스테판|Sveti Stefan', 5],
    ],
  },
  podgorica: { days: [['', 3, 6, 5, 2, 4, 1], ['와인|Wine', 7]], trips: [['스카다르 호수|Lake Skadar', 8], ['오스트로그 수도원|Ostrog Monastery', 9]] },
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
  skopje: { days: [['', 3, 1, 2, 5]], trips: [['마트카 협곡|Matka Canyon', 4]] },
  ohrid: [3, 5, 4, 2, 1],
  bitola: [3, 5, 1, 4, 2],
  tetovo: { days: [['', 1, 5, 4, 2]], trips: [['샤르 산맥|Šar Mountains', 3]] },
  nicosia: [4, 1, 5, 3],
  limassol: { days: [['', 3, 1, 2, 4]], trips: [['와인 박물관|Wine Museum', 5]] },
  paphos: { days: [['', 3, 2, 1, 4]], trips: [['아프로디테 바위|Aphrodite’s Rock', 5]] },
  'ayia-napa': [1, 3, 4, 2, 5],
  tirana: { days: [['', 5, 1, 4, 2]], trips: [['다이티 산|Mount Dajti', 3]] },
  berat: [3, 5, 2, 1, 4],
  gjirokaster: [2, 5, 4, 3, 1],
  sarande: {
    days: [['', 1, 2]],
    trips: [
      ['부트린트와 해변|Butrint & the beaches', 4, 5],
      ['블루 아이|Blue Eye', 3],
    ],
  },
  kyiv: [2, 3, 1],
  lviv: [1, 2, 3],
  odesa: [2, 3, 1],
  chisinau: [1, 2, 3],
  'orheiul-vechi': [3, 1, 2],
  soroca: [1, 3, 2],
  yerevan: [2, 3, 1],
  gyumri: [1, 3, 2],
  dilijan: [3, 2, 1],
  baku: [3, 2, 1],
  sheki: [3, 2, 1],
  gabala: [1, 2, 3],
  pristina: [3, 2, 1],
  prizren: [3, 2, 1],
  peja: { days: [['', 3, 2]], trips: [['루고바 협곡|Rugova Canyon', 1]] },
  // Northern Cyprus
  'north-nicosia': [4, 1, 2, 3],
  kyrenia: { days: [['', 1, 2]], trips: [['산 위 수도원과 성|Abbey and castle in the hills', 3, 4]] },
  famagusta: { days: [['', 4, 1, 2]], trips: [['살라미스|Salamis', 3]] },
}
