#!/usr/bin/env python3
"""Iceland 2nd pass (2026-11-28, user approved): +4 sights in existing cities. Facts (Wikipedia en/is): Höfði, house
built 1909 for the French consul, venue of the 1986 Reagan–Gorbachev summit, used by the city for receptions (interior
not open to visitors); Tjörnin, the pond in central Reykjavík beside City Hall (1992), whose hall shows a large relief
map of Iceland; Forest Lagoon (Skógarböðin), geothermal baths opened 2022 in Vaðlaskógur forest across the fjord from
Akureyri; Hverfjall, tephra ring crater about 1 km across, formed roughly 2,500 years ago, with a trail to the rim.
The Secret Lagoon goes to the new city Flúðir instead. Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S
from review_se_c import groups_of, ins

VF = 'visit-nordic.ts'
FREE = '무료입니다.|Free.'
ADD = {
 'reykjavik': [
  (13, S('회프디 하우스', 'Höfði House', '1909년 프랑스 영사관으로 지은 하얀 목조 집으로, 1986년 레이건과 고르바초프가 정상회담을 연 곳입니다. 지금은 시의 행사장이라 안은 들어갈 수 없고 바깥만 봅니다.', 'A white timber house built in 1909 for the French consul, where Reagan and Gorbachev held their 1986 summit; now a city reception house, seen from outside only.', 'Höfði House Reykjavík', 15, 20, b='no', n='안은 공개하지 않아 바깥에서만 봅니다.|Not open inside; view it from outside.')),
  (14, S('트요르닌 호수와 시청', 'Tjörnin & City Hall', '도심 한가운데의 호수로 오리와 백조가 많고, 호숫가 시청(1992년) 홀에는 아이슬란드 전체를 본뜬 큰 입체 지도가 있습니다.', 'The pond in the heart of town, full of ducks and swans; the lakeside City Hall (1992) displays a large relief map of Iceland.', 'Tjörnin Reykjavík', 20, 40, b='no', n=FREE)),
 ],
 'akureyri': [
  (9, S('포레스트 라군', 'Forest Lagoon', '2022년 문을 연 지열 온천으로, 아퀴레이리 맞은편 바들라스코귀르 숲속에서 피오르를 내려다봅니다.', 'Geothermal baths opened in 2022 in Vaðlaskógur forest across the fjord, looking back over Akureyri.', 'Forest Lagoon Akureyri', 90, 120)),
 ],
 'myvatn': [
  (6, S('흐베르피아들 분화구', 'Hverfjall crater', '약 2,500년 전 생긴 지름 1km 남짓의 화산재 분화구로, 가장자리까지 오르는 길에서 미바튼 호수가 내려다보입니다.', 'A tephra ring crater about 1 km across, formed roughly 2,500 years ago; the trail up to the rim looks over Lake Mývatn.', 'Hverfjall', 60, 90, b='no', n=FREE)),
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
    c = place(c, 'reykjavik', [(3, [(13, 'same')]), (4, [(14, 'same')])])
    c = place(c, 'akureyri', [(3, [(9, 'same')])])
    c = place(c, 'myvatn', [(2, [(6, 'same')])])
    wr('cities.ts', c)
    it = rd('itinerary-north.ts')
    R = [
     ("['시내 중심|Downtown', 1, 8, 3, 2, 4],", "['시내 중심|Downtown', 1, 8, 13, 3, 2, 4, 14],"),
     ("  akureyri: {\n    days: [['', 1, 8, 2, 3]],", "  akureyri: {\n    days: [['', 1, 8, 2, 3, 9]],"),
     ("myvatn: { days: [['', 4, 2, 3, 1]],", "myvatn: { days: [['', 4, 2, 6, 3, 1]],"),
    ]
    for a, b in R:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)


if __name__ == '__main__':
    main()
