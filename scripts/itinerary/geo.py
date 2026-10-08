"""Look up highlight coordinates on OpenStreetMap (Nominatim, 1 request/s) into geo.json."""
import json, math, os, subprocess, time, urllib.parse

S = os.path.dirname(os.path.abspath(__file__))
d = json.load(open(S + '/cities.json'))
cache_p = S + '/geo.json'
cache = json.load(open(cache_p)) if os.path.exists(cache_p) else {}


def dist(a, b, c, e):
    p = math.radians
    x = math.sin(p(c - a) / 2) ** 2 + math.cos(p(a)) * math.cos(p(c)) * math.sin(p(e - b) / 2) ** 2
    return 2 * 6371 * math.asin(math.sqrt(x))


def q(s):
    u = 'https://nominatim.openstreetmap.org/search?' + urllib.parse.urlencode({'q': s, 'format': 'json', 'limit': 5})
    r = subprocess.run(['curl', '-s', '-m', '20', '-A', 'europe-tour-guide-route-check/1.0', u], capture_output=True, text=True)
    return json.loads(r.stdout)


n = 0
for c in d:
    for h in c['h']:
        if h['id'] in cache:
            continue
        name = urllib.parse.unquote(urllib.parse.parse_qs(urllib.parse.urlparse(h['maps']).query)['query'][0])
        res = None
        for s in (name, h['en'] + ' ' + c['en']):
            try:
                rs = q(s)
            except Exception:
                rs = []
                time.sleep(3)
            time.sleep(1.1)
            best = None
            for r in rs:
                dd = dist(c['lat'], c['lng'], float(r['lat']), float(r['lon']))
                if dd < 80 and (best is None or dd < best[2]):
                    best = (float(r['lat']), float(r['lon']), dd)
            if best:
                res = [round(best[0], 5), round(best[1], 5)]
                break
        cache[h['id']] = res
        n += 1
        if n % 5 == 0:
            json.dump(cache, open(cache_p, 'w'))
json.dump(cache, open(cache_p, 'w'))
print('done', len(cache), sum(1 for v in cache.values() if v is None), 'missing')
