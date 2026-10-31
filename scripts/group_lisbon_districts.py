#!/usr/bin/env python3
"""Lisbon sights listed by district instead of by itinerary day (2026-10-31, user request). The itinerary days in
itinerary-iberia.ts are unchanged. Re-run after add_portugal_sights*.py, whose regroup() would undo this."""
import re
from add_daytrip_places import rd, wr

GROUPS = [
    ('바이샤·호시우', 'Baixa & Rossio', [15, 16, 14, 24, 7]),
    ('시아두·바이후 알투', 'Chiado & Bairro Alto', [8, 17, 22, 25, 10]),
    ('카이스 두 소드레', 'Cais do Sodré', [5, 27]),
    ('알파마·그라사', 'Alfama & Graça', [11, 13, 4, 3, 23, 12]),
    ('벨렝', 'Belém', [2, 9, 1, 6, 34]),
    ('알칸타라 (4월 25일 다리 아래)', 'Alcântara (under the bridge)', [32, 33]),
    ('아베니다스 노바스', 'Avenidas Novas', [20]),
    ('동쪽 강변·파르크 다스 나송이스', 'East riverside & Parque das Nações', [19, 21, 26]),
    ('테주강 건너 알마다', 'Across the Tagus: Almada', [29, 31, 30, 28]),
    ('근교 당일치기', 'Day trip', [18]),
]


def main():
    s = rd('cities.ts')
    i = s.find('id: "lisbon",')
    nxt = s.find('\n  {\n    id: "', i + 10)
    a = s.find('highlights: [\n', i) + len('highlights: [\n')
    b = s.rindex('\n', a, s.rindex('],', a, nxt))
    blocks = re.findall(r'      \{\n.*?\n      \}', s[a:b], re.S)
    by = {int(re.search(r'id: "lisbon-h(\d+)"', x).group(1)): x for x in blocks}
    assert sorted(n for g in GROUPS for n in g[2]) == sorted(by), set(by) ^ {n for g in GROUPS for n in g[2]}
    out = []
    for ko, en, ns in GROUPS:
        for n in ns:
            x = re.sub(r'\n        group: \{[^\n]*\},', '', by[n])
            out.append(x.replace('\n      }', f'\n        group: {{ ko: "{ko}", en: "{en}" }},\n      }}'))
    wr('cities.ts', s[:a] + ',\n'.join(out) + ',' + s[b:])


if __name__ == '__main__':
    main()
