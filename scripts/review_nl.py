#!/usr/bin/env python3
"""Sight review step 1, Netherlands (2026-11-02, user request): more sights for Amsterdam and Rotterdam, Amsterdam's
itinerary rebuilt into three days plus its day trips, every Dutch list in itinerary order. Hours from the official
sites where they could be read, checked that day. Run once."""
import re

from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_hu_dk import big_order, itin_text

K = '2026-11'
AMSTERDAM = [
    (12, dict(ko='베헤인호프', en='Begijnhof', dko='14세기 베긴회 수녀들이 살던 안뜰로, 1420년경 지은 암스테르담에서 가장 오래된 목조 집이 남아 있습니다.', den='The 14th-century beguines’ courtyard, home to Amsterdam’s oldest wooden house from around 1420.', maps='Begijnhof Amsterdam',
              visit=dict(min=20, max=30, n='무료이며 대체로 9:00~17:00에 엽니다. 주민이 사는 곳이라 조용히 둘러보고 단체는 들어갈 수 없습니다. 스파위 광장 쪽 문으로 들어갑니다.|Free, generally open 9:00–17:00; people live here, so keep quiet, and groups are not admitted. Enter from the Spui.'))),
    (13, dict(ko='렘브란트 하우스', en='Rembrandt House Museum', dko='렘브란트가 20년 가까이 살며 그림을 그린 집으로, 작업실과 그의 판화 컬렉션을 봅니다.', den='The house where Rembrandt lived and painted for nearly twenty years, with his studio and his etchings.', maps='Museum Het Rembrandthuis',
              visit=dict(min=60, max=90, s='https://www.rembrandthuis.nl/en/plan-your-visit/visitor-information/opening-hours-fees/', n='11월 2일~12월 18일엔 매일 10:00~17:00에 엽니다. 매표소에선 체크카드만 받으며, 뮤지엄카드·I amsterdam 시티카드는 무료입니다.|Open daily 10:00–17:00 from 2 November to 18 December. The desk takes debit cards only; free with the Museumkaart and I amsterdam City Card.', k=K))),
    (14, dict(ko='폰덜파크', en='Vondelpark', dko='박물관 광장 옆에 펼쳐진 암스테르담에서 가장 큰 도시 공원으로, 호수와 자전거 길, 노천 극장이 있습니다.', den='Amsterdam’s biggest park, beside the Museum Quarter, with ponds, bike paths and an open-air theatre.', maps='Vondelpark',
              visit=dict(min=45, max=90, n='무료이며 언제든 들어갈 수 있습니다.|Free and always open.'))),
    (15, dict(ko='시립 미술관', en='Stedelijk Museum', dko='‘욕조’라 불리는 흰 새 건물이 붙은 현대 미술관으로, 몬드리안·말레비치부터 현대 디자인까지 봅니다.', den='The modern-art museum with the white “bathtub” extension, from Mondrian and Malevich to contemporary design.', maps='Stedelijk Museum Amsterdam',
              visit=dict(min=90, max=120, s='https://www.stedelijk.nl/en', n='매일 10:00~18:00에 엽니다. 성인 €22.50, 18세 이하 무료이고 오디오 가이드가 포함됩니다.|Open daily 10:00–18:00; adults €22.50, under-19s free, audio guide included.', k=K,
                         x=[('쿠사마 야요이 회고전(2027년 1월 17일까지)은 공식 사이트에서 시간 지정 표로만 봅니다.|The Yayoi Kusama retrospective (until 17 January 2027) is by timed ticket from the official site only.', '2027-01-17')]))),
    (16, dict(ko='아담 전망대', en='A’DAM Lookout', dko='중앙역 건너편 IJ강 북쪽 타워 꼭대기의 전망대로, 100m 높이 가장자리 그네를 탈 수 있습니다.', den='The rooftop deck of the tower across the IJ from Centraal, with a swing out over the edge 100 m up.', maps="A'DAM Lookout",
              visit=dict(min=60, max=90, s='https://www.adamlookout.com/', n='중앙역 뒤에서 무료 페리로 몇 분이면 건넙니다. 그네는 따로 요금을 냅니다. 운영 시간은 요일마다 달라 공식 사이트에서 확인하세요.|A free ferry crosses from behind Centraal in a few minutes; the swing costs extra. Hours vary by day, so check the official site.'))),
    (17, dict(ko='하이네켄 익스피리언스', en='Heineken Experience', dko='1867년에 지은 옛 하이네켄 양조장 건물에서 양조 과정을 체험하고 맥주를 마셔 보는 곳입니다.', den='Heineken’s 1867 brewery building, now a hands-on brewing tour that ends with a beer.', maps='Heineken Experience',
              visit=dict(min=90, max=120, b='rec', s='https://www.heinekenexperience.com/en', n='매일 엽니다. 시간 지정 표를 온라인으로 사면 현장보다 싸고, 성수기 오후와 주말은 하루 이틀 전에 매진되기도 합니다. 18세 이상만 맥주를 받습니다.|Open daily. Timed tickets are cheaper online, and peak afternoon and weekend slots can sell out a day or two ahead. Beer for over-18s only.'))),
]
ROTTERDAM = [
    (8, dict(ko='델프스하번', en='Delfshaven', dko='전쟁 폭격을 피한 옛 항구 마을로, 1620년 필그림 파더스가 신대륙으로 떠난 교회와 운하 풍경이 남아 있습니다.', den='The old harbour quarter that escaped the wartime bombing, with the church the Pilgrim Fathers sailed from in 1620.', maps='Delfshaven Rotterdam',
             visit=dict(min=45, max=60, n='무료이며 언제든 걸어 볼 수 있습니다. 시내에서 트램이나 지하철로 약 10분입니다.|Free and always open; about 10 min from the centre by tram or metro.'))),
    (9, dict(ko='페닉스', en='Fenix', dko='2025년 카텐드레흐트 옛 창고에 문을 연 이주 박물관으로, 지붕까지 이어진 회오리 모양 계단 ‘토네이도’가 명물입니다.', den='The migration museum opened in 2025 in an old warehouse on Katendrecht, crowned by the swirling Tornado staircase.', maps='Fenix Rotterdam',
             visit=dict(min=90, max=120, c='mon', b='rec', s='https://www.fenix.nl/en', n='화~일 10:00~17:00에 열고 월요일에 쉽니다. 시간 지정 표 하나로 전시와 토네이도 계단을 모두 봅니다. 17세 이하 무료.|Open Tuesday to Sunday 10:00–17:00, closed Mondays. One timed ticket covers the exhibitions and the Tornado staircase; free for under-18s.'))),
]

