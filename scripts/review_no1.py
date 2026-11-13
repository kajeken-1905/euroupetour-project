#!/usr/bin/env python3
"""Norway step 1 (all seven cities), 2026-11-13, user approved the plan.
Fixes: Korean names (Bryggen '브리겐', Fløyen '플로이엔 산', Preikestolen '프라이케스톨렌', Rockheim '록펜덴', Nidaros '니나로스'
in the Trondheim blurb), the Flåm cruise (it sails the Nærøyfjord, not only the Aurlandsfjord) and every one-line description
and blurb. New sights: Oslo 9 (Akershus, City Hall, National Museum, Fram, Kon-Tiki, Folk Museum, Karl Johans gate,
Grünerløkka, Oslofjord islands), Bergen 5, Tromsø 5, Stavanger 5, Trondheim 4, Ålesund 2, Flåm 3 (Geiranger waits for step 2
as its own city). Oslo gets district groups and a 3-day itinerary; city groups follow the regions. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
TOUR = ('투어로 다녀오기', 'On a tour')
O_CEN = ('시내 중심과 항구', 'Centre & harbour')
O_OUT = ('프로그네르·그뤼네르뢰카·홀멘콜렌', 'Frogner, Grünerløkka & Holmenkollen')
O_BYG = ('뷔그되위 박물관 반도', 'Bygdøy museum peninsula')

BLURB = {
 'oslo': ('피오르 끝에 자리한 노르웨이의 수도. 바다 위로 비스듬히 솟은 오페라 하우스와 뭉크 미술관, 바이킹·극지 탐험 박물관이 모인 뷔그되위 반도가 있습니다.',
          'Norway’s capital at the head of its fjord, with the sloping Opera House, the Munch museum and the Bygdøy peninsula of Viking and polar-exploration museums.'),
 'bergen': ('일곱 산에 둘러싸인 서부 피오르의 관문. 한자 상인의 목조 창고 브뤼겐과 생선 시장이 있는 항구 도시로, 비가 잦기로도 유명합니다.',
            'The gateway to the western fjords, ringed by seven mountains—a harbour city of Hanseatic wooden wharves at Bryggen and a fish market, and famously rainy.'),
 'tromso': ('북극권 안쪽 섬 위의 도시. 9월~4월 초엔 오로라를 보러, 5월 말~7월엔 지지 않는 해를 보러 찾습니다.',
            'An island city inside the Arctic Circle, visited for the northern lights from September to early April and the midnight sun from late May to July.'),
 'stavanger': ('뤼세피오르와 프레이케스톨렌으로 가는 남서부 항구 도시. 흰 목조 가옥이 모인 구시가와 석유 산업의 역사를 함께 봅니다.',
               'The southwestern harbour town for the Lysefjord and Preikestolen, with an old quarter of white wooden houses and the story of Norway’s oil.'),
 'trondheim': ('바이킹 시대 수도였던 중부의 대학 도시. 순례지 니다로스 대성당과 강가의 알록달록한 목조 창고가 있습니다.',
               'Central Norway’s university city and a Viking-age capital, with the pilgrim goal of Nidaros Cathedral and colourful wooden wharves along the river.'),
 'alesund': ('1904년 대화재 뒤 아르누보 양식으로 다시 지은 섬 위의 항구 도시. 악슬라 언덕에서 섬과 바다가 한눈에 보입니다.',
             'An island harbour town rebuilt in Art Nouveau style after the great fire of 1904, with views of islands and sea from Aksla hill.'),
 'flam': ('아우를란스피오르 끝의 작은 마을. 산악 열차 플롬 철도와 세계유산 내뢰위피오르 유람선이 출발합니다.',
          'A small village at the head of the Aurlandsfjord, where the Flåm Railway climbs into the mountains and cruises leave for the World Heritage Nærøyfjord.'),
}

# hid: (ko or None, en or None, dko, den)
REWRITE = {
 'oslo-h1': ('왕궁', 'Royal Palace', '카를 요한스 거리 끝 언덕 위의 19세기 왕궁으로, 매일 13시 30분 근위병 교대식이 열리고 둘레는 공원입니다.', 'The 19th-century palace at the top of Karl Johans gate, with the changing of the guard daily at 13:30 and a park around it.'),
 'oslo-h2': (None, None, '빙하를 본뜬 흰 대리석 지붕이 바다로 비스듬히 내려가는 오페라 하우스로, 지붕 위를 걸어 올라 항구를 내려다봅니다.', 'The opera house whose white marble roof slopes down into the water like a glacier; walk up onto it for harbour views.'),
 'oslo-h3': (None, None, '조각가 비겔란의 작품 200여 점이 늘어선 공원으로, 사람들이 엉켜 쌓인 화강암 기둥 ‘모놀리텐’이 중심입니다.', 'A park lined with more than 200 works by the sculptor Gustav Vigeland, centred on the Monolith, a granite column of intertwined bodies.'),
 'oslo-h4': (None, None, '옛 조선소 자리에 들어선 바닷가 지구로, 식당과 산책로가 이어지고 섬으로 가는 배가 출발합니다.', 'The waterfront district on an old shipyard, with restaurants and promenades, where the island ferries leave.'),
 'oslo-h5': (None, None, '9세기 오세베르그호 등 바이킹 배를 전시하던 박물관으로, ‘바이킹 시대 박물관’으로 새로 짓기 위해 휴관 중입니다.', 'The museum of the 9th-century Oseberg ship and other Viking ships, closed while it is rebuilt as the Museum of the Viking Age.'),
 'oslo-h6': (None, None, '항구 앞 13층 건물의 뭉크 미술관으로, ‘절규’ 여러 판본과 그림·판화를 번갈아 전시합니다.', 'The 13-storey Munch museum on the harbour, rotating versions of The Scream with his paintings and prints.'),
 'oslo-h7': (None, None, '시내 북쪽 언덕의 스키 점프대로, 꼭대기 전망대와 스키 박물관이 있고 시내와 피오르가 내려다보입니다.', 'The ski jump on the hills north of the city, with a lookout at the top, a ski museum and views over the city and fjord.'),
 'bergen-h1': ('브뤼겐', 'Bryggen', '한자 동맹 상인들이 쓰던 알록달록한 목조 창고가 부두를 따라 늘어선 세계유산 지구로, 안쪽 좁은 나무 골목에 공방과 상점이 있습니다.', 'The World Heritage wharf of colourful wooden warehouses used by Hanseatic merchants, with workshops and shops in the narrow timber passages behind.'),
 'bergen-h2': ('플뢰위엔산', 'Mount Fløyen', '시내에서 푸니쿨라 플뢰이바넨으로 오르는 산으로, 꼭대기에서 항구와 시내가 내려다보이고 숲속 산책로가 있습니다.', 'The mountain reached by the Fløibanen funicular, with views over the harbour and town and forest trails at the top.'),
 'bergen-h3': (None, None, '항구 끝 보겐 앞의 생선 시장으로, 연어와 새우, 킹크랩 등을 즉석에서 요리해 팝니다.', 'The fish market at the head of the harbour, cooking salmon, prawns and king crab on the spot.'),
 'bergen-h4': (None, None, '작곡가 그리그가 22년 동안 살던 호숫가 저택으로, 오두막 작업실과 무덤, 실내악 공연장이 있습니다.', 'The lakeside villa where the composer Edvard Grieg lived for 22 years, with his composing hut, his grave and a concert hall.'),
 'bergen-h5': (None, None, '호수 릴레룽에가르스반 둘레의 미술관 네 곳으로, 뭉크와 노르웨이 화가, 공예·디자인을 전시합니다.', 'Four art museums around the Lille Lungegårdsvann lake, showing Munch, Norwegian painters, and crafts and design.'),
 'bergen-h6': ('울리켄', 'Mount Ulriken', '일곱 산 중 가장 높은 산으로, 케이블카로 올라 피오르와 섬들까지 내려다봅니다.', 'The highest of Bergen’s seven mountains, reached by cable car, with views out to the fjords and islands.'),
 'tromso-h1': (None, None, '빙하와 오로라를 떠올리게 하는 삼각형 지붕의 1965년 성당으로, 동쪽 벽의 대형 스테인드글라스가 유명합니다. 한밤 오르간 연주회도 열립니다.', 'The 1965 church whose triangular roof recalls glaciers and the aurora, famous for its huge east window; midnight organ concerts are held here.'),
 'tromso-h2': ('피엘헤이센 케이블카', 'Fjellheisen cable car', '해발 421m 스토르스테이넨까지 오르는 케이블카로, 섬 위 시내와 피오르, 겨울엔 오로라가 보입니다.', 'The cable car up to Storsteinen, 421 m above the sea, overlooking the island city and fjords—and the aurora in winter.'),
 'tromso-h3': (None, None, '북극 피오르와 섬 사이를 배로 도는 투어로, 겨울엔 오로라·고래, 여름엔 백야 크루즈가 있습니다.', 'Boat tours among Arctic fjords and islands—aurora and whale trips in winter, midnight-sun cruises in summer.'),
 'tromso-h4': (None, None, '도미노가 쓰러진 모양의 건물에 든 북극 수족관으로, 턱수염바다물범 먹이 주기를 볼 수 있습니다.', 'The Arctic aquarium in a building like toppled dominoes, where you can watch the bearded seals being fed.'),
 'tromso-h5': (None, None, '19세기 목조 건물과 상점, 카페가 모인 섬 위 시내 중심으로, 항구 산책로로 이어집니다.', 'The island city centre of 19th-century wooden buildings, shops and cafés, leading down to the harbour promenade.'),
 'stavanger-h1': ('프레이케스톨렌', 'Preikestolen', '뤼세피오르 위로 604m 솟은 평평한 절벽 바위로, 왕복 약 4시간 산길을 걸어 오릅니다.', 'The flat-topped cliff rising 604 m above the Lysefjord, reached on a hike of about four hours return.'),
 'stavanger-h2': (None, None, '18~19세기 흰 목조 가옥 170여 채가 자갈 골목을 따라 모인 구시가입니다.', 'The old quarter of some 170 white wooden houses from the 18th and 19th centuries along cobbled lanes.'),
 'stavanger-h3': ('노르웨이 석유 박물관', 'Norwegian Petroleum Museum', '북해 석유 시추와 노르웨이 석유 산업의 역사를 보여 주는 바닷가 박물관으로, 시추선 모형 안을 걸어 봅니다.', 'The waterfront museum of North Sea drilling and Norway’s oil industry, where you walk through rig models.'),
 'stavanger-h4': ('스타방에르 대성당', 'Stavanger Cathedral', '12세기에 지은 노르웨이에서 가장 오래된 대성당으로, 중세 모습이 잘 남아 있습니다.', 'Norway’s oldest cathedral, built in the 12th century, with its medieval form well preserved.'),
 'stavanger-h5': ('보겐 항구', 'Vågen harbour', '시내 한가운데 항구로, 창고를 고친 식당과 카페가 둘러싸고 피오르 유람선이 출발합니다.', 'The harbour in the heart of town, ringed by restaurants in old warehouses, where the fjord cruises leave.'),
 'trondheim-h1': (None, None, '성 올라프 왕의 무덤 위에 세운 북유럽 최북단의 중세 고딕 대성당으로, 순례길의 종착지입니다. 서쪽 정면의 조각상들이 유명합니다.', 'The northernmost medieval Gothic cathedral, built over the grave of St Olav and the goal of the pilgrim paths, famous for its sculpted west front.'),
 'trondheim-h2': ('구시가 다리', 'Old Town Bridge', '1861년 지은 붉은 목조 다리로, 강가 창고와 바클란데트가 한눈에 보입니다.', 'The red wooden bridge of 1861, with views of the riverside wharves and Bakklandet.'),
 'trondheim-h3': (None, None, '다리 건너 언덕의 옛 노동자 동네로, 알록달록한 목조 집과 카페가 늘어서고 자전거 리프트가 있습니다.', 'The old workers’ quarter over the bridge, with colourful wooden houses, cafés and a bicycle lift.'),
 'trondheim-h4': ('강가 창고', 'Riverside wharves', '니델바강을 따라 기둥 위에 선 18~19세기 알록달록한 목조 창고들입니다.', 'Colourful 18th- and 19th-century wooden warehouses standing on stilts along the Nidelva river.'),
 'trondheim-h5': ('록하임', 'Rockheim', '옛 창고 위에 빛나는 상자를 얹은 노르웨이 대중음악 박물관으로, 직접 연주해 보는 체험이 많습니다.', 'Norway’s museum of popular music, a glowing box on top of an old warehouse, with plenty of hands-on instruments.'),
 'alesund-h1': (None, None, '시내 공원에서 계단 418개를 올라 닿는 언덕으로, 섬 위의 아르누보 시가와 바다, 산이 한눈에 보입니다.', 'The hill reached by 418 steps from the town park, overlooking the Art Nouveau town on its islands, the sea and the mountains.'),
 'alesund-h2': ('아르누보 센터', 'Jugendstilsenteret', '옛 약국 건물에 든 아르누보 센터로, 1904년 대화재와 재건 이야기를 보여 줍니다.', 'The Art Nouveau centre in an old pharmacy, telling the story of the 1904 fire and the rebuilding.'),
 'alesund-h3': (None, None, '다리와 해저 터널로 이어진 기스케·고되위 섬으로, 대리석 교회와 등대, 해변이 있습니다.', 'The islands of Giske and Godøy, linked by bridges and undersea tunnels, with a marble church, a lighthouse and beaches.'),
 'alesund-h4': (None, None, '브로순데 운하를 따라 아르누보 건물이 늘어선 항구 산책길입니다.', 'The harbour walk along the Brosundet canal, lined with Art Nouveau buildings.'),
 'flam-h1': (None, None, '해발 2m 플롬에서 867m 뮈르달까지 20km를 오르는 산악 열차로, 폭포와 협곡 사이를 지나며 효스포센 폭포 앞에 잠시 섭니다.', 'The mountain railway climbing 20 km from Flåm at 2 m to Myrdal at 867 m, past waterfalls and gorges, with a stop at the Kjosfossen falls.'),
 'flam-h2': ('내뢰위피오르 크루즈', 'Nærøyfjord cruise', '아우를란스피오르에서 세계유산 내뢰위피오르로 들어가는 유람선으로, 절벽 사이 좁은 피오르를 지나 구드방엔에 닿습니다.', 'The cruise from the Aurlandsfjord into the World Heritage Nærøyfjord, threading between cliffs to Gudvangen.'),
 'flam-h3': (None, None, '플롬에서 10km 떨어진 피오르 마을로, 오래된 돌 교회와 집들이 있습니다.', 'A fjord village 10 km from Flåm, with an old stone church and houses.'),
 'flam-h4': (None, None, '기차역과 선착장, 플롬 철도 박물관이 모인 작은 피오르 마을입니다.', 'The small fjord village where the station, the quay and the Flåm Railway Museum stand together.'),
}

ADD = {
 'oslo': [
  (8, S('아케르스후스 요새', 'Akershus Fortress', '항구를 지키는 중세 성과 요새로, 성벽 위에서 오페라 하우스와 피오르가 보입니다. 안에 저항 박물관이 있습니다.', 'The medieval castle and fortress guarding the harbour, with views of the Opera House and fjord from its walls and the Resistance Museum inside.', 'Akershus Fortress', 45, 90,
        n='요새 마당은 무료이고, 성 내부와 박물관은 유료입니다.|The grounds are free; the castle interior and the museums are ticketed.')),
  (9, S('오슬로 시청', 'Oslo City Hall', '해마다 12월 10일 노벨 평화상 시상식이 열리는 붉은 벽돌 건물로, 큰 홀이 노르웨이 역사를 그린 벽화로 덮여 있습니다.', 'The red-brick hall where the Nobel Peace Prize is awarded every 10 December, its great hall covered in murals of Norwegian history.', 'Oslo City Hall', 30, 45,
        n='무료입니다. 행사 날엔 들어가지 못할 수 있습니다.|Free; it may be closed on event days.')),
  (10, S('국립 박물관', 'National Museum', '2022년 문을 연 북유럽 최대 미술관으로, 뭉크의 ‘절규’(1893년 판)와 노르웨이·세계 미술, 디자인을 전시합니다.', 'The Nordic region’s largest art museum, opened in 2022, with Munch’s 1893 Scream, Norwegian and international art, and design.', 'Nasjonalmuseet Oslo', 120, 180)),
  (11, S('프람 박물관', 'Fram Museum', '남극과 북극 탐험에 쓰인 극지 탐험선 프람호를 통째로 들여놓은 박물관으로, 배 안까지 들어가 봅니다.', 'The museum built around the polar ship Fram, used on Arctic and Antarctic expeditions; you can walk on board.', 'Fram Museum', 60, 90)),
  (12, S('콘티키 박물관', 'Kon-Tiki Museum', '헤위에르달이 1947년 태평양을 건넌 뗏목 콘티키호와 갈대배 라2호를 전시합니다.', 'Thor Heyerdahl’s Kon-Tiki raft, which crossed the Pacific in 1947, and his reed boat Ra II.', 'Kon-Tiki Museum', 45, 60)),
  (13, S('노르웨이 민속 박물관', 'Norwegian Museum of Cultural History', '전국에서 옮겨 온 옛 농가와 목조 교회 등 150여 채를 모은 야외 박물관으로, 13세기 골 목조 교회가 대표입니다.', 'An open-air museum of some 150 buildings moved from across Norway, led by the 13th-century Gol stave church.', 'Norsk Folkemuseum', 120, 180)),
  (14, S('카를 요한스 거리', 'Karl Johans gate', '중앙역에서 왕궁까지 이어지는 오슬로의 중심 거리로, 의회와 국립 극장, 대학을 지납니다.', 'Oslo’s main street from the Central Station to the Royal Palace, past the parliament, the National Theatre and the university.', 'Karl Johans gate', 30, 45)),
  (15, S('그뤼네르뢰카', 'Grünerløkka', '아케르셀바강을 따라 옛 공장을 고친 카페와 빈티지 가게, 바가 모인 동네입니다.', 'The neighbourhood of cafés, vintage shops and bars in old mills along the Akerselva river.', 'Grünerløkka', 60, 120)),
  (16, S('오슬로 피오르 섬', 'Oslofjord islands', '시내 앞바다의 섬들로, 호베되위섬의 수도원 유적과 해변을 배로 다녀옵니다.', 'The islands just offshore—take a ferry to Hovedøya’s monastery ruins and beaches.', 'Hovedøya', 120, 240, group=DAY,
        n='아케르 브뤼게 근처 선착장에서 배가 다니고, 오슬로 대중교통 표로 탈 수 있습니다. 여름에 가장 자주 다닙니다.|Ferries leave from the pier near Aker Brygge on regular Oslo transit tickets, most often in summer.')),
 ],
 'bergen': [
  (7, S('베르겐후스 요새', 'Bergenhus Fortress', '항구 입구의 중세 요새로, 13세기 왕의 연회장 호콘 홀과 로센크란츠 탑이 남아 있습니다.', 'The medieval fortress at the harbour mouth, with Haakon’s Hall, a 13th-century royal banqueting hall, and the Rosenkrantz Tower.', 'Bergenhus Fortress', 45, 60,
        n='요새 마당은 무료이고, 호콘 홀과 탑은 유료입니다.|The grounds are free; Haakon’s Hall and the tower are ticketed.')),
  (8, S('베르겐 수족관', 'Bergen Aquarium', '노르네스 반도 끝의 수족관으로, 물개와 펭귄, 북해 물고기를 봅니다.', 'The aquarium at the tip of the Nordnes peninsula, with seals, penguins and North Sea fish.', 'Bergen Aquarium', 90, 120)),
  (9, S('판토프트 목조 교회', 'Fantoft Stave Church', '12세기 목조 교회를 옮겨 세웠다가 1992년 화재로 타서 다시 지은 교회로, 숲속에 용머리 지붕이 섭니다.', 'A 12th-century stave church moved here, burned in 1992 and rebuilt—its dragon-headed roof stands in the woods.', 'Fantoft Stave Church', 30, 45,
        n='경전철로 시내에서 약 20분이며, 내부는 여름철에만 엽니다.|About 20 min from the centre by light rail; the interior opens in summer only.')),
  (10, S('옛 베르겐 박물관', 'Old Bergen Museum', '18~19세기 베르겐 목조 집 50여 채를 옮겨 와 옛 거리를 재현한 야외 박물관입니다.', 'An open-air museum of some 50 wooden houses from 18th- and 19th-century Bergen, recreating the old streets.', 'Gamle Bergen Museum', 60, 90,
        n='여름철 위주로 엽니다.|Open mainly in summer.')),
  (11, S('하르당에르피오르', 'Hardangerfjord', '과수원과 폭포로 유명한 노르웨이 두 번째로 긴 피오르로, 노르헤임순이나 외스테세 쪽으로 하루 다녀옵니다.', 'Norway’s second-longest fjord, known for orchards and waterfalls, visited in a day via Norheimsund or Øystese.', 'Norheimsund', 360, 480, group=DAY,
        n='버스로 노르헤임순까지 약 1시간 30분이며, 여름엔 피오르 투어가 많습니다.|About 1 hr 30 by bus to Norheimsund; many fjord tours run in summer.')),
 ],
 'tromso': [
  (6, S('극지 박물관', 'Polar Museum', '항구 옆 옛 세관 창고에 든 박물관으로, 북극 사냥과 아문센·난센의 극지 탐험 이야기를 전시합니다.', 'The museum in an old customs warehouse by the harbour, telling of Arctic hunting and the polar expeditions of Amundsen and Nansen.', 'Polar Museum Tromsø', 45, 60)),
  (7, S('마크 양조장', 'Mack Brewery', '1877년 문을 연 북쪽 끝 양조장 중 하나로, 옛 맥주홀 욀할렌에서 맥주를 마시고 양조장 투어를 합니다.', 'One of the world’s northernmost breweries, founded in 1877; drink in its old beer hall, Ølhallen, or take the brewery tour.', 'Mack Brewery Tromsø', 45, 90)),
  (8, S('오로라 관측', 'Northern lights', '9월~4월 초 맑은 밤, 시내 불빛을 벗어나 오로라를 찾아가는 투어가 매일 밤 출발합니다.', 'On clear nights from September to early April, tours leave nightly to chase the aurora away from the city lights.', 'Tromsø northern lights', 300, 420, group=TOUR,
        n='날씨에 따라 수백 km를 이동하기도 합니다. 볼 수 있다는 보장은 없으니 여러 밤을 잡으세요.|Tours may drive hundreds of kilometres for clear skies; sightings are never guaranteed, so allow several nights.')),
  (9, S('개썰매와 순록 농장', 'Dog sledding & reindeer', '눈 덮인 계곡을 허스키 썰매로 달리거나, 사미족 순록 농장에서 순록 썰매와 사미 문화를 체험합니다.', 'Race through snowy valleys on a husky sled, or visit a Sámi reindeer camp for sledding and Sámi culture.', 'Tromsø dog sledding', 240, 360, group=TOUR,
        n='대체로 11월~4월에 운영하며 시내에서 픽업해 줍니다. 미리 예약하세요.|Mostly November to April, with pick-up in town; book ahead.')),
  (10, S('소마뢰위', 'Sommarøy', '흰 모래 해변과 청록빛 바다의 작은 섬 마을로, 크발뢰위섬의 산길 풍경을 지나 갑니다.', 'A small island village of white sand and turquoise water, reached by a scenic drive across Kvaløya.', 'Sommarøy', 240, 360, group=DAY,
        n='차로 약 1시간이며 버스는 드뭅니다.|About an hour by car; buses are infrequent.')),
 ],
 'stavanger': [
  (6, S('뤼세피오르 크루즈', 'Lysefjord cruise', '시내 항구에서 출발해 뤼세피오르로 들어가, 프레이케스톨렌 절벽을 아래에서 올려다보고 폭포 앞까지 가는 유람선입니다.', 'The cruise from the town harbour into the Lysefjord, looking up at Preikestolen from below and nosing up to waterfalls.', 'Lysefjord cruise Stavanger', 180, 210, group=DAY,
        n='여름엔 매일 여러 번, 겨울엔 편수가 줄어듭니다.|Several sailings a day in summer, fewer in winter.')),
  (7, S('셰라그볼텐', 'Kjeragbolten', '뤼세피오르 위 두 절벽 사이에 끼인 둥근 바위로, 왕복 6~8시간의 험한 산행 끝에 닿습니다.', 'The boulder wedged between two cliffs high above the Lysefjord, reached at the end of a tough 6–8-hour return hike.', 'Kjeragbolten', 360, 480, group=DAY,
        n='출발점 외위가르스퇼로 가는 산길은 대체로 6월~9월에만 열립니다. 쇠사슬을 잡고 오르는 구간이 있습니다.|The road to the Øygardstøl trailhead is usually open only June to September; some sections are climbed with chains.')),
  (8, S('외브레 홀메가테', 'Øvre Holmegate', '집집마다 다른 원색으로 칠한 골목으로, 카페와 바가 모여 있습니다.', 'The lane where every house is painted a different bright colour, full of cafés and bars.', 'Øvre Holmegate', 15, 20)),
  (9, S('바위 속의 검', 'Swords in Rock', '872년 하프르스피오르 전투를 기리는 높이 10m의 청동 검 세 자루로, 바닷가 바위에 꽂혀 있습니다.', 'Three 10 m bronze swords driven into the shore rock, commemorating the Battle of Hafrsfjord in 872.', 'Sverd i fjell', 20, 30,
        n='시내에서 버스로 약 20분입니다.|About 20 min from the centre by bus.')),
  (10, S('노르웨이 통조림 박물관', 'Norwegian Canning Museum', '구시가의 옛 정어리 통조림 공장으로, 생선을 훈제하던 기계와 라벨 디자인을 봅니다.', 'An old sardine cannery in the old quarter, with its smoking machinery and tin-label designs.', 'Norwegian Canning Museum', 30, 45)),
 ],
 'trondheim': [
  (6, S('대주교 궁전', 'Archbishop’s Palace', '대성당 옆의 중세 대주교 궁전으로, 노르웨이 왕실 보물(레갈리아)과 대성당 원래 조각을 전시합니다.', 'The medieval archbishops’ residence beside the cathedral, displaying the Norwegian crown regalia and original cathedral sculpture.', 'Archbishop’s Palace Trondheim', 45, 60)),
  (7, S('크리스티안스텐 요새', 'Kristiansten Fortress', '바클란데트 위 언덕의 17세기 요새로, 시내와 피오르가 내려다보입니다.', 'The 17th-century fortress on the hill above Bakklandet, overlooking the city and the fjord.', 'Kristiansten Fortress', 30, 45,
        n='요새 둘레는 무료로 언제든 걸을 수 있습니다.|The grounds are free and open at any time.')),
  (8, S('스베레스보르그 민속 박물관', 'Sverresborg Folk Museum', '트뢴델라그 지방의 옛 농가와 목조 교회 80여 채를 모은 야외 박물관으로, 중세 왕성 터 위에 있습니다.', 'An open-air museum of some 80 old farm buildings and a stave church from Trøndelag, on the site of a medieval royal castle.', 'Sverresborg Trøndelag Folkemuseum', 90, 120)),
  (9, S('뭉크홀멘섬', 'Munkholmen', '피오르 앞바다의 작은 섬으로, 수도원과 처형장, 요새로 쓰였고 여름엔 해수욕장이 됩니다.', 'A small island in the fjord that served as a monastery, an execution site and a fortress, and becomes a bathing spot in summer.', 'Munkholmen', 120, 180, group=DAY,
        n='여름에만 시내 라븐클로아 선착장에서 배가 다닙니다.|Boats run from the Ravnkloa quay in summer only.')),
 ],
 'alesund': [
  (5, S('아틀란틱 해양 공원', 'Atlantic Sea Park', '바다에 맞닿은 수족관으로, 북대서양 물고기와 수달·펭귄을 보고 바닷가 산책로가 있습니다.', 'An aquarium on the open sea, with North Atlantic fish, otters and penguins, and a shoreline walk.', 'Atlanterhavsparken', 90, 120,
        n='시내에서 버스로 약 15분입니다.|About 15 min from the centre by bus.')),
  (6, S('순뫼레 박물관', 'Sunnmøre Museum', '옛 농가와 바이킹 배 복원품 등 이 지방의 배와 생활을 보여 주는 야외 박물관입니다.', 'An open-air museum of the region’s boats and rural life, with old farmhouses and Viking-ship replicas.', 'Sunnmøre Museum', 60, 90)),
 ],
 'flam': [
  (5, S('스테가스테인 전망대', 'Stegastein viewpoint', '아우를란스피오르 위 650m 높이로 30m 튀어나온 나무 전망대로, 피오르가 발아래 펼쳐집니다.', 'A wooden platform jutting 30 m out, 650 m above the Aurlandsfjord, with the fjord spread out below.', 'Stegastein viewpoint', 60, 90,
        n='플롬에서 버스 투어나 차로 약 30분입니다. 겨울엔 길 상황을 확인하세요.|About 30 min from Flåm by bus tour or car; check road conditions in winter.')),
  (6, S('운드레달', 'Undredal', '피오르 가의 염소 치즈 마을로, 북유럽에서 가장 작은 축에 드는 목조 교회가 있습니다.', 'A goat-cheese village on the fjord, with one of the smallest stave churches in Scandinavia.', 'Undredal', 90, 120, group=DAY,
        n='플롬에서 차로 약 20분입니다.|About 20 min from Flåm by car.')),
  (7, S('오테르네스 농가', 'Otternes farms', '플롬과 아우를란 사이 언덕의 17~18세기 농가 마을로, 피오르를 내려다보며 옛 생활을 봅니다.', 'A hamlet of 17th–18th-century farmhouses on the hillside between Flåm and Aurland, looking over the fjord.', 'Otternes Bygdetun', 45, 60,
        n='대체로 여름에만 엽니다.|Usually open in summer only.')),
 ],
}

IT = [
 ("  oslo: [2, 6, 4, 1, 3],\n",
  "  oslo: {\n    days: [\n      ['시내 중심과 항구|Centre & harbour', 1, 14, 9, 10, 8, 4],\n      ['뷔그되위와 오페라 하우스|Bygdøy & the Opera House', 13, 11, 12, 2, 6],\n      ['비겔란 공원과 홀멘콜렌|Vigeland & Holmenkollen', 3, 7, 15],\n    ],\n    trips: [['오슬로 피오르 섬|Oslofjord islands', 16]],\n  },\n"),
 ("      ['브뤼겐과 플뢰위엔|Bryggen & Fløyen', 3, 1, 2, 5],\n      ['트롤하우겐과 울리켄|Troldhaugen & Ulriken', 4, 6],\n    ],\n",
  "      ['브뤼겐과 플뢰위엔|Bryggen & Fløyen', 3, 1, 7, 10, 2],\n      ['미술관과 트롤하우겐|Museums & Troldhaugen', 8, 5, 4, 9, 6],\n    ],\n    trips: [['하르당에르피오르|Hardangerfjord', 11]],\n"),
 ("  tromso: { days: [['', 5, 4, 1, 2]], trips: [['피오르 크루즈|Fjord cruise', 3]] },\n",
  "  tromso: {\n    days: [['', 5, 6, 7, 4, 1, 2]],\n    trips: [\n      ['피오르 크루즈|Fjord cruise', 3],\n      ['오로라 투어|Northern lights tour', 8],\n      ['개썰매·순록 농장|Dog sledding & reindeer', 9],\n      ['소마뢰위|Sommarøy', 10],\n    ],\n  },\n"),
 ("  stavanger: { days: [['', 2, 5, 4, 3]], trips: [['프레이케스톨렌|Preikestolen', 1]] },\n",
  "  stavanger: {\n    days: [['', 2, 10, 8, 4, 5, 3, 9]],\n    trips: [\n      ['프레이케스톨렌|Preikestolen', 1],\n      ['뤼세피오르 크루즈|Lysefjord cruise', 6],\n      ['셰라그볼텐|Kjeragbolten', 7],\n    ],\n  },\n"),
 ("  trondheim: [1, 2, 3, 4, 5],\n",
  "  trondheim: { days: [['', 1, 6, 4, 2, 3, 7], ['', 5, 8]], trips: [['뭉크홀멘섬|Munkholmen', 9]] },\n"),
 ("  alesund: { days: [['', 2, 4, 1]], trips: [['주변 섬|Nearby islands', 3]] },\n",
  "  alesund: { days: [['', 2, 4, 1], ['', 5, 6]], trips: [['주변 섬|Nearby islands', 3]] },\n"),
 ("  flam: [1, 4, 2, 3],\n",
  "  flam: { days: [['', 1, 4, 7, 3, 5]], trips: [['내뢰위피오르 크루즈|Nærøyfjord cruise', 2], ['운드레달|Undredal', 6]] },\n"),
]

OSLO = [(2, O_CEN), (6, O_CEN), (4, O_CEN), (9, O_CEN), (8, O_CEN), (10, O_CEN), (14, O_CEN), (1, O_CEN),
        (3, O_OUT), (15, O_OUT), (7, O_OUT), (13, O_BYG), (11, O_BYG), (12, O_BYG), (5, O_BYG), (16, DAY)]
SMALL = ['bergen', 'tromso', 'stavanger', 'trondheim', 'alesund', 'flam']

NO_OLD = "    cityIds: ['oslo', 'bergen', 'tromso', 'stavanger', 'trondheim', 'alesund', 'flam'],\n"
NO_NEW = """    cityIds: ['oslo', 'bergen', 'stavanger', 'flam', 'alesund', 'trondheim', 'tromso'],
    cityGroups: [
      { title: { ko: '동부', en: 'Eastern Norway' }, cityIds: ['oslo'] },
      { title: { ko: '서부 피오르', en: 'Western fjords' }, cityIds: ['bergen', 'stavanger', 'flam', 'alesund'] },
      { title: { ko: '중부', en: 'Central Norway' }, cityIds: ['trondheim'] },
      { title: { ko: '북부', en: 'Northern Norway' }, cityIds: ['tromso'] },
    ],
"""


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'    id: "{cid}",')
        j = c.index('    highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: ".*?",\n      en: ".*?",\n    \}',
                     f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j], flags=re.S)
        c = c[:i] + blk + c[j:]
    for hid, (ko, en, dko, den) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko:
            blk = re.sub(r'name: \{[^\n]*\}', f'name: {{ ko: "{ko}", en: "{en}" }}', blk)
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        c = c[:i] + blk + c[j:]
    it = rd('itinerary-north.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-nordic.ts')
    c = reorder(c, 'oslo', OSLO)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        def g(n):
            if cid == 'tromso' and n in (8, 9):
                return TOUR
            return DAY if n in trips else None
        c = reorder(c, cid, [(n, g(n)) for n in order])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(NO_OLD) == 1
    wr('countries.ts', k.replace(NO_OLD, NO_NEW))


if __name__ == '__main__':
    main()
