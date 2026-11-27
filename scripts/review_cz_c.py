#!/usr/bin/env python3
"""Czechia 2nd pass (2026-11-26, user approved): +3 sights. Facts (Wikipedia en/cs): National Museum historical building
at the top of Wenceslas Square (1891, reopened 2018 after renovation); Letná park above the Vltava with the Prague
Metronome (1991) on the plinth of the demolished Stalin monument; Kroměříž Velké náměstí, arcaded main square of the
town whose gardens and castle are UNESCO-listed. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
VF = 'visit-central.ts'
ADD = {
 'prague': [
  (24, S('국립 박물관', 'National Museum', '바츨라프 광장 꼭대기의 1891년 신르네상스 건물로, 2018년 보수를 마치고 다시 열었습니다. 자연사·역사 전시와 중앙 홀의 돔이 볼거리입니다.', 'The 1891 Neo-Renaissance building at the top of Wenceslas Square, reopened in 2018 after renovation, with natural-history and history galleries and a domed pantheon.', 'National Museum Prague', 90, 150)),
  (25, S('레트나 공원과 메트로놈', 'Letná Park & Metronome', '블타바강 위 언덕 공원으로, 철거된 스탈린 동상 자리에 1991년 거대한 메트로놈이 섰습니다. 다리들과 구시가가 한눈에 보입니다.', 'A hilltop park above the Vltava, where a giant metronome has stood since 1991 on the plinth of the demolished Stalin monument; views over the bridges and the Old Town.', 'Prague Metronome', 45, 60, b='no', n=FREE)),
 ],
 'kromeriz': [
  (4, S('대광장 (벨케 나메스티)', 'Great Square (Velké náměstí)', '아케이드 건물과 성 입구가 둘러싼 크로메르지시의 중앙 광장입니다.', 'Kroměříž’s main square, ringed by arcaded houses and the castle entrance.', 'Velké náměstí Kroměříž', 20, 30, b='no', n=FREE)),
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
    c = place(c, 'prague', [(16, [(24, 'same')]), (6, [(25, 'same')])])
    c = place(c, 'kromeriz', [(1, [(4, None)])])
    wr('cities.ts', c)
    it = rd('itinerary-north.ts')
    R = [
     ("['구시가와 유대인 지구|Old Town & Jewish Quarter', 19, 3, 4, 7, 6, 8, 18],", "['구시가와 유대인 지구|Old Town & Jewish Quarter', 19, 3, 4, 7, 6, 25, 8, 18],"),
     ("['신시가와 비셰흐라드|New Town & Vyšehrad', 16, 11, 15],", "['신시가와 비셰흐라드|New Town & Vyšehrad', 16, 24, 11, 15],"),
     ('kromeriz: {"days": [["", 1, 2, 3]]},', 'kromeriz: {"days": [["", 4, 1, 2, 3]]},'),
    ]
    for a, b in R:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)


if __name__ == '__main__':
    main()
