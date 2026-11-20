// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-tbs',
    cityId: 'tbilisi',
    kind: 'air',
    name: '트빌리시 국제공항|Tbilisi International Airport',
    code: 'TBS',
    image: '/gateways/gw-tbs.jpg',
    intl: true,
    about: '시내에서 남동쪽 약 17km입니다.|About 17 km south-east of the city.',
    options: [
      {
        mode: 'bus',
        name: '337번 버스|Bus 337',
        route: '공항 → 기차역·자유 광장|Airport → railway station, Freedom Square',
        time: '약 40분|About 40 min',
        ticket: '교통카드 메트로머니나 비접촉 카드|Metromoney card or contactless',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Tbilisi International Airport',
    site: 'https://www.tbilisiairport.com/en',
    checked: '2026-10',
  },
  {
    id: 'gw-kut',
    cityId: 'kutaisi',
    kind: 'air',
    name: '쿠타이시 국제공항|Kutaisi International Airport',
    code: 'KUT',
    image: '/gateways/gw-kut.jpg',
    intl: true,
    about: '위즈에어 거점. 쿠타이시 시내에서 약 20km이고 트빌리시·바투미행 버스가 도착편에 맞춰 다닙니다.|A Wizz Air base about 20 km from Kutaisi, with buses to Tbilisi and Batumi timed with flights.',
    options: [
      {
        mode: 'bus',
        name: '공항버스(Georgian Bus 등)|Airport coaches (Georgian Bus and others)',
        route: '공항 → 쿠타이시 시내·트빌리시(약 4시간)·바투미|Airport → Kutaisi, Tbilisi (about 4 h), Batumi',
      },
    ],
    maps: 'Kutaisi International Airport',
    site: 'https://www.kutaisi.aero/en',
    checked: '2026-10',
  },
  {
    id: 'gw-bus',
    cityId: 'batumi',
    kind: 'air',
    name: '바투미 국제공항|Batumi International Airport',
    code: 'BUS',
    image: '/gateways/gw-bus.jpg',
    intl: true,
    about: '흑해 해변의 바투미 시내에서 남쪽 약 5km, 튀르키예 국경 가까이입니다.|About 5 km south of Batumi on the Black Sea, close to the Turkish border.',
    options: [
      {
        mode: 'bus',
        name: '10번 버스|Bus 10',
        route: '공항 → 바투미 시내|Airport → Batumi centre',
        time: '약 20분|About 20 min',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Batumi International Airport',
    site: 'https://www.batumiairport.com/en',
    checked: '2026-10',
  },
  {
    id: 'gw-mestia',
    cityId: 'mestia',
    kind: 'air',
    name: '메스티아 타마르 여왕 공항|Mestia Queen Tamar Airport',
    image: '/gateways/gw-mestia.jpg',
    about: '스바네티 메스티아 가까이의 작은 산악 공항(해발 1,480m)으로, 국내선만 다닙니다. 트빌리시 근교 나타흐타리 비행장과 쿠타이시에서 정기편이 옵니다. 산악 날씨로 결항이 잦을 수 있습니다.|A small mountain airport (1,480 m) close to Mestia in Svaneti, with domestic flights only: regular services from Natakhtari airfield near Tbilisi and from Kutaisi. Mountain weather can cancel flights.',
    options: [
      {
        mode: 'taxi',
        name: '택시|Taxi',
        route: '공항 → 메스티아 시내|Airport → Mestia',
      },
    ],
    maps: 'Mestia Queen Tamar Airport',
    site: 'https://www.airports.ge/en/about-us/airports/mestia',
    checked: '2026-11',
  },
]
