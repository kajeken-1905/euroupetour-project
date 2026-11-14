#!/usr/bin/env python3
"""Sweden review step 2 (2026-11-14, user approved all ten): Visby (Gotland), Kalmar (Öland), Lund, Ystad, Karlskrona,
Falun (Dalarna), Luleå (Gammelstad), Abisko, Åre and the High Coast as new cities. Reuses the batch-3 writer
(add_daytrip_places3.main); the Sweden city groups are rewritten afterwards in this script. Times are rounded typical
values. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
SJ = "      ta('sj'),\n"
SKANE = "      ta('skanetrafiken', { ko: '표 구매', en: 'Tickets' }),\n      ta('sj'),\n"
COMMON = dict(hubs_file='hubs-central.ts', hubs_before='\n  // —— fi ——\n', itin_file='itinerary-north.ts', itin_before='  copenhagen: {',
              visit_file='visit-nordic.ts', visit_after=r"^  'kiruna-h\d+': v\(.*\),\n", stay_before='  odense: [', apps=SJ,
              transit_before='  // —— no ——\n', places=None, daytrips=[], routes=[])
LAST = r"^  r\('gothenburg', 'oslo', .*\),\n"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'se'
    return d


def H(ko, en, dko, den, maps, mn, mx, n=None, group=None):
    v = dict(min=mn, max=mx)
    if n:
        v['n'] = n
    d = dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)
    if group:
        d['group'] = group
    return d


CITIES = [
    C(id='falun', after='uppsala', ko='팔룬', en='Falun', native='Falun', lat=60.6065, lng=15.6355,
      blurb=['달라르나 지방의 옛 구리 광산 도시. 17세기 유럽 구리의 큰 몫을 캐던 팔룬 광산이 세계유산이고, 집집마다 칠한 붉은 물감 ‘팔룬 레드’가 여기서 나왔습니다.',
             'The old copper-mining town of Dalarna, whose mine produced a large share of Europe’s copper in the 17th century and is now a World Heritage Site—and the source of the ‘Falu red’ paint on Sweden’s houses.'],
      highlights=[
          H('팔룬 광산', 'Falun Mine', '1687년 무너져 생긴 거대한 구덩이 ‘스토라 스퇴텐’과, 땅속 약 67m 옛 갱도를 걷는 가이드 투어가 있는 세계유산 광산입니다.', 'The World Heritage mine with the Great Pit left by the 1687 collapse and guided tours through old galleries some 67 m underground.', 'Falu Gruva', 90, 150,
            n='갱도 투어는 가이드와 함께만 들어가며, 안이 춥고 젖어 있으니 겉옷을 챙기세요.|The mine galleries are visited only with a guide; it is cold and damp underground, so bring a jacket.'),
          H('카를 라르손 저택', 'Carl Larsson-gården', '화가 칼 라르손과 아내 카린이 꾸민 순드보른의 집으로, 밝은 색과 손수 만든 가구가 스웨덴 집 꾸미기의 본보기가 되었습니다.', 'The home in Sundborn decorated by the painter Carl Larsson and his wife Karin, whose bright colours and handmade furniture became a model for Swedish interiors.', 'Carl Larsson-gården', 90, 120,
            n='팔룬에서 북동쪽으로 약 13km이며, 집 안은 가이드 투어로만 봅니다.|About 13 km northeast of Falun; the house is seen on guided tours only.', group=DAY),
          H('루그네트 스키 점프대', 'Lugnet ski jumps', '세계 스키 선수권 대회가 열린 스포츠 단지의 스키 점프대로, 위에 오르면 시내와 호수가 보입니다.', 'The ski jumps of the sports complex that has hosted the Nordic World Ski Championships, with views over town and lake from the top.', 'Lugnet Falun', 45, 60),
          H('실리안 호수와 달라 말 공방', 'Lake Siljan & Dala horses', '실리안 호숫가 누스네스 마을에서 스웨덴의 상징인 빨간 나무 말 ‘달라 헤스트’를 깎고 칠하는 공방을 봅니다.', 'In Nusnäs on Lake Siljan, watch the red wooden Dala horse, a symbol of Sweden, being carved and painted.', 'Nusnäs', 240, 360,
            n='팔룬에서 차로 약 1시간이며, 대중교통은 모라에서 버스로 갈아탑니다.|About an hour from Falun by car; by public transport change to a bus in Mora.', group=DAY),
      ],
      hubs="    rail: [['Falun Centralstation', '팔룬 중앙역']],\n",
      itinerary={'days': [['', 1, 3]], 'trips': [['카를 라르손 저택|Carl Larsson-gården', 2], ['실리안 호수|Lake Siljan', 4]]},
      season='여름엔 실리안 호숫가 하지 축제와 야외 활동이 좋고, 겨울엔 눈 덮인 광산 마을과 스키가 좋습니다.|Summer brings Midsummer celebrations around Lake Siljan; winter has the snowy mining town and skiing.',
      stay=[('시내 중심', 'Town centre', 'Falun centrum', '교통이 편한 곳|Convenient', '기차역과 광장, 식당이 가깝고 광산까지 걸어갈 수 있습니다.|Close to the station, square and restaurants, with the mine within walking distance.')],
      routes=[('routes-central.ts', LAST, "  r('stockholm', 'falun', 'train', 170),\n")],
      transit=dict(modes=['walk', 'bus', 'train'], ko='시내와 광산은 걸어서 다니고, 순드보른과 실리안 호수는 버스나 차로 갑니다.', en='Walk between the centre and the mine; reach Sundborn and Lake Siljan by bus or car.')),
    C(id='lund', after='malmo', ko='룬드', en='Lund', native='Lund', lat=55.7047, lng=13.1910,
      blurb=['말뫼 북쪽의 대학 도시. 1145년 봉헌한 로마네스크 대성당과 1666년 세운 룬드 대학이 있고, 자전거 탄 학생들로 북적입니다.',
             'The university town north of Malmö, with a Romanesque cathedral consecrated in 1145, a university founded in 1666 and streets full of students on bikes.'],
      highlights=[
          H('룬드 대성당', 'Lund Cathedral', '1145년 봉헌한 로마네스크 대성당으로, 하루 두 번 기사들이 도는 15세기 천문 시계와 거인 핀의 전설이 깃든 지하 묘소가 있습니다.', 'The Romanesque cathedral consecrated in 1145, with a 15th-century astronomical clock whose knights parade twice a day and a crypt tied to the legend of the giant Finn.', 'Lund Cathedral', 45, 60),
          H('룬드 대학과 룬다고르드 공원', 'Lund University & Lundagård', '대성당 옆 공원 룬다고르드를 사이에 두고 1882년 대학 본관과 옛 건물들이 둘러선 대학 중심입니다.', 'The heart of the university, where the 1882 main building and older halls ring the Lundagård park beside the cathedral.', 'Universitetshuset Lund', 30, 45),
          H('쿨투렌', 'Kulturen', '시내 한가운데 옛 농가와 저택 30여 채를 옮겨 놓은 야외 박물관입니다.', 'An open-air museum of some 30 old farmhouses and town houses in the middle of the city.', 'Kulturen i Lund', 90, 120),
          H('룬드 식물원', 'Lund Botanical Garden', '대학이 가꾸는 식물원으로, 온실과 넓은 정원을 무료로 산책합니다.', 'The university’s botanical garden, with greenhouses and broad lawns to stroll free of charge.', 'Botaniska trädgården Lund', 45, 60),
      ],
      hubs="    rail: [['Lund Central', '룬드 중앙역']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]]},
      season='봄엔 학생 축제와 꽃이 좋고, 여름 방학엔 도시가 조용합니다.|Spring brings student festivities and blossom; the town is quiet in the summer holidays.',
      stay=[('말뫼에서 다녀오기', 'Base in Malmö', 'Malmö Centralstation', '당일치기|Day trip', '기차로 약 12분이라 말뫼에 묵고 다녀오기 쉽습니다.|About 12 minutes by train, so easy to visit from a base in Malmö.'),
            ('대성당 주변', 'Around the cathedral', 'Lund centrum', '걸어서 다 보기|Everything on foot', '역과 대성당, 박물관이 모두 걸어서 10분 안입니다.|The station, cathedral and museums are all within a 10-minute walk.')],
      routes=[('routes-central.ts', LAST, "  r('malmo', 'lund', 'train', 12),\n  r('copenhagen', 'lund', 'train', 40),\n")],
      transit=dict(modes=['walk', 'bike', 'bus', 'train'], ko='시내는 걸어서 다닙니다. 말뫼와 코펜하겐은 외레순 열차로 갑니다.', en='Walk the centre; take the Öresund trains to Malmö and Copenhagen.'),
      apps=SKANE),
    C(id='ystad', after='lund', ko='위스타드', en='Ystad', native='Ystad', lat=55.4295, lng=13.8200,
      blurb=['스웨덴 남쪽 끝 바닷가의 중세 도시. 반목조 집이 늘어선 골목과 밤마다 나팔을 부는 탑지기가 있고, 근처 언덕엔 배 모양 거석 알레스 스테나르가 섭니다.',
             'A medieval seaside town on Sweden’s southern tip, with lanes of half-timbered houses and a night watchman who sounds his horn from the church tower; the stone ship of Ales stenar stands on a nearby ridge.'],
      highlights=[
          H('알레스 스테나르', 'Ales stenar', '바다 위 언덕에 큰 돌 59개를 길이 67m 배 모양으로 세운 거석 유적으로, 바이킹 시대 말엽의 것으로 봅니다.', 'Fifty-nine great stones set in the shape of a 67 m ship on a ridge above the sea, thought to date from the late Viking age.', 'Ales stenar', 60, 90,
            n='시내에서 동쪽으로 약 20km, 카세베리아 마을 주차장에서 언덕을 걸어 오릅니다.|About 20 km east of town; walk up the ridge from the car park in Kåseberga.', group=DAY),
          H('구시가와 성모 마리아 교회', 'Old town & St Mary’s Church', '반목조 집과 자갈길의 구시가로, 성모 마리아 교회 탑에서 밤마다 15분마다 탑지기가 나팔을 붑니다.', 'The old town of half-timbered houses and cobbles, where a watchman sounds a horn from St Mary’s Church tower every quarter-hour through the night.', 'Sankta Maria kyrka Ystad', 60, 90),
          H('회색 수도사 수도원', 'Greyfriars Abbey', '스웨덴에서 가장 잘 남은 중세 수도원 가운데 하나로, 지금은 도시 박물관입니다.', 'One of Sweden’s best-preserved medieval monasteries, now the town museum.', 'Gråbrödraklostret Ystad', 45, 60),
          H('위스타드 산드스코그', 'Ystad Sandskog', '시내 동쪽 소나무 숲 뒤로 이어지는 하얀 모래 해변입니다.', 'The white-sand beach behind the pine woods east of town.', 'Ystad Sandskog', 60, 120),
      ],
      hubs="    rail: [['Ystad', '위스타드역']],\n    port: [['Ystad', '위스타드 항구', '덴마크 보른홀름·폴란드행|ferries to Bornholm (Denmark) and Poland']],\n",
      itinerary={'days': [['', 2, 3, 4]], 'trips': [['알레스 스테나르|Ales stenar', 1]]},
      season='여름엔 해변과 바닷가 마을이 좋고, 가을엔 오스테를렌 사과 수확철입니다.|Summer is for beaches and seaside villages; autumn is apple-harvest time in Österlen.',
      stay=[('구시가', 'Old town', 'Ystad centrum', '걸어서 다 보기|Everything on foot', '역과 항구, 구시가가 모두 가깝습니다.|The station, harbour and old town are all close together.')],
      routes=[('routes-central.ts', LAST, "  r('malmo', 'ystad', 'train', 50),\n")],
      transit=dict(modes=['walk', 'bus', 'train', 'ferry'], ko='시내는 걸어서 다닙니다. 알레스 스테나르는 버스가 드물어 차나 자전거가 편합니다.', en='Walk the town; buses to Ales stenar are infrequent, so a car or bike is easier.'),
      apps=SKANE),
    C(id='kalmar', after='ystad', ko='칼마르', en='Kalmar', native='Kalmar', lat=56.6634, lng=16.3568,
      blurb=['발트해에 면한 남동부의 성채 도시. 1397년 북유럽 세 나라가 칼마르 동맹을 맺은 르네상스 성이 있고, 다리 건너 욀란드섬으로 갑니다.',
             'The fortified town on the Baltic coast of the southeast, with the Renaissance castle where the Kalmar Union of three Nordic kingdoms was sealed in 1397, and a bridge to the island of Öland.'],
      highlights=[
          H('칼마르 성', 'Kalmar Castle', '해자로 둘러싸인 르네상스 성으로, 1397년 칼마르 동맹의 무대였고 바사 왕조가 궁전으로 고쳤습니다.', 'The moated Renaissance castle where the Kalmar Union was sealed in 1397, remodelled as a palace by the Vasa kings.', 'Kalmar Castle', 90, 120),
          H('칼마르 대성당', 'Kalmar Cathedral', '17세기 건축가 테신이 설계한 바로크 대성당으로, 크바르놀멘 섬 구시가 대광장에 섭니다.', 'The Baroque cathedral designed by the 17th-century architect Tessin, on the main square of the old island town of Kvarnholmen.', 'Kalmar Cathedral', 30, 45),
          H('칼마르 지방 박물관', 'Kalmar County Museum', '1676년 침몰한 군함 크로난호에서 건진 대포와 금화, 생활 유물을 전시합니다.', 'Cannon, gold coins and everyday finds raised from the warship Kronan, sunk in 1676.', 'Kalmar läns museum', 60, 90),
          H('욀란드섬과 보리홀름 성터', 'Öland & Borgholm Castle', '약 6km의 욀란드 다리를 건너 섬에 가서, 바위 언덕 위 보리홀름 성의 거대한 폐허와 세계유산 남부 욀란드 평원을 봅니다.', 'Cross the 6 km Öland Bridge to the island for the vast ruin of Borgholm Castle on its ridge and the World Heritage landscape of southern Öland.', 'Borgholm Castle', 300, 420, group=DAY,
            n='칼마르에서 보리홀름까지 버스로 약 50분입니다.|About 50 min by bus from Kalmar to Borgholm.'),
          H('유리 왕국', 'Kingdom of Crystal', '코스타·오레포르스 등 숲속 유리 공방이 모인 지역으로, 장인이 유리를 부는 모습을 보고 공방 가게에 들릅니다.', 'The forest region of glassworks such as Kosta and Orrefors; watch glassblowers at work and browse the factory shops.', 'Kosta Glasbruk', 300, 420, group=DAY,
            n='칼마르에서 서쪽으로 차로 약 1시간입니다.|About an hour west of Kalmar by car.'),
      ],
      hubs="    air: [['Kalmar Öland (KLR)', '칼마르 욀란드 공항 (KLR)']],\n    rail: [['Kalmar Centralstation', '칼마르 중앙역']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['욀란드섬|Öland', 4], ['유리 왕국|Kingdom of Crystal', 5]]},
      season='여름엔 욀란드 해변과 섬 마을이 붐비고, 봄·가을엔 조용히 성과 평원을 둘러봅니다.|Summer crowds Öland’s beaches and villages; spring and autumn are quieter for the castles and plains.',
      stay=[('크바르놀멘 (구시가 섬)', 'Kvarnholmen', 'Kvarnholmen Kalmar', '걸어서 다 보기|Everything on foot', '역과 대성당, 식당이 모인 섬 구시가로, 성까지 걸어갑니다.|The island old town with the station, cathedral and restaurants, a walk from the castle.'),
            ('욀란드 보리홀름', 'Borgholm, Öland', 'Borgholm', '섬 여름 휴가|Island summer', '여름 휴가지 분위기의 섬 마을입니다. 버스가 적어 차가 편합니다.|A summer-holiday island town; buses are few, so a car helps.')],
      routes=[('routes-central.ts', LAST, "  r('stockholm', 'kalmar', 'flight', 50),\n  r('stockholm', 'kalmar', 'train', 300, { n: '직행 또는 1회 환승|direct or one change' }),\n  r('malmo', 'kalmar', 'train', 180),\n")],
      transit=dict(modes=['walk', 'bus', 'train'], ko='구시가와 성은 걸어서 다니고, 욀란드는 버스나 차로 다리를 건넙니다.', en='Walk the old town and castle; cross to Öland by bus or car.')),
    C(id='karlskrona', after='kalmar', ko='칼스크로나', en='Karlskrona', native='Karlskrona', lat=56.1612, lng=15.5869,
      blurb=['1680년 스웨덴 해군 기지로 세운 섬 위의 계획 도시. 군항 전체가 세계유산이고, 바로크 광장과 해군 박물관, 군도의 요새가 있습니다.',
             'A planned island town founded in 1680 as Sweden’s naval base; the whole naval port is a World Heritage Site, with a Baroque square, a naval museum and island fortresses.'],
      highlights=[
          H('해군 박물관', 'Naval Museum', '물가의 국립 해군 박물관으로, 실제 잠수함 안에 들어가 보고 옛 군함 조각과 모형을 봅니다.', 'The national naval museum on the waterfront, where you can step inside a real submarine and see figureheads and ship models.', 'Marinmuseum Karlskrona', 90, 150),
          H('대광장과 두 교회', 'Stortorget & its churches', '북유럽에서 손꼽히게 큰 광장으로, 테신이 설계한 프레드릭 교회와 삼위일체 교회가 마주 섭니다.', 'One of the largest squares in the Nordic countries, flanked by Tessin’s Fredrik Church and Trinity Church.', 'Stortorget Karlskrona', 30, 45),
          H('해군 교회', 'Admiralty Church', '1685년 지은 스웨덴에서 가장 큰 목조 교회로, 문 앞에 구걸하는 나무 인형 ‘로젠봄’이 있습니다.', 'Sweden’s largest wooden church, built in 1685, with the wooden beggar statue Rosenbom at its door.', 'Amiralitetskyrkan', 20, 30),
          H('쿵스홀름 요새', 'Kungsholm Fortress', '군항 입구를 지키는 17세기 섬 요새로, 둥근 항구가 있습니다. 지금도 해군 기지라 투어로만 들어갑니다.', 'The 17th-century island fortress guarding the harbour entrance, with a round harbour; still a naval base, so visits are by tour only.', 'Kungsholms fort', 180, 240, group=DAY,
            n='대체로 여름에만 배로 가는 가이드 투어가 있고, 신분증이 필요합니다.|Guided boat tours run mainly in summer; bring ID.'),
      ],
      hubs="    air: [['Ronneby (RNB)', '론네뷔 공항 (RNB)', '시내에서 약 25km|about 25 km from town']],\n    rail: [['Karlskrona Centralstation', '칼스크로나 중앙역']],\n",
      itinerary={'days': [['', 2, 3, 1]], 'trips': [['쿵스홀름 요새|Kungsholm Fortress', 4]]},
      season='여름엔 군도 배편과 요새 투어가 다니고, 겨울엔 시내 박물관 위주로 봅니다.|Archipelago boats and fortress tours run in summer; winter is mainly for the town and museum.',
      stay=[('트로쇠 섬 시내', 'Trossö town centre', 'Trossö Karlskrona', '걸어서 다 보기|Everything on foot', '역과 광장, 해군 박물관이 모인 중심 섬입니다.|The central island with the station, square and naval museum.')],
      routes=[('routes-central.ts', LAST, "  r('malmo', 'karlskrona', 'train', 200),\n  r('stockholm', 'karlskrona', 'flight', 60, { n: '론네뷔 공항|Ronneby airport' }),\n")],
      transit=dict(modes=['walk', 'bus', 'train', 'ferry'], ko='중심 섬은 걸어서 다닙니다. 여름엔 군도 섬으로 배가 다닙니다.', en='Walk the central island; in summer boats run out to the archipelago.')),
    C(id='visby', after='karlskrona', ko='비스뷔', en='Visby', native='Visby', lat=57.6348, lng=18.2948,
      blurb=['발트해 고틀란드섬의 한자 동맹 도시. 3km 넘는 13세기 성벽과 중세 교회 폐허가 거의 그대로 남아 세계유산이 되었고, 여름이면 장미와 휴가객으로 가득합니다.',
             'The Hanseatic town on the Baltic island of Gotland, its 13th-century walls of more than 3 km and medieval church ruins so complete that it is a World Heritage Site; in summer it fills with roses and holidaymakers.'],
      highlights=[
          H('성벽', 'Visby city wall', '13세기에 쌓은 3km 넘는 성벽과 탑이 시내를 둘러싸고 있어, 성벽 따라 걷거나 성문 밖 공원에서 봅니다.', 'More than 3 km of 13th-century walls and towers ringing the town; walk along them or view them from the parks outside the gates.', 'Ringmuren Visby', 60, 90),
          H('성모 마리아 대성당', 'Visby Cathedral', '12~13세기 독일 상인들이 지은 교회로, 비스뷔의 중세 교회 가운데 지금도 쓰이는 유일한 곳입니다.', 'The church built by German merchants in the 12th–13th centuries, the only one of Visby’s medieval churches still in use.', 'Visby Cathedral', 20, 30),
          H('중세 교회 폐허', 'Medieval church ruins', '대광장의 성 카타리나 교회 등 지붕 없이 남은 중세 교회 폐허가 시내 곳곳에 있습니다.', 'Roofless medieval church ruins such as St Karin’s on the main square, scattered all over town.', 'S:ta Karins kyrkoruin', 30, 60),
          H('고틀란드 박물관', 'Gotland Museum', '바이킹 시대 그림돌과 섬에서 나온 은 보물을 전시하는 박물관입니다.', 'The museum of Viking-age picture stones and silver hoards found on the island.', 'Gotlands Museum', 60, 90),
          H('포뢰섬의 라우카르', 'Fårö sea stacks', '고틀란드 북쪽 포뢰섬 해안에 늘어선 석회암 돌기둥 ‘라우카르’로, 감독 잉마르 베리만이 살던 섬입니다.', 'The limestone sea stacks, or raukar, lining the shore of Fårö in the north, the island where the director Ingmar Bergman lived.', 'Langhammars', 360, 480, group=DAY,
            n='비스뷔에서 차로 약 1시간 뒤 무료 카페리로 건넙니다. 버스는 드뭅니다.|About an hour by car from Visby, then a free car ferry; buses are rare.'),
      ],
      hubs="    air: [['Visby (VBY)', '비스뷔 공항 (VBY)']],\n    port: [['Visby', '비스뷔 항구', '니네스함·오스카르스함행 데스티나숀 고틀란드|Destination Gotland to Nynäshamn and Oskarshamn']],\n",
      itinerary={'days': [['', 1, 3, 2, 4]], 'trips': [['포뢰섬|Fårö', 5]]},
      season='6~8월이 성수기이고, 8월 초 중세 주간엔 시내가 중세 축제로 바뀝니다. 겨울엔 가게가 많이 닫습니다.|June to August is high season, and early August’s Medieval Week turns the town into a medieval festival; many places close in winter.',
      stay=[('성벽 안 구시가', 'Inside the walls', 'Visby innerstad', '분위기|Atmosphere', '중세 골목 안에서 묵습니다. 여름엔 일찍 예약하세요.|Stay among the medieval lanes; book early for summer.'),
            ('항구 근처', 'By the harbour', 'Visby hamn', '교통이 편한 곳|Convenient', '페리 터미널과 버스가 가깝고 성벽까지 걸어갑니다.|Close to the ferry terminal and buses, a walk from the walls.')],
      routes=[('routes-central.ts', LAST, "  r('stockholm', 'visby', 'flight', 40),\n  r('stockholm', 'visby', 'ferry', 195, { fb: '니네스함 항구|Nynäshamn' }),\n")],
      transit=dict(modes=['walk', 'bike', 'bus', 'ferry'], ko='구시가는 걸어서 다닙니다. 섬 여행은 버스가 적어 자전거나 차를 빌리는 편이 좋습니다.', en='Walk the old town; buses round the island are few, so hire a bike or car.'),
      apps=''),
    C(id='hoga-kusten', after='kiruna', ko='회가쿠스텐', en='High Coast', native='Höga Kusten', lat=62.8000, lng=17.9400,
      blurb=['보트니아만의 높은 해안. 빙하가 녹은 뒤 땅이 286m나 솟아올라 세계에서 가장 높은 옛 해안선이 남은 세계유산으로, 붉은 바위산과 숲, 섬이 이어집니다.',
             'The coast of the Gulf of Bothnia where the land has risen 286 m since the ice melted, leaving the world’s highest raised shoreline—a World Heritage landscape of red-granite hills, forest and islands.'],
      highlights=[
          H('회가쿠스텐 다리', 'High Coast Bridge', '1997년 완공한 길이 1,867m의 현수교로, 다리 북쪽 전망대에서 강 하구와 숲이 내려다보입니다.', 'The 1,867 m suspension bridge completed in 1997, with views over the river mouth and forests from the viewpoint at its northern end.', 'Höga Kusten-bron', 30, 45),
          H('스쿨레베리에트산', 'Skuleberget', '옛 해안선이 바위에 그대로 남은 높이 295m의 산으로, 걸어서 오르거나 암벽 코스로 올라 해안을 내려다봅니다.', 'A 295 m hill where the old shoreline is still visible on the rock; hike or take the via ferrata to the top for coastal views.', 'Skuleberget', 120, 180),
          H('스쿨레스코겐 국립공원', 'Skuleskogen National Park', '바다로 이어지는 숲속 국립공원으로, 길이 약 200m의 깊은 바위 틈 슬로트달스크레반을 걸어 지납니다.', 'The forested national park running down to the sea, where trails pass through the deep rock cleft of Slåttdalsskrevan, some 200 m long.', 'Slåttdalsskrevan', 240, 360),
          H('울뵌섬', 'Ulvön', '빨간 어부 오두막이 늘어선 섬마을로, 삭힌 청어 ‘수르스트뢰밍’으로 유명합니다.', 'An island village of red fishermen’s huts, famous for fermented herring, surströmming.', 'Ulvöhamn', 300, 420, group=DAY,
            n='대체로 여름에만 북쪽 해안 선착장에서 배가 다닙니다.|Boats run from harbours on the northern coast, mainly in summer.'),
      ],
      hubs="    air: [['Kramfors-Sollefteå (KRF)', '크람포르스 공항 (KRF)']],\n    rail: [['Kramfors', '크람포르스역'], ['Örnsköldsvik C', '외른셸스비크 중앙역']],\n",
      itinerary={'days': [['', 1, 2], ['', 3]], 'trips': [['울뵌섬|Ulvön', 4]]},
      season='6~9월에 산길과 섬 배편이 열리고 백야에 가까운 긴 해가 있습니다. 겨울엔 시설 대부분이 닫습니다.|Trails and island boats operate June to September under very long days; most services close in winter.',
      stay=[('도크스타·스쿨레베리에트 주변', 'Docksta & Skuleberget', 'Docksta', '자연|Nature', '산과 국립공원 출발점이 가깝습니다. 차가 있으면 편합니다.|Close to the hill and national park trailheads; easiest with a car.'),
            ('외른셸스비크', 'Örnsköldsvik', 'Örnsköldsvik', '교통이 편한 곳|Convenient', '기차역과 식당이 있는 해안 도시로, 북쪽 거점으로 좋습니다.|A coastal town with a station and restaurants, a good northern base.')],
      routes=[('routes-central.ts', LAST, "  r('stockholm', 'hoga-kusten', 'train', 300, { n: '크람포르스·외른셸스비크역|to Kramfors or Örnsköldsvik' }),\n")],
      transit=dict(modes=['bus', 'train', 'ferry', 'taxi'], ko='명소가 해안을 따라 흩어져 있고 버스가 적어 차를 빌리는 편이 좋습니다.', en='Sights are spread along the coast and buses are few, so a hire car is best.')),
    C(id='are', after='hoga-kusten', ko='오레', en='Åre', native='Åre', lat=63.3990, lng=13.0815,
      blurb=['스웨덴 최대의 스키 리조트가 있는 산악 마을. 겨울엔 오레스쿠탄산 슬로프, 여름엔 산악자전거와 등산, 폭포를 찾아 갑니다.',
             'The mountain village with Sweden’s largest ski resort: the slopes of Åreskutan in winter, mountain biking, hiking and waterfalls in summer.'],
      highlights=[
          H('오레스쿠탄산과 케이블카', 'Åreskutan & cable car', '높이 1,420m의 산으로, 마을에서 케이블카를 타고 정상 가까이 올라 산맥과 호수를 내려다봅니다.', 'The 1,420 m mountain; ride the cable car from the village close to the top for views over the ranges and lakes.', 'Kabinbanan Åre', 120, 240,
            n='케이블카는 겨울 스키철과 여름철에 운행합니다.|The cable car runs in the ski season and in summer.'),
          H('오레 스키장', 'Åre ski area', '스웨덴 최대의 스키장으로, 세계 선수권 대회가 열린 슬로프가 마을 바로 위에서 시작됩니다.', 'Sweden’s largest ski area, whose World Championship slopes start right above the village.', 'Åre Skistar', 240, 480,
            n='대체로 12월~4월에 운영합니다.|Usually open December to April.'),
          H('텐포르센 폭포', 'Tännforsen', '높이 약 32m로 쏟아지는 스웨덴에서 손꼽히게 큰 폭포로, 겨울엔 얼어붙습니다.', 'One of Sweden’s largest waterfalls, plunging about 32 m, and frozen in winter.', 'Tännforsen', 60, 90, group=DAY,
            n='오레에서 서쪽으로 차로 약 20분입니다.|About 20 min west of Åre by car.'),
      ],
      hubs="    air: [['Åre Östersund (OSD)', '오레 외스테르순드 공항 (OSD)', '오레까지 약 100km|about 100 km to Åre']],\n    rail: [['Åre', '오레역']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['텐포르센 폭포|Tännforsen', 3]]},
      season='12월~4월은 스키철이고, 7~8월은 산악자전거와 등산철입니다. 봄가을엔 문 닫는 곳이 많습니다.|December to April is ski season and July–August is for biking and hiking; many places close in spring and autumn.',
      stay=[('오레 마을', 'Åre village', 'Åre torg', '스키·교통|Skiing & transport', '역과 케이블카, 슬로프가 모두 걸어서 갈 수 있습니다.|The station, cable car and slopes are all within walking distance.')],
      routes=[('routes-central.ts', LAST, "  r('stockholm', 'are', 'train', 390, { ...R, n: '야간열차도 있음|night trains too' }),\n")],
      transit=dict(modes=['walk', 'bus', 'train'], ko='마을 안은 걸어서 다니고, 스키철엔 리조트 셔틀버스가 다닙니다.', en='Walk the village; resort shuttle buses run in the ski season.')),
    C(id='lulea', after='are', ko='룰레오', en='Luleå', native='Luleå', lat=65.5848, lng=22.1547,
      blurb=['보트니아만 북쪽 끝의 항구 도시. 15세기 교회를 둘러싼 오두막 400여 채의 감멜스타드 교회 마을이 세계유산이고, 겨울엔 얼어붙은 바다 위로 얼음길이 열립니다.',
             'The port at the top of the Gulf of Bothnia, whose Gammelstad church town of some 400 cottages around a 15th-century church is a World Heritage Site; in winter ice roads open across the frozen sea.'],
      highlights=[
          H('감멜스타드 교회 마을', 'Gammelstad Church Town', '멀리 사는 신자들이 예배 때 묵던 붉은 오두막 400여 채가 15세기 돌 교회를 둘러싼 세계유산 마을입니다.', 'The World Heritage village of some 400 red cottages, where distant parishioners stayed for church, around a 15th-century stone church.', 'Gammelstad Church Town', 90, 120,
            n='시내에서 버스로 약 20분입니다.|About 20 min from the centre by bus.'),
          H('룰레오 군도', 'Luleå archipelago', '1,300개 넘는 섬의 군도로, 여름엔 배로 섬에 가고 겨울엔 얼어붙은 바다 위 얼음길과 스케이트 길을 걷습니다.', 'An archipelago of more than 1,300 islands—by boat in summer, and in winter by ice roads and skating tracks across the frozen sea.', 'Luleå skärgård', 180, 360, group=DAY),
          H('노르보텐 박물관', 'Norrbotten Museum', '사미 문화와 북쪽 지방의 생활사를 전시하는 지방 박물관입니다.', 'The regional museum of Sámi culture and life in the far north.', 'Norrbottens museum', 60, 90),
          H('트리호텔', 'Treehotel', '하라즈 숲속 나무 위에 거울 상자·새 둥지 같은 객실을 매단 디자인 호텔로, 일부 객실은 투어로 둘러봅니다.', 'The design hotel in the forest at Harads, with rooms such as a mirror cube and a bird’s nest hung in the trees; some can be seen on tours.', 'Treehotel Harads', 180, 300, group=DAY,
            n='룰레오에서 차로 약 1시간입니다. 숙박객이 아니면 투어 일정을 미리 확인하세요.|About an hour from Luleå by car; if not staying, check tour times in advance.'),
      ],
      hubs="    air: [['Luleå (LLA)', '룰레오 공항 (LLA)']],\n    rail: [['Luleå', '룰레오역']],\n",
      itinerary={'days': [['', 1, 3]], 'trips': [['룰레오 군도|Luleå archipelago', 2], ['트리호텔|Treehotel', 4]]},
      season='1~3월엔 얼음길과 오로라, 6~7월엔 지지 않는 해 아래 군도 배편이 좋습니다.|January to March brings ice roads and the aurora; June and July bring archipelago boats under the midnight sun.',
      stay=[('시내 중심', 'City centre', 'Luleå centrum', '교통이 편한 곳|Convenient', '역과 식당, 항구가 가깝고 감멜스타드까지 버스가 다닙니다.|Close to the station, restaurants and harbour, with buses to Gammelstad.')],
      routes=[('routes-central.ts', LAST, "  r('stockholm', 'lulea', 'flight', 75),\n  r('stockholm', 'lulea', 'train', 840, { ...R, n: '야간열차|night train' }),\n  r('lulea', 'kiruna', 'train', 240),\n")],
      transit=dict(modes=['walk', 'bus', 'train', 'taxi'], ko='시내는 걸어서 다니고, 감멜스타드는 시내버스로 갑니다.', en='Walk the centre; take a city bus to Gammelstad.')),
    C(id='abisko', after='kiruna', ko='아비스코', en='Abisko', native='Abisko', lat=68.3495, lng=18.8312,
      blurb=['키루나 서쪽 토르네 호숫가의 작은 국립공원 마을. 산에 가려 하늘이 맑은 날이 많아 오로라 명소로 꼽히고, 440km 산길 쿵스레덴이 시작됩니다.',
             'A small national-park village on Lake Torneträsk west of Kiruna; sheltered by mountains, it often has clear skies and is a celebrated aurora spot, and the 440 km Kungsleden trail starts here.'],
      highlights=[
          H('오로라 스카이 스테이션', 'Aurora Sky Station', '체어리프트로 뉼랴산 900m 높이에 올라 겨울밤 오로라를 기다리는 관측소로, 여름엔 백야를 봅니다.', 'The mountain station some 900 m up Mount Nuolja, reached by chairlift, for watching the aurora on winter nights and the midnight sun in summer.', 'Aurora Sky Station', 180, 240,
            n='날마다 여는 시간이 다르고 예약이 필요합니다. 산 위는 매우 추우니 옷을 단단히 입으세요.|Hours vary by day and booking is needed; it is very cold up top, so dress warmly.'),
          H('아비스코 국립공원과 협곡', 'Abisko National Park & canyon', '역 가까이에서 시작하는 숲길로, 청록빛 물이 흐르는 아비스코 강 협곡을 따라 걷습니다.', 'The trails starting near the station, following the canyon of the turquoise Abiskojåkka river.', 'Abiskojåkka canyon', 60, 120),
          H('쿵스레덴 산길', 'Kungsleden', '아비스코에서 남쪽으로 이어지는 440km 산길로, 하루 구간만 걸어도 산과 계곡 풍경이 좋습니다.', 'The 440 km trail heading south from Abisko; even a day’s stretch gives fine mountain and valley scenery.', 'Kungsleden Abisko', 240, 480,
            n='산장은 대체로 2~4월과 6월 말~9월에 엽니다.|Mountain huts are usually open February–April and late June–September.'),
          H('라포르텐', 'Lapporten', '빙하가 깎아 만든 U자 계곡으로, 토르네 호수 너머로 사미족의 관문처럼 보입니다.', 'The glacier-carved U-shaped valley that frames the view across Lake Torneträsk like a gateway to Sápmi.', 'Lapporten', 30, 60),
      ],
      hubs="    rail: [['Abisko Turiststation', '아비스코 투리스트스타숀역']],\n",
      itinerary={'days': [['', 2, 4], ['', 3]], 'trips': [['오로라 스카이 스테이션|Aurora Sky Station', 1]]},
      season='9월~3월엔 오로라, 6월~7월엔 지지 않는 해 아래 산행이 좋습니다.|September to March for the aurora; June and July for hiking under the midnight sun.',
      stay=[('아비스코 투리스트스타숀', 'Abisko Turiststation', 'Abisko Turiststation', '자연·교통|Nature & transport', '역과 국립공원 입구, 산장이 함께 있습니다. 숙소가 적어 일찍 예약하세요.|The station, park entrance and lodge are together; rooms are few, so book early.'),
            ('아비스코 마을', 'Abisko village', 'Abisko Östra', '조용한 마을|Quiet village', '작은 상점과 숙소가 있는 마을입니다.|The village with a small shop and guesthouses.')],
      routes=[('routes-central.ts', LAST, "  r('kiruna', 'abisko', 'train', 80),\n")],
      transit=dict(modes=['walk', 'train', 'bus'], ko='역과 산길, 관측소는 걸어서 다닙니다. 키루나와는 기차로 오갑니다.', en='Walk between the station, trails and sky station; take the train to and from Kiruna.')),
]

SE_NEW = """    cityIds: ['stockholm', 'uppsala', 'falun', 'gothenburg', 'malmo', 'lund', 'ystad', 'kalmar', 'karlskrona', 'visby', 'hoga-kusten', 'are', 'lulea', 'kiruna', 'abisko'],
    cityGroups: [
      { title: { ko: '스톡홀름·중부', en: 'Stockholm & central Sweden' }, cityIds: ['stockholm', 'uppsala', 'falun'] },
      { title: { ko: '서해안', en: 'West coast' }, cityIds: ['gothenburg'] },
      { title: { ko: '스코네', en: 'Skåne' }, cityIds: ['malmo', 'lund', 'ystad'] },
      { title: { ko: '남동부·섬', en: 'Southeast & Gotland' }, cityIds: ['kalmar', 'karlskrona', 'visby'] },
      { title: { ko: '북부', en: 'Northern Sweden' }, cityIds: ['hoga-kusten', 'are', 'lulea', 'kiruna', 'abisko'] },
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
    i = k.index("    id: 'se',")
    j = k.index('    cityGroups: [', i)
    e = k.index('    ],\n', j) + len('    ],\n')
    s = k.index('    cityIds: [', i)
    assert s < j
    k = k[:s] + SE_NEW + k[e:]
    wr('countries.ts', k)
