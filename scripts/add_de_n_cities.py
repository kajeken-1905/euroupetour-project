#!/usr/bin/env python3
"""Germany new towns (2026-11-22, six-country review): Quedlinburg & Harz, Schwerin, Konstanz, Eisenach.
Mainau stays a Lindau day trip (not repeated in Konstanz). Facts from English/German Wikipedia: Quedlinburg UNESCO 1994,
castle, church and old town with ~2,100 timber houses; abbey founded 936 by St Matilda as Henry the Fowler's memorial,
Stiftskirche St Servatius; Museum Lyonel Feininger founded 1986; Bode Gorge 10 km Treseburg–Thale, up to 280 m deep;
Hexentanzplatz plateau 454 m above the gorge; Wernigerode Castle first built 1110–1120, present building late 19th c.,
Neuschwanstein-like; Brocken 1,141 m, highest in the Harz and northern Germany, fog up to 300 days; HSB metre gauge
~140 km linking Wernigerode, Nordhausen, Quedlinburg, most popular to the Brocken. Schwerin capital of Mecklenburg-
Vorpommern, least populous state capital, on Lake Schwerin; castle on an island, 19th-c. historicist, seat of the state
parliament; cathedral Brick Gothic, foundation stone 1172, 76 years' construction; Staatliches Museum 1882 by Frederick
Francis II, opposite the castle; Pfaffenteich 12.3 ha pond; Schelfstadt (Neustadt since 1349); Ludwigslust Palace seat of
government 1765–1837. Konstanz university city at the western end of Upper Lake Constance, diocese >1,200 years; Minster
proto-cathedral; Imperia 9 m, 18 t, rotates every 4 minutes, Peter Lenk, 1993, Council of Constance 1414–1418;
Niederburg medieval lanes between the Seerhein and the Minster; Reichenau 4.3 km2, causeway 1838; Meersburg Castle one
of the oldest inhabited castles in Germany. Eisenach western Thuringia; Wartburg UNESCO 1999, St Elisabeth, Luther
translated the New Testament, inspiration for Neuschwanstein; Bach House first Bach museum 1907, ~250 exhibits;
Lutherhaus among the oldest half-timbered houses in Thuringia, Luther 1498–1501, museum since 1956; Georgenkirche, Luther
preached, Bach baptised; Automobile Welt 2005 on the old car-factory site; Drachenschlucht gorge in the Thuringian
Forest. Transit (web search): Hamburg–Schwerin ~1 h 20; Leipzig–Quedlinburg ~2 h with a change; Weimar–Eisenach
~45 min (fastest), Erfurt–Eisenach ~25 min; Zurich–Konstanz ~1 h 15. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

FREE = '무료입니다.|Free.'
COMMON = dict(hubs_file='hubs-central.ts', hubs_before='  lindau: {\n', itin_file='itinerary-central.ts',
              itin_before='  lindau: {', visit_file='visit-benelux.ts',
              visit_after=r"^  '(?:lindau|quedlinburg|schwerin|konstanz|eisenach)-h\d+': v\(.*\),\n",
              stay_before='  lindau: [', transit_before='  lindau: {\n', places=None, daytrips=[],
              apps="      ta('db'),\n")
LAST = r"^  r\('bregenz', 'lindau', .*\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


def R(a, b, mode, m, n=None):
    extra = f", {{ n: '{n}' }}" if n else ''
    return ('routes-central.ts', LAST, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


CITIES = [
    dict(COMMON, country='de', id='quedlinburg', after='leipzig', ko='크베들린부르크·하르츠', en='Quedlinburg & Harz', native='Quedlinburg', lat=51.7917, lng=11.1472,
         blurb=['하르츠 산지 북쪽의 중세 도시로, 10~11세기 오토 왕조 때 번성했습니다. 언덕 위 성과 수도원 성당, 목조 가옥 약 2,100채가 남은 구시가가 함께 유네스코 세계유산입니다. 하르츠 협궤 증기 열차로 북독일 최고봉 브로켄산에 오르고, 보데 협곡과 베르니게로데 성이 가깝습니다.',
                'A medieval town north of the Harz that flourished under the Ottonian kings in the 10th and 11th centuries. Its hilltop castle, abbey church and old town of some 2,100 timber-framed houses are a UNESCO World Heritage Site. Steam trains of the Harz narrow-gauge railway climb the Brocken, northern Germany’s highest peak, and the Bode Gorge and Wernigerode Castle are close by.'],
         highlights=[
             H('성 언덕과 성 세르바티우스 수도원 성당', 'Castle Hill & St Servatius', '936년 하인리히 1세의 왕비 마틸다가 남편을 기리려 세운 여성 수도원의 성당과 성으로, 언덕 위에서 구시가 지붕이 내려다보입니다.', 'The church and castle of the abbey founded in 936 by Queen Matilda in memory of King Henry the Fowler, on a hill above the old-town roofs.', 'Stiftskirche St. Servatius Quedlinburg', 60, 90),
             H('구시가와 마르크트 광장', 'Old town & Market Square', '목조 가옥 약 2,100채가 남은 구시가로, 시청이 선 마르크트 광장에서 골목이 사방으로 뻗습니다.', 'The old town of some 2,100 timber-framed houses, with lanes spreading out from the Market Square and town hall.', 'Marktplatz Quedlinburg', 60, 90, b='no', n=FREE),
             H('리오넬 파이닝거 미술관', 'Museum Lyonel Feininger', '1986년 문을 연 미술관으로, 바우하우스 화가 리오넬 파이닝거의 작품을 모았습니다. 성 언덕 아래에 있습니다.', 'A museum opened in 1986 devoted to the Bauhaus painter Lyonel Feininger, at the foot of Castle Hill.', 'Museum Lyonel Feininger Quedlinburg', 45, 60),
             H('보데 협곡과 헥센탄츠플라츠', 'Bode Gorge & Hexentanzplatz', '트레제부르크에서 탈레까지 이어지는 10km 화강암 협곡으로, 깊이가 280m에 이릅니다. 협곡 위 454m 고원 헥센탄츠플라츠(마녀의 춤터)에 케이블카가 오릅니다.', 'A 10 km granite ravine from Treseburg to Thale, up to 280 m deep; a cable car climbs to the Hexentanzplatz (Witches’ Dance Floor) plateau 454 m above it.', 'Hexentanzplatz Thale', 180, 300, n='크베들린부르크에서 탈레까지 기차로 약 15분입니다.|About 15 min by train from Quedlinburg to Thale.'),
             H('베르니게로데 성', 'Wernigerode Castle', '1110~1120년 처음 지은 성을 19세기 말 노이슈반슈타인과 비슷한 모습으로 다시 지었습니다. 목조 가옥 마을 베르니게로데 위 언덕에 있습니다.', 'First built in 1110–1120 and rebuilt in the late 19th century in a style like Neuschwanstein, on a hill above the timber-framed town of Wernigerode.', 'Schloss Wernigerode', 90, 120),
             H('브로켄산과 하르츠 협궤 열차', 'Brocken & Harz narrow-gauge railway', '하르츠와 북독일에서 가장 높은 1,141m 산으로, 1년에 300일 가까이 안개에 싸입니다. 베르니게로데에서 증기 기관차가 끄는 협궤 열차로 정상까지 오릅니다.', 'At 1,141 m the highest peak in the Harz and northern Germany, wrapped in fog up to 300 days a year; steam-hauled narrow-gauge trains run to the top from Wernigerode.', 'Brocken', 300, 420, b='rec', n='협궤 열차는 성수기에 붐벼 미리 예약하는 것이 좋습니다.|The narrow-gauge trains get busy in high season; booking ahead is a good idea.'),
         ],
         hubs="    air: [['Leipzig/Halle (LEJ)', '라이프치히/할레 공항 (LEJ)', '라이프치히|Leipzig'], ['Berlin Brandenburg (BER)', '베를린 브란덴부르크 공항 (BER)', '베를린|Berlin']],\n    rail: [['Quedlinburg', '크베들린부르크역'], ['Wernigerode', '베르니게로데역', '브로켄행 협궤 열차|narrow-gauge trains to the Brocken']],\n",
         itinerary={'days': [['', 1, 2, 3]], 'trips': [['보데 협곡|Bode Gorge', 4], ['베르니게로데와 브로켄산|Wernigerode & Brocken', 5, 6]]},
         season='하이킹과 협궤 열차가 좋은 5~10월이 알맞습니다. 12월엔 목조 가옥 마당에서 크리스마스 마켓이 열립니다.|May–October for hiking and the narrow-gauge railway; December brings a Christmas market in the timber-framed courtyards.',
         stay=[('구시가에서 묵기', 'In the old town', 'Quedlinburg Altstadt', '처음이라면|First visit', '목조 가옥 호텔이 많고 성 언덕과 역이 걸어서 닿습니다.|Plenty of timber-framed hotels, with Castle Hill and the station on foot.'),
               ('베르니게로데', 'Wernigerode', 'Wernigerode', '브로켄 거점|Base for the Brocken', '브로켄행 협궤 열차가 출발하는 목조 가옥 마을입니다.|The timber-framed town where the Brocken trains start.')],
         routes=[R('leipzig', 'quedlinburg', 'train', 120, '할레나 마그데부르크에서 환승|change at Halle or Magdeburg')],
         transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다닙니다. 탈레·베르니게로데는 기차로, 브로켄은 베르니게로데에서 협궤 열차로 갑니다.', en='Walk the old town; take trains to Thale and Wernigerode, and the narrow-gauge railway from Wernigerode to the Brocken.')),
    dict(COMMON, country='de', id='schwerin', after='lubeck', ko='슈베린', en='Schwerin', native='Schwerin', lat=53.6294, lng=11.4141,
         blurb=['메클렌부르크포어포메른주의 주도로, 독일 주도 가운데 가장 작은 도시입니다. 슈베린 호수와 열한 개의 작은 호수에 둘러싸여 있고, 호수 섬 위에 금빛 탑들이 솟은 슈베린 성이 도시의 상징입니다. 벽돌 고딕 대성당과 미술관이 구시가에 모여 있어 함부르크에서 당일로 다녀옵니다.',
                'The capital of Mecklenburg-Vorpommern and the smallest of Germany’s state capitals, ringed by Lake Schwerin and eleven smaller lakes. Its symbol is Schwerin Castle, its gilded towers rising from an island in the lake, and the Brick Gothic cathedral and art museum are close by in the old town; an easy day trip from Hamburg.'],
         highlights=[
             H('슈베린 성', 'Schwerin Castle', '호수 섬 위에 19세기 역사주의 양식으로 다시 지은 성으로, 수백 년 동안 메클렌부르크 공작의 거처였고 지금은 주 의회가 씁니다. 화려한 방들은 박물관으로 엽니다.', 'The castle on an island in the lake, rebuilt in 19th-century historicist style; for centuries the seat of the dukes of Mecklenburg, it now houses the state parliament, and its state rooms are a museum.', 'Schweriner Schloss', 90, 150),
             H('슈베린 대성당', 'Schwerin Cathedral', '1172년 주춧돌을 놓아 76년 만에 완성한 성당으로, 뤼베크 성모 마리아 성당과 함께 초기 대형 벽돌 고딕 건물입니다. 탑에 올라 시내와 호수를 봅니다.', 'Its foundation stone laid in 1172 and finished 76 years later, one of the earliest large Brick Gothic churches, alongside St Mary’s in Lübeck; climb the tower for views of the town and lakes.', 'Schweriner Dom', 30, 45, b='no'),
             H('슈베린 주립 미술관', 'Staatliches Museum Schwerin', '1882년 프리드리히 프란츠 2세 대공이 성 맞은편에 세운 미술관입니다.', 'The art museum founded in 1882 by Grand Duke Frederick Francis II, opposite the castle.', 'Staatliches Museum Schwerin', 60, 90),
             H('파펜타이히 호수', 'Pfaffenteich', '구시가 한가운데의 12.3ha 연못으로, 둘레를 따라 산책로가 이어집니다.', 'A 12.3-hectare pond in the middle of town, ringed by a promenade.', 'Pfaffenteich Schwerin', 20, 30, b='no', n=FREE),
             H('셸프슈타트', 'Schelfstadt', '구시가 북쪽의 옛 동네로, 1349년부터 ‘새 도시’라 불렸습니다. 목조 가옥 골목과 셸프 교회가 있습니다.', 'The old quarter north of the centre, called the “new town” since 1349, with timber-framed lanes and the Schelfkirche.', 'Schelfstadt Schwerin', 30, 45, b='no', n=FREE),
             H('루트비히스루스트 궁전', 'Ludwigslust Palace', '사냥 별장을 다시 지은 메클렌부르크 공작의 궁전으로, 1765~1837년 정부가 이곳에 있었습니다. 넓은 정원이 함께 있습니다.', 'The Mecklenburg dukes’ palace, rebuilt from a hunting lodge, where the government sat from 1765 to 1837, with a large park.', 'Schloss Ludwigslust', 120, 180, n='슈베린에서 기차로 약 30분입니다.|About 30 min by train from Schwerin.'),
         ],
         hubs="    air: [['Hamburg (HAM)', '함부르크 공항 (HAM)', '함부르크|Hamburg']],\n    rail: [['Schwerin Hbf', '슈베린 중앙역']],\n",
         itinerary={'days': [['', 1, 2, 4, 5, 3]], 'trips': [['루트비히스루스트 궁전|Ludwigslust Palace', 6]]},
         season='성 정원과 호숫가 산책이 좋은 5~9월이 알맞습니다.|May–September, for the castle gardens and lakeside walks.',
         stay=[('구시가 (파펜타이히 주변)', 'Old town (around the Pfaffenteich)', 'Pfaffenteich Schwerin', '처음이라면|First visit', '역과 대성당, 성이 걸어서 닿습니다.|The station, cathedral and castle on foot.'),
               ('함부르크에서 다녀오기', 'Base in Hamburg', 'Hamburg', '거점에서 다녀오기|Day trip from a base', '함부르크에서 기차로 약 1시간 20분입니다.|About 1 h 20 by train from Hamburg.')],
         routes=[R('hamburg', 'schwerin', 'train', 80)],
         transit=dict(modes=['walk', 'tram', 'bus', 'train'], ko='역에서 구시가와 성까지 걸어서 갑니다. 트램과 버스도 있습니다.', en='Walk from the station to the old town and castle; trams and buses also run.')),
    dict(COMMON, country='de', id='konstanz', after='fussen', ko='콘스탄츠', en='Konstanz', native='Konstanz', lat=47.6603, lng=9.1758,
         blurb=['보덴호 서쪽 끝, 라인강이 호수를 빠져나가는 곳의 대학 도시로, 1,200년 넘게 주교 도시였습니다. 1414~1418년 콘스탄츠 공의회가 열린 곳이라 항구엔 이를 풍자한 회전 조각상 임페리아가 서 있습니다. 스위스와 붙어 있고, 유네스코 수도원 섬 라이헤나우와 꽃섬 마이나우, 호수 건너 메르스부르크로 다녀옵니다.',
                'A university city at the western end of Lake Constance, where the Rhine leaves the lake, and a bishop’s seat for more than 1,200 years. It hosted the Council of Constance in 1414–1418, satirised by the rotating Imperia statue at the harbour. Right on the Swiss border, it is the base for the monastic island of Reichenau, the flower island of Mainau and Meersburg across the lake.'],
         highlights=[
             H('콘스탄츠 대성당', 'Konstanz Minster', '1,200년 넘게 콘스탄츠 주교좌였던 옛 대성당으로, 구시가 언덕 위에 서 있습니다.', 'The former cathedral of the bishops of Konstanz, seat of the diocese for more than 1,200 years, on the hill of the old town.', 'Konstanzer Münster', 30, 45, b='no', n=FREE),
             H('항구와 임페리아', 'Harbour & Imperia', '항구 입구에 선 9m 콘크리트 조각상으로, 콘스탄츠 공의회(1414~1418)를 풍자해 교황과 황제를 손에 든 여인을 표현했습니다. 4분에 한 바퀴 돕니다.', 'The 9 m concrete statue at the harbour mouth, satirising the Council of Constance (1414–1418) with a woman holding pope and emperor in her hands; it turns once every four minutes.', 'Imperia Konstanz', 20, 30, b='no', n=FREE),
             H('니더부르크', 'Niederburg', '라인강과 대성당 사이의 가장 오래된 동네로, 중세 집들이 늘어선 좁고 구불구불한 골목이 이어집니다.', 'The oldest quarter, between the Rhine and the Minster, a tangle of narrow, winding lanes of medieval houses.', 'Niederburg Konstanz', 30, 45, b='no', n=FREE),
             H('라이헤나우섬', 'Reichenau Island', '콘스탄츠 서쪽 보덴호의 4.3km² 섬으로, 1838년 놓은 둑길로 이어집니다. 중세 수도원 성당들이 남은 유네스코 세계유산입니다.', 'A 4.3 km² island in the lake west of Konstanz, linked by an 1838 causeway, with medieval monastery churches; a UNESCO World Heritage Site.', 'Insel Reichenau', 180, 240),
             H('메르스부르크 성', 'Meersburg Castle', '호수 건너편 메르스부르크의 성으로, 독일에서 가장 오래된 거주 성 가운데 하나입니다. 콘스탄츠에서 카페리나 배로 건넙니다.', 'The castle in Meersburg across the lake, one of the oldest inhabited castles in Germany, reached from Konstanz by car ferry or boat.', 'Burg Meersburg', 120, 180),
         ],
         hubs="    air: [['Zürich (ZRH)', '취리히 공항 (ZRH)', '스위스 취리히|Zürich, Switzerland'], ['Friedrichshafen (FDH)', '프리드리히스하펜 공항 (FDH)', '프리드리히스하펜|Friedrichshafen']],\n    rail: [['Konstanz', '콘스탄츠역', '구시가와 항구 바로 앞|next to the old town and harbour']],\n    port: [['Konstanz Hafen', '콘스탄츠 항구', '보덴호 유람선|Lake Constance boats']],\n",
         itinerary={'days': [['', 2, 1, 3]], 'trips': [['라이헤나우섬|Reichenau', 4], ['메르스부르크|Meersburg', 5]]},
         season='호수 유람선이 다니는 4~10월이 알맞습니다.|April–October, when the lake boats run.',
         stay=[('구시가', 'Old town', 'Konstanz Altstadt', '처음이라면|First visit', '역과 항구, 대성당이 걸어서 닿습니다.|The station, harbour and Minster on foot.')],
         routes=[R('zurich', 'konstanz', 'train', 75)],
         transit=dict(modes=['walk', 'bus', 'train', 'ferry'], ko='구시가는 걸어서 다닙니다. 라이헤나우·마이나우는 버스로, 메르스부르크는 배로 갑니다.', en='Walk the old town; buses run to Reichenau and Mainau, and boats to Meersburg.')),
    dict(COMMON, country='de', id='eisenach', after='weimar', ko='아이제나흐', en='Eisenach', native='Eisenach', lat=50.9761, lng=10.3206,
         blurb=['튀링겐 서쪽의 도시로, 숲 언덕 위 바르트부르크성에서 루터가 신약 성경을 독일어로 옮겼습니다. 바흐가 태어난 도시라 바흐 하우스와 그가 세례를 받은 게오르크 교회가 있고, 루터가 학창 시절을 보낸 목조 가옥도 남아 있습니다.',
                'A town in western Thuringia where Luther translated the New Testament into German at the Wartburg on the wooded hill above. It is also Bach’s birthplace, with the Bach House and the church where he was baptised, and the timber-framed house where Luther lived as a schoolboy.'],
         highlights=[
             H('바르트부르크성', 'Wartburg', '시내를 내려다보는 410m 언덕 위 중세 성으로, 성 엘리자베트가 살았고 루터가 신약 성경을 독일어로 옮긴 곳입니다. 루트비히 2세가 노이슈반슈타인을 지을 때 본보기로 삼았습니다. 유네스코 세계유산입니다.', 'The medieval castle on a 410 m hill above the town, home of St Elisabeth and where Luther translated the New Testament into German; it inspired Ludwig II’s Neuschwanstein. A UNESCO World Heritage Site.', 'Wartburg Eisenach', 120, 180),
             H('바흐 하우스', 'Bach House', '1907년 문을 연 첫 바흐 박물관으로, 원본 유물 약 250점을 전시합니다.', 'The first Bach museum, opened in 1907, with around 250 original exhibits.', 'Bachhaus Eisenach', 60, 90),
             H('루터 하우스', 'Lutherhaus', '튀링겐에서 손꼽히게 오래된 목조 가옥으로, 루터가 1498~1501년 학창 시절 머물렀다고 전합니다. 1956년부터 박물관입니다.', 'One of the oldest timber-framed houses in Thuringia, where Luther is said to have lodged as a schoolboy in 1498–1501; a museum since 1956.', 'Lutherhaus Eisenach', 45, 60),
             H('게오르크 교회', 'St George’s Church', '마르크트 광장의 시 교회로, 루터가 설교했고 바흐가 세례를 받았습니다.', 'The town church on the Market Square, where Luther preached and Bach was baptised.', 'Georgenkirche Eisenach', 15, 20, b='no', n=FREE),
             H('아우토모빌레 벨트 아이제나흐', 'Automobile Welt Eisenach', '세계에서 손꼽히게 오래된 자동차 공장 자리에 2005년 문을 연 자동차 박물관입니다.', 'A car museum opened in 2005 on the site of one of the world’s oldest car factories.', 'Automobile Welt Eisenach', 60, 90),
             H('드라헨슐루흐트', 'Drachenschlucht', '튀링겐 숲 속의 좁은 협곡으로, 이끼 낀 바위 사이로 나무 판자 길을 걷습니다. 바르트부르크에서 걸어서 이어집니다.', 'A narrow gorge in the Thuringian Forest, walked on boardwalks between mossy rock walls; reachable on foot from the Wartburg.', 'Drachenschlucht Eisenach', 90, 150, b='no', n=FREE),
         ],
         hubs="    air: [['Erfurt-Weimar (ERF)', '에르푸르트-바이마르 공항 (ERF)', '에르푸르트|Erfurt'], FRA()],\n    rail: [['Eisenach', '아이제나흐역']],\n",
         itinerary={'days': [['바르트부르크|Wartburg', 1, 6], ['구시가|Old town', 4, 3, 2, 5]]},
         season='바르트부르크 언덕과 숲길이 좋은 5~10월이 알맞습니다.|May–October, for the Wartburg hill and the forest trails.',
         stay=[('구시가 (마르크트 광장 주변)', 'Old town (around the Market Square)', 'Markt Eisenach', '처음이라면|First visit', '박물관과 식당이 모여 있고, 바르트부르크행 버스가 다닙니다.|Museums and restaurants close by, with buses up to the Wartburg.')],
         routes=[R('weimar', 'eisenach', 'train', 45, '에르푸르트 경유 열차가 많음|many trains via Erfurt')],
         transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다닙니다. 바르트부르크는 버스를 타거나 숲길을 걸어 오릅니다.', en='Walk the old town; take the bus or walk up the forest path to the Wartburg.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    co = rd('countries.ts')
    for cid in ('quedlinburg', 'schwerin', 'konstanz', 'eisenach'):
        co = co.replace(f", '{cid}'", '')
    for a, b in (("'lubeck', 'bremen'", "'lubeck', 'schwerin', 'bremen'"), ("'leipzig', 'weimar', 'dresden'", "'leipzig', 'quedlinburg', 'weimar', 'eisenach', 'dresden'"),
                 ("'fussen', 'lindau'", "'fussen', 'konstanz', 'lindau'")):
        assert co.count(a) == 2, a
        co = co.replace(a, b)
    wr('countries.ts', co)
