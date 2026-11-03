#!/usr/bin/env python3
"""Budapest h17 Belváros (Pest inner city), user request with own photo (2026-11-04). Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, read_group, reorder
from review_hr import S

ITEM = [(17, S('페스트 구시가(벨바로시)', 'Pest inner city (Belváros)', '옛 페스트 성벽 안쪽이던 다뉴브 강변 도심으로, 보행자 거리 바치 거리와 뵈뢰시마르티 광장, 대성당까지 이어지는 골목에 카페와 상점이 모여 있습니다.', 'The old walled core of Pest by the Danube: the pedestrian Váci Street, Vörösmarty Square and the lanes leading up to St Stephen’s Basilica, full of cafés and shops.', 'Váci utca Budapest', 45, 90,
              n='무료이며 언제든 걸을 수 있습니다. 성 이슈트반 대성당에서 그레이트 마켓 홀까지 걸어서 이어 보기 좋습니다.|Free and always open; a good walk from St Stephen’s Basilica down to the Great Market Hall.'))]


def main():
    c = rd('cities.ts')
    c = add_sights(c, 'budapest', ITEM, 'visit-central.ts')
    it = rd('itinerary-north.ts')
    a = "      ['국회의사당과 다뉴브|Parliament & the Danube', 14, 1, 13, 8, 6],"
    assert it.count(a) == 1
    wr('itinerary-north.ts', it.replace(a, a.replace('8, 6]', '8, 17, 6]')))
    by = blocks(c, 'budapest')
    order = list(by)
    g = read_group(by[17]) if read_group(by[17]) else None
    seq = []
    for n in order:
        if n == 17:
            continue
        seq.append(n)
        if n == 8:
            seq.append(17)
    c = reorder(c, 'budapest', [(n, read_group(by[n])) for n in seq])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
