#!/usr/bin/env python3
"""Bulgaria step 1 (all five cities), 2026-11-15, user approved the plan.
Fixes: every one-line description and blurb; odd names fixed (Sea Garden, Dormition Cathedral, Boyana, Tsarevets, Vitosha Boulevard, Kapana, Samovodska Charshiya,
Holy Forty Martyrs, Asenevtsi Monument). New sights: Sofia 7, Plovdiv 4, Varna 3, Veliko Tarnovo 3, Nessebar 2.
Sofia gets groups and a 3-day itinerary; country city groups follow the regions. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
S_CEN = ('중심가', 'City centre')
S_SOU = ('남부·비토샤', 'South & Vitosha')

BLURB = {
 'sofia': ('불가리아의 수도. 황금 돔의 알렉산드르 네프스키 대성당과 로마 도시 세르디카 유적, 오스만 모스크가 한 동네에 모여 있고, 남쪽엔 비토샤 산이 솟아 있습니다.',
           'Bulgaria’s capital, where the golden-domed Alexander Nevsky Cathedral, the ruins of Roman Serdica and an Ottoman mosque share a few streets, with Mount Vitosha rising to the south.'),
 'plovdiv': ('유럽에서 손꼽히게 오래된 도시로, 언덕 위 구시가에 로마 극장과 19세기 부흥기 저택이 남아 있습니다. 2019년 유럽 문화수도였고 카파나 지구엔 카페와 공방이 모여 있습니다.',
             'One of Europe’s oldest cities, with a Roman theatre and 19th-century Revival mansions in its hilltop old town; European Capital of Culture in 2019, with cafés and studios packed into the Kapana district.'),
 'varna': ('흑해에 면한 불가리아 제3의 도시. 바다를 따라 긴 해변 공원이 이어지고, 세계에서 가장 오래된 금 유물을 소장한 고고학 박물관과 큰 로마 목욕탕 유적이 있습니다.',
           'Bulgaria’s third city, on the Black Sea, with a long seaside park along the shore, an archaeological museum holding the world’s oldest worked gold and the ruins of large Roman baths.'),
 'veliko-tarnovo': ('12~14세기 제2차 불가리아 제국의 수도. 얀트라강이 휘감는 언덕마다 차레베츠 요새와 옛 집들이 층층이 들어서 있습니다.',
                    'The capital of the Second Bulgarian Empire in the 12th–14th centuries, its hills wrapped by the Yantra River and stacked with the Tsarevets fortress and old houses.'),
 'nessebar': ('흑해로 뻗은 작은 반도의 세계유산 마을. 3,000년 넘은 역사 속에 지은 중세 교회들과 목조 가옥이 좁은 골목에 모여 있고, 다리 건너 신시가엔 해변 휴양지가 있습니다.',
              'A World Heritage town on a small peninsula in the Black Sea, with medieval churches and wooden houses from over 3,000 years of history packed into narrow lanes, and beach resorts across the causeway.'),
}

REWRITE = {
 'sofia-h1': ('알렉산드르 네프스키 대성당', None, '1912년 완성한 네오비잔틴 대성당으로, 러시아·튀르크 전쟁에서 불가리아 독립을 위해 숨진 병사들을 기립니다.', 'A Neo-Byzantine cathedral completed in 1912, honouring the soldiers who died for Bulgaria’s liberation in the Russo-Turkish War.'),
 'sofia-h2': (None, None, '4세기 로마 시대 붉은 벽돌 원형 교회로, 대통령궁 뒤뜰 유적 사이에 남아 있습니다.', 'A 4th-century Roman red-brick rotunda, surviving among ruins in a courtyard behind the presidency.'),
 'sofia-h3': ('비토샤 대로', None, '시내 중심을 남북으로 잇는 보행자 거리로, 상점과 카페 너머로 비토샤 산이 보입니다.', 'The pedestrian street running north–south through the centre, with Mount Vitosha in view beyond the shops and cafés.'),
 'sofia-h4': ('보야나 교회', None, '13세기 프레스코가 남은 작은 교회로, 사실적인 인물 표현 덕분에 세계유산이 되었습니다.', 'A small church with 13th-century frescoes whose lifelike figures earned it World Heritage status.'),
 'sofia-h5': (None, None, '소피아 남쪽에 솟은 해발 2,290m 산으로, 여름엔 산길을 걷고 겨울엔 스키를 탑니다.', 'The 2,290 m mountain rising south of Sofia, for hiking in summer and skiing in winter.'),
 'sofia-h6': (None, None, '19세기 말 불가리아 군주가 쓴 옛 왕궁으로, 지금은 국립 미술관이 들어 있습니다.', 'The former palace of Bulgaria’s rulers from the late 19th century, now home to the National Gallery.'),
 'plovdiv-h1': (None, None, '2세기 로마 황제 트라야누스 시대에 지은 극장으로, 지금도 여름 공연이 열립니다.', 'A theatre built in the 2nd century under the Roman emperor Trajan, still used for summer performances.'),
 'plovdiv-h2': (None, None, '세 언덕에 걸친 구시가로, 19세기 부흥기 상인 저택의 색칠한 외벽과 자갈길이 이어집니다.', 'The old town spread over three hills, with cobbled lanes and the painted façades of 19th-century Revival merchants’ mansions.'),
 'plovdiv-h3': ('카파나 지구', None, '‘덫’이라는 뜻의 옛 장인 골목으로, 지금은 벽화와 카페, 공방이 모인 창작 지구입니다.', 'The old craftsmen’s quarter whose name means ‘the trap’, now a creative district of murals, cafés and studios.'),
 'plovdiv-h4': (None, None, '2세기 로마 경기장의 북쪽 끝으로, 보행자 중심 거리 아래 계단식 관람석 일부가 드러나 있습니다.', 'The north end of the 2nd-century Roman stadium, its tiered seats exposed below the main pedestrian street.'),
 'plovdiv-h5': (None, None, '구시가 꼭대기의 트라키아 성채 터로, 해 질 녘 시내 전망이 좋습니다.', 'The ruins of a Thracian fortress at the top of the old town, with fine city views at sunset.'),
 'varna-h1': ('바다 정원', None, '바다를 따라 길게 이어지는 19세기 말 공원으로, 산책로와 수족관, 해변으로 내려가는 길이 있습니다.', 'A long late-19th-century park along the sea, with promenades, an aquarium and paths down to the beaches.'),
 'varna-h2': (None, None, '해변 공원 아래로 이어지는 시내 해변으로, 여름엔 해변 바와 식당이 문을 엽니다.', 'The city beaches below the Sea Garden, with beach bars and restaurants open in summer.'),
 'varna-h3': (None, None, '기원전 4,500년 무렵 바르나 묘지에서 나온 세계에서 가장 오래된 금 세공품을 전시합니다.', 'Shows the world’s oldest worked gold, from the Varna Necropolis of around 4500 BC.'),
 'varna-h4': ('성모 안식 대성당', None, '1886년 완성한 시내 중심의 정교회 대성당으로, 금빛 돔과 화려한 성화벽이 있습니다.', 'The Orthodox cathedral in the city centre, completed in 1886, with golden domes and an ornate iconostasis.'),
 'varna-h5': (None, None, '2세기 말 로마 목욕탕 유적으로, 발칸에서 손꼽히게 큰 규모의 벽과 아치가 남아 있습니다.', 'The ruins of late-2nd-century Roman baths, whose walls and arches are among the largest in the Balkans.'),
 'veliko-tarnovo-h1': ('차레베츠 요새', None, '제2차 불가리아 제국의 왕궁과 총대주교 교회가 있던 언덕 요새로, 여름밤엔 빛과 소리 쇼가 열립니다.', 'The hilltop fortress that held the palace and patriarchal church of the Second Bulgarian Empire, with a sound-and-light show on summer nights.'),
 'veliko-tarnovo-h2': ('사모보드스카 차르시야', 'Samovodska Charshiya', '19세기 장인 거리로, 도자기·구리 공방과 기념품 가게가 자갈길을 따라 모여 있습니다.', 'The 19th-century craftsmen’s street, with pottery and copper workshops and souvenir shops along the cobbles.'),
 'veliko-tarnovo-h3': ('성 40인 순교자 교회', 'Church of the Holy Forty Martyrs', '1230년 아센 2세가 승전을 기념해 세운 교회로, 옛 왕의 기록을 새긴 돌기둥이 있습니다.', 'A church built in 1230 by Tsar Ivan Asen II to mark a victory, with stone columns inscribed by medieval rulers.'),
 'veliko-tarnovo-h4': ('아센 왕조 기념비', 'Asenevtsi Monument', '제2차 불가리아 제국을 세운 아센 왕조 네 왕의 기마상으로, 얀트라강 굽이에 섭니다.', 'Equestrian statues of the four Asen kings who founded the Second Bulgarian Empire, on a bend of the Yantra.'),
 'veliko-tarnovo-h5': (None, None, '언덕 위 옛 상인 마을로, 돌담 저택과 안쪽 벽화가 화려한 그리스도 탄생 교회가 있습니다.', 'An old merchants’ village on a hilltop, with stone-walled mansions and the richly frescoed Nativity Church.'),
 'nessebar-h1': (None, None, '좁은 다리로 이어진 반도 마을로, 옛 성벽과 목조 가옥 사이 자갈길을 걷습니다.', 'The peninsula town reached by a narrow causeway; walk the cobbles between old walls and wooden houses.'),
 'nessebar-h2': ('중세 교회 유적', None, '반도 곳곳에 남은 중세 교회들로, 붉은 벽돌과 흰 돌을 번갈아 쌓은 장식 벽이 특징입니다.', 'The medieval churches dotted across the peninsula, known for decorative walls of alternating red brick and white stone.'),
 'nessebar-h3': (None, None, '반도로 들어가는 다리 옆 나무 풍차로, 마을의 상징입니다.', 'The wooden windmill beside the causeway into the peninsula, the town’s emblem.'),
 'nessebar-h4': (None, None, '신시가 쪽 모래 해변으로, 여름엔 파라솔과 해변 바가 늘어섭니다.', 'The sandy beach on the new-town side, lined with parasols and beach bars in summer.'),
 'nessebar-h5': (None, None, '성문 앞 박물관으로, 고대 그리스 도시 메셈브리아의 유물과 중세 성화를 전시합니다.', 'The museum by the town gate, showing finds from ancient Greek Mesembria and medieval icons.'),
}

ADD = {
 'sofia': [
  (7, S('성 니콜라이 러시아 교회', 'Russian Church of St Nicholas', '1914년 완성한 러시아 정교회 교회로, 금빛 양파 돔과 초록 지붕이 눈에 띕니다.', 'A Russian Orthodox church completed in 1914, with eye-catching golden onion domes and a green roof.', 'Russian Church Sofia', 15, 20)),
  (8, S('성 소피아 교회', 'St Sofia Church', '6세기 바실리카 교회로, 도시 이름이 이 교회에서 나왔습니다.', 'A 6th-century basilica that gave the city its name.', 'Saint Sofia Church Sofia', 20, 30)),
  (9, S('바냐 바시 모스크', 'Banya Bashi Mosque', '16세기 오스만 시대 모스크로, 온천 위에 지어 ‘목욕탕 위’라는 이름이 붙었습니다.', 'A 16th-century Ottoman mosque built over hot springs, hence its name meaning ‘many baths’.', 'Banya Bashi Mosque', 15, 20)),
  (10, S('세르디카 고대 유적', 'Ancient Serdica', '지하철역 공사 중 드러난 로마 도시 세르디카의 거리와 건물 터로, 유리 지붕 아래 그대로 보여 줍니다.', 'The streets and building foundations of Roman Serdica uncovered during metro construction, displayed under glass where they were found.', 'Ancient Serdica Complex', 20, 30)),
  (11, S('소피아 역사 박물관', 'Sofia History Museum', '1913년 지은 옛 중앙 온천 건물에 든 박물관으로, 건물 앞 수돗가에서 온천수가 나옵니다.', 'A museum in the old Central Mineral Baths of 1913; mineral water flows from taps in front of the building.', 'Regional History Museum Sofia', 45, 60)),
  (12, S('국립 역사 박물관', 'National Museum of History', '불가리아 최대의 역사 박물관으로, 트라키아 금 보물과 중세 유물을 전시합니다.', 'Bulgaria’s largest history museum, with Thracian gold treasures and medieval finds.', 'National Museum of History Sofia', 90, 120)),
  (13, S('릴라 수도원', 'Rila Monastery', '10세기 성 이반 릴스키가 세운 불가리아 최대의 수도원으로, 줄무늬 회랑과 벽화로 가득한 교회가 있는 세계유산입니다.', 'Bulgaria’s largest monastery, founded by St Ivan of Rila in the 10th century, with striped arcades and a fresco-covered church; a World Heritage Site.', 'Rila Monastery', 120, 180, group=DAY,
        n='소피아에서 남쪽으로 약 120km, 차나 투어로 약 2시간입니다.|About 120 km south of Sofia, around 2 hours by car or on a tour.')),
 ],
 'plovdiv': [
  (6, S('주마야 모스크', 'Dzhumaya Mosque', '15세기 오스만 시대 모스크로, 로마 경기장 바로 옆 중심 거리에 섭니다.', 'A 15th-century Ottoman mosque on the main street, right beside the Roman stadium.', 'Dzhumaya Mosque Plovdiv', 15, 20)),
  (7, S('지역 민속 박물관', 'Regional Ethnographic Museum', '1847년 지은 쿠윰지오글루 저택에 든 박물관으로, 물결 모양 외벽 장식이 구시가에서 가장 화려합니다.', 'A museum in the Kuyumdzhioglu House of 1847, whose wave-patterned façade is the most ornate in the old town.', 'Regional Ethnographic Museum Plovdiv', 45, 60)),
  (8, S('히사르 카피야', 'Hisar Kapia', '구시가 언덕에 남은 옛 성문으로, 로마 시대 문 위에 다시 쌓은 돌 아치를 지나갑니다.', 'An old gate in the hilltop old town; walk through a stone arch rebuilt on Roman foundations.', 'Hisar Kapia Plovdiv', 10, 15)),
  (9, S('바치코보 수도원', 'Bachkovo Monastery', '1083년 세운 불가리아에서 두 번째로 큰 수도원으로, 산골짜기에 벽화가 가득한 교회와 식당이 있습니다.', 'Bulgaria’s second-largest monastery, founded in 1083, with a fresco-filled church and refectory in a mountain valley.', 'Bachkovo Monastery', 60, 90, group=DAY,
        n='플로브디프에서 남쪽으로 약 30km, 버스나 차로 갑니다.|About 30 km south of Plovdiv; go by bus or car.')),
 ],
 'varna': [
  (6, S('민속 박물관', 'Ethnographic Museum', '19세기 부흥기 저택에 든 박물관으로, 바르나 지방의 옷과 공예, 옛 생활을 보여 줍니다.', 'A museum in a 19th-century Revival house, showing the costumes, crafts and old way of life of the Varna region.', 'Ethnographic Museum Varna', 30, 45)),
  (7, S('알라자 수도원', 'Aladzha Monastery', '해안 절벽을 깎아 만든 중세 바위 수도원으로, 동굴 방과 예배당이 층층이 남아 있습니다.', 'A medieval rock monastery carved into a coastal cliff, with cave cells and chapels on several levels.', 'Aladzha Monastery', 45, 60, group=DAY,
        n='바르나에서 북쪽으로 약 14km, 골든 샌즈 근처입니다.|About 14 km north of Varna, near Golden Sands.')),
  (8, S('포비티 카마니', 'Pobiti Kamani', '모래밭에 돌기둥 수백 개가 서 있는 자연 지형으로, ‘돌 숲’이라 불립니다.', 'A natural landscape of hundreds of stone columns standing in sand, known as the Stone Forest.', 'Pobiti Kamani', 45, 60, group=DAY,
        n='바르나에서 서쪽으로 약 18km라 차로 갑니다.|About 18 km west of Varna; go by car.')),
 ],
 'veliko-tarnovo': [
  (6, S('구르코 거리', 'Gurko Street', '얀트라강 절벽 위로 옛 집들이 층층이 매달린 듯 늘어선 거리입니다.', 'A street of old houses stacked one above another on the cliffs over the Yantra.', 'Gurko Street Veliko Tarnovo', 20, 30)),
  (7, S('트라페지차 요새', 'Trapezitsa Fortress', '차레베츠 맞은편 언덕의 중세 요새 터로, 여러 교회 유적이 남아 있습니다.', 'The medieval fortress ruins on the hill facing Tsarevets, with the remains of several churches.', 'Trapezitsa Fortress', 60, 90)),
  (8, S('에타르 민속 마을', 'Etar Ethnographic Complex', '물레방아로 돌리는 공방과 19세기 장인 거리를 재현한 야외 박물관입니다.', 'An open-air museum recreating a 19th-century craftsmen’s street, with water-powered workshops.', 'Etar Architectural-Ethnographic Complex', 90, 120, group=DAY,
        n='가브로보 남쪽, 벨리코투르노보에서 약 50km라 차로 갑니다.|South of Gabrovo, about 50 km from Veliko Tarnovo; go by car.')),
 ],
 'nessebar': [
  (6, S('성 스테파노 교회', 'Church of St Stephen', '11세기에 처음 지은 교회로, 안쪽 벽이 16~18세기 벽화로 빼곡합니다.', 'A church first built in the 11th century, its interior walls covered with 16th–18th-century frescoes.', 'Church of St Stephen Nessebar', 20, 30)),
  (7, S('판토크라토르 교회', 'Church of Christ Pantocrator', '13~14세기 교회로, 벽돌과 녹색 도자기 장식이 화려한 바깥벽이 남아 있습니다.', 'A 13th–14th-century church whose outer walls are richly decorated with brick and green ceramic ornament.', 'Church of Christ Pantocrator Nessebar', 10, 15)),
 ],
}

IT = [
 ("  sofia: { days: [['', 3, 2, 6, 1]], trips: [['보야나 교회와 비토샤 산|Boyana Church & Vitosha', 4, 5]] },\n",
  "  sofia: {\n    days: [\n      ['중심가 동쪽|East of the centre', 1, 7, 8, 6, 2],\n      ['중심가 서쪽|West of the centre', 10, 9, 11, 3],\n      ['남부·비토샤|South & Vitosha', 12, 4, 5],\n    ],\n    trips: [['릴라 수도원|Rila Monastery', 13]],\n  },\n"),
 ("  plovdiv: [3, 4, 1, 2, 5],\n",
  "  plovdiv: {\n    days: [\n      ['', 5, 8, 7, 2, 1],\n      ['', 4, 6, 3],\n    ],\n    trips: [['바치코보 수도원|Bachkovo Monastery', 9]],\n  },\n"),
 ("  varna: [4, 3, 5, 1, 2],\n",
  "  varna: {\n    days: [['', 4, 5, 6, 3, 1, 2]],\n    trips: [\n      ['알라자 수도원|Aladzha Monastery', 7],\n      ['포비티 카마니|Pobiti Kamani', 8],\n    ],\n  },\n"),
 ("  'veliko-tarnovo': { days: [['', 4, 2, 3, 1]], trips: [['아르바나시|Arbanasi', 5]] },\n",
  "  'veliko-tarnovo': {\n    days: [\n      ['', 1, 3, 7],\n      ['', 6, 2, 4],\n    ],\n    trips: [\n      ['아르바나시|Arbanasi', 5],\n      ['에타르 민속 마을|Etar', 8],\n    ],\n  },\n"),
 ("  nessebar: [3, 5, 1, 2, 4],\n", "  nessebar: { days: [['', 3, 1, 6, 7, 2, 5, 4]] },\n"),
]

SOFIA = [(1, S_CEN), (7, S_CEN), (8, S_CEN), (6, S_CEN), (2, S_CEN), (10, S_CEN), (9, S_CEN), (11, S_CEN), (3, S_CEN),
         (12, S_SOU), (4, S_SOU), (5, S_SOU), (13, DAY)]
SMALL = ['plovdiv', 'varna', 'veliko-tarnovo', 'nessebar']

BG_OLD = "    cityIds: ['sofia', 'plovdiv', 'varna', 'veliko-tarnovo', 'nessebar'],\n"
BG_NEW = """    cityIds: ['sofia', 'plovdiv', 'veliko-tarnovo', 'varna', 'nessebar'],
    cityGroups: [
      { title: { ko: '소피아·서부', en: 'Sofia & west' }, cityIds: ['sofia'] },
      { title: { ko: '남부', en: 'South' }, cityIds: ['plovdiv'] },
      { title: { ko: '북부', en: 'North' }, cityIds: ['veliko-tarnovo'] },
      { title: { ko: '흑해', en: 'Black Sea' }, cityIds: ['varna', 'nessebar'] },
    ],
"""


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'    id: "{cid}",')
        j = c.index('    highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: ".*?",\n      en: ".*?",\n    \}',
                     f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j], flags=re.S)
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for hid, t in REWRITE.items():
        ko, en, dko, den = t[:4]
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko or en:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', blk)
            blk = blk.replace(m.group(0), f'name: {{ ko: "{ko or m.group(1)}", en: "{en or m.group(2)}" }}')
        blk2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        assert blk2 != blk, hid
        c = c[:i] + blk2 + c[j:]
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-east.ts')
    c = reorder(c, 'sofia', SOFIA)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(BG_OLD) == 1
    wr('countries.ts', k.replace(BG_OLD, BG_NEW))


if __name__ == '__main__':
    main()
