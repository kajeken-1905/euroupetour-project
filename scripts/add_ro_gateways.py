#!/usr/bin/env python3
"""2026-11-15 Romania step 3: airport cards for Iași (IAS), Suceava (SCV) and Constanța (CND).
Sources: CTP Iași bus 50 (express airport line, about 8 km, local press 2024); Suceava airport is in Salcea about
12 km east, no confirmed city bus, so taxi only; mk-airport.ro "How to get to the airport" (Transevren bus
Constanța – airport – Mihail Kogălniceanu, roughly 35–55 min). Oradea (OMR) was dropped: no free-licence photo. No fares,
no airline route lists. The Tulcea Delta passenger terminal was left out (not verified). Run once."""
import sys
sys.path.insert(0, '.picker')
from gw_write import card, TAXI, ts

C = [
    card('gw-ias', 'iasi', 'air', '야시 공항|Iași International Airport',
         '시내에서 동쪽 약 8km의 몰다비아 지역 공항으로, 국내선과 유럽 여러 도시 노선이 다닙니다.|Moldavia’s regional airport, about 8 km east of the city, with domestic flights and routes to many European cities.',
         [dict(mode='bus', name='50번 버스|Bus 50', route='공항 → 우니리 광장·기차역|Airport → Piața Unirii and the station', time='약 30분|About 30 min'),
          TAXI('시내까지 약 15~20분|About 15–20 min to the centre')],
         'Aeroportul Internațional Iași', code='IAS', intl=True, note='50번 버스는 공항 급행 노선으로 정류장이 적습니다. 시간표는 CTP 이아시에서 확인하세요.|Bus 50 is an express airport line with few stops; check CTP Iași for times.', site='https://www.aeroport-iasi.ro'),
    card('gw-scv', 'suceava', 'air', '수체아바 공항|Suceava Ștefan cel Mare International Airport',
         '시내에서 동쪽 약 12km 살체아에 있는 공항으로, 부코비나 채색 수도원을 찾는 여행자가 많이 이용합니다.|An airport in Salcea, about 12 km east of the city, popular with visitors to Bukovina’s painted monasteries.',
         [TAXI('시내까지 약 20분|About 20 min to the centre')],
         'Aeroportul Internațional Suceava', code='SCV', intl=True, note='공항과 시내를 잇는 정기 시내버스는 확인되지 않아 택시나 렌터카가 편합니다.|No regular city bus to the airport could be confirmed, so a taxi or hire car is easiest.', site='https://www.aeroportsuceava.ro'),
    card('gw-cnd', 'constanta', 'air', '콘스탄차 공항|Mihail Kogălniceanu International Airport',
         '콘스탄차 시내에서 북쪽 약 25km 미하일 코갈니체아누에 있는 흑해 연안 공항으로, 여름엔 휴양지 노선이 늘어납니다.|The Black Sea coast airport at Mihail Kogălniceanu, about 25 km north of Constanța, with extra holiday routes in summer.',
         [dict(mode='bus', name='공항버스 (트란세브렌)|Airport bus (Transevren)', route='공항 → 콘스탄차|Airport → Constanța', time='약 35~55분|About 35–55 min'),
          TAXI('콘스탄차까지 약 30분|About 30 min to Constanța')],
         'Aeroportul Internațional Mihail Kogălniceanu', code='CND', intl=True, note='버스는 대략 1시간에 1대꼴이고 시간은 교통 상황에 따라 바뀝니다.|Buses run roughly hourly and times vary with traffic.', site='https://www.mk-airport.ro/en'),
]
f = 'src/data/gateways/ro.ts'
s = open(f).read()
k = s.rstrip().rindex(']')
open(f, 'w').write(s[:k] + ''.join('  ' + ts(c, 2) + ',\n' for c in C) + s[k:])
print(len(C))
