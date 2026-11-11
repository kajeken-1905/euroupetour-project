#!/usr/bin/env python3
"""Libya (2026-11-09). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/375/detail): the whole country is a
travel-ban (여행금지) area, extended to 2027-01-31; the embassy works from a temporary office in Tunis. Handled like Belarus
(user decision 2026-11-08): travel-ban notice, basics, cities and sights, no restaurants or stay areas.
Cities: Tripoli (Leptis Magna, Sabratha), Ghadames, Cyrene. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='ly', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'ly',
    region: 'mena',
    name: { ko: '리비아', en: 'Libya' },
    nativeName: 'ليبيا · Lībiyā',
    flagImage: '/flags/ly.svg',
    landmarkImage: '/landmarks/landmark-ly.jpg',
    flag: '🇱🇾',
    blurb: {
      ko: '한국 정부 지정 여행금지국. 로마 유적 렙티스 마그나·사브라타, 그리스 도시 키레네, 사막 오아시스 가다메스가 있습니다.',
      en: 'A Korean travel-ban country—home to the Roman ruins of Leptis Magna and Sabratha, Greek Cyrene and the desert oasis of Ghadames.',
    },
    facts: {
      population: { ko: '약 740만 명 (2024년)', en: 'Approx. 7.4 million (2024)' },
      area: { ko: '약 176만 km²', en: 'Approx. 1.76 million km²' },
      capital: { ko: '트리폴리 (Tripoli)', en: 'Tripoli' },
      currency: { ko: '리비아 디나르 (LYD, LD)', en: 'Libyan dinar (LYD, LD)' },
    },
    currencyCode: 'LYD',
    currencySymbol: 'LD',
    schengen: false,
    flagColors: {
      primary: '#E70013',
      secondary: '#000000',
      accent: '#239E46',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  ly: {
    // Korean Foreign Ministry travel-safety page for Libya (0404.go.kr/ntnSafetyInfo/375/detail), 2026-11. The page lists no local emergency numbers.
    emergency: [num('+218-91-263-9408', '주리비아 대사관 긴급 연락처(24시간)', 'Korean Embassy emergency line (24 hours)'), num('+82-2-3210-0404', '영사콜센터(24시간)', 'Consular call centre (24 hours)')],
    embassy: {
      name: T('주리비아 대한민국 대사관 (튀니지 임시사무소)', 'Korean Embassy in Libya (temporary office in Tunis)'),
      address: 'Montazah Cote De Carthage Villa D1, 2078 Gammarth, Tunis',
      phone: '+216-71-274-759',
      afterHours: '+218-91-263-9408',
      source: 'https://www.0404.go.kr/ntnSafetyInfo/375/detail',
    },
    power: T('230V · 50Hz. 콘센트 모양이 여러 가지라 멀티 어댑터를 챙기세요.', '230V, 50Hz; socket types vary, so bring a universal adapter.'),
    tipping: T('팁은 의무가 아닙니다.', 'Tipping is not expected.'),
    water: WATER_BOTTLED,
    shops: T('현금 사회입니다. 1만 달러 이상의 외화 현금은 입국 때 세관에 신고하고 신고서를 보관해야 출국할 수 있습니다.', 'Libya runs on cash. Declare foreign cash of US$10,000 or more at customs on arrival and keep the form, which you need when leaving.'),
    toilets: T('호텔·식당 화장실을 이용합니다.', 'Use toilets in hotels and restaurants.'),
    time: T('UTC+2, 서머타임 없음. 한국보다 7시간 늦습니다.', 'UTC+2 with no daylight saving: 7 hours behind Korea.'),
    safety: T('외교부가 리비아 전역을 여행금지국으로 지정했습니다. 무력 충돌과 납치·강도 위험이 있고, 2026년 봄부터 자위야에서 충돌이 이어지고 있습니다. 술·돼지고기는 반입할 수 없습니다.', 'Korea has designated all of Libya a travel-ban country. There is a risk of armed clashes, kidnapping and robbery, and fighting has continued in Al Zawiya since spring 2026. Alcohol and pork may not be brought in.'),
    entry: T('여행금지국이라 외교부의 예외적 여권 사용 허가가 먼저 있어야 합니다. 한국 여권은 무비자·도착 비자가 안 되고, 비자는 미리 받아야 하며 한 달 넘게 걸리기도 합니다.', 'As a travel-ban country, Libya needs the Korean Foreign Ministry’s exceptional passport-use permission first. Korean passports get neither visa-free entry nor a visa on arrival; the visa must be obtained in advance and can take over a month.'),
    telecom: T('주요 통신사는 Libyana·Al Madar입니다. 한국 통신사 로밍 가능 여부를 출발 전에 확인하세요.', 'Main operators: Libyana and Al Madar. Check roaming with your carrier before you go.'),
  },
"""

