#!/usr/bin/env python3
"""Portugal (2026-10-31, user request): new Lisbon and Porto sights, three-day Lisbon and two-day Porto plans, and every
Portuguese city's sight list reordered like its itinerary with day headings (as Rome). Opening facts checked that day on
the official sites that answered (Oceanário, Palácio da Bolsa, Serralves tickets); the rest keep only what several
sources agree on. Helpers come from add_daytrip_places.py. Run once."""
import re

from add_daytrip_places import hl_block, insert_after_line, rd, vline, wr

NEW = {
    'lisbon': [
        dict(ko='국립 아줄레주 박물관', en='National Tile Museum', dko='옛 마드레 드 데우스 수녀원에 포르투갈 타일(아줄레주) 500년 역사를 모은 박물관입니다.', den='Five centuries of Portuguese tiles (azulejos) in the former Madre de Deus convent.', maps='Museu Nacional do Azulejo',
             visit=dict(min=0, max=0, s='https://www.museudoazulejo.gov.pt/', n='2025년 11월부터 수도원 회랑·지붕·외벽을 고치는 공사로 휴관 중입니다. 2026년 하반기 재개관 예정이지만 날짜는 발표되지 않았습니다.|Closed since November 2025 for work on the cloister, roofs and façades; due to reopen in the second half of 2026, with no date announced.', k='2026-10', z=True)),
        dict(ko='굴벤키안 미술관', en='Calouste Gulbenkian Museum', dko='석유 사업가 굴벤키안이 모은 이집트 유물부터 르네 랄리크 보석까지의 컬렉션과 정원이 있는 미술관입니다.', den='Calouste Gulbenkian’s collection, from Egyptian antiquities to René Lalique jewellery, set in gardens.', maps='Museu Calouste Gulbenkian',
             visit=dict(min=120, max=150, c='tue', s='https://gulbenkian.pt/museu/en/', n='화요일에 쉬고 10:00~18:00에 엽니다. 18개월 보수를 마치고 2026년 7월 다시 열었습니다.|Closed on Tuesdays, open 10:00–18:00; reopened in July 2026 after an 18-month renovation.')),
        dict(ko='리스본 해양관', en='Oceanário de Lisboa', dko='엑스포 98 부지(파르크 다스 나송이스)에 있는 유럽 최대급 수족관으로 가운데 거대한 수조를 돌며 봅니다.', den='One of Europe’s largest aquariums, at the Expo 98 site (Parque das Nações), built around one huge central tank.', maps='Oceanário de Lisboa',
             visit=dict(min=120, max=150, c='daily', b='rec', s='https://www.oceanario.pt/en', n='매일 10:00~20:00(마지막 입장 19:00)에 엽니다. 온라인으로 사면 10% 할인됩니다.|Open daily 10:00–20:00 (last entry 19:00); tickets are 10% cheaper online.', k='2026-10')),
        dict(ko='시아두와 바이후 알투', en='Chiado and Bairro Alto', dko='19세기 문인들이 드나든 카페가 남은 시아두와, 밤이면 식당·바로 붐비는 언덕 골목 바이후 알투입니다.', den='Chiado, with the cafés where 19th-century writers met, and the hillside lanes of Bairro Alto, packed with restaurants and bars at night.', maps='Chiado Lisboa',
             visit=dict(min=90, max=150, s='https://www.visitlisboa.com/en/regions/lisboa-centro', n='바이후 알투는 저녁 이후가 가장 활기찹니다.|Bairro Alto comes alive in the evening.')),
        dict(ko='세뇨라 두 몬트 전망대', en='Miradouro da Senhora do Monte', dko='그라사 언덕 꼭대기의 전망대로 상조르즈 성과 테주강, 시내가 한눈에 들어옵니다.', den='The viewpoint at the top of Graça, looking over São Jorge Castle, the Tagus and the city.', maps='Miradouro da Senhora do Monte',
             visit=dict(min=15, max=30, n='무료 전망대이며 해 질 녘이 좋습니다.|A free viewpoint, best at sunset.')),
    ],
    'porto': [
        dict(ko='포르투 대성당', en='Porto Cathedral', dko='구시가 언덕 꼭대기의 요새 같은 로마네스크 대성당으로 아줄레주로 덮인 회랑이 있습니다.', den='The fortress-like Romanesque cathedral on the old town’s hilltop, with a tile-lined cloister.', maps='Sé do Porto',
             visit=dict(min=30, max=45, n='본당은 무료이고 회랑·박물관은 따로 표를 삽니다. 앞마당에서 구시가와 강이 내려다보입니다.|The church is free; the cloister and museum need a ticket. The terrace looks over the old town and the river.')),
        dict(ko='볼사 궁전', en='Palácio da Bolsa', dko='옛 증권거래소 건물로 알람브라를 본뜬 화려한 아랍 홀이 유명합니다.', den='The former stock exchange, famous for its lavish Alhambra-style Arab Room.', maps='Palácio da Bolsa',
             visit=dict(min=30, max=45, b='rec', s='https://palaciodabolsa.com/en/tourism/', n='가이드 투어(약 30분)로만 들어가며 9:00~18:30에 운영합니다. 언어별 투어는 도착 순서로 배정됩니다.|Visits are by guided tour only (about 30 minutes), 9:00–18:30; tours in each language are assigned in order of arrival.', k='2026-10')),
        dict(ko='상 프란시스쿠 성당', en='Church of São Francisco', dko='겉은 수수한 고딕이지만 안은 금박 목조 장식으로 뒤덮인 성당으로, 지하 납골당도 함께 봅니다.', den='A plain Gothic church whose interior is smothered in gilded woodwork, with catacombs below.', maps='Igreja de São Francisco Porto',
             visit=dict(min=30, max=45, n='유료이며 볼사 궁전 바로 옆입니다. 겨울엔 일찍 닫습니다.|Ticketed, right next to the Palácio da Bolsa; it closes earlier in winter.')),
        dict(ko='세할베스 미술관과 공원', en='Serralves Museum and Park', dko='알바루 시자가 설계한 현대 미술관과 아르데코 저택, 넓은 정원이 있는 문화 단지입니다.', den='Álvaro Siza’s contemporary art museum with an Art Deco villa and extensive gardens.', maps='Fundação de Serralves',
             visit=dict(min=120, max=180, s='https://www.serralves.pt/en/visitar-serralves/', n='미술관·공원 통합권과 공원 전용권이 있습니다. 시내 서쪽이라 버스로 갑니다.|Tickets cover the whole foundation or the park only; it lies west of the centre, reached by bus.', k='2026-10')),
        dict(ko='크리스탈 궁전 정원', en='Crystal Palace Gardens', dko='공작이 거니는 언덕 위 정원으로 도루강이 내려다보이는 전망 테라스가 있습니다.', den='Hilltop gardens with strutting peacocks and terraces overlooking the Douro.', maps='Jardins do Palácio de Cristal',
             visit=dict(min=45, max=60, n='무료입니다.|Free.')),
        dict(ko='도루 계곡', en='Douro Valley', dko='계단식 포도밭이 강을 따라 이어지는 포트와인 산지로 세계유산입니다.', den='The World Heritage port-wine country of terraced vineyards along the river.', maps='Pinhão Douro', group=['근교 당일치기', 'Day trip'],
             visit=dict(min=420, max=540, n='상 벤투역에서 기차로 페주다헤구아까지 약 2시간 반(한 번 갈아탐), 피냥까지 3시간 남짓 걸립니다. 투어와 강 유람선도 많습니다.|About 2½ hours by train from São Bento to Peso da Régua (one change) and just over 3 hours to Pinhão; tours and river cruises are plentiful.')),
    ],
}
ITIN = {
    'lisbon': ("""  lisbon: {
    days: [
      ['바이샤와 알파마|Baixa & Alfama', 15, 14, 8, 7, 11, 13, 4, 3],
      ['벨렝과 강변|Belém & the riverfront', 2, 9, 1, 6, 5],
    ],
""", """  lisbon: {
    days: [
      ['호시우에서 바이샤·알파마|Rossio, Baixa & Alfama', 15, 8, 7, 11, 13, 4, 23, 3],
      ['벨렝과 강변|Belém & the riverfront', 2, 9, 1, 6, 5],
      ['굴벤키안·해양관과 시아두|Gulbenkian, the Oceanário & Chiado', 20, 21, 17, 22],
    ],
"""),
    'porto': ("  porto: [8, 6, 3, 4, 9, 7, 1, 2, 5],\n", """  porto: {
    days: [
      ['상 벤투역에서 대성당·히베이라|São Bento, the cathedral & Ribeira', 8, 6, 11, 12, 13, 1, 2, 5],
      ['클레리구스에서 서쪽으로|Clérigos and the west', 3, 4, 7, 9, 15, 14],
    ],
    trips: [['도루 계곡|Douro Valley', 16]],
  },
"""),
}
# Sights not in any itinerary day: where they sit in the list (after which id), so each lands in the right day group
EXTRA = {'lisbon': {16: 15, 14: 16, 12: 11, 10: 22}, 'porto': {10: 6}}
MINOR = {'lisbon': [10, 14], 'porto': [10]}
DAY = ('근교 당일치기', 'Day trip')
MORE = ('그 밖의 볼거리', 'More to see')


