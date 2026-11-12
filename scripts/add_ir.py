#!/usr/bin/env python3
"""Iran (2026-11-09). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/176/detail): whole-country travel ban
(issued 2026-03-05, extended to 2027-01-31). Handled like Belarus/Libya (user decision 2026-11-09): travel-ban notice, basics,
cities and sights, no restaurants or stay areas. Cities: Tehran, Kashan, Isfahan, Yazd, Shiraz (Persepolis). Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='ir', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'ir',
    region: 'mena',
    name: { ko: '이란', en: 'Iran' },
    nativeName: 'ایران · Īrān',
    flagImage: '/flags/ir.svg',
    landmarkImage: '/landmarks/landmark-ir.jpg',
    flag: '🇮🇷',
    blurb: {
      ko: '한국 정부 지정 여행금지국. 페르시아 제국의 페르세폴리스, 이스파한의 이맘 광장, 사막 도시 야즈드와 정원의 도시 시라즈가 있습니다.',
      en: 'A Korean travel-ban country—Persepolis of the Persian Empire, Isfahan’s great square, desert Yazd and Shiraz, city of gardens.',
    },
    facts: {
      population: { ko: '약 9,100만 명 (2024년)', en: 'Approx. 91 million (2024)' },
      area: { ko: '약 165만 km²', en: 'Approx. 1.65 million km²' },
      capital: { ko: '테헤란 (Tehran)', en: 'Tehran' },
      currency: { ko: '이란 리알 (IRR) · 실제 거래는 토만(10리알)', en: 'Iranian rial (IRR); prices are often quoted in toman (10 rials)' },
    },
    currencyCode: 'IRR',
    currencySymbol: '﷼',
    schengen: false,
    flagColors: {
      primary: '#239F40',
      secondary: '#FFFFFF',
      accent: '#DA0000',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  ir: {
    // Korean Foreign Ministry travel-safety page for Iran (0404.go.kr/ntnSafetyInfo/176/detail), 2026-11.
    emergency: [num('110', '경찰', 'Police'), num('115', '구급', 'Ambulance'), num('125', '소방', 'Fire')],
    embassy: {
      name: T('주이란 대한민국 대사관', 'Korean Embassy in Iran'),
      address: 'No.2, West Daneshvar St., Sheikhbahai Ave., Vanak Sq., Tehran',
      phone: '+98-21-8805-4900',
      afterHours: '+98-912-688-1897',
      source: 'https://www.0404.go.kr/ntnSafetyInfo/176/detail',
    },
    power: T('230V · 50Hz, C·F형 콘센트로 한국 플러그를 그대로 씁니다.', '230V, 50Hz, type C and F sockets—Korean plugs fit.'),
    tipping: T('팁은 의무가 아니지만 식당에선 잔돈을 남기기도 합니다.', 'Tipping is optional; small change is sometimes left in restaurants.'),
    water: WATER_BOTTLED,
    shops: T('국제 신용카드를 쓸 수 없어 현금(달러·유로)을 가져가 바꿉니다. 1만 유로 이상을 들여오거나 5천 유로 이상을 가지고 나갈 땐 미리 신고합니다.', 'International cards don’t work, so bring cash (dollars or euros) to exchange. Declare €10,000 or more coming in, or €5,000 or more going out.'),
    toilets: T('호텔·식당 화장실을 이용합니다. 쪼그려 앉는 변기가 흔합니다.', 'Use toilets in hotels and restaurants; squat toilets are common.'),
    time: T('UTC+3:30, 서머타임 없음. 한국보다 5시간 30분 늦습니다.', 'UTC+3:30 with no daylight saving: 5 hrs 30 behind Korea.'),
    safety: T('외교부가 2026년 3월 5일 이란 전역을 여행금지국으로 지정했습니다. 공항의 무허가 택시는 강도·납치에 쓰인 적이 있고, 공항·군사 시설·정부 건물은 사진을 찍으면 안 됩니다. 아프가니스탄·파키스탄·이라크 국경 지역은 특히 위험합니다. 술·돼지고기는 금지이고, 여성은 밖에서 머리를 가리고 긴 겉옷을 입어야 하며 남성은 반바지를 입을 수 없습니다.', 'Korea designated all of Iran a travel-ban country on 5 March 2026. Unlicensed airport taxis have been used for robbery and kidnapping, and photographing airports, military sites and government buildings is forbidden. The Afghan, Pakistani and Iraqi border areas are especially dangerous. Alcohol and pork are banned; women must cover their hair and wear a long coat outdoors, and men may not wear shorts.'),
    entry: T('여행금지국이라 외교부의 예외적 여권 사용 허가가 먼저 있어야 합니다. 한국 일반 여권은 무비자·도착 비자가 안 되고 전자 비자(evisa.mfa.ir)를 미리 받아야 합니다. 여권은 6개월 이상 남아 있어야 하고 여행자 보험이 필수입니다.', 'As a travel-ban country, Iran needs the Korean Foreign Ministry’s exceptional passport-use permission first. Ordinary Korean passports get neither visa-free entry nor a visa on arrival—apply in advance for an e-visa (evisa.mfa.ir). Passports need six months’ validity, and travel insurance is mandatory.'),
    telecom: T('주요 통신사는 MCI(Hamrah-e Aval)·Irancell입니다. 해외 웹사이트와 앱이 많이 막혀 있습니다.', 'Main operators: MCI (Hamrah-e Aval) and Irancell. Many foreign websites and apps are blocked.'),
  },
"""

