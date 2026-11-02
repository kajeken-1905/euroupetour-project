#!/usr/bin/env python3
"""Sight review step 1, Hungary and Denmark (2026-11-02, user request): more sights for Budapest and Copenhagen, their
itineraries rebuilt into three days plus day trips, every list in the two countries put in itinerary order (big cities
under day headers). Hours checked that day on the official sites. Run once."""
import re

from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder

DAY = ['근교 당일치기', 'Day trip']

BUDAPEST = [
    (10, dict(ko='겔레르트 언덕과 치타델라', en='Gellért Hill and the Citadella', dko='다뉴브강과 부다·페스트 시내가 한눈에 보이는 언덕 위 요새로, 11년 만인 2026년 봄에 새로 단장해 다시 열었습니다.', den='The hilltop fortress with the widest view over the Danube and both halves of the city, reopened after renovation in spring 2026 after eleven years shut.', maps='Citadella Budapest',
              visit=dict(min=60, max=90, n='언덕 위 공원과 전망 테라스는 무료이고 안의 전시는 유료입니다. 다뉴브 쪽에서 걸어 오르면 약 30분입니다.|The park and terraces on top are free; the exhibition inside is ticketed. About 30 min on foot up from the Danube.', k='2026-11'))),
    (11, dict(ko='헝가리 국립 오페라 하우스', en='Hungarian State Opera House', dko='안드라시 거리에 선 네오르네상스 오페라 극장으로, 복원을 마친 금빛 객석을 가이드 투어로 봅니다.', den='The neo-Renaissance opera house on Andrássy Avenue, whose restored gilded auditorium you can see on a guided tour.', maps='Hungarian State Opera',
              visit=dict(min=60, max=75, s='https://www.opera.hu/en/about-us/guided-tours/operatour-8211-guided-tours-at-the-restored-opera-house/', n='영어 투어는 매일 13:30·15:00·16:30에 약 1시간, 12,000포린트입니다. 표는 일주일 전부터 온라인이나 매표소에서 팔고, 공연·리허설 중엔 투어가 없습니다.|English tours daily at 13:30, 15:00 and 16:30, about an hour, 12,000 HUF; tickets go on sale a week ahead online or at the box office, with no tours during performances or rehearsals.', k='2026-11'))),
    (12, dict(ko='도하니 거리 유대교 회당', en='Dohány Street Synagogue', dko='유럽에서 가장 큰 유대교 회당으로, 무어 양식 건물과 홀로코스트 추모 정원이 있습니다.', den='Europe’s largest synagogue, in Moorish style, with a Holocaust memorial garden.', maps='Dohány Street Synagogue',
              visit=dict(min=60, max=90, s='https://www.dohany-zsinagoga.hu/', n='관람 시간은 공식 사이트에서 확인하세요. 들어갈 때 보안 검색이 있습니다.|Check visiting hours on the official site; there is a security check at the entrance.', k='2026-11'))),
    (13, dict(ko='다뉴브 강가의 신발', en='Shoes on the Danube Bank', dko='1944~45년 강가에서 희생된 유대인을 기리는 철제 신발 60켤레의 추모비입니다.', den='Sixty pairs of iron shoes along the river, a memorial to the Jews shot on the bank in 1944–45.', maps='Shoes on the Danube Bank',
              visit=dict(min=10, max=15, n='국회의사당 남쪽 강변에 있으며 언제든 볼 수 있습니다.|On the embankment just south of Parliament, open at all times.'))),
    (14, dict(ko='머르기트 섬', en='Margaret Island', dko='다뉴브강 한가운데 길게 뻗은 공원 섬으로, 음악 분수와 중세 수도원 유적, 산책로가 있습니다.', den='A long park island in the middle of the Danube, with a musical fountain, medieval convent ruins and paths.', maps='Margaret Island Budapest',
              visit=dict(min=60, max=120, n='머르기트 다리에서 걸어 들어가며 무료입니다. 음악 분수는 따뜻한 계절에만 켭니다.|Walk in from Margaret Bridge, free; the musical fountain runs only in the warm months.'))),
    (15, dict(ko='테러 하우스', en='House of Terror', dko='나치와 공산 정권이 비밀경찰 본부로 쓴 건물에 독재 시대의 공포를 기록한 박물관입니다.', den='The building used as secret-police headquarters by the Nazi and Communist regimes, now a museum of their terror.', maps='House of Terror Museum',
              visit=dict(min=90, max=120, c='mon', s='https://www.terrorhaza.hu/en/visitor-information/opening-hours', n='화~일 10:00~18:00(매표 17:30까지)에 열고 월요일에 쉽니다. 4,000포린트이며 온라인 판매는 없습니다. 12월 24~26일과 1월 1일은 휴관합니다.|Open Tuesday to Sunday 10:00–18:00 (tickets until 17:30), closed Mondays; 4,000 HUF, sold on site only. Closed 24–26 December and 1 January.', k='2026-11'))),
    (16, dict(ko='에스테르곰 대성당', en='Esztergom Basilica', dko='다뉴브 굽이 언덕 위에 선 헝가리에서 가장 큰 성당으로, 돔에 오르면 강 건너 슬로바키아까지 보입니다.', den='Hungary’s largest church, on a hill at the Danube Bend, whose dome looks across the river into Slovakia.', maps='Esztergom Basilica', group=DAY,
              visit=dict(min=180, max=300, s='https://www.bazilika-esztergom.hu/', n='성당은 무료이고 10~12월엔 8:00~17:00에 엽니다. 돔·지하 묘소·보물관 통합권 5,600포린트, 돔은 11월부터 16:00까지입니다. 부다페스트에서 기차와 버스로 약 1시간 30분입니다.|The church is free, open 8:00–17:00 from October to December; dome, crypt and treasury combined 5,600 HUF, the dome closing at 16:00 from November. About 1 hr 30 by train and bus from Budapest.', k='2026-11'))),
]
COPENHAGEN = [
    (8, dict(ko='로센보르 성', en='Rosenborg Castle', dko='크리스티안 4세의 르네상스 성으로, 지하 보물실에 덴마크 왕관과 왕실 보석이 있습니다.', den='Christian IV’s Renaissance castle, with the Danish crown jewels in its treasury.', maps='Rosenborg Castle',
             visit=dict(min=60, max=90, b='rec', s='https://denkongeligesamling.dk/en/rosenborg-castle/plan-your-visit/opening-hours/', n='11월 2일~12월 23일엔 화~일 10:00~16:00(월요일 휴관), 그 밖엔 대체로 매일 10:00~17:00입니다. 10분 단위 시간 지정 입장이고 성인 온라인 140크로네입니다. 뇌레포트역에서 200m.|From 2 November to 23 December open Tuesday to Sunday 10:00–16:00 (closed Mondays), otherwise mostly daily 10:00–17:00. Timed entry every ten minutes; adults DKK 140 online. 200 m from Nørreport station.', k='2026-11',
                        x=[('2026년 12월 24·25일은 휴관합니다.|Closed 24 and 25 December 2026.', '2026-12-25')]))),
    (9, dict(ko='스트뢰에', en='Strøget', dko='시청 광장에서 콩겐스 뉘토르까지 이어지는 유럽에서 가장 긴 보행자 쇼핑 거리 가운데 하나입니다.', den='One of Europe’s longest pedestrian shopping streets, from City Hall Square to Kongens Nytorv.', maps='Strøget Copenhagen',
             visit=dict(min=45, max=90))),
    (10, dict(ko='덴마크 국립 박물관', en='National Museum of Denmark', dko='바이킹 유물과 청동기 시대 ‘태양 마차’ 등 덴마크 역사를 한곳에 모은 국립 박물관입니다.', den='Denmark’s history in one place, from Viking finds to the Bronze Age Sun Chariot.', maps='National Museum of Denmark',
              visit=dict(min=120, max=150, c='mon', s='https://en.natmus.dk/', n='보통 화~일 10:00~17:00에 열고 월요일에 쉽니다. 18세 미만은 무료입니다.|Usually open Tuesday to Sunday 10:00–17:00, closed Mondays; under-18s free.'))),
    (11, dict(ko='뉘 칼스베르 글립토테크', en='Ny Carlsberg Glyptotek', dko='칼스베르 맥주 가문이 모은 고대 조각과 로댕·인상파 그림을 야자수 겨울 정원과 함께 보는 미술관입니다.', den='The Carlsberg brewing family’s collection of ancient sculpture, Rodin and the Impressionists, around a palm-filled winter garden.', maps='Ny Carlsberg Glyptotek',
              visit=dict(min=90, max=120, c='mon', s='https://glyptoteket.com/visit/opening-hours', n='화~일 10:00~17:00(목요일 21:00까지)에 열고 월요일에 쉽니다. 성인 150크로네(온라인 135), 매달 마지막 수요일은 무료입니다. 중앙역에서 걸어서 5~10분.|Open Tuesday to Sunday 10:00–17:00 (Thursday until 21:00), closed Mondays. Adults DKK 150 (135 online); free on the last Wednesday of the month. 5–10 min on foot from Central Station.', k='2026-11',
                         x=[('2026년 12월 23~26일, 2027년 1월 1일은 휴관합니다.|Closed 23–26 December 2026 and 1 January 2027.', '2027-01-01')]))),
    (12, dict(ko='카스텔레트', en='Kastellet', dko='별 모양 해자와 성벽이 그대로 남은 17세기 요새로, 붉은 막사 사이와 성벽 위를 걸으며 인어공주상까지 이어집니다.', den='A 17th-century star-shaped fortress with its moats and ramparts intact; walk among the red barracks and along the walls to the Little Mermaid.', maps='Kastellet Copenhagen',
              visit=dict(min=30, max=45, n='무료로 들어가 산책합니다.|Free to walk in.'))),
    (13, dict(ko='대리석 교회', en='Marble Church', dko='아말리엔보르 궁전 바로 뒤의 거대한 초록 돔 교회로, 주말엔 돔 꼭대기에 오를 수 있습니다.', den='The great green-domed church right behind Amalienborg, whose dome you can climb at weekends.', maps="Frederik's Church Copenhagen",
              visit=dict(min=20, max=45, s='https://www.marmorkirken.dk/', n='월~목·토 10~17시, 금 12~17시, 일 13~17시에 열고 예배·공연 중엔 볼 수 없습니다. 돔 투어는 토·일 13:30(50크로네, 예약 불가·선착순 15명).|Open Monday–Thursday and Saturday 10:00–17:00, Friday 12:00–17:00, Sunday 13:00–17:00; closed to visitors during services and concerts. Dome tours Saturday and Sunday at 13:30 (DKK 50, first 15 people, no booking).', k='2026-11',
                         x=[('2026년 11월 21·28·29일은 문을 닫습니다.|Closed 21, 28 and 29 November 2026.', '2026-11-29')]))),
    (14, dict(ko='디자인 뮤지엄 덴마크', en='Designmuseum Denmark', dko='옛 왕립 병원 건물에 덴마크 의자와 북유럽 가구·공예 디자인을 모은 박물관입니다.', den='Danish chairs and Nordic furniture and craft design in the old royal hospital.', maps='Designmuseum Danmark',
              visit=dict(min=60, max=90, c='mon', s='https://designmuseum.dk/en/', n='화~일 10:00~18:00(목요일 20:00까지)에 엽니다. 성인 140크로네. 지하철 마르모르키르켄역에서 300m.|Open Tuesday to Sunday 10:00–18:00 (Thursday until 20:00). Adults DKK 140. 300 m from Marmorkirken metro.', k='2026-11'))),
    (15, dict(ko='크론보르 성', en='Kronborg Castle', dko='셰익스피어 〈햄릿〉의 무대가 된 헬싱외르의 세계유산 르네상스 성으로, 바다 건너 스웨덴이 보입니다.', den='The World Heritage Renaissance castle at Helsingør, the setting of Shakespeare’s Hamlet, looking across the strait to Sweden.', maps='Kronborg Castle', group=DAY,
              visit=dict(min=180, max=240, c='mon', s='https://kronborg.dk/en/page/kronborg-castle-opening-hours', n='11~3월엔 화~일 10:00~16:00(월요일 휴관), 3월 말~10월엔 매일 10:00~17:00입니다. 성인 150크로네(온라인 135). 코펜하겐에서 기차로 헬싱외르역까지 가서 걸어갑니다(약 1시간).|November to March open Tuesday to Sunday 10:00–16:00 (closed Mondays), late March to October daily 10:00–17:00. Adults DKK 150 (135 online). By train to Helsingør, then a walk (about an hour in all).', k='2026-11',
                         x=[('2026년 12월 24·25·31일은 휴관합니다.|Closed 24, 25 and 31 December 2026.', '2026-12-31')]))),
    (16, dict(ko='프레데릭스보르 성', en='Frederiksborg Castle', dko='호수 위 세 섬에 지은 덴마크 최대의 르네상스 성으로, 국립 역사 박물관과 바로크 정원이 있습니다.', den='Denmark’s largest Renaissance castle, on three islands in a lake, home to the Museum of National History and a Baroque garden.', maps='Frederiksborg Castle', group=DAY,
              visit=dict(min=150, max=210, c='daily', s='https://frederiksborg.dk/en/visit/', n='일 년 내내 매일 10:00~17:00에 엽니다. 성인 125크로네. S-tog로 힐레뢰드역에 가서 걸어서 약 15분이나 301·302번 버스(약 1시간).|Open every day of the year, 10:00–17:00. Adults DKK 125. S-train to Hillerød, then 15 min on foot or bus 301/302 (about an hour in all).', k='2026-11'))),
    (17, dict(ko='루이지애나 현대 미술관', en='Louisiana Museum of Modern Art', dko='바다가 내려다보이는 정원에 자코메티·헨리 무어 조각이 놓인 세계적인 현대 미술관입니다.', den='A world-class modern art museum in a sculpture garden by the sea, with Giacometti and Henry Moore.', maps='Louisiana Museum of Modern Art', group=DAY,
              visit=dict(min=180, max=240, c='mon', s='https://louisiana.dk/en/plan-your-visit/opening-hours/', n='화~금 11:00~22:00, 토·일 11:00~18:00에 열고 월요일에 쉽니다. 성인 145크로네, 예약은 필요 없습니다. 기차로 훔레베크역에 내려 걸어갑니다(약 1시간).|Open Tuesday–Friday 11:00–22:00, weekends 11:00–18:00; closed Mondays. Adults DKK 145, no booking needed. Train to Humlebæk, then a walk (about an hour in all).', k='2026-11',
                         x=[('2026년 12월 24·25·31일, 2027년 1월 1일은 휴관합니다.|Closed 24, 25 and 31 December 2026 and 1 January 2027.', '2027-01-01')]))),
]

