#!/usr/bin/env python3
"""Fourth batch of day-trip places (2026-10-30): nearby sights added to their base cities, each with a day-trip
entry in the base city's itinerary. Helpers come from add_daytrip_places.py. Run once."""
import re

from add_daytrip_places import DAY, hl_block, insert_after_line, rd, vline, wr

# (base, visit file, itinerary file, short label for the itinerary trip, sight)
SIGHTS = [
    ('amsterdam', 'visit-benelux.ts', 'itinerary-central.ts', '잔세스칸스|Zaanse Schans', dict(
        ko='잔세스칸스', en='Zaanse Schans', dko='잔강 가에 옛 풍차와 초록 목조 가옥을 옮겨 모은 마을로 나막신·치즈 공방이 있습니다.', den='A riverside village of old windmills and green wooden houses moved here, with clog and cheese workshops.', maps='Zaanse Schans',
        visit=dict(min=150, max=210, n='마을은 무료이고 풍차와 박물관은 따로 표를 삽니다. 암스테르담 중앙역에서 기차로 약 20분, 코흐잔데이크역에서 걸어서 약 15분입니다.|The village is free; windmills and museums charge separately. About 20 min by train from Amsterdam Centraal, then a 15-minute walk from Koog-Zaandijk.'))),
    ('amsterdam', 'visit-benelux.ts', 'itinerary-central.ts', '폴렌담과 마르컨|Volendam & Marken', dict(
        ko='폴렌담과 마르컨', en='Volendam and Marken', dko='옛 어촌 폴렌담의 제방 거리와, 배로 건너가는 초록 목조 가옥 마을 마르컨을 묶어 봅니다.', den='The old fishing town of Volendam and its dyke, with a boat across to the green wooden houses of Marken.', maps='Volendam',
        visit=dict(min=240, max=300, n='중앙역 뒤 버스 정류장에서 버스로 약 30분입니다. 폴렌담–마르컨 배는 봄~가을에 다닙니다.|About 30 min by bus from behind Centraal station; the Volendam–Marken boat runs from spring to autumn.'))),
    ('amsterdam', 'visit-benelux.ts', 'itinerary-central.ts', '알크마르 치즈 시장|Alkmaar cheese market', dict(
        ko='알크마르 치즈 시장', en='Alkmaar Cheese Market', dko='계량소 앞 광장에서 흰 옷의 운반꾼들이 치즈를 나르며 옛 거래를 재현합니다.', den='Porters in white carry cheeses across the square by the Weigh House, re-enacting the old trade.', maps='Kaasmarkt Alkmaar',
        visit=dict(min=150, max=180, s='https://www.kaasmarkt.nl/', n='시장은 봄~초가을 금요일 10~13시에만 열립니다(2026년은 3월 27일~9월 25일). 암스테르담에서 기차로 약 35분입니다.|The market runs only on Friday mornings, 10:00–13:00, from spring to early autumn (27 March–25 September in 2026). About 35 min by train from Amsterdam.', k='2026-10'))),
    ('amsterdam', 'visit-benelux.ts', 'itinerary-central.ts', '케우켄호프|Keukenhof', dict(
        ko='케우켄호프', en='Keukenhof', dko='봄에만 여는 세계적인 튤립 정원으로 수백만 송이 구근 꽃이 핍니다.', den='The world-famous spring garden, ablaze with millions of tulips and other bulbs.', maps='Keukenhof Lisse',
        visit=dict(min=180, max=240, b='req', s='https://keukenhof.nl/', n='3월 중순~5월 초에만 엽니다(2026년은 3월 19일~5월 10일). 입장 시간을 정해 미리 표를 사야 하고, 스히폴 공항이나 레이던역에서 전용 버스가 다닙니다.|Open only from mid-March to early May (19 March–10 May in 2026). Buy a timed ticket in advance; special buses run from Schiphol and Leiden station.', k='2026-10'))),
    ('rotterdam', 'visit-benelux.ts', 'itinerary-central.ts', '킨더다이크 풍차|Kinderdijk windmills', dict(
        ko='킨더다이크 풍차 마을', en='Kinderdijk windmills', dko='18세기 풍차 19기가 운하를 따라 늘어선 세계유산으로, 물을 퍼내 땅을 지켜 온 네덜란드의 상징입니다.', den='A World Heritage line of 19 18th-century windmills along the canals, symbol of how the Dutch kept the land dry.', maps='Kinderdijk',
        visit=dict(min=150, max=210, s='https://kinderdijk.nl/', n='로테르담 에라스뮈스 다리 근처 선착장에서 워터버스로 약 40분입니다. 겨울엔 운영 시간이 짧아집니다.|About 40 min by waterbus from near the Erasmus Bridge; hours are shorter in winter.'))),
    ('madrid', 'visit-iberia.ts', 'itinerary-iberia.ts', '알칼라 데 에나레스|Alcalá de Henares', dict(
        ko='알칼라 데 에나레스', en='Alcalá de Henares', dko='세르반테스가 태어난 대학 도시로 르네상스 대학 건물과 세르반테스 생가가 있는 세계유산입니다.', den='Cervantes’ birthplace and a World Heritage university town, with its Renaissance college and the writer’s house.', maps='Universidad de Alcalá Colegio de San Ildefonso',
        visit=dict(min=180, max=240, n='마드리드에서 근교선 세르카니아스 C-2·C-7로 약 40분입니다. 세르반테스 생가 박물관은 월요일에 쉽니다.|About 40 min on Cercanías lines C-2 and C-7 from Madrid; the Cervantes birthplace museum is closed on Mondays.'))),
    ('madrid', 'visit-iberia.ts', 'itinerary-iberia.ts', '아랑후에스|Aranjuez', dict(
        ko='아랑후에스 왕궁', en='Royal Palace of Aranjuez', dko='타호강 가 왕실의 봄 별궁으로 넓은 정원과 분수가 있는 세계유산입니다.', den='The royal spring residence on the Tagus, a World Heritage site with vast gardens and fountains.', maps='Palacio Real de Aranjuez',
        visit=dict(min=180, max=240, c='mon', s='https://www.patrimonionacional.es/', n='월요일에 쉬고 공식 행사로 갑자기 닫을 때가 있습니다. 마드리드에서 세르카니아스 C-3로 약 45분입니다.|Closed on Mondays, and sometimes at short notice for official events. About 45 min on Cercanías C-3 from Madrid.', k='2026-10'))),
    ('barcelona', 'visit-iberia.ts', 'itinerary-iberia.ts', '피게레스 달리 극장 박물관|Figueres Dalí Museum', dict(
        ko='피게레스 달리 극장 박물관', en='Dalí Theatre-Museum, Figueres', dko='달리가 고향의 옛 극장을 직접 꾸민 박물관으로 지붕에 거대한 달걀이 얹혀 있습니다.', den='The museum Dalí designed himself in his hometown’s old theatre, crowned with giant eggs.', maps='Teatre-Museu Dalí Figueres',
        visit=dict(min=120, max=180, c='mon', b='rec', s='https://www.salvador-dali.org/', n='월요일에 쉽니다(여름엔 매일 여는 기간이 있습니다). 바르셀로나 산츠역에서 고속열차로 약 55분이고, 표는 날짜·시간을 정해 미리 사는 편이 좋습니다.|Closed on Mondays except in parts of summer. About 55 min by high-speed train from Barcelona Sants; buy a dated, timed ticket ahead.', k='2026-10'))),
    ('malaga', 'visit-iberia.ts', 'itinerary-iberia.ts', '미하스|Mijas', dict(
        ko='미하스', en='Mijas Pueblo', dko='코스타 델 솔 위 산비탈의 하얀 마을로 바다가 내려다보이는 골목이 이어집니다.', den='A white village on the hillside above the Costa del Sol, its lanes looking down to the sea.', maps='Mijas Pueblo',
        visit=dict(min=150, max=210, n='말라가에서 근교선으로 푸엔히롤라까지 간 뒤 버스로 약 20분 오릅니다.|Take the suburban train from Málaga to Fuengirola, then about 20 min by bus up the hill.'))),
    ('malaga', 'visit-iberia.ts', 'itinerary-iberia.ts', '프리힐리아나|Frigiliana', dict(
        ko='프리힐리아나', en='Frigiliana', dko='네르하 위 언덕의 하얀 마을로 무어 시대 골목과 타일 이야기판이 남아 있습니다.', den='A white village on the hill above Nerja, with Moorish-era lanes and tiled story panels.', maps='Frigiliana',
        visit=dict(min=120, max=180, n='말라가에서 버스로 네르하까지 간 뒤 버스로 갈아탑니다. 네르하와 묶어 하루에 봅니다.|Bus from Málaga to Nerja, then a local bus up; pair it with Nerja for a day.'))),
    ('lisbon', 'visit-iberia.ts', 'itinerary-iberia.ts', '마프라 궁전|Mafra', dict(
        ko='마프라 궁전', en='Mafra National Palace', dko='브라질 금으로 지은 거대한 바로크 궁전·수도원으로 로코코 도서관이 유명한 세계유산입니다.', den='A vast Baroque palace and convent built with Brazilian gold, a World Heritage site famed for its Rococo library.', maps='Palácio Nacional de Mafra',
        visit=dict(min=120, max=150, c='tue', s='https://www.palaciomafra.gov.pt/', n='화요일과 1월 1일·부활절·5월 1일·12월 25일에 쉽니다. 리스본 캄푸 그란드에서 버스로 약 1시간입니다.|Closed on Tuesdays and on 1 January, Easter Sunday, 1 May and 25 December. About an hour by bus from Campo Grande in Lisbon.', k='2026-10'))),
    ('fatima', 'visit-iberia.ts', 'itinerary-iberia.ts', '바탈랴 수도원|Batalha Monastery', dict(
        ko='바탈랴 수도원', en='Batalha Monastery', dko='포르투갈 독립 전쟁 승리를 기념해 지은 고딕 수도원으로 지붕 없는 미완성 예배당이 압권인 세계유산입니다.', den='A Gothic monastery built to mark Portugal’s victory for independence, a World Heritage site crowned by its roofless Unfinished Chapels.', maps='Mosteiro da Batalha',
        visit=dict(min=90, max=120, c='daily', n='매일 엽니다(1월 1일·부활절·5월 1일·12월 25일 제외). 파티마에서 버스나 차로 약 20분입니다.|Open daily except 1 January, Easter Sunday, 1 May and 25 December. About 20 min by bus or car from Fátima.'))),
    ('naples', 'visit-it.ts', 'itinerary-it.ts', '파에스툼|Paestum', dict(
        ko='파에스툼', en='Paestum', dko='그리스 식민 도시 유적으로 넵투누스 신전 등 보존 상태가 뛰어난 도리아식 신전 세 채가 남아 있습니다.', den='A Greek colonial city with three superbly preserved Doric temples, including the Temple of Neptune.', maps='Paestum Archaeological Park',
        visit=dict(min=180, max=240, s='https://museopaestum.cultura.gov.it/', n='나폴리에서 기차로 약 1시간 30분이며 역에서 유적까지 걸어서 약 10분입니다. 표 하나로 유적과 박물관에 들어갑니다.|About 1 hr 30 by train from Naples, then a 10-minute walk from the station; one ticket covers the site and the museum.'))),
    ('amalfi', 'visit-it.ts', 'itinerary-it.ts', '라벨로|Ravello', dict(
        ko='라벨로', en='Ravello', dko='아말피 위 절벽 마을로 빌라 루폴로와 빌라 침브로네 정원에서 해안이 한눈에 내려다보입니다.', den='A clifftop village above Amalfi, whose Villa Rufolo and Villa Cimbrone gardens look out over the whole coast.', maps='Villa Rufolo Ravello',
        visit=dict(min=150, max=210, n='아말피에서 버스로 약 25분 오릅니다. 여름엔 빌라 루폴로에서 라벨로 음악제가 열립니다.|About 25 min by bus up from Amalfi; the Ravello Festival fills Villa Rufolo in summer.'))),
    ('san-gimignano', 'visit-it.ts', 'itinerary-it.ts', '볼테라|Volterra', dict(
        ko='볼테라', en='Volterra', dko='에트루리아 시대부터 이어진 언덕 위 성벽 도시로 로마 극장과 설화석고 공방이 있습니다.', den='A walled hill town dating back to the Etruscans, with a Roman theatre and alabaster workshops.', maps='Volterra',
        visit=dict(min=180, max=240, n='대중교통은 콜레 디 발 델사에서 버스를 갈아타야 해 차나 투어가 편합니다.|By public transport you change buses at Colle di Val d’Elsa, so a car or tour is easier.'))),
    ('prague', 'visit-central.ts', 'itinerary-north.ts', '카를슈테인 성|Karlštejn Castle', dict(
        ko='카를슈테인 성', en='Karlštejn Castle', dko='카를 4세가 왕관과 보물을 지키려고 숲속 언덕에 세운 고딕 성입니다.', den='The Gothic castle Charles IV built on a wooded hill to guard the crown jewels.', maps='Hrad Karlštejn',
        visit=dict(min=180, max=240, c='mon', s='https://www.hrad-karlstejn.cz/', n='월요일에 쉬고 겨울엔 주말 위주로 엽니다. 프라하 중앙역에서 기차로 약 40분, 역에서 성까지 걸어서 약 30분 오릅니다. 성 십자가 예배당은 미리 예약해야 합니다.|Closed on Mondays and mostly weekends-only in winter. About 40 min by train from Prague main station, then a 30-minute walk up; the Chapel of the Holy Cross needs booking.'))),
    ('zurich', 'visit-ch.ts', 'itinerary-central.ts', '라인 폭포와 슈타인암라인|Rhine Falls & Stein am Rhein', dict(
        ko='라인 폭포와 슈타인암라인', en='Rhine Falls and Stein am Rhein', dko='유럽에서 가장 수량이 많은 라인 폭포를 보고, 그림 벽화가 가득한 중세 마을 슈타인암라인을 걷습니다.', den='Europe’s most powerful waterfall, then the medieval town of Stein am Rhein with its painted façades.', maps='Rheinfall',
        visit=dict(min=300, max=360, n='취리히에서 기차로 라인 폭포 역(슐로스 라우펜)까지 약 50분입니다. 폭포 가운데 바위로 가는 배는 봄~가을에 다닙니다.|About 50 min by train from Zurich to Schloss Laufen am Rheinfall; boats to the rock in the middle of the falls run spring to autumn.'))),
    ('interlaken', 'visit-ch.ts', 'itinerary-central.ts', '라우터브루넨|Lauterbrunnen', dict(
        ko='라우터브루넨 계곡', en='Lauterbrunnen Valley', dko='절벽 사이 U자 계곡에 폭포 72개가 쏟아지는 마을로, 슈타우바흐 폭포와 바위 속 트뤼멜바흐 폭포가 있습니다.', den='A U-shaped valley of sheer cliffs and 72 waterfalls, with the Staubbach Falls and the Trümmelbach Falls inside the rock.', maps='Lauterbrunnen Staubbachfall',
        visit=dict(min=180, max=240, n='인터라켄 오스트역에서 기차로 약 20분입니다. 트뤼멜바흐 폭포는 4월 초~11월 초에만 엽니다.|About 20 min by train from Interlaken Ost; the Trümmelbach Falls open only from early April to early November.'))),
    ('salzburg', 'visit-central.ts', 'itinerary-central.ts', '장크트볼프강|St. Wolfgang', dict(
        ko='장크트볼프강과 샤프베르크', en='St. Wolfgang and the Schafberg', dko='볼프강 호숫가 순례 마을에서 톱니바퀴 열차로 샤프베르크 정상에 올라 호수들을 내려다봅니다.', den='A lakeside pilgrimage village on the Wolfgangsee, with a cogwheel railway up the Schafberg over the lakes.', maps='St. Wolfgang im Salzkammergut',
        visit=dict(min=300, max=360, s='https://www.5schaetze.at/', n='잘츠부르크에서 150번 버스로 장크트길겐이나 슈트로블까지 간 뒤 배·버스로 갈아탑니다. 샤프베르크 열차는 4월 말~11월 1일에만 다닙니다.|Bus 150 from Salzburg to St. Gilgen or Strobl, then a boat or bus; the Schafberg railway runs only from late April to 1 November.', k='2026-10'))),
    ('kotor', 'visit-balkan.ts', 'itinerary-south.ts', '페라스트|Perast', dict(
        ko='페라스트와 바위의 성모 섬', en='Perast and Our Lady of the Rocks', dko='코토르만의 바로크 해안 마을에서 배를 타고 사람이 돌을 쌓아 만든 섬의 성당에 갑니다.', den='A Baroque waterfront village on the Bay of Kotor, with a boat out to the church on a man-made island.', maps='Our Lady of the Rocks Perast',
        visit=dict(min=150, max=210, n='코토르에서 버스로 약 20분입니다. 섬까지는 페라스트 부두에서 작은 배가 수시로 다닙니다.|About 20 min by bus from Kotor; small boats shuttle to the island from the Perast quay.'))),
    ('paris', 'visit-fr.ts', 'itinerary-fr.ts', '샹티이 성|Chantilly', dict(
        ko='샹티이 성', en='Château de Chantilly', dko='호수 위에 선 성과 콩데 미술관, 거대한 마구간 건물이 있는 귀족의 영지입니다.', den='A château on a lake with the Musée Condé and the vast Great Stables.', maps='Château de Chantilly',
        visit=dict(min=180, max=240, c='tue', s='https://chateaudechantilly.fr/', n='화요일에 쉽니다. 파리 북역에서 기차로 약 25분, 역에서 성까지 걸어서 약 25분입니다.|Closed on Tuesdays. About 25 min by train from Paris Gare du Nord, then a 25-minute walk.', k='2026-10'))),
]


