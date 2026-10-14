"""Third pass for highlights still without a pin: Wikidata items right beside each OpenStreetMap hit, into geo-near.json.

The city-wide pass (geo_wikidata.py) matches names strictly, so it drops a label in another language
("Market of San Miguel") or a longer official name ("Hofbräuhaus am Platzl"). Standing within RADIUS km
of the OpenStreetMap hit for the same highlight is strong evidence on its own, so here names.near_place
is enough. geo_verify.py applies both tests again before it pins anything.

Usage: python3 scripts/itinerary/geo_near.py   (run after geo_verify.py; reruns continue from the cache)
"""
import json, math, os, re, subprocess, sys, time, urllib.parse

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from names import near_place

S = os.path.dirname(os.path.abspath(__file__))
RADIUS = 0.15
d = json.load(open(S + '/cities.json'))
cache_p = S + '/geo-near.json'
cache = json.load(open(cache_p)) if os.path.exists(cache_p) else {}
osm = json.load(open(S + '/geo.json'))
nom = json.load(open(S + '/geo-nom.json'))
pinned = set(re.findall(r"'([^']+)': \[", open(S + '/../../src/data/geo.ts').read()))


def dist(a, b, c, e):
    p = math.radians
    x = math.sin(p(c - a) / 2) ** 2 + math.cos(p(a)) * math.cos(p(c)) * math.sin(p(e - b) / 2) ** 2
    return 2 * 6371 * math.asin(math.sqrt(x))


def around(lat, lng):
    q = f'''SELECT ?item ?l ?lat ?lon WHERE {{
  SERVICE wikibase:around {{ ?item wdt:P625 ?loc . bd:serviceParam wikibase:center "Point({lng} {lat})"^^geo:wktLiteral . bd:serviceParam wikibase:radius "{RADIUS}" . }}
  {{ ?item rdfs:label ?l }} UNION {{ ?item skos:altLabel ?l }} FILTER(LANG(?l) IN ("en", "es", "it", "fr", "de", "pt", "nl"))
  BIND(geof:latitude(?loc) AS ?lat) BIND(geof:longitude(?loc) AS ?lon) }}'''
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
        time.sleep(30)
        raise
    time.sleep(max(2, took * 0.6))  # one query at a time, then rest (see geo_wikidata.py)
    return [(float(b['lat']['value']), float(b['lon']['value']), b['l']['value']) for b in rows]


n = 0
for c in d:
    for h in c['h']:
        if h['id'] in pinned or h['id'] in cache:
            continue
        names = {h['en'], urllib.parse.unquote(urllib.parse.parse_qs(urllib.parse.urlparse(h['maps']).query)['query'][0])}
        pts = [p for p in ([osm[h['id']]] if osm.get(h['id']) else []) + [x[:2] for x in nom.get(h['id']) or []]
               if dist(c['lat'], c['lng'], p[0], p[1]) < 30]
        got, seen = [], []
        try:
            for p in pts:
                if len(seen) == 2:
                    break
                if any(dist(p[0], p[1], s[0], s[1]) < RADIUS / 2 for s in seen):
                    continue
                seen.append(p)
                for lat, lon, label in around(p[0], p[1]):
                    if any(near_place(x, label, c['en']) for x in names) and [round(lat, 5), round(lon, 5), label] not in got:
                        got.append([round(lat, 5), round(lon, 5), label])
        except Exception:
            continue  # leave uncached; a rerun retries
        cache[h['id']] = got[:8]
        n += 1
        if n % 10 == 0:
            json.dump(cache, open(cache_p, 'w'), ensure_ascii=False)
            print(n, sum(1 for v in cache.values() if v), flush=True)
json.dump(cache, open(cache_p, 'w'), ensure_ascii=False)
print('done', len(cache), 'looked up,', sum(1 for v in cache.values() if v), 'with a neighbour')
