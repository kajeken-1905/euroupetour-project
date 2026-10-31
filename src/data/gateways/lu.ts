// Gateways in Luxembourg, where buses, trams and 2nd-class trains are free.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-lux',
    cityId: 'luxembourg-city',
    kind: 'air',
    name: '룩셈부르크 핀델 공항|Luxembourg Airport (Findel)',
    code: 'LUX',
    image: '/gateways/gw-lux.jpg',
    intl: true,
    about: '시내에서 동쪽 약 6km입니다.|About 6 km east of the city.',
    options: [
      {
        mode: 'bus',
        name: '16·29번 버스|Buses 16, 29',
        route: '공항 → 시내·룩셈부르크역|Airport → centre, Luxembourg station',
        time: '약 20~25분|About 20–25 min',
        fare: '무료 — 룩셈부르크는 대중교통이 전부 무료입니다(1등석 열차 제외).|Free — all public transport in Luxembourg is free (except 1st class on trains)',
      },
    ],
    maps: 'Luxembourg Airport',
    site: 'https://www.lux-airport.lu/en/',
    checked: '2026-10',
  },
  {
    id: 'gw-luxembourg-gare',
    cityId: 'luxembourg-city',
    kind: 'rail',
    name: '룩셈부르크역|Gare de Luxembourg',
    image: '/gateways/gw-luxembourg-gare.jpg',
    about: '구시가에서 남쪽으로 페트뤼스 계곡 건너편에 있는 중앙역입니다. 파리 동역행 TGV(약 2시간 10분)와 브뤼셀행 기차, 비안덴·에히터나흐 쪽 국내선이 출발합니다.|The main station, south of the old town across the Pétrusse valley, with TGVs to Paris Gare de l’Est (about 2 hr 10), trains to Brussels and domestic lines towards Vianden and Echternach.',
    options: [
      {
        mode: 'tram',
        name: '트램 T1|Tram T1',
        route: '가르 상트랄 정류장 → 아밀리우스(구시가)·키르히베르크|Gare Centrale stop → Hamilius (old town), Kirchberg',
        time: '아밀리우스까지 약 5분|About 5 min to Hamilius',
        fare: '무료 — 룩셈부르크는 대중교통이 전부 무료입니다(1등석 열차 제외).|Free — all public transport in Luxembourg is free (except 1st class on trains)',
      },
      {
        mode: 'bus',
        name: '29번 버스|Bus 29',
        route: '역 버스 정류장 → 핀델 공항|Station bus stops → Findel airport',
        time: '약 20분|About 20 min',
      },
      {
        mode: 'walk',
        name: '걸어서|On foot',
        route: '아돌프 다리를 건너 아름 광장까지 약 20분|About 20 min over the Adolphe Bridge to the Place d’Armes',
      },
    ],
    maps: '49.5998,6.1339',
    site: 'https://www.cfl.lu/en-GB/network/station/Gare-de-Luxembourg',
    checked: '2026-10',
  },
]