TRANSIT = """  ly: {
    summary: {
      ko: '우측통행. 철도와 지하철이 없어 택시와 차를 이용합니다.',
      en: 'Drive on the right. There is no rail or metro—get around by taxi and car.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '트리폴리 미티가 공항에서 국내선과 국제선이 뜹니다. 도시 사이 육로는 멀고 검문소가 많습니다.',
      en: 'Domestic and international flights use Mitiga Airport in Tripoli; overland distances are long, with many checkpoints.',
    },
    paymentTip: {
      ko: '택시는 타기 전에 요금을 정하세요.',
      en: 'Agree taxi fares before you set off.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Libya page: travel-ban country (extended to 2027-01-31 in the 2026-08-13 notice); embassy in Tunis.
  ly: {
    icon: '⛔',
    title: { ko: '여행금지국', en: 'Travel ban' },
    lines: [
      {
        ko: '한국 정부가 리비아 전역을 여행금지 지역으로 지정했습니다(2027년 1월 31일까지). 외교부의 예외적 여권 사용 허가 없이 방문하면 여권법에 따라 처벌받을 수 있습니다.',
        en: 'The Korean government has designated all of Libya a travel-ban area (until 31 January 2027). Visiting without the Foreign Ministry’s exceptional passport-use permission can be punished under the Passport Act.',
      },
      {
        ko: '무력 충돌과 납치·강도 위험이 있습니다. 주리비아 대사관은 튀니지 튀니스의 임시사무소에서 일합니다. 이 앱의 정보는 참고용이며 여행을 권하지 않습니다.',
        en: 'There is a risk of armed clashes, kidnapping and robbery. The Korean Embassy works from a temporary office in Tunis. The information here is for reference only and is not a suggestion to travel.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/375/detail',
  },
"""

