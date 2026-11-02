"""Helpers for the 2026-11 sight reviews (Benelux, Denmark, Czechia, Hungary): add sights to a city and put its list in
itinerary order. Sight ids never change; only the order of the blocks in cities.ts and their `group` headers do."""
import re

from add_daytrip_places import hl_block, insert_after_line, rd, vline


def city_span(cities, cid):
    i = cities.index(f'    id: "{cid}",')
    a = cities.index('    highlights: [\n', i) + len('    highlights: [\n')
    b = re.compile(r'\n {0,4}\],?\n').search(cities, a).start()
    return a, b


def blocks(cities, cid):
    a, b = city_span(cities, cid)
    found = re.findall(r'      \{\n.*?\n      \}', cities[a:b], re.S)
    return {int(re.search(rf'id: "{re.escape(cid)}-h(\d+)"', x).group(1)): x for x in found}


def add_sights(cities, cid, items, visit_file):
    """items: [(n, dict(ko, en, dko, den, maps, group?, visit))] appended to the city's list."""
    for n, h in items:
        hid = f'{cid}-h{n}'
        assert f'id: "{hid}"' not in cities, hid
        a, b = city_span(cities, cid)
        cities = cities[:b].rstrip(',') + ',\n' + hl_block(hid, f'/highlights/{cid}-{n}.jpg', h) + ',' + cities[b:]
        insert_after_line(visit_file, rf"^  '{re.escape(cid)}-h\d+': v\(.*\),\n", vline(hid, h['visit']))
    return cities


def reorder(cities, cid, order):
    """order: [(n, (ko, en) or None)]. Every sight must appear once; None drops any group header."""
    by = blocks(cities, cid)
    assert sorted(n for n, _ in order) == sorted(by), (cid, sorted(n for n, _ in order), sorted(by))
    out = []
    for n, g in order:
        x = re.sub(r'\n        group: \{[^\n]*\},', '', by[n])
        if g:
            x = x.replace('\n      }', f'\n        group: {{ ko: "{g[0]}", en: "{g[1]}" }},\n      }}')
        out.append(x)
    a, b = city_span(cities, cid)
    return cities[:a] + ',\n'.join(out) + ',' + cities[b:]


def itinerary_order(it_text, cid, by_numbers, near=('근교 당일치기', 'Day trip')):
    """Order a small city's list by its itinerary: days first (in walking order), then the rest, then day trips.
    Sights that already carry a group header keep it (e.g. 근교)."""
    key = f"'{cid}'" if '-' in cid else cid
    m = re.search(rf'^  {re.escape(key)}: (.*?)(?=^  [a-z\'])', it_text, re.M | re.S)
    body = m.group(1)
    trips = [int(x) for t in re.findall(r"trips: \[(.*)\]", body) for x in re.findall(r", (\d+)", t)]
    days_part = body.split('trips:')[0]
    nums = [int(x) for x in re.findall(r'(?<![\w-])(\d+)(?![\w-])', days_part)]
    seen, order = set(), []
    for n in nums + sorted(by_numbers) + trips:
        if n in by_numbers and n not in seen and (n not in trips or n in nums):
            seen.add(n)
            order.append(n)
    for n in trips:
        if n not in seen:
            seen.add(n)
            order.append(n)
    return order


def read_group(block):
    m = re.search(r'group: \{ ko: "([^"]+)", en: "([^"]+)" \}', block)
    return (m.group(1), m.group(2)) if m else None


__all__ = ['add_sights', 'reorder', 'blocks', 'itinerary_order', 'read_group', 'rd']
