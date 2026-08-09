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
} as const

type AppId = keyof typeof APP_CATALOG

function ta(id: AppId, note?: { ko: string; en: string }): TransitApp {
  return note ? { ...APP_CATALOG[id], note } : { ...APP_CATALOG[id] }
}

export const countryTransitById: Record<string, CountryTransit> = {
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
      ko: '도시 교통은 카드·모바일 결제 중심. 소도시는 현금 키오스크도 있습니다.',
      en: 'City transit is mostly card/mobile; smaller towns may still use cash kiosks.',
    },
    apps: [
      ta('cp', { ko: '국영 기차', en: 'National trains' }),
      ta('rede-expressos', { ko: '장거리 버스', en: 'Coach buses' }),
      ta('uber', { ko: '주요 도시', en: 'Major cities' }),
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
      ko: '대도시는 교통카드·스마트폰 탭 가능. 택시 앱(Free Now, Cabify)과 Uber 사용 지역을 확인하세요.',
      en: 'Big cities support transit cards or phone tap. Check Free Now, Cabify, and Uber coverage.',
    },
    apps: [
      ta('renfe', { ko: '기차·AVE', en: 'Trains / AVE' }),
      ta('alsa', { ko: '장거리 버스', en: 'Coach buses' }),
      ta('citymapper', { ko: '마드리드·바르셀로나', en: 'Madrid & Barcelona' }),
    ],
  },
}

export const cityTransitById: Record<string, CityTransit> = {
  // —— Portugal ——
  lisbon: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항 메트로(vermelho)로 Saldanha·Baixa 방면 약 25–40분. Uber/택시 약 15–25€.',
      en: 'Metro (red line) toward Saldanha/Baixa ~25–40 min. Uber/taxi about €15–25.',
    },
    howTo: {
      ko: 'Viva Viagem / Navegante 카드 또는 교통 앱. 90분 환승 티켓·일일권이 편합니다. 28번 트램은 혼잡하니 일찍 타세요.',
      en: 'Viva Viagem / Navegante card or transit apps. 90-min transfers or day passes work well. Tram 28 is crowded—go early.',
    },
    apps: [
      ta('citymapper'),
      ta('carris', { ko: '시내 버스·트램', en: 'City bus & tram' }),
      ta('metro-lisboa'),
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
      ko: '메트로 E선으로 시내(트린다지 등) 약 30–40분. 택시·Uber 약 20–30€.',
      en: 'Metro line E to downtown (e.g. Trindade) ~30–40 min. Taxi/Uber about €20–30.',
    },
    howTo: {
      ko: 'Andante 카드로 메트로·버스 통합. 존(zone)별 요금. Sao Bento–Campanhã 기차·시내 이동에 유용합니다.',
      en: 'Andante card covers metro and buses by zone. Handy with São Bento–Campanhã trains.',
    },
    apps: [
      ta('citymapper'),
      ta('metro-porto'),
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
      ta('uber'),
    ],
  },
  braga: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '포르투 공항에서 버스·기차 환승 또는 Uber(약 40–50분).',
      en: 'From Porto airport: bus/train transfer or Uber (~40–50 min).',
    },
    howTo: {
      ko: '시내는 도보·시내버스. Bom Jesus는 버스 또는 Uber + 언덕 엘리베이터/계단.',
      en: 'Walk or city bus downtown. Bom Jesus: bus/Uber plus funicular or stairs.',
    },
    apps: [
      ta('cp'),
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
      ta('uber'),
    ],
  },
  // —— Spain ——
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
      ta('free-now'),
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
      ta('free-now'),
      ta('cabify'),
    ],
    tip: {
      ko: '사그라다 파밀리아·고딕 지구는 메트로+도보. 소매치기 주의로 가방은 앞으로.',
      en: 'Sagrada Família and Gothic Quarter: metro + walk. Watch for pickpockets—bag in front.',
    },
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
      ta('cabify'),
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
      ta('uber'),
      ta('cabify'),
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
      ta('uber'),
    ],
    tip: {
      ko: '여름엔 버스가 빨리 찹니다. 동굴 티켓·버스 시간을 같이 보세요.',
      en: 'Summer buses fill fast—align cave tickets with bus times.',
    },
  },
  gibraltar: {
    modes: ['bus', 'taxi', 'walk', 'rideshare'],
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
      ta('uber'),
      ta('cabify'),
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
      ta('uber'),
    ],
  },
}

export function getCountryTransit(countryId: string): CountryTransit | undefined {
  return countryTransitById[countryId]
}

export function getCityTransit(cityId: string): CityTransit | undefined {
  return cityTransitById[cityId]
}
