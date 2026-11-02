#!/usr/bin/env python3
"""Sight review step 1, Luxembourg (2026-11-03, user request): three more sights for Luxembourg City and every
Luxembourg list in itinerary order. Hours from the official sites where they could be read. Run once."""
import re

from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder

K = '2026-11'
LUX = [
    (8, dict(ko='슈맹 드 라 코르니슈', en='Chemin de la Corniche', dko='‘유럽에서 가장 아름다운 발코니’라 불리는 옛 성벽 위 산책로로, 발아래 그룬트 지구와 알제트 계곡이 펼쳐집니다.', den='The walk along the old ramparts called “Europe’s most beautiful balcony”, with the Grund and the Alzette valley below.', maps='Chemin de la Corniche Luxembourg',
             visit=dict(min=20, max=30, n='무료이며 언제든 걸을 수 있습니다. 끝에서 보크 카즈마트와 이어집니다.|Free and always open; it leads on to the Bock Casemates.'))),
    (9, dict(ko='무담(현대 미술관)', en='Mudam', dko='키르히베르크의 옛 요새 터에 I. M. 페이가 설계한 유리 지붕 현대 미술관입니다.', den='The glass-roofed modern art museum designed by I. M. Pei on the old fort site in Kirchberg.', maps='Mudam Luxembourg',
             visit=dict(min=60, max=90, s='https://www.mudam.com/visit/plan-your-visit', n='21세 미만과 학생은 무료입니다. 요일별 운영 시간이 자주 바뀌니 공식 사이트에서 확인하세요. 시내에서 트램으로 약 10분입니다.|Free for under-21s and students. Hours change by weekday, so check the official site. About 10 min by tram from the centre.'))),
    (10, dict(ko='국립 고고학·역사·미술 박물관', en='National Museum of Archaeology, History and Art', dko='구시가 피시 마켓 광장의 국립 박물관으로, 로마 시대 모자이크부터 룩셈부르크의 역사와 미술까지 봅니다.', den='The national museum on the old Fish Market square, from Roman mosaics to Luxembourg’s history and art.', maps='Nationalmusée um Fëschmaart',
              visit=dict(min=75, max=120, c='mon', s='https://www.visitluxembourg.com/place/mnaha-nationalmusee-um-feschmaart', n='화~일 10:00~18:00(목요일 20:00까지)에 열고 월요일에 쉽니다. 상설 전시는 무료입니다.|Open Tuesday to Sunday 10:00–18:00 (Thursdays to 20:00), closed Mondays. The permanent galleries are free.', k=K))),
]
OLD = "  'luxembourg-city': [6, 5, 1, 2, 3, 7, 4],"
NEW = "  'luxembourg-city': [6, 5, 1, 10, 2, 8, 3, 7, 4, 9],"


def main():
    cities = rd('cities.ts')
    cities = add_sights(cities, 'luxembourg-city', LUX, 'visit-benelux.ts')
    it = rd('itinerary-central.ts')
    assert OLD in it
    it = it.replace(OLD, NEW)
    wr('itinerary-central.ts', it)
    for cid in re.findall(r'\n  \{\n    id: "([a-z-]+)",\n    countryId: "lu"', cities):
        by = blocks(cities, cid)
        order = itinerary_order(it, cid, set(by))
        cities = reorder(cities, cid, [(n, read_group(by[n])) for n in order])
        print(cid, order)
    wr('cities.ts', cities)


if __name__ == '__main__':
    main()
