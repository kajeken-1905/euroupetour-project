#!/usr/bin/env python3
"""Liechtenstein step 1 (Vaduz, Schaan, Malbun), 2026-11-21. Template sights replaced with real places (German/English
Wikipedia): Vaduz h5 becomes the Old Rhine Bridge (135 m, last wooden bridge over the Alpine Rhine); Schaan h1 becomes
St. Peter chapel on the 4th-century Roman fort, h4 the walk up to Dux, h5 (generic "Vaduz link") removed; Malbun h1-h5
become the ski area, Fürstin-Gina-Weg, Sareis chairlift, Pfälzerhütte (2,108 m) and the Walser museum in Triesenberg.
New: Vaduz +4 (Landesmuseum, Government House and Landtag, Red House, Princely Wine Cellars), Malbun +1 (Gänglesee).
Run once."""
import os
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
OUT = '건물 밖에서만 봅니다.|Seen from outside only.'
SUMMER = '눈이 녹은 여름철(대략 6~10월)에 걷습니다.|Walked in summer once the snow has gone (roughly June–October).'
BLURB = {
 'vaduz': ('라인강 동쪽 기슭, 알프스 아래 자리한 리히텐슈타인 공국의 수도. 언덕 위에 군주 가족이 사는 파두츠 성이 있고, 그 아래 보행자 거리 슈테틀레를 따라 미술관·국립박물관·우표 박물관과 의사당이 모여 있어 하루면 둘러볼 수 있습니다.',
           'The capital of the Principality of Liechtenstein, on the east bank of the Rhine below the Alps. Vaduz Castle, home of the princely family, stands on the hill above; below it the pedestrian Städtle gathers the art museum, national museum, stamp museum and parliament, all easily seen in a day.'),
 'schaan': ('리히텐슈타인에서 사람이 가장 많은 마을로, 파두츠 바로 북쪽에 붙어 있습니다. 나라의 철도역이 있는 교통·산업 중심지이며, 높이 81m로 나라에서 가장 높은 종탑의 성 라우렌티우스 교회와 4세기 로마 요새 터, 극장 TaK가 있습니다.',
            'Liechtenstein’s most populous municipality, joined to Vaduz on the north. It is the country’s transport and industrial hub with its railway station, and has St Laurentius Church, whose 81 m tower is the tallest in the country, a 4th-century Roman fort and the TaK theatre.'),
 'malbun': ('해발 약 1,600m 산골짜기에 있는 리히텐슈타인 유일의 스키 마을로, 겨울엔 완만한 가족용 슬로프, 여름엔 국경 능선 산행의 거점이 됩니다. 파두츠에서 트리젠베르크와 슈테크를 지나 버스로 올라옵니다.',
            'Liechtenstein’s only ski village, in a mountain valley at about 1,600 m: gentle family slopes in winter and a base for ridge hikes along the border in summer. Buses climb up from Vaduz via Triesenberg and Steg.'),
}

