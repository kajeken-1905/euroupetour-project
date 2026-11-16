#!/usr/bin/env python3
"""Albania review step 2 (2026-11-16, plan approved): Durrës, Krujë, Shkodër, Korçë, Vlorë and Himarë as new cities.
Reuses the batch-3 writer (add_daytrip_places3.main); the country city groups are rewritten afterwards. Times are
rounded typical values. Run once. Krujë h5 Sari Salltik was swapped afterwards for the Dollma Tekke (no free photo),
with the itinerary changed to a plain list."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='\n  // —— xk ——\n', itin_file='itinerary-south.ts',
              itin_before='  kyiv: [', visit_file='visit-balkan.ts', visit_after=r"^  'sarande-h\d+': v\(.*\),\n",
              stay_before='  mdina: [', apps='', transit_before='  // —— bg ——\n  sofia: {', places=None,
              daytrips=[], routes=[])
LAST = r"^  r\('gjirokaster', 'sarande', 'bus', 70\),\n"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'al'
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
    C(id='durres', after='tirana', ko='두러스', en='Durrës', native='Durrës', lat=41.3231, lng=19.4414,
      blurb=['티라나에서 가장 가까운 아드리아해 항구 도시. 발칸에서 가장 큰 로마 원형극장이 집들 사이에 묻혀 있고, 베네치아 탑과 성벽, 긴 모래 해변이 있으며 이탈리아행 페리가 떠납니다.',
             'The Adriatic port nearest Tirana, with the largest Roman amphitheatre in the Balkans half-buried among the houses, a Venetian tower and walls, a long sandy beach and ferries to Italy.'],
      highlights=[
          H('로마 원형극장', 'Durrës Amphitheatre', '2세기 초 지은 발칸 최대의 원형극장으로, 약 2만 명을 수용했고 통로 안에 모자이크로 꾸민 초기 기독교 예배당이 남아 있습니다.', 'The largest amphitheatre in the Balkans, built in the early 2nd century for about 20,000 people, with an early Christian chapel of mosaics inside its passages.', 'Durrës Amphitheatre', 45, 60),
          H('고고학 박물관', 'Archaeological Museum', '해변 산책로 옆 박물관으로, 고대 그리스·로마 시대 두러스(디라키움)의 조각과 토기, 묘비를 전시합니다.', 'A museum by the seafront with sculpture, pottery and gravestones from Greek and Roman Dyrrachium.', 'Archaeological Museum Durrës', 45, 60),
          H('베네치아 탑과 성벽', 'Venetian Tower & city walls', '15세기 베네치아가 비잔틴 성벽에 덧세운 둥근 탑으로, 지금은 카페가 들어 있고 항구가 내려다보입니다.', 'A round 15th-century Venetian tower on the Byzantine city walls, now a café with views over the harbour.', 'Venetian Tower Durrës', 20, 30),
          H('두러스 해변과 산책로', 'Durrës beach & promenade', '시내 남쪽으로 몇 km 이어지는 모래 해변과 야자수 산책로로, 여름엔 알바니아에서 가장 붐비는 휴양지입니다.', 'Several kilometres of sandy beach and palm-lined promenade south of the centre, Albania’s busiest resort in summer.', 'Durrës Beach', 60, 180),
          H('조그 왕의 별장', 'Royal Villa of Durrës', '1930년대 조그 왕이 언덕 위에 지은 별장으로, 안은 닫혀 있지만 바깥에서 두러스 만 전체가 내려다보입니다.', 'King Zog’s 1930s villa on the hill above town; the interior is closed, but the grounds look over the whole bay.', 'Royal Villa of Durrës', 30, 45,
            n='시내에서 걸어서 20분쯤 오릅니다. 건물 안은 들어갈 수 없습니다.|About a 20-minute walk up from the centre; the building itself is closed.'),
      ],
      hubs="    air: [TIA()],\n    bus: [['Terminali i Autobusëve Durrës', '두러스 버스터미널']],\n    port: [['Porti i Durrësit', '두러스 항', '이탈리아 바리·앙코나행 페리|ferries to Bari and Ancona, Italy']],\n",
      itinerary={'days': [['', 1, 3, 2, 5, 4]]},
      season='5~6월과 9월이 해변과 유적을 함께 즐기기 좋습니다. 7~8월엔 해변이 매우 붐빕니다.|May–June and September suit both the beach and the ruins; the beach is packed in July and August.',
      stay=[('구시가·항구 주변', 'Old town & harbour', 'Durrës Amphitheatre', '처음 가는 여행에 추천|Best for a first visit', '원형극장과 박물관, 페리 터미널이 걸어서 가깝습니다.|The amphitheatre, museum and ferry terminal are all on foot.'),
            ('해변 지구', 'Beach district', 'Plazhi i Durrësit', '해변 휴양|Beach holiday', '시내 남쪽 해변을 따라 호텔이 길게 늘어서 있고, 시내까지는 버스나 택시로 갑니다.|Hotels line the beach south of town; the centre is a bus or taxi ride away.')],
      routes=R("  r('tirana', 'durres', 'bus', 45),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='구시가는 걸어서 다니고, 해변 지구까지는 시내버스나 택시를 탑니다.', en='Walk the old town; take a city bus or taxi to the beach district.')),
    C(id='kruje', after='durres', ko='크루야', en='Krujë', native='Krujë', lat=41.5090, lng=19.7928,
      blurb=['15세기 스칸데르베그가 오스만군을 막아낸 산기슭 요새 도시. 성 안의 스칸데르베그 박물관과 민속 박물관, 성문 아래 돌길을 따라 이어지는 옛 바자르가 있어 티라나에서 당일치기로 많이 갑니다.',
             'The hillside fortress town where Skanderbeg held off the Ottomans in the 15th century, with the Skanderbeg and ethnographic museums inside the castle and an old bazaar along the cobbled lane below the gate; a popular day trip from Tirana.'],
      highlights=[
          H('크루야 성', 'Krujë Castle', '바위 능선 위 성채로, 성벽 안에 박물관과 테케, 옛 집들이 있고 해안 평야가 내려다보입니다.', 'A citadel on a rocky ridge, with museums, a tekke and old houses inside the walls and views over the coastal plain.', 'Krujë Castle', 90, 120),
          H('스칸데르베그 박물관', 'Skanderbeg Museum', '1982년 성 안에 지은 박물관으로, 국가 영웅 스칸데르베그의 오스만 항전을 무기와 복제 유물, 벽화로 보여 줍니다.', 'A museum built inside the castle in 1982, telling the story of national hero Skanderbeg’s wars against the Ottomans with weapons, replicas and murals.', 'Skanderbeg Museum Krujë', 45, 60),
          H('옛 바자르', 'Old Bazaar', '성문으로 오르는 돌길 양쪽에 오스만 시대 나무 상점이 늘어선 시장으로, 양탄자와 펠트 모자, 골동품을 팝니다.', 'Ottoman-era wooden shops lining the cobbled lane up to the castle gate, selling rugs, felt hats and antiques.', 'Old Bazaar Krujë', 30, 45),
          H('민속 박물관', 'Ethnographic Museum', '성 안 19세기 오스만 저택에 꾸민 박물관으로, 방마다 전통 생활과 공예 도구가 그대로 있습니다.', 'A museum in a 19th-century Ottoman mansion inside the castle, its rooms kept as they were with traditional crafts and furnishings.', 'Ethnographic Museum Krujë', 30, 45),
          H('사리 살티크 테케', 'Sari Salltik Tekke', '크루야 위 산 꼭대기 동굴의 베크타시 성지로, 산길을 올라가면 아드리아해까지 보입니다.', 'A Bektashi shrine in a cave near the top of the mountain above Krujë, reached by a mountain road with views to the Adriatic.', 'Sari Salltik Krujë', 120, 180,
            n='크루야에서 차나 택시로 산길을 오릅니다. 걸어서는 왕복 4시간쯤입니다.|Drive or take a taxi up the mountain road from Krujë; on foot it is about 4 hours there and back.', group=DAY),
      ],
      hubs="    air: [TIA()],\n    bus: [['Krujë bus stop', '크루야 버스 정류장']],\n",
      itinerary={'days': [['', 3, 1, 2, 4]], 'trips': [['사리 살티크 테케|Sari Salltik', 5]]},
      season='4~6월과 9~10월이 성을 걷기 좋습니다. 티라나에서 당일치기로 많이 옵니다.|April–June and September–October are best for walking the castle; most people come on a day trip from Tirana.',
      stay=[('성 주변', 'Around the castle', 'Krujë Castle', '하룻밤 묵기|An overnight stop', '옛 집을 고친 작은 숙소가 몇 곳 있어 당일치기 손님이 떠난 저녁에 조용합니다.|A few small guesthouses in old houses; quiet in the evening once the day-trippers have gone.')],
      routes=R("  r('tirana', 'kruje', 'bus', 60),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='작은 마을이라 걸어서 다니고, 티라나에서 미니버스가 옵니다.', en='A small town best on foot; minibuses come from Tirana.')),
    C(id='shkoder', after='kruje', ko='슈코더르', en='Shkodër', native='Shkodër', lat=42.0683, lng=19.5126,
      blurb=['알바니아 북부의 중심 도시. 언덕 위 로자파 성에서 호수와 강 셋이 만나는 풍경을 내려다보고, 보행자 거리의 카페와 마루비 사진 박물관, 자전거로 다니는 호숫가가 있으며 알바니아 알프스로 가는 관문입니다.',
             'The main city of northern Albania, with Rozafa Castle looking over the meeting of the lake and three rivers, a café-lined pedestrian street, the Marubi photography museum and bike rides to the lake; also the gateway to the Albanian Alps.'],
      highlights=[
          H('로자파 성', 'Rozafa Castle', '일리리아 시대부터 쓴 언덕 위 성으로, 성벽에서 슈코더르 호수와 부나·드린강, 시내가 한눈에 보입니다. 성벽에 산 채로 묻힌 로자파 전설로 유명합니다.', 'A hilltop castle in use since Illyrian times, with views from the walls over Lake Shkodër, the Buna and Drin rivers and the city; famous for the legend of Rozafa walled up alive in it.', 'Rozafa Castle', 90, 120),
          H('마루비 국립 사진 박물관', 'Marubi National Museum of Photography', '1850년대부터 이어진 마루비 사진관의 유리 원판 사진을 전시하는 박물관으로, 알바니아 사람들의 옛 모습을 봅니다.', 'A museum of glass-plate photographs from the Marubi studio founded in the 1850s, showing Albanian life over a century.', 'Marubi National Museum of Photography', 45, 60),
          H('콜러 이드로메노 거리', 'Kolë Idromeno Street', '이탈리아풍 색색 건물에 카페가 늘어선 보행자 거리로, 끝에 모스크와 대성당이 서 있습니다.', 'The pedestrian street of pastel Italianate buildings and cafés, with a mosque and the cathedral at its ends.', 'Rruga Kolë Idromeno Shkodër', 30, 45),
          H('슈코더르 호수 (시로카)', 'Lake Shkodër (Shirokë)', '발칸 최대 호수의 남쪽 기슭으로, 시내에서 자전거로 호숫가 마을 시로카까지 가서 생선 요리를 먹습니다.', 'The southern shore of the largest lake in the Balkans; cycle from town to the lakeside village of Shirokë for fish.', 'Shirokë Shkodër', 120, 180),
          H('메스 다리', 'Mes Bridge', '키르강에 놓인 18세기 오스만 돌다리로, 13개 아치가 100m 넘게 이어지며 알바니아에서 가장 긴 옛 다리입니다.', 'An 18th-century Ottoman stone bridge over the Kir, over 100 m long on thirteen arches, the longest old bridge in Albania.', 'Mes Bridge Shkodër', 30, 45,
            n='시내에서 북동쪽 약 8km, 자전거나 택시로 갑니다.|About 8 km north-east of town by bike or taxi.', group=DAY),
      ],
      hubs="    air: [TIA()],\n    bus: [['Terminali i Autobusëve Shkodër', '슈코더르 버스터미널', '테트·발보너행 미니버스|minibuses to Theth and Valbonë']],\n",
      itinerary={'days': [['', 3, 2, 1, 4]], 'trips': [['메스 다리|Mes Bridge', 5]]},
      season='4~6월과 9~10월이 성과 호수를 다니기 좋습니다. 알프스 트레킹은 6~9월에만 합니다.|April–June and September–October are best for the castle and lake; Alpine trekking only from June to September.',
      stay=[('보행자 거리 주변', 'Pedestrian street area', 'Rruga Kolë Idromeno', '처음 가는 여행에 추천|Best for a first visit', '카페와 식당, 박물관이 걸어서 가깝고 자전거 대여도 쉽습니다. 성까지는 걸어서 30분쯤입니다.|Cafés, restaurants and the museum are on foot and bikes are easy to rent; the castle is about 30 minutes’ walk.')],
      routes=R("  r('tirana', 'shkoder', 'bus', 120),\n  r('podgorica', 'shkoder', 'bus', 90),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고 자전거를 많이 탑니다. 호수와 다리는 자전거나 택시로 갑니다.', en='Walk the centre or do as locals do and cycle; the lake and the bridge are a bike or taxi ride away.')),
    C(id='korce', after='gjirokaster', ko='코르처', en='Korçë', native='Korçë', lat=40.6186, lng=20.7808,
      blurb=['알바니아 남동부 고원의 문화 도시. 돌길을 다시 깐 옛 바자르와 큰 정교회 대성당, 중세 이콘을 모은 국립 박물관이 있고, 알바니아 최초의 맥주와 근교의 교회 마을 보스코포여로 알려져 있습니다.',
             'A cultural city on the south-eastern plateau, with a restored cobbled old bazaar, a big Orthodox cathedral and the national museum of medieval icons; known for Albania’s first beer and the church village of Voskopojë nearby.'],
      highlights=[
          H('옛 바자르', 'Old Bazaar', '19세기 상점 건물과 돌길을 복원한 시장 지구로, 저녁이면 카페와 식당 테라스에 사람이 모입니다.', 'The restored market quarter of 19th-century shops and cobbled streets, busy with café and restaurant terraces in the evening.', 'Old Bazaar Korçë', 45, 60),
          H('국립 중세 미술관', 'National Museum of Medieval Art', '알바니아 전역에서 모은 비잔틴·후기 비잔틴 이콘과 교회 조각 수천 점을 전시하는 미술관입니다.', 'A museum of thousands of Byzantine and post-Byzantine icons and church carvings gathered from all over Albania.', 'National Museum of Medieval Art Korçë', 60, 90),
          H('부활 대성당', 'Resurrection Cathedral', '1992년 공산 정권 붕괴 뒤 지은 알바니아 최대의 정교회 대성당으로, 분홍빛 벽과 돔이 시내 중심에 섭니다.', 'The largest Orthodox cathedral in Albania, built in 1992 after the fall of communism, its pink walls and domes at the heart of the city.', 'Resurrection Cathedral Korçë', 15, 20),
          H('미라호리 모스크', 'Mirahori Mosque', '1496년 지은 알바니아에서 가장 오래된 모스크 가운데 하나로, 옛 바자르 옆에 섭니다.', 'One of the oldest mosques in Albania, built in 1496 next to the old bazaar.', 'Mirahori Mosque Korçë', 10, 15),
          H('보스코포여', 'Voskopojë', '18세기엔 발칸에서 손꼽히는 상업 도시였던 산 속 마을로, 벽화가 남은 정교회 교회 여러 곳이 흩어져 있습니다.', 'A mountain village that was one of the great trading towns of the Balkans in the 18th century, with several frescoed Orthodox churches scattered around it.', 'Voskopojë', 120, 180,
            n='코르처에서 서쪽 약 20km, 택시나 차로 갑니다. 교회는 관리인이 열어 줍니다.|About 20 km west of Korçë by taxi or car; a caretaker opens the churches.', group=DAY),
      ],
      hubs="    air: [TIA()],\n    bus: [['Terminali i Autobusëve Korçë', '코르처 버스터미널']],\n",
      itinerary={'days': [['', 1, 4, 3, 2]], 'trips': [['보스코포여|Voskopojë', 5]]},
      season='5~10월이 좋고, 겨울엔 눈이 내려 춥지만 2월 카니발이 열립니다.|May to October is best; winters are cold and snowy, with a carnival in February.',
      stay=[('옛 바자르 주변', 'Old bazaar area', 'Old Bazaar Korçë', '처음 가는 여행에 추천|Best for a first visit', '바자르의 옛 집을 고친 숙소가 많고 대성당과 박물관이 걸어서 가깝습니다.|Many guesthouses in restored bazaar houses, with the cathedral and museum on foot.')],
      routes=R("  r('tirana', 'korce', 'bus', 180),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 보스코포여는 택시나 차로 갑니다.', en='Walk the town; reach Voskopojë by taxi or car.')),
    C(id='vlore', after='korce', ko='블로러', en='Vlorë', native='Vlorë', lat=40.4660, lng=19.4897,
      blurb=['1912년 알바니아 독립이 선포된 항구 도시이자 알바니아 리비에라의 시작점. 깃발 광장의 독립 기념비와 16세기 모스크, 긴 해안 산책로가 있고, 석호의 섬 수도원과 로고라 고개로 다녀옵니다.',
             'The port where Albanian independence was declared in 1912 and the start of the Albanian Riviera, with the Independence Monument on Flag Square, a 16th-century mosque and a long seafront; day trips go to an island monastery in the lagoon and the Llogara Pass.'],
      highlights=[
          H('독립 기념비와 깃발 광장', 'Independence Monument & Flag Square', '1912년 독립 선언을 기리는 큰 청동 기념비로, 시내 중심 광장에 섭니다.', 'The big bronze monument to the 1912 declaration of independence, on the central square.', 'Independence Monument Vlorë', 15, 20),
          H('무라디에 모스크', 'Muradie Mosque', '1537년 오스만 건축가 시난이 지은 돌과 벽돌 줄무늬의 작은 모스크로, 공산 정권 시절 철거를 피했습니다.', 'A small mosque of 1537 by the Ottoman architect Sinan, striped in stone and brick, which survived demolition under communism.', 'Muradie Mosque Vlorë', 10, 15),
          H('해안 산책로 (룽고마레)', 'Lungomare seafront', '시내에서 남쪽 해변까지 몇 km 이어지는 산책로로, 저녁이면 카페와 식당이 붐빕니다.', 'The seafront walk running several kilometres from town to the southern beaches, busy with cafés and restaurants in the evening.', 'Lungomare Vlorë', 45, 90),
          H('즈베르네츠 수도원', 'Zvërnec Monastery', '나르타 석호 안 작은 섬의 13세기 비잔틴 수도원으로, 소나무 숲 사이 나무다리로 건너갑니다.', 'A 13th-century Byzantine monastery on a small island in the Narta lagoon, reached by a wooden footbridge through pine woods.', 'Zvërnec Monastery', 45, 60,
            n='블로러에서 북쪽 약 10km, 택시로 갑니다.|About 10 km north of Vlorë by taxi.', group=DAY),
          H('로고라 고개', 'Llogara Pass', '해발 1,000m가 넘는 고개로, 소나무 숲 국립공원 전망대에서 알바니아 리비에라 해안선이 한눈에 보입니다.', 'A pass of over 1,000 m in a pine-forest national park, with viewpoints over the whole Albanian Riviera coastline.', 'Llogara Pass', 60, 90,
            n='블로러에서 남쪽 약 40km, 히마러·사란다행 버스가 넘어갑니다.|About 40 km south of Vlorë; buses to Himarë and Sarandë cross it.', group=DAY),
      ],
      hubs="    air: [TIA()],\n    bus: [['Terminali i Autobusëve Vlorë', '블로러 버스터미널']],\n    port: [['Porti i Vlorës', '블로러 항', '이탈리아 브린디시행 페리|ferries to Brindisi, Italy']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['즈베르네츠 수도원|Zvërnec', 4], ['로고라 고개|Llogara Pass', 5]]},
      season='5~6월과 9월이 바다와 고개를 함께 즐기기 좋습니다. 7~8월엔 해변이 매우 붐빕니다.|May–June and September suit both the sea and the pass; the beaches are very busy in July and August.',
      stay=[('시내 중심·해안 산책로', 'Centre & seafront', 'Flag Square Vlorë', '처음 가는 여행에 추천|Best for a first visit', '광장과 모스크, 산책로가 걸어서 가깝고 버스터미널도 멀지 않습니다.|The square, mosque and seafront are on foot, and the bus station is not far.'),
            ('남쪽 해변 (우이 이 프토흐터)', 'Southern beaches (Uji i Ftohtë)', 'Uji i Ftohtë Vlorë', '해변 휴양|Beach holiday', '시내 남쪽 해안을 따라 호텔이 이어지고 바다가 더 맑습니다. 시내까지는 버스나 택시로 갑니다.|Hotels line the coast south of town where the sea is clearer; the centre is a bus or taxi ride away.')],
      routes=R("  r('tirana', 'vlore', 'bus', 150),\n  r('durres', 'vlore', 'bus', 100),\n  r('berat', 'vlore', 'bus', 90),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 남쪽 해변과 수도원은 시내버스나 택시로 갑니다.', en='Walk the centre; take a city bus or taxi to the southern beaches and the monastery.')),
    C(id='himare', after='vlore', ko='히마러', en='Himarë', native='Himarë', lat=40.1017, lng=19.7447,
      blurb=['알바니아 리비에라 한가운데의 해변 마을. 언덕 위 옛 성 마을과 아래 해변 마을로 나뉘고, 남쪽에 알리 파샤의 포르토 팔레르모 성, 북쪽에 드흐르미와 지프 해변이 있습니다.',
             'A beach town in the middle of the Albanian Riviera, split between the old castle village on the hill and the beach town below; Ali Pasha’s Porto Palermo Castle lies to the south and the Dhërmi and Gjipe beaches to the north.'],
      highlights=[
          H('히마러 성과 옛 마을', 'Himarë Castle & old village', '해변 위 언덕의 성벽 안에 돌집과 교회가 남은 옛 마을로, 반쯤 비어 있지만 바다 전망이 좋습니다.', 'The old village of stone houses and churches inside the castle walls on the hill above the beach; half-abandoned, but with fine sea views.', 'Himarë Castle', 45, 60),
          H('스피레 해변과 산책로', 'Spile beach & promenade', '마을 바로 앞 자갈 해변과 식당이 늘어선 산책로로, 저녁이면 가장 붐빕니다.', 'The pebble beach right in front of town and its restaurant-lined promenade, busiest in the evening.', 'Spile Beach Himarë', 60, 180),
          H('리바디 해변', 'Livadhi Beach', '마을 북쪽 올리브 숲 아래 긴 자갈 해변으로, 바다가 맑고 해변 카페가 있습니다.', 'A long pebble beach below olive groves north of town, with clear water and beach bars.', 'Livadhi Beach Himarë', 60, 180),
          H('포르토 팔레르모 성', 'Porto Palermo Castle', '19세기 초 알리 파샤가 작은 만의 반도에 지은 삼각형 성으로, 성벽에서 만과 옛 잠수함 기지가 보입니다.', 'A triangular castle built by Ali Pasha in the early 19th century on a peninsula in a small bay, with views over the bay and a former submarine base from the walls.', 'Porto Palermo Castle', 45, 60,
            n='히마러에서 남쪽 약 10km, 택시나 사란다행 버스로 갑니다.|About 10 km south of Himarë by taxi or the Sarandë bus.', group=DAY),
          H('드흐르미와 지프 해변', 'Dhërmi & Gjipe Beach', '리비에라에서 가장 아름다운 해변 둘로, 드흐르미는 마을과 해변 클럽이 있고 지프는 협곡 끝에 숨은 해변입니다.', 'Two of the Riviera’s finest beaches: Dhërmi with its village and beach clubs, and Gjipe hidden at the mouth of a canyon.', 'Gjipe Beach', 180, 300,
            n='히마러에서 북쪽 20km 안팎, 차나 택시로 갑니다. 지프 해변은 주차장에서 30분쯤 걸어 내려갑니다.|Around 20 km north of Himarë by car or taxi; Gjipe is about a 30-minute walk down from the car park.', group=DAY),
      ],
      hubs="    air: [TIA()],\n    bus: [['Himarë bus stop', '히마러 버스 정류장', '블로러·사란다행|to Vlorë and Sarandë']],\n",
      itinerary={'days': [['', 2, 1, 3]], 'trips': [['포르토 팔레르모 성|Porto Palermo', 4], ['드흐르미와 지프 해변|Dhërmi & Gjipe', 5]]},
      season='6월과 9월이 바다가 따뜻하면서 한산합니다. 7~8월엔 숙소가 비싸고 붐빕니다.|June and September have warm sea and fewer people; July and August are busy and pricey.',
      stay=[('해변 마을', 'Beach town', 'Himarë', '해변 휴양|Beach holiday', '해변과 식당이 걸어서 가깝습니다. 옛 마을까지는 걸어서 30분쯤 오릅니다.|The beach and restaurants are on foot; the old village is about a 30-minute walk up.')],
      routes=R("  r('vlore', 'himare', 'bus', 90),\n  r('himare', 'sarande', 'bus', 90),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 다른 해변은 택시나 하루 몇 번 다니는 버스로 갑니다.', en='Walk the town; reach the other beaches by taxi or the few daily buses.')),
]

AL_NEW = """    cityIds: ['tirana', 'durres', 'kruje', 'shkoder', 'berat', 'gjirokaster', 'korce', 'vlore', 'himare', 'sarande'],
    cityGroups: [
      { title: { ko: '티라나·중부', en: 'Tirana & central' }, cityIds: ['tirana', 'durres', 'kruje'] },
      { title: { ko: '북부', en: 'North' }, cityIds: ['shkoder'] },
      { title: { ko: '남부 내륙', en: 'Southern interior' }, cityIds: ['berat', 'gjirokaster', 'korce'] },
      { title: { ko: '이오니아 해안', en: 'Ionian coast' }, cityIds: ['vlore', 'himare', 'sarande'] },
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
    i = k.index("    id: 'al',")
    j = k.index('    cityGroups: [', i)
    e = k.index('    ],\n', j) + len('    ],\n')
    s = k.index('    cityIds: [', i)
    assert s < j
    k = k[:s] + AL_NEW + k[e:]
    wr('countries.ts', k)
