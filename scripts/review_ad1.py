#!/usr/bin/env python3
"""Andorra step 1 (Andorra la Vella, Pas de la Casa, Ordino), 2026-11-21. The template sights are replaced with real
places: Pas de la Casa h2 duty-free shops, h3 Port d'Envalira, h4 Pessons lakes, h5 (generic ridge views) removed;
Andorra la Vella h5 becomes the old quarter; Ordino h2 becomes Casa d'Areny-Plandolit (Casa Rossell is a private
listed house), h3 renamed Sorteny. New: Andorra la Vella +2 (Santa Coloma church, Dalí sculpture), Ordino +4
(Museu de la Miniatura, Tristaina lakes, Sant Martí de la Cortinada, Iron Route). Canillo sights are kept for step 2.
Run once."""
import os
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
BLURB = {
 'andorra-la-vella': ('피레네산맥 해발 1,000m 계곡에 자리한 유럽에서 가장 높은 수도. 옛 의회 카사 데 라 발이 있는 구시가 아래로 면세 상점이 늘어선 메리체이 거리가 이어지고, 이웃 에스칼데스엥고르다니에는 온천 스파 칼데아가 있습니다.',
                      'Europe’s highest capital, in a Pyrenean valley at about 1,000 m. Below the old quarter and its former parliament, Casa de la Vall, the duty-free shops of Avinguda Meritxell run on into neighbouring Escaldes-Engordany and the Caldea thermal spa.'),
 'pas-de-la-casa': ('프랑스 국경 해발 2,100m의 스키 마을로, 겨울엔 그랑발리라 스키장의 동쪽 관문이고 1년 내내 프랑스에서 넘어온 면세 쇼핑객으로 붐빕니다. 위쪽 엔발리라 고개를 넘으면 안도라 안쪽 계곡입니다.',
                    'A ski village at 2,100 m on the French border: the eastern gateway to the Grandvalira ski area in winter, busy all year with duty-free shoppers from France. Over the Envalira pass above lie the valleys of inner Andorra.'),
 'ordino': ('안도라 북쪽 계곡의 조용한 교구로, 돌집 마을에 옛 귀족 저택 박물관과 로마네스크 성당이 있습니다. 계곡 위로 소르테니 자연공원과 아르칼리스 스키장, 트리스타이나 호수가 이어집니다.',
            'A quiet parish in Andorra’s northern valley, with a stone village, a noble house museum and Romanesque churches; above it lie the Sorteny nature park, the Arcalís ski area and the Tristaina lakes.'),
}

