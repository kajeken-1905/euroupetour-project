#!/usr/bin/env python3
"""San Marino step 1 (City of San Marino, Borgo Maggiore), 2026-11-20. Blurbs and descriptions rewritten; the Second
Tower (Cesta) and its arms museum are closed for works (museidistato.sm, 2026-11). New sights: San Marino 5 (Palazzo
Pubblico, Third Tower Montale, Witches' Passage, State Museum, Pinacoteca San Francesco), Borgo Maggiore 1 (Sanctuary of
the Consolation). Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
MDS = 'https://www.museidistato.sm/'
CLOSED = '11월 2일 오후, 12월 25일, 1월 1일은 쉽니다.|Closed on the afternoon of 2 November, 25 December and 1 January.'

BLURB = {
 'san-marino-city': ('티타노산 능선 위의 세계에서 가장 오래된 공화국의 수도. 성벽 안 구시가에 정부 청사 팔라초 푸블리코와 대성당이 있고, 절벽을 따라 세 개의 탑이 이어져 아드리아해와 이탈리아 평야가 내려다보입니다.',
                     'Capital of the world’s oldest surviving republic, on the ridge of Mount Titano. The walled old town holds the Palazzo Pubblico and the basilica, and three towers line the cliff edge, looking out over the Adriatic and the Italian plain.'),
 'borgo-maggiore': ('티타노산 기슭의 옛 시장 마을로, 아케이드 광장에서 지금도 장이 서고 케이블카로 구시가까지 2분 만에 올라갑니다.',
                    'The old market town at the foot of Mount Titano, where the arcaded square still holds a market and a cable car climbs to the old town in two minutes.'),
}

REWRITE = {
 'san-marino-city-h1': ('제1탑 과이타', 'First Tower (Guaita)', '11세기에 처음 세운 세 탑 중 가장 오래되고 큰 요새로, 두 겹 성벽 안의 망루에 오르면 절벽 아래 평야와 바다가 펼쳐집니다.', 'The oldest and largest of the three towers, first built in the 11th century: climb its watchtower inside two rings of walls for views over the plain and the sea.'),
 'san-marino-city-h2': ('제2탑 체스타', 'Second Tower (Cesta)', '티타노산 가장 높은 곳(755m)에 선 탑으로, 세 탑을 잇는 능선 산책로의 가운데에 있습니다. 안에 옛 무기 박물관이 있습니다.', 'The tower on the highest point of Mount Titano (755 m), halfway along the ridge path linking the three towers; it houses a museum of historic arms.'),
 'san-marino-city-h3': ('산마리노 대성당', None, '나라를 세운 성 마리누스의 유해를 모신 1838년 신고전주의 성당으로, 코린트식 기둥이 늘어선 정면이 특징입니다.', 'The Neoclassical basilica of 1838 holding the relics of St Marinus, the republic’s founder, behind a portico of Corinthian columns.'),
 'borgo-maggiore-h1': (None, None, '보르고 마조레와 구시가를 2분 만에 잇는 케이블카로, 올라가는 동안 마을과 평야가 내려다보입니다.', 'The cable car linking Borgo Maggiore with the old town in two minutes, with views of the village and the plain on the way up.'),
 'borgo-maggiore-h2': (None, None, '아케이드가 둘러싼 마을 중심 광장으로, 시계탑이 서 있고 중세부터 이어진 목요일 장이 지금도 열립니다.', 'The arcaded main square with its clock tower, where the Thursday market held since the Middle Ages still takes place.'),
}

ADD = {
 'san-marino-city': [
  (4, S('팔라초 푸블리코', 'Palazzo Pubblico', '리베르타 광장의 정부 청사로, 집정관과 의회가 일하는 곳입니다. 중세 시청을 본떠 19세기 말에 지었고, 여름엔 광장에서 근위대 교대식이 열립니다.', 'The seat of government on Piazza della Libertà, where the Captains Regent and parliament sit; built in the late 19th century in the style of a medieval town hall, with the changing of the guard on the square in summer.', 'Palazzo Pubblico San Marino', 20, 30,
        c='daily', s=MDS, n=CLOSED)),
  (5, S('제3탑 몬탈레', 'Third Tower (Montale)', '능선 끝의 가장 작은 13세기 탑으로, 안에는 들어갈 수 없지만 숲길을 따라 가까이 가 볼 수 있습니다.', 'The smallest tower, from the 13th century, at the end of the ridge; it cannot be entered, but a woodland path leads right up to it.', 'Torre Montale San Marino', 15, 20, b='no', n='내부는 공개하지 않습니다. 외관은 무료로 볼 수 있습니다.|Not open inside; the exterior is free to see.')),
  (6, S('마녀의 길 (파소 델레 스트레게)', 'Witches’ Passage', '제1탑과 제2탑을 잇는 절벽 위 성벽 길로, 탑 사진을 찍기 가장 좋은 곳입니다.', 'The walled path along the cliff between the First and Second Towers, the best spot for photos of the towers.', 'Passo delle Streghe San Marino', 15, 20, b='no', n=FREE)),
  (7, S('국립 박물관', 'State Museum', '17세기 저택에 자리한 박물관으로, 티타노산 일대에서 나온 유물과 산마리노의 그림·주화를 전시합니다.', 'A museum in a 17th-century mansion showing finds from around Mount Titano and San Marino’s art and coins.', 'Museo di Stato San Marino', 45, 60, c='daily', s=MDS, n=CLOSED)),
  (8, S('산 프란체스코 미술관', 'Pinacoteca San Francesco', '구시가 정문 옆 옛 프란치스코 수도원의 15세기 회랑에 마련된 미술관으로, 14~18세기 종교화와 성물을 보여 줍니다.', 'A gallery in the 15th-century cloister of the old Franciscan convent by the main town gate, with religious paintings and objects from the 14th to 18th centuries.', 'Museo Pinacoteca San Francesco San Marino', 30, 45, c='daily', s=MDS, n=CLOSED)),
 ],
 'borgo-maggiore': [
  (3, S('위안의 성모 성소', 'Sanctuary of Our Lady of Consolation', '건축가 조반니 미켈루치가 설계해 1967년 완공한 현대 성당으로, 산을 닮은 콘크리트 지붕이 특징입니다.', 'A modern church designed by Giovanni Michelucci and completed in 1967, known for its mountain-like concrete roof.', 'Santuario Beata Vergine della Consolazione Borgo Maggiore', 15, 20, b='no', n=FREE)),
 ],
}

IT = [
 ("  'san-marino-city': [3, 1, 2],\n", "  'san-marino-city': { days: [['', 8, 7, 4, 3, 1, 6, 2, 5]] },\n"),
 ("  'borgo-maggiore': [2, 1],\n", "  'borgo-maggiore': { days: [['', 2, 3, 1]] },\n"),
]

VISIT = [
 ("  'san-marino-city-h1': v(40, 45, { c: 'daily', s: 'https://www.museidistato.sm/', n: '두 탑을 묶은 통합권이 있습니다. 11월 2일 오후, 12월 25일, 1월 1일은 쉽니다.|A combined ticket covers both towers. Closed on the afternoon of 2 November, 25 December and 1 January.', k: '2026-10' }),",
  "  'san-marino-city-h1': v(40, 45, { c: 'daily', s: 'https://www.museidistato.sm/', n: '11월 2일 오후, 12월 25일, 1월 1일은 쉽니다. 제2탑은 공사로 닫혀 있어 지금은 제1탑만 들어갈 수 있습니다.|Closed on the afternoon of 2 November, 25 December and 1 January. The Second Tower is closed for works, so only the First Tower can be entered for now.', k: '2026-11' }),"),
 ("  'san-marino-city-h2': v(30, 40, { c: 'daily', s: 'https://www.museidistato.sm/', n: '11월 2일 오후, 12월 25일, 1월 1일은 쉽니다.|Closed on the afternoon of 2 November, 25 December and 1 January.', k: '2026-10' }),",
  "  'san-marino-city-h2': v(10, 15, { s: 'https://www.museidistato.sm/', n: '탑 내부와 무기 박물관은 공사로 문을 닫았습니다(공식 사이트, 2026년 11월). 다시 여는 날짜는 발표되지 않았고, 탑 바깥과 능선 산책로는 걸을 수 있습니다.|The tower and its arms museum are closed for works (official site, November 2026); no reopening date has been announced. The outside and the ridge path remain open.', k: '2026-11' }),"),
]


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'id: "{cid}",')
        j = c.index('highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}',
                     f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j], flags=re.S)
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for hid, t in REWRITE.items():
        ko, en, dko, den = t[:4]
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko or en:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', blk)
            blk = blk.replace(m.group(0), f'name: {{ ko: "{ko or m.group(1)}", en: "{en or m.group(2)}" }}')
        blk2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        assert blk2 != blk, hid
        c = c[:i] + blk2 + c[j:]
    it = rd('itinerary-it.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-it.ts', it)
    vi = rd('visit-it.ts')
    for a, b in VISIT:
        assert vi.count(a) == 1, a[:70]
        vi = vi.replace(a, b)
    wr('visit-it.ts', vi)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-it.ts')
    c = reorder(c, 'san-marino-city', [(n, None) for n in (8, 7, 4, 3, 1, 6, 2, 5)])
    c = reorder(c, 'borgo-maggiore', [(n, None) for n in (2, 3, 1)])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
