#!/usr/bin/env python3
"""2026-11-14 Sweden step 3: airport cards for the new cities. Bus details from Swedavia's own bus pages
(Visby line 61, Luleå lines 4/104, Östersund line 4, Ronneby Trossötaxi coach), Kalmar line 402 from kalmar.com,
Höga Kusten 'no flight buses' from hogakusten.com. No fares (unverified). Run once."""
import sys
sys.path.insert(0, '.picker')
from gw_write import card, TAXI, ts

C = [
    card('gw-vby', 'visby', 'air', '비스뷔 공항|Visby Airport',
         '비스뷔 성벽 북쪽에 있는 고틀란드섬의 공항입니다. 스톡홀름 등 본토 노선이 다니고 여름에 편수가 늘어납니다.|Gotland’s airport just north of Visby’s walls, with flights to Stockholm and other mainland cities and more services in summer.',
         [dict(mode='bus', name='고틀란드 대중교통 61번|Gotland public transport route 61', route='공항 → 비스뷔 시내(연중 운행)|Airport → central Visby (year-round)', time='약 10분, 버스 안에선 카드 결제만|About 10 min; card only on board'), TAXI('시내까지 약 10분|About 10 min to the centre')],
         'Visby Airport', code='VBY', site='https://www.swedavia.com/visby/'),
    card('gw-klr', 'kalmar', 'air', '칼마르 욀란드 공항|Kalmar Öland Airport',
         '시내에서 서쪽으로 약 5km 떨어진 공항으로, 스톡홀름 노선이 중심입니다. 욀란드섬으로 가는 길목이기도 합니다.|About 5 km west of the centre, mainly with flights to Stockholm; also the gateway for Öland.',
         [dict(mode='bus', name='시내버스 402번|Local bus line 402', route='공항 앞 → 칼마르 시내|Airport → central Kalmar', time='약 20분 간격, 버스 안에선 카드 결제만|About every 20 min; card only on board'), TAXI('시내까지 약 10~15분|About 10–15 min to the centre')],
         'Kalmar Öland Airport', code='KLR'),
    card('gw-lla', 'lulea', 'air', '룰레오 공항|Luleå Airport',
         '시내 남서쪽의 스웨덴 북부 최대 공항입니다. 스톡홀름 노선이 많고 겨울엔 유럽 전세기도 들어옵니다.|Northern Sweden’s largest airport, southwest of the centre, with frequent Stockholm flights and winter charters from Europe.',
         [dict(mode='bus', name='시내버스 4·104번|City buses 4 and 104', route='터미널 앞 → 스메디에가탄(시내), 104번은 버스·기차역까지|Outside the terminal → Smedjegatan (centre); 104 continues to the bus and train stations', time='약 15분, 현금 불가|About 15 min; no cash'), TAXI('시내까지 약 10~15분|About 10–15 min to the centre')],
         'Luleå Airport', code='LLA', site='https://www.swedavia.com/lulea/'),
    card('gw-osd', 'are', 'air', '오레 외스테르순드 공항|Åre Östersund Airport',
         '외스테르순드 옆 프뢰쇤섬에 있는 공항으로, 오레까지는 차로 약 1시간 거리입니다. 스키 시즌엔 오레행 공항 셔틀 택시가 다닙니다.|On Frösön island by Östersund, about an hour’s drive from Åre; shared airport taxis run to Åre in the ski season.',
         [dict(mode='taxi', name='공항 셔틀 택시(플뤼그탁시, 예약제)|Flygtaxi shared transfer (pre-booked)', route='공항 → 오레 시내(12~5월 스키 시즌)|Airport → central Åre (ski season, December–May)', time='약 1시간|About 1 hour'),
          dict(mode='bus', name='시내버스 4번 + 기차|Bus line 4, then train', route='공항 → 외스테르순드 시내 → 외스테르순드 중앙역에서 오레행 기차|Airport → Östersund centre → train to Åre from Östersund Central', time='버스 약 30분, 항공편과 무관한 시간표|Bus about 30 min; runs to its own timetable, not to flights')],
         'Åre Östersund Airport', code='OSD', site='https://www.swedavia.com/ostersund/'),
    card('gw-krf', 'hoga-kusten', 'air', '회가쿠스텐 공항(크람포르스)|Höga Kusten Airport, Kramfors',
         '회가쿠스텐 남쪽 내륙의 작은 공항으로, 스톡홀름행 소형기가 다닙니다. 공항버스가 없어 택시를 미리 예약해야 합니다.|A small airport inland from the southern High Coast, with small planes to Stockholm; there is no airport bus, so book a taxi ahead.',
         [dict(mode='taxi', name='택시(사전 예약)|Taxi (book ahead)', route='공항 → 크람포르스·회가쿠스텐 마을|Airport → Kramfors and High Coast villages', time='미리 예약 필요|Book in advance')],
         'Höga Kusten Airport Kramfors', code='KRF'),
    card('gw-rnb', 'karlskrona', 'air', '로네뷔 공항|Ronneby Airport',
         '칼스크로나에서 서쪽으로 약 30km, 칼링에에 있는 블레킹에 지방의 공항입니다. 스톡홀름 노선이 다닙니다.|Blekinge’s airport at Kallinge, about 30 km west of Karlskrona, with flights to Stockholm.',
         [dict(mode='bus', name='공항 코치(트로쇠택시)|Airport coach (Trossötaxi)', route='공항 → 칼스크로나 시내|Airport → central Karlskrona', time='항공편 시간에 맞춰 운행|Timed to flight arrivals and departures'), TAXI('칼스크로나까지 약 30분|About 30 min to Karlskrona')],
         'Ronneby Airport', code='RNB', site='https://www.swedavia.com/ronneby/'),
]
f = 'src/data/gateways/se.ts'
s = open(f).read()
k = s.rstrip().rindex(']')
open(f, 'w').write(s[:k] + ''.join('  ' + ts(c, 2) + ',\n' for c in C) + s[k:])
print(len(C))