REWRITE = {
 'andorra-la-vella-h1': (None, None, '1580년 지은 돌집으로, 1702년부터 2011년까지 안도라 의회가 열린 곳입니다. 가이드 투어로 의회실과 옛 법정을 봅니다.', 'A stone house of 1580 that was the seat of Andorra’s parliament from 1702 to 2011; guided tours show the council chamber and old courtroom.'),
 'andorra-la-vella-h2': (None, None, '구시가 입구의 로마네스크 기원 성당으로, 12세기 후진과 바로크 제단화가 남아 있습니다.', 'A church of Romanesque origin at the entrance to the old quarter, with a 12th-century apse and Baroque altarpieces.'),
 'andorra-la-vella-h3': ('메리체이 거리', None, '안도라라베야에서 에스칼데스엥고르다니까지 이어지는 큰길로, 백화점과 면세 상점이 늘어선 쇼핑 중심가입니다.', 'The main road from Andorra la Vella into Escaldes-Engordany, lined with department stores and duty-free shops.'),
 'andorra-la-vella-h4': (None, 'Caldea spa', '에스칼데스엥고르다니의 유리 첨탑 온천 스파로, 산에서 솟는 온천수로 실내외 라군을 채웁니다.', 'The glass-spired thermal spa in Escaldes-Engordany, whose indoor and outdoor lagoons are filled with mountain hot-spring water.'),
 'andorra-la-vella-h5': ('구시가 (바리 안티크)', 'Old quarter (Barri Antic)', '카사 데 라 발 주변의 좁은 돌길 동네로, 강이 내려다보이는 작은 광장과 옛 집들이 남아 있습니다.', 'The narrow stone lanes around Casa de la Vall, with old houses and small squares above the river.', 'Barri Antic Andorra la Vella'),
 'pas-de-la-casa-h1': (None, None, '안도라 6개 교구에 걸친 피레네 최대 스키장으로, 파스 데 라 카사에서 바로 리프트를 탑니다.', 'The largest ski area in the Pyrenees, spread over six Andorran parishes; lifts leave straight from Pas de la Casa.'),
 'pas-de-la-casa-h2': ('면세 상점가', 'Duty-free shops', '마을 큰길을 따라 술·담배·향수·전자제품을 파는 면세 상점과 대형 매장이 줄지어 있습니다.', 'Duty-free shops and big stores selling drink, tobacco, perfume and electronics line the main street.', 'Pas de la Casa shopping'),
 'pas-de-la-casa-h3': ('엔발리라 고개', 'Port d’Envalira', '해발 2,408m로 피레네산맥에서 가장 높은 포장도로 고개로, 파스 데 라 카사와 안도라 안쪽 계곡을 잇습니다.', 'At 2,408 m the highest paved road pass in the Pyrenees, linking Pas de la Casa with the valleys of inner Andorra.', 'Port d’Envalira'),
 'pas-de-la-casa-h4': ('페손스 호수', 'Pessons lakes', '그라우 로이그에서 출발해 빙하 권곡의 호수 여러 개를 도는 여름 산행 코스입니다.', 'A summer hike from Grau Roig round a glacial cirque of several lakes.', 'Estanys dels Pessons'),
 'ordino-h1': (None, None, '돌로 지은 집과 좁은 골목이 남아 있는 교구 중심 마을로, 작은 광장 주변에 성당과 박물관이 모여 있습니다.', 'The parish’s main village of stone houses and narrow lanes, with its church and museums round a small square.'),
 'ordino-h2': ('카사 다레니플란돌리트', 'Casa d’Areny-Plandolit', '1633년 지은 안도라 귀족 가문의 저택 박물관으로, 19세기 가구와 생활 모습을 그대로 보여 줍니다.', 'The 1633 mansion of an Andorran noble family, now a museum keeping its 19th-century furnishings and daily life.', 'Casa d’Areny-Plandolit Ordino'),
 'ordino-h3': ('소르테니 계곡 자연공원', 'Sorteny Valley Natural Park', '고산 식물 800여 종이 자라는 계곡 자연공원으로, 여름에 들꽃 사이로 산책로와 산장이 있습니다.', 'A valley nature park with some 800 alpine plant species, with trails and a mountain refuge among the summer wildflowers.'),
 'ordino-h4': (None, 'Ordino Arcalís', '북쪽 끝 고지대의 스키장으로, 여름엔 산악자전거와 산행 거점이 됩니다.', 'The high ski area at the northern end of the valley, a base for mountain biking and hiking in summer.'),
 'ordino-h5': (None, None, '마을 한가운데의 성당으로, 바로크 제단화와 철제 공예 난간이 남아 있습니다.', 'The church in the middle of the village, with Baroque altarpieces and wrought-iron work.'),
}

ADD = {
 'andorra-la-vella': [
  (6, S('산타 콜로마 성당', 'Santa Coloma Church', '시내 남쪽 산타 콜로마 마을의 프리로마네스크 성당으로, 둥근 종탑이 드물게 남아 있습니다.', 'A pre-Romanesque church in Santa Coloma, south of the centre, with a rare round bell tower.', 'Església de Santa Coloma Andorra', 15, 20)),
  (7, S('달리 조각 ‘시간의 고귀함’', 'Dalí sculpture (La Noblesse du Temps)', '로톤다 광장에 선 살바도르 달리의 녹아내리는 시계 청동 조각입니다.', 'Salvador Dalí’s bronze melting-clock sculpture on Plaça de la Rotonda.', 'La Noblesse du Temps Dalí Andorra', 5, 10, b='no', n=FREE)),
 ],
 'ordino': [
  (6, S('미니어처 박물관', 'Museu de la Miniatura', '우크라이나 출신 미세 공예가 니콜라이 시아드리스티의 작품을 확대경으로 보는 작은 박물관입니다.', 'A small museum of micro-miniatures by the Ukrainian artist Nikolai Siadristy, seen through magnifying lenses.', 'Museu de la Miniatura Ordino', 30, 40, n='유료입니다.|Ticketed.')),
  (7, S('트리스타이나 호수', 'Tristaina lakes', '아르칼리스 위쪽 빙하 권곡의 호수 세 개를 도는 여름 산행 코스입니다.', 'A summer hike round three lakes in a glacial cirque above Arcalís.', 'Estanys de Tristaina', 150, 240, b='no', n='눈이 녹은 여름철에 걷습니다.|Walked in summer once the snow has gone.')),
  (8, S('라 코르티나다 산 마르티 성당', 'Sant Martí de la Cortinada', '오르디노 북쪽 라 코르티나다 마을의 로마네스크 성당으로, 12세기 벽화가 남아 있습니다.', 'A Romanesque church in La Cortinada, north of Ordino, with 12th-century wall paintings.', 'Sant Martí de la Cortinada', 15, 20)),
  (9, S('철의 길', 'Iron Route (Ruta del Ferro)', '옛 제철 유적을 따라 라 코르티나다와 요르츠 사이 강가를 걷는 산책로로, 철 조각 작품이 놓여 있습니다.', 'A riverside walk between La Cortinada and Llorts past old ironworks, dotted with iron sculptures.', 'Ruta del Ferro Ordino', 60, 90, b='no', n=FREE)),
 ],
}

