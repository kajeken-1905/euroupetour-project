#!/usr/bin/env python3
"""Malta step 1 (the three existing cities), 2026-11-20. Fixes: every blurb and one-line description; Ġgantija was
spelled wrongly in Korean. New sights: Valletta 12 (city / across the harbour / day-trip groups, 2-day itinerary,
Paola and south-coast trips), Mdina 4 (Rabat next door, Dingli Cliffs), Gozo 4 (Comino as a day trip). Closing days
left out unless already checked. Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
B_V = ('발레타 시내', 'Inside Valletta')
B_H = ('그랜드 하버 건너 (스리 시티즈)', 'Across the harbour (Three Cities)')
B_M = ('므디나 성안', 'Inside Mdina')
B_R = ('라바트 (성문 밖)', 'Rabat (outside the gate)')
CHURCH = '어깨와 무릎을 가리는 차림이 좋고, 미사 중에는 관람을 삼갑니다.|Cover shoulders and knees, and avoid visiting during Mass.'
HM = '유료이며 헤리티지 몰타 누리집에서 표를 살 수 있습니다.|Ticketed; tickets on the Heritage Malta website.'

BLURB = {
 'valletta': ('몰타 기사단이 16세기에 세운 요새 수도로, 도시 전체가 세계유산입니다. 카라바조 그림이 걸린 성 요한 공동대성당과 기사단장 궁전, 그랜드 하버를 내려다보는 바라카 정원이 있고, 배로 건너편 스리 시티즈와 남쪽 해안의 선사 시대 신전·어촌으로 다녀옵니다.',
              'The fortified capital the Knights of St John built in the 16th century, a World Heritage city in its entirety: St John’s Co-Cathedral with its Caravaggios, the Grandmaster’s Palace and the Barrakka Gardens above the Grand Harbour, with ferries across to the Three Cities and trips to prehistoric temples and fishing villages on the south coast.'),
 'mdina': ('몰타 섬 한가운데 언덕 위 성벽 도시로, 기사단 이전의 옛 수도입니다. 차가 거의 다니지 않아 ‘고요한 도시’라 불리고, 성문 밖 라바트에는 로마 시대 카타콤과 성 바오로 동굴이 있습니다.',
           'A walled hilltop town in the middle of Malta and the island’s capital before the Knights. Nearly car-free, it is called the Silent City, and Rabat outside its gate has Roman-era catacombs and St Paul’s Grotto.'),
 'gozo': ('몰타 북서쪽의 더 작고 푸른 섬으로, 배로 약 25분입니다. 중심 도시 빅토리아의 성채와 세계에서 손꼽히게 오래된 거석 신전 즈간티야, 절벽 해안의 드웨이라와 붉은 모래 해변 람라가 있고, 사이에 있는 작은 섬 코미노의 블루 라군으로 다녀옵니다.',
          'Malta’s smaller, greener sister island to the north-west, about 25 minutes by ferry: the citadel of Victoria, the Ġgantija temples—among the oldest free-standing buildings in the world—the cliffs of Dwejra and red-sand Ramla Bay, with boats to the Blue Lagoon on little Comino in between.'),
}

REWRITE = {
 'valletta-h1': (None, None, '기사단이 세운 대성당으로, 금빛 장식 아래 대리석 묘비 바닥이 깔리고, 부속 박물관에 카라바조의 ‘세례 요한의 참수’가 걸려 있습니다.', 'The Knights’ conventual church, gilded inside above a floor of marble tombstones, with Caravaggio’s Beheading of St John in its oratory.'),
 'valletta-h2': (None, None, '성벽 위 아치 정원으로, 그랜드 하버와 스리 시티즈가 한눈에 보이고 아래 포대에서 정오에 예포를 쏩니다.', 'Arcaded gardens on the bastions, looking over the Grand Harbour and the Three Cities, with a noon gun fired from the battery below.'),
 'valletta-h3': (None, None, '성문에서 성 엘모 요새까지 도시를 가로지르는 중심 거리로, 상점과 카페, 옛 궁전이 늘어서 있습니다.', 'The main street running from the city gate to Fort St Elmo, lined with shops, cafés and old palaces.'),
 'valletta-h4': ('그랜드 하버 뱃놀이', 'Grand Harbour by boat', '요새로 둘러싸인 천연 항구로, 전통 나룻배 다이사나 유람선을 타고 물 위에서 성벽을 올려다봅니다.', 'The fortress-ringed natural harbour, best seen from the water on a traditional dgħajsa or a harbour cruise.'),
 'valletta-h5': (None, None, '반도 끝 별 모양 요새로, 1565년 대포위전의 격전지였고 지금은 국립 전쟁 박물관입니다.', 'The star-shaped fort at the tip of the peninsula, fought over in the Great Siege of 1565 and now the National War Museum.'),
 'mdina-h1': (None, None, '1724년에 다시 지은 바로크 성문으로, 다리를 건너 성 안으로 들어갑니다.', 'The Baroque main gate, rebuilt in 1724, reached across a bridge over the ditch.'),
 'mdina-h2': (None, None, '1693년 지진 뒤 바로크 양식으로 다시 지은 대성당으로, 바오로 사도가 로마 총독을 만났다는 자리에 섰습니다.', 'The cathedral rebuilt in Baroque style after the 1693 earthquake, on the spot where St Paul is said to have met the Roman governor.'),
 'mdina-h3': (None, None, '성 북쪽 성벽 위 광장으로, 몰타 섬의 들판과 멀리 바다까지 내려다보입니다.', 'The square on the northern bastions, looking out over the fields of Malta to the sea.'),
 'mdina-h4': (None, None, '차가 거의 없는 좁은 돌 골목에 귀족 저택과 작은 성당이 이어지고, 저녁엔 가로등 아래 특히 조용합니다.', 'Narrow, almost car-free stone lanes of noble houses and small churches, especially hushed under the lamps in the evening.'),
 'mdina-h5': (None, None, '중세 저택을 꾸민 박물관으로, 마지막 주인이 모은 그림·은기·무기를 오디오 가이드로 둘러봅니다.', 'A medieval town house turned museum, showing its last owner’s collections of paintings, silver and arms with an audio guide.'),
 'gozo-h1': (None, None, '빅토리아 언덕 위 성채로, 성벽을 한 바퀴 걸으면 고조 섬 전체가 내려다보이고 안에 대성당과 박물관이 있습니다.', 'The citadel on the hill above Victoria: walk its walls for views over all of Gozo, with a cathedral and museums inside.'),
 'gozo-h2': ('즈간티야 신전', None, '기원전 3600년쯤 지은 거석 신전 두 채로, 이집트 피라미드보다 오래된 세계유산입니다.', 'Two megalithic temples built around 3600 BC, older than the Egyptian pyramids and a World Heritage site.'),
 'gozo-h3': (None, None, '섬 서쪽 절벽 해안으로, 좁은 굴로 바다와 이어진 내해와 푸른 바다 위 푼기 바위가 있습니다. 아주르 윈도는 2017년에 무너졌습니다.', 'The cliff coast in the west of the island, with an inland sea joined to the open sea by a narrow cave and Fungus Rock offshore; the Azure Window collapsed in 2017.'),
 'gozo-h4': (None, None, '섬 북쪽 계곡 끝의 붉은빛 모래 해변으로, 여름엔 해수욕객이 많습니다.', 'A reddish-sand beach at the end of a valley on the north coast, busy with swimmers in summer.'),
 'gozo-h5': (None, None, '좁은 만 안쪽의 작은 어촌으로, 해안 식당과 바위 수영터, 절벽 산책로가 있습니다.', 'A small fishing village deep in a narrow bay, with waterfront restaurants, rock swimming and cliff walks.'),
}

ADD = {
 'valletta': [
  (6, S('로어 바라카 정원', 'Lower Barrakka Gardens', '그리스 신전 모양 기념비가 선 작은 성벽 정원으로, 항구 입구와 방파제가 내려다보입니다.', 'A small bastion garden with a temple-like monument, looking down on the harbour mouth and breakwater.', 'Lower Barrakka Gardens', 20, 30, b='no')),
  (7, S('기사단장 궁전', 'Grandmaster’s Palace', '몰타 기사단장이 머물던 궁전으로, 벽화로 꾸민 방들과 기사단의 무기고를 둘러봅니다.', 'The palace of the Grand Masters of the Order, with frescoed state rooms and the Knights’ armoury.', 'Grandmaster’s Palace Valletta', 60, 90, n=HM)),
  (8, S('카사 로카 피콜라', 'Casa Rocca Piccola', '지금도 귀족 가문이 사는 16세기 저택으로, 안내 투어로 방들과 지하 방공호를 봅니다.', 'A 16th-century palazzo still lived in by a noble family, seen on a guided tour that includes its wartime shelters.', 'Casa Rocca Piccola', 45, 60)),
  (9, S('국립 고고학 박물관', 'National Museum of Archaeology', '기사단 숙소였던 건물에 몰타 선사 시대 신전의 조각과 ‘잠자는 여인’ 상을 모았습니다.', 'In a former Knights’ auberge, with carvings from Malta’s prehistoric temples and the Sleeping Lady figure.', 'National Museum of Archaeology Malta', 60, 90, n=HM)),
  (10, S('무자 국립 미술관', 'MUŻA', '옛 기사단 숙소를 고친 국립 미술관으로, 몰타와 유럽의 그림을 전시합니다.', 'The national art museum in a restored Knights’ auberge, showing Maltese and European painting.', 'MUŻA Valletta', 60, 90, n=HM)),
  (11, S('비르구 (비토리오사)', 'Birgu (Vittoriosa)', '스리 시티즈 가운데 가장 오래된 도시로, 기사단이 처음 자리 잡은 곳입니다. 골목과 종교 재판소 궁전, 요트 항구가 있습니다.', 'The oldest of the Three Cities and the Knights’ first base, with lanes, the Inquisitor’s Palace and a yacht marina.', 'Birgu', 90, 150, group=B_H, n='발레타에서 페리로 약 10분입니다.|About 10 minutes by ferry from Valletta.')),
  (12, S('성 안젤로 요새', 'Fort St Angelo', '비르구 끝의 요새로, 대포위전 때 기사단의 본부였고 성벽 위에서 발레타가 마주 보입니다.', 'The fort at the tip of Birgu, the Knights’ headquarters in the Great Siege, facing Valletta across the water.', 'Fort St Angelo', 60, 90, group=B_H, n=HM)),
  (13, S('할 사플리에니 하이포지움', 'Ħal Saflieni Hypogeum', '바위를 파서 만든 기원전 4000년쯤의 지하 무덤으로, 세계유산이며 하루 입장 인원이 적습니다.', 'An underground burial complex cut into the rock around 4000 BC, a World Heritage site admitting few visitors a day.', 'Hal Saflieni Hypogeum', 60, 60, group=DAY, b='req',
      n='파올라에 있습니다. 표가 몇 주 전에 매진되는 일이 많아 일찍 예약해야 하고, 안에서는 사진을 찍을 수 없습니다.|In Paola; tickets often sell out weeks ahead, so book early, and photography is not allowed inside.')),
  (14, S('타르시엔 신전', 'Tarxien Temples', '하이포지움에서 걸어서 닿는 선사 시대 신전 터로, 돌에 새긴 소용돌이무늬와 동물 부조가 남아 있습니다.', 'Prehistoric temple remains a short walk from the Hypogeum, with carved spirals and animal reliefs.', 'Tarxien Temples', 45, 60, group=DAY, n=HM)),
  (15, S('마르사실로크', 'Marsaxlokk', '눈을 그린 알록달록한 전통 어선 루주가 떠 있는 어촌으로, 일요일 오전엔 생선 시장이 열립니다.', 'A fishing village of brightly painted luzzu boats with eyes on their bows, with a fish market on Sunday mornings.', 'Marsaxlokk', 90, 120, group=DAY)),
  (16, S('블루 그로토', 'Blue Grotto', '남쪽 절벽의 바다 동굴들로, 작은 배를 타고 들어가면 물빛이 파랗게 빛납니다.', 'Sea caves in the southern cliffs, where small boats take you in to see the water glow blue.', 'Blue Grotto Malta', 45, 60, group=DAY, n='배는 바다가 잔잔할 때만 다닙니다.|Boats run only when the sea is calm.')),
  (17, S('하자르 임과 음나이드라 신전', 'Ħaġar Qim & Mnajdra', '바다를 내려다보는 언덕 위 거석 신전 두 곳으로, 세계유산이며 산책로로 이어집니다.', 'Two megalithic temples on a hillside above the sea, a World Heritage site joined by a footpath.', 'Hagar Qim', 60, 90, group=DAY, n=HM)),
 ],
 'mdina': [
  (6, S('성 바오로 카타콤', 'St Paul’s Catacombs', '라바트 땅 밑의 로마 시대 지하 묘지로, 좁은 통로를 따라 무덤방들이 이어집니다.', 'Roman-era underground cemeteries beneath Rabat, a maze of narrow passages and burial chambers.', 'St Paul’s Catacombs Rabat', 45, 60, group=B_R, n=HM)),
  (7, S('성 바오로 동굴과 비냐쿠르 박물관', 'St Paul’s Grotto & Wignacourt Museum', '바오로 사도가 머물렀다는 동굴과, 그 위 박물관의 그림·지하 방공호를 함께 봅니다.', 'The grotto where St Paul is said to have stayed, with a museum of paintings and wartime shelters above.', 'Wignacourt Museum', 45, 60, group=B_R)),
  (8, S('도무스 로마나', 'Domus Romana', '성문 바로 밖 로마 시대 저택 터로, 바닥 모자이크가 잘 남아 있습니다.', 'The remains of a Roman town house just outside the gate, with well-preserved floor mosaics.', 'Domus Romana Rabat', 30, 45, group=B_R, n=HM)),
  (9, S('딩글리 절벽', 'Dingli Cliffs', '몰타 섬에서 가장 높은 해안 절벽으로, 절벽 위 길을 걸으며 바다 위 해넘이를 봅니다.', 'Malta’s highest sea cliffs, with a clifftop path that is best at sunset.', 'Dingli Cliffs', 45, 90, group=DAY, n='므디나에서 남서쪽 약 5km, 버스나 택시로 갑니다.|About 5 km south-west of Mdina by bus or taxi.')),
 ],
 'gozo': [
  (6, S('타 피누 대성당', 'Ta’ Pinu Basilica', '들판 한가운데 선 20세기 순례 성당으로, 기적을 바라는 사람들이 남긴 봉헌물이 가득합니다.', 'A 20th-century pilgrimage basilica alone in the fields, filled with ex-votos left by those seeking a miracle.', 'Ta Pinu Basilica', 30, 45, n=CHURCH)),
  (7, S('스웨이니 소금밭', 'Xwejni salt pans', '마르살포른 바닷가 바위를 깎아 만든 바둑판 모양 소금밭으로, 여름엔 소금을 거둡니다.', 'Chequerboard salt pans cut into the coastal rock near Marsalforn, harvested in summer.', 'Xwejni Salt Pans', 30, 45)),
  (8, S('위드 일 가스리', 'Wied il-Għasri', '절벽 사이로 깊이 파고든 좁은 협곡 만으로, 작은 자갈 해변에서 수영합니다.', 'A narrow gorge cutting deep into the cliffs, with a tiny shingle beach for swimming.', 'Wied il-Ghasri', 45, 90)),
  (9, S('코미노 블루 라군', 'Blue Lagoon, Comino', '몰타와 고조 사이 작은 섬 코미노의 맑은 청록색 바다로, 여름 한낮엔 매우 붐빕니다.', 'The clear turquoise water off little Comino between Malta and Gozo, very crowded at midday in summer.', 'Blue Lagoon Comino', 120, 240, group=DAY,
      n='고조 음자르 항이나 몰타 치르케와에서 배로 갑니다. 그늘이 거의 없어 이른 시간이 좋습니다.|Boats from Mġarr on Gozo or Ċirkewwa on Malta; there is little shade, so go early.')),
 ],
}

IT = [
 ("  valletta: [3, 1, 2, 4, 5],\n",
  "  valletta: {\n    days: [\n      ['발레타 시내|Inside Valletta', 2, 1, 7, 3, 9, 8],\n      ['요새와 그랜드 하버|Forts & the Grand Harbour', 10, 5, 6, 4, 11, 12],\n    ],\n    trips: [\n      ['하이포지움과 타르시엔|Hypogeum & Tarxien', 13, 14],\n      ['남부 해안|South coast', 15, 16, 17],\n    ],\n  },\n"),
 ("  mdina: [1, 4, 2, 5, 3],\n",
  "  mdina: { days: [['', 1, 4, 2, 5, 3, 8, 6, 7]], trips: [['딩글리 절벽|Dingli Cliffs', 9]] },\n"),
 ("  gozo: [3, 5, 1, 2, 4],\n",
  "  gozo: { days: [['', 1, 2, 6, 3], ['', 7, 8, 4, 5]], trips: [['코미노 블루 라군|Comino', 9]] },\n"),
]

VAL = [(2, B_V), (1, B_V), (7, B_V), (3, B_V), (9, B_V), (8, B_V), (10, B_V), (5, B_V), (6, B_V),
       (4, B_H), (11, B_H), (12, B_H),
       (13, DAY), (14, DAY), (15, DAY), (16, DAY), (17, DAY)]
MDI = [(1, B_M), (4, B_M), (2, B_M), (5, B_M), (3, B_M), (8, B_R), (6, B_R), (7, B_R), (9, DAY)]
SMALL = ['gozo']


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'id: "{cid}",')
        j = c.index('highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}',
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
    it = rd('itinerary-it.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-it.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-med.ts')
    c = reorder(c, 'valletta', VAL)
    c = reorder(c, 'mdina', MDI)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  {cid}: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
