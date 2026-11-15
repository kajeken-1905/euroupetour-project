#!/usr/bin/env python3
"""Romania review step 2 (2026-11-15, plan approved): Constanța, Tulcea, Sinaia, Oradea, Iași, Suceava and
Sighetu Marmației as new cities. Reuses the batch-3 writer (add_daytrip_places3.main); the Romania city groups are
rewritten afterwards. Times are rounded typical values. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='\n  // —— tr ——\n', itin_file='itinerary-south.ts',
              itin_before='  ljubljana: {', visit_file='visit-east.ts', visit_after=r"^  'timisoara-h\d+': v\(.*\),\n",
              stay_before="  'vatican-city': [", apps='', transit_before='  // —— tr ——\n  istanbul: {', places=None,
              daytrips=[], routes=[])
LAST = r"^  r\('cluj-napoca', 'timisoara', 'train', 360, \{ \.\.\.R \}\),\n"
OTP = "['București Henri Coandă (OTP)', '부쿠레슈티 오토페니 공항 (OTP)', '부쿠레슈티|Bucharest']"
CND = "['Constanța Mihail Kogălniceanu (CND)', '콘스탄차 공항 (CND)']"
CLJ = "['Cluj Avram Iancu (CLJ)', '클루지 공항 (CLJ)', '클루지나포카|Cluj-Napoca']"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'ro'
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
    C(id='constanta', after='timisoara', ko='콘스탄차', en='Constanța', native='Constanța', lat=44.1733, lng=28.6383,
      blurb=['흑해에 면한 루마니아 최대의 항구 도시. 고대 그리스 식민 도시 토미스에서 시작해, 바닷가 아르누보 카지노와 오비디우스 광장, 첨탑에 오를 수 있는 모스크가 있고 북쪽엔 마마이아 해변이 이어집니다.',
             'Romania’s largest port on the Black Sea, founded as the Greek colony of Tomis, with an Art Nouveau casino on the seafront, Ovid Square, a mosque whose minaret you can climb, and the beaches of Mamaia to the north.'],
      highlights=[
          H('콘스탄차 카지노', 'Constanța Casino', '1910년 바다 바로 앞에 지은 아르누보 카지노 건물로, 해안 산책로의 상징입니다.', 'An Art Nouveau casino built right on the sea in 1910, the emblem of the seafront promenade.', 'Constanța Casino', 20, 30),
          H('오비디우스 광장과 역사 박물관', 'Ovid Square & History Museum', '이곳으로 유배된 로마 시인 오비디우스의 동상이 선 광장으로, 옛 시청의 국립 역사·고고학 박물관에서 토미스 유물을 봅니다.', 'The square with a statue of the Roman poet Ovid, exiled here, and the National History and Archaeology Museum in the old town hall, with finds from Tomis.', 'Muzeul de Istorie Națională și Arheologie Constanța', 45, 75),
          H('카롤 1세 모스크', 'Carol I Mosque', '1913년 완성한 모스크로, 약 50m 첨탑 계단을 올라 항구와 구시가를 내려다봅니다.', 'A mosque completed in 1913; climb the stairs of its minaret of about 50 m for views over the port and old town.', 'Moscheea Carol I Constanța', 20, 30),
          H('제노바 등대와 해안 산책로', 'Genoese Lighthouse & seafront', '19세기 중반 세운 작은 등대에서 카지노까지 이어지는 바닷가 산책로입니다.', 'The seaside promenade running from a small mid-19th-century lighthouse to the casino.', 'Farul Genovez Constanța', 30, 45),
          H('마마이아 해변', 'Mamaia beach', '흑해와 시우트길 호수 사이 좁은 땅에 약 8km 이어지는 모래 해변 휴양지입니다.', 'A resort strip with about 8 km of sandy beach on the narrow land between the Black Sea and Lake Siutghiol.', 'Mamaia beach', 60, 180,
            n='시내 북쪽으로 버스로 20~30분입니다.|20–30 minutes north of the centre by bus.'),
      ],
      hubs=f"    air: [{CND}],\n    rail: [['Constanța', '콘스탄차역']],\n",
      itinerary={'days': [['', 1, 4, 2, 3], ['', 5]]},
      season='6~9월이 해수욕 철이고, 7~8월 마마이아는 아주 붐빕니다.|June to September is the beach season; Mamaia is very busy in July and August.',
      stay=[('구시가 (반도)', 'Old town (peninsula)', 'Constanța old town', '구경 거점|Sightseeing base', '카지노·오비디우스 광장·모스크가 걸어서 가깝습니다.|The casino, Ovid Square and mosque are all within walking distance.'),
            ('마마이아', 'Mamaia', 'Mamaia', '해변|Beach', '해변 호텔이 모여 있고 여름 밤 문화가 활발합니다. 구시가까진 버스로 다닙니다.|Beach hotels and summer nightlife; buses run to the old town.')],
      routes=R("  r('bucharest', 'constanta', 'train', 135),\n  r('constanta', 'tulcea', 'bus', 150),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi', 'train'], ko='구시가는 걸어서 다니고, 기차역과 마마이아는 시내버스로 오갑니다.', en='Walk the old town; city buses link the station and Mamaia.')),
    C(id='tulcea', after='constanta', ko='툴체아', en='Tulcea', native='Tulcea', lat=45.1767, lng=28.8058,
      blurb=['다뉴브 삼각주로 들어가는 관문 도시. 강변 선착장에서 펠리컨과 물새가 사는 세계유산 삼각주로 배가 떠나고, 삼각주 생태 박물관과 언덕 위 독립 기념탑이 있습니다.',
             'The gateway to the Danube Delta, where boats leave the riverside quays for the World Heritage wetland of pelicans and water birds, with a Delta eco-museum and an independence monument on the hill.'],
      highlights=[
          H('다뉴브 삼각주 생태 관광 박물관', 'Danube Delta Eco-Tourism Museum Centre', '삼각주의 자연과 사람들을 소개하는 박물관으로, 삼각주 물고기를 보는 수족관이 있습니다.', 'A museum about the Delta’s nature and people, with an aquarium of Delta fish.', 'Centrul Muzeal Eco-Turistic Delta Dunării Tulcea', 45, 60),
          H('독립 기념탑', 'Independence Monument', '옛 성채 언덕 위에 선 오벨리스크로, 다뉴브강과 삼각주 입구가 내려다보입니다.', 'An obelisk on the old citadel hill, looking over the Danube and the entrance to the Delta.', 'Monumentul Independenței Tulcea', 20, 30),
          H('다뉴브 강변 산책로', 'Danube waterfront', '삼각주 배가 드나드는 선착장을 따라 이어지는 강변 산책로입니다.', 'The riverside promenade along the quays where the Delta boats come and go.', 'Faleza Tulcea', 30, 45),
          H('다뉴브 삼각주 배 투어', 'Danube Delta boat trip', '좁은 수로와 호수 사이로 배를 타고 펠리컨·백로 같은 물새를 봅니다. 봄과 초여름에 새가 가장 많습니다.', 'A boat trip through narrow channels and lakes to see pelicans, egrets and other water birds; birds are most plentiful in spring and early summer.', 'Danube Delta boat tours Tulcea', 240, 480,
            n='툴체아 선착장에서 반나절·하루 투어가 떠납니다. 여름엔 미리 예약하세요.|Half- and full-day tours leave from the Tulcea quays; book ahead in summer.', group=DAY),
          H('에니살라 요새', 'Enisala Fortress', '라짐 호수를 내려다보는 언덕 위 14세기 요새 터입니다.', 'The ruins of a 14th-century fortress on a hill above Lake Razim.', 'Cetatea Enisala', 45, 60,
            n='툴체아에서 남쪽으로 약 40km라 차로 갑니다.|About 40 km south of Tulcea; go by car.', group=DAY),
      ],
      hubs=f"    air: [{CND}],\n    bus: [['Autogara Tulcea', '툴체아 버스터미널', '선착장 옆|next to the river quays']],\n",
      itinerary={'days': [['', 3, 2, 1]], 'trips': [['다뉴브 삼각주 배 투어|Danube Delta boat trip', 4], ['에니살라 요새|Enisala Fortress', 5]]},
      season='4~6월과 9월이 새 보기에 가장 좋습니다. 한여름엔 덥고 모기가 많습니다.|April to June and September are best for birds; midsummer is hot with many mosquitoes.',
      stay=[('강변 중심가', 'Riverside centre', 'Tulcea centre', '배 투어 거점|Boat-trip base', '버스터미널과 선착장, 박물관이 걸어서 가깝습니다.|The bus station, quays and museum are all within walking distance.')],
      routes=R("  r('bucharest', 'tulcea', 'bus', 300),\n"),
      transit=dict(modes=['walk', 'bus', 'ferry', 'taxi'], ko='작은 도시라 걸어서 다니고, 삼각주는 선착장에서 배로 들어갑니다.', en='A small town best on foot; the Delta is reached by boat from the quays.')),
    C(id='sinaia', after='tulcea', ko='시나이아', en='Sinaia', native='Sinaia', lat=45.3500, lng=25.5500,
      blurb=['‘카르파티아의 진주’라 불리는 프라호바 계곡의 산악 휴양지. 카롤 1세의 여름 궁전 펠레슈 성과 펠리쇼르 성, 도시 이름이 된 시나이아 수도원이 있고 부체지 산으로 케이블카가 오릅니다.',
             'A mountain resort in the Prahova Valley called the ‘pearl of the Carpathians’, with King Carol I’s summer palace of Peleș, Pelișor Castle, the monastery that gave the town its name, and cable cars up the Bucegi Mountains.'],
      highlights=[
          H('펠레슈 성', 'Peleș Castle', '1873~1914년 카롤 1세가 지은 신르네상스 여름 궁전으로, 나무 조각과 무기 컬렉션으로 꾸민 방들을 둘러봅니다.', 'King Carol I’s Neo-Renaissance summer palace, built 1873–1914, with rooms of carved wood and an arms collection.', 'Peleș Castle', 60, 90),
          H('펠리쇼르 성', 'Pelișor Castle', '펠레슈 성 옆에 페르디난드 왕과 마리 왕비를 위해 지은 작은 성으로, 아르누보 실내가 남아 있습니다.', 'A smaller castle next to Peleș built for King Ferdinand and Queen Marie, with Art Nouveau interiors.', 'Pelișor Castle', 30, 45),
          H('시나이아 수도원', 'Sinaia Monastery', '1695년 세운 수도원으로, 시나이산에서 이름을 따 도시 이름이 되었습니다.', 'A monastery founded in 1695 and named after Mount Sinai, which gave the town its name.', 'Mănăstirea Sinaia', 30, 45),
          H('시나이아 카지노', 'Sinaia Casino', '1913년 문을 연 카지노 건물로, 지금은 회의장으로 쓰이며 앞의 공원과 함께 둘러봅니다.', 'A casino building opened in 1913, now a conference centre, seen with the park in front.', 'Cazino Sinaia', 15, 20),
          H('바벨레와 스핑크스', 'Babele & the Sphinx', '해발 약 2,200m 부체지 고원의 바위 무리로, 바람이 깎은 스핑크스 모양 바위가 있습니다.', 'Rock formations on the Bucegi plateau at about 2,200 m, including a wind-carved rock shaped like a sphinx.', 'Babele Bucegi', 120, 180,
            n='이웃 부슈테니에서 케이블카로 바벨레까지 오릅니다. 날씨가 나쁘면 운행을 멈춥니다.|Take the cable car up to Babele from neighbouring Bușteni; it stops in bad weather.', group=DAY),
      ],
      hubs=f"    air: [{OTP}],\n    rail: [['Sinaia', '시나이아역']],\n",
      itinerary={'days': [['', 3, 1, 2, 4]], 'trips': [['바벨레와 스핑크스|Babele & the Sphinx', 5]]},
      season='6~9월엔 산길이 좋고, 12~3월은 스키 철입니다. 펠레슈 성은 주말에 아주 붐빕니다.|June to September for mountain walks, December to March for skiing; Peleș is very busy at weekends.',
      stay=[('시내 중심', 'Town centre', 'Sinaia centre', '걸어서 다니기|On foot', '역과 수도원, 펠레슈 성까지 걸어서 다닙니다(성까지 오르막 20~30분).|Walk to the station, monastery and Peleș (20–30 minutes uphill to the castle).')],
      routes=R("  r('bucharest', 'sinaia', 'train', 100),\n  r('brasov', 'sinaia', 'train', 60),\n"),
      transit=dict(modes=['walk', 'bus', 'train', 'taxi'], ko='작은 도시라 걸어서 다니고, 부슈테니와 브라쇼브는 기차로 오갑니다.', en='A small town best on foot; trains run to Bușteni and Brașov.')),
    C(id='oradea', after='sinaia', ko='오라데아', en='Oradea', native='Oradea', lat=47.0722, lng=21.9211,
      blurb=['헝가리 국경 가까운 아르누보 도시. 유리 지붕 통로가 있는 검은 독수리 궁전과 별 모양 요새, 달의 위상을 보여 주는 ‘달 교회’와 루마니아 최대의 바로크 성당이 있습니다.',
             'An Art Nouveau city near the Hungarian border, with the glass-roofed passage of the Black Eagle Palace, a star-shaped fortress, the ‘Moon Church’ that shows the phases of the moon, and Romania’s largest Baroque church.'],
      highlights=[
          H('우니리 광장과 검은 독수리 궁전', 'Union Square & Black Eagle Palace', '1909년 완성한 아르누보 건물로, 유리 지붕을 덮은 통로가 광장으로 이어집니다.', 'An Art Nouveau building completed in 1909, its glass-roofed passage opening onto the square.', 'Palatul Vulturul Negru Oradea', 30, 45),
          H('달 교회', 'Moon Church', '1790년 완성한 정교회 성당으로, 탑의 공 모양 장치가 달의 위상을 보여 줍니다.', 'An Orthodox church completed in 1790, with a sphere in its tower that shows the phases of the moon.', 'Biserica cu Lună Oradea', 15, 20),
          H('오라데아 요새', 'Oradea Fortress', '오각 별 모양 성벽으로 둘러싼 요새로, 안뜰 건물에 박물관과 카페가 들어섰습니다.', 'A fortress within pentagonal star-shaped walls, its courtyard buildings now home to museums and cafés.', 'Cetatea Oradea', 45, 60),
          H('성모승천 대성당', 'Cathedral Basilica of the Assumption', '1780년 완성한 루마니아 최대의 바로크 성당으로, 옆에 주교 궁전이 있습니다.', 'Romania’s largest Baroque church, completed in 1780, beside the bishop’s palace.', 'Bazilica Romano-Catolică Oradea', 20, 30),
          H('시온 회당', 'Zion Synagogue', '1878년 크리슐레페데강 변에 지은 무어 양식 회당으로, 지금은 문화 공간입니다.', 'A Moorish-style synagogue of 1878 on the bank of the Crișul Repede, now a cultural venue.', 'Sinagoga Sion Oradea', 20, 30),
      ],
      hubs="    air: [['Oradea (OMR)', '오라데아 공항 (OMR)']],\n    rail: [['Oradea', '오라데아역']],\n",
      itinerary={'days': [['', 1, 2, 5, 4, 3]]},
      season='4~10월이 걷기 좋습니다. 겨울엔 근교 온천 휴양지 버일레펠릭스가 인기입니다.|April to October is best for walking; in winter the nearby spa of Băile Felix is popular.',
      stay=[('중심가 (우니리 광장 주변)', 'Centre (Union Square)', 'Piața Unirii, Oradea', '걸어서 다 보기|Everything on foot', '광장과 리퍼블리치 거리, 요새가 걸어서 가깝습니다.|The square, Strada Republicii and the fortress are all within walking distance.')],
      routes=R("  r('cluj-napoca', 'oradea', 'train', 180),\n  r('timisoara', 'oradea', 'train', 210),\n  r('budapest', 'oradea', 'train', 240),\n"),
      transit=dict(modes=['walk', 'tram', 'bus', 'taxi'], ko='중심가는 걸어서 다니고, 기차역은 트램으로 오갑니다.', en='Walk the centre; trams link the station.')),
    C(id='iasi', after='oradea', ko='야시', en='Iași', native='Iași', lat=47.1585, lng=27.6014,
      blurb=['몰다비아의 옛 수도이자 루마니아 문화의 중심. 신고딕 문화 궁전과 돌 조각으로 뒤덮인 삼성인 교회, 국민 시인 에미네스쿠가 거닐던 코포우 공원이 있는 대학 도시입니다.',
             'The old capital of Moldavia and a centre of Romanian culture, a university city with the Neo-Gothic Palace of Culture, the stone-carved Church of the Three Hierarchs and Copou Park, where the national poet Eminescu walked.'],
      highlights=[
          H('문화 궁전', 'Palace of Culture', '1906~1925년 지은 신고딕 궁전으로, 안에 미술·역사·민속·과학 기술 박물관이 있습니다.', 'A Neo-Gothic palace built 1906–1925, home to museums of art, history, ethnography and science and technology.', 'Palatul Culturii Iași', 90, 120),
          H('삼성인 교회', 'Church of the Three Hierarchs', '1639년 바실레 루푸 공이 세운 교회로, 바깥벽 전체가 정교한 돌 조각 무늬로 덮여 있습니다.', 'A church founded by Prince Vasile Lupu in 1639, its outer walls entirely covered in intricate carved stone patterns.', 'Biserica Sfinții Trei Ierarhi Iași', 20, 30),
          H('메트로폴리탄 대성당', 'Metropolitan Cathedral', '1887년 완성한 큰 정교회 대성당으로, 성녀 파라스케바 유해가 모셔져 있습니다.', 'A large Orthodox cathedral completed in 1887, holding the relics of St Paraskeva.', 'Catedrala Mitropolitană Iași', 20, 30),
          H('코포우 공원', 'Copou Park', '1830년대 만든 시내에서 가장 오래된 공원으로, 시인 에미네스쿠가 시를 썼다는 보리수가 있습니다.', 'The city’s oldest park, laid out in the 1830s, with the linden tree under which the poet Eminescu is said to have written.', 'Parcul Copou Iași', 45, 60),
          H('골리아 수도원', 'Golia Monastery', '17세기 성벽으로 둘러싼 수도원으로, 약 30m 탑에 올라 시내를 내려다봅니다.', 'A 17th-century walled monastery whose tower of about 30 m looks out over the city.', 'Mănăstirea Golia Iași', 20, 30),
      ],
      hubs="    air: [['Iași (IAS)', '야시 공항 (IAS)']],\n    rail: [['Iași', '야시역']],\n",
      itinerary={'days': [['', 1, 2, 3, 5, 4]]},
      season='4~10월이 걷기 좋습니다. 10월 중순 성녀 파라스케바 축일엔 순례객으로 아주 붐빕니다.|April to October is best for walking; mid-October’s feast of St Paraskeva draws huge crowds of pilgrims.',
      stay=[('중심가 (슈테판 첼 마레 대로)', 'Centre (Bd. Ștefan cel Mare)', 'Bulevardul Ștefan cel Mare și Sfânt, Iași', '걸어서 다 보기|Everything on foot', '문화 궁전과 교회들이 대로를 따라 모여 있습니다.|The Palace of Culture and the churches line the boulevard.')],
      routes=R("  r('bucharest', 'iasi', 'flight', 60),\n  r('bucharest', 'iasi', 'train', 420),\n  r('iasi', 'chisinau', 'bus', 240),\n"),
      transit=dict(modes=['walk', 'tram', 'bus', 'taxi'], ko='중심가는 걸어서 다니고, 코포우 공원과 기차역은 트램·버스로 오갑니다.', en='Walk the centre; trams and buses run to Copou Park and the station.')),
    C(id='suceava', after='iasi', ko='수체아바', en='Suceava', native='Suceava', lat=47.6514, lng=26.2556,
      blurb=['몰다비아 공국의 옛 수도로, 부코비나 채색 수도원을 도는 거점 도시. 슈테판 대공의 왕좌 요새와 세계유산 교회가 있고, 바깥벽까지 성화로 덮인 보로네츠·수체비차 수도원이 가깝습니다.',
             'The old capital of the Principality of Moldavia and the base for Bukovina’s painted monasteries, with Stephen the Great’s seat fortress and a World Heritage church in town, and Voroneț and Sucevița, painted even on their outer walls, nearby.'],
      highlights=[
          H('왕좌 요새', 'Seat Fortress of Suceava', '14세기 몰다비아 공의 요새로, 1476년 슈테판 대공이 오스만군의 포위를 막아 냈습니다.', 'The 14th-century fortress of the Moldavian princes, where Stephen the Great held off an Ottoman siege in 1476.', 'Cetatea de Scaun a Sucevei', 45, 60),
          H('성 요한 노이 수도원', 'Monastery of St John the New', '1522년 완성한 성 게오르기오스 교회로, 바깥벽 성화가 남은 세계유산 몰다비아 교회 중 하나입니다.', 'Its St George’s Church, completed in 1522, is one of the World Heritage painted churches of Moldavia, with frescoes on its outer walls.', 'Mănăstirea Sfântul Ioan cel Nou Suceava', 20, 30),
          H('부코비나 마을 박물관', 'Bukovina Village Museum', '요새 옆 야외 박물관으로, 부코비나 곳곳에서 옮겨 온 나무 집과 교회를 봅니다.', 'An open-air museum beside the fortress with wooden houses and a church moved from across Bukovina.', 'Muzeul Satului Bucovinean', 45, 60),
          H('보로네츠 수도원', 'Voroneț Monastery', '1488년 세운 교회로, ‘보로네츠 블루’라 불리는 파란 바탕의 최후의 심판 벽화로 유명합니다.', 'A church founded in 1488, famous for its Last Judgement fresco on a blue background known as ‘Voroneț blue’.', 'Mănăstirea Voroneț', 45, 60,
            n='수체아바에서 약 70km라 차나 투어로 갑니다.|About 70 km from Suceava; go by car or on a tour.', group=DAY),
          H('수체비차 수도원', 'Sucevița Monastery', '16세기 말 성벽으로 둘러싼 수도원으로, 북쪽 벽의 ‘덕의 사다리’ 벽화가 유명합니다.', 'A walled monastery of the late 16th century, known for the ‘Ladder of Virtues’ fresco on its north wall.', 'Mănăstirea Sucevița', 45, 60,
            n='수체아바에서 약 60km라 차나 투어로 갑니다.|About 60 km from Suceava; go by car or on a tour.', group=DAY),
      ],
      hubs="    air: [['Suceava Ștefan cel Mare (SCV)', '수체아바 공항 (SCV)']],\n    rail: [['Suceava', '수체아바역']],\n",
      itinerary={'days': [['', 1, 3, 2]], 'trips': [['보로네츠·수체비차 수도원|Voroneț & Sucevița', 4, 5]]},
      season='5~10월이 수도원을 돌기 좋습니다. 겨울엔 시골길이 눈으로 미끄럽습니다.|May to October is best for the monasteries; country roads are snowy in winter.',
      stay=[('시내 중심', 'Town centre', 'Suceava centre', '구경 거점|Sightseeing base', '요새와 성 요한 노이 수도원이 걸어서 가깝습니다. 수도원 투어는 대부분 여기서 출발합니다.|Walk to the fortress and the Monastery of St John the New; most monastery tours start here.')],
      routes=R("  r('iasi', 'suceava', 'train', 120),\n  r('bucharest', 'suceava', 'train', 420),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='중심가는 걸어서 다니고, 채색 수도원은 차를 빌리거나 투어로 갑니다.', en='Walk the centre; reach the painted monasteries by hire car or on a tour.')),
    C(id='sighetu-marmatiei', after='suceava', ko='시게투마르마치에이', en='Sighetu Marmației', native='Sighetu Marmației', lat=47.9286, lng=23.8925,
      blurb=['우크라이나 국경의 마라무레슈 지방 도시. 공산 정권 정치범 감옥을 고친 기념관과 노벨상 작가 엘리 위젤의 생가가 있고, 근교에 웃는 묘지와 높은 나무 교회들이 있습니다.',
             'A town of the Maramureș region on the Ukrainian border, with a memorial in the communist regime’s former political prison and Nobel laureate Elie Wiesel’s birthplace, and the Merry Cemetery and tall wooden churches nearby.'],
      highlights=[
          H('공산주의 희생자 기념관', 'Memorial of the Victims of Communism', '1950년대 정치인·지식인을 가둔 감옥을 고친 기념관으로, 감방마다 공산 정권 시절을 전시합니다.', 'A memorial in the prison where politicians and intellectuals were held in the 1950s, each cell telling part of the communist era.', 'Memorialul Victimelor Comunismului și al Rezistenței Sighet', 90, 120),
          H('엘리 위젤 생가', 'Elie Wiesel Memorial House', '홀로코스트 생존자이자 노벨 평화상 수상자 엘리 위젤이 태어난 집으로, 이곳 유대인 공동체 이야기를 전합니다.', 'The birthplace of Holocaust survivor and Nobel Peace laureate Elie Wiesel, telling the story of the town’s Jewish community.', 'Casa Memorială Elie Wiesel Sighetu Marmației', 30, 45),
          H('마라무레슈 마을 박물관', 'Maramureș Village Museum', '언덕 위 야외 박물관으로, 마라무레슈의 나무 집과 대문, 나무 교회를 옮겨 놓았습니다.', 'A hillside open-air museum of Maramureș wooden houses, carved gates and a wooden church.', 'Muzeul Satului Maramureșean', 60, 90),
          H('사푼차 웃는 묘지', 'Merry Cemetery of Săpânța', '파란 나무 묘비에 고인의 삶을 그림과 익살스러운 글로 새긴 묘지입니다.', 'A cemetery of blue wooden grave markers carved with pictures and witty verses about the lives of the dead.', 'Cimitirul Vesel Săpânța', 45, 60,
            n='시내에서 서쪽으로 약 18km라 차나 버스로 갑니다.|About 18 km west of town; go by car or bus.', group=DAY),
          H('버르사나 수도원', 'Bârsana Monastery', '마라무레슈 전통 양식으로 지은 나무 수도원 단지로, 높은 첨탑의 나무 교회가 섭니다.', 'A wooden monastery complex in traditional Maramureș style, with a tall-spired wooden church.', 'Mănăstirea Bârsana', 45, 60,
            n='시내에서 남동쪽으로 약 20km라 차로 갑니다.|About 20 km south-east of town; go by car.', group=DAY),
      ],
      hubs=f"    air: [{CLJ}],\n    rail: [['Sighetu Marmației', '시게투마르마치에이역']],\n    bus: [['Autogara Sighetu Marmației', '시게투마르마치에이 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['사푼차·버르사나|Săpânța & Bârsana', 4, 5]]},
      season='5~10월이 마을을 돌기 좋습니다. 12월 말엔 전통 겨울 축제가 열립니다.|May to October is best for touring the villages; traditional winter festivities take place in late December.',
      stay=[('시내 중심', 'Town centre', 'Sighetu Marmației centre', '구경 거점|Sightseeing base', '기념관과 엘리 위젤 생가가 걸어서 가깝습니다.|Walk to the memorial and the Elie Wiesel house.'),
            ('마라무레슈 마을 민박', 'Maramureș village guesthouses', 'Maramureș', '시골 체험|Village life', '근교 마을 민박에서 묵으며 나무 교회와 시골 생활을 봅니다. 차가 있으면 편합니다.|Stay in a village guesthouse to see the wooden churches and rural life; easiest with a car.')],
      routes=R("  r('cluj-napoca', 'sighetu-marmatiei', 'bus', 300),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 근교 마을은 차를 빌리거나 버스로 갑니다.', en='Walk the town; reach the villages by hire car or bus.')),
]

RO_NEW = """    cityIds: ['bucharest', 'constanta', 'tulcea', 'brasov', 'sinaia', 'sibiu', 'sighisoara', 'cluj-napoca', 'timisoara', 'oradea', 'iasi', 'suceava', 'sighetu-marmatiei'],
    cityGroups: [
      { title: { ko: '부쿠레슈티·흑해', en: 'Bucharest & Black Sea' }, cityIds: ['bucharest', 'constanta', 'tulcea'] },
      { title: { ko: '트란실바니아', en: 'Transylvania' }, cityIds: ['brasov', 'sinaia', 'sibiu', 'sighisoara', 'cluj-napoca'] },
      { title: { ko: '서부', en: 'West' }, cityIds: ['timisoara', 'oradea'] },
      { title: { ko: '북부', en: 'North' }, cityIds: ['iasi', 'suceava', 'sighetu-marmatiei'] },
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
    i = k.index("    id: 'ro',")
    j = k.index('    cityGroups: [', i)
    e = k.index('    ],\n', j) + len('    ],\n')
    s = k.index('    cityIds: [', i)
    assert s < j
    k = k[:s] + RO_NEW + k[e:]
    wr('countries.ts', k)
