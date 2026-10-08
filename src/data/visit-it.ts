import type { HighlightVisit } from '../types'
import { v } from './visit-helper'

const FREE = '입장은 무료입니다.|Entry is free.'
const DRESS = '입장은 무료이며 어깨와 무릎을 가리는 복장이어야 합니다.|Free; shoulders and knees must be covered.'
const FAI_BALB = 'https://fondoambiente.it/luoghi/villa-del-balbianello'
const RAVENNA = 'https://www.ravennamosaici.it/en/'
const RAVENNA_NOTE = '산 비탈레, 갈라 플라치디아 등 다섯 곳을 통합권 한 장으로 봅니다.|One combined ticket covers San Vitale, Galla Placidia and three other monuments.'
const OPA = 'https://www.opapisa.it/en/'
const VAT = 'https://www.museivaticani.va/content/museivaticani/en.html'
const VAT_T = 'https://tickets.museivaticani.va/home'
const POMPEII = 'https://pompeiisites.org/en/'
const BOAT = '배는 날씨와 파도에 따라 결항합니다.|Boats are cancelled in rough weather.'

/** Italy, Vatican City, San Marino */
export const visitIt: Record<string, HighlightVisit> = {
  // Milan
  'milan-h1': v(120, 150, { c: 'daily', b: 'rec', s: 'https://www.duomomilano.it/en/', t: 'https://ticket.duomomilano.it/en/', n: '옥상 테라스는 별도 표이며 어깨와 무릎을 가려야 들어갑니다.|The rooftop terraces need their own ticket; shoulders and knees must be covered.' }),
  'milan-h2': v(20, 30),
  'milan-h3': v(60, 120, { s: 'https://www.milanocastello.it/en', n: '성 안뜰은 무료이고 안쪽 박물관은 월요일에 쉽니다.|The courtyards are free; the museums inside close on Mondays.' }),
  'milan-h4': v(60, 90),
  'milan-h5': v(90, 120, { c: 'mon', b: 'rec', s: 'https://pinacotecabrera.org/en/' }),
  'milan-h6': v(10, 15),
  'milan-h7': v(15, 20),
  // Como
  'como-h1': v(20, 30, { b: 'no', n: FREE }),
  'como-h2': v(60, 90),
  'como-h3': v(120, 180, { s: 'https://www.navigazionelaghi.it/en/' }),
  'como-h4': v(90, 120, { c: 'mon,wed', b: 'req', s: FAI_BALB, n: '봄부터 가을까지만 열고, 레노(Lenno)에서 배나 도보로 들어갑니다.|Open spring to autumn only; reached by boat or on foot from Lenno.' }),
  // Bergamo
  'bergamo-h1': v(120, 180),
  'bergamo-h2': v(20, 30),
  'bergamo-h3': v(15, 20),
  'bergamo-h4': v(45, 60),
  'bergamo-h5': v(10, 15),
  // Stresa
  'stresa-h1': v(120, 150, { b: 'rec', n: '궁전과 정원은 3월 중순부터 11월 초까지만 엽니다.|The palace and gardens open from mid-March to early November only.' }),
  'stresa-h2': v(45, 60),
  'stresa-h3': v(90, 120, { n: '궁전과 정원은 3월 중순부터 11월 초까지만 엽니다.|The palace and gardens open from mid-March to early November only.' }),
  'stresa-h4': v(120, 180, { n: '스트레사에서 올라가는 케이블카는 2021년 사고 뒤로 운행하지 않습니다. 차로만 갈 수 있습니다.|The cable car from Stresa has not run since the 2021 accident; the summit is reachable only by road.' }),
  // Sirmione
  'sirmione-h1': v(45, 60, { c: 'mon' }),
  'sirmione-h2': v(60, 90),
  'sirmione-h3': v(45, 90),
  'sirmione-h4': v(60, 180, { s: 'https://www.navigazionelaghi.it/en/' }),
  // Mantua
  'mantua-h1': v(120, 150, { c: 'mon', b: 'rec', n: '신부의 방(Camera degli Sposi)은 입장 인원이 제한돼 시간 지정 예약이 필요합니다.|The Camera degli Sposi has limited numbers and needs a timed slot.' }),
  'mantua-h2': v(75, 90, { c: 'daily', s: 'https://www.centropalazzote.it/en/' }),
  'mantua-h3': v(20, 30, { b: 'no', n: FREE }),
  'mantua-h4': v(15, 20),
  'mantua-h5': v(30, 45, { n: '두칼레 궁전 입장권으로 함께 봅니다.|Visited on the Palazzo Ducale ticket.' }),
  // Turin
  'turin-h1': v(150, 180, { c: 'daily', b: 'rec', s: 'https://www.museoegizio.it/en/', n: '월요일은 오후 2시까지만 엽니다.|On Mondays it closes at 2 pm.' }),
  'turin-h2': v(90, 120, { c: 'tue', b: 'rec', s: 'https://www.museocinema.it/en', n: '전망 엘리베이터는 박물관과 표가 따로입니다.|The panoramic lift is ticketed separately from the museum.' }),
  'turin-h3': v(15, 20),
  'turin-h4': v(30, 45),
  'turin-h5': v(90, 120, { s: 'https://www.basilicadisuperga.org/' }),
  // Genoa
  'genoa-h1': v(150, 180, { c: 'daily', b: 'rec', s: 'https://www.acquariodigenova.it/en/' }),
  'genoa-h2': v(60, 90),
  'genoa-h3': v(15, 20),
  'genoa-h4': v(60, 75, { c: 'mon' }),
  'genoa-h5': v(45, 60),
  // Portofino
  'portofino-h1': v(30, 45),
  'portofino-h2': v(30, 45, { s: 'https://www.castellobrown.com/en/' }),
  'portofino-h3': v(40, 60),
  'portofino-h4': v(120, 180, { s: 'https://fondoambiente.it/luoghi/abbazia-di-san-fruttuoso', n: '배나 산길로만 갈 수 있습니다.|Reachable only by boat or on foot.' }),
  'portofino-h5': v(60, 90),
  // Cinque Terre
  'cinque-terre-h1': v(60, 90),
  'cinque-terre-h2': v(60, 90),
  'cinque-terre-h3': v(60, 90, { s: 'https://www.viadellamore.info/en/', n: '마나롤라로 이어지는 "사랑의 길"은 시간 지정 예약제입니다.|The Via dell’Amore to Manarola is by timed reservation.' }),
  'cinque-terre-h4': v(60, 120),
  'cinque-terre-h5': v(45, 60, { n: '역에서 마을까지 계단 약 380개를 오르거나 셔틀버스를 탑니다.|From the station it is about 380 steps up, or take the shuttle bus.' }),
  'cinque-terre-h6': v(120, 300, { s: 'https://www.parconazionale5terre.it/Eindex.php', n: '해안 탐방로를 걸으려면 친퀘테레 카드가 필요하고, 산사태나 악천후로 구간이 자주 닫힙니다.|The coastal path needs a Cinque Terre Card, and sections often close for landslides or bad weather.' }),
  // Venice
  'venice-h1': v(60, 120, { s: 'https://www.basilicasanmarco.it/?lang=en', t: 'https://cda.ve.it/en/', n: '봄·여름 성수기 지정일에는 당일치기 방문객이 베네치아 입장료를 미리 내야 합니다(티켓 구매 주소 참고). 산 마르코 대성당은 예약하면 줄을 서지 않습니다.|On designated peak days in spring and summer day-trippers must pre-pay the Venice access fee (see the ticket link). Booking St Mark’s Basilica skips the queue.' }),
  'venice-h2': v(15, 20),
  'venice-h3': v(40, 60, { n: '수상버스 1번이 대운하 전 구간을 지납니다.|Vaporetto line 1 runs the full length of the canal.' }),
  'venice-h4': v(90, 120, { c: 'daily', b: 'rec', s: 'https://palazzoducale.visitmuve.it/en/' }),
  'venice-h5': v(180, 240, { n: '본섬 폰다멘테 노베에서 수상버스로 약 45분 걸립니다.|About 45 minutes by vaporetto from Fondamente Nove.' }),
  'venice-h6': v(30, 45),
  'venice-h7': v(10, 15),
  'venice-h8': v(15, 20),
  'venice-h9': v(15, 20, { n: '리도섬에 있으며 영화제 기간(8월 말~9월 초) 외에는 외관만 봅니다.|On the Lido; outside the film festival (late August–early September) only the exterior is seen.' }),
  // Verona
  'verona-h1': v(45, 60, { s: 'https://www.arena.it/en/', n: '여름 오페라 시즌에는 낮 관람 시간이 짧아집니다.|Daytime visiting hours are shorter during the summer opera season.' }),
  'verona-h2': v(20, 40, { c: 'mon', b: 'rec', s: 'https://casadigiulietta.comune.verona.it/' }),
  'verona-h3': v(20, 30),
  'verona-h4': v(15, 20),
  'verona-h5': v(15, 20),
  // Vicenza
  'vicenza-h1': v(45, 60, { c: 'mon', s: 'https://www.teatrolimpicovicenza.it/en/' }),
  'vicenza-h2': v(30, 45, { c: 'mon' }),
  'vicenza-h3': v(60, 75, { s: 'https://www.villalarotonda.it/en/', n: '개방 요일이 한정돼 있고 겨울에는 쉽니다. 방문 전 일정을 확인하세요.|Open on limited days and closed in winter—check the calendar first.' }),
  'vicenza-h4': v(45, 60),
  'vicenza-h5': v(20, 30),
  // Padua
  'padua-h1': v(45, 60, { b: 'req', s: 'https://www.cappelladegliscrovegni.it/index.php/en/', n: '시간 지정 입장이고 예배당 안에는 15~20분만 머뭅니다. 며칠 전에 예약하세요.|Entry is timed and you get 15–20 minutes inside the chapel. Book days ahead.' }),
  'padua-h2': v(45, 60, { c: 'daily', b: 'no', s: 'https://www.santantonio.org/en', n: DRESS }),
  'padua-h3': v(20, 30),
  'padua-h4': v(30, 45, { c: 'mon' }),
  'padua-h5': v(45, 60, { b: 'req', s: 'https://www.unipd.it/en/visitare-universita', n: '가이드 투어로만 볼 수 있습니다.|Seen on guided tours only.' }),
  // Trieste
  'trieste-h1': v(20, 30),
  'trieste-h2': v(90, 120, { c: 'daily', n: '성을 둘러싼 공원은 무료입니다.|The park around the castle is free.' }),
  'trieste-h3': v(15, 20),
  'trieste-h4': v(45, 60),
  'trieste-h5': v(10, 15),
  // Bolzano
  'bolzano-h1': v(15, 20),
  'bolzano-h2': v(75, 90, { c: 'mon', b: 'rec', s: 'https://www.iceman.it/en/', n: '7·8·12월에는 월요일에도 엽니다.|Open on Mondays too in July, August and December.' }),
  'bolzano-h3': v(30, 45),
  'bolzano-h4': v(150, 210),
  'bolzano-h5': v(15, 20),
  // Cortina
  'cortina-h1': v(240, 300, { b: 'req', n: '아우론조 산장까지 오르는 유료 도로는 2025년 여름부터 온라인 주차 예약이 있어야 통과합니다. 도로는 대략 6~10월에만 열립니다.|Since summer 2025 the toll road to Rifugio Auronzo requires an online parking reservation. It is open roughly June to October.' }),
  'cortina-h2': v(90, 150, { s: 'https://www.prags.bz/en/', n: '한여름에는 낮 시간 자가용 진입이 제한돼 주차 예약이나 셔틀버스 예약이 필요합니다.|In high summer daytime car access is restricted—book parking or the shuttle bus.' }),
  'cortina-h3': v(180, 240),
  'cortina-h4': v(240, 300, { n: '왕복 4~5시간의 산길이며 일부 구간은 쇠줄을 잡고 지나갑니다.|A 4–5 hour return hike with some cable-protected sections.' }),
  // Bologna
  'bologna-h1': v(15, 20, { n: '아시넬리 탑은 옆 가리센다 탑 보강 공사로 2023년 10월부터 오르지 못했습니다. 재개방 여부를 방문 전에 확인하세요.|The Asinelli tower has been closed to climbers since October 2023 while the neighbouring Garisenda is stabilised—check whether it has reopened.' }),
  'bologna-h2': v(30, 45, { b: 'no', n: FREE }),
  'bologna-h3': v(30, 45),
  'bologna-h4': v(45, 60),
  'bologna-h5': v(30, 45),
  // Modena
  'modena-h1': v(30, 45, { b: 'no', n: FREE }),
  'modena-h2': v(15, 20),
  'modena-h3': v(75, 90, { c: 'daily', s: 'https://www.ferrari.com/en-EN/museums/enzo-ferrari-modena' }),
  'modena-h4': v(30, 45, { c: 'sun', s: 'https://mercatoalbinelli.it/' }),
  'modena-h5': v(60, 90, { b: 'req', n: '양조장 견학은 각 양조장에 미리 예약해야 합니다.|Visits must be booked ahead with each producer.' }),
  // Parma
  'parma-h1': v(30, 45, { b: 'no', s: 'https://www.piazzaduomoparma.com/en/', n: FREE }),
  'parma-h2': v(30, 40, { s: 'https://www.piazzaduomoparma.com/en/' }),
  'parma-h3': v(120, 150, { c: 'mon', s: 'https://complessopilotta.it/en/welcome/' }),
  'parma-h4': v(30, 45),
  'parma-h5': v(90, 120, { b: 'req', n: '치즈 공방 견학은 오전에만 있고 미리 예약해야 합니다.|Dairy tours run in the morning only and must be booked ahead.' }),
  // Ferrara
  'ferrara-h1': v(60, 90, { s: 'https://www.castelloestense.it/en' }),
  'ferrara-h2': v(15, 20),
  'ferrara-h3': v(60, 90, { s: 'https://www.palazzodiamanti.it/en/', n: '기획전이 있을 때만 엽니다.|Open only when an exhibition is on.' }),
  'ferrara-h4': v(60, 120),
  'ferrara-h5': v(15, 20),
  // Ravenna
  'ravenna-h1': v(30, 45, { c: 'daily', s: RAVENNA, n: RAVENNA_NOTE }),
  'ravenna-h2': v(15, 20, { c: 'daily', b: 'req', s: RAVENNA, n: '통합권에 시간 지정 예약을 더해야 들어갑니다.|Needs a timed slot added to the combined ticket.' }),
  'ravenna-h3': v(20, 30, { c: 'daily', s: RAVENNA, n: RAVENNA_NOTE }),
  'ravenna-h4': v(10, 15, { b: 'no', n: FREE }),
  'ravenna-h5': v(30, 45, { n: '시내에서 5km 떨어져 있고 통합권과 표가 따로입니다.|Five kilometres out of town and not on the combined ticket.' }),

  // Rome
  'rome-h1': v(120, 180, { c: 'daily', b: 'req', t: 'https://ticketing.colosseo.it/en/', n: '표는 이름이 적힌 시간 지정권이라 신분증이 필요하고, 포로 로마노·팔라티노 언덕과 함께 봅니다. 성수기에는 몇 주 전에 매진됩니다.|Tickets are named and timed (bring ID) and include the Roman Forum and Palatine. They sell out weeks ahead in high season.' }),
  'rome-h2': v(180, 240, { c: 'sun', b: 'rec', s: VAT, t: VAT_T, n: '매월 마지막 일요일은 무료로 열지만 매우 붐빕니다. 어깨와 무릎을 가려야 합니다.|Open free on the last Sunday of the month, when it is very crowded. Cover shoulders and knees.' }),
  'rome-h3': v(15, 30, { n: '2026년 2월부터 분수 바로 앞 구역은 2유로 입장권이 필요합니다(매일 9~22시). 위쪽 광장에서는 무료로 봅니다.|Since February 2026 the area right at the basin needs a €2 ticket (daily 9 am–10 pm); viewing from the square above is free.' }),
  'rome-h4': v(30, 45, { c: 'daily', b: 'rec', s: 'https://www.pantheonroma.com/en/', n: '2023년부터 유료입니다.|Ticketed since 2023.' }),
  'rome-h5': v(15, 20, { n: '계단에 앉으면 벌금을 뭅니다.|Sitting on the steps is fined.' }),
  'rome-h6': v(90, 120, { c: 'daily', b: 'req', t: 'https://ticketing.colosseo.it/en/', n: '콜로세움 입장권으로 함께 봅니다.|Visited on the Colosseum ticket.' }),
  'rome-h7': v(80, 90, { b: 'req', s: 'https://palazzo.quirinale.it/visitapalazzo/prenota_en.html', n: '가이드 투어로만 볼 수 있고 며칠 전에 예약해야 하며 여권이 필요합니다.|Guided tours only, booked days ahead; bring your passport.' }),
  'rome-h8': v(20, 30),
  'rome-h9': v(20, 30),
  'rome-h10': v(75, 90, { b: 'rec' }),
  'rome-h11': v(30, 60, { s: 'https://vive.cultura.gov.it/en/', n: '기념관은 무료이고 옥상 전망 엘리베이터만 유료입니다.|The monument is free; only the panoramic lift to the roof is ticketed.' }),
  // Florence
  'florence-h1': v(60, 150, { b: 'req', s: 'https://duomo.firenze.it/en/home', n: '성당 입장은 무료이지만 돔(계단 463개)과 종탑은 시간 지정 예약이 필수입니다. 일요일에는 관광 입장이 제한됩니다.|The cathedral is free, but the dome (463 steps) and bell tower need a timed booking. Sightseeing is restricted on Sundays.' }),
  'florence-h2': v(150, 210, { c: 'mon', b: 'rec', s: 'https://www.uffizi.it/en' }),
  'florence-h3': v(15, 20),
  'florence-h4': v(30, 45),
  'florence-h5': v(60, 75, { c: 'mon', b: 'req', s: 'https://www.galleriaaccademiafirenze.it/en/', n: '예약 없이 가면 줄이 1~2시간씩 걸립니다.|Without a booking the queue can run to one or two hours.' }),
  'florence-h6': v(75, 90, { s: 'https://cultura.comune.fi.it/pagina/musei-civici-fiorentini/museo-di-palazzo-vecchio', n: '목요일은 오후 2시까지만 엽니다.|On Thursdays it closes at 2 pm.' }),
  'florence-h7': v(45, 60, { s: 'https://www.smn.it/en/' }),
  'florence-h8': v(20, 30, { s: 'https://duomo.firenze.it/en/home', n: '대성당 통합권으로 봅니다.|Visited on the cathedral complex pass.' }),
  'florence-h9': v(45, 60, { c: 'daily' }),
  // Pisa
  'pisa-h1': v(30, 45, { c: 'daily', b: 'req', s: OPA, n: '탑에 오르려면 시간 지정 예약이 필요하고 만 8세 미만은 오를 수 없습니다.|Climbing needs a timed ticket; children under 8 are not admitted.' }),
  'pisa-h2': v(20, 30, { c: 'daily', s: OPA, n: '성당은 무료이지만 시간 지정 입장권을 받아야 합니다.|The cathedral is free but needs a timed pass.' }),
  'pisa-h3': v(20, 30, { c: 'daily', s: OPA }),
  'pisa-h4': v(30, 45),
  // Lucca
  'lucca-h1': v(60, 90, { b: 'no', n: '성벽 위 산책로는 무료입니다.|The path on top of the walls is free.' }),
  'lucca-h2': v(15, 20),
  'lucca-h3': v(30, 40, { n: '옥상 정원까지 계단 약 230개를 오릅니다.|About 230 steps lead up to the rooftop garden.' }),
  'lucca-h4': v(30, 45, { s: 'https://www.museocattedralelucca.it/en/' }),
  'lucca-h5': v(15, 20),
  // Siena
  'siena-h1': v(30, 45),
  'siena-h2': v(75, 90, { c: 'daily', b: 'rec', s: 'https://operaduomo.siena.it/en/', n: '바닥 대리석 모자이크는 한 해 중 일부 기간에만 덮개를 걷어 공개합니다.|The marble floor is uncovered for only part of the year.' }),
  'siena-h3': v(40, 45, { n: '계단 약 400개를 오르고 한 번에 들어가는 인원이 제한됩니다.|Around 400 steps, with limited numbers admitted at a time.' }),
  'siena-h4': v(60, 90),
  'siena-h5': v(20, 30),
  // San Gimignano
  'san-gimignano-h1': v(60, 90),
  'san-gimignano-h2': v(15, 20),
  'san-gimignano-h3': v(40, 45),
  'san-gimignano-h4': v(30, 45),
  // Montepulciano
  'montepulciano-h1': v(20, 30),
  'montepulciano-h2': v(30, 45),
  'montepulciano-h3': v(45, 60),
  'montepulciano-h4': v(90, 120),
  'montepulciano-h5': v(30, 60),
  // Perugia
  'perugia-h1': v(20, 30),
  'perugia-h2': v(75, 90, { n: '안쪽 움브리아 국립 미술관은 월요일에 쉬는 때가 있습니다.|The National Gallery of Umbria inside is closed on some Mondays.' }),
  'perugia-h3': v(30, 45, { b: 'no', n: FREE }),
  'perugia-h4': v(10, 15),
  'perugia-h5': v(20, 30),
  // Assisi
  'assisi-h1': v(60, 90, { c: 'daily', b: 'no', s: 'https://basilica.sanfrancesco.org/', n: DRESS }),
  'assisi-h2': v(20, 30, { b: 'no', n: FREE }),
  'assisi-h3': v(15, 20),
  'assisi-h4': v(45, 60),
  // Orvieto
  'orvieto-h1': v(45, 60, { c: 'daily', s: 'https://www.duomodiorvieto.it/en/' }),
  'orvieto-h2': v(30, 45, { n: '깊이 53m의 이중 나선 계단 248개를 오르내립니다.|A 53-metre-deep double helix of 248 steps each way.' }),
  'orvieto-h3': v(45, 60, { b: 'rec', s: 'https://orvietounderground.it/en/home/', n: '가이드 투어로만 봅니다.|Guided tours only.' }),
  'orvieto-h4': v(20, 30),
  // Urbino
  'urbino-h1': v(105, 120, { c: 'mon', s: 'https://gndm.it/en/' }),
  'urbino-h2': v(30, 40),
  'urbino-h3': v(15, 20),
  'urbino-h4': v(30, 45),

  // Naples
  'naples-h1': v(60, 90),
  'naples-h2': v(150, 180, { c: 'tue', b: 'no' }),
  'naples-h3': v(20, 30, { n: '보수 공사로 내부가 닫혀 있고 재개방 날짜가 정해지지 않았습니다. 밖에서만 볼 수 있습니다.|The interior is closed for restoration with no reopening date; view it from outside.' }),
  'naples-h4': v(20, 30),
  'naples-h5': v(45, 60),
  'naples-h6': v(30, 45, { b: 'no', n: '성당은 무료이고 산 젠나로 보물관만 유료입니다.|The cathedral is free; only the Treasure of San Gennaro is ticketed.' }),
  'naples-h7': v(60, 90),
  // Pompeii
  'pompeii-h1': v(240, 300, { c: 'daily', b: 'rec', s: POMPEII, n: '입장권은 이름이 적히고 하루 입장 인원이 2만 명으로 제한됩니다. 유적 전체를 보는 데 4~5시간 걸립니다.|Tickets are named and daily entries are capped at 20,000. Allow four to five hours for the whole site.' }),
  'pompeii-h2': v(20, 30, { s: POMPEII }),
  'pompeii-h3': v(10, 15, { s: POMPEII }),
  'pompeii-h4': v(30, 45, { s: POMPEII, n: '유적 서쪽 끝에 있어 포럼에서 걸어서 20분쯤 걸립니다.|At the far western edge, about 20 minutes on foot from the Forum.' }),
  'pompeii-h5': v(120, 150, { c: 'daily', s: 'https://ercolano.cultura.gov.it/?lang=en', n: '폼페이와 표가 따로이며 사철(Circumvesuviana)로 20분쯤 떨어져 있습니다.|Ticketed separately from Pompeii, about 20 minutes away on the Circumvesuviana.' }),
  // Sorrento
  'sorrento-h1': v(15, 20),
  'sorrento-h2': v(45, 60),
  'sorrento-h3': v(20, 30),
  'sorrento-h4': v(10, 15),
  // Positano
  'positano-h1': v(60, 120),
  'positano-h2': v(15, 20),
  'positano-h3': v(180, 240, { n: '아제롤라(보메라노)에서 노첼레까지 약 7km를 걷습니다. 그늘이 거의 없어 여름에는 아침에 출발하세요.|About 7 km from Bomerano (Agerola) to Nocelle. There is little shade—start early in summer.' }),
  'positano-h4': v(60, 120),
  'positano-h5': v(15, 20),
  // Amalfi
  'amalfi-h1': v(30, 45),
  'amalfi-h2': v(30, 45),
  'amalfi-h3': v(40, 45),
  'amalfi-h4': v(60, 90),
  'amalfi-h5': v(20, 30),
  // Capri
  'capri-h1': v(60, 90, { n: '동굴 안에는 5분쯤 머뭅니다. 파도가 높거나 물때가 맞지 않으면 닫고, 줄이 1시간 넘게 걸리는 날이 많습니다.|You get about five minutes inside. It closes in swell or at high water, and queues often exceed an hour.' }),
  'capri-h2': v(20, 30),
  'capri-h3': v(20, 30),
  'capri-h4': v(60, 75, { s: 'https://www.capriseggiovia.it/en/', n: '아나카프리에서 1인용 체어리프트로 13분 오릅니다.|A 13-minute single-seat chairlift ride up from Anacapri.' }),
  'capri-h5': v(20, 30),
  // Bari
  'bari-h1': v(30, 45, { c: 'daily', b: 'no', s: 'https://www.basilicasannicola.it/', n: FREE }),
  'bari-h2': v(60, 90),
  'bari-h3': v(20, 30, { n: '할머니들이 파스타를 빚는 모습은 오전에 볼 수 있습니다.|The pasta-making is best seen in the morning.' }),
  'bari-h4': v(45, 60),
  'bari-h5': v(30, 45),
  // Alberobello
  'alberobello-h1': v(60, 90),
  'alberobello-h2': v(20, 30),
  'alberobello-h3': v(30, 45),
  'alberobello-h4': v(10, 15),
  // Polignano a Mare
  'polignano-a-mare-h1': v(30, 60),
  'polignano-a-mare-h2': v(45, 60),
  'polignano-a-mare-h3': v(10, 15),
  'polignano-a-mare-h4': v(10, 120, { b: 'req', n: '동굴 식당은 식사 손님만 들어가고 예약이 필수입니다.|The cave restaurant admits diners only, by reservation.' }),
  // Lecce
  'lecce-h1': v(20, 30, { s: 'https://www.chieselecce.it/en/', n: '산타 크로체와 대성당 등 주요 성당은 통합 입장권으로 봅니다.|Santa Croce, the cathedral and other main churches share one combined ticket.' }),
  'lecce-h2': v(30, 45, { s: 'https://www.chieselecce.it/en/' }),
  'lecce-h3': v(15, 20),
  'lecce-h4': v(10, 15),
  // Matera
  'matera-h1': v(60, 90),
  'matera-h2': v(60, 90),
  'matera-h3': v(20, 30),
  'matera-h4': v(45, 60),
  'matera-h5': v(20, 30),
  // Tropea
  'tropea-h1': v(30, 45),
  'tropea-h2': v(60, 120),
  'tropea-h3': v(10, 15),
  'tropea-h4': v(15, 20),
  // Palermo
  'palermo-h1': v(45, 75, { c: 'daily', s: 'https://www.cattedrale.palermo.it/', n: '성당은 무료이고 지붕·왕릉·보물관은 유료입니다.|The cathedral is free; the roof, royal tombs and treasury are ticketed.' }),
  'palermo-h2': v(60, 75, { c: 'daily', b: 'rec', s: 'https://www.federicosecondo.org/en/home-english/', n: '일요일과 종교 행사 때는 예배당 관람 시간이 줄어듭니다.|Chapel visiting hours are reduced on Sundays and for services.' }),
  'palermo-h3': v(45, 60, { n: '시장은 오전에 가장 활기차고 일요일 오후에는 대부분 닫습니다.|Busiest in the morning; largely shut on Sunday afternoons.' }),
  'palermo-h4': v(10, 15),
  'palermo-h5': v(120, 150, { n: '팔레르모에서 버스로 40분쯤 걸리고, 대성당은 점심시간에 닫습니다.|About 40 minutes by bus from Palermo; the cathedral shuts at lunchtime.' }),
  // Cefalù
  'cefalu-h1': v(30, 45),
  'cefalu-h2': v(90, 120, { n: '가파른 산길이며 한여름 낮과 악천후에는 닫습니다.|A steep climb, closed in midday summer heat and bad weather.' }),
  'cefalu-h3': v(60, 120),
  'cefalu-h4': v(10, 15),
  // Agrigento
  'agrigento-h1': v(150, 180, { c: 'daily', b: 'rec', n: '신전의 계곡은 동쪽 입구(유노 신전)에서 내리막으로 걷는 편이 수월합니다. 그늘이 거의 없습니다.|The Valley of the Temples is easiest walked downhill from the eastern (Juno) entrance. There is almost no shade.' }),
  'agrigento-h2': v(15, 20),
  'agrigento-h3': v(45, 60, { s: 'https://fondoambiente.it/luoghi/giardino-della-kolymbethra', n: '신전의 계곡 안에 있고 표가 따로입니다.|Inside the Valley of the Temples, with a separate ticket.' }),
  'agrigento-h4': v(45, 60, { n: '절벽 보호를 위해 출입이 통제되는 때가 많습니다. 위쪽 전망대에서 보는 것이 기본입니다.|Access onto the cliff is often barred to protect it; expect to view it from the lookout above.' }),
  // Siracusa
  'siracusa-h1': v(120, 180),
  'siracusa-h2': v(30, 45),
  'siracusa-h3': v(90, 120, { c: 'daily' }),
  'siracusa-h4': v(10, 15, { n: '네아폴리스 고고학 공원 안에 있습니다.|Inside the Neapolis Archaeological Park.' }),
  'siracusa-h5': v(10, 15),
  // Catania
  'catania-h1': v(20, 30),
  'catania-h2': v(30, 45, { c: 'sun', n: '어시장은 오전에만 섭니다.|The fish market runs in the morning only.' }),
  'catania-h3': v(45, 60),
  'catania-h4': v(45, 60),
  'catania-h5': v(15, 150, { s: 'https://www.teatromassimobellini.it/', n: '공연 관람은 예매가 필요합니다.|Performances need advance tickets.' }),
  // Taormina
  'taormina-h1': v(60, 75, { c: 'daily', n: '여름 저녁에는 공연 준비로 일찍 닫는 날이 있습니다.|On some summer evenings it closes early for performances.' }),
  'taormina-h2': v(60, 120),
  'taormina-h3': v(45, 60),
  'taormina-h4': v(15, 20),
  'taormina-h5': v(360, 480, { n: '화산 활동에 따라 정상부 출입이 통제됩니다. 해발 2,900m 이상은 공인 가이드와 함께 가야 합니다.|Summit access depends on volcanic activity; above about 2,900 m a licensed guide is required.' }),
  // Cagliari
  'cagliari-h1': v(90, 120),
  'cagliari-h2': v(20, 30),
  'cagliari-h3': v(60, 180),
  'cagliari-h4': v(60, 90),
  'cagliari-h5': v(20, 30),
  // Alghero
  'alghero-h1': v(45, 60),
  'alghero-h2': v(150, 180, { n: '배로 가거나 절벽 계단 654개를 내려갑니다. 파도가 높으면 닫습니다.|Reached by boat or down 654 cliff steps; closed in rough seas.' }),
  'alghero-h3': v(45, 60),
  'alghero-h4': v(60, 90),
  'alghero-h5': v(15, 20),
  // Olbia
  'olbia-h1': v(240, 360),
  'olbia-h2': v(60, 90),
  'olbia-h3': v(360, 480, { n: '팔라우(Palau)에서 페리로 20분쯤 걸립니다.|About 20 minutes by ferry from Palau.' }),
  'olbia-h4': v(15, 20),
  // Cala Gonone
  'cala-gonone-h1': v(180, 300, { n: BOAT }),
  'cala-gonone-h2': v(300, 420, { b: 'req', n: '여름에는 하루 입장 인원이 제한돼 사전 예약과 입장료가 필요합니다. 걸어서 왕복 3시간쯤 걸리고 배는 해변에 대지 못합니다.|In summer daily numbers are capped, with advance booking and a fee. It is about three hours’ return on foot; boats may not land on the beach.' }),
  'cala-gonone-h3': v(90, 120, { n: '배로만 갈 수 있고 봄부터 가을까지 엽니다.|Reachable only by boat, spring to autumn.' }),
  'cala-gonone-h4': v(20, 30),

  // Vatican City
  'vatican-city-h1': v(90, 120, { c: 'daily', b: 'no', s: 'https://www.basilicasanpietro.va/en', n: '성당은 무료이지만 보안 검색 줄이 1시간 넘게 걸리는 날이 많습니다. 돔은 유료이고 어깨와 무릎을 가려야 합니다. 수요일 오전은 교황 알현으로 입장이 늦어집니다.|Free, but security queues often top an hour. The dome is ticketed; cover shoulders and knees. Entry is delayed on Wednesday mornings for the papal audience.' }),
  'vatican-city-h2': v(20, 30),
  'vatican-city-h3': v(180, 240, { c: 'sun', b: 'rec', s: VAT, t: VAT_T, n: '매월 마지막 일요일은 무료로 열지만 매우 붐빕니다.|Open free on the last Sunday of the month, when it is very crowded.' }),
  'vatican-city-h4': v(20, 30, { c: 'sun', s: VAT, t: VAT_T, n: '바티칸 박물관 관람 동선의 끝에 있어 박물관 입장권으로 봅니다. 사진 촬영은 금지입니다.|At the end of the Vatican Museums route, on the museum ticket. Photography is forbidden.' }),
  'vatican-city-h5': v(120, 120, { b: 'req', s: VAT, t: VAT_T, n: '가이드 투어로만 들어갑니다.|Entered on guided tours only.' }),
  // San Marino
  'san-marino-city-h1': v(40, 45, { c: 'daily', s: 'https://www.museidistato.sm/', n: '두 탑을 묶은 통합권이 있습니다.|A combined ticket covers both towers.' }),
  'san-marino-city-h2': v(30, 40, { c: 'daily', s: 'https://www.museidistato.sm/' }),
  'san-marino-city-h3': v(15, 20, { b: 'no', n: FREE }),
  'borgo-maggiore-h1': v(10, 15, { n: '보르고 마조레에서 구시가까지 2분 걸립니다.|Two minutes from Borgo Maggiore up to the old town.' }),
  'borgo-maggiore-h2': v(15, 20),
}
