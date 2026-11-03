#!/usr/bin/env python3
"""2026-11-04: bakeries and cafés for the cities that had none (scripts/data/cafes_bakeries_2026-11-04.tsv:
city, b|c, name, address, ko, en). Picked from Google Maps search lists (rating >= 4.4, within a few km of the
city centre) and each read from its own Google Maps place page that day (temporarily closed, out-of-town or
wrong-type results left out). Run once."""
import os, re
from add_daytrip_places import rd, wr, js

HERE = os.path.dirname(os.path.abspath(__file__))
CAT = {'b': 'bakery', 'c': 'cafe'}


def main():
    idx = dict(re.findall(r'"id":"([a-z0-9-]+)","countryId":"([a-z]+)"', open(os.path.join(HERE, '../src/data/cityIndex.ts')).read()))
    rows = [l.rstrip('\n').split('\t') for l in open(os.path.join(HERE, 'data/cafes_bakeries_2026-11-04.tsv')) if l.strip()]
    by_file = {}
    for r in rows:
        by_file.setdefault(f'places-{idx[r[0]]}-extra.ts', []).append(r)
    for f, rs in by_file.items():
        s = rd(f)
        block, cur = '', None
        for city, k, name, addr, ko, en in rs:
            cat = CAT[k]
            used = [int(n) for n in re.findall(r"'%s-%s-(\d+)'" % (re.escape(city), cat), s + block)]
            pid = f'{city}-{cat}-{max(used, default=0) + 1}'
            if city != cur:
                block += f'\n  // —— {city}: bakeries and cafés (2026-11-04) ——\n'
                cur = city
            block += f"  place('{pid}', '{city}', '{cat}', {js(name)}, {js(addr)}, {js(ko)}, {js(en)}),\n"
        k = s.rstrip().rindex(']')
        wr(f, s[:k].rstrip('\n') + '\n' + block + s[k:])
        print(f, len(rs))


if __name__ == '__main__':
    main()
