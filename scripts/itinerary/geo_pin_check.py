"""Pin new highlights by hand-made queries: OSM Nominatim coordinate cross-checked with the English Wikipedia
article coordinate. Usage: python3 geo_pin_check.py targets.json [--write]
targets.json = {"<id>": ["nominatim query", "Wikipedia title"], ...}. Prints the distance between the two;
--write stores the Nominatim point into geo-manual.json (check the printout first)."""
import json, math, os, subprocess, sys, time, urllib.parse

S = os.path.dirname(os.path.abspath(__file__))
UA = 'EuropeTourGuide/1.0 (https://github.com/kajeken-1905/euroupetour-project) curl'


def get(u):
    time.sleep(1.1)
    r = subprocess.run(['curl', '-s', '-m', '25', '-A', UA, u], capture_output=True, text=True)
    try:
        return json.loads(r.stdout)
    except Exception:
        return None


def dist(a, b, c, e):
    p = math.radians
    x = math.sin(p(c - a) / 2) ** 2 + math.cos(p(a)) * math.cos(p(c)) * math.sin(p(e - b) / 2) ** 2
    return 2 * 6371000 * math.asin(math.sqrt(x))


T = json.load(open(sys.argv[1]))
out = {}
for k, (q, w) in T.items():
    n = get('https://nominatim.openstreetmap.org/search?' + urllib.parse.urlencode({'q': q, 'format': 'jsonv2', 'limit': 1}))
    wj = get('https://en.wikipedia.org/w/api.php?' + urllib.parse.urlencode({'action': 'query', 'prop': 'coordinates', 'titles': w, 'redirects': 1, 'format': 'json'}))
    wc = None
    try:
        for pg in wj['query']['pages'].values():
            c = pg['coordinates'][0]
            wc = (c['lat'], c['lon'])
    except Exception:
        pass
    nc = (float(n[0]['lat']), float(n[0]['lon'])) if n else None
    d = round(dist(*nc, *wc)) if nc and wc else None
    out[k] = (nc, d, n[0]['display_name'][:60] if n else '')
    print(k, d, out[k][2], flush=True)
if '--write' in sys.argv:
    p = os.path.join(S, 'geo-manual.json')
    m = json.load(open(p))
    for k, (nc, d, name) in out.items():
        if nc:
            m[k] = [round(nc[0], 5), round(nc[1], 5), 'OSM Nominatim: ' + name + (f' (Wikipedia {d}m)' if d is not None and d < 1000 else '')]
    json.dump(m, open(p, 'w'), ensure_ascii=False, indent=2)
