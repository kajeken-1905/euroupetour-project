#!/usr/bin/env python3
"""Hungary 2nd pass (2026-11-27, user approved): +2 Budapest sights. Facts (Wikipedia en/hu): Museum of Fine Arts on
Heroes' Square (1906), reopened in 2018 after renovation with the restored Romanesque Hall; House of Hungarian Music in
City Park, designed by Sou Fujimoto, opened 2022. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
VF = 'visit-central.ts'
ADD = {
 'budapest': [
  (25, S('부다페스트 미술관', 'Museum of Fine Arts', '영웅 광장의 1906년 신고전주의 미술관으로, 2018년 보수 뒤 로마네스크 홀을 되살렸습니다. 유럽 거장의 회화와 고대 이집트 유물이 있습니다.', 'The 1906 Neoclassical museum on Heroes’ Square, reopened in 2018 with its restored Romanesque Hall; Old Masters and ancient Egyptian collections.', 'Museum of Fine Arts Budapest', 120, 180)),
  (26, S('헝가리 음악의 집', 'House of Hungarian Music', '시티 파크의 숲속에 2022년 문을 연 음악 박물관으로, 후지모토 소우가 나뭇잎 같은 지붕을 설계했습니다.', 'A music museum opened in 2022 in City Park, its leaf-like roof designed by Sou Fujimoto.', 'House of Music Hungary', 60, 90)),
 ],
}


def groups_of(c, cid):
    out = []
    for m in re.finditer(rf'id: "{cid}-h(\d+)"(.*?)\n      \}}', c, re.S):
        g = re.search(r'group: \{ ko: "([^"]*)", en: "([^"]*)" \}', m.group(2))
        out.append((int(m.group(1)), g.groups() if g else None))
    return out


def ins(o, after, new):
    out = []
    for n, gr in o:
        out.append((n, gr))
        if n == after:
            out += [(x, gx if gx != 'same' else gr) for x, gx in new]
    return out


def place(c, cid, steps):
    new = {n for n, _ in ADD[cid]}
    o = [x for x in groups_of(c, cid) if x[0] not in new]
    for after, items in steps:
        o = ins(o, after, items)
    return reorder(c, cid, o)


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, VF)
    c = place(c, 'budapest', [(3, [(25, 'same'), (26, 'same')])])
    wr('cities.ts', c)
    it = rd('itinerary-north.ts')
    a = "['안드라시 거리와 시티 파크|Andrássy Avenue & City Park', 12, 21, 11, 15, 4, 22, 3],"
    assert it.count(a) == 1
    wr('itinerary-north.ts', it.replace(a, "['안드라시 거리와 시티 파크|Andrássy Avenue & City Park', 12, 21, 11, 15, 4, 22, 3, 25, 26],"))


if __name__ == '__main__':
    main()
