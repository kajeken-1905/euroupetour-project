#!/usr/bin/env python3
"""Day-trip places missing from the app (2026-10-30): sights added to a base city as a "근교 당일치기" group, and
small towns added as new cities. Run once; already-present ids are skipped."""
import json
import os
import re
import urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(ROOT, 'src/data')


def rd(n):
    return open(os.path.join(D, n), encoding='utf8').read()


def wr(n, s):
    open(os.path.join(D, n), 'w', encoding='utf8').write(s)


def js(x):
    return "'" + x.replace('\\', '\\\\').replace("'", "\\'") + "'"


def tt(ko, en):
    return '{ ko: ' + json.dumps(ko, ensure_ascii=False) + ', en: ' + json.dumps(en, ensure_ascii=False) + ' }'


def maps(q):
    return 'https://www.google.com/maps/search/?api=1&query=' + urllib.parse.quote(q)


def hl_block(hid, img, h):
    return ('      {\n'
            f'        id: "{hid}",\n'
            f'        name: {tt(h["ko"], h["en"])},\n'
            f'        description: {tt(h["dko"], h["den"])},\n'
            f'        image: "{img}",\n'
            f'        mapsUrl: "{maps(h["maps"])}",\n'
            + (f'        group: {tt(*h["group"])},\n' if h.get('group') else '')
            + '      }')


def vline(hid, v):
    def opt(k, x):
        if k == 'z':
            return 'z: true'
        if k == 'x':
            return 'x: [' + ', '.join(f'[{js(t)}, {js(d)}]' for t, d in x) + ']'
        return f'{k}: {js(str(x))}'
    opts = ', '.join(opt(k, x) for k, x in v.items() if k not in ('min', 'max'))
    return f"  '{hid}': v({v['min']}, {v['max']}{', { ' + opts + ' }' if opts else ''}),\n"


def insert_after_line(name, pattern, text):
    s = rd(name)
    m = None
    for m in re.finditer(pattern, s, re.M):
        pass
    assert m, (name, pattern)
    wr(name, s[:m.end()] + text + s[m.end():])


DAY = ['근교 당일치기', 'Day trip']

# —— sights added to base cities ——
SIGHTS = {
    'rome': [
        (12, dict(ko='티볼리', en='Tivoli', dko='로마 동쪽 언덕 마을. 분수 정원으로 유명한 빌라 데스테와 하드리아누스 황제의 별궁 빌라 아드리아나(둘 다 세계유산)를 하루에 봅니다.', den='A hill town east of Rome with two World Heritage sites: the fountain gardens of Villa d’Este and Hadrian’s Villa.', maps="Villa d'Este Tivoli", group=DAY,
                  visit=dict(min=240, max=300, s='https://villae.cultura.gov.it/', n='빌라 데스테는 월요일 오전에 쉽니다. 로마 폰테 맘몰로역(지하철 B선)에서 코트랄 버스로 약 1시간, 티부르티나역에서 기차로 약 1시간 걸립니다.|Villa d’Este is closed on Monday mornings. About an hour by Cotral bus from Ponte Mammolo (metro B) or by train from Tiburtina.', k='2026-10'))),
        (13, dict(ko='오스티아 안티카', en='Ostia Antica', dko='고대 로마의 항구 도시 유적. 극장과 상점, 공동 주택과 모자이크 바닥이 폼페이처럼 넓게 남아 있습니다.', den='The excavated port city of ancient Rome, with a theatre, shops, apartment blocks and mosaic floors spread out like a smaller Pompeii.', maps='Parco archeologico di Ostia antica', group=DAY,
                  visit=dict(min=150, max=210, c='mon', s='https://ostiaantica.cultura.gov.it/', n='포르타 산 파올로역(지하철 B선 피라미데 옆)에서 로마–리도 열차로 약 30분이며 로마 대중교통 표로 탑니다.|About 30 min on the Roma–Lido train from Porta San Paolo (next to Piramide, metro B), on a regular Rome transit ticket.', k='2026-10'))),
    ],
    'madrid': [
        (15, dict(ko='엘에스코리알 수도원', en='El Escorial', dko='펠리페 2세가 세운 거대한 수도원 겸 왕궁. 왕실 묘소와 도서관이 있는 세계유산입니다.', den='Philip II’s vast monastery-palace, a World Heritage site with the royal pantheon and a great library.', maps='Real Monasterio de San Lorenzo de El Escorial', group=DAY,
                  visit=dict(min=120, max=180, c='mon', s='https://www.patrimonionacional.es/', n='마드리드에서 근교선 C-8로 약 1시간입니다. 2026년 2월부터 공사로 서쪽 정면(왕들의 안뜰)으로 들어갑니다.|About an hour from Madrid on suburban line C-8. Since February 2026 visitors enter by the west front (Patio de Reyes) during works.', k='2026-10'))),
    ],
}
ITIN_TRIPS = {
    'rome': ("    ],\n  },\n  milan:", "    ],\n    trips: [['티볼리|Tivoli', 12], ['오스티아 안티카|Ostia Antica', 13]],\n  },\n  milan:"),
}

