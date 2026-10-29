"""Add cities to raw.json without the full city dump: python3 add_city.py id:lat:lng [id:lat:lng ...]
Uses the same Open-Meteo archive query and averaging as fetch.py; run build.py afterwards."""
import collections, json, os, subprocess, sys, time, urllib.parse

S = os.path.dirname(os.path.abspath(__file__))
raw_p = S + '/raw.json'
raw = json.load(open(raw_p))
YEARS = tuple(next(iter(raw.values()))['years'])
for arg in sys.argv[1:]:
    cid, lat, lng = arg.split(':')
    if cid in raw:
        continue
    q = urllib.parse.urlencode({'latitude': lat, 'longitude': lng, 'start_date': f'{YEARS[0]}-01-01',
                                'end_date': f'{YEARS[1]}-12-31', 'daily': 'temperature_2m_max,temperature_2m_min,precipitation_sum',
                                'timezone': 'auto'})
    d = json.loads(subprocess.run(['curl', '-s', '-m', '90', 'https://archive-api.open-meteo.com/v1/archive?' + q],
                                  capture_output=True, text=True).stdout)
    if d.get('error'):
        print('ERR', cid, d.get('reason')); continue
    hi, lo, wet = collections.defaultdict(list), collections.defaultdict(list), collections.defaultdict(int)
    dd = d['daily']
    for t, a, b, p in zip(dd['time'], dd['temperature_2m_max'], dd['temperature_2m_min'], dd['precipitation_sum']):
        if a is None or b is None:
            continue
        m = int(t[5:7]); hi[m].append(a); lo[m].append(b); wet[m] += (p or 0) >= 1
    years = int(YEARS[1]) - int(YEARS[0]) + 1
    raw[cid] = {'years': list(YEARS), 'elevation': d.get('elevation'),
                'hi': [round(sum(hi[m]) / len(hi[m])) for m in range(1, 13)],
                'lo': [round(sum(lo[m]) / len(lo[m])) for m in range(1, 13)],
                'wet': [round(wet[m] / years) for m in range(1, 13)]}
    json.dump(raw, open(raw_p, 'w'))
    print('ok', cid, raw[cid]['hi'])
    time.sleep(15)
