"""Shared helpers for the Germany 2nd-pass new cities (add_de_c_*.py, 2026-11-25)."""
import json
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_daytrip_places3 import trip

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
NEAR = ('근교', 'Nearby')
FIRST = '처음이라면|First visit'
LAST = r"^  r\('bregenz', 'lindau', .*\n"
DB = "      ta('db'),\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, group=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    d = dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)
    if group:
        d['group'] = group
    return d


def R(a, b, mode, m, n=None):
    extra = f", {{ n: '{n}' }}" if n else ''
    return ('routes-central.ts', LAST, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


def C(**k):
    d = dict(country='de', hubs_file='hubs-central.ts', hubs_before='  lindau: {\n', itin_file='itinerary-central.ts',
             itin_before='  lindau: {', visit_file='visit-benelux.ts', visit_after=r"^  'lindau-h\d+': v\(.*\),\n",
             stay_before='  lindau: [', transit_before='  lindau: {\n', places=None, daytrips=[], apps=DB)
    d.update(k)
    return d


def day(base, to, tip):
    return (base, trip(to, tip))


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


def run(cities):
    T.json = Jx
    T.CITIES = cities
    T.main()


def new_group(ko, en, ids, before_ko):
    """Create a region group (cities were inserted into the country cityIds only)."""
    s = rd('countries.ts')
    if f"ko: '{ko}', en: '{en}'" in s:
        return
    anchor = f"      {{ title: {{ ko: '{before_ko}'"
    assert s.count(anchor) == 1, before_ko
    s = s.replace(anchor, f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(i) for i in ids)}] }},\n" + anchor)
    wr('countries.ts', s)
