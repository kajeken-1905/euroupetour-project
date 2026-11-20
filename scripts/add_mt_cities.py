#!/usr/bin/env python3
"""Malta step 2 (2026-11-20, user picked both proposed places): Sliema & St Julian's, Mellieħa. Reuses the batch-3
writer (add_daytrip_places3.main); Malta gets island groups and the template Gozo transit text is rewritten.
Times are rounded typical values. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

APPS = "      ta('tallinja', { ko: '버스 노선·실시간·교통카드', en: 'Bus routes, live times, Tallinja card' }),\n      ta('bolt'),\n"
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='  // —— gr ——\n  thessaloniki: {', itin_file='itinerary-it.ts', itin_before="  'san-marino-city': [3, 1, 2],",
              visit_file='visit-med.ts', visit_after=r"^  'gozo-h\d+': v\(.*\),\n", stay_before='  tartu: [', apps=APPS,
              transit_before='  // —— gr ——\n  aegina: {', places=None, daytrips=[])
LAST = r"^  r\('valletta', 'gozo', .*\),\n"
MLA = "MLA()"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'mt'
    return d


def H(ko, en, dko, den, maps, mn, mx, n=None, group=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    d = dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)
    if group:
        d['group'] = group
    return d


def R(*lines):
    return [('routes-east.ts', LAST, ''.join(lines))]


CITIES = [
    C(id='sliema', after='valletta', ko='슬리마·세인트줄리언스', en='Sliema & St Julian’s', native='Tas-Sliema / San Ġiljan', lat=35.9122, lng=14.5042,
      blurb=['발레타 맞은편 해안의 숙박 거점. 바닷가 산책로를 따라 호텔과 카페가 이어지고, 페리로 10분이면 발레타 성벽 아래에 닿으며, 이웃 세인트줄리언스의 작은 만에는 어선과 식당이, 파처빌에는 바와 클럽이 모여 있습니다.',
             'The seaside base facing Valletta: hotels and cafés line the promenade, the ferry reaches the foot of Valletta’s walls in ten minutes, and next-door St Julian’s has fishing boats and restaurants on its little bays and the bars and clubs of Paceville.'],
      highlights=[
          H('슬리마 해안 산책로', 'Sliema seafront', '바위 해안을 따라 몇 km 이어지는 산책로로, 바위 수영터와 발레타 전망이 있습니다.', 'A promenade running for kilometres along the rocky shore, with rock-swimming spots and views across to Valletta.', 'Tower Road Sliema', 60, 90),
          H('발루타 만', 'Balluta Bay', '네오고딕 카르멜 성당과 아르누보 아파트 발루타 빌딩이 둘러싼 작은 만입니다.', 'A small bay framed by a neo-Gothic Carmelite church and the Art Nouveau Balluta Buildings.', 'Balluta Bay', 20, 30),
          H('스피놀라 만', 'Spinola Bay', '세인트줄리언스의 작은 만으로, 알록달록한 어선 앞에 식당이 늘어서 있습니다.', 'St Julian’s little bay, with restaurants facing its brightly painted fishing boats.', 'Spinola Bay', 30, 45),
      ],
      hubs=f"    air: [{MLA}],\n    port: [['Sliema Ferries', '슬리마 페리 선착장', '발레타행 페리·유람선|ferry to Valletta, harbour cruises']],\n",
      itinerary={'days': [['', 1, 2, 3]]},
      season='4~6월과 9~10월이 걷기·수영에 좋습니다. 7~8월은 덥고 붐빕니다.|April–June and September–October are best for walking and swimming; July and August are hot and crowded.',
      stay=[('슬리마 해안', 'Sliema seafront', 'Tower Road Sliema', '바다·발레타 접근|Sea, easy Valletta', '산책로를 따라 호텔이 많고, 페리로 발레타까지 약 10분입니다.|Plenty of hotels along the promenade, about 10 minutes from Valletta by ferry.'),
            ('세인트줄리언스·파처빌', 'St Julian’s & Paceville', 'Paceville', '밤 문화|Nightlife', '식당·바·클럽이 모여 밤늦게까지 시끄럽습니다.|Restaurants, bars and clubs, lively and noisy late into the night.')],
      routes=R("  r('valletta', 'sliema', 'ferry', 10, { n: '슬리마 페리|Sliema ferry' }),\n  r('valletta', 'sliema', 'bus', 20),\n"),
      transit=dict(modes=['walk', 'bus', 'ferry', 'taxi', 'rideshare'], ko='해안 산책로를 따라 걸어 다니고, 발레타는 페리나 버스로 오갑니다.', en='Walk the promenade; take the ferry or a bus to Valletta.')),

    C(id='mellieha', after='mdina', ko='멜리하', en='Mellieħa', native='Il-Mellieħa', lat=35.9564, lng=14.3622,
      blurb=['몰타 북쪽 언덕 위 마을로, 아래로 몰타에서 가장 긴 모래 해변 멜리하 만이 펼쳐집니다. 서쪽 골든 베이와 영화 세트장 뽀빠이 마을이 가깝고, 고조·코미노행 배가 뜨는 치르케와까지 차로 10분입니다.',
             'A hilltop village in the north of Malta above Mellieħa Bay, the island’s longest sandy beach. Golden Bay and the Popeye Village film set are close by, and Ċirkewwa, where boats leave for Gozo and Comino, is ten minutes away.'],
      highlights=[
          H('멜리하 만 (가디라)', 'Mellieħa Bay (Għadira)', '몰타에서 가장 긴 모래 해변으로, 물이 얕아 가족 해수욕객이 많습니다.', 'Malta’s longest sandy beach, with shallow water popular with families.', 'Ghadira Bay', 120, 240),
          H('골든 베이', 'Golden Bay', '서쪽 해안 절벽 사이의 모래 해변으로, 해 질 녘이 아름답습니다.', 'A sandy beach between cliffs on the west coast, lovely at sunset.', 'Golden Bay Malta', 120, 240),
          H('멜리하 성모 성지', 'Sanctuary of Our Lady of Mellieħa', '바위 동굴 안에 성모 벽화가 있는 오래된 순례 성당입니다.', 'An old pilgrimage church built into the rock, with a painting of the Virgin on the cave wall.', 'Sanctuary of Our Lady of Mellieha', 20, 30, n='어깨와 무릎을 가리는 차림이 좋고, 미사 중에는 관람을 삼갑니다.|Cover shoulders and knees, and avoid visiting during Mass.'),
          H('뽀빠이 마을', 'Popeye Village', '1980년 영화 ‘뽀빠이’ 세트장을 남긴 바닷가 나무 마을로, 가족 테마파크로 운영합니다.', 'The wooden seaside set built for the 1980 film Popeye, now run as a family theme park.', 'Popeye Village Malta', 90, 150, n='유료입니다.|Ticketed.'),
          H('붉은 탑 (성 아가타 탑)', 'Red Tower (St Agatha’s Tower)', '마를레나 능선 위 17세기 기사단 망루로, 북쪽 바다와 코미노·고조가 내려다보입니다.', 'A 17th-century Knights’ watchtower on the Marfa ridge, looking over the northern sea to Comino and Gozo.', 'Red Tower Mellieha', 30, 45),
      ],
      hubs=f"    air: [{MLA}],\n    port: [['Ċirkewwa Ferry Terminal', '치르케와 페리 터미널', '고조·코미노행 배|ferries to Gozo and Comino']],\n",
      itinerary={'days': [['', 3, 5, 1], ['', 4, 2]]},
      season='6~9월이 해수욕철이고, 7~8월 해변은 매우 붐빕니다.|June–September is beach season, and the beaches are packed in July and August.',
      stay=[('멜리하 마을·해변', 'Mellieħa village & bay', 'Mellieħa', '해변·고조 거점|Beaches, base for Gozo', '언덕 위 마을과 아래 해변에 호텔이 있고, 치르케와 페리 터미널까지 차로 약 10분입니다.|Hotels in the hilltop village and down by the bay, about 10 minutes by road from the Ċirkewwa ferry terminal.')],
      routes=R("  r('valletta', 'mellieha', 'bus', 60),\n  r('sliema', 'mellieha', 'bus', 50),\n  r('mellieha', 'gozo', 'mixed', 45, { n: '치르케와에서 고조 채널 페리 약 25분|Gozo Channel ferry from Ċirkewwa, about 25 min' }),\n"),
      transit=dict(modes=['bus', 'walk', 'taxi', 'rideshare'], ko='마을과 멜리하 만은 걸어서 오가고, 골든 베이·뽀빠이 마을·치르케와는 버스나 택시로 갑니다.', en='Walk between the village and the bay; take a bus or taxi to Golden Bay, Popeye Village and Ċirkewwa.')),
]

MT_NEW = """    cityIds: ['valletta', 'sliema', 'mdina', 'mellieha', 'gozo'],
    cityGroups: [
      { title: { ko: '몰타 섬', en: 'Malta' }, cityIds: ['valletta', 'sliema', 'mdina', 'mellieha'] },
      { title: { ko: '고조 섬', en: 'Gozo' }, cityIds: ['gozo'] },
    ],
