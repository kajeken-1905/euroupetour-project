// Airports and main stations in Denmark. Figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-cph',
    cityId: 'copenhagen',
    kind: 'air',
    name: '코펜하겐 카스트루프 공항|Copenhagen Airport (Kastrup)',
    code: 'CPH',
    intl: true,
    about: '시내에서 남동쪽 약 8km. 터미널 3에 지하철역과 기차역이 붙어 있습니다.|About 8 km south-east of the centre, with metro and train stations at Terminal 3.',
    options: [
      {
        mode: 'metro',
        name: '지하철 M2|Metro M2',
        route: '공항역 → 크리스티안스하운·콩엔스 뉘토우(뉘하운)·뇌레포트|Airport → Christianshavn, Kongens Nytorv (Nyhavn), Nørreport',
        time: '약 15분, 24시간 운행|About 15 min, runs 24 hours',
        fare: '3구역 1회권 약 30크로네|3-zone single about DKK 30',
        ticket: 'DOT 앱·역 자판기|DOT app or station machines',
      },
      {
        mode: 'train',
        name: '기차|Train',
        route: '공항역 → 코펜하겐 중앙역 약 13분. 스웨덴 말뫼행도 출발|Airport → Copenhagen Central about 13 min; trains to Malmö too',
        fare: '지하철과 같은 1회권|Same ticket as the metro',
      },
    ],
    maps: 'Copenhagen Airport',
    site: 'https://www.cph.dk/en',
    checked: '2026-10',
  },
  {
    id: 'gw-kobenhavn-h',
    cityId: 'copenhagen',
    kind: 'rail',
    name: '코펜하겐 중앙역|København H',
    about: '말뫼·스톡홀름·함부르크행 열차가 출발합니다. 길 건너가 티볼리 공원입니다.|Trains to Malmö, Stockholm and Hamburg; Tivoli Gardens is across the street.',
    options: [
      {
        mode: 'walk',
        name: '걸어서|On foot',
        route: '시청 광장·스트뢰에 거리까지 약 5~10분|About 5–10 min to City Hall Square and Strøget',
      },
      {
        mode: 'metro',
        name: '지하철 M3·M4|Metro M3, M4',
        route: '→ 콩엔스 뉘토우(뉘하운)|→ Kongens Nytorv (Nyhavn)',
      },
    ],
    maps: 'København H',
    checked: '2026-10',
  },
  {
    id: 'gw-aal',
    cityId: 'aalborg',
    kind: 'air',
    name: '올보르 공항|Aalborg Airport',
    code: 'AAL',
    intl: true,
    about: '시내에서 북서쪽 약 6km입니다.|About 6 km north-west of the city.',
    options: [
      {
        mode: 'bus',
        name: '12번 버스|Bus 12',
        route: '공항 → 올보르 시내·역|Airport → city centre, station',
        time: '약 20분|About 20 min',
      },
      {
        mode: 'train',
        name: '기차|Train',
        route: '올보르 공항역 → 올보르역|Aalborg Lufthavn → Aalborg',
        time: '약 10분|About 10 min',
      },
    ],
    maps: 'Aalborg Airport',
    site: 'https://www.aal.dk/en',
    checked: '2026-10',
  },
]
