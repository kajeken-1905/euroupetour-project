#!/usr/bin/env python3
"""Germany 2nd pass, new cities — south (2026-11-25, user picked): Karlsruhe, Baden-Baden, Ulm (+Tübingen) in
Baden-Württemberg; Augsburg, Landshut, Chiemsee (Prien), Bayreuth, Nördlingen (+Dinkelsbühl), Passau, Oberstdorf in Bavaria.
Facts (Wikipedia en/de): Karlsruhe founded 1715 as a fan-shaped city around the palace (Badisches Landesmuseum), ZKM,
pyramid on the Marktplatz over the founder's tomb; Baden-Baden one of the Great Spa Towns of Europe (UNESCO 2021),
Friedrichsbad Roman-Irish bath (1877), Caracalla Spa, Kurhaus and casino, Lichtentaler Allee, Altes Schloss ruin; Ulm
Minster tallest church steeple in the world (161.5 m, 768 steps), Fishermen's Quarter and the leaning Schiefes Haus,
town hall astronomical clock, Einstein born 1879; Tübingen castle Hohentübingen, punts (Stocherkahn), Hölderlin Tower;
Augsburg Fuggerei 1521 oldest social housing still in use (rent €0.88 a year), Renaissance town hall and Golden Hall by
Elias Holl, cathedral Prophets windows, Schaezlerpalais Rococo ballroom, Augsburger Puppenkiste, water management UNESCO
2019; Landshut St Martin's tallest brick church tower in the world (~130 m), Trausnitz Castle, Landshut Wedding every four
years; Herrenchiemsee New Palace (Ludwig II, modelled on Versailles), Fraueninsel Benedictine nuns, Chiemsee-Bahn steam
tram (1887, summer); Bayreuth Margravial Opera House UNESCO 2012, Festspielhaus (Wagner festival July–August), Wahnfried,
Hermitage, New Palace; Nördlingen in the Ries impact crater (~15 million years), fully walkable covered wall walk,
Daniel tower (~90 m, watchman's call), RiesKrater-Museum; Dinkelsbühl intact walled town; Passau cathedral with one of
the world's largest church organs, three rivers Danube/Inn/Ilz, Veste Oberhaus; Oberstdorf Nebelhorn cable car (2,224 m),
Breitachklamm gorge, Heini-Klopfer ski-flying hill, Freibergsee. Times via Transitous (2026-11-25): Frankfurt–Karlsruhe
~65 (ICE), Stuttgart–Karlsruhe ~50, Karlsruhe–Baden-Baden 20, Stuttgart–Ulm 51, Munich–Ulm ~80, Stuttgart–Tübingen ~55,
Munich–Augsburg 35, Munich–Landshut ~50, Munich–Prien ~60, Munich–Passau ~2 h 20 via Landshut, Regensburg–Passau ~70
(both currently with rail-replacement buses at times), Nuremberg–Bayreuth 61, Augsburg–Nördlingen ~70, Nördlingen–
Dinkelsbühl bus ~50, Munich–Oberstdorf ~2 h 40 (via Kempten), Salzburg–Prien ~50. Run once."""
from de_c_common import H, R, C, day, run, FREE, DAY, NEAR, FIRST

BW = '바덴뷔르템베르크'
BY = '바이에른'
FKB = "['Karlsruhe/Baden-Baden (FKB)', '카를스루에/바덴바덴 공항 (FKB)']"
STR = "['Stuttgart (STR)', '슈투트가르트 공항 (STR)', '슈투트가르트|Stuttgart']"
NUE = "['Nürnberg (NUE)', '뉘른베르크 공항 (NUE)', '뉘른베르크|Nuremberg']"
FMM = "['Memmingen (FMM)', '메밍겐 공항 (FMM)', '저가 항공|low-cost flights']"
WORKS = '공사로 대체 버스가 다닐 때가 있으니 DB 앱에서 확인하세요|rail-replacement buses at times; check the DB app'

