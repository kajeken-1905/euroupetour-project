#!/usr/bin/env python3
"""Italy step 1, Sicily & Sardinia, 2026-11-07. Thin descriptions rewritten; palermo-h5 '몬드레알레 데이트립' renamed
'몬레알레 대성당'. More sights: Palermo (Teatro Massimo, Fontana Pretoria, Capuchin Catacombs, Mondello), Taormina
(Castelmola, Alcantara gorges), Catania (Benedictine monastery), Siracusa (Temple of Apollo, Noto, themed Modica chocolate),
Agrigento (archaeological museum), Cagliari (archaeological museum, Su Nuraxi). Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
OLD_NEAR = ('근교', 'Nearby')
REWRITE = {
 'palermo-h1': ('팔레르모 대성당', 'Palermo Cathedral', '노르만·고딕·아랍·바로크 양식이 겹친 대성당으로, 지붕 위를 걸으며 시내를 내려다볼 수 있습니다.', 'A cathedral layering Norman, Gothic, Arab and Baroque styles—walk its rooftop for views over the city.'),
 'palermo-h2': ('팔라티노 예배당', 'Palatine Chapel', '노르만 왕궁 안의 예배당으로, 비잔틴 황금 모자이크와 아랍식 나무 천장이 함께 있습니다.', 'The chapel inside the Norman Palace, combining Byzantine gold mosaics with an Arab carved-wood ceiling.'),
 'palermo-h3': ('발라로 시장', 'Ballarò market', '팔레르모에서 가장 오래된 노천 시장으로, 아란치나·파넬레 등 시칠리아 길거리 음식을 맛봅니다.', 'Palermo’s oldest street market—try Sicilian street food such as arancina and panelle.'),
 'palermo-h4': ('콰트로 칸티', 'Quattro Canti', '두 큰길이 만나는 네 모서리를 바로크 파사드로 꾸민 교차로입니다.', 'The crossroads of the two main streets, its four corners dressed in Baroque façades.'),
 'palermo-h5': ('몬레알레 대성당', 'Monreale Cathedral', '언덕 위 노르만 대성당으로, 벽과 천장을 덮은 황금 모자이크와 회랑이 유명합니다.', 'The hilltop Norman cathedral famous for the gold mosaics covering its walls and its cloister.'),
 'taormina-h3': ('코르소 움베르토', 'Corso Umberto', '두 성문 사이를 잇는 구시가 중심 거리로, 상점과 카페, 작은 성당이 이어집니다.', 'The old-town main street between two gates, lined with shops, cafés and small churches.'),
 'taormina-h4': ('4월 9일 광장', 'Piazza IX Aprile', '코르소 중간의 광장으로, 테라스 난간 너머로 에트나와 바다가 보입니다.', 'The square midway along the Corso, with Etna and the sea beyond its terrace railing.'),
 'taormina-h5': ('에트나 화산', 'Mount Etna', '유럽에서 가장 높은 활화산으로, 케이블카와 4륜 버스로 분화구 근처까지 오르고 기슭 와이너리에서 에트나 와인을 시음합니다.', 'Europe’s highest active volcano—cable car and 4×4 bus up near the craters, and Etna wine tastings at wineries on its slopes.'),
 'catania-h3': ('에트네아 거리', 'Via Etnea', '두오모 광장에서 에트나 화산을 향해 곧게 뻗은 3km 중심 거리입니다.', 'The 3 km main street running straight from the cathedral square towards Etna.'),
 'siracusa-h1': ('오르티자', 'Ortigia', '다리로 이어진 구시가 섬으로, 바로크 골목과 바다 성벽 산책로, 아침 시장이 있습니다.', 'The old-town island linked by bridges, with Baroque lanes, a seawall promenade and a morning market.'),
 'cagliari-h1': ('카스텔로 지구', 'Castello', '성벽과 탑으로 둘러싸인 언덕 위 구시가로, 골목 끝마다 항구와 석호가 내려다보입니다.', 'The walled and towered hilltop old town, with views over the port and lagoons at the end of its lanes.'),
 'alghero-h1': ('해안 성벽', 'Sea walls', '카탈루냐 시대 성벽 위 산책로로, 해 질 녘 카포 카차 쪽으로 지는 해를 봅니다.', 'The promenade on the Catalan-era sea walls—watch the sun set towards Capo Caccia.'),
 'alghero-h4': ('알게로 구시가', 'Old town', '카탈루냐어가 아직 쓰이는 ‘작은 바르셀로나’로, 카탈루냐 고딕 건물과 산호 공방이 늘어선 골목입니다.', 'The “little Barcelona” where Catalan is still spoken—lanes of Catalan Gothic buildings and coral workshops.'),
}
ADD = {
 'palermo': [
  (6, S('마시모 극장', 'Teatro Massimo', '이탈리아에서 가장 큰 오페라 극장으로, 안내 투어로 객석과 무대를 봅니다.', 'Italy’s largest opera house, seen on guided tours of the auditorium and stage.', 'Teatro Massimo Palermo', 30, 45)),
  (7, S('프레토리아 분수', 'Fontana Pretoria', '나체 조각상이 가득해 ‘수치의 분수’라는 별명이 붙은 16세기 분수입니다.', 'The 16th-century fountain so crowded with nude statues it was nicknamed the “Fountain of Shame”.', 'Fontana Pretoria', 10, 15)),
  (8, S('카푸친 카타콤베', 'Capuchin Catacombs', '미라 8,000여 구가 옷을 입은 채 늘어선 지하 묘지입니다.', 'Underground corridors lined with some 8,000 clothed mummies.', 'Catacombe dei Cappuccini Palermo', 30, 45)),
  (9, S('몬델로 해변', 'Mondello', '시내에서 버스로 30분 거리의 하얀 모래 해변과 아르누보 해수욕장 건물입니다.', 'The white-sand beach and Art Nouveau bathing pavilion 30 min by bus from the centre.', 'Spiaggia di Mondello', 120, 240)),
 ],
 'taormina': [
  (6, S('카스텔몰라', 'Castelmola', '타오르미나 위 바위산 꼭대기 마을로, 아몬드 와인을 마시며 해안과 에트나를 봅니다.', 'The village on a crag above Taormina—sip almond wine with views of the coast and Etna.', 'Castelmola', 60, 90,
        n='타오르미나에서 버스로 약 15분이거나 걸어서 약 1시간 오릅니다.|About 15 min by bus from Taormina, or an hour’s walk uphill.')),
  (7, S('알칸타라 협곡', 'Alcantara Gorges', '용암이 식으며 만든 현무암 기둥 사이로 차가운 강물이 흐르는 협곡입니다.', 'A gorge of basalt columns formed by cooling lava, with an icy river running through.', 'Gole dell\'Alcantara', 120, 180, group=DAY,
        n='타오르미나에서 버스로 약 1시간입니다.|About 1 hr by bus from Taormina.')),
 ],
 'catania': [
  (6, S('산 니콜로 라레나 베네딕도회 수도원', 'Benedictine Monastery of San Nicolò l’Arena', '유럽에서 손꼽히게 큰 수도원으로, 지금은 대학이 쓰며 회랑과 지하 로마 유적을 투어로 봅니다.', 'One of Europe’s largest monasteries, now a university—tours cover its cloisters and Roman remains below.', 'Monastero dei Benedettini Catania', 60, 75, b='rec')),
 ],
 'siracusa': [
  (6, S('아폴론 신전', 'Temple of Apollo', '오르티자 입구의 기원전 6세기 그리스 신전 유적으로, 시칠리아에서 가장 오래된 도리아식 신전입니다.', 'The 6th-century BC Greek temple ruins at the entrance to Ortigia—the oldest Doric temple in Sicily.', 'Tempio di Apollo Siracusa', 10, 15)),
  (7, S('노토', 'Noto', '1693년 지진 뒤 꿀빛 석회암으로 새로 지은 바로크 도시로, 유네스코 세계유산입니다.', 'The Baroque town rebuilt in honey-coloured limestone after the 1693 earthquake; a UNESCO World Heritage Site.', 'Cattedrale di Noto', 180, 240, group=DAY,
        n='시라쿠사에서 기차나 버스로 약 35~50분입니다.|About 35–50 min by train or bus from Siracusa.')),
  (8, S('모디카 초콜릿', 'Modica chocolate', '아즈텍식 냉가공으로 설탕 결정이 씹히는 모디카 초콜릿의 고향으로, 안티카 돌체리아 보나주토에서 맛봅니다.', 'Home of Modica chocolate, cold-worked the Aztec way so the sugar stays crunchy—taste it at the Antica Dolceria Bonajuto.', 'Antica Dolceria Bonajuto', 180, 240, group=DAY,
        n='시라쿠사에서 버스로 약 1시간 30분입니다.|About 1 hr 30 by bus from Siracusa.')),
 ],
 'agrigento': [
  (5, S('피에트로 그리포 고고학 박물관', 'Archaeological Museum Pietro Griffo', '신전 계곡 출토 유물과 제우스 신전의 거인 기둥상 ‘텔라몬’을 전시합니다.', 'Finds from the Valley of the Temples, including a giant telamon figure from the Temple of Zeus.', 'Museo Archeologico Pietro Griffo', 60, 90)),
 ],
 'cagliari': [
  (6, S('칼리아리 국립고고학박물관', 'National Archaeological Museum of Cagliari', '누라게 문명의 청동 인물상과 몬테 프라마의 거인 석상을 전시합니다.', 'Bronze figurines of the Nuragic civilisation and the Giants of Mont’e Prama.', 'Museo Archeologico Nazionale Cagliari', 60, 90, c='mon')),
  (7, S('수 누락시 디 바루미니', 'Su Nuraxi di Barumini', '기원전 2천 년대에 쌓은 사르데냐 누라게 석탑 마을 유적으로, 유네스코 세계유산입니다.', 'A Nuragic stone-tower settlement from the 2nd millennium BC; a UNESCO World Heritage Site.', 'Su Nuraxi di Barumini', 120, 150, group=DAY,
        n='칼리아리에서 차로 약 1시간이고 안내 투어로만 들어갑니다.|About 1 hr by car from Cagliari; entry by guided tour only.')),
 ],
}
IT = [
 ("  palermo: { days: [['', 2, 1, 4, 3]], trips: [['몬레알레|Monreale', 5]] },",
  "  palermo: { days: [['구시가|Old town', 2, 1, 4, 7, 3, 6], ['카타콤베와 몬델로|Catacombs & Mondello', 8, 9]], trips: [['몬레알레|Monreale', 5]] },"),
 ("  taormina: { days: [['', 1, 3, 4, 2]], trips: [['에트나 화산|Mount Etna', 5]] },",
  "  taormina: { days: [['', 1, 3, 4, 6, 2]], trips: [['에트나 화산|Mount Etna', 5], ['알칸타라 협곡|Alcantara Gorges', 7]] },"),
 ("  catania: [4, 2, 1, 5, 3],", "  catania: [4, 2, 1, 6, 5, 3],"),
 ("  siracusa: [3, 4, 1, 2, 5],", "  siracusa: { days: [['', 3, 4, 6, 1, 2, 5]], trips: [['노토|Noto', 7], ['모디카|Modica', 8]] },"),
 ("  agrigento: { days: [['신전의 계곡|Valley of the Temples', 2, 1, 3]], trips: [['스칼라 데이 투르키|Scala dei Turchi', 4]] },",
  "  agrigento: { days: [['신전의 계곡|Valley of the Temples', 5, 2, 1, 3]], trips: [['스칼라 데이 투르키|Scala dei Turchi', 4]] },"),
 ("  cagliari: [2, 1, 5, 4, 3],", "  cagliari: { days: [['', 2, 1, 5, 6, 4, 3]], trips: [['수 누락시|Su Nuraxi', 7]] },"),
]


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
        c = add_sights(c, cid, items, 'visit-it.ts')
    it = rd('itinerary-it.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-it.ts', it)
    for cid in list(ADD):
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        c = reorder(c, cid, [(n, DAY if (n in trips or read_group(by[n]) == OLD_NEAR) else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
