#!/usr/bin/env python3
"""Albania step 1 (all four cities), 2026-11-16, user approved the plan.
Fixes: every one-line description and blurb; Berat h5 'Osum viewpoints' becomes the Gorica Bridge; Sarandë h5
'Ksamil / beaches' becomes Ksamil beaches & islands. New sights: Tirana 6, Berat 3, Gjirokastër 3, Sarandë 3. Tirana
gets groups and a 2-day itinerary; country city groups follow the regions. Run once."""
import re, urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
K_CEN = ('중심가', 'City centre')
K_SOU = ('블로쿠·남쪽', 'Blloku & south')

BLURB = {
 'tirana': ('알바니아의 수도. 스칸데르베그 광장을 둘러싼 알록달록한 건물과 냉전 벙커 박물관 벙크아트, 카페가 빼곡한 블로쿠가 있고, 케이블카로 다이티산에 오릅니다.',
            'Albania’s capital, with colourful buildings around Skanderbeg Square, the Bunk’Art Cold War bunker museums and the café-packed Blloku district; a cable car climbs Mount Dajti.'),
 'berat': ('‘천 개의 창문의 도시’로 불리는 세계유산 도시. 오숨강 양쪽 비탈에 흰 오스만 가옥이 층층이 서고, 지금도 사람이 사는 성채 안에 비잔틴 교회와 오누프리 이콘 박물관이 있습니다.',
           'The World Heritage ‘town of a thousand windows’, with tiers of white Ottoman houses on both banks of the Osum and, inside the still-inhabited castle, Byzantine churches and the Onufri icon museum.'),
 'gjirokaster': ('돌 지붕 집들이 비탈을 덮은 세계유산 도시. 거대한 성에서 계곡을 내려다보고, 구시장 골목과 오스만 저택 박물관, 성 아래 냉전 터널을 둘러봅니다.',
                 'A World Heritage town of stone-roofed houses on a hillside, with a huge castle above the valley, bazaar lanes, Ottoman mansion museums and a Cold War tunnel under the castle.'),
 'sarande': ('코르푸섬 맞은편 이오니아해 휴양 도시. 해안 산책로와 레쿠르시 성 전망이 있고, 근교의 세계유산 부트린트 유적과 크사밀 해변, 블루 아이 샘으로 다녀옵니다.',
             'An Ionian resort town facing Corfu, with a seafront promenade and views from Lëkurësi Castle; day trips go to the World Heritage ruins of Butrint, the Ksamil beaches and the Blue Eye spring.'),
}

