"""Monthly climate per city from Open-Meteo's historical archive (ERA5 reanalysis), cached in raw.json.

Needs scripts/itinerary/cities.json (run scripts/itinerary/dump.sh). Resumable: cities already in
raw.json are skipped. Stops when the free hourly/daily request limit is reached.
"""
import collections, json, os, subprocess, sys, time, urllib.parse

S = os.path.dirname(os.path.abspath(__file__))
YEARS = (sys.argv[1], sys.argv[2]) if len(sys.argv) > 2 else ('2022', '2024')
# The free tier allows about 5,000 weighted calls an hour; three years of daily data weigh ~24.
PAUSE = 17
cities = json.load(open(S + '/../itinerary/cities.json'))
# Optional third argument: comma-separated country codes to fetch first.
FIRST = sys.argv[3].split(',') if len(sys.argv) > 3 else []
cities.sort(key=lambda c: c['country'] not in FIRST)
# Cities whose map pin sits on a summit: sample the weather at the village visitors stay in instead.
COORDS = {'snowdonia': (53.119, -4.130), 'lake-district': (54.380, -2.907)}  # Llanberis, Windermere
raw_p = S + '/raw.json'
raw = json.load(open(raw_p)) if os.path.exists(raw_p) else {}


def fetch(c):
    lat, lng = COORDS.get(c['id'], (c['lat'], c['lng']))
    q = urllib.parse.urlencode({
        'latitude': lat, 'longitude': lng,
        'start_date': f'{YEARS[0]}-01-01', 'end_date': f'{YEARS[1]}-12-31',
        'daily': 'temperature_2m_max,temperature_2m_min,precipitation_sum', 'timezone': 'auto',
    })
    r = subprocess.run(['curl', '-s', '-m', '90', 'https://archive-api.open-meteo.com/v1/archive?' + q], capture_output=True, text=True)
    return json.loads(r.stdout)


for c in cities:
    if c['id'] in raw:
        continue
    for attempt in range(8):
        try:
            d = fetch(c)
        except Exception as e:
            d = {'error': True, 'reason': f'bad response: {e}'}
        if not d.get('error'):
            break
        reason = d.get('reason', '')
        print('ERR', c['id'], reason, flush=True)
        if 'Daily' in reason:
            print('STOPPED limit', len(raw), flush=True)
            sys.exit(2)
        time.sleep(600 if 'Hourly' in reason else 65 if 'Minutely' in reason else 10)
    else:
        continue
    hi, lo, wet = collections.defaultdict(list), collections.defaultdict(list), collections.defaultdict(int)
    days = d['daily']
    for t, a, b, p in zip(days['time'], days['temperature_2m_max'], days['temperature_2m_min'], days['precipitation_sum']):
        if a is None or b is None:
            continue
        m = int(t[5:7])
        hi[m].append(a)
        lo[m].append(b)
        wet[m] += (p or 0) >= 1
    years = int(YEARS[1]) - int(YEARS[0]) + 1
    raw[c['id']] = {
        'years': list(YEARS), 'elevation': d.get('elevation'),
        'hi': [round(sum(hi[m]) / len(hi[m])) for m in range(1, 13)],
        'lo': [round(sum(lo[m]) / len(lo[m])) for m in range(1, 13)],
        'wet': [round(wet[m] / years) for m in range(1, 13)],
    }
    json.dump(raw, open(raw_p, 'w'))
    if len(raw) % 20 == 0:
        print('ok', len(raw), flush=True)
    time.sleep(PAUSE)
print('DONE', len(raw), flush=True)
