#!/usr/bin/env python3
"""Morocco (2026-11-08) — first North Africa & Middle East country (region 'mena', blue map palette).
Country entry, practical info (Korean Foreign Ministry 0404.go.kr Morocco page: embassy, visa-free 90 days, emergency
numbers 15/19/177, time, dirham rules), ISO map id, country transit summary, and 8 cities: Marrakech, Essaouira,
Merzouga, Fez, Chefchaouen, Tangier, Rabat, Casablanca. Rail times are ONCF's usual timings (Al Boraq high-speed
Tangier–Rabat–Casablanca), buses CTM/Supratours, all rounded. Run once."""
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('seville', 'lisbon', 'bus', .*\),\n"
COMMON = dict(country='ma', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
              itin_before='  segovia: ', visit_file='visit-iberia.ts', visit_after=r"^  'funchal-h9': v\(.*\),\n", stay_before='  seville: [',
              transit_before='  seville: {', places=None, apps='', daytrips=[])
RIAD = '처음 가는 여행에 추천|Best for a first visit'


def C(**k):
    d = dict(COMMON)
    d.update(k)
    return d


def r(a, b, mode, mins, opts=''):
    return (RC, R_AFTER, f"  r('{a}', '{b}', '{mode}', {mins}{', ' + opts if opts else ''}),\n")


COUNTRY = """  // —— 북아프리카·중동 ——
  {
    id: 'ma',
    region: 'mena',
    name: { ko: '모로코', en: 'Morocco' },
    nativeName: 'المغرب · ⵍⵎⵖⵔⵉⴱ · Maroc',
    flagImage: '/flags/ma.svg',
    landmarkImage: '/landmarks/landmark-ma.jpg',
    flag: '🇲🇦',
    blurb: {
      ko: '지브롤터 해협 건너 아프리카의 첫 나라. 미로 같은 메디나와 사하라 사막, 대서양 항구가 스페인 여행과 배로 이어집니다.',
      en: 'Africa’s first country across the Strait of Gibraltar—maze-like medinas, the Sahara and Atlantic ports, a ferry ride from Spain.',
    },
    facts: {
      population: { ko: '약 3,690만 명 (2024년 인구조사)', en: 'Approx. 36.9 million (2024 census)' },
      area: { ko: '약 44만 6,550 km² (서사하라 제외)', en: 'Approx. 446,550 km² (excluding Western Sahara)' },
      capital: { ko: '라바트 (Rabat)', en: 'Rabat' },
      currency: { ko: '모로코 디르함 (MAD, DH)', en: 'Moroccan dirham (MAD, DH)' },
    },
    currencyCode: 'MAD',
    currencySymbol: 'DH',
    schengen: false,
    flagColors: {
      primary: '#C1272D',
      secondary: '#006233',
      accent: '#C1272D',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  ma: {
    // Korean Foreign Ministry travel-safety page for Morocco (0404.go.kr/ntnSafetyInfo/60/detail), 2026-11.
    emergency: [num('19', '경찰', 'Police'), num('15', '구급·소방', 'Ambulance and fire'), num('177', '지방 경찰(도시 밖)', 'Rural police (outside cities)')],
    embassy: {
      name: T('주모로코 대한민국 대사관', 'Korean Embassy in Morocco'),
      address: '41 Avenue Mehdi Ben Barka, Souissi, Rabat',
      phone: '+212-5-3775-1767',
      note: T('근무 시간 밖 긴급 상황은 영사콜센터(+82-2-3210-0404, 24시간)로 연락하세요.', 'Out of hours, call the consular call centre (+82-2-3210-0404, 24 hours).'),
      source: 'https://www.0404.go.kr/ntnSafetyInfo/60/detail',
    },
    power: T('220V · 50Hz, C·E형 콘센트. 한국 플러그를 대부분 그대로 꽂을 수 있습니다.', '220V, 50Hz, type C/E sockets. Korean plugs usually fit.'),
    tipping: T('식당에선 5~10% 정도, 짐을 들어 주거나 길을 안내해 준 사람에겐 몇 디르함을 주는 것이 관례입니다.', 'Around 5–10% in restaurants, and a few dirhams for porters or guides, is customary.'),
    water: WATER_BOTTLED,
    shops: T('수크(시장)에선 값을 흥정합니다. 디르함은 나라 밖으로 가져가거나 들여오기 어려운 통화라 현지에서 바꾸고, 환전 영수증을 보관해야 출국 때 남은 돈을 다시 바꿀 수 있습니다. 10만 디르함이 넘는 돈을 들여올 때는 세관에 신고합니다.', 'Bargain in the souks. The dirham can’t be freely taken in or out, so change money locally and keep the receipt—you need it to change leftovers back on departure. Declare amounts over 100,000 dirhams at customs.'),
    toilets: TOILETS_MIXED,
    time: T('UTC+1로 한국보다 8시간 늦습니다. 라마단 기간에는 한시적으로 9시간 늦어집니다.', 'UTC+1, 8 hours behind Korea; during Ramadan it temporarily becomes 9 hours behind.'),
    safety: T('외교부 여행경보는 서사하라를 뺀 전역이 1단계(여행유의)입니다. 서사하라는 모래 방어벽 서쪽 2단계, 동쪽 3단계입니다. 메디나에서 길을 안내해 주겠다며 돈을 요구하는 사람이 많으니 정중히 거절하세요.', 'Korean travel alert: level 1 (exercise caution) everywhere except Western Sahara (level 2 west of the sand berm, level 3 east of it). In the medinas, unofficial guides often ask for money—decline politely.'),
    entry: T('한국과 사증 면제 협정이 있어 관광·단기 체류는 90일까지 비자 없이 입국할 수 있습니다(외교부). 90일을 넘게 머물려면 주한 모로코 대사관에서 미리 비자를 받아야 합니다.', 'Under a visa-waiver agreement, Korean passports can stay up to 90 days visa-free (Korean Foreign Ministry). Longer stays need a visa from the Moroccan Embassy in Korea beforehand.'),
    telecom: T('주요 통신사는 Maroc Telecom·Orange·inwi입니다. 유럽 로밍 요금제에 포함되지 않는 경우가 많아 공항에서 현지 유심을 사는 편이 쌉니다.', 'Main operators: Maroc Telecom, Orange and inwi. European roaming bundles rarely include Morocco, so a local SIM from the airport is usually cheaper.'),
  },
"""

