#!/usr/bin/env python3
"""North Macedonia step 1 (all four cities), 2026-11-15, user approved the plan.
Fixes: every one-line description and blurb; Bitola h5 'Magaza district' becomes the Old Bazaar (Bezisten); Tetovo h3
Šar Mountains becomes concrete (Popova Šapka, day trip). New sights: Skopje 6, Ohrid 5, Bitola 3, Tetovo 2 (the clock tower was swapped for Baltepe Fortress: no free photo). Skopje gets
groups and a 2-day itinerary; country city groups follow the regions. Run once."""
import re, urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
K_OLD = ('구시장·요새', 'Old Bazaar & fortress')
K_NEW = ('강 남쪽 신시가', 'South of the river')

BLURB = {
 'skopje': ('북마케도니아의 수도. 바르다르강 위 15세기 석교가 오스만 구시장과 거대한 동상·신고전 건물로 채운 광장을 잇고, 근교엔 마트카 협곡과 보드노산이 있습니다.',
            'North Macedonia’s capital, where a 15th-century stone bridge over the Vardar links the Ottoman Old Bazaar with a square of giant statues and neoclassical façades; Matka Canyon and Mount Vodno are close by.'),
 'ohrid': ('유럽에서 가장 오래된 호수 가운데 하나에 면한 세계유산 도시. 절벽 위 성 요한 카네오 교회와 비잔틴 성당, 로마 극장이 돌 골목에 모여 있고, 호수 건너편 성 나움 수도원으로 배가 다닙니다.',
           'A World Heritage town on one of Europe’s oldest lakes, with the cliff-top Church of St John at Kaneo, Byzantine churches and a Roman theatre along its stone lanes, and boats across the lake to St Naum.'),
 'bitola': ('오스만 시대 ‘영사들의 도시’였던 남부 도시. 신고전 건물이 늘어선 보행자 거리 시로크 소칵과 시계탑이 있고, 바로 남쪽에 고대 도시 헤라클레아 유적과 펠리스테르 국립공원이 있습니다.',
            'The southern city once known as the ‘city of consuls’ under the Ottomans, with the neoclassical pedestrian street Širok Sokak and a clock tower, and the ruins of ancient Heraclea and Pelister National Park just to the south.'),
 'tetovo': ('샤르 산맥 기슭의 알바니아계 도시. 꽃무늬 벽화로 뒤덮인 채색 모스크와 수피 수도원 테케가 있고, 산 위 포포바 샵카로 올라가 스키나 산책을 합니다.',
            'An Albanian-majority city at the foot of the Šar Mountains, with the flower-painted Painted Mosque and a Sufi tekke, and the mountain resort of Popova Šapka above it for skiing or walks.'),
}

