#!/usr/bin/env python3
"""Second batch of day-trip places (2026-10-30): Central/Eastern Europe and Switzerland as sights in the base city,
Szentendre and Cádiz as new cities. Helpers come from add_daytrip_places.py. Run once."""
import json
import re

from add_daytrip_places import DAY, hl_block, insert_after_line, js, rd, tt, vline, wr

SIGHTS = [
    ('krakow', 7, 'visit-central.ts', dict(
        ko='비엘리치카 소금광산', en='Wieliczka Salt Mine', dko='700년 넘게 소금을 캐던 지하 광산. 소금으로 깎은 성 킹가 예배당이 볼거리인 세계유산입니다.', den='A salt mine worked for over 700 years, a World Heritage site best known for the St Kinga’s Chapel carved from salt.', maps='Wieliczka Salt Mine', group=DAY,
        visit=dict(min=150, max=210, b='rec', s='https://www.wieliczka-saltmine.com/', n='가이드 투어로만 들어가며 2~3시간, 계단이 약 380개입니다. 크라쿠프 중앙역에서 기차로 약 25분. 여름엔 외국어 투어가 빨리 차니 미리 예약하세요.|Guided tours only, 2–3 hours with about 380 steps; about 25 min by train from Kraków Główny. Foreign-language tours sell out in summer, so book ahead.'))),
    ('prague', 13, 'visit-central.ts', dict(
        ko='쿠트나호라', en='Kutná Hora', dko='은광으로 번성한 중세 도시. 뼈로 장식한 세들레츠 납골당과 성 바르바라 대성당이 있는 세계유산입니다.', den='A medieval silver-mining town and World Heritage site, with the bone-decorated Sedlec Ossuary and St Barbara’s Church.', maps='Sedlec Ossuary Kutná Hora', group=DAY,
        visit=dict(min=300, max=360, b='rec', n='프라하 중앙역에서 기차로 약 1시간. 세들레츠 납골당은 시간 지정 입장이라 미리 예약하는 편이 좋고, 안에서는 사진을 찍을 수 없습니다.|About an hour by train from Prague main station. The Sedlec Ossuary has timed entry, so book ahead; no photos inside.'))),
    ('vienna', 8, 'visit-central.ts', dict(
        ko='멜크 수도원과 바하우 계곡', en='Melk Abbey and the Wachau', dko='도나우강 위 언덕의 바로크 수도원과 도서관을 보고, 포도밭 사이를 흐르는 바하우 계곡을 배로 내려갑니다.', den='The Baroque abbey and library above the Danube, then a boat down the vineyard-lined Wachau valley.', maps='Stift Melk', group=DAY,
        visit=dict(min=300, max=420, s='https://www.stiftmelk.at/', n='빈에서 기차로 약 1시간~1시간 15분. 멜크–크렘스 도나우강 배는 보통 4~10월에만 다니고, 수도원은 겨울에 가이드 투어로만 들어갑니다.|About 1 hr–1 hr 15 by train from Vienna. Melk–Krems river boats usually run April–October only, and in winter the abbey is visited on guided tours only.'))),
    ('vilnius', 6, 'visit-med.ts', dict(
        ko='트라카이 섬 성', en='Trakai Island Castle', dko='호수 위 섬에 선 붉은 벽돌 성으로 리투아니아 대공국의 옛 수도였습니다. 나무다리를 건너 들어갑니다.', den='A red-brick castle on a lake island, once a capital of the Grand Duchy of Lithuania, reached by a wooden footbridge.', maps='Trakai Island Castle', group=DAY,
        visit=dict(min=180, max=240, n='빌뉴스에서 버스로 약 45분, 기차로 약 35분이며 역에서 성까지 걸어서 20~40분입니다. 여름(5~9월)엔 매일 엽니다.|About 45 min by bus or 35 min by train from Vilnius, then a 20–40 min walk to the castle; open daily May–September.'))),
    ('munich', 7, 'visit-benelux.ts', dict(
        ko='다하우 강제수용소 추모관', en='Dachau Concentration Camp Memorial', dko='나치 독일이 처음 세운 강제수용소 터에 만든 추모관이자 기록관입니다.', den='The memorial and documentation centre on the site of the first concentration camp set up by Nazi Germany.', maps='KZ-Gedenkstätte Dachau', group=DAY,
        visit=dict(min=180, max=240, c='daily', s='https://www.kz-gedenkstaette-dachau.de/', n='입장은 무료이고 12월 24일만 쉽니다. 중앙역에서 S2로 다하우역(약 25분), 이어서 726번 버스로 약 10분입니다.|Free entry; closed only on 24 December. S2 from the main station to Dachau (about 25 min), then bus 726 (about 10 min).', k='2026-10'))),
    ('lucerne', 9, 'visit-ch.ts', dict(
        ko='필라투스산', en='Mount Pilatus', dko='세계에서 가장 가파른 톱니바퀴 열차와 케이블카로 오르는 루체른의 산. 배·열차·케이블카를 잇는 골든 라운드 트립이 인기입니다.', den='Lucerne’s mountain, climbed by the world’s steepest cogwheel railway and by cable car; the Golden Round Trip links boat, train and cable car.', maps='Pilatus Kulm', group=DAY,
        visit=dict(min=240, max=360, s='https://www.pilatus.ch/', n='톱니바퀴 열차는 5월~11월에만 다닙니다(2026년은 5월 11일~11월 29일). 알프나흐슈타트행 배는 10월 중순까지입니다.|The cogwheel railway runs May–November only (11 May–29 November in 2026); boats to Alpnachstad run until mid-October.', k='2026-10',
                   x=[('크리엔스 쪽 곤돌라와 케이블카는 정비로 2026년 11월 27일까지 쉽니다.|The Kriens gondola and cableway are closed for maintenance until 27 November 2026.', '2026-11-27')]))),
    ('lucerne', 10, 'visit-ch.ts', dict(
        ko='티틀리스산', en='Mount Titlis', dko='엥겔베르크에서 케이블카를 갈아타며 오르는 빙하 산. 360도로 도는 로테어 케이블카와 클리프 워크가 있습니다.', den='A glacier peak above Engelberg, reached by a chain of cable cars ending with the revolving Rotair; with the Cliff Walk at the top.', maps='Titlis', group=DAY,
        visit=dict(min=300, max=360, s='https://www.titlis.ch/', n='루체른에서 기차로 엥겔베르크까지 약 45분, 이어서 케이블카를 세 번 갈아탑니다. 맑은 날 아침에 출발하세요.|About 45 min by train from Lucerne to Engelberg, then three cable cars; leave early on a clear day.'))),
]

