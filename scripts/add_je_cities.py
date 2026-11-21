#!/usr/bin/env python3
"""Jersey step 2 (2026-11-21, user picked all three): St Aubin, St Brelade (the bay), St Ouen (the bay).
Facts from English Wikipedia (St Aubin: pier ordered 1648, the island's main port for the Newfoundland cod trade, St Aubin's
Fort on a tidal islet from 1542, railway closed 1936 after the St Aubin station fire and now a rail trail to Corbière;
St Brelade's Church recorded before 1035 with the Fishermen's Chapel beside it; St Ouen's Bay, Battery Moltke on Les
Landes, unfinished WWII battery with one original gun). La Corbière (st-helier-h10) moves to st-brelade-h3 and
Grosnez (st-helier-h11) to st-ouen-h2, photos and pins included. Run once."""
import json
import os
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

FREE = '무료입니다.|Free.'
TIDE = '밀물이 들어오면 길이 잠기니 물때표를 확인하고 가세요.|The way across floods at high tide; check the tide times first.'
JER = "    air: [['Jersey (JER)', '저지 공항 (JER)']],\n"
COMMON = dict(hubs_file='hubs-east.ts', hubs_before="  'st-peter-port': {\n", itin_file='itinerary-uk.ts',
              itin_before='  gorey: [', visit_file='visit-uk.ts',
              visit_after=r"^  '(?:gorey|st-aubin|st-brelade|st-ouen)-h\d+': v\(.*\),\n",
              stay_before='  gorey: [', apps="      ta('libertybus'),\n", transit_before='  gorey: {\n', places=None, daytrips=[])
LAST = r"^  r\('st-helier', 'london', 'flight', 60\),\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


def R(a, b, m):
    return ('routes-east.ts', LAST, f"  r('{a}', '{b}', 'bus', {m}),\n")


