import type { HighlightVisit } from '../types'
import { v } from './visit-helper'

const LIFT = '케이블카·산악열차는 계절 운행이고 날씨에 따라 운휴하니 당일 운행 여부를 확인하세요.|Lifts and mountain trains are seasonal and weather-dependent—check on the day.'
const PASS = '스위스 트래블 패스 소지자는 할인됩니다.|Swiss Travel Pass holders get a discount.'

/** Switzerland, Liechtenstein */
export const visitCh: Record<string, HighlightVisit> = {
  // Zurich
  'zurich-h1': v(30, 45),
  'zurich-h2': v(30, 45, { c: 'daily', b: 'no', s: 'https://reformiert-zuerich.ch/kirchgemeinde/kirchen/grossmuenster/', n: '성당은 무료이고 탑 전망대만 유료입니다.|The church is free; only the tower climb is ticketed.', k: '2026-10' }),
  'zurich-h3': v(15, 20),
  'zurich-h4': v(60, 90, { s: 'https://www.zsg.ch/en', n: '유람선은 스위스 트래블 패스로 탈 수 있습니다.|Lake boats are covered by the Swiss Travel Pass.' }),
  'zurich-h5': v(120, 150, { c: 'mon', b: 'no', s: 'https://www.kunsthaus.ch/en/', k: '2026-10' }),
  'zurich-h6': v(30, 60),
  'zurich-h7': v(20, 30, { s: 'https://reformiert-zuerich.ch/kirchgemeinde/kirchen/fraumuenster/', n: '샤갈 스테인드글라스를 보는 입장은 유료입니다. 일요일은 예배 뒤 12시부터 관람할 수 있고, 행사로 시간이 자주 바뀝니다.|There is an entry fee to see the Chagall windows. On Sundays visits start at noon after the service, and events often change the hours.', k: '2026-10' }),
  'zurich-h8': v(10, 15, { c: 'daily', b: 'no', s: 'https://www.zuerich.com/en/visit/attractions/st-peter', n: '입장 무료. 평일 9:00~18:00, 주말 9:00~16:00.|Free. Weekdays 9:00–18:00, weekends 9:00–16:00.', k: '2026-10' }),
  'zurich-h9': v(15, 20),
  'zurich-h10': v(90, 120, { c: 'daily', b: 'rec', s: 'https://www.lindt-home-of-chocolate.com/en/', n: '시간 지정 입장이라 주말에는 며칠 전에 매진됩니다.|Entry is timed and weekends sell out days ahead.', k: '2026-10' }),
  'zurich-h11': v(300, 360, { n: '취리히에서 기차로 라인 폭포 역(슐로스 라우펜)까지 약 50분입니다. 폭포 가운데 바위로 가는 배는 봄~가을에 다닙니다.|About 50 min by train from Zurich to Schloss Laufen am Rheinfall; boats to the rock in the middle of the falls run spring to autumn.' }),
  // Geneva
  'geneva-h1': v(15, 20, { n: '강풍이 불거나 영하로 내려가면 분수를 끕니다.|The fountain is switched off in strong wind or frost.' }),
  'geneva-h2': v(60, 90),
  'geneva-h3': v(30, 45, { s: 'https://www.cathedrale-geneve.ch/en/', n: '성당은 무료이고 탑과 지하 유적은 유료입니다.|The cathedral is free; the towers and archaeological site are ticketed.', k: '2026-10' }),
  'geneva-h4': v(60, 75, { c: 'sat,sun', b: 'req', s: 'https://www.ungeneva.org/en/visit', n: '가이드 투어로만 볼 수 있고 온라인 예약이 필수입니다. 매달 20일에 다음 달 자리가 열리고 몇 주 전에 매진되기도 합니다. 여권을 지참하고 30분 전에 프레니 문에 도착하세요. 보수 공사로 투어가 줄어든 상태입니다.|Guided tours only, booked online. Next month’s slots open on the 20th and can sell out weeks ahead. Bring your passport and reach the Pregny Gate 30 minutes early. Tours are reduced during renovation works.' }),
  'geneva-h5': v(45, 60),
  'geneva-h6': v(10, 15),
  'geneva-h7': v(10, 15),
  'geneva-h8': v(15, 20),
  // Bern
  'bern-h1': v(15, 20, { n: '매시 정각 4분 전부터 인형 시계가 움직입니다.|The figures start moving four minutes before each hour.' }),
  'bern-h2': v(60, 90),
  'bern-h3': v(20, 30, { c: 'daily', b: 'no', s: 'https://tierpark-bern.ch/baerenpark/', n: '입장은 무료이고 겨울에는 곰이 겨울잠을 잡니다.|Free; the bears hibernate in winter.', k: '2026-10' }),
  'bern-h4': v(60, 60, { b: 'req', s: 'https://www.parlament.ch/en/services/visiting-the-parliament-building', n: '내부 투어는 무료이며 여권이 필요합니다. 의회 회기 중에는 투어가 없습니다.|Tours are free and need a passport. None run while parliament is in session.', k: '2026-10' }),
  'bern-h5': v(30, 60),
  'bern-h6': v(30, 45, { c: 'daily', b: 'no', s: 'https://www.bernermuenster.ch/de/berner-muenster/infos-kontakt/oeffnungszeiten.php', n: '성당은 무료이고 탑 전망대만 유료입니다. 겨울(10월 중순부터)에는 평일 낮 12시 이후에만 열고 탑은 15:30에 입장을 마감합니다.|The minster is free; only the tower climb is ticketed. In winter (from mid-October) it opens on weekdays only from noon, with last tower entry at 15:30.', k: '2026-10' }),
  'bern-h7': v(30, 45, { s: 'https://www.einstein-bern.ch/', n: '매일 10~17시. 겨울에는 쉬어서 2026년은 2월 4일~12월 18일에만 엽니다. 어른 CHF 8, 스위스 트래블 패스 소지자 CHF 6.|Daily 10:00–17:00, closed in winter: in 2026 open 4 February to 18 December. Adults CHF 8, CHF 6 with a Swiss Travel Pass.', k: '2026-10' }),
  // Lucerne
  'lucerne-h1': v(15, 20),
  'lucerne-h2': v(60, 180, { s: 'https://www.lakelucerne.ch/en/', n: '유람선은 스위스 트래블 패스로 탈 수 있습니다.|Lake boats are covered by the Swiss Travel Pass.' }),
  'lucerne-h3': v(15, 20),
  'lucerne-h4': v(45, 60),
  'lucerne-h5': v(180, 240, { c: 'daily', s: 'https://www.verkehrshaus.ch/en/', k: '2026-10' }),
  'lucerne-h6': v(10, 15),
  'lucerne-h7': v(15, 20, { c: 'daily', b: 'no', s: 'https://www.luzern.com/de/poi/jesuitenkirche', n: '입장 무료. 월·목요일은 청소 때문에 9:30에 엽니다.|Free. Opens at 9:30 on Mondays and Thursdays because of cleaning.', k: '2026-10' }),
  'lucerne-h8': v(240, 300, { s: 'https://www.rigi.ch/en', n: '리기 산악열차와 케이블카는 스위스 트래블 패스로 무료이고, 산악열차는 연중 운행합니다.|The Rigi railways and cable car are free with the Swiss Travel Pass; the cogwheel trains run all year.', k: '2026-10' }),
  'lucerne-h9': v(240, 360, { s: 'https://www.pilatus.ch/', n: '톱니바퀴 열차는 5월~11월에만 다닙니다(2026년은 5월 11일~11월 29일). 알프나흐슈타트행 배는 10월 중순까지입니다.|The cogwheel railway runs May–November only (11 May–29 November in 2026); boats to Alpnachstad run until mid-October.', k: '2026-10', x: [['크리엔스 쪽 곤돌라와 케이블카는 정비로 2026년 11월 27일까지 쉽니다.|The Kriens gondola and cableway are closed for maintenance until 27 November 2026.', '2026-11-27']] }),
  'lucerne-h10': v(300, 360, { s: 'https://www.titlis.ch/', n: '루체른에서 기차로 엥겔베르크까지 약 45분, 이어서 케이블카를 세 번 갈아탑니다. 맑은 날 아침에 출발하세요.|About 45 min by train from Lucerne to Engelberg, then three cable cars; leave early on a clear day.' }),
  // Interlaken
  'interlaken-h1': v(30, 45),
  'interlaken-h2': v(120, 180, { s: 'https://www.bls-schiff.ch/en' }),
  'interlaken-h3': v(90, 120, { s: 'https://www.bls-schiff.ch/en' }),
  'interlaken-h4': v(75, 90, { s: 'https://www.jungfrau.ch/en-gb/harder-kulm/', n: '푸니쿨라는 4월 초부터 11월 말까지만 다닙니다.|The funicular runs from early April to late November only.', k: '2026-10' }),
  'interlaken-h5': v(300, 360, { b: 'req', s: 'https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/', n: '5~10월에는 융프라우 철도 좌석 예약(유료)이 의무이고, 그 밖의 달에도 권장됩니다.|A paid seat reservation on the Jungfrau Railway is compulsory from May to October and recommended in other months.', k: '2026-10' }),
  'interlaken-h6': v(180, 240, { n: '인터라켄 오스트역에서 기차로 약 20분입니다. 트뤼멜바흐 폭포는 4월 초~11월 초에만 엽니다.|About 20 min by train from Interlaken Ost; the Trümmelbach Falls open only from early April to early November.', k: '2026-10' }),
  // Basel
  'basel-h1': v(30, 45, { c: 'daily', b: 'no', s: 'https://www.baslermuenster.ch/', k: '2026-10' }),
  'basel-h2': v(120, 150, { c: 'mon', b: 'no', s: 'https://kunstmuseumbasel.ch/en/', k: '2026-10' }),
  'basel-h3': v(30, 45),
  'basel-h4': v(15, 20),
  'basel-h5': v(10, 15),
  // Zermatt
  'zermatt-h1': v(30, 60),
  'zermatt-h2': v(150, 180, { c: 'daily', s: 'https://www.gornergrat.ch/en/', n: PASS, k: '2026-10', x: [['2026년 11월 2~14일은 공사로 운휴합니다.|Out of service 2–14 November 2026 for construction work.', '2026-11-14']] }),
  'zermatt-h3': v(30, 45),
  'zermatt-h4': v(60, 90, { n: '호수는 여름에만 얼음이 녹아 마터호른이 비칩니다.|The lake is ice-free—and mirrors the Matterhorn—only in summer.' }),
  'zermatt-h5': v(45, 60, { c: 'daily', s: 'https://zermatt.swiss/en/discover-experience/tradition-culture/museum', n: '성수기에는 매일 15:00~18:00에 엽니다.|In season open daily 15:00–18:00.', k: '2026-10', x: [['11월 1~19일은 닫고, 11월 20일~12월 17일은 금~일요일에만 엽니다.|Closed 1–19 November; 20 November–17 December open Friday to Sunday only.', '2026-12-17']] }),
  // Lausanne
  'lausanne-h1': v(30, 45, { c: 'daily', b: 'no', s: 'https://www.cathedrale-lausanne.ch/', n: '성당은 무료이고 탑만 유료입니다.|The cathedral is free; only the tower is ticketed.', k: '2026-10' }),
  'lausanne-h2': v(45, 60),
  'lausanne-h3': v(90, 120, { c: 'mon', s: 'https://www.olympics.com/museum/visit', n: '화~일 9:00~18:00이고 월요일(공휴일 제외)에 쉽니다.|Open Tue–Sun 9:00–18:00; closed Mondays except public holidays.', k: '2026-10' }),
  'lausanne-h4': v(30, 45),
  'lausanne-h5': v(15, 20),
  // Lugano
  'lugano-h1': v(60, 120),
  'lugano-h2': v(45, 60),
  'lugano-h3': v(90, 120, { s: 'https://www.montesansalvatore.ch/en/', n: '푸니쿨라는 3월 중순부터 11월 초까지만 다니고 겨울에는 운휴합니다.|The funicular runs from mid-March to early November and closes in winter.', x: [['2026년 11월 9일~2027년 3월 12일은 정상 레스토랑 공사로 푸니쿨라도 운휴합니다.|From 9 November 2026 to 12 March 2027 the funicular is closed while the summit restaurant is renovated.', '2027-03-12']], k: '2026-10' }),
  'lugano-h4': v(30, 45),
  'lugano-h5': v(30, 45),
  // Montreux
  'montreux-h1': v(120, 150, { c: 'daily', s: 'https://www.chillon.ch/en/', n: PASS.replace('할인됩니다', '무료입니다').replace('get a discount', 'enter free'), k: '2026-10' }),
  'montreux-h2': v(45, 60),
  'montreux-h3': v(10, 15),
  'montreux-h4': v(15, 20),
  'montreux-h5': v(180, 240, { n: LIFT }),
  'gruyeres-h1': v(60, 90, { c: 'daily', s: 'https://www.chateau-gruyeres.ch/', n: '매일 엽니다. 4~10월 9~18시, 11~3월 10~17시입니다.|Open daily: 9:00–18:00 from April to October, 10:00–17:00 from November to March.', k: '2026-10' }),
  'gruyeres-h2': v(30, 45),
  'gruyeres-h3': v(45, 60),
  'gruyeres-h4': v(45, 60),
  'gruyeres-h5': v(90, 120, { n: '그뤼에르에서 기차로 브록 공장역까지 약 10분입니다.|About 10 min by train from Gruyères to Broc-Fabrique.' }),
  // Grindelwald
  'grindelwald-h1': v(20, 30),
  'grindelwald-h2': v(150, 240, { s: 'https://www.jungfrau.ch/en-gb/grindelwaldfirst/', n: LIFT, k: '2026-10' }),
  'grindelwald-h3': v(120, 180, { s: 'https://www.maennlichen.ch/en/', n: LIFT }),
  'grindelwald-h4': v(60, 90, { c: 'daily', s: 'https://www.outdoor.ch/en/outdoor-experience/glacier-canyon-grindelwald', n: '봄부터 가을까지만 엽니다. 5~11월에만 엽니다.|Open spring to autumn only. Open May to November only.', k: '2026-10' }),
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
  'vaduz-h4': v(30, 40, { c: 'daily', b: 'no', s: 'https://www.myswitzerland.com/en-gb/experiences/postage-stamp-museum/', n: '입장 무료, 매일 10:00~17:00.|Free; open daily 10:00–17:00.', k: '2026-10' }),
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
