#!/usr/bin/env python3
"""Portugal 2nd pass, new cities (2026-11-26, user picked all 16): Ponte de Lima, Peneda-Gerês, Bragança, Vila Real &
Mateus (Norte); Viseu, Piódão, Buçaco & Luso, Almeida & Sortelha (Centro); Sesimbra (Setúbal Peninsula); Mértola, Vila Nova
de Milfontes (Alentejo); Silves, Albufeira (Algarve); Horta (Faial), Pico (Azores); Porto Moniz (Madeira).
Facts (Wikipedia en/pt): Ponte de Lima charter 1125, medieval bridge with a Roman section, Camino Português, International
Garden Festival (May–Oct); Peneda-Gerês Portugal's only national park (1971), Roman road Geira with milestones, Arado
waterfall, Pitões das Júnias monastery, Soajo granaries (espigueiros); Bragança citadel and keep, Domus Municipalis
(Romanesque civic building), Iberian Mask and Costume Museum, Montesinho Natural Park; Mateus Palace (Baroque, pictured on
the Mateus Rosé label), Alvão Natural Park and Fisgas de Ermelo, Panóias rock sanctuary; Viseu Cathedral, Grão Vasco
Museum, Dão wine; Piódão schist village of the Serra do Açor, Foz d'Égua; Bussaco Palace Hotel (neo-Manueline, 1888–1907),
Bussaco national forest with the 17th-c. Carmelite convent, Luso spa; Almeida star-shaped fortress, Sortelha medieval
village (Historic Villages); Sesimbra fishing port, Moorish castle, Cabo Espichel sanctuary and dinosaur tracks; Mértola
castle, church that was a mosque (mihrab survives), Islamic museum, Pulo do Lobo, São Domingos mine; Vila Nova de
Milfontes on the Mira estuary, Rota Vicentina Fishermen's Trail, Cabo Sardão storks nesting on sea cliffs; Silves red
sandstone castle and cathedral, medieval fair; Albufeira old town and Fishermen's Beach, Falésia beach; Horta marina murals,
Peter Café Sport, Capelinhos volcano (1957–58), Faial caldera; Mount Pico 2,351 m, Pico vineyard culture UNESCO 2004,
whaling museum at Lajes do Pico; Porto Moniz lava pools, Seixal beach, Fanal laurel forest (Laurisilva UNESCO 1999).
Times (web aggregators 2026-11-26): Porto–Ponte de Lima bus ~1 h 25, Porto–Bragança Rede Expressos ~3 h, Lisbon–Viseu
~3 h 20, Lisbon–Mértola ~3 h 35, Funchal–Porto Moniz bus 2 h 30–3 h, Horta–Madalena ferry ~30 min; Lisbon–Milfontes
~3 h 10 and Lisbon–Sesimbra ~1 h 15 (Transitous); others rounded usual timings. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_daytrip_places3 import trip

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
NEAR = ('근교', 'Nearby')
FIRST = '처음이라면|First visit'
CP = "      ta('cp'),\n      ta('rede-expressos'),\n"
RC = 'routes-central.ts'
R_AFTER = r"^  r\('porto', 'aveiro', 'train', 40, .*\),\n"
OPO = "['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']"
LIS = "['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)', '리스본|Lisbon']"
FAO = "['Faro (FAO)', '파루 공항 (FAO)', '파루|Faro']"
NO, CE, AL, AG = '노르트', '센트루', '알렌테주', '알가르브'


def H(ko, en, dko, den, maps, mn, mx, n=None, group=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    d = dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)
    if group:
        d['group'] = group
    return d


def R(a, b, mode, m, n=None):
    extra = f", {{ n: '{n}' }}" if n else ''
    return (RC, R_AFTER, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


def C(**k):
    d = dict(country='pt', hubs_file='hubs-central.ts', hubs_before='  porto: {\n', itin_file='itinerary-iberia.ts',
             itin_before='  nazare: ', visit_file='visit-iberia.ts', visit_after=r"^  'funchal-h9': v\(.*\),\n",
             stay_before='  porto: [', transit_before='  porto: {', places=None, daytrips=[], apps=CP)
    d.update(k)
    return d


CITIES = [
    C(id='ponte-de-lima', group_title=NO, after='viana-do-castelo', ko='폰테 드 리마', en='Ponte de Lima', native='Ponte de Lima', lat=41.7672, lng=-8.5834,
      blurb=['1125년 자치 헌장을 받은 포르투갈에서 손꼽히게 오래된 마을로, 리마강을 건너는 중세 다리가 상징입니다. 산티아고 순례길 포르투갈 길이 지나갑니다.',
             'One of Portugal’s oldest towns, chartered in 1125, symbolised by its medieval bridge over the River Lima; the Portuguese Way of the Camino de Santiago passes through.'],
      highlights=[
          H('리마강 다리', 'Ponte de Lima bridge', '로마 시대 구간이 남은 중세 돌다리로, 순례자들이 지금도 건넙니다.', 'The medieval stone bridge with a surviving Roman section, still crossed by pilgrims.', 'Ponte Romana Ponte de Lima', 20, 30, b='no', n=FREE),
          H('구시가와 카몽이스 광장', 'Old town & Largo de Camões', '분수가 있는 강가 광장과 화강암 저택들이 이어진 구시가입니다.', 'The riverside square with its fountain and the granite mansions of the old town.', 'Largo de Camões Ponte de Lima', 45, 60, b='no', n=FREE),
          H('국제 정원 축제', 'International Garden Festival', '강 건너 공원에서 해마다 열리는 정원 축제로, 주제별 정원이 꾸며집니다.', 'The annual festival of themed gardens in the park across the river.', 'Festival Internacional de Jardins Ponte de Lima', 60, 90, n='5월 말~10월 무렵에 열립니다.|Runs from about late May to October.'),
          H('테르세이루스 박물관', 'Museu dos Terceiros', '바로크 성당과 수도원 건물에 자리한 종교 미술 박물관입니다.', 'A museum of sacred art in a Baroque church and convent.', 'Museu dos Terceiros Ponte de Lima', 45, 60, c='mon'),
      ],
      hubs=f"    air: [{OPO}],\n    bus: [['Ponte de Lima bus station', '폰테 드 리마 버스 터미널', '포르투·브라가행|to Porto, Braga']],\n",
      itinerary=[1, 2, 4, 3],
      season='5~10월 정원 축제 기간과 9월 축제(페이라스 노바스)가 좋습니다.|May–October for the garden festival, and September for the Feiras Novas.',
      stay=[('구시가', 'Old town', 'Largo de Camões Ponte de Lima', FIRST, '다리와 광장이 걸어서 닿습니다.|The bridge and square on foot.')],
      routes=[R('porto', 'ponte-de-lima', 'bus', 85), R('braga', 'ponte-de-lima', 'bus', 45)],
      transit=dict(modes=['walk', 'bus'], ko='마을은 걸어서 다닙니다.', en='Walk the town.'),
      daytrips=[('porto', trip('ponte-de-lima', '중세 다리와 강가 광장을 걷고, 여름엔 정원 축제를 봅니다.|Walk the medieval bridge and riverside square; see the garden festival in summer.'))]),
    C(id='geres', group_title=NO, after='ponte-de-lima', ko='페네다제레스', en='Peneda-Gerês', native='Parque Nacional da Peneda-Gerês (Gerês)', lat=41.7280, lng=-8.1610,
      blurb=['포르투갈 유일의 국립공원(1971년)으로, 화강암 산과 폭포, 로마 길, 곡식 창고가 모인 산골 마을이 있습니다. 온천 마을 제레스가 거점입니다.',
             'Portugal’s only national park (1971), with granite mountains, waterfalls, a Roman road and villages of stone granaries; the spa village of Gerês is the base.'],
      highlights=[
          H('아라두 폭포', 'Arado waterfall', '화강암 협곡을 흘러내리는 폭포로, 전망대에서 내려다봅니다.', 'A waterfall tumbling through a granite gorge, seen from a viewpoint.', 'Cascata do Arado', 45, 60, b='no', n=FREE),
          H('제이라 로마 길', 'Geira Roman road', '알베르가리아 숲을 지나는 로마 시대 길로, 이정표 기둥이 남아 있습니다.', 'The Roman road through the Albergaria woods, with milestones still standing.', 'Mata da Albergaria', 90, 150, b='no', n=FREE),
          H('피통이스 다스 주니아스', 'Pitões das Júnias', '산골 마을 아래 수도원 폐허와 폭포가 있는 곳입니다.', 'A mountain village with a ruined monastery and a waterfall below.', 'Mosteiro de Pitões das Júnias', 120, 180, group=DAY, b='no', n=FREE),
          H('소아주 곡식 창고', 'Soajo granaries', '바위 위에 화강암 곡식 창고(이스피게이루)들이 모여 선 마을입니다.', 'A village where granite granaries (espigueiros) cluster on a rock outcrop.', 'Espigueiros do Soajo', 45, 60, group=DAY, b='no', n=FREE),
      ],
      hubs=f"    air: [{OPO}],\n    bus: [['Gerês', '제레스 버스 정류장', '브라가행|to Braga']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['피통이스|Pitões', 3], ['소아주|Soajo', 4]]},
      season='5~10월이 산행과 물놀이에 좋습니다. 여름 주말엔 일부 도로 통행을 제한하기도 합니다.|May–October for hiking and swimming; some roads are restricted on summer weekends.',
      stay=[('제레스 마을', 'Gerês village', 'Gerês', FIRST, '온천 마을로 숙소와 식당이 모여 있습니다.|The spa village, with places to stay and eat.')],
      routes=[R('braga', 'geres', 'bus', 90)],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='국립공원 안은 버스가 드물어 차가 편합니다.', en='Buses in the park are sparse; a car is easiest.')),
    C(id='braganca', group_title=NO, after='lamego', ko='브라간사', en='Bragança', native='Bragança', lat=41.8061, lng=-6.7567,
      blurb=['포르투갈 동북쪽 끝의 성채 도시로, 성벽 안 옛 마을과 드문 로마네스크 시민 건물 도무스 무니키팔리스가 남아 있습니다. 몬테지뉴 자연공원의 산골 마을로 나가는 거점입니다.',
             'A citadel town in Portugal’s far north-east, with an old village inside its walls and the rare Romanesque civic building, the Domus Municipalis; a base for the villages of Montesinho Natural Park.'],
      highlights=[
          H('브라간사 성과 성채', 'Bragança Castle & citadel', '성벽 안에 마을이 남은 성채로, 망루 안에 군사 박물관이 있습니다.', 'A walled citadel with a village inside, its keep housing a military museum.', 'Castelo de Bragança', 60, 90),
          H('도무스 무니키팔리스', 'Domus Municipalis', '성채 안의 로마네스크 시민 회의소로, 이런 건물로는 매우 드뭅니다.', 'A Romanesque civic meeting house inside the citadel, a rare survival of its kind.', 'Domus Municipalis Bragança', 15, 20, b='no', n=FREE),
          H('이베리아 가면·의상 박물관', 'Iberian Mask and Costume Museum', '겨울 축제 때 쓰는 이 지역의 가면과 의상을 전시합니다.', 'The masks and costumes of the region’s winter festivals.', 'Museu Ibérico da Máscara e do Traje', 45, 60, c='mon'),
          H('몬테지뉴 자연공원', 'Montesinho Natural Park', '돌집 마을이 흩어진 산지 자연공원으로, 스페인 국경 마을 히우 드 오노르가 있습니다.', 'Upland park of stone villages, including Rio de Onor on the Spanish border.', 'Rio de Onor', 180, 240, group=DAY, b='no', n=FREE),
      ],
      hubs="    air: [['Bragança (BGC)', '브라간사 공항 (BGC)', '운항편 적음|few flights'], " + OPO + "],\n    bus: [['Bragança bus station', '브라간사 버스 터미널', '포르투·리스본행|to Porto, Lisbon']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['몬테지뉴|Montesinho', 4]]},
      season='봄·가을이 좋고, 겨울 가면 축제(카레투스)는 12월 말~1월 초에 열립니다.|Spring and autumn are best; the masked winter festivals (caretos) fall in late December–early January.',
      stay=[('성채 아래 시내', 'Town below the citadel', 'Bragança', FIRST, '성채와 박물관이 걸어서 닿습니다.|The citadel and museums on foot.')],
      routes=[R('porto', 'braganca', 'bus', 180)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 자연공원은 차가 편합니다.', en='Walk the town; a car is easiest for the park.')),
    C(id='vila-real', group_title=NO, after='braganca', ko='빌라 레알·마테우스', en='Vila Real & Mateus', native='Vila Real', lat=41.3006, lng=-7.7441,
      blurb=['도우루 계곡 북쪽의 도시로, 마테우스 로제 와인 병에 그려진 바로크 궁전 마테우스가 근교에 있습니다. 알방 자연공원의 폭포와 로마 시대 바위 성소도 가깝습니다.',
             'A town north of the Douro valley, near the Baroque Mateus Palace pictured on the Mateus Rosé label, and close to the waterfalls of Alvão Natural Park and a Roman rock sanctuary.'],
      highlights=[
          H('마테우스 궁전', 'Mateus Palace', '연못에 비치는 바로크 궁전과 정원으로, 마테우스 로제 와인 병의 그림으로 유명합니다.', 'A Baroque palace mirrored in its pool, with gardens, famous from the Mateus Rosé label.', 'Casa de Mateus', 75, 90),
          H('빌라 레알 구시가와 대성당', 'Old town & cathedral', '고딕 대성당과 귀족 저택이 있는 구시가입니다.', 'The old town with its Gothic cathedral and noble houses.', 'Sé de Vila Real', 45, 60, b='no', n=FREE),
          H('피스가스 드 에르멜루 폭포', 'Fisgas de Ermelo', '알방 자연공원의 높은 폭포로, 전망대에서 계곡을 내려다봅니다.', 'High falls in Alvão Natural Park, seen from viewpoints over the valley.', 'Fisgas de Ermelo', 90, 150, group=DAY, b='no', n=FREE),
          H('파노이아스 성소', 'Panóias sanctuary', '바위에 제단을 판 로마 시대 성소 유적입니다.', 'A Roman-era sanctuary with altars carved into the rock.', 'Santuário de Panóias', 45, 60, group=NEAR),
      ],
      hubs=f"    air: [{OPO}],\n    bus: [['Vila Real bus station', '빌라 레알 버스 터미널', '포르투행|to Porto']],\n",
      itinerary={'days': [['', 2, 1, 4]], 'trips': [['알방 자연공원|Alvão', 3]]},
      season='포도 수확철인 9~10월이 도우루 풍경과 함께 좋습니다.|September–October, at harvest time in the Douro.',
      stay=[('시내 중심', 'Town centre', 'Vila Real', FIRST, '구시가와 버스 터미널이 가깝습니다.|Near the old town and bus station.')],
      routes=[R('porto', 'vila-real', 'bus', 90), R('peso-da-regua', 'vila-real', 'bus', 35)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 마테우스 궁전은 버스나 택시로 갑니다.', en='Walk the town; take a bus or taxi to Mateus Palace.')),
    C(id='viseu', group_title=CE, after='aveiro', ko='비세우', en='Viseu', native='Viseu', lat=40.6566, lng=-7.9125,
      blurb=['다웅 와인 산지의 중심 도시로, 언덕 위 대성당과 르네상스 화가 그랑 바스쿠의 미술관이 있습니다.',
             'The capital of the Dão wine region, with a hilltop cathedral and the museum of the Renaissance painter Grão Vasco.'],
      highlights=[
          H('비세우 대성당', 'Viseu Cathedral', '언덕 위 대성당으로, 매너리즘 양식 회랑과 아줄레주 타일이 있습니다.', 'The hilltop cathedral with a Mannerist cloister and azulejo tiles.', 'Sé de Viseu', 30, 45),
          H('그랑 바스쿠 미술관', 'Grão Vasco Museum', '대성당 옆 미술관으로, 16세기 화가 바스쿠 페르난드스의 작품을 소장합니다.', 'The museum beside the cathedral, holding works by the 16th-century painter Vasco Fernandes.', 'Museu Nacional Grão Vasco', 60, 90, c='mon'),
          H('호시우와 디레이타 거리', 'Rossio & Rua Direita', '아줄레주 벽화가 있는 광장과 옛 상점가입니다.', 'The square with its azulejo panel and the old shopping street.', 'Rossio Viseu', 45, 60, b='no', n=FREE),
          H('다웅 와인 시음', 'Dão wine tasting', '시내의 다웅 와인관이나 근교 와이너리에서 다웅 와인을 맛봅니다.', 'Taste Dão wines at the Solar do Vinho do Dão in town or at nearby estates.', 'Solar do Vinho do Dão', 60, 120),
      ],
      hubs=f"    air: [{OPO}],\n    bus: [['Viseu bus station', '비세우 버스 터미널', '리스본·포르투·코임브라행|to Lisbon, Porto, Coimbra']],\n",
      itinerary=[1, 2, 3, 4],
      season='봄~가을이 좋고, 8~9월엔 큰 장터 축제(페이라 드 상 마테우스)가 열립니다.|Spring to autumn; the Feira de São Mateus fair runs in August–September.',
      stay=[('구시가', 'Old town', 'Rossio Viseu', FIRST, '대성당과 광장이 걸어서 닿습니다.|The cathedral and squares on foot.')],
      routes=[R('lisbon', 'viseu', 'bus', 205), R('porto', 'viseu', 'bus', 130)],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다닙니다.', en='Walk the old town.')),
    C(id='piodao', group_title=CE, after='viseu', ko='피오다웅', en='Piódão', native='Piódão', lat=40.2280, lng=-7.8240,
      blurb=['아소르 산맥 비탈에 편암 슬레이트 집들이 층층이 겹친 산골 마을로, ‘편암 마을’ 가운데 가장 유명합니다.',
             'A mountain village of schist and slate houses stacked up a slope of the Serra do Açor, the best known of Portugal’s schist villages.'],
      highlights=[
          H('피오다웅 마을', 'Piódão village', '파란 문과 창의 편암 집들이 계단처럼 이어진 마을로, 맞은편 길에서 전체가 보입니다.', 'Schist houses with blue doors and windows climbing the slope, seen whole from the road opposite.', 'Piódão', 60, 90, b='no', n=FREE),
          H('마을 성당', 'Igreja Matriz', '회색 마을 아래 하얀 성당으로, 마을 풍경의 중심입니다.', 'The white church at the foot of the grey village, centrepiece of the view.', 'Igreja Matriz do Piódão', 15, 20, b='no', n=FREE),
          H('포스 드 에구아', 'Foz d’Égua', '두 시내가 만나는 곳의 돌다리와 물놀이 웅덩이로, 마을에서 걸어갑니다.', 'Stone bridges and swimming pools where two streams meet, a walk from the village.', 'Foz d’Égua', 90, 120, b='no', n=FREE),
      ],
      hubs=f"    air: [{LIS}, {OPO}],\n",
      itinerary=[1, 2, 3],
      season='봄·가을이 걷기 좋고, 겨울엔 산길이 얼 수 있습니다.|Spring and autumn for walking; mountain roads can ice up in winter.',
      stay=[('마을 안', 'In the village', 'Piódão', FIRST, '돌집 민박에 묵으며 저녁 풍경을 봅니다.|Stay in a stone guesthouse to see the village at dusk.')],
      routes=[R('coimbra', 'piodao', 'mixed', 100, '대중교통이 거의 없어 차가 필요합니다|almost no public transport; a car is needed')],
      transit=dict(modes=['walk'], ko='마을은 걸어서 다니며, 오가는 길은 차가 필요합니다.', en='Walk the village; you need a car to get there.'),
      apps=''),
    C(id='bucaco', group_title=CE, after='piodao', ko='부사코·루소', en='Buçaco & Luso', native='Buçaco / Luso', lat=40.3780, lng=-8.3700,
      blurb=['숲속에 네오마누엘 양식의 궁전 호텔과 17세기 수도원이 있는 부사코 국유림과, 생수로 유명한 온천 마을 루소입니다.',
             'The Bussaco national forest, with a neo-Manueline palace hotel and a 17th-century convent, and the spa village of Luso, known for its mineral water.'],
      highlights=[
          H('부사코 궁전 호텔', 'Bussaco Palace Hotel', '1888~1907년에 지은 네오마누엘 양식 궁전으로, 지금은 호텔이며 타일 장식이 화려합니다.', 'A neo-Manueline palace built in 1888–1907, now a hotel, lavishly decorated with tiles.', 'Palace Hotel do Bussaco', 30, 45, b='no', n='건물 밖과 정원은 무료로 둘러봅니다.|The exterior and gardens are free to see.'),
          H('부사코 국유림', 'Bussaco National Forest', '수도사들이 가꾼 숲으로, 17세기 카르멜회 수도원과 예배당들이 숲길에 흩어져 있습니다.', 'A forest planted by monks, with a 17th-century Carmelite convent and chapels along its paths.', 'Mata Nacional do Buçaco', 90, 150),
          H('폰트 프리아 계단 폭포', 'Fonte Fria', '숲속 계단을 따라 물이 흘러내리는 분수입니다.', 'A cascade running down a flight of steps in the forest.', 'Fonte Fria Buçaco', 20, 30, b='no', n=FREE),
          H('루소 온천 마을', 'Luso spa village', '루소 생수가 나는 온천 마을로, 공공 샘에서 물을 받을 수 있습니다.', 'The spa village where Luso mineral water comes from, with a public fountain.', 'Fonte de São João Luso', 30, 45, b='no', n=FREE),
      ],
      hubs=f"    air: [{OPO}],\n    rail: [['Luso-Buçaco', '루소-부사코역']],\n",
      itinerary=[4, 2, 3, 1],
      season='숲이 푸른 봄~가을이 좋습니다.|Spring to autumn, when the forest is greenest.',
      stay=[('루소', 'Luso', 'Luso', FIRST, '온천 마을에 묵으며 숲까지 걸어 오릅니다.|Stay in the spa village and walk up to the forest.')],
      routes=[R('coimbra', 'bucaco', 'train', 35, '루소-부사코역|Luso-Buçaco')],
      transit=dict(modes=['walk', 'taxi', 'train'], ko='루소에서 숲까지 걸어 오르거나 택시를 탑니다.', en='Walk up from Luso to the forest or take a taxi.'),
      daytrips=[('coimbra', trip('bucaco', '기차로 루소에 가서 부사코 숲과 궁전 호텔을 걷습니다.|Train to Luso, then walk the Bussaco forest and palace hotel.'))]),
    C(id='almeida', group_title=CE, after='monsanto', ko='알메이다·소르텔랴', en='Almeida & Sortelha', native='Almeida', lat=40.7259, lng=-6.9063,
      blurb=['스페인 국경 가까운 별 모양 요새 마을 알메이다와, 바위 위 성벽 마을 소르텔랴로, 둘 다 ‘포르투갈 역사 마을’입니다.',
             'Almeida, a star-shaped fortress town near the Spanish border, and Sortelha, a walled village on a rocky outcrop; both are among Portugal’s Historic Villages.'],
      highlights=[
          H('알메이다 요새', 'Almeida fortress', '해자와 보루가 별 모양으로 둘러싼 요새 마을로, 성벽 위를 걸어 한 바퀴 돕니다.', 'A fortress town ringed by star-shaped bastions and moats; walk round the ramparts.', 'Fortaleza de Almeida', 60, 90, b='no', n=FREE),
          H('알메이다 포대 박물관', 'Casamatas museum', '성벽 아래 지하 포대 공간의 군사 역사 박물관입니다.', 'A military history museum in the casemates beneath the walls.', 'Museu Histórico Militar de Almeida', 45, 60, c='mon'),
          H('소르텔랴', 'Sortelha', '화강암 바위 위에 성과 성벽이 남은 중세 마을입니다.', 'A medieval village of castle and walls on granite boulders.', 'Sortelha', 90, 120, group=DAY, b='no', n=FREE),
      ],
      hubs=f"    air: [{OPO}],\n    rail: [['Guarda', '과르다역', '알메이다까지 차로 약 45분|about 45 min by car to Almeida']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['소르텔랴|Sortelha', 3]]},
      season='봄·가을이 좋고, 여름엔 내륙이라 매우 덥습니다.|Spring and autumn; inland summers are very hot.',
      stay=[('요새 안', 'Inside the fortress', 'Almeida', FIRST, '성벽 안 마을에 묵습니다.|Stay in the village inside the walls.')],
      routes=[R('viseu', 'almeida', 'mixed', 90, '차로 약 1시간 30분|about 1 h 30 by car')],
      transit=dict(modes=['walk', 'taxi'], ko='마을은 걸어서 다니고, 마을 사이는 차가 필요합니다.', en='Walk the villages; you need a car between them.')),
    C(id='sesimbra', group_title='세투발 반도', after='setubal', ko='세짐브라', en='Sesimbra', native='Sesimbra', lat=38.4440, lng=-9.1010,
      blurb=['아라비다 산이 바다로 떨어지는 곳의 어촌으로, 생선구이 식당이 많고 언덕 위에 무어인의 성이 있습니다. 서쪽 끝 에스피셰우곶엔 성지와 공룡 발자국이 있습니다.',
             'A fishing town where the Arrábida hills drop into the sea, full of grilled-fish restaurants and topped by a Moorish castle; at Cabo Espichel to the west are a sanctuary and dinosaur tracks.'],
      highlights=[
          H('세짐브라 해변과 항구', 'Sesimbra beach & harbour', '마을 앞 모래 해변과 어선이 드나드는 항구입니다.', 'The town beach and the fishing harbour.', 'Praia da Califórnia Sesimbra', 60, 120, b='no', n=FREE),
          H('세짐브라 성', 'Sesimbra Castle', '언덕 위 무어인의 성으로, 성벽에서 바다와 마을이 내려다보입니다.', 'The Moorish castle on the hill, with views over the sea and town.', 'Castelo de Sesimbra', 45, 60, b='no', n=FREE),
          H('에스피셰우곶', 'Cabo Espichel', '절벽 위 순례 성당과 순례자 숙소가 있는 곶으로, 절벽 아래 바위에 공룡 발자국이 남아 있습니다.', 'A headland with a pilgrimage church and pilgrims’ lodgings on the cliffs, and dinosaur tracks in the rocks below.', 'Cabo Espichel', 60, 90, group=DAY, b='no', n=FREE),
          H('히베이루 두 카발루 해변', 'Ribeiro do Cavalo beach', '아라비다 해안의 맑은 물 작은 만으로, 바위 길을 걸어 내려갑니다.', 'A clear-water cove on the Arrábida coast, reached down a rocky path.', 'Praia do Ribeiro do Cavalo', 120, 180, group=NEAR, b='no', n=FREE),
      ],
      hubs=f"    air: [{LIS}],\n    bus: [['Sesimbra bus terminal', '세짐브라 버스 터미널', '리스본행|to Lisbon']],\n",
      itinerary={'days': [['', 1, 2, 4]], 'trips': [['에스피셰우곶|Cabo Espichel', 3]]},
      season='6~9월이 해변 철입니다.|June–September is beach season.',
      stay=[('해변가', 'Seafront', 'Sesimbra', FIRST, '해변과 식당가가 바로 앞입니다.|The beach and restaurants on your doorstep.')],
      routes=[R('lisbon', 'sesimbra', 'bus', 75)],
      transit=dict(modes=['walk', 'bus'], ko='마을은 걸어서 다니고, 에스피셰우곶은 버스나 차로 갑니다.', en='Walk the town; take a bus or car to Cabo Espichel.'),
      daytrips=[('lisbon', trip('sesimbra', '어촌 해변에서 생선구이를 먹고 언덕 위 성에 오릅니다.|Grilled fish by the beach and a climb to the hilltop castle.'))]),
    C(id='mertola', group_title=AL, after='elvas', ko='메르톨라', en='Mértola', native='Mértola', lat=37.6400, lng=-7.6610,
      blurb=['과디아나강 위 언덕의 성벽 마을로, 이슬람 시대 모스크였던 교회와 이슬람 박물관이 남아 ‘박물관 마을’이라 불립니다.',
             'A walled hill town above the Guadiana, called a “museum town” for its church that was once a mosque and its Islamic museum.'],
      highlights=[
          H('메르톨라 성', 'Mértola Castle', '언덕 꼭대기 성으로, 탑에서 과디아나강 굽이가 내려다보입니다.', 'The castle at the top of the hill, with views over the bend of the Guadiana.', 'Castelo de Mértola', 30, 45),
          H('마을 성당(옛 모스크)', 'Igreja Matriz (former mosque)', '이슬람 시대 모스크를 성당으로 바꾼 건물로, 메카 방향 벽감(미흐라브)이 남아 있습니다.', 'A church that was once a mosque, its mihrab still in place.', 'Igreja Matriz de Mértola', 20, 30),
          H('이슬람 박물관', 'Islamic Museum', '이슬람 시대 도자기와 유물을 전시하는 박물관입니다.', 'A museum of ceramics and objects from the Islamic period.', 'Museu Islâmico Mértola', 30, 45),
          H('풀루 두 로부', 'Pulo do Lobo', '과디아나강이 좁은 바위 협곡으로 떨어지는 폭포입니다.', 'Where the Guadiana plunges through a narrow rock gorge.', 'Pulo do Lobo', 90, 150, group=DAY, b='no', n=FREE),
          H('상 도밍구스 광산', 'São Domingos mine', '버려진 광산 마을과 붉은 광산 풍경, 강변 물놀이 해변이 있습니다.', 'An abandoned mining village, its rust-red landscape and a river beach.', 'Mina de São Domingos', 90, 150, group=DAY, b='no', n=FREE),
      ],
      hubs=f"    air: [{FAO}],\n    bus: [['Mértola bus station', '메르톨라 버스 정류장', '리스본·베자행|to Lisbon, Beja']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['풀루 두 로부|Pulo do Lobo', 4], ['상 도밍구스 광산|São Domingos mine', 5]]},
      season='봄·가을이 좋고, 여름은 매우 덥습니다. 홀수 해 5월엔 이슬람 축제가 열립니다.|Spring and autumn; summers are very hot. An Islamic festival is held in May in odd-numbered years.',
      stay=[('성벽 안 구시가', 'Old town inside the walls', 'Mértola', FIRST, '성과 박물관들이 걸어서 닿습니다.|The castle and museums on foot.')],
      routes=[R('lisbon', 'mertola', 'bus', 215)],
      transit=dict(modes=['walk', 'taxi'], ko='마을은 걸어서 다니고, 주변 명소는 차가 필요합니다.', en='Walk the town; you need a car for the sights around.')),
    C(id='vila-nova-de-milfontes', group_title=AL, after='mertola', ko='빌라 노바 드 밀폰테스', en='Vila Nova de Milfontes', native='Vila Nova de Milfontes', lat=37.7240, lng=-8.7830,
      blurb=['미라강 하구의 하얀 바닷가 마을로, 코스타 비센티나 자연공원의 해안 절벽 길 ‘로타 비센티나’를 걷는 거점입니다.',
             'A white seaside village on the Mira estuary and a base for walking the Rota Vicentina clifftop trails of the Costa Vicentina Natural Park.'],
      highlights=[
          H('미라강 하구 해변', 'Mira estuary beaches', '강과 바다가 만나는 곳의 모래 해변들로, 물살이 잔잔한 강가 해변도 있습니다.', 'Sandy beaches where river meets sea, including calm riverside ones.', 'Praia da Franquia', 120, 180, b='no', n=FREE),
          H('어부의 길', 'Fishermen’s Trail', '로타 비센티나의 해안 절벽 길로, 모래 위를 걷는 구간이 많습니다.', 'The Rota Vicentina’s clifftop coast path, much of it on sand.', 'Rota Vicentina Trilho dos Pescadores', 180, 300, b='no', n=FREE),
          H('사르방곶', 'Cabo Sardão', '바다 절벽 위에 황새가 둥지를 트는 보기 드문 곶으로, 등대가 있습니다.', 'A headland with a lighthouse where storks nest on the sea cliffs, a rare sight.', 'Cabo Sardão', 60, 90, group=DAY, b='no', n=FREE),
          H('잠부제이라 두 마르', 'Zambujeira do Mar', '절벽 위의 작은 바닷가 마을과 해변입니다.', 'A small clifftop seaside village and beach.', 'Zambujeira do Mar', 90, 150, group=DAY, b='no', n=FREE),
      ],
      hubs=f"    air: [{LIS}, {FAO}],\n    bus: [['Vila Nova de Milfontes bus stop', '밀폰테스 버스 정류장', '리스본행|to Lisbon']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['사르방곶과 잠부제이라|Cabo Sardão & Zambujeira', 3, 4]]},
      season='해변은 6~9월, 해안 길 걷기는 봄·가을이 좋습니다.|Beaches June–September; spring and autumn for the coast path.',
      stay=[('마을 중심', 'Village centre', 'Vila Nova de Milfontes', FIRST, '해변과 식당이 걸어서 닿습니다.|The beaches and restaurants on foot.')],
      routes=[R('lisbon', 'vila-nova-de-milfontes', 'bus', 190)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 해안 마을 사이는 차나 버스를 탑니다.', en='Walk the village; use a car or bus between coastal villages.')),
    C(id='silves', group_title=AG, after='faro', ko='실브스', en='Silves', native='Silves', lat=37.1890, lng=-8.4380,
      blurb=['무어인 시대 알가르브의 수도로, 붉은 사암 성과 고딕 대성당이 언덕 위에 남아 있습니다. 8월엔 중세 축제가 열립니다.',
             'The Moorish capital of the Algarve, with a red sandstone castle and Gothic cathedral on its hill; a medieval fair takes place in August.'],
      highlights=[
          H('실브스 성', 'Silves Castle', '붉은 사암 성벽이 온전히 남은 무어인의 성으로, 성벽 위를 걷습니다.', 'A Moorish castle whose red sandstone walls survive complete; walk the ramparts.', 'Castelo de Silves', 45, 60),
          H('실브스 대성당', 'Silves Cathedral', '성 아래의 고딕 대성당입니다.', 'The Gothic cathedral below the castle.', 'Sé de Silves', 20, 30),
          H('고고학 박물관', 'Archaeology Museum', '이슬람 시대 우물 등 지역 유물을 전시하는 박물관입니다.', 'A museum of local finds, built around an Islamic-era well.', 'Museu Municipal de Arqueologia Silves', 45, 60),
          H('구시가와 강변', 'Old town & riverside', '아라드강 가의 옛 다리와 강변 카페, 언덕 골목입니다.', 'The old bridge and cafés on the River Arade and the hillside lanes.', 'Ponte Velha Silves', 30, 45, b='no', n=FREE),
      ],
      hubs=f"    air: [{FAO}],\n    rail: [['Silves', '실브스역', '마을까지 약 2km|about 2 km to town']],\n",
      itinerary=[1, 2, 3, 4],
      season='봄·가을이 걷기 좋고, 8월엔 중세 축제가 열립니다.|Spring and autumn for walking; the medieval fair is in August.',
      stay=[('구시가', 'Old town', 'Silves', FIRST, '성과 대성당이 걸어서 닿습니다.|The castle and cathedral on foot.')],
      routes=[R('faro', 'silves', 'train', 65), R('lisbon', 'silves', 'train', 180, '투네스에서 환승|change at Tunes')],
      transit=dict(modes=['walk', 'bus', 'train'], ko='마을은 걸어서 다니고, 역까지는 버스나 택시를 탑니다.', en='Walk the town; take a bus or taxi to the station.')),
    C(id='albufeira', group_title=AG, after='silves', ko='알부페이라', en='Albufeira', native='Albufeira', lat=37.0880, lng=-8.2500,
      blurb=['알가르브에서 가장 큰 해변 휴양지로, 하얀 구시가 아래 어부의 해변과 붉은 절벽이 이어진 팔레지아 해변이 있습니다.',
             'The Algarve’s largest beach resort, with Fishermen’s Beach below the white old town and the long red cliffs of Falésia Beach.'],
      highlights=[
          H('구시가와 어부의 해변', 'Old town & Fishermen’s Beach', '하얀 골목 아래 어선이 올라와 있는 해변으로, 절벽 엘리베이터로 내려갑니다.', 'The beach below the white lanes, where fishing boats are pulled up; a cliff lift goes down.', 'Praia dos Pescadores Albufeira', 60, 120, b='no', n=FREE),
          H('팔레지아 해변', 'Falésia Beach', '붉은색·주황색 절벽 아래로 길게 이어진 모래 해변입니다.', 'A long sandy beach below red and orange cliffs.', 'Praia da Falésia', 120, 180, group=NEAR, b='no', n=FREE),
          H('알부페이라 마리나', 'Albufeira Marina', '색색의 건물이 둘러싼 마리나로, 동굴 보트 투어가 출발합니다.', 'A marina ringed by colourful buildings, where boat trips to the sea caves start.', 'Marina de Albufeira', 45, 60, b='no', n=FREE),
      ],
      hubs=f"    air: [{FAO}],\n    rail: [['Albufeira-Ferreiras', '알부페이라-페헤이라스역', '시내까지 버스|bus to town']],\n    bus: [['Albufeira bus terminal', '알부페이라 버스 터미널']],\n",
      itinerary=[1, 3, 2],
      season='해변은 6~9월이 성수기이고, 봄·가을엔 한적합니다.|June–September is peak beach season; spring and autumn are quieter.',
      stay=[('구시가', 'Old town', 'Albufeira Old Town', FIRST, '해변과 식당가가 걸어서 닿습니다.|The beach and restaurants on foot.')],
      routes=[R('faro', 'albufeira', 'bus', 50), R('lisbon', 'albufeira', 'train', 165, '알부페이라-페헤이라스역|Albufeira-Ferreiras')],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내 버스가 구시가와 해변들을 잇습니다.', en='Town buses link the old town and beaches.')),
    C(id='horta', group_title='아소르스 제도', after='angra-do-heroismo', ko='오르타(파이알섬)', en='Horta (Faial)', native='Horta', lat=38.5330, lng=-28.6300,
      blurb=['대서양을 건너는 요트들이 쉬어 가는 파이알섬의 항구 도시로, 방파제에 선원들이 그린 그림이 가득합니다. 1957~58년 분화한 카펠리뉴스 화산이 섬 서쪽에 있습니다.',
             'Faial’s harbour town, where transatlantic yachts stop over, its breakwater covered in sailors’ paintings; at the island’s western tip is the Capelinhos volcano, which erupted in 1957–58.'],
      highlights=[
          H('오르타 마리나와 그림 방파제', 'Horta Marina & murals', '대서양 횡단 요트 선원들이 행운을 빌며 그림을 남긴 방파제입니다.', 'The breakwater where transatlantic sailors paint murals for luck.', 'Marina da Horta', 30, 45, b='no', n=FREE),
          H('피터 카페 스포르트', 'Peter Café Sport', '요트 선원들의 사랑방 카페로, 위층에 고래 뼈 조각 박물관이 있습니다.', 'The sailors’ café-bar, with a scrimshaw museum upstairs.', 'Peter Café Sport', 45, 60),
          H('카펠리뉴스 화산', 'Capelinhos volcano', '1957~58년 분화로 새 땅이 생긴 곳으로, 땅속에 지은 해설 센터와 등대가 있습니다.', 'Land created by the 1957–58 eruption, with an underground interpretation centre and the old lighthouse.', 'Vulcão dos Capelinhos', 120, 150, group=DAY),
          H('파이알 칼데라', 'Faial caldera', '섬 한가운데의 거대한 분화구로, 가장자리 길을 걷습니다.', 'The huge crater at the island’s centre, with a path round the rim.', 'Caldeira do Faial', 90, 150, group=DAY, b='no', n=FREE),
      ],
      hubs="    air: [['Horta (HOR)', '오르타 공항 (HOR)']],\n    port: [['Horta ferry terminal', '오르타 선착장', '피쿠섬 마달레나행|to Madalena, Pico']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['카펠리뉴스와 칼데라|Capelinhos & caldera', 4, 3]]},
      season='5~9월이 날씨가 안정적이고, 8월엔 바다 축제(세마나 두 마르)가 열립니다.|May–September for settled weather; the Semana do Mar festival is in August.',
      stay=[('마리나 주변', 'Around the marina', 'Marina da Horta', FIRST, '항구와 식당, 피쿠섬행 선착장이 가깝습니다.|Near the harbour, restaurants and the Pico ferry.')],
      routes=[R('ponta-delgada', 'horta', 'flight', 45), R('lisbon', 'horta', 'flight', 140)],
      transit=dict(modes=['walk', 'taxi', 'ferry', 'bus'], ko='시내는 걸어서 다니고, 섬 일주는 차나 투어가 편합니다.', en='Walk the town; a car or tour is easiest round the island.'),
      apps=''),
    C(id='pico', group_title='아소르스 제도', after='horta', ko='피쿠섬', en='Pico', native='Ilha do Pico (Madalena)', lat=38.5360, lng=-28.5260,
      blurb=['포르투갈 최고봉 피쿠산(2,351m)이 솟은 섬으로, 검은 현무암 돌담 안에 포도를 기르는 포도밭 경관이 유네스코 세계유산입니다.',
             'The island of Mount Pico (2,351 m), Portugal’s highest peak, whose vineyards walled in black basalt are a UNESCO World Heritage Site.'],
      highlights=[
          H('피쿠산', 'Mount Pico', '포르투갈에서 가장 높은 2,351m 화산으로, 등산은 하루가 걸리고 등록이 필요합니다.', 'Portugal’s highest mountain, a 2,351 m volcano; the climb takes a full day and must be registered.', 'Casa da Montanha Pico', 420, 600, b='rec', n='날씨가 나쁘면 등산을 막습니다.|The climb is closed in bad weather.'),
          H('포도밭 문화 경관', 'Pico vineyard landscape', '바닷바람을 막는 현무암 돌담 칸 안에 포도를 심은 포도밭으로, 유네스코 세계유산입니다.', 'Vines grown inside small basalt-walled plots against the sea wind; a UNESCO World Heritage Site.', 'Lajido da Criação Velha', 60, 120, b='no', n=FREE),
          H('라지스 두 피쿠 고래잡이 박물관', 'Whalers’ Museum, Lajes do Pico', '옛 고래잡이 배와 도구를 전시하는 박물관으로, 고래 관찰 투어도 출발합니다.', 'A museum of old whaling boats and tools; whale-watching trips leave from the town.', 'Museu dos Baleeiros', 45, 60, group=NEAR, c='mon'),
      ],
      hubs="    air: [['Pico (PIX)', '피쿠 공항 (PIX)']],\n    port: [['Madalena', '마달레나 선착장', '오르타행|to Horta']],\n",
      itinerary={'days': [['', 2, 3], ['피쿠산 등산|Climbing Pico', 1]]},
      season='6~9월이 등산과 고래 관찰에 좋습니다.|June–September for the climb and whale watching.',
      stay=[('마달레나', 'Madalena', 'Madalena Pico', FIRST, '선착장과 포도밭이 가깝습니다.|Near the ferry and the vineyards.')],
      routes=[R('horta', 'pico', 'ferry', 30, '마달레나행|to Madalena'), R('ponta-delgada', 'pico', 'flight', 45)],
      transit=dict(modes=['walk', 'taxi', 'ferry'], ko='섬 버스가 드물어 차나 투어가 편합니다.', en='Island buses are sparse; a car or tour is easiest.'),
      apps=''),
    C(id='porto-moniz', group_title='마데이라', after='funchal', ko='포르투 모니스', en='Porto Moniz', native='Porto Moniz', lat=32.8660, lng=-17.1660,
      blurb=['마데이라섬 북서쪽 끝의 마을로, 검은 용암 바위 사이에 바닷물이 차는 천연 수영장이 있습니다. 근처엔 유네스코 세계유산 월계수 숲 판알이 있습니다.',
             'A village at the north-west tip of Madeira with natural sea pools among black lava rocks; nearby is Fanal, in the UNESCO-listed laurel forest.'],
      highlights=[
          H('포르투 모니스 천연 수영장', 'Porto Moniz natural pools', '용암 바위 사이에 바닷물이 차오르는 천연 수영장입니다.', 'Natural pools filled by the sea among the lava rocks.', 'Piscinas Naturais Porto Moniz', 90, 150),
          H('세이샬 검은 모래 해변', 'Seixal black-sand beach', '절벽과 폭포를 배경으로 한 검은 모래 해변입니다.', 'A black-sand beach backed by cliffs and waterfalls.', 'Praia do Seixal', 60, 90, group=NEAR, b='no', n=FREE),
          H('판알 월계수 숲', 'Fanal laurel forest', '안개 낀 초원에 오래된 월계수가 서 있는 숲으로, 유네스코 세계유산 라우리실바의 일부입니다.', 'Ancient laurels standing in misty meadows, part of the UNESCO-listed Laurisilva.', 'Fanal Madeira', 90, 120, group=DAY, b='no', n=FREE),
          H('베우 다 노이바 폭포 전망대', 'Véu da Noiva viewpoint', '해안 절벽에서 바다로 떨어지는 ‘신부의 베일’ 폭포를 보는 전망대입니다.', 'A viewpoint over the “Bridal Veil” falls tumbling off the sea cliffs.', 'Miradouro Véu da Noiva', 15, 20, group=NEAR, b='no', n=FREE),
      ],
      hubs="    air: [['Madeira (FNC)', '마데이라 공항 (FNC)', '푼샬|Funchal']],\n    bus: [['Porto Moniz bus stop', '포르투 모니스 버스 정류장', '푼샬행|to Funchal']],\n",
      itinerary={'days': [['', 1, 4, 2]], 'trips': [['판알 숲|Fanal', 3]]},
      season='물놀이는 6~10월이 좋고, 판알 숲은 안개 낀 날이 더 신비롭습니다.|June–October for the pools; Fanal is most atmospheric in the mist.',
      stay=[('포르투 모니스', 'Porto Moniz', 'Porto Moniz', FIRST, '수영장 바로 앞의 작은 마을입니다.|A small village right by the pools.')],
      routes=[R('funchal', 'porto-moniz', 'bus', 150, '하루 몇 편, 차로는 약 50분|few buses a day; about 50 min by car')],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 판알 숲은 차가 필요합니다.', en='Walk the village; you need a car for Fanal.'),
      apps=''),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
