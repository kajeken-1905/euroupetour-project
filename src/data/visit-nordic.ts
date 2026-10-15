import type { HighlightVisit } from '../types'
import { v } from './visit-helper'

const FREE = '입장은 무료입니다.|Entry is free.'
const WEATHER = '날씨가 급변하니 출발 전에 예보와 도로 상황을 확인하세요.|Conditions change fast—check the forecast and roads before setting out.'
const KODE = 'https://www.kodebergen.no/en'

/** Denmark, Sweden, Finland, Norway, Iceland */
export const visitNordic: Record<string, HighlightVisit> = {
  // Copenhagen
  'copenhagen-h1': v(45, 75, { s: 'https://denkongeligesamling.dk/en/amalienborg-museum/', n: '근위병 교대식은 매일 정오에 광장에서 열립니다. 박물관은 11월 초부터 3월 말까지 월요일에 쉽니다.|The guard changes on the square daily at noon. The museum closes on Mondays from early November to late March.', k: '2026-10' }),
  'copenhagen-h2': v(30, 45),
  'copenhagen-h3': v(180, 240, { b: 'rec', s: 'https://www.tivoli.dk/en', n: '여름·핼러윈·크리스마스 시즌에만 문을 열고 그 사이에는 쉽니다.|Open only for the summer, Halloween and Christmas seasons, closing in between.', k: '2026-10' }),
  'copenhagen-h4': v(60, 90),
  'copenhagen-h5': v(10, 15),
  'copenhagen-h6': v(90, 120, { n: '탑 전망대는 무료이고 왕실 접견실 등은 유료입니다. 겨울에는 월요일에 쉽니다.|The tower is free; the royal reception rooms are ticketed. Closed on Mondays in winter.' }),
  'copenhagen-h7': v(30, 45, { c: 'daily', s: 'https://www.rundetaarn.dk/en/front-page/', k: '2026-10' }),
  // Aarhus
  'aarhus-h1': v(120, 150, { c: 'daily', s: 'https://www.aros.dk/en/', k: '2026-10' }),
  'aarhus-h2': v(150, 180, { c: 'daily', s: 'https://www.dengamleby.dk/en/', k: '2026-10' }),
  'aarhus-h3': v(45, 60),
  'aarhus-h4': v(20, 30, { b: 'no', n: FREE }),
  'aarhus-h5': v(20, 30, { b: 'no', n: FREE }),
  // Odense
  'odense-h1': v(90, 120, { b: 'rec', s: 'https://hcandersenshus.dk/en/', k: '2026-10' }),
  'odense-h2': v(45, 60),
  'odense-h3': v(30, 45),
  'odense-h4': v(20, 30, { b: 'no', n: FREE }),
  // Aalborg
  'aalborg-h1': v(60, 75, { c: 'mon', s: 'https://utzoncenter.dk/en', n: '여름 방학 기간(27~32주, 대략 7월~8월 초)에는 월요일에도 엽니다.|Open on Mondays too during the Danish summer holidays (weeks 27–32, roughly July to early August).', k: '2026-10' }),
  'aalborg-h2': v(30, 45),
  'aalborg-h3': v(20, 30),
  'aalborg-h4': v(15, 20),
  // Roskilde
  'roskilde-h1': v(120, 150, { c: 'daily', s: 'https://www.vikingeskibsmuseet.dk/en/', k: '2026-10' }),
  'roskilde-h2': v(45, 60, { c: 'daily', s: 'https://roskildedomkirke.dk/english', n: '예배·장례가 있으면 관광 입장이 중단됩니다.|Sightseeing stops during services and funerals.', k: '2026-10' }),
  'roskilde-h3': v(30, 45),
  'roskilde-h4': v(15, 20),

  // Stockholm
  'stockholm-h1': v(90, 120, { c: 'daily', s: 'https://www.kungligaslotten.se/english/royal-palaces-and-sites/the-royal-palace.html', n: '국가 행사가 있으면 일부 또는 전체를 닫습니다. 근위병 교대식은 낮에 바깥뜰에서 열립니다. 왕실 공식 행사가 있는 날에는 일부 또는 전부를 닫습니다.|Partly or fully closed for state occasions. The guard changes in the outer courtyard around midday. Parts or all of it close for official royal events.', k: '2026-10' }),
  'stockholm-h2': v(90, 120),
  'stockholm-h3': v(90, 120, { c: 'daily', b: 'no', s: 'https://www.vasamuseet.se/en', k: '2026-10' }),
  'stockholm-h4': v(75, 90, { c: 'daily', s: 'https://stockholm.fotografiska.com/en', k: '2026-10' }),
  'stockholm-h5': v(45, 60, { b: 'rec', s: 'https://stadshuset.stockholm/en/', n: '내부는 가이드 투어로만 보고, 탑은 여름에만 오릅니다.|The interior is by guided tour only; the tower opens in summer only.', k: '2026-10' }),
  'stockholm-h6': v(180, 240, { c: 'daily', s: 'https://www.skansen.se/en/', k: '2026-10' }),
  'stockholm-h7': v(60, 90),
  // Gothenburg
  'gothenburg-h1': v(20, 30),
  'gothenburg-h2': v(240, 360, { s: 'https://www.liseberg.se/en/', n: '여름·핼러윈·크리스마스 시즌에만 엽니다.|Open for the summer, Halloween and Christmas seasons only.', k: '2026-10' }),
  'gothenburg-h3': v(45, 60),
  'gothenburg-h4': v(50, 50, { n: '봄부터 가을까지만 다닙니다.|Runs spring to autumn only.' }),
  'gothenburg-h5': v(150, 180, { c: 'daily', s: 'https://www.universeum.se/en/', k: '2026-10' }),
  'gothenburg-h6': v(20, 30),
  // Malmö
  'malmo-h1': v(10, 15, { n: '주거 건물이라 내부는 공개하지 않습니다.|A residential tower—not open to visitors.' }),
  'malmo-h2': v(60, 90),
  'malmo-h3': v(20, 30),
  'malmo-h4': v(90, 120),
  'malmo-h5': v(45, 90),
  // Uppsala
  'uppsala-h1': v(30, 45, { c: 'daily', b: 'no', s: 'https://www.svenskakyrkan.se/uppsaladomkyrka', n: FREE, k: '2026-10' }),
  'uppsala-h2': v(45, 60),
  'uppsala-h3': v(30, 45),
  'uppsala-h4': v(30, 60),
  'uppsala-h5': v(30, 45),
  // Kiruna
  'kiruna-h1': v(20, 30, { n: '도시 이전 사업으로 2025년에 교회 건물 전체를 새 시가지로 옮겼습니다. 재개방 여부를 확인하세요.|The whole church was moved to the new town centre in 2025 as part of the city relocation—check whether it has reopened.' }),
  'kiruna-h2': v(60, 90, { c: 'daily', s: 'https://www.icehotel.com/', n: '얼음으로 새로 짓는 겨울 호텔은 대략 12월부터 4월까지 볼 수 있고, 연중 운영하는 365관이 따로 있습니다.|The seasonal ice hotel stands from about December to April; a year-round section, Icehotel 365, is separate.', k: '2026-10' }),
  'kiruna-h3': v(180, 240, { n: '오로라는 대략 9월부터 3월 사이 맑은 밤에 볼 수 있습니다.|The aurora is visible on clear nights from roughly September to March.' }),
  'kiruna-h4': v(165, 180, { b: 'rec', s: 'https://kirunalapland.se/en/mine-tour/', n: '지하 540m 방문자 센터까지 관광 안내소에서 버스로 내려가며 약 3시간 걸립니다. 자리가 한정돼 키루나 라플란드 누리집 예약을 권합니다. 6세 이상만 참가합니다.|A bus from the tourist centre goes down to the visitor centre 540 m underground; allow about three hours. Places are limited, so book on the Kiruna Lapland site. Minimum age six.', k: '2026-10' }),

  // Helsinki
  'helsinki-h1': v(20, 30, { s: 'https://helsingintuomiokirkko.fi/en/index/uusipaataso.html', n: '관람 시간은 계절과 교회 행사에 따라 바뀌고 예배 중에는 관람할 수 없습니다. 2026년 여름 공식 시간표에는 토요일이 없었으니 주간 시간표를 확인하세요. 6~10월은 유료, 11~5월은 자율 기부(권장 8유로)입니다.|Hours change with the season and church events, and there is no sightseeing during services; the official summer 2026 timetable had no Saturday hours, so check the weekly timetable. Paid June–October; voluntary donation (€8 suggested) November–May.', k: '2026-10' }),
  'helsinki-h2': v(180, 240, { b: 'no', s: 'https://suomenlinna.fi/en/', n: '섬 입장은 무료이고 마켓 광장에서 대중교통 페리로 15분 걸립니다.|The fortress is free; the public-transport ferry from Market Square takes 15 minutes.', k: '2026-10' }),
  'helsinki-h3': v(60, 90),
  'helsinki-h4': v(30, 45),
  'helsinki-h5': v(20, 30, { c: 'daily', s: 'https://www.temppeliaukionkirkko.fi/en/', n: '1년 내내 매일 열지만 결혼식·장례식·일요 예배 때는 관광 입장이 중단됩니다.|Open every day of the year, but closed to sightseers during weddings, funerals and the Sunday service.', k: '2026-10' }),
  'helsinki-h6': v(90, 120, { n: '섬은 연중 무료로 걸을 수 있고 야외 박물관 건물은 여름에만 엽니다.|The island is free all year; the open-air museum buildings open in summer only.' }),
  'helsinki-h7': v(10, 10),
  // Turku
  'turku-h1': v(90, 120),
  'turku-h2': v(20, 30, { b: 'no', n: FREE }),
  'turku-h3': v(45, 60),
  'turku-h4': v(60, 75, { c: 'mon', s: 'https://luostarinmaki.fi/en/home-page/', k: '2026-10' }),
  'turku-h5': v(90, 120, { c: 'mon', s: 'https://www.forum-marinum.fi/en/', n: '박물관선은 여름에만 공개합니다.|The museum ships open in summer only.', k: '2026-10' }),
  // Tampere
  'tampere-h1': v(30, 45),
  'tampere-h2': v(60, 75, { c: 'mon', s: 'https://www.muumimuseo.fi/en/', k: '2026-10' }),
  'tampere-h3': v(20, 30),
  'tampere-h4': v(20, 30, { b: 'no', n: FREE }),
  'tampere-h5': v(240, 360, { s: 'https://sarkanniemi.fi/en', n: '놀이기구는 여름 시즌에만 운영합니다.|The rides run in the summer season only.', k: '2026-10' }),
  // Rovaniemi
  'rovaniemi-h1': v(120, 180, { c: 'daily', b: 'no', s: 'https://santaclausvillage.info/', n: '마을 입장과 산타 만남은 무료이고 사진은 유료입니다.|Entry and meeting Santa are free; the photo is paid.', k: '2026-10' }),
  'rovaniemi-h2': v(10, 15),
  'rovaniemi-h3': v(90, 120, { c: 'mon', s: 'https://arktikum.fi/en/', n: '3~11월 기준입니다.|As listed for March to November.', k: '2026-10' }),
  'rovaniemi-h4': v(90, 150),
  // Porvoo
  'porvoo-h1': v(60, 90),
  'porvoo-h2': v(15, 20, { b: 'no', n: FREE }),
  'porvoo-h3': v(15, 20),
  'porvoo-h4': v(30, 45),

  // Oslo
  'oslo-h1': v(20, 60, { n: '내부 가이드 투어는 여름에만 있고 예매가 필요합니다. 근위병 교대식은 매일 13시 30분입니다.|Guided tours of the interior run in summer only and need booking. The guard changes daily at 1:30 pm.' }),
  'oslo-h2': v(30, 45, { b: 'no', s: 'https://www.operaen.no/en/', n: '지붕 위는 무료로 걸어 올라갑니다.|Walking up onto the roof is free.', k: '2026-10' }),
  'oslo-h3': v(60, 90, { c: 'daily', b: 'no', s: 'https://vigeland.museum.no/en', n: '공원은 24시간 무료입니다.|The park is free and open round the clock.', k: '2026-10' }),
  'oslo-h4': v(45, 60),
  'oslo-h5': v(0, 0, { s: 'https://www.vikingtidsmuseet.no/english/', n: '바이킹 시대 박물관으로 증축하는 공사로 휴관 중이며 2027년 말 개관 예정입니다. 정확한 날짜는 아직 발표되지 않았습니다.|Closed while it is rebuilt as the Museum of the Viking Age, due to open in late 2027; no exact date has been announced.', z: true }),
  'oslo-h6': v(120, 150, { c: 'daily', b: 'rec', s: 'https://www.munch.no/en/', k: '2026-10' }),
  'oslo-h7': v(60, 90, { c: 'daily', s: 'https://holmenkollen.com/en/', k: '2026-10' }),
  // Bergen
  'bergen-h1': v(45, 60),
  'bergen-h2': v(90, 120, { c: 'daily', s: 'https://www.floyen.no/en', n: '푸니쿨라로 6분쯤 오릅니다.|About six minutes up by funicular.', k: '2026-10', x: [['2026년 11월 2~5일은 연례 점검으로 운휴합니다.|Closed 2–5 November 2026 for annual maintenance.', '2026-11-05']] }),
  'bergen-h3': v(30, 45),
  'bergen-h4': v(75, 90, { c: 'mon', s: 'https://www.kodebergen.no/en/museums/troldhaugen', n: '5월 초~9월 중순에 화~일요일 열고, 그 밖의 기간에는 행사·공연 때만 엽니다.|Open Tuesday to Sunday from early May to mid-September; otherwise only for events and concerts.', k: '2026-10' }),
  'bergen-h5': v(90, 120, { s: KODE, n: '겨울에는 월요일에 쉽니다.|Closed on Mondays in winter.' }),
  'bergen-h6': v(90, 120, { c: 'daily', s: 'https://ulriken643.no/en/', n: '강풍이 불면 케이블카가 서니 당일 운행 여부를 확인하세요. 4~9월 기준입니다.|The cable car stops in high winds—check on the day. As listed for April to September.', k: '2026-10' }),
  // Tromsø
  'tromso-h1': v(20, 30, { c: 'daily', s: 'https://ishavskatedralen.no/en/', k: '2026-10' }),
  'tromso-h2': v(60, 90, { c: 'daily', s: 'https://www.fjellheisen.no/', n: '강풍이 불면 운휴합니다.|Stops in high winds.', k: '2026-10' }),
  'tromso-h3': v(180, 300, { s: 'https://www.visittromso.no/boat-tours-tromso', b: 'rec', n: '여러 업체가 연중 운항하고 출발 시각은 계절마다 다릅니다. 겨울 오로라 크루즈는 몇 주 전에 매진되기도 하고 날씨에 따라 취소됩니다.|Several operators sail all year, with departure times changing by season. Winter aurora cruises can sell out weeks ahead and are weather-dependent.', k: '2026-10' }),
  'tromso-h4': v(60, 75, { c: 'daily', s: 'https://polaria.no/en/', k: '2026-10' }),
  'tromso-h5': v(45, 60),
  // Stavanger
  'stavanger-h1': v(240, 300, { b: 'no', s: 'https://preikestolen365.com/', n: '왕복 8km, 4시간쯤 걸리는 산행이고 난간이 없습니다. 겨울에는 장비와 가이드가 필요합니다.|An 8 km, roughly four-hour return hike with no railings. In winter it needs proper kit and a guide.' }),
  'stavanger-h2': v(30, 45),
  'stavanger-h3': v(90, 120, { c: 'daily', s: 'https://www.norskolje.museum.no/en/', n: '9~5월은 월~토요일 16시에 닫습니다. 1월 1일, 성금요일, 부활절 일요일, 5월 17일, 12월 24·25·31일은 쉽니다.|From September to May it closes at 16:00 Monday to Saturday. Closed 1 January, Good Friday, Easter Sunday, 17 May and 24, 25 and 31 December.', k: '2026-10' }),
  'stavanger-h4': v(20, 30),
  'stavanger-h5': v(20, 30),
  // Trondheim
  'trondheim-h1': v(60, 90, { c: 'daily', s: 'https://www.nidarosdomen.no/en/', n: '평일은 14시, 토요일은 13시에 닫고 일요일은 13~16시에만 엽니다. 교회 행사에 따라 바뀝니다.|Closes at 2 pm on weekdays and 1 pm on Saturdays; Sundays 1–4 pm only. Hours change with church events.', k: '2026-10' }),
  'trondheim-h2': v(10, 15),
  'trondheim-h3': v(30, 45),
  'trondheim-h4': v(15, 20),
  'trondheim-h5': v(90, 120, { c: 'mon', s: 'https://rockheim.no/en/', n: '5~8월에는 월요일에도 엽니다.|Open on Mondays too from May to August.', k: '2026-10' }),
  // Ålesund
  'alesund-h1': v(45, 60, { n: '시내 공원에서 계단 418개를 오릅니다.|418 steps up from the town park.' }),
  'alesund-h2': v(45, 60),
  'alesund-h3': v(180, 240),
  'alesund-h4': v(30, 45),
  // Flåm
  'flam-h1': v(120, 120, { c: 'daily', b: 'rec', n: '왕복 2시간쯤 걸리고 여름에는 며칠 전에 매진됩니다.|About two hours return; it sells out days ahead in summer.', k: '2026-10' }),
  'flam-h2': v(120, 120, { s: 'https://www.norwaysbest.com/en/flam/things-to-do/fjord-cruise-naeroyfjord', b: 'rec', n: '연중 운항하지만 겨울에는 편수가 줄어듭니다. 돌아오는 셔틀버스도 함께 예약하세요.|Runs all year with fewer sailings in winter. Book the return shuttle bus at the same time.', k: '2026-10' }),
  'flam-h3': v(60, 90),
  'flam-h4': v(30, 45),

  // Reykjavík
  'reykjavik-h1': v(30, 45, { c: 'daily', n: '교회는 무료이고 탑 전망대만 유료입니다. 일요일 오전 예배(11시 전후) 동안에는 탑을 닫습니다.|The church is free; only the tower is ticketed, and it closes during the Sunday morning service (around 11:00).', k: '2026-10' }),
  'reykjavik-h2': v(30, 45, { c: 'daily', b: 'no', s: 'https://www.harpa.is/en', n: '로비는 무료로 들어갑니다.|The foyer is free to enter.', k: '2026-10' }),
  'reykjavik-h3': v(10, 15),
  'reykjavik-h4': v(30, 45),
  'reykjavik-h5': v(180, 240, { c: 'daily', b: 'req', s: 'https://www.bluelagoon.com/', n: '시간 지정 예약제입니다. 2023년 말부터 인근 화산 분화로 여러 차례 임시 휴장했으니 당일 운영 여부를 확인하세요.|Timed booking only. Since late 2023 nearby eruptions have forced several temporary closures—check on the day.', k: '2026-10' }),
  // Akureyri
  'akureyri-h1': v(15, 20),
  'akureyri-h2': v(30, 45, { b: 'no', s: 'https://www.lystigardur.akureyri.is/', n: '입장은 무료이고 여름에만 엽니다.|Free; open in summer only.' }),
  'akureyri-h3': v(20, 30),
  'akureyri-h4': v(240, 360, { n: WEATHER }),
  'akureyri-h5': v(30, 45, { b: 'no', n: FREE }),
  // Vík
  'vik-h1': v(30, 45, { s: 'https://safetravel.is/', n: '갑자기 밀려오는 큰 파도로 사망 사고가 반복됩니다. 경고등을 확인하고 물가에서 멀리 떨어지세요.|Sneaker waves have killed visitors here. Obey the warning lights and stay well back from the water.' }),
  'vik-h2': v(30, 45, { n: '바다오리 번식기(5~6월)에는 출입 시간이 제한됩니다.|Access hours are limited in the puffin nesting season (May–June).' }),
  'vik-h3': v(10, 15),
  'vik-h4': v(15, 20),
  'vik-h5': v(60, 120),
  // Húsavík
  'husavik-h1': v(180, 180, { b: 'rec', n: '업체에 따라 대략 3~11월에 매일 출항하고 날씨가 나쁘면 취소됩니다. 대개 출발 24시간 전까지 무료로 취소할 수 있습니다.|Depending on the operator, trips run daily from about March to November and are cancelled in bad weather. Free cancellation is usually possible up to 24 hours ahead.', k: '2026-10' }),
  'husavik-h2': v(10, 15),
  'husavik-h3': v(45, 60, { c: 'daily', s: 'https://www.hvalasafn.is/en/', k: '2026-10' }),
  'husavik-h4': v(90, 120, { c: 'daily', b: 'rec', s: 'https://www.geosea.is/', k: '2026-10' }),
  'husavik-h5': v(120, 180),
  // Selfoss (Golden Circle)
  'selfoss-h1': v(45, 60, { b: 'no', n: '입장은 무료이고 간헐천은 5~10분마다 솟습니다.|Free; the geyser erupts every five to ten minutes.' }),
  'selfoss-h2': v(45, 60, { b: 'no', n: FREE }),
  'selfoss-h3': v(90, 120, { b: 'no', s: 'https://www.thingvellir.is/en/', n: '입장은 무료이고 주차만 유료입니다.|Free; only parking is charged.', k: '2026-10' }),
  'selfoss-h4': v(30, 40, { s: 'https://kerid.is/', n: '소액의 입장료가 있습니다.|A small entry fee applies.' }),
  'selfoss-h5': v(30, 45),
}
