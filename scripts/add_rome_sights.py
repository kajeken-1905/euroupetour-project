#!/usr/bin/env python3
"""Rome sights h14–h28 (2026-10-31, user request): a three-day stay from Termini. Opening facts checked that day on
the official sites where they answered (St Peter's, Capitoline Museums, Trajan's Markets, Caracalla, MiC pages for
the Borghese); the rest keep only what several sources agree on. Helpers come from add_daytrip_places.py. Run once."""
import re

from add_daytrip_places import hl_block, insert_after_line, rd, vline, wr

CT = 'https://ticketing.colosseo.it/en/'
SIGHTS = [
    dict(ko='산타 마리아 마조레 대성당', en='Santa Maria Maggiore', dko='로마 4대 대성전 가운데 하나로 5세기 모자이크와 금박 천장이 남아 있습니다.', den='One of Rome’s four papal basilicas, with 5th-century mosaics and a gilded ceiling.', maps='Basilica di Santa Maria Maggiore',
         visit=dict(min=30, max=45, s='https://www.basilicasantamariamaggiore.va/', n='무료이며 어깨와 무릎을 가려야 합니다. 테르미니역에서 걸어서 약 10분이고, 위층 로지아와 지하 유적은 따로 표를 삽니다.|Free; cover shoulders and knees. About 10 minutes’ walk from Termini; the upper loggia and the excavations below need separate tickets.')),
    dict(ko='국립 로마 박물관 (팔라초 마시모)', en='Palazzo Massimo (National Roman Museum)', dko='테르미니역 앞의 고대 로마 미술관으로 리비아 별장의 정원 벽화와 청동 권투 선수상이 유명합니다.', den='The ancient-art museum facing Termini, famous for the garden frescoes from Livia’s villa and the bronze Boxer.', maps='Palazzo Massimo alle Terme',
         visit=dict(min=90, max=120, c='mon', s='https://museonazionaleromano.beniculturali.it/', n='테르미니역 바로 앞입니다. 디오클레티아누스 욕장·팔라초 알템프스와 함께 쓰는 통합권(7일)이 있습니다.|Right opposite Termini. A combined ticket (7 days) also covers the Baths of Diocletian and Palazzo Altemps.')),
    dict(ko='핀초 언덕 전망대', en='Pincio Terrace', dko='포폴로 광장 위 테라스로 성 베드로 대성당 돔까지 로마 지붕들이 한눈에 들어옵니다. 해 질 녘이 특히 좋습니다.', den='The terrace above Piazza del Popolo, looking over Rome’s rooftops to the dome of St Peter’s—best at sunset.', maps='Terrazza del Pincio',
         visit=dict(min=20, max=30, n='무료입니다. 스페인 광장 계단 위 트리니타 데이 몬티에서 걸어서 약 10분이며 보르게세 공원과 이어집니다.|Free. About 10 minutes’ walk from Trinità dei Monti at the top of the Spanish Steps, and joined to the Villa Borghese park.')),
    dict(ko='포폴로 광장', en='Piazza del Popolo', dko='쌍둥이 성당과 오벨리스크가 있는 옛 북쪽 관문 광장으로, 산타 마리아 델 포폴로 성당에 카라바조 그림 두 점이 있습니다.', den='The old northern gateway square with its twin churches and obelisk; Santa Maria del Popolo holds two Caravaggios.', maps='Piazza del Popolo',
         visit=dict(min=30, max=45)),
    dict(ko='보르게세 미술관', en='Galleria Borghese', dko='베르니니 조각과 카라바조·라파엘로 그림을 모은 보르게세 공원 안의 미술관입니다.', den='Bernini’s sculptures and paintings by Caravaggio and Raphael in a villa inside the Borghese park.', maps='Galleria Borghese',
         visit=dict(min=120, max=120, c='mon', b='req', s='https://galleriaborghese.beniculturali.it/', n='예약제로만 들어가며 2시간씩 나눠 입장하고 시간이 끝나면 나와야 합니다. 현장 판매가 없으니 미리 예약하세요.|Entry by booking only, in two-hour slots, leaving at the end of each slot; there are no tickets at the door, so book ahead.', k='2026-10')),
    dict(ko='콘스탄티누스 개선문', en='Arch of Constantine', dko='콜로세움 옆에 선 4세기 개선문으로 로마에 남은 개선문 가운데 가장 큽니다.', den='The 4th-century triumphal arch beside the Colosseum, the largest left in Rome.', maps='Arco di Costantino',
         visit=dict(min=10, max=15, n='콜로세움 바로 옆이라 표 없이 밖에서 봅니다.|Right next to the Colosseum and seen from outside, with no ticket.')),
    dict(ko='팔라티노 언덕', en='Palatine Hill', dko='로마가 시작된 언덕으로 황제들의 궁전 터와 정원이 남아 있고 포로 로마노가 내려다보입니다.', den='The hill where Rome began, with the ruins of the emperors’ palaces and gardens overlooking the Forum.', maps='Palatino Roma',
         visit=dict(min=60, max=90, c='daily', b='req', t=CT, n='콜로세움·포로 로마노 입장권으로 함께 들어가며 포로 로마노와 이어져 있습니다.|Entered on the Colosseum–Roman Forum ticket, and joined to the Forum.', k='2026-10')),
    dict(ko='황제들의 포룸·트라야누스 시장', en="Imperial Fora and Trajan's Market", dko='카이사르·아우구스투스·트라야누스가 차례로 지은 광장 유적과 반원형 시장 건물입니다.', den='The forums built by Caesar, Augustus and Trajan, with Trajan’s curved market halls.', maps='Mercati di Traiano Museo dei Fori Imperiali',
         visit=dict(min=60, max=90, s='https://www.mercatiditraiano.it/', n='포리 임페리알리 거리에서 유적을 무료로 내려다볼 수 있습니다. 트라야누스 시장(포리 임페리알리 박물관)은 매일 9:30~19:30에 열고 5월 1일·12월 25일에 쉽니다.|The ruins can be seen free from Via dei Fori Imperiali. Trajan’s Market (Museum of the Imperial Fora) opens daily 9:30–19:30, closed 1 May and 25 December.', k='2026-10')),
    dict(ko='카피톨리니 박물관', en='Capitoline Museums', dko='미켈란젤로가 설계한 캄피돌리오 광장의 박물관으로 늑대상과 마르쿠스 아우렐리우스 기마상이 있습니다.', den='The museums on Michelangelo’s Campidoglio square, home to the She-wolf and the equestrian Marcus Aurelius.', maps='Musei Capitolini',
         visit=dict(min=120, max=150, b='rec', s='https://www.museicapitolini.org/', n='매일 9:30~19:30(마지막 입장 18:30)에 열고 5월 1일·12월 25일에 쉽니다. 온라인으로 미리 사면 매표 줄을 건너뜁니다.|Open daily 9:30–19:30 (last entry 18:30), closed 1 May and 25 December; buying online skips the ticket queue.', k='2026-10')),
    dict(ko='진실의 입', en='Mouth of Truth', dko='거짓말을 하면 손을 문다는 전설의 대리석 가면으로 영화 〈로마의 휴일〉로 유명합니다.', den='The marble mask said to bite liars’ hands, made famous by Roman Holiday.', maps='Bocca della Verità',
         visit=dict(min=15, max=30, s='https://www.turismoroma.it/it/luoghi/bocca-della-verita', n='산타 마리아 인 코스메딘 성당 현관에 있어 성당이 여는 시간(대체로 9:30~13:00·14:00~17:50)에만 볼 수 있고, 사진을 찍으려는 줄이 깁니다.|In the porch of Santa Maria in Cosmedin, so it can be seen only while the church is open (usually 9:30–13:00 and 14:00–17:50); expect a queue for photos.')),
    dict(ko='트라스테베레', en='Trastevere', dko='테베레강 건너 옛 골목 동네로 산타 마리아 인 트라스테베레 성당과 광장이 중심입니다.', den='The old lanes across the Tiber, centred on Santa Maria in Trastevere and its square.', maps='Piazza di Santa Maria in Trastevere',
         visit=dict(min=120, max=180, n='저녁 식사 시간에 가장 활기찹니다.|Liveliest at dinner time.')),
    dict(ko='성 베드로 대성당', en="St Peter's Basilica", dko='미켈란젤로의 돔과 〈피에타〉, 베르니니의 발다키노가 있는 세계 최대의 성당입니다.', den='The world’s largest church, with Michelangelo’s dome and Pietà and Bernini’s baldachin.', maps="St. Peter's Basilica",
         visit=dict(min=60, max=120, s='https://www.basilicasanpietro.va/en/opening-hours', n='무료입니다. 10월 26일~3월 28일은 7:00~19:00, 여름은 7:00~20:00에 엽니다. 보안 검색 줄이 길고 어깨와 무릎을 가려야 하며, 쿠폴라(돔)는 따로 예약합니다.|Free. Open 7:00–19:00 from 26 October to 28 March and 7:00–20:00 in summer. Expect a long security queue, cover shoulders and knees, and book the dome separately.', k='2026-10')),
    dict(ko='캄포 데 피오리', en="Campo de' Fiori", dko='조르다노 브루노 동상이 선 광장으로 아침엔 시장, 밤엔 식당과 바로 붐빕니다.', den='The square of Giordano Bruno’s statue: a market by morning, restaurants and bars by night.', maps="Campo de' Fiori",
         visit=dict(min=20, max=30, s='https://www.turismoroma.it/en/places/campo-de%E2%80%99-fiori', n='시장은 월~토 오전에 섭니다.|The market is held Monday to Saturday mornings.')),
    dict(ko='콜론나 광장', en='Piazza Colonna', dko='마르쿠스 아우렐리우스의 승전을 새긴 약 30m 기둥이 선 광장으로, 옆의 키지 궁전은 총리 관저입니다.', den='The square of the 30-metre column carved with Marcus Aurelius’ campaigns; Palazzo Chigi beside it is the prime minister’s office.', maps='Piazza Colonna',
         visit=dict(min=10, max=15, s='https://www.turismoroma.it/en/places/piazza-colonna')),
    dict(ko='카라칼라 욕장', en='Baths of Caracalla', dko='3세기 황제의 거대한 공중목욕탕 유적으로 여름엔 오페라 무대가 됩니다.', den='The vast 3rd-century imperial baths, an opera stage in summer.', maps='Terme di Caracalla',
         visit=dict(min=90, max=120, c='mon', s='https://soprintendenzaspecialeroma.it/luoghi/terme-di-caracalla/', n='월요일에 쉽니다. 겨울(10월 25일~2월 28일)은 9:00~16:30(마지막 입장 15:30)이고 봄·여름엔 더 늦게까지 엽니다. 표는 이름이 적힌 표입니다.|Closed on Mondays. Winter (25 October–28 February) 9:00–16:30, last entry 15:30, with later hours in spring and summer; tickets are named.', k='2026-10')),
]
D1 = ('1일차 · 테르미니에서 스페인 광장까지', 'Day 1 · Termini to the Spanish Steps', [15, 14, 7, 3, 5, 18, 16, 17])
D2 = ('2일차 · 고대 로마', 'Day 2 · Ancient Rome', [1, 19, 6, 20, 21, 11, 22, 23, 24])
D3 = ('3일차 · 바티칸에서 판테온까지', 'Day 3 · The Vatican to the Pantheon', [2, 25, 8, 10, 9, 26, 4, 27])
MORE = ('시간 여유가 있을 때', 'If you have time', [28])


