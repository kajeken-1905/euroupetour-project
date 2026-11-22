#!/usr/bin/env python3
"""UK new towns (2026-11-22, six-country review): Lincoln, Portsmouth, Penzance & Land's End, Oban.
Facts from English Wikipedia: Lincoln Cathedral begun 1072, rebuilt in Gothic phases after the 1185 earthquake, for
over 200 years the world's tallest building; Lincoln Castle built late 11th c. by William the Conqueror on a Roman
fortress, two mottes, holds one of four surviving 1215 Magna Carta exemplars; Steep Hill 1-in-7 (14%) street of shops
and tea rooms up to the cathedral; Old Bishop's Palace late 12th c. below the cathedral; Usher Gallery 1927, Turner and
Lowry. HMS Victory, Nelson's flagship at Trafalgar 1805, oldest naval vessel still in commission; HMS Warrior
1859–1861, first armour-plated iron-hulled warships; Mary Rose, Henry VIII's carrack, sank 1545, raised 11 Oct 1982;
Spinnaker Tower 170 m, opened 18 Oct 2005, platforms at 100/105/110 m; The D-Day Story (D-Day Museum 1984, reopened
2018), Operation Overlord; Southsea Castle 1544, Henry VIII; Charles Dickens' Birthplace Museum, city-owned since 1904.
Penzance terminus of the Cornish Main Line, westernmost station in England, 9 miles from Land's End; Minack Theatre at
Porthcurno, open-air, season Easter–October; Mousehole fishing village 2.5 miles south; Jubilee Pool Art Deco lido,
UK's largest seawater pool; Penlee House, Newlyn School paintings. St Michael's Mount and Land's End move from St Ives
(st-ives-h4/h5 -> penzance-h1/h2, photos and pins carried over); St Ives gains the Barbara Hepworth Museum (studio and
garden, bought 1949, lived there 26 years until 1975). Oban: horseshoe bay sheltered by Kerrera and Mull; McCaig's Tower
1897–1902 on Battery Hill, 94 arches, Bonawe granite; Oban distillery est. 1794, before the town, two pot stills;
Dunollie Castle ruin on a hill north of town with museum; Dunstaffnage Castle 13th c., 5 km NNE, one of Scotland's
oldest stone castles; Iona Abbey founded by St Columba in 563. Transit (web search): King's Cross–Lincoln direct
~1 h 50 (few per day); Waterloo–Portsmouth Harbour ~1 h 35; Paddington–Penzance ~5 h 20; Glasgow Queen Street–Oban
~3 h; Oban–Craignure ferry 45 min; bus 1 Penzance–Land's End. Run once."""
import json
import os
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from sight_order import add_sights
from review_sk import S

FREE = '무료입니다.|Free.'
NQY = "['Cornwall Airport Newquay (NQY)', '뉴키 콘월 공항 (NQY)', '뉴키|Newquay']"
COMMON = dict(hubs_file='hubs-west.ts', hubs_before='  // —— ie ——\n', itin_file='itinerary-uk.ts',
              itin_before='  derry: [', visit_file='visit-uk.ts',
              visit_after=r"^  '(?:derry|lincoln|portsmouth|penzance|oban)-h\d+': v\(.*\),\n",
              stay_before='  derry: [', transit_before='  derry: {', places=None, daytrips=[],
              apps="      ta('trainline'),\n")
LAST = r"^  r\('belfast', 'giants-causeway', .*\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