ITIN = [
    ('itinerary-north.ts', '  krakow: [1, 3, 5, 2, 4],', "  krakow: { days: [['', 1, 3, 5, 2, 4]], trips: [['아우슈비츠|Auschwitz', 6], ['비엘리치카 소금광산|Wieliczka', 7]] },"),
    ('itinerary-north.ts', '  vilnius: [5, 1, 3, 2, 4],', "  vilnius: { days: [['', 5, 1, 3, 2, 4]], trips: [['트라카이|Trakai', 6]] },"),
    ('itinerary-north.ts', "      ['구시가와 유대인 지구|Old Town & Jewish Quarter', 8, 7, 3, 4, 6, 11],\n    ],\n  },",
     "      ['구시가와 유대인 지구|Old Town & Jewish Quarter', 8, 7, 3, 4, 6, 11],\n    ],\n    trips: [['쿠트나호라|Kutná Hora', 13]],\n  },"),
    ('itinerary-central.ts', "      ['쇤브룬과 벨베데레|Schönbrunn & Belvedere', 1, 3, 6],\n    ],\n  },",
     "      ['쇤브룬과 벨베데레|Schönbrunn & Belvedere', 1, 3, 6],\n    ],\n    trips: [['멜크와 바하우|Melk & the Wachau', 8]],\n  },"),
    ('itinerary-central.ts', "      ['님펜부르크|Nymphenburg', 3],\n    ],\n  },",
     "      ['님펜부르크|Nymphenburg', 3],\n    ],\n    trips: [['다하우 추모관|Dachau Memorial', 7]],\n  },"),
    ('itinerary-central.ts', "trips: [['호수 유람과 리기산|Lake cruise & Rigi', 2, 8]] },",
     "trips: [['호수 유람과 리기산|Lake cruise & Rigi', 2, 8], ['필라투스|Pilatus', 9], ['티틀리스|Titlis', 10]] },"),
]

