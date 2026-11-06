#!/usr/bin/env python3
"""Serbia step 1 (2026-11-06, all-country plan): fixes and more sights.
- nis-h3 was a duplicate of the Skull Tower (Ćele Kula) → Crveni Krst concentration camp museum (new photo).
- nis-h4 was named after Belgrade's Tašmajdan → Obrenovićeva Street; novi-sad-h4 'Almašani' → Dunavska & Zmaj Jovina
  streets (new photo); thin descriptions rewritten; name fixes.
- Belgrade h7–h11 (Tesla Museum, Museum of Yugoslavia, National Museum, Ada Ciganlija, Avala Tower), grouped by district.
- Novi Sad h6 Fruška Gora monasteries; Subotica h6 Raichle Palace. Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder, city_span
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
OLD = ('칼레메그단과 구시가', 'Kalemegdan & old town')
VRA = ('브라차르와 데디네', 'Vračar & Dedinje')
RIV = ('강변과 제문', 'Rivers & Zemun')
NAMES = [('novi-sad', '스렘스키카르로브치', '스렘스키 카를로브치'), ('subotica', '시나고가', '수보티차 유대교 회당')]
REWRITE = {  # id: (ko, en, dko, den, maps query)
 'nis-h3': ('붉은 십자가 강제수용소', 'Crveni Krst Concentration Camp', '제2차 세계 대전 때 나치가 운영한 강제수용소 터에 남은 기념관으로, 1942년 대탈출의 역사를 보여 줍니다.', 'A memorial museum on the site of a Nazi concentration camp, telling the story of the 1942 mass escape.', 'Logor Crveni krst Niš'),
 'nis-h4': ('오브레노비치 거리', 'Obrenovićeva Street', '요새 앞 다리에서 시내 광장까지 이어지는 보행자 거리로, 카페와 상점이 늘어서 있습니다.', 'The pedestrian street from the fortress bridge to the main square, lined with cafés and shops.', 'Obrenovićeva Niš'),
 'novi-sad-h3': ('두나브스키 공원', 'Dunavski Park', '구시가 옆의 19세기 공원으로, 작은 호수와 조각상이 있어 산책하기 좋습니다.', 'A 19th-century park beside the old town, with a small lake and statues—good for a stroll.', 'Dunavski park Novi Sad'),
 'novi-sad-h4': ('두나브스카 거리와 즈마이 요비나 거리', 'Dunavska & Zmaj Jovina streets', '자유 광장에서 이어지는 구시가 보행자 거리로, 파스텔 색 건물과 카페가 모여 있습니다.', 'The old-town pedestrian streets running off Freedom Square, with pastel buildings and cafés.', 'Zmaj Jovina Novi Sad'),
 'subotica-h5': ('아르누보 거리', 'Art Nouveau walk', '헝가리 아르누보 양식의 시청·회당·궁전이 모인 시내를 걸으며 타일과 장식 외벽을 봅니다.', 'A walk through the centre’s Hungarian Art Nouveau town hall, synagogue and palaces, with their tiles and ornate façades.', 'Korzo Subotica'),
}
ADD = {
 'belgrade': [
  (7, S('니콜라 테슬라 박물관', 'Nikola Tesla Museum', '테슬라의 유골함과 발명품, 실험 장치를 보여 주는 박물관으로, 안내 투어 때 테슬라 코일을 시연합니다.', 'The museum holding Tesla’s urn, inventions and apparatus, with Tesla-coil demonstrations on its guided tours.', 'Nikola Tesla Museum', 45, 60, group=VRA,
        c='mon', b='rec', n='안내 투어 시간에 맞춰 들어가는 편이 좋습니다.|Best visited on a scheduled guided tour.')),
  (8, S('유고슬라비아 박물관 (꽃의 집)', 'Museum of Yugoslavia (House of Flowers)', '티토의 무덤 ‘꽃의 집’과 유고슬라비아 시대 선물·기록을 전시하는 박물관입니다.', 'The museum around Tito’s mausoleum, the House of Flowers, with gifts and records of the Yugoslav era.', 'Museum of Yugoslavia', 60, 90, group=VRA, c='mon')),
  (9, S('세르비아 국립 박물관', 'National Museum of Serbia', '공화국 광장의 국립 박물관으로, 중세 필사본 ‘미로슬라브 복음서’와 세르비아·유럽 미술을 전시합니다.', 'The national museum on Republic Square, with the medieval Miroslav Gospel and Serbian and European art.', 'National Museum of Serbia', 90, 120, group=OLD, c='mon')),
  (10, S('아다 치간리야', 'Ada Ciganlija', '사바강 섬을 호수로 막아 만든 시민 휴양지로, 여름엔 호숫가 해변이 붐빕니다.', 'The Sava river island turned into a lake resort, its beaches packed in summer.', 'Ada Ciganlija', 90, 180, group=RIV)),
  (11, S('아발라 탑', 'Avala Tower', '시 남쪽 아발라 산 위의 TV 탑으로, 전망대에서 베오그라드와 평야가 내려다보입니다.', 'The TV tower on Mount Avala south of the city, with views over Belgrade and the plains from its deck.', 'Avala Tower', 120, 180, group=DAY,
         n='시내에서 차로 약 30분입니다.|About 30 min by car from the centre.')),
 ],
 'novi-sad': [
  (6, S('프루슈카 고라 수도원', 'Fruška Gora monasteries', '노비사드 남쪽 숲 언덕에 흩어진 세르비아 정교회 수도원들로, 크루셰돌·노보 호포보 등이 잘 알려져 있습니다.', 'Serbian Orthodox monasteries scattered over the wooded Fruška Gora hills south of Novi Sad, such as Krušedol and Novo Hopovo.', 'Novo Hopovo Monastery', 240, 360, group=DAY,
        n='여러 곳을 돌려면 차나 투어가 편합니다.|A car or tour is easiest for visiting several.')),
 ],
 'subotica': [
  (6, S('라이흘레 궁전', 'Raichle Palace', '건축가 라이흘레가 자기 집으로 지은 화려한 아르누보 저택으로, 지금은 현대 미술관입니다.', 'The flamboyant Art Nouveau house architect Ferenc Raichle built for himself, now a modern art gallery.', 'Raichle Palace Subotica', 20, 30)),
 ],
}
IT = [
 ("  belgrade: { days: [['', 3, 6, 2, 4, 1]], trips: [['제문|Zemun', 5]] },",
  "  belgrade: {\n    days: [\n      ['칼레메그단과 구시가|Kalemegdan & old town', 1, 4, 9, 6, 2],\n      ['브라차르와 데디네|Vračar & Dedinje', 3, 7, 8],\n      ['강변과 제문|Rivers & Zemun', 10, 5],\n    ],\n    trips: [['아발라 탑|Avala Tower', 11]],\n  },"),
 ("  'novi-sad': { days: [['', 4, 2, 3, 1]], trips: [['스렘스키 카를로브치|Sremski Karlovci', 5]] },",
  "  'novi-sad': { days: [['', 2, 4, 3, 1]], trips: [['스렘스키 카를로브치|Sremski Karlovci', 5], ['프루슈카 고라 수도원|Fruška Gora monasteries', 6]] },"),
 ("  subotica: { days: [['', 2, 1, 4, 5]], trips: [['팔리치 호수|Lake Palić', 3]] },",
  "  subotica: { days: [['', 2, 1, 4, 6, 5]], trips: [['팔리치 호수|Lake Palić', 3]] },"),
]
BEL = [(OLD, [1, 4, 9, 6, 2]), (VRA, [3, 7, 8]), (RIV, [10, 5]), (DAY, [11])]


def main():
    c = rd('cities.ts')
    for cid, a, b in NAMES:
        i, j = city_span(c, cid)
        blk = c[i:j]
        assert blk.count(f'"{a}"') == 1, (cid, a)
        c = c[:i] + blk.replace(f'"{a}"', f'"{b}"') + c[j:]
    for hid, (ko, en, dko, den, q) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        blk = re.sub(r'name: \{[^\n]*\}', f'name: {{ ko: "{ko}", en: "{en}" }}', blk)
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        blk = re.sub(r'query=[^"]*"', 'query=' + urllib.parse.quote(q) + '"', blk)
        c = c[:i] + blk + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-balkan.ts')
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    c = reorder(c, 'belgrade', [(n, g) for g, ns in BEL for n in ns])
    for cid in ('novi-sad', 'subotica'):
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)\]", t)}
        c = reorder(c, cid, [(n, DAY if n in trips else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)
    v = rd('visit-balkan.ts')
    v = re.sub(r"  'nis-h3': v\(.*\),", "  'nis-h3': v(45, 60),", v)
    wr('visit-balkan.ts', v)


if __name__ == '__main__':
    main()
