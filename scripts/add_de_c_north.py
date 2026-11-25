#!/usr/bin/env python3
"""Germany 2nd pass, new cities — north (2026-11-25, user picked): Hanover, Hamelin (+Hildesheim), Goslar, Lüneburg (+Celle)
in a new Lower Saxony group; Wismar, Rostock (+Warnemünde), Stralsund (+Rügen) in Mecklenburg-Vorpommern.
Facts (Wikipedia en/de): Herrenhausen Great Garden one of Europe's major Baroque gardens; New Town Hall 1913 with an
inclined arched lift in the dome; Maschsee artificial lake 1934–36; Red Thread painted line linking city-centre sights;
Sprengel Museum modern art incl. Niki de Saint Phalle; Hamelin Pied Piper legend, Weser Renaissance, open-air play on
summer Sundays at the Hochzeitshaus (free), Hochzeitshaus glockenspiel; Hildesheim Cathedral and St Michael's UNESCO
1985 (Bernward doors, thousand-year rose, painted wooden ceiling), Knochenhaueramtshaus rebuilt 1980s; Goslar old town
and Rammelsberg UNESCO 1992, Imperial Palace 11th c., mining for over 1,000 years; Lüneburg wealth from salt, Am Sande
Brick Gothic gables, town hall among Germany's largest medieval ones, Old Crane at the Stintmarkt, German Salt Museum;
Celle ~400 half-timbered houses, ducal castle with a Baroque theatre; Wismar and Stralsund UNESCO 2002, Wasserkunst 1602,
St Nicholas Wismar, St Mary's tower survived WWII, Wassertor last harbour gate; Rostock university 1419, St Mary's
astronomical clock 1472, Warnemünde lighthouse 1898 and Alter Strom, Molli narrow-gauge steam railway Bad Doberan–
Kühlungsborn; Stralsund Old Market and Town Hall, Ozeaneum opened 2008 (European Museum of the Year 2010), Gorch Fock I
in the harbour, Jasmund chalk cliffs and Königsstuhl (national park, skywalk 2023), Binz resort architecture and pier.
Times via Transitous (scripts/transitous_times.py, 2026-11-25): Hamburg–Hanover 80, Hanover–Hamelin 57 (S5),
Hanover–Hildesheim 30, Hanover–Goslar 76, Hamburg–Lüneburg 30, Hanover–Celle 23, Berlin–Stralsund ~2 h 45,
Stralsund–Binz ~70, Rostock–Warnemünde 26 (S1), Hamburg–Rostock ~1 h 55, Berlin–Rostock ~2 h 40. Run once."""
from de_c_common import H, R, C, day, run, new_group, FREE, DAY, NEAR, FIRST

HAJ = "['Hannover (HAJ)', '하노버 공항 (HAJ)']"
HAM = "['Hamburg (HAM)', '함부르크 공항 (HAM)', '함부르크|Hamburg']"
RLG = "['Rostock-Laage (RLG)', '로스토크 공항 (RLG)', '운항편 적음|few flights']"

