#!/usr/bin/env python3
"""Montenegro step 1 (2026-11-07, all-country plan): fix garbled Korean names (Savina Monastery was '페트 다닐라
수도원', Budva h5 '시트니치 / 스베티스테판', Podgorica h2/h5) and one-line descriptions; add sights incl. themed
Šipčanik underground wine cellar and Ostrog / Skadar Lake day trips from Podgorica; lists in itinerary order. Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
REWRITE = {
 'kotor-h1': ('코토르 구시가', 'Kotor Old Town', '베네치아 시대 성벽 안에 돌 광장과 좁은 골목, 교회가 미로처럼 얽힌 유네스코 세계유산 구시가입니다.', 'The UNESCO-listed old town inside Venetian walls, a maze of stone squares, narrow lanes and churches.', None),
 'kotor-h2': ('성 트리푼 대성당', 'Cathedral of Saint Tryphon', '1166년에 봉헌한 로마네스크 대성당으로, 두 종탑과 보물관이 있습니다.', 'The Romanesque cathedral consecrated in 1166, with twin bell towers and a treasury.', None),
 'kotor-h3': ('산 조반니 요새', 'San Giovanni Fortress', '구시가 뒤 산비탈의 성벽을 따라 1,300여 계단을 오르면 코토르만이 한눈에 내려다보입니다.', 'Climb some 1,300 steps along the walls behind the old town for the classic view over the Bay of Kotor.', None),
 'kotor-h4': ('코토르만 유람선', 'Bay of Kotor boat trip', '피오르처럼 깊이 들어온 만을 따라 페라스트와 섬, 푸른 동굴까지 도는 배 여행입니다.', 'A boat trip around the fjord-like bay to Perast, its islands and the Blue Cave.', None),
 'kotor-h5': ('고양이 박물관', 'Cats Museum', '고양이의 도시 코토르에 있는 작은 박물관으로, 고양이 그림과 엽서, 우표를 모았습니다.', 'A small museum in cat-loving Kotor, full of cat prints, postcards and stamps.', None),
 'budva-h1': ('부드바 구시가', 'Budva Old Town', '바다에 튀어나온 곶 위 성벽 안의 작은 구시가로, 골목과 교회, 성채가 있습니다.', 'The small walled old town on a headland, with lanes, churches and a citadel.', None),
 'budva-h2': ('슬로벤스카 해변', 'Slovenska Beach', '구시가 동쪽으로 길게 이어진 도시 해변과 해변 산책로입니다.', 'The long town beach and promenade east of the old town.', None),
 'budva-h3': ('스베티 니콜라 섬', 'Sveti Nikola Island', '부드바 앞바다의 숲 섬으로, 여름엔 배로 건너가 해변에서 쉽니다.', 'The wooded island off Budva, reached by boat in summer for its beaches.', None),
 'budva-h4': ('모그렌 해변', 'Mogren Beach', '구시가 서쪽 절벽 산책로를 따라가면 나오는 작은 해변 두 곳입니다.', 'Two small beaches reached along the cliff path west of the old town.', None),
 'budva-h5': ('스베티 스테판 전망', 'Sveti Stefan viewpoint', '둑길로 이어진 섬 마을 호텔로, 언덕 위 전망대와 옆 해변에서 바라봅니다.', 'The island-village hotel joined to the shore by a causeway, viewed from the hillside lookout and nearby beach.', None),
 'podgorica-h1': ('밀레니엄 다리', 'Millennium Bridge', '모라차강 위의 사장교로, 수도의 상징입니다.', 'The cable-stayed bridge over the Morača, a symbol of the capital.', None),
 'podgorica-h2': ('스타라 바로시 (옛 시가지)', 'Stara Varoš', '오스만 시대 골목과 모스크, 시계탑이 남은 옛 시가지입니다.', 'The Ottoman-era old quarter of lanes, mosques and a clock tower.', None),
 'podgorica-h3': ('독립 광장', 'Independence Square', '카페와 분수가 있는 시내 중앙 광장입니다.', 'The central square with cafés and fountains.', None),
 'podgorica-h4': ('모라차 강변', 'Morača riverside', '모라차강과 리브니차강이 만나는 곳의 강변 산책로와 옛 다리입니다.', 'Riverside walks and old bridges where the Ribnica meets the Morača.', None),
 'podgorica-h5': ('시계탑', 'Clock Tower (Sahat kula)', '17세기 오스만 시대의 돌 시계탑입니다.', 'The 17th-century Ottoman stone clock tower.', 'Sahat kula Podgorica'),
 'herceg-novi-h1': ('포르테 마레', 'Forte Mare', '바닷가 절벽 위의 요새로, 여름엔 공연장으로 씁니다.', 'The seaside fortress on a cliff, used as an open-air venue in summer.', None),
 'herceg-novi-h2': ('시계탑과 벨라비스타 광장', 'Clock Tower & Belavista Square', '구시가 입구의 시계탑을 지나 계단을 오르면 교회가 선 작은 광장이 나옵니다.', 'Through the clock-tower gate and up the steps to the little church square of the old town.', 'Sahat kula Herceg Novi'),
 'herceg-novi-h3': ('스파뇰라 요새', 'Španjola Fortress', '시내 위 언덕의 요새로, 코토르만 입구가 내려다보입니다.', 'The hilltop fortress above town, overlooking the mouth of the Bay of Kotor.', None),
 'herceg-novi-h4': ('사비나 수도원', 'Savina Monastery', '숲속에 자리한 세르비아 정교회 수도원으로, 18세기 교회와 보물관이 있습니다.', 'A Serbian Orthodox monastery in the woods, with an 18th-century church and treasury.', 'Savina Monastery'),
 'herceg-novi-h5': ('페트 다니차 해안 산책로', 'Pet Danica promenade', '옛 철길을 따라 바다를 끼고 수 km 이어지는 해안 산책로입니다.', 'A seafront walk of several kilometres along the old railway line.', 'Šetalište Pet Danica Herceg Novi'),
}
ADD = {
 'kotor': [
  (7, S('몬테네그로 해양 박물관', 'Maritime Museum of Montenegro', '바로크 궁전에 코토르 항해사들의 배 모형과 무기, 초상화를 전시합니다.', 'Ship models, weapons and portraits of Kotor’s seafarers in a Baroque palace.', 'Maritime Museum of Montenegro', 45, 60)),
  (8, S('성 루카 성당', 'Church of St Luke', '1195년에 세운 작은 교회로, 가톨릭과 정교회가 함께 썼습니다.', 'A small church built in 1195, long shared by Catholics and Orthodox.', 'Church of St. Luke Kotor', 10, 15)),
 ],
 'budva': [
  (6, S('부드바 성채', 'Budva Citadel', '구시가 끝 바닷가 성채로, 성벽 위에서 해변과 섬이 보입니다.', 'The seafront citadel at the tip of the old town, with views of the beaches and island.', 'Citadela Budva', 20, 30)),
 ],
 'podgorica': [
  (6, S('부활 대성당', 'Cathedral of the Resurrection', '2013년 봉헌한 세르비아 정교회 대성당으로, 금빛 모자이크로 가득합니다.', 'The Serbian Orthodox cathedral consecrated in 2013, filled with golden mosaics.', 'Cathedral of the Resurrection of Christ Podgorica', 20, 30)),
  (7, S('시프차니크 와인 저장고', 'Šipčanik wine cellar', '옛 군용 비행기 격납고 터널을 와인 저장고로 바꾼 곳으로, 투어와 시음이 있습니다.', 'A former military aircraft tunnel turned into a wine cellar, with tours and tastings.', 'Šipčanik Podgorica', 60, 90,
        b='rec', n='플란타제 와이너리 공식 안내로 예약합니다. 시내에서 차로 약 20분입니다.|Book through the Plantaže winery; about 20 min by car from the centre.')),
  (8, S('스카다르 호수', 'Lake Skadar', '발칸 최대의 호수로, 비르파자르 마을에서 배를 타고 수련과 새가 많은 물길을 돕니다.', 'The largest lake in the Balkans—take a boat from Virpazar through channels of water lilies and birdlife.', 'Virpazar', 240, 300, group=DAY,
        n='포드고리차에서 기차나 차로 약 30분입니다.|About 30 min by train or car from Podgorica.')),
  (9, S('오스트로그 수도원', 'Ostrog Monastery', '수직 절벽 속에 하얗게 지은 정교회 수도원으로, 발칸에서 손꼽히는 순례지입니다.', 'The white Orthodox monastery built into a sheer cliff, one of the Balkans’ great pilgrimage sites.', 'Ostrog Monastery', 120, 180, group=DAY,
        n='포드고리차에서 차로 약 1시간입니다. 단정한 옷을 입으세요.|About an hour by car from Podgorica; dress modestly.')),
 ],
 'herceg-novi': [
  (6, S('칸리 쿨라', 'Kanli Kula', '오스만 시대 요새이자 옛 감옥으로, 지금은 여름 공연장입니다.', 'An Ottoman fortress and former prison, now a summer open-air stage.', 'Kanli kula Herceg Novi', 20, 30)),
 ],
}
IT = [
 ("  kotor: { days: [['', 1, 2, 5, 3]], trips: [['코토르 만 유람|Bay of Kotor cruise', 4], ['페라스트|Perast', 6]] },",
  "  kotor: { days: [['', 1, 2, 8, 7, 5, 3]], trips: [['코토르만 유람선|Bay of Kotor boat trip', 4], ['페라스트|Perast', 6]] },"),
 ("    days: [['', 1, 4, 2]],\n    trips: [\n      ['스베티 니콜라 섬|Sveti Nikola Island', 3],",
  "    days: [['', 1, 6, 4, 2]],\n    trips: [\n      ['스베티 니콜라 섬|Sveti Nikola Island', 3],"),
 ("  podgorica: [3, 5, 2, 4, 1],",
  "  podgorica: { days: [['', 3, 6, 5, 2, 4, 1], ['와인|Wine', 7]], trips: [['스카다르 호수|Lake Skadar', 8], ['오스트로그 수도원|Ostrog Monastery', 9]] },"),
 ("  'herceg-novi': [3, 2, 1, 5, 4],", "  'herceg-novi': { days: [['', 3, 2, 6, 1, 5]], trips: [['사비나 수도원|Savina Monastery', 4]] },"),
]


def main():
    c = rd('cities.ts')
    for hid, (ko, en, dko, den, q) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        blk = re.sub(r'name: \{[^\n]*\}', f'name: {{ ko: "{ko}", en: "{en}" }}', blk)
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        if q:
            blk = re.sub(r'query=[^"]*"', 'query=' + urllib.parse.quote(q) + '"', blk)
        c = c[:i] + blk + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-balkan.ts')
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid in ADD:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)\]", t)}
        c = reorder(c, cid, [(n, DAY if n in trips else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
