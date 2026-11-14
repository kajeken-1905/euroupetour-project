#!/usr/bin/env python3
"""Finland review step 2 (2026-11-14, user approved all ten): Naantali, Rauma, Mariehamn (Åland), Jyväskylä, Kuopio,
Savonlinna, Oulu, Kemi, Levi and Inari as new cities. Reuses the batch-3 writer (add_daytrip_places3.main); the Finland
city groups are rewritten afterwards, and the old Finland transit texts (Turku has no trams, Porvoo has no passenger
railway, garbled Helsinki line) are corrected. Times are rounded typical values. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
TOUR = ('투어로 다녀오기', 'On a tour')
VR = "      ta('vr'),\n      ta('matkahuolto', { ko: '장거리 버스', en: 'Coaches' }),\n"
BUS = "      ta('matkahuolto', { ko: '장거리 버스', en: 'Coaches' }),\n"
COMMON = dict(hubs_file='hubs-central.ts', hubs_before='\n  // —— no ——\n', itin_file='itinerary-north.ts', itin_before='  stockholm: {',
              visit_file='visit-nordic.ts', visit_after=r"^  'porvoo-h\d+': v\(.*\),\n", stay_before='  uppsala: [', apps=VR,
              transit_before='  // —— is ——\n', places=None, daytrips=[], routes=[])
LAST = r"^  r\('turku', 'tampere', 'train', 105\),\n"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'fi'
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
    return [('routes-central.ts', LAST, ''.join(lines))]


CITIES = [
    C(id='naantali', after='turku', ko='난탈리', en='Naantali', native='Naantali', lat=60.4677, lng=22.0244,
      blurb=['투르쿠 서쪽 약 15km 바닷가의 작은 휴양 도시. 목조 집이 늘어선 구시가와 15세기 수녀원 교회가 있고, 다리 건너 섬엔 무민월드가 있습니다.',
             'A small seaside resort about 15 km west of Turku, with an old town of wooden houses and a 15th-century convent church; Moominworld sits on an island across a footbridge.'],
      highlights=[
          H('무민월드', 'Moominworld', '다리 건너 카일로섬에 무민 골짜기를 꾸민 테마파크로, 무민 가족의 집에 들어가 보고 캐릭터들을 만납니다.', 'A theme park recreating Moominvalley on Kailo island across a footbridge; step inside the Moomin house and meet the characters.', 'Moominworld Naantali', 240, 360,
            n='주로 6월~8월 여름에 열고, 겨울엔 짧은 기간만 엽니다.|Open mainly June to August, with a short winter season.'),
          H('난탈리 구시가', 'Naantali Old Town', '18~19세기 목조 집이 자갈길을 따라 늘어선 구시가로, 항구 산책로의 카페와 이어집니다.', 'Cobbled lanes of 18th- and 19th-century wooden houses running down to the cafés of the harbour promenade.', 'Naantali Old Town', 60, 90),
          H('난탈리 수녀원 교회', 'Naantali Convent Church', '15세기 브리지타 수녀원의 교회로, 구시가 위 언덕에서 바다를 내려다봅니다.', 'The church of a 15th-century Bridgettine convent, looking out to sea from the hill above the old town.', 'Naantali Church', 20, 30),
          H('쿨타란타', 'Kultaranta', '핀란드 대통령의 여름 별장으로, 장미 정원이 유명한 넓은 정원을 여름 가이드 투어로 봅니다.', 'The Finnish President’s summer residence, whose large gardens, famous for roses, are seen on guided tours in summer.', 'Kultaranta', 60, 90,
            n='여름에만 가이드 투어로 들어갈 수 있습니다.|Visits are by guided tour in summer only.'),
      ],
      hubs="    air: [['Turku (TKU)', '투르쿠 공항 (TKU)']],\n",
      itinerary={'days': [['', 2, 3, 4]], 'trips': [['무민월드|Moominworld', 1]]},
      season='6~8월 여름에 무민월드와 바닷가가 가장 활기차고, 겨울엔 조용합니다.|June to August is liveliest, with Moominworld and the seafront open; winter is quiet.',
      stay=[('투르쿠에서 다녀오기', 'Base in Turku', 'Turku city centre', '당일치기|Day trip', '시내버스로 약 30분이라 투르쿠에 묵고 다녀오기 쉽습니다.|About 30 minutes by city bus, so easy to visit from Turku.'),
            ('구시가와 항구', 'Old town & harbour', 'Naantali harbour', '바닷가 하룻밤|A night by the sea', '무민월드까지 걸어갈 수 있고 저녁 항구가 조용합니다.|Within walking distance of Moominworld, with a quiet harbour in the evening.')],
      routes=R("  r('turku', 'naantali', 'bus', 30),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='작은 도시라 걸어서 다닙니다. 투르쿠와는 푈리 시내버스로 오갑니다.', en='A small town best on foot; Föli city buses link it with Turku.'),
      apps="      ta('foli', { ko: '표 구매', en: 'Tickets' }),\n"),
    C(id='rauma', after='naantali', ko='라우마', en='Rauma', native='Rauma', lat=61.1283, lng=21.5113,
      blurb=['보스니아만의 항구 도시. 목조 건물 약 600채가 남은 구시가 ‘오래된 라우마’가 세계유산이고, 손으로 짜는 보빈 레이스의 고장입니다.',
             'A port on the Gulf of Bothnia whose old town, Old Rauma, keeps some 600 wooden buildings and is a World Heritage Site; it is also the home of hand-made bobbin lace.'],
      highlights=[
          H('오래된 라우마', 'Old Rauma', '목조 건물 약 600채가 중세 거리 그대로 늘어선 북유럽 최대급 목조 구시가로 세계유산입니다.', 'One of the largest wooden old towns in the Nordic countries, some 600 buildings along medieval streets, a World Heritage Site.', 'Old Rauma', 90, 120),
          H('성 십자가 교회', 'Church of the Holy Cross', '15세기 프란치스코회 수도원 교회로, 천장과 벽에 중세 그림이 남아 있습니다.', 'The 15th-century church of a Franciscan friary, with medieval paintings on its vaults and walls.', 'Pyhän Ristin kirkko Rauma', 20, 30),
          H('옛 시청과 마렐라', 'Old Town Hall & Marela', '라우마 박물관이 운영하는 1776년 옛 시청과 선주의 저택 마렐라로, 레이스와 항해의 역사를 봅니다.', 'The 1776 Old Town Hall and the shipowner’s house Marela, run by the Rauma Museum, telling the story of lace and seafaring.', 'Rauman museo', 60, 90),
          H('삼말라흐덴메키 청동기 무덤', 'Sammallahdenmäki', '바위 언덕에 돌을 쌓아 만든 청동기 시대 무덤 30여 기가 모인 세계유산 유적입니다.', 'A World Heritage site of more than 30 Bronze Age burial cairns of piled stones on a granite ridge.', 'Sammallahdenmäki', 60, 90,
            n='라우마에서 약 20km로 차로 가는 것이 편합니다.|About 20 km from Rauma; easiest by car.', group=DAY),
      ],
      hubs="    bus: [['Rauman linja-autoasema', '라우마 버스터미널', '여객 철도 없음|no passenger railway']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['삼말라흐덴메키|Sammallahdenmäki', 4]]},
      season='7월 말 레이스 주간에 거리 축제가 열리고, 여름에 구시가가 가장 활기찹니다.|Lace Week in late July fills the streets; summer is liveliest in the old town.',
      stay=[('오래된 라우마 주변', 'Around Old Rauma', 'Vanha Rauma', '걸어서 다 보기|Everything on foot', '구시가와 버스터미널, 식당이 모두 가깝습니다.|The old town, bus station and restaurants are all close.')],
      routes=R("  r('turku', 'rauma', 'bus', 90),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='구시가는 걸어서 다닙니다. 기차가 없어 투르쿠·포리와는 버스로 오갑니다.', en='Walk the old town; with no railway, take coaches to Turku and Pori.'),
      apps=BUS),
    C(id='mariehamn', after='rauma', ko='마리에함', en='Mariehamn', native='Maarianhamina / Mariehamn', lat=60.0973, lng=19.9348,
      blurb=['스웨덴어를 쓰는 자치 지역 올란드 제도의 중심 도시. 범선 포메른호와 해양 박물관이 있고, 섬 사이를 자전거와 배로 다니며 중세 성과 요새 유적을 봅니다.',
             'The main town of the Swedish-speaking autonomous Åland Islands, with the sailing ship Pommern and a maritime museum; cycle and ferry between the islands to a medieval castle and fortress ruins.'],
      highlights=[
          H('포메른호와 올란드 해양 박물관', 'Pommern & Åland Maritime Museum', '1903년 건조한 4개 돛대 범선 포메른호가 항구에 떠 있고, 옆 해양 박물관에서 올란드 범선 시대를 봅니다.', 'The four-masted barque Pommern, built in 1903, moored in the harbour beside the maritime museum on Åland’s age of sail.', 'Ålands sjöfartsmuseum', 90, 120,
            n='포메른호는 대체로 여름에만 배 안을 공개합니다.|The Pommern is usually open on board in summer only.'),
          H('올란드 박물관', 'Åland Museum', '올란드의 역사와 미술을 함께 보여 주는 박물관으로, 시내 중심에 있습니다.', 'The museum of Åland’s history and art in the town centre.', 'Ålands museum', 60, 90),
          H('카스텔홀름 성', 'Kastelholm Castle', '14세기에 세운 올란드 유일의 중세 성으로, 옆 야외 박물관 얀 칼스고르덴에 옛 농가가 있습니다.', 'Åland’s only medieval castle, begun in the 14th century, beside the Jan Karlsgården open-air museum of old farmhouses.', 'Kastelholms slott', 90, 150,
            n='시내에서 약 25km이며 성은 대체로 여름에만 엽니다.|About 25 km from town; the castle is usually open in summer only.', group=DAY),
          H('보마르순드 요새 유적', 'Bomarsund Fortress', '19세기 러시아가 쌓다가 1854년 크림 전쟁 때 영국·프랑스 함대에 무너진 요새의 폐허입니다.', 'The ruins of a 19th-century Russian fortress destroyed by British and French ships in 1854 during the Crimean War.', 'Bomarsund', 60, 90, group=DAY),
      ],
      hubs="    air: [['Mariehamn (MHQ)', '마리에함 공항 (MHQ)']],\n    port: [['Mariehamns hamn', '마리에함 항구', '투르쿠·헬싱키·스톡홀름행 페리|ferries to Turku, Helsinki and Stockholm']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['카스텔홀름 성|Kastelholm Castle', 3], ['보마르순드 요새|Bomarsund Fortress', 4]]},
      season='5~9월에 자전거와 배로 섬을 다니기 좋고, 성과 범선도 여름에 엽니다.|May to September is best for cycling and island ferries, and the castle and ship open in summer.',
      stay=[('시내 중심', 'Town centre', 'Mariehamn centrum', '교통이 편한 곳|Convenient', '항구와 박물관, 식당이 걸어서 가깝습니다.|The harbour, museums and restaurants are within walking distance.')],
      routes=R("  r('turku', 'mariehamn', 'ferry', 330),\n  r('helsinki', 'mariehamn', 'flight', 45),\n  r('stockholm', 'mariehamn', 'ferry', 330),\n"),
      transit=dict(modes=['walk', 'bike', 'bus', 'ferry', 'taxi'], ko='시내는 걸어서 다니고, 섬 곳곳은 자전거나 버스, 섬 사이 배로 갑니다.', en='Walk the town; reach the rest of the islands by bike, bus or inter-island ferry.'),
      apps=''),
    C(id='jyvaskyla', after='tampere', ko='위배스퀼래', en='Jyväskylä', native='Jyväskylä', lat=62.2426, lng=25.7473,
      blurb=['호수 지방 한가운데의 대학 도시. 건축가 알바르 알토가 자란 곳이라 그의 박물관과 시청, 교회 등 알토 건축을 가장 많이 볼 수 있습니다.',
             'A university city in the heart of the Lakeland where the architect Alvar Aalto grew up, with more of his buildings than anywhere else, from his museum to a town hall and churches.'],
      highlights=[
          H('알바르 알토 박물관', 'Alvar Aalto Museum', '알토가 직접 설계한 1973년 박물관으로, 2023년 옆 중부 핀란드 박물관과 잇는 ‘알토2’ 센터로 다시 열었습니다.', 'The museum Aalto designed himself in 1973, reopened in 2023 as part of the Aalto2 centre linking it with the Museum of Central Finland.', 'Alvar Aalto Museum', 60, 90),
          H('세위낫살로 시청', 'Säynätsalo Town Hall', '알토가 1952년 붉은 벽돌로 지은 작은 시청으로, 잔디 안뜰을 둘러싼 그의 대표작입니다.', 'The small red-brick town hall Aalto completed in 1952 around a raised grass courtyard, one of his masterpieces.', 'Säynätsalo Town Hall', 45, 60,
            n='시내에서 남쪽으로 약 15km이며 안은 가이드 투어로 봅니다.|About 15 km south of the centre; the interior is seen on guided tours.', group=DAY),
          H('페테예베시 옛 교회', 'Petäjävesi Old Church', '1760년대 통나무로 지은 시골 교회로 세계유산입니다.', 'A country church built of logs in the 1760s, a World Heritage Site.', 'Petäjäveden vanha kirkko', 45, 60,
            n='시내에서 서쪽으로 약 35km이며 주로 여름에 엽니다.|About 35 km west of town, mainly open in summer.', group=DAY),
          H('하리우 언덕과 베실린나 전망탑', 'Harju ridge & Vesilinna', '시내 뒤 빙하 언덕의 숲길과 계단을 올라 옛 급수탑 베실린나 위에서 호수와 시내를 봅니다.', 'Climb the forest paths and steps of the glacial ridge behind the centre to the old water tower, Vesilinna, for views over lake and town.', 'Vesilinna Jyväskylä', 45, 60),
      ],
      hubs="    air: [['Jyväskylä (JYV)', '위배스퀼래 공항 (JYV)']],\n    rail: [['Jyväskylä', '위배스퀼래역']],\n    bus: [['Jyväskylän matkakeskus', '위배스퀼래 교통센터']],\n",
      itinerary={'days': [['', 1, 4]], 'trips': [['세위낫살로 시청|Säynätsalo Town Hall', 2], ['페테예베시 옛 교회|Petäjävesi Old Church', 3]]},
      season='여름엔 호수와 알토 건축 투어, 겨울엔 눈 덮인 하리우 언덕이 좋습니다.|Summer for the lakes and Aalto tours; winter for the snowy Harju ridge.',
      stay=[('역·시내 중심', 'Station & centre', 'Jyväskylä city centre', '교통이 편한 곳|Convenient', '교통센터와 보행자 거리, 하리우 언덕이 가깝습니다.|Close to the travel centre, the pedestrian streets and the Harju ridge.')],
      routes=R("  r('helsinki', 'jyvaskyla', 'train', 200),\n  r('tampere', 'jyvaskyla', 'train', 90),\n"),
      transit=dict(modes=['walk', 'bus', 'train', 'taxi'], ko='시내는 걸어서 다니고, 세위낫살로 등 알토 건축은 시내버스나 차로 갑니다.', en='Walk the centre; reach Säynätsalo and other Aalto sites by local bus or car.')),
    C(id='kuopio', after='jyvaskyla', ko='쿠오피오', en='Kuopio', native='Kuopio', lat=62.8924, lng=27.6770,
      blurb=['칼라베시 호수에 둘러싸인 호수 지방의 도시. 푸이요 언덕의 전망탑과 장작 연기로 데우는 전통 스모크 사우나, 생선을 빵에 구운 칼라쿠코가 유명합니다.',
             'A Lakeland city ringed by Lake Kallavesi, known for the tower on Puijo hill, its wood-smoked traditional sauna and kalakukko, fish baked inside rye bread.'],
      highlights=[
          H('푸이요 전망탑', 'Puijo Tower', '푸이요 언덕 위 75m 탑으로, 전망대와 회전 식당에서 호수와 숲이 끝없이 이어지는 풍경을 봅니다.', 'A 75 m tower on Puijo hill whose viewing decks and revolving restaurant look over endless lakes and forest.', 'Puijo Tower', 45, 90),
          H('예트캔캠파 스모크 사우나', 'Jätkänkämppä smoke sauna', '호숫가의 대형 전통 스모크 사우나로, 사우나 뒤 호수에 들어가고 벌목꾼 오두막에서 핀란드 저녁을 먹습니다.', 'A large traditional smoke sauna on the lakeshore; dip in the lake afterwards and eat a Finnish supper in the loggers’ cabin.', 'Jätkänkämppä', 180, 240,
            n='일반 손님용 저녁은 대개 화요일(여름엔 목요일도)에만 엽니다. 날짜를 확인하세요.|Public evenings are usually on Tuesdays (also Thursdays in summer); check the dates.'),
          H('마켓 광장과 시장 홀', 'Market Square & Market Hall', '시내 중심 광장과 1902년 시장 홀로, 쿠오피오 명물 칼라쿠코와 베리 파이를 맛봅니다.', 'The central square and its 1902 market hall, where you can try kalakukko and berry pies.', 'Kuopion kauppahalli', 30, 60),
          H('정교회 박물관 리이사', 'Orthodox Church Museum RIISA', '카렐리아 수도원에서 옮겨 온 성화와 보물을 모은 핀란드 정교회 박물관입니다.', 'The Finnish Orthodox Church museum, with icons and treasures brought from Karelian monasteries.', 'RIISA Orthodox Church Museum', 45, 60),
      ],
      hubs="    air: [['Kuopio (KUO)', '쿠오피오 공항 (KUO)']],\n    rail: [['Kuopio', '쿠오피오역']],\n    bus: [['Kuopion matkakeskus', '쿠오피오 교통센터']],\n",
      itinerary={'days': [['', 3, 4, 1], ['', 2]]},
      season='6~8월엔 호수 유람선, 겨울엔 얼음 위 스케이트 길과 스모크 사우나가 좋습니다.|June to August for lake cruises; winter for ice-skating tracks and the smoke sauna.',
      stay=[('마켓 광장 주변', 'Around Market Square', 'Kuopio Market Square', '교통이 편한 곳|Convenient', '역과 항구, 식당이 걸어서 가깝습니다.|Within walking distance of the station, harbour and restaurants.')],
      routes=R("  r('helsinki', 'kuopio', 'train', 260),\n  r('helsinki', 'kuopio', 'flight', 55),\n  r('jyvaskyla', 'kuopio', 'bus', 135),\n"),
      transit=dict(modes=['walk', 'bus', 'train', 'taxi'], ko='시내는 걸어서 다니고, 푸이요 언덕과 스모크 사우나는 시내버스나 택시로 갑니다.', en='Walk the centre; take a local bus or taxi to Puijo and the smoke sauna.')),
    C(id='savonlinna', after='kuopio', ko='사본린나', en='Savonlinna', native='Savonlinna', lat=61.8687, lng=28.8869,
      blurb=['사이마 호수의 섬들 위에 세운 도시. 1475년 세운 호수 위 성 올라빈린나에서 7월마다 오페라 축제가 열리고, 증기선과 사이마 고리무늬물범의 고장입니다.',
             'A town built across islands in Lake Saimaa, where the lake castle of Olavinlinna, founded in 1475, hosts an opera festival every July; home to old steamboats and the Saimaa ringed seal.'],
      highlights=[
          H('올라빈린나 성', 'Olavinlinna Castle', '1475년 호수 속 바위섬에 세운 중세 성으로, 7월 오페라 축제 때 안뜰이 공연장이 됩니다.', 'The medieval castle founded in 1475 on a rocky islet in the lake, whose courtyard becomes the stage for the opera festival in July.', 'Olavinlinna', 60, 90),
          H('리이히사리 사이마 박물관', 'Riihisaari Lake Saimaa museum', '성 옆 섬의 옛 곡물 창고에 사이마 호수의 자연과 물범, 호수 위 생활사를 전시합니다.', 'An old granary on the island next to the castle, showing Lake Saimaa’s nature, its seals and life on the lake.', 'Riihisaari', 45, 60),
          H('케리매키 교회', 'Kerimäki Church', '1847년 지은 세계 최대 목조 교회로, 3,000명 넘게 앉을 수 있습니다.', 'The world’s largest wooden church, built in 1847, seating more than 3,000 people.', 'Kerimäen kirkko', 30, 45,
            n='시내에서 약 25km이며 주로 여름에 엽니다.|About 25 km from town, mainly open in summer.', group=DAY),
          H('린난사리 국립공원', 'Linnansaari National Park', '사이마 호수의 섬 국립공원으로, 여름 보트 투어로 멸종 위기종 사이마 고리무늬물범을 찾아봅니다.', 'An island national park in Lake Saimaa, where summer boat tours look for the endangered Saimaa ringed seal.', 'Linnansaari National Park', 240, 360,
            n='보트 투어는 주로 여름에 출발하며 미리 예약하세요.|Boat tours run mainly in summer; book ahead.', group=TOUR),
      ],
      hubs="    air: [['Savonlinna (SVL)', '사본린나 공항 (SVL)']],\n    rail: [['Savonlinna', '사본린나역']],\n    bus: [['Savonlinnan matkakeskus', '사본린나 교통센터']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['케리매키 교회|Kerimäki Church', 3], ['린난사리 국립공원|Linnansaari National Park', 4]]},
      season='7월 오페라 축제와 여름 호수 유람이 가장 좋습니다. 축제 기간엔 숙소를 일찍 잡으세요.|July’s opera festival and summer lake cruises are the highlights; book rooms early for the festival.',
      stay=[('시내와 항구', 'Centre & harbour', 'Savonlinna Market Square', '걸어서 성까지|Walk to the castle', '마켓 광장과 항구에서 성까지 걸어서 15분 안팎입니다.|About 15 minutes’ walk from the market square and harbour to the castle.')],
      routes=R("  r('helsinki', 'savonlinna', 'train', 250, { n: '파리칼라 환승|change at Parikkala' }),\n  r('kuopio', 'savonlinna', 'bus', 150),\n"),
      transit=dict(modes=['walk', 'bus', 'train', 'ferry', 'taxi'], ko='시내와 성은 걸어서 다닙니다. 여름엔 호수 유람선이 항구에서 떠납니다.', en='Walk between the centre and the castle; summer lake cruises leave from the harbour.')),
    C(id='oulu', after='savonlinna', ko='오울루', en='Oulu', native='Oulu', lat=65.0121, lng=25.4651,
      blurb=['보스니아만 북쪽 끝의 북부 최대 도시이자 2026년 유럽 문화 수도. 자전거 도로가 잘 갖춰져 겨울에도 자전거를 타고, 바다 건너 하일루오토섬에 다녀옵니다.',
             'The largest city in northern Finland, at the top of the Gulf of Bothnia and European Capital of Culture for 2026; its cycle paths are used even in winter, and a ferry crosses to Hailuoto island.'],
      highlights=[
          H('마켓 광장과 토리폴리스', 'Market Square & Toripolliisi', '바닷가 마켓 광장으로, 붉은 옛 창고와 시장 홀, 오울루의 마스코트인 경찰관 동상 ‘토리폴리스’가 있습니다.', 'The waterfront market square with red old storehouses, a market hall and Toripolliisi, the statue of a policeman that is Oulu’s mascot.', 'Oulu Market Square', 30, 60),
          H('오울루 대성당', 'Oulu Cathedral', '1777년 지어 1822년 화재 뒤 건축가 엥겔이 다시 지은 노란 성당입니다.', 'The yellow cathedral of 1777, rebuilt after an 1822 fire by the architect Carl Ludvig Engel.', 'Oulu Cathedral', 20, 30),
          H('티에토마 과학관', 'Tietomaa', '옛 가죽 공장 건물에 든 체험형 과학관으로, 전망탑과 북극 과학 전시가 있습니다.', 'A hands-on science centre in an old tannery building, with an observation tower and Arctic science exhibits.', 'Tietomaa', 120, 180),
          H('하일루오토섬', 'Hailuoto', '무료 차량 페리로 약 30분 건너는 섬으로, 모래 언덕과 등대, 조용한 어촌 마을이 있습니다.', 'An island reached by a free car ferry in about 30 minutes, with sand dunes, a lighthouse and quiet fishing villages.', 'Hailuoto', 240, 360,
            n='페리 선착장까지 시내에서 차로 약 30분이며, 버스는 드뭅니다.|The ferry pier is about 30 min from the city by car; buses are infrequent.', group=DAY),
      ],
      hubs="    air: [['Oulu (OUL)', '오울루 공항 (OUL)']],\n    rail: [['Oulu', '오울루역']],\n    bus: [['Oulun linja-autoasema', '오울루 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['하일루오토섬|Hailuoto', 4]]},
      season='6~7월엔 해가 거의 지지 않고, 2026년엔 유럽 문화 수도 행사가 1년 내내 열립니다.|In June and July the sun barely sets, and in 2026 Capital of Culture events run all year.',
      stay=[('마켓 광장·시내 중심', 'Market Square & centre', 'Oulu city centre', '교통이 편한 곳|Convenient', '역과 광장, 식당이 걸어서 가깝습니다.|The station, square and restaurants are within walking distance.')],
      routes=R("  r('helsinki', 'oulu', 'flight', 60),\n  r('helsinki', 'oulu', 'train', 330),\n  r('oulu', 'rovaniemi', 'train', 140),\n"),
      transit=dict(modes=['walk', 'bike', 'bus', 'train', 'taxi'], ko='시내는 걸어서 다니거나 자전거를 빌립니다. 자전거 도로가 아주 잘 되어 있습니다.', en='Walk or hire a bike; the cycle-path network is excellent.')),
    C(id='kemi', after='oulu', ko='케미', en='Kemi', native='Kemi', lat=65.7364, lng=24.5637,
      blurb=['보스니아만 가장 북쪽의 항구 도시. 겨울엔 얼어붙은 바다를 깨며 나아가는 쇄빙선 삼포호 투어와 해마다 새로 짓는 눈 성이 열립니다.',
             'A port at the very top of the Gulf of Bothnia; in winter, the icebreaker Sampo cruises through the frozen sea and a snow castle is built anew each year.'],
      highlights=[
          H('쇄빙선 삼포호 투어', 'Icebreaker Sampo cruise', '퇴역 쇄빙선을 타고 얼어붙은 바다를 깨며 나아간 뒤, 방수복을 입고 얼음 사이 바다에 떠 봅니다.', 'Ride a retired icebreaker as it smashes through the frozen sea, then float among the ice floes in a survival suit.', 'Icebreaker Sampo', 240, 300,
            n='12월 말~4월 초 겨울에만 운항하며 미리 예약해야 합니다.|Runs only in winter, from late December to early April; booking required.', group=TOUR),
          H('눈 성', 'SnowCastle', '해마다 겨울 바닷가에 눈과 얼음으로 새로 짓는 성으로, 얼음 식당과 예배당, 객실이 있습니다.', 'The castle built anew of snow and ice on the shore each winter, with an ice restaurant, chapel and rooms.', 'SnowCastle of Kemi', 45, 90,
            n='대체로 1월~4월에만 엽니다.|Usually open January to April only.'),
          H('토르니오–하파란다', 'Tornio–Haparanda', '국경을 사이에 둔 핀란드·스웨덴 쌍둥이 도시로, 걸어서 국경을 넘고 두 나라에 걸친 골프장도 있습니다.', 'Twin Finnish and Swedish towns on either side of the border, which you can cross on foot; even the golf course spans both countries.', 'Tornio', 180, 240,
            n='케미에서 약 25km이며 두 나라 시간대가 1시간 다릅니다.|About 25 km from Kemi; the two countries are an hour apart in time.', group=DAY),
      ],
      hubs="    air: [['Kemi-Tornio (KEM)', '케미 토르니오 공항 (KEM)']],\n    rail: [['Kemi', '케미역']],\n    bus: [['Kemin linja-autoasema', '케미 버스터미널']],\n",
      itinerary={'days': [['', 2]], 'trips': [['쇄빙선 삼포호|Icebreaker Sampo', 1], ['토르니오–하파란다|Tornio–Haparanda', 3]]},
      season='1~3월엔 쇄빙선과 눈 성이 모두 열려 가장 좋습니다. 여름엔 볼거리가 적습니다.|January to March, when both the icebreaker and the snow castle operate, is best; summer has little on.',
      stay=[('시내 중심', 'Town centre', 'Kemi city centre', '교통이 편한 곳|Convenient', '역과 바닷가 눈 성이 가깝습니다.|Close to the station and the seafront snow castle.'),
            ('로바니에미에서 다녀오기', 'Base in Rovaniemi', 'Rovaniemi city centre', '당일치기|Day trip', '쇄빙선 투어는 로바니에미 픽업 상품도 있습니다.|Icebreaker tours also offer pick-ups from Rovaniemi.')],
      routes=R("  r('oulu', 'kemi', 'train', 65),\n  r('kemi', 'rovaniemi', 'train', 85),\n  r('helsinki', 'kemi', 'flight', 75),\n"),
      transit=dict(modes=['walk', 'bus', 'train', 'taxi'], ko='시내는 걸어서 다니고, 쇄빙선 투어는 출발지까지 투어 버스로 갑니다.', en='Walk the centre; icebreaker tours include transfers to the departure point.')),
    C(id='levi', after='rovaniemi', ko='레비', en='Levi', native='Levi', lat=67.8040, lng=24.8090,
      blurb=['핀란드 라플란드 최대의 스키 리조트 마을. 레비 펠(언덕)의 곤돌라와 슬로프, 오로라와 허스키 썰매가 있고, 여름엔 국립공원 산행 거점입니다.',
             'Finnish Lapland’s biggest ski resort village, with gondolas and slopes on Levi fell, the aurora and husky sledding, and in summer a base for national-park hiking.'],
      highlights=[
          H('레비 펠과 스키장', 'Levi fell & ski resort', '마을 바로 위 펠(둥근 산)의 스키장으로, 곤돌라로 정상에 올라 라플란드 숲과 펠이 이어지는 풍경을 봅니다.', 'The ski area on the fell right above the village; take the gondola to the top for views over Lapland’s forests and fells.', 'Levi ski resort', 120, 360,
            n='스키 시즌은 대체로 10월 말~5월 초입니다.|The ski season usually runs from late October to early May.'),
          H('팔라스–윌래스툰투리 국립공원', 'Pallas-Yllästunturi National Park', '핀란드에서 손꼽히게 큰 국립공원으로, 나무가 자라지 않는 둥근 펠 능선을 따라 산길이 이어집니다.', 'One of Finland’s largest national parks, with trails along bare, rounded fell ridges above the tree line.', 'Pallas-Yllästunturi National Park', 300, 480,
            n='레비에서 차로 약 1시간입니다.|About an hour from Levi by car.', group=DAY),
          H('허스키·순록 썰매', 'Husky & reindeer safari', '허스키나 순록이 끄는 썰매를 타고 눈 덮인 숲을 달립니다.', 'Glide through snowy forest on a sled pulled by huskies or reindeer.', 'Levi husky safari', 120, 240,
            n='대체로 11월~4월에 운영하며 숙소에서 픽업해 줍니다. 미리 예약하세요.|Mostly November to April, with hotel pick-ups; book ahead.', group=TOUR),
          H('오로라 투어', 'Northern lights tour', '9월~3월 맑은 밤, 마을 불빛을 벗어나 오로라를 찾아가는 투어가 매일 밤 출발합니다.', 'On clear nights from September to March, tours leave nightly to look for the aurora away from the village lights.', 'Levi northern lights tour', 180, 240,
            n='날씨에 따라 못 볼 수도 있습니다. 미리 예약하세요.|Sightings depend on the weather; book ahead.', group=TOUR),
      ],
      hubs="    air: [['Kittilä (KTT)', '키틸래 공항 (KTT)']],\n    bus: [['Levi', '레비 버스 정류장']],\n",
      itinerary={'days': [['', 1]], 'trips': [['팔라스–윌래스툰투리 국립공원|Pallas-Yllästunturi National Park', 2], ['허스키·순록 썰매|Husky & reindeer safari', 3], ['오로라 투어|Northern lights tour', 4]]},
      season='12~4월엔 스키와 오로라, 9월엔 단풍(루스카)과 오로라, 6~7월엔 백야 산행이 좋습니다.|December to April for skiing and the aurora; September for autumn colours (ruska) and the aurora; June and July for midnight-sun hiking.',
      stay=[('레비 마을 중심', 'Levi village centre', 'Levi centre', '스키·식당|Skiing & restaurants', '곤돌라와 상점, 식당이 모두 걸어서 가깝습니다.|The gondolas, shops and restaurants are all within walking distance.')],
      routes=R("  r('helsinki', 'levi', 'flight', 90, { fa: '키틸래 공항|Kittilä Airport' }),\n  r('rovaniemi', 'levi', 'bus', 165),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을 안은 걸어서 다닙니다. 공항과 국립공원은 버스나 택시, 투어로 갑니다.', en='Walk around the village; reach the airport and national park by bus, taxi or tour.'),
      apps=BUS),
    C(id='inari', after='levi', ko='이나리', en='Inari', native='Inari / Anár', lat=68.9065, lng=27.0280,
      blurb=['핀란드 사미족 문화의 중심 마을. 사미 박물관 시이다와 사미 의회 건물 사요스가 있고, 커다란 이나리 호수와 황야의 교회를 찾아갑니다.',
             'The centre of Sámi culture in Finland, with the Sámi museum Siida and the Sámi Parliament building Sajos, on the shores of vast Lake Inari with a wilderness church to hike to.'],
      highlights=[
          H('시이다 사미 박물관', 'Siida', '사미족의 역사와 문화, 북극 자연을 함께 보여 주는 박물관으로, 야외에 옛 사미 거처가 있습니다.', 'The museum of Sámi history and culture and of Arctic nature, with old Sámi dwellings in its open-air section.', 'Siida Inari', 90, 120),
          H('사요스 사미 문화 센터', 'Sajos', '사미 의회가 쓰는 목조 건물로, 사미 수공예품 가게와 전시가 있습니다.', 'The wooden building of the Sámi Parliament, with a Sámi handicraft shop and exhibitions.', 'Sajos Inari', 30, 45),
          H('이나리 호수와 우코섬', 'Lake Inari & Ukonsaari', '섬이 3,000개 넘는 큰 호수로, 여름 유람선을 타고 사미족의 옛 제사터 우코섬에 갑니다.', 'A vast lake with more than 3,000 islands; summer cruises visit Ukonsaari, an old Sámi sacred island.', 'Ukonsaari', 120, 150,
            n='유람선은 주로 6월~9월에만 다닙니다.|Cruises run mainly June to September.'),
          H('피엘파야르비 황야 교회', 'Pielpajärvi Wilderness Church', '1760년 숲속에 지은 목조 교회로, 약 4.5km 숲길을 걸어서 찾아갑니다.', 'A wooden church built in the forest in 1760, reached on a forest trail of about 4.5 km.', 'Pielpajärven erämaakirkko', 180, 240,
            n='왕복 약 9km를 걸으니 신발을 단단히 신으세요. 겨울엔 눈신이 필요할 수 있습니다.|About 9 km round trip on foot, so wear sturdy shoes; snowshoes may be needed in winter.', group=DAY),
      ],
      hubs="    air: [['Ivalo (IVL)', '이발로 공항 (IVL)']],\n    bus: [['Inari', '이나리 버스 정류장']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['피엘파야르비 황야 교회|Pielpajärvi Wilderness Church', 4]]},
      season='9월~3월엔 오로라, 6~8월엔 호수 유람선과 백야가 좋습니다. 1월 말엔 사미 영화제가 열립니다.|September to March for the aurora; June to August for lake cruises and the midnight sun; a Sámi film festival takes place in late January.',
      stay=[('이나리 마을', 'Inari village', 'Inari', '박물관 옆|By the museum', '시이다와 사요스, 호숫가가 모두 걸어서 가깝습니다. 숙소가 적어 일찍 예약하세요.|Siida, Sajos and the lakeshore are all within walking distance; rooms are few, so book early.')],
      routes=R("  r('rovaniemi', 'inari', 'bus', 300),\n  r('helsinki', 'inari', 'flight', 105, { fa: '이발로 공항|Ivalo Airport' }),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을 안은 걸어서 다닙니다. 이발로 공항과 로바니에미는 장거리 버스로 오갑니다.', en='Walk around the village; long-distance buses link it with Ivalo Airport and Rovaniemi.'),
      apps=BUS),
]

FI_NEW = """    cityIds: ['helsinki', 'porvoo', 'turku', 'naantali', 'rauma', 'mariehamn', 'tampere', 'jyvaskyla', 'kuopio', 'savonlinna', 'oulu', 'kemi', 'rovaniemi', 'levi', 'inari'],
    cityGroups: [
      { title: { ko: '남부', en: 'Southern Finland' }, cityIds: ['helsinki', 'porvoo'] },
      { title: { ko: '서해안·올란드', en: 'West coast & Åland' }, cityIds: ['turku', 'naantali', 'rauma', 'mariehamn'] },
      { title: { ko: '호수 지방', en: 'Lakeland' }, cityIds: ['tampere', 'jyvaskyla', 'kuopio', 'savonlinna'] },
      { title: { ko: '북부·라플란드', en: 'North & Lapland' }, cityIds: ['oulu', 'kemi', 'rovaniemi', 'levi', 'inari'] },
    ],