REWRITE = {
 'tirana-h1': (None, None, '국가 영웅 스칸데르베그의 기마상이 선 넓은 중앙 광장으로, 역사박물관·오페라 극장·모스크·시계탑이 둘러쌉니다.', 'The broad central square with the equestrian statue of national hero Skanderbeg, ringed by the history museum, the opera, the mosque and the clock tower.'),
 'tirana-h2': (None, None, '공산 정권 간부들만 살던 통제 구역이 지금은 카페·바·식당이 가장 빼곡한 동네가 됐고, 독재자 호자의 옛 집도 남아 있습니다.', 'Once the closed quarter of the communist elite, now the district most packed with cafés, bars and restaurants; dictator Hoxha’s former villa still stands here.'),
 'tirana-h3': (None, None, '시내 동쪽 해발 1,600m대의 산으로, 발칸에서 가장 긴 케이블카 다이티 엑스프레스로 올라 티라나 전체를 내려다봅니다.', 'The mountain east of the city rising to over 1,600 m; the Dajti Ekspres, the longest cable car in the Balkans, climbs it for views over all of Tirana.'),
 'tirana-h4': (None, None, '1988년 독재자 호자 기념관으로 지은 피라미드 건물로, 2023년 바깥 계단을 걸어 오르는 전망대와 청년 기술 센터로 다시 태어났습니다.', 'A pyramid built in 1988 as a memorial to dictator Hoxha, reborn in 2023 with outside steps you can climb for views and a youth technology centre.'),
 'tirana-h5': (None, None, '1820년대 광장 옆에 지은 오스만 모스크로, 꽃과 나무, 풍경을 그린 현관 프레스코가 드물고 아름답습니다.', 'An Ottoman mosque of the 1820s beside the square, with rare frescoes of flowers, trees and landscapes on its portico.'),
 'berat-h1': (None, None, '13세기 성벽 안에 지금도 사람이 사는 언덕 위 성채로, 비잔틴 교회와 모스크 터, 오누프리 박물관이 있고 강 양쪽 마을이 내려다보입니다.', 'A hilltop citadel still inhabited inside its 13th-century walls, with Byzantine churches, mosque ruins and the Onufri Museum, overlooking the town on both banks.'),
 'berat-h2': (None, None, '성 아래 오숨강 북쪽 비탈을 덮은 오스만 시대 흰 집들의 지구로, 줄지어 난 창문이 ‘천 개의 창문’이라는 별명을 낳았습니다.', 'The quarter of white Ottoman houses on the north bank below the castle, whose rows of windows gave Berat its ‘thousand windows’ nickname.'),
 'berat-h3': (None, None, '강 건너 남쪽 비탈의 옛 기독교인 지구로, 좁은 골목과 교회가 있고 망갈렘과 성채가 한눈에 보입니다.', 'The old Christian quarter on the south bank, with narrow lanes and churches and the best view across to Mangalem and the castle.'),
 'berat-h4': (None, None, '성채 안 성모 승천 성당에 든 박물관으로, 16세기 알바니아 이콘 화가 오누프리의 붉은색이 선명한 이콘을 전시합니다.', 'A museum inside the Cathedral of the Dormition in the castle, showing the vivid red icons of the 16th-century Albanian painter Onufri.'),
 'berat-h5': ('고리차 다리', 'Gorica Bridge', '1780년 무렵 돌로 놓은 7개 아치 다리로, 망갈렘과 고리차를 잇고 강 위에서 두 마을과 성채를 봅니다.', 'A stone bridge of seven arches from about 1780 linking Mangalem and Gorica, with views of both quarters and the castle from the river.', 'Gorica Bridge Berat'),
 'gjirokaster-h1': (None, None, '발칸에서 손꼽히게 큰 요새로, 시계탑과 대포 전시, 미군 정찰기, 옛 감옥이 있고 성벽에서 드리노 계곡이 내려다보입니다.', 'One of the biggest fortresses in the Balkans, with a clock tower, cannon galleries, a US spy plane and a former prison, and views over the Drino valley from the walls.'),
 'gjirokaster-h2': (None, None, '성 아래 돌길이 만나는 옛 시장 거리로, 오스만 시대 상점 건물에 공방과 카페, 기념품 가게가 들어 있습니다.', 'The old market streets where the stone lanes meet below the castle, its Ottoman shop buildings now workshops, cafés and souvenir shops.'),
 'gjirokaster-h3': (None, None, '18세기 오스만 탑집 저택으로, 조각 천장과 벽장, 손님방을 가족이 직접 안내합니다.', 'An 18th-century Ottoman tower house whose carved ceilings, cupboards and guest rooms are shown round by the family.'),
 'gjirokaster-h4': (None, None, '독재자 엔베르 호자가 태어난 집터에 다시 지은 저택으로, 전통 의상과 생활 도구, 집 구조를 보여 줍니다.', 'A mansion rebuilt on the birthplace of dictator Enver Hoxha, showing traditional costume, household objects and the layout of a Gjirokastër house.'),
 'gjirokaster-h5': (None, None, '성 아래 산을 뚫어 만든 냉전 시대 핵 벙커로, 당 간부용 방 수십 개를 안내와 함께 둘러봅니다.', 'A Cold War nuclear bunker tunnelled under the castle hill, with dozens of rooms for party officials seen on a guided visit.'),
 'sarande-h1': (None, None, '항구를 따라 이어지는 야자수 산책로로, 저녁이면 카페와 아이스크림 가게에 사람이 모이고 코르푸섬이 바다 건너 보입니다.', 'The palm-lined walk along the harbour, busy with cafés and ice-cream stands in the evening, with Corfu across the water.'),
 'sarande-h2': (None, None, '시내 위 언덕의 16세기 오스만 성터로, 사란다 만과 코르푸, 부트린트 호수가 한눈에 보이며 해 질 녘 식당이 인기입니다.', 'The ruins of a 16th-century Ottoman castle on the hill above town, with views over the bay, Corfu and Lake Butrint; popular for sunset at its restaurant.'),
 'sarande-h3': (None, None, '참나무 숲 속에서 50m 넘는 깊이로 솟는 청록색 샘으로, 비스트리처강의 발원지입니다.', 'A turquoise spring in an oak forest welling up from a depth of over 50 m, the source of the Bistricë River.'),
 'sarande-h4': (None, None, '그리스·로마·비잔틴·베네치아 시대 유적이 호숫가 숲에 겹겹이 남은 세계유산 고대 도시로, 극장과 세례당 모자이크, 성벽이 있습니다.', 'A World Heritage ancient city in lakeside woods, with Greek, Roman, Byzantine and Venetian remains including a theatre, baptistery mosaics and walls.'),
 'sarande-h5': ('크사밀 해변과 섬', 'Ksamil beaches & islands', '사란다 남쪽 작은 마을의 흰 모래 해변으로, 바로 앞 작은 섬 네 개까지 헤엄쳐 가거나 보트로 건넙니다.', 'White-sand beaches at a small village south of Sarandë, with four little islands just offshore reached by swimming or boat.', 'Ksamil Beach'),
}

