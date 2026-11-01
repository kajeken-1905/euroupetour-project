#!/usr/bin/env python3
"""Austria step 2, batch 1 (2026-11-01): Linz, Dürnstein (Wachau), Bad Ischl and Werfen as new cities. Reuses the
batch-3 writer (add_daytrip_places3.main). Opening seasons from the sights' own sites and the regional tourist boards
(2026), rail/bus times from Transitous, stars from the MICHELIN Guide Austria 2026 list. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places3 import trip, village

NEAR = ('근교', 'Nearby')
OEBB = "      ta('oebb'),\n"
VIE = "VIE('빈|Vienna')"

CITIES = [
    dict(id='linz', country='at', after='hallstatt', ko='린츠', en='Linz', native='Linz', lat=48.3059, lng=14.2862,
         blurb=['도나우강 가의 오버외스터라이히 주도. 미디어 아트 센터와 강변 미술관, 산 위 전망 트램이 있는 도시입니다.',
                'Upper Austria’s capital on the Danube, with a media-art centre, a riverside art museum and a tram up to a hilltop view.'],
         highlights=[
             dict(ko='중앙 광장', en='Hauptplatz', dko='삼위일체 기념주가 선 넓은 바로크 광장으로 구시가와 도나우강 다리가 이어집니다.', den='A broad Baroque square with its Trinity Column, between the old town and the Danube bridge.', maps='Hauptplatz Linz', visit=dict(min=20, max=30)),
             dict(ko='린츠 성', en='Linz Castle', dko='구시가 위 언덕의 성으로 오버외스터라이히 역사·미술을 전시하는 성 박물관이 있습니다.', den='The castle on the hill above the old town, home to the Schlossmuseum of Upper Austrian history and art.', maps='Schlossmuseum Linz', visit=dict(min=60, max=90)),
             dict(ko='새 대성당', en='New Cathedral', dko='오스트리아에서 가장 큰 성당으로 신고딕 양식의 높은 탑과 스테인드글라스가 있습니다.', den='Austria’s largest church, a neo-Gothic cathedral with a tall spire and stained glass.', maps='Mariendom Linz', visit=dict(min=30, max=45)),
             dict(ko='렌토스 미술관', en='Lentos Art Museum', dko='도나우강 가 유리 상자 모양 건물의 근현대 미술관으로 밤엔 외벽이 빛납니다.', den='A modern-art museum in a glass box on the Danube that glows at night.', maps='Lentos Kunstmuseum Linz', visit=dict(min=60, max=90, c='mon', s='https://www.lentos.at/', n='월요일에 쉽니다.|Closed on Mondays.')),
             dict(ko='아르스 일렉트로니카 센터', en='Ars Electronica Center', dko='강 건너편의 미래 박물관으로 로봇·인공지능·생명과학을 직접 체험합니다.', den='The “Museum of the Future” across the river, with hands-on robotics, AI and life sciences.', maps='Ars Electronica Center Linz', visit=dict(min=90, max=150, c='mon', s='https://ars.electronica.art/center/', n='월요일에 쉽니다. 9월 초 아르스 일렉트로니카 축제 기간엔 운영이 달라질 수 있습니다.|Closed on Mondays; hours may change during the Ars Electronica Festival in early September.')),
             dict(ko='푀스틀링베르크', en='Pöstlingberg', dko='중앙 광장에서 산악 트램을 타고 올라 순례 성당 앞에서 린츠와 도나우강을 내려다봅니다.', den='Ride the mountain tram from the Hauptplatz up to the pilgrimage church for views over Linz and the Danube.', maps='Pöstlingberg Linz', visit=dict(min=90, max=120, n='중앙 광장에서 푀스틀링베르크반(50번 트램)을 탑니다.|Take the Pöstlingbergbahn (tram 50) from the Hauptplatz.')),
             dict(ko='마우트하우젠 강제수용소 추모관', en='Mauthausen Memorial', dko='나치 강제수용소 자리에 세운 추모관과 전시관입니다.', den='The memorial and exhibitions on the site of the Nazi concentration camp.', maps='KZ-Gedenkstätte Mauthausen', group=NEAR,
                  visit=dict(min=150, max=240, s='https://www.mauthausen-memorial.org/en', n='무료입니다. 10월 27일~2월 말엔 화~일 9:00~15:45에 열고 월요일에 쉽니다. 린츠에서 오는 직행 버스는 3~10월에만 다니며, 그 밖엔 마우트하우젠역에서 버스와 걷기로 갑니다.|Free. From 27 October to the end of February it opens Tuesday–Sunday 9:00–15:45 and closes on Mondays. The direct bus from Linz runs March–October only; otherwise take the train to Mauthausen, then a bus and a walk uphill.', k='2026-10')),
         ],
         hubs=f"    air: [['Linz (LNZ)', '린츠 공항 (LNZ)'], {VIE}],\n    rail: [['Linz Hbf', '린츠 중앙역']],\n",
         hubs_file='hubs-central.ts', itin_file='itinerary-central.ts', itin_before='  hallstatt: {', itinerary=[1, 3, 2, 4, 5, 6, 7],
         season='9월 초 아르스 일렉트로니카 축제 때 도시 곳곳에서 미디어 아트 전시가 열립니다.|During the Ars Electronica Festival in early September, media-art shows spread across the city.',
         visit_file='visit-central.ts', visit_after=r"^  'hallstatt-h\d+': v\(.*\),\n",
         stay=[('구시가', 'Old town', 'Altstadt Linz', '구시가|Old town', '중앙 광장과 도나우강, 성이 걸어서 가깝습니다.|The Hauptplatz, the Danube and the castle are all a short walk away.'),
               ('린츠 중앙역 주변', 'Around Linz Hbf', 'Linz Hauptbahnhof', '역 주변|Station area', '빈·잘츠부르크행 기차와 공항 버스를 타기 편하고 트램으로 중심가까지 몇 분입니다.|Handy for trains to Vienna and Salzburg, a few minutes by tram from the centre.')],
         stay_before='  hallstatt: [',
         routes=[('routes-central.ts', r"^  r\('vienna', 'hallstatt', .*\),\n", "  r('vienna', 'linz', 'train', 75),\n  r('salzburg', 'linz', 'train', 70),\n")],
         transit=dict(modes=['tram', 'bus', 'train', 'walk'], ko='구시가는 걸어서 다니고 강 건너와 역은 트램을 탑니다. 푀스틀링베르크는 50번 산악 트램으로 오릅니다.', en='Walk the old town; trams cross the river and run to the station, and tram 50 climbs the Pöstlingberg.'),
         apps=OEBB, transit_before='  hallstatt: {',
         places="  // —— linz ——\n"
                "  place('linz-fine_dining-1', 'linz', 'fine_dining', 'Verdi', 'Pachmayrstraße 137, 4040 Linz', '도시 북쪽 언덕의 미쉐린 1스타 레스토랑입니다.', 'One-Michelin-star restaurant on the hills north of the city.', { michelin: 'star1' }),\n"
                "  place('linz-fine_dining-2', 'linz', 'fine_dining', 'Rossbarth', 'Klammstraße 7, 4020 Linz', '구시가 근처의 미쉐린 1스타 레스토랑입니다.', 'One-Michelin-star restaurant near the old town.', { michelin: 'star1' }),\n"
                "  place('linz-fine_dining-3', 'linz', 'fine_dining', 'Kliemstein Vino Vitis', 'Obere Donaulände 15, 4020 Linz', '도나우 강변 옛 소금 창고 건물의 미쉐린 1스타 레스토랑입니다(2026년 새로 받음).', 'One-Michelin-star restaurant in the old Salzamt building on the Danube (new in 2026).', { michelin: 'star1' }),\n",
         places_file='places-at-extra.ts', places_before='  // —— salzburg ——\n',
         daytrips=[('vienna', trip('linz', '도나우 강변의 렌토스 미술관과 아르스 일렉트로니카 센터를 보고 산악 트램으로 푀스틀링베르크에 오릅니다.|The Lentos and the Ars Electronica Center on the Danube, then the mountain tram up the Pöstlingberg.')),
                   ('salzburg', trip('linz', '중앙 광장과 강변 미술관을 보고 푀스틀링베르크에 오릅니다. 마우트하우젠 추모관을 함께 보면 하루가 꽉 찹니다.|The Hauptplatz, the riverside museums and the Pöstlingberg; adding the Mauthausen Memorial fills the day.'))]),
    dict(id='durnstein', country='at', after='linz', ko='뒤른슈타인', en='Dürnstein', native='Dürnstein', lat=48.3953, lng=15.5197,
         blurb=['포도밭 계곡 바하우의 도나우 강변 마을. 파란 바로크 탑과 사자왕 리처드가 갇혔던 성터가 있습니다.',
                'A Danube village in the vineyard-lined Wachau, with a blue Baroque tower and the ruined castle where Richard the Lionheart was held.'],
         highlights=[
             dict(ko='뒤른슈타인 수도원', en='Dürnstein Abbey', dko='강가에 선 파랑·흰색 바로크 탑과 수도원 성당, 강 위 테라스가 있습니다.', den='The blue-and-white Baroque tower, abbey church and river terrace.', maps='Stift Dürnstein',
                  visit=dict(min=45, max=60, s='https://www.stift-duernstein.at/en/', n='2026년은 3월 28일~10월 26일에 엽니다(월~토 9~17시, 일·공휴일 10~17시).|Open 28 March–26 October in 2026 (Mon–Sat 9:00–17:00, Sun and holidays 10:00–17:00).', k='2026-10')),
             dict(ko='뒤른슈타인 성터', en='Dürnstein Castle ruins', dko='사자왕 리처드가 갇혔던 성의 폐허로 바하우 계곡과 도나우강이 내려다보입니다.', den='Ruins of the castle where Richard the Lionheart was imprisoned, looking over the Wachau and the Danube.', maps='Burgruine Dürnstein', visit=dict(min=60, max=90, n='마을에서 가파른 길로 20~30분 오릅니다. 무료입니다.|A steep 20–30-minute walk up from the village; free.')),
             dict(ko='마을 큰길', en='Hauptstraße', dko='성문 사이로 살구 가게와 와인 바가 이어지는 좁은 중세 거리입니다.', den='A narrow medieval street between the town gates, lined with apricot shops and wine bars.', maps='Hauptstraße Dürnstein', visit=dict(min=30, max=45)),
             dict(ko='바하우 유람선', en='Wachau boat', dko='크렘스·뒤른슈타인에서 멜크까지 포도밭과 성 사이로 도나우강을 거슬러 오릅니다.', den='Sail up the Danube from Krems and Dürnstein to Melk, between vineyards and castles.', maps='Schiffsstation Dürnstein',
                  visit=dict(min=90, max=190, s='https://www.ddsg-blue-danube.at/', n='3월 말~11월 초에만 다닙니다. 멜크 쪽(상류)으로 가는 배가 내려오는 배보다 오래 걸립니다.|Runs late March to early November only; going upstream to Melk takes longer than coming down.', k='2026-10')),
             dict(ko='크렘스 구시가', en='Krems old town', dko='슈타이너 문과 와인 골목, 미술관 거리가 있는 바하우 입구 도시입니다.', den='The gateway town to the Wachau, with the Steiner Tor, wine lanes and a museum mile.', maps='Steiner Tor Krems', group=NEAR, visit=dict(min=90, max=120, n='뒤른슈타인에서 715번 버스로 약 15분입니다.|About 15 min by bus 715 from Dürnstein.')),
             dict(ko='멜크 수도원', en='Melk Abbey', dko='도나우강 위 언덕의 황금빛 바로크 수도원과 도서관입니다. 유람선의 종점입니다.', den='The golden Baroque abbey and library above the Danube, at the far end of the boat trip.', maps='Stift Melk', group=NEAR, visit=dict(min=90, max=120, s='https://www.stiftmelk.at/')),
         ],
         hubs=f"    air: [{VIE}],\n    rail: [['Krems an der Donau', '크렘스역', '뒤른슈타인까지 715번 버스|bus 715 to Dürnstein']],\n    port: [['Dürnstein', '뒤른슈타인 선착장', '바하우 유람선|Wachau boats']],\n",
         hubs_file='hubs-central.ts', hubs_before='  hallstatt: {\n', itin_file='itinerary-central.ts', itin_before='  hallstatt: {', itinerary=[1, 3, 2, 4, 6, 5],
         season='4월엔 살구꽃이 피고 9~10월은 포도 수확철입니다. 유람선은 3월 말~11월 초에만 다닙니다.|Apricot trees blossom in April and the grape harvest is in September–October; boats run only from late March to early November.',
         visit_file='visit-central.ts', visit_after=r"^  'linz-h\d+': v\(.*\),\n",
         stay=village('빈', 'Vienna', 'Wien', '빈에서 기차로 크렘스까지 간 뒤 715번 버스로 갈아타 약 2시간입니다.', 'About 2 hours from Vienna: train to Krems, then bus 715.'),
         stay_before='  hallstatt: [',
         routes=[('routes-central.ts', r"^  r\('salzburg', 'linz', .*\),\n", "  r('vienna', 'durnstein', 'train', 115, { fb: '크렘스역|Krems', n: '크렘스에서 715번 버스|bus 715 from Krems' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train', 'ferry'], ko='마을은 걸어서 다닙니다. 크렘스역과는 715번 버스로, 멜크와는 봄~가을 유람선으로 이어집니다.', en='Walk the village; bus 715 links it to Krems station, and spring-to-autumn boats run to Melk.'),
         apps=OEBB, transit_before='  hallstatt: {', places=None,
         daytrips=[('vienna', trip('durnstein', '크렘스에서 버스로 뒤른슈타인에 가 파란 탑과 성터를 보고, 봄~가을엔 배로 멜크 수도원까지 올라갑니다.|By bus from Krems to Dürnstein for the blue tower and the castle ruins, then in season the boat up to Melk Abbey.'))]),
    dict(id='bad-ischl', country='at', after='durnstein', ko='바트 이슐', en='Bad Ischl', native='Bad Ischl', lat=47.7119, lng=13.6327,
         blurb=['프란츠 요제프 황제가 여름마다 머문 잘츠카머구트의 온천 도시. 황제 별장과 오래된 제과점이 있습니다.',
                'The Salzkammergut spa town where Emperor Franz Joseph spent his summers, with his villa and old pastry shops.'],
         highlights=[
             dict(ko='황제 별장', en='Kaiservilla', dko='프란츠 요제프 황제의 여름 별장으로 사냥 기념품과 가구가 그대로 남아 있습니다.', den='Emperor Franz Joseph’s summer villa, its hunting trophies and furniture left as they were.', maps='Kaiservilla Bad Ischl',
                  visit=dict(min=60, max=90, s='https://www.kaiservilla.at/', n='약 45분 가이드 투어로만 봅니다. 5~9월 매일 9:30~17:00, 10월 매일 10:00~16:00이며 11~12월엔 대림절 주말에만 엽니다(2026년).|Seen only on a guided tour of about 45 minutes. Open daily 9:30–17:00 from May to September and 10:00–16:00 in October; in November and December only on Advent weekends (2026).', k='2026-10')),
             dict(ko='에스플라나데', en='Esplanade', dko='트라운강을 따라 이어지는 산책로로 옛 제과점과 카페가 늘어서 있습니다.', den='The promenade along the River Traun, lined with old pastry shops and cafés.', maps='Esplanade Bad Ischl', visit=dict(min=30, max=45)),
             dict(ko='트링크할레', en='Trinkhalle', dko='온천수를 마시던 19세기 건물로 시내 한가운데에 있습니다.', den='The 19th-century pump room where spa guests drank the waters, in the middle of town.', maps='Trinkhalle Bad Ischl', visit=dict(min=15, max=20)),
             dict(ko='장크트 니콜라우스 성당', en='St Nicholas Church', dko='황제 일가가 예배를 드린 시내 중심 성당입니다.', den='The town-centre parish church where the imperial family worshipped.', maps='Stadtpfarrkirche Bad Ischl', visit=dict(min=15, max=20)),
             dict(ko='카트린 케이블카', en='Katrin cable car', dko='시내 옆 카트린산에 올라 잘츠카머구트의 호수들과 다흐슈타인산을 봅니다.', den='Up the Katrin beside town for views over the Salzkammergut lakes to the Dachstein.', maps='Katrin Seilbahn Bad Ischl',
                  visit=dict(min=120, max=180, s='https://www.katrinseilbahn.com/', n='봄·가을 정비 기간과 날씨에 따라 쉽니다. 가기 전에 운행 여부를 확인하세요.|Closes for spring and autumn maintenance and in bad weather; check before going.')),
         ],
         hubs="    air: [SZG()],\n    rail: [['Bad Ischl', '바트 이슐역']],\n    bus: [['Bad Ischl Bahnhof', '바트 이슐역 버스 정류장', '잘츠부르크행 150번 버스|bus 150 to Salzburg']],\n",
         hubs_file='hubs-central.ts', hubs_before='  hallstatt: {\n', itin_file='itinerary-central.ts', itin_before='  hallstatt: {', itinerary=[1, 2, 3, 4, 5],
         season='황제 별장은 5~10월에 열고 11~12월엔 대림절 주말에만 엽니다.|The Kaiservilla opens May–October, and in November and December only on Advent weekends.',
         visit_file='visit-central.ts', visit_after=r"^  'durnstein-h\d+': v\(.*\),\n",
         stay=village('잘츠부르크', 'Salzburg', 'Salzburg', '잘츠부르크에서 150번 버스로 약 1시간 35분입니다.', 'About 1 hr 35 by bus 150 from Salzburg.', '시내', 'town'),
         stay_before='  hallstatt: [',
         routes=[('routes-central.ts', r"^  r\('salzburg', 'hallstatt', .*\),\n",
                  "  r('salzburg', 'bad-ischl', 'bus', 95, { fa: '잘츠부르크 중앙역|Salzburg Hbf', fb: '바트 이슐역|Bad Ischl', n: '150번 버스|bus 150' }),\n"
                  "  r('bad-ischl', 'hallstatt', 'bus', 55, { n: '버스 1회 환승|one change of bus' }),\n"
                  "  r('bad-ischl', 'linz', 'train', 105, { n: '아트낭-푸흐하임에서 환승|change at Attnang-Puchheim' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='시내는 걸어서 다닙니다. 잘츠부르크와는 150번 버스로, 할슈타트와는 버스나 기차로 이어집니다.', en='Walk around town; bus 150 runs to Salzburg, and buses or trains to Hallstatt.'),
         apps=OEBB, transit_before='  hallstatt: {', places=None,
         daytrips=[('salzburg', trip('bad-ischl', '150번 버스로 볼프강 호수를 지나 황제 별장과 강변 산책로를 보고 옛 제과점에서 케이크를 먹습니다.|Bus 150 past the Wolfgangsee to the Kaiservilla and the riverside promenade, with cake at an old pastry shop.'))]),
    dict(id='werfen', country='at', after='bad-ischl', ko='베르펜', en='Werfen', native='Werfen', lat=47.4762, lng=13.1906,
         blurb=['세계에서 가장 큰 얼음 동굴과 절벽 위 중세 성이 마주 보는 잘차흐 계곡의 마을입니다.',
                'A Salzach valley village where the world’s largest ice cave faces a medieval castle on its crag.'],
         highlights=[
             dict(ko='아이스리젠벨트 얼음 동굴', en='Eisriesenwelt ice cave', dko='산속 깊이 이어지는 세계 최대 얼음 동굴로 등불을 들고 얼음 기둥 사이를 걷습니다.', den='The world’s largest ice cave, deep in the mountain, toured by lamplight among ice columns.', maps='Eisriesenwelt Werfen',
                  visit=dict(min=180, max=240, s='https://www.eisriesenwelt.at/', n='5월 1일~10월 말 매일 엽니다(마지막 투어 15:45). 동굴 안은 여름에도 영하라 따뜻한 옷과 걷기 편한 신발이 필요하고 계단이 많습니다.|Open daily from 1 May to the end of October (last tour 15:45). It stays below freezing inside even in summer, so bring warm clothes and good shoes; there are many steps.', k='2026-10')),
             dict(ko='호엔베르펜 성', en='Hohenwerfen Castle', dko='계곡 위 바위에 선 11세기 성으로 맹금류 비행 시범이 유명합니다.', den='An 11th-century fortress on a rock above the valley, known for its birds-of-prey shows.', maps='Erlebnisburg Hohenwerfen',
                  visit=dict(min=120, max=150, c='mon', s='https://www.burg-hohenwerfen.at/', n='4월~11월 초에 열고 월요일(공휴일 제외)에 쉽니다.|Open April to early November; closed on Mondays except public holidays.', k='2026-10')),
             dict(ko='베르펜 마을', en='Werfen village', dko='성 아래 큰길을 따라 알록달록한 집과 식당이 이어지는 작은 장터 마을입니다.', den='A small market village of colourful houses and inns along the main street below the castle.', maps='Markt Werfen', visit=dict(min=20, max=30)),
         ],
         hubs="    air: [SZG()],\n    rail: [['Werfen', '베르펜역']],\n",
         hubs_file='hubs-central.ts', hubs_before='  hallstatt: {\n', itin_file='itinerary-central.ts', itin_before='  hallstatt: {', itinerary=[1, 2, 3],
         season='얼음 동굴은 5~10월에만 열고, 성은 4월~11월 초에 엽니다.|The ice cave opens May–October only; the castle April to early November.',
         visit_file='visit-central.ts', visit_after=r"^  'bad-ischl-h\d+': v\(.*\),\n",
         stay=village('잘츠부르크', 'Salzburg', 'Salzburg', '잘츠부르크에서 기차로 약 45분입니다.', 'About 45 min by train from Salzburg.'),
         stay_before='  hallstatt: [',
         routes=[('routes-central.ts', r"^  r\('bad-ischl', 'linz', .*\),\n", "  r('salzburg', 'werfen', 'train', 45),\n")],
         transit=dict(modes=['walk', 'bus', 'train', 'taxi'], ko='역에서 마을과 성은 걸어서 갑니다. 얼음 동굴은 여름에 마을에서 셔틀버스가 다니고, 내린 뒤 걷기와 케이블카로 입구까지 오릅니다.', en='Walk from the station to the village and castle. In summer a shuttle bus runs towards the ice cave, then a walk and a cable car reach the entrance.'),
         apps=OEBB, transit_before='  hallstatt: {', places=None,
         daytrips=[('salzburg', trip('werfen', '오전에 얼음 동굴에 오르고 오후에 호엔베르펜 성의 맹금류 시범을 봅니다. 동굴은 5~10월에만 엽니다.|The ice cave in the morning and the birds-of-prey show at Hohenwerfen in the afternoon; the cave opens May–October only.'))]),
]

if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