TRANSIT = """  ir: {
    summary: {
      ko: '우측통행. 테헤란·이스파한·시라즈엔 지하철이 있고, 도시 사이는 장거리 버스·기차·국내선으로 다닙니다.',
      en: 'Drive on the right. Tehran, Isfahan and Shiraz have metros; long-distance buses, trains and domestic flights link the cities.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '테헤란–카샨–이스파한–야즈드–시라즈를 잇는 장거리 버스가 자주 다니고, 테헤란과 시라즈·이스파한 사이엔 국내선이 많습니다.',
      en: 'Long-distance buses run often along the Tehran–Kashan–Isfahan–Yazd–Shiraz route, with frequent domestic flights from Tehran to Shiraz and Isfahan.',
    },
    paymentTip: {
      ko: '외국 카드가 안 되니 교통비도 현금으로 냅니다. 택시는 타기 전에 요금을 정하세요.',
      en: 'Foreign cards don’t work, so pay fares in cash; agree taxi fares before you set off.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Iran page: travel ban issued 2026-03-05, extended to 2027-01-31 (2026-07-09 notice); 2026-10-25 safety notice.
  ir: {
    icon: '⛔',
    title: { ko: '여행금지국', en: 'Travel ban' },
    lines: [
      {
        ko: '한국 정부가 2026년 3월 5일 이란 전역을 여행금지 지역으로 지정했습니다(2027년 1월 31일까지). 외교부의 예외적 여권 사용 허가 없이 방문하면 여권법에 따라 처벌받을 수 있습니다.',
        en: 'The Korean government designated all of Iran a travel-ban area on 5 March 2026 (until 31 January 2027). Visiting without the Foreign Ministry’s exceptional passport-use permission can be punished under the Passport Act.',
      },
      {
        ko: '외교부는 2026년 10월 25일 공습 재개 가능성에 따른 신변 안전 유의를 공지했습니다. 이 앱의 정보는 참고용이며 여행을 권하지 않습니다.',
        en: 'On 25 October 2026 the ministry warned of the risk that air strikes may resume. The information here is for reference only and is not a suggestion to travel.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/176/detail',
  },
"""

