#!/usr/bin/env python3
"""Germany step 1, part 3 (south), 2026-11-07. Munich h10–h15 (grouped by district), Heidelberg h6–h7, Stuttgart
h6–h7, Rothenburg h6–h7, Nuremberg h6–h8 (incl. the rock-cut beer cellars), Würzburg h6 (Juliusspital wine cellar),
Füssen h6 (Wieskirche); stuttgart-h5 '펜들러 언덕 / Weinberge views' becomes the real Württemberg vineyard hill;
thin descriptions rewritten. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
OLD_NEAR = ('근교', 'Nearby')
M_OLD = ('구시가 (마리엔 광장 주변)', 'Old town (around Marienplatz)')
M_MUS = ('박물관 지구', 'Museum quarter')
M_PARK = ('공원과 궁전', 'Parks & palaces')
REWRITE = {
 'heidelberg-h1': ('하이델베르크 성', 'Heidelberg Castle', '네카어강 위 언덕의 붉은 사암 성터로, 세계 최대급 와인 통이 있습니다.', 'The red-sandstone castle ruins above the Neckar, home to one of the world’s largest wine barrels.'),
 'heidelberg-h2': ('구시가와 하우프트슈트라세', 'Old Town & Hauptstrasse', '1km 넘게 이어지는 보행자 거리 하우프트슈트라세와 대학가 골목입니다.', 'The kilometre-plus pedestrian Hauptstrasse and the student lanes around it.'),
 'heidelberg-h3': ('철학자의 길', 'Philosophers’ Walk', '강 건너 언덕길로, 성과 구시가가 정면으로 보입니다.', 'The hillside path across the river, with a straight-on view of the castle and old town.'),
 'heidelberg-h4': ('카를 테오도어 다리 (옛 다리)', 'Old Bridge (Karl Theodor Bridge)', '네카어강을 건너는 18세기 돌다리로, 원숭이 동상이 있습니다.', 'The 18th-century stone bridge over the Neckar, with its bronze monkey.'),
 'heidelberg-h5': ('학생 감옥', 'Student Prison', '말썽 부린 대학생을 가두던 방으로, 벽마다 학생들의 낙서가 남아 있습니다.', 'The cells where unruly students were locked up, their walls covered in graffiti.'),
 'stuttgart-h1': ('메르세데스벤츠 박물관', 'Mercedes-Benz Museum', '이중 나선 건물에 130년 넘는 자동차 역사를 전시합니다.', 'Over 130 years of car history in a double-helix building.'),
 'stuttgart-h2': ('포르쉐 박물관', 'Porsche Museum', '포르쉐 본사 앞의 박물관으로, 경주차와 명차 80여 대가 있습니다.', 'The museum at Porsche’s headquarters, with some 80 race and road cars.'),
 'stuttgart-h3': ('슐로스플라츠', 'Schlossplatz', '신궁전 앞의 중앙 광장으로, 쾨니히 거리와 이어집니다.', 'The central square in front of the New Palace, joined to the Königstrasse.'),
 'stuttgart-h4': ('빌헬마', 'Wilhelma', '무어 양식 정원 안의 동물원 겸 식물원입니다.', 'A zoo and botanical garden set in Moorish-style grounds.'),
 'stuttgart-h5': ('뷔르템베르크 묘당과 포도밭', 'Württemberg Mausoleum & vineyards', '포도밭 언덕 꼭대기 옛 성터의 묘당으로, 네카어 계곡과 시내가 내려다보입니다. 슈투트가르트는 시내에 포도밭이 있는 와인 도시입니다.', 'The mausoleum on the old castle site at the top of a vineyard hill, overlooking the Neckar valley—Stuttgart is a wine city with vineyards inside its limits.'),
 'rothenburg-h1': ('마르크트 광장', 'Marktplatz', '시청과 시의원 연회관 시계탑이 있는 광장으로, 매시 정각 인형극이 펼쳐집니다.', 'The square with the town hall and the Councillors’ Tavern clock, whose figures perform on the hour.'),
 'rothenburg-h2': ('플뢴라인', 'Plönlein', '두 성문 탑 사이 노란 목조 가옥이 선 갈림길로, 로텐부르크에서 가장 유명한 풍경입니다.', 'The fork in the lane between two gate towers with a yellow half-timbered house—Rothenburg’s most famous view.'),
 'rothenburg-h3': ('성벽 산책', 'Town walls', '지붕 덮인 중세 성벽 위를 따라 걸으며 붉은 지붕을 내려다봅니다.', 'Walk the covered medieval walls, looking down over the red roofs.'),
 'rothenburg-h4': ('중세 범죄 박물관', 'Medieval Crime Museum', '중세 형벌 도구와 법률 문서를 전시한 박물관입니다.', 'A museum of medieval punishment devices and legal documents.'),
 'rothenburg-h5': ('성 정원', 'Castle Garden', '옛 성터 정원으로, 타우버 계곡과 성벽이 내려다보입니다.', 'The garden on the old castle site, overlooking the Tauber valley and the walls.'),
 'nuremberg-h1': ('뉘른베르크 황제 성', 'Imperial Castle', '신성 로마 제국 황제들이 머문 언덕 위 성으로, 성벽에서 붉은 지붕이 내려다보입니다.', 'The hilltop castle of the Holy Roman Emperors, with views over the red roofs.'),
 'nuremberg-h2': ('하우프트마르크트', 'Hauptmarkt', '황금 첨탑 분수가 선 중앙 광장으로, 12월엔 크리스마스 마켓이 열립니다.', 'The main square with its golden Beautiful Fountain, home to the Christmas market in December.'),
 'nuremberg-h3': ('성 로렌츠 교회', 'St. Lorenz Church', '구시가 남쪽의 고딕 교회로, 장미창과 성체 탑이 유명합니다.', 'The Gothic church in the southern old town, known for its rose window and tabernacle.'),
 'nuremberg-h4': ('나치 전당대회장 기록관', 'Documentation Centre Nazi Party Rally Grounds', '짓다 만 나치 의회 건물 안에 전당대회와 나치 선전의 역사를 전시합니다.', 'The history of the Nazi rallies and propaganda, housed in the unfinished Nazi Congress Hall.'),
 'nuremberg-h5': ('장난감 박물관', 'Toy Museum', '장난감 도시 뉘른베르크의 인형과 철도 모형을 모은 박물관입니다.', 'Dolls and model railways from Nuremberg, the toy-making city.'),
 'munich-h1': ('마리엔 광장', 'Marienplatz', '신시청 시계탑에서 하루 두세 번 인형극이 펼쳐지는 뮌헨의 중심 광장입니다.', 'Munich’s central square, where the New Town Hall glockenspiel performs two or three times a day.'),
 'munich-h2': ('영국 정원', 'English Garden', '뉴욕 센트럴파크보다 큰 도심 공원으로, 아이스바흐 서핑과 중국탑 비어가든이 있습니다.', 'A city park bigger than Central Park, with Eisbach river surfers and the Chinese Tower beer garden.'),
 'munich-h3': ('님펜부르크 궁전', 'Nymphenburg Palace', '바이에른 왕가의 여름 궁전으로, 넓은 바로크 정원과 미인 화랑이 있습니다.', 'The summer palace of the Bavarian royals, with vast Baroque gardens and the Gallery of Beauties.'),
 'munich-h4': ('피나코테크', 'Pinakotheks', '옛 거장부터 현대까지 미술관 세 곳이 모인 미술 지구입니다.', 'Three art museums from Old Masters to modern, side by side.'),
 'munich-h5': ('호프브로이하우스', 'Hofbräuhaus', '1589년에 문을 연 왕실 양조장의 맥주홀로, 브라스 밴드가 연주합니다.', 'The beer hall of the royal brewery founded in 1589, with a brass band playing.'),
}
ADD = {
 'munich': [
  (10, S('빅투알리엔 시장', 'Viktualienmarkt', '마리엔 광장 옆의 노천 식료품 시장으로, 비어가든이 있습니다.', 'The open-air food market beside Marienplatz, with its own beer garden.', 'Viktualienmarkt', 45, 60, group=M_OLD, c='sun')),
  (11, S('프라우엔 교회', 'Frauenkirche', '양파 돔 쌍둥이 탑이 뮌헨의 상징인 고딕 대성당입니다.', 'The Gothic cathedral whose onion-domed twin towers are Munich’s symbol.', 'Frauenkirche München', 20, 30, group=M_OLD)),
  (12, S('레지덴츠', 'Munich Residenz', '바이에른 왕가가 400년 동안 살던 궁전으로, 안티쿠아리움과 보물관이 있습니다.', 'The palace of the Bavarian royals for 400 years, with the Antiquarium and the treasury.', 'Residenz München', 120, 180, group=M_OLD)),
  (13, S('독일 박물관', 'Deutsches Museum', '이자르강 섬 위의 세계 최대급 과학 기술 박물관입니다.', 'One of the world’s largest museums of science and technology, on an island in the Isar.', 'Deutsches Museum', 180, 240, group=M_MUS)),
  (14, S('올림픽 공원', 'Olympiapark', '1972년 올림픽 경기장과 천막 지붕, 올림픽 탑 전망대가 있는 공원입니다.', 'The park of the 1972 Olympics, with the tented-roof stadium and the Olympic Tower lookout.', 'Olympiapark München', 60, 120, group=M_PARK)),
  (15, S('안덱스 수도원', 'Andechs Monastery', '언덕 위 베네딕도회 수도원으로, 수도원 양조장 맥주를 비어가든에서 마십니다.', 'A hilltop Benedictine monastery whose own brewery’s beer is served in its beer garden.', 'Kloster Andechs', 180, 240, group=DAY,
         n='뮌헨에서 S반으로 헤르싱까지 약 50분, 버스나 숲길(약 1시간)로 오릅니다.|About 50 min on the S-Bahn to Herrsching, then a bus or an hour’s woodland walk up.')),
 ],
 'heidelberg': [
  (6, S('성령 교회', 'Church of the Holy Spirit', '마르크트 광장의 고딕 교회로, 탑에 올라 구시가를 봅니다.', 'The Gothic church on the market square, with a tower to climb over the old town.', 'Heiliggeistkirche Heidelberg', 15, 30)),
  (7, S('쾨니히스슈툴 등산 열차', 'Königstuhl funicular', '성을 지나 해발 568m 쾨니히스슈툴까지 오르는 산악 열차로, 정상에서 라인 평야가 보입니다.', 'The funicular past the castle up to the 568 m Königstuhl, with views over the Rhine plain.', 'Königstuhl Heidelberg', 60, 90)),
 ],
 'stuttgart': [
  (6, S('슈투트가르트 국립 미술관', 'Staatsgalerie Stuttgart', '중세부터 현대까지의 회화를 모은 미술관으로, 제임스 스털링의 신관 건물도 유명합니다.', 'Painting from the Middle Ages to today, in buildings including James Stirling’s celebrated extension.', 'Staatsgalerie Stuttgart', 90, 120, c='mon')),
  (7, S('루트비히스부르크 궁전', 'Ludwigsburg Palace', '방 450여 개의 거대한 바로크 궁전과 꽃 정원입니다.', 'A vast Baroque palace of some 450 rooms, with flower gardens.', 'Residenzschloss Ludwigsburg', 120, 180, group=DAY,
        n='슈투트가르트에서 S반으로 약 20분입니다.|About 20 min on the S-Bahn from Stuttgart.')),
 ],
 'rothenburg': [
  (6, S('독일 크리스마스 박물관', 'German Christmas Museum', '크리스마스 장식 가게 안에 있는 박물관으로, 옛 트리 장식과 크리스마스 풍습을 보여 줍니다.', 'A museum inside the Christmas-decoration store, showing old tree ornaments and customs.', 'Deutsches Weihnachtsmuseum Rothenburg', 30, 45)),
  (7, S('성 야고보 교회', 'St. Jakob’s Church', '리멘슈나이더가 조각한 ‘성혈 제단’이 있는 고딕 교회입니다.', 'The Gothic church holding Riemenschneider’s carved Holy Blood Altar.', 'St.-Jakobs-Kirche Rothenburg', 30, 45)),
 ],
 'nuremberg': [
  (6, S('알브레히트 뒤러 하우스', 'Albrecht Dürer’s House', '화가 뒤러가 살며 작업하던 목조 가옥입니다.', 'The half-timbered house where the painter Dürer lived and worked.', 'Albrecht-Dürer-Haus', 60, 75, c='mon')),
  (7, S('게르만 국립 박물관', 'Germanisches Nationalmuseum', '독일어권 최대의 문화사 박물관입니다.', 'The largest museum of cultural history in the German-speaking world.', 'Germanisches Nationalmuseum', 120, 180, c='mon')),
  (8, S('역사적 바위 굴 저장고', 'Historic rock-cut cellars', '맥주를 숙성하려고 성 언덕 아래 바위를 파 만든 지하 저장고를 안내 투어로 걷습니다.', 'Guided tours of the cellars cut into the castle rock to age beer.', 'Historische Felsengänge Nürnberg', 60, 75, b='rec')),
 ],
 'wurzburg': [
  (6, S('율리우스슈피탈 와인 저장고', 'Juliusspital wine cellar', '16세기에 세운 자선 병원의 와이너리로, 지하 저장고 투어와 프랑켄 와인 시음이 있습니다.', 'The winery of a charitable hospital founded in the 16th century, with cellar tours and Franconian wine tastings.', 'Juliusspital Weingut', 60, 90, b='rec')),
 ],
 'fussen': [
  (6, S('비스 교회', 'Wieskirche', '초원 한가운데 선 화려한 로코코 순례 교회로, 유네스코 세계유산입니다.', 'The lavish rococo pilgrimage church in the middle of a meadow; a UNESCO World Heritage Site.', 'Wieskirche', 45, 60, group=DAY,
        n='퓌센에서 버스나 차로 약 40분입니다.|About 40 min by bus or car from Füssen.')),
 ],
}
IT = [
 ("      ['시내|City centre', 2, 4, 6, 1, 5],\n      ['님펜부르크와 BMW|Nymphenburg & BMW', 3, 8],\n    ],\n    trips: [['다하우 추모관|Dachau Memorial', 7], ['아우디 박물관|Audi museum', 9]],",
  "      ['구시가|Old town', 1, 11, 10, 6, 12, 5],\n      ['박물관과 영국 정원|Museums & English Garden', 4, 13, 2],\n      ['님펜부르크와 올림픽 공원|Nymphenburg & Olympiapark', 3, 14, 8],\n    ],\n    trips: [['다하우 추모관|Dachau Memorial', 7], ['안덱스 수도원|Andechs', 15], ['아우디 박물관|Audi museum', 9]],"),
 ("  heidelberg: [1, 2, 5, 4, 3],", "  heidelberg: [1, 7, 2, 6, 5, 4, 3],"),
 ("      ['시내와 포르쉐|City centre & Porsche', 3, 5, 2],\n    ],\n  },", "      ['시내와 포르쉐|City centre & Porsche', 3, 6, 5, 2],\n    ],\n    trips: [['루트비히스부르크 궁전|Ludwigsburg Palace', 7]],\n  },"),
 ("  rothenburg: [1, 4, 2, 3, 5],", "  rothenburg: [1, 7, 6, 4, 2, 3, 5],"),
 ("  nuremberg: [1, 5, 2, 3, 4],", "  nuremberg: [1, 8, 6, 5, 2, 3, 7, 4],"),
 ("  wurzburg: [1, 4, 3, 2, 5],", "  wurzburg: [1, 6, 4, 3, 2, 5],"),
 ("  fussen: [2, 3, 1, 4, 5],", "  fussen: { days: [['', 2, 3, 1, 4, 5]], trips: [['비스 교회|Wieskirche', 6]] },"),
]
MUN = [(M_OLD, [1, 11, 10, 6, 12, 5]), (M_MUS, [4, 13]), (M_PARK, [2, 14, 3, 8]), (DAY, [7, 15, 9])]


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
    c = reorder(c, 'munich', [(n, g) for g, ns in MUN for n in ns])
    for cid in ADD:
        if cid == 'munich':
            continue
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)\]", t)}
        c = reorder(c, cid, [(n, DAY if (n in trips or read_group(by[n]) == OLD_NEAR) else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)
    v = rd('visit-benelux.ts')
    v = re.sub(r"  'stuttgart-h5': v\(.*\),", "  'stuttgart-h5': v(60, 90, { n: '바트 칸슈타트 쪽 로텐베르크 언덕에 있습니다. 묘당 내부는 대략 3~11월에 엽니다.|On the Rotenberg hill near Bad Cannstatt; the mausoleum interior opens roughly March to November.' }),", v)
    wr('visit-benelux.ts', v)


if __name__ == '__main__':
    main()
