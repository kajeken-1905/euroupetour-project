#!/usr/bin/env python3
"""France 2nd pass (2026-11-24): +15 sights in Paris, Lyon, Marseille, Nice, Bordeaux, Nancy. Facts from Wikipedia
(en/fr): Bourse de Commerce circular grain exchange of 1763-67, copper dome 1811, rebuilt 1888-89 (now Pinault
Collection); Marmottan Monet 300+ Monet works incl. Impression, Sunrise, largest Berthe Morisot collection; quai Branly
by Jean Nouvel, arts of Africa, Asia, Oceania, Americas, ~3,500 objects shown; Galerie Vivienne covered passage
176 m x 3 m, monument historique 1974; Saint-Denis choir 1144, first fully Gothic structure; Institut Lumière honours
the Lumière brothers, inventors of the cinématographe; Fresque des Lyonnais 800 m2 (1994-95) with 24 historic and
5 contemporary Lyonnais; Vallon des Auffes fishing cove 2.5 km SW of the Vieux-Port; Palais Longchamp houses the
fine-arts and natural-history museums; Cosquer Méditerranée opened 4 June 2022 in the Villa Méditerranée, partial
replica of the Cosquer cave; Villefranche just east of Nice; Villa Ephrussi built 1907-12 by Béatrice de Rothschild;
Porte Cailhau city gate; Villa Majorelle 1901-02 by Henri Sauvage for Louis Majorelle. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
P7 = ('7·16구 · 에펠탑 · 앵발리드', '7th & 16th arr. · Eiffel Tower & Invalides')
ADD = {
 'paris': [
  (47, S('부르스 드 코메르스 (피노 컬렉션)', 'Bourse de Commerce – Pinault Collection', '1760년대 원형 곡물 거래소를 안도 다다오가 고쳐 지은 현대 미술관으로, 거대한 유리 돔 아래 콘크리트 원통 전시실이 들어서 있습니다.', 'The circular 1760s grain exchange, rebuilt as a contemporary art museum for the Pinault Collection, with a concrete drum of galleries under the great glass dome.', 'Bourse de Commerce Pinault Collection', 90, 120, c='tue')),
  (48, S('마르모탕 모네 미술관', 'Musée Marmottan Monet', '모네 작품 300점 넘게 소장한 미술관으로, 인상주의라는 이름이 나온 「인상, 해돋이」가 이곳에 있습니다. 베르트 모리조 컬렉션도 세계 최대입니다.', 'A museum with more than 300 works by Monet, including Impression, Sunrise, the painting that gave Impressionism its name, and the world’s largest Berthe Morisot collection.', 'Musée Marmottan Monet', 90, 120, c='mon')),
  (49, S('케 브랑리 박물관', 'Musée du quai Branly – Jacques Chirac', '에펠탑 옆 장 누벨이 설계한 박물관으로, 아프리카·아시아·오세아니아·아메리카의 토착 예술품을 전시합니다. 외벽을 덮은 식물 벽이 유명합니다.', 'Jean Nouvel’s museum beside the Eiffel Tower for the indigenous arts of Africa, Asia, Oceania and the Americas, known for its living plant wall.', 'Musée du quai Branly', 90, 150, c='mon')),
  (50, S('갤러리 비비엔과 파사주', 'Galerie Vivienne & the covered passages', '19세기 초 유리 지붕을 덮은 쇼핑 아케이드 ‘파사주’ 가운데 가장 아름다운 곳으로, 모자이크 바닥 위로 서점과 찻집이 이어집니다. 근처 파사주 슈아죌·파노라마와 함께 걷기 좋습니다.', 'The loveliest of Paris’s early-19th-century glass-roofed shopping arcades, with mosaic floors, bookshops and tea rooms; walk on to the Passage Choiseul and Passage des Panoramas nearby.', 'Galerie Vivienne', 30, 60, b='no', n=FREE)),
  (51, S('생드니 대성당', 'Basilica of Saint-Denis', '파리 북쪽 생드니의 옛 수도원 성당으로, 1144년 완성된 성가대석은 고딕 건축의 출발점으로 꼽힙니다. 역대 프랑스 왕과 왕비 대부분이 이곳에 묻혔습니다.', 'The former abbey church in Saint-Denis north of Paris; its choir, finished in 1144, is counted as the first Gothic architecture. Most of France’s kings and queens are buried here.', 'Basilique Cathédrale de Saint-Denis', 60, 90, n='성당은 무료이고 왕실 묘역은 유료입니다. 지하철 13호선으로 갑니다.|The church is free; the royal tombs are ticketed. Take metro line 13.')),
 ],
 'lyon': [
  (12, S('뤼미에르 박물관', 'Institut Lumière', '영화를 발명한 뤼미에르 형제의 옛 저택에 있는 영화 박물관으로, 시네마토그래프와 초기 영화를 보여 줍니다. 앞 거리에 최초의 영화가 찍힌 공장 터가 있습니다.', 'The film museum in the Lumière brothers’ family villa, showing the cinématographe and their first films; the factory gate of the very first film is on the street outside.', 'Institut Lumière Lyon', 90, 120)),
  (13, S('리옹 사람들의 벽화', 'Fresque des Lyonnais', '손강 가 건물 벽 800㎡를 덮은 트롱프뢰유 벽화로, 생텍쥐페리·폴 보퀴즈 등 리옹 출신 인물 30명 가까이가 창가와 발코니에 그려져 있습니다.', 'An 800 m² trompe-l’œil mural on a building by the Saône, with nearly 30 famous Lyonnais, from Saint-Exupéry to Paul Bocuse, painted at its windows and balconies.', 'Fresque des Lyonnais', 10, 20, b='no', n=FREE)),
 ],
 'marseille': [
  (8, S('발롱 데 조프', 'Vallon des Auffes', '구항구에서 남서쪽으로 2.5km, 해안 도로 다리 아래 숨은 작은 어촌 포구로, 알록달록한 어선과 해산물 식당이 있습니다.', 'A tiny fishing cove tucked under the coast-road bridge 2.5 km south-west of the Vieux-Port, with painted fishing boats and seafood restaurants.', 'Vallon des Auffes', 30, 45, b='no', n=FREE)),
  (9, S('롱샹 궁전', 'Palais Longchamp', '분수와 열주랑이 웅장한 19세기 기념물로, 양쪽 날개에 미술관과 자연사 박물관이 있고 뒤로 공원이 이어집니다.', 'A grand 19th-century monument of fountains and colonnades, with the fine-arts and natural-history museums in its wings and a park behind.', 'Palais Longchamp', 45, 90)),
  (10, S('코스케 메디테라네', 'Cosquer Méditerranée', '바닷속 입구로만 닿는 선사 시대 동굴 벽화 ‘코스케 동굴’을 재현한 전시관으로, 2022년 문을 열었습니다. 작은 탐사 차를 타고 복원된 동굴 속을 지납니다.', 'Opened in 2022, a replica of the Cosquer Cave, a prehistoric painted cave reachable only from under the sea; small exploration cars carry you through the recreated cave.', 'Cosquer Méditerranée', 75, 90, b='rec')),
 ],
 'nice': [
  (8, S('빌프랑슈쉬르메르', 'Villefranche-sur-Mer', '니스 바로 동쪽 깊은 만에 기댄 항구 마을로, 파스텔 색 집들 사이 골목과 장 콕토가 벽화를 그린 생피에르 예배당이 있습니다.', 'The harbour village on a deep bay just east of Nice, with lanes between pastel houses and the Chapelle Saint-Pierre decorated by Jean Cocteau.', 'Villefranche-sur-Mer', 120, 180, group=('근교 당일치기', 'Day trip'), n='니스에서 기차나 버스로 약 10~15분입니다.|About 10–15 min from Nice by train or bus.')),
  (9, S('에프뤼시 드 로칠드 저택', 'Villa Ephrussi de Rothschild', '1907~12년 베아트리스 드 로칠드가 지은 생장카페라의 분홍 저택으로, 바다를 내려다보는 아홉 개의 테마 정원과 음악 분수가 있습니다.', 'The pink villa at Saint-Jean-Cap-Ferrat built in 1907–12 by Béatrice de Rothschild, with nine themed gardens above the sea and musical fountains.', 'Villa Ephrussi de Rothschild', 90, 120, group=('근교 당일치기', 'Day trip'), n='니스에서 버스로 약 30분입니다.|About 30 min by bus from Nice.')),
 ],
 'bordeaux': [
  (9, S('바생 데 뤼미에르', 'Bassins des Lumières', '제2차 세계대전 때 지은 거대한 잠수함 기지 안 물웅덩이 위로 명화 영상을 비추는 디지털 아트 전시관입니다.', 'A digital art centre in a giant Second World War submarine base, projecting great paintings over its water-filled basins.', 'Bassins des Lumières', 60, 90, b='rec')),
  (10, S('카이오 문과 그로스 클로슈', 'Porte Cailhau & Grosse Cloche', '구시가에 남은 중세 성문 두 곳으로, 강변의 뾰족탑 카이오 문과 커다란 종을 매단 종탑 문 그로스 클로슈를 이어서 걷습니다.', 'Two surviving medieval gates of the old town: the spired Porte Cailhau on the riverfront and the Grosse Cloche belfry with its great bell.', 'Porte Cailhau', 20, 30, b='no')),
 ],
 'nancy': [
  (6, S('마조렐 저택', 'Villa Majorelle', '가구 디자이너 루이 마조렐을 위해 1901~02년 지은 집으로, 프랑스 아르누보 건축의 첫 본보기 가운데 하나입니다. 스테인드글라스와 가구까지 당시 모습으로 복원됐습니다.', 'The house built in 1901–02 for the furniture designer Louis Majorelle, one of the first Art Nouveau buildings in France, restored down to its stained glass and furniture.', 'Villa Majorelle Nancy', 45, 60, b='rec')),
 ],
}
IT = [
 ("      ['에펠탑과 앵발리드|Eiffel Tower & Invalides', 10, 1, 11, 12, 13],\n", "      ['에펠탑과 앵발리드|Eiffel Tower & Invalides', 48, 10, 1, 11, 49, 12, 13],\n"),
 ("      ['루브르와 시테 섬|Louvre & Île de la Cité', 18, 19, 2, 27, 25, 3],\n", "      ['루브르와 시테 섬|Louvre & Île de la Cité', 50, 47, 18, 19, 2, 27, 25, 3],\n"),
 ("    trips: [['베르사유|Versailles', 7], ['샹티이 성|Chantilly', 40]],\n  },\n  lyon:", "    trips: [['베르사유|Versailles', 7], ['샹티이 성|Chantilly', 40], ['생드니|Saint-Denis', 51]],\n  },\n  lyon:"),
 ("      ['푸르비에르와 비외 리옹|Fourvière & Vieux Lyon', 2, 6, 1, 3, 8],\n", "      ['푸르비에르와 비외 리옹|Fourvière & Vieux Lyon', 2, 6, 1, 13, 3, 8],\n"),
 ("      ['크루아루스와 강변|Croix-Rousse & the rivers', 7, 9, 5, 4, 10],\n", "      ['크루아루스와 강변|Croix-Rousse & the rivers', 7, 9, 5, 4, 10],\n      ['뤼미에르 박물관|Institut Lumière', 12],\n"),
 ("  marseille: { days: [['', 1, 5, 6, 3, 2]],", "  marseille: { days: [['', 1, 10, 5, 6, 3, 2, 8], ['', 9]],"),
 ("  nice: [5, 1, 4, 2, 3, 7, 6],\n", "  nice: { days: [['', 5, 1, 4, 2, 3, 7, 6]], trips: [['빌프랑슈쉬르메르|Villefranche-sur-Mer', 8], ['에프뤼시 저택|Villa Ephrussi', 9]] },\n"),
 ("  bordeaux: { days: [['', 6, 2, 3, 1, 7, 5, 4]],", "  bordeaux: { days: [['', 6, 10, 2, 3, 1, 7, 5, 4, 9]],"),
 ("  nancy: [1, 2, 5, 3, 4],\n", "  nancy: [1, 2, 5, 3, 4, 6],\n"),
]


def groups_of(c, cid):
    out = []
    for m in re.finditer(rf'id: "{cid}-h(\d+)"(.*?)\n      \}}', c, re.S):
        g = re.search(r'group: \{ ko: "([^"]*)", en: "([^"]*)" \}', m.group(2))
        out.append((int(m.group(1)), g.groups() if g else None))
    return out


def ins(o, after, new):
    out = []
    for n, gr in o:
        out.append((n, gr))
        if n == after:
            out += [(x, gx if gx != 'same' else gr) for x, gx in new]
    return out


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-fr.ts')
    o = [x for x in groups_of(c, 'paris') if x[0] < 47]
    o = ins(o, 10, [(48, 'same')]); o = ins(o, 11, [(49, 'same')]); o = ins(o, 20, [(50, 'same'), (47, 'same')]); o = ins(o, 45, [(51, 'same')])
    c = reorder(c, 'paris', o)
    o = [x for x in groups_of(c, 'lyon') if x[0] < 12]
    o = ins(o, 8, [(13, 'same')]); o = ins(o, 5, [(12, 'same')])
    c = reorder(c, 'lyon', o)
    c = reorder(c, 'marseille', [(n, None) for n in (1, 10, 5, 6, 3, 2, 8, 9)] + [(4, ('근교 당일치기', 'Day trip')), (7, ('근교 당일치기', 'Day trip'))])
    c = reorder(c, 'bordeaux', [(n, None) for n in (6, 10, 2, 3, 1, 7, 5, 4, 9)] + [(8, ('근교 당일치기', 'Day trip'))])
    c = reorder(c, 'nancy', [(n, None) for n in (1, 2, 5, 3, 4, 6)])
    wr('cities.ts', c)
    it = rd('itinerary-fr.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-fr.ts', it)


if __name__ == '__main__':
    main()
