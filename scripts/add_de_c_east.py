#!/usr/bin/env python3
"""Germany 2nd pass, new cities — east (2026-11-25, user picked): Meissen (Saxony), Wittenberg (+Dessau) and Naumburg
(+Halle) in Saxony-Anhalt, Erfurt (Thuringia). dresden-h11 (Meissen porcelain) and weimar-h7 (Erfurt) stay as day trips
of their bases. Facts (Wikipedia en/de): Albrechtsburg late-Gothic castle, regarded as the first German castle built as a
residence, where European porcelain production began in 1710; Meissen Cathedral Gothic; Frauenkirche porcelain carillon;
Wittenberg Luther Memorials UNESCO 1996, Lutherhaus the world's largest museum of the Reformation, All Saints' (Castle)
Church with the Theses Door and Luther's grave, Town Church St Mary's with the Cranach altarpiece, Melanchthon House and
Cranach courtyards; Bauhaus Dessau (Gropius, 1925–26) and Masters' Houses UNESCO 1996; Dessau-Wörlitz Garden Realm UNESCO
2000; Naumburg Cathedral UNESCO 2018 with the Naumburg Master's donor figures (Uta); St Wenceslas with its Hildebrandt
organ, examined by Bach; Freyburg (Unstrut) sparkling-wine cellars; Halle Handel born 1685 (Händel-Haus), Market Church
and Red Tower, Nebra sky disc in the State Museum of Prehistory; Erfurt Krämerbrücke 1325 the longest continuously
inhabited bridge in Europe, cathedral and St Severus on the Domplatz, Petersberg Citadel, Old Synagogue (Erfurt Treasure,
UNESCO 2023), Augustinian Monastery where Luther was a monk. Times via Transitous (2026-11-25): Dresden–Meissen ~40 (S1),
Berlin–Wittenberg 45, Wittenberg–Dessau ~40, Leipzig–Naumburg ~50, Leipzig–Halle ~30, Weimar–Erfurt 20, Berlin–Erfurt
~1 h 40, Frankfurt–Erfurt ~2 h 20, Munich–Erfurt ~3 h 15; Leipzig–Erfurt ~45. Run once."""
from de_c_common import H, R, C, day, run, FREE, DAY, NEAR, FIRST

LEJ = "['Leipzig/Halle (LEJ)', '라이프치히/할레 공항 (LEJ)']"
DRS = "['Dresden (DRS)', '드레스덴 공항 (DRS)', '드레스덴|Dresden']"
ERF = "['Erfurt-Weimar (ERF)', '에르푸르트-바이마르 공항 (ERF)', '운항편 적음|few flights']"

