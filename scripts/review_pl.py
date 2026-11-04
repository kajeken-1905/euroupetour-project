#!/usr/bin/env python3
"""Poland step 1 (2026-11-04, user request): more sights for the seven Polish cities. Warsaw and Kraków lists
grouped by district (big-city rule); the rest in itinerary order. Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
ADD = {
 'warsaw': [
  (6, S('빌라누프 궁전', 'Wilanów Palace', '얀 3세 소비에스키 왕의 여름 궁전으로, 바로크 정원과 함께 ‘폴란드의 베르사유’라 불립니다.', 'The summer palace of King John III Sobieski, called Poland’s Versailles for its Baroque gardens.', 'Wilanów Palace', 120, 150,
        s='https://www.wilanow-palac.pl/', n='시내 남쪽에서 버스로 약 30분입니다. 궁전과 정원은 따로 표를 사고 운영 시간은 공식 사이트에서 확인하세요.|About 30 min by bus south of the centre; the palace and gardens have separate tickets—check hours on the official site.')),
  (7, S('바르샤바 봉기 박물관', 'Warsaw Rising Museum', '1944년 나치 점령에 맞선 바르샤바 봉기 63일을 재현한 박물관으로, 옛 전차 발전소 건물에 있습니다.', 'The museum recreating the 63 days of the 1944 Warsaw Uprising against the Nazi occupation, in a former tram power station.', 'Warsaw Rising Museum', 120, 150,
        c='tue', s='https://www.1944.pl/en', n='유료이며 화요일에 쉽니다.|Ticketed; closed on Tuesdays.')),
  (8, S('쇼팽 박물관', 'Fryderyk Chopin Museum', '오스트로그스키 궁전에 쇼팽의 피아노와 악보, 편지를 모은 박물관으로, 듣기 체험 전시가 있습니다.', 'The museum in the Ostrogski Palace gathering Chopin’s piano, manuscripts and letters, with listening stations.', 'Fryderyk Chopin Museum Warsaw', 60, 90,
        c='mon', s='https://chopin.museum/en', n='유료이며 월요일에 쉽니다. 인원 제한이 있어 미리 예약하는 편이 좋습니다.|Ticketed and closed on Mondays; numbers are limited, so book ahead.')),
  (9, S('크라쿠프스키에 프셰드미에시치에 거리', 'Krakowskie Przedmieście', '구시가에서 남쪽으로 뻗은 ‘왕의 길’의 첫 구간으로, 대통령궁·바르샤바 대학·성 십자가 성당(쇼팽의 심장)이 늘어섭니다.', 'The first stretch of the Royal Route south from the Old Town, lined with the Presidential Palace, the University and Holy Cross Church, where Chopin’s heart lies.', 'Krakowskie Przedmieście Warszawa', 45, 60)),
  (10, S('신시가와 바르바칸', 'New Town & Barbican', '구시가 북쪽 성벽의 바르바칸을 지나 이어지는 신시가로, 마리 퀴리 생가 박물관이 있습니다.', 'The New Town beyond the Barbican in the Old Town’s northern walls, home to the Marie Curie birthplace museum.', 'Barbakan Warszawa', 30, 45)),
  (11, S('코페르니쿠스 과학 센터', 'Copernicus Science Centre', '비스와강변의 체험형 과학관으로, 직접 만지고 실험하는 전시와 천체 투영관이 있습니다.', 'The hands-on science centre by the Vistula, with interactive exhibits and a planetarium.', 'Copernicus Science Centre Warsaw', 120, 180,
        b='rec', s='https://www.kopernik.org.pl/en', n='주말과 방학엔 붐비니 시간 지정 표를 미리 사세요.|Busy at weekends and in school holidays—buy timed tickets ahead.')),
  (12, S('프라가 지구와 네온 박물관', 'Praga & the Neon Museum', '전쟁 피해를 덜 입은 비스와강 동쪽 동네로, 옛 공장 단지 ‘소호 팩토리’에 공산 시대 네온사인을 모은 박물관이 있습니다.', 'The district east of the Vistula that escaped the worst of the war, where the Soho Factory complex houses a museum of communist-era neon signs.', 'Neon Muzeum Warszawa', 60, 90)),
 ],
 'krakow': [
  (8, S('쉰들러 공장', 'Oskar Schindler’s Enamel Factory', '영화 ‘쉰들러 리스트’의 무대였던 공장 건물에 나치 점령기 크라쿠프를 보여 주는 박물관이 있습니다.', 'The factory featured in Schindler’s List, now a museum of Kraków under Nazi occupation.', 'Oskar Schindler’s Enamel Factory', 90, 120,
        b='rec', s='https://muzeumkrakowa.pl/en', n='시간 지정 표라 성수기엔 미리 사세요.|Timed tickets—buy ahead in high season.')),
  (9, S('콜레기움 마이우스', 'Collegium Maius', '야기엘론스키 대학의 가장 오래된 15세기 건물로, 코페르니쿠스가 공부한 대학의 고딕 안뜰과 시계 인형 쇼가 있습니다.', 'The oldest, 15th-century building of the Jagiellonian University where Copernicus studied, with a Gothic courtyard and a clock with moving figures.', 'Collegium Maius Kraków', 45, 60,
        n='박물관 내부는 안내 투어로 봅니다.|The museum interior is seen on guided tours.')),
  (10, S('바르바칸과 플로리안 문', 'Barbican & St Florian’s Gate', '구시가 북쪽의 옛 성문과 둥근 망루로, 왕의 길이 시작되는 곳입니다.', 'The old town’s northern gate and round barbican, where the Royal Route begins.', 'Barbakan Kraków', 15, 30)),
  (11, S('리네크 지하 박물관', 'Rynek Underground', '중앙 광장 아래 발굴된 중세 시장 거리를 보여 주는 지하 박물관입니다.', 'An underground museum of the medieval market streets excavated beneath the Main Square.', 'Rynek Underground Kraków', 60, 90,
        b='rec', n='시간 지정 표라 미리 사는 편이 좋습니다.|Timed tickets—best bought ahead.')),
  (12, S('포드구지와 게토 영웅 광장', 'Podgórze & Ghetto Heroes Square', '비스와강 건너편 옛 유대인 게토 자리로, 빈 의자 조형물이 늘어선 광장과 ‘독수리 약국’ 박물관이 있습니다.', 'The former Jewish ghetto across the Vistula, with the square of empty chairs and the Eagle Pharmacy museum.', 'Plac Bohaterów Getta Kraków', 30, 45)),
 ],
 'gdansk': [
  (6, S('성모 마리아 대성당', 'St Mary’s Church', '세계에서 손꼽히게 큰 벽돌 성당으로, 400여 계단을 오르는 탑에서 구시가가 내려다보입니다.', 'One of the world’s largest brick churches; climb some 400 steps up the tower for views over the old town.', 'St. Mary’s Church Gdańsk', 45, 60,
        n='탑은 유료이며 날씨에 따라 닫습니다.|The tower is ticketed and closes in bad weather.')),
  (7, S('제2차 세계 대전 박물관', 'Museum of the Second World War', '전쟁이 시작된 도시에 세운 대형 박물관으로, 지하 전시장에서 전쟁 전후의 유럽을 보여 줍니다.', 'A large museum in the city where the war began, its underground galleries telling Europe’s story before, during and after the war.', 'Museum of the Second World War Gdańsk', 150, 180,
        c='mon', n='유료이며 월요일에 쉽니다.|Ticketed; closed on Mondays.')),
  (8, S('베스테르플라테', 'Westerplatte', '1939년 9월 1일 제2차 세계 대전의 첫 포성이 울린 반도로, 폐허가 된 초소와 기념비가 있습니다.', 'The peninsula where the first shots of World War II were fired on 1 September 1939, with ruined guardhouses and a monument.', 'Westerplatte', 90, 120, group=DAY,
        n='시내에서 버스로 약 30분이며 여름엔 배도 다닙니다.|About 30 min by bus from the centre; boats run in summer.')),
  (9, S('마리아츠카 거리', 'Mariacka Street', '돌계단 테라스가 딸린 옛 상인 집들이 늘어선 골목으로, 호박 가게가 많습니다.', 'A lane of old merchants’ houses with stone front terraces, full of amber shops.', 'Mariacka Gdańsk', 15, 20)),
  (10, S('아르투스 궁정', 'Artus Court', '길쭉한 시장 롱마켓에 선 옛 상인 길드 회관으로, 거대한 타일 난로가 있는 홀이 남아 있습니다.', 'The old merchants’ guild hall on the Long Market, with a great hall and a giant tiled stove.', 'Artus Court Gdańsk', 30, 45)),
 ],
 'wroclaw': [
  (6, S('라츠와비체 파노라마', 'Racławice Panorama', '1794년 라츠와비체 전투를 그린 둘레 114m의 원형 대형 그림으로, 가운데 전망대에서 360도로 봅니다.', 'A 114-metre circular painting of the 1794 Battle of Racławice, viewed all around from a central platform.', 'Panorama Racławicka', 45, 60,
        b='rec', n='정해진 시각마다 입장하니 미리 예약하는 편이 좋습니다.|Entry is at set times, so it is best booked ahead.')),
  (7, S('시장 홀', 'Market Hall', '1908년 콘크리트 아치 지붕으로 지은 시장으로, 지금도 채소·고기·꽃 가게가 들어서 있습니다.', 'The market of 1908 under concrete arches, still full of produce, meat and flower stalls.', 'Hala Targowa Wrocław', 20, 30)),
  (8, S('일본 정원', 'Japanese Garden', '백주년 기념관 옆 슈치트니츠키 공원 안의 일본식 정원입니다.', 'The Japanese garden in Szczytnicki Park beside the Centennial Hall.', 'Ogród Japoński Wrocław', 30, 45,
        n='대체로 봄~가을에만 엽니다.|Usually open spring to autumn only.')),
  (9, S('아프리카리움', 'Afrykarium', '브로츠와프 동물원 안의 아프리카 수족관으로, 하마와 상어가 머리 위로 지나가는 터널이 있습니다.', 'The Africa-themed aquarium in Wrocław Zoo, with a tunnel where hippos and sharks swim overhead.', 'Afrykarium Wrocław', 120, 180)),
 ],
 'poznan': [
  (6, S('크루아상 박물관', 'Croissant Museum', '포즈난 명물 ‘성 마르틴 크루아상’을 직접 만들어 보는 체험 공연장으로, 구시가 광장 옆에 있습니다.', 'A hands-on show where you make Poznań’s St Martin’s croissant, just off the Old Market Square.', 'Rogalowe Muzeum Poznania', 45, 60,
        b='rec', n='정해진 시각에 공연하니 영어 회차를 미리 예약하세요.|Shows run at set times; book an English session ahead.')),
  (7, S('시타델 공원', 'Citadel Park', '옛 프로이센 요새 터의 넓은 공원으로, 전쟁 묘지와 군사 박물관, 거대한 조각 ‘알 수 없는 사람들’이 있습니다.', 'The broad park on the site of a Prussian fortress, with war cemeteries, military museums and the giant sculpture group Unrecognised.', 'Park Cytadela Poznań', 60, 90)),
  (8, S('스타리 브로바르', 'Stary Browar', '옛 맥주 공장을 바꾼 쇼핑·예술 복합 공간으로, 붉은 벽돌 건물과 안뜰 공원이 있습니다.', 'A former brewery turned shopping and arts complex, with red-brick halls and a courtyard park.', 'Stary Browar Poznań', 60, 90)),
 ],
 'zakopane': [
  (6, S('비엘카 크로키에프 스키 점프대', 'Wielka Krokiew', '월드컵 스키 점프 대회가 열리는 점프대로, 의자 리프트를 타고 꼭대기 전망대에 오릅니다.', 'The ski-jump hill that hosts World Cup competitions; a chairlift runs up to the viewpoint at the top.', 'Wielka Krokiew', 45, 60)),
  (7, S('코시치엘리스카 계곡', 'Kościeliska Valley', '석회암 절벽과 동굴 사이로 평탄한 길이 이어지는 타트라 국립공원의 계곡입니다.', 'A Tatra National Park valley where an easy path runs between limestone cliffs and caves.', 'Dolina Kościeliska', 180, 240, group=DAY,
        n='시내에서 버스로 약 20분 걸려 키르 입구까지 갑니다. 국립공원 입장료가 있습니다.|About 20 min by bus to the Kiry entrance; there is a national park fee.')),
  (8, S('옛 성당과 펭크소비 브제지크 묘지', 'Old Church & Pęksowy Brzyzek Cemetery', '19세기 목조 성당과, 자코파네 예술가들이 잠든 나무 묘비의 묘지입니다.', 'The 19th-century wooden church and the cemetery of carved wooden graves where Zakopane’s artists lie.', 'Pęksowy Brzyzek Zakopane', 20, 30)),
 ],
 'torun': [
  (6, S('튜턴 기사단 성터', 'Teutonic Castle ruins', '1454년 시민들이 허문 튜턴 기사단 성의 폐허로, 남은 탑 ‘단스커’ 화장실 탑이 볼거리입니다.', 'The ruins of the Teutonic Knights’ castle pulled down by the townspeople in 1454; the surviving dansker latrine tower is the highlight.', 'Zamek Krzyżacki Toruń', 30, 45)),
  (7, S('기울어진 탑', 'Leaning Tower', '지반 때문에 1.5m 가까이 기운 14세기 성벽 탑입니다.', 'A 14th-century wall tower that leans nearly 1.5 m off true.', 'Krzywa Wieża Toruń', 10, 15)),
  (8, S('성 요한 대성당', 'Cathedral of Sts John', '코페르니쿠스가 세례를 받은 고딕 성당으로, 탑에 폴란드에서 손꼽히게 큰 종 ‘투바 데이’가 있습니다.', 'The Gothic cathedral where Copernicus was baptised, whose tower holds Tuba Dei, one of Poland’s largest bells.', 'Katedra Świętych Janów Toruń', 30, 45)),
 ],
}
IT = {
 "  warsaw: {\n    days: [\n      ['구시가와 게토 기념지|Old Town & ghetto memorials', 2, 1, 5],\n      ['문화과학궁전과 와지엔키|Palace of Culture & Łazienki', 4, 3],\n    ],\n  },":
 "  warsaw: {\n    days: [\n      ['구시가와 왕의 길|Old Town & the Royal Route', 10, 1, 2, 9, 8, 11],\n      ['봉기 박물관과 게토|Rising Museum & the ghetto', 7, 5, 4],\n      ['와지엔키와 빌라누프|Łazienki & Wilanów', 3, 6, 12],\n    ],\n  },",
 "  krakow: { days: [['', 1, 3, 5, 2, 4]], trips: [['아우슈비츠|Auschwitz', 6], ['비엘리치카 소금광산|Wieliczka', 7]] },":
 "  krakow: {\n    days: [\n      ['구시가와 바벨|Old Town & Wawel', 10, 1, 3, 11, 5, 9, 2],\n      ['카지미에시와 포드구지|Kazimierz & Podgórze', 4, 12, 8],\n    ],\n    trips: [\n      ['아우슈비츠|Auschwitz', 6],\n      ['비엘리치카 소금광산|Wieliczka', 7],\n    ],\n  },",
 "  gdansk: { days: [['', 1, 2, 3, 4]], trips: [['올리바와 해변|Oliwa & the beach', 5]] },":
 "  gdansk: {\n    days: [['', 1, 10, 2, 9, 6, 3, 7, 4]],\n    trips: [\n      ['베스테르플라테|Westerplatte', 8],\n      ['올리바와 해변|Oliwa & the beach', 5],\n    ],\n  },",
 "  wroclaw: [1, 4, 5, 2, 3],": "  wroclaw: [1, 4, 7, 5, 6, 2, 3, 8, 9],",
 "  poznan: [3, 1, 4, 2, 5],": "  poznan: [3, 8, 1, 6, 4, 2, 7, 5],",
 "  zakopane: { days: [['', 2, 3, 1]], trips: [['모르스키에 오코|Morskie Oko', 4]] },":
 "  zakopane: {\n    days: [['', 2, 6, 8, 3, 1]],\n    trips: [\n      ['모르스키에 오코|Morskie Oko', 4],\n      ['코시치엘리스카 계곡|Kościeliska Valley', 7],\n    ],\n  },",
 "  torun: [4, 1, 3, 2, 5],": "  torun: [4, 7, 6, 1, 3, 2, 8, 5],",
}
G = {
 'warsaw': [(('구시가와 신시가', 'Old Town & New Town'), [10, 1, 2]), (('왕의 길', 'Royal Route'), [9, 8]),
            (('도심과 옛 게토', 'City centre & former ghetto'), [4, 5, 7]), (('비스와강변과 프라가', 'Vistula & Praga'), [11, 12]),
            (('와지엔키와 빌라누프', 'Łazienki & Wilanów'), [3, 6])],
 'krakow': [(('구시가', 'Old Town'), [1, 3, 5, 11, 9, 10]), (('바벨 언덕', 'Wawel Hill'), [2]), (('카지미에시', 'Kazimierz'), [4]),
            (('포드구지', 'Podgórze'), [12, 8]), (('근교 당일치기', 'Day trip'), [6, 7])],
}


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-central.ts')
    it = rd('itinerary-north.ts')
    for a, b in IT.items():
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)
    for cid in ADD:
        if cid in G:
            c = reorder(c, cid, [(n, g) for g, ns in G[cid] for n in ns])
        else:
            by = blocks(c, cid)
            c = reorder(c, cid, [(n, read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
