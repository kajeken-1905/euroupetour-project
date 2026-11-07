#!/usr/bin/env python3
"""Germany step 1, part 2 (central: Cologne, Cochem, Frankfurt, Rüdesheim, Leipzig, Dresden), 2026-11-07.
Name fixes (leipzig-h5 '슈필게바이스'→'슈피너라이', dresden-h4 '과정테라세'→'브륄의 테라스'), thin descriptions
rewritten, more sights incl. themed: Cologne Chocolate Museum & Kölsch brewery taverns, Cochem mustard mill, Eberbach
Abbey (wine), Pfunds Molkerei (dairy), Meissen porcelain. Lists in itinerary order. Run once.
After the run (user choice): cochem-h6 Senfmühle removed again (no photo of it exists on Commons)."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
OLD_NEAR = ('근교', 'Nearby')
REWRITE = {
 'cologne-h1': ('쾰른 대성당', 'Cologne Cathedral', '600년 넘게 걸려 1880년에 완공한 고딕 대성당으로, 157m 쌍둥이 탑에 오를 수 있는 유네스코 세계유산입니다.', 'The Gothic cathedral completed in 1880 after more than 600 years, with 157 m twin spires you can climb; a UNESCO World Heritage Site.'),
 'cologne-h2': ('구시가', 'Old Town (Altstadt)', '대성당과 라인강 사이의 골목으로, 쾰슈 맥줏집과 작은 광장이 모여 있습니다.', 'The lanes between the cathedral and the Rhine, full of Kölsch beer halls and little squares.'),
 'cologne-h3': ('호엔촐레른 다리', 'Hohenzollern Bridge', '연인들의 자물쇠가 가득 걸린 철도 다리로, 건너편에서 대성당이 가장 잘 보입니다.', 'The railway bridge hung with lovers’ padlocks, with the best cathedral view from the far bank.'),
 'cologne-h5': ('라인 강변과 유람선', 'Rhine promenade & boat trips', '구시가 앞 강변 산책로와, 라인강을 오가는 유람선입니다.', 'The riverside promenade in front of the old town and boat trips on the Rhine.'),
 'frankfurt-h1': ('뢰머베르크', 'Römerberg', '목조 가옥과 옛 시청 ‘뢰머’가 둘러싼 구시가 광장으로, 12월엔 크리스마스 마켓이 섭니다.', 'The old-town square framed by half-timbered houses and the old town hall, the Römer; a Christmas market fills it in December.'),
 'frankfurt-h2': ('마인 타워', 'Main Tower', '200m 높이 옥상 전망대에서 고층 빌딩 스카이라인을 봅니다.', 'An open-air platform 200 m up, looking over the skyscraper skyline.'),
 'frankfurt-h3': ('박물관 강변', 'Museumsufer', '마인강 남쪽 강변에 슈테델 미술관 등 박물관 10여 곳이 늘어선 거리입니다.', 'A dozen museums, including the Städel, lining the south bank of the Main.'),
 'frankfurt-h4': ('팔멘가르텐', 'Palmengarten', '19세기 온실과 정원이 있는 큰 식물원입니다.', 'A large botanical garden with 19th-century glasshouses.'),
 'frankfurt-h5': ('작센하우젠 사과 와인 거리', 'Sachsenhausen apple-wine taverns', '프랑크푸르트 명물 사과술 ‘아펠바인’을 내는 선술집이 모인 옛 동네입니다.', 'The old quarter of taverns serving Frankfurt’s cider, Apfelwein.'),
 'leipzig-h1': ('성 토마스 교회', 'St. Thomas Church', '바흐가 27년 동안 칸토르로 일한 교회로, 그의 무덤이 있습니다.', 'The church where Bach was cantor for 27 years, and where he is buried.'),
 'leipzig-h2': ('마르크트 광장과 구시청', 'Markt & Old Town Hall', '르네상스 양식 구시청이 선 중앙 광장으로, 구시청 안에 시립 역사 박물관이 있습니다.', 'The main square with the Renaissance Old Town Hall, home to the city history museum.'),
 'leipzig-h3': ('메들러 파사주', 'Mädler Passage', '지붕 덮인 쇼핑 아케이드로, 괴테의 ‘파우스트’에 나오는 아우어바흐스 켈러가 있습니다.', 'The covered shopping arcade housing Auerbachs Keller, the tavern from Goethe’s Faust.'),
 'leipzig-h4': ('전투 기념비', 'Monument to the Battle of the Nations', '1813년 나폴레옹을 물리친 라이프치히 전투를 기리는 91m 기념비입니다.', 'The 91 m monument to the 1813 battle that defeated Napoleon.'),
 'leipzig-h5': ('슈피너라이', 'Spinnerei', '옛 방적 공장을 갤러리와 작업실로 바꾼 현대 미술 지구입니다.', 'A former cotton mill turned into galleries and artists’ studios.'),
 'dresden-h1': ('츠빙거 궁전', 'Zwinger', '바로크 궁전 안에 라파엘로의 ‘시스티나 성모’가 있는 옛 거장 회화관이 있습니다.', 'The Baroque palace housing the Old Masters Gallery and Raphael’s Sistine Madonna.'),
 'dresden-h2': ('성모 교회', 'Frauenkirche', '1945년 폭격으로 무너진 뒤 2005년 옛 돌을 다시 쌓아 재건한 돔 교회입니다.', 'The domed church destroyed in the 1945 bombing and rebuilt from its old stones in 2005.'),
 'dresden-h3': ('레지덴츠 궁전과 녹색 금고', 'Residenzschloss & Green Vault', '작센 선제후의 궁전으로, 보석과 금은 공예품을 모은 녹색 금고가 유명합니다.', 'The palace of the Saxon electors, famous for the Green Vault treasury of jewels and goldsmiths’ work.'),
 'dresden-h4': ('브륄의 테라스', 'Brühl’s Terrace', '엘베강 위로 높이 놓인 산책로로, ‘유럽의 발코니’라 불립니다.', 'The raised promenade above the Elbe, known as the “Balcony of Europe”.'),
 'dresden-h5': ('노이슈타트', 'Neustadt', '엘베강 건너편 동네로, 바로크 거리와 카페, 장식 벽의 ‘쿤스트호프 파사주’가 있습니다.', 'The district across the Elbe, with Baroque streets, cafés and the decorated Kunsthof courtyards.'),
}
NAMES_ONLY = {}
ADD = {
 'cologne': [
  (6, S('초콜릿 박물관', 'Chocolate Museum', '라인강 가의 박물관으로, 초콜릿 생산 과정과 3m 초콜릿 분수를 봅니다.', 'A riverside museum of chocolate-making, with a 3 m chocolate fountain.', 'Schokoladenmuseum Köln', 90, 120,
        b='rec', s='https://www.schokoladenmuseum.de/en/')),
  (7, S('쾰슈 맥줏집', 'Kölsch brewery taverns', '쾰른 맥주 쾰슈를 작은 잔으로 계속 채워 주는 전통 맥줏집 문화로, 대성당 옆 ‘프뤼 암 돔’이 대표적입니다.', 'The tradition of Kölsch beer served in small glasses that keep coming until you cover yours—Früh am Dom by the cathedral is the classic.', 'Früh am Dom', 45, 90)),
  (8, S('그로스 장크트 마르틴 교회', 'Great St. Martin Church', '구시가 강변에 우뚝 선 로마네스크 교회입니다.', 'The Romanesque church towering over the riverside old town.', 'Groß St. Martin Köln', 15, 20)),
  (9, S('루트비히 미술관', 'Museum Ludwig', '피카소와 팝아트 작품이 많은 현대 미술관입니다.', 'A modern-art museum strong on Picasso and Pop Art.', 'Museum Ludwig', 90, 120, c='mon')),
  (10, S('브륄 아우구스투스부르크 궁전', 'Augustusburg Palace, Brühl', '로코코 궁전과 정원으로, 유네스코 세계유산입니다.', 'A rococo palace and gardens; a UNESCO World Heritage Site.', 'Schloss Augustusburg Brühl', 120, 180, group=DAY,
         n='쾰른에서 기차로 약 20분입니다. 겨울엔 쉬는 기간이 있습니다.|About 20 min by train from Cologne; closed for part of the winter.')),
 ],
 'cochem': [
  (6, S('역사 머스터드 방앗간', 'Historic Mustard Mill', '1810년 방식 그대로 돌절구로 머스터드를 갈아 만드는 방앗간으로, 시식과 가게가 있습니다.', 'A mill grinding mustard on stone the way it was done in 1810, with tastings and a shop.', 'Historische Senfmühle Cochem', 30, 45)),
 ],
 'frankfurt': [
  (7, S('괴테 하우스', 'Goethe House', '괴테가 태어나 자란 집을 복원한 박물관입니다.', 'The house where Goethe was born and grew up, restored as a museum.', 'Goethe-Haus Frankfurt', 60, 75)),
  (8, S('프랑크푸르트 대성당', 'Frankfurt Cathedral', '신성 로마 제국 황제의 대관식이 열린 고딕 대성당으로, 탑에 오를 수 있습니다.', 'The Gothic cathedral where Holy Roman Emperors were crowned, with a climbable tower.', 'Kaiserdom St. Bartholomäus', 30, 45)),
  (9, S('클라인마르크트할레', 'Kleinmarkthalle', '소시지와 치즈, 과일 가게가 모인 지붕 덮인 시장입니다.', 'The covered food market of sausage, cheese and fruit stalls.', 'Kleinmarkthalle Frankfurt', 30, 60, c='sun')),
 ],
 'rudesheim': [
  (5, S('에버바흐 수도원', 'Eberbach Abbey', '12세기 시토회 수도원으로, 옛 와인 압착기와 수도원 와이너리가 있고 영화 ‘장미의 이름’ 촬영지입니다.', 'A 12th-century Cistercian abbey with old wine presses and its own winery—a filming location for The Name of the Rose.', 'Kloster Eberbach', 90, 120, group=DAY,
        n='뤼데스하임에서 차로 약 20분입니다.|About 20 min by car from Rüdesheim.')),
 ],
 'leipzig': [
  (6, S('니콜라이 교회', 'St. Nicholas Church', '1989년 월요 기도회와 평화 시위가 시작돼 동독 붕괴로 이어진 교회입니다.', 'The church whose Monday prayers and peaceful protests in 1989 led to the fall of East Germany.', 'Nikolaikirche Leipzig', 20, 30)),
  (7, S('바흐 박물관', 'Bach Museum', '성 토마스 교회 앞에 바흐의 삶과 음악을 체험하는 박물관입니다.', 'The museum of Bach’s life and music, opposite St. Thomas Church.', 'Bach-Museum Leipzig', 60, 90, c='mon')),
  (8, S('현대사 포럼', 'Forum of Contemporary History', '동독 시절 일상과 감시, 1989년 혁명을 보여 주는 무료 박물관입니다.', 'A free museum of everyday life, surveillance and the 1989 revolution in East Germany.', 'Zeitgeschichtliches Forum Leipzig', 60, 90, c='mon')),
 ],
 'dresden': [
  (7, S('젬퍼 오페라', 'Semperoper', '작센 국립 오페라의 극장으로, 공연이 없을 때는 안내 투어로 봅니다.', 'The Saxon State Opera house, seen on guided tours when there is no performance.', 'Semperoper Dresden', 45, 60)),
  (8, S('군주의 행렬', 'Procession of Princes (Fürstenzug)', '마이센 도자기 타일 2만 3천 장으로 만든 102m 벽화입니다.', 'A 102 m mural made of 23,000 Meissen porcelain tiles.', 'Fürstenzug Dresden', 10, 15)),
  (9, S('푼트 몰케라이', 'Pfunds Molkerei', '손으로 그린 타일로 꾸며 ‘세상에서 가장 아름다운 우유 가게’라 불리는 1891년 치즈·유제품 가게입니다.', 'The 1891 dairy shop decorated with hand-painted tiles, called “the most beautiful dairy shop in the world”.', 'Pfunds Molkerei', 15, 20)),
  (10, S('바스타이 다리 (작센 스위스)', 'Bastei Bridge (Saxon Switzerland)', '엘베강 위 사암 바위 기둥 사이를 잇는 다리로, 작센 스위스 국립공원의 대표 전망대입니다.', 'The bridge linking sandstone pillars high above the Elbe, the signature viewpoint of Saxon Switzerland National Park.', 'Basteibrücke', 180, 300, group=DAY,
         n='드레스덴에서 S반으로 라텐역까지 약 40분, 강을 배로 건너 약 30분 오릅니다.|About 40 min on the S-Bahn to Rathen, then a ferry and a 30-minute climb.')),
  (11, S('마이센 도자기 공장', 'Meissen Porcelain Manufactory', '1710년부터 이어진 유럽 최초의 경질 자기 공장으로, 시연 작업장과 박물관이 있습니다.', 'Europe’s first hard-porcelain factory, founded in 1710, with demonstration workshops and a museum.', 'Meissen Porcelain Manufactory', 120, 180, group=DAY,
         n='드레스덴에서 S반으로 약 40분입니다.|About 40 min on the S-Bahn from Dresden.')),
 ],
}
IT = [
 ("  cochem: [2, 5, 1, 3, 4],", "  cochem: { days: [['', 2, 5, 6, 1, 3]], trips: [['엘츠 성|Eltz Castle', 4]] },"),
 ("  cologne: [1, 4, 2, 5, 3],", "  cologne: { days: [['', 1, 4, 8, 2, 7, 6, 9, 5, 3]], trips: [['브륄 궁전|Brühl palaces', 10]] },"),
 ("  rudesheim: [1, 3, 2, 4],", "  rudesheim: { days: [['', 1, 3, 2, 4]], trips: [['에버바흐 수도원|Eberbach Abbey', 5]] },"),
 ("  frankfurt: [6, 2, 1, 3, 5],", "  frankfurt: [6, 2, 9, 8, 1, 7, 3, 5],"),
 ("  dresden: [1, 3, 2, 4, 5, 6],", "  dresden: { days: [['', 1, 7, 3, 8, 2, 9, 4, 5, 6]], trips: [['바스타이 다리|Bastei Bridge', 10], ['마이센|Meissen', 11]] },"),
 ("  leipzig: [2, 3, 1, 5, 4],", "  leipzig: [2, 3, 6, 1, 7, 8, 5, 4],"),
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
        c = add_sights(c, cid, items, 'visit-benelux.ts')
    it = rd('itinerary-central.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-central.ts', it)
    for cid in ADD:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)\]", t)}
        c = reorder(c, cid, [(n, DAY if (n in trips or read_group(by[n]) == OLD_NEAR) else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
