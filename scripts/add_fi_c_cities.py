#!/usr/bin/env python3
"""Finland 2nd pass, new cities (2026-11-28, user picked all 16): Hämeenlinna (Kanta-Häme); Lahti (Päijät-Häme); Kotka
(Kymenlaakso); Lappeenranta, Imatra (South Karelia); Fiskars, Hanko (Uusimaa); Pori (Satakunta); Vaasa & Kvarken
(Ostrobothnia); Koli (North Karelia); Mikkeli (South Savo); Mänttä (Pirkanmaa); Ruka-Kuusamo (North Ostrobothnia);
Saariselkä, Ylläs/Äkäslompolo, Kilpisjärvi (Lapland). Facts from Wikipedia and the sites' own pages; times are rounded
usual timings (VR / Matkahuolto / Finnair, 2026-11-28). Groups rebuilt afterwards into the official regions. Run once."""
import json
import add_daytrip_places3 as T

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
NEAR = ('근교', 'Nearby')
FIRST = '처음 가는 여행에 추천|Best for a first visit'
SUMMER = '여름철 위주로 운영합니다.|Mainly in summer.'
WINTER = '스키 시즌(대략 11~5월)에 운영합니다.|During the ski season (roughly November–May).'
RC = 'routes-central.ts'
R_AFTER = r"^  r\('helsinki', 'oulu', 'flight', 60\),\n"
HELT = "HEL('기차로 약 {}|About {} by train')"


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
    d = dict(country='fi', hubs_file='hubs-central.ts', hubs_before='  // —— no ——\n', itin_file='itinerary-north.ts',
             itin_before='  stockholm: {', visit_file='visit-nordic.ts', visit_after=r"^  'helsinki-h1': v\(.*\),\n",
             stay_before='  helsinki: [', transit_before='  helsinki: {', places=None, daytrips=[], apps='')
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
    C(id='hameenlinna', group_title=None, after='helsinki', ko='하메엔린나', en='Hämeenlinna', native='Hämeenlinna', lat=60.9959, lng=24.4643,
      blurb=['13세기 붉은 벽돌 성을 중심으로 자란 호숫가 도시로, 작곡가 시벨리우스가 태어난 곳입니다. 헬싱키와 탐페레 사이 철도 위에 있어 들르기 쉽습니다.',
             'A lakeside town that grew around a 13th-century red-brick castle, and the birthplace of composer Jean Sibelius; it sits on the Helsinki–Tampere railway.'],
      highlights=[
          H('하메 성', 'Häme Castle', '13세기 말 무렵 짓기 시작한 중세 성으로, 붉은 벽돌 성벽이 바나야베시 호숫가에 서 있습니다.', 'A medieval castle begun in the late 13th century, its red-brick walls standing on the shore of Lake Vanajavesi.', 'Hämeen linna', 60, 90),
          H('시벨리우스 생가', 'Sibelius Birthplace Home', '1865년 장 시벨리우스가 태어난 목조 집으로, 어린 시절 가구와 사진을 보여 줍니다.', 'The wooden house where Jean Sibelius was born in 1865, shown with period furniture and family photographs.', 'Sibeliuksen syntymäkoti', 30, 45),
          H('아울랑코 자연공원', 'Aulanko Nature Reserve', '20세기 초에 꾸민 숲 공원으로, 돌 전망탑에서 호수와 숲이 내려다보입니다.', 'A forest park laid out in the early 20th century, with a stone lookout tower over the lakes and woods.', 'Aulanko', 60, 120, b='no', n=FREE),
          H('하투라 성 십자가 교회', 'Hattula Church of the Holy Cross', '14세기 붉은 벽돌 교회로, 안쪽 벽과 천장이 중세 벽화로 덮여 있습니다.', 'A 14th-century red-brick church whose walls and vaults are covered in medieval paintings.', 'Hattulan Pyhän Ristin kirkko', 30, 45, group=NEAR, n=SUMMER),
          H('이딸라 빌리지', 'Iittala Village', '1881년 시작된 유리 공장 마을로, 유리 공방과 아웃렛, 디자인 전시가 있습니다.', 'The glassworks village founded in 1881, with a glass studio, outlet shop and design exhibition.', 'Iittala Village', 60, 90, group=NEAR, b='no'),
      ],
      hubs=hubs(["HEL('기차로 약 1시간|About 1 hr by train')"], "['Hämeenlinnan linja-autoasema', '하메엔린나 버스터미널']", rail="['Hämeenlinna', '하메엔린나역']"),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['하투라·이딸라|Hattula & Iittala', 4, 5]]},
      season='5~9월이 좋고, 여름엔 호숫가 산책과 성 행사가 많습니다.|May–September; summer brings lakeside walks and castle events.',
      stay=[('시내 중심', 'Town centre', 'Hämeenlinna', FIRST, '역과 성, 광장이 걸어서 닿습니다.|The station, castle and square on foot.'),
            ('헬싱키·탐페레에서 당일치기', 'Day trip from Helsinki or Tampere', 'Helsinki', '당일치기|As a day trip', '기차로 헬싱키 약 1시간, 탐페레 40분 남짓이라 다녀오기 좋습니다.|About 1 hr by train from Helsinki and around 40 min from Tampere.')],
      routes=[R('helsinki', 'hameenlinna', 'train', 60), R('tampere', 'hameenlinna', 'train', 45)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내와 성은 걸어서, 아울랑코·이딸라는 버스나 차로 갑니다.', en='Walk the centre and castle; reach Aulanko and Iittala by bus or car.')),
    C(id='lahti', group_title=None, after='helsinki', ko='라티', en='Lahti', native='Lahti', lat=60.9827, lng=25.6612,
      blurb=['스키 점프대가 도시 위로 솟은 겨울 스포츠 도시로, 노르딕 스키 세계선수권을 여러 번 열었습니다. 호숫가 항구에 나무로 지은 시벨리우스 홀이 있습니다.',
             'A winter-sports city whose ski jumps rise above the town and which has hosted the Nordic World Ski Championships several times; its lakeside harbour holds the timber-built Sibelius Hall.'],
      highlights=[
          H('라티 스키 점프대와 스포츠 센터', 'Lahti ski jumps & Sports Centre', '노르딕 스키 대회가 열리는 살파우셀캐 능선의 스키 점프대로, 도시 어디서나 보입니다.', 'Ski jumps on the Salpausselkä ridge where the Nordic ski events are held, visible from all over town.', 'Lahden hyppyrimäet', 45, 60),
          H('시벨리우스 홀', 'Sibelius Hall', '2000년 문을 연 목조 콘서트홀로, 라티 교향악단의 본거지입니다.', 'A timber concert hall opened in 2000, home of the Lahti Symphony Orchestra.', 'Sibeliustalo Lahti', 20, 30, b='no'),
          H('말바 미술관', 'Malva', '옛 양조장 건물을 고쳐 2023년에 문을 연 미술관으로, 포스터 미술관 소장품도 함께 보여 줍니다.', 'An art museum opened in 2023 in a converted brewery building, including the Poster Museum’s collection.', 'Malva Lahti', 60, 90),
          H('십자가 교회', 'Church of the Cross', '알바르 알토가 설계해 1978년 완공된 하얀 교회입니다.', 'A white church designed by Alvar Aalto and completed in 1978.', 'Ristinkirkko Lahti', 20, 30, b='no', n=FREE),
          H('라티 항구', 'Lahti harbour', '베시예르비 호숫가 산책로로, 여름엔 유람선과 카페가 붐빕니다.', 'The lakeside promenade on Vesijärvi, busy with cruise boats and cafés in summer.', 'Lahden satama', 45, 60, b='no', n=FREE),
      ],
      hubs=hubs(["HEL('기차로 약 1시간|About 1 hr by train')"], "['Lahden matkakeskus', '라티 여행 센터(버스)']", rail="['Lahti', '라티역']"),
      itinerary={'days': [['', 1, 4, 3, 5, 2]]},
      season='2~3월 스키 대회 시즌, 6~8월 호숫가가 좋습니다.|February–March for ski events; June–August for the lakeside.',
      stay=[('역·시내 중심', 'Station & centre', 'Lahti', FIRST, '역과 광장, 항구행 버스가 가깝습니다.|Close to the station, square and harbour buses.'),
            ('헬싱키에서 당일치기', 'Day trip from Helsinki', 'Helsinki', '당일치기|As a day trip', '기차로 1시간이 안 걸려 헬싱키에서 다녀오기 좋습니다.|Under an hour by train from Helsinki.')],
      routes=[R('helsinki', 'lahti', 'train', 50)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서, 항구와 스키 점프대는 버스나 걸어서 20분 남짓입니다.', en='Walk the centre; the harbour and ski jumps are a short bus ride or a 20-minute walk.')),
    C(id='kotka', group_title=None, after='helsinki', ko='코트카', en='Kotka', native='Kotka', lat=60.4664, lng=26.9458,
      blurb=['핀란드만의 항구 도시로, 바다 박물관과 수족관이 모여 있습니다. 근교에는 러시아 황제 알렉산드르 3세의 낚시 별장이 남아 있습니다.',
             'A port city on the Gulf of Finland with a maritime centre and aquarium; nearby stands the fishing lodge of Tsar Alexander III.'],
      highlights=[
          H('마레타리움', 'Maretarium', '핀란드 바다와 호수에 사는 물고기를 큰 수조로 보여 주는 수족관입니다.', 'An aquarium showing the fish of Finland’s seas and lakes in large tanks.', 'Maretarium Kotka', 60, 90),
          H('해양 센터 벨라모', 'Maritime Centre Vellamo', '파도 모양 지붕의 건물에 핀란드 해양 박물관과 지역 박물관이 들어 있습니다.', 'A wave-roofed building housing the Maritime Museum of Finland and the regional museum.', 'Merikeskus Vellamo', 60, 90),
          H('사포카 수변 공원', 'Sapokka Water Garden', '옛 만을 꾸민 공원으로, 폭포와 돌정원이 있어 여름 산책에 좋습니다.', 'A park built around a former bay, with a waterfall and rock gardens, lovely for summer walks.', 'Sapokan vesipuisto', 30, 45, b='no', n=FREE),
          H('랑긴코스키 황제 낚시 별장', 'Langinkoski Imperial Fishing Lodge', '1889년 알렉산드르 3세를 위해 지은 통나무 별장으로, 급류 옆 숲속에 있습니다.', 'A log lodge built in 1889 for Tsar Alexander III, in woods beside the rapids.', 'Langinkosken keisarillinen kalastusmaja', 45, 60, group=NEAR, n=SUMMER),
      ],
      hubs=hubs(["HEL('버스로 약 2시간|About 2 hr by bus')"], "['Kotkan linja-autoasema', '코트카 버스터미널', '헬싱키행|to Helsinki']", rail="['Kotka', '코트카역', '코우볼라행|to Kouvola']"),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['랑긴코스키|Langinkoski', 4]]},
      season='6~8월 해안과 공원이 좋고, 여름엔 바다 축제도 열립니다.|June–August for the coast and parks, with a sea festival in summer.',
      stay=[('시내 중심', 'Town centre', 'Kotka', FIRST, '벨라모와 마레타리움, 버스터미널이 가깝습니다.|Near Vellamo, the Maretarium and the bus station.')],
      routes=[R('helsinki', 'kotka', 'bus', 120, "fa: '캄피 버스터미널|Kamppi'")],
      transit=dict(modes=['walk', 'bus', 'taxi', 'bike'], ko='시내는 걸어서, 랑긴코스키는 버스나 자전거로 갑니다.', en='Walk the centre; reach Langinkoski by bus or bike.')),
    C(id='lappeenranta', group_title=None, after='helsinki', ko='라펜란타', en='Lappeenranta', native='Lappeenranta', lat=61.0587, lng=28.1887,
      blurb=['사이마 호수 남쪽 끝의 도시로, 언덕 위 옛 요새 마을과 여름 호수 유람선이 매력입니다. 러시아 국경과 가까운 남카렐리아의 중심지입니다.',
             'A city at the southern tip of Lake Saimaa, known for its hilltop fortress quarter and summer lake cruises; the hub of South Karelia near the Russian border.'],
      highlights=[
          H('라펜란타 요새', 'Lappeenranta Fortress', '18세기 요새 언덕으로, 옛 막사와 핀란드에서 가장 오래된 정교회 교회, 박물관들이 모여 있습니다.', 'An 18th-century fortress hill with old barracks, Finland’s oldest Orthodox church and several museums.', 'Lappeenrannan linnoitus', 60, 90, b='no', n=FREE),
          H('항구와 모래성', 'Harbour & Sandcastle', '호숫가 항구에 여름마다 거대한 모래 조각 전시가 세워집니다.', 'The lakeside harbour, where giant sand sculptures go up every summer.', 'Lappeenrannan satama', 45, 60, b='no', n=SUMMER),
          H('사이마 호수 유람선', 'Lake Saimaa cruise', '항구에서 출발해 섬과 운하 사이를 도는 여름 유람선입니다.', 'Summer cruises from the harbour around islands and the canal.', 'Saimaa cruise Lappeenranta', 120, 180, n=SUMMER),
          H('남카렐리아 박물관', 'South Karelian Museum', '요새 안에 있는 지역 박물관으로, 옛 비보르크 시가지 모형이 있습니다.', 'The regional museum in the fortress, with a scale model of old Vyborg.', 'Etelä-Karjalan museo', 45, 60),
      ],
      hubs=hubs(["HEL('기차로 약 2시간|About 2 hr by train')"], "['Lappeenrannan matkakeskus', '라펜란타 버스터미널']", rail="['Lappeenranta', '라펜란타역']"),
      itinerary={'days': [['', 1, 4, 2, 3]]},
      season='6~8월이 유람선과 모래성 시즌입니다.|June–August for cruises and the Sandcastle.',
      stay=[('항구·시내 중심', 'Harbour & centre', 'Lappeenranta', FIRST, '요새와 항구가 걸어서 닿습니다.|The fortress and harbour on foot.')],
      routes=[R('helsinki', 'lappeenranta', 'train', 120)],
      transit=dict(modes=['walk', 'bus', 'taxi', 'ferry'], ko='시내와 요새는 걸어서, 호수는 여름 유람선으로 나갑니다.', en='Walk the centre and fortress; go out on the lake by summer cruise.')),
    C(id='imatra', group_title=None, after='helsinki', ko='이마트라', en='Imatra', native='Imatra', lat=61.1712, lng=28.7525,
      blurb=['부오크시 강의 이마트라 급류로 유명한 도시입니다. 지금은 댐이 물을 막고 있어, 여름에 수문을 열어 급류를 되살리는 시간이 볼거리입니다.',
             'A town famous for the Imatrankoski rapids on the Vuoksi; the river is now dammed, and the summer spectacle is when the gates open to bring the rapids back.'],
      highlights=[
          H('이마트라 급류 쇼', 'Imatrankoski Rapids show', '댐 수문을 열어 옛 급류를 되살리는 행사로, 음악과 함께 짧게 열립니다.', 'The dam gates open to revive the old rapids for a short show set to music.', 'Imatrankoski', 30, 45, b='no', n='여름철 정해진 날에만 열립니다. 일정은 이마트라시 관광 사이트에서 확인하세요.|Only on set summer dates; check the Imatra tourism site.'),
          H('발티온호텔리', 'Imatra State Hotel (Valtionhotelli)', '1903년 급류 옆에 지은 아르누보 성 모양의 호텔입니다.', 'A castle-like Art Nouveau hotel built beside the rapids in 1903.', 'Imatran Valtionhotelli', 20, 30, b='no'),
          H('세 십자가 교회', 'Church of the Three Crosses', '알바르 알토가 설계한 1958년 교회로, 빛과 소리를 섬세하게 다룬 실내로 유명합니다.', 'A 1958 church by Alvar Aalto, known for its finely handled light and acoustics.', 'Kolmen Ristin kirkko', 20, 30, n=SUMMER),
      ],
      hubs=hubs(["HEL('기차로 약 2시간 30분|About 2.5 hr by train')"], "['Imatran matkakeskus', '이마트라 여행 센터(버스)']", rail="['Imatra', '이마트라역']"),
      itinerary={'days': [['', 1, 2, 3]]},
      season='6~8월 급류 쇼 시즌이 좋습니다.|June–August, the rapids-show season.',
      stay=[('이마트란코스키', 'Imatrankoski', 'Imatrankoski', FIRST, '급류와 발티온호텔리 옆입니다.|Beside the rapids and the State Hotel.'),
            ('라펜란타에서 당일치기', 'Day trip from Lappeenranta', 'Lappeenranta', '당일치기|As a day trip', '기차로 30분 남짓이라 라펜란타에서 다녀오기 좋습니다.|About half an hour by train from Lappeenranta.')],
      routes=[R('helsinki', 'imatra', 'train', 150), R('lappeenranta', 'imatra', 'train', 25)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='급류와 호텔은 걸어서, 세 십자가 교회는 버스나 차로 갑니다.', en='Walk to the rapids and hotel; take a bus or car to the Church of the Three Crosses.')),
    C(id='fiskars', group_title=None, after='helsinki', ko='피스카스', en='Fiskars', native='Fiskars (Fiskari)', lat=60.1303, lng=23.5493,
      blurb=['1649년 세워진 제철소 마을로, 지금은 공예가와 디자이너의 공방이 모인 곳이 되었습니다. 강을 따라 붉은 벽돌 공장과 하얀 목조 건물이 이어집니다.',
             'An ironworks village founded in 1649 and now home to craftspeople and designers, with red-brick works and white wooden buildings along the river.'],
      highlights=[
          H('피스카스 마을', 'Fiskars Village', '옛 제철소 건물에 공방과 가게, 카페가 들어선 마을 중심입니다.', 'The village centre, where the old ironworks buildings hold studios, shops and cafés.', 'Fiskars Village', 90, 120, b='no', n=FREE),
          H('피스카스 박물관', 'Fiskars Museum', '제철소 마을의 400년 가까운 역사를 보여 주는 박물관입니다.', 'A museum telling nearly four centuries of the ironworks village.', 'Fiskars museum', 30, 45),
          H('라세보리 성터', 'Raseborg Castle ruins', '14세기 돌 성의 폐허로, 여름엔 야외 공연이 열립니다.', 'The ruins of a 14th-century stone castle, with open-air performances in summer.', 'Raseborgs slottsruin', 45, 60, group=NEAR, n=SUMMER),
          H('에케네스 옛 시가지', 'Ekenäs old town', '바닷가 목조 가옥 골목이 남은 라세보리 시의 옛 중심가입니다.', 'Lanes of wooden houses by the sea in the old centre of Raseborg town.', 'Ekenäs gamla stan', 60, 90, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["HEL('기차·버스로 약 1시간 30분|About 1.5 hr by train and bus')"], "['Fiskars', '피스카스 버스 정류장', '카리스역행|to Karis station']", rail="['Karis (Karjaa)', '카리스(카리아)역', '버스·택시로 약 15분|about 15 min by bus or taxi']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['라세보리·에케네스|Raseborg & Ekenäs', 3, 4]]},
      season='5~9월이 좋고, 가게와 카페가 여름에 가장 많이 엽니다.|May–September, when most shops and cafés are open.',
      stay=[('피스카스 마을', 'Fiskars Village', 'Fiskars', FIRST, '작은 숙소가 몇 곳 있습니다.|A handful of small inns.'),
            ('헬싱키에서 당일치기', 'Day trip from Helsinki', 'Helsinki', '당일치기|As a day trip', '기차와 버스로 1시간 30분 남짓입니다.|About 1.5 hr by train and bus.')],
      routes=[R('helsinki', 'fiskars', 'train', 90, "n: '카리스역에서 버스·택시|bus or taxi from Karis station'")],
      transit=dict(modes=['walk', 'bus', 'taxi', 'bike'], ko='마을은 걸어서, 라세보리·에케네스는 버스나 차로 갑니다.', en='Walk the village; reach Raseborg and Ekenäs by bus or car.')),
    C(id='hanko', group_title=None, after='helsinki', ko='항코', en='Hanko', native='Hanko (Hangö)', lat=59.8236, lng=22.9681,
      blurb=['핀란드 최남단의 바닷가 휴양 도시로, 19세기 말 온천 휴양지 시절의 화려한 목조 빌라가 해변을 따라 남아 있습니다.',
             'Finland’s southernmost town, a seaside resort whose ornate wooden villas from its late-19th-century spa days still line the shore.'],
      highlights=[
          H('항코 빌라 거리', 'Hanko villas', '해변 공원을 따라 휴양지 시절의 장식 목조 빌라가 줄지어 있습니다.', 'Ornate wooden villas from the resort era lined up along the seaside park.', 'Appelgrenintie Hanko', 45, 60, b='no', n=FREE),
          H('항코 급수탑 전망대', 'Hanko Water Tower', '언덕 위 급수탑 꼭대기 전망대에서 섬과 바다가 내려다보입니다.', 'A lookout at the top of the hilltop water tower over the islands and sea.', 'Hangon vesitorni', 20, 30, n=SUMMER),
          H('항코 해변', 'Hanko beaches', '30km 넘게 이어지는 모래 해변으로, 시내 가까운 플라겐이 가장 붐빕니다.', 'More than 30 km of sandy beaches, the busiest being Plagen near the centre.', 'Plagen Hanko', 60, 180, b='no', n=FREE),
          H('동항', 'East Harbour', '요트가 가득한 항구로, 여름 식당과 카페가 모여 있습니다.', 'The yacht harbour, with summer restaurants and cafés.', 'Itäsatama Hanko', 45, 60, b='no', n=FREE),
      ],
      hubs=hubs(["HEL('기차로 약 2시간|About 2 hr by train')"], "['Hangon linja-autoasema', '항코 버스터미널']", rail="['Hanko', '항코역', '카리스 환승|change at Karis']"),
      itinerary={'days': [['', 1, 2, 4, 3]]},
      season='6~8월이 해변 시즌이고, 7월엔 항코 레가타가 열립니다.|June–August for the beaches; the Hanko Regatta sails in July.',
      stay=[('시내·동항', 'Centre & East Harbour', 'Hanko', FIRST, '빌라 거리와 항구가 걸어서 닿습니다.|The villas and harbour on foot.')],
      routes=[R('helsinki', 'hanko', 'train', 120, "n: '카리스 환승|change at Karis'")],
      transit=dict(modes=['walk', 'bike', 'taxi'], ko='시내와 해변은 걸어서, 먼 해변은 자전거로 다닙니다.', en='Walk the centre and nearby beaches; cycle to the farther ones.')),
    C(id='pori', group_title=None, after='helsinki', ko='포리', en='Pori', native='Pori', lat=61.4851, lng=21.7974,
      blurb=['7월 포리 재즈 축제로 유명한 서해안 도시입니다. 강변 공원과 아르누보 영묘가 있고, 근교 위테리에는 긴 모래 해변이 펼쳐집니다.',
             'A west-coast city famous for the Pori Jazz festival in July, with riverside parks, an Art Nouveau mausoleum and the long sandy beach at Yyteri.'],
      highlights=[
          H('포리 재즈', 'Pori Jazz', '1966년 시작된 핀란드 대표 재즈 축제로, 강변 키르유린루오토 공원에서 열립니다.', 'Finland’s leading jazz festival, started in 1966 and held in Kirjurinluoto park on the river.', 'Kirjurinluoto Pori', 180, 300, n='7월 축제 기간에만 열립니다.|Only during the July festival.'),
          H('유셀리우스 영묘', 'Juselius Mausoleum', '1903년 딸을 잃은 사업가가 지은 아르누보 영묘로, 내부에 갈렌칼레라 원화를 재현한 벽화가 있습니다.', 'An Art Nouveau mausoleum built in 1903 by a businessman for his daughter, with murals recreating Gallen-Kallela’s originals.', 'Juseliuksen mausoleumi', 20, 30, n=SUMMER),
          H('포리 미술관', 'Pori Art Museum', '강변의 옛 세관 건물을 쓰는 현대 미술관입니다.', 'A contemporary art museum in the former customs house on the river.', 'Porin taidemuseo', 45, 60),
          H('위테리 해변', 'Yyteri beach', '수 km 이어지는 모래 해변과 모래언덕으로, 여름 휴양지입니다.', 'Several kilometres of sandy beach and dunes, a summer resort.', 'Yyterin hiekkarannat', 120, 180, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["HEL('기차로 약 3시간|About 3 hr by train')"], "['Porin linja-autoasema', '포리 버스터미널']", rail="['Pori', '포리역', '탐페레행|to Tampere']"),
      itinerary={'days': [['', 2, 3, 1]], 'trips': [['위테리|Yyteri', 4]]},
      season='7월 포리 재즈와 6~8월 위테리 해변이 좋습니다.|July for Pori Jazz; June–August for Yyteri beach.',
      stay=[('시내 중심', 'City centre', 'Pori', FIRST, '역과 강변이 가깝습니다. 재즈 주간엔 일찍 예약하세요.|Near the station and river; book early for festival week.'),
            ('위테리', 'Yyteri', 'Yyteri', '해변|Beach', '해변 리조트에 묵을 수 있습니다.|Stay at the beach resort.')],
      routes=[R('tampere', 'pori', 'train', 90), R('turku', 'pori', 'bus', 120)],
      transit=dict(modes=['walk', 'bus', 'taxi', 'bike'], ko='시내는 걸어서, 위테리는 버스로 30분 남짓입니다.', en='Walk the centre; Yyteri is about half an hour by bus.')),
]

CITIES += [
    C(id='vaasa', group_title=None, after='helsinki', ko='바사·크바르켄 군도', en='Vaasa & Kvarken Archipelago', native='Vaasa (Vasa)', lat=63.0951, lng=21.6165,
      blurb=['보트니아만의 두 언어 도시로, 앞바다 크바르켄 군도는 빙하가 물러난 뒤 땅이 지금도 솟아오르는 곳이라 유네스코 세계자연유산이 되었습니다.',
             'A bilingual city on the Gulf of Bothnia; offshore, the Kvarken Archipelago is a UNESCO World Heritage site where the land is still rising after the Ice Age.'],
      highlights=[
          H('살트카레트 전망탑', 'Saltkaret observation tower', '뵈르쾨섬 스베드예함의 전망탑으로, 바위섬이 흩어진 크바르켄 군도가 내려다보입니다.', 'A lookout tower at Svedjehamn on Björkö, looking over the boulder-strewn islands of the Kvarken.', 'Saltkaret Svedjehamn', 90, 120, group=DAY, b='no', n=FREE),
          H('레플롯 다리', 'Replot Bridge', '1997년 개통한 1km 넘는 사장교로, 핀란드에서 가장 긴 다리입니다.', 'A cable-stayed bridge over 1 km long, opened in 1997 and the longest in Finland.', 'Raippaluodon silta', 15, 20, group=NEAR, b='no', n=FREE),
          H('오스트로보트니아 박물관', 'Ostrobothnian Museum', '지역 역사와 미술, 크바르켄 자연을 함께 보여 주는 박물관입니다.', 'A museum of regional history and art, plus the nature of the Kvarken.', 'Pohjanmaan museo', 60, 90),
          H('옛 바사', 'Old Vaasa', '1852년 큰불로 사라진 옛 도시 터로, 교회 폐허와 옛 항소법원 건물이 남아 있습니다.', 'The site of the old town destroyed by fire in 1852, with church ruins and the former court of appeal.', 'Vanha Vaasa', 45, 60, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["['Vaasa (VAA)', '바사 공항 (VAA)']"], "['Vaasan linja-autoasema', '바사 버스터미널']", "['Vaasan satama', '바사 항구', '우메오행 페리|ferries to Umeå']", rail="['Vaasa', '바사역']"),
      itinerary={'days': [['', 3, 4]], 'trips': [['크바르켄 군도|Kvarken Archipelago', 2, 1]]},
      season='6~8월이 군도 산책과 바다에 좋습니다.|June–August for the archipelago and the sea.',
      stay=[('시내 중심', 'City centre', 'Vaasa', FIRST, '역과 광장, 박물관이 가깝습니다.|Near the station, square and museum.')],
      routes=[R('helsinki', 'vaasa', 'train', 240), R('helsinki', 'vaasa', 'flight', 60), R('vaasa', 'umea', 'ferry', 240)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서, 크바르켄 군도는 차나 여름 버스로 갑니다.', en='Walk the centre; reach the Kvarken by car or summer bus.')),
    C(id='koli', group_title=None, after='helsinki', ko='콜리 국립공원', en='Koli National Park', native='Koli', lat=63.0961, lng=29.8064,
      blurb=['피엘리넨 호수 위로 솟은 언덕으로, 시벨리우스와 화가들이 사랑한 핀란드의 ‘국민 경관’입니다. 정상에서 호수와 섬, 숲이 끝없이 내려다보입니다.',
             'Hills rising above Lake Pielinen, the Finnish “national landscape” loved by Sibelius and painters, with endless views of lake, islands and forest.'],
      highlights=[
          H('우코콜리 정상', 'Ukko-Koli summit', '해발 347m 바위 정상으로, 피엘리넨 호수와 섬들이 한눈에 보입니다.', 'The 347 m rocky summit, with the whole of Lake Pielinen and its islands below.', 'Ukko-Koli', 45, 60, b='no', n=FREE),
          H('자연 센터 우코', 'Nature Centre Ukko', '국립공원 안내센터로, 콜리의 자연과 문화를 전시합니다.', 'The national park visitor centre, with exhibitions on Koli’s nature and culture.', 'Luontokeskus Ukko', 30, 45, b='no'),
          H('콜리 국립공원 산책로', 'Koli National Park trails', '정상에서 호숫가까지 이어지는 산책로로, 짧은 길부터 하루 코스까지 있습니다.', 'Trails from the summits down to the lakeshore, from short loops to day hikes.', 'Kolin kansallispuisto', 120, 240, b='no', n=FREE),
      ],
      hubs=hubs(["['Joensuu (JOE)', '요엔수 공항 (JOE)', '차로 약 1시간|About 1 hr by car']"], rail="['Joensuu', '요엔수역', '버스·택시로 약 1시간|about 1 hr by bus or taxi']"),
      itinerary={'days': [['', 2, 1, 3]]},
      season='6~9월 산행과 9월 단풍, 2~3월 눈 덮인 숲이 좋습니다.|June–September for hiking, September for autumn colour, February–March for snowy forest.',
      stay=[('콜리 언덕', 'Koli heights', 'Koli', FIRST, '정상 옆 호텔과 마을 숙소가 있습니다.|A hotel by the summit and lodges in the village.')],
      routes=[R('helsinki', 'koli', 'flight', 70, "fa: '요엔수 공항|Joensuu Airport'", "n: '공항에서 차로 약 1시간|about 1 hr by car from the airport'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='공원 안은 걸어서 다니고, 요엔수에서는 차나 버스로 옵니다.', en='Walk inside the park; come from Joensuu by car or bus.')),
    C(id='mikkeli', group_title=None, after='helsinki', ko='미켈리', en='Mikkeli', native='Mikkeli', lat=61.6886, lng=27.2723,
      blurb=['사이마 호수 서쪽의 도시로, 2차 세계대전 때 만네르헤임 원수의 총사령부가 있던 곳입니다. 총사령부와 지하 통신 벙커가 박물관으로 남아 있습니다.',
             'A city west of Lake Saimaa that hosted Marshal Mannerheim’s headquarters in the Second World War; the HQ and its underground communications bunker are now museums.'],
      highlights=[
          H('총사령부 박물관', 'Headquarters Museum', '전쟁 중 총사령부가 쓰던 학교 건물로, 만네르헤임의 집무실을 볼 수 있습니다.', 'The school building used as headquarters during the war, including Mannerheim’s office.', 'Päämajamuseo Mikkeli', 45, 60),
          H('통신 센터 로키', 'Communications Centre Lokki', '바위 속에 판 전시 통신 벙커를 그대로 보여 주는 박물관입니다.', 'A museum in the wartime communications bunker cut into the rock.', 'Viestikeskus Lokki', 45, 60),
          H('미켈리 대성당', 'Mikkeli Cathedral', '19세기 말 붉은 벽돌 루터교 대성당입니다.', 'A red-brick Lutheran cathedral from the late 19th century.', 'Mikkelin tuomiokirkko', 15, 20, b='no', n=FREE),
          H('아스투반살미 암각화', 'Astuvansalmi rock paintings', '호숫가 절벽에 붉은 흙으로 그린 선사시대 암각화로, 배로 가까이 볼 수 있습니다.', 'Prehistoric paintings in red ochre on a lakeside cliff, best seen up close by boat.', 'Astuvansalmen kalliomaalaukset', 120, 180, group=DAY, b='no', n=SUMMER),
      ],
      hubs=hubs(["HEL('기차로 약 2시간 30분|About 2.5 hr by train')"], "['Mikkelin linja-autoasema', '미켈리 버스터미널']", rail="['Mikkeli', '미켈리역']"),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['아스투반살미|Astuvansalmi', 4]]},
      season='6~8월 호수와 암각화 배편 시즌이 좋습니다.|June–August, when boats run to the rock paintings.',
      stay=[('시내 중심', 'City centre', 'Mikkeli', FIRST, '역과 박물관, 광장이 가깝습니다.|Near the station, museums and square.')],
      routes=[R('helsinki', 'mikkeli', 'train', 150)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서, 암각화는 여름 배나 차로 갑니다.', en='Walk the centre; reach the rock paintings by summer boat or car.')),
    C(id='mantta', group_title=None, after='helsinki', ko='맨태', en='Mänttä', native='Mänttä', lat=62.0300, lng=24.6250,
      blurb=['제지 회사 세를라키우스 가문이 키운 숲속 공장 도시로, 가문의 수집품을 보여 주는 세를라키우스 미술관 덕분에 ‘예술 마을’로 불립니다.',
             'A forest mill town built up by the Serlachius paper family, now called an art town thanks to the Serlachius museums of the family’s collection.'],
      highlights=[
          H('세를라키우스 미술관 괴스타', 'Serlachius Museum Gösta', '호숫가 영주 저택과 2014년 지은 목조 별관에 핀란드 황금기 회화와 현대 미술을 전시합니다.', 'A lakeside manor and a timber pavilion added in 2014, showing Finnish Golden Age painting and contemporary art.', 'Serlachius Gösta', 90, 120),
          H('세를라키우스 미술관 구스타프', 'Serlachius Museum Gustaf', '옛 회사 본사 건물에서 제지 공장 마을의 역사를 보여 주는 박물관입니다.', 'A museum of the mill town’s history in the company’s former headquarters.', 'Serlachius Gustaf', 45, 60),
          H('맨태 교회', 'Mänttä Church', '공장 마을 언덕 위에 선 20세기 초 교회입니다.', 'An early-20th-century church on the hill above the mill town.', 'Mäntän kirkko', 15, 20, b='no', n=FREE),
      ],
      hubs=hubs(["['Tampere-Pirkkala (TMP)', '탐페레 피르칼라 공항 (TMP)', '차로 약 1시간 30분|About 1.5 hr by car']"], "['Mäntän linja-autoasema', '맨태 버스 정류장', '탐페레행|to Tampere']"),
      itinerary={'days': [['', 1, 2, 3]]},
      season='6~8월 미술 축제 시즌과 9월 단풍이 좋습니다.|June–August for the summer art festival; September for autumn colour.',
      stay=[('맨태 시내', 'Mänttä centre', 'Mänttä', FIRST, '미술관 숙소와 작은 호텔이 있습니다.|Small hotels and museum lodgings.'),
            ('탐페레에서 당일치기', 'Day trip from Tampere', 'Tampere', '당일치기|As a day trip', '버스로 1시간 30분 남짓입니다.|About 1.5 hr by bus.')],
      routes=[R('tampere', 'mantta', 'bus', 80)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='두 미술관 사이는 걸어서 20분 남짓, 여름엔 셔틀도 다닙니다.', en='The two museums are about 20 minutes apart on foot.')),
    C(id='ruka', group_title=None, after='helsinki', ko='루카·쿠사모', en='Ruka & Kuusamo', native='Ruka (Kuusamo)', lat=66.1667, lng=29.1500,
      blurb=['북부 쿠사모의 스키 리조트 마을로, 겨울엔 스키, 여름엔 오울랑카 국립공원의 협곡과 급류 트레킹으로 사람들이 찾습니다.',
             'A ski-resort village in northern Kuusamo, busy with skiers in winter and with hikers bound for the canyons and rapids of Oulanka National Park in summer.'],
      highlights=[
          H('루카 펠과 스키장', 'Ruka fell & ski resort', '마을 위 펠의 스키장으로, 핀란드에서 시즌이 가장 일찍 열리는 곳 가운데 하나입니다.', 'The ski area on the fell above the village, one of Finland’s earliest to open each season.', 'Ruka ski resort', 240, 360, n=WINTER),
          H('작은 곰의 길', 'Little Bear’s Ring (Pieni Karhunkierros)', '유우마에서 시작하는 약 12km 순환 산책로로, 흔들다리와 뮐뤼코스키 물레방앗간을 지납니다.', 'A roughly 12 km loop from Juuma over suspension bridges and past the Myllykoski mill.', 'Pieni Karhunkierros', 240, 300, group=DAY, b='no', n=SUMMER),
          H('키우타쾽애스 급류', 'Kiutaköngäs rapids', '오울랑카 자연 센터 옆 붉은 바위 사이로 흐르는 급류입니다.', 'Rapids running between red rock walls beside the Oulanka visitor centre.', 'Kiutaköngäs', 60, 90, group=DAY, b='no', n=FREE),
          H('허스키·순록 썰매', 'Husky & reindeer safari', '겨울 숲을 썰매로 달리는 체험으로, 여러 업체가 운영합니다.', 'Sled rides through the winter forest, run by several local operators.', 'Ruka husky safari', 120, 180, b='req', n='겨울철에 운영하며 미리 예약해야 합니다.|In winter; book ahead.'),
      ],
      hubs=hubs(["['Kuusamo (KAO)', '쿠사모 공항 (KAO)', '버스로 약 30분|About 30 min by bus']"]),
      itinerary={'days': [['', 1, 4]], 'trips': [['오울랑카 국립공원|Oulanka National Park', 2, 3]]},
      season='12~4월 스키와 썰매, 6~9월 트레킹, 9월 단풍이 좋습니다.|December–April for skiing and sleds; June–September for hiking; September for autumn colour.',
      stay=[('루카 마을', 'Ruka village', 'Ruka', FIRST, '리프트와 식당, 상점이 모여 있습니다.|Lifts, restaurants and shops together.')],
      routes=[R('helsinki', 'ruka', 'flight', 80, "fa: '쿠사모 공항|Kuusamo Airport'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서, 오울랑카는 차나 투어로 갑니다.', en='Walk the village; reach Oulanka by car or tour.')),
    C(id='saariselka', group_title=None, after='helsinki', ko='사리셀캐', en='Saariselkä', native='Saariselkä', lat=68.4194, lng=27.4111,
      blurb=['북극권 위 라플란드의 펠 마을로, 우르호 케코넨 국립공원으로 들어가는 길목입니다. 마을 불빛이 적어 오로라를 보기 좋습니다.',
             'A fell village in Lapland north of the Arctic Circle and the gateway to Urho Kekkonen National Park; with little light around, it is good for the aurora.'],
      highlights=[
          H('카우니스패 펠', 'Kaunispää fell', '마을 바로 위 펠 정상으로, 툰드라 언덕과 숲이 끝없이 펼쳐집니다.', 'The fell top right above the village, with rolling tundra and forest all around.', 'Kaunispää', 60, 90, b='no', n=FREE),
          H('우르호 케코넨 국립공원', 'Urho Kekkonen National Park', '핀란드에서 손꼽히게 큰 국립공원으로, 오두막을 이으며 걷는 황야 트레킹이 유명합니다.', 'One of Finland’s largest national parks, known for wilderness treks between huts.', 'Urho Kekkosen kansallispuisto', 180, 360, b='no', n=FREE),
          H('탄카바라 황금 마을', 'Tankavaara Gold Village', '라플란드 골드러시를 보여 주는 금 채굴 박물관으로, 여름엔 사금 채취 체험을 합니다.', 'A gold-prospecting museum telling of the Lapland gold rush, with gold panning in summer.', 'Tankavaaran kultakylä', 60, 90, group=NEAR, n=SUMMER),
          H('오로라 투어', 'Northern lights tour', '마을 밖 어두운 곳으로 나가 오로라를 기다리는 투어입니다.', 'Tours out to dark spots beyond the village to wait for the aurora.', 'Saariselkä northern lights tour', 180, 240, b='rec', n='대략 9월~3월, 맑은 밤에 볼 수 있습니다.|Roughly September–March on clear nights.'),
      ],
      hubs=hubs(["['Ivalo (IVL)', '이발로 공항 (IVL)', '버스로 약 30분|About 30 min by bus']"], "['Saariselkä', '사리셀캐 버스 정류장', '로바니에미·이발로행|to Rovaniemi, Ivalo']"),
      itinerary={'days': [['', 1, 4]], 'trips': [['우르호 케코넨 국립공원|Urho Kekkonen National Park', 2], ['탄카바라|Tankavaara', 3]]},
      season='9~3월 오로라, 2~4월 스키, 9월 초 단풍이 좋습니다.|September–March for the aurora; February–April for skiing; early September for autumn colour.',
      stay=[('사리셀캐 마을', 'Saariselkä village', 'Saariselkä', FIRST, '호텔과 오두막, 식당이 모여 있습니다.|Hotels, cabins and restaurants together.')],
      routes=[R('helsinki', 'saariselka', 'flight', 105, "fa: '이발로 공항|Ivalo Airport'"), R('rovaniemi', 'saariselka', 'bus', 225), R('inari', 'saariselka', 'bus', 60)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서, 국립공원과 탄카바라는 차나 투어로 갑니다.', en='Walk the village; reach the park and Tankavaara by car or tour.')),
    C(id='akaslompolo', group_title=None, after='helsinki', ko='윌래스·애캐슬롬폴로', en='Ylläs & Äkäslompolo', native='Äkäslompolo', lat=67.6033, lng=24.1508,
      blurb=['윌래스 펠 아래 호숫가 마을로, 겨울엔 스키와 크로스컨트리, 여름엔 팔라스–윌래스툰투리 국립공원 산행을 즐깁니다.',
             'A lakeside village below Ylläs fell, for downhill and cross-country skiing in winter and hikes in Pallas-Yllästunturi National Park in summer.'],
      highlights=[
          H('윌래스 펠과 스키장', 'Ylläs fell & ski area', '마을 위 윌래스 펠의 스키장으로, 긴 활강 코스와 크로스컨트리 길이 이어집니다.', 'The ski area on Ylläs fell above the village, with long runs and cross-country trails.', 'Ylläs ski resort', 240, 360, n=WINTER),
          H('자연 센터 켈로카스', 'Kellokas Nature Centre', '국립공원 남쪽 안내센터로, 라플란드 자연 전시와 산책로 정보가 있습니다.', 'The park’s southern visitor centre, with Lapland nature exhibits and trail information.', 'Luontokeskus Kellokas', 30, 45, b='no'),
          H('팔라스 펠', 'Pallas fells', '국립공원 북쪽의 민둥 펠 능선으로, 팔라스–헤타 트레일이 시작됩니다.', 'The bare fell ridges in the north of the park, where the Pallas–Hetta trail begins.', 'Pallastunturi', 240, 360, group=DAY, b='no', n=FREE),
      ],
      hubs=hubs(["['Kittilä (KTT)', '키틸래 공항 (KTT)', '버스로 약 50분|About 50 min by bus']"], rail="['Kolari', '콜라리역', '겨울철 야간열차|winter night trains']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['팔라스|Pallas', 3]]},
      season='12~4월 스키와 오로라, 6~9월 산행, 9월 단풍이 좋습니다.|December–April for skiing and aurora; June–September for hiking; September for autumn colour.',
      stay=[('애캐슬롬폴로 마을', 'Äkäslompolo village', 'Äkäslompolo', FIRST, '호숫가 오두막과 호텔, 상점이 있습니다.|Lakeside cabins, hotels and shops.')],
      routes=[R('helsinki', 'akaslompolo', 'flight', 90, "fa: '키틸래 공항|Kittilä Airport'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을과 스키장 사이는 스키 버스로, 팔라스는 차로 갑니다.', en='Ski buses link the village and slopes; drive to Pallas.')),
    C(id='kilpisjarvi', group_title=None, after='helsinki', ko='킬피스예르비', en='Kilpisjärvi', native='Kilpisjärvi', lat=69.0469, lng=20.7928,
      blurb=['노르웨이·스웨덴과 맞닿은 핀란드 북서쪽 끝 마을로, 성스러운 산 사나 펠과 세 나라 국경 표석이 있습니다.',
             'A village at Finland’s far north-west tip, bordering Norway and Sweden, with the sacred Saana fell and the Three-Country Cairn.'],
      highlights=[
          H('사나 펠', 'Saana fell', '해발 1,029m의 펠로, 정상에서 킬피스 호수와 세 나라 산들이 내려다보입니다.', 'A 1,029 m fell whose summit looks over Lake Kilpisjärvi and the mountains of three countries.', 'Saana', 240, 300, b='no', n=FREE),
          H('세 나라 국경 표석', 'Three-Country Cairn', '핀란드·스웨덴·노르웨이 국경이 만나는 호수 위 표석으로, 여름 배와 짧은 산행으로 갑니다.', 'The cairn in the lake where Finland, Sweden and Norway meet, reached by summer boat and a short hike.', 'Treriksröset', 240, 300, group=DAY, b='no', n=SUMMER),
          H('말라 엄정 자연보호구', 'Malla Strict Nature Reserve', '정해진 길로만 걸을 수 있는 보호구로, 북극 고산 식물이 자랍니다.', 'A reserve walkable only on its marked trail, home to Arctic alpine plants.', 'Mallan luonnonpuisto', 240, 360, group=DAY, b='no', n=FREE),
      ],
      hubs=hubs(None, "['Kilpisjärvi', '킬피스예르비 버스 정류장', '로바니에미행|to Rovaniemi']"),
      itinerary={'days': [['', 1]], 'trips': [['세 나라 국경 표석|Three-Country Cairn', 2], ['말라|Malla', 3]]},
      season='6~9월 산행, 9월 초 단풍, 2~4월 눈과 오로라가 좋습니다.|June–September for hiking, early September for autumn colour, February–April for snow and aurora.',
      stay=[('킬피스예르비 마을', 'Kilpisjärvi village', 'Kilpisjärvi', FIRST, '호텔 몇 곳과 오두막이 있습니다.|A few hotels and cabins.')],
      routes=[R('rovaniemi', 'kilpisjarvi', 'bus', 420, "n: '무오니오 경유|via Muonio'")],
      transit=dict(modes=['walk', 'ferry', 'taxi'], ko='마을과 사나는 걸어서, 국경 표석은 여름 배를 탑니다.', en='Walk the village and Saana; take the summer boat to the cairn.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