# —— new cities ——
CITIES = [
    dict(id='avila', country='es', after='segovia', group_title='카스티야 이 레온', ko='아빌라', en='Ávila', native='Ávila', lat=40.6566, lng=-4.6818,
         blurb=['중세 성벽이 온전히 둘러싼 성녀 테레사의 고원 도시입니다.', 'A high-plateau city of St Teresa, wholly ringed by its medieval walls.'],
         highlights=[
             dict(ko='아빌라 성벽', en='Walls of Ávila', dko='탑 87개가 이어진 11~12세기 성벽으로, 일부 구간을 걸으며 구시가를 내려다볼 수 있습니다.', den='Eleventh- and twelfth-century walls with 87 towers; walk sections of the top over the old town.', maps='Muralla de Ávila', visit=dict(min=60, max=90, c='mon', n='월요일은 쉽니다(여름 성수기는 예외일 수 있음).|Closed on Mondays (except possibly in high summer).')),
             dict(ko='아빌라 대성당', en='Ávila Cathedral', dko='후진이 성벽의 일부를 이루는 요새 같은 고딕 대성당입니다.', den='A fortress-like Gothic cathedral whose apse forms part of the city wall.', maps='Catedral de Ávila', visit=dict(min=45, max=60)),
             dict(ko='산 비센테 대성당', en='Basilica of San Vicente', dko='성벽 밖의 로마네스크 성당으로 조각 정문과 성인의 무덤이 볼거리입니다.', den='A Romanesque basilica outside the walls, with a carved portal and the saints’ tomb.', maps='Basílica de San Vicente Ávila', visit=dict(min=30, max=45)),
             dict(ko='산타 테레사 수녀원', en='Convent of St Teresa', dko='성녀 테레사가 태어난 집 터에 세운 수녀원과 작은 박물관입니다.', den='The convent built on St Teresa’s birthplace, with a small museum.', maps='Convento de Santa Teresa Ávila', visit=dict(min=20, max=40)),
             dict(ko='로스 쿠아트로 포스테스', en='Los Cuatro Postes', dko='강 건너 언덕의 네 기둥 전망대로, 성벽 전체가 한눈에 들어옵니다. 해 질 녘이 좋습니다.', den='The four-pillar viewpoint across the river, with the whole wall in view; best at sunset.', maps='Los Cuatro Postes Ávila', visit=dict(min=15, max=30)),
             dict(ko='산토 토마스 수도원', en='Monastery of Santo Tomás', dko='가톨릭 군주들의 여름 궁전이던 수도원으로 회랑 세 곳과 왕자 후안의 무덤이 있습니다.', den='A monastery once the Catholic Monarchs’ summer palace, with three cloisters and Prince John’s tomb.', maps='Real Monasterio de Santo Tomás Ávila', visit=dict(min=45, max=60)),
         ],
         hubs="    air: [MAD()],\n    rail: [['Ávila', '아빌라역', '구시가까지 걸어서 약 15분|about 15 min walk to the old town']],\n    bus: [['Estación de Autobuses de Ávila', '아빌라 버스터미널']],\n",
         hubs_file='hubs-central.ts', itin_file='itinerary-iberia.ts', itinerary=[1, 3, 2, 4, 6, 5],
         season='해발 약 1,130m로 겨울이 매우 춥습니다. 성주간 행렬과 10월 산타 테레사 축제 때 붐빕니다.|At about 1,130 m the winters are bitterly cold; busy during the Holy Week processions and the October St Teresa festival.',
         visit_file='visit-iberia.ts', visit_after=r"^  'segovia-h8': v\(.*\),\n",
         stay=[('구시가', 'Old town', 'Plaza del Mercado Chico, Ávila', '하룻밤 묵을 때|For an overnight stay', '성벽 안에 묵으면 밤에 불 밝힌 성벽과 조용한 골목을 볼 수 있습니다.|Sleep inside the walls to see them floodlit at night and the lanes at their quietest.'),
               ('마드리드에서 다녀오기', 'Day trip from Madrid', 'Madrid Príncipe Pío', '당일치기 가능|Doable as a day trip', '프린시페 피오역이나 차마르틴역에서 기차로 약 1시간 30분입니다.|About 1 hr 30 by train from Príncipe Pío or Chamartín.')],
         stay_after='segovia',
         route="  r('madrid', 'avila', 'train', 90, { fa: '마드리드 프린시페 피오역|Madrid Príncipe Pío', fb: '아빌라역|Ávila', n: '차마르틴역 출발편도 있음|also from Chamartín' }),\n",
         route_file='routes-central.ts', route_after=r"^  r\('madrid', 'segovia', .*\),\n",
         transit=dict(modes=['walk', 'bus', 'taxi'], ko='구시가는 걸어서 다닙니다. 기차역에서 성벽까지는 걸어서 약 15분입니다.', en='Walk the old town; the walls are about 15 minutes on foot from the station.'),
         apps="      ta('renfe'),\n", transit_after='segovia',
         places="  // —— avila ——\n  place('avila-fine_dining-1', 'avila', 'fine_dining', 'Barro', 'Carretera de Salamanca 4, 05002 Ávila', '아빌라 출신 셰프 카를로스 카시야스의 미쉐린 1스타 창작 요리 레스토랑입니다.', 'Michelin one-star restaurant of creative cooking by Ávila-born chef Carlos Casillas.', { michelin: 'star1' }),\n",
         places_file='places-es-extra.ts', places_before='  // —— segovia ——\n',
         daytrip=('madrid', "    {\n      to: 'avila',\n      tip: '성벽 위를 걷고 대성당과 산 비센테 성당을 봅니다. 해 질 녘 쿠아트로 포스테스 전망대가 좋습니다.|Walk the walls and see the cathedral and San Vicente; the Cuatro Postes viewpoint is best at sunset.',\n    },\n")),
    dict(id='hydra', country='gr', after='sounion', group_title='중부', ko='이드라', en='Hydra', native='Ύδρα', lat=37.3497, lng=23.4654,
         blurb=['자동차가 없는 섬. 당나귀와 돌계단, 선장들의 저택이 남은 항구 마을입니다.', 'A car-free island of donkeys, stone steps and sea captains’ mansions around its harbour.'],
         highlights=[
             dict(ko='이드라 항구', en='Hydra harbour', dko='돌집이 계단식으로 둘러싼 말굽 모양 항구로 카페와 당나귀, 물 택시가 모여 있습니다.', den='The horseshoe harbour ringed by tiers of stone houses, with cafés, donkeys and water taxis.', maps='Hydra Port', visit=dict(min=30, max=60)),
             dict(ko='성모 승천 수도원', en='Monastery of the Dormition', dko='항구 앞 시계탑이 있는 수도원 겸 대성당으로 작은 교회 박물관이 있습니다.', den='The harbourfront monastery-cathedral with its clock tower and a small church museum.', maps='Holy Monastery of the Assumption of Virgin Mary Hydra', visit=dict(min=15, max=30)),
             dict(ko='라자로스 쿤투리오티스 저택', en='Lazaros Koundouriotis Mansion', dko='독립전쟁 때 함대를 이끈 가문의 18세기 저택으로, 국립 역사 박물관 분관입니다.', den='The 18th-century mansion of the family that led the fleet in the War of Independence, now a branch of the National Historical Museum.', maps='Lazaros Koundouriotis Historical Mansion', visit=dict(min=45, max=60, c='mon', s='https://nhmuseum.gr/en/', n='언덕 위라 계단을 올라갑니다.|Up a flight of steps above the harbour.', k='2026-10')),
             dict(ko='이드라 역사 기록관 박물관', en='Historical Archives Museum of Hydra', dko='항구 끝의 박물관으로 섬 선장들과 독립전쟁 자료를 전시합니다.', den='A museum at the harbour’s edge on the island’s sea captains and the War of Independence.', maps='Historical Archives Museum of Hydra', visit=dict(min=30, max=45)),
             dict(ko='카미니 해안 산책길', en='Coastal walk to Kamini', dko='항구에서 바닷가 길을 따라 카미니·블리호스 마을까지 걷고 바위 해변에서 수영합니다.', den='Walk the shore path from the harbour to Kamini and Vlychos and swim off the rocks.', maps='Kamini Hydra', visit=dict(min=60, max=120)),
         ],
         hubs="    air: [ATH()],\n    port: [['Port of Hydra', '이드라 항구', '피레우스행 고속선|fast boats to Piraeus']],\n",
         hubs_file='hubs-east.ts', itin_file='itinerary-south.ts', itinerary=[1, 2, 3, 4, 5],
         season='섬에는 자동차가 없어 걷거나 당나귀·물 택시를 탑니다. 겨울엔 배편과 문을 연 가게가 줄어듭니다.|There are no cars: walk, ride a donkey or take a water taxi. In winter, sailings and open shops thin out.',
         visit_file='visit-med.ts', visit_after=r"^  'nafplio-h7': v\(.*\),\n",
         stay=[('항구 주변', 'Around the harbour', 'Hydra port', '마을에서 묵기|Stay in the village', '돌집 게스트하우스가 많고, 당일 손님이 떠난 저녁 항구가 조용합니다. 짐은 계단을 올라야 해 가볍게 오세요.|Many stone-house guesthouses and a quiet harbour once day-trippers leave; pack light, as there are steps.'),
               ('아테네에서 다녀오기', 'Base in Athens', 'Athens', '거점에서 다녀오기|Day trip from a base', '피레우스에서 고속선으로 약 1시간 30분~2시간입니다. 여름엔 배표를 미리 사세요.|About 1 hr 30–2 hrs by fast boat from Piraeus; book tickets ahead in summer.')],
         stay_after='athens',
         route="  r('athens', 'hydra', 'ferry', 105, { fa: PIRAEUS, fb: '이드라 항구|Hydra port', n: FAST }),\n",
         route_file='routes-east.ts', route_after=r"^  r\('athens', 'sounion', .*\),\n",
         transit=dict(modes=['walk', 'ferry'], ko='섬에는 자동차가 없어 걸어 다니고, 짐은 당나귀가 나르며, 다른 해변까지는 물 택시를 탑니다.', en='There are no cars: walk, let donkeys carry the bags and take water taxis to other beaches.'),
         apps='', transit_after='athens',
         places=None,
         daytrip=('athens', "    {\n      to: 'hydra',\n      tip: '피레우스에서 고속선으로 가는 차 없는 섬. 항구와 선장 저택을 보고 바위 해변에서 수영합니다.|The car-free island by fast boat from Piraeus: the harbour, captains’ mansions and a swim off the rocks.',\n    },\n")),
]


