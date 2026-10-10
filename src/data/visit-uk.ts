import type { HighlightVisit } from '../types'
import { v } from './visit-helper'

const FREE = '입장은 무료입니다.|Entry is free.'
const RCT_WINDSOR = 'https://www.rct.uk/visit/windsor-castle'
const SBT = 'https://www.shakespeare.org.uk/'

/** Monaco, United Kingdom, Ireland */
export const visitUk: Record<string, HighlightVisit> = {
  // Monaco
  'monaco-h1': v(45, 60, { s: 'https://www.visitepalaisdemonaco.com/en/', n: '궁전 내부는 봄부터 가을까지만 공개합니다. 근위병 교대식은 매일 11시 55분에 광장에서 열립니다.|The state apartments open only from spring to autumn. The guard changes daily at 11:55 on the square.' }),
  'monaco-h2': v(15, 20, { b: 'no', n: FREE }),
  'monaco-h3': v(90, 120, { c: 'daily', s: 'https://musee.oceano.org/en/' }),
  'monaco-h4': v(20, 30),
  'monaco-h5': v(20, 30),
  'monte-carlo-h1': v(30, 60, { s: 'https://www.montecarlosbm.com/en/casino-monaco/casino-monte-carlo', n: '입장에는 여권이 필요하고 만 18세 이상만 들어갑니다. 오후 게임 시간에는 복장 규정이 있습니다.|Bring your passport; over-18s only. A dress code applies once gaming starts in the afternoon.' }),
  'monte-carlo-h2': v(15, 20),
  'monte-carlo-h3': v(30, 45, { n: '5월 그랑프리 전후로는 도로와 보행로가 통제됩니다.|Roads and pavements are closed off around the Grand Prix in May.' }),
  'monte-carlo-h4': v(45, 90),
  'monte-carlo-h5': v(30, 45),

  // London
  'london-h1': v(30, 45, { s: 'https://www.rct.uk/visit/buckingham-palace', n: '궁전 내부(스테이트 룸)는 여름(대략 7~9월)에만 공개하고 예약이 필요합니다. 그 밖의 계절에는 밖에서 근위병 교대식을 봅니다.|The State Rooms open only in summer (roughly July–September) and need booking; otherwise watch the Changing of the Guard from outside.' }),
  'london-h2': v(10, 15),
  'london-h15': v(75, 90, { b: 'req', s: 'https://www.parliament.uk/visiting/', n: '내부 투어는 토요일과 의회 휴회 기간에만 있습니다.|Tours run only on Saturdays and during parliamentary recesses.', k: '2026-10' }),
  'london-h3': v(90, 120, { c: 'sun', b: 'rec', s: 'https://www.westminster-abbey.org/', n: '일요일은 예배만 있고 관광 입장은 없습니다.|Sundays are for worship only—no sightseeing entry.', k: '2026-10' }),
  'london-h4': v(120, 180, { c: 'daily', b: 'rec', s: 'https://www.britishmuseum.org/', n: '입장은 무료이며 시간 지정 예약을 하면 줄이 짧습니다.|Free; a timed booking shortens the queue.', k: '2026-10' }),
  'london-h5': v(60, 75, { c: 'daily', s: 'https://www.towerbridge.org.uk/', k: '2026-10' }),
  'london-h6': v(90, 120, { c: 'sun', s: 'https://www.stpauls.co.uk/', n: '일요일은 예배만 있고 관광 입장은 없습니다.|Sundays are for worship only—no sightseeing entry.', k: '2026-10' }),
  'london-h7': v(45, 60),
  'london-h8': v(45, 90),
  'london-h9': v(45, 60, { b: 'rec', s: 'https://www.londoneye.com/', n: '1월에 정기 점검으로 쉬는 기간이 있습니다.|Closes for annual maintenance for a spell in January.', k: '2026-10' }),
  'london-h10': v(45, 60, { c: 'daily', s: 'https://www.sherlock-holmes.co.uk/', k: '2026-10' }),
  'london-h11': v(150, 180, { c: 'daily', b: 'rec', s: 'https://www.hrp.org.uk/tower-of-london/', k: '2026-10' }),
  'london-h12': v(15, 20),
  'london-h13': v(45, 60, { c: 'mon', s: 'https://boroughmarket.org.uk/', k: '2026-10' }),
  'london-h14': v(60, 90, { n: '포토벨로 마켓은 토요일이 가장 크고 일요일에는 대부분 쉽니다.|Portobello Market is biggest on Saturdays and largely shut on Sundays.' }),
  // Windsor
  'windsor-h1': v(150, 180, { c: 'tue,wed', b: 'rec', s: RCT_WINDSOR }),
  'windsor-h2': v(20, 30, { s: RCT_WINDSOR, n: '성 입장권에 포함되며 일요일에는 예배만 있어 관광 입장이 없습니다.|Included in the castle ticket; on Sundays it is open for worship only.' }),
  'windsor-h3': v(30, 60),
  'windsor-h4': v(30, 45),
  // Canterbury
  'canterbury-h1': v(75, 105, { c: 'daily', s: 'https://www.canterbury-cathedral.org/' }),
  'canterbury-h2': v(40, 45),
  'canterbury-h3': v(20, 30),
  'canterbury-h4': v(45, 60),
  // Brighton
  'brighton-h1': v(75, 90, { c: 'daily', s: 'https://brightonmuseums.org.uk/visit/royal-pavilion-garden/' }),
  'brighton-h2': v(45, 60, { b: 'no', s: 'https://www.brightonpier.co.uk/' }),
  'brighton-h3': v(30, 45),
  'brighton-h4': v(30, 60),
  'brighton-h5': v(30, 45, { s: 'https://www.brightoni360.co.uk/' }),
  'brighton-h6': v(30, 45),
  // Oxford
  'oxford-h1': v(60, 90, { b: 'rec', s: 'https://www.chch.ox.ac.uk/visit', n: '학교 행사로 대식당이나 성당이 닫히는 시간이 있습니다.|The hall or cathedral may close at times for college events.' }),
  'oxford-h2': v(30, 60, { b: 'rec', s: 'https://visit.bodleian.ox.ac.uk/', n: '내부는 가이드 투어로만 볼 수 있습니다.|The interior is seen on guided tours only.' }),
  'oxford-h3': v(10, 15),
  'oxford-h4': v(90, 120, { c: 'daily', b: 'no', s: 'https://www.ashmolean.org/', n: FREE }),
  'oxford-h5': v(30, 45),
  'oxford-h6': v(45, 60, { s: 'https://www.obga.ox.ac.uk/' }),
  // Cotswolds
  'cotswolds-h1': v(60, 90),
  'cotswolds-h2': v(30, 45),
  'cotswolds-h3': v(30, 45),
  'cotswolds-h4': v(45, 60),
  'cotswolds-h5': v(45, 60, { s: 'https://broadwaytower.co.uk/' }),
  // Stratford-upon-Avon
  'stratford-upon-avon-h1': v(60, 75, { s: SBT }),
  'stratford-upon-avon-h2': v(60, 75, { s: SBT }),
  'stratford-upon-avon-h3': v(30, 180, { s: 'https://www.rsc.org.uk/', n: '공연 관람은 예매가 필요합니다.|Performances need advance tickets.' }),
  'stratford-upon-avon-h4': v(20, 30),
  // Cambridge
  'cambridge-h1': v(45, 60, { b: 'rec', s: 'https://www.kings.cam.ac.uk/visit-kings', n: '학기 중에는 개방 시간이 짧고 행사로 닫는 날이 있습니다.|Hours are shorter in term time and it closes for some events.' }),
  'cambridge-h2': v(10, 15),
  'cambridge-h3': v(90, 120, { c: 'mon', b: 'no', s: 'https://fitzmuseum.cam.ac.uk/', n: FREE }),
  'cambridge-h4': v(45, 60),
  'cambridge-h5': v(20, 30),
  'cambridge-h6': v(15, 20),
  // Bath
  'bath-h1': v(90, 120, { c: 'daily', b: 'rec', s: 'https://www.romanbaths.co.uk/' }),
  'bath-h2': v(20, 30),
  'bath-h3': v(30, 45, { s: 'https://www.bathabbey.org/' }),
  'bath-h4': v(60, 90, { b: 'rec' }),
  'bath-h5': v(60, 90, { s: 'https://www.nationaltrust.org.uk/visit/bath-bristol/prior-park-landscape-garden' }),
  'bath-h6': v(10, 15),
  // Bristol
  'bristol-h1': v(30, 45, { b: 'no', s: 'https://cliftonbridge.org.uk/' }),
  'bristol-h2': v(45, 60),
  'bristol-h3': v(60, 90),
  'bristol-h4': v(20, 30),
  'bristol-h5': v(20, 30, { b: 'no', n: FREE }),
  'bristol-h6': v(120, 150, { s: 'https://www.ssgreatbritain.org/' }),
  // Salisbury
  'salisbury-h1': v(120, 150, { c: 'daily', b: 'rec', s: 'https://www.english-heritage.org.uk/visit/places/stonehenge/', n: '시간 지정 입장이며 솔즈베리에서 버스로 30분쯤 걸립니다.|Entry is by timed ticket; it is about 30 minutes by bus from Salisbury.' }),
  'salisbury-h2': v(60, 90, { s: 'https://www.salisburycathedral.org.uk/' }),
  'salisbury-h3': v(45, 60, { s: 'https://www.english-heritage.org.uk/visit/places/old-sarum/' }),
  'salisbury-h4': v(60, 90, { b: 'no', n: '거석은 무료로 자유롭게 볼 수 있습니다.|The stones are free to walk among.' }),
  // St Ives
  'st-ives-h1': v(30, 45),
  'st-ives-h2': v(60, 90, { s: 'https://www.tate.org.uk/visit/tate-st-ives' }),
  'st-ives-h3': v(45, 90),
  'st-ives-h4': v(120, 180, { b: 'req', s: 'https://stmichaelsmount.co.uk/', n: '썰물 때는 둑길을 걸어서, 밀물 때는 배로 건넙니다. 쉬는 요일과 계절이 있으니 예약 화면에서 확인하세요.|Walk the causeway at low tide or take a boat at high tide. Check the booking calendar for closed days and seasons.' }),
  'st-ives-h5': v(45, 60),
  // Manchester
  'manchester-h1': v(60, 90),
  'manchester-h2': v(90, 120, { b: 'rec', s: 'https://www.scienceandindustrymuseum.org.uk/', n: '입장은 무료이며 보수 공사로 일부 전시관이 닫혀 있을 수 있습니다.|Free; some galleries may be shut for restoration work.' }),
  'manchester-h3': v(90, 120, { b: 'req', s: 'https://www.manutd.com/en/club/visit-old-trafford/museum-stadium-tours', n: '경기일에는 투어가 없습니다.|No tours on match days.' }),
  'manchester-h4': v(30, 45),
  'manchester-h5': v(20, 30),
  'manchester-h6': v(45, 60, { b: 'no', s: 'https://www.library.manchester.ac.uk/rylands/', n: FREE }),
  'manchester-h7': v(45, 60),
  // Liverpool
  'liverpool-h1': v(60, 90),
  'liverpool-h2': v(90, 120, { c: 'daily', b: 'rec', s: 'https://www.beatlesstory.com/' }),
  'liverpool-h3': v(45, 60, { c: 'daily', b: 'no', s: 'https://liverpoolcathedral.org.uk/', n: '입장은 무료이고 탑 전망대만 유료입니다.|Free; only the tower climb is ticketed.' }),
  'liverpool-h4': v(0, 0, { s: 'https://www.liverpoolmuseums.org.uk/maritime-museum', n: '2025년 1월부터 재개발 공사로 휴관 중이며 2028년 재개관이 목표입니다.|Closed for redevelopment since January 2025, with reopening targeted for 2028.' }),
  'liverpool-h5': v(45, 90),
  'liverpool-h6': v(15, 150, { n: '공연 관람은 예매가 필요합니다.|Concerts need advance tickets.' }),
  // York
  'york-h1': v(75, 120, { c: 'daily', s: 'https://yorkminster.org/', n: '일요일은 오후에만 관광 입장이 됩니다.|On Sundays sightseeing entry is in the afternoon only.' }),
  'york-h2': v(20, 30),
  'york-h3': v(90, 120, { b: 'no', n: FREE }),
  'york-h4': v(30, 45, { s: 'https://www.english-heritage.org.uk/visit/places/cliffords-tower-york/' }),
  'york-h5': v(60, 90, { s: 'https://www.yorkshiremuseum.org.uk/' }),
  'york-h6': v(120, 180, { b: 'no', s: 'https://www.railwaymuseum.org.uk/', n: FREE }),
  // Lake District
  'lake-district-h1': v(90, 180),
  'lake-district-h2': v(60, 90),
  'lake-district-h3': v(60, 75, { b: 'req', s: 'https://www.nationaltrust.org.uk/visit/lake-district/hill-top', n: '집이 작아 시간 지정 입장이며 겨울에는 쉽니다.|The house is tiny, so entry is timed; it closes in winter.' }),
  'lake-district-h4': v(30, 45, { b: 'no', n: FREE }),
  'lake-district-h5': v(90, 180),
  // Edinburgh
  'edinburgh-h1': v(75, 90, { c: 'tue,wed', b: 'rec', s: 'https://www.rct.uk/visit/palace-of-holyroodhouse', n: '여름 성수기에는 매일 열고, 왕실 행사 때는 닫습니다.|Open daily in peak summer; closed during royal visits.', k: '2026-10' }),
  'edinburgh-h2': v(120, 150, { c: 'daily', b: 'req', s: 'https://www.edinburghcastle.scot/', n: '현장 판매분이 매진되는 날이 많아 온라인 사전 예약이 사실상 필수입니다.|Tickets often sell out on the day, so booking online ahead is effectively essential.', k: '2026-10' }),
  'edinburgh-h3': v(60, 90),
  'edinburgh-h4': v(90, 120),
  'edinburgh-h5': v(30, 45),
  'edinburgh-h6': v(120, 180, { c: 'daily', b: 'no', s: 'https://www.nms.ac.uk/national-museum-of-scotland', n: FREE, k: '2026-10' }),
  'edinburgh-h7': v(30, 45),
  // Glasgow
  'glasgow-h1': v(30, 45, { b: 'no', s: 'https://glasgowcathedral.org/', n: FREE }),
  'glasgow-h2': v(90, 120, { c: 'daily', b: 'no', s: 'https://www.glasgowlife.org.uk/museums/venues/kelvingrove-art-gallery-and-museum', n: FREE }),
  'glasgow-h3': v(30, 45),
  'glasgow-h4': v(75, 90, { c: 'daily', b: 'no', s: 'https://www.glasgowlife.org.uk/museums/venues/riverside-museum', n: FREE }),
  'glasgow-h5': v(10, 15),
  // Stirling
  'stirling-h1': v(120, 150, { c: 'daily', b: 'rec', s: 'https://www.historicenvironment.scot/visit/all/stirling-castle/' }),
  'stirling-h2': v(60, 90, { s: 'https://www.nationalwallacemonument.com/', n: '탑 꼭대기까지 계단 246개를 오릅니다.|The top is reached by 246 steps.' }),
  'stirling-h3': v(15, 20),
  'stirling-h4': v(45, 60, { b: 'no', s: 'https://www.thehelix.co.uk/', n: '조형물은 무료로 볼 수 있습니다.|The sculptures are free to see.' }),
  // St Andrews
  'st-andrews-h1': v(30, 45, { s: 'https://www.standrews.com/', n: '일요일에는 경기가 없어 코스를 걸을 수 있습니다.|No golf is played on Sundays, when you can walk the course.' }),
  'st-andrews-h2': v(45, 60, { s: 'https://www.historicenvironment.scot/visit/all/st-andrews-cathedral/' }),
  'st-andrews-h3': v(30, 60),
  'st-andrews-h4': v(45, 60),
  // Inverness
  'inverness-h1': v(120, 180),
  'inverness-h2': v(75, 90, { c: 'daily', b: 'rec', s: 'https://www.historicenvironment.scot/visit/all/urquhart-castle/' }),
  'inverness-h3': v(90, 120, { s: 'https://www.nts.org.uk/visit/places/culloden', n: '전투지 들판은 무료이고 방문자 센터만 유료입니다.|The battlefield is free; only the visitor centre charges.' }),
  'inverness-h4': v(75, 90, { s: 'https://invernesscastle.scot/' }),
  'inverness-h5': v(30, 45),
  // Isle of Skye
  'isle-of-skye-h1': v(90, 120),
  'isle-of-skye-h2': v(90, 120),
  'isle-of-skye-h3': v(120, 180),
  'isle-of-skye-h4': v(45, 60),
  'isle-of-skye-h5': v(60, 90),
  // Cardiff
  'cardiff-h1': v(90, 120, { c: 'daily', s: 'https://www.cardiffcastle.com/' }),
  'cardiff-h2': v(60, 90),
  'cardiff-h3': v(60, 75, { b: 'req', s: 'https://www.principalitystadium.wales/tours/', n: '경기와 행사 일정에 따라 투어가 없는 날이 있습니다.|No tours on some match and event days.' }),
  'cardiff-h4': v(60, 75, { s: 'https://cadw.gov.wales/visit/places-to-visit/castell-coch' }),
  'cardiff-h5': v(150, 210, { b: 'no', s: 'https://museum.wales/stfagans/', n: FREE }),
  // Tenby
  'tenby-h1': v(30, 45),
  'tenby-h2': v(45, 90),
  'tenby-h3': v(180, 240, { c: 'sun', s: 'https://caldeyislandwales.com/', n: '배는 부활절부터 10월까지 날씨가 좋은 날에만 다닙니다.|Boats run from Easter to October, weather permitting.' }),
  'tenby-h4': v(20, 30),
  // Snowdonia
  'snowdonia-h1': v(300, 420),
  'snowdonia-h2': v(150, 180, { b: 'req', s: 'https://snowdonrailway.co.uk/', n: '봄부터 가을까지만 다니고 강풍이 불면 운휴합니다.|Runs spring to autumn only and stops in high winds.' }),
  'snowdonia-h3': v(45, 60),
  'snowdonia-h4': v(20, 30),
  'snowdonia-h5': v(120, 180, { s: 'https://portmeirion.wales/' }),
  // Conwy
  'conwy-h1': v(75, 90, { s: 'https://cadw.gov.wales/visit/places-to-visit/conwy-castle' }),
  'conwy-h2': v(30, 45, { b: 'no', n: FREE }),
  'conwy-h3': v(10, 15),
  'conwy-h4': v(45, 60, { s: 'https://cadw.gov.wales/visit/places-to-visit/plas-mawr', n: '봄부터 가을까지만 엽니다.|Open spring to autumn only.' }),
  // Belfast
  'belfast-h1': v(120, 150, { c: 'daily', b: 'rec', s: 'https://www.titanicbelfast.com/' }),
  'belfast-h2': v(30, 60, { b: 'no', s: 'https://www.belfastcity.gov.uk/things-to-do/city-hall', n: FREE }),
  'belfast-h3': v(60, 90),
  'belfast-h4': v(45, 60, { c: 'mon,tue,wed,thu', n: '금·토·일요일에만 열립니다.|Open Friday to Sunday only.' }),
  // Giant's Causeway
  'giants-causeway-h1': v(90, 120, { c: 'daily', s: 'https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway', n: '주상절리 자체는 무료이고 방문자 센터와 주차장이 유료입니다.|The stones are free; the visitor centre and car park charge.' }),
  'giants-causeway-h2': v(60, 90, { b: 'req', s: 'https://www.nationaltrust.org.uk/visit/northern-ireland/carrick-a-rede', n: '다리 건너기는 시간 지정 예약이며 강풍이 불면 닫습니다.|Crossing is by timed ticket and closes in high winds.' }),
  'giants-causeway-h3': v(30, 45, { s: 'https://discovernorthernireland.com/listing/dunluce-castle/67501101/' }),
  'giants-causeway-h4': v(20, 30),
  'giants-causeway-h5': v(60, 75, { b: 'rec', s: 'https://bushmills.com/pages/distillery' }),
  // Derry
  'derry-h1': v(45, 60, { b: 'no', n: FREE }),
  'derry-h2': v(10, 15),
  'derry-h3': v(30, 45, { b: 'no', n: FREE }),
  'derry-h4': v(30, 45),

  // Dublin
  'dublin-h1': v(60, 90, { c: 'daily', b: 'rec', s: 'https://www.visittrinity.ie/', n: '켈스의 서와 옛 도서관은 시간 지정 입장입니다. 옛 도서관은 보존 공사로 책 대부분이 서가에서 빠져 있습니다.|The Book of Kells and Old Library are by timed ticket. Most books have been removed from the Old Library shelves for conservation work.', k: '2026-10' }),
  'dublin-h2': v(45, 60),
  'dublin-h3': v(90, 120, { c: 'daily', b: 'rec', s: 'https://www.guinness-storehouse.com/en', k: '2026-10' }),
  'dublin-h4': v(60, 120),
  'dublin-h5': v(240, 480),
  // Galway
  'galway-h1': v(45, 60),
  'galway-h2': v(10, 15),
  'galway-h3': v(45, 60),
  'galway-h4': v(120, 150, { c: 'daily', b: 'rec', s: 'https://www.cliffsofmoher.ie/', n: '골웨이에서 차로 1시간 반쯤 걸립니다. 온라인 예매가 현장보다 쌉니다.|About 90 minutes by road from Galway. Online tickets cost less than at the gate.' }),
  'galway-h5': v(360, 480),
  // Cork
  'cork-h1': v(30, 45, { c: 'sun', s: 'https://www.corkcity.ie/en/english-market/' }),
  'cork-h2': v(30, 45),
  'cork-h3': v(30, 45),
  'cork-h4': v(30, 45),
  'cork-h5': v(120, 180, { c: 'daily', s: 'https://blarneycastle.ie/' }),
  // Killarney
  'killarney-h1': v(180, 300),
  'killarney-h2': v(60, 90, { s: 'https://muckross-house.ie/' }),
  'killarney-h3': v(45, 60, { s: 'https://heritageireland.ie/places-to-visit/ross-castle/', n: '성 내부는 봄부터 가을까지만 가이드 투어로 공개합니다.|The interior opens spring to autumn only, by guided tour.' }),
  'killarney-h4': v(360, 480),
  'killarney-h5': v(30, 45),
  // Kilkenny
  'kilkenny-h1': v(60, 90, { c: 'daily', s: 'https://heritageireland.ie/places-to-visit/kilkenny-castle/' }),
  'kilkenny-h2': v(45, 60),
  'kilkenny-h3': v(30, 45, { s: 'https://www.stcanicescathedral.ie/' }),
  'kilkenny-h4': v(0, 0, { n: '2020년에 문을 닫은 뒤 영구 폐관했습니다. 지금은 방문할 수 없습니다.|Shut in 2020 and since closed permanently—it can no longer be visited.' }),
  'kilkenny-h5': v(30, 45),
  // Limerick
  'limerick-h1': v(75, 90, { s: 'https://kingjohnscastle.ie/' }),
  'limerick-h2': v(10, 15),
  'limerick-h3': v(60, 75, { s: 'https://www.huntmuseum.com/' }),
  'limerick-h4': v(30, 45),
  'limerick-h5': v(30, 45),
}
