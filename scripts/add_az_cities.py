#!/usr/bin/env python3
"""Azerbaijan step 2 (2026-11-20, user picked every proposed city): Quba (Khinalug), Shamakhi, Lahij, Qakh (Ilisu), Ganja
(Goygol), Naftalan, Lankaran. Reuses the batch-3 writer (add_daytrip_places3.main); the country city groups are written
afterwards.
MOFA (0404.go.kr detail 335): level 3 for Aghdam, Fuzuli, Jabrayil, Zangilan, Gubadly, Lachin, Kelbajar and the
Nakhchivan–Armenia border area; level 4 within 5 km of the Armenian border. Distances against the OSM boundaries: Lake
Goygol 12.7 km from Kelbajar district, Naftalan 30.9 km from Aghdam district, Ganja 55.7 km and Naftalan 77 km from
Armenia; the rest are 125 km or more away. None of the places is in a level-3/4 area, so no suffix. Times are rounded
typical values. Run once.
After the photo picks (user decision) Naftalan was removed again (no usable photos of its sights) and the Ganja
Bottle House dropped (Ganja h4/h5 renumbered to h3/h4)."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
MOSQUE = '입장은 무료입니다. 어깨와 무릎을 가리고, 여성은 스카프로 머리를 가립니다. 기도 시간엔 들어가기 어렵습니다.|Free; cover shoulders and knees, women cover their hair, and visits pause at prayer times.'
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='  // —— ua ——\n  kyiv: {', itin_file='itinerary-south.ts', itin_before='  pristina: { days:',
              visit_file='visit-east.ts', visit_after=r"^  'gabala-h\d+': v\(.*\),\n", stay_before='  gjakova: [', apps='',
              transit_before="  'san-marino-city': {", places=None, daytrips=[])
LAST = r"^  r\('sheki', 'gabala', 'bus', 105\),\n"
GYD = "GYD()"
GBB = "['Gabala (GBB)', '가발라 공항 (GBB)', '가발라|Gabala']"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'az'
    return d


def H(ko, en, dko, den, maps, mn, mx, n=None, group=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    d = dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)
    if group:
        d['group'] = group
    return d


def R(*lines):
    return [('routes-east.ts', LAST, ''.join(lines))]


WALK = dict(modes=['walk', 'bus', 'taxi'])

CITIES = [
    C(id='quba', after='gabala', ko='구바 (히날루그)', en='Quba (Khinalug)', native='Quba', lat=41.3611, lng=48.5134,
      blurb=['대캅카스 산기슭의 사과 고장. 강 건너편에 산악 유대인이 모여 사는 ‘붉은 마을’이 있고, 산길로 약 2시간 오르면 해발 2,000m가 넘는 곳에 자기 언어를 지켜 온 옛 마을 히날루그가 있습니다.',
             'An apple-growing town in the foothills of the Greater Caucasus. Across the river is the Red Settlement of the Mountain Jews, and about two hours up a mountain road, above 2,000 m, is Khinalug, an ancient village with its own language.'],
      highlights=[
          H('붉은 마을 (크르미즈 게세베)', 'Red Settlement (Qırmızı Qəsəbə)', '구다알차이 강 건너 산악 유대인 마을로, 회당과 옛 집들이 남아 있습니다.', 'The Mountain Jewish town across the Qudyalchay river, with its synagogues and old houses.', 'Qırmızı Qəsəbə', 60, 90),
          H('구바 금요 모스크', 'Quba Juma Mosque', '시내 중심의 19세기 붉은 벽돌 모스크로, 팔각형 돔이 눈에 띕니다.', 'A 19th-century red-brick mosque in the town centre, with a distinctive octagonal dome.', 'Quba Juma Mosque', 15, 20, n=MOSQUE),
          H('히날루그 마을', 'Khinalug', '해발 2,000m가 넘는 산 위의 돌집 마을로, 주민들이 고유 언어 히날루그어를 씁니다. 가는 길의 협곡 풍경도 볼거리입니다.', 'A stone village above 2,000 m whose people speak their own Khinalug language; the gorge road up is a sight in itself.', 'Khinalug', 120, 180, group=DAY,
            n='구바에서 서쪽 약 55km, 택시나 사륜구동차로 편도 약 2시간입니다. 겨울엔 눈으로 길이 막힐 수 있습니다.|About 55 km west of Quba, some two hours each way by taxi or 4x4; snow can close the road in winter.'),
      ],
      hubs=f"    air: [{GYD}],\n    bus: [['Quba Avtovağzalı', '구바 버스터미널']],\n",
      itinerary={'days': [['', 2, 1]], 'trips': [['히날루그|Khinalug', 3]]},
      season='5~10월이 좋습니다. 히날루그 길은 겨울에 눈으로 막히기도 합니다. 가을엔 사과 수확철입니다.|May–October is best; the Khinalug road can be snowed in during winter, and autumn is apple harvest.',
      stay=[('시내 중심', 'Town centre', 'Quba', '히날루그 거점|Base for Khinalug', '시내와 숲 속 리조트에 숙소가 있고, 히날루그 마을엔 민박이 몇 곳 있습니다.|Hotels in town and forest resorts nearby; Khinalug itself has a few homestays.')],
      routes=R("  r('baku', 'quba', 'bus', 180),\n"),
      transit=dict(WALK, ko='시내와 붉은 마을은 걸어서 다니고, 히날루그는 택시나 사륜구동차를 빌립니다.', en='Walk the town and the Red Settlement; hire a taxi or 4x4 for Khinalug.')),

    C(id='shamakhi', after='quba', ko='샤마흐', en='Shamakhi', native='Şamaxı', lat=40.6314, lng=48.6414,
      blurb=['옛 쉬르반 왕국의 수도. 8세기에 처음 세운 금요 모스크와 쉬르반 칸들의 무덤 ‘일곱 돔’이 남아 있고, 바쿠에서 2시간 거리라 라히지로 가는 길에 들르기 좋습니다.',
             'The old capital of Shirvan, with a Juma Mosque first founded in the 8th century and the Yeddi Gumbaz (Seven Domes) tombs of the Shirvan khans; two hours from Baku and a good stop on the way to Lahij.'],
      highlights=[
          H('샤마흐 금요 모스크', 'Shamakhi Juma Mosque', '743년에 처음 세운 캅카스에서 손꼽히게 오래된 모스크로, 여러 번 지진을 겪고 다시 지었습니다.', 'First founded in 743 and among the oldest mosques in the Caucasus, rebuilt several times after earthquakes.', 'Shamakhi Juma Mosque', 20, 30, n=MOSQUE),
          H('일곱 돔 (예디 굼베즈)', 'Yeddi Gumbaz', '시내 남쪽 언덕의 쉬르반 칸 가족 묘역으로, 돔 무덤들과 옛 묘비가 있습니다.', 'The burial ground of the Shirvan khans on a hill south of town, with domed tombs and old gravestones.', 'Yeddi Gumbaz', 30, 45),
          H('디리 바바 영묘', 'Diri Baba Mausoleum', '15세기 초 바위 절벽에 붙여 지은 2층 영묘로, 마라자 마을에 있습니다.', 'A two-storey early-15th-century mausoleum built into a rock face in the village of Maraza.', 'Diri Baba Mausoleum', 30, 45, group=DAY,
            n='샤마흐에서 바쿠 쪽으로 약 20km, 오가는 길에 들릅니다.|About 20 km towards Baku, a stop on the way.'),
      ],
      hubs=f"    air: [{GYD}],\n    bus: [['Şamaxı Avtovağzalı', '샤마흐 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3]]},
      season='4~6월과 9~10월이 좋습니다. 주변이 포도 산지라 가을엔 와이너리가 붐빕니다.|April–June and September–October are best; the area is wine country, and wineries are busy in autumn.',
      stay=[('바쿠에서 다녀오기', 'Base in Baku', 'Baku', '거점에서 다녀오기|Day trip from a base', '바쿠에서 버스로 약 2시간이라 당일치기가 많습니다. 시 외곽 산기슭에 리조트가 있습니다.|About two hours by bus from Baku, so most come for the day; there are resorts in the hills outside town.')],
      routes=R("  r('baku', 'shamakhi', 'bus', 120),\n"),
      transit=dict(WALK, ko='시내는 걸어서 다니고, 디리 바바 영묘는 바쿠를 오가는 버스나 택시로 들릅니다.', en='Walk the town; stop at Diri Baba by taxi or on the Baku bus.')),

    C(id='lahij', after='shamakhi', ko='라히지', en='Lahij', native='Lahıc', lat=40.8483, lng=48.3947,
      blurb=['기르디만차이 계곡 깊숙한 산마을. 자갈 깐 골목을 따라 대대로 구리 그릇을 두드리는 장인들의 공방이 늘어서 있고, 주민들은 페르시아어 계열의 타트어를 씁니다.',
             'A mountain village deep in the Girdimanchay valley, where cobbled lanes are lined with the workshops of coppersmiths who have hammered pots for generations; its people speak Tat, a Persian language.'],
      highlights=[
          H('구리 장인 거리', 'Coppersmiths’ street', '마을 중심 거리에 구리 공방과 기념품 가게가 이어지고, 장인이 일하는 모습을 볼 수 있습니다.', 'The main street of copper workshops and craft shops, where you can watch the smiths at work.', 'Lahıc', 60, 90),
          H('기르디만차이 계곡', 'Girdimanchay valley', '이스마일리에서 라히지로 오르는 좁은 계곡 길로, 절벽과 강 풍경이 이어집니다.', 'The narrow road up the valley from Ismayilli to Lahij, past cliffs and the river.', 'Girdimançay', 30, 60),
      ],
      hubs=f"    air: [{GYD}, {GBB}],\n",
      itinerary={'days': [['', 1, 2]]},
      season='5~10월이 좋습니다. 계곡 길은 비가 많이 오면 낙석 위험이 있습니다.|May–October is best; heavy rain can bring rockfalls on the valley road.',
      stay=[('마을 안', 'In the village', 'Lahıc', '마을 민박|Village guesthouses', '옛 돌집 민박과 작은 호텔이 있습니다. 바쿠에서 3시간 반쯤 걸려 하룻밤 묵는 여행자가 많습니다.|Old stone-house guesthouses and a small hotel; about three and a half hours from Baku, so many stay a night.')],
      routes=R("  r('baku', 'lahij', 'bus', 210, { n: '이스마일리에서 택시나 미니버스로 갈아탐|change to a taxi or minibus at Ismayilli' }),\n  r('shamakhi', 'lahij', 'mixed', 90, { n: '택시|taxi' }),\n"),
      transit=dict(modes=['walk', 'taxi'], ko='마을은 걸어서 다닙니다. 이스마일리에서 택시나 미니버스로 오갑니다.', en='Walk the village; taxis and minibuses run from Ismayilli.')),

    C(id='qakh', after='sheki', ko='카흐 (일리수)', en='Qakh (Ilisu)', native='Qax', lat=41.4183, lng=46.9203,
      blurb=['셰키에서 서쪽으로 40분, 대캅카스 숲 아래의 작은 도시. 산골짜기의 옛 일리수 술탄국 마을과 폭포, 옛 캅카스 알바니아 바실리카 쿰, 숲속 조지아 교회 쿠르무흐로 다녀옵니다.',
             'A small town under the forests of the Greater Caucasus, 40 minutes west of Sheki, and the base for the old Ilisu Sultanate village and its waterfall, the Caucasian Albanian basilica at Qum and the Georgian church of Kurmukhi in the woods.'],
      highlights=[
          H('일리수 마을', 'Ilisu', '옛 일리수 술탄국의 산골 마을로, 방어 탑과 돌다리, 숲길 끝의 폭포가 있습니다.', 'The mountain village of the old Ilisu Sultanate, with a defensive tower, stone bridges and a waterfall at the end of a forest path.', 'İlisu', 120, 180, group=DAY,
            n='카흐에서 북쪽 약 20km, 택시로 갑니다.|About 20 km north of Qakh by taxi.'),
          H('쿠르무흐 교회', 'Kurmukhi Church', '일리수 가는 길 숲속의 성 게오르기 교회로, 조지아계 주민의 순례지입니다.', 'The Church of St George in the woods on the road to Ilisu, a pilgrimage place for the local Georgian community.', 'Kurmukhi Church', 30, 45, group=DAY),
          H('쿰 바실리카', 'Qum basilica', '5~6세기 캅카스 알바니아 바실리카 유적으로, 쿰 마을에 남아 있습니다.', 'The ruins of a 5th–6th-century Caucasian Albanian basilica in the village of Qum.', 'Qum basilica', 30, 45, group=DAY,
            n='카흐에서 남동쪽 약 15km입니다.|About 15 km south-east of Qakh.'),
      ],
      hubs=f"    air: [{GBB}, {GYD}],\n    bus: [['Qax Avtovağzalı', '카흐 버스터미널']],\n",
      itinerary={'days': [['일리수|Ilisu', 2, 1]], 'trips': [['쿰 바실리카|Qum', 3]]},
      season='5~10월이 좋습니다. 일리수 폭포 숲길은 비 온 뒤 미끄럽습니다.|May–October is best; the forest path to the Ilisu waterfall is slippery after rain.',
      stay=[('일리수 마을', 'Ilisu village', 'İlisu', '산 풍경·민박|Mountain views, guesthouses', '마을과 계곡에 민박과 리조트가 있습니다. 셰키에서 다녀오는 여행자도 많습니다.|Guesthouses and resorts in the village and valley; many also visit from Sheki.')],
      routes=R("  r('sheki', 'qakh', 'bus', 45),\n  r('baku', 'qakh', 'bus', 390),\n"),
      transit=dict(modes=['walk', 'taxi', 'bus'], ko='일리수와 근교는 택시를 하루 빌려 도는 게 편합니다.', en='Hiring a taxi for the day is the easiest way to Ilisu and around.')),

    C(id='ganja', after='qakh', ko='간자', en='Ganja', native='Gəncə', lat=40.6828, lng=46.3606,
      blurb=['아제르바이잔 제2의 도시. 12세기 시인 니자미의 영묘와 17세기 샤 압바스 모스크, 걷기 좋은 자바드 칸 거리가 있고, 남쪽 산속의 맑은 호수 괴이괼로 다녀옵니다.',
             'Azerbaijan’s second city, with the mausoleum of the 12th-century poet Nizami, the 17th-century Shah Abbas Mosque and pedestrian Javad Khan Street; Lake Goygol lies in the mountains to the south.'],
      highlights=[
          H('샤 압바스 모스크', 'Shah Abbas Mosque', '1606년에 지은 붉은 벽돌 금요 모스크로, 옛 대상 숙소와 목욕탕이 함께 있는 광장에 있습니다.', 'A red-brick Juma mosque of 1606 on a square with an old caravanserai and bathhouse.', 'Shah Abbas Mosque Ganja', 20, 30, n=MOSQUE),
          H('자바드 칸 거리', 'Javad Khan Street', '옛 건물을 단장한 보행자 거리로, 카페와 식당이 모여 있습니다.', 'A pedestrian street of restored old buildings, lined with cafés and restaurants.', 'Javad Khan Street Ganja', 30, 60),
          H('병 집', 'Bottle House', '1960년대 한 주민이 유리병 수만 개로 외벽을 장식한 집입니다.', 'A house whose walls a local man decorated with tens of thousands of glass bottles in the 1960s.', 'Bottle House Ganja', 15, 20),
          H('니자미 영묘', 'Nizami Mausoleum', '페르시아 문학의 대시인 니자미 간자비를 기리는 원통형 영묘로, 시 외곽 공원에 있습니다.', 'A cylindrical mausoleum honouring Nizami Ganjavi, a great poet of Persian literature, in a park on the edge of the city.', 'Nizami Mausoleum', 30, 45),
          H('괴이괼 호수', 'Lake Goygol', '1139년 지진으로 생긴 산속 호수로, 국립공원 숲에 둘러싸인 맑은 물빛이 아름답습니다.', 'A mountain lake formed by an earthquake in 1139, its clear water ringed by national-park forest.', 'Lake Goygol', 120, 180, group=DAY,
            n='간자에서 남쪽 약 50km, 택시로 편도 약 1시간입니다. 국립공원 입장료가 있습니다.|About 50 km south of Ganja, roughly an hour each way by taxi; national park fee.'),
      ],
      hubs=f"    air: [['Ganja (GNJ)', '간자 공항 (GNJ)'], {GYD}],\n    rail: [['Gəncə', '간자역']],\n    bus: [['Gəncə Avtovağzalı', '간자 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['괴이괼 호수|Lake Goygol', 5]]},
      season='4~6월과 9~10월이 좋습니다. 여름 시내는 무덥고, 괴이괼은 겨울에 길이 얼 수 있습니다.|April–June and September–October are best; summer is hot in town, and the Goygol road can ice up in winter.',
      stay=[('자바드 칸 거리 주변', 'Around Javad Khan Street', 'Javad Khan Street Ganja', '처음 가는 여행에 추천|Best for a first visit', '보행자 거리와 모스크가 걸어서 닿고 식당이 많습니다.|The pedestrian street and the mosque are on foot, with plenty of restaurants.')],
      routes=R("  r('baku', 'ganja', 'train', 300),\n  r('baku', 'ganja', 'bus', 360),\n  r('ganja', 'sheki', 'bus', 180),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='중심가는 걸어서 다니고, 니자미 영묘와 괴이괼은 택시를 탑니다.', en='Walk the centre; take a taxi to the Nizami Mausoleum and Lake Goygol.')),

    C(id='naftalan', after='ganja', ko='나프탈란', en='Naftalan', native='Naftalan', lat=40.5064, lng=46.8212,
      blurb=['치료용 기름 ‘나프탈란’ 온천으로 이름난 요양 도시. 검은 기름에 몸을 담그는 요양원들이 모여 있고, 고침을 받은 사람들이 두고 간 목발을 모아 둔 박물관이 있습니다. 간자에서 약 1시간입니다.',
             'A spa town known for naphthalan, a therapeutic oil: sanatoriums offer baths in the dark oil, and a museum displays crutches left behind by those who say they were cured. About an hour from Ganja.'],
      highlights=[
          H('나프탈란 기름 목욕', 'Naftalan oil baths', '요양원에서 데운 나프탈란 기름에 몸을 담그는 치료로, 대개 의사 상담 뒤 여러 날 받습니다.', 'Baths in warmed naphthalan oil at the sanatoriums, usually taken over several days after a doctor’s consultation.', 'Naftalan', 60, 120,
            n='요양원마다 예약이 필요하고, 건강 상태에 따라 받을 수 없을 수도 있습니다.|Book at a sanatorium; it may not suit some health conditions.'),
          H('나프탈란 역사 박물관', 'Naftalan History Museum', '목발 박물관이라고도 부르며, 치료를 받고 걸어 나간 사람들이 남긴 목발을 모아 두었습니다.', 'Also called the Museum of Crutches, displaying crutches left by patients who walked away after treatment.', 'Naftalan History Museum', 30, 45),
      ],
      hubs=f"    air: [['Ganja (GNJ)', '간자 공항 (GNJ)', '간자|Ganja'], {GYD}],\n",
      itinerary={'days': [['', 2, 1]]},
      season='요양원은 1년 내내 엽니다. 여름은 덥고 건조합니다.|The sanatoriums open all year; summers are hot and dry.',
      stay=[('요양원', 'Sanatoriums', 'Naftalan', '치료 숙박|Treatment stays', '대부분 숙박·식사·치료를 묶은 요양원에 머뭅니다.|Most stay in sanatoriums with board and treatment packages.')],
      routes=R("  r('ganja', 'naftalan', 'mixed', 60, { n: '택시나 미니버스|taxi or minibus' }),\n  r('baku', 'naftalan', 'bus', 330),\n"),
      transit=dict(modes=['walk', 'taxi'], ko='요양원과 박물관은 걸어서 닿고, 간자에서는 택시로 옵니다.', en='The sanatoriums and museum are walkable; come from Ganja by taxi.')),

    C(id='lankaran', after='naftalan', ko='랑케란', en='Lankaran', native='Lənkəran', lat=38.7536, lng=48.8511,
      blurb=['이란 국경 가까운 카스피해 남부 해안 도시. 차밭과 귤밭이 펼쳐진 아열대 기후에, 옛 요새 등대와 칸의 궁전이 남아 있고, 세계유산 히르카니아 숲을 지키는 히르칸 국립공원으로 다녀옵니다.',
             'A southern Caspian town near the Iranian border, subtropical with tea and citrus groves, an old fortress lighthouse and a khan’s palace; Hirkan National Park protects the World Heritage Hyrcanian forests nearby.'],
      highlights=[
          H('랑케란 등대와 요새 탑', 'Lankaran lighthouse & fortress tower', '옛 요새의 둥근 탑과 시내 등대로, 탑은 감옥으로 쓰인 적이 있습니다.', 'The round tower of the old fortress, once used as a prison, and the town’s lighthouse.', 'Lankaran Lighthouse', 20, 30),
          H('미르 무스타파 칸 궁전', 'Mir Mustafa Khan Palace', '20세기 초 지은 유럽풍 궁전으로, 지금은 지역 역사 박물관입니다.', 'An early-20th-century European-style palace that now houses the regional history museum.', 'Mir Mustafa Khan Palace', 45, 60),
          H('히르칸 국립공원', 'Hirkan National Park', '빙하기 이전부터 이어진 히르카니아 활엽수림으로, 2023년 세계유산에 오른 숲을 걷습니다.', 'Hyrcanian broadleaf forest surviving since before the Ice Age, added to the World Heritage list in 2023, with walking trails.', 'Hirkan National Park', 120, 180, group=DAY,
            n='랑케란에서 남서쪽 약 25km, 택시로 갑니다.|About 25 km south-west of Lankaran by taxi.'),
      ],
      hubs=f"    air: [['Lankaran (LLK)', '랑케란 공항 (LLK)'], {GYD}],\n    rail: [['Lənkəran', '랑케란역']],\n    bus: [['Lənkəran Avtovağzalı', '랑케란 버스터미널']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['히르칸 국립공원|Hirkan National Park', 3]]},
      season='5~6월과 9~10월이 좋습니다. 여름은 습하고, 가을~겨울엔 비가 많습니다.|May–June and September–October are best; summers are humid, and autumn and winter are rainy.',
      stay=[('시내 중심', 'Town centre', 'Lənkəran', '처음 가는 여행에 추천|Best for a first visit', '등대와 박물관, 식당이 걸어서 닿습니다.|The lighthouse, museum and restaurants are on foot.')],
      routes=R("  r('baku', 'lankaran', 'bus', 240),\n  r('baku', 'lankaran', 'train', 300),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 히르칸 국립공원은 택시를 탑니다.', en='Walk the town; take a taxi to Hirkan National Park.')),
]

AZ_NEW = """    cityIds: ['baku', 'quba', 'shamakhi', 'lahij', 'sheki', 'gabala', 'qakh', 'ganja', 'naftalan', 'lankaran'],
    cityGroups: [
      { title: { ko: '바쿠와 동부', en: 'Baku & the east' }, cityIds: ['baku', 'quba', 'shamakhi', 'lahij'] },
      { title: { ko: '북서부', en: 'North-west' }, cityIds: ['sheki', 'gabala', 'qakh'] },
      { title: { ko: '서부', en: 'West' }, cityIds: ['ganja', 'naftalan'] },
      { title: { ko: '남부', en: 'South' }, cityIds: ['lankaran'] },
    ],
"""


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    k = rd('countries.ts')
    i = k.index("    id: 'az',")
    s = k.index('    cityIds: [', i)
    e = k.index('\n', s) + 1
    assert 'cityGroups' not in k[e:k.index("\n  },", e)]
    wr('countries.ts', k[:s] + AZ_NEW + k[e:])
