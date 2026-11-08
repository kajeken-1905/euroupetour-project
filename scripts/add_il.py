#!/usr/bin/env python3
"""Israel (2026-11-08). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/177/detail): travel ban (level 4) in Gaza
and within 4 km of the Lebanese border; level 3 (leave the country) everywhere else; notices of 2026-10-20/23/26 on the
West Bank and the Middle East; Home Front Command shelter guidance. User rule: full guide with notice. Visa-free 90 days
with ETA-IL required since 2025-01-01. Cities: Jerusalem, Tel Aviv, Haifa, Dead Sea & Masada. Stamp: the Dome of the Rock
from the user's stamp sheet (user confirmed). Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='il', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
              itin_before='  segovia: ', visit_file='visit-iberia.ts', visit_after=r"^  'funchal-h9': v\(.*\),\n", stay_before='  seville: [',
              transit_before='  seville: {', places=None, apps='', daytrips=[])
FIRST = '처음 가는 여행에 추천|Best for a first visit'


def C(**k):
    d = dict(COMMON)
    d.update(k)
    return d


def r(a, b, mode, mins, opts=''):
    return (RC, R_AFTER, f"  r('{a}', '{b}', '{mode}', {mins}{', ' + opts if opts else ''}),\n")


COUNTRY = """  {
    id: 'il',
    region: 'mena',
    name: { ko: '이스라엘', en: 'Israel' },
    nativeName: 'ישראל · إسرائيل',
    flagImage: '/flags/il.svg',
    landmarkImage: '/landmarks/landmark-il.jpg',
    flag: '🇮🇱',
    blurb: {
      ko: '유대교·기독교·이슬람의 성지 예루살렘과 지중해 해변 도시 텔아비브, 몸이 뜨는 사해와 마사다 요새가 있는 나라입니다.',
      en: 'Home of Jerusalem, holy to Judaism, Christianity and Islam, the Mediterranean beach city of Tel Aviv, the Dead Sea and the fortress of Masada.',
    },
    facts: {
      population: { ko: '약 1,000만 명 (2024년)', en: 'Approx. 10 million (2024)' },
      area: { ko: '약 2만 2,000 km²', en: 'Approx. 22,000 km²' },
      capital: { ko: '예루살렘 (국제적으로 지위가 다투어짐)', en: 'Jerusalem (status internationally disputed)' },
      currency: { ko: '이스라엘 신셰켈 (ILS, ₪)', en: 'Israeli new shekel (ILS, ₪)' },
    },
    currencyCode: 'ILS',
    currencySymbol: '₪',
    schengen: false,
    flagColors: {
      primary: '#0038B8',
      secondary: '#FFFFFF',
      accent: '#0038B8',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  il: {
    // Korean Foreign Ministry travel-safety page for Israel (0404.go.kr/ntnSafetyInfo/177/detail), 2026-11.
    emergency: [num('100', '경찰', 'Police'), num('101', '구급', 'Ambulance'), num('102', '소방', 'Fire')],
    embassy: {
      name: T('주이스라엘 대한민국 대사관', 'Korean Embassy in Israel'),
      address: '6 Hasadnaot St., Herzliya Pituach 4672833',
      phone: '+972-9-959-6800',
      afterHours: '+972-50-528-8345',
      note: T('서안지구는 주팔레스타인 대표사무소(라말라, +972-2-240-2846)가 맡습니다.', 'The West Bank is covered by the Korean Representative Office in Ramallah (+972-2-240-2846).'),
      source: 'https://www.0404.go.kr/ntnSafetyInfo/177/detail',
    },
    power: T('230V · 50Hz, H형(이스라엘식) 콘센트. 얇은 2핀 플러그는 대체로 꽂히지만 한국의 굵은 플러그는 어댑터가 필요할 수 있습니다.', '230V, 50Hz, type H (Israeli) sockets. Thin two-pin plugs usually fit, but thicker Korean plugs may need an adapter.'),
    tipping: T('식당에선 10~15%가 관례입니다.', 'Tipping 10–15% is customary in restaurants.'),
    water: T('수돗물은 마실 수 있습니다.', 'Tap water is safe to drink.'),
    shops: T('카드가 거의 어디서나 됩니다. 안식일(금요일 해 질 녘~토요일 해 질 녘)엔 대부분의 가게와 대중교통이 쉽니다.', 'Cards are accepted almost everywhere. On the Sabbath (Friday sunset to Saturday sunset) most shops and public transport stop.'),
    toilets: TOILETS_FREE,
    time: T('UTC+2로 한국보다 7시간 늦고, 서머타임(3월 말~10월 말)엔 6시간 늦습니다.', 'UTC+2, 7 hours behind Korea; 6 hours behind during daylight saving (late March to late October).'),
    safety: T('외교부 여행경보: 가자지구와 레바논 국경 4km 이내는 4단계(여행금지)로 허가 없이 가면 여권법에 따라 처벌받을 수 있고, 나머지 전역은 3단계(출국권고)입니다. 이스라엘 민방위사령부(Home Front Command) 앱을 설치하고, 경보가 울리면 바로 방공호로 대피하세요. 공항 운영이 예고 없이 제한될 수 있습니다.', 'Korean travel alert: Gaza and within 4 km of the Lebanese border are level 4 (travel ban—entry without permission is punishable under the Passport Act); the rest of Israel is level 3 (leave the country). Install the Home Front Command app and go straight to a shelter when sirens sound. Airport operations can be restricted without notice.'),
    entry: T('한국 여권은 90일까지 비자 없이 들어갈 수 있지만, 2025년 1월 1일부터 출발 전에 전자여행허가(ETA-IL, israel-entry.piba.gov.il)를 받아야 합니다. 결과는 24~72시간 걸립니다. 아랍·무슬림 국가 방문 기록이 있으면 입국 심사가 까다로울 수 있으니 귀국 항공권과 숙소 예약을 지니세요.', 'Korean passports are visa-free for 90 days, but since 1 January 2025 an ETA-IL (israel-entry.piba.gov.il) must be approved before travel; it takes 24–72 hours. Entry checks can be stricter if you have visited Arab or Muslim countries—carry your return ticket and hotel bookings.'),
    telecom: T('주요 통신사는 Partner·Cellcom·Pelephone입니다. 공항이나 시내에서 관광객용 유심·eSIM을 삽니다.', 'Main operators: Partner, Cellcom and Pelephone; tourist SIMs and eSIMs are sold at the airport and in town.'),
  },
"""

TRANSIT = """  il: {
    summary: {
      ko: '우측통행. 텔아비브–예루살렘 고속철도와 해안선 기차, 시외버스가 잘 이어져 있습니다. 안식일(금요일 저녁~토요일 저녁)엔 기차와 대부분의 버스가 쉽니다.',
      en: 'Drive on the right. The Tel Aviv–Jerusalem fast train, coastal railway and intercity buses connect well, but trains and most buses stop on the Sabbath (Friday evening to Saturday evening).',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '벤구리온 공항–예루살렘 고속철도는 약 25분, 텔아비브–하이파 기차는 약 1시간입니다. 사해와 마사다는 예루살렘에서 버스로 약 1시간 30분입니다.',
      en: 'Ben Gurion Airport to Jerusalem is about 25 min by fast train; Tel Aviv to Haifa about 1 hr by train; the Dead Sea and Masada about 1 hr 30 by bus from Jerusalem.',
    },
    paymentTip: {
      ko: '기차와 버스는 교통카드 라브카브(Rav-Kav)나 결제 앱으로 탑니다.',
      en: 'Trains and buses take the Rav-Kav card or a payment app.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Israel page: travel-ban areas (extended 2026-07-09), level 3 elsewhere, notices of 2026-10-20/23/26.
  il: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 3단계 출국권고 / 일부 4단계 여행금지', en: 'Korean travel alert · level 3, with level-4 travel-ban areas' },
    lines: [
      {
        ko: '가자지구와 북부 레바논 국경 4km 이내는 4단계(여행금지) 지역으로, 허가 없이 가면 여권법에 따라 처벌받을 수 있습니다. 나머지 전역은 중동 정세로 3단계(출국권고)입니다.',
        en: 'Gaza and within 4 km of the northern Lebanese border are level 4 (travel ban); entering without permission is punishable under the Passport Act. The rest of Israel is level 3 (leave the country) because of the Middle East situation.',
      },
      {
        ko: '외교부는 2026년 10월 20일·23일·26일 서안지구 상황과 중동 정세에 따른 신변 안전 공지를 냈습니다. 민방위사령부 앱을 설치하고 경보가 울리면 바로 방공호로 대피하세요. 출발 전 최신 공지를 꼭 확인하세요.',
        en: 'The ministry issued personal-safety notices on 20, 23 and 26 October 2026 about the West Bank and the wider region. Install the Home Front Command app and go to a shelter at once when sirens sound. Check the latest notices before you go.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/177/detail',
  },
"""

CITIES = [
    C(id='jerusalem', after='doha', ko='예루살렘', en='Jerusalem', native='ירושלים · القدس', lat=31.7767, lng=35.2345,
      blurb=['세 종교의 성지가 성벽 안 1km² 남짓에 모인 도시. 통곡의 벽과 바위의 돔, 성묘 교회가 있는 구시가가 세계유산이고, 야드 바셈과 이스라엘 박물관이 있습니다.',
             'Holy places of three faiths packed into the walled Old City of about one square kilometre—the Western Wall, the Dome of the Rock and the Church of the Holy Sepulchre, a World Heritage site—plus Yad Vashem and the Israel Museum.'],
      highlights=[
          H('통곡의 벽', 'Western Wall', '제2성전의 서쪽 옹벽으로, 유대교에서 가장 신성한 기도 장소입니다.', 'The western retaining wall of the Second Temple, Judaism’s holiest place of prayer.', 'Western Wall', 30, 45,
            n='남녀 구역이 나뉘고 어깨와 무릎을 가립니다. 안식일엔 사진을 찍지 않습니다.|Men’s and women’s sections are separate; cover shoulders and knees, and don’t take photos on the Sabbath.'),
          H('바위의 돔과 성전산', 'Dome of the Rock & Temple Mount', '금빛 돔의 7세기 이슬람 성소로, 성전산(하람 알 샤리프) 위에 있습니다. 무슬림이 아니면 정해진 시간에 광장만 들어갑니다.', 'The gold-domed 7th-century Islamic shrine on the Temple Mount (Haram al-Sharif); non-Muslims may enter the plaza only at set hours.', 'Dome of the Rock', 60, 90),
          H('성묘 교회', 'Church of the Holy Sepulchre', '예수가 십자가에 못 박히고 묻혔다고 전해지는 자리에 지은 교회입니다.', 'The church on the site where Jesus is believed to have been crucified and buried.', 'Church of the Holy Sepulchre', 60, 90),
          H('비아 돌로로사', 'Via Dolorosa', '예수가 십자가를 지고 걸었다는 구시가 골목의 14처 순례길입니다.', 'The Old City lanes of the fourteen Stations of the Cross, where Jesus is said to have carried the cross.', 'Via Dolorosa', 60, 90),
          H('다윗의 탑', 'Tower of David', '야파 문 옆 성채에 예루살렘 역사 박물관이 있고, 밤엔 성벽에 빛 쇼를 비춥니다.', 'The citadel by the Jaffa Gate, housing the museum of Jerusalem’s history, with a night light show on its walls.', 'Tower of David', 90, 120),
          H('올리브산', 'Mount of Olives', '구시가 동쪽 언덕으로, 전망대에서 바위의 돔과 성벽이 한눈에 보입니다.', 'The hill east of the Old City, whose lookout takes in the Dome of the Rock and the walls.', 'Mount of Olives', 60, 90),
          H('야드 바셈', 'Yad Vashem', '홀로코스트 희생자를 기리는 국립 기념관으로, 입장은 무료입니다.', 'Israel’s national Holocaust memorial, free to enter.', 'Yad Vashem', 150, 180, c='sat'),
          H('이스라엘 박물관', 'Israel Museum', '사해 문서를 보관한 ‘책의 전당’과 제2성전 시대 예루살렘 모형이 있습니다.', 'Home of the Shrine of the Book with the Dead Sea Scrolls and a model of Second Temple-era Jerusalem.', 'Israel Museum', 150, 180),
          H('마하네 예후다 시장', 'Mahane Yehuda Market', '과일·향신료·빵집과 저녁엔 바가 문을 여는 예루살렘의 시장입니다.', 'Jerusalem’s market of fruit, spices and bakeries, with bars opening in the evening.', 'Mahane Yehuda Market', 60, 90),
          H('베들레헴', 'Bethlehem', '예수가 태어났다는 자리에 지은 예수 탄생 교회가 있는 서안지구 도시입니다.', 'The West Bank town of the Church of the Nativity, built over Jesus’s birthplace.', 'Church of the Nativity', 180, 240, group=DAY,
            n='서안지구에 있어 외교부가 위험 지역 방문 자제를 당부합니다. 예루살렘에서 차로 약 30분이고 검문소를 지납니다.|In the West Bank, where the Korean ministry urges caution; about 30 min by car from Jerusalem through a checkpoint.'),
      ],
      hubs="    air: [['Ben Gurion (TLV)', '벤구리온 공항 (TLV)', '고속철도로 약 25분|about 25 min by fast train']],\n    rail: [['Jerusalem–Yitzhak Navon', '예루살렘 이츠하크 나본역']],\n    bus: [['Jerusalem Central Bus Station', '예루살렘 중앙 버스터미널']],\n",
      itinerary=[1, 2, 4, 3, 5, 6, 9, 8, 7, 10],
      season='봄(3~5월)과 가을(9~11월)이 좋습니다. 겨울엔 비가 오고 가끔 눈이 내립니다. 유대교 명절과 안식일엔 문을 닫는 곳이 많습니다.|Spring (March–May) and autumn (September–November) are best; winter brings rain and occasional snow. Much closes on Jewish holidays and the Sabbath.',
      stay=[('구시가 근처 (야파 문)', 'Near the Old City (Jaffa Gate)', 'Jaffa Gate Jerusalem', FIRST, '구시가와 마밀라 거리가 걸어서 닿고 경전철이 가깝습니다.|The Old City and Mamilla on foot, near the light rail.')],
      routes=[r('amman', 'jerusalem', 'mixed', 240, "{ n: '알렌비(킹 후세인) 다리 국경을 넘습니다 · 국경 운영 시간을 확인하세요|via the Allenby/King Hussein Bridge border—check its opening hours' }")],
      transit=dict(modes=['walk', 'tram', 'bus', 'taxi'], ko='구시가는 걸어서, 시내는 경전철과 버스로 다닙니다. 안식일엔 대부분 쉽니다.', en='Walk the Old City; use the light rail and buses elsewhere—most stop on the Sabbath.')),
    C(id='tel-aviv', after='jerusalem', ko='텔아비브', en='Tel Aviv', native='תל אביב-יפו · Tel Aviv-Yafo', lat=32.0853, lng=34.7818,
      blurb=['지중해 해변을 따라 펼쳐진 활기찬 도시. 바우하우스 건물 4천여 채가 모인 ‘화이트 시티’가 세계유산이고, 남쪽엔 옛 항구 마을 야파가 있습니다.',
             'A lively city along Mediterranean beaches—its White City of some 4,000 Bauhaus buildings is a World Heritage site, with the old port of Jaffa to the south.'],
      highlights=[
          H('야파 구시가와 항구', 'Old Jaffa & port', '언덕 위 돌골목과 시계탑, 갤러리가 있는 옛 항구 마을입니다.', 'The old port town of stone lanes, a clock tower and galleries on its hill.', 'Old Jaffa', 90, 120),
          H('화이트 시티', 'White City (Bauhaus)', '1930년대 바우하우스 양식 흰 건물들이 로스차일드 거리 주변에 모인 세계유산입니다.', 'The World Heritage ensemble of 1930s white Bauhaus buildings around Rothschild Boulevard.', 'Rothschild Boulevard', 60, 90),
          H('카르멜 시장', 'Carmel Market', '과일·향신료·길거리 음식이 가득한 텔아비브 최대 시장입니다.', 'Tel Aviv’s biggest market of fruit, spices and street food.', 'Carmel Market', 60, 90),
          H('지중해 해변 산책로', 'Beach promenade', '야파에서 북쪽 항구까지 이어지는 해변 산책로로, 해 질 녘이 아름답습니다.', 'The seafront promenade from Jaffa to the northern port, beautiful at sunset.', 'Tel Aviv Promenade', 60, 120),
          H('네베 체덱', 'Neve Tzedek', '19세기 말 시작된 텔아비브 첫 동네로, 부티크와 카페가 모인 골목입니다.', 'Tel Aviv’s first neighbourhood, from the late 19th century, now lanes of boutiques and cafés.', 'Neve Tzedek', 45, 60),
          H('텔아비브 미술관', 'Tel Aviv Museum of Art', '이스라엘과 세계 근현대 미술을 전시하는 미술관입니다.', 'The museum of Israeli and international modern art.', 'Tel Aviv Museum of Art', 90, 120),
      ],
      hubs="    air: [['Ben Gurion (TLV)', '벤구리온 공항 (TLV)', '기차로 약 15분|about 15 min by train']],\n    rail: [['Tel Aviv Savidor Center', '텔아비브 사비도르 센터역'], ['Tel Aviv HaHagana', '텔아비브 하하가나역']],\n",
      itinerary=[2, 5, 3, 1, 4, 6],
      season='4~10월이 해변 철이고, 한여름은 덥고 습합니다. 6월 프라이드 축제가 큽니다.|April–October is beach season; midsummer is hot and humid. The June Pride parade is huge.',
      stay=[('해변 근처 시내', 'Near the beach', 'Tel Aviv beach', FIRST, '해변과 카르멜 시장, 화이트 시티가 걸어서 닿습니다.|The beach, Carmel Market and White City on foot.')],
      routes=[r('jerusalem', 'tel-aviv', 'train', 35, "{ fa: '예루살렘 이츠하크 나본역|Jerusalem–Yitzhak Navon', n: '고속철도|fast train' }"),
              r('athens', 'tel-aviv', 'flight', 120), r('rome', 'tel-aviv', 'flight', 210), r('paris', 'tel-aviv', 'flight', 280), r('istanbul', 'tel-aviv', 'flight', 130)],
      transit=dict(modes=['walk', 'bus', 'train', 'bike', 'taxi'], ko='해변과 시내는 걷거나 공유 자전거를 타고, 버스·경전철로 다닙니다.', en='Walk or use shared bikes along the beach and centre; buses and the light rail cover the rest.')),
    C(id='haifa', after='tel-aviv', ko='하이파', en='Haifa', native='חיפה · حيفا', lat=32.7940, lng=34.9896,
      blurb=['카르멜산 비탈에 자리한 북부 항구 도시. 산비탈을 계단식 정원으로 덮은 바하이 정원이 세계유산이고, 십자군 도시 아크레에 다녀옵니다.',
             'The northern port on the slopes of Mount Carmel—its terraced Bahá’í Gardens are a World Heritage site, and Crusader Acre is close by.'],
      highlights=[
          H('바하이 정원', 'Bahá’í Gardens', '바브의 영묘를 가운데 두고 19단 테라스 정원이 산비탈을 따라 이어지는 세계유산입니다.', 'Nineteen terraced gardens down the mountainside around the Shrine of the Báb—a World Heritage site.', 'Bahai Gardens Haifa', 60, 90),
          H('독일인 거주지', 'German Colony', '바하이 정원 아래로 곧게 뻗은 19세기 템플 기사단 정착촌 거리로, 식당이 늘어서 있습니다.', 'The straight 19th-century Templer street below the gardens, lined with restaurants.', 'German Colony Haifa', 45, 60),
          H('스텔라 마리스 수도원', 'Stella Maris Monastery', '카르멜산 끝의 카르멜회 수도원으로, 케이블카로 올라 만을 내려다봅니다.', 'The Carmelite monastery on the tip of Mount Carmel, reached by cable car, with bay views.', 'Stella Maris Monastery', 45, 60),
          H('아크레 구시가', 'Old Acre', '십자군 성채와 지하 터널, 항구가 남은 세계유산 성벽 도시입니다.', 'The World Heritage walled town of Crusader halls, underground tunnels and a harbour.', 'Old City of Acre', 180, 240, group=DAY,
            n='하이파에서 기차로 약 30분입니다.|About 30 min by train from Haifa.'),
      ],
      hubs="    air: [['Ben Gurion (TLV)', '벤구리온 공항 (TLV)', '텔아비브|Tel Aviv']],\n    rail: [['Haifa Merkaz HaShmona', '하이파 메르카즈 하슈모나역']],\n",
      itinerary=[2, 1, 3, 4],
      season='봄·가을이 좋습니다. 외교부 여행경보 4단계인 레바논 국경 4km 이내에는 가지 마세요.|Spring and autumn are best. Do not go within 4 km of the Lebanese border (Korean travel-ban area).',
      stay=[('독일인 거주지', 'German Colony', 'German Colony Haifa', FIRST, '바하이 정원 아래 식당 거리로, 역과 항구가 가깝습니다.|The restaurant street below the gardens, near the station and port.')],
      routes=[r('tel-aviv', 'haifa', 'train', 60)],
      transit=dict(modes=['walk', 'bus', 'train'], ko='산비탈이라 버스와 지하 케이블카(카르멜리트)를 씁니다.', en='The city is steep—use buses and the Carmelit underground funicular.')),
    C(id='dead-sea', after='haifa', ko='사해와 마사다', en='Dead Sea & Masada', native='ים המלח · Ein Bokek', lat=31.2001, lng=35.3627,
      blurb=['해수면보다 약 430m 낮은 소금 호수에서 몸을 띄우고, 유대인 마지막 항전지인 절벽 위 요새 마사다에 오릅니다. 엔 보케크에 호텔과 해변이 모여 있습니다.',
             'Float in the salt lake some 430 m below sea level and climb Masada, the clifftop fortress of the Jews’ last stand; hotels and beaches cluster at Ein Bokek.'],
      highlights=[
          H('마사다', 'Masada', '헤롯 왕의 절벽 궁전 요새이자 로마에 맞선 유대인 마지막 항전지로, 케이블카나 ‘뱀길’로 오릅니다. 세계유산입니다.', 'Herod’s clifftop palace-fortress and the site of the last Jewish stand against Rome, reached by cable car or the Snake Path—a World Heritage site.', 'Masada', 180, 240,
            n='여름엔 해 뜨기 전에 뱀길로 올라 일출을 봅니다.|In summer, climb the Snake Path before dawn for the sunrise.'),
          H('엔 보케크 해변', 'Ein Bokek beach', '호텔이 모인 사해 남쪽 공영 해변으로, 무료로 물에 떠 봅니다.', 'The free public beach among the hotels at the south of the Dead Sea—float for free.', 'Ein Bokek', 120, 180),
          H('엔 게디', 'Ein Gedi', '사막 속 샘과 폭포가 있는 자연보호구역으로, 산양(아이벡스)을 볼 수 있습니다.', 'A nature reserve of desert springs and waterfalls, where ibex roam.', 'Ein Gedi Nature Reserve', 120, 180),
      ],
      hubs="    air: [['Ben Gurion (TLV)', '벤구리온 공항 (TLV)', '텔아비브|Tel Aviv'], ['Ramon (ETM)', '라몬 공항 (ETM)', '에일라트|Eilat']],\n    bus: [['Ein Bokek bus stop', '엔 보케크 정류장', '예루살렘행 버스|buses to Jerusalem']],\n",
      itinerary=[1, 3, 2],
      season='여름 낮은 40℃를 넘으니 아침 일찍 다니세요. 10~4월이 좋습니다.|Summer days exceed 40 °C, so go early; October–April is best.',
      stay=[('엔 보케크 호텔', 'Ein Bokek hotels', 'Ein Bokek', FIRST, '해변 호텔에 묵으면 해 뜨기 전 마사다에 오르기 좋습니다. 예루살렘에서 당일로도 다녀옵니다.|A beach hotel makes a pre-dawn Masada climb easy; it is also a day trip from Jerusalem.')],
      routes=[r('jerusalem', 'dead-sea', 'bus', 100)],
      transit=dict(modes=['bus', 'taxi'], ko='버스가 적어 차나 투어가 편합니다.', en='Buses are few—a car or tour is easiest.')),
]

IL_ORDER = [('예루살렘과 사해', 'Jerusalem & the Dead Sea', ['jerusalem', 'dead-sea']), ('지중해 연안', 'Mediterranean coast', ['tel-aviv', 'haifa'])]
TRIPS = {'jerusalem': [('베들레헴|Bethlehem', 10)], 'haifa': [('아크레|Acre', 4)]}


def setup():
    k = rd('countries.ts')
    if "id: 'il'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  il: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  il: '376'," not in m:
        wr('countryIsoMap.ts', m.replace("  qa: '634',\n", "  qa: '634',\n  il: '376',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  il: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['doha', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'qatar list'
    k = k.replace(old, "cityIds: ['doha'],")
    order = [x for g in IL_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in IL_ORDER) + '    ],')
    i = k.index("    id: 'il',")
    j = k.index('cityIds: [],', i)
    wr('countries.ts', k[:j] + body + k[j + len('cityIds: [],'):])
    it = rd('itinerary-iberia.ts')
    for cid, trips in TRIPS.items():
        lst = next(c['itinerary'] for c in CITIES if c['id'] == cid)
        old = f"  {cid}: [{', '.join(map(str, lst))}],\n"
        assert it.count(old) == 1, cid
        days = [n for n in lst if not any(n in t[1:] for t in trips)]
        tr = ', '.join(f"['{t[0]}', {', '.join(map(str, t[1:]))}]" for t in trips)
        it = it.replace(old, f"  {cid}: {{ days: [['', {', '.join(map(str, days))}]], trips: [{tr}] }},\n")
    wr('itinerary-iberia.ts', it)


if __name__ == '__main__':
    setup()
    T.CITIES = CITIES
    T.main()
    finish()
