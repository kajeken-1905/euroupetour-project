// Iran's airports, with the ways into the city (2026-11). Travel-ban country.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-ika',
    cityId: 'tehran',
    kind: 'air',
    name: '이맘 호메이니 국제공항|Imam Khomeini International Airport',
    code: 'IKA',
    image: '/gateways/gw-ika.jpg',
    intl: true,
    about: '테헤란 남쪽 약 50km의 국제선 공항입니다.|The international airport about 50 km south of Tehran.',
    options: [
      {
        mode: 'metro',
        name: '지하철 1호선|Metro line 1',
        route: '공항역 → 시내|Airport station → city centre',
        time: '시내까지 1시간 넘게|Over an hour to the centre',
      },
      {
        mode: 'taxi',
        name: '공항 공식 택시|Official airport taxi',
        route: '도착층 택시 창구|Arrivals taxi desk',
        time: '시내까지 약 1시간|About an hour to the city',
      },
    ],
    note: '한국 정부 지정 여행금지국입니다. 외교부의 예외적 여권 사용 허가 없이 입국하면 처벌받을 수 있습니다. 공항의 무허가 택시는 타지 마세요.|Iran is a Korean travel-ban country; entering without the Foreign Ministry’s exceptional passport-use permission can be punished. Don’t take unlicensed airport taxis.',
    maps: 'Imam Khomeini International Airport',
    checked: '2026-11',
  },
  {
    id: 'gw-thr',
    cityId: 'tehran',
    kind: 'air',
    name: '메흐라바드 공항|Mehrabad Airport',
    code: 'THR',
    image: '/gateways/gw-thr.jpg',
    about: '시내 서쪽의 국내선 공항으로, 시라즈·이스파한 등으로 가는 비행기가 뜹니다.|The domestic airport west of the centre, with flights to Shiraz, Isfahan and more.',
    options: [
      {
        mode: 'metro',
        name: '지하철 4호선 지선|Metro line 4 branch',
        route: '메흐라바드 공항역|Mehrabad Airport station',
        time: '시내까지 약 30분|About 30 min to the centre',
      },
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '시내까지 약 30분|About 30 min to the centre',
      },
    ],
    maps: 'Mehrabad International Airport',
    checked: '2026-11',
  },
  {
    id: 'gw-ifn',
    cityId: 'isfahan',
    kind: 'air',
    name: '이스파한 국제공항|Isfahan International Airport',
    code: 'IFN',
    image: '/gateways/gw-ifn.jpg',
    about: '시내 북동쪽 약 25km의 공항입니다.|The airport about 25 km north-east of the city.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '시내까지 약 30~40분|About 30–40 min to the city',
      },
    ],
    maps: 'Isfahan International Airport',
    checked: '2026-11',
  },
  {
    id: 'gw-syz',
    cityId: 'shiraz',
    kind: 'air',
    name: '시라즈 국제공항|Shiraz International Airport',
    code: 'SYZ',
    image: '/gateways/gw-syz.jpg',
    about: '시내 남동쪽의 공항입니다.|The airport south-east of the city.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '시내까지 약 20분|About 20 min to the city',
      },
    ],
    maps: 'Shiraz International Airport',
    checked: '2026-11',
  },
]
