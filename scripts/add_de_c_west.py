#!/usr/bin/env python3
"""Germany 2nd pass, new cities — west (2026-11-25, user picked): Bonn, Düsseldorf, Wuppertal, Essen, Dortmund, Münster
(North Rhine-Westphalia); Darmstadt, Marburg, Kassel (Hesse); Mainz (+Speyer, Rhineland-Palatinate); Saarbrücken in a new
Saarland group. Facts (Wikipedia en/de): Düsseldorf Altstadt 'longest bar in the world', Altbier, Rheinturm 240 m TV tower
with an observation deck, MedienHafen with Gehry's Neuer Zollhof, Königsallee along its canal, K20 Kunstsammlung NRW;
Bonn Beethoven born 1770, Beethoven-Haus, Minster and Münsterplatz Beethoven monument, Rococo old town hall, Haus der
Geschichte (free entry), Drachenfels ruin with Germany's oldest rack railway (1883); Wuppertal Schwebebahn opened 1901,
13.3 km, Von der Heydt Museum, Engels born 1820 in Barmen (Engels-Haus), Müngsten Bridge Germany's highest railway bridge
(107 m, 1897); Zollverein UNESCO 2001 with the Ruhr Museum in the coal washery, Museum Folkwang (free permanent
collection), Villa Hügel of the Krupp family, Essen Cathedral treasury Golden Madonna (c. 980), Baldeneysee; Dortmund
German Football Museum opened 2015, Signal Iduna Park largest stadium in Germany (Yellow Wall, tours), Dortmunder U
former brewery, Westfalenpark with Florianturm, Zeche Zollern Art Nouveau machine hall, Phoenix-See on a former steelworks;
Münster Prinzipalmarkt, Hall of Peace (Peace of Westphalia 1648), St Paulus Cathedral astronomical clock (1540), three
cages on St Lamberti, LWL Museum of Art and Culture, Kunstmuseum Pablo Picasso, Aasee; Mainz Cathedral over 1,000 years
old, Gutenberg Museum (temporary venue during rebuilding), Chagall windows at St Stephan, Speyer Cathedral UNESCO 1981
largest surviving Romanesque church with the imperial crypt, Technik Museum Speyer (Buran); Darmstadt Mathildenhöhe UNESCO
2021 artists' colony with the Wedding Tower (1908) and Russian Chapel, Hessisches Landesmuseum, Hundertwasser's Waldspirale,
Messel Pit fossils UNESCO 1995; Marburg St Elizabeth's oldest purely Gothic church in Germany (1235–83), Landgraves'
Castle, university 1527 oldest Protestant university still running, Brothers Grimm studied there; Kassel Bergpark
Wilhelmshöhe UNESCO 2013 with the Hercules and water features (Wednesdays, Sundays and holidays, May–3 October),
Wilhelmshöhe Palace Old Masters, Grimmwelt, Fridericianum (documenta), Karlsaue and Orangery; Saarbrücken Ludwigskirche
(1762–75), St Johanner Markt, castle and Historical Museum Saar casemates, Völklingen Ironworks UNESCO 1994, Saar loop
with the Cloef viewpoint and treetop walk. Times via Transitous (2026-11-25): Cologne–Düsseldorf 25, Cologne–Bonn 25,
Düsseldorf–Wuppertal 21, Cologne–Wuppertal 35, Cologne–Dortmund 75, Düsseldorf–Essen 30, Dortmund–Münster 33,
Cologne–Münster ~1 h 50, Frankfurt–Mainz 40, Mainz–Speyer ~65, Frankfurt–Darmstadt 20, Frankfurt–Marburg ~60,
Frankfurt–Kassel ~90, Hanover–Kassel 60, Trier–Saarbrücken ~70; Frankfurt–Saarbrücken direct ICE ~2 h. Run once."""
from de_c_common import H, R, C, day, run, new_group, FREE, DAY, NEAR, FIRST

DUS = "['Düsseldorf (DUS)', '뒤셀도르프 공항 (DUS)']"
CGN = "['Köln Bonn (CGN)', '쾰른 본 공항 (CGN)']"
FRA = 'FRA()'
NRW = '노르트라인베스트팔렌'
HE = '헤센'

