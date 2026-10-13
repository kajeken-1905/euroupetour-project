"""Second source for highlight coordinates: Wikidata items near each city, matched by name, into geo-wd.json.

One SPARQL query per city fetches every item with coordinates (and at least one Wikipedia article)
within RADIUS km, with English labels and aliases. A highlight keeps the items whose label or alias
names the same place. Highlights whose OpenStreetMap candidates lie farther out get a small query
around each candidate (--far, run after geo_nominatim.py).

Usage: python3 scripts/itinerary/geo_wikidata.py [--far] [city-id …]
"""
import json, math, os, re, subprocess, sys, time, unicodedata, urllib.parse

S = os.path.dirname(os.path.abspath(__file__))
RADIUS = 4
d = json.load(open(S + '/cities.json'))
cache_p = S + '/geo-wd.json'
cache = json.load(open(cache_p)) if os.path.exists(cache_p) else {}
STOP = {'the', 'of', 'de', 'la', 'le', 'du', 'des', 'di', 'del', 'della', 'and', 'in', 'a', 'an', 'at', 'on'}
GENERIC = {'st', 'san', 'santa', 'saint', 'museum', 'church', 'cathedral', 'square', 'old', 'town', 'castle',
           'palace', 'park', 'market', 'bridge', 'tower', 'city', 'national', 'monastery', 'garden', 'gardens',
           'hall', 'street', 'house', 'lake', 'fortress', 'new', 'main', 'central', 'royal', 'viewpoint', 'beach',
           'harbour', 'harbor', 'port', 'quarter', 'district', 'centre', 'center', 'historic', 'gate', 'walls', 'wall'}


def dist(a, b, c, e):
    p = math.radians
    x = math.sin(p(c - a) / 2) ** 2 + math.cos(p(a)) * math.cos(p(c)) * math.sin(p(e - b) / 2) ** 2
    return 2 * 6371 * math.asin(math.sqrt(x))


def words(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode().lower()
    return set(re.findall(r'[a-z0-9]+', s)) - STOP


def same(name, label, city):
    """True when the Wikidata label names the highlight itself rather than the town or a neighbour."""
    n, l = words(name) - city, words(label) - city
    if not n or not l:
        return False
    if n == l:
        return True
    ns, ls = n - GENERIC, l - GENERIC
    # Distinctive words must be shared in full one way round: "Great Meteoron" ~ "Monastery of Great Meteoron".
    return bool(ns) and bool(ls) and (ns <= l or ls <= n)


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
    city = words(c['en'])
    names = {h['en'], urllib.parse.unquote(urllib.parse.parse_qs(urllib.parse.urlparse(h['maps']).query)['query'][0])}
    out = []
    for lat, lon, label, alts in items:
        if any(same(n, x, city) for n in names for x in [label, *alts]):
            out.append([round(lat, 5), round(lon, 5), label])
    return out[:8]


args = [a for a in sys.argv[1:] if not a.startswith('--')]
far = '--far' in sys.argv
osm = json.load(open(S + '/geo.json'))
nom = json.load(open(S + '/geo-nom.json')) if os.path.exists(S + '/geo-nom.json') else {}
done = 0
for c in d:
    if args and c['id'] not in args:
        continue
    if far:
        # Candidates outside the city query (day trips): look around each one.
        for h in c['h']:
            if cache.get(h['id']) or cache.get(h['id'] + '!far') is not None:
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
            cache[h['id'] + '!far'] = 1
            done += 1
    elif any(h['id'] not in cache for h in c['h']):
        try:
            items = around(c['lat'], c['lng'], RADIUS)
        except Exception:
            try:
                items = around(c['lat'], c['lng'], 3, 3)  # very dense centres time out
            except Exception:
                print('failed', c['id'], flush=True)
                continue
        for h in c['h']:
            cache[h['id']] = match(h, c, items)
        done += 1
    if done and done % 5 == 0:
        json.dump(cache, open(cache_p, 'w'), ensure_ascii=False)
json.dump(cache, open(cache_p, 'w'), ensure_ascii=False)
ids = [h['id'] for c in d for h in c['h']]
print('done', sum(1 for i in ids if i in cache), 'looked up,', sum(1 for i in ids if cache.get(i)), 'with a match')