def main():
    cities = rd('cities.ts')
    # sights in base cities
    for base, rows in SIGHTS.items():
        for n, h in rows:
            hid = f'{base}-h{n}'
            if f'id: "{hid}"' in cities:
                continue
            # end of this city's highlight list: the last "]," before the next city starts (layouts differ)
            i = cities.find(f'id: "{base}",')
            nxt = cities.find('\n  {\n    id: "', i + 10)
            j = cities.rindex('\n', i, cities.rindex('],', i, nxt))
            sep = '' if cities[:j].rstrip().endswith(',') else ','
            cities = cities[:j] + sep + '\n' + hl_block(hid, f'/highlights/{base}-{n}.jpg', h) + ',' + cities[j:]
            vf = 'visit-it.ts' if base == 'rome' else 'visit-iberia.ts'
            last = r"^  'rome-h11': v\(.*\),\n" if base == 'rome' else r"^  'madrid-h12': v\(.*\),\n"
            insert_after_line(vf, last, vline(hid, h['visit']))
            print('sight', hid)
    wr('cities.ts', cities)
    for base, (a, b) in ITIN_TRIPS.items():
        s = rd('itinerary-it.ts')
        if "['티볼리|Tivoli', 12]" not in s:
            assert s.count(a) == 1, a
            wr('itinerary-it.ts', s.replace(a, b))
    s = rd('itinerary-iberia.ts')
    a = "      ['프라도와 레티로|Prado & Retiro', 8, 7, 1, 2, 14],\n    ],\n  },"
    if 'El Escorial' not in s:
        assert s.count(a) == 1
        wr('itinerary-iberia.ts', s.replace(a, "      ['프라도와 레티로|Prado & Retiro', 8, 7, 1, 2, 14],\n    ],\n    trips: [['엘에스코리알|El Escorial', 15]],\n  },"))

    for c in CITIES:
        cid = c['id']
        cities = rd('cities.ts')
        if f'id: "{cid}",' in cities:
            print('skip', cid)
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
        for pat in (rf"(cityIds: \[[^\]]*?)'{c['after']}'", rf"(\{{ title: \{{ ko: '{c['group_title']}'[^\]]*?)'{c['after']}'"):
            m = re.search(pat, s)
            assert m, (cid, pat)
            s = s[:m.end()] + f", '{cid}'" + s[m.end():]
        wr('countries.ts', s)
        # hubs, before the anchor city's entry
        s = rd(c['hubs_file'])
        k = s.index(f"  {c['after']}: {{\n") if f"  {c['after']}: {{\n" in s else s.index('  nafplio: {\n')
        wr(c['hubs_file'], s[:k] + f'  {cid}: {{\n{c["hubs"]}  }},\n' + s[k:])
        insert_after_line(c['itin_file'], rf"^  {c['after'] if c['after'] != 'sounion' else 'athens'}: .*\n", f"  {cid}: {json.dumps(c['itinerary'])},\n")
        insert_after_line('season-notes.ts', r"^  'aix-en-provence': \{.*\},\n", f"  {cid}: {{ n: {js(c['season'])} }},\n")
        insert_after_line(c['visit_file'], c['visit_after'], ''.join(vline(f'{cid}-h{i}', h['visit']) for i, h in enumerate(c['highlights'], 1)))
        s = rd('stay.ts')
        k = s.index(f"  {c['stay_after']}: [\n")
        rows = ''.join(f"    a({js(a[0])}, {js(a[1])}, {js(a[2])}, {js(a[3])}, {js(a[4])}),\n" for a in c['stay'])
        wr('stay.ts', s[:k] + f'  {cid}: [\n{rows}  ],\n' + s[k:])
        insert_after_line(c['route_file'], c['route_after'], c['route'])
        t = c['transit']
        block = (f"  {cid}: {{\n    modes: {json.dumps(t['modes']).replace(chr(34), chr(39))},\n    howTo: {{\n"
                 f"      ko: {js(t['ko'])},\n      en: {js(t['en'])},\n    }},\n    apps: [\n{c['apps']}    ],\n  }},\n")
        s = rd('transit-city.ts')
        k = s.index(f"  {c['transit_after']}: {{\n")
        wr('transit-city.ts', s[:k] + block + s[k:])
        if c['places']:
            s = rd(c['places_file'])
            k = s.index(c['places_before'])
            wr(c['places_file'], s[:k] + c['places'] + s[k:])
        base, entry = c['daytrip']
        s = rd('day-trips.ts')
        m = re.search(rf"^  {base}: \[\n", s, re.M)
        end = s.index('\n  ],\n', m.end()) + 1
        wr('day-trips.ts', s[:end] + entry + s[end:])
        print('city', cid)


if __name__ == '__main__':
    main()
