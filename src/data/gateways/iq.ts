// Iraq's airports, with the ways into the city (2026-11). Travel-ban country.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-bgw',
    cityId: 'baghdad',
    kind: 'air',
    name: '바그다드 국제공항|Baghdad International Airport',
    code: 'BGW',
    image: '/gateways/gw-bgw.jpg',
    intl: true,
    about: '시내 서쪽 약 16km의 공항입니다.|The airport about 16 km west of the city.',
    options: [
      {
        mode: 'taxi',
        name: '경호 차량·호텔 픽업|Escorted car or hotel pickup',
        route: '공항 앞|Outside the terminal',
        time: '시내까지 약 30분|About 30 min to the city',
      },
    ],
    note: '한국 정부 지정 여행금지국입니다. 외교부의 예외적 여권 사용 허가 없이 입국하면 처벌받을 수 있고, 외교부는 경호가 붙은 차로만 다니라고 권고합니다.|Iraq is a Korean travel-ban country; entering without the Foreign Ministry’s exceptional passport-use permission can be punished, and the ministry advises travelling only in escorted vehicles.',
    maps: 'Baghdad International Airport',
    checked: '2026-11',
  },
  {
    id: 'gw-ebl',
    cityId: 'erbil',
    kind: 'air',
    name: '에르빌 국제공항|Erbil International Airport',
    code: 'EBL',
    image: '/gateways/gw-ebl.jpg',
    intl: true,
    about: '시내 북서쪽의 쿠르디스탄 지역 공항으로, 도착 비자 창구가 있습니다.|The Kurdistan Region airport north-west of the city, with a visa-on-arrival desk.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '시내까지 약 15분|About 15 min to the city',
      },
    ],
    note: '한국 정부 지정 여행금지국입니다. 외교부의 예외적 여권 사용 허가 없이 입국하면 처벌받을 수 있고, 외교부는 경호가 붙은 차로만 다니라고 권고합니다.|Iraq is a Korean travel-ban country; entering without the Foreign Ministry’s exceptional passport-use permission can be punished, and the ministry advises travelling only in escorted vehicles.',
    maps: 'Erbil International Airport',
    checked: '2026-11',
  },
  {
    id: 'gw-bsr',
    cityId: 'basra',
    kind: 'air',
    name: '바스라 국제공항|Basra International Airport',
    code: 'BSR',
    image: '/gateways/gw-bsr.jpg',
    about: '시내 북서쪽의 공항입니다.|The airport north-west of the city.',
    options: [
      {
        mode: 'taxi',
        name: '경호 차량·호텔 픽업|Escorted car or hotel pickup',
        route: '공항 앞|Outside the terminal',
        time: '시내까지 약 30분|About 30 min to the city',
      },
    ],
    note: '한국 정부 지정 여행금지국입니다. 외교부의 예외적 여권 사용 허가 없이 입국하면 처벌받을 수 있고, 외교부는 경호가 붙은 차로만 다니라고 권고합니다.|Iraq is a Korean travel-ban country; entering without the Foreign Ministry’s exceptional passport-use permission can be punished, and the ministry advises travelling only in escorted vehicles.',
    maps: 'Basra International Airport',
    checked: '2026-11',
  },
]