def R(a, b, mode, m, n=None):
    extra = f", {{ n: '{n}' }}" if n else ''
    return ('routes-west.ts', LAST, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


SMM_N = ('성은 토요일마다 쉽니다(정원은 여름 평일에만 엽니다). 썰물 때는 둑길을 걸어서, 밀물 때는 배로 건넙니다.|The castle is closed every '
         'Saturday (the garden opens on summer weekdays only). Walk the causeway at low tide; take the boat at high tide.')

CITIES = [
    dict(COMMON, country='uk', id='portsmouth', after='brighton', ko='포츠머스', en='Portsmouth', native='Portsmouth', lat=50.7989, lng=-1.0912,
         blurb=['잉글랜드 남해안의 항구 도시로, 수백 년 동안 영국 해군의 본거지였습니다. 역사 조선소엔 트라팔가르 해전의 넬슨 기함 HMS 빅토리호와 헨리 8세의 군함 메리 로즈호가 있고, 항구엔 170m 스피네이커 타워가 솟아 있습니다. 사우스시 해안엔 헨리 8세의 성과 노르망디 상륙 작전 박물관이 있습니다.',
                'A port city on England’s south coast and for centuries the home of the Royal Navy. The Historic Dockyard holds Nelson’s Trafalgar flagship HMS Victory and Henry VIII’s warship the Mary Rose, the 170 m Spinnaker Tower rises over the harbour, and the Southsea seafront has Henry VIII’s castle and the D-Day museum.'],
         highlights=[
             H('HMS 빅토리호와 역사 조선소', 'HMS Victory & Historic Dockyard', '1805년 트라팔가르 해전에서 넬슨 제독의 기함이었던 104문 전열함으로, 지금도 취역 중인 세계에서 가장 오래된 군함입니다. 같은 조선소에 세계 첫 철갑 철선 군함 HMS 워리어호도 있습니다.', 'Admiral Nelson’s 104-gun flagship at the Battle of Trafalgar in 1805, the world’s oldest naval vessel still in commission; the same dockyard holds HMS Warrior, one of the first iron-hulled armoured warships.', 'HMS Victory Portsmouth', 120, 240, b='rec'),
             H('메리 로즈 박물관', 'Mary Rose Museum', '헨리 8세의 군함 메리 로즈호는 1545년 솔렌트 해협에서 가라앉았다가 1982년 인양됐습니다. 남은 선체와 수천 점의 유물이 튜더 시대를 보여 줍니다.', 'Henry VIII’s warship the Mary Rose sank in the Solent in 1545 and was raised in 1982; the surviving hull and thousands of finds are a Tudor time capsule.', 'Mary Rose Museum Portsmouth', 90, 120, b='rec'),
             H('스피네이커 타워', 'Spinnaker Tower', '2005년 문을 연 170m 전망탑으로, 돛 모양을 본떠 지었습니다. 100~110m 높이에 전망대 세 층이 있습니다.', 'A 170 m observation tower shaped like a sail, opened in 2005, with three viewing decks between 100 m and 110 m.', 'Spinnaker Tower', 45, 60),
             H('디데이 스토리', 'The D-Day Story', '1944년 노르망디 상륙 작전을 다루는 사우스시 해안의 박물관으로, 1984년 문을 열어 2018년 새로 단장했습니다.', 'The Southsea museum telling the story of the 1944 Normandy landings, opened in 1984 and reopened after refurbishment in 2018.', 'The D-Day Story Southsea', 90, 120),
             H('사우스시 성', 'Southsea Castle', '1544년 헨리 8세가 솔렌트 해협 동쪽 입구를 지키려고 세운 포대 요새입니다.', 'The artillery fort Henry VIII built in 1544 to guard the Solent and the eastern approach to Portsmouth.', 'Southsea Castle', 30, 45, n=FREE),
             H('찰스 디킨스 생가 박물관', 'Charles Dickens’ Birthplace Museum', '작가 찰스 디킨스가 태어난 집으로, 1904년부터 시가 소유해 박물관으로 엽니다.', 'The house where Charles Dickens was born, owned by the city since 1904 and open as a museum.', 'Charles Dickens Birthplace Museum Portsmouth', 30, 45, n='봄~가을 위주로 엽니다.|Open mainly from spring to autumn.'),
         ],
         hubs="    air: [['Southampton (SOU)', '사우샘프턴 공항 (SOU)', '사우샘프턴|Southampton'], LHR()],\n    rail: [['Portsmouth Harbour', '포츠머스 하버역', '역사 조선소 바로 앞|next to the Historic Dockyard'], ['Portsmouth & Southsea', '포츠머스 앤드 사우스시역']],\n",
         itinerary={'days': [['역사 조선소|Historic Dockyard', 1, 2, 3], ['사우스시|Southsea', 4, 5, 6]]},
         season='해안 산책과 조선소 구경이 좋은 5~9월이 알맞습니다.|May–September, for the seafront and the dockyard.',
         stay=[('거니 워프·올드 포츠머스', 'Gunwharf Quays & Old Portsmouth', 'Gunwharf Quays', '처음이라면|First visit', '역과 조선소, 스피네이커 타워가 걸어서 닿습니다.|The station, the dockyard and the Spinnaker Tower on foot.'),
               ('사우스시', 'Southsea', 'Southsea', '해안가|Seafront', '디데이 스토리와 사우스시 성이 가깝습니다.|Close to the D-Day Story and Southsea Castle.')],
         routes=[R('london', 'portsmouth', 'train', 95)],
         transit=dict(modes=['walk', 'bus', 'train', 'ferry'], ko='포츠머스 하버역에서 조선소까지 걸어갑니다. 사우스시 해안은 버스로 가거나 해안을 따라 걷습니다.', en='Walk from Portsmouth Harbour station to the dockyard; take a bus or walk the seafront to Southsea.')),
    dict(COMMON, country='uk', id='penzance', after='st-ives', ko="펜잔스·랜즈 엔드", en="Penzance & Land's End", native='Penzance', lat=50.1186, lng=-5.5371,
         blurb=['콘월 서쪽 끝 마운츠만의 항구 도시로, 잉글랜드에서 가장 서쪽 기차역이 있습니다. 썰물 때 걸어서 건너는 섬 위 성 세인트 마이클스 마운트, 바닷가 절벽의 야외 극장 미낙, 본토 서쪽 끝 랜즈 엔드, 어촌 마우스홀이 가깝습니다.',
                'A port town on Mount’s Bay at the western tip of Cornwall, with the westernmost railway station in England. Nearby are St Michael’s Mount, a castle island reached on foot at low tide, the Minack open-air theatre on the sea cliffs, Land’s End at the western end of the mainland and the fishing village of Mousehole.'],
         highlights=[
             H('세인트 마이클스 마운트', "St Michael's Mount", '마라지온 앞바다의 섬으로, 썰물 때 둑길로 걸어서 건너 언덕 위 성과 정원을 둘러봅니다.', 'An island off Marazion with a hilltop castle and gardens, reached on foot along the causeway at low tide.', "St Michael's Mount", 120, 180, c='sat', b='req', s='https://stmichaelsmount.co.uk/', n=SMM_N, k='2026-10'),
             H('랜즈 엔드', "Land's End", '펜잔스에서 약 14km, 잉글랜드 본토 서쪽 끝의 바닷가 절벽입니다.', 'The clifftop western tip of mainland England, about 14 km from Penzance.', "Land's End", 45, 60),
             H('미낙 극장', 'Minack Theatre', '포스커노의 바위 절벽 위에 지은 야외 극장으로, 바다를 배경으로 부활절부터 10월까지 공연이 열립니다.', 'An open-air theatre built on a granite outcrop above the sea at Porthcurno, with performances from Easter to the end of October.', 'Minack Theatre', 60, 120),
             H('마우스홀', 'Mousehole', '펜잔스에서 남쪽으로 약 4km, 마운츠만의 작은 어촌 마을과 항구입니다.', 'A small fishing village and harbour on Mount’s Bay, about 4 km south of Penzance.', 'Mousehole Cornwall', 60, 90, b='no', n=FREE),
             H('주빌리 풀', 'Jubilee Pool', '아르데코 양식의 바닷물 야외 수영장으로, 영국에서 가장 큰 해수 수영장입니다.', 'An Art Deco open-air lido and the UK’s largest seawater pool.', 'Jubilee Pool Penzance', 60, 120, n='여름철 위주로 엽니다.|Open mainly in summer.'),
             H('펜리 하우스', 'Penlee House', '뉴린파 화가들의 그림을 모은 펜잔스의 미술관·박물관입니다.', 'Penzance’s gallery and museum, home to many paintings by the Newlyn School.', 'Penlee House Gallery Museum', 45, 60),
         ],
         hubs=f"    air: [{NQY}],\n    rail: [['Penzance', '펜잔스역', '잉글랜드 최서단 역|England’s westernmost station']],\n    bus: [['Penzance Bus Station', '펜잔스 버스 정류장', '랜즈 엔드행 1번|bus 1 to Land’s End']],\n",
         itinerary={'days': [['', 6, 5]], 'trips': [['세인트 마이클스 마운트|St Michael’s Mount', 1], ['마우스홀|Mousehole', 4], ['미낙 극장과 랜즈 엔드|Minack Theatre & Land’s End', 3, 2]]},
         season='미낙 극장 공연과 섬 건너기가 좋은 5~9월이 알맞습니다.|May–September, for the Minack season and crossings to the Mount.',
         stay=[('펜잔스 시내', 'Penzance town', 'Penzance', '처음이라면|First visit', '역과 버스 정류장이 가까워 주변을 다니기 좋습니다.|Close to the station and bus station for trips around the area.')],
         routes=[R('london', 'penzance', 'train', 320), R('st-ives', 'penzance', 'train', 35, '세인트어스에서 환승|change at St Erth')],
         transit=dict(modes=['walk', 'bus', 'train'], ko='시내는 걸어서 다닙니다. 랜즈 엔드는 1번 버스로, 세인트 마이클스 마운트는 마라지온까지 버스로 갑니다.', en='Walk around town; bus 1 runs to Land’s End, and buses go to Marazion for St Michael’s Mount.')),
    dict(COMMON, country='uk', id='lincoln', after='york', ko='링컨', en='Lincoln', native='Lincoln', lat=53.2283, lng=-0.5389,
         blurb=['로마 시대 린둠 콜로니아에서 비롯된 잉글랜드 동부의 대성당 도시입니다. 언덕 위 링컨 대성당은 200년 넘게 세계에서 가장 높은 건물이었고, 맞은편 노르만 성엔 1215년 마그나 카르타 원본이 있습니다. 둘을 잇는 가파른 옛길 스티프 힐에 가게와 찻집이 늘어서 있습니다.',
                'A cathedral city in eastern England that grew from Roman Lindum Colonia. The hilltop cathedral was the world’s tallest building for more than 200 years, the Norman castle opposite holds an original 1215 Magna Carta, and the steep old street of Steep Hill climbs up to them past shops and tea rooms.'],
         highlights=[
             H('링컨 대성당', 'Lincoln Cathedral', '1072년 짓기 시작해 1185년 지진 뒤 여러 고딕 양식으로 다시 지은 대성당으로, 200년 넘게 세계에서 가장 높은 건물이었습니다.', 'Begun in 1072 and rebuilt in several Gothic styles after an earthquake in 1185, the cathedral was the world’s tallest building for more than 200 years.', 'Lincoln Cathedral', 60, 90),
             H('링컨 성', 'Lincoln Castle', '11세기 말 정복왕 윌리엄이 로마 요새 자리에 세운 성으로, 모트가 둘인 드문 성입니다. 1215년 마그나 카르타 원본 넷 가운데 하나를 전시하고, 성벽 위를 한 바퀴 걷습니다.', 'Built in the late 11th century by William the Conqueror on a Roman fort, one of only two English castles with two mottes; it displays one of four surviving 1215 Magna Carta originals, and you can walk the walls.', 'Lincoln Castle', 90, 120),
             H('스티프 힐', 'Steep Hill', '대성당 입구까지 오르는 경사 14%의 옛길로, 작은 가게와 찻집, 펍이 늘어서 있습니다.', 'The old street climbing at a 1-in-7 gradient to the cathedral, lined with independent shops, tea rooms and pubs.', 'Steep Hill Lincoln', 30, 45, b='no', n=FREE),
             H('옛 주교 궁전', 'Old Bishop’s Palace', '대성당 바로 아래 언덕의 12세기 말 주교 궁전 유적으로, 중세 잉글랜드에서 손꼽히게 웅장한 건물이었습니다. 도시 전망이 좋습니다.', 'The ruins of the late 12th-century bishop’s palace just below the cathedral, once one of the grandest buildings of medieval England, with wide views over the city.', 'Lincoln Medieval Bishop\'s Palace', 30, 45, n='봄~가을 위주로 엽니다.|Open mainly from spring to autumn.'),
             H('어셔 갤러리', 'Usher Gallery', '1927년 문을 연 미술관으로, 터너와 로리의 작품을 전시합니다.', 'An art gallery opened in 1927, showing works by painters including J. M. W. Turner and L. S. Lowry.', 'Usher Gallery Lincoln', 45, 60, n=FREE),
         ],
         hubs="    air: [['East Midlands (EMA)', '이스트미들랜즈 공항 (EMA)', '노팅엄|Nottingham']],\n    rail: [['Lincoln Central', '링컨 센트럴역']],\n",
         itinerary={'days': [['', 1, 4, 2, 3, 5]]},
         season='성벽 걷기와 대성당 언덕이 좋은 5~9월이 알맞습니다. 12월엔 크리스마스 마켓이 열립니다.|May–September for the castle walls and the hill; December brings the Christmas market.',
         stay=[('업힐(대성당 지구)', 'Uphill (Cathedral Quarter)', 'Bailgate Lincoln', '처음이라면|First visit', '대성당과 성 사이 옛 시가지로, 식당과 찻집이 많습니다.|The old quarter between cathedral and castle, with restaurants and tea rooms.')],
         routes=[R('london', 'lincoln', 'train', 115, '직통은 하루 몇 편뿐|only a few direct trains a day')],
         transit=dict(modes=['walk', 'bus', 'train'], ko='역에서 대성당까지는 스티프 힐을 걸어 오르거나 버스를 탑니다. 업힐 지구는 걸어서 다닙니다.', en='Walk up Steep Hill from the station or take a bus; the Uphill quarter is easy on foot.')),
    dict(COMMON, country='uk', id='oban', after='st-andrews', ko='오번', en='Oban', native='Oban', lat=56.4120, lng=-5.4720,
         blurb=['스코틀랜드 서해안 로른만의 항구 마을로, 케레라섬과 멀섬이 감싼 말굽 모양 만에 있습니다. 언덕 위 콜로세움을 닮은 매케이그 타워, 마을보다 먼저 생긴 위스키 증류소, 바닷가의 옛 성들이 있습니다. 헤브리디스 제도로 가는 페리의 출발지라, 멀섬을 건너 성 콜룸바의 아이오나섬까지 다녀옵니다.',
                'A harbour town on the Firth of Lorn on Scotland’s west coast, in a horseshoe bay sheltered by Kerrera and Mull. A Colosseum-like tower crowns the hill, the whisky distillery is older than the town, and old castles stand by the sea. It is the ferry gateway to the Hebrides, with day trips across Mull to St Columba’s Iona.'],
         highlights=[
             H('매케이그 타워', 'McCaig’s Tower', '배터리 힐 위에 1897~1902년 은행가 매케이그가 세운 둥근 화강암 탑으로, 아치 94개가 콜로세움을 닮았습니다. 마을과 만이 내려다보입니다.', 'A circular granite tower with 94 arches built on Battery Hill in 1897–1902 by the banker John Stuart McCaig, looking out over the town and bay.', 'McCaig\'s Tower Oban', 30, 45, b='no', n=FREE),
             H('오번 증류소', 'Oban Distillery', '1794년 세워져 마을보다 먼저 생긴 위스키 증류소로, 단식 증류기가 두 대뿐인 스코틀랜드에서 가장 작은 증류소 가운데 하나입니다.', 'A whisky distillery founded in 1794, before the town itself, and one of the smallest in Scotland with only two pot stills.', 'Oban Distillery', 60, 90, b='req'),
             H('더놀리 성', 'Dunollie Castle', '마을 북쪽 언덕의 작은 성터로, 케레라섬과 항구가 내려다보입니다. 박물관과 정원이 함께 있습니다.', 'A small ruined castle on a hill north of the town, looking out to Kerrera and the harbour, with a museum and grounds.', 'Dunollie Museum Castle and Grounds', 60, 90, n='봄~가을 위주로 엽니다.|Open mainly from spring to autumn.'),
             H('던스태프니지 성', 'Dunstaffnage Castle', '오번에서 북쪽으로 5km, 에티브 호수 입구 바위 위의 13세기 성으로, 스코틀랜드에서 가장 오래된 석조 성 가운데 하나입니다.', 'A 13th-century castle on a rock at the mouth of Loch Etive, 5 km north of Oban, one of Scotland’s oldest stone castles.', 'Dunstaffnage Castle', 45, 60),
             H('아이오나 수도원', 'Iona Abbey', '563년 성 콜룸바가 세운 수도원으로, 스코틀랜드에 기독교를 전한 중심지였습니다. 오번에서 페리로 멀섬을 건너 다녀옵니다.', 'The abbey founded by St Columba in 563, the centre from which Christianity spread through Scotland, reached from Oban by ferry across Mull.', 'Iona Abbey', 480, 600, n='오번–크레이그뉴어 페리, 멀섬 횡단 버스, 아이오나 페리를 갈아타는 하루 일정입니다.|A full day: Oban–Craignure ferry, a bus across Mull and the Iona ferry.'),
         ],
         hubs="    air: [['Glasgow (GLA)', '글래스고 공항 (GLA)', '글래스고|Glasgow']],\n    rail: [['Oban', '오번역']],\n    port: [['Oban Ferry Terminal', '오번 페리 터미널', '멀섬 크레이그뉴어행 45분|45 min to Craignure, Mull']],\n",
         itinerary={'days': [['', 1, 2, 3]], 'trips': [['던스태프니지 성|Dunstaffnage Castle', 4], ['멀섬과 아이오나|Mull & Iona', 5]]},
         season='페리와 날씨가 좋은 5~9월이 알맞습니다.|May–September, for the ferries and the weather.',
         stay=[('오번 항구 주변', 'Oban harbour front', 'Oban', '처음이라면|First visit', '역·페리 터미널과 식당이 항구에 모여 있습니다.|The station, ferry terminal and restaurants are all on the harbour.')],
         routes=[R('glasgow', 'oban', 'train', 185)],
         transit=dict(modes=['walk', 'bus', 'ferry', 'train'], ko='마을은 걸어서 다닙니다. 역 옆 터미널에서 멀섬행 페리가 떠납니다.', en='Walk around town; ferries to Mull leave from the terminal next to the station.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


def move_st_ives():
    c = rd('cities.ts')
    for hid in ('st-ives-h5', 'st-ives-h4'):
        i = c.index(f'id: "{hid}"')
        s = c.rindex(',\n      {', 0, i)
        e = c.index('\n      }', i) + len('\n      }')
        c = c[:s] + c[e:]
    c = add_sights(c, 'st-ives', [(4, S('바버라 헵워스 박물관', 'Barbara Hepworth Museum', '조각가 바버라 헵워스가 1949년 사들여 1975년 세상을 떠날 때까지 26년 동안 살며 작업한 작업실과 조각 정원을 그대로 보존한 곳입니다.', 'The studio and sculpture garden where Barbara Hepworth lived and worked for 26 years, from 1949 until her death in 1975, kept much as she left them.', 'Barbara Hepworth Museum and Sculpture Garden', 45, 60))], 'visit-uk.ts')
    wr('cities.ts', c)
    vi = rd('visit-uk.ts')
    lines = vi.split('\n')
    old4 = [k for k, l in enumerate(lines) if l.startswith("  'st-ives-h4': v(120, 180")]
    old5 = [k for k, l in enumerate(lines) if l == "  'st-ives-h5': v(45, 60),"]
    assert len(old4) == 1 and len(old5) == 1
    for k in sorted(old4 + old5, reverse=True):
        del lines[k]
    wr('visit-uk.ts', '\n'.join(lines))
    it = rd('itinerary-uk.ts')
    a = "  'st-ives': { days: [['', 3, 1, 2]], trips: [['세인트 마이클스 마운트와 랜즈 엔드|St Michael’s Mount & Land’s End', 4, 5]] },\n"
    assert it.count(a) == 1
    wr('itinerary-uk.ts', it.replace(a, "  'st-ives': [3, 1, 4, 2],\n"))
    root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
    pub = os.path.join(root, 'public', 'highlights')
    os.replace(os.path.join(pub, 'st-ives-4.jpg'), os.path.join(pub, 'penzance-1.jpg'))
    os.replace(os.path.join(pub, 'st-ives-5.jpg'), os.path.join(pub, 'penzance-2.jpg'))
    gm_p = os.path.join(root, 'scripts', 'itinerary', 'geo-manual.json')
    gm = json.load(open(gm_p))
    for a, b in (('st-ives-h4', 'penzance-h1'), ('st-ives-h5', 'penzance-h2')):
        if a in gm:
            gm[b] = gm.pop(a)
    json.dump(gm, open(gm_p, 'w'), ensure_ascii=False, indent=2)
    open(gm_p, 'a').write('\n')
    g = rd('geo.ts')
    g = g.replace("  'st-ives-h4': [", "  'penzance-h1': [").replace("  'st-ives-h5': [", "  'penzance-h2': [")
    wr('geo.ts', g)
    nt = rd('night-trains.ts')
    a = "    lines: [['london', 'st-ives']],\n"
    assert nt.count(a) == 1
    wr('night-trains.ts', nt.replace(a, "    lines: [['london', 'penzance'], ['london', 'st-ives']],\n"))
    co = rd('countries.ts')
    eng_old = "'bath', 'bristol', 'salisbury', 'st-ives', 'manchester', 'liverpool', 'chester', 'york', 'durham'"
    for s0 in ("'brighton', 'oxford'", "'st-andrews', 'inverness'"):
        assert co.count(s0) == 2, s0
    co = co.replace("'brighton', 'oxford'", "'brighton', 'portsmouth', 'oxford'")
    co = co.replace("'st-andrews', 'inverness'", "'st-andrews', 'oban', 'inverness'")
    co = co.replace("'st-ives', 'manchester'", "'st-ives', 'penzance', 'manchester'")
    co = co.replace("'york', 'durham'", "'york', 'lincoln', 'durham'")
    wr('countries.ts', co)


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    co = rd('countries.ts')
    # T.main appended ids after their anchors in cityIds; undo so move_st_ives sets the final order
    for cid in ('portsmouth', 'penzance', 'lincoln', 'oban'):
        co = co.replace(f", '{cid}'", '')
    wr('countries.ts', co)
    move_st_ives()
