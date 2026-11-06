#!/usr/bin/env python3
"""2026-11-06 Hungary new cities: restaurants, bakeries and cafés for Győr, Sopron, Hollókő, Tokaj and Keszthely (scripts/data/hu_places_2026-11-06.tsv:
city, b|c, name, address, ko, en). Picked from Google Maps search lists (rating >= 4.4, within a few km of the
city centre) and each read from its own Google Maps place page that day (temporarily closed, out-of-town or
wrong-type results left out). Run once."""
import os, re
from add_daytrip_places import rd, wr, js

HERE = os.path.dirname(os.path.abspath(__file__))
CAT = {'r': 'fine_dining', 'b': 'bakery', 'c': 'cafe'}


def main():
    idx = dict(re.findall(r'"id":"([a-z0-9-]+)","countryId":"([a-z]+)"', open(os.path.join(HERE, '../src/data/cityIndex.ts')).read()))
    rows = [l.rstrip('\n').split('\t') for l in open(os.path.join(HERE, 'data/hu_places_2026-11-06.tsv')) if l.strip()]
    by_file = {}
    for r in rows:
        by_file.setdefault(f'places-{idx[r[0]]}-extra.ts', []).append(r)
    for f, rs in by_file.items():
        s = rd(f)
        block, cur = '', None
        for row in rs:
            city, k, name, addr, ko, en = row[:6]
            mi = row[6] if len(row) > 6 and row[6] else ''
            cat = CAT[k]
            used = [int(n) for n in re.findall(r"'%s-%s-(\d+)'" % (re.escape(city), cat), s + block)]
            pid = f'{city}-{cat}-{max(used, default=0) + 1}'
            if city != cur:
                block += f'\n  // —— {city}: restaurants, bakeries and cafés (2026-11-06) ——\n'
                cur = city
            block += f"  place('{pid}', '{city}', '{cat}', {js(name)}, {js(addr)}, {js(ko)}, {js(en)}" + (f", {{ michelin: '{mi}' }}" if mi else '') + "),\n"
        k = s.rstrip().rindex(']')
        wr(f, s[:k].rstrip('\n') + '\n' + block + s[k:])
        print(f, len(rs))


if __name__ == '__main__':
    main()
