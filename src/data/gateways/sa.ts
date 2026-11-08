// Saudi Arabia's airports and the Haramain station in Jeddah, with the ways into town (2026-11).
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-ruh',
    cityId: 'riyadh',
    kind: 'air',
    name: '킹 칼리드 국제공항|King Khalid International Airport',
    code: 'RUH',
    image: '/gateways/gw-ruh.jpg',
    intl: true,
    about: '리야드 북쪽 약 35km의 공항입니다. 터미널이 항공사·국내선·국제선에 따라 나뉘니 탑승권의 터미널을 확인하세요.|The airport about 35 km north of Riyadh; terminals are split by airline and by domestic or international flights, so check yours.',
    options: [
      {
        mode: 'metro',
        name: '리야드 메트로 옐로 라인(4호선)|Riyadh Metro Yellow Line (Line 4)',
        route: '공항 터미널역 → 킹 압둘라 금융 지구(KAFD, 환승)|Airport terminal stations → King Abdullah Financial District (KAFD, interchange)',
        ticket: '역 자판기나 앱|Station machines or the app',
      },
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '올라야까지 약 30~40분|About 30–40 min to Olaya',
      },
    ],
    maps: 'King Khalid International Airport',
    checked: '2026-11',
  },
  {
    id: 'gw-jed',
    cityId: 'jeddah',
    kind: 'air',
    name: '킹 압둘아지즈 국제공항|King Abdulaziz International Airport',
    code: 'JED',
    image: '/gateways/gw-jed.jpg',
    intl: true,
    about: '제다 북쪽의 공항으로, 메카 순례객이 가장 많이 드나듭니다. 본 터미널(터미널 1) 안에 하라메인 고속철도역이 있습니다.|The airport north of Jeddah and the main arrival point for pilgrims to Mecca; the Haramain high-speed rail station is inside the main terminal (Terminal 1).',
    options: [
      {
        mode: 'train',
        name: '하라메인 고속철도|Haramain high-speed railway',
        route: '공항역 → 제다 알술라이마니야 · 메디나|Airport station → Jeddah Al-Sulaimaniyah and Medina',
      },
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '알발라드·코르니시까지 약 30분|About 30 min to Al-Balad and the Corniche',
      },
    ],
    note: '하라메인 철도의 메카역은 무슬림만 이용할 수 있습니다.|The Haramain line’s Mecca station is for Muslims only.',
    maps: 'King Abdulaziz International Airport',
    checked: '2026-11',
  },
  {
    id: 'gw-jeddah-haramain',
    cityId: 'jeddah',
    kind: 'rail',
    name: '제다 알술라이마니야역|Jeddah Al-Sulaimaniyah station',
    image: '/gateways/gw-jeddah-haramain.jpg',
    about: '하라메인 고속철도의 제다 시내역으로, 메디나·공항행 열차가 출발합니다.|The Haramain high-speed railway’s city station in Jeddah, for trains to Medina and the airport.',
    options: [
      {
        mode: 'train',
        name: '하라메인 고속철도|Haramain high-speed railway',
        route: '→ 킹 압둘아지즈 공항 · 메디나|→ King Abdulaziz Airport and Medina',
      },
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '→ 알발라드 약 20분|→ Al-Balad about 20 min',
      },
    ],
    note: '메카 성역과 메카역은 무슬림만 들어갈 수 있습니다.|Mecca’s holy area and station are for Muslims only.',
    maps: 'Haramain High Speed Railway Jeddah Station',
    checked: '2026-11',
  },
  {
    id: 'gw-ulh',
    cityId: 'alula',
    kind: 'air',
    name: '알울라 국제공항|AlUla International Airport',
    code: 'ULH',
    image: '/gateways/gw-ulh.jpg',
    intl: true,
    about: '알울라 북쪽의 작은 공항으로, 리야드·제다 국내선과 일부 국제선이 들어옵니다.|The small airport north of AlUla, with domestic flights from Riyadh and Jeddah and some international routes.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '구시가까지 약 30분|About 30 min to the old town',
      },
    ],
    note: '명소가 흩어져 있어 공항에서 차를 빌리는 사람이 많습니다.|Sights are far apart, so many travellers rent a car at the airport.',
    maps: 'AlUla International Airport',
    checked: '2026-11',
  },
]
