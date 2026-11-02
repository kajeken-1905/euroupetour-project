#!/usr/bin/env python3
"""Sight review step 1, Belgium (2026-11-02, user request): more sights for Brussels, Bruges, Ghent and Antwerp;
Brussels gets a two-day itinerary plus Waterloo, the others a longer walking order; every Belgian list follows its
itinerary. Hours from the official sites where they could be read, checked that day. Run once."""
import re

from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_hu_dk import big_order, itin_text

DAY = ['근교 당일치기', 'Day trip']
K = '2026-11'

BRUSSELS = [
    (9, dict(ko='생튀베르 갤러리', en='Galeries Royales Saint-Hubert', dko='1847년에 문을 연 유리 지붕 아케이드로, 초콜릿 가게와 카페, 서점이 늘어서 있습니다.', den='The glass-roofed arcade of 1847, lined with chocolatiers, cafés and bookshops.', maps='Galeries Royales Saint-Hubert',
             visit=dict(min=20, max=30, n='무료이며 언제든 지나갈 수 있습니다. 그랑플라스 바로 북쪽입니다.|Free and always open, just north of the Grand-Place.'))),
    (10, dict(ko='생미셸 생구들 대성당', en='Cathedral of St Michael and St Gudula', dko='브뤼셀의 수호성인에게 바친 고딕 대성당으로, 16세기 스테인드글라스와 두 개의 흰 탑이 있습니다.', den='The Gothic cathedral of Brussels’ patron saints, with 16th-century stained glass and twin white towers.', maps='Cathedral of St. Michael and St. Gudula',
              visit=dict(min=30, max=45, s='https://cathedralisbruxellensis.be/en/visit/', n='성당은 무료이고 평일 8:00~18:00에 엽니다. 주말은 미사 때문에 시간이 짧습니다. 지하 묘소는 예약해야 볼 수 있습니다.|The church is free, open weekdays 8:00–18:00 with shorter hours at weekends around services; the crypt is by appointment.', k=K))),
    (11, dict(ko='벨기에 만화 센터', en='Comic Art Museum', dko='오르타가 설계한 아르누보 직물 상점에 땡땡과 스머프 등 벨기에 만화의 역사를 모은 박물관입니다.', den='Belgian comics from Tintin to the Smurfs, in an Art Nouveau textile store designed by Horta.', maps='Belgian Comic Strip Center',
              visit=dict(min=75, max=90, c='mon', s='https://www.comicscenter.net/en/practical-information/opening-hours-and-admission-fees', n='화~일 10:00~18:00에 열고 월요일, 12월 25일, 1월 1일에 쉽니다.|Open Tuesday to Sunday 10:00–18:00; closed Mondays, 25 December and 1 January.', k=K))),
    (12, dict(ko='생캉트네르 공원', en='Parc du Cinquantenaire', dko='독립 50주년을 기념한 개선문이 선 공원으로, 미술·역사 박물관과 자동차 박물관이 양옆에 있습니다.', den='The park of Belgium’s 50th-anniversary triumphal arch, flanked by the Art & History Museum and Autoworld.', maps='Parc du Cinquantenaire',
              visit=dict(min=60, max=120, s='https://artandhistory.museum/en/practical-information', n='공원은 무료입니다. 미술·역사 박물관은 화~금 9:30~17:00, 주말 10:00~17:00에 열고 월요일에 쉽니다.|The park is free. The Art & History Museum opens Tuesday to Friday 9:30–17:00 and weekends 10:00–17:00, closed Mondays.', k=K))),
    (13, dict(ko='오르타 미술관', en='Horta Museum', dko='아르누보 건축가 빅토르 오르타가 살던 집으로, 유네스코 세계유산인 곡선 계단과 유리 천장을 봅니다.', den='Victor Horta’s own house, a World Heritage Art Nouveau interior of curving stairs and glass ceilings.', maps='Horta Museum',
              visit=dict(min=60, max=75, c='mon', b='req', s='https://www.hortamuseum.be/en/Welcome/your-visit', n='온라인 예약이 필수이고 월요일에 쉽니다. 평일은 오후에만 엽니다. 생질 지역이라 시내에서 트램으로 갑니다.|Booking online is required; closed Mondays and open only in the afternoon on weekdays. It is in Saint-Gilles, a tram ride from the centre.', k=K))),
    (14, dict(ko='워털루 전장', en='Waterloo Battlefield', dko='나폴레옹이 패한 1815년 전투의 들판으로, 사자의 언덕에 오르고 기념관과 파노라마 그림을 봅니다.', den='The 1815 battlefield of Napoleon’s defeat: climb the Lion’s Mound and see the memorial museum and panorama.', maps='Memorial 1815', group=DAY,
              visit=dict(min=180, max=240, s='https://waterloo1815.be/en/plan-your-visit/practical-information', n='11~3월엔 매일 10:00~17:30에 엽니다. 통합권 Pass 1815(€30)로 기념관·파노라마·사자의 언덕·우고몽 농장을 모두 봅니다. 브뤼셀에서 기차와 버스로 약 1시간입니다.|Open daily 10:00–17:30 from November to March; the Pass 1815 (€30) covers the memorial, panorama, Lion’s Mound and Hougoumont farm. About an hour from Brussels by train and bus.', k=K))),
]
BRUGES = [
    (7, dict(ko='성모 마리아 성당', en='Church of Our Lady', dko='115m 벽돌 첨탑이 솟은 성당으로, 미켈란젤로의 〈성모자상〉과 부르고뉴 공작들의 무덤이 있습니다.', den='The church of the 115 m brick spire, with Michelangelo’s Madonna and Child and the tombs of the Burgundian dukes.', maps='Church of Our Lady Bruges',
             visit=dict(min=30, max=45, s='https://www.museabrugge.be/en/visit/locations/olv-kerk-museum', n='월~토 9:30~17:00, 일요일 13:30~17:00에 엽니다. 성당은 무료이고 미켈란젤로 조각이 있는 박물관 구역은 유료입니다. 결혼식·장례식 때는 닫습니다.|Open Monday to Saturday 9:30–17:00, Sundays 13:30–17:00. The church is free; the museum section with the Michelangelo is ticketed. Closed during weddings and funerals.', k=K))),
    (8, dict(ko='부르흐 광장과 시청사', en='Burg and City Hall', dko='1376년에 지은 플랑드르에서 가장 오래된 시청사가 선 광장으로, 고딕 홀의 천장 장식이 볼거리입니다.', den='The square of Flanders’ oldest town hall (1376), whose Gothic Hall has a painted vaulted ceiling.', maps='Stadhuis Brugge',
             visit=dict(min=30, max=45, s=None, n='광장은 언제든 볼 수 있고 시청사 고딕 홀은 유료입니다.|The square is always open; the Gothic Hall is ticketed.'))),
    (9, dict(ko='베긴회 수녀원', en='Begijnhof', dko='흰 집들이 잔디 마당을 둘러싼 13세기 베긴회 공동체로, 봄엔 수선화가 핍니다. 유네스코 세계유산입니다.', den='The 13th-century beguinage of white houses round a lawn, bright with daffodils in spring; a World Heritage site.', maps='Begijnhof Brugge',
             visit=dict(min=20, max=30, n='마당은 무료이며 대략 6:30~18:30에 엽니다. 조용히 둘러봐야 합니다.|The courtyard is free, open roughly 6:30–18:30; please keep quiet.'))),
    (10, dict(ko='크라위스베스트 풍차', en='Kruisvest windmills', dko='옛 성벽 둑을 따라 선 풍차 네 개로, 운하를 따라 걷는 산책로에서 봅니다.', den='Four windmills on the old rampart, seen from the canal-side path.', maps='Sint-Janshuismolen',
              visit=dict(min=30, max=45, n='둑길은 무료로 언제든 걸을 수 있습니다. 풍차 내부는 여름철에만 공개합니다.|The rampart path is free and always open; the mills open inside only in summer.'))),
    (11, dict(ko='더 할버 마안 양조장', en='De Halve Maan Brewery', dko='1856년부터 이어 온 구시가의 가족 양조장으로, 투어를 마치면 브뤼흐서 조트 맥주를 맛봅니다.', den='The old-town family brewery since 1856, whose tour ends with a glass of Brugse Zot.', maps='Brouwerij De Halve Maan',
              visit=dict(min=60, max=75, b='rec', s='https://www.halvemaan.be/en', n='투어는 온라인 예약을 권하며 여름엔 일찍 찹니다. 맥주 한 잔이 포함됩니다.|Book the tour online, especially in summer; a beer is included.'))),
]
GHENT = [
    (7, dict(ko='성 미카엘 다리와 코렌레이', en='St Michael’s Bridge and Korenlei', dko='세 개의 탑과 강변 길드 하우스가 한눈에 보이는 다리로, 겐트에서 가장 유명한 풍경입니다.', den='The bridge with Ghent’s classic view of its three towers and the guildhalls along the river.', maps='Sint-Michielsbrug',
             visit=dict(min=15, max=20, n='무료이며 언제든 볼 수 있습니다. 해 질 녘과 야경이 좋습니다.|Free and always open; best at dusk and after dark.'))),
    (8, dict(ko='성 니콜라스 성당', en='St Nicholas’ Church', dko='회색 투르네 석회암으로 지은 13세기 스헬더 고딕 성당으로, 겐트 상인들의 교회였습니다.', den='The 13th-century Scheldt Gothic church of grey Tournai stone, built for Ghent’s merchants.', maps='Sint-Niklaaskerk Gent',
             visit=dict(min=20, max=30, n='무료입니다. 대체로 화~일 10:00~17:00, 월요일 14:00~17:00에 엽니다.|Free; usually open Tuesday to Sunday 10:00–17:00 and Monday 14:00–17:00.'))),
    (9, dict(ko='프레이다흐마르크트', en='Vrijdagmarkt', dko='중세 때부터 금요일 시장이 서던 광장으로, 야코프 반 아르테벨더 동상과 맥주 펍이 둘러싸고 있습니다.', den='The square of the medieval Friday market, round the statue of Jacob van Artevelde and its beer pubs.', maps='Vrijdagmarkt Gent',
             visit=dict(min=15, max=20, n='무료이며 금요일 오전엔 시장이 섭니다.|Free; a market is held on Friday mornings.'))),
]
ANTWERP = [
    (7, dict(ko='플란틴 모레투스 박물관', en='Plantin-Moretus Museum', dko='16세기 인쇄소와 집이 그대로 남은 유네스코 세계유산으로, 세계에서 가장 오래된 인쇄기가 있습니다.', den='A 16th-century printing house and home preserved whole, a World Heritage site with the oldest printing presses in the world.', maps='Museum Plantin-Moretus',
             visit=dict(min=90, max=120, c='mon', n='화~일 10:00~17:00에 열고 월요일, 1월 1일, 5월 1일, 11월 1일, 12월 25일에 쉽니다. 현금은 받지 않습니다.|Open Tuesday to Sunday 10:00–17:00; closed Mondays and 1 January, 1 May, 1 November and 25 December. Card payment only.'))),
    (8, dict(ko='헷 스테인', en='Het Steen', dko='스헬더 강가에 선 중세 성채로, 안트베르펜에서 가장 오래된 건물입니다.', den='The medieval fortress on the Scheldt, Antwerp’s oldest building.', maps='Het Steen Antwerpen',
             visit=dict(min=15, max=30, n='외관과 강변은 언제든 볼 수 있고 안에 관광 안내소가 있습니다.|The outside and the riverfront are always open; the tourist office is inside.'))),
    (9, dict(ko='안트베르펜 왕립 미술관(KMSKA)', en='Royal Museum of Fine Arts Antwerp (KMSKA)', dko='11년의 공사 끝에 2022년 다시 연 미술관으로, 루벤스·반 에이크·앙소르의 작품이 있습니다.', den='The fine-arts museum reopened in 2022 after eleven years’ work, with Rubens, van Eyck and Ensor.', maps='KMSKA',
             visit=dict(min=120, max=150, b='req', s='https://kmska.be/en/opening-hours-and-tickets', n='평일 10:00~17:00, 주말·공휴일 10:00~18:00에 엽니다. 시간 지정 예약이 필요하고 뮤지엄 패스가 있어도 예약해야 합니다.|Open weekdays 10:00–17:00, weekends and holidays 10:00–18:00. A timed booking is needed, even with a museum pass.', k=K))),
]

