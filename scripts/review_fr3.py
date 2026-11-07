#!/usr/bin/env python3
"""France step 1, south-west, Provence/Riviera big towns and Corsica, 2026-11-08 (the 2026-10 South-France towns were
written in full then, so only their pins are added). Fixes: toulouse-h4 '가르론' → '가론', montpellier-h2 '에퀴즈' →
'에퀴송', bordeaux-h1 now named for Place de la Bourse. Thin descriptions rewritten. New sights incl. Bordeaux
cathedral & Saint-Émilion (wine), Toulouse Aeroscopia & Canal du Midi, Châteauneuf-du-Pape (wine), Château d'If,
La Major, Matisse & Chagall museums, Lérins islands. Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
OLD_NEAR = ('근교', 'Nearby')
REWRITE = {
 'bordeaux-h1': ('부르스 광장과 물거울', 'Place de la Bourse & Miroir d’eau', '18세기 왕실 광장 앞에 얇게 물을 채운 거대한 수반으로, 광장 건물이 수면에 비치고 몇 분마다 안개가 뿜어져 나옵니다.', 'The vast shallow pool in front of the 18th-century royal square, reflecting its façades and releasing mist every few minutes.', None),
 'bordeaux-h2': (None, None, '코린트식 기둥 12개가 늘어선 18세기 신고전주의 극장으로, 오페라와 발레 공연을 합니다.', 'The 18th-century neoclassical theatre fronted by twelve Corinthian columns, home to opera and ballet.', None),
 'bordeaux-h3': (None, None, '유럽에서 손꼽히게 긴 1.2km 보행자 쇼핑 거리입니다.', 'One of Europe’s longest pedestrian shopping streets, 1.2 km long.', None),
 'bordeaux-h4': (None, None, '와인 잔 모양 건물의 와인 문화 박물관으로, 꼭대기 전망 바에서 세계 와인 한 잔이 포함됩니다.', 'The wine-glass-shaped museum of wine culture—entry includes a glass at the rooftop bar.', None),
 'bordeaux-h5': (None, None, '와인 상인들의 옛 창고 지구로, 골동품 가게와 카페, 일요일 강변 시장이 있습니다.', 'The old wine merchants’ warehouse quarter, with antique shops, cafés and a Sunday riverside market.', None),
 'arcachon-h2': (None, None, '굴 양식장과 새들의 섬이 있는 잔잔한 만으로, 배를 타고 둘러봅니다.', 'The calm bay of oyster beds and the Île aux Oiseaux, seen by boat.', None),
 'arcachon-h4': (None, None, '만 건너편 반도 끝 마을로, 굴 오두막에서 굴과 화이트 와인을 맛봅니다.', 'The village at the tip of the peninsula across the bay—oysters and white wine at the oyster shacks.', None),
 'biarritz-h1': (None, None, '나폴레옹 3세가 지은 오텔 뒤 팔레 앞의 넓은 해변으로, 서핑을 많이 합니다.', 'The broad beach in front of the Hôtel du Palais built by Napoleon III, popular with surfers.', None),
 'biarritz-h2': (None, None, '에펠 사무소가 놓은 철교로 이어진 바다 위 바위로, 성모상이 서 있습니다.', 'The sea rock crowned by a statue of the Virgin, reached by a footbridge from Eiffel’s firm.', None),
 'biarritz-h3': (None, None, '248계단을 올라 바스크 해안과 해변을 내려다보는 등대입니다.', 'Climb 248 steps for views over the Basque coast and beaches.', None),
 'biarritz-h4': (None, None, '빨간·초록 목조 바스크 집이 늘어선 이웃 항구 마을로, 루이 14세가 결혼식을 올렸습니다.', 'The neighbouring port of red-and-green Basque houses, where Louis XIV married.', None),
 'toulouse-h1': (None, None, '분홍 벽돌 시청 카피톨이 서 있는 중심 광장으로, 바닥에 옥시타니아 십자가가 새겨져 있습니다.', 'The main square before the pink-brick Capitole town hall, with the Occitan cross set in the paving.', None),
 'toulouse-h2': (None, None, '산티아고 순례길의 로마네스크 대성당으로, 팔각 종탑이 유명합니다.', 'The great Romanesque church on the Santiago pilgrim route, with its octagonal bell tower.', None),
 'toulouse-h3': (None, None, '야자수처럼 퍼지는 기둥이 천장을 받친 고딕 수도원 성당과 회랑입니다.', 'A Gothic friary church whose “palm-tree” column fans out across the vault, with a cloister.', None),
 'toulouse-h4': ('가론 강변', 'Garonne quays', '분홍 벽돌 다리와 강둑 잔디밭에서 해 질 녘을 봅니다.', 'Watch the sunset from the grassy riverbanks by the pink-brick bridges.', None),
 'toulouse-h5': (None, None, '아리안 로켓 실물과 미르 우주정거장 모형, 천체 투영관이 있는 우주 테마 공원입니다.', 'A space park with a full-size Ariane rocket, a Mir space-station model and a planetarium.', None),
 'montpellier-h1': (None, None, '삼미신 분수와 오페라 극장이 있는 넓은 보행자 광장입니다.', 'The broad pedestrian square of the Three Graces fountain and the opera house.', None),
 'montpellier-h2': ('에퀴송 지구', 'Écusson', '중세 성벽 자리 안쪽의 구시가로, 좁은 골목과 저택 안뜰이 이어집니다.', 'The old town within the line of the medieval walls, a maze of lanes and mansion courtyards.', None),
 'montpellier-h3': (None, None, '두 원통 기둥이 받친 현관이 독특한 요새 같은 고딕 대성당입니다.', 'A fortress-like Gothic cathedral with a striking porch on two giant cylindrical pillars.', None),
 'montpellier-h4': (None, None, '쿠르베와 들라크루아 등 유럽 회화를 모은 프랑스 남부 최대급 미술관입니다.', 'One of southern France’s major art museums, with Courbet, Delacroix and more.', None),
 'montpellier-h5': (None, None, '리카르도 보필이 설계한 신고전주의 대형 주거 지구로, 레 강까지 축선이 이어집니다.', 'Ricardo Bofill’s monumental neoclassical housing district, running in an axis to the River Lez.', None),
 'avignon-h1': (None, None, '14세기 교황들이 머문 세계 최대 고딕 궁전으로, 태블릿 안내로 옛 모습을 봅니다.', 'The world’s largest Gothic palace, home to the 14th-century popes—tablets show how it once looked.', None),
 'avignon-h2': (None, None, '노래 ‘아비뇽 다리 위에서’의 다리로, 강 중간에서 끊긴 아치 네 개가 남아 있습니다.', 'The bridge of the song Sur le pont d’Avignon—four arches survive, ending mid-river.', None),
 'avignon-h3': (None, None, '교황궁 옆 언덕 공원으로, 론강과 아비뇽 다리가 내려다보입니다.', 'The hilltop park beside the palace, overlooking the Rhône and the bridge.', None),
 'avignon-h4': (None, None, '시청과 오페라, 카페 테라스가 둘러싼 중심 광장입니다.', 'The central square of the town hall, opera and café terraces.', None),
 'avignon-h5': (None, None, '4km 넘게 온전히 남은 14세기 성벽으로, 일부 구간을 걸을 수 있습니다.', 'More than 4 km of intact 14th-century walls, with sections you can walk.', None),
 'marseille-h1': (None, None, '2,600년 된 항구로, 아침 생선 시장과 거울 지붕 파빌리온이 있습니다.', 'The 2,600-year-old harbour, with its morning fish market and mirrored pavilion.', None),
 'marseille-h2': (None, None, '언덕 꼭대기의 금빛 성모상 성당으로, 마르세유 전체와 바다가 내려다보입니다.', 'The hilltop basilica crowned by a golden Virgin, overlooking all of Marseille and the sea.', None),
 'marseille-h3': (None, None, '레이스 같은 콘크리트 외벽의 지중해 문명 박물관으로, 다리로 생장 요새와 이어집니다.', 'The museum of Mediterranean civilisations in a lace-like concrete shell, linked by footbridge to Fort Saint-Jean.', None),
 'marseille-h4': (None, None, '석회암 절벽 사이 터키석 바다의 좁은 만들로, 걷거나 배로 둘러봅니다.', 'Narrow inlets of turquoise water between limestone cliffs, explored on foot or by boat.', None),
 'marseille-h5': (None, None, '마르세유에서 가장 오래된 언덕 동네로, 벽화 골목과 비에유 샤리테가 있습니다.', 'Marseille’s oldest hill quarter, with mural-lined lanes and the Vieille Charité.', None),
 'nice-h1': (None, None, '천사의 만을 따라 7km 이어지는 해변 산책로로, 파란 의자에 앉아 바다를 봅니다.', 'The 7 km seafront promenade along the Baie des Anges—sit on the blue chairs and watch the sea.', None),
 'nice-h2': (None, None, '색 바랜 노란·붉은 집들 사이 좁은 골목의 구시가로, 소카와 바로크 성당이 있습니다.', 'The old town’s narrow lanes between ochre and red houses, with socca and Baroque churches.', None),
 'nice-h3': (None, None, '구시가 위 언덕 공원으로, 폭포와 함께 천사의 만과 항구가 내려다보입니다.', 'The hill park above the old town, with a waterfall and views over the bay and port.', None),
 'nice-h4': (None, None, '아침엔 꽃과 채소 시장, 월요일엔 골동품 시장이 서는 구시가 광장 거리입니다.', 'The old-town square of the morning flower and produce market, and a Monday antiques market.', None),
 'nice-h5': (None, None, '벨 에포크 저택에 15~20세기 회화를 모은 시립 미술관입니다.', 'The municipal art museum in a Belle Époque villa, from the 15th to the 20th century.', None),
 'ajaccio-h3': (None, None, '나폴레옹의 삼촌 페슈 추기경이 모은 이탈리아 회화를 전시하는 미술관입니다.', 'Italian paintings collected by Napoleon’s uncle, Cardinal Fesch.', None),
 'ajaccio-h4': (None, None, '제노바 시대 성채 옆 옛 항구로, 어선과 카페가 모여 있습니다.', 'The old harbour beside the Genoese citadel, with fishing boats and cafés.', None),
 'bonifacio-h1': (None, None, '70m 석회암 절벽 끝에 집들이 매달리듯 선 성채 안 구시가입니다.', 'The walled old town whose houses cling to the edge of 70 m limestone cliffs.', None),
 'bonifacio-h2': (None, None, '전설에 따르면 하룻밤 만에 절벽을 깎아 만든 187개의 계단으로, 바다까지 내려갑니다.', 'Legend says these 187 steps were cut into the cliff in a single night; they lead down to the sea.', None),
 'bonifacio-h3': (None, None, '피오르처럼 좁은 만 안쪽의 항구로, 절벽과 동굴을 도는 배가 출발합니다.', 'The harbour at the end of a fjord-like inlet, where boats leave to tour the cliffs and caves.', None),
 'bonifacio-h4': (None, None, '보트로 가는 국립 자연 보호 구역의 화강암 섬들로, 맑은 바다에서 수영합니다.', 'Granite islands in a nature reserve reached by boat, with crystal-clear water for swimming.', None),
 'calvi-h1': (None, None, '바다 위 바위 곶을 두른 제노바 시대 성채로, 성벽 위를 걷습니다.', 'The Genoese citadel ringing a rocky headland—walk its ramparts.', None),
 'calvi-h2': (None, None, '소나무 숲을 따라 4km 이어지는 모래 해변입니다.', 'A 4 km sandy beach backed by pine woods.', None),
 'calvi-h3': (None, None, '언덕 위 예배당으로, 칼비만과 성채가 한눈에 보입니다.', 'The hilltop chapel with a sweeping view of the bay and citadel.', None),
 'calvi-h4': (None, None, '등대가 선 곶과 작은 만들로, 해안길을 걸어 갑니다.', 'The lighthouse headland and its little coves, reached on a coastal path.', None),
}
ADD = {
 'bordeaux': [
  (6, S('생탕드레 대성당과 페이베를랑 탑', 'Cathedral of Saint-André & Pey-Berland Tower', '고딕 대성당과 따로 선 종탑으로, 탑 꼭대기에서 시내 지붕을 내려다봅니다.', 'The Gothic cathedral and its free-standing bell tower—climb it for views over the rooftops.', 'Tour Pey-Berland', 45, 60)),
  (7, S('아키텐 박물관', 'Musée d’Aquitaine', '선사 시대부터 노예 무역 항구 시절까지 보르도와 아키텐의 역사를 보여 줍니다.', 'The story of Bordeaux and Aquitaine from prehistory to the slave-trade port years.', 'Musée d\'Aquitaine', 60, 90, c='mon')),
  (8, S('생테밀리옹', 'Saint-Émilion', '포도밭에 둘러싸인 중세 와인 마을로, 바위를 파낸 지하 교회와 와이너리를 둘러봅니다. 유네스코 세계유산입니다.', 'The medieval wine village ringed by vineyards, with a monolithic underground church and châteaux to visit; a UNESCO World Heritage Site.', 'Saint-Émilion', 300, 420, group=DAY,
        n='보르도에서 기차로 약 35분입니다.|About 35 min by train from Bordeaux.')),
 ],
 'biarritz': [
  (5, S('바다 박물관', 'Musée de la Mer', '바스크 바다 생물과 물개·상어 수조가 있는 아르데코 건물의 수족관입니다.', 'An Art Deco aquarium of Bay of Biscay sea life, with seal and shark pools.', 'Aquarium de Biarritz', 90, 120)),
 ],
 'toulouse': [
  (6, S('생피에르 다리와 미디 운하', 'Canal du Midi', '지중해와 대서양을 잇는 17세기 운하로, 플라타너스 길을 걷거나 자전거로 달립니다. 유네스코 세계유산입니다.', 'The 17th-century canal linking the Mediterranean and Atlantic—walk or cycle its plane-tree towpath; a UNESCO World Heritage Site.', 'Port Saint-Sauveur Toulouse', 60, 90)),
  (7, S('에어로스코피아', 'Aeroscopia', '콩코드와 A380 등 실제 항공기를 전시하는 항공 박물관으로, 에어버스 공장 견학도 예약할 수 있습니다.', 'An aviation museum of real aircraft including Concorde and the A380; Airbus factory tours can be booked here.', 'Aeroscopia', 120, 180, group=DAY, b='rec',
        n='시내에서 트램과 버스로 약 45분입니다.|About 45 min from the centre by tram and bus.')),
 ],
 'montpellier': [
  (6, S('페이루 산책로와 수도교', 'Promenade du Peyrou & aqueduct', '루이 14세 기마상이 선 높은 테라스 정원과 18세기 생클레망 수도교입니다.', 'The raised terrace garden with Louis XIV on horseback and the 18th-century Saint-Clément aqueduct.', 'Promenade du Peyrou', 30, 45)),
 ],
 'avignon': [
  (6, S('샤토뇌프뒤파프', 'Châteauneuf-du-Pape', '교황의 여름 성 폐허 아래 포도밭 마을로, 남부 론 와인을 시음합니다.', 'The vineyard village below the ruined papal summer castle—taste southern Rhône wines.', 'Châteauneuf-du-Pape', 180, 240, group=DAY,
        n='아비뇽에서 차로 약 25분이고 버스는 드뭅니다.|About 25 min by car from Avignon; buses are infrequent.')),
 ],
 'marseille': [
  (6, S('마르세유 대성당 (라 마조르)', 'Marseille Cathedral (La Major)', '줄무늬 돌로 지은 19세기 비잔틴 양식의 거대한 대성당입니다.', 'The vast 19th-century Byzantine-style cathedral of striped stone.', 'Cathédrale La Major Marseille', 20, 30)),
  (7, S('이프 성', 'Château d’If', '‘몬테크리스토 백작’의 무대가 된 섬 위 요새 감옥으로, 구항구에서 배로 갑니다.', 'The island fortress-prison of The Count of Monte Cristo, reached by boat from the Old Port.', 'Château d\'If', 120, 180, group=DAY,
        n='구항구에서 배로 약 20분이고 바람이 세면 운항하지 않습니다.|About 20 min by boat from the Old Port; no sailings in strong wind.')),
 ],
 'nice': [
  (6, S('마티스 미술관', 'Musée Matisse', '시미에 언덕의 붉은 제노바 빌라에 마티스의 그림과 종이 오리기 작품을 전시합니다.', 'Matisse’s paintings and cut-outs in a red Genoese villa on the Cimiez hill.', 'Musée Matisse Nice', 60, 90, c='tue')),
  (7, S('샤갈 미술관', 'Musée Marc Chagall', '샤갈이 성서 이야기를 그린 대형 연작과 스테인드글라스를 위해 지은 미술관입니다.', 'The museum built for Chagall’s great Biblical Message series and stained glass.', 'Musée national Marc Chagall', 60, 90, c='tue')),
 ],
 'cannes': [
  (4, S('레랭 제도', 'Lérins Islands', '칸 앞바다의 두 섬으로, 생트마르그리트섬엔 ‘철가면’이 갇혔던 요새, 생토노라섬엔 수도원 와이너리가 있습니다.', 'Two islands off Cannes—Sainte-Marguerite with the Man in the Iron Mask’s fort, and Saint-Honorat with its monks’ winery.', 'Île Sainte-Marguerite', 180, 300, group=DAY,
        n='칸 항구에서 배로 약 15~30분입니다.|About 15–30 min by boat from Cannes harbour.')),
 ],
}
IT = [
 ("  bordeaux: [2, 3, 1, 5, 4],", "  bordeaux: { days: [['', 6, 2, 3, 1, 7, 5, 4]], trips: [['생테밀리옹|Saint-Émilion', 8]] },"),
 ("  biarritz: { days: [['', 3, 1, 2]], trips: [['생장드뤼즈|Saint-Jean-de-Luz', 4]] },", "  biarritz: { days: [['', 3, 1, 2, 5]], trips: [['생장드뤼즈|Saint-Jean-de-Luz', 4]] },"),
 ("  toulouse: { days: [['', 1, 2, 3, 4]], trips: [['시테 드 레스파스|Cité de l’espace', 5]] },",
  "  toulouse: { days: [['', 1, 2, 3, 4, 6]], trips: [['시테 드 레스파스|Cité de l’espace', 5], ['에어로스코피아|Aeroscopia', 7]] },"),
 ("  montpellier: [5, 1, 4, 2, 3],", "  montpellier: [5, 1, 4, 2, 3, 6],"),
 ("  avignon: [4, 1, 3, 2, 5],", "  avignon: { days: [['', 4, 1, 3, 2, 5]], trips: [['샤토뇌프뒤파프|Châteauneuf-du-Pape', 6]] },"),
 ("  marseille: { days: [['', 1, 5, 3, 2]], trips: [['카랑크|Calanques', 4]] },", "  marseille: { days: [['', 1, 5, 6, 3, 2]], trips: [['카랑크|Calanques', 4], ['이프 성|Château d’If', 7]] },"),
 ("  nice: [5, 1, 4, 2, 3],", "  nice: [5, 1, 4, 2, 3, 7, 6],"),
 ("  cannes: [3, 1, 2],", "  cannes: { days: [['', 3, 1, 2]], trips: [['레랭 제도|Lérins Islands', 4]] },"),
]


def main():
    c = rd('cities.ts')
    for hid, (ko, en, dko, den, q) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko:
            blk = re.sub(r'name: \{[^\n]*\}', f'name: {{ ko: "{ko}", en: "{en}" }}', blk)
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        if q:
            blk = re.sub(r'query=[^"]*"', 'query=' + urllib.parse.quote(q) + '"', blk)
        c = c[:i] + blk + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-fr.ts')
    it = rd('itinerary-fr.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-fr.ts', it)
    for cid in ADD:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        c = reorder(c, cid, [(n, DAY if (n in trips or read_group(by[n]) == OLD_NEAR) else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
