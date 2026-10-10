import type { HighlightVisit } from '../types'
import { v } from './visit-helper'

const FREE = '입장은 무료입니다.|Entry is free.'
const SHOW = '공연 관람은 예매가 필요합니다.|Performances need advance tickets.'
const HRAD = 'https://www.hrad.cz/en/prague-castle-for-visitors'
const PKL = 'https://www.pkl.pl/en/'

/** Austria, Czechia, Slovakia, Hungary, Poland */
export const visitCentral: Record<string, HighlightVisit> = {
  // Vienna
  'vienna-h1': v(150, 210, { c: 'daily', b: 'rec', s: 'https://www.schoenbrunn.at/en/', n: '궁전 내부는 시간 지정 입장이라 성수기에는 당일 표가 오후분만 남습니다. 정원은 무료입니다.|The palace is by timed ticket; in season same-day tickets are often for the afternoon only. The gardens are free.', k: '2026-10' }),
  'vienna-h2': v(45, 75, { c: 'daily', b: 'no', s: 'https://www.stephanskirche.at/', n: '성당 뒤쪽은 무료이고 안쪽 구역·탑·지하 묘지는 유료입니다.|The rear of the nave is free; the inner area, towers and catacombs are ticketed.', k: '2026-10' }),
  'vienna-h3': v(120, 150, { c: 'daily', b: 'rec', s: 'https://www.belvedere.at/en', n: '클림트 "키스"가 있는 상궁은 시간 지정 입장입니다.|The Upper Belvedere, home of Klimt’s Kiss, is by timed ticket.', k: '2026-10' }),
  'vienna-h4': v(60, 90, { n: '트램 1·2번을 이어 타면 한 바퀴 돕니다.|Trams 1 and 2 between them cover the loop.' }),
  'vienna-h5': v(90, 120, { c: 'daily', b: 'rec', s: 'https://www.sisimuseum-hofburg.at/en/', n: '시시 박물관 구역은 개편 공사로 2026년 11월 18일까지 닫혀 있고, 그동안에는 황제 거처만 봅니다.|The Sisi Museum section is closed for a redesign until 18 November 2026; until then only the imperial apartments are open.', k: '2026-10' }),
  'vienna-h6': v(60, 120, { b: 'no', s: 'https://wienerriesenrad.com/en/home/', n: '공원 입장은 무료이고 놀이기구마다 돈을 냅니다.|The park is free; each ride is paid separately.' }),
  'vienna-h7': v(40, 180, { s: 'https://www.wiener-staatsoper.at/en/', n: '내부 가이드 투어는 공연·리허설 일정에 따라 날마다 다릅니다. 입석표는 공연 당일에 팝니다.|Guided tours vary daily with rehearsals. Standing tickets go on sale on the day.' }),
  // Salzburg
  'salzburg-h1': v(120, 150, { c: 'daily', s: 'https://www.festung-hohensalzburg.at/en/', n: '입장권에 푸니쿨라 왕복이 포함된 종류가 있습니다.|Some tickets include the funicular both ways.', k: '2026-10' }),
  'salzburg-h2': v(30, 45, { b: 'no', n: FREE }),
  'salzburg-h3': v(90, 120),
  'salzburg-h4': v(45, 60, { c: 'daily', s: 'https://mozarteum.at/en/mozart-museums/mozarts-birthplace', k: '2026-10' }),
  'salzburg-h5': v(10, 15, { s: 'https://www.festung-hohensalzburg.at/en/' }),
  'salzburg-h6': v(20, 30, { s: 'https://www.salzburger-dom.at/en/', n: '관광 입장은 유료입니다.|Sightseeing entry is ticketed.' }),
  'salzburg-h7': v(10, 10),
  // Innsbruck
  'innsbruck-h1': v(15, 30),
  'innsbruck-h2': v(120, 180, { s: 'https://nordkette.com/en/', n: '봄·가을 정기 점검 기간과 강풍 때는 운휴합니다.|Closed for maintenance spells in spring and autumn, and in high winds.' }),
  'innsbruck-h3': v(40, 45, { s: 'https://www.tiroler-landesmuseen.at/haeuser/hofkirche/' }),
  'innsbruck-h4': v(60, 90),
  'innsbruck-h5': v(90, 120, { s: 'https://www.schlossambras-innsbruck.at/en/', n: '11월에는 휴관합니다.|Closed in November.' }),
  // Graz
  'graz-h1': v(60, 90, { b: 'no', n: '언덕은 무료이고 엘리베이터·푸니쿨라는 유료입니다.|The hill is free; the lift and funicular charge.' }),
  'graz-h2': v(60, 75, { c: 'mon', s: 'https://www.museum-joanneum.at/en/kunsthaus-graz' }),
  'graz-h3': v(60, 90),
  'graz-h4': v(20, 30),
  'graz-h5': v(90, 120, { n: '궁전 내부는 대략 4월부터 10월까지 가이드 투어로만 봅니다. 정원은 연중 엽니다.|The state rooms are by guided tour only, roughly April to October; the park is open all year.' }),
  // Hallstatt
  'hallstatt-h1': v(45, 90),
  'hallstatt-h2': v(180, 210, { b: 'rec', n: '푸니쿨라 교체 공사로 2025년 9월부터 닫았다가 2026년 8월 말 재개장했습니다. 겨울에는 쉬는 기간이 있습니다.|Closed from September 2025 for a new funicular and reopened at the end of August 2026. It shuts for part of the winter.' }),
  'hallstatt-h3': v(15, 20, { n: '소액의 입장료가 있고 겨울에는 닫습니다.|A small fee applies; closed in winter.' }),
  'hallstatt-h4': v(15, 20),
  'hallstatt-h5': v(10, 15),

  // Prague
  'prague-h1': v(150, 210, { c: 'daily', s: HRAD, n: '경내는 무료이고 성 비투스 대성당·옛 왕궁·황금 소로는 통합 입장권으로 봅니다. 입구 보안 검색 줄이 깁니다.|The grounds are free; St Vitus, the Old Royal Palace and Golden Lane share one ticket. Expect a security queue.', k: '2026-10' }),
  'prague-h2': v(20, 30),
  'prague-h3': v(30, 45),
  'prague-h4': v(15, 45, { s: 'https://prague.eu/en/objevujte/old-town-hall-with-astronomical-clock-staromestska-radnice-s-orlojem/', n: '9시부터 23시까지 매시 정각에 인형이 움직입니다. 시청 탑은 유료입니다.|The figures move on the hour from 9 am to 11 pm. The town hall tower is ticketed.' }),
  'prague-h5': v(60, 75, { n: '계단 299개를 오르거나 엘리베이터를 탑니다.|299 steps, or take the lift.' }),
  'prague-h6': v(120, 150, { c: 'sat', b: 'rec', s: 'https://www.jewishmuseum.cz/', n: '토요일과 유대교 명절에 쉽니다. 여러 회당과 옛 묘지를 통합권으로 봅니다.|Closed on Saturdays and Jewish holidays. One ticket covers the synagogues and the Old Cemetery.', k: '2026-10' }),
  'prague-h7': v(15, 20),
  'prague-h8': v(20, 30),
  'prague-h9': v(40, 60, { c: 'daily', s: HRAD, n: '프라하성 통합 입장권으로 봅니다. 일요일 오전은 미사로 입장이 늦습니다.|On the Prague Castle ticket. Entry starts later on Sunday mornings because of mass.', k: '2026-10' }),
  'prague-h10': v(10, 15),
  'prague-h11': v(10, 20),
  'prague-h12': v(15, 20, { n: '근위병 교대식은 매시 정각에 있고 정오에 가장 크게 열립니다.|The guard changes hourly, with the full ceremony at noon.' }),
  // Brno
  'brno-h1': v(75, 90, { s: 'https://www.spilberk.cz/en/' }),
  'brno-h2': v(60, 90, { c: 'mon', b: 'req', s: 'https://www.vilatugendhat.cz/en/', n: '내부 투어는 몇 달 전에 매진됩니다. 표가 없으면 정원만 볼 수 있습니다.|Interior tours sell out months ahead; without a ticket only the garden can be seen.' }),
  'brno-h3': v(15, 20),
  'brno-h4': v(30, 45),
  'brno-h5': v(20, 30),
  // Český Krumlov
  'cesky-krumlov-h1': v(90, 150, { c: 'mon', s: 'https://www.zamek-ceskykrumlov.cz/en', n: '성 내부는 대략 4월부터 10월까지 가이드 투어로만 봅니다. 안뜰은 연중 무료입니다.|The interiors are by guided tour, roughly April to October. The courtyards are free all year.' }),
  'cesky-krumlov-h2': v(60, 90),
  'cesky-krumlov-h3': v(15, 20),
  'cesky-krumlov-h4': v(120, 180, { n: '여름철에만 할 수 있습니다.|A summer-only activity.' }),
  'cesky-krumlov-h5': v(10, 10),
  // Karlovy Vary
  'karlovy-vary-h1': v(20, 30, { b: 'no', n: '온천수는 무료로 마실 수 있습니다.|The spring water is free to drink.' }),
  'karlovy-vary-h2': v(45, 60),
  'karlovy-vary-h3': v(60, 75),
  'karlovy-vary-h4': v(10, 15),
  'karlovy-vary-h5': v(10, 15),
  // České Budějovice
  'ceske-budejovice-h1': v(20, 30),
  'ceske-budejovice-h2': v(20, 30, { n: '계단 225개를 오르고 겨울에는 닫습니다.|225 steps; closed in winter.' }),
  'ceske-budejovice-h3': v(60, 75, { b: 'req', n: '양조장 투어는 미리 예약해야 합니다.|Brewery tours must be booked ahead.' }),
  'ceske-budejovice-h4': v(10, 15),
  'ceske-budejovice-h5': v(20, 30),

  // Bratislava
  'bratislava-h1': v(60, 90, { c: 'tue', n: '성 바깥뜰과 전망은 무료이고 안쪽 박물관만 유료입니다.|The grounds and views are free; only the museum inside is ticketed.' }),
  'bratislava-h2': v(60, 90),
  'bratislava-h3': v(20, 30),
  'bratislava-h4': v(10, 150, { n: SHOW }),
  'bratislava-h5': v(90, 120, { s: 'https://muzeumbratislava.sk/en/devin-castle', n: '시내에서 버스로 20~30분 걸립니다.|20–30 minutes by bus from the centre.' }),
  // Košice
  'kosice-h1': v(30, 45),
  'kosice-h2': v(30, 45),
  'kosice-h3': v(45, 60, { c: 'mon' }),
  'kosice-h4': v(10, 15),
  'kosice-h5': v(15, 20),
  // Poprad
  'poprad-h1': v(40, 70),
  'poprad-h2': v(180, 240, { c: 'daily', s: 'https://aquacity.sk/en/' }),
  'poprad-h3': v(10, 15),
  'poprad-h4': v(240, 420, { n: '높은 산길은 11월부터 6월 중순까지 폐쇄됩니다.|High-level trails are closed from November to mid-June.' }),
  'poprad-h5': v(60, 90),
  // Banská Bystrica
  'banska-bystrica-h1': v(20, 30),
  'banska-bystrica-h2': v(20, 30),
  'banska-bystrica-h3': v(10, 15),
  'banska-bystrica-h4': v(45, 60),
  'banska-bystrica-h5': v(45, 60),
  // Trenčín
  'trencin-h1': v(75, 90, { c: 'daily' }),
  'trencin-h2': v(10, 15, { n: '호텔 엘리자베트(Elizabeth) 안 전망 창에서 봅니다.|Viewed from a window inside the Hotel Elizabeth.' }),
  'trencin-h3': v(15, 20),
  'trencin-h4': v(10, 15),
  'trencin-h5': v(20, 30),

  // Budapest
  'budapest-h1': v(45, 45, { c: 'daily', b: 'req', s: 'https://www.parlament.hu/en/web/visitors/', t: 'https://jegymester.hu/event-host/900/parlament', n: '언어별 가이드 투어로만 들어가고 며칠 전에 매진됩니다. 여권이 필요합니다.|Entered on guided tours by language only, selling out days ahead. Bring your passport.', k: '2026-10' }),
  'budapest-h2': v(30, 45, { s: 'https://fishermansbastion.com/', n: '아래층은 무료이고 위쪽 탑은 낮 시간에 유료입니다.|The lower level is free; the upper towers charge during the day.' }),
  'budapest-h3': v(150, 180, { c: 'daily', s: 'https://www.szechenyibath.hu/', n: '만 14세 미만은 들어갈 수 없습니다. 수영복과 슬리퍼를 가져가세요.|No entry for under-14s. Bring swimwear and flip-flops.', k: '2026-10' }),
  'budapest-h4': v(15, 20),
  'budapest-h5': v(15, 20),
  'budapest-h6': v(45, 60, { b: 'no', s: 'https://piaconline.hu/en/central-market-hall/', n: '공휴일에는 닫습니다. 일요일은 운영사 안내가 서로 달라(낮 영업 또는 휴무) 가기 전에 확인하세요.|Closed on public holidays. The operator’s own pages disagree about Sundays (short hours or closed), so check before going.' }),
  'budapest-h7': v(60, 120, { n: '궁전 단지 곳곳이 복원 공사 중입니다. 안쪽 국립 미술관과 역사 박물관은 월요일에 쉽니다.|Parts of the complex are under reconstruction. The National Gallery and History Museum inside close on Mondays.' }),
  'budapest-h8': v(30, 60, { c: 'daily', s: 'https://bazilikabudapest.hu/', n: '성당·돔 전망대·보물관은 표가 각각입니다.|Church, dome terrace and treasury are ticketed separately.', k: '2026-10' }),
  'budapest-h9': v(30, 45, { c: 'daily', s: 'https://matyas-templom.hu/en/', k: '2026-10' }),
  // Debrecen
  'debrecen-h1': v(30, 40),
  'debrecen-h2': v(60, 75, { c: 'mon' }),
  'debrecen-h3': v(60, 90),
  'debrecen-h4': v(15, 20),
  'debrecen-h5': v(180, 240),
  // Pécs
  'pecs-h1': v(45, 60),
  'pecs-h2': v(20, 30),
  'pecs-h3': v(60, 75, { c: 'mon' }),
  'pecs-h4': v(120, 150, { s: 'https://www.zsolnaynegyed.hu/en' }),
  'pecs-h5': v(15, 20),
  // Szeged
  'szeged-h1': v(30, 45),
  'szeged-h2': v(15, 20),
  'szeged-h3': v(30, 45),
  'szeged-h4': v(30, 40, { c: 'sat' }),
  'szeged-h5': v(15, 30),
  // Eger
  'eger-h1': v(105, 120, { c: 'daily', s: 'https://www.egrivar.hu/en/' }),
  'eger-h2': v(15, 20, { n: '좁은 나선 계단 97개를 오르고 겨울에는 닫습니다.|97 narrow spiral steps; closed in winter.' }),
  'eger-h3': v(15, 20),
  'eger-h4': v(90, 120),
  'eger-h5': v(45, 60),

  // Warsaw
  'warsaw-h1': v(90, 120),
  'warsaw-h2': v(90, 120, { c: 'mon', n: '수요일은 상설 전시가 무료입니다.|The permanent route is free on Wednesdays.' }),
  'warsaw-h3': v(90, 120, { s: 'https://www.lazienki-krolewskie.pl/en', n: '공원은 무료이고 궁전 건물은 월요일에 쉽니다. 여름 일요일에는 쇼팽 야외 연주회가 열립니다.|The park is free; the palace buildings close on Mondays. Free Chopin concerts run on summer Sundays.' }),
  'warsaw-h4': v(30, 45, { c: 'daily', s: 'https://pkin.pl/en/home/', n: '30층 전망대가 유료입니다.|The 30th-floor viewing terrace is ticketed.' }),
  'warsaw-h5': v(120, 180, { c: 'tue', s: 'https://www.polin.pl/en', n: '목요일은 상설 전시가 무료입니다.|The core exhibition is free on Thursdays.' }),
  // Kraków
  'krakow-h1': v(45, 60),
  'krakow-h2': v(120, 180, { c: 'daily', b: 'req', s: 'https://wawel.krakow.pl/en', t: 'https://bilety.wawel.krakow.pl/', n: '전시마다 표가 따로이고 시간 지정이며 하루 입장 인원이 제한됩니다. 성 안뜰과 대성당 본당은 무료입니다.|Each exhibition has its own timed ticket with a daily cap. The courtyard and the cathedral nave are free.', k: '2026-10' }),
  'krakow-h3': v(30, 45, { s: 'https://mnk.pl/wystawy/mnk-sukiennice/', n: '1층 기념품 상가는 무료이고 2층 미술관은 월요일에 쉽니다.|The ground-floor stalls are free; the gallery upstairs closes on Mondays.' }),
  'krakow-h4': v(90, 120),
  'krakow-h5': v(30, 45, { c: 'daily', s: 'https://mariacki.com/en/', n: '관광 입장은 낮 11시 30분 이후이고 유료입니다. 매시 정각에 탑에서 나팔을 붑니다.|Sightseeing entry starts at 11:30 am and is ticketed. A bugle call sounds from the tower every hour.', k: '2026-10' }),
  // Gdańsk
  'gdansk-h1': v(30, 45),
  'gdansk-h2': v(10, 10),
  'gdansk-h3': v(30, 45),
  'gdansk-h4': v(120, 150, { s: 'https://ecs.gda.pl/en', n: '비수기에는 화요일에 쉽니다.|Closed on Tuesdays outside the summer season.' }),
  'gdansk-h5': v(240, 300),
  // Wrocław
  'wroclaw-h1': v(45, 60),
  'wroclaw-h2': v(45, 60),
  'wroclaw-h3': v(45, 60, { s: 'https://halastulecia.pl/en/for-visitors/', n: '행사가 있는 날은 내부 관람이 제한됩니다.|Interior visits are restricted on event days.' }),
  'wroclaw-h4': v(60, 120),
  'wroclaw-h5': v(40, 45, { c: 'wed' }),
  // Poznań
  'poznan-h1': v(30, 45, { n: '매일 정오에 시청 시계탑에서 염소 두 마리가 뿔을 맞댑니다.|At noon each day two mechanical goats butt heads on the town hall clock.' }),
  'poznan-h2': v(45, 60),
  'poznan-h3': v(30, 45),
  'poznan-h4': v(15, 20),
  'poznan-h5': v(60, 90),
  // Zakopane
  'zakopane-h1': v(60, 90, { s: PKL }),
  'zakopane-h2': v(150, 180, { b: 'rec', s: PKL, n: '케이블카는 성수기에 며칠 전에 매진되고 봄·가을 정기 점검 기간에는 운휴합니다.|The cable car sells out days ahead in season and closes for maintenance in spring and autumn.' }),
  'zakopane-h3': v(45, 60),
  'zakopane-h4': v(300, 360, { n: '주차장에서 호수까지 편도 약 9km를 걷습니다. 국립공원 입장료가 있고 성수기에는 주차 예약이 필요합니다.|About 9 km each way on foot from the car park. A national park fee applies, and parking must be pre-booked in season.' }),
  'zakopane-h5': v(45, 60),
  // Toruń
  'torun-h1': v(60, 90),
  'torun-h2': v(45, 60, { c: 'mon' }),
  'torun-h3': v(20, 30),
  'torun-h4': v(20, 30),
  'torun-h5': v(60, 75, { c: 'daily', b: 'rec', s: 'https://muzeumpiernika.pl/en/', n: '정해진 시간에 시작하는 체험 프로그램으로 운영합니다.|Runs as hands-on sessions at fixed start times.' }),
}
