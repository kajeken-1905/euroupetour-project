"""Keep only coordinates that two independent sources agree on, and write src/data/geo.ts.

A highlight gets a pin when an OpenStreetMap hit (Photon in geo.json, Nominatim in geo-nom.json)
and the coordinates Wikipedia/Wikidata give for that same place (geo-wiki.json, geo-wd.json) lie
within LIMIT metres of each other; the pin uses the OpenStreetMap position. Everything else is
left without a pin. geo-manual.json can add hand-checked entries.

Usage: python3 scripts/itinerary/geo_verify.py [--report]
"""
import json, math, os, re, sys, unicodedata, urllib.parse

S = os.path.dirname(os.path.abspath(__file__))
LIMIT = 300
osm = json.load(open(S + '/geo.json'))
wiki = json.load(open(S + '/geo-wiki.json'))
nom_p = S + '/geo-nom.json'
nom = json.load(open(nom_p)) if os.path.exists(nom_p) else {}
wd_p = S + '/geo-wd.json'
wd = json.load(open(wd_p)) if os.path.exists(wd_p) else {}  # already matched by name in geo_wikidata.py
manual_p = S + '/geo-manual.json'
manual = json.load(open(manual_p)) if os.path.exists(manual_p) else {}
cities = json.load(open(S + '/cities.json'))
STOP = {'the', 'of', 'de', 'la', 'le', 'du', 'des', 'di', 'del', 'della', 'and', 'st', 'san', 'santa', 'saint',
        'museum', 'church', 'cathedral', 'square', 'old', 'town', 'castle', 'palace', 'park', 'market', 'bridge',
        'tower', 'city', 'national', 'monastery', 'garden', 'gardens', 'hall', 'street', 'house', 'lake', 'fortress'}


def dist(a, b, c, e):
    p = math.radians
    x = math.sin(p(c - a) / 2) ** 2 + math.cos(p(a)) * math.cos(p(c)) * math.sin(p(e - b) / 2) ** 2
    return 2 * 6371000 * math.asin(math.sqrt(x))


def words(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode().lower()
    return set(re.findall(r'[a-z0-9]+', s))


GENERIC = STOP | {'new', 'main', 'central', 'royal', 'viewpoint', 'beach', 'harbour', 'harbor', 'port', 'quarter',
                  'district', 'centre', 'center', 'historic', 'gate', 'walls', 'wall', 'in', 'a', 'an', 'at', 'on', 's'}

# Words that recur from town to town; a name made only of these is "plain" and must stay near its city.
COMMON = GENERIC | {'bazaar', 'hill', 'river', 'riverside', 'promenade', 'waterfront', 'station', 'theatre', 'theater',
                    'opera', 'library', 'university', 'gallery', 'art', 'history', 'village', 'island', 'bay', 'fort',
                    'basilica', 'chapel', 'abbey', 'mosque', 'synagogue', 'fountain', 'monument', 'memorial', 'zoo',
                    'aquarium', 'botanical', 'cemetery', 'citadel', 'ruins', 'roman', 'medieval', 'great', 'grand',
                    'little', 'upper', 'lower', 'avenue', 'boulevard', 'plaza', 'piazza', 'place', 'platz', 'cable',
                    'car', 'funicular', 'lighthouse', 'pier', 'falls', 'waterfall', 'cave', 'caves', 'mine', 'valley',
                    'gorge', 'mountain', 'view', 'lookout', 'walk', 'bath', 'baths', 'mill', 'clock', 'state', 'town'}


def same_place(name, title, city):
    """The reference must name the highlight itself, not the town around it or a neighbour that shares a word."""
    c = words(city)
    n, t = words(name) - c - {'s'}, words(title) - c - {'s'}
    if not n or not t:
        return False
    if n == t:
        return True
    ns, ts = n - GENERIC, t - GENERIC
    if not ns or not ts:
        return False
    # "Great Meteoron" ~ "Monastery of Great Meteoron"; a single shared word ("Westminster") is not enough.
    return ns == ts or (min(len(ns), len(ts)) >= 2 and (ns <= ts or ts <= ns))


def names(h):
    q = urllib.parse.unquote(urllib.parse.parse_qs(urllib.parse.urlparse(h['maps']).query)['query'][0])
    return [h['en'], q]


out, rows = {}, []
for c in cities:
    for h in c['h']:
        i = h['id']
        if i in manual:
            if manual[i]:
                out[i] = manual[i][:2]
            rows.append((i, 'manual' if manual[i] else 'manual-none', '', h['en']))
            continue
        b = wiki.get(i)
        refs = [r for r in ([b] if b else []) + list(wd.get(i) or []) if any(same_place(n, r[2], c['en']) for n in names(h))]
        cands = ([osm[i]] if osm.get(i) else []) + [x[:2] for x in nom.get(i) or []]
        if not cands:
            rows.append((i, 'no-osm', '', h['en']))
        elif not refs:
            rows.append((i, 'other-article' if b or wd.get(i) else 'no-wiki', '', h['en']))
        else:
            pairs = [(dist(x[0], x[1], r[0], r[1]), x, r[2]) for x in cands for r in refs]
            # A name with no distinctive word ("Old Bazaar") also exists in the next town: keep it local.
            plain = not all((words(n) - words(c['en']) - COMMON) for n in names(h))
            agree = [p for p in pairs if p[0] <= LIMIT and (not plain or dist(c['lat'], c['lng'], p[1][0], p[1][1]) <= 5000)]
            if agree:
                # Namesakes exist in both sources (two Mottarones); keep the one nearest the city.
                m, a, title = min(agree, key=lambda p: dist(c['lat'], c['lng'], p[1][0], p[1][1]))
                out[i] = a
                rows.append((i, 'ok', f'{m:.0f}m {title}', h['en']))
            else:
                m, a, title = min(pairs)
                rows.append((i, 'apart', f'{m:.0f}m {title}', h['en']))

body = ''.join(f"  '{k}': [{v[0]}, {v[1]}],\n" for k, v in out.items())
open(S + '/../../src/data/geo.ts', 'w').write(
    '// Generated by scripts/itinerary/geo_verify.py — coordinates two sources agree on. Do not edit by hand.\n'
    'export const HIGHLIGHT_GEO: Record<string, [number, number]> = {\n' + body + '}\n')
count = {}
for r in rows:
    count[r[1]] = count.get(r[1], 0) + 1
print(len(out), 'pins of', len(rows), count)
if '--report' in sys.argv:
    for r in rows:
        print('\t'.join(r))