BRUSSELS_IT = ('  brussels: [3, 4, 2, 5, 7, 6, 1, 8],', [
    ('아토미움과 그랑플라스|Atomium & the Grand-Place', [3, 4, 11, 10, 9, 2, 5]),
    ('몽데자르와 생캉트네르|Mont des Arts & Cinquantenaire', [7, 6, 1, 8, 12, 13]),
], [('워털루|Waterloo', [14])])
SMALL_IT = {
    'bruges': ('  bruges: [1, 2, 5, 3, 6, 4],', '  bruges: [10, 1, 2, 8, 5, 3, 6, 7, 11, 9, 4],'),
    'ghent': ('  ghent: [6, 2, 4, 1, 3, 5],', '  ghent: [6, 2, 4, 8, 7, 1, 3, 5, 9],'),
    'antwerp': ('  antwerp: [1, 6, 2, 4, 3, 5],', '  antwerp: [1, 6, 9, 7, 2, 4, 8, 3, 5],'),
}


def main():
    cities = rd('cities.ts')
    for cid, items in (('brussels', BRUSSELS), ('bruges', BRUGES), ('ghent', GHENT), ('antwerp', ANTWERP)):
        for _, h in items:
            h['visit'] = {k: v for k, v in h['visit'].items() if v is not None}
        cities = add_sights(cities, cid, items, 'visit-benelux.ts')
    it = rd('itinerary-central.ts')
    old, days, trips = BRUSSELS_IT
    assert old in it
    it = it.replace(old, itin_text('brussels', days, trips))
    for cid, (a, b) in SMALL_IT.items():
        assert a in it, cid
        it = it.replace(a, b)
    wr('itinerary-central.ts', it)
    cities = reorder(cities, 'brussels', big_order('brussels', days, trips))
    for cid in re.findall(r'\n  \{\n    id: "([a-z-]+)",\n    countryId: "be"', cities):
        if cid == 'brussels':
            continue
        by = blocks(cities, cid)
        order = itinerary_order(it, cid, set(by))
        cities = reorder(cities, cid, [(n, read_group(by[n])) for n in order])
        print(cid, order)
    wr('cities.ts', cities)


if __name__ == '__main__':
    main()
