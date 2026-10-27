// Airports and main stations in Sweden. Figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-arn',
    cityId: 'stockholm',
    kind: 'air',
    name: '스톡홀름 알란다 공항|Stockholm Arlanda Airport',
    code: 'ARN',
    intl: true,
    about: '시내에서 북쪽 약 40km. 터미널 아래로 공항 급행열차가 다닙니다.|About 40 km north of the city, with the airport express under the terminals.',
    options: [
      {
        mode: 'train',
        name: '알란다 익스프레스|Arlanda Express',
        route: '터미널 → 스톡홀름 중앙역 직행|Terminals → Stockholm Central, non-stop',
        time: '18분, 15분 안팎 간격|18 min, about every 15 min',
        fare: '편도 약 320~340크로나, 온라인이 조금 쌈|About SEK 320–340 one way, a little less online',
      },
      {
        mode: 'bus',
        name: '공항버스 플뤼그부사나|Flygbussarna',
        route: '터미널 → 시티 터미널(중앙역 옆)|Terminals → City Terminal (next to Central)',
        time: '약 45분|About 45 min',
        fare: '약 120크로나|About SEK 120',
      },
      {
        mode: 'train',
        name: '근교선(SL 펜델토그)|Commuter train (SL)',
        route: '스카이시티역 → 중앙역, 약 40분|Sky City → Central, about 40 min',
        fare: 'SL 요금에 공항 통과료가 붙습니다.|SL fare plus an airport access fee',
      },
    ],
    maps: 'Stockholm Arlanda Airport',
    site: 'https://www.swedavia.com/arlanda/',
    checked: '2026-10',
  },
  {
    id: 'gw-stockholm-c',
    cityId: 'stockholm',
    kind: 'rail',
    name: '스톡홀름 중앙역|Stockholm Centralstation',
    about: '예테보리·말뫼·오슬로·코펜하겐행 열차와 키루나행 야간열차가 출발합니다.|Trains to Gothenburg, Malmö, Oslo and Copenhagen and the night train to Kiruna.',
    options: [
      {
        mode: 'metro',
        name: '지하철(T-센트랄렌)|Tunnelbana (T-Centralen)',
        route: '모든 지하철 노선이 만나는 역. 감라스탄까지 한 정거장|Where all metro lines meet; one stop to Gamla stan',
      },
      {
        mode: 'walk',
        name: '걸어서|On foot',
        route: '감라스탄(구시가지)까지 약 10분|About 10 min to Gamla stan (old town)',
      },
    ],
    maps: 'Stockholm Centralstation',
    checked: '2026-10',
  },
]