CITIES = [
    C(id='meissen', group_title='작센', after='dresden', ko='마이센', en='Meissen', native='Meißen', lat=51.1636, lng=13.4775,
      blurb=['엘베강 가 언덕 위 성과 대성당이 솟은 도시로, 1710년 이 성에서 유럽 최초의 경질 자기 생산이 시작됐습니다. 지금도 마이센 도자기 공방이 있습니다.',
             'A town on the Elbe crowned by its castle and cathedral, where Europe’s first hard-paste porcelain was made in the castle in 1710; the Meissen porcelain manufactory still works here.'],
      highlights=[
          H('알브레히츠부르크', 'Albrechtsburg', '독일에서 처음으로 거주용 궁전으로 지은 성으로 꼽히는 후기 고딕 성으로, 1710년 이곳에서 자기 생산이 시작됐습니다.', 'A late-Gothic castle regarded as the first in Germany built as a residence, where porcelain production began in 1710.', 'Albrechtsburg Meissen', 60, 90),
          H('마이센 대성당', 'Meissen Cathedral', '성 옆 언덕 위의 고딕 대성당입니다.', 'The Gothic cathedral beside the castle on the hilltop.', 'Dom zu Meißen', 30, 45),
          H('마이센 도자기 공방과 박물관', 'Meissen Porcelain Manufactory', '도자기를 만드는 과정을 시연으로 보여 주고, 300년 넘는 작품을 전시합니다.', 'Demonstrations of how the porcelain is made and a museum of more than 300 years of pieces.', 'Erlebniswelt Haus Meissen', 90, 120),
          H('구시가와 프라우엔 교회 도자기 종', 'Old town & Frauenkirche porcelain bells', '시장 광장의 프라우엔 교회 탑에서 도자기로 만든 종이 하루 몇 차례 울립니다.', 'From the tower of the Frauenkirche on the market square, a carillon of porcelain bells rings several times a day.', 'Frauenkirche Meißen', 30, 45, b='no', n=FREE),
      ],
      hubs=f"    air: [{DRS}],\n    rail: [['Meißen', '마이센역'], ['Meißen Altstadt', '마이센 구시가역']],\n",
      itinerary=[4, 1, 2, 3],
      season='봄~가을이 좋고, 9월엔 와인 축제가 열립니다.|Spring to autumn; the wine festival is in September.',
      stay=[('구시가', 'Old town', 'Markt Meißen', FIRST, '광장과 성이 걸어서 닿고, 공방까지는 걸어서 약 15분입니다.|The square and castle on foot; the manufactory is about 15 min away.')],
      routes=[R('dresden', 'meissen', 'train', 40, 'S1')],
      transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다니고, 성까지는 계단길이나 엘리베이터로 오릅니다.', en='Walk the old town; climb to the castle by steps or the lift.'),
      daytrips=[day('dresden', 'meissen', '언덕 위 알브레히츠부르크와 대성당, 도자기 공방을 봅니다. 여름엔 엘베강 배로도 갑니다.|The hilltop Albrechtsburg, cathedral and porcelain manufactory; in summer you can go by Elbe steamer.')]),
    C(id='wittenberg', group_title='작센안할트', after='quedlinburg', ko='비텐베르크', en='Wittenberg', native='Lutherstadt Wittenberg', lat=51.8664, lng=12.6484,
      blurb=['1517년 루터가 95개 논제를 내걸어 종교 개혁이 시작된 도시로, 루터 관련 유적들이 유네스코 세계유산입니다. 근교 데사우엔 바우하우스 건물과 뵈르리츠 정원이 있습니다.',
             'The town where Luther’s 95 Theses of 1517 set off the Reformation, its Luther memorials a UNESCO World Heritage Site; nearby Dessau has the Bauhaus building and the Wörlitz gardens.'],
      highlights=[
          H('루터 하우스', 'Luther House', '루터가 살던 옛 수도원 건물로, 세계에서 가장 큰 종교 개혁 박물관입니다.', 'Luther’s home in a former monastery, now the world’s largest museum of the Reformation.', 'Lutherhaus Wittenberg', 90, 120),
          H('성 교회 (논제의 문)', 'All Saints’ Church (Theses Door)', '루터가 95개 논제를 붙였다고 전하는 문과 루터의 무덤이 있는 성 교회입니다.', 'The Castle Church with the door where Luther is said to have posted his 95 Theses, and his grave.', 'Schlosskirche Wittenberg', 30, 45),
          H('시 교회 성 마리아', 'Town Church of St Mary', '루터가 설교한 교회로, 크라나흐의 종교 개혁 제단화가 있습니다.', 'The church where Luther preached, with Cranach’s Reformation altarpiece.', 'Stadtkirche Wittenberg', 30, 45),
          H('마르크트 광장, 멜란히톤 하우스와 크라나흐 마당', 'Market Square, Melanchthon House & Cranach courtyards', '루터와 멜란히톤 동상이 선 광장과, 멜란히톤의 집, 화가 크라나흐의 작업장 마당입니다.', 'The square with statues of Luther and Melanchthon, Melanchthon’s house and the courtyards of the painter Cranach’s workshop.', 'Cranach-Höfe Wittenberg', 60, 90),
          H('데사우 바우하우스와 마이스터하우스', 'Bauhaus Dessau & Masters’ Houses', '발터 그로피우스가 1925~26년에 설계한 바우하우스 건물과 교수들의 집으로, 유네스코 세계유산입니다.', 'Walter Gropius’s Bauhaus building of 1925–26 and the Masters’ Houses; a UNESCO World Heritage Site.', 'Bauhausgebäude Dessau', 120, 180, group=DAY),
          H('데사우뵈르리츠 정원', 'Dessau-Wörlitz Garden Realm', '18세기 영국식 풍경 정원이 넓게 이어진 곳으로, 뵈르리츠 공원에선 뱃사공이 모는 배로 호수를 건넙니다. 유네스코 세계유산입니다.', 'A vast 18th-century landscape of English-style gardens; at Wörlitz Park ferrymen pole you across the lakes; a UNESCO World Heritage Site.', 'Wörlitzer Park', 150, 240, group=DAY, b='no', n='공원은 무료이고 궁전과 배는 유료입니다.|The park is free; the palaces and boats are ticketed.'),
      ],
      hubs="    air: [BER()],\n    rail: [['Lutherstadt Wittenberg Hbf', '비텐베르크 중앙역'], ['Dessau Hbf', '데사우 중앙역']],\n",
      itinerary={'days': [['', 2, 4, 3, 1]], 'trips': [['데사우|Dessau', 5, 6]]},
      season='10월 31일 종교 개혁 기념일과 6월 루터 결혼 축제 때 활기찹니다.|Liveliest on Reformation Day (31 October) and at the Luther’s Wedding festival in June.',
      stay=[('구시가', 'Old town', 'Markt Wittenberg', FIRST, '교회와 박물관이 한 거리에 모여 있습니다.|The churches and museums line one street.')],
      routes=[R('berlin', 'wittenberg', 'train', 45), R('leipzig', 'wittenberg', 'train', 35)],
      transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다니고, 데사우는 기차로 갑니다.', en='Walk the old town; take the train to Dessau.'),
      daytrips=[day('berlin', 'wittenberg', '종교 개혁의 도시에서 루터 하우스와 논제의 문이 있는 성 교회를 봅니다.|Luther House and the Castle Church with the Theses Door, in the town of the Reformation.')]),
    C(id='naumburg', group_title='작센안할트', after='wittenberg', ko='나움부르크', en='Naumburg', native='Naumburg (Saale)', lat=51.1549, lng=11.8110,
      blurb=['잘레·운스트루트 와인 지방의 대성당 도시로, ‘나움부르크의 거장’이 만든 우타 조각상이 있는 대성당이 유네스코 세계유산입니다. 근교 할레는 헨델이 태어난 도시입니다.',
             'A cathedral town in the Saale-Unstrut wine country, whose cathedral, with the Naumburg Master’s statue of Uta, is a UNESCO World Heritage Site; nearby Halle is Handel’s birthplace.'],
      highlights=[
          H('나움부르크 대성당', 'Naumburg Cathedral', '13세기 ‘나움부르크의 거장’이 만든 기증자 조각상, 특히 우타 상으로 유명한 대성당입니다. 유네스코 세계유산입니다.', 'The cathedral famed for the 13th-century donor statues by the Naumburg Master, above all Uta; a UNESCO World Heritage Site.', 'Naumburger Dom', 60, 90),
          H('마르크트 광장과 성 벤첼 교회', 'Market Square & St Wenceslas', '르네상스 시청이 선 광장과, 바흐가 검사한 힐데브란트 오르간이 있는 성 벤첼 교회입니다.', 'The square with its Renaissance town hall, and St Wenceslas with the Hildebrandt organ that Bach examined.', 'Stadtkirche St. Wenzel Naumburg', 45, 60),
          H('프라이부르크 와인 마을', 'Freyburg (Unstrut)', '포도밭 언덕 아래 스파클링 와인 저장고로 유명한 운스트루트강 가 마을입니다.', 'A village on the Unstrut below vineyard slopes, known for its sparkling-wine cellars.', 'Rotkäppchen Sektkellerei Freyburg', 120, 180, group=NEAR),
          H('할레 헨델 하우스', 'Handel House, Halle', '1685년 헨델이 태어난 집을 박물관으로 꾸민 곳입니다.', 'The house where Handel was born in 1685, now a museum.', 'Händel-Haus Halle', 60, 90, group=DAY, c='mon', n='라이프치히에서 기차로 약 30분, 나움부르크에서 약 40분입니다.|About 30 min by train from Leipzig, 40 from Naumburg.'),
          H('할레 마르크트 광장과 붉은 탑', 'Halle Market Square & Red Tower', '다섯 개의 탑이 솟은 마르크트 교회와 홀로 선 붉은 탑이 있는 광장입니다.', 'The square with the five-towered Market Church and the free-standing Red Tower.', 'Roter Turm Halle', 30, 45, group=DAY, b='no', n=FREE),
          H('네브라 하늘 원반 (주립 선사 박물관)', 'Nebra Sky Disc (State Museum of Prehistory)', '청동기 시대 하늘을 새긴 네브라 원반을 전시하는 할레의 선사 박물관입니다.', 'Halle’s prehistory museum, home of the Bronze Age Nebra sky disc.', 'Landesmuseum für Vorgeschichte Halle', 90, 120, group=DAY, c='mon'),
      ],
      hubs=f"    air: [{LEJ}],\n    rail: [['Naumburg (Saale) Hbf', '나움부르크 중앙역', '시내까지 약 1.5km|about 1.5 km to the centre'], ['Halle (Saale) Hbf', '할레 중앙역']],\n",
      itinerary={'days': [['', 1, 2], ['와인 마을|Wine village', 3]], 'trips': [['할레|Halle', 4, 5, 6]]},
      season='포도 수확철인 9~10월에 와인 축제가 이어집니다.|Wine festivals follow the harvest in September–October.',
      stay=[('구시가', 'Old town', 'Markt Naumburg', FIRST, '대성당과 광장이 걸어서 닿습니다.|The cathedral and square on foot.')],
      routes=[R('leipzig', 'naumburg', 'train', 50)],
      transit=dict(modes=['walk', 'tram', 'bus', 'train'], ko='구시가는 걸어서 다니고, 역과 시내 사이엔 옛 트램이 다닙니다.', en='Walk the old town; a historic tram links the station and centre.')),
    C(id='erfurt', group_title='튀링겐', after='weimar', ko='에르푸르트', en='Erfurt', native='Erfurt', lat=50.9787, lng=11.0328,
      blurb=['튀링겐주의 주도로, 1325년 지은 집들이 줄지어 선 크레머 다리와 언덕 위 대성당, 루터가 수도사로 지낸 수도원이 있습니다. 옛 시나고그는 유네스코 세계유산입니다.',
             'The capital of Thuringia, with the house-lined Krämerbrücke of 1325, a cathedral on a hill and the monastery where Luther lived as a monk; its Old Synagogue is a UNESCO World Heritage Site.'],
      highlights=[
          H('크레머 다리', 'Krämerbrücke', '1325년에 지은 다리 위로 집들이 줄지어 선, 유럽에서 사람이 계속 살아온 다리 가운데 가장 깁니다. 공방과 가게가 들어 있습니다.', 'Built in 1325 and lined with houses, it is the longest continuously inhabited bridge in Europe, full of workshops and shops.', 'Krämerbrücke Erfurt', 30, 45, b='no', n=FREE),
          H('에르푸르트 대성당과 성 제베리 교회', 'Erfurt Cathedral & St Severus', '돔 광장 위 계단 꼭대기에 나란히 선 두 고딕 교회입니다.', 'Two Gothic churches side by side at the top of the steps above the Domplatz.', 'Erfurter Dom', 45, 60, b='no', n=FREE),
          H('페터스베르크 요새', 'Petersberg Citadel', '시내를 내려다보는 바로크 요새로, 가이드 투어로 지하 통로에 들어갑니다.', 'The Baroque citadel above the city, with guided tours of its underground passages.', 'Zitadelle Petersberg', 60, 90, b='no', n='요새 언덕은 무료이고 지하 투어는 유료입니다.|The grounds are free; the tunnel tours are ticketed.'),
          H('옛 시나고그', 'Old Synagogue', '유럽에서 손꼽히게 오래된 시나고그 건물로, 중세 유대인의 보물 ‘에르푸르트 보물’을 전시합니다. 유네스코 세계유산입니다.', 'One of the oldest synagogue buildings in Europe, displaying the medieval Erfurt Treasure; a UNESCO World Heritage Site.', 'Alte Synagoge Erfurt', 45, 60, c='mon'),
          H('아우구스티누스 수도원', 'Augustinian Monastery', '1505~11년 루터가 수도사로 지낸 수도원입니다.', 'The monastery where Luther lived as a monk from 1505 to 1511.', 'Augustinerkloster Erfurt', 45, 60),
      ],
      hubs=f"    air: [{ERF}, FRA()],\n    rail: [['Erfurt Hbf', '에르푸르트 중앙역', 'ICE 교차역|ICE hub']],\n",
      itinerary=[2, 3, 1, 4, 5],
      season='봄~가을이 걷기 좋고, 12월엔 대성당 앞 크리스마스 시장이 열립니다.|Spring to autumn for walking; a Christmas market fills the Domplatz in December.',
      stay=[('구시가', 'Old town', 'Fischmarkt Erfurt', FIRST, '다리와 대성당, 역이 걸어서 닿습니다.|The bridge, cathedral and station on foot.')],
      routes=[R('weimar', 'erfurt', 'train', 20), R('berlin', 'erfurt', 'train', 100), R('frankfurt', 'erfurt', 'train', 140), R('leipzig', 'erfurt', 'train', 45), R('munich', 'erfurt', 'train', 195)],
      transit=dict(modes=['walk', 'tram', 'bus'], ko='구시가는 걷거나 트램을 탑니다.', en='Walk or take the tram.')),
]


if __name__ == '__main__':
    run(CITIES)
