#!/usr/bin/env python3
"""Austria step 1 (2026-10-31, user request): more sights for Vienna, Salzburg, Innsbruck, Graz and Hallstatt, with
opening facts checked that day on the official sites, and their itineraries extended. Run once."""
from add_daytrip_places import hl_block, insert_after_line, rd, vline, wr

DAY = ['근교 당일치기', 'Day trip']
S = {
    'vienna': [
        dict(ko='미술사 박물관', en='Kunsthistorisches Museum', dko='합스부르크 왕가가 모은 브뤼헐·벨라스케스·라파엘로 등의 명화가 있는 유럽 최고의 미술관 가운데 하나입니다.', den='One of Europe’s great art museums, built on the Habsburg collections of Bruegel, Velázquez, Raphael and more.', maps='Kunsthistorisches Museum Wien',
             visit=dict(min=150, max=210, c='daily', s='https://www.khm.at/en/', n='매일 10:00~18:00, 목요일은 21:00까지 엽니다.|Open daily 10:00–18:00, Thursdays until 21:00.', k='2026-10')),
        dict(ko='알베르티나', en='Albertina', dko='합스부르크 궁전 건물에 뒤러의 〈토끼〉와 모네·피카소 등 근현대 명작을 모은 미술관입니다.', den='A Habsburg palace holding Dürer’s Hare and modern masters from Monet to Picasso.', maps='Albertina Wien',
             visit=dict(min=90, max=120, c='daily', s='https://www.albertina.at/en/', n='매일 10:00~18:00, 수·금요일은 21:00까지 엽니다.|Open daily 10:00–18:00, Wednesdays and Fridays until 21:00.', k='2026-10')),
        dict(ko='박물관 지구 (MQ)', en='MuseumsQuartier', dko='옛 황실 마구간을 바꾼 문화 단지로 실레·클림트를 모은 레오폴트 미술관이 있습니다.', den='The former imperial stables turned cultural quarter, home to the Leopold Museum’s Schiele and Klimt.', maps='MuseumsQuartier Wien',
             visit=dict(min=90, max=150, s='https://www.mqw.at/en', n='안뜰은 24시간 열려 있습니다. 레오폴트 미술관은 화요일에 쉬고 10:00~18:00에 엽니다.|The courtyards are open round the clock; the Leopold Museum opens 10:00–18:00 and closes on Tuesdays.', k='2026-10')),
        dict(ko='카를 성당', en='Karlskirche', dko='두 기둥과 초록 돔이 어우러진 빈 최고의 바로크 성당으로 돔 안쪽 프레스코를 가까이 볼 수 있습니다.', den='Vienna’s finest Baroque church, with twin columns, a green dome and its frescoes seen up close.', maps='Karlskirche Wien',
             visit=dict(min=30, max=45, s='https://www.karlskirche.at/', n='관람(유료)은 월~토 9:00~18:00, 일요일·공휴일 11:45~19:15입니다.|Ticketed visits Monday to Saturday 9:00–18:00, Sundays and holidays 11:45–19:15.', k='2026-10')),
        dict(ko='나슈마르크트', en='Naschmarkt', dko='1.5km에 걸쳐 노점과 식당이 늘어선 빈 최대의 상설 시장입니다.', den='Vienna’s biggest market, 1.5 km of stalls and eateries.', maps='Naschmarkt Wien',
             visit=dict(min=45, max=90, n='일요일은 쉽니다. 토요일엔 옆에서 벼룩시장이 열립니다.|Closed on Sundays; a flea market runs alongside on Saturdays.')),
        dict(ko='훈데르트바서 하우스', en='Hundertwasserhaus', dko='곡선과 원색, 옥상 나무로 꾸민 예술가 훈데르트바서의 공공 주택입니다.', den='Hundertwasser’s public housing of curving lines, bright colours and trees on the roof.', maps='Hundertwasserhaus Wien',
             visit=dict(min=20, max=40, s='https://www.wien.info/en/see-do/sights-from-a-to-z/hundertwasser-house-vienna-348464', n='주민이 사는 집이라 밖에서만 봅니다. 길 건너 훈데르트바서 빌리지(상점)는 매일 9:00~19:00에 엽니다.|Lived in, so seen only from outside; the Hundertwasser Village shops opposite open daily 9:00–19:00.', k='2026-10')),
        dict(ko='빈 시청', en='Vienna City Hall', dko='링슈트라세의 네오고딕 시청으로 겨울엔 앞 광장에 크리스마스 시장과 스케이트장이 섭니다.', den='The neo-Gothic City Hall on the Ring, with a Christmas market and ice rink on its square in winter.', maps='Wiener Rathaus',
             visit=dict(min=20, max=60, s='https://www.wien.info/en/see-do/sights-from-a-to-z/city-hall-343230', n='무료 가이드 투어가 있으며 일정은 시 누리집에서 확인합니다.|Free guided tours run; check the city’s site for times.')),
        dict(ko='오스트리아 국회의사당', en='Austrian Parliament', dko='그리스 신전 모양의 국회의사당으로, 재단장 후 방문자 센터 ‘데모크라티쿰’이 문을 열었습니다.', den='The Greek-temple Parliament, reopened after renovation with the Demokratikum visitor centre.', maps='Parlament Österreich',
             visit=dict(min=45, max=75, s='https://www.parlament.gv.at/en/experience/index.html', n='본관과 팔레 엡스타인 가이드 투어(영어·독일어)를 예약할 수 있습니다.|Guided tours of the main building and Palais Epstein run in English and German.')),
        dict(ko='왕궁 보물관', en='Imperial Treasury', dko='신성 로마 제국 왕관과 합스부르크 왕가의 보물을 모은 호프부르크 안의 보물관입니다.', den='The Hofburg treasury of the Holy Roman Empire’s crown and Habsburg treasures.', maps='Kaiserliche Schatzkammer Wien',
             visit=dict(min=60, max=90, c='tue', b='req', s='https://www.kaiserliche-schatzkammer.at/en/', n='화요일에 쉬고 9:00~17:30에 엽니다. 2026년 4월부터 입장 시간을 정한 예약제입니다.|Closed on Tuesdays, open 9:00–17:30; since April 2026 entry is by timed booking.', k='2026-10')),
        dict(ko='빈 중앙묘지', en='Vienna Central Cemetery', dko='베토벤·슈베르트·브람스·요한 슈트라우스가 잠든 음악가 묘역이 있는 거대한 묘지입니다.', den='The vast cemetery where Beethoven, Schubert, Brahms and Johann Strauss lie in the musicians’ plot.', maps='Zentralfriedhof Wien Tor 2',
             visit=dict(min=60, max=90, s='https://www.friedhoefewien.at/', n='11월 3일~2월은 8:00~17:00, 10월은 7:00~18:00에 엽니다. 음악가 묘역은 2번 문 근처입니다.|Open 8:00–17:00 from 3 November to February and 7:00–18:00 in October; the musicians’ graves are near Gate 2.', k='2026-10')),
    ],
    'salzburg': [
        dict(ko='게트라이데 거리', en='Getreidegasse', dko='철제 간판이 줄지어 걸린 좁은 쇼핑 거리로 모차르트 생가가 이 거리에 있습니다.', den='The narrow shopping lane of wrought-iron signs, home to Mozart’s birthplace.', maps='Getreidegasse Salzburg',
             visit=dict(min=30, max=60)),
        dict(ko='헬브룬 궁전과 물장난 정원', en='Hellbrunn Palace and Trick Fountains', dko='대주교의 여름 궁전으로 손님을 놀래 주는 물장난 분수가 정원 곳곳에 숨어 있습니다.', den='The prince-archbishop’s summer palace, its gardens full of trick fountains to soak guests.', maps='Schloss Hellbrunn',
             visit=dict(min=90, max=120, s='https://www.hellbrunn.at/en/', n='궁전과 물장난 정원은 3월 말~11월 1일에 매일 엽니다(10월 9:30~17:30). 정원 산책로는 연중 6:30~21:00입니다.|Palace and trick fountains open daily from late March to 1 November (October 9:30–17:30); the park is open all year 6:30–21:00.', k='2026-10')),
        dict(ko='모차르트 거처', en='Mozart Residence', dko='모차르트 가족이 1773년부터 살던 집으로 악기와 자필 악보를 전시합니다.', den='The home of the Mozart family from 1773, with instruments and manuscripts.', maps='Mozart Wohnhaus Salzburg',
             visit=dict(min=45, max=60, c='daily', s='https://mozarteum.at/en/mozart-museums/mozarts-residence', n='매일 9:00~17:30에 엽니다. 표는 공식 판매처에서만 사세요.|Open daily 9:00–17:30; buy tickets only from the official shop.', k='2026-10')),
        dict(ko='장크트 페터 수도원과 묘지', en='St Peter’s Abbey and Cemetery', dko='7세기에 세운 독일어권에서 가장 오래된 수도원으로, 바위벽에 판 카타콤과 아름다운 묘지가 있습니다.', den='The oldest monastery in the German-speaking world, with catacombs cut into the rock and a beautiful cemetery.', maps='Stift St. Peter Salzburg',
             visit=dict(min=30, max=45, s='https://www.stift-stpeter.at/')),
        dict(ko='운터스베르크 케이블카', en='Untersberg cable car', dko='잘츠부르크 남쪽 운터스베르크 정상(약 1,800m)에 올라 알프스와 시내를 내려다봅니다.', den='Up the Untersberg (about 1,800 m) south of Salzburg for views over the Alps and the city.', maps='Untersbergbahn', group=DAY,
             visit=dict(min=120, max=180, s='https://www.untersbergbahn.at/', n='계절마다 운행 시간이 다릅니다(10월 8:30~17:00).|Hours vary by season (October 8:30–17:00).', k='2026-10',
                        x=[('2026년 11월 2일~12월 13일은 정비로 운휴합니다.|Closed for servicing 2 November–13 December 2026.', '2026-12-13')])),
    ],
    'innsbruck': [
        dict(ko='베르크이젤 스키 점프대', en='Bergisel Ski Jump', dko='자하 하디드가 설계한 스키 점프대로 꼭대기 전망대에서 시내와 산이 보입니다.', den='Zaha Hadid’s ski jump, with a viewing deck over the city and mountains.', maps='Bergisel Sprungschanze',
             visit=dict(min=60, max=90, c='tue', s='https://www.bergisel.info/en/', n='6~10월은 매일 9:00~18:00, 11~5월은 수~월 9:00~17:00(화요일 휴무)입니다.|June–October daily 9:00–18:00; November–May Wednesday to Monday 9:00–17:00 (closed Tuesdays).', k='2026-10')),
        dict(ko='스와로브스키 크리스탈 세계', en='Swarovski Crystal Worlds', dko='거인 머리 모양 입구 안에 크리스털 예술 공간이 이어지는 바텐스의 체험관입니다.', den='Crystal art chambers behind a giant’s-head entrance at Wattens.', maps='Swarovski Kristallwelten Wattens', group=DAY,
             visit=dict(min=120, max=150, c='daily', s='https://kristallwelten.swarovski.com/', n='매일 9:00~19:00(마지막 입장 18:00)에 엽니다. 인스브루크 동쪽 바텐스에 있습니다.|Open daily 9:00–19:00 (last entry 18:00), at Wattens east of Innsbruck.', k='2026-10')),
        dict(ko='마리아 테레지아 거리', en='Maria-Theresien-Straße', dko='안나 기념주와 개선문이 있는 인스브루크의 중심 거리로 뒤로 노르드케테 산이 보입니다.', den='Innsbruck’s main street of St Anne’s Column and the Triumphal Arch, framed by the Nordkette.', maps='Maria-Theresien-Straße Innsbruck',
             visit=dict(min=20, max=30)),
        dict(ko='알펜초', en='Alpenzoo', dko='알프스에 사는 동물만 모은 고지대 동물원으로 노르드케테 케이블카 중간 정류장 근처입니다.', den='A high-altitude zoo of Alpine animals only, near the Nordkette railway’s Hungerburg stop.', maps='Alpenzoo Innsbruck',
             visit=dict(min=90, max=120, c='daily', s='https://www.alpenzoo.at/en/', n='매일 엽니다. 4~10월 9:00~18:00, 11~3월 9:00~17:00입니다.|Open daily: 9:00–18:00 April–October, 9:00–17:00 November–March.', k='2026-10')),
    ],
    'graz': [
        dict(ko='쿤스트하우스 그라츠', en='Kunsthaus Graz', dko='‘친절한 외계인’이라 불리는 파란 곡면 건물의 현대 미술관입니다.', den='The contemporary art museum in a blue, bulbous building nicknamed the “Friendly Alien”.', maps='Kunsthaus Graz',
             visit=dict(min=60, max=90, c='mon', s='https://www.museum-joanneum.at/en/kunsthaus-graz', n='화~일 10:00~18:00에 열고 월요일에 쉽니다.|Open Tuesday to Sunday 10:00–18:00; closed on Mondays.', k='2026-10')),
        dict(ko='무어 섬', en='Murinsel', dko='무어강 한가운데 떠 있는 조개 모양의 강철·유리 다리 겸 카페입니다.', den='A shell-shaped steel and glass bridge and café floating in the middle of the Mur.', maps='Murinsel Graz',
             visit=dict(min=15, max=30, n='무료로 드나듭니다.|Free to walk through.')),
    ],
    'hallstatt': [
        dict(ko='세계유산 전망대 스카이워크', en='World Heritage Skywalk', dko='소금 광산 푸니쿨라로 올라간 산비탈에서 할슈타트 마을과 호수를 내려다보는 전망대입니다.', den='A viewing platform on the mountainside by the salt-mine funicular, looking down on Hallstatt and its lake.', maps='Skywalk Hallstatt Welterbeblick',
             visit=dict(min=30, max=60, s='https://www.salzwelten.at/en/hallstatt', n='소금 광산 푸니쿨라를 타고 오르며, 운행 기간은 공식 사이트에서 확인하세요.|Reached by the salt-mine funicular; check its operating season on the official site.')),
        dict(ko='다흐슈타인 얼음 동굴과 5 핑거스', en='Dachstein Ice Cave and 5fingers', dko='거대한 얼음 동굴과, 절벽 위로 손가락처럼 뻗은 전망대 ‘5 핑거스’를 케이블카로 찾아갑니다.', den='A giant ice cave and the 5fingers platform reaching out over the cliff, by cable car from Obertraun.', maps='Dachstein Krippenstein Seilbahn Obertraun', group=DAY,
             visit=dict(min=240, max=300, s='https://dachstein-salzkammergut.com/en/', n='케이블카와 동굴은 5월 1일~11월 1일에 운영합니다(2026년). 오버트라운 계곡역에서 출발합니다.|The cable car and caves run 1 May–1 November (2026), from the valley station at Obertraun.', k='2026-10')),
    ],
}
ITIN = {
    'vienna': ("""    days: [
      ['구시가와 링|Old town & the Ring', 2, 5, 4, 7],
      ['쇤브룬과 벨베데레|Schönbrunn & Belvedere', 1, 3, 6],
    ],""", """    days: [
      ['구시가와 왕궁|Old town & the Hofburg', 2, 5, 17, 10, 7],
      ['박물관과 링|Museums & the Ring', 9, 11, 16, 15, 4, 12, 13],
      ['쇤브룬과 벨베데레|Schönbrunn & Belvedere', 1, 3, 14, 6],
    ],"""),
    'salzburg': ("  salzburg: { days: [['', 2, 4, 3, 6, 7, 5, 1]], trips: [['장크트볼프강|St. Wolfgang', 8]] },",
                 "  salzburg: {\n    days: [\n      ['구시가와 성|Old town & fortress', 3, 9, 4, 6, 7, 12, 5, 1],\n      ['미라벨과 헬브룬|Mirabell & Hellbrunn', 2, 11, 10],\n    ],\n    trips: [['장크트볼프강|St. Wolfgang', 8], ['운터스베르크|Untersberg', 13]],\n  },"),
    'innsbruck': ("  innsbruck: [4, 1, 3, 2],", "  innsbruck: { days: [['', 4, 1, 3, 8, 6, 9, 2]], trips: [['스와로브스키 크리스탈 세계|Swarovski Crystal Worlds', 7]] },"),
    'graz': ("  graz: [3, 2, 1, 4, 5],", "  graz: [3, 1, 2, 7, 6, 4, 5],"),
    'hallstatt': ("  hallstatt: [2, 4, 5, 3, 1],", "  hallstatt: { days: [['', 2, 6, 4, 5, 3, 1]], trips: [['다흐슈타인 얼음 동굴과 5 핑거스|Dachstein Ice Cave & 5fingers', 7]] },"),
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
            insert_after_line('visit-central.ts', rf"^  '{cid}-h\d+': v\(.*\),\n", vline(hid, h['visit']))
            print('sight', hid)
    wr('cities.ts', cities)
    it = rd('itinerary-central.ts')
    for cid, (old, new) in ITIN.items():
        assert old in it, cid
        it = it.replace(old, new)
    wr('itinerary-central.ts', it)


if __name__ == '__main__':
    main()
