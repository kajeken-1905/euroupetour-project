#!/usr/bin/env python3
"""France thin cities (4 sights each) +1~2 (2026-11-22, six-country review). Facts from French/English Wikipedia intros:
Sainte-Radegonde, Giverny: Romanesque origin, Monet family grave in the churchyard. Vernon: Seine town, Vernon–Giverny
station, Château des Tourelles 13th c. Vaux-le-Vicomte: 1658–1661 for Fouquet, Le Vau/Le Nôtre/Le Brun first together,
near Melun. Moret-sur-Loing: Loing–Seine confluence, inspired Monet, Renoir, Sisley; Moret–Veneux station. Saint-Pierre,
Chartres: former abbey church of Saint-Père-en-Vallée (remains to 7th c.), MH 1840. Musée des Beaux-Arts de Chartres:
former bishop's palace next to the cathedral, free except temporary shows. Saint-Pierre, Mont-Saint-Michel: 14th–17th c.,
parish church and pilgrimage sanctuary of St Michael. Bay walk: tides >10 m, Tombelaine closed since 2024 (not used as a
goal). Musée Crozatier 1868, Velay art & archaeology, renovated 2010–2018. Château de Polignac: fortress near Le Puy.
Notre-Dame d'Arcachon: 16th-c. chapel moved in 18th c. (Chapelle des Marins), 19th-c. church, basilica 1953. Teich bird
reserve 110 ha on the bay. Musée Hyacinthe-Rigaud: Rigaud, Catalan Gothic, Maillol, Picasso. Saint-Michel de Cuxa:
Benedictine abbey at the foot of the Canigou, part pre-Romanesque church, 12th-c. cloister. Musée d'Art moderne de
Collioure: founded 1934 by Jean Peské, municipal since 1985. Port-Vendres: fishing port, seafood restaurants.
Notre-Dame-des-Sablons: Gothic. Tour Carbonnière: late-13th-c. watchtower guarding Aigues-Mortes (~3 km N by coords).
Val d'Enfer: valley eroded in white limestone. Yves Brayer 1907–1990 figurative painter. Port-Miou: easternmost calanque,
only one in Cassis commune, 1.4 km. Eden Théâtre, La Ciotat: opened 1889, Lumière screenings 1895, oldest cinema still
operating. Marché Forville: covered market, ~50 traders. Musée des Explorations du monde: in the medieval castle of the
Lérins monks at Le Suquet. Ajaccio Cathedral: finished 1593, Napoleon baptised 21 June 1771. Place Foch: Monument to the
First Consul (1850). Cimetière marin, Bonifacio: on the cliff by Saint-François, 500,000 visitors/yr. Phare de Pertusato:
cape 4 km SE of Bonifacio. Calvi pro-cathedral Saint-Jean-Baptiste, national monument. Sant'Antonino: Plus Beaux
Villages; Pigna, Balagne. Tavignano: river from Corte. Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights
from review_sk import S

FREE = '무료입니다.|Free.'
CAR = '대중교통이 불편해 차나 투어가 편합니다.|Public transport is awkward; a car or tour is easier.'
ADD = {
 'giverny': [
  (5, S('생트라드공드 성당과 모네의 묘', 'Sainte-Radegonde Church & Monet’s grave', '로마네스크 시대에 기원을 둔 마을 성당으로, 둘러싼 묘지에 모네와 가족이 묻혀 있습니다. 모네의 집에서 걸어서 갑니다.', 'The village church of Romanesque origin; Monet and his family are buried in its churchyard, a short walk from his house.', 'Église Sainte-Radegonde Giverny', 15, 20, b='no', n=FREE)),
  (6, S('베르농', 'Vernon', '센강 건너편 이웃 도시로, 지베르니로 가는 기차가 서는 베르농-지베르니역이 있습니다. 강가에 13세기 투렐 성이 남아 있습니다.', 'The neighbouring town across the Seine, with Vernon–Giverny station for trains to Giverny and the 13th-century Château des Tourelles on the riverbank.', 'Château des Tourelles Vernon', 45, 60, b='no')),
 ],
 'fontainebleau': [
  (5, S('보르비콩트 성', 'Vaux-le-Vicomte', '1658~1661년 재무장관 푸케를 위해 지은 바로크 성으로, 건축가 르 보, 정원사 르 노트르, 화가 르 브룅이 처음 함께 일한 곳입니다. 믈룅 근처에 있습니다.', 'The Baroque château built in 1658–1661 for finance minister Fouquet, where Le Vau, Le Nôtre and Le Brun first worked together; near Melun.', 'Château de Vaux-le-Vicomte', 150, 210, n=CAR)),
  (6, S('모레쉬르루앙', 'Moret-sur-Loing', '루앙강과 센강이 만나는 곳의 작은 마을로, 모네·르누아르·시슬레가 그림을 그렸습니다. 퐁텐블로에서 기차로 갑니다.', 'A small town where the Loing meets the Seine, painted by Monet, Renoir and Sisley; reached by train from Fontainebleau.', 'Moret-sur-Loing', 90, 150, b='no')),
 ],
 'chartres': [
  (5, S('생피에르 성당', 'Saint-Pierre Church', '옛 생페르앙발레 수도원의 성당으로, 수도원의 흔적은 7세기까지 거슬러 올라갑니다. 1840년 역사 기념물이 됐습니다.', 'The church of the former abbey of Saint-Père-en-Vallée, whose remains go back to the 7th century; a historic monument since 1840.', 'Église Saint-Pierre Chartres', 20, 30, b='no', n=FREE)),
  (6, S('샤르트르 미술관', 'Musée des Beaux-Arts de Chartres', '대성당 바로 옆 옛 주교관에 있는 시립 미술관으로, 회화·조각·가구 등을 전시합니다.', 'The city art museum in the former bishop’s palace right beside the cathedral, with paintings, sculpture and furniture.', 'Musée des Beaux-Arts de Chartres', 45, 60, b='no', n='기획전 외에는 무료입니다.|Free except for temporary exhibitions.')),
 ],
 'mont-saint-michel': [
  (5, S('생피에르 성당', 'Saint-Pierre Church', '그랑드 뤼 중간의 작은 성당으로, 마을의 본당이자 성 미카엘 순례 성소입니다. 지금 모습은 14~17세기에 갖췄습니다.', 'The small church halfway up the Grande Rue, the village parish church and a pilgrimage sanctuary of St Michael; its present form dates from the 14th–17th centuries.', 'Église Saint-Pierre Mont-Saint-Michel', 10, 15, b='no', n=FREE)),
  (6, S('갯벌 건너기 가이드 투어', 'Guided bay walk', '썰물 때 공인 가이드와 함께 맨발로 갯벌을 건너는 투어입니다. 조수 간만의 차가 10m가 넘어 혼자 건너면 위험합니다.', 'A barefoot walk across the sands at low tide with a licensed guide; the tides here rise more than 10 m, so never cross alone.', 'Traversée de la baie du Mont-Saint-Michel', 180, 240, b='req', n='출발지와 시간은 물때에 따라 달라집니다.|Start points and times depend on the tides.')),
 ],
 'le-puy-en-velay': [
  (5, S('크로자티에 박물관', 'Musée Crozatier', '1868년 문을 연 박물관으로, 블레·오트루아르 지역의 미술품과 고고학 유물을 전시합니다. 2010~2018년 크게 고쳐 다시 열었습니다.', 'A museum opened in 1868 with art and archaeology from the Velay and Haute-Loire, reopened in 2018 after a major renovation.', 'Musée Crozatier Le Puy-en-Velay', 60, 90)),
  (6, S('폴리냐크 성', 'Château de Polignac', '르퓌 근처 폴리냐크 마을의 언덕 위에 선 중세 성채로, 르퓌 분지가 내려다보입니다.', 'A medieval fortress on a hill in the village of Polignac near Le Puy, looking over the Le Puy basin.', 'Château de Polignac Haute-Loire', 60, 90)),
 ],
 'arcachon': [
  (5, S('노트르담 다르카숑 바실리카', 'Notre-Dame d’Arcachon', '16세기 예배당을 18세기에 옮겨 지은 ‘선원들의 예배당’에 19세기 성당을 이어 붙인 바실리카로, 지금은 유리벽으로 이어져 있습니다.', 'A basilica built in the 19th century onto the Sailors’ Chapel, a 16th-century chapel moved here in the 18th; the two are now joined by a glass wall.', 'Basilique Notre-Dame d\'Arcachon', 15, 20, b='no', n=FREE)),
  (6, S('르테슈 조류 보호구', 'Le Teich Bird Reserve', '아르카숑만 안쪽의 110ha 보호구로, 산책로와 관찰 오두막에서 철새를 봅니다.', 'A 110-hectare reserve at the head of Arcachon Bay, with trails and hides for watching migrating birds.', 'Réserve ornithologique du Teich', 120, 180)),
 ],
 'perpignan': [
  (5, S('이아생트 리고 미술관', 'Musée Hyacinthe-Rigaud', '페르피냥 출신 궁정 화가 리고의 초상화와 카탈루냐 고딕 미술, 마욜·피카소의 작품을 전시합니다.', 'Portraits by court painter Hyacinthe Rigaud, Catalan Gothic art and works by Maillol and Picasso.', 'Musée Hyacinthe Rigaud Perpignan', 60, 90)),
  (6, S('생미셸 드 퀵사 수도원', 'Saint-Michel de Cuxa Abbey', '카니구산 기슭의 베네딕토 수도원으로, 성당 일부는 로마네스크 이전 양식이고 12세기 회랑이 남아 있습니다. 프라드 근처에 있습니다.', 'A Benedictine abbey at the foot of the Canigou near Prades, with a partly pre-Romanesque church and a 12th-century cloister.', 'Abbaye Saint-Michel de Cuxa', 60, 90)),
 ],
 'collioure': [
  (5, S('콜리우르 현대 미술관', 'Musée d’Art moderne de Collioure', '1934년 화가 장 페스케가 세운 미술관으로, 1985년부터 시가 운영합니다. 콜리우르를 그린 화가들의 작품을 봅니다.', 'Founded in 1934 by the painter Jean Peské and run by the town since 1985, with works by artists who painted Collioure.', 'Musée d\'Art moderne de Collioure', 45, 60)),
  (6, S('포르방드르', 'Port-Vendres', '바로 옆 어항 마을로, 생선·해산물 식당이 많습니다.', 'The fishing port next door, known for its fish and seafood restaurants.', 'Port-Vendres', 60, 120, b='no')),
 ],
 'aigues-mortes': [
  (5, S('노트르담데사블롱 성당', 'Notre-Dame-des-Sablons', '성벽 안 마을 한가운데의 고딕 성당입니다.', 'The Gothic church in the middle of the walled town.', 'Église Notre-Dame-des-Sablons Aigues-Mortes', 15, 20, b='no', n=FREE)),
  (6, S('카르보니에르 탑', 'Tour Carbonnière', '13세기 말 에그모르트를 지키려고 세운 망루로, 마을 북쪽 약 3km 습지 한가운데에 서 있습니다.', 'A late-13th-century watchtower built to guard Aigues-Mortes, standing in the marshes about 3 km north of the town.', 'Tour Carbonnière', 30, 45, b='no', n=CAR)),
 ],
 'les-baux-de-provence': [
  (5, S('발 당페르', 'Val d’Enfer', '물에 깎인 흰 석회암 바위가 기이한 모양으로 늘어선 마을 아래 골짜기입니다.', 'The valley below the village, cut by water into strange shapes of white limestone.', 'Val d\'Enfer Les Baux-de-Provence', 30, 45, b='no', n=FREE)),
  (6, S('이브 브레예 미술관', 'Musée Yves Brayer', '마을 골목의 미술관으로, 프로방스 풍경을 즐겨 그린 구상 화가 이브 브레예(1907~1990)의 작품을 전시합니다.', 'A museum in the village lanes showing the work of the figurative painter Yves Brayer (1907–1990).', 'Musée Yves Brayer Les Baux', 30, 45)),
 ],
 'cassis': [
  (5, S('포르미우 칼랑크', 'Calanque de Port-Miou', '시내 끝에서 걸어서 닿는 가장 동쪽의 칼랑크로, 1.4km 길이의 좁은 만에 작은 배들이 정박해 있습니다.', 'The easternmost calanque, walkable from the edge of town: a 1.4 km inlet lined with small boats.', 'Calanque de Port-Miou', 45, 60, b='no', n=FREE)),
  (6, S('라시오타 에덴 극장', 'Eden Théâtre, La Ciotat', '1889년 문을 연 이웃 도시 라시오타의 극장으로, 1895년 뤼미에르 형제의 영화를 상영했고 지금도 영화를 트는 세계에서 가장 오래된 영화관입니다.', 'The theatre in neighbouring La Ciotat, opened in 1889, which showed the Lumière brothers’ films in 1895 and is the oldest cinema in the world still operating.', 'Eden Théâtre La Ciotat', 45, 60)),
 ],
 'cannes': [
  (5, S('포르빌 시장', 'Marché Forville', '르 쉬케 아래의 지붕 덮인 시장으로, 50곳가량의 상인이 채소·생선·치즈를 팝니다.', 'The covered market below Le Suquet, with about fifty traders selling produce, fish and cheese.', 'Marché Forville Cannes', 30, 45, b='no')),
  (6, S('세계 탐험 박물관', 'Musée des Explorations du Monde', '르 쉬케 꼭대기, 레랭 수도사들의 중세 성터에 있는 박물관으로, 히말라야·북극·오세아니아 유물과 19세기 프로방스 풍경화를 전시합니다.', 'A museum in the medieval castle of the Lérins monks atop Le Suquet, with objects from the Himalayas, the Arctic and Oceania and 19th-century Provençal landscapes.', 'Musée des Explorations du Monde Cannes', 45, 60)),
 ],
 'ajaccio': [
  (5, S('아작시오 대성당', 'Ajaccio Cathedral', '1593년 완성된 바로크 양식 대성당으로, 1771년 나폴레옹이 세례를 받은 곳입니다.', 'The Baroque cathedral completed in 1593, where Napoleon was baptised in 1771.', 'Cathédrale Notre-Dame-de-l\'Assomption Ajaccio', 15, 20, b='no', n=FREE)),
  (6, S('포슈 광장', 'Place Foch', '구항구 앞 야자수 광장으로, 1850년 세운 제1통령 나폴레옹 동상이 서 있습니다.', 'The palm-lined square by the old port, with the 1850 monument to Napoleon as First Consul.', 'Place Foch Ajaccio', 10, 15, b='no')),
 ],
 'bonifacio': [
  (5, S('바다 묘지', 'Marine Cemetery', '절벽 위 생프랑수아 성당 옆의 묘지로, 작은 예배당 같은 묘들이 바다를 향해 늘어서 있습니다. 해마다 50만 명이 찾습니다.', 'The cemetery on the cliffs by Saint-François church, its chapel-like tombs facing the sea; some 500,000 people visit each year.', 'Cimetière marin Bonifacio', 20, 30, b='no', n=FREE)),
  (6, S('페르투사토 등대', 'Pertusato Lighthouse', '보니파시오 남동쪽 4km 곶 끝의 등대로, 절벽 위 길을 걸어 가며 구시가와 사르데냐를 바라봅니다.', 'The lighthouse on the cape 4 km south-east of Bonifacio, reached on a clifftop path with views back to the old town and over to Sardinia.', 'Phare de Pertusato', 120, 180, b='no', n=FREE)),
 ],
 'calvi': [
  (5, S('생장바티스트 성당', 'Saint-Jean-Baptiste Cathedral', '성채 꼭대기의 옛 대성당으로, 국가 기념물입니다.', 'The former cathedral at the top of the citadel, a national monument.', 'Cathédrale Saint-Jean-Baptiste Calvi', 15, 20, b='no', n=FREE)),
  (6, S('발라뉴 언덕 마을', 'Balagne hill villages', '칼비 뒤 언덕의 마을들로, ‘프랑스에서 가장 아름다운 마을’ 산탄토니노와 공방 마을 피냐가 대표적입니다.', 'The villages in the hills behind Calvi, notably Sant’Antonino, one of the Plus Beaux Villages de France, and Pigna.', 'Sant\'Antonino Corsica', 180, 300, n=CAR)),
 ],
 'corte': [
  (5, S('타비냐노 계곡', 'Tavignano valley', '코르테에서 바로 시작하는 강 협곡 산책로로, 맑은 물웅덩이를 따라 걷습니다.', 'A river-gorge trail starting right from Corte, following clear pools upstream.', 'Gorges du Tavignano Corte', 120, 240, b='no', n=FREE)),
 ],
}
IT = [("  giverny: [2, 3, 1, 4],\n", "  giverny: [2, 3, 1, 4, 5, 6],\n"),
      ("  fontainebleau: { days: [['', 2, 1]], trips: [['숲과 바르비종|Forest & Barbizon', 3, 4]] },\n",
       "  fontainebleau: { days: [['', 2, 1]], trips: [['숲과 바르비종|Forest & Barbizon', 3, 4], ['보르비콩트 성|Vaux-le-Vicomte', 5], ['모레쉬르루앙|Moret-sur-Loing', 6]] },\n"),
      ("  chartres: [1, 2, 3, 4],\n", "  chartres: [1, 6, 2, 5, 3, 4],\n"),
      ("  'mont-saint-michel': [2, 1, 3, 4],\n", "  'mont-saint-michel': { days: [['', 2, 5, 1, 3, 4]], trips: [['갯벌 건너기|Bay walk', 6]] },\n"),
      ("  'le-puy-en-velay': [2, 3, 4, 1],\n", "  'le-puy-en-velay': { days: [['', 2, 3, 5, 4, 1]], trips: [['폴리냐크 성|Château de Polignac', 6]] },\n"),
      ("    days: [['', 3, 2]],\n    trips: [\n      ['필라 사구|Dune du Pilat', 1],\n      ['캅 페레|Cap Ferret', 4],\n",
       "    days: [['', 5, 3, 2]],\n    trips: [\n      ['필라 사구|Dune du Pilat', 1],\n      ['캅 페레|Cap Ferret', 4],\n      ['르테슈 조류 보호구|Le Teich', 6],\n"),
      ("  perpignan: [2, 4, 3, 1],\n", "  perpignan: { days: [['', 2, 4, 3, 5, 1]], trips: [['생미셸 드 퀵사 수도원|Saint-Michel de Cuxa', 6]] },\n"),
      ("  collioure: [1, 2, 3],\n", "  collioure: { days: [['', 1, 2, 5, 3]], trips: [['포르방드르|Port-Vendres', 6]] },\n"),
      ("  'aigues-mortes': [1, 3, 2, 4],\n", "  'aigues-mortes': { days: [['', 1, 3, 5, 2]], trips: [['카르보니에르 탑과 레스피게트|Tour Carbonnière & L’Espiguette', 6, 4]] },\n"),
      ("  'les-baux-de-provence': [3, 1, 2, 4],\n", "  'les-baux-de-provence': [3, 6, 1, 5, 2, 4],\n"),
      ("  cassis: [1, 2, 3, 4],\n", "  cassis: { days: [['', 1, 5, 2, 3, 4]], trips: [['라시오타|La Ciotat', 6]] },\n"),
      ("  cannes: { days: [['', 3, 1, 2]], trips: [['레랭 제도|Lérins Islands', 4]] },\n",
       "  cannes: { days: [['', 5, 3, 6, 1, 2]], trips: [['레랭 제도|Lérins Islands', 4]] },\n"),
      ("  ajaccio: { days: [['', 1, 3, 4]], trips: [['상기네르 제도|Sanguinaires Islands', 2]] },\n",
       "  ajaccio: { days: [['', 1, 5, 3, 6, 4]], trips: [['상기네르 제도|Sanguinaires Islands', 2]] },\n"),
      ("  bonifacio: { days: [['', 3, 1, 2]], trips: [['라베치 제도|Lavezzi Islands', 4]] },\n",
       "  bonifacio: { days: [['', 3, 1, 5, 2, 6]], trips: [['라베치 제도|Lavezzi Islands', 4]] },\n"),
      ("  calvi: { days: [['', 1, 2, 3]], trips: [['레베치오 해안|Revellata coast', 4]] },\n",
       "  calvi: { days: [['', 1, 5, 2, 3]], trips: [['레베치오 해안|Revellata coast', 4], ['발라뉴 언덕 마을|Balagne villages', 6]] },\n"),
      ("  corte: { days: [['', 2, 1, 3]], trips: [['레스토니카 계곡|Restonica', 4]] },\n",
       "  corte: { days: [['', 2, 1, 3]], trips: [['레스토니카 계곡|Restonica', 4], ['타비냐노 계곡|Tavignano', 5]] },\n")]


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-fr.ts')
    wr('cities.ts', c)
    it = rd('itinerary-fr.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-fr.ts', it)


if __name__ == '__main__':
    main()
