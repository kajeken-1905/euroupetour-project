#!/usr/bin/env python3
"""Guernsey step 2 (2026-11-21, user picked both): Herm and Alderney.
Facts from English Wikipedia (Herm: car-free, 2.2 km long, sandy north coast with Shell Beach and Belvoir Bay, St Tugual's
Chapel Norman with a possible 6th-century origin, Neolithic tombs in the north, Travel Trident ferries all year;
Alderney: northernmost inhabited Channel Island, St Anne the only parish, St Anne's Church by George Gilbert Scott
consecrated 1850, Alderney Railway 1847 Braye Road–Mannez about 3.2 km on summer weekends, Mannez lighthouse 1912 with
summer tours, Fort Clonque 1853–55 on a tidal causeway now Landmark Trust lets, Braye Harbour 910 m breakwater,
Alderney Society Museum). Run once."""
import json
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

FREE = '무료입니다.|Free.'
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='  sark: {\n', itin_file='itinerary-uk.ts',
              itin_before='  sark: [', visit_file='visit-uk.ts',
              visit_after=r"^  '(?:sark|herm|alderney)-h\d+': v\(.*\),\n",
              stay_before='  sark: [', apps='', transit_before='  sark: {\n', places=None, daytrips=[])
LAST = r"^  r\('st-peter-port', 'london', 'flight', 60\),\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


