"""Check itineraries: coverage, bad ids, duplicates, long days, and (with geo.json) walking order."""
import itertools, json, math, os, sys

S = os.path.dirname(os.path.abspath(__file__))
d = json.load(open(S + '/cities.json'))
geo = json.load(open(S + '/geo.json')) if os.path.exists(S + '/geo.json') else {}
only = set(sys.argv[1:])


def dist(a, b):
    p = math.radians
    x = math.sin(p(b[0] - a[0]) / 2) ** 2 + math.cos(p(a[0])) * math.cos(p(b[0])) * math.sin(p(b[1] - a[1]) / 2) ** 2
    return 2 * 6371 * math.asin(math.sqrt(x))


def length(pts):
    return sum(dist(a, b) for a, b in zip(pts, pts[1:]))


missing = [c['id'] for c in d if not c.get('itin')]
print('cities without itinerary:', missing)
for c in d:
    it = c.get('itin')
    if not it or (only and c['id'] not in only and c['country'] not in only):
        continue
    hs = {h['id']: h for h in c['h']}
    seen = []
    for i, day in enumerate(it['days']):
        tag = f"{c['id']} day{i + 1}{'(trip)' if day.get('trip') else ''}"
        for s in day['stops']:
            if s not in hs:
                print('BAD ID', tag, s)
            if s in seen:
                print('DUP', tag, s)
            seen.append(s)
            if s in hs and not hs[s].get('m'):
                print('NO MINUTES (closed?)', tag, hs[s]['ko'])
        mins = [hs[s]['m'] for s in day['stops'] if s in hs and hs[s].get('m')]
        lo, hi = sum(m[0] for m in mins), sum(m[1] for m in mins)
        if (lo + hi) / 2 > 510:
            print(f'LONG {tag} {lo / 60:.1f}-{hi / 60:.1f}h')
        pts = [(s, geo.get(s)) for s in day['stops']]
        known = [p for p in pts if p[1]]
        if len(known) >= 3:
            mine = length([p[1] for p in known])
            best = min(itertools.permutations(known), key=lambda o: length([p[1] for p in o])) if len(known) <= 8 else None
            if best:
                bl = length([p[1] for p in best])
                if mine > bl * 1.35 and mine - bl > 0.6:
                    print(f"ORDER {tag} mine {mine:.1f}km best {bl:.1f}km: " + ' > '.join(hs[p[0]]['ko'] for p in best))
        if not day.get('trip'):
            for a, b in zip(known, known[1:]):
                dd = dist(a[1], b[1])
                if dd > 6:
                    print(f"FAR {tag} {hs[a[0]]['ko']} -> {hs[b[0]]['ko']} {dd:.1f}km")
