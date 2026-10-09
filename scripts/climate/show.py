"""Print the rule-based ratings and monthly highs / wet days for the given country codes."""
import json, os, sys

S = os.path.dirname(os.path.abspath(__file__))
raw = json.load(open(S + '/raw.json'))


def rate(h, w, peak, m):
    if h < 9 or h >= 33:
        return '-'
    if peak < 25 and h >= 13 and h >= peak - 2:
        return '+'
    if 17 <= h <= 29:
        return 'o' if w >= 16 or m in (0, 1, 11) else '+'
    return '-' if w >= 20 else 'o'


for c in json.load(open(S + '/../itinerary/cities.json')):
    if c['country'] in sys.argv[1:] and c['id'] in raw:
        v = raw[c['id']]
        print(f"{c['id']:20}{c['country']} {''.join(rate(h, w, max(v['hi']), m) for m, (h, w) in enumerate(zip(v['hi'], v['wet'])))} {' '.join(map(str, v['hi']))} | {' '.join(map(str, v['wet']))} | {round(v['elevation'] or 0)}m")
