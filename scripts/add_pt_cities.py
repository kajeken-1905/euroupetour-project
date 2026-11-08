#!/usr/bin/env python3
"""Portugal step 2 (2026-11-08, user picked all fourteen): Peso da Régua (Douro), Lamego, Amarante, Viana do Castelo,
Alcobaça & Batalha, Setúbal (Arrábida), Ericeira, Manteigas (Serra da Estrela), Monsanto, Tavira, Marvão, Elvas,
Ponta Delgada (São Miguel), Angra do Heroísmo (Terceira). Times from Transitous where it had data (Porto–Régua, Porto–
Viana, Lisbon–Setúbal/Ericeira/Alcobaça, Faro–Tavira, Évora–Elvas), otherwise the operators' usual timings, rounded.
Portugal's groups are rewritten at the end (Azores as its own group). Run once."""
import re
import add_daytrip_places3 as T
from add_daytrip_places3 import trip
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
CP = "      ta('cp'),\n      ta('rede-expressos'),\n"
RC = 'routes-central.ts'
R_AFTER = r"^  r\('porto', 'aveiro', 'train', 40, .*\),\n"
OPO = "['Porto Francisco Sá Carneiro (OPO)', '포르투 공항 (OPO)', '포르투|Porto']"
LIS = "['Lisboa Humberto Delgado (LIS)', '리스본 공항 (LIS)', '리스본|Lisbon']"
FAO = "['Faro (FAO)', '파루 공항 (FAO)', '파루|Faro']"
COMMON = dict(hubs_file='hubs-central.ts', hubs_before='  porto: {\n', itin_file='itinerary-iberia.ts', itin_before='  nazare: ',
              visit_file='visit-iberia.ts', visit_after=r"^  'funchal-h9': v\(.*\),\n", stay_before='  porto: [', transit_before='  porto: {', places=None)


def C(**k):
    d = dict(COMMON)
    d.update(k)
    return d


def r(a, b, mode, mins, opts=''):
    return (RC, R_AFTER, f"  r('{a}', '{b}', '{mode}', {mins}{', ' + opts if opts else ''}),\n")


def stay1(ko, en, q, why):
    return [(ko, en, q, '처음 가는 여행에 추천|Best for a first visit', why)]