AMSTERDAM_IT = ("""  amsterdam: {
    days: [
      ['담 광장과 요르단|Dam Square & Jordaan', 1, 5, 4, 2],
      ['박물관 광장|Museum Quarter', 7, 6, 3],
    ],
    trips: [['잔세스칸스|Zaanse Schans', 8], ['폴렌담과 마르컨|Volendam & Marken', 9], ['알크마르 치즈 시장|Alkmaar cheese market', 10], ['케우켄호프|Keukenhof', 11]],
  },""", [
    ('담 광장과 운하 지구|Dam Square & the canals', [1, 12, 7, 2, 5, 4]),
    ('박물관 광장과 폰덜파크|Museum Quarter & Vondelpark', [6, 3, 15, 14]),
    ('렘브란트와 IJ강 북쪽|Rembrandt & across the IJ', [13, 17, 16]),
], [('잔세스칸스|Zaanse Schans', [8]), ('폴렌담과 마르컨|Volendam & Marken', [9]), ('알크마르 치즈 시장|Alkmaar cheese market', [10]), ('케우켄호프|Keukenhof', [11])])
ROTTERDAM_IT = ("  rotterdam: { days: [['', 3, 1, 4, 2, 5, 6]], trips: [['킨더다이크 풍차|Kinderdijk windmills', 7]] },",
                "  rotterdam: { days: [['', 3, 1, 4, 2, 9, 5, 6, 8]], trips: [['킨더다이크 풍차|Kinderdijk windmills', 7]] },")


def main():
    cities = rd('cities.ts')
    cities = add_sights(cities, 'amsterdam', AMSTERDAM, 'visit-benelux.ts')
    cities = add_sights(cities, 'rotterdam', ROTTERDAM, 'visit-benelux.ts')
    it = rd('itinerary-central.ts')
    old, days, trips = AMSTERDAM_IT
    assert old in it and ROTTERDAM_IT[0] in it
    it = it.replace(old, itin_text('amsterdam', days, trips)).replace(*ROTTERDAM_IT)
    wr('itinerary-central.ts', it)
    cities = reorder(cities, 'amsterdam', big_order('amsterdam', days, trips))
    for cid in re.findall(r'\n  \{\n    id: "([a-z-]+)",\n    countryId: "nl"', cities):
        if cid == 'amsterdam':
            continue
        by = blocks(cities, cid)
        order = itinerary_order(it, cid, set(by))
        cities = reorder(cities, cid, [(n, read_group(by[n])) for n in order])
        print(cid, order)
    wr('cities.ts', cities)


if __name__ == '__main__':
    main()