def add_trip(name, base, label, n):
    """Add a day-trip entry to the base city's itinerary, whatever form it is in."""
    s = rd(name)
    key = f"'{base}'" if '-' in base else base
    trip = f"['{label}', {n}]"
    if trip in s:
        return
    m = re.search(rf"^  {re.escape(key)}: \[([\d, ]+)\],\n", s, re.M)
    if m:
        s = s[:m.start()] + f"  {key}: {{ days: [['', {m.group(1)}]], trips: [{trip}] }},\n" + s[m.end():]
        return wr(name, s)
    m = re.search(rf"^  {re.escape(key)}: \{{ days: .*\}},\n", s, re.M)
    if m:
        line = m.group(0)
        if 'trips: [' in line:
            new = re.sub(r"\]\] \},\n$", f"], {trip}] }},\n", line)
        else:
            new = line.replace(' },\n', f', trips: [{trip}] }},\n')
        return wr(name, s[:m.start()] + new + s[m.end():])
    m = re.search(rf"^  {re.escape(key)}: \{{\n", s, re.M)
    end = s.index('\n  },\n', m.end()) + 1
    block = s[m.start():end]
    if '    trips: [' in block:
        block = re.sub(r"(    trips: \[.*)\],\n", lambda x: f"{x.group(1)}, {trip}],\n", block)
    else:
        block += f'    trips: [{trip}],\n'
    wr(name, s[:m.start()] + block + s[end:])


def main():
    counts = {}
    for base, vf, itf, label, h in SIGHTS:
        cities = rd('cities.ts')
        if base not in counts:
            counts[base] = max(int(x) for x in re.findall(rf'id: "{re.escape(base)}-h(\d+)"', cities))
        counts[base] += 1
        n = counts[base]
        hid = f'{base}-h{n}'
        if f'"{hid}"' in cities:
            continue
        i = cities.find(f'id: "{base}",')
        nxt = cities.find('\n  {\n    id: "', i + 10)
        j = cities.rindex('\n', i, cities.rindex('],', i, nxt))
        sep = '' if cities[:j].rstrip().endswith(',') else ','
        cities = cities[:j] + sep + '\n' + hl_block(hid, f'/highlights/{base}-{n}.jpg', dict(h, group=DAY)) + ',' + cities[j:]
        wr('cities.ts', cities)
        insert_after_line(vf, rf"^  '{re.escape(base)}-h\d+': v\(.*\),\n", vline(hid, h['visit']))
        add_trip(itf, base, label, n)
        print('sight', hid)


if __name__ == '__main__':
    main()