ITIN = {
    'budapest': ("""  budapest: {
    days: [
      ['국회의사당과 부다 언덕|Parliament & Castle Hill', 1, 5, 7, 9, 2],
      ['페스트|Pest', 6, 8, 4, 3],
    ],
  },""", [
        ('부다 왕궁 언덕|Castle Hill', [5, 7, 9, 2, 10]),
        ('국회의사당과 다뉴브|Parliament & the Danube', [14, 1, 13, 8, 6]),
        ('안드라시 거리와 시티 파크|Andrássy Avenue & City Park', [12, 11, 15, 4, 3]),
    ], [('에스테르곰|Esztergom', [16])]),
    'copenhagen': ("""  copenhagen: {
    days: [
      ['시내|City centre', 5, 1, 2, 7, 6, 4],
      ['티볼리|Tivoli', 3],
    ],
  },""", [
        ('인어공주와 왕궁|The Little Mermaid & the palace', [12, 5, 14, 13, 1, 2]),
        ('로센보르와 구시가|Rosenborg & the old town', [8, 7, 9, 6, 10, 4]),
        ('글립토테크와 티볼리|Glyptotek & Tivoli', [11, 3]),
    ], [('크론보르 성|Kronborg Castle', [15]), ('프레데릭스보르 성|Frederiksborg Castle', [16]), ('루이지애나 미술관|Louisiana', [17])]),
}


