#!/usr/bin/env python3
"""Germany 2nd pass (2026-11-25, user approved): +30 sights in 16 existing cities. Facts from Wikipedia (en/de):
Humboldt Forum in the rebuilt Berlin Palace (Baroque façades), opened 2020–21, Ethnological Museum and Museum of Asian
Art; Kulturforum by Potsdamer Platz with the Gemäldegalerie (Old Masters), Scharoun's Philharmonie (1963) and Mies van
der Rohe's Neue Nationalgalerie (reopened 2021); Hackesche Höfe eight linked courtyards, 1906–07, Art Nouveau tiles;
Kontorhaus district with Chilehaus (1922–24, brick expressionism) UNESCO 2015 together with the Speicherstadt; HafenCity
the large redevelopment of the old port; Old Elbe Tunnel opened 1911, 426 m, lifts at both ends; Planten un Blomen park
with Japanese garden and summer water-light concerts; Asamkirche 1733–46 by the Asam brothers; Theatinerkirche and
Feldherrnhalle on Odeonsplatz; Allianz Arena opened 2005, FC Bayern, colour-changing façade, tours and FC Bayern Museum;
Alte Oper built 1880, ruined in WWII, reopened 1981 as a concert hall, Fressgass; Senckenberg Natural History Museum,
dinosaur skeletons; Albertinum Galerie Neue Meister (Caspar David Friedrich) and sculpture; Pillnitz Palace on the Elbe,
chinoiserie, paddle steamers; Moritzburg Castle baroque hunting lodge on a lake, film 'Three Wishes for Cinderella'
(1973); Leipzig Zoo with the Gondwanaland tropical hall; Auerbachs Keller in the Mädler Passage, scene in Goethe's Faust;
Nuremberg Handwerkerhof by the Königstor; Altenburg on the highest of Bamberg's seven hills; Michaelsberg Benedictine
abbey above the town (church long closed for restoration); Weltenburg Abbey on the Danube Gorge, monastery brewery,
boats from Kelheim in season; Linderhof the smallest of Ludwig II's palaces and the only one finished in his lifetime;
Ettal Abbey founded 1330, Oberammergau painted houses (Lüftlmalerei) and Passion Play every ten years; Hohes Schloss
Füssen late Gothic with painted illusionistic façades; Loreley slate rock ~132 m near St. Goarshausen; Bacharach
half-timbered wine town below Stahleck Castle; Beilstein Moselle village with Metternich castle ruin; Hohenzollern
Castle 19th-c. on Mount Hohenzollern (855 m); Schwetzingen Palace summer residence of the Electors Palatine with its
gardens and garden mosque; Bremerhaven Klimahaus 8° Ost and German Emigration Center. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
VF = 'visit-benelux.ts'
ADD = {
 'berlin': [
  (19, S('훔볼트 포룸', 'Humboldt Forum', '옛 베를린 왕궁의 바로크 정면을 되살려 2020~21년 문을 연 문화 시설로, 민족학 박물관과 아시아 미술관이 들어 있고 옥상 테라스에서 박물관 섬이 내려다보입니다.', 'The cultural centre in the rebuilt Berlin Palace, with its Baroque façades restored, opened in 2020–21; it houses the Ethnological Museum and the Museum of Asian Art, and its roof terrace looks over Museum Island.', 'Humboldt Forum', 90, 150, c='tue')),
  (20, S('문화 포룸 (회화관·필하모니)', 'Kulturforum (Gemäldegalerie & Philharmonie)', '포츠담 광장 옆 문화 단지로, 렘브란트·페르메이르 등 옛 거장 그림의 회화관, 샤룬이 설계한 베를린 필하모니(1963), 미스 반 데어 로에의 신 국립 미술관이 모여 있습니다.', 'The cultural complex by Potsdamer Platz: the Gemäldegalerie of Old Masters from Rembrandt to Vermeer, Scharoun’s Berlin Philharmonie (1963) and Mies van der Rohe’s Neue Nationalgalerie.', 'Gemäldegalerie Berlin', 120, 180, c='mon')),
  (21, S('하케셔 회페', 'Hackesche Höfe', '1906~07년에 지은 여덟 개의 안뜰이 이어진 건물로, 아르누보 타일 정면 안에 가게·카페·극장이 들어 있습니다.', 'Eight linked courtyards built in 1906–07, with Art Nouveau tiled façades and shops, cafés and a cinema inside.', 'Hackesche Höfe', 30, 45, b='no', n=FREE)),
 ],
 'hamburg': [
  (12, S('콘토르하우스 지구와 칠레하우스', 'Kontorhaus district & Chilehaus', '1920~30년대 벽돌 표현주의 사무 건물 지구로, 뱃머리처럼 뾰족한 칠레하우스가 대표 건물입니다. 슈파이허슈타트와 함께 유네스코 세계유산입니다.', 'A district of 1920s–30s brick expressionist office blocks, led by the ship’s-prow-shaped Chilehaus; a UNESCO World Heritage Site together with the Speicherstadt.', 'Chilehaus Hamburg', 20, 30, b='no', n='건물 밖과 안뜰은 무료로 둘러봅니다.|The exteriors and courtyards are free to see.')),
  (13, S('하펜시티', 'HafenCity', '옛 항구 부지를 새 시가지로 바꾼 지구로, 물가 산책길과 현대 건축이 이어져 엘프필하모니까지 걸어갑니다.', 'The old port area turned into a new quarter, with waterfront promenades and modern architecture leading to the Elbphilharmonie.', 'HafenCity Hamburg', 45, 90, b='no', n=FREE)),
  (14, S('옛 엘베 터널', 'Old Elbe Tunnel', '1911년 문을 연 엘베강 밑 426m 터널로, 란둥스브뤼켄에서 큰 엘리베이터로 내려가 걸어서 강을 건너면 맞은편에서 항구와 시내가 보입니다.', 'The 426 m tunnel under the Elbe opened in 1911; big lifts take you down at the Landungsbrücken, and from the far bank you look back over the harbour and city.', 'Alter Elbtunnel', 30, 45, b='no', n='걸어서 건너는 것은 무료입니다.|Free to walk through.')),
  (15, S('플란텐 운 블로멘 공원', 'Planten un Blomen', '시내 한가운데의 큰 공원으로, 일본 정원과 장미 정원이 있고 여름 저녁엔 분수 조명 공연이 열립니다.', 'A large park in the city centre with a Japanese garden and a rose garden, and water-and-light shows on summer evenings.', 'Planten un Blomen', 45, 90, b='no', n=FREE)),
 ],
 'munich': [
  (17, S('아잠 성당', 'Asam Church', '젠들링거 거리의 작은 성당으로, 아잠 형제가 1733~46년에 지어 천장부터 벽까지 후기 바로크 장식으로 가득합니다.', 'A small church on Sendlinger Strasse built in 1733–46 by the Asam brothers, covered from floor to ceiling in late-Baroque decoration.', 'Asamkirche München', 15, 20, b='no', n=FREE)),
  (18, S('오데온 광장과 테아티너 성당', 'Odeonsplatz & Theatine Church', '노란 정면의 테아티너 성당과 장군 기념당이 선 광장으로, 레지덴츠와 호프가르텐 정원이 바로 옆입니다.', 'The square framed by the yellow Theatine Church and the Feldherrnhalle, next to the Residenz and the Hofgarten.', 'Theatinerkirche München', 20, 30, b='no', n=FREE)),
  (19, S('알리안츠 아레나', 'Allianz Arena', 'FC 바이에른 뮌헨의 홈구장(2005년 개장)으로, 밤이면 색이 바뀌는 외벽이 유명합니다. 경기장 투어와 FC 바이에른 박물관이 있습니다.', 'FC Bayern Munich’s stadium, opened in 2005 and known for its colour-changing façade at night, with stadium tours and the FC Bayern Museum.', 'Allianz Arena', 90, 120, b='rec', n='경기 날엔 투어가 없거나 줄어듭니다.|Tours are cancelled or reduced on match days.')),
 ],
 'frankfurt': [
  (10, S('알테 오퍼와 프레스가세', 'Alte Oper & Fressgass', '1880년에 지은 오페라 극장으로, 제2차 세계대전에 부서진 뒤 1981년 공연장으로 다시 문을 열었습니다. 앞쪽 프레스가세는 식당과 카페가 모인 거리입니다.', 'The opera house of 1880, ruined in the Second World War and reopened as a concert hall in 1981; the Fressgass in front is a street of restaurants and cafés.', 'Alte Oper Frankfurt', 20, 45, b='no', n='건물 밖과 거리는 무료입니다.|The building exterior and street are free.')),
  (11, S('젠켄베르크 자연사 박물관', 'Senckenberg Natural History Museum', '공룡 뼈 화석으로 유명한 독일의 대표 자연사 박물관입니다.', 'One of Germany’s major natural history museums, famous for its dinosaur skeletons.', 'Senckenberg Naturmuseum Frankfurt', 90, 150)),
 ],
 'dresden': [
  (12, S('알베르티눔', 'Albertinum', '브륄의 테라스 끝 미술관으로, 카스파어 다비트 프리드리히 등 19세기 이후 그림의 신 거장 미술관과 조각 전시가 있습니다.', 'The museum at the end of Brühl’s Terrace, with the Galerie Neue Meister of painting from the 19th century on, including Caspar David Friedrich, and the sculpture collection.', 'Albertinum Dresden', 90, 120, c='mon')),
  (13, S('필니츠 궁전', 'Pillnitz Palace', '엘베강 가의 여름 궁전으로, 중국풍 장식의 궁전과 정원이 있습니다. 시내에서 외륜 증기선을 타고 갈 수 있습니다.', 'A summer palace on the Elbe with chinoiserie buildings and gardens, reachable from the city by paddle steamer.', 'Schloss Pillnitz', 90, 150, n='정원은 1년 내내 열고, 궁전 박물관은 주로 봄~가을에 엽니다.|The park is open all year; the palace museums mainly open from spring to autumn.')),
  (14, S('모리츠부르크 성', 'Moritzburg Castle', '호수 가운데 선 바로크 사냥 성으로, 1973년 영화 ‘신데렐라를 위한 세 개의 개암’의 촬영지입니다.', 'A Baroque hunting lodge in the middle of a lake, the setting of the 1973 film Three Wishes for Cinderella.', 'Schloss Moritzburg', 90, 150, n='드레스덴 노이슈타트에서 버스로 갑니다.|Reached by bus from Dresden-Neustadt.')),
 ],
 'leipzig': [
  (9, S('라이프치히 동물원', 'Leipzig Zoo', '시내 북쪽의 큰 동물원으로, 열대 숲을 통째로 옮겨 놓은 실내관 ‘곤드와나랜드’가 유명합니다.', 'A large zoo just north of the centre, famous for Gondwanaland, a tropical rainforest under one roof.', 'Zoo Leipzig', 180, 300)),
  (10, S('아우어바흐스 켈러', 'Auerbachs Keller', '메들러 파사주 아래의 오래된 지하 식당으로, 괴테의 ‘파우스트’에 나오는 장면의 무대입니다.', 'The historic cellar restaurant beneath the Mädler Passage, setting of a scene in Goethe’s Faust.', 'Auerbachs Keller Leipzig', 60, 90, b='rec', n='식사할 때는 예약하는 것이 좋습니다.|Book ahead for a meal.')),
 ],
 'nuremberg': [
  (9, S('수공업자 마당', 'Handwerkerhof', '쾨니히스 문 옆 성벽 안에 중세풍 공방과 가게를 모아 놓은 작은 마을로, 뉘른베르크 소시지와 레프쿠헨 가게가 있습니다.', 'A little walled courtyard of medieval-style workshops and shops by the Königstor, with stalls for Nuremberg sausages and Lebkuchen.', 'Handwerkerhof Nürnberg', 30, 45, b='no', n='들어가는 것은 무료이고, 가게 영업 시간은 계절마다 다릅니다.|Free to enter; shop hours vary with the season.')),
 ],
 'bamberg': [
  (6, S('알텐부르크', 'Altenburg', '밤베르크 일곱 언덕 가운데 가장 높은 언덕 위 성으로, 탑에서 시내와 주변 숲이 내려다보입니다.', 'The castle on the highest of Bamberg’s seven hills, with views from its tower over the town and woods.', 'Altenburg Bamberg', 60, 90, b='no', n='걸어서 오르는 길은 약 30분입니다.|About a 30-minute walk up.')),
  (7, S('미하엘스베르크 수도원', 'Michaelsberg Abbey', '구시가 위 언덕의 옛 베네딕도회 수도원으로, 정원 테라스에서 대성당과 지붕들이 내려다보입니다.', 'The former Benedictine abbey on the hill above the old town, whose garden terrace looks over the cathedral and the rooftops.', 'Kloster Michelsberg Bamberg', 30, 45, b='no', n='수도원 성당은 오랫동안 보수 공사로 닫혀 있었으니 들어가려면 미리 확인하세요.|The abbey church has long been closed for restoration; check before planning to go inside.')),
 ],
 'regensburg': [
  (7, S('벨텐부르크 수도원과 도나우 협곡', 'Weltenburg Abbey & Danube Gorge', '도나우강 굽이의 바로크 수도원으로, 수도원 양조장의 맥주가 유명합니다. 켈하임에서 배를 타고 석회암 절벽 사이 협곡을 지나갑니다.', 'A Baroque abbey on a bend of the Danube, known for its monastery brewery; boats from Kelheim pass between the limestone cliffs of the gorge.', 'Kloster Weltenburg', 180, 300, group=('근교', 'Nearby'), n='배는 봄~가을에 다닙니다.|Boats run from spring to autumn.')),
 ],
 'garmisch-partenkirchen': [
  (6, S('린더호프 궁전', 'Linderhof Palace', '루트비히 2세의 궁전 가운데 가장 작고, 그가 살아서 완성을 본 유일한 궁전입니다. 화려한 실내와 계단식 정원, 분수가 있습니다.', 'The smallest of Ludwig II’s palaces and the only one finished in his lifetime, with lavish rooms, terraced gardens and fountains.', 'Schloss Linderhof', 120, 180, group=DAY, b='rec', n='궁전 안은 가이드 투어로 들어갑니다.|The palace interior is seen on a guided tour.')),
  (7, S('에탈 수도원과 오버아머가우', 'Ettal Abbey & Oberammergau', '1330년 세운 에탈 베네딕도회 수도원과, 벽화로 장식한 집들이 늘어서고 10년마다 수난극이 열리는 오버아머가우 마을입니다.', 'Ettal’s Benedictine abbey, founded in 1330, and the village of Oberammergau, with houses covered in murals and its Passion Play held every ten years.', 'Kloster Ettal', 120, 180, group=DAY, b='no', n='수도원 성당과 마을 산책은 무료입니다.|The abbey church and the village are free.')),
 ],
 'fussen': [
  (7, S('호에스 슐로스', 'Hohes Schloss (High Castle)', '구시가 위 후기 고딕 성으로, 안뜰 벽에 창문과 탑을 그려 넣은 눈속임 그림이 있고 미술관으로 씁니다.', 'The late-Gothic castle above the old town, its courtyard walls painted with trompe-l’œil windows and towers; it is now an art gallery.', 'Hohes Schloss Füssen', 45, 60)),
 ],
 'rudesheim': [
  (6, S('로렐라이', 'Loreley', '라인강 오른쪽 기슭에 솟은 약 132m 점판암 바위로, 뱃사람을 홀린 요정 전설의 무대입니다. 위의 전망대에서 강 굽이가 보입니다.', 'The slate rock about 132 m high on the right bank of the Rhine, home of the legend of the siren who lured boatmen; the plateau on top looks over the river bend.', 'Loreley', 90, 150, group=DAY, b='no', n='배로 지나가며 보거나 장크트고아르스하우젠에서 올라갑니다.|See it from a boat or climb up from St. Goarshausen.')),
  (7, S('바하라흐', 'Bacharach', '슈타레크 성 아래 목조 가옥이 이어진 와인 마을로, 성벽 길을 따라 걸을 수 있습니다.', 'A wine town of half-timbered houses below Stahleck Castle, with a walk along its old walls.', 'Bacharach', 90, 150, group=DAY, b='no', n=FREE)),
 ],
 'cochem': [
  (6, S('바일슈타인', 'Beilstein', '모젤강 가의 작은 마을로, 좁은 골목과 포도밭 위 메테르니히 성터가 있어 ‘모젤의 잠자는 숲속 공주’로 불립니다.', 'A tiny Moselle village of narrow lanes below the ruined Metternich Castle, nicknamed the “Sleeping Beauty of the Moselle”.', 'Beilstein Mosel', 90, 150, group=DAY, b='no', n='여름엔 코헴에서 배가 다닙니다.|In summer boats run from Cochem.')),
 ],
 'stuttgart': [
  (8, S('호엔촐레른 성', 'Hohenzollern Castle', '호엔촐레른 가문의 발상지 산(855m) 위에 19세기에 다시 지은 성으로, 멀리서 보면 구름 위에 뜬 듯한 모습입니다.', 'The 19th-century castle on Mount Hohenzollern (855 m), ancestral seat of the Hohenzollern dynasty, which seems to float above the clouds from afar.', 'Burg Hohenzollern', 150, 240, group=DAY)),
 ],
 'heidelberg': [
  (8, S('슈베칭겐 궁전', 'Schwetzingen Palace', '팔츠 선제후의 여름 궁전으로, 넓은 정원 안에 이슬람 사원 모양의 정원 건물 등 볼거리가 많습니다.', 'The summer residence of the Electors Palatine, set in vast gardens with follies including a garden mosque.', 'Schloss Schwetzingen', 120, 180, group=DAY)),
 ],
 'bremen': [
  (7, S('브레머하펜', 'Bremerhaven', '브레멘의 항구 도시로, 경도 8도선을 따라 세계 기후를 체험하는 ‘기후의 집 8° 동경’과 이민자들의 여정을 보여 주는 독일 이민 박물관이 있습니다.', 'Bremen’s port city, with the Klimahaus 8° Ost, a journey through world climates along the 8th meridian, and the German Emigration Center.', 'Klimahaus Bremerhaven', 300, 420, group=DAY, n='브레멘에서 기차로 약 40분입니다.|About 40 minutes by train from Bremen.')),
 ],
}


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


def place(c, cid, steps):
    new = {n for n, _ in ADD[cid]}
    o = [x for x in groups_of(c, cid) if x[0] not in new]
    for after, items in steps:
        o = ins(o, after, items)
    return reorder(c, cid, o)


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, VF)
    c = place(c, 'berlin', [(6, [(20, 'same')]), (10, [(19, 'same'), (21, 'same')])])
    c = place(c, 'hamburg', [(6, [(12, 'same')]), (2, [(13, 'same')]), (8, [(14, 'same')]), (11, [(15, 'same')])])
    c = place(c, 'munich', [(6, [(17, 'same')]), (12, [(18, 'same')]), (8, [(19, 'same')])])
    c = place(c, 'frankfurt', [(7, [(10, None)]), (4, [(11, None)])])
    c = place(c, 'dresden', [(4, [(12, 'same')]), (9, [(13, DAY), (14, DAY)])])
    c = place(c, 'leipzig', [(3, [(10, None)]), (4, [(9, None)])])
    c = place(c, 'nuremberg', [(8, [(9, None)])])
    c = place(c, 'bamberg', [(3, [(7, None), (6, None)])])
    c = place(c, 'regensburg', [(5, [(7, 'same')])])
    c = place(c, 'garmisch-partenkirchen', [(5, [(6, DAY), (7, DAY)])])
    c = place(c, 'fussen', [(5, [(7, None)])])
    c = place(c, 'rudesheim', [(5, [(6, 'same'), (7, 'same')])])
    c = place(c, 'cochem', [(4, [(6, 'same')])])
    c = place(c, 'stuttgart', [(7, [(8, 'same')])])
    c = place(c, 'heidelberg', [(3, [(8, DAY)])])
    c = place(c, 'bremen', [(6, [(7, DAY)])])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