REWRITE = {
 'skopje-h1': (None, None, '15세기 오스만 시대에 놓은 돌다리로, 마케도니아 광장과 구시장을 잇는 도시의 상징입니다.', 'A 15th-century Ottoman stone bridge linking Macedonia Square with the Old Bazaar, the city’s symbol.'),
 'skopje-h2': (None, None, '발칸에서 손꼽히게 큰 오스만 시장 지구로, 모스크와 대상 숙소 사이 골목에 금세공 가게와 찻집이 모여 있습니다.', 'One of the largest Ottoman bazaar quarters in the Balkans, with goldsmiths and tea houses in the lanes between mosques and caravanserais.'),
 'skopje-h3': (None, None, '2010년대 ‘스코페 2014’ 사업으로 거대한 기마상과 신고전 건물로 채운 중앙 광장입니다.', 'The central square filled with a giant equestrian statue and neoclassical buildings under the ‘Skopje 2014’ project.'),
 'skopje-h4': (None, None, '트레스카강을 막아 만든 호수와 석회암 절벽 협곡으로, 카약을 타거나 절벽 길을 걸어 동굴과 수도원을 봅니다.', 'A dammed lake in a limestone canyon on the Treska River; kayak or walk the cliff path to caves and monasteries.'),
 'skopje-h5': (None, None, '6세기부터 쌓은 언덕 위 요새 성벽으로, 구시장 위에서 시내와 바르다르강을 내려다봅니다.', 'Hilltop fortress walls built from the 6th century, looking over the Old Bazaar, the city and the Vardar.'),
 'ohrid-h1': (None, None, '300만 년 넘은 유럽 최고령 호수 가운데 하나로, 유람선을 타거나 맑은 물에서 수영합니다.', 'One of Europe’s oldest lakes at over three million years; take a boat trip or swim in its clear water.'),
 'ohrid-h2': (None, None, '13세기 호숫가 절벽 위에 세운 작은 교회로, 오흐리드를 대표하는 풍경입니다.', 'A small 13th-century church on a cliff above the lake, Ohrid’s signature view.'),
 'ohrid-h3': (None, None, '호수 위 언덕으로 이어지는 돌 골목과 19세기 집들, 비잔틴 교회가 모인 세계유산 구시가입니다.', 'The World Heritage old town of stone lanes, 19th-century houses and Byzantine churches climbing the hill above the lake.'),
 'ohrid-h4': (None, None, '10~11세기 차르 사무일의 성채로, 성벽 위에서 호수와 구시가 지붕을 내려다봅니다.', 'Tsar Samuel’s 10th–11th-century citadel; walk the walls for views over the lake and the old town roofs.'),
 'ohrid-h5': (None, None, '9세기 성 클리멘트가 세운 수도원 터로, 복원한 성 판텔레이몬 교회와 초기 기독교 바실리카의 모자이크가 있습니다.', 'The site of St Clement’s 9th-century monastery, with the rebuilt Church of St Panteleimon and the mosaics of an early Christian basilica.'),
 'bitola-h1': (None, None, '신고전 건물과 카페가 늘어선 보행자 거리로, 오스만 시대 영사관들이 있던 ‘넓은 골목’입니다.', 'The pedestrian ‘wide lane’ lined with neoclassical buildings and cafés, where the Ottoman-era consulates stood.'),
 'bitola-h2': (None, None, '기원전 4세기 마케도니아 왕 필리포스 2세가 세운 도시 유적으로, 로마 극장과 초기 기독교 바실리카의 모자이크 바닥이 남아 있습니다.', 'The ruins of a city founded by Philip II of Macedon in the 4th century BC, with a Roman theatre and the mosaic floors of early Christian basilicas.'),
 'bitola-h3': (None, None, '17세기 세운 약 30m 시계탑으로, 구시가 광장에 섭니다.', 'A clock tower of about 30 m from the 17th century, standing on the old town square.'),
 'bitola-h4': (None, None, '시로크 소칵 끝에서 이어지는 넓은 공원으로, 분수와 산책로, 헤라클레아로 가는 길이 있습니다.', 'The large park at the end of Širok Sokak, with fountains, walks and the road out to Heraclea.'),
 'bitola-h5': ('옛 시장과 베즈이스텐', 'Old Bazaar & Bezisten', '드라고르강 건너 오스만 시장 지구로, 15세기 지붕 덮인 시장 베즈이스텐과 모스크, 작은 가게들이 있습니다.', 'The Ottoman bazaar quarter across the Dragor, with the 15th-century covered market Bezisten, mosques and small shops.', 'Bezisten Bitola'),
 'tetovo-h1': (None, None, '1438년 세우고 19세기에 다시 꾸민 모스크로, 안팎 벽을 꽃과 기하무늬 그림으로 가득 채웠습니다.', 'A mosque founded in 1438 and redecorated in the 19th century, its walls inside and out covered in painted flowers and patterns.'),
 'tetovo-h2': (None, None, '18세기 베크타시 수피 교단의 수도원 단지로, 정원과 나무 정자, 기도실이 남아 있습니다.', 'An 18th-century monastery complex of the Bektashi Sufi order, with gardens, wooden pavilions and prayer rooms.'),
 'tetovo-h3': ('포포바 샵카', 'Popova Šapka', '샤르 산맥 해발 약 1,700m의 산악 휴양지로, 겨울엔 스키, 여름엔 산길 걷기를 즐깁니다.', 'A mountain resort at about 1,700 m in the Šar Mountains, for skiing in winter and walking in summer.', 'Popova Šapka'),
 'tetovo-h4': (None, None, '채색 모스크 근처 옛 시장 골목으로, 작은 가게와 빵집이 모여 있습니다.', 'The old bazaar lanes near the Painted Mosque, with small shops and bakeries.'),
 'tetovo-h5': (None, None, '샤르 산맥에서 내려와 시내를 가로지르는 강으로, 강변 산책로가 채색 모스크 옆을 지납니다.', 'The river running down from the Šar Mountains through the city; its riverside walk passes the Painted Mosque.'),
}