def block_span(s, cid):
    i = s.find(f'id: "{cid}",')
    nxt = s.find('\n  {\n    id: "', i + 10)
    a = s.find('highlights: [\n', i) + len('highlights: [\n')
    return i, a, s.rindex('\n', a, s.rindex('],', a, nxt))


def add_new(cities):
    for cid, items in NEW.items():
        i, a, b = block_span(cities, cid)
        n0 = max(int(x) for x in re.findall(rf'id: "{cid}-h(\d+)"', cities))
        for k, h in enumerate(items, 1):
            hid = f'{cid}-h{n0 + k}'
            h = dict(h, group=h.get('group'))
            sep = '' if cities[:b].rstrip().endswith(',') else ','
            cities = cities[:b] + sep + '\n' + hl_block(hid, f'/highlights/{cid}-{n0 + k}.jpg', h) + ',' + cities[b:]
            i, a, b = block_span(cities, cid)
            insert_after_line('visit-iberia.ts', rf"^  '{cid}-h\d+': v\(.*\),\n", vline(hid, h['visit']))
            print('sight', hid)
    return cities


def itin_days(it, cid):
    """[(title_ko, title_en, [n...], trip?)] from itinerary-iberia.ts, whatever form the entry takes."""
    key = f"'{cid}'" if '-' in cid else cid
    m = re.search(rf"^  {re.escape(key)}: (\[[\d, ]+\]|\{{ days: [^\n]*\}}(?=,$)|\{{\n.*?^  \}})", it, re.M | re.S)
    body = m.group(1)
    if body.startswith('[') and not body.startswith('[['):
        return [('', '', [int(x) for x in re.findall(r'\d+', body)], False)]
    out = []
    days, _, trips = body.partition('trips:')
    for t, ns in re.findall(r"\['([^']*)', ([\d, ]+)\]", days):
        ko, _, en = t.partition('|')
        out.append((ko, en, [int(x) for x in ns.split(',')], False))
    for t, ns in re.findall(r"\['([^']*)', ([\d, ]+)\]", trips):
        ko, _, en = t.partition('|')
        out.append((ko, en, [int(x) for x in ns.split(',')], True))
    return out


