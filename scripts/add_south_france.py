#!/usr/bin/env python3
"""Insert southern France towns into the data files (2026-10 batch). Each town is added once: towns already in
cities.ts are skipped. Photos are added separately (public/cities, public/highlights) after the user picks them.

    python3 scripts/add_south_france.py <batch>
"""
import json
import os
import re
import sys
import urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'src/data')


def q(s):
    return urllib.parse.quote(s)


def read(name):
    return open(os.path.join(DATA, name), encoding='utf8').read()


def write(name, s):
    open(os.path.join(DATA, name), 'w', encoding='utf8').write(s)


def insert_before_end(name, anchor_regex, text):
    """Insert text right after the line matched by anchor_regex."""
    s = read(name)
    m = re.search(anchor_regex, s, re.M)
    assert m, (name, anchor_regex)
    s = s[:m.end()] + text + s[m.end():]
    write(name, s)


BATCHES = json.load(open(os.path.join(ROOT, 'scripts/south_france_towns.json'), encoding='utf8'))


def ts_text(ko, en):
    return '{ ko: ' + json.dumps(ko, ensure_ascii=False) + ', en: ' + json.dumps(en, ensure_ascii=False) + ' }'


def city_block(c):
    hl = []
    for i, h in enumerate(c['highlights'], 1):
        hl.append(
            '      {\n'
            f'        id: "{c["id"]}-h{i}",\n'
            f'        name: {ts_text(h["ko"], h["en"])},\n'
            f'        description: {ts_text(h["dko"], h["den"])},\n'
            f'        image: "/highlights/{c["id"]}-{i}.jpg",\n'
            f'        mapsUrl: "https://www.google.com/maps/search/?api=1&query={q(h["maps"])}",\n'
            + (f'        group: {ts_text(*h["group"])},\n' if h.get('group') else '')
            + '      }'
        )
    return (
        '\n  {\n'
        f'    id: "{c["id"]}",\n'
        '    countryId: "fr",\n'
        f'    lat: {c["lat"]},\n'
        f'    lng: {c["lng"]},\n'
        f'    signatureImage: "/cities/{c["id"]}.jpg",\n'
        f'    name: {ts_text(c["ko"], c["en"])},\n'
        f'    nativeName: {json.dumps(c["native"], ensure_ascii=False)},\n'
        '    blurb: {\n'
        f'      ko: {json.dumps(c["blurb"][0], ensure_ascii=False)},\n'
        f'      en: {json.dumps(c["blurb"][1], ensure_ascii=False)},\n'
        '    },\n'
        '    highlights: [\n' + ',\n'.join(hl) + '\n    ],\n'
        '  },'
    )


def js(s):
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"


def main(batch):
    towns = BATCHES[batch]
    cities = read('cities.ts')
    todo = [c for c in towns if f'id: "{c["id"]}",' not in cities]
    if not todo:
        print('nothing to add')
        return
    # cities.ts: after the anchor city
    for c in todo:
        s = read('cities.ts')
        i = s.find(f'id: "{c["after"]}",')
        j = s.find('\n  {\n    id: "', i + 10)
        write('cities.ts', s[:j] + city_block(c) + s[j:])
    # countries.ts: France cityIds and the southern group, after the anchor city
    s = read('countries.ts')
    for c in todo:
        for pat in (r"(cityIds: \['paris'[^\]]*?)'" + c['after'] + "'", r"(\{ title: \{ ko: '남부'[^\]]*?)'" + c['after'] + "'"):
            m = re.search(pat, s)
            assert m, (c['id'], pat)
            s = s[:m.end()] + f", '{c['id']}'" + s[m.end():]
    write('countries.ts', s)
    for c in todo:
        cid = f"'{c['id']}'" if '-' in c['id'] else c['id']
        # hubs
        h = c['hubs']
        lines = [f'  {cid}: {{']
        for k in ('air', 'rail', 'bus', 'port'):
            if h.get(k):
                if h[k] == 'NCE()':
                    lines.append(f'    {k}: [NCE()],')
                else:
                    items = ', '.join('[' + ', '.join(js(x) for x in t) + ']' for t in h[k])
                    lines.append(f'    {k}: [{items}],')
        lines.append('  },\n')
        insert_before_end('hubs-west.ts', r"^  nice: \{\n", '')  # sanity: anchor exists
        s = read('hubs-west.ts')
        k = s.index('  ajaccio: {\n')
        write('hubs-west.ts', s[:k] + '\n'.join(lines) + s[k:])
        # itinerary
        insert_before_end('itinerary-fr.ts', r"^  avignon: \[.*\],\n", f"  {cid}: {json.dumps(c['itinerary'])},\n")
        # season note
        if c.get('season'):
            insert_before_end('season-notes.ts', r"^  avignon: \{.*\},\n", f"  {cid}: {{ n: {js(c['season'])} }},\n")
        # visit info
        vis = []
        for i, h in enumerate(c['highlights'], 1):
            v = h['visit']
            opts = ', '.join(f'{k}: {js(str(x))}' for k, x in v.items() if k not in ('min', 'max'))
            vis.append(f"  '{c['id']}-h{i}': v({v['min']}, {v['max']}{', { ' + opts + ' }' if opts else ''}),\n")
        insert_before_end('visit-fr.ts', r"^  'avignon-h5': v\(.*\),\n", ''.join(vis))
        # stay
        s = read('stay.ts')
        k = s.index('  annecy: [\n')
        rows = ''.join(f"    a({js(a[0])}, {js(a[1])}, {js(a[2])}, {js(a[3])}, {js(a[4])}),\n" for a in c['stay'])
        write('stay.ts', s[:k] + f'  {cid}: [\n{rows}  ],\n' + s[k:])
        # routes
        rows = ''
        for r in c['routes']:
            parts = [js(r[0]), js(r[1]), js(r[2]), str(r[3]), 'true' if r[4] else 'false'] + [js(x) for x in r[5:]]
            rows += '  [' + ', '.join(parts) + '],\n'
        insert_before_end('routes-fr.ts', r"^  \['cannes', 'monaco', .*\],\n", rows)
        # transit
        apps = ''.join(f"      ta({js(a[0])}{', ' + ts_text(a[1], a[2]) if len(a) > 1 else ''}),\n" for a in c['apps'])
        t = c['transit']
        block = (f"  {cid}: {{\n    modes: {json.dumps(t['modes']).replace(chr(34), chr(39))},\n    howTo: {{\n"
                 f"      ko: {js(t['ko'])},\n      en: {js(t['en'])},\n    }},\n    apps: [\n{apps}    ],\n  }},\n")
        s = read('transit-city.ts')
        k = s.index('  toulouse: {\n')
        write('transit-city.ts', s[:k] + block + s[k:])
        # places
        if c.get('places'):
            rows = f"  // —— {c['id']} ——\n"
            for n, p in enumerate(c['places'], 1):
                cat = p['cat']
                opt = f", {{ michelin: '{p['michelin']}' }}" if p.get('michelin') else ''
                rows += (f"  place('{c['id']}-{cat}-{n}', '{c['id']}', '{cat}', {js(p['name'])}, {js(p['addr'])}, "
                         f"{js(p['ko'])}, {js(p['en'])}{opt}),\n")
            s = read('places-fr-extra.ts')
            k = s.index('  // —— avignon ——\n')
            write('places-fr-extra.ts', s[:k] + rows + s[k:])
        print('added', c['id'])


if __name__ == '__main__':
    main(sys.argv[1])
