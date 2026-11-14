#!/usr/bin/env python3
"""2026-11-14 Iceland step 3: airport and port cards. Airports from the domestic-airport operator's pages
(innanlandsflugvellir.is, an Isavia subsidiary); Herjólfur ferry from herjolfur.is (35 min, Þorlákshöfn fallback,
Strætó buses from Mjódd); Norröna from smyrilline.com (weekly mid-March to late November). Vestmannaeyjar Airport left
out: its page gives no transport details; Hornafjörður Airport left out: no photo exists. No fares. Run once."""
import sys
sys.path.insert(0, '.picker')
from gw_write import card, TAXI, ts

C = [
    card('gw-rkv', 'reykjavik', 'air', '레이캬비크 공항|Reykjavík Airport',
         '시내 바로 남쪽의 국내선 공항으로, 아쿠레이리·에길스타디르·이사피외르뒤르 등 국내선과 일부 국제선이 다닙니다. 국제선 대부분은 케플라비크 공항을 씁니다.|The domestic airport just south of the centre, with flights to Akureyri, Egilsstaðir, Ísafjörður and a few international routes; most international flights use Keflavík.',
         [dict(mode='bus', name='플뤼버스 공항 셔틀|Flybus airport shuttle', route='레이캬비크 공항 ↔ 케플라비크 공항|Reykjavík Airport ↔ Keflavík Airport'), dict(mode='walk', name='걷기|Walk', route='공항 → 시내|Airport → centre'), TAXI('시내까지 약 5~10분|About 5–10 min to the centre')],
         'Reykjavík Airport', code='RKV', site='https://www.innanlandsflugvellir.is/en/reykjavik-airport/'),
    card('gw-aey', 'akureyri', 'air', '아쿠레이리 공항|Akureyri Airport',
         '피오르 안쪽 시내 바로 남쪽의 북부 관문 공항으로, 레이캬비크 국내선과 유럽 직항편 일부가 다닙니다. 공항에 렌터카 회사가 여럿 있습니다.|The northern gateway airport just south of town at the head of the fjord, with domestic flights to Reykjavík and some direct European flights; several car-hire firms are at the airport.',
         [TAXI('시내까지 약 5분|About 5 min to the centre')],
         'Akureyri Airport', code='AEY', intl=True, site='https://www.innanlandsflugvellir.is/en/akureyri-airport/'),
    card('gw-ifj', 'isafjordur', 'air', '이사피외르뒤르 공항|Ísafjörður Airport',
         '피오르 벽 사이로 내려앉는 웨스트피오르의 공항으로, 레이캬비크 국내선이 다닙니다. 공항에 렌터카 회사 세 곳이 있습니다.|The Westfjords airport, where planes land between steep fjord walls, with flights to Reykjavík; three car-hire firms are at the terminal.',
         [dict(mode='bus', name='버스(베스트피아르다레이드)|Coach (Vestfjarðaleið)', route='공항 → 이사피외르뒤르 등|Airport → Ísafjörður and other towns'), TAXI('도착 시간에 대개 택시가 대기|Taxis usually wait at arrival times')],
         'Ísafjörður Airport', code='IFJ', site='https://www.innanlandsflugvellir.is/en/isafjordur-airport/'),
    card('gw-egs', 'seydisfjordur', 'air', '에길스타디르 공항|Egilsstaðir Airport',
         '동부의 관문 공항으로, 레이캬비크 국내선이 다닙니다. 세이디스피외르뒤르까지는 고개를 넘어 차로 약 30분입니다.|East Iceland’s gateway airport, with flights to Reykjavík; Seyðisfjörður is about 30 minutes’ drive over the mountain pass.',
         [dict(mode='bus', name='지역 버스|Local bus', route='공항 정류장 → 에길스타디르, 세이디스피외르뒤르행 환승|Airport stop → Egilsstaðir, change for Seyðisfjörður'), TAXI('세이디스피외르뒤르까지 약 30분|About 30 min to Seyðisfjörður')],
         'Egilsstaðir Airport', code='EGS', site='https://www.innanlandsflugvellir.is/en/egilsstadir-airport/'),
    card('gw-landeyjahofn', 'vestmannaeyjar', 'port', '란데이야회픈 페리 항구|Landeyjahöfn ferry port',
         '남해안의 페리 항구로, 헤르욜퓌르호가 약 35분 만에 베스트만나에이야르로 건너갑니다. 레이캬비크에서 차로 약 2시간입니다.|The south-coast ferry port, where the Herjólfur crosses to the Westman Islands in about 35 minutes; about two hours’ drive from Reykjavík.',
         [dict(mode='boat', name='헤르욜퓌르 페리|Herjólfur ferry', route='란데이야회픈 → 베스트만나에이야르|Landeyjahöfn → Westman Islands', time='약 35분, 출항 30분 전까지 수속|About 35 min; check in 30 min before'), dict(mode='bus', name='스트레이토 버스|Strætó bus', route='레이캬비크 묘드 → 란데이야회픈|Mjódd, Reykjavík → Landeyjahöfn')],
         'Landeyjahöfn', note='바다 상태가 나쁘면 더 먼 토를라욱스회픈 항구로 바뀌니 출발 전 운항 공지를 확인하세요.|In rough seas sailings switch to the more distant port of Þorlákshöfn, so check the notices before setting off.', site='https://www.herjolfur.is/en/'),
    card('gw-seydisfjordur-port', 'seydisfjordur', 'port', '세이디스피외르뒤르 국제 페리 항구|Seyðisfjörður ferry port',
         '스미릴 라인의 노뢰나호가 페로 제도 토르스하운과 덴마크 히르트스할스로 오가는 항구로, 3월 중순~11월 말에 주 1회 다닙니다.|The port for Smyril Line’s Norröna to Tórshavn in the Faroe Islands and Hirtshals in Denmark, sailing weekly from mid-March to late November.',
         [dict(mode='bus', name='지역 버스|Local bus', route='에길스타디르 ↔ 세이디스피외르뒤르|Egilsstaðir ↔ Seyðisfjörður'), TAXI('에길스타디르까지 약 30분|About 30 min to Egilsstaðir')],
         'Seyðisfjörður ferry terminal', note='출항 1시간 전까지 수속해야 합니다.|Check in at least an hour before departure.', site='https://www.smyrilline.com/'),
]
f = 'src/data/gateways/is.ts'
s = open(f).read()
k = s.rstrip().rindex(']')
open(f, 'w').write(s[:k] + ''.join('  ' + ts(c, 2) + ',\n' for c in C) + s[k:])
print(len(C))
