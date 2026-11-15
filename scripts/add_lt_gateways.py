#!/usr/bin/env python3
"""2026-11-15 Lithuania step 3: Palanga Airport (Ryanair's own route list shows London Stansted; the airport site
blocks automated reading, so only that route is named) and the DFDS Klaipėda Central Terminal (dfds.com terminal page:
Baltijos pr. 40, overnight sailings to Kiel and daily overnight sailings to Karlshamn). No fares. Run once."""
import sys
sys.path.insert(0, '.picker')
from gw_write import card, TAXI, ts

C = [
    card('gw-plq', 'palanga', 'air', '팔랑가 공항|Palanga Airport',
         '팔랑가 시내 북쪽 약 7km, 클라이페다에서 약 30km 떨어진 리투아니아 해안의 공항으로, 라이언에어 런던 스탠스테드 노선 등이 다닙니다.|Lithuania’s coastal airport, about 7 km north of Palanga and some 30 km from Klaipėda, with routes such as Ryanair to London Stansted.',
         [dict(mode='bus', name='버스|Bus', route='공항 → 팔랑가·클라이페다 버스터미널|Airport → Palanga and Klaipėda bus stations'),
          TAXI('팔랑가까지 약 10분|About 10 min to Palanga')],
         'Palanga International Airport', code='PLQ', note='노선이 적고 계절에 따라 바뀌니 항공사 일정을 먼저 확인하세요.|Routes are few and change with the season, so check airline schedules first.', site='https://www.ltou.lt/en/palanga'),
    card('gw-klaipeda-port', 'klaipeda', 'port', '클라이페다 중앙 페리 터미널|Klaipėda Central Ferry Terminal',
         'DFDS의 독일 킬행과 스웨덴 칼스함행 야간 페리가 떠나는 터미널로, 칼스함행은 매일 다닙니다. 구시가 남쪽 항만 지구에 있습니다.|The terminal for DFDS’s overnight ferries to Kiel in Germany and to Karlshamn in Sweden, the latter daily, in the port area south of the old town.',
         [dict(mode='bus', name='버스|Bus', route='터미널 → 클라이페다역|Terminal → Klaipėda station', time='약 30분|About 30 min'),
          TAXI('구시가까지 약 15분|About 15 min to the old town')],
         'Klaipeda Central Terminal Baltijos pr. 40', note='터미널은 출항 날 저녁(월~목·토 17시, 금 19시, 일 15시)부터 엽니다.|The terminal opens on sailing evenings: from 5 pm Mon–Thu and Sat, 7 pm Fri, 3 pm Sun.', site='https://www.dfds.com/en/passenger-ferries/passenger-information/terminals/klaipeda'),
]
f = 'src/data/gateways/lt.ts'
s = open(f).read()
k = s.rstrip().rindex(']')
open(f, 'w').write(s[:k] + ''.join('  ' + ts(c, 2) + ',\n' for c in C) + s[k:])
print(len(C))
