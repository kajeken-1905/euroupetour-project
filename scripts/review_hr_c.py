#!/usr/bin/env python3
"""Batch C Croatia (2026-11-22): +7 sights, Zagreb list order, country city groups. Facts from Wikipedia:
Croatian Museum of Naïve Art: 20th-c. naïve art, 1,900+ works, first floor of 18th-c. Raffay Palace, Sv. Ćirila i
Metoda 3, Gornji Grad. Maksimir Park: 316 ha, oldest and largest park founded by Bishop Vrhovac, early 19th-c. English
landscape style, five lakes, home to Zagreb Zoo. Primošten: between Šibenik and Trogir, once an islet walled in 1542,
causeway and name 1564 (primostiti = to bridge), St George church 1485, famous vineyards (photo hung at UN, UNESCO
tentative), Raduča beach. Kornati: 89 islands, densest archipelago in the Mediterranean, national park west of Šibenik.
Baredine Cave (hr): first show cave in Croatian Istria, open since 1995, between Poreč, Višnjan and Tar, 5 km from the
sea. Vrsar: 9 km south of Poreč, hilltop old centre with St Martin church and 40 m bell tower, marina. Moreška: Korčula
sword dance, two groups fight over a veiled girl, performed on Korčula since the 15th c., now weekly for visitors.
Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
ADD = {
 'zagreb': [
  (15, S('크로아티아 나이브 아트 미술관', 'Croatian Museum of Naïve Art', '20세기 나이브 아트(소박파) 작품 1,900여 점을 소장한 미술관으로, 윗마을의 18세기 라파이 궁전 2층에 있습니다. 실연 박물관과 같은 거리입니다.', 'A museum of 20th-century naïve art with more than 1,900 works, on the first floor of the 18th-century Raffay Palace in the Upper Town, on the same street as the Museum of Broken Relationships.', 'Croatian Museum of Naive Art Zagreb', 45, 60)),
  (16, S('막시미르 공원', 'Maksimir Park', '시내 동쪽의 316ha 공원으로, 19세기 초 영국 풍경식 정원으로 꾸민 자그레브에서 가장 오래되고 큰 공원입니다. 호수 다섯 개와 숲이 있고 자그레브 동물원이 안에 있습니다.', 'A 316-hectare park east of the centre, Zagreb’s oldest and largest, laid out in the early 19th century as an English landscape garden with woods, five lakes and the Zagreb Zoo.', 'Maksimir Park Zagreb', 60, 120, b='no', n='공원은 무료이고 동물원은 유료입니다.|The park is free; the zoo is ticketed.')),
 ],
 'sibenik': [
  (7, S('프리모슈텐', 'Primošten', '시베니크와 트로기르 사이의 바닷가 마을로, 옛 마을은 원래 섬이었다가 둑길로 이어졌습니다(이름도 ‘다리를 놓다’에서 왔습니다). 언덕 꼭대기 1485년 성 게오르기 성당에서 바다가 내려다보이고, 돌담 포도밭이 유명합니다.', 'A seaside town between Šibenik and Trogir whose old town was an islet until a causeway joined it to the mainland (its name comes from the word for “to bridge”). The hilltop St George’s Church (1485) looks over the sea, and its stone-walled vineyards are famous.', 'Primošten', 120, 180, b='no')),
  (8, S('코르나티 국립공원', 'Kornati National Park', '섬 89개가 모인 지중해에서 가장 촘촘한 군도로, 대부분이 국립공원입니다. 시베니크 서쪽 바다에 있어 배 투어로 다녀옵니다.', 'An archipelago of 89 islands, the densest in the Mediterranean, most of it a national park; it lies in the sea west of Šibenik and is visited on boat tours.', 'Kornati National Park', 480, 600, n='배 투어로 다녀오는 하루 일정입니다.|A full-day boat trip.')),
 ],
 'porec': [
  (6, S('바레디네 동굴', 'Baredine Cave', '1995년부터 공개한 크로아티아 이스트라의 첫 관광 동굴로, 포레치·비슈냔·타르 사이 바다에서 5km 떨어진 곳에 있습니다. 입구 주변엔 올리브와 포도밭이 펼쳐집니다.', 'The first show cave in Croatian Istria, open since 1995, between Poreč, Višnjan and Tar about 5 km from the sea, with olive groves and vineyards around the entrance.', 'Jama Baredine', 45, 60)),
  (7, S('브르사르', 'Vrsar', '포레치에서 남쪽으로 9km 떨어진 바닷가 마을로, 언덕 위 옛 마을에 성 마르티노 성당과 40m 종탑이 서 있고 아래엔 마리나가 있습니다.', 'A seaside village 9 km south of Poreč, with St Martin’s Church and its 40 m bell tower on the hilltop old town and a marina below.', 'Vrsar', 60, 90, b='no')),
 ],
 'korcula': [
  (6, S('모레슈카 칼춤', 'Moreška sword dance', '15세기부터 코르출라에서 이어 온 칼춤으로, 두 무리가 베일 쓴 아가씨를 두고 칼싸움을 벌입니다. 지금은 관광객을 위해 정기적으로 공연합니다.', 'A sword dance performed on Korčula since the 15th century, in which two groups fight a mock battle over a veiled girl; today it is staged regularly for visitors.', 'Moreška Korčula', 60, 75, n='공연 일정은 현지에서 확인하세요.|Check the performance schedule locally.')),
 ],
}
IT = [("  zagreb: [4, 11, 3, 7, 10, 9, 6, 13, 1, 2, 8, 14, 12, 5],\n", "  zagreb: [4, 11, 3, 7, 10, 9, 6, 13, 1, 2, 15, 8, 14, 12, 5, 16],\n"),
      ("      ['크르카 국립공원|Krka National Park', 6],\n    ],\n", "      ['크르카 국립공원|Krka National Park', 6],\n      ['프리모슈텐|Primošten', 7],\n      ['코르나티 국립공원|Kornati National Park', 8],\n    ],\n"),
      ("  porec: { days: [['', 2, 1, 3, 4]], trips: [['모토분|Motovun', 5]] },\n", "  porec: { days: [['', 2, 1, 3, 4]], trips: [['모토분|Motovun', 5], ['바레디네 동굴과 브르사르|Baredine Cave & Vrsar', 6, 7]] },\n"),
      ("  korcula: {\n    days: [['', 1, 2, 3]],\n", "  korcula: {\n    days: [['', 1, 2, 3, 6]],\n")]
UP = ('윗마을(고르니 그라드)', 'Upper Town (Gornji grad)')
OUT = ('시내 바깥', 'Outside the centre')


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-balkan.ts')
    import re
    def g(n):
        m = re.search(rf'id: "zagreb-h{n}".*?group: \{{ ko: "([^"]*)", en: "([^"]*)" \}}', c, re.S)
        return (m.group(1), m.group(2))
    kap, low = g(7), g(4)
    order = [(n, UP) for n in (1, 9, 6, 2, 15, 8, 12, 13, 14)] + [(n, kap) for n in (7, 3, 10)] + [(n, low) for n in (4, 11)] + [(5, OUT), (16, OUT)]
    c = reorder(c, 'zagreb', order)
    wr('cities.ts', c)
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    co = rd('countries.ts')
    old = "    cityIds: ['zagreb', 'dubrovnik', 'split', 'zadar', 'sibenik', 'rovinj', 'pula', 'porec', 'hvar', 'korcula', 'plitvice', 'trogir'],\n"
    assert co.count(old) == 1
    G = [('크로아티아 내륙', 'Inland Croatia', ['zagreb', 'plitvice']),
         ('이스트라', 'Istria', ['pula', 'rovinj', 'porec']),
         ('북부 달마티아', 'Northern Dalmatia', ['zadar', 'sibenik']),
         ('중부 달마티아', 'Central Dalmatia', ['split', 'trogir', 'hvar']),
         ('남부 달마티아', 'Southern Dalmatia', ['dubrovnik', 'korcula'])]
    ids = ', '.join(repr(x) for _, _, l in G for x in l)
    groups = ''.join(f"      {{ title: {{ ko: '{k}', en: '{e}' }}, cityIds: [{', '.join(repr(x) for x in l)}] }},\n" for k, e, l in G)
    co = co.replace(old, f"    cityIds: [{ids}],\n    cityGroups: [\n{groups}    ],\n")
    wr('countries.ts', co)


if __name__ == '__main__':
    main()
