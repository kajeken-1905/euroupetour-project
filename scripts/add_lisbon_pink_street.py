#!/usr/bin/env python3
"""Lisbon Pink Street (2026-10-31, user request), on the Belém–riverfront day after the Time Out Market. Run once."""
import add_portugal_sights as P
from add_daytrip_places import rd, wr

P.NEW = {'lisbon': [dict(
    ko='핑크 거리', en='Pink Street', dko='카이스 두 소드레의 바닥을 분홍색으로 칠한 골목(누바 두 카르발류 거리)으로 밤이면 바와 클럽으로 붐빕니다.',
    den='The pink-painted lane of Cais do Sodré (Rua Nova do Carvalho), packed with bars and clubs at night.', maps='Rua Nova do Carvalho Lisboa',
    visit=dict(min=15, max=30, n='타임아웃 마켓에서 걸어서 약 3분입니다. 밤늦게까지 시끄러운 유흥가입니다.|About three minutes’ walk from the Time Out Market; a nightlife strip that stays loud late.'))]}
OLD = "      ['벨렝과 강변|Belém & the riverfront', 2, 9, 1, 6, 5],\n"
NEW = "      ['벨렝과 강변|Belém & the riverfront', 2, 9, 1, 6, 5, 27],\n"


def main():
    P.EXTRA['lisbon'][26] = 21
    cities = rd('cities.ts')
    if 'id: "lisbon-h27"' not in cities:
        cities = P.add_new(cities)
    it = rd('itinerary-iberia.ts')
    assert OLD in it or NEW in it
    it = it.replace(OLD, NEW)
    wr('itinerary-iberia.ts', it)
    wr('cities.ts', P.regroup(cities, it, 'lisbon'))


if __name__ == '__main__':
    main()