IT = [
 ("  'andorra-la-vella': [1, 2, 3, 5, 4],\n", "  'andorra-la-vella': { days: [['', 5, 1, 2, 3, 7, 4]], trips: [['산타 콜로마|Santa Coloma', 6]] },\n"),
 ("  'pas-de-la-casa': [3, 2, 4, 5],\n", "  'pas-de-la-casa': { days: [['', 2, 1]], trips: [['엔발리라 고개·페손스 호수|Envalira & Pessons', 3, 4]] },\n"),
 ("  ordino: { days: [['', 1, 2, 5]], trips: [['아르칼리스|Arcalís', 4]] },\n",
  "  ordino: { days: [['', 1, 2, 5, 6], ['', 9, 8, 3]], trips: [['아르칼리스·트리스타이나|Arcalís & Tristaina', 4, 7]] },\n"),
]

VISIT = [
 ("  'andorra-la-vella-h2': v(10, 15),\n", "  'andorra-la-vella-h2': v(10, 15, { b: 'no', n: '무료입니다.|Free.' }),\n"),
 ("  'andorra-la-vella-h3': v(60, 90),\n", "  'andorra-la-vella-h3': v(60, 90, { b: 'no' }),\n"),
 ("  'andorra-la-vella-h5': v(30, 45),\n", "  'andorra-la-vella-h5': v(30, 45, { b: 'no', n: '무료입니다.|Free.' }),\n"),
 ("  'pas-de-la-casa-h2': v(60, 90),\n", "  'pas-de-la-casa-h2': v(60, 90, { b: 'no' }),\n"),
 ("  'pas-de-la-casa-h3': v(30, 45),\n", "  'pas-de-la-casa-h3': v(20, 30, { b: 'no', n: '겨울엔 눈으로 체인이 필요하거나 길이 막힐 수 있습니다. 엔발리라 터널로 고개를 피해 갈 수 있습니다(유료).|In winter snow can mean chains or closures; the Envalira tunnel (toll) bypasses the pass.' }),\n"),
 ("  'pas-de-la-casa-h4': v(120, 240),\n", "  'pas-de-la-casa-h4': v(180, 240, { b: 'no', n: '눈이 녹은 여름철에 걷습니다.|Walked in summer once the snow has gone.' }),\n"),
 ("  'pas-de-la-casa-h5': v(20, 30),\n", ''),
 ("  'ordino-h2': v(40, 45),\n", "  'ordino-h2': v(40, 60, { n: '유료입니다.|Ticketed.' }),\n"),
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
            import urllib.parse
            b2 = re.sub(r'mapsUrl: "[^"]*"', 'mapsUrl: "https://www.google.com/maps/search/?api=1&query=' + urllib.parse.quote(t[4]) + '"', b2)
        c = c[:i] + b2 + c[j:]
    # drop the generic pas-de-la-casa-h5
    i = c.index('id: "pas-de-la-casa-h5"')
    s = c.rindex(',\n      {', 0, i)
    e = c.index('\n      }', i) + len('\n      }')
    c = c[:s] + c[e:]
    it = rd('itinerary-iberia.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-iberia.ts', it)
    vi = rd('visit-iberia.ts')
    for a, b in VISIT:
        assert vi.count(a) == 1, a[:60]
        vi = vi.replace(a, b)
    wr('visit-iberia.ts', vi)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-iberia.ts')
    c = reorder(c, 'andorra-la-vella', [(n, None) for n in (5, 1, 2, 3, 7, 4, 6)])
    c = reorder(c, 'pas-de-la-casa', [(n, None) for n in (2, 1, 3, 4)])
    c = reorder(c, 'ordino', [(n, None) for n in (1, 2, 5, 6, 9, 8, 3, 4, 7)])
    wr('cities.ts', c)
    p = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../public/highlights/pas-de-la-casa-5.jpg')
    if os.path.exists(p):
        os.remove(p)


if __name__ == '__main__':
    main()
