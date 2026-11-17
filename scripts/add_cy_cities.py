#!/usr/bin/env python3
"""Cyprus review step 2 (2026-11-17, plan approved with every suggested sight): Larnaca, Troodos (based at Kakopetria)
and Polis Chrysochous as new cities. Stavrovouni is noted as men only (monastery rule). Reuses the batch-3 writer
(add_daytrip_places3.main); the country city groups are rewritten afterwards. Times are rounded typical values. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
CH = '입장은 무료이고 어깨와 무릎을 가려야 합니다.|Free; cover shoulders and knees.'
ANT = '문화재청이 관리하는 유료 유적으로, 운영 시간은 계절에 따라 바뀌니 방문 전에 확인하세요.|A ticketed Department of Antiquities site; hours change with the season, so check before you go.'
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='\n  // —— ee ——\n', itin_file='itinerary-south.ts',
              itin_before='  tirana: {', visit_file='visit-med.ts', visit_after=r"^  'ayia-napa-h\d+': v\(.*\),\n",
              stay_before='  berat: [', apps='', transit_before='  // —— dk ——\n  copenhagen: {', places=None, daytrips=[], routes=[])
LAST = r"^  r\('limassol', 'paphos', 'bus', 70\),\n"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'cy'
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


def J2(a, b):
    return a.split('|')[0] + ' ' + b.split('|')[0] + '|' + a.split('|')[1] + ' ' + b.split('|')[1]


CITIES = [
    C(id='larnaca', after='nicosia', ko='라르나카', en='Larnaca', native='Λάρνακα', lat=34.9167, lng=33.6300,
      blurb=['키프로스의 주 관문 공항이 있는 남동부 해안 도시. 야자수 해변 피니쿠데스와 9세기 성 라자로 교회, 바닷가 중세 요새가 있고, 겨울엔 소금 호수에 홍학이 내려앉으며 근교에 신석기 마을 히로키티아와 레이스 마을 레프카라가 있습니다.',
             'The south-east coast town with Cyprus’s main airport, with the palm-lined Finikoudes beach, the 9th-century Church of St Lazarus and a seaside medieval fort; flamingos settle on its salt lake in winter, and the Neolithic village of Choirokoitia and the lace village of Lefkara are nearby.'],
      highlights=[
          H('성 라자로 교회', 'Church of St Lazarus', '예수가 되살린 라자로의 무덤 위에 9세기에 세운 돌 교회로, 화려한 나무 성화벽과 지하 무덤이 있습니다.', 'A 9th-century stone church built over the tomb of Lazarus, raised by Jesus, with an ornate carved iconostasis and a crypt.', 'Church of Saint Lazarus Larnaca', 30, 45, n=CH),
          H('피니쿠데스 해변과 산책로', 'Finikoudes beach & promenade', '시내 앞 야자수 산책로와 모래 해변으로, 카페와 식당이 길게 늘어섭니다.', 'The palm-lined promenade and sandy beach in front of the town, with a long row of cafés and restaurants.', 'Finikoudes Larnaca', 60, 120),
          H('라르나카 요새', 'Larnaca Medieval Fort', '해안 산책로 끝의 중세 요새로, 오스만 시대에 고쳐 지었고 안에 작은 박물관이 있습니다.', 'The medieval fort at the end of the promenade, rebuilt in Ottoman times, with a small museum inside.', 'Larnaca Medieval Castle', 30, 45),
          H('하라 술탄 테케와 소금 호수', 'Hala Sultan Tekke & Salt Lake', '소금 호숫가의 18세기 모스크와 성지로, 겨울에는 호수에 홍학 무리가 찾아옵니다.', 'An 18th-century mosque and shrine on the shore of the salt lake, where flocks of flamingos arrive in winter.', 'Hala Sultan Tekke', 45, 60,
            n='시내에서 서쪽 약 5km입니다. 홍학은 대체로 11~3월에 옵니다. 모스크에서는 어깨와 무릎을 가리고 신발을 벗습니다.|About 5 km west of town; flamingos usually come November to March. In the mosque cover shoulders and knees and remove shoes.'),
          H('카마레스 수도교', 'Kamares Aqueduct', '18세기 오스만 시대에 놓은 아치 수도교로, 밤에는 조명을 받습니다.', 'An 18th-century Ottoman arched aqueduct, lit up at night.', 'Kamares Aqueduct Larnaca', 15, 20),
          H('키티 파나기아 안겔록티스티 교회', 'Panagia Angeloktisti, Kiti', '‘천사가 지은’ 교회라는 뜻의 비잔틴 교회로, 6세기 성모 모자이크가 남아 있습니다.', 'A Byzantine church whose name means “built by angels”, with a 6th-century mosaic of the Virgin.', 'Panagia Angeloktisti Kiti', 30, 45,
            n=J2('라르나카에서 남서쪽 약 10km입니다.|About 10 km south-west of Larnaca.', CH), group=DAY),
          H('히로키티아 신석기 마을', 'Choirokoitia', '기원전 7천 년 무렵의 신석기 마을 유적으로 세계유산이며, 둥근 돌집 몇 채를 복원해 두었습니다.', 'A Neolithic settlement from around 7000 BC and a World Heritage Site, with several round stone houses reconstructed.', 'Choirokoitia', 60, 90,
            n=J2('라르나카에서 남서쪽 약 35km, 차로 갑니다.|About 35 km south-west of Larnaca by car.', ANT), group=DAY),
          H('레프카라 마을', 'Lefkara', '하얀 돌집 골목에서 손으로 뜬 레프카라 레이스와 은 세공품을 파는 산마을입니다.', 'A hill village of white stone lanes where hand-made Lefkara lace and silverwork are sold.', 'Lefkara', 90, 120,
            n='라르나카에서 서쪽 약 40km, 히로키티아와 함께 다녀오기 좋습니다.|About 40 km west of Larnaca, easily combined with Choirokoitia.', group=DAY),
          H('스타브로부니 수도원', 'Stavrovouni Monastery', '해발 약 700m 산꼭대기의 수도원으로, 헬레나 성녀가 세웠다는 전설이 있고 섬 남부가 내려다보입니다.', 'A monastery on a mountaintop at about 700 m, said to have been founded by St Helena, with views over the south of the island.', 'Stavrovouni Monastery', 60, 90,
            n='라르나카에서 서쪽 약 40km입니다. 수도원 규칙에 따라 남성만 들어갈 수 있고, 사진 촬영이 제한됩니다.|About 40 km west of Larnaca. By monastery rule only men may enter, and photography is restricted.', group=DAY),
          H('제노비아 난파선', 'Zenobia wreck', '1980년 라르나카 앞바다에 가라앉은 페리로, 화물을 실은 채 누워 있어 세계적인 다이빙 명소입니다.', 'A ferry that sank off Larnaca in 1980 and lies on its side with its cargo, a world-famous dive site.', 'Zenobia wreck Larnaca', 180, 240,
            n='다이빙 업체의 보트로만 갑니다. 다이빙 자격증이 필요합니다.|Only by dive-company boat; a diving certificate is required.', group=DAY),
      ],
      hubs="    air: [['Larnaca (LCA)', '라르나카 공항 (LCA)']],\n    bus: [['Finikoudes bus stop', '피니쿠데스 버스 정류장', '니코시아·리마솔·아야나파행 시외버스|intercity buses to Nicosia, Limassol and Ayia Napa']],\n",
      itinerary={'days': [['', 1, 3, 2, 5, 4]], 'trips': [['키티 교회|Kiti', 6], ['히로키티아와 레프카라|Choirokoitia & Lefkara', 7, 8], ['스타브로부니 수도원|Stavrovouni', 9], ['제노비아 난파선|Zenobia', 10]]},
      season='4~6월과 9~10월이 좋고, 11~3월엔 소금 호수에 홍학이 옵니다. 한여름은 매우 덥습니다.|April–June and September–October are best; flamingos are on the salt lake November–March. Midsummer is very hot.',
      stay=[('피니쿠데스 해변', 'Finikoudes seafront', 'Finikoudes Larnaca', '처음 가는 여행에 추천|Best for a first visit', '해변과 성 라자로 교회, 요새가 걸어서 가깝고 공항까지 택시로 15분쯤입니다.|The beach, St Lazarus and the fort are on foot, and the airport is about 15 minutes by taxi.'),
            ('맥켄지 해변', 'Mackenzie Beach', 'Mackenzie Beach Larnaca', '해변 휴양|Beach holiday', '공항과 시내 사이의 해변 지구로 바와 식당이 많습니다. 시내까지는 걸어서 25분쯤입니다.|A beach district between the airport and town with many bars and restaurants; town is about a 25-minute walk.')],
      routes=R("  r('nicosia', 'larnaca', 'bus', 50),\n  r('larnaca', 'limassol', 'bus', 60),\n  r('larnaca', 'ayia-napa', 'bus', 60),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 공항과 근교는 버스나 택시를 탑니다. 근교 유적은 차가 편합니다.', en='Walk the town; take a bus or taxi to the airport and nearby sights. A car is easiest for the outlying sites.')),
    C(id='troodos', after='limassol', ko='트로도스 (카코페트리아)', en='Troodos (Kakopetria)', native='Κακοπετριά', lat=34.9890, lng=32.9020,
      blurb=['섬 한가운데의 소나무 산맥. 거점 마을 카코페트리아의 돌집 골목에서 출발해, 지붕을 덧씌운 세계유산 벽화 교회들과 키프로스 최대의 키코스 수도원, 최고봉 올림포스산과 숲 속 폭포를 다닙니다.',
             'The pine-clad mountains in the middle of the island; from the stone lanes of Kakopetria, visit the roofed, frescoed World Heritage churches, Kykkos, the largest monastery in Cyprus, Mount Olympos, the highest peak, and waterfalls in the forest.'],
      highlights=[
          H('카코페트리아 옛 마을', 'Kakopetria old village', '강가 비탈에 나무 발코니의 돌집이 다닥다닥 붙은 옛 마을로, 물레방앗간 식당과 민박이 있습니다.', 'An old village of stone houses with wooden balconies packed onto the riverside slope, with a watermill restaurant and guesthouses.', 'Kakopetria', 45, 60),
          H('아기오스 니콜라오스 티스 스테기스', 'Agios Nikolaos tis Stegis', '‘지붕의 성 니콜라오스’라는 뜻의 11세기 교회로 세계유산이며, 덧지붕 아래 11~17세기 벽화가 덮여 있습니다.', 'The 11th-century church of “St Nicholas of the Roof”, a World Heritage Site, its walls covered with frescoes of the 11th to 17th centuries under a protective pitched roof.', 'Agios Nikolaos tis Stegis', 30, 45,
            n=J2('카코페트리아에서 약 3km입니다. 관리인이 있을 때만 열려 시간을 확인하세요.|About 3 km from Kakopetria; open only when the caretaker is there, so check times.', CH)),
          H('파나기아 아시누', 'Panagia Asinou', '12세기 초 벽화가 가장 잘 남은 세계유산 교회로, 숲 속 개울가에 홀로 서 있습니다.', 'A World Heritage church with some of the finest early-12th-century frescoes, standing alone by a stream in the woods.', 'Panagia Asinou', 30, 45,
            n=J2('카코페트리아에서 동쪽으로 차로 약 30분, 니키타리 마을에서 관리인이 열쇠를 가져옵니다.|About 30 min east of Kakopetria by car; the caretaker brings the key from Nikitari village.', CH), group=DAY),
          H('파나기아 투 아라쿠', 'Panagia tou Araka', '라구데라 마을의 세계유산 교회로, 1192년에 그린 섬세한 비잔틴 벽화가 남아 있습니다.', 'A World Heritage church in Lagoudera village with refined Byzantine frescoes painted in 1192.', 'Panagia tou Araka Lagoudera', 30, 45,
            n=J2('카코페트리아에서 동쪽으로 차로 약 40분입니다.|About 40 min east of Kakopetria by car.', CH), group=DAY),
          H('키코스 수도원', 'Kykkos Monastery', '11세기에 세운 키프로스에서 가장 크고 부유한 수도원으로, 금빛 모자이크와 성화 박물관이 있습니다.', 'Founded in the 11th century, the largest and richest monastery in Cyprus, with gilded mosaics and an icon museum.', 'Kykkos Monastery', 60, 90,
            n=J2('카코페트리아에서 서쪽으로 차로 약 1시간입니다. 박물관은 유료입니다.|About 1 hour west of Kakopetria by car; the museum is ticketed.', CH), group=DAY),
          H('트로니 (마카리오스 대주교 묘)', 'Throni (Makarios’s tomb)', '키코스 수도원 위 언덕에 있는 초대 대통령 마카리오스 대주교의 묘로, 산맥 전망이 있습니다.', 'The tomb of Archbishop Makarios, Cyprus’s first president, on the hill above Kykkos, with mountain views.', 'Throni Makarios tomb', 20, 30,
            n='키코스 수도원에서 차로 약 5분입니다.|About 5 min by car from Kykkos Monastery.', group=DAY),
          H('올림포스산', 'Mount Olympos', '해발 1,952m 키프로스 최고봉으로, 정상 둘레 산책로가 있고 겨울(대체로 1~3월)엔 스키장이 엽니다.', 'Cyprus’s highest peak at 1,952 m, with trails around the summit and a ski area open in winter, usually January to March.', 'Mount Olympus Cyprus', 90, 180,
            n='카코페트리아에서 남쪽으로 차로 약 25분입니다.|About 25 min south of Kakopetria by car.', group=DAY),
          H('칼레도니아 폭포', 'Caledonia Waterfall', '숲 속 개울을 따라 약 3km를 걸어 닿는 폭포로, 키프로스에서 가장 높은 폭포 가운데 하나입니다.', 'One of the highest waterfalls in Cyprus, reached by a trail of about 3 km along a forest stream.', 'Caledonia Waterfall', 120, 150,
            n='트로도스 광장 근처에서 출발해 플라트레스 쪽으로 내려갑니다. 미끄러우니 편한 신발이 필요합니다.|The trail starts near Troodos Square and runs down towards Platres; wear good shoes, as it is slippery.', group=DAY),
          H('밀로메리스 폭포', 'Millomeris Waterfall', '플라트레스 마을 아래 짧은 숲길 끝의 폭포로, 걷기 쉽습니다.', 'A waterfall at the end of a short forest path below Platres village, an easy walk.', 'Millomeris Waterfall', 45, 60, group=DAY),
          H('플라트레스와 프로드로모스', 'Platres & Prodromos', '영국 식민지 시절부터 사랑받은 산 휴양 마을들로, 플라트레스엔 옛 호텔과 카페가, 프로드로모스엔 과수원이 있습니다.', 'Mountain resort villages popular since British colonial days, with old hotels and cafés in Platres and orchards around Prodromos.', 'Pano Platres', 60, 90, group=DAY),
      ],
      hubs="    air: [LCA(), ['Paphos (PFO)', '파포스 공항 (PFO)', '파포스|Paphos']],\n    bus: [['Kakopetria bus stop', '카코페트리아 버스 정류장', '니코시아행 버스|buses to Nicosia']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['아시누·아라쿠 교회|Asinou & Araka', 3, 4], ['키코스 수도원과 트로니|Kykkos & Throni', 5, 6], ['올림포스산과 칼레도니아 폭포|Olympos & Caledonia', 7, 8], ['플라트레스와 밀로메리스 폭포|Platres & Millomeris', 10, 9]]},
      season='여름(6~9월)엔 해안보다 시원해 걷기 좋고, 겨울엔 눈이 와 올림포스산에서 스키를 탑니다. 산길은 차가 있어야 편합니다.|In summer (June–September) it is cooler than the coast and good for walking; in winter snow brings skiing on Mount Olympos. A car makes the mountain roads far easier.',
      stay=[('카코페트리아 옛 마을', 'Kakopetria old village', 'Kakopetria', '분위기|Atmosphere', '옛 돌집을 고친 숙소에서 묵으며 벽화 교회와 산을 다닙니다.|Stay in a restored stone house and explore the churches and mountains.'),
            ('플라트레스', 'Platres', 'Pano Platres', '산 휴양|Mountain resort', '호텔과 식당이 많고 폭포 산책로가 가깝습니다.|More hotels and restaurants, with the waterfall trails nearby.')],
      routes=R("  r('nicosia', 'troodos', 'bus', 75),\n  r('limassol', 'troodos', 'bus', 75, { n: '플라트레스까지|to Platres' }),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='버스가 드물어 산길은 렌터카가 가장 편합니다. 마을 안은 걸어서 다닙니다.', en='Buses are sparse, so a rental car is easiest in the mountains; walk within the villages.')),
    C(id='polis', after='paphos', ko='폴리스 크리수스', en='Polis Chrysochous', native='Πόλις Χρυσοχούς', lat=35.0347, lng=32.4256,
      blurb=['섬 북서쪽 크리수스만의 조용한 소도시. 라치 항구에서 보트를 타고 아카마스 반도의 블루 라군으로 가고, 아프로디테가 목욕했다는 샘과 반도의 산책로를 걷습니다.',
             'A quiet small town on Chrysochous Bay in the north-west; take a boat from Latchi harbour to the Blue Lagoon on the Akamas peninsula, and walk to the spring where Aphrodite is said to have bathed and along the peninsula’s trails.'],
      highlights=[
          H('라치 항구', 'Latchi harbour', '어선과 보트가 모인 작은 항구로, 해산물 식당이 물가에 늘어서고 블루 라군 보트가 출발합니다.', 'A small harbour of fishing boats with seafood restaurants on the waterfront, where Blue Lagoon boats depart.', 'Latchi Harbour', 45, 60),
          H('아프로디테의 목욕탕', 'Baths of Aphrodite', '무화과나무 그늘 아래 바위 웅덩이로, 아프로디테가 목욕했다는 전설이 있습니다.', 'A rock pool shaded by a fig tree, where Aphrodite is said to have bathed.', 'Baths of Aphrodite', 20, 30,
            n='라치에서 서쪽 약 6km입니다. 물에 들어갈 수는 없습니다.|About 6 km west of Latchi; swimming is not allowed.'),
          H('아프로디테·아도니스 산책로', 'Aphrodite & Adonis trails', '아프로디테의 목욕탕에서 시작하는 아카마스 반도의 순환 산책로로, 바다를 내려다보는 능선을 따라 걷습니다.', 'Circular trails on the Akamas peninsula starting at the Baths of Aphrodite, following ridges above the sea.', 'Aphrodite Nature Trail Akamas', 150, 240,
            n='한 바퀴 약 7.5km입니다. 여름엔 그늘이 없어 아침 일찍 걷고 물을 충분히 챙기세요.|About 7.5 km per loop; there is no shade in summer, so start early and carry plenty of water.'),
          H('블루 라군 보트 투어', 'Blue Lagoon boat trip', '라치에서 보트를 타고 아카마스 반도 끝의 청록색 만에 가서 수영하는 반나절 투어입니다.', 'A half-day boat trip from Latchi to the turquoise cove at the tip of the Akamas peninsula for a swim.', 'Blue Lagoon Akamas', 180, 240,
            n='여름 중심으로 운항하며 바람이 세면 결항합니다.|Runs mainly in summer and is cancelled in strong wind.', group=DAY),
          H('폴리스 시내와 해변', 'Polis town & beach', '광장 주변 카페가 있는 작은 시내와, 소나무 숲 옆의 조용한 해변입니다.', 'The small town centre with cafés around its square, and a quiet beach beside a pine grove.', 'Polis Chrysochous', 60, 120),
      ],
      hubs="    air: [['Paphos (PFO)', '파포스 공항 (PFO)', '파포스|Paphos']],\n    bus: [['Polis bus station', '폴리스 버스터미널', '파포스행 버스|buses to Paphos']],\n",
      itinerary={'days': [['', 5, 1, 2, 3]], 'trips': [['블루 라군 보트|Blue Lagoon boat', 4]]},
      season='5~6월과 9~10월이 걷기와 수영에 좋습니다. 블루 라군 보트는 여름에 가장 많습니다.|May–June and September–October suit walking and swimming; Blue Lagoon boats run most in summer.',
      stay=[('폴리스 시내', 'Polis town', 'Polis Chrysochous', '조용한 거점|A quiet base', '시내 식당과 해변이 가깝고 라치 항구까지 차로 5분입니다.|Restaurants and the beach are close, and Latchi harbour is 5 minutes by car.'),
            ('라치', 'Latchi', 'Latchi', '바닷가|By the sea', '항구 바로 옆이라 보트 투어에 편하고 해산물 식당이 많습니다.|Right by the harbour, handy for boat trips, with many seafood restaurants.')],
      routes=R("  r('paphos', 'polis', 'bus', 50),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내와 항구는 걸어서 다니고, 아카마스 쪽은 버스나 택시, 차로 갑니다.', en='Walk the town and harbour; reach Akamas by bus, taxi or car.')),
]

CY_NEW = """    cityIds: ['nicosia', 'troodos', 'larnaca', 'ayia-napa', 'limassol', 'paphos', 'polis'],
    cityGroups: [
      { title: { ko: '니코시아·내륙', en: 'Nicosia & inland' }, cityIds: ['nicosia', 'troodos'] },
      { title: { ko: '동부 해안', en: 'East coast' }, cityIds: ['larnaca', 'ayia-napa'] },
      { title: { ko: '남·서부 해안', en: 'South & west coast' }, cityIds: ['limassol', 'paphos', 'polis'] },
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
    i = k.index("    id: 'cy',")
    j = k.index('    cityGroups: [', i)
    e = k.index('    ],\n', j) + len('    ],\n')
    s = k.index('    cityIds: [', i)
    assert s < j
    k = k[:s] + CY_NEW + k[e:]
    wr('countries.ts', k)
