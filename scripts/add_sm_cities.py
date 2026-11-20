#!/usr/bin/env python3
"""San Marino step 2 (2026-11-20, user picked Serravalle): Serravalle, the largest castello (old hilltop village and
church, national stadium, Shinto shrine); the outlet was dropped (no usable photo). The Malatesta castle is left out (location not confirmed in OSM).
Reuses the batch-3 writer (add_daytrip_places3.main). Run once."""
import json
import add_daytrip_places3 as T

FREE = '무료입니다.|Free.'
COMMON = dict(hubs_file='hubs-west.ts', hubs_before="  'borgo-maggiore': {\n    air: [", itin_file='itinerary-it.ts',
              itin_before="  'borgo-maggiore': { days:", visit_file='visit-it.ts', visit_after=r"^  'borgo-maggiore-h\d+': v\(.*\),\n",
              stay_before='  prizren: [', apps='', transit_before='  pristina: {', places=None, daytrips=[])
LAST = r"^  r\('bologna', 'san-marino-city', .*\),\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


CITIES = [dict(COMMON, country='sm', id='serravalle', after='borgo-maggiore', ko='세라발레', en='Serravalle', native='Serravalle',
    lat=43.9691, lng=12.4787,
    blurb=['산마리노에서 가장 크고 사람이 많은 카스텔로(행정 구역)로, 이탈리아 리미니 쪽 국경에 닿아 있습니다. 언덕 위 옛 마을에 성 안드레아 성당이 있고, 아래 도가나 일대에 국립 경기장과 아웃렛, 유럽 첫 신사인 산마리노 진자가 흩어져 있습니다.',
           'San Marino’s largest and most populous castello (municipality), on the border towards Rimini. The old hilltop village has the Church of Sant’Andrea, and the national stadium, an outlet mall and San Marino Jinja, Europe’s first Shinto shrine, are spread around Dogana below.'],
    highlights=[
        H('성 안드레아 성당과 옛 마을', 'Sant’Andrea Church & old village', '언덕 위 옛 성벽 자리에 1824년 짓기 시작해 1914년 완공한 성당으로, 제단 뒤에 15세기 성모 프레스코가 남아 있습니다.', 'A church begun in 1824 on the old walls of the hilltop village and finished in 1914, with a 15th-century fresco of the Virgin in the apse.', 'Chiesa di Sant’Andrea Serravalle San Marino', 15, 30, b='no', n=FREE),
        H('산마리노 진자', 'San Marino Jinja', '2014년 세운 신사로, 일본 신사본청이 인정한 유럽 첫 신토 신사입니다. 작은 숲길 끝에 도리이와 본전이 있습니다.', 'A shrine built in 2014, the first Shinto shrine in Europe recognised by Japan’s Association of Shinto Shrines, with a torii and main hall at the end of a short wooded path.', 'San Marino Jinja', 20, 30, b='no', n=FREE),
        H('산마리노 스타디움', 'San Marino Stadium', '1969년 문을 연 산마리노 국가대표 축구팀의 홈 경기장입니다.', 'Opened in 1969, the home ground of San Marino’s national football team.', 'San Marino Stadium', 90, 120, n='경기가 있는 날에만 들어갈 수 있습니다.|Open only on match days.'),
    ],
    hubs="    air: [\n      ['Rimini Federico Fellini (RMI)', '리미니 공항 (RMI)', '이탈리아 리미니|Rimini, Italy'],\n      BLQ('이탈리아 볼로냐|Bologna, Italy'),\n    ],\n    rail: [['Rimini', '리미니역', '이탈리아 · 산마리노행 버스|Italy · bus to San Marino']],\n",
    itinerary={'days': [['', 1, 2]]},
    season='4~6월과 9~10월이 걷기에 좋습니다. 축구 경기는 국가대표 A매치 기간에 열립니다.|April–June and September–October are best for walking; football matches follow the international calendar.',
    stay=[('도가나', 'Dogana', 'Dogana San Marino', '차 여행·리미니 버스|By car, Rimini bus', '리미니–산마리노 버스가 지나가는 국경 쪽 동네로, 차로 다니기 편합니다.|The border-side district on the Rimini–San Marino bus route, handy by car.')],
    routes=[('routes-west.ts', LAST, "  r('san-marino-city', 'serravalle', 'bus', 20, { n: '리미니–산마리노 버스가 도가나를 지납니다|the Rimini–San Marino bus runs through Dogana' }),\n")],
    transit=dict(modes=['bus', 'taxi', 'walk'], ko='볼거리가 흩어져 있어 차나 택시가 편합니다. 리미니–산마리노 버스가 도가나를 지나갑니다.', en='The sights are spread out, so a car or taxi is easiest; the Rimini–San Marino bus runs through Dogana.'))]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
