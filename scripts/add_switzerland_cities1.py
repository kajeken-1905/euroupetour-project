#!/usr/bin/env python3
"""Switzerland step 2, batch 1 (2026-11-01): Lauterbrunnen, Locarno, St. Gallen and Kandersteg as new cities. Reuses
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
    dict(id='lauterbrunnen', country='ch', after='st-moritz', ko='라우터브루넨', en='Lauterbrunnen', native='Lauterbrunnen', lat=46.5935, lng=7.9091,
         blurb=['깎아지른 절벽 사이로 폭포 72개가 떨어지는 U자 계곡 마을. 절벽 위 차 없는 마을 뮈렌·벵엔과 쉴트호른으로 가는 출발점입니다.',
                'A village in a sheer U-shaped valley of 72 waterfalls, and the way up to the car-free cliff-top villages of Mürren and Wengen and the Schilthorn.'],
         highlights=[
             dict(ko='슈타우프바흐 폭포', en='Staubbach Falls', dko='마을 바로 뒤 절벽에서 297m를 떨어지는 스위스에서 가장 높은 자유 낙하 폭포입니다.', den='Switzerland’s highest free-falling waterfall, dropping 297 m from the cliff right behind the village.', maps='Staubbachfall',
                  visit=dict(min=30, max=45, s='https://lauterbrunnen.swiss/', n='마을에서 언제든 볼 수 있습니다. 폭포 아래로 오르는 길은 여름에만 엽니다.|Seen from the village any time; the path up to the foot of the falls opens only in summer.', k='2026-11')),
             dict(ko='트뤼멜바흐 폭포', en='Trümmelbach Falls', dko='빙하 녹은 물이 산속 바위 틈을 10단으로 쏟아져 내리는 폭포로, 산속 엘리베이터와 계단으로 오르며 봅니다.', den='Glacier meltwater thundering down ten falls inside the mountain, seen from a tunnel lift and steps.', maps='Trümmelbachfälle',
                  visit=dict(min=60, max=90, s='https://www.truemmelbachfaelle.ch/', n='4월 초~11월 초에 매일 9~17시(7·8월 8:30~18시)에 엽니다. 성인 CHF 18이며 4세 미만과 개는 들어갈 수 없습니다. 141번 버스로 ‘트뤼멜바흐팰레’ 정류장에 내립니다.|Open daily early April to early November, 9:00–17:00 (8:30–18:00 in July and August). Adults CHF 18; no children under 4 or dogs. Bus 141 to the Trümmelbachfälle stop.', k='2026-11',
                             x=[('2026년 시즌은 11월 초에 끝났고 2027년 4월 초에 다시 엽니다.|The 2026 season ended in early November; it reopens in early April 2027.', '2027-04-01')])),
             dict(ko='뮈렌', en='Mürren', dko='해발 1,638m 절벽 위의 차 없는 마을로, 계곡 건너편에 아이거·묀히·융프라우가 줄지어 섭니다.', den='A car-free village on a cliff top at 1,638 m, facing the Eiger, Mönch and Jungfrau across the valley.', maps='Mürren BLM station',
                  visit=dict(min=120, max=180, s='https://muerren.swiss/', n='라우터브루넨에서 케이블카로 그뤼치알프에 올라 산악 열차로 갈아타면 약 20분입니다.|About 20 min from Lauterbrunnen: the cable car up to Grütschalp, then the mountain railway.', k='2026-11')),
             dict(ko='쉴트호른 피츠 글로리아', en='Schilthorn Piz Gloria', dko='영화 〈007 여왕 폐하 대작전〉 무대가 된 해발 2,970m 정상의 회전 전망 식당과 360도 알프스 파노라마입니다.', den='The 2,970 m summit of the Bond film On Her Majesty’s Secret Service, with a revolving restaurant and a 360° Alpine panorama.', maps='Piz Gloria Schilthorn',
                  visit=dict(min=180, max=240, s='https://schilthorn.ch/', n='라우터브루넨에서 141번 버스로 슈테헬베르크(약 12분)에 가서 김멜발트·뮈렌·비르크를 거치는 케이블카로 오릅니다. 정비 기간(주로 11월)엔 운휴합니다.|Bus 141 to Stechelberg (about 12 min), then cable cars via Gimmelwald, Mürren and Birg. Closed for servicing for a spell, usually in November.', k='2026-11')),
             dict(ko='벵엔', en='Wengen', dko='계곡 반대편 절벽 위의 차 없는 마을로, 융프라우를 정면으로 보며 쉬고 1월엔 라우버호른 스키 활강 경기가 열립니다.', den='The car-free village on the other cliff, looking straight at the Jungfrau, home to the Lauberhorn downhill every January.', maps='Wengen station',
                  visit=dict(min=90, max=150, s='https://wengen.swiss/', n='라우터브루넨에서 산악 열차로 오릅니다. 2027년 라우버호른 경기는 1월 15~17일입니다.|By mountain train from Lauterbrunnen. The 2027 Lauberhorn races are 15–17 January.', k='2026-11')),
         ],
         hubs=f"    air: [{ZRH}],\n    rail: [['Lauterbrunnen', '라우터브루넨역']],\n",
         hubs_file='hubs-west.ts', hubs_before='  vaduz: {\n', itin_file='itinerary-central.ts', itin_before='  stuttgart: {',
         itinerary={'days': [['', 1, 2, 5]], 'trips': [['뮈렌과 쉴트호른|Mürren & Schilthorn', 3, 4]]},
         season='하이킹은 6월 중순~9월, 폭포는 눈이 녹는 5~7월에 가장 세찹니다. 트뤼멜바흐 폭포는 11월~3월에 닫습니다.|Hike mid-June to September; the falls are fullest with snowmelt in May–July. The Trümmelbach Falls close November–March.',
         visit_file='visit-ch.ts', visit_after=r"^  'st-moritz-h\d+': v\(.*\),\n",
         stay=village('인터라켄', 'Interlaken', 'Interlaken', '인터라켄 동역에서 기차로 약 20분입니다.', 'About 20 min by train from Interlaken Ost.'),
         stay_before='  montserrat: [',
         routes=[('routes-west.ts', r"^  r\('interlaken', 'grindelwald', .*\),\n",
                  "  r('interlaken', 'lauterbrunnen', 'train', 22, { fa: '인터라켄 동역|Interlaken Ost' }),\n"
                  "  r('grindelwald', 'lauterbrunnen', 'train', 39, { n: '츠바이뤼치넨에서 환승|change at Zweilütschinen' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='마을은 걸어서 다닙니다. 벵엔·뮈렌은 산악 열차와 케이블카로, 트뤼멜바흐 폭포와 쉴트호른 케이블카는 141번 버스로 갑니다.', en='Walk the village; mountain trains and cable cars climb to Wengen and Mürren, and bus 141 runs to the Trümmelbach Falls and the Schilthorn cable car.'),
         apps=SBB, transit_before='  vienna: {', places=None,
         daytrips=[('interlaken', trip('lauterbrunnen', '기차로 라우터브루넨에 가 슈타우프바흐 폭포를 보고, 케이블카와 산악 열차로 뮈렌에 올라 절벽 위 마을을 걷습니다.|By train to Lauterbrunnen for the Staubbach Falls, then the cable car and mountain railway up to Mürren on its cliff.'))]),
    dict(id='locarno', country='ch', after='lauterbrunnen', ko='로카르노', en='Locarno', native='Locarno', lat=46.1709, lng=8.7995,
         blurb=['스위스에서 가장 햇볕이 많은 마조레 호숫가 도시. 8월 영화제가 열리는 피아차 그란데와 절벽 위 성당, 에메랄드빛 베르차스카 계곡이 가깝습니다.',
                'Switzerland’s sunniest town, on Lake Maggiore: the Piazza Grande of the August film festival, a cliff-top sanctuary and the emerald Verzasca valley close by.'],
         highlights=[
             dict(ko='피아차 그란데', en='Piazza Grande', dko='돌로 포장한 큰 광장과 아케이드 거리로, 8월 로카르노 영화제 때는 대형 야외 상영관이 됩니다.', den='The big cobbled square and its arcades, turned into a huge open-air cinema for the Locarno Film Festival in August.', maps='Piazza Grande Locarno', visit=dict(min=30, max=45)),
             dict(ko='마돈나 델 사소 성당', en='Madonna del Sasso', dko='시내 위 절벽에 선 15세기 순례 성당으로 호수와 시내가 내려다보입니다. 푸니쿨라나 오르막길로 오릅니다.', den='A 15th-century pilgrimage church on the cliff above town, looking over the lake; up by funicular or a steep path.', maps='Santuario Madonna del Sasso Orselina',
                  visit=dict(min=60, max=90, s='https://www.funicolarelocarno.ch/', n='시내 역 앞에서 오르셀리나행 푸니쿨라를 탑니다. 성당 박물관은 10월 말에 닫았습니다(무료).|Take the funicular to Orselina from the town centre; the sanctuary museum (free) closed at the end of October.', k='2026-11')),
             dict(ko='카르다다·치메타', en='Cardada and Cimetta', dko='오르셀리나에서 케이블카로 카르다다(1,340m)에, 체어리프트로 치메타(1,671m)에 올라 마조레 호수와 알프스를 봅니다.', den='Cable car from Orselina to Cardada (1,340 m) and a chairlift to Cimetta (1,671 m) over Lake Maggiore and the Alps.', maps='Funivia Orselina Cardada',
                  visit=dict(min=150, max=240, s='https://www.cardada.ch/', n='겨울(12월 19일~3월 18일)엔 체어리프트가 금~일요일·공휴일에만 다닙니다.|In winter (19 December–18 March) the chairlift runs Friday to Sunday and on holidays only.', k='2026-11',
                             x=[('2026년 11월 9일~12월 18일은 운휴합니다.|Closed 9 November–18 December 2026.', '2026-12-18')])),
             dict(ko='비스콘티 성', en='Castello Visconteo', dko='밀라노 비스콘티 가문이 다시 지은 중세 성으로 시립·고고학 박물관이 들어 있습니다.', den='The medieval castle rebuilt by Milan’s Visconti, now the town and archaeology museum.', maps='Castello Visconteo Locarno',
                  visit=dict(min=45, max=60, c='mon', s='https://www.ascona-locarno.com/en/venues/details/Castello-Visconteo/79252', n='4~10월 화~일 10:00~16:30에 열고 월요일에 쉽니다.|Open April–October, Tuesday to Sunday 10:00–16:30; closed on Mondays.', k='2026-11',
                             x=[('11월~3월은 겨울 휴관입니다.|Closed for winter from November to March.', '2027-03-31')])),
             dict(ko='아스코나 호숫가', en='Ascona lakefront', dko='파스텔빛 집과 카페가 줄지은 이웃 마을 아스코나의 호숫가 산책로입니다.', den='The lakeside promenade of neighbouring Ascona, lined with pastel houses and cafés.', maps='Lungolago Ascona', group=NEAR,
                  visit=dict(min=90, max=120, n='로카르노에서 버스로 약 15분이며 여름엔 배도 다닙니다.|About 15 min by bus from Locarno, and by boat in summer.')),
             dict(ko='베르차스카 계곡 라베르테초', en='Verzasca valley at Lavertezzo', dko='에메랄드빛 강물 위에 두 아치의 돌다리 ‘폰테 데이 살티’가 걸린 계곡 마을입니다.', den='The valley village where the twin-arched Ponte dei Salti crosses the emerald river.', maps='Ponte dei Salti Lavertezzo', group=NEAR,
                  visit=dict(min=180, max=240, s='https://www.ascona-locarno.com/en/explore/valle-verzasca', n='로카르노에서 기차·321번 버스로 약 40분입니다. 강물이 차고 물살이 빨라 수영은 조심해야 합니다.|About 40 min by train and bus 321 from Locarno. The river is cold and fast, so take care swimming.', k='2026-11')),
             dict(ko='브리사고 섬', en='Brissago Islands', dko='마조레 호수의 작은 섬 전체가 아열대 식물 1,700여 종을 기르는 식물원입니다.', den='A small island on Lake Maggiore that is entirely a botanical garden of subtropical plants.', maps='Isole di Brissago', group=NEAR,
                  visit=dict(min=150, max=210, s='https://www.isolebrissago.ch/', n='3월 하순~11월 중순에만 열고 로카르노·아스코나에서 배로만 갑니다. 입장료와 배표는 따로 냅니다.|Open only from late March to mid-November, reached by boat from Locarno or Ascona; garden entry and the boat are paid separately.')),
         ],
         hubs=f"    air: [{ZRH}, ['Milano Malpensa (MXP)', '밀라노 말펜사 공항 (MXP)', '밀라노|Milan']],\n    rail: [['Locarno', '로카르노역']],\n",
         hubs_file='hubs-west.ts', hubs_before='  vaduz: {\n', itin_file='itinerary-central.ts', itin_before='  stuttgart: {',
         itinerary={'days': [['', 1, 4, 2, 3]], 'trips': [['아스코나|Ascona', 5], ['베르차스카 계곡|Verzasca valley', 6], ['브리사고 섬|Brissago Islands', 7]]},
         season='봄(4~5월)과 초가을이 걷기 좋고, 8월엔 영화제로 숙소가 매우 비쌉니다. 성과 식물원은 겨울에 닫습니다.|Spring (April–May) and early autumn are best for walking; the August film festival makes rooms very expensive. The castle and the island garden close in winter.',
         visit_file='visit-ch.ts', visit_after=r"^  'lauterbrunnen-h\d+': v\(.*\),\n",
         stay=[('피아차 그란데 주변', 'Around the Piazza Grande', 'Piazza Grande Locarno', '시내|Town centre', '역과 호숫가, 푸니쿨라와 버스 정류장이 걸어서 가깝습니다.|The station, the lakefront, the funicular and the buses are all within walking distance.'),
               ('아스코나', 'Ascona', 'Ascona', '호숫가 마을|Lakeside village', '호숫가 식당과 산책로가 모여 있고 로카르노까지 버스로 약 15분입니다.|Lakeside restaurants and promenade, about 15 min by bus from Locarno.')],
         stay_before='  montserrat: [',
         routes=[('routes-west.ts', r"^  r\('grindelwald', 'lauterbrunnen', .*\),\n",
                  "  r('lugano', 'locarno', 'train', 33),\n"
                  "  r('lucerne', 'locarno', 'train', 117, { n: '벨린초나 부근에서 환승|change near Bellinzona' }),\n"
                  "  r('zurich', 'locarno', 'train', 130, { n: '아르트골다우·벨린초나 부근에서 환승|change at Arth-Goldau and near Bellinzona' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train', 'ferry'], ko='시내는 걸어서 다닙니다. 마돈나 델 사소는 푸니쿨라로, 아스코나는 버스로, 베르차스카 계곡은 321번 버스로 가고 봄~가을엔 호수 배가 다닙니다.', en='Walk the town; take the funicular to Madonna del Sasso, the bus to Ascona and bus 321 up the Verzasca valley, and the lake boats from spring to autumn.'),
         apps=SBB, transit_before='  vienna: {', places=None, daytrips=[]),
    dict(id='st-gallen', country='ch', after='locarno', ko='장크트갈렌', en='St. Gallen', native='St. Gallen', lat=47.4245, lng=9.3767,
         blurb=['8세기 수도원에서 시작한 동부 스위스의 중심 도시. 세계유산인 바로크 수도원 도서관이 있고, 기차로 30분 거리에 아펜첼 산골 마을이 있습니다.',
                'Eastern Switzerland’s main town, grown from an 8th-century abbey, with a World Heritage Baroque library and the Appenzell hills half an hour away.'],
         highlights=[
             dict(ko='수도원 도서관', en='Abbey Library', dko='유네스코 세계유산 수도원 지구의 바로크 도서관으로, 천 년 넘은 필사본이 가득한 ‘영혼의 약국’이라 불리는 방입니다.', den='The Baroque library of the UNESCO-listed Abbey District, a hall of thousand-year-old manuscripts called the “pharmacy of the soul”.', maps='Stiftsbibliothek St. Gallen',
                  visit=dict(min=60, max=90, c='daily', s='https://www.stiftsbezirk.ch/', n='매일 10~17시에 엽니다. 겨울 전시는 2026년 11월 24일~2027년 4월 25일입니다. 바닥 보호용 덧신을 신고 들어갑니다.|Open daily 10:00–17:00; the winter exhibition runs 24 November 2026–25 April 2027. Visitors wear felt overshoes.', k='2026-11',
                             x=[('2026년 11월 9~23일과 12월 24·25일은 닫습니다.|Closed 9–23 November and 24–25 December 2026.', '2026-12-25')])),
             dict(ko='장크트갈렌 대성당', en='St. Gallen Cathedral', dko='두 탑이 선 후기 바로크 대성당으로, 초록빛 천장화와 화려한 성가대석이 있습니다.', den='The twin-towered late-Baroque cathedral, with green-toned ceiling frescoes and a lavish choir.', maps='Kathedrale St. Gallen', visit=dict(min=20, max=30)),
             dict(ko='섬유 박물관', en='Textile Museum', dko='자수와 레이스로 세계에 이름을 떨친 장크트갈렌의 섬유 역사를 보여 주는 박물관입니다.', den='The story of the embroidery and lace that made St. Gallen famous worldwide.', maps='Textilmuseum St. Gallen',
                  visit=dict(min=60, max=90, c='mon', s='https://www.textilmuseum.ch/en/', n='화~일 10~17시에 열고 월요일에 쉽니다.|Open Tuesday to Sunday 10:00–17:00; closed on Mondays.', k='2026-11')),
             dict(ko='드라이 바이렌', en='Drei Weieren', dko='시내 남쪽 언덕 위 세 연못으로 여름엔 수영하고, 시내와 보덴 호수 쪽 전망이 좋습니다.', den='Three ponds on the hill south of town, for summer swims and views over the city towards Lake Constance.', maps='Drei Weieren St. Gallen',
                  visit=dict(min=60, max=90, n='시내에서 뮐레크 푸니쿨라로 오르거나 걸어서 약 20분입니다. 수영은 여름에만 합니다.|Up by the Mühlegg funicular from town or about 20 min on foot; swimming is summer only.')),
             dict(ko='아펜첼', en='Appenzell', dko='그림으로 꾸민 집들이 늘어선 하우프트가세의 산골 마을로, 아펜첼 치즈와 전통 축제로 유명합니다.', den='A hill village whose Hauptgasse is lined with painted houses, known for its cheese and traditions.', maps='Appenzell Rathaus', group=NEAR,
                  visit=dict(min=120, max=180, s='https://www.appenzell.ch/en', n='장크트갈렌에서 S21 열차로 약 36분입니다. 2027년 4월 25일엔 광장 주민 총회(란츠게마인데)가 열립니다.|About 36 min on the S21 from St. Gallen; the open-air Landsgemeinde meets on 25 April 2027.', k='2026-11')),
             dict(ko='에벤알프와 에셔 산장', en='Ebenalp and the Aescher', dko='케이블카로 오른 에벤알프에서 동굴 예배당 빌트키르히리를 지나 절벽에 붙은 에셔 산장으로 내려갑니다.', den='A cable car up the Ebenalp, then down past the Wildkirchli cave chapel to the Aescher inn clinging to the cliff.', maps='Berggasthaus Aescher', group=NEAR,
                  visit=dict(min=180, max=300, s='https://www.ebenalp.ch/', n='아펜첼선 기차로 바서라우엔역에 가서 걸어서 2분, 케이블카는 6분입니다. 왕복 성인 CHF 36.|Take the Appenzell line to Wasserauen, walk 2 min to the cable car (6 min ride); adult return CHF 36.', k='2026-11',
                             x=[('2026년 11월 2일~12월 24일은 정비로 운휴합니다.|Closed for servicing 2 November–24 December 2026.', '2026-12-24')])),
             dict(ko='젠티스', en='Säntis', dko='동부 스위스 최고봉(2,502m)으로 케이블카를 타면 6개국 산이 보입니다.', den='Eastern Switzerland’s highest peak (2,502 m), where the cable car opens views into six countries.', maps='Säntis Schwebebahn', group=NEAR,
                  visit=dict(min=180, max=240, s='https://www.saentisbahn.ch/en', n='슈베그알프에서 케이블카로 오릅니다. 2026년 5월부터 새 케이블카 공사로 운휴 중이며 12월 중순 재개 예정입니다.|The cable car leaves from Schwägalp; it has been closed for renewal since May 2026 and is due to reopen in mid-December.', k='2026-11',
                             x=[('새 케이블카 공사로 운휴 중이며 2026년 12월 중순 재개 예정입니다.|Closed for renewal; due to reopen in mid-December 2026.', '2026-12-18')])),
         ],
         hubs=f"    air: [{ZRH}],\n    rail: [['St. Gallen', '장크트갈렌역']],\n",
         hubs_file='hubs-west.ts', hubs_before='  vaduz: {\n', itin_file='itinerary-central.ts', itin_before='  stuttgart: {',
         itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['아펜첼과 에벤알프|Appenzell & Ebenalp', 5, 6], ['젠티스|Säntis', 7]]},
         season='여름(6~9월)엔 아펜첼 산행과 드라이 바이렌 수영이 좋습니다. 산 케이블카는 11월과 4월에 정비로 쉬는 때가 많습니다.|Summer (June–September) suits Appenzell hikes and swims at Drei Weieren; the mountain lifts often pause for servicing in November and April.',
         visit_file='visit-ch.ts', visit_after=r"^  'locarno-h\d+': v\(.*\),\n",
         stay=[('구시가', 'Old town', 'St. Gallen Altstadt', '구시가|Old town', '수도원 지구와 식당이 모여 있고 역까지 걸어서 약 10분입니다.|Close to the Abbey District and the restaurants, about 10 min on foot from the station.'),
               ('역 주변', 'Around the station', 'St. Gallen Bahnhof', '역 앞|By the station', '취리히행 기차와 아펜첼행 기차를 타기 편합니다.|Handy for trains to Zurich and up to Appenzell.')],
         stay_before='  montserrat: [',
         routes=[('routes-west.ts', r"^  r\('zurich', 'locarno', .*\),\n",
                  "  r('zurich', 'st-gallen', 'train', 60),\n"
                  "  r('st-gallen', 'bregenz', 'train', 28, { n: '유로시티 기준|EuroCity' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다닙니다. 드라이 바이렌은 뮐레크 푸니쿨라로, 아펜첼과 바서라우엔(에벤알프)은 아펜첼선 기차로 갑니다.', en='Walk the old town; the Mühlegg funicular climbs to Drei Weieren, and Appenzell trains run to Appenzell and Wasserauen (Ebenalp).'),
         apps=SBB, transit_before='  vienna: {', places=None,
         daytrips=[('zurich', trip('st-gallen', '기차로 장크트갈렌에 가 수도원 도서관과 대성당을 보고 구시가를 걷습니다.|By train to St. Gallen for the Abbey Library, the cathedral and the old town.'))]),
    dict(id='kandersteg', country='ch', after='st-gallen', ko='칸더슈테크', en='Kandersteg', native='Kandersteg', lat=46.4947, lng=7.6745,
         blurb=['뢰치베르크 터널 앞 산골 마을. 곤돌라로 세계유산 알프스 속 외시넨 호수에 오르고, 버스로 10분이면 맑은 블라우 호수입니다.',
                'A mountain village at the Lötschberg tunnel: a gondola up to the Oeschinensee in the World Heritage Alps, and the crystal Blausee ten minutes away by bus.'],
         highlights=[
             dict(ko='외시넨 호수', en='Oeschinensee', dko='블뤼믈리살프 봉우리 절벽 아래 청록빛 산정 호수로, 유네스코 세계유산 ‘융프라우-알레치’ 지역에 있습니다.', den='A turquoise mountain lake below the cliffs of the Blüemlisalp, in the Jungfrau-Aletsch World Heritage area.', maps='Oeschinensee',
                  visit=dict(min=180, max=300, s='https://www.oeschinensee.ch/en/', n='곤돌라 위 역에서 호수까지 걸어서 약 30분입니다. 여름(5월 9일~9월 20일)엔 8:30~18시, 겨울(12월 5일~3월 7일)엔 매일 9~17시에 운행합니다. 10명 이상은 예약 필수입니다.|From the top station it is about 30 min on foot to the lake. The gondola runs 8:30–18:00 in summer (9 May–20 September) and daily 9:00–17:00 in winter (5 December–7 March); groups of 10 or more must book.', k='2026-11',
                             x=[('2026년 11월 2~13일은 운휴, 11월 14~29일은 주말에만 운행하고 12월 5일부터 매일 운행합니다.|No service 2–13 November 2026, weekends only 14–29 November, daily from 5 December.', '2026-12-05')])),
             dict(ko='블라우 호수', en='Blausee', dko='숲속에 숨은 작고 맑은 푸른 호수로, 유리 바닥 배를 타고 물속을 들여다봅니다.', den='A small, crystal-clear blue lake hidden in the forest, seen from a glass-bottomed boat.', maps='Blausee Naturpark', group=NEAR,
                  visit=dict(min=60, max=90, c='daily', s='https://www.blausee.ch/en', n='일 년 내내 매일 9시부터 엽니다. 성인 CHF 8(주말·공휴일 10), 16시 이후 할인. 칸더슈테크에서 230번 버스로 약 10분, ‘Blausee BE’ 정류장.|Open every day of the year from 9:00. Adults CHF 8 (CHF 10 at weekends and on holidays), cheaper after 16:00. About 10 min on bus 230 from Kandersteg to Blausee BE.', k='2026-11')),
             dict(ko='게미 고개', en='Gemmi Pass', dko='케이블카로 오른 준뷔엘에서 슈바렌바흐 산장을 지나 게미 고개까지 걷고, 반대편 로이커바트로 케이블카로 내려갈 수 있습니다.', den='Ride up to Sunnbüel and walk past the Schwarenbach inn to the Gemmi Pass, with a cable car down the far side to Leukerbad.', maps='Sunnbüel Bergstation', group=NEAR,
                  visit=dict(min=240, max=360, s='https://sunnbuel.ch/', n='역에서 241번 버스로 약 10분(걸어서 35분) 가면 준뷔엘 케이블카(8분)입니다. 준뷔엘~게미 고개는 약 3시간, 9km입니다.|Bus 241 from the station takes about 10 min (35 min on foot) to the Sunnbüel cable car (8 min ride); Sunnbüel to the Gemmi Pass is about 3 hours, 9 km.', k='2026-11',
                             x=[('2026년 11월 2~13일은 운휴, 11월 14일~12월 13일은 주말에만 운행합니다.|No service 2–13 November 2026; weekends only 14 November–13 December.', '2026-12-13')])),
             dict(ko='가스테른 계곡', en='Gasterntal', dko='빙하에서 흘러온 강이 흐르는 원시 그대로의 좁은 계곡으로, 여름에만 들어갈 수 있습니다.', den='A wild, narrow valley along a glacier-fed river, open only in summer.', maps='Hotel Waldhaus Gasterntal', group=NEAR,
                  visit=dict(min=180, max=300, s='https://adelboden-lenk-kandersteg.ch/orte/poi/detail/gasterntalkandersteg', n='길은 10월 말~5월 중순에 닫힙니다. 여름엔 가스테른 버스나 걸어서 들어갑니다.|The road is closed from late October to mid-May; in summer go in on the Gasterntal bus or on foot.', k='2026-11')),
             dict(ko='알멘알프', en='Allmenalp', dko='작은 케이블카로 오르는 해발 1,723m 알프 목초지로, 비아 페라타와 패러글라이딩 출발점이 있습니다.', den='An alpine pasture at 1,723 m reached by a small cable car, with a via ferrata and a paragliding launch.', maps='Luftseilbahn Kandersteg-Allmenalp', group=NEAR,
                  visit=dict(min=120, max=180, s='https://www.allmenalp.ch/', n='역에서 걸어서 약 15분입니다. 2026년엔 5월 9일~10월 25일에 운행했습니다. 왕복 성인 CHF 24.|About 15 min on foot from the station. In 2026 it ran 9 May–25 October; adult return CHF 24.', k='2026-11')),
         ],
         hubs=f"    air: [{ZRH}],\n    rail: [['Kandersteg', '칸더슈테크역']],\n",
         hubs_file='hubs-west.ts', hubs_before='  vaduz: {\n', itin_file='itinerary-central.ts', itin_before='  stuttgart: {',
         itinerary={'days': [['', 1]], 'trips': [['블라우 호수|Blausee', 2], ['게미 고개|Gemmi Pass', 3], ['가스테른 계곡|Gasterntal', 4], ['알멘알프|Allmenalp', 5]]},
         season='여름(6~9월)이 가장 좋고 외시넨 호수는 겨울엔 얼어서 스케이트를 탑니다. 11월엔 케이블카 대부분이 쉽니다.|Summer (June–September) is best; in winter the Oeschinensee freezes for skating. Most lifts pause in November.',
         visit_file='visit-ch.ts', visit_after=r"^  'st-gallen-h\d+': v\(.*\),\n",
         stay=village('베른', 'Bern', 'Bern', '베른에서 직행 기차로 약 1시간입니다.', 'About an hour by direct train from Bern.'),
         stay_before='  montserrat: [',
         routes=[('routes-west.ts', r"^  r\('st-gallen', 'bregenz', .*\),\n",
                  "  r('bern', 'kandersteg', 'train', 61),\n"
                  "  r('interlaken', 'kandersteg', 'train', 72, { fa: '인터라켄 동역|Interlaken Ost', n: '슈피츠에서 환승|change at Spiez' }),\n"
                  "  r('kandersteg', 'zermatt', 'train', 129, { n: '브리크·피스프에서 환승|change at Brig and Visp' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='마을은 걸어서 다닙니다. 외시넨 곤돌라와 알멘알프는 걸어서, 블라우 호수는 230번, 준뷔엘은 241번 버스로 갑니다.', en='Walk the village and to the Oeschinensee gondola and Allmenalp; bus 230 runs to the Blausee and bus 241 to Sunnbüel.'),
         apps=SBB, transit_before='  vienna: {', places=None,
         daytrips=[('bern', trip('kandersteg', '직행 기차로 칸더슈테크에 가 곤돌라로 외시넨 호수에 오르고, 돌아오는 길에 블라우 호수에 들릅니다.|By direct train to Kandersteg for the gondola up to the Oeschinensee, stopping at the Blausee on the way back.'))]),
]

if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
