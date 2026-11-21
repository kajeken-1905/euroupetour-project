#!/usr/bin/env python3
"""Greenland step 1, 2026-11-21. Blurbs rewritten (English Wikipedia: Nuuk founded 1728 by Hans Egede, new airport 2024;
Ilulissat 350 km north of the Arctic Circle, nearly as many sled dogs as people, runway extended 2026 for Copenhagen
flights, birthplace of Knud Rasmussen; Kangerlussuaq built as the US base Bluie West-8 / Sondrestrom, Greenlandic since
1992, main hub until 2024). Cathedral text (1849, tower 1884, cathedral 1994). New: Nuuk +3 (Hans Egede House 1728,
Nuuk Art Museum, Sermitsiaq 1,210 m), Ilulissat +1 (Zion's Church, late 18th c., then the largest building in Greenland).
Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
BLURB = {
 'nuuk': ('그린란드의 수도로, 1728년 선교사 한스 에게데가 세운 세계에서 가장 작은 수도 가운데 하나입니다. 피오르 입구의 옛 식민지 항구에 붉은 목조 대성당과 그린란드에서 가장 오래된 집이 남아 있고, 국립 박물관에선 15세기 킬라키초크 미라를 봅니다. 맞은편으로 1,210m 세르미치아크 산이 솟아 있으며, 2024년 새 공항이 열려 코펜하겐에서 바로 옵니다.',
          'The capital of Greenland, founded in 1728 by the missionary Hans Egede and one of the world’s smallest capitals. The old colonial harbour at the fjord mouth keeps the red wooden cathedral and the oldest house in Greenland, the National Museum shows the 15th-century Qilakitsoq mummies, and the 1,210 m Sermitsiaq rises across the water. Since its new airport opened in 2024, flights arrive direct from Copenhagen.'),
 'ilulissat': ('북극권에서 북쪽으로 약 350km, 디스코만에 면한 그린란드 셋째 도시로, 이름이 ‘빙산들’이라는 뜻입니다. 바로 옆 유네스코 빙하 피오르에서 거대한 빙산이 쏟아져 나오고, 사람 수만큼 썰매개가 산다는 마을입니다. 극지 탐험가 크누드 라스무센이 태어난 곳이며, 2026년 활주로가 늘어나 코펜하겐 직항이 생겼습니다.',
               'Greenland’s third town, on Disko Bay about 350 km north of the Arctic Circle; its name means ‘icebergs’. Huge icebergs pour out of the UNESCO-listed icefjord next door, and the town is said to have almost as many sled dogs as people. It is the birthplace of the polar explorer Knud Rasmussen, and a longer runway opened in 2026 brought direct flights to Copenhagen.'),
 'kangerlussuaq': ('긴 피오르 끝, 그린란드 내륙 빙상과 가장 가까운 마을입니다. 2차 대전 때 미군 기지로 세워져 1992년 그린란드 마을이 됐고, 2024년 누크 새 공항이 열리기 전까지 그린란드 하늘길의 중심이었습니다. 빙하와 빙상, 사향소가 사는 툰드라를 투어로 둘러봅니다.',
                   'A settlement at the head of a long fjord, the closest to Greenland’s inland ice sheet. Built as a US base in the Second World War, it became a Greenlandic town in 1992 and was the country’s main air hub until Nuuk’s new airport opened in 2024. Glaciers, the ice sheet and musk-ox tundra are explored on tours.'),
}

REWRITE = {
 'nuuk-h3': (None, None, '옛 식민지 항구 언덕에 1849년 지은 붉은 목조 교회로, 1884년 시계탑이 더해졌고 1994년 대성당이 됐습니다. 앞에 한스 에게데 동상이 서 있습니다.', 'A red wooden church built in 1849 on the hill above the old colonial harbour, with its clock tower added in 1884; it became the cathedral in 1994. A statue of Hans Egede stands outside.'),
}

ADD = {
 'nuuk': [
  (5, S('한스 에게데 하우스', 'Hans Egede House', '1728년에 지은 그린란드에서 가장 오래된 집으로, 선교사 한스 에게데가 살았고 한때 총리 관저였습니다. 지금은 정부 공식 행사장으로 써서 밖에서 봅니다.', 'Built in 1728, the oldest house in Greenland, once home to the missionary Hans Egede and later the prime minister’s residence; now used for official government receptions and seen from outside.', 'Hans Egede House Nuuk', 10, 15, b='no', n='건물 밖에서만 봅니다.|Seen from outside only.')),
  (6, S('누크 미술관', 'Nuuk Art Museum', '그림·수채화와 동석·상아·나무 조각을 모은 미술관으로, 덴마크 화가 에마누엘 A. 페테르센의 그림 150점 넘게 소장하고 있습니다.', 'An art museum of paintings, watercolours and carvings in soapstone, ivory and wood, including more than 150 paintings by Emanuel A. Petersen.', 'Nuuk Art Museum', 45, 60)),
  (7, S('세르미치아크 산', 'Sermitsiaq', '누크에서 약 20km 떨어진 피오르 건너편의 높이 1,210m 산으로, 안장 모양 봉우리가 시내 어디서나 보입니다.', 'A 1,210 m mountain across the fjord about 20 km from Nuuk, its saddle-shaped summit visible all over town.', 'Sermitsiaq mountain Nuuk', 15, 20, b='no', n='시내에서 바라보거나 보트 투어로 가까이 갑니다.|Seen from town or up close on a boat tour.')),
 ],
 'ilulissat': [
  (5, S('시온 교회', 'Zion’s Church', '18세기 말에 지은 교회로, 세워질 당시 그린란드에서 가장 큰 건물이었습니다. 빙산이 떠 있는 바다 앞에 서 있습니다.', 'A church built in the late 18th century, at the time the largest building in Greenland, standing by the iceberg-filled sea.', 'Zion Church Ilulissat', 15, 20, b='no', n=FREE)),
 ],
}

IT = [
 ("  nuuk: { days: [['', 3, 1, 2]], trips: [['피오르 보트 투어|Fjord boat tour', 4]] },\n",
  "  nuuk: { days: [['', 3, 5, 1, 6, 2, 7]], trips: [['피오르 보트 투어|Fjord boat tour', 4]] },\n"),
]


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'id: "{cid}",')
        j = c.index('highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}', f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j])
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for hid, (nko, nen, dko, den) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        b = c[i:j]
        b2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', b)
        assert b2 != b, hid
        c = c[:i] + b2 + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-nordic.ts')
    c = reorder(c, 'nuuk', [(n, None) for n in (1, 3, 5, 2, 6, 4, 7)])
    wr('cities.ts', c)
    it = rd('itinerary-north.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    it2 = re.sub(r"  ilulissat: \{ days: \[\['', ([^\]]*)\]\]", lambda m: f"  ilulissat: {{ days: [['', {m.group(1)}, 5]]", it, count=1)
    assert it2 != it
    wr('itinerary-north.ts', it2)


if __name__ == '__main__':
    main()
