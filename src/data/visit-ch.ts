import type { HighlightVisit } from '../types'
import { v } from './visit-helper'

const FREE = '입장은 무료입니다.|Entry is free.'
const LIFT = '케이블카·산악열차는 계절 운행이고 날씨에 따라 운휴하니 당일 운행 여부를 확인하세요.|Lifts and mountain trains are seasonal and weather-dependent—check on the day.'
const PASS = '스위스 트래블 패스 소지자는 할인됩니다.|Swiss Travel Pass holders get a discount.'

/** Switzerland, Liechtenstein */
export const visitCh: Record<string, HighlightVisit> = {
  // Zurich
  'zurich-h1': v(30, 45),
  'zurich-h2': v(30, 45, { b: 'no', s: 'https://www.grossmuenster.ch/en/', n: '성당은 무료이고 탑 전망대만 유료입니다.|The church is free; only the tower climb is ticketed.' }),
  'zurich-h3': v(15, 20),
  'zurich-h4': v(60, 90, { s: 'https://www.zsg.ch/en', n: '유람선은 스위스 트래블 패스로 탈 수 있습니다.|Lake boats are covered by the Swiss Travel Pass.' }),
  'zurich-h5': v(120, 150, { c: 'mon', b: 'no', s: 'https://www.kunsthaus.ch/en/', k: '2026-10' }),
  'zurich-h6': v(30, 60),
  'zurich-h7': v(20, 30, { s: 'https://www.fraumuenster.ch/en/', n: '샤갈 스테인드글라스를 보는 입장은 유료입니다.|There is an entry fee to see the Chagall windows.' }),
  'zurich-h8': v(10, 15),
  'zurich-h9': v(15, 20),
  'zurich-h10': v(90, 120, { c: 'daily', b: 'rec', s: 'https://www.lindt-home-of-chocolate.com/en/', n: '시간 지정 입장이라 주말에는 며칠 전에 매진됩니다.|Entry is timed and weekends sell out days ahead.', k: '2026-10' }),
  // Geneva
  'geneva-h1': v(15, 20, { n: '강풍이 불거나 영하로 내려가면 분수를 끕니다.|The fountain is switched off in strong wind or frost.' }),
  'geneva-h2': v(60, 90),
  'geneva-h3': v(30, 45, { s: 'https://www.cathedrale-geneve.ch/en/', n: '성당은 무료이고 탑과 지하 유적은 유료입니다.|The cathedral is free; the towers and archaeological site are ticketed.' }),
  'geneva-h4': v(60, 75, { c: 'sat,sun', b: 'req', s: 'https://www.ungeneva.org/en/visit', n: '가이드 투어로만 볼 수 있고 여권이 필요합니다.|Seen on guided tours only; bring your passport.' }),
  'geneva-h5': v(45, 60),
  'geneva-h6': v(10, 15),
  'geneva-h7': v(10, 15),
  'geneva-h8': v(15, 20),
  // Bern
  'bern-h1': v(15, 20, { n: '매시 정각 4분 전부터 인형 시계가 움직입니다.|The figures start moving four minutes before each hour.' }),
  'bern-h2': v(60, 90),
  'bern-h3': v(20, 30, { b: 'no', s: 'https://tierpark-bern.ch/baerenpark/', n: '입장은 무료이고 겨울에는 곰이 겨울잠을 잡니다.|Free; the bears hibernate in winter.' }),
  'bern-h4': v(60, 60, { b: 'req', s: 'https://www.parlament.ch/en/services/visiting-the-parliament-building', n: '내부 투어는 무료이며 여권이 필요합니다. 의회 회기 중에는 투어가 없습니다.|Tours are free and need a passport. None run while parliament is in session.', k: '2026-10' }),
  'bern-h5': v(30, 60),
  'bern-h6': v(30, 45, { n: '성당은 무료이고 탑 전망대만 유료입니다.|The minster is free; only the tower climb is ticketed.' }),
  // Lucerne
  'lucerne-h1': v(15, 20),
  'lucerne-h2': v(60, 180, { s: 'https://www.lakelucerne.ch/en/', n: '유람선은 스위스 트래블 패스로 탈 수 있습니다.|Lake boats are covered by the Swiss Travel Pass.' }),
  'lucerne-h3': v(15, 20),
  'lucerne-h4': v(45, 60),
  'lucerne-h5': v(180, 240, { c: 'daily', s: 'https://www.verkehrshaus.ch/en/' }),
  'lucerne-h6': v(10, 15),
  'lucerne-h7': v(15, 20),
  'lucerne-h8': v(240, 300, { s: 'https://www.rigi.ch/en', n: '리기 산악열차와 케이블카는 스위스 트래블 패스로 무료입니다.|The Rigi railways and cable car are free with the Swiss Travel Pass.' }),
  // Interlaken
  'interlaken-h1': v(30, 45),
  'interlaken-h2': v(120, 180, { s: 'https://www.bls-schiff.ch/en' }),
  'interlaken-h3': v(90, 120, { s: 'https://www.bls-schiff.ch/en' }),
  'interlaken-h4': v(75, 90, { s: 'https://www.jungfrau.ch/en-gb/harder-kulm/', n: '푸니쿨라는 봄부터 늦가을까지만 다닙니다.|The funicular runs from spring to late autumn only.' }),
  'interlaken-h5': v(300, 360, { b: 'req', s: 'https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/', n: '5~10월에는 융프라우 철도 좌석 예약(유료)이 의무이고, 그 밖의 달에도 권장됩니다.|A paid seat reservation on the Jungfrau Railway is compulsory from May to October and recommended in other months.', k: '2026-10' }),
  // Basel
  'basel-h1': v(30, 45, { b: 'no', s: 'https://www.baslermuenster.ch/' }),
  'basel-h2': v(120, 150, { c: 'mon', b: 'no', s: 'https://kunstmuseumbasel.ch/en/', k: '2026-10' }),
  'basel-h3': v(30, 45),
  'basel-h4': v(15, 20),
  'basel-h5': v(10, 15),
  // Zermatt
  'zermatt-h1': v(30, 60),
  'zermatt-h2': v(150, 180, { c: 'daily', s: 'https://www.gornergrat.ch/en/', n: PASS }),
  'zermatt-h3': v(30, 45),
  'zermatt-h4': v(60, 90, { n: '호수는 여름에만 얼음이 녹아 마터호른이 비칩니다.|The lake is ice-free—and mirrors the Matterhorn—only in summer.' }),
  'zermatt-h5': v(45, 60, { s: 'https://zermatt.swiss/en/discover-experience/tradition-culture/museum' }),
  // Lausanne
  'lausanne-h1': v(30, 45, { b: 'no', s: 'https://www.cathedrale-lausanne.ch/', n: '성당은 무료이고 탑만 유료입니다.|The cathedral is free; only the tower is ticketed.' }),
  'lausanne-h2': v(45, 60),
  'lausanne-h3': v(90, 120, { n: '비수기에는 월요일에 쉽니다.|Closed on Mondays outside the summer season.' }),
  'lausanne-h4': v(30, 45),
  'lausanne-h5': v(15, 20),
  // Lugano
  'lugano-h1': v(60, 120),
  'lugano-h2': v(45, 60),
  'lugano-h3': v(90, 120, { s: 'https://www.montesansalvatore.ch/en/', n: '푸니쿨라는 겨울에 운휴합니다.|The funicular closes in winter.' }),
  'lugano-h4': v(30, 45),
  'lugano-h5': v(30, 45),
  // Montreux
  'montreux-h1': v(90, 120, { c: 'daily', s: 'https://www.chillon.ch/en/', n: PASS.replace('할인됩니다', '무료입니다').replace('get a discount', 'enter free') }),
  'montreux-h2': v(45, 60),
  'montreux-h3': v(10, 15),
  'montreux-h4': v(15, 20),
  'montreux-h5': v(180, 240, { n: LIFT }),
  // Grindelwald
  'grindelwald-h1': v(20, 30),
  'grindelwald-h2': v(150, 240, { s: 'https://www.jungfrau.ch/en-gb/grindelwaldfirst/', n: LIFT }),
  'grindelwald-h3': v(120, 180, { s: 'https://www.maennlichen.ch/en/', n: LIFT }),
  'grindelwald-h4': v(60, 90, { s: 'https://www.outdoor.ch/en/outdoor-experience/glacier-canyon-grindelwald', n: '봄부터 가을까지만 엽니다.|Open spring to autumn only.' }),
  'grindelwald-h5': v(30, 45),
  // St. Moritz
  'st-moritz-h1': v(45, 60),
  'st-moritz-h2': v(45, 60),
  'st-moritz-h3': v(120, 180, { s: 'https://www.mountains.ch/en', n: LIFT }),
  'st-moritz-h4': v(45, 60, { c: 'mon', s: 'https://segantini-museum.ch/en/home_2/', n: '월요일에 쉬고, 봄(4월 중순~5월 중순)과 늦가을(10월 하순~12월 초)에는 휴관합니다.|Closed on Mondays and between seasons (mid-April to mid-May and late October to early December).', k: '2026-10' }),
  'st-moritz-h5': v(20, 30),

  // Vaduz
  'vaduz-h1': v(20, 30, { n: '대공 가족이 사는 곳이라 내부는 공개하지 않습니다. 밖에서만 볼 수 있습니다.|The princely family lives here, so the interior is not open—view it from outside.' }),
  'vaduz-h2': v(30, 45),
  'vaduz-h3': v(75, 90, { c: 'mon', s: 'https://www.kunstmuseum.li/en', k: '2026-10' }),
  'vaduz-h4': v(30, 40, { b: 'no', n: FREE }),
  'vaduz-h5': v(30, 45),
  'vaduz-h6': v(10, 15),
  // Schaan
  'schaan-h1': v(30, 45),
  'schaan-h2': v(10, 15),
  'schaan-h3': v(15, 120, { s: 'https://www.tak.li/', n: '공연 관람은 예매가 필요합니다.|Performances need advance tickets.' }),
  'schaan-h4': v(90, 180),
  'schaan-h5': v(15, 20),
  // Malbun
  'malbun-h1': v(180, 360),
  'malbun-h2': v(120, 240),
  'malbun-h3': v(30, 45, { n: LIFT }),
  'malbun-h4': v(45, 60),
  'malbun-h5': v(30, 45),
}
