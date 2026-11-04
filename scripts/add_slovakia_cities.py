#!/usr/bin/env python3
"""Slovakia step 2 (2026-11-04, user picked all four): Banská Štiavnica, Levoča (+ Spiš Castle), Bardejov and
Nitra as new cities. Times from Transitous except Košice–Bardejov (bus operators' booking pages, ~1 hr 15).
Reuses the batch-3 writer. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places3 import trip, village

APPS = "      ta('trainline'),\n"
DAY = ('근교 당일치기', 'Day trip')
KSC = "['Košice (KSC)', '코시체 공항 (KSC)', '코시체|Košice']"
TAT = "['Poprad-Tatry (TAT)', '포프라트 타트리 공항 (TAT)', '포프라트|Poprad']"


def H(ko, en, dko, den, maps, mn, mx, group=None, **v):
    d = dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=dict(min=mn, max=mx, **v))
    if group:
        d['group'] = group
    return d


CITIES = [
    dict(id='banska-stiavnica', country='sk', after='banska-bystrica', ko='반스카슈티아브니차', en='Banská Štiavnica', native='Banská Štiavnica', lat=48.4494, lng=18.9100,
         blurb=['화산 분화구 비탈에 자리한 옛 은광 도시. 언덕을 따라 두 성과 르네상스 광장, 칼바리아가 이어지는 유네스코 세계유산입니다.',
                'A former silver-mining town on the slopes of an old volcanic caldera; its two castles, Renaissance squares and Calvary climb the hills of a UNESCO World Heritage Site.'],
         highlights=[
             H('성 삼위일체 광장', 'Holy Trinity Square', '르네상스 시민 가옥과 광산 회사 건물이 둘러싼 비탈진 중앙 광장으로, 흑사병을 이겨 낸 감사로 세운 삼위일체 기둥이 서 있습니다.', 'The sloping main square ringed by Renaissance burghers’ and mining-office houses, with a Holy Trinity column raised in thanks after the plague.', 'Námestie svätej Trojice Banská Štiavnica', 20, 30),
             H('옛 성', 'Old Castle', '로마네스크 성당을 둘러싼 성벽을 쌓아 만든 성으로, 지금은 슬로바키아 광산 박물관 전시가 있습니다.', 'A castle built by walling round a Romanesque church, now housing displays of the Slovak Mining Museum.', 'Starý zámok Banská Štiavnica', 45, 60),
             H('새 성', 'New Castle', '16세기에 오스만 군을 감시하려고 세운 하얀 망루로, 오스만 전쟁 전시와 함께 시내 전경이 보입니다.', 'The white 16th-century lookout tower built to watch for the Ottomans, with an exhibition on the Turkish wars and views over the town.', 'Nový zámok Banská Štiavnica', 30, 45),
             H('칼바리아', 'Calvary', '언덕 위로 성당과 예배당 스물두 곳이 이어지는 바로크 십자가의 길로, 꼭대기에서 시내가 내려다보입니다.', 'A Baroque Way of the Cross of some 22 churches and chapels climbing a hill, with the town spread out below.', 'Kalvária Banská Štiavnica', 60, 90,
               n='시내에서 오르막으로 걸어서 약 20분입니다.|About 20 minutes’ uphill walk from the centre.'),
             H('광산 야외 박물관', 'Open-Air Mining Museum', '실제 광산 갱도에 안전모를 쓰고 들어가 보는 박물관으로, 지상에는 광산 시설이 전시돼 있습니다.', 'A museum where you put on a helmet and go down a real mine gallery, with mining machinery on show above ground.', 'Banské múzeum v prírode Banská Štiavnica', 90, 120,
               n='시내에서 약 2km 떨어져 있고 갱도는 안내 투어로만 들어갑니다. 갱도 안은 서늘하니 겉옷을 챙기세요.|About 2 km from the centre; the gallery is entered on guided tours only and is cool inside, so bring a jacket.'),
             H('타이흐 호수(포추바들로)', 'Tajchy (Počúvadlo)', '광산에 물을 대려고 만든 인공 호수 ‘타이흐’ 가운데 하나로, 여름엔 숲속 호수에서 수영을 즐깁니다.', 'One of the tajchy, reservoirs built to power the mines, now a forest lake for summer swimming.', 'Počúvadlo', 120, 180, group=DAY,
               n='시내에서 약 10km로 차가 있어야 편합니다.|About 10 km from town; easiest by car.'),
         ],
         hubs=f"    air: [BTS('기차·버스로 약 3시간 20분|About 3 hrs 20 by train and bus')],\n    rail: [['Banská Štiavnica', '반스카슈티아브니차역', '구시가까지 오르막 약 2km|about 2 km uphill to the old town']],\n    bus: [['Banská Štiavnica, autobusová stanica', '반스카슈티아브니차 버스 정류장']],\n",
         hubs_file='hubs-central.ts', hubs_before='  trencin: {\n', itin_file='itinerary-north.ts', itin_before='  trencin: {',
         itinerary=[1, 2, 3, 4, 5],
         season='12월 둘째 주말쯤 성 바르바라 축일에 광부 행진이 열리고, 9월 초엔 ‘살라만데르’ 광부 축제가 열립니다. 언덕길이 많아 겨울엔 미끄럽습니다.|Miners parade around St Barbara’s Day in December and for the Salamander festival in early September; the steep streets get icy in winter.',
         visit_file='visit-central.ts', visit_after=r"^  'banska-bystrica-h\d+': v\(.*\),\n",
         stay=village('반스카비스트리차', 'Banská Bystrica', 'Banská Bystrica', '기차로 약 1시간 45분(즈볼렌 환승)입니다.', 'About 1 hr 45 by train (change at Zvolen).'),
         stay_before='  trencin: [',
         routes=[('routes-central.ts', r"^  r\('bratislava', 'banska-bystrica', .*\),\n",
                  "  r('bratislava', 'banska-stiavnica', 'train', 203, { n: '레비체에서 버스로 환승|change at Levice for the bus' }),\n"
                  "  r('banska-bystrica', 'banska-stiavnica', 'train', 103, { n: '즈볼렌에서 환승|change at Zvolen' }),\n")],
         transit=dict(modes=['walk', 'bus'], ko='구시가는 비탈길이라 걸어서 다닙니다. 역에서 구시가까지는 버스를 타는 편이 편합니다.', en='Walk the hilly old town; take the bus up from the station.'),
         apps=APPS, transit_before='  trencin: {', places=None,
         daytrips=[]),
    dict(id='levoca', country='sk', after='poprad', ko='레보차', en='Levoča', native='Levoča', lat=49.0225, lng=20.5885,
         blurb=['스피시 지방의 성벽 도시. 높이 18m로 세계에서 가장 높은 고딕 목조 제단이 있는 성 야고보 성당과, 가까운 언덕 위 거대한 스피시 성이 함께 유네스코 세계유산입니다.',
                'The walled town of the Spiš region, with St James’s Basilica and its 18-metre Gothic altar, the tallest of its kind, and nearby the vast Spiš Castle on its hill, together a UNESCO World Heritage Site.'],
         highlights=[
             H('성 야고보 대성당과 파볼 장인의 제단', 'Basilica of St James & Master Paul’s altar', '레보차의 파볼 장인이 16세기 초에 깎은 높이 18.6m의 고딕 목조 제단으로 유명한 성당입니다.', 'The church famous for the 18.6-metre Gothic wooden altar carved by Master Paul of Levoča in the early 16th century.', 'Bazilika svätého Jakuba Levoča', 45, 60,
               n='관람은 정해진 시각마다 입장하며 유료입니다. 미사 시간엔 관람할 수 없습니다.|Visits are ticketed, with entry at set times; no visits during Mass.'),
             H('옛 시청과 수치의 우리', 'Old Town Hall & the Cage of Shame', '르네상스 아케이드가 있는 옛 시청으로, 앞에는 죄인을 가둬 망신을 주던 철제 ‘수치의 우리’가 남아 있습니다.', 'The arcaded Renaissance town hall, with the iron Cage of Shame that once held offenders up to ridicule standing outside.', 'Radnica Levoča', 20, 30),
             H('파볼 장인 광장', 'Master Paul’s Square', '성당과 시청을 가운데 두고 고딕·르네상스 시민 가옥이 둘러싼 넓은 중앙 광장입니다.', 'The broad main square with the basilica and town hall at its centre, ringed by Gothic and Renaissance burghers’ houses.', 'Námestie Majstra Pavla Levoča', 20, 30),
             H('마리아 언덕 성당', 'Basilica on Marian Hill', '시내 북쪽 언덕 위의 순례 성당으로, 7월 초 대순례 때 수많은 순례객이 모입니다.', 'The pilgrimage basilica on the hill north of town, drawing huge crowds for the great pilgrimage in early July.', 'Mariánska hora Levoča', 60, 90,
               n='시내에서 걸어서 약 40분 오릅니다.|About 40 minutes’ walk uphill from town.'),
             H('스피시 성', 'Spiš Castle', '석회암 언덕 꼭대기를 덮은 중부 유럽 최대급 성터로, 성벽 위에서 스피시 평원이 내려다보입니다.', 'One of central Europe’s largest castle sites, covering a limestone hilltop, with views over the Spiš plain from its walls.', 'Spišský hrad', 120, 150, group=DAY,
               n='레보차에서 차로 약 20분이며 대체로 4월~11월에 엽니다.|About 20 min by car from Levoča; usually open April to November.'),
             H('스피시스카 카피툴라', 'Spišská Kapitula', '스피시 성 맞은편 언덕의 성벽 안 교회 마을로, 로마네스크·고딕 성 마르틴 대성당이 있습니다.', 'The walled church town on the hill facing Spiš Castle, with the Romanesque-Gothic Cathedral of St Martin.', 'Spišská Kapitula', 45, 60, group=DAY),
         ],
         hubs=f"    air: [{TAT}, {KSC}],\n    rail: [['Spišská Nová Ves', '스피시스카노바베스역', '레보차행 버스 약 20분|bus to Levoča, about 20 min']],\n    bus: [['Levoča, autobusová stanica', '레보차 버스터미널']],\n",
         hubs_file='hubs-central.ts', hubs_before="  'banska-bystrica': {\n", itin_file='itinerary-north.ts', itin_before="  'banska-bystrica': [",
         itinerary=[3, 1, 2, 4],
         season='스피시 성은 대체로 4월~11월에만 엽니다. 7월 초 마리아 언덕 대순례 때는 매우 붐빕니다.|Spiš Castle is usually open only April to November; the early-July pilgrimage to Marian Hill brings big crowds.',
         visit_file='visit-central.ts', visit_after=r"^  'poprad-h\d+': v\(.*\),\n",
         stay=village('포프라트', 'Poprad', 'Poprad', '기차와 버스로 약 50분입니다.', 'About 50 min by train and bus.'),
         stay_before="  'banska-bystrica': [",
         routes=[('routes-central.ts', r"^  r\('poprad', 'kosice', .*\),\n",
                  "  r('poprad', 'levoca', 'mixed', 51, { n: '스피시스카노바베스에서 버스로 환승|change at Spišská Nová Ves for the bus' }),\n"
                  "  r('kosice', 'levoca', 'mixed', 93, { n: '스피시스카노바베스에서 버스로 환승|change at Spišská Nová Ves for the bus' }),\n"
                  "  r('kosice', 'bardejov', 'bus', 75, { n: '직행 버스 적음|few direct buses' }),\n")],
         transit=dict(modes=['walk', 'bus'], ko='성벽 안 구시가는 걸어서 다닙니다. 스피시 성은 버스가 적어 차나 택시가 편합니다.', en='Walk the walled old town; Spiš Castle is easiest by car or taxi, as buses are few.'),
         apps=APPS, transit_before="  'banska-bystrica': {", places=None,
         daytrips=[('poprad', trip('levoca', '기차와 버스로 약 50분. 세계에서 가장 높은 고딕 목조 제단을 보고 스피시 성까지 묶으면 하루가 꽉 찹니다.|About 50 min by train and bus: the world’s tallest Gothic altar, and adding Spiš Castle fills the day.')),
                   ('kosice', trip('levoca', '약 1시간 30분. 파볼 장인의 제단과 스피시 성을 묶어 다녀옵니다.|About 1 hr 30: Master Paul’s altar and Spiš Castle.'))]),
    dict(id='bardejov', country='sk', after='kosice', ko='바르데요프', en='Bardejov', native='Bardejov', lat=49.2918, lng=21.2730,
         blurb=['폴란드 국경 가까운 동북부의 성벽 도시. 고딕 시민 가옥이 늘어선 시청 광장과 주변 목조 성당들이 유네스코 세계유산입니다.',
                'A walled town in the north-east near the Polish border; its Town Hall Square of Gothic burghers’ houses and the wooden churches round about are UNESCO World Heritage.'],
         highlights=[
             H('시청 광장', 'Town Hall Square', '박공지붕 시민 가옥이 둘러싼 길쭉한 광장으로, 가운데에 옛 시청이 서 있는 유네스코 세계유산입니다.', 'The long square ringed by gabled burghers’ houses with the old town hall at its centre, a UNESCO World Heritage Site.', 'Radničné námestie Bardejov', 30, 45),
             H('옛 시청(샤리시 박물관)', 'Old Town Hall (Šariš Museum)', '고딕과 르네상스가 섞인 16세기 초 시청으로, 지금은 샤리시 박물관의 역사 전시가 있습니다.', 'The early-16th-century town hall mixing Gothic and Renaissance, now a history exhibition of the Šariš Museum.', 'Radnica Bardejov', 30, 45),
             H('성 에기디우스 대성당', 'Basilica of St Giles', '광장 북쪽의 고딕 성당으로, 안에 15~16세기 고딕 날개 제단 열한 개가 모여 있습니다.', 'The Gothic church on the north side of the square, holding eleven 15th–16th-century Gothic winged altars.', 'Bazilika svätého Egídia Bardejov', 30, 45),
             H('성벽과 보루', 'Town walls & bastions', '구시가를 거의 한 바퀴 두른 중세 성벽과 보루로, 성벽 아래 산책로를 따라 걷습니다.', 'The medieval walls and bastions that still almost ring the old town, followed by a path beneath them.', 'Mestské opevnenie Bardejov', 30, 45),
             H('바르데요프스케 쿠펠레', 'Bardejovské Kúpele', '숲속 온천 마을로, 슬로바키아에서 가장 오래된 야외 민속 박물관(스칸젠)에 목조 성당과 농가가 옮겨져 있습니다.', 'A spa village in the woods with Slovakia’s oldest open-air folk museum, where wooden churches and farmhouses have been reassembled.', 'Bardejovské Kúpele', 120, 180, group=DAY,
               n='시내에서 버스로 약 15분입니다.|About 15 min by bus from town.'),
             H('헤르바르토우 목조 성당', 'Hervartov wooden church', '15세기 말에 지은 아시시의 성 프란치스코 목조 성당으로, 유네스코 카르파티아 목조 성당군에 속합니다.', 'The late-15th-century wooden Church of St Francis of Assisi, part of the UNESCO-listed wooden churches of the Carpathians.', 'Drevený kostol Hervartov', 30, 45, group=DAY,
               n='시내에서 차로 약 15분이며, 안은 관리인에게 연락해 들어갑니다.|About 15 min by car from town; ask the caretaker to open the interior.'),
         ],
         hubs=f"    air: [{KSC}],\n    rail: [['Bardejov', '바르데요프역', '열차 적음 · 프레쇼우 환승|few trains · change at Prešov']],\n    bus: [['Bardejov, autobusová stanica', '바르데요프 버스터미널']],\n",
         hubs_file='hubs-central.ts', hubs_before='  poprad: {\n', itin_file='itinerary-north.ts', itin_before='  poprad: {',
         itinerary=[1, 2, 3, 4],
         season='여름에 목조 성당과 야외 박물관 구경이 좋습니다. 8월 말 장터 축제 때 광장이 붐빕니다.|Summer is best for the wooden churches and the open-air museum; the square is busy for the late-August market fair.',
         visit_file='visit-central.ts', visit_after=r"^  'kosice-h\d+': v\(.*\),\n",
         stay=village('코시체', 'Košice', 'Košice', '버스로 약 1시간 15분이고 직행이 적습니다.', 'About 1 hr 15 by bus, with few direct services.'),
         stay_before='  poprad: [',
         routes=[],
         transit=dict(modes=['walk', 'bus'], ko='성벽 안 구시가는 걸어서 다닙니다. 온천 마을은 시내버스로 갑니다.', en='Walk the walled old town; take the town bus to the spa.'),
         apps=APPS, transit_before='  poprad: {', places=None,
         daytrips=[('kosice', trip('bardejov', '버스로 약 1시간 15분. 유네스코 시청 광장과 고딕 제단들을 보고 목조 성당까지 둘러봅니다.|About 1 hr 15 by bus: the UNESCO-listed square, the Gothic altars and a wooden church.'))]),
    dict(id='nitra', country='sk', after='trencin', ko='니트라', en='Nitra', native='Nitra', lat=48.3080, lng=18.0870,
         blurb=['슬로바키아에서 가장 오래된 도시로 꼽히는 곳. 9세기 대모라비아 시절부터의 성과 대성당이 언덕 위에 있고, 아래로 보행자 거리가 이어집니다.',
                'Counted as Slovakia’s oldest town, with a castle and cathedral on the hill going back to Great Moravian times in the 9th century, and pedestrian streets below.'],
         highlights=[
             H('니트라 성과 성 에메람 대성당', 'Nitra Castle & St Emmeram’s Cathedral', '언덕 위 성 안에 작은 로마네스크 성당과 화려한 바로크 대성당이 이어 붙은 주교좌 성당이 있습니다.', 'The castle on the hill, home to the bishop’s cathedral where a small Romanesque church and a lavish Baroque cathedral are joined together.', 'Nitriansky hrad', 60, 90),
             H('윗마을', 'Upper Town', '성으로 오르는 길의 바로크 주교·참사회 건물과 조각상이 늘어선 옛 동네입니다.', 'The old quarter on the way up to the castle, lined with Baroque bishops’ and canons’ houses and statues.', 'Horné mesto Nitra', 30, 45),
             H('스보토플루크 광장', 'Svätopluk Square', '대모라비아 왕 스보토플루크 동상과 안드레이 바가르 극장이 선 시내 중심 광장으로, 보행자 거리로 이어집니다.', 'The central square with the statue of Great Moravian king Svätopluk and the Andrej Bagar Theatre, leading into the pedestrian streets.', 'Svätoplukovo námestie Nitra', 15, 20),
             H('니트라 회당', 'Nitra Synagogue', '1911년에 지은 무어·비잔틴 양식 회당으로, 지금은 전시와 공연장으로 쓰입니다.', 'The Moorish-Byzantine synagogue of 1911, now an exhibition and concert hall.', 'Synagóga Nitra', 20, 30),
             H('조보르 언덕', 'Zobor', '시내 북동쪽의 숲 언덕으로, 산길을 오르면 니트라 시내와 평원이 내려다보입니다.', 'The wooded hill north-east of town, whose trails lead up to views over Nitra and the plain.', 'Zobor Nitra', 120, 180,
               n='시내 가장자리에서 정상까지 걸어서 약 1시간 30분입니다.|About 1 hr 30 on foot from the edge of town to the top.'),
         ],
         hubs="    air: [BTS('버스로 약 1시간 15분|About 1 hr 15 by bus')],\n    rail: [['Nitra', '니트라역']],\n    bus: [['Nitra, autobusová stanica', '니트라 버스터미널']],\n",
         hubs_file='hubs-central.ts', hubs_before='\n  // —— hu ——', itin_file='itinerary-north.ts', itin_before='  szentendre: [',
         itinerary=[3, 4, 2, 1, 5],
         season='봄·가을이 걷기 좋습니다. 8월 말 농업 박람회 아그로콤플렉스 때 숙소가 빨리 찹니다.|Spring and autumn are best for walking; rooms go fast during the Agrokomplex fair in late August.',
         visit_file='visit-central.ts', visit_after=r"^  'trencin-h\d+': v\(.*\),\n",
         stay=[('구시가', 'Old town', 'Svätoplukovo námestie, Nitra', '걸어서 다니기|Walkable', '광장과 보행자 거리, 성이 걸어서 닿습니다.|The square, the pedestrian streets and the castle are all within walking distance.')],
         stay_before='  sarajevo: [',
         routes=[('routes-central.ts', r"^  r\('bratislava', 'trencin', .*\),\n",
                  "  r('bratislava', 'nitra', 'bus', 77),\n  r('trencin', 'nitra', 'train', 118, { n: '레오폴도우에서 환승|change at Leopoldov' }),\n")],
         transit=dict(modes=['walk', 'bus'], ko='구시가와 성은 걸어서 다닙니다. 역과 터미널은 시내버스로 이어집니다.', en='Walk the old town and castle; town buses link the station and bus terminal.'),
         apps=APPS, transit_before='  // —— hu ——\n  szentendre: {', places=None,
         daytrips=[('bratislava', trip('nitra', '버스로 약 1시간 15분. 언덕 위 성과 대성당을 보고 구시가를 걷습니다.|About 1 hr 15 by bus: the hilltop castle and cathedral, then the old town.'))]),
]

if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
