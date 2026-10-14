import type { CountryTransit } from '../types'
import { ta } from './transit-apps'

export { TRANSIT_MODE_ORDER } from './transit-apps'

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
  ua: {
    summary: {
      ko: '우측통행. 기차·마슈루트카·장거리 버스로 이동합니다.',
      en: 'Drive on the right. Trains, marshrutkas, and coaches.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '우크르잘리즈니차(국영철도) 기차가 도시 간 이동의 중심입니다.',
      en: 'Ukrainian Railways (Ukrzaliznytsia) trains link major cities.',
    },
    paymentTip: {
      ko: 'Bolt·Uklon 택시 앱이 흔합니다.',
      en: 'Bolt and Uklon taxi apps are common.',
    },
    apps: [ta('bolt')],
  },
  md: {
    summary: {
      ko: '우측통행. 미니버스(루트비카)와 기차로 이동합니다.',
      en: 'Drive on the right. Marshrutka minibuses and trains.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '키시너우가 허브. 오르헤이울 베키·소로카는 투어나 렌터카가 편합니다.',
      en: 'Chișinău is the hub; Orheiul Vechi and Soroca are easiest by tour or rental car.',
    },
    paymentTip: {
      ko: 'Bolt·Yandex Go 택시 앱을 씁니다.',
      en: 'Bolt and Yandex Go taxi apps are common.',
    },
    apps: [ta('bolt')],
  },
  am: {
    summary: {
      ko: '우측통행. 마슈루트카와 기차·시외버스로 이동합니다.',
      en: 'Drive on the right. Marshrutka minibuses, trains, and intercity buses.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '예레반이 허브. 귬리·딜리잔은 마슈루트카로 이동합니다.',
      en: 'Yerevan is the hub; reach Gyumri and Dilijan by marshrutka.',
    },
    paymentTip: {
      ko: 'Yandex Go·GG 택시 앱이 흔합니다.',
      en: 'Yandex Go and GG taxi apps are common.',
    },
    apps: [ta('bolt', { ko: '주요 도시 위주', en: 'Mainly major cities' })],
  },
  az: {
    summary: {
      ko: '우측통행. 바쿠 메트로와 장거리 버스로 이동합니다.',
      en: 'Drive on the right. Baku metro and intercity buses.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '바쿠가 허브. 셰키·가발라는 버스나 렌터카로 이동합니다.',
      en: 'Baku is the hub; reach Sheki and Gabala by bus or rental car.',
    },
    paymentTip: {
      ko: 'BakıKart 교통카드. Bolt 택시 앱이 흔합니다.',
      en: 'BakıKart transit card; Bolt taxi app is common.',
    },
    apps: [ta('bolt')],
  },
  sm: {
    summary: {
      ko: '우측통행. 리미니에서 버스로 접근하는 작은 산악 공화국입니다.',
      en: 'Drive on the right. A small mountain republic reached by bus from Rimini.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '리미니 기차역에서 버스로 약 45분. 공항도 리미니가 일반적입니다.',
      en: 'About 45 min by bus from Rimini train station; Rimini airport is usual.',
    },
    paymentTip: {
      ko: '구시가는 도보 중심. 티타노산은 케이블카로 오릅니다.',
      en: 'Old town is walkable; take the cable car up Mount Titano.',
    },
    apps: [ta('trainline', { ko: '리미니 기차 예약', en: 'Rimini train booking' })],
  },
  xk: {
    summary: {
      ko: '우측통행. 미니버스와 장거리 버스로 이동합니다.',
      en: 'Drive on the right. Minibuses and intercity coaches.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '프리슈티나가 허브. 프리즈렌·페야는 버스로 1시간 내외입니다.',
      en: 'Pristina is the hub; Prizren and Peja are about an hour by bus.',
    },
    paymentTip: {
      ko: '유로 현금 사용이 흔합니다.',
      en: 'Cash euros are commonly used.',
    },
    apps: [ta('bolt', { ko: '프리슈티나 위주', en: 'Mainly Pristina' })],
  },
}

export function getCountryTransit(countryId: string): CountryTransit | undefined {
  return countryTransitById[countryId]
}
