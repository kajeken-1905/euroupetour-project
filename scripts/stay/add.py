#!/usr/bin/env python3
"""Append where-to-stay entries to src/data/stay.ts and their sources to scripts/stay/sources.md.

    python3 scripts/stay/add.py batch.json

batch.json: {"city-id": {"src": ["url", ...], "areas": [[ko, en, query, "tagKo|tagEn", "noteKo|noteEn"], ...]}}
"""
import json, os, sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..')
TS = os.path.join(ROOT, 'src', 'data', 'stay.ts')
MD = os.path.join(ROOT, 'scripts', 'stay', 'sources.md')


def q(s):
    return "'" + s.replace('\\', '\\\\').replace("'", '’') + "'"


batch = json.load(open(sys.argv[1]))
ts = open(TS).read()
marker = '\n}\n\nexport function getStayAreas'
md = open(MD).read().rstrip('\n') + '\n'
for city, e in batch.items():
    if f'\n  {city}: [' in ts or f"\n  '{city}': [" in ts:
        print('skip (exists)', city)
        continue
    key = city if city.replace('_', '').isalnum() else f"'{city}'"
    rows = ''.join(f"    a({', '.join(q(x) for x in r)}),\n" for r in e['areas'])
    ts = ts.replace(marker, f'\n  {key}: [\n{rows}  ],' + marker, 1)
    md += f"- {city}: {' · '.join(u.split('://')[-1].rstrip('/') for u in e['src'])}\n"
    print('added', city, len(e['areas']))
open(TS, 'w').write(ts)
open(MD, 'w').write(md)
