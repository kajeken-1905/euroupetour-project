#!/usr/bin/env python3
"""Six-country review step 2, batch 1 (2026-11-03, user request): Leiden, Mechelen and Olomouc as new cities. Reuses
the batch-3 writer (add_daytrip_places3.main). Hours from the sights' own pages or the city tourist boards where they
could be read; rail times from Transitous (station to station, a weekday morning). Run once."""
import add_daytrip_places3 as T
from add_daytrip_places3 import trip

NEAR = ('근교', 'Nearby')
K = '2026-11'
NL = "      ta('9292', { ko: '전국 길찾기·표', en: 'Nationwide routes and tickets' }),\n      ta('ns'),\n"
BE = "      ta('de-lijn', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),\n      ta('sncb'),\n"
CZ = "      ta('cd'),\n"


def a(ko, en, q, tag, note):
    return (ko, en, q, tag, note)


CITIES = [
    dict(id='leiden', country='nl', after='giethoorn', ko='레이던', en='Leiden', native='Leiden', lat=52.1601, lng=4.4970,
         blurb=['렘브란트가 태어난 운하 도시이자 네덜란드에서 가장 오래된 대학 도시. 이집트 신전이 있는 고대 유물 박물관과 1590년의 식물원, 공룡 박물관이 걸어서 모여 있습니다.',
                'Rembrandt’s birthplace and the oldest university town in the Netherlands, a canal city where an antiquities museum with an Egyptian temple, a botanical garden of 1590 and a dinosaur museum lie a short walk apart.'],
         highlights=[
             dict(ko='라펜뷔르흐 운하와 피테르스케르크', en='Rapenburg and the Pieterskerk', dko='대학 건물과 저택이 늘어선 레이던에서 가장 아름다운 운하 길로, 필그림 파더스가 신대륙으로 떠나기 전 예배한 피테르스케르크가 가깝습니다.', den='Leiden’s finest canal, lined with university buildings and mansions, near the Pieterskerk where the Pilgrim Fathers worshipped before sailing for America.', maps='Rapenburg Leiden',
                  visit=dict(min=45, max=60, n='운하 길은 무료로 언제든 걸을 수 있습니다. 피테르스케르크 내부는 유료이고 행사 때는 닫습니다.|The canal walk is free and always open; the Pieterskerk charges for entry and closes for events.')),
             dict(ko='국립 고대 유물 박물관', en='National Museum of Antiquities', dko='이집트에서 통째로 옮겨 온 타파 신전과 미라, 그리스·로마 유물을 모은 네덜란드 국립 고고학 박물관입니다.', den='The Dutch national archaeology museum, with the Temple of Taffeh brought whole from Egypt, mummies and Greek and Roman finds.', maps='Rijksmuseum van Oudheden',
                  visit=dict(min=90, max=120, s='https://www.rmo.nl/en/', n='매일 10:00~17:00에 열고 목요일엔 저녁 19:00~22:00에도 엽니다. 뮤지엄카드가 있으면 무료입니다.|Open daily 10:00–17:00, and Thursday evenings 19:00–22:00 too; free with the Museumkaart.', k=K)),
             dict(ko='호르튀스 보타니퀴스', en='Hortus botanicus Leiden', dko='1590년에 만든 네덜란드에서 가장 오래된 식물원으로, 시볼트를 기리는 일본 정원과 열대 온실이 있습니다.', den='The oldest botanical garden in the Netherlands, laid out in 1590, with a Japanese garden for Siebold and tropical glasshouses.', maps='Hortus botanicus Leiden',
                  visit=dict(min=60, max=90, n='겨울(9월 21일~3월 20일)엔 매일 10:00~17:00에 엽니다. 10월 3일과 12월 25일~1월 1일엔 쉽니다.|In winter (21 September–20 March) open daily 10:00–17:00; closed 3 October and 25 December–1 January.')),
             dict(ko='나투랄리스 생물 다양성 센터', en='Naturalis Biodiversity Center', dko='진짜 티라노사우루스 화석 ‘트릭스’가 있는 네덜란드 국립 자연사 박물관입니다.', den='The Dutch national natural history museum, home to Trix, a real Tyrannosaurus rex.', maps='Naturalis Biodiversity Center',
                  visit=dict(min=120, max=180, b='rec', s='https://www.naturalis.nl/en/museum/practical-info', n='매일 10:00~17:00에 엽니다. 입장 시간을 정해 온라인으로 사 두는 편이 좋고, 주말·방학엔 붐빕니다.|Open daily 10:00–17:00; buy a timed ticket online, as weekends and school holidays are busy.', k=K)),
             dict(ko='라컨할 미술관', en='Museum De Lakenhal', dko='옛 직물 회관에 자리한 시립 미술관으로, 젊은 렘브란트의 초기작과 루카스 반 레이던의 〈최후의 심판〉이 있습니다.', den='The city museum in the old cloth hall, with young Rembrandt’s early work and Lucas van Leyden’s Last Judgement.', maps='Museum De Lakenhal',
                  visit=dict(min=75, max=90, c='mon', s='https://www.lakenhal.nl/en/story/visitor-information-pratical-information', n='화~일 10:00~17:00에 열고 월요일에 쉽니다.|Open Tuesday to Sunday 10:00–17:00; closed Mondays.', k=K)),
             dict(ko='더 뷔르흐트', en='De Burcht', dko='시내 한가운데 흙 언덕 위에 남은 12세기 원형 성채로, 성벽 위를 한 바퀴 돌며 지붕들을 내려다봅니다.', den='A 12th-century round keep on an earth mound in the middle of town; walk the wall for a view over the roofs.', maps='Burcht van Leiden',
                  visit=dict(min=20, max=30, n='무료이며 낮 동안 엽니다.|Free; open during the day.')),
             dict(ko='풍차 박물관 더 팔크', en='Molen De Valk', dko='1743년에 지은 7층 높이 풍차로, 안의 계단을 올라 바람개비가 도는 발코니까지 갑니다.', den='A seven-storey windmill of 1743 whose stairs climb to the gallery beside the sails.', maps='Molenmuseum De Valk',
                  visit=dict(min=45, max=60, c='mon', s='https://www.molenmuseumdevalk.nl/en/bezoekersinformatie', n='화~일 10:00~17:00(마지막 입장 16:30)에 열고 월요일에 쉽니다.|Open Tuesday to Sunday 10:00–17:00 (last entry 16:30); closed Mondays.', k=K)),
         ],
         hubs="    air: [AMS('스히폴 공항까지 기차로 약 15분|About 15 min by train')],\n    rail: [['Leiden Centraal', '레이던 중앙역']],\n",
         hubs_file='hubs-central.ts', hubs_before='  giethoorn: {\n', itin_file='itinerary-central.ts', itin_before='  giethoorn: [',
         itinerary=[4, 7, 5, 6, 1, 2, 3],
         season='3월 중순~5월 초엔 레이던 중앙역에서 쾨켄호프 튤립 공원행 버스가 다닙니다. 10월 3일 해방 기념 축제 때는 시내가 붐비고 식물원이 쉽니다.|From mid-March to early May buses run from Leiden Centraal to the Keukenhof tulip gardens. The town is packed for the 3 October relief festival, when the botanical garden closes.',
         visit_file='visit-benelux.ts', visit_after=r"^  'giethoorn-h\d+': v\(.*\),\n",
         stay=[a('운하 안쪽 구시가', 'Inside the canal ring', 'Breestraat, Leiden', '걸어서 다니기|On foot', '박물관과 운하, 식당이 모두 걸어서 10분 안에 있습니다.|Museums, canals and restaurants are all within a ten-minute walk.'),
               a('암스테르담·헤이그에서 다녀오기', 'Base in Amsterdam or The Hague', 'Leiden Centraal', '당일치기|Day trip', '암스테르담에서 약 35분, 헤이그에서 약 11분이라 하루에 다녀오기 쉽습니다.|About 35 min from Amsterdam and 11 from The Hague by train, an easy day out.')],
         stay_before='  giethoorn: [',
         routes=[('routes-central.ts', r"^  r\('amsterdam', 'haarlem', .*\),\n",
                  "  r('amsterdam', 'leiden', 'train', 36),\n"
                  "  r('leiden', 'the-hague', 'train', 11),\n"
                  "  r('leiden', 'haarlem', 'train', 19),\n"
                  "  r('leiden', 'delft', 'train', 20),\n"
                  "  r('leiden', 'rotterdam', 'train', 33),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다닙니다. 나투랄리스와 풍차는 중앙역 바로 옆이고, 쾨켄호프 버스도 중앙역에서 떠납니다.', en='Walk the old town; Naturalis and the windmill are right by Leiden Centraal, where the Keukenhof buses also leave.'),
         apps=NL, transit_before='  giethoorn: {', places=None,
         daytrips=[('amsterdam', trip('leiden', '기차로 약 35분. 운하 길을 걷고 국립 고대 유물 박물관과 1590년 식물원을 봅니다.|About 35 min by train: the canals, the National Museum of Antiquities and the botanical garden of 1590.')),
                   ("'the-hague'", trip('leiden', '기차로 약 11분. 렘브란트의 도시에서 운하와 박물관을 봅니다.|11 min by train: Rembrandt’s town of canals and museums.'))]),
    dict(id='mechelen', country='be', after='dinant', ko='메헬렌', en='Mechelen', native='Mechelen', lat=51.0280, lng=4.4800,
         blurb=['브뤼셀과 안트베르펜 사이의 옛 부르고뉴 수도. 유네스코 종탑인 성 롬바우츠 탑에 오르고, 홀로코스트 기억관과 베긴회 수녀원, 맥주 양조장을 걸어서 둘러봅니다.',
                'The old Burgundian capital between Brussels and Antwerp: climb St Rumbold’s World Heritage tower and walk to a Holocaust memorial, a beguinage and a brewery.'],
         highlights=[
             dict(ko='성 롬바우츠 대성당과 탑', en='St Rumbold’s Cathedral and Tower', dko='97m 높이 유네스코 종탑이 솟은 고딕 대성당으로, 계단 538개를 올라 유리 전망대에서 브뤼셀까지 내다봅니다.', den='The Gothic cathedral beneath a 97 m World Heritage belfry; climb 538 steps to a glass skywalk that looks as far as Brussels.', maps='Sint-Romboutskathedraal Mechelen',
                  visit=dict(min=60, max=90, b='rec', s='https://www.visitmechelen.be/en/st-rumbolds-tower', n='대성당은 무료이며 월~토 8:30~17:30, 일요일 13:00~17:30에 엽니다. 탑은 유료이고 20분마다 20명씩 오르니 예약하는 편이 좋습니다(마지막 입장 17:00, 12월 25일·1월 1일 휴무).|The cathedral is free, open Monday to Saturday 8:30–17:30 and Sundays 13:00–17:30. The tower is ticketed and lets up 20 people every 20 minutes, so book ahead (last entry 17:00; closed 25 December and 1 January).', k=K)),
             dict(ko='흐로테 마르크트와 시청', en='Grote Markt and Town Hall', dko='대성당 탑 아래 넓은 광장으로, 고딕과 르네상스가 섞인 시청과 길드 하우스가 둘러쌉니다.', den='The big square at the foot of the cathedral tower, framed by the half-Gothic, half-Renaissance town hall and guild houses.', maps='Grote Markt Mechelen',
                  visit=dict(min=20, max=30, n='무료이며 언제든 볼 수 있습니다.|Free and always open.')),
             dict(ko='사보이 궁', en='Hof van Savoye', dko='오스트리아의 마르가레테가 네덜란드를 다스리던 르네상스 궁전으로, 안뜰과 정원을 볼 수 있습니다.', den='The Renaissance palace from which Margaret of Austria governed the Low Countries; its courtyard and garden are open.', maps='Hof van Savoye Mechelen',
                  visit=dict(min=15, max=20, n='지금은 법원 건물이라 안뜰과 정원만 둘러봅니다(무료).|It is now a courthouse, so only the courtyard and garden are open (free).')),
             dict(ko='카제르너 도신', en='Kazerne Dossin', dko='벨기에의 유대인과 로마인이 아우슈비츠로 끌려간 옛 병영 옆에 세운 홀로코스트·인권 기억관입니다.', den='The Holocaust and human rights memorial and museum beside the barracks from which Belgium’s Jews and Roma were deported to Auschwitz.', maps='Kazerne Dossin',
                  visit=dict(min=90, max=120, c='wed', s='https://www.visitmechelen.be/en/kazerne-dossin', n='월·화·목·금 9:00~17:00, 주말 9:30~17:00에 열고 수요일과 유대교 신년·욤 키푸르, 12월 24·25·31일, 1월 1일에 쉽니다.|Open Monday, Tuesday, Thursday and Friday 9:00–17:00 and weekends 9:30–17:00; closed Wednesdays, Rosh Hashanah, Yom Kippur, 24, 25 and 31 December and 1 January.', k=K)),
             dict(ko='대베긴회 수녀원', en='Great Beguinage', dko='골목과 작은 집들이 미로처럼 이어진 유네스코 세계유산 베긴회 수녀원 지구입니다.', den='A World Heritage beguinage quarter, a maze of lanes and small houses.', maps='Groot Begijnhof Mechelen',
                  visit=dict(min=30, max=45, n='무료이며 주민이 사는 곳이라 조용히 둘러봅니다.|Free; people live here, so keep quiet.')),
             dict(ko='헷 앙커르 양조장', en='Het Anker Brewery', dko='베긴회 수녀원 옆에서 15세기부터 맥주를 빚어 온 양조장으로, 구던 카롤뤼스 맥주를 맛봅니다.', den='The brewery beside the beguinage, brewing since the 15th century, home of Gouden Carolus.', maps='Brouwerij Het Anker',
                  visit=dict(min=75, max=90, b='rec', s='https://www.visitmechelen.be/en/het-anker-brewery-distillery', n='가이드 투어는 정해진 시간에만 있고 인원이 적어 미리 예약해야 합니다. 시음 두 잔이 포함됩니다.|Guided tours run only at set times with small groups, so book ahead; two tastings are included.')),
         ],
         hubs="    air: [BRU('기차로 약 10분|About 10 min by train')],\n    rail: [['Mechelen', '메헬렌역']],\n",
         hubs_file='hubs-central.ts', hubs_before='  dinant: {\n', itin_file='itinerary-central.ts', itin_before='  dinant: [',
         itinerary=[2, 1, 3, 4, 5, 6],
         season='도시가 작아 하루면 충분하고 브뤼셀·안트베르펜 사이라 언제든 들르기 좋습니다. 대성당 탑은 날씨가 맑은 날 오르세요.|Small enough for a day and handy between Brussels and Antwerp at any time of year; climb the tower on a clear day.',
         visit_file='visit-benelux.ts', visit_after=r"^  'dinant-h\d+': v\(.*\),\n",
         stay=[a('흐로테 마르크트 주변', 'Around the Grote Markt', 'Grote Markt, Mechelen', '걸어서 다니기|On foot', '볼거리가 모두 광장에서 걸어서 15분 안에 있습니다.|Every sight is within 15 minutes’ walk of the square.'),
               a('브뤼셀·안트베르펜에서 다녀오기', 'Base in Brussels or Antwerp', 'Mechelen station', '당일치기|Day trip', '브뤼셀에서 기차로 약 20분, 안트베르펜에서 약 17분입니다.|About 20 min by train from Brussels and 17 from Antwerp.')],
         stay_before='  dinant: [',
         routes=[('routes-central.ts', r"^  r\('brussels', 'leuven', .*\),\n",
                  "  r('brussels', 'mechelen', 'train', 21),\n"
                  "  r('mechelen', 'antwerp', 'train', 17),\n"
                  "  r('mechelen', 'leuven', 'train', 25),\n"
                  "  r('mechelen', 'ghent', 'train', 48),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='역에서 흐로테 마르크트까지 걸어서 약 15분이고, 볼거리는 모두 걸어서 다닙니다.', en='About 15 min on foot from the station to the Grote Markt; every sight is walkable.'),
         apps=BE, transit_before='  dinant: {', places=None,
         daytrips=[('brussels', trip('mechelen', '기차로 약 20분. 성 롬바우츠 탑에 오르고 카제르너 도신과 베긴회 수녀원을 봅니다.|About 20 min by train: climb St Rumbold’s Tower, then Kazerne Dossin and the beguinage.')),
                   ('antwerp', trip('mechelen', '기차로 약 17분. 대성당 탑과 흐로테 마르크트, 헷 앙커르 양조장을 봅니다.|17 min by train: the cathedral tower, the Grote Markt and the Het Anker brewery.'))]),
    dict(id='olomouc', country='cz', after='ceske-budejovice', ko='올로모우츠', en='Olomouc', native='Olomouc', lat=49.5938, lng=17.2509,
         blurb=['모라비아의 옛 수도이자 대학 도시. 유네스코 세계유산 성삼위일체 기념주와 바로크 분수가 선 광장, 대성당과 로마네스크 궁전이 관광객 적은 구시가에 모여 있습니다.',
                'The old Moravian capital and a university town: the World Heritage Holy Trinity Column, squares of Baroque fountains, a cathedral and a Romanesque palace, in an old town with few crowds.'],
         highlights=[
             dict(ko='호르니 광장과 천문시계', en='Upper Square and the Astronomical Clock', dko='시청 벽의 천문시계는 전쟁 뒤 사회주의 리얼리즘 모자이크로 다시 만들어 노동자 인형이 돕니다. 광장엔 바로크 분수들이 섭니다.', den='The town hall clock, rebuilt after the war in Socialist Realist mosaic with workers instead of saints, on a square of Baroque fountains.', maps='Horní náměstí Olomouc',
                  visit=dict(min=30, max=45, n='무료이며 천문시계는 정오에 인형이 움직입니다.|Free; the clock’s figures move at noon.')),
             dict(ko='성삼위일체 기념주', en='Holy Trinity Column', dko='35m 높이로 솟은 중부 유럽 최대의 바로크 조각 기둥으로, 유네스코 세계유산입니다.', den='At 35 m the largest Baroque sculptural column in Central Europe, a World Heritage site.', maps='Holy Trinity Column Olomouc',
                  visit=dict(min=15, max=20, n='무료이며 언제든 볼 수 있습니다. 아래 작은 예배당은 여름에만 엽니다.|Free and always visible; the little chapel inside opens only in summer.')),
             dict(ko='성 모리츠 성당', en='Church of St Moritz', dko='중부 유럽에서 가장 큰 파이프 오르간 가운데 하나가 있는 고딕 성당으로, 탑에 오를 수 있습니다.', den='A Gothic church with one of the largest pipe organs in Central Europe, and a tower to climb.', maps='Kostel svatého Mořice Olomouc',
                  visit=dict(min=20, max=30, n='미사 시간에는 관람할 수 없습니다.|No visiting during services.')),
             dict(ko='성 바츨라프 대성당', en='St Wenceslas Cathedral', dko='모라비아에서 가장 높은 100m 탑이 선 대주교 성당으로, 네오고딕 외관 안에 로마네스크 지하 묘소가 있습니다.', den='The archbishop’s cathedral with Moravia’s tallest tower (100 m): a neo-Gothic shell around a Romanesque crypt.', maps='Katedrála svatého Václava Olomouc',
                  visit=dict(min=30, max=45, n='미사 중에는 관람이 제한됩니다.|Visiting is restricted during services.')),
             dict(ko='대주교구 박물관', en='Archdiocesan Museum', dko='12세기 주교 궁전의 로마네스크 창문이 남은 건물에 대주교구의 보물과 예술품을 전시합니다.', den='The archdiocese’s treasures, in a building that keeps the Romanesque windows of a 12th-century bishop’s palace.', maps='Arcidiecézní muzeum Olomouc',
                  visit=dict(min=60, max=90, c='mon', n='화~일 10:00~18:00에 열고 월요일에 쉽니다.|Open Tuesday to Sunday 10:00–18:00; closed Mondays.')),
             dict(ko='스바티 코페체크 성모 방문 대성당', en='Basilica at Svatý Kopeček', dko='시내가 내려다보이는 언덕 위 바로크 순례 성당으로, 바로 옆에 동물원이 있습니다.', den='The Baroque pilgrimage basilica on a hill above the city, with a zoo next door.', maps='Bazilika Navštívení Panny Marie Svatý Kopeček', group=NEAR,
                  visit=dict(min=120, max=150, n='중앙역 앞에서 11번 버스로 약 25분입니다. 성당 운영 시간은 계절과 미사에 따라 다릅니다.|About 25 min on bus 11 from the main station; the basilica’s hours vary with the season and services.')),
         ],
         hubs="    air: [PRG('기차로 약 2시간 20분|About 2 hrs 20 by train'), VIE('기차로 약 2시간 40분, 브르제츨라프 환승|About 2 hrs 40 by train, change at Břeclav')],\n    rail: [['Olomouc hlavní nádraží', '올로모우츠 중앙역']],\n",
         hubs_file='hubs-central.ts', hubs_before="  'ceske-budejovice': {\n", itin_file='itinerary-north.ts', itin_before="  'ceske-budejovice': [",
         itinerary=[1, 2, 3, 4, 5, 6],
         season='관광객이 적어 계절을 가리지 않습니다. 스바티 코페체크는 시내가 잘 보이는 맑은 날 가세요.|Few crowds at any season; save Svatý Kopeček for a clear day with a view.',
         visit_file='visit-central.ts', visit_after=r"^  'ceske-budejovice-h\d+': v\(.*\),\n",
         stay=[a('구시가(호르니 광장 주변)', 'Old town (around the Upper Square)', 'Horní náměstí, Olomouc', '걸어서 다니기|On foot', '광장과 대성당, 박물관을 걸어서 다닙니다. 중앙역까지는 트램으로 약 10분입니다.|Squares, cathedral and museum on foot; about 10 min by tram to the main station.'),
               a('브르노에서 다녀오기', 'Base in Brno', 'Brno hlavní nádraží', '당일치기|Day trip', '브르노에서 기차로 약 1시간 15분입니다.|About 1 hr 15 by train from Brno.')],
         stay_before="  'ceske-budejovice': [",
         routes=[('routes-central.ts', r"^  r\('prague', 'brno', .*\),\n",
                  "  r('prague', 'olomouc', 'train', 142),\n"
                  "  r('brno', 'olomouc', 'train', 75),\n"
                  "  r('olomouc', 'vienna', 'train', 158, { n: '브르제츨라프에서 환승|change at Břeclav' }),\n")],
         transit=dict(modes=['walk', 'tram', 'bus', 'train'], ko='중앙역에서 구시가까지 트램으로 약 10분이고, 구시가는 걸어서 다닙니다. 스바티 코페체크는 11번 버스로 갑니다.', en='About 10 min by tram from the main station to the old town, which you walk; bus 11 climbs to Svatý Kopeček.'),
         apps=CZ, transit_before="  'ceske-budejovice': {", places=None,
         daytrips=[('brno', trip('olomouc', '기차로 약 1시간 15분. 성삼위일체 기념주와 바로크 분수, 대성당을 봅니다.|About 1 hr 15 by train: the Holy Trinity Column, the Baroque fountains and the cathedral.'))]),
]

if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
