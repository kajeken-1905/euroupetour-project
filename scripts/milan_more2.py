#!/usr/bin/env python3
"""Milan, user requests 2026-11-04: San Siro (AC Milan's stadium) and the modern districts (CityLife,
Fondazione Prada). Adds a third itinerary day 'Modern Milan'. Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, read_group, reorder
from review_hr import S

ADD = [
 (17, S('산 시로(주세페 메아차 경기장)', 'San Siro (Stadio Giuseppe Meazza)', 'AC 밀란과 인테르 밀란이 함께 쓰는 7만 6천 석 규모의 경기장으로, 모서리마다 나선형 경사로 탑이 감싸고 있습니다. 2026 밀라노·코르티나 동계 올림픽 개막식이 열렸습니다.', 'The 76,000-seat stadium shared by AC Milan and Inter, wrapped by spiral ramp towers at its corners; it hosted the opening ceremony of the 2026 Milan–Cortina Winter Olympics.', 'Stadio San Siro Milano', 75, 90,
       n='경기장 투어와 박물관은 유료이며 경기 날과 행사 날에는 바뀌거나 쉽니다. 두오모에서 지하철 M5호선 산 시로 스타디오역까지 약 25분입니다.|The stadium tour and museum are ticketed and change or close on match and event days; about 25 minutes from the Duomo on metro M5 to San Siro Stadio.')),
 (18, S('시티라이프', 'CityLife', '옛 박람회장 터에 세운 새 지구로, 자하 하디드·이소자키 아라타·다니엘 리베스킨트가 설계한 고층 빌딩 세 동과 공원, 쇼핑가가 모여 있습니다.', 'The new district on the old trade-fair grounds, with three towers by Zaha Hadid, Arata Isozaki and Daniel Libeskind, a park and a shopping district.', 'CityLife Milano', 45, 60,
       n='무료로 둘러볼 수 있고 지하철 M5호선 트레 토리역에서 바로 이어집니다.|Free to walk round; straight out of Tre Torri station on metro M5.')),
 (19, S('폰다치오네 프라다', 'Fondazione Prada', '옛 증류주 공장을 렘 콜하스가 현대 미술관으로 바꾼 곳으로, 금박을 입힌 ‘유령의 집’과 9층 탑, 웨스 앤더슨이 꾸민 바 루체가 있습니다.', 'A former distillery turned into a contemporary art centre by Rem Koolhaas, with the gold-leafed Haunted House, a nine-storey tower and Bar Luce designed by Wes Anderson.', 'Fondazione Prada Milano', 90, 120,
       s='https://www.fondazioneprada.org/', n='유료이며 화요일에 쉽니다. 운영 시간은 공식 사이트에서 확인하세요.|Ticketed and closed on Tuesdays; check opening hours on the official site.')),
]
G = [
 (('두오모 주변', 'Around the Duomo'), [1, 2, 12, 8]),
 (('브레라와 포르타 누오바', 'Brera & Porta Nuova'), [5, 15, 16, 6]),
 (('스포르체스코 성과 셈피오네', 'Sforza Castle & Sempione'), [3, 7]),
 (('산탐브로조와 최후의 만찬', 'Sant’Ambrogio & the Last Supper'), [11, 13]),
 (('티치네세와 나빌리', 'Ticinese & the Navigli'), [14, 10, 9, 4]),
 (('시티라이프와 산 시로', 'CityLife & San Siro'), [18, 17]),
 (('포르타 로마나', 'Porta Romana'), [19]),
]
OLD = "      ['최후의 만찬과 나빌리|Last Supper & the Navigli', 11, 13, 3, 7, 14, 10, 9, 4],\n    ],"
NEW = ("      ['최후의 만찬과 나빌리|Last Supper & the Navigli', 11, 13, 3, 7, 14, 10, 9, 4],\n"
       "      ['현대 밀라노|Modern Milan', 18, 17, 19],\n    ],")


def main():
    c = rd('cities.ts')
    c = add_sights(c, 'milan', ADD, 'visit-it.ts')
    it = rd('itinerary-it.ts')
    assert it.count(OLD) == 1
    wr('itinerary-it.ts', it.replace(OLD, NEW))
    c = reorder(c, 'milan', [(n, g) for g, ns in G for n in ns])
    wr('cities.ts', c)
    v = rd('visit-it.ts')
    a = "'milan-h19': v(90, 120, { s:"
    assert a in v
    wr('visit-it.ts', v.replace(a, "'milan-h19': v(90, 120, { c: 'tue', s:"))


if __name__ == '__main__':
    main()
