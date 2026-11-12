// Yemen's airports, with the ways into town (2026-11). Travel-ban country.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-ade',
    cityId: 'aden',
    kind: 'air',
    name: '아덴 국제공항|Aden International Airport',
    code: 'ADE',
    image: '/gateways/gw-ade.jpg',
    intl: true,
    about: '시내 가까운 공항으로, 지금 예멘의 주요 국제선 공항입니다. 사나 공항과 달리 외국인도 출국할 수 있습니다.|The airport close to the city, now Yemen’s main international gateway; unlike Sana’a, foreigners may depart from here.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '시내까지 약 15분|About 15 min to the city',
      },
    ],
    note: '한국 정부 지정 여행금지국입니다. 외교부의 예외적 여권 사용 허가 없이 입국하면 처벌받을 수 있습니다.|Yemen is a Korean travel-ban country; entering without the Foreign Ministry’s exceptional passport-use permission can be punished.',
    maps: 'Aden International Airport',
    checked: '2026-11',
  },

  {
    id: 'gw-sct',
    cityId: 'socotra',
    kind: 'air',
    name: '소코트라 공항|Socotra Airport',
    code: 'SCT',
    image: '/gateways/gw-sct.jpg',
    about: '섬 북쪽 하디부 서쪽의 공항입니다.|The airport west of Hadibu on the north coast.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '하디부까지 약 20분|About 20 min to Hadibu',
      },
    ],
    note: '한국 정부 지정 여행금지국입니다. 외교부의 예외적 여권 사용 허가 없이 입국하면 처벌받을 수 있습니다.|Yemen is a Korean travel-ban country; entering without the Foreign Ministry’s exceptional passport-use permission can be punished.',
    maps: 'Socotra Airport',
    checked: '2026-11',
  },
]
