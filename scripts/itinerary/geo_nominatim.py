"""More OpenStreetMap candidates per highlight (Nominatim search, up to 5 near the city) into geo-nom.json.

Photon (geo.json) keeps only its first hit, which is sometimes a namesake; these candidates let
geo_verify.py find the one that a Wikipedia/Wikidata coordinate confirms.
"""
import json, math, os, subprocess, sys, time, urllib.parse

S = os.path.dirname(os.path.abspath(__file__))
d = json.load(open(S + '/cities.json'))
cache_p = S + '/geo-nom.json'
cache = json.load(open(cache_p)) if os.path.exists(cache_p) else {}


def dist(a, b, c, e):
    p = math.radians
    x = math.sin(p(c - a) / 2) ** 2 + math.cos(p(a)) * math.cos(p(c)) * math.sin(p(e - b) / 2) ** 2
    return 2 * 6371 * math.asin(math.sqrt(x))


def q(s, c):
    box = f"{c['lng'] - 1.2},{c['lat'] + 0.8},{c['lng'] + 1.2},{c['lat'] - 0.8}"
    u = 'https://nominatim.openstreetmap.org/search?' + urllib.parse.urlencode(
        {'q': s, 'format': 'jsonv2', 'limit': 5, 'viewbox': box, 'bounded': 1, 'accept-language': 'en'})
    time.sleep(1.1)  # usage policy: at most one request a second
    r = subprocess.run(['curl', '-s', '-m', '25', '-A', 'EuropeTourGuide/1.0 (https://github.com/kajeken-1905/euroupetour-project) curl', u], capture_output=True, text=True)
    return json.loads(r.stdout)


want = set(sys.argv[1:])
n = 0
for c in d:
    if want and c['id'] not in want:
        continue
    for h in c['h']:
        if h['id'] in cache:
            continue
        name = urllib.parse.unquote(urllib.parse.parse_qs(urllib.parse.urlparse(h['maps']).query)['query'][0])
        try:
            rs = q(name, c) or q(h['en'] + ', ' + c['en'], c)
        except Exception:
            continue  # leave uncached; a rerun retries
        cache[h['id']] = [[round(float(r['lat']), 5), round(float(r['lon']), 5), r.get('display_name', '')[:80]]
                          for r in rs if dist(c['lat'], c['lng'], float(r['lat']), float(r['lon'])) < 80]
        n += 1
        if n % 25 == 0:
            json.dump(cache, open(cache_p, 'w'), ensure_ascii=False)
json.dump(cache, open(cache_p, 'w'), ensure_ascii=False)
print('done', len(cache), sum(1 for v in cache.values() if not v), 'without a hit')