def main():
    cities = rd('cities.ts')
    i = cities.find('id: "rome",')
    nxt = cities.find('\n  {\n    id: "', i + 10)
    for k, h in enumerate(SIGHTS):
        hid = f'rome-h{14 + k}'
        if f'"{hid}"' in cities:
            continue
        j = cities.rindex('\n', i, cities.rindex('],', i, nxt))
        sep = '' if cities[:j].rstrip().endswith(',') else ','
        cities = cities[:j] + sep + '\n' + hl_block(hid, f'/highlights/rome-{14 + k}.jpg', h) + ',' + cities[j:]
        nxt = cities.find('\n  {\n    id: "', i + 10)
        insert_after_line('visit-it.ts', r"^  'rome-h\d+': v\(.*\),\n", vline(hid, h['visit']))
        print('sight', hid)
    # list order and day headings; the day-trip group (h12, h13) keeps its own heading at the end
    a = cities.find('highlights: [\n', i) + len('highlights: [\n')
    nxt = cities.find('\n  {\n    id: "', i + 10)
    b = cities.rindex('\n', a, cities.rindex('],', a, nxt))
    blocks = re.findall(r'      \{\n.*?\n      \}', cities[a:b], re.S)
    by = {re.search(r'id: "(rome-h\d+)"', x).group(1): x for x in blocks}
    out = []
    for ko, en, ns in (D1, D2, D3, MORE):
        for n in ns:
            x = re.sub(r'\n        group: \{[^\n]*\},', '', by.pop(f'rome-h{n}'))
            out.append(x.replace('\n      }', f'\n        group: {{ ko: "{ko}", en: "{en}" }},\n      }}'))
    out += [by.pop(f'rome-h{n}') for n in (12, 13)]
    assert not by, by.keys()
    wr('cities.ts', cities[:a] + ',\n'.join(out) + ',' + cities[b:])


if __name__ == '__main__':
    main()
