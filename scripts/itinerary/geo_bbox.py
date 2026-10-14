"""Extents for highlights whose two sources lie apart, into geo-bbox.json.

A park, street or district is large: OpenStreetMap and Wikidata each put "the" point somewhere else in
it and geo_verify.py sees them LIMIT metres apart. Nominatim also returns the bounding box of each hit;
geo_verify.py pins the hit when the Wikidata point for the same name falls inside a box of modest size.

Usage: python3 scripts/itinerary/geo_bbox.py id [id …]   (ids come from `geo_verify.py --report`, status "apart")
"""
import json, os, subprocess, sys, time, urllib.parse

S = os.path.dirname(os.path.abspath(__file__))
d = json.load(open(S + '/cities.json'))
cache_p = S + '/geo-bbox.json'
cache = json.load(open(cache_p)) if os.path.exists(cache_p) else {}


def q(s, c):
    box = f"{c['lng'] - 1.2},{c['lat'] + 0.8},{c['lng'] + 1.2},{c['lat'] - 0.8}"
    u = 'https://nominatim.openstreetmap.org/search?' + urllib.parse.urlencode(
        {'q': s, 'format': 'jsonv2', 'limit': 5, 'viewbox': box, 'bounded': 1, 'accept-language': 'en'})
    time.sleep(1.1)  # usage policy: at most one request a second
    r = subprocess.run(['curl', '-s', '-m', '25', '-A', 'EuropeTourGuide/1.0 (https://github.com/kajeken-1905/euroupetour-project) curl', u], capture_output=True, text=True)
    return json.loads(r.stdout)


want = set(sys.argv[1:])
for c in d:
    for h in c['h']:
        if h['id'] not in want or h['id'] in cache:
            continue
        name = urllib.parse.unquote(urllib.parse.parse_qs(urllib.parse.urlparse(h['maps']).query)['query'][0])
        try:
            rs = q(name, c) or q(h['en'] + ', ' + c['en'], c)
        except Exception:
            continue  # leave uncached; a rerun retries
        # [lat, lon, south, north, west, east, name]
        cache[h['id']] = [[round(float(r['lat']), 5), round(float(r['lon']), 5), *[round(float(x), 5) for x in r['boundingbox']],
                           r.get('display_name', '')[:80]] for r in rs]
        json.dump(cache, open(cache_p, 'w'), ensure_ascii=False)
print('done', len(cache))
