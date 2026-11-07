import type { RawItinerary } from './itinerary-helper'

/** Benelux, Germany, Switzerland, Liechtenstein and Austria. */
export const itineraryCentral: Record<string, RawItinerary> = {
  amsterdam: {
    days: [
      ['담 광장과 운하 지구|Dam Square & the canals', 1, 12, 7, 2, 5, 4],
      ['박물관 광장과 폰덜파크|Museum Quarter & Vondelpark', 6, 3, 15, 14],
      ['렘브란트와 IJ강 북쪽|Rembrandt & across the IJ', 13, 17, 16],
    ],
    trips: [['잔세스칸스|Zaanse Schans', 8], ['폴렌담과 마르컨|Volendam & Marken', 9], ['알크마르 치즈 시장|Alkmaar cheese market', 10], ['케우켄호프|Keukenhof', 11]],
  },
  rotterdam: { days: [['', 3, 1, 4, 2, 9, 5, 6, 8]], trips: [['킨더다이크 풍차|Kinderdijk windmills', 7]] },
  'the-hague': {
    days: [
      ['시내|City centre', 9, 5, 3, 7, 1, 2],
      ['마뒤로담과 스헤베닝언|Madurodam & Scheveningen', 6, 8, 4],
    ],
  },
  utrecht: [3, 4, 2, 1, 5, 6],
  haarlem: [3, 1, 4, 5, 6, 2],
  delft: [3, 1, 5, 4, 6, 2],
  maastricht: [6, 1, 4, 3, 5, 2],
  leiden: [4, 7, 5, 6, 1, 2, 3],
  giethoorn: [1, 2, 3, 4],
  'luxembourg-city': [6, 5, 1, 10, 2, 8, 3, 7, 4, 9],
  vianden: [3, 1, 4, 2],
  echternach: [4, 2, 3, 1],
  clervaux: [1, 2, 3, 4],
  remich: [1, 3, 2, 4],
  brussels: {
    days: [
      ['아토미움과 그랑플라스|Atomium & the Grand-Place', 3, 4, 11, 10, 9, 2, 5],
      ['몽데자르와 생캉트네르|Mont des Arts & Cinquantenaire', 7, 6, 1, 8, 12, 13],
    ],
    trips: [['워털루|Waterloo', 14]],
  },
  bruges: [10, 1, 2, 8, 5, 3, 6, 7, 11, 9, 4],
  ghent: [6, 2, 4, 8, 7, 1, 3, 5, 9],
  antwerp: [1, 6, 9, 7, 2, 4, 8, 3, 5],
  leuven: [2, 4, 1, 3, 6, 5],
  mechelen: [2, 1, 3, 4, 5, 6],
  dinant: [2, 1, 4, 3],
  vienna: {
    days: [
      ['구시가와 왕궁|Old town & the Hofburg', 2, 5, 17, 10, 7],
      ['박물관과 링|Museums & the Ring', 9, 11, 16, 15, 4, 12, 13],
      ['쇤브룬과 벨베데레|Schönbrunn & Belvedere', 1, 3, 14, 6],
    ],
    trips: [['멜크와 바하우|Melk & the Wachau', 8]],
  },
  salzburg: {
    days: [
      ['구시가와 성|Old town & fortress', 3, 9, 4, 6, 7, 12, 5, 1],
      ['미라벨과 헬브룬|Mirabell & Hellbrunn', 2, 11, 10],
    ],
    trips: [['장크트볼프강|St. Wolfgang', 8], ['운터스베르크|Untersberg', 13]],
  },
  innsbruck: { days: [['', 4, 1, 3, 8, 6, 9, 2]], trips: [['스와로브스키 크리스탈 세계|Swarovski Crystal Worlds', 7]] },
  graz: [3, 1, 2, 7, 6, 4, 5],
  linz: { days: [['', 1, 3, 2, 4, 5, 6]], trips: [['마우트하우젠 추모관|Mauthausen Memorial', 7]] },
  durnstein: { days: [['', 1, 3, 2, 4]], trips: [['크렘스|Krems', 5], ['멜크 수도원|Melk Abbey', 6]] },
  'bad-ischl': [1, 2, 3, 4, 5],
  werfen: [1, 2, 3],
  'zell-am-see': {
    days: [
      ['첼암제와 슈미텐회헤|Zell am See & Schmittenhöhe', 1, 2],
      ['키츠슈타인호른 빙하|Kitzsteinhorn glacier', 3],
      ['카프룬 고산 댐 호수|Kaprun reservoirs', 4],
    ],
    trips: [['크리믈 폭포|Krimml Waterfalls', 5], ['그로스글로크너 산악 도로|Grossglockner Road', 6]],
  },
  kitzbuhel: {
    days: [
      ['구시가와 하넨캄|Old town & Hahnenkamm', 1, 5, 2],
      ['호른과 슈바르츠 호수|Horn & Schwarzsee', 3, 4],
    ],
  },
  bregenz: { days: [['', 1, 4, 3, 2]], trips: [['린다우 섬|Lindau island', 5]] },
  klagenfurt: {
    days: [['', 1, 2, 3, 4, 5]],
    trips: [['피라미덴코겔 전망탑|Pyramidenkogel', 6], ['호흐오스터비츠 성|Hochosterwitz Castle', 7]],
  },
  hallstatt: { days: [['', 2, 6, 4, 5, 3, 1]], trips: [['다흐슈타인 얼음 동굴과 5 핑거스|Dachstein Ice Cave & 5fingers', 7]] },
  zurich: { days: [['', 9, 6, 3, 8, 7, 1, 2, 5, 4]], trips: [['린트 초콜릿 박물관|Lindt Home of Chocolate', 10], ['라인 폭포와 슈타인암라인|Rhine Falls & Stein am Rhein', 11]] },
  geneva: { days: [['', 8, 3, 2, 7, 10, 1, 5, 6, 4]], trips: [['CERN 사이언스 게이트웨이|CERN Science Gateway', 9]] },
  bern: { days: [['', 4, 1, 7, 2, 6, 3, 8, 5]], trips: [['파울 클레 센터|Zentrum Paul Klee', 9]] },
  lucerne: { days: [['', 6, 7, 1, 4, 3, 5]], trips: [['호수 유람과 리기산|Lake cruise & Rigi', 2, 8], ['필라투스|Pilatus', 9], ['티틀리스|Titlis', 10]] },
  interlaken: { days: [['', 4, 1, 3]], trips: [['융프라우요흐|Jungfraujoch', 5], ['라우터브루넨|Lauterbrunnen', 6], ['이젤트발트|Iseltwald', 7], ['쉬니게 플라테|Schynige Platte', 8]] },
  berlin: {
    days: [
      ['정부 지구와 박물관 섬|Government quarter & Museum Island', 4, 1, 9, 12, 2, 11, 10],
      ['장벽과 크로이츠베르크|The Wall & Kreuzberg', 14, 5, 13, 15, 3],
      ['서베를린|West Berlin', 6, 17, 7, 16],
    ],
    trips: [
      ['작센하우젠|Sachsenhausen', 18],
      ['아우토슈타트|Autostadt', 8],
    ],
  },
  munich: {
    days: [
      ['시내|City centre', 2, 4, 6, 1, 5],
      ['님펜부르크와 BMW|Nymphenburg & BMW', 3, 8],
    ],
    trips: [['다하우 추모관|Dachau Memorial', 7], ['아우디 박물관|Audi museum', 9]],
  },
  hamburg: { days: [['구시가와 하펜시티|Old town & HafenCity', 6, 7, 1, 10, 3, 2], ['항구와 알스터|Harbour & Alster', 9, 8, 5, 4, 11]] },
  cochem: [2, 5, 1, 3, 4],
  cologne: [1, 4, 2, 5, 3],
  rudesheim: [1, 3, 2, 4],
  frankfurt: [6, 2, 1, 3, 5],
  basel: { days: [['', 5, 2, 1, 3, 8, 4]], trips: [['바이엘러 재단|Fondation Beyeler', 6], ['비트라 캠퍼스|Vitra Campus', 7]] },
  zermatt: {
    days: [
      ['글래시어 파라다이스와 슈바르츠제|Glacier Paradise & Schwarzsee', 3, 6, 8, 5],
      ['고르너그라트와 순네가|Gornergrat & Sunnegga', 2, 4, 7, 1],
    ],
  },
  lausanne: { days: [['', 1, 5, 4, 2, 3]], trips: [['라보 포도밭|Lavaux', 6]] },
  dresden: [1, 3, 2, 4, 5, 6],
  heidelberg: [1, 2, 5, 4, 3],
  bamberg: [1, 4, 2, 3, 5],
  wurzburg: [1, 4, 3, 2, 5],
  regensburg: [1, 4, 2, 3, 6, 5],
  berchtesgaden: [1, 2, 5, 3, 4],
  'garmisch-partenkirchen': [1, 3, 2, 4, 5],
  nuremberg: [1, 5, 2, 3, 4],
  fussen: [2, 3, 1, 4, 5],
  lugano: { days: [['', 2, 5, 1, 4, 3]], trips: [['몬테 브레|Monte Brè', 6], ['몬테 제네로소|Monte Generoso', 7]] },
  gruyeres: [2, 1, 4, 3, 5],
  montreux: { days: [['', 4, 3, 2, 1]], trips: [['로셰드네|Rochers-de-Naye', 5], ['브베|Vevey', 6, 7]] },
  grindelwald: {
    days: [
      ['피르스트와 마을|First & the village', 2, 5, 4],
      ['멘리헨과 아이거 트레일|Männlichen & the Eiger Trail', 3, 6, 1],
    ],
  },
  'st-moritz': { days: [['', 2, 5, 1, 4, 3]], trips: [['무오타스 무라글|Muottas Muragl', 6], ['디아볼레차|Diavolezza', 7]] },
  lauterbrunnen: { days: [['', 1, 2, 5]], trips: [['뮈렌과 쉴트호른|Mürren & Schilthorn', 3, 4]] },
  locarno: { days: [['', 1, 4, 2, 3]], trips: [['아스코나|Ascona', 5], ['베르차스카 계곡|Verzasca valley', 6], ['브리사고 섬|Brissago Islands', 7]] },
  'st-gallen': { days: [['', 1, 2, 3, 4]], trips: [['아펜첼과 에벤알프|Appenzell & Ebenalp', 5, 6], ['젠티스|Säntis', 7]] },
  kandersteg: { days: [['', 1]], trips: [['블라우 호수|Blausee', 2], ['게미 고개|Gemmi Pass', 3], ['가스테른 계곡|Gasterntal', 4], ['알멘알프|Allmenalp', 5]] },
  bellinzona: { days: [['', 4, 1, 2, 3, 5]], trips: [['카라스크 출렁다리|Carasc Tibetan bridge', 6]] },
  chur: { days: [['', 1, 2, 4, 3]], trips: [['브람브뤼에슈|Brambrüesch', 5], ['라인 협곡|Rhine Gorge', 6]] },
  stuttgart: {
    days: [
      ['바트 칸슈타트|Bad Cannstatt', 1, 4],
      ['시내와 포르쉐|City centre & Porsche', 3, 5, 2],
    ],
  },
  leipzig: [2, 3, 1, 5, 4],
  rothenburg: [1, 4, 2, 3, 5],
  potsdam: { days: [['', 3, 6, 1, 2, 4, 7, 5]], trips: [['바벨스베르크 영화 공원|Filmpark Babelsberg', 8]] },
  vaduz: [6, 2, 3, 4, 1, 5],
  schaan: [2, 1, 3, 4, 5],
  malbun: [5, 3, 2, 4],
}
