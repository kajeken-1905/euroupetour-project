#!/usr/bin/env python3
"""2026-11-16 Albania step 3: port cards for Durrës and Sarandë. Sources: adriaferries.com (Bari and Ancona lines to
Durrës, read in Chrome) and finikas-lines.com (Corfu–Sarandë line, agency above the port on Rruga Mitat Hoxha). Vlorë's
Brindisi ferry operators have no official site found, and Vlorë airport had not opened for scheduled flights, so neither
gets a card. Run once."""
import sys
sys.path.insert(0, '.picker')
from gw_write import card, TAXI, ts

C = [
    card('gw-durres-port', 'durres', 'port', '두러스 항 여객터미널|Port of Durrës passenger terminal',
         '알바니아 최대 항구로, 구시가 바로 옆에서 이탈리아 바리·앙코나행 페리(아드리아 페리 등)가 연중 출발합니다. 여름엔 차를 싣고 오는 손님으로 붐빕니다.|Albania’s main port, right beside the old town, with year-round ferries (Adria Ferries and others) to Bari and Ancona in Italy; busy with car passengers in summer.',
         [dict(mode='walk', name='걸어서|On foot', route='터미널 → 원형극장·구시가|Terminal → amphitheatre and old town', time='약 10~15분|About 10–15 min'),
          TAXI('해변 지구까지 약 10분|About 10 min to the beach district')],
         'Durrës Port Passenger Terminal', note='출항 전 체크인 시간이 있으니 승선권의 안내를 확인하세요.|Check-in closes before departure; see the instructions on your ticket.', site='https://www.adriaferries.com/en/'),
    card('gw-sarande-port', 'sarande', 'port', '사란다 항|Port of Sarandë',
         '시내 한가운데 항구에서 그리스 코르푸행 페리(피니카스 라인 등)가 하루 몇 차례 떠납니다. 코르푸까지 30분~1시간이며 여름에 편이 많습니다.|Ferries to Corfu in Greece (Finikas Lines and others) leave from the harbour in the middle of town several times a day, taking 30 minutes to an hour, with more sailings in summer.',
         [dict(mode='walk', name='걸어서|On foot', route='항구 → 해안 산책로·시내|Port → promenade and centre', time='약 5분|About 5 min'),
          TAXI('부트린트·크사밀까지 약 30분|About 30 min to Butrint or Ksamil')],
         'Port of Saranda', intl=True, note='국경 통과라 여권 심사가 있습니다. 매표소는 항구 위 미타트 호자 거리에 있습니다.|It is an international crossing with passport control; the ticket office is above the port on Rruga Mitat Hoxha.', site='https://finikas-lines.com/'),
]
f = 'src/data/gateways/al.ts'
s = open(f).read()
k = s.rstrip().rindex(']')
open(f, 'w').write(s[:k] + ''.join('  ' + ts(c, 2) + ',\n' for c in C) + s[k:])
print(len(C))