CITIES = [
    C(id='karlsruhe', group_title=BW, after='stuttgart', ko='카를스루에', en='Karlsruhe', native='Karlsruhe', lat=49.0069, lng=8.4037,
      blurb=['1715년 궁전을 중심으로 길이 부챗살처럼 뻗도록 계획한 도시로, ‘부채꼴 도시’라 불립니다. 궁전 박물관과 미디어 아트 센터 ZKM이 볼거리입니다.',
             'A city planned in 1715 with its streets fanning out from the palace, hence “the fan city”; the palace museum and the ZKM media art centre are the highlights.'],
      highlights=[
          H('카를스루에 궁전과 바덴 주립 박물관', 'Karlsruhe Palace & Baden State Museum', '부채꼴 도시의 중심 궁전으로, 박물관이 들어 있고 탑에 오르면 길들이 부챗살처럼 뻗은 모습이 보입니다.', 'The palace at the hub of the fan, housing a museum; from its tower the streets radiate like spokes.', 'Schloss Karlsruhe', 90, 120, c='mon'),
          H('ZKM 미디어 아트 센터', 'ZKM Center for Art and Media', '옛 무기 공장 건물에 자리한 미디어·디지털 아트 센터입니다.', 'A centre for media and digital art in a former munitions factory.', 'ZKM Karlsruhe', 90, 150, c='mon'),
          H('마르크트 광장과 피라미드', 'Marktplatz & Pyramid', '도시를 세운 카를 빌헬름 변경백의 무덤 위에 세운 사암 피라미드가 있는 광장입니다.', 'The square with the sandstone pyramid over the tomb of the city’s founder, Margrave Charles William.', 'Pyramide Karlsruhe', 15, 20, b='no', n=FREE),
          H('궁전 정원과 식물원', 'Palace gardens & Botanical Garden', '궁전 뒤로 넓게 펼쳐진 정원과 온실이 있는 식물원입니다.', 'The broad gardens behind the palace and the botanical garden with its glasshouses.', 'Schlossgarten Karlsruhe', 45, 90, b='no', n='정원은 무료이고 온실은 유료입니다.|The gardens are free; the glasshouses are ticketed.'),
      ],
      hubs=f"    air: [{FKB}, FRA()],\n    rail: [['Karlsruhe Hbf', '카를스루에 중앙역']],\n",
      itinerary=[3, 1, 4, 2],
      season='봄~가을이 궁전 정원에 좋고, 8월엔 궁전 빛 축제가 열립니다.|Spring to autumn for the palace gardens; the palace light festival is in August.',
      stay=[('시내 중심', 'City centre', 'Marktplatz Karlsruhe', FIRST, '궁전과 광장이 걸어서 닿고 트램이 모입니다.|The palace and square on foot, with trams meeting here.')],
      routes=[R('frankfurt', 'karlsruhe', 'train', 65), R('stuttgart', 'karlsruhe', 'train', 50)],
      transit=dict(modes=['walk', 'tram', 'train'], ko='트램이 촘촘해 시내와 근교를 잇습니다.', en='A dense tram network links the city and region.')),
    C(id='baden-baden', group_title=BW, after='karlsruhe', ko='바덴바덴', en='Baden-Baden', native='Baden-Baden', lat=48.7606, lng=8.2398,
      blurb=['검은 숲 북쪽 끝의 온천 도시로, 19세기 유럽 상류층이 모였던 온천장과 카지노가 남아 ‘유럽의 대온천 도시들’로 유네스코 세계유산에 올랐습니다.',
             'A spa town at the northern edge of the Black Forest, whose baths and casino drew 19th-century European society; it is listed with the Great Spa Towns of Europe as a UNESCO World Heritage Site.'],
      highlights=[
          H('프리드리히스바트', 'Friedrichsbad', '1877년 문을 연 로마·아일랜드식 목욕탕으로, 정해진 순서대로 여러 탕을 거칩니다. 탕 안에서는 옷을 입지 않습니다.', 'A Roman-Irish bath opened in 1877, taken as a set sequence of pools and steam rooms; bathing is nude.', 'Friedrichsbad Baden-Baden', 150, 180),
          H('카라칼라 온천', 'Caracalla Spa', '실내외 온천 수영장과 사우나가 있는 온천 시설로, 수영복을 입고 들어갑니다.', 'Thermal baths with indoor and outdoor pools and saunas; swimwear is worn.', 'Caracalla Therme', 120, 180),
          H('쿠어하우스와 카지노', 'Kurhaus & Casino', '19세기 온천장 건물 안 화려한 카지노로, 낮에는 가이드 투어로 둘러봅니다.', 'The opulent casino inside the 19th-century Kurhaus, shown on daytime guided tours.', 'Casino Baden-Baden', 45, 60, n='카지노 입장엔 신분증과 복장 규정이 있습니다.|ID and a dress code apply in the casino.'),
          H('리히텐탈러 알레', 'Lichtentaler Allee', '오스강을 따라 이어진 공원 산책길로, 부르다 미술관이 있습니다.', 'The park avenue along the River Oos, with the Museum Frieder Burda.', 'Lichtentaler Allee', 45, 90, b='no', n=FREE),
          H('옛 성 호엔바덴', 'Old Castle (Hohenbaden)', '언덕 위 성터로, 라인 평야와 검은 숲이 내려다보입니다.', 'The hilltop castle ruin with views over the Rhine plain and the Black Forest.', 'Altes Schloss Baden-Baden', 90, 120, b='no', n=FREE),
      ],
      hubs=f"    air: [{FKB}],\n    rail: [['Baden-Baden', '바덴바덴역', '시내까지 약 4km, 버스|about 4 km to the centre, by bus']],\n",
      itinerary=[4, 3, 1, 2, 5],
      season='온천은 1년 내내 좋고, 봄·가을엔 산책길과 숲이 아름답습니다.|The baths are good all year; spring and autumn for the walks and woods.',
      stay=[('온천 지구', 'Spa quarter', 'Kurhaus Baden-Baden', FIRST, '온천과 카지노, 산책길이 걸어서 닿습니다.|The baths, casino and avenue on foot.')],
      routes=[R('karlsruhe', 'baden-baden', 'train', 20)],
      transit=dict(modes=['walk', 'bus'], ko='시내는 걸어서 다니고, 역과 시내는 버스로 잇습니다.', en='Walk the town; buses link the station and centre.')),
    C(id='ulm', group_title=BW, after='konstanz', ko='울름', en='Ulm', native='Ulm', lat=48.3984, lng=9.9916,
      blurb=['세계에서 가장 높은 교회 첨탑(161.5m)이 있는 도나우강 가의 도시로, 아인슈타인이 1879년 이곳에서 태어났습니다. 근교 튀빙겐은 강가에 목조 가옥이 늘어선 대학 도시입니다.',
             'A Danube city with the tallest church steeple in the world (161.5 m), where Einstein was born in 1879; nearby Tübingen is a university town of half-timbered houses along its river.'],
      highlights=[
          H('울름 대성당', 'Ulm Minster', '세계에서 가장 높은 교회 첨탑(161.5m)으로, 768계단을 올라 전망대에서 알프스까지 보일 때가 있습니다.', 'The tallest church steeple in the world (161.5 m); climb its 768 steps to a viewing gallery that can see the Alps on clear days.', 'Ulmer Münster', 60, 120, n='성당은 무료이고 탑은 유료입니다.|The church is free; the tower is ticketed.'),
          H('어부 지구와 기울어진 집', 'Fishermen’s Quarter & Leaning House', '블라우강 물길 가에 목조 가옥이 늘어선 동네로, 크게 기운 ‘기울어진 집’이 호텔로 쓰입니다.', 'Half-timbered houses along the channels of the Blau, including the steeply leaning Schiefes Haus, now a hotel.', 'Schiefes Haus Ulm', 30, 45, b='no', n=FREE),
          H('울름 시청사', 'Ulm Town Hall', '벽화로 덮인 정면에 천문 시계가 달린 시청입니다.', 'The town hall with painted façades and an astronomical clock.', 'Rathaus Ulm', 15, 20, b='no', n=FREE),
          H('도나우 강변과 성벽', 'Danube bank & city wall', '도나우강을 따라 옛 성벽 위를 걷는 산책길입니다.', 'A walk along the old city wall above the Danube.', 'Stadtmauer Ulm', 30, 45, b='no', n=FREE),
          H('튀빙겐 구시가', 'Tübingen old town', '네카어강 가에 목조 가옥과 횔덜린 탑이 늘어선 대학 도시로, 나룻배(슈토허칸)를 타고 강을 내려가고 언덕 위 호엔튀빙겐 성에 오릅니다.', 'A university town of half-timbered houses and the Hölderlin Tower on the Neckar; take a punt (Stocherkahn) and climb to Hohentübingen Castle.', 'Hölderlinturm Tübingen', 180, 240, group=DAY, b='no', n='슈투트가르트에서 기차로 약 1시간입니다.|About 1 hr by train from Stuttgart.'),
      ],
      hubs=f"    air: [{STR}, MUC()],\n    rail: [['Ulm Hbf', '울름 중앙역'], ['Tübingen Hbf', '튀빙겐 중앙역']],\n",
      itinerary={'days': [['', 1, 3, 2, 4]], 'trips': [['튀빙겐|Tübingen', 5]]},
      season='탑 전망은 맑은 날이 좋고, 봄~가을엔 튀빙겐 나룻배가 다닙니다.|Pick a clear day for the tower; Tübingen’s punts run spring to autumn.',
      stay=[('대성당 주변', 'Around the minster', 'Münsterplatz Ulm', FIRST, '대성당과 어부 지구, 역이 걸어서 닿습니다.|The minster, Fishermen’s Quarter and station on foot.')],
      routes=[R('stuttgart', 'ulm', 'train', 50), R('munich', 'ulm', 'train', 80)],
      transit=dict(modes=['walk', 'tram', 'bus'], ko='구시가는 걸어서 다닙니다.', en='Walk the old town.'),
      daytrips=[day('stuttgart', 'ulm', '세계에서 가장 높은 대성당 첨탑에 오르고 어부 지구를 걷습니다.|Climb the world’s tallest church steeple and stroll the Fishermen’s Quarter.')]),
    # —— Bavaria ——
    C(id='augsburg', group_title=BY, after='munich', ko='아우크스부르크', en='Augsburg', native='Augsburg', lat=48.3705, lng=10.8978,
      blurb=['로마 시대에 세운 바이에른의 옛 도시로, 거상 푸거 가문이 1521년 세운 세계에서 가장 오래된 사회 주택 푸거라이가 지금도 쓰입니다. 물 관리 시설이 유네스코 세계유산입니다.',
             'An old Bavarian city founded by the Romans, where the Fuggerei, the social housing built by the merchant Fugger family in 1521, is the oldest still in use; its historic water management system is a UNESCO World Heritage Site.'],
      highlights=[
          H('푸거라이', 'Fuggerei', '1521년 세운 사회 주택 단지로, 지금도 1년 집세 0.88유로에 주민이 삽니다. 박물관 집을 둘러봅니다.', 'The social housing estate founded in 1521, where residents still pay an annual rent of €0.88; see the museum flats.', 'Fuggerei Augsburg', 45, 60),
          H('시청사와 황금의 방', 'Town Hall & Golden Hall', '엘리아스 홀이 지은 르네상스 시청으로, 금빛 천장의 ‘황금의 방’이 있습니다.', 'Elias Holl’s Renaissance town hall, with the gilded Golden Hall.', 'Goldener Saal Augsburg', 30, 45),
          H('아우크스부르크 대성당', 'Augsburg Cathedral', '‘예언자의 창’ 등 매우 오래된 스테인드글라스가 남은 대성당입니다.', 'The cathedral with some of the oldest surviving stained glass, the Prophets Windows.', 'Augsburger Dom', 30, 45, b='no', n=FREE),
          H('막시밀리안 거리와 섀츨러 궁전', 'Maximilianstrasse & Schaezlerpalais', '분수와 귀족 저택이 늘어선 큰길로, 섀츨러 궁전엔 로코코 무도회장과 미술관이 있습니다.', 'The grand street of fountains and patrician houses; the Schaezlerpalais has a Rococo ballroom and art gallery.', 'Schaezlerpalais Augsburg', 60, 90, c='mon'),
          H('아우크스부르크 인형극 박물관', 'Augsburger Puppenkiste Museum', 'TV로 유명한 마리오네트 인형극단의 인형을 전시하는 박물관입니다.', 'The museum of the marionette theatre made famous on television.', 'Augsburger Puppenkiste Museum', 45, 60, c='mon'),
      ],
      hubs="    air: [MUC()],\n    rail: [['Augsburg Hbf', '아우크스부르크 중앙역']],\n",
      itinerary=[2, 1, 4, 3, 5],
      season='1년 내내 다닐 수 있고, 12월엔 시청 앞 크리스마스 시장이 열립니다.|Fine all year; a Christmas market fills the town-hall square in December.',
      stay=[('시청 주변', 'Around the town hall', 'Rathausplatz Augsburg', FIRST, '시청과 큰길, 푸거라이가 걸어서 닿습니다.|The town hall, main street and Fuggerei on foot.')],
      routes=[R('munich', 'augsburg', 'train', 35)],
      transit=dict(modes=['walk', 'tram', 'bus'], ko='구시가는 걸어서 다니고, 역과 시내는 트램이 잇습니다.', en='Walk the old town; trams link the station and centre.'),
      daytrips=[day('munich', 'augsburg', '세계에서 가장 오래된 사회 주택 푸거라이와 황금의 방을 봅니다.|The Fuggerei, the world’s oldest social housing, and the Golden Hall.')]),
    C(id='landshut', group_title=BY, after='augsburg', ko='란츠후트', en='Landshut', native='Landshut', lat=48.5372, lng=12.1522,
      blurb=['이자르강 가의 니더바이에른 도시로, 세계에서 가장 높은 벽돌 교회 탑이 고딕 박공 집 거리 위로 솟아 있습니다. 4년마다 중세 결혼식을 재현하는 축제가 열립니다.',
             'A Lower Bavarian town on the Isar, where the world’s tallest brick church tower rises above a street of Gothic gabled houses; every four years it re-enacts a medieval royal wedding.'],
      highlights=[
          H('성 마르틴 교회', 'St Martin’s Church', '높이 약 130m로 세계에서 가장 높은 벽돌 교회 탑이 있는 고딕 교회입니다.', 'A Gothic church with the tallest brick church tower in the world, about 130 m high.', 'St. Martin Landshut', 20, 30, b='no', n=FREE),
          H('구시가 거리', 'Altstadt street', '색색의 고딕 박공 집이 이어진 넓은 중심 거리입니다.', 'The broad main street of colourful Gothic gabled houses.', 'Altstadt Landshut', 30, 45, b='no', n=FREE),
          H('트라우스니츠 성', 'Trausnitz Castle', '언덕 위 비텔스바흐 가문의 성으로, 가이드 투어와 진귀한 수집품 방이 있습니다.', 'The Wittelsbach castle on the hill above the town, with guided tours and a cabinet of curiosities.', 'Burg Trausnitz', 60, 90, c='mon'),
          H('성령 교회', 'Holy Spirit Church', '구시가 끝의 고딕 교회로, 전시장으로도 쓰입니다.', 'The Gothic church at the end of the old town, also used for exhibitions.', 'Heilig-Geist-Kirche Landshut', 15, 20),
      ],
      hubs="    air: [MUC('뮌헨 (약 35km)|Munich (about 35 km)')],\n    rail: [['Landshut (Bay) Hbf', '란츠후트 중앙역', '구시가까지 버스|bus to the old town']],\n",
      itinerary=[2, 1, 4, 3],
      season='4년마다 여름에 중세 결혼식 축제가 열립니다.|The medieval wedding festival comes round every four years in summer.',
      stay=[('구시가', 'Old town', 'Altstadt Landshut', FIRST, '교회와 박공 거리가 바로 앞이고 성까지 걸어서 오릅니다.|The church and street on your doorstep, with the castle a walk uphill.')],
      routes=[R('munich', 'landshut', 'train', 50)],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다니고, 역에서는 버스를 탑니다.', en='Walk the old town; take a bus from the station.'),
      daytrips=[day('munich', 'landshut', '세계에서 가장 높은 벽돌 교회 탑과 고딕 박공 거리, 언덕 위 성을 봅니다.|The world’s tallest brick church tower, the Gothic main street and the hilltop castle.')]),
    C(id='chiemsee', group_title=BY, after='landshut', ko='킴제', en='Chiemsee', native='Chiemsee (Prien)', lat=47.8565, lng=12.3503,
      blurb=['‘바이에른의 바다’라 불리는 큰 호수로, 섬 위에 루트비히 2세가 베르사유를 본떠 지은 헤렌킴제 궁전과 수녀원 섬이 있습니다. 호숫가 마을 프린이 배와 기차의 거점입니다.',
             'The large lake called the “Bavarian Sea”, with Ludwig II’s Versailles-inspired Herrenchiemsee Palace on one island and a convent on another; the lakeside town of Prien is the base for boats and trains.'],
      highlights=[
          H('헤렌킴제 신궁전', 'Herrenchiemsee New Palace', '루트비히 2세가 베르사유를 본떠 섬 위에 지은 궁전으로, 거울의 방이 유명합니다. 배에서 내려 숲길을 걷거나 마차를 탑니다.', 'Ludwig II’s island palace modelled on Versailles, famous for its Hall of Mirrors; from the pier walk through the woods or take a carriage.', 'Schloss Herrenchiemsee', 180, 240, b='rec', n='궁전 안은 가이드 투어로 들어갑니다.|The palace interior is seen on guided tours.'),
          H('프라우엔 섬', 'Fraueninsel', '베네딕도회 수녀원과 어부 마을이 있는 작은 섬으로, 수녀원에서 만든 술과 훈제 생선이 유명합니다.', 'A small island of a Benedictine convent and a fishing village, known for the nuns’ liqueurs and smoked fish.', 'Fraueninsel Chiemsee', 90, 120, b='no', n='섬은 무료이고 배는 유료입니다.|The island is free; the boat is not.'),
          H('킴제 증기 기관차', 'Chiemsee-Bahn', '1887년부터 프린역과 호숫가 선착장을 잇는 작은 증기 열차입니다.', 'The little steam tram that has linked Prien station and the lake pier since 1887.', 'Chiemsee-Bahn Prien', 15, 20, n='여름철(5월~9월 무렵)에만 다닙니다.|Runs in summer only (about May–September).'),
          H('캄펜반트 케이블카', 'Kampenwand cable car', '아샤우에서 캄펜반트산에 올라 킴제 호수와 알프스를 내려다봅니다.', 'From Aschau up the Kampenwand for views over the Chiemsee and the Alps.', 'Kampenwandbahn Aschau', 180, 240, group=DAY),
      ],
      hubs="    air: [MUC(), SZG()],\n    rail: [['Prien am Chiemsee', '프린 암 킴제역']],\n    port: [['Prien-Stock', '프린-슈톡 선착장', '섬행 배|boats to the islands']],\n",
      itinerary={'days': [['', 3, 1, 2]], 'trips': [['캄펜반트|Kampenwand', 4]]},
      season='배가 자주 다니는 5~10월이 좋습니다. 겨울엔 배 편수가 줄어듭니다.|May–October, when boats are frequent; winter services are reduced.',
      stay=[('프린', 'Prien', 'Prien am Chiemsee', FIRST, '역과 선착장이 있어 배·기차 모두 편합니다.|The station and pier make boats and trains easy.')],
      routes=[R('munich', 'chiemsee', 'train', 60, '프린 암 킴제역|Prien am Chiemsee'), R('salzburg', 'chiemsee', 'train', 50, '프린 암 킴제역|Prien am Chiemsee')],
      transit=dict(modes=['walk', 'ferry', 'train', 'bus'], ko='섬은 프린-슈톡 선착장에서 배를 탑니다.', en='Boats to the islands leave from Prien-Stock.'),
      daytrips=[day('munich', 'chiemsee', '배로 헤렌킴제 궁전과 프라우엔 섬을 둘러봅니다.|By boat to Herrenchiemsee Palace and the Fraueninsel.')]),
    C(id='bayreuth', group_title=BY, after='bamberg', ko='바이로이트', en='Bayreuth', native='Bayreuth', lat=49.9456, lng=11.5713,
      blurb=['바그너가 자기 오페라를 위해 지은 축제 극장에서 해마다 여름 바그너 축제가 열리는 도시로, 유네스코 세계유산인 바로크 변경백 오페라 극장이 있습니다.',
             'The city where Wagner built a festival theatre for his own operas, home to the summer Wagner festival, and to the Baroque Margravial Opera House, a UNESCO World Heritage Site.'],
      highlights=[
          H('변경백 오페라 극장', 'Margravial Opera House', '나무와 금박으로 꾸민 18세기 바로크 오페라 극장으로, 유네스코 세계유산입니다.', 'An 18th-century Baroque opera house of carved wood and gilding; a UNESCO World Heritage Site.', 'Markgräfliches Opernhaus Bayreuth', 45, 60, c='mon'),
          H('바그너 축제 극장', 'Bayreuth Festival Theatre', '바그너가 자기 작품을 위해 지은 언덕 위 극장으로, 7~8월 축제 때만 공연하고 다른 때엔 가이드 투어가 있습니다.', 'The hilltop theatre Wagner built for his works; performances only during the July–August festival, with guided tours at other times.', 'Bayreuther Festspielhaus', 60, 75, b='rec'),
          H('반프리트 리하르트 바그너 박물관', 'Wahnfried – Richard Wagner Museum', '바그너가 살던 집과 박물관으로, 정원에 그의 무덤이 있습니다.', 'Wagner’s home and museum, with his grave in the garden.', 'Haus Wahnfried', 60, 90, c='mon'),
          H('신궁전', 'New Palace', '빌헬미네 변경백 부인이 꾸민 로코코 궁전입니다.', 'The Rococo palace decorated for Margravine Wilhelmine.', 'Neues Schloss Bayreuth', 45, 60, c='mon'),
          H('에레미타주', 'Hermitage', '시내 동쪽의 공원과 옛 궁전으로, 조개껍데기로 장식한 동굴과 분수가 있습니다.', 'The park and palace east of the city, with a shell grotto and fountains.', 'Eremitage Bayreuth', 60, 90, b='no', n='공원은 무료이고 궁전은 유료입니다.|The park is free; the palace is ticketed.'),
      ],
      hubs=f"    air: [{NUE}],\n    rail: [['Bayreuth Hbf', '바이로이트 중앙역']],\n",
      itinerary=[1, 4, 3, 2, 5],
      season='7~8월 바그너 축제 땐 숙소가 매우 붐빕니다. 축제 표는 따로 추첨으로 팝니다.|Accommodation is very tight during the July–August Wagner festival; festival tickets are sold separately by ballot.',
      stay=[('구시가', 'Old town', 'Maximilianstraße Bayreuth', FIRST, '오페라 극장과 궁전이 걸어서 닿습니다.|The opera house and palaces on foot.')],
      routes=[R('nuremberg', 'bayreuth', 'train', 60)],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다니고, 축제 극장과 에레미타주는 버스로 갑니다.', en='Walk the old town; buses run to the Festival Theatre and the Hermitage.'),
      daytrips=[day('nuremberg', 'bayreuth', '바로크 변경백 오페라 극장과 바그너의 집을 봅니다.|The Baroque Margravial Opera House and Wagner’s home.')]),
    C(id='nordlingen', group_title=BY, after='rothenburg', ko='뇌르틀링겐', en='Nördlingen', native='Nördlingen', lat=48.8510, lng=10.4886,
      blurb=['약 1,500만 년 전 운석이 떨어져 생긴 리스 분지 한가운데 둥근 성벽으로 둘러싸인 로맨틱 가도의 도시입니다. 근교 딩켈스뷜도 성벽이 온전히 남은 중세 도시입니다.',
             'A Romantic Road town ringed by circular walls in the middle of the Ries, a crater left by a meteorite some 15 million years ago; nearby Dinkelsbühl is another medieval town with its walls intact.'],
      highlights=[
          H('성벽 산책', 'Town wall walk', '지붕 덮인 성벽 통로를 따라 도시를 한 바퀴 걸을 수 있는 독일에서 드문 곳입니다.', 'One of the few places in Germany where you can walk the whole way round the town on its covered wall walk.', 'Stadtmauer Nördlingen', 60, 90, b='no', n=FREE),
          H('다니엘 탑', 'Daniel tower', '성 게오르크 교회의 약 90m 탑으로, 꼭대기에서 둥근 도시와 운석 분지가 보입니다. 밤마다 탑지기가 외치는 소리가 전해집니다.', 'The roughly 90 m tower of St George’s Church, with a view of the circular town and the crater; a watchman still calls out from it at night.', 'Daniel Nördlingen', 45, 60),
          H('리스 운석 분지 박물관', 'RiesKrater Museum', '운석 충돌로 생긴 분지를 설명하는 박물관으로, 달 암석도 전시합니다.', 'The museum explaining the meteorite crater, with a moon rock on display.', 'RiesKraterMuseum Nördlingen', 60, 90, c='mon'),
          H('딩켈스뷜 구시가', 'Dinkelsbühl old town', '성벽과 탑, 색색의 목조 가옥이 온전히 남은 로맨틱 가도의 중세 도시입니다.', 'A Romantic Road town whose walls, towers and colourful half-timbered houses survive intact.', 'Altstadt Dinkelsbühl', 120, 180, group=DAY, b='no', n='뇌르틀링겐에서 버스로 약 50분입니다.|About 50 min by bus from Nördlingen.'),
      ],
      hubs="    air: [MUC(), " + NUE + "],\n    rail: [['Nördlingen', '뇌르틀링겐역']],\n",
      itinerary={'days': [['', 2, 1, 3]], 'trips': [['딩켈스뷜|Dinkelsbühl', 4]]},
      season='봄~가을이 성벽 산책에 좋습니다.|Spring to autumn for the wall walk.',
      stay=[('구시가', 'Old town', 'Marktplatz Nördlingen', FIRST, '성벽 안에 묵으며 탑과 박물관을 걸어서 봅니다.|Stay inside the walls, with the tower and museum on foot.')],
      routes=[R('augsburg', 'nordlingen', 'train', 70)],
      transit=dict(modes=['walk', 'bus'], ko='성벽 안은 걸어서 다니고, 딩켈스뷜은 버스로 갑니다.', en='Walk inside the walls; take a bus to Dinkelsbühl.')),
    C(id='passau', group_title=BY, after='regensburg', ko='파사우', en='Passau', native='Passau', lat=48.5748, lng=13.4609,
      blurb=['도나우·인·일츠 세 강이 만나는 곳에 자리한 도시로, 바로크 대성당에 세계에서 손꼽히게 큰 교회 오르간이 있습니다. 강 건너 언덕의 요새에서 세 강이 내려다보입니다.',
             'A city where three rivers, the Danube, Inn and Ilz, meet; its Baroque cathedral has one of the world’s largest church organs, and the fortress on the hill opposite looks over all three rivers.'],
      highlights=[
          H('성 슈테판 대성당', 'St Stephen’s Cathedral', '세계에서 손꼽히게 큰 교회 오르간이 있는 바로크 대성당으로, 낮 오르간 연주회가 열립니다.', 'The Baroque cathedral with one of the world’s largest church organs, heard in midday organ concerts.', 'Dom St. Stephan Passau', 30, 60, b='no', n='성당은 무료이고 오르간 연주회는 유료이며 주로 5~12월에 열립니다.|Free; the organ concerts are ticketed and mainly run May–December.'),
          H('세 강이 만나는 곳', 'Three Rivers Corner', '구시가 끝에서 색이 다른 도나우·인·일츠강이 하나로 합쳐지는 모습을 봅니다.', 'At the tip of the old town, watch the differently coloured Danube, Inn and Ilz flow together.', 'Dreiflüsseeck Passau', 20, 30, b='no', n=FREE),
          H('베스테 오버하우스', 'Veste Oberhaus', '강 건너 언덕 위 요새와 박물관으로, 구시가와 세 강이 내려다보입니다.', 'The fortress and museum on the hill across the river, with views over the old town and the three rivers.', 'Veste Oberhaus Passau', 60, 90),
          H('구시가와 횔가세', 'Old town & Höllgasse', '강 사이 좁은 반도의 바로크 구시가로, 화가 골목 횔가세가 있습니다.', 'The Baroque old town on its narrow peninsula, with the artists’ lane, Höllgasse.', 'Höllgasse Passau', 45, 60, b='no', n=FREE),
          H('도나우 유람선', 'Danube cruise', '세 강을 도는 짧은 유람선부터 오스트리아 린츠까지 가는 배가 있습니다.', 'Boats from short three-rivers tours to services down the Danube to Linz in Austria.', 'Schiffsanlegestelle Passau', 45, 300, n='배는 주로 봄~가을에 다닙니다.|Boats run mainly from spring to autumn.'),
      ],
      hubs="    air: [MUC(), ['Linz (LNZ)', '린츠 공항 (LNZ)', '오스트리아 린츠|Linz, Austria']],\n    rail: [['Passau Hbf', '파사우 중앙역']],\n    port: [['Passau Anlegestelle', '파사우 선착장', '도나우 유람선|Danube boats']],\n",
      itinerary=[1, 4, 2, 5, 3],
      season='5~10월에 배가 자주 다니고 오르간 연주회가 열립니다.|May–October for frequent boats and the organ concerts.',
      stay=[('구시가', 'Old town', 'Domplatz Passau', FIRST, '대성당과 강변, 선착장이 걸어서 닿습니다.|The cathedral, riverbanks and piers on foot.')],
      routes=[R('munich', 'passau', 'train', 140, '란츠후트 경유·' + WORKS.split('|')[0] + '|via Landshut; ' + WORKS.split('|')[1]), R('regensburg', 'passau', 'train', 70, WORKS)],
      transit=dict(modes=['walk', 'bus', 'ferry'], ko='구시가는 걸어서 다니고, 오버하우스는 셔틀버스나 계단으로 오릅니다.', en='Walk the old town; reach the Oberhaus by shuttle bus or on foot.')),
    C(id='oberstdorf', group_title=BY, after='fussen', ko='오버스트도르프', en='Oberstdorf', native='Oberstdorf', lat=47.4099, lng=10.2797,
      blurb=['알고이 알프스의 독일 최남단 휴양 마을로, 케이블카로 네벨호른에 오르고 깊은 협곡을 걷습니다. 스키 점프 대회와 스키 플라잉 경기장으로도 유명합니다.',
             'Germany’s southernmost resort, in the Allgäu Alps: ride the cable car up the Nebelhorn and walk a deep gorge; it is also famous for its ski jumps and ski-flying hill.'],
      highlights=[
          H('네벨호른 케이블카', 'Nebelhorn cable car', '해발 2,224m 네벨호른 정상까지 오르는 케이블카로, 알프스 봉우리가 사방으로 보입니다.', 'The cable car to the 2,224 m summit of the Nebelhorn, with Alpine peaks all around.', 'Nebelhornbahn', 120, 240),
          H('브라이타흐 협곡', 'Breitachklamm', '중부 유럽에서 손꼽히게 깊은 바위 협곡으로, 겨울엔 얼음 기둥이 생깁니다.', 'One of the deepest rock gorges in Central Europe, hung with icicles in winter.', 'Breitachklamm', 90, 120, n='눈사태나 홍수 위험이 있으면 닫습니다.|Closes when there is a risk of avalanches or floods.'),
          H('하이니 클로퍼 스키 플라잉 경기장', 'Heini-Klopfer ski-flying hill', '거대한 스키 플라잉 점프대로, 리프트를 타고 전망대에 올라 아래를 내려다봅니다.', 'A huge ski-flying hill, with a lift up to a viewing platform at the top.', 'Heini-Klopfer-Skiflugschanze', 60, 90, n='여름철 위주로 엽니다.|Mainly open in summer.'),
          H('프라이베르크 호수', 'Freibergsee', '숲에 둘러싸인 맑은 산 호수로, 호숫가 산책과 수영을 즐깁니다.', 'A clear mountain lake ringed by forest, for lakeside walks and swimming.', 'Freibergsee', 90, 120, b='no', n=FREE),
      ],
      hubs=f"    air: [MUC(), {FMM}],\n    rail: [['Oberstdorf', '오버스트도르프역']],\n",
      itinerary=[1, 2, 4, 3],
      season='여름(6~9월)이 산길 걷기에 좋고, 겨울엔 스키와 새해 스키 점프 대회가 열립니다.|Summer (June–September) for hiking; winter for skiing and the New Year ski jumping.',
      stay=[('마을 중심', 'Village centre', 'Oberstdorf', FIRST, '역과 케이블카 승강장이 걸어서 닿습니다.|The station and cable car on foot.')],
      routes=[R('munich', 'oberstdorf', 'train', 160, '켐프텐 경유|via Kempten')],
      transit=dict(modes=['walk', 'bus'], ko='마을은 걸어서 다니고, 협곡과 호수는 버스로 갑니다.', en='Walk the village; buses run to the gorge and lake.')),
]


if __name__ == '__main__':
    run(CITIES)
