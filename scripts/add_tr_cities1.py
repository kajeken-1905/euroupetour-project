#!/usr/bin/env python3
"""Türkiye step 2, batch A (2026-11-18, user picked every proposed city): Selçuk (Ephesus), Bodrum, Fethiye, Kaş,
Olympos & Çıralı, Alanya, Ayvalık, Çanakkale. Reuses the batch-3 writer (add_daytrip_places3.main). Times are rounded
typical values; Ministry of Culture sites carry the muze.gov.tr note. City groups are rewritten in batch B. Run once."""
import json
import add_daytrip_places3 as T

DAY = ('근교 당일치기', 'Day trip')
MUZE = '문화관광부(muze.gov.tr)가 운영하는 유료 유적으로, 운영 시간은 계절에 따라 바뀝니다. 뮤지엄 패스를 쓸 수 있습니다.|A ticketed Ministry of Culture site (muze.gov.tr); hours change with the season. The Museum Pass is valid.'
COMMON = dict(hubs_file='hubs-east.ts', itin_file='itinerary-south.ts', itin_before='  sofia: {', visit_file='visit-east.ts',
              visit_after=r"^  'pamukkale-h\d+': v\(.*\),\n", stay_before='  varna: [', apps='',
              transit_before='  pamukkale: {\n    modes', places=None, daytrips=[])
LAST = r"^  r\('antalya', 'goreme', 'bus', 540\),\n"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'tr'
    d['hubs_before'] = '  pamukkale: {\n    air'
    return d


def H(ko, en, dko, den, maps, mn, mx, n=None, group=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    d = dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)
    if group:
        d['group'] = group
    return d


def J2(a, b):
    return a.split('|')[0] + ' ' + b.split('|')[0] + '|' + a.split('|')[1] + ' ' + b.split('|')[1]


def R(*lines):
    return [('routes-east.ts', LAST, ''.join(lines))]


