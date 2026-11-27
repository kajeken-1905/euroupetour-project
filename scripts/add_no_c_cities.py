#!/usr/bin/env python3
"""Norway 2nd pass, new cities (2026-11-27, user picked all 16): Balestrand & Fjærland, Loen & Olden, Eidfjord & Ulvik
(Vestland); Åndalsnes, Kristiansund & Atlantic Road (Møre og Romsdal); Vesterålen/Andenes (Nordland); Senja (Troms);
Alta, Kirkenes (Finnmark); Longyearbyen (Svalbard, new group, last); Lom & Jotunheimen (Innlandet); Rjukan (Telemark);
Tønsberg (Vestfold); Kongsberg (Buskerud); Halden (Østfold); Arendal (Agder). Facts from Wikipedia and the sites' own
pages; times are rounded usual timings (Entur / Vy / Norled / Svipper, 2026-11-27). Groups rebuilt afterwards into the
official counties. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places3 import trip

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
NEAR = ('근교', 'Nearby')
FIRST = '처음 가는 여행에 추천|Best for a first visit'
SUMMER = '여름철 위주로 운영합니다.|Mainly in summer.'
RC = 'routes-central.ts'
R_AFTER = r"^  r\('tromso', 'honningsvag', 'flight', 120, .*\n"
OSL = "['Oslo Gardermoen (OSL)', '오슬로 가르데르모엔 공항 (OSL)']"
TRF = "['Sandefjord Torp (TRF)', '산데피오르 토르프 공항 (TRF)', '저비용 항공|low-cost carriers']"
BGO = "['Bergen Flesland (BGO)', '베르겐 공항 (BGO)']"
TOS = "['Tromsø Langnes (TOS)', '트롬쇠 공항 (TOS)']"


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
    d = dict(country='no', hubs_file='hubs-central.ts', hubs_before='  // —— is ——\n', itin_file='itinerary-north.ts',
             itin_before='  helsinki: {', visit_file='visit-nordic.ts', visit_after=r"^  'oslo-h1': v\(.*\),\n",
             stay_before='  oslo: [', transit_before='  oslo: {', places=None, daytrips=[], apps='')
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
    C(id='halden', group_title=None, after='fredrikstad', ko='할덴', en='Halden', native='Halden', lat=59.1229, lng=11.3875,
      blurb=['스웨덴 국경 가까운 오슬로피오르 동쪽 끝 도시로, 언덕 위 프레드릭스텐 요새가 시내를 내려다봅니다. 할덴 운하가 내륙 호수로 이어집니다.',
             'A town near the Swedish border at the eastern end of the Oslofjord, overlooked by Fredriksten Fortress on its hill; the Halden Canal runs inland through a chain of lakes.'],
      highlights=[
          H('프레드릭스텐 요새', 'Fredriksten Fortress', '17세기에 세운 요새로, 1718년 스웨덴 왕 칼 12세가 이곳을 포위하다 전사했습니다. 성벽 위에서 시내와 피오르가 보입니다.', 'A 17th-century fortress where King Charles XII of Sweden was killed during the siege of 1718; the ramparts look over the town and fjord.', 'Fredriksten festning', 90, 120, b='no'),
          H('할덴 운하와 브레케 갑문', 'Halden Canal & Brekke locks', '호수를 잇는 운하로, 브레케에는 북유럽에서 가장 높은 축에 드는 4단 갑문이 있습니다. 여름엔 유람선이 다닙니다.', 'A canal linking a chain of lakes, with a four-step lock flight at Brekke; tour boats run in summer.', 'Brekke sluser', 60, 90, group=NEAR, n=SUMMER),
          H('뢰드 장원', 'Rød Manor', '17세기부터 같은 가문이 살아온 장원으로, 가구와 정원이 그대로 남아 있습니다.', 'A manor house lived in by the same family since the 17th century, with its furnishings and gardens intact.', 'Rød herregård', 60, 90),
          H('스빈순 다리', 'Svinesund Bridge', '노르웨이와 스웨덴 국경을 잇는 2005년 아치교로, 다리 위로 걸어서 건널 수 있습니다.', 'The 2005 arch bridge across the Norway–Sweden border, with a footpath across.', 'Svinesundsbrua', 30, 45, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs([OSL], "['Halden bussterminal', '할덴 버스터미널']", None, "['Halden', '할덴역', '오슬로·예테보리행|to Oslo, Gothenburg']"),
      itinerary={'days': [['', 1, 3]], 'trips': [['할덴 운하|Halden Canal', 2], ['스빈순|Svinesund', 4]]},
      season='5~9월이 좋고, 운하 유람선은 여름에만 다닙니다.|May–September; canal boats run only in summer.',
      stay=[('시내 중심', 'Town centre', 'Halden', FIRST, '역과 요새, 부두가 걸어서 닿습니다.|The station, fortress and quay on foot.')],
      routes=[R('oslo', 'halden', 'train', 105), R('fredrikstad', 'halden', 'train', 30)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 운하 갑문은 차나 유람선으로 갑니다.', en='Walk the town; reach the canal locks by car or boat.')),
    C(id='kongsberg', group_title=None, after='fredrikstad', ko='콩스베르그', en='Kongsberg', native='Kongsberg', lat=59.6689, lng=9.6502,
      blurb=['1623년 은광 때문에 세운 도시로, 옛 은광 갱도 투어와 광산·왕립 조폐국 박물관, 큰 바로크 교회가 있습니다.',
             'A town founded in 1623 for its silver mines, with mine tours, the mining and Royal Mint museum and a great Baroque church.'],
      highlights=[
          H('콩스베르그 은광', 'Kongsberg Silver Mines', '광산 열차를 타고 산속 깊은 갱도까지 들어가는 가이드 투어입니다.', 'A guided tour riding a mine train deep into the mountain.', 'Sølvgruvene Kongsberg', 120, 150, group=NEAR, b='rec', n=SUMMER),
          H('노르웨이 광산 박물관', 'Norwegian Mining Museum', '은광 역사와 광물, 왕립 조폐국 전시가 있는 옛 제련소 건물입니다.', 'An old smelting works with the silver-mining story, minerals and the Royal Mint collection.', 'Norsk Bergverksmuseum', 60, 90),
          H('콩스베르그 교회', 'Kongsberg Church', '1761년에 봉헌한 바로크 교회로, 노르웨이에서 큰 교회에 꼽힙니다. 금빛 제단과 오르간이 볼거리입니다.', 'A Baroque church consecrated in 1761, among Norway’s largest, with a gilded altar and organ.', 'Kongsberg kirke', 30, 45),
          H('뉘브루 폭포', 'Nybrufossen', '시내 한가운데 라옌강의 폭포로, 다리 위에서 봅니다.', 'Falls on the Lågen river in the middle of town, seen from the bridge.', 'Nybrufossen', 15, 20, b='no', n=FREE),
      ],
      hubs=hubs([OSL, TRF], "['Kongsberg skysstasjon', '콩스베르그 버스 정류장']", None, "['Kongsberg', '콩스베르그역']"),
      itinerary={'days': [['', 2, 3, 4]], 'trips': [['은광|Silver mines', 1]]},
      season='은광 투어는 여름 위주라 5~9월이 좋습니다.|Best May–September, when mine tours run most.',
      stay=[('시내 중심', 'Town centre', 'Kongsberg', FIRST, '역과 박물관, 교회가 가깝습니다.|Near the station, museum and church.')],
      routes=[R('oslo', 'kongsberg', 'train', 85)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 은광은 버스나 차로 갑니다.', en='Walk the town; bus or car to the mines.')),
    C(id='tonsberg', group_title=None, after='fredrikstad', ko='퇸스베르그', en='Tønsberg', native='Tønsberg', lat=59.2675, lng=10.4076,
      blurb=['노르웨이에서 가장 오래된 도시로 꼽히는 바이킹 시대 항구로, 성곽 언덕 유적과 부두 거리가 있습니다. 근처 슬라겐에서 오세베르그 배가 나왔습니다.',
             'A Viking-age harbour counted as Norway’s oldest town, with castle-hill ruins and a waterfront boardwalk; the Oseberg ship was dug up at nearby Slagen.'],
      highlights=[
          H('슬로츠피엘레 (성곽 언덕)', 'Slottsfjellet', '중세 성채 유적이 남은 언덕으로, 꼭대기 탑에서 시내와 피오르가 보입니다.', 'A hill with medieval fortress ruins; the tower on top looks over town and fjord.', 'Slottsfjellet Tønsberg', 45, 60, b='no', n=FREE),
          H('슬로츠피엘 박물관', 'Slottsfjell Museum', '바이킹 시대 유물과 고래잡이 역사를 보여 주는 박물관입니다.', 'A museum of Viking-age finds and whaling history.', 'Slottsfjellsmuseet', 60, 90),
          H('부두 거리 (브뤼가)', 'Brygga waterfront', '식당과 바가 늘어선 운하 가 나무 산책로입니다.', 'A wooden boardwalk along the canal, lined with restaurants and bars.', 'Tønsberg Brygge', 30, 60, b='no', n=FREE),
          H('오세베르그 고분', 'Oseberg burial mound', '834년 무렵 바이킹 배 무덤이 발굴된 곳으로, 지금은 복원된 봉분만 있습니다. 배는 오슬로에 있습니다.', 'The mound where a Viking ship burial of about 834 was excavated; only the rebuilt mound remains, the ship is in Oslo.', 'Osebergshaugen', 20, 30, group=NEAR, b='no', n=FREE),
          H('베르덴스 엔데', 'Verdens Ende', '‘세상의 끝’이라는 이름의 남쪽 섬 끝 바위 해안으로, 옛 돌 등대가 있습니다.', '“World’s End”, the rocky tip of the islands to the south, with an old lever-light beacon.', 'Verdens Ende Tjøme', 60, 90, group=DAY, b='no', n=FREE),
      ],
      hubs=hubs([TRF, OSL], "['Tønsberg bussterminal', '퇸스베르그 버스터미널']", None, "['Tønsberg', '퇸스베르그역']"),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['오세베르그 고분|Oseberg mound', 4], ['베르덴스 엔데|Verdens Ende', 5]]},
      season='5~9월이 좋고, 여름엔 부두가 가장 북적입니다.|May–September; the waterfront is liveliest in summer.',
      stay=[('부두와 시내', 'Waterfront & centre', 'Tønsberg', FIRST, '역과 부두, 성곽 언덕이 걸어서 닿습니다.|The station, waterfront and castle hill on foot.')],
      routes=[R('oslo', 'tonsberg', 'train', 80)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 베르덴스 엔데는 버스나 차로 갑니다.', en='Walk the town; bus or car to Verdens Ende.')),
    C(id='rjukan', group_title=None, after='fredrikstad', ko='류칸', en='Rjukan', native='Rjukan', lat=59.8789, lng=8.5933,
      blurb=['깊은 골짜기 안의 수력 발전 공업 도시로, 유네스코 세계유산(류칸–노토덴 산업 유산)입니다. 2차 대전 중수 공장 사보타주의 무대인 베모르크가 있습니다.',
             'A hydropower company town deep in a valley, part of the Rjukan–Notodden Industrial Heritage World Heritage Site, with Vemork, scene of the WWII heavy-water sabotage.'],
      highlights=[
          H('베모르크 노동자 산업 박물관', 'Vemork Industrial Workers Museum', '옛 발전소에 차린 박물관으로, 중수 사보타주 전시가 있습니다. 협곡 위 다리를 건너 들어갑니다.', 'A museum in the old power station with the heavy-water sabotage story, reached across a bridge over the gorge.', 'Norsk Industriarbeidermuseum Vemork', 90, 120),
          H('크로스바넨 케이블카', 'Krossobanen cable car', '1928년에 놓은 북유럽에서 가장 오래된 케이블카로, 하르당에르비다 고원 끝으로 올라갑니다.', 'Northern Europe’s oldest cable car, built in 1928, up to the edge of the Hardangervidda plateau.', 'Krossobanen', 60, 90),
          H('햇빛 거울', 'Sun mirrors (Solspeilet)', '겨울에 해가 들지 않는 골짜기 광장에 햇빛을 비추려고 2013년 산 위에 단 거울입니다.', 'Mirrors set on the mountainside in 2013 to reflect sunlight onto the town square in the sunless winter months.', 'Solspeilet Rjukan', 30, 45, n='크로스바넨을 타고 올라가 걸어갑니다.|Reached on foot from the top of Krossobanen.'),
          H('가우스타토펜', 'Gaustatoppen', '1,883m 봉우리로, 산속 터널 철도 가우스타바넨이 꼭대기 가까이까지 올라갑니다. 맑은 날엔 노르웨이 땅의 6분의 1이 보인다고 합니다.', 'An 1,883 m peak with the Gaustabanen tunnel railway inside the mountain; on clear days a sixth of Norway is said to be visible.', 'Gaustatoppen', 180, 300, group=NEAR, n=SUMMER),
      ],
      hubs=hubs([TRF, OSL], "['Rjukan rutebilstasjon', '류칸 버스 정류장', '오슬로·노토덴행|to Oslo, Notodden']"),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['가우스타토펜|Gaustatoppen', 4]]},
      season='6~9월이 산행에 좋고, 겨울엔 얼음 폭포 등반으로 유명합니다.|June–September for hiking; in winter it is known for ice climbing.',
      stay=[('류칸 시내', 'Rjukan centre', 'Rjukan', FIRST, '버스와 케이블카, 식당이 가깝습니다.|Near the buses, cable car and restaurants.'),
            ('가우스타 산장', 'Gausta', 'Gaustablikk', '산행 거점|For hiking', '가우스타토펜 아래 산장과 스키 리조트입니다.|Lodges and the ski resort below Gaustatoppen.')],
      routes=[R('oslo', 'rjukan', 'bus', 210)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 베모르크와 가우스타는 버스나 차로 갑니다.', en='Walk the town; bus or car to Vemork and Gausta.')),
    C(id='arendal', group_title=None, after='kristiansand', ko='아렌달', en='Arendal', native='Arendal', lat=58.4617, lng=8.7721,
      blurb=['남부 해안의 하얀 목조 도시로, 언덕 위 옛 동네 튀홀멘과 항구 폴렌, 여름 섬 나들이로 사랑받습니다.',
             'A white wooden town on the south coast, loved for the old Tyholmen quarter, the Pollen harbour and summer island trips.'],
      highlights=[
          H('튀홀멘', 'Tyholmen', '17~19세기 목조 가옥이 언덕길에 모인 옛 동네입니다.', 'The old quarter of 17th–19th-century wooden houses on a little hill.', 'Tyholmen Arendal', 45, 60, b='no', n=FREE),
          H('폴렌 항구', 'Pollen harbour', '식당과 카페가 둘러싼 시내 한가운데 항구입니다.', 'The inner harbour in the centre, ringed by restaurants and cafés.', 'Pollen Arendal', 30, 45, b='no', n=FREE),
          H('아렌달 시청', 'Arendal Town Hall', '1815년 상인의 집으로 지은, 노르웨이에서 큰 목조 건물에 꼽히는 시청입니다.', 'Built in 1815 as a merchant’s house, one of Norway’s largest wooden buildings.', 'Arendal rådhus', 15, 20, b='no', n=FREE),
          H('메르되위섬', 'Merdø', '작은 배로 가는 여름 섬으로, 18세기 선장 집 박물관과 해수욕장이 있습니다.', 'A summer island reached by small boat, with an 18th-century skipper’s house museum and beaches.', 'Merdø', 180, 240, group=NEAR, n=SUMMER),
      ],
      hubs=hubs(["['Kristiansand Kjevik (KRS)', '크리스티안산 공항 (KRS)', '버스로 약 1시간|About 1 hr by bus']"], "['Arendal rutebilstasjon', '아렌달 버스터미널']", None, "['Arendal', '아렌달역', '넬라우 환승|change at Nelaug']"),
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['메르되위|Merdø', 4]]},
      season='6~8월 섬 나들이 철이 가장 좋습니다.|Best in June–August for the islands.',
      stay=[('튀홀멘·폴렌', 'Tyholmen & Pollen', 'Arendal', FIRST, '항구 둘레에 호텔과 식당이 모여 있습니다.|Hotels and restaurants around the harbour.')],
      routes=[R('kristiansand', 'arendal', 'bus', 75), R('oslo', 'arendal', 'bus', 240)],
      transit=dict(modes=['walk', 'bus', 'ferry', 'taxi'], ko='시내는 걸어서 다니고, 섬은 작은 배를 탑니다.', en='Walk the town; small boats go to the islands.')),
    C(id='lom', group_title=None, after='lillehammer', ko='롬·요툰헤이멘', en='Lom & Jotunheimen', native='Lom', lat=61.8387, lng=8.5684,
      blurb=['노르웨이 최고봉 갈회피겐이 있는 요툰헤이멘 국립공원의 관문 마을로, 12세기 목조 교회가 있습니다. 송네피엘렛 산악 도로가 베스틀란으로 넘어갑니다.',
             'Gateway village to Jotunheimen National Park and Galdhøpiggen, Norway’s highest peak, with a 12th-century stave church; the Sognefjellet road crosses to the west.'],
      highlights=[
          H('롬 목조 교회', 'Lom Stave Church', '12세기 후반에 세운 큰 목조 교회로, 용머리 장식 지붕이 볼거리입니다.', 'A large stave church from the late 12th century, with dragon-head roof ornaments.', 'Lom stavkyrkje', 30, 45),
          H('노르웨이 산악 센터', 'Norwegian Mountain Centre', '산악 지대 자연과 등산 역사를 보여 주는 전시관입니다.', 'Exhibits on mountain nature and the history of climbing.', 'Norsk Fjellsenter', 45, 60),
          H('갈회피겐', 'Galdhøpiggen', '2,469m 노르웨이 최고봉으로, 유바스휘타에서 빙하를 건너는 가이드 산행으로 오릅니다.', 'Norway’s highest peak at 2,469 m, climbed on guided glacier walks from Juvasshytta.', 'Juvasshytta', 360, 480, group=NEAR, b='req', n='빙하 구간은 가이드와 함께만 갈 수 있습니다. 여름에만 운영합니다.|The glacier section is guided only, in summer.'),
          H('송네피엘렛 관광 도로', 'Sognefjellet road', '북유럽에서 가장 높은 산악 도로(1,434m)로, 빙하와 봉우리 사이를 지납니다.', 'Northern Europe’s highest mountain pass (1,434 m), between glaciers and peaks.', 'Sognefjellsvegen', 120, 180, group=DAY, b='no', n='겨울엔 도로가 닫힙니다(대개 5월~10월 운행).|Closed in winter (usually open May–October).'),
      ],
      hubs=hubs([OSL], "['Lom skysstasjon', '롬 버스 정류장', '오타역행|to Otta station']", None, "['Otta', '오타역', '버스로 약 1시간|About 1 hr by bus']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['갈회피겐|Galdhøpiggen', 3], ['송네피엘렛|Sognefjellet', 4]]},
      season='산행과 산악 도로는 6~9월이 좋습니다.|June–September for hiking and the mountain road.',
      stay=[('롬 마을', 'Lom village', 'Lom', FIRST, '교회 근처 호텔과 빵집, 버스가 모여 있습니다.|Hotels, bakery and buses by the church.')],
      routes=[R('oslo', 'lom', 'mixed', 330, "n: '오타역까지 기차 후 버스|train to Otta, then bus'")],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='버스가 드물어 차가 있으면 편합니다.', en='Buses are sparse; a car is easiest.')),
    C(id='balestrand', group_title=None, after='flam', ko='발레스트란·피에를란', en='Balestrand & Fjærland', native='Balestrand / Fjærland', lat=61.2075, lng=5.5203,
      blurb=['송네피오르 가의 목조 호텔 마을 발레스트란과, 피오르 안쪽 빙하 아래 책 마을 피에를란입니다. 발레스트란을 기준으로 안내합니다.',
             'Balestrand, a village of wooden hotels on the Sognefjord, and Fjærland, a book town below the glaciers further up the fjord; times are from Balestrand.'],
      highlights=[
          H('크비크네스 호텔', 'Kviknes Hotel', '1877년부터 이어 온 스위스 양식 목조 호텔로, 피오르 가에 서 있습니다.', 'A Swiss-style wooden hotel on the fjord, in business since 1877.', 'Kviknes Hotel', 20, 30, b='no'),
          H('성 올라프 교회', 'St Olaf’s Church', '1897년 영국인 부부가 지은 목조 교회 양식의 영국 성공회 교회입니다.', 'An English church in stave-church style, built by an English couple in 1897.', 'St. Olaf’s Church Balestrand', 15, 20, n=SUMMER),
          H('노르웨이 빙하 박물관', 'Norwegian Glacier Museum', '피에를란에 있는 빙하 박물관으로, 요스테달 빙원의 빙하를 보여 줍니다.', 'The glacier museum at Fjærland, all about the Jostedal ice cap.', 'Norsk Bremuseum', 60, 90, group=NEAR),
          H('뵈야 빙하', 'Bøyabreen', '요스테달 빙원에서 흘러내린 빙하 끝자락으로, 주차장에서 가까이 볼 수 있습니다.', 'A tongue of the Jostedal ice cap, seen close up from the roadside.', 'Bøyabreen', 30, 45, group=NEAR, b='no', n=FREE),
          H('피에를란 책 마을', 'Fjærland book town', '헛간과 옛 가게마다 헌책을 파는 피오르 가의 책 마을입니다.', 'A fjordside village where barns and old shops sell second-hand books.', 'Den norske bokbyen Fjærland', 60, 90, group=NEAR, n=SUMMER),
      ],
      hubs=hubs(["['Sogndal (SOG)', '송달 공항 (SOG)', '오슬로행 소형기|small planes to Oslo']", BGO], "['Balestrand kai', '발레스트란 선착장', '송달·피에를란행 버스|buses to Sogndal, Fjærland']", "['Balestrand kai', '발레스트란 선착장', '베르겐·플롬행 쾌속선|express boats to Bergen, Flåm']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['피에를란|Fjærland', 3, 4, 5]]},
      season='5~9월이 좋고, 피에를란은 여름에만 대부분 문을 엽니다.|May–September; most of Fjærland opens only in summer.',
      stay=[('발레스트란 피오르 가', 'Balestrand fjordside', 'Balestrand', FIRST, '목조 호텔과 선착장이 모여 있습니다.|Wooden hotels and the boat quay.'),
            ('피에를란', 'Fjærland', 'Fjærland', '빙하 가까이|Near the glaciers', '1891년 목조 호텔이 있는 조용한 마을입니다.|A quiet village with an 1891 wooden hotel.')],
      routes=[R('bergen', 'balestrand', 'ferry', 225, "n: '쾌속선|express boat'")],
      transit=dict(modes=['walk', 'bus', 'ferry', 'taxi'], ko='마을은 걸어서 다니고, 피에를란은 버스나 차로 갑니다.', en='Walk the village; bus or car to Fjærland.')),
    C(id='loen', group_title=None, after='balestrand', ko='로엔·올덴', en='Loen & Olden', native='Loen / Olden', lat=61.8712, lng=6.8565,
      blurb=['노르피오르 안쪽 두 마을로, 피오르 위 1,011m까지 오르는 로엔 스카이리프트와 요스테달 빙원의 브릭스달 빙하가 있습니다. 로엔을 기준으로 안내합니다.',
             'Two villages at the head of the Nordfjord, with the Loen Skylift to 1,011 m and Briksdal glacier on the Jostedal ice cap; times are from Loen.'],
      highlights=[
          H('로엔 스카이리프트', 'Loen Skylift', '2017년에 연 케이블카로, 피오르 가에서 호벤산 1,011m까지 5분 만에 오릅니다.', 'A cable car opened in 2017, rising from the fjord to Mount Hoven at 1,011 m in five minutes.', 'Loen Skylift', 90, 150, b='rec'),
          H('브릭스달 빙하', 'Briksdalsbreen', '올덴 골짜기 끝 호수로 흘러내린 빙하로, 주차장에서 걸어 1시간쯤 걸립니다.', 'A glacier spilling into a lake at the end of the Olden valley, about an hour’s walk from the car park.', 'Briksdalsbreen', 150, 180, group=NEAR, b='no', n=FREE),
          H('로바트네트 호수와 셴달 빙하', 'Lovatnet & Kjenndalsbreen', '물빛이 초록인 빙하 호수를 따라 셴달 빙하 앞까지 가는 길입니다.', 'A road along a green glacial lake to the foot of the Kjenndal glacier.', 'Kjenndalsbreen', 120, 180, group=NEAR, b='no', n=FREE),
          H('로엔 비아 페라타', 'Via Ferrata Loen', '스카이리프트 옆 절벽에 놓인 철제 사다리 등반로로, 가이드와 함께 오릅니다.', 'A fixed-iron climbing route up the cliff beside the Skylift, done with a guide.', 'Via Ferrata Loen', 300, 420, b='req', n=SUMMER),
      ],
      hubs=hubs(["['Sandane (SDN)', '산다네 공항 (SDN)', '오슬로행 소형기|small planes to Oslo']", "['Ålesund Vigra (AES)', '올레순 공항 (AES)', '차로 약 2시간 30분|About 2½ hrs by car']"], "['Loen', '로엔 버스 정류장', '스트륀·베르겐행|to Stryn, Bergen']", "['Olden', '올덴 크루즈 부두']"),
      itinerary={'days': [['', 1, 4]], 'trips': [['브릭스달 빙하|Briksdal glacier', 2], ['로바트네트|Lovatnet', 3]]},
      season='5~9월이 좋고, 빙하 길과 비아 페라타는 여름에만 엽니다.|May–September; the glacier roads and via ferrata are summer-only.',
      stay=[('로엔', 'Loen', 'Loen', FIRST, '피오르 가 호텔과 스카이리프트가 가깝습니다.|Fjordside hotels near the Skylift.'),
            ('올덴', 'Olden', 'Olden', '빙하 가까이|Near the glacier', '브릭스달 빙하 골짜기 입구 마을입니다.|The village at the mouth of the Briksdal valley.')],
      routes=[R('bergen', 'loen', 'bus', 360, "n: '스트륀행 버스|bus to Stryn'")],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='버스가 드물어 차가 있으면 편합니다.', en='Buses are sparse; a car is easiest.')),
    C(id='eidfjord', group_title=None, after='odda', ko='에이드피오르·울빅', en='Eidfjord & Ulvik', native='Eidfjord / Ulvik', lat=60.4669, lng=7.0717,
      blurb=['하르당에르피오르 가장 안쪽 두 마을로, 고원에서 떨어지는 뵈링스포센 폭포와 하르당에르비다 고원 입구가 있습니다. 울빅은 사과밭과 사이다로 이름났습니다. 에이드피오르를 기준으로 안내합니다.',
             'Two villages at the far end of the Hardangerfjord, with the Vøringsfossen falls off the plateau and the gateway to Hardangervidda; Ulvik is known for orchards and cider. Times are from Eidfjord.'],
      highlights=[
          H('뵈링스포센', 'Vøringsfossen', '182m 높이로 떨어지는 폭포로, 2020년에 놓은 계단 다리로 협곡 위를 건넙니다.', 'A 182 m waterfall, crossed above the gorge by a stepped bridge opened in 2020.', 'Vøringsfossen', 60, 90, group=NEAR, b='no', n=FREE),
          H('하르당에르비다 자연 센터', 'Hardangervidda Nature Centre', '북유럽 최대 고원의 자연과 순록을 보여 주는 전시관입니다.', 'Exhibits on the nature and reindeer of northern Europe’s largest plateau.', 'Hardangervidda Natursenter', 60, 90, group=NEAR),
          H('울빅 사과밭과 사이다', 'Ulvik orchards & cider', '피오르 가 비탈의 사과밭 마을로, 사이다 농장을 들를 수 있습니다.', 'An orchard village on the fjord slopes, with cider farms to visit.', 'Ulvik', 120, 180, group=DAY),
          H('하르당에르 다리', 'Hardanger Bridge', '2013년에 연 현수교로, 주 경간이 1,310m입니다.', 'A suspension bridge opened in 2013, with a 1,310 m main span.', 'Hardangerbrua', 15, 20, group=NEAR, b='no', n=FREE),
          H('셰오센 산악 농장', 'Kjeåsen mountain farm', '피오르 위 절벽 끝의 외딴 농장으로, 좁은 일방 터널길로 올라갑니다.', 'A remote farm on a ledge high above the fjord, reached by a narrow one-way tunnel road.', 'Kjeåsen', 60, 90, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs([BGO], "['Eidfjord', '에이드피오르 버스 정류장', '보스·게일로행|to Voss, Geilo']", "['Eidfjord', '에이드피오르 부두', '크루즈선|cruise ships']"),
      itinerary={'days': [['', 2, 1, 5]], 'trips': [['울빅|Ulvik', 3, 4]]},
      season='5~9월이 좋고, 5~6월은 사과꽃과 폭포 물이 가장 많습니다.|May–September; May–June brings apple blossom and the fullest falls.',
      stay=[('에이드피오르', 'Eidfjord', 'Eidfjord', FIRST, '부두 가 호텔과 버스가 모여 있습니다.|Hotels and buses by the quay.'),
            ('울빅', 'Ulvik', 'Ulvik', '사과밭 마을|Orchard village', '피오르 가 호텔과 사이다 농장이 있습니다.|Fjordside hotels and cider farms.')],
      routes=[R('voss', 'eidfjord', 'bus', 75)],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='버스가 드물어 차가 있으면 편합니다.', en='Buses are sparse; a car is easiest.')),
    C(id='andalsnes', group_title=None, after='geiranger', ko='온달스네스', en='Åndalsnes', native='Åndalsnes', lat=62.5675, lng=7.6870,
      blurb=['롬스달 피오르 끝의 산악 마을로, 라우마 철도의 종착역입니다. 곤돌라와 람페스트레켄 전망대, 트롤 벽이 가깝습니다.',
             'A mountain village at the head of the Romsdalsfjord and end of the Rauma Railway, close to the gondola, the Rampestreken viewpoint and the Troll Wall.'],
      highlights=[
          H('롬스달 곤돌라', 'Romsdalen Gondola', '2021년에 연 곤돌라로, 역 앞에서 뇌삭슬라 708m까지 오릅니다.', 'A gondola opened in 2021, from by the station to Nesaksla at 708 m.', 'Romsdalsgondolen', 90, 120, b='rec'),
          H('람페스트레켄 전망대', 'Rampestreken', '절벽 끝에 튀어나온 철제 전망대로, 마을에서 걸어 오르거나 곤돌라 정상에서 내려옵니다.', 'A steel platform jutting from the cliff, hiked up from town or reached from the gondola top.', 'Rampestreken', 120, 180, b='no', n=FREE),
          H('라우마 철도', 'Rauma Railway', '돔보스에서 내려오는 산악 철도로, 셸링 다리와 폭포를 지납니다.', 'The mountain railway down from Dombås, past the Kylling Bridge and waterfalls.', 'Raumabanen', 90, 120, group=DAY),
          H('트롤 벽', 'Troll Wall (Trollveggen)', '유럽에서 가장 높은 수직 암벽(약 1,000m)으로, 아래 방문자 센터에서 올려다봅니다.', 'Europe’s tallest vertical rock face, about 1,000 m, seen from the visitor centre below.', 'Trollveggen', 30, 45, group=NEAR, b='no', n=FREE),
          H('노르웨이 등산 센터', 'Norwegian Mountaineering Centre', '노르웨이 등산 역사 전시와 실내 암벽이 있는 센터입니다.', 'Exhibits on Norwegian climbing history, with an indoor climbing wall.', 'Norsk Tindesenter', 60, 90),
      ],
      hubs=hubs(["['Molde Årø (MOL)', '몰데 공항 (MOL)', '버스로 약 1시간 30분|About 1½ hrs by bus']"], "['Åndalsnes stasjon', '온달스네스역 버스', '올레순·몰데행|to Ålesund, Molde']", None, "['Åndalsnes', '온달스네스역', '돔보스 환승|change at Dombås']"),
      itinerary={'days': [['', 1, 2, 5]], 'trips': [['라우마 철도|Rauma Railway', 3], ['트롤 벽|Troll Wall', 4]]},
      season='6~9월이 좋습니다. 람페스트레켄 길은 눈이 녹은 뒤에 오르세요.|June–September; climb to Rampestreken once the snow has gone.',
      stay=[('역 앞 시내', 'Station area', 'Åndalsnes', FIRST, '역과 곤돌라, 식당이 모여 있습니다.|The station, gondola and restaurants together.')],
      routes=[R('oslo', 'andalsnes', 'train', 330, '...R', "n: '돔보스 환승 · 라우마선|change at Dombås · Rauma Line'"), R('andalsnes', 'alesund', 'bus', 135)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 트롤 벽은 차나 버스로 갑니다.', en='Walk the village; car or bus to the Troll Wall.')),
    C(id='kristiansund', group_title=None, after='andalsnes', ko='크리스티안순·대서양 도로', en='Kristiansund & Atlantic Road', native='Kristiansund', lat=63.1105, lng=7.7279,
      blurb=['섬 네 개에 걸친 대구포(클리프피스크) 항구 도시로, 바다 위 섬들을 다리로 잇는 대서양 도로가 가깝습니다.',
             'A clipfish port spread over four islands, close to the Atlantic Road that hops across skerries on bridges.'],
      highlights=[
          H('대서양 도로', 'Atlantic Road', '작은 섬들을 다리 8개로 잇는 8.3km 해안 도로로, 굽은 스토르세이순 다리가 상징입니다.', 'An 8.3 km coastal road linking skerries with eight bridges, the curving Storseisundet bridge its emblem.', 'Atlanterhavsveien', 90, 120, group=DAY, b='no', n=FREE),
          H('순보텐 항구 배', 'Sundbåten harbour ferry', '1876년부터 섬 사이를 오가는 작은 항구 배로, 세계에서 오래된 대중교통 노선으로 꼽힙니다.', 'Little harbour boats linking the islands since 1876, counted among the world’s oldest public transport routes.', 'Sundbåten Kristiansund', 30, 45),
          H('클리프피스크 박물관', 'Clipfish Museum', '대구를 말려 수출하던 1749년 부두 창고의 박물관입니다.', 'A museum in a 1749 wharf warehouse where cod was salted and dried for export.', 'Norsk Klippfiskmuseum', 60, 90, n=SUMMER),
          H('그리프섬', 'Grip', '바다 한가운데 바위섬 어촌으로, 15세기 목조 교회가 있습니다. 여름에만 배가 다닙니다.', 'A rocky fishing island out at sea with a 15th-century stave church, served by boat in summer only.', 'Grip Kristiansund', 180, 240, group=NEAR, n=SUMMER),
          H('바르덴 전망대', 'Varden viewpoint', '시내 언덕 위 전망대로, 섬과 항구가 한눈에 보입니다.', 'A hilltop lookout over the islands and harbour.', 'Varden Kristiansund', 30, 45, b='no', n=FREE),
      ],
      hubs=hubs(["['Kristiansund Kvernberget (KSU)', '크리스티안순 공항 (KSU)']"], "['Kristiansund rutebilstasjon', '크리스티안순 버스터미널']", "['Kristiansund hurtigbåtterminal', '크리스티안순 여객선 터미널', '후르티그루텐·트론헤임행 쾌속선|Hurtigruten, express boat to Trondheim']"),
      itinerary={'days': [['', 2, 5, 3]], 'trips': [['대서양 도로|Atlantic Road', 1], ['그리프|Grip', 4]]},
      season='5~9월이 좋고, 가을 폭풍 때 대서양 도로의 파도도 볼만합니다.|May–September; autumn storms bring big waves on the Atlantic Road.',
      stay=[('항구 중심', 'Harbour centre', 'Kristiansund', FIRST, '부두와 버스, 식당이 모여 있습니다.|The quays, buses and restaurants together.')],
      routes=[R('oslo', 'kristiansund', 'flight', 60), R('trondheim', 'kristiansund', 'ferry', 210, "n: '쾌속선|express boat'")],
      transit=dict(modes=['walk', 'bus', 'ferry', 'taxi'], ko='섬 사이는 항구 배로, 대서양 도로는 차나 버스로 갑니다.', en='Harbour boats between the islands; car or bus to the Atlantic Road.')),
    C(id='vesteralen', group_title=None, after='lofoten', ko='베스테롤렌·안데네스', en='Vesterålen & Andenes', native='Andenes', lat=69.3143, lng=16.1194,
      blurb=['로포텐 북쪽 베스테롤렌 제도의 끝 마을 안데네스로, 대륙붕이 가까워 향유고래를 보러 가는 고래 사파리의 출발지입니다. 안데네스를 기준으로 안내합니다.',
             'Andenes, at the tip of the Vesterålen islands north of Lofoten, where the continental shelf comes close and whale safaris set out to see sperm whales; times are from Andenes.'],
      highlights=[
          H('고래 사파리', 'Whale safari', '향유고래를 찾아 먼바다로 나가는 배 투어로, 고래 박물관 관람이 함께 있습니다.', 'Boat trips out to the deep water in search of sperm whales, with a whale museum visit included.', 'Whale Safari Andenes', 240, 300, b='rec'),
          H('안데네스 등대', 'Andenes Lighthouse', '1859년에 세운 40m 높이의 빨간 등대로, 여름엔 꼭대기까지 오르는 투어가 있습니다.', 'A 40 m red lighthouse from 1859; tours climb to the top in summer.', 'Andenes fyr', 45, 60, n=SUMMER),
          H('스페이스십 오로라', 'Spaceship Aurora', '안되야 우주 기지의 2023년 방문자 센터로, 오로라와 우주 과학을 체험합니다.', 'Andøya Space’s visitor centre, opened in 2023, on the aurora and space science.', 'Spaceship Aurora', 90, 120, b='rec'),
          H('블레이크 해변', 'Bleik beach', '하얀 모래가 3km 이어지는 해변으로, 앞바다에 퍼핀 섬 블레이크스외위아가 있습니다.', 'A 3 km white-sand beach facing Bleiksøya, a puffin island.', 'Bleikstranda', 60, 90, group=NEAR, b='no', n=FREE),
          H('안되야 관광 도로', 'Andøya scenic route', '바다와 산 사이로 이어지는 섬 서쪽 해안 도로입니다.', 'The west-coast road of the island, squeezed between sea and mountains.', 'Nasjonal turistveg Andøya', 60, 90, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["['Andøya Andenes (ANX)', '안되야 공항 (ANX)', '오슬로·보되행|to Oslo, Bodø']", "['Harstad/Narvik Evenes (EVE)', '하르스타드·나르비크 공항 (EVE)', '차로 약 3시간|About 3 hrs by car']"], "['Andenes', '안데네스 버스 정류장', '소르틀란·스토크마르크네스행|to Sortland, Stokmarknes']", "['Andenes ferjekai', '안데네스 선착장', '센야 그륄레피오르행 여름 페리|summer ferry to Gryllefjord, Senja']"),
      itinerary={'days': [['', 2, 3]], 'trips': [['고래 사파리|Whale safari', 1], ['블레이크·관광 도로|Bleik & scenic route', 4, 5]]},
      season='고래 사파리는 5월 말~9월 중순이 중심이고, 겨울엔 오로라를 봅니다.|Whale safaris run mainly late May to mid-September; winter is for the aurora.',
      stay=[('안데네스', 'Andenes', 'Andenes', FIRST, '고래 사파리 부두와 등대가 가깝습니다.|Near the whale-safari quay and lighthouse.')],
      routes=[R('bodo', 'vesteralen', 'flight', 40), R('senja', 'vesteralen', 'ferry', 100, "n: '여름에만 운항 · 그륄레피오르–안데네스|summer only · Gryllefjord–Andenes'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 섬 안은 차가 편합니다.', en='Walk the village; a car is easiest on the island.')),
    C(id='senja', group_title=None, after='tromso', ko='센야', en='Senja', native='Senja', lat=69.2300, lng=17.9800,
      blurb=['노르웨이에서 두 번째로 큰 섬으로, 바다 위로 솟은 뾰족한 봉우리와 어촌을 잇는 관광 도로가 있습니다. 다리로 이어진 핀스네스를 기준으로 안내합니다.',
             'Norway’s second-largest island, with jagged peaks rising from the sea and a scenic road between fishing villages; times are from Finnsnes, linked by bridge.'],
      highlights=[
          H('베르그스보튼 전망대', 'Bergsbotn viewpoint', '피오르 위로 내민 44m 길이의 나무 전망대입니다.', 'A 44 m wooden platform reaching out over the fjord.', 'Bergsbotn utsiktspunkt', 20, 30, group=NEAR, b='no', n=FREE),
          H('퉁에네세 전망대', 'Tungeneset viewpoint', '바위 위 나무 길 끝에서 ‘악마의 이빨’ 봉우리들이 보입니다.', 'A boardwalk over the rocks facing the jagged “Devil’s Teeth” peaks.', 'Tungeneset', 30, 45, group=NEAR, b='no', n=FREE),
          H('세글라 산행', 'Segla hike', '바다에서 돛처럼 솟은 639m 봉우리로, 옆 능선에서 보는 모습이 유명합니다.', 'A 639 m peak rising like a sail from the sea, best seen from the neighbouring ridge.', 'Segla Senja', 240, 300, group=NEAR, b='no', n='가파른 산길이라 등산 장비가 필요합니다.|A steep trail; proper hiking gear needed.'),
          H('후쇠위 어촌', 'Husøy', '작은 섬 하나를 가득 채운 어촌으로, 둑길로 이어져 있습니다.', 'A fishing village filling a tiny island, linked by causeway.', 'Husøy Senja', 45, 60, group=NEAR, b='no', n=FREE),
          H('안데르달렌 국립공원', 'Ånderdalen National Park', '자작나무 숲과 소나무 고목이 있는 섬 남쪽 국립공원입니다.', 'A national park of birch woods and old pines in the south of the island.', 'Ånderdalen nasjonalpark', 120, 180, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["['Bardufoss (BDU)', '바르두포스 공항 (BDU)', '차로 약 1시간|About 1 hr by car']", TOS], "['Finnsnes', '핀스네스 버스 정류장']", "['Finnsnes hurtigbåtkai', '핀스네스 쾌속선 부두', '트롬쇠행 쾌속선·후르티그루텐|express boat to Tromsø, Hurtigruten']"),
      itinerary={'days': [['북쪽 관광 도로|Northern scenic road', 1, 2, 4], ['', 3]], 'trips': [['안데르달렌|Ånderdalen', 5]]},
      season='6~8월엔 백야 산행, 9~3월엔 오로라가 좋습니다.|June–August for midnight-sun hikes; September–March for the aurora.',
      stay=[('핀스네스', 'Finnsnes', 'Finnsnes', '교통 거점|Transport hub', '쾌속선과 버스, 가게가 모여 있습니다.|Express boats, buses and shops.'),
            ('섬 북쪽 어촌', 'Northern fishing villages', 'Mefjordvær', FIRST, '봉우리 가까이 바닷가 오두막(로르부)이 있습니다.|Seaside cabins close to the peaks.')],
      routes=[R('tromso', 'senja', 'ferry', 75, "n: '핀스네스행 쾌속선|express boat to Finnsnes'")],
      transit=dict(modes=['bus', 'taxi'], ko='버스가 드물어 차가 있어야 섬을 돌 수 있습니다.', en='Buses are sparse; a car is needed to tour the island.')),
    C(id='alta', group_title=None, after='honningsvag', ko='알타', en='Alta', native='Alta', lat=69.9689, lng=23.2716,
      blurb=['핀마르크에서 가장 큰 도시로, 유네스코 세계유산 바위그림과 북극광 대성당이 있습니다. 오로라 관측지로 이름났습니다.',
             'Finnmark’s largest town, with World Heritage rock carvings and the Northern Lights Cathedral; renowned for watching the aurora.'],
      highlights=[
          H('알타 바위그림과 박물관', 'Alta rock art & museum', '7,000~2,000년 전 새긴 바위그림이 바닷가 바위에 남아 있는 세계유산으로, 나무 길을 따라 봅니다.', 'World Heritage rock carvings made 7,000 to 2,000 years ago on the shore rocks, seen along boardwalks.', 'Alta Museum World Heritage Rock Art Centre', 120, 150, n='바위그림 산책로는 눈이 덮이는 겨울엔 닫힙니다.|The rock-art trails close under winter snow.'),
          H('북극광 대성당', 'Northern Lights Cathedral', '2013년에 문을 연 나선형 티타늄 외벽의 교회로, 오로라를 형상화했습니다.', 'A spiral, titanium-clad church opened in 2013, shaped after the aurora.', 'Nordlyskatedralen', 30, 45),
          H('오로라 관측', 'Northern lights', '맑은 겨울밤 시내 밖 어두운 곳에서 오로라를 봅니다. 투어가 많습니다.', 'Watch the aurora from dark places outside town on clear winter nights; many tours run.', 'Alta', 180, 240, group=NEAR, n='9월 말~3월 맑은 밤에 볼 수 있습니다.|Clear nights from late September to March.'),
          H('소리스니바 이글루 호텔', 'Sorrisniva Igloo Hotel', '해마다 겨울에 얼음과 눈으로 새로 짓는 호텔로, 낮에는 구경할 수 있습니다.', 'A hotel rebuilt from ice and snow every winter, open for daytime visits.', 'Sorrisniva Igloo Hotel', 60, 90, group=NEAR, n='겨울(대략 12월~4월)에만 엽니다.|Winter only, roughly December–April.'),
      ],
      hubs=hubs(["['Alta (ALF)', '알타 공항 (ALF)', '시내에서 가까움|close to the centre']"], "['Alta sentrum', '알타 버스 정류장', '함메르페스트·호닝스보그행|to Hammerfest, Honningsvåg']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['오로라 투어|Northern lights tour', 3], ['이글루 호텔|Igloo hotel', 4]]},
      season='오로라는 9월 말~3월, 바위그림 산책로는 5~9월이 좋습니다.|Late September–March for the aurora; May–September for the rock-art trails.',
      stay=[('알타 시내', 'Alta centre', 'Alta', FIRST, '대성당과 식당, 버스가 모여 있습니다.|Near the cathedral, restaurants and buses.')],
      routes=[R('oslo', 'alta', 'flight', 120), R('tromso', 'alta', 'flight', 45)],
      transit=dict(modes=['bus', 'taxi', 'walk'], ko='시내 버스가 있지만, 바위그림과 오로라 장소는 차나 투어가 편합니다.', en='Town buses exist, but a car or tour is easiest for the rock art and aurora spots.')),
    C(id='kirkenes', group_title=None, after='alta', ko='키르케네스', en='Kirkenes', native='Kirkenes', lat=69.7271, lng=30.0450,
      blurb=['러시아·핀란드 국경 가까운 노르웨이 북동쪽 끝 도시로, 후르티그루텐 연안 여객선의 종착지입니다. 눈 호텔과 킹크랩 사파리로 알려져 있습니다.',
             'A town at Norway’s far north-east near the Russian and Finnish borders, end of the Hurtigruten coastal voyage, known for its snow hotel and king-crab safaris.'],
      highlights=[
          H('키르케네스 스노 호텔', 'Kirkenes Snowhotel', '겨울마다 눈과 얼음으로 짓는 호텔로, 허스키 농장이 함께 있습니다.', 'A hotel built of snow and ice each winter, with a husky farm.', 'Kirkenes Snowhotel', 90, 120, group=NEAR, b='rec'),
          H('킹크랩 사파리', 'King crab safari', '배나 설상차로 피오르에 나가 킹크랩을 잡아 바로 맛보는 투어입니다.', 'Go out on the fjord by boat or snowmobile to haul king crab and eat it on the spot.', 'Kirkenes king crab safari', 180, 240, b='req'),
          H('국경 지대 박물관', 'Borderland Museum', '2차 대전과 국경 지역 삶, 사미 문화를 보여 주는 박물관입니다.', 'A museum of the Second World War, border life and Sámi culture.', 'Grenselandmuseet', 60, 90),
          H('안데르스 동굴', 'Andersgrotta', '2차 대전 폭격 때 주민들이 피신한 바위 속 방공호입니다.', 'A rock shelter where townspeople hid from bombing in the Second World War.', 'Andersgrotta', 45, 60, b='rec'),
      ],
      hubs=hubs(["['Kirkenes Høybuktmoen (KKN)', '키르케네스 공항 (KKN)', '오슬로·트롬쇠행|to Oslo, Tromsø']"], "['Kirkenes', '키르케네스 버스 정류장']", "['Kirkenes Hurtigruten', '키르케네스 후르티그루텐 부두', '연안 여객선 종착·출발지|start and end of the coastal voyage']"),
      itinerary={'days': [['', 3, 4]], 'trips': [['킹크랩 사파리|King crab safari', 2], ['스노 호텔|Snowhotel', 1]]},
      season='겨울(12~4월)엔 눈 호텔과 오로라, 여름엔 백야를 봅니다.|Winter (December–April) for the snow hotel and aurora; summer for the midnight sun.',
      stay=[('시내 중심', 'Town centre', 'Kirkenes', FIRST, '호텔과 식당, 부두가 가깝습니다.|Hotels, restaurants and the quay close together.')],
      routes=[R('oslo', 'kirkenes', 'flight', 140), R('tromso', 'kirkenes', 'flight', 75)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 투어는 숙소로 데리러 옵니다.', en='Walk the town; tours pick up from hotels.')),
    C(id='longyearbyen', group_title=None, after='kirkenes', ko='스발바르(롱위에아르뷔엔)', en='Svalbard (Longyearbyen)', native='Longyearbyen', lat=78.2232, lng=15.6267,
      blurb=['북위 78도 스발바르 제도의 중심 마을로, 일반 여행객이 갈 수 있는 세계 최북단 마을 가운데 하나입니다. 북극곰 때문에 마을 밖은 무장한 가이드와 함께 나가야 합니다. 스발바르는 솅겐 지역 밖이라 오가며 여권 심사를 받습니다.',
             'The main settlement of Svalbard at 78° N, one of the northernmost towns ordinary travellers can reach. Because of polar bears, leave town only with an armed guide. Svalbard is outside Schengen, so passports are checked on the way in and out.'],
      highlights=[
          H('스발바르 박물관', 'Svalbard Museum', '사냥·탄광·탐험의 역사와 북극 자연을 보여 주는 박물관입니다.', 'A museum of hunting, mining, exploration and Arctic nature.', 'Svalbard Museum', 60, 90),
          H('북극 탐험 박물관', 'North Pole Expedition Museum', '아문센과 비행선 탐험 등 북극점 도전의 역사를 보여 줍니다.', 'The story of the race for the North Pole, from Amundsen to the airship expeditions.', 'North Pole Expedition Museum Longyearbyen', 60, 90),
          H('스발바르 교회', 'Svalbard Church', '세계 최북단 교회에 꼽히는 목조 교회로, 누구나 들어가 쉴 수 있습니다.', 'A wooden church counted among the world’s northernmost, open for anyone to drop in.', 'Svalbard kirke', 20, 30, b='no', n=FREE),
          H('3번 탄광 투어', 'Mine 3 tour', '1996년에 문을 닫은 탄광 갱도를 걸어 보는 가이드 투어입니다.', 'A guided walk into a coal mine closed in 1996.', 'Gruve 3', 180, 240, group=NEAR, b='req'),
          H('피오르 보트·빙하 투어', 'Fjord boat & glacier trips', '여름엔 배로 빙하와 옛 소련 탄광 마을 바렌츠부르크·피라미덴에 갑니다.', 'Summer boat trips to glaciers and the old Soviet mining settlements of Barentsburg and Pyramiden.', 'Longyearbyen', 480, 600, group=DAY, b='req', n=SUMMER),
      ],
      hubs=hubs(["['Svalbard Longyear (LYR)', '스발바르 공항 (LYR)', '오슬로·트롬쇠행 · 솅겐 밖|to Oslo, Tromsø · outside Schengen']"], "['Longyearbyen', '롱위에아르뷔엔 공항버스', '항공편 시간에 맞춰 운행|timed to flights']"),
      itinerary={'days': [['', 1, 2, 3], ['', 4]], 'trips': [['피오르·빙하 투어|Fjord & glacier trip', 5]]},
      season='3~5월은 눈과 햇빛, 6~8월은 백야와 보트 투어, 11~1월은 극야와 오로라입니다.|March–May for snow and sun; June–August for midnight sun and boat trips; November–January for polar night and aurora.',
      stay=[('롱위에아르뷔엔 시내', 'Longyearbyen centre', 'Longyearbyen', FIRST, '숙소와 식당이 모두 마을 안에 있습니다.|All lodgings and restaurants are in the settlement.')],
      routes=[R('oslo', 'longyearbyen', 'flight', 180), R('tromso', 'longyearbyen', 'flight', 100)],
      transit=dict(modes=['bus', 'taxi', 'walk'], ko='마을 안은 걸어서 다니고, 마을 밖은 무장 가이드 투어로만 나갑니다.', en='Walk within the settlement; go beyond it only on tours with an armed guide.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