CITIES = [
    C(id='tripoli', after='ghardaia', ko='트리폴리', en='Tripoli', native='طرابلس · Ṭarābulus', lat=32.8872, lng=13.1913,
      blurb=['지중해에 면한 리비아의 수도. 오스만 시대 골목이 남은 메디나와 바닷가의 붉은 성, 로마 시대 마르쿠스 아우렐리우스 개선문이 있고, 동쪽 렙티스 마그나와 서쪽 사브라타의 로마 유적이 가깝습니다.',
             'Libya’s capital on the Mediterranean—the Ottoman lanes of the medina, the seaside Red Castle and the Roman Arch of Marcus Aurelius, with the Roman ruins of Leptis Magna to the east and Sabratha to the west.'],
      highlights=[
          H('트리폴리 메디나', 'Medina of Tripoli', '성벽 안에 오스만 시대 모스크와 대상 숙소, 시장 골목이 이어진 옛 시가입니다.', 'The walled old town of Ottoman mosques, caravanserais and market lanes.', 'Tripoli Medina Libya', 120, 180),
          H('붉은 성 (아사라야 알 함라)', 'Red Castle (Assaraya al-Hamra)', '순교자 광장 옆 바닷가의 옛 성채로, 안에 리비아 국립 박물관이 있습니다.', 'The old citadel by the sea next to Martyrs’ Square, housing the Libyan National Museum.', 'Red Castle Tripoli', 90, 120),
          H('마르쿠스 아우렐리우스 개선문', 'Arch of Marcus Aurelius', '2세기에 세운 로마 시대 개선문으로, 메디나 북쪽 끝에 남아 있습니다.', 'A Roman triumphal arch of the 2nd century, standing at the northern edge of the medina.', 'Arch of Marcus Aurelius Tripoli', 15, 20),
          H('순교자 광장', 'Martyrs’ Square', '붉은 성 앞의 큰 광장으로, 시내 한가운데입니다.', 'The great square in front of the Red Castle, at the heart of the city.', 'Martyrs Square Tripoli', 20, 30),
          H('구르지 모스크', 'Gurgi Mosque', '19세기 초 지은 오스만 양식 모스크로, 타일과 대리석 장식이 화려합니다.', 'An Ottoman-style mosque of the early 19th century, richly decorated with tiles and marble.', 'Gurgi Mosque', 20, 30),
          H('아흐메드 파샤 카라만리 모스크', 'Ahmed Pasha Karamanli Mosque', '18세기 카라만리 왕조가 메디나에 세운 큰 모스크입니다.', 'The great mosque built in the medina by the Karamanli dynasty in the 18th century.', 'Ahmed Pasha Karamanli Mosque', 20, 30),
          H('렙티스 마그나', 'Leptis Magna', '세베루스 황제의 고향으로, 개선문·바실리카·극장과 바닷가 원형경기장이 남은 지중해 최대급 로마 유적이자 세계유산입니다.', 'Emperor Septimius Severus’s home town and one of the Mediterranean’s greatest Roman sites—arch, basilica, theatre and a seaside amphitheatre; a World Heritage site.', 'Leptis Magna', 300, 360, group=DAY,
            n='트리폴리에서 동쪽으로 약 130km입니다.|About 130 km east of Tripoli.'),
          H('사브라타', 'Sabratha', '바다를 등진 3층 무대가 남은 로마 극장으로 유명한 세계유산 유적입니다.', 'The World Heritage ruins famous for the Roman theatre’s three-storey stage set against the sea.', 'Sabratha', 180, 240, group=DAY,
            n='트리폴리에서 서쪽으로 약 70km입니다.|About 70 km west of Tripoli.'),
      ],
      hubs="    air: [['Mitiga International (MJI)', '미티가 국제공항 (MJI)', '시내에서 동쪽으로 약 8km|about 8 km east of the centre']],\n",
      itinerary=[1, 4, 2, 3, 6, 5, 7, 8],
      season='10~4월이 좋습니다. 여름은 덥고, 남쪽에서 모래바람(기블리)이 불어오기도 합니다. 라마단 기간엔 낮에 식당이 문을 닫습니다.|October–April is best; summers are hot, and the ghibli sandstorm blows in from the south. Restaurants close by day during Ramadan.',
      stay=[],
      routes=[r('istanbul', 'tripoli', 'flight', 160), r('tunis', 'tripoli', 'flight', 70)],
      transit=dict(modes=['taxi', 'walk'], ko='메디나는 걸어서, 나머지는 택시로 다닙니다.', en='Walk the medina and take taxis elsewhere.')),
    C(id='ghadames', after='tripoli', ko='가다메스', en='Ghadames', native='غدامس · Ghadāmis', lat=30.1337, lng=9.4967,
      blurb=['알제리·튀니지 국경 가까운 사하라의 오아시스 도시로, ‘사막의 진주’라 불립니다. 지붕으로 덮인 골목과 하얀 흙집이 이어진 옛 시가가 세계유산입니다.',
             'The ‘pearl of the desert’, a Saharan oasis near the Algerian and Tunisian borders—its old town of covered lanes and whitewashed mud houses is a World Heritage site.'],
      highlights=[
          H('가다메스 옛 시가', 'Old Town of Ghadames', '한낮의 열기를 피하도록 지붕을 덮은 골목과 2층 흙집이 미로처럼 이어진 세계유산 마을입니다.', 'The World Heritage town of covered lanes and two-storey mud houses, a maze built to shut out the midday heat.', 'Old Town of Ghadames', 120, 180),
          H('가다메스 박물관', 'Ghadames Museum', '옛 요새 건물에 오아시스 사람들의 생활 도구와 옷을 전시한 박물관입니다.', 'A museum of oasis life—tools and costume—in an old fort building.', 'Ghadames Museum', 45, 60),
      ],
      hubs="    air: [['Ghadames (LTD)', '가다메스 공항 (LTD)', '국내선|domestic flights']],\n",
      itinerary=[1, 2],
      season='10~3월이 좋습니다. 여름 낮은 45℃를 넘습니다.|October–March is best; summer days pass 45 °C.',
      stay=[],
      routes=[r('tripoli', 'ghadames', 'mixed', 540)],
      transit=dict(modes=['walk', 'taxi'], ko='옛 시가는 걸어서 봅니다.', en='Explore the old town on foot.')),
    C(id='cyrene', after='ghadames', ko='키레네', en='Cyrene', native='شحات · Shaḥḥāt', lat=32.8250, lng=21.8580,
      blurb=['기원전 7세기 그리스인이 녹색 산(제벨 아크다르)에 세운 도시. 아폴론 성역과 제우스 신전이 남은 세계유산 유적이 바다를 내려다보고, 아래 해안에 항구 도시 아폴로니아가 있습니다.',
             'The city Greeks founded on the Green Mountain (Jebel Akhdar) in the 7th century BC—its World Heritage ruins of the Sanctuary of Apollo and the Temple of Zeus look over the sea, with the port of Apollonia on the coast below.'],
      highlights=[
          H('아폴론 성역', 'Sanctuary of Apollo', '샘 옆 비탈에 아폴론 신전과 목욕장, 극장이 모인 키레네 유적의 중심입니다.', 'The heart of the Cyrene ruins—the temple of Apollo, baths and theatre on a slope beside the sacred spring.', 'Sanctuary of Apollo Cyrene', 120, 150),
          H('제우스 신전', 'Temple of Zeus', '파르테논보다 큰 도리스식 신전으로, 무너졌던 기둥 일부를 다시 세웠습니다.', 'A Doric temple larger than the Parthenon, with some of its fallen columns re-erected.', 'Temple of Zeus Cyrene', 45, 60),
          H('아폴로니아', 'Apollonia', '키레네의 항구였던 해안 유적으로, 비잔틴 교회와 극장이 남아 있습니다.', 'The coastal ruins of Cyrene’s port, with Byzantine churches and a theatre.', 'Apollonia Cyrenaica', 90, 120,
            n='키레네에서 바닷가로 약 20km 내려갑니다.|About 20 km down to the coast from Cyrene.'),
      ],
      hubs="    air: [['Al Abraq (LAQ)', '알 아브라크 공항 (LAQ)', '국내선|domestic flights']],\n",
      itinerary=[1, 2, 3],
      season='봄(3~5월)이 좋습니다. 고원이라 여름이 비교적 선선하고, 겨울엔 비가 옵니다.|Spring (March–May) is best; on the plateau summers are milder, and winters are rainy.',
      stay=[],
      routes=[r('tripoli', 'cyrene', 'flight', 100)],
      transit=dict(modes=['taxi'], ko='유적 사이는 차로 다닙니다.', en='Travel between the sites by car.')),
]

LY_ORDER = [('트리폴리와 서부', 'Tripoli & the west', ['tripoli', 'ghadames']), ('동부 (키레나이카)', 'The east (Cyrenaica)', ['cyrene'])]
TRIPS = {'tripoli': [('렙티스 마그나|Leptis Magna', 7), ('사브라타|Sabratha', 8)]}


def setup():
    k = rd('countries.ts')
    if "id: 'ly'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  ly: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  ly: '434'," not in m:
        wr('countryIsoMap.ts', m.replace("  dz: '012',\n", "  dz: '012',\n  ly: '434',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  ly: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['algiers', 'oran', 'constantine', 'ghardaia', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'algeria list'
    k = k.replace(old, "cityIds: ['algiers', 'oran', 'constantine', 'ghardaia'],")
    order = [x for g in LY_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in LY_ORDER) + '    ],')
    i = k.index("    id: 'ly',")
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