"""

TRANSIT_FIX = [
 ("      ko: 'HSL 티켓·앱. 트램·메트로·수완린나 페리어(수오멘린나) 연결.',\n      en: 'HSL tickets/app. Trams, metro, and ferry to Suomenlinna.',",
  "      ko: 'HSL 앱이나 역 자판기에서 표를 사서 트램·메트로·버스와 수오멘린나행 배를 같은 표로 탑니다.',\n      en: 'Buy HSL tickets in the app or at station machines; one ticket covers trams, metro, buses and the Suomenlinna ferry.',"),
 ("    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],\n    howTo: {\n      ko: 'Turku: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',\n      en: 'Turku centres on trams and buses; the old town is often best on foot.',",
  "    modes: ['bus', 'ferry', 'train', 'rideshare', 'taxi', 'walk'],\n    howTo: {\n      ko: '푈리 시내버스가 중심이고, 시내 강변은 걸어서 다닙니다. 아우라강은 무료 나룻배 푀리로 건넙니다.',\n      en: 'Föli city buses are the main transport and the riverside centre is walkable; cross the Aura on the free Föri ferry.',"),
 ("      ko: 'Tampere: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',\n      en: 'Tampere centres on trams and buses; the old town is often best on foot.',",
  "      ko: '2021년 개통한 트램과 시내버스(뉘세)가 중심이고, 시내 중심은 걸어서 다닙니다.',\n      en: 'The tram (opened 2021) and Nysse city buses are the backbone; the centre is walkable.',"),
 ("      ko: 'Rovaniemi: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',\n      en: 'Reach Rovaniemi by rail and local buses; walk or take short taxis for sights.',",
  "      ko: '시내는 걸어서 다니고, 산타클로스 마을과 공항은 시내버스 8번이나 택시로 갑니다.',\n      en: 'Walk the centre; take city bus 8 or a taxi to Santa Claus Village and the airport.',"),
 ("    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],\n    howTo: {\n      ko: 'Porvoo: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',\n      en: 'Reach Porvoo by rail and local buses; walk or take short taxis for sights.',",
  "    modes: ['bus', 'taxi', 'walk'],\n    howTo: {\n      ko: '여객 철도가 없어 헬싱키 캄피에서 버스로 약 1시간에 옵니다. 구시가는 걸어서 다닙니다.',\n      en: 'With no passenger railway, come by bus from Kamppi in Helsinki in about an hour; walk the old town.',"),
]


class J:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = J
    T.CITIES = CITIES
    T.main()
    k = rd('countries.ts')
    i = k.index("    id: 'fi',")
    j = k.index('    cityGroups: [', i)
    e = k.index('    ],\n', j) + len('    ],\n')
    s = k.index('    cityIds: [', i)
    assert s < j
    k = k[:s] + FI_NEW + k[e:]
    wr('countries.ts', k)
    t = rd('transit-city.ts')
    for a, b in TRANSIT_FIX:
        assert t.count(a) == 1, a[:60]
        t = t.replace(a, b)
    wr('transit-city.ts', t)
