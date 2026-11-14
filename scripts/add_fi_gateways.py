#!/usr/bin/env python3
"""2026-11-14 Finland step 3: airport cards for the new cities. Transport from Finavia's own public-transport pages
(Oulu buses 8/9, Jyväskylä Linkki 140, Kuopio Vilkku 40, Kittilä resort buses, Ivalo shuttles, Kemi-Tornio and Savonlinna
no airport bus, Mariehamn 3 km and taxis). No fares. Run once."""
import sys
sys.path.insert(0, '.picker')
from gw_write import card, TAXI, ts

C = [
    card('gw-oul', 'oulu', 'air', '오울루 공항|Oulu Airport',
         '시내 남서쪽에 있는 핀란드 북부의 관문 공항으로, 헬싱키 노선이 자주 다니고 국제선도 일부 있습니다.|Northern Finland’s gateway airport southwest of the city, with frequent Helsinki flights and some international routes.',
         [dict(mode='bus', name='시내버스 8·9번|City buses 8 and 9', route='공항 → 오울루 시내|Airport → central Oulu', time='시간표는 오울루 교통(Oulun joukkoliikenne) 확인|See Oulu public transport for times'), TAXI('시내까지 약 20분|About 20 min to the centre')],
         'Oulu Airport', code='OUL', site='https://www.finavia.fi/en/airports/oulu'),
    card('gw-kem', 'kemi', 'air', '케미 토르니오 공항|Kemi-Tornio Airport',
         '케미에서 차로 약 5분, 토르니오에서 약 25분 거리의 작은 공항으로, 헬싱키 노선이 다닙니다. 정기 버스는 없습니다.|A small airport about 5 minutes’ drive from Kemi and 25 from Tornio, with flights to Helsinki; there is no regular bus.',
         [TAXI('케미 시내까지 약 5분|About 5 min to Kemi')],
         'Kemi-Tornio Airport', code='KEM', site='https://www.finavia.fi/en/airports/kemi-tornio'),
    card('gw-ktt', 'levi', 'air', '키틸래 공항|Kittilä Airport',
         '레비에서 약 15km 떨어진 라플란드 스키 리조트의 관문으로, 겨울엔 유럽 각지에서 전세기와 정기편이 들어옵니다.|The gateway to the Lapland ski resorts, about 15 km from Levi, with winter charters and scheduled flights from across Europe.',
         [dict(mode='bus', name='레비행 공항버스(툰투릴린야트)|Airport bus to Levi (Tunturilinjat)', route='공항 → 레비 마을|Airport → Levi village', time='여름·비수기엔 예약제로 운행|On demand, booked ahead, in summer and off-season'), TAXI('레비까지 약 15~20분|About 15–20 min to Levi')],
         'Kittilä Airport', code='KTT', intl=True, site='https://www.finavia.fi/en/airports/kittila'),
    card('gw-ivl', 'inari', 'air', '이발로 공항|Ivalo Airport',
         '핀란드 최북단 공항으로, 이나리 마을까지는 약 40km입니다. 사리셀캐 리조트행 셔틀버스도 다닙니다.|Finland’s northernmost airport, about 40 km from Inari village, with a shuttle bus to the Saariselkä resort as well.',
         [dict(mode='bus', name='이나리행 셔틀(예약제)|Shuttle to Inari (pre-booked)', route='공항 → 이나리 마을|Airport → Inari village', time='전세 방식이라 미리 예약|Charter service; book in advance'), TAXI('이나리까지 약 40분|About 40 min to Inari')],
         'Ivalo Airport', code='IVL', site='https://www.finavia.fi/en/airports/ivalo'),
    card('gw-jyv', 'jyvaskyla', 'air', '위배스퀼래 공항|Jyväskylä Airport',
         '시내 북쪽 티카코스키에 있는 공항으로, 공항까지 바로 가는 기차는 없습니다.|The airport at Tikkakoski, north of the city; no train runs directly to it.',
         [dict(mode='bus', name='링키 버스 140번|Linkki bus route 140', route='공항 E·P 승강장 → 위배스퀼래 시내|Airport ramps E and P → Jyväskylä centre', time='시간표는 링키(Linkki) 확인|See Linkki for times'), TAXI('시내까지 약 25분|About 25 min to the centre')],
         'Jyväskylä Airport', code='JYV', site='https://www.finavia.fi/en/airports/jyvaskyla'),
    card('gw-kuo', 'kuopio', 'air', '쿠오피오 공항|Kuopio Airport',
         '시내 북쪽 리살라에 있는 호수 지방의 공항으로, 헬싱키 노선이 다닙니다.|The Lakeland airport at Rissala, north of the city, with flights to Helsinki.',
         [dict(mode='bus', name='시내버스 40번(빌쿠)|Vilkku bus line 40', route='공항 → 쿠오피오 시내|Airport → Kuopio centre', time='시간표는 빌쿠(Vilkku) 확인|See Vilkku for times'), TAXI('시내까지 약 20분|About 20 min to the centre')],
         'Kuopio Airport', code='KUO', site='https://www.finavia.fi/en/airports/kuopio'),
    card('gw-svl', 'savonlinna', 'air', '사본린나 공항|Savonlinna Airport',
         '사이마 호수 지방의 작은 공항으로, 헬싱키 노선이 다닙니다. 공항버스는 없어 택시로 시내에 갑니다.|A small Lake Saimaa airport with flights to Helsinki; there is no airport bus, so take a taxi into town.',
         [TAXI('시내까지 약 15분|About 15 min to the centre')],
         'Savonlinna Airport', code='SVL', site='https://www.finavia.fi/en/airports/savonlinna'),
    card('gw-mhq', 'mariehamn', 'air', '마리에함 공항|Mariehamn Airport',
         '시내에서 약 3km 떨어진 올란드 제도의 공항으로, 헬싱키·투르쿠·스톡홀름 노선이 다닙니다.|Åland’s airport about 3 km from the town centre, with flights to Helsinki, Turku and Stockholm.',
         [TAXI('항공편 도착 시간에 택시가 대기, 시내까지 약 5~10분|Taxis wait at arrival times; about 5–10 min to town')],
         'Mariehamn Airport', code='MHQ', site='https://www.finavia.fi/en/airports/mariehamn'),
]
f = 'src/data/gateways/fi.ts'
s = open(f).read()
k = s.rstrip().rindex(']')
open(f, 'w').write(s[:k] + ''.join('  ' + ts(c, 2) + ',\n' for c in C) + s[k:])
print(len(C))