CITIES = [
    C(id='bonn', group_title=NRW, after='cologne', ko='본', en='Bonn', native='Bonn', lat=50.7374, lng=7.0982,
      blurb=['베토벤이 1770년 태어난 라인강 가의 도시로, 1949~90년 서독의 수도였습니다. 베토벤 생가와 박물관 거리가 있고, 강 건너 드라헨펠스에서 라인 계곡이 내려다보입니다.',
             'The Rhine city where Beethoven was born in 1770 and the capital of West Germany from 1949 to 1990, with Beethoven’s birthplace and a mile of museums; across the river, the Drachenfels looks over the Rhine valley.'],
      highlights=[
          H('베토벤 하우스', 'Beethoven-Haus', '베토벤이 태어난 집을 박물관으로 꾸민 곳으로, 악보 원고와 악기, 보청기 등을 전시합니다.', 'The house where Beethoven was born, now a museum of his manuscripts, instruments and ear trumpets.', 'Beethoven-Haus Bonn', 60, 90),
          H('본 대성당과 뮌스터 광장', 'Bonn Minster & Münsterplatz', '로마네스크 대성당과 베토벤 동상이 선 광장입니다.', 'The Romanesque minster and the square with the Beethoven monument.', 'Bonner Münster', 20, 30, b='no', n=FREE),
          H('옛 시청사와 마르크트 광장', 'Old Town Hall & Market Square', '로코코 양식의 분홍빛 옛 시청이 선 광장으로, 아침엔 시장이 섭니다.', 'The square with the pink Rococo old town hall and a morning market.', 'Altes Rathaus Bonn', 20, 30, b='no', n=FREE),
          H('독일 현대사 박물관', 'House of the History of the Federal Republic', '박물관 거리의 박물관으로, 전쟁 뒤 독일의 역사를 실물로 보여 줍니다. 입장은 무료입니다.', 'The museum on the Museum Mile telling Germany’s post-war history through real objects; entry is free.', 'Haus der Geschichte Bonn', 90, 150, c='mon', b='no', n=FREE),
          H('드라헨펠스', 'Drachenfels', '라인강 건너 쾨니히스빈터의 언덕 위 성터로, 1883년 개통한 독일에서 가장 오래된 톱니바퀴 열차로 오릅니다.', 'The castle ruin above Königswinter across the Rhine, reached by Germany’s oldest rack railway, opened in 1883.', 'Drachenfels Königswinter', 120, 180, group=NEAR),
      ],
      hubs=f"    air: [{CGN}],\n    rail: [['Bonn Hbf', '본 중앙역']],\n",
      itinerary={'days': [['', 1, 3, 2, 4]], 'trips': [['드라헨펠스|Drachenfels', 5]]},
      season='봄~가을이 라인 강변을 걷기 좋고, 9월엔 베토벤 축제가 열립니다.|Spring to autumn for Rhine walks; the Beethovenfest is in September.',
      stay=[('중앙역과 구시가', 'Main station & old town', 'Münsterplatz Bonn', FIRST, '대성당과 베토벤 하우스가 걸어서 닿고 박물관 거리로 트램이 갑니다.|The minster and Beethoven-Haus on foot, with trams to the Museum Mile.')],
      routes=[R('cologne', 'bonn', 'train', 25)],
      transit=dict(modes=['walk', 'tram', 'bus', 'train'], ko='구시가는 걸어서 다니고, 박물관 거리는 슈타트반(트램)을 탑니다.', en='Walk the old town; take the Stadtbahn to the Museum Mile.'),
      daytrips=[day('cologne', 'bonn', '베토벤 하우스와 박물관 거리를 보고, 시간이 되면 드라헨펠스에 오릅니다.|Beethoven’s birthplace and the Museum Mile, then the Drachenfels if time allows.')]),
    C(id='dusseldorf', group_title=NRW, after='bonn', ko='뒤셀도르프', en='Düsseldorf', native='Düsseldorf', lat=51.2277, lng=6.7735,
      blurb=['노르트라인베스트팔렌주의 주도로, 좁은 구시가에 술집이 빽빽해 ‘세상에서 가장 긴 바’라 불립니다. 갈색 맥주 알트비어와 운하 가 쇼핑 거리 쾨니히스알레, 현대 건축의 미디어 항구가 있습니다.',
             'The capital of North Rhine-Westphalia, whose old town is packed so tightly with pubs it is called “the longest bar in the world”; drink dark Altbier, shop the canal-side Königsallee and see the modern architecture of the MedienHafen.'],
      highlights=[
          H('구시가와 알트비어 양조장', 'Altstadt & Altbier breweries', '좁은 골목에 술집이 이어진 구시가로, 직접 빚는 갈색 맥주 알트비어를 양조장 주점에서 마십니다.', 'Narrow lanes lined with pubs, where brewery taverns pour their own dark Altbier.', 'Altstadt Düsseldorf', 60, 120, b='no', n=FREE),
          H('라인 강변 산책로', 'Rhine promenade', '구시가에서 미디어 항구까지 강을 따라 이어진 산책로로, 계단에 앉아 해 지는 강을 봅니다.', 'The riverside walk from the old town to the MedienHafen, with steps to sit on at sunset.', 'Rheinuferpromenade Düsseldorf', 30, 60, b='no', n=FREE),
          H('라인 타워', 'Rheinturm', '높이 240m 텔레비전 탑으로, 전망대에서 라인강 굽이와 시내가 보입니다.', 'The 240 m TV tower, whose observation deck looks over the bend of the Rhine and the city.', 'Rheinturm Düsseldorf', 45, 60),
          H('미디어 항구', 'MedienHafen', '옛 항구를 바꾼 지구로, 프랭크 게리가 설계한 구불구불한 노이어 촐호프 건물이 있습니다.', 'The old harbour turned media quarter, with Frank Gehry’s wavy Neuer Zollhof buildings.', 'Neuer Zollhof Düsseldorf', 30, 45, b='no', n=FREE),
          H('쾨니히스알레', 'Königsallee', '운하를 사이에 둔 가로수 길에 명품 상점이 늘어선 쇼핑 거리 ‘쾨’입니다.', 'The “Kö”, a tree-lined boulevard of luxury shops either side of a canal.', 'Königsallee Düsseldorf', 30, 60, b='no', n=FREE),
          H('K20 노르트라인베스트팔렌 미술관', 'K20 Kunstsammlung NRW', '클레·피카소 등 20세기 미술 작품을 모은 주립 미술관입니다.', 'The state collection of 20th-century art, from Klee to Picasso.', 'K20 Kunstsammlung Nordrhein-Westfalen', 90, 120, c='mon'),
      ],
      hubs=f"    air: [{DUS}],\n    rail: [['Düsseldorf Hbf', '뒤셀도르프 중앙역'], ['Düsseldorf Flughafen', '뒤셀도르프 공항역']],\n",
      itinerary=[1, 2, 3, 4, 5, 6],
      season='봄~가을이 강변 산책에 좋고, 11~2월은 카니발 철이며 12월엔 크리스마스 시장이 열립니다.|Spring to autumn for the riverside; carnival season runs through the winter, with Christmas markets in December.',
      stay=[('구시가와 쾨니히스알레', 'Altstadt & Königsallee', 'Königsallee Düsseldorf', FIRST, '구시가와 강변, 쇼핑 거리가 걸어서 닿습니다.|The old town, river and shopping streets on foot.')],
      routes=[R('cologne', 'dusseldorf', 'train', 25), R('amsterdam', 'dusseldorf', 'train', 135)],
      transit=dict(modes=['walk', 'tram', 'metro', 'train'], ko='구시가는 걸어서 다니고, 트램과 슈타트반(지하 구간)이 시내를 잇습니다.', en='Walk the old town; trams and the Stadtbahn cover the city.'),
      daytrips=[day('cologne', 'dusseldorf', '구시가 양조장에서 알트비어를 마시고 라인 강변과 미디어 항구를 걷습니다.|Altbier in the old-town brewery taverns, then the Rhine promenade and MedienHafen.')]),
    C(id='wuppertal', group_title=NRW, after='dusseldorf', ko='부퍼탈', en='Wuppertal', native='Wuppertal', lat=51.2562, lng=7.1508,
      blurb=['좁은 골짜기를 따라 길게 뻗은 도시로, 1901년부터 강 위를 달리는 매달린 열차 슈베베반이 상징입니다. 엥겔스가 태어난 도시이기도 합니다.',
             'A city stretched along a narrow valley, symbolised by the Schwebebahn, the suspended railway that has run above the river since 1901; it is also the birthplace of Friedrich Engels.'],
      highlights=[
          H('슈베베반', 'Schwebebahn', '1901년 개통한 매달린 모노레일로, 부퍼강 위 약 13km를 달립니다. 끝에서 끝까지 타며 골짜기 도시를 내려다봅니다.', 'The suspended monorail opened in 1901, running about 13 km above the River Wupper; ride it end to end over the valley city.', 'Schwebebahn Wuppertal', 60, 90),
          H('폰 데어 하이트 미술관', 'Von der Heydt Museum', '인상파부터 표현주의까지 근현대 미술 작품을 소장한 미술관입니다.', 'An art museum with works from Impressionism to Expressionism and beyond.', 'Von der Heydt-Museum', 60, 90, c='mon'),
          H('부퍼탈 동물원', 'Wuppertal Zoo', '언덕 위 공원식 동물원으로, 슈베베반 역이 바로 앞에 있습니다.', 'A hillside park zoo with a Schwebebahn station at its gate.', 'Zoo Wuppertal', 150, 240),
          H('엥겔스 하우스와 초기 산업화 박물관', 'Engels House & Museum of Early Industrialisation', '1820년 바르멘에서 태어난 프리드리히 엥겔스의 생애와, 골짜기를 공업 지대로 바꾼 초기 산업화를 보여 줍니다.', 'The life of Friedrich Engels, born in Barmen in 1820, and the early industrialisation that transformed the valley.', 'Engels-Haus Wuppertal', 60, 90, c='mon'),
          H('뮝스텐 다리', 'Müngsten Bridge', '1897년 완공된 높이 107m의 독일에서 가장 높은 철도 다리로, 아래 공원에서 올려다봅니다.', 'Germany’s highest railway bridge, 107 m high and completed in 1897, seen from the park below.', 'Müngstener Brücke', 90, 150, group=DAY, b='no', n=FREE),
      ],
      hubs=f"    air: [{DUS}],\n    rail: [['Wuppertal Hbf', '부퍼탈 중앙역']],\n",
      itinerary={'days': [['', 1, 3, 2, 4]], 'trips': [['뮝스텐 다리|Müngsten Bridge', 5]]},
      season='1년 내내 다닐 수 있고, 슈베베반은 날씨와 상관없이 즐길 수 있습니다.|Fine all year; the Schwebebahn is good in any weather.',
      stay=[('엘버펠트 중심가', 'Elberfeld centre', 'Wuppertal Hbf', FIRST, '중앙역과 미술관, 슈베베반 역이 걸어서 닿습니다.|The main station, museum and Schwebebahn on foot.')],
      routes=[R('dusseldorf', 'wuppertal', 'train', 21), R('cologne', 'wuppertal', 'train', 35)],
      transit=dict(modes=['walk', 'bus', 'train'], ko='슈베베반이 골짜기를 따라 시내를 잇는 주요 교통수단입니다.', en='The Schwebebahn is the main link along the valley.'),
      daytrips=[day('cologne', 'wuppertal', '매달린 열차 슈베베반을 끝에서 끝까지 타고 동물원과 미술관을 봅니다.|Ride the Schwebebahn end to end and see the zoo and art museum.')]),
    C(id='essen', group_title=NRW, after='wuppertal', ko='에센', en='Essen', native='Essen', lat=51.4556, lng=7.0116,
      blurb=['루르 공업 지대의 중심 도시로, 거대한 탄광 시설 촐페라인이 유네스코 세계유산으로 남아 있습니다. 크루프 가문의 저택과 1,000년 넘은 대성당 보물도 볼 수 있습니다.',
             'The heart of the Ruhr, where the vast Zollverein colliery survives as a UNESCO World Heritage Site; see too the Krupp family’s villa and a cathedral treasury over a thousand years old.'],
      highlights=[
          H('촐페라인 탄광 산업단지', 'Zollverein Coal Mine Industrial Complex', '바우하우스풍 수직갱 탑 ‘샤프트 12’로 유명한 거대한 옛 탄광으로, 유네스코 세계유산입니다.', 'The vast former colliery famed for its Bauhaus-style Shaft XII winding tower; a UNESCO World Heritage Site.', 'Zeche Zollverein', 120, 180, b='no', n='단지 안을 걷는 것은 무료이고 박물관과 투어는 유료입니다.|The site is free to walk; museums and tours are ticketed.'),
          H('루르 박물관', 'Ruhr Museum', '촐페라인의 옛 석탄 세척장 안 박물관으로, 긴 에스컬레이터를 타고 올라가 루르 지방의 자연과 역사를 봅니다.', 'The museum inside Zollverein’s old coal washery, reached by a long escalator, on the Ruhr’s nature and history.', 'Ruhr Museum Essen', 90, 120),
          H('폴크방 미술관', 'Museum Folkwang', '19~20세기 미술과 사진을 소장한 미술관으로, 상설 전시는 무료입니다.', 'A museum of 19th- and 20th-century art and photography; the permanent collection is free.', 'Museum Folkwang', 90, 120, c='mon', b='no', n='상설 전시는 무료이고 특별전은 유료입니다.|Free permanent collection; special exhibitions are ticketed.'),
          H('빌라 휘겔', 'Villa Hügel', '철강 재벌 크루프 가문이 살던 대저택과 넓은 공원입니다.', 'The mansion and grounds of the Krupp steel dynasty.', 'Villa Hügel', 90, 120, c='mon'),
          H('에센 대성당과 보물관', 'Essen Cathedral & treasury', '보물관에 약 980년 무렵의 ‘황금 성모상’이 있는 대성당입니다.', 'The cathedral whose treasury holds the Golden Madonna of about 980.', 'Essener Dom', 30, 60),
          H('발데나이 호수', 'Lake Baldeney', '루르강을 막아 만든 호수로, 호숫가 산책과 유람선을 즐깁니다.', 'A lake on the Ruhr for lakeside walks and boat trips.', 'Baldeneysee', 60, 120, b='no', n=FREE),
      ],
      hubs=f"    air: [{DUS}],\n    rail: [['Essen Hbf', '에센 중앙역']],\n",
      itinerary=[5, 3, 1, 2, 4, 6],
      season='1년 내내 다닐 수 있고, 여름엔 촐페라인과 호숫가 행사가 많습니다.|Fine all year; summer brings events at Zollverein and by the lake.',
      stay=[('중앙역 주변', 'Around the main station', 'Essen Hbf', FIRST, '대성당과 미술관이 가깝고 촐페라인행 트램이 다닙니다.|Near the cathedral and museum, with trams to Zollverein.')],
      routes=[R('dusseldorf', 'essen', 'train', 30), R('essen', 'dortmund', 'train', 25)],
      transit=dict(modes=['walk', 'tram', 'metro', 'train'], ko='트램과 슈타트반이 촐페라인과 시내를 잇습니다.', en='Trams and the Stadtbahn link Zollverein and the centre.')),
    C(id='dortmund', group_title=NRW, after='essen', ko='도르트문트', en='Dortmund', native='Dortmund', lat=51.5136, lng=7.4653,
      blurb=['루르 지방 동쪽의 축구 도시로, 보루시아 도르트문트의 홈구장과 중앙역 앞 독일 축구 박물관이 있습니다. 옛 양조장·탄광·제철소가 박물관과 호수로 바뀌었습니다.',
             'The football city at the eastern end of the Ruhr, home of Borussia Dortmund’s stadium and the German Football Museum opposite the main station; old breweries, mines and steelworks have become museums and a lake.'],
      highlights=[
          H('독일 축구 박물관', 'German Football Museum', '2015년 중앙역 맞은편에 문을 연 박물관으로, 월드컵 트로피와 독일 축구의 역사를 전시합니다.', 'The museum opened in 2015 opposite the main station, with World Cup trophies and the story of German football.', 'Deutsches Fußballmuseum', 120, 150, c='mon'),
          H('지그날 이두나 파크', 'Signal Iduna Park', '보루시아 도르트문트의 홈구장으로 독일에서 가장 큰 경기장이며, 거대한 남쪽 스탠드 ‘노란 벽’이 유명합니다. 경기장 투어와 구단 박물관이 있습니다.', 'Borussia Dortmund’s home and Germany’s largest stadium, famous for the Yellow Wall of its south stand, with stadium tours and the club museum.', 'Signal Iduna Park', 90, 120, b='rec', n='경기 날엔 투어가 없습니다.|No tours on match days.'),
          H('도르트문더 U', 'Dortmunder U', '지붕에 커다란 금빛 ‘U’가 선 옛 양조장 건물로, 미술관과 문화 공간이 들어 있습니다.', 'A former brewery crowned by a giant golden “U”, now housing an art museum and creative spaces.', 'Dortmunder U', 60, 90, c='mon'),
          H('베스트팔렌 공원과 플로리안 탑', 'Westfalenpark & Florianturm', '장미 정원이 있는 큰 공원으로, 텔레비전 탑 플로리안 탑 전망대에 오릅니다.', 'A large park with a rose garden and the Florianturm TV tower and its viewing platform.', 'Westfalenpark Dortmund', 90, 120),
          H('촐레른 탄광 박물관', 'Zollern Colliery', '아르누보 양식의 기계실로 유명한 옛 탄광 산업 박물관입니다.', 'An industrial museum in a former colliery, famous for its Art Nouveau machine hall.', 'Zeche Zollern', 90, 120, c='mon'),
          H('피닉스 호수', 'Phoenix-See', '옛 제철소 자리에 만든 호수로, 호숫가 산책길과 카페가 있습니다.', 'A lake created on the site of a former steelworks, with lakeside paths and cafés.', 'Phoenix-See Dortmund', 45, 90, b='no', n=FREE),
      ],
      hubs="    air: [['Dortmund (DTM)', '도르트문트 공항 (DTM)'], ['Düsseldorf (DUS)', '뒤셀도르프 공항 (DUS)', '뒤셀도르프|Düsseldorf']],\n    rail: [['Dortmund Hbf', '도르트문트 중앙역']],\n",
      itinerary=[1, 3, 2, 4, 6, 5],
      season='분데스리가는 8월~5월에 열립니다. 경기 날엔 시내와 교통이 붐빕니다.|The Bundesliga runs from August to May; match days crowd the city and transport.',
      stay=[('중앙역 주변', 'Around the main station', 'Dortmund Hbf', FIRST, '축구 박물관과 도르트문더 U가 걸어서 닿고 경기장행 전철이 다닙니다.|The football museum and the U on foot, with trains to the stadium.')],
      routes=[R('cologne', 'dortmund', 'train', 75)],
      transit=dict(modes=['walk', 'metro', 'tram', 'train'], ko='슈타트반과 S-Bahn이 경기장·공원과 시내를 잇습니다.', en='The Stadtbahn and S-Bahn link the stadium, parks and centre.')),
    C(id='munster', group_title=NRW, after='dortmund', ko='뮌스터', en='Münster', native='Münster', lat=51.9607, lng=7.6261,
      blurb=['자전거가 자동차보다 많다는 대학 도시로, 1648년 30년 전쟁을 끝낸 베스트팔렌 평화 조약이 시청에서 맺어졌습니다. 아케이드가 이어진 박공 집 거리와 호수가 있습니다.',
             'A university city said to have more bicycles than cars, where the Peace of Westphalia ending the Thirty Years’ War was signed in the town hall in 1648; gabled houses with arcades line its main street, and there is a lake.'],
      highlights=[
          H('프린치팔마르크트와 평화의 방', 'Prinzipalmarkt & Hall of Peace', '아케이드가 이어진 박공 집 거리로, 고딕 시청의 평화의 방에서 1648년 베스트팔렌 평화 조약이 맺어졌습니다.', 'The arcaded street of gabled houses; in the Gothic town hall’s Hall of Peace the Peace of Westphalia was signed in 1648.', 'Historisches Rathaus Münster', 45, 60),
          H('성 파울루스 대성당', 'St Paulus Cathedral', '1540년의 천문 시계가 있는 대성당으로, 정오에 시계 인형이 움직입니다.', 'The cathedral with an astronomical clock of 1540, whose figures move at noon.', 'St.-Paulus-Dom Münster', 30, 45, b='no', n=FREE),
          H('성 람베르티 교회', 'St Lamberti Church', '탑에 16세기 재세례파 지도자들의 시신을 걸었던 쇠창살 우리 세 개가 지금도 매달려 있습니다.', 'Three iron cages still hang from the tower, where the bodies of 16th-century Anabaptist leaders were displayed.', 'St. Lamberti Münster', 15, 20, b='no', n=FREE),
          H('LWL 미술 문화 박물관', 'LWL Museum of Art and Culture', '중세부터 현대까지 베스트팔렌의 미술을 전시하는 박물관입니다.', 'Westphalian art from the Middle Ages to the present.', 'LWL-Museum für Kunst und Kultur', 90, 120, c='mon'),
          H('피카소 미술관', 'Kunstmuseum Pablo Picasso', '피카소의 판화를 중심으로 모은 미술관입니다.', 'A museum built around Picasso’s prints.', 'Kunstmuseum Pablo Picasso Münster', 60, 90, c='mon'),
          H('아 호수와 프로메나데', 'Aasee & Promenade', '시내 옆 호수와, 옛 성벽 자리를 따라 구시가를 한 바퀴 도는 자전거·산책길입니다.', 'The lake beside the centre and the Promenade, a cycle and footpath ring on the line of the old walls.', 'Aasee Münster', 45, 90, b='no', n=FREE),
      ],
      hubs="    air: [['Münster Osnabrück (FMO)', '뮌스터 오스나브뤼크 공항 (FMO)'], ['Düsseldorf (DUS)', '뒤셀도르프 공항 (DUS)', '뒤셀도르프|Düsseldorf']],\n    rail: [['Münster (Westf) Hbf', '뮌스터 중앙역']],\n",
      itinerary=[1, 2, 3, 4, 5, 6],
      season='봄~가을에 자전거를 빌려 프로메나데를 도는 것이 좋습니다.|Spring to autumn, to hire a bike and ride the Promenade.',
      stay=[('구시가', 'Old town', 'Prinzipalmarkt Münster', FIRST, '대성당과 프린치팔마르크트가 걸어서 닿습니다.|The cathedral and Prinzipalmarkt on foot.')],
      routes=[R('dortmund', 'munster', 'train', 35), R('cologne', 'munster', 'train', 110)],
      transit=dict(modes=['walk', 'bike', 'bus'], ko='구시가는 걷거나 자전거를 타고, 시내버스가 다닙니다.', en='Walk or cycle; city buses run too.')),
    # —— Hesse ——
    C(id='darmstadt', group_title=HE, after='frankfurt', ko='다름슈타트', en='Darmstadt', native='Darmstadt', lat=49.8728, lng=8.6512,
      blurb=['20세기 초 예술가 마을 마틸덴회에가 유네스코 세계유산인 도시로, 결혼 기념탑과 러시아 예배당이 언덕 위에 있습니다. 근교 메셀 화석 산지도 세계유산입니다.',
             'A city whose early-20th-century artists’ colony on the Mathildenhöhe is a UNESCO World Heritage Site, with the Wedding Tower and a Russian chapel on the hill; the nearby Messel Pit fossil site is World Heritage too.'],
      highlights=[
          H('마틸덴회에', 'Mathildenhöhe', '1899년부터 예술가들이 모여 살며 지은 아르누보 건물들로, 1908년 결혼 기념탑과 전시관이 있습니다. 유네스코 세계유산입니다.', 'The Art Nouveau buildings of the artists’ colony founded in 1899, with the Wedding Tower of 1908 and exhibition halls; a UNESCO World Heritage Site.', 'Mathildenhöhe Darmstadt', 60, 90),
          H('러시아 예배당', 'Russian Chapel', '마틸덴회에의 금빛 양파 돔 정교회 예배당으로, 마지막 러시아 황제를 위해 지었습니다.', 'The gold-domed Orthodox chapel on the Mathildenhöhe, built for the last Russian tsar.', 'Russische Kapelle Darmstadt', 15, 20),
          H('헤센 주립 박물관', 'Hessisches Landesmuseum', '미술과 자연사를 함께 전시하는 박물관으로, 메셀 화석 산지의 화석도 있습니다.', 'A museum of art and natural history, including fossils from the Messel Pit.', 'Hessisches Landesmuseum Darmstadt', 90, 120, c='mon'),
          H('발트슈피랄레', 'Waldspirale', '훈데르트바서가 설계한 나선형 아파트(2000년)로, 밖에서 둘러봅니다.', 'Hundertwasser’s spiralling apartment block of 2000, seen from outside.', 'Waldspirale Darmstadt', 15, 20, b='no', n=FREE),
          H('메셀 화석 산지', 'Messel Pit', '약 4,800만 년 전 동식물 화석이 잘 남은 옛 채굴장으로, 방문자 센터에서 전시를 보고 투어로 구덩이를 내려다봅니다. 유네스코 세계유산입니다.', 'A former quarry with superbly preserved fossils of plants and animals some 48 million years old; see the visitor centre and join a tour to the pit edge; a UNESCO World Heritage Site.', 'Grube Messel Besucherzentrum', 120, 180, group=DAY),
      ],
      hubs=f"    air: [{FRA}],\n    rail: [['Darmstadt Hbf', '다름슈타트 중앙역']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['메셀 화석 산지|Messel Pit', 5]]},
      season='봄~가을이 마틸덴회에 정원을 걷기 좋습니다.|Spring to autumn for the Mathildenhöhe gardens.',
      stay=[('시내 중심', 'City centre', 'Luisenplatz Darmstadt', FIRST, '박물관이 가깝고 마틸덴회에까지 걸어서 약 20분입니다.|Near the museum, about 20 min on foot to the Mathildenhöhe.')],
      routes=[R('frankfurt', 'darmstadt', 'train', 20)],
      transit=dict(modes=['walk', 'tram', 'bus'], ko='시내는 걷거나 트램을 탑니다.', en='Walk or take the tram.'),
      daytrips=[day('frankfurt', 'darmstadt', '예술가 마을 마틸덴회에와 결혼 기념탑, 러시아 예배당을 봅니다.|The Mathildenhöhe artists’ colony, its Wedding Tower and the Russian Chapel.')]),
    C(id='marburg', group_title=HE, after='rudesheim', ko='마르부르크', en='Marburg', native='Marburg', lat=50.8019, lng=8.7667,
      blurb=['언덕 위 성 아래로 목조 가옥이 층층이 이어진 대학 도시로, 1527년 세운 대학은 지금도 운영하는 가장 오래된 개신교 대학입니다. 그림 형제가 이곳에서 공부했습니다.',
             'A university town of half-timbered houses stacked below a hilltop castle; its university, founded in 1527, is the oldest Protestant university still running, and the Brothers Grimm studied here.'],
      highlights=[
          H('성 엘리자베트 교회', 'St Elizabeth’s Church', '1235~83년에 지은 독일에서 가장 오래된 순수 고딕 교회로, 성녀 엘리자베트의 황금 성물함이 있습니다.', 'Germany’s oldest purely Gothic church, built in 1235–83, with the golden shrine of St Elizabeth.', 'Elisabethkirche Marburg', 30, 45),
          H('방백의 성', 'Landgraves’ Castle', '시내 꼭대기의 성으로, 고딕 기사의 홀과 박물관이 있고 성벽에서 도시가 내려다보입니다.', 'The castle at the top of the town, with a Gothic knights’ hall and museum and views from its walls.', 'Landgrafenschloss Marburg', 60, 90, c='mon'),
          H('윗마을과 마르크트 광장', 'Upper Town & Market Square', '가파른 계단 골목과 목조 가옥이 이어진 윗마을로, 엘리베이터로도 오를 수 있습니다.', 'The upper town of steep stepped lanes and half-timbered houses, also reached by public lifts.', 'Marktplatz Marburg', 45, 60, b='no', n=FREE),
          H('옛 대학 건물', 'Old University', '1527년 세운 필립스 대학의 신고딕 옛 건물로, 강가 아래쪽 구시가에 있습니다.', 'The neo-Gothic old building of the Philipps University, founded in 1527.', 'Alte Universität Marburg', 15, 20, b='no', n=FREE),
          H('그림 동화 산책길', 'Grimm-Dich-Pfad', '그림 형제의 동화 장면을 시내 곳곳에 설치한 산책길입니다.', 'A trail of installations of Grimm fairy-tale scenes around the town.', 'Grimm-Dich-Pfad Marburg', 45, 60, b='no', n=FREE),
      ],
      hubs=f"    air: [{FRA}],\n    rail: [['Marburg (Lahn)', '마르부르크역']],\n",
      itinerary=[1, 3, 2, 5, 4],
      season='봄~가을이 언덕 골목을 걷기 좋습니다.|Spring to autumn for the hillside lanes.',
      stay=[('윗마을', 'Upper Town', 'Marktplatz Marburg', FIRST, '광장과 성이 가깝고 식당이 모여 있습니다.|Near the square and castle, with plenty of restaurants.')],
      routes=[R('frankfurt', 'marburg', 'train', 60)],
      transit=dict(modes=['walk', 'bus'], ko='걸어서 다니며, 윗마을엔 공공 엘리베이터가 있습니다.', en='Walk; public lifts climb to the upper town.'),
      daytrips=[day('frankfurt', 'marburg', '성 엘리자베트 교회와 언덕 위 성, 목조 가옥 골목을 걷습니다.|St Elizabeth’s Church, the hilltop castle and the half-timbered lanes.')]),
    C(id='kassel', group_title=HE, after='marburg', ko='카셀', en='Kassel', native='Kassel', lat=51.3127, lng=9.4797,
      blurb=['언덕 비탈의 거대한 바로크 정원 빌헬름스회에 산상 공원이 유네스코 세계유산인 도시로, 꼭대기 헤라클레스 상에서 계단식 폭포가 흘러내립니다. 그림 형제가 동화를 모은 곳이며 5년마다 현대 미술전 도쿠멘타가 열립니다.',
             'A city whose huge hillside Baroque park, the Bergpark Wilhelmshöhe, is a UNESCO World Heritage Site, with cascades flowing down from the Hercules monument; the Brothers Grimm collected their tales here, and the documenta art show is held every five years.'],
      highlights=[
          H('빌헬름스회에 산상 공원', 'Bergpark Wilhelmshöhe', '언덕 꼭대기 헤라클레스 상부터 궁전까지 이어진 거대한 정원으로, 물이 계단식 폭포와 분수로 흘러내리는 물 쇼가 열립니다. 유네스코 세계유산입니다.', 'A vast park running down from the Hercules monument to the palace, where the water features cascade down the hill; a UNESCO World Heritage Site.', 'Herkules Kassel', 180, 240, b='no', n='공원은 무료입니다. 물 쇼는 5월~10월 초 수·일요일과 공휴일 오후에 열립니다.|The park is free; the water features run on Wednesday, Sunday and holiday afternoons from May to early October.'),
          H('빌헬름스회에 궁전', 'Wilhelmshöhe Palace', '산상 공원 아래 궁전으로, 렘브란트 등 옛 거장 미술관이 있습니다.', 'The palace at the foot of the park, home to an Old Masters gallery with Rembrandts.', 'Schloss Wilhelmshöhe', 90, 120, c='mon'),
          H('그림 월드', 'Grimmwelt', '그림 형제의 동화와 사전 작업을 체험형 전시로 보여 주는 박물관입니다.', 'A hands-on museum of the Brothers Grimm, their tales and their dictionary.', 'Grimmwelt Kassel', 90, 120, c='mon'),
          H('프리데리치아눔', 'Fridericianum', '18세기에 지은 유럽에서 손꼽히게 오래된 공공 박물관 건물로, 도쿠멘타의 주 전시장입니다.', 'One of Europe’s oldest public museum buildings, from the 18th century, and the main venue of documenta.', 'Fridericianum Kassel', 45, 90, c='mon'),
          H('카를스아우에 공원과 오랑주리', 'Karlsaue & Orangery', '풀다강 가의 바로크 공원과 오랑주리 건물입니다.', 'The Baroque park and Orangery on the River Fulda.', 'Karlsaue Kassel', 45, 90, b='no', n=FREE),
      ],
      hubs=f"    air: [{FRA}],\n    rail: [['Kassel-Wilhelmshöhe', '카셀 빌헬름스회에역', 'ICE 정차역|ICE station'], ['Kassel Hbf', '카셀 중앙역']],\n",
      itinerary=[1, 2, 3, 4, 5],
      season='물 쇼가 열리는 5월~10월 초가 가장 좋습니다. 도쿠멘타는 5년마다 여름에 열립니다.|May to early October, when the water features run; documenta comes round every five years in summer.',
      stay=[('빌헬름스회에역 주변', 'Around Wilhelmshöhe station', 'Kassel-Wilhelmshöhe', FIRST, 'ICE역이라 이동이 편하고 산상 공원까지 트램으로 갑니다.|The ICE station, with trams up to the Bergpark.')],
      routes=[R('frankfurt', 'kassel', 'train', 90), R('hannover', 'kassel', 'train', 60)],
      transit=dict(modes=['walk', 'tram', 'bus'], ko='트램이 시내와 빌헬름스회에를 잇습니다.', en='Trams link the centre and Wilhelmshöhe.')),
    # —— Rhineland-Palatinate ——
    C(id='mainz', group_title='라인란트팔츠', after='trier', ko='마인츠', en='Mainz', native='Mainz', lat=49.9929, lng=8.2473,
      blurb=['라인강 가의 라인란트팔츠주 주도로, 인쇄술을 발명한 구텐베르크의 도시입니다. 천 년 넘은 대성당과 샤갈의 푸른 창이 있고, 근교 슈파이어엔 유네스코 세계유산 대성당이 있습니다.',
             'The capital of Rhineland-Palatinate on the Rhine and Gutenberg’s city, with a cathedral over a thousand years old and Chagall’s blue windows; nearby Speyer has a UNESCO-listed cathedral.'],
      highlights=[
          H('마인츠 대성당', 'Mainz Cathedral', '천 년 넘은 붉은 사암 대성당으로, 여섯 개의 탑이 구시가를 내려다봅니다.', 'A red-sandstone cathedral over a thousand years old, its six towers rising over the old town.', 'Mainzer Dom', 30, 45, b='no', n=FREE),
          H('구텐베르크 박물관', 'Gutenberg Museum', '구텐베르크 성서와 옛 인쇄기를 전시하는 인쇄 박물관입니다.', 'The museum of printing, with Gutenberg Bibles and early presses.', 'Gutenberg-Museum Mainz', 60, 90, c='mon', n='새 건물 공사 동안 임시 전시장에서 열고 있으니 위치를 확인하세요.|Open at a temporary venue while the new building goes up; check the location.'),
          H('성 슈테판 교회', 'St Stephan’s Church', '마르크 샤갈이 만든 푸른 스테인드글라스 창으로 유명한 언덕 위 교회입니다.', 'The hilltop church famous for Marc Chagall’s blue stained-glass windows.', 'St. Stephan Mainz', 20, 30),
          H('구시가와 키르슈가르텐', 'Old town & Kirschgarten', '목조 가옥이 모인 키르슈가르텐 광장과 와인 주점이 있는 구시가입니다.', 'The old town around the half-timbered Kirschgarten square, with wine taverns.', 'Kirschgarten Mainz', 30, 45, b='no', n=FREE),
          H('슈파이어 대성당', 'Speyer Cathedral', '남아 있는 가장 큰 로마네스크 교회로, 지하에 황제들의 무덤이 있습니다. 유네스코 세계유산입니다.', 'The largest surviving Romanesque church, with the tombs of emperors in its crypt; a UNESCO World Heritage Site.', 'Dom zu Speyer', 45, 60, group=DAY, n='마인츠에서 기차로 약 1시간 5분입니다.|About 1 hr 5 by train from Mainz.'),
          H('슈파이어 기술 박물관', 'Technik Museum Speyer', '우주 왕복선 부란과 비행기, 기차를 전시하는 큰 기술 박물관입니다.', 'A large technology museum with the Buran space shuttle, aircraft and trains.', 'Technik Museum Speyer', 180, 240, group=DAY),
      ],
      hubs=f"    air: [{FRA}],\n    rail: [['Mainz Hbf', '마인츠 중앙역'], ['Speyer Hbf', '슈파이어 중앙역']],\n",
      itinerary={'days': [['', 1, 4, 2, 3]], 'trips': [['슈파이어|Speyer', 5, 6]]},
      season='봄~가을이 강변과 와인 주점에 좋고, 겨울엔 카니발(2월 무렵)이 성대합니다.|Spring to autumn for the river and wine taverns; carnival (around February) is huge.',
      stay=[('구시가', 'Old town', 'Mainzer Dom', FIRST, '대성당과 와인 주점이 가깝고 역까지 걸어서 갑니다.|Near the cathedral and wine taverns, with the station on foot.')],
      routes=[R('frankfurt', 'mainz', 'train', 40)],
      transit=dict(modes=['walk', 'tram', 'bus'], ko='구시가는 걸어서 다닙니다.', en='Walk the old town.'),
      daytrips=[day('frankfurt', 'mainz', '구텐베르크의 도시에서 대성당과 샤갈의 창을 보고 구시가 와인 주점에 들릅니다.|Gutenberg’s city: the cathedral, Chagall’s windows and an old-town wine tavern.')]),
    # —— Saarland ——
    C(id='saarbrucken', group_title=None, after='lindau', ko='자르브뤼켄', en='Saarbrücken', native='Saarbrücken', lat=49.2333, lng=6.9967,
      blurb=['프랑스 국경 가까운 자를란트주의 주도로, 바로크 교회와 카페 광장이 있습니다. 근교에는 유네스코 세계유산 푈클링겐 제철소와, 자르강이 크게 굽이치는 자르슐라이페가 있습니다.',
             'The capital of Saarland near the French border, with a Baroque church and a café-lined square; nearby are the UNESCO-listed Völklingen Ironworks and the Saar loop, where the river makes a great bend.'],
      highlights=[
          H('루트비히 교회', 'Ludwigskirche', '1762~75년에 지은 바로크 개신교회로, 같은 양식의 건물들이 광장을 둘러쌉니다.', 'A Baroque Protestant church of 1762–75, set on a square of matching buildings.', 'Ludwigskirche Saarbrücken', 20, 30, b='no', n=FREE),
          H('장크트 요하너 마르크트', 'St. Johanner Markt', '분수와 카페, 주점이 모인 구시가의 중심 광장입니다.', 'The old town’s main square of fountains, cafés and bars.', 'St. Johanner Markt Saarbrücken', 30, 60, b='no', n=FREE),
          H('자르브뤼켄 성과 자르 역사 박물관', 'Saarbrücken Castle & Historical Museum Saar', '성 아래 옛 지하 요새 통로를 박물관으로 둘러봅니다.', 'The castle, with the old underground casemates seen as part of the history museum.', 'Historisches Museum Saar', 60, 90, c='mon'),
          H('푈클링겐 제철소', 'Völklingen Ironworks', '산업 시대 제철소가 통째로 남은 곳으로, 용광로 위를 걸으며 둘러봅니다. 유네스코 세계유산입니다.', 'A complete ironworks of the industrial age, explored on walkways up the blast furnaces; a UNESCO World Heritage Site.', 'Weltkulturerbe Völklinger Hütte', 150, 180, group=DAY, n='자르브뤼켄에서 기차로 약 10분입니다.|About 10 min by train from Saarbrücken.'),
          H('자르슐라이페와 나무 꼭대기 길', 'Saar loop & treetop walk', '자르강이 크게 굽이치는 곳으로, 클로에프 전망대와 나무 꼭대기 산책로에서 내려다봅니다.', 'The great bend of the Saar, seen from the Cloef viewpoint and the treetop walk.', 'Baumwipfelpfad Saarschleife', 120, 180, group=DAY),
      ],
      hubs="    air: [['Saarbrücken (SCN)', '자르브뤼켄 공항 (SCN)', '운항편 적음|few flights'], FRA(), LUX()],\n    rail: [['Saarbrücken Hbf', '자르브뤼켄 중앙역']],\n",
      itinerary={'days': [['', 2, 1, 3]], 'trips': [['푈클링겐 제철소|Völklingen Ironworks', 4], ['자르슐라이페|Saar loop', 5]]},
      season='봄~가을이 자르슐라이페 전망과 산책에 좋습니다.|Spring to autumn for the Saar loop views and walks.',
      stay=[('장크트 요하너 마르크트 주변', 'Around St. Johanner Markt', 'St. Johanner Markt Saarbrücken', FIRST, '광장 식당과 역이 걸어서 닿습니다.|Restaurants and the station on foot.')],
      routes=[R('frankfurt', 'saarbrucken', 'train', 120, '직행 ICE 기준|direct ICE'), R('trier', 'saarbrucken', 'train', 70), R('paris', 'saarbrucken', 'train', 110)],
      transit=dict(modes=['walk', 'tram', 'bus'], ko='시내는 걷거나 트램(자르반)을 탑니다.', en='Walk or take the Saarbahn tram.')),
]


if __name__ == '__main__':
    run(CITIES)
    new_group('자를란트', 'Saarland', ['saarbrucken'], '브란덴부르크')
