#!/usr/bin/env python3
"""Switzerland step 1 (2026-11-01, user request): more sights for Zermatt, Interlaken, Grindelwald, St. Moritz, Lausanne,
Montreux, Basel, Bern, Geneva and Lugano, with opening facts checked that day on the official sites, and their
itineraries extended. Run once."""
from add_daytrip_places import hl_block, insert_after_line, rd, wr, vline

DAY = ['근교 당일치기', 'Day trip']
LIFT = '케이블카·산악열차는 계절 운행이고 날씨에 따라 운휴하니 당일 운행 여부를 확인하세요.|Lifts and mountain trains are seasonal and weather-dependent—check on the day.'
S = {
    'zermatt': [
        dict(ko='마터호른 글래시어 파라다이스', en='Matterhorn Glacier Paradise', dko='해발 3,883m, 유럽에서 가장 높은 케이블카 정상역입니다. 4,000m 봉우리 38개와 빙하 14개가 보이는 전망대와 빙하 속 얼음 궁전이 있습니다.', den='Europe’s highest cable-car station at 3,883 m, with a platform looking over 38 four-thousanders and 14 glaciers, and an ice palace inside the glacier.', maps='Matterhorn Glacier Paradise',
             visit=dict(min=180, max=240, s='https://www.matterhornparadise.ch/en/experience/peaks/matterhorn-glacier-paradise', n='체르마트에서 푸리·트로케너 슈테크를 거쳐 ‘글래시어 라이드’ 케이블카로 오릅니다. 고산이라 천천히 움직이세요.|Up from Zermatt via Furi and Trockener Steg on the Glacier Ride cable cars; take it slowly at this altitude.', k='2026-11')),
        dict(ko='순네가', en='Sunnegga', dko='지하 푸니쿨라로 오르는 해발 2,288m 전망대로, 마터호른이 정면으로 보이는 라이 호수와 5개 호수 길이 시작되는 곳입니다.', den='A 2,288 m viewpoint reached by underground funicular, with the Matterhorn straight ahead over Lake Leisee and the start of the Five Lakes Walk.', maps='Sunnegga Zermatt',
             visit=dict(min=120, max=240, s='https://www.matterhornparadise.ch/en/experience/peaks/sunnegga', n=LIFT, k='2026-11')),
        dict(ko='슈바르츠제', en='Schwarzsee', dko='해발 2,583m의 검은 호수와 작은 ‘눈의 성모’ 예배당이 있는 곳으로, 마터호른 북벽이 바로 앞에 솟아 있고 회른리 산장 가는 길이 시작됩니다.', den='The black lake at 2,583 m with its little chapel of Our Lady of the Snows, right under the Matterhorn’s north face where the path to the Hörnli hut begins.', maps='Schwarzsee Zermatt',
             visit=dict(min=90, max=150, s='https://www.matterhornparadise.ch/en/experience/peaks/schwarzsee', n='체르마트에서 케이블카로 약 12분입니다. 피크 패스에는 포함되지 않습니다.|About 12 minutes by cable car from Zermatt; not included in the Peak Pass.', k='2026-11')),
    ],
    'interlaken': [
        dict(ko='이젤트발트', en='Iseltwald', dko='브리엔츠 호수에 반도처럼 튀어나온 어촌 마을로, 드라마 〈사랑의 불시착〉의 호숫가 선착장 장면을 찍은 곳입니다.', den='A fishing village on a little peninsula on Lake Brienz, where the lakeside jetty scene of Crash Landing on You was filmed.', maps='Crash Landing on You Iseltwald', group=DAY,
             visit=dict(min=90, max=150, s='https://www.interlaken.swiss/en/destinations/lake-brienz/boenigen-iseltwald', n='드라마 선착장은 회전문에서 CHF 5를 내고 들어갑니다. 인터라켄 오스트역에서 버스로 갑니다.|The drama jetty is behind a CHF 5 turnstile; buses run from Interlaken Ost.', k='2026-11')),
        dict(ko='쉬니게 플라테', en='Schynige Platte', dko='1893년 개통한 톱니바퀴 열차로 오르는 해발 1,967m 전망대로, 알프스 식물 약 800종을 모은 고산 식물원과 아이거·묀히·융프라우 전망이 있습니다.', den='A 1,967 m viewpoint reached by the historic cogwheel railway, with an alpine garden of about 800 plants and views of the Eiger, Mönch and Jungfrau.', maps='Schynige Platte', group=DAY,
             visit=dict(min=240, max=300, s='https://www.jungfrau.ch/en-gb/schynige-platte/', n='빌더스빌역에서 톱니바퀴 열차로 약 1시간 걸리며 여름철에만 다닙니다. 정상에서 매일 11~14시에 알프호른 연주가 있습니다.|About an hour up by cogwheel train from Wilderswil, summer only; free alphorn concerts daily 11:00–14:00.', k='2026-11')),
    ],
    'grindelwald': [
        dict(ko='아이거 트레일', en='Eiger Trail', dko='아이거 익스프레스로 오른 아이거글레처역에서 아이거 북벽 바로 밑을 따라 알피글렌역까지 내려오는 6.1km 산길입니다.', den='A 6.1 km mountain path from Eigergletscher station, reached by the Eiger Express, along the foot of the Eiger north face down to Alpiglen station.', maps='Eigergletscher station',
             visit=dict(min=180, max=240, s='https://www.jungfrau.ch/en-gb/kleine-scheidegg/eiger-trail/', n='그린델발트 터미널에서 아이거 익스프레스로 15분, 걷기는 약 2시간(보통 난이도)입니다. 눈이 녹은 여름~가을에만 걸을 수 있습니다.|15 min on the Eiger Express from Grindelwald Terminal, then about 2 hours’ walk (moderate); snow-free summer to autumn only.', k='2026-11')),
    ],
    'st-moritz': [
        dict(ko='무오타스 무라글', en='Muottas Muragl', dko='옛 푸니쿨라로 오르는 해발 2,456m 전망대로, 엥가딘 호수들이 줄지어 내려다보이고 철학자의 길과 전망 그네가 있습니다.', den='A 2,456 m viewpoint up a historic funicular, looking down the chain of Engadin lakes, with the Philosophers’ Path and a panoramic swing.', maps='Muottas Muragl Bergstation', group=DAY,
             visit=dict(min=120, max=180, s='https://www.muottasmuragl.ch/en/anlagen/', n=LIFT, k='2026-11',
                        x=[('겨울 운행은 2026년 12월 19일부터입니다.|The winter timetable starts on 19 December 2026.', '2026-12-19')])),
        dict(ko='디아볼레차', en='Diavolezza', dko='베르니나 고개에서 케이블카로 오르는 해발 2,978m 전망대로, 피츠 베르니나와 페르스 빙하가 눈앞에 펼쳐집니다.', den='A 2,978 m viewpoint by cable car from the Bernina Pass, facing Piz Bernina and the Pers Glacier.', maps='Diavolezza Bergstation', group=DAY,
             visit=dict(min=150, max=240, s='https://www.corvatsch-diavolezza.ch/en/mountains/diavolezza', n='생모리츠에서 베르니나선 기차로 디아볼레차역까지 가서 케이블카를 탑니다.|Take the Bernina line from St. Moritz to Diavolezza station for the cable car.', k='2026-11',
                        x=[('2026년 11월 16일~12월 18일엔 운행 일정이 없습니다(겨울 시즌은 12월 19일 시작).|No service is scheduled 16 November–18 December 2026; the winter season starts on 19 December.', '2026-12-18')])),
    ],
    'lausanne': [
        dict(ko='라보 포도밭', en='Lavaux vineyards', dko='로잔과 브베 사이 레만 호숫가 비탈에 1만 개가 넘는 돌담 계단 포도밭이 이어지는 유네스코 세계유산입니다. 퀼리·에페스 사이를 걸으며 와이너리에 들릅니다.', den='A UNESCO World Heritage landscape of more than 10,000 stone-walled terraces above Lake Geneva between Lausanne and Vevey; walk between Cully and Épesses and stop at the wineries.', maps='Lavaux Patrimoine mondial Cully', group=DAY,
             visit=dict(min=180, max=240, s='https://www.lavaux-unesco.ch/', n='로잔에서 기차로 퀼리까지 약 10분입니다. 그랑 크뤼 길은 약 3km, 1시간 반 걸립니다.|About 10 minutes by train from Lausanne to Cully; the Route des Grands Crus is about 3 km, 1½ hours.', k='2026-11')),
    ],
    'montreux': [
        dict(ko='채플린스 월드', en='Chaplin’s World', dko='찰리 채플린이 말년 25년을 보낸 브베 위 저택과 그의 영화 세트를 재현한 스튜디오, 호수가 보이는 정원으로 꾸민 박물관입니다.', den='Charlie Chaplin’s home above Vevey for his last 25 years, with a studio recreating his film sets and a park overlooking the lake.', maps="Chaplin's World", group=DAY,
             visit=dict(min=120, max=150, c='daily', b='rec', s='https://www.chaplinsworld.com/en', n='보통 10:00~18:00(겨울엔 17:00까지)에 엽니다. 브베역에서 212번 버스로 약 15분이며 표는 온라인이나 현장에서 삽니다.|Usually 10:00–18:00 (17:00 in winter); about 15 min on bus 212 from Vevey station; tickets online or on site.', k='2026-11',
                        x=[('2027년 1월 1일, 1월 11~22일은 휴관합니다.|Closed 1 January and 11–22 January 2027.', '2027-01-22')])),
        dict(ko='알리멘타리움과 호수의 포크', en='Alimentarium and the fork in the lake', dko='네슬레 재단이 세운 음식 박물관으로, 앞 호수에 꽂힌 거대한 포크 조각이 브베의 상징입니다.', den='The food museum founded by Nestlé, with the giant fork standing in the lake in front as Vevey’s emblem.', maps='Alimentarium Vevey', group=DAY,
             visit=dict(min=90, max=120, c='mon', s='https://www.alimentarium.org/en', n='화~일 10:00~17:00(4~9월 18:00까지)에 열고 월요일(보 주 공휴일 제외)에 쉽니다. 포크 조각은 언제든 볼 수 있습니다.|Open Tuesday to Sunday 10:00–17:00 (18:00 April–September); closed Mondays except Vaud public holidays. The fork can be seen any time.', k='2026-11')),
    ],
    'basel': [
        dict(ko='바이엘러 재단', en='Fondation Beyeler', dko='렌초 피아노가 설계한 공원 속 미술관으로, 모네·세잔·피카소부터 현대 미술까지 모은 스위스 최고의 사립 미술관입니다.', den='Renzo Piano’s museum in a park, Switzerland’s finest private collection from Monet, Cézanne and Picasso to today.', maps='Fondation Beyeler', group=DAY,
             visit=dict(min=90, max=150, c='daily', b='no', s='https://www.fondationbeyeler.ch/en', n='매일 10:00~18:00, 수요일은 20:00까지 엽니다. 시내에서 6번 트램으로 리헨에 갑니다.|Open daily 10:00–18:00, Wednesdays until 20:00; tram 6 from the city to Riehen.', k='2026-11')),
        dict(ko='비트라 캠퍼스', en='Vitra Campus', dko='국경 너머 독일 바일암라인의 가구 회사 캠퍼스로, 프랭크 게리·안도 다다오·자하 하디드 등이 지은 건물과 비트라 디자인 박물관이 있습니다.', den='A furniture company’s campus over the border in Weil am Rhein, Germany, with buildings by Frank Gehry, Tadao Ando and Zaha Hadid and the Vitra Design Museum.', maps='Vitra Design Museum', group=DAY,
             visit=dict(min=120, max=180, c='daily', s='https://www.design-museum.de/en/information/vitra-campus.html', n='매일 10:00~18:00에 엽니다. 박물관+샤우데포 €26, 공장 구역은 건축 투어로만 볼 수 있습니다. 8번 트램 종점에서 걸어갑니다(독일이니 신분증 지참).|Open daily 10:00–18:00; museum and Schaudepot €26; the factory area only on the architecture tour. Walk from the tram 8 terminus (it is Germany, so carry ID).', k='2026-11')),
        dict(ko='슈팔렌 문', en='Spalentor', dko='14세기 성벽에 남은 바젤의 성문 셋 가운데 가장 웅장한 문으로, 초록·노랑 기와 지붕과 조각 장식이 남아 있습니다.', den='The grandest of Basel’s three surviving 14th-century city gates, with its green and yellow tiled roof and carved figures.', maps='Spalentor Basel',
             visit=dict(min=10, max=15)),
    ],
    'bern': [
        dict(ko='장미 정원', en='Rosengarten', dko='곰 공원 위 언덕의 공원으로, 아레강에 둘러싸인 구시가 지붕들이 한눈에 내려다보이는 베른 최고의 전망대입니다.', den='The park on the hill above the Bear Park, with the best view of the old town’s roofs inside the loop of the Aare.', maps='Rosengarten Park Bern',
             visit=dict(min=30, max=45, s='https://www.rosengarten.be/', n='공원은 언제든 들어갈 수 있습니다. 곰 공원에서 걸어 오르거나 중앙역에서 10번 버스(로젠가르텐 정류장)를 탑니다.|The park is always open; walk up from the Bear Park or take bus 10 from the station to Rosengarten.', k='2026-11')),
        dict(ko='파울 클레 센터', en='Zentrum Paul Klee', dko='렌초 피아노가 설계한 물결 모양 건물에 화가 파울 클레의 작품을 세계에서 가장 많이 모은 미술관입니다.', den='Renzo Piano’s wave-shaped building holding the world’s largest collection of Paul Klee’s work.', maps='Zentrum Paul Klee', group=DAY,
             visit=dict(min=90, max=120, c='mon', s='https://www.zpk.org/en/', n='화~일 10:00~17:00에 열고 월요일에 쉽니다. 중앙역에서 12번 버스 종점입니다.|Open Tuesday to Sunday 10:00–17:00, closed Mondays; at the end of bus line 12 from the station.', k='2026-11')),
    ],
    'geneva': [
        dict(ko='CERN 사이언스 게이트웨이', en='CERN Science Gateway', dko='세계 최대 입자 물리 연구소 CERN의 방문자 센터로, 렌초 피아노가 설계한 건물에서 전시와 실험 체험을 무료로 즐깁니다.', den='The visitor centre of CERN, the world’s largest particle physics lab, with free exhibitions and hands-on labs in a Renzo Piano building.', maps='CERN Science Gateway', group=DAY,
             visit=dict(min=120, max=180, c='mon', b='req', s='https://visit.cern/', n='화~일 9:00~17:00(마지막 입장 16:30)에 열고 월요일에 쉽니다. 무료지만 미리 등록해야 합니다. 코르나뱅역에서 18번 트램으로 약 25분입니다.|Open Tuesday to Sunday 9:00–17:00 (last entry 16:30), closed Mondays; free but registration is required. About 25 min on tram 18 from Cornavin.', k='2026-11',
                        x=[('2026년 12월 24·25·31일, 2027년 1월 1일은 휴관합니다.|Closed 24, 25 and 31 December 2026 and 1 January 2027.', '2027-01-01')])),
        dict(ko='파텍 필립 박물관', en='Patek Philippe Museum', dko='500년에 걸친 시계 약 2,500점과 자동인형, 에나멜 초상화를 모은 세계적인 시계 박물관입니다.', den='A world-class museum of about 2,500 watches spanning 500 years, with automatons and enamel portraits.', maps='Patek Philippe Museum',
             visit=dict(min=90, max=120, c='mon', b='rec', s='https://www.patek.com/en/museum/plan-your-visit', n='화~금 14:00~18:00, 토 10:00~18:00, 일 14:00~18:00에 열고 월요일에 쉽니다. 성인 CHF 10, 토요일 15·16시 무료 가이드 투어가 있습니다.|Open Tuesday to Friday 14:00–18:00, Saturday 10:00–18:00, Sunday 14:00–18:00; closed Mondays. Adults CHF 10; free guided tours on Saturdays at 15:00 and 16:00.', k='2026-11',
                        x=[('2026년 11월 12일, 12월 25일, 12월 29일~2027년 1월 4일은 휴관합니다.|Closed 12 November, 25 December, and 29 December 2026–4 January 2027.', '2027-01-04')])),
    ],
    'lugano': [
        dict(ko='몬테 브레', en='Monte Brè', dko='1908년 개통한 푸니쿨라로 10분 남짓 오르는 해발 933m 산으로, 루가노 호수와 시내가 내려다보이고 ‘스위스에서 가장 햇볕이 잘 드는 산’으로 불립니다.', den='A 933 m mountain reached in just over ten minutes by its 1908 funicular, looking over Lake Lugano and the city—called the sunniest in Switzerland.', maps='Monte Brè funicolare Cassarate', group=DAY,
             visit=dict(min=120, max=180, s='https://www.montebre.ch/en', n='카사라테 아래 역은 2·12번 버스로 갑니다. 왕복 성인 CHF 26입니다.|The Cassarate valley station is on buses 2 and 12; adult return CHF 26.', k='2026-11',
                        x=[('2026년 12월 25일, 2027년 1월 11일~2월 12일은 운휴합니다.|Closed 25 December 2026 and 11 January–12 February 2027.', '2027-02-12')])),
        dict(ko='몬테 제네로소', en='Monte Generoso', dko='카폴라고에서 톱니바퀴 열차로 40분 오르는 해발 1,704m 산으로, 마리오 보타가 설계한 ‘돌꽃’ 건물에서 호수와 알프스, 밀라노 평야까지 보입니다.', den='A 1,704 m peak 40 minutes up by cogwheel train from Capolago, with Mario Botta’s “Stone Flower” building looking over the lakes, the Alps and the plain to Milan.', maps='Fiore di pietra Monte Generoso', group=DAY,
             visit=dict(min=180, max=240, s='https://www.montegeneroso.ch/en', n='루가노에서 기차로 카폴라고역까지 가면 같은 건물에서 톱니바퀴 열차가 출발합니다.|Take the train from Lugano to Capolago; the cogwheel railway leaves from the same building.', k='2026-11',
                        x=[('2026년 11월 9일~12월 4일은 운행 일정이 없고, 12월 5일~2027년 3월 28일은 주말·공휴일에만 다닙니다.|No service is scheduled 9 November–4 December 2026; from 5 December to 28 March 2027 trains run on weekends and holidays only.', '2027-03-28')])),
    ],
}
ITIN = {
    'zermatt': ("  zermatt: [3, 5, 1, 2, 4],", """  zermatt: {
    days: [
      ['글래시어 파라다이스와 슈바르츠제|Glacier Paradise & Schwarzsee', 3, 6, 8, 5],
      ['고르너그라트와 순네가|Gornergrat & Sunnegga', 2, 4, 7, 1],
    ],
  },"""),
    'interlaken': ("trips: [['융프라우요흐|Jungfraujoch', 5], ['라우터브루넨|Lauterbrunnen', 6]] },",
                   "trips: [['융프라우요흐|Jungfraujoch', 5], ['라우터브루넨|Lauterbrunnen', 6], ['이젤트발트|Iseltwald', 7], ['쉬니게 플라테|Schynige Platte', 8]] },"),
    'grindelwald': ("      ['멘리헨|Männlichen', 3, 1],", "      ['멘리헨과 아이거 트레일|Männlichen & the Eiger Trail', 3, 6, 1],"),
    'st-moritz': ("  'st-moritz': [2, 5, 1, 4, 3],", "  'st-moritz': { days: [['', 2, 5, 1, 4, 3]], trips: [['무오타스 무라글|Muottas Muragl', 6], ['디아볼레차|Diavolezza', 7]] },"),
    'lausanne': ("  lausanne: [1, 5, 4, 2, 3],", "  lausanne: { days: [['', 1, 5, 4, 2, 3]], trips: [['라보 포도밭|Lavaux', 6]] },"),
    'montreux': ("trips: [['로셰드네|Rochers-de-Naye', 5]] },", "trips: [['로셰드네|Rochers-de-Naye', 5], ['브베|Vevey', 6, 7]] },"),
    'basel': ("  basel: [5, 2, 1, 3, 4],", "  basel: { days: [['', 5, 2, 1, 3, 8, 4]], trips: [['바이엘러 재단|Fondation Beyeler', 6], ['비트라 캠퍼스|Vitra Campus', 7]] },"),
    'bern': ("  bern: [4, 1, 7, 2, 6, 3, 5],", "  bern: { days: [['', 4, 1, 7, 2, 6, 3, 8, 5]], trips: [['파울 클레 센터|Zentrum Paul Klee', 9]] },"),
    'geneva': ("  geneva: [8, 3, 2, 7, 1, 5, 6, 4],", "  geneva: { days: [['', 8, 3, 2, 7, 10, 1, 5, 6, 4]], trips: [['CERN 사이언스 게이트웨이|CERN Science Gateway', 9]] },"),
    'lugano': ("  lugano: [2, 5, 1, 4, 3],", "  lugano: { days: [['', 2, 5, 1, 4, 3]], trips: [['몬테 브레|Monte Brè', 6], ['몬테 제네로소|Monte Generoso', 7]] },"),
}


def main():
    import re
    cities = rd('cities.ts')
    for cid, items in S.items():
        n0 = max(int(x) for x in re.findall(rf'id: "{cid}-h(\d+)"', cities))
        for k, h in enumerate(items, 1):
            hid = f'{cid}-h{n0 + k}'
            i = cities.find(f'id: "{cid}",')
            nxt = cities.find('\n  {\n    id: "', i + 10)
            j = cities.rindex('\n', i, cities.rindex('],', i, nxt))
            sep = '' if cities[:j].rstrip().endswith(',') else ','
            cities = cities[:j] + sep + '\n' + hl_block(hid, f'/highlights/{cid}-{n0 + k}.jpg', h) + ',' + cities[j:]
            insert_after_line('visit-ch.ts', rf"^  '{cid}-h\d+': v\(.*\),\n", vline(hid, h['visit']))
            print('sight', hid)
    wr('cities.ts', cities)
    it = rd('itinerary-central.ts')
    for cid, (old, new) in ITIN.items():
        assert old in it, cid
        it = it.replace(old, new)
    wr('itinerary-central.ts', it)


if __name__ == '__main__':
    main()
