import type { HighlightVisit } from '../types'
import { v } from './visit-helper'

const FREE = '입장은 무료입니다.|Entry is free.'
const MOSQUE = '예배 시간에는 관광객이 들어갈 수 없습니다. 신발을 벗고 어깨와 무릎을 가리며 여성은 머리를 가립니다.|Closed to visitors during prayers. Remove shoes, cover shoulders and knees, and women cover their hair.'
const CHURCH = '입장은 무료이고 어깨와 무릎을 가려야 합니다. 여성은 머리를 가립니다.|Free; cover shoulders and knees, and women cover their hair.'
const MUZE = 'https://muze.gov.tr/'
const MUZE_NOTE = '튀르키예 국립 유적·박물관은 문화관광부 공식 누리집(muze.gov.tr)에서 표를 팝니다.|Turkish state sites and museums sell tickets on the ministry’s official site, muze.gov.tr.'
const HIERAPOLIS = '석회 테라스와 히에라폴리스 유적은 입장권 한 장으로 함께 봅니다.|The travertines and Hierapolis share a single ticket.'
const UA = '전쟁 중이며 한국 정부가 여행금지 지역으로 지정했습니다. 공습경보에 따라 예고 없이 닫습니다.|The country is at war and under a Korean government travel ban. Sites close without notice during air-raid alerts.'

