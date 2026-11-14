#!/usr/bin/env python3
"""2026-11-14 Estonia step 3: Tartu and Kuressaare airport cards (airport.ee), Tallinn Old City Harbour (ts.ee: terminals
A and D, tram 2, buses 19/25/66) and the Virtsu ferry port (praamid.ee). No fares. Run once."""
import sys
sys.path.insert(0, '.picker')
from gw_write import card, TAXI, ts

C = [
    card('gw-tay', 'tartu', 'air', '타르투 공항|Tartu Airport',
         '시내에서 약 10km 떨어진 작은 공항으로, 핀에어 헬싱키 노선(약 50분)이 하루 한두 번 다닙니다.|A small airport about 10 km from the city centre, with Finnair flights to Helsinki (about 50 min) once or twice a day.',
         [TAXI('시내까지 약 15분, 공항 대기 택시는 포루스 택시|About 15 min to the centre; Forus Taxi waits at the rank')],
         'Tartu Airport', code='TAY', site='https://airport.ee/tartu-airport/'),
    card('gw-ure', 'kuressaare', 'air', '쿠레사레 공항|Kuressaare Airport',
         '사레마섬의 공항으로, 탈린 노선(약 40분)이 하루 한두 번 다니고 여름엔 헬싱키 노선도 있습니다.|Saaremaa’s airport, with flights to Tallinn (about 40 min) once or twice a day and to Helsinki in summer.',
         [TAXI('시내까지 약 5~10분|About 5–10 min to town')],
         'Kuressaare Airport', code='URE', site='https://airport.ee/en/kuressaare-airport/'),
    card('gw-tallinn-port', 'tallinn', 'port', '탈린 구시가 항구(여객 터미널 A·D)|Tallinn Old City Harbour (terminals A and D)',
         '헬싱키행 페리(A·D 터미널)와 마리에함을 거치는 스톡홀름행 탈링크 야간 페리(D 터미널)가 떠나는 항구로, 구시가 바로 북쪽입니다.|The harbour just north of the old town, with ferries to Helsinki (terminals A and D) and Tallink’s overnight ferry to Stockholm via Mariehamn (terminal D).',
         [dict(mode='tram', name='트램 2번|Tram 2', route='‘바나사담’ 정류장 → A 터미널 약 100m|‘Vanasadam’ stop → terminal A about 100 m'),
          dict(mode='bus', name='버스 19·25·66번|Buses 19, 25, 66', route='‘레이시사다마 D-터미널’ 정류장 → D 터미널 약 90m|‘Reisisadama D-terminal’ stop → terminal D about 90 m'),
          dict(mode='walk', name='걷기|Walk', route='구시가 → 항구|Old town → harbour')],
         'Tallinn Old City Harbour', note='배편마다 터미널이 다르니 승선권을 확인하세요.|Each line uses its own terminal; check your ticket.', site='https://www.ts.ee/en/'),
    card('gw-virtsu', 'kuressaare', 'port', '비르츠 페리 항구(무후·사레마행)|Virtsu ferry port (to Muhu and Saaremaa)',
         '본토 비르츠와 무후섬 쿠이바스투를 잇는 페리 항구로, 탈린–쿠레사레 장거리 버스도 이 배로 건넙니다. 무후섬과 사레마섬은 둑길로 이어져 있습니다.|The mainland port linking Virtsu with Kuivastu on Muhu; Tallinn–Kuressaare coaches cross on this ferry, and Muhu is joined to Saaremaa by a causeway.',
         [dict(mode='boat', name='비르츠–쿠이바스투 페리|Virtsu–Kuivastu ferry', route='비르츠 → 쿠이바스투(무후섬)|Virtsu → Kuivastu (Muhu)'),
          dict(mode='bus', name='탈린–쿠레사레 장거리 버스|Tallinn–Kuressaare coach', route='버스째 페리에 타고 건넘|The coach rides the ferry across')],
         'Virtsu ferry port', note='차를 가져가면 온라인 표가 우선 승선입니다. 금요일 오후 본토발, 일요일 오후 섬발은 붐빕니다.|With a car, online tickets get priority boarding; mainland departures on Friday afternoons and island departures on Sunday afternoons are busy.', site='https://www.praamid.ee/en/'),
]
f = 'src/data/gateways/ee.ts'
s = open(f).read()
k = s.rstrip().rindex(']')
open(f, 'w').write(s[:k] + ''.join('  ' + ts(c, 2) + ',\n' for c in C) + s[k:])
print(len(C))
