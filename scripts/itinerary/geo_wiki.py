"""Second source for highlight coordinates: English Wikipedia article coordinates, into geo-wiki.json.

Usage: python3 scripts/itinerary/geo_wiki.py [city-id …]   (no ids = every city)
"""
import json, math, os, subprocess, sys, threading, time, urllib.parse
from concurrent.futures import ThreadPoolExecutor

S = os.path.dirname(os.path.abspath(__file__))
d = json.load(open(S + '/cities.json'))
cache_p = S + '/geo-wiki.json'
cache = json.load(open(cache_p)) if os.path.exists(cache_p) else {}
lock = threading.Lock()


def dist(a, b, c, e):
    p = math.radians
    x = math.sin(p(c - a) / 2) ** 2 + math.cos(p(a)) * math.cos(p(c)) * math.sin(p(e - b) / 2) ** 2
    return 2 * 6371 * math.asin(math.sqrt(x))


def q(s):
    u = 'https://en.wikipedia.org/w/api.php?' + urllib.parse.urlencode({
        'action': 'query', 'format': 'json', 'generator': 'search', 'gsrsearch': s, 'gsrlimit': 4,
        'prop': 'coordinates', 'coprimary': 'primary', 'colimit': 'max'})
    for wait in (20, 60, 120, 0):
        time.sleep(1.2)  # Wikimedia throttles bursts; one request at a time
        r = subprocess.run(['curl', '-s', '-m', '25', '-A', 'EuropeTourGuide/1.0 (https://github.com/kajeken-1905/euroupetour-project) curl', u], capture_output=True, text=True)
        if 'too many requests' not in r.stdout:
            break
        time.sleep(wait)
    pages = json.loads(r.stdout).get('query', {}).get('pages', {}).values()
    return sorted(pages, key=lambda p: p.get('index', 99))


def look(job):
    c, h = job
    res = None
    try:
        # Only the best-ranked article counts; a lower hit is too often a different place.
        for p in q(h['en'] + ' ' + c['en'])[:2]:
            co = p.get('coordinates')
            if co and dist(c['lat'], c['lng'], co[0]['lat'], co[0]['lon']) < 80:
                res = [round(co[0]['lat'], 5), round(co[0]['lon'], 5), p['title']]
                break
    except Exception:
        return  # network trouble: leave uncached so a rerun retries
    with lock:
        cache[h['id']] = res
        if len(cache) % 25 == 0:
            json.dump(cache, open(cache_p, 'w'), ensure_ascii=False)


want = set(sys.argv[1:])
jobs = [(c, h) for c in d if not want or c['id'] in want for h in c['h'] if h['id'] not in cache]
with ThreadPoolExecutor(1) as ex:
    list(ex.map(look, jobs))
json.dump(cache, open(cache_p, 'w'), ensure_ascii=False)
print('done', len(cache), sum(1 for v in cache.values() if v is None), 'without article coordinates')
