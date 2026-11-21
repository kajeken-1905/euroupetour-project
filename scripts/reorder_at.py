#!/usr/bin/env python3
"""2026-11-21 (user request): Austria city order by region with cityGroups, and Vienna sights grouped by district."""
import re
from add_daytrip_places import rd, wr
from sight_order import reorder

GROUPS = [('빈과 도나우강', 'Vienna & the Danube', ['vienna', 'durnstein', 'linz']),
          ('잘츠부르크와 잘츠카머구트', 'Salzburg & the Salzkammergut', ['salzburg', 'hallstatt', 'bad-ischl', 'werfen', 'zell-am-see']),
          ('티롤과 서부', 'Tyrol & the west', ['innsbruck', 'kitzbuhel', 'bregenz']),
          ('남부', 'Southern Austria', ['graz', 'klagenfurt'])]
OLD = "    cityIds: ['vienna', 'salzburg', 'innsbruck', 'graz', 'hallstatt', 'linz', 'durnstein', 'bad-ischl', 'werfen', 'zell-am-see', 'kitzbuhel', 'bregenz', 'klagenfurt'],\n"
INNER = ('구시가', 'Inner City')
RING = ('링슈트라세', 'The Ringstrasse')
SOUTH = ('링 남쪽', 'South of the Ring')
OUTER = ('도심 밖', 'Beyond the centre')
DAY = ('근교 당일치기', 'Day trip')
VIENNA = [(2, INNER), (5, INNER), (17, INNER), (10, INNER), (7, INNER),
          (4, RING), (9, RING), (11, RING), (16, RING), (15, RING),
          (12, SOUTH), (13, SOUTH), (3, SOUTH),
          (1, OUTER), (14, OUTER), (6, OUTER), (18, OUTER),
          (8, DAY)]


def main():
    s = rd('countries.ts')
    assert s.count(OLD) == 1
    ids = [c for _, _, cs in GROUPS for c in cs]
    assert sorted(ids) == sorted(re.findall(r"'([a-z-]+)'", OLD))
    lines = ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(c) for c in cs)}] }},\n" for ko, en, cs in GROUPS)
    s = s.replace(OLD, f"    cityIds: [{', '.join(repr(c) for c in ids)}],\n    cityGroups: [\n{lines}    ],\n")
    wr('countries.ts', s)
    c = rd('cities.ts')
    c = reorder(c, 'vienna', VIENNA)
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
