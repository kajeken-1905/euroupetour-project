#!/usr/bin/env python3
"""Estonia review step 2 (2026-11-14, plan approved): Rakvere, Narva, Viljandi, Haapsalu and Kuressaare (Saaremaa) as
new cities. Reuses the batch-3 writer (add_daytrip_places3.main); the Estonia city groups are rewritten afterwards.
Times are rounded typical values. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
ELRON = "      ta('elron'),\n"
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='\n  // —— lv ——\n', itin_file='itinerary-north.ts', itin_before='  riga: [',
              visit_file='visit-med.ts', visit_after=r"^  'parnu-h\d+': v\(.*\),\n", stay_before='  jurmala: [', apps=ELRON,
              transit_before='  // —— lv ——\n', places=None, daytrips=[], routes=[])
LAST = r"^  r\('tallinn', 'parnu', 'bus', 110\),\n"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'ee'
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
    return [('routes-east.ts', LAST, ''.join(lines))]


CITIES = [
    C(id='rakvere', after='tallinn', ko='라크베레', en='Rakvere', native='Rakvere', lat=59.3469, lng=26.3550,
      blurb=['탈린 동쪽의 작은 도시. 언덕 위 13세기 성을 중세 체험장으로 꾸몄고, 라헤마 국립공원 바닷가 마을과 가깝습니다.',
             'A small town east of Tallinn, with a 13th-century hilltop castle turned into a medieval experience, and the coastal villages of Lahemaa National Park nearby.'],
      highlights=[
          H('라크베레 성', 'Rakvere Castle', '언덕 위 13세기 성터를 중세 체험장으로 꾸며, 대장간과 선술집, 고문실 전시를 보고 활쏘기를 해 봅니다.', 'The 13th-century hilltop castle run as a medieval experience, with a smithy, tavern and torture-chamber exhibit, plus archery.', 'Rakvere Castle', 120, 180,
            n='주로 5월~9월에 모든 체험이 열리고 겨울엔 짧게 엽니다.|All activities run mainly May to September, with shorter winter opening.'),
          H('에스토니아 경찰 박물관', 'Estonian Police Museum', '옛 경찰서 건물에 에스토니아 경찰의 역사를 다룬 체험형 박물관으로, 아이들이 수사관이 되어 사건을 풀어 봅니다.', 'A hands-on museum of Estonian police history in an old police building, where children play detective and solve a case.', 'Eesti Politseimuuseum', 60, 90),
          H('캐스무 선장 마을', 'Käsmu captains’ village', '라헤마 국립공원 바닷가의 옛 선장 마을로, 목조 집과 해양 박물관, 바위가 흩어진 숲길이 있습니다.', 'The old sea captains’ village on the Lahemaa coast, with wooden houses, a maritime museum and forest trails strewn with boulders.', 'Käsmu', 180, 240,
            n='라크베레에서 차로 약 40분이며 대중교통은 드뭅니다.|About 40 min from Rakvere by car; public transport is sparse.', group=DAY),
      ],
      hubs="    rail: [['Rakvere', '라크베레역']],\n    bus: [['Rakvere bussijaam', '라크베레 버스터미널']],\n",
      itinerary={'days': [['', 2, 1]], 'trips': [['캐스무|Käsmu', 3]]},
      season='5~9월엔 성 체험과 라헤마 바닷가가 좋고, 겨울엔 성이 짧게만 엽니다.|May to September for the castle activities and the Lahemaa coast; in winter the castle opens only briefly.',
      stay=[('탈린에서 다녀오기', 'Base in Tallinn', 'Tallinn', '당일치기|Day trip', '기차로 약 1시간 30분이라 탈린에서 하루 다녀오기 좋습니다.|About 1 hr 30 min by train, an easy day trip from Tallinn.'),
            ('라크베레 시내', 'Rakvere centre', 'Rakvere', '라헤마 거점|Base for Lahemaa', '성 아래 시내에 묵으면 라헤마 국립공원까지 가깝습니다.|Staying below the castle puts Lahemaa National Park close by.')],
      routes=R("  r('tallinn', 'rakvere', 'train', 95),\n"),
      transit=dict(modes=['walk', 'bus', 'train', 'taxi'], ko='시내와 성은 걸어서 다닙니다. 라헤마는 차나 투어가 편합니다.', en='Walk between the centre and the castle; a car or tour is easier for Lahemaa.')),
    C(id='narva', after='rakvere', ko='나르바', en='Narva', native='Narva', lat=59.3772, lng=28.1903,
      blurb=['러시아 국경 나르바강 가의 도시. 강을 사이에 두고 에스토니아의 헤르만 성과 러시아의 이반고로드 요새가 마주 보며, 주민 대부분이 러시아어를 씁니다.',
             'A city on the Narva River at the Russian border, where Estonia’s Hermann Castle faces Russia’s Ivangorod Fortress across the water, and most residents speak Russian.'],
      highlights=[
          H('헤르만 성과 나르바 박물관', 'Hermann Castle & Narva Museum', '높이 51m 탑 ‘키다리 헤르만’이 솟은 중세 성으로, 탑에 올라 강 건너 러시아의 이반고로드 요새를 봅니다.', 'The medieval castle with its 51 m Tall Hermann tower; climb it to look across the river at Russia’s Ivangorod Fortress.', 'Narva Castle', 90, 120),
          H('나르바강 산책로', 'Narva River promenade', '성 아래 강변 산책로로, 바로 건너편이 러시아 국경이라 두 요새가 마주 보는 풍경을 봅니다.', 'The riverside promenade below the castle, with the Russian border right across the water and the two fortresses facing each other.', 'Narva River Promenade', 30, 60,
            n='강 건너는 러시아입니다. 국경 시설은 촬영하지 마세요.|The far bank is Russia; do not photograph border facilities.'),
          H('크렌홀름 방직 공장', 'Kreenholm Manufacture', '19세기에 세운 거대한 붉은 벽돌 방직 공장 단지로, 한때 유럽 최대급이었으며 지금은 가이드 투어로 둘러봅니다.', 'A vast 19th-century red-brick textile mill complex, once among the largest in Europe, now seen on guided tours.', 'Kreenholm', 90, 120,
            n='안은 가이드 투어로만 들어갑니다.|The interior is seen only on guided tours.'),
          H('나르바예수 해변', 'Narva-Jõesuu', '강어귀의 휴양 마을로, 소나무 숲을 따라 수 km 이어지는 모래 해변과 스파 호텔이 있습니다.', 'A resort at the river mouth with a sandy beach stretching for kilometres along the pine woods, and spa hotels.', 'Narva-Jõesuu beach', 180, 300,
            n='나르바에서 북쪽으로 약 14km, 버스로 갑니다.|About 14 km north of Narva by bus.', group=DAY),
      ],
      hubs="    rail: [['Narva', '나르바역']],\n    bus: [['Narva bussijaam', '나르바 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['나르바예수|Narva-Jõesuu', 4]]},
      season='5~9월이 산책과 해변에 좋습니다. 국경 상황에 따라 강변 일부를 막기도 합니다.|May to September is best for walks and the beach; parts of the riverside may close depending on the border situation.',
      stay=[('성과 시내 중심', 'Castle & centre', 'Narva', '교통이 편한 곳|Convenient', '역과 성, 강변 산책로가 걸어서 가깝습니다.|The station, castle and promenade are within walking distance.'),
            ('나르바예수', 'Narva-Jõesuu', 'Narva-Jõesuu', '해변 휴양|Beach resort', '해변의 스파 호텔에 묵고 나르바로 다녀옵니다.|Stay in a beach spa hotel and visit Narva from there.')],
      routes=R("  r('tallinn', 'narva', 'train', 155),\n"),
      transit=dict(modes=['walk', 'bus', 'train', 'taxi'], ko='시내와 성은 걸어서 다니고, 나르바예수는 시내버스로 갑니다.', en='Walk the centre and castle; take a local bus to Narva-Jõesuu.')),
    C(id='viljandi', after='tartu', ko='빌랸디', en='Viljandi', native='Viljandi', lat=58.3639, lng=25.5900,
      blurb=['남부 호숫가 언덕의 소도시. 리보니아 기사단 성터 언덕과 붉은 현수교, 목조 집 거리가 있고, 7월 말 민속음악 축제로 유명합니다.',
             'A small town on the hills above a lake in the south, with the castle mounds of the Livonian Order, a red suspension bridge and streets of wooden houses, famous for its folk music festival in late July.'],
      highlights=[
          H('빌랸디 성터와 성 공원', 'Viljandi castle ruins', '13세기 리보니아 기사단 성의 폐허가 남은 언덕 공원으로, 1931년 붉은 현수교를 건너 호수를 내려다봅니다.', 'A hill park with the ruins of the 13th-century Livonian Order castle; cross the red suspension bridge of 1931 for views over the lake.', 'Viljandi Castle Ruins', 45, 60),
          H('에스토니아 전통 음악 센터', 'Estonian Traditional Music Centre', '옛 곡물 창고를 고친 전통 음악 센터로, 공연과 전통 악기 전시가 있습니다.', 'A traditional music centre in a converted granary, with concerts and an exhibition of folk instruments.', 'Pärimusmuusika Ait', 45, 60),
          H('빌랸디 호수', 'Lake Viljandi', '성 언덕 아래 긴 호수로, 여름엔 호숫가 해변과 산책로가 붐빕니다.', 'The long lake below the castle hill, with a beach and lakeside path busy in summer.', 'Viljandi järv', 60, 90),
      ],
      hubs="    rail: [['Viljandi', '빌랸디역']],\n    bus: [['Viljandi bussijaam', '빌랸디 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3]]},
      season='7월 말 민속음악 축제 기간이 가장 활기차며 숙소는 일찍 찹니다. 여름엔 호수가 좋습니다.|Liveliest during the folk music festival in late July, when rooms fill early; summer is best for the lake.',
      stay=[('구시가와 성 공원', 'Old town & castle park', 'Viljandi', '걸어서 다 보기|Everything on foot', '성터와 음악 센터, 호수가 모두 걸어서 가깝습니다.|The castle ruins, music centre and lake are all within walking distance.'),
            ('타르투에서 다녀오기', 'Base in Tartu', 'Tartu', '당일치기|Day trip', '버스로 약 1시간 15분이라 타르투에서 다녀올 수 있습니다.|About 1 hr 15 min by bus, so visitable from Tartu.')],
      routes=R("  r('tallinn', 'viljandi', 'train', 140),\n  r('tartu', 'viljandi', 'bus', 75),\n"),
      transit=dict(modes=['walk', 'bus', 'train', 'taxi'], ko='작은 도시라 걸어서 다닙니다. 탈린과는 엘론 기차로 오갑니다.', en='A small town best on foot; Elron trains link it with Tallinn.')),
    C(id='haapsalu', after='parnu', ko='합살루', en='Haapsalu', native='Haapsalu', lat=58.9431, lng=23.5414,
      blurb=['서해안의 바닷가 휴양 도시. 흰 옷의 여인 전설이 깃든 주교 성과 목조 쿠어잘이 선 산책로, 옛 기차역을 고친 철도 박물관이 있습니다.',
             'A seaside resort on the west coast, with a bishop’s castle haunted by the legend of the White Lady, a promenade with a wooden resort hall and a railway museum in the old station.'],
      highlights=[
          H('합살루 주교 성', 'Haapsalu Episcopal Castle', '13세기 주교 성과 대성당으로, 8월 보름밤 창에 흰 옷의 여인이 비친다는 전설이 있습니다.', 'The 13th-century bishop’s castle and cathedral, where legend says a White Lady appears in a window on August full-moon nights.', 'Haapsalu Episcopal Castle', 60, 90),
          H('바닷가 산책로와 쿠어잘', 'Promenade & Kuursaal', '바다를 따라 걷는 산책로로, 1898년 지은 목조 휴양 홀 쿠어잘이 여름 카페와 공연장이 됩니다.', 'The seafront promenade, with the wooden Kuursaal resort hall of 1898 serving as a summer café and concert venue.', 'Haapsalu Kuursaal', 45, 60),
          H('에스토니아 철도 박물관', 'Estonian Railway Museum', '1905년 기차역 건물에 든 박물관으로, 약 214m 지붕 덮인 승강장과 옛 기관차를 봅니다.', 'A museum in the 1905 station building, with a covered platform of about 214 m and old locomotives.', 'Estonian Railway Museum Haapsalu', 45, 60),
          H('일론의 원더랜드', 'Ilon’s Wonderland', '합살루에서 자란 그림책 화가 일론 비클란드의 박물관으로, 린드그렌 동화 그림 속 세계를 아이들이 체험합니다.', 'A museum of Ilon Wikland, the illustrator who grew up in Haapsalu, where children step into the world of her Astrid Lindgren pictures.', 'Iloni Imedemaa', 60, 90),
      ],
      hubs="    bus: [['Haapsalu bussijaam', '합살루 버스터미널', '여객 철도 없음|no passenger railway']],\n",
      itinerary={'days': [['', 1, 4, 2, 3]]},
      season='6~8월 해변과 산책로가 좋고, 8월엔 흰 옷의 여인 축제가 열립니다.|June to August for the seafront; the White Lady festival is held in August.',
      stay=[('구시가와 바닷가', 'Old town & seafront', 'Haapsalu', '걸어서 다 보기|Everything on foot', '성과 산책로, 박물관이 모두 걸어서 가깝습니다.|The castle, promenade and museums are all within walking distance.')],
      routes=R("  r('tallinn', 'haapsalu', 'bus', 100),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='작은 도시라 걸어서 다닙니다. 기차가 없어 탈린과는 버스로 오갑니다.', en='A small town best on foot; with no railway, buses link it with Tallinn.'),
      apps="      ta('bolt'),\n"),
    C(id='kuressaare', after='haapsalu', ko='쿠레사레', en='Kuressaare', native='Kuressaare', lat=58.2481, lng=22.5039,
      blurb=['에스토니아 최대 섬 사레마의 중심 도시. 발트 지역에서 가장 잘 남은 중세 석조 성과 스파 호텔이 있고, 섬 곳곳의 운석 구덩이와 풍차, 해안 절벽을 찾아갑니다.',
             'The main town of Saaremaa, Estonia’s largest island, with the best-preserved medieval stone castle in the Baltics and spa hotels, and a base for the island’s meteorite crater, windmills and sea cliffs.'],
      highlights=[
          H('쿠레사레 주교 성', 'Kuressaare Castle', '14세기 주교 성으로 발트 지역에서 가장 잘 남은 중세 석조 성으로 꼽히며, 해자에 둘러싸인 성 안에 사레마 박물관이 있습니다.', 'The 14th-century bishop’s castle, counted the best-preserved medieval stone castle in the Baltics, ringed by a moat and housing the Saaremaa Museum.', 'Kuressaare Castle', 90, 120),
          H('칼리 운석 구덩이', 'Kaali crater', '수천 년 전 운석이 떨어져 생긴 지름 약 110m 구덩이로, 안에 둥근 호수가 고여 있습니다.', 'A crater about 110 m across left by a meteorite thousands of years ago, holding a round pond.', 'Kaali crater', 30, 60,
            n='쿠레사레에서 북쪽으로 약 18km입니다.|About 18 km north of Kuressaare.', group=DAY),
          H('앙글라 풍차 언덕', 'Angla windmills', '언덕 위에 나무 풍차 다섯 대가 나란히 선 곳으로, 사레마섬의 상징 풍경입니다.', 'Five wooden windmills standing in a row on a ridge, the iconic view of Saaremaa.', 'Angla windmills', 30, 60,
            n='쿠레사레에서 북쪽으로 약 40km입니다.|About 40 km north of Kuressaare.', group=DAY),
          H('팡가 절벽', 'Panga cliff', '섬 북쪽 해안의 약 21m 석회암 절벽으로, 사레마에서 가장 높은 해안 절벽입니다.', 'A limestone cliff of about 21 m on the north coast, the highest on Saaremaa.', 'Panga pank', 30, 60, group=DAY),
      ],
      hubs="    air: [['Kuressaare (URE)', '쿠레사레 공항 (URE)'], TLL()],\n    bus: [['Kuressaare bussijaam', '쿠레사레 버스터미널']],\n",
      itinerary={'days': [['', 1]], 'trips': [['칼리·앙글라·팡가|Kaali, Angla & Panga', 2, 3, 4]]},
      season='6~8월 섬 여행과 스파가 좋고, 겨울엔 조용한 스파 휴양지가 됩니다.|June to August for touring the island and spas; in winter it becomes a quiet spa retreat.',
      stay=[('성과 시내 중심', 'Castle & centre', 'Kuressaare', '교통이 편한 곳|Convenient', '성과 스파 호텔, 버스터미널이 가깝습니다.|Close to the castle, spa hotels and bus station.')],
      routes=R("  r('tallinn', 'kuressaare', 'bus', 240, { n: '비르츠–쿠이바스투 페리 포함|includes the Virtsu–Kuivastu ferry' }),\n  r('tallinn', 'kuressaare', 'flight', 45),\n"),
      transit=dict(modes=['walk', 'bus', 'ferry', 'taxi'], ko='시내는 걸어서 다닙니다. 섬 곳곳의 볼거리는 버스가 드물어 차가 편합니다.', en='Walk the town; buses to sights around the island are sparse, so a car is easier.'),
      apps="      ta('bolt'),\n"),
]

EE_NEW = """    cityIds: ['tallinn', 'rakvere', 'narva', 'tartu', 'viljandi', 'parnu', 'haapsalu', 'kuressaare'],
    cityGroups: [
      { title: { ko: '북부', en: 'North Estonia' }, cityIds: ['tallinn', 'rakvere', 'narva'] },
      { title: { ko: '남부', en: 'South Estonia' }, cityIds: ['tartu', 'viljandi'] },
      { title: { ko: '서부·섬', en: 'West coast & islands' }, cityIds: ['parnu', 'haapsalu', 'kuressaare'] },
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
    i = k.index("    id: 'ee',")
    j = k.index('    cityGroups: [', i)
    e = k.index('    ],\n', j) + len('    ],\n')
    s = k.index('    cityIds: [', i)
    assert s < j
    k = k[:s] + EE_NEW + k[e:]
    wr('countries.ts', k)
