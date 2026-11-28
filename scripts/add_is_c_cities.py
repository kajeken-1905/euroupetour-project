#!/usr/bin/env python3
"""Iceland 2nd pass, new cities (2026-11-28, user picked all 16): Reykjanesbær (Suðurnes); Borgarnes, Grundarfjörður
(Vesturland); Patreksfjörður, Hólmavík (Vestfirðir); Hvammstangi, Sauðárkrókur (Norðurland vestra); Siglufjörður,
Dalvík (Norðurland eystra); Egilsstaðir, Djúpivogur, Borgarfjörður eystri (Austurland); Hveragerði, Flúðir,
Hvolsvöllur, Kirkjubæjarklaustur (Suðurland). Facts from Wikipedia and the sites' own pages. Bus routes from the
Strætó / Vegagerðin rural network pages (1 Jan 2026 and 16 Jun 2026): 50 Reykjavík–Borgarnes, 51 Reykjavík–Selfoss,
52 Reykjavík–Höfn (four days a week), 53 Selfoss–Hvolsvöllur, 55 KEF–Reykjavík via Reykjanesbær, 56 Akureyri–
Egilsstaðir, 58 Borgarnes–Stykkishólmur, 59 Borgarnes–Hólmavík, 72 Selfoss–Flúðir, 78 Akureyri–Siglufjörður,
82 Stykkishólmur–Hellissandur. Flights: Norlandair RKV–Bíldudalur, Ernir RKV–Sauðárkrókur (Isavia). No public bus
was found for Hvammstangi, Djúpivogur or Borgarfjörður eystri, so they get no routes. Minutes are rounded. Groups
rebuilt afterwards into the eight official regions. Run once."""
import json
import add_daytrip_places3 as T

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
NEAR = ('근교', 'Nearby')
FIRST = '처음 가는 여행에 추천|Best for a first visit'
SUMMER = '여름철 위주로 운영합니다.|Mainly in summer.'
F_ROAD = '여름(대략 6월 말~9월)에만 4륜구동 차나 산악 버스로 갈 수 있습니다.|Reachable only in summer (roughly late June–September) by 4x4 or highland bus.'
CAR = '대중교통이 거의 없어 렌터카로 다니는 게 현실적입니다.|There is little public transport; a rental car is the practical way around.'
RC = 'routes-central.ts'
R_AFTER = r"^  r\('reykjavik', 'vestmannaeyjar', 'mixed', 180, .*\),\n"


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
    d = dict(country='is', hubs_file='hubs-central.ts', hubs_before='\n  // —— at ——\n', itin_file='itinerary-north.ts',
             itin_before='  bratislava: {', visit_file='visit-nordic.ts', visit_after=r"^  'reykjavik-h1': v\(.*\),\n",
             stay_before='  reykjavik: [', transit_before='  reykjavik: {', places=None, daytrips=[], apps='',
             group_title=None, after='reykjavik')
    d.update(k)
    return d


def hubs(air, bus=None, port=None):
    s = f"    air: [{', '.join(air)}],\n" if air else ''
    if bus:
        s += f"    bus: [{bus}],\n"
    if port:
        s += f"    port: [{port}],\n"
    return s


def ST(no, stop, to):
    return f"['{stop}', '{stop} 정류장', 'Strætó {no}번 {to[0]}행|Strætó route {no} to {to[1]}']"


def KEF(n):
    return f"KEF('{n}')"


AEY = "['Akureyri (AEY)', '아쿠레이리 공항 (AEY)', '{}']"
EGS = "['Egilsstaðir (EGS)', '에길스타디르 공항 (EGS)', '{}']"
RKV = "['Reykjavík (RKV)', '레이캬비크 공항 (RKV)', '{}']"
WALK_CAR = ['walk', 'taxi']

