import type { HighlightVisit } from '../types'
import { v } from './visit-helper'

const FREE = '입장은 무료입니다.|Entry is free.'
const MOSQUE = '예배 시간에는 관광객이 들어갈 수 없고 신발을 벗어야 합니다. 여성은 머리를 가립니다.|Closed to visitors during prayers; remove shoes, and women cover their hair.'
const PLIT = 'https://np-plitvicka-jezera.hr/en/'
const PLIT_T = 'https://ticketing.np-plitvicka-jezera.hr/'
const POSTOJNA = 'https://www.postojnska-jama.eu/en/'

/** Croatia, Slovenia, Bosnia, Montenegro, Serbia, North Macedonia, Albania, Kosovo */
export const visitBalkan: Record<string, HighlightVisit> = {
  // Zagreb
  'zagreb-h1': v(90, 120, { n: '매일 정오에 로트르슈차크 탑에서 대포를 쏩니다.|A cannon is fired from the Lotrščak Tower at noon each day.' }),
  'zagreb-h2': v(45, 60, { c: 'daily', s: 'https://brokenships.com/' }),
  'zagreb-h3': v(30, 45, { b: 'no', n: '시장은 오전에 서고 오후 일찍 파합니다.|A morning market, winding down in the early afternoon.' }),
  'zagreb-h4': v(15, 20),
  'zagreb-h5': v(45, 60, { b: 'no', n: FREE }),
  // Dubrovnik
  'dubrovnik-h1': v(90, 120, { c: 'daily', s: 'https://www.dubrovnikpass.com/', n: '성벽 한 바퀴는 약 2km이고 그늘이 없습니다. 두브로브니크 패스에 성벽 입장이 포함됩니다.|The circuit is about 2 km with no shade. The Dubrovnik Pass includes the walls.' }),
  'dubrovnik-h2': v(20, 30),
  'dubrovnik-h3': v(30, 45, { n: '성벽 입장권으로 함께 봅니다.|Included with the city walls ticket.' }),
  'dubrovnik-h4': v(60, 75, { s: 'https://www.dubrovnikcablecar.com/', n: '강풍이 불면 운휴하고 겨울에는 쉬는 기간이 있습니다.|Stops in high winds and closes for part of the winter.' }),
  'dubrovnik-h5': v(180, 240, { n: '옛 항구에서 배로 15분쯤 걸리고 대략 4월부터 11월 초까지만 다닙니다.|About 15 minutes by boat from the Old Port, running roughly April to early November.' }),
  'dubrovnik-h6': v(15, 20),
  'dubrovnik-h7': v(10, 15),
  // Split
  'split-h1': v(90, 120, { b: 'no', n: '궁전 구역은 무료로 걷고 지하 홀·대성당·종탑은 유료입니다.|The palace quarter is free to walk; the cellars, cathedral and bell tower are ticketed.' }),
  'split-h2': v(20, 30),
  'split-h3': v(90, 120),
  'split-h4': v(10, 15),
  'split-h5': v(240, 480, { n: '여름 성수기에는 쾌속선 표를 며칠 전에 사 두세요.|In high summer buy catamaran tickets a few days ahead.' }),
  'split-h6': v(20, 30),
  // Zadar
  'zadar-h1': v(20, 30, { b: 'no', n: FREE }),
  'zadar-h2': v(15, 20, { b: 'no', n: '해가 진 뒤에 불이 켜집니다.|Lights up after sunset.' }),
  'zadar-h3': v(15, 20),
  'zadar-h4': v(15, 20),
  'zadar-h5': v(45, 60),
  // Rovinj
  'rovinj-h1': v(30, 45),
  'rovinj-h2': v(60, 90),
  'rovinj-h3': v(20, 30),
  'rovinj-h4': v(60, 120),
  'rovinj-h5': v(180, 240),
  // Hvar
  'hvar-h1': v(60, 75),
  'hvar-h2': v(15, 20),
  'hvar-h3': v(240, 360),
  'hvar-h4': v(60, 90, { n: '라벤더는 6월 말~7월 초에 핍니다.|The lavender blooms in late June and early July.' }),
  'hvar-h5': v(90, 120),
  // Plitvice
  'plitvice-h1': v(30, 45, { c: 'daily', b: 'rec', s: PLIT, t: PLIT_T, n: '입장권은 입구와 시간이 정해져 있고 시간당 인원이 제한됩니다. 현장에서도 남은 표를 팔지만 성수기에는 온라인으로 미리 사세요.|Tickets are for a set entrance and time, with hourly limits. Leftover tickets are sold at the gate, but buy online ahead in high season.', k: '2026-10' }),
  'plitvice-h2': v(240, 360, { c: 'daily', b: 'rec', s: PLIT, t: PLIT_T, n: '전체 코스는 4~6시간 걸립니다. 호수에서 수영은 금지입니다.|The full routes take four to six hours. Swimming in the lakes is forbidden.', k: '2026-10' }),
  'plitvice-h3': v(120, 180, { s: PLIT, t: PLIT_T }),
  'plitvice-h4': v(45, 60),
  // Trogir
  'trogir-h1': v(30, 45),
  'trogir-h2': v(20, 30),
  'trogir-h3': v(20, 30),
  'trogir-h4': v(10, 15),

  // Ljubljana
  'ljubljana-h1': v(75, 90, { c: 'daily', s: 'https://www.ljubljanskigrad.si/en/', n: '성 안뜰은 무료이고 푸니쿨라와 전시는 유료입니다.|The courtyard is free; the funicular and exhibitions are ticketed.' }),
  'ljubljana-h2': v(10, 10),
  'ljubljana-h3': v(15, 20),
  'ljubljana-h4': v(45, 60),
  'ljubljana-h5': v(30, 45, { b: 'no', n: '일요일과 공휴일에는 노천 시장 대부분이 쉽니다. 운영사 안내로는 여름 등 일부 기간에 일부 구역만 엽니다.|Most of the open-air market is closed on Sundays and holidays; according to the operator some sections open on Sundays in part of the year.' }),
  // Bled
  'bled-h1': v(90, 120, { n: '호수 한 바퀴는 약 6km입니다.|The lakeside loop is about 6 km.' }),
  'bled-h2': v(75, 90, { n: '전통 나룻배(플레트나)로 건넙니다. 호수가 얼거나 날씨가 나쁘면 다니지 않습니다.|Reached by traditional pletna boat; no service when the lake freezes or in bad weather.' }),
  'bled-h3': v(60, 75, { c: 'daily', s: 'https://www.blejski-grad.si/en/' }),
  'bled-h4': v(20, 30),
  'bled-h5': v(60, 75),
  // Piran
  'piran-h1': v(15, 20),
  'piran-h2': v(20, 30),
  'piran-h3': v(20, 30),
  'piran-h4': v(30, 45),
  'piran-h5': v(20, 30),
  // Maribor
  'maribor-h1': v(15, 20),
  'maribor-h2': v(20, 30),
  'maribor-h3': v(45, 60),
  'maribor-h4': v(30, 45),
  'maribor-h5': v(120, 180),
  // Postojna
  'postojna-h1': v(90, 120, { c: 'daily', b: 'rec', s: POSTOJNA, n: '정해진 시간에 출발하는 투어로만 들어갑니다. 동굴 안은 1년 내내 10도쯤입니다.|Entered on tours at fixed times only. It is about 10°C inside all year.', k: '2026-10' }),
  'postojna-h2': v(60, 75, { c: 'daily', s: POSTOJNA, n: '동굴에서 9km 떨어져 있고 묶음권이 있습니다.|Nine kilometres from the cave, with combined tickets available.' }),
  'postojna-h3': v(30, 40, { s: POSTOJNA }),
  'postojna-h4': v(30, 45),
  'postojna-h5': v(30, 45),

  // Sarajevo
  'sarajevo-h1': v(60, 90),
  'sarajevo-h2': v(20, 30, { n: MOSQUE }),
  'sarajevo-h3': v(60, 75, { c: 'daily', s: 'https://www.mcsarajevo.ba/tunel-spasa', n: '공항 근처에 있어 시내에서 택시로 20~30분 걸립니다.|Near the airport, 20–30 minutes by taxi from the centre.' }),
  'sarajevo-h4': v(10, 15),
  'sarajevo-h5': v(60, 90, { s: 'https://zicara.ba/' }),
  // Mostar
  'mostar-h1': v(20, 30, { b: 'no', n: '다리는 무료이고 돌바닥이 미끄럽습니다.|The bridge is free; its stones are slippery.' }),
  'mostar-h2': v(30, 45),
  'mostar-h3': v(20, 30, { n: '첨탑에 오르면 다리가 한눈에 보입니다. 입장료가 있습니다.|The minaret gives the classic bridge view. An entry fee applies.' }),
  'mostar-h4': v(20, 30),
  'mostar-h5': v(90, 120),
  // Banja Luka
  'banja-luka-h1': v(30, 45, { b: 'no', n: FREE }),
  'banja-luka-h2': v(15, 20),
  'banja-luka-h3': v(20, 30),
  'banja-luka-h4': v(30, 45),
  'banja-luka-h5': v(15, 20, { n: MOSQUE }),
  // Travnik
  'travnik-h1': v(45, 60),
  'travnik-h2': v(15, 20),
  'travnik-h3': v(30, 45),
  'travnik-h4': v(180, 240),
  'travnik-h5': v(20, 30),
  // Neum
  'neum-h1': v(60, 180),
  'neum-h2': v(20, 30),
  'neum-h3': v(15, 20),

  // Kotor
  'kotor-h1': v(60, 90),
  'kotor-h2': v(20, 30),
  'kotor-h3': v(90, 120, { n: '계단 약 1,350개를 오릅니다. 입장료가 있고 그늘이 없어 아침이나 해 질 무렵이 좋습니다.|Around 1,350 steps. There is an entry fee and no shade—go early or late in the day.' }),
  'kotor-h4': v(120, 180),
  'kotor-h5': v(20, 30),
  // Budva
  'budva-h1': v(45, 60),
  'budva-h2': v(60, 120),
  'budva-h3': v(120, 180),
  'budva-h4': v(60, 120),
  'budva-h5': v(20, 30, { n: '섬은 호텔 투숙객 전용이라 들어갈 수 없고 전망대와 해변에서만 봅니다. 5년 만인 2026년 7월에 호텔이 다시 문을 열었습니다.|The island is for hotel guests only—view it from the lookout and beach. The resort reopened in July 2026 after five years closed.' }),
  // Podgorica
  'podgorica-h1': v(10, 15),
  'podgorica-h2': v(30, 45),
  'podgorica-h3': v(10, 15),
  'podgorica-h4': v(30, 45),
  'podgorica-h5': v(45, 60),
  // Herceg Novi
  'herceg-novi-h1': v(20, 30),
  'herceg-novi-h2': v(20, 30),
  'herceg-novi-h3': v(30, 45),
  'herceg-novi-h4': v(30, 45),
  'herceg-novi-h5': v(45, 60),

  // Belgrade
  'belgrade-h1': v(90, 120, { b: 'no', n: '성채 공원은 24시간 무료입니다.|The fortress park is free and always open.' }),
  'belgrade-h2': v(45, 90),
  'belgrade-h3': v(30, 45, { c: 'daily', b: 'no', s: 'https://hramsvetogsave.rs/', n: FREE }),
  'belgrade-h4': v(30, 45),
  'belgrade-h5': v(90, 120),
  'belgrade-h6': v(10, 15),
  // Novi Sad
  'novi-sad-h1': v(75, 90, { b: 'no', s: 'https://novisad.travel/en/', n: '성채는 무료이고 지하 통로 투어만 유료입니다.|The fortress is free; only the underground tunnels tour is paid.' }),
  'novi-sad-h2': v(15, 20),
  'novi-sad-h3': v(20, 30),
  'novi-sad-h4': v(30, 45),
  'novi-sad-h5': v(180, 240),
  // Niš
  'nis-h1': v(45, 60, { b: 'no', n: FREE }),
  'nis-h2': v(20, 30, { c: 'mon', k: '2026-10' }),
  'nis-h3': v(20, 30),
  'nis-h4': v(20, 30),
  'nis-h5': v(30, 45),
  // Subotica
  'subotica-h1': v(30, 60, { s: 'https://visitsubotica.rs/en/', n: '내부와 탑은 정해진 시간의 가이드 투어로 봅니다.|The interior and tower are seen on guided tours at set times.' }),
  'subotica-h2': v(20, 30),
  'subotica-h3': v(90, 120),
  'subotica-h4': v(15, 20),
  'subotica-h5': v(45, 60),

  // Skopje
  'skopje-h1': v(10, 15),
  'skopje-h2': v(60, 90),
  'skopje-h3': v(15, 20),
  'skopje-h4': v(180, 240, { n: '시내에서 버스나 택시로 40분쯤 걸립니다.|About 40 minutes from the city by bus or taxi.' }),
  'skopje-h5': v(30, 45, { b: 'no', n: FREE }),
  // Ohrid
  'ohrid-h1': v(60, 120),
  'ohrid-h2': v(20, 30),
  'ohrid-h3': v(60, 90),
  'ohrid-h4': v(30, 45),
  'ohrid-h5': v(30, 45),
  // Bitola
  'bitola-h1': v(30, 45),
  'bitola-h2': v(45, 60),
  'bitola-h3': v(10, 10),
  'bitola-h4': v(20, 30),
  'bitola-h5': v(20, 30),
  // Tetovo
  'tetovo-h1': v(20, 30, { b: 'no', n: MOSQUE }),
  'tetovo-h2': v(20, 30),
  'tetovo-h3': v(240, 360),
  'tetovo-h4': v(30, 45),
  'tetovo-h5': v(15, 20),

  // Tirana
  'tirana-h1': v(20, 30),
  'tirana-h2': v(45, 60),
  'tirana-h3': v(150, 180, { c: 'tue', s: 'https://dajtiekspres.com/', n: '케이블카로 15분쯤 오릅니다. 공휴일이 아닌 화요일에는 쉽니다.|About 15 minutes up by cable car; closed on Tuesdays unless a public holiday.', k: '2026-10' }),
  'tirana-h4': v(20, 30, { b: 'no', n: '바깥 계단으로 꼭대기까지 무료로 오릅니다.|Free to climb by the outside steps.' }),
  'tirana-h5': v(10, 15, { n: MOSQUE }),
  // Berat
  'berat-h1': v(75, 90),
  'berat-h2': v(30, 45),
  'berat-h3': v(30, 45),
  'berat-h4': v(30, 40),
  'berat-h5': v(15, 20),
  // Gjirokastër
  'gjirokaster-h1': v(75, 90),
  'gjirokaster-h2': v(30, 45),
  'gjirokaster-h3': v(30, 40),
  'gjirokaster-h4': v(30, 40),
  'gjirokaster-h5': v(20, 30),
  // Sarandë
  'sarande-h1': v(30, 45),
  'sarande-h2': v(30, 45),
  'sarande-h3': v(75, 90, { n: '주차장에서 샘까지 2km쯤 걷고 입장료가 있습니다. 수영은 금지입니다.|About 2 km on foot from the car park, with an entry fee. Swimming is banned.' }),
  'sarande-h4': v(120, 150, { c: 'daily', s: 'https://butrint.al/' }),
  'sarande-h5': v(120, 240),

  // Kosovo
  'pristina-h1': v(10, 15),
  'pristina-h2': v(15, 20),
  'pristina-h3': v(30, 45),
  'prizren-h1': v(60, 75, { b: 'no', n: '입장은 무료이고 가파른 오르막을 15~20분 걷습니다.|Free; a steep 15–20 minute climb.' }),
  'prizren-h2': v(15, 20, { n: MOSQUE }),
  'prizren-h3': v(45, 60),
  'peja-h1': v(120, 180),
  'peja-h2': v(40, 45, { n: '입구 검문소에서 여권을 확인합니다. 어깨와 무릎을 가리세요.|Passports are checked at the gate. Cover shoulders and knees.' }),
  'peja-h3': v(30, 45),
}