CITIES = [
    dict(id='szentendre', country='hu', after='budapest', ko='센텐드레', en='Szentendre', native='Szentendre', lat=47.6694, lng=19.0756,
         blurb=['도나우강 가의 예술가 마을. 세르비아 정교회 첨탑과 자갈 골목이 이어집니다.', 'An artists’ town on the Danube, with Serbian Orthodox spires and cobbled lanes.'],
         highlights=[
             dict(ko='중앙 광장', en='Fő tér', dko='파스텔빛 바로크 집과 페스트 기념 십자가가 선 마을 중심 광장입니다.', den='The main square of pastel Baroque houses around a plague cross.', maps='Fő tér Szentendre', visit=dict(min=20, max=30)),
             dict(ko='블라고베슈텐스카 교회', en='Blagoveštenska Church', dko='세르비아 상인들이 18세기에 세운 정교회 성당으로 금빛 성화벽이 있습니다.', den='An 18th-century Serbian Orthodox church built by merchants, with a gilded iconostasis.', maps='Blagovestenska Church Szentendre', visit=dict(min=15, max=20)),
             dict(ko='코바치 머르기트 미술관', en='Margit Kovács Museum', dko='헝가리 도예가 코바치 머르기트의 도자 조각을 모은 미술관입니다.', den='A museum of the ceramic sculpture of Hungarian artist Margit Kovács.', maps='Kovács Margit Múzeum Szentendre', visit=dict(min=45, max=60)),
             dict(ko='교회 언덕', en='Church Hill', dko='마을 위 가톨릭 성당 언덕으로 지붕과 도나우강이 내려다보입니다.', den='The hill of the Catholic parish church, looking over the roofs and the Danube.', maps='Templomdomb Szentendre', visit=dict(min=15, max=20)),
             dict(ko='스칸젠 야외 민속 박물관', en='Skanzen Open-Air Museum', dko='헝가리 각 지방의 옛 농가와 마을을 옮겨 놓은 넓은 야외 박물관입니다.', den='A large open-air museum of farmhouses and villages moved here from across Hungary.', maps='Skanzen Szentendre', visit=dict(min=180, max=240, c='mon', s='https://skanzen.hu/en', n='4~10월이 성수기이며 월요일은 쉽니다. 시내에서 버스로 약 10분입니다.|High season is April–October; closed on Mondays. About 10 min by bus from town.', k='2026-10')),
         ],
         hubs="    air: [BUD()],\n    rail: [['Szentendre HÉV', '센텐드레 HÉV역', '부다페스트 바차니 광장행 교외선 H5|suburban line H5 to Batthyány tér']],\n",
         hubs_file='hubs-central.ts', itin_file='itinerary-north.ts', itin_before='  debrecen: [', itinerary=[1, 2, 4, 3, 5],
         season='여름 주말엔 부다페스트 당일 손님으로 붐빕니다. 스칸젠은 4~10월이 성수기입니다.|Summer weekends are busy with day-trippers from Budapest; the Skanzen’s main season is April–October.',
         visit_file='visit-central.ts', visit_after=r"^  'budapest-h\d+': v\(.*\),\n",
         stay=[('마을에서 묵기', 'In the town', 'Szentendre', '마을에서 묵기|Stay in the village', '작은 호텔과 게스트하우스가 있어 저녁의 조용한 골목을 볼 수 있습니다.|Small hotels and guesthouses, with the lanes at their quietest in the evening.'),
               ('부다페스트에서 다녀오기', 'Base in Budapest', 'Budapest', '거점에서 다녀오기|Day trip from a base', '바차니 광장에서 교외선 H5로 약 40분입니다. 부다페스트 시내 교통권은 시 경계까지만 유효해 추가 표가 필요합니다.|About 40 min on suburban line H5 from Batthyány tér; Budapest city passes stop at the city boundary, so buy an extension ticket.')],
         stay_before='  budapest: [',
         route="  r('budapest', 'szentendre', 'train', 40, { fa: '바차니 광장|Batthyány tér', fb: '센텐드레 HÉV역|Szentendre', n: '교외선 H5|suburban line H5' }),\n",
         route_file='routes-central.ts', route_after=r"^  r\('budapest', 'eger', .*\),\n",
         transit=dict(modes=['walk', 'bus', 'train'], ko='마을은 걸어서 다닙니다. 스칸젠은 HÉV역 앞에서 버스로 갑니다.', en='Walk the town; take a bus from the HÉV station to the Skanzen.'),
         apps="      ta('budapestgo'),\n", transit_before='  budapest: {',
         places=None,
         daytrip=('budapest', "    {\n      to: 'szentendre',\n      tip: '도나우강 가 예술가 마을의 골목과 정교회 성당, 마르치판 가게를 걷습니다. 스칸젠까지 보면 하루가 꽉 찹니다.|The artists’ town on the Danube: lanes, Orthodox churches and marzipan shops; adding the Skanzen fills the day.',\n    },\n")),
    dict(id='cadiz', country='es', after='seville', group_title='안달루시아', ko='카디스', en='Cádiz', native='Cádiz', lat=36.5297, lng=-6.2926,
         blurb=['바다로 둘러싸인 3천 년 항구 도시. 하얀 골목과 대서양 해변이 이어집니다.', 'A 3,000-year-old port almost surrounded by sea, with white lanes and Atlantic beaches.'],
         highlights=[
             dict(ko='카디스 대성당', en='Cádiz Cathedral', dko='금빛 돔이 바다를 향한 18~19세기 대성당으로 종탑에 오를 수 있습니다.', den='An 18th–19th-century cathedral with a golden dome facing the sea; climb the bell tower.', maps='Catedral de Cádiz', visit=dict(min=45, max=60)),
             dict(ko='타비라 탑', en='Torre Tavira', dko='옛 망루에 카메라 옵스큐라를 설치해 도시 전경을 비춰 보여 줍니다.', den='An old watchtower with a camera obscura projecting the city below.', maps='Torre Tavira Cádiz', visit=dict(min=30, max=45, b='req', s='https://torretavira.com/', n='인원이 정해져 있어 예약이 필요합니다.|Capacity is limited, so booking is required.', k='2026-10')),
             dict(ko='라 칼레타 해변', en='La Caleta beach', dko='두 성채 사이의 작은 만 해변으로 해 질 녘 풍경이 유명합니다.', den='A small cove beach between two forts, famous for its sunsets.', maps='Playa de La Caleta Cádiz', visit=dict(min=30, max=60)),
             dict(ko='산타 카탈리나 성', en='Castillo de Santa Catalina', dko='라 칼레타 해변 옆 별 모양 요새로 전시와 바다 전망이 있습니다.', den='The star-shaped fort beside La Caleta, with exhibitions and sea views.', maps='Castillo de Santa Catalina Cádiz', visit=dict(min=30, max=45)),
             dict(ko='중앙 시장', en='Mercado Central', dko='생선과 해산물이 가득한 시장으로 안쪽 가게에서 바로 튀김과 타파스를 먹을 수 있습니다.', den='A market full of fish and seafood, with stalls frying and serving tapas on the spot.', maps='Mercado Central de Abastos Cádiz', visit=dict(min=30, max=45)),
             dict(ko='로마 극장', en='Roman Theatre', dko='구시가 아래에서 발굴된 스페인에서 손꼽히게 큰 로마 극장 유적입니다.', den='Excavated beneath the old town, one of the largest Roman theatres in Spain.', maps='Teatro Romano de Cádiz', visit=dict(min=20, max=30)),
         ],
         hubs="    rail: [['Cádiz', '카디스역', '구시가 입구|at the edge of the old town']],\n",
         hubs_file='hubs-central.ts', itin_file='itinerary-iberia.ts', itin_before='  seville: {', itinerary=[1, 2, 5, 6, 4, 3],
         season='2월 카니발 때 숙소가 빨리 차고 매우 붐빕니다.|Rooms fill fast and the streets are packed during the February Carnival.',
         visit_file='visit-iberia.ts', visit_after=r"^  'seville-h\d+': v\(.*\),\n",
         stay=[('구시가', 'Old town', 'Plaza de San Juan de Dios, Cádiz', '처음 가는 여행에 추천|Best for a first visit', '바다로 둘러싸인 구시가에 대성당과 시장, 해변이 모두 걸어서 닿습니다.|The sea-ringed old town, with the cathedral, market and beaches all on foot.'),
               ('세비야에서 다녀오기', 'Base in Seville', 'Seville', '거점에서 다녀오기|Day trip from a base', '세비야에서 기차로 약 1시간 40분입니다.|About 1 hr 40 by train from Seville.')],
         stay_before='  seville: [',
         route="  r('seville', 'cadiz', 'train', 100, { fb: '카디스역|Cádiz', n: '중거리 열차|regional (Media Distancia)' }),\n",
         route_file='routes-central.ts', route_after=r"^  r\('seville', 'cordoba', .*\),\n",
         transit=dict(modes=['walk', 'bus', 'taxi'], ko='구시가는 걸어서 다닙니다. 기차역이 구시가 입구에 있습니다.', en='Walk the old town; the station is at its edge.'),
         apps="      ta('renfe'),\n", transit_before='  seville: {',
         places="  // —— cadiz ——\n  place('cadiz-fine_dining-1', 'cadiz', 'fine_dining', 'Código de Barra', 'Calle San Francisco 7, 11004 Cádiz', '네덜란드 출신 셰프 레온 흐리피윤의 미쉐린 1스타 레스토랑입니다.', 'Michelin one-star restaurant of Dutch-born chef Léon Griffioen.', { michelin: 'star1' }),\n",
         places_file='places-es-extra.ts', places_before='  // —— segovia ——\n',
         daytrip=('seville', "    {\n      to: 'cadiz',\n      tip: '바다로 둘러싸인 구시가의 대성당과 타비라 탑, 중앙 시장을 보고 라 칼레타 해변에서 해 지는 풍경을 봅니다.|The sea-ringed old town: the cathedral, Torre Tavira and the market, then sunset at La Caleta.',\n    },\n")),
]


