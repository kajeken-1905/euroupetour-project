"""Look up highlight coordinates on OpenStreetMap (Photon search, biased to the city) into geo.json."""
import json, math, os, subprocess, threading, urllib.parse
from concurrent.futures import ThreadPoolExecutor

S = os.path.dirname(os.path.abspath(__file__))
d = json.load(open(S + '/cities.json'))
cache_p = S + '/geo.json'
cache = json.load(open(cache_p)) if os.path.exists(cache_p) else {}
lock = threading.Lock()


def dist(a, b, c, e):
    p = math.radians
    x = math.sin(p(c - a) / 2) ** 2 + math.cos(p(a)) * math.cos(p(c)) * math.sin(p(e - b) / 2) ** 2
    return 2 * 6371 * math.asin(math.sqrt(x))


def q(s, c):
    u = 'https://photon.komoot.io/api/?' + urllib.parse.urlencode({'q': s, 'limit': 5, 'lat': c['lat'], 'lon': c['lng']})
    r = subprocess.run(['curl', '-s', '-m', '25', '-A', 'europe-tour-guide-route-check/1.0', u], capture_output=True, text=True)
    return [f['geometry']['coordinates'] for f in json.loads(r.stdout)['features']]


def look(job):
    c, h = job
    name = urllib.parse.unquote(urllib.parse.parse_qs(urllib.parse.urlparse(h['maps']).query)['query'][0])
    res = None
    for s in (name, h['en'] + ' ' + c['en']):
        try:
            rs = q(s, c)
        except Exception:
            rs = []
        best = None
        for lon, lat in rs:
            dd = dist(c['lat'], c['lng'], lat, lon)
            if dd < 80:  # first (most relevant) hit near the city
                best = (lat, lon, dd)
                break
        if best:
            res = [round(best[0], 5), round(best[1], 5)]
            break
    with lock:
        cache[h['id']] = res
        if len(cache) % 20 == 0:
            json.dump(cache, open(cache_p, 'w'))


# Retry earlier misses too.
jobs = [(c, h) for c in d for h in c['h'] if not cache.get(h['id'])]
with ThreadPoolExecutor(4) as ex:
    list(ex.map(look, jobs))
json.dump(cache, open(cache_p, 'w'))
print('done', len(cache), sum(1 for v in cache.values() if v is None), 'missing')
