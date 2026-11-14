#!/usr/bin/env python3
"""Iceland review step 2 (2026-11-14, plan approved): Vestmannaeyjar, Höfn, Stykkishólmur (Snæfellsnes), Ísafjörður
(Westfjords), Mývatn and Seyðisfjörður as new cities. Reuses the batch-3 writer (add_daytrip_places3.main); the Iceland
city groups are rewritten afterwards. Times are rounded typical values. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
TOUR = ('투어로 다녀오기', 'On a tour')
COMMON = dict(hubs_file='hubs-central.ts', hubs_before='\n  // —— at ——\n', itin_file='itinerary-north.ts', itin_before='  bratislava: {',
              visit_file='visit-nordic.ts', visit_after=r"^  'selfoss-h\d+': v\(.*\),\n", stay_before='  ankara: [', apps='',
              transit_before='  // —— ee ——\n', places=None, daytrips=[], routes=[])
LAST = r"^  r\('akureyri', 'husavik', 'bus', 75\),\n"
CAR = '버스가 하루 몇 편뿐이라 렌터카나 투어가 편합니다.|Buses run only a few times a day, so a hire car or tour is easier.'


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'is'
    return d


def H(ko, en, dko, den, maps, mn, mx, n=None, group=None):
    v = dict(min=mn, max=mx)
    if n:
        v['n'] = n
    d = dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)
    if group:
        d['group'] = group
    return d


def R(*lines):
    return [('routes-central.ts', LAST, ''.join(lines))]


CITIES = [
    C(id='vestmannaeyjar', after='selfoss', ko='베스트만나에이야르', en='Westman Islands', native='Vestmannaeyjar', lat=63.4427, lng=-20.2734,
      blurb=['남해안 앞바다의 화산 군도. 유일한 유인도 헤이마에이는 1973년 분화로 마을 일부가 화산재에 묻혔고, 여름엔 세계 최대급 퍼핀 번식지가 됩니다.',
             'A volcanic archipelago off the south coast; on Heimaey, the only inhabited island, the 1973 eruption buried part of the town, and in summer it hosts one of the world’s largest puffin colonies.'],
      highlights=[
          H('엘드헤이마르 화산 박물관', 'Eldheimar', '1973년 엘드펠 분화 때 화산재에 묻힌 집을 파낸 자리에 세운 박물관으로, 그날 밤의 피난과 복구 이야기를 들려줍니다.', 'A museum built around a house dug out of the ash of the 1973 Eldfell eruption, telling the story of that night’s evacuation and the rebuilding.', 'Eldheimar', 60, 90),
          H('엘드펠 화산', 'Eldfell', '1973년 마을 옆에서 새로 솟아난 높이 약 200m 화산으로, 아직 따뜻한 붉은 화산재 길을 따라 분화구에 오릅니다.', 'The volcano of about 200 m that rose beside the town in 1973; climb its still-warm red cinder path to the crater.', 'Eldfell', 60, 90),
          H('퍼핀 관찰', 'Puffin watching', '섬 남쪽 끝 스토르회프디 등 절벽에서 퍼핀 무리를 가까이서 봅니다.', 'Watch puffin colonies up close from the cliffs, such as Stórhöfði at the island’s southern tip.', 'Stórhöfði', 60, 120,
            n='퍼핀은 대체로 4월 말~8월에만 섬에 있습니다.|Puffins are on the island roughly from late April to August.'),
          H('헤르욜프스달뤼르', 'Herjólfsdalur', '분화구 모양 초록 골짜기로, 매년 8월 첫 주말 섬 최대 축제 ‘톄우드아우티드’가 열립니다.', 'A green, crater-shaped valley where the islands’ biggest festival, Þjóðhátíð, is held on the first weekend of August.', 'Herjólfsdalur', 30, 60),
      ],
      hubs="    air: [['Vestmannaeyjar (VEY)', '베스트만나에이야르 공항 (VEY)']],\n    port: [['Vestmannaeyjahöfn', '베스트만나에이야르 항구', '란데이야회픈행 헤르욜퓌르 페리|Herjólfur ferry to Landeyjahöfn']],\n",
      itinerary={'days': [['', 1, 2, 4, 3]]},
      season='5~8월엔 퍼핀과 배편이 좋고, 8월 첫 주말엔 축제로 숙소가 일찍 찹니다.|May to August for puffins and ferries; rooms fill early for the festival on the first weekend of August.',
      stay=[('헤이마에이 항구 주변', 'Heimaey harbour', 'Heimaey', '걸어서 다 보기|Everything on foot', '페리 선착장과 박물관, 식당이 모두 가깝습니다.|The ferry pier, museums and restaurants are all close by.'),
            ('본토에서 다녀오기', 'Day trip from the mainland', 'Landeyjahöfn', '당일치기|Day trip', '란데이야회픈에서 페리로 약 35분이라 남해안 여행 중 하루 다녀올 수 있습니다.|About 35 minutes by ferry from Landeyjahöfn, so easy to visit for a day on a south-coast trip.')],
      routes=R("  r('reykjavik', 'vestmannaeyjar', 'mixed', 180, { n: '버스로 란데이야회픈, 페리 약 35분|bus to Landeyjahöfn, then a ~35 min ferry' }),\n"),
      transit=dict(modes=['walk', 'ferry', 'bus', 'taxi'], ko='섬 안은 걸어서 다닙니다. 본토와는 헤르욜퓌르 페리로 오가며, 날씨가 나쁘면 더 먼 토를라욱스회픈 항구로 바뀌기도 합니다.', en='Walk around the island; the Herjólfur ferry links it to the mainland, switching to the more distant port of Þorlákshöfn in bad weather.')),
    C(id='hofn', after='vik', ko='회픈', en='Höfn', native='Höfn í Hornafirði', lat=64.2539, lng=-15.2082,
      blurb=['남동부 해안의 항구 마을로 랍스터(랑구스틴) 요리가 유명합니다. 유럽 최대 빙하 바트나요퀴들 아래에 있어 빙하 호수 요퀼사우를론과 다이아몬드 해변이 가깝습니다.',
             'A harbour town on the southeast coast famous for langoustine, beneath Europe’s largest glacier, Vatnajökull, and close to the Jökulsárlón glacier lagoon and Diamond Beach.'],
      highlights=[
          H('요퀼사우를론 빙하 호수', 'Jökulsárlón', '빙하에서 떨어져 나온 빙산이 떠다니는 호수로, 여름엔 보트를 타고 빙산 사이를 지납니다.', 'A lagoon where icebergs calved from the glacier drift; in summer, boats weave between them.', 'Jökulsárlón', 90, 150,
            n='회픈에서 서쪽으로 차로 약 1시간입니다. 보트는 대체로 봄~가을에만 다닙니다.|About an hour west of Höfn by car; boats run roughly spring to autumn.', group=DAY),
          H('다이아몬드 해변', 'Diamond Beach', '요퀼사우를론에서 바다로 떠내려온 얼음 조각들이 검은 모래 위에서 보석처럼 반짝이는 해변입니다.', 'The black-sand beach where ice from Jökulsárlón washes up and glitters like jewels.', 'Diamond Beach Iceland', 30, 60,
            n='빙하 호수 바로 건너편이라 함께 둘러봅니다. 파도에 주의하세요.|Right across the road from the lagoon; watch out for waves.', group=DAY),
          H('스카프타펠과 스바르티포스', 'Skaftafell & Svartifoss', '바트나요퀴들 국립공원 스카프타펠 지역의 산길로, 검은 주상절리 아래로 떨어지는 폭포 스바르티포스까지 걷습니다.', 'Trails in the Skaftafell area of Vatnajökull National Park, leading to Svartifoss, a waterfall framed by black basalt columns.', 'Svartifoss', 120, 180,
            n='회픈에서 서쪽으로 약 130km, 폭포까지 왕복 약 1시간 30분 걷습니다.|About 130 km west of Höfn; the walk to the waterfall takes about 1 hr 30 min return.', group=DAY),
          H('스토크스네스와 베스트라호른', 'Stokksnes & Vestrahorn', '검은 모래 언덕 너머로 뾰족한 베스트라호른산이 솟은 곶으로, 사진 명소입니다.', 'A headland where the jagged Vestrahorn mountain rises behind black sand dunes—a favourite photo spot.', 'Stokksnes', 60, 90,
            n='사유지라 입구 카페에서 입장료를 냅니다.|It is private land, with an entry fee paid at the café by the gate.'),
          H('빙하 얼음 동굴 투어', 'Ice cave tour', '겨울에 빙하 속에 생기는 푸른 얼음 동굴을 가이드와 함께 들어가 봅니다.', 'Enter the blue ice caves that form inside the glacier in winter, with a guide.', 'Vatnajökull ice cave', 180, 240,
            n='대체로 11월~3월에만 가능하며 반드시 가이드 투어로 갑니다.|Usually November to March only, and only on a guided tour.', group=TOUR),
      ],
      hubs="    air: [['Hornafjörður (HFN)', '호르나피외르뒤르 공항 (HFN)']],\n",
      itinerary={'days': [['', 4]], 'trips': [['요퀼사우를론과 다이아몬드 해변|Jökulsárlón & Diamond Beach', 1, 2], ['스카프타펠|Skaftafell', 3], ['얼음 동굴 투어|Ice cave tour', 5]]},
      season='11~3월엔 얼음 동굴, 6~8월엔 빙하 호수 보트와 산행이 좋습니다.|November to March for ice caves; June to August for lagoon boats and hiking.',
      stay=[('회픈 마을', 'Höfn town', 'Höfn', '항구 마을|Harbour town', '식당과 슈퍼가 있는 이 지역 가장 큰 마을입니다.|The largest town in the area, with restaurants and a supermarket.'),
            ('빙하 호수 근처', 'Near Jökulsárlón', 'Jökulsárlón', '자연 속 숙소|Countryside lodges', '빙하 호수와 스카프타펠 사이 농장 숙소에 묵으면 이른 아침에 둘러보기 좋습니다.|Farm guesthouses between the lagoon and Skaftafell make early starts easy.')],
      routes=R("  r('vik', 'hofn', 'bus', 270),\n  r('reykjavik', 'hofn', 'flight', 60),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을 안은 걸어서 다닙니다. ' + CAR.split('|')[0], en='Walk around town. ' + CAR.split('|')[1])),
    C(id='stykkisholmur', after='hofn', ko='스티키스홀뮈르', en='Stykkishólmur', native='Stykkishólmur', lat=65.0750, lng=-22.7300,
      blurb=['스나이펠스네스반도 북쪽의 항구 마을. 색색 목조 집과 등대 언덕이 있고, 키르큐펠산과 스나이펠스요퀴들 국립공원을 도는 반도 여행의 거점입니다.',
             'A harbour town on the north shore of the Snæfellsnes peninsula, with colourful wooden houses and a lighthouse hill, and a base for touring Kirkjufell and Snæfellsjökull National Park.'],
      highlights=[
          H('항구와 수간디스에이 등대', 'Harbour & Súgandisey', '다리로 이어진 바위섬 위 주황색 등대에 올라 항구와 브레이다피외르뒤르만의 섬들을 봅니다.', 'Climb to the orange lighthouse on the rocky islet of Súgandisey, linked by a causeway, for views over the harbour and the islands of Breiðafjörður.', 'Súgandisey', 30, 60),
          H('물의 도서관', 'Library of Water', '미술가 로니 혼이 옛 도서관에 아이슬란드 빙하의 물을 담은 유리 기둥 24개를 세운 설치 작품입니다.', 'Roni Horn’s installation in the old library: 24 glass columns filled with water from Iceland’s glaciers.', 'Vatnasafn Library of Water', 30, 45,
            n='주로 여름에 열고 겨울엔 짧게 엽니다.|Open mainly in summer, with short winter hours.'),
          H('키르큐펠산', 'Kirkjufell', '그룬다르피외르뒤르 마을 옆 원뿔 모양 산으로, 앞의 작은 폭포 키르큐펠스포스와 함께 아이슬란드에서 가장 많이 찍히는 풍경입니다.', 'The cone-shaped mountain by Grundarfjörður which, with the little Kirkjufellsfoss waterfall in front, is one of Iceland’s most photographed views.', 'Kirkjufell', 45, 60,
            n='스티키스홀뮈르에서 서쪽으로 약 40km입니다.|About 40 km west of Stykkishólmur.', group=DAY),
          H('스나이펠스요퀴들 국립공원', 'Snæfellsjökull National Park', '반도 끝 빙하 화산 주변의 국립공원으로, 아르나르스타피 해안 절벽과 검은 자갈 해변 듀팔론산뒤르를 돕니다.', 'The national park around the glacier-capped volcano at the tip of the peninsula, with the sea cliffs of Arnarstapi and the black-pebble beach of Djúpalónssandur.', 'Djúpalónssandur', 240, 360, group=DAY),
          H('플라테이섬', 'Flatey', '브레이다피외르뒤르만 한가운데 옛 목조 마을이 남은 작은 섬으로, 발뒤르 페리로 갑니다.', 'A small island in the middle of Breiðafjörður with an old timber village, reached on the Baldur ferry.', 'Flatey Breiðafjörður', 240, 360,
            n='페리는 하루 한두 번이며 여름에 더 자주 다닙니다.|The ferry runs once or twice a day, more often in summer.', group=DAY),
      ],
      hubs="    port: [['Stykkishólmur', '스티키스홀뮈르 항구', '플라테이·브랸슬래퀴르행 발뒤르 페리|Baldur ferry to Flatey and Brjánslækur']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['키르큐펠과 스나이펠스네스|Kirkjufell & Snæfellsnes', 3, 4], ['플라테이섬|Flatey', 5]]},
      season='6~8월엔 백야 아래 반도 일주와 섬 배편이 좋습니다. 겨울엔 키르큐펠 위 오로라를 노립니다.|June to August for touring the peninsula and island ferries under the midnight sun; in winter, look for the aurora over Kirkjufell.',
      stay=[('스티키스홀뮈르 항구', 'Stykkishólmur harbour', 'Stykkishólmur', '항구 마을|Harbour town', '식당과 페리 선착장이 가까운 반도 북쪽의 거점입니다.|The base on the north of the peninsula, close to restaurants and the ferry.'),
            ('그룬다르피외르뒤르', 'Grundarfjörður', 'Grundarfjörður', '키르큐펠 옆|By Kirkjufell', '키르큐펠 바로 옆이라 해 뜰 때나 오로라를 보기 좋습니다.|Right by Kirkjufell, handy for sunrise or the aurora.')],
      routes=R("  r('reykjavik', 'stykkisholmur', 'bus', 150),\n"),
      transit=dict(modes=['walk', 'bus', 'ferry', 'taxi'], ko='마을 안은 걸어서 다닙니다. ' + CAR.split('|')[0], en='Walk around town. ' + CAR.split('|')[1])),
    C(id='isafjordur', after='stykkisholmur', ko='이사피외르뒤르', en='Ísafjörður', native='Ísafjörður', lat=66.0749, lng=-23.1350,
      blurb=['웨스트피오르 지방의 중심 마을. 깊은 피오르 안 모래톱 위에 자리하며, 거대한 계단식 폭포 딘얀디와 사람이 살지 않는 혼스트란디르 보호구역으로 가는 거점입니다.',
             'The main town of the Westfjords, set on a sand spit deep in a fjord, and a base for the great stepped waterfall of Dynjandi and the uninhabited Hornstrandir reserve.'],
      highlights=[
          H('웨스트피오르 해양 박물관', 'Westfjords Heritage Museum', '18세기 목조 상가 건물들에 든 박물관으로, 어업과 옛 무역 마을의 생활을 보여 줍니다.', 'A museum in 18th-century timber trading houses, showing fishing and life in the old trading post.', 'Westfjords Heritage Museum', 45, 60,
            n='주로 여름에 엽니다.|Open mainly in summer.'),
          H('딘얀디 폭포', 'Dynjandi', '높이 약 100m 절벽을 면사포처럼 퍼지며 흘러내리는 웨스트피오르 최대 폭포로, 아래쪽 작은 폭포들을 지나 걸어 오릅니다.', 'The largest waterfall in the Westfjords, fanning out like a bridal veil down a cliff about 100 m high; walk up past the smaller falls below it.', 'Dynjandi', 60, 90,
            n='이사피외르뒤르에서 차로 약 1시간 30분이며 겨울엔 길이 막힐 수 있습니다.|About 1 hr 30 min from Ísafjörður by car; the road may close in winter.', group=DAY),
          H('비구르섬', 'Vigur', '피오르 안의 작은 섬으로, 여름 보트 투어로 가서 퍼핀과 솜털오리, 옛 풍차를 봅니다.', 'A small island in the fjord visited on summer boat tours, with puffins, eider ducks and an old windmill.', 'Vigur', 180, 240,
            n='보트 투어는 여름에만 다닙니다.|Boat tours run in summer only.', group=TOUR),
          H('혼스트란디르 자연 보호구역', 'Hornstrandir', '길도 마을도 없는 북쪽 끝 반도로, 여름 배를 타고 들어가 북극여우와 새 절벽을 찾아 걷습니다.', 'The roadless, uninhabited northern peninsula, reached by summer boat, where you hike in search of Arctic foxes and bird cliffs.', 'Hornstrandir', 360, 600,
            n='6월~8월 배편으로만 들어가며, 하이킹 장비와 경험이 필요합니다.|Reached only by boat from June to August; hiking gear and experience are needed.', group=TOUR),
      ],
      hubs="    air: [['Ísafjörður (IFJ)', '이사피외르뒤르 공항 (IFJ)']],\n",
      itinerary={'days': [['', 1]], 'trips': [['딘얀디 폭포|Dynjandi', 2], ['비구르섬|Vigur', 3], ['혼스트란디르|Hornstrandir', 4]]},
      season='6~8월이 거의 유일한 성수기로, 보트 투어와 산길이 열립니다. 겨울엔 길이 자주 막힙니다.|June to August is the main season, when boat tours and trails open; roads often close in winter.',
      stay=[('이사피외르뒤르 시내', 'Ísafjörður town', 'Ísafjörður', '교통이 편한 곳|Convenient', '공항 버스와 보트 투어 선착장, 식당이 가깝습니다.|Close to the airport bus, the boat-tour pier and restaurants.')],
      routes=R("  r('reykjavik', 'isafjordur', 'flight', 40),\n"),
      transit=dict(modes=['walk', 'bus', 'ferry', 'taxi'], ko='마을 안은 걸어서 다니고, 섬과 보호구역은 보트 투어로 갑니다. ' + CAR.split('|')[0], en='Walk around town; reach the islands and reserve by boat tour. ' + CAR.split('|')[1])),
    C(id='myvatn', after='akureyri', ko='미바튼', en='Lake Mývatn', native='Mývatn', lat=65.6431, lng=-16.9110,
      blurb=['북부의 화산 호수 지대. 호숫가 레이캬흘리드 마을을 중심으로 용암 미로와 김이 솟는 지열 지대, 작은 분화구들과 노천 온천이 모여 있습니다.',
             'A volcanic lake district in the north; around the lakeside village of Reykjahlíð lie lava labyrinths, steaming geothermal fields, pseudocraters and open-air hot baths.'],
      highlights=[
          H('미바튼 네이처 배스', 'Mývatn Nature Baths', '언덕 위 우윳빛 하늘색 지열 온천으로, 블루라군보다 한적하게 호수와 화산을 내려다봅니다.', 'A milky-blue geothermal lagoon on a hillside, quieter than the Blue Lagoon, looking out over the lake and volcanoes.', 'Mývatn Nature Baths', 90, 150),
          H('딤무보르기르', 'Dimmuborgir', '‘어두운 성’이라는 이름의 용암 미로로, 기묘한 용암 기둥과 동굴 사이 산책로를 걷습니다.', 'The ‘dark castles’, a lava labyrinth with trails between strange lava pillars and caves.', 'Dimmuborgir', 60, 90),
          H('흐베리르 지열 지대', 'Hverir', '나우마퍄들산 아래 진흙이 끓고 증기가 뿜어 나오는 주황빛 지열 지대입니다. 정해진 길 밖으로 나가지 마세요.', 'An orange geothermal field below Námafjall where mud pots bubble and steam vents roar; stay on the marked paths.', 'Hverir', 30, 45),
          H('스퀴투스타다기가르 분화구', 'Skútustaðagígar', '호수 남쪽의 가짜 분화구(뿌리 없는 분화구) 무리로, 둘레 길에서 호수와 함께 내려다봅니다.', 'A cluster of pseudocraters on the south shore, viewed with the lake from a loop path.', 'Skútustaðagígar', 45, 60),
          H('크라플라와 비티 분화구', 'Krafla & Víti', '크라플라 화산 지대의 청록빛 분화구 호수 비티와 아직 김이 오르는 용암 들판 레이르흐뉘쿠르를 봅니다.', 'In the Krafla volcanic area, see the turquoise crater lake of Víti and the still-steaming lava field of Leirhnjúkur.', 'Víti Krafla', 90, 150, group=DAY),
      ],
      hubs="    air: [['Akureyri (AEY)', '아쿠레이리 공항 (AEY)', '아쿠레이리|Akureyri']],\n",
      itinerary={'days': [['', 4, 2, 3, 1]], 'trips': [['크라플라|Krafla', 5]]},
      season='6~8월엔 산행과 호수, 겨울엔 눈 덮인 용암 지대와 오로라가 좋습니다. 여름엔 작은 날파리가 많습니다.|June to August for hiking and the lake; winter for snowy lava fields and the aurora. Summer brings swarms of midges.',
      stay=[('레이캬흘리드', 'Reykjahlíð', 'Reykjahlíð', '호숫가 마을|Lakeside village', '온천과 지열 지대가 가깝고 슈퍼와 식당이 있습니다.|Close to the baths and geothermal areas, with a supermarket and restaurants.'),
            ('아쿠레이리에서 다녀오기', 'Base in Akureyri', 'Akureyri', '당일치기|Day trip', '차로 약 1시간 15분이라 아쿠레이리에서 다녀오는 투어도 많습니다.|About 1 hr 15 min by car, and many tours run from Akureyri.')],
      routes=R("  r('akureyri', 'myvatn', 'bus', 90),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='볼거리가 호수를 따라 흩어져 있습니다. ' + CAR.split('|')[0], en='The sights are spread around the lake. ' + CAR.split('|')[1])),
    C(id='seydisfjordur', after='husavik', ko='세이디스피외르뒤르', en='Seyðisfjörður', native='Seyðisfjörður', lat=65.2597, lng=-14.0103,
      blurb=['동부 피오르 끝의 예술가 마을. 무지개 길 끝의 하늘색 교회와 색색 목조 집이 있고, 덴마크·페로 제도행 국제 페리가 들어옵니다.',
             'An artists’ village at the head of an eastern fjord, with a pale-blue church at the end of a rainbow-painted street, colourful wooden houses and the international ferry to Denmark and the Faroe Islands.'],
      highlights=[
          H('무지개 길과 푸른 교회', 'Rainbow street & Blue Church', '무지개를 칠한 길 끝에 선 하늘색 목조 교회로, 여름엔 교회 음악회가 열립니다.', 'The pale-blue wooden church at the end of a rainbow-painted street, with church concerts in summer.', 'Seyðisfjarðarkirkja', 20, 45),
          H('트비쇵귀르 소리 조각', 'Tvísöngur', '마을 위 산비탈에 독일 미술가 루카스 퀴네가 만든 콘크리트 돔으로, 안에서 소리를 내면 아이슬란드 전통 2성부 노래처럼 울립니다.', 'Concrete domes on the hillside above town by the German artist Lukas Kühne, which resonate like traditional Icelandic two-part singing.', 'Tvísöngur', 45, 60,
            n='마을에서 약 20~30분 오르막을 걷습니다.|A 20–30 minute uphill walk from town.'),
          H('구푸포스 폭포', 'Gufufoss', '피야르다르헤이디 고개를 내려오는 길가의 폭포로, 피오르로 들어오는 길에 들릅니다.', 'A roadside waterfall on the descent from the Fjarðarheiði pass, a stop on the way into the fjord.', 'Gufufoss', 15, 30),
          H('뵈크 온천', 'Vök Baths', '에길스타디르 근처 우리다바튼 호수 위에 띄운 온천탕으로, 호수 물에 들어갔다 나오기를 반복합니다.', 'Hot pools floating on Lake Urriðavatn near Egilsstaðir, where you can dip into the cold lake between soaks.', 'Vök Baths', 90, 120, group=DAY),
      ],
      hubs="    air: [['Egilsstaðir (EGS)', '에길스타디르 공항 (EGS)']],\n    port: [['Seyðisfjörður', '세이디스피외르뒤르 항구', '페로 제도·덴마크행 노뢰나 페리|Norröna ferry to the Faroe Islands and Denmark']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['뵈크 온천|Vök Baths', 4]]},
      season='6~8월이 가장 좋고, 7월엔 예술 축제가 열립니다. 겨울엔 고개 길이 눈으로 막힐 수 있습니다.|June to August is best, with an arts festival in July; in winter the mountain pass can close for snow.',
      stay=[('세이디스피외르뒤르 마을', 'Seyðisfjörður village', 'Seyðisfjörður', '피오르 마을|Fjord village', '작은 마을이라 숙소가 적어 페리 날엔 일찍 예약하세요.|A small village with few rooms; book early on ferry days.'),
            ('에길스타디르', 'Egilsstaðir', 'Egilsstaðir', '교통이 편한 곳|Convenient', '동부의 교통 중심지로 공항과 슈퍼, 숙소가 많고 마을까지 차로 약 30분입니다.|The transport hub of the east, with the airport, shops and more rooms, about 30 minutes’ drive away.')],
      routes=R("  r('akureyri', 'seydisfjordur', 'mixed', 270, { n: '에길스타디르에서 버스 환승|change buses at Egilsstaðir' }),\n  r('reykjavik', 'seydisfjordur', 'flight', 60, { fa: '에길스타디르 공항|Egilsstaðir Airport' }),\n"),
      transit=dict(modes=['walk', 'bus', 'ferry', 'taxi'], ko='마을 안은 걸어서 다닙니다. 에길스타디르와는 시내버스로 오가며 하루 몇 편뿐입니다.', en='Walk around the village; a few buses a day link it with Egilsstaðir.')),
]

IS_NEW = """    cityIds: ['reykjavik', 'selfoss', 'vestmannaeyjar', 'vik', 'hofn', 'stykkisholmur', 'isafjordur', 'akureyri', 'myvatn', 'husavik', 'seydisfjordur'],
    cityGroups: [
      { title: { ko: '레이캬비크·남서부', en: 'Reykjavík & southwest' }, cityIds: ['reykjavik', 'selfoss', 'vestmannaeyjar'] },
      { title: { ko: '남부 해안', en: 'South coast' }, cityIds: ['vik', 'hofn'] },
      { title: { ko: '서부·웨스트피오르', en: 'West & Westfjords' }, cityIds: ['stykkisholmur', 'isafjordur'] },
      { title: { ko: '북부', en: 'North Iceland' }, cityIds: ['akureyri', 'myvatn', 'husavik'] },
      { title: { ko: '동부', en: 'East Iceland' }, cityIds: ['seydisfjordur'] },
    ],
"""


class J:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = J
    T.CITIES = CITIES
    T.main()
    k = rd('countries.ts')
    i = k.index("    id: 'is',")
    j = k.index('    cityGroups: [', i)
    e = k.index('    ],\n', j) + len('    ],\n')
    s = k.index('    cityIds: [', i)
    assert s < j
    k = k[:s] + IS_NEW + k[e:]
    wr('countries.ts', k)
