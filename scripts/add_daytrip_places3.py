#!/usr/bin/env python3
"""Third batch of day-trip places (2026-10-30): Colmar and seven German towns as new cities, each with several
onward routes and day trips. Helpers come from add_daytrip_places.py. Run once."""
import json
import re

from add_daytrip_places import hl_block, insert_after_line, js, rd, tt, vline, wr

DB = "      ta('db'),\n"


def village(base_ko, base_en, base_q, how_ko, how_en, town_ko='마을', town_en='the town'):
    return [(f'{town_ko}에서 묵기', f'In {town_en}', None, '마을에서 묵기|Stay in the village',
             '당일 손님이 떠난 저녁과 이른 아침에 조용한 골목을 볼 수 있습니다.|See the lanes at their quietest in the evening and early morning, once the day-trippers have gone.'),
            (f'{base_ko}에서 다녀오기', f'Base in {base_en}', base_q, '거점에서 다녀오기|Day trip from a base', f'{how_ko}|{how_en}')]


def trip(to, tip, how=None):
    return f"    {{\n      to: '{to}',\n      tip: {js(tip)},\n" + (f"      how: {js(how)},\n" if how else '') + '    },\n'


CITIES = [
    dict(id='colmar', country='fr', after='strasbourg', group_title='북부', ko='콜마르', en='Colmar', native='Colmar', lat=48.0794, lng=7.3585,
         blurb=['운하 가에 알록달록한 목조 가옥이 늘어선 알자스 와인 길의 중심 도시입니다.', 'The heart of the Alsace wine route, with colourful half-timbered houses along its canals.'],
         highlights=[
             dict(ko='쁘띠트 베니스', en='Petite Venise', dko='라우흐 운하를 따라 파스텔빛 목조 가옥이 이어지는 콜마르에서 가장 사진이 많이 찍히는 동네입니다.', den='Pastel half-timbered houses along the Lauch canal, the most photographed corner of Colmar.', maps='Petite Venise Colmar', visit=dict(min=30, max=45)),
             dict(ko='운터린덴 미술관', en='Unterlinden Museum', dko='옛 수도원에 자리한 미술관으로 그뤼네발트의 이젠하임 제단화가 대표작입니다.', den='A museum in a former convent, home to Grünewald’s Isenheim Altarpiece.', maps='Musée Unterlinden Colmar',
                  visit=dict(min=90, max=120, c='tue', s='https://www.musee-unterlinden.com/', n='화요일과 1월 1일·5월 1일·11월 1일·12월 25일에 쉽니다.|Closed on Tuesdays and on 1 January, 1 May, 1 November and 25 December.', k='2026-10')),
             dict(ko='구시가와 메종 피스터', en='Old town and Maison Pfister', dko='16세기 그림 장식 발코니가 있는 메종 피스터와 옛 세관 쾨피스 사이로 구시가 골목이 이어집니다.', den='Old-town lanes between the painted 16th-century Maison Pfister and the old customs house, the Koïfhus.', maps='Maison Pfister Colmar', visit=dict(min=45, max=60)),
             dict(ko='생마르탱 성당', en='Collégiale Saint-Martin', dko='구시가 한가운데의 고딕 성당으로 지붕에 알자스식 색 기와가 덮여 있습니다.', den='The Gothic church at the centre of the old town, roofed in coloured Alsatian tiles.', maps='Collégiale Saint-Martin Colmar', visit=dict(min=15, max=20)),
             dict(ko='에기스하임', en='Eguisheim', dko='포도밭 사이 성을 중심으로 골목이 동그랗게 감겨 도는 와인 마을입니다.', den='A wine village whose lanes wind in rings around its castle among the vineyards.', maps='Eguisheim', group=('근교 마을', 'Nearby villages'),
                  visit=dict(min=90, max=120, n='콜마르에서 남쪽으로 약 7km입니다. 와인 시음을 하려면 차보다 버스나 투어가 편합니다.|About 7 km south of Colmar; take a bus or tour if you plan to taste wine.')),
             dict(ko='리크비르', en='Riquewihr', dko='중세 성벽과 망루가 남은 포도밭 마을로 크리스마스 장식 가게가 유명합니다.', den='A vineyard village with medieval walls and towers, known for its Christmas shop.', maps='Riquewihr', group=('근교 마을', 'Nearby villages'),
                  visit=dict(min=90, max=120, n='콜마르에서 북쪽으로 약 15km이며 버스가 다닙니다.|About 15 km north of Colmar, reached by bus.')),
         ],
         hubs="    air: [['EuroAirport Basel-Mulhouse-Freiburg (BSL)', '유로에어포트 바젤 (BSL)', '바젤·뮐루즈|Basel / Mulhouse']],\n    rail: [['Gare de Colmar', '콜마르역']],\n",
         hubs_file='hubs-west.ts', itin_file='itinerary-fr.ts', itin_before='  strasbourg: [', itinerary=[1, 3, 4, 2, 5, 6],
         season='11월 말~12월 크리스마스 마켓 때 매우 붐비고 숙소가 빨리 찹니다.|The Christmas markets from late November make it very busy, and rooms fill early.',
         visit_file='visit-fr.ts', visit_after=r"^  'strasbourg-h\d+': v\(.*\),\n",
         stay=village('스트라스부르', 'Strasbourg', 'Strasbourg', '스트라스부르에서 기차로 약 30분입니다.', 'About 30 min by train from Strasbourg.', '구시가', 'the old town'),
         stay_before='  strasbourg: [',
         routes=[('routes-central.ts', r"^  r\('stuttgart', 'strasbourg', .*\),\n", "  r('strasbourg', 'colmar', 'train', 30, { fb: '콜마르역|Colmar', n: 'TER' }),\n"),
                 ('routes-west.ts', r"^  r\('basel', 'strasbourg', .*\),\n", "  r('basel', 'colmar', 'train', 45, { fb: '콜마르역|Colmar', n: 'TER' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다닙니다. 근교 와인 마을은 역 앞에서 버스로 갑니다.', en='Walk the old town; buses from the station serve the wine villages.'),
         apps="      ta('sncf'),\n", transit_before='  strasbourg: {',
         places="  // —— colmar ——\n"
                "  place('colmar-fine_dining-1', 'colmar', 'fine_dining', 'JY\\'S', '3 Allée du Champ de Mars, 68000 Colmar', '셰프 장이브 실링제의 미쉐린 2스타 레스토랑입니다.', 'Two-Michelin-star restaurant of chef Jean-Yves Schillinger.', { michelin: 'star2' }),\n"
                "  place('colmar-fine_dining-2', 'colmar', 'fine_dining', 'L\\'Atelier du Peintre', '1 Rue Schongauer, 68000 Colmar', '구시가 골목의 미쉐린 1스타 레스토랑입니다.', 'One-Michelin-star restaurant in an old-town lane.', { michelin: 'star1' }),\n",
         places_file='places-fr-extra.ts', places_before='  // —— strasbourg ——\n',
         daytrips=[('strasbourg', trip('colmar', '쁘띠트 베니스 운하와 운터린덴 미술관을 보고, 버스로 에기스하임이나 리크비르 같은 와인 마을에 들릅니다. 미술관은 화요일 휴관입니다.|The Petite Venise canals and the Unterlinden Museum, then a bus to a wine village such as Eguisheim or Riquewihr; the museum is closed on Tuesdays.')),
                   ('basel', trip('colmar', '국경을 넘어 쁘띠트 베니스 운하와 운터린덴 미술관을 봅니다. 미술관은 화요일 휴관입니다.|Across the border for the Petite Venise canals and the Unterlinden Museum; the museum is closed on Tuesdays.'))]),
    dict(id='bamberg', country='de', after='nuremberg', group_title='남부', ko='밤베르크', en='Bamberg', native='Bamberg', lat=49.8988, lng=10.9028,
         blurb=['일곱 언덕 위에 세운 중세 주교 도시. 구시가 전체가 세계유산이고 훈제 맥주로 유명합니다.', 'A medieval bishops’ town on seven hills, its whole old town a World Heritage site, famous for smoked beer.'],
         highlights=[
             dict(ko='구 시청사', en='Old Town Hall', dko='레크니츠강 한가운데 섬 위에 세운 시청으로 벽면이 프레스코로 덮여 있습니다.', den='A town hall built on an island in the Regnitz, its walls covered in frescoes.', maps='Altes Rathaus Bamberg', visit=dict(min=20, max=30)),
             dict(ko='밤베르크 대성당', en='Bamberg Cathedral', dko='네 개의 탑이 선 로마네스크·고딕 대성당으로 밤베르크 기사상이 있습니다.', den='A four-towered Romanesque–Gothic cathedral, home to the Bamberg Horseman.', maps='Bamberger Dom', visit=dict(min=30, max=45)),
             dict(ko='신 궁전과 장미 정원', en='New Residence and Rose Garden', dko='주교들의 바로크 궁전으로 뒤뜰 장미 정원에서 구시가 지붕이 내려다보입니다.', den='The prince-bishops’ Baroque palace, whose rose garden looks out over the old-town roofs.', maps='Neue Residenz Bamberg', visit=dict(min=30, max=60)),
             dict(ko='작은 베네치아', en='Little Venice', dko='강가에 어부들의 목조 가옥이 줄지어 선 옛 어촌 거리입니다.', den='The old fishermen’s quarter, its half-timbered houses lining the river.', maps='Klein Venedig Bamberg', visit=dict(min=20, max=30)),
             dict(ko='슐렝케를라', en='Schlenkerla', dko='나무 연기로 몰트를 그을린 훈제 맥주(라우흐비어)를 600년 넘게 내온 양조 주점입니다.', den='A brewery tavern serving Rauchbier, beer brewed from beechwood-smoked malt, for over 600 years.', maps='Schlenkerla Bamberg', visit=dict(min=45, max=60)),
         ],
         hubs="    air: [['Nürnberg (NUE)', '뉘른베르크 공항 (NUE)', '뉘른베르크|Nuremberg']],\n    rail: [['Bamberg', '밤베르크역']],\n",
         hubs_file='hubs-central.ts', itin_file='itinerary-central.ts', itin_before='  nuremberg: [', itinerary=[1, 4, 2, 3, 5],
         season='여름엔 언덕 위 맥주 정원(켈러)이 문을 엽니다. 겨울엔 짧은 해에 맞춰 일찍 움직이세요.|In summer the hillside beer gardens (Keller) open; in winter, set off early for the short days.',
         visit_file='visit-benelux.ts', visit_after=r"^  'munich-h\d+': v\(.*\),\n",
         stay=village('뉘른베르크', 'Nuremberg', 'Nuremberg', '뉘른베르크에서 기차로 약 40분입니다.', 'About 40 min by train from Nuremberg.', '구시가', 'the old town'),
         stay_before='  nuremberg: [',
         routes=[('routes-central.ts', r"^  r\('nuremberg', 'rothenburg', .*\),\n", "  r('nuremberg', 'bamberg', 'train', 40),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다닙니다. 역에서 구시가까지는 걸어서 약 20분이거나 시내버스를 탑니다.', en='Walk the old town; it is about 20 min on foot or a short bus ride from the station.'),
         apps=DB, transit_before='  nuremberg: {', places=None,
         daytrips=[('nuremberg', trip('bamberg', '강 위의 구 시청사와 대성당, 작은 베네치아를 걷고 슐렝케를라에서 훈제 맥주를 맛봅니다.|The town hall on the river, the cathedral and Little Venice, then smoked beer at the Schlenkerla.'))]),
    dict(id='wurzburg', country='de', after='bamberg', group_title='남부', ko='뷔르츠부르크', en='Würzburg', native='Würzburg', lat=49.7913, lng=9.9534,
         blurb=['프랑켄 와인의 고장이자 로맨틱 가도의 출발점. 세계유산 레지덴츠가 있는 마인강 도시입니다.', 'Capital of Franconian wine and start of the Romantic Road, a Main-river city with the World Heritage Residenz.'],
         highlights=[
             dict(ko='뷔르츠부르크 레지덴츠', en='Würzburg Residence', dko='주교들의 바로크 궁전으로 티에폴로가 그린 거대한 계단실 천장화가 있는 세계유산입니다.', den='The prince-bishops’ Baroque palace, a World Heritage site with Tiepolo’s vast staircase ceiling fresco.', maps='Würzburger Residenz',
                  visit=dict(min=90, max=120, c='daily', s='https://www.residenz-wuerzburg.de/', n='1월 1일, 사육제 화요일, 12월 24·25·31일에 쉽니다. 궁정 정원은 무료입니다.|Closed on 1 January, Shrove Tuesday and 24, 25 and 31 December; the court garden is free.')),
             dict(ko='마리엔베르크 요새', en='Marienberg Fortress', dko='마인강 건너 언덕 위 요새로 포도밭 너머 시내가 한눈에 보입니다.', den='The hilltop fortress across the Main, looking over the vineyards to the city.', maps='Festung Marienberg', visit=dict(min=60, max=90)),
             dict(ko='알테 마인 다리', en='Old Main Bridge', dko='성인 조각상이 늘어선 돌다리로 다리 위에서 와인 한 잔을 들고 노을을 봅니다.', den='A stone bridge lined with statues of saints, where people sip a glass of wine at sunset.', maps='Alte Mainbrücke Würzburg', visit=dict(min=20, max=30)),
             dict(ko='뷔르츠부르크 대성당', en='Würzburg Cathedral', dko='성 킬리안에게 바친 로마네스크 대성당입니다.', den='The Romanesque cathedral of St Kilian.', maps='Würzburger Dom', visit=dict(min=20, max=30)),
             dict(ko='케펠레 순례 성당', en='Käppele', dko='마인강 서쪽 언덕 위 바로크 순례 성당으로 계단 길을 올라갑니다.', den='A Baroque pilgrimage church on the hill west of the Main, reached by a stepped path.', maps='Käppele Würzburg', visit=dict(min=30, max=45)),
         ],
         hubs="    air: [FRA(), ['Nürnberg (NUE)', '뉘른베르크 공항 (NUE)', '뉘른베르크|Nuremberg']],\n    rail: [['Würzburg Hbf', '뷔르츠부르크 중앙역']],\n",
         hubs_file='hubs-central.ts', itin_file='itinerary-central.ts', itin_before='  nuremberg: [', itinerary=[1, 4, 3, 2, 5],
         season='봄~가을엔 마인 강변과 포도밭에서 와인 축제가 이어집니다. 레지덴츠는 겨울엔 일찍 닫습니다.|Wine festivals run along the river and in the vineyards from spring to autumn; the Residenz closes earlier in winter.',
         visit_file='visit-benelux.ts', visit_after=r"^  'munich-h\d+': v\(.*\),\n",
         stay=village('뉘른베르크', 'Nuremberg', 'Nuremberg', '뉘른베르크에서 기차로 약 55분, 프랑크푸르트에서 약 1시간 10분입니다.', 'About 55 min by train from Nuremberg or 1 hr 10 from Frankfurt.', '구시가', 'the old town'),
         stay_before='  nuremberg: [',
         routes=[('routes-central.ts', r"^  r\('nuremberg', 'rothenburg', .*\),\n", "  r('nuremberg', 'wurzburg', 'train', 55),\n"),
                 ('routes-central.ts', r"^  r\('frankfurt', 'nuremberg', .*\),\n", "  r('frankfurt', 'wurzburg', 'train', 70),\n")],
         transit=dict(modes=['walk', 'tram', 'bus', 'train'], ko='구시가는 걸어서 다닙니다. 요새까지는 걸어서 오르거나 여름엔 9번 버스를 탑니다.', en='Walk the old town; climb to the fortress on foot or take bus 9 in summer.'),
         apps=DB, transit_before='  nuremberg: {', places="  // —— wurzburg ——\n  place('wurzburg-fine_dining-1', 'wurzburg', 'fine_dining', 'KUNO 1408', 'Neubaustraße 7, 97070 Würzburg', '레브슈톡 호텔 안의 미쉐린 1스타 레스토랑입니다.', 'One-Michelin-star restaurant in the Hotel Rebstock.', { michelin: 'star1' }),\n",
         places_file='places-de-extra.ts', places_before='  // —— hamburg ——\n',
         daytrips=[('nuremberg', trip('wurzburg', '레지덴츠의 계단실 천장화를 보고 알테 마인 다리에서 프랑켄 와인을 마십니다. 오후엔 마리엔베르크 요새에 오릅니다.|The Residenz staircase fresco, a glass of Franconian wine on the Old Main Bridge, then up to Marienberg Fortress.')),
                   ('frankfurt', trip('wurzburg', '레지덴츠와 알테 마인 다리, 마리엔베르크 요새를 봅니다.|The Residenz, the Old Main Bridge and Marienberg Fortress.'))]),
    dict(id='regensburg', country='de', after='wurzburg', group_title='남부', ko='레겐스부르크', en='Regensburg', native='Regensburg', lat=49.0134, lng=12.1016,
         blurb=['도나우강 가에 중세 구시가가 거의 그대로 남은 2천 년 도시. 돌다리와 고딕 대성당이 상징입니다.', 'A 2,000-year-old Danube city whose medieval core survives almost intact, crowned by its stone bridge and Gothic cathedral.'],
         highlights=[
             dict(ko='돌다리', en='Stone Bridge', dko='12세기에 놓은 도나우강 돌다리로 다리 위에서 구시가 스카이라인이 보입니다.', den='The 12th-century stone bridge over the Danube, with the old-town skyline in view.', maps='Steinerne Brücke Regensburg', visit=dict(min=20, max=30)),
             dict(ko='레겐스부르크 대성당', en='Regensburg Cathedral', dko='두 첨탑이 높이 솟은 바이에른의 대표 고딕 대성당입니다.', den='Bavaria’s great Gothic cathedral with its twin spires.', maps='Regensburger Dom', visit=dict(min=30, max=45)),
             dict(ko='구시가', en='Old town', dko='중세 귀족들의 탑 저택과 광장이 이어지는 세계유산 구시가입니다.', den='The World Heritage old town of medieval patrician tower houses and squares.', maps='Altstadt Regensburg', visit=dict(min=90, max=120)),
             dict(ko='역사적 소시지 주방', en='Historic Sausage Kitchen', dko='돌다리 옆에서 수백 년째 숯불 소시지를 굽는 작은 식당입니다.', den='A tiny restaurant beside the bridge that has grilled sausages over charcoal for centuries.', maps='Historische Wurstkuchl Regensburg', visit=dict(min=30, max=45)),
             dict(ko='발할라', en='Walhalla', dko='도나우강 위 언덕에 그리스 신전 모양으로 지은 독일 위인들의 명예의 전당입니다.', den='A hall of fame for great Germans, built like a Greek temple on a hill above the Danube.', maps='Walhalla Donaustauf', group=('근교', 'Nearby'),
                  visit=dict(min=60, max=90, n='도나우슈타우프에 있어 시내에서 5번 버스를 타고 언덕을 걸어 오릅니다. 봄~가을엔 배로도 갑니다.|In Donaustauf: take bus 5 from town and walk up the hill; boats also go in spring to autumn.')),
             dict(ko='투른 운트 탁시스 궁전', en='Thurn und Taxis Palace', dko='유럽 우편 사업으로 부를 쌓은 귀족 가문이 지금도 사는 옛 수도원 궁전입니다.', den='A former abbey turned palace, still home to the princely family that grew rich on Europe’s postal service.', maps='Schloss Thurn und Taxis Regensburg', visit=dict(min=60, max=90, n='가이드 투어로만 들어갑니다.|Guided tours only.')),
         ],
         hubs="    air: [MUC(), ['Nürnberg (NUE)', '뉘른베르크 공항 (NUE)', '뉘른베르크|Nuremberg']],\n    rail: [['Regensburg Hbf', '레겐스부르크 중앙역']],\n",
         hubs_file='hubs-central.ts', itin_file='itinerary-central.ts', itin_before='  nuremberg: [', itinerary=[1, 4, 2, 3, 6, 5],
         season='12월엔 구시가 곳곳과 투른 운트 탁시스 궁전 마당에서 크리스마스 마켓이 열립니다.|In December, Christmas markets fill the old town and the Thurn und Taxis palace courtyard.',
         visit_file='visit-benelux.ts', visit_after=r"^  'munich-h\d+': v\(.*\),\n",
         stay=village('뉘른베르크', 'Nuremberg', 'Nuremberg', '뉘른베르크에서 기차로 약 1시간, 뮌헨에서 약 1시간 25분입니다.', 'About an hour by train from Nuremberg or 1 hr 25 from Munich.', '구시가', 'the old town'),
         stay_before='  nuremberg: [',
         routes=[('routes-central.ts', r"^  r\('nuremberg', 'rothenburg', .*\),\n", "  r('nuremberg', 'regensburg', 'train', 60),\n"),
                 ('routes-central.ts', r"^  r\('munich', 'innsbruck', .*\),\n", "  r('munich', 'regensburg', 'train', 85),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다닙니다. 발할라는 5번 버스로 갑니다.', en='Walk the old town; take bus 5 to the Walhalla.'),
         apps=DB, transit_before='  nuremberg: {',
         places="  // —— regensburg ——\n"
                "  place('regensburg-fine_dining-1', 'regensburg', 'fine_dining', 'Storstad', 'Watmarkt 5, 93047 Regensburg', '구시가 탑 건물 5층의 미쉐린 1스타 레스토랑입니다.', 'One-Michelin-star restaurant on the fifth floor of an old-town tower.', { michelin: 'star1' }),\n"
                "  place('regensburg-fine_dining-2', 'regensburg', 'fine_dining', 'Ontra\\'s Gourmetstube', 'Franz-Mayer-Straße 5a, 93053 Regensburg', '모던 인터내셔널 요리의 미쉐린 1스타 레스토랑입니다.', 'One-Michelin-star restaurant with modern international cooking.', { michelin: 'star1' }),\n",
         places_file='places-de-extra.ts', places_before='  // —— hamburg ——\n',
         daytrips=[('nuremberg', trip('regensburg', '돌다리와 대성당, 탑 저택이 늘어선 구시가를 걷고 소시지 주방에서 점심을 먹습니다.|The stone bridge, the cathedral and the old town of tower houses, with lunch at the sausage kitchen.')),
                   ('munich', trip('regensburg', '도나우강 돌다리와 대성당, 세계유산 구시가를 걷습니다. 시간이 남으면 버스로 발할라에 다녀옵니다.|The Danube stone bridge, the cathedral and the World Heritage old town; add the Walhalla by bus if there is time.'))]),
    dict(id='berchtesgaden', country='de', after='munich', group_title='남부', ko='베르히테스가덴', en='Berchtesgaden', native='Berchtesgaden', lat=47.6316, lng=13.0024,
         blurb=['알프스 산과 에메랄드빛 쾨니히스제 호수에 둘러싸인 바이에른 동남쪽 끝의 산악 마을입니다.', 'A mountain town in Bavaria’s far southeast, ringed by Alps and the emerald Königssee.'],
         highlights=[
             dict(ko='쾨니히스제 호수', en='Königssee', dko='가파른 산 사이 피오르드 같은 호수를 전기 배로 건넙니다. 중간에 나팔 메아리를 들려줍니다.', den='A fjord-like lake between sheer mountains, crossed by electric boat with a trumpet echo on the way.', maps='Königssee Schönau',
                  visit=dict(min=180, max=300, s='https://www.seenschifffahrt.de/', n='성 바르톨로메까지 배로 약 35분이며 호수가 얼지 않으면 겨울에도 다닙니다(12월 24일 제외). 안쪽 살레트까지는 봄~가을(2026년은 4월 25일~10월 11일)에만 갑니다.|About 35 min by boat to St Bartholomä, all year unless the lake freezes (not on 24 December); boats to Salet at the far end run spring to autumn only (25 April–11 October in 2026).', k='2026-10')),
             dict(ko='성 바르톨로메 성당', en='St Bartholomew’s Church', dko='호숫가 반도에 선 붉은 양파 지붕 순례 성당으로 뒤로 바츠만산 동벽이 솟아 있습니다.', den='A red onion-domed pilgrimage church on a lakeside peninsula, below the east face of the Watzmann.', maps='St. Bartholomä Königssee', visit=dict(min=30, max=60)),
             dict(ko='오버잘츠베르크 기록관', en='Obersalzberg Documentation Centre', dko='히틀러의 산장 지구였던 곳에 세운 나치 독재 역사 전시관입니다.', den='An exhibition on the Nazi dictatorship, on the site of Hitler’s mountain retreat.', maps='Dokumentation Obersalzberg',
                  visit=dict(min=90, max=120, c='daily', s='https://www.obersalzberg.de/', n='매일 9~17시에 엽니다. 위쪽 켈슈타인하우스(독수리 둥지)는 2026년 10월 화재로 소실돼 재건을 기다리고 있습니다.|Open daily 9:00–17:00. The Kehlsteinhaus (Eagle’s Nest) above was destroyed by fire in October 2026 and awaits rebuilding.', k='2026-10')),
             dict(ko='베르히테스가덴 소금 광산', en='Berchtesgaden Salt Mine', dko='광부 옷을 입고 광차와 미끄럼틀을 타며 500년 넘은 소금 광산을 둘러봅니다.', den='Don miners’ overalls and ride the train and slides through a salt mine worked for over 500 years.', maps='Salzbergwerk Berchtesgaden', visit=dict(min=90, max=120, s='https://www.salzbergwerk.de/')),
             dict(ko='마을 시장 광장', en='Market square', dko='그림을 그린 집들과 분수가 있는 마을 중심 광장입니다.', den='The town’s centre, with painted houses and a fountain.', maps='Marktplatz Berchtesgaden', visit=dict(min=30, max=45)),
         ],
         hubs="    air: [SZG(), MUC()],\n    rail: [['Berchtesgaden Hbf', '베르히테스가덴 중앙역', '프라이라싱에서 환승|change at Freilassing']],\n    bus: [['Berchtesgaden Hbf (Bus 840)', '중앙역 버스 정류장', '잘츠부르크행 840번|bus 840 to Salzburg']],\n",
         hubs_file='hubs-central.ts', itin_file='itinerary-central.ts', itin_before='  nuremberg: [', itinerary=[1, 2, 5, 3, 4],
         season='호수가 얼면 배가 쉽니다. 켈슈타인하우스는 2026년 10월 화재로 소실돼 당분간 갈 수 없습니다.|Boats stop if the lake freezes. The Kehlsteinhaus was destroyed by fire in October 2026 and cannot be visited for now.',
         visit_file='visit-benelux.ts', visit_after=r"^  'munich-h\d+': v\(.*\),\n",
         stay=village('잘츠부르크', 'Salzburg', 'Salzburg', '잘츠부르크 중앙역에서 840번 버스로 약 45분입니다.', 'About 45 min on bus 840 from Salzburg main station.'),
         stay_before='  nuremberg: [',
         routes=[('routes-central.ts', r"^  r\('salzburg', 'hallstatt', .*\),\n", "  r('salzburg', 'berchtesgaden', 'bus', 45, { fa: '잘츠부르크 중앙역|Salzburg Hbf', fb: '베르히테스가덴 중앙역|Berchtesgaden Hbf', n: '840번 버스|bus 840' }),\n"),
                 ('routes-central.ts', r"^  r\('munich', 'innsbruck', .*\),\n", "  r('munich', 'berchtesgaden', 'train', 160, { n: '프라이라싱에서 환승|change at Freilassing' }),\n")],
         transit=dict(modes=['bus', 'walk', 'train'], ko='쾨니히스제와 오버잘츠베르크는 중앙역 앞에서 버스로 갑니다.', en='Buses from the main station go to the Königssee and Obersalzberg.'),
         apps=DB, transit_before='  nuremberg: {',
         places="  // —— berchtesgaden ——\n  place('berchtesgaden-fine_dining-1', 'berchtesgaden', 'fine_dining', 'PUR', 'Hintereck 1, 83471 Berchtesgaden', '켐핀스키 호텔 안의 미쉐린 2스타 레스토랑입니다.', 'Two-Michelin-star restaurant in the Kempinski hotel.', { michelin: 'star2' }),\n",
         places_file='places-de-extra.ts', places_before='  // —— hamburg ——\n',
         daytrips=[('salzburg', trip('berchtesgaden', '840번 버스로 국경을 넘어 쾨니히스제 호수 배를 타고 성 바르톨로메 성당까지 갑니다. 켈슈타인하우스는 2026년 10월 화재로 소실돼 갈 수 없습니다.|Bus 840 across the border to the Königssee and a boat to St Bartholomä; the Kehlsteinhaus burned down in October 2026 and cannot be visited.')),
                   ('munich', trip('berchtesgaden', '편도가 길지만 쾨니히스제 호수 배와 오버잘츠베르크 기록관을 묶을 수 있습니다. 아침 일찍 출발하세요.|A long ride, but you can pair the Königssee boat with the Obersalzberg Documentation Centre; leave early.'))]),
    dict(id='garmisch-partenkirchen', country='de', after='berchtesgaden', group_title='남부', ko='가르미슈파르텐키르헨', en='Garmisch-Partenkirchen', native='Garmisch-Partenkirchen', lat=47.4917, lng=11.0955,
         blurb=['독일 최고봉 추크슈피체 아래의 알프스 휴양 마을. 그림 벽화 집과 협곡 산책이 있습니다.', 'An Alpine resort below the Zugspitze, Germany’s highest peak, with painted houses and gorge walks.'],
         highlights=[
             dict(ko='추크슈피체', en='Zugspitze', dko='톱니바퀴 열차와 케이블카로 오르는 독일 최고봉(2,962m)으로 정상에서 네 나라의 알프스가 보입니다.', den='Germany’s highest peak (2,962 m), reached by cogwheel train and cable car, with Alps of four countries in view.', maps='Zugspitze', visit=dict(min=240, max=360, s='https://zugspitze.de/', n='맑은 날 아침에 오르세요. 날씨가 나쁘면 정상에서 아무것도 보이지 않습니다.|Go up early on a clear day; in bad weather there is nothing to see at the top.')),
             dict(ko='파르트나흐 협곡', en='Partnach Gorge', dko='석회암 절벽 사이로 급류가 흐르는 좁은 협곡을 터널과 바위 길로 걷습니다.', den='A narrow limestone gorge with a torrent below, walked through tunnels and rock-cut paths.', maps='Partnachklamm', visit=dict(min=90, max=120)),
             dict(ko='아이브제 호수', en='Lake Eibsee', dko='추크슈피체 바로 아래 맑은 산정 호수로 한 바퀴 걷는 길이 있습니다.', den='A clear mountain lake right below the Zugspitze, with a path all the way round.', maps='Eibsee', visit=dict(min=60, max=120)),
             dict(ko='루트비히 거리', en='Ludwigstraße', dko='파르텐키르헨 쪽 옛 거리로 벽화로 장식한 집들이 이어집니다.', den='The old street of Partenkirchen, lined with houses painted with murals.', maps='Ludwigstraße Garmisch-Partenkirchen', visit=dict(min=30, max=45)),
             dict(ko='올림픽 스키 경기장', en='Olympic Ski Stadium', dko='1936년 동계 올림픽 경기장으로 새해 스키 점프 대회가 열립니다.', den='The 1936 Winter Olympics stadium, home to the New Year ski jump.', maps='Olympia-Skistadion Garmisch-Partenkirchen', visit=dict(min=30, max=45)),
         ],
         hubs="    air: [MUC(), ['Innsbruck (INN)', '인스브루크 공항 (INN)', '오스트리아 인스브루크|Innsbruck, Austria']],\n    rail: [['Garmisch-Partenkirchen', '가르미슈파르텐키르헨역']],\n",
         hubs_file='hubs-central.ts', itin_file='itinerary-central.ts', itin_before='  nuremberg: [', itinerary=[1, 3, 2, 4, 5],
         season='겨울엔 스키 마을이 되고, 여름(6~9월)이 산길 걷기에 가장 좋습니다. 추크슈피체는 맑은 날을 고르세요.|A ski resort in winter; June–September is best for hiking. Pick a clear day for the Zugspitze.',
         visit_file='visit-benelux.ts', visit_after=r"^  'munich-h\d+': v\(.*\),\n",
         stay=village('뮌헨', 'Munich', 'Munich', '뮌헨 중앙역에서 기차로 약 1시간 20분입니다.', 'About 1 hr 20 by train from Munich main station.'),
         stay_before='  nuremberg: [',
         routes=[('routes-central.ts', r"^  r\('munich', 'innsbruck', .*\),\n", "  r('munich', 'garmisch-partenkirchen', 'train', 80),\n"),
                 ('routes-central.ts', r"^  r\('salzburg', 'innsbruck', .*\),\n", "  r('innsbruck', 'garmisch-partenkirchen', 'train', 80, { n: '미텐발트선|Mittenwald Railway' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='마을 안은 걷거나 시내버스를 탑니다. 추크슈피체 톱니바퀴 열차는 중앙역 옆 전용 역에서 출발합니다.', en='Walk or take local buses; the Zugspitze cogwheel train leaves from its own station beside the main one.'),
         apps=DB, transit_before='  nuremberg: {', places=None,
         daytrips=[('munich', trip('garmisch-partenkirchen', '맑은 날 톱니바퀴 열차와 케이블카로 추크슈피체에 오르고, 내려와 파르트나흐 협곡을 걷습니다.|On a clear day, cogwheel train and cable car up the Zugspitze, then a walk through the Partnach Gorge.')),
                   ('innsbruck', trip('garmisch-partenkirchen', '미텐발트선 산악 철도로 국경을 넘어 추크슈피체나 파르트나흐 협곡에 갑니다.|Over the border on the Mittenwald Railway for the Zugspitze or the Partnach Gorge.'))]),
    dict(id='rudesheim', country='de', after='frankfurt', group_title='중부', ko='뤼데스하임', en='Rüdesheim am Rhein', native='Rüdesheim am Rhein', lat=49.9789, lng=7.9233,
         blurb=['포도밭 언덕 아래 라인강 와인 마을. 세계유산 라인 계곡 유람선의 출발점입니다.', 'A Rhine wine town below vineyard slopes and a starting point for cruises through the World Heritage Rhine Gorge.'],
         highlights=[
             dict(ko='드로셀 골목', en='Drosselgasse', dko='와인 주점이 빽빽하게 늘어선 좁은 골목으로 저녁엔 음악이 흘러나옵니다.', den='A narrow lane packed with wine taverns, with live music in the evenings.', maps='Drosselgasse Rüdesheim', visit=dict(min=20, max=30)),
             dict(ko='니더발트 기념비와 케이블카', en='Niederwald Monument and cable car', dko='케이블카로 포도밭 위를 지나 독일 통일 기념비에 오르면 라인강이 내려다보입니다.', den='Ride the cable car over the vineyards to the monument to German unification, high above the Rhine.', maps='Niederwalddenkmal', visit=dict(min=60, max=90, n='케이블카는 봄~가을에 운행합니다.|The cable car runs from spring to autumn.')),
             dict(ko='지크프리트 기계 음악 박물관', en='Siegfried’s Mechanical Music Cabinet', dko='자동 피아노와 오르골 같은 옛 자동 악기를 실제로 연주하며 보여 주는 박물관입니다.', den='A museum of self-playing instruments, from player pianos to music boxes, demonstrated live.', maps='Siegfrieds Mechanisches Musikkabinett', visit=dict(min=45, max=60)),
             dict(ko='라인 계곡 유람선', en='Rhine Gorge cruise', dko='성과 포도밭이 이어지는 세계유산 라인 계곡을 배로 내려가며 로렐라이 바위를 지납니다.', den='Cruise down the World Heritage Rhine Gorge, past castles, vineyards and the Lorelei rock.', maps='KD Rüdesheim Anleger', visit=dict(min=120, max=240, n='주요 정기선은 4~10월에 다닙니다. 돌아올 때는 강변 기차를 타면 빠릅니다.|The main scheduled boats run April–October; the riverside train is quicker for the way back.')),
         ],
         hubs="    air: [FRA()],\n    rail: [['Rüdesheim (Rhein)', '뤼데스하임역']],\n",
         hubs_file='hubs-central.ts', itin_file='itinerary-central.ts', itin_before='  frankfurt: [', itinerary=[1, 3, 2, 4],
         season='유람선과 케이블카는 4~10월이 중심입니다. 겨울엔 문을 닫는 주점과 가게가 많습니다.|Cruises and the cable car run mainly April–October; many taverns and shops close in winter.',
         visit_file='visit-benelux.ts', visit_after=r"^  'munich-h\d+': v\(.*\),\n",
         stay=village('프랑크푸르트', 'Frankfurt', 'Frankfurt', '프랑크푸르트에서 기차로 약 1시간 10분입니다.', 'About 1 hr 10 by train from Frankfurt.'),
         stay_before='  frankfurt: [',
         routes=[('routes-central.ts', r"^  r\('frankfurt', 'heidelberg', .*\),\n", "  r('frankfurt', 'rudesheim', 'train', 70),\n")],
         transit=dict(modes=['walk', 'ferry', 'train'], ko='마을은 걸어서 다닙니다. 라인강 유람선 선착장이 역 바로 옆에 있습니다.', en='Walk the town; the Rhine cruise piers are right by the station.'),
         apps=DB, transit_before='  frankfurt: {', places=None,
         daytrips=[('frankfurt', trip('rudesheim', '케이블카로 니더발트 기념비에 오른 뒤 배로 라인 계곡을 내려가 로렐라이를 지나고, 강변 기차로 돌아옵니다. 배는 4~10월이 중심입니다.|Cable car to the Niederwald Monument, a boat down the Rhine Gorge past the Lorelei and the riverside train back; boats run mainly April–October.'))]),
    dict(id='cochem', country='de', after='cologne', group_title='중부', ko='코헴', en='Cochem', native='Cochem', lat=50.1469, lng=7.1667,
         blurb=['모젤강 굽이에 동화 같은 성이 솟은 와인 마을입니다.', 'A Moselle wine town below a fairy-tale castle on a bend of the river.'],
         highlights=[
             dict(ko='라이히스부르크', en='Reichsburg Cochem', dko='포도밭 언덕 위에 선 뾰족탑 성으로 19세기에 신고딕 양식으로 다시 지었습니다.', den='A turreted castle above the vineyards, rebuilt in Gothic Revival style in the 19th century.', maps='Reichsburg Cochem', visit=dict(min=60, max=90, s='https://www.reichsburg-cochem.de/', n='가이드 투어로 들어갑니다. 3월 중순~11월 초엔 매일 다니고 겨울엔 시간이 짧아집니다.|Visits are by guided tour, daily from mid-March to early November, with shorter hours in winter.')),
             dict(ko='모젤 강변 산책로', en='Moselle promenade', dko='강을 따라 와인 주점과 유람선 선착장이 이어지는 산책로입니다.', den='The riverside walk past wine taverns and boat piers.', maps='Moselpromenade Cochem', visit=dict(min=30, max=45)),
             dict(ko='체어리프트와 피너크로이츠 전망대', en='Chairlift to the Pinnerkreuz', dko='체어리프트로 맞은편 언덕에 올라 성과 모젤강 굽이를 내려다봅니다.', den='Take the chairlift up the opposite hill for a view over the castle and the river bend.', maps='Sesselbahn Cochem', visit=dict(min=45, max=60, n='봄~가을에 운행합니다.|Runs from spring to autumn.')),
             dict(ko='엘츠 성', en='Eltz Castle', dko='숲속 바위 위에 선 중세 성으로 850년 넘게 같은 가문이 지켜 왔습니다.', den='A medieval castle on a rock in the forest, owned by the same family for over 850 years.', maps='Burg Eltz', group=('근교', 'Nearby'),
                  visit=dict(min=180, max=240, s='https://burg-eltz.de/', n='4월 무렵부터 11월 1일까지만 엽니다. 코헴에서 기차로 모젤케른역에 가서 숲길을 약 1시간 걷습니다.|Open only from about April to 1 November. Take the train from Cochem to Moselkern, then walk about an hour through the forest.')),
             dict(ko='구시가 시장 광장', en='Market square', dko='시청과 분수, 목조 가옥이 둘러싼 작은 광장입니다.', den='A small square framed by the town hall, a fountain and half-timbered houses.', maps='Marktplatz Cochem', visit=dict(min=20, max=30)),
         ],
         hubs="    air: [['Köln Bonn (CGN)', '쾰른 본 공항 (CGN)', '쾰른|Cologne'], FRA()],\n    rail: [['Cochem (Mosel)', '코헴역']],\n",
         hubs_file='hubs-central.ts', itin_file='itinerary-central.ts', itin_before='  cologne: [', itinerary=[2, 5, 1, 3, 4],
         season='9~10월 포도 수확철엔 와인 축제가 이어집니다. 성과 엘츠 성은 11월 초까지가 정상 운영 기간입니다.|Wine festivals follow the harvest in September–October; the castle and Eltz Castle keep full hours until early November.',
         visit_file='visit-benelux.ts', visit_after=r"^  'munich-h\d+': v\(.*\),\n",
         stay=village('쾰른', 'Cologne', 'Cologne', '쾰른에서 기차로 약 1시간 50분(코블렌츠 환승)입니다.', 'About 1 hr 50 by train from Cologne, changing at Koblenz.'),
         stay_before='  cologne: [',
         routes=[('routes-central.ts', r"^  r\('cologne', 'frankfurt', .*\),\n", "  r('cologne', 'cochem', 'train', 110, { n: '코블렌츠에서 환승|change at Koblenz' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='마을은 걸어서 다닙니다. 성까지는 걸어서 오르거나 봄~가을엔 셔틀버스를 탑니다.', en='Walk the town; climb to the castle on foot or take the shuttle bus in spring to autumn.'),
         apps=DB, transit_before='  cologne: {', places=None,
         daytrips=[('cologne', trip('cochem', '모젤 강변 마을과 라이히스부르크 성을 봅니다. 엘츠 성까지 보려면 모젤케른역에서 숲길을 걸어 하루가 꽉 찹니다.|The Moselle town and the Reichsburg; adding Eltz Castle, a forest walk from Moselkern, fills the day.'))]),
]


def main():
    for c in CITIES:
        cid = c['id']
        key = f"'{cid}'" if '-' in cid else cid
        cities = rd('cities.ts')
        if f'id: "{cid}",' in cities:
            continue
        hl = ',\n'.join(hl_block(f'{cid}-h{i}', f'/highlights/{cid}-{i}.jpg', h) for i, h in enumerate(c['highlights'], 1))
        block = ('\n  {\n'
                 f'    id: "{cid}",\n    countryId: "{c["country"]}",\n    lat: {c["lat"]},\n    lng: {c["lng"]},\n'
                 f'    signatureImage: "/cities/{cid}.jpg",\n    name: {tt(c["ko"], c["en"])},\n'
                 f'    nativeName: {json.dumps(c["native"], ensure_ascii=False)},\n'
                 f'    blurb: {{\n      ko: {json.dumps(c["blurb"][0], ensure_ascii=False)},\n      en: {json.dumps(c["blurb"][1], ensure_ascii=False)},\n    }},\n'
                 f'    highlights: [\n{hl}\n    ],\n  }},')
        i = cities.find(f'id: "{c["after"]}",')
        j = cities.find('\n  {\n    id: "', i + 10)
        wr('cities.ts', cities[:j] + block + cities[j:])
        s = rd('countries.ts')
        for pat in [rf"(cityIds: \[[^\]]*?)'{c['after']}'", rf"(\{{ title: \{{ ko: '{c['group_title']}'[^\]]*?)'{c['after']}'"]:
            m = re.search(pat, s)
            assert m, (cid, pat)
            s = s[:m.end()] + f", '{cid}'" + s[m.end():]
        wr('countries.ts', s)

        def before(name, anchor, text):
            s = rd(name)
            k = s.index(anchor)
            wr(name, s[:k] + text + s[k:])
        before(c['hubs_file'], f"  {c['after']}: {{\n" if c['hubs_file'] != 'hubs-central.ts' or c['after'] in ('nuremberg', 'munich', 'frankfurt', 'cologne') else '  nuremberg: {\n', f'  {key}: {{\n{c["hubs"]}  }},\n')
        before(c['itin_file'], c['itin_before'], f"  {key}: {json.dumps(c['itinerary'])},\n")
        insert_after_line('season-notes.ts', r"^  'aix-en-provence': \{.*\},\n", f"  {key}: {{ n: {js(c['season'])} }},\n")
        insert_after_line(c['visit_file'], c['visit_after'], ''.join(vline(f'{cid}-h{i}', h['visit']) for i, h in enumerate(c['highlights'], 1)))
        rows = ''.join(f"    a({js(a[0])}, {js(a[1])}, {js(a[2] or c['native'])}, {js(a[3])}, {js(a[4])}),\n" for a in c['stay'])
        before('stay.ts', c['stay_before'], f'  {key}: [\n{rows}  ],\n')
        for f, after, text in c['routes']:
            insert_after_line(f, after, text)
        t = c['transit']
        before('transit-city.ts', c['transit_before'],
               f"  {key}: {{\n    modes: {json.dumps(t['modes']).replace(chr(34), chr(39))},\n    howTo: {{\n"
               f"      ko: {js(t['ko'])},\n      en: {js(t['en'])},\n    }},\n    apps: [\n{c['apps']}    ],\n  }},\n")
        if c['places']:
            before(c['places_file'], c['places_before'], c['places'])
        for base, entry in c['daytrips']:
            s = rd('day-trips.ts')
            m = re.search(rf"^  {base}: \[\n", s, re.M)
            end = s.index('\n  ],\n', m.end()) + 1
            wr('day-trips.ts', s[:end] + entry + s[end:])
        print('city', cid)


if __name__ == '__main__':
    main()
