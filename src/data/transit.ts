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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('alsa', { ko: '스페인행 국제버스', en: 'International coaches to Spain' }),
      ta('blablacar', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('easyjet', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('volotea', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('transavia', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('trainline', { ko: '기차 예약', en: 'Train booking' }),
      ta('bolt', { ko: '런던 등', en: 'London etc.' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('national-express', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('easyjet', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('jet2', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('tfi-live', { ko: '전국 실시간·길찾기', en: 'Nationwide live times and planner' }),
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('irish-rail', { ko: '기차', en: 'Trains' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '더블린 등', en: 'Dublin etc.' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('bus-eireann-expressway', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt'),
      ta('uber'),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('transavia', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('uber', { ko: '암스테르담·로테르담', en: 'Amsterdam & Rotterdam' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('easyjet', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('transavia', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('mobiliteit-lu', { ko: '전국 길찾기 (대중교통 무료)', en: 'Nationwide planner (public transport is free)' }),
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('cfl', { ko: '기차·이동', en: 'Rail & travel' }),
      ta('uber', { ko: '룩셈부르크시', en: 'Luxembourg City' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt'),
      ta('free-now', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('easyjet', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('eurowings', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('uber', { ko: '취리히·제네바 등', en: 'Zürich, Geneva etc.' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('easyjet', { ko: '저가 항공', en: 'Low-cost airline' }),
    ],
    // SBB's EasyRide pages and FAQ, checked 2026-10.
    appGuide: {
      title: { ko: 'SBB Mobile 사용법', en: 'Using SBB Mobile' },
      steps: [
        {
          ko: '표 사기: 출발지·도착지로 열차를 검색해 고르고, 일행과 좌석 예약을 넣은 뒤 결제합니다.',
          en: 'Buying a ticket: search your connection, pick it, add companions and seat reservations, then pay.',
        },
        {
          ko: 'EasyRide 체크인: 차량이 출발하기 전에 시작 버튼을 왼쪽에서 오른쪽으로 밉니다. 출발 뒤에 하면 무임승차로 처리됩니다.',
          en: 'EasyRide check-in: swipe the start button from left to right before the vehicle departs—checking in after departure counts as travelling without a ticket.',
        },
        {
          ko: '체크아웃: 내린 뒤 반대 방향으로 밉니다. 갈아탈 때는 체크아웃하지 않아도 되고, 기차·버스·트램·배에 모두 씁니다.',
          en: 'Check-out: swipe back after you get off. No need to check out when changing; it works on trains, buses, trams and boats.',
        },
        {
          ko: '요금: 탄 경로를 계산해 가장 싼 표를 끊고, 하루 요금이 1일권보다 많으면 1일권 값만 냅니다. 등록한 카드로 자동 결제되고, 반값 할인 카드 등 정기권은 SwissPass에 넣어 두면 자동 적용됩니다.',
          en: 'Fares: it works out the cheapest ticket for the route you rode and caps the day at the day-pass price, charging your stored card; travelcards such as Half Fare apply automatically once loaded on your SwissPass.',
        },
        {
          ko: '켜 둘 것: 블루투스(근처 기기)와 위치(항상 허용)를 체크인부터 체크아웃까지 켜 두세요. 블루투스를 끄면 체크아웃이 안 됩니다. 지하 정류장에서는 지상에서 미리 체크인하세요.',
          en: 'Keep Bluetooth (nearby devices) and location (“always”) on from check-in to check-out—without Bluetooth you cannot check out. At underground stops, check in while still above ground.',
        },
        {
          ko: '주의: 체크아웃을 잊었을 때 오는 알림은 SBB도 보장하지 않습니다. 내리면 바로 직접 체크아웃하세요.',
          en: 'Note: SBB does not guarantee the forgotten-check-out reminder, so check out yourself as soon as you alight.',
        },
      ],
      source: 'https://www.sbb.ch/en/help-and-contact/products-services/apps/sbb-mobile-sbb-preview/faq-easyride.html',
    },
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('citymapper', { ko: '빈', en: 'Vienna' }),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('regiojet', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('eurowings', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
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
      ta('idos', { ko: '전국 기차·버스 시간표', en: 'Nationwide train and bus timetables' }),
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('cd', { ko: '기차', en: 'Trains' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('uber', { ko: '프라하·브르노', en: 'Prague & Brno' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('regiojet', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('leo-express', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('eurowings', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt'),
      ta('uber', { ko: '브라티슬라바만', en: 'Bratislava only' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('regiojet', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('leo-express', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('regiojet', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt', { ko: '더 잘 잡힘', en: 'Usually more cars' }),
      ta('uber'),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('alsa', { ko: '장거리 버스', en: 'Coach buses' }),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('easyjet', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('vueling', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('volotea', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ko: '도시 교통은 카드·모바일. TVDE 호출은 Bolt가 우버보다 잘 잡히는 경우가 많습니다.',
      en: 'City transit is card/mobile. For TVDE rides Bolt often has more cars than Uber.',
    },
    apps: [
      ta('cp', { ko: '국영 기차', en: 'National trains' }),
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('rede-expressos', { ko: '장거리 버스', en: 'Coach buses' }),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often easier than Uber' }),
      ta('uber', { ko: '주요 도시', en: 'Major cities' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('alsa', { ko: '스페인행 국제버스', en: 'International coaches to Spain' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('easyjet', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('andbus', { ko: '바르셀로나·공항 버스 예약', en: 'Coaches to Barcelona and airports' }),
      ta('alsa', { ko: '바르셀로나 방면', en: 'Toward Barcelona' }),
      ta('uber', { ko: '안도라라베야', en: 'Andorra la Vella' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt'),
      ta('free-now', { ko: '일반 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙 위주', en: 'Mostly Black' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('easyjet', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('volotea', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('tallinja', { ko: '전국 버스 (고조 포함)', en: 'Buses nationwide, Gozo included' }),
      ta('bolt'),
      ta('uber'),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt'),
      ta('uber', { ko: '아테네 등', en: 'Athens etc.' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('cyprus-bus', { ko: '전국 버스 노선·실시간', en: 'Nationwide bus routes and live times' }),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('uber', { ko: '코펜하겐 등', en: 'Copenhagen etc.' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('norwegian', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt'),
      ta('uber'),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('norwegian', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('entur', { ko: '전국 길찾기·표', en: 'Nationwide routes and tickets' }),
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('vy', { ko: '기차·버스', en: 'Trains & buses' }),
      ta('bolt'),
      ta('uber', { ko: '오슬로·베르겐 등', en: 'Oslo, Bergen etc.' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('norwegian', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt'),
      ta('uber'),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('matkahuolto', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('norwegian', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ko: '우버·볼트는 없고 택시를 이용합니다. 공항–시내는 Flybus가 훨씬 쌉니다.',
      en: 'No Uber or Bolt—use taxis; Flybus beats taxis to the airport.',
    },
    apps: [
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('uber', { ko: '탈린만', en: 'Tallinn only' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('lux-express', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ecolines', { ko: '고속버스', en: 'Long-distance coaches' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('lux-express', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ecolines', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('uber', { ko: '빌뉴스만', en: 'Vilnius only' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('lux-express', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ecolines', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt'),
      ta('uber'),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ko: '시내 Urbana 등. 우버·볼트 차량 호출은 없고 택시를 이용합니다.',
      en: 'City cards like Urbana; no Uber or Bolt rides—use taxis.',
    },
    apps: [
      ta('trainline'),
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
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
      ko: '버스 터미널 현장 예매가 흔합니다. 시내는 택시를 이용하세요.',
      en: 'Buy bus tickets at stations; use taxis in cities.',
    },
    apps: [
      ta('flixbus'),
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ko: '터미널·온라인 버스 티켓. 우버·볼트는 없고 현지 택시입니다.',
      en: 'Station/online bus tickets; no Uber or Bolt—use local taxis.',
    },
    apps: [
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ko: '시내 버스 카드·앱. 대도시에서는 CarGo가 편합니다.',
      en: 'City bus cards/apps; CarGo helps in big cities.',
    },
    apps: [
      ta('flixbus'),
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ko: '터미널 티켓. 시내는 버스·택시.',
      en: 'Station tickets; city buses and taxis.',
    },
    apps: [
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ko: '시내 교통카드. 택시는 TaxiMe 앱을 권장합니다.',
      en: 'City transit cards; TaxiMe is the go-to taxi app.',
    },
    apps: [
      ta('flixbus'),
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('uber'),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('ryanair', { ko: '저가 항공', en: 'Low-cost airline' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ko: '이스탄불kart. 택시는 BiTaksi·Uber(규제 변동 있음). 장거리는 고속버스 앱.',
      en: 'Istanbulkart; BiTaksi and Uber for taxis (rules shift). Coaches for long trips.',
    },
    apps: [
      ta('uber', { ko: '대도시·규제 확인', en: 'Big cities; check rules' }),
      ta('rail-planner', { ko: '유레일(인터레일) 패스·좌석 예약', en: 'Eurail/Interrail Pass and seat reservations' }),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('obilet', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('pegasus', { ko: '저가 항공', en: 'Low-cost airline' }),
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
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
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
    apps: [
      ta('bolt'),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
    ],
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
    apps: [
      ta('bolt'),
      ta('flixbus', { ko: '고속버스', en: 'Long-distance coaches' }),
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
    ],
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
    apps: [
      ta('wizz-air', { ko: '저가 항공', en: 'Low-cost airline' }),
    ],
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
    apps: [],
  },
  // —— 2026-10 new countries (operators' and tourist boards' own sites) ——
  gi: {
    summary: {
      ko: '우측통행. 걸어서 다닐 만큼 작아 시내는 버스와 도보로 충분합니다.',
      en: 'Drive on the right. Small enough to walk; buses cover the rest.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '스페인 라 리네아와 국경이 붙어 있어 걸어서 넘을 수 있습니다. 스페인 각지로 가는 버스와 기차는 국경 건너편에서 탑니다.',
      en: 'The border with La Línea in Spain can be crossed on foot; buses and trains onward into Spain leave from the Spanish side.',
    },
    paymentTip: {
      ko: '바위산 자연보호구역은 마켓플레이스에서 셔틀버스(입장권 포함)가 다닙니다. 표는 마켓플레이스 매표소에서 삽니다.',
      en: 'A shuttle bus (nature reserve entry included) runs from Marketplace to the Upper Rock; tickets are sold at the Marketplace office.',
    },
    apps: [],
  },
  im: {
    summary: {
      ko: '좌측통행. 섬 전체를 버스 바넌(Bus Vannin) 버스와 옛 증기·전기 철도로 다닐 수 있습니다.',
      en: 'Drive on the left. Bus Vannin buses and the heritage steam and electric railways cover the island.',
    },
    drivingSide: 'left',
    longDistance: {
      ko: '영국·아일랜드에서 비행기나 스틸 패킷(Steam Packet) 여객선으로 옵니다. 섬 안은 더글러스 로드 스트리트 버스 환승장에서 모든 노선으로 갈아탑니다.',
      en: 'Arrive by air or on the Steam Packet ferries from Britain and Ireland; on the island, Lord Street interchange in Douglas connects every bus route.',
    },
    nationalPasses: {
      ko: '고 세이버(버스)·고 익스플로어(버스+옛 철도)는 1·3·5·7일 동안 마음껏 탈 수 있는 카드입니다.',
      en: 'Go Saver (buses) and Go Explore (buses plus heritage railways) give unlimited travel for 1, 3, 5 or 7 days.',
    },
    paymentTip: {
      ko: '버스는 비접촉 카드·애플페이로 탑니다. 해외 카드도 대부분 되지만 마에스트로·아멕스는 안 됩니다. 옛 철도 표는 역에서 사세요.',
      en: 'Tap a contactless card or phone on buses; most foreign cards work, but not Maestro or Amex. Buy heritage-railway tickets at stations.',
    },
  },
  je: {
    summary: {
      ko: '좌측통행. 리버티 버스(LibertyBus)가 세인트헬리어의 리버레이션 버스터미널을 중심으로 섬 전체를 잇습니다.',
      en: 'Drive on the left. LibertyBus links the island from Liberation Station in St Helier.',
    },
    drivingSide: 'left',
    longDistance: {
      ko: '영국·아일랜드에서 비행기, 영국과 프랑스 생말로에서 배가 옵니다. 건지·사크섬으로 가는 배도 있습니다.',
      en: 'Fly in from Britain or Ireland, or sail from Britain or St Malo in France; boats also run to Guernsey and Sark.',
    },
    nationalPasses: {
      ko: '1·2·3·7일 동안 마음껏 타는 버스 패스가 있습니다. 여러 날 패스는 처음 탄 날부터 연달아 씁니다.',
      en: 'Bus passes give unlimited travel for 1, 2, 3 or 7 consecutive days from first use.',
    },
    paymentTip: {
      ko: '탈 때 기사에게 사거나 리버티 버스 앱에서 미리 사 둡니다.',
      en: 'Buy on board or in advance in the LibertyBus app.',
    },
    apps: [ta('libertybus')],
  },
  gg: {
    summary: {
      ko: '좌측통행. 섬 버스(Stagecoach 운영)가 일 년 내내 다닙니다. 사크섬은 차가 없는 섬입니다.',
      en: 'Drive on the left. Island buses (run by Stagecoach) operate all year; Sark is car-free.',
    },
    drivingSide: 'left',
    longDistance: {
      ko: '영국에서 비행기로 40분쯤, 배로 3시간쯤 걸립니다. 프랑스 생말로에서 오는 배도 있습니다. 사크섬은 세인트피터포트에서 배로 약 45분입니다.',
      en: 'About 40 minutes by air or three hours by sea from Britain, with ferries from St Malo too; Sark is about 45 minutes by boat from St Peter Port.',
    },
    paymentTip: {
      ko: '버스에서는 비접촉 결제만 됩니다(현금 안 받음). 해외 카드가 버스에서 안 되면 타운 터미너스 매장이나 공항 안내 데스크에서 충전식 패스를 사세요.',
      en: 'Buses take contactless only, no cash. If a foreign card fails on board, buy a pay-as-you-go pass at the Town Terminus shop or the airport desk.',
    },
    apps: [ta('buses-gg')],
  },
  fo: {
    summary: {
      ko: '우측통행. 섬과 섬 사이를 SSL(스트란파라스키프 란신스)의 파란 버스와 여객선이 잇습니다.',
      en: 'Drive on the right. SSL’s blue buses and ferries link the islands.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '바가르 공항이 섬 밖으로 나가는 관문입니다. 덴마크·아이슬란드로 가는 노르뇌라호 여객선은 토르스하운에서 탑니다.',
      en: 'Vágar Airport is the gateway; the Norröna ferry to Denmark and Iceland sails from Tórshavn.',
    },
    nationalPasses: {
      ko: '여행자 카드로 정해진 기간 동안 버스와 여객선을 마음껏 탈 수 있습니다(헬리콥터 제외).',
      en: 'A travel card gives unlimited buses and ferries for a set number of days (helicopters excluded).',
    },
    paymentTip: {
      ko: '날씨로 운행이 자주 취소됩니다. 출발 전 SSL 사이트(ssl.fo)의 공지를 확인하세요. 렌터카는 공항에서 바로 빌리고 반납할 수 있습니다.',
      en: 'Weather often cancels departures—check notices on ssl.fo. Rental cars can be picked up and returned at the airport.',
    },
  },
  gl: {
    summary: {
      ko: '도시와 도시를 잇는 도로가 없습니다. 마을 사이는 비행기·헬리콥터·여객선으로 이동합니다.',
      en: 'No roads link one town to another; travel between them by plane, helicopter or ship.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '에어 그린란드가 대부분의 도시를 잇습니다. 코펜하겐·레이캬비크에서 누크로 직항이 있습니다. 서해안을 따라 아크틱 우미아크 라인의 여객선 사르파크 이투크호가 4~12월에 다닙니다.',
      en: 'Air Greenland links most towns, with direct flights to Nuuk from Copenhagen and Reykjavík; Arctic Umiaq Line’s ship Sarfaq Ittuk sails the west coast April–December.',
    },
    paymentTip: {
      ko: '여름 배표는 일찍 예약하세요. 큰 도시 안에서는 버스·택시를 씁니다.',
      en: 'Book summer sailings early; in the larger towns use buses and taxis.',
    },
    apps: [ta('air-greenland')],
  },
  ru: {
    summary: {
      ko: '우측통행. 모스크바·상트페테르부르크·카잔은 지하철이 있고, 도시 사이는 기차나 국내선으로 갑니다.',
      en: 'Drive on the right. Moscow, St Petersburg and Kazan have metros; travel between cities by train or domestic flight.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '러시아 철도(RZD)의 고속열차와 시베리아 횡단철도가 도시를 잇습니다. 한국과의 직항 항공편은 없습니다.',
      en: 'Russian Railways’ fast trains and the Trans-Siberian link the cities. There are no direct flights from Korea.',
    },
    paymentTip: {
      ko: '한국 등 러시아 밖에서 발급한 비자·마스터 카드는 쓸 수 없습니다(주러시아 대사관 안내). 교통카드는 현금으로 사서 충전하세요.',
      en: 'Visa and Mastercard cards issued outside Russia do not work (Korean Embassy advice); buy and top up transport cards with cash.',
    },
    apps: [ta('yandex-go', { ko: '택시', en: 'Taxis' }), ta('yandex-maps', { ko: '길찾기·대중교통', en: 'Routes and transit' })],
  },
  xc: {
    summary: {
      ko: '좌측통행. 철도는 없고, 도시 사이는 버스와 돌무시(합승 미니버스)로 다닙니다.',
      en: 'Drive on the left. There are no railways; buses and dolmuş shared minibuses link the towns.',
    },
    drivingSide: 'left',
    longDistance: {
      ko: '남쪽 키프로스 공화국으로 들어와 그린라인 검문소로 넘어가세요. 니코시아의 레드라 팰리스와 레드라·로크마즈 거리 검문소는 걸어서만 건널 수 있습니다.',
      en: 'Enter through the Republic of Cyprus in the south and cross at a Green Line checkpoint; Ledra Palace and Ledra/Lokmacı Street in Nicosia are for pedestrians only.',
    },
    paymentTip: {
      ko: '남쪽에서 빌린 차의 보험은 북쪽에서 효력이 없어 따로 보험을 들어야 합니다. 택시는 타기 전에 요금을 정하고, 튀르키예 리라 현금을 준비하세요.',
      en: 'Insurance on cars hired in the south is not valid in the north, so buy cover separately. Agree taxi fares first and carry Turkish lira.',
    },
    apps: [
      ta('pegasus', { ko: '저가 항공', en: 'Low-cost airline' }),
    ],
  },
}

export function getCountryTransit(countryId: string): CountryTransit | undefined {
  return countryTransitById[countryId]
}
