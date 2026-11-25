"""Shared helpers for the UK 2nd-pass new cities (add_uk_c_*.py, 2026-11-25)."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_daytrip_places3 import trip

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
NEAR = ('근교', 'Nearby')
FIRST = '처음이라면|First visit'
LAST = r"^  r\('belfast', 'giants-causeway', .*\n"
TL = "      ta('trainline'),\n"
NI = "      ta('translink', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),\n"


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
    return ('routes-west.ts', LAST, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


def C(**k):
    d = dict(country='uk', hubs_file='hubs-west.ts', hubs_before='  // —— ie ——\n', itin_file='itinerary-uk.ts',
             itin_before='  derry: ', visit_file='visit-uk.ts', visit_after=r"^  'derry-h\d+': v\(.*\),\n",
             stay_before='  derry: [', transit_before='  derry: {', places=None, daytrips=[], apps=TL)
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