"""
GOZO_OLD_KO = "ko: '인근 공항에서 버스·택시·렌터로 Gozo에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',\n      en: 'Reach Gozo from the nearest airport by bus, taxi, or rental—check sparse schedules.',"
GOZO_NEW_KO = "ko: '몰타 공항에서 버스나 택시로 치르케와 항에 가서 고조 채널 페리(약 25분)를 타거나, 발레타에서 쾌속선(약 45분)을 탑니다.',\n      en: 'From Malta airport take a bus or taxi to Ċirkewwa for the Gozo Channel ferry (about 25 min), or the fast ferry from Valletta (about 45 min).',"
GOZO_OLD_H = "ko: 'Gozo: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',\n      en: 'Combine ferry, bus, and walking in Gozo. Check boat timetables first.',"
GOZO_NEW_H = "ko: '섬 안은 빅토리아 버스터미널에서 퍼지는 버스로 다니고, 해안 마을은 택시가 편합니다.',\n      en: 'Buses fan out from the Victoria terminus; taxis are easier for the coastal villages.',"


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    k = rd('countries.ts')
    i = k.index("    id: 'mt',")
    s = k.index('    cityIds: [', i)
    e = k.index('\n', s) + 1
    assert k[s:e].count("cityIds") == 1
    wr('countries.ts', k[:s] + MT_NEW + k[e:])
    t = rd('transit-city.ts')
    assert t.count(GOZO_OLD_KO) == 1 and t.count(GOZO_OLD_H) == 1
    wr('transit-city.ts', t.replace(GOZO_OLD_KO, GOZO_NEW_KO).replace(GOZO_OLD_H, GOZO_NEW_H))
