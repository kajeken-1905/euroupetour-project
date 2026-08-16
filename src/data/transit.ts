import type { CityTransit, CountryTransit, TransitApp, TransitModeId } from '../types'

export const TRANSIT_MODE_ORDER: TransitModeId[] = [
  'metro',
  'tram',
  'bus',
  'train',
  'ferry',
  'rideshare',
  'taxi',
  'bike',
  'walk',
]

const APP_CATALOG = {
  uber: { name: 'Uber', url: 'https://www.uber.com/', icon: '/transit-apps/uber.png' },
  citymapper: { name: 'Citymapper', url: 'https://citymapper.com/', icon: '/transit-apps/citymapper.png' },
  'free-now': { name: 'Free Now', url: 'https://www.free-now.com/', icon: '/transit-apps/free-now.png' },
  cabify: { name: 'Cabify', url: 'https://cabify.com/', icon: '/transit-apps/cabify.png' },
  bolt: { name: 'Bolt', url: 'https://bolt.eu/', icon: '/transit-apps/bolt.png' },
  flixbus: { name: 'FlixBus', url: 'https://www.flixbus.com/', icon: '/transit-apps/flixbus.png' },
  trainline: { name: 'Trainline', url: 'https://www.thetrainline.com/', icon: '/transit-apps/trainline.png' },
  renfe: { name: 'Renfe', url: 'https://www.renfe.com/', icon: '/transit-apps/renfe.png' },
  'renfe-cercanias': {
    name: 'Renfe Cercanías',
    url: 'https://www.renfe.com/',
    icon: '/transit-apps/renfe.png',
  },
  alsa: { name: 'ALSA', url: 'https://www.alsa.com/', icon: '/transit-apps/alsa.png' },
  cp: { name: 'CP Oficial', url: 'https://www.cp.pt/', icon: '/transit-apps/cp.png' },
  'rede-expressos': {
    name: 'Rede Expressos',
    url: 'https://www.rede-expressos.pt/',
    icon: '/transit-apps/rede-expressos.png',
  },
  carris: { name: 'Carris', url: 'https://www.carris.pt/', icon: '/transit-apps/carris.png' },
  'metro-lisboa': {
    name: 'Metro Lisboa',
    url: 'https://www.metrolisboa.pt/',
    icon: '/transit-apps/metro-lisboa.png',
  },
  'metro-porto': {
    name: 'Metro do Porto',
    url: 'https://www.metrodoporto.pt/',
    icon: '/transit-apps/metro-porto.png',
  },
  'metro-madrid': {
    name: 'Metro de Madrid',
    url: 'https://www.metromadrid.es/',
    icon: '/transit-apps/metro-madrid.png',
  },
  tmb: { name: 'TMB App', url: 'https://www.tmb.cat/', icon: '/transit-apps/tmb.png' },
  tussam: { name: 'TUSSAM', url: 'https://www.tussam.es/', icon: '/transit-apps/tussam.png' },
  metrovalencia: {
    name: 'Metrovalencia',
    url: 'https://www.metrovalencia.es/',
    icon: '/transit-apps/metrovalencia.png',
  },
  gibraltar: {
    name: 'Gibraltar info',
    url: 'https://www.visitgibraltar.gi/',
    icon: '/transit-apps/gibraltar.png',
  },
  sncf: { name: 'SNCF Connect', url: 'https://www.sncf-connect.com/', icon: '/transit-apps/sncf.png' },
  idfm: { name: 'Île-de-France Mobilités', url: 'https://www.iledefrance-mobilites.fr/', icon: '/transit-apps/idfm.png' },
  tfl: { name: 'TfL Go', url: 'https://tfl.gov.uk/', icon: '/transit-apps/tfl.png' },
  'irish-rail': { name: 'Irish Rail', url: 'https://www.irishrail.ie/', icon: '/transit-apps/irish-rail.png' },
  sncb: { name: 'SNCB/NMBS', url: 'https://www.belgiantrain.be/', icon: '/transit-apps/sncb.png' },
  ns: { name: 'NS', url: 'https://www.ns.nl/', icon: '/transit-apps/ns.png' },
  cfl: { name: 'CFL', url: 'https://www.cfl.lu/', icon: '/transit-apps/cfl.png' },
  db: { name: 'DB Navigator', url: 'https://www.bahn.com/', icon: '/transit-apps/db.png' },
  sbb: { name: 'SBB Mobile', url: 'https://www.sbb.ch/', icon: '/transit-apps/sbb.png' },
  oebb: { name: 'ÖBB', url: 'https://www.oebb.at/', icon: '/transit-apps/oebb.png' },
  trenitalia: { name: 'Trenitalia', url: 'https://www.trenitalia.com/', icon: '/transit-apps/trenitalia.png' },
  cd: { name: 'České dráhy', url: 'https://www.cd.cz/', icon: '/transit-apps/cd.png' },
  mav: { name: 'MÁV', url: 'https://www.mav.hu/', icon: '/transit-apps/mav.png' },
  pkp: { name: 'PKP Intercity', url: 'https://www.intercity.pl/', icon: '/transit-apps/pkp.png' },
  dsb: { name: 'DSB', url: 'https://www.dsb.dk/', icon: '/transit-apps/dsb.png' },
  sj: { name: 'SJ', url: 'https://www.sj.se/', icon: '/transit-apps/sj.png' },
  vy: { name: 'Vy', url: 'https://www.vy.no/', icon: '/transit-apps/vy.png' },
  vr: { name: 'VR', url: 'https://www.vr.fi/', icon: '/transit-apps/vr.png' },
} as const

type AppId = keyof typeof APP_CATALOG

function ta(id: AppId, note?: { ko: string; en: string }): TransitApp {
  return note ? { ...APP_CATALOG[id], note } : { ...APP_CATALOG[id] }
}