CITIES = [
    dict(COMMON, country='je', id='st-aubin', after='st-helier', ko='세인트오뱅', en='St Aubin', native='St Aubin', lat=49.1874, lng=-2.1704,
         blurb=['세인트헬리어 맞은편, 세인트오뱅 만 서쪽 끝의 항구 마을입니다. 17세기 부두가 생긴 뒤 뉴펀들랜드 대구 무역으로 섬에서 가장 큰 항구였고, 지금도 언덕에 기댄 옛 집들과 식당·카페가 항구를 두르고 있습니다. 썰물 때 걸어서 가는 바다 위 요새와, 옛 철도 자리를 따라 코르비에르까지 가는 산책로가 있습니다.',
                'A harbour village at the west end of St Aubin’s Bay, facing St Helier. After its pier was built in the 17th century it became the island’s main port for the Newfoundland cod trade, and old houses climbing the hillside, restaurants and cafés still ring the harbour. A fort on a tidal islet can be walked to at low tide, and a path follows the old railway line out to Corbière.'],
         highlights=[
             H('세인트오뱅 요새', 'St Aubin’s Fort', '항구 앞 바다의 썰물 섬에 1542년 세운 요새로, 2차 대전 독일군 점령 때 다시 보강됐습니다. 썰물 때 모래톱을 걸어 건너갑니다.', 'A fort on a tidal islet off the harbour, begun in 1542 and refortified during the German occupation in the Second World War; walk across the sands at low tide.', "St Aubin's Fort Jersey", 45, 60, b='no', n=TIDE),
             H('세인트오뱅 항구', 'St Aubin Harbour', '1648년 부두 건설이 결정된 옛 항구로, 한때 섬의 국제 무역 중심이었습니다. 요트가 정박한 항구 둘레로 식당과 카페가 늘어서 있습니다.', 'The old harbour, whose pier was ordered in 1648, once the hub of the island’s overseas trade; restaurants and cafés now line the yacht-filled basin.', 'St Aubin Harbour Jersey', 30, 60, b='no', n=FREE),
             H('철길 산책로', 'Railway Walk', '1936년 문을 닫은 저지 철도의 선로 자리를 산책·자전거 길로 바꾼 길로, 세인트오뱅에서 코르비에르까지 이어집니다.', 'The trackbed of the Jersey Railway, closed in 1936, turned into a walking and cycling path from St Aubin to Corbière.', 'Railway Walk St Aubin Corbiere', 90, 150, b='no', n=FREE),
         ],
         hubs=JER + "    port: [['Elizabeth Harbour', '엘리자베스 항구', '세인트헬리어 · 건지·영국·프랑스행 배|St Helier · ferries to Guernsey, Britain and France']],\n",
         itinerary={'days': [['', 2, 1, 3]]},
         season='해변 산책과 철길 산책로는 5~9월이 좋고, 요새는 썰물 때 맞춰 갑니다.|May–September is best for the shore and the railway path; time the fort for low tide.',
         stay=[('세인트오뱅 항구', 'St Aubin harbour', 'St Aubin, Jersey', '항구 마을 분위기·식당|Harbour village, restaurants', '항구 둘레에 작은 호텔과 식당이 모여 있고 세인트헬리어까지 버스로 가깝습니다.|Small hotels and restaurants around the harbour, a short bus ride from St Helier.')],
         routes=[R('st-helier', 'st-aubin', 15)],
         transit=dict(modes=['bus', 'walk'], ko='세인트헬리어 리버레이션 버스터미널에서 15번 버스(공항행)가 세인트오뱅을 지납니다.', en='Route 15 (to the airport) runs from Liberation Station in St Helier through St Aubin.')),
    dict(COMMON, country='je', id='st-brelade', after='st-aubin', ko='세인트브렐레이드 만', en='St Brelade’s Bay', native='St Brelade', lat=49.1856, lng=-2.1972,
         blurb=['섬 남쪽의 넓은 모래 해변으로, 저지에서 손꼽히는 해수욕장입니다. 해변 서쪽 끝엔 1035년 이전 기록에 나오는 성 브렐레이드 교회와 종교개혁을 견딘 몇 안 되는 중세 예배당인 어부 예배당이 바닷가에 붙어 있고, 섬 남서쪽 끝의 코르비에르 등대도 가깝습니다.',
                'A broad sandy bay on the south coast, one of Jersey’s favourite beaches. At its western end St Brelade’s Church, recorded before 1035, stands by the shore with the Fishermen’s Chapel, one of the few medieval chapels to survive the Reformation, and La Corbière lighthouse at the south-west tip is close by.'],
         highlights=[
             H('세인트브렐레이드 해변', 'St Brelade’s Bay beach', '잔잔한 물과 고운 모래가 이어지는 섬 남쪽의 큰 해변으로, 해변 뒤로 호텔과 식당이 늘어서 있습니다.', 'A large south-coast beach of fine sand and sheltered water, backed by hotels and restaurants.', "St Brelade's Bay Jersey", 60, 180, b='no', n=FREE),
             H('성 브렐레이드 교회와 어부 예배당', 'St Brelade’s Church & Fishermen’s Chapel', '1035년 이전 기록에 나오는 섬의 옛 교구 교회로, 바로 옆 어부 예배당은 종교개혁 때 섬의 예배당 50여 곳이 헐릴 때 살아남은 몇 안 되는 중세 예배당입니다.', 'One of the island’s ancient parish churches, recorded before 1035; the Fishermen’s Chapel beside it is one of the few medieval chapels to survive when more than fifty were destroyed at the Reformation.', "St Brelade's Church Jersey", 20, 30, b='no', n=FREE),
         ],
         hubs=JER,
         itinerary={'days': [['', 1, 2, 3]]},
         season='해수욕은 6~9월이 알맞고, 코르비에르 등대는 썰물과 해 질 녘에 맞춰 가세요.|Swim June–September; time La Corbière for low tide and sunset.',
         stay=[('세인트브렐레이드 해변', 'St Brelade’s Bay', 'St Brelade’s Bay, Jersey', '해변|Beach', '해변 바로 뒤에 호텔이 모여 있습니다.|Hotels right behind the beach.')],
         routes=[R('st-aubin', 'st-brelade', 10)],
         transit=dict(modes=['bus', 'walk'], ko='세인트헬리어 리버레이션 버스터미널에서 버스로 갑니다. 코르비에르 등대는 22번 버스가 지납니다.', en='Buses run from Liberation Station in St Helier; route 22 passes La Corbière.')),
    dict(COMMON, country='je', id='st-ouen', after='st-brelade', ko='세인트우앙 만', en='St Ouen’s Bay', native='St Ouen', lat=49.2300, lng=-2.2350,
         blurb=['섬 서해안을 북쪽에서 남쪽까지 길게 잇는 해변으로, 대서양 파도가 들어와 서핑을 즐깁니다. 해변 뒤로 2차 대전 독일군이 쌓은 벙커와 포대가 늘어서 있고, 북쪽 끝 레 랑드 황야엔 몰트케 포대, 북서쪽 곶엔 14세기 그로네 성터가 있습니다. 섬에서 가장 넓은 교구인 세인트우앙에 속합니다.',
                'A long beach running down Jersey’s west coast from north to south, where Atlantic swells bring surfers. German bunkers and batteries from the Second World War line the shore, Battery Moltke stands on the Les Landes heath at the north end, and the 14th-century ruins of Grosnez Castle crown the north-west headland. It belongs to St Ouen, the island’s largest parish.'],
         highlights=[
             H('세인트우앙 해변', 'St Ouen’s Bay beach', '섬 서해안 거의 전체를 따라 이어지는 긴 모래 해변으로, 대서양 파도가 좋아 서핑을 많이 합니다.', 'A long sandy beach running down almost the whole west coast, with Atlantic swells popular with surfers.', "St Ouen's Bay Jersey", 60, 180, b='no', n='파도와 조류가 세니 안전 요원이 있는 구역에서만 수영하세요.|Surf and currents are strong; swim only where lifeguards are on duty.'),
             H('몰트케 포대', 'Battery Moltke', '2차 대전 때 독일군이 해안 방어를 위해 레 랑드 황야에 짓다가 끝내지 못한 포대로, 벙커와 관측탑, 원래 대포 한 문이 남아 있습니다. 바깥은 언제든 둘러볼 수 있습니다.', 'An unfinished German coastal battery from the Second World War on the Les Landes heath, with bunkers, an observation tower and one of the original guns; the outside can be explored at any time.', 'Battery Moltke Les Landes Jersey', 30, 45, b='no', n=FREE),
         ],
         hubs=JER,
         itinerary={'days': [['', 1, 3, 2]]},
         season='서핑은 사계절 하지만 해변 산책과 해수욕은 6~9월이 알맞습니다.|Surfing goes on year-round, but June–September suits beach walks and swimming.',
         stay=[('세인트브렐레이드·세인트헬리어에서 다녀오기', 'Visit from St Brelade or St Helier', 'St Brelade’s Bay, Jersey', '당일치기|Day trip', '해변 쪽 숙소가 적으니 세인트브렐레이드나 세인트헬리어에 묵고 버스로 다녀오세요.|Few places to stay by the bay, so base yourself in St Brelade or St Helier and come by bus.')],
         routes=[R('st-helier', 'st-ouen', 30)],
         transit=dict(modes=['bus', 'walk'], ko='세인트헬리어 리버레이션 버스터미널에서 22번 버스가 공항·코르비에르를 지나 해변 북쪽 레탁까지 갑니다.', en='Route 22 runs from Liberation Station in St Helier via the airport and La Corbière to L’Etacq at the north end of the bay.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


MOVE = [('st-helier', 10, 'st-brelade', 3), ('st-helier', 11, 'st-ouen', 3)]


def move_sights():
    c = rd('cities.ts')
    vi = rd('visit-uk.ts')
    gm_p = os.path.join(os.path.dirname(__file__), 'itinerary', 'geo-manual.json')
    gm = json.load(open(gm_p))
    pub = os.path.join(os.path.dirname(__file__), '..', 'public', 'highlights')
    for src, sn, dst, dn in MOVE:
        i = c.index(f'id: "{src}-h{sn}"')
        s = c.rindex(',\n      {', 0, i)
        e = c.index('\n      }', i) + len('\n      }')
        blk = c[s:e]
        c = c[:s] + c[e:]
        blk = blk.replace(f'id: "{src}-h{sn}"', f'id: "{dst}-h{dn}"').replace(f'/highlights/{src}-{sn}.jpg', f'/highlights/{dst}-{dn}.jpg')
        k = c.index(f'id: "{dst}",')
        j = c.index('\n    ],\n', k)
        c = c[:j] + blk + c[j:]
        m = re.search(rf"^  '{src}-h{sn}': (v\(.*\)),\n", vi, re.M)
        vi = vi.replace(m.group(0), '')
        a = re.search(rf"^  '{dst}-h{dn - 1}': v\(.*\),\n", vi, re.M)
        vi = vi[:a.end()] + f"  '{dst}-h{dn}': {m.group(1)},\n" + vi[a.end():]
        if f'{src}-h{sn}' in gm:
            gm[f'{dst}-h{dn}'] = gm.pop(f'{src}-h{sn}')
        os.replace(os.path.join(pub, f'{src}-{sn}.jpg'), os.path.join(pub, f'{dst}-{dn}.jpg'))
    wr('cities.ts', c)
    wr('visit-uk.ts', vi)
    json.dump(gm, open(gm_p, 'w'), ensure_ascii=False, indent=2)
    open(gm_p, 'a').write('\n')
    it = rd('itinerary-uk.ts')
    a = ", ['서쪽 해안|West coast', 10, 11]"
    assert it.count(a) == 1
    wr('itinerary-uk.ts', it.replace(a, ''))
    st = rd('stay.ts')
    st = st.replace("a('세인트브렐라드 만', 'St Brelade’s Bay'", "a('세인트브렐레이드 만', 'St Brelade’s Bay'")
    wr('stay.ts', st)


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    move_sights()
    s = rd('countries.ts')
    s, n = re.subn(r"cityIds: \['st-helier', 'gorey'\]", "cityIds: ['st-helier', 'st-aubin', 'st-brelade', 'st-ouen', 'gorey']", s)
    assert n == 1
    wr('countries.ts', s)
