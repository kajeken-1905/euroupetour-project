#!/usr/bin/env python3
"""Batch C Austria (2026-11-21): Werfen +3 from German Wikipedia (Pfarrkirche hl. Jakobus 1652–57 by Johann Baptist von
Driesche, tower raised 1776; Werfenweng with the Bischlinghöhe gondola to 1,835 m and its pilgrimage church;
Liechtensteinklamm near St. Johann im Pongau, 1,000 m of a 4 km gorge open on boardwalks, walls up to 300 m, closed in
winter). Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights
from review_sk import S

FREE = '무료입니다.|Free.'
ADD = {'werfen': [
 (4, S('성 야고보 교구 교회', 'St James’s Parish Church', '마을 큰길의 교회로, 화재로 여러 번 다시 지어진 끝에 1652~1657년 잘츠부르크 궁정 건축가 요한 밥티스트 폰 드리셰의 설계로 지금 모습이 됐고 1776년 탑을 높였습니다.', 'The church on the main street, rebuilt after several fires; the present building went up in 1652–57 to plans by the Salzburg court architect Johann Baptist von Driesche, and the tower was raised in 1776.', 'Pfarrkirche Werfen', 10, 15, b='no', n=FREE)),
 (5, S('베르펜벵과 비슐링회에', 'Werfenweng & Bischlinghöhe', '텐넨 산맥 남쪽 기슭의 산마을로, 16세기부터 순례지였던 교회가 있고 8인승 곤돌라가 해발 1,835m 비슐링회에까지 오릅니다.', 'A mountain village at the southern foot of the Tennengebirge, with a church that has drawn pilgrims since the 16th century and an eight-seat gondola up to the Bischlinghöhe at 1,835 m.', 'Werfenweng Bischlingbahn', 120, 240, b='no')),
 (6, S('리히텐슈타인 협곡', 'Liechtensteinklamm', '장크트요한 임 퐁가우 남쪽의 협곡으로, 전체 4km 가운데 1km를 나무 데크로 걷습니다. 높이 300m까지 솟은 바위벽 사이가 몇 m밖에 안 되는 곳도 있고 끝에 폭포가 있습니다.', 'A gorge south of St. Johann im Pongau; 1 km of its 4 km is open on wooden walkways, between rock walls up to 300 m high that close in to a few metres, with a waterfall at the end.', 'Liechtensteinklamm', 60, 90, n='겨울철엔 닫습니다.|Closed in winter.')),
]}


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-central.ts')
    wr('cities.ts', c)
    it = rd('itinerary-central.ts')
    a = "  werfen: [1, 2, 3],\n"
    assert it.count(a) == 1
    wr('itinerary-central.ts', it.replace(a, "  werfen: { days: [['', 1, 2, 3, 4]], trips: [['리히텐슈타인 협곡|Liechtensteinklamm', 6], ['베르펜벵|Werfenweng', 5]] },\n"))


if __name__ == '__main__':
    main()
