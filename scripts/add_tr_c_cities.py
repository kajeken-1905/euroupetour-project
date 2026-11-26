#!/usr/bin/env python3
"""Turkey 2nd pass, new cities (2026-11-26, user picked all 16): İznik, Assos (Marmara); Çeşme & Alaçatı, Bergama,
Kuşadası, Datça, Dalyan (Aegean); Side, Kalkan (Mediterranean); Rize & Ayder, Sinop, Amasya (Black Sea); Kayseri,
Eskişehir (Central Anatolia); Van (Eastern Anatolia); Mount Nemrut / Kâhta (Southeastern Anatolia).
Facts (Wikipedia en/tr): İznik = Nicaea, First Council 325 and Second Council 787 (held in its Hagia Sophia), Roman-
Byzantine walls with the Istanbul and Lefke gates, Green Mosque (1378-91) with tiled minaret, submerged basilica found
in Lake İznik in 2014; Assos Temple of Athena (6th c. BC, Doric) facing Lesbos, Murad I's Hüdavendigar Mosque in
Behramkale, Babakale castle (18th c.) near Cape Baba, the westernmost point of mainland Asia; Pergamon acropolis with
steep theatre and Trajaneum (UNESCO 2014), Asklepion (Galen), Red Basilica (one of the Seven Churches); Çeşme castle
(1508, Bayezid II), Alaçatı stone houses, windmills and windsurfing, Ilıca beach and thermal springs, Erythrai at
Ildırı; Kuşadası Güvercinada fortress on a causeway, Öküz Mehmet Paşa caravanserai (17th c.), Ladies Beach, Dilek
Peninsula–Büyük Menderes Delta national park; Datça, Eski Datça (Reşadiye), Knidos with two harbours (Praxiteles'
Aphrodite), Palamutbükü; Dalyan Kaunian rock tombs, Kaunos, İztuzu loggerhead-turtle beach, Sultaniye hot springs at
Lake Köyceğiz; Kalkan, Kaputaş, Xanthos–Letoon (UNESCO 1988), Patara; Side Temple of Apollo, theatre, museum in a
Roman bath, Manavgat waterfall; Amasya Pontic rock tombs on Mt Harşena, Hazeranlar mansion (1865), castle, Bayezid II
mosque (1486), Strabo's birthplace; Sinop historic prison museum inside the citadel walls, Hamsilos bay, İnceburun,
northernmost point of Turkey, Diogenes' birthplace; Rize tea, Ziraat tea garden, Fırtına valley stone bridges, Zil
Kale, Ayder yayla with hot springs below the Kaçkar; Kayseri basalt castle, Gevher Nesibe (1206) hospital museum,
Hunat Hatun complex (1238), Mt Erciyes (3,917 m) ski resort; Eskişehir Odunpazarı houses, Odunpazarı Modern Museum
(Kengo Kuma, 2019), Porsuk river, Kurşunlu complex (1525); Van fortress (Urartian Tushpa), Akdamar Holy Cross church
(915–921), Hoşap castle (1643), Van breakfast street; Mt Nemrut tumulus and colossal statues of Antiochus I of
Commagene (UNESCO 1987), Arsameia relief, Severan Cendere bridge, Karakuş tumulus.
Times are rounded usual timings (bus/ferry operators and aggregators, 2026-11-26). Run once."""
import json
import add_daytrip_places3 as T

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
NEAR = ('근교', 'Nearby')
FIRST = '처음 가는 여행에 추천|Best for a first visit'
RC = 'routes-east.ts'
R_AFTER = r"^  r\('selcuk', 'bodrum', 'bus', 180\),\n"
ADB = "['İzmir Adnan Menderes (ADB)', '이즈미르 공항 (ADB)']"
DLM = "['Dalaman (DLM)', '달라만 공항 (DLM)']"
AYT = "['Antalya (AYT)', '안탈리아 공항 (AYT)']"
BJV = "['Milas–Bodrum (BJV)', '밀라스-보드룸 공항 (BJV)']"
TZX = "['Trabzon (TZX)', '트라브존 공항 (TZX)']"


def H(ko, en, dko, den, maps, mn, mx, n=None, group=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    d = dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)
    if group:
        d['group'] = group
    return d


