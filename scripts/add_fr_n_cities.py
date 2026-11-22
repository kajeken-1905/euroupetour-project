#!/usr/bin/env python3
"""France new towns (2026-11-22, six-country review): Tours, Saint-Émilion, Caen, Riquewihr.
Chenonceau stays an Amboise day trip; Bordeaux keeps its Saint-Émilion trip and Colmar its Riquewihr trip.
Facts from English/French Wikipedia: Tours largest city of Centre-Val de Loire, Roman Caesarodunum; Cathédrale
Saint-Gatien built 1170–1547; Vieux-Tours quarters (Saint-Martin pilgrimage town from the 5th c.); Basilica of St Martin
over his tomb, first 471, medieval basilica demolished in the Revolution, present church from 1886; Musée des Beaux-Arts
in the former bishop's palace by the cathedral since 1910; Château de Tours on the Loire, 11th-c. comital castle, two
towers left; Azay-le-Rideau 1518–1527 on an island in the Indre; Langeais built by Louis XI in 1465. Saint-Émilion
medieval town, UNESCO 1999 with its vineyards; monolithic church 11th c., carved in rock, largest underground church in
Europe; collegiate church 12th c. Romanesque/Gothic, MH 1840; hermitage of St Émilion (8th c.) under the 13th-c. Trinity
chapel, MH 1889; Cloître des Cordeliers with underground cellars making sparkling wine. Caen: castle founded c. 1060 by
William, 5.5 ha, one of Europe's largest, houses Musée des Beaux-Arts and Musée de Normandie; Abbaye aux Hommes founded
1063 by William, major Romanesque building; Abbaye aux Dames (Sainte-Trinité), seat of the Normandy Regional Council;
Mémorial de Caen, 20th-century history and peace, 1919–1989; Musée des Beaux-Arts founded 1801, destroyed 1944,
reopened 1970; Saint-Pierre church MH 1840; Pegasus Bridge, Bénouville, taken by British glider troops on D-Day, original
replaced; Caen (Ouistreham)–Portsmouth ferry. Riquewihr on the Route des Vins, looks much as in the 16th c., Riesling,
Plus Beaux Villages; Hunawihr Plus Beaux Villages; Kaysersberg first mentioned 1227, castle above the town;
Haut-Koenigsbourg 12th c., rebuilt 15th c., restored before WWI under Wilhelm II, one of Alsace's most visited sites.
Transit (web search): Montparnasse–Tours TGV ~1 h 15; Tours–Amboise ~20 min; Bordeaux–Saint-Émilion TER ~30 min via
Libourne; Saint-Lazare–Caen ~2 h; Colmar–Riquewihr bus 106 ~25 min, few a day. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

FREE = '무료입니다.|Free.'
CAR = '대중교통이 불편해 차나 투어가 편합니다.|Public transport is awkward; a car or tour is easier.'
COMMON = dict(hubs_file='hubs-west.ts', hubs_before='  // —— mc ——\n', itin_file='itinerary-fr.ts',
              itin_before='  monaco: {', visit_file='visit-fr.ts',
              visit_after=r"^  '(?:bastia|tours|saint-emilion|caen|riquewihr)-h\d+': v\(.*\),\n",
              stay_before='  amboise: [', transit_before='  amboise: {\n', places=None, daytrips=[],
              apps="      ta('trainline'),\n")
LAST = r"^  \['brussels', 'lille', .*\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


def R(a, b, mode, m, fast, fa, fb, n=None):
    tail = f", '{n}'" if n else ''
    return ('routes-fr.ts', LAST, f"  ['{a}', '{b}', '{mode}', {m}, {'true' if fast else 'false'}, '{fa}', '{fb}'{tail}],\n")


CITIES = [
    dict(COMMON, country='fr', id='tours', after='nancy', ko='투르', en='Tours', native='Tours', lat=47.3936, lng=0.6892,
         blurb=['루아르강 가의 상트르발드루아르 지역 최대 도시로, 로마 시대 카이사로두눔에서 비롯됐습니다. 고딕 대성당과 성 마르티노의 무덤 위 바실리카, 목조 가옥이 늘어선 옛 시가지가 있고, 파리에서 TGV로 1시간 남짓이라 루아르 고성으로 가는 거점이 됩니다.',
                'The largest city of the Centre-Val de Loire, on the Loire, founded as Roman Caesarodunum. It has a Gothic cathedral, the basilica over St Martin’s tomb and an old town of half-timbered houses, and at just over an hour from Paris by TGV it is the gateway to the Loire châteaux.'],
         highlights=[
             H('생가티앙 대성당', 'Tours Cathedral', '1170년부터 1547년까지 지은 고딕 대성당으로, 로마네스크부터 르네상스까지 여러 양식이 섞여 있습니다.', 'The Gothic cathedral built between 1170 and 1547, mixing styles from Romanesque to Renaissance.', 'Cathédrale Saint-Gatien Tours', 30, 45, b='no', n=FREE),
             H('옛 시가지와 플뤼므로 광장', 'Vieux-Tours & Place Plumereau', '목조 가옥이 둘러싼 플뤼므로 광장을 중심으로 한 옛 시가지로, 저녁이면 광장 테라스가 식당과 바 손님으로 가득 찹니다.', 'The old town around Place Plumereau and its half-timbered houses, whose terraces fill with diners and drinkers in the evening.', 'Place Plumereau Tours', 45, 60, b='no', n=FREE),
             H('생마르탱 바실리카', 'Basilica of Saint-Martin', '투르의 성 마르티노 무덤 위에 선 성당으로, 5세기부터 순례지였습니다. 중세 성당은 프랑스 혁명 때 헐렸고 지금 건물은 1886년부터 다시 지었습니다.', 'The church over the tomb of St Martin of Tours, a pilgrimage site since the 5th century; the medieval basilica was demolished in the Revolution and the present one built from 1886.', 'Basilique Saint-Martin Tours', 20, 30, b='no', n=FREE),
             H('투르 미술관', 'Musée des Beaux-Arts de Tours', '대성당 옆 옛 주교관에 1910년부터 자리한 미술관으로, 회화 컬렉션이 프랑스에서 손꼽힙니다. 마당의 거대한 레바논 삼나무가 명물입니다.', 'In the former bishop’s palace beside the cathedral since 1910, with one of France’s finest painting collections; the huge cedar in the courtyard is a local landmark.', 'Musée des Beaux-Arts de Tours', 60, 90),
             H('투르 성', 'Château de Tours', '대성당 근처 루아르강 가에 남은 11세기 백작 성의 탑 두 개로, 지금은 전시장으로 씁니다.', 'Two towers left of the 11th-century counts’ castle on the Loire near the cathedral, now used for exhibitions.', 'Château de Tours', 20, 30, b='no'),
             H('아제르리도 성', 'Château d’Azay-le-Rideau', '1518~1527년 앵드르강 섬 위에 지은 초기 르네상스 성으로, 물에 비친 모습으로 유명합니다.', 'An early-Renaissance château built in 1518–1527 on an island in the Indre, famous for its reflection in the water.', 'Château d\'Azay-le-Rideau', 90, 120, n='투르에서 기차로 약 30분, 역에서 걸어서 약 30분입니다.|About 30 min by train from Tours, then about 30 min on foot from the station.'),
             H('랑제 성', 'Château de Langeais', '1465년 루이 11세가 지은 성으로, 10세기 말 앙주 백작이 세운 옛 성채 자리에 있습니다.', 'The château built by Louis XI in 1465 on the site of a late-10th-century fortress of the counts of Anjou.', 'Château de Langeais', 60, 90),
         ],
         hubs="    air: [['Tours Val de Loire (TUF)', '투르 발드루아르 공항 (TUF)'], ORY()],\n    rail: [['Gare de Tours', '투르역', '시내 중심|city centre'], ['Gare de Saint-Pierre-des-Corps', '생피에르데코르역', 'TGV 정차역, 투르역까지 셔틀 열차|TGV station, shuttle trains to Tours']],\n",
         itinerary={'days': [['옛 시가지|Old town', 2, 3], ['대성당 지구|Cathedral quarter', 1, 4, 5]], 'trips': [['아제르리도 성|Azay-le-Rideau', 6], ['랑제 성|Langeais', 7]]},
         season='고성 정원이 좋은 5~9월이 알맞습니다.|May–September, when the château gardens are at their best.',
         stay=[('옛 시가지 (플뤼므로 광장 주변)', 'Vieux-Tours (around Place Plumereau)', 'Place Plumereau Tours', '처음이라면|First visit', '식당과 바가 모여 있고 걸어서 둘러보기 좋습니다.|Restaurants and bars close by, easy to explore on foot.'),
               ('투르역 주변', 'Around Tours station', 'Gare de Tours', '고성 투어 거점|Base for château trips', '앙부아즈·슈농소·아제르리도행 기차와 투어 버스가 이곳에서 출발합니다.|Trains to Amboise, Chenonceau and Azay-le-Rideau and château tour buses leave from here.')],
         routes=[R('paris', 'tours', 'train', 75, True, '파리 몽파르나스역|Paris Montparnasse', '투르역|Tours', 'TGV · 일부는 생피에르데코르역 도착|TGV; some arrive at Saint-Pierre-des-Corps'),
                 R('tours', 'amboise', 'train', 20, False, '투르역|Tours', '앙부아즈역|Amboise')],
         transit=dict(modes=['walk', 'tram', 'bus', 'train'], ko='시내는 걸어서 다니고, 트램 A선이 역과 시내를 잇습니다. 고성은 기차나 투어 버스로 갑니다.', en='Walk the centre; tram line A links the station and town. Reach the châteaux by train or tour bus.')),
    dict(COMMON, country='fr', id='saint-emilion', after='bordeaux', ko='생테밀리옹', en='Saint-Émilion', native='Saint-Émilion', lat=44.8936, lng=-0.1547,
         blurb=['보르도 동쪽 포도밭 언덕의 중세 마을로, 마을과 둘레의 포도밭이 함께 유네스코 세계유산입니다. 바위를 통째로 파낸 지하 성당, 성 에밀리옹이 살던 동굴, 가파른 돌길이 이어지고, 골목마다 와인 가게가 있습니다.',
                'A medieval town on the vineyard hills east of Bordeaux, listed by UNESCO together with its vineyards. It has a church carved whole out of the rock, the cave where St Émilion lived, steep stone lanes and wine shops on every corner.'],
         highlights=[
             H('모놀리스 성당', 'Monolithic Church', '11세기에 바위를 통째로 파내 만든 성당으로, 유럽에서 가장 큰 지하 성당입니다.', 'An 11th-century church carved entirely out of the rock, the largest underground church in Europe.', 'Église monolithe de Saint-Émilion', 45, 60, b='req', n='관광 안내소의 가이드 투어로만 들어갈 수 있습니다.|Visits by guided tour from the tourist office only.'),
             H('참사회 성당', 'Collegiate Church', '12세기 로마네스크와 고딕 양식이 섞인 옛 참사회 성당으로, 지금은 마을의 본당입니다.', 'The former collegiate church of the 12th century, Romanesque and Gothic, now the parish church.', 'Collégiale de Saint-Émilion', 20, 30, b='no', n=FREE),
             H('성 에밀리옹의 은둔처', 'Hermitage of St Émilion', '8세기 성 에밀리옹이 살았다는 동굴로, 위에 13세기 삼위일체 예배당이 서 있습니다.', 'The cave where St Émilion lived in the 8th century, beneath the 13th-century Trinity Chapel.', 'Ermitage de Saint-Émilion', 15, 20, b='req', n='모놀리스 성당 투어에 함께 포함됩니다.|Included in the Monolithic Church tour.'),
             H('코르들리에 회랑', 'Cloître des Cordeliers', '마을 한가운데의 옛 수도원 회랑으로, 지하 저장고에서 스파클링 와인을 만들어 시음합니다.', 'The cloister of a former friary in the middle of town, with underground cellars where sparkling wine is made and tasted.', 'Cloître des Cordeliers Saint-Émilion', 30, 45),
             H('포도밭 와이너리 방문', 'Vineyard visit', '마을을 둘러싼 포도밭의 샤토(와이너리)를 찾아 저장고를 보고 와인을 맛봅니다.', 'Visit a château (wine estate) in the vineyards around the town to see the cellars and taste the wine.', 'Saint-Émilion vineyards', 90, 150, b='rec', n='대부분 예약이 필요합니다. 차나 자전거, 투어로 다닙니다.|Most need booking; go by car, bike or tour.'),
         ],
         hubs="    air: [['Bordeaux–Mérignac (BOD)', '보르도 메리냑 공항 (BOD)', '보르도|Bordeaux']],\n    rail: [['Gare de Saint-Émilion', '생테밀리옹역', '마을까지 걸어서 약 20분|about 20 min walk to the village'], ['Gare de Libourne', '리부른역']],\n",
         itinerary={'days': [['', 3, 1, 2, 4]], 'trips': [['포도밭 와이너리|Vineyards', 5]]},
         season='포도밭이 푸르고 수확이 이어지는 5~10월이 알맞습니다.|May–October, from green vines to the harvest.',
         stay=[('마을에서 묵기', 'In the village', 'Saint-Émilion', '마을에서 묵기|Stay in the village', '당일 손님이 떠난 저녁 골목이 조용합니다.|The lanes are quiet in the evening once the day-trippers leave.'),
               ('보르도에서 다녀오기', 'Base in Bordeaux', 'Bordeaux', '거점에서 다녀오기|Day trip from a base', '보르도에서 기차로 약 30분입니다.|About 30 min by train from Bordeaux.')],
         routes=[R('bordeaux', 'saint-emilion', 'train', 32, False, '보르도 생장역|Bordeaux Saint-Jean', '생테밀리옹역|Saint-Émilion', '리부른 경유|via Libourne')],
         transit=dict(modes=['walk', 'train'], ko='마을은 걸어서 다닙니다. 역에서 마을까지 걸어서 약 20분이고, 포도밭은 차나 자전거, 투어로 다닙니다.', en='Walk the village; it is about 20 minutes on foot from the station. Visit the vineyards by car, bike or tour.')),
    dict(COMMON, country='fr', id='caen', after='etretat', ko='캉', en='Caen', native='Caen', lat=49.1814, lng=-0.3636,
         blurb=['노르망디 칼바도스의 중심 도시로, 정복왕 윌리엄이 세운 거대한 성과 두 수도원이 있습니다. 1944년 노르망디 전투로 크게 부서졌고, 지금은 20세기 전쟁과 평화를 다루는 메모리알 박물관이 있습니다. 상륙 해변과 페가수스 다리가 가깝고 영국 포츠머스행 페리가 떠납니다.',
                'The main city of Calvados in Normandy, with the huge castle and two abbeys founded by William the Conqueror. Badly damaged in the 1944 Battle of Normandy, it is now home to the Mémorial, a museum of 20th-century war and peace. The landing beaches and Pegasus Bridge are close, and ferries sail to Portsmouth.'],
         highlights=[
             H('캉 성', 'Château de Caen', '1060년 무렵 정복왕 윌리엄이 바위 언덕 위에 세운 5.5ha 성으로, 유럽에서 손꼽히게 큰 성입니다. 안에 미술관과 노르망디 박물관이 있습니다.', 'The 5.5-hectare castle William the Conqueror founded on a rocky spur around 1060, one of the largest in Europe, now home to the fine arts museum and the Musée de Normandie.', 'Château de Caen', 45, 60, b='no', n='성 안 마당과 성벽은 무료입니다.|The grounds and ramparts are free.'),
             H('남자 수도원', 'Abbaye aux Hommes', '1063년 정복왕 윌리엄이 세운 베네딕토 수도원으로, 노르망디의 대표적인 로마네스크 건물입니다. 생테티엔 성당과 옛 수도원 건물이 남아 있습니다.', 'The Benedictine abbey founded by William the Conqueror in 1063, one of Normandy’s most important Romanesque buildings, with the church of Saint-Étienne and the monastery buildings.', 'Abbaye aux Hommes Caen', 45, 60),
             H('여자 수도원', 'Abbaye aux Dames', '윌리엄의 왕비 마틸다가 세운 베네딕토 수녀원으로, 생트트리니테 성당이 있고 지금은 노르망디 지역 의회 건물입니다.', 'The Benedictine nunnery founded by William’s queen Matilda, with the church of Sainte-Trinité, now the seat of the Normandy Regional Council.', 'Abbaye aux Dames Caen', 30, 45, b='no'),
             H('캉 메모리알', 'Caen Memorial', '20세기 역사와 평화를 다루는 박물관으로, 1919년 베르사유 조약부터 1989년 베를린 장벽 붕괴까지 보여 줍니다. 노르망디 상륙 작전 전시가 중심입니다.', 'A museum of 20th-century history and peace, from the Treaty of Versailles in 1919 to the fall of the Berlin Wall in 1989, centred on the D-Day landings and the Battle of Normandy.', 'Mémorial de Caen', 180, 240, b='rec'),
             H('캉 미술관', 'Musée des Beaux-Arts de Caen', '1801년 세워진 미술관으로, 1944년 폭격으로 무너졌다가 성 안에 다시 지어 1970년 문을 열었습니다.', 'Founded in 1801, destroyed by bombing in 1944 and rebuilt inside the castle, reopening in 1970.', 'Musée des Beaux-Arts de Caen', 60, 90),
             H('생피에르 성당', 'Église Saint-Pierre', '성 바로 앞 옛 시가지의 대표 성당으로, 1840년 역사 기념물이 됐습니다.', 'The main church of the old centre, right in front of the castle; a historic monument since 1840.', 'Église Saint-Pierre Caen', 15, 20, b='no', n=FREE),
             H('페가수스 다리', 'Pegasus Bridge', '1944년 6월 6일 밤 글라이더로 내린 영국 공수부대가 점령한 베누빌의 운하 다리입니다. 원래 다리는 옆 기념관에 옮겨 두었고 지금 다리는 새로 놓은 것입니다.', 'The canal bridge at Bénouville captured by British glider-borne troops on the night of 6 June 1944; the original bridge was replaced and is now displayed at the memorial beside it.', 'Pegasus Bridge Bénouville', 60, 90),
         ],
         hubs="    air: [['Caen–Carpiquet (CFR)', '캉 카르피케 공항 (CFR)'], CDG()],\n    rail: [['Gare de Caen', '캉역']],\n    port: [['Ouistreham', '위스트레암 여객터미널', '영국 포츠머스행 페리|ferries to Portsmouth']],\n",
         itinerary={'days': [['성과 시내|Castle & centre', 1, 5, 6, 2, 3], ['메모리알|Mémorial', 4]], 'trips': [['페가수스 다리|Pegasus Bridge', 7]]},
         season='날씨가 좋은 5~9월이 알맞습니다. 6월 초엔 상륙 작전 기념행사가 열립니다.|May–September; early June brings the D-Day commemorations.',
         stay=[('성과 생피에르 성당 주변', 'Around the castle & Saint-Pierre', 'Château de Caen', '처음이라면|First visit', '성과 두 수도원, 식당가가 걸어서 닿습니다.|The castle, both abbeys and the restaurant streets on foot.'),
               ('캉역 주변', 'Around Caen station', 'Gare de Caen', '이동이 편함|Easy connections', '바이외·파리행 기차를 타기 좋고, 트램으로 시내에 갑니다.|Handy for trains to Bayeux and Paris, with the tram into town.')],
         routes=[R('paris', 'caen', 'train', 120, False, '파리 생라자르역|Paris Saint-Lazare', '캉역|Caen'),
                 R('caen', 'bayeux', 'train', 20, False, '캉역|Caen', '바이외역|Bayeux')],
         transit=dict(modes=['walk', 'tram', 'bus', 'train'], ko='시내는 걸어서 다니고, 트램이 역과 시내를 잇습니다. 메모리알은 버스로 갑니다.', en='Walk the centre; trams link the station and town, and a bus runs to the Mémorial.')),
    dict(COMMON, country='fr', id='riquewihr', after='colmar', ko='리크비르', en='Riquewihr', native='Riquewihr', lat=48.1672, lng=7.2978,
         blurb=['알자스 와인 가도의 포도밭 마을로, 16세기 모습을 거의 그대로 간직해 ‘프랑스에서 가장 아름다운 마을’에 꼽힙니다. 성벽과 성문 탑 안에 알록달록한 목조 가옥과 와인 가게가 이어지고, 리슬링 포도밭 사이로 이웃 마을까지 걸어갑니다.',
                'A vineyard village on the Alsace Wine Route that looks much as it did in the 16th century, one of the Plus Beaux Villages de France. Colourful half-timbered houses and wine shops line the lanes inside its walls and gate towers, and paths lead through Riesling vineyards to the next villages.'],
         highlights=[
             H('마을 중심 거리', 'Village main street', '아래 성문에서 위쪽 성문 탑까지 이어지는 중심 거리로, 목조 가옥과 와인 가게, 크리스마스 장식 가게가 늘어서 있습니다.', 'The main street from the lower gate up to the gate tower, lined with half-timbered houses, wine shops and Christmas shops.', 'Rue du Général de Gaulle Riquewihr', 45, 60, b='no', n=FREE),
             H('돌더 탑과 성벽', 'Dolder & ramparts', '마을 위쪽을 지키는 성문 탑 돌더와 이중 성벽으로, 탑 안에 작은 박물관이 있습니다.', 'The Dolder gate tower guarding the top of the village and the double ring of walls; the tower houses a small museum.', 'Dolder Riquewihr', 30, 45, n='박물관은 봄~가을 위주로 엽니다.|The museum opens mainly from spring to autumn.'),
             H('포도밭 산책과 와인 시음', 'Vineyard walk & wine tasting', '마을을 둘러싼 리슬링 포도밭 길을 걷고, 마을 와인 가게에서 알자스 와인을 맛봅니다.', 'Walk the Riesling vineyard paths around the village and taste Alsace wines in the village cellars.', 'Riquewihr vineyards', 60, 120, b='no'),
             H('위나비르', 'Hunawihr', '포도밭 길로 걸어서 가는 이웃 마을로, ‘프랑스에서 가장 아름다운 마을’입니다. 포도밭 위 요새 성당이 상징입니다.', 'The neighbouring village, reached on foot through the vineyards and also one of the Plus Beaux Villages, with its fortified church above the vines.', 'Hunawihr', 60, 120, b='no', n=FREE),
             H('카이저스베르크', 'Kaysersberg', '1227년 기록에 처음 나오는 와인 마을로, 언덕 위 성채가 마을을 내려다봅니다.', 'A wine town first recorded in 1227, overlooked by its hilltop castle.', 'Kaysersberg', 90, 150, b='no'),
             H('오쾨니스부르 성', 'Haut-Kœnigsbourg', '12세기 성을 15세기에 고치고 제1차 세계 대전 전에 빌헬름 2세가 복원한 산 위의 성으로, 알자스에서 손꼽히게 많이 찾는 곳입니다.', 'A 12th-century mountain castle, rebuilt in the 15th century and restored under Wilhelm II before World War I, one of the most visited sites in Alsace.', 'Château du Haut-Koenigsbourg', 90, 120, n=CAR),
         ],
         hubs="    air: [['EuroAirport Basel-Mulhouse-Freiburg (BSL)', '유로에어포트 바젤 (BSL)', '바젤·뮐루즈|Basel / Mulhouse']],\n    rail: [['Gare de Colmar', '콜마르역', '106번 버스로 약 25분|about 25 min by bus 106']],\n",
         itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['카이저스베르크|Kaysersberg', 5], ['오쾨니스부르 성|Haut-Kœnigsbourg', 6]]},
         season='포도밭이 좋은 5~10월이나 크리스마스 마켓이 열리는 12월이 알맞습니다.|May–October for the vineyards, or December for the Christmas market.',
         stay=[('마을에서 묵기', 'In the village', 'Riquewihr', '마을에서 묵기|Stay in the village', '당일 손님이 떠난 저녁 골목이 조용합니다.|The lanes are quiet in the evening once the day-trippers leave.'),
               ('콜마르에서 다녀오기', 'Base in Colmar', 'Colmar', '거점에서 다녀오기|Day trip from a base', '콜마르에서 버스로 약 25분이지만 하루 몇 편뿐입니다.|About 25 min by bus from Colmar, but only a few a day.')],
         routes=[R('colmar', 'riquewihr', 'bus', 25, False, '콜마르|Colmar', '리크비르|Riquewihr', '106번 버스 · 하루 몇 편뿐|bus 106, only a few a day')],
         transit=dict(modes=['walk', 'bus'], ko='마을은 걸어서 다닙니다. 콜마르행 106번 버스는 하루 몇 편뿐이라 이웃 마을은 걷거나 차로 갑니다.', en='Walk the village; bus 106 to Colmar runs only a few times a day, so walk or drive to nearby villages.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    co = rd('countries.ts')
    for cid in ('tours', 'saint-emilion', 'caen', 'riquewihr'):
        co = co.replace(f", '{cid}'", '')
    for a, b in (("'etretat', 'bayeux'", "'etretat', 'caen', 'bayeux'"), ("'colmar', 'nancy'", "'colmar', 'riquewihr', 'nancy'"),
                 ("'bordeaux', 'arcachon'", "'bordeaux', 'saint-emilion', 'arcachon'")):
        assert co.count(a) == 2, a
        co = co.replace(a, b)
    assert co.count("'amboise', 'blois'") == 2
    co = co.replace("'nancy', 'amboise', 'blois'", "'nancy', 'tours', 'amboise', 'blois'")
    co = co.replace("cityIds: ['amboise', 'blois'", "cityIds: ['tours', 'amboise', 'blois'")
    wr('countries.ts', co)