CITIES = [
    C(id='hannover', group_title=None, after='hamburg', ko='하노버', en='Hanover', native='Hannover', lat=52.3759, lng=9.7320,
      blurb=['니더작센주의 주도로, 유럽을 대표하는 바로크 정원 헤렌하우젠과 돔에 비스듬한 엘리베이터가 있는 신 시청사가 볼거리입니다. 길바닥의 빨간 선 ‘붉은 실’을 따라가면 시내 명소를 한 바퀴 돕니다.',
             'The capital of Lower Saxony, known for the Herrenhausen Gardens, one of Europe’s great Baroque gardens, and the New Town Hall with its inclined lift up the dome; follow the red line painted on the pavement, the “Red Thread”, for a loop of the sights.'],
      highlights=[
          H('헤렌하우젠 정원', 'Herrenhausen Gardens', '대정원을 중심으로 한 왕실 정원으로, 유럽의 대표적인 바로크 정원입니다. 큰 분수와 기하학적 화단, 동굴 정원이 있습니다.', 'The royal gardens centred on the Great Garden, one of Europe’s foremost Baroque gardens, with its great fountain, geometric beds and grotto.', 'Großer Garten Herrenhausen', 90, 150),
          H('신 시청사', 'New Town Hall', '1913년 완공된 궁전 같은 시청으로, 돔 안을 휘어 오르는 엘리베이터를 타고 전망대에 오르며 1층에 도시 모형이 있습니다.', 'A palatial town hall completed in 1913, with an inclined lift that curves up inside the dome to a viewing platform and city models in the hall.', 'Neues Rathaus Hannover', 45, 60, n='건물 안은 무료이고 돔 엘리베이터는 유료입니다.|The hall is free; the dome lift is ticketed.'),
          H('마슈 호수', 'Maschsee', '1934~36년에 만든 시내 남쪽의 인공 호수로, 호숫가 산책과 보트, 여름 축제가 열립니다.', 'An artificial lake south of the centre, built in 1934–36, for lakeside walks, boating and a summer festival.', 'Maschsee Hannover', 45, 90, b='no', n=FREE),
          H('구시가와 마르크트 교회', 'Old town & Market Church', '벽돌 고딕의 마르크트 교회와 옛 시청, 목조 가옥이 남은 구시가입니다.', 'The old town around the Brick Gothic Market Church, the old town hall and surviving half-timbered houses.', 'Marktkirche Hannover', 30, 45, b='no', n=FREE),
          H('붉은 실 산책', 'Red Thread walk', '중앙역 앞에서 시작해 길바닥에 그린 빨간 선을 따라 시내 명소를 한 바퀴 도는 약 4km 산책길입니다.', 'A walk of about 4 km from the main station following a red line painted on the pavement past the city-centre sights.', 'Roter Faden Hannover', 90, 120, b='no', n=FREE),
          H('슈프렝엘 미술관', 'Sprengel Museum', '마슈 호수 옆 현대 미술관으로, 니키 드 생팔의 작품을 많이 소장하고 있습니다.', 'The modern art museum by the Maschsee, with a large collection of works by Niki de Saint Phalle.', 'Sprengel Museum Hannover', 90, 120, c='mon'),
      ],
      hubs=f"    air: [{HAJ}],\n    rail: [['Hannover Hbf', '하노버 중앙역']],\n",
      itinerary=[5, 4, 2, 3, 6, 1],
      season='헤렌하우젠 정원은 봄~가을이 아름답고, 여름엔 마슈 호수 축제가 열립니다.|Herrenhausen is loveliest from spring to autumn; the Maschsee festival is in summer.',
      stay=[('중앙역과 크뢰프케 주변', 'Around the main station & Kröpcke', 'Kröpcke Hannover', FIRST, '역과 쇼핑가, 구시가가 걸어서 닿고 트램이 모입니다.|The station, shopping streets and old town on foot, with the trams meeting here.')],
      routes=[R('hamburg', 'hannover', 'train', 80), R('berlin', 'hannover', 'train', 100)],
      transit=dict(modes=['walk', 'tram', 'bus', 'train'], ko='시내는 걷거나 슈타트반(지상·지하 트램)을 탑니다. 헤렌하우젠 정원은 트램으로 갑니다.', en='Walk or take the Stadtbahn light rail; trams run out to the Herrenhausen Gardens.')),
    C(id='hameln', group_title=None, after='hannover', ko='하멜른', en='Hamelin', native='Hameln', lat=52.1036, lng=9.3561,
      blurb=['‘피리 부는 사나이’ 전설의 무대로, 베저 르네상스 양식의 화려한 집들이 구시가에 늘어서 있습니다. 근교의 힐데스하임에는 유네스코 세계유산인 대성당과 성 미하엘 교회가 있습니다.',
             'The town of the Pied Piper legend, its old town lined with ornate Weser Renaissance houses; nearby Hildesheim has a cathedral and St Michael’s Church that are UNESCO World Heritage Sites.'],
      highlights=[
          H('구시가와 쥐잡이 집', 'Old town & Rattenfängerhaus', '베저 르네상스 양식의 집들이 늘어선 구시가로, 쥐잡이 집 등 전설과 얽힌 건물과 길바닥의 쥐 그림을 따라 걷습니다.', 'An old town of Weser Renaissance houses, including the Rattenfängerhaus; follow the rats painted on the pavement past the buildings tied to the legend.', 'Rattenfängerhaus Hameln', 45, 60, b='no', n=FREE),
          H('결혼식 집과 피리 부는 사나이 야외극', 'Hochzeitshaus & Pied Piper open-air play', '17세기 초 결혼식 집 테라스에서 여름 일요일마다 피리 부는 사나이 야외극을 무료로 공연하고, 정면의 글로켄슈필 시계에서 인형이 돌아갑니다.', 'On summer Sundays the Pied Piper play is performed free on the terrace of the early-17th-century Hochzeitshaus, whose glockenspiel shows figures from the legend.', 'Hochzeitshaus Hameln', 30, 45, b='no', n='야외극은 5월 중순~9월 중순 일요일에만 열립니다.|The play runs on Sundays from mid-May to mid-September only.'),
          H('하멜른 박물관', 'Museum Hameln', '르네상스 저택 두 채에 자리한 시립 박물관으로, 전설과 도시 역사를 전시합니다.', 'The town museum in two Renaissance mansions, telling the legend and the town’s history.', 'Museum Hameln', 60, 75, c='mon'),
          H('힐데스하임 대성당', 'Hildesheim Cathedral', '베른바르트 청동문과 ‘천 년 된 장미 나무’로 유명한 대성당으로, 유네스코 세계유산입니다.', 'The cathedral famed for its bronze Bernward Doors and its “thousand-year rose”; a UNESCO World Heritage Site.', 'Hildesheimer Dom', 45, 60, group=DAY, n='하멜른에서 기차로 약 1시간, 하노버에서 약 30분입니다.|About 1 hr by train from Hamelin, 30 min from Hanover.'),
          H('힐데스하임 성 미하엘 교회', 'St Michael’s Church, Hildesheim', '오토 왕조 시대의 로마네스크 교회로, 그림을 그린 나무 천장이 남아 있습니다. 유네스코 세계유산입니다.', 'An Ottonian Romanesque church with its painted wooden ceiling preserved; a UNESCO World Heritage Site.', 'St. Michaelis Hildesheim', 30, 45, group=DAY, b='no', n=FREE),
          H('힐데스하임 마르크트 광장', 'Hildesheim Market Square', '‘세상에서 가장 아름다운 목조 가옥’이라 불린 정육업 조합 회관을 1980년대에 다시 지은 광장입니다.', 'The square with the Butchers’ Guild Hall, once called the most beautiful timber-framed house in the world, rebuilt in the 1980s.', 'Knochenhaueramtshaus Hildesheim', 30, 45, group=DAY, b='no', n=FREE),
      ],
      hubs=f"    air: [{HAJ}],\n    rail: [['Hameln', '하멜른역', '구시가까지 걸어서 약 15분|about 15 min walk to the old town'], ['Hildesheim Hbf', '힐데스하임 중앙역']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['힐데스하임|Hildesheim', 4, 5, 6]]},
      season='야외극이 열리는 5월 중순~9월 중순 일요일이 가장 즐겁습니다.|Sundays from mid-May to mid-September, when the open-air play is on, are best.',
      stay=[('구시가', 'Old town', 'Osterstraße Hameln', FIRST, '전설의 집들과 식당이 모여 있고 역까지 걸어서 갑니다.|The legend houses and restaurants close by, with the station on foot.')],
      routes=[R('hannover', 'hameln', 'train', 55, 'S5')],
      transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다닙니다. 역에서는 걷거나 버스를 탑니다.', en='Walk the old town; walk or take a bus from the station.')),
    C(id='goslar', group_title=None, after='hameln', ko='고슬라어', en='Goslar', native='Goslar', lat=51.9059, lng=10.4289,
      blurb=['하르츠산맥 북쪽 기슭의 옛 제국 도시로, 천 년 넘게 은과 구리를 캔 라멜스베르크 광산 덕에 부유했습니다. 구시가와 광산이 함께 유네스코 세계유산입니다.',
             'An old imperial town on the northern edge of the Harz, grown rich on the silver and copper of the Rammelsberg mine, worked for over a thousand years; the old town and the mine are a joint UNESCO World Heritage Site.'],
      highlights=[
          H('구시가와 마르크트 광장', 'Old town & Market Square', '목조 가옥과 슬레이트 지붕이 이어진 구시가로, 광장의 글로켄슈필 시계에서 광부 인형이 나옵니다.', 'An old town of half-timbered, slate-roofed houses; the glockenspiel on the square shows the story of the miners.', 'Marktplatz Goslar', 45, 60, b='no', n=FREE),
          H('황궁 (카이저팔츠)', 'Imperial Palace (Kaiserpfalz)', '11세기 신성 로마 황제들이 머문 궁전으로, 큰 홀 벽에 19세기 역사화가 그려져 있습니다.', 'The 11th-century palace of the Holy Roman Emperors, its great hall painted with 19th-century history murals.', 'Kaiserpfalz Goslar', 45, 60),
          H('라멜스베르크 광산 박물관', 'Rammelsberg Mine', '천 년 넘게 광석을 캔 광산을 박물관으로 꾸민 곳으로, 가이드와 함께 갱도에 들어갑니다. 유네스코 세계유산입니다.', 'The mine worked for over a thousand years, now a museum where guided tours take you underground; a UNESCO World Heritage Site.', 'Weltkulturerbe Rammelsberg', 150, 180, b='rec', n='갱도는 가이드 투어로 들어갑니다.|The tunnels are seen on guided tours.'),
          H('마르크트 교회 탑', 'Market Church tower', '광장 옆 마르크트 교회의 탑에 올라 구시가 지붕과 하르츠 숲을 내려다봅니다.', 'Climb the tower of the Market Church beside the square for views over the roofs and the Harz forests.', 'Marktkirche Goslar', 30, 45),
      ],
      hubs=f"    air: [{HAJ}],\n    rail: [['Goslar', '고슬라어역']],\n",
      itinerary=[1, 4, 2, 3],
      season='하르츠 숲길을 걷기 좋은 5~10월이 알맞고, 12월엔 크리스마스 시장이 열립니다.|May–October for Harz walks; there is a Christmas market in December.',
      stay=[('구시가', 'Old town', 'Marktplatz Goslar', FIRST, '광장과 황궁이 걸어서 닿고 역도 가깝습니다.|The square and palace on foot, close to the station.')],
      routes=[R('hannover', 'goslar', 'train', 76)],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다닙니다. 라멜스베르크 광산은 버스로 갑니다.', en='Walk the old town; take a bus to the Rammelsberg.')),
    C(id='luneburg', group_title=None, after='goslar', ko='뤼네부르크', en='Lüneburg', native='Lüneburg', lat=53.2464, lng=10.4115,
      blurb=['중세에 소금으로 부를 쌓은 한자 도시로, 계단식 박공의 벽돌 고딕 집들이 광장과 옛 항구에 늘어서 있습니다. 근교 첼레에는 목조 가옥 수백 채가 남은 구시가와 공작의 성이 있습니다.',
             'A Hanseatic town grown rich on salt in the Middle Ages, its squares and old harbour lined with stepped-gable Brick Gothic houses; nearby Celle has an old town of hundreds of half-timbered houses and a ducal castle.'],
      highlights=[
          H('암 잔데 광장', 'Am Sande', '계단식 박공의 벽돌 고딕 집들이 둘러싼 긴 광장입니다.', 'A long square framed by stepped-gable Brick Gothic houses.', 'Am Sande Lüneburg', 20, 30, b='no', n=FREE),
          H('뤼네부르크 시청사', 'Lüneburg Town Hall', '독일에서 손꼽히게 큰 중세 시청으로, 가이드 투어로 화려한 회의실을 봅니다.', 'One of Germany’s largest medieval town halls, whose ornate chambers are shown on guided tours.', 'Rathaus Lüneburg', 60, 75),
          H('슈팅마르크트와 옛 크레인', 'Stintmarkt & Old Crane', '일메나우강 옛 항구의 나무 크레인과 강변 식당이 이어진 곳입니다.', 'The old harbour on the Ilmenau, with its wooden crane and riverside restaurants.', 'Alter Kran Lüneburg', 20, 30, b='no', n=FREE),
          H('독일 소금 박물관', 'German Salt Museum', '도시를 부유하게 만든 소금 생산의 역사를 옛 제염소 자리에서 보여 줍니다.', 'The story of the salt that made the town rich, told on the site of the old saltworks.', 'Deutsches Salzmuseum', 60, 90),
          H('첼레 구시가', 'Celle old town', '목조 가옥 약 400채가 이어진 구시가로, 색칠한 정면과 나무 조각이 아름답습니다.', 'An old town of some 400 half-timbered houses with painted and carved façades.', 'Altstadt Celle', 60, 90, group=DAY, b='no', n='하노버에서 기차로 약 25분입니다.|About 25 min by train from Hanover.'),
          H('첼레 성', 'Celle Castle', '공작들이 살던 성으로, 안에 바로크 극장과 궁정 예배당이 있습니다.', 'The dukes’ castle, with a Baroque theatre and a court chapel inside.', 'Schloss Celle', 60, 75, group=DAY, c='mon'),
      ],
      hubs=f"    air: [{HAM}],\n    rail: [['Lüneburg', '뤼네부르크역'], ['Celle', '첼레역']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['첼레|Celle', 5, 6]]},
      season='봄~가을이 걷기 좋고, 12월엔 크리스마스 시장이 열립니다.|Spring to autumn is best for walking; Christmas markets in December.',
      stay=[('구시가', 'Old town', 'Am Sande Lüneburg', FIRST, '광장과 옛 항구가 걸어서 닿습니다.|The squares and old harbour on foot.')],
      routes=[R('hamburg', 'luneburg', 'train', 30), R('hannover', 'luneburg', 'train', 60)],
      transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다닙니다.', en='Walk the old town.'),
      daytrips=[day('hamburg', 'luneburg', '소금으로 부를 쌓은 한자 도시의 벽돌 박공 광장과 옛 항구를 걷습니다.|Stroll the brick-gabled squares and old harbour of the salt-rich Hanseatic town.')]),
    # —— Mecklenburg-Vorpommern ——
    C(id='wismar', group_title='메클렌부르크포어포메른', after='schwerin', ko='비스마르', en='Wismar', native='Wismar', lat=53.8925, lng=11.4650,
      blurb=['발트해의 한자 도시로, 벽돌 고딕 교회와 광장의 분수 정자가 남아 있습니다. 슈트랄준트와 함께 유네스코 세계유산입니다.',
             'A Baltic Hanseatic town of Brick Gothic churches and a fountain pavilion on its square; a UNESCO World Heritage Site together with Stralsund.'],
      highlights=[
          H('마르크트 광장과 바서쿤스트', 'Market Square & Wasserkunst', '북독일에서 손꼽히게 큰 광장으로, 1602년 네덜란드 르네상스 양식의 분수 정자 바서쿤스트가 있습니다.', 'One of the largest squares in northern Germany, with the Wasserkunst, a Dutch Renaissance fountain pavilion of 1602.', 'Wasserkunst Wismar', 20, 30, b='no', n=FREE),
          H('성 니콜라이 교회', 'St Nicholas’ Church', '천장이 아주 높은 벽돌 고딕 교회로, 선원과 어부의 교회였습니다.', 'A Brick Gothic church with a soaring nave, once the church of sailors and fishermen.', 'St. Nikolai Wismar', 30, 45),
          H('성 마리아 교회 탑', 'St Mary’s Church tower', '제2차 세계대전 뒤 탑만 남은 교회로, 안에서 벽돌 고딕 건축 전시를 봅니다.', 'Only the tower of this church survived the Second World War; inside is an exhibition on Brick Gothic building.', 'Marienkirchturm Wismar', 30, 45),
          H('옛 항구와 바서토어', 'Old harbour & Wassertor', '옛 항구 성문 가운데 하나만 남은 바서토어와 어선, 생선 샌드위치 가게가 있는 항구입니다.', 'The harbour with the Wassertor, the last of the old harbour gates, fishing boats and fish-sandwich stalls.', 'Wassertor Wismar', 30, 45, b='no', n=FREE),
      ],
      hubs=f"    air: [{HAM}],\n    rail: [['Wismar', '비스마르역']],\n",
      itinerary=[1, 2, 3, 4],
      season='5~9월이 발트해 바람이 부드럽고 항구가 활기찹니다.|May–September, when the harbour is liveliest.',
      stay=[('구시가', 'Old town', 'Markt Wismar', FIRST, '광장과 항구가 걸어서 닿고 역도 가깝습니다.|The square and harbour on foot, close to the station.')],
      routes=[R('schwerin', 'wismar', 'train', 35), R('rostock', 'wismar', 'train', 70)],
      transit=dict(modes=['walk', 'bus'], ko='구시가와 항구는 걸어서 다닙니다.', en='Walk the old town and harbour.')),
    C(id='rostock', group_title='메클렌부르크포어포메른', after='wismar', ko='로스토크', en='Rostock', native='Rostock', lat=54.0887, lng=12.1405,
      blurb=['1419년 세운 북유럽에서 손꼽히게 오래된 대학이 있는 한자 도시로, 벽돌 고딕 교회와 광장이 남아 있습니다. 전철로 25분 거리의 바르네뮌데는 등대와 해변이 있는 바닷가 마을입니다.',
             'A Hanseatic city whose university, founded in 1419, is one of the oldest in northern Europe, with Brick Gothic churches and squares; Warnemünde, 25 minutes away by S-Bahn, is a seaside village with a lighthouse and beach.'],
      highlights=[
          H('노이어 마르크트와 시청사', 'Neuer Markt & Town Hall', '고딕 시청 앞에 분홍빛 바로크 정면을 덧댄 시청과 박공 집들이 둘러싼 광장입니다.', 'The square framed by gabled houses and the town hall, its Gothic core fronted by a pink Baroque façade.', 'Rathaus Rostock', 20, 30, b='no', n=FREE),
          H('성 마리아 교회', 'St Mary’s Church', '벽돌 고딕 교회로, 1472년에 만든 천문 시계가 지금도 움직입니다.', 'A Brick Gothic church whose astronomical clock of 1472 still works.', 'Marienkirche Rostock', 30, 45),
          H('크뢰펠리너 거리와 대학 광장', 'Kröpeliner Strasse & University Square', '옛 성문부터 이어진 보행자 거리로, 대학 본관과 분수가 있는 광장을 지납니다.', 'The pedestrian street from the old city gate past the university’s main building and its fountain square.', 'Universitätsplatz Rostock', 30, 45, b='no', n=FREE),
          H('바르네뮌데', 'Warnemünde', '1898년 등대와 어부 집이 늘어선 운하 ‘알터 슈트롬’, 넓은 모래 해변이 있는 바닷가 마을로 크루즈선이 드나듭니다.', 'The seaside village with its 1898 lighthouse, the Alter Strom canal of fishermen’s houses and a wide sandy beach, where cruise ships call.', 'Leuchtturm Warnemünde', 120, 240, group=NEAR, b='no', n='로스토크 중앙역에서 전철(S1)로 약 25분입니다.|About 25 min from Rostock Hbf by S-Bahn (S1).'),
          H('몰리 증기 기관차', 'Molli steam railway', '바트 도베란에서 퀼룽스보른 해변까지 달리는 협궤 증기 열차로, 도베란 시내 길 한가운데를 지나갑니다. 도베란 수도원 성당도 함께 봅니다.', 'The narrow-gauge steam railway from Bad Doberan to the beach at Kühlungsborn, running right down Doberan’s main street; see Doberan Minster too.', 'Molli Bad Doberan', 180, 240, group=DAY),
      ],
      hubs=f"    air: [{RLG}, {HAM}],\n    rail: [['Rostock Hbf', '로스토크 중앙역'], ['Warnemünde', '바르네뮌데역']],\n    port: [['Warnemünde Cruise Center', '바르네뮌데 크루즈 터미널'], ['Rostock Überseehafen', '로스토크 국제항', '스칸디나비아행 페리|ferries to Scandinavia']],\n",
      itinerary={'days': [['', 1, 2, 3], ['바르네뮌데|Warnemünde', 4]], 'trips': [['몰리 증기 기관차|Molli steam railway', 5]]},
      season='해변을 즐기려면 6~8월이 좋고, 8월엔 큰 범선 축제 ‘한자 세일’이 열립니다.|June–August for the beach; the Hanse Sail tall-ship festival is in August.',
      stay=[('구시가', 'Old town', 'Neuer Markt Rostock', FIRST, '광장과 교회가 걸어서 닿고 바르네뮌데행 전철이 가깝습니다.|The squares and churches on foot, near the S-Bahn to Warnemünde.'),
            ('바르네뮌데', 'Warnemünde', 'Warnemünde', '바다 가까이|By the sea', '해변과 등대 바로 앞에 묵습니다.|Stay right by the beach and lighthouse.')],
      routes=[R('hamburg', 'rostock', 'train', 115), R('berlin', 'rostock', 'train', 160)],
      transit=dict(modes=['walk', 'tram', 'train', 'ferry'], ko='시내는 걷거나 트램을 타고, 바르네뮌데는 전철(S-Bahn)로 갑니다.', en='Walk or take the tram; the S-Bahn runs to Warnemünde.')),
    C(id='stralsund', group_title='메클렌부르크포어포메른', after='rostock', ko='슈트랄준트', en='Stralsund', native='Stralsund', lat=54.3150, lng=13.0890,
      blurb=['물에 둘러싸인 한자 도시로, 벽돌 고딕 시청과 큰 교회들이 남아 비스마르와 함께 유네스코 세계유산입니다. 다리 건너 뤼겐섬엔 하얀 백악 절벽과 해변 휴양지가 있습니다.',
             'A Hanseatic town surrounded by water, whose Brick Gothic town hall and great churches make it a UNESCO World Heritage Site with Wismar; across the bridge, Rügen island has white chalk cliffs and seaside resorts.'],
      highlights=[
          H('알터 마르크트와 시청사', 'Old Market & Town Hall', '레이스처럼 뚫린 벽돌 고딕 정면의 시청과 성 니콜라이 교회가 선 광장입니다.', 'The square with the town hall’s lacy Brick Gothic façade and St Nicholas’ Church.', 'Rathaus Stralsund', 30, 45, b='no', n=FREE),
          H('오체아네움', 'Ozeaneum', '2008년 문을 연 바다 박물관으로, 발트해·북해 수족관과 실물 크기 고래 모형이 있습니다. 2010년 유럽 올해의 박물관상을 받았습니다.', 'The marine museum opened in 2008, with Baltic and North Sea aquariums and life-size whale models; European Museum of the Year 2010.', 'Ozeaneum Stralsund', 120, 180),
          H('성 마리아 교회 탑', 'St Mary’s Church tower', '거대한 벽돌 교회의 탑에 올라 구시가와 뤼겐섬을 내려다봅니다.', 'Climb the tower of the huge brick church for views over the old town and Rügen.', 'Marienkirche Stralsund', 45, 60),
          H('고르히 포크 1호', 'Gorch Fock I', '항구에 떠 있는 1933년 범선 훈련선으로, 배 안을 박물관처럼 둘러봅니다.', 'The 1933 sail-training ship moored in the harbour, open as a museum ship.', 'Gorch Fock I Stralsund', 45, 60),
          H('야스문트 백악 절벽과 쾨니히스슈툴', 'Jasmund chalk cliffs & Königsstuhl', '뤼겐섬 국립공원의 하얀 백악 절벽으로, 쾨니히스슈툴에는 절벽 위를 걷는 전망 산책로가 있습니다.', 'The white chalk cliffs of Rügen’s national park; at the Königsstuhl a skywalk loops out above the cliffs.', 'Königsstuhl Nationalpark-Zentrum', 180, 240, group=DAY),
          H('빈츠 해변', 'Binz', '하얀 발코니의 휴양지 건축과 긴 잔교가 있는 뤼겐섬의 해변 마을입니다.', 'Rügen’s seaside resort of white-balconied villas and a long pier.', 'Seebrücke Binz', 120, 180, group=DAY, b='no', n='슈트랄준트에서 기차로 약 1시간 10분입니다.|About 1 hr 10 by train from Stralsund.'),
      ],
      hubs=f"    air: [{RLG}, ['Berlin Brandenburg (BER)', '베를린 브란덴부르크 공항 (BER)', '베를린|Berlin']],\n    rail: [['Stralsund Hbf', '슈트랄준트 중앙역'], ['Ostseebad Binz', '빈츠역', '뤼겐섬|Rügen']],\n",
      itinerary={'days': [['', 1, 3, 4, 2]], 'trips': [['뤼겐섬|Rügen', 5, 6]]},
      season='뤼겐섬 해변은 6~8월이 좋고, 봄·가을엔 백악 절벽 숲길이 한적합니다.|June–August for Rügen’s beaches; the cliff paths are quieter in spring and autumn.',
      stay=[('구시가', 'Old town', 'Alter Markt Stralsund', FIRST, '광장과 항구, 박물관이 걸어서 닿습니다.|The squares, harbour and museums on foot.')],
      routes=[R('berlin', 'stralsund', 'train', 165), R('rostock', 'stralsund', 'train', 60)],
      transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다닙니다. 뤼겐섬은 기차나 버스로 갑니다.', en='Walk the old town; reach Rügen by train or bus.')),
]


if __name__ == '__main__':
    run(CITIES)
    new_group('니더작센', 'Lower Saxony', ['hannover', 'hameln', 'goslar', 'luneburg'], '브레멘')
