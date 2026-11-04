#!/usr/bin/env python3
"""Poland step 2 (2026-11-04, user picked all four): Lublin, Malbork, Łódź and Częstochowa as new cities.
Train times from Transitous. Reuses the batch-3 writer. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places3 import trip, village
from add_slovakia_cities import H

APPS = "      ta('pkp'),\n      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),\n      ta('uber'),\n"
DAY = ('근교 당일치기', 'Day trip')
R = "{ fa: '바르샤바 중앙역|Warszawa Centralna' }"

CITIES = [
    dict(id='lublin', country='pl', after='torun', ko='루블린', en='Lublin', native='Lublin', lat=51.2479, lng=22.5683,
         blurb=['폴란드 동부 최대 도시. 언덕 위 구시가와 비잔틴 프레스코가 가득한 성 삼위일체 예배당, 유대인 공동체의 기억과 마이다네크 수용소가 함께 남아 있습니다.',
                'The largest city in eastern Poland: a hilltop old town, the Holy Trinity Chapel covered in Byzantine frescoes, and the memory of its Jewish community and the Majdanek camp.'],
         highlights=[
             H('구시가와 시장 광장', 'Old Town & Market Square', '파스텔색 시민 가옥이 둘러싼 언덕 위 구시가로, 광장 가운데에 옛 왕실 재판소가 서 있습니다.', 'The hilltop old town of pastel burghers’ houses, with the old Crown Tribunal at the centre of its square.', 'Rynek Lublin', 45, 60),
             H('크라쿠프 문', 'Kraków Gate', '구시가로 들어가는 14세기 고딕 성문으로, 바로크 첨탑을 얹었습니다.', 'The 14th-century Gothic gate into the Old Town, topped with a Baroque spire.', 'Brama Krakowska Lublin', 10, 15),
             H('루블린 성과 성 삼위일체 예배당', 'Lublin Castle & Holy Trinity Chapel', '언덕 위 성 안의 고딕 예배당으로, 벽과 천장이 15세기 러시아·비잔틴풍 프레스코로 덮여 있습니다.', 'The Gothic chapel in the hilltop castle, its walls and vaults covered in 15th-century Ruthenian-Byzantine frescoes.', 'Kaplica Trójcy Świętej Lublin', 60, 90,
               c='mon', s='https://muzeumlubelskie.pl/', n='예배당은 인원 제한이 있어 정해진 시각에 들어갑니다. 월요일에 쉽니다.|The chapel admits small groups at set times; closed on Mondays.'),
             H('루블린 지하 길', 'Lublin Underground Route', '구시가 지하 저장고와 통로를 이어 도시의 역사를 보여 주는 지하 투어입니다.', 'A tour through the cellars and passages beneath the Old Town, telling the city’s story.', 'Lubelska Trasa Podziemna', 45, 60,
               n='정해진 시각에 안내 투어로 들어갑니다.|Entry is by guided tour at set times.'),
             H('마이다네크 국립 박물관', 'Majdanek State Museum', '나치 독일이 세운 강제·절멸 수용소 자리로, 막사와 가스실이 남아 있는 추모 박물관입니다.', 'The site of the Nazi German concentration and extermination camp, a memorial museum where barracks and gas chambers survive.', 'Państwowe Muzeum na Majdanku', 120, 180,
               c='mon', n='무료이며 월요일에 쉽니다. 시내에서 버스로 약 15분입니다.|Free; closed on Mondays. About 15 min by bus from the centre.'),
             H('카지미에시 돌니', 'Kazimierz Dolny', '비스와강변의 르네상스 마을로, 곡물 창고와 언덕 위 성터가 있는 예술가들의 마을입니다.', 'A Renaissance town on the Vistula, an artists’ village with granaries and a hilltop castle ruin.', 'Kazimierz Dolny', 240, 300, group=DAY,
               n='루블린에서 버스로 약 1시간입니다.|About 1 hr by bus from Lublin.'),
         ],
         hubs="    air: [['Lublin (LUZ)', '루블린 공항 (LUZ)']],\n    rail: [['Lublin Główny', '루블린 중앙역']],\n    bus: [['Dworzec Lublin', '루블린 버스터미널']],\n",
         hubs_file='hubs-central.ts', hubs_before='  torun: {\n', itin_file='itinerary-north.ts', itin_before='  reykjavik: {',
         itinerary=[2, 1, 4, 3, 5],
         season='7월 말 ‘카르나발 스크툼’ 거리 공연 축제 때 구시가가 붐빕니다. 봄·가을이 걷기 좋습니다.|The old town fills up for the Carnaval Sztukmistrzów street-performance festival in late July; spring and autumn are best for walking.',
         visit_file='visit-central.ts', visit_after=r"^  'torun-h\d+': v\(.*\),\n",
         stay=[('구시가와 크라쿠프스키에 프셰드미에시치에', 'Old Town & Krakowskie Przedmieście', 'Stare Miasto, Lublin', '걸어서 다니기|Walkable', '구시가와 성, 중심 보행자 거리가 걸어서 닿습니다.|The Old Town, the castle and the main pedestrian street are all within walking distance.')],
         stay_before='  torun: [',
         routes=[('routes-central.ts', r"^  r\('warsaw', 'torun', .*\),\n",
                  f"  r('warsaw', 'lublin', 'train', 111, {R}),\n  r('warsaw', 'lodz', 'train', 75, {R}),\n  r('warsaw', 'czestochowa', 'train', 139, {R}),\n  r('warsaw', 'malbork', 'train', 142, {R}),\n"),
                 ('routes-central.ts', r"^  r\('gdansk', 'torun', .*\),\n",
                  "  r('gdansk', 'malbork', 'train', 30),\n  r('torun', 'malbork', 'train', 136, { n: '트체프에서 환승|change at Tczew' }),\n  r('krakow', 'czestochowa', 'train', 95),\n  r('lodz', 'czestochowa', 'train', 111),\n")],
         transit=dict(modes=['walk', 'bus', 'taxi'], ko='구시가와 성은 걸어서 다닙니다. 마이다네크는 시내버스로 갑니다.', en='Walk the old town and castle; take a city bus to Majdanek.'),
         apps=APPS, transit_before='  // —— es ——', places=None,
         daytrips=[('warsaw', trip('lublin', '기차로 약 1시간 50분. 언덕 위 구시가와 성 삼위일체 예배당의 프레스코를 봅니다(월요일 휴관).|About 1 hr 50 by train: the hilltop old town and the frescoes of the Holy Trinity Chapel (closed Mondays).'))]),
    dict(id='malbork', country='pl', after='gdansk', ko='말보르크', en='Malbork', native='Malbork', lat=54.0396, lng=19.0278,
         blurb=['노가트강 가에 튜턴 기사단이 세운 세계 최대의 벽돌 성이 있는 도시. 성 전체가 유네스코 세계유산입니다.',
                'The town on the Nogat where the Teutonic Knights built the world’s largest brick castle, a UNESCO World Heritage Site.'],
         highlights=[
             H('말보르크 성', 'Malbork Castle', '튜턴 기사단의 본거지였던 세계 최대의 벽돌 성으로, 높은 성·중간 성·아랫 성이 이어집니다. 오디오 가이드로 둘러봅니다.', 'The Teutonic Knights’ headquarters and the world’s largest brick castle, with its High, Middle and Lower Castles; visited with an audio guide.', 'Malbork Castle', 180, 240,
               b='rec', s='https://zamek.malbork.pl/en', n='유료이며 오디오 가이드가 포함됩니다. 성수기엔 온라인으로 미리 사세요.|Ticketed, audio guide included; buy online ahead in high season.'),
             H('노가트강 건너편 전망', 'View across the Nogat', '강 건너편 둑과 보행자 다리에서 붉은 성 전체가 물에 비치는 모습을 볼 수 있습니다.', 'From the far bank and the footbridge you see the whole red castle reflected in the river.', 'Malbork castle view Nogat', 20, 30,
               n='무료이며 해 질 녘이 가장 좋습니다.|Free; best at sunset.'),
         ],
         hubs="    air: [['Gdańsk Lech Wałęsa (GDN)', '그단스크 공항 (GDN)', '그단스크|Gdańsk']],\n    rail: [['Malbork', '말보르크역', '성까지 걸어서 약 15분|about 15 min on foot to the castle']],\n",
         hubs_file='hubs-central.ts', hubs_before='  wroclaw: {\n', itin_file='itinerary-north.ts', itin_before='  wroclaw: [',
         itinerary=[1, 2],
         season='7월 ‘말보르크 포위전’ 재현 축제 때 붐빕니다. 겨울엔 성 운영 시간이 짧습니다.|July’s Siege of Malbork re-enactment draws crowds; the castle keeps shorter hours in winter.',
         visit_file='visit-central.ts', visit_after=r"^  'gdansk-h\d+': v\(.*\),\n",
         stay=village('그단스크', 'Gdańsk', 'Gdańsk Główne Miasto', '기차로 약 30분입니다.', 'About 30 min by train.'),
         stay_before='  wroclaw: [',
         routes=[],
         transit=dict(modes=['walk', 'train'], ko='역에서 성까지 걸어서 약 15분입니다.', en='About 15 min on foot from the station to the castle.'),
         apps="      ta('pkp'),\n", transit_before='  wroclaw: {', places=None,
         daytrips=[]),
    dict(id='lodz', country='pl', after='warsaw', ko='우치', en='Łódź', native='Łódź', lat=51.7592, lng=19.4560,
         blurb=['19세기 섬유 공업으로 커진 도시. 4km 남짓한 표트르코프스카 거리와 붉은 벽돌 공장을 바꾼 복합 문화 공간이 볼거리입니다.',
                'The city that boomed on 19th-century textiles: the 4-km Piotrkowska Street and red-brick factories turned into cultural complexes.'],
         highlights=[
             H('표트르코프스카 거리', 'Piotrkowska Street', '유럽에서 손꼽히게 긴 보행자 거리로, 공장주들의 저택과 카페, 거리 조형물이 이어집니다.', 'One of Europe’s longest pedestrian streets, lined with factory owners’ mansions, cafés and street sculptures.', 'Piotrkowska Łódź', 60, 90),
             H('마누팍투라', 'Manufaktura', '이즈라엘 포즈난스키의 옛 방직 공장 단지를 바꾼 쇼핑·문화 공간으로, 도시 박물관 미아스토 공장이 있습니다.', 'Izrael Poznański’s former textile mill complex, now a shopping and culture hub with the city museum.', 'Manufaktura Łódź', 90, 120),
             H('포즈난스키 궁전', 'Poznański Palace', '방직 재벌 포즈난스키의 화려한 저택으로, 지금은 우치 시립 박물관입니다.', 'The lavish mansion of textile magnate Poznański, now the Museum of the City of Łódź.', 'Pałac Poznańskiego Łódź', 60, 90),
             H('크시엥지 믈린', 'Księży Młyn', '공장 노동자 주택과 공장주 저택이 남은 19세기 산업 마을입니다.', 'A 19th-century industrial village of workers’ housing and the mill owner’s villa.', 'Księży Młyn Łódź', 45, 60),
             H('EC1 우치', 'EC1 Łódź', '옛 화력 발전소를 바꾼 과학·기술 센터와 천체 투영관입니다.', 'A former power station turned science and technology centre with a planetarium.', 'EC1 Łódź', 120, 180),
         ],
         hubs="    air: [['Łódź Władysław Reymont (LCJ)', '우치 공항 (LCJ)', '노선 적음|few routes'], ['Warszawa Chopin (WAW)', '바르샤바 쇼팽 공항 (WAW)', '바르샤바|Warsaw']],\n    rail: [['Łódź Fabryczna', '우치 파브리치나역']],\n",
         hubs_file='hubs-central.ts', hubs_before='  krakow: {\n', itin_file='itinerary-north.ts', itin_before='  krakow: {',
         itinerary=[2, 3, 1, 5, 4],
         season='가을 ‘빛의 축제’ 때 건물마다 조명 작품이 걸립니다.|Buildings light up with installations during the autumn Light Move Festival.',
         visit_file='visit-central.ts', visit_after=r"^  'warsaw-h\d+': v\(.*\),\n",
         stay=[('표트르코프스카 거리 주변', 'Around Piotrkowska Street', 'Piotrkowska, Łódź', '걸어서 다니기|Walkable', '식당과 카페가 모인 중심 거리로, 마누팍투라까지 트램으로 갑니다.|The main street of restaurants and cafés, with trams to Manufaktura.')],
         stay_before='  warsaw: [',
         routes=[],
         transit=dict(modes=['tram', 'walk', 'bus'], ko='표트르코프스카 거리는 걸어서 다니고, 마누팍투라와 EC1은 트램으로 이어집니다.', en='Walk Piotrkowska; trams link Manufaktura and EC1.'),
         apps=APPS, transit_before='  krakow: {', places=None,
         daytrips=[('warsaw', trip('lodz', '기차로 약 1시간 15분. 표트르코프스카 거리와 옛 방직 공장 마누팍투라를 봅니다.|About 1 hr 15 by train: Piotrkowska Street and the old Manufaktura mills.'))]),
    dict(id='czestochowa', country='pl', after='krakow', ko='쳉스토호바', en='Częstochowa', native='Częstochowa', lat=50.8118, lng=19.1203,
         blurb=['폴란드 최대의 순례지. 야스나 구라 수도원에 ‘검은 성모’ 이콘이 모셔져 있어 해마다 수백만 명이 찾아옵니다.',
                'Poland’s greatest pilgrimage site, where the Black Madonna icon at Jasna Góra Monastery draws millions every year.'],
         highlights=[
             H('야스나 구라 수도원과 검은 성모', 'Jasna Góra Monastery & the Black Madonna', '바오로회 수도원의 성당에 폴란드인이 가장 공경하는 이콘 ‘검은 성모’가 모셔져 있습니다.', 'The Pauline monastery whose chapel holds the Black Madonna, the icon most revered in Poland.', 'Jasna Góra', 120, 180,
               n='무료입니다. 이콘은 정해진 시각에만 가림막을 열고, 미사 때는 관람을 삼가야 합니다.|Free; the icon is unveiled only at set times, and visitors should keep back during services.'),
             H('성모 마리아 대로', 'Holy Mary Avenue', '역 쪽 시내에서 야스나 구라까지 곧게 이어지는 가로수 길로, 순례자들이 걸어 오르는 길입니다.', 'The tree-lined avenue running straight from the town centre up to Jasna Góra, walked by pilgrims.', 'Aleja Najświętszej Maryi Panny Częstochowa', 30, 45),
             H('성냥 생산 박물관', 'Match Production Museum', '옛 성냥 공장의 기계로 성냥이 만들어지는 과정을 보여 주는 산업 박물관입니다.', 'An industrial museum showing how matches were made, on the machines of a former match factory.', 'Muzeum Produkcji Zapałek Częstochowa', 60, 90),
             H('올슈틴 성(독수리 둥지 길)', 'Olsztyn Castle (Eagles’ Nests Trail)', '석회암 바위 위 폐허가 된 중세 성으로, 크라쿠프와 쳉스토호바 사이 ‘독수리 둥지 길’ 성들 가운데 하나입니다.', 'A ruined medieval castle on a limestone crag, one of the castles on the Trail of the Eagles’ Nests between Kraków and Częstochowa.', 'Zamek w Olsztynie', 90, 120, group=DAY,
               n='쳉스토호바에서 버스로 약 30분입니다.|About 30 min by bus from Częstochowa.'),
         ],
         hubs="    air: [['Katowice (KTW)', '카토비체 공항 (KTW)', '카토비체|Katowice'], KRK('크라쿠프|Kraków')],\n    rail: [['Częstochowa', '쳉스토호바역']],\n",
         hubs_file='hubs-central.ts', hubs_before='  gdansk: {\n', itin_file='itinerary-north.ts', itin_before='  gdansk: {',
         itinerary=[2, 1, 3],
         season='8월 15일 성모 승천 대축일 무렵엔 도보 순례단이 몰려 숙소가 빨리 찹니다.|Around the Assumption on 15 August, walking pilgrimages pour in and rooms fill early.',
         visit_file='visit-central.ts', visit_after=r"^  'krakow-h\d+': v\(.*\),\n",
         stay=village('크라쿠프', 'Kraków', 'Kraków Old Town', '기차로 약 1시간 35분입니다.', 'About 1 hr 35 by train.', '시내', 'town'),
         stay_before='  krakow: [',
         routes=[],
         transit=dict(modes=['walk', 'tram', 'bus'], ko='역에서 야스나 구라까지 성모 마리아 대로를 따라 걸어서 약 25분입니다.', en='About 25 min on foot along Holy Mary Avenue from the station to Jasna Góra.'),
         apps=APPS, transit_before='  gdansk: {', places=None,
         daytrips=[('krakow', trip('czestochowa', '기차로 약 1시간 35분. 야스나 구라 수도원의 검은 성모를 봅니다.|About 1 hr 35 by train: the Black Madonna at Jasna Góra.'))]),
]

if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