TRANSIT = """  ma: {
    summary: {
      ko: '우측통행. 탕헤르–라바트–카사블랑카는 고속열차 알 보라크가, 마라케시·페스까지는 국철(ONCF)이, 그 밖은 CTM·수프라투르 버스가 이어 줍니다.',
      en: 'Drive on the right. The Al Boraq high-speed train links Tangier, Rabat and Casablanca, ONCF trains run on to Marrakech and Fez, and CTM and Supratours buses cover the rest.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '스페인 타리파에서 탕헤르 시내 항구까지 페리로 약 1시간, 알헤시라스에서 탕헤르 메드 항까지 약 1시간 30분입니다. 사하라(메르주가)는 버스나 투어로 하루 가까이 걸립니다.',
      en: 'Ferries take about 1 hour from Tarifa to Tangier’s city port and about 1 hr 30 from Algeciras to Tanger Med. The Sahara (Merzouga) is most of a day away by bus or tour.',
    },
    paymentTip: {
      ko: '프티 택시(시내 택시)는 미터기를 켜 달라고 하거나 타기 전에 값을 정하세요. 기차표는 ONCF 웹사이트·앱이나 역에서 삽니다.',
      en: 'In petits taxis (city taxis), ask for the meter or agree a price first. Buy train tickets on the ONCF website or app, or at the station.',
    },
    apps: [],
  },
"""

