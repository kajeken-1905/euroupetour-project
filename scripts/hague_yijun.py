#!/usr/bin/env python3
"""The Hague: Yi Jun Peace Museum (user request 2026-11-04) — the 1907 Hague envoys. Hours from The Hague’s
tourism board (denhaag.com). Run once."""
import json
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, read_group, reorder, itinerary_order
from review_hr import S

ITEM = [(9, S('이준 열사 기념관(헤이그 특사)', 'Yi Jun Peace Museum (Hague envoys)', '1907년 고종의 밀명을 받은 헤이그 특사 이준·이상설·이위종이 머물던 옛 호텔 ‘드 용’ 건물로, 이준 열사가 순국한 곳입니다. 특사들이 참석을 거부당한 만국평화회의는 비넨호프의 기사의 전당에서 열렸습니다.', 'The former Hotel De Jong where the 1907 Korean envoys Yi Jun, Yi Sang-seol and Yi Wi-jong stayed on Emperor Gojong’s secret mission, and where Yi Jun died; the Peace Conference that refused them met in the Ridderzaal of the Binnenhof.', 'Yi Jun Peace Museum Wagenstraat 124 Den Haag', 30, 45,
       c='sun', s='https://denhaag.com/en/yi-jun-peace-museum', n='헤이그 관광청 기준 월~금 10:30~17:30, 토 11:00~16:00에 열고 일요일에 쉽니다. 안내 사이트마다 시간이 달라 가기 전에 확인하세요.|Per The Hague’s tourism board: Monday to Friday 10:30–17:30, Saturday 11:00–16:00, closed Sundays; listings differ, so check before going.', k='2026-11'))]


def main():
    c = rd('cities.ts')
    c = add_sights(c, 'the-hague', ITEM, 'visit-benelux.ts')
    it = rd('itinerary-central.ts')
    a = "      ['시내|City centre', 5, 3, 7, 1, 2],"
    assert it.count(a) == 1
    it = it.replace(a, "      ['시내|City centre', 9, 5, 3, 7, 1, 2],")
    wr('itinerary-central.ts', it)
    by = blocks(c, 'the-hague')
    c = reorder(c, 'the-hague', [(n, read_group(by[n])) for n in itinerary_order(it, 'the-hague', set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
