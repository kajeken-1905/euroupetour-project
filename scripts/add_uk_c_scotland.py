#!/usr/bin/env python3
"""UK 2nd pass, new cities — Scotland (2026-11-25, user picked): Loch Lomond, Dundee, Pitlochry, Aberdeen, Speyside
(Dufftown), Cairngorms (Aviemore), Isle of Mull (Tobermory), Arran, Islay, Orkney. Facts (Wikipedia en): V&A Dundee by
Kengo Kuma (2018), RRS Discovery (Scott's 1901 Antarctic ship), Dundee Law, McManus; Pitlochry Dam fish ladder, Blair
Castle (Atholl), Edradour distillery, Queen's View over Loch Tummel, Killiecrankie; Aberdeen granite city, Old Aberdeen
with King's College, St Machar's Cathedral, Footdee, Aberdeen Maritime Museum, Dunnottar Castle near Stonehaven;
Speyside: The Macallan Estate (Craigellachie), Speyside Cooperage, Balvenie Castle, Glenlivet (Glenfiddich is already an
Inverness sight); Cairngorms National Park the UK's largest, CairnGorm funicular reopened 2023, Cairngorm Reindeer Centre
(Britain's only free-ranging herd), Loch Morlich, Strathspey Railway, Highland Wildlife Park; Loch Lomond: Luss, cruises
from Balloch/Tarbet, Conic Hill, Ben Lomond; Orkney: Heart of Neolithic Orkney UNESCO 1999 (Skara Brae, Ring of Brodgar,
Maeshowe), St Magnus Cathedral (1137), Italian Chapel built by Italian POWs on Lamb Holm; Mull: Tobermory harbour, Duart
Castle (Clan Maclean), Staffa and Fingal's Cave, Calgary Bay; Arran: Brodick Castle, Goatfell, Machrie Moor stone circles,
Lochranza Castle and distillery; Islay: Bowmore distillery and round church, the Kildalton distilleries (Laphroaig,
Lagavulin, Ardbeg), Port Charlotte, American Monument on the Mull of Oa. Times via Transitous (2026-11-25):
Edinburgh–Dundee ~1 h 20, Edinburgh–Aberdeen ~2 h 30, Inverness–Aviemore ~40 (train), Glasgow–Balloch ~50,
Inverness–Dufftown ~2 h 15 (train + bus), Oban–Tobermory ~2 h 10 (ferry to Craignure + bus), Glasgow–Brodick ~2 h 25
(train to Ardrossan + ferry), Glasgow–Islay ~6 h 30 by bus and ferry; Edinburgh–Pitlochry ~2 h by train (rounded);
Aberdeen–Kirkwall NorthLink ferry ~6 h. Run once."""
from uk_c_common import H, R, C, day, run, FREE, DAY, NEAR, FIRST

SC = '스코틀랜드'
EDI = "['Edinburgh (EDI)', '에든버러 공항 (EDI)', '에든버러|Edinburgh']"
GLA = "['Glasgow (GLA)', '글래스고 공항 (GLA)', '글래스고|Glasgow']"
ABZ = "['Aberdeen (ABZ)', '애버딘 공항 (ABZ)']"
INV = "['Inverness (INV)', '인버네스 공항 (INV)', '인버네스|Inverness']"
FERRY = '칼레도니안 맥브레인 페리|CalMac ferry'

