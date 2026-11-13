#!/usr/bin/env python3
"""2026-11-13 Norway step 3: airport cards for the new cities. Bus details from Avinor's own
public-transport pages (Kristiansand line 35, Bodø lines 1 and 4); Lofoten and Honningsvåg airports
have no bus, so taxi only. Røros Airport left out: no free-licence photo exists. No fares (unverified). Run once."""
import sys
sys.path.insert(0, '.picker')
from gw_write import card, TAXI, ts

C = [
    card('gw-krs', 'kristiansand', 'air', '크리스티안산 셰비크 공항|Kristiansand Airport Kjevik',
         '시내에서 북동쪽으로 떨어진 남부 노르웨이의 관문 공항입니다. 오슬로·베르겐 국내선과 유럽 노선이 다닙니다.|Southern Norway’s gateway airport northeast of the city, with domestic flights to Oslo and Bergen plus routes to Europe.',
         [dict(mode='bus', name='시내버스 35번(Tveit)|Local bus line 35 (Tveit)', route='터미널 앞 도로 정류장 → 시내|Stop on the road outside the terminal → centre', time='약 30분, 항공편 지연을 기다리지 않음|About 30 min; does not wait for late flights'), TAXI('시내까지 약 20분|About 20 min to the centre')],
         'Kristiansand Airport Kjevik', code='KRS', intl=True, site='https://avinor.no/en/airport/kristiansand/'),
    card('gw-boo', 'bodo', 'air', '보되 공항|Bodø Airport',
         '시내에서 약 1km로 아주 가까워 걸어서도 갈 수 있습니다. 로포텐 소도시행 소형기도 여기서 갈아탑니다.|Only about 1 km from the centre, close enough to walk; small planes to the Lofoten towns connect here.',
         [dict(mode='bus', name='시내버스 1·4번|City buses 1 and 4', route='정문 왼쪽 정류장 → 시내|Stop left of the main entrance → centre', time='약 5분|About 5 min'), dict(mode='walk', name='걷기|Walk', route='공항 → 시내|Airport → centre', time='약 10~15분|About 10–15 min')],
         'Bodø Airport', code='BOO', intl=True, site='https://avinor.no/en/airport/bodo/'),
    card('gw-svj', 'lofoten', 'air', '스볼베르 공항(헬레)|Svolvær Airport, Helle',
         '로포텐 동쪽 스볼베르에서 약 6km 떨어진 작은 공항으로, 보되행 소형기가 다닙니다. 버스는 공항에 들르지 않습니다.|A small airport about 6 km from Svolvær in eastern Lofoten, with small planes to Bodø; no buses call here.',
         [TAXI('스볼베르까지 약 10분|About 10 min to Svolvær')],
         'Svolvær Airport Helle', code='SVJ'),
    card('gw-lkn', 'lofoten', 'air', '레크네스 공항|Leknes Airport',
         '로포텐 서쪽 레크네스 시내에서 약 2km로, 레이네·함노이 쪽에 가장 가까운 공항입니다. 보되행 소형기가 다니고 버스는 들르지 않습니다.|About 2 km from Leknes in western Lofoten, the closest airport to Reine and Hamnøy; small planes to Bodø, no bus stop.',
         [TAXI('레크네스 시내까지 약 5분|About 5 min to Leknes')],
         'Leknes Airport', code='LKN'),
    card('gw-hvg', 'honningsvag', 'air', '호닝스보그 발란 공항|Honningsvåg Airport, Valan',
         '시내 북쪽 약 4km의 작은 공항으로, 노르웨이 북부 공항들로 소형기가 다닙니다.|A small airport about 4 km north of town, with small planes to other airports in northern Norway.',
         [TAXI('시내까지 약 5~10분|About 5–10 min to town')],
         'Honningsvåg Airport Valan', code='HVG'),
]
f = 'src/data/gateways/no.ts'
s = open(f).read()
k = s.rstrip().rindex(']')
open(f, 'w').write(s[:k] + ''.join('  ' + ts(c, 2) + ',\n' for c in C) + s[k:])
print(len(C))
