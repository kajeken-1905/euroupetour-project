// Syria's airports, with the ways into the city (2026-11). Travel-ban country.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-dam',
    cityId: 'damascus',
    kind: 'air',
    name: '다마스쿠스 국제공항|Damascus International Airport',
    code: 'DAM',
    image: '/gateways/gw-dam.jpg',
    intl: true,
    about: '시내 남동쪽 약 25km의 공항입니다.|The airport about 25 km south-east of the city.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '시내까지 약 30~40분|About 30–40 min to the city',
      },
    ],
    note: '한국 정부 지정 여행금지국입니다. 외교부의 예외적 여권 사용 허가 없이 입국하면 처벌받을 수 있습니다.|Syria is a Korean travel-ban country; entering without the Foreign Ministry’s exceptional passport-use permission can be punished.',
    maps: 'Damascus International Airport',
    checked: '2026-11',
  },
  {
    id: 'gw-alp',
    cityId: 'aleppo',
    kind: 'air',
    name: '알레포 국제공항|Aleppo International Airport',
    code: 'ALP',
    image: '/gateways/gw-alp.jpg',
    about: '시내 동쪽 약 10km의 공항입니다.|The airport about 10 km east of the city.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '시내까지 약 20분|About 20 min to the city',
      },
    ],
    note: '한국 정부 지정 여행금지국입니다. 외교부의 예외적 여권 사용 허가 없이 입국하면 처벌받을 수 있습니다.|Syria is a Korean travel-ban country; entering without the Foreign Ministry’s exceptional passport-use permission can be punished.',
    maps: 'Aleppo International Airport',
    checked: '2026-11',
  },
]