CITIES = [
    C(id='marrakech', after='gibraltar', ko='마라케시', en='Marrakech', native='مراكش · Marrakech', lat=31.6295, lng=-7.9811,
      blurb=['붉은 성벽 안 메디나가 세계유산인 모로코 남부의 옛 왕도. 해 질 녘이면 제마 엘 프나 광장에 노점과 악사가 모이고, 미로 같은 수크와 정원, 리야드 숙소가 있습니다.',
             'The old southern royal city whose red-walled medina is a World Heritage site—at dusk, Jemaa el-Fnaa fills with food stalls and musicians, around a maze of souks, gardens and riad guesthouses.'],
      highlights=[
          H('제마 엘 프나 광장', 'Jemaa el-Fnaa', '낮엔 오렌지 주스 노점과 뱀 부리는 사람, 밤엔 먹거리 노점과 악사로 가득한 메디나의 중심 광장입니다.', 'The medina’s great square—orange-juice stalls and snake charmers by day, food stalls and musicians by night.', 'Jemaa el-Fnaa', 60, 120,
            n='사진을 찍으면 돈을 요구하는 공연자가 많습니다.|Many performers ask for money if you take photos.'),
          H('쿠투비아 모스크', 'Koutoubia Mosque', '12세기에 세운 77m 미너렛이 마라케시 어디서나 보이는 모스크로, 무슬림이 아니면 밖과 정원만 봅니다.', 'The mosque whose 77 m 12th-century minaret is seen across the city; non-Muslims visit the exterior and gardens only.', 'Koutoubia Mosque', 20, 30),
          H('바히아 궁전', 'Bahia Palace', '19세기 재상의 궁전으로, 색색의 타일과 조각한 삼나무 천장, 정원 안뜰이 이어집니다.', 'A 19th-century grand vizier’s palace of coloured tiles, carved cedar ceilings and garden courtyards.', 'Bahia Palace Marrakech', 60, 75),
          H('마조렐 정원', 'Jardin Majorelle', '코발트블루 건물과 선인장·대나무 정원으로, 옆에 이브 생 로랑 박물관이 있습니다.', 'Cobalt-blue buildings among cacti and bamboo, beside the Yves Saint Laurent Museum.', 'Jardin Majorelle', 60, 90, b='req',
            n='온라인 시간 지정 예매가 필요합니다.|Timed online tickets are required.'),
          H('벤 유세프 마드라사', 'Ben Youssef Madrasa', '타일과 회벽 조각, 삼나무로 꾸민 16세기 신학교로, 안뜰 연못이 아름답습니다.', 'The 16th-century theological college of tiles, carved stucco and cedar around a courtyard pool.', 'Ben Youssef Madrasa', 45, 60),
          H('수크', 'The souks', '향신료·가죽·램프·카펫 가게가 골목마다 모인 메디나 북쪽의 시장으로, 값은 흥정합니다.', 'The markets north of the square, lane after lane of spices, leather, lamps and carpets—bargain for everything.', 'Souk Semmarine Marrakech', 90, 150),
          H('사디안 왕조 무덤', 'Saadian Tombs', '16세기 사디안 왕조의 화려한 영묘로, 오랫동안 벽 속에 숨겨져 있다가 1917년 다시 발견됐습니다.', 'The ornate 16th-century Saadian mausoleums, walled up for centuries and rediscovered in 1917.', 'Saadian Tombs', 30, 45),
          H('아틀라스산맥과 우리카 계곡', 'Atlas Mountains & Ourika Valley', '베르베르 마을과 폭포가 있는 아틀라스 산골짜기로, 투어나 택시로 다녀옵니다.', 'An Atlas valley of Berber villages and waterfalls, reached by tour or taxi.', 'Ourika Valley', 360, 480, group=DAY,
            n='마라케시에서 차로 약 1시간입니다.|About 1 hr by car from Marrakech.'),
      ],
      hubs="    air: [['Marrakech Menara (RAK)', '마라케시 메나라 공항 (RAK)']],\n    rail: [['Marrakech', '마라케시역 (ONCF)']],\n    bus: [['Gare routière CTM / Supratours', 'CTM·수프라투르 버스터미널', '역 옆|by the station']],\n",
      itinerary=[2, 1, 6, 5, 3, 7, 4, 8],
      season='3~5월과 10~11월이 걷기 좋고, 6~8월은 40℃를 넘기도 합니다. 라마단 기간엔 낮에 문을 닫는 식당이 많습니다.|March–May and October–November are best for walking; June–August can top 40 °C. During Ramadan many restaurants close in the daytime.',
      stay=[('메디나의 리야드', 'Riads in the medina', 'Medina Marrakech', RIAD, '안뜰이 있는 전통 가옥 숙소로, 광장과 수크가 걸어서 닿습니다. 차가 못 들어가는 골목이 많아 짐을 옮겨 줄 사람을 미리 부탁하세요.|Traditional courtyard houses within walking distance of the square and souks; cars can’t reach many lanes, so ask the riad to meet you.'),
            ('게리즈', 'Guéliz', 'Gueliz Marrakech', '편하게 머물기|For comfort', '신시가지로, 역과 마조렐 정원이 가깝고 호텔과 카페가 많습니다.|The new town, near the station and Jardin Majorelle, with hotels and cafés.')],
      routes=[r('casablanca', 'marrakech', 'train', 160, "{ fa: '카사블랑카 보야죄르역|Casa-Voyageurs' }"),
              r('madrid', 'marrakech', 'flight', 110), r('paris', 'marrakech', 'flight', 195), r('barcelona', 'marrakech', 'flight', 130)],
      transit=dict(modes=['walk', 'taxi', 'bus'], ko='메디나는 걸어서 다닙니다. 신시가지와 공항은 프티 택시나 공항버스로 갑니다.', en='Walk the medina; take a petit taxi or the airport bus to the new town and airport.')),
    C(id='essaouira', after='marrakech', ko='에사우이라', en='Essaouira', native='الصويرة · Essaouira', lat=31.5085, lng=-9.7595,
      blurb=['대서양 바람이 부는 하얀·파란 항구 도시. 18세기 성벽 메디나가 세계유산이고, 갈매기 날리는 어항과 아르간 오일의 고장입니다.',
             'A windswept white-and-blue Atlantic port—its 18th-century walled medina is a World Heritage site, with a gull-filled fishing harbour and argan-oil country around it.'],
      highlights=[
          H('스칼라 성벽', 'Skala de la Ville', '청동 대포가 늘어선 바닷가 성벽 위로, 파도와 노을이 보입니다.', 'The seaside ramparts lined with bronze cannons, looking over the surf and sunsets.', 'Skala de la Ville Essaouira', 30, 45),
          H('어항과 생선 노점', 'Fishing port & grills', '파란 어선이 모인 항구에서, 고른 생선을 바로 구워 주는 노점에서 먹습니다.', 'The harbour of blue fishing boats, where stalls grill the fish you choose.', 'Port of Essaouira', 60, 90),
          H('메디나', 'The medina', '프랑스 건축가가 설계한 바둑판 골목에 공예품 가게와 미술 갤러리가 이어지는 세계유산 구시가입니다.', 'The World Heritage old town laid out on a grid by a French architect, full of craft shops and galleries.', 'Medina of Essaouira', 90, 120),
          H('에사우이라 해변', 'Essaouira beach', '바람이 세서 카이트서핑과 윈드서핑을 많이 하는 넓은 모래 해변입니다.', 'A broad sandy beach whose strong winds draw kite- and windsurfers.', 'Plage d\'Essaouira', 60, 120),
          H('아르간 오일 협동조합', 'Argan oil cooperative', '여성 협동조합에서 아르간 열매를 손으로 깨 기름을 짜는 과정을 보고 맛봅니다.', 'Watch argan kernels cracked and pressed by hand at a women’s cooperative, and taste the oil.', 'Cooperative Argan Essaouira', 45, 60, group=DAY,
            n='마라케시로 가는 길가에 협동조합이 많습니다.|Many cooperatives line the road towards Marrakech.'),
      ],
      hubs="    air: [['Essaouira-Mogador (ESU)', '에사우이라 공항 (ESU)'], ['Marrakech Menara (RAK)', '마라케시 공항 (RAK)', '마라케시|Marrakech']],\n    bus: [['Supratours Essaouira', '수프라투르 터미널', '마라케시행|to Marrakech']],\n",
      itinerary=[3, 1, 2, 4, 5],
      season='여름에도 바닷바람에 선선하고, 6월 그나와 음악 축제가 열립니다. 바람이 세서 겉옷이 필요합니다.|Cool sea breezes even in summer; the Gnaoua music festival is in June. Bring a layer for the wind.',
      stay=[('메디나', 'Medina', 'Medina Essaouira', RIAD, '성벽과 항구가 걸어서 닿습니다.|The ramparts and port on foot.')],
      routes=[r('marrakech', 'essaouira', 'bus', 180, "{ n: '수프라투르·CTM|Supratours, CTM' }")],
      transit=dict(modes=['walk', 'taxi'], ko='메디나는 걸어서 다닙니다.', en='Walk the medina.')),
    C(id='merzouga', after='essaouira', ko='메르주가 (사하라)', en='Merzouga (Sahara)', native='مرزوكة · Merzouga', lat=31.0802, lng=-4.0133,
      blurb=['사하라의 붉은 모래언덕 에르그 셰비 앞 마을. 낙타를 타고 사막 캠프로 들어가 별 아래에서 하룻밤을 보내고, 모래언덕 위 해돋이를 봅니다.',
             'The village at the foot of Erg Chebbi’s red Saharan dunes—ride a camel to a desert camp, spend a night under the stars and watch sunrise from the dunes.'],
      highlights=[
          H('에르그 셰비 낙타 트레킹', 'Erg Chebbi camel trek', '해 질 녘 낙타를 타고 높이 150m에 이르는 모래언덕 사이로 들어갑니다.', 'Ride a camel at sunset into dunes up to 150 m high.', 'Erg Chebbi', 90, 120),
          H('사막 캠프', 'Desert camp', '모래언덕 사이 텐트에서 베르베르 음악과 저녁을 먹고 별을 보며 하룻밤 묵습니다.', 'A night in a tent among the dunes, with Berber music, dinner and stars.', 'Erg Chebbi desert camp', 720, 900, b='req',
            n='숙소·투어사에서 미리 예약합니다. 사막의 밤은 겨울에 영하로 내려갑니다.|Book through your hotel or a tour operator; winter nights drop below freezing.'),
          H('모래언덕 해돋이', 'Dune sunrise', '새벽에 모래언덕을 올라 사막 위로 해가 뜨는 것을 봅니다.', 'Climb a dune before dawn to watch the sun rise over the desert.', 'Erg Chebbi', 60, 60),
          H('하밀리아 그나와 음악', 'Khamlia Gnawa music', '사하라 남쪽에서 온 사람들의 후손이 사는 마을에서 그나와 음악을 듣습니다.', 'Hear Gnawa music in the village of descendants of people from south of the Sahara.', 'Khamlia Merzouga', 45, 60),
          H('리사니 시장', 'Rissani market', '대추야자와 향신료, 가축이 오가는 오아시스 마을의 전통 시장입니다.', 'The traditional oasis market of dates, spices and livestock.', 'Rissani', 120, 180, group=DAY,
            n='메르주가에서 차로 약 40분이며 큰 장은 일요일·화요일·목요일에 섭니다.|About 40 min by car from Merzouga; the big market days are Sunday, Tuesday and Thursday.'),
      ],
      hubs="    air: [['Errachidia Moulay Ali Cherif (ERH)', '에라시디아 공항 (ERH)'], ['Marrakech Menara (RAK)', '마라케시 공항 (RAK)', '마라케시|Marrakech'], ['Fès–Saïss (FEZ)', '페스 공항 (FEZ)', '페스|Fez']],\n    bus: [['Supratours Merzouga', '수프라투르 정류장', '마라케시·페스행 야간버스|night buses to Marrakech and Fez']],\n",
      itinerary=[1, 2, 3, 4, 5],
      season='10~4월이 사막 여행에 좋습니다. 겨울밤은 영하로 내려가고, 6~8월 낮은 45℃ 가까이 오릅니다.|October–April is best for the desert; winter nights fall below freezing and June–August days near 45 °C.',
      stay=[('사막 캠프', 'Desert camp', 'Erg Chebbi', RIAD, '모래언덕 사이 텐트 숙소로, 낙타 트레킹과 저녁·아침이 함께인 경우가 많습니다.|Tented camps among the dunes, usually with the camel trek, dinner and breakfast included.'),
            ('메르주가 마을', 'Merzouga village', 'Merzouga', '편하게 머물기|For comfort', '모래언덕 바로 앞 호텔(오베르주)에서 묵고 낮에 사막을 다녀옵니다.|Stay in an auberge at the foot of the dunes and visit the desert by day.')],
      routes=[r('marrakech', 'merzouga', 'bus', 600, "{ n: '수프라투르 야간버스 · 투어 차량도 많음|Supratours night bus; tours are common too' }"),
              r('fez', 'merzouga', 'bus', 510, "{ n: '수프라투르 야간버스|Supratours night bus' }")],
      transit=dict(modes=['walk', 'taxi'], ko='사막은 낙타나 사륜구동차로 들어갑니다.', en='The desert is reached by camel or 4×4.')),
    C(id='fez', after='merzouga', ko='페스', en='Fez', native='فاس · Fès', lat=34.0626, lng=-4.9779,
      blurb=['차가 들어갈 수 없는 세계 최대급 중세 도시 페스 엘 발리의 고장. 9세기 대학과 가죽 염색장, 수천 갈래 골목에 장인의 공방이 이어집니다.',
             'Home of Fes el-Bali, one of the world’s largest car-free medieval cities—a 9th-century university, leather tanneries and thousands of lanes of artisans’ workshops.'],
      highlights=[
          H('페스 엘 발리 메디나', 'Fes el-Bali medina', '9천여 갈래 골목에 시장과 공방, 모스크가 얽힌 세계유산 구시가로, 처음엔 공인 가이드와 다니면 편합니다.', 'The World Heritage old city of some 9,000 lanes of markets, workshops and mosques—an official guide helps on a first visit.', 'Fes el Bali', 180, 300),
          H('슈아라 가죽 염색장', 'Chouara Tannery', '돌 통에 담긴 염료에 가죽을 담그는 11세기 이래의 염색장을, 주변 가게 테라스에서 내려다봅니다.', 'The tannery worked since the 11th century, its stone vats of dye seen from the terraces of the surrounding shops.', 'Chouara Tannery', 30, 45,
            n='테라스에 올라가면 가게에서 물건을 권합니다. 냄새를 덜어 줄 민트 잎을 줍니다.|Shops on the terraces will show you their wares; they hand out mint leaves for the smell.'),
          H('알 카라윈', 'Al-Qarawiyyin', '859년 세운 세계 최고(最古)급 대학이자 모스크로, 무슬림이 아니면 문 밖에서 안뜰을 들여다봅니다.', 'Founded in 859, one of the world’s oldest universities and a mosque; non-Muslims look in from the doorways.', 'Al Quaraouiyine', 15, 20),
          H('부 이나니아 마드라사', 'Bou Inania Madrasa', '14세기 마리니드 왕조의 신학교로, 타일과 삼나무 조각이 정교합니다.', 'The 14th-century Marinid theological college of intricate tiles and carved cedar.', 'Bou Inania Madrasa Fes', 30, 45),
          H('부 즐루드 문 (블루 게이트)', 'Bab Bou Jeloud (Blue Gate)', '바깥은 파랑, 안쪽은 초록 타일로 꾸민 메디나의 정문입니다.', 'The medina’s main gate, tiled blue outside and green inside.', 'Bab Bou Jeloud', 10, 15),
          H('알 아타린 마드라사', 'Al-Attarine Madrasa', '향신료 시장 옆 14세기 신학교로, 안뜰 장식이 페스에서 손꼽힙니다.', 'The 14th-century college by the spice market, with one of Fez’s finest courtyards.', 'Al-Attarine Madrasa', 30, 45),
          H('왕궁 금문', 'Royal Palace gates', '금빛 청동 문 일곱 개가 늘어선 왕궁 정문으로, 안에는 들어갈 수 없습니다.', 'The Royal Palace’s seven gilded brass doors; the palace itself is closed to visitors.', 'Dar al-Makhzen Fes', 15, 20),
          H('볼루빌리스와 메크네스', 'Volubilis & Meknes', '모자이크가 남은 로마 도시 유적과, 거대한 성문이 있는 옛 왕도 메크네스입니다.', 'The Roman ruins of Volubilis with their mosaics, and the old imperial city of Meknes with its great gates.', 'Volubilis', 360, 480, group=DAY,
            n='페스에서 차로 약 1시간 15분이며 투어나 택시를 많이 씁니다.|About 1 hr 15 by car from Fez; most go by tour or taxi.'),
      ],
      hubs="    air: [['Fès–Saïss (FEZ)', '페스 사이스 공항 (FEZ)']],\n    rail: [['Fès', '페스역 (ONCF)']],\n    bus: [['Gare routière CTM Fès', 'CTM 버스터미널']],\n",
      itinerary=[5, 1, 4, 6, 3, 2, 7, 8],
      season='봄·가을이 좋고, 여름 낮은 덥고 겨울엔 비가 잦습니다. 6월 세계 종교 음악 축제가 열립니다.|Spring and autumn are best; summers are hot and winters rainy. The World Sacred Music Festival is in June.',
      stay=[('페스 엘 발리의 리야드', 'Riads in Fes el-Bali', 'Fes el Bali', RIAD, '메디나 안 전통 가옥 숙소입니다. 길이 복잡해 숙소에서 블루 게이트까지 마중을 부탁하세요.|Traditional houses inside the medina; the lanes are confusing, so ask your riad to meet you at the Blue Gate.')],
      routes=[r('rabat', 'fez', 'train', 165, "{ fa: '라바트 빌역|Rabat-Ville' }"), r('casablanca', 'fez', 'train', 240, "{ fa: '카사블랑카 보야죄르역|Casa-Voyageurs' }")],
      transit=dict(modes=['walk', 'taxi'], ko='메디나는 걸어서만 다닙니다. 신시가지와 역은 프티 택시로 갑니다.', en='The medina is on foot only; take a petit taxi to the new town and station.')),
    C(id='chefchaouen', after='fez', ko='셰프샤우엔', en='Chefchaouen', native='شفشاون · Chefchaouen', lat=35.1688, lng=-5.2636,
      blurb=['리프산맥 골짜기에 기대어 집과 골목을 온통 파랗게 칠한 산골 마을. 스페인 모스크 언덕에서 파란 마을을 내려다보는 노을이 아름답습니다.',
             'A mountain town in the Rif whose houses and lanes are painted every shade of blue—watch the sunset over it from the Spanish Mosque hill.'],
      highlights=[
          H('파란 메디나 골목', 'The blue medina', '계단과 벽, 문까지 파랗게 칠한 골목을 걷습니다.', 'Wander lanes where steps, walls and doors are all painted blue.', 'Chefchaouen medina', 90, 120),
          H('우타 엘 함맘 광장과 카스바', 'Plaza Uta el-Hammam & Kasbah', '카페가 둘러싼 중심 광장과, 정원과 탑이 있는 붉은 성채입니다.', 'The café-lined main square and the red-walled kasbah with its garden and tower.', 'Kasbah Chefchaouen', 45, 60),
          H('스페인 모스크 전망대', 'Spanish Mosque viewpoint', '언덕 위 옛 모스크까지 약 20분 걸어 올라 파란 마을과 산 위로 지는 해를 봅니다.', 'A 20-minute climb to the old hillside mosque for sunset over the blue town and mountains.', 'Spanish Mosque Chefchaouen', 60, 90),
          H('라스 엘 마 샘', 'Ras El Ma', '마을 끝 계곡물이 솟는 샘으로, 아낙들이 빨래하던 곳입니다.', 'The spring at the edge of town where women once did the washing.', 'Ras El Maa Chefchaouen', 20, 30),
          H('아크슈르 폭포', 'Akchour waterfalls', '탈라셈탄 국립공원의 계곡을 따라 걸어 폭포와 ‘신의 다리’ 바위 아치를 봅니다.', 'Hike a Talassemtane National Park gorge to waterfalls and the God’s Bridge rock arch.', 'Akchour', 300, 420, group=DAY,
            n='셰프샤우엔에서 차로 약 45분입니다.|About 45 min by car from Chefchaouen.'),
      ],
      hubs="    air: [['Tangier Ibn Battouta (TNG)', '탕헤르 공항 (TNG)', '탕헤르|Tangier'], ['Fès–Saïss (FEZ)', '페스 공항 (FEZ)', '페스|Fez']],\n    bus: [['Gare routière CTM Chefchaouen', 'CTM 버스터미널']],\n",
      itinerary=[2, 1, 4, 3, 5],
      season='봄·가을이 걷기 좋고, 겨울엔 산이라 춥고 비가 잦습니다.|Spring and autumn are best for walking; winters are cold and rainy in the mountains.',
      stay=[('메디나', 'Medina', 'Chefchaouen medina', RIAD, '광장과 골목이 걸어서 닿습니다. 버스터미널은 언덕 아래라 택시를 탑니다.|The square and lanes on foot; the bus station is downhill, so take a taxi.')],
      routes=[r('tangier', 'chefchaouen', 'bus', 165, "{ n: 'CTM' }"), r('fez', 'chefchaouen', 'bus', 225, "{ n: 'CTM' }")],
      transit=dict(modes=['walk', 'taxi'], ko='마을은 걸어서 다닙니다(계단이 많습니다).', en='Walk the town (expect lots of steps).')),
    C(id='tangier', after='chefchaouen', ko='탕헤르', en='Tangier', native='طنجة · Tanger', lat=35.7595, lng=-5.8340,
      blurb=['스페인에서 배로 1시간, 아프리카의 관문 항구 도시. 해협을 내려다보는 카스바와 작가·화가들이 머문 카페, 헤라클레스 동굴이 있습니다.',
             'Africa’s gateway port, an hour by ferry from Spain—a kasbah above the strait, cafés frequented by writers and painters, and the Caves of Hercules.'],
      highlights=[
          H('카스바와 카스바 박물관', 'Kasbah & Kasbah Museum', '해협을 내려다보는 언덕 위 성채로, 옛 술탄 궁전이 박물관입니다.', 'The hilltop citadel above the strait, with the old sultan’s palace as a museum.', 'Kasbah Museum Tangier', 60, 90, c='tue'),
          H('그랑 소코와 메디나', 'Grand Socco & medina', '분주한 광장에서 시작해 시장과 하얀 집이 얽힌 구시가를 걷습니다.', 'From the bustling square into the old town’s markets and white houses.', 'Grand Socco Tangier', 60, 90),
          H('카페 하파', 'Café Hafa', '1921년 문을 연 절벽 위 계단식 카페로, 민트 차를 마시며 해협 건너 스페인을 봅니다.', 'The terraced clifftop café opened in 1921—sip mint tea and look across the strait to Spain.', 'Café Hafa Tangier', 45, 60),
          H('미국 공사관 박물관', 'American Legation Museum', '미국이 해외에 처음 소유한 공관 건물로, 탕헤르 역사와 그림을 전시합니다.', 'The first property the United States owned abroad, now a museum of Tangier’s history and art.', 'Tangier American Legation', 45, 60),
          H('헤라클레스 동굴과 스파르텔 곶', 'Caves of Hercules & Cap Spartel', '아프리카 지도 모양으로 바다가 보이는 동굴과, 대서양과 지중해가 만나는 곶의 등대입니다.', 'The sea cave whose opening is shaped like Africa, and the cape lighthouse where the Atlantic meets the Mediterranean.', 'Caves of Hercules', 120, 150, group=DAY,
            n='시내에서 택시로 약 30분입니다.|About 30 min by taxi from the city.'),
      ],
      hubs="    air: [['Tangier Ibn Battouta (TNG)', '탕헤르 이븐 바투타 공항 (TNG)']],\n    rail: [['Tanger Ville', '탕헤르 빌역', '고속열차 알 보라크|Al Boraq high-speed']],\n    port: [['Tanger Ville port', '탕헤르 시내 항구', '스페인 타리파행 페리|ferries to Tarifa, Spain'], ['Tanger Med', '탕헤르 메드 항', '알헤시라스행 페리 · 시내에서 약 45km|ferries to Algeciras, about 45 km from the city']],\n",
      itinerary=[2, 1, 4, 3, 5],
      season='여름에도 바닷바람에 비교적 선선합니다. 겨울엔 바람과 비로 페리가 쉬기도 합니다.|Relatively cool in summer thanks to the sea; winter wind and rain sometimes cancel ferries.',
      stay=[('메디나와 카스바', 'Medina & Kasbah', 'Kasbah Tangier', RIAD, '카스바와 카페가 걸어서 닿고 시내 항구가 가깝습니다.|The kasbah and cafés on foot, near the city ferry port.'),
            ('신시가지', 'Ville Nouvelle', 'Boulevard Pasteur Tangier', '편하게 머물기|For comfort', '대로를 따라 호텔과 식당이 모여 있고 역은 택시로 약 10분입니다.|Hotels and restaurants along the boulevards, about 10 min by taxi to the station.')],
      routes=[r('tarifa', 'tangier', 'ferry', 60, "{ fa: '타리파 항구|Tarifa port', fb: '탕헤르 시내 항구|Tanger Ville port', n: '여권 심사가 배 안에서 이뤄집니다|passport control is done on board' }")],
      transit=dict(modes=['walk', 'taxi', 'bus'], ko='구시가는 걸어서, 동굴·곶은 택시로 갑니다.', en='Walk the old town; take a taxi to the caves and cape.')),
    C(id='rabat', after='tangier', ko='라바트', en='Rabat', native='الرباط · Rabat', lat=34.0209, lng=-6.8416,
      blurb=['모로코의 수도. 미완성 하산 탑과 왕의 영묘, 바다 위 하얀·파란 카스바, 로마·중세 유적이 함께 세계유산이고, 다른 도시보다 차분합니다.',
             'Morocco’s calm capital—the unfinished Hassan Tower and royal mausoleum, the blue-and-white kasbah above the sea and Roman-to-medieval ruins, together a World Heritage site.'],
      highlights=[
          H('하산 탑과 모하메드 5세 영묘', 'Hassan Tower & Mausoleum of Mohammed V', '12세기 말 짓다 멈춘 44m 미너렛과 기둥 숲 맞은편에, 근위병이 지키는 흰 영묘가 있습니다.', 'The 44 m minaret left unfinished in the late 12th century beside a forest of columns, facing the guarded white royal mausoleum.', 'Hassan Tower Rabat', 45, 60),
          H('우다이아 카스바', 'Kasbah of the Udayas', '부레그레그강 어귀 언덕의 하얀·파란 성채 마을로, 안달루시아 정원과 바다 전망이 있습니다.', 'The white-and-blue fortified quarter above the Bou Regreg estuary, with an Andalusian garden and sea views.', 'Kasbah of the Udayas', 60, 90),
          H('셸라', 'Chellah', '로마 도시 위에 마리니드 왕조가 묘지를 지은 유적으로, 황새 둥지가 많습니다.', 'Roman ruins overlaid by a Marinid necropolis, crowded with storks’ nests.', 'Chellah Rabat', 60, 75),
          H('메디나', 'The medina', '관광객이 적어 편하게 걷는 구시가 시장입니다.', 'A relaxed old-town market with few tourists.', 'Medina of Rabat', 60, 90),
          H('모하메드 6세 현대 미술관', 'Mohammed VI Museum of Modern and Contemporary Art', '모로코와 아랍 근현대 미술을 전시하는 국립 미술관입니다.', 'The national museum of modern Moroccan and Arab art.', 'Musée Mohammed VI Rabat', 60, 90, c='tue'),
      ],
      hubs="    air: [['Rabat–Salé (RBA)', '라바트 살레 공항 (RBA)'], ['Casablanca Mohammed V (CMN)', '카사블랑카 공항 (CMN)', '카사블랑카|Casablanca']],\n    rail: [['Rabat Ville', '라바트 빌역'], ['Rabat Agdal', '라바트 아그달역', '고속열차 알 보라크|Al Boraq high-speed']],\n",
      itinerary=[1, 3, 4, 2, 5],
      season='1년 내내 온화한 해양성 기후로, 여름에도 비교적 선선합니다.|Mild Atlantic weather all year, relatively cool even in summer.',
      stay=[('메디나 주변과 아그달', 'Around the medina & Agdal', 'Medina Rabat', RIAD, '카스바와 메디나가 걸어서 닿고 트램이 시내를 잇습니다.|The kasbah and medina on foot, with a tram across town.')],
      routes=[r('tangier', 'rabat', 'train', 80, "{ ...R, fb: '라바트 아그달역|Rabat Agdal', n: '고속열차 알 보라크|Al Boraq high-speed' }")],
      transit=dict(modes=['walk', 'tram', 'taxi'], ko='구시가는 걸어서, 셸라와 신시가지는 트램이나 택시로 갑니다.', en='Walk the old town; take the tram or a taxi to Chellah and the new town.')),
    C(id='casablanca', after='rabat', ko='카사블랑카', en='Casablanca', native='الدار البيضاء · Casablanca', lat=33.5731, lng=-7.5898,
      blurb=['모로코 최대 도시이자 경제 수도. 바다 위에 지은 하산 2세 모스크와 20세기 아르데코 건물, 대서양 해안로가 있고, 국제선 대부분이 이곳에 내립니다.',
             'Morocco’s largest city and business capital—the Hassan II Mosque built over the sea, 20th-century Art Deco buildings and the Atlantic corniche; most international flights land here.'],
      highlights=[
          H('하산 2세 모스크', 'Hassan II Mosque', '바다 위로 튀어나온 대형 모스크로, 210m 미너렛이 있고 무슬림이 아니어도 가이드 투어로 안에 들어갑니다.', 'The vast mosque jutting over the ocean, with a 210 m minaret; non-Muslims can go inside on guided tours.', 'Hassan II Mosque', 60, 90, b='rec',
            n='투어 시간이 정해져 있고 금요일엔 적습니다. 어깨와 무릎을 가리는 옷을 입으세요.|Tours run at set times, fewer on Fridays; cover shoulders and knees.'),
          H('하부스 지구', 'Habous Quarter', '1930년대 프랑스가 전통 양식으로 지은 ‘새 메디나’로, 시장과 과자점이 있습니다.', 'The 1930s “new medina” built by the French in traditional style, with markets and pastry shops.', 'Quartier Habous Casablanca', 60, 90),
          H('모하메드 5세 광장과 아르데코 거리', 'Mohammed V Square & Art Deco', '관청 건물이 둘러싼 광장과 주변의 20세기 초 아르데코 건물들을 걷습니다.', 'The square of government buildings and the early-20th-century Art Deco streets around it.', 'Place Mohammed V Casablanca', 45, 60),
          H('아인 디압 코르니시', 'Ain Diab Corniche', '해변 카페와 식당이 이어지는 대서양 해안 산책로입니다.', 'The Atlantic seafront promenade of beach cafés and restaurants.', 'Corniche Ain Diab', 60, 90),
          H('중앙 시장', 'Marché Central', '생선·굴 노점과 꽃집이 모인 1917년 시장으로, 고른 해산물을 구워 줍니다.', 'The 1917 market of fish, oysters and flowers, where stalls grill the seafood you choose.', 'Marché Central Casablanca', 30, 45),
      ],
      hubs="    air: [['Casablanca Mohammed V (CMN)', '카사블랑카 모하메드 5세 공항 (CMN)', '시내까지 기차로 약 35분|about 35 min to the city by train']],\n    rail: [['Casa-Voyageurs', '카사블랑카 보야죄르역', '고속열차·마라케시행|high-speed and to Marrakech'], ['Casa-Port', '카사블랑카 포르역']],\n",
      itinerary=[1, 4, 3, 5, 2],
      season='1년 내내 온화합니다. 하산 2세 모스크는 금요일 투어가 적으니 다른 날을 고르세요.|Mild all year; pick a day other than Friday for the Hassan II Mosque tours.',
      stay=[('시내 중심', 'City centre', 'Place Mohammed V Casablanca', RIAD, '아르데코 거리와 카사 포르역이 가깝고 트램이 다닙니다.|Near the Art Deco streets and Casa-Port station, on the tram line.')],
      routes=[r('tangier', 'casablanca', 'train', 130, "{ ...R, fb: '카사블랑카 보야죄르역|Casa-Voyageurs', n: '고속열차 알 보라크|Al Boraq high-speed' }"),
              r('rabat', 'casablanca', 'train', 60), r('lisbon', 'casablanca', 'flight', 90), r('madrid', 'casablanca', 'flight', 95)],
      transit=dict(modes=['tram', 'taxi', 'walk', 'train'], ko='트램 노선과 프티 택시로 다닙니다. 공항은 기차(ONCF)로 갑니다.', en='Get around by tram and petit taxi; the airport train is run by ONCF.')),
]

