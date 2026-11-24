"""Capital's group first, capital first inside it (2026-11-24, user: "가장 첫번째 도시는 수도")."""
import re
CAP = dict(it='rome', fr='paris', de='berlin', es='madrid', at='vienna', pl='warsaw', pt='lisbon', be='brussels', ie='dublin',
           uk='london', cz='prague', ch='bern', hr='zagreb', sk='bratislava', hu='budapest', nl='amsterdam', gr='athens',
           se='stockholm', no='oslo', fi='helsinki', tr='ankara', dk='copenhagen', mt='valletta', cy='nicosia', ee='tallinn',
           lv='riga', lt='vilnius', mk='skopje', al='tirana', bg='sofia', ro='bucharest', ge='tbilisi', am='yerevan', az='baku',
           md='chisinau', ru='moscow', is_='reykjavik', ma='rabat', ae='abu-dhabi', ps='ramallah')
p = 'src/data/countries.ts'
s = open(p).read()
q = lambda l: ', '.join(f"'{c}'" for c in l)
for cc, cap in CAP.items():
    cc = cc.rstrip('_')
    m0 = re.search(rf"\n    id: '{cc}',\n", s)
    if not m0:
        continue
    end = s.find("\n  {\n    id: '", m0.end())
    end = len(s) if end < 0 else end
    blk = s[m0.start():end]
    gm = re.search(r"    cityGroups: \[\n(.*?)\n    \],\n", blk, re.S)
    if not gm:
        continue
    rows = re.findall(r"      \{ title: (\{ ko: '[^']*', en: '[^']*' \}), cityIds: \[([^\]]*)\] \},?", gm.group(1))
    G = [(t, re.findall(r"'([^']+)'", ids)) for t, ids in rows]
    k = [i for i, (_, ids) in enumerate(G) if cap in ids]
    if not k:
        print('no capital', cc); continue
    t, ids = G.pop(k[0])
    G.insert(0, (t, [cap] + [x for x in ids if x != cap]))
    allg = [c for _, l in G for c in l]
    cm = re.search(r"\n    cityIds: \[([^\]]*)\],\n", blk)
    assert sorted(re.findall(r"'([^']+)'", cm.group(1))) == sorted(allg), cc
    nb = blk.replace(cm.group(0), f"\n    cityIds: [{q(allg)}],\n", 1)
    nb = nb.replace(gm.group(0), "    cityGroups: [\n" + ''.join(f"      {{ title: {t}, cityIds: [{q(l)}] }},\n" for t, l in G) + "    ],\n")
    if nb != blk:
        print('moved', cc, cap)
    s = s[:m0.start()] + nb + s[end:]
open(p, 'w').write(s)
