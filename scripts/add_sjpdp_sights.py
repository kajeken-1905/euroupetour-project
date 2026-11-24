#!/usr/bin/env python3
"""Camino review (2026-11-24): Saint-Jean-Pied-de-Port was already in the app, so only the pilgrim office and the
Route Napoléon stage to Roncesvalles are added (h6, h7). Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
C = 'saint-jean-pied-de-port'
ADD = [
 (6, S('순례자 사무소', 'Pilgrim office', '산티아고 순례길 프랑스 길의 출발점에서 순례자 여권을 발급하고, 산길 날씨와 숙소를 안내해 주는 곳입니다.', 'At the start of the Camino Francés, where pilgrims get their credential and advice on the mountain weather and beds.', 'Accueil des Pèlerins Saint-Jean-Pied-de-Port', 15, 30, b='no')),
 (7, S('나폴레옹 길 (론세스바예스까지)', 'Route Napoléon to Roncesvalles', '피레네를 넘어 스페인 론세스바예스까지 약 25km를 걷는 순례길 첫 구간으로, 오르막이 길고 험합니다.', 'The first stage of the Camino, about 25 km over the Pyrenees to Roncesvalles in Spain, with a long, hard climb.', 'Route Napoléon Saint-Jean-Pied-de-Port', 420, 540, group=DAY, b='no',
       n='겨울(대략 11~3월)엔 안전 문제로 산길이 닫혀 발카를로스 쪽 길로 가야 합니다. 출발 전 순례자 사무소에서 날씨를 확인하세요.|In winter (roughly November–March) the mountain route is closed for safety and walkers take the Valcarlos road; check the weather at the pilgrim office first.')),
]


def main():
    c = add_sights(rd('cities.ts'), C, ADD, 'visit-fr.ts')
    c = reorder(c, C, [(n, None) for n in (1, 6, 3, 4, 2)] + [(7, DAY), (5, DAY)])
    wr('cities.ts', c)
    it = rd('itinerary-fr.ts')
    a = "  'saint-jean-pied-de-port': { days: [['', 1, 3, 4, 2]], trips: [['이룰레기|Irouléguy', 5]] },\n"
    assert it.count(a) == 1
    wr('itinerary-fr.ts', it.replace(a, "  'saint-jean-pied-de-port': { days: [['', 1, 6, 3, 4, 2]], trips: [['나폴레옹 길|Route Napoléon', 7], ['이룰레기|Irouléguy', 5]] },\n"))


if __name__ == '__main__':
    main()