/** Bulgaria, Romania, Türkiye, Georgia, Armenia, Azerbaijan, Ukraine, Moldova */
export const visitEast: Record<string, HighlightVisit> = {
  // Sofia
  'sofia-h1': v(30, 45, { c: 'daily', b: 'no', n: FREE }),
  'sofia-h2': v(15, 20, { b: 'no', n: FREE }),
  'sofia-h3': v(30, 45),
  'sofia-h4': v(30, 45, { c: 'daily', s: 'https://boyanachurch.org/indexen.htm', n: '프레스코 보호를 위해 소수 인원이 10분쯤만 들어갑니다. 시내에서 8km 떨어져 있습니다.|To protect the frescoes, small groups get about ten minutes inside. It is 8 km from the centre.' }),
  'sofia-h5': v(180, 300),
  'sofia-h6': v(15, 60),
  // Plovdiv
  'plovdiv-h1': v(30, 45),
  'plovdiv-h2': v(90, 120),
  'plovdiv-h3': v(45, 60),
  'plovdiv-h4': v(15, 20, { b: 'no', n: FREE }),
  'plovdiv-h5': v(20, 30, { b: 'no', n: FREE }),
  // Varna
  'varna-h1': v(45, 90),
  'varna-h2': v(60, 180),
  'varna-h3': v(75, 90),
  'varna-h4': v(15, 20),
  'varna-h5': v(30, 45),
  // Veliko Tarnovo
  'veliko-tarnovo-h1': v(90, 120, { c: 'daily', s: 'https://www.museumvt.com/en/' }),
  'veliko-tarnovo-h2': v(30, 45),
  'veliko-tarnovo-h3': v(20, 30),
  'veliko-tarnovo-h4': v(10, 15),
  'veliko-tarnovo-h5': v(90, 120),
  // Nessebar
  'nessebar-h1': v(90, 120),
  'nessebar-h2': v(45, 60),
  'nessebar-h3': v(10, 10),
  'nessebar-h4': v(60, 120),
  'nessebar-h5': v(40, 45),

  // Bucharest
  'bucharest-h1': v(60, 90, { c: 'daily', b: 'req', n: '가이드 투어로만 들어가며 하루 전까지 예약해야 합니다. 여권 원본이 없으면 입장할 수 없습니다.|Guided tours only, booked at least a day ahead. No entry without your original passport.' }),
  'bucharest-h2': v(60, 90),
  'bucharest-h3': v(15, 20),
  'bucharest-h4': v(60, 90),
  'bucharest-h5': v(15, 120, { n: '공연이 없는 시간에 내부 관람이 되는 날이 있습니다.|The interior can be visited on some days outside concert times.' }),
  'bucharest-h6': v(90, 120, { n: '국립 미술관으로 쓰이며 월·화요일에 쉽니다.|Houses the National Museum of Art, closed Mondays and Tuesdays.' }),
  // Brașov
  'brasov-h1': v(30, 45, { s: 'https://bisericaneagra.ro/en/', n: '겨울에는 월요일에 쉽니다.|Closed on Mondays in winter.' }),
  'brasov-h2': v(20, 30),
  'brasov-h3': v(60, 90, { n: '케이블카는 월요일 오전에 점검으로 쉽니다.|The cable car is shut for maintenance on Monday mornings.' }),
  'brasov-h4': v(90, 120, { c: 'daily', b: 'rec', s: 'https://bran-castle.com/', n: '브라쇼브에서 버스로 45분쯤 걸립니다.|About 45 minutes by bus from Brașov.' }),
  'brasov-h5': v(20, 30),
  // Sibiu
  'sibiu-h1': v(20, 30),
  'sibiu-h2': v(15, 20),
  'sibiu-h3': v(10, 10),
  'sibiu-h4': v(20, 30),
  'sibiu-h5': v(150, 180, { c: 'daily', s: 'https://muzeulastra.ro/en/' }),
  // Sighișoara
  'sighisoara-h1': v(40, 45, { c: 'mon' }),
  'sighisoara-h2': v(60, 90),
  'sighisoara-h3': v(10, 15),
  'sighisoara-h4': v(15, 20),
  'sighisoara-h5': v(10, 15),
  // Cluj-Napoca
  'cluj-napoca-h1': v(20, 30),
  'cluj-napoca-h2': v(15, 20),
  'cluj-napoca-h3': v(30, 45),
  'cluj-napoca-h4': v(30, 45),
  'cluj-napoca-h5': v(75, 90, { c: 'daily', s: 'https://gradinabotanica.ubbcluj.ro/en/home-3/' }),
  // Timișoara
  'timisoara-h1': v(20, 30),
  'timisoara-h2': v(20, 30),
  'timisoara-h3': v(20, 30),
  'timisoara-h4': v(30, 45),
  'timisoara-h5': v(45, 60),

  // Istanbul
  'istanbul-h1': v(60, 75, { c: 'daily', b: 'rec', s: 'https://ayasofyacamii.gov.tr/en', n: '관광객은 유료 입장권으로 2층 회랑만 봅니다. 금요일 낮 예배 시간(대략 12시 30분~14시 30분)에는 닫습니다.|Tourists enter on a paid ticket and see the upper gallery only. Closed around Friday midday prayers (about 12:30–2:30 pm).' }),
  'istanbul-h2': v(30, 45, { c: 'daily', b: 'no', n: MOSQUE }),
  'istanbul-h3': v(60, 90, { c: 'sun', b: 'no' }),
  'istanbul-h4': v(90, 120, { n: '에미뇌뉘 선착장에서 떠나는 공영 페리가 가장 쌉니다.|The public ferries from Eminönü are the cheapest option.' }),
  'istanbul-h5': v(40, 45, { c: 'daily', t: MUZE, n: '시간당 입장 인원이 제한돼 줄이 깁니다.|Hourly numbers are capped, so queues are long.' }),
  'istanbul-h6': v(150, 180, { c: 'tue', b: 'rec', s: 'https://www.millisaraylar.gov.tr/Lokasyon/2/Topkapi-Sarayi?culture=en', n: '하렘과 아야 이리니 성당이 통합 입장권에 포함됩니다.|The combined ticket includes the Harem and Hagia Irene.' }),
  // Göreme (Cappadocia)
  'goreme-h1': v(180, 240, { b: 'req', n: '해 뜰 무렵에 뜨고 바람이 세면 당일 새벽에 취소됩니다. 이틀 이상 머무는 일정이 안전합니다.|Flights go at dawn and are cancelled that morning if it is windy—allow at least two days.' }),
  'goreme-h2': v(90, 120, { c: 'daily', t: MUZE, n: MUZE_NOTE }),
  'goreme-h3': v(60, 90),
  'goreme-h4': v(40, 45),
  'goreme-h5': v(60, 90, { c: 'daily', t: MUZE, n: '통로가 좁고 낮아 폐소공포증이 있으면 힘듭니다.|The passages are low and narrow—difficult for the claustrophobic.' }),
  'goreme-h6': v(30, 45, { t: MUZE }),
  'goreme-h7': v(120, 180),
  'goreme-h8': v(60, 90),
  // Ankara
  'ankara-h1': v(75, 90, { c: 'daily', b: 'no', s: 'https://www.anitkabir.tsk.tr/', n: '입장은 무료이고 입구에서 보안 검색을 합니다.|Free; there is a security check at the gate.' }),
  'ankara-h2': v(45, 60, { b: 'no', n: FREE }),
  'ankara-h3': v(90, 120, { c: 'daily', t: MUZE, n: MUZE_NOTE }),
  'ankara-h4': v(15, 20),
  'ankara-h5': v(45, 60),
  // İzmir
  'izmir-h1': v(45, 60),
  'izmir-h2': v(40, 45, { t: MUZE }),
  'izmir-h3': v(10, 15),
  'izmir-h4': v(30, 45),
  'izmir-h5': v(180, 240, { c: 'daily', t: MUZE, n: '이즈미르에서 셀축까지 기차나 차로 1시간쯤 걸립니다. 그늘이 거의 없습니다.|About an hour from İzmir to Selçuk by train or road. There is very little shade.' }),
  // Antalya
  'antalya-h1': v(90, 120),
  'antalya-h2': v(45, 60),
  'antalya-h3': v(90, 120, { t: MUZE }),
  'antalya-h4': v(120, 240),
  'antalya-h5': v(60, 75, { c: 'daily', t: MUZE, n: '안탈리아에서 차로 45분쯤 걸립니다.|About 45 minutes by road from Antalya.' }),
  // Bursa
  'bursa-h1': v(20, 30, { b: 'no', n: MOSQUE }),
  'bursa-h2': v(20, 30, { b: 'no', n: FREE }),
  'bursa-h3': v(45, 60, { c: 'sun' }),
  'bursa-h4': v(180, 240, { n: '케이블카는 강풍이 불면 운휴합니다.|The cable car stops in high winds.' }),
  'bursa-h5': v(60, 90),
  // Trabzon
  'trabzon-h1': v(120, 150, { c: 'daily', t: MUZE, n: '트라브존에서 차로 1시간쯤 걸리고 주차장에서 가파른 길을 걷습니다. 낙석 보강 공사로 일부 구역이 닫히기도 합니다.|About an hour by road from Trabzon, then a steep walk. Sections may be closed for rockfall works.' }),
  'trabzon-h2': v(20, 30, { n: MOSQUE }),
  'trabzon-h3': v(120, 180),
  'trabzon-h4': v(40, 45),
  'trabzon-h5': v(30, 45),
  // Pamukkale
  'pamukkale-h1': v(90, 120, { c: 'daily', t: MUZE, n: '석회 테라스 위는 신발을 벗고 맨발로 걸어야 합니다. ' + HIERAPOLIS.split('|')[0] + '|You must walk the travertines barefoot. ' + HIERAPOLIS.split('|')[1] }),
  'pamukkale-h2': v(90, 120, { c: 'daily', t: MUZE, n: HIERAPOLIS }),
  'pamukkale-h3': v(20, 30, { n: HIERAPOLIS }),
  'pamukkale-h4': v(60, 90, { n: '유적 입장권과 별도로 수영장 요금을 냅니다.|The pool has its own fee on top of the site ticket.' }),
  'pamukkale-h5': v(30, 45),

  // Tbilisi
  'tbilisi-h1': v(45, 60, { n: '복원 공사로 성벽 안쪽이 닫혀 있던 곳입니다. 케이블카로 올라가 전망은 볼 수 있으며, 내부 재개방 여부는 현지에서 확인하세요.|The interior has been closed for restoration. The cable car still gives the view—check locally whether the fortress itself has reopened.' }),
  'tbilisi-h2': v(60, 90, { b: 'rec', n: '개인실은 미리 예약하는 편이 좋습니다.|Private rooms are best reserved ahead.' }),
  'tbilisi-h3': v(10, 15),
  'tbilisi-h4': v(30, 45, { c: 'daily', b: 'no', n: CHURCH }),
  'tbilisi-h5': v(60, 90),
  // Batumi
  'batumi-h1': v(60, 90),
  'batumi-h2': v(15, 30),
  'batumi-h3': v(120, 180, { c: 'daily' }),
  'batumi-h4': v(10, 15, { n: '두 조형물이 10분 주기로 움직이며 해 진 뒤에 조명이 켜집니다.|The two figures move on a ten-minute cycle and are lit after dark.' }),
  'batumi-h5': v(20, 30),
  // Kutaisi
  'kutaisi-h1': v(30, 45, { b: 'no', n: CHURCH }),
  'kutaisi-h2': v(45, 60, { b: 'no', n: '수년째 복원 공사 중이라 비계가 쳐져 있고 일부만 들어갈 수 있습니다.|Under restoration for years—expect scaffolding and only partial access.' }),
  'kutaisi-h3': v(75, 90, { c: 'mon', n: '가이드 투어로만 들어가며 안은 14도쯤입니다.|Guided tours only; it is about 14°C inside.' }),
  'kutaisi-h4': v(10, 15),
  'kutaisi-h5': v(60, 75),
  // Stepantsminda (Kazbegi)
  'stepantsminda-h1': v(120, 180, { b: 'no', n: '마을에서 걸어서 편도 1시간 반, 차로는 20분쯤 걸립니다. 복장 규정이 있습니다.|About 90 minutes each way on foot from the village, or 20 minutes by car. A dress code applies.' }),
  'stepantsminda-h2': v(20, 30),
  'stepantsminda-h3': v(30, 45),
  'stepantsminda-h4': v(90, 120),
  'stepantsminda-h5': v(20, 30),
  // Sighnaghi
  'sighnaghi-h1': v(45, 60, { b: 'no', n: FREE }),
  'sighnaghi-h2': v(45, 60, { b: 'no', n: CHURCH }),
  'sighnaghi-h3': v(60, 90),
  'sighnaghi-h4': v(20, 30),
  'sighnaghi-h5': v(15, 20),

  // Armenia
  'yerevan-h1': v(60, 90, { s: 'https://www.cmf.am/en', n: '바깥 계단은 무료로 오르고, 안쪽 카페스지안 미술관은 월요일에 쉽니다.|The outdoor steps are free; the Cafesjian galleries inside close on Mondays.' }),
  'yerevan-h2': v(20, 30, { n: '여름철 저녁에는 음악 분수 쇼가 열립니다.|A musical fountain show runs on summer evenings.' }),
  'yerevan-h3': v(60, 75, { c: 'sun,mon', s: 'https://matenadaran.am/en/matenadaran/home/' }),
  'gyumri-h1': v(20, 30),
  'gyumri-h2': v(30, 45),
  'gyumri-h3': v(45, 60),
  'dilijan-h1': v(180, 300),
  'dilijan-h2': v(45, 60, { b: 'no', n: FREE }),
  'dilijan-h3': v(30, 45),

  // Azerbaijan
  'baku-h1': v(20, 30, { n: '해가 진 뒤 건물 외벽에 불꽃 영상이 켜집니다.|The flame light show plays on the façades after dark.' }),
  'baku-h2': v(120, 150, { s: 'https://icherisheher.gov.az/en' }),
  'baku-h3': v(30, 45, { s: 'https://icherisheher.gov.az/en' }),
  'sheki-h1': v(40, 45),
  'sheki-h2': v(20, 30),
  'sheki-h3': v(60, 90),
  'gabala-h1': v(120, 180, { s: 'http://www.tufandag.com/en' }),
  'gabala-h2': v(30, 45),
  'gabala-h3': v(45, 60),

  // Ukraine
  'kyiv-h1': v(120, 180, { n: UA }),
  'kyiv-h2': v(60, 75, { n: UA }),
  'kyiv-h3': v(45, 60, { n: UA }),
  'lviv-h1': v(45, 60, { n: UA }),
  'lviv-h2': v(15, 150, { n: UA }),
  'lviv-h3': v(20, 30, { n: UA }),
  'odesa-h1': v(15, 20, { n: UA }),
  'odesa-h2': v(30, 45, { n: UA }),
  'odesa-h3': v(15, 150, { n: UA }),

  // Moldova
  'chisinau-h1': v(10, 10),
  'chisinau-h2': v(30, 45),
  'chisinau-h3': v(30, 45, { b: 'no' }),
  'orheiul-vechi-h1': v(45, 60, { b: 'no', n: CHURCH }),
  'orheiul-vechi-h2': v(30, 45),
  'orheiul-vechi-h3': v(45, 60),
  'soroca-h1': v(40, 45),
  'soroca-h2': v(20, 30),
  'soroca-h3': v(20, 30),
}
