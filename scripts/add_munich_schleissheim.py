#!/usr/bin/env python3
"""2026-11-15 (user request): Schleissheim Palace added to Munich as day trip h16. Hours from schloesser-schleissheim.de
(Apr–Sep 9–18, Oct–Mar 10–16, closed Mondays except a few holidays). Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
c = rd('cities.ts')
c = add_sights(c, 'munich', [(16, S('슐라이스하임 궁전', 'Schleissheim Palace',
    '18세기 초 선제후 막스 에마누엘이 지은 바로크 궁전으로, 긴 운하와 정원 끝에 루스트하임 별궁이 있고 큰 계단실과 바로크 회화 전시가 볼거리입니다.',
    'An early-18th-century Baroque palace built for Elector Max Emanuel, with a long canal and garden leading to the Lustheim pavilion, a grand staircase and a gallery of Baroque paintings.',
    'Neues Schloss Schleißheim', 90, 120, group=DAY,
    n='뮌헨에서 S1 S반으로 오버슐라이스하임까지 약 25분, 역에서 걸어서 15분입니다. 월요일엔 쉽니다(일부 공휴일 제외).|About 25 min from Munich on the S1 to Oberschleißheim, then a 15-minute walk; closed Mondays (except a few holidays).'))],
    'visit-benelux.ts')
wr('cities.ts', c)
v = rd('visit-benelux.ts')
v, k = re.subn(r"^  'munich-h16': v\(90, 120, \{ n: ('.*?') \}\),\n",
               r"  'munich-h16': v(90, 120, { c: 'mon', s: 'https://schloesser-schleissheim.de/englisch/tourist/opening.htm', n: \1, k: '2026-11' }),\n", v, flags=re.M)
assert k == 1, 'visit line'
wr('visit-benelux.ts', v)
it = rd('itinerary-central.ts')
a = "    trips: [['다하우 추모관|Dachau Memorial', 7], ['안덱스 수도원|Andechs', 15], ['아우디 박물관|Audi museum', 9]],\n"
assert it.count(a) == 1
wr('itinerary-central.ts', it.replace(a, "    trips: [\n      ['다하우 추모관|Dachau Memorial', 7],\n      ['슐라이스하임 궁전|Schleissheim Palace', 16],\n      ['안덱스 수도원|Andechs', 15],\n      ['아우디 박물관|Audi museum', 9],\n    ],\n"))
print('ok')