REWRITE = {
 'vaduz-h1': (None, None, '언덕 위의 성으로, 1938년부터 리히텐슈타인 군주 가족이 삽니다. 내부는 공개하지 않지만 시내에서 산길로 걸어 올라가면 성 앞에서 라인 계곡이 내려다보입니다.', 'The hilltop castle, home of Liechtenstein’s princely family since 1938. The interior is closed, but a footpath from town climbs to the gates for views over the Rhine valley.'),
 'vaduz-h2': (None, None, '파두츠 중심의 보행자 거리로, 미술관·국립박물관·의사당과 카페, 기념품 가게가 늘어서 있습니다.', 'Vaduz’s pedestrian main street, lined with the museums, parliament, cafés and souvenir shops.'),
 'vaduz-h3': (None, None, '2000년 완공된 검은 큐브 모양 건물의 국립 미술관으로, 근현대 미술을 전시합니다. 2015년 문을 연 옆 건물 힐티 아트 재단 전시관과 함께 봅니다.', 'The national art museum in a black cube completed in 2000, showing modern and contemporary art, paired with the Hilti Art Foundation building added next door in 2015.'),
 'vaduz-h4': (None, None, '리히텐슈타인 우표와 우편의 역사를 보여 주는 박물관으로, 나라 최초의 철골 건물인 ‘엥글랜더바우’ 안에 있습니다.', 'A museum of Liechtenstein’s stamps and postal history, in the Engländerbau, the country’s first steel-framed building.'),
 'vaduz-h5': ('옛 라인 다리', 'Old Rhine Bridge', '파두츠와 스위스 제벨렌을 잇는 길이 135m의 지붕 덮인 나무 다리로, 알프스 라인강에 남은 마지막 나무 다리입니다. 걸어서 국경을 건넙니다.', 'A 135 m covered wooden bridge linking Vaduz with Sevelen in Switzerland, the last wooden bridge over the Alpine Rhine; you cross the border on foot.', 'Alte Rheinbrücke Vaduz Sevelen'),
 'vaduz-h6': (None, None, '빈의 건축가 프리드리히 폰 슈미트가 설계해 19세기 후반에 지은 네오고딕 성당으로, 1997년 파두츠 대교구가 생기며 대성당이 됐습니다.', 'A neo-Gothic church designed by the Viennese architect Friedrich von Schmidt in the late 19th century, which became a cathedral when the Archdiocese of Vaduz was created in 1997.'),
 'schaan-h1': ('성 페터 예배당과 로마 요새 터', 'St Peter’s Chapel & Roman fort', '4세기 중반 로마인이 세운 작은 요새 터 위에 선 예배당으로, 요새 성벽 일부가 드러나 있습니다.', 'A chapel standing on the remains of a small Roman fort built in the mid-4th century, with parts of the fort walls exposed.', 'Kapelle St. Peter Schaan'),
 'schaan-h2': (None, None, '1888~1893년 지은 네오고딕 교회로, 높이 81m의 종탑이 리히텐슈타인에서 가장 높습니다.', 'A neo-Gothic church built 1888–1893, whose 81 m tower is the tallest in Liechtenstein.'),
 'schaan-h3': ('극장 TaK', 'TaK Theater am Kirchplatz', '리히텐슈타인의 대표 공연장으로, 독일어권 극단의 연극과 음악회·카바레·무용 공연을 올립니다.', 'Liechtenstein’s leading stage, bringing theatre companies from across the German-speaking world as well as concerts, cabaret and dance.'),
 'schaan-h4': ('두크스 전망 산책', 'Walk up to Dux', '마을 뒤 숲길로 두크스 언덕의 예배당까지 걸어 오르는 산책로로, 라인 계곡과 스위스 쪽 산이 내려다보입니다.', 'A woodland path from the village up to the chapel on the Dux hill, looking out over the Rhine valley to the Swiss mountains.', 'Dux Schaan'),
 'malbun-h1': ('말분 스키장', 'Malbun ski area', '리히텐슈타인의 유일한 스키장으로, 완만한 슬로프가 많아 가족과 초보자에게 알맞습니다.', 'Liechtenstein’s only ski area, with mostly gentle slopes suited to families and beginners.', 'Malbun Bergbahnen'),
 'malbun-h2': ('퓌르스틴 지나 길', 'Fürstin-Gina-Weg', '사레이스에서 아우크스텐베르크 능선을 따라 팔츠 산장까지 걷는 산길로, 군주비 지나의 이름을 땄습니다. 오스트리아·스위스 알프스가 둘러보입니다.', 'A ridge trail from Sareis over the Augstenberg to the Pfälzerhütte, named after Princess Gina, with views over the Austrian and Swiss Alps.', 'Fürstin-Gina-Weg Malbun'),
 'malbun-h3': ('사레이스 체어리프트', 'Sareis chairlift', '말분에서 해발 약 2,000m 사레이스 산장까지 오르는 체어리프트로, 여름에도 운행합니다.', 'A chairlift from Malbun up to the Sareis restaurant at about 2,000 m, running in summer too.', 'Sesselbahn Sareis Malbun'),
 'malbun-h4': ('팔츠 산장', 'Pfälzerhütte', '오스트리아 국경 베틀러요흐 고개(해발 2,108m)에 있는 리히텐슈타인 산악회의 산장입니다.', 'The Liechtenstein Alpine Club’s hut on the Bettlerjoch (2,108 m), right on the Austrian border.', 'Pfälzerhütte'),
 'malbun-h5': ('트리젠베르크 발저 향토 박물관', 'Walser Museum, Triesenberg', '13세기 무렵 스위스 발레에서 옮겨 온 발저인의 산간 생활을 보여 주는 트리젠베르크의 향토 박물관입니다.', 'A local museum in Triesenberg on the mountain life of the Walser, who settled here from the Swiss Valais around the 13th century.', 'Walser Heimatmuseum Triesenberg'),
}

ADD = {
 'vaduz': [
  (7, S('리히텐슈타인 국립박물관', 'Liechtenstein National Museum', '나라의 역사·자연·문화를 보여 주는 국립박물관으로, 옛 건물 두 채와 새 건물이 이어져 있습니다.', 'The national museum of Liechtenstein’s history, nature and culture, in two historic buildings joined to a new wing.', 'Liechtensteinisches Landesmuseum Vaduz', 60, 90)),
  (8, S('정부 청사와 의사당', 'Government House & Parliament', '20세기 초에 지은 정부 청사와 2008년 완공된 의사당이 광장을 사이에 두고 마주 봅니다.', 'The early-20th-century Government House faces the parliament building completed in 2008 across a square.', 'Regierungsgebäude Vaduz', 10, 15, b='no', n=OUT)),
  (9, S('붉은 집', 'Red House (Rotes Haus)', '포도밭 사이에 선 중세 말의 계단식 박공 집으로, 탑과 포도 압착장이 붙어 있습니다. 파두츠 옛 마을 미텔도르프의 상징입니다.', 'A late-medieval stepped-gable house among vineyards, with a tower and wine-press house attached, the emblem of old Vaduz (Mitteldorf).', 'Rotes Haus Vaduz', 10, 15, b='no', n=OUT)),
  (10, S('군주 와이너리', 'Princely Wine Cellars', '군주 가문의 와이너리로, 파두츠 포도밭에서 난 와인을 시음하고 살 수 있습니다.', 'The princely family’s winery, where you can taste and buy wine from the Vaduz vineyards.', 'Hofkellerei des Fürsten von Liechtenstein', 30, 60)),
 ],
 'malbun': [
  (6, S('갱글레 호수', 'Gänglesee', '말분 아래 슈테크 마을 옆 해발 1,302m의 산 호수로, 여름엔 물놀이를 하고 물가에 바비큐 자리가 있습니다.', 'A mountain lake at 1,302 m by the hamlet of Steg below Malbun, with summer swimming and barbecue spots on the shore.', 'Gänglesee Steg', 45, 60, b='no', n=FREE)),
 ],
}

