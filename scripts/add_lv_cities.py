#!/usr/bin/env python3
"""Latvia review step 2 (2026-11-14, plan approved): Cēsis, Kuldīga, Liepāja, Ventspils and Daugavpils as new cities.
Reuses the batch-3 writer (add_daytrip_places3.main); the Latvia city groups are rewritten afterwards. Times are
rounded typical values. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
VIVI = "      ta('vivi'),\n"
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='\n  // —— lt ——\n', itin_file='itinerary-north.ts', itin_before='  vilnius: {',
              visit_file='visit-med.ts', visit_after=r"^  'sigulda-h\d+': v\(.*\),\n", stay_before='  klaipeda: [', apps=VIVI,
              transit_before='  // —— lt ——\n', places=None, daytrips=[], routes=[])
LAST = r"^  r\('riga', 'sigulda', 'train', 60\),\n"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'lv'
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
    C(id='cesis', after='sigulda', ko='체시스', en='Cēsis', native='Cēsis', lat=57.3119, lng=25.2706,
      blurb=['가우야 국립공원 북쪽의 중세 소도시. 리보니아 기사단의 13세기 성을 촛불 랜턴을 들고 오르고, 자갈길 구시가와 백조가 노니는 성 공원이 있습니다.',
             'A medieval small town at the north end of Gauja National Park, where you climb the 13th-century Livonian Order castle by candle lantern, with a cobbled old town and a castle park full of swans.'],
      highlights=[
          H('체시스 중세 성', 'Cēsis Medieval Castle', '13세기 리보니아 기사단 성으로, 어두운 서쪽 탑을 촛불 랜턴을 들고 올라 성벽 위에서 마을을 내려다봅니다.', 'The 13th-century castle of the Livonian Order; climb the dark west tower carrying a candle lantern and look out over the town from the walls.', 'Cēsis Medieval Castle', 90, 120),
          H('새 성과 성 공원', 'New Castle & castle park', '18세기 영주 저택인 ‘새 성’에 역사 박물관이 있고, 앞 공원 연못에 백조가 삽니다.', 'The 18th-century manor house known as the New Castle holds the history museum, with swans on the pond in the park in front.', 'Cēsis New Castle', 45, 60),
          H('성 요한 교회', 'St John’s Church', '13세기 말 지은 고딕 교회로, 탑에 올라 구시가의 붉은 지붕들을 봅니다.', 'A Gothic church of the late 13th century; climb the tower for the old town’s red roofs.', 'Cēsis St. John’s Church', 30, 45),
          H('아라이시 호수 요새', 'Āraiši lake fortress', '9~10세기 라트갈리아인의 호수 위 마을을 복원한 고고학 공원으로, 옆에 중세 성터와 풍차가 있습니다.', 'An archaeological park reconstructing a 9th–10th-century Latgalian village built over a lake, beside medieval castle ruins and a windmill.', 'Āraišu ezerpils', 60, 90,
            n='체시스에서 남쪽으로 약 10km이며 주로 여름에 엽니다.|About 10 km south of Cēsis, open mainly in summer.', group=DAY),
      ],
      hubs="    air: [RIX()],\n    rail: [['Cēsis', '체시스역']],\n    bus: [['Cēsu autoosta', '체시스 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['아라이시 호수 요새|Āraiši lake fortress', 4]]},
      season='5~9월엔 성과 가우야 강 카누가 좋고, 가을 단풍도 아름답습니다.|May to September for the castle and canoeing the Gauja; the autumn colours are lovely too.',
      stay=[('구시가', 'Old town', 'Cēsis Old Town', '걸어서 다 보기|Everything on foot', '성과 교회, 식당이 모두 걸어서 가깝습니다.|The castle, church and restaurants are all within walking distance.'),
            ('리가에서 다녀오기', 'Base in Riga', 'Riga', '당일치기|Day trip', '기차로 약 1시간 30분이라 시굴다와 함께 하루에 다녀올 수 있습니다.|About 1 hr 30 min by train, so it pairs with Sigulda in a day.')],
      routes=R("  r('riga', 'cesis', 'train', 95),\n  r('sigulda', 'cesis', 'train', 35),\n"),
      transit=dict(modes=['walk', 'bus', 'train', 'taxi'], ko='작은 도시라 걸어서 다닙니다. 리가와 시굴다는 기차로 오갑니다.', en='A small town best on foot; trains link it with Riga and Sigulda.')),
    C(id='kuldiga', after='cesis', ko='쿨디가', en='Kuldīga', native='Kuldīga', lat=56.9677, lng=21.9614,
      blurb=['쿠르제메 지방의 강가 소도시. 유럽에서 가장 넓은 폭포 벤타 폭포와 19세기 벽돌 다리가 있고, 개울을 따라 목조 집이 늘어선 구시가가 2023년 세계유산이 되었습니다.',
             'A riverside town in Kurzeme with Europe’s widest waterfall, the Venta Rapid, and a 19th-century brick bridge; its old town of wooden houses along a stream became a World Heritage Site in 2023.'],
      highlights=[
          H('벤타 폭포', 'Venta Rapid', '폭이 약 250m에 이르는 유럽에서 가장 넓은 폭포로, 봄엔 물고기가 폭포를 뛰어오르는 모습을 봅니다.', 'Europe’s widest waterfall, some 250 m across, where fish can be seen leaping up the falls in spring.', 'Ventas rumba', 30, 45),
          H('옛 벽돌 다리', 'Old brick bridge', '1874년 놓은 길이 약 164m의 벽돌 아치 다리로, 유럽에서 손꼽히게 긴 벽돌 다리입니다.', 'A brick arch bridge of about 164 m built in 1874, among the longest brick bridges in Europe.', 'Kuldīgas ķieģeļu tilts', 15, 30),
          H('쿨디가 구시가', 'Kuldīga Old Town', '알렉슈피테 개울을 따라 17~19세기 목조 집이 늘어선 구시가로, 2023년 세계유산이 되었습니다.', 'The old town of 17th- to 19th-century wooden houses along the Alekšupīte stream, a World Heritage Site since 2023.', 'Kuldīga Old Town', 60, 90),
          H('리에주페 모래 동굴', 'Riežupe sand caves', '사람이 파낸 미로 같은 모래 동굴로, 촛불을 들고 가이드와 함께 들어갑니다.', 'A labyrinth of hand-dug sand caves explored by candlelight with a guide.', 'Riežupes smilšu alas', 45, 60,
            n='주로 여름에 열며 안은 한여름에도 서늘합니다.|Open mainly in summer; it is cool inside even in midsummer.', group=DAY),
      ],
      hubs="    air: [RIX()],\n    bus: [['Kuldīgas autoosta', '쿨디가 버스터미널', '여객 철도 없음|no passenger railway']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['리에주페 모래 동굴|Riežupe sand caves', 4]]},
      season='4~5월엔 폭포를 뛰어오르는 물고기, 여름엔 폭포 아래 강물 걷기가 좋습니다.|April and May for the leaping fish; in summer people wade below the falls.',
      stay=[('구시가', 'Old town', 'Kuldīga Old Town', '걸어서 다 보기|Everything on foot', '폭포와 다리, 구시가가 모두 걸어서 가깝습니다.|The falls, bridge and old town are all within walking distance.')],
      routes=R("  r('riga', 'kuldiga', 'bus', 150),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='작은 도시라 걸어서 다닙니다. 기차가 없어 리가와는 버스로 오갑니다.', en='A small town best on foot; with no railway, buses link it with Riga.'),
      apps=''),
    C(id='liepaja', after='kuldiga', ko='리예파야', en='Liepāja', native='Liepāja', lat=56.5047, lng=21.0109,
      blurb=['‘바람이 태어나는 도시’라 불리는 발트해 항구 도시. 넓은 모래 해변과 해변 공원, 옛 러시아 제국 군항 카로스타, 호박빛 콘서트홀이 있습니다.',
             'The Baltic port nicknamed the ‘city where the wind is born’, with a broad sandy beach and seaside park, the old Russian imperial naval port of Karosta and an amber-coloured concert hall.'],
      highlights=[
          H('카로스타와 북쪽 요새', 'Karosta & Northern Forts', '19세기 말 러시아 제국이 만든 군항 지구로, 금빛 돔의 성 니콜라이 해군 대성당과 바다로 무너져 내리는 요새 폐허가 있습니다.', 'The naval district built by the Russian Empire in the late 19th century, with the gold-domed St Nicholas Naval Cathedral and fortress ruins crumbling into the sea.', 'Karosta Northern Forts', 90, 150),
          H('카로스타 감옥', 'Karosta Prison', '옛 군 교도소를 박물관으로 꾸민 곳으로, 가이드 투어로 감방과 수감 생활 이야기를 듣습니다.', 'A former military prison turned museum, where guided tours lead through the cells and the story of life inside.', 'Karosta Prison', 60, 90),
          H('삼위일체 대성당', 'Holy Trinity Cathedral', '1758년 루터교 대성당으로, 한때 세계 최대였던 기계식 파이프 오르간이 있습니다.', 'The Lutheran cathedral of 1758, home to a mechanical pipe organ that was once the largest in the world.', 'Liepāja Holy Trinity Cathedral', 30, 45),
          H('그레이트 앰버 콘서트홀', 'Great Amber Concert Hall', '2015년 문을 연 호박빛 유리 건물의 콘서트홀로, 저녁엔 안에서 빛이 비쳐 호박처럼 빛납니다.', 'The concert hall opened in 2015 in an amber-coloured glass building that glows like amber when lit at night.', 'Great Amber Liepāja', 20, 30),
          H('해변과 해변 공원', 'Beach & Seaside Park', '시내 바로 옆 넓은 하얀 모래 해변으로, 뒤로 나무 그늘이 많은 해변 공원이 이어집니다.', 'A broad white-sand beach right by the centre, backed by the shady Seaside Park.', 'Liepāja beach', 60, 180),
      ],
      hubs="    air: [['Liepāja (LPX)', '리예파야 공항 (LPX)'], RIX()],\n    bus: [['Liepājas autoosta', '리예파야 버스터미널']],\n    port: [['Liepājas osta', '리예파야 항구', '독일행 페리|ferries to Germany']],\n",
      itinerary={'days': [['', 3, 4, 5], ['', 1, 2]]},
      season='6~8월 해변과 여름 음악 축제가 좋고, 바람이 세니 겉옷을 챙기세요.|June to August for the beach and summer music festivals; it is windy, so bring a jacket.',
      stay=[('시내와 해변 공원', 'Centre & Seaside Park', 'Liepāja centre', '교통이 편한 곳|Convenient', '버스터미널과 해변, 콘서트홀이 가깝고 카로스타까지 시내버스가 다닙니다.|Close to the bus station, beach and concert hall, with city buses to Karosta.')],
      routes=R("  r('riga', 'liepaja', 'bus', 200),\n  r('kuldiga', 'liepaja', 'bus', 75),\n"),
      transit=dict(modes=['walk', 'tram', 'bus', 'taxi'], ko='시내와 해변은 걸어서 다니고, 카로스타는 시내버스로 갑니다. 1899년부터 전차가 다니는 도시입니다.', en='Walk the centre and beach; take a city bus to Karosta. Trams have run here since 1899.'),
      apps=''),
    C(id='ventspils', after='liepaja', ko='벤츠필스', en='Ventspils', native='Ventspils', lat=57.3894, lng=21.5606,
      blurb=['벤타강 어귀의 깔끔한 항구 도시. 13세기 리보니아 기사단 성과 블루 플래그 해변, 협궤 증기 기차가 다니는 바닷가 야외 박물관이 있습니다.',
             'A tidy port town at the mouth of the Venta, with a 13th-century Livonian Order castle, a Blue Flag beach and a seaside open-air museum with a narrow-gauge steam train.'],
      highlights=[
          H('벤츠필스 리보니아 기사단 성', 'Ventspils Castle', '13세기 리보니아 기사단 성으로, 안에 도시 역사와 중세 생활을 보여 주는 박물관이 있습니다.', 'The 13th-century Livonian Order castle, now a museum of the town’s history and medieval life.', 'Ventspils Livonian Order Castle', 60, 90),
          H('벤츠필스 해변', 'Ventspils beach', '블루 플래그를 받은 넓은 모래 해변으로, 뒤로 해변 공원과 산책로가 있습니다.', 'A wide Blue Flag sandy beach backed by a seaside park and promenade.', 'Ventspils beach', 60, 180),
          H('바닷가 야외 박물관', 'Seaside Open-Air Museum', '어촌 가옥과 배, 닻을 모은 야외 박물관으로, 여름엔 협궤 증기 기차가 공원을 돕니다.', 'An open-air museum of fishing cottages, boats and anchors, where a narrow-gauge steam train runs in summer.', 'Piejūras brīvdabas muzejs', 60, 90),
      ],
      hubs="    air: [RIX()],\n    bus: [['Ventspils autoosta', '벤츠필스 버스터미널']],\n    port: [['Ventspils osta', '벤츠필스 항구', '스웨덴행 페리|ferries to Sweden']],\n",
      itinerary={'days': [['', 1, 3, 2]]},
      season='6~8월 해변과 증기 기차가 좋습니다.|June to August for the beach and steam train.',
      stay=[('구시가와 성', 'Old town & castle', 'Ventspils Old Town', '걸어서 다 보기|Everything on foot', '성과 강변, 버스터미널이 가깝고 해변까지 걸어서 20분 안팎입니다.|Close to the castle, riverside and bus station, about 20 minutes’ walk from the beach.')],
      routes=R("  r('riga', 'ventspils', 'bus', 180),\n  r('kuldiga', 'ventspils', 'bus', 75),\n"),
      transit=dict(modes=['walk', 'bus', 'bike', 'taxi'], ko='시내는 걸어서 다니거나 자전거를 빌립니다.', en='Walk or hire a bike around town.'),
      apps=''),
    C(id='daugavpils', after='ventspils', ko='다우가프필스', en='Daugavpils', native='Daugavpils', lat=55.8833, lng=26.5361,
      blurb=['라트비아 제2의 도시로 남동부 라트갈레 지방의 중심. 화가 마크 로스코가 태어난 곳으로 그의 원화를 둔 아트센터가 19세기 거대한 요새 안에 있습니다.',
             'Latvia’s second city and the heart of Latgale in the southeast, birthplace of the painter Mark Rothko, whose art centre with original works stands inside a vast 19th-century fortress.'],
      highlights=[
          H('마크 로스코 아트센터', 'Mark Rothko Art Centre', '1903년 이 도시에서 태어난 화가 마크 로스코의 원화를 전시하는 미술관으로, 요새의 옛 무기고 건물에 있습니다.', 'An art centre showing original works by Mark Rothko, born here in 1903, in the fortress’s former arsenal.', 'Mark Rothko Art Centre', 90, 120),
          H('다우가프필스 요새', 'Daugavpils Fortress', '19세기 러시아 제국이 쌓은 거대한 요새로, 성벽 안에 옛 병영과 거리가 남아 있습니다.', 'A vast fortress built by the Russian Empire in the 19th century, with old barracks and streets still inside its walls.', 'Daugavpils Fortress', 60, 90),
          H('교회 언덕', 'Church Hill', '루터교·가톨릭·정교회·구교도 교회가 한 언덕에 모여 있어, 이 지방 신앙의 다양함을 보여 줍니다.', 'Lutheran, Catholic, Orthodox and Old Believer churches gathered on one hill, showing the region’s mix of faiths.', 'Daugavpils Church Hill', 45, 60),
      ],
      hubs="    air: [RIX()],\n    rail: [['Daugavpils', '다우가프필스역']],\n    bus: [['Daugavpils autoosta', '다우가프필스 버스터미널']],\n",
      itinerary={'days': [['', 2, 1, 3]]},
      season='5~9월이 둘러보기 좋습니다.|May to September is best.',
      stay=[('시내 중심', 'City centre', 'Daugavpils centre', '교통이 편한 곳|Convenient', '역과 시내가 가깝고, 요새까지 트램이 다닙니다.|Close to the station, with trams to the fortress.')],
      routes=R("  r('riga', 'daugavpils', 'train', 200),\n"),
      transit=dict(modes=['walk', 'tram', 'bus', 'train', 'taxi'], ko='시내는 걸어서 다니고, 요새는 트램이나 버스로 갑니다.', en='Walk the centre; take a tram or bus to the fortress.')),
]

LV_NEW = """    cityIds: ['riga', 'jurmala', 'sigulda', 'cesis', 'kuldiga', 'liepaja', 'ventspils', 'daugavpils'],
    cityGroups: [
      { title: { ko: '리가·해안', en: 'Riga & coast' }, cityIds: ['riga', 'jurmala'] },
      { title: { ko: '비드제메', en: 'Vidzeme' }, cityIds: ['sigulda', 'cesis'] },
      { title: { ko: '쿠르제메', en: 'Kurzeme' }, cityIds: ['kuldiga', 'liepaja', 'ventspils'] },
      { title: { ko: '라트갈레', en: 'Latgale' }, cityIds: ['daugavpils'] },
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
    i = k.index("    id: 'lv',")
    j = k.index('    cityGroups: [', i)
    e = k.index('    ],\n', j) + len('    ],\n')
    s = k.index('    cityIds: [', i)
    assert s < j
    k = k[:s] + LV_NEW + k[e:]
    wr('countries.ts', k)
