#!/usr/bin/env python3
"""Sweden 2nd pass, new cities (2026-11-27, user picked all 16): Sigtuna, Vaxholm & archipelago (Stockholm); Örebro;
Västerås (Västmanland); Vadstena, Linköping & Göta Canal (Östergötland); Jönköping & Gränna; Växjö & Kingdom of Crystal
(Kronoberg); Helsingborg, Österlen/Simrishamn (Skåne); Smögen & Bohuslän coast (Västra Götaland); Karlstad (Värmland);
Mora & Rättvik (Dalarna); Gävle (Gävleborg); Umeå (Västerbotten); Jokkmokk (Norrbotten). Facts from Wikipedia and the
sites' own pages; times are rounded usual timings (SJ / regional operators, 2026-11-27). Groups rebuilt afterwards into
the official counties. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places3 import trip

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
NEAR = ('근교', 'Nearby')
FIRST = '처음 가는 여행에 추천|Best for a first visit'
SUMMER = '여름철 위주로 운영합니다.|Mainly in summer.'
RC = 'routes-central.ts'
R_AFTER = r"^  r\('stockholm', 'falun', 'train', 170\),\n"
ARN = "['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)']"
GOT = "['Göteborg Landvetter (GOT)', '예테보리 란드베테르 공항 (GOT)']"
CPH = "['Copenhagen Kastrup (CPH)', '코펜하겐 공항 (CPH)', '덴마크 · 기차로 연결|Denmark · linked by train']"
MMX = "['Malmö (MMX)', '말뫼 공항 (MMX)']"
LLA = "['Luleå (LLA)', '룰레오 공항 (LLA)']"


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
    d = dict(country='se', hubs_file='hubs-central.ts', hubs_before='  // —— fi ——\n', itin_file='itinerary-north.ts',
             itin_before='  helsinki: {', visit_file='visit-nordic.ts', visit_after=r"^  'stockholm-h1': v\(.*\),\n",
             stay_before='  stockholm: [', transit_before='  stockholm: {', places=None, daytrips=[], apps='')
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
    C(id='sigtuna', group_title=None, after='stockholm', ko='시그투나', en='Sigtuna', native='Sigtuna', lat=59.6173, lng=17.7236,
      blurb=['980년 무렵에 세워진, 지금도 사람이 사는 스웨덴에서 가장 오래된 도시로 꼽힙니다. 멜라렌 호숫가 옛 중심가에 중세 교회 폐허와 룬 문자 돌이 흩어져 있습니다.',
             'Founded around 980 and counted as Sweden’s oldest still-inhabited town, with medieval church ruins and runestones scattered around its old main street on Lake Mälaren.'],
      highlights=[
          H('스토라 가탄과 옛 시가지', 'Stora gatan & old town', '스웨덴에서 가장 오래된 거리로 꼽히는 중심가로, 낮은 목조 가옥과 카페가 늘어서 있습니다.', 'The main street, counted as Sweden’s oldest, lined with low wooden houses and cafés.', 'Stora gatan Sigtuna', 45, 60, b='no', n=FREE),
          H('마리아 교회', 'St Mary’s Church (Mariakyrkan)', '13세기 도미니코회 수도원의 붉은 벽돌 교회로, 지금도 교구 교회로 쓰입니다.', 'The red-brick church of a 13th-century Dominican friary, still the parish church.', 'Mariakyrkan Sigtuna', 20, 30, b='no', n=FREE),
          H('성 페르·성 올로프 교회 폐허', 'St Per & St Olof church ruins', '12세기 돌 교회들의 폐허로, 중세 시그투나가 얼마나 컸는지 보여 줍니다.', 'Ruins of 12th-century stone churches that show how important medieval Sigtuna was.', 'S:t Olofs kyrkoruin Sigtuna', 20, 30, b='no', n=FREE),
          H('시그투나 박물관', 'Sigtuna Museum', '바이킹 시대와 중세 시그투나에서 나온 유물을 보여 주는 박물관입니다.', 'A museum of finds from Viking-age and medieval Sigtuna.', 'Sigtuna Museum & Art', 45, 60),
          H('스코클로스터 성', 'Skokloster Castle', '17세기 원수 칼 구스타브 브랑엘이 지은 바로크 성으로, 무기와 가구 수집품이 그대로 남아 있습니다.', 'A Baroque castle built in the 17th century by Field Marshal Carl Gustaf Wrangel, with its arms and furnishings still in place.', 'Skoklosters slott', 90, 120, group=NEAR, n=SUMMER),
      ],
      hubs=hubs([ARN], "['Sigtuna busstation', '시그투나 버스 정류장', '메르스타역·알란다행|to Märsta station, Arlanda']"),
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['스코클로스터 성|Skokloster Castle', 5]]},
      season='5~9월이 좋고, 여름엔 호숫가 산책과 카페가 즐겁습니다.|May–September; summer is best for lakeside walks and cafés.',
      stay=[('옛 시가지', 'Old town', 'Sigtuna', FIRST, '중심가와 호숫가가 걸어서 닿습니다.|The main street and lakeshore on foot.'),
            ('스톡홀름에서 당일치기', 'Day trip from Stockholm', 'Stockholm', '당일치기|As a day trip', '기차와 버스로 1시간 안팎이라 스톡홀름에서 다녀오기 좋습니다.|About an hour by train and bus, easy as a day trip from Stockholm.')],
      routes=[R('stockholm', 'sigtuna', 'train', 55, "n: '메르스타역에서 버스 환승|bus from Märsta station'"), R('uppsala', 'sigtuna', 'bus', 50)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 스코클로스터는 차나 여름 유람선으로 갑니다.', en='Walk the town; reach Skokloster by car or summer boat.')),
    C(id='vaxholm', group_title=None, after='stockholm', ko='박스홀름·스톡홀름 군도', en='Vaxholm & Stockholm archipelago', native='Vaxholm', lat=59.4024, lng=18.3513,
      blurb=['스톡홀름 군도의 관문 섬 마을로, 바다 위 요새와 하얀 목조 가옥이 있습니다. 여기서 배를 갈아타고 군도의 섬들로 나갑니다.',
             'The gateway island town of the Stockholm archipelago, with a fortress in the strait and white wooden houses; from here boats fan out to the islands.'],
      highlights=[
          H('박스홀름 요새', 'Vaxholm Fortress', '스톡홀름으로 들어오는 바닷길을 지키던 요새로, 작은 배로 건너가며 안에 요새 박물관이 있습니다.', 'The fortress guarding the sea approach to Stockholm, reached by a short boat ride, with a fortress museum inside.', 'Vaxholms kastell', 60, 90, n=SUMMER),
          H('박스홀름 항구와 옛 마을', 'Vaxholm harbour & old town', '항구를 따라 여름 별장풍 목조 가옥과 카페가 이어집니다.', 'Wooden summer-villa houses and cafés along the harbour.', 'Vaxholm hamn', 45, 60, b='no', n=FREE),
          H('그린다섬', 'Grinda', '군도 한가운데 숲과 바위 해변이 있는 섬으로, 여름엔 헤엄치고 걷기 좋습니다.', 'An island in the middle archipelago with woods and rocky beaches, good for swimming and walks in summer.', 'Grinda', 240, 360, group=DAY, b='no', n=SUMMER),
          H('산드함', 'Sandhamn', '바깥 군도의 요트 마을로, 좁은 골목과 모래 해변이 있습니다.', 'A sailing village in the outer archipelago, with narrow lanes and sandy beaches.', 'Sandhamn', 300, 420, group=DAY, n=SUMMER),
      ],
      hubs=hubs([ARN], "['Vaxholm busstation', '박스홀름 버스 정류장', '스톡홀름 테크니스카 회그스콜란행|to Tekniska högskolan, Stockholm']", "['Vaxholm', '박스홀름 선착장', '스톡홀름 스트룀카옌·군도행|to Strömkajen and the islands']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['그린다|Grinda', 3], ['산드함|Sandhamn', 4]]},
      season='6~8월이 군도 배편이 가장 많고 바다 수영도 할 수 있습니다.|June–August, when archipelago boats run most often and the sea is swimmable.',
      stay=[('박스홀름 항구', 'Vaxholm harbour', 'Vaxholm', FIRST, '선착장과 버스, 식당이 모여 있습니다.|Near the boats, buses and restaurants.'),
            ('스톡홀름에서 당일치기', 'Day trip from Stockholm', 'Stockholm', '당일치기|As a day trip', '배나 버스로 1시간 안팎입니다.|About an hour by boat or bus.')],
      routes=[R('stockholm', 'vaxholm', 'bus', 50), R('stockholm', 'vaxholm', 'ferry', 60, "fa: '스트룀카옌|Strömkajen'")],
      transit=dict(modes=['walk', 'ferry', 'bus'], ko='섬 사이는 군도 배(박스홀름스볼라게트)로 다니고, 마을 안은 걸어서 다닙니다.', en='Archipelago boats (Waxholmsbolaget) link the islands; walk within each village.')),
    C(id='orebro', group_title=None, after='falun', ko='외레브로', en='Örebro', native='Örebro', lat=59.2741, lng=15.2066,
      blurb=['스웨덴 중부의 대학 도시로, 강 가운데 섬에 선 해자 두른 성이 시내 한가운데를 차지합니다. 옛 목조 가옥을 옮겨 놓은 마을 공원도 있습니다.',
             'A university city in central Sweden, centred on a moated castle on an island in the river, with a park village of old wooden houses.'],
      highlights=[
          H('외레브로성', 'Örebro Castle', '스바르트강 섬 위의 해자 두른 성으로, 13세기에 시작해 16세기에 지금 모습이 되었습니다.', 'A moated castle on an island in the Svartån, begun in the 13th century and given its present form in the 16th.', 'Örebro slott', 45, 75),
          H('바드쾨핑', 'Wadköping', '18~19세기 목조 가옥을 옮겨 모은 마을로, 공방과 카페가 있습니다.', 'A village of 18th–19th-century wooden houses moved here, with craft shops and a café.', 'Wadköping', 45, 60, b='no', n=FREE),
          H('스밤펜 급수탑', 'Svampen water tower', '1958년에 세운 버섯 모양 급수탑으로, 꼭대기 전망대와 카페에서 시내가 내려다보입니다.', 'A mushroom-shaped water tower from 1958 with a lookout and café on top.', 'Svampen Örebro', 30, 45),
          H('성 니콜라이 교회', 'St Nicolai Church', '13세기에 지은 시내 중심 광장의 교회입니다.', 'The 13th-century church on the main square.', 'Sankt Nicolai kyrka Örebro', 15, 20, b='no', n=FREE),
      ],
      hubs=hubs(["['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차로 약 2시간 30분|About 2 hr 30 min by train']"], "['Örebro resecentrum', '외레브로 버스터미널']", None, "['Örebro C', '외레브로 중앙역']"),
      itinerary={'days': [['', 1, 4, 2, 3]]},
      season='5~9월이 좋습니다.|May–September.',
      stay=[('시내 중심', 'City centre', 'Örebro', FIRST, '역과 성, 광장이 걸어서 닿습니다.|The station, castle and square on foot.')],
      routes=[R('stockholm', 'orebro', 'train', 120), R('gothenburg', 'orebro', 'train', 170)],
      transit=dict(modes=['walk', 'bus', 'bike'], ko='시내는 걸어서 다니고, 바드쾨핑은 강변 공원을 따라 걷습니다.', en='Walk the centre; follow the riverside park to Wadköping.')),
    C(id='vasteras', group_title=None, after='falun', ko='베스테로스', en='Västerås', native='Västerås', lat=59.6099, lng=16.5448,
      blurb=['멜라렌 호숫가 도시로, 대성당 옆 옛 동네 퀴르크바켄과 바이킹 시대 큰 무덤 언덕 아눈스회그가 있습니다.',
             'A city on Lake Mälaren with the old Kyrkbacken quarter beside its cathedral and the Viking-age mound of Anundshög outside town.'],
      highlights=[
          H('베스테로스 대성당', 'Västerås Cathedral', '13세기에 지은 대성당으로, 에리크 14세 왕의 무덤이 있습니다.', 'A cathedral begun in the 13th century, with the tomb of King Erik XIV.', 'Västerås domkyrka', 20, 30, b='no', n=FREE),
          H('퀴르크바켄', 'Kyrkbacken', '대성당 뒤 언덕에 작은 목조 가옥이 모인 옛 동네입니다.', 'The old quarter of small wooden houses on the hill behind the cathedral.', 'Kyrkbacken Västerås', 30, 45, b='no', n=FREE),
          H('발비 야외 박물관', 'Vallby Open-Air Museum', '이 지역 옛 농가와 공방 건물을 옮겨 모은 야외 박물관입니다.', 'An open-air museum of old farm and craft buildings from the region.', 'Vallby friluftsmuseum', 60, 90, b='no', n=FREE),
          H('아눈스회그', 'Anundshög', '스웨덴에서 가장 큰 고분으로 꼽히는 무덤 언덕으로, 배 모양 돌 배치와 룬 문자 돌이 함께 있습니다.', 'Counted as Sweden’s largest burial mound, with ship-shaped stone settings and a runestone beside it.', 'Anundshög', 45, 60, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차·버스로 약 1시간 30분|About 1 hr 30 min by train or bus']"], "['Västerås resecentrum', '베스테로스 버스터미널']", None, "['Västerås C', '베스테로스 중앙역']"),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['아눈스회그|Anundshög', 4]]},
      season='5~9월이 좋습니다.|May–September.',
      stay=[('시내 중심', 'City centre', 'Västerås', FIRST, '역과 대성당이 가깝습니다.|Near the station and cathedral.')],
      routes=[R('stockholm', 'vasteras', 'train', 60), R('vasteras', 'orebro', 'train', 60)],
      transit=dict(modes=['walk', 'bus', 'bike'], ko='시내는 걸어서 다니고, 아눈스회그와 발비는 버스로 갑니다.', en='Walk the centre; take a bus to Anundshög and Vallby.')),
    C(id='vadstena', group_title=None, after='kalmar', ko='바드스테나', en='Vadstena', native='Vadstena', lat=58.4486, lng=14.8906,
      blurb=['베테른 호숫가의 작은 중세 도시로, 성 비르기타가 세운 수도원과 구스타브 바사의 르네상스 성이 있습니다. 근처에 가장 긴 룬 문자가 새겨진 뢰크 돌이 있습니다.',
             'A small medieval town on Lake Vättern with the abbey founded by St Birgitta and Gustav Vasa’s Renaissance castle; the Rök runestone, with the longest runic inscription, is nearby.'],
      highlights=[
          H('바드스테나 수도원과 블루 교회', 'Vadstena Abbey & Abbey Church', '성 비르기타가 세운 브리짓회 수도원으로, 15세기 수도원 교회가 남아 있습니다.', 'The Bridgettine abbey founded by St Birgitta, with its 15th-century abbey church.', 'Vadstena klosterkyrka', 45, 60, b='no', n=FREE),
          H('바드스테나성', 'Vadstena Castle', '1545년 구스타브 바사가 짓기 시작한 호숫가 르네상스 성입니다.', 'A lakeside Renaissance castle begun by Gustav Vasa in 1545.', 'Vadstena slott', 60, 90, n=SUMMER),
          H('옛 시가지', 'Old town', '중세 시청과 돌집이 남은 작은 골목 동네입니다.', 'Little lanes with a medieval town hall and stone houses.', 'Vadstena', 30, 45, b='no', n=FREE),
          H('뢰크 룬 문자 돌', 'Rök runestone', '9세기 돌로, 세상에서 가장 긴 룬 문자 글이 새겨져 있습니다.', 'A 9th-century stone carrying the world’s longest runic inscription.', 'Rökstenen', 30, 45, group=NEAR, b='no', n=FREE),
          H('옴베리와 알바스트라 수도원 폐허', 'Omberg & Alvastra Abbey ruins', '호숫가 산 옴베리 기슭의 12세기 시토회 수도원 폐허입니다.', 'Ruins of a 12th-century Cistercian abbey at the foot of Omberg hill on the lake.', 'Alvastra klosterruin', 60, 120, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차·버스로 약 3시간 30분|About 3 hr 30 min by train and bus']"], "['Vadstena busstation', '바드스테나 버스 정류장', '미엘뷔·모탈라행|to Mjölby, Motala']"),
      itinerary={'days': [['', 1, 3, 2]], 'trips': [['뢰크 돌|Rök runestone', 4], ['옴베리·알바스트라|Omberg & Alvastra', 5]]},
      season='5~9월이 좋고, 성은 여름에 가장 길게 엽니다.|May–September; the castle keeps its longest hours in summer.',
      stay=[('옛 시가지', 'Old town', 'Vadstena', FIRST, '수도원과 성, 호숫가가 걸어서 닿습니다.|The abbey, castle and lakeshore on foot.')],
      routes=[R('stockholm', 'vadstena', 'train', 210, "n: '미엘뷔역에서 버스 환승|bus from Mjölby'")],
      transit=dict(modes=['walk', 'bus', 'bike'], ko='시내는 걸어서 다니고, 뢰크와 알바스트라는 차나 자전거로 갑니다.', en='Walk the town; reach Rök and Alvastra by car or bike.')),
    C(id='linkoping', group_title=None, after='kalmar', ko='린셰핑·예타 운하', en='Linköping & Göta Canal', native='Linköping', lat=58.4108, lng=15.6214,
      blurb=['외스테르예틀란드의 대학 도시로, 큰 중세 대성당과 옛 동네를 옮겨 놓은 감라 린셰핑이 있습니다. 근처 베리에서 예타 운하 7단 갑문을 볼 수 있습니다.',
             'A university city in Östergötland with a great medieval cathedral and Gamla Linköping, an old town moved into a park; the seven-step Göta Canal locks at Berg are nearby.'],
      highlights=[
          H('린셰핑 대성당', 'Linköping Cathedral', '13세기에 짓기 시작한, 스웨덴에서 큰 대성당에 꼽히는 고딕 성당입니다.', 'A Gothic cathedral begun in the 13th century, one of Sweden’s largest.', 'Linköpings domkyrka', 30, 45, b='no', n=FREE),
          H('감라 린셰핑', 'Gamla Linköping', '옛 목조 가옥을 옮겨 모은 마을 박물관으로, 공방과 가게가 문을 엽니다.', 'An open-air town of relocated wooden houses, with craft workshops and shops.', 'Gamla Linköping', 60, 90, b='no', n=FREE),
          H('스웨덴 공군 박물관', 'Swedish Air Force Museum', '스웨덴 공군 비행기와 냉전 시대 전시를 보여 주는 박물관입니다.', 'A museum of Swedish Air Force aircraft and Cold War history.', 'Flygvapenmuseum', 90, 120, group=NEAR),
          H('베리 갑문 (예타 운하)', 'Berg locks (Göta Canal)', '예타 운하의 7단 갑문으로, 여름엔 배가 계단을 오르내리는 모습을 봅니다.', 'A seven-step flight of locks on the Göta Canal; in summer you can watch boats climb the staircase.', 'Bergs slussar', 45, 60, group=NEAR, b='no', n=FREE),
          H('노르셰핑 산업 경관', 'Norrköping industrial landscape', '강을 따라 옛 방직 공장 건물이 모인 거리로, 노동 박물관이 있습니다.', 'Old textile mills along the river, with the Museum of Work.', 'Industrilandskapet Norrköping', 90, 120, group=DAY, b='no', n=FREE),
      ],
      hubs=hubs(["['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차로 약 2시간 30분|About 2 hr 30 min by train']"], "['Linköping resecentrum', '린셰핑 버스터미널']", None, "['Linköping C', '린셰핑 중앙역']"),
      itinerary={'days': [['', 1, 2], ['', 3, 4]], 'trips': [['노르셰핑|Norrköping', 5]]},
      season='5~9월이 좋고, 운하 배는 여름에만 다닙니다.|May–September; canal boats run only in summer.',
      stay=[('시내 중심', 'City centre', 'Linköping', FIRST, '역과 대성당, 광장이 가깝습니다.|Near the station, cathedral and square.')],
      routes=[R('stockholm', 'linkoping', 'train', 100), R('linkoping', 'vadstena', 'bus', 75, "n: '미엘뷔 환승|change at Mjölby'")],
      transit=dict(modes=['walk', 'bus', 'bike'], ko='시내는 걸어서 다니고, 공군 박물관과 베리 갑문은 버스로 갑니다.', en='Walk the centre; take a bus to the Air Force Museum and Berg locks.')),
    C(id='jonkoping', group_title=None, after='kalmar', ko='옌셰핑·그렌나', en='Jönköping & Gränna', native='Jönköping', lat=57.7826, lng=14.1618,
      blurb=['베테른 호수 남쪽 끝 도시로, 안전성냥 산업의 고향입니다. 호숫가를 따라 북쪽엔 줄무늬 사탕 마을 그렌나와 비싱쇠섬이 있습니다.',
             'A city at the southern tip of Lake Vättern, home of the safety-match industry; up the shore are the candy-cane town of Gränna and Visingsö island.'],
      highlights=[
          H('성냥 박물관', 'Match Museum', '옛 성냥 공장 건물에서 안전성냥 산업의 역사를 보여 줍니다.', 'The story of the safety-match industry in the old match factory.', 'Tändsticksmuseet Jönköping', 45, 60, n=SUMMER),
          H('옌셰핑 주립 박물관', 'Jönköping County Museum', '요한 바우어의 동화 그림 수집품으로 유명한 박물관입니다.', 'A museum known for its collection of John Bauer’s fairy-tale paintings.', 'Jönköpings läns museum', 60, 90),
          H('그렌나와 폴카그리스', 'Gränna & polkagris', '빨강·하양 줄무늬 사탕 폴카그리스의 마을로, 가게에서 사탕 만드는 모습을 볼 수 있습니다.', 'The home of the red-and-white polkagris candy; shops let you watch it being pulled.', 'Gränna', 90, 120, group=NEAR, b='no', n=FREE),
          H('브라헤후스', 'Brahehus', '호수를 내려다보는 언덕 위 17세기 성 폐허로, 전망이 좋습니다.', 'A 17th-century castle ruin on a hill above the lake, with wide views.', 'Brahehus', 20, 30, group=NEAR, b='no', n=FREE),
          H('비싱쇠섬', 'Visingsö', '그렌나에서 배로 가는 섬으로, 성 폐허와 참나무 숲 사이를 마차나 자전거로 돕니다.', 'An island reached by ferry from Gränna, toured by horse carriage or bike among castle ruins and oak woods.', 'Visingsö', 180, 300, group=DAY),
      ],
      hubs=hubs(["['Göteborg Landvetter (GOT)', '예테보리 란드베테르 공항 (GOT)', '버스로 약 1시간 30분|About 1 hr 30 min by bus']"], "['Jönköping resecentrum', '옌셰핑 버스터미널']", None, "['Jönköping C', '옌셰핑 중앙역', '네셰 환승|change at Nässjö']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['그렌나|Gränna', 3, 4], ['비싱쇠|Visingsö', 5]]},
      season='5~9월이 좋고, 호숫가와 섬은 여름이 제철입니다.|May–September; the lakeshore and island are at their best in summer.',
      stay=[('시내 중심', 'City centre', 'Jönköping', FIRST, '역과 호숫가, 박물관이 가깝습니다.|Near the station, lakeshore and museums.'),
            ('그렌나', 'Gränna', 'Gränna', '작은 마을|Small-town stay', '호숫가 작은 마을로, 비싱쇠 배가 여기서 떠납니다.|A small lakeside town where the Visingsö ferry leaves.')],
      routes=[R('stockholm', 'jonkoping', 'train', 200, "n: '네셰 환승|change at Nässjö'"), R('gothenburg', 'jonkoping', 'bus', 100)],
      transit=dict(modes=['walk', 'bus', 'ferry'], ko='시내는 걸어서 다니고, 그렌나는 버스, 비싱쇠는 배를 탑니다.', en='Walk the centre; bus to Gränna and ferry to Visingsö.')),
    C(id='vaxjo', group_title=None, after='kalmar', ko='벡셰·유리 왕국', en='Växjö & Kingdom of Crystal', native='Växjö', lat=56.8777, lng=14.8091,
      blurb=['스몰란드 숲과 호수 사이의 도시로, 유리 박물관과 이민자 박물관이 있습니다. 동쪽 숲에는 코스타·오레포르스 같은 유리 공방 마을이 모인 ‘유리 왕국’이 펼쳐집니다.',
             'A city among Småland’s forests and lakes with a glass museum and an emigrant museum; to the east, the “Kingdom of Crystal” gathers glassworks villages such as Kosta and Orrefors.'],
      highlights=[
          H('벡셰 대성당', 'Växjö Cathedral', '중세에 시작된 대성당으로, 현대 유리 작품이 실내를 꾸밉니다.', 'A cathedral of medieval origin with modern glass art inside.', 'Växjö domkyrka', 20, 30, b='no', n=FREE),
          H('스몰란드 문화 공원', 'Kulturparken Småland', '스웨덴 유리 박물관과 이민자의 집(미국 이민 역사)이 함께 있는 박물관 단지입니다.', 'A museum complex with the Swedish Glass Museum and the House of Emigrants, on emigration to America.', 'Kulturparken Småland', 90, 120),
          H('텔레보리성', 'Teleborg Castle', '1900년 무렵 호숫가에 지은 동화 같은 성으로, 바깥에서 보며 호숫가를 걷습니다.', 'A storybook castle built by a lake around 1900, admired from the lakeside path.', 'Teleborgs slott', 30, 45, b='no', n=FREE),
          H('코스타 유리 공방', 'Kosta glassworks', '1742년에 문을 연 유리 공방 마을로, 유리 부는 모습을 보고 아울렛에서 살 수 있습니다.', 'A glassworks village founded in 1742, where you can watch glassblowing and shop at the outlet.', 'Kosta Glasbruk', 120, 180, group=NEAR),
          H('글라스 팩토리 (보다)', 'The Glass Factory (Boda)', '보다 마을의 유리 박물관이자 공방으로, 유리 불기 체험도 합니다.', 'A glass museum and studio in Boda, with glassblowing sessions.', 'The Glass Factory Boda', 90, 120, group=NEAR),
      ],
      hubs=hubs(["['Växjö Småland (VXO)', '벡셰 공항 (VXO)']", CPH], "['Växjö resecentrum', '벡셰 버스터미널']", None, "['Växjö', '벡셰역']"),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['코스타|Kosta', 4], ['보다|Boda', 5]]},
      season='5~9월이 좋습니다. 유리 공방은 여름에 가장 오래 엽니다.|May–September; the glassworks keep their longest hours in summer.',
      stay=[('시내 중심', 'City centre', 'Växjö', FIRST, '역과 대성당, 박물관이 가깝습니다.|Near the station, cathedral and museums.'),
            ('코스타', 'Kosta', 'Kosta', '유리 마을|Glass village', '유리 공방 옆 호텔에서 묵을 수 있습니다.|Stay at the hotel beside the glassworks.')],
      routes=[R('malmo', 'vaxjo', 'train', 120), R('vaxjo', 'kalmar', 'train', 70), R('stockholm', 'vaxjo', 'train', 210, "n: '알베스타 환승|change at Alvesta'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 유리 공방 마을은 차나 지역 버스로 갑니다.', en='Walk the centre; reach the glass villages by car or regional bus.')),
    C(id='helsingborg', group_title=None, after='malmo', ko='헬싱보리', en='Helsingborg', native='Helsingborg', lat=56.0465, lng=12.6945,
      blurb=['외레순 해협에서 덴마크 헬싱외르와 마주 보는 항구 도시로, 배로 20분이면 건넙니다. 언덕 위 중세 탑 셰르난과 왕실 여름 궁전 소피에로가 있습니다.',
             'A port city facing Helsingør in Denmark across the Øresund, 20 minutes by ferry, with the medieval Kärnan tower on its hill and the royal summer palace of Sofiero.'],
      highlights=[
          H('셰르난', 'Kärnan', '중세 성채에서 남은 탑으로, 꼭대기에서 해협 건너 덴마크가 보입니다.', 'The surviving tower of a medieval fortress, with views across the strait to Denmark.', 'Kärnan Helsingborg', 30, 45),
          H('소피에로 궁전과 정원', 'Sofiero Palace & gardens', '왕실 여름 궁전으로, 봄철 진달래 정원으로 유명합니다.', 'A royal summer palace famous for its rhododendron gardens in spring.', 'Sofiero slott', 90, 120, group=NEAR, n=SUMMER),
          H('프레드릭스달 야외 박물관', 'Fredriksdal Open-Air Museum', '18세기 장원과 옛 마을 건물, 정원이 있는 야외 박물관입니다.', 'An open-air museum with an 18th-century manor, old village buildings and gardens.', 'Fredriksdal museer och trädgårdar', 90, 120),
          H('둥케르스 문화관', 'Dunkers Kulturhus', '바닷가의 현대 문화센터로, 미술 전시와 도시 박물관이 있습니다.', 'A seaside culture house with art exhibitions and the city museum.', 'Dunkers kulturhus', 45, 60),
          H('쿨라베리', 'Kullaberg', '북쪽 반도 끝 바위 절벽 자연보호구역으로, 쿨렌 등대가 있습니다.', 'A cliff-lined nature reserve at the tip of the peninsula to the north, with the Kullen lighthouse.', 'Kullaberg', 180, 240, group=DAY, b='no', n=FREE),
      ],
      hubs=hubs([CPH], "['Knutpunkten', '크눗풍크텐 버스터미널']", "['Helsingborg', '헬싱보리 여객선 터미널', '덴마크 헬싱외르행 20분|to Helsingør, Denmark, 20 min']", "['Helsingborg C (Knutpunkten)', '헬싱보리 중앙역']"),
      itinerary={'days': [['', 1, 4, 3]], 'trips': [['소피에로|Sofiero', 2], ['쿨라베리|Kullaberg', 5]]},
      season='5~9월이 좋고, 소피에로 정원은 5~6월 진달래가 한창입니다.|May–September; Sofiero’s rhododendrons peak in May and June.',
      stay=[('시내 중심', 'City centre', 'Helsingborg', FIRST, '역과 항구, 셰르난이 걸어서 닿습니다.|The station, harbour and Kärnan on foot.')],
      routes=[R('malmo', 'helsingborg', 'train', 40), R('gothenburg', 'helsingborg', 'train', 150), R('copenhagen', 'helsingborg', 'ferry', 70, "n: '헬싱외르까지 기차, 이어서 배 20분|train to Helsingør, then a 20-minute ferry'")],
      transit=dict(modes=['walk', 'bus', 'ferry', 'bike'], ko='시내는 걸어서 다니고, 소피에로와 쿨라베리는 버스로 갑니다.', en='Walk the centre; take buses to Sofiero and Kullaberg.')),
    C(id='simrishamn', group_title=None, after='malmo', ko='외스테를렌·시므리스함', en='Österlen & Simrishamn', native='Simrishamn', lat=55.5566, lng=14.3502,
      blurb=['스코네 남동쪽 해안 외스테를렌의 중심 항구 마을입니다. 사과밭과 어촌, 중세 성, 청동기 시대 고분이 시골길로 이어집니다.',
             'The harbour town at the heart of Österlen on Skåne’s south-east coast, with apple orchards, fishing villages, a medieval castle and a Bronze Age grave along its country lanes.'],
      highlights=[
          H('시므리스함 항구와 옛 마을', 'Simrishamn harbour & old town', '자갈길과 알록달록한 낮은 집, 12세기 성 니콜라이 교회가 있는 항구 마을입니다.', 'Cobbled lanes, colourful low houses and the 12th-century St Nicolai Church by the harbour.', 'Simrishamn', 45, 60, b='no', n=FREE),
          H('글리밍에후스', 'Glimmingehus', '1499년에 지은, 스칸디나비아에서 가장 잘 남은 중세 성으로 꼽힙니다.', 'Built in 1499 and counted as Scandinavia’s best-preserved medieval castle.', 'Glimmingehus', 60, 90, group=NEAR, n=SUMMER),
          H('키비크 왕의 무덤', 'Kivik King’s Grave', '청동기 시대 큰 돌무덤으로, 안쪽 돌판에 그림이 새겨져 있습니다.', 'A large Bronze Age cairn with carved slabs inside.', 'Kungagraven Kivik', 30, 45, group=NEAR, n=SUMMER),
          H('스텐스후부드 국립공원', 'Stenshuvud National Park', '바다 위로 솟은 언덕과 너도밤나무 숲, 모래 해변이 있는 작은 국립공원입니다.', 'A small national park with a hill above the sea, beech woods and sandy beaches.', 'Stenshuvud nationalpark', 120, 180, group=NEAR, b='no', n=FREE),
          H('브란테비크', 'Brantevik', '돌담과 옛 선장 집이 남은 작은 어촌입니다.', 'A tiny fishing village of stone walls and old skippers’ houses.', 'Brantevik', 30, 45, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs([CPH, MMX], "['Simrishamn busstation', '시므리스함 버스 정류장']", None, "['Simrishamn', '시므리스함역', '말뫼행 종착역|end of the line from Malmö']"),
      itinerary={'days': [['', 1, 5], ['', 2, 3, 4]]},
      season='5~9월이 좋고, 9~10월엔 사과 수확철입니다.|May–September; the apple harvest is in September–October.',
      stay=[('시므리스함', 'Simrishamn', 'Simrishamn', FIRST, '기차역과 항구, 식당이 모여 있습니다.|The station, harbour and restaurants together.'),
            ('외스테를렌 시골 민박', 'Österlen countryside', 'Kivik', '시골 숙소|Countryside stays', '사과밭과 바닷가 마을의 민박에서 묵습니다.|B&Bs among orchards and seaside villages.')],
      routes=[R('malmo', 'simrishamn', 'train', 80), R('ystad', 'simrishamn', 'train', 35)],
      transit=dict(modes=['bus', 'bike', 'taxi'], ko='시골 명소 사이는 차나 자전거가 편하고, 여름엔 지역 버스도 다닙니다.', en='A car or bike is easiest between the countryside sights; regional buses help in summer.')),
    C(id='smogen', group_title=None, after='gothenburg', ko='스뫼겐·보후슬렌 해안', en='Smögen & Bohuslän coast', native='Smögen', lat=58.3592, lng=11.2232,
      blurb=['예테보리 북쪽 보후슬렌 해안의 분홍빛 화강암 섬 마을입니다. 나무 부두와 어시장, 근처의 피엘바카 어촌과 유네스코 세계유산 타눔 암각화가 있습니다.',
             'A pink-granite island village on the Bohuslän coast north of Gothenburg, with its wooden harbour boardwalk and fish market; nearby are the fishing village of Fjällbacka and the UNESCO-listed Tanum rock carvings.'],
      highlights=[
          H('스뫼겐 부두', 'Smögenbryggan', '항구를 따라 수백 미터 이어지는 나무 부두로, 해산물 식당과 가게가 늘어서 있습니다.', 'A long wooden boardwalk along the harbour, lined with seafood restaurants and shops.', 'Smögenbryggan', 45, 60, b='no', n=FREE),
          H('피엘바카', 'Fjällbacka', '바위산 아래 어촌으로, 산 틈 골짜기 ‘왕의 협곡’을 올라 마을과 섬을 내려다봅니다.', 'A fishing village under a granite hill; climb through the King’s Cleft for views of the village and islands.', 'Kungsklyftan Fjällbacka', 90, 120, group=NEAR, b='no', n=FREE),
          H('타눔 암각화', 'Tanum rock carvings', '청동기 시대 배와 사람, 동물 그림을 바위에 새긴 유네스코 세계유산입니다.', 'A UNESCO World Heritage site of Bronze Age carvings of boats, people and animals on bare rock.', 'Vitlyckehällen', 60, 90, group=NEAR, b='no', n=FREE),
          H('마르스트란드와 칼스텐 요새', 'Marstrand & Carlsten Fortress', '자동차 없는 섬 마을과 언덕 위 17세기 요새입니다.', 'A car-free island town with a 17th-century fortress on its hill.', 'Carlstens fästning', 180, 240, group=DAY, n=SUMMER),
      ],
      hubs=hubs([GOT], "['Smögen', '스뫼겐 버스 정류장', '쿵스함·우데발라행|to Kungshamn, Uddevalla']"),
      itinerary={'days': [['', 1]], 'trips': [['피엘바카·타눔|Fjällbacka & Tanum', 2, 3], ['마르스트란드|Marstrand', 4]]},
      season='6~8월이 해안 나들이 철입니다. 가을~겨울엔 문 닫는 식당이 많습니다.|June–August is the coast season; many restaurants close in autumn and winter.',
      stay=[('스뫼겐·쿵스함', 'Smögen & Kungshamn', 'Smögen', FIRST, '부두와 식당이 가깝습니다.|Close to the boardwalk and restaurants.'),
            ('피엘바카', 'Fjällbacka', 'Fjällbacka', '작은 어촌|Fishing village', '바위산 아래 어촌 숙소입니다.|Small lodgings under the granite hill.')],
      routes=[R('gothenburg', 'smogen', 'bus', 150, "n: '환승 1회 이상|one or more changes'")],
      transit=dict(modes=['bus', 'walk', 'ferry'], ko='해안 마을 사이는 차가 편하고, 지역 버스는 환승이 많습니다.', en='A car is easiest between the coastal villages; regional buses need changes.')),
    C(id='karlstad', group_title=None, after='gothenburg', ko='칼스타드', en='Karlstad', native='Karlstad', lat=59.3793, lng=13.5036,
      blurb=['스웨덴에서 가장 큰 호수 베네른과 클라르엘벤강이 만나는 베름란드의 중심 도시입니다. 북쪽 강에서는 여름에 직접 엮은 통나무 뗏목을 타고 내려갑니다.',
             'Värmland’s main city, where the Klarälven river meets Lake Vänern, Sweden’s largest lake; upriver, summer visitors build their own log rafts and float downstream.'],
      highlights=[
          H('외스트라 다리', 'Östra bron', '1811년에 놓은, 스웨덴에서 가장 긴 돌 아치교입니다.', 'Built in 1811, Sweden’s longest stone arch bridge.', 'Östra bron Karlstad', 15, 20, b='no', n=FREE),
          H('칼스타드 대성당', 'Karlstad Cathedral', '18세기에 지은 시내 중심 광장 옆 대성당입니다.', 'The 18th-century cathedral beside the main square.', 'Karlstads domkyrka', 15, 20, b='no', n=FREE),
          H('베름란드 박물관', 'Värmlands Museum', '강가에 선 지역 역사·미술 박물관입니다.', 'The regional history and art museum on the riverside.', 'Värmlands Museum', 60, 90),
          H('산드그룬드 라르스 레린', 'Sandgrund Lars Lerin', '수채화가 라르스 레린의 작품을 보여 주는 강가 미술관입니다.', 'A riverside gallery of works by the watercolourist Lars Lerin.', 'Sandgrund Lars Lerin', 45, 60),
          H('클라르엘벤 통나무 뗏목', 'Klarälven timber rafting', '직접 통나무를 엮어 만든 뗏목으로 며칠에 걸쳐 강을 내려가는 여름 체험입니다.', 'A summer trip floating down the river for days on a raft you lash together yourself.', 'Vildmark i Värmland', 480, 600, group=DAY, b='req', n=SUMMER),
      ],
      hubs=hubs(["['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차로 약 3시간|About 3 hr by train']"], "['Karlstad busstation', '칼스타드 버스터미널']", None, "['Karlstad C', '칼스타드 중앙역']"),
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['클라르엘벤 뗏목|Klarälven rafting', 5]]},
      season='6~8월이 호수와 뗏목 철로 가장 좋습니다.|June–August, the lake and rafting season.',
      stay=[('시내 중심', 'City centre', 'Karlstad', FIRST, '역과 광장, 강가가 걸어서 닿습니다.|The station, square and riverside on foot.')],
      routes=[R('stockholm', 'karlstad', 'train', 150), R('oslo', 'karlstad', 'train', 180), R('gothenburg', 'karlstad', 'train', 165)],
      transit=dict(modes=['walk', 'bus', 'bike'], ko='시내는 걸어서 다니고, 뗏목 체험은 업체 출발지까지 차로 갑니다.', en='Walk the centre; drive to the rafting operator’s base.')),
    C(id='mora', group_title=None, after='falun', ko='모라·레트비크', en='Mora & Rättvik', native='Mora', lat=61.0049, lng=14.5373,
      blurb=['실얀 호숫가 달라르나 마을들로, 빨간 나무 말 ‘달라 호스’의 고향입니다. 모라는 화가 안데르스 소른의 고향이자 바사 스키 경주의 결승점이고, 레트비크엔 긴 나무 부두가 있습니다.',
             'Dalarna villages around Lake Siljan, home of the red wooden Dala horse; Mora is the painter Anders Zorn’s home town and the finish of the Vasaloppet ski race, and Rättvik has its long wooden pier.'],
      highlights=[
          H('소른 박물관과 소른 저택', 'Zorn Museum & Zorngården', '안데르스 소른의 그림과 그가 살던 집을 볼 수 있습니다.', 'Anders Zorn’s paintings and the home where he lived.', 'Zornmuseet', 90, 120),
          H('바사로페트 박물관', 'Vasaloppet Museum', '모라 결승점 옆 박물관으로, 90km 바사 스키 경주의 역사를 보여 줍니다.', 'A museum beside the finish line telling the story of the 90 km Vasaloppet ski race.', 'Vasaloppsmuseet Mora', 30, 45),
          H('뉘스네스 달라 호스 공방', 'Nusnäs Dala horse workshops', '나무 말을 깎고 칠하는 공방 마을로, 작업 모습을 보고 살 수 있습니다.', 'A village of workshops where Dala horses are carved and painted.', 'Nusnäs', 45, 60, group=NEAR, b='no', n=FREE),
          H('레트비크 나무 부두', 'Rättvik long pier', '실얀 호수로 뻗은 600m 넘는 나무 부두입니다.', 'A wooden pier reaching more than 600 m into Lake Siljan.', 'Långbryggan Rättvik', 30, 45, group=NEAR, b='no', n=FREE),
          H('달할라', 'Dalhalla', '옛 석회암 채석장에 만든 야외 공연장으로, 여름 콘서트가 열립니다.', 'An open-air stage in a former limestone quarry, with summer concerts.', 'Dalhalla', 60, 120, group=NEAR, b='req', n=SUMMER),
      ],
      hubs=hubs(["['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차로 약 4시간|About 4 hr by train']"], "['Mora busstation', '모라 버스 정류장']", None, "['Mora', '모라역', '레트비크역도 같은 노선|Rättvik on the same line']"),
      itinerary={'days': [['', 1, 2, 3], ['', 4]], 'trips': [['달할라|Dalhalla', 5]]},
      season='6~8월(하지 축제)과 겨울 스키철(3월 첫 일요일 바사로페트)이 좋습니다.|June–August (Midsummer) and the ski season (Vasaloppet on the first Sunday of March).',
      stay=[('모라 시내', 'Mora centre', 'Mora', FIRST, '역과 소른 박물관이 가깝습니다.|Near the station and the Zorn Museum.'),
            ('레트비크', 'Rättvik', 'Rättvik', '호숫가|Lakeside', '나무 부두 옆 호숫가 마을입니다.|The lakeside village by the long pier.')],
      routes=[R('stockholm', 'mora', 'train', 240), R('falun', 'mora', 'train', 105, "n: '보를렝에 환승인 경우도 있음|sometimes via Borlänge'")],
      transit=dict(modes=['walk', 'bus', 'bike'], ko='마을 사이는 기차·버스로 다니고, 호숫가는 자전거가 좋습니다.', en='Trains and buses link the villages; cycle around the lake.')),
    C(id='gavle', group_title=None, after='falun', ko='예블레', en='Gävle', native='Gävle', lat=60.6749, lng=17.1413,
      blurb=['스톡홀름 북쪽 항구 도시로, 1869년 큰불에서 살아남은 옛 목조 동네와 스웨덴 철도 박물관이 있습니다. 12월엔 광장의 거대한 짚 염소로 유명합니다.',
             'A port city north of Stockholm with an old wooden quarter that survived the great fire of 1869 and Sweden’s national railway museum; in December it is famous for the giant straw goat on its square.'],
      highlights=[
          H('감라 예플레', 'Gamla Gefle', '1869년 대화재를 피한 알록달록한 목조 가옥 골목입니다.', 'Lanes of colourful wooden houses that escaped the 1869 fire.', 'Gamla Gefle', 30, 45, b='no', n=FREE),
          H('스웨덴 철도 박물관', 'Swedish Railway Museum', '옛 기관차고에 증기 기관차와 왕실 객차를 모은 국립 박물관입니다.', 'The national railway museum in an old engine shed, with steam locomotives and royal carriages.', 'Sveriges Järnvägsmuseum', 90, 120),
          H('예블레 짚 염소', 'Gävle Goat', '1966년부터 해마다 12월에 광장에 세우는 거대한 짚 염소입니다.', 'A giant straw goat put up on the square every December since 1966.', 'Gävlebocken', 15, 20, b='no', n='12월 대림절 무렵에만 서 있습니다.|Only up around Advent in December.'),
          H('예블레보리 주립 박물관', 'Länsmuseet Gävleborg', '강가에 선 지역 역사·미술 박물관입니다.', 'The regional history and art museum on the river.', 'Länsmuseet Gävleborg', 60, 90),
      ],
      hubs=hubs(["['Stockholm Arlanda (ARN)', '알란다 공항 (ARN)', '기차로 약 1시간|About 1 hr by train']"], "['Gävle resecentrum', '예블레 버스터미널']", None, "['Gävle C', '예블레 중앙역']"),
      itinerary={'days': [['', 1, 4, 3, 2]]},
      season='5~9월이 좋고, 12월엔 짚 염소를 볼 수 있습니다.|May–September; the straw goat stands in December.',
      stay=[('시내 중심', 'City centre', 'Gävle', FIRST, '역과 강가, 옛 동네가 걸어서 닿습니다.|The station, river and old quarter on foot.')],
      routes=[R('stockholm', 'gavle', 'train', 80), R('uppsala', 'gavle', 'train', 45), R('gavle', 'falun', 'train', 75)],
      transit=dict(modes=['walk', 'bus', 'bike'], ko='시내는 걸어서 다닙니다.', en='Walk the centre.')),
    C(id='umea', group_title=None, after='hoga-kusten', ko='우메오', en='Umeå', native='Umeå', lat=63.8258, lng=20.2630,
      blurb=['북부 스웨덴의 대학 도시로, 자작나무 가로수와 강가 산책로, 현대 미술관이 있습니다. 핀란드 바사로 가는 배가 근처 항구에서 떠납니다.',
             'A university city in northern Sweden with birch-lined streets, a riverside promenade and a contemporary art museum; ferries to Vaasa in Finland leave from the nearby port.'],
      highlights=[
          H('베스테르보텐 박물관과 감미아', 'Västerbottens museum & Gammlia', '지역 역사 박물관과 옛 농가를 옮겨 놓은 야외 박물관 감미아가 함께 있습니다.', 'The regional museum together with Gammlia, an open-air museum of old farm buildings.', 'Västerbottens museum', 90, 120, b='no', n=FREE),
          H('빌드무세트', 'Bildmuseet', '강가 예술 캠퍼스에 있는 우메오 대학 현대 미술관입니다.', 'Umeå University’s contemporary art museum on the riverside arts campus.', 'Bildmuseet Umeå', 45, 60, b='no', n=FREE),
          H('기타 박물관', 'Guitars – The Museum', '빈티지 일렉트릭 기타를 대규모로 모은 박물관입니다.', 'A museum with a large collection of vintage electric guitars.', 'Guitars – The Museum Umeå', 60, 90),
          H('우메강 강변 산책로', 'Ume River promenade', '시내를 따라 흐르는 강가 산책로와 다리들입니다.', 'The riverside walk and bridges through the city.', 'Umeälven Umeå', 30, 60, b='no', n=FREE),
          H('홀뫼섬', 'Holmön', '여름 배로 가는 바깥 섬으로, 자연보호구역과 보트 박물관이 있습니다.', 'An outer island reached by summer ferry, with nature reserves and a boat museum.', 'Holmön', 300, 420, group=DAY, n=SUMMER),
      ],
      hubs=hubs(["['Umeå (UME)', '우메오 공항 (UME)']"], "['Vasaplan', '바사플란 버스 정류장']", "['Holmsund', '홀름순드 항구', '핀란드 바사행|to Vaasa, Finland']", "['Umeå C', '우메오 중앙역']"),
      itinerary={'days': [['', 4, 1, 2, 3]], 'trips': [['홀뫼|Holmön', 5]]},
      season='6~8월은 백야에 가까운 긴 낮, 겨울엔 눈과 운 좋으면 오로라를 봅니다.|June–August for very long days; winter for snow and, with luck, the aurora.',
      stay=[('시내 중심', 'City centre', 'Umeå', FIRST, '역과 강가, 식당이 가깝습니다.|Near the station, river and restaurants.')],
      routes=[R('stockholm', 'umea', 'flight', 65), R('stockholm', 'umea', 'train', 380), R('hoga-kusten', 'umea', 'bus', 120)],
      transit=dict(modes=['walk', 'bus', 'bike'], ko='시내는 걸어서 다니고, 홀름순드 항구와 공항은 버스로 갑니다.', en='Walk the centre; buses go to Holmsund port and the airport.')),
    C(id='jokkmokk', group_title=None, after='lulea', ko='요크모크', en='Jokkmokk', native='Jokkmokk', lat=66.6066, lng=19.8229,
      blurb=['북극권 바로 북쪽의 사미 문화 중심 마을로, 사미·산악 박물관 아이테와 400년 넘게 이어진 2월 겨울 시장이 있습니다. 유네스코 세계유산 라포니아의 관문입니다.',
             'A centre of Sámi culture just north of the Arctic Circle, with the Ájtte mountain and Sámi museum and a February winter market held for over 400 years; gateway to the Laponia World Heritage area.'],
      highlights=[
          H('아이테 사미·산악 박물관', 'Ájtte Swedish Mountain and Sámi Museum', '사미 문화와 북부 산악 자연을 보여 주는 스웨덴 대표 박물관입니다.', 'Sweden’s main museum of Sámi culture and the northern mountains.', 'Ájtte Jokkmokk', 90, 120),
          H('요크모크 겨울 시장', 'Jokkmokk Winter Market', '1605년부터 이어진 2월 첫째 주 겨울 시장으로, 사미 공예와 순록 경주가 열립니다.', 'A winter market held since 1605 in the first week of February, with Sámi crafts and reindeer races.', 'Jokkmokks marknad', 180, 300, b='no', n='2월 첫째 주에만 열립니다.|Only in the first week of February.'),
          H('북극권 표지', 'Arctic Circle marker', '마을 남쪽 도로가에 북극권 선을 표시한 곳입니다.', 'The roadside spot south of the village marking the Arctic Circle.', 'Polcirkeln Jokkmokk', 15, 20, group=NEAR, b='no', n=FREE),
          H('나투룸 라포니아', 'Naturum Laponia', '스토라 셰팔레트에 있는 라포니아 세계유산 안내센터로, 산과 폭포 산책로가 시작됩니다.', 'The Laponia World Heritage visitor centre at Stora Sjöfallet, where mountain and waterfall trails begin.', 'Naturum Laponia', 240, 360, group=DAY, b='no', n=SUMMER),
      ],
      hubs=hubs(["['Luleå (LLA)', '룰레오 공항 (LLA)', '버스로 약 3시간|About 3 hr by bus']"], "['Jokkmokk busstation', '요크모크 버스 정류장', '룰레오·옐리바레행|to Luleå, Gällivare']"),
      itinerary={'days': [['', 1, 3]], 'trips': [['라포니아|Laponia', 4]]},
      season='2월 첫째 주 겨울 시장, 6~8월 백야 산행, 9월~3월 오로라가 좋습니다.|The winter market in early February; midnight-sun hiking June–August; aurora September–March.',
      stay=[('요크모크 마을', 'Jokkmokk village', 'Jokkmokk', FIRST, '박물관과 버스 정류장이 가깝습니다. 겨울 시장 주간엔 일찍 예약하세요.|Near the museum and buses; book early for market week.')],
      routes=[R('lulea', 'jokkmokk', 'bus', 180)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 라포니아는 여름 버스나 차로 갑니다.', en='Walk the village; reach Laponia by summer bus or car.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