ADD = {
 'skopje': [
  (6, S('성 스파스 교회', 'Church of the Holy Saviour', '지붕이 땅에 가까운 반지하 교회로, 19세기 장인들이 10년 넘게 깎은 호두나무 성화벽이 있습니다.', 'A half-sunken church whose walnut iconostasis took 19th-century carvers more than ten years to complete.', 'Church of the Ascension of Jesus Skopje', 20, 30)),
  (7, S('무스타파 파샤 모스크', 'Mustafa Pasha Mosque', '1492년 지은 스코페에서 가장 아름다운 오스만 모스크로, 요새 아래 정원에 섭니다.', 'Built in 1492, the finest Ottoman mosque in Skopje, set in gardens below the fortress.', 'Mustafa Pasha Mosque', 15, 20)),
  (8, S('테레사 수녀 기념관', 'Memorial House of Mother Teresa', '스코페에서 태어난 테레사 수녀를 기리는 기념관으로, 그가 세례받은 교회 터에 있습니다.', 'A memorial to Mother Teresa, born in Skopje, on the site of the church where she was baptised.', 'Memorial House of Mother Teresa', 30, 45)),
  (9, S('마케도니아 고고학 박물관', 'Archaeological Museum of Macedonia', '바르다르 강변의 신고전 건물에 든 박물관으로, 고대 금 가면과 트레베니슈테 유물을 전시합니다.', 'A museum in a neoclassical building on the Vardar, with ancient gold masks and finds from Trebenište.', 'Archaeological Museum of North Macedonia', 60, 90)),
  (10, S('마케도니아 전사 동상', 'Warrior on a Horse', '마케도니아 광장 한가운데 선 약 22m 높이의 기마상으로, 밤엔 분수가 조명을 받습니다.', 'The equestrian statue of about 22 m in the middle of Macedonia Square, with its fountain lit up at night.', 'Warrior on a Horse Skopje', 10, 15)),
  (11, S('보드노산 밀레니엄 십자가', 'Millennium Cross on Vodno', '케이블카로 오르는 보드노산 꼭대기의 66m 십자가로, 스코페 전체가 내려다보입니다.', 'The 66 m cross on top of Mount Vodno, reached by cable car, with views over all of Skopje.', 'Millennium Cross Skopje', 90, 120,
        n='시내에서 버스로 중간 역까지 간 뒤 케이블카를 탑니다. 월요일엔 케이블카가 쉽니다.|Take a bus to the middle station, then the cable car; the cable car is closed on Mondays.')),
 ],
 'ohrid': [
  (6, S('성 소피아 성당', 'Church of St Sophia', '11세기 대주교좌 성당으로, 중세 비잔틴 벽화가 가장 잘 남은 교회 가운데 하나이며 여름엔 음악회가 열립니다.', 'The 11th-century archbishops’ cathedral, with some of the best-preserved medieval Byzantine frescoes, and summer concerts.', 'Church of St Sophia Ohrid', 30, 45)),
  (7, S('고대 극장', 'Ancient Theatre of Ohrid', '기원전 200년 무렵 지은 헬레니즘 극장으로, 지금도 여름 축제 공연이 열립니다.', 'A Hellenistic theatre built around 200 BC, still used for summer festival performances.', 'Ancient Theatre of Ohrid', 20, 30)),
  (8, S('로베비 가옥 (국립 박물관)', 'Robevi House', '19세기 부유한 상인 가족의 저택으로, 지금은 고고학 전시가 있는 국립 박물관입니다.', 'A rich merchant family’s 19th-century mansion, now the national museum with archaeological displays.', 'Robevi House Ohrid', 45, 60)),
  (9, S('성 나움 수도원', 'Monastery of St Naum', '호수 남쪽 끝 샘물 옆의 10세기 수도원으로, 공작새가 다니는 안뜰과 벽화 교회가 있습니다.', 'A 10th-century monastery by springs at the southern end of the lake, with peacocks in its courtyard and a frescoed church.', 'Monastery of Saint Naum', 90, 120, group=DAY,
        n='오흐리드에서 약 30km, 여름엔 배로 2시간, 버스로 1시간입니다.|About 30 km from Ohrid: 2 hours by boat in summer or 1 hour by bus.')),
  (10, S('갈리치차 국립공원', 'Galičica National Park', '오흐리드호와 프레스파호 사이 산맥의 국립공원으로, 산길과 전망대에서 두 호수를 한눈에 봅니다.', 'A national park on the mountain ridge between lakes Ohrid and Prespa, with trails and viewpoints over both lakes.', 'Galičica National Park', 180, 300, group=DAY,
        n='차나 택시로 산길을 오르며, 여름엔 패러글라이딩 투어도 있습니다.|Reach the mountain road by car or taxi; paragliding tours run in summer.')),
 ],
 'bitola': [
  (6, S('성 디미트리 교회', 'Church of St Demetrius', '1830년 지은 큰 정교회 교회로, 소박한 외관과 달리 안은 금빛 성화벽과 샹들리에로 화려합니다.', 'A large Orthodox church of 1830, plain outside but rich inside with a gilded iconostasis and chandeliers.', 'Church of St. Demetrius Bitola', 15, 20)),
  (7, S('이사크 모스크', 'Isak Mosque', '1506년 세운 모스크로, 높은 미너렛이 시계탑과 나란히 구시가 풍경을 이룹니다.', 'A mosque of 1506 whose tall minaret stands beside the clock tower in the old town skyline.', 'Isak Mosque Bitola', 10, 15)),
  (8, S('펠리스테르 국립공원', 'Pelister National Park', '바바산의 국립공원으로, 몰리카 소나무 숲과 빙하 호수 ‘펠리스테르의 눈’으로 산길이 이어집니다.', 'The national park on Mount Baba, with trails through molika pine forest to the glacial lakes called Pelister’s Eyes.', 'Pelister National Park', 180, 300, group=DAY,
        n='비톨라에서 약 15km, 차나 택시로 공원 입구까지 갑니다.|About 15 km from Bitola; go by car or taxi to the park entrance.')),
 ],
 'tetovo': [
  (6, S('레쇼크 수도원', 'Lešok Monastery', '14세기 교회와 19세기 교회가 나란히 선 수도원으로, 마케도니아어 문법 선구자 키릴 페이치노비치의 무덤이 있습니다.', 'A monastery with 14th- and 19th-century churches side by side, and the grave of Kiril Pejčinović, a pioneer of written Macedonian.', 'Lešok Monastery', 45, 60, group=DAY,
        n='테토보에서 북동쪽으로 약 8km, 차나 택시로 갑니다.|About 8 km north-east of Tetovo by car or taxi.')),
  (7, S('발테페 요새', 'Baltepe Fortress', '시내 위 언덕에 남은 19세기 초 오스만 요새 터로, 성벽과 터널을 둘러보고 테토보와 폴로그 평야를 내려다봅니다.', 'The ruins of an early-19th-century Ottoman fortress on the hill above town; explore the walls and tunnels and look over Tetovo and the Polog plain.', 'Tetovo Kale Baltepe', 60, 90,
        n='시내에서 걸어서 40분쯤 오르거나 택시로 갑니다.|About a 40-minute walk up from town, or go by taxi.')),
 ],
}