def regroup(cities, it, cid):
    i, a, b = block_span(cities, cid)
    blocks = re.findall(r'      \{\n.*?\n      \}', cities[a:b], re.S)
    by = {int(re.search(rf'id: "{cid}-h(\d+)"', x).group(1)): x for x in blocks}
    name = lambda n, lang: re.search(rf'name: \{{ ko: "([^"]+)", en: "([^"]+)"', by[n]).group(1 if lang == 'ko' else 2)
    days = itin_days(it, cid)
    town = [d for d in days if not d[3]]
    order = []  # (n, ko, en)
    for k, (ko, en, ns, trip) in enumerate(town, 1):
        if len(town) == 1:
            ko, en = f'{name(ns[0], "ko")}에서 {name(ns[-1], "ko")}까지 하루 코스', f'From {name(ns[0], "en")} to {name(ns[-1], "en")}'
        else:
            ko, en = f'{k}일차 · {ko}', f'Day {k} · {en}'
        order += [(n, ko, en) for n in ns]
    for n, after in EXTRA.get(cid, {}).items():
        j = next(x for x, o in enumerate(order) if o[0] == after)
        order.insert(j + 1, (n, order[j][1], order[j][2]))
    placed = {o[0] for o in order}
    trip_ns = [n for d in days if d[3] for n in d[2]]
    order += [(n, *MORE) for n in sorted(by) if n not in placed and n not in trip_ns]
    order += [(n, *DAY) for n in trip_ns if n not in placed]
    assert sorted(o[0] for o in order) == sorted(by), (cid, order)
    out = []
    for n, ko, en in order:
        x = re.sub(r'\n        (group: \{[^\n]*\}|minor: true),', '', by[n])
        extra = '\n        minor: true,' if n in MINOR.get(cid, []) else ''
        out.append(x.replace('\n      }', f'{extra}\n        group: {{ ko: "{ko}", en: "{en}" }},\n      }}'))
    return cities[:a] + ',\n'.join(out) + ',' + cities[b:]


def main():
    cities = rd('cities.ts')
    if 'id: "porto-h11"' not in cities:
        cities = add_new(cities)
        wr('cities.ts', cities)
    it = rd('itinerary-iberia.ts')
    for cid, (old, new) in ITIN.items():
        if old in it:
            it = it.replace(old, new)
    wr('itinerary-iberia.ts', it)
    for cid in re.findall(r'\n  \{\n    id: "([a-z-]+)",\n    countryId: "pt"', cities):
        cities = regroup(cities, it, cid)
    wr('cities.ts', cities)


if __name__ == '__main__':
    main()