def itin_text(cid, days, trips):
    key = f"'{cid}'" if '-' in cid else cid
    d = ''.join(f"      ['{t}', {', '.join(map(str, ns))}],\n" for t, ns in days)
    tr = ', '.join(f"['{t}', {', '.join(map(str, ns))}]" for t, ns in trips)
    return f"  {key}: {{\n    days: [\n{d}    ],\n    trips: [{tr}],\n  }},"


def big_order(cid, days, trips):
    order = []
    for k, (t, ns) in enumerate(days, 1):
        ko, en = t.split('|')
        order += [(n, (f'{k}일차 · {ko}', f'Day {k} · {en}')) for n in ns]
    order += [(n, tuple(DAY)) for _, ns in trips for n in ns]
    return order


def main():
    cities = rd('cities.ts')
    cities = add_sights(cities, 'budapest', BUDAPEST, 'visit-central.ts')
    cities = add_sights(cities, 'copenhagen', COPENHAGEN, 'visit-nordic.ts')
    files = {'budapest': 'itinerary-north.ts', 'copenhagen': 'itinerary-north.ts'}
    for cid, (old, days, trips) in ITIN.items():
        it = rd(files[cid])
        assert old in it, cid
        wr(files[cid], it.replace(old, itin_text(cid, days, trips)))
        cities = reorder(cities, cid, big_order(cid, days, trips))
    # the other cities of the two countries: itinerary order, keeping any 근교 header they already have
    its = rd('itinerary-central.ts') + rd('itinerary-north.ts') + rd('itinerary.ts')
    for cc in ('hu', 'dk'):
        for cid in re.findall(rf'\n  \{{\n    id: "([a-z-]+)",\n    countryId: "{cc}"', cities):
            if cid in ITIN:
                continue
            by = blocks(cities, cid)
            order = itinerary_order(its, cid, set(by))
            cities = reorder(cities, cid, [(n, read_group(by[n])) for n in order])
            print(cid, order)
    wr('cities.ts', cities)


if __name__ == '__main__':
    main()
