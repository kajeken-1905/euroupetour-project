// Airports and main stations in Austria. Vienna Airport rail into the centre is cut by works from
// 7 September 2026 to the end of October 2027 (wien.info, cityairporttrain.com, checked 2026-10).
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-vie',
    cityId: 'vienna',
    kind: 'air',
    name: '빈 국제공항|Vienna International Airport',
    code: 'VIE',
    intl: true,
    about:
      '시내에서 남동쪽 약 18km 슈베하트에 있습니다. 2027년 10월 말까지 철도 공사로 공항 열차 노선이 바뀌었습니다.|About 18 km south-east of the centre at Schwechat; airport rail routes are changed by works until the end of October 2027.',
    options: [
      {
        mode: 'train',
        name: '지역 급행 REX7|REX7 regional express',
        route: '공항역 → 빈 중앙역(지하철 U1, 트램 환승)|Airport → Wien Hauptbahnhof (change for U1 and trams)',
        time: '약 20분, 새벽부터 자정 무렵까지|About 20 min, early morning to around midnight',
        fare: '어른 €5.50(공항–시 경계 €2.30 + 빈 시내 €3.20), 6~14세 €2.80|Adults €5.50 (€2.30 to the city boundary + €3.20 in Vienna), ages 6–14 €2.80',
        ticket:
          'ÖBB 자판기·앱. 종이표는 타기 전에 각인하세요. 빈 시내 교통권만 있으면 €2.30 표를 더 사야 합니다.|ÖBB machines or app; stamp paper tickets before boarding. With a Vienna-only pass, add a €2.30 ticket.',
      },
      {
        mode: 'bus',
        name: 'CAT 대체 버스|CAT replacement bus',
        route: '터미널 3 도착층 앞 → 빈 미테/란트슈트라세 직행 (U3·U4 환승)|Outside Terminal 3 arrivals → Wien Mitte/Landstraße non-stop (U3, U4)',
        time: '21분, 12~15분 간격, 공항 출발 06:10~23:37|21 min, every 12–15 min, from the airport 06:10–23:37',
        fare: '편도 €14.90, 왕복 €24.90, 15세 미만 무료|€14.90 single, €24.90 return, under-15s free',
        ticket: 'cityairporttrain.com·자판기·버스 직원|cityairporttrain.com, machines or bus staff',
      },
      {
        mode: 'train',
        name: 'S반 S7 (단축 운행)|S-Bahn S7 (shortened)',
        route: '공항 → 장크트 마르크스까지만. 트램 71번으로 시내, 18번으로 중앙역|Airport → St. Marx only; tram 71 to the centre, 18 to Hauptbahnhof',
        fare: 'REX7과 같은 €5.50|Same €5.50 as REX7',
      },
    ],
    maps: 'Vienna International Airport',
    site: 'https://www.viennaairport.com/en/',
    checked: '2026-10',
  },
  {
    id: 'gw-wien-hbf',
    cityId: 'vienna',
    kind: 'rail',
    name: '빈 중앙역|Wien Hauptbahnhof',
    about:
      '2014년 문을 연 새 중앙역. 잘츠부르크·뮌헨·부다페스트·프라하·베네치아행 레일젯과 나이트젯 야간열차가 출발합니다.|The central station opened in 2014, with Railjets to Salzburg, Munich, Budapest, Prague and Venice and Nightjet sleepers.',
    options: [
      {
        mode: 'metro',
        name: '지하철 U1|U-Bahn U1',
        route: '→ 카를스플라츠 → 슈테판스플라츠(슈테판 대성당), 약 5분|→ Karlsplatz → Stephansplatz (St. Stephen’s), about 5 min',
        fare: '1회권 €3.20|Single €3.20',
      },
      {
        mode: 'tram',
        name: '트램 D|Tram D',
        route: '→ 벨베데레 궁전 → 링 거리(오페라·국회의사당)|→ Belvedere → the Ring (Opera, Parliament)',
      },
    ],
    maps: 'Wien Hauptbahnhof',
    checked: '2026-10',
  },
]
