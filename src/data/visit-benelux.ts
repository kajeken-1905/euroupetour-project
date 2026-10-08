import type { HighlightVisit } from '../types'
import { v } from './visit-helper'

const FREE = '입장은 무료입니다.|Entry is free.'
const SPSG = 'https://www.spsg.de/en/palaces-gardens/object/sanssouci-palace'
const SKD = 'https://www.skd.museum/en/'
const NEUSCH_T = 'https://shop.ticket-center-hohenschwangau.de/'
const MUSEA_BRUGGE = 'https://www.museabrugge.be/en'
const DELFT_KERK = 'https://www.oudeennieuwekerkdelft.nl/en'
const LUX = 'https://www.luxembourg-city.com/en/tours-activities/sights/map'

/** Germany, Belgium, Netherlands, Luxembourg */
export const visitBenelux: Record<string, HighlightVisit> = {
  // Hamburg
  'hamburg-h1': v(45, 60),
  'hamburg-h2': v(30, 45, { c: 'daily', b: 'rec', s: 'https://www.elbphilharmonie.de/en/plaza', n: '전망 플라자는 현장에서 받으면 무료이고, 온라인으로 시간을 예약하면 소액의 수수료가 붙습니다.|The Plaza is free on the day; booking a time slot online carries a small fee.' }),
  'hamburg-h3': v(180, 240, { c: 'daily', b: 'req', s: 'https://www.miniatur-wunderland.com/', n: '시간 지정 예약 없이 가면 대기가 몇 시간씩 걸립니다.|Without a timed booking the wait can run to hours.' }),
  'hamburg-h4': v(45, 90),
  'hamburg-h5': v(30, 60),
  // Berlin
  'berlin-h1': v(15, 20),
  'berlin-h2': v(180, 300, { c: 'mon', b: 'rec', s: 'https://www.smb.museum/en/museums-institutions/museumsinsel-berlin/home/', n: '페르가몬 박물관은 보수 공사로 휴관 중이며 2027년 6월 4일 일부 재개관 예정입니다. 나머지 박물관은 대부분 월요일에 쉽니다.|The Pergamon Museum is closed for restoration and due to partly reopen on 4 June 2027. Most of the other museums close on Mondays.' }),
  'berlin-h3': v(45, 60),
  'berlin-h4': v(60, 90, { c: 'daily', b: 'req', s: 'https://www.bundestag.de/en/visittheBundestag/dome/registration-245686', n: '입장은 무료이지만 온라인 사전 등록이 필수이고 여권을 가져가야 합니다.|Free, but online registration in advance is compulsory; bring your passport.' }),
  'berlin-h5': v(15, 20),
  'berlin-h6': v(45, 90),
  'berlin-h7': v(90, 120, { c: 'mon', s: 'https://www.spsg.de/en/palaces-gardens/object/charlottenburg-palace-old-palace' }),
  // Potsdam
  'potsdam-h1': v(60, 90, { c: 'mon', b: 'req', s: SPSG, n: '시간 지정 입장권이라 성수기에는 오전에 매진됩니다. 정원은 무료입니다.|Tickets are timed and sell out by late morning in season. The park is free.' }),
  'potsdam-h2': v(75, 90, { c: 'tue' }),
  'potsdam-h3': v(30, 45),
  'potsdam-h4': v(60, 75, { c: 'mon' }),
  'potsdam-h5': v(60, 120),
  // Cologne
  'cologne-h1': v(45, 90, { c: 'daily', b: 'no', s: 'https://www.koelner-dom.de/en', n: '성당은 무료이고 탑(계단 533개)과 보물관은 유료입니다.|The cathedral is free; the tower (533 steps) and treasury are ticketed.' }),
  'cologne-h2': v(60, 90),
  'cologne-h3': v(15, 20),
  'cologne-h4': v(60, 90, { c: 'tue', s: 'https://roemisch-germanisches-museum.de/Homepage', n: '대성당 옆 본관은 보수 공사로 닫혀 있고, 소장품은 노이마르크트 근처 벨기에 하우스(Belgisches Haus)에서 전시합니다.|The main building by the cathedral is closed for renovation; the collection is shown at the Belgisches Haus near Neumarkt.' }),
  'cologne-h5': v(30, 45),
  // Frankfurt
  'frankfurt-h1': v(20, 30),
  'frankfurt-h2': v(30, 45, { s: 'https://www.maintower.de/en/', n: '악천후에는 전망대를 닫습니다.|The platform closes in bad weather.' }),
  'frankfurt-h3': v(120, 180, { c: 'mon', n: '강변의 박물관은 대부분 월요일에 쉽니다.|Most of the riverside museums close on Mondays.' }),
  'frankfurt-h4': v(90, 120, { c: 'daily', s: 'https://www.palmengarten.de/en/' }),
  'frankfurt-h5': v(60, 90),
  'frankfurt-h6': v(10, 15),
  // Leipzig
  'leipzig-h1': v(20, 30, { b: 'no', s: 'https://www.thomaskirche.org/', n: FREE }),
  'leipzig-h2': v(15, 20),
  'leipzig-h3': v(15, 20),
  'leipzig-h4': v(60, 90, { c: 'daily', n: '전망대까지 계단 약 500개를 오릅니다(중간까지 엘리베이터).|About 500 steps to the top platform (a lift covers the middle section).' }),
  'leipzig-h5': v(60, 90, { s: 'https://www.spinnerei.de/', n: '갤러리는 대부분 화~토요일에만 엽니다.|Most galleries open Tuesday to Saturday only.' }),
  // Dresden
  'dresden-h1': v(120, 180, { c: 'mon', s: SKD, n: '안뜰은 무료이고 박물관(옛 거장 회화관 등)은 유료입니다.|The courtyard is free; the museums (Old Masters Gallery and others) are ticketed.' }),
  'dresden-h2': v(30, 60, { b: 'no', s: 'https://www.frauenkirche-dresden.de/home', n: '성당은 무료이고 돔 전망대만 유료입니다. 예배와 연주회 때는 관람이 제한됩니다.|Free; only the dome climb is ticketed. Visits are restricted during services and concerts.' }),
  'dresden-h3': v(120, 180, { c: 'tue', b: 'rec', s: 'https://gruenes-gewoelbe.skd.museum/en/', n: '역사적 녹색 금고는 시간 지정 입장권이 필요합니다.|The Historic Green Vault needs a timed ticket.' }),
  'dresden-h4': v(20, 30),
  'dresden-h5': v(60, 90),
  // Heidelberg
  'heidelberg-h1': v(90, 120, { c: 'daily', s: 'https://www.schloss-heidelberg.de/en/', n: '입장권에 산악 열차 왕복이 포함됩니다.|The ticket includes the funicular up and down.' }),
  'heidelberg-h2': v(60, 90),
  'heidelberg-h3': v(45, 60),
  'heidelberg-h4': v(15, 20),
  'heidelberg-h5': v(20, 30),
  // Stuttgart
  'stuttgart-h1': v(150, 180, { c: 'mon', s: 'https://www.mercedes-benz.com/en/art-and-culture/museum/' }),
  'stuttgart-h2': v(90, 120, { c: 'mon', s: 'https://www.porsche.com/international/aboutporsche/porschemuseum/' }),
  'stuttgart-h3': v(20, 30),
  'stuttgart-h4': v(180, 240, { c: 'daily', s: 'https://www.wilhelma.de/en/' }),
  'stuttgart-h5': v(45, 60),
  // Rothenburg
  'rothenburg-h1': v(20, 30),
  'rothenburg-h2': v(10, 15),
  'rothenburg-h3': v(45, 60, { b: 'no', n: FREE }),
  'rothenburg-h4': v(75, 90, { s: 'https://www.kriminalmuseum.eu/en/?lang=en' }),
  'rothenburg-h5': v(20, 30),
  // Nuremberg
  'nuremberg-h1': v(90, 120, { c: 'daily', s: 'https://www.kaiserburg-nuernberg.de/englisch/castle/index.htm' }),
  'nuremberg-h2': v(20, 30, { n: '11월 말부터 크리스마스 전까지 크리스마스 마켓이 섭니다.|Hosts the Christmas market from late November until Christmas.' }),
  'nuremberg-h3': v(20, 30),
  'nuremberg-h4': v(120, 150, { s: 'https://museums.nuernberg.de/documentation-center', n: '여러 해에 걸친 개편 공사를 거쳤으니 방문 전에 운영 현황을 확인하세요.|It has been through a multi-year remodelling—check current arrangements before you go.' }),
  'nuremberg-h5': v(60, 90, { c: 'mon', s: 'https://museums.nuernberg.de/toy-museum' }),
  // Munich
  'munich-h1': v(30, 45, { n: '시청 시계탑 인형극은 매일 11시와 12시에 열립니다(여름에는 17시에도).|The Glockenspiel plays daily at 11 am and noon (also 5 pm in summer).' }),
  'munich-h2': v(60, 120),
  'munich-h3': v(120, 150, { c: 'daily', s: 'https://www.schloss-nymphenburg.de/englisch/palace/index.htm' }),
  'munich-h4': v(120, 180, { c: 'mon', s: 'https://www.pinakothek.de/en', n: '노이에 피나코테크는 보수 공사로 2029년까지 휴관합니다. 알테 피나코테크는 월요일에 쉽니다.|The Neue Pinakothek is closed for renovation until 2029. The Alte Pinakothek closes on Mondays.' }),
  'munich-h5': v(60, 90, { c: 'daily', b: 'no', s: 'https://www.hofbraeuhaus.de/en/' }),
  'munich-h6': v(15, 20),
  // Füssen
  'fussen-h1': v(180, 240, { c: 'daily', b: 'req', s: 'https://www.neuschwanstein.de/englisch/tourist/index.htm', t: NEUSCH_T, n: '내부는 시간 지정 가이드 투어로만 보며 성수기에는 몇 주 전에 매진됩니다. 매표소에서 성까지 오르막으로 30~40분 걸립니다.|The interior is by timed guided tour only and sells out weeks ahead in season. It is a 30–40 minute uphill walk from the ticket centre.' }),
  'fussen-h2': v(90, 120, { c: 'daily', b: 'req', s: 'https://www.hohenschwangau.de/en/', t: NEUSCH_T }),
  'fussen-h3': v(30, 45, { n: '눈이나 얼음이 있으면 다리를 닫습니다.|The bridge closes in snow and ice.' }),
  'fussen-h4': v(45, 90),
  'fussen-h5': v(60, 90),

  // Brussels
  'brussels-h1': v(60, 75, { s: 'https://www.monarchie.be/en/heritage/royal-palace-of-brussels', n: '내부는 여름(대략 7월 말~8월)에만 무료로 공개합니다. 그 밖에는 외관만 봅니다.|The interior opens free only in summer (roughly late July–August); otherwise view the exterior.' }),
  'brussels-h2': v(30, 45),
  'brussels-h3': v(90, 120, { c: 'daily', b: 'rec', s: 'https://atomium.be/' }),
  'brussels-h4': v(30, 45),
  'brussels-h5': v(10, 15),
  'brussels-h6': v(75, 90, { c: 'mon', s: 'https://musee-magritte-museum.be/en' }),
  'brussels-h7': v(20, 30),
  'brussels-h8': v(10, 15),
  // Bruges
  'bruges-h1': v(20, 30),
  'bruges-h2': v(45, 60, { c: 'daily', b: 'rec', s: MUSEA_BRUGGE, n: '계단 366개를 오르고 한 번에 올라가는 인원이 제한됩니다.|366 steps, with limited numbers allowed up at a time.' }),
  'bruges-h3': v(30, 40, { n: '운하 유람선은 대략 3월부터 11월 중순까지 다닙니다.|Canal boats run from roughly March to mid-November.' }),
  'bruges-h4': v(20, 30),
  'bruges-h5': v(15, 20),
  'bruges-h6': v(60, 90, { s: MUSEA_BRUGGE }),
  // Ghent
  'ghent-h1': v(20, 30),
  'ghent-h2': v(45, 60, { c: 'daily', b: 'rec', s: 'https://www.sintbaafskathedraal.be/en/', n: '성당은 무료이고 겐트 제단화는 시간 지정 유료 입장입니다.|The cathedral is free; the Ghent Altarpiece is by timed paid ticket.' }),
  'ghent-h3': v(75, 90, { c: 'daily', s: 'https://historischehuizen.stad.gent/en/castle-counts' }),
  'ghent-h4': v(30, 45, { c: 'daily', s: 'https://historischehuizen.stad.gent/nl/belfort' }),
  'ghent-h5': v(30, 45),
  'ghent-h6': v(75, 90, { c: 'mon', s: 'https://smak.be/en' }),
  // Antwerp
  'antwerp-h1': v(15, 20),
  'antwerp-h2': v(45, 60, { c: 'daily', s: 'https://www.dekathedraal.be/en' }),
  'antwerp-h3': v(30, 45),
  'antwerp-h4': v(15, 20),
  'antwerp-h5': v(90, 120, { c: 'mon', s: 'https://mas.be/en', n: '옥상 전망대와 건물 통로는 무료입니다.|The rooftop panorama and the walk up through the building are free.' }),
  'antwerp-h6': v(45, 60, { s: 'https://rubenshuis.be/en', n: '루벤스가 살던 집은 보수 공사로 2030년까지 닫혀 있고, 정원·도서관과 체험 전시만 엽니다.|The artist’s house itself is closed for restoration until 2030; only the garden, library and the Rubens Experience are open.' }),
  // Leuven
  'leuven-h1': v(15, 20),
  'leuven-h2': v(30, 45),
  'leuven-h3': v(20, 30),
  'leuven-h4': v(20, 30, { s: 'https://www.mleuven.be/en' }),
  'leuven-h5': v(30, 45, { b: 'no', n: FREE }),
  'leuven-h6': v(20, 30, { b: 'no', n: FREE }),
  // Dinant
  'dinant-h1': v(75, 90, { s: 'https://www.citadellededinant.be/en', n: '케이블카나 계단 408개로 올라갑니다.|Reached by cable car or 408 steps.' }),
  'dinant-h2': v(15, 20),
  'dinant-h3': v(45, 60),
  'dinant-h4': v(10, 15),

  // Amsterdam
  'amsterdam-h1': v(60, 75, { s: 'https://www.paleisamsterdam.nl/en/', n: '왕실 행사가 있는 날은 닫으니 달력을 확인하세요.|Closed on days of royal events—check the calendar.' }),
  'amsterdam-h2': v(60, 75),
  'amsterdam-h3': v(120, 150, { c: 'daily', b: 'req', s: 'https://www.vangoghmuseum.nl/en', n: '표는 온라인 시간 지정 예약으로만 팝니다.|Tickets are sold online only, by time slot.' }),
  'amsterdam-h4': v(60, 90),
  'amsterdam-h5': v(60, 75, { c: 'daily', b: 'req', s: 'https://www.annefrank.org/en/', t: 'https://www.annefrank.org/en/museum/tickets/', n: '표는 공식 누리집에서만 팔며 매주 화요일에 6주 뒤 날짜분이 풀립니다. 금방 매진됩니다.|Tickets are sold only on the official site, released every Tuesday for six weeks ahead, and go fast.' }),
  'amsterdam-h6': v(150, 210, { c: 'daily', b: 'req', s: 'https://www.rijksmuseum.nl/en', n: '입장 시작 시간을 온라인으로 예약해야 합니다.|A start time must be booked online.' }),
  'amsterdam-h7': v(15, 20),
  // Rotterdam
  'rotterdam-h1': v(30, 45, { c: 'daily', b: 'no' }),
  'rotterdam-h2': v(15, 20),
  'rotterdam-h3': v(20, 30, { s: 'https://www.kubuswoning.nl/en/' }),
  'rotterdam-h4': v(75, 90, { s: 'https://www.spido.nl/en/' }),
  'rotterdam-h5': v(90, 120, { c: 'mon', s: 'https://www.boijmans.nl/en', n: '본관은 보수 공사로 휴관 중이고, 바로 옆 수장고(Depot)가 문을 엽니다.|The main museum is closed for renovation; the Depot next door is open.' }),
  'rotterdam-h6': v(45, 60, { c: 'daily', s: 'https://euromast.nl/en/' }),
  // The Hague
  'the-hague-h1': v(10, 15, { n: '국왕 집무 궁전이라 내부는 공개하지 않습니다.|The King’s working palace—not open to visitors.' }),
  'the-hague-h2': v(30, 45, { s: 'https://www.vredespaleis.nl/visit/?lang=en', n: '방문자 센터는 무료이고, 건물 내부는 지정일 가이드 투어로만 봅니다.|The visitor centre is free; the building itself is seen on guided tours on set days only.' }),
  'the-hague-h3': v(75, 90, { c: 'daily', b: 'rec', s: 'https://www.mauritshuis.nl/en/', n: '월요일은 오후에만 엽니다.|On Mondays it opens in the afternoon only.' }),
  'the-hague-h4': v(90, 180),
  'the-hague-h5': v(15, 20, { n: '대규모 보수 공사로 안뜰과 건물에 들어갈 수 없습니다. 호수 건너편에서 외관만 봅니다.|Closed off for a major renovation; view it from across the Hofvijver pond.' }),
  'the-hague-h6': v(90, 120, { c: 'daily', s: 'https://www.madurodam.nl/en' }),
  'the-hague-h7': v(60, 75, { c: 'mon', s: 'https://escherinhetpaleis.nl/en?lang=en' }),
  // Utrecht
  'utrecht-h1': v(60, 60, { b: 'req', s: 'https://www.domtoren.nl/en', n: '가이드 투어로만 오르며 계단이 465개입니다.|Climbed on guided tours only—465 steps.' }),
  'utrecht-h2': v(45, 60),
  'utrecht-h3': v(15, 20),
  'utrecht-h4': v(75, 90, { c: 'mon', s: 'https://www.museumspeelklok.nl/en/' }),
  'utrecht-h5': v(20, 30, { b: 'no', n: FREE }),
  'utrecht-h6': v(30, 45),
  // Haarlem
  'haarlem-h1': v(20, 30),
  'haarlem-h2': v(75, 90, { c: 'mon', s: 'https://franshalsmuseum.nl/en' }),
  'haarlem-h3': v(10, 15),
  'haarlem-h4': v(30, 45, { c: 'sun', s: 'https://www.bavo.nl/en/' }),
  'haarlem-h5': v(75, 90, { c: 'mon', s: 'https://teylersmuseum.nl/en' }),
  'haarlem-h6': v(30, 45),
  // Delft
  'delft-h1': v(45, 60, { c: 'sun', s: DELFT_KERK, n: '신교회와 구교회는 표 한 장으로 함께 봅니다.|One ticket covers both the New and Old Church.' }),
  'delft-h2': v(75, 90, { c: 'daily', s: 'https://museum.royaldelft.com/en/' }),
  'delft-h3': v(15, 20),
  'delft-h4': v(30, 40, { c: 'sun', s: DELFT_KERK }),
  'delft-h5': v(45, 60, { c: 'daily', s: 'https://www.vermeerdelft.nl/en/', n: '진품은 없고 복제화로 생애와 기법을 소개합니다.|No originals—reproductions explain his life and technique.' }),
  'delft-h6': v(30, 45),
  // Maastricht
  'maastricht-h1': v(15, 20),
  'maastricht-h2': v(60, 75, { b: 'req', s: 'https://www.exploremaastricht.nl/en', n: '가이드 투어로만 들어가며 안은 1년 내내 11도쯤이라 겉옷이 필요합니다.|Guided tours only; it is about 11°C inside all year, so bring a layer.' }),
  'maastricht-h3': v(20, 30),
  'maastricht-h4': v(30, 45, { s: 'https://www.sintservaas.nl/' }),
  'maastricht-h5': v(10, 15),
  'maastricht-h6': v(30, 45),
  // Giethoorn
  'giethoorn-h1': v(60, 120),
  'giethoorn-h2': v(45, 60),
  'giethoorn-h3': v(20, 30),
  'giethoorn-h4': v(40, 45),

  // Luxembourg City
  'luxembourg-city-h1': v(15, 20, { s: LUX, n: '내부 가이드 투어는 한여름(대략 7월 중순~8월)에만 있고 관광 안내소에서 예약합니다.|Interior tours run only in midsummer (roughly mid-July to August), booked through the tourist office.' }),
  'luxembourg-city-h2': v(90, 120),
  'luxembourg-city-h3': v(45, 60, { s: 'https://www.luxembourg-city.com/en/tours-activities/underground/bock-casemates', n: '겨울에는 닫는 기간이 있습니다.|Closed for part of the winter.' }),
  'luxembourg-city-h4': v(60, 90),
  'luxembourg-city-h5': v(15, 20, { b: 'no', n: FREE }),
  'luxembourg-city-h6': v(10, 15),
  'luxembourg-city-h7': v(45, 60),
  // Vianden
  'vianden-h1': v(75, 90, { c: 'daily', s: 'https://castle-vianden.lu/gb/' }),
  'vianden-h2': v(20, 30),
  'vianden-h3': v(30, 45, { n: '체어리프트는 봄부터 가을까지만 다닙니다.|The chairlift runs spring to autumn only.' }),
  'vianden-h4': v(30, 45, { s: 'https://victor-hugo.lu/' }),
  // Echternach
  'echternach-h1': v(45, 90),
  'echternach-h2': v(20, 30, { b: 'no', n: FREE }),
  'echternach-h3': v(180, 300),
  'echternach-h4': v(30, 45),
  // Remich
  'remich-h1': v(30, 45),
  'remich-h2': v(120, 180),
  'remich-h3': v(20, 30),
  'remich-h4': v(45, 60, { s: 'https://www.papillons.lu/en/', n: '그레벤마허(Grevenmacher)에 있으며 봄부터 가을까지만 엽니다.|In Grevenmacher; open spring to autumn only.' }),
}
