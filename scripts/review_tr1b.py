#!/usr/bin/env python3
"""Türkiye step 1 addition (user request 2026-11-18): a night in a Cappadocia cave hotel as Göreme h11, listed right
after the balloons. No single hotel is named; the note says where they are and to book ahead. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, reorder
from review_sk import S

c = rd('cities.ts')
c = add_sights(c, 'goreme', [(11, S('동굴 호텔에서 하룻밤', 'A night in a cave hotel',
    '부드러운 응회암 바위를 파서 만든 옛 동굴 집과 비둘기 집을 고친 숙소로, 아치형 돌방에서 자고 아침엔 테라스에서 열기구를 봅니다.',
    'Guesthouses carved from old cave homes and dovecotes in the soft tuff rock: sleep in an arched stone room and watch the balloons from the terrace at breakfast.',
    'Göreme cave hotel', 720, 900,
    n='괴레메·우치히사르·위르귑·오르타히사르에 많습니다. 열기구 철(4~10월)엔 일찍 예약하세요. 계단이 많은 곳이 흔합니다.|Found in Göreme, Uçhisar, Ürgüp and Ortahisar. Book early in balloon season (April–October); many involve plenty of steps.'))],
    'visit-east.ts')
by = blocks(c, 'goreme')
cur = [int(n) for n in re.findall(r'id: "goreme-h(\d+)"', c)]
order = [n for n in cur if n != 11]
order.insert(order.index(1) + 1, 11)
groups = {n: (('근교 당일치기', 'Day trip') if 'group: { ko: "근교 당일치기"' in by[n] else None) for n in order}
wr('cities.ts', reorder(c, 'goreme', [(n, groups[n]) for n in order]))