CITIES = [
    C(id='selcuk', after='izmir', ko='셀추크', en='Selçuk', native='Selçuk', lat=37.9512, lng=27.3681,
      blurb=['에페소스 유적 바로 옆의 작은 도시. 켈수스 도서관과 대극장이 남은 고대 에페소스, 성 요한 성당과 아야술루크 성, 아르테미스 신전 터가 걸어서 닿고, 산마을 쉬린제와 성모 마리아의 집으로 다녀옵니다.',
             'The small town next to Ephesus: the ancient city with the Library of Celsus and the Great Theatre, the Basilica of St John, Ayasuluk Castle and the site of the Temple of Artemis are all close, with trips up to the hill village of Şirince and the House of the Virgin Mary.'],
      highlights=[
          H('에페소스', 'Ephesus', '로마 시대 아시아 속주의 수도로, 켈수스 도서관과 2만 5천 석 대극장, 대리석 거리가 남은 세계유산입니다.', 'Capital of the Roman province of Asia and a World Heritage Site, with the Library of Celsus, the 25,000-seat Great Theatre and marble streets.', 'Ephesus Ancient City', 180, 240,
            n=J2('그늘이 거의 없어 여름엔 아침 일찍 가세요. 위쪽 문에서 내려오며 보면 편합니다.|There is little shade, so go early in summer; walking downhill from the upper gate is easiest.', MUZE)),
          H('비탈 주택', 'Terrace Houses', '에페소스 안 지붕을 씌운 로마 부유층 저택들로, 벽화와 모자이크 바닥이 잘 남아 있습니다.', 'Wealthy Roman houses under a protective roof inside Ephesus, with well-preserved wall paintings and mosaic floors.', 'Terrace Houses Ephesus', 45, 60,
            n='에페소스 입장권과 별도로 표를 삽니다.|Needs its own ticket on top of Ephesus.'),
          H('에페소스 박물관', 'Ephesus Museum', '에페소스에서 나온 아르테미스 상과 조각, 생활 유물을 전시하는 셀추크 시내 박물관입니다.', 'The museum in Selçuk town showing statues of Artemis, sculpture and everyday finds from Ephesus.', 'Ephesus Archaeological Museum Selçuk', 45, 60, n=MUZE),
          H('성 요한 성당과 아야술루크 성', 'Basilica of St John & Ayasuluk Castle', '사도 요한의 무덤 위에 유스티니아누스가 세운 성당 유적으로, 위쪽 언덕에 성채가 섭니다.', 'The ruins of the basilica Justinian built over the tomb of St John the Apostle, with a fortress on the hill above.', 'Basilica of St. John Selçuk', 60, 90, n=MUZE),
          H('아르테미스 신전 터', 'Temple of Artemis', '고대 세계 7대 불가사의였던 신전 자리로, 지금은 늪지에 기둥 하나만 서 있습니다.', 'The site of one of the Seven Wonders of the Ancient World, now a single column standing in a marshy field.', 'Temple of Artemis Selçuk', 15, 20),
          H('성모 마리아의 집', 'House of the Virgin Mary', '성모 마리아가 말년을 보냈다고 전하는 산속 작은 돌집으로, 순례자가 많이 찾습니다.', 'A small stone house in the hills where the Virgin Mary is said to have spent her last years, visited by many pilgrims.', 'House of the Virgin Mary', 45, 60, group=DAY,
            n='에페소스 위쪽 문에서 산길로 약 7km, 택시나 투어로 갑니다. 유료입니다.|About 7 km up the hill from Ephesus’s upper gate, by taxi or tour; ticketed.'),
          H('쉬린제 마을', 'Şirince', '포도밭 언덕의 옛 그리스인 마을로, 과일 와인 가게와 돌집 골목이 이어집니다.', 'A former Greek village among vineyard hills, with fruit-wine shops and stone-house lanes.', 'Şirince', 120, 180, group=DAY,
            n='셀추크에서 돌무시(미니버스)로 20분쯤입니다.|About 20 minutes by dolmuş from Selçuk.'),
      ],
      hubs="    air: [['İzmir Adnan Menderes (ADB)', '이즈미르 공항 (ADB)', '기차로 약 1시간|about 1 hour by train']],\n    rail: [['Selçuk', '셀추크역', '이즈미르·데니즐리행|to İzmir and Denizli']],\n    bus: [['Selçuk Otogarı', '셀추크 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3, 4, 5]], 'trips': [['성모 마리아의 집|House of the Virgin Mary', 6], ['쉬린제|Şirince', 7]]},
      season='4~6월과 9~10월이 걷기 좋습니다. 7~8월 한낮의 에페소스는 매우 덥습니다.|April–June and September–October are best for walking; Ephesus at midday in July and August is very hot.',
      stay=[('셀추크 시내', 'Selçuk town', 'Selçuk', '유적 가까이|Near the sites', '기차역과 박물관, 성 요한 성당이 걸어서 가깝고 에페소스까지 3km입니다.|The station, museum and St John’s are on foot, and Ephesus is 3 km away.'),
            ('쉬린제', 'Şirince', 'Şirince', '산마을 분위기|Village atmosphere', '돌집을 고친 숙소가 많고 밤엔 조용합니다. 차가 있으면 편합니다.|Many restored stone-house guesthouses and quiet nights; easier with a car.')],
      routes=R("  r('izmir', 'selcuk', 'train', 80),\n  r('selcuk', 'pamukkale', 'train', 180, { fb: '데니즐리역|Denizli' }),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내와 유적은 걸어서 다니고, 쉬린제와 해변은 돌무시(미니버스)를 탑니다.', en='Walk the town and sites; take a dolmuş (minibus) to Şirince and the beaches.')),

    C(id='bodrum', after='selcuk', ko='보드룸', en='Bodrum', native='Bodrum', lat=37.0344, lng=27.4305,
      blurb=['에게해의 하얀 집 항구 도시. 고대 할리카르나소스의 영묘 터와 극장, 바다 위 성 베드로 성의 수중고고학 박물관이 있고, 반도 곳곳의 만과 해 질 녘 귀뮈실뤼크로 다닙니다.',
             'An Aegean harbour town of white houses, with the site of the Mausoleum of ancient Halicarnassus, its theatre and the Museum of Underwater Archaeology in the seafront Castle of St Peter; coves around the peninsula and sunset at Gümüşlük are nearby.'],
      highlights=[
          H('보드룸 성과 수중고고학 박물관', 'Bodrum Castle & Museum of Underwater Archaeology', '15세기 성 요한 기사단이 쌓은 바다 위 성으로, 안에 고대 난파선과 화물을 전시하는 수중고고학 박물관이 있습니다.', 'The 15th-century castle of the Knights of St John on the water, home to a museum of ancient shipwrecks and their cargoes.', 'Bodrum Castle', 90, 120, n=MUZE),
          H('보드룸 마리나와 시장', 'Bodrum marina & bazaar', '요트가 늘어선 항구와 뒤쪽 시장 골목으로, 저녁이면 식당과 바가 붐빕니다.', 'The yacht-lined harbour and the bazaar lanes behind it, busy with restaurants and bars in the evening.', 'Bodrum Marina', 60, 90),
          H('할리카르나소스 영묘 터', 'Mausoleum at Halicarnassus', '고대 세계 7대 불가사의였던 마우솔로스 왕의 무덤 자리로, 기초와 흩어진 돌만 남아 있습니다.', 'The site of King Mausolus’s tomb, one of the Seven Wonders of the Ancient World, where only foundations and scattered stones remain.', 'Mausoleum at Halicarnassus', 30, 45, n=MUZE),
          H('민도스 문', 'Myndos Gate', '고대 할리카르나소스 성벽의 서쪽 문으로, 알렉산드로스 대왕의 포위전이 벌어진 곳입니다.', 'The western gate of the walls of ancient Halicarnassus, scene of Alexander the Great’s siege.', 'Myndos Gate Bodrum', 15, 20),
          H('보드룸 고대 극장', 'Bodrum Ancient Theatre', '시내 뒤 언덕의 고대 극장으로, 항구와 성이 내려다보입니다.', 'The ancient theatre on the hill behind town, looking down on the harbour and castle.', 'Bodrum Ancient Theatre', 20, 30),
          H('귀뮈실뤼크', 'Gümüşlük', '반도 서쪽 끝의 어촌으로, 물속에 고대 민도스 유적이 잠겨 있고 해 질 녘 바닷가 생선 식당이 유명합니다.', 'A fishing village at the western tip of the peninsula, with the ruins of ancient Myndos under the water and waterside fish restaurants famous at sunset.', 'Gümüşlük', 180, 240, group=DAY,
            n='보드룸에서 돌무시로 40분쯤입니다.|About 40 minutes by dolmuş from Bodrum.'),
      ],
      hubs="    air: [['Milas–Bodrum (BJV)', '밀라스-보드룸 공항 (BJV)', '공항버스 약 45분|airport bus about 45 min']],\n    bus: [['Bodrum Otogarı', '보드룸 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3, 4, 5]], 'trips': [['귀뮈실뤼크|Gümüşlük', 6]]},
      season='5~6월과 9~10월이 좋습니다. 7~8월은 가장 붐비고 숙박비가 비쌉니다.|May–June and September–October are best; July and August are the busiest and dearest.',
      stay=[('보드룸 시내 (항구 근처)', 'Bodrum town (by the harbour)', 'Bodrum Marina', '걸어서 다니기|Walkable', '성과 시장, 식당이 걸어서 가깝습니다. 바 거리 근처는 밤늦게까지 시끄럽습니다.|The castle, bazaar and restaurants are on foot; the bar street is loud until late.'),
            ('귀뮈실뤼크·얄르카바크', 'Gümüşlük & Yalıkavak', 'Yalıkavak', '조용한 만|Quiet bays', '반도 서쪽의 조용한 마을들로, 차가 있으면 편합니다.|Quieter villages on the west of the peninsula; easier with a car.')],
      routes=R("  r('izmir', 'bodrum', 'bus', 210),\n  r('istanbul', 'bodrum', 'flight', 75, { n: '밀라스-보드룸 공항 도착|into Milas–Bodrum airport' }),\n  r('selcuk', 'bodrum', 'bus', 180),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 반도의 마을과 해변은 돌무시(미니버스)를 탑니다.', en='Walk the town; take a dolmuş (minibus) to the villages and beaches of the peninsula.')),

    C(id='fethiye', after='antalya', ko='페티예 (욀뤼데니즈)', en='Fethiye (Ölüdeniz)', native='Fethiye', lat=36.6213, lng=29.1164,
      blurb=['리키아 해안 서쪽의 항구 도시. 절벽에 새긴 리키아 왕의 바위 무덤과 생선 시장이 시내에 있고, 욀뤼데니즈 블루 라군과 나비 계곡, 유령 마을 카야쾨이와 사클르켄트 협곡으로 다녀옵니다.',
             'A harbour town at the western end of the Lycian coast, with Lycian rock tombs carved into the cliff and a fish market in town; trips go to the Blue Lagoon at Ölüdeniz, Butterfly Valley, the ghost village of Kayaköy and Saklıkent Gorge.'],
      highlights=[
          H('페티예 항구와 파스파투르 시장', 'Fethiye harbour & Paspatur bazaar', '요트 항구와 옛 시장 골목으로, 생선 시장에서 고른 생선을 옆 식당에서 구워 줍니다.', 'The yacht harbour and old bazaar lanes; at the fish market, pick a fish and a neighbouring restaurant grills it.', 'Paspatur Fethiye', 60, 90),
          H('리키아 바위 무덤', 'Lycian rock tombs', '기원전 4세기 신전 정면 모양으로 절벽에 새긴 무덤들로, 가장 큰 것이 아민타스 무덤입니다.', 'Tombs carved into the cliff in the shape of temple fronts in the 4th century BC, the largest being the Tomb of Amyntas.', 'Tomb of Amyntas', 30, 45),
          H('카야쾨이', 'Kayaköy', '1923년 주민 교환 뒤 비어 버린 그리스인 마을로, 산비탈에 지붕 없는 돌집 수백 채가 남아 있습니다.', 'A Greek village emptied after the 1923 population exchange, with hundreds of roofless stone houses on the hillside.', 'Kayaköy', 90, 120,
            n='페티예에서 돌무시로 20분쯤이며 유료입니다.|About 20 minutes by dolmuş from Fethiye; ticketed.'),
          H('욀뤼데니즈 블루 라군', 'Ölüdeniz Blue Lagoon', '숲에 둘러싸인 잔잔한 석호와 모래톱 해변으로, 바바산에서 뛰어내리는 패러글라이딩이 유명합니다.', 'A calm lagoon and sand spit ringed by forest, famous for paragliding off Mount Babadağ.', 'Ölüdeniz Blue Lagoon', 180, 300, group=DAY,
            n='페티예에서 돌무시로 30분쯤입니다. 석호 쪽은 자연공원이라 입장료가 있습니다.|About 30 minutes by dolmuş from Fethiye; the lagoon is a nature park with an entry fee.'),
          H('나비 계곡', 'Butterfly Valley', '절벽 사이 작은 해변과 계곡으로, 욀뤼데니즈에서 배로만 갑니다. 여름엔 나비가 많습니다.', 'A small beach and valley between cliffs, reached only by boat from Ölüdeniz; butterflies are plentiful in summer.', 'Butterfly Valley Fethiye', 180, 240, group=DAY),
          H('사클르켄트 협곡', 'Saklıkent Gorge', '높이 300m 절벽 사이 좁은 협곡으로, 차가운 물속을 걸어 들어갑니다.', 'A narrow gorge between 300 m cliffs, where you wade up through icy water.', 'Saklıkent Gorge', 180, 240, group=DAY,
            n='페티예에서 동쪽 약 45km입니다. 물살이 센 봄에는 안쪽 출입이 막힐 수 있습니다.|About 45 km east of Fethiye; the inner gorge may be closed when the water runs high in spring.'),
      ],
      hubs="    air: [['Dalaman (DLM)', '달라만 공항 (DLM)', '공항버스 약 1시간|airport bus about 1 hour']],\n    bus: [['Fethiye Otogarı', '페티예 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['욀뤼데니즈|Ölüdeniz', 4], ['나비 계곡|Butterfly Valley', 5], ['사클르켄트 협곡|Saklıkent Gorge', 6]]},
      season='5~6월과 9~10월이 걷기와 수영에 좋습니다. 리키아 길 걷기는 봄·가을이 알맞습니다.|May–June and September–October suit walking and swimming; spring and autumn are best for the Lycian Way.',
      stay=[('페티예 시내 (항구 근처)', 'Fethiye town (by the harbour)', 'Fethiye Marina', '교통 거점|Transport hub', '버스와 돌무시, 보트 투어가 모두 여기서 떠나고 식당이 많습니다.|Buses, dolmuşes and boat trips all leave from here, with plenty of restaurants.'),
            ('욀뤼데니즈·히사뢰뉘', 'Ölüdeniz & Hisarönü', 'Ölüdeniz', '해변 휴양|Beach holiday', '해변 바로 옆이라 수영과 패러글라이딩에 편합니다. 여름엔 붐빕니다.|Right by the beach for swimming and paragliding; busy in summer.')],
      routes=R("  r('antalya', 'fethiye', 'bus', 210),\n  r('istanbul', 'fethiye', 'flight', 80, { n: '달라만 공항 도착|into Dalaman airport' }),\n  r('pamukkale', 'fethiye', 'bus', 240, { fa: '데니즐리 버스터미널|Denizli Otogarı' }),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 욀뤼데니즈·카야쾨이·사클르켄트는 돌무시(미니버스)를 탑니다.', en='Walk the town; take a dolmuş (minibus) to Ölüdeniz, Kayaköy and Saklıkent.')),

    C(id='kas', after='fethiye', ko='카쉬', en='Kaş', native='Kaş', lat=36.2018, lng=29.6377,
      blurb=['리키아 해안의 작은 항구 마을. 바다를 보는 고대 극장과 골목의 사자 무덤이 있고, 보트로 물에 잠긴 도시 케코바와 그리스 섬 메이스에, 차로 카푸타시 해변과 파타라로 다녀옵니다.',
             'A small harbour town on the Lycian coast with an ancient theatre facing the sea and a lion tomb in its lanes; boats go to the sunken city of Kekova and the Greek island of Meis, and roads to Kaputaş beach and Patara.'],
      highlights=[
          H('카쉬 구시가와 사자 무덤', 'Kaş old town & Lion Tomb', '부겐빌레아가 덮인 골목 위쪽에 사자 머리를 새긴 기원전 4세기 리키아 석관이 섭니다.', 'Bougainvillea-covered lanes leading up to a 4th-century BC Lycian sarcophagus carved with lions’ heads.', 'Lion Tomb Kaş', 45, 60),
          H('안티펠로스 극장', 'Antiphellos Theatre', '바다와 메이스섬을 바라보는 헬레니즘 시대 극장으로, 해 질 녘에 사람들이 모입니다.', 'A Hellenistic theatre looking out to sea and the island of Meis, a gathering place at sunset.', 'Antiphellos Theatre', 20, 30),
          H('케코바 보트 투어', 'Kekova boat trip', '지진으로 바다에 잠긴 고대 도시 위를 배로 지나고, 성이 있는 마을 칼레쾨이(시메나)에 들릅니다.', 'Sail over an ancient city sunk by earthquakes and stop at the castle village of Kaleköy (Simena).', 'Kekova Sunken City', 360, 480, group=DAY,
            n='카쉬 항구에서 하루 보트 투어가 떠납니다. 잠긴 유적 위에선 수영이 금지입니다.|Day boat trips leave from Kaş harbour; swimming over the sunken ruins is not allowed.'),
          H('카푸타시 해변', 'Kaputaş Beach', '절벽 사이 협곡 끝의 작은 모래 해변으로, 물빛이 유난히 파랗습니다.', 'A small sandy beach at the mouth of a gorge between cliffs, with strikingly blue water.', 'Kaputaş Beach', 60, 120, group=DAY,
            n='카쉬에서 서쪽 약 20km, 도로에서 계단으로 내려갑니다.|About 20 km west of Kaş, reached by steps down from the road.'),
          H('메이스섬 (그리스 카스텔로리조)', 'Meis (Kastellorizo, Greece)', '카쉬 앞바다 그리스 섬으로, 배로 20분이면 알록달록한 항구 마을에 닿습니다.', 'The Greek island off Kaş, whose colourful harbour village is 20 minutes away by boat.', 'Kastellorizo', 300, 420, group=DAY,
            n='그리스(셍겐 지역)로 출국하는 것이라 여권이 필요합니다.|You leave Türkiye for Greece (Schengen area), so bring your passport.'),
          H('파타라', 'Patara', '리키아 동맹의 수도였던 고대 도시 유적과, 바다거북이 알을 낳는 18km 모래 해변이 함께 있습니다.', 'The ruins of the capital of the Lycian League beside an 18 km sand beach where sea turtles nest.', 'Patara Ancient City', 180, 300, group=DAY, n=MUZE),
      ],
      hubs="    air: [['Dalaman (DLM)', '달라만 공항 (DLM)', '약 2시간 30분|about 2.5 hours'], ['Antalya (AYT)', '안탈리아 공항 (AYT)', '약 3시간 30분|about 3.5 hours']],\n    bus: [['Kaş Otogarı', '카쉬 버스터미널']],\n    port: [['Kaş Limanı', '카쉬 항구', '메이스(카스텔로리조)행|to Meis (Kastellorizo)']],\n",
      itinerary={'days': [['', 2, 1]], 'trips': [['케코바 보트|Kekova boat', 3], ['카푸타시 해변|Kaputaş', 4], ['메이스섬|Meis', 5], ['파타라|Patara', 6]]},
      season='5~6월과 9~10월이 좋습니다. 다이빙과 보트 투어는 여름에 가장 많습니다.|May–June and September–October are best; diving and boat trips run most in summer.',
      stay=[('카쉬 시내', 'Kaş town', 'Kaş', '걸어서 다니기|Walkable', '항구와 식당, 보트 투어 출발지가 모두 걸어서 가깝습니다.|The harbour, restaurants and boat departures are all on foot.'),
            ('추쿠르바으 반도', 'Çukurbağ peninsula', 'Çukurbağ Yarımadası', '바다 전망|Sea views', '시내 서쪽 반도의 호텔들로 바다로 바로 들어갑니다. 시내까지는 차나 택시가 필요합니다.|Hotels on the peninsula west of town with direct sea access; you need a car or taxi to town.')],
      routes=R("  r('fethiye', 'kas', 'bus', 120),\n  r('antalya', 'kas', 'bus', 210),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi', 'ferry'], ko='마을은 걸어서 다니고, 해변과 유적은 돌무시나 택시, 섬은 배로 갑니다.', en='Walk the town; take a dolmuş or taxi to beaches and ruins, and a boat to the islands.')),

    C(id='olympos', after='kas', ko='올림포스·치랄르', en='Olympos & Çıralı', native='Olimpos · Çıralı', lat=36.4100, lng=30.4770,
      blurb=['안탈리아 남서쪽 해안 숲 속의 두 마을. 개울을 따라 숲에 묻힌 고대 올림포스 유적이 해변까지 이어지고, 밤엔 산비탈에서 꺼지지 않는 불꽃 키메라를 보며, 바다거북이 알을 낳는 치랄르 해변에서 쉽니다.',
             'Two villages in the coastal forest south-west of Antalya: the ancient ruins of Olympos run through the woods along a stream to the beach, the never-dying flames of the Chimaera burn on the hillside at night, and Çıralı beach is a sea-turtle nesting ground.'],
      highlights=[
          H('치랄르 해변', 'Çıralı Beach', '3km 자갈 해변으로, 붉은바다거북이 알을 낳는 보호 구역이라 대형 호텔이 없습니다.', 'A 3 km pebble beach and loggerhead turtle nesting site, protected from large hotels.', 'Çıralı Beach', 120, 240,
            n='5~10월 산란철엔 밤에 해변 출입과 조명이 제한됩니다.|During nesting season (May–October) beach access and lights are restricted at night.'),
          H('올림포스 고대 도시', 'Olympos ancient city', '개울을 따라 숲에 묻힌 리키아 도시 유적으로, 무덤과 신전 문, 비잔틴 성벽을 지나 해변으로 나갑니다.', 'Lycian city ruins buried in the woods along a stream, passing tombs, a temple gate and Byzantine walls on the way to the beach.', 'Olympos Ancient City', 120, 180, n=MUZE),
          H('키메라 (얀아르타시)', 'Chimaera (Yanartaş)', '바위틈에서 새어 나오는 천연가스가 수천 년째 타오르는 불꽃으로, 해 진 뒤 30분쯤 산길을 올라 봅니다.', 'Flames fed by natural gas seeping from the rocks, burning for thousands of years; walk 30 minutes uphill after dark to see them.', 'Chimaera Yanartaş', 90, 120,
            n='입장료가 있고 길이 돌계단이라 손전등과 운동화를 챙기세요.|Small entry fee; the path is stone steps, so bring a torch and trainers.'),
          H('파셀리스', 'Phaselis', '세 개의 항구를 가진 고대 도시로, 소나무 숲 사이 대리석 거리와 수도교, 작은 만이 있습니다.', 'An ancient city with three harbours, its marble street, aqueduct and little coves among pine woods.', 'Phaselis Ancient City', 90, 120, group=DAY, n=MUZE),
          H('타흐탈르산 케이블카', 'Mount Tahtalı cable car', '해안에서 해발 2,365m 정상까지 오르는 케이블카로, 지중해 해안선이 한눈에 보입니다.', 'A cable car from the coast to the 2,365 m summit, with views along the Mediterranean shore.', 'Olympos Teleferik', 90, 120, group=DAY,
            n='유료이며 바람이 세면 운행이 멈춥니다.|Ticketed; stops in high wind.'),
      ],
      hubs="    air: [['Antalya (AYT)', '안탈리아 공항 (AYT)', '약 1시간 30분|about 1.5 hours']],\n    bus: [['Olimpos/Çıralı yol ağzı', '올림포스·치랄르 갈림길 정류장', '안탈리아-카쉬 버스 하차 후 미니버스|get off the Antalya–Kaş bus, then a minibus']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['파셀리스|Phaselis', 4], ['타흐탈르 케이블카|Tahtalı cable car', 5]]},
      season='5~6월과 9~10월이 좋습니다. 7~8월은 덥고 거북이 산란철입니다.|May–June and September–October are best; July and August are hot and nesting season.',
      stay=[('치랄르', 'Çıralı', 'Çıralı', '조용한 해변 마을|Quiet beach village', '과수원 사이 펜션이 많고 키메라까지 걸어갈 수 있습니다.|Many guesthouses among orchards, with the Chimaera within walking distance.'),
            ('올림포스 계곡', 'Olympos valley', 'Olympos', '트리하우스 숙소|Treehouse lodges', '유적 입구 근처의 나무집 숙소들로, 배낭여행자가 많습니다.|Treehouse lodges near the ruins’ entrance, popular with backpackers.')],
      routes=R("  r('antalya', 'olympos', 'bus', 90, { n: '갈림길에서 미니버스 환승|change to a minibus at the turn-off' }),\n  r('olympos', 'kas', 'bus', 150),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을과 유적, 해변은 걸어서 다니고, 큰길까지는 미니버스나 택시를 탑니다.', en='Walk between the village, ruins and beach; a minibus or taxi links to the main road.')),

    C(id='alanya', after='olympos', ko='알라니아', en='Alanya', native='Alanya', lat=36.5444, lng=31.9954,
      blurb=['지중해 동쪽 해안의 휴양 도시. 바다로 튀어나온 바위 곶 위에 셀주크 시대 성채가 서고, 항구의 붉은 탑과 조선소, 성 아래 클레오파트라 해변이 있습니다.',
             'A resort town on the eastern Mediterranean coast, with a Seljuk citadel on a rocky headland, the Red Tower and shipyard by the harbour, and Cleopatra Beach below the castle.'],
      highlights=[
          H('붉은 탑', 'Red Tower', '1226년 셀주크 술탄이 항구를 지키려 세운 팔각 붉은 벽돌 탑으로, 안에 작은 민속 전시가 있습니다.', 'The octagonal red-brick tower built in 1226 by a Seljuk sultan to guard the harbour, with a small ethnographic display inside.', 'Kızılkule Alanya', 30, 45, n=MUZE),
          H('셀주크 조선소', 'Seljuk Shipyard (Tersane)', '바위 해안에 아치 다섯 개를 판 13세기 조선소로, 붉은 탑에서 성벽 길로 이어집니다.', 'A 13th-century shipyard of five arches cut into the rocky shore, linked to the Red Tower by a walk along the walls.', 'Tersane Alanya', 20, 30, n=MUZE),
          H('알라니아 성', 'Alanya Castle', '바다 위 250m 곶을 둘러싼 셀주크 성벽과 안쪽 성채로, 지중해와 해변 양쪽이 내려다보입니다.', 'Seljuk walls ringing a headland 250 m above the sea, with an inner citadel looking down on the beaches either side.', 'Alanya Castle', 90, 120,
            n=J2('케이블카나 버스로 오르면 편합니다.|Easiest reached by cable car or bus.', MUZE)),
          H('다믈라타시 동굴', 'Damlataş Cave', '해변 바로 옆 종유석 동굴로, 습한 공기가 호흡기에 좋다는 이야기로 알려졌습니다.', 'A stalactite cave right by the beach, known for its humid air said to help breathing.', 'Damlataş Cave', 30, 45),
          H('클레오파트라 해변', 'Cleopatra Beach', '성 서쪽 아래로 길게 이어지는 고운 모래 해변입니다.', 'A long beach of fine sand beneath the castle’s western side.', 'Cleopatra Beach Alanya', 120, 180),
      ],
      hubs="    air: [['Gazipaşa–Alanya (GZP)', '가지파샤-알라니아 공항 (GZP)', '약 40분|about 40 min'], ['Antalya (AYT)', '안탈리아 공항 (AYT)', '약 2시간|about 2 hours']],\n    bus: [['Alanya Otogarı', '알라니아 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3, 4, 5]]},
      season='4~6월과 9~11월이 좋습니다. 겨울에도 따뜻해 장기 체류객이 많습니다.|April–June and September–November are best; mild winters draw long-stay visitors.',
      stay=[('클레오파트라 해변', 'Cleopatra Beach', 'Cleopatra Beach Alanya', '해변과 성 가까이|By the beach and castle', '해변과 케이블카, 다믈라타시가 걸어서 가깝습니다.|The beach, cable car and Damlataş are on foot.'),
            ('항구 주변', 'Harbour area', 'Alanya Harbour', '식당·밤 문화|Dining, nightlife', '붉은 탑과 항구 식당이 가깝고 밤늦게까지 붐빕니다.|Close to the Red Tower and harbour restaurants; lively until late.')],
      routes=R("  r('antalya', 'alanya', 'bus', 150),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내와 해변은 걸어서 다니고, 성은 케이블카나 시내버스로 오릅니다.', en='Walk the town and beaches; ride the cable car or a city bus up to the castle.')),

    C(id='ayvalik', after='izmir', ko='아이발르크 (쿤다섬)', en='Ayvalık (Cunda)', native='Ayvalık', lat=39.3183, lng=26.6936,
      blurb=['북에게해의 올리브 마을. 옛 그리스인 돌집 골목과 교회를 고친 박물관, 올리브유 공장 건물이 남아 있고, 다리로 이어진 쿤다섬에서 해산물을 먹고 해 질 녘 셰이탄 소프라스에 오릅니다.',
             'An olive town on the northern Aegean, with the stone lanes of old Greek houses, a church turned museum and old olive-oil factory buildings; cross the bridge to Cunda Island for seafood, and climb Şeytan Sofrası at sunset.'],
      highlights=[
          H('아이발르크 구시가', 'Ayvalık old town', '옛 그리스인 돌집과 교회 사이 골목으로, 목요일엔 큰 장이 섭니다.', 'Lanes between old Greek stone houses and churches, with a big market on Thursdays.', 'Ayvalık Çarşı', 120, 180),
          H('탁시야르히스 기념 박물관', 'Taksiyarhis Memorial Museum', '19세기 그리스 정교회 성당을 고친 박물관으로, 생선 비늘에 그린 성화 등이 있습니다.', 'A 19th-century Greek Orthodox church turned museum, with icons including one painted on fish scales.', 'Taksiyarhis Anıt Müzesi', 30, 45, n=MUZE),
          H('셰이탄 소프라스', 'Şeytan Sofrası', '남쪽 언덕 위 전망대로, 섬이 흩어진 바다 너머로 해가 지는 모습이 유명합니다.', 'A hilltop viewpoint to the south, famous for sunsets over the island-studded sea.', 'Şeytan Sofrası', 30, 45),
          H('쿤다섬 (알리베이)', 'Cunda Island (Alibey)', '다리로 이어진 섬의 옛 그리스인 마을로, 바닷가 해산물 식당과 언덕 위 풍차가 있습니다.', 'The old Greek village on an island linked by a bridge, with waterside seafood restaurants and a windmill on the hill.', 'Cunda Island', 180, 240, group=DAY),
          H('사름사클르 해변', 'Sarımsaklı Beach', '시내 남쪽의 긴 모래 해변으로, 물이 얕아 가족 여행객이 많습니다.', 'A long sandy beach south of town with shallow water, popular with families.', 'Sarımsaklı Beach', 120, 180, group=DAY),
      ],
      hubs="    air: [['Balıkesir Koca Seyit (EDO)', '에드레미트 공항 (EDO)', '약 1시간|about 1 hour'], ['İzmir Adnan Menderes (ADB)', '이즈미르 공항 (ADB)', '약 2시간 30분|about 2.5 hours']],\n    bus: [['Ayvalık Otogarı', '아이발르크 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['쿤다섬|Cunda Island', 4], ['사름사클르 해변|Sarımsaklı', 5]]},
      season='5~6월과 9~10월이 좋습니다. 올리브 수확은 가을~초겨울입니다.|May–June and September–October are best; the olive harvest runs from autumn into early winter.',
      stay=[('아이발르크 구시가', 'Ayvalık old town', 'Ayvalık', '분위기|Atmosphere', '돌집을 고친 부티크 숙소가 많고 식당과 장터가 가깝습니다.|Many boutique stays in restored stone houses, near restaurants and the market.'),
            ('쿤다섬', 'Cunda Island', 'Cunda Island', '바닷가|By the sea', '해산물 식당 바로 옆이라 저녁이 즐겁습니다. 시내까지 버스나 배로 갑니다.|Right by the seafood restaurants; buses and boats run to town.')],
      routes=R("  r('izmir', 'ayvalik', 'bus', 150),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi', 'ferry'], ko='구시가는 걸어서 다니고, 쿤다섬과 해변은 시내버스나 배를 탑니다.', en='Walk the old town; take a city bus or boat to Cunda and the beaches.')),

    C(id='canakkale', after='bursa', ko='차나칼레 (트로이·갈리폴리)', en='Çanakkale (Troy & Gallipoli)', native='Çanakkale', lat=40.1553, lng=26.4142,
      blurb=['다르다넬스 해협의 항구 도시. 바닷가 산책로와 오스만 성채가 시내에 있고, 남쪽으로 트로이 유적과 트로이 박물관, 해협 건너로 1915년 갈리폴리 전투의 전적지를 다녀옵니다.',
             'A port on the Dardanelles with a seafront promenade and an Ottoman fortress in town; to the south lie the ruins of Troy and the Troy Museum, and across the strait the battlefields of the 1915 Gallipoli campaign.'],
      highlights=[
          H('해안 산책로와 트로이 목마', 'Seafront & Trojan Horse', '해협을 따라 걷는 산책로로, 영화 ‘트로이’에 쓰인 목마 모형이 서 있습니다.', 'A promenade along the strait, with the wooden horse used in the film “Troy”.', 'Trojan Horse Çanakkale', 30, 45),
          H('시계탑과 아이나르 차르시', 'Clock tower & Aynalı Çarşı', '1897년 시계탑 옆 옛 시장 골목으로, 카페와 기념품 가게가 모여 있습니다.', 'The old market lane beside the clock tower of 1897, with cafés and souvenir shops.', 'Aynalı Çarşı Çanakkale', 30, 45),
          H('치멘리크 성과 해군 박물관', 'Çimenlik Castle & Naval Museum', '1462년 메흐메트 2세가 쌓은 해협 성채와, 기뢰 부설함 누스레트호 복제선이 있는 해군 박물관입니다.', 'The strait fortress built by Mehmed II in 1462 and a naval museum with a replica of the minelayer Nusret.', 'Çimenlik Kalesi', 45, 60),
          H('트로이 유적', 'Troy', '호메로스의 트로이 전쟁 무대로 알려진 언덕으로, 4천 년 동안 겹겹이 쌓인 아홉 도시층이 세계유산입니다.', 'The mound known as the setting of Homer’s Trojan War, a World Heritage Site with nine city layers spanning 4,000 years.', 'Troy Ancient City', 120, 180, group=DAY,
            n=J2('차나칼레에서 남쪽 약 30km, 돌무시로 갑니다.|About 30 km south of Çanakkale by dolmuş.', MUZE)),
          H('트로이 박물관', 'Troy Museum', '유적 입구 근처의 현대 박물관으로, 트로이와 주변 유적에서 나온 유물을 층별로 보여 줍니다.', 'A modern museum near the site entrance, presenting finds from Troy and the surrounding area layer by layer.', 'Troy Museum', 60, 90, group=DAY, n=MUZE),
          H('갈리폴리 전적지', 'Gallipoli battlefields', '1915년 연합군과 오스만군이 싸운 반도로, 앤잭 코브와 기념비, 묘지가 이어진 역사 공원입니다.', 'The peninsula where Allied and Ottoman forces fought in 1915, now a historical park of Anzac Cove, memorials and cemeteries.', 'Anzac Cove', 300, 480, group=DAY,
            n='차나칼레에서 페리로 에제아바트에 건너가 투어나 차로 돕니다.|Take the ferry to Eceabat and tour by car or with a guide.'),
      ],
      hubs="    air: [['Çanakkale (CKZ)', '차나칼레 공항 (CKZ)']],\n    bus: [['Çanakkale Otogarı', '차나칼레 버스터미널']],\n    port: [['Çanakkale İskelesi', '차나칼레 선착장', '에제아바트·킬리트바히르행|to Eceabat and Kilitbahir']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['트로이|Troy', 4, 5], ['갈리폴리|Gallipoli', 6]]},
      season='4~6월과 9~10월이 좋습니다. 4월 25일 앤잭 데이엔 갈리폴리가 매우 붐빕니다.|April–June and September–October are best; Gallipoli is very crowded around Anzac Day (25 April).',
      stay=[('해안 산책로 근처', 'Near the seafront', 'Çanakkale Kordon', '걸어서 다니기|Walkable', '선착장과 시계탑, 식당이 걸어서 가깝습니다.|The ferry pier, clock tower and restaurants are on foot.'),
            ('에제아바트', 'Eceabat', 'Eceabat', '갈리폴리 가까이|Near Gallipoli', '해협 건너 작은 마을로 전적지 투어가 여기서 떠납니다.|A small town across the strait where battlefield tours start.')],
      routes=R("  r('istanbul', 'canakkale', 'bus', 330),\n  r('canakkale', 'ayvalik', 'bus', 210),\n  r('bursa', 'canakkale', 'bus', 270),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi', 'ferry'], ko='시내는 걸어서 다니고, 트로이는 돌무시, 갈리폴리는 페리와 투어를 이용합니다.', en='Walk the town; take a dolmuş to Troy, and the ferry plus a tour to Gallipoli.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