def R(a, b, mode, m, *opts):
    extra = f", {{ {', '.join(opts)} }}" if opts else ''
    return (RC, R_AFTER, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


def C(**k):
    d = dict(country='tr', hubs_file='hubs-east.ts', hubs_before='  // —— ge ——\n', itin_file='itinerary-south.ts',
             itin_before='  edirne: ', visit_file='visit-east.ts', visit_after=r"^  'istanbul-h1': v\(.*\),\n",
             stay_before='  istanbul: [', transit_before='  istanbul: {', places=None, daytrips=[], apps='')
    d.update(k)
    return d


def hubs(air, bus=None, port=None, rail=None):
    s = f"    air: [{', '.join(air)}],\n" if air else ''
    if rail:
        s += f"    rail: [{rail}],\n"
    if bus:
        s += f"    bus: [{bus}],\n"
    if port:
        s += f"    port: [{port}],\n"
    return s


CITIES = [
    C(id='iznik', group_title='마르마라', after='bursa', ko='이즈니크', en='İznik', native='İznik', lat=40.4292, lng=29.7211,
      blurb=['고대 니케아로, 325년 첫 공의회가 열린 호숫가 도시입니다. 로마·비잔틴 성벽 안에 오스만 시대 이즈니크 타일의 고향이 있습니다.',
             'Ancient Nicaea, the lakeside town of the First Council in 325; inside its Roman-Byzantine walls is the home of Ottoman İznik tiles.'],
      highlights=[
          H('아야 소피아 (이즈니크)', 'Hagia Sophia of Nicaea', '787년 제2차 니케아 공의회가 열린 비잔틴 성당으로, 지금은 모스크로 씁니다.', 'The Byzantine church where the Second Council of Nicaea met in 787, now used as a mosque.', 'Hagia Sophia Mosque İznik', 20, 30, b='no', n=FREE),
          H('녹색 모스크', 'Green Mosque', '1378~1391년에 지은 모스크로, 초록·청록 타일로 덮인 첨탑이 이름의 유래입니다.', 'A mosque of 1378–91, named for its minaret clad in green and turquoise tiles.', 'Yeşil Camii İznik', 15, 20, b='no', n=FREE),
          H('성벽과 이스탄불 문', 'City walls & Istanbul Gate', '시내를 둘러싼 로마·비잔틴 성벽으로, 이스탄불 문과 레프케 문이 남아 있습니다.', 'The Roman-Byzantine walls ringing the town, with the Istanbul and Lefke gates still standing.', 'Istanbul Gate İznik', 45, 60, b='no', n=FREE),
          H('이즈니크 호숫가', 'Lake İznik shore', '노을이 좋은 호숫가 산책로로, 2014년 물속에서 옛 바실리카 유적이 발견됐습니다.', 'A lakeside promenade good at sunset; the remains of a submerged basilica were found offshore in 2014.', 'İznik Gölü sahil', 45, 60, b='no', n=FREE),
      ],
      hubs=hubs(["['Sabiha Gökçen (SAW)', '사비하 괵첸 공항 (SAW)', '이스탄불|Istanbul']"], "['İznik Otogarı', '이즈니크 버스터미널', '부르사·이스탄불행|to Bursa, Istanbul']"),
      itinerary={'days': [['', 1, 2, 3, 4]]},
      season='봄·가을이 걷기 좋고, 여름 한낮은 덥습니다.|Spring and autumn are best for walking; summer afternoons are hot.',
      stay=[('성벽 안 시내', 'Inside the walls', 'İznik', FIRST, '모스크·성당·호숫가가 걸어서 닿습니다.|The mosques, church and lakeshore on foot.')],
      routes=[R('bursa', 'iznik', 'bus', 90), R('istanbul', 'iznik', 'bus', 180, "n: '얄로바 경유|via Yalova'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='성벽 안 시내는 작아 걸어서 다닙니다.', en='The walled town is small and walkable.')),
    C(id='assos', group_title='마르마라', after='canakkale', ko='아소스 (베람칼레)', en='Assos (Behramkale)', native='Assos / Behramkale', lat=39.4886, lng=26.3375,
      blurb=['에게해를 내려다보는 언덕 위 고대 도시와 돌집 마을로, 바다 건너 그리스 레스보스섬이 보입니다. 아래쪽 옛 항구엔 돌로 지은 숙소가 모여 있습니다.',
             'An ancient hilltop city and stone village above the Aegean, looking across to the Greek island of Lesbos, with stone inns at the old harbour below.'],
      highlights=[
          H('아테나 신전', 'Temple of Athena', '기원전 6세기 도리스식 신전 터로, 아크로폴리스에서 바다와 레스보스섬이 내려다보입니다.', 'The 6th-century BC Doric temple on the acropolis, overlooking the sea and Lesbos.', 'Assos Athena Temple', 60, 90),
          H('베람칼레 마을과 휘다벤디가르 모스크', 'Behramkale village & Hüdavendigar Mosque', '아크로폴리스로 오르는 돌집 마을로, 무라트 1세가 지은 14세기 모스크가 있습니다.', 'The stone village on the way up to the acropolis, with a 14th-century mosque built by Murad I.', 'Hüdavendigar Camii Behramkale', 30, 45, b='no', n=FREE),
          H('아소스 옛 항구', 'Assos harbour', '절벽 아래 작은 항구로, 돌로 지은 호텔과 생선 식당이 늘어서 있습니다.', 'The little harbour below the cliffs, lined with stone hotels and fish restaurants.', 'Assos Harbour', 60, 90, b='no', n=FREE),
          H('바바칼레', 'Babakale', '아시아 대륙 서쪽 끝 곶 근처의 어촌으로, 18세기 오스만 성이 있습니다.', 'A fishing village near Cape Baba, the westernmost point of mainland Asia, with an 18th-century Ottoman castle.', 'Babakale Castle', 60, 90, group=DAY, b='no', n=FREE),
      ],
      hubs=hubs(["['Çanakkale (CKZ)', '차나칼레 공항 (CKZ)']", "['Balıkesir Koca Seyit (EDO)', '에드레미트 공항 (EDO)']"], "['Ayvacık Otogarı', '아이바즉 버스터미널', '아소스행 미니버스|minibus to Assos']"),
      itinerary={'days': [['', 2, 1, 3]], 'trips': [['바바칼레|Babakale', 4]]},
      season='5~10월이 좋고, 겨울엔 항구 숙소 상당수가 문을 닫습니다.|May–October; many harbour inns close in winter.',
      stay=[('옛 항구', 'Old harbour', 'Assos Harbour', '바닷가 분위기|By the sea', '돌집 호텔과 식당이 모인 바닷가입니다. 마을까지 가파른 길을 오릅니다.|Stone hotels and restaurants by the water; a steep climb up to the village.'),
            ('베람칼레 마을', 'Behramkale village', 'Behramkale', '조용한 마을|Quiet village', '아크로폴리스 바로 아래 게스트하우스가 있습니다.|Guesthouses right below the acropolis.')],
      routes=[R('canakkale', 'assos', 'bus', 120, "n: '아이바즉에서 미니버스 환승|change to a minibus at Ayvacık'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을과 항구 사이는 걸어서 오르내리고, 바바칼레는 차가 편합니다.', en='Walk between village and harbour; a car is easiest for Babakale.')),
    C(id='cesme', group_title='에게해', after='izmir', ko='체슈메·알라차트', en='Çeşme & Alaçatı', native='Çeşme / Alaçatı', lat=38.3236, lng=26.3031,
      blurb=['이즈미르 서쪽 반도 끝의 휴양지로, 성채 항구 체슈메와 돌집 골목·풍차의 알라차트가 있습니다. 그리스 키오스섬행 배가 떠납니다.',
             'The resort peninsula west of İzmir: castle-port Çeşme and Alaçatı with its stone lanes and windmills; ferries leave for the Greek island of Chios.'],
      highlights=[
          H('체슈메 성', 'Çeşme Castle', '1508년 바예지트 2세 때 지은 항구 성채로, 안에 박물관이 있습니다.', 'The harbour fortress built in 1508 under Bayezid II, with a museum inside.', 'Çeşme Castle', 45, 60),
          H('알라차트 구시가', 'Alaçatı old town', '돌집과 부겐빌레아 골목, 언덕 위 풍차가 있는 마을로, 바닷가 만은 윈드서핑 명소입니다.', 'Stone houses, bougainvillea lanes and hilltop windmills; its bay is a famous windsurfing spot.', 'Alaçatı', 90, 120, group=NEAR, b='no', n=FREE),
          H('을르자 해변', 'Ilıca Beach', '얕고 맑은 모래 해변으로, 근처에 온천이 있습니다.', 'A shallow, clear sandy beach with thermal springs nearby.', 'Ilıca Plajı Çeşme', 120, 240, group=NEAR, b='no', n=FREE),
          H('에리트라이 유적 (일드르)', 'Erythrai (Ildırı)', '어촌 일드르 위 언덕의 고대 이오니아 도시로, 극장 터에서 만이 내려다보입니다.', 'An ancient Ionian city on the hill above the fishing village of Ildırı, its theatre overlooking the bay.', 'Erythrai Antik Kenti', 60, 90, group=DAY, b='no', n=FREE),
      ],
      hubs=hubs([ADB], "['Çeşme Otogarı', '체슈메 버스터미널', '이즈미르행|to İzmir']", "['Çeşme Limanı', '체슈메 항구', '그리스 키오스행 페리|ferries to Chios, Greece']"),
      itinerary={'days': [['', 1, 3], ['', 2]], 'trips': [['에리트라이|Erythrai', 4]]},
      season='해수욕은 6~9월이고, 7~8월 주말엔 이즈미르 사람들로 붐빕니다.|June–September for swimming; July–August weekends fill with visitors from İzmir.',
      stay=[('알라차트', 'Alaçatı', 'Alaçatı', '분위기 좋은 부티크 숙소|Boutique stays', '돌집 부티크 호텔과 식당이 많고 비싼 편입니다.|Stone-house boutique hotels and restaurants; pricey.'),
            ('체슈메 항구', 'Çeşme harbour', 'Çeşme', '교통이 편한 곳|Convenient', '버스 터미널과 키오스행 항구가 가깝습니다.|Near the bus station and the Chios ferry.')],
      routes=[R('izmir', 'cesme', 'bus', 90), R('cesme', 'chios', 'ferry', 45, "n: '국경 통과·여권 필요|international crossing, passport needed'")],
      transit=dict(modes=['bus', 'walk', 'taxi', 'ferry'], ko='체슈메·알라차트·을르자 사이에 미니버스가 자주 다닙니다.', en='Minibuses run often between Çeşme, Alaçatı and Ilıca.')),
    C(id='bergama', group_title='에게해', after='cesme', ko='베르가마', en='Bergama', native='Bergama', lat=39.1214, lng=27.1799,
      blurb=['고대 페르가몬 왕국의 수도였던 도시로, 언덕 위 아크로폴리스와 치료 성소 아스클레피온이 유네스코 세계유산입니다.',
             'Once the capital of the kingdom of Pergamon; its hilltop acropolis and the Asklepion healing sanctuary are a UNESCO World Heritage Site.'],
      highlights=[
          H('페르가몬 아크로폴리스', 'Pergamon Acropolis', '가파른 비탈의 극장과 도서관 터, 트라야누스 신전이 남은 언덕 위 왕도입니다. 케이블카로 오릅니다.', 'The royal hilltop with a steep hillside theatre, the library site and the Temple of Trajan; reached by cable car.', 'Pergamon Acropolis', 120, 150),
          H('아스클레피온', 'Asklepion', '의사 갈레노스가 일했던 고대 치료 성소로, 지하 통로와 극장이 남아 있습니다.', 'The ancient healing sanctuary where the physician Galen worked, with a vaulted tunnel and theatre.', 'Asklepion Pergamon', 60, 90),
          H('붉은 바실리카', 'Red Basilica', '이집트 신들을 모신 붉은 벽돌 신전으로, 뒤에 요한계시록의 일곱 교회 중 하나가 됐습니다.', 'A red-brick temple to Egyptian gods that later became one of the Seven Churches of Revelation.', 'Red Basilica Bergama', 30, 45),
          H('베르가마 고고학 박물관', 'Bergama Archaeological Museum', '페르가몬과 주변 유적에서 나온 조각과 유물을 전시합니다.', 'Sculpture and finds from Pergamon and nearby sites.', 'Bergama Arkeoloji Müzesi', 45, 60),
      ],
      hubs=hubs([ADB], "['Bergama Otogarı', '베르가마 버스터미널', '이즈미르·아이발르크행|to İzmir, Ayvalık']"),
      itinerary={'days': [['', 1, 3, 4], ['', 2]]},
      season='봄·가을이 좋고, 7~8월 한낮의 아크로폴리스는 매우 덥습니다.|Spring and autumn; the acropolis is very hot at midday in July–August.',
      stay=[('구시가', 'Old town', 'Bergama', FIRST, '붉은 바실리카와 박물관, 케이블카 승강장이 가깝습니다.|Near the Red Basilica, the museum and the cable car.')],
      routes=[R('izmir', 'bergama', 'bus', 120), R('ayvalik', 'bergama', 'bus', 75)],
      transit=dict(modes=['walk', 'taxi', 'bus'], ko='시내는 걸어서 다니고, 아크로폴리스는 케이블카, 아스클레피온은 택시가 편합니다.', en='Walk the town; take the cable car to the acropolis and a taxi to the Asklepion.')),
    C(id='kusadasi', group_title='에게해', after='selcuk', ko='쿠샤다스', en='Kuşadası', native='Kuşadası', lat=37.8579, lng=27.2610,
      blurb=['크루즈선이 들르는 에게해의 항구 휴양지로, 에페소스·프리에네·밀레토스를 다녀오기 좋은 거점입니다.',
             'An Aegean resort and cruise port, a handy base for Ephesus, Priene and Miletus.'],
      highlights=[
          H('귀베르진아다 (비둘기섬)', 'Pigeon Island (Güvercinada)', '둑길로 이어진 작은 섬의 성채로, 항구와 바다 전망이 좋습니다.', 'A fortress on a little island joined by a causeway, with harbour and sea views.', 'Güvercinada Kuşadası', 30, 45, b='no', n=FREE),
          H('외퀴즈 메흐메트 파샤 대상 숙소', 'Öküz Mehmet Paşa Caravanserai', '항구 앞의 17세기 대상 숙소로, 지금은 호텔과 안뜰 카페로 씁니다.', 'A 17th-century caravanserai by the harbour, now a hotel with a courtyard café.', 'Öküz Mehmet Paşa Kervansarayı', 15, 20, b='no', n=FREE),
          H('레이디스 비치', 'Ladies Beach', '시내 남쪽의 모래 해변으로, 해변 식당이 늘어서 있습니다.', 'The sandy beach south of town, lined with beach restaurants.', 'Kadınlar Denizi Kuşadası', 120, 240, b='no', n=FREE),
          H('딜레크반도 국립공원', 'Dilek Peninsula National Park', '숲과 맑은 만의 해변이 이어지는 국립공원입니다.', 'A national park of forest and clear-water coves.', 'Dilek Yarımadası Milli Parkı', 180, 300, group=NEAR),
      ],
      hubs=hubs([ADB], "['Kuşadası Otogarı', '쿠샤다스 버스터미널', '이즈미르·셀추크행|to İzmir, Selçuk']", "['Kuşadası Limanı', '쿠샤다스 항구', '크루즈·그리스 사모스행|cruise port, ferries to Samos']"),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['딜레크반도 국립공원|Dilek Peninsula', 4]]},
      season='해수욕은 6~9월이 좋고, 크루즈선이 들어오는 날 낮엔 시내가 붐빕니다.|June–September for swimming; the centre is busy on cruise-ship days.',
      stay=[('항구·시내 중심', 'Harbour & centre', 'Kuşadası', FIRST, '항구와 식당, 셀추크행 미니버스가 가깝습니다.|Near the harbour, restaurants and minibuses to Selçuk.')],
      routes=[R('selcuk', 'kusadasi', 'bus', 30, "n: '돌무쉬(미니버스)|dolmuş minibus'"), R('izmir', 'kusadasi', 'bus', 90)],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='돌무쉬(미니버스)가 해변과 셀추크까지 다닙니다.', en='Dolmuş minibuses run to the beaches and Selçuk.')),
    C(id='datca', group_title='에게해', after='bodrum', ko='다트차', en='Datça', native='Datça', lat=36.7372, lng=27.6847,
      blurb=['에게해와 지중해 사이로 길게 뻗은 반도의 조용한 항구 마을로, 아몬드 밭과 맑은 만, 끝자락의 고대 도시 크니도스가 있습니다.',
             'A quiet harbour town on the long peninsula between the Aegean and the Mediterranean, with almond groves, clear bays and ancient Knidos at the tip.'],
      highlights=[
          H('다트차 항구', 'Datça harbour', '작은 항구를 따라 카페와 생선 식당이 늘어선 마을 중심입니다.', 'The town centre along the small harbour, lined with cafés and fish restaurants.', 'Datça Limanı', 60, 90, b='no', n=FREE),
          H('에스키 다트차', 'Eski Datça', '돌집과 부겐빌레아가 어우러진 옛 마을로, 시인 잔 위젤이 살던 집이 있습니다.', 'The old village of stone houses and bougainvillea, where the poet Can Yücel lived.', 'Eski Datça', 60, 90, group=NEAR, b='no', n=FREE),
          H('크니도스 유적', 'Knidos', '반도 끝의 고대 도시로, 두 항구와 극장이 남아 있고 프락시텔레스의 아프로디테상이 있던 곳입니다.', 'The ancient city at the tip of the peninsula, with two harbours and a theatre—once home to Praxiteles’ Aphrodite.', 'Knidos Antik Kenti', 120, 180, group=DAY),
          H('팔라무트뷔퀴', 'Palamutbükü', '반도 남쪽의 자갈 해변 마을로, 물이 맑고 생선 식당이 있습니다.', 'A pebble-beach village on the south of the peninsula, with clear water and fish restaurants.', 'Palamutbükü', 120, 240, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs([DLM, BJV], "['Datça Otogarı', '다트차 버스터미널', '마르마리스행|to Marmaris']", "['Körmen İskelesi', '쾨르멘 선착장', '보드룸행 페리|ferry to Bodrum']"),
      itinerary={'days': [['', 1, 2], ['', 4]], 'trips': [['크니도스|Knidos', 3]]},
      season='해수욕은 6~9월이 좋고, 보드룸행 페리는 여름에 주로 다닙니다.|June–September for swimming; the Bodrum ferry runs mainly in summer.',
      stay=[('다트차 항구', 'Datça harbour', 'Datça', FIRST, '식당과 버스 터미널이 가깝습니다.|Near restaurants and the bus station.'),
            ('에스키 다트차', 'Eski Datça', 'Eski Datça', '조용한 돌집|Quiet stone houses', '언덕 위 옛 마을의 돌집 숙소입니다.|Stone-house stays in the old hill village.')],
      routes=[R('bodrum', 'datca', 'ferry', 120, "n: '쾨르멘 선착장 도착 후 셔틀|arrives at Körmen, then a shuttle'")],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='반도 안 해변과 크니도스는 버스가 드물어 차가 편합니다.', en='Buses to the beaches and Knidos are sparse; a car is easiest.')),
    C(id='dalyan', group_title='에게해', after='datca', ko='달얀', en='Dalyan', native='Dalyan', lat=36.8353, lng=28.6425,
      blurb=['갈대 강가의 마을로, 강 건너 절벽에 카우노스 바위 무덤이 새겨져 있습니다. 강배를 타고 거북이 해변과 진흙 온천을 다닙니다.',
             'A reed-fringed river village facing the Kaunian rock tombs carved in the cliff opposite; river boats run to the turtle beach and mud baths.'],
      highlights=[
          H('카우노스 바위 무덤', 'Kaunian rock tombs', '강 건너 절벽에 신전 모양으로 새긴 고대 무덤들로, 강가에서 바라봅니다.', 'Temple-fronted ancient tombs cut into the cliff across the river, seen from the riverbank.', 'Kaunos Kaya Mezarları', 30, 45, b='no', n=FREE),
          H('카우노스 유적', 'Kaunos', '배로 강을 건너가는 고대 항구 도시 유적으로, 극장과 신전 터가 있습니다.', 'Ruins of an ancient port city reached by boat across the river, with a theatre and temples.', 'Kaunos Antik Kenti', 90, 120),
          H('이즈투주 해변', 'İztuzu Beach', '붉은바다거북이 알을 낳는 긴 모래 해변으로, 산란철엔 밤에 출입이 막힙니다.', 'A long sandy beach where loggerhead turtles nest; closed at night in the nesting season.', 'İztuzu Plajı', 120, 240, group=NEAR, b='no', n=FREE),
          H('술타니예 온천', 'Sultaniye hot springs', '쾨이제이즈 호숫가의 온천과 진흙 목욕장으로, 강배 투어로 많이 갑니다.', 'Hot springs and mud baths on Lake Köyceğiz, a usual stop on the river-boat tour.', 'Sultaniye Kaplıcaları', 90, 120, group=NEAR),
      ],
      hubs=hubs([DLM], "['Ortaca Otogarı', '오르타자 버스터미널', '달얀행 미니버스|minibus to Dalyan']"),
      itinerary={'days': [['', 1, 2], ['', 3, 4]]},
      season='5~10월이 좋고, 강배 투어도 이때 가장 많습니다.|May–October, when the river boats run most.',
      stay=[('강가 마을 중심', 'Riverside centre', 'Dalyan', FIRST, '강배 선착장과 식당이 모여 있습니다.|The boat quay and restaurants.')],
      routes=[R('fethiye', 'dalyan', 'bus', 75, "n: '오르타자에서 미니버스 환승|change at Ortaca'")],
      transit=dict(modes=['walk', 'ferry', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 해변·유적·온천은 강배로 갑니다.', en='Walk the village; river boats go to the beach, ruins and springs.')),
    C(id='kalkan', group_title='지중해', after='kas', ko='칼칸', en='Kalkan', native='Kalkan', lat=36.2650, lng=29.4142,
      blurb=['카쉬와 파타라 사이 언덕 비탈에 하얀 집들이 층층이 선 항구 마을로, 옥상 식당이 많습니다.',
             'A harbour village of white houses stepped up the hillside between Kaş and Patara, known for its rooftop restaurants.'],
      highlights=[
          H('칼칸 구시가와 항구', 'Kalkan old town & harbour', '부겐빌레아 덮인 골목이 작은 항구로 내려가는 마을입니다.', 'Bougainvillea-draped lanes running down to the little harbour.', 'Kalkan Limanı', 60, 90, b='no', n=FREE),
          H('카푸타시 해변', 'Kaputaş Beach', '협곡 끝 계단 아래의 청록색 바다 해변입니다.', 'A turquoise cove at the foot of a gorge, down a flight of steps.', 'Kaputaş Plajı', 120, 180, group=NEAR, b='no', n=FREE),
          H('크산토스와 레툰', 'Xanthos & Letoon', '리키아의 수도 크산토스와 성소 레툰으로, 함께 유네스코 세계유산입니다.', 'Xanthos, the Lycian capital, and the sanctuary of the Letoon, together a UNESCO World Heritage Site.', 'Xanthos Antik Kenti', 120, 180, group=DAY),
          H('파타라', 'Patara', '18km 모래 해변과 리키아 연맹 의회 건물이 남은 고대 도시입니다.', 'An 18 km sandy beach and an ancient city with the Lycian League assembly hall.', 'Patara Antik Kenti', 180, 240, group=DAY),
      ],
      hubs=hubs(["['Dalaman (DLM)', '달라만 공항 (DLM)', '약 1시간 30분|about 1.5 hours']"], "['Kalkan Otogarı', '칼칸 버스 정류장', '카쉬·페티예행|to Kaş, Fethiye']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['크산토스·레툰·파타라|Xanthos, Letoon & Patara', 3, 4]]},
      season='해수욕은 5~10월이 좋고, 겨울엔 문 닫는 식당이 많습니다.|May–October for swimming; many restaurants close in winter.',
      stay=[('구시가', 'Old town', 'Kalkan', FIRST, '항구와 식당이 걸어서 닿지만 비탈이 가파릅니다.|The harbour and restaurants on foot, but the lanes are steep.')],
      routes=[R('kas', 'kalkan', 'bus', 30), R('fethiye', 'kalkan', 'bus', 90)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='카쉬·파타라·페티예행 미니버스가 다닙니다.', en='Minibuses run to Kaş, Patara and Fethiye.')),
    C(id='side', group_title='지중해', after='antalya', ko='시데', en='Side', native='Side', lat=36.7673, lng=31.3890,
      blurb=['고대 유적 사이에 식당과 가게가 들어선 반도 마을로, 바닷가에 서 있는 아폴론 신전 기둥이 유명합니다.',
             'A peninsula village where restaurants and shops sit among ancient ruins, famous for the Temple of Apollo columns at the water’s edge.'],
      highlights=[
          H('아폴론 신전', 'Temple of Apollo', '반도 끝 바닷가에 다시 세운 신전 기둥으로, 해 질 녘이 아름답습니다.', 'Re-erected temple columns at the tip of the peninsula, lovely at sunset.', 'Apollon Tapınağı Side', 30, 45, b='no', n=FREE),
          H('시데 고대 극장', 'Side Ancient Theatre', '2세기에 지은 큰 원형 극장으로, 마을 입구에 있습니다.', 'A large 2nd-century theatre at the entrance to the village.', 'Side Antik Tiyatrosu', 45, 60),
          H('시데 박물관', 'Side Museum', '로마 목욕장 건물에 차린 박물관으로, 조각상과 석관을 전시합니다.', 'A museum in a Roman bathhouse, with statues and sarcophagi.', 'Side Müzesi', 45, 60),
          H('마나브가트 폭포', 'Manavgat Waterfall', '마나브가트강의 넓고 낮은 폭포로, 강배 투어와 함께 많이 갑니다.', 'A wide, low waterfall on the Manavgat River, often combined with a river-boat trip.', 'Manavgat Şelalesi', 45, 60, group=NEAR),
      ],
      hubs=hubs(["['Antalya (AYT)', '안탈리아 공항 (AYT)', '약 1시간|about 1 hour']"], "['Manavgat Otogarı', '마나브가트 버스터미널', '시데행 미니버스|minibus to Side']"),
      itinerary={'days': [['', 2, 3, 1]], 'trips': [['마나브가트 폭포|Manavgat Waterfall', 4]]},
      season='해수욕은 5~10월이 좋고, 7~8월은 매우 덥습니다.|May–October for swimming; July–August are very hot.',
      stay=[('구시가 반도', 'Old town peninsula', 'Side', FIRST, '유적과 식당 사이의 작은 호텔들입니다.|Small hotels among the ruins and restaurants.'),
            ('해변 리조트', 'Beach resorts', 'Kumköy Side', '해변 휴양|Beach holidays', '양쪽 해안의 큰 리조트로, 구시가까지 버스나 걷기로 갑니다.|Big resorts on either coast, a bus ride or walk from the old town.')],
      routes=[R('antalya', 'side', 'bus', 90, "n: '마나브가트에서 미니버스 환승|change at Manavgat'"), R('alanya', 'side', 'bus', 75, "n: '마나브가트에서 미니버스 환승|change at Manavgat'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='구시가는 차가 들어가지 않아 걸어서 다닙니다.', en='The old town is car-free; walk.')),
    C(id='rize', group_title='흑해', after='trabzon', ko='리제·아이데르', en='Rize & Ayder', native='Rize / Ayder', lat=41.0201, lng=40.5234,
      blurb=['튀르키예 차의 고향인 흑해 도시 리제와, 카치카르산맥 아래 온천이 있는 고원 마을 아이데르를 함께 둘러봅니다.',
             'Rize, the Black Sea home of Turkish tea, and Ayder, a highland village with hot springs below the Kaçkar Mountains.'],
      highlights=[
          H('지라아트 차 정원', 'Ziraat tea garden', '시내 위 언덕의 차 정원으로, 차밭과 바다가 내려다보입니다.', 'A tea garden on the hill above town, overlooking tea terraces and the sea.', 'Ziraat Botanik Çay Bahçesi Rize', 45, 60, b='no', n=FREE),
          H('프르트나 계곡', 'Fırtına Valley', '오스만 시대 돌다리가 이어지는 녹색 계곡으로, 래프팅을 합니다.', 'A green valley of Ottoman stone bridges, used for rafting.', 'Fırtına Vadisi', 90, 120, group=DAY, b='no', n=FREE),
          H('질 칼레', 'Zil Kale', '프르트나 계곡 숲 위 바위에 선 중세 성입니다.', 'A medieval castle on a rock above the forests of the Fırtına valley.', 'Zil Kale', 45, 60, group=DAY, b='no', n=FREE),
          H('아이데르 고원', 'Ayder Yayla', '폭포와 나무집, 온천이 있는 카치카르산맥 아래의 고원 마을입니다.', 'A highland village of waterfalls, wooden houses and hot springs below the Kaçkar Mountains.', 'Ayder Yaylası', 180, 240, group=DAY, b='no', n='온천은 유료입니다.|The hot springs are ticketed.'),
      ],
      hubs=hubs(["['Rize–Artvin (RZV)', '리제-아르트빈 공항 (RZV)']", TZX], "['Rize Otogarı', '리제 버스터미널', '트라브존·아이데르행|to Trabzon, Ayder']"),
      itinerary={'days': [['', 1]], 'trips': [['프르트나 계곡과 아이데르|Fırtına valley & Ayder', 2, 3, 4]]},
      season='고원은 6~9월이 좋고, 일 년 내내 비가 잦습니다.|The highlands are best June–September; it rains often all year.',
      stay=[('리제 시내', 'Rize centre', 'Rize', '교통이 편한 곳|Convenient', '버스 터미널과 식당이 가깝습니다.|Near the bus station and restaurants.'),
            ('아이데르', 'Ayder', 'Ayder Yaylası', '고원 마을|Highland village', '나무집 숙소에서 묵고 산길을 걷습니다. 여름에만 여는 곳이 많습니다.|Wooden guesthouses and mountain walks; many open only in summer.')],
      routes=[R('trabzon', 'rize', 'bus', 75)],
      transit=dict(modes=['bus', 'taxi', 'walk'], ko='아이데르행 미니버스는 여름에 주로 다니며, 계곡 투어를 이용하면 편합니다.', en='Minibuses to Ayder run mainly in summer; valley tours are easiest.')),
    C(id='sinop', group_title='흑해', after='amasra', ko='시노프', en='Sinop', native='Sinop', lat=42.0264, lng=35.1551,
      blurb=['튀르키예 최북단 반도의 조용한 항구 도시로, 철학자 디오게네스가 태어난 곳입니다.',
             'A quiet harbour town on Turkey’s northernmost peninsula, birthplace of the philosopher Diogenes.'],
      highlights=[
          H('시노프 역사 감옥', 'Sinop Historical Prison', '성벽 안의 옛 감옥으로, 지금은 박물관으로 공개합니다.', 'The old prison inside the citadel walls, now open as a museum.', 'Tarihi Sinop Cezaevi', 60, 90),
          H('시노프 성벽과 항구', 'Sinop walls & harbour', '반도를 가로지르는 성벽과 생선 식당이 늘어선 항구입니다.', 'The walls across the peninsula and the harbour lined with fish restaurants.', 'Sinop Kalesi', 45, 60, b='no', n=FREE),
          H('함실로스만', 'Hamsilos Bay', '숲에 둘러싸인 좁은 만으로, 피오르처럼 보입니다.', 'A narrow forest-ringed bay that looks like a fjord.', 'Hamsilos Tabiat Parkı', 60, 90, group=NEAR),
          H('인제부룬 등대', 'İnceburun Lighthouse', '튀르키예 본토의 가장 북쪽 끝에 선 등대입니다.', 'The lighthouse at the northernmost point of mainland Turkey.', 'İnceburun Feneri', 60, 90, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["['Sinop (NOP)', '시노프 공항 (NOP)']"], "['Sinop Otogarı', '시노프 버스터미널', '앙카라·삼순행|to Ankara, Samsun']"),
      itinerary={'days': [['', 1, 2], ['', 3, 4]]},
      season='6~9월이 좋고, 겨울엔 흐리고 비가 잦습니다.|June–September; winter is grey and wet.',
      stay=[('항구·성벽 안', 'Harbour & old town', 'Sinop', FIRST, '감옥 박물관과 항구 식당이 걸어서 닿습니다.|The prison museum and harbour restaurants on foot.')],
      routes=[R('istanbul', 'sinop', 'flight', 85), R('ankara', 'sinop', 'bus', 420)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 함실로스와 인제부룬은 택시가 편합니다.', en='Walk the town; take a taxi to Hamsilos and İnceburun.')),
    C(id='amasya', group_title='흑해', after='sinop', ko='아마시아', en='Amasya', native='Amasya', lat=40.6533, lng=35.8331,
      blurb=['예실르막강 협곡의 도시로, 절벽에 폰토스 왕들의 바위 무덤이 새겨져 있고 강가엔 오스만 목조 가옥이 늘어서 있습니다. 지리학자 스트라본의 고향입니다.',
             'A town in the gorge of the Yeşilırmak, with the rock tombs of the Pontic kings carved in the cliff and Ottoman timber houses along the river; birthplace of the geographer Strabo.'],
      highlights=[
          H('왕들의 바위 무덤', 'Rock Tombs of the Pontic Kings', '하르셰나산 절벽에 새긴 폰토스 왕국의 무덤들로, 밤엔 조명이 켜집니다.', 'Tombs of the kings of Pontus cut into the cliffs of Mount Harşena, lit up at night.', 'Kral Kaya Mezarları Amasya', 45, 60),
          H('강가 오스만 가옥과 하제란라르 저택', 'Riverside houses & Hazeranlar Mansion', '예실르막 강가의 오스만 목조 가옥들로, 1865년의 하제란라르 저택은 박물관입니다.', 'Ottoman timber houses along the Yeşilırmak; the 1865 Hazeranlar Mansion is a museum.', 'Hazeranlar Konağı', 45, 60),
          H('아마시아 성', 'Amasya Castle', '바위 무덤 위 하르셰나산 꼭대기의 성으로, 협곡 도시가 내려다보입니다.', 'The castle on top of Mount Harşena above the tombs, overlooking the gorge.', 'Amasya Kalesi', 60, 90, b='no', n=FREE),
          H('술탄 바예지트 2세 모스크', 'Sultan Bayezid II Mosque', '1486년에 지은 강가의 오스만 모스크 단지입니다.', 'A riverside Ottoman mosque complex of 1486.', 'Sultan II. Bayezid Camii Amasya', 20, 30, b='no', n=FREE),
      ],
      hubs=hubs(["['Amasya Merzifon (MZH)', '아마시아 메르지폰 공항 (MZH)']"], "['Amasya Otogarı', '아마시아 버스터미널', '앙카라·삼순행|to Ankara, Samsun']"),
      itinerary={'days': [['', 2, 1, 4], ['', 3]]},
      season='봄·가을이 좋고, 여름 협곡은 덥습니다.|Spring and autumn; the gorge is hot in summer.',
      stay=[('강가 옛 동네', 'Riverside old quarter', 'Yalıboyu Evleri Amasya', FIRST, '오스만 가옥을 고친 숙소에서 바위 무덤 야경이 보입니다.|Restored Ottoman houses with night views of the tombs.')],
      routes=[R('ankara', 'amasya', 'bus', 300), R('istanbul', 'amasya', 'flight', 80, "n: '메르지폰 공항 도착|into Merzifon airport'")],
      transit=dict(modes=['walk', 'taxi', 'bus'], ko='강가 구시가는 걸어서 다니고, 성까지는 택시로 오릅니다.', en='Walk the riverside old town; take a taxi up to the castle.')),
    C(id='kayseri', group_title='중앙아나톨리아', after='konya', ko='카이세리', en='Kayseri', native='Kayseri', lat=38.7225, lng=35.4875,
      blurb=['에르지예스 화산 아래의 상업 도시로, 셀주크 시대 건축이 많이 남아 있습니다. 카파도키아로 들어가는 공항이 있습니다.',
             'A trading city below the Erciyes volcano with much Seljuk architecture, and an airport for Cappadocia.'],
      highlights=[
          H('카이세리 성', 'Kayseri Castle', '검은 현무암으로 쌓은 도심의 성채로, 안에 시장이 있습니다.', 'The black-basalt citadel in the city centre, with a bazaar inside.', 'Kayseri Kalesi', 30, 45, b='no', n=FREE),
          H('게브헤르 네시베 의학사 박물관', 'Gevher Nesibe Museum of Medical History', '1206년에 세운 셀주크 시대 병원·의학교 건물에 차린 박물관입니다.', 'A museum in a Seljuk hospital and medical school founded in 1206.', 'Gevher Nesibe Şifahanesi', 45, 60),
          H('후나트 하툰 단지', 'Hunat Hatun Complex', '1238년 셀주크 왕비가 지은 모스크·신학교·목욕탕 단지입니다.', 'A mosque, madrasa and bath complex built by a Seljuk queen in 1238.', 'Hunat Hatun Külliyesi', 30, 45, b='no', n=FREE),
          H('에르지예스산', 'Mount Erciyes', '해발 3,917m의 화산으로, 겨울엔 큰 스키장이 열립니다.', 'A 3,917 m volcano with a large ski resort in winter.', 'Erciyes Kayak Merkezi', 240, 360, group=NEAR),
      ],
      hubs=hubs(["['Kayseri Erkilet (ASR)', '카이세리 공항 (ASR)']"], "['Kayseri Otogarı', '카이세리 버스터미널', '괴레메·앙카라행|to Göreme, Ankara']", None, "['Kayseri Garı', '카이세리역']"),
      itinerary={'days': [['', 1, 3, 2]], 'trips': [['에르지예스산|Mount Erciyes', 4]]},
      season='봄·가을이 좋고, 12~3월은 에르지예스 스키 시즌입니다.|Spring and autumn; December–March is ski season on Erciyes.',
      stay=[('시내 중심', 'City centre', 'Kayseri', FIRST, '성과 셀주크 건축, 트램이 가깝습니다.|Near the castle, the Seljuk buildings and the tram.')],
      routes=[R('goreme', 'kayseri', 'bus', 75), R('istanbul', 'kayseri', 'flight', 90), R('ankara', 'kayseri', 'bus', 270)],
      transit=dict(modes=['tram', 'bus', 'taxi', 'walk'], ko='트램이 시내와 버스 터미널을 잇습니다.', en='The tram links the centre and the bus station.')),
    C(id='eskisehir', group_title='중앙아나톨리아', after='kayseri', ko='에스키셰히르', en='Eskişehir', native='Eskişehir', lat=39.7767, lng=30.5206,
      blurb=['포르수크강이 흐르는 대학 도시로, 오스만 목조 가옥 동네 오둔파자르와 현대 미술관이 있습니다. 앙카라·이스탄불과 고속철로 이어집니다.',
             'A university city on the Porsuk River, with the Ottoman timber-house quarter of Odunpazarı and a modern art museum; linked to Ankara and Istanbul by high-speed rail.'],
      highlights=[
          H('오둔파자르', 'Odunpazarı', '알록달록한 오스만 목조 가옥이 언덕 골목에 늘어선 옛 동네입니다.', 'The old quarter of colourful Ottoman timber houses on hillside lanes.', 'Odunpazarı Evleri', 60, 90, b='no', n=FREE),
          H('오둔파자르 현대 미술관', 'Odunpazarı Modern Museum', '구마 겐고가 나무를 쌓아 올린 듯 설계한 2019년 개관 미술관입니다.', 'A museum of 2019 designed by Kengo Kuma to look like stacked timber.', 'Odunpazarı Modern Müze', 60, 90),
          H('쿠르슌루 단지', 'Kurşunlu Complex', '1525년에 지은 모스크 단지로, 해포석(메르샴) 공예 박물관이 함께 있습니다.', 'A mosque complex of 1525, with a meerschaum crafts museum.', 'Kurşunlu Külliyesi', 30, 45, b='no', n=FREE),
          H('포르수크 강변', 'Porsuk riverside', '다리와 카페가 이어지는 강변으로, 곤돌라 배를 탑니다.', 'The riverside of bridges and cafés, with gondola boat rides.', 'Porsuk Çayı Eskişehir', 60, 90, b='no', n=FREE),
      ],
      hubs=hubs(None, "['Eskişehir Otogarı', '에스키셰히르 버스터미널']", None, "['Eskişehir Garı', '에스키셰히르역', '앙카라·이스탄불·콘야행 고속열차|high-speed trains to Ankara, Istanbul, Konya']"),
      itinerary={'days': [['', 1, 2, 3, 4]]},
      season='봄·가을이 좋고, 겨울은 춥습니다.|Spring and autumn; winters are cold.',
      stay=[('오둔파자르·시내', 'Odunpazarı & centre', 'Odunpazarı', FIRST, '옛 동네와 강변, 트램이 가깝습니다.|Near the old quarter, the river and the tram.')],
      routes=[R('ankara', 'eskisehir', 'train', 90, "n: '고속열차 YHT|YHT high-speed'"), R('istanbul', 'eskisehir', 'train', 160, "n: '고속열차 YHT|YHT high-speed'")],
      transit=dict(modes=['tram', 'bus', 'taxi', 'walk'], ko='트램이 역과 시내, 오둔파자르 근처를 잇습니다.', en='Trams link the station, the centre and Odunpazarı.')),
    C(id='van', group_title='동아나톨리아', after='kars', ko='반', en='Van', native='Van', lat=38.5012, lng=43.3729,
      blurb=['튀르키예에서 가장 큰 호수인 반 호숫가의 도시로, 우라르투 왕국의 바위 성채와 아크다마르섬 교회, 푸짐한 반식 아침상이 유명합니다.',
             'A city on Lake Van, Turkey’s largest lake, known for the Urartian rock fortress, the church on Akdamar Island and its lavish Van breakfasts.'],
      highlights=[
          H('반 성채', 'Van Fortress', '호숫가 바위산 위의 우라르투 왕국 수도 투슈파 유적입니다.', 'The rock citadel of Tushpa, capital of the Urartian kingdom, on a ridge by the lake.', 'Van Kalesi', 60, 90),
          H('아크다마르섬 성 십자가 교회', 'Church of the Holy Cross, Akdamar', '915~921년에 지은 아르메니아 교회로, 벽에 성경 이야기 부조가 새겨져 있습니다. 게바시 선착장에서 배로 갑니다.', 'An Armenian church of 915–921 with biblical reliefs carved on its walls, reached by boat from Gevaş.', 'Akdamar Adası', 120, 180, group=NEAR),
          H('반 아침 거리', 'Van Breakfast Street', '치즈·꿀·크림 등 수십 가지가 차려지는 반식 아침을 먹는 식당 거리입니다.', 'A street of restaurants serving the Van breakfast of dozens of cheeses, honey, cream and more.', 'Van Kahvaltı Sokağı', 60, 90, b='no'),
          H('호샤프 성', 'Hoşap Castle', '1643년 쿠르드 영주가 바위 언덕에 지은 성입니다.', 'The castle a Kurdish lord built on a rocky hill in 1643.', 'Hoşap Kalesi', 60, 90, group=DAY),
      ],
      hubs=hubs(["['Van Ferit Melen (VAN)', '반 페리트 멜렌 공항 (VAN)']"], "['Van Otogarı', '반 버스터미널']", "['Akdamar İskelesi', '아크다마르 선착장', '아크다마르섬행 배|boats to Akdamar Island']"),
      itinerary={'days': [['', 3, 1], ['', 2]], 'trips': [['호샤프 성|Hoşap Castle', 4]]},
      season='5~10월이 좋고, 겨울은 눈이 많고 매우 춥습니다.|May–October; winters are snowy and very cold.',
      stay=[('시내 중심', 'City centre', 'Van', FIRST, '아침 거리와 식당, 시내버스가 가깝습니다.|Near the breakfast street and restaurants.')],
      routes=[R('istanbul', 'van', 'flight', 140), R('ankara', 'van', 'flight', 105)],
      transit=dict(modes=['bus', 'taxi', 'walk'], ko='성채와 아크다마르 선착장은 돌무쉬나 택시로 갑니다.', en='Take a dolmuş or taxi to the fortress and the Akdamar pier.')),
    C(id='nemrut', group_title='남동아나톨리아', after='sanliurfa', ko='넴루트산 (카흐타)', en='Mount Nemrut (Kâhta)', native='Nemrut Dağı / Kâhta', lat=37.7853, lng=38.6214,
      blurb=['해발 2,134m 산꼭대기에 콤마게네 왕 안티오코스 1세의 봉분과 거대한 석상 머리들이 늘어선 유네스코 세계유산입니다. 아래 마을 카흐타를 거점으로 일출·일몰 투어를 합니다.',
             'A UNESCO site on a 2,134 m summit, where colossal stone heads stand by the burial mound of King Antiochus I of Commagene; sunrise and sunset tours leave from Kâhta below.'],
      highlights=[
          H('넴루트산 정상', 'Mount Nemrut summit', '봉분 동·서쪽 테라스에 신과 왕의 거대한 석상 머리들이 놓여 있습니다. 일출과 일몰이 유명합니다.', 'Giant stone heads of gods and the king on the east and west terraces of the tumulus, famous at sunrise and sunset.', 'Nemrut Dağı', 120, 180, n='주차장에서 정상까지 약 600m를 걸어 오릅니다. 정상은 여름에도 쌀쌀합니다.|About 600 m on foot from the car park; it is chilly at the top even in summer.'),
          H('아르사메이아', 'Arsameia', '콤마게네 왕과 헤라클레스가 악수하는 부조가 남은 옛 왕국의 여름 수도입니다.', 'The kingdom’s summer capital, with a relief of the king shaking hands with Heracles.', 'Arsameia Ören Yeri', 45, 60),
          H('젠데레 다리', 'Cendere Bridge', '셉티미우스 세베루스 황제 때 지은 로마 시대 아치 다리입니다.', 'A Roman arched bridge from the reign of Septimius Severus.', 'Cendere Köprüsü', 15, 20, b='no', n=FREE),
          H('카라쿠시 봉분', 'Karakuş Tumulus', '콤마게네 왕실 여인들의 무덤으로, 독수리 조각을 얹은 기둥이 서 있습니다.', 'The tomb of royal women of Commagene, ringed by columns, one topped by an eagle.', 'Karakuş Tümülüsü', 20, 30, b='no', n=FREE),
      ],
      hubs=hubs(["['Adıyaman (ADF)', '아드야만 공항 (ADF)']", "['Malatya (MLX)', '말라티아 공항 (MLX)']"], "['Kâhta Otogarı', '카흐타 버스터미널', '아드야만·샨르우르파행|to Adıyaman, Şanlıurfa']"),
      itinerary={'days': [['', 4, 3, 2, 1]]},
      season='정상 길은 보통 5~10월에 열고, 겨울엔 눈으로 막힙니다.|The summit road usually opens May–October and is snowbound in winter.',
      stay=[('카흐타', 'Kâhta', 'Kâhta', FIRST, '투어가 출발하는 마을로, 숙소와 식당이 있습니다.|The town tours leave from, with hotels and restaurants.'),
            ('카라도우트 산마을', 'Karadut', 'Karadut', '일출을 볼 때|For sunrise', '정상 가까운 마을의 펜션으로, 새벽 출발이 편합니다.|Guesthouses near the summit, easier for a pre-dawn start.')],
      routes=[R('sanliurfa', 'nemrut', 'bus', 150, "n: '카흐타 기준|to Kâhta'"), R('istanbul', 'nemrut', 'flight', 120, "n: '아드야만 공항 도착|into Adıyaman airport'")],
      transit=dict(modes=['taxi', 'bus'], ko='대중교통으로 정상까지 갈 수 없어, 카흐타·카라도우트의 투어나 차를 이용합니다.', en='No public transport reaches the summit; take a tour from Kâhta or Karadut, or drive.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