CITIES = [
    C(id='reykjanesbaer', ko='레이캬네스바이르', en='Reykjanesbær', native='Reykjanesbær', lat=64.0049, lng=-22.5624,
      blurb=['케플라비크 국제공항이 있는 레이캬네스반도의 도시로, 바이킹 배 박물관과 두 대륙판 사이 다리, 지열 지대가 가깝습니다. 도착 날이나 떠나는 날 들르기 좋습니다.',
             'The Reykjanes Peninsula town beside Keflavík Airport, close to a Viking ship museum, the bridge between two tectonic plates and steaming geothermal fields; handy on arrival or departure day.'],
      highlights=[
          H('바이킹 월드', 'Viking World', '바이킹 배를 본떠 만들어 2000년 북아메리카까지 항해한 이슬렌딩귀르호를 건물 안에 걸어 둔 박물관입니다.', 'A museum built around the Íslendingur, a Viking-ship replica that sailed to North America in 2000.', 'Víkingaheimar', 45, 60),
          H('아이슬란드 록 음악 박물관', 'Icelandic Museum of Rock ’n’ Roll', '흘리오마회들 공연장 안에 있는 대중음악 박물관으로, 비요크부터 요즘 밴드까지 다룹니다.', 'A popular-music museum inside the Hljómahöll venue, from Björk to today’s bands.', 'Rokksafn Íslands', 45, 60),
          H('대륙 사이 다리', 'Bridge Between Continents', '유라시아판과 북아메리카판이 벌어지는 틈 위에 놓인 작은 보행 다리입니다.', 'A small footbridge over the rift where the Eurasian and North American plates pull apart.', 'Bridge Between Continents', 20, 30, group=NEAR, b='no', n=FREE),
          H('군뉘크베르 지열 지대', 'Gunnuhver', '김이 뿜어 나오는 진흙 온천 지대로, 전설 속 유령 군나의 이름을 땄습니다. 나무 길로 둘러봅니다.', 'A steaming field of mud pools named after the ghost Gunna of local legend, seen from boardwalks.', 'Gunnuhver', 20, 30, group=NEAR, b='no', n=FREE),
          H('레이캬네스 등대', 'Reykjanesviti', '반도 끝 언덕 위의 등대로, 바다 절벽과 엘데이 바위섬이 보입니다.', 'The lighthouse on a hill at the tip of the peninsula, looking over sea cliffs to the Eldey rock.', 'Reykjanesviti', 20, 30, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs([KEF('차로 약 10분|About 10 min by car')], ST(55, 'Reykjanesbær', ('레이캬비크', 'Reykjavík'))),
      itinerary={'days': [['', 1, 2]], 'trips': [['레이캬네스반도|Reykjanes Peninsula', 3, 5, 4]]},
      season='6~8월이 밝고 다니기 좋습니다. 겨울엔 공항 근처 하룻밤 숙소로도 씁니다.|June–August for long days; in winter it also works as an airport overnight.',
      stay=[('케플라비크 시내', 'Keflavík centre', 'Keflavík', FIRST, '공항이 가깝고 항구와 식당이 걸어서 닿습니다.|Close to the airport, with the harbour and restaurants on foot.')],
      routes=[R('reykjavik', 'reykjanesbaer', 'bus', 60, "n: 'Strætó 55번|Strætó route 55'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내와 공항은 버스로, 반도 끝 명소는 렌터카나 투어로 갑니다.', en='Buses link the town and airport; reach the peninsula sights by rental car or tour.')),
    C(id='borgarnes', ko='보르가르네스', en='Borgarnes', native='Borgarnes', lat=64.5383, lng=-21.9206,
      blurb=['레이캬비크에서 북쪽으로 1시간 남짓, 피오르 곶 위의 작은 도시로 에길의 사가 무대입니다. 서부의 온천과 용암 폭포로 가는 길목입니다.',
             'A small town on a fjord headland an hour or so north of Reykjavík and the setting of Egil’s Saga; the gateway to the west’s hot springs and lava falls.'],
      highlights=[
          H('정착 센터', 'Settlement Centre', '아이슬란드 정착 이야기와 에길의 사가를 오디오 가이드로 들려 주는 전시관입니다.', 'Exhibitions with audio guides on the settlement of Iceland and Egil’s Saga.', 'Landnámssetur Íslands', 60, 90),
          H('데일다르퉁구크베르', 'Deildartunguhver', '물이 가장 많이 솟는 온천 중 하나로 꼽히며, 뜨거운 물을 주변 마을 난방에 씁니다.', 'Counted among Europe’s highest-flow hot springs; its water heats nearby towns.', 'Deildartunguhver', 20, 30, group=NEAR, b='no', n=FREE),
          H('크라우마 온천', 'Krauma', '데일다르퉁구크베르 온천수에 빙하 물을 섞어 쓰는 노천 온천입니다.', 'Open-air baths using Deildartunguhver’s water cooled with glacial water.', 'Krauma', 90, 120, group=NEAR),
          H('흐라운포사르와 바르나포스', 'Hraunfossar & Barnafoss', '용암 지대 아래로 스며 나온 물이 강으로 쏟아지는 폭포와, 바로 위의 거센 바르나포스입니다.', 'Water seeping out from under a lava field into the river, with the churning Barnafoss just upstream.', 'Hraunfossar', 30, 45, group=NEAR, b='no', n=FREE),
          H('레이크홀트', 'Reykholt', '중세 작가 스노리 스튀르들뤼손이 살던 곳으로, 그의 온천 웅덩이와 전시관 스노라스토파가 있습니다.', 'Home of the medieval writer Snorri Sturluson, with his bathing pool and the Snorrastofa exhibition.', 'Snorrastofa', 45, 60, group=NEAR),
      ],
      hubs=hubs([KEF('차로 약 1시간 30분|About 1 hr 30 min by car')], ST(50, 'Borgarnes', ('레이캬비크', 'Reykjavík'))),
      itinerary={'days': [['', 1]], 'trips': [['온천과 용암 폭포|Hot springs & lava falls', 2, 5, 4, 3]]},
      season='6~8월이 좋고, 겨울엔 온천과 오로라를 묶어 다녀옵니다.|June–August; in winter pair the baths with an aurora drive.',
      stay=[('보르가르네스 시내', 'Borgarnes town', 'Borgarnes', FIRST, '정착 센터와 버스 정류장이 가깝습니다.|Near the Settlement Centre and bus stop.'),
            ('레이캬비크에서 당일치기', 'Day trip from Reykjavík', 'Reykjavík', '당일치기|As a day trip', '차로 1시간 남짓이라 근교 명소와 함께 다녀오기 좋습니다.|An hour or so by car, easy to combine with the nearby sights.')],
      routes=[R('reykjavik', 'borgarnes', 'bus', 75, "n: 'Strætó 50번|Strætó route 50'"), R('borgarnes', 'stykkisholmur', 'bus', 75, "n: 'Strætó 58번|Strætó route 58'")],
      transit=dict(modes=WALK_CAR, ko='마을은 걸어서, 온천과 폭포는 렌터카로 갑니다.', en='Walk the town; drive to the hot springs and waterfalls.')),
    C(id='grundarfjordur', ko='그륀다르피외르뒤르', en='Grundarfjörður', native='Grundarfjörður', lat=64.9243, lng=-23.2600,
      blurb=['스나이펠스네스반도 북쪽 해안의 어촌으로, 마을 바로 옆에 뾰족한 키르큐펠산이 서 있습니다. 반도 끝 국립공원과 해안 마을로 가기 좋은 거점입니다.',
             'A fishing village on the north coast of the Snæfellsnes peninsula with the pointed Kirkjufell right beside it; a good base for the national park and coastal hamlets at the peninsula’s tip.'],
      highlights=[
          H('키르큐펠', 'Kirkjufell', '마을 서쪽에 솟은 원뿔 모양의 산으로, 아이슬란드에서 가장 많이 찍히는 산 중 하나입니다.', 'The cone-shaped mountain just west of the village, one of the most photographed in Iceland.', 'Kirkjufell', 20, 30, b='no', n=FREE),
          H('키르큐펠스포스', 'Kirkjufellsfoss', '키르큐펠을 배경으로 떨어지는 작은 폭포로, 다리와 산책길이 있습니다.', 'A small waterfall with Kirkjufell as its backdrop, with a footbridge and paths.', 'Kirkjufellsfoss', 20, 30, b='no', n=FREE),
          H('아르나르스타피와 헤들나르', 'Arnarstapi & Hellnar', '두 해안 마을을 잇는 절벽 산책길로, 현무암 아치와 바다새가 많습니다.', 'A cliff path between two coastal hamlets, with basalt arches and seabirds.', 'Arnarstapi', 90, 120, group=DAY, b='no', n=FREE),
          H('듀팔론산뒤르', 'Djúpalónssandur', '국립공원 안의 검은 자갈 해변으로, 1948년 난파한 트롤선의 쇳조각이 흩어져 있습니다.', 'A black-pebble beach in the national park, scattered with iron from a trawler wrecked in 1948.', 'Djúpalónssandur', 45, 60, group=DAY, b='no', n=FREE),
      ],
      hubs=hubs([KEF('차로 약 2시간 40분|About 2 hr 40 min by car')], ST(82, 'Grundarfjörður', ('스티키스홀뮈르', 'Stykkishólmur'))),
      itinerary={'days': [['', 1, 2]], 'trips': [['반도 끝 해안|Peninsula tip', 3, 4]]},
      season='6~8월이 좋고, 겨울엔 키르큐펠 위 오로라를 노리는 사람이 많습니다.|June–August; in winter many come for the aurora over Kirkjufell.',
      stay=[('그륀다르피외르뒤르 마을', 'Grundarfjörður village', 'Grundarfjörður', FIRST, '키르큐펠이 걸어서 닿는 작은 마을입니다.|A small village with Kirkjufell on foot.')],
      routes=[R('stykkisholmur', 'grundarfjordur', 'bus', 40, "n: 'Strætó 82번|Strætó route 82'")],
      transit=dict(modes=WALK_CAR, ko='마을과 키르큐펠은 걸어서, 반도 끝은 렌터카로 돕니다.', en='Walk to Kirkjufell; drive around the peninsula tip.')),
    C(id='patreksfjordur', ko='파트렉스피외르뒤르', en='Patreksfjörður', native='Patreksfjörður', lat=65.5960, lng=-23.9910,
      blurb=['웨스트피오르 남쪽의 가장 큰 마을로, 유럽 서쪽 끝 라트라비아르그 새 절벽과 붉은 모래 해변 라우다산뒤르로 가는 거점입니다.',
             'The largest village in the southern Westfjords and the base for the Látrabjarg bird cliffs at Europe’s western edge and the red-sand beach of Rauðasandur.'],
      highlights=[
          H('라트라비아르그', 'Látrabjarg', '길이 14km에 이르는 바다 절벽으로, 여름엔 퍼핀이 가까이 둥지를 틉니다. 끝의 비아르그탕가르는 유럽 서쪽 끝으로 꼽힙니다.', 'Sea cliffs some 14 km long where puffins nest close by in summer; Bjargtangar at the end is counted as Europe’s westernmost point.', 'Látrabjarg', 90, 150, group=DAY, b='no', n='무료이며, 퍼핀은 대략 5~8월에 봅니다.|Free; puffins roughly May–August.'),
          H('라우다산뒤르', 'Rauðasandur', '붉은빛과 금빛이 도는 넓은 모래 해변으로, 자갈길 고개를 넘어 내려갑니다.', 'A wide beach of reddish-golden sand, reached down a gravel mountain road.', 'Rauðasandur', 60, 90, group=DAY, b='no', n=FREE),
          H('가르다르 BA 64 난파선', 'Garðar BA 64', '1912년 노르웨이에서 만든 철선으로, 1981년 피오르 해변에 끌어올려 그대로 남겼습니다.', 'A steel ship built in Norway in 1912 and beached on the fjord shore in 1981, where it still lies.', 'Garðar BA 64', 15, 20, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["['Bíldudalur (BIU)', '빌뒤달뤼르 공항 (BIU)', '레이캬비크에서 노를란드에어로 약 35분, 마을까지 차로 약 30분|About 35 min from Reykjavík on Norlandair; about 30 min by car to town']"],
                port="['Brjánslækur', '브랸슬래퀴르 항구', '스티키스홀뮈르행 발뒤르 페리, 차로 약 1시간|Baldur ferry to Stykkishólmur; about 1 hr by car']"),
      itinerary={'days': [['', 3]], 'trips': [['라트라비아르그|Látrabjarg', 1], ['라우다산뒤르|Rauðasandur', 2]]},
      season='6~8월이 퍼핀과 산길 운전 모두 좋습니다. 겨울엔 길이 자주 막힙니다.|June–August for puffins and mountain roads; roads often close in winter.',
      stay=[('파트렉스피외르뒤르 마을', 'Patreksfjörður village', 'Patreksfjörður', FIRST, '상점과 수영장이 있는 이 지역 중심 마을입니다.|The area’s main village, with shops and a pool.')],
      routes=[R('reykjavik', 'patreksfjordur', 'flight', 35, "fa: '빌뒤달뤼르 공항|Bíldudalur Airport'")],
      transit=dict(modes=WALK_CAR, ko=CAR.split('|')[0], en=CAR.split('|')[1])),
    C(id='holmavik', ko='홀마비크', en='Hólmavík', native='Hólmavík', lat=65.7065, lng=-21.6773,
      blurb=['웨스트피오르 동쪽 스트란디르 해안의 작은 마을로, 17세기 마녀 재판 이야기를 다룬 마법 박물관이 있습니다. 북쪽 해안 길은 외딴 청어 공장 마을로 이어집니다.',
             'A small village on the Strandir coast of the eastern Westfjords, home to a museum on 17th-century sorcery trials; the coast road north leads to remote herring-factory hamlets.'],
      highlights=[
          H('아이슬란드 마법·마녀 박물관', 'Museum of Icelandic Sorcery & Witchcraft', '17세기 아이슬란드 마녀 재판과 주문서, 부적을 보여 주는 박물관입니다.', 'A museum on Iceland’s 17th-century sorcery trials, spell books and charms.', 'Galdrasýning á Ströndum', 45, 60),
          H('드랑스네스 해안 온천', 'Drangsnes hot tubs', '바닷가 길가에 놓인 작은 온천 욕조 세 개로, 누구나 들어갈 수 있습니다.', 'Three small hot tubs by the shore road, open to everyone.', 'Drangsnes hot pots', 30, 45, group=NEAR, b='no', n='무료이며 기부함이 있습니다.|Free, with a donation box.'),
          H('듀파비크', 'Djúpavík', '버려진 청어 공장이 남은 외딴 피오르 마을로, 여름엔 공장 투어와 전시가 열립니다.', 'A remote fjord hamlet with an abandoned herring factory, opened for tours and exhibitions in summer.', 'Djúpavík', 90, 120, group=DAY, b='no', n=SUMMER),
      ],
      hubs=hubs([KEF('차로 약 3시간 30분|About 3 hr 30 min by car')], ST(59, 'Hólmavík', ('보르가르네스', 'Borgarnes'))),
      itinerary={'days': [['', 1]], 'trips': [['드랑스네스|Drangsnes', 2], ['듀파비크|Djúpavík', 3]]},
      season='6~8월이 좋고, 듀파비크 길은 겨울에 막힐 때가 많습니다.|June–August; the Djúpavík road is often closed in winter.',
      stay=[('홀마비크 마을', 'Hólmavík village', 'Hólmavík', FIRST, '박물관과 항구, 버스 정류장이 걸어서 닿습니다.|The museum, harbour and bus stop on foot.')],
      routes=[R('reykjavik', 'holmavik', 'mixed', 240, "n: '보르가르네스에서 59번으로 환승|change to route 59 at Borgarnes'")],
      transit=dict(modes=WALK_CAR, ko='마을은 걸어서, 해안 마을은 렌터카로 갑니다.', en='Walk the village; drive to the coastal hamlets.')),
    C(id='hvammstangi', ko='크밤스타웅기', en='Hvammstangi', native='Hvammstangi', lat=65.3958, lng=-20.9453,
      blurb=['바트스네스반도 입구의 작은 항구 마을로, 물범 센터가 있습니다. 반도를 한 바퀴 돌면 물범 서식지와 코뿔소처럼 생긴 바위 크비트세르퀴르를 봅니다.',
             'A small harbour village at the start of the Vatnsnes peninsula, home to the Seal Center; a loop of the peninsula passes seal colonies and the rhino-shaped rock Hvítserkur.'],
      highlights=[
          H('아이슬란드 물범 센터', 'Icelandic Seal Center', '물범의 생태와 사람과의 관계를 보여 주는 전시관으로, 반도의 물범 관찰 장소도 알려 줍니다.', 'An exhibition on seals and their history with people, which also points you to the peninsula’s seal-watching spots.', 'Selasetur Íslands', 45, 60),
          H('크비트세르퀴르', 'Hvítserkur', '바다에 선 높이 약 15m의 현무암 바위로, 물을 마시는 짐승처럼 보입니다.', 'A basalt sea stack about 15 m high that looks like a beast drinking from the sea.', 'Hvítserkur', 30, 45, group=NEAR, b='no', n=FREE),
          H('보르가르비르키', 'Borgarvirki', '화산 암석 언덕 위의 옛 요새 터로, 꼭대기에서 주변 평야가 내려다보입니다.', 'An old fortification on a volcanic rock outcrop, with views over the plains from the top.', 'Borgarvirki', 30, 45, group=NEAR, b='no', n=FREE),
          H('콜루글리우푸르 협곡', 'Kolugljúfur', '좁은 협곡 사이로 폭포가 여러 단으로 떨어지는 곳으로, 전설 속 여자 거인의 이름을 땄습니다.', 'A narrow canyon with tiered waterfalls, named after a troll woman of legend.', 'Kolugljúfur', 20, 30, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs([RKV.format('차로 약 2시간 30분|About 2 hr 30 min by car')]),
      itinerary={'days': [['', 1]], 'trips': [['바트스네스반도|Vatnsnes peninsula', 2, 3], ['콜루글리우푸르|Kolugljúfur', 4]]},
      season='6~8월이 물범을 보기 좋습니다. 반도 길은 자갈길이라 겨울엔 조심해야 합니다.|June–August is best for seals; the peninsula road is gravel, so take care in winter.',
      stay=[('크밤스타웅기 마을', 'Hvammstangi village', 'Hvammstangi', FIRST, '물범 센터와 항구가 걸어서 닿습니다.|The Seal Center and harbour on foot.')],
      routes=[],
      transit=dict(modes=WALK_CAR, ko=CAR.split('|')[0], en=CAR.split('|')[1])),
    C(id='saudarkrokur', ko='사우다르크로퀴르', en='Sauðárkrókur', native='Sauðárkrókur', lat=65.7461, lng=-19.6394,
      blurb=['말 목장으로 이름난 스카가피외르뒤르의 중심 도시입니다. 근교에 잔디 지붕 농가 박물관과 19세기 잔디 교회가 남아 있습니다.',
             'The main town of Skagafjörður, a region known for its horse farms; nearby stand a turf-farm museum and a 19th-century turf church.'],
      highlights=[
          H('1238: 아이슬란드 전투', '1238: The Battle of Iceland', '13세기 아이슬란드 내전을 가상현실과 전시로 보여 주는 체험관입니다.', 'An exhibition with virtual reality on Iceland’s 13th-century civil war.', '1238 The Battle of Iceland', 60, 90),
          H('글라움바이르 잔디 농가', 'Glaumbær', '잔디 지붕 건물들이 이어진 옛 농가로, 스카가피외르뒤르 민속 박물관이 쓰고 있습니다.', 'A row of turf-roofed farm buildings run as the Skagafjörður Heritage Museum.', 'Glaumbær', 45, 60, group=NEAR),
          H('비디미리 잔디 교회', 'Víðimýrarkirkja', '1834년에 지은 잔디 교회로, 아이슬란드에 몇 남지 않은 옛 잔디 교회 중 하나입니다.', 'A turf church built in 1834, one of the few old turf churches left in Iceland.', 'Víðimýrarkirkja', 15, 20, group=NEAR, n=SUMMER),
          H('호프소스 수영장', 'Hofsós swimming pool', '피오르와 드랑게이섬을 바라보는 바닷가 노천 수영장입니다.', 'An open-air pool on the shore looking out over the fjord to Drangey island.', 'Sundlaugin á Hofsósi', 60, 90, group=NEAR),
      ],
      hubs=hubs(["['Sauðárkrókur (SAK)', '사우다르크로퀴르 공항 (SAK)', '레이캬비크행 에르니르, 주 3회|Ernir to Reykjavík, three times a week']"]),
      itinerary={'days': [['', 1]], 'trips': [['잔디 농가와 교회|Turf farm & church', 2, 3], ['호프소스|Hofsós', 4]]},
      season='6~8월이 좋고, 9월엔 말과 양을 몰아 내리는 행사가 열립니다.|June–August; September brings the horse and sheep round-ups.',
      stay=[('사우다르크로퀴르 시내', 'Sauðárkrókur town', 'Sauðárkrókur', FIRST, '전시관과 식당, 상점이 모여 있습니다.|Exhibitions, restaurants and shops close together.')],
      routes=[R('reykjavik', 'saudarkrokur', 'flight', 45, "n: '주 3회|three times a week'")],
      transit=dict(modes=WALK_CAR, ko='시내는 걸어서, 근교 농가와 수영장은 렌터카로 갑니다.', en='Walk the town; drive to the farms and pool nearby.')),
    C(id='siglufjordur', ko='시글뤼피외르뒤르', en='Siglufjörður', native='Siglufjörður', lat=66.1500, lng=-18.9100,
      blurb=['20세기 중반 청어잡이로 크게 번성했던 아이슬란드 최북단의 피오르 마을입니다. 터널이 뚫려 아쿠레이리에서 버스로 갈 수 있습니다.',
             'A fjord town in Iceland’s far north that boomed on herring fishing in the mid-20th century; tunnels now link it to Akureyri by bus.'],
      highlights=[
          H('청어 시대 박물관', 'Herring Era Museum', '옛 청어 가공 공장과 선창 건물 세 채를 쓰는 박물관으로, 2004년 유럽 산업 박물관상(미켈레티상)을 받았습니다.', 'A museum in three old herring-salting and factory buildings, winner of the 2004 Micheletti Award for European industrial museums.', 'Síldarminjasafn Íslands', 60, 90),
          H('시글뤼피외르뒤르 항구', 'Siglufjörður harbour', '알록달록한 집과 어선이 늘어선 항구로, 산이 피오르를 둘러싸고 있습니다.', 'A harbour lined with colourful houses and fishing boats, ringed by mountains.', 'Siglufjörður harbour', 30, 45, b='no', n=FREE),
          H('아이슬란드 민속 음악 센터', 'Folk Music Centre', '옛 민요와 악기를 들어 볼 수 있는 작은 전시관입니다.', 'A small centre where you can hear old folk songs and instruments.', 'Þjóðlagasetur Siglufirði', 30, 45, n=SUMMER),
      ],
      hubs=hubs([AEY.format('버스로 약 1시간 20분|About 1 hr 20 min by bus')], ST(78, 'Siglufjörður', ('아쿠레이리', 'Akureyri'))),
      itinerary={'days': [['', 1, 2, 3]]},
      season='6~8월이 좋고, 겨울엔 스키장과 오로라를 봅니다.|June–August; in winter, skiing and the aurora.',
      stay=[('항구 주변', 'Harbour area', 'Siglufjörður', FIRST, '박물관과 식당이 걸어서 닿습니다.|The museum and restaurants on foot.'),
            ('아쿠레이리에서 당일치기', 'Day trip from Akureyri', 'Akureyri', '당일치기|As a day trip', '78번 버스로 다녀올 수 있습니다.|Easy on bus route 78.')],
      routes=[R('akureyri', 'siglufjordur', 'bus', 80, "n: 'Strætó 78번, 달비크 경유|Strætó route 78 via Dalvík'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다 돕니다.', en='The whole town is walkable.')),
    C(id='dalvik', ko='달비크', en='Dalvík', native='Dalvík', lat=65.9702, lng=-18.5286,
      blurb=['에위아피외르뒤르 서쪽 해안의 어촌으로, 북극권이 지나는 그림세이섬행 페리가 이곳에서 떠납니다. 근처엔 맥주 온천과 고래 관찰 배도 있습니다.',
             'A fishing town on the west shore of Eyjafjörður, where the ferry leaves for Grímsey on the Arctic Circle; a beer spa and whale-watching boats are nearby.'],
      highlights=[
          H('그림세이섬', 'Grímsey', '북극권이 가로지르는 섬으로, 표지 조형물과 퍼핀 절벽이 있습니다. 페리로 약 3시간입니다.', 'An island crossed by the Arctic Circle, with a marker sculpture and puffin cliffs; about 3 hours by ferry.', 'Grímsey', 240, 360, group=DAY, b='no', n='페리 운항 일정은 미리 확인하세요.|Check the ferry timetable in advance.'),
          H('달비크 고래 관찰', 'Whale watching from Dalvík', '피오르 안쪽으로 혹등고래가 자주 들어오는 바다에서 배를 탑니다.', 'Boat trips into a fjord humpback whales often visit.', 'Whale watching Dalvík', 180, 210),
          H('비오르뵈딘 맥주 온천', 'Bjórböðin Beer Spa', '맥주 효모와 홉을 넣은 나무 욕조에 몸을 담그는 곳입니다.', 'Soak in wooden tubs filled with beer yeast and hops.', 'Bjórböðin', 60, 90, group=NEAR),
      ],
      hubs=hubs([AEY.format('버스로 약 40분|About 40 min by bus')], ST(78, 'Dalvík', ('아쿠레이리', 'Akureyri')),
                port="['Dalvík', '달비크 항구', '그림세이행 사이파리 페리|Sæfari ferry to Grímsey']"),
      itinerary={'days': [['', 2, 3]], 'trips': [['그림세이섬|Grímsey', 1]]},
      season='6~8월이 고래와 그림세이 퍼핀 시즌입니다.|June–August for whales and Grímsey’s puffins.',
      stay=[('달비크 마을', 'Dalvík village', 'Dalvík', FIRST, '항구와 버스 정류장이 걸어서 닿습니다.|The harbour and bus stop on foot.'),
            ('아쿠레이리에서 당일치기', 'Day trip from Akureyri', 'Akureyri', '당일치기|As a day trip', '버스로 40분 남짓입니다.|About 40 min by bus.')],
      routes=[R('akureyri', 'dalvik', 'bus', 40, "n: 'Strætó 78번|Strætó route 78'")],
      transit=dict(modes=['walk', 'bus', 'taxi', 'ferry'], ko='마을은 걸어서, 그림세이는 페리로 갑니다.', en='Walk the village; take the ferry to Grímsey.')),
    C(id='egilsstadir', ko='에길스타디르', en='Egilsstaðir', native='Egilsstaðir', lat=65.2669, lng=-14.3948,
      blurb=['동부 아이슬란드의 교통 중심 도시로, 긴 호수 라가르플리오트 옆에 있습니다. 호수에 띄운 온천과 숲, 현무암 협곡으로 가기 좋습니다.',
             'East Iceland’s transport hub beside the long lake Lagarfljót, close to floating hot pools, forests and a basalt-column canyon.'],
      highlights=[
          H('뵈크 온천', 'Vök Baths', '2019년 문을 연 온천으로, 우리다바튼 호수 위에 욕조가 떠 있습니다.', 'Baths opened in 2019, with pools floating on Lake Urriðavatn.', 'Vök Baths', 90, 120),
          H('라가르플리오트 호수', 'Lagarfljót', '긴 빙하 호수로, 호수 괴물 전설이 전해집니다.', 'A long glacial lake with a legend of a lake monster.', 'Lagarfljót', 30, 60, b='no', n=FREE),
          H('하들로름스스타다르 숲', 'Hallormsstaðaskógur', '아이슬란드에서 손꼽히게 큰 숲으로, 호숫가에 산책로와 수목원이 있습니다.', 'One of Iceland’s largest forests, with lakeside trails and an arboretum.', 'Hallormsstaðaskógur', 60, 120, group=NEAR, b='no', n=FREE),
          H('스크리뒤클라우스튀르', 'Skriðuklaustur', '작가 귄나르 귄나르손의 집과 중세 수도원 터가 있는 문화 센터입니다.', 'A cultural centre in writer Gunnar Gunnarsson’s house, beside medieval monastery ruins.', 'Skriðuklaustur', 45, 60, group=NEAR),
          H('스튀들라길 협곡', 'Stuðlagil', '현무암 기둥 절벽 사이로 청록색 강이 흐르는 협곡입니다.', 'A canyon where a blue-green river runs between basalt-column walls.', 'Stuðlagil', 120, 180, group=DAY, b='no', n=FREE),
      ],
      hubs=hubs([EGS.format('레이캬비크행 국내선|domestic flights to Reykjavík')], ST(56, 'Egilsstaðir', ('아쿠레이리', 'Akureyri'))),
      itinerary={'days': [['', 2, 1]], 'trips': [['숲과 수도원|Forest & monastery', 3, 4], ['스튀들라길|Stuðlagil', 5]]},
      season='6~8월이 좋고, 동부는 섬 안에서 여름이 비교적 따뜻한 편입니다.|June–August; summers in the east are relatively warm by Icelandic standards.',
      stay=[('에길스타디르 시내', 'Egilsstaðir town', 'Egilsstaðir', FIRST, '공항과 버스, 상점이 가까운 동부의 거점입니다.|The eastern base, close to the airport, buses and shops.')],
      routes=[R('reykjavik', 'egilsstadir', 'flight', 60), R('akureyri', 'egilsstadir', 'bus', 240, "n: 'Strætó 56번|Strætó route 56'")],
      transit=dict(modes=WALK_CAR, ko='시내는 걸어서, 숲과 협곡은 렌터카로 갑니다.', en='Walk the town; drive to the forest and canyon.')),
    C(id='djupivogur', ko='디우피보귀르', en='Djúpivogur', native='Djúpivogur', lat=64.6567, lng=-14.2830,
      blurb=['동부 피오르의 작은 항구 마을로, 피라미드 모양의 뷜란스틴뒤르산 아래에 있습니다. 항구 길에 새알 조각 34개가 줄지어 있습니다.',
             'A small Eastfjords harbour village beneath the pyramid-shaped Búlandstindur, with 34 egg sculptures lining the harbour road.'],
      highlights=[
          H('글레디비크의 알', 'Eggin í Gleðivík', '이 지역에 사는 새 34종의 알을 화강암으로 깎아 늘어놓은 작품입니다.', 'Granite eggs of the 34 bird species that nest in the area, set out along the shore.', 'Eggin í Gleðivík', 20, 30, b='no', n=FREE),
          H('랑가뷔드', 'Langabúð', '18세기 말 상인 건물을 고친 곳으로, 작은 전시와 카페가 있습니다.', 'A late-18th-century merchant house with small exhibitions and a café.', 'Langabúð Djúpivogur', 30, 45),
          H('뷜란스틴뒤르', 'Búlandstindur', '해발 1,069m의 피라미드 모양 산으로, 마을과 피오르 어디서나 보입니다.', 'A 1,069 m pyramid-shaped mountain visible from all over the village and fjord.', 'Búlandstindur', 20, 30, b='no', n=FREE),
      ],
      hubs=hubs([EGS.format('차로 약 1시간 30분|About 1 hr 30 min by car')]),
      itinerary={'days': [['', 1, 2, 3]]},
      season='6~8월이 좋습니다. 겨울엔 산길이 막혀 해안 길로 돌아가야 합니다.|June–August; in winter the mountain road closes and you go round by the coast.',
      stay=[('디우피보귀르 마을', 'Djúpivogur village', 'Djúpivogur', FIRST, '항구 주변에 숙소와 식당이 모여 있습니다.|Lodging and restaurants cluster round the harbour.')],
      routes=[],
      transit=dict(modes=['walk'], ko='마을은 걸어서 다니고, 오가는 건 렌터카로 합니다.', en='Walk the village; arrive and leave by rental car.')),
    C(id='borgarfjordur', ko='보르가르피외르뒤르 에이스트리', en='Borgarfjörður eystri', native='Borgarfjörður eystri', lat=65.5263, lng=-13.8116,
      blurb=['동부 끝 막다른 길의 작은 마을로, 항구 옆 바위섬에서 퍼핀을 아주 가까이 볼 수 있습니다. 요정 전설과 산행 길로도 알려져 있습니다.',
             'A tiny village at the end of the road in the far east, where puffins can be seen up close on a rock islet by the harbour; also known for elf legends and hiking trails.'],
      highlights=[
          H('하프나르홀미 퍼핀 전망대', 'Hafnarhólmi', '항구 옆 바위섬에 계단과 전망대를 놓아 둥지 튼 퍼핀을 가까이 봅니다.', 'Steps and platforms on a harbour islet let you see nesting puffins up close.', 'Hafnarhólmi', 45, 60, b='no', n='무료이며, 퍼핀은 대략 4월 말~8월 초에 봅니다.|Free; puffins roughly late April to early August.'),
          H('알파보르그', 'Álfaborg', '요정 여왕이 산다는 전설의 바위 언덕으로, 꼭대기 전망판에서 마을이 내려다보입니다.', 'A rocky hill said to be home to the elf queen, with a viewpoint over the village.', 'Álfaborg', 20, 30, b='no', n=FREE),
          H('스토뤼르드', 'Stórurð', '산속 큰 바위들 사이에 청록색 연못이 고인 곳으로, 반나절 산행으로 다녀옵니다.', 'Giant boulders and blue-green ponds in the mountains, reached on a half-day hike.', 'Stórurð', 300, 360, group=DAY, b='no', n=FREE),
      ],
      hubs=hubs([EGS.format('차로 약 1시간|About 1 hr by car')]),
      itinerary={'days': [['', 1, 2]], 'trips': [['스토뤼르드|Stórurð', 3]]},
      season='5~8월이 퍼핀 시즌이고, 산행은 7~8월이 좋습니다.|May–August for puffins; July–August for hiking.',
      stay=[('바카게르디 마을', 'Bakkagerði village', 'Bakkagerði', FIRST, '숙소 몇 곳과 카페가 있는 작은 마을입니다.|A small village with a few lodgings and a café.')],
      routes=[],
      transit=dict(modes=['walk'], ko='마을은 걸어서 다니고, 오가는 건 렌터카로 합니다.', en='Walk the village; arrive and leave by rental car.')),
    C(id='hveragerdi', ko='크베라게르디', en='Hveragerði', native='Hveragerði', lat=63.9998, lng=-21.1857,
      blurb=['레이캬비크에서 동쪽으로 45분, 땅에서 김이 오르는 온실 마을입니다. 산 위 계곡의 따뜻한 강에서 온천욕을 할 수 있습니다.',
             'A steaming greenhouse town 45 minutes east of Reykjavík, from where you can hike up a valley to bathe in a warm river.'],
      highlights=[
          H('지열 공원', 'Geothermal Park', '마을 한가운데 김 나는 구멍과 진흙 온천이 있는 작은 공원으로, 온천 달걀 삶기도 해 봅니다.', 'A small park in town with steaming vents and mud pots, where you can try boiling an egg in a hot spring.', 'Hveragarðurinn Hveragerði', 30, 45),
          H('레이캬달뤼르 온천 강', 'Reykjadalur hot river', '마을 위 주차장에서 약 1시간 걸어 올라가 따뜻한 강물에 몸을 담급니다.', 'Hike about an hour up from the car park above town to soak in a warm river.', 'Reykjadalur', 180, 240, b='no', n='무료이며 주차는 유료입니다.|Free; parking is paid.'),
          H('라우파르홀스헬리르 용암 동굴', 'Raufarhólshellir', '아이슬란드에서 손꼽히게 긴 용암 동굴로, 가이드 투어로 들어갑니다.', 'One of Iceland’s longest lava tubes, entered on a guided tour.', 'Raufarhólshellir', 60, 90, group=NEAR),
          H('지열 발전소 전시관', 'Geothermal Exhibition', '헬리스헤이디 지열 발전소 안의 전시관으로, 땅속 열을 전기와 난방으로 바꾸는 과정을 보여 줍니다.', 'An exhibition inside the Hellisheiði power plant on turning underground heat into electricity and hot water.', 'Hellisheiði Geothermal Power Plant Exhibition', 45, 60, group=NEAR),
      ],
      hubs=hubs([KEF('차로 약 1시간|About 1 hr by car')], ST(51, 'Hveragerði', ('레이캬비크', 'Reykjavík'))),
      itinerary={'days': [['', 1, 2]], 'trips': [['용암 동굴과 지열 발전소|Lava tube & power plant', 3, 4]]},
      season='6~9월에 온천 강 산행이 좋고, 겨울엔 길이 얼어 미끄럽습니다.|June–September for the hot-river hike; the trail is icy in winter.',
      stay=[('크베라게르디 마을', 'Hveragerði town', 'Hveragerði', FIRST, '온천 강 입구와 버스 정류장이 가깝습니다.|Close to the hot-river trailhead and bus stop.'),
            ('레이캬비크에서 당일치기', 'Day trip from Reykjavík', 'Reykjavík', '당일치기|As a day trip', '51번 버스로 40분 남짓입니다.|About 40 min on bus route 51.')],
      routes=[R('reykjavik', 'hveragerdi', 'bus', 40, "n: 'Strætó 51번|Strætó route 51'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서, 온천 강 입구까지는 걸어서 30분 남짓이나 차로 갑니다.', en='Walk the town; the hot-river trailhead is about a 30-minute walk or a short drive.')),
    C(id='fludir', ko='플루디르', en='Flúðir', native='Flúðir', lat=64.1350, lng=-20.3080,
      blurb=['골든 서클 남쪽 온실과 온천의 작은 마을로, 1891년에 만든 아이슬란드에서 가장 오래된 수영장이 시크릿 라군으로 운영됩니다.',
             'A small village of greenhouses and hot springs south of the Golden Circle, where Iceland’s oldest pool, built in 1891, now runs as the Secret Lagoon.'],
      highlights=[
          H('시크릿 라군', 'Secret Lagoon', '1891년에 만든 아이슬란드에서 가장 오래된 수영장으로, 주변에 작은 간헐천과 온천이 솟습니다.', 'Iceland’s oldest swimming pool, built in 1891, with small geysers and hot springs bubbling around it.', 'Secret Lagoon Flúðir', 60, 90),
          H('흐뤼날라우그', 'Hrunalaug', '들판 속 작은 돌 오두막 옆의 천연 온천 웅덩이로, 사유지라 입장료를 냅니다.', 'Small natural hot pools beside a stone hut in the fields, on private land with an entry fee.', 'Hrunalaug', 45, 60, group=NEAR),
          H('스퇴운 복원 농가', 'Þjóðveldisbærinn', '1104년 헤클라 화산 폭발로 묻힌 스퇴운 농가를 본떠 지은 잔디 집입니다.', 'A turf house reconstructed after the Stöng farm, buried by the eruption of Hekla in 1104.', 'Þjóðveldisbærinn Stöng', 45, 60, group=DAY, n=SUMMER),
      ],
      hubs=hubs([KEF('차로 약 1시간 40분|About 1 hr 40 min by car')], ST(72, 'Flúðir', ('셀포스', 'Selfoss'))),
      itinerary={'days': [['', 1, 2]], 'trips': [['스퇴운 복원 농가|Stöng reconstructed farm', 3]]},
      season='사계절 온천이 좋고, 겨울엔 오로라와 함께 다녀옵니다.|The hot springs work year-round; in winter pair them with the aurora.',
      stay=[('플루디르 마을', 'Flúðir village', 'Flúðir', FIRST, '시크릿 라군이 걸어서 닿습니다.|The Secret Lagoon on foot.'),
            ('셀포스에서 다녀오기', 'From Selfoss', 'Selfoss', '거점에서 다녀오기|From a base', '72번 버스나 차로 다녀옵니다.|By bus route 72 or car.')],
      routes=[R('selfoss', 'fludir', 'bus', 50, "n: 'Strætó 72번|Strætó route 72'")],
      transit=dict(modes=WALK_CAR, ko='마을은 걸어서, 근교 온천과 농가는 렌터카로 갑니다.', en='Walk the village; drive to the nearby pools and farm.')),
    C(id='hvolsvollur', ko='크볼스뵈들뤼르', en='Hvolsvöllur', native='Hvolsvöllur', lat=63.7533, lng=-20.2243,
      blurb=['남부 해안 길 입구의 작은 마을로, 화산 전시관 라바 센터가 있습니다. 빙하로 둘러싸인 계곡 소르스뫼르크로 가는 산악 버스도 이곳을 지납니다.',
             'A small village at the start of the south coast road, home to the LAVA Centre volcano exhibition; highland buses to the glacier-ringed valley of Þórsmörk pass through.'],
      highlights=[
          H('라바 센터', 'LAVA Centre', '2017년 문을 연 화산·지진 전시관으로, 주변 화산들이 보이는 전망대가 있습니다.', 'A volcano and earthquake exhibition opened in 2017, with a viewing deck toward the surrounding volcanoes.', 'LAVA Centre Hvolsvöllur', 60, 90),
          H('사가 센터', 'Saga Centre', '이 지역을 무대로 한 냘의 사가를 소개하는 전시관입니다.', 'An exhibition on Njáls saga, set in this area.', 'Sögusetrið Hvolsvelli', 45, 60),
          H('글리우프라뷔이 폭포', 'Gljúfrabúi', '셀랴란즈포스 옆 좁은 바위 틈 안으로 숨어 떨어지는 폭포로, 물을 밟고 들어가 봅니다.', 'A waterfall hidden in a rock cleft next to Seljalandsfoss, reached by wading in.', 'Gljúfrabúi', 20, 30, group=NEAR, b='no', n='무료이며 주차는 유료입니다.|Free; parking is paid.'),
          H('소르스뫼르크', 'Þórsmörk', '빙하와 산으로 둘러싸인 고원 계곡으로, 산행 길이 많습니다.', 'A highland valley ringed by glaciers and mountains, criss-crossed by hiking trails.', 'Þórsmörk', 300, 480, group=DAY, b='no', n=F_ROAD),
      ],
      hubs=hubs([KEF('차로 약 1시간 50분|About 1 hr 50 min by car')], ST(52, 'Hvolsvöllur', ('레이캬비크', 'Reykjavík'))),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['소르스뫼르크|Þórsmörk', 4]]},
      season='6~9월이 좋고, 소르스뫼르크는 여름에만 갑니다.|June–September; Þórsmörk only in summer.',
      stay=[('크볼스뵈들뤼르 마을', 'Hvolsvöllur village', 'Hvolsvöllur', FIRST, '전시관과 주유소, 상점이 길가에 모여 있습니다.|The exhibitions, petrol station and shops line the main road.')],
      routes=[R('reykjavik', 'hvolsvollur', 'bus', 100, "n: 'Strætó 52번, 주 4회|Strætó route 52, four days a week'"), R('selfoss', 'hvolsvollur', 'bus', 45, "n: 'Strætó 53번|Strætó route 53'")],
      transit=dict(modes=WALK_CAR, ko='마을은 걸어서, 폭포는 렌터카로, 소르스뫼르크는 여름 산악 버스로 갑니다.', en='Walk the village; drive to the waterfall; take the summer highland bus to Þórsmörk.')),
    C(id='kirkjubaejarklaustur', ko='키르큐바이야르클라우스튀르', en='Kirkjubæjarklaustur', native='Kirkjubæjarklaustur', lat=63.7889, lng=-18.0563,
      blurb=['비크와 스카프타펠 사이 링로드의 작은 마을로, 중세 수녀원 터가 있던 곳입니다. 바닥 타일처럼 보이는 현무암 지대와 마을 위 폭포가 볼거리입니다.',
             'A small Ring Road village between Vík and Skaftafell, once the site of a medieval convent; its sights are a tile-like basalt floor and a waterfall above the village.'],
      highlights=[
          H('키르큐골프', 'Kirkjugólf', '현무암 기둥의 윗면이 땅에 드러나 교회 바닥 타일처럼 보이는 곳입니다.', 'The tops of basalt columns exposed in the ground, looking like a tiled church floor.', 'Kirkjugólf', 15, 20, b='no', n=FREE),
          H('시스트라포스', 'Systrafoss', '마을 뒤 절벽에서 두 갈래로 떨어지는 폭포로, 위쪽 호수까지 산책길이 있습니다.', 'A twin waterfall dropping from the cliff behind the village, with a path up to the lake above.', 'Systrafoss', 30, 60, b='no', n=FREE),
          H('드베르크하마르', 'Dverghamrar', '요정 바위라 불리는 현무암 기둥 절벽으로, 링로드 바로 옆에 있습니다.', 'Basalt-column cliffs known as the Dwarf Rocks, right by the Ring Road.', 'Dverghamrar', 15, 20, group=NEAR, b='no', n=FREE),
          H('라키 분화구', 'Laki craters', '1783년 큰 분화로 생긴 분화구 줄로, 이끼 덮인 용암 지대가 끝없이 펼쳐집니다.', 'A row of craters from the great 1783 eruption, amid endless moss-covered lava.', 'Lakagígar', 360, 480, group=DAY, b='no', n=F_ROAD),
      ],
      hubs=hubs([KEF('차로 약 4시간|About 4 hr by car')], ST(52, 'Kirkjubæjarklaustur', ('레이캬비크·회픈', 'Reykjavík and Höfn'))),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['라키 분화구|Laki craters', 4]]},
      season='6~9월이 좋고, 라키는 여름에만 갈 수 있습니다.|June–September; Laki is reachable only in summer.',
      stay=[('키르큐바이야르클라우스튀르 마을', 'Kirkjubæjarklaustur village', 'Kirkjubæjarklaustur', FIRST, '비크와 스카프타펠 사이에서 묵기 좋은 마을입니다.|A good overnight stop between Vík and Skaftafell.')],
      routes=[R('vik', 'kirkjubaejarklaustur', 'bus', 60, "n: 'Strætó 52번, 주 4회|Strætó route 52, four days a week'")],
      transit=dict(modes=WALK_CAR, ko='마을은 걸어서, 근교는 렌터카로 갑니다.', en='Walk the village; drive to the sights nearby.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
