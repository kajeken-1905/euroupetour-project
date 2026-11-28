#!/usr/bin/env python3
"""Finland 2nd pass (2026-11-28, user approved): +4 sights in existing cities. Facts (Wikipedia en/fi): Amos Rex,
art museum opened 2018 under the Lasipalatsi square with domed skylights; National Museum of Finland, building by
Gesellius, Lindgren & Saarinen opened 1916, entrance-hall ceiling frescoes from the Kalevala by Akseli Gallen-Kallela;
Old Market Hall (Vanha kauppahalli), opened 1889 by the South Harbour; Turku Market Hall (Kauppahalli), opened 1896.
Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S
from review_se_c import groups_of, ins

VF = 'visit-nordic.ts'
ADD = {
 'helsinki': [
  (16, S('아모스 렉스 미술관', 'Amos Rex', '2018년 라시팔라치 광장 아래에 문을 연 미술관으로, 광장 위로 솟은 둥근 채광창 언덕이 그대로 놀이터이자 전망대가 됩니다.', 'An art museum opened in 2018 beneath the Lasipalatsi square; its domed skylights rise from the square as mounds people climb on.', 'Amos Rex Helsinki', 60, 90)),
  (17, S('핀란드 국립박물관', 'National Museum of Finland', '1916년 문을 연 게셀리우스·린드그렌·사리넨 설계의 건물로, 입구 홀 천장에 악셀리 갈렌칼레라의 칼레발라 프레스코가 있습니다.', 'Housed in a building by Gesellius, Lindgren and Saarinen opened in 1916, with Akseli Gallen-Kallela’s Kalevala frescoes on the entrance-hall ceiling.', 'Kansallismuseo Helsinki', 90, 120)),
  (18, S('올드 마켓 홀', 'Old Market Hall', '1889년 남항 옆에 문을 연 붉은 벽돌 시장 건물로, 연어 수프·훈제 생선·핀란드 빵을 파는 가게들이 모여 있습니다.', 'A red-brick market hall opened in 1889 by the South Harbour, lined with stalls selling salmon soup, smoked fish and Finnish breads.', 'Vanha kauppahalli Helsinki', 20, 45, b='no')),
 ],
 'turku': [
  (9, S('투르쿠 마켓 홀', 'Turku Market Hall', '1896년에 문을 연 시장 건물로, 나무 가게 칸이 줄지어 있고 치즈·생선·빵과 작은 카페가 들어서 있습니다.', 'A market hall opened in 1896, lined with wooden stalls selling cheese, fish and bread, plus small cafés.', 'Turun kauppahalli', 20, 45, b='no')),
 ],
}


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
    c = place(c, 'helsinki', [(4, [(18, 'same')]), (11, [(17, 'same')]), (12, [(16, 'same')])])
    c = place(c, 'turku', [(3, [(9, None)])])
    wr('cities.ts', c)
    it = rd('itinerary-north.ts')
    R = [
     ("['원로원 광장과 항구|Senate Square & harbour', 4, 1, 8, 7, 3],", "['원로원 광장과 항구|Senate Square & harbour', 4, 18, 1, 8, 7, 3],"),
     ("['중앙역과 퇴욀뢰|Central Station & Töölö', 10, 9, 11, 12, 5, 14, 6],", "['중앙역과 퇴욀뢰|Central Station & Töölö', 10, 9, 11, 17, 12, 16, 5, 14, 6],"),
     ("turku: { days: [['', 2, 7, 6, 4, 3], ['', 5, 1]],", "turku: { days: [['', 2, 7, 6, 4, 3, 9], ['', 5, 1]],"),
    ]
    for a, b in R:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)


if __name__ == '__main__':
    main()
