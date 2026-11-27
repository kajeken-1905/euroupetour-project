#!/usr/bin/env python3
"""Ireland 2nd pass, new cities (2026-11-27, user picked all 16): Drogheda & Boyne Valley, Wicklow & Glendalough,
Wexford, Athlone (Leinster); Waterford, Cobh, Kenmare, Cashel (Munster); Sligo, Clifden, Inis Mór, Cong (Connacht);
Letterkenny & Glenveagh, Donegal Town, Killybegs & Slieve League, Inishowen & Malin Head (Ulster, new group).
Existing sights pointing at these places (Dublin h18 Glendalough, h19 Brú na Bóinne; Cork h8 Cobh; Kilkenny h7 Cashel;
Galway h7 Aran, h8 Connemara) are kept. Facts from Wikipedia and the sites' own pages; times are rounded usual timings
(Irish Rail / Bus Éireann / ferry operators, 2026-11-27). Groups rebuilt afterwards into the four provinces. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places3 import trip

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
NEAR = ('근교', 'Nearby')
FIRST = '처음 가는 여행에 추천|Best for a first visit'
RC = 'routes-west.ts'
R_AFTER = r"^  r\('dublin', 'cork', 'train', 150, .*\n"
DUB = "['Dublin (DUB)', '더블린 공항 (DUB)', '더블린|Dublin']"
SNN = "['Shannon (SNN)', '섀넌 공항 (SNN)', '섀넌|Shannon']"
ORK = "['Cork (ORK)', '코크 공항 (ORK)', '코크|Cork']"
KIR = "['Kerry (KIR)', '케리 공항 (KIR)', '파란포어|Farranfore']"
NOC = "['Ireland West Airport Knock (NOC)', '녹 공항 (NOC)', '녹|Knock']"
CFN = "['Donegal (CFN)', '도니골 공항 (CFN)', '운항편 적음|few flights']"


def H(ko, en, dko, den, maps, mn, mx, n=None, group=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    d = dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)
    if group:
        d['group'] = group
    return d


def R(a, b, mode, m, *opts):
    extra = f", {{ {', '.join(opts)} }}" if opts else ''
    return (RC, R_AFTER, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


def C(**k):
    d = dict(country='ie', hubs_file='hubs-west.ts', hubs_before='  // —— ch ——\n', itin_file='itinerary-uk.ts',
             itin_before='  doolin: ', visit_file='visit-uk.ts', visit_after=r"^  'dublin-h1': v\(.*\),\n",
             stay_before='  dublin: [', transit_before='  dublin: {', places=None, daytrips=[], apps='')
    d.update(k)
    return d


def hubs(air, bus=None, port=None, rail=None):
    s = f"    air: [{', '.join(air)}],\n" if air else ''
    if rail:
        s += f"    rail: [{rail}],\n"
    if bus:
        s += f"    bus: [{bus}],\n"
    if port:
        s += f"    port: [{port}],\n"
    return s


CITIES = [
    C(id='drogheda', group_title=None, after='dublin', ko='드로이다·보인 계곡', en='Drogheda & Boyne Valley', native='Drogheda / Droichead Átha', lat=53.7179, lng=-6.3561,
      blurb=['보인강 하구의 중세 도시 드로이다를 거점으로, 뉴그레인지 고분·켈트 십자가·1690년 보인 전투지가 모인 계곡을 둘러봅니다.',
             'Medieval Drogheda at the mouth of the Boyne, base for a valley of passage tombs, high crosses and the 1690 Battle of the Boyne site.'],
      highlights=[
          H('세인트 로렌스 게이트', 'St Laurence’s Gate', '13세기에 세운 성문 망루로, 옛 성벽의 상징입니다.', 'A 13th-century barbican gate, the emblem of the old town walls.', 'St Laurence’s Gate Drogheda', 15, 20, b='no', n=FREE),
          H('세인트 피터 성당', 'St Peter’s Church', '성 올리버 플렁킷의 머리 유해를 모신 성당입니다.', 'The church that keeps the head relic of St Oliver Plunkett.', 'St Peter’s Church Drogheda', 20, 30, b='no', n=FREE),
          H('모나스터보이스 켈트 십자가', 'Monasterboice high crosses', '10세기 무이레다크 십자가 등 조각이 가득한 켈트 십자가와 원탑이 있는 수도원 터입니다.', 'A monastic site with a round tower and richly carved high crosses, including the 10th-century Muiredach’s Cross.', 'Monasterboice', 30, 45, group=NEAR, b='no', n=FREE),
          H('보인 전투 방문자 센터', 'Battle of the Boyne Visitor Centre', '1690년 보인 전투가 벌어진 올드브리지 저택과 전장입니다.', 'Oldbridge House and the battlefield of 1690.', 'Battle of the Boyne Visitor Centre', 60, 90, group=NEAR),
          H('멜리폰트 수도원', 'Mellifont Abbey', '1142년에 세운 아일랜드 최초의 시토회 수도원 유적입니다.', 'Ruins of Ireland’s first Cistercian abbey, founded in 1142.', 'Old Mellifont Abbey', 30, 45, group=NEAR),
      ],
      hubs=hubs([DUB], "['Drogheda Bus Station', '드로이다 버스 정류장']", None, "['Drogheda MacBride', '드로이다역']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['보인 계곡|Boyne Valley', 3, 5, 4]]},
      season='봄부터 가을까지 좋습니다.|Best from spring to autumn.',
      stay=[('시내 중심', 'Town centre', 'Drogheda', FIRST, '역과 버스, 식당이 가깝습니다.|Near the station, buses and restaurants.')],
      routes=[R('dublin', 'drogheda', 'train', 35, "fa: '더블린 코널리역|Dublin Connolly'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 계곡 유적은 차나 투어가 편합니다.', en='Walk the town; a car or tour is easiest for the valley sites.')),
    C(id='wicklow', group_title=None, after='drogheda', ko='위클로·글렌달록', en='Wicklow & Glendalough', native='Wicklow / Gleann Dá Loch', lat=53.0117, lng=-6.3290,
      blurb=['‘아일랜드의 정원’이라 불리는 위클로 산지로, 성 케빈의 수도원 터 글렌달록과 호수, 파워스코트 정원이 있습니다. 글렌달록을 기준으로 안내합니다.',
             'The Wicklow Mountains, “the Garden of Ireland”: St Kevin’s monastic site at Glendalough, its lakes and Powerscourt gardens. Times are from Glendalough.'],
      highlights=[
          H('글렌달록 수도원 터', 'Glendalough monastic site', '6세기 성 케빈이 세운 수도원 터로, 원탑과 돌 성당이 남아 있습니다.', 'The 6th-century monastic settlement of St Kevin, with a round tower and stone churches.', 'Glendalough Monastic Site', 60, 90, b='no', n=FREE),
          H('어퍼 레이크와 산책로', 'Upper Lake & trails', '빙하 골짜기의 호수 둘레로 산책로와 전망 능선길이 이어집니다.', 'Trails round the lake in a glacial valley, with a ridge walk above.', 'Glendalough Upper Lake', 120, 180, b='no', n=FREE),
          H('파워스코트 저택과 정원', 'Powerscourt House & Gardens', '에니스케리의 대저택과 이탈리아식 정원, 근처 폭포입니다.', 'The great house and Italian gardens at Enniskerry, with a waterfall nearby.', 'Powerscourt Estate', 120, 180, group=DAY),
          H('위클로 감옥', 'Wicklow Gaol', '위클로 타운의 옛 감옥 박물관입니다.', 'The old gaol museum in Wicklow Town.', 'Wicklow Historic Gaol', 60, 90, group=DAY),
      ],
      hubs=hubs([DUB], "['Glendalough (St Kevin’s Bus)', '글렌달록 버스 정류장', '더블린행 세인트 케빈 버스|St Kevin’s Bus to Dublin']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['파워스코트|Powerscourt', 3], ['위클로 타운|Wicklow Town', 4]]},
      season='봄부터 가을까지 좋고, 산 위는 날씨가 빨리 바뀝니다.|Spring to autumn; mountain weather changes fast.',
      stay=[('글렌달록·래러', 'Glendalough & Laragh', 'Laragh', FIRST, '호텔과 B&B가 유적 가까이 있습니다.|Hotels and B&Bs near the site.'),
            ('더블린에서 다녀오기', 'Day trip from Dublin', 'Dublin', '거점에서 다녀오기|Visit from a base', '더블린에서 버스나 투어로 하루에 다녀옵니다.|A day by bus or tour from Dublin.')],
      routes=[R('dublin', 'wicklow', 'bus', 90, "n: '세인트 케빈 버스|St Kevin’s Bus'")],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='버스가 하루 몇 번뿐이라 차나 투어가 편합니다.', en='Only a few buses a day; a car or tour is easiest.')),
    C(id='wexford', group_title=None, after='kilkenny', ko='웩스퍼드', en='Wexford', native='Wexford / Loch Garman', lat=52.3369, lng=-6.4633,
      blurb=['바이킹이 세운 남동부의 항구 도시로, 아일랜드 역사 공원과 800년 된 후크 등대가 가깝습니다. 가을엔 오페라 축제가 열립니다.',
             'A south-eastern harbour town founded by the Vikings, near the National Heritage Park and the 800-year-old Hook Lighthouse; an opera festival is held in autumn.'],
      highlights=[
          H('아일랜드 국립 헤리티지 파크', 'Irish National Heritage Park', '석기 시대부터 노르만 시대까지의 집과 요새를 복원한 야외 박물관입니다.', 'An open-air museum of reconstructed homes and forts from the Stone Age to the Normans.', 'Irish National Heritage Park', 120, 180, group=NEAR),
          H('후크 등대', 'Hook Lighthouse', '800여 년 동안 불을 밝혀 온 세계에서 손꼽히게 오래된 등대입니다.', 'One of the world’s oldest working lighthouses, lit for some 800 years.', 'Hook Lighthouse', 60, 90, group=DAY),
          H('존스타운 성과 농업 박물관', 'Johnstown Castle & Agricultural Museum', '호수와 정원이 있는 고딕 저택과 아일랜드 농업 박물관입니다.', 'A Gothic Revival castle with lakes, gardens and the Irish Agricultural Museum.', 'Johnstown Castle', 90, 120, group=NEAR),
          H('던브로디 기근 이민선', 'Dunbrody Famine Ship', '뉴로스 부두의 대기근 시대 이민선 복제선입니다.', 'A replica Famine-era emigrant ship on the quay at New Ross.', 'Dunbrody Famine Ship', 60, 90, group=DAY),
      ],
      hubs=hubs([DUB], "['Wexford O’Hanrahan Station (bus)', '웩스퍼드 버스 정류장']", "['Rosslare Europort', '로슬레어 유로포트', '웨일스·프랑스행 페리|ferries to Wales and France']", "['Wexford O’Hanrahan', '웩스퍼드역']"),
      itinerary={'days': [['', 1, 3]], 'trips': [['후크 등대|Hook Lighthouse', 2], ['뉴로스|New Ross', 4]]},
      season='봄부터 가을까지 좋고, 10~11월엔 웩스퍼드 오페라 축제가 열립니다.|Spring to autumn; the Wexford Festival Opera runs in October–November.',
      stay=[('시내 중심', 'Town centre', 'Wexford', FIRST, '부두와 메인 스트리트가 가깝습니다.|Near the quay and Main Street.')],
      routes=[R('dublin', 'wexford', 'train', 150, "fa: '더블린 코널리역|Dublin Connolly'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 근교 명소는 차가 편합니다.', en='Walk the town; a car is easiest for the sights nearby.')),
    C(id='athlone', group_title=None, after='wexford', ko='애슬론', en='Athlone', native='Athlone / Baile Átha Luain', lat=53.4239, lng=-7.9407,
      blurb=['섀넌강 가 아일랜드 한가운데의 도시로, 강을 지키는 성과, 가장 오래된 펍이라고 알려진 시언스 바가 있습니다. 근처에 클론맥노이즈 수도원 터가 있습니다.',
             'A town on the Shannon in the middle of Ireland, with a riverside castle and Sean’s Bar, said to be the oldest pub in Ireland; Clonmacnoise is nearby.'],
      highlights=[
          H('애슬론 성', 'Athlone Castle', '섀넌강 다리를 지키는 13세기 성으로, 전시관이 있습니다.', 'The 13th-century castle guarding the Shannon bridge, with a visitor centre.', 'Athlone Castle', 60, 90),
          H('시언스 바', 'Sean’s Bar', '아일랜드에서 가장 오래된 펍으로 알려진 곳입니다.', 'The pub said to be the oldest in Ireland.', 'Sean’s Bar Athlone', 45, 60, b='no'),
          H('클론맥노이즈', 'Clonmacnoise', '섀넌강 가의 6세기 수도원 터로, 켈트 십자가와 원탑이 남아 있습니다.', 'A 6th-century monastic site on the Shannon, with high crosses and round towers.', 'Clonmacnoise', 90, 120, group=DAY),
          H('섀넌강 유람선', 'Shannon river cruise', '리 호수 쪽으로 강을 따라가는 유람선입니다.', 'A cruise up the Shannon towards Lough Ree.', 'Viking Tours Athlone', 90, 120, n='여름철 위주로 운항합니다.|Runs mainly in summer.'),
      ],
      hubs=hubs([DUB, SNN], "['Athlone Bus Station', '애슬론 버스 정류장']", None, "['Athlone', '애슬론역', '더블린·골웨이행|to Dublin, Galway']"),
      itinerary={'days': [['', 1, 4, 2]], 'trips': [['클론맥노이즈|Clonmacnoise', 3]]},
      season='봄부터 가을까지 좋습니다.|Best from spring to autumn.',
      stay=[('강가 시내', 'Riverside centre', 'Athlone', FIRST, '성과 펍, 유람선이 걸어서 닿습니다.|The castle, pubs and boats on foot.')],
      routes=[R('dublin', 'athlone', 'train', 90, "fa: '더블린 휴스턴역|Dublin Heuston'"), R('athlone', 'galway', 'train', 50)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 클론맥노이즈는 차나 투어로 갑니다.', en='Walk the town; car or tour to Clonmacnoise.')),
    C(id='waterford', group_title=None, after='kinsale', ko='워터퍼드', en='Waterford', native='Waterford / Port Láirge', lat=52.2593, lng=-7.1101,
      blurb=['바이킹이 세운 아일랜드에서 가장 오래된 도시로, 바이킹 트라이앵글 박물관과 워터퍼드 크리스털 공방이 있습니다.',
             'Ireland’s oldest city, founded by the Vikings, with the Viking Triangle museums and the House of Waterford Crystal.'],
      highlights=[
          H('레지널드 탑', 'Reginald’s Tower', '바이킹 시대 성벽에 이어진 둥근 탑으로, 아일랜드에서 가장 오래된 시민 건물로 꼽힙니다.', 'A round tower on the Viking-age walls, counted as Ireland’s oldest civic building.', 'Reginald’s Tower', 30, 45),
          H('중세 박물관과 주교 궁전', 'Medieval Museum & Bishop’s Palace', '바이킹 트라이앵글의 박물관들로, 중세 보물과 조지 시대 실내를 봅니다.', 'The Viking Triangle museums, with medieval treasures and Georgian interiors.', 'Waterford Medieval Museum', 90, 120),
          H('워터퍼드 크리스털 공방', 'House of Waterford Crystal', '장인이 유리를 불고 깎는 과정을 보는 공방 투어입니다.', 'A factory tour watching craftsmen blow and cut crystal.', 'House of Waterford Crystal', 60, 90),
          H('워터퍼드 그린웨이', 'Waterford Greenway', '옛 철길을 따라 둥가번까지 46km 이어지는 자전거·산책길입니다.', 'A 46 km cycle and walking trail along an old railway to Dungarvan.', 'Waterford Greenway', 180, 300, group=DAY, b='no', n=FREE),
      ],
      hubs=hubs([DUB, ORK], "['Waterford Bus Station', '워터퍼드 버스 정류장']", None, "['Waterford Plunkett', '워터퍼드역']"),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['워터퍼드 그린웨이|Waterford Greenway', 4]]},
      season='봄부터 가을까지 좋습니다.|Best from spring to autumn.',
      stay=[('바이킹 트라이앵글', 'Viking Triangle', 'Viking Triangle Waterford', FIRST, '박물관과 강변이 걸어서 닿습니다.|The museums and quays on foot.')],
      routes=[R('dublin', 'waterford', 'train', 135, "fa: '더블린 휴스턴역|Dublin Heuston'"), R('kilkenny', 'waterford', 'train', 40)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 그린웨이는 자전거를 빌립니다.', en='Walk the centre; rent a bike for the Greenway.')),
    C(id='cobh', group_title=None, after='cork', ko='코브', en='Cobh', native='Cobh / An Cóbh', lat=51.8503, lng=-8.2967,
      blurb=['타이태닉호가 마지막으로 들른 항구 마을로, 언덕 위 대성당 아래 색색의 집들이 늘어서 있습니다. 대기근 시대 이민의 출발지였습니다.',
             'The harbour town that was the Titanic’s last port of call, with colourful houses below a hilltop cathedral; a departure point for Famine-era emigrants.'],
      highlights=[
          H('성 콜먼 대성당', 'St Colman’s Cathedral', '항구를 내려다보는 신고딕 대성당으로, 카리용이 있습니다.', 'A Neo-Gothic cathedral overlooking the harbour, with a carillon.', 'St Colman’s Cathedral Cobh', 30, 45, b='no', n=FREE),
          H('타이태닉 익스피리언스 코브', 'Titanic Experience Cobh', '타이태닉호 승객이 배에 오르던 옛 선박 회사 건물의 전시입니다.', 'An exhibition in the old shipping office where the Titanic’s last passengers boarded.', 'Titanic Experience Cobh', 60, 75),
          H('카드 덱 하우스', 'The Deck of Cards', '가파른 비탈에 색색의 집들이 카드처럼 늘어선 거리입니다.', 'A steep row of colourful houses lined up like a deck of cards.', 'Deck of Cards Cobh', 15, 20, b='no', n=FREE),
          H('스파이크섬', 'Spike Island', '배로 가는 별 모양 요새 감옥 섬입니다.', 'A star-shaped fortress and prison island reached by ferry.', 'Spike Island', 180, 240, group=NEAR),
      ],
      hubs=hubs([ORK], None, "['Kennedy Pier Cobh', '케네디 부두', '스파이크섬행 배|ferry to Spike Island']", "['Cobh', '코브역', '코크 켄트행|to Cork Kent']"),
      itinerary={'days': [['', 1, 3, 2]], 'trips': [['스파이크섬|Spike Island', 4]]},
      season='봄부터 가을까지 좋습니다.|Best from spring to autumn.',
      stay=[('코크에서 다녀오기', 'Day trip from Cork', 'Cork', '거점에서 다녀오기|Visit from a base', '코크에서 기차로 약 25분입니다.|About 25 min by train from Cork.')],
      routes=[R('cork', 'cobh', 'train', 25)],
      transit=dict(modes=['walk', 'train', 'ferry'], ko='작은 마을이라 걸어서 다니고, 언덕이 가파릅니다.', en='A small, steep town on foot.')),
    C(id='kenmare', group_title=None, after='killarney', ko='켄메어', en='Kenmare', native='Kenmare / Neidín', lat=51.8801, lng=-9.5835,
      blurb=['링 오브 케리와 베라 반도 사이의 색색의 작은 마을로, 식당이 많고 두 해안 드라이브의 거점입니다.',
             'A colourful little town between the Ring of Kerry and the Beara Peninsula, full of restaurants and a base for both coastal drives.'],
      highlights=[
          H('켄메어 시내', 'Kenmare town', '색색의 가게와 식당이 늘어선 헤리티지 타운입니다.', 'A heritage town of colourful shops and restaurants.', 'Kenmare', 45, 60, b='no', n=FREE),
          H('켄메어 스톤 서클', 'Kenmare Stone Circle', '시내 가까이의 청동기 시대 돌 원형 유적입니다.', 'A Bronze Age stone circle close to town.', 'Kenmare Stone Circle', 15, 20),
          H('링 오브 베라', 'Ring of Beara', '베라 반도를 도는 조용한 해안 드라이브입니다.', 'A quieter coastal drive round the Beara Peninsula.', 'Ring of Beara', 300, 420, group=DAY, b='no', n=FREE),
          H('글레닌샤퀸 공원', 'Gleninchaquin Park', '폭포와 호수가 있는 골짜기의 산책로입니다.', 'Trails through a valley of waterfalls and lakes.', 'Gleninchaquin Park', 120, 180, group=NEAR),
      ],
      hubs=hubs([KIR], "['Kenmare Bus Stop', '켄메어 버스 정류장', '킬라니행|to Killarney']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['링 오브 베라|Ring of Beara', 3], ['글레닌샤퀸|Gleninchaquin', 4]]},
      season='5~9월이 좋습니다.|Best May–September.',
      stay=[('시내 중심', 'Town centre', 'Kenmare', FIRST, '식당과 펍이 모여 있습니다.|Restaurants and pubs together.')],
      routes=[R('killarney', 'kenmare', 'bus', 45)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='해안 드라이브는 차가 있어야 합니다.', en='You need a car for the coastal drives.')),
    C(id='cashel', group_title=None, after='waterford', ko='캐셸', en='Cashel', native='Cashel / Caiseal', lat=52.5160, lng=-7.8854,
      blurb=['평야 위 바위 언덕에 중세 성채와 대성당 유적 ‘캐셸 바위’가 솟은 마을로, 먼스터 왕들의 자리였습니다.',
             'A town below the Rock of Cashel, the medieval fortress and cathedral ruins on a crag above the plain, once the seat of the kings of Munster.'],
      highlights=[
          H('캐셸 바위', 'Rock of Cashel', '원탑과 코맥 예배당, 고딕 대성당 유적이 바위 위에 모여 있습니다.', 'A round tower, Cormac’s Chapel and a Gothic cathedral on the rock.', 'Rock of Cashel', 60, 90),
          H('호어 수도원', 'Hore Abbey', '바위 아래 들판의 시토회 수도원 유적입니다.', 'Cistercian abbey ruins in the fields below the rock.', 'Hore Abbey', 30, 45, b='no', n=FREE),
          H('케어 성', 'Cahir Castle', '강 위 바위섬에 선 중세 성입니다.', 'A medieval castle on a rocky island in the river.', 'Cahir Castle', 60, 90, group=NEAR),
      ],
      hubs=hubs([SNN, DUB], "['Cashel Bus Stop', '캐셸 버스 정류장', '더블린·코크행|to Dublin, Cork']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['케어 성|Cahir Castle', 3]]},
      season='일 년 내내 방문할 수 있습니다.|Can be visited all year.',
      stay=[('시내 중심', 'Town centre', 'Cashel', FIRST, '바위까지 걸어서 오릅니다.|A walk up to the rock.')],
      routes=[R('dublin', 'cashel', 'bus', 140), R('cork', 'cashel', 'bus', 90)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='작은 마을이라 걸어서 다닙니다.', en='A small town on foot.')),
    C(id='inishmore', group_title=None, after='galway', ko='아란 제도 (이니시모어)', en='Aran Islands (Inis Mór)', native='Inis Mór / Inishmore', lat=53.1170, lng=-9.6650,
      blurb=['골웨이만 입구의 석회암 섬으로, 돌담이 끝없이 이어지고 절벽 끝에 선사 시대 요새 둔 앵거스가 서 있습니다. 아일랜드어를 쓰는 곳입니다.',
             'A limestone island at the mouth of Galway Bay, criss-crossed by stone walls, with the prehistoric cliff fort of Dún Aonghasa; Irish is spoken here.'],
      highlights=[
          H('둔 앵거스', 'Dún Aonghasa', '100m 높이 절벽 끝에 반원으로 쌓은 선사 시대 돌 요새입니다.', 'A prehistoric stone fort in a half-ring on the edge of a 100 m cliff.', 'Dún Aonghasa', 90, 120, n='절벽에 난간이 없어 조심해야 합니다.|The cliff edge has no railings; take care.'),
          H('킬로넌 마을', 'Kilronan', '배가 닿는 섬의 중심 마을로, 자전거와 미니버스를 빌립니다.', 'The island’s main village where the ferry lands; hire bikes or minibuses here.', 'Kilronan Inis Mór', 30, 45, b='no', n=FREE),
          H('일곱 성당 유적', 'Seven Churches', '중세 수도원 성당들과 묘지의 유적입니다.', 'Ruins of medieval monastic churches and graves.', 'Na Seacht dTeampaill', 30, 45, b='no', n=FREE),
          H('웜 홀', 'Poll na bPeist (Worm Hole)', '바위 해안에 네모나게 뚫린 천연 바닷물 웅덩이입니다.', 'A naturally rectangular sea pool in the rocky shore.', 'Poll na bPeist', 60, 90, b='no', n=FREE),
      ],
      hubs=hubs([SNN], None, "['Kilronan Pier', '킬로넌 부두', '로사빌·둘린행 배|ferries to Rossaveal, Doolin']"),
      itinerary={'days': [['', 2, 1, 3, 4]]},
      season='4~9월이 좋고, 겨울엔 배편이 줄고 바람이 셉니다.|April–September; winter brings fewer boats and strong winds.',
      stay=[('킬로넌', 'Kilronan', 'Kilronan', FIRST, '부두 가까운 B&B와 펍이 모여 있습니다.|B&Bs and pubs near the pier.'),
            ('골웨이에서 다녀오기', 'Day trip from Galway', 'Galway', '거점에서 다녀오기|Visit from a base', '버스와 배로 하루에 다녀옵니다.|A day by bus and ferry.')],
      routes=[R('galway', 'inishmore', 'ferry', 120, "n: '로사빌 부두까지 버스 후 배|bus to Rossaveal, then ferry'"), R('doolin', 'inishmore', 'ferry', 90, "n: '여름철|summer only'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='자전거를 빌리거나 미니버스 투어로 섬을 돕니다.', en='Hire a bike or take a minibus tour round the island.')),
    C(id='clifden', group_title=None, after='inishmore', ko='클리프던 (코네마라)', en='Clifden (Connemara)', native='Clifden / An Clochán', lat=53.4890, lng=-10.0190,
      blurb=['코네마라의 중심 마을로, 바다 위 절벽길 스카이 로드와 코네마라 국립공원, 카일모어 수도원이 가깝습니다.',
             'The main town of Connemara, close to the clifftop Sky Road, Connemara National Park and Kylemore Abbey.'],
      highlights=[
          H('스카이 로드', 'Sky Road', '대서양과 섬들을 내려다보는 언덕 위 순환 도로입니다.', 'A loop road along the heights above the Atlantic and its islands.', 'Sky Road Clifden', 60, 90, b='no', n=FREE),
          H('코네마라 국립공원과 다이아몬드 힐', 'Connemara NP & Diamond Hill', '방문자 센터에서 다이아몬드 힐 정상까지 산길이 이어집니다.', 'Trails from the visitor centre to the top of Diamond Hill.', 'Connemara National Park', 180, 240, group=NEAR, b='no', n=FREE),
          H('카일모어 수도원', 'Kylemore Abbey', '호숫가의 신고딕 저택 수도원과 빅토리아식 정원입니다.', 'A Neo-Gothic abbey on a lake, with a Victorian walled garden.', 'Kylemore Abbey', 120, 150, group=NEAR),
          H('클리프던 시내', 'Clifden town', '두 첨탑이 선 언덕 마을로, 펍과 음악이 있습니다.', 'A hillside town of two spires, pubs and music.', 'Clifden', 45, 60, b='no', n=FREE),
      ],
      hubs=hubs([SNN, NOC], "['Clifden Bus Stop', '클리프던 버스 정류장', '골웨이행|to Galway']"),
      itinerary={'days': [['', 4, 1], ['', 2, 3]]},
      season='5~9월이 좋고, 비와 바람이 잦습니다.|May–September; rain and wind are common.',
      stay=[('클리프던 시내', 'Clifden town', 'Clifden', FIRST, '식당과 펍, 버스가 모여 있습니다.|Restaurants, pubs and buses.')],
      routes=[R('galway', 'clifden', 'bus', 100)],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='버스가 드물어 차나 투어가 편합니다.', en='Buses are infrequent; a car or tour is easiest.')),
    C(id='cong', group_title=None, after='clifden', ko='콩', en='Cong', native='Cong / Conga', lat=53.5410, lng=-9.2860,
      blurb=['코립 호수와 마스크 호수 사이의 작은 마을로, 애시퍼드 성과 중세 수도원 터가 있고 영화 ‘말없는 사나이’(1952)의 촬영지입니다.',
             'A small village between Lough Corrib and Lough Mask, with Ashford Castle, a medieval abbey and the locations of The Quiet Man (1952).'],
      highlights=[
          H('애시퍼드 성', 'Ashford Castle', '호숫가의 성 호텔로, 넓은 정원과 숲을 산책합니다.', 'A castle hotel on the lake, with grounds and woods to walk.', 'Ashford Castle', 60, 90, n='성 정원 입장은 유료일 수 있습니다.|Entry to the grounds may be charged.'),
          H('콩 수도원', 'Cong Abbey', '12세기 아우구스티노회 수도원 유적과 강가의 수도사 낚시집입니다.', 'Ruins of a 12th-century Augustinian abbey and the monks’ fishing house on the river.', 'Cong Abbey', 30, 45, b='no', n=FREE),
          H('말없는 사나이 촬영지', 'The Quiet Man locations', '1952년 영화 ‘말없는 사나이’의 촬영지와 작은 박물관입니다.', 'Locations from the 1952 film The Quiet Man, with a small museum.', 'Quiet Man Museum Cong', 30, 45),
      ],
      hubs=hubs([NOC, SNN], "['Cong Bus Stop', '콩 버스 정류장', '골웨이행|to Galway']"),
      itinerary={'days': [['', 2, 1, 3]]},
      season='봄부터 가을까지 좋습니다.|Best from spring to autumn.',
      stay=[('마을 중심', 'Village centre', 'Cong', FIRST, '작은 B&B와 펍이 있습니다.|Small B&Bs and pubs.')],
      routes=[R('galway', 'cong', 'bus', 60)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='작은 마을이라 걸어서 다닙니다.', en='A tiny village on foot.')),
    C(id='sligo', group_title=None, after='westport', ko='슬라이고', en='Sligo', native='Sligo / Sligeach', lat=54.2766, lng=-8.4761,
      blurb=['시인 예이츠의 고향으로, 탁자 모양 벤불벤산과 선사 시대 캐로모어 거석 묘지, 서핑 해변이 가깝습니다.',
             'W. B. Yeats country, near the table-top mountain of Benbulben, the Carrowmore megalithic cemetery and surfing beaches.'],
      highlights=[
          H('벤불벤', 'Benbulben', '탁자처럼 평평한 꼭대기의 산으로, 아래쪽 숲길에서 바라봅니다.', 'The flat-topped mountain, seen from the forest walk below.', 'Benbulben', 90, 120, group=NEAR, b='no', n=FREE),
          H('드럼클리프 교회 묘지 (예이츠의 무덤)', 'Drumcliffe churchyard (Yeats’s grave)', '벤불벤 아래 예이츠가 묻힌 교회 묘지로, 켈트 십자가가 있습니다.', 'The churchyard below Benbulben where Yeats is buried, with a high cross.', 'Drumcliffe Church', 30, 45, group=NEAR, b='no', n=FREE),
          H('캐로모어 거석 묘지', 'Carrowmore Megalithic Cemetery', '아일랜드에서 가장 큰 선사 시대 고분군 가운데 하나입니다.', 'One of Ireland’s largest prehistoric tomb complexes.', 'Carrowmore Megalithic Cemetery', 60, 90, group=NEAR),
          H('스트랜드힐 해변', 'Strandhill', '서퍼들이 모이는 대서양 해변 마을입니다.', 'An Atlantic beach village popular with surfers.', 'Strandhill Beach', 90, 120, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs([NOC], "['Sligo Bus Station', '슬라이고 버스 정류장']", None, "['Sligo MacDiarmada', '슬라이고역', '더블린행|to Dublin']"),
      itinerary={'days': [['', 3, 4], ['', 1, 2]]},
      season='5~9월이 좋고, 6월엔 예이츠 축제가 열립니다.|May–September; a Yeats festival is held in June.',
      stay=[('시내 중심', 'Town centre', 'Sligo', FIRST, '역과 식당, 강가 펍이 가깝습니다.|Near the station, restaurants and riverside pubs.')],
      routes=[R('dublin', 'sligo', 'train', 180, "fa: '더블린 코널리역|Dublin Connolly'"), R('westport', 'sligo', 'bus', 120)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 근교 명소는 차가 편합니다.', en='Walk the town; a car is easiest for the sights nearby.')),
    C(id='letterkenny', group_title=None, after='sligo', ko='레터케니·글렌베이', en='Letterkenny & Glenveagh', native='Letterkenny / Leitir Ceanainn', lat=54.9500, lng=-7.7333,
      blurb=['도니골 주에서 가장 큰 도시로, 산과 호수 사이에 성과 정원이 있는 글렌베이 국립공원의 거점입니다.',
             'County Donegal’s largest town, base for Glenveagh National Park with its castle and gardens among mountains and lakes.'],
      highlights=[
          H('글렌베이 국립공원과 성', 'Glenveagh NP & Castle', '호숫가의 19세기 성과 정원, 산 골짜기 산책로입니다.', 'A 19th-century castle and gardens on a lake, with valley trails.', 'Glenveagh Castle', 180, 240, group=NEAR),
          H('성 유난 대성당', 'St Eunan’s Cathedral', '시내를 내려다보는 신고딕 대성당입니다.', 'The Neo-Gothic cathedral above the town.', 'St Eunan’s Cathedral Letterkenny', 20, 30, b='no', n=FREE),
          H('그리아난 오브 에일리흐', 'Grianán of Aileach', '언덕 위 둥근 돌 요새로, 호수와 반도들이 내려다보입니다.', 'A ring fort of stone on a hilltop, overlooking loughs and peninsulas.', 'Grianán of Aileach', 45, 60, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs([CFN, "['City of Derry (LDY)', '데리 공항 (LDY)', '북아일랜드 데리|Derry, Northern Ireland']"], "['Letterkenny Bus Station', '레터케니 버스 정류장', '더블린·데리행|to Dublin, Derry']"),
      itinerary={'days': [['', 2]], 'trips': [['글렌베이|Glenveagh', 1], ['그리아난 오브 에일리흐|Grianán of Aileach', 3]]},
      season='5~9월이 좋습니다.|Best May–September.',
      stay=[('시내 중심', 'Town centre', 'Letterkenny', FIRST, '버스 정류장과 식당이 가깝습니다.|Near the bus station and restaurants.')],
      routes=[R('dublin', 'letterkenny', 'bus', 240), R('letterkenny', 'donegal', 'bus', 50)],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='국립공원은 차나 투어가 편합니다.', en='A car or tour is easiest for the national park.')),
    C(id='donegal', group_title=None, after='letterkenny', ko='도니골 타운', en='Donegal Town', native='Donegal / Dún na nGall', lat=54.6538, lng=-8.1096,
      blurb=['도니골만 안쪽의 작은 도시로, 오도널 가문의 성과 다이아몬드 광장이 있습니다. 서쪽 해안과 슬리브 리그 절벽으로 가는 길목입니다.',
             'A small town at the head of Donegal Bay, with the O’Donnell castle and the Diamond; the gateway to the west coast and Slieve League.'],
      highlights=[
          H('도니골 성', 'Donegal Castle', '15세기 오도널 가문의 탑 성과 17세기 저택입니다.', 'The 15th-century O’Donnell tower house and its 17th-century manor.', 'Donegal Castle', 45, 60),
          H('다이아몬드 광장', 'The Diamond', '가게와 펍이 둘러싼 마을 중심 광장입니다.', 'The town square ringed by shops and pubs.', 'The Diamond Donegal', 30, 45, b='no', n=FREE),
          H('도니골만 수상 버스', 'Donegal Bay Waterbus', '물개와 섬들을 보는 만 유람선입니다.', 'A bay cruise to see seals and islands.', 'Donegal Bay Waterbus', 90, 90, n='여름철 위주로 운항합니다.|Runs mainly in summer.'),
          H('도니골 공예 마을', 'Donegal Craft Village', '도자기·직물 등 공방이 모인 작은 마을입니다.', 'A small cluster of craft studios, from pottery to weaving.', 'Donegal Craft Village', 30, 45, b='no', n=FREE),
      ],
      hubs=hubs([CFN], "['Donegal Town Bus Stop', '도니골 버스 정류장', '더블린·슬라이고·레터케니행|to Dublin, Sligo, Letterkenny']"),
      itinerary={'days': [['', 2, 1, 4, 3]]},
      season='5~9월이 좋습니다.|Best May–September.',
      stay=[('다이아몬드 주변', 'Around the Diamond', 'The Diamond Donegal', FIRST, '성과 펍이 걸어서 닿습니다.|The castle and pubs on foot.')],
      routes=[R('sligo', 'donegal', 'bus', 75), R('dublin', 'donegal', 'bus', 240)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 해안은 차가 편합니다.', en='Walk the town; a car is easiest for the coast.')),
    C(id='killybegs', group_title=None, after='donegal', ko='슬리브 리그·킬리벡스', en='Slieve League & Killybegs', native='Sliabh Liag / Na Cealla Beaga', lat=54.6342, lng=-8.4473,
      blurb=['아일랜드 최대 어항 킬리벡스를 거점으로, 바다에서 600m 가까이 솟은 슬리브 리그 절벽과 글렌컬럼킬 민속 마을을 둘러봅니다.',
             'From Killybegs, Ireland’s largest fishing port, visit the Slieve League cliffs rising nearly 600 m from the sea and the Glencolmcille folk village.'],
      highlights=[
          H('슬리브 리그 절벽', 'Slieve League cliffs', '유럽에서 손꼽히게 높은 바다 절벽으로, 번글래스 전망대에서 봅니다.', 'Among Europe’s highest sea cliffs, seen from the Bunglass viewpoint.', 'Sliabh Liag Cliffs', 120, 180, group=NEAR, b='no', n=FREE),
          H('킬리벡스 항구', 'Killybegs harbour', '아일랜드에서 가장 큰 어항입니다.', 'Ireland’s largest fishing harbour.', 'Killybegs Harbour', 30, 45, b='no', n=FREE),
          H('글렌컬럼킬 민속 마을', 'Glencolmcille Folk Village', '초가지붕 집들로 옛 시골 생활을 보여 주는 민속 마을입니다.', 'Thatched cottages showing traditional rural life.', 'Glencolmcille Folk Village', 60, 90, group=DAY),
          H('핀트라 해변', 'Fintra Beach', '킬리벡스 근처의 모래 해변입니다.', 'A sandy beach near Killybegs.', 'Fintra Beach', 60, 90, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs([CFN], "['Killybegs Bus Stop', '킬리벡스 버스 정류장', '도니골행|to Donegal Town']"),
      itinerary={'days': [['', 2, 4, 1]], 'trips': [['글렌컬럼킬|Glencolmcille', 3]]},
      season='5~9월이 좋고, 맑은 날 절벽이 잘 보입니다.|May–September; go on a clear day for the cliffs.',
      stay=[('킬리벡스', 'Killybegs', 'Killybegs', FIRST, '항구 마을의 B&B와 식당입니다.|B&Bs and restaurants in the harbour town.')],
      routes=[R('donegal', 'killybegs', 'bus', 30)],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='절벽까지는 버스가 드물어 차나 투어가 편합니다.', en='Few buses go to the cliffs; a car or tour is easiest.')),
    C(id='inishowen', group_title=None, after='killybegs', ko='말린 헤드·이니쇼언', en='Malin Head & Inishowen', native='Inishowen / Inis Eoghain', lat=55.2900, lng=-7.2600,
      blurb=['아일랜드 본섬 최북단 말린 헤드가 있는 이니쇼언 반도로, 맑은 겨울밤엔 오로라가 보이기도 합니다. 카른도나를 기준으로 안내합니다.',
             'The Inishowen Peninsula, with Malin Head at the northern tip of mainland Ireland, where the aurora is sometimes seen on clear winter nights; times are from Carndonagh.'],
      highlights=[
          H('말린 헤드 (밴바의 왕관)', 'Malin Head (Banba’s Crown)', '아일랜드 본섬 최북단 곶으로, 옛 감시탑과 절벽 산책로가 있습니다.', 'The northernmost point of mainland Ireland, with an old signal tower and cliff paths.', 'Banba’s Crown Malin Head', 60, 90, b='no', n=FREE),
          H('파이브 핑거 해변', 'Five Finger Strand', '모래언덕 아래의 넓은 해변으로, 물살이 세 수영은 위험합니다.', 'A wide beach below dunes; currents make swimming dangerous.', 'Five Finger Strand', 45, 60, b='no', n='물살이 세서 수영은 금지입니다.|Strong currents; no swimming.'),
          H('도흐 기근 마을', 'Doagh Famine Village', '대기근 시대부터의 시골 생활을 재현한 야외 박물관입니다.', 'An open-air museum of rural life from the Famine era onwards.', 'Doagh Famine Village', 90, 120),
          H('마모어 갭', 'Mamore Gap', '반도 산길의 고개로, 대서양과 계곡이 내려다보입니다.', 'A mountain pass with views over the Atlantic and valleys.', 'Mamore Gap', 30, 45, b='no', n=FREE),
      ],
      hubs=hubs(["['City of Derry (LDY)', '데리 공항 (LDY)', '북아일랜드 데리|Derry, Northern Ireland']", CFN], "['Carndonagh Bus Stop', '카른도나 버스 정류장', '레터케니·데리행|to Letterkenny, Derry']"),
      itinerary={'days': [['', 1, 2], ['', 3, 4]]},
      season='5~9월이 좋고, 오로라는 9~3월의 맑은 밤에 가끔 보입니다.|May–September; the aurora is sometimes visible on clear nights from September to March.',
      stay=[('카른도나·말린', 'Carndonagh & Malin', 'Carndonagh', FIRST, '반도 북쪽 마을의 B&B입니다.|B&Bs in the northern villages.')],
      routes=[R('letterkenny', 'inishowen', 'bus', 75)],
      transit=dict(modes=['bus', 'taxi'], ko='버스가 드물어 차가 있어야 편합니다.', en='Buses are sparse; a car is best.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
