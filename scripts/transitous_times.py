#!/usr/bin/env python3
"""Quick public-transport duration check via Transitous (api.transitous.org, official GTFS).
Usage: python3 scripts/transitous_times.py A:lat,lng B:lat,lng [C:lat,lng ...]  (checks A→B, C→D, ...)
Prints the duration (min), transfers and non-walk legs of up to 3 itineraries per pair."""
import json, subprocess, sys, urllib.parse

UA = 'EuropeTourGuide/1.0 (https://github.com/kajeken-1905/euroupetour-project) curl'


def plan(a, b, t='2026-11-10T09:00:00Z'):
    q = urllib.parse.urlencode({'fromPlace': a, 'toPlace': b, 'time': t, 'numItineraries': 5})
    out = subprocess.run(['curl', '-s', '-m', '40', '-A', UA, f'https://api.transitous.org/api/v5/plan?{q}'],
                         capture_output=True, text=True).stdout
    try:
        d = json.loads(out)
    except json.JSONDecodeError:
        return [('error', out[:120])]
    res = []
    for it in d.get('itineraries', []):
        legs = [f"{l['mode']}:{l.get('routeShortName') or l.get('tripShortName') or ''}" for l in it['legs'] if l['mode'] != 'WALK']
        res.append((round(it['duration'] / 60), it['transfers'], ' '.join(legs)))
    return res


if __name__ == '__main__':
    args = sys.argv[1:]
    for i in range(0, len(args) - 1, 2):
        (na, a), (nb, b) = args[i].split(':'), args[i + 1].split(':')
        print(f'== {na} -> {nb}')
        for r in plan(a, b)[:3]:
            print('  ', *r)
