#!/usr/bin/env python3
"""Milan (2026-11-04, user request with own photos of Porta Ticinese): eight more sights, list grouped by
district (big-city rule), two-day itinerary. Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, reorder
from review_hr import S

ADD = [
 (9, S('포르타 티치네세', 'Porta Ticinese', '나폴레옹 시대에 루이지 카뇰라가 세운 신고전주의 성문으로, 나빌리 운하와 코르소 디 포르타 티치네세가 만나는 24 마조 광장에 서 있습니다.', 'The Neoclassical gate built by Luigi Cagnola in the Napoleonic era, standing on Piazza XXIV Maggio where the Navigli meet the Corso di Porta Ticinese.', 'Porta Ticinese Piazza XXIV Maggio Milano', 5, 10)),
 (10, S('코르소 디 포르타 티치네세', 'Corso di Porta Ticinese', '빈티지 가게와 카페가 늘어선 옛 남쪽 대로로, 1920년대 노면전차가 지금도 지나갑니다.', 'The old southern high street lined with vintage shops and cafés, still run by 1920s trams.', 'Corso di Porta Ticinese Milano', 30, 45)),
 (11, S('최후의 만찬', 'The Last Supper', '산타 마리아 델레 그라치에 수도원 식당 벽에 레오나르도 다 빈치가 그린 벽화로, 유네스코 세계유산입니다.', 'Leonardo da Vinci’s mural on the refectory wall of Santa Maria delle Grazie, a UNESCO World Heritage Site.', 'Cenacolo Vinciano Milano', 15, 15,
       b='req', s='https://cenacolovinciano.org/en/', n='15분씩 정해진 시간에 소수만 들어가며 예약이 필수입니다. 표가 몇 주 전에 동나기 쉽습니다. 월요일에 쉽니다.|Entry is in small groups for a fixed 15 minutes and must be booked; tickets often sell out weeks ahead. Closed Mondays.')),
 (12, S('스칼라 극장', 'Teatro alla Scala', '1778년에 문을 연 세계적인 오페라 극장으로, 극장 박물관에서 객석과 무대를 내려다볼 수 있습니다.', 'The world-famous opera house opened in 1778; its museum lets you look into the auditorium.', 'Teatro alla Scala Milano', 45, 60,
       n='박물관은 유료이며 리허설이 없을 때 객석 박스에서 극장 안을 볼 수 있습니다.|The museum is ticketed; when there is no rehearsal you can look into the auditorium from a box.')),
 (13, S('산탐브로조 성당', 'Basilica of Sant’Ambrogio', '밀라노 수호성인 암브로시우스가 4세기에 세운 성당으로, 지금 건물은 롬바르디아 로마네스크의 대표작입니다.', 'The basilica founded in the 4th century by Milan’s patron saint, Ambrose; today’s church is a masterpiece of Lombard Romanesque.', 'Basilica di Sant’Ambrogio Milano', 30, 45,
       n='성당은 무료입니다.|The church is free.')),
 (14, S('산 로렌초 기둥', 'Columns of San Lorenzo', '로마 신전에서 옮겨 온 16개의 대리석 기둥이 산 로렌초 성당 앞에 늘어선 곳으로, 저녁이면 젊은이들이 모입니다.', 'Sixteen marble columns moved from a Roman temple, lined up in front of San Lorenzo; a gathering place in the evenings.', 'Colonne di San Lorenzo Milano', 10, 20)),
 (15, S('포르타 누오바와 보스코 베르티칼레', 'Porta Nuova & Bosco Verticale', '유리 고층 빌딩이 모인 새 업무 지구로, 발코니마다 나무를 심은 쌍둥이 아파트 ‘수직 숲’이 대표 건물입니다.', 'The new business district of glass towers, best known for the Bosco Verticale, twin towers planted with trees on every balcony.', 'Bosco Verticale Milano', 30, 45)),
 (16, S('기념 묘지', 'Monumental Cemetery', '조각과 기념비로 가득한 19세기 묘지로, 야외 조각 미술관이라 불립니다.', 'The 19th-century cemetery crowded with sculpture and memorials, called an open-air sculpture museum.', 'Cimitero Monumentale Milano', 60, 90,
       n='무료이며 월요일에 쉽니다.|Free; closed Mondays.')),
]
G = [
 (('두오모 주변', 'Around the Duomo'), [1, 2, 12, 8]),
 (('브레라와 포르타 누오바', 'Brera & Porta Nuova'), [5, 15, 16, 6]),
 (('스포르체스코 성과 셈피오네', 'Sforza Castle & Sempione'), [3, 7]),
 (('산탐브로조와 최후의 만찬', 'Sant’Ambrogio & the Last Supper'), [11, 13]),
 (('티치네세와 나빌리', 'Ticinese & the Navigli'), [14, 10, 9, 4]),
]
OLD = "  milan: [1, 2, 5, 3, 7, 4],"
NEW = ("  milan: {\n    days: [\n      ['두오모와 브레라|Duomo & Brera', 1, 2, 12, 5, 16, 15],\n"
       "      ['최후의 만찬과 나빌리|Last Supper & the Navigli', 11, 13, 3, 7, 14, 10, 9, 4],\n    ],\n  },")


def main():
    c = rd('cities.ts')
    c = add_sights(c, 'milan', ADD, 'visit-it.ts')
    it = rd('itinerary-it.ts')
    assert it.count(OLD) == 1
    wr('itinerary-it.ts', it.replace(OLD, NEW))
    c = reorder(c, 'milan', [(n, g) for g, ns in G for n in ns])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