CITIES = [
    C(id='peso-da-regua', country='pt', group_title='북부', after='guimaraes', ko='페주 다 헤구아 (도루 계곡)', en='Peso da Régua (Douro Valley)', native='Peso da Régua', lat=41.1636, lng=-7.7882,
      blurb=['세계유산 도루 와인 산지의 강변 중심 도시. 계단식 포도밭 사이로 기차와 유람선이 다니고, 포트와인 농장(킨타)에서 시음합니다.',
             'The riverside hub of the World Heritage Douro wine region—trains and cruise boats wind between terraced vineyards, and port-wine estates (quintas) pour tastings.'],
      highlights=[
          H('도루 박물관', 'Museu do Douro', '도루 지역의 포도 재배와 포트와인 역사를 보여 주는 박물관으로, 시음 바가 있습니다.', 'The museum of Douro winegrowing and port-wine history, with a tasting bar.', 'Museu do Douro Peso da Régua', 60, 90),
          H('도루강 유람선', 'Douro river cruise', '계단식 포도밭 사이로 헤구아와 피냥 사이를 배로 오갑니다.', 'Cruise between Régua and Pinhão through the terraced vineyards.', 'Cais da Régua', 60, 120),
          H('킨타 와인 시음', 'Quinta wine tasting', '강을 내려다보는 포도 농장에서 셀러를 둘러보고 포트와인과 도루 와인을 맛봅니다.', 'Tour a hillside estate above the river and taste port and Douro wines.', 'Quinta do Vallado', 90, 120, b='req',
            n='대부분 예약제이며 헤구아에서 차로 10~20분 거리에 있습니다.|Most are by reservation, 10–20 min by car from Régua.'),
          H('상 레오나르두 다 갈라푸라 전망대', 'Miradouro de São Leonardo da Galafura', '도루강 굽이와 포도밭이 끝없이 펼쳐지는 해발 640m 전망대입니다.', 'A 640 m viewpoint over the bends of the Douro and endless vineyards.', 'Miradouro de São Leonardo da Galafura', 30, 45, group=DAY,
            n='헤구아에서 차로 약 25분입니다.|About 25 min by car from Régua.'),
          H('피냥', 'Pinhão', '아줄레주로 포도 수확 장면을 그린 기차역이 있는 강변 와인 마을입니다.', 'A riverside wine village whose station is tiled with scenes of the grape harvest.', 'Estação de Pinhão', 120, 180, group=DAY,
            n='헤구아에서 기차로 약 25분입니다.|About 25 min by train from Régua.'),
      ],
      hubs="    air: [" + OPO + "],\n    rail: [['Peso da Régua', '페주 다 헤구아역', '도루선|Douro line']],\n",
      itinerary=[1, 2, 3, 4, 5],
      season='9월 말~10월 초 포도 수확철이 가장 아름답습니다. 여름 토요일엔 증기 기관차 관광 열차가 다닙니다.|Most beautiful at harvest (late September to early October); a historic steam train runs on summer Saturdays.',
      stay=stay1('강변', 'Riverside', 'Peso da Régua', '역과 선착장, 박물관이 걸어서 닿습니다. 포도밭 속 킨타 숙소도 많습니다.|The station, piers and museum on foot; many quinta stays among the vines.'),
      routes=[r('porto', 'peso-da-regua', 'train', 135, "{ fa: '포르투 상벤투역|Porto-São Bento', n: '도루선|Douro line' }")],
      transit=dict(modes=['walk', 'train', 'ferry'], ko='마을은 걸어서, 피냥까지는 기차, 킨타는 차나 택시로 갑니다.', en='Walk the town; take the train to Pinhão and a car or taxi to the quintas.'), apps=CP,
      daytrips=[('porto', trip('peso-da-regua', '도루선 기차로 약 2시간 15분. 강변 포도밭을 보고 킨타에서 포트와인을 맛봅니다.|About 2 hr 15 on the Douro line: riverside vineyards and a port tasting at a quinta.'))]),
    C(id='lamego', country='pt', group_title='북부', after='peso-da-regua', ko='라메구', en='Lamego', native='Lamego', lat=41.0965, lng=-7.8099,
      blurb=['도루 계곡 남쪽 언덕의 바로크 순례 도시. 686개 계단 위의 성모 성지와 포르투갈 스파클링 와인 저장고가 있습니다.',
             'A Baroque pilgrimage town on the hills south of the Douro—a Marian shrine atop 686 steps and the cellars of Portuguese sparkling wine.'],
      highlights=[
          H('노사 세뇨라 두스 헤메디우스 성지', 'Sanctuary of Nossa Senhora dos Remédios', '아줄레주와 분수로 꾸민 686개 계단을 올라가는 언덕 위 바로크 성지입니다.', 'The Baroque hilltop shrine reached by 686 steps decorated with tiles and fountains.', 'Santuário de Nossa Senhora dos Remédios Lamego', 60, 90),
          H('라메구 대성당', 'Lamego Cathedral', '12세기 로마네스크 종탑이 남은 대성당입니다.', 'The cathedral with its surviving 12th-century Romanesque tower.', 'Sé de Lamego', 20, 30),
          H('라메구 박물관', 'Museu de Lamego', '옛 주교 궁전에 플랑드르 태피스트리와 바로크 예배당을 전시합니다.', 'Flemish tapestries and Baroque chapels in the former bishops’ palace.', 'Museu de Lamego', 60, 75, c='mon'),
          H('하포세이라 스파클링 와인 저장고', 'Caves da Raposeira', '1898년부터 전통 방식으로 스파클링 와인을 만드는 저장고로, 투어와 시음을 합니다.', 'Cellars making traditional-method sparkling wine since 1898, with tours and tastings.', 'Caves da Raposeira Lamego', 60, 75, b='rec'),
      ],
      hubs="    air: [" + OPO + "],\n    rail: [['Peso da Régua', '페주 다 헤구아역', '라메구까지 버스로 약 25분|about 25 min to Lamego by bus']],\n    bus: [['Lamego bus station', '라메구 버스터미널']],\n",
      itinerary=[2, 3, 1, 4],
      season='9월 초 성모 축제(헤메디우스 축제)에 큰 행렬이 열립니다.|The Remédios festival in early September brings a great procession.',
      stay=stay1('시내 중심', 'Town centre', 'Lamego', '대성당과 계단 아래 공원이 걸어서 닿습니다.|The cathedral and the park at the foot of the steps on foot.'),
      routes=[r('peso-da-regua', 'lamego', 'bus', 25)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다닙니다. 헤구아역까지 버스나 택시를 탑니다.', en='Walk the town; take a bus or taxi to Régua station.'), apps=CP, daytrips=[]),
    C(id='amarante', country='pt', group_title='북부', after='guimaraes', ko='아마란트', en='Amarante', native='Amarante', lat=41.2717, lng=-8.0821,
      blurb=['타메가강 다리와 수도원이 어우러진 강변 마을. 수녀원 비법으로 만든 달콤한 과자와 모더니즘 화가 아마데우의 미술관이 있습니다.',
             'A riverside town of a bridge and monastery on the Tâmega—with convent-recipe sweets and a museum of the modernist painter Amadeo.'],
      highlights=[
          H('상 곤살루 다리', 'Ponte de São Gonçalo', '타메가강을 건너는 18세기 돌다리로, 강변에 수도원과 집들이 비칩니다.', 'The 18th-century stone bridge over the Tâmega, with the monastery and houses reflected in the river.', 'Ponte de São Gonçalo Amarante', 20, 30),
          H('상 곤살루 수도원', 'Mosteiro de São Gonçalo', '다리 옆 16세기 수도원 성당으로, 결혼을 이어 준다는 성인의 무덤이 있습니다.', 'The 16th-century monastery church by the bridge, holding the tomb of a saint said to bring marriages.', 'Igreja de São Gonçalo Amarante', 30, 45),
          H('아마데우 드 소자 카르도주 미술관', 'Museu Amadeo de Souza-Cardoso', '이 마을 출신 모더니즘 화가 아마데우의 작품을 옛 수도원 회랑에 전시합니다.', 'Works by the local-born modernist Amadeo in the former monastery cloister.', 'Museu Municipal Amadeo de Souza-Cardoso', 45, 60, c='mon'),
          H('수녀원 과자', 'Convent sweets', '달걀노른자와 설탕으로 만든 ‘레리아스’, ‘팡 드 로’ 같은 아마란트의 수녀원 과자를 다리 옆 제과점에서 맛봅니다.', 'Try Amarante’s convent sweets of egg yolk and sugar—lérias and more—at the bakeries by the bridge.', 'Confeitaria da Ponte Amarante', 20, 30),
      ],
      hubs="    air: [" + OPO + "],\n    bus: [['Amarante bus station', '아마란트 버스터미널', '포르투행 버스|buses to Porto']],\n",
      itinerary=[1, 2, 4, 3],
      season='6월 첫 주말 상 곤살루 축제가 열립니다.|The São Gonçalo festival is held on the first weekend of June.',
      stay=stay1('다리 주변', 'By the bridge', 'Amarante', '다리와 수도원, 강변이 모두 걸어서 닿습니다.|The bridge, monastery and riverside all on foot.'),
      routes=[r('porto', 'amarante', 'bus', 60)],
      transit=dict(modes=['walk', 'bus'], ko='마을은 걸어서 다닙니다.', en='Walk the town.'), apps=CP,
      daytrips=[('porto', trip('amarante', '버스로 약 1시간. 강변 다리와 수도원을 보고 수녀원 과자를 맛봅니다.|About 1 hr by bus: the bridge, the monastery and convent sweets.'))]),
    C(id='viana-do-castelo', country='pt', group_title='북부', after='braga', ko='비아나 두 카스텔루', en='Viana do Castelo', native='Viana do Castelo', lat=41.6932, lng=-8.8329,
      blurb=['리마강 어귀의 대서양 항구 도시. 언덕 위 산타 루지아 성당에서 강과 바다가 한눈에 보이고, 화려한 금세공과 민속 의상으로 유명합니다.',
             'An Atlantic port at the mouth of the Lima—the hilltop Santa Luzia basilica looks over river and sea, and the town is known for its filigree gold and folk costume.'],
      highlights=[
          H('산타 루지아 성당', 'Santa Luzia Basilica', '언덕 꼭대기의 20세기 성당으로, 푸니쿨라로 올라 돔 위에서 강 어귀와 바다를 봅니다.', 'The 20th-century hilltop basilica, reached by funicular—climb the dome for views of the estuary and sea.', 'Santuário de Santa Luzia Viana do Castelo', 60, 90),
          H('공화국 광장', 'Praça da República', '르네상스 분수와 옛 시청, 자비의 집이 둘러싼 중심 광장입니다.', 'The main square of a Renaissance fountain, the old town hall and the Misericórdia.', 'Praça da República Viana do Castelo', 20, 30),
          H('질 이아느스 병원선', 'Gil Eannes hospital ship', '대구잡이 어선단을 돌보던 병원선을 박물관으로 꾸몄습니다.', 'The hospital ship that served the cod-fishing fleet, now a museum.', 'Navio Gil Eannes', 45, 60),
          H('에펠 다리', 'Ponte Eiffel', '에펠 사무소가 설계해 1878년 놓은 2층 철교로, 리마강을 건넙니다.', 'The two-deck iron bridge over the Lima, designed by Eiffel’s company and opened in 1878.', 'Ponte Eiffel Viana do Castelo', 15, 20),
          H('카베델루 해변', 'Praia do Cabedelo', '강 건너 모래언덕 사이 해변으로, 바람이 좋아 카이트서핑을 많이 합니다.', 'A dune-backed beach across the river, popular with kitesurfers for its wind.', 'Praia do Cabedelo Viana do Castelo', 60, 120),
      ],
      hubs="    air: [" + OPO + "],\n    rail: [['Viana do Castelo', '비아나 두 카스텔루역']],\n",
      itinerary=[2, 4, 3, 1, 5],
      season='8월 아고니아 축제에 민속 의상 행렬과 금 장신구가 거리를 채웁니다.|In August the Agonia festival fills the streets with folk costume and gold jewellery.',
      stay=stay1('구시가', 'Old town', 'Praça da República Viana do Castelo', '광장과 강변, 역이 걸어서 닿습니다.|The square, riverside and station on foot.'),
      routes=[r('porto', 'viana-do-castelo', 'train', 85, "{ fa: '포르투 캄파냐역|Porto-Campanhã' }")],
      transit=dict(modes=['walk', 'train', 'bus'], ko='시내는 걸어서, 산타 루지아는 푸니쿨라로 갑니다.', en='Walk the town and take the funicular to Santa Luzia.'), apps=CP,
      daytrips=[('porto', trip('viana-do-castelo', '기차로 약 1시간 25분. 푸니쿨라로 산타 루지아 성당에 오르고 구시가 광장을 봅니다.|About 1 hr 25 by train: the funicular to Santa Luzia and the old-town square.'))]),
    C(id='alcobaca', country='pt', group_title='중부', after='obidos', ko='알코바사·바탈랴', en='Alcobaça & Batalha', native='Alcobaça', lat=39.5481, lng=-8.9793,
      blurb=['세계유산 수도원 두 곳의 고장. 알코바사 수도원엔 비극적 사랑의 주인공 페드루 왕과 이네스의 무덤이 있고, 가까운 바탈랴엔 지붕 없는 미완성 예배당이 있습니다.',
             'Home to two World Heritage monasteries—Alcobaça holds the tombs of the ill-fated lovers King Pedro and Inês, and nearby Batalha has its roofless Unfinished Chapels.'],
      highlights=[
          H('알코바사 수도원', 'Alcobaça Monastery', '12세기 시토회 수도원으로, 높은 고딕 신랑과 페드루 왕·이네스의 조각 무덤, 거대한 부엌이 있습니다.', 'The 12th-century Cistercian abbey of soaring Gothic nave, the carved tombs of Pedro and Inês and a vast kitchen.', 'Mosteiro de Alcobaça', 75, 90),
          H('바탈랴 수도원', 'Batalha Monastery', '1385년 전투 승리를 기념한 고딕 수도원으로, 지붕 없는 미완성 예배당이 압권입니다.', 'The Gothic monastery built for the victory of 1385, crowned by the roofless Unfinished Chapels.', 'Mosteiro da Batalha', 75, 90,
            n='알코바사에서 버스로 약 30분입니다.|About 30 min by bus from Alcobaça.'),
          H('국립 와인 박물관', 'National Wine Museum', '옛 와인 협동조합 건물에 포르투갈 와인 생산 도구와 역사를 전시합니다.', 'The history and tools of Portuguese winemaking in a former wine co-operative.', 'Museu Nacional do Vinho Alcobaça', 45, 60, c='mon'),
          H('상 마르치뉴 두 포르투 만', 'São Martinho do Porto bay', '조개껍데기 모양으로 거의 닫힌 잔잔한 만의 해변 마을입니다.', 'A beach village on a calm, almost closed shell-shaped bay.', 'São Martinho do Porto', 120, 180, group=DAY,
            n='알코바사에서 버스나 차로 약 20분입니다.|About 20 min from Alcobaça by bus or car.'),
      ],
      hubs="    air: [" + LIS + "],\n    bus: [['Alcobaça bus station', '알코바사 버스터미널', '리스본·나자레·바탈랴행|to Lisbon, Nazaré and Batalha']],\n",
      itinerary=[1, 3, 2, 4],
      season='11월 수녀원 과자 축제가 수도원에서 열립니다.|The convent-sweets fair is held at the monastery in November.',
      stay=stay1('수도원 앞', 'By the monastery', 'Mosteiro de Alcobaça', '수도원과 버스터미널이 걸어서 닿습니다. 나자레에 묵고 다녀와도 됩니다.|The monastery and bus station on foot; Nazaré also works as a base.'),
      routes=[r('lisbon', 'alcobaca', 'bus', 120, "{ fa: '세트 히우스 버스터미널|Sete Rios' }"), r('nazare', 'alcobaca', 'bus', 20)],
      transit=dict(modes=['walk', 'bus'], ko='마을은 걸어서 다니고, 바탈랴·나자레는 버스로 갑니다.', en='Walk the town; buses go to Batalha and Nazaré.'), apps=CP, daytrips=[]),
    C(id='setubal', country='pt', group_title='중부', after='cascais', ko='세투발 (아라비다)', en='Setúbal (Arrábida)', native='Setúbal', lat=38.5244, lng=-8.8882,
      blurb=['사두강 어귀의 항구 도시. 아라비다 산이 바다로 떨어지는 해변과 강에 사는 돌고래, 모스카텔 와인 산지가 가깝습니다.',
             'A port at the mouth of the Sado—with the beaches where the Arrábida hills drop to the sea, river dolphins and the Moscatel wine country close by.'],
      highlights=[
          H('아라비다 자연공원', 'Arrábida Natural Park', '석회암 산이 청록빛 바다로 떨어지는 해안으로, 포르티뉴 다 아라비다 해변이 유명합니다.', 'Limestone hills dropping into turquoise water, with the famous Portinho da Arrábida beach.', 'Portinho da Arrábida', 180, 300,
            n='여름엔 해변 도로에 차량 제한이 있어 셔틀버스를 탑니다.|In summer the beach road restricts cars and shuttle buses run.'),
          H('사두강 돌고래 관찰', 'Sado dolphin watching', '사두강 어귀에 사는 큰돌고래 무리를 배를 타고 봅니다.', 'Boat trips to see the resident bottlenose dolphins of the Sado estuary.', 'Doca de Recreio Setúbal', 150, 180, b='rec'),
          H('리브라멘투 시장', 'Mercado do Livramento', '아줄레주 벽화로 꾸민 수산 시장으로, 갓 잡은 생선이 가득합니다.', 'The fish market lined with azulejo murals, full of the day’s catch.', 'Mercado do Livramento Setúbal', 30, 45, c='mon'),
          H('예수 수도원', 'Convento de Jesus', '꼬인 기둥이 있는 마누엘 양식 초기 수도원 성당입니다.', 'An early Manueline convent church with twisted stone columns.', 'Igreja de Jesus Setúbal', 30, 45),
          H('아제이탕 모스카텔 와이너리', 'Azeitão Moscatel winery', '세투발 모스카텔 와인을 만드는 아제이탕의 오래된 와이너리(조제 마리아 다 폰세카 등)를 둘러봅니다.', 'Tour an old Azeitão winery making Setúbal Moscatel, such as José Maria da Fonseca.', 'José Maria da Fonseca Azeitão', 90, 120, group=DAY, b='rec',
            n='세투발에서 버스나 차로 약 20분입니다.|About 20 min from Setúbal by bus or car.'),
      ],
      hubs="    air: [" + LIS + "],\n    rail: [['Setúbal', '세투발역', '리스본행 페르타구스|Fertagus to Lisbon']],\n    port: [['Setúbal ferry', '세투발 페리 터미널', '트로이아행|to Tróia']],\n",
      itinerary=[3, 4, 2, 1, 5],
      season='여름 아라비다 해변이 가장 붐빕니다. 돌고래 관찰은 1년 내내 가능합니다.|Arrábida’s beaches are busiest in summer; dolphin trips run all year.',
      stay=stay1('구시가와 강변', 'Old town & riverside', 'Setúbal centre', '시장과 선착장이 걸어서 닿고 역까지 걸어서 약 15분입니다.|The market and piers on foot, about 15 min’s walk from the station.'),
      routes=[r('lisbon', 'setubal', 'train', 60, "{ fa: '로마-아레에이루역|Roma-Areeiro', n: '페르타구스|Fertagus' }")],
      transit=dict(modes=['walk', 'bus', 'train', 'ferry'], ko='시내는 걸어서, 아라비다는 버스나 차로 갑니다.', en='Walk the town; reach Arrábida by bus or car.'), apps=CP,
      daytrips=[('lisbon', trip('setubal', '기차로 약 1시간. 돌고래 관찰 배를 타거나 아라비다 해변에 갑니다.|About 1 hr by train: a dolphin-watching boat or Arrábida’s beaches.'))]),
    C(id='ericeira', country='pt', group_title='중부', after='sintra', ko='에리세이라', en='Ericeira', native='Ericeira', lat=38.9634, lng=-9.4154,
      blurb=['유럽 유일의 세계 서핑 보호구역에 있는 하얀·파란 어촌. 절벽 위 마을에서 바다를 보며 해산물을 먹고, 가까운 마프라 궁전에 다녀옵니다.',
             'A white-and-blue fishing village in Europe’s only World Surfing Reserve—seafood above the cliffs, with Mafra Palace nearby.'],
      highlights=[
          H('구시가 골목', 'Old village lanes', '흰 벽에 파란 띠를 두른 집들이 이어지는 절벽 위 골목입니다.', 'Clifftop lanes of white houses trimmed in blue.', 'Ericeira centro', 45, 60),
          H('페스카도르스 해변', 'Praia dos Pescadores', '마을 아래 어선이 올라오는 작은 해변으로, 절벽 위 전망대에서 내려다봅니다.', 'The little beach below the village where fishing boats are hauled up, seen from the clifftop.', 'Praia dos Pescadores Ericeira', 30, 60),
          H('히베이라 드 일랴스', 'Ribeira d’Ilhas', '세계 서핑 대회가 열리는 바위 해변으로, 서핑 강습이 많습니다.', 'The rocky surf beach that hosts world-tour contests, with plenty of surf schools.', 'Praia da Ribeira d\'Ilhas', 60, 180),
          H('마프라 궁전', 'Mafra National Palace', '브라질 금으로 지은 거대한 바로크 궁전·수도원으로 로코코 도서관이 유명한 세계유산입니다.', 'The vast Baroque palace-convent built with Brazilian gold, famous for its Rococo library—a World Heritage site.', 'Palácio Nacional de Mafra', 90, 120, group=DAY, c='tue',
            n='에리세이라에서 버스로 약 20분입니다.|About 20 min by bus from Ericeira.'),
      ],
      hubs="    air: [" + LIS + "],\n    bus: [['Ericeira bus station', '에리세이라 버스터미널', '리스본 캄푸 그란드행|to Lisbon Campo Grande']],\n",
      itinerary=[1, 2, 3, 4],
      season='가을~봄이 큰 파도의 서핑 철이고, 여름은 초보자에게 좋습니다.|Autumn to spring brings the big surf; summer suits beginners.',
      stay=stay1('구시가', 'Old village', 'Ericeira', '해변과 식당이 걸어서 닿고 버스터미널까지 걸어서 약 10분입니다.|Beaches and restaurants on foot, about 10 min’s walk from the bus station.'),
      routes=[r('lisbon', 'ericeira', 'bus', 60, "{ fa: '캄푸 그란드 버스터미널|Campo Grande' }")],
      transit=dict(modes=['walk', 'bus'], ko='마을은 걸어서 다니고, 마프라·리스본은 버스로 갑니다.', en='Walk the village; buses go to Mafra and Lisbon.'), apps=CP,
      daytrips=[('lisbon', trip('ericeira', '버스로 약 1시간. 서핑 해변과 하얀 어촌을 보고 해산물을 먹습니다. 가는 길에 마프라 궁전을 들러도 됩니다.|About 1 hr by bus: surf beaches, the white village and seafood; stop at Mafra Palace on the way.'))]),
    C(id='manteigas', country='pt', group_title='중부', after='coimbra', ko='만테이가스 (세하 다 에스트렐라)', en='Manteigas (Serra da Estrela)', native='Manteigas', lat=40.4022, lng=-7.5383,
      blurb=['포르투갈 본토 최고봉이 있는 세하 다 에스트렐라 산맥 한가운데 계곡 마을. 빙하 계곡 하이킹과 폭포, 크림처럼 부드러운 세하 치즈의 고장입니다.',
             'A valley village in the heart of the Serra da Estrela, home to mainland Portugal’s highest point—glacial-valley hikes, waterfalls and the creamy Serra cheese.'],
      highlights=[
          H('토레', 'Torre', '해발 1,993m 포르투갈 본토 최고 지점으로, 겨울엔 스키장이 됩니다.', 'Mainland Portugal’s highest point at 1,993 m, a ski area in winter.', 'Torre Serra da Estrela', 60, 90,
            n='만테이가스에서 차로 약 30분이며 겨울엔 도로가 눈으로 닫히기도 합니다.|About 30 min by car from Manteigas; snow sometimes closes the road in winter.'),
          H('제제르 빙하 계곡', 'Zêzere Glacial Valley', '빙하가 깎은 U자 계곡을 따라 걷는 산길입니다.', 'Hiking trails along the U-shaped valley carved by glaciers.', 'Vale Glaciar do Zêzere', 180, 300),
          H('포수 두 인페르누 폭포', 'Poço do Inferno', '숲속 절벽에서 떨어지는 폭포로, 겨울엔 얼어붙기도 합니다.', 'A waterfall dropping from a forest cliff, sometimes frozen in winter.', 'Poço do Inferno Manteigas', 60, 90),
          H('세하 다 에스트렐라 치즈 센터', 'Serra da Estrela cheese centre', '양젖으로 만드는 크림 같은 세하 치즈의 역사와 제조를 배우고 맛봅니다.', 'Learn how the creamy sheep’s-milk Serra cheese is made, and taste it.', 'Solar do Queijo Celorico da Beira', 60, 75, group=DAY,
            n='셀로리쿠 다 베이라에 있으며 만테이가스에서 차로 약 50분입니다.|In Celorico da Beira, about 50 min by car from Manteigas.'),
      ],
      hubs="    air: [" + LIS + ", " + OPO + "],\n    rail: [['Covilhã', '코빌량역', '만테이가스까지 차로 약 40분|about 40 min to Manteigas by car']],\n",
      itinerary=[2, 3, 1, 4],
      season='12~3월엔 눈이 와 스키를 탑니다. 5~10월이 산길 걷기에 좋습니다. 세하 치즈는 겨울~봄이 제철입니다.|Snow and skiing December–March; May–October suits hiking. Serra cheese is best in winter and spring.',
      stay=stay1('만테이가스 마을', 'Manteigas village', 'Manteigas', '계곡 산길이 마을에서 시작됩니다. 대중교통이 적어 차가 편합니다.|Valley trails start in the village; with little public transport, a car is easiest.'),
      routes=[r('lisbon', 'manteigas', 'mixed', 300, "{ fa: '리스본 오리엔트역|Lisboa Oriente', n: '코빌량까지 기차, 이후 택시나 렌터카|train to Covilhã, then taxi or car' }")],
      transit=dict(modes=['walk', 'taxi'], ko='산과 계곡은 차로 다니는 것이 편합니다.', en='A car is easiest for the mountains and valleys.'), apps=CP, daytrips=[]),
    C(id='monsanto', country='pt', group_title='중부', after='manteigas', ko='몬산투', en='Monsanto', native='Monsanto', lat=40.0386, lng=-7.1151,
      blurb=['거대한 화강암 바위 사이에 집들이 끼어 있는 언덕 위 마을. ‘가장 포르투갈다운 마을’로 뽑혔고, 꼭대기 성에서 평원이 끝없이 보입니다.',
             'A hilltop village of houses wedged between giant granite boulders—voted the “most Portuguese village”, with endless plains below its castle.'],
      highlights=[
          H('바위 마을 골목', 'Boulder village lanes', '바위가 지붕이 되고 벽이 된 집들 사이 돌길을 걷습니다.', 'Walk the stone lanes between houses that use boulders as roofs and walls.', 'Monsanto Idanha-a-Nova', 60, 90),
          H('몬산투 성', 'Monsanto Castle', '마을 꼭대기 바위 위의 성터로, 스페인 국경 쪽 평원이 내려다보입니다.', 'The castle ruins on the boulders atop the village, overlooking the plains towards Spain.', 'Castelo de Monsanto', 45, 60),
          H('이다냐 아 벨랴', 'Idanha-a-Velha', '로마 성벽과 서고트 성당이 남은 작은 옛 도시 마을입니다.', 'A tiny village with Roman walls and a Visigothic cathedral.', 'Idanha-a-Velha', 60, 90, group=DAY,
            n='몬산투에서 차로 약 15분입니다.|About 15 min by car from Monsanto.'),
      ],
      hubs="    air: [" + LIS + "],\n    rail: [['Castelo Branco', '카스텔루 브랑쿠역', '몬산투까지 버스·택시로 약 1시간|about 1 hr to Monsanto by bus or taxi']],\n",
      itinerary=[1, 2, 3],
      season='봄·가을이 걷기에 좋고, 한여름 낮은 덥습니다. 5월 첫 주말 성 축제가 열립니다.|Spring and autumn are best for walking; summer afternoons are hot. A castle festival is held on the first weekend of May.',
      stay=stay1('마을 안', 'In the village', 'Monsanto', '당일 손님이 떠난 저녁과 아침이 조용합니다. 대중교통이 적어 차가 편합니다.|Quiet in the evening and morning once day-trippers leave; a car is easiest.'),
      routes=[r('lisbon', 'monsanto', 'mixed', 270, "{ fa: '리스본 오리엔트역|Lisboa Oriente', n: '카스텔루 브랑쿠까지 기차, 이후 버스(평일)나 택시|train to Castelo Branco, then a weekday bus or taxi' }")],
      transit=dict(modes=['walk', 'taxi'], ko='마을은 걸어서 다니고, 주변 마을은 차로 갑니다.', en='Walk the village; drive to nearby villages.'), apps=CP, daytrips=[]),
    C(id='tavira', country='pt', group_title='남부', after='faro', ko='타비라', en='Tavira', native='Tavira', lat=37.1273, lng=-7.6506,
      blurb=['알가르브에서 가장 아름다운 옛 도시. 질라웅강의 옛 다리와 성당 서른여 곳, 섬 해변이 있습니다.',
             'The Algarve’s prettiest old town—an old bridge over the Gilão, some thirty churches and island beaches.'],
      highlights=[
          H('옛 다리', 'Ponte Romana', '질라웅강을 건너는 7개 아치의 옛 다리로, 로마 다리로 불립니다.', 'The seven-arched old bridge over the Gilão, known as the Roman Bridge.', 'Ponte Romana Tavira', 15, 20),
          H('타비라 성', 'Tavira Castle', '언덕 위 이슬람 시대 성터의 정원으로, 성벽 위에서 지붕들이 내려다보입니다.', 'The garden inside a Moorish-era castle, with rooftop views from the walls.', 'Castelo de Tavira', 20, 30),
          H('타비라 섬', 'Ilha de Tavira', '배를 타고 건너가는 긴 모래섬 해변입니다.', 'A long sandbar island beach reached by boat.', 'Ilha de Tavira', 180, 300,
            n='여름엔 시내에서 배가 자주 다니고 겨울엔 운항이 줄어듭니다.|Boats run often from town in summer, less in winter.'),
          H('바릴 해변 닻 무덤', 'Praia do Barril anchor cemetery', '옛 참치잡이 마을 해변 모래언덕에 녹슨 닻 수백 개가 줄지어 놓여 있습니다.', 'Hundreds of rusting anchors lined up in the dunes of an old tuna-fishing beach.', 'Cemitério das Âncoras Praia do Barril', 90, 150, group=DAY,
            n='산타 루지아에서 꼬마 기차나 걸어서 갑니다(타비라에서 약 10분 거리).|Reached by mini-train or on foot from Santa Luzia, about 10 min from Tavira.'),
      ],
      hubs="    air: [" + FAO + "],\n    rail: [['Tavira', '타비라역']],\n",
      itinerary=[1, 2, 3, 4],
      season='6~9월이 해변 철이고, 겨울에도 따뜻해 걷기 좋습니다.|June–September is beach season; mild winters are good for walking.',
      stay=stay1('강변 구시가', 'Riverside old town', 'Tavira centre', '다리와 성, 섬행 선착장이 걸어서 닿고 역까지 걸어서 약 10분입니다.|The bridge, castle and island boats on foot, about 10 min’s walk from the station.'),
      routes=[r('faro', 'tavira', 'train', 40)],
      transit=dict(modes=['walk', 'train', 'ferry'], ko='시내는 걸어서, 섬은 배로 갑니다.', en='Walk the town; boats go to the island.'), apps=CP, daytrips=[]),
    C(id='marvao', country='pt', group_title='남부', after='evora', ko='마르바웅', en='Marvão', native='Marvão', lat=39.3936, lng=-7.3764,
      blurb=['해발 약 860m 바위 능선 위 성벽 마을. 성탑에 오르면 스페인까지 내려다보이고, 이웃 카스텔루 드 비드엔 중세 유대인 골목이 있습니다.',
             'A walled village on a rocky ridge about 860 m up—its castle keep looks far into Spain, and neighbouring Castelo de Vide has a medieval Jewish quarter.'],
      highlights=[
          H('마르바웅 성', 'Marvão Castle', '바위 꼭대기의 13세기 성으로, 탑 위에서 알렌테주 평원과 스페인이 보입니다.', 'The 13th-century castle on the summit rock, its keep looking over the Alentejo and into Spain.', 'Castelo de Marvão', 45, 60),
          H('성벽 마을 골목', 'Walled village lanes', '하얀 집과 꽃 화분이 이어지는 성벽 안 골목을 한 바퀴 걷습니다.', 'A loop of the lanes inside the walls, past white houses and flowerpots.', 'Marvão', 45, 60),
          H('카스텔루 드 비드', 'Castelo de Vide', '중세 유대인 골목과 회당, 샘물 분수가 있는 이웃 언덕 마을입니다.', 'The neighbouring hill town of a medieval Jewish quarter, synagogue and spring fountain.', 'Castelo de Vide', 120, 180, group=DAY,
            n='마르바웅에서 차로 약 15분입니다.|About 15 min by car from Marvão.'),
      ],
      hubs="    air: [" + LIS + "],\n    bus: [['Portalegre bus station', '포르탈레그르 버스터미널', '마르바웅까지 버스(평일)·택시|weekday bus or taxi to Marvão']],\n",
      itinerary=[2, 1, 3],
      season='11월 밤 축제(밤나무 열매 축제)가 마을 안에서 열립니다. 겨울엔 안개가 잦습니다.|The chestnut fair fills the village in November; winter brings frequent fog.',
      stay=stay1('성벽 안', 'Inside the walls', 'Marvão', '노을과 아침 안개를 보려면 마을 안에 묵습니다. 대중교통이 적어 차가 편합니다.|Stay inside the walls for sunset and morning mist; a car is easiest.'),
      routes=[r('lisbon', 'marvao', 'mixed', 240, "{ fa: '세트 히우스 버스터미널|Sete Rios', n: '포르탈레그르까지 버스, 이후 평일 버스나 택시|bus to Portalegre, then a weekday bus or taxi' }")],
      transit=dict(modes=['walk', 'taxi'], ko='마을은 걸어서 다니고, 이웃 마을은 차로 갑니다.', en='Walk the village; drive to neighbouring towns.'), apps=CP, daytrips=[]),
    C(id='elvas', country='pt', group_title='남부', after='marvao', ko='엘바스', en='Elvas', native='Elvas', lat=38.8810, lng=-7.1634,
      blurb=['스페인 바다호스와 마주한 국경 요새 도시. 별 모양 성벽과 요새, 길이 7km의 수도교가 세계유산입니다.',
             'The border fortress town facing Spain’s Badajoz—its star-shaped walls, forts and 7 km aqueduct are a World Heritage site.'],
      highlights=[
          H('아모레이라 수도교', 'Amoreira Aqueduct', '17세기에 완성된 길이 약 7km의 수도교로, 시내 입구에 높은 아치가 섭니다.', 'The aqueduct of about 7 km completed in the 17th century, its tall arches striding into town.', 'Aqueduto da Amoreira Elvas', 20, 30),
          H('그라사 요새', 'Forte da Graça', '언덕 위 18세기 요새로, 겹겹의 별 모양 성벽 안을 둘러봅니다.', 'The 18th-century hilltop fort, walked through within its layered star-shaped walls.', 'Forte de Nossa Senhora da Graça Elvas', 60, 90, c='mon'),
          H('공화국 광장과 옛 대성당', 'Praça da República & old cathedral', '흑백 무늬 돌바닥 광장과 마누엘 양식 옛 대성당입니다.', 'The square of black-and-white patterned paving and the Manueline former cathedral.', 'Praça da República Elvas', 30, 45),
          H('산타 루지아 요새', 'Forte de Santa Luzia', '17세기 별 모양 요새로, 안에 군사 박물관이 있습니다.', 'A 17th-century star fort housing a military museum.', 'Forte de Santa Luzia Elvas', 45, 60, c='mon'),
      ],
      hubs="    air: [" + LIS + ", ['Badajoz (BJZ)', '바다호스 공항 (BJZ)', '스페인 바다호스|Badajoz, Spain']],\n    bus: [['Elvas bus station', '엘바스 버스터미널']],\n",
      itinerary=[1, 3, 4, 2],
      season='여름 낮은 40℃ 가까이 덥습니다. 봄과 가을이 걷기에 좋습니다.|Summer afternoons can approach 40 °C; spring and autumn are best for walking.',
      stay=stay1('성벽 안 구시가', 'Old town inside the walls', 'Praça da República Elvas', '광장과 요새가 걸어서 닿습니다.|The square and forts on foot.'),
      routes=[r('lisbon', 'elvas', 'bus', 180, "{ fa: '세트 히우스 버스터미널|Sete Rios' }"), r('evora', 'elvas', 'bus', 100)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='구시가는 걸어서, 그라사 요새는 택시로 갑니다.', en='Walk the old town; take a taxi to Forte da Graça.'), apps=CP, daytrips=[]),
    C(id='ponta-delgada', country='pt', group_title='마데이라', after='funchal', ko='폰타 델가다 (상 미겔 섬)', en='Ponta Delgada (São Miguel)', native='Ponta Delgada', lat=37.7412, lng=-25.6756,
      blurb=['대서양 한가운데 아소르스 제도의 가장 큰 섬 도시. 분화구 호수와 온천, 유럽 유일의 차밭이 있고, 고래를 보러 배가 나갑니다.',
             'The main town of São Miguel, the largest Azorean island in mid-Atlantic—crater lakes, hot springs, Europe’s only tea plantations and whale-watching boats.'],
      highlights=[
          H('도시의 문', 'Portas da Cidade', '흰 벽에 검은 화산석으로 테를 두른 18세기 성문 아치입니다.', 'The 18th-century city-gate arches of white walls trimmed in black volcanic stone.', 'Portas da Cidade Ponta Delgada', 15, 20),
          H('고래 관찰', 'Whale watching', '향유고래와 돌고래를 보러 항구에서 배가 나갑니다.', 'Boats leave the harbour to look for sperm whales and dolphins.', 'Marina de Ponta Delgada', 180, 240, b='rec'),
          H('세트 시다드스', 'Sete Cidades', '분화구 안에 초록·파랑 쌍둥이 호수가 있는 칼데라로, 비스타 두 헤이 전망대에서 내려다봅니다.', 'A caldera holding twin green and blue lakes, seen from the Vista do Rei viewpoint.', 'Miradouro da Vista do Rei', 180, 240, group=DAY,
            n='폰타 델가다에서 차로 약 30분입니다.|About 30 min by car from Ponta Delgada.'),
          H('푸르나스', 'Furnas', '온천 정원 테하 노스트라와, 땅속 지열로 익히는 스튜 ‘코지두’로 유명한 화산 마을입니다.', 'The volcanic village of the Terra Nostra hot-spring garden and cozido stew cooked in the hot ground.', 'Parque Terra Nostra Furnas', 300, 420, group=DAY,
            n='폰타 델가다에서 차로 약 50분입니다.|About 50 min by car from Ponta Delgada.'),
          H('고헤아나 차밭', 'Gorreana Tea Plantation', '1883년부터 차를 재배하는 유럽 최고(最古)급 차밭으로, 공장을 둘러보고 무료로 시음합니다.', 'One of Europe’s oldest tea plantations, growing tea since 1883—tour the factory and taste for free.', 'Chá Gorreana', 60, 75, group=DAY,
            n='폰타 델가다에서 차로 약 40분입니다.|About 40 min by car from Ponta Delgada.'),
      ],
      hubs="    air: [['Ponta Delgada João Paulo II (PDL)', '폰타 델가다 공항 (PDL)']],\n",
      itinerary=[1, 2, 3, 4, 5],
      season='1년 내내 온화하지만 날씨가 하루에도 여러 번 바뀝니다. 고래 관찰은 봄~가을이 좋습니다.|Mild all year but the weather changes several times a day; whale watching is best spring to autumn.',
      stay=stay1('시내 중심과 마리나', 'Centre & marina', 'Ponta Delgada', '성문과 항구가 걸어서 닿고 공항까지 차로 약 10분입니다. 섬 일주는 차가 편합니다.|The gates and harbour on foot, about 10 min from the airport; a car is easiest for touring the island.'),
      routes=[r('lisbon', 'ponta-delgada', 'flight', 140), r('porto', 'ponta-delgada', 'flight', 145)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 섬 일주는 렌터카나 투어가 편합니다.', en='Walk the town; a rental car or tour is easiest for the island.'), apps='', daytrips=[]),
    C(id='angra-do-heroismo', country='pt', group_title='마데이라', after='ponta-delgada', ko='앙그라 두 에로이즈무 (테르세이라 섬)', en='Angra do Heroísmo (Terceira)', native='Angra do Heroísmo', lat=38.6550, lng=-27.2186,
      blurb=['대항해시대 대서양 항로의 기항지였던 르네상스 항구 도시로, 구시가가 세계유산입니다. 섬 안에 걸어 들어가는 화산 동굴과 용암 천연 수영장이 있습니다.',
             'A Renaissance port that was a waypoint on the Age-of-Discovery Atlantic routes, its old town a World Heritage site—with a volcanic chimney to walk into and lava rock pools on the island.'],
      highlights=[
          H('구시가', 'Old town', '대항해시대 바둑판 거리에 색색의 집과 성당이 이어지는 세계유산 구시가입니다.', 'The World Heritage grid of colourful houses and churches from the Age of Discovery.', 'Angra do Heroísmo centro', 90, 120),
          H('몬테 브라질', 'Monte Brasil', '항구 옆 화산 반도로, 요새와 산책로를 따라 올라 시내를 내려다봅니다.', 'The volcanic peninsula by the harbour—climb past the fortress for views over the town.', 'Monte Brasil Angra do Heroísmo', 90, 120),
          H('알가르 두 카르방', 'Algar do Carvão', '분화한 화산의 굴뚝 속으로 계단을 따라 걸어 내려가는 동굴입니다.', 'Walk down stairs into the throat of an extinct volcano.', 'Algar do Carvão', 60, 75, group=DAY,
            n='대체로 봄~가을에만 열며 앙그라에서 차로 약 25분입니다.|Usually open spring to autumn only; about 25 min by car from Angra.'),
          H('비스코이투스 천연 수영장과 와인 박물관', 'Biscoitos rock pools & wine museum', '검은 용암 사이 천연 수영장과, 용암 돌담 포도밭의 와인 박물관이 있는 북쪽 해안 마을입니다.', 'A north-coast village of natural pools among black lava and a wine museum amid lava-walled vineyards.', 'Biscoitos Terceira', 120, 180, group=DAY,
            n='앙그라에서 차로 약 30분입니다.|About 30 min by car from Angra.'),
      ],
      hubs="    air: [['Terceira Lajes (TER)', '테르세이라 공항 (TER)']],\n",
      itinerary=[1, 2, 3, 4],
      season='6월 말 상 주아니냐스 축제가 가장 큽니다. 날씨가 자주 바뀌니 겉옷을 챙기세요.|The Sanjoaninas festival in late June is the biggest; pack a layer for changeable weather.',
      stay=stay1('구시가', 'Old town', 'Angra do Heroísmo', '구시가와 항구가 걸어서 닿고 공항까지 차로 약 25분입니다.|The old town and harbour on foot, about 25 min by car from the airport.'),
      routes=[r('lisbon', 'angra-do-heroismo', 'flight', 150), r('ponta-delgada', 'angra-do-heroismo', 'flight', 40)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='구시가는 걸어서 다니고, 섬 일주는 차가 편합니다.', en='Walk the old town; a car is easiest for the island.'), apps='', daytrips=[]),
]

PT_GROUPS = [
    ('중부', 'Central Portugal', ['lisbon', 'sintra', 'ericeira', 'cascais', 'setubal', 'obidos', 'alcobaca', 'nazare', 'fatima', 'tomar', 'coimbra', 'manteigas', 'monsanto']),
    ('북부', 'Northern Portugal', ['porto', 'braga', 'viana-do-castelo', 'guimaraes', 'amarante', 'peso-da-regua', 'lamego', 'aveiro']),
    ('남부', 'Southern Portugal', ['evora', 'marvao', 'elvas', 'faro', 'tavira', 'lagos']),
    ('마데이라', 'Madeira', ['funchal']),
    ('아소르스 제도', 'Azores', ['ponta-delgada', 'angra-do-heroismo']),
]
TRIPS = {
    'peso-da-regua': [('갈라푸라 전망대|Galafura viewpoint', 4), ('피냥|Pinhão', 5)], 'alcobaca': [('상 마르치뉴 두 포르투|São Martinho do Porto', 4)],
    'setubal': [('아제이탕|Azeitão', 5)], 'ericeira': [('마프라|Mafra', 4)], 'manteigas': [('셀로리쿠 다 베이라|Celorico da Beira', 4)],
    'monsanto': [('이다냐 아 벨랴|Idanha-a-Velha', 3)], 'tavira': [('바릴 해변|Praia do Barril', 4)], 'marvao': [('카스텔루 드 비드|Castelo de Vide', 3)],
    'ponta-delgada': [('세트 시다드스|Sete Cidades', 3), ('푸르나스와 고헤아나|Furnas & Gorreana', 4, 5)],
    'angra-do-heroismo': [('알가르 두 카르방|Algar do Carvão', 3), ('비스코이투스|Biscoitos', 4)],
}


def finish():
    it = rd('itinerary-iberia.ts')
    for cid, trips in TRIPS.items():
        lst = next(c['itinerary'] for c in CITIES if c['id'] == cid)
        key = f"'{cid}'" if '-' in cid else cid
        old = f"  {key}: [{', '.join(map(str, lst))}],\n"
        assert it.count(old) == 1, cid
        days = [n for n in lst if not any(n in t[1:] for t in trips)]
        tr = ', '.join(f"['{t[0]}', {', '.join(map(str, t[1:]))}]" for t in trips)
        it = it.replace(old, f"  {key}: {{ days: [['', {', '.join(map(str, days))}]], trips: [{tr}] }},\n")
    wr('itinerary-iberia.ts', it)
    k = rd('countries.ts')
    i = k.index("    id: 'pt',")
    a = k.index('    cityIds: [', i)
    b = k.index('    ],\n  },', a) + len('    ],\n')
    ids = [x for g in PT_GROUPS for x in g[2]]
    old_ids = re.findall(r"'([a-z-]+)'", k[a:k.index('\n', a)])
    assert sorted(ids) == sorted(old_ids), (set(ids) ^ set(old_ids))
    body = ('    cityIds: [' + ', '.join(f"'{x}'" for x in ids) + '],\n    cityGroups: [\n'
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in PT_GROUPS)
            + '    ],\n')
    wr('countries.ts', k[:a] + body + k[b:])


if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
    finish()
