#!/usr/bin/env python3
"""2026-11-15 (user request): five Czech castles as day trips and Šultysova Street in Kutná Hora. Hrádek u Nechanic,
Jaroměřice, Švihov and Červená Lhota are state castles (roughly April–October, closed Mondays; hours unverified);
Tochovice is private and its site (zamektochovice.cz) gives no visiting hours. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
ADD = {
 'prague': [
  (22, S('흐라데크 우 네하니츠 성', 'Hrádek u Nechanic Castle', '1850년대 영국 튜더 고딕 양식으로 지은 하라흐 가문의 성으로, 영국식 정원과 원래 가구가 남은 방들을 둘러봅니다.', 'The Harrach family’s castle built in the 1850s in English Tudor Gothic style, with an English park and rooms keeping their original furnishings.', 'Zámek Hrádek u Nechanic', 60, 90, group=DAY,
      n='프라하에서 흐라데츠크랄로베까지 기차로 약 1시간 40분, 다시 버스로 약 20분입니다. 대략 4~10월에만 열고 월요일엔 쉽니다.|About 1 hr 40 min by train from Prague to Hradec Králové, then about 20 min by bus; open roughly April to October, closed Mondays.')),
  (23, S('토호비체 성', 'Tochovice Chateau', '영국식 정원과 작은 섬이 있는 연못에 둘러싸인 고전주의 성으로, 프라하 남서쪽 시골에 있습니다.', 'A Neoclassical chateau in the countryside south-west of Prague, surrounded by an English park and a pond with a small island.', 'Zámek Tochovice', 45, 60, group=DAY,
      n='프라하에서 남서쪽 약 60km, 차로 1시간입니다. 성 누리집에 개방 안내가 없어 바깥과 공원 위주로 봅니다.|About 60 km south-west of Prague, 1 hr by car; the chateau’s website gives no visiting hours, so expect to see the exterior and park.')),
 ],
 'kutna-hora': [
  (7, S('슐티소바 거리', 'Šultysova Street', '팔라츠키 광장에서 성 야고보 성당 쪽으로 이어지는 거리로, 르네상스·바로크 저택과 1715년 세운 페스트 기념탑이 있습니다.', 'The street running from Palacký Square towards St James’s Church, lined with Renaissance and Baroque houses and the plague column of 1715.', 'Šultysova Kutná Hora', 15, 20)),
 ],
 'plzen': [
  (6, S('슈비호프 수상성', 'Švihov Water Castle', '15세기 말 해자와 연못으로 둘러싸 지은 후기 고딕 수상성으로, 예배당 벽화와 영화 촬영지로 유명합니다.', 'A late-Gothic water castle of the late 15th century ringed by moats and ponds, known for its chapel frescoes and as a film location.', 'Hrad Švihov', 60, 90, group=DAY,
      n='플젠에서 남쪽 약 30km, 기차로 약 40분입니다. 대략 4~10월에만 열고 월요일엔 쉽니다.|About 30 km south of Plzeň, around 40 min by train; open roughly April to October, closed Mondays.')),
 ],
 'telc': [
  (7, S('야로메르지체 성', 'Jaroměřice nad Rokytnou Chateau', '18세기 초 지은 체코에서 손꼽히게 큰 바로크 성으로, 프랑스식 정원과 큰 돔의 성 마르가리타 교회가 붙어 있습니다.', 'One of the largest Baroque chateaux in the Czech lands, built in the early 18th century, with a French garden and the great-domed Church of St Margaret attached.', 'Zámek Jaroměřice nad Rokytnou', 60, 90, group=DAY,
      n='텔치에서 동쪽 약 35km, 차로 40분입니다. 대략 4~10월에만 열고 월요일엔 쉽니다.|About 35 km east of Telč, 40 min by car; open roughly April to October, closed Mondays.')),
 ],
 'ceske-budejovice': [
  (8, S('체르베나 르호타 성', 'Červená Lhota Chateau', '연못 한가운데 바위섬에 선 붉은 르네상스 성으로, 돌다리로 건너가며 체코에서 가장 사진이 많이 찍히는 성 가운데 하나입니다.', 'A red Renaissance chateau on a rocky islet in the middle of a pond, reached by a stone bridge and one of the most photographed castles in the Czech lands.', 'Zámek Červená Lhota', 60, 90, group=DAY,
      n='체스케부데요비체에서 북동쪽 약 55km, 차로 1시간입니다. 대략 4~10월에만 열고 월요일엔 쉽니다.|About 55 km north-east of České Budějovice, 1 hr by car; open roughly April to October, closed Mondays.')),
 ],
}
IT = [
 ("    trips: [['쿠트나호라|Kutná Hora', 13], ['카를슈테인 성|Karlštejn Castle', 14], ['슈코다 박물관|Škoda Museum', 21]],\n",
  "    trips: [\n      ['쿠트나호라|Kutná Hora', 13],\n      ['카를슈테인 성|Karlštejn Castle', 14],\n      ['슈코다 박물관|Škoda Museum', 21],\n      ['흐라데크 우 네하니츠 성|Hrádek u Nechanic', 22],\n      ['토호비체 성|Tochovice', 23],\n    ],\n"),
 ("  plzen: [1, 2, 3, 4, 5],\n", "  plzen: { days: [['', 1, 2, 3, 4, 5]], trips: [['슈비호프 수상성|Švihov Castle', 6]] },\n"),
 ("  'kutna-hora': [1, 2, 3, 4, 5, 6],\n", "  'kutna-hora': [1, 2, 3, 4, 5, 7, 6],\n"),
 ("  telc: { days: [['', 1, 6, 2, 3, 4]], trips: [['로슈테인 성|Roštejn Castle', 5]] },\n",
  "  telc: { days: [['', 1, 6, 2, 3, 4]], trips: [['로슈테인 성|Roštejn Castle', 5], ['야로메르지체 성|Jaroměřice', 7]] },\n"),
 ("  'ceske-budejovice': { days: [['', 1, 2, 4, 5, 3]], trips: [['흘루보카 성|Hluboká Castle', 6], ['홀라쇼비체|Holašovice', 7]] },\n",
  "  'ceske-budejovice': {\n    days: [['', 1, 2, 4, 5, 3]],\n    trips: [['흘루보카 성|Hluboká Castle', 6], ['홀라쇼비체|Holašovice', 7], ['체르베나 르호타 성|Červená Lhota', 8]],\n  },\n"),
]
c = rd('cities.ts')
for cid, items in ADD.items():
    c = add_sights(c, cid, items, 'visit-central.ts')
it = rd('itinerary-north.ts')
for a, b in IT:
    assert it.count(a) == 1, a[:60]
    it = it.replace(a, b)
wr('itinerary-north.ts', it)
by = blocks(c, 'kutna-hora')
c = reorder(c, 'kutna-hora', [(n, None) for n in itinerary_order(it, 'kutna-hora', set(by))])
wr('cities.ts', c)
print('ok')
