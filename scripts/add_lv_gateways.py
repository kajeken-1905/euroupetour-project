#!/usr/bin/env python3
"""2026-11-14 Latvia step 3: Liepāja and Ventspils ferry port cards (stenaline.lv: Liepāja–Travemünde daily,
Ventspils–Nynäshamn up to 4 sailings a day). Liepāja Airport left out (its site says no regular flights); the Riga
passenger port left out (no current ferry line confirmed on the port's pages). No fares. Run once."""
import sys
sys.path.insert(0, '.picker')
from gw_write import card, TAXI, ts

C = [
    card('gw-liepaja-port', 'liepaja', 'port', '리예파야 페리 항구|Liepāja ferry port',
         '스테나 라인의 독일 트라베뮌데행 페리가 하루 한 편씩 다니는 항구입니다.|The port for Stena Line’s ferry to Travemünde in Germany, one sailing a day each way.',
         [TAXI('시내까지 약 10분|About 10 min to the centre')],
         'Liepāja ferry terminal', note='화물 위주 노선이라 출항 시간과 승선 수속을 미리 확인하세요.|It is a freight-led route, so check departure and check-in times in advance.', site='https://www.stenaline.lv/marsruti/liepaja-traveminde'),
    card('gw-ventspils-port', 'ventspils', 'port', '벤츠필스 페리 항구|Ventspils ferry port',
         '스테나 라인의 스웨덴 뉘네스함(스톡홀름 남쪽)행 페리가 하루 최대 4편 다니는 항구로, 구시가 바로 옆입니다.|The port for Stena Line’s ferries to Nynäshamn, south of Stockholm, with up to four sailings a day, right by the old town.',
         [dict(mode='walk', name='걷기|Walk', route='항구 → 구시가|Port → old town'), TAXI('시내까지 약 5분|About 5 min to the centre')],
         'Ventspils ferry terminal', site='https://www.stenaline.lv/marsruti/ventspils-ninashamna'),
]
f = 'src/data/gateways/lv.ts'
s = open(f).read()
k = s.rstrip().rindex(']')
open(f, 'w').write(s[:k] + ''.join('  ' + ts(c, 2) + ',\n' for c in C) + s[k:])
print(len(C))