MA_ORDER = [('마라케시와 남부', 'Marrakech & the south', ['marrakech', 'essaouira', 'merzouga']),
            ('북부', 'Northern Morocco', ['fez', 'chefchaouen', 'tangier']),
            ('대서양 연안', 'Atlantic coast', ['rabat', 'casablanca'])]
TRIPS = {'marrakech': [('아틀라스산맥|Atlas Mountains', 8)], 'essaouira': [('아르간 협동조합|Argan cooperative', 5)], 'merzouga': [('리사니|Rissani', 5)],
         'fez': [('볼루빌리스와 메크네스|Volubilis & Meknes', 8)], 'chefchaouen': [('아크슈르|Akchour', 5)], 'tangier': [('헤라클레스 동굴|Caves of Hercules', 5)]}


def setup():
    k = rd('countries.ts')
    if "id: 'ma'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    e = rd('essentials.ts')
    if '\n  ma: {' not in e:
        i = e.index('\n  xc: {')
        e = e[:i + 1] + ESSENTIALS + e[i + 1:]
        wr('essentials.ts', e)
    t = rd('transit.ts')
    if '\n  ma: {' not in t:
        i = t.index('\n  gi: {')
        t = t[:i + 1] + TRANSIT + t[i + 1:]
        wr('transit.ts', t)
    m = rd('countryIsoMap.ts')
    if "  ma: '504'," not in m:
        m = m.replace("  by: '112',\n", "  by: '112',\n  ma: '504',\n", 1)
        wr('countryIsoMap.ts', m)


