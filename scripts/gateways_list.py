#!/usr/bin/env python3
"""Write GATEWAYS.md: which cities have airport/station/port cards (src/data/gateways/*.ts), and which
cities still list an airport of their own in the hubs files but have no card yet.

    python3 scripts/gateways_list.py
"""
import glob
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KIND = {'air': '✈️', 'rail': '🚆', 'port': '⛴️'}
# Left out at the user's wish (night trains for Ukraine and Belarus were removed too); Russia is under a special advisory.
SKIP = {'ua': '우크라이나', 'by': '벨라루스', 'ru': '러시아'}


def city_index():
    s = open(os.path.join(ROOT, 'src/data/cityIndex.ts'), encoding='utf8').read()
    out = {}
    for line in s.splitlines():
        line = line.strip().rstrip(',')
        if line.startswith('{"id"'):
            c = json.loads(line)
            out[c['id']] = c
    return out


def country_names():
    s = open(os.path.join(ROOT, 'src/data/countries.ts'), encoding='utf8').read()
    return dict(re.findall(r"id: '([a-z]{2})',\s*\n\s*name: \{ ko: '([^']+)'", s))


def gateways():
    out = []
    for f in sorted(glob.glob(os.path.join(ROOT, 'src/data/gateways/*.ts'))):
        s = open(f, encoding='utf8').read()
        for block in re.split(r'\n  \{\n', s)[1:]:
            g = dict(re.findall(r"^    (id|cityId|kind|name|code|highlightId|checked): '([^']*)'", block, re.M))
            g['intl'] = 'intl: true' in block
            g['photo'] = "image: '" in block
            out.append(g)
    return out


def own_airport_cities():
    """Cities whose hubs entry names an airport literally (not a shared helper like MAD())."""
    out = set()
    for f in glob.glob(os.path.join(ROOT, 'src/data/hubs-*.ts')):
        s = open(f, encoding='utf8').read()
        for m in re.finditer(r"\n  '?([a-z0-9-]+)'?: \{\n(.*?)\n  \},", s, re.S):
            a = re.search(r'air: \[(.*?)\],?\n', m.group(2), re.S)
            if a and re.search(r"\[\s*'[^']+\((?:[A-Z]{3})\)'", a.group(1)) and not re.search(r"'[^']*\|", a.group(1).split('\n')[0] if False else ''):
                # Airports noted as being elsewhere carry a place note (third tuple item); skip those.
                first = re.findall(r"\[\s*'([^']+)', '([^']+)'(?:, '([^']*)')?\]", a.group(1))
                if any(not note for _, _, note in first):
                    out.add(m.group(1))
    return out


def main():
    cities, names, gws = city_index(), country_names(), gateways()
    by_city = {}
    for g in gws:
        by_city.setdefault(g['cityId'], []).append(g)
    lines = [
        '# 공항·기차역·항구 카드 진행 목록',
        '',
        '`python3 scripts/gateways_list.py`로 다시 만듭니다. 데이터는 `src/data/gateways/<국가>.ts`.',
        '',
        f'- 카드가 있는 도시 **{len(by_city)}곳**, 카드 {len(gws)}개 '
        f'(공항 {sum(g["kind"] == "air" for g in gws)} · 역 {sum(g["kind"] == "rail" for g in gws)} · 항구 {sum(g["kind"] == "port" for g in gws)})',
        '- 🔗 = 기존 관광 포인트 카드에 이동 정보를 붙인 곳, 📷 = 사진 있음',
        '',
        '## 완료된 도시',
        '',
    ]
    countries = sorted({cities[c]['countryId'] for c in by_city if c in cities}, key=lambda k: names.get(k, k))
    for cc in countries:
        lines.append(f'### {names.get(cc, cc)}')
        for cid in sorted((c for c in by_city if cities.get(c, {}).get('countryId') == cc), key=lambda c: cities[c]['name']['ko']):
            items = []
            for g in by_city[cid]:
                label = g['name'].split('|')[0] + (f" ({g['code']})" if g.get('code') else '')
                items.append(KIND[g['kind']] + ' ' + label + (' 🔗' if g.get('highlightId') else '') + (' 📷' if g['photo'] else ''))
            lines.append(f"- **{cities[cid]['name']['ko']}** — " + ', '.join(items))
        lines.append('')
    todo = sorted((c for c in own_airport_cities() - set(by_city) if cities.get(c, {}).get('countryId') not in SKIP), key=lambda c: (names.get(cities.get(c, {}).get('countryId', ''), ''), c))
    lines += ['## 공항이 있지만 아직 카드가 없는 도시', '', f'{len(todo)}곳 (hubs 파일에 공항이 도시 자체 공항으로 적힌 곳 기준, {"·".join(SKIP.values())}는 제외)', '']
    cur = None
    for cid in todo:
        c = cities.get(cid)
        if not c:
            continue
        cc = names.get(c['countryId'], c['countryId'])
        if cc != cur:
            lines.append(f'- **{cc}**: ' + c['name']['ko'])
            cur = cc
        else:
            lines[-1] += ', ' + c['name']['ko']
    open(os.path.join(ROOT, 'GATEWAYS.md'), 'w', encoding='utf8').write('\n'.join(lines) + '\n')
    print(f'{len(by_city)} cities done, {len(todo)} to go')


if __name__ == '__main__':
    main()
