#!/usr/bin/env python3
"""2026-11-15 Bulgaria step 3: airport cards for Burgas (BOJ) and Plovdiv (PDV).
Sources: burgas-airport.bg "Public transport" (bus 15 to the central bus station; read in Chrome, the site blocks
curl) and plovdivairport.com "Shuttle Line" (shuttle from Bus Station South timed to each flight, 10 BGN on board) and
"Taxi services". No airline route lists. Run once."""
import sys
sys.path.insert(0, '.picker')
from gw_write import card, TAXI, ts

C = [
    card('gw-boj', 'burgas', 'air', '부르가스 공항|Burgas Airport',
         '시내 북동쪽 약 10km 사라포보에 있는 흑해 연안 공항으로, 여름엔 유럽 각지 휴양 노선이 몰립니다. 네세바르·선니 비치로 가는 가장 가까운 공항입니다.|The Black Sea coast airport at Sarafovo, about 10 km north-east of the centre, busy with holiday routes from across Europe in summer and the nearest airport to Nessebar and Sunny Beach.',
         [dict(mode='bus', name='15번 버스|Bus 15', route='공항 → 부르가스 남부 버스터미널 (기차역 옆)|Airport → Burgas South bus station (by the rail station)', time='약 25분|About 25 min'),
          TAXI('시내까지 약 15분|About 15 min to the centre')],
         'Burgas Airport', code='BOJ', intl=True, note='해안 휴양지행 버스는 남부 버스터미널에서 갈아탑니다.|Change at the South bus station for buses to the coastal resorts.', site='https://burgas-airport.bg/en'),
    card('gw-pdv', 'plovdiv', 'air', '플로브디프 공항|Plovdiv Airport',
         '시내 남동쪽 약 12km 크루모보에 있는 작은 공항으로, 저비용 항공 노선 몇 개가 다닙니다.|A small airport at Krumovo, about 12 km south-east of the city, served by a handful of low-cost routes.',
         [dict(mode='bus', name='공항 셔틀|Airport shuttle', route='공항 ↔ 플로브디프 남부 버스터미널|Airport ↔ Plovdiv Bus Station South', time='항공편 시간에 맞춰 운행|Timed to each flight'),
          TAXI('시내까지 약 20분|About 20 min to the centre')],
         'Plovdiv Airport', code='PDV', intl=True, note='셔틀은 출발 2시간 30분 전에 남부 버스터미널을 떠나고, 도착 30분 뒤 공항을 떠납니다. 요금은 차 안에서 냅니다.|The shuttle leaves Bus Station South 2½ hours before each departure and the airport 30 min after each arrival; pay on board.', site='https://plovdivairport.com/en'),
]
f = 'src/data/gateways/bg.ts'
s = open(f).read()
k = s.rstrip().rindex(']')
open(f, 'w').write(s[:k] + ''.join('  ' + ts(c, 2) + ',\n' for c in C) + s[k:])
print(len(C))
