#!/usr/bin/env python3
"""Hungary 2nd pass, new cities (2026-11-27, user picked all 16): Veszprém, Balatonfüred, Székesfehérvár, Esztergom,
Kőszeg, Hévíz, Villány, Sümeg, Miskolc & Lillafüred, Aggtelek, Sárospatak, Mátra, Kecskemét, Kalocsa, Gödöllő, Visegrád.
Existing sights pointing at these towns (Budapest h16/h24, Szentendre h8, Tokaj h5, Pécs h7, Keszthely h2) are kept.
Facts from Wikipedia (en/hu) and the sites' own pages; times are rounded usual timings (MÁV/Volánbusz, 2026-11-27).
Groups are rebuilt afterwards into the 8 official regions. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places3 import trip

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
NEAR = ('근교', 'Nearby')
FIRST = '처음 가는 여행에 추천|Best for a first visit'
RC = 'routes-central.ts'
R_AFTER = r"^  r\('budapest', 'szentendre', .*\n"


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
    d = dict(country='hu', hubs_file='hubs-central.ts', hubs_before='  // —— pl ——\n', itin_file='itinerary-north.ts',
             itin_before='  holloko: ', visit_file='visit-central.ts', visit_after=r"^  'budapest-h1': v\(.*\),\n",
             stay_before='  budapest: [', transit_before='  budapest: {', places=None, daytrips=[], apps='')
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
    C(id='szekesfehervar', group_title=None, after='tihany', ko='세케슈페헤르바르', en='Székesfehérvár', native='Székesfehérvár', lat=47.1860, lng=18.4221,
      blurb=['중세 헝가리 왕들이 대관식을 하고 묻힌 옛 왕도로, 바로크 구시가와 한 사람이 손으로 지은 보리 성이 있습니다.',
             'The medieval royal seat where Hungary’s kings were crowned and buried, with a Baroque old town and Bory Castle, built by hand by one man.'],
      highlights=[
          H('국립 기념 유적 (왕실 바실리카 터)', 'Royal Basilica ruins garden', '역대 왕의 대관식과 장례가 열린 왕실 바실리카의 유적 정원입니다.', 'The ruins garden of the royal basilica where kings were crowned and buried.', 'Nemzeti Emlékhely Székesfehérvár', 30, 45),
          H('구시가와 시청 광장', 'Old town & Town Hall Square', '바로크 건물과 보행자 거리가 이어지는 구시가입니다.', 'A Baroque old town of pedestrian streets.', 'Városház tér Székesfehérvár', 45, 60, b='no', n=FREE),
          H('성 이슈트반 대성당', 'Cathedral of St Stephen', '구시가의 바로크 대성당입니다.', 'The Baroque cathedral of the old town.', 'Szent István-székesegyház Székesfehérvár', 20, 30, b='no', n=FREE),
          H('보리 성', 'Bory Castle', '조각가 보리 예뇌가 40년 가까이 직접 지은 성으로, 탑과 회랑에 조각이 가득합니다.', 'The castle sculptor Jenő Bory built himself over nearly 40 years, its towers and arcades full of statues.', 'Bory-vár', 60, 90, group=NEAR),
      ],
      hubs=hubs(["BUD()"], "['Székesfehérvár autóbusz-állomás', '세케슈페헤르바르 버스터미널']", None, "['Székesfehérvár', '세케슈페헤르바르역']"),
      itinerary={'days': [['', 1, 2, 3], ['', 4]]},
      season='봄부터 가을까지 좋고, 8월엔 왕실 축제가 열립니다.|Spring to autumn; a royal festival takes place in August.',
      stay=[('구시가', 'Old town', 'Városház tér Székesfehérvár', FIRST, '광장과 유적이 걸어서 닿습니다.|The square and ruins on foot.')],
      routes=[R('budapest', 'szekesfehervar', 'train', 60, "fa: '부다페스트 남역·동역|Budapest-Déli / Keleti'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='구시가는 걸어서 다니고, 보리 성은 버스로 갑니다.', en='Walk the old town; take a bus to Bory Castle.')),
    C(id='veszprem', group_title=None, after='szekesfehervar', ko='베스프렘', en='Veszprém', native='Veszprém', lat=47.0930, lng=17.9110,
      blurb=['‘왕비의 도시’라 불리는 언덕 위 성채 도시로, 2023년 유럽 문화 수도였습니다. 근처에 헤렌드 도자기 공방이 있습니다.',
             'The “city of queens” on a castle hill, European Capital of Culture in 2023; the Herend porcelain manufactory is nearby.'],
      highlights=[
          H('성채 지구', 'Castle district', '좁은 언덕 위로 바로크 건물과 성당이 이어지고, 끝의 전망대에서 계곡이 보입니다.', 'Baroque buildings and churches along a narrow hill, ending at a lookout over the valley.', 'Veszprémi vár', 60, 90, b='no', n=FREE),
          H('성 미카엘 대성당과 기젤라 예배당', 'St Michael’s Cathedral & Gizella Chapel', '성채 위 대성당과, 13세기 프레스코가 남은 기젤라 예배당입니다.', 'The cathedral on the castle hill and the Gizella Chapel with 13th-century frescoes.', 'Szent Mihály-székesegyház Veszprém', 30, 45),
          H('소방 망루', 'Fire Watchtower', '성문 옆 탑으로, 시내와 바코니 언덕이 내려다보입니다.', 'The tower by the castle gate, overlooking the town and the Bakony hills.', 'Tűztorony Veszprém', 20, 30),
          H('헤렌드 도자기 공방', 'Herend Porcelain Manufactory', '1826년부터 이어 온 도자기 공방으로, 박물관과 작업 시연이 있습니다.', 'The porcelain works founded in 1826, with a museum and live demonstrations.', 'Herend Porcelanium', 90, 120, group=DAY),
      ],
      hubs=hubs(["BUD()"], "['Veszprém autóbusz-állomás', '베스프렘 버스터미널', '부다페스트·발라톤행|to Budapest, Lake Balaton']", None, "['Veszprém', '베스프렘역', '시내까지 버스|bus to the centre']"),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['헤렌드|Herend', 4]]},
      season='봄부터 가을까지 좋습니다.|Best from spring to autumn.',
      stay=[('성채 아래 시내', 'Below the castle', 'Óváros tér Veszprém', FIRST, '성채와 식당이 걸어서 닿습니다.|The castle and restaurants on foot.')],
      routes=[R('budapest', 'veszprem', 'bus', 110), R('veszprem', 'balatonfured', 'bus', 30)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내버스가 역과 시내를 잇습니다.', en='City buses link the station and centre.')),
    C(id='balatonfured', group_title=None, after='veszprem', ko='벌러톤퓌레드', en='Balatonfüred', native='Balatonfüred', lat=46.9578, lng=17.8900,
      blurb=['발라톤 호수 북안의 오래된 온천 요양지로, 호숫가 산책로와 요트 항구, 탄산 광천수 샘이 있습니다.',
             'An old spa resort on the north shore of Lake Balaton, with a lakeside promenade, a yacht harbour and a carbonated spring.'],
      highlights=[
          H('타고르 산책로', 'Tagore Promenade', '플라타너스 아래 호숫가 산책로로, 타고르가 심은 나무가 있습니다.', 'A lakeside promenade under plane trees, with a tree planted by Tagore.', 'Tagore sétány', 45, 60, b='no', n=FREE),
          H('기외지 광장과 코슈트 샘', 'Gyógy Square & Kossuth Spring', '온천 마을 중심 광장으로, 정자 안의 탄산 광천수를 마셔 봅니다.', 'The spa square, where you can taste carbonated mineral water from the pavilion.', 'Kossuth Lajos-forrás Balatonfüred', 20, 30, b='no', n=FREE),
          H('요커이 모르 기념관', 'Jókai Memorial House', '작가 요커이 모르의 여름 별장입니다.', 'The summer villa of the writer Mór Jókai.', 'Jókai Emlékház', 45, 60),
          H('발라톤 유람선', 'Lake Balaton boat trip', '부두에서 티하니 등으로 가는 유람선이 떠납니다.', 'Boats leave the pier for Tihany and around the lake.', 'Balatonfüred hajóállomás', 60, 90),
      ],
      hubs=hubs(["BUD()"], None, "['Balatonfüred hajóállomás', '벌러톤퓌레드 선착장', '티하니·시오포크행 배|boats to Tihany, Siófok']", "['Balatonfüred', '벌러톤퓌레드역']"),
      itinerary={'days': [['', 1, 2, 3, 4]]},
      season='5~9월이 좋고, 7월엔 안나 무도회가 열립니다.|May–September; the Anna Ball takes place in July.',
      stay=[('호숫가', 'Lakefront', 'Tagore sétány', FIRST, '산책로와 부두 옆 호텔들입니다.|Hotels by the promenade and pier.')],
      routes=[R('budapest', 'balatonfured', 'train', 120, "fa: '부다페스트 남역|Budapest-Déli'"), R('balatonfured', 'tihany', 'bus', 15)],
      transit=dict(modes=['walk', 'bus', 'ferry', 'taxi'], ko='호숫가는 걸어서 다니고, 티하니는 버스나 배로 갑니다.', en='Walk the lakefront; bus or boat to Tihany.')),
    C(id='sumeg', group_title=None, after='balatonfured', ko='슈메그', en='Sümeg', native='Sümeg', lat=46.9772, lng=17.2817,
      blurb=['언덕 위 중세 성이 내려다보는 작은 도시로, 여름엔 성에서 마상 대회가 열리고 바로크 프레스코 성당이 있습니다.',
             'A small town below a medieval hilltop castle, with summer knights’ tournaments and a church of Baroque frescoes.'],
      highlights=[
          H('슈메그 성', 'Sümeg Castle', '석회암 언덕 위의 큰 중세 성으로, 성벽에서 들판이 내려다보입니다.', 'A large medieval castle on a limestone hill, with views over the plain.', 'Sümegi vár', 90, 120),
          H('승천 성당', 'Church of the Ascension', '마울베르치의 바로크 프레스코로 벽과 천장이 덮인 성당입니다.', 'A church covered in Baroque frescoes by Maulbertsch.', 'Nagyboldogasszony-templom Sümeg', 20, 30),
          H('주교 궁전', 'Bishop’s Palace', '성 아래의 바로크 궁전입니다.', 'The Baroque palace below the castle.', 'Püspöki palota Sümeg', 30, 45),
      ],
      hubs=hubs(["['Hévíz–Balaton (SOB)', '헤비즈-발라톤 공항 (SOB)']", "BUD()"], "['Sümeg autóbusz-állomás', '슈메그 버스터미널']", None, "['Sümeg', '슈메그역']"),
      itinerary={'days': [['', 1, 3, 2]]},
      season='마상 대회와 성 공연은 여름에 열립니다.|Tournaments and castle shows take place in summer.',
      stay=[('케스트헤이·헤비즈에서 다녀오기', 'Day trip from Keszthely or Hévíz', 'Keszthely', '거점에서 다녀오기|Visit from a base', '케스트헤이에서 버스로 약 40분입니다.|About 40 min by bus from Keszthely.')],
      routes=[R('keszthely', 'sumeg', 'bus', 40)],
      transit=dict(modes=['walk', 'bus'], ko='시내에서 성까지 걸어서 오릅니다.', en='Walk up from the town to the castle.')),
    C(id='esztergom', group_title=None, after='sumeg', ko='에스테르곰', en='Esztergom', native='Esztergom', lat=47.7967, lng=18.7397,
      blurb=['헝가리 최초의 왕도이자 가톨릭 중심지로, 다뉴브강 언덕 위에 헝가리에서 가장 큰 대성당이 서 있습니다. 다리 건너편은 슬로바키아입니다.',
             'Hungary’s first royal seat and Catholic centre, with the country’s largest church on a hill above the Danube; Slovakia lies across the bridge.'],
      highlights=[
          H('에스테르곰 대성당', 'Esztergom Basilica', '헝가리에서 가장 큰 성당으로, 보물관과 돔 전망대에 오릅니다.', 'Hungary’s largest church, with a treasury and a climb to the dome.', 'Esztergomi Bazilika', 60, 90),
          H('성 박물관 (옛 왕궁)', 'Castle Museum', '대성당 옆 중세 왕궁 유적으로, 왕실 예배당이 남아 있습니다.', 'The medieval royal palace beside the basilica, with its royal chapel.', 'Esztergomi Vármúzeum', 60, 90),
          H('기독교 박물관', 'Christian Museum', '중세 제단화를 많이 모은 교회 미술관입니다.', 'A museum of church art strong in medieval altarpieces.', 'Keresztény Múzeum', 60, 90),
          H('마리아 발레리아 다리', 'Mária Valéria Bridge', '슬로바키아 슈투로보로 걸어서 건너는 다뉴브 다리입니다.', 'The Danube bridge you can walk across to Štúrovo in Slovakia.', 'Mária Valéria híd', 30, 45, b='no', n=FREE),
      ],
      hubs=hubs(["BUD()"], "['Esztergom autóbusz-állomás', '에스테르곰 버스터미널', '부다페스트·비셰그라드행|to Budapest, Visegrád']", None, "['Esztergom', '에스테르곰역']"),
      itinerary={'days': [['', 1, 2, 3, 4]]},
      season='봄부터 가을까지 좋습니다.|Best from spring to autumn.',
      stay=[('물의 도시 (비지바로시)', 'Víziváros', 'Víziváros Esztergom', FIRST, '대성당 언덕 아래 강가 동네입니다.|The riverside quarter below the basilica hill.')],
      routes=[R('budapest', 'esztergom', 'train', 75, "fa: '부다페스트 서역|Budapest-Nyugati'"), R('visegrad-hu', 'esztergom', 'bus', 40)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='역에서 시내까지 버스가 다니고, 대성당 언덕은 걸어서 오릅니다.', en='Buses run from the station; walk up the basilica hill.'),
      daytrips=[('budapest', trip('esztergom', '기차로 약 1시간 15분. 대성당 돔에 오르고 다리를 걸어 슬로바키아에 다녀옵니다.|About 1 hr 15 by train: climb the basilica dome and walk the bridge into Slovakia.'))]),
    C(id='koszeg', group_title=None, after='sopron', ko='쾨세그', en='Kőszeg', native='Kőszeg', lat=47.3889, lng=16.5409,
      blurb=['오스트리아 국경의 작은 중세 도시로, 1532년 오스만 대군을 막아 낸 유리시치 성과 보석 같은 구시가가 있습니다.',
             'A small medieval town on the Austrian border, with the Jurisics Castle that held off the Ottoman army in 1532 and a jewel of an old town.'],
      highlights=[
          H('유리시치 성', 'Jurisics Castle', '1532년 오스만 군의 포위를 견딘 성으로, 박물관이 있습니다.', 'The castle that withstood the Ottoman siege of 1532, now a museum.', 'Jurisics-vár', 60, 90),
          H('유리시치 광장', 'Jurisics Square', '색색의 건물과 두 성당이 둘러싼 구시가 광장입니다.', 'The old-town square of colourful houses and two churches.', 'Jurisics tér Kőszeg', 30, 45, b='no', n=FREE),
          H('영웅의 탑', 'Heroes’ Gate Tower', '구시가 입구의 탑으로, 전망대에 오릅니다.', 'The tower at the entrance to the old town, with a lookout.', 'Hősök tornya Kőszeg', 20, 30),
          H('이로트쾨 전망탑', 'Írottkő lookout', '서부 헝가리 최고봉 위 국경의 전망탑으로, 숲길로 오릅니다.', 'The border lookout tower on the highest summit of western Hungary, reached through the forest.', 'Írottkő kilátó', 180, 240, group=DAY, b='no', n=FREE),
      ],
      hubs=hubs(["VIE('오스트리아 빈|Vienna, Austria')", "BUD()"], "['Kőszeg autóbusz-állomás', '쾨세그 버스터미널']", None, "['Kőszeg', '쾨세그역', '솜버트헤이행|to Szombathely']"),
      itinerary={'days': [['', 2, 1, 3]], 'trips': [['이로트쾨|Írottkő', 4]]},
      season='봄부터 가을까지 좋습니다.|Best from spring to autumn.',
      stay=[('구시가', 'Old town', 'Jurisics tér Kőszeg', FIRST, '성과 광장이 걸어서 닿습니다.|The castle and square on foot.')],
      routes=[R('sopron', 'koszeg', 'bus', 75), R('budapest', 'koszeg', 'train', 210, "n: '솜버트헤이 환승|change at Szombathely'")],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 작아 걸어서 다닙니다.', en='The old town is small and walkable.')),
    C(id='heviz', group_title=None, after='keszthely', ko='헤비즈', en='Hévíz', native='Hévíz', lat=46.7903, lng=17.1857,
      blurb=['헤엄칠 수 있는 온천 호수로는 세계에서 손꼽히게 큰 헤비즈 호수의 요양 마을로, 겨울에도 물이 따뜻합니다.',
             'The spa village of Lake Hévíz, one of the world’s largest swimmable thermal lakes, warm even in winter.'],
      highlights=[
          H('헤비즈 온천 호수', 'Lake Hévíz', '수련이 떠 있는 따뜻한 온천 호수로, 물 위 목조 탈의장에서 들어갑니다.', 'A warm thermal lake with water lilies, entered from the bathhouse on stilts.', 'Hévízi-tó', 120, 180),
          H('에그레그 마을과 아르파드 시대 성당', 'Egregy village & Árpád-era church', '포도밭 언덕의 옛 마을로, 13세기 작은 성당과 와인 저장고가 있습니다.', 'An old hillside village of vineyards, with a small 13th-century church and wine cellars.', 'Egregyi Árpád-kori templom', 60, 90, group=NEAR, b='no', n=FREE),
          H('케스트헤이 페슈테티치 궁전', 'Festetics Palace (Keszthely)', '근처 케스트헤이의 바로크 궁전과 도서관입니다.', 'The Baroque palace and library in nearby Keszthely.', 'Festetics-kastély', 90, 120, group=NEAR),
      ],
      hubs=hubs(["['Hévíz–Balaton (SOB)', '헤비즈-발라톤 공항 (SOB)']", "BUD()"], "['Hévíz autóbusz-állomás', '헤비즈 버스터미널', '케스트헤이·부다페스트행|to Keszthely, Budapest']"),
      itinerary={'days': [['', 1], ['', 2, 3]]},
      season='일 년 내내 좋고, 호수 물은 겨울에도 23℃ 안팎입니다.|Good all year; the lake stays around 23°C even in winter.',
      stay=[('호수 주변', 'Around the lake', 'Hévíz', FIRST, '온천 호텔이 많고 호수까지 걸어갑니다.|Spa hotels within walking distance of the lake.')],
      routes=[R('keszthely', 'heviz', 'bus', 15), R('budapest', 'heviz', 'bus', 190)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='작은 마을이라 걸어서 다니고, 케스트헤이까지 버스가 자주 다닙니다.', en='A small town on foot; frequent buses to Keszthely.')),
    C(id='villany', group_title=None, after='pecs', ko='빌라니', en='Villány', native='Villány', lat=45.8689, lng=18.4536,
      blurb=['헝가리 남부의 레드 와인 산지로, 포도밭 언덕 아래 와인 저장고들이 줄지은 거리가 있습니다.',
             'Hungary’s southern red-wine country, with a street of wine cellars below the vineyard hills.'],
      highlights=[
          H('와인 저장고 거리', 'Wine cellar street', '바로시 가보르 거리를 따라 와인 저장고들이 이어져 시음을 합니다.', 'Wine cellars line Baross Gábor Street for tastings.', 'Baross Gábor utca Villány', 120, 180, b='no', n='시음은 저장고마다 유료입니다.|Tastings are paid at each cellar.'),
          H('빌라니 와인 박물관', 'Villány Wine Museum', '옛 저장고에 차린 와인 박물관입니다.', 'A wine museum in an old cellar.', 'Bormúzeum Villány', 30, 45),
          H('시클로시 성', 'Siklós Castle', '근처 시클로시의 중세 성입니다.', 'The medieval castle in nearby Siklós.', 'Siklósi vár', 60, 90, group=NEAR),
          H('하르카니 온천', 'Harkány thermal bath', '근처 하르카니의 온천장입니다.', 'The thermal baths in nearby Harkány.', 'Harkányi Gyógyfürdő', 120, 180, group=NEAR),
      ],
      hubs=hubs(["BUD()"], None, None, "['Villány', '빌라니역', '페치행|to Pécs']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['시클로시와 하르카니|Siklós & Harkány', 3, 4]]},
      season='포도 수확철 9~10월이 좋고, 여름에도 와인 축제가 열립니다.|September–October for the harvest; wine festivals in summer too.',
      stay=[('와인 마을', 'Wine village', 'Villány', FIRST, '와이너리 펜션에서 묵으며 걸어서 저장고를 돕니다.|Stay at a winery guesthouse and walk between cellars.')],
      routes=[R('pecs', 'villany', 'bus', 60)],
      transit=dict(modes=['walk', 'bus', 'train', 'taxi'], ko='마을은 걸어서 다니고, 근교는 버스로 갑니다.', en='Walk the village; buses to nearby towns.')),
    C(id='matra', group_title=None, after='eger', ko='마트러산지', en='Mátra Mountains', native='Mátra / Mátrafüred', lat=47.8326, lng=19.9711,
      blurb=['헝가리 최고봉 케케스테퇴가 있는 숲 산지로, 산책로와 겨울 스키장이 있습니다. 마트러퓌레드를 기준으로 안내합니다.',
             'The forested hills crowned by Kékestető, Hungary’s highest point, with trails and winter skiing; times are from Mátrafüred.'],
      highlights=[
          H('케케스테퇴', 'Kékestető', '해발 1,014m 헝가리 최고봉으로, 방송탑 전망대가 있습니다.', 'At 1,014 m Hungary’s highest point, with a lookout on the TV tower.', 'Kékestető', 120, 180, group=NEAR),
          H('샤슈퇴 호수와 전망탑', 'Sástó lake & lookout', '숲속 작은 호수와 높은 나무 전망탑입니다.', 'A small forest lake and a tall lookout tower.', 'Sástó Mátrafüred', 60, 90, group=NEAR, b='no', n=FREE),
          H('파라드 마차 박물관', 'Parád Carriage Museum', '옛 마구간에 마차들을 전시한 박물관입니다.', 'A museum of carriages in former stables.', 'Kocsimúzeum Parádsasvár', 45, 60, group=DAY),
      ],
      hubs=hubs(["BUD()"], "['Mátrafüred autóbusz-megálló', '마트러퓌레드 버스 정류장', '죈죄시행|to Gyöngyös']"),
      itinerary={'days': [['', 2, 1]], 'trips': [['파라드|Parád', 3]]},
      season='산행은 봄·가을, 스키는 겨울이 좋습니다.|Spring and autumn for hiking, winter for skiing.',
      stay=[('마트러퓌레드', 'Mátrafüred', 'Mátrafüred', FIRST, '숲속 호텔과 산책로 입구가 있습니다.|Forest hotels by the trailheads.')],
      routes=[R('budapest', 'matra', 'bus', 120, "n: '죈죄시 환승|change at Gyöngyös'"), R('eger', 'matra', 'bus', 60)],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='죈죄시에서 산마을로 버스가 다닙니다.', en='Buses run up from Gyöngyös to the mountain villages.')),
    C(id='miskolc', group_title=None, after='holloko', ko='미슈콜츠·릴러퓌레드', en='Miskolc & Lillafüred', native='Miskolc / Lillafüred', lat=48.1035, lng=20.7784,
      blurb=['북동부의 중심 도시 미슈콜츠와, 뷔크산 숲속 호숫가의 궁전 호텔 마을 릴러퓌레드를 함께 둘러봅니다. 동굴 온천이 유명합니다.',
             'The north-eastern city of Miskolc and Lillafüred, a palace-hotel village on a forest lake in the Bükk hills; famous for its cave bath.'],
      highlights=[
          H('미슈콜츠터폴처 동굴 온천', 'Miskolctapolca Cave Bath', '천연 동굴 안에서 온천욕을 하는 온천장입니다.', 'A thermal bath inside natural caves.', 'Barlangfürdő Miskolctapolca', 120, 180),
          H('디오시죄르 성', 'Diósgyőr Castle', '복원한 중세 왕비의 성으로, 탑과 방들을 봅니다.', 'A restored medieval queens’ castle with towers and halls.', 'Diósgyőri vár', 60, 90),
          H('릴러퓌레드 궁전 호텔과 하모리 호수', 'Lillafüred Palace Hotel & Lake Hámori', '숲속 호숫가의 궁전풍 호텔과 정원, 폭포입니다.', 'A palatial hotel with gardens and a waterfall by a forest lake.', 'Lillafüred Palotaszálló', 90, 120, group=NEAR, b='no', n=FREE),
          H('릴러퓌레드 숲 열차', 'Lillafüred forest railway', '좁은 궤도 숲 열차로 계곡을 따라 오릅니다.', 'A narrow-gauge forest railway up the valley.', 'Lillafüredi Állami Erdei Vasút', 60, 90, group=NEAR),
      ],
      hubs=hubs(["BUD()"], "['Miskolc Búza téri autóbusz-állomás', '미슈콜츠 버스터미널']", None, "['Miskolc-Tiszai', '미슈콜츠 티서이역']"),
      itinerary={'days': [['', 2, 1], ['', 3, 4]]},
      season='숲과 호수는 봄·가을이 좋고, 동굴 온천은 일 년 내내 엽니다.|The woods and lake are best in spring and autumn; the cave bath is open all year.',
      stay=[('미슈콜츠 시내', 'Miskolc centre', 'Miskolc', FIRST, '트램이 다녀 온천·성으로 가기 편합니다.|Trams make the bath and castle easy.'),
            ('릴러퓌레드', 'Lillafüred', 'Lillafüred', '숲속 휴양|Forest retreat', '호숫가 궁전 호텔과 펜션이 있습니다.|The palace hotel and guesthouses by the lake.')],
      routes=[R('budapest', 'miskolc', 'train', 120, "fa: '부다페스트 동역|Budapest-Keleti'"), R('tokaj', 'miskolc', 'train', 45)],
      transit=dict(modes=['tram', 'bus', 'walk', 'taxi'], ko='트램과 버스로 다니고, 릴러퓌레드엔 버스·숲 열차가 다닙니다.', en='Trams and buses; buses and the forest railway go to Lillafüred.')),
    C(id='aggtelek', group_title=None, after='miskolc', ko='아그텔레크 동굴', en='Aggtelek Caves', native='Aggtelek / Baradla-barlang', lat=48.4720, lng=20.4950,
      blurb=['슬로바키아 국경에 걸친 석회 동굴 지대로, 유네스코 세계유산입니다. 대표 동굴 바러들러를 가이드 투어로 걷습니다.',
             'A limestone cave region straddling the Slovak border, a UNESCO World Heritage Site; the great Baradla cave is seen on guided tours.'],
      highlights=[
          H('바러들러 동굴 (아그텔레크)', 'Baradla Cave (Aggtelek)', '종유석이 가득한 큰 동굴로, 아그텔레크 입구에서 짧은 투어를 합니다.', 'A vast cave full of formations, with short tours from the Aggtelek entrance.', 'Baradla-barlang Aggtelek', 60, 90),
          H('요슈버퓌 쪽 동굴 투어', 'Jósvafő cave tours', '반대편 요슈버퓌에서 시작하는 동굴 투어입니다.', 'Cave tours starting from the Jósvafő side.', 'Baradla-barlang Jósvafő', 60, 120, group=NEAR),
          H('아그텔레크 국립공원 산책로', 'Aggtelek National Park trails', '석회 대지의 숲과 마을을 잇는 산책로입니다.', 'Trails across the karst through woods and villages.', 'Aggteleki Nemzeti Park', 120, 180, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["BUD()"], "['Aggtelek, barlang', '아그텔레크 동굴 버스 정류장', '미슈콜츠행|to Miskolc']"),
      itinerary={'days': [['', 1, 3]], 'trips': [['요슈버퓌|Jósvafő', 2]]},
      season='동굴 안은 일 년 내내 10℃ 안팎이라 겉옷이 필요합니다.|The cave stays around 10°C all year; bring a jacket.',
      stay=[('미슈콜츠에서 다녀오기', 'Day trip from Miskolc', 'Miskolc', '거점에서 다녀오기|Visit from a base', '버스가 드물어 미슈콜츠에서 다녀오거나 동굴 앞 숙소에 묵습니다.|Buses are infrequent; visit from Miskolc or stay by the cave.')],
      routes=[R('miskolc', 'aggtelek', 'bus', 120)],
      transit=dict(modes=['bus', 'walk'], ko='버스가 하루 몇 번뿐이라 시간을 미리 확인합니다.', en='Only a few buses a day; check times ahead.')),
    C(id='sarospatak', group_title=None, after='tokaj', ko='사로슈퍼터크', en='Sárospatak', native='Sárospatak', lat=48.3189, lng=21.5703,
      blurb=['보드로그강 가의 라코치 성과 오랜 개혁파 대학으로 알려진 토카이 와인 지역의 도시로, 마코베츠의 유기적 건축도 볼 수 있습니다.',
             'A Tokaj-region town on the Bodrog known for the Rákóczi Castle and its old Reformed College, with organic architecture by Makovecz.'],
      highlights=[
          H('라코치 성', 'Rákóczi Castle', '붉은 탑이 선 르네상스 성으로, 라코치 박물관이 있습니다.', 'A Renaissance castle with its Red Tower, housing the Rákóczi Museum.', 'Rákóczi-vár Sárospatak', 90, 120),
          H('개혁파 대학과 대도서관', 'Reformed College & Great Library', '1531년에 세운 학교로, 고전주의 대도서관이 있습니다.', 'A school founded in 1531, with a Neoclassical Great Library.', 'Sárospataki Református Kollégium', 45, 60),
          H('마코베츠 건축', 'Makovecz architecture', '임레 마코베츠가 지은 유기적 건축의 학교 건물입니다.', 'School buildings in the organic style of Imre Makovecz.', 'Árpád Vezér Gimnázium Sárospatak', 20, 30, b='no', n=FREE),
          H('메제르 언덕 호수', 'Megyer Hill quarry lake', '옛 맷돌 채석장에 생긴 맑은 호수로, ‘바다의 눈’이라 불립니다.', 'A clear lake in an old millstone quarry, called the “sea eye”.', 'Megyer-hegyi Tengerszem', 60, 90, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["BUD()"], None, None, "['Sárospatak', '사로슈퍼터크역']"),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['메제르 언덕|Megyer Hill', 4]]},
      season='봄부터 가을까지 좋습니다.|Best from spring to autumn.',
      stay=[('성 주변 시내', 'Town centre', 'Sárospatak', FIRST, '성과 대학이 걸어서 닿습니다.|The castle and college on foot.')],
      routes=[R('tokaj', 'sarospatak', 'train', 40), R('miskolc', 'sarospatak', 'train', 75)],
      transit=dict(modes=['walk', 'bus', 'train'], ko='시내는 걸어서 다닙니다.', en='The town is walkable.')),
    C(id='kecskemet', group_title=None, after='szeged', ko='케치케메트', en='Kecskemét', native='Kecskemét', lat=46.9062, lng=19.6913,
      blurb=['대평원의 도시로, 헝가리식 아르누보 건물과 넓은 광장이 아름답습니다. 근처 부거츠에선 말 쇼를 봅니다.',
             'A Great Plain city of Hungarian Art Nouveau buildings and wide squares; horse shows are held at nearby Bugac.'],
      highlights=[
          H('시청과 코슈트 광장', 'Town Hall & Kossuth Square', '종소리가 울리는 아르누보 시청이 선 중앙 광장입니다.', 'The main square with its Art Nouveau town hall and carillon.', 'Kecskeméti Városháza', 30, 45, b='no', n=FREE),
          H('치프러 궁전', 'Cifrapalota', '색 타일로 꾸민 헝가리 아르누보 건물로, 미술관이 있습니다.', 'A Hungarian Art Nouveau building clad in coloured tiles, now a gallery.', 'Cifrapalota Kecskemét', 30, 45),
          H('헝가리 소박파 미술관', 'Museum of Hungarian Naïve Art', '소박한 그림과 조각을 모은 작은 미술관입니다.', 'A small museum of naïve painting and sculpture.', 'Magyar Naiv Művészek Múzeuma', 30, 45),
          H('부거츠 말 쇼', 'Bugac horse show', '키슈쿤샤그 국립공원의 초원에서 목동들의 말 타기 쇼를 봅니다.', 'Horsemen’s riding shows on the grassland of Kiskunság National Park.', 'Bugaci Karikás Csárda', 180, 240, group=DAY),
      ],
      hubs=hubs(["BUD()"], "['Kecskemét Széchenyivárosi autóbusz-állomás', '케치케메트 버스터미널']", None, "['Kecskemét', '케치케메트역']"),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['부거츠|Bugac', 4]]},
      season='봄부터 가을까지 좋고, 말 쇼는 4~10월에 열립니다.|Spring to autumn; horse shows run April–October.',
      stay=[('중앙 광장 주변', 'Around the main square', 'Kossuth tér Kecskemét', FIRST, '광장과 아르누보 건물이 걸어서 닿습니다.|The squares and Art Nouveau buildings on foot.')],
      routes=[R('budapest', 'kecskemet', 'train', 75, "fa: '부다페스트 서역|Budapest-Nyugati'"), R('szeged', 'kecskemet', 'train', 60)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 부거츠는 차나 투어로 갑니다.', en='Walk the centre; take a car or tour to Bugac.')),
    C(id='kalocsa', group_title=None, after='kecskemet', ko='칼로처', en='Kalocsa', native='Kalocsa', lat=46.5286, lng=18.9856,
      blurb=['파프리카와 화려한 꽃 자수로 알려진 대주교 도시로, 바로크 대성당과 파프리카 박물관이 있습니다.',
             'An archbishop’s town known for paprika and vivid floral embroidery, with a Baroque cathedral and a paprika museum.'],
      highlights=[
          H('칼로처 대성당', 'Kalocsa Cathedral', '두 탑이 선 바로크 대성당입니다.', 'The twin-towered Baroque cathedral.', 'Nagyboldogasszony-főszékesegyház Kalocsa', 20, 30, b='no', n=FREE),
          H('대주교 궁전과 도서관', 'Archbishop’s Palace & Library', '바로크 궁전 안 큰 도서관을 가이드 투어로 봅니다.', 'The Baroque palace, with its great library seen on a guided tour.', 'Érseki Palota Kalocsa', 45, 60),
          H('파프리카 박물관', 'Paprika Museum', '헝가리 파프리카 재배와 가공을 보여 주는 박물관입니다.', 'A museum of growing and processing Hungarian paprika.', 'Paprika Múzeum Kalocsa', 30, 45),
          H('민속 예술의 집', 'Folk Art House', '꽃무늬로 벽을 그린 옛 농가로, 칼로처 자수를 봅니다.', 'An old farmhouse with walls painted in flowers, showing Kalocsa embroidery.', 'Népművészeti Tájház Kalocsa', 30, 45),
      ],
      hubs=hubs(["BUD()"], "['Kalocsa autóbusz-állomás', '칼로처 버스터미널', '부다페스트행|to Budapest']"),
      itinerary={'days': [['', 1, 2, 3, 4]]},
      season='9월 파프리카 수확철에 파프리카 축제가 열립니다.|A paprika festival is held at harvest time in September.',
      stay=[('시내 중심', 'Town centre', 'Kalocsa', FIRST, '대성당과 박물관이 걸어서 닿습니다.|The cathedral and museums on foot.')],
      routes=[R('budapest', 'kalocsa', 'bus', 150)],
      transit=dict(modes=['walk', 'bus'], ko='작은 도시라 걸어서 다닙니다.', en='A small town on foot.')),
    C(id='godollo', group_title=None, after='szentendre', ko='괴될뢰', en='Gödöllő', native='Gödöllő', lat=47.5966, lng=19.3540,
      blurb=['엘리자베트(시시) 황후가 사랑한 바로크 왕궁이 있는 부다페스트 근교 도시입니다.',
             'A town near Budapest with the Baroque royal palace beloved of Empress Elisabeth (Sisi).'],
      highlights=[
          H('괴될뢰 왕궁', 'Royal Palace of Gödöllő', '헝가리 최대의 바로크 궁전 중 하나로, 시시 황후의 방들이 있습니다.', 'One of Hungary’s largest Baroque palaces, with Empress Sisi’s rooms.', 'Gödöllői Királyi Kastély', 90, 120),
          H('왕궁 정원', 'Palace park', '궁전 뒤의 넓은 영국식 정원입니다.', 'The large English-style park behind the palace.', 'Gödöllői Kastélypark', 45, 60, b='no', n=FREE),
          H('마리아베스뇌 순례 성당', 'Máriabesnyő Basilica', '근처 언덕의 바로크 순례 성당입니다.', 'A Baroque pilgrimage church on a nearby hill.', 'Máriabesnyői Bazilika', 30, 45, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["BUD()"], None, None, "['Gödöllő', '괴될뢰역', '부다페스트 동역행·HÉV H8|to Budapest-Keleti; HÉV H8']"),
      itinerary={'days': [['', 1, 2, 3]]},
      season='일 년 내내 방문할 수 있습니다.|Can be visited all year.',
      stay=[('부다페스트에서 다녀오기', 'Day trip from Budapest', 'Budapest', '거점에서 다녀오기|Visit from a base', '부다페스트에서 기차로 약 35분이라 다녀오기 좋습니다.|About 35 min by train from Budapest.')],
      routes=[R('budapest', 'godollo', 'train', 35, "fa: '부다페스트 동역|Budapest-Keleti'")],
      transit=dict(modes=['walk', 'bus', 'train'], ko='역에서 궁전까지 걸어갑니다.', en='Walk from the station to the palace.'),
      daytrips=[('budapest', trip('godollo', '기차로 약 35분. 시시 황후의 방이 있는 바로크 왕궁과 정원을 봅니다.|About 35 min by train: the Baroque palace with Empress Sisi’s rooms and its park.'))]),
    C(id='visegrad-hu', group_title=None, after='godollo', ko='비셰그라드', en='Visegrád', native='Visegrád', lat=47.7920, lng=18.9707,
      blurb=['다뉴브강이 크게 굽이도는 곳의 언덕 마을로, 성채에서 다뉴브 굽이가 한눈에 보이고 마차시 왕의 르네상스 궁전 터가 있습니다.',
             'A hillside village where the Danube bends, with a citadel overlooking the Danube Bend and the remains of King Matthias’s Renaissance palace.'],
      highlights=[
          H('비셰그라드 성채', 'Visegrád Citadel', '산 위 중세 성채로, 다뉴브 굽이가 내려다보입니다.', 'The medieval hilltop citadel overlooking the Danube Bend.', 'Visegrádi Fellegvár', 60, 90),
          H('왕궁 유적', 'Royal Palace ruins', '마차시 왕의 르네상스 궁전을 일부 복원한 유적입니다.', 'The partly reconstructed Renaissance palace of King Matthias.', 'Visegrádi Királyi Palota', 60, 90),
          H('솔로몬 탑', 'Solomon’s Tower', '강가 언덕의 중세 탑입니다.', 'A medieval tower on the riverside slope.', 'Salamon-torony', 30, 45),
          H('너지빌라무 여름 썰매', 'Nagyvillám summer bobsled', '언덕을 미끄러져 내려오는 여름 썰매 코스입니다.', 'A summer toboggan run down the hillside.', 'Visegrádi Bobpálya', 45, 60, group=NEAR),
      ],
      hubs=hubs(["BUD()"], "['Visegrád, Nagymarosi rév', '비셰그라드 버스 정류장', '부다페스트·에스테르곰행|to Budapest, Esztergom']", "['Visegrád hajóállomás', '비셰그라드 선착장', '부다페스트행 배·너지마로시 나룻배|boats to Budapest, ferry to Nagymaros']"),
      itinerary={'days': [['', 2, 3, 1, 4]]},
      season='봄부터 가을까지 좋고, 여름엔 부다페스트에서 배가 다닙니다.|Spring to autumn; boats run from Budapest in summer.',
      stay=[('부다페스트·센텐드레에서 다녀오기', 'Day trip from Budapest or Szentendre', 'Szentendre', '거점에서 다녀오기|Visit from a base', '버스로 센텐드레에서 약 35분입니다.|About 35 min by bus from Szentendre.')],
      routes=[R('szentendre', 'visegrad-hu', 'bus', 35), R('budapest', 'visegrad-hu', 'bus', 75)],
      transit=dict(modes=['bus', 'walk', 'ferry', 'taxi'], ko='강가에서 성채까지 버스가 오르거나 걸어서 오릅니다.', en='A bus climbs to the citadel, or walk up.'),
      daytrips=[('budapest', trip('visegrad-hu', '버스로 약 1시간 15분, 여름엔 배로도 갑니다. 성채에서 다뉴브 굽이를 내려다봅니다.|About 1 hr 15 by bus, or by boat in summer: the Danube Bend from the citadel.'))]),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
