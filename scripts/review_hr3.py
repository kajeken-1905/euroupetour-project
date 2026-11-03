#!/usr/bin/env python3
"""Croatia step 4 (2026-11-04, user request): sights from the user's own 2023 photos of Split and Zagreb.
Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_hr import S, ZAGREB

ADD = {
 'split': [
  (15, S('베스티불(궁전 현관 홀)', 'Vestibule', '페리스틸에서 황제의 거처로 들어가던 둥근 현관 홀로, 꼭대기가 뚫린 돔 아래에서 여름이면 아카펠라 ‘클라파’ 노래가 울립니다.', 'The round entrance hall from the Peristyle to the emperor’s quarters; under its open-topped dome, klapa singers often perform.', 'Vestibule Split', 5, 10,
        n='무료입니다.|Free.')),
 ],
 'zagreb': [
  (13, S('성 카타리나 성당', 'St. Catherine’s Church', '윗마을의 17세기 예수회 성당으로, 하얀 정면과 분홍빛 스투코 장식 실내가 자그레브 바로크의 대표로 꼽힙니다.', 'The 17th-century Jesuit church in the Upper Town, whose white façade and pink stucco interior are Zagreb’s finest Baroque.', 'St. Catherine’s Church Zagreb', 10, 20,
        n='지진 피해 뒤 복원 공사로 내부 관람이 제한될 수 있습니다.|Visits to the interior may be limited by post-earthquake restoration.')),
  (14, S('스트로스마이어 산책로', 'Strossmayer Promenade', '윗마을 남쪽 옛 성벽 위 산책로로, 아랫마을 지붕들과 대성당 첨탑이 한눈에 보입니다. 여름 저녁엔 공연이 열립니다.', 'The walk along the Upper Town’s old southern walls, looking over the Lower Town’s roofs to the cathedral spires; summer evenings bring live music.', 'Strossmayer Promenade Zagreb', 15, 20,
        n='무료이며 언제든 걸을 수 있습니다. 로트르슈차크 탑과 푸니쿨라 윗역 바로 옆입니다.|Free and always open; right by the Lotrščak Tower and the upper funicular station.')),
 ],
}
IT = {
 "  zagreb: [4, 11, 3, 7, 10, 9, 6, 1, 2, 8, 12, 5],": "  zagreb: [4, 11, 3, 7, 10, 9, 6, 13, 1, 2, 8, 14, 12, 5],",
 "    days: [['', 9, 1, 7, 6, 4, 8, 10, 2, 3, 11, 12]],": "    days: [['', 9, 1, 7, 15, 6, 4, 8, 10, 2, 3, 11, 12]],",
}


def main():
    cities = rd('cities.ts')
    for cid, items in ADD.items():
        cities = add_sights(cities, cid, items, 'visit-balkan.ts')
    it = rd('itinerary-south.ts')
    for a, b in IT.items():
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    by = blocks(cities, 'split')
    cities = reorder(cities, 'split', [(n, read_group(by[n])) for n in itinerary_order(it, 'split', set(by))])
    z = [(g, ns + ([13, 14] if g[1].startswith('Upper') else [])) for g, ns in ZAGREB]
    cities = reorder(cities, 'zagreb', [(n, g) for g, ns in z for n in ns])
    wr('cities.ts', cities)


if __name__ == '__main__':
    main()
