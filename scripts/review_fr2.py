#!/usr/bin/env python3
"""France step 1, centre & east (Loire, Atlantic, Burgundy, Lyon, Alps), 2026-11-08. Fixes: lyon-h3 '프레퀴 광장' for
Place Bellecour → '벨쿠르 광장'; annecy-h5 'Thioux Canal' duplicated the canal/Palais de l'Isle → Pont des Amours &
Jardins de l'Europe; chamonix-h5 'Arve riverwalk' → Lac Blanc hike. Thin descriptions rewritten. New sights incl. Lyon
Roman theatres/Croix-Rousse/Tête d'Or/Musée des Confluences, themed Vouvray, Beaune & Clos de Vougeot (wine), Cognac.
Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
OLD_NEAR = ('근교', 'Nearby')
REWRITE = {
 'amboise-h1': (None, None, '루아르강 위 언덕의 왕실 성으로, 성벽 테라스와 다빈치가 묻힌 생튀베르 예배당이 있습니다.', 'The royal château on a bluff above the Loire, with rampart terraces and the Saint-Hubert chapel where Leonardo da Vinci is buried.', None),
 'amboise-h2': (None, None, '다빈치가 생애 마지막 3년을 보낸 저택으로, 정원에 그의 발명품 모형이 있습니다.', 'The manor where Leonardo spent his last three years, with models of his inventions in the park.', None),
 'amboise-h3': (None, None, '셰르강 위에 아치로 걸쳐 지은 성으로, 대대로 여성 성주가 가꾸어 ‘여인들의 성’이라 불립니다.', 'The château arching across the Cher, shaped by a line of women owners—the “Ladies’ Château”.', None),
 'amboise-h4': (None, None, '프랑수아 1세의 르네상스 성으로, 다빈치가 설계했다는 이중 나선 계단과 지붕 테라스가 유명합니다.', 'François I’s Renaissance château, famed for its double-helix staircase attributed to Leonardo and its rooftop terrace.', None),
 'la-rochelle-h1': (None, None, '생니콜라 탑과 체인 탑이 입구를 지키는 옛 항구로, 탑 안에 오를 수 있습니다.', 'The old harbour guarded by the Saint-Nicolas and Chain towers, both open to climb.', None),
 'la-rochelle-h2': (None, None, '구항구에서 구시가로 들어가는 시계탑 성문입니다.', 'The clock-tower gate leading from the old port into the old town.', None),
 'la-rochelle-h3': (None, None, '다리로 이어진 섬으로, 소금밭과 하얀 마을 사이를 자전거로 돕니다.', 'The island across the bridge—cycle between salt marshes and white villages.', None),
 'la-rochelle-h4': (None, None, '돌 아케이드가 길게 이어진 구시가 거리로, 비 오는 날에도 걷기 좋습니다.', 'Old-town streets lined with long stone arcades, good for walking even in the rain.', None),
 'dijon-h1': (None, None, '부르고뉴 공작 궁전 앞의 반원형 광장으로, 바닥 분수가 있습니다.', 'The semicircular square in front of the Dukes’ Palace, with ground-level fountains.', None),
 'dijon-h2': (None, None, '부르고뉴 공작의 궁전으로, 공작들의 무덤이 있는 무료 미술관과 필리프 르 봉 탑이 있습니다.', 'The Dukes of Burgundy’s palace, home to a free fine-arts museum with the ducal tombs and the Tour Philippe le Bon.', None),
 'dijon-h3': (None, None, '가짜 가고일이 줄지어 달린 13세기 고딕 교회로, 벽에 행운의 올빼미 조각이 있습니다.', 'A 13th-century Gothic church lined with mock gargoyles, with the lucky owl carved on its wall.', None),
 'dijon-h4': (None, None, '노트르담 교회 옆 골목으로, 왼손으로 올빼미를 쓰다듬으며 소원을 빕니다. 바닥의 올빼미 표지를 따라 시내를 돕니다.', 'The lane beside Notre-Dame where you stroke the owl with your left hand for luck—then follow the owl markers around town.', None),
 'dijon-h5': (None, None, '에펠 사무소가 설계한 철골 시장으로, 치즈·머스터드·부르고뉴 식재료가 모입니다.', 'The iron market hall designed by Eiffel’s firm, full of cheese, mustard and Burgundy produce.', None),
 'lyon-h1': (None, None, '르네상스 저택이 늘어선 구시가로, 건물 사이를 잇는 비밀 통로 ‘트라부르’를 지나갑니다.', 'The Renaissance old town, crossed by traboules—secret passageways through the buildings.', None),
 'lyon-h2': (None, None, '언덕 위 19세기 대성당으로, 금빛 모자이크 내부와 시내 전망 테라스가 있습니다.', 'The 19th-century basilica on the hill, with gilded mosaics inside and a terrace over the city.', None),
 'lyon-h3': ('벨쿠르 광장', 'Place Bellecour', '루이 14세 기마상이 선 유럽에서 손꼽히게 큰 광장으로, 구시가와 프레스킬 사이에 있습니다.', 'One of Europe’s largest squares, with Louis XIV on horseback, between the old town and the Presqu’île.', None),
 'lyon-h4': (None, None, '론강과 손강이 만나는 재개발 지구로, 현대 건축과 콩플뤼앙스 박물관이 있습니다.', 'The regenerated district where the Rhône and Saône meet, with modern architecture and the Musée des Confluences.', None),
 'lyon-h5': (None, None, '리옹 미식을 대표하는 실내 시장으로, 굴·치즈·소시지 가게와 작은 식당이 모여 있습니다.', 'Lyon’s great food hall—oyster bars, cheese and sausage stalls and little restaurants.', None),
 'annecy-h1': (None, None, '알프스에 둘러싸인 맑은 호수로, 유람선과 호숫가 산책, 여름 수영을 즐깁니다.', 'The crystal-clear lake ringed by the Alps—boat trips, lakeside walks and summer swimming.', None),
 'annecy-h2': (None, None, '꽃 장식 다리와 파스텔 집들이 운하를 따라 이어지는 구시가입니다.', 'The old town of flower-decked bridges and pastel houses along the canals.', None),
 'annecy-h3': (None, None, '운하 한가운데 배 모양으로 선 12세기 건물로, 감옥으로 쓰였고 지금은 역사 박물관입니다.', 'The ship-shaped 12th-century building in the middle of the canal—once a prison, now a history museum.', None),
 'annecy-h4': (None, None, '구시가 위 언덕의 성으로, 박물관과 호수 전망이 있습니다.', 'The castle above the old town, with a museum and lake views.', None),
 'annecy-h5': ('사랑의 다리와 유럽 정원', 'Pont des Amours & Jardins de l’Europe', '바세 운하 위 다리와 호숫가 공원으로, 호수와 산이 한눈에 보입니다.', 'The bridge over the Vassé canal and the lakeside park, with the lake and mountains in view.', 'Pont des Amours Annecy'),
 'chamonix-h1': (None, None, '케이블카로 3,842m까지 올라 몽블랑을 마주하고, 유리 상자 ‘허공 속으로’에 섭니다.', 'Cable car to 3,842 m, face to face with Mont Blanc—step into the glass box “Step into the Void”.', None),
 'chamonix-h2': (None, None, '톱니 열차로 올라 프랑스 최대 빙하 ‘얼음의 바다’와 얼음 동굴을 봅니다.', 'Rack railway up to the Mer de Glace, France’s largest glacier, and its ice cave.', None),
 'chamonix-h3': (None, None, '알프스 산악 마을의 중심가로, 상점과 카페, 등반가 동상이 있습니다.', 'The Alpine town centre of shops, cafés and the statue of the first Mont Blanc climbers.', None),
 'chamonix-h4': (None, None, '계곡 반대편 케이블카로, 몽블랑 산군 전체를 정면에서 봅니다.', 'The cable car on the opposite side of the valley, facing the whole Mont Blanc massif.', None),
 'chamonix-h5': ('락 블랑', 'Lac Blanc', '플레제르 케이블카에서 걸어 오르는 산정 호수로, 수면에 몽블랑이 비칩니다.', 'The high lake reached on foot from the Flégère lift, with Mont Blanc reflected in it.', 'Lac Blanc Chamonix'),
}
ADD = {
 'amboise': [
  (5, S('빌랑드리 성 정원', 'Château de Villandry gardens', '채소밭까지 기하학 무늬로 가꾼 르네상스식 정원입니다.', 'Renaissance-style gardens laid out in geometric patterns, down to the kitchen garden.', 'Château de Villandry', 120, 150, group=DAY,
        n='앙부아즈에서 차로 약 45분입니다.|About 45 min by car from Amboise.')),
  (6, S('부브레 와인 동굴', 'Vouvray wine caves', '석회암 절벽을 파낸 저장고에서 슈냉 블랑 와인 부브레를 시음합니다.', 'Taste Vouvray Chenin Blanc in cellars cut into the limestone cliffs.', 'Vouvray', 90, 120, group=DAY,
        n='앙부아즈에서 차로 약 20분입니다.|About 20 min by car from Amboise.')),
 ],
 'la-rochelle': [
  (5, S('라로셸 수족관', 'Aquarium La Rochelle', '대서양과 열대 바다 생물 1만 2천여 마리를 보는 프랑스 최대급 수족관입니다.', 'One of France’s largest aquariums, with some 12,000 Atlantic and tropical sea creatures.', 'Aquarium La Rochelle', 120, 150)),
  (6, S('코냑 하우스', 'Cognac houses', '코냑 브랜디의 고향으로, 샤랑트강 가의 헤네시·마르텔·레미 마르탱 저장고를 견학합니다.', 'The home of cognac—tour the Hennessy, Martell and Rémy Martin cellars on the Charente.', 'Hennessy Cognac', 240, 360, group=DAY, b='rec',
        n='라로셸에서 기차로 약 1시간 40분(생트 환승)입니다.|About 1 hr 40 by train from La Rochelle, changing at Saintes.')),
 ],
 'dijon': [
  (6, S('국제 미식·와인 센터', 'Cité de la Gastronomie et du Vin', '옛 병원 건물에 프랑스 미식과 부르고뉴 와인 전시, 와인 바, 쿠킹 스쿨이 모였습니다.', 'French gastronomy and Burgundy wine exhibits, a wine bar and cooking school in a former hospital.', 'Cité Internationale de la Gastronomie et du Vin Dijon', 90, 120, c='mon')),
  (7, S('클로 드 부조', 'Château du Clos de Vougeot', '부르고뉴 그랑 크뤼 포도밭 한가운데 중세 수도사들의 포도주 압착기가 남은 성입니다.', 'The château in the middle of Burgundy’s grand cru vineyards, with the monks’ medieval wine presses.', 'Château du Clos de Vougeot', 60, 90, group=DAY,
        n='디종에서 차로 약 25분이고, 와인 길 ‘부르고뉴 그랑 크뤼 루트’를 따라갑니다.|About 25 min by car from Dijon along the Route des Grands Crus.')),
  (8, S('본의 오스피스', 'Hospices de Beaune', '색 유리 기와 지붕이 화려한 15세기 자선 병원으로, 매년 11월 와인 경매가 열립니다.', 'The 15th-century charity hospital with its glazed-tile roof, home of the November wine auction.', 'Hospices de Beaune', 60, 90, group=DAY,
        n='디종에서 기차로 약 25분입니다.|About 25 min by train from Dijon.')),
 ],
 'lyon': [
  (6, S('푸르비에르 로마 극장', 'Roman theatres of Fourvière', '대성당 아래 언덕의 로마 시대 대극장과 소극장, 루그두눔 고고학 박물관입니다.', 'The Roman Great Theatre and Odeon on the hill below the basilica, and the Lugdunum museum.', 'Théâtres romains de Fourvière', 60, 90)),
  (7, S('크루아루스와 견직공 트라부르', 'Croix-Rousse & the silk workers’ traboules', '견직공들이 살던 언덕 동네로, 계단과 트라부르, 대형 벽화 ‘카뉘의 벽’이 있습니다.', 'The silk workers’ hill district of stairways, traboules and the giant Mur des Canuts mural.', 'Mur des Canuts', 90, 120)),
  (8, S('리옹 미술관', 'Musée des Beaux-Arts de Lyon', '옛 수녀원에 고대 이집트부터 모네·피카소까지 모은 프랑스 최대급 미술관입니다.', 'One of France’s great art museums, from ancient Egypt to Monet and Picasso, in a former abbey.', 'Musée des Beaux-Arts de Lyon', 90, 120, c='tue')),
  (9, S('테트 도르 공원', 'Parc de la Tête d’Or', '호수와 장미 정원, 무료 동물원과 온실이 있는 117ha 공원입니다.', 'A 117-hectare park with a lake, rose gardens, a free zoo and glasshouses.', 'Parc de la Tête d\'Or', 60, 120)),
  (10, S('콩플뤼앙스 박물관', 'Musée des Confluences', '두 강이 만나는 끝에 선 유리·철 구름 모양 건물의 과학·인류학 박물관입니다.', 'A science and anthropology museum in a glass-and-steel “cloud” at the meeting of the two rivers.', 'Musée des Confluences', 90, 120, c='mon')),
  (11, S('페루주', 'Pérouges', '자갈길과 성벽이 남은 중세 언덕 마을로, 설탕 버터 파이 ‘갈레트 드 페루주’가 명물입니다.', 'A medieval hilltop village of cobbles and walls, famous for its sugar-and-butter galette.', 'Pérouges', 120, 180, group=DAY,
         n='리옹에서 기차로 약 35분 뒤 걸어서 약 20분 오릅니다.|About 35 min by train from Lyon, then a 20-minute walk up.')),
 ],
}
IT = [
 ("  amboise: { days: [['', 1, 2]], trips: [['루아르 고성|Loire châteaux', 3, 4]] },",
  "  amboise: { days: [['', 1, 2]], trips: [['루아르 고성|Loire châteaux', 3, 4], ['빌랑드리|Villandry', 5], ['부브레|Vouvray', 6]] },"),
 ("  'la-rochelle': { days: [['', 2, 1, 4]], trips: [['레 섬|Île de Ré', 3]] },",
  "  'la-rochelle': { days: [['', 2, 1, 4, 5]], trips: [['레 섬|Île de Ré', 3], ['코냑|Cognac', 6]] },"),
 ("  dijon: [1, 2, 3, 4, 5],", "  dijon: { days: [['', 1, 2, 3, 4, 5, 6]], trips: [['부르고뉴 와인 길|Burgundy wine route', 7, 8]] },"),
 ("  lyon: [2, 1, 3, 5, 4],",
  "  lyon: {\n    days: [\n      ['푸르비에르와 비외 리옹|Fourvière & Vieux Lyon', 2, 6, 1, 3, 8],\n      ['크루아루스와 강변|Croix-Rousse & the rivers', 7, 9, 5, 4, 10],\n    ],\n    trips: [['페루주|Pérouges', 11]],\n  },"),
]
VISIT = {
 'chamonix-h5': "  'chamonix-h5': v(240, 300, { n: '플레제르 케이블카에서 걸어서 약 1시간 30분 오릅니다. 케이블카는 대략 6~9월에 다닙니다.|About 1 hr 30 uphill on foot from the Flégère lift, which runs roughly June to September.' }),",
 'annecy-h5': "  'annecy-h5': v(20, 30),",
}


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
    v = rd('visit-fr.ts')
    for hid, line in VISIT.items():
        v, k = re.subn(rf"^  '{hid}': v\(.*\),$", line, v, flags=re.M)
        assert k == 1, hid
    wr('visit-fr.ts', v)


if __name__ == '__main__':
    main()