CITIES = [
    dict(COMMON, country='gg', id='herm', after='st-peter-port', ko='험섬', en='Herm', native='Herm', lat=49.4667, lng=-2.4500,
         blurb=['세인트피터포트에서 배로 약 20분 걸리는 길이 2.2km의 작은 섬으로, 자동차가 다니지 않습니다. 북쪽 해안을 따라 조개껍데기 모래의 셸 비치와 벨부아 만 같은 해변이 이어지고, 항구 옆엔 노르만 시대의 성 투구알 예배당이 있습니다. 섬 북쪽엔 신석기 무덤이 많이 남아 있어, 섬을 한 바퀴 걸으며 하루를 보냅니다.',
                'A car-free island 2.2 km long, about 20 minutes by boat from St Peter Port. Beaches such as Shell Beach and Belvoir Bay line its northern and eastern shores, the Norman chapel of St Tugual stands near the harbour, and many Neolithic tombs survive in the north; most visitors spend a day walking right round it.'],
         highlights=[
             H('셸 비치', 'Shell Beach', '섬 동쪽, 북쪽 초원 너머에 펼쳐진 해변으로, 이름처럼 작은 조개껍데기가 섞인 모래로 덮여 있습니다.', 'A beach on the east side beyond the common in the north, its sand mixed, as the name says, with tiny shells.', 'Shell Beach Herm', 60, 120, b='no', n=FREE),
             H('벨부아 만', 'Belvoir Bay', '섬 동쪽의 작은 모래 만으로, 절벽에 둘러싸여 아늑합니다.', 'A small sandy cove on the east side, sheltered by cliffs.', 'Belvoir Bay Herm', 45, 90, b='no', n=FREE),
             H('성 투구알 예배당', 'St Tugual’s Chapel', '항구 가까이의 노르만 시대 예배당으로, 6세기부터 이 자리에 예배 장소가 있었다고 전해집니다. 스테인드글라스 창이 볼거리입니다.', 'A Norman chapel near the harbour, on a site said to have been a place of worship since the 6th century; its stained-glass windows are worth a look.', "St Tugual's Chapel Herm", 10, 15, b='no', n=FREE),
             H('섬 둘레 산책', 'Round-island walk', '항구에서 북쪽 초원(커먼)의 신석기 무덤과 오벨리스크, 해변을 지나 남쪽 바위 해안까지 섬을 한 바퀴 도는 산책입니다.', 'A loop from the harbour past the Neolithic tombs and obelisk on the northern common and the beaches, round to the rocky south coast.', 'Herm Island', 120, 180, b='no', n=FREE),
         ],
         hubs="    air: [['Guernsey (GCI)', '건지 공항 (GCI)', '험섬엔 공항 없음 · 세인트피터포트에서 배|no airport on Herm · boat from St Peter Port']],\n    port: [['Herm Harbour', '험 항구', '세인트피터포트행 배|boats to St Peter Port']],\n",
         itinerary={'days': [['', 3, 4, 1, 2]]},
         season='배가 자주 다니는 5~9월이 좋습니다.|May–September, when boats run most often.',
         stay=[('험섬 항구', 'Herm harbour', 'Herm', '조용한 섬·해변|Quiet island, beaches', '항구 둘레에 섬의 호텔과 별장형 숙소가 있습니다. 당일로 다녀오는 사람이 많습니다.|The island’s hotel and holiday cottages are by the harbour; many visit as a day trip.')],
         routes=[('routes-east.ts', LAST, "  r('st-peter-port', 'herm', 'ferry', 20, { n: '트래블 트라이던트 · 연중 운항|Travel Trident · all year' }),\n")],
         transit=dict(modes=['ferry', 'walk'], ko='세인트피터포트에서 트래블 트라이던트 배가 연중 다닙니다. 섬에는 차가 없어 걸어서 다닙니다. 썰물 땐 항구 대신 로자이어 계단에 배가 닿습니다.', en='Travel Trident boats run from St Peter Port all year. There are no cars, so you walk; at low tide boats use the Rosaire Steps instead of the harbour.')),
    dict(COMMON, country='gg', id='alderney', after='herm', ko='올더니', en='Alderney', native='Alderney', lat=49.7144, lng=-2.2053,
         blurb=['사람이 사는 채널 제도 섬 가운데 가장 북쪽, 프랑스 노르망디 바로 앞의 섬입니다. 섬 전체가 한 교구인 세인트앤 마을엔 자갈길과 빅토리아 시대 교회가 있고, 19세기 영국이 프랑스를 경계해 쌓은 요새들이 해안을 두르고 있습니다. 채널 제도에서 하나 남은 철도가 여름 주말에 등대까지 달립니다. 건지에서 비행기로 갑니다.',
                'The northernmost inhabited Channel Island, just off Normandy. St Anne, the only parish, has cobbled streets and a Victorian church, and forts built by the British in the 19th century to watch France ring the coast. The last railway in the Channel Islands runs to the lighthouse on summer weekends. You get there by plane from Guernsey.'],
         highlights=[
             H('세인트앤 마을과 성 앤 교회', 'St Anne & St Anne’s Church', '섬 유일의 마을로, 언덕길 가운데 조지 길버트 스콧이 설계해 1850년 봉헌한 성 앤 교회가 있습니다. 교회 마당은 적어도 7세기까지 거슬러 올라갑니다.', 'The island’s only town, with St Anne’s Church, designed by George Gilbert Scott and consecrated in 1850, halfway up the hill; its churchyard goes back at least to the 7th century.', "St Anne's Church Alderney", 45, 60, b='no', n=FREE),
             H('올더니 철도', 'Alderney Railway', '1847년 문을 연 채널 제도의 유일한 운행 철도로, 브레이 로드에서 마네즈 채석장·등대까지 약 3.2km를 해안을 따라 달립니다. 원래 방파제와 요새를 지을 돌을 나르던 선로입니다.', 'Opened in 1847, the only working railway in the Channel Islands, running about 3.2 km along the coast from Braye Road to Mannez quarry and lighthouse; it was built to carry stone for the breakwater and forts.', 'Alderney Railway Braye Road', 45, 60, n='자원봉사자가 운영해 주로 여름 주말과 공휴일에만 다닙니다.|Run by volunteers, usually on summer weekends and bank holidays only.'),
             H('올더니 등대', 'Alderney Lighthouse', '섬 북동쪽 해안에 1912년 화강암으로 세운 등대로, 거센 물살의 올더니 해협을 지나는 배를 지킵니다.', 'A granite lighthouse built in 1912 on the north-east coast to guard shipping in the fierce Alderney Race.', 'Alderney Lighthouse Mannez', 30, 45, n='여름철에 안내 투어로 안을 볼 수 있습니다.|Guided tours of the inside run in summer.'),
             H('포트 클롱크', 'Fort Clonque', '섬 서쪽 바위섬에 1853~1855년 쌓은 요새로, 밀물 때 잠기는 둑길로 이어집니다. 지금은 휴가용 숙소라 밖에서만 봅니다.', 'A fort built in 1853–55 on a rocky islet off the west coast, linked by a causeway that floods at high tide; now a holiday let, so it is seen from outside.', 'Fort Clonque Alderney', 30, 45, b='no', n='건물 밖에서만 봅니다.|Seen from outside only.'),
             H('브레이 항구', 'Braye Harbour', '섬 북쪽의 주 항구로, 19세기 해군이 쌓은 길이 910m의 방파제가 감싸고 있습니다. 해변과 식당이 항구 둘레에 있습니다.', 'The main harbour on the north side, sheltered by a 910 m breakwater built for the Navy in the 19th century, with a beach and places to eat around it.', 'Braye Harbour Alderney', 30, 60, b='no', n=FREE),
             H('올더니 소사이어티 박물관', 'Alderney Society Museum', '세인트앤 마을의 섬 박물관으로, 1940년 주민 대피와 독일군 점령기의 기록 등 섬의 역사를 보여 줍니다.', 'The island museum in St Anne, covering Alderney’s history including the 1940 evacuation and the German occupation.', 'Alderney Museum St Anne', 45, 60),
         ],
         hubs="    air: [['Alderney (ACI)', '올더니 공항 (ACI)', '건지 등에서 비행기|flights from Guernsey and elsewhere']],\n    port: [['Braye Harbour', '브레이 항구', '건지·프랑스행 여름 배|summer boats to Guernsey and France']],\n",
         itinerary={'days': [['', 1, 6, 5, 2, 3, 4]]},
         season='철도와 배, 등대 투어가 다니는 5~9월이 좋습니다.|May–September, when the railway, boats and lighthouse tours run.',
         stay=[('세인트앤', 'St Anne', 'St Anne, Alderney', '섬 마을|Island town', '섬의 숙소와 식당이 마을에 모여 있고 항구까지 걸어서 약 20분입니다.|The island’s hotels and restaurants are in the town, about 20 minutes’ walk from the harbour.')],
         routes=[('routes-east.ts', LAST, "  r('st-peter-port', 'alderney', 'flight', 20),\n")],
         transit=dict(modes=['walk', 'taxi'], ko='섬이 작아 대부분 걸어 다니고, 택시와 자전거도 있습니다. 여름 주말엔 철도가 등대까지 다닙니다.', en='The island is small enough to walk, with taxis and bikes too; on summer weekends the railway runs to the lighthouse.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    s = rd('countries.ts')
    s, n = re.subn(r"cityIds: \[[^\]]*'st-peter-port'[^\]]*\]", "cityIds: ['st-peter-port', 'herm', 'sark', 'alderney']", s)
    assert n == 1
    wr('countries.ts', s)
