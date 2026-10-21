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
  'vienna-h5': v(90, 120, { c: 'daily', b: 'rec', s: 'https://www.sisimuseum-hofburg.at/en/', k: '2026-10', x: [['시시 박물관 구역은 개편 공사로 2026년 11월 18일까지 닫혀 있고, 그동안에는 황제 거처만 봅니다.|The Sisi Museum section is closed for a redesign until 18 November 2026; until then only the imperial apartments are open.', '2026-11-18']] }),
  'vienna-h6': v(60, 120, { b: 'no', s: 'https://wienerriesenrad.com/en/home/', n: '공원 입장은 무료이고 놀이기구마다 돈을 냅니다. 대관람차는 연중 매일 운행합니다.|The park is free; each ride is paid separately. The Giant Ferris Wheel runs every day of the year.', k: '2026-10' }),
  'vienna-h7': v(40, 180, { s: 'https://www.wiener-staatsoper.at/en/', n: '내부 가이드 투어는 공연·리허설 일정에 따라 날마다 다릅니다. 입석표는 공연 당일에 팝니다.|Guided tours vary daily with rehearsals. Standing tickets go on sale on the day.' }),
  // Salzburg
  'salzburg-h1': v(120, 150, { c: 'daily', s: 'https://www.festung-hohensalzburg.at/en/', n: '입장권에 푸니쿨라 왕복이 포함된 종류가 있습니다.|Some tickets include the funicular both ways.', k: '2026-10' }),
  'salzburg-h2': v(30, 45, { b: 'no', n: FREE }),
  'salzburg-h3': v(90, 120),
  'salzburg-h4': v(45, 60, { c: 'daily', s: 'https://mozarteum.at/en/mozart-museums/mozarts-birthplace', k: '2026-10' }),
  'salzburg-h5': v(10, 15, { c: 'daily', s: 'https://www.festung-hohensalzburg.at/en/', k: '2026-10' }),
  'salzburg-h6': v(20, 30, { c: 'daily', s: 'https://www.salzburger-dom.at/besuch-planen/oeffnungszeiten?lang=de', n: '관람에는 보존 기부금 7유로(13세 이하 무료)를 냅니다. 월~토는 점심때 잠시 닫고 일요일은 13시부터 열며, 미사·연주회 중에는 관람할 수 없습니다.|Sightseeing costs a €7 upkeep contribution (free to 13). Mon–Sat it closes briefly at midday and on Sundays opens from 13:00; no sightseeing during services or concerts.', k: '2026-10' }),
  'salzburg-h7': v(10, 10),
  // Innsbruck
  'innsbruck-h1': v(15, 30),
  'innsbruck-h2': v(120, 180, { s: 'https://nordkette.com/en/', n: '봄·가을 정기 점검 기간과 강풍 때는 운휴합니다.|Closed for maintenance spells in spring and autumn, and in high winds.' }),
  'innsbruck-h3': v(40, 45, { c: 'daily', s: 'https://www.tiroler-landesmuseen.at/haeuser/hofkirche/', k: '2026-10' }),
  'innsbruck-h4': v(60, 90),
  'innsbruck-h5': v(90, 120, { c: 'daily', s: 'https://www.schlossambras-innsbruck.at/en/', n: '11월 한 달은 휴관합니다.|Closed throughout November.', k: '2026-10' }),
  // Graz
  'graz-h1': v(90, 120, { b: 'no', s: 'https://graztourismus.at/en/sightseeing-culture/sights/schlossberg-funicular_shg_1482', n: '언덕은 무료로 걸어 오르고 푸니쿨라·엘리베이터는 그라츠 대중교통 표(101구역)로 탑니다.|The hill is free on foot; the funicular and lift take Graz public-transport tickets (zone 101).', k: '2026-10' }),
  'graz-h2': v(60, 75, { c: 'mon', s: 'https://www.museum-joanneum.at/en/kunsthaus-graz', k: '2026-10' }),
  'graz-h3': v(60, 90),
  'graz-h4': v(20, 30),
  'graz-h5': v(90, 120, { c: 'mon', s: 'https://www.museum-joanneum.at/schloss-eggenberg-prunkraeume-und-gaerten', n: '궁전 내부(화려한 방들)는 3월 말~10월 말에만 화~일 가이드 투어(10·11·12·14·15·16시)로 봅니다. 정원은 연중 엽니다.|The state rooms open only from late March to late October, by guided tour Tue–Sun (10, 11, 12, 14, 15 and 16 h); the park is open all year.', k: '2026-10' }),
  // Hallstatt
  'hallstatt-h1': v(45, 90),
  'hallstatt-h2': v(180, 210, { b: 'rec', n: '푸니쿨라 교체 공사로 2025년 9월부터 닫았다가 2026년 8월 말 재개장했습니다. 겨울에는 쉬는 기간이 있습니다.|Closed from September 2025 for a new funicular and reopened at the end of August 2026. It shuts for part of the winter.', k: '2026-10' }),
  'hallstatt-h3': v(15, 20, { n: '소액의 입장료가 있습니다. 11~4월에는 수~일요일 11:30~15:30에만 열고 날씨가 나쁘면 닫기도 합니다.|A small fee applies. November–April it opens Wednesday–Sunday 11:30–15:30 only, and may close in bad weather.' }),
  'hallstatt-h4': v(15, 20),
  'hallstatt-h5': v(10, 15),

  // Prague
  'prague-h1': v(150, 210, { c: 'daily', s: HRAD, n: '경내는 무료이고 성 비투스 대성당·옛 왕궁·황금 소로는 통합 입장권으로 봅니다. 입구 보안 검색 줄이 깁니다.|The grounds are free; St Vitus, the Old Royal Palace and Golden Lane share one ticket. Expect a security queue.', k: '2026-10' }),
  'prague-h2': v(20, 30),
  'prague-h3': v(30, 45),
  'prague-h4': v(15, 45, { c: 'daily', s: 'https://prague.eu/en/objevujte/old-town-hall-with-astronomical-clock-staromestska-radnice-s-orlojem/', n: '9시부터 23시까지 매시 정각에 인형이 움직입니다. 시청 탑은 유료입니다.|The figures move on the hour from 9 am to 11 pm. The town hall tower is ticketed.', k: '2026-10' }),
  'prague-h5': v(60, 75, { n: '계단 299개를 오르거나 엘리베이터를 탑니다.|299 steps, or take the lift.' }),
  'prague-h6': v(120, 150, { c: 'sat', b: 'rec', s: 'https://www.jewishmuseum.cz/', n: '토요일과 유대교 명절에 쉽니다. 여러 회당과 옛 묘지를 통합권으로 봅니다.|Closed on Saturdays and Jewish holidays. One ticket covers the synagogues and the Old Cemetery.', k: '2026-10' }),
  'prague-h7': v(15, 20, { c: 'sun,mon', b: 'no', s: 'https://prague.eu/cs/objevujte/chram-matky-bozi-pred-tynem/', n: '화~토 10:00~13:00·15:00~17:00에 열고 12~2월에는 일요일 10:30~12:00에도 엽니다. 입장은 자율 헌금이고 예배 중에는 관람할 수 없습니다.|Open Tue–Sat 10:00–13:00 and 15:00–17:00, plus Sundays 10:30–12:00 from December to February. Entry by donation; no visits during services.', k: '2026-10' }),
  'prague-h8': v(20, 30, { c: 'daily', b: 'no', s: 'https://prague.eu/en/objevujte/powder', n: '전망 회랑까지 계단 186개입니다. 문 연 뒤 첫 1시간은 50% 할인됩니다.|186 steps to the gallery; 50% off in the first hour after opening.', k: '2026-10' }),
  'prague-h9': v(40, 60, { c: 'daily', s: HRAD, n: '프라하성 통합 입장권으로 봅니다. 일요일 오전은 미사로 입장이 늦습니다.|On the Prague Castle ticket. Entry starts later on Sunday mornings because of mass.', k: '2026-10' }),
  'prague-h10': v(10, 15),
  'prague-h11': v(10, 20),
  'prague-h12': v(15, 20, { n: '근위병 교대식은 매시 정각에 있고 정오에 가장 크게 열립니다.|The guard changes hourly, with the full ceremony at noon.' }),
  // Brno
  'brno-h1': v(75, 90, { c: 'daily', s: 'https://www.spilberk.cz/en/', k: '2026-10' }),
  'brno-h2': v(60, 90, { c: 'mon', b: 'req', s: 'https://www.vilatugendhat.cz/en/', n: '내부 투어는 몇 달 전에 매진됩니다. 표가 없으면 정원만 볼 수 있습니다.|Interior tours sell out months ahead; without a ticket only the garden can be seen.', k: '2026-10' }),
  'brno-h3': v(15, 20),
  'brno-h4': v(30, 45),
  'brno-h5': v(20, 30),
  // Český Krumlov
  'cesky-krumlov-h1': v(90, 150, { s: 'https://www.zamek-ceskykrumlov.cz/en', n: '월요일 휴무 여부가 코스와 계절마다 다릅니다(박물관과 탑은 9~10월에 매일, 12월에는 화~일요일). 가는 날의 시간표를 확인하세요.|Whether Monday is a closing day depends on the route and the season (the museum and tower open daily in September–October, Tuesday–Sunday in December). Check the timetable for your date.', k: '2026-10' }),
  'cesky-krumlov-h2': v(60, 90),
  'cesky-krumlov-h3': v(15, 20, { c: 'daily', b: 'no', s: 'https://www.ckrumlov.info/cz/oteviraci-doby-pamatek-muzei-a-galerii-2026/', n: '9:00~16:30(화·토 17:00까지)에 열고 일요일은 11:00부터 엽니다.|Open 9:00–16:30 (to 17:00 Tue and Sat); Sundays from 11:00.', k: '2026-10' }),
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
  'ceske-budejovice-h3': v(60, 75, { b: 'req', n: '양조장 투어는 미리 예약해야 합니다.|Brewery tours must be booked ahead.', k: '2026-10' }),
  'ceske-budejovice-h4': v(10, 15),
  'ceske-budejovice-h5': v(20, 30),

  // Bratislava
  'bratislava-h1': v(90, 120, { c: 'tue', n: '성 바깥뜰과 전망은 무료이고 안쪽 박물관만 유료입니다.|The grounds and views are free; only the museum inside is ticketed.', k: '2026-10' }),
  'bratislava-h2': v(60, 90),
  'bratislava-h3': v(20, 30),
  'bratislava-h4': v(10, 150, { n: SHOW }),
  'bratislava-h5': v(90, 120, { c: 'mon', s: 'https://muzeumbratislava.sk/en/devin-castle', n: '시내에서 버스로 20~30분 걸립니다.|20–30 minutes by bus from the centre.', k: '2026-10' }),
  // Košice
  'kosice-h1': v(30, 45),
  'kosice-h2': v(30, 45),
  'kosice-h3': v(45, 60, { c: 'mon', k: '2026-10' }),
  'kosice-h4': v(10, 15),
  'kosice-h5': v(15, 20),
  // Poprad
  'poprad-h1': v(40, 70),
  'poprad-h2': v(180, 240, { c: 'daily', s: 'https://aquacity.sk/en/', k: '2026-10' }),
  'poprad-h3': v(10, 15),
  'poprad-h4': v(240, 420, { n: '높은 산길은 11월 1일부터 5월 31일까지 폐쇄됩니다(산장으로 가는 길은 대부분 1년 내내 열림).|High-level trails are closed from 1 November to 31 May (most trails to mountain huts stay open all year).' }),
  'poprad-h5': v(60, 90),
  // Banská Bystrica
  'banska-bystrica-h1': v(20, 30),
  'banska-bystrica-h2': v(20, 30),
  'banska-bystrica-h3': v(10, 15),
  'banska-bystrica-h4': v(45, 60),
  'banska-bystrica-h5': v(45, 60),
  // Trenčín
  'trencin-h1': v(120, 150, { c: 'daily', k: '2026-10' }),
  'trencin-h2': v(10, 15, { n: '호텔 엘리자베트(Elizabeth) 안 전망 창에서 봅니다.|Viewed from a window inside the Hotel Elizabeth.' }),
  'trencin-h3': v(15, 20),
  'trencin-h4': v(10, 15),
  'trencin-h5': v(20, 30),

  // Budapest
  'budapest-h1': v(45, 45, { c: 'daily', b: 'req', s: 'https://www.parlament.hu/en/web/visitors/', t: 'https://jegymester.hu/event-host/900/parlament', n: '언어별 가이드 투어로만 들어가고 며칠 전에 매진됩니다. 여권이 필요합니다.|Entered on guided tours by language only, selling out days ahead. Bring your passport.', k: '2026-10' }),
  'budapest-h2': v(30, 45, { c: 'daily', s: 'https://fishermansbastion.com/', n: '아래층은 무료이고 위쪽 탑은 낮 시간에 유료입니다.|The lower level is free; the upper towers charge during the day.', k: '2026-10' }),
  'budapest-h3': v(150, 180, { c: 'daily', s: 'https://www.szechenyibath.hu/', n: '만 14세 미만은 들어갈 수 없습니다. 수영복과 슬리퍼를 가져가세요.|No entry for under-14s. Bring swimwear and flip-flops.', k: '2026-10' }),
  'budapest-h4': v(15, 20),
  'budapest-h5': v(15, 20),
  'budapest-h6': v(45, 60, { c: 'daily', b: 'no', s: 'https://piaconline.hu/en/central-market-hall/', n: '공휴일에는 닫습니다. 일요일은 운영사 안내가 서로 달라(낮 영업 또는 휴무) 가기 전에 확인하세요.|Closed on public holidays. The operator’s own pages disagree about Sundays (short hours or closed), so check before going.', k: '2026-10' }),
  'budapest-h7': v(60, 120, { n: '궁전 단지 곳곳이 복원 공사 중입니다. 안쪽 국립 미술관과 역사 박물관은 월요일에 쉽니다.|Parts of the complex are under reconstruction. The National Gallery and History Museum inside close on Mondays.' }),
  'budapest-h8': v(30, 60, { c: 'daily', s: 'https://bazilikabudapest.hu/', n: '성당·돔 전망대·보물관은 표가 각각입니다.|Church, dome terrace and treasury are ticketed separately.', k: '2026-10' }),
  'budapest-h9': v(30, 45, { c: 'daily', s: 'https://matyas-templom.hu/en/', k: '2026-10' }),
  // Debrecen
  'debrecen-h1': v(30, 40),
  'debrecen-h2': v(90, 120, { c: 'mon', k: '2026-10' }),
  'debrecen-h3': v(60, 90),
  'debrecen-h4': v(15, 20),
  'debrecen-h5': v(180, 240),
  // Pécs
  'pecs-h1': v(45, 60, { c: 'daily', b: 'no', s: 'https://pecsiegyhazmegye.hu/en', n: '월~토 9:00~17:00(금 10:00부터), 일 11:30~17:00. 표는 16:30까지 팝니다.|Mon–Sat 9:00–17:00 (Fri from 10:00), Sun 11:30–17:00; tickets until 16:30.', k: '2026-10' }),
  'pecs-h2': v(20, 30, { c: 'daily', b: 'no', s: 'https://pecsiegyhazmegye.hu/en', n: '지금은 성당으로 쓰입니다. 월~토 9:00~17:00, 일 13:00~17:00. 대성당과 묶은 통합권이 있습니다.|Now a church: Mon–Sat 9:00–17:00, Sun 13:00–17:00; a combined ticket with the cathedral is available.', k: '2026-10' }),
  'pecs-h3': v(60, 75, { c: 'mon', s: 'https://www.vilagoroksegpecs.hu/en/information/opening-hours', n: '11월 1일에도 쉽니다. 표는 문 닫기 30분 전까지 팝니다.|Also closed on 1 November. Ticket sales end 30 minutes before closing.', k: '2026-10' }),
  'pecs-h4': v(120, 150, { c: 'mon', s: 'https://www.zsolnaynegyed.hu/en', n: '전시장은 월요일에 쉽니다. 겨울(11월 초~봄)에는 상설 전시가 목~일요일에만 열고, 12월 24~26일은 모두 닫습니다.|Exhibitions close on Mondays. In winter (early November to spring) the permanent exhibitions open Thursday–Sunday only, and everything closes on 24–26 December.', k: '2026-10' }),
  'pecs-h5': v(15, 20),
  // Szeged
  'szeged-h1': v(30, 45),
  'szeged-h2': v(15, 20),
  'szeged-h3': v(30, 45),
  'szeged-h4': v(30, 40, { c: 'mon,sat', n: '월요일·토요일과 유대교 명절에 쉬고, 금요일은 계절에 따라 일찍 닫습니다.|Closed on Mondays, Saturdays and Jewish holidays; Fridays end early in winter.', k: '2026-10' }),
  'szeged-h5': v(15, 30),
  // Eger
  'eger-h1': v(105, 120, { c: 'daily', s: 'https://www.egrivar.hu/en/', n: '12월 24~25일은 쉽니다. 겨울에는 전시관 운영이 줄 수 있으니 공식 시간표를 확인하세요.|Closed 24–25 December. Exhibitions may run reduced hours in winter—check the official timetable.', k: '2026-10' }),
  'eger-h2': v(15, 20, { n: '좁은 나선 계단 97개를 오르고 겨울에는 닫습니다.|97 narrow spiral steps; closed in winter.' }),
  'eger-h3': v(15, 20),
  'eger-h4': v(90, 120),
  'eger-h5': v(45, 60),

  // Warsaw
  'warsaw-h1': v(90, 120),
  'warsaw-h2': v(120, 150, { c: 'mon', n: '수요일은 상설 전시가 무료입니다.|The permanent route is free on Wednesdays.', k: '2026-10' }),
  'warsaw-h3': v(90, 120, { c: 'daily', s: 'https://www.lazienki-krolewskie.pl/en', n: '공원은 무료이고 궁전 건물은 월요일에 쉽니다. 여름 일요일에는 쇼팽 야외 연주회가 열립니다.|The park is free; the palace buildings close on Mondays. Free Chopin concerts run on summer Sundays.', k: '2026-10' }),
  'warsaw-h4': v(30, 45, { c: 'daily', s: 'https://pkin.pl/en/home/', n: '30층 전망대가 유료입니다. 11월 1일과 12월 24~26일은 쉽니다.|The 30th-floor viewing terrace is ticketed. Closed 1 November and 24–26 December.', k: '2026-10' }),
  'warsaw-h5': v(120, 180, { c: 'tue', s: 'https://www.polin.pl/en', n: '목요일은 상설 전시가 무료입니다.|The core exhibition is free on Thursdays.', k: '2026-10' }),
  // Kraków
  'krakow-h1': v(45, 60),
  'krakow-h2': v(180, 240, { c: 'daily', b: 'req', s: 'https://wawel.krakow.pl/en', t: 'https://bilety.wawel.krakow.pl/', n: '전시마다 표가 따로이고 시간 지정이며 하루 입장 인원이 제한됩니다. 성 안뜰과 대성당 본당은 무료입니다.|Each exhibition has its own timed ticket with a daily cap. The courtyard and the cathedral nave are free.', k: '2026-10' }),
  'krakow-h3': v(30, 45, { c: 'mon', s: 'https://mnk.pl/wystawy/mnk-sukiennice/', n: '1층 기념품 상가는 무료이고 2층 미술관은 월요일에 쉽니다.|The ground-floor stalls are free; the gallery upstairs closes on Mondays.', k: '2026-10' }),
  'krakow-h4': v(90, 120),
  'krakow-h5': v(30, 45, { c: 'daily', s: 'https://mariacki.com/en/', n: '관광 입장은 낮 11시 30분 이후이고 유료입니다. 매시 정각에 탑에서 나팔을 붑니다.|Sightseeing entry starts at 11:30 am and is ticketed. A bugle call sounds from the tower every hour.', k: '2026-10' }),
  // Gdańsk
  'gdansk-h1': v(30, 45),
  'gdansk-h2': v(10, 10),
  'gdansk-h3': v(30, 45),
  'gdansk-h4': v(120, 150, { s: 'https://ecs.gda.pl/en', n: '비수기에는 화요일에 쉽니다.|Closed on Tuesdays outside the summer season.', k: '2026-10' }),
  'gdansk-h5': v(240, 300),
  // Wrocław
  'wroclaw-h1': v(45, 60),
  'wroclaw-h2': v(45, 60),
  'wroclaw-h3': v(45, 60, { c: 'mon', s: 'https://halastulecia.pl/en/for-visitors/', n: '행사가 있는 날은 내부 관람이 제한됩니다.|Interior visits are restricted on event days.', k: '2026-10' }),
  'wroclaw-h4': v(60, 120),
  'wroclaw-h5': v(40, 45, { c: 'wed', k: '2026-10' }),
  // Poznań
  'poznan-h1': v(30, 45, { n: '매일 정오와 오후 3시에 시청 시계탑에서 기계 염소 두 마리가 나와 뿔을 맞댑니다.|Every day at noon and 3 pm two mechanical goats come out on the town hall clock and butt heads.' }),
  'poznan-h2': v(45, 60),
  'poznan-h3': v(30, 45),
  'poznan-h4': v(15, 20),
  'poznan-h5': v(60, 90),
  // Zakopane
  'zakopane-h1': v(60, 90, { s: PKL }),
  'zakopane-h2': v(150, 180, { b: 'rec', s: PKL, n: '매표소 줄이 길어 온라인 예매를 권합니다. 가을에 정기 점검으로 몇 주 운휴하며, 강풍이 불면 멈춥니다.|Queues at the ticket office are long, so buy online. It shuts for a few weeks of maintenance each autumn and stops in strong wind.', k: '2026-10', x: [['2026년 가을 점검 운휴는 10월 19일~11월 6일로 안내돼 있습니다.|The 2026 autumn maintenance closure is announced as 19 October–6 November.', '2026-11-06']] }),
  'zakopane-h3': v(45, 60),
  'zakopane-h4': v(300, 360, { n: '주차장에서 호수까지 편도 약 9km를 걷습니다. 국립공원 입장료가 있고 성수기에는 주차 예약이 필요합니다.|About 9 km each way on foot from the car park. A national park fee applies, and parking must be pre-booked in season.' }),
  'zakopane-h5': v(45, 60),
  // Toruń
  'torun-h1': v(60, 90),
  'torun-h2': v(45, 60, { c: 'mon', k: '2026-10' }),
  'torun-h3': v(20, 30, { c: 'daily', b: 'no', s: 'https://muzeum.torun.pl/en/old-town-hall/', n: '탑은 5~9월 10:00~20:00, 4·10월 10:00~18:00, 겨울 10:00~16:00에 엽니다. 시청 안 박물관은 월요일에 쉽니다.|The tower opens 10:00–20:00 May–September, 10:00–18:00 in April and October, 10:00–16:00 in winter; the town-hall museum closes on Mondays.', k: '2026-10' }),
  'torun-h4': v(20, 30),
  'torun-h5': v(60, 75, { c: 'daily', b: 'rec', s: 'https://muzeumpiernika.pl/en/', n: '정해진 시간에 시작하는 체험 프로그램으로 운영합니다.|Runs as hands-on sessions at fixed start times.', k: '2026-10' }),
}