CITIES = [
    C(id='tehran', after='cyrene', ko='테헤란', en='Tehran', native='تهران · Tehrān', lat=35.6892, lng=51.3890,
      blurb=['알보르즈산맥 아래 펼쳐진 이란의 수도. 카자르 왕조의 골레스탄 궁전과 큰 바자르가 있는 남쪽 옛 도심에서, 왕실 별궁이 있는 북쪽 산자락까지 이어집니다.',
             'Iran’s capital beneath the Alborz mountains—from the old south with the Qajar Golestan Palace and the Grand Bazaar to the royal summer palaces on the northern slopes.'],
      highlights=[
          H('골레스탄 궁전', 'Golestan Palace', '카자르 왕조의 궁전으로, 거울 장식 홀과 타일 벽이 화려한 세계유산입니다.', 'The Qajar dynasty’s palace, with mirrored halls and tiled walls—a World Heritage site.', 'Golestan Palace', 90, 120),
          H('테헤란 그랜드 바자르', 'Grand Bazaar of Tehran', '지붕 덮인 골목이 몇 km나 이어진 큰 시장으로, 양탄자·향신료·금 가게가 구역별로 모여 있습니다.', 'The vast covered market of lanes running for kilometres, with carpets, spices and gold in their own sections.', 'Grand Bazaar Tehran', 90, 120),
          H('이란 국립 박물관', 'National Museum of Iran', '페르세폴리스 부조 등 선사부터 이슬람 시대까지의 유물을 전시합니다.', 'Artefacts from prehistory to the Islamic era, including reliefs from Persepolis.', 'National Museum of Iran', 90, 120),
          H('국립 보석 박물관', 'National Jewelry Treasury', '중앙은행 지하 금고에 왕실 보석을 전시한 곳으로, 여는 날과 시간이 짧습니다.', 'The royal jewels displayed in the Central Bank’s vault, open on limited days and hours.', 'National Jewelry Treasury Tehran', 60, 90,
            n='가방은 맡기고 들어가며, 여는 요일을 미리 확인하세요.|Bags must be left outside; check the opening days first.'),
          H('아자디 타워', 'Azadi Tower', '1971년 페르시아 제국 2,500년을 기념해 세운 하얀 대리석 문 모양의 탑입니다.', 'The white marble gateway tower raised in 1971 for 2,500 years of the Persian Empire.', 'Azadi Tower', 30, 45),
          H('사드아바드 궁전 단지', 'Sa’dabad Complex', '북쪽 산자락 숲속에 왕실 여름 궁전과 박물관이 흩어진 단지입니다.', 'Royal summer palaces and museums scattered through the woods on the northern slopes.', 'Saadabad Complex Tehran', 120, 180),
          H('타비아트 다리', 'Tabiat Bridge', '두 공원을 잇는 3층 보행자 다리로, 저녁 산책 명소입니다.', 'The three-level footbridge joining two parks, a favourite evening stroll.', 'Tabiat Bridge', 30, 45),
          H('밀라드 타워', 'Milad Tower', '높이 435m의 통신탑으로, 전망대에서 테헤란과 알보르즈산맥이 보입니다.', 'The 435 m telecom tower, whose observation deck looks over Tehran to the Alborz.', 'Milad Tower', 60, 90),
      ],
      hubs="    air: [['Imam Khomeini International (IKA)', '이맘 호메이니 국제공항 (IKA)', '국제선 · 시내까지 차로 약 1시간|international · about 1 hr to the city by car'], ['Mehrabad (THR)', '메흐라바드 공항 (THR)', '국내선 · 시내 서쪽|domestic · west of the centre']],\n    rail: [['Tehran Railway Station', '테헤란역', '카샨·이스파한·야즈드·시라즈행|to Kashan, Isfahan, Yazd and Shiraz']],\n",
      itinerary=[1, 2, 3, 4, 5, 6, 7, 8],
      season='봄(3~5월)과 가을(9~11월)이 좋습니다. 3월 말 노루즈(새해) 연휴엔 이동이 붐비고, 여름은 덥고 대기 오염이 심한 날이 있습니다.|Spring (March–May) and autumn (September–November) are best. Travel is crowded over the Nowruz holidays in late March; summers are hot, with heavy smog on some days.',
      stay=[],
      routes=[r('istanbul', 'tehran', 'flight', 210), r('dubai', 'tehran', 'flight', 120), r('doha', 'tehran', 'flight', 130)],
      transit=dict(modes=['metro', 'bus', 'taxi'], ko='지하철이 넓게 다니고, 북쪽 궁전은 택시로 갑니다. 출퇴근 시간 도로가 매우 막힙니다.', en='The metro covers most of the city; take a taxi to the northern palaces. Rush-hour traffic is very heavy.')),
    C(id='kashan', after='tehran', ko='카샨', en='Kashan', native='کاشان · Kāshān', lat=33.9850, lng=51.4100,
      blurb=['사막 가장자리의 오아시스 도시. 세계유산 페르시아 정원인 핀 정원과, 카자르 시대 상인들이 지은 화려한 저택들이 남아 있습니다.',
             'An oasis town on the desert’s edge—the Fin Garden, a World Heritage Persian garden, and the ornate houses built by Qajar-era merchants.'],
      highlights=[
          H('핀 정원', 'Fin Garden', '샘물이 수로를 따라 흐르는 16세기 페르시아 정원으로, 세계유산입니다.', 'The 16th-century Persian garden of spring-fed channels—a World Heritage site.', 'Fin Garden Kashan', 60, 90),
          H('타바타바이 저택', 'Tabatabaei House', '19세기 양탄자 상인의 저택으로, 안뜰과 스테인드글라스·석고 조각이 아름답습니다.', 'The 19th-century carpet merchant’s house, with lovely courtyards, stained glass and stucco.', 'Tabatabaei Historical House', 45, 60),
          H('보루제르디 저택', 'Borujerdi House', '바람탑(바드기르)과 둥근 지붕이 있는 상인 저택입니다.', 'A merchant’s house crowned with wind towers (badgirs) and a dome.', 'Borujerdi House', 45, 60),
          H('술탄 아미르 아흐마드 목욕탕', 'Sultan Amir Ahmad Bathhouse', '타일로 꾸민 옛 공중목욕탕으로, 지붕 위를 걸어 볼 수 있습니다.', 'A tiled historic bathhouse whose domed roof you can walk across.', 'Sultan Amir Ahmad Bathhouse', 30, 45),
          H('아가 보조르그 모스크', 'Agha Bozorg Mosque', '가라앉은 안뜰과 신학교를 갖춘 18세기 모스크입니다.', 'An 18th-century mosque with a sunken courtyard and a theological school.', 'Agha Bozorg Mosque', 30, 45),
      ],
      hubs="    rail: [['Kashan station', '카샨역', '테헤란·이스파한행|to Tehran and Isfahan']],\n",
      itinerary=[1, 2, 3, 4, 5],
      season='봄·가을이 좋습니다. 4~5월엔 근처 마을에서 장미수를 만드는 축제가 열립니다.|Spring and autumn are best; in April–May nearby villages hold rosewater-making festivals.',
      stay=[],
      routes=[r('tehran', 'kashan', 'bus', 180), r('kashan', 'isfahan', 'bus', 150)],
      transit=dict(modes=['taxi', 'walk'], ko='저택들은 걸어서 둘러보고, 핀 정원은 택시로 갑니다.', en='Walk between the houses; take a taxi to the Fin Garden.')),
    C(id='isfahan', after='kashan', ko='이스파한', en='Isfahan', native='اصفهان · Eṣfahān', lat=32.6546, lng=51.6680,
      blurb=['‘세상의 절반’이라 불린 사파비 왕조의 수도. 거대한 이맘 광장을 푸른 타일의 모스크와 궁전이 둘러싸고, 자얀데강에는 아치가 이어진 옛 다리들이 걸려 있습니다.',
             '‘Half the world’, the Safavid capital—its vast Imam Square is ringed by blue-tiled mosques and a palace, and arched old bridges span the Zayanderud.'],
      highlights=[
          H('이맘 광장 (낙시에 자한)', 'Naqsh-e Jahan Square', '세계에서 손꼽히게 큰 광장으로, 모스크·궁전·바자르가 둘러싼 세계유산입니다.', 'One of the world’s largest squares, ringed by mosques, a palace and the bazaar—a World Heritage site.', 'Naqsh-e Jahan Square', 60, 90),
          H('이맘 모스크', 'Imam (Shah) Mosque', '광장 남쪽의 푸른 타일 대모스크로, 돔 아래에서 소리가 일곱 번 울립니다.', 'The great blue-tiled mosque on the square’s south side, whose dome echoes seven times.', 'Imam Mosque Isfahan', 45, 60),
          H('셰이크 로트폴라 모스크', 'Sheikh Lotfollah Mosque', '미너렛 없이 지은 왕실 모스크로, 빛에 따라 색이 바뀌는 돔 천장이 유명합니다.', 'The royal mosque built without minarets, famous for its dome ceiling that changes colour with the light.', 'Sheikh Lotfollah Mosque', 30, 45),
          H('알리 카푸 궁전', 'Ali Qapu Palace', '광장을 내려다보는 테라스와 악기 모양으로 파낸 음악실이 있는 궁전입니다.', 'The palace with a terrace over the square and a music room carved with instrument-shaped niches.', 'Ali Qapu Palace', 45, 60),
          H('체헬 소툰 궁전', 'Chehel Sotoun', '연못에 비친 기둥이 마흔 개로 보인다는 정자로, 사파비 시대 벽화가 있습니다.', 'The pavilion whose twenty columns become forty in the pool’s reflection, with Safavid wall paintings.', 'Chehel Sotoun', 45, 60),
          H('시오세 다리', 'Si-o-se-pol', '아치 33개가 이어진 17세기 다리입니다.', 'The 17th-century bridge of 33 arches.', 'Si-o-se-pol', 20, 30),
          H('하주 다리', 'Khaju Bridge', '아래층이 보(洑)를 겸한 2층 다리로, 저녁 산책 명소입니다.', 'The two-storey bridge that doubles as a weir, a favourite evening stroll.', 'Khaju Bridge', 20, 30),
          H('반크 대성당', 'Vank Cathedral', '졸파 아르메니아인 지구의 17세기 성당으로, 벽 가득 프레스코가 그려져 있습니다.', 'The 17th-century cathedral of the Armenian Jolfa quarter, its walls covered in frescoes.', 'Vank Cathedral', 45, 60),
          H('이스파한 자메 모스크', 'Jameh Mosque of Isfahan', '천 년 넘게 증축된 이란 모스크 건축의 교과서 같은 곳으로, 세계유산입니다.', 'Enlarged over more than a thousand years, a textbook of Iranian mosque architecture—a World Heritage site.', 'Jameh Mosque of Isfahan', 60, 90),
      ],
      hubs="    air: [['Isfahan International (IFN)', '이스파한 국제공항 (IFN)', '시내까지 차로 약 30~40분|about 30–40 min to the city by car']],\n    rail: [['Isfahan station', '이스파한역', '테헤란·야즈드행|to Tehran and Yazd']],\n",
      itinerary=[1, 2, 3, 4, 5, 9, 8, 6, 7],
      season='봄·가을이 좋습니다. 다리는 해 질 녘과 밤이 가장 아름답습니다.|Spring and autumn are best; the bridges are loveliest at dusk and after dark.',
      stay=[],
      routes=[r('tehran', 'isfahan', 'flight', 60), r('isfahan', 'yazd', 'bus', 240)],
      transit=dict(modes=['metro', 'taxi', 'walk'], ko='광장 주변은 걸어서 보고, 다리와 졸파 지구는 택시나 지하철로 갑니다.', en='Walk around the square; take a taxi or the metro to the bridges and Jolfa.')),
    C(id='yazd', after='isfahan', ko='야즈드', en='Yazd', native='یزد · Yazd', lat=31.8974, lng=54.3569,
      blurb=['두 사막 사이의 흙벽돌 도시. 바람탑이 솟은 옛 시가가 세계유산이고, 조로아스터교의 불의 사원과 침묵의 탑이 남아 있습니다.',
             'The mud-brick city between two deserts—its old town of wind towers is a World Heritage site, with a Zoroastrian fire temple and the Towers of Silence.'],
      highlights=[
          H('야즈드 자메 모스크', 'Jameh Mosque of Yazd', '이란에서 가장 높은 쌍둥이 미너렛과 푸른 타일 정문이 있는 14세기 모스크입니다.', 'The 14th-century mosque with Iran’s tallest twin minarets and a blue-tiled portal.', 'Jameh Mosque of Yazd', 30, 45),
          H('야즈드 옛 시가', 'Historic City of Yazd', '흙벽돌 골목과 바람탑, 지붕 위 전망이 이어진 세계유산 구시가입니다.', 'The World Heritage old town of mud-brick lanes, wind towers and rooftop views.', 'Historic City of Yazd', 90, 120),
          H('아미르 차흐마크 복합 건물', 'Amir Chakhmaq Complex', '광장 앞에 아치가 층층이 쌓인 정면으로, 해 질 녘 조명이 아름답습니다.', 'The tiered arched façade on its square, beautiful when lit at dusk.', 'Amir Chakhmaq Complex', 20, 30),
          H('돌라트 아바드 정원', 'Dowlat Abad Garden', '이란에서 가장 높은 바람탑이 선 페르시아 정원으로, 세계유산입니다.', 'A Persian garden with Iran’s tallest wind tower—a World Heritage site.', 'Dowlat Abad Garden', 45, 60),
          H('조로아스터교 불의 사원', 'Zoroastrian Fire Temple', '1,500년 넘게 꺼지지 않았다는 불을 모신 사원입니다.', 'The temple keeping a flame said to have burned for over 1,500 years.', 'Yazd Atash Behram', 20, 30),
          H('침묵의 탑', 'Towers of Silence', '조로아스터교도가 장례를 치르던 언덕 위의 둥근 탑입니다.', 'The round hilltop towers once used for Zoroastrian funerals.', 'Towers of Silence Yazd', 45, 60),
      ],
      hubs="    air: [['Shahid Sadooghi (AZD)', '야즈드 공항 (AZD)', '시내까지 차로 약 15분|about 15 min to the city by car']],\n    rail: [['Yazd station', '야즈드역', '테헤란·이스파한행|to Tehran and Isfahan']],\n",
      itinerary=[2, 1, 3, 4, 5, 6],
      season='10~4월이 좋습니다. 여름 낮은 40℃를 넘습니다.|October–April is best; summer days pass 40 °C.',
      stay=[],
      routes=[r('yazd', 'shiraz', 'bus', 360)],
      transit=dict(modes=['taxi', 'walk'], ko='옛 시가는 걸어서, 침묵의 탑과 불의 사원은 택시로 갑니다.', en='Walk the old town; take taxis to the Towers of Silence and the fire temple.')),
    C(id='shiraz', after='yazd', ko='시라즈', en='Shiraz', native='شیراز · Shīrāz', lat=29.5918, lng=52.5837,
      blurb=['시인 하페즈와 사디의 도시이자 정원의 도시. 아침 햇살에 색유리가 빛나는 분홍 모스크를 보고, 북동쪽 페르세폴리스에서 페르시아 제국의 궁전 유적을 둘러봅니다.',
             'City of the poets Hafez and Saadi and of gardens—see the Pink Mosque glowing through its stained glass in the morning sun, and visit the palace ruins of the Persian Empire at Persepolis.'],
      highlights=[
          H('나시르 알 몰크 모스크', 'Nasir al-Mulk Mosque', '분홍 타일 때문에 ‘분홍 모스크’라 불리며, 아침 햇살이 색유리를 지나 바닥을 물들입니다.', 'Called the ‘Pink Mosque’ for its tiles; morning sun pours through the stained glass across the floor.', 'Nasir al-Mulk Mosque', 45, 60,
            n='햇빛이 드는 이른 아침에 가세요.|Go early in the morning, when the sun comes in.'),
          H('에람 정원', 'Eram Garden', '사이프러스 나무와 카자르 시대 저택이 있는 세계유산 페르시아 정원입니다.', 'A World Heritage Persian garden of cypresses and a Qajar-era mansion.', 'Eram Garden', 45, 60),
          H('하페즈 묘', 'Tomb of Hafez', '14세기 시인 하페즈가 잠든 정원으로, 저녁이면 시를 읊는 사람들로 붐빕니다.', 'The garden tomb of the 14th-century poet Hafez, busy in the evening with people reciting his verse.', 'Tomb of Hafez', 30, 45),
          H('카림 칸 성채', 'Karim Khan Citadel', '시내 한가운데 기울어진 탑이 있는 18세기 잔드 왕조의 성채입니다.', 'The 18th-century Zand dynasty citadel in the city centre, with a leaning tower.', 'Arg of Karim Khan', 45, 60),
          H('바킬 바자르와 모스크', 'Vakil Bazaar & Mosque', '잔드 왕조가 지은 지붕 덮인 시장과, 꽈배기 모양 기둥이 늘어선 모스크입니다.', 'The Zand dynasty’s covered bazaar and the mosque with its rows of twisted columns.', 'Vakil Bazaar Shiraz', 60, 90),
          H('샤 체라그 성지', 'Shah Cheragh', '안이 온통 거울 조각으로 덮인 성묘로, 시아파 순례지입니다.', 'A Shia shrine whose interior is covered entirely in mirror mosaic.', 'Shah Cheragh', 30, 45,
            n='여성은 입구에서 차도르를 빌려 입습니다.|Women borrow a chador at the entrance.'),
          H('페르세폴리스', 'Persepolis', '기원전 6세기 다리우스 1세가 세운 아케메네스 제국의 의전 수도로, 조공 행렬 부조가 남은 세계유산입니다.', 'The ceremonial capital of the Achaemenid Empire, begun by Darius I in the 6th century BC, with reliefs of tribute bearers—a World Heritage site.', 'Persepolis', 180, 240, group=DAY,
            n='시라즈에서 북동쪽으로 차로 약 1시간입니다.|About an hour north-east of Shiraz by car.'),
          H('낙시에 로스탐', 'Naqsh-e Rostam', '절벽에 새긴 아케메네스 왕들의 십자형 무덤과 사산 왕조 부조입니다.', 'The cross-shaped tombs of Achaemenid kings cut into the cliff, with Sasanian reliefs.', 'Naqsh-e Rostam', 45, 60, group=DAY,
            n='페르세폴리스에서 북쪽으로 약 6km입니다.|About 6 km north of Persepolis.'),
      ],
      hubs="    air: [['Shiraz International (SYZ)', '시라즈 국제공항 (SYZ)', '시내까지 차로 약 20분|about 20 min to the city by car']],\n",
      itinerary=[1, 4, 5, 6, 2, 3, 7, 8],
      season='봄(3~5월)이 가장 좋고, 오렌지꽃이 피는 4월에 정원이 아름답습니다. 여름은 덥습니다.|Spring (March–May) is best, with the gardens at their loveliest when the orange trees blossom in April; summers are hot.',
      stay=[],
      routes=[r('tehran', 'shiraz', 'flight', 90), r('istanbul', 'shiraz', 'flight', 240)],
      transit=dict(modes=['metro', 'taxi', 'walk'], ko='시내는 걷거나 택시로, 페르세폴리스는 기사 딸린 차를 빌려 다녀옵니다.', en='Walk or take taxis in town; hire a car and driver for Persepolis.')),
]

IR_ORDER = [('테헤란', 'Tehran', ['tehran']), ('중부', 'Central Iran', ['kashan', 'isfahan', 'yazd']), ('남부', 'The south', ['shiraz'])]
TRIPS = {'shiraz': [('페르세폴리스|Persepolis', 7, 8)]}


def setup():
    k = rd('countries.ts')
    if "id: 'ir'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  ir: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  ir: '364'," not in m:
        wr('countryIsoMap.ts', m.replace("  ly: '434',\n", "  ly: '434',\n  ir: '364',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  ir: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['tripoli', 'ghadames', 'cyrene', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'libya list'
    k = k.replace(old, "cityIds: ['tripoli', 'ghadames', 'cyrene'],")
    order = [x for g in IR_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in IR_ORDER) + '    ],')
    i = k.index("    id: 'ir',")
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
