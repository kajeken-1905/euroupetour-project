"""List highlights per city for the given country codes (number, name, minutes)."""
import json, os, sys

S = os.path.dirname(os.path.abspath(__file__))
for c in json.load(open(S + '/cities.json')):
    if c['country'] not in sys.argv[1:]:
        continue
    tot = sum((h['m'][0] + h['m'][1]) / 2 for h in c['h'] if h.get('m')) / 60
    print(f"## {c['id']} {c['ko']} ({c['country']}) {tot:.1f}h")
    print(' | '.join(f"{h['id'].split('-h')[-1]} {h['ko']}" + (f"[{h['m'][0]}-{h['m'][1]}]" if h.get('m') else '[-]') for h in c['h']))
