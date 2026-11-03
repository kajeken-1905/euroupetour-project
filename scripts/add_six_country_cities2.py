#!/usr/bin/env python3
"""Six-country review step 2, batch 2 (2026-11-03, user request): Clervaux and Tihany as new cities. Helsingør was
left out: Kronborg and the Louisiana museum are already day trips from Copenhagen. Reuses the batch-3 writer
(add_daytrip_places3.main). Hours from the sights' own pages where they could be read; times from Transitous. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places3 import trip, village

K = '2026-11'
LU = "      ta('mobiliteit-lu', { ko: '전국 길찾기 (대중교통 무료)', en: 'Nationwide planner (public transport is free)' }),\n      ta('cfl'),\n"
HU = "      ta('mav'),\n"

CITIES = [
    dict(id='clervaux', country='lu', after='remich', ko='클레르보', en='Clervaux', native='Clervaux', lat=50.0547, lng=6.0293,
         blurb=['아르덴 숲 계곡에 자리한 룩셈부르크 북부의 작은 마을. 하얀 성 안에 유네스코 세계기록유산 사진전 ‘인간 가족’이 있고, 언덕 위엔 베네딕트회 수도원이 있습니다.',
                'A small town in a wooded Ardennes valley in northern Luxembourg: its white castle holds The Family of Man, a photo exhibition on UNESCO’s Memory of the World register, below a Benedictine abbey on the hill.'],
         highlights=[
             dict(ko='클레르보 성과 ‘인간 가족’', en='Clervaux Castle and The Family of Man', dko='에드워드 스타이컨이 1955년 뉴욕 현대 미술관에서 연 사진전 ‘인간 가족’ 503점을 그대로 전시하는 성으로, 유네스코 세계기록유산입니다.', den='The castle that keeps Edward Steichen’s 1955 MoMA exhibition The Family of Man, all 503 photographs, on UNESCO’s Memory of the World register.', maps='The Family of Man Clervaux',
                  visit=dict(min=90, max=120, c='mon,tue', s='https://www.steichencollections-cna.lu/eng/nous-visiter/1_the-family-of-man', n='3월 1일~12월 29일 수~일 12:00~18:00에 열고 월·화요일과 겨울(12월 30일~2월 말)에 쉽니다.|Open 1 March to 29 December, Wednesday to Sunday 12:00–18:00; closed Mondays, Tuesdays and in winter (30 December to the end of February).', k=K)),
             dict(ko='클레르보 구시가', en='Clervaux old town', dko='성 앞 광장에서 쌍둥이 탑의 성 코스마스·다미아노 성당까지 이어지는 작은 구시가로, 성 옆엔 1944년 아르덴 전투 때의 셔먼 전차가 서 있습니다.', den='The little old town from the castle square to the twin-towered church of Sts Cosmas and Damian, with a Sherman tank from the 1944 Battle of the Bulge by the castle.', maps='Grand-Rue Clervaux',
                  visit=dict(min=30, max=45, n='무료이며 언제든 걸어 볼 수 있습니다.|Free and always open.')),
             dict(ko='시테 드 리마주 사진 산책', en='Clervaux – Cité de l’Image', dko='마을 곳곳의 벽과 정원에 사진 작품을 내건 야외 사진전으로, 지도를 들고 골목을 따라 걷습니다.', den='An open-air photo trail of works hung on walls and in gardens around the town, followed with a map.', maps='Clervaux Cité de l\'Image',
                  visit=dict(min=45, max=60, n='무료이며 언제든 볼 수 있습니다. 지도는 관광 안내소에서 받습니다.|Free and always open; pick up a map at the tourist office.')),
             dict(ko='생모리스 베네딕트회 수도원', en='Benedictine Abbey of Saint-Maurice', dko='숲 언덕 위 1910년의 로마네스크풍 수도원으로, 성당에서 수도사들의 그레고리오 성가를 들을 수 있고 지하에 수도원 생활 전시가 있습니다.', den='The Romanesque-style abbey of 1910 on the wooded hill, where you can hear the monks sing Gregorian chant and see an exhibition on monastic life in the crypt.', maps='Abbaye Saint-Maurice Clervaux',
                  visit=dict(min=45, max=60, n='마을에서 숲길로 걸어서 약 20분 오릅니다. 수도원 건물은 들어갈 수 없고 성당과 지하 전시만 봅니다. 시간은 공식 사이트에서 확인하세요.|About 20 min uphill on foot through the woods. The monastery itself is closed to visitors; the church and the crypt exhibition are open—check times on its site.')),
         ],
         hubs="    air: [LUX('기차로 약 1시간 10분|About 1 hr 10 by train')],\n    rail: [['Clervaux', '클레르보역']],\n",
         hubs_file='hubs-central.ts', hubs_before='  echternach: {\n', itin_file='itinerary-central.ts', itin_before='  remich: [',
         itinerary=[1, 2, 3, 4],
         season='‘인간 가족’ 전시는 12월 30일부터 2월 말까지 쉬니 그 사이엔 피하세요. 가을 숲 단풍이 아름답습니다.|The Family of Man closes from 30 December to the end of February, so avoid those weeks; the autumn woods are lovely.',
         visit_file='visit-benelux.ts', visit_after=r"^  'remich-h\d+': v\(.*\),\n",
         stay=village('룩셈부르크 시티', 'Luxembourg City', 'Luxembourg Gare', '기차로 약 1시간입니다.', 'About an hour by train.'),
         stay_before='  remich: [',
         routes=[('routes-central.ts', r"^  r\('luxembourg-city', 'remich', .*\),\n",
                  "  r('luxembourg-city', 'clervaux', 'train', 58, { n: '국내 대중교통 무료|public transport is free' }),\n"
                  "  r('clervaux', 'vianden', 'bus', 46, { n: '국내 대중교통 무료|public transport is free' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='역에서 성까지 걸어서 약 10분이고 마을은 걸어서 다닙니다. 룩셈부르크의 대중교통은 무료입니다.', en='About 10 min on foot from the station to the castle; walk the town. Public transport in Luxembourg is free.'),
         apps=LU, transit_before='  remich: {', places=None,
         daytrips=[("'luxembourg-city'", trip('clervaux', '기차로 약 1시간. 성에서 사진전 ‘인간 가족’을 보고 숲길로 수도원에 오릅니다(월·화요일 휴관).|About an hour by train: The Family of Man in the castle, then the woodland path up to the abbey (closed Mondays and Tuesdays).'))]),
    dict(id='tihany', country='hu', after='eger', ko='티하니', en='Tihany', native='Tihany', lat=46.9135, lng=17.8890,
         blurb=['발라톤 호수로 뻗은 반도 위 마을. 언덕 위 베네딕트회 수도원에서 호수를 내려다보고, 화산 분화구 호수와 여름 라벤더 들판 사이를 걷습니다.',
                'A village on a peninsula reaching into Lake Balaton: look over the lake from the Benedictine abbey on the hill, then walk between a crater lake and summer lavender fields.'],
         highlights=[
             dict(ko='티하니 베네딕트회 수도원', en='Tihany Benedictine Abbey', dko='1055년 헝가리어 단어가 처음 적힌 설립 문서로 유명한 수도원으로, 지하에 설립자 안드라시 1세가 잠들어 있고 테라스에서 발라톤 호수가 펼쳐집니다.', den='The abbey famous for its 1055 founding charter, the oldest text with Hungarian words, where its founder King Andrew I lies in the crypt above a terrace over Lake Balaton.', maps='Tihany Benedictine Abbey',
                  visit=dict(min=60, max=90, s='https://eng.tihanyiapatsag.hu/', n='월~토 10:00~17:00, 일요일 11:15~17:00에 열고 매표는 16:30까지입니다. 성인 3,100포린트이며 미사·행사 때 시간이 바뀝니다.|Open Monday to Saturday 10:00–17:00 and Sundays 11:15–17:00, tickets until 16:30; adults 3,100 HUF. Hours change for services and events.', k=K)),
             dict(ko='피스키 산책로', en='Pisky promenade', dko='수도원 뒤 언덕 가장자리를 따라 이어지는 산책로로, 발라톤 호수와 남쪽 기슭이 내려다보입니다.', den='The promenade along the hill edge behind the abbey, looking over Lake Balaton to the southern shore.', maps='Pisky sétány Tihany',
                  visit=dict(min=15, max=20, n='무료이며 언제든 걸을 수 있습니다.|Free and always open.')),
             dict(ko='메아리 언덕', en='Echo Hill', dko='수도원 벽에 소리가 부딪혀 돌아오는 언덕으로, 예부터 메아리 명소로 이름났습니다.', den='The hill where your voice bounces back off the abbey walls, an echo spot of old.', maps='Visszhang-domb Tihany',
                  visit=dict(min=10, max=15, n='무료이며 언제든 볼 수 있습니다.|Free and always open.')),
             dict(ko='벨셰 호수', en='Inner Lake', dko='반도 한가운데 옛 화산 분화구에 고인 호수로, 갈대와 들판 사이로 산책로가 한 바퀴 돕니다.', den='The lake in an old volcanic crater in the middle of the peninsula, ringed by a path through reeds and meadows.', maps='Belső-tó Tihany',
                  visit=dict(min=45, max=60, n='무료이며 언제든 걸을 수 있습니다.|Free and always open.')),
             dict(ko='라벤더 하우스와 라벤더 들판', en='Lavender House and the lavender fields', dko='헝가리 라벤더 재배가 시작된 반도의 라벤더 들판과, 화산 지형과 라벤더를 소개하는 국립공원 방문자 센터입니다.', den='The lavender fields where Hungarian lavender growing began, and the national park visitor centre on the volcanic landscape and the plant.', maps='Levendula Ház Látogatóközpont Tihany',
                  visit=dict(min=45, max=60, n='라벤더는 6월 중순~7월에 핍니다. 방문자 센터는 계절마다 운영 시간이 다릅니다.|The lavender blooms mid-June to July; the visitor centre’s hours vary by season.')),
             dict(ko='수도사 동굴', en='Hermit caves', dko='11세기에 동방 정교회 수도사들이 화산암 언덕을 파서 만든 동굴 수도처입니다.', den='Cells hollowed into the volcanic rock in the 11th century by Orthodox hermit monks.', maps='Barátlakások Tihany',
                  visit=dict(min=45, max=60, n='무료이며 마을에서 숲길로 걸어서 약 30분입니다.|Free; about 30 min on foot from the village along a woodland path.')),
         ],
         hubs="    air: [BUD('기차·버스로 약 3시간|About 3 hrs by train and bus')],\n    rail: [['Balatonfüred', '발라톤퓌레드역', '티하니까지 7355번 버스로 약 15분|bus 7355 to Tihany, about 15 min']],\n",
         hubs_file='hubs-central.ts', hubs_before='  szentendre: {\n', itin_file='itinerary-north.ts', itin_before='  eger: [',
         itinerary=[1, 2, 3, 4, 5, 6],
         season='라벤더는 6월 중순~7월에 피고, 7·8월엔 호숫가가 붐빕니다. 겨울엔 식당과 배가 많이 쉽니다.|The lavender blooms mid-June to July and the lakeshore is busy in July and August; in winter many restaurants and boats stop.',
         visit_file='visit-central.ts', visit_after=r"^  'eger-h\d+': v\(.*\),\n",
         stay=village('발라톤퓌레드', 'Balatonfüred', 'Balatonfüred', '버스로 약 15분입니다.', 'About 15 min by bus.'),
         stay_before='  eger: [',
         routes=[('routes-central.ts', r"^  r\('budapest', 'eger', .*\),\n",
                  "  r('budapest', 'tihany', 'mixed', 139, { fa: '부다페스트 남역|Budapest-Déli', n: '발라톤퓌레드에서 7355번 버스로 환승|change at Balatonfüred for bus 7355' }),\n")],
         transit=dict(modes=['walk', 'bus'], ko='마을과 수도원은 걸어서 다닙니다. 발라톤퓌레드와는 7355번 버스가 다니고, 호수 건너 샨토드로 가는 카페리가 있습니다(겨울엔 쉬는 기간이 있음).', en='Walk the village and abbey; bus 7355 runs to Balatonfüred, and a car ferry crosses to Szántód (with a winter break).'),
         apps=HU, transit_before='  eger: {', places=None,
         daytrips=[('budapest', trip('tihany', '기차와 버스로 약 2시간 20분. 언덕 위 수도원에서 발라톤 호수를 내려다보고 분화구 호수를 걷습니다.|About 2 hrs 20 by train and bus: Lake Balaton from the abbey on the hill, and a walk round the crater lake.', how='기차·버스로 약 2시간 20분(발라톤퓌레드 환승)|About 2 hrs 20 by train and bus (change at Balatonfüred)'))]),
]

if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