def main():
    cities = rd('cities.ts')
    for base, n, vf, h in SIGHTS:
        hid = f'{base}-h{n}'
        if f'id: "{hid}"' in cities:
            continue
        i = cities.find(f'id: "{base}",')
        nxt = cities.find('\n  {\n    id: "', i + 10)
        j = cities.rindex('\n', i, cities.rindex('],', i, nxt))
        sep = '' if cities[:j].rstrip().endswith(',') else ','
        cities = cities[:j] + sep + '\n' + hl_block(hid, f'/highlights/{base}-{n}.jpg', h) + ',' + cities[j:]
        insert_after_line(vf, rf"^  '{base}-h\d+': v\(.*\),\n", vline(hid, h['visit']))
        print('sight', hid)
    wr('cities.ts', cities)
    for f, a, b in ITIN:
        s = rd(f)
        if b not in s:
            assert s.count(a) == 1, (f, a)
            wr(f, s.replace(a, b))
    for c in CITIES:
        cid = c['id']
        cities = rd('cities.ts')
        if f'id: "{cid}",' in cities:
            continue
        hl = ',\n'.join(hl_block(f'{cid}-h{i}', f'/highlights/{cid}-{i}.jpg', h) for i, h in enumerate(c['highlights'], 1))
        block = ('\n  {\n'
                 f'    id: "{cid}",\n    countryId: "{c["country"]}",\n    lat: {c["lat"]},\n    lng: {c["lng"]},\n'
                 f'    signatureImage: "/cities/{cid}.jpg",\n    name: {tt(c["ko"], c["en"])},\n'
                 f'    nativeName: {json.dumps(c["native"], ensure_ascii=False)},\n'
                 f'    blurb: {{\n      ko: {json.dumps(c["blurb"][0], ensure_ascii=False)},\n      en: {json.dumps(c["blurb"][1], ensure_ascii=False)},\n    }},\n'
                 f'    highlights: [\n{hl}\n    ],\n  }},')
        i = cities.find(f'id: "{c["after"]}",')
        j = cities.find('\n  {\n    id: "', i + 10)
        wr('cities.ts', cities[:j] + block + cities[j:])
        s = rd('countries.ts')
        pats = [rf"(cityIds: \[[^\]]*?)'{c['after']}'"]
        if c.get('group_title'):
            pats.append(rf"(\{{ title: \{{ ko: '{c['group_title']}'[^\]]*?)'{c['after']}'")
        for pat in pats:
            m = re.search(pat, s)
            assert m, (cid, pat)
            s = s[:m.end()] + f", '{cid}'" + s[m.end():]
        wr('countries.ts', s)

        def before(name, anchor, text):
            s = rd(name)
            k = s.index(anchor)
            wr(name, s[:k] + text + s[k:])
        before(c['hubs_file'], f"  {c['after']}: {{\n", f'  {cid}: {{\n{c["hubs"]}  }},\n')
        before(c['itin_file'], c['itin_before'], f"  {cid}: {json.dumps(c['itinerary'])},\n")
        insert_after_line('season-notes.ts', r"^  'aix-en-provence': \{.*\},\n", f"  {cid}: {{ n: {js(c['season'])} }},\n")
        insert_after_line(c['visit_file'], c['visit_after'], ''.join(vline(f'{cid}-h{i}', h['visit']) for i, h in enumerate(c['highlights'], 1)))
        rows = ''.join(f"    a({js(a[0])}, {js(a[1])}, {js(a[2])}, {js(a[3])}, {js(a[4])}),\n" for a in c['stay'])
        before('stay.ts', c['stay_before'], f'  {cid}: [\n{rows}  ],\n')
        insert_after_line(c['route_file'], c['route_after'], c['route'])
        t = c['transit']
        before('transit-city.ts', c['transit_before'],
               f"  {cid}: {{\n    modes: {json.dumps(t['modes']).replace(chr(34), chr(39))},\n    howTo: {{\n"
               f"      ko: {js(t['ko'])},\n      en: {js(t['en'])},\n    }},\n    apps: [\n{c['apps']}    ],\n  }},\n")
        if c['places']:
            before(c['places_file'], c['places_before'], c['places'])
        base, entry = c['daytrip']
        s = rd('day-trips.ts')
        m = re.search(rf"^  {base}: \[\n", s, re.M)
        end = s.index('\n  ],\n', m.end()) + 1
        wr('day-trips.ts', s[:end] + entry + s[end:])
        print('city', cid)


if __name__ == '__main__':
    main()
