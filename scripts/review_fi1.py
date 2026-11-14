#!/usr/bin/env python3
"""Finland step 1 (all five cities), 2026-11-14, user approved the plan.
Fixes: Helsinki h6 (Korean said Urho Kekkonen Museum, English/map said Seurasaari), Tampere Cathedral ('시라쿠세'),
Luostarinmäki ('루오스티살미'), Porvoo h4 (duplicated the old town) now the Old Town Hall square and Porvoo Museum, and
every one-line description and blurb. New sights: Helsinki 8, Turku 3, Tampere 4, Rovaniemi 3, Porvoo 2. Helsinki gets
district groups and a 3-day itinerary; country city groups follow the regions. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
TOUR = ('투어로 다녀오기', 'On a tour')
H_SEN = ('원로원 광장과 항구', 'Senate Square & harbour')
H_TOO = ('중앙역과 퇴욀뢰', 'Central Station & Töölö')
H_SEA = ('섬과 바닷가', 'Islands & seafront')

BLURB = {
 'helsinki': ('발트해에 면한 핀란드의 수도. 흰 대성당이 선 원로원 광장과 항구 시장, 바위를 깎은 교회, 디자인 지구가 있고 배로 15분이면 바다 요새 수오멘린나입니다.',
              'Finland’s capital on the Baltic, with the white cathedral on Senate Square, the harbour market, a church carved into rock and the Design District, and the sea fortress of Suomenlinna 15 minutes away by ferry.'),
 'turku': ('핀란드에서 가장 오래된 도시이자 옛 수도. 아우라강을 따라 중세 성과 대성당이 이어지고, 2만 개 섬의 군도로 나가는 관문입니다.',
           'Finland’s oldest city and former capital, with a medieval castle and cathedral along the Aura River and the gateway to an archipelago of some 20,000 islands.'),
 'tampere': ('두 호수 사이 급류 옆에 붉은 벽돌 공장이 늘어선 옛 산업 도시. 무민 박물관과 전망탑, 호숫가 공중 사우나가 있습니다.',
             'A former mill town of red-brick factories beside the rapids between two lakes, with the Moomin Museum, an observation tower and lakeside public saunas.'),
 'rovaniemi': ('북극권 바로 아래 라플란드의 주도. 북극권 선 위의 산타클로스 마을과 북극 박물관 아르크티쿰이 있고, 겨울엔 오로라와 썰매 투어의 거점입니다.',
               'Lapland’s capital just below the Arctic Circle, with Santa Claus Village on the Circle itself and the Arktikum museum, and in winter a base for northern lights and sled tours.'),
 'porvoo': ('헬싱키 동쪽 약 50km의 중세 마을. 강가에 늘어선 붉은 창고와 색색 목조 집, 언덕 위 대성당이 있어 당일치기로 많이 갑니다.',
            'A medieval town about 50 km east of Helsinki, with red storehouses along the river, coloured wooden houses and a hilltop cathedral; a popular day trip.'),
}

REWRITE = {
 'helsinki-h1': (None, None, '원로원 광장 계단 위에 선 1852년 완공 흰 신고전주의 성당으로, 초록 돔이 헬싱키의 상징입니다.', 'The white Neoclassical cathedral completed in 1852 at the top of the Senate Square steps; its green domes are the symbol of Helsinki.'),
 'helsinki-h2': (None, None, '18세기 스웨덴이 섬 여섯 개에 쌓은 바다 요새로 세계유산입니다. 성벽과 대포, 박물관을 둘러보고 바위 해안에서 쉽니다.', 'The sea fortress built across six islands under 18th-century Swedish rule, a World Heritage Site; walk the ramparts, cannons and museums and rest on the rocky shore.'),
 'helsinki-h3': (None, None, '시내 남쪽 25개 남짓 거리에 핀란드 디자이너 가게와 빈티지, 갤러리가 모인 지구로, 디자인 박물관도 있습니다.', 'Some 25 streets south of the centre packed with Finnish designer shops, vintage stores and galleries, plus the Design Museum.'),
 'helsinki-h4': (None, None, '남항 앞 광장의 노천 시장으로, 연어 수프와 베리를 팔고 수오멘린나행 배가 여기서 떠납니다.', 'The open-air market on the South Harbour, selling salmon soup and berries; ferries to Suomenlinna leave from here.'),
 'helsinki-h5': (None, None, '1969년 화강암 바위를 파내 지은 교회로, 구리 돔 아래 자연 바위벽 덕에 음향이 좋아 음악회도 열립니다.', 'A church dug into granite bedrock in 1969; under its copper dome, the bare rock walls give acoustics good enough for concerts.'),
 'helsinki-h6': ('세우라사리 야외 박물관', 'Seurasaari Open-Air Museum', '다리로 건너는 숲 섬에 전국에서 옮겨 온 옛 농가와 교회를 모은 야외 박물관으로, 섬은 1년 내내 무료로 걸을 수 있습니다.', 'An open-air museum of old farmhouses and a church moved from across Finland, on a wooded island reached by footbridge; the island itself is free to walk year-round.'),
 'helsinki-h7': (None, None, '마켓 광장 옆 노란 궁전으로, 1820년대 상인 저택을 러시아 황제의 궁으로 고쳤고 지금은 대통령 집무 공간입니다. 보통 밖에서 봅니다.', 'The yellow palace beside Market Square, an 1820s merchant’s house converted for the Russian tsar and now used by the President; usually seen from outside.'),
 'turku-h1': (None, None, '1280년경 아우라강 어귀에 세운 핀란드 최대급 중세 성으로, 성 안의 방과 예배당이 박물관입니다.', 'One of Finland’s largest medieval castles, founded around 1280 at the mouth of the Aura River, with its halls and chapel now a museum.'),
 'turku-h2': (None, None, '1300년 축성된 핀란드 루터교의 총본산으로, 붉은 벽돌 탑이 시내 어디서나 보입니다.', 'The mother church of the Finnish Lutheran Church, consecrated in 1300, whose red-brick tower is visible across the city.'),
 'turku-h3': (None, None, '시내를 가로지르는 강으로, 둑을 따라 카페와 배 식당이 이어지고 1904년부터 다닌 무료 나룻배 푀리로 건넙니다.', 'The river through the centre, lined with cafés and boat restaurants; cross on the Föri, a free ferry running since 1904.'),
 'turku-h4': ('루오스타린매키 수공예 박물관', 'Luostarinmäki Handicrafts Museum', '1827년 대화재에서 살아남은 목조 동네를 그대로 박물관으로 만든 곳으로, 옛 공방에서 장인들이 일하는 모습을 봅니다.', 'The one wooden neighbourhood that survived the Great Fire of 1827, kept as a museum where craftspeople work in the old workshops.'),
 'turku-h5': (None, None, '강 하구의 해양 박물관으로, 범선 수오멘 유트센 등 박물관 배에 올라 볼 수 있습니다.', 'The maritime museum near the river mouth, where you can board museum ships such as the tall ship Suomen Joutsen.'),
 'tampere-h1': (None, None, '빙하가 남긴 긴 언덕 위의 1929년 전망탑으로, 두 호수를 내려다보고 1층 카페의 도넛이 유명합니다.', 'A 1929 observation tower on a glacial ridge looking over two lakes, famous for the doughnuts in its café.'),
 'tampere-h2': (None, None, '탐페레 홀 안의 무민 박물관으로, 토베 얀손의 원화와 손으로 만든 무민 골짜기 모형을 전시합니다.', 'The Moomin Museum inside Tampere Hall, showing Tove Jansson’s original illustrations and hand-made Moominvalley tableaux.'),
 'tampere-h3': (None, None, '시내 한가운데를 흐르는 급류로, 양쪽에 붉은 벽돌 직물 공장이 늘어서 ‘핀란드의 맨체스터’라 불렸습니다.', 'The rapids through the city centre, lined with red-brick textile mills that earned Tampere the name ‘Manchester of Finland’.'),
 'tampere-h4': ('탐페레 대성당', None, '1907년 국민낭만주의 양식의 화강암 성당으로, 휴고 심베리의 벽화 ‘상처 입은 천사’와 ‘죽음의 정원’이 있습니다.', 'A 1907 National Romantic granite church with Hugo Simberg’s frescoes The Wounded Angel and The Garden of Death.'),
 'tampere-h5': (None, None, '호숫가의 놀이공원 단지로, 168m 전망탑 내시넬라와 수족관, 천문관이 있습니다. 놀이기구는 여름에만 엽니다.', 'A lakeside amusement park with the 168 m Näsinneula tower, an aquarium and a planetarium; the rides open in summer only.'),
 'rovaniemi-h1': (None, None, '시내 북쪽 약 8km 북극권 선 위의 마을로, 산타의 집무실에서 산타를 만나고 산타 우체국에서 편지를 부칩니다.', 'The village on the Arctic Circle about 8 km north of town, where you meet Santa in his office and send letters from Santa’s post office.'),
 'rovaniemi-h2': (None, None, '산타클로스 마을 한가운데 그어진 북극권 선으로, 선을 넘으며 사진을 찍고 북극권 통과 증명서를 받을 수 있습니다.', 'The Arctic Circle line drawn through the middle of Santa Claus Village; step across it for a photo and pick up a crossing certificate.'),
 'rovaniemi-h3': (None, None, '강가로 뻗은 긴 유리 복도가 상징인 박물관으로, 북극 자연과 사미 문화, 라플란드 역사를 다룹니다.', 'A museum known for its long glass corridor reaching towards the river, covering Arctic nature, Sámi culture and Lapland’s history.'),
 'rovaniemi-h4': (None, None, '강 건너 시내 동쪽의 언덕으로, 겨울엔 스키장, 여름엔 하이킹 길과 전망대가 됩니다.', 'The hill across the river east of town, a ski slope in winter and a network of hiking trails and viewpoints in summer.'),
 'porvoo-h1': (None, None, '중세 거리 모양 그대로 18세기 목조 집과 자갈길이 이어지는 구시가로, 핀란드에서 손꼽히게 잘 남은 옛 동네입니다.', 'The old town keeps its medieval street plan, with 18th-century wooden houses and cobbled lanes, one of the best-preserved in Finland.'),
 'porvoo-h2': (None, None, '언덕 위 15세기 석조 성당으로, 1809년 러시아 황제가 핀란드 의회를 연 곳입니다. 2006년 화재 뒤 복원했습니다.', 'The 15th-century stone church on the hilltop where the Russian emperor opened the Finnish Diet in 1809, restored after a 2006 fire.'),
 'porvoo-h3': (None, None, '포르보강을 따라 늘어선 붉은 목조 창고로, 건너편 강둑에서 보는 풍경이 마을의 대표 사진입니다.', 'The red wooden storehouses along the Porvoo River; the view from the opposite bank is the town’s classic picture.'),
 'porvoo-h4': ('구시청 광장과 포르보 박물관', 'Old Town Hall & Porvoo Museum', '구시가 중심 광장의 1764년 옛 시청 건물로, 지금은 도시 역사와 미술을 보여 주는 포르보 박물관입니다.', 'The 1764 Old Town Hall on the main square of the old town, now the Porvoo Museum of local history and art.'),
}

ADD = {
 'helsinki': [
  (8, S('우스펜스키 대성당', 'Uspenski Cathedral', '카타야노카 언덕 위의 1868년 붉은 벽돌 정교회 성당으로, 서유럽에서 가장 큰 정교회 성당으로 꼽힙니다.', 'The red-brick Orthodox cathedral of 1868 on the Katajanokka hill, often called the largest Orthodox church in Western Europe.', 'Uspenski Cathedral', 20, 30)),
  (9, S('오디 중앙 도서관', 'Oodi Central Library', '2018년 국회의사당 맞은편에 문을 연 물결 모양 도서관으로, 3층 ‘책의 천국’과 3D 프린터, 재봉틀까지 누구나 무료로 씁니다.', 'The wave-shaped library opened in 2018 opposite Parliament, with a top-floor ‘book heaven’ and free 3D printers and sewing machines for all.', 'Oodi Helsinki Central Library', 30, 60)),
  (10, S('아테네움 미술관', 'Ateneum', '1887년 건물의 국립 미술관으로, 갈렌칼렐라·셰르프베크 등 핀란드 황금기 회화와 반 고흐 작품을 봅니다.', 'The national art museum in an 1887 building, with Finland’s Golden Age painting by Gallen-Kallela and Schjerfbeck, plus a Van Gogh.', 'Ateneum Art Museum', 90, 120)),
  (11, S('키아스마 현대 미술관', 'Kiasma', '건축가 스티븐 홀이 설계한 1998년 곡선 건물의 현대 미술관으로, 핀란드와 북유럽 현대 미술을 전시합니다.', 'The contemporary art museum in Steven Holl’s curving 1998 building, showing Finnish and Nordic contemporary art.', 'Kiasma Museum of Contemporary Art', 60, 90)),
  (12, S('캄피 침묵 예배당', 'Kamppi Chapel', '번화한 나린카 광장 한쪽의 둥근 목조 예배당으로, 종교와 상관없이 누구나 들어가 조용히 쉴 수 있습니다.', 'A rounded wooden chapel on busy Narinkka Square where anyone, of any faith, can step in for a moment of silence.', 'Kamppi Chapel', 10, 20,
        n='무료이며 안에서는 말하지 않습니다.|Free; no talking inside.')),
  (13, S('뢰윌뤼 사우나', 'Löyly', '헤르네사리 바닷가의 나무 조각 같은 건물에 든 공중 사우나 겸 식당으로, 사우나 뒤 계단으로 바다에 들어갑니다.', 'A public sauna and restaurant in a sculpted timber building on the Hernesaari shore; after the sauna, take the steps down into the sea.', 'Löyly Helsinki', 120, 180,
        n='수영복을 입는 남녀 공용 사우나이며 시간대별 예약을 권합니다.|Mixed sauna, swimsuits on; booking a time slot is recommended.')),
  (14, S('시벨리우스 기념비', 'Sibelius Monument', '작곡가 시벨리우스를 기려 1967년 에일라 힐투넨이 600개 넘는 강철 관으로 만든 조형물로, 바닷가 공원에 있습니다.', 'Eila Hiltunen’s 1967 tribute to the composer Sibelius, made of more than 600 steel pipes, in a seaside park.', 'Sibelius Monument', 15, 30)),
  (15, S('누크시오 국립공원', 'Nuuksio National Park', '헬싱키 근교의 호수와 숲 국립공원으로, 표시된 산책로를 걷고 자연 센터 할티아에서 핀란드 자연 전시를 봅니다.', 'A national park of lakes and forest near Helsinki: walk the marked trails and see the Finnish nature exhibition at the Haltia centre.', 'Nuuksio National Park', 240, 360, group=DAY,
        n='에스포역에서 버스를 갈아타 시내에서 약 1시간입니다.|About an hour from the centre by train to Espoo and then a bus.')),
 ],
 'turku': [
  (6, S('아보아 베투스 & 아르스 노바', 'Aboa Vetus & Ars Nova', '땅속에서 발굴한 중세 투르쿠의 거리와 집터 위에 현대 미술관을 함께 둔 박물관입니다.', 'A museum combining the excavated streets and house foundations of medieval Turku underground with a contemporary art museum above.', 'Aboa Vetus Ars Nova', 60, 90)),
  (7, S('시벨리우스 박물관', 'Sibelius Museum', '대성당 옆 1968년 콘크리트 건물의 음악 박물관으로, 세계 각지의 악기와 시벨리우스 관련 자료를 전시합니다.', 'A music museum in a 1968 concrete building by the cathedral, with instruments from around the world and material on Sibelius.', 'Sibelius Museum Turku', 45, 60)),
  (8, S('투르쿠 군도', 'Turku archipelago', '2만 개 남짓한 섬이 이어지는 군도로, 다리와 배로 섬을 잇는 ‘군도 순환로’를 따라 섬마을에 다녀옵니다.', 'An archipelago of some 20,000 islands; follow the Archipelago Trail of bridges and ferries out to the island villages.', 'Parainen', 300, 480, group=DAY,
        n='가장 가까운 섬마을 파라이넨까지는 버스로 약 30~40분이며, 여름엔 시내에서 군도 유람선도 다닙니다.|Parainen, the nearest island town, is about 30–40 min by bus; in summer archipelago cruises leave from the centre.')),
 ],
 'tampere': [
  (6, S('바프릭키 박물관 센터', 'Vapriikki', '옛 공장 건물의 박물관 센터로, 핀란드 아이스하키 명예의 전당과 자연사·광물 박물관 등을 한 표로 봅니다.', 'A museum centre in old factory halls, with the Finnish Hockey Hall of Fame, natural history and mineral museums and more on one ticket.', 'Museum Centre Vapriikki', 90, 150)),
  (7, S('핀레이슨 지구', 'Finlayson area', '1820년 스코틀랜드인 핀레이슨이 세운 면직 공장 단지로, 지금은 박물관과 영화관, 카페가 들어 있습니다.', 'The cotton-mill complex founded by the Scot James Finlayson in 1820, now filled with museums, a cinema and cafés.', 'Finlayson Tampere', 45, 90)),
  (8, S('피스팔라', 'Pispala', '두 호수 사이 언덕 비탈에 목조 집이 층층이 들어선 옛 노동자 동네로, 골목 계단에서 호수가 보입니다.', 'An old workers’ district of wooden houses stacked up the ridge between two lakes, with lake views from its stepped lanes.', 'Pispala', 60, 90)),
  (9, S('라우하니에미 공중 사우나', 'Rauhaniemi folk spa', '1929년부터 이어 온 호숫가 공중 사우나로, 사우나 뒤 1년 내내 호수에 들어갑니다. 겨울엔 얼음 구멍입니다.', 'A lakeside public sauna running since 1929; after the sauna, dip in the lake all year round—through a hole in the ice in winter.', 'Rauhaniemi kansankylpylä', 90, 120,
        n='남녀 공용 사우나이며 수영복을 입습니다.|Mixed sauna; swimsuits on.')),
 ],
 'rovaniemi': [
  (5, S('코룬디 문화의 집', 'Korundi', '1933년 우편 버스 차고였던 붉은 벽돌 건물로, 로바니에미 미술관과 라플란드 실내악단 공연장이 있습니다.', 'A red-brick former post-bus depot of 1933, now home to the Rovaniemi Art Museum and the Lapland Chamber Orchestra’s concert hall.', 'Korundi House of Culture', 45, 60)),
  (6, S('라누아 야생동물원', 'Ranua Wildlife Park', '시내 남쪽 약 80km의 북극 동물원으로, 북극곰과 순록, 스라소니 등 북극권 동물을 숲길을 따라 봅니다.', 'An Arctic wildlife park about 80 km south of town, where forest paths lead past polar bears, reindeer, lynx and other northern animals.', 'Ranua Wildlife Park', 180, 300, group=DAY,
        n='시내에서 버스로 약 1시간 거리입니다.|About an hour from town by bus.')),
  (7, S('오로라 투어', 'Northern lights tour', '9월~3월 맑은 밤, 시내 불빛을 벗어나 오로라를 찾아가는 투어가 매일 밤 출발합니다.', 'On clear nights from September to March, tours leave nightly to look for the aurora away from the town lights.', 'Rovaniemi northern lights tour', 180, 240, group=TOUR,
        n='날씨에 따라 못 볼 수도 있습니다. 미리 예약하세요.|Sightings depend on the weather; book ahead.')),
 ],
 'porvoo': [
  (5, S('루네베리의 집', 'Runeberg’s Home', '핀란드 국가의 작사가인 국민 시인 루네베리가 살던 집으로, 1882년부터 가구를 그대로 둔 박물관입니다.', 'The home of the national poet J. L. Runeberg, who wrote the words of Finland’s anthem, kept with its furniture as a museum since 1882.', 'Runeberg’s Home Porvoo', 30, 60)),
  (6, S('알베르트 에델펠트 화실', 'Albert Edelfelt’s Studio', '시내 남쪽 하이코에 있는 화가 에델펠트의 1883년 여름 화실로, 그가 26번의 여름을 보낸 곳이 박물관이 되었습니다.', 'The painter Albert Edelfelt’s 1883 summer studio at Haikko, south of town, where he spent 26 summers, now a museum.', 'Albert Edelfelt Studio Museum', 45, 60,
        n='5월~10월 초 여름에만 열고 월요일은 쉽니다.|Open only from May to early October, closed on Mondays.')),
 ],
}

IT = [
 ("  helsinki: { days: [['', 4, 7, 1, 3, 5]], trips: [['수오멘린나|Suomenlinna', 2]] },\n",
  "  helsinki: {\n    days: [\n      ['원로원 광장과 항구|Senate Square & harbour', 4, 1, 8, 7, 3],\n      ['중앙역과 퇴욀뢰|Central Station & Töölö', 10, 9, 11, 12, 5, 14, 6],\n      ['수오멘린나와 바닷가|Suomenlinna & seafront', 2, 13],\n    ],\n    trips: [['누크시오 국립공원|Nuuksio National Park', 15]],\n  },\n"),
 ("  turku: [2, 4, 3, 5, 1],\n", "  turku: { days: [['', 2, 7, 6, 4, 3], ['', 5, 1]], trips: [['투르쿠 군도|Turku archipelago', 8]] },\n"),
 ("  tampere: {\n    days: [\n      ['시내|City centre', 4, 3, 2, 1],\n      ['새르캔니에미|Särkänniemi', 5],\n    ],\n  },\n",
  "  tampere: {\n    days: [\n      ['시내|City centre', 3, 7, 6, 4, 2],\n      ['피니키와 피스팔라|Pyynikki & Pispala', 1, 8, 9],\n      ['새르캔니에미|Särkänniemi', 5],\n    ],\n  },\n"),
 ("  rovaniemi: { days: [['', 3, 4]], trips: [['산타클로스 마을|Santa Claus Village', 1, 2]] },\n",
  "  rovaniemi: {\n    days: [['', 3, 5, 4]],\n    trips: [\n      ['산타클로스 마을|Santa Claus Village', 1, 2],\n      ['라누아 야생동물원|Ranua Wildlife Park', 6],\n      ['오로라 투어|Northern lights tour', 7],\n    ],\n  },\n"),
 ("  porvoo: [3, 1, 4, 2],\n", "  porvoo: { days: [['', 3, 1, 2, 4, 5]], trips: [['알베르트 에델펠트 화실|Albert Edelfelt’s Studio', 6]] },\n"),
]

HELSINKI = [(4, H_SEN), (1, H_SEN), (8, H_SEN), (7, H_SEN), (3, H_SEN),
            (10, H_TOO), (9, H_TOO), (11, H_TOO), (12, H_TOO), (5, H_TOO), (14, H_TOO), (6, H_TOO),
            (2, H_SEA), (13, H_SEA), (15, DAY)]
SMALL = ['turku', 'tampere', 'rovaniemi', 'porvoo']

FI_OLD = "    cityIds: ['helsinki', 'turku', 'tampere', 'rovaniemi', 'porvoo'],\n"
FI_NEW = """    cityIds: ['helsinki', 'porvoo', 'turku', 'tampere', 'rovaniemi'],
    cityGroups: [
      { title: { ko: '남부', en: 'Southern Finland' }, cityIds: ['helsinki', 'porvoo'] },
      { title: { ko: '서해안', en: 'West coast' }, cityIds: ['turku'] },
      { title: { ko: '호수 지방', en: 'Lakeland' }, cityIds: ['tampere'] },
      { title: { ko: '라플란드', en: 'Lapland' }, cityIds: ['rovaniemi'] },
    ],
"""


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'    id: "{cid}",')
        j = c.index('    highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: ".*?",\n      en: ".*?",\n    \}',
                     f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j], flags=re.S)
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for hid, (ko, en, dko, den) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko or en:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', blk)
            blk = blk.replace(m.group(0), f'name: {{ ko: "{ko or m.group(1)}", en: "{en or m.group(2)}" }}')
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        c = c[:i] + blk + c[j:]
    it = rd('itinerary-north.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-nordic.ts')
    c = reorder(c, 'helsinki', HELSINKI)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        def g(n):
            if cid == 'rovaniemi' and n == 7:
                return TOUR
            return DAY if n in trips else None
        c = reorder(c, cid, [(n, g(n)) for n in order])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(FI_OLD) == 1
    wr('countries.ts', k.replace(FI_OLD, FI_NEW))


if __name__ == '__main__':
    main()
