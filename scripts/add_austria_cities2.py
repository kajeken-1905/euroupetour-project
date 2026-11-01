#!/usr/bin/env python3
"""Austria step 2, batch 2 (2026-11-01): Zell am See–Kaprun, Kitzbühel, Bregenz and Klagenfurt as new cities. Reuses
the batch-3 writer (add_daytrip_places3.main). Seasons from the lifts' and sights' own pages and the regional tourist
boards (2026), rail/bus times from Transitous, stars from the MICHELIN Guide Austria 2026 list. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places3 import trip, village

NEAR = ('근교', 'Nearby')
OEBB = "      ta('oebb'),\n"

CITIES = [
    dict(id='zell-am-see', country='at', after='werfen', ko='첼암제·카프룬', en='Zell am See–Kaprun', native='Zell am See', lat=47.3236, lng=12.7968,
         blurb=['호수 가의 첼암제와 빙하 아래 카프룬이 짝을 이룬 알프스 휴양지. 사계절 3,000m 빙하 전망대에 오를 수 있습니다.',
                'A lakeside town paired with Kaprun below its glacier, where a lift climbs to a 3,000 m viewpoint all year round.'],
         highlights=[
             dict(ko='첼 호숫가와 구시가', en='Lakeside and old town', dko='첼 호수 가 산책로와 성 히폴리트 성당 주변 작은 구시가를 걷습니다.', den='Walk the shore of the Zeller See and the small old town around St Hippolyte’s church.', maps='Stadtpfarrkirche St. Hippolyt Zell am See', visit=dict(min=45, max=60)),
             dict(ko='슈미텐회헤', en='Schmittenhöhe', dko='시내에서 곤돌라로 해발 약 2,000m에 올라 호수와 호에 타우에른 설산을 봅니다.', den='A gondola from town to about 2,000 m, looking over the lake to the snowy Hohe Tauern.', maps='Schmittenhöhebahn',
                  visit=dict(min=120, max=180, s='https://www.schmitten.at/', n='2026년 여름 운행은 5월 18일~11월 1일입니다(10월 4일까지 9~17시, 그 뒤 9~16시). 겨울엔 스키장으로 운행하며 시즌 사이엔 쉽니다.|Summer 2026 runs 18 May–1 November (9:00–17:00 until 4 October, then 9:00–16:00); in winter it runs for skiing, with a pause between seasons.', k='2026-10')),
             dict(ko='키츠슈타인호른 3,000m 전망대', en='Kitzsteinhorn Gipfelwelt 3000', dko='카프룬에서 케이블카를 갈아타며 3,029m 빙하 봉우리 전망대와 국립공원 전시관까지 오릅니다.', den='Cable cars from Kaprun up to the 3,029 m glacier summit platform and national-park gallery.', maps='Gipfelwelt 3000 Kitzsteinhorn',
                  visit=dict(min=180, max=300, s='https://www.kitzsteinhorn.at/', n='일 년 내내 열고 대략 8:15~16:30에 운행합니다(마지막 오르는 편 15:30). 날씨가 나쁘면 멈춥니다. 첼암제에서 660번 버스로 카프룬까지 약 30분입니다.|Open all year, roughly 8:15–16:30 (last ride up 15:30), and stops in bad weather. Bus 660 from Zell am See to Kaprun takes about 30 min.', k='2026-10')),
             dict(ko='카프룬 고산 댐 호수', en='Kaprun high mountain reservoirs', dko='버스·경사 엘리베이터를 갈아타고 해발 2,000m가 넘는 에메랄드빛 댐 호수와 댐 위 산책로에 갑니다.', den='Buses and an inclined lift up to emerald reservoirs above 2,000 m, with a walk along the dam crest.', maps='Stausee Mooserboden',
                  visit=dict(min=180, max=240, s='https://visit.verbund.com/en/kaprun', n='2026년은 5월 22일~10월 11일에만 엽니다. 날씨·눈사태 위험에 따라 운행이 바뀔 수 있습니다.|Open only 22 May–11 October in 2026; weather and avalanche risk can change the service.', k='2026-10')),
             dict(ko='크리믈 폭포', en='Krimml Waterfalls', dko='세 단으로 380m를 떨어지는 오스트리아에서 가장 높은 폭포로 물보라 속 산책로를 오릅니다.', den='Austria’s highest waterfalls, dropping 380 m in three tiers, climbed by a path through the spray.', maps='Krimmler Wasserfälle', group=NEAR,
                  visit=dict(min=150, max=240, s='https://www.wasserfaelle-krimml.at/', n='첼암제에서 670번 버스로 약 1시간 30분입니다. 폭포 길은 4월 중순~10월 말에 엽니다.|About 1 hr 30 by bus 670 from Zell am See; the waterfall path is open from mid-April to the end of October.')),
             dict(ko='그로스글로크너 산악 도로', en='Grossglockner High Alpine Road', dko='오스트리아 최고봉 그로스글로크너 아래를 넘는 산악 도로로 끝의 전망대에서 빙하를 봅니다.', den='The mountain road below Austria’s highest peak, ending at a viewpoint over its glacier.', maps='Großglockner Hochalpenstraße', group=NEAR,
                  visit=dict(min=300, max=420, s='https://www.grossglockner.at/', n='봄~가을(대개 5월 초~11월 초)에만 열고 통행료를 냅니다. 대중교통이 거의 없어 차나 투어로 갑니다.|Open only from spring to autumn (usually early May to early November), with a toll. There is almost no public transport, so go by car or on a tour.')),
         ],
         hubs="    air: [SZG(), ['Innsbruck (INN)', '인스브루크 공항 (INN)', '인스브루크|Innsbruck']],\n    rail: [['Zell am See', '첼암제역']],\n    bus: [['Zell am See Bahnhof', '첼암제역 버스 정류장', '카프룬행 660번·크리믈행 670번|bus 660 to Kaprun, 670 to Krimml']],\n",
         hubs_file='hubs-central.ts', hubs_before='  hallstatt: {\n', itin_file='itinerary-central.ts', itin_before='  hallstatt: {', itinerary=[1, 2, 3, 4, 5, 6],
         season='여름(6~9월)엔 호수와 고산 댐이 좋고, 겨울엔 스키장이 됩니다. 고산 댐은 5월 말~10월 초에만 엽니다.|Summer (June–September) suits the lake and the high reservoirs; in winter it is a ski resort. The reservoirs open only from late May to early October.',
         visit_file='visit-central.ts', visit_after=r"^  'werfen-h\d+': v\(.*\),\n",
         stay=[('첼암제 시내', 'Zell am See town', 'Zell am See', '호숫가 시내|Lakeside town', '역과 호숫가, 슈미텐회헤 곤돌라가 걸어서 가깝습니다.|The station, the lake and the Schmittenhöhe gondola are all within walking distance.'),
               ('카프룬', 'Kaprun', 'Kaprun', '빙하 아래 마을|Below the glacier', '키츠슈타인호른 케이블카와 고산 댐 버스가 가깝습니다. 첼암제까지는 660번 버스로 약 30분입니다.|Close to the Kitzsteinhorn lifts and the reservoir buses; about 30 min to Zell am See by bus 660.')],
         stay_before='  hallstatt: [',
         routes=[('routes-central.ts', r"^  r\('salzburg', 'werfen', .*\),\n",
                  "  r('salzburg', 'zell-am-see', 'train', 100),\n"
                  "  r('innsbruck', 'zell-am-see', 'train', 130),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='첼암제 시내는 걸어서 다닙니다. 카프룬과 빙하·댐은 660번 버스로, 크리믈 폭포는 670번 버스로 갑니다.', en='Walk around Zell am See; bus 660 runs to Kaprun and its glacier and reservoirs, and bus 670 to the Krimml Falls.'),
         apps=OEBB, transit_before='  hallstatt: {', places=None,
         daytrips=[('salzburg', trip('zell-am-see', '기차로 첼암제에 가 슈미텐회헤 곤돌라에 오르고 호숫가를 걷습니다. 하루 더 있으면 카프룬 빙하나 고산 댐까지 갑니다.|By train to Zell am See for the Schmittenhöhe gondola and the lakeside; with another day, add the Kaprun glacier or reservoirs.'))]),
    dict(id='kitzbuhel', country='at', after='zell-am-see', ko='키츠뷔엘', en='Kitzbühel', native='Kitzbühel', lat=47.4467, lng=12.3925,
         blurb=['알록달록한 중세 구시가와 세계에서 가장 험한 스키 활강 코스 슈트라이프가 있는 티롤의 산악 도시입니다.',
                'A Tyrolean mountain town with a colourful medieval centre and the Streif, the world’s most feared downhill run.'],
         highlights=[
             dict(ko='구시가', en='Old town', dko='파스텔빛 집과 성문이 이어지는 포르더슈타트와 힌터슈타트 두 거리의 중세 구시가입니다.', den='The medieval centre of two streets, Vorderstadt and Hinterstadt, lined with pastel houses and a town gate.', maps='Katharinenkirche Kitzbühel', visit=dict(min=45, max=60)),
             dict(ko='하넨캄 케이블카와 슈트라이프', en='Hahnenkamm and the Streif', dko='시내에서 곤돌라로 하넨캄에 올라 1월 월드컵 활강 경기가 열리는 슈트라이프 출발점과 전망을 봅니다.', den='A gondola from town up the Hahnenkamm to the start of the Streif, raced every January, and its views.', maps='Hahnenkammbahn Kitzbühel',
                  visit=dict(min=120, max=180, s='https://www.kitzski.at/', n='여름엔 대략 5월~11월 초에, 겨울엔 스키 시즌에 운행합니다. 시즌 사이와 날씨가 나쁠 땐 운행 시간을 확인하세요.|Runs roughly May to early November in summer and through the ski season in winter; check times between seasons and in bad weather.')),
             dict(ko='키츠뷔엘러 호른', en='Kitzbüheler Horn', dko='시내 동쪽 산에 케이블카로 올라 알프스 꽃 정원과 그로스글로크너까지 이어지는 전망을 봅니다.', den='A cable car up the mountain east of town to an alpine flower garden and views reaching the Grossglockner.', maps='Kitzbüheler Horn', visit=dict(min=150, max=240, n='여름 시즌과 스키 시즌에만 운행합니다.|The lifts run only in the summer and ski seasons.')),
             dict(ko='슈바르츠 호수', en='Schwarzsee', dko='시내 북서쪽의 따뜻한 산중 호수로 여름엔 수영하고 둘레길을 걷습니다.', den='A warm moorland lake northwest of town for summer swims and a walk around the shore.', maps='Schwarzsee Kitzbühel', visit=dict(min=60, max=120, n='시내에서 걸어서 약 40분이거나 기차로 키츠뷔엘 슈바르츠제역까지 갑니다.|About 40 min on foot from town, or take the train to Kitzbühel Schwarzsee.')),
             dict(ko='키츠뷔엘 박물관', en='Museum Kitzbühel', dko='도시와 스키의 역사, 화가 알폰스 발데의 그림을 전시하는 박물관입니다.', den='Town and skiing history, plus the paintings of Alfons Walde.', maps='Museum Kitzbühel', visit=dict(min=45, max=60, s='https://www.tyrol.com/activities/attractions/all-attractions/museum-kitzbuehel-collection-alfons-walde', n='운영 시간이 계절마다 달라 가기 전에 확인하세요.|Hours change with the season, so check before going.')),
         ],
         hubs="    air: [['Innsbruck (INN)', '인스브루크 공항 (INN)', '인스브루크|Innsbruck'], SZG(), MUC()],\n    rail: [['Kitzbühel', '키츠뷔엘역']],\n",
         hubs_file='hubs-central.ts', hubs_before='  hallstatt: {\n', itin_file='itinerary-central.ts', itin_before='  hallstatt: {', itinerary=[1, 5, 2, 3, 4],
         season='1월엔 하넨캄 활강 경기로 숙소가 매우 비쌉니다. 여름(6~9월)엔 산행과 호수 수영이 좋습니다.|In January the Hahnenkamm race makes rooms very expensive; summer (June–September) is for hiking and lake swims.',
         visit_file='visit-central.ts', visit_after=r"^  'zell-am-see-h\d+': v\(.*\),\n",
         stay=[('구시가', 'Old town', 'Kitzbühel Altstadt', '구시가|Old town', '식당과 가게가 모여 있고 하넨캄 곤돌라까지 걸어서 몇 분입니다.|Restaurants and shops are close together, a few minutes’ walk from the Hahnenkamm gondola.'),
               ('인스브루크에서 다녀오기', 'Base in Innsbruck', 'Innsbruck', '거점에서 다녀오기|Day trip from a base', '인스브루크에서 기차로 약 1시간 15분입니다.|About 1 hr 15 by train from Innsbruck.')],
         stay_before='  hallstatt: [',
         routes=[('routes-central.ts', r"^  r\('innsbruck', 'zell-am-see', .*\),\n",
                  "  r('innsbruck', 'kitzbuhel', 'train', 75),\n"
                  "  r('kitzbuhel', 'zell-am-see', 'train', 70),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다닙니다. 하넨캄 곤돌라는 시내에서, 호른 케이블카는 역 건너편에서 탑니다.', en='Walk the old town; the Hahnenkamm gondola leaves from town and the Horn cable car from across the station.'),
         apps=OEBB, transit_before='  hallstatt: {',
         places="  // —— kitzbuhel ——\n"
                "  place('kitzbuhel-fine_dining-1', 'kitzbuhel', 'fine_dining', 'Les Deux Kitzbühel', 'Franz-Reisch-Straße 7, 6370 Kitzbühel', '시내 중심의 프렌치 브라세리로 미쉐린 1스타를 받았습니다.', 'A French brasserie in the town centre with one Michelin star.', { michelin: 'star1' }),\n",
         places_file='places-at-extra.ts', places_before='  // —— salzburg ——\n',
         daytrips=[('innsbruck', trip('kitzbuhel', '구시가를 걷고 하넨캄 곤돌라로 슈트라이프 출발점까지 올라갑니다.|The old town, then the Hahnenkamm gondola up to the start of the Streif.'))]),
    dict(id='bregenz', country='at', after='kitzbuhel', ko='브레겐츠', en='Bregenz', native='Bregenz', lat=47.5031, lng=9.7471,
         blurb=['보덴 호수 동쪽 끝의 포어아를베르크 주도. 여름밤 호수 위 무대에서 오페라가 열립니다.',
                'Vorarlberg’s capital at the eastern end of Lake Constance, where summer nights bring opera on a stage in the lake.'],
         highlights=[
             dict(ko='호수 무대', en='Seebühne', dko='호수 위에 세운 거대한 무대로 여름 브레겐츠 페스티벌의 오페라가 열립니다. 낮에도 무대를 볼 수 있습니다.', den='The huge stage built out on the lake for the summer Bregenz Festival opera, which you can see by day too.', maps='Seebühne Bregenz',
                  visit=dict(min=30, max=45, s='https://bregenzerfestspiele.com/en', n='오페라는 7월 중순~8월 중순 페스티벌 기간에 열리며 일찍 예매해야 합니다.|The opera plays during the festival from mid-July to mid-August; book early.')),
             dict(ko='펜더 케이블카', en='Pfänder cable car', dko='시내에서 케이블카로 1,064m 펜더산에 올라 보덴 호수와 독일·스위스 알프스를 내려다봅니다.', den='A cable car from town up the 1,064 m Pfänder over Lake Constance to the German and Swiss Alps.', maps='Pfänderbahn Bregenz',
                  visit=dict(min=90, max=150, s='https://www.pfaenderbahn.at/', n='일 년 내내 대략 8~19시에 운행하지만 보통 11월에 몇 주 정비로 쉽니다.|Runs all year, roughly 8:00–19:00, but usually closes for a few weeks of servicing in November.', k='2026-10')),
             dict(ko='브레겐츠 미술관', en='Kunsthaus Bregenz', dko='건축가 페터 춤토르가 설계한 유리 상자 같은 현대 미술관입니다.', den='Peter Zumthor’s glass-box museum of contemporary art.', maps='Kunsthaus Bregenz',
                  visit=dict(min=60, max=90, c='mon', s='https://www.kunsthaus-bregenz.at/', n='화~일 10~18시(목요일은 20시까지)에 열고 월요일에 쉽니다. 7·8월엔 월요일에도 열 수 있습니다.|Open Tuesday–Sunday 10:00–18:00 (Thursday until 20:00) and closed on Mondays; it may open on Mondays in July and August.', k='2026-10')),
             dict(ko='윗마을과 마르틴 탑', en='Upper town and Martinsturm', dko='언덕 위 옛 성벽 마을로 양파 모양 지붕의 마르틴 탑이 서 있습니다.', den='The old walled town on the hill, crowned by the onion-domed Martinsturm.', maps='Martinsturm Bregenz', visit=dict(min=30, max=45)),
             dict(ko='린다우 섬', en='Lindau island', dko='국경 너머 독일 쪽 호수 섬의 구시가로 사자상과 등대가 선 항구가 있습니다.', den='Across the German border, an island old town whose harbour is guarded by a lion statue and a lighthouse.', maps='Mangturm Lindau', group=NEAR,
                  visit=dict(min=90, max=120, n='브레겐츠에서 기차로 약 10~15분이며 여름엔 배도 다닙니다.|About 10–15 min by train from Bregenz, and by boat in summer.')),
         ],
         hubs="    air: [['Zürich Flughafen (ZRH)', '취리히 공항 (ZRH)', '스위스 취리히|Zurich, Switzerland'], ['Friedrichshafen (FDH)', '프리드리히스하펜 공항 (FDH)', '독일 프리드리히스하펜|Friedrichshafen, Germany']],\n    rail: [['Bregenz', '브레겐츠역']],\n    port: [['Bregenz Hafen', '브레겐츠 항구', '보덴 호수 유람선|Lake Constance boats']],\n",
         hubs_file='hubs-central.ts', hubs_before='  hallstatt: {\n', itin_file='itinerary-central.ts', itin_before='  hallstatt: {', itinerary=[1, 4, 2, 3, 5],
         season='7월 중순~8월 중순 브레겐츠 페스티벌 때 숙소가 빨리 찹니다. 호수 유람선은 봄~가을에 다닙니다.|Rooms fill fast during the Bregenz Festival from mid-July to mid-August; lake boats run from spring to autumn.',
         visit_file='visit-central.ts', visit_after=r"^  'kitzbuhel-h\d+': v\(.*\),\n",
         stay=[('호숫가 시내', 'Lakeside centre', 'Bregenz', '호숫가 시내|Lakeside centre', '역과 호수 무대, 펜더 케이블카가 걸어서 가깝습니다.|The station, the lake stage and the Pfänder cable car are all a short walk away.'),
               ('취리히에서 다녀오기', 'Base in Zurich', 'Zurich', '거점에서 다녀오기|Day trip from a base', '취리히에서 직행 기차로 약 1시간 35분입니다.|About 1 hr 35 by direct train from Zurich.')],
         stay_before='  hallstatt: [',
         routes=[('routes-central.ts', r"^  r\('kitzbuhel', 'zell-am-see', .*\),\n",
                  "  r('zurich', 'bregenz', 'train', 95),\n"
                  "  r('innsbruck', 'bregenz', 'train', 160),\n")],
         transit=dict(modes=['walk', 'bus', 'train', 'ferry'], ko='시내는 걸어서 다닙니다. 린다우는 기차로, 여름엔 보덴 호수 유람선으로도 갑니다.', en='Walk the centre; Lindau is a short train ride away, or a boat trip on Lake Constance in summer.'),
         apps=OEBB, transit_before='  hallstatt: {',
         places="  // —— bregenz ——\n"
                "  place('bregenz-fine_dining-1', 'bregenz', 'fine_dining', 'Mangold', 'Pfänderstraße 3, 6911 Lochau', '브레겐츠 바로 옆 로하우의 가족 경영 레스토랑으로 미쉐린 1스타를 받았습니다.', 'A family-run restaurant in Lochau, right next to Bregenz, with one Michelin star.', { michelin: 'star1' }),\n"
                "  place('bregenz-fine_dining-2', 'bregenz', 'fine_dining', 'Guth', 'Wälderstraße 10, 6923 Lauterach', '브레겐츠 옆 라우테라흐의 미쉐린 1스타 레스토랑입니다.', 'One-Michelin-star restaurant in Lauterach, next to Bregenz.', { michelin: 'star1' }),\n",
         places_file='places-at-extra.ts', places_before='  // —— salzburg ——\n',
         daytrips=[('zurich', trip('bregenz', '직행 기차로 브레겐츠에 가 호수 무대를 보고 펜더 케이블카에 오릅니다. 시간이 남으면 기차로 독일 린다우 섬까지 갑니다.|Direct train to Bregenz for the lake stage and the Pfänder cable car; with time to spare, hop on the train to Lindau island in Germany.'))]),
    dict(id='klagenfurt', country='at', after='bregenz', ko='클라겐푸르트', en='Klagenfurt', native='Klagenfurt am Wörthersee', lat=46.6247, lng=14.3053,
         blurb=['맑은 뵈르터 호숫가의 케른텐 주도. 용 분수가 선 구시가와 호숫가 수영장, 세계 명소 미니어처 공원이 있습니다.',
                'Carinthia’s capital on the clear Wörthersee, with a dragon fountain in its old town, a lakeside lido and a park of miniature landmarks.'],
         highlights=[
             dict(ko='노이어 플라츠와 용 분수', en='Neuer Platz and the Dragon Fountain', dko='도시의 상징인 용(린트부름) 분수가 선 중앙 광장입니다.', den='The main square with the Lindwurm, the dragon fountain that is the city’s emblem.', maps='Lindwurmbrunnen Klagenfurt', visit=dict(min=20, max=30)),
             dict(ko='란트하우스 문장의 방', en='Landhaus Hall of Arms', dko='두 탑이 선 옛 주 의회 건물로 벽과 천장이 귀족 가문 문장 600여 개로 덮인 방이 있습니다.', den='The twin-towered old state house, with a hall whose walls and ceiling carry some 600 noble coats of arms.', maps='Landhaus Klagenfurt',
                  visit=dict(min=30, max=45, c='sat,sun', s='https://www.visitcarinthia.at/attractions/museums/emblem-hall-at-the-landhaus/', n='4월 1일~10월 26일엔 월~금, 10월 27일~3월 말엔 화~금 10~16시에 엽니다. 주말엔 특별한 날만 엽니다.|Open Monday–Friday from 1 April to 26 October and Tuesday–Friday from 27 October to the end of March, 10:00–16:00; weekends only on special days.', k='2026-10')),
             dict(ko='클라겐푸르트 대성당', en='Klagenfurt Cathedral', dko='소박한 겉모습과 달리 안은 화려한 바로크 장식으로 가득한 성당입니다.', den='A plain-fronted church that opens into a richly decorated Baroque interior.', maps='Dom Klagenfurt', visit=dict(min=15, max=20)),
             dict(ko='뵈르터 호수 수영장', en='Wörthersee lido', dko='호수 동쪽 끝의 큰 호숫가 수영장으로 운하를 따라 걷거나 여름엔 유람선을 탑니다.', den='The big lakeside lido at the east end of the lake; walk along the canal or take a summer boat.', maps='Strandbad Klagenfurt', visit=dict(min=60, max=120, n='수영은 여름에만 합니다.|Swimming is summer only.')),
             dict(ko='미니문두스', en='Minimundus', dko='세계 유명 건축물 150여 개를 25분의 1로 줄여 놓은 미니어처 공원입니다.', den='A park of around 150 famous buildings from around the world at 1:25 scale.', maps='Minimundus',
                  visit=dict(min=90, max=120, s='https://www.minimundus.at/', n='2026년은 3월 27일~11월 1일에 엽니다.|Open 27 March–1 November in 2026.', k='2026-10')),
             dict(ko='피라미덴코겔 전망탑', en='Pyramidenkogel tower', dko='뵈르터 호수 남쪽 언덕의 세계에서 가장 높은 나무 전망탑으로 긴 미끄럼틀이 있습니다.', den='The world’s tallest wooden observation tower, on a hill south of the Wörthersee, with a long slide.', maps='Aussichtsturm Pyramidenkogel', group=NEAR,
                  visit=dict(min=60, max=90, n='일 년 내내 열고 겨울(11~2월)엔 10~17시입니다. 대중교통이 불편해 차로 가는 편이 낫습니다.|Open all year, 10:00–17:00 in winter (November–February). Public transport is awkward, so a car is easier.')),
             dict(ko='호흐오스터비츠 성', en='Hochosterwitz Castle', dko='바위산 꼭대기에 14개의 성문을 지나 오르는 중세 성입니다.', den='A medieval castle on a rocky peak, reached through 14 gates.', maps='Burg Hochosterwitz', group=NEAR,
                  visit=dict(min=120, max=180, s='https://www.burg-hochosterwitz.com/en/', n='4월~11월 1일에 열고 4·9·10월엔 월요일에 쉽니다. 클라겐푸르트에서 기차로 라운스도르프-호흐오스터비츠역까지 약 40분이고 역에서 걸어 오릅니다.|Open April to 1 November, closed on Mondays in April, September and October. About 40 min by train from Klagenfurt to Launsdorf-Hochosterwitz, then a walk up.', k='2026-10')),
         ],
         hubs="    air: [['Klagenfurt (KLU)', '클라겐푸르트 공항 (KLU)'], VIE()],\n    rail: [['Klagenfurt Hbf', '클라겐푸르트 중앙역']],\n",
         hubs_file='hubs-central.ts', hubs_before='  hallstatt: {\n', itin_file='itinerary-central.ts', itin_before='  hallstatt: {', itinerary=[1, 2, 3, 4, 5, 6, 7],
         season='여름(6~8월)엔 뵈르터 호수에서 수영할 수 있습니다. 미니문두스와 호흐오스터비츠 성은 11월부터 3월까지 쉽니다.|In summer (June–August) you can swim in the Wörthersee; Minimundus and Hochosterwitz close from November to March.',
         visit_file='visit-central.ts', visit_after=r"^  'bregenz-h\d+': v\(.*\),\n",
         stay=[('구시가', 'Old town', 'Klagenfurt Altstadt', '구시가|Old town', '광장과 대성당이 걸어서 가깝고 호수까지는 버스로 약 15분입니다.|The squares and the cathedral are a short walk away, and the lake is about 15 min by bus.'),
               ('뵈르터 호숫가', 'By the Wörthersee', 'Wörthersee Ostbucht Klagenfurt', '호숫가|Lakeside', '수영장과 미니문두스가 가까워 여름에 좋습니다.|Close to the lido and Minimundus, good in summer.')],
         stay_before='  hallstatt: [',
         routes=[('routes-central.ts', r"^  r\('innsbruck', 'bregenz', .*\),\n",
                  "  r('graz', 'klagenfurt', 'train', 65),\n"
                  "  r('vienna', 'klagenfurt', 'train', 220),\n"
                  "  r('salzburg', 'klagenfurt', 'train', 190),\n")],
         transit=dict(modes=['walk', 'bus', 'train', 'ferry'], ko='구시가는 걸어서 다니고 호숫가와 미니문두스는 시내버스로 갑니다. 여름엔 호수 유람선이 다닙니다.', en='Walk the old town; city buses run to the lake and Minimundus, and boats cross the lake in summer.'),
         apps=OEBB, transit_before='  hallstatt: {', places=None,
         daytrips=[('graz', trip('klagenfurt', '새 코랄름 철도로 클라겐푸르트에 가 용 분수와 문장의 방을 보고 뵈르터 호숫가를 걷습니다.|Take the new Koralm line to Klagenfurt for the dragon fountain and the Hall of Arms, then a walk by the Wörthersee.'))]),
]

if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
