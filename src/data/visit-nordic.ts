import type { HighlightVisit } from '../types'
import { v } from './visit-helper'

const FREE = '입장은 무료입니다.|Entry is free.'
const WEATHER = '날씨가 급변하니 출발 전에 예보와 도로 상황을 확인하세요.|Conditions change fast—check the forecast and roads before setting out.'
const KODE = 'https://www.kodebergen.no/en'

/** Denmark, Sweden, Finland, Norway, Iceland */
export const visitNordic: Record<string, HighlightVisit> = {
  // Copenhagen
  'copenhagen-h1': v(45, 75, { s: 'https://denkongeligesamling.dk/en/amalienborg-museum/', n: '근위병 교대식은 매일 정오에 광장에서 열립니다. 박물관은 겨울에 월요일 휴관합니다.|The guard changes on the square daily at noon. The museum closes on Mondays in winter.' }),
  'copenhagen-h2': v(30, 45),
  'copenhagen-h3': v(180, 240, { b: 'rec', s: 'https://www.tivoli.dk/en', n: '여름·핼러윈·크리스마스 시즌에만 문을 열고 그 사이에는 쉽니다.|Open only for the summer, Halloween and Christmas seasons, closing in between.', k: '2026-10' }),
  'copenhagen-h4': v(60, 90),
  'copenhagen-h5': v(10, 15),
  'copenhagen-h6': v(90, 120, { n: '탑 전망대는 무료이고 왕실 접견실 등은 유료입니다. 겨울에는 월요일에 쉽니다.|The tower is free; the royal reception rooms are ticketed. Closed on Mondays in winter.' }),
  'copenhagen-h7': v(30, 45, { c: 'daily', s: 'https://www.rundetaarn.dk/en/front-page/', k: '2026-10' }),
  // Aarhus
  'aarhus-h1': v(120, 150, { s: 'https://www.aros.dk/en/' }),
  'aarhus-h2': v(150, 180, { c: 'daily', s: 'https://www.dengamleby.dk/en/' }),
  'aarhus-h3': v(45, 60),
  'aarhus-h4': v(20, 30, { b: 'no', n: FREE }),
  'aarhus-h5': v(20, 30, { b: 'no', n: FREE }),
  // Odense
  'odense-h1': v(90, 120, { b: 'rec', s: 'https://hcandersenshus.dk/en/' }),
  'odense-h2': v(45, 60),
  'odense-h3': v(30, 45),
  'odense-h4': v(20, 30, { b: 'no', n: FREE }),
  // Aalborg
  'aalborg-h1': v(60, 75, { c: 'mon', s: 'https://utzoncenter.dk/en' }),
  'aalborg-h2': v(30, 45),
  'aalborg-h3': v(20, 30),
  'aalborg-h4': v(15, 20),
  // Roskilde
  'roskilde-h1': v(120, 150, { c: 'daily', s: 'https://www.vikingeskibsmuseet.dk/en/' }),
  'roskilde-h2': v(45, 60, { s: 'https://roskildedomkirke.dk/english', n: '예배·장례가 있으면 관광 입장이 중단됩니다.|Sightseeing stops during services and funerals.' }),
  'roskilde-h3': v(30, 45),
  'roskilde-h4': v(15, 20),

  // Stockholm
  'stockholm-h1': v(90, 120, { s: 'https://www.kungligaslotten.se/english/royal-palaces-and-sites/the-royal-palace.html', n: '국가 행사가 있으면 일부 또는 전체를 닫습니다. 근위병 교대식은 낮에 바깥뜰에서 열립니다.|Partly or fully closed for state occasions. The guard changes in the outer courtyard around midday.' }),
  'stockholm-h2': v(90, 120),
  'stockholm-h3': v(90, 120, { c: 'daily', b: 'no', s: 'https://www.vasamuseet.se/en', k: '2026-10' }),
  'stockholm-h4': v(75, 90, { c: 'daily', s: 'https://stockholm.fotografiska.com/en', k: '2026-10' }),
  'stockholm-h5': v(45, 60, { b: 'rec', s: 'https://stadshuset.stockholm/en/', n: '내부는 가이드 투어로만 보고, 탑은 여름에만 오릅니다.|The interior is by guided tour only; the tower opens in summer only.', k: '2026-10' }),
  'stockholm-h6': v(180, 240, { c: 'daily', s: 'https://www.skansen.se/en/', k: '2026-10' }),
  'stockholm-h7': v(60, 90),
  // Gothenburg
  'gothenburg-h1': v(20, 30),
  'gothenburg-h2': v(240, 360, { s: 'https://www.liseberg.se/en/', n: '여름·핼러윈·크리스마스 시즌에만 엽니다.|Open for the summer, Halloween and Christmas seasons only.' }),
  'gothenburg-h3': v(45, 60),
  'gothenburg-h4': v(50, 50, { n: '봄부터 가을까지만 다닙니다.|Runs spring to autumn only.' }),
  'gothenburg-h5': v(150, 180, { c: 'daily', s: 'https://www.universeum.se/en/' }),
  'gothenburg-h6': v(20, 30),
  // Malmö
  'malmo-h1': v(10, 15, { n: '주거 건물이라 내부는 공개하지 않습니다.|A residential tower—not open to visitors.' }),
  'malmo-h2': v(60, 90),
  'malmo-h3': v(20, 30),
  'malmo-h4': v(90, 120),
  'malmo-h5': v(45, 90),
  // Uppsala
  'uppsala-h1': v(30, 45, { c: 'daily', b: 'no', s: 'https://www.svenskakyrkan.se/uppsaladomkyrka', n: FREE }),
  'uppsala-h2': v(45, 60),
  'uppsala-h3': v(30, 45),
  'uppsala-h4': v(30, 60),
  'uppsala-h5': v(30, 45),
  // Kiruna
  'kiruna-h1': v(20, 30, { n: '도시 이전 사업으로 2025년에 교회 건물 전체를 새 시가지로 옮겼습니다. 재개방 여부를 확인하세요.|The whole church was moved to the new town centre in 2025 as part of the city relocation—check whether it has reopened.' }),
  'kiruna-h2': v(60, 90, { c: 'daily', s: 'https://www.icehotel.com/', n: '얼음으로 새로 짓는 겨울 호텔은 대략 12월부터 4월까지 볼 수 있고, 연중 운영하는 365관이 따로 있습니다.|The seasonal ice hotel stands from about December to April; a year-round section, Icehotel 365, is separate.' }),
  'kiruna-h3': v(180, 240, { n: '오로라는 대략 9월부터 3월 사이 맑은 밤에 볼 수 있습니다.|The aurora is visible on clear nights from roughly September to March.' }),
  'kiruna-h4': v(165, 180, { b: 'req', n: '지하 540m 방문자 센터 투어는 관광 안내소에서 예약합니다.|Tours to the visitor centre 540 m underground are booked through the tourist office.' }),

  // Helsinki
  'helsinki-h1': v(20, 30, { c: 'daily', n: '여름 성수기에는 입장료를 받습니다.|An entry fee is charged in the summer season.' }),
  'helsinki-h2': v(180, 240, { b: 'no', s: 'https://suomenlinna.fi/en/', n: '섬 입장은 무료이고 마켓 광장에서 대중교통 페리로 15분 걸립니다.|The fortress is free; the public-transport ferry from Market Square takes 15 minutes.' }),
  'helsinki-h3': v(60, 90),
  'helsinki-h4': v(30, 45),
  'helsinki-h5': v(20, 30, { s: 'https://www.temppeliaukionkirkko.fi/en/', n: '예배·행사 때는 관광 입장이 중단됩니다.|Closed to sightseers during services and events.' }),
  'helsinki-h6': v(90, 120, { n: '섬은 연중 무료로 걸을 수 있고 야외 박물관 건물은 여름에만 엽니다.|The island is free all year; the open-air museum buildings open in summer only.' }),
  'helsinki-h7': v(10, 10),
  // Turku
  'turku-h1': v(90, 120),
  'turku-h2': v(20, 30, { b: 'no', n: FREE }),
  'turku-h3': v(45, 60),
  'turku-h4': v(60, 75, { s: 'https://luostarinmaki.fi/en/home-page/' }),
  'turku-h5': v(90, 120, { s: 'https://www.forum-marinum.fi/en/', n: '박물관선은 여름에만 공개합니다.|The museum ships open in summer only.' }),
  // Tampere
  'tampere-h1': v(30, 45),
  'tampere-h2': v(60, 75, { c: 'mon', s: 'https://www.muumimuseo.fi/en/' }),
  'tampere-h3': v(20, 30),
  'tampere-h4': v(20, 30, { b: 'no', n: FREE }),
  'tampere-h5': v(240, 360, { s: 'https://sarkanniemi.fi/en', n: '놀이기구는 여름 시즌에만 운영합니다.|The rides run in the summer season only.' }),
  // Rovaniemi
  'rovaniemi-h1': v(120, 180, { c: 'daily', b: 'no', s: 'https://santaclausvillage.info/', n: '마을 입장과 산타 만남은 무료이고 사진은 유료입니다.|Entry and meeting Santa are free; the photo is paid.' }),
  'rovaniemi-h2': v(10, 15),
  'rovaniemi-h3': v(90, 120, { s: 'https://arktikum.fi/en/' }),
  'rovaniemi-h4': v(90, 150),
  // Porvoo
  'porvoo-h1': v(60, 90),
  'porvoo-h2': v(15, 20, { b: 'no', n: FREE }),
  'porvoo-h3': v(15, 20),
  'porvoo-h4': v(30, 45),

  // Oslo
  'oslo-h1': v(20, 60, { n: '내부 가이드 투어는 여름에만 있고 예매가 필요합니다. 근위병 교대식은 매일 13시 30분입니다.|Guided tours of the interior run in summer only and need booking. The guard changes daily at 1:30 pm.' }),
  'oslo-h2': v(30, 45, { b: 'no', s: 'https://www.operaen.no/en/', n: '지붕 위는 무료로 걸어 올라갑니다.|Walking up onto the roof is free.' }),
  'oslo-h3': v(60, 90, { c: 'daily', b: 'no', s: 'https://vigeland.museum.no/en', n: '공원은 24시간 무료입니다.|The park is free and open round the clock.' }),
  'oslo-h4': v(45, 60),
  'oslo-h5': v(0, 0, { s: 'https://www.vikingtidsmuseet.no/english/', n: '바이킹 시대 박물관으로 증축하는 공사로 휴관 중이며 2027년 재개관 예정입니다.|Closed while it is rebuilt as the Museum of the Viking Age, due to open in 2027.' }),
  'oslo-h6': v(120, 150, { c: 'daily', b: 'rec', s: 'https://www.munch.no/en/' }),
  'oslo-h7': v(60, 90, { s: 'https://holmenkollen.com/en/' }),
  // Bergen
  'bergen-h1': v(45, 60),
  'bergen-h2': v(90, 120, { c: 'daily', s: 'https://www.floyen.no/en', n: '푸니쿨라로 6분쯤 오릅니다.|About six minutes up by funicular.' }),
  'bergen-h3': v(30, 45),
  'bergen-h4': v(75, 90, { s: 'https://www.kodebergen.no/en/museums/troldhaugen' }),
  'bergen-h5': v(90, 120, { s: KODE, n: '겨울에는 월요일에 쉽니다.|Closed on Mondays in winter.' }),
  'bergen-h6': v(90, 120, { s: 'https://ulriken643.no/en/', n: '강풍이 불면 케이블카가 서니 당일 운행 여부를 확인하세요.|The cable car stops in high winds—check on the day.' }),
  // Tromsø
  'tromso-h1': v(20, 30, { s: 'https://ishavskatedralen.no/en/' }),
  'tromso-h2': v(60, 90, { c: 'daily', s: 'https://www.fjellheisen.no/', n: '강풍이 불면 운휴합니다.|Stops in high winds.' }),
  'tromso-h3': v(180, 300, { b: 'rec' }),
  'tromso-h4': v(60, 75, { c: 'daily', s: 'https://polaria.no/en/' }),
  'tromso-h5': v(45, 60),
  // Stavanger
  'stavanger-h1': v(240, 300, { b: 'no', s: 'https://preikestolen365.com/', n: '왕복 8km, 4시간쯤 걸리는 산행이고 난간이 없습니다. 겨울에는 장비와 가이드가 필요합니다.|An 8 km, roughly four-hour return hike with no railings. In winter it needs proper kit and a guide.' }),
  'stavanger-h2': v(30, 45),
  'stavanger-h3': v(90, 120, { c: 'daily', s: 'https://www.norskolje.museum.no/en/' }),
  'stavanger-h4': v(20, 30),
  'stavanger-h5': v(20, 30),
  // Trondheim
  'trondheim-h1': v(60, 90, { c: 'daily', s: 'https://www.nidarosdomen.no/en/' }),
  'trondheim-h2': v(10, 15),
  'trondheim-h3': v(30, 45),
  'trondheim-h4': v(15, 20),
  'trondheim-h5': v(90, 120, { c: 'mon', s: 'https://rockheim.no/en/' }),
  // Ålesund
  'alesund-h1': v(45, 60, { n: '시내 공원에서 계단 418개를 오릅니다.|418 steps up from the town park.' }),
  'alesund-h2': v(45, 60),
  'alesund-h3': v(180, 240),
  'alesund-h4': v(30, 45),
  // Flåm
  'flam-h1': v(120, 120, { c: 'daily', b: 'rec', n: '왕복 2시간쯤 걸리고 여름에는 며칠 전에 매진됩니다.|About two hours return; it sells out days ahead in summer.' }),
  'flam-h2': v(120, 120, { b: 'rec' }),
  'flam-h3': v(60, 90),
  'flam-h4': v(30, 45),

  // Reykjavík
  'reykjavik-h1': v(30, 45, { c: 'daily', n: '교회는 무료이고 탑 전망대만 유료입니다. 예배 중에는 탑을 닫습니다.|The church is free; only the tower is ticketed, and it closes during services.' }),
  'reykjavik-h2': v(30, 45, { b: 'no', s: 'https://www.harpa.is/en', n: '로비는 무료로 들어갑니다.|The foyer is free to enter.' }),
  'reykjavik-h3': v(10, 15),
  'reykjavik-h4': v(30, 45),
  'reykjavik-h5': v(180, 240, { c: 'daily', b: 'req', s: 'https://www.bluelagoon.com/', n: '시간 지정 예약제입니다. 2023년 말부터 인근 화산 분화로 여러 차례 임시 휴장했으니 당일 운영 여부를 확인하세요.|Timed booking only. Since late 2023 nearby eruptions have forced several temporary closures—check on the day.' }),
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
  'husavik-h1': v(180, 180, { b: 'rec', n: '날씨가 나쁘면 출항이 취소됩니다.|Trips are cancelled in bad weather.' }),
  'husavik-h2': v(10, 15),
  'husavik-h3': v(45, 60, { s: 'https://www.hvalasafn.is/en/' }),
  'husavik-h4': v(90, 120, { c: 'daily', b: 'rec', s: 'https://www.geosea.is/' }),
  'husavik-h5': v(120, 180),
  // Selfoss (Golden Circle)
  'selfoss-h1': v(45, 60, { b: 'no', n: '입장은 무료이고 간헐천은 5~10분마다 솟습니다.|Free; the geyser erupts every five to ten minutes.' }),
  'selfoss-h2': v(45, 60, { b: 'no', n: FREE }),
  'selfoss-h3': v(90, 120, { b: 'no', s: 'https://www.thingvellir.is/en/', n: '입장은 무료이고 주차만 유료입니다.|Free; only parking is charged.' }),
  'selfoss-h4': v(30, 40, { s: 'https://kerid.is/', n: '소액의 입장료가 있습니다.|A small entry fee applies.' }),
  'selfoss-h5': v(30, 45),
}
