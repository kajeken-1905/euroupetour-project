#!/usr/bin/env python3
"""Slovenia step 1 (2026-11-06, all-country plan): more sights for Ljubljana, Bled, Piran, Maribor and Postojna (incl.
themed: Vinag wine cellar, Sečovlje salt pans), Korean name fixes, Bled h5 (Ojstrica viewpoint) text fixed and the
Vintgar Gorge the itinerary already named added as h6; lists in itinerary order. Run once.
After the run (user choice): maribor-h7 Vinag cellar → Piramida hill, edited by hand (no Commons photo of Vinag)."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder, city_span
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
NAMES = [('maribor', '렌트 광장', '중앙 광장과 페스트 기념탑'), ('maribor', '포흐리예', '포호리예'),
         ('postojna', '포스트오이나 동굴', '포스토이나 동굴'), ('postojna', '프레디아마 성', '프레드야마 성'),
         ('postojna', '포스트오이나 구시가', '포스토이나 시내'), ('bled', '브인트 전망', '오이스트리차 전망대'),
         ('ljubljana', '츠베타르나 시장', '중앙 시장')]
BLED_H5 = ('description: { ko: "호수 전경 하이킹 포인트입니다.", en: "Hiking viewpoints over the lake." }',
           'description: { ko: "호수 서쪽 숲길로 20~30분 오르면 섬과 성, 알프스가 한 장에 담기는 전망대입니다.", en: "A 20–30 minute climb through the woods on the west shore to a viewpoint framing the island, castle and Alps." }')
ADD = {
 'ljubljana': [
  (6, S('류블랴나 대성당', 'Ljubljana Cathedral', '바로크 프레스코로 가득한 성 니콜라스 대성당으로, 청동 정문에 슬로베니아 역사가 새겨져 있습니다.', 'St Nicholas’s Cathedral, filled with Baroque frescoes, its bronze doors carved with Slovenian history.', 'Ljubljana Cathedral', 15, 20)),
  (7, S('플레치니크 하우스', 'Plečnik House', '류블랴나를 설계한 건축가 요제 플레치니크의 집으로, 그의 작업실과 생활공간을 안내 투어로 봅니다. 그의 류블랴나 작품은 유네스코 세계유산입니다.', 'The home of Jože Plečnik, the architect who shaped Ljubljana, with his studio and rooms seen on guided tours; his Ljubljana works are a UNESCO World Heritage Site.', 'Plečnikova hiša', 60, 75,
        b='rec', n='안내 투어로만 들어갑니다.|Guided tours only.')),
  (8, S('티볼리 공원', 'Tivoli Park', '시내 서쪽의 가장 큰 공원으로, 야외 사진 전시가 열리는 산책로와 티볼리 성이 있습니다.', 'The city’s largest park, west of the centre, with an outdoor photo gallery along its promenade and Tivoli Mansion.', 'Tivoli Park Ljubljana', 45, 90)),
  (9, S('메텔코바', 'Metelkova', '옛 군 막사를 예술가들이 차지해 그라피티와 조형물로 꾸민 자치 문화 지구입니다.', 'Former army barracks taken over by artists, covered in graffiti and sculpture—an autonomous cultural quarter.', 'Metelkova Mesto', 20, 30)),
  (10, S('슬로베니아 국립 미술관', 'National Gallery of Slovenia', '중세부터 20세기 초까지 슬로베니아와 유럽 회화를 모은 미술관입니다.', 'Slovenian and European painting from the Middle Ages to the early 20th century.', 'National Gallery of Slovenia', 60, 90, c='mon')),
  (11, S('슈코퓨 로카', 'Škofja Loka', '성과 중세 광장이 잘 남은 슬로베니아에서 손꼽히게 오래된 소도시입니다.', 'One of Slovenia’s oldest towns, with a castle and a well-kept medieval square.', 'Škofja Loka', 180, 240, group=DAY,
        n='류블랴나에서 버스나 기차로 약 30~40분입니다.|About 30–40 min by bus or train from Ljubljana.')),
  (12, S('벨리카 플라니나', 'Velika Planina', '케이블카로 오르는 고원 목초지로, 지붕이 낮은 목동 오두막 마을이 흩어져 있습니다.', 'A high alpine pasture reached by cable car, dotted with a village of low-roofed herdsmen’s huts.', 'Velika Planina', 300, 420, group=DAY,
         n='캄니크 근처 케이블카 승강장까지 차로 약 40분입니다. 날씨가 나쁘면 케이블카가 멈춥니다.|About 40 min by car to the cable car near Kamnik; it stops in bad weather.')),
 ],
 'bled': [
  (6, S('빈트가르 협곡', 'Vintgar Gorge', '라도브나강이 만든 1.6km 협곡을 나무 데크 길로 따라 걷습니다.', 'A 1.6 km gorge carved by the Radovna, walked on wooden boardwalks.', 'Vintgar Gorge', 120, 150, group=DAY,
        b='rec', n='대략 4~11월에만 열고 입장 시간대를 온라인으로 미리 사는 편이 좋습니다. 블레드에서 셔틀버스나 걸어서 약 1시간입니다.|Open roughly April to November; buy a timed ticket online. About an hour on foot or by shuttle from Bled.')),
 ],
 'piran': [
  (6, S('세르게이 마셰라 해양 박물관', 'Sergej Mašera Maritime Museum', '바닷가 궁전 건물에 피란의 항해·어업·소금 산업 역사를 전시합니다.', 'Piran’s seafaring, fishing and salt-making history in a seafront palazzo.', 'Pomorski muzej Piran', 45, 60)),
  (7, S('세초블레 염전 자연공원', 'Sečovlje Salina Nature Park', '700년 넘게 옛 방식으로 소금을 만드는 염전으로, 소금 박물관과 새 관찰 길이 있습니다.', 'Salt pans worked the traditional way for over 700 years, with a salt museum and birdwatching trails.', 'Sečovlje Salina Nature Park', 120, 180, group=DAY,
        n='피란에서 차나 버스로 약 20분입니다.|About 20 min by car or bus from Piran.')),
 ],
 'maribor': [
  (6, S('마리보르 대성당', 'Maribor Cathedral', '고딕과 바로크가 섞인 성당으로, 종탑에 올라 시내와 드라바강을 볼 수 있습니다.', 'A Gothic and Baroque cathedral whose bell tower looks over the city and the Drava.', 'Maribor Cathedral', 20, 30)),
  (7, S('비나그 와인 저장고', 'Vinag Wine Cellar', '시내 광장 아래로 2km 넘게 이어지는 유럽에서 손꼽히게 큰 옛 와인 저장고로, 투어와 시음이 있습니다.', 'One of Europe’s largest historic wine cellars, running over 2 km beneath the city centre, with tours and tastings.', 'Vinag Wine Cellar Maribor', 60, 90, b='rec')),
  (8, S('마리보르 유대교 회당', 'Maribor Synagogue', '유럽에서 오래된 축에 드는 중세 유대교 회당으로, 지금은 문화 공간입니다.', 'One of the oldest surviving medieval synagogues in Europe, now a cultural centre.', 'Sinagoga Maribor', 20, 30)),
 ],
 'postojna': [
  (6, S('슈코찬 동굴', 'Škocjan Caves', '레카강이 만든 거대한 지하 협곡으로, 동굴 안 다리 아래 깊은 협곡이 펼쳐집니다. 유네스코 세계유산입니다.', 'A vast underground canyon carved by the Reka river, crossed by a bridge high above the gorge; a UNESCO World Heritage Site.', 'Škocjan Caves', 150, 180, group=DAY,
        b='rec', s='https://www.park-skocjanske-jame.si/en/', n='정해진 시간에 출발하는 투어로만 들어갑니다. 포스토이나에서 차로 약 25분입니다.|Tours at fixed times only; about 25 min by car from Postojna.')),
  (7, S('리피차 종마 사육장', 'Lipica Stud Farm', '하얀 리피차너 말의 원산지로, 1580년부터 말을 길러 온 사육장입니다.', 'The original home of the white Lipizzaner horses, bred here since 1580.', 'Lipica Stud Farm', 120, 180, group=DAY,
        n='포스토이나에서 차로 약 40분입니다.|About 40 min by car from Postojna.')),
 ],
}
IT = [
 ("  ljubljana: [3, 5, 2, 1, 4],",
  "  ljubljana: {\n    days: [\n      ['구시가와 성|Old town & castle', 3, 5, 6, 2, 1, 4],\n      ['티볼리와 플레치니크|Tivoli & Plečnik', 8, 10, 7, 9],\n    ],\n    trips: [\n      ['슈코퓨 로카|Škofja Loka', 11],\n      ['벨리카 플라니나|Velika Planina', 12],\n    ],\n  },"),
 ("  bled: { days: [['', 1, 2, 4, 3]], trips: [['빈트가르 협곡|Vintgar Gorge', 5]] },",
  "  bled: { days: [['', 1, 2, 4, 3, 5]], trips: [['빈트가르 협곡|Vintgar Gorge', 6]] },"),
 ("  piran: [5, 1, 2, 3, 4],", "  piran: { days: [['', 5, 1, 6, 2, 3, 4]], trips: [['세초블레 염전|Sečovlje Salina', 7]] },"),
 ("  maribor: { days: [['', 3, 1, 2, 4]], trips: [['포호리에|Pohorje', 5]] },",
  "  maribor: { days: [['', 3, 1, 6, 8, 7, 2, 4]], trips: [['포호리예|Pohorje', 5]] },"),
 ("  postojna: { days: [['', 1, 3, 4, 5]], trips: [['프레드야마 성|Predjama Castle', 2]] },",
  "  postojna: { days: [['', 1, 3, 4, 5]], trips: [['프레드야마 성|Predjama Castle', 2], ['슈코찬 동굴|Škocjan Caves', 6], ['리피차|Lipica', 7]] },"),
]


def main():
    c = rd('cities.ts')
    for cid, a, b in NAMES:
        i, j = city_span(c, cid)
        blk = c[i:j]
        assert blk.count(f'"{a}"') == 1, (cid, a)
        c = c[:i] + blk.replace(f'"{a}"', f'"{b}"') + c[j:]
    assert c.count(BLED_H5[0]) == 1
    c = c.replace(*BLED_H5)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-balkan.ts')
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid in ADD:
        by = blocks(c, cid)
        m = re.search(rf"^  {cid}: (.*?)(?=^  [a-z'])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)\]", t)}
        c = reorder(c, cid, [(n, DAY if n in trips else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