CITIES = [
    C(id='loch-lomond', group_title=SC, after='glasgow', ko='로흐로몬드', en='Loch Lomond', native='Loch Lomond (Luss)', lat=56.1010, lng=-4.6380,
      blurb=['글래스고에서 한 시간 거리의 영국 최대 담수호로, 국립공원 안에 호숫가 마을 러스와 유람선, 등산로가 있습니다.',
             'Britain’s largest freshwater loch, an hour from Glasgow, with the lakeside village of Luss, cruises and hill paths inside a national park.'],
      highlights=[
          H('러스 마을', 'Luss', '돌집과 꽃밭이 늘어선 호숫가 마을로, 잔교에서 호수와 산이 보입니다.', 'A lakeside village of stone cottages and gardens, with a pier looking over the loch.', 'Luss Pier', 60, 90, b='no', n=FREE),
          H('로흐로몬드 유람선', 'Loch Lomond cruises', '밸로크·타벳 등에서 출발해 섬들 사이를 도는 유람선입니다.', 'Cruises from Balloch, Tarbet and other piers among the islands.', 'Sweeney’s Cruises Balloch', 60, 120, n='봄~가을에 자주 다닙니다.|Most frequent from spring to autumn.'),
          H('코닉 힐', 'Conic Hill', '발마하에서 오르는 언덕으로, 꼭대기에서 호수 위 섬들이 줄지어 보입니다.', 'The hill above Balmaha, with a view down the chain of islands across the loch.', 'Conic Hill', 120, 150, b='no', n=FREE),
          H('벤 로몬드', 'Ben Lomond', '호수 동쪽의 974m 산으로, 왕복 하루 산행 코스입니다.', 'The 974 m mountain on the east shore, a full-day hike up and down.', 'Ben Lomond', 300, 360, b='no', n=FREE),
      ],
      hubs=f"    air: [{GLA}],\n    rail: [['Balloch', '밸로크역'], ['Tarbet', '아로차 앤드 타벳역']],\n",
      itinerary=[2, 1, 3, 4],
      season='4~10월이 유람선과 산행에 좋습니다.|April–October for cruises and hiking.',
      stay=[('러스·밸로크', 'Luss & Balloch', 'Balloch', FIRST, '기차역과 선착장이 가깝습니다.|Close to the station and piers.')],
      routes=[R('glasgow', 'loch-lomond', 'train', 50, '밸로크역|Balloch')],
      transit=dict(modes=['train', 'bus', 'ferry', 'walk'], ko='밸로크까지 기차, 호숫가 마을은 버스나 유람선으로 잇습니다.', en='Train to Balloch; buses and boats link the lakeside villages.'),
      daytrips=[day('glasgow', 'loch-lomond', '기차로 밸로크에 가서 유람선을 타고, 러스 마을을 걷습니다.|Train to Balloch, a loch cruise and a stroll round Luss.')]),
    C(id='dundee', group_title=SC, after='st-andrews', ko='던디', en='Dundee', native='Dundee', lat=56.4620, lng=-2.9707,
      blurb=['테이강 하구의 도시로, 구마 겐고가 설계한 디자인 박물관 V&A 던디와 스콧의 남극 탐험선 디스커버리호가 강변에 나란히 있습니다.',
             'A city on the Firth of Tay, where Kengo Kuma’s V&A Dundee design museum and Scott’s Antarctic ship Discovery stand side by side on the waterfront.'],
      highlights=[
          H('V&A 던디', 'V&A Dundee', '절벽 같은 외벽의 2018년 디자인 박물관으로, 스코틀랜드 디자인 전시실은 무료입니다.', 'The 2018 design museum with cliff-like walls; the Scottish Design Galleries are free.', 'V&A Dundee', 90, 120, b='no', n='상설 전시는 무료이고 특별전은 유료입니다.|Free permanent galleries; special exhibitions are ticketed.'),
          H('RRS 디스커버리호', 'RRS Discovery', '스콧이 1901년 남극 탐험에 타고 간 배로, 배 안과 전시관을 봅니다.', 'The ship that carried Scott to Antarctica in 1901, with the vessel and an exhibition to explore.', 'RRS Discovery Dundee', 90, 120),
          H('던디 로', 'Dundee Law', '옛 화산 언덕 위 전망대로, 테이강과 다리들이 내려다보입니다.', 'The viewpoint on an old volcanic hill over the Tay and its bridges.', 'Dundee Law', 45, 60, b='no', n=FREE),
          H('맥머너스 미술관', 'The McManus', '고딕 건물 안의 시립 미술관·박물관입니다.', 'The city’s art gallery and museum in a Gothic building.', 'The McManus Dundee', 60, 90, b='no', n=FREE),
      ],
      hubs="    air: [['Dundee (DND)', '던디 공항 (DND)', '운항편 적음|few flights'], " + EDI + "],\n    rail: [['Dundee', '던디역', 'V&A 바로 앞|next to the V&A']],\n",
      itinerary=[1, 2, 4, 3],
      season='1년 내내 다닐 수 있고, 박물관이 많아 비 오는 날에도 좋습니다.|Fine all year, with museums for rainy days.',
      stay=[('강변과 시내 중심', 'Waterfront & city centre', 'Dundee railway station', FIRST, '역과 박물관이 걸어서 닿습니다.|The station and museums on foot.')],
      routes=[R('edinburgh', 'dundee', 'train', 80), R('st-andrews', 'dundee', 'bus', 30)],
      transit=dict(modes=['walk', 'bus', 'train'], ko='강변과 시내는 걸어서 다닙니다.', en='Walk the waterfront and centre.')),
    C(id='pitlochry', group_title=SC, after='dundee', ko='피틀로크리', en='Pitlochry', native='Pitlochry', lat=56.7023, lng=-3.7347,
      blurb=['하이랜드 입구의 빅토리아풍 휴양 마을로, 연어가 오르는 댐의 물고기 사다리와 블레어 성, 작은 증류소가 가까이 있습니다.',
             'A Victorian resort town at the gateway to the Highlands, near a dam with a salmon ladder, Blair Castle and a small distillery.'],
      highlights=[
          H('피틀로크리 댐과 물고기 사다리', 'Pitlochry Dam & Fish Ladder', '수력 발전 댐 옆으로 연어가 오르는 계단식 물길이 있고, 방문자 센터가 있습니다.', 'A hydro dam with a stepped salmon ladder alongside and a visitor centre.', 'Pitlochry Dam Visitor Centre', 45, 60, b='no', n=FREE),
          H('블레어 성', 'Blair Castle', '애솔 공작 가문의 하얀 성으로, 정원과 호화로운 방을 둘러봅니다.', 'The white castle of the Dukes of Atholl, with grand rooms and gardens.', 'Blair Castle', 120, 150, group=NEAR, n='봄~가을에 엽니다.|Open from spring to autumn.'),
          H('에드라두어 증류소', 'Edradour Distillery', '마을 언덕의 작은 전통 증류소로, 견학과 시음을 합니다.', 'A small traditional distillery in the hills above town, with tours and tastings.', 'Edradour Distillery', 60, 90),
          H('퀸스 뷰', 'Queen’s View', '터멜 호수와 산봉우리가 펼쳐지는 전망대입니다.', 'A viewpoint over Loch Tummel and the peaks beyond.', 'Queen’s View Loch Tummel', 30, 45, group=NEAR, b='no', n=FREE),
          H('킬리크랭키 협곡', 'Pass of Killiecrankie', '숲속 협곡 산책길로, 1689년 전투의 무대입니다.', 'A wooded gorge walk, scene of the 1689 battle.', 'Killiecrankie Visitor Centre', 60, 90, group=NEAR, b='no', n=FREE),
      ],
      hubs=f"    air: [{EDI}],\n    rail: [['Pitlochry', '피틀로크리역']],\n",
      itinerary={'days': [['', 1, 3], ['', 4, 5, 2]]},
      season='단풍이 드는 9~10월이 특히 아름답습니다.|September–October, when the autumn colours are at their best.',
      stay=[('마을 중심', 'Town centre', 'Pitlochry', FIRST, '역과 상점가, 댐이 걸어서 닿습니다.|The station, high street and dam on foot.')],
      routes=[R('edinburgh', 'pitlochry', 'train', 120), R('inverness', 'pitlochry', 'train', 105)],
      transit=dict(modes=['walk', 'bus', 'train'], ko='마을은 걸어서 다니고, 블레어 성은 기차나 버스로 갑니다.', en='Walk the town; take a train or bus to Blair Castle.')),
    C(id='aberdeen', group_title=SC, after='pitlochry', ko='애버딘', en='Aberdeen', native='Aberdeen', lat=57.1497, lng=-2.0943,
      blurb=['회색 화강암 건물이 반짝여 ‘화강암 도시’라 불리는 북해의 항구 도시로, 대학 지구 올드 애버딘과 어촌 마을 풋디가 있습니다. 근교에는 절벽 위 던노터 성이 있습니다.',
             'The North Sea port called “the Granite City” for its sparkling grey stone, with the university quarter of Old Aberdeen and the fishing hamlet of Footdee; nearby, Dunnottar Castle crowns a sea cliff.'],
      highlights=[
          H('올드 애버딘과 킹스 칼리지', 'Old Aberdeen & King’s College', '왕관 모양 탑이 있는 킹스 칼리지 예배당과 자갈길이 이어진 대학 지구입니다.', 'The cobbled university quarter around King’s College Chapel and its crown tower.', 'King’s College Aberdeen', 45, 60, b='no', n=FREE),
          H('세인트 마커 대성당', 'St Machar’s Cathedral', '화강암으로 지은 중세 대성당으로, 문장이 그려진 나무 천장이 있습니다.', 'A medieval granite cathedral with a heraldic painted ceiling.', 'St Machar’s Cathedral', 30, 45, b='no', n=FREE),
          H('풋디', 'Footdee', '항구 입구의 작은 어촌 마을로, 작은 집과 창고가 모여 있습니다.', 'A tiny fishing hamlet at the harbour mouth, with little cottages and sheds.', 'Footdee Aberdeen', 30, 45, b='no', n=FREE),
          H('애버딘 해양 박물관', 'Aberdeen Maritime Museum', '항구와 북해 석유 산업의 역사를 보여 주는 무료 박물관입니다.', 'A free museum on the harbour and the North Sea oil industry.', 'Aberdeen Maritime Museum', 60, 90, b='no', n=FREE),
          H('던노터 성', 'Dunnottar Castle', '바다로 튀어나온 절벽 위 성의 폐허로, 스톤헤이븐에서 걸어갑니다.', 'The ruined castle on a sea-girt cliff, a walk from Stonehaven.', 'Dunnottar Castle', 150, 210, group=DAY),
      ],
      hubs=f"    air: [{ABZ}],\n    rail: [['Aberdeen', '애버딘역']],\n    port: [['Aberdeen Harbour', '애버딘 항구', '오크니·셰틀랜드행 노스링크 페리|NorthLink ferries to Orkney and Shetland']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['던노터 성|Dunnottar Castle', 5]]},
      season='해가 긴 5~9월이 좋습니다.|May–September, with long daylight.',
      stay=[('시내 중심', 'City centre', 'Union Street Aberdeen', FIRST, '역과 항구, 상점가가 가깝습니다.|Close to the station, harbour and shops.')],
      routes=[R('edinburgh', 'aberdeen', 'train', 150), R('aberdeen', 'inverness', 'train', 140)],
      transit=dict(modes=['walk', 'bus', 'train'], ko='시내는 걸어서 다니고, 올드 애버딘과 스톤헤이븐은 버스로 갑니다.', en='Walk the centre; buses run to Old Aberdeen and Stonehaven.')),
    C(id='speyside', group_title=SC, after='aberdeen', ko='스페이사이드', en='Speyside', native='Speyside (Dufftown)', lat=57.4470, lng=-3.1290,
      blurb=['스페이강을 따라 수십 곳의 증류소가 모인 스코틀랜드 최대의 위스키 산지로, 증류소 마을 더프타운을 거점으로 둘러봅니다.',
             'Scotland’s greatest whisky region, with dozens of distilleries along the River Spey, explored from the distillery town of Dufftown.'],
      highlights=[
          H('맥캘란 에스테이트', 'The Macallan Estate', '언덕에 묻힌 듯한 지붕의 현대식 증류소로, 견학은 예약제입니다.', 'A modern distillery under a turf-covered undulating roof; tours by booking.', 'The Macallan Estate', 90, 150, b='rec'),
          H('스페이사이드 쿠퍼리지', 'Speyside Cooperage', '위스키 통을 만들고 고치는 모습을 보는 통 공방입니다.', 'A cooperage where you watch whisky casks being made and repaired.', 'Speyside Cooperage', 45, 60),
          H('발버니 성', 'Balvenie Castle', '더프타운 옆의 중세 성 폐허입니다.', 'The ruins of a medieval castle beside Dufftown.', 'Balvenie Castle', 30, 45, n='여름에만 엽니다.|Open in summer only.'),
          H('글렌리벳 증류소', 'The Glenlivet Distillery', '리벳 골짜기의 증류소로, 견학과 시음을 합니다.', 'The distillery in the Livet glen, with tours and tastings.', 'The Glenlivet Distillery', 90, 120, b='rec'),
      ],
      hubs=f"    air: [{INV}, {ABZ}],\n    rail: [['Keith', '키스역', '더프타운까지 버스|bus to Dufftown']],\n",
      itinerary={'days': [['', 3, 2, 1], ['', 4]]},
      season='5월 스페이사이드 위스키 축제 때 가장 활기찹니다. 겨울엔 쉬는 증류소가 있습니다.|Liveliest at the Spirit of Speyside festival in May; some distilleries close in winter.',
      stay=[('더프타운', 'Dufftown', 'Dufftown', FIRST, '증류소들이 가까운 작은 마을입니다.|A small town close to the distilleries.')],
      routes=[R('inverness', 'speyside', 'train', 135, '키스역에서 버스|bus from Keith'), R('aberdeen', 'speyside', 'train', 110, '키스역에서 버스|bus from Keith')],
      transit=dict(modes=['bus', 'taxi', 'walk'], ko='증류소 사이는 버스가 드물어 택시나 투어가 편합니다. 시음한 날엔 운전하지 마세요.', en='Buses between distilleries are sparse; taxis or tours are easiest. Never drive after tastings.')),
    C(id='cairngorms', group_title=SC, after='speyside', ko='케언고름·에비모어', en='Cairngorms & Aviemore', native='Cairngorms (Aviemore)', lat=57.1890, lng=-3.8290,
      blurb=['영국에서 가장 큰 국립공원으로, 거점 마을 에비모어에서 산 위 푸니쿨라와 순록 목장, 호숫가 해변, 증기 기관차를 즐깁니다.',
             'The UK’s largest national park; from Aviemore, ride the mountain funicular, visit the reindeer herd, relax on a loch beach or take a steam train.'],
      highlights=[
          H('케언곰 산 푸니쿨라', 'CairnGorm Mountain funicular', '산 중턱까지 오르는 푸니쿨라로, 2023년에 다시 운행을 시작했습니다.', 'The funicular up the mountainside, back in service since 2023.', 'CairnGorm Mountain', 90, 150, n='날씨에 따라 운행이 멈출 수 있습니다.|Can stop in bad weather.'),
          H('케언고름 순록 센터', 'Cairngorm Reindeer Centre', '영국에서 유일하게 방목하는 순록 무리를 언덕에서 만납니다.', 'Meet Britain’s only free-ranging reindeer herd on the hillside.', 'Cairngorm Reindeer Centre', 120, 150, b='rec', n='언덕 산책 체험은 예약하는 것이 좋습니다.|Book the hill trips in advance.'),
          H('모를리크 호수', 'Loch Morlich', '숲과 산에 둘러싸인 호수로, 모래 해변이 있습니다.', 'A loch ringed by forest and mountains, with a sandy beach.', 'Loch Morlich', 60, 120, b='no', n=FREE),
          H('스트래스스페이 철도', 'Strathspey Railway', '에비모어에서 출발하는 보존 증기 철도입니다.', 'A heritage steam railway from Aviemore.', 'Strathspey Railway Aviemore', 90, 150, n='봄~가을 위주로 운행합니다.|Runs mainly from spring to autumn.'),
          H('하이랜드 야생 동물 공원', 'Highland Wildlife Park', '북극곰과 스코틀랜드 야생 고양이를 볼 수 있는 야생 동물 공원입니다.', 'A wildlife park with polar bears and Scottish wildcats.', 'Highland Wildlife Park', 150, 180, group=NEAR),
      ],
      hubs=f"    air: [{INV}],\n    rail: [['Aviemore', '에비모어역']],\n",
      itinerary={'days': [['', 2, 3, 1], ['', 4, 5]]},
      season='여름엔 산행, 겨울엔 스키를 즐깁니다.|Hiking in summer, skiing in winter.',
      stay=[('에비모어', 'Aviemore', 'Aviemore', FIRST, '역과 상점, 산행 출발 버스가 모여 있습니다.|Station, shops and buses up the mountain.')],
      routes=[R('inverness', 'cairngorms', 'train', 40), R('edinburgh', 'cairngorms', 'train', 160)],
      transit=dict(modes=['bus', 'walk', 'train', 'bike'], ko='에비모어에서 산과 호수까지 버스가 다니고, 자전거를 빌려도 좋습니다.', en='Buses run from Aviemore to the mountain and loch; bike hire is popular.')),
    C(id='mull', group_title=SC, after='oban', ko='멀섬·토버모리', en='Isle of Mull & Tobermory', native='Isle of Mull (Tobermory)', lat=56.6230, lng=-6.0650,
      blurb=['오번에서 배로 건너는 섬으로, 색색의 집이 늘어선 항구 마을 토버모리와 매클린 가문의 성이 있습니다. 작은 섬 스태파의 핑갈의 동굴과 퍼핀을 보러 배를 탑니다.',
             'The island across the water from Oban, with Tobermory’s harbour of colourful houses and the Clan Maclean castle; boats run to Staffa for Fingal’s Cave and puffins.'],
      highlights=[
          H('토버모리 항구', 'Tobermory harbour', '파스텔색 집들이 항구를 따라 늘어선 섬의 중심 마을입니다.', 'The island’s main village, with pastel houses along the harbour.', 'Tobermory harbour', 45, 60, b='no', n=FREE),
          H('두아트 성', 'Duart Castle', '바다를 향한 곶 위의 매클린 가문 성입니다.', 'The Clan Maclean castle on a headland facing the sea.', 'Duart Castle', 60, 90, n='봄~가을에 엽니다.|Open from spring to autumn.'),
          H('스태파섬과 핑갈의 동굴', 'Staffa & Fingal’s Cave', '육각 현무암 기둥으로 된 섬과 동굴로, 여름엔 퍼핀이 둥지를 틉니다.', 'An island of hexagonal basalt columns and its sea cave; puffins nest here in summer.', 'Fingal’s Cave', 240, 360, group=DAY, b='rec', n='배는 봄~가을에 날씨가 좋을 때 다닙니다.|Boats run spring to autumn, weather permitting.'),
          H('캘거리 베이', 'Calgary Bay', '하얀 모래와 맑은 물의 섬 서쪽 해변입니다.', 'A white-sand beach with clear water on the island’s west coast.', 'Calgary Bay Mull', 60, 120, b='no', n=FREE),
      ],
      hubs="    air: [" + GLA + "],\n    port: [['Craignure', '크레이그뉴어 선착장', '오번에서 45분|45 min from Oban'], ['Tobermory', '토버모리 선착장', '킬코언행|to Kilchoan']],\n",
      itinerary={'days': [['', 1, 4], ['', 2]], 'trips': [['스태파섬|Staffa', 3]]},
      season='퍼핀이 오는 5~7월이 특히 좋습니다.|May–July, when the puffins are in.',
      stay=[('토버모리', 'Tobermory', 'Tobermory', FIRST, '항구 마을에 식당과 숙소가 모여 있습니다.|Restaurants and rooms around the harbour.')],
      routes=[R('oban', 'mull', 'ferry', 130, '크레이그뉴어행 페리 후 버스|ferry to Craignure, then bus')],
      transit=dict(modes=['ferry', 'bus', 'walk'], ko='오번에서 페리로 건너고, 섬 안은 버스가 드물어 차나 투어가 편합니다.', en='Ferry from Oban; buses are sparse on the island, so a car or tour helps.'),
      apps="      ta('trainline'),\n"),
    C(id='arran', group_title=SC, after='isle-of-skye', ko='아런섬', en='Isle of Arran', native='Isle of Arran (Brodick)', lat=55.5770, lng=-5.1500,
      blurb=['산과 해안, 고성과 증류소가 모두 있어 ‘축소판 스코틀랜드’라 불리는 섬으로, 글래스고에서 기차와 배로 갑니다.',
             'Called “Scotland in miniature” for its mountains, coast, castles and distilleries, reached from Glasgow by train and ferry.'],
      highlights=[
          H('브로딕 성', 'Brodick Castle', '선착장 마을 위의 붉은 사암 성과 정원입니다.', 'The red sandstone castle and gardens above the ferry village.', 'Brodick Castle', 90, 120, n='봄~가을에 엽니다.|Open from spring to autumn.'),
          H('고트펠', 'Goatfell', '섬에서 가장 높은 874m 산으로, 브로딕에서 하루 산행을 합니다.', 'The island’s highest peak at 874 m, a day hike from Brodick.', 'Goatfell', 300, 360, b='no', n=FREE),
          H('마크리 무어 선돌', 'Machrie Moor stone circles', '들판에 여러 개의 선돌 원이 남은 선사 유적입니다.', 'A prehistoric site with several stone circles on the moor.', 'Machrie Moor Stone Circles', 90, 120, b='no', n=FREE),
          H('로크랜자 성과 증류소', 'Lochranza Castle & distillery', '섬 북쪽 만의 성 폐허와, 그 옆 아런 증류소입니다.', 'The castle ruin on the island’s northern bay and the Arran distillery beside it.', 'Lochranza Castle', 90, 120),
      ],
      hubs="    air: [" + GLA + "],\n    port: [['Brodick', '브로딕 선착장', '아드로산행 페리|ferries to Ardrossan']],\n",
      itinerary={'days': [['', 1, 4], ['', 3, 2]]},
      season='5~9월이 좋습니다. 여름엔 페리를 미리 예약하세요.|May–September; book summer ferries ahead.',
      stay=[('브로딕', 'Brodick', 'Brodick', FIRST, '선착장과 버스가 모이는 섬의 중심 마을입니다.|The island’s main village, with the ferry and buses.')],
      routes=[R('glasgow', 'arran', 'ferry', 145, '아드로산까지 기차 후 페리, 사정에 따라 출발 항구가 바뀔 때가 있음|train to Ardrossan then ferry; the mainland port can change')],
      transit=dict(modes=['ferry', 'bus', 'walk'], ko='섬을 도는 버스가 선착장 시간에 맞춰 다닙니다.', en='Island buses run round the coast, timed with the ferries.')),
    C(id='islay', group_title=SC, after='arran', ko='아일레이', en='Islay', native='Islay (Bowmore)', lat=55.7570, lng=-6.2900,
      blurb=['피트 향 짙은 위스키로 이름난 증류소들이 모인 섬으로, 둥근 교회가 있는 보모어 마을이 거점입니다.',
             'The island famous for its peaty whiskies, with distilleries round the coast and the village of Bowmore, with its round church, as a base.'],
      highlights=[
          H('보모어 증류소와 둥근 교회', 'Bowmore Distillery & Round Church', '바닷가의 오래된 증류소와, 악마가 숨을 모퉁이가 없도록 둥글게 지었다는 교회입니다.', 'The old waterside distillery and the round church, built so the devil had no corners to hide in.', 'Bowmore Distillery', 90, 120, b='rec'),
          H('킬달턴 증류소들', 'Kildalton distilleries', '남쪽 해안의 라프로익·라가불린·아드벡 증류소를 해안길로 잇는 코스입니다.', 'The south-coast run of Laphroaig, Lagavulin and Ardbeg distilleries.', 'Lagavulin Distillery', 240, 300, b='rec', n='견학은 예약하는 것이 좋고, 시음한 날엔 운전하지 마세요.|Book tours; never drive after tastings.'),
          H('포트 샬럿', 'Port Charlotte', '하얀 집들이 늘어선 서쪽 해안 마을입니다.', 'A west-coast village of white cottages.', 'Port Charlotte Islay', 45, 60, b='no', n=FREE),
          H('아메리칸 모뉴먼트', 'American Monument', '오아 곶 절벽 위 기념탑으로, 1918년 근처에서 침몰한 미군 수송선 희생자를 기립니다.', 'The memorial on the cliffs of the Mull of Oa, for the US troopships lost nearby in 1918.', 'American Monument Islay', 90, 120, b='no', n=FREE),
      ],
      hubs="    air: [['Islay (ILY)', '아일레이 공항 (ILY)', '글래스고 항공편|flights from Glasgow']],\n    port: [['Port Ellen', '포트엘런 선착장'], ['Port Askaig', '포트애스케이그 선착장']],\n",
      itinerary={'days': [['', 1, 3], ['', 2, 4]]},
      season='5월 말 섬 위스키 축제(Fèis Ìle) 때 가장 붐빕니다.|Busiest at the Fèis Ìle whisky festival in late May.',
      stay=[('보모어', 'Bowmore', 'Bowmore', FIRST, '섬 가운데 있어 증류소 어디로든 가기 좋습니다.|Central, handy for all the distilleries.')],
      routes=[R('glasgow', 'islay', 'ferry', 400, '케나크레이그까지 버스 후 페리, 비행기도 있음|bus to Kennacraig then ferry; flights also run')],
      transit=dict(modes=['bus', 'taxi', 'walk'], ko='섬 버스는 드물어 택시나 투어가 편합니다.', en='Island buses are sparse; taxis or tours are easiest.')),
    C(id='orkney', group_title=SC, after='islay', ko='오크니 제도', en='Orkney', native='Orkney (Kirkwall)', lat=58.9810, lng=-2.9600,
      blurb=['스코틀랜드 북쪽 바다의 섬들로, 5,000년 전 신석기 마을과 선돌 원이 유네스코 세계유산으로 남아 있습니다. 중심 마을 커크월엔 붉은 사암 대성당이 있습니다.',
             'Islands off Scotland’s north coast whose 5,000-year-old Neolithic village and stone circles are a UNESCO World Heritage Site; the main town, Kirkwall, has a red sandstone cathedral.'],
      highlights=[
          H('스카라 브레', 'Skara Brae', '모래 폭풍에 묻혔다 드러난 5,000년 전 신석기 마을로, 돌 가구가 그대로 남았습니다.', 'A 5,000-year-old Neolithic village uncovered by a storm, its stone furniture still in place.', 'Skara Brae', 90, 120),
          H('브로드가의 고리', 'Ring of Brodgar', '두 호수 사이 들판에 선 거대한 신석기 선돌 원입니다.', 'A great Neolithic stone circle on the land between two lochs.', 'Ring of Brodgar', 45, 60, b='no', n=FREE),
          H('메이스하우', 'Maeshowe', '동짓날 해가 안까지 비추는 신석기 고분으로, 바이킹이 남긴 룬 문자 낙서가 있습니다.', 'A Neolithic chambered tomb lit by the midwinter sun, with Viking runic graffiti inside.', 'Maeshowe', 60, 75, b='rec', n='가이드 투어로만 들어가며 예약이 필요합니다.|Guided tours only; booking required.'),
          H('세인트 매그너스 대성당', 'St Magnus Cathedral', '1137년에 짓기 시작한 커크월의 붉은 사암 대성당입니다.', 'Kirkwall’s red sandstone cathedral, begun in 1137.', 'St Magnus Cathedral', 30, 45, b='no', n=FREE),
          H('이탈리아 예배당', 'Italian Chapel', '제2차 세계대전 때 이탈리아 포로들이 막사 두 동을 고쳐 꾸민 작은 예배당입니다.', 'The little chapel Italian prisoners of war made from two Nissen huts in the Second World War.', 'Italian Chapel Orkney', 30, 45),
      ],
      hubs="    air: [['Kirkwall (KOI)', '커크월 공항 (KOI)']],\n    port: [['Kirkwall', '커크월 항구', '애버딘행 노스링크|NorthLink to Aberdeen'], ['Stromness', '스트롬니스 항구', '스크랩스터행|to Scrabster']],\n",
      itinerary={'days': [['', 4, 5], ['신석기 유적|Neolithic sites', 1, 2, 3]]},
      season='해가 긴 5~8월이 좋고, 겨울엔 바람이 거셉니다.|May–August, with long days; winters are very windy.',
      stay=[('커크월', 'Kirkwall', 'Kirkwall', FIRST, '대성당과 버스 정류장, 식당이 모여 있습니다.|The cathedral, bus station and restaurants.')],
      routes=[R('aberdeen', 'orkney', 'ferry', 360, '노스링크 페리(커크월)|NorthLink ferry to Kirkwall')],
      transit=dict(modes=['bus', 'taxi', 'walk', 'ferry'], ko='본섬 유적 사이는 버스가 드물어 투어나 차가 편합니다.', en='Buses between the sites are sparse; tours or a car help.')),
]


if __name__ == '__main__':
    run(CITIES)