IT = [
 ("  vaduz: [6, 2, 3, 4, 1, 5],\n", "  vaduz: { days: [['', 2, 6, 8, 3, 7, 4, 1]], trips: [['미텔도르프 포도밭|Mitteldorf vineyards', 9, 10], ['옛 라인 다리|Old Rhine Bridge', 5]] },\n"),
 ("  schaan: [2, 1, 3, 4, 5],\n", "  schaan: { days: [['', 2, 1, 3, 4]] },\n"),
 ("  malbun: [5, 3, 2, 4],\n", "  malbun: { days: [['', 3, 2, 4]], trips: [['스키|Skiing', 1], ['슈테크·트리젠베르크|Steg & Triesenberg', 6, 5]] },\n"),
]

VISIT = [
 ("  'vaduz-h2': v(30, 45),\n", "  'vaduz-h2': v(30, 45, { b: 'no' }),\n"),
 ("  'vaduz-h5': v(30, 45),\n", "  'vaduz-h5': v(20, 30, { b: 'no', n: '무료입니다.|Free.' }),\n"),
 ("  'vaduz-h6': v(10, 15),\n", "  'vaduz-h6': v(10, 15, { b: 'no', n: '무료입니다.|Free.' }),\n"),
 ("  'schaan-h1': v(30, 45),\n", "  'schaan-h1': v(15, 20, { b: 'no', n: '무료입니다.|Free.' }),\n"),
 ("  'schaan-h2': v(10, 15),\n", "  'schaan-h2': v(10, 15, { b: 'no', n: '무료입니다.|Free.' }),\n"),
 ("  'schaan-h4': v(90, 180),\n", "  'schaan-h4': v(60, 90, { b: 'no', n: '무료입니다.|Free.' }),\n"),
 ("  'schaan-h5': v(15, 20),\n", ''),
 ("  'malbun-h1': v(180, 360),\n", "  'malbun-h1': v(180, 360, { n: '스키 시즌은 대략 12월부터 3월까지입니다.|The ski season runs roughly December to March.' }),\n"),
 ("  'malbun-h2': v(120, 240),\n", "  'malbun-h2': v(180, 300, { b: 'no', n: '" + SUMMER + "' }),\n"),
 ("  'malbun-h4': v(45, 60),\n", "  'malbun-h4': v(30, 60, { n: '여름철에만 문을 엽니다.|Open in summer only.' }),\n"),
 ("  'malbun-h5': v(30, 45),\n", "  'malbun-h5': v(30, 45),\n"),
]


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'id: "{cid}",')
        j = c.index('highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}', f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j])
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for hid, t in REWRITE.items():
        nko, nen, dko, den = t[:4]
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        b = c[i:j]
        if nko or nen:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', b)
            b = b.replace(m.group(0), f'name: {{ ko: "{nko or m.group(1)}", en: "{nen or m.group(2)}" }}')
        b2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', b)
        assert b2 != b, hid
        if len(t) > 4:
            b2 = re.sub(r'mapsUrl: "[^"]*"', 'mapsUrl: "https://www.google.com/maps/search/?api=1&query=' + urllib.parse.quote(t[4]) + '"', b2)
        c = c[:i] + b2 + c[j:]
    i = c.index('id: "schaan-h5"')
    s = c.rindex(',\n      {', 0, i)
    e = c.index('\n      }', i) + len('\n      }')
    c = c[:s] + c[e:]
    it = rd('itinerary-central.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-central.ts', it)
    vi = rd('visit-ch.ts')
    for a, b in VISIT:
        assert vi.count(a) == 1, a[:60]
        vi = vi.replace(a, b)
    wr('visit-ch.ts', vi)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-ch.ts')
    c = reorder(c, 'vaduz', [(n, None) for n in (2, 6, 8, 3, 7, 4, 1, 9, 10, 5)])
    c = reorder(c, 'schaan', [(n, None) for n in (2, 1, 3, 4)])
    c = reorder(c, 'malbun', [(n, None) for n in (1, 3, 2, 4, 6, 5)])
    wr('cities.ts', c)
    p = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../public/highlights/schaan-5.jpg')
    if os.path.exists(p):
        os.remove(p)


if __name__ == '__main__':
    main()