export const countryTransitById: Record<string, CountryTransit> = {
  fr: {
    summary: {
      ko: '우측통행. TGV·Ouigo·FlixBus로 도시 간 이동이 편합니다.',
      en: 'Drive on the right. TGV, Ouigo, and FlixBus link cities well.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '파리 허브 TGV, 지역은 TER. 야간열차·장거리 버스도 선택지입니다.',
      en: 'TGV from Paris hubs; TER regionally. Night trains and coaches are options.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail + TGV 좌석 예약이 필요할 수 있습니다.',
      en: 'Eurail/Interrail; TGV often needs seat reservations.',
    },
    paymentTip: {
      ko: '대도시는 Navigo·연락처 없는 카드 태핑. 소도시는 티켓 키오스크를 확인하세요.',
      en: 'Big cities: Navigo/contactless. Smaller towns may need ticket machines.',
    },
    apps: [
      ta('sncf', { ko: '기차·TGV', en: 'Trains / TGV' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  uk: {
    summary: {
      ko: '좌측통행. National Rail·장거리 버스·런던 Tube가 중심입니다.',
      en: 'Drive on the left. National Rail, coaches, and the London Tube are core.',
    },
    drivingSide: 'left',
    longDistance: {
      ko: '도시 간은 기차가 빠르지만 요금 변동이 큽니다. 사전 예약을 권합니다.',
      en: 'Trains are fast between cities but prices swing—book ahead.',
    },
    nationalPasses: {
      ko: 'BritRail·Railcard 할인. Eurail은 영국 일부 구간에 제한이 있을 수 있습니다.',
      en: 'BritRail/Railcards help. Eurail coverage in Britain can be limited.',
    },
    paymentTip: {
      ko: '런던은 contactless/Oyster. 지방은 기차 앱·키오스크가 기본입니다.',
      en: 'London: contactless/Oyster. Elsewhere: rail apps and ticket machines.',
    },
    apps: [
      ta('tfl', { ko: '런던', en: 'London' }),
      ta('trainline', { ko: '기차 예약', en: 'Train booking' }),
      ta('bolt', { ko: '런던 등', en: 'London etc.' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  ie: {
    summary: {
      ko: '좌측통행. Irish Rail·Bus Éireann·시내 버스로 이동합니다.',
      en: 'Drive on the left. Irish Rail, Bus Éireann, and city buses link places.',
    },
    drivingSide: 'left',
    longDistance: {
      ko: '더블린 거점 기차·장거리 버스. 서부·소도시는 버스·렌터가 편할 때가 많습니다.',
      en: 'Trains/coaches from Dublin; west and small towns often need bus or car.',
    },
    nationalPasses: {
      ko: 'Leap Visitor·Eurail 일부 구간. 버스 패스도 시즌별 있습니다.',
      en: 'Leap Visitor and partial Eurail; seasonal bus passes exist.',
    },
    paymentTip: {
      ko: '더블린 Leap 카드. 소도시는 현금·카드 버스 결제를 확인하세요.',
      en: 'Dublin Leap card; check cash/card rules on rural buses.',
    },
    apps: [
      ta('irish-rail', { ko: '기차', en: 'Trains' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '더블린 등', en: 'Dublin etc.' }),
    ],
  },
  be: {
    summary: {
      ko: '우측통행. SNCB/NMBS 기차로 주요 도시가 잘 연결됩니다.',
      en: 'Drive on the right. SNCB/NMBS trains connect main cities well.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '브뤼셀 허브. 파리·암스테르담은 Thalys/Eurostar·고속 연결.',
      en: 'Brussels hub; high-speed links to Paris and Amsterdam.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail + 벨기에 당일권·주말권이 유용합니다.',
      en: 'Eurail/Interrail; Belgian day/weekend tickets help.',
    },
    paymentTip: {
      ko: 'MOBIB·앱 티켓. 브뤼셀·앤트워프는 연락처 없는 결제 확대 중.',
      en: 'MOBIB/app tickets; contactless expanding in Brussels/Antwerp.',
    },
    apps: [
      ta('sncb', { ko: '국영 기차', en: 'National trains' }),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  nl: {
    summary: {
      ko: '우측통행. NS 기차·트램·버스·자전거가 일상입니다.',
      en: 'Drive on the right. NS trains, trams, buses, and bikes are everyday.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '암스테르담·로테르담·위트레흐트 허브. OV-chipkaart로 대부분 환승.',
      en: 'Amsterdam/Rotterdam/Utrecht hubs; OV-chipkaart covers most transfers.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail + NS 당일권. 자전거 대여는 NS·시티바이크.',
      en: 'Eurail/Interrail + NS day tickets; NS and city bike hire.',
    },
    paymentTip: {
      ko: 'OV-chipkaart 또는 스마트폰 check-in/out 필수. Uber는 암스테르담·로테르담 중심, 다른 도시는 Bolt.',
      en: 'OV-chipkaart or phone check-in/out. Uber is mainly Amsterdam/Rotterdam; Bolt elsewhere.',
    },
    apps: [
      ta('ns', { ko: '기차', en: 'Trains' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '암스테르담·로테르담', en: 'Amsterdam & Rotterdam' }),
    ],
  },
  lu: {
    summary: {
      ko: '우측통행. 국내 대중교통이 무료인 점이 특징입니다.',
      en: 'Drive on the right. Notable for free nationwide public transport.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '룩셈부르크–트리에르·브뤼셀·파리 연결 기차·버스.',
      en: 'Trains/buses to Trier, Brussels, Paris.',
    },
    nationalPasses: {
      ko: '국내 버스·기차·트램 무료. 국제선은 별도 요금.',
      en: 'Domestic bus/train/tram free; cross-border tickets sold separately.',
    },
    paymentTip: {
      ko: '국내선 티켓 불필요. 국경 넘는 구간만 결제하면 됩니다.',
      en: 'No ticket inside Luxembourg; pay only for cross-border legs.',
    },
    apps: [
      ta('cfl', { ko: '기차·이동', en: 'Rail & travel' }),
      ta('bolt'),
      ta('uber', { ko: '룩셈부르크시', en: 'Luxembourg City' }),
    ],
  },
  mc: {
    summary: {
      ko: '우측통행. 모나코는 버스·도보·택시 중심의 작은 도시국가입니다.',
      en: 'Drive on the right. Tiny city-state: buses, walking, and taxis.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '니스·모나코 기차·버스. 공항은 니스 Côte d\'Azur가 일반적입니다.',
      en: 'Train/bus to Nice; Nice Côte d\'Azur Airport is usual.',
    },
    paymentTip: {
      ko: '캠(CAM) 버스 카드·앱. 우버는 모나코 안에서 호출이 안 되고, 니스에서 들어오는 식입니다.',
      en: 'CAM bus card/app. Uber cannot pick up inside Monaco; rides usually start from Nice.',
    },
    apps: [
      ta('free-now', { ko: '니스·코트다쥐르', en: 'Nice / Côte d\'Azur' }),
    ],
  },
  de: {
    summary: {
      ko: '우측통행. DB ICE/IC와 지역 S-Bahn·U-Bahn이 뼈대입니다.',
      en: 'Drive on the right. DB ICE/IC plus regional S-/U-Bahn are the backbone.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: 'ICE로 대도시 연결. 지역은 RE/RB·FlixBus. 파업·지연을 앱으로 확인하세요.',
      en: 'ICE between cities; RE/RB and FlixBus regionally—check strikes/delays in apps.',
    },
    nationalPasses: {
      ko: 'Deutschland-Ticket(지역)·Eurail/Interrail. ICE는 예약이 편합니다.',
      en: 'Deutschland-Ticket (regional) and Eurail/Interrail; reserve ICE seats.',
    },
    paymentTip: {
      ko: '대도시는 교통권·스마트폰. 호출은 Free Now가 안정적이고, Uber·Bolt는 면허 택시 배차입니다.',
      en: 'City tickets/phone taps; Free Now is reliable, Uber/Bolt dispatch licensed taxis.',
    },
    apps: [
      ta('db', { ko: 'DB 기차', en: 'DB trains' }),
      ta('bolt'),
      ta('free-now', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
    ],
  },
  ch: {
    summary: {
      ko: '우측통행. SBB 기차 정시성과 산악 연결이 뛰어납니다.',
      en: 'Drive on the right. Excellent SBB punctuality and mountain links.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '취리히·제네바·베른 허브. 산간은 기차+포스트버스·케이블카.',
      en: 'Zürich/Geneva/Bern hubs; mountains via train + PostBus/cableways.',
    },
    nationalPasses: {
      ko: 'Swiss Travel Pass·Eurail. 산악 구간은 추가 요금이 있을 수 있습니다.',
      en: 'Swiss Travel Pass/Eurail; mountain segments may cost extra.',
    },
    paymentTip: {
      ko: 'SBB 앱 티켓·Half Fare Card. 현금보다 카드가 편합니다.',
      en: 'SBB app tickets/Half Fare Card; cards beat cash.',
    },
    apps: [
      ta('sbb', { ko: '기차·버스', en: 'Trains & buses' }),
      ta('uber', { ko: '취리히·제네바 등', en: 'Zürich, Geneva etc.' }),
    ],
  },
  at: {
    summary: {
      ko: '우측통행. ÖBB 기차와 빈·잘츠부르크 시내 교통이 잘 갖춰져 있습니다.',
      en: 'Drive on the right. ÖBB trains and strong urban networks in Vienna/Salzburg.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '빈 허브 Railjet. 잘츠캄머구트는 기차+버스.',
      en: 'Vienna Railjet hub; Salzkammergut needs train+bus.',
    },
    nationalPasses: {
      ko: 'Klimaticket·Eurail/Interrail. 좌석 예약을 권합니다.',
      en: 'Klimaticket and Eurail/Interrail; seat reservations help.',
    },
    paymentTip: {
      ko: '빈은 WienMobil. 지방은 ÖBB 티켓·앱.',
      en: 'Vienna: WienMobil; elsewhere ÖBB tickets/apps.',
    },
    apps: [
      ta('oebb', { ko: 'ÖBB 기차', en: 'ÖBB trains' }),
      ta('citymapper', { ko: '빈', en: 'Vienna' }),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  li: {
    summary: {
      ko: '우측통행. 리히텐슈타인은 버스(LIEmobil)와 도보가 중심입니다.',
      en: 'Drive on the right. Buses (LIEmobil) and walking dominate.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '스위스·오스트리아 국경 기차역 환승 후 버스.',
      en: 'Transfer at Swiss/Austrian border stations then bus.',
    },
    paymentTip: {
      ko: 'LIEmobil 티켓·데이패스. 우버·볼트는 없고 현지 택시입니다.',
      en: 'LIEmobil tickets/day passes; no Uber/Bolt—use local taxis.',
    },
    apps: [
      ta('sbb', { ko: '인접 스위스 연결', en: 'Swiss connections' }),
    ],
  },
  cz: {
    summary: {
      ko: '우측통행. ČD 기차와 프라하 지하철·트램이 핵심입니다.',
      en: 'Drive on the right. ČD trains and Prague metro/trams are key.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '프라하 허브. 소도시는 버스·지역열차. RegioJet·FlixBus도 흔합니다.',
      en: 'Prague hub; buses/regional trains for towns; RegioJet/FlixBus common.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail + ČD 할인. 프라하 관광권은 시내에 유용.',
      en: 'Eurail/Interrail + ČD discounts; Prague tourist passes for the city.',
    },
    paymentTip: {
      ko: '프라하는 PID 리트바/앱. 호출은 Bolt가 기본, Uber는 프라하·브르노.',
      en: 'Prague PID Litacka/app; Bolt first, Uber in Prague/Brno.',
    },
    apps: [
      ta('cd', { ko: '기차', en: 'Trains' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('uber', { ko: '프라하·브르노', en: 'Prague & Brno' }),
    ],
  },
  sk: {
    summary: {
      ko: '우측통행. ZSSK 기차와 시내버스로 이동합니다.',
      en: 'Drive on the right. ZSSK trains and city buses.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '브라티슬라바–빈은 기차가 매우 가깝습니다. 타트라 산악은 기차+버스.',
      en: 'Bratislava–Vienna is a short train ride; Tatras need train+bus.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail. 국내 할인권을 시즌별로 확인하세요.',
      en: 'Eurail/Interrail; check seasonal domestic discounts.',
    },
    paymentTip: {
      ko: '시내 티켓 앱·키오스크. 브라티슬라바는 Bolt가 편하고 Uber는 수도에서만 됩니다.',
      en: 'City tickets via app/kiosk; Bolt is handy, Uber only in Bratislava.',
    },
    apps: [
      ta('trainline', { ko: '예약 보조', en: 'Booking help' }),
      ta('bolt'),
      ta('uber', { ko: '브라티슬라바만', en: 'Bratislava only' }),
    ],
  },
  hu: {
    summary: {
      ko: '우측통행. MÁV 기차와 부다페스트 지하철·트램이 중심입니다.',
      en: 'Drive on the right. MÁV trains and Budapest metro/trams.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '부다페스트 허브. 덱밴드·페치 등은 기차·버스.',
      en: 'Budapest hub; Debrecen/Pécs by train or bus.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail + Budapest Card(시내).',
      en: 'Eurail/Interrail plus Budapest Card in the city.',
    },
    paymentTip: {
      ko: '부다페스트는 BudapestGO. 우버는 2016년부터 없고 Bolt가 표준입니다.',
      en: 'BudapestGO app; Uber has been banned since 2016—use Bolt.',
    },
    apps: [
      ta('mav', { ko: '기차', en: 'Trains' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
    ],
  },
  pl: {
    summary: {
      ko: '우측통행. PKP Intercity와 도시 트램·버스가 잘 발달했습니다.',
      en: 'Drive on the right. PKP Intercity plus strong city trams/buses.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '바르샤바·크라쿠프·그단스크 허브. FlixBus·PolskiBus도 선택지.',
      en: 'Warsaw/Kraków/Gdańsk hubs; FlixBus also useful.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail + PKP 할인. 좌석 예약을 권합니다.',
      en: 'Eurail/Interrail + PKP discounts; reserve seats.',
    },
    paymentTip: {
      ko: '도시카드·Jakdojade 앱. 호출은 Bolt가 더 빠르고 Uber는 대도시 보조입니다.',
      en: 'City cards and Jakdojade; Bolt is usually faster, Uber as backup in big cities.',
    },
    apps: [
      ta('pkp', { ko: '기차', en: 'Trains' }),
      ta('bolt', { ko: '더 잘 잡힘', en: 'Usually more cars' }),
      ta('uber'),
    ],
  },
  es: {
    summary: {
      ko: '우측통행. 도시 간은 Renfe(AVE 고속철)·장거리 버스(ALSA 등)가 중심입니다.',
      en: 'Drive on the right. Renfe (AVE high-speed) and coaches (ALSA etc.) link cities.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '마드리드–바르셀로나·세비야 등은 AVE. 코스타 델 솔·소도시는 버스가 편할 때가 많습니다.',
      en: 'AVE for Madrid–Barcelona/Seville etc.; buses are often easier for Costa del Sol and smaller towns.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail + Renfe 좌석 예약. 스페인 국내 패스·할인 상품도 시즌별 있습니다.',
      en: 'Eurail/Interrail plus Renfe seat reservations; seasonal Renfe passes/discounts also exist.',
    },
    paymentTip: {
      ko: '대도시는 교통카드·스마트폰 탭. 호출은 Cabify·Free Now·Bolt를 같이 두고, Uber는 도시마다 다릅니다.',
      en: 'Big cities: transit cards or phone tap. Keep Cabify, Free Now, and Bolt; Uber coverage varies by city.',
    },
    apps: [
      ta('renfe', { ko: '기차·AVE', en: 'Trains / AVE' }),
      ta('alsa', { ko: '장거리 버스', en: 'Coach buses' }),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  pt: {
    summary: {
      ko: '우측통행. 도시 간은 Comboios(기차)·Rede Expressos(버스)가 기본입니다.',
      en: 'Drive on the right. Between cities, Comboios (train) and Rede Expressos (bus) are the bases.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '리스본–포르투 Alfa Pendular·인터시티, 알가르브는 기차 또는 장거리 버스.',
      en: 'Lisbon–Porto Alfa Pendular / Intercidades; Algarve by train or coach.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail로 대부분 장거리 기차 이용 가능. 일부는 좌석 예약이 필요할 수 있습니다.',
      en: 'Eurail/Interrail covers most long-distance trains; some need seat reservations.',
    },
    paymentTip: {
      ko: '도시 교통은 카드·모바일. TVDE 호출은 Bolt가 우버보다 잘 잡히는 경우가 많고 Cabify도 있습니다.',
      en: 'City transit is card/mobile. For TVDE rides Bolt often has more cars than Uber; Cabify too.',
    },
    apps: [
      ta('cp', { ko: '국영 기차', en: 'National trains' }),
      ta('rede-expressos', { ko: '장거리 버스', en: 'Coach buses' }),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often easier than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '주요 도시', en: 'Major cities' }),
    ],
  },
  ad: {
    summary: {
      ko: '우측통행. 안도라는 버스가 사실상 유일한 장거리 대중교통입니다.',
      en: 'Drive on the right. Buses are essentially the only long-distance public option.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '바르셀로나·툴루즈 공항/역에서 장거리 버스 환승이 일반적입니다.',
      en: 'Usually coach transfers from Barcelona or Toulouse airports/stations.',
    },
    paymentTip: {
      ko: '버스 현장·온라인 예매. 택시·렌터도 산악 일정에 유용합니다.',
      en: 'Book coaches online or on-site; taxis/rentals help in the mountains.',
    },
    apps: [
      ta('alsa', { ko: '바르셀로나 방면', en: 'Toward Barcelona' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('uber', { ko: '안도라라베야', en: 'Andorra la Vella' }),
    ],
  },
  it: {
    summary: {
      ko: '우측통행. Trenitalia·Italo 고속철과 지역 버스가 중심입니다.',
      en: 'Drive on the right. Trenitalia/Italo high-speed plus regional buses.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '로마–밀라노–피렌체 Frecciarossa. 아말피·돌로미티는 버스·페리 조합.',
      en: 'Frecciarossa on Rome–Milan–Florence; Amalfi/Dolomites need bus/ferry combos.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail + 좌석 예약. ITALO는 별도 티켓인 경우가 많습니다.',
      en: 'Eurail/Interrail with seat reservations; Italo often separate.',
    },
    paymentTip: {
      ko: '대도시는 교통앱·컨택리스. 일반 택시는 Free Now, Uber는 블랙 등 프리미엄 위주입니다.',
      en: 'City transit apps/contactless. Free Now for regular taxis; Uber is mostly Black/premium.',
    },
    apps: [
      ta('trenitalia', { ko: '기차', en: 'Trains' }),
      ta('bolt'),
      ta('free-now', { ko: '일반 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙 위주', en: 'Mostly Black' }),
    ],
  },
  va: {
    summary: {
      ko: '바티칸은 보행 중심. 로마 시내 교통으로 접근합니다.',
      en: 'Vatican City is walkable; access via Rome’s transit.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '로마 테르미니·메트로 A Ottaviano/Cipro가 일반적입니다.',
      en: 'Usually via Roma Termini or metro A (Ottaviano/Cipro).',
    },
    paymentTip: {
      ko: '로마 ATAC 티켓·앱. 바티칸 내부는 보안검색 후 도보.',
      en: 'Rome ATAC tickets/apps; walk after Vatican security.',
    },
    apps: [
      ta('trenitalia'),
      ta('bolt'),
      ta('free-now', { ko: '로마 택시', en: 'Rome taxis' }),
      ta('uber', { ko: '로마에서 블랙', en: 'Black from Rome' }),
    ],
  },
  mt: {
    summary: {
      ko: '좌측통행. 버스와 고조 페리가 핵심입니다.',
      en: 'Drive on the left. Buses and the Gozo ferry are essential.',
    },
    drivingSide: 'left',
    longDistance: {
      ko: '몰타 본섬은 버스 네트워크. 고조는 페리 필수.',
      en: 'Bus network on Malta; ferry required for Gozo.',
    },
    paymentTip: {
      ko: 'Tallinja 카드·앱. 택시는 화이트 택시 또는 앱.',
      en: 'Tallinja card/app; white taxis or ride apps.',
    },
    apps: [
      ta('bolt'),
      ta('uber'),
    ],
  },
  gr: {
    summary: {
      ko: '우측통행. KTEL 버스·기차·섬 페리가 여행의 뼈대입니다.',
      en: 'Drive on the right. KTEL buses, trains, and island ferries are the backbone.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '아테네 허브. 섬은 페리·국내선. 그리스 본토는 장거리 버스가 강한 편입니다.',
      en: 'Athens hub; islands by ferry/flight; mainland coaches are strong.',
    },
    nationalPasses: {
      ko: 'Eurail 일부. 페리 패스·선사 할인을 따로 확인하세요.',
      en: 'Partial Eurail; check ferry passes and operator deals separately.',
    },
    paymentTip: {
      ko: '아테네 Ath.ena 카드. 섬은 현금·카드가 섞여 있습니다.',
      en: 'Athens Ath.ena card; islands mix cash and cards.',
    },
    apps: [
      ta('trainline', { ko: '예약 보조', en: 'Booking help' }),
      ta('bolt'),
      ta('uber', { ko: '아테네 등', en: 'Athens etc.' }),
    ],
  },
  cy: {
    summary: {
      ko: '좌측통행. 도시 간은 버스가 주력이며 렌터 수요가 큽니다.',
      en: 'Drive on the left. Intercity buses dominate; car hire is popular.',
    },
    drivingSide: 'left',
    longDistance: {
      ko: '니코시아·리마솔·파포스 장거리 버스. 야간·주말은 배차가 줄어듭니다.',
      en: 'Intercity buses between Nicosia, Limassol, Paphos; thinner evening/weekend service.',
    },
    paymentTip: {
      ko: '버스 현금·카드. 우버는 없고 Bolt가 표준입니다.',
      en: 'Bus cash/card; no Uber—Bolt is the standard.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  dk: {
    summary: {
      ko: '우측통행. DSB 기차와 코펜하겐 메트로·버스가 우수합니다.',
      en: 'Drive on the right. Excellent DSB trains and Copenhagen metro/buses.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '코펜하겐–오르후스 등. 외레순 다리로 말뫼 연결.',
      en: 'Copenhagen–Aarhus etc.; Øresund bridge to Malmö.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail + Rejsekort/city passes.',
      en: 'Eurail/Interrail plus Rejsekort/city passes.',
    },
    paymentTip: {
      ko: 'Rejsekort 또는 모바일 티켓. 2026년 우버가 재진입했지만 Bolt·공식 택시도 같이 두세요.',
      en: 'Rejsekort or mobile tickets. Uber returned in 2026; still keep Bolt and official taxis.',
    },
    apps: [
      ta('dsb', { ko: '기차', en: 'Trains' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('uber', { ko: '코펜하겐 등', en: 'Copenhagen etc.' }),
    ],
  },
  se: {
    summary: {
      ko: '우측통행. SJ 기차와 SL(스톡홀름) 등 시내 교통이 잘 연결되어 있습니다.',
      en: 'Drive on the right. SJ trains and city systems like SL (Stockholm).',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '스톡홀름·예테보리·말뫼 허브. 북부는 야간열차·국내선.',
      en: 'Stockholm/Gothenburg/Malmö hubs; north needs night trains or flights.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail + SJ 예약. SL/Västtrafik 시내 패스.',
      en: 'Eurail/Interrail + SJ bookings; SL/Västtrafik city passes.',
    },
    paymentTip: {
      ko: '앱 티켓·contactless. 도시는 Uber·Bolt도 가능합니다.',
      en: 'App tickets/contactless; Uber/Bolt in cities.',
    },
    apps: [
      ta('sj', { ko: '기차', en: 'Trains' }),
      ta('bolt'),
      ta('uber'),
    ],
  },
  no: {
    summary: {
      ko: '우측통행. Vy 기차·장거리 버스·피요르드 페리가 핵심입니다.',
      en: 'Drive on the right. Vy trains, coaches, and fjord ferries are key.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '오슬로 허브. 베르겐선·북극행은 예약 필수. 산악·피요르드는 버스+페리.',
      en: 'Oslo hub; book Bergen Line/Arctic services; mountains need bus+ferry.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail + Vy. 페리·관광 열차는 추가 요금.',
      en: 'Eurail/Interrail + Vy; ferries/scenic trains often extra.',
    },
    paymentTip: {
      ko: 'Entur 앱으로 통합 조회. 도시는 Ruter 등 지역 앱.',
      en: 'Entur for nationwide planning; city apps like Ruter.',
    },
    apps: [
      ta('vy', { ko: '기차·버스', en: 'Trains & buses' }),
      ta('bolt'),
      ta('uber', { ko: '오슬로·베르겐 등', en: 'Oslo, Bergen etc.' }),
    ],
  },
  fi: {
    summary: {
      ko: '우측통행. VR 기차와 HSL(헬싱키) 시내 교통이 중심입니다.',
      en: 'Drive on the right. VR trains and HSL (Helsinki) city transit.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '헬싱키 허브. 북부·라플란드는 야간열차·국내선.',
      en: 'Helsinki hub; north/Lapland via night trains or flights.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail + VR. HSL day tickets for the capital region.',
      en: 'Eurail/Interrail + VR; HSL day tickets for the capital.',
    },
    paymentTip: {
      ko: 'HSL 앱·VR 앱. Uber·Bolt가 헬싱키에서 흔합니다.',
      en: 'HSL/VR apps; Uber/Bolt common in Helsinki.',
    },
    apps: [
      ta('vr', { ko: '기차', en: 'Trains' }),
      ta('bolt'),
      ta('uber'),
    ],
  },
  is: {
    summary: {
      ko: '우측통행. 시외는 버스·렌터가 사실상 필수에 가깝습니다.',
      en: 'Drive on the right. Outside Reykjavík, buses or rentals are nearly essential.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '스트레이토 버스·관광 버스. 링로드는 렌터 일정이 일반적입니다.',
      en: 'Strætó and tour coaches; Ring Road trips usually need a car.',
    },
    paymentTip: {
      ko: '레이캬비크는 Bolt. 우버는 없고 공항–시내는 Flybus가 훨씬 쌉니다.',
      en: 'Reykjavík: Bolt. No Uber; Flybus beats taxis to the airport.',
    },
    apps: [
      ta('bolt', { ko: '레이캬비크', en: 'Reykjavík' }),
    ],
  },
  ee: {
    summary: {
      ko: '우측통행. Elron 기차와 탈린 시내 교통이 편합니다.',
      en: 'Drive on the right. Elron trains and Tallinn city transit work well.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '탈린–타르투 기차·버스. 헬싱키는 페리.',
      en: 'Tallinn–Tartu by train/bus; ferries to Helsinki.',
    },
    nationalPasses: {
      ko: 'Eurail 일부. 탈린 관광카드가 시내에 유용.',
      en: 'Partial Eurail; Tallinn cards help in the city.',
    },
    paymentTip: {
      ko: '탈린은 교통카드·앱. Bolt가 기본이고 Uber는 탈린에서만 됩니다.',
      en: 'Tallinn card/app; Bolt is the default, Uber only in Tallinn.',
    },
    apps: [
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('uber', { ko: '탈린만', en: 'Tallinn only' }),
    ],
  },
  lv: {
    summary: {
      ko: '우측통행. 리가는 트램·버스, 시외는 버스가 중심입니다.',
      en: 'Drive on the right. Riga trams/buses; coaches elsewhere.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '리가 허브 버스·기차. 탈린·빌뉴스 국제 버스가 흔합니다.',
      en: 'Riga coach/train hub; frequent buses to Tallinn/Vilnius.',
    },
    paymentTip: {
      ko: '리가 e-talons. 우버는 없고 Bolt가 표준입니다.',
      en: 'Riga e-talons; no Uber—Bolt is the standard.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  lt: {
    summary: {
      ko: '우측통행. 빌뉴스·카우나스 버스·트롤리·기차가 연결됩니다.',
      en: 'Drive on the right. Vilnius/Kaunas buses, trolleys, and trains.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '빌뉴스 허브. 폴란드·라트비아 방면 버스가 편합니다.',
      en: 'Vilnius hub; buses toward Poland and Latvia are easy.',
    },
    paymentTip: {
      ko: '시내 교통카드·앱. Bolt가 훨씬 잘 잡히고 Uber는 빌뉴스에서만, 대기 시간이 길 수 있습니다.',
      en: 'City cards/apps; Bolt is far more reliable, Uber only in Vilnius with long waits.',
    },
    apps: [
      ta('bolt', { ko: '우버보다 잘 잡힘', en: 'Usually more cars' }),
      ta('uber', { ko: '빌뉴스만', en: 'Vilnius only' }),
    ],
  },
  hr: {
    summary: {
      ko: '우측통행. 장거리 버스·아드리아 페리가 핵심입니다.',
      en: 'Drive on the right. Long-distance buses and Adriatic ferries are key.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '자그레브 허브. 스플리트·두브로브니크는 버스·페리·국내선.',
      en: 'Zagreb hub; Split/Dubrovnik by bus, ferry, or flight.',
    },
    nationalPasses: {
      ko: 'Eurail 일부 기차. 해안은 버스·선사 패스를 확인하세요.',
      en: 'Partial Eurail rail; check coastal buses and ferry passes.',
    },
    paymentTip: {
      ko: '시내 티켓·앱. 성수기 페리·버스는 사전 예약을 권합니다.',
      en: 'City tickets/apps; book peak ferries/buses ahead.',
    },
    apps: [
      ta('flixbus', { ko: '장거리 버스', en: 'Coaches' }),
      ta('bolt'),
      ta('uber'),
    ],
  },
  si: {
    summary: {
      ko: '우측통행. 기차·버스로 짧은 거리를 효율적으로 이동합니다.',
      en: 'Drive on the right. Compact distances work well by train and bus.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '류블랴나 허브. 블레드·포스토이나는 버스가 편합니다.',
      en: 'Ljubljana hub; Bled/Postojna are easy by bus.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail. 당일 버스 패스도 유용합니다.',
      en: 'Eurail/Interrail; day bus tickets help.',
    },
    paymentTip: {
      ko: '시내 Urbana 등. 우버는 없고 Bolt를 쓰세요.',
      en: 'City cards like Urbana; no Uber—use Bolt.',
    },
    apps: [
      ta('trainline'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  ba: {
    summary: {
      ko: '우측통행. 장거리 버스가 도시 간 이동의 기본입니다.',
      en: 'Drive on the right. Intercity buses are the default.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '사라예보·모스타르 버스. 기차는 노선이 제한적입니다.',
      en: 'Sarajevo–Mostar buses; limited rail options.',
    },
    paymentTip: {
      ko: '버스 터미널 현장 예매가 흔합니다. Bolt·택시를 이용하세요.',
      en: 'Buy bus tickets at stations; use Bolt/taxis in cities.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  me: {
    summary: {
      ko: '우측통행. 해안 버스와 렌터가 여행에 유용합니다.',
      en: 'Drive on the right. Coastal buses and rentals help a lot.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '포드를리차·코토르·부드바 버스. 두브로브니크 방면 국제 버스.',
      en: 'Buses Podgorica–Kotor–Budva; coaches toward Dubrovnik.',
    },
    paymentTip: {
      ko: '터미널·온라인 버스 티켓. 우버는 없고 Bolt·현지 택시입니다.',
      en: 'Station/online bus tickets; no Uber—Bolt or local taxis.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  rs: {
    summary: {
      ko: '우측통행. Srbija Voz 기차와 장거리 버스가 병행됩니다.',
      en: 'Drive on the right. Srbija Voz trains plus long-distance buses.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '베오그라드 허브. 노비사드·니시 기차·버스.',
      en: 'Belgrade hub; Novi Sad/Niš by train or bus.',
    },
    paymentTip: {
      ko: '시내 버스 카드·앱. CarGo·Bolt가 대도시에서 편합니다.',
      en: 'City bus cards/apps; CarGo/Bolt help in big cities.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  mk: {
    summary: {
      ko: '우측통행. 장거리 버스가 주력이고 기차는 제한적입니다.',
      en: 'Drive on the right. Coaches dominate; rail is limited.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '스코페 허브. 오흐리드 방면 버스가 일반적입니다.',
      en: 'Skopje hub; buses to Ohrid are typical.',
    },
    paymentTip: {
      ko: '터미널 티켓. 시내는 버스·택시·Bolt.',
      en: 'Station tickets; city buses/taxis/Bolt.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  al: {
    summary: {
      ko: '우측통행. 푸르곤·장거리 버스가 일반적이고 렌터도 흔합니다.',
      en: 'Drive on the right. Furgon minibuses/coaches are common; rentals too.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '티라나 허브. 베라트·사란데 버스. 해안은 배차가 성수기에 늘어납니다.',
      en: 'Tirana hub; buses to Berat/Sarandë; coastal service grows in peak season.',
    },
    paymentTip: {
      ko: '현금 결제가 많은 편. 택시 요금은 미리 합의하세요.',
      en: 'Cash is common; agree taxi fares first.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  bg: {
    summary: {
      ko: '우측통행. BDZ 기차와 장거리 버스가 함께 쓰입니다.',
      en: 'Drive on the right. BDZ trains and long-distance buses.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '소피아 허브. 플로브디프·바르나 기차·버스.',
      en: 'Sofia hub; Plovdiv/Varna by train or bus.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail 일부. 버스가 더 빠른 구간도 많습니다.',
      en: 'Partial Eurail/Interrail; buses often faster on some routes.',
    },
    paymentTip: {
      ko: '시내 교통카드. TaxiMe·Bolt 권장.',
      en: 'City transit cards; prefer TaxiMe/Bolt.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber here' }),
    ],
  },
  ro: {
    summary: {
      ko: '우측통행. CFR 기차와 시내 메트로(부쿠레슈티)·버스가 중심입니다.',
      en: 'Drive on the right. CFR trains plus Bucharest metro and city buses.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '부쿠레슈티 허브. 브라쇼브·클루지 기차·버스.',
      en: 'Bucharest hub; Brașov/Cluj by train or bus.',
    },
    nationalPasses: {
      ko: 'Eurail/Interrail + CFR 예약.',
      en: 'Eurail/Interrail with CFR reservations.',
    },
    paymentTip: {
      ko: '부쿠레슈티 Metrorex 카드. Bolt가 기본이고 Uber는 대도시 보조입니다.',
      en: 'Bucharest Metrorex card; Bolt first, Uber as backup in big cities.',
    },
    apps: [
      ta('trainline', { ko: '예약 보조', en: 'Booking help' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('uber'),
    ],
  },
  tr: {
    summary: {
      ko: '우측통행. 고속철·장거리 버스·도시 메트로/페리가 발달했습니다.',
      en: 'Drive on the right. High-speed rail, coaches, and city metro/ferries.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '이스탄불·앙카라 허브. 국내선·고속버스(Metro/Kamil Koç 등)가 흔합니다.',
      en: 'Istanbul/Ankara hubs; domestic flights and big coaches are common.',
    },
    paymentTip: {
      ko: '이스탄불kart. BiTaksi·Bolt·Uber(규제 변동 있음). 장거리는 고속버스 앱.',
      en: 'Istanbulkart; BiTaksi, Bolt, and Uber (rules shift). Coaches for long trips.',
    },
    apps: [
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('uber', { ko: '대도시·규제 확인', en: 'Big cities; check rules' }),
    ],
  },
  ge: {
    summary: {
      ko: '우측통행. 기차·마슈루트카·장거리 버스로 이동합니다.',
      en: 'Drive on the right. Trains, marshrutkas, and coaches.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '트빌리시 허브. 바투미 기차·버스. 카즈베기는 미니버스·렌터.',
      en: 'Tbilisi hub; Batumi by train/bus; Kazbegi by minibus/rental.',
    },
    paymentTip: {
      ko: '트빌리시 MetroMoney. Bolt·Yandex Go가 흔합니다.',
      en: 'Tbilisi MetroMoney; Bolt/Yandex Go are common.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
}

export const cityTransitById: Record<string, CityTransit> = {
  // —— fr ——
  paris: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: 'CDG: RER B 또는 Roissybus. ORY: Orlyval+RER/Metro. 택시 고정요금 구간 있음.',
      en: 'CDG: RER B or Roissybus. ORY: Orlyval + RER/metro. Flat-rate taxis available.',
    },
    howTo: {
      ko: 'Navigo Easy / Paris Visite. 메트로·RER·버스 환승. Citymapper·Bonjour RATP가 편합니다.',
      en: 'Navigo Easy or Paris Visite. Metro/RER/bus transfers. Citymapper and Bonjour RATP help.',
    },
    apps: [
      ta('citymapper'),
      ta('idfm', { ko: '일드프랑스 모빌리테', en: 'Île-de-France Mobilités' }),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '성수기 메트로는 혼잡합니다. 박물관 구간은 일찍 이동하세요.',
      en: 'Metro packs in peak season—travel early around museum areas.',
    },
  },
  lyon: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Lyon 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Lyon—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Lyon: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Lyon, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  marseille: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Marseille 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Marseille—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Marseille: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Marseille, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  nice: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Nice 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Nice—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Nice: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Nice centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  bordeaux: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk', 'bike'],
    howTo: {
      ko: 'Bordeaux: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Bordeaux centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  strasbourg: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Strasbourg: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Strasbourg centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  annecy: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Annecy: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Annecy by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  avignon: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Avignon: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Avignon by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  toulouse: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Toulouse: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Toulouse, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  montpellier: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Montpellier: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Montpellier centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  dijon: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Dijon: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Dijon by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  chamonix: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Chamonix: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Chamonix usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  // —— uk ——
  london: {
    modes: ['metro', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: 'HIT: Elizabeth line·Heathrow Express. LGW: Gatwick Express·Thameslink. STN/LTN: 공항버스·기차.',
      en: 'LHR: Elizabeth line/Heathrow Express. LGW: Gatwick Express/Thameslink. STN/LTN: coach/rail.',
    },
    howTo: {
      ko: 'contactless/Oyster로 Tube·버스·대부분 기차. TfL Go·Citymapper 추천.',
      en: 'Contactless/Oyster for Tube, buses, most rail. TfL Go and Citymapper recommended.',
    },
    apps: [
      ta('tfl'),
      ta('citymapper'),
      ta('trainline'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '혼잡 요금·피크 요금을 피하려면 오프피크 이동이 유리합니다.',
      en: 'Off-peak travel helps avoid peak fares and crush crowds.',
    },
  },
  edinburgh: {
    modes: ['bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항 트램으로 센터 약 30분. 버스·택시 대안.',
      en: 'Airport tram ~30 min to centre; bus/taxi too.',
    },
    howTo: {
      ko: 'Ridacard·데이틱켓. 버스·트램. 올드타운은 언덕 도보.',
      en: 'Ridacard/day tickets. Buses and trams; Old Town is hilly walking.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  manchester: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Manchester 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Manchester—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Manchester: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Manchester centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  bath: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Bath: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Bath by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  oxford: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Oxford: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Oxford by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  cambridge: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Cambridge: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Cambridge by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  liverpool: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Liverpool: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Liverpool by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  brighton: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Brighton: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Brighton by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  york: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'York: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach York by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  bristol: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Bristol: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Bristol by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  // —— ie ——
  dublin: {
    modes: ['bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'Aer Bus·Dublin Express 또는 택시/Uber 약 25–40분.',
      en: 'Aircoach/Dublin Express or taxi/Uber ~25–40 min.',
    },
    howTo: {
      ko: 'Leap 카드. Dublin Bus·Luas·DART. 시내 중심은 도보도 충분합니다.',
      en: 'Leap card. Dublin Bus, Luas, DART. The core is walkable.',
    },
    apps: [
      ta('irish-rail'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  galway: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Galway: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Galway is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('irish-rail'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  cork: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Cork: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Cork is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('irish-rail'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  killarney: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Killarney: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Killarney is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('irish-rail'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  kilkenny: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Kilkenny: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Kilkenny is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('irish-rail'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  limerick: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Limerick: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Limerick is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('irish-rail'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  // —— be ——
  brussels: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '기차(Airport→Bruxelles) 약 20분 또는 버스.',
      en: 'Train Airport→Brussels ~20 min, or bus.',
    },
    howTo: {
      ko: 'STIB/MIVB 티켓·MOBIB. 메트로·트램. 중앙역은 장거리 환승 허브.',
      en: 'STIB/MIVB tickets/MOBIB. Metro and trams; Midi/Central are rail hubs.',
    },
    apps: [
      ta('sncb'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  bruges: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Bruges: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Bruges by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sncb'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  ghent: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Ghent: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Ghent centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('sncb'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  antwerp: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Antwerp: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Antwerp, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('sncb'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  leuven: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Leuven: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Leuven by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sncb'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  dinant: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Dinant: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Dinant by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sncb'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  // —— nl ——
  amsterdam: {
    modes: ['tram', 'bus', 'metro', 'train', 'ferry', 'bike', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '기차로 Centraal 약 15–20분. 버스·택시 대안.',
      en: 'Train to Centraal ~15–20 min; bus/taxi also fine.',
    },
    howTo: {
      ko: 'GVB 데이틱켓·OV-chipkaart. 트램이 시내 핵심. 자전거는 규칙과 주차에 주의.',
      en: 'GVB day ticket or OV-chipkaart. Trams are central; bikes need careful parking and rules.',
    },
    apps: [
      ta('ns'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '운하 지역은 도보·트램이 편하고, 차는 비추천입니다.',
      en: 'Canal belt is best on foot/tram—skip driving.',
    },
  },
  rotterdam: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Rotterdam: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Rotterdam, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('ns'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  'the-hague': {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'The Hague: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'The Hague centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('ns'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  utrecht: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk', 'bike'],
    howTo: {
      ko: 'Utrecht: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Utrecht centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('ns'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  haarlem: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Haarlem: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Haarlem by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('ns'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  delft: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Delft: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Delft by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('ns'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  maastricht: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Maastricht: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Maastricht by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('ns'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  giethoorn: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Giethoorn: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Giethoorn by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('ns'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  // —— lu ——
  'luxembourg-city': {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Luxembourg City: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Luxembourg City centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('cfl'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  vianden: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Vianden: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Vianden is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('cfl'),
      ta('bolt'),
    ],
  },
  echternach: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Echternach: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Echternach is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('cfl'),
      ta('bolt'),
    ],
  },
  remich: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Remich: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Remich is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('cfl'),
      ta('bolt'),
    ],
  },
  // —— mc ——
  monaco: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Monaco: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Monaco. Check boat timetables first.',
    },
    apps: [
      ta('free-now', { ko: '모나코 안 우버 불가 · 니스에서', en: 'No Uber pickup in Monaco; try from Nice' }),
    ],
  },
  'monte-carlo': {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Monte Carlo: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Monte Carlo. Check boat timetables first.',
    },
    apps: [
      ta('free-now', { ko: '모나코 안 우버 불가 · 니스에서', en: 'No Uber pickup in Monaco; try from Nice' }),
    ],
  },
  // —— de ——
  berlin: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: 'BER에서 Airport Express(FEX)·S-Bahn·지역버스. 택시·Uber도 가능.',
      en: 'From BER: Airport Express (FEX), S-Bahn, or regional bus; taxi/Uber too.',
    },
    howTo: {
      ko: 'BVG 티켓(AB존). U/S-Bahn·트램·버스 통합. Jelbi·Citymapper 유용.',
      en: 'BVG ticket (zone AB). U/S-Bahn, tram, bus integrated. Jelbi and Citymapper help.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
    ],
  },
  munich: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: 'S1/S8로 시내 약 40–45분. 공항버스 대안.',
      en: 'S1/S8 ~40–45 min; airport buses also work.',
    },
    howTo: {
      ko: 'MVV 티켓. U/S-Bahn이 핵심. Tageskarte가 관광에 유리합니다.',
      en: 'MVV tickets. U/S-Bahn core; day tickets suit sightseeing.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
    ],
  },
  hamburg: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Hamburg 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Hamburg—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Hamburg: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Hamburg, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
    ],
  },
  cologne: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Cologne: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Cologne, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
    ],
  },
  frankfurt: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Frankfurt 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Frankfurt—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Frankfurt: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Frankfurt, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
    ],
  },
  dresden: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Dresden: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Dresden by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  heidelberg: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Heidelberg: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Heidelberg by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  nuremberg: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Nuremberg: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Nuremberg, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  stuttgart: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Stuttgart: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Stuttgart, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
    ],
  },
  leipzig: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Leipzig: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Leipzig by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  rothenburg: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Rothenburg: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Rothenburg by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  potsdam: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Potsdam: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Potsdam by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  // —— ch ——
  zurich: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: '기차로 HB 약 10분. 트램 연결도 좋습니다.',
      en: 'Train to HB ~10 min; tram links are strong too.',
    },
    howTo: {
      ko: 'ZVV 티켓·스위스 Travel Pass. 트램·S-Bahn이 정확합니다.',
      en: 'ZVV tickets or Swiss Travel Pass. Trams and S-Bahn are punctual.',
    },
    apps: [
      ta('sbb'),
      ta('uber'),
    ],
  },
  geneva: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Geneva 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Geneva—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Geneva: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Geneva, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('sbb'),
      ta('uber'),
    ],
  },
  bern: {
    modes: ['tram', 'bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Bern: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Bern centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  lucerne: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Lucerne: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Lucerne by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  interlaken: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Interlaken: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Interlaken usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('sbb'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  basel: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Basel: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Basel centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('sbb'),
      ta('uber'),
    ],
  },
  zermatt: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Zermatt: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Zermatt usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('sbb'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  lausanne: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Lausanne: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Lausanne, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('sbb'),
      ta('uber'),
    ],
  },
  lugano: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Lugano: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Lugano by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  montreux: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Montreux: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Montreux by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  grindelwald: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Grindelwald: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Grindelwald usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('sbb'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  'st-moritz': {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'St Moritz: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'St Moritz usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('sbb'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  // —— at ——
  vienna: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: 'CAT·ÖBB S7·버스(Vienna Airport Lines). 택시·Uber 대안.',
      en: 'CAT, ÖBB S7, or Vienna Airport Lines bus; taxi/Uber too.',
    },
    howTo: {
      ko: 'Wiener Linien 티켓·WienMobil. U-Bahn·트램이 매우 편합니다.',
      en: 'Wiener Linien tickets and WienMobil. U-Bahn and trams are excellent.',
    },
    apps: [
      ta('oebb'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  salzburg: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Salzburg: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Salzburg by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('oebb'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  innsbruck: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Innsbruck: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Innsbruck by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('oebb'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  graz: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Graz: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Graz centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('oebb'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  hallstatt: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Hallstatt: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Hallstatt usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('oebb'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  // —— li ——
  vaduz: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Vaduz에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Vaduz from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Vaduz: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Vaduz is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  schaan: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Schaan에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Schaan from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Schaan: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Schaan is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  malbun: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Malbun에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Malbun from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Malbun: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Malbun is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  // —— cz ——
  prague: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항 버스 119→Nádraží Veleslavín 메트로 A, 또는 공항 버스 100.',
      en: 'Bus 119 to metro A (Veleslavín) or airport bus 100.',
    },
    howTo: {
      ko: 'PID Litacka/관광권. 메트로·트램 환승. 택시보다 Bolt·Uber를 쓰세요.',
      en: 'PID Litacka/tourist pass. Metro+tram transfers. Prefer Bolt/Uber to street taxis.',
    },
    apps: [
      ta('cd'),
      ta('citymapper'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  brno: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Brno: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Brno by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('cd'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  'cesky-krumlov': {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Cesky Krumlov: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Cesky Krumlov by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('cd'),
      ta('bolt'),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  'karlovy-vary': {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Karlovy Vary: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Karlovy Vary by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('cd'),
      ta('bolt'),
    ],
  },
  'ceske-budejovice': {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Ceske Budejovice: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Ceske Budejovice by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('cd'),
      ta('bolt'),
    ],
  },
  // —— sk ——
  bratislava: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Bratislava: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Bratislava centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  kosice: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Kosice: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Kosice by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
    ],
  },
  poprad: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Poprad: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Poprad by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
    ],
  },
  'banska-bystrica': {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Banska Bystrica: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Banska Bystrica by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
    ],
  },
  trencin: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Trencin: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Trencin by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
    ],
  },
  // —— hu ——
  budapest: {
    modes: ['metro', 'tram', 'bus', 'train', 'ferry', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '100E 버스 또는 지하철 환승. 택시·Bolt도 흔합니다.',
      en: 'Bus 100E or metro with transfer; taxi/Bolt common.',
    },
    howTo: {
      ko: 'BudapestGO·여행권. 메트로·트램 4/6. 다뉴브 페리는 관광용으로 좋아요.',
      en: 'BudapestGO/passes. Metro and trams 4/6. Danube ferries are fun for sightseeing.',
    },
    apps: [
      ta('mav'),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
    ],
  },
  debrecen: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Debrecen: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Debrecen by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('mav'),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
    ],
  },
  pecs: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Pecs: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Pecs by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('mav'),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
    ],
  },
  szeged: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Szeged: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Szeged by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('mav'),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
    ],
  },
  eger: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Eger: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Eger by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('mav'),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
    ],
  },
  // —— pl ——
  warsaw: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'SKM/기차·버스 175/188. 택시·Bolt도 흔합니다.',
      en: 'SKM/rail or buses 175/188; taxi/Bolt common.',
    },
    howTo: {
      ko: 'ZTM 티켓·Warsaw City Card. 메트로 2개 노선 + 트램.',
      en: 'ZTM tickets/Warsaw City Card. Two metro lines plus trams.',
    },
    apps: [
      ta('pkp'),
      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),
      ta('uber'),
    ],
  },
  krakow: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Krakow 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Krakow—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Krakow: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Krakow centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('pkp'),
      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),
      ta('uber'),
    ],
  },
  gdansk: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Gdansk 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Gdansk—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Gdansk: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Gdansk centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('pkp'),
      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),
      ta('uber'),
    ],
  },
  wroclaw: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Wroclaw 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Wroclaw—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Wroclaw: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Wroclaw centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('pkp'),
      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),
      ta('uber'),
    ],
  },
  poznan: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Poznan: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Poznan centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('pkp'),
      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),
      ta('uber'),
    ],
  },
  zakopane: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Zakopane: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Zakopane by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('pkp'),
      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),
      ta('uber'),
    ],
  },
  torun: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Torun: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Torun by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('pkp'),
      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),
      ta('uber'),
    ],
  },
  // —— es ——
  madrid: {
    modes: ['metro', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '메트로 8호선 또는 Cercanías·공항 버스(Express). 택시 고정요금 구간이 있습니다.',
      en: 'Metro line 8, Cercanías, or Airport Express bus. Flat-rate taxi options to the center.',
    },
    howTo: {
      ko: 'Tarjeta Multi / 관광 티켓. 메트로+버스 환승. Citymapper·공식 Metro de Madrid 앱이 편합니다.',
      en: 'Tarjeta Multi or tourist passes. Metro+bus transfers. Citymapper or Metro de Madrid apps help.',
    },
    apps: [
      ta('citymapper'),
      ta('metro-madrid'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '공항–시내 택시는 공식 스탠드 이용. 야간에는 메트로 막차 시간을 확인하세요.',
      en: 'Use official airport taxi ranks. Check last metro times at night.',
    },
  },
  barcelona: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: 'Aerobus·메트로 L9·RENFE. 시내까지 약 30–45분. 택시·Cabify도 흔합니다.',
      en: 'Aerobus, metro L9, or RENFE (~30–45 min). Taxis and Cabify are common.',
    },
    howTo: {
      ko: 'T-Casual·Hola Barcelona 카드. TMB 메트로·버스·트램 통합. 스마트폰 태핑 가능 구간이 늘고 있습니다.',
      en: 'T-Casual or Hola Barcelona. TMB metro/bus/tram integrated; contactless tap expanding.',
    },
    apps: [
      ta('citymapper'),
      ta('tmb'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '사그라다 파밀리아·고딕 지구는 메트로+도보. 소매치기 주의로 가방은 앞으로.',
      en: 'Sagrada Família and Gothic Quarter: metro + walk. Watch for pickpockets—bag in front.',
    },
  },
  palma: {
    modes: ['bus', 'train', 'metro', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항 버스·택시로 시내 약 20분. 메트로 연결도 있습니다.',
      en: 'Airport bus/taxi ~20 min; metro links exist too.',
    },
    howTo: {
      ko: 'EMT 시내버스·메트로. 마요르카 섬 열차로 Sóller 등. 구시가는 도보.',
      en: 'EMT buses and metro. Island trains toward Sóller etc. Old town is walkable.',
    },
    apps: [
      ta('renfe'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  seville: {
    modes: ['metro', 'tram', 'bus', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: '공항 버스 EA로 시내 약 30–40분. 택시·Cabify 약 25–35€.',
      en: 'Airport bus EA ~30–40 min. Taxi/Cabify about €25–35.',
    },
    howTo: {
      ko: '구시가는 도보가 최고. 메트로·트람비아·버스는 교외·세비야 엑스포 방면.',
      en: 'Old town is best on foot. Metro, tram, and buses for outer areas and Expo.',
    },
    apps: [
      ta('tussam', { ko: '시내버스', en: 'City buses' }),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  granada: {
    modes: ['bus', 'metro', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '공항 버스 또는 택시 약 20–30분. 고속버스·AVE 연결은 안달루시아 거점 경유.',
      en: 'Airport bus or taxi ~20–30 min. Longer rail/coach via Andalusia hubs.',
    },
    howTo: {
      ko: '알밤브라는 예약 필수 + 버스 C30/C32 또는 택시. 알바이신은 미니버스·도보.',
      en: 'Alhambra needs timed tickets + bus C30/C32 or taxi. Albaicín: minibuses and walking.',
    },
    apps: [
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  valencia: {
    modes: ['metro', 'tram', 'bus', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: '메트로 3/5호선으로 시내 약 25분.',
      en: 'Metro lines 3/5 to the center ~25 min.',
    },
    howTo: {
      ko: 'SUMA/교통카드로 메트로·트램·버스. 시티바이크·도보로 시우타드 데 라스 아르테스 방면도 가능.',
      en: 'SUMA card for metro, tram, bus. Bike/walk works toward the Arts & Sciences area.',
    },
    apps: [
      ta('metrovalencia'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  malaga: {
    modes: ['metro', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'Cercanías C1 기차로 센터 약 15분. 버스·택시 대안.',
      en: 'Cercanías C1 train to center ~15 min; bus/taxi also fine.',
    },
    howTo: {
      ko: '시내 버스·메트로. 네르하·지브롤터 당일치기는 버스 또는 렌터.',
      en: 'City buses and metro. Day trips to Nerja/Gibraltar by bus or rental car.',
    },
    apps: [
      ta('renfe-cercanias'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  bilbao: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '비즈카이버스·택시로 시내 약 20분.',
      en: 'Bizkaibus or taxi ~20 min to the center.',
    },
    howTo: {
      ko: 'Metro Bilbao·트램·버스. Barik 카드. 구겐하임은 트램/도보가 편합니다.',
      en: 'Metro Bilbao, tram, and buses with Barik card. Guggenheim is tram/walk.',
    },
    apps: [
      ta('renfe'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  toledo: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '마드리드 공항 → 아토차/멘데즈 알바로 환승 후 기차·버스.',
      en: 'From Madrid airport, transfer via Atocha/Méndez Álvaro then train/bus.',
    },
    howTo: {
      ko: '구시가는 도보·에스컬레이터. 마드리드에서 Cercanías/AVE·버스가 핵심.',
      en: 'Walk (and escalators) in the old town. Rail/bus from Madrid is the key link.',
    },
    apps: [
      ta('renfe'),
      ta('alsa'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '자동차는 성벽 안이 협소합니다. 외곽 P 주차장을 이용하세요.',
      en: 'Cars struggle inside the walls—use outer park-and-walk lots.',
    },
  },
  cordoba: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '세비야/말라가 공항 경유 또는 마드리드 AVE. 시내까지 택시·버스.',
      en: 'Via Seville/Málaga airports or Madrid AVE; taxi/bus into town.',
    },
    howTo: {
      ko: '메스키타·유대인 지구는 도보. AVE로 마드리드·세비야 연결. 시내버스 보조.',
      en: 'Walk the Mezquita/Judería. AVE to Madrid/Seville; city buses fill gaps.',
    },
    apps: [
      ta('renfe'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  'san-sebastian': {
    modes: ['bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: '산세바스티안 공항은 소규모. 빌바오 공항+버스도 흔합니다.',
      en: 'Small local airport; many use Bilbao airport + bus.',
    },
    howTo: {
      ko: '시내버스·도보로 해변·구시가. Euskotren·RENFE로 빌바오· Hendaye 연결.',
      en: 'City buses and walking for beach/old town. Euskotren/RENFE toward Bilbao/Hendaye.',
    },
    apps: [
      ta('renfe'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  zaragoza: {
    modes: ['bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항 버스·택시로 시내 약 30분. AVE 역과도 연결됩니다.',
      en: 'Airport bus/taxi ~30 min; also linked toward the AVE station.',
    },
    howTo: {
      ko: '트램·시내버스. AVE로 마드리드·바르셀로나. 구시가는 도보.',
      en: 'Tram and city buses. AVE to Madrid/Barcelona. Old town is walkable.',
    },
    apps: [
      ta('renfe'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  salamanca: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '마드리드 경유 기차·버스. 렌터도 가능.',
      en: 'Train/bus via Madrid; rentals also work.',
    },
    howTo: {
      ko: '플라자 마요르·대학 지구는 도보. 마드리드에서 기차·버스.',
      en: 'Plaza Mayor and university area on foot. Train/bus from Madrid.',
    },
    apps: [
      ta('renfe'),
      ta('alsa'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  santiago: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '공항 버스·택시로 시내 약 20–30분.',
      en: 'Airport bus or taxi ~20–30 min.',
    },
    howTo: {
      ko: '대성당 광장 일대는 도보. 시내버스·택시. AVE/기차·버스로 마드리드·포르투 방면.',
      en: 'Cathedral quarter on foot; city buses/taxis. Rail/coach toward Madrid/Porto.',
    },
    apps: [
      ta('renfe'),
      ta('alsa'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  segovia: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '마드리드 공항 → 차마르틴/멘데즈 알바로 환승 후 세고비아.',
      en: 'Madrid airport → Chamartín/Méndez Álvaro then on to Segovia.',
    },
    howTo: {
      ko: '로마 수도교·알카사르는 도보. 마드리드에서 AVE·버스(약 30–60분).',
      en: 'Walk to the aqueduct and Alcázar. AVE/bus from Madrid (~30–60 min).',
    },
    apps: [
      ta('renfe'),
      ta('alsa'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  ronda: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '말라가 공항에서 기차/버스 환승 약 2시간 또는 렌터.',
      en: 'From Málaga airport: train/bus ~2 hrs with transfers, or rental car.',
    },
    howTo: {
      ko: '협곡·구시가는 도보. 말라가에서 기차·버스. 협곡 전망은 경사에 주의.',
      en: 'Walk the gorge/old town. Train/bus from Málaga. Mind steep viewpoints.',
    },
    apps: [
      ta('renfe'),
      ta('alsa'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  girona: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk', 'bike'],
    airportToCity: {
      ko: '지로나 공항 버스 또는 바르셀로나 공항 경유 기차.',
      en: 'Girona airport bus, or via Barcelona airport + train.',
    },
    howTo: {
      ko: '구시가·유다 지구는 도보. Renfe로 바르셀로나 약 40–60분. 공항 버스도 있습니다.',
      en: 'Walk the old/Jewish quarter. Renfe to Barcelona ~40–60 min; airport buses exist.',
    },
    apps: [
      ta('renfe'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  nerja: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '말라가 공항에서 버스(환승) 또는 렌터·택시 약 50–70분.',
      en: 'From Málaga airport: bus (with transfer) or rental/taxi ~50–70 min.',
    },
    howTo: {
      ko: '마을은 도보 중심. 동굴·부리아나 해변은 시내버스·Taxi. 말라가 방면 ALSA·로컬 버스.',
      en: 'Walk the town. Caves and Burriana beach by local bus or taxi. ALSA/local buses toward Málaga.',
    },
    apps: [
      ta('alsa'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '여름엔 버스가 빨리 찹니다. 동굴 티켓·버스 시간을 같이 보세요.',
      en: 'Summer buses fill fast—align cave tickets with bus times.',
    },
  },
  gibraltar: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '지브롤터 공항은 활주로를 건너 시내로 연결. 스페인(라 리네아)에서 도보 입국 후 버스·택시가 흔합니다.',
      en: 'Gibraltar Airport links on foot across the runway. Many arrive via La Línea (Spain) then bus/taxi.',
    },
    howTo: {
      ko: '바위(Upper Rock)는 케이블카·공식 관광택시 투어. 시내는 버스·도보. 국경 대기 시간을 감안하세요.',
      en: 'Upper Rock: cable car or official taxi tours. Town is bus/walk. Allow time at the border.',
    },
    apps: [
      ta('gibraltar'),
    ],
    tip: {
      ko: '영국령이지만 많은 여행자가 스페인 남부 일정에 묶습니다. EU 로밍·출입국 줄을 확인하세요.',
      en: 'British territory often planned with Andalusia—check border queues and roaming.',
    },
  },
  // —— pt ——
  lisbon: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항 메트로(vermelho)로 Saldanha·Baixa 방면 약 25–40분. Bolt/Uber/택시 약 15–25€.',
      en: 'Metro (red line) toward Saldanha/Baixa ~25–40 min. Bolt/Uber/taxi about €15–25.',
    },
    howTo: {
      ko: 'Viva Viagem / Navegante 카드 또는 교통 앱. 90분 환승 티켓·일일권이 편합니다. 28번 트램은 혼잡하니 일찍 타세요.',
      en: 'Viva Viagem / Navegante card or transit apps. 90-min transfers or day passes work well. Tram 28 is crowded—go early.',
    },
    apps: [
      ta('citymapper'),
      ta('carris', { ko: '시내 버스·트램', en: 'City bus & tram' }),
      ta('metro-lisboa'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '알파마·바이샤는 언덕이 많아 트램·엘리베이터·케이블카를 같이 쓰면 편합니다.',
      en: 'Alfama and Baixa are hilly—combine trams, elevators, and funiculars.',
    },
  },
  porto: {
    modes: ['metro', 'bus', 'train', 'tram', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '메트로 E선으로 시내(트린다지 등) 약 30–40분. Bolt/택시 약 20–30€.',
      en: 'Metro line E to downtown (e.g. Trindade) ~30–40 min. Bolt/taxi about €20–30.',
    },
    howTo: {
      ko: 'Andante 카드로 메트로·버스 통합. 존(zone)별 요금. Sao Bento–Campanhã 기차·시내 이동에 유용합니다.',
      en: 'Andante card covers metro and buses by zone. Handy with São Bento–Campanhã trains.',
    },
    apps: [
      ta('citymapper'),
      ta('metro-porto'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '히베이라·빌라 노바 드 가이아 강변은 도보·메트로·수상 택시 조합이 좋습니다.',
      en: 'Ribeira and Gaia waterfront work well on foot, metro, or water taxi.',
    },
  },
  sintra: {
    modes: ['train', 'bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '리스본 공항 → 시내 기차역(Rossio/Oriente) 환승 후 Sintra선. 자동차·Uber는 성수기 주차 혼잡을 고려하세요.',
      en: 'From Lisbon airport, transfer to Rossio/Oriente then the Sintra train. Cars/Uber face peak parking crowds.',
    },
    howTo: {
      ko: 'CP 근교 기차가 핵심. 시내–왕궁·페나 성은 투어버스(434 등)·도보·Uber를 섞습니다.',
      en: 'CP suburban trains are the backbone. Palaces use tourist bus (e.g. 434), walking, or Uber.',
    },
    apps: [
      ta('cp'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '페나 성·무어 성 구간은 경사가 심합니다. 왕복 교통을 미리 정해 두면 편합니다.',
      en: 'Pena and Moorish castle climbs are steep—plan return transport ahead.',
    },
  },
  faro: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '공항 버스·택시로 시내 10–20분. 알가르브 다른 해변 도시는 장거리 버스·렌터가 편합니다.',
      en: 'Airport bus/taxi to town in 10–20 min. Other Algarve towns are easier by coach or rental car.',
    },
    howTo: {
      ko: '시내는 도보 충분. Eva·Vamus 버스와 CP 기차로 Lagos·Albufeira 이동.',
      en: 'Town center is walkable. Eva/Vamus buses and CP trains reach Lagos and Albufeira.',
    },
    apps: [
      ta('cp'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  coimbra: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '리스본/포르투에서 기차 약 1.5–2시간. 공항에서는 각 도시 환승.',
      en: 'Train ~1.5–2 hrs from Lisbon/Porto; transfer via those cities from airports.',
    },
    howTo: {
      ko: '구시가·대학은 도보·시내버스. CP 기차로 리스본·포르투 연결.',
      en: 'Walk or bus the old town/university. CP trains link Lisbon and Porto.',
    },
    apps: [
      ta('cp'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  funchal: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '푸샬 공항에서 버스·택시로 시내 약 20–30분.',
      en: 'Airport bus or taxi to town ~20–30 min.',
    },
    howTo: {
      ko: '시내버스(HF)·택시. 언덕이 많아 케이블카·Uber를 섞습니다. 본토와는 항공.',
      en: 'City buses (HF) and taxis. Hilly—use cable cars/Uber. Flights to/from the mainland.',
    },
    apps: [
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '렌터는 산악 도로와 주차 공간을 고려하세요.',
      en: 'If renting a car, plan for mountain roads and scarce parking.',
    },
  },
  lagos: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: 'Faro 공항에서 버스·기차 환승 또는 렌터 약 1시간.',
      en: 'From Faro airport: bus/train transfer or rental ~1 hr.',
    },
    howTo: {
      ko: '구시가는 도보. 해변·절벽은 로컬 버스·택시. Faro·라구스는 CP/버스.',
      en: 'Walk the old town; beaches/cliffs by local bus or taxi. CP/coaches to Faro and beyond.',
    },
    apps: [
      ta('cp'),
      ta('rede-expressos'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  cascais: {
    modes: ['train', 'bus', 'taxi', 'rideshare', 'bike', 'walk'],
    airportToCity: {
      ko: '리스본 공항 → Cais do Sodré 환승 후 Cascais선 기차 약 40분.',
      en: 'Lisbon airport → Cais do Sodré, then Cascais line train ~40 min.',
    },
    howTo: {
      ko: '리스본–카스카이스 근교 기차가 가장 편합니다. 해안 산책·자전거는 보카 도 인페르노 방면.',
      en: 'Suburban train from Lisbon is easiest. Walk or bike the coast toward Boca do Inferno.',
    },
    apps: [
      ta('cp'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  aveiro: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'bike', 'walk'],
    airportToCity: {
      ko: '포르투 공항 → 기차/버스 환승으로 Aveiro 약 1–1.5시간.',
      en: 'From Porto airport, train/bus transfer to Aveiro ~1–1.5 hrs.',
    },
    howTo: {
      ko: 'CP로 포르투·코임브라 접근. 시내는 도보·자전거·몰레이루 관광 보트.',
      en: 'CP trains from Porto/Coimbra. Walk, bike, or moliceiro boats in town.',
    },
    apps: [
      ta('cp'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  fatima: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '리스본에서 버스 약 1–1.5시간. 렌터·택시 대안.',
      en: 'Coach from Lisbon ~1–1.5 hrs; rental/taxi also fine.',
    },
    howTo: {
      ko: '성지 일대는 도보. 리스본·포르투에서 Rede Expressos 등 장거리 버스가 편합니다.',
      en: 'Walk the sanctuary area. Coaches (e.g. Rede Expressos) from Lisbon/Porto are easiest.',
    },
    apps: [
      ta('rede-expressos'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  evora: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '리스본에서 기차·버스 약 1.5–2시간.',
      en: 'Train or bus from Lisbon ~1.5–2 hrs.',
    },
    howTo: {
      ko: '성벽 안은 도보. 리스본에서 기차·버스. 시내는 작아 택시 수요가 적습니다.',
      en: 'Walk inside the walls. Train/bus from Lisbon; town is compact so taxis are optional.',
    },
    apps: [
      ta('cp'),
      ta('rede-expressos'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  obidos: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '리스본에서 버스 또는 렌터 약 1–1.5시간. 외곽 주차장 이용.',
      en: 'Bus or rental from Lisbon ~1–1.5 hrs; use outer parking.',
    },
    howTo: {
      ko: '중세 성곽 마을은 도보 전용에 가깝습니다. 리스본에서 버스·투어가 일반적.',
      en: 'The walled village is almost entirely on foot. Buses/tours from Lisbon are typical.',
    },
    apps: [
      ta('rede-expressos'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '차로 성벽 안 진입이 제한됩니다. 주차장에서 걸어 들어가세요.',
      en: 'Cars are restricted inside the walls—park outside and walk in.',
    },
  },
  braga: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '포르투 공항에서 버스·기차 환승 또는 Bolt(약 40–50분).',
      en: 'From Porto airport: bus/train transfer or Bolt (~40–50 min).',
    },
    howTo: {
      ko: '시내는 도보·시내버스. Bom Jesus는 버스 또는 Uber + 언덕 엘리베이터/계단.',
      en: 'Walk or city bus downtown. Bom Jesus: bus/Uber plus funicular or stairs.',
    },
    apps: [
      ta('cp'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  nazare: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '리스본에서 Rede Expressos 등 장거리 버스 약 1.5–2시간. 렌터·Uber는 비쌀 수 있습니다.',
      en: 'Coach from Lisbon ~1.5–2 hrs (e.g. Rede Expressos). Rental/Uber can cost more.',
    },
    howTo: {
      ko: '시내–시티우(언덕)는 엘리베이터·버스·도보. 북해변은 도보 또는 짧은 택시.',
      en: 'Town–Sítio uses the funicular, bus, or walk. Praia do Norte is a short walk or taxi.',
    },
    apps: [
      ta('rede-expressos'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '빅웨이브 시즌에는 시티우 전망대 접근이 혼잡합니다. 엘리베이터를 우선하세요.',
      en: 'In big-wave season Sítio viewpoints get crowded—prefer the funicular.',
    },
  },
  guimaraes: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '포르투에서 기차·버스 약 1시간. 공항에서는 포르투 시내 환승이 일반적입니다.',
      en: 'Train or bus from Porto ~1 hr. From the airport, usually transfer via Porto.',
    },
    howTo: {
      ko: '구시가·성은 대부분 도보. 펜야 산은 케이블카 또는 Uber.',
      en: 'Old town and castle are walkable. Penha is cable car or Uber.',
    },
    apps: [
      ta('cp'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  // —— ad ——
  'andorra-la-vella': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Andorra La Vella에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Andorra La Vella from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Andorra La Vella: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Andorra La Vella is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('alsa'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('uber'),
    ],
  },
  'pas-de-la-casa': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Pas De La Casa에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Pas De La Casa from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Pas De La Casa: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Pas De La Casa is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('alsa'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
    ],
  },
  ordino: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Ordino에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Ordino from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Ordino: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Ordino is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('alsa'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
    ],
  },
  // —— it ——
  rome: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'FCO: Leonardo Express→Termini 또는 버스. CIA: 공항버스.',
      en: 'FCO: Leonardo Express to Termini or buses. CIA: airport coaches.',
    },
    howTo: {
      ko: 'ATAC 티켓·BIT. 메트로 3개 노선 + 버스. 시내 중심은 도보가 빠른 구간이 많습니다.',
      en: 'ATAC tickets/BIT. Three metro lines plus buses. Walking often wins in the core.',
    },
    apps: [
      ta('trenitalia'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
    tip: {
      ko: '바티칸·콜로세오는 메트로+도보. 소매치기 주의.',
      en: 'Vatican/Colosseum: metro + walk. Mind pickpockets.',
    },
  },
  milan: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'MXP: Malpensa Express. LIN: 공항버스·지하철 환승. BGY: 버스→밀라노.',
      en: 'MXP: Malpensa Express. LIN: coach/metro link. BGY: bus into Milan.',
    },
    howTo: {
      ko: 'ATM 티켓·여행권. 메트로가 빠르고, 근교는 Trenord.',
      en: 'ATM tickets/passes. Metro is fast; Trenord for suburbs.',
    },
    apps: [
      ta('trenitalia'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  florence: {
    modes: ['bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '트램 T2 또는 버스·택시 약 20–30분.',
      en: 'Tram T2 or bus/taxi ~20–30 min.',
    },
    howTo: {
      ko: '구시가는 도보가 최고. Ataf 버스·트램웨이. 역은 SMN.',
      en: 'Historic centre is best on foot. Ataf buses/tramway; SMN station.',
    },
    apps: [
      ta('trenitalia'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  venice: {
    modes: ['ferry', 'train', 'bus', 'walk', 'taxi'],
    airportToCity: {
      ko: 'Alandro·버스·수상택시. 마르코 폴로→Piacale Roma 후 바포레토.',
      en: 'Alandro, bus, or water taxi. Marco Polo → Piazzale Roma then vaporetto.',
    },
    howTo: {
      ko: 'ACTV 바포레토 데이패스. 섬 이동은 배, 본섬은 도보. 다리는 캐리어에 불리합니다.',
      en: 'ACTV vaporetto day pass. Boats between islands; walk the main island—bridges vs luggage.',
    },
    apps: [
      ta('trenitalia'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
    tip: {
      ko: '수상택시는 비쌉니다. 데이패스로 충분할 때가 많습니다.',
      en: 'Water taxis are pricey—day passes often suffice.',
    },
  },
  naples: {
    modes: ['metro', 'ferry', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Naples 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Naples—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Naples: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Naples, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('trenitalia'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  bologna: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Bologna: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Bologna centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('trenitalia'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  verona: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Verona: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Verona centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('trenitalia'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  turin: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Turin: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Turin, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('trenitalia'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  amalfi: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Amalfi: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Amalfi by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trenitalia'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  siena: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Siena: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Siena by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trenitalia'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  genoa: {
    modes: ['ferry', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Genoa: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Genoa centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('trenitalia'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  palermo: {
    modes: ['ferry', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Palermo: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Palermo centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('trenitalia'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  // —— va ——
  'vatican-city': {
    modes: ['metro', 'bus', 'walk', 'taxi'],
    howTo: {
      ko: '로마 메트로 A Ottaviano/Cipro에서 도보. 바티칸 내부는 보안 검색 후 도보만 가능.',
      en: 'Walk from Rome metro A Ottaviano/Cipro. Inside the Vatican, walking only after security.',
    },
    apps: [
      ta('trenitalia'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '로마에서 호출', en: 'Hail from Rome' }),
    ],
    tip: {
      ko: '성 베드로 광장 줄이 깁니다. 일찍 또는 예약 투어를 이용하세요.',
      en: 'St Peter’s queues are long—go early or book a timed entry.',
    },
  },
  // —— mt ——
  valletta: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Valletta에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Valletta from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Valletta: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Valletta. Check boat timetables first.',
    },
    apps: [
      ta('bolt'),
      ta('uber'),
    ],
  },
  mdina: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Mdina에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Mdina from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Mdina: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Mdina is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt'),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  gozo: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Gozo에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Gozo from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Gozo: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Gozo. Check boat timetables first.',
    },
    apps: [
      ta('bolt'),
    ],
  },
  // —— gr ——
  athens: {
    modes: ['metro', 'tram', 'bus', 'train', 'ferry', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '메트로 3호선 또는 X95 버스. 택시는 미터요금.',
      en: 'Metro line 3 or bus X95; metered taxis.',
    },
    howTo: {
      ko: 'Ath.ena 티켓. 메트로로 명소 이동. 페리 터미널(피레우스)은 메트로 연결.',
      en: 'Ath.ena tickets. Metro to sights; Piraeus ferries link by metro.',
    },
    apps: [
      ta('citymapper'),
      ta('bolt'),
      ta('uber'),
    ],
    tip: {
      ko: '섬 일정은 Blue Star 등 페리 예약을 먼저 하세요.',
      en: 'For islands, book ferries (e.g. Blue Star) first.',
    },
  },
  santorini: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Santorini: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Santorini. Check boat timetables first.',
    },
    apps: [
      ta('bolt'),
      ta('uber'),
    ],
  },
  heraklion: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Heraklion: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Heraklion. Check boat timetables first.',
    },
    apps: [
      ta('bolt'),
    ],
  },
  mykonos: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Mykonos: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Mykonos. Check boat timetables first.',
    },
    apps: [
      ta('bolt'),
    ],
  },
  rhodes: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Rhodes: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Rhodes. Check boat timetables first.',
    },
    apps: [
      ta('bolt'),
    ],
  },
  thessaloniki: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Thessaloniki: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Thessaloniki, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('bolt'),
      ta('uber'),
    ],
  },
  corfu: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Corfu: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Corfu. Check boat timetables first.',
    },
    apps: [
      ta('bolt'),
      ta('uber'),
    ],
  },
  nafplio: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Nafplio: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Nafplio is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt'),
    ],
  },
  // —— cy ——
  nicosia: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Nicosia에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Nicosia from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Nicosia: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Nicosia is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  limassol: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Limassol에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Limassol from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Limassol: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Limassol is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  paphos: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Paphos에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Paphos from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Paphos: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Paphos is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  'ayia-napa': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Ayia Napa에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Ayia Napa from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Ayia Napa: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Ayia Napa is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  // —— dk ——
  copenhagen: {
    modes: ['metro', 'bus', 'train', 'bike', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '메트로 M2로 시내 약 15분.',
      en: 'Metro M2 to the city ~15 min.',
    },
    howTo: {
      ko: 'Rejsekort·city pass. 메트로·S-tog·버스. 자전거 인프라가 매우 좋습니다.',
      en: 'Rejsekort/city pass. Metro, S-tog, buses; outstanding bike infrastructure.',
    },
    apps: [
      ta('dsb'),
      ta('citymapper'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  aarhus: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Aarhus: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Aarhus by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('dsb'),
      ta('citymapper'),
      ta('bolt'),
    ],
  },
  odense: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Odense: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Odense by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('dsb'),
      ta('citymapper'),
      ta('bolt'),
    ],
  },
  aalborg: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Aalborg: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Aalborg by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('dsb'),
      ta('citymapper'),
      ta('bolt'),
    ],
  },
  roskilde: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Roskilde: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Roskilde by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('dsb'),
      ta('citymapper'),
      ta('bolt'),
    ],
  },
  // —— se ——
  stockholm: {
    modes: ['metro', 'tram', 'bus', 'train', 'ferry', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'Arlanda Express·공항버스·pendeltåg. Bromma는 버스·택시.',
      en: 'Arlanda Express, airport bus, or pendeltåg; Bromma by bus/taxi.',
    },
    howTo: {
      ko: 'SL 앱·카드. Tunnelbana·버스·페리. 아르키펠라고 보트도 SL 구간이 있습니다.',
      en: 'SL app/card. Tunnelbana, buses, ferries; some archipelago boats are in SL.',
    },
    apps: [
      ta('sj'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  gothenburg: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Gothenburg: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Gothenburg centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('sj'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  malmo: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk', 'bike'],
    howTo: {
      ko: 'Malmo: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Malmo centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('sj'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  uppsala: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Uppsala: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Uppsala by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sj'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  kiruna: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Kiruna: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Kiruna by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sj'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  // —— no ——
  oslo: {
    modes: ['metro', 'tram', 'bus', 'train', 'ferry', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'Flytoget·공항버스·지역열차로 시내 약 20–40분.',
      en: 'Flytoget, airport bus, or local trains ~20–40 min.',
    },
    howTo: {
      ko: 'Ruter 티켓. T-bane·트램·버스·페리. Entur로 장거리 연계.',
      en: 'Ruter tickets. T-bane, tram, bus, ferry; Entur for longer trips.',
    },
    apps: [
      ta('vy'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  bergen: {
    modes: ['ferry', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Bergen: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Bergen centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('vy'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  tromso: {
    modes: ['ferry', 'bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Tromso: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Tromso. Check boat timetables first.',
    },
    apps: [
      ta('vy'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  stavanger: {
    modes: ['ferry', 'bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Stavanger: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Stavanger. Check boat timetables first.',
    },
    apps: [
      ta('vy'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  trondheim: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Trondheim: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Trondheim by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('vy'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  alesund: {
    modes: ['ferry', 'bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Alesund: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Alesund. Check boat timetables first.',
    },
    apps: [
      ta('vy'),
      ta('bolt'),
    ],
  },
  flam: {
    modes: ['ferry', 'bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Flam: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Flam usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('vy'),
      ta('bolt'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  // —— fi ——
  helsinki: {
    modes: ['metro', 'tram', 'bus', 'train', 'ferry', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'I 기차 또는 공항버스(615 등)로 시내 약 30–40분.',
      en: 'I train or airport buses (e.g. 615) ~30–40 min.',
    },
    howTo: {
      ko: 'HSL 티켓·앱. 트램·메트로·수완린나 페리어(수오멘린나) 연결.',
      en: 'HSL tickets/app. Trams, metro, and ferry to Suomenlinna.',
    },
    apps: [
      ta('vr'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  turku: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Turku: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Turku centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('vr'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  tampere: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Tampere: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Tampere centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('vr'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  rovaniemi: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Rovaniemi: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Rovaniemi by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('vr'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  porvoo: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Porvoo: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Porvoo by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('vr'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  // —— is ——
  reykjavik: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: 'Flybus·Airport Direct로 시내 약 45분. 택시비는 높은 편.',
      en: 'Flybus/Airport Direct ~45 min; taxis are expensive.',
    },
    howTo: {
      ko: 'Strætó 버스·Klapp 앱. 시내 중심은 도보. 골든서클은 투어·렌터.',
      en: 'Strætó buses/Klapp app. Walk downtown; Golden Circle needs tour or rental.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  akureyri: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Akureyri에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Akureyri from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Akureyri: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Akureyri is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  vik: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Vik에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Vik from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Vik: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Vik is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  husavik: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Husavik에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Husavik from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Husavik: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Husavik is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  selfoss: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Selfoss에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Selfoss from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Selfoss: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Selfoss is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  // —— ee ——
  tallinn: {
    modes: ['ferry', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Tallinn 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Tallinn—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Tallinn: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Tallinn centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('bolt', { ko: '탈린 기본 앱', en: 'Default in Tallinn' }),
      ta('uber'),
    ],
  },
  tartu: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Tartu: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Tartu is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '탈린 기본 앱', en: 'Default in Tallinn' }),
    ],
  },
  parnu: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Parnu: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Parnu is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '탈린 기본 앱', en: 'Default in Tallinn' }),
    ],
  },
  // —— lv ——
  riga: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Riga 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Riga—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Riga: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Riga centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  jurmala: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Jurmala: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Jurmala is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  sigulda: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Sigulda: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Sigulda is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  // —— lt ——
  vilnius: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Vilnius 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Vilnius—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Vilnius: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Vilnius is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버보다 잘 잡힘', en: 'Usually more cars than Uber' }),
      ta('uber'),
    ],
  },
  kaunas: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Kaunas: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Kaunas centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('bolt', { ko: '우버보다 잘 잡힘', en: 'Usually more cars than Uber' }),
    ],
  },
  klaipeda: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Klaipeda: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Klaipeda is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버보다 잘 잡힘', en: 'Usually more cars than Uber' }),
    ],
  },
  // —— hr ——
  zagreb: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Zagreb 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Zagreb—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Zagreb: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Zagreb centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  dubrovnik: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Dubrovnik 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Dubrovnik—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Dubrovnik: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Dubrovnik. Check boat timetables first.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  split: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Split 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Split—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Split: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Split. Check boat timetables first.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  zadar: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Zadar: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Zadar. Check boat timetables first.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  rovinj: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Rovinj: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Rovinj. Check boat timetables first.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  hvar: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Hvar: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Hvar. Check boat timetables first.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  // —— si ——
  ljubljana: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Ljubljana: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Ljubljana is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  bled: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Bled: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Bled is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  piran: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Piran: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Piran. Check boat timetables first.',
    },
    apps: [
      ta('trainline'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  maribor: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Maribor: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Maribor is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  postojna: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Postojna: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Postojna is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  // —— ba ——
  sarajevo: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Sarajevo: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Sarajevo centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  mostar: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Mostar: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Mostar is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  'banja-luka': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Banja Luka: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Banja Luka is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  travnik: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Travnik: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Travnik is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  // —— me ——
  kotor: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Kotor에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Kotor from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Kotor: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Kotor is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  budva: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Budva에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Budva from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Budva: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Budva is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  podgorica: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Podgorica에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Podgorica from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Podgorica: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Podgorica is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  'herceg-novi': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Herceg Novi에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Herceg Novi from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Herceg Novi: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Herceg Novi is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  // —— rs ——
  belgrade: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Belgrade 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Belgrade—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Belgrade: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Belgrade, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  'novi-sad': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Novi Sad: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Novi Sad is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  nis: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Nis: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Nis is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  subotica: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Subotica: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Subotica is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  // —— mk ——
  skopje: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Skopje에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Skopje from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Skopje: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Skopje is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  ohrid: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Ohrid에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Ohrid from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Ohrid: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Ohrid is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  bitola: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Bitola에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Bitola from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Bitola: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Bitola is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  tetovo: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Tetovo에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Tetovo from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Tetovo: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Tetovo is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  // —— al ——
  tirana: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Tirana에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Tirana from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Tirana: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Tirana is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  berat: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Berat에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Berat from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Berat: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Berat is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  gjirokaster: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Gjirokaster에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Gjirokaster from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Gjirokaster: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Gjirokaster is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  sarande: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Sarande에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Sarande from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Sarande: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Sarande is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  // —— bg ——
  sofia: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Sofia 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Sofia—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Sofia: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Sofia, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber here' }),
    ],
  },
  plovdiv: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Plovdiv: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Plovdiv is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber here' }),
    ],
  },
  varna: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Varna: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Varna is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber here' }),
    ],
  },
  'veliko-tarnovo': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Veliko Tarnovo: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Veliko Tarnovo is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber here' }),
    ],
  },
  nessebar: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Nessebar: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Nessebar is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt', { ko: '우버 없음', en: 'No Uber here' }),
    ],
  },
  // —— ro ——
  bucharest: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Bucharest 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Bucharest—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Bucharest: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Bucharest, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  brasov: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Brasov: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Brasov is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  sibiu: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Sibiu: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Sibiu is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  sighisoara: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Sighisoara: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Sighisoara is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  'cluj-napoca': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Cluj Napoca: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Cluj Napoca is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  timisoara: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Timisoara: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Timisoara is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  // —— tr ——
  istanbul: {
    modes: ['metro', 'tram', 'bus', 'ferry', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'IST: 메트로/하바버스. SAW: 버스·메트로 환승. 택시·Uber 가능.',
      en: 'IST: metro/Havaist. SAW: bus/metro links. Taxi/Uber available.',
    },
    howTo: {
      ko: 'Istanbulkart로 메트로·트램·버스·페리. 보스포러스 페리가 유용합니다.',
      en: 'Istanbulkart for metro, tram, bus, ferry. Bosphorus ferries are handy.',
    },
    apps: [
      ta('citymapper'),
      ta('bolt'),
      ta('uber'),
    ],
    tip: {
      ko: '구시가(술탄아흐메트)는 트램+도보가 가장 편합니다.',
      en: 'Sultanahmet is easiest by tram + walking.',
    },
  },
  goreme: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Goreme: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Goreme usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('bolt'),
      ta('uber'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  ankara: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Ankara: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Ankara, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('bolt'),
      ta('uber'),
    ],
  },
  izmir: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Izmir: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Izmir, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('bolt'),
      ta('uber'),
    ],
  },
  antalya: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Antalya: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Antalya is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt'),
      ta('uber'),
    ],
  },
  bursa: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Bursa: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Bursa is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt'),
      ta('uber'),
    ],
  },
  trabzon: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Trabzon: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Trabzon is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt'),
      ta('uber'),
    ],
  },
  pamukkale: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Pamukkale: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Pamukkale usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('bolt'),
      ta('uber'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  // —— ge ——
  tbilisi: {
    modes: ['metro', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '버스 337 또는 택시/Bolt 약 30–40분.',
      en: 'Bus 337 or taxi/Bolt ~30–40 min.',
    },
    howTo: {
      ko: 'MetroMoney 카드. 메트로 2개 노선 + 버스. 언덕은 케이블카·푸니쿨라.',
      en: 'MetroMoney card. Two metro lines + buses; cable car/funicular for hills.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음 · Yandex도 흔함', en: 'No Uber; Yandex Go also common' }),
    ],
  },
  batumi: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Batumi: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Batumi. Check boat timetables first.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음 · Yandex도 흔함', en: 'No Uber; Yandex Go also common' }),
    ],
  },
  kutaisi: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Kutaisi: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Kutaisi is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음 · Yandex도 흔함', en: 'No Uber; Yandex Go also common' }),
    ],
  },
  stepantsminda: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Stepantsminda: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Stepantsminda usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음 · Yandex도 흔함', en: 'No Uber; Yandex Go also common' }),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  sighnaghi: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Sighnaghi: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Sighnaghi is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음 · Yandex도 흔함', en: 'No Uber; Yandex Go also common' }),
    ],
  },
}

export function getCountryTransit(countryId: string): CountryTransit | undefined {
  return countryTransitById[countryId]
}

export function getCityTransit(cityId: string): CityTransit | undefined {
  return cityTransitById[cityId]
}