ADD = {
 'tirana': [
  (6, S('벙크아트 1', 'Bunk’Art 1', '다이티 케이블카 근처 산 속에 판 5층짜리 냉전 핵 벙커로, 방 100여 개에 공산 정권 시절 역사 전시가 있습니다.', 'A five-storey Cold War nuclear bunker dug into the hill near the Dajti cable car, its hundred-odd rooms now an exhibition on the communist era.', 'Bunk’Art 1 Tirana', 90, 120, group=DAY,
        s='https://bunkart.al/', n='시내에서 버스로 다이티 케이블카 정류장까지 간 뒤 걸어갑니다. 휴무일은 공식 사이트에서 확인하세요.|Take the bus to the Dajti cable car stop, then walk; check closing days on the official site.')),
  (7, S('벙크아트 2', 'Bunk’Art 2', '내무부 옆 시내 한복판의 정부 벙커로, 비밀경찰 시구리미의 감시와 정치범의 역사를 전시합니다.', 'The government bunker in the city centre next to the interior ministry, now an exhibition on the Sigurimi secret police and political prisoners.', 'Bunk’Art 2 Tirana', 60, 90, s='https://bunkart.al/')),
  (8, S('국립 역사박물관', 'National History Museum', '광장 북쪽에 선 거대한 모자이크 벽화의 박물관으로, 일리리아 유적부터 공산 정권 시절까지 알바니아 역사를 훑습니다.', 'The museum on the north side of the square behind a huge mosaic façade, covering Albanian history from the Illyrians to the communist years.', 'National History Museum Tirana', 60, 90)),
  (9, S('새 시장 (파자리 이 리)', 'New Bazaar (Pazari i Ri)', '2017년 새로 꾸민 시장 광장으로, 과일·치즈·꿀 좌판과 둘러싼 식당·카페가 있습니다.', 'The market square redone in 2017, with stalls of fruit, cheese and honey and restaurants and cafés around it.', 'Pazari i Ri Tirana', 30, 45)),
  (10, S('나뭇잎의 집 (비밀 감시 박물관)', 'House of Leaves', '비밀경찰이 도청 본부로 쓰던 건물의 박물관으로, 감시 장비와 도청 기록, 피해자 이야기를 전시합니다.', 'A museum in the former eavesdropping headquarters of the secret police, showing surveillance equipment, recordings and victims’ stories.', 'House of Leaves Tirana', 45, 60)),
  (11, S('대공원과 인공 호수', 'Grand Park & artificial lake', '시내 남쪽의 큰 공원으로, 인공 호수를 도는 산책로와 카페, 대통령 궁이 있습니다.', 'The big park south of the centre, with a walk around the artificial lake, cafés and the presidential palace.', 'Grand Park of Tirana', 60, 90)),
 ],
 'berat': [
  (6, S('성 삼위일체 교회', 'Holy Trinity Church', '성채 안 비탈에 선 13세기 비잔틴 교회로, 벽돌 무늬 외벽과 벽화가 남아 있고 망갈렘이 내려다보입니다.', 'A 13th-century Byzantine church on the slope inside the castle, with patterned brickwork, surviving frescoes and views down over Mangalem.', 'Holy Trinity Church Berat', 15, 20)),
  (7, S('왕의 모스크와 할베티 테케', 'King Mosque & Halveti Tekke', '15세기 말 지은 베라트에서 가장 오래된 모스크와 옆에 붙은 18세기 수피 수도원 테케로, 나무 천장 조각이 아름답습니다.', 'Berat’s oldest mosque, from the late 15th century, and the 18th-century Sufi tekke beside it, both with fine carved wooden ceilings.', 'King Mosque Berat', 20, 30,
        n='예배 시간에는 들어갈 수 없고 신발을 벗습니다.|Closed during prayers; remove shoes.')),
  (8, S('총각 모스크', 'Bachelors’ Mosque', '1827년 망갈렘 강변에 지은 모스크로, 외벽을 꽃과 식물 그림으로 장식했습니다.', 'A mosque of 1827 on the riverside in Mangalem, its outer walls painted with flowers and plants.', 'Bachelors’ Mosque Berat', 10, 15)),
 ],
 'gjirokaster': [
  (6, S('제카테 하우스', 'Zekate House', '1811년 지은 쌍둥이 탑 오스만 저택으로, 마을에서 가장 크고 손님방 벽화와 조각 천장이 남아 있습니다.', 'A twin-towered Ottoman mansion of 1811, the largest in town, with painted guest rooms and carved ceilings.', 'Zekate House Gjirokastër', 30, 40)),
  (7, S('바자르 모스크', 'Bazaar Mosque', '1757년 구시장 한가운데 지은 모스크로, 공산 정권 시절 철거를 피한 지로카스트라의 유일한 모스크입니다.', 'A mosque of 1757 at the heart of the bazaar, the only one in Gjirokastër to survive demolition under the communist regime.', 'Bazaar Mosque Gjirokastër', 10, 15)),
  (8, S('알리 파샤 다리', 'Ali Pasha Bridge', '성 위 산자락에 남은 19세기 초 수도교 다리로, 구시가에서 1시간쯤 걸어 올라가 계곡과 마을을 내려다봅니다.', 'An early-19th-century aqueduct bridge on the hillside above the castle, about an hour’s walk up from the old town, with views over the valley and town.', 'Ali Pasha Bridge Gjirokastër', 90, 120,
        n='표지판이 적어 지도 앱을 보며 오릅니다. 편한 신발이 필요합니다.|Few signs, so follow a map app; wear good shoes.')),
 ],
 'sarande': [
  (6, S('사십 성인 수도원', 'Monastery of the Forty Saints', '시내 위 언덕에 남은 6세기 비잔틴 수도원 터로, 지하 예배당 벽화 흔적과 사란다 만 전망이 있습니다.', 'The ruins of a 6th-century Byzantine monastery on the hill above town, with traces of frescoes in the crypt and views over the bay.', 'Monastery of the Forty Saints Sarandë', 45, 60,
        n='레쿠르시 성 근처라 함께 보기 좋습니다. 택시나 차로 갑니다.|Near Lëkurësi Castle, so combine the two; go by taxi or car.')),
  (7, S('유대교 회당·바실리카 유적', 'Synagogue-Basilica', '시내 한복판에 남은 5세기 유대교 회당 터로, 뒤에 교회로 바뀌었고 모자이크 바닥이 남아 있습니다.', 'The ruins of a 5th-century synagogue in the town centre, later turned into a church, with mosaic floors.', 'Ancient Synagogue Sarandë', 15, 20,
        n='모자이크는 보호를 위해 모래로 덮어 두는 때가 많습니다.|The mosaics are often covered with sand for protection.')),
  (8, S('메소포탐 수도원', 'Mesopotam Monastery', '부트린트 가는 길목 마을의 13세기 비잔틴 성 니콜라스 교회로, 외벽에 용과 독수리 조각이 있습니다.', 'The 13th-century Byzantine Church of St Nicholas at a village on the way to Butrint, with dragons and eagles carved on its outer walls.', 'Mesopotam Monastery', 30, 45, group=DAY,
        n='사란다에서 남동쪽으로 약 12km. 블루 아이 가는 길에 들르기 좋습니다.|About 12 km south-east of Sarandë, an easy stop on the way to the Blue Eye.')),
 ],
}