def finish():
    ids = [x for g in MA_ORDER for x in g[2]]
    k = rd('countries.ts')
    # the writer appended each new city after 'gibraltar' in Gibraltar's own list: move them to Morocco
    k = k.replace("cityIds: ['gibraltar', " + ', '.join(f"'{x}'" for x in ids_in_write_order()) + "],", "cityIds: ['gibraltar'],")
    assert "cityIds: ['gibraltar']," in k, 'gibraltar list'
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in ids) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in MA_ORDER) + '    ],')
    i = k.index("    id: 'ma',")
    j = k.index('cityIds: [],', i)
    k = k[:j] + body + k[j + len('cityIds: [],'):]
    wr('countries.ts', k)
    it = rd('itinerary-iberia.ts')
    for cid, trips in TRIPS.items():
        lst = next(c['itinerary'] for c in CITIES if c['id'] == cid)
        old = f"  {cid}: [{', '.join(map(str, lst))}],\n"
        assert it.count(old) == 1, cid
        days = [n for n in lst if not any(n in t[1:] for t in trips)]
        tr = ', '.join(f"['{t[0]}', {', '.join(map(str, t[1:]))}]" for t in trips)
        it = it.replace(old, f"  {cid}: {{ days: [['', {', '.join(map(str, days))}]], trips: [{tr}] }},\n")
    wr('itinerary-iberia.ts', it)


def ids_in_write_order():
    # each city is inserted right after 'gibraltar' or after the previous Moroccan city, so the list reads in CITIES order
    return [c['id'] for c in CITIES]


if __name__ == '__main__':
    setup()
    T.CITIES = CITIES
    T.main()
    finish()
