#!/usr/bin/env python3
"""Big-city sight lists grouped by district instead of by itinerary day (2026-11-03, user request, after Prague).
Itineraries are unchanged; only the order of the blocks and their `group` headers. Run once."""
from add_daytrip_places import rd, wr
from sight_order import reorder

DAY = ('근교 당일치기', 'Day trip')
D = {
    'prague': [
        (('흐라트차니 · 프라하 성 지구', 'Hradčany · Castle district'), [1, 9, 12, 20, 17]),
        (('말라스트라나', 'Malá Strana'), [5, 10, 2]),
        (('구시가', 'Old Town'), [19, 3, 4, 7, 8, 18]),
        (('요제포프 · 유대인 지구', 'Josefov · Jewish Quarter'), [6]),
        (('신시가', 'New Town'), [16, 11]),
        (('비셰흐라드', 'Vyšehrad'), [15]),
        (DAY, [13, 14]),
    ],
    'budapest': [
        (('부다 · 왕궁 언덕과 겔레르트 언덕', 'Buda · Castle Hill & Gellért Hill'), [7, 9, 2, 5, 10]),
        (('페스트 도심', 'Central Pest'), [1, 13, 8, 6]),
        (('유대인 지구', 'Jewish Quarter'), [12]),
        (('안드라시 거리와 시티 파크', 'Andrássy Avenue & City Park'), [11, 15, 4, 3]),
        (('머르기트 섬', 'Margaret Island'), [14]),
        (DAY, [16]),
    ],
    'copenhagen': [
        (('구시가(인데르 비)', 'Old town (Indre By)'), [8, 7, 9, 2]),
        (('프레데릭스스타덴과 카스텔레트', 'Frederiksstaden & Kastellet'), [1, 13, 14, 12, 5]),
        (('슬로츠홀멘', 'Slotsholmen'), [6, 10]),
        (('크리스티안스하운', 'Christianshavn'), [4]),
        (('티볼리와 중앙역 주변', 'Tivoli & Central Station'), [3, 11]),
        (DAY, [15, 16, 17]),
    ],
    'brussels': [
        (('하부 도심 · 그랑플라스 주변', 'Lower Town · around the Grand-Place'), [2, 9, 5, 4, 11, 10]),
        (('상부 도심 · 몽데자르와 왕궁', 'Upper Town · Mont des Arts & the palace'), [7, 6, 1, 8]),
        (('유럽 지구', 'European Quarter'), [12]),
        (('생질', 'Saint-Gilles'), [13]),
        (('라컨 · 헤이절', 'Laeken · Heysel'), [3]),
        (DAY, [14]),
    ],
    'amsterdam': [
        (('구시가 · 담 광장 주변', 'Old centre · around Dam Square'), [1, 12, 13]),
        (('운하 지구와 요르단', 'Canal Ring & Jordaan'), [7, 2, 5, 4]),
        (('박물관 지구', 'Museum Quarter'), [6, 3, 15, 14]),
        (('더 페이프', 'De Pijp'), [17]),
        (('노르트 · IJ강 북쪽', 'Noord · across the IJ'), [16]),
        (DAY, [8, 9, 10, 11]),
    ],
    'rome': [
        (('고대 로마', 'Ancient Rome'), [1, 19, 6, 20, 21, 11, 22, 23, 28]),
        (('바티칸과 산탄젤로', 'Vatican & Castel Sant’Angelo'), [2, 25, 8, 10]),
        (('판테온과 나보나', 'Pantheon & Navona'), [9, 26, 4, 27]),
        (('트레비·스페인 광장과 보르게세', 'Trevi, Spanish Steps & Borghese'), [7, 3, 5, 17, 16, 18]),
        (('테르미니 주변', 'Around Termini'), [15, 14]),
        (('트라스테베레', 'Trastevere'), [24]),
        (DAY, [12, 13]),
    ],
    'porto': [
        (('히베이라와 대성당', 'Ribeira & the cathedral'), [11, 12, 13, 1, 2]),
        (('바이샤 도심', 'Baixa'), [6, 17, 10, 8, 18, 19]),
        (('클레리구스와 크리스탈 궁전', 'Clérigos & Crystal Palace'), [3, 4, 9, 7, 15]),
        (('빌라노바드가이아', 'Vila Nova de Gaia'), [20, 5]),
        (('보아비스타와 세할베스', 'Boavista & Serralves'), [21, 14]),
        (('포즈 두 도루', 'Foz do Douro'), [22]),
        (DAY, [16]),
    ],
}


def main():
    c = rd('cities.ts')
    for cid, groups in D.items():
        c = reorder(c, cid, [(n, g) for g, ns in groups for n in ns])
        print(cid, 'ok')
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