IT = [
 ("  tirana: { days: [['', 5, 1, 4, 2]], trips: [['다이티 산|Mount Dajti', 3]] },\n",
  "  tirana: {\n    days: [\n      ['중심가|City centre', 1, 8, 5, 7, 10, 9],\n      ['블로쿠·남쪽|Blloku & south', 4, 2, 11],\n    ],\n    trips: [['다이티 산과 벙크아트 1|Mount Dajti & Bunk’Art 1', 3, 6]],\n  },\n"),
 ("  berat: [3, 5, 2, 1, 4],\n", "  berat: [2, 8, 7, 5, 3, 1, 6, 4],\n"),
 ("  gjirokaster: [2, 5, 4, 3, 1],\n", "  gjirokaster: [2, 7, 5, 1, 3, 6, 4, 8],\n"),
 ("  sarande: {\n    days: [['', 1, 2]],\n    trips: [\n      ['부트린트와 해변|Butrint & the beaches', 4, 5],\n      ['블루 아이|Blue Eye', 3],\n    ],\n  },\n",
  "  sarande: {\n    days: [['', 1, 7, 2, 6]],\n    trips: [\n      ['부트린트와 크사밀|Butrint & Ksamil', 4, 5],\n      ['블루 아이와 메소포탐|Blue Eye & Mesopotam', 8, 3],\n    ],\n  },\n"),
]

TIRANA = [(1, K_CEN), (8, K_CEN), (5, K_CEN), (7, K_CEN), (10, K_CEN), (9, K_CEN), (4, K_SOU), (2, K_SOU), (11, K_SOU), (3, DAY), (6, DAY)]
SMALL = ['berat', 'gjirokaster', 'sarande']

AL_OLD = "    cityIds: ['tirana', 'berat', 'gjirokaster', 'sarande'],\n"
AL_NEW = """    cityIds: ['tirana', 'berat', 'gjirokaster', 'sarande'],
    cityGroups: [
      { title: { ko: '티라나·중부', en: 'Tirana & central' }, cityIds: ['tirana'] },
      { title: { ko: '남부 내륙', en: 'Southern interior' }, cityIds: ['berat', 'gjirokaster'] },
      { title: { ko: '이오니아 해안', en: 'Ionian coast' }, cityIds: ['sarande'] },
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
    c = reorder(c, 'tirana', TIRANA)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(AL_OLD) == 1
    wr('countries.ts', k.replace(AL_OLD, AL_NEW))


if __name__ == '__main__':
    main()
