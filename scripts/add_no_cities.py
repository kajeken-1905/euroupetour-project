#!/usr/bin/env python3
"""Norway review step 2 (2026-11-13, user approved all ten): Lofoten (Svolvær), Geiranger, Lillehammer, Bodø, Kristiansand,
Røros, Odda, Voss, Honningsvåg (North Cape) and Fredrikstad as new cities. Reuses the batch-3 writer
(add_daytrip_places3.main); the Norway city groups are rewritten afterwards in this script. Times are rounded typical
values. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
VY = "      ta('vy'),\n"
COMMON = dict(hubs_file='hubs-central.ts', hubs_before='  stavanger: {\n', itin_file='itinerary-north.ts', itin_before='  helsinki: {',
              visit_file='visit-nordic.ts', visit_after=r"^  'tromso-h\d+': v\(.*\),\n", stay_before='  malmo: [', apps='',
              transit_before='  tromso: {', places=None, daytrips=[], routes=[])
LAST = r"^  r\('trondheim', 'tromso', .*\),\n"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'no'
    return d


CITIES = [
    C(id='fredrikstad', after='oslo', ko='프레드릭스타드', en='Fredrikstad', native='Fredrikstad', lat=59.2181, lng=10.9298,
      blurb=['오슬로 남쪽 글로마강 하구의 도시. 해자와 성벽이 그대로 남은 17세기 요새 마을 감레뷔엔이 북유럽에서 가장 잘 보존된 요새 도시로 꼽힙니다.',
             'The town at the mouth of the Glomma south of Oslo, whose 17th-century fortress town, Gamlebyen, with moats and ramparts intact, is counted the best-preserved in the Nordic countries.'],
      highlights=[
          dict(ko='감레뷔엔 (요새 구시가)', en='Gamlebyen (Old Town)', dko='별 모양 성벽과 해자로 둘러싸인 요새 마을로, 자갈길을 따라 옛 병영과 공방, 카페가 모여 있습니다.', den='The fortress town ringed by star-shaped ramparts and moats, with old barracks, workshops and cafés along its cobbled streets.', maps='Gamlebyen Fredrikstad',
               visit=dict(min=90, max=150)),
          dict(ko='강 건너는 무료 나룻배', en='Free river ferry', dko='시내와 감레뷔엔 사이 글로마강을 몇 분 만에 건너는 작은 나룻배로, 무료로 탑니다.', den='The little ferry that crosses the Glomma between the town centre and Gamlebyen in a few minutes, free of charge.', maps='Ferga Fredrikstad',
               visit=dict(min=10, max=15)),
          dict(ko='콩스텐 요새', en='Kongsten Fort', dko='감레뷔엔 동쪽 언덕 위의 17세기 보루로, 숲속 산책길과 전망이 있습니다.', den='The 17th-century outwork on a hill east of Gamlebyen, with woodland paths and views.', maps='Kongsten Fort Fredrikstad',
               visit=dict(min=30, max=45)),
          dict(ko='발레르 제도', en='Hvaler', dko='바위섬과 작은 어촌 마을이 이어지는 군도로, 여름엔 해수욕과 바닷가 산책을 즐깁니다.', den='An archipelago of rocky islands and small fishing villages, for summer swimming and coastal walks.', maps='Skjærhalden Hvaler', group=DAY,
               visit=dict(min=240, max=360, n='시내에서 버스로 약 50분입니다.|About 50 min from town by bus.')),
      ],
      hubs="    rail: [['Fredrikstad', '프레드릭스타드역']],\n    bus: [['Fredrikstad bussterminal', '프레드릭스타드 버스터미널']],\n",
      itinerary={'days': [['', 2, 1, 3]], 'trips': [['발레르 제도|Hvaler', 4]]},
      season='여름엔 감레뷔엔 축제와 발레르 섬 해수욕이 좋고, 겨울엔 요새 마을이 조용합니다.|Summer brings events in Gamlebyen and swimming on Hvaler; the fortress town is quiet in winter.',
      stay=[('감레뷔엔', 'Gamlebyen', 'Gamlebyen Fredrikstad', '분위기|Atmosphere', '요새 마을 안에서 묵으면 저녁 성벽 산책이 좋습니다. 숙소가 적습니다.|Staying inside the fortress town means evening walks on the ramparts; few places to stay.'),
            ('시내 중심', 'Town centre', 'Fredrikstad sentrum', '교통이 편한 곳|Convenient', '기차역과 식당이 가깝고 나룻배로 감레뷔엔에 갑니다.|Close to the station and restaurants, with the ferry over to Gamlebyen.')],
      routes=[('routes-central.ts', LAST, "  r('oslo', 'fredrikstad', 'train', 60),\n")],
      transit=dict(modes=['walk', 'bus', 'ferry', 'train'], ko='시내와 감레뷔엔은 걷고 무료 나룻배로 강을 건넙니다. 발레르는 버스로 갑니다.', en='Walk the centre and Gamlebyen, crossing the river on the free ferry; take the bus to Hvaler.'),
      apps=VY),
    C(id='lillehammer', after='fredrikstad', ko='릴레함메르', en='Lillehammer', native='Lillehammer', lat=61.1153, lng=10.4662,
      blurb=['미에사호 북쪽 끝의 작은 도시로, 1994년 동계 올림픽이 열렸습니다. 노르웨이 옛 농가를 모은 야외 박물관 마이하우겐으로 유명합니다.',
             'The small town at the north end of Lake Mjøsa that hosted the 1994 Winter Olympics, famous for Maihaugen, an open-air museum of old Norwegian farms.'],
      highlights=[
          dict(ko='마이하우겐', en='Maihaugen', dko='노르웨이 각지의 옛 농가와 목조 교회, 거리 200여 채를 옮겨 온 야외 박물관으로, 여름엔 옛 옷을 입은 사람들이 생활을 재현합니다.', den='An open-air museum of some 200 old farmhouses, a stave church and streets moved from around Norway, with costumed interpreters in summer.', maps='Maihaugen',
               visit=dict(min=150, max=240)),
          dict(ko='노르웨이 올림픽 박물관', en='Norwegian Olympic Museum', dko='마이하우겐 안에 있는 올림픽 박물관으로, 고대부터 1994년 릴레함메르 대회까지의 이야기를 전시합니다.', den='The Olympic museum inside Maihaugen, telling the story from the ancient Games to Lillehammer 1994.', maps='Norwegian Olympic Museum Lillehammer',
               visit=dict(min=60, max=90)),
          dict(ko='뤼스고르스바켄 스키 점프대', en='Lysgårdsbakken ski jumps', dko='1994년 올림픽 개회식이 열린 스키 점프대로, 계단이나 리프트로 올라 미에사호를 내려다봅니다.', den='The ski jumps where the 1994 Olympics opened; climb the steps or ride the chairlift for views over Lake Mjøsa.', maps='Lysgårdsbakken',
               visit=dict(min=45, max=60)),
          dict(ko='스토르가타 거리', en='Storgata', dko='목조 건물에 상점과 카페가 늘어선 시내 중심 보행자 거리입니다.', den='The pedestrian main street of wooden buildings, shops and cafés.', maps='Storgata Lillehammer',
               visit=dict(min=30, max=45)),
          dict(ko='훈데르포센 가족 공원', en='Hunderfossen Family Park', dko='트롤과 노르웨이 동화를 주제로 한 놀이공원으로, 아이들과 함께 가기 좋습니다.', den='An amusement park themed on trolls and Norwegian fairy tales, good with children.', maps='Hunderfossen Familiepark', group=DAY,
               visit=dict(min=240, max=360, n='시내에서 북쪽으로 약 15km이며 대체로 여름에만 엽니다.|About 15 km north of town, open mainly in summer.')),
      ],
      hubs="    rail: [['Lillehammer', '릴레함메르역', '오슬로 공항·오슬로 직행|direct to Oslo Airport and Oslo']],\n    bus: [['Lillehammer skysstasjon', '릴레함메르 버스 정류장']],\n",
      itinerary={'days': [['', 4, 3, 1, 2]], 'trips': [['훈데르포센 가족 공원|Hunderfossen', 5]]},
      season='겨울엔 크로스컨트리 스키와 하프옐 스키장, 여름엔 마이하우겐 야외 행사가 좋습니다.|Winter is for cross-country skiing and the Hafjell slopes; summer for Maihaugen’s outdoor events.',
      stay=[('시내 중심', 'Town centre', 'Lillehammer sentrum', '처음이라면|First visit', '역과 스토르가타 거리, 식당이 모두 가깝습니다.|Close to the station, Storgata and restaurants.'),
            ('하프옐', 'Hafjell', 'Hafjell', '스키|Skiing', '시내 북쪽 약 15km의 스키 리조트 마을입니다.|The ski-resort village about 15 km north of town.')],
      routes=[('routes-central.ts', r"^  r\('oslo', 'fredrikstad', .*\),\n", "  r('oslo', 'lillehammer', 'train', 130),\n")],
      transit=dict(modes=['walk', 'bus', 'train'], ko='시내는 걸어서 다닙니다. 마이하우겐과 스키 점프대는 걸어서 15~20분, 하프옐은 버스로 갑니다.', en='Walk the centre; Maihaugen and the ski jumps are 15–20 min on foot, and buses run to Hafjell.'),
      apps=VY),
    C(id='kristiansand', after='lillehammer', ko='크리스티안산', en='Kristiansand', native='Kristiansand', lat=58.1467, lng=7.9956,
      blurb=['노르웨이 남단의 해변 도시. 흰 목조 가옥이 모인 구시가 포세뷔엔과 생선 부두가 있고, 덴마크로 가는 배가 출발합니다.',
             'The beach town on Norway’s southern tip, with Posebyen’s white wooden houses and a fish quay, and ferries to Denmark.'],
      highlights=[
          dict(ko='포세뷔엔', en='Posebyen', dko='17~19세기 흰 목조 가옥이 바둑판 골목을 따라 늘어선 구시가입니다.', den='The old quarter of 17th- to 19th-century white wooden houses along a grid of lanes.', maps='Posebyen Kristiansand',
               visit=dict(min=45, max=60)),
          dict(ko='피스케브뤼가', en='Fiskebrygga', dko='생선 가게와 해산물 식당이 모인 부두로, 운하를 따라 식당 테라스가 이어집니다.', den='The fish quay of fishmongers and seafood restaurants, with terraces along the canal.', maps='Fiskebrygga Kristiansand',
               visit=dict(min=45, max=60)),
          dict(ko='크리스티안스홀름 요새', en='Christiansholm Fortress', dko='항구 앞 둥근 17세기 요새로, 해변 산책로 끝에 있습니다.', den='The round 17th-century fortress by the harbour, at the end of the seafront promenade.', maps='Christiansholm Fortress',
               visit=dict(min=15, max=30)),
          dict(ko='킬덴 공연 예술 센터', en='Kilden Performing Arts Centre', dko='물결치는 나무 지붕이 바다 쪽으로 튀어나온 공연장으로, 건축 명소입니다.', den='The concert hall whose wave-shaped timber roof juts out over the water, an architectural landmark.', maps='Kilden Performing Arts Centre',
               visit=dict(min=20, max=30)),
          dict(ko='크리스티안산 동물원·놀이공원', en='Kristiansand Zoo and Amusement Park', dko='노르웨이에서 가장 인기 있는 가족 공원으로, 동물원과 놀이기구, 동화 마을 카르데모메 뷔가 있습니다.', den='Norway’s most popular family park, with a zoo, rides and Cardamom Town from the children’s story.', maps='Dyreparken Kristiansand', group=DAY,
               visit=dict(min=300, max=420, n='시내에서 동쪽으로 약 10km이며 버스가 다닙니다.|About 10 km east of town, served by bus.')),
      ],
      hubs="    air: [['Kristiansand Kjevik (KRS)', '크리스티안산 공항 (KRS)']],\n    rail: [['Kristiansand', '크리스티안산역']],\n    port: [['Kristiansand ferry terminal', '크리스티안산 페리 터미널', '덴마크 히르트스할스행|ferries to Hirtshals, Denmark']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['동물원·놀이공원|Zoo & amusement park', 5]]},
      season='여름이 해변과 동물원의 성수기입니다. 노르웨이 사람들이 가장 즐겨 찾는 여름 휴양지라 7월엔 붐빕니다.|Summer is high season for the beaches and the zoo—Norway’s favourite summer resort, busy in July.',
      stay=[('시내 중심 (크바드라투렌)', 'Kvadraturen', 'Kvadraturen Kristiansand', '처음이라면|First visit', '포세뷔엔과 부두, 기차역을 걸어서 다닙니다.|Posebyen, the quay and the station are all walkable.'),
            ('해변가', 'Beachfront', 'Bystranda Kristiansand', '해변|Beach', '시내 해변 비스트란다 앞으로, 여름에 좋습니다.|By the town beach, Bystranda—good in summer.')],
      routes=[('routes-central.ts', r"^  r\('oslo', 'lillehammer', .*\),\n",
               "  r('oslo', 'kristiansand', 'train', 270, { ...R }),\n  r('stavanger', 'kristiansand', 'train', 180, { ...R }),\n")],
      transit=dict(modes=['walk', 'bus', 'train', 'ferry'], ko='시내 중심은 바둑판 거리라 걷기 쉽습니다. 동물원은 버스로 갑니다.', en='The grid-plan centre is easy on foot; take the bus to the zoo.'),
      apps=VY),
    C(id='voss', after='bergen', ko='보스', en='Voss', native='Voss', lat=60.6283, lng=6.4185,
      blurb=['베르겐과 플롬 사이의 호숫가 마을로, 패러글라이딩과 래프팅 같은 야외 활동의 중심지입니다. 곤돌라로 산 위 전망대에 오릅니다.',
             'A lakeside town between Bergen and Flåm and a hub for outdoor sports like paragliding and rafting, with a gondola up to a mountain lookout.'],
      highlights=[
          dict(ko='보스 곤돌라', en='Voss Gondol', dko='역 바로 옆에서 해발 820m 한구렌까지 오르는 곤돌라로, 보스 호수와 산이 내려다보입니다.', den='The gondola from beside the station up to Hanguren at 820 m, overlooking the Vangsvatnet lake and mountains.', maps='Voss Gondol',
               visit=dict(min=60, max=90)),
          dict(ko='보스 교회', en='Voss Church', dko='1277년 봉헌된 석조 교회로, 나무 첨탑과 화려한 내부 장식이 남아 있습니다.', den='The stone church consecrated in 1277, with a timber spire and a richly decorated interior.', maps='Vangskyrkja Voss',
               visit=dict(min=15, max=20)),
          dict(ko='보스 민속 박물관 (묄스테르툰)', en='Voss Folk Museum (Mølstertunet)', dko='언덕 위에 옛 농가 건물들이 모인 야외 박물관입니다.', den='An open-air museum of old farm buildings on the hillside.', maps='Mølstertunet Voss',
               visit=dict(min=45, max=60)),
          dict(ko='트빈데포센 폭포', en='Tvindefossen', dko='계단처럼 층층이 떨어지는 높이 110m의 폭포로, 길가에서 바로 봅니다.', den='A 110 m waterfall tumbling down in steps, seen right from the roadside.', maps='Tvindefossen',
               visit=dict(min=20, max=30, n='시내에서 차나 버스로 약 15분입니다.|About 15 min from town by car or bus.')),
          dict(ko='스탈하임', en='Stalheim', dko='급커브 13개가 이어지는 스탈하임스클레이바 길과 내뢰이달 계곡 전망으로 유명한 곳입니다.', den='Famous for the Stalheimskleiva road with its 13 hairpins and the view down the Nærøydalen valley.', maps='Stalheim Hotel', group=DAY,
               visit=dict(min=60, max=120, n='보스에서 차로 약 40분입니다. 급커브 길은 여름에만 열립니다.|About 40 min from Voss by car; the hairpin road opens in summer only.')),
      ],
      hubs="    rail: [['Voss', '보스역', '베르겐선 · 베르겐 약 1시간 15분|Bergen Line · about 1 hr 15 to Bergen']],\n    bus: [['Voss skysstasjon', '보스 버스 정류장']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['스탈하임|Stalheim', 5]]},
      season='여름엔 래프팅과 패러글라이딩, 겨울엔 스키를 탑니다. 6월엔 익스트림 스포츠 축제가 열립니다.|Rafting and paragliding in summer, skiing in winter; an extreme-sports festival takes place in June.',
      stay=[('역 주변 시내', 'Town centre', 'Voss sentrum', '교통이 편한 곳|Convenient', '기차역과 곤돌라, 호수가 모두 가깝습니다.|The station, the gondola and the lake are all close.'),
            ('미르크달렌', 'Myrkdalen', 'Myrkdalen', '스키|Skiing', '보스 북쪽 산속의 스키 리조트 마을입니다.|The ski-resort village in the mountains north of Voss.')],
      routes=[('routes-central.ts', r"^  r\('stavanger', 'kristiansand', .*\),\n", "  r('bergen', 'voss', 'train', 75),\n")],
      transit=dict(modes=['walk', 'bus', 'train'], ko='시내는 걸어서 다닙니다. 폭포와 스탈하임은 버스나 차로 갑니다.', en='Walk around town; the waterfalls and Stalheim are by bus or car.'),
      apps=VY),
    C(id='odda', after='voss', ko='오다', en='Odda', native='Odda', lat=60.0692, lng=6.5459,
      blurb=['하르당에르피오르 안쪽 끝의 옛 공업 마을로, 절벽 위로 혀처럼 튀어나온 바위 트롤퉁가 산행의 거점입니다.',
             'An old industrial town at the inner end of the Hardangerfjord, and the base for the hike to Trolltunga, the rock tongue jutting from a cliff.'],
      highlights=[
          dict(ko='트롤퉁가', en='Trolltunga', dko='호수 위 700m 절벽에서 수평으로 튀어나온 바위로, 왕복 20~28km, 10~12시간의 긴 산행 끝에 닿습니다.', den='The rock jutting out horizontally from a cliff 700 m above a lake, reached by a long 20–28 km return hike of 10–12 hours.', maps='Trolltunga',
               visit=dict(min=600, max=720, n='가이드 없이 오르기 좋은 시기는 대체로 6월~9월입니다. 이른 새벽에 출발하고 날씨를 꼭 확인하세요. 주차장은 미리 예약합니다.|The season for unguided hikes is roughly June to September; start at dawn and check the weather. Book trailhead parking ahead.')),
          dict(ko='로테포센 폭포', en='Låtefoss', dko='두 갈래 물줄기가 길 바로 옆으로 쏟아져 내리는 165m 폭포로, 돌다리 위에서 물보라를 맞습니다.', den='A 165 m twin waterfall crashing down right beside the road; feel the spray from the old stone bridge.', maps='Låtefoss',
               visit=dict(min=15, max=20, n='시내에서 남쪽으로 차로 약 15분입니다.|About 15 min south of town by car.')),
          dict(ko='부아르브레엔 빙하', en='Buarbreen glacier', dko='폴게포나 빙하에서 흘러내린 빙하 혀로, 계곡을 따라 걸어 빙하 앞까지 갑니다.', den='A tongue of the Folgefonna ice cap; hike up the valley to the glacier front.', maps='Buarbreen',
               visit=dict(min=180, max=240, n='왕복 약 3~4시간이며 뒷부분은 가파르고 쇠사슬을 잡는 곳이 있습니다. 빙하 위로는 가이드 없이 올라가지 마세요.|About 3–4 hours return, steep with chains near the end; do not go onto the ice without a guide.')),
          dict(ko='노르웨이 수력·산업 박물관', en='Norwegian Museum of Hydropower and Industry', dko='티세달의 옛 수력 발전소 건물에 든 박물관으로, 오다 공업 마을의 역사를 보여 줍니다.', den='The museum in the old Tyssedal power station, telling the story of Odda’s industrial past.', maps='Norsk vasskraft- og industristadmuseum',
               visit=dict(min=60, max=90)),
      ],
      hubs="    air: [['Bergen (BGO)', '베르겐 공항 (BGO)', '버스로 약 3시간|About 3 hrs by bus']],\n    bus: [['Odda rutebilstasjon', '오다 버스터미널', '철도 없음|no railway']],\n",
      itinerary={'days': [['', 2, 4]], 'trips': [['트롤퉁가|Trolltunga', 1], ['부아르브레엔 빙하|Buarbreen', 3]]},
      season='트롤퉁가 산행은 6월~9월이 좋습니다. 그 밖의 계절엔 눈과 짧은 낮 때문에 가이드 투어로만 오르세요.|June to September is the season for Trolltunga; at other times snow and short days mean guided tours only.',
      stay=[('오다 시내', 'Odda', 'Odda sentrum', '교통이 편한 곳|Convenient', '버스터미널과 상점이 모인 마을 중심입니다.|The village centre, with the bus station and shops.'),
            ('티세달', 'Tyssedal', 'Tyssedal', '트롤퉁가 가까이|Close to Trolltunga', '트롤퉁가 들머리로 가는 길목 마을로, 이른 출발에 편합니다.|The village on the way to the Trolltunga trailhead, handy for an early start.')],
      routes=[('routes-central.ts', r"^  r\('bergen', 'voss', .*\),\n", "  r('bergen', 'odda', 'bus', 180),\n")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다닙니다. 여름엔 트롤퉁가 들머리까지 셔틀버스가 다닙니다.', en='Walk around the village; in summer shuttle buses run to the Trolltunga trailhead.')),
    C(id='geiranger', after='flam', ko='예이랑에르', en='Geiranger', native='Geiranger', lat=62.1008, lng=7.2059,
      blurb=['세계유산 예이랑에르피오르 끝의 작은 마을. 절벽에서 쏟아지는 폭포 사이를 배로 지나고, 굽이길을 올라 피오르를 내려다봅니다.',
             'A small village at the head of the World Heritage Geirangerfjord—sail between waterfalls pouring off the cliffs, and climb hairpin roads for views down the fjord.'],
      highlights=[
          dict(ko='예이랑에르피오르 크루즈', en='Geirangerfjord cruise', dko='절벽 사이 좁은 피오르를 따라가며 폭포와 절벽 위 옛 농가를 보는 유람선으로, 헬레쉴트와 오가는 카페리도 있습니다.', den='A cruise down the narrow fjord past waterfalls and old cliff-top farms; car ferries also run to Hellesylt.', maps='Geirangerfjord',
               visit=dict(min=60, max=120, n='대체로 4월~10월에 다닙니다.|Mostly April to October.')),
          dict(ko='일곱 자매 폭포', en='Seven Sisters waterfall', dko='절벽에서 일곱 갈래로 나뉘어 떨어지는 폭포로, 맞은편 ‘구혼자’ 폭포와 함께 배 위에서 봅니다.', den='The waterfall that falls in seven strands from the cliff, seen from the boat with “the Suitor” opposite.', maps='Seven Sisters Waterfall',
               visit=dict(min=10, max=20)),
          dict(ko='달스니바 전망대', en='Dalsnibba viewpoint', dko='해발 1,476m 산꼭대기 전망대로, 눈 덮인 산과 피오르가 함께 내려다보입니다.', den='The summit viewpoint at 1,476 m, looking down over snowy peaks and the fjord.', maps='Dalsnibba',
               visit=dict(min=60, max=90, n='유료 산길로 오르며 대체로 5월 말~10월에만 열립니다.|Reached on a toll road open roughly late May to October.')),
          dict(ko='외르네스빙엔 (독수리 길)', en='Ørnesvingen (Eagle Road)', dko='마을 북쪽 굽이길 위의 전망대로, 피오르와 일곱 자매 폭포가 한눈에 보입니다.', den='The viewpoint on the hairpin road north of the village, taking in the fjord and the Seven Sisters.', maps='Ørnesvingen',
               visit=dict(min=15, max=20)),
          dict(ko='노르웨이 피오르 센터', en='Norwegian Fjord Centre', dko='피오르 마을의 자연과 생활을 보여 주는 전시관으로, 폭포 옆 산책로와 이어집니다.', den='An exhibition on fjord nature and village life, linked to a waterfall walk.', maps='Norsk Fjordsenter',
               visit=dict(min=45, max=60)),
          dict(ko='트롤스티겐', en='Trollstigen', dko='가파른 절벽을 11번 굽이쳐 오르는 산악 도로로, 꼭대기 전망대에서 굽이길과 폭포를 내려다봅니다.', den='The mountain road that zigzags up a steep wall in 11 hairpins, seen from the lookout at the top.', maps='Trollstigen', group=DAY,
               visit=dict(min=240, max=360, n='예이랑에르에서 차로 약 2시간이며 도로는 대체로 5월 말~10월에만 열립니다.|About 2 hrs by car from Geiranger; the road opens roughly late May to October.')),
      ],
      hubs="    air: [['Ålesund Vigra (AES)', '올레순 공항 (AES)', '차로 약 3시간|About 3 hrs by car']],\n    bus: [['Geiranger', '예이랑에르 버스 정류장', '여름철 위주|mainly summer']],\n    port: [['Geiranger', '예이랑에르 선착장', '헬레쉴트행 카페리 · 여름엔 후르티그루텐|car ferry to Hellesylt · Hurtigruten in summer']],\n",
      itinerary={'days': [['', 1, 2, 4, 5], ['', 3]], 'trips': [['트롤스티겐|Trollstigen', 6]]},
      season='배와 산길 대부분이 5월~9월에 운영됩니다. 겨울엔 마을 대부분 시설이 닫고 길이 막히기도 합니다.|Most boats and mountain roads run May to September; in winter most of the village closes and roads may shut.',
      stay=[('예이랑에르 마을', 'Geiranger village', 'Geiranger', '피오르 마을|Fjord village', '피오르 바로 앞이라 아침저녁 풍경이 좋습니다. 숙소가 적고 여름엔 일찍 찹니다.|Right on the fjord, lovely morning and evening; few places, which fill early in summer.'),
            ('올레순에서 다녀오기', 'Base in Ålesund', 'Ålesund', '거점에서 다녀오기|Day trip from a base', '여름엔 버스와 투어로 하루에 다녀옵니다. 편도 약 3시간입니다.|In summer, buses and tours make it a long day trip—about 3 hours each way.')],
      routes=[('routes-central.ts', r"^  r\('bergen', 'odda', .*\),\n", "  r('alesund', 'geiranger', 'bus', 180, { n: '여름철 위주|mainly summer' }),\n")],
      transit=dict(modes=['walk', 'bus', 'ferry'], ko='마을은 걸어서 다닙니다. 전망대와 트롤스티겐은 여름 버스·투어나 차로 갑니다.', en='Walk the village; reach the viewpoints and Trollstigen by summer bus, tour or car.')),
    C(id='roros', after='trondheim', ko='뢰로스', en='Røros', native='Røros', lat=62.5747, lng=11.3842,
      blurb=['300년 넘게 구리를 캐던 산간 광산 마을로, 목조 가옥 거리가 통째로 남은 세계유산입니다. 겨울엔 영하 40도까지 내려가기도 합니다.',
             'A mountain copper-mining town worked for over 300 years, its streets of wooden houses preserved whole as a World Heritage site; winter can bring −40 °C.'],
      highlights=[
          dict(ko='뢰로스 교회', en='Røros Church', dko='1784년 지은 광산 마을의 석조 교회로, ‘광산 도시의 자랑’이라 불리며 내부가 화려합니다.', den='The mining town’s stone church of 1784, nicknamed “the pride of the mining town”, with a lavish interior.', maps='Røros kirke',
               visit=dict(min=20, max=30)),
          dict(ko='광부들의 거리', en='Miners’ streets', dko='광부와 장인들이 살던 목조 가옥과 마당이 그대로 남은 거리로, 지금은 공방과 카페가 들어서 있습니다.', den='The streets of miners’ and craftsmen’s wooden houses and yards, preserved as they were and now full of workshops and cafés.', maps='Bergmannsgata Røros',
               visit=dict(min=60, max=90)),
          dict(ko='스멜트휘타 (제련소 박물관)', en='Smelthytta', dko='옛 구리 제련소 자리에 다시 지은 박물관으로, 광산 마을의 역사를 보여 줍니다. 뒤편의 검은 광재 더미가 마을 풍경을 이룹니다.', den='The museum rebuilt on the site of the copper smelter, telling the town’s history; the black slag heaps behind shape the townscape.', maps='Smelthytta Røros',
               visit=dict(min=60, max=90)),
          dict(ko='올라브 광산', en='Olavsgruva', dko='시내에서 약 13km 떨어진 옛 구리 광산으로, 안내 투어로 지하 갱도에 들어갑니다.', den='The old copper mine about 13 km from town, entered on a guided tour of the tunnels.', maps='Olavsgruva', group=DAY,
               visit=dict(min=90, max=120, n='안내 투어로만 들어가며 갱 안은 여름에도 약 5도라 따뜻한 옷이 필요합니다.|Guided tours only; it is about 5 °C underground even in summer, so dress warmly.')),
      ],
      hubs="    air: [['Røros (RRS)', '뢰로스 공항 (RRS)', '오슬로행 소형기|small planes to Oslo']],\n    rail: [['Røros', '뢰로스역', '트론헤임·하마르행 뢰로스선|Røros Line to Trondheim and Hamar']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['올라브 광산|Olavsgruva', 4]]},
      season='2월 말엔 1854년부터 이어진 겨울 시장 뢰로스마르크나덴이 열립니다. 겨울은 매우 추우니 단단히 대비하세요.|Late February brings the Rørosmartnan winter fair, held since 1854; winters are very cold, so come prepared.',
      stay=[('구시가', 'Old town', 'Røros sentrum', '처음이라면|First visit', '목조 가옥 거리 안에 묵어 아침저녁 풍경을 봅니다.|Stay among the wooden streets to see them morning and evening.'),
            ('역 주변', 'By the station', 'Røros stasjon', '교통이 편한 곳|Convenient', '기차역 바로 앞이며 구시가까지 걸어서 몇 분입니다.|Right by the station, a few minutes’ walk from the old town.')],
      routes=[('routes-central.ts', r"^  r\('alesund', 'geiranger', .*\),\n",
               "  r('trondheim', 'roros', 'train', 140),\n  r('oslo', 'roros', 'train', 300, { n: '하마르에서 환승|change at Hamar' }),\n")],
      transit=dict(modes=['walk', 'train', 'taxi'], ko='작은 마을이라 걸어서 다닙니다. 올라브 광산은 차나 택시로 갑니다.', en='The small town is walkable; reach Olavsgruva by car or taxi.'),
      apps=VY),
    C(id='bodo', after='tromso', ko='보되', en='Bodø', native='Bodø', lat=67.2804, lng=14.4049,
      blurb=['북극권 바로 위의 항구 도시이자 2024년 유럽 문화 수도. 세계에서 가장 센 조류 살트스트라우멘과 로포텐으로 가는 배가 있습니다.',
             'The harbour city just north of the Arctic Circle and 2024 European Capital of Culture, near Saltstraumen, the world’s strongest tidal current, with boats to Lofoten.'],
      highlights=[
          dict(ko='살트스트라우멘', en='Saltstraumen', dko='좁은 해협으로 바닷물이 몰려들며 소용돌이가 치는 세계에서 가장 센 조류로, 다리 위에서 내려다봅니다.', den='The world’s strongest tidal current, where the sea races through a narrow strait in whirlpools—watch from the bridge.', maps='Saltstraumen', group=DAY,
               visit=dict(min=90, max=150, n='시내에서 차나 버스로 약 40분입니다. 조류가 가장 센 시각은 조수표에서 확인하세요.|About 40 min by car or bus; check the tide tables for peak flow.')),
          dict(ko='노르웨이 항공 박물관', en='Norwegian Aviation Museum', dko='프로펠러 모양 건물에 군용기와 민항기, U-2 정찰기 등을 전시한 큰 박물관입니다.', den='A large museum in a propeller-shaped building, with military and civil aircraft including a U-2 spy plane.', maps='Norsk Luftfartsmuseum',
               visit=dict(min=90, max=150)),
          dict(ko='스토르멘', en='Stormen', dko='항구 앞에 선 도서관과 콘서트홀로, 바다가 보이는 도서관 창가가 인기입니다.', den='The library and concert hall on the harbour; the sea-facing library windows are a favourite spot.', maps='Stormen Bodø',
               visit=dict(min=30, max=45)),
          dict(ko='보되 대성당', en='Bodø Cathedral', dko='전쟁으로 무너진 도시를 다시 세우며 1956년 지은 현대식 성당으로, 따로 선 종탑이 있습니다.', den='The modern cathedral of 1956, built as the war-ruined town was rebuilt, with a free-standing bell tower.', maps='Bodø domkirke',
               visit=dict(min=15, max=20)),
          dict(ko='케이세르바르덴 전망대', en='Keiservarden', dko='시내 뒤 언덕 위 전망대로, 여름엔 백야, 겨울엔 오로라를 보기 좋습니다.', den='The lookout on the hill behind town, good for the midnight sun in summer and the aurora in winter.', maps='Keiservarden',
               visit=dict(min=90, max=150, n='시내 북쪽 주차장에서 걸어서 약 1시간 오릅니다.|About an hour’s walk up from the car park north of town.')),
      ],
      hubs="    air: [['Bodø (BOO)', '보되 공항 (BOO)', '시내에서 가까움|close to the centre']],\n    rail: [['Bodø', '보되역', '트론헤임행 노를란선 · 야간열차|Nordland Line to Trondheim · night train']],\n    port: [['Bodø ferjeterminal', '보되 페리 터미널', '로포텐행 카페리·쾌속선, 후르티그루텐|ferries and express boats to Lofoten, Hurtigruten']],\n",
      itinerary={'days': [['', 3, 4, 2, 5]], 'trips': [['살트스트라우멘|Saltstraumen', 1]]},
      season='6월 초~7월 초엔 해가 지지 않고, 겨울엔 오로라를 볼 수 있습니다.|The sun never sets from early June to early July, and winter brings the aurora.',
      stay=[('시내 중심', 'Town centre', 'Bodø sentrum', '처음이라면|First visit', '항구와 기차역, 페리 터미널이 모두 걸어서 갈 거리입니다.|The harbour, the station and the ferry terminal are all walkable.'),
            ('살트스트라우멘', 'Saltstraumen', 'Saltstraumen', '자연|Nature', '해협 옆 숙소에서 조류와 오로라를 봅니다. 차가 있으면 좋습니다.|Lodges beside the strait for the current and the aurora; best with a car.')],
      routes=[('routes-central.ts', r"^  r\('oslo', 'roros', .*\),\n",
               "  r('oslo', 'bodo', 'flight', 90),\n  r('trondheim', 'bodo', 'train', 600, { n: '야간열차도 운행|night train also runs' }),\n  r('tromso', 'bodo', 'flight', 50),\n")],
      transit=dict(modes=['walk', 'bus', 'ferry', 'train'], ko='시내는 걸어서 다니고, 공항도 가깝습니다. 살트스트라우멘은 버스로 갑니다.', en='Walk the centre, and the airport is close; take the bus to Saltstraumen.'),
      apps=VY),
    C(id='lofoten', after='bodo', ko='로포텐 제도', en='Lofoten Islands', native='Lofoten', lat=68.2343, lng=14.5683,
      blurb=['바다 위로 뾰족한 산이 솟은 북극권의 섬들. 붉은 어부 오두막 로르부와 대구 말리는 덕장이 늘어선 어촌 마을이 이어집니다. 중심 마을은 스볼베르입니다.',
             'Arctic islands of jagged peaks rising from the sea, strung with fishing villages of red rorbu cabins and cod-drying racks; Svolvær is the main town.'],
      highlights=[
          dict(ko='레이네와 함뇌위', en='Reine & Hamnøy', dko='산봉우리 아래 붉은 오두막이 물가에 늘어선 로포텐의 대표 풍경 마을입니다.', den='The postcard villages of red cabins along the water beneath sheer peaks.', maps='Reine Lofoten',
               visit=dict(min=120, max=180, n='스볼베르에서 차로 약 2시간 30분입니다.|About 2 hr 30 by car from Svolvær.')),
          dict(ko='헤닝스베르', en='Henningsvær', dko='작은 섬 여러 개를 다리로 이은 어촌 마을로, 바위섬 위 축구장이 유명합니다.', den='A fishing village spread over several islets linked by bridges, famous for its football pitch on the rocks.', maps='Henningsvær',
               visit=dict(min=90, max=150, n='스볼베르에서 차로 약 30분입니다.|About 30 min by car from Svolvær.')),
          dict(ko='로포트르 바이킹 박물관', en='Lofotr Viking Museum', dko='보르그에서 발굴한 바이킹 족장의 83m 긴집을 다시 지은 박물관으로, 여름엔 바이킹 배도 탑니다.', den='The reconstructed 83 m longhouse of a Viking chieftain excavated at Borg; in summer you can sail on a Viking ship.', maps='Lofotr Viking Museum',
               visit=dict(min=90, max=150)),
          dict(ko='누스피오르', en='Nusfjord', dko='옛 어촌 모습이 잘 남은 작은 마을로, 대구 어업 시절의 건물이 그대로 있습니다.', den='A small, well-preserved fishing village with buildings from the cod-fishing era.', maps='Nusfjord',
               visit=dict(min=60, max=90, n='마을 입장료를 받습니다.|There is a village entry fee.')),
          dict(ko='오 (Å) 어촌 박물관', en='Å fishing village', dko='로포텐 도로가 끝나는 서쪽 마을로, 대구 말리기와 간유 공장 등 옛 어촌 생활을 보여 줍니다.', den='The village where the Lofoten road ends, showing old fishing life, from drying cod to the cod-liver-oil factory.', maps='Å i Lofoten',
               visit=dict(min=60, max=90)),
          dict(ko='레이네브링엔', en='Reinebringen', dko='계단 약 2,000개로 오르는 레이네 뒤 산으로, 정상에서 레이네와 피오르가 발아래 펼쳐집니다.', den='The peak behind Reine, climbed on roughly 2,000 steps, with Reine and the fjords spread below.', maps='Reinebringen',
               visit=dict(min=150, max=210, n='가파른 돌계단이라 비나 눈이 올 땐 미끄럽습니다. 겨울엔 오르지 마세요.|Steep stone steps, slippery in rain or snow; avoid in winter.')),
      ],
      hubs="    air: [['Svolvær (SVJ)', '스볼베르 공항 (SVJ)'], ['Leknes (LKN)', '레크네스 공항 (LKN)']],\n    bus: [['Svolvær', '스볼베르 버스 정류장']],\n    port: [\n      ['Svolvær', '스볼베르 항구', '보되행 쾌속선 · 후르티그루텐|express boat to Bodø · Hurtigruten'],\n      ['Moskenes', '모스케네스 항구', '보되행 카페리|car ferry to Bodø'],\n    ],\n",
      itinerary={'days': [['스볼베르와 동쪽|Svolvær & the east', 2, 3], ['서쪽 마을|The western villages', 4, 1, 5, 6]]},
      season='여름엔 백야 아래 산행을, 9월~3월엔 오로라를 봅니다. 섬이 넓고 대중교통이 적어 차를 빌리는 편이 좋습니다.|Hike under the midnight sun in summer and watch the aurora from September to March; the islands are spread out with little transit, so hire a car.',
      stay=[('스볼베르', 'Svolvær', 'Svolvær', '교통이 편한 곳|Convenient', '공항과 배, 식당이 가장 많은 중심 마을입니다.|The main town, with the airport, boats and most restaurants.'),
            ('레이네·함뇌위', 'Reine & Hamnøy', 'Reine', '풍경|Scenery', '붉은 어부 오두막(로르부)에서 묵는 서쪽 마을입니다.|The western villages, where you sleep in red fishermen’s cabins (rorbuer).')],
      routes=[('routes-central.ts', r"^  r\('tromso', 'bodo', .*\),\n",
               "  r('bodo', 'lofoten', 'ferry', 210, { fb: '스볼베르(쾌속선) 또는 모스케네스(카페리)|Svolvær (express boat) or Moskenes (car ferry)' }),\n  r('bodo', 'lofoten', 'flight', 30),\n")],
      transit=dict(modes=['bus', 'ferry', 'taxi', 'walk'], ko='섬 사이 버스는 적으니 차를 빌리는 편이 좋습니다. 마을 안은 걸어서 다닙니다.', en='Buses between the islands are infrequent, so a hire car is best; walk within the villages.')),
    C(id='honningsvag', after='lofoten', ko='호닝스보그', en='Honningsvåg', native='Honningsvåg', lat=70.9827, lng=25.9706,
      blurb=['유럽 대륙 최북단 노르카프(북쪽 곶)로 가는 어촌 마을. 여름엔 해가 지지 않고, 겨울엔 오로라가 떠오릅니다.',
             'The fishing town for the North Cape, the northern tip of Europe, under the midnight sun in summer and the aurora in winter.'],
      highlights=[
          dict(ko='노르카프', en='North Cape', dko='바다 위 307m 절벽 끝의 지구본 조형물과 전시관 노르카프할렌이 있는 유럽 북쪽 끝입니다.', den='Europe’s northern edge, a cliff 307 m above the sea with the globe monument and the North Cape Hall.', maps='Nordkapp',
               visit=dict(min=120, max=180, n='호닝스보그에서 차나 버스로 약 40분이며 유료입니다. 겨울엔 차량 행렬(콘보이)로만 갑니다.|About 40 min by car or bus from Honningsvåg, ticketed; in winter only in escorted convoys.')),
          dict(ko='크니브셸로데', en='Knivskjellodden', dko='노르카프보다 북쪽으로 조금 더 뻗은 진짜 최북단 곶으로, 왕복 약 18km를 걸어서 갑니다.', den='The headland that reaches a little farther north than the North Cape, reached by an 18 km return hike.', maps='Knivskjellodden',
               visit=dict(min=300, max=360, n='표시된 길이지만 여름에만 걸으세요. 날씨가 빨리 바뀝니다.|A marked trail, but walk it only in summer; the weather changes fast.')),
          dict(ko='예스베르스타판 바닷새 투어', en='Gjesværstappan bird safari', dko='예스베르 앞 바위섬에 모이는 퍼핀 등 바닷새 수십만 마리를 배로 가까이 봅니다.', den='A boat trip to the rocky islets off Gjesvær, home to hundreds of thousands of seabirds including puffins.', maps='Gjesværstappan', group=DAY,
               visit=dict(min=90, max=120, n='퍼핀은 대체로 4월 말~8월에 볼 수 있습니다.|Puffins are there roughly late April to August.')),
          dict(ko='호닝스보그 교회와 마을', en='Honningsvåg church & village', dko='2차 세계 대전 때 마을에서 유일하게 불타지 않은 1885년 목조 교회와 항구 마을입니다.', den='The harbour village and its 1885 wooden church, the only building in town to survive World War II.', maps='Honningsvåg kirke',
               visit=dict(min=30, max=45)),
      ],
      hubs="    air: [['Honningsvåg Valan (HVG)', '호닝스보그 공항 (HVG)', '트롬쇠 등 경유 소형기|small planes via Tromsø and others']],\n    port: [['Honningsvåg', '호닝스보그 항구', '후르티그루텐 연안 여객선|Hurtigruten coastal voyage']],\n",
      itinerary={'days': [['', 4]], 'trips': [['노르카프|North Cape', 1], ['바닷새 투어|Bird safari', 3], ['크니브셸로데|Knivskjellodden', 2]]},
      season='5월 중순~7월 말엔 해가 지지 않습니다. 겨울엔 노르카프로 가는 길이 차량 행렬로만 열리고 날씨에 따라 닫힙니다.|The sun never sets from mid-May to late July; in winter the North Cape road opens only to convoys and closes in bad weather.',
      stay=[('호닝스보그', 'Honningsvåg', 'Honningsvåg', '교통이 편한 곳|Convenient', '항구와 버스, 식당이 모인 마을입니다.|The town with the harbour, buses and restaurants.'),
            ('예스베르', 'Gjesvær', 'Gjesvær', '자연|Nature', '바닷새 투어가 출발하는 작은 어촌입니다. 차가 필요합니다.|The small fishing village where bird safaris start; a car is needed.')],
      routes=[('routes-central.ts', r"^  r\('bodo', 'lofoten', 'flight', .*\),\n",
               "  r('tromso', 'honningsvag', 'flight', 120, { n: '중간 기착 편이 많음|most flights make stops' }),\n")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다닙니다. 노르카프는 여름 버스나 차·투어로 갑니다.', en='Walk the town; reach the North Cape by summer bus, car or tour.')),
]

NO_OLD_IDS = "    cityIds: ['oslo', 'fredrikstad', 'lillehammer', 'kristiansand', 'bergen', 'voss', 'odda', 'stavanger', 'flam', 'geiranger', 'alesund', 'trondheim', 'roros', 'tromso', 'bodo', 'lofoten', 'honningsvag'],\n"
NO_NEW = """    cityIds: ['oslo', 'fredrikstad', 'lillehammer', 'kristiansand', 'bergen', 'voss', 'odda', 'stavanger', 'flam', 'geiranger', 'alesund', 'trondheim', 'roros', 'tromso', 'bodo', 'lofoten', 'honningsvag'],
    cityGroups: [
      { title: { ko: '동부', en: 'Eastern Norway' }, cityIds: ['oslo', 'fredrikstad', 'lillehammer'] },
      { title: { ko: '남부', en: 'Southern Norway' }, cityIds: ['kristiansand'] },
      { title: { ko: '서부 피오르', en: 'Western fjords' }, cityIds: ['bergen', 'voss', 'odda', 'stavanger', 'flam', 'geiranger', 'alesund'] },
      { title: { ko: '중부', en: 'Central Norway' }, cityIds: ['trondheim', 'roros'] },
      { title: { ko: '북부', en: 'Northern Norway' }, cityIds: ['tromso', 'bodo', 'lofoten', 'honningsvag'] },
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
    i = k.index("    id: 'no',")
    j = k.index('    cityGroups: [', i)
    e = k.index('    ],\n', j) + len('    ],\n')
    s = k.index('    cityIds: [', i)
    assert s < j
    k = k[:s] + NO_NEW + k[e:]
    wr('countries.ts', k)
