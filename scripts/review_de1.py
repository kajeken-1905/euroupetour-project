#!/usr/bin/env python3
"""Germany step 1, part 1 (north: Berlin, Hamburg, Potsdam), 2026-11-07, all-country plan.
- berlin-h3 was named '베를린 장벽 기념관' but is the East Side Gallery → renamed; the real Wall Memorial
  (Bernauer Straße) added as its own sight. Museum Island note: Pergamonmuseum closed since Oct 2023 (partial
  reopening planned 2027).
- Berlin h9–h18, Hamburg h6–h11, Potsdam h6–h8; Berlin and Hamburg lists grouped by district. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
MITTE = ('미테 (박물관 섬·운터 덴 린덴)', 'Mitte (Museum Island & Unter den Linden)')
GOV = ('정부 지구와 티어가르텐', 'Government quarter & Tiergarten')
KREUZ = ('크로이츠베르크·프리드리히스하인', 'Kreuzberg & Friedrichshain')
WEST = ('서베를린 (샤를로텐부르크)', 'West Berlin (Charlottenburg)')
WALL = ('장벽과 냉전의 기억', 'The Wall & the Cold War')
H_OLD = ('구시가와 하펜시티', 'Old town & HafenCity')
H_PORT = ('항구와 장크트파울리', 'Harbour & St. Pauli')
H_ALS = ('알스터 호수', 'The Alster')
REWRITE = {
 'berlin-h3': ('이스트 사이드 갤러리', 'East Side Gallery', '슈프레강 가에 남은 1.3km 장벽에 세계 화가들이 그림을 그린 야외 갤러리로, ‘형제의 키스’ 벽화가 유명합니다.', 'The 1.3 km stretch of Wall along the Spree painted by artists from around the world, famous for the “Fraternal Kiss” mural.'),
 'berlin-h1': ('브란덴부르크 문', 'Brandenburg Gate', '1791년에 세운 신고전주의 개선문으로, 분단과 통일의 상징입니다.', 'The neoclassical gate of 1791, symbol of Germany’s division and reunification.'),
 'berlin-h2': ('박물관 섬', 'Museum Island', '슈프레강 섬에 박물관 다섯 곳이 모인 유네스코 세계유산으로, 네페르티티 흉상이 있는 신 박물관이 유명합니다.', 'Five museums on an island in the Spree, a UNESCO World Heritage Site—the Neues Museum with the bust of Nefertiti is the highlight.'),
 'berlin-h4': ('국회의사당 돔', 'Reichstag Dome', '독일 연방의회 건물 위 유리 돔으로, 나선 경사로를 따라 오르면 시내가 내려다보입니다.', 'The glass dome on the German parliament building, with a spiral ramp and views over the city.'),
 'berlin-h5': ('체크포인트 찰리', 'Checkpoint Charlie', '동서 베를린 사이 미군 검문소 자리로, 옆에 장벽 박물관이 있습니다.', 'The former US checkpoint between East and West Berlin, with the Wall Museum beside it.'),
 'berlin-h6': ('티어가르텐', 'Tiergarten', '브란덴부르크 문 서쪽의 큰 도심 공원으로, 승전 기념탑에 오를 수 있습니다.', 'The great park west of the Brandenburg Gate, with the climbable Victory Column at its centre.'),
 'hamburg-h1': ('창고 지구', 'Speicherstadt', '운하를 따라 붉은 벽돌 창고가 늘어선 세계 최대 창고 지구로, 유네스코 세계유산입니다.', 'The world’s largest warehouse district of red-brick stores along canals, a UNESCO World Heritage Site.'),
 'hamburg-h4': ('알스터 호수', 'Alster Lakes', '시내 한가운데의 두 호수로, 호숫가 산책과 유람선, 카누를 즐깁니다.', 'The two lakes in the city centre, for lakeside walks, boat trips and canoeing.'),
 'hamburg-h5': ('레퍼반', 'Reeperbahn', '장크트파울리의 유흥가로, 비틀스가 무명 시절 공연한 클럽 거리입니다.', 'St. Pauli’s nightlife strip, where the Beatles played before they were famous.'),
 'potsdam-h5': ('하벨 호수 유람선', 'Havel lakes boat trip', '포츠담을 둘러싼 하벨강 호수를 따라 궁전과 정원을 지나는 유람선입니다.', 'Boat trips on the Havel lakes around Potsdam, past palaces and gardens.'),
}
ADD = {
 'berlin': [
  (9, S('학살된 유럽 유대인 추모비', 'Memorial to the Murdered Jews of Europe', '콘크리트 기둥 2,711개가 물결치는 추모 공간으로, 지하에 정보 센터가 있습니다.', 'A field of 2,711 concrete stelae, with an information centre underneath.', 'Memorial to the Murdered Jews of Europe', 30, 60, group=GOV,
        n='추모 공간은 무료이고 늘 열려 있습니다. 지하 정보 센터는 월요일에 쉽니다.|The memorial is free and always open; the information centre closes on Mondays.')),
  (10, S('베를린 텔레비전 탑', 'Berlin TV Tower', '알렉산더 광장의 368m 탑으로, 203m 전망대와 회전 레스토랑이 있습니다.', 'The 368 m tower on Alexanderplatz, with a 203 m observation deck and revolving restaurant.', 'Berliner Fernsehturm', 60, 90, group=MITTE,
         b='rec', s='https://tv-turm.de/en/', n='시간 지정 표를 온라인으로 사면 기다리지 않습니다.|Buy a timed ticket online to skip the queue.')),
  (11, S('베를린 대성당', 'Berlin Cathedral', '박물관 섬의 녹색 돔 대성당으로, 돔 회랑에 오르고 호엔촐레른 가문 묘소를 봅니다.', 'The green-domed cathedral on Museum Island—climb to the dome gallery and see the Hohenzollern crypt.', 'Berliner Dom', 45, 60, group=MITTE)),
  (12, S('잔다르멘마르크트', 'Gendarmenmarkt', '콘서트홀과 쌍둥이 성당이 마주한 베를린에서 가장 아름다운 광장입니다.', 'Berlin’s finest square, framed by the concert hall and twin cathedrals.', 'Gendarmenmarkt', 20, 30, group=MITTE)),
  (13, S('테러의 토포그래피', 'Topography of Terror', '게슈타포와 SS 본부 터에 나치 정권의 범죄를 기록한 무료 기록관입니다.', 'A free documentation centre on the site of the Gestapo and SS headquarters, recording the crimes of the Nazi regime.', 'Topography of Terror', 60, 90, group=WALL)),
  (14, S('베를린 장벽 기념관', 'Berlin Wall Memorial (Bernauer Straße)', '장벽과 감시탑, 경계 지대가 그대로 남은 베르나우어 거리의 야외 기념관입니다.', 'The open-air memorial on Bernauer Straße, where a section of Wall, a watchtower and the death strip survive.', 'Berlin Wall Memorial', 60, 90, group=WALL,
         n='야외 전시는 무료이고, 방문자 센터는 월요일에 쉽니다.|The open-air site is free; the visitor centre closes on Mondays.')),
  (15, S('유대 박물관', 'Jewish Museum Berlin', '리베스킨트가 설계한 지그재그 건물에 독일 유대인 2,000년 역사를 전시합니다.', 'Two thousand years of German-Jewish history in Daniel Libeskind’s zigzag building.', 'Jewish Museum Berlin', 120, 180, group=KREUZ)),
  (16, S('템펠호퍼 펠트', 'Tempelhofer Feld', '옛 템펠호프 공항 활주로를 그대로 공원으로 바꾼 곳으로, 자전거와 연을 즐깁니다.', 'The former Tempelhof airport, its runways turned into a vast park for cycling and kite-flying.', 'Tempelhofer Feld', 60, 120, group=KREUZ)),
  (17, S('카이저 빌헬름 기념 교회와 쿠담', 'Kaiser Wilhelm Memorial Church & Kurfürstendamm', '전쟁으로 부서진 탑을 그대로 남긴 교회와, 서베를린의 쇼핑 거리 쿠담입니다.', 'The church whose bomb-damaged tower was left as a memorial, and West Berlin’s shopping boulevard.', 'Kaiser Wilhelm Memorial Church', 30, 60, group=WEST)),
  (18, S('작센하우젠 강제수용소 기념관', 'Sachsenhausen Memorial', '나치 강제수용소 터에 세운 기념관과 박물관입니다.', 'The memorial and museum on the site of the Nazi concentration camp.', 'Sachsenhausen Memorial and Museum', 180, 240, group=DAY,
         n='베를린에서 S반으로 약 45분, 오라니엔부르크역에서 걸어서 약 20분입니다. 입장은 무료입니다.|About 45 min on the S-Bahn to Oranienburg, then about 20 min on foot; free entry.')),
 ],
 'hamburg': [
  (6, S('함부르크 시청', 'Hamburg Rathaus', '네오르네상스 양식의 화려한 시청으로, 안내 투어로 내부를 봅니다.', 'The ornate neo-Renaissance city hall, its interior seen on guided tours.', 'Hamburger Rathaus', 30, 45, group=H_OLD)),
  (7, S('성 미하엘 교회', 'St. Michael’s Church', '함부르크의 상징인 바로크 교회로, 132m 탑 전망대에서 항구가 보입니다.', 'Hamburg’s landmark Baroque church, with harbour views from its 132 m tower.', 'St. Michaelis Hamburg', 45, 60, group=H_OLD)),
  (8, S('란둥스브뤼켄과 항구 유람선', 'Landungsbrücken & harbour cruise', '항구 선착장에서 배를 타고 컨테이너 터미널과 창고 지구를 돕니다.', 'Boat tours from the harbour piers past the container terminals and warehouses.', 'Landungsbrücken', 60, 90, group=H_PORT,
        n='대중교통 승차권으로 타는 62번 페리도 항구를 지나갑니다.|Ferry line 62, on a regular transit ticket, also crosses the harbour.')),
  (9, S('어시장', 'Fischmarkt', '일요일 이른 아침에만 서는 300년 넘은 강변 시장으로, 옛 어시장 홀에서 라이브 음악이 열립니다.', 'The 300-year-old riverside market held only early on Sunday mornings, with live music in the old fish-auction hall.', 'Hamburger Fischmarkt', 60, 90, group=H_PORT,
        n='일요일 새벽(여름 5시, 겨울 7시쯤)부터 9시 반 무렵까지 열립니다.|Sundays only, from about 5 am (7 am in winter) to about 9.30 am.')),
  (10, S('국제 해양 박물관', 'International Maritime Museum', '하펜시티의 옛 창고 9개 층에 배 모형과 항해 역사를 전시합니다.', 'Nine floors of ship models and seafaring history in an old HafenCity warehouse.', 'International Maritime Museum Hamburg', 90, 120, group=H_OLD)),
  (11, S('함부르크 미술관', 'Hamburger Kunsthalle', '중세부터 현대까지 독일 최대급 미술관으로, 프리드리히의 ‘안개 바다 위의 방랑자’가 있습니다.', 'One of Germany’s largest art museums, from medieval to contemporary, home to Friedrich’s “Wanderer above the Sea of Fog”.', 'Hamburger Kunsthalle', 90, 120, group=H_ALS, c='mon')),
 ],
 'potsdam': [
  (6, S('알렉산드로프카', 'Alexandrowka', '19세기 러시아 군악대를 위해 지은 목조 러시아 마을로, 유네스코 세계유산입니다.', 'The wooden Russian colony built in the 19th century for Russian military musicians, part of a UNESCO site.', 'Alexandrowka Potsdam', 30, 45)),
  (7, S('글리니케 다리', 'Glienicke Bridge', '냉전 시대 동서 스파이를 맞교환하던 ‘스파이 다리’입니다.', 'The “Bridge of Spies”, where East and West swapped captured agents during the Cold War.', 'Glienicker Brücke', 20, 30)),
  (8, S('바벨스베르크 영화 공원', 'Filmpark Babelsberg', '1912년부터 이어진 영화 스튜디오 옆의 테마파크로, 세트와 스턴트 쇼가 있습니다.', 'The theme park beside the film studios operating since 1912, with sets and stunt shows.', 'Filmpark Babelsberg', 180, 240, group=DAY,
        n='대략 4~11월 초에만 엽니다.|Open roughly April to early November.')),
 ],
}
IT = [
 ("      ['미테|Mitte', 4, 1, 5, 2],\n      ['장벽 기념관과 샤를로텐부르크|Wall Memorial & Charlottenburg', 3, 6, 7],\n    ],\n    trips: [['아우토슈타트|Autostadt', 8]],",
  "      ['정부 지구와 박물관 섬|Government quarter & Museum Island', 4, 1, 9, 12, 2, 11, 10],\n      ['장벽과 크로이츠베르크|The Wall & Kreuzberg', 14, 5, 13, 15, 3],\n      ['서베를린|West Berlin', 6, 17, 7, 16],\n    ],\n    trips: [\n      ['작센하우젠|Sachsenhausen', 18],\n      ['아우토슈타트|Autostadt', 8],\n    ],"),
 ("  hamburg: [4, 1, 3, 2, 5],", "  hamburg: { days: [['구시가와 하펜시티|Old town & HafenCity', 6, 7, 1, 10, 3, 2], ['항구와 알스터|Harbour & Alster', 9, 8, 5, 4, 11]] },"),
 ("  potsdam: [3, 1, 2, 5],", "  potsdam: { days: [['', 3, 6, 1, 2, 4, 7, 5]], trips: [['바벨스베르크 영화 공원|Filmpark Babelsberg', 8]] },"),
]
BER = [(GOV, [4, 1, 9, 6]), (MITTE, [12, 2, 11, 10]), (WALL, [14, 5, 13]), (KREUZ, [15, 3, 16]), (WEST, [17, 7]), (DAY, [18, 8])]
HAM = [(H_OLD, [6, 7, 1, 10, 2, 3]), (H_PORT, [8, 9, 5]), (H_ALS, [4, 11])]
MUSEUM_NOTE = ("n: '나머지 박물관은 대부분 월요일에 쉽니다.|Most of the museums close on Mondays.'",
               "n: '페르가몬 박물관은 2023년 10월부터 공사로 닫혀 있고 2027년부터 단계적으로 다시 열 예정입니다. 나머지 박물관은 대부분 월요일에 쉽니다.|The Pergamonmuseum has been closed for renovation since October 2023, reopening in stages from 2027. Most of the other museums close on Mondays.'")


def main():
    c = rd('cities.ts')
    for hid, (ko, en, dko, den) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        blk = re.sub(r'name: \{[^\n]*\}', f'name: {{ ko: "{ko}", en: "{en}" }}', blk)
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        c = c[:i] + blk + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-benelux.ts')
    it = rd('itinerary-central.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-central.ts', it)
    c = reorder(c, 'berlin', [(n, g) for g, ns in BER for n in ns])
    c = reorder(c, 'hamburg', [(n, g) for g, ns in HAM for n in ns])
    by = blocks(c, 'potsdam')
    c = reorder(c, 'potsdam', [(n, DAY if n == 8 else None) for n in itinerary_order(it, 'potsdam', set(by))])
    wr('cities.ts', c)
    v = rd('visit-benelux.ts')
    assert v.count(MUSEUM_NOTE[0]) == 1
    wr('visit-benelux.ts', v.replace(*MUSEUM_NOTE))


if __name__ == '__main__':
    main()
