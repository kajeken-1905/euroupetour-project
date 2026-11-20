#!/usr/bin/env python3
"""Georgia step 2 (2026-11-18, user picked every proposed city): Mtskheta, Gori (Uplistsikhe), Akhaltsikhe (Vardzia),
Borjomi, Telavi (Kakheti), Mestia (Svaneti), Zugdidi. Reuses the batch-3 writer (add_daytrip_places3.main); the country
city groups are written afterwards. Times are rounded typical marshrutka/train values. Zugdidi notes the nearby
Abkhazia line (travel ban). Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
CHURCH = '입장은 무료입니다. 여성은 머리를 가리고 치마를 두르며, 남성은 반바지 차림을 피합니다(입구에 스카프가 있는 곳이 많습니다).|Free; women cover their hair and wear a skirt, men avoid shorts (wraps are often provided at the door).'
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='  sighnaghi: {\n    air', itin_file='itinerary-south.ts', itin_before='  skopje: {',
              visit_file='visit-east.ts', visit_after=r"^  'sighnaghi-h\d+': v\(.*\),\n", stay_before='  sighnaghi: [', apps='',
              transit_before='  sighnaghi: {\n    modes', places=None, daytrips=[])
LAST = r"^  r\('kutaisi', 'batumi', 'bus', 150, \{ n: MARSH \}\),\n"
TBS = "TBS()"
KUT = "['Kutaisi David the Builder (KUT)', '쿠타이시 공항 (KUT)', '쿠타이시|Kutaisi']"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'ge'
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


def J2(a, b):
    return a.split('|')[0] + ' ' + b.split('|')[0] + '|' + a.split('|')[1] + ' ' + b.split('|')[1]


DIDUBE = "fa: '디두베 버스터미널|Didube', n: MARSH"
WALK = dict(modes=['walk', 'bus', 'taxi'])

CITIES = [
    C(id='mtskheta', after='tbilisi', ko='므츠헤타', en='Mtskheta', native='მცხეთა', lat=41.8458, lng=44.7206,
      blurb=['두 강이 만나는 곳의 옛 수도이자 조지아 정교회의 중심. 예수의 옷이 묻혔다는 스베티츠호벨리 대성당과 언덕 위 즈바리 수도원이 세계유산이며, 트빌리시에서 30분이면 닿습니다.',
             'The ancient capital where two rivers meet and the heart of the Georgian Orthodox Church: Svetitskhoveli Cathedral, said to hold Christ’s robe, and the hilltop Jvari Monastery are World Heritage sites, 30 minutes from Tbilisi.'],
      highlights=[
          H('스베티츠호벨리 대성당', 'Svetitskhoveli Cathedral', '11세기 대성당으로, 예수의 옷이 묻혔다는 전설이 있고 조지아 왕들이 잠들어 있습니다.', 'An 11th-century cathedral where Christ’s robe is said to be buried, with the tombs of Georgian kings.', 'Svetitskhoveli Cathedral', 45, 60, n=CHURCH),
          H('삼타브로 수도원', 'Samtavro Monastery', '성 니노가 머물렀던 자리에 세운 수도원으로, 미리안 왕 부부의 무덤이 있습니다.', 'A convent on the spot where St Nino lived, with the tombs of King Mirian and his queen.', 'Samtavro Monastery', 20, 30, n=CHURCH),
          H('구시가 골목', 'Old town lanes', '대성당 주변 돌길에 기념품 가게와 식당, 와인 가게가 늘어섭니다.', 'Cobbled lanes around the cathedral lined with souvenir shops, restaurants and wine shops.', 'Arsukidze Street Mtskheta', 30, 45),
          H('즈바리 수도원', 'Jvari Monastery', '두 강이 합쳐지는 곳을 내려다보는 언덕 위 6세기 교회로, 므츠헤타 전경이 펼쳐집니다.', 'A 6th-century church on a hill above the confluence of two rivers, with a view over Mtskheta.', 'Jvari Monastery', 30, 45,
            n=J2('시내에서 택시로 15분쯤 올라갑니다.|About 15 minutes uphill by taxi.', CHURCH)),
          H('시오므그비메 수도원', 'Shio-Mgvime Monastery', '6세기 수도사들이 판 동굴과 교회가 있는 협곡 속 수도원입니다.', 'A monastery in a gorge with caves and churches cut by 6th-century monks.', 'Shio-Mgvime Monastery', 60, 90, group=DAY,
            n='므츠헤타에서 서쪽 약 10km, 택시로 갑니다.|About 10 km west of Mtskheta by taxi.'),
      ],
      hubs=f"    air: [{TBS}],\n    bus: [['Didube Bus Station Tbilisi', '디두베 버스터미널', '트빌리시 · 마르슈루트카 출발|Tbilisi · marshrutkas leave from here']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['시오므그비메|Shio-Mgvime', 5]]},
      season='4~6월과 9~10월이 좋습니다. 10월 14일 스베티츠호보바 축일엔 순례자가 많습니다.|April–June and September–October are best; pilgrims gather for Svetitskhovloba on 14 October.',
      stay=[('대성당 주변', 'Around the cathedral', 'Svetitskhoveli Cathedral', '조용한 저녁|Quiet evenings', '당일치기 손님이 떠난 뒤 조용한 구시가에서 묵습니다.|Stay in the old town once the day-trippers have gone.')],
      routes=R(f"  r('tbilisi', 'mtskheta', 'bus', 30, {{ {DIDUBE} }}),\n"),
      transit=dict(WALK, ko='구시가는 걸어서 다니고, 즈바리 수도원은 택시로 오릅니다.', en='Walk the old town; take a taxi up to Jvari.')),

    C(id='gori', after='mtskheta', ko='고리 (우플리스치헤)', en='Gori (Uplistsikhe)', native='გორი', lat=41.9842, lng=44.1158,
      blurb=['스탈린의 고향인 카르틀리 평원의 도시. 스탈린 박물관과 생가, 언덕 위 고리 요새가 있고, 근교에 3천 년 전부터 바위를 깎아 만든 동굴 도시 우플리스치헤가 있습니다.',
             'A town on the Kartli plain and Stalin’s birthplace, with the Stalin Museum and his childhood house and Gori Fortress on its hill; nearby is Uplistsikhe, a cave town carved into the rock over 3,000 years.'],
      highlights=[
          H('스탈린 박물관', 'Stalin Museum', '스탈린의 생가와 그가 타던 객차가 함께 있는 소련 시대 그대로의 박물관입니다.', 'A museum kept much as it was in Soviet times, with Stalin’s birthplace and his railway carriage.', 'Stalin Museum Gori', 60, 90),
          H('고리 요새', 'Gori Fortress', '시내 한가운데 언덕 위 중세 요새로, 평원과 코카서스산맥이 보입니다.', 'A medieval fortress on a hill in the middle of town, with views over the plain to the Caucasus.', 'Gori Fortress', 30, 45),
          H('우플리스치헤', 'Uplistsikhe', '기원전부터 바위를 깎아 만든 동굴 도시로, 극장과 신전, 와인 저장고 자리가 남아 있습니다.', 'A cave town carved into the rock from before Christ, with the remains of a theatre, temples and wine stores.', 'Uplistsikhe', 90, 120, group=DAY,
            n='고리에서 동쪽 약 10km, 택시로 갑니다. 유료이고 그늘이 없습니다.|About 10 km east of Gori by taxi; ticketed, with no shade.'),
          H('아테니 시오니 교회', 'Ateni Sioni Church', '협곡 속 7세기 교회로, 11세기 벽화가 잘 남아 있습니다.', 'A 7th-century church in a gorge with well-preserved 11th-century frescoes.', 'Ateni Sioni', 30, 45, group=DAY,
            n=J2('고리에서 남쪽 약 12km입니다.|About 12 km south of Gori.', CHURCH)),
      ],
      hubs=f"    air: [{TBS}],\n    rail: [['Gori', '고리역', '트빌리시행 열차|trains to Tbilisi']],\n    bus: [['Gori Bus Station', '고리 버스터미널']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['우플리스치헤|Uplistsikhe', 3], ['아테니 시오니|Ateni Sioni', 4]]},
      season='4~6월과 9~10월이 좋습니다. 여름 우플리스치헤는 햇볕이 뜨겁습니다.|April–June and September–October are best; Uplistsikhe is very sunny in summer.',
      stay=[('시내 중심', 'Town centre', 'Gori', '걸어서 다니기|Walkable', '박물관과 요새가 걸어서 가깝습니다. 트빌리시에서 당일치기도 많이 합니다.|The museum and fortress are on foot; many visit as a day trip from Tbilisi.')],
      routes=R(f"  r('tbilisi', 'gori', 'bus', 75, {{ {DIDUBE} }}),\n"),
      transit=dict(WALK, ko='시내는 걸어서 다니고, 우플리스치헤와 아테니는 택시를 이용합니다.', en='Walk the town; take a taxi to Uplistsikhe and Ateni.')),

    C(id='akhaltsikhe', after='gori', ko='아할치헤 (바르지아)', en='Akhaltsikhe (Vardzia)', native='ახალციხე', lat=41.6390, lng=42.9826,
      blurb=['남부 삼츠헤-자바헤티의 중심 도시. 복원한 라바티 성채가 언덕 위에 서 있고, 여기서 절벽에 수백 개의 방을 판 12세기 동굴 수도원 바르지아와 헤르트비시 요새로 다녀옵니다.',
             'The main town of Samtskhe-Javakheti in the south, with the restored Rabati Castle on its hill; from here go to Vardzia, a 12th-century cave monastery of hundreds of rooms cut into a cliff, and Khertvisi Fortress.'],
      highlights=[
          H('라바티 성', 'Rabati Castle', '교회와 모스크, 성벽과 정원이 한데 모인 성채 단지로, 2012년 크게 복원했습니다.', 'A castle complex of a church, a mosque, walls and gardens, extensively restored in 2012.', 'Rabati Castle', 90, 120),
          H('사파라 수도원', 'Sapara Monastery', '숲 속 산비탈의 중세 수도원으로, 벽화가 남은 성 사바 교회가 있습니다.', 'A medieval monastery on a wooded mountainside, with the frescoed Church of St Saba.', 'Sapara Monastery', 60, 90, group=DAY,
            n=J2('아할치헤에서 남동쪽 약 12km, 택시로 갑니다.|About 12 km south-east of Akhaltsikhe by taxi.', CHURCH)),
          H('헤르트비시 요새', 'Khertvisi Fortress', '두 강이 만나는 바위 위의 요새로, 바르지아 가는 길에 들릅니다.', 'A fortress on a rock where two rivers meet, on the road to Vardzia.', 'Khertvisi Fortress', 30, 45, group=DAY),
          H('바르지아', 'Vardzia', '타마르 여왕 때 절벽에 13층으로 판 동굴 수도원으로, 성모 승천 교회 벽화와 터널을 따라 걷습니다.', 'A cave monastery cut 13 levels deep into a cliff under Queen Tamar, with the frescoed Church of the Dormition and tunnels to walk through.', 'Vardzia', 120, 180, group=DAY,
            n='아할치헤에서 남쪽 약 60km, 하루 몇 번 마르슈루트카가 가지만 택시가 편합니다. 유료입니다.|About 60 km south of Akhaltsikhe; a few marshrutkas a day, but a taxi is easier; ticketed.'),
      ],
      hubs=f"    air: [{KUT}, {TBS}],\n    bus: [['Akhaltsikhe Bus Station', '아할치헤 버스터미널']],\n",
      itinerary={'days': [['', 1]], 'trips': [['헤르트비시와 바르지아|Khertvisi & Vardzia', 3, 4], ['사파라 수도원|Sapara', 2]]},
      season='5~10월이 좋습니다. 겨울엔 춥고 바르지아 가는 길에 눈이 옵니다.|May–October is best; winters are cold with snow on the Vardzia road.',
      stay=[('라바티 성 근처', 'Near Rabati Castle', 'Rabati Castle', '구경하기 편함|Handy for sightseeing', '성채가 걸어서 가깝고 버스터미널도 멀지 않습니다.|The castle is on foot and the bus station is close.')],
      routes=R(f"  r('tbilisi', 'akhaltsikhe', 'bus', 210, {{ {DIDUBE} }}),\n  r('akhaltsikhe', 'borjomi', 'bus', 60, {{ n: MARSH }}),\n  r('kutaisi', 'akhaltsikhe', 'bus', 180, {{ n: MARSH }}),\n"),
      transit=dict(WALK, ko='시내는 걸어서 다니고, 바르지아와 사파라는 택시나 투어를 이용합니다.', en='Walk the town; use a taxi or tour for Vardzia and Sapara.')),

    C(id='borjomi', after='akhaltsikhe', ko='보르조미', en='Borjomi', native='ბორჯომი', lat=41.8390, lng=43.3790,
      blurb=['소나무 숲 협곡 속 광천수 휴양 도시. 공원 안 샘에서 짭짤한 보르조미 광천수를 마시고 온천 풀에 들어가며, 보르조미-하라가울리 국립공원을 걷거나 협궤 열차를 타고 바쿠리아니로 오릅니다.',
             'A spa town in a pine-forested gorge: drink the salty Borjomi mineral water at the springs in the park and soak in its warm pools, hike the Borjomi-Kharagauli National Park, or ride the narrow-gauge train up to Bakuriani.'],
      highlights=[
          H('보르조미 광천수 공원', 'Borjomi Mineral Water Park', '협곡을 따라 이어지는 19세기 공원으로, 샘물을 마시고 안쪽 끝의 유황 온천 풀에 들어갑니다.', 'A 19th-century park along the gorge where you drink from the springs and bathe in the warm sulphur pools at its far end.', 'Borjomi Central Park', 90, 120,
            n='공원 입장과 온천 풀은 각각 유료입니다.|The park and the pools each charge an entry fee.'),
          H('보르조미 케이블카', 'Borjomi cable car', '공원 입구에서 언덕 위 전망대까지 오르는 케이블카로, 시내와 협곡이 내려다보입니다.', 'A cable car from the park entrance up to a hilltop viewpoint over the town and gorge.', 'Borjomi Cable Car', 30, 45),
          H('초록 수도원', 'Green Monastery (Chitakhevi)', '숲 속 9세기 교회로, 초록빛 돌로 지어 이런 이름이 붙었습니다.', 'A 9th-century church in the forest, named for its greenish stone.', 'Green Monastery Borjomi', 45, 60, group=DAY,
            n=J2('보르조미에서 남쪽 약 10km입니다.|About 10 km south of Borjomi.', CHURCH)),
          H('보르조미-하라가울리 국립공원', 'Borjomi-Kharagauli National Park', '코카서스에서 손꼽히는 넓은 숲 국립공원으로, 방문자 센터에서 당일 산책길과 장거리 코스가 시작됩니다.', 'One of the largest forest national parks in the Caucasus, with day trails and long routes starting from the visitor centre.', 'Borjomi-Kharagauli National Park visitor center', 240, 480, group=DAY,
            n='장거리 코스는 방문자 센터에 미리 등록합니다.|Register at the visitor centre before longer routes.'),
          H('쿠쿠시카 협궤 열차와 바쿠리아니', 'Kukushka train to Bakuriani', '1902년 놓은 협궤 철도로 숲과 다리를 지나 스키 마을 바쿠리아니까지 천천히 오릅니다.', 'A narrow-gauge railway of 1902 winding through forest and over bridges up to the ski village of Bakuriani.', 'Bakuriani', 240, 360, group=DAY,
            n='운행 시간이 자주 바뀌니 보르조미 역에서 확인하세요.|Times change often; check at Borjomi station.'),
      ],
      hubs=f"    air: [{KUT}, {TBS}],\n    rail: [['Borjomi Park', '보르조미 파크역', '바쿠리아니행 협궤 열차|narrow-gauge train to Bakuriani']],\n    bus: [['Borjomi Bus Station', '보르조미 버스터미널']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['초록 수도원|Green Monastery', 3], ['국립공원|National park', 4], ['쿠쿠시카 열차|Kukushka train', 5]]},
      season='5~10월이 걷기 좋습니다. 겨울엔 바쿠리아니에서 스키를 탑니다.|May–October suits walking; in winter, ski at Bakuriani.',
      stay=[('공원 입구 근처', 'Near the park entrance', 'Borjomi Central Park', '걸어서 다니기|Walkable', '공원과 케이블카, 식당이 걸어서 가깝습니다.|The park, cable car and restaurants are on foot.')],
      routes=R(f"  r('tbilisi', 'borjomi', 'bus', 150, {{ {DIDUBE} }}),\n"),
      transit=dict(WALK, ko='시내와 공원은 걸어서 다니고, 근교는 택시나 마르슈루트카를 탑니다.', en='Walk the town and park; take a taxi or marshrutka further out.')),

    C(id='telavi', after='sighnaghi', ko='텔라비 (카헤티)', en='Telavi (Kakheti)', native='თელავი', lat=41.9198, lng=45.4731,
      blurb=['와인 산지 카헤티의 중심 도시. 에레클레 2세의 궁전과 900년 된 플라타너스가 시내에 있고, 주변 알라자니 계곡의 수도원과 와이너리, 귀족 저택 치난달리, 언덕 위 그레미 성채로 다녀옵니다.',
             'The main town of the wine region of Kakheti, with King Erekle II’s palace and a 900-year-old plane tree in town, and trips to the monasteries and wineries of the Alazani valley, the noble estate of Tsinandali and the hilltop citadel of Gremi.'],
      highlights=[
          H('바토니스치헤 (에레클레 2세 궁전)', 'Batonistsikhe (Erekle II Palace)', '성벽 안에 18세기 왕궁과 교회, 박물관이 있는 성채입니다.', 'A walled citadel holding the 18th-century royal palace, churches and a museum.', 'Batonistsikhe Castle Telavi', 45, 60),
          H('900년 된 플라타너스', 'The giant plane tree', '둘레 12m에 이르는 오래된 플라타너스로, 텔라비의 상징입니다.', 'An ancient plane tree some 12 m round, the symbol of Telavi.', 'Giant Plane Tree Telavi', 10, 15),
          H('알라베르디 수도원', 'Alaverdi Monastery', '11세기 대성당과 수도사들이 빚는 와인 저장고가 있는 수도원으로, 높은 돔이 계곡 위로 솟습니다.', 'A monastery with an 11th-century cathedral, whose tall dome rises over the valley, and a cellar where the monks make wine.', 'Alaverdi Monastery', 45, 60, group=DAY,
            n=J2('텔라비에서 북서쪽 약 20km입니다.|About 20 km north-west of Telavi.', CHURCH)),
          H('이칼토 수도원', 'Ikalto Monastery', '중세 학문의 중심이었던 수도원으로, 옛 아카데미 건물 터와 와인 압착 시설이 남아 있습니다.', 'A medieval centre of learning with the ruins of its academy and an old wine press.', 'Ikalto Monastery', 30, 45, group=DAY, n=CHURCH),
          H('치난달리 저택', 'Tsinandali Estate', '시인 알렉산드르 차브차바제의 19세기 저택과 정원으로, 조지아 최초의 유럽식 와인 양조장이 있습니다.', 'The 19th-century house and gardens of the poet Alexander Chavchavadze, with Georgia’s first European-style winery.', 'Tsinandali Estate', 90, 120, group=DAY,
            n='저택 박물관과 와인 시음은 유료입니다.|The house museum and tastings are ticketed.'),
          H('그레미 성채', 'Gremi', '16세기 카헤티 왕국 수도 자리의 언덕 위 성채와 대천사 교회입니다.', 'The hilltop citadel and Church of the Archangels at the site of the 16th-century capital of Kakheti.', 'Gremi', 45, 60, group=DAY),
      ],
      hubs=f"    air: [{TBS}],\n    bus: [['Telavi Bus Station', '텔라비 버스터미널']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['알라베르디·이칼토|Alaverdi & Ikalto', 3, 4], ['치난달리|Tsinandali', 5], ['그레미|Gremi', 6]]},
      season='9~10월 포도 수확기(르트벨리)가 가장 좋고, 5~6월도 좋습니다.|Best in the September–October grape harvest (rtveli), and good in May–June.',
      stay=[('시내 중심', 'Town centre', 'Telavi', '걸어서 다니기|Walkable', '궁전과 시장이 걸어서 가깝고 와이너리 투어가 여기서 떠납니다.|The palace and market are on foot, and winery tours start here.'),
            ('와이너리 숙소', 'Winery stays', 'Kvareli', '와인 여행|Wine trips', '포도밭 안 와이너리 호텔에서 묵습니다. 차가 있으면 편합니다.|Stay at a winery hotel among the vineyards; easier with a car.')],
      routes=R(f"  r('tbilisi', 'telavi', 'bus', 150, {{ n: MARSH }}),\n  r('sighnaghi', 'telavi', 'bus', 90, {{ n: MARSH }}),\n"),
      transit=dict(WALK, ko='시내는 걸어서 다니고, 수도원과 와이너리는 택시를 하루 빌려 도는 것이 편합니다.', en='Walk the town; hiring a taxi for the day is easiest for the monasteries and wineries.')),

    C(id='zugdidi', after='kutaisi', ko='주그디디', en='Zugdidi', native='ზუგდიდი', lat=42.5088, lng=41.8709,
      blurb=['서부 사메그렐로 지방의 중심 도시이자 스바네티로 가는 길목. 다디아니 가문의 궁전 박물관과 식물원이 있고, 메스티아행 마르슈루트카가 여기서 떠납니다. 북서쪽 압하지야는 여행금지 지역입니다.',
             'The main town of Samegrelo in the west and the gateway to Svaneti, with the Dadiani family’s palace museum and botanical garden; marshrutkas to Mestia leave from here. Abkhazia, to the north-west, is under a travel ban.'],
      highlights=[
          H('다디아니 궁전 박물관', 'Dadiani Palaces Museum', '사메그렐로를 다스린 다디아니 가문의 19세기 궁전으로, 나폴레옹의 데스마스크 사본 등 유품을 전시합니다.', 'The 19th-century palace of the Dadiani princes who ruled Samegrelo, displaying family treasures including a copy of Napoleon’s death mask.', 'Dadiani Palaces History and Architectural Museum', 60, 90),
          H('주그디디 식물원', 'Zugdidi Botanical Garden', '궁전 뒤로 이어지는 19세기 정원으로, 오래된 나무와 연못이 있습니다.', 'The 19th-century garden behind the palace, with old trees and ponds.', 'Zugdidi Botanical Garden', 45, 60),
          H('아나클리아 해변', 'Anaklia beach', '흑해의 모래 해변 마을로, 바다 위로 긴 보행교가 이어집니다.', 'A Black Sea beach village with a long pier-walkway over the sea.', 'Anaklia', 180, 300, group=DAY,
            n='주그디디에서 남서쪽 약 30km입니다. 바로 북쪽 엔구리강 너머 압하지야는 여행금지 지역이니 경계선 쪽으로 가지 마세요.|About 30 km south-west of Zugdidi. Abkhazia, just north across the Enguri river, is under a travel ban; do not go towards the line.'),
      ],
      hubs=f"    air: [{KUT}],\n    rail: [['Zugdidi', '주그디디역', '트빌리시행 열차|trains to Tbilisi']],\n    bus: [['Zugdidi Bus Station', '주그디디 버스터미널', '메스티아행 마르슈루트카|marshrutkas to Mestia']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['아나클리아|Anaklia', 3]]},
      season='5~10월이 좋습니다. 여름은 덥고 습합니다.|May–October is best; summers are hot and humid.',
      stay=[('기차역 근처', 'Near the station', 'Zugdidi railway station', '교통 거점|Transport hub', '메스티아행 마르슈루트카가 역 앞에서 떠나 하룻밤 묵기 편합니다.|Marshrutkas to Mestia leave from outside the station, handy for an overnight stop.')],
      routes=R(f"  r('tbilisi', 'zugdidi', 'train', 330, {{ ...R }}),\n  r('kutaisi', 'zugdidi', 'bus', 120, {{ n: MARSH }}),\n"),
      transit=dict(WALK, ko='시내는 걸어서 다니고, 메스티아와 아나클리아는 마르슈루트카나 택시를 탑니다.', en='Walk the town; take a marshrutka or taxi to Mestia and Anaklia.')),

    C(id='mestia', after='zugdidi', ko='메스티아 (스바네티)', en='Mestia (Svaneti)', native='მესტია', lat=43.0450, lng=42.7272,
      blurb=['코카서스 고산 스바네티 지방의 중심 마을. 중세 방어탑이 솟은 돌집 마을에서 스바네티 박물관을 보고, 하츠발리 케이블카와 찰라디 빙하, 코룰디 호수를 걸으며, 유럽 최고(最高) 상주 마을 우슈굴리로 다녀옵니다.',
             'The main village of Svaneti, high in the Caucasus: see the Svaneti Museum among stone houses and medieval defensive towers, ride the Hatsvali cable car, walk to the Chalaadi glacier and Koruldi lakes, and visit Ushguli, among the highest inhabited villages in Europe.'],
      highlights=[
          H('스바네티 역사민속 박물관', 'Svaneti Museum of History and Ethnography', '산속에 숨겨 지켜 온 중세 성화와 필사본, 금은 공예품을 모은 박물관입니다.', 'A museum of medieval icons, manuscripts and gold and silver work kept hidden in the mountains for centuries.', 'Svaneti Museum of History and Ethnography', 60, 90, c='mon'),
          H('스반 방어탑과 미하일 헤르기아니 집 박물관', 'Svan towers & Mikheil Khergiani House Museum', '마을 곳곳의 9~12세기 방어탑 가운데 하나에 올라 볼 수 있는 산악인 헤르기아니의 집 박물관입니다.', 'Among the 9th–12th-century defensive towers around the village, the house museum of mountaineer Mikheil Khergiani lets you climb one.', 'Mikheil Khergiani House Museum', 45, 60),
          H('하츠발리 케이블카', 'Hatsvali cable car', '마을 근처에서 해발 2,300m대 하츠발리 능선까지 오르는 케이블카로, 우슈바산이 보입니다.', 'A cable car near the village up to the Hatsvali ridge at around 2,300 m, with views of Mount Ushba.', 'Hatsvali', 60, 120),
          H('찰라디 빙하', 'Chalaadi Glacier', '마을에서 차로 20분, 숲길을 1시간쯤 걸어 빙하 끝자락까지 갑니다.', 'Drive 20 minutes from the village, then walk about an hour through forest to the foot of the glacier.', 'Chalaadi Glacier', 240, 300, group=DAY),
          H('코룰디 호수', 'Koruldi Lakes', '해발 2,700m대 고원 호수로, 호수에 우슈바산이 비칩니다. 걷거나 사륜구동차로 오릅니다.', 'High lakes at around 2,700 m reflecting Mount Ushba, reached on foot or by 4×4.', 'Koruldi Lakes', 360, 480, group=DAY),
          H('우슈굴리', 'Ushguli', '해발 약 2,100m의 방어탑 마을들로, 쉬하라산 아래 세계유산입니다.', 'Villages of defensive towers at about 2,100 m below Mount Shkhara, a World Heritage Site.', 'Ushguli', 480, 600, group=DAY,
            n='메스티아에서 약 45km 비포장 산길로, 사륜구동 택시나 투어로 갑니다. 겨울엔 길이 막히기도 합니다.|About 45 km of rough mountain road from Mestia, by 4×4 taxi or tour; the road can close in winter.'),
      ],
      hubs=f"    air: [{KUT}],\n    bus: [['Mestia (Seti Square)', '메스티아 세티 광장', '주그디디·쿠타이시행 마르슈루트카|marshrutkas to Zugdidi and Kutaisi']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['찰라디 빙하|Chalaadi Glacier', 4], ['코룰디 호수|Koruldi Lakes', 5], ['우슈굴리|Ushguli', 6]]},
      season='6~9월이 트레킹 철이고, 겨울엔 스키를 탑니다. 산길은 눈 녹는 6월 말부터 열립니다.|June–September is trekking season and winter is for skiing; high trails open from late June as the snow melts.',
      stay=[('세티 광장 주변', 'Around Seti Square', 'Seti Square Mestia', '걸어서 다니기|Walkable', '박물관과 식당, 마르슈루트카 정류장이 걸어서 가깝습니다.|The museum, restaurants and marshrutka stop are on foot.'),
            ('우슈굴리', 'Ushguli', 'Ushguli', '오지 마을|Remote village', '탑 마을의 게스트하우스에서 묵으며 조용한 밤을 보냅니다.|Spend a quiet night in a guesthouse among the towers.')],
      routes=R("  r('zugdidi', 'mestia', 'bus', 180, { n: MARSH }),\n  r('kutaisi', 'mestia', 'bus', 300, { n: MARSH }),\n"),
      transit=dict(WALK, ko='마을은 걸어서 다니고, 빙하와 우슈굴리는 사륜구동 택시나 투어를 이용합니다.', en='Walk the village; use a 4×4 taxi or tour for the glacier and Ushguli.')),
]

GE_NEW = """    cityIds: ['tbilisi', 'mtskheta', 'gori', 'stepantsminda', 'sighnaghi', 'telavi', 'kutaisi', 'zugdidi', 'mestia', 'batumi', 'borjomi', 'akhaltsikhe'],
    cityGroups: [
      { title: { ko: '트빌리시·카르틀리', en: 'Tbilisi & Kartli' }, cityIds: ['tbilisi', 'mtskheta', 'gori', 'stepantsminda'] },
      { title: { ko: '카헤티', en: 'Kakheti' }, cityIds: ['sighnaghi', 'telavi'] },
      { title: { ko: '서부·스바네티', en: 'West & Svaneti' }, cityIds: ['kutaisi', 'zugdidi', 'mestia', 'batumi'] },
      { title: { ko: '남부', en: 'South' }, cityIds: ['borjomi', 'akhaltsikhe'] },
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
    i = k.index("    id: 'ge',")
    s = k.index('    cityIds: [', i)
    e = k.index('\n', s) + 1
    assert 'cityGroups' not in k[e:k.index("\n  },", e)]
    wr('countries.ts', k[:s] + GE_NEW + k[e:])