IT = [
 ("  skopje: { days: [['', 3, 1, 2, 5]], trips: [['마트카 협곡|Matka Canyon', 4]] },\n",
  "  skopje: {\n    days: [\n      ['구시장·요새|Old Bazaar & fortress', 1, 2, 6, 7, 5],\n      ['강 남쪽 신시가|South of the river', 3, 10, 8, 9, 11],\n    ],\n    trips: [['마트카 협곡|Matka Canyon', 4]],\n  },\n"),
 ("  ohrid: [3, 5, 4, 2, 1],\n",
  "  ohrid: {\n    days: [\n      ['', 3, 8, 6, 7, 5, 4, 2],\n      ['', 1],\n    ],\n    trips: [\n      ['성 나움 수도원|St Naum', 9],\n      ['갈리치차 국립공원|Galičica', 10],\n    ],\n  },\n"),
 ("  bitola: [3, 5, 1, 4, 2],\n",
  "  bitola: {\n    days: [['', 3, 7, 5, 1, 6, 4, 2]],\n    trips: [['펠리스테르 국립공원|Pelister National Park', 8]],\n  },\n"),
 ("  tetovo: { days: [['', 1, 5, 4, 2]], trips: [['샤르 산맥|Šar Mountains', 3]] },\n",
  "  tetovo: {\n    days: [['', 1, 4, 5, 2, 7]],\n    trips: [\n      ['포포바 샵카|Popova Šapka', 3],\n      ['레쇼크 수도원|Lešok Monastery', 6],\n    ],\n  },\n"),
]

SKOPJE = [(1, K_OLD), (2, K_OLD), (6, K_OLD), (7, K_OLD), (5, K_OLD), (3, K_NEW), (10, K_NEW), (8, K_NEW), (9, K_NEW), (11, K_NEW), (4, DAY)]
SMALL = ['ohrid', 'bitola', 'tetovo']

MK_OLD = "    cityIds: ['skopje', 'ohrid', 'bitola', 'tetovo'],\n"
MK_NEW = """    cityIds: ['skopje', 'tetovo', 'ohrid', 'bitola'],
    cityGroups: [
      { title: { ko: '스코페·북부', en: 'Skopje & north' }, cityIds: ['skopje', 'tetovo'] },
      { title: { ko: '남서부', en: 'South-west' }, cityIds: ['ohrid'] },
      { title: { ko: '남부', en: 'South' }, cityIds: ['bitola'] },
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
        if len(t) > 4:
            blk2 = re.sub(r'mapsUrl: "[^"]*"', 'mapsUrl: "https://www.google.com/maps/search/?api=1&query=' + urllib.parse.quote(t[4]) + '"', blk2)
        c = c[:i] + blk2 + c[j:]
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-balkan.ts')
    c = reorder(c, 'skopje', SKOPJE)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(MK_OLD) == 1
    wr('countries.ts', k.replace(MK_OLD, MK_NEW))


if __name__ == '__main__':
    main()
