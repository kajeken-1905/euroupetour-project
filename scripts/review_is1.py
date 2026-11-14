#!/usr/bin/env python3
"""Iceland step 1 (all five cities), 2026-11-14, user approved the plan.
Fixes: Korean names (Harpa '하프파', Sólfar '선 보이러', Geysir '간열', Ásbyrgi spelling), Vík h5 bundled two waterfalls
(now Skógafoss; Seljalandsfoss added separately), Selfoss h5 'Selfoss town' replaced by Friðheimar, every one-line
description and blurb. New sights: Reykjavík 7, Akureyri 3, Vík 3, Húsavík 1, Selfoss 2.
Reykjavík gets groups and a 2-day itinerary; country city groups follow the regions. Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
TOUR = ('투어로 다녀오기', 'On a tour')
R_CEN = ('시내 중심', 'Downtown')
R_OUT = ('시내 밖과 바닷가', 'Beyond the centre')

BLURB = {
 'reykjavik': ('세계 최북단의 수도. 하늘로 솟은 홀그림스키르캬 교회와 바닷가 콘서트홀 하르파, 색색 지붕의 골목이 있고, 골든 서클과 남해안 투어가 여기서 출발합니다.',
               'The world’s northernmost capital, with the soaring Hallgrímskirkja, the waterfront Harpa concert hall and lanes of colourful roofs; tours to the Golden Circle and the south coast start here.'),
 'akureyri': ('북부 아이슬란드의 중심 도시. 긴 피오르 에이야피외르뒤르 끝에 자리해 고래 투어와 고다포스·미바튼 호수로 가는 거점입니다.',
              'The hub of north Iceland at the head of the long Eyjafjörður fjord, and a base for whale watching, Goðafoss and Lake Mývatn.'),
 'vik': ('남해안 링로드 위의 작은 마을. 검은 모래 해변 레이니스피아라와 바다 위 바위 기둥, 언덕 위 흰 교회가 있고, 스코가포스와 빙하가 가깝습니다.',
         'A small village on the south-coast Ring Road, with the black-sand beach of Reynisfjara, sea stacks and a white hilltop church, close to Skógafoss and the glaciers.'),
 'husavik': ('스키알팡디만의 어촌으로, 아이슬란드 고래 관찰의 수도로 불립니다. 1907년 목조 교회와 고래 박물관이 있고, 아우스비르기 협곡과 데티포스 폭포가 가깝습니다.',
             'A fishing town on Skjálfandi Bay known as Iceland’s whale-watching capital, with a 1907 wooden church and a whale museum, close to Ásbyrgi canyon and Dettifoss.'),
 'selfoss': ('레이캬비크 동쪽 약 1시간, 남부 평야의 중심 마을. 싱벨리르·게이시르·굴포스를 잇는 골든 서클과 화산 분화구, 온천을 다니는 거점입니다.',
             'The main town of the southern plains, about an hour east of Reykjavík, and a base for the Golden Circle of Þingvellir, Geysir and Gullfoss, plus craters and hot springs.'),
}

# hid: (ko, en, dko, den[, maps])
REWRITE = {
 'reykjavik-h1': (None, None, '1986년 완공한 74.5m 루터교 교회로, 주상절리를 본뜬 외관이 상징입니다. 탑 전망대에서 색색 지붕의 시내가 보입니다.', 'The 74.5 m Lutheran church completed in 1986, its façade modelled on basalt columns; the tower deck looks over the town’s colourful roofs.'),
 'reykjavik-h2': ('하르파 콘서트홀', None, '2011년 문을 연 바닷가 콘서트홀로, 올라퍼 엘리아슨이 디자인한 유리 벽이 빛에 따라 색을 바꿉니다. 로비는 무료로 둘러봅니다.', 'The waterfront concert hall opened in 2011, whose glass façade by Olafur Eliasson changes colour with the light; the lobby is free to explore.'),
 'reykjavik-h3': ('솔파르(태양의 항해자)', None, '바닷가 산책로의 강철 배 조각으로, 1990년 욘 군나르 아르나손이 ‘해를 향한 꿈의 배’로 만들었습니다. 해 질 녘 사진 명소입니다.', 'Jón Gunnar Árnason’s 1990 steel ship on the seafront path, a ‘dream boat’ to the sun and a favourite sunset photo spot.'),
 'reykjavik-h4': (None, None, '고래 관찰·퍼핀 투어 배가 떠나는 옛 항구로, 그란디 지구의 식당과 박물관이 이어집니다.', 'The old harbour where whale-watching and puffin tours depart, running into the restaurants and museums of the Grandi district.'),
 'reykjavik-h5': ('블루라군', 'Blue Lagoon', '용암 지대 한가운데 우윳빛 하늘색 지열 해수 온천으로, 케플라비크 공항에서 약 20분, 시내에서 약 45분입니다.', 'The milky-blue geothermal seawater lagoon in the middle of a lava field, about 20 min from Keflavík Airport and 45 min from Reykjavík.'),
 'akureyri-h1': (None, None, '112개 계단 위에 선 1940년 교회로, 홀그림스키르캬를 설계한 구드욘 사무엘손의 작품입니다.', 'The 1940 church at the top of 112 steps, designed by Guðjón Samúelsson, architect of Hallgrímskirkja.'),
 'akureyri-h2': (None, None, '1912년 문을 연 세계 최북단급 식물원으로, 북극권 가까이에서 자라는 수천 종의 식물을 무료로 봅니다.', 'One of the world’s northernmost botanic gardens, opened in 1912, with thousands of plant species to see free of charge.'),
 'akureyri-h3': (None, None, '에이야피외르뒤르 피오르의 항구로, 고래 관찰 배가 떠나고 크루즈선이 들어옵니다.', 'The harbour on the Eyjafjörður fjord, where whale-watching boats depart and cruise ships call.'),
 'akureyri-h4': (None, None, '용암 기둥 숲 딤무보르기르와 작은 분화구 섬들, 지열 온천이 모인 화산 호수로, 시내에서 차로 약 1시간 15분입니다.', 'A volcanic lake with the lava pillars of Dimmuborgir, pseudocrater islets and geothermal baths, about 1 hr 15 min from Akureyri by car.'),
 'akureyri-h5': (None, None, '높이 12m, 폭 30m의 반원형 폭포로, 서기 1000년 기독교를 받아들이며 옛 신상들을 던졌다는 전설에서 ‘신들의 폭포’라 부릅니다.', 'A 12 m high, 30 m wide horseshoe waterfall, called the ‘waterfall of the gods’ after the legend that pagan idols were thrown in when Iceland adopted Christianity in AD 1000.'),
 'vik-h1': ('레이니스피아라 해변', 'Reynisfjara', '검은 모래와 주상절리 동굴이 있는 해변입니다. 갑자기 밀려드는 큰 파도로 사고가 잦으니 물가에서 멀리 떨어지세요.', 'A black-sand beach with basalt-column caves; sudden sneaker waves cause accidents, so keep well back from the water.'),
 'vik-h2': (None, None, '바다 위 120m 곶으로, 거대한 바위 아치와 검은 해안선이 내려다보이고 여름엔 퍼핀이 둥지를 틉니다.', 'A 120 m headland with a huge rock arch over the sea and views along the black coast; puffins nest here in summer.'),
 'vik-h3': (None, None, '마을 위 언덕의 붉은 지붕 흰 교회로, 바다 위 바위 기둥과 함께 비크의 대표 풍경입니다.', 'The white, red-roofed church on the hill above the village, framing Vík’s classic view with the sea stacks.'),
 'vik-h4': (None, None, '비크 앞바다에 솟은 현무암 바위 기둥으로, 배를 끌다 해가 떠 돌이 된 트롤이라는 전설이 있습니다.', 'Basalt sea stacks off Vík, said in legend to be trolls caught by the sunrise while hauling a ship.'),
 'vik-h5': ('스코가포스', 'Skógafoss', '높이 60m, 폭 25m의 폭포로, 맑은 날엔 물보라에 무지개가 뜨고 옆 계단으로 꼭대기에 오릅니다.', 'A waterfall 60 m high and 25 m wide, with rainbows in the spray on sunny days and a staircase to the top.'),
 'husavik-h1': (None, None, '스키알팡디만에서 혹등고래 등을 보는 투어로, 옛 참나무 어선을 개조한 배도 다닙니다.', 'Tours on Skjálfandi Bay to see humpbacks and other whales, some aboard converted old oak fishing boats.'),
 'husavik-h2': (None, None, '1907년 십자 모양으로 지은 목조 교회로, 항구 위에 선 마을의 상징입니다.', 'The cross-shaped wooden church of 1907 above the harbour, the town’s landmark.'),
 'husavik-h3': (None, None, '항구 옆 옛 도살장 건물의 박물관으로, 대왕고래 뼈 등 고래 골격과 고래잡이 역사를 전시합니다.', 'A museum in an old slaughterhouse by the harbour, with whale skeletons, including a blue whale, and the history of whaling.'),
 'husavik-h4': ('지오시 해수 온천', 'GeoSea', '마을 북쪽 절벽 위의 지열 해수 온천으로, 탕 속에서 만과 산이 내려다보입니다.', 'Geothermal seawater baths on the cliffs north of town, looking out over the bay and mountains.'),
 'husavik-h5': ('아우스비르기 협곡', None, '길이 약 3.5km의 말굽 모양 협곡으로, 오딘의 말 슬레이프니르의 발자국이라는 전설이 있습니다. 바트나예퀴들 국립공원 안에 있습니다.', 'A horseshoe-shaped canyon about 3.5 km long, said to be the hoofprint of Odin’s horse Sleipnir, inside Vatnajökull National Park.'),
 'selfoss-h1': ('게이시르·스트로퀴르', None, '간헐천의 어원이 된 게이시르 지열 지대로, 옆의 스트로퀴르가 5~10분마다 물기둥을 뿜어 올립니다.', 'The geothermal field that gave geysers their name; neighbouring Strokkur shoots up a column of water every 5–10 minutes.'),
 'selfoss-h2': (None, None, '흐비타강이 두 단으로 꺾여 32m 협곡으로 떨어지는 폭포로, 골든 서클의 하이라이트입니다.', 'The Hvítá river drops in two steps into a 32 m canyon—the highlight of the Golden Circle.'),
 'selfoss-h3': (None, None, '930년 세계 최초급 의회 알팅기가 열린 곳이자 북미·유라시아 판이 갈라지는 틈으로, 세계유산 국립공원입니다.', 'Where the Alþingi, one of the world’s first parliaments, met from 930, and where the North American and Eurasian plates pull apart; a World Heritage national park.'),
 'selfoss-h4': (None, None, '약 3,000년 전 생긴 붉은 화산 분화구에 청록빛 호수가 고인 곳으로, 가장자리를 한 바퀴 걷습니다.', 'A red volcanic crater some 3,000 years old holding a turquoise lake; walk the rim.'),
 'selfoss-h5': ('프리드헤이마르 토마토 농장', 'Friðheimar', '지열로 데운 온실에서 토마토를 키우는 농장으로, 토마토 덩굴 사이 식당에서 토마토 수프를 먹습니다.', 'A tomato farm in geothermally heated greenhouses, where you eat tomato soup among the vines.', 'Friðheimar'),
}

ADD = {
 'reykjavik': [
  (6, S('페를란', 'Perlan', '외스크율리드 언덕의 온수 탱크 위 유리 돔 건물로, 실내 얼음 동굴과 오로라 천문관 전시, 360도 전망대가 있습니다.', 'A glass dome on hot-water tanks atop Öskjuhlíð hill, with an indoor ice cave, an aurora planetarium show and a 360° viewing deck.', 'Perlan Reykjavik', 90, 120)),
  (7, S('아이슬란드 국립박물관', 'National Museum of Iceland', '9세기 정착부터 오늘날까지 아이슬란드 역사를 유물로 보여 주는 박물관입니다.', 'The museum telling Iceland’s story through its objects, from 9th-century settlement to the present.', 'National Museum of Iceland', 60, 90)),
  (8, S('라우가베구르와 스콜라뵈르뒤스티귀르', 'Laugavegur & Skólavörðustígur', '시내 중심 쇼핑 거리로, 교회로 이어지는 스콜라뵈르뒤스티귀르엔 무지개 길이 칠해져 있습니다.', 'The main shopping street, and Skólavörðustígur leading up to the church, painted with a rainbow.', 'Skólavörðustígur', 45, 90)),
  (9, S('스카이 라군', 'Sky Lagoon', '시내 남쪽 코파보귀르 바닷가의 지열 온천으로, 바다로 이어지는 듯한 인피니티 탕과 7단계 사우나 코스가 있습니다.', 'A geothermal lagoon on the Kópavogur shore south of the centre, with an infinity edge that seems to run into the sea and a seven-step sauna ritual.', 'Sky Lagoon', 120, 180,
        n='시간대별 예약제이니 미리 예약하세요.|Entry is by time slot; book ahead.')),
  (10, S('비데이섬', 'Viðey', '배로 몇 분 거리의 섬으로, 18세기 저택과 요코 오노의 ‘이매진 피스 타워’, 리처드 세라의 조각이 있습니다.', 'An island a short ferry ride away, with an 18th-century mansion, Yoko Ono’s Imagine Peace Tower and sculptures by Richard Serra.', 'Viðey', 120, 180, group=DAY,
        n='배는 스카르파바키 선착장에서 떠나며 겨울엔 주말에만 다닙니다. 평화의 탑은 매년 10월 9일~12월 8일 밤에 불을 켭니다.|Ferries leave from Skarfabakki and run only at weekends in winter; the Peace Tower is lit each year from 9 October to 8 December.')),
  (11, S('고래 관찰 투어', 'Whale watching', '옛 항구에서 배를 타고 팍사플로이만으로 나가 밍크고래와 돌고래를 찾고, 여름엔 퍼핀 섬도 지납니다.', 'Boats from the Old Harbour head into Faxaflói Bay to look for minke whales and dolphins, passing puffin islands in summer.', 'Reykjavik whale watching', 180, 210, group=TOUR,
        n='1년 내내 다니지만 날씨로 자주 취소됩니다.|Runs year-round but is often cancelled for weather.')),
  (12, S('오로라 투어', 'Northern lights tour', '9월~4월 맑은 밤, 시내 불빛을 벗어나 오로라를 찾아가는 버스·지프 투어가 매일 밤 출발합니다.', 'On clear nights from September to April, bus and jeep tours leave nightly to look for the aurora away from the city lights.', 'Reykjavik northern lights tour', 180, 240, group=TOUR,
        n='날씨에 따라 못 볼 수도 있으며, 못 보면 다음 날 다시 태워 주는 투어가 많습니다.|Sightings depend on the weather; many tours offer a free retry if you see nothing.')),
 ],
 'akureyri': [
  (6, S('흐리세이섬', 'Hrísey', '에이야피외르뒤르 피오르 가운데의 작은 섬으로, 차 없는 마을과 새 보호구역을 걷습니다.', 'A small island in the middle of Eyjafjörður with an almost car-free village and bird sanctuary to walk.', 'Hrísey', 180, 300, group=DAY,
        n='시내에서 북쪽으로 약 35km 아르스코그산뒤르에서 배로 약 15분입니다.|About 15 min by ferry from Árskógssandur, some 35 km north of town.')),
  (7, S('크리스마스 하우스', 'Christmas Garden', '시내 남쪽 약 10km의 빨간 집으로, 1년 내내 크리스마스 장식과 아이슬란드 크리스마스 이야기를 보여 주는 가게입니다.', 'A red house about 10 km south of town, a year-round Christmas shop telling the tales of Iceland’s Yule Lads.', 'Jólagarðurinn', 30, 45)),
  (8, S('아쿠레이리 수영장', 'Akureyri swimming pool', '물 미끄럼틀과 온탕이 있는 야외 지열 수영장으로, 동네 사람들처럼 온탕에서 쉬어 갑니다.', 'An outdoor geothermal pool with water slides and hot tubs—relax in the hot pots like the locals.', 'Sundlaug Akureyrar', 60, 120)),
 ],
 'vik': [
  (6, S('셀랴란즈포스', 'Seljalandsfoss', '높이 약 60m의 폭포로, 폭포 뒤로 난 길을 따라 물줄기 안쪽을 한 바퀴 돕니다.', 'A waterfall about 60 m high with a path that loops right behind the falling water.', 'Seljalandsfoss', 45, 60, group=DAY,
        n='겨울엔 길이 얼어 폭포 뒤쪽을 막기도 합니다. 물보라에 젖으니 방수 옷을 챙기세요.|In winter the path behind the fall may be closed for ice; bring waterproofs for the spray.')),
  (7, S('솔헤이마요퀴들 빙하 걷기', 'Sólheimajökull glacier walk', '미르달스요퀴들 빙하에서 흘러내린 빙하 혀 위를 가이드와 함께 아이젠을 신고 걷습니다.', 'Walk with a guide and crampons on an outlet tongue of the Mýrdalsjökull ice cap.', 'Sólheimajökull', 180, 240, group=TOUR,
        n='빙하는 반드시 가이드와 함께 올라야 합니다.|Only go onto the glacier with a guide.')),
  (8, S('피야드라르글리우푸르 협곡', 'Fjaðrárgljúfur', '깊이 약 100m, 길이 약 2km의 이끼 덮인 협곡으로, 가장자리 길을 따라 걸으며 내려다봅니다.', 'A moss-covered canyon about 100 m deep and 2 km long, viewed from a path along its rim.', 'Fjaðrárgljúfur', 60, 90, group=DAY,
        n='비크에서 동쪽으로 약 70km입니다. 땅이 젖는 봄·가을엔 길을 잠시 막기도 하니 safetravel.is에서 확인하세요.|About 70 km east of Vík; the path is sometimes closed in wet spring and autumn weather, so check safetravel.is.')),
 ],
 'husavik': [
  (6, S('데티포스', 'Dettifoss', '높이 44m, 폭 약 100m로 유럽에서 손꼽히게 수량이 많은 폭포로, 잿빛 빙하 물이 굉음을 내며 떨어집니다.', 'One of Europe’s most powerful waterfalls, 44 m high and some 100 m wide, roaring with grey glacial meltwater.', 'Dettifoss', 60, 90, group=DAY,
        n='후사빅에서 차로 약 1시간이며 겨울엔 길이 닫힐 수 있습니다.|About an hour from Húsavík by car; the road may close in winter.')),
 ],
 'selfoss': [
  (6, S('시크릿 라군', 'Secret Lagoon', '플뤼디르 마을의 1891년 아이슬란드 최초 야외 수영장으로, 김이 오르는 천연 온천물에 몸을 담급니다.', 'Iceland’s first outdoor pool, built in 1891 in the village of Flúðir, fed by steaming natural hot springs.', 'Secret Lagoon Flúðir', 60, 120)),
  (7, S('레이캬달뤼르 온천 강', 'Reykjadalur hot river', '흐베라게르디 뒤 계곡을 약 1시간 걸어 올라가 따뜻한 강물에 몸을 담그는 하이킹 코스입니다.', 'A hike of about an hour up the valley behind Hveragerði to bathe in a naturally warm river.', 'Reykjadalur', 180, 240,
        n='편도 약 3km 오르막이며 탈의 칸막이만 있습니다. 겨울엔 길이 미끄럽습니다.|About 3 km uphill each way, with only simple changing screens; slippery in winter.')),
 ],
}

IT = [
 ("  reykjavik: { days: [['', 1, 3, 2, 4]], trips: [['블루라군|Blue Lagoon', 5]] },\n",
  "  reykjavik: {\n    days: [\n      ['시내 중심|Downtown', 1, 8, 3, 2, 4],\n      ['박물관과 온천|Museums & lagoon', 7, 6, 9],\n    ],\n    trips: [\n      ['블루라군|Blue Lagoon', 5],\n      ['비데이섬|Viðey', 10],\n      ['고래 관찰|Whale watching', 11],\n      ['오로라 투어|Northern lights tour', 12],\n    ],\n  },\n"),
 ("  akureyri: { days: [['', 3, 1, 2]], trips: [['고다포스와 미바튼|Goðafoss & Mývatn', 5, 4]] },\n",
  "  akureyri: {\n    days: [['', 1, 8, 2, 3]],\n    trips: [\n      ['고다포스와 미바튼|Goðafoss & Mývatn', 5, 4],\n      ['흐리세이섬|Hrísey', 6],\n      ['크리스마스 하우스|Christmas Garden', 7],\n    ],\n  },\n"),
 ("  vik: [5, 2, 1, 4, 3],\n",
  "  vik: {\n    days: [['', 3, 1, 4, 2]],\n    trips: [\n      ['스코가포스와 셀랴란즈포스|Skógafoss & Seljalandsfoss', 5, 6],\n      ['솔헤이마요퀴들 빙하 걷기|Sólheimajökull glacier walk', 7],\n      ['피야드라르글리우푸르|Fjaðrárgljúfur', 8],\n    ],\n  },\n"),
 ("  husavik: { days: [['', 2, 3, 1, 4]], trips: [['아우스비르기|Ásbyrgi', 5]] },\n",
  "  husavik: { days: [['', 2, 3, 1, 4]], trips: [['아우스비르기와 데티포스|Ásbyrgi & Dettifoss', 5, 6]] },\n"),
 ("  selfoss: [5, 4, 1, 2, 3],\n",
  "  selfoss: { days: [['골든 서클|Golden Circle', 3, 1, 2, 5, 6], ['분화구와 온천 강|Crater & hot river', 4, 7]] },\n"),
]

VISIT = [
 ("  'selfoss-h5': v(30, 45),\n", "  'selfoss-h5': v(60, 90, { n: '점심 식당은 예약하는 것이 좋습니다.|Booking the lunch restaurant is recommended.' }),\n"),
]
BLUE_NOTE = '레이캬네스반도 화산 활동으로 임시 휴업하는 일이 잦으니 가기 전 공식 사이트에서 운영 여부를 확인하세요. 시간대별 예약제입니다.|Volcanic activity on the Reykjanes peninsula has repeatedly closed it, so check the official site before going; entry is by pre-booked time slot.'

REYKJAVIK = [(1, R_CEN), (8, R_CEN), (3, R_CEN), (2, R_CEN), (4, R_CEN), (7, R_CEN),
             (6, R_OUT), (9, R_OUT), (5, DAY), (10, DAY), (11, TOUR), (12, TOUR)]
SMALL = ['akureyri', 'vik', 'husavik', 'selfoss']

IS_OLD = "    cityIds: ['reykjavik', 'akureyri', 'vik', 'husavik', 'selfoss'],\n"
IS_NEW = """    cityIds: ['reykjavik', 'selfoss', 'vik', 'akureyri', 'husavik'],
    cityGroups: [
      { title: { ko: '레이캬비크·남서부', en: 'Reykjavík & southwest' }, cityIds: ['reykjavik', 'selfoss'] },
      { title: { ko: '남부 해안', en: 'South coast' }, cityIds: ['vik'] },
      { title: { ko: '북부', en: 'North Iceland' }, cityIds: ['akureyri', 'husavik'] },
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
    for hid, t in REWRITE.items():
        ko, en, dko, den = t[:4]
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko or en:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', blk)
            blk = blk.replace(m.group(0), f'name: {{ ko: "{ko or m.group(1)}", en: "{en or m.group(2)}" }}')
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        if len(t) > 4:
            blk = re.sub(r'mapsUrl: "[^"]*"', 'mapsUrl: "https://www.google.com/maps/search/?api=1&query=' + urllib.parse.quote(t[4]) + '"', blk)
        c = c[:i] + blk + c[j:]
    it = rd('itinerary-north.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)
    vf = rd('visit-nordic.ts')
    for a, b in VISIT:
        assert vf.count(a) == 1, a
        vf = vf.replace(a, b)
    wr('visit-nordic.ts', vf)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-nordic.ts')
    c = reorder(c, 'reykjavik', REYKJAVIK)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        def g(n):
            if cid == 'vik' and n == 7:
                return TOUR
            return DAY if n in trips else None
        c = reorder(c, cid, [(n, g(n)) for n in order])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(IS_OLD) == 1
    wr('countries.ts', k.replace(IS_OLD, IS_NEW))


if __name__ == '__main__':
    main()
