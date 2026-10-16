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
  'sofia-h1': v(30, 45, { c: 'daily', b: 'no', n: FREE, k: '2026-10' }),
  'sofia-h2': v(15, 20, { b: 'no', n: FREE }),
  'sofia-h3': v(30, 45),
  'sofia-h4': v(30, 45, { c: 'daily', s: 'https://boyanachurch.org/indexen.htm', n: '프레스코 보호를 위해 소수 인원이 10분쯤만 들어갑니다. 시내에서 8km 떨어져 있습니다.|To protect the frescoes, small groups get about ten minutes inside. It is 8 km from the centre.', k: '2026-10' }),
  'sofia-h5': v(180, 300),
  'sofia-h6': v(15, 60, { c: 'mon', b: 'no', s: 'https://nationalgallery.bg/visiting/the-palace/', n: '국립 미술관으로 쓰이며 화~일 10:00~18:00에 엽니다. 국경일·성탄절·새해·부활절에도 쉽니다.|Now the National Gallery: Tue–Sun 10:00–18:00; also closed on national holidays, Christmas, New Year and Easter.', k: '2026-10' }),
  // Plovdiv
  'plovdiv-h1': v(30, 45, { c: 'daily', s: 'https://oldplovdiv.bg/en/sights/3', n: '매일 엽니다. 4~10월 9:30~18:00, 11~3월 9:00~17:30이고 12:30~13:00은 점심시간입니다. 공연이 있는 날은 관람이 제한될 수 있습니다.|Open daily: 9:30–18:00 April–October and 9:00–17:30 November–March, with a 12:30–13:00 lunch break; access may be limited on performance days.', k: '2026-10' }),
  'plovdiv-h2': v(90, 120),
  'plovdiv-h3': v(45, 60),
  'plovdiv-h4': v(15, 20, { b: 'no', n: FREE }),
  'plovdiv-h5': v(20, 30, { b: 'no', n: FREE }),
  // Varna
  'varna-h1': v(45, 90),
  'varna-h2': v(60, 180),
  'varna-h3': v(75, 90, { c: 'mon', b: 'no', s: 'https://www.museumvarna.com/en/museums-and-sites-within-the-system-of-the-varna-regional-museum-of-history-switching-to-winter-hours-on-october-1st/', n: '10월 1일부터 겨울 시간표가 적용되어 일요일에도 쉽니다(10:00~17:00).|From 1 October winter hours apply and it also closes on Sundays (10:00–17:00).', k: '2026-10' }),
  'varna-h4': v(15, 20),
  'varna-h5': v(30, 45, { b: 'no', s: 'https://www.museumvarna.com/en/museums-and-sites-within-the-system-of-the-varna-regional-museum-of-history-switching-to-winter-hours-on-october-1st/', n: '여름에는 매일 열고, 10월 1일부터 겨울에는 일·월요일에 쉽니다.|Open daily in summer; from 1 October (winter hours) closed on Sundays and Mondays.', k: '2026-10' }),
  // Veliko Tarnovo
  'veliko-tarnovo-h1': v(90, 120, { c: 'daily', s: 'https://www.museumvt.com/en/', k: '2026-10' }),
  'veliko-tarnovo-h2': v(30, 45),
  'veliko-tarnovo-h3': v(20, 30),
  'veliko-tarnovo-h4': v(10, 15),
  'veliko-tarnovo-h5': v(90, 120),
  // Nessebar
  'nessebar-h1': v(90, 120),
  'nessebar-h2': v(45, 60),
  'nessebar-h3': v(10, 10),
  'nessebar-h4': v(60, 120),
  'nessebar-h5': v(40, 45, { c: 'daily', s: 'https://www.ancient-nessebar.com/html/main_en.php?menu=working', n: '공식 시간표상 연중 매일 열고, 철마다 닫는 시간이 다릅니다(겨울 17:00, 여름은 더 늦게).|Per the official timetable it opens every day of the year; closing time varies by season (17:00 in winter, later in summer).', k: '2026-10' }),

  // Bucharest
  'bucharest-h1': v(60, 90, { c: 'daily', b: 'req', n: '가이드 투어로만 들어가며 하루 전까지 전화로 예약해야 합니다(온라인 판매 없음, 표는 당일 현장 구매). 여권 원본이 없으면 입장할 수 없습니다.|Guided tours only, reserved by phone at least a day ahead (no online sales; tickets are bought on the day). You will not be admitted without your original passport.', k: '2026-10' }),
  'bucharest-h2': v(60, 90),
  'bucharest-h3': v(15, 20),
  'bucharest-h4': v(60, 90),
  'bucharest-h5': v(15, 120, { n: '공연이 없는 시간에 내부 관람이 되는 날이 있습니다.|The interior can be visited on some days outside concert times.' }),
  'bucharest-h6': v(90, 120, { c: 'mon,tue', s: 'https://mnar.ro/viziteaza/1-program', n: '국립 미술관으로 쓰이며 수~금 10:00~18:00, 토·일 11:00~19:00에 엽니다. 매달 첫 수요일은 무료입니다.|Houses the National Museum of Art: Wed–Fri 10:00–18:00, Sat–Sun 11:00–19:00; free on the first Wednesday of the month.', k: '2026-10', x: [['2026년 10월 14~18일은 왕궁 역사 공간이 닫고, 18일에는 본관 전체가 닫습니다.|The historic palace rooms are closed 14–18 October 2026, and the whole main building on the 18th.', '2026-10-18']] }),
  // Brașov
  'brasov-h1': v(30, 45, { c: 'daily', s: 'https://bisericaneagra.ro/en/', n: '겨울에는 월요일에 쉽니다.|Closed on Mondays in winter.', k: '2026-10' }),
  'brasov-h2': v(20, 30),
  'brasov-h3': v(60, 90, { n: '케이블카는 화~일 10:00~23:00, 월요일은 오전 점검 뒤 12:00~23:00에 운행합니다.|The cable car runs Tue–Sun 10:00–23:00; on Mondays it opens at 12:00 after morning maintenance.', k: '2026-10' }),
  'brasov-h4': v(90, 120, { c: 'daily', b: 'rec', s: 'https://bran-castle.com/', n: '브라쇼브에서 버스로 45분쯤 걸립니다.|About 45 minutes by bus from Brașov.', k: '2026-10' }),
  'brasov-h5': v(20, 30),
  // Sibiu
  'sibiu-h1': v(20, 30),
  'sibiu-h2': v(15, 20),
  'sibiu-h3': v(10, 10),
  'sibiu-h4': v(20, 30),
  'sibiu-h5': v(150, 180, { c: 'daily', s: 'https://muzeulastra.ro/en/', n: '야외 박물관은 연중 열지만 실내 전시관은 수~일요일에만 엽니다.|The open-air museum is open all year; the indoor pavilions open Wednesday to Sunday only.', k: '2026-10' }),
  // Sighișoara
  'sighisoara-h1': v(40, 45, { c: 'mon', s: 'https://visitmures.com/en/sighisoara/built-heritage/museums/sighisoara-history-museum', n: '시계탑 안은 역사 박물관입니다. 5월 중순~9월 중순 화~금 9:00~18:30·주말 10:00~17:30, 그 밖에는 15:30에 닫습니다.|The tower houses the History Museum: mid-May to mid-September Tue–Fri 9:00–18:30, weekends 10:00–17:30; otherwise it closes at 15:30.', k: '2026-10' }),
  'sighisoara-h2': v(60, 90),
  'sighisoara-h3': v(10, 15),
  'sighisoara-h4': v(15, 20),
  'sighisoara-h5': v(10, 15),
  // Cluj-Napoca
  'cluj-napoca-h1': v(20, 30),
  'cluj-napoca-h2': v(15, 20),
  'cluj-napoca-h3': v(30, 45),
  'cluj-napoca-h4': v(30, 45),
  'cluj-napoca-h5': v(75, 90, { c: 'daily', s: 'https://gradinabotanica.ubbcluj.ro/en/home-3/', n: '12월 25~26일, 1월 1일, 1월 24일은 쉽니다. 온실은 매달 첫 두 월요일에 닫습니다.|Closed 25–26 December, 1 January and 24 January. The greenhouses close on the first two Mondays of each month.', k: '2026-10' }),
  // Timișoara
  'timisoara-h1': v(20, 30),
  'timisoara-h2': v(20, 30),
  'timisoara-h3': v(20, 30),
  'timisoara-h4': v(30, 45),
  'timisoara-h5': v(45, 60),

  // Istanbul
  'istanbul-h1': v(60, 75, { c: 'daily', b: 'rec', s: 'https://ayasofyacamii.gov.tr/en', n: '관광객은 유료 입장권으로 2층 회랑만 봅니다. 예배 일정에 따라 입장이 제한되거나 멈출 수 있어 금요일 낮은 피하는 편이 좋습니다. 뮤지엄 패스는 쓸 수 없고 복장 규정이 있습니다.|Tourists enter on a paid ticket and see the upper gallery only. Entry can be restricted or paused for worship, so avoid Friday midday. Museum passes are not valid and a dress code applies.', k: '2026-10' }),
  'istanbul-h2': v(30, 45, { c: 'daily', b: 'no', n: '금요일은 14시 30분부터 관광 입장이 됩니다. 예배 시간에는 들어갈 수 없고, 신발을 벗고 어깨와 무릎을 가리며 여성은 머리를 가립니다.|On Fridays visitors are admitted from 14:30. Closed to visitors during prayers; remove shoes, cover shoulders and knees, and women cover their hair.', k: '2026-10' }),
  'istanbul-h3': v(60, 90, { c: 'sun', b: 'no' }),
  'istanbul-h4': v(90, 120, { n: '에미뇌뉘 선착장에서 떠나는 공영 페리가 가장 쌉니다.|The public ferries from Eminönü are the cheapest option.' }),
  'istanbul-h5': v(40, 45, { c: 'daily', t: MUZE, n: '시간당 입장 인원이 제한돼 줄이 깁니다.|Hourly numbers are capped, so queues are long.', k: '2026-10' }),
  'istanbul-h6': v(150, 180, { c: 'tue', b: 'rec', s: 'https://www.millisaraylar.gov.tr/Lokasyon/2/Topkapi-Sarayi?culture=en', n: '하렘과 아야 이리니 성당이 통합 입장권에 포함됩니다.|The combined ticket includes the Harem and Hagia Irene.', k: '2026-10' }),
  // Göreme (Cappadocia)
  'goreme-h1': v(180, 240, { b: 'req', n: '해 뜰 무렵에 뜨고 바람이 세면 당일 새벽에 취소됩니다. 이틀 이상 머무는 일정이 안전합니다.|Flights go at dawn and are cancelled that morning if it is windy—allow at least two days.' }),
  'goreme-h2': v(90, 120, { c: 'daily', t: MUZE, n: MUZE_NOTE, k: '2026-10' }),
  'goreme-h3': v(60, 90),
  'goreme-h4': v(40, 45),
  'goreme-h5': v(60, 90, { c: 'daily', t: MUZE, n: '통로가 좁고 낮아 폐소공포증이 있으면 힘듭니다.|The passages are low and narrow—difficult for the claustrophobic.', k: '2026-10' }),
  'goreme-h6': v(30, 45, { c: 'daily', s: 'https://muze.gov.tr/muze-detay?SectionId=ZPO01&DistId=ZPO', t: MUZE, n: '젤베·파샤바으 유적 입장권으로 봅니다. 매일 8:00~18:00(매표 17:15까지)입니다.|Covered by the Zelve–Paşabağ site ticket; open daily 8:00–18:00 (tickets until 17:15).', k: '2026-10' }),
  'goreme-h7': v(120, 180),
  'goreme-h8': v(60, 90),
  // Ankara
  'ankara-h1': v(75, 90, { c: 'daily', b: 'no', s: 'https://www.anitkabir.tsk.tr/', n: '입장은 무료이고 입구에서 보안 검색을 합니다.|Free; there is a security check at the gate.', k: '2026-10' }),
  'ankara-h2': v(45, 60, { b: 'no', n: FREE }),
  'ankara-h3': v(90, 120, { c: 'daily', t: MUZE, n: '표는 문화관광부 공식 누리집(muze.gov.tr)에서 팝니다.|Tickets are sold on the ministry’s official site, muze.gov.tr.', k: '2026-10', x: [['앙카라관과 고전관은 보수 공사로 2027년 3월 2일까지 닫습니다.|The Ankara and Classical halls are closed for repairs until 2 March 2027.', '2027-03-02']] }),
  'ankara-h4': v(15, 20),
  'ankara-h5': v(45, 60),
  // İzmir
  'izmir-h1': v(45, 60),
  'izmir-h2': v(40, 45, { c: 'daily', s: 'https://muze.gov.tr/muze-detay?sectionId=AGR01&distId=MRK', t: MUZE, k: '2026-10' }),
  'izmir-h3': v(10, 15),
  'izmir-h4': v(30, 45),
  'izmir-h5': v(180, 240, { c: 'daily', t: MUZE, n: '이즈미르에서 셀축까지 기차나 차로 1시간쯤 걸립니다. 그늘이 거의 없습니다.|About an hour from İzmir to Selçuk by train or road. There is very little shade.', k: '2026-10' }),
  // Antalya
  'antalya-h1': v(90, 120),
  'antalya-h2': v(45, 60),
  'antalya-h3': v(0, 0, { s: 'https://muze.gov.tr/muze-detay?SectionId=ANT01&DistId=ANT', t: MUZE, n: '옛 건물을 헐고 새 박물관을 짓느라 문을 닫았습니다(공식 상태: 관람 중단). 다시 여는 날짜는 아직 발표되지 않았습니다.|Closed while the old building is replaced by a new museum (official status: closed to visitors); no reopening date has been announced yet.', k: '2026-10', z: true }),
  'antalya-h4': v(120, 240),
  'antalya-h5': v(60, 75, { c: 'daily', t: MUZE, n: '안탈리아에서 차로 45분쯤 걸립니다.|About 45 minutes by road from Antalya.', k: '2026-10' }),
  // Bursa
  'bursa-h1': v(20, 30, { b: 'no', n: MOSQUE }),
  'bursa-h2': v(20, 30, { b: 'no', n: FREE }),
  'bursa-h3': v(45, 60, { c: 'sun' }),
  'bursa-h4': v(180, 240, { n: '케이블카는 강풍이 불면 운휴합니다.|The cable car stops in high winds.' }),
  'bursa-h5': v(60, 90),
  // Trabzon
  'trabzon-h1': v(120, 150, { c: 'daily', t: MUZE, n: '트라브존에서 차로 1시간쯤 걸리고 주차장에서 가파른 길을 걷습니다. 낙석 보강 공사로 일부 구역이 닫히기도 합니다.|About an hour by road from Trabzon, then a steep walk. Sections may be closed for rockfall works.', k: '2026-10' }),
  'trabzon-h2': v(20, 30, { n: MOSQUE }),
  'trabzon-h3': v(120, 180),
  'trabzon-h4': v(40, 45),
  'trabzon-h5': v(30, 45),
  // Pamukkale
  'pamukkale-h1': v(90, 120, { c: 'daily', t: MUZE, n: '석회 테라스 위는 신발을 벗고 맨발로 걸어야 합니다. ' + HIERAPOLIS.split('|')[0] + '|You must walk the travertines barefoot. ' + HIERAPOLIS.split('|')[1], k: '2026-10' }),
  'pamukkale-h2': v(90, 120, { c: 'daily', t: MUZE, n: HIERAPOLIS, k: '2026-10' }),
  'pamukkale-h3': v(20, 30, { c: 'daily', n: HIERAPOLIS, k: '2026-10' }),
  'pamukkale-h4': v(60, 90, { c: 'daily', s: 'https://muze.gov.tr/muze-detay?DistId=PMK&SectionId=PMK01', n: '유적 입장권과 별도로 수영장 요금을 냅니다. 공식 안내상 2026년 10월 현재 운영 중입니다.|The pool has its own fee on top of the site ticket; officially open as of October 2026.', k: '2026-10' }),
  'pamukkale-h5': v(30, 45, { c: 'daily', s: 'https://muze.gov.tr/muze-detay?SectionId=DHA01&DistId=MRK', n: '매일 8:00~17:30(매표 17:00까지)에 엽니다. 철에 따라 시간이 바뀝니다.|Open daily 8:00–17:30 (tickets until 17:00); hours change by season.', k: '2026-10' }),

  // Tbilisi
  'tbilisi-h1': v(45, 60, { n: '복원 공사로 성벽 안쪽이 닫혀 있던 곳입니다. 케이블카로 올라가 전망은 볼 수 있으며, 내부 재개방 여부는 현지에서 확인하세요.|The interior has been closed for restoration. The cable car still gives the view—check locally whether the fortress itself has reopened.' }),
  'tbilisi-h2': v(60, 90, { s: 'https://georgia.travel/tbilisi-sulfur-baths', b: 'rec', n: '비수기에는 바로 들어갈 수도 있지만 개인실은 미리 예약하는 편이 좋습니다. 때밀이(키사)와 마사지는 추가 요금입니다.|Walk-ins are often possible off season, but private rooms are best reserved ahead. The kisa scrub and massage cost extra.', k: '2026-10' }),
  'tbilisi-h3': v(10, 15),
  'tbilisi-h4': v(30, 45, { c: 'daily', b: 'no', n: CHURCH }),
  'tbilisi-h5': v(60, 90),
  // Batumi
  'batumi-h1': v(60, 90),
  'batumi-h2': v(15, 30),
  'batumi-h3': v(120, 180, { c: 'daily', k: '2026-10' }),
  'batumi-h4': v(10, 15, { n: '두 조형물이 10분 주기로 움직이며 해 진 뒤에 조명이 켜집니다.|The two figures move on a ten-minute cycle and are lit after dark.' }),
  'batumi-h5': v(20, 30),
  // Kutaisi
  'kutaisi-h1': v(30, 45, { b: 'no', n: CHURCH }),
  'kutaisi-h2': v(45, 60, { b: 'no', n: '수년째 복원 공사 중이라 비계가 쳐져 있고 일부만 들어갈 수 있습니다.|Under restoration for years—expect scaffolding and only partial access.' }),
  'kutaisi-h3': v(75, 90, { n: '공식 안내가 매일 개방과 월요일 휴무로 서로 다르고 기술 점검으로 닫는 기간도 있으니 가기 전에 확인하세요. 가이드 투어로만 들어가며 안은 14도쯤입니다.|Official pages disagree (open daily, or closed on Mondays) and it sometimes closes for technical work, so check before going. Guided tours only; about 14°C inside.' }),
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
  'yerevan-h1': v(60, 90, { c: 'daily', s: 'https://www.cmf.am/en', n: '바깥 계단은 무료로 오르고, 안쪽 카페스지안 미술관은 월요일에 쉽니다.|The outdoor steps are free; the Cafesjian galleries inside close on Mondays.', k: '2026-10' }),
  'yerevan-h2': v(20, 30, { n: '여름철 저녁에는 음악 분수 쇼가 열립니다.|A musical fountain show runs on summer evenings.' }),
  'yerevan-h3': v(60, 75, { c: 'sun,mon', s: 'https://matenadaran.am/en/matenadaran/home/', k: '2026-10' }),
  'gyumri-h1': v(20, 30),
  'gyumri-h2': v(30, 45),
  'gyumri-h3': v(45, 60),
  'dilijan-h1': v(180, 300),
  'dilijan-h2': v(45, 60, { b: 'no', n: FREE }),
  'dilijan-h3': v(30, 45),

  // Azerbaijan
  'baku-h1': v(20, 30, { n: '해가 진 뒤 건물 외벽에 불꽃 영상이 켜집니다.|The flame light show plays on the façades after dark.' }),
  'baku-h2': v(120, 150, { s: 'https://icherisheher.gov.az/en' }),
  'baku-h3': v(30, 45, { c: 'daily', s: 'https://icherisheher.gov.az/en', n: '매일 10:00~19:00에 열고 유료입니다.|Open daily 10:00–19:00; ticketed.', k: '2026-10' }),
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
