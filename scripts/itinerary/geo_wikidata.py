"""Second source for highlight coordinates: Wikidata items near each city, matched by name, into geo-wd.json.

One SPARQL query per city fetches every item with coordinates (and at least one Wikipedia article)
within RADIUS km, with English labels and aliases. A highlight keeps the items whose label or alias
names the same place. Highlights whose OpenStreetMap candidates lie farther out get a small query
around each candidate (--far, run after geo_nominatim.py).

Usage: python3 scripts/itinerary/geo_wikidata.py [--far] [city-id …]
"""
import json, math, os, re, subprocess, sys, time, urllib.parse

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from names import same_place

S = os.path.dirname(os.path.abspath(__file__))
RADIUS = 4
d = json.load(open(S + '/cities.json'))
cache_p = S + '/geo-wd.json'
cache = json.load(open(cache_p)) if os.path.exists(cache_p) else {}

def dist(a, b, c, e):
    p = math.radians
    x = math.sin(p(c - a) / 2) ** 2 + math.cos(p(a)) * math.cos(p(c)) * math.sin(p(e - b) / 2) ** 2
    return 2 * 6371 * math.asin(math.sqrt(x))


def around(lat, lng, km, min_links=1):
    q = f'''SELECT ?item ?l ?alt ?lat ?lon WHERE {{
  SERVICE wikibase:around {{ ?item wdt:P625 ?loc . bd:serviceParam wikibase:center "Point({lng} {lat})"^^geo:wktLiteral . bd:serviceParam wikibase:radius "{km}" . }}
  ?item wikibase:sitelinks ?n . FILTER(?n >= {min_links})
  ?item rdfs:label ?l . FILTER(LANG(?l) = "en")
  OPTIONAL {{ ?item skos:altLabel ?alt . FILTER(LANG(?alt) = "en") }}
  BIND(geof:latitude(?loc) AS ?lat) BIND(geof:longitude(?loc) AS ?lon) }}'''
    # The endpoint allows about 60 s of query time a minute and bans bursts of failures:
    # one query at a time, then rest for as long as it took.
    t = time.time()
    r = subprocess.run(['curl', '-s', '-m', '58', '-A', 'EuropeTourGuide/1.0 (https://github.com/kajeken-1905/euroupetour-project) curl',
                        '-H', 'Accept: application/sparql-results+json', '--data-urlencode', 'query=' + q,
                        'https://query.wikidata.org/sparql'], capture_output=True, text=True)
    took = time.time() - t
    try:
        rows = json.loads(r.stdout)['results']['bindings']
    except Exception:
        if 'Wikimedia Error' in r.stdout:  # rate-limited: stop hammering
            print('rate limited; rerun later', flush=True)
            json.dump(cache, open(cache_p, 'w'), ensure_ascii=False)
            sys.exit(2)
        time.sleep(65)
        raise
    time.sleep(max(2, took * 0.6))
    items = {}
    for b in rows:
        it = items.setdefault(b['item']['value'], [float(b['lat']['value']), float(b['lon']['value']), b['l']['value'], set()])
        if 'alt' in b:
            it[3].add(b['alt']['value'])
    return list(items.values())


def match(h, c, items):
    names = {h['en'], urllib.parse.unquote(urllib.parse.parse_qs(urllib.parse.urlparse(h['maps']).query)['query'][0])}
    out = []
    for lat, lon, label, alts in items:
        hit = next((x for x in [label, *sorted(alts)] if any(same_place(n, x, c['en']) for n in names)), None)
        if hit:  # keep the text that matched, so geo_verify.py can re-check it
            out.append([round(lat, 5), round(lon, 5), hit])
    return out[:8]


args = [a for a in sys.argv[1:] if not a.startswith('--')]
far = '--far' in sys.argv
osm = json.load(open(S + '/geo.json'))
nom = json.load(open(S + '/geo-nom.json')) if os.path.exists(S + '/geo-nom.json') else {}
done = 0
# --redo: look again (with the stricter name rule) for everything that has no pin yet.
pinned = set(re.findall(r"'([^']+)': \[", open(S + '/../../src/data/geo.ts').read())) if '--redo' in sys.argv else None
todo = (lambda i: i not in pinned and (i + '!v2') not in cache) if pinned is not None else (lambda i: i not in cache)
for c in d:
    if args and c['id'] not in args:
        continue
    if far:
        # Candidates outside the city query (day trips): look around each one.
        for h in c['h']:
            if cache.get(h['id']) or cache.get(h['id'] + ('!far2' if pinned is not None else '!far')) is not None or (pinned and h['id'] in pinned):
                continue
            pts = [p for p in ([osm[h['id']]] if osm.get(h['id']) else []) + [x[:2] for x in nom.get(h['id']) or []]
                   if dist(c['lat'], c['lng'], p[0], p[1]) > RADIUS - 0.5]
            if not pts:
                continue
            got = []
            try:
                for p in pts[:3]:
                    got += match(h, c, around(p[0], p[1], 1))
            except Exception:
                continue
            cache[h['id']] = got
            cache[h['id'] + ('!far2' if pinned is not None else '!far')] = 1
            done += 1
    elif any(todo(h['id']) for h in c['h']):
        try:
            items = around(c['lat'], c['lng'], RADIUS)
        except Exception:
            try:
                items = around(c['lat'], c['lng'], 3, 3)  # very dense centres time out
            except Exception:
                print('failed', c['id'], flush=True)
                continue
        for h in c['h']:
            if pinned is None or h['id'] not in pinned:
                cache[h['id']] = match(h, c, items)
                cache[h['id'] + '!v2'] = 1
        done += 1
    if done and done % 5 == 0:
        json.dump(cache, open(cache_p, 'w'), ensure_ascii=False)
json.dump(cache, open(cache_p, 'w'), ensure_ascii=False)
ids = [h['id'] for c in d for h in c['h']]
json.dump(cache, open(cache_p, 'w'), ensure_ascii=False)
print('done', sum(1 for i in ids if i in cache), 'looked up,', sum(1 for i in ids if cache.get(i)), 'with a match')
