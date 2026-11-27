#!/usr/bin/env python3
"""Norway 2nd pass (2026-11-27, user approved): +4 sights in existing cities. Facts (Wikipedia en/no): Astrup Fearnley
Museum in Renzo Piano's 2012 building on Tjuvholmen; Deichman Bjørvika, Oslo's main public library opened in 2020
next to the Opera; Bergen Cathedral, with a cannonball from the 1665 Battle of Vågen in its tower wall; Ringve Music
Museum, the national museum of music and instruments at Ringve manor with its botanical garden. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
VF = 'visit-nordic.ts'
ADD = {
 'oslo': [
  (17, S('아스트루프 피언리 현대미술관', 'Astrup Fearnley Museum', '튜브홀멘 끝의 렌초 피아노가 설계한 2012년 건물에 있는 현대미술관입니다. 바다 쪽 조각 공원은 무료로 걸어 다닐 수 있습니다.', 'A contemporary art museum in Renzo Piano’s 2012 building at the tip of Tjuvholmen; the seaside sculpture park is free to wander.', 'Astrup Fearnley Museet', 60, 90)),
  (18, S('다이크만 비에르비카 도서관', 'Deichman Bjørvika library', '2020년 오페라 하우스 옆에 문을 연 오슬로 중앙 도서관입니다. 위층 큰 창으로 피오르와 시내가 내려다보입니다.', 'Oslo’s main public library, opened in 2020 beside the Opera House; big upper-floor windows look over the fjord and the city.', 'Deichman Bjørvika', 30, 45, b='no', n=FREE)),
 ],
 'bergen': [
  (12, S('베르겐 대성당', 'Bergen Cathedral', '13세기에 시작된 성당으로, 1665년 보겐 해전 때 날아든 포탄이 탑 벽에 박혀 있습니다.', 'A cathedral begun in the 13th century, with a cannonball from the 1665 Battle of Vågen still lodged in its tower wall.', 'Bergen Cathedral', 20, 30, b='no', n=FREE)),
 ],
 'trondheim': [
  (10, S('링베 음악 박물관', 'Ringve Music Museum', '링베 저택에 자리한 노르웨이 국립 음악·악기 박물관으로, 식물원과 함께 있습니다.', 'Norway’s national museum of music and instruments at Ringve manor, beside a botanical garden.', 'Ringve Music Museum', 90, 120)),
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
    c = place(c, 'oslo', [(2, [(18, 'same')]), (4, [(17, 'same')])])
    c = place(c, 'bergen', [(1, [(12, 'same')])])
    c = place(c, 'trondheim', [(8, [(10, None)])])
    wr('cities.ts', c)
    it = rd('itinerary-north.ts')
    R = [
     ("['시내 중심과 항구|Centre & harbour', 1, 14, 9, 10, 8, 4],", "['시내 중심과 항구|Centre & harbour', 1, 14, 9, 10, 8, 4, 17],"),
     ("['뷔그되위와 오페라 하우스|Bygdøy & the Opera House', 13, 11, 12, 2, 6],", "['뷔그되위와 오페라 하우스|Bygdøy & the Opera House', 13, 11, 12, 2, 18, 6],"),
     ("['브뤼겐과 플뢰위엔|Bryggen & Fløyen', 3, 1, 7, 10, 2],", "['브뤼겐과 플뢰위엔|Bryggen & Fløyen', 3, 1, 12, 7, 10, 2],"),
     ("trondheim: { days: [['', 1, 6, 4, 2, 3, 7], ['', 5, 8]],", "trondheim: { days: [['', 1, 6, 4, 2, 3, 7], ['', 5, 8, 10]],"),
    ]
    for a, b in R:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)


if __name__ == '__main__':
    main()
