#!/usr/bin/env python3
"""Switzerland step 2, batch 2 (2026-11-01): Bellinzona and Chur as new cities. Reuses
the batch-3 writer (add_daytrip_places3.main). Seasons and hours from the lifts' and sights' own pages and the regional
tourist boards (2026), rail/bus times from search.ch. Michelin picks wait for the Swiss 2026 guide (out 2 November).
Run once."""
import add_daytrip_places3 as T
from add_daytrip_places3 import trip, village

NEAR = ('근교', 'Nearby')
SBB = "      ta('sbb'),\n"
LIFT = '케이블카·산악열차는 계절 운행이고 날씨에 따라 운휴하니 당일 운행 여부를 확인하세요.|Lifts and mountain trains are seasonal and weather-dependent—check on the day.'
ZRH = "['Zürich Flughafen (ZRH)', '취리히 공항 (ZRH)', '취리히|Zurich']"

CITIES = [
    dict(id='bellinzona', country='ch', after='kandersteg', ko='벨린초나', en='Bellinzona', native='Bellinzona', lat=46.1946, lng=9.0240,
         blurb=['알프스 고개 길목을 지키던 티치노 주의 주도. 언덕마다 선 중세 성 세 채가 유네스코 세계유산입니다.',
                'Ticino’s capital, guarding the routes down from the Alpine passes, with three medieval castles on its hills listed by UNESCO.'],
         highlights=[
             dict(ko='카스텔그란데', en='Castelgrande', dko='시내 한가운데 바위 언덕 위의 가장 큰 성으로, 성벽 위를 걸으며 시내와 다른 두 성을 봅니다.', den='The largest of the three, on a rock in the middle of town, with walks along its walls looking out to the other two castles.', maps='Castelgrande Bellinzona',
                  visit=dict(min=60, max=90, c='daily', s='https://fortezzabellinzona.ch/visitare/', n='3월 28일~11월 8일 10:00~18:00, 11월 9일~3월 18일 10:30~16:00(마지막 입장 30분 전)에 엽니다. 겨울엔 세 성 가운데 이곳만 안을 볼 수 있습니다. 성인 CHF 15이고 피아체타 델라 발레의 엘리베이터로 오릅니다.|Open 10:00–18:00 from 28 March to 8 November and 10:30–16:00 from 9 November to 18 March (last entry 30 min before); in winter it is the only castle open inside. Adults CHF 15; a lift goes up from Piazzetta della Valle.', k='2026-11')),
             dict(ko='몬테벨로 성', en='Montebello Castle', dko='구시가 동쪽 언덕의 성으로, 성벽과 해자, 도개교가 잘 남아 있습니다.', den='The castle on the hill east of the old town, with its walls, moat and drawbridge well preserved.', maps='Castello di Montebello Bellinzona',
                  visit=dict(min=45, max=60, s='https://fortezzabellinzona.ch/visitare/', n='콜레자타 광장에서 걸어서 약 10분입니다. 성 안은 3월 28일~11월 8일에만 열고(성인 CHF 10), 겨울엔 안뜰만 볼 수 있습니다.|About 10 min on foot from Piazza Collegiata. The inside opens only from 28 March to 8 November (adults CHF 10); in winter only the courtyards can be visited.', k='2026-11')),
             dict(ko='사소 코르바로 성', en='Sasso Corbaro Castle', dko='세 성 가운데 가장 높은 곳에 선 성으로, 티치노 계곡과 마조레 호수 쪽 전망이 좋습니다.', den='The highest of the three castles, looking down the Ticino valley towards Lake Maggiore.', maps='Castello di Sasso Corbaro',
                  visit=dict(min=45, max=60, s='https://fortezzabellinzona.ch/visitare/', n='몬테벨로 성에서 걸어서 약 30분, 역에서 4번 버스로도 갑니다. 성 안은 3월 28일~11월 8일에만 엽니다(성인 CHF 15).|About 30 min on foot from Montebello, or bus 4 from the station. The inside opens only from 28 March to 8 November (adults CHF 15).', k='2026-11')),
             dict(ko='구시가와 토요 시장', en='Old town and Saturday market', dko='콜레자타 성당 앞 광장과 아케이드 골목으로, 토요일 아침엔 치즈·살루미·채소를 파는 큰 시장이 섭니다.', den='The square before the Collegiata church and the arcaded lanes, filled on Saturday mornings by a big market of cheese, salumi and vegetables.', maps='Collegiata dei Santi Pietro e Stefano Bellinzona',
                  visit=dict(min=45, max=90, s='https://www.bellinzonaevalli.ch/en/commons/details/The-market-of-Bellinzona/2895.html', n='토요 시장은 일 년 내내 7:30~13:00에 열립니다.|The Saturday market runs all year, 7:30–13:00.', k='2026-11')),
             dict(ko='빌라 데이 체드리 미술관', en='Villa dei Cedri', dko='삼나무 정원과 포도밭에 둘러싸인 저택 미술관으로, 스위스·이탈리아 근현대 미술을 전시합니다.', den='A villa museum among cedars and a small vineyard, showing Swiss and Italian art of the 19th and 20th centuries.', maps='Museo Villa dei Cedri',
                  visit=dict(min=60, max=90, c='mon,tue', s='https://www.bellinzonaevalli.ch/en/commons/details/Museum-Villa-dei-Cedri/2762.html', n='수·목 14:00~18:00, 금~일 10:00~18:00에 열고 월·화요일에 쉽니다. 성인 CHF 12.|Open Wednesday and Thursday 14:00–18:00, Friday to Sunday 10:00–18:00; closed Mondays and Tuesdays. Adults CHF 12.', k='2026-11')),
             dict(ko='카라스크 출렁다리', en='Carasc Tibetan bridge', dko='계곡 위 130m 높이에 걸린 길이 270m의 출렁다리로, 쿠르주트 옛 마을과 함께 둘러봅니다.', den='A 270 m suspension footbridge hanging 130 m above a gorge, visited together with the old hamlet of Curzútt.', maps='Ponte Tibetano Carasc', group=NEAR,
                  visit=dict(min=150, max=210, s='https://www.bellinzonaevalli.ch/en/commons/details/Tibetan-bridge-Carasc-/137557.html', n='역에서 2번 버스로 몬테 카라소 케이블카 역(약 10분)에 가서 모르네라행 케이블카를 타고 쿠르주트에서 내립니다. 케이블카는 mornera.ch에서 예약할 수 있습니다.|Bus 2 from the station to the Monte Carasso cable car (about 10 min), then ride towards Mornera and get off at Curzútt; book the cable car at mornera.ch.', k='2026-11')),
         ],
         hubs=f"    air: [{ZRH}, ['Milano Malpensa (MXP)', '밀라노 말펜사 공항 (MXP)', '밀라노|Milan']],\n    rail: [['Bellinzona', '벨린초나역']],\n",
         hubs_file='hubs-west.ts', hubs_before='  vaduz: {\n', itin_file='itinerary-central.ts', itin_before='  stuttgart: {',
         itinerary={'days': [['', 4, 1, 2, 3, 5]], 'trips': [['카라스크 출렁다리|Carasc Tibetan bridge', 6]]},
         season='봄(4~5월)과 가을이 걷기 좋습니다. 11월 9일~3월 18일엔 카스텔그란데만 안을 볼 수 있고 나머지 두 성은 안뜰만 엽니다.|Spring (April–May) and autumn are best for walking. From 9 November to 18 March only Castelgrande is open inside; the other two castles open just their courtyards.',
         visit_file='visit-ch.ts', visit_after=r"^  'kandersteg-h\d+': v\(.*\),\n",
         stay=[('구시가', 'Old town', 'Piazza Collegiata Bellinzona', '구시가|Old town', '성과 광장이 걸어서 가깝고 역까지도 걸어서 약 10분입니다.|Close to the castles and the squares, about 10 min on foot from the station.'),
               ('역 주변', 'Around the station', 'Bellinzona stazione', '역 앞|By the station', '루가노·로카르노·취리히행 기차를 타기 편합니다.|Handy for trains to Lugano, Locarno and Zurich.')],
         stay_before='  montserrat: [',
         routes=[('routes-west.ts', r"^  r\('kandersteg', 'zermatt', .*\),\n",
                  "  r('lugano', 'bellinzona', 'train', 14),\n"
                  "  r('locarno', 'bellinzona', 'train', 23),\n"
                  "  r('zurich', 'bellinzona', 'train', 97),\n"
                  "  r('lucerne', 'bellinzona', 'train', 84),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='구시가와 카스텔그란데는 걸어서 다닙니다. 사소 코르바로 성은 4번 버스로, 카라스크 출렁다리는 2번 버스와 케이블카로 갑니다.', en='Walk the old town and up to Castelgrande; bus 4 runs to Sasso Corbaro, and bus 2 plus the cable car to the Carasc bridge.'),
         apps=SBB, transit_before='  vienna: {', places=None, daytrips=[]),
    dict(id='chur', country='ch', after='bellinzona', ko='쿠어', en='Chur', native='Chur', lat=46.8508, lng=9.5320,
         blurb=['5,000년 넘게 사람이 살아 온 스위스에서 가장 오래된 도시로 꼽히는 그라우뷘덴의 주도. 빙하특급·베르니나 특급이 지나는 산악 철도의 출발점입니다.',
                'Graubünden’s capital, often called Switzerland’s oldest town, and the starting point of the Glacier and Bernina Express mountain railways.'],
         highlights=[
             dict(ko='구시가', en='Old town', dko='알록달록한 집과 분수가 있는 차 없는 골목으로, 아르카스 광장과 마르틴 성당 주변을 걷습니다.', den='Car-free lanes of colourful houses and fountains around the Arcas square and St Martin’s church.', maps='Kirche St. Martin Chur', visit=dict(min=45, max=60)),
             dict(ko='쿠어 대성당', en='Chur Cathedral', dko='언덕 위 주교 구역에 선 12~13세기 대성당으로, 고딕 날개 제단과 지하 납골당이 있습니다.', den='The 12th–13th-century cathedral in the bishop’s quarter on the hill, with a Gothic winged altar and a crypt.', maps='Kathedrale St. Mariä Himmelfahrt Chur',
                  visit=dict(min=30, max=60, n='성당은 무료입니다. 옆 대성당 보물 박물관은 운영 시간이 계절마다 달라 확인하고 가세요.|The cathedral is free; check the seasonal hours of the cathedral treasure museum next door.')),
             dict(ko='그라우뷘덴 미술관', en='Bündner Kunstmuseum', dko='옛 저택과 새 전시관을 이은 주립 미술관으로, 조반니 세간티니와 키르히너 등 알프스 화가들의 작품이 있습니다.', den='The cantonal art museum in a villa and a new wing, with Alpine painters such as Segantini and Kirchner.', maps='Bündner Kunstmuseum Chur',
                  visit=dict(min=60, max=90, c='mon', s='https://kunstmuseum.gr.ch/', n='화~일 10~17시(목요일 20시까지)에 열고 월요일에 쉽니다. 성인 CHF 15.|Open Tuesday to Sunday 10:00–17:00 (Thursday until 20:00); closed Mondays. Adults CHF 15.', k='2026-11')),
             dict(ko='레티아 박물관', en='Rätisches Museum', dko='선사 시대부터 근대까지 그라우뷘덴의 역사를 보여 주는 박물관입니다.', den='Graubünden’s history from prehistory to modern times.', maps='Rätisches Museum Chur',
                  visit=dict(min=60, max=90, c='mon', s='https://raetischesmuseum.gr.ch/', n='화~일 10~17시에 열고 월요일에 쉽니다. 성인 CHF 6, 역에서 걸어서 약 10분입니다.|Open Tuesday to Sunday 10:00–17:00; closed Mondays. Adults CHF 6, about 10 min on foot from the station.', k='2026-11',
                             x=[('2026년 12월 25일, 2027년 1월 1일은 휴관합니다.|Closed 25 December 2026 and 1 January 2027.', '2027-01-01')])),
             dict(ko='브람브뤼에슈', en='Brambrüesch', dko='시내에서 곤돌라로 바로 오르는 쿠어의 앞산으로, 여름엔 산책과 썰매, 겨울엔 스키를 탑니다.', den='Chur’s own mountain, straight up from town by gondola, for summer walks and winter skiing.', maps='Bergbahnen Chur Brambrüesch', group=NEAR,
                  visit=dict(min=120, max=180, n='산 아래 곤돌라를 새 10인승 곤돌라로 바꾸는 공사가 진행 중이며 2026/27 겨울 시즌 개통 예정입니다. 운행 여부를 확인하고 가세요.|The lower gondola is being replaced by a new 10-seater, due for the 2026/27 winter season; check that it is running before you go.', k='2026-11')),
             dict(ko='라인 협곡 루이나울타', en='Rhine Gorge (Ruinaulta)', dko='빙하 시대 산사태가 깎아 만든 ‘스위스의 그랜드캐니언’으로, 일 스피르 전망대에서 흰 절벽 사이를 굽이치는 라인강을 내려다봅니다.', den='The “Swiss Grand Canyon”, cut through an ancient landslide, seen from the Il Spir platform above the winding Rhine.', maps='Aussichtsplattform Il Spir', group=NEAR,
                  visit=dict(min=180, max=240, s='https://www.flimslaax.com/naturerlebnisse/rheinschlucht', n='쿠어에서 80·81번 버스로 플림스 발트하우스(약 35분)에 가서 걸어서 약 45분이면 일 스피르 전망대이며 일 년 내내 열려 있습니다. 협곡 바닥은 레티셰 철도 기차(발렌다스-사곤까지 약 25분)로 지나갑니다.|Bus 80 or 81 from Chur to Flims Waldhaus (about 35 min), then about 45 min on foot to the Il Spir platform, open all year. Rhaetian Railway trains run along the gorge floor (about 25 min to Valendas-Sagogn).', k='2026-11')),
         ],
         hubs=f"    air: [{ZRH}],\n    rail: [['Chur', '쿠어역']],\n",
         hubs_file='hubs-west.ts', hubs_before='  vaduz: {\n', itin_file='itinerary-central.ts', itin_before='  stuttgart: {',
         itinerary={'days': [['', 1, 2, 4, 3]], 'trips': [['브람브뤼에슈|Brambrüesch', 5], ['라인 협곡|Rhine Gorge', 6]]},
         season='여름(6~9월)엔 라인 협곡 산책과 산행이 좋고, 겨울엔 빙하특급·베르니나 특급의 설경이 좋습니다.|Summer (June–September) suits the Rhine Gorge and the hills; winter brings snowy views from the Glacier and Bernina Express.',
         visit_file='visit-ch.ts', visit_after=r"^  'bellinzona-h\d+': v\(.*\),\n",
         stay=[('구시가', 'Old town', 'Chur Altstadt', '구시가|Old town', '식당과 박물관이 모여 있고 역까지 걸어서 약 10분입니다.|Restaurants and museums close together, about 10 min on foot from the station.'),
               ('역 주변', 'Around the station', 'Chur Bahnhof', '역 앞|By the station', '빙하특급·베르니나 특급과 버스를 타기 편합니다.|Handy for the Glacier and Bernina Express and the buses.')],
         stay_before='  montserrat: [',
         routes=[('routes-west.ts', r"^  r\('lucerne', 'bellinzona', .*\),\n",
                  "  r('zurich', 'chur', 'train', 75),\n"
                  "  r('chur', 'st-moritz', 'train', 120, { n: '알불라선|Albula line' }),\n"
                  "  r('st-gallen', 'chur', 'train', 83),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다닙니다. 브람브뤼에슈 곤돌라는 시내에서 타고, 플림스(라인 협곡)는 80·81번 버스로 갑니다.', en='Walk the old town; the Brambrüesch gondola leaves from town, and buses 80 and 81 run to Flims for the Rhine Gorge.'),
         apps=SBB, transit_before='  vienna: {', places=None,
         daytrips=[('zurich', trip('chur', '기차로 쿠어에 가 구시가와 대성당을 보고, 버스로 플림스에 가 라인 협곡 전망대까지 걷습니다.|By train to Chur for the old town and cathedral, then the bus to Flims and a walk to the Rhine Gorge viewpoint.'))]),
]

if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
