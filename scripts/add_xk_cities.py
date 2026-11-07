#!/usr/bin/env python3
"""Kosovo step 2 (2026-11-07, user picked both): Gjakova and Rahovec (wine country). Bus times from Gjirafa/Rome2rio
timetables (Pristina–Gjakova ~1h30, Prizren–Gjakova ~55 min, Prizren–Rahovec ~45 min). Reuses the batch-3 writer.
Run once."""
import add_daytrip_places3 as T
from add_daytrip_places3 import trip
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')

CITIES = [
    dict(id='gjakova', country='xk', after='prizren', ko='자코바', en='Gjakova', native='Gjakovë / Đakovica', lat=42.3803, lng=20.4308,
         blurb=['코소보 서남부의 오스만 시장 도시. 코소보에서 가장 긴 옛 시장 거리 ‘대바자르’와 모스크, 수피 교단 테케가 남아 있습니다.',
                'An Ottoman market town in south-west Kosovo, with the country’s longest old bazaar street, its mosques and Sufi tekkes.'],
         highlights=[
             H('대바자르 (차르시아 에 마데)', 'Grand Bazaar (Çarshia e Madhe)', '돌길을 따라 목조 상점이 1km 가까이 늘어선 오스만 시대 시장으로, 1999년 불탄 뒤 복원했습니다.', 'An Ottoman bazaar of wooden shops lining nearly a kilometre of cobbles, rebuilt after it burned in 1999.', 'Çarshia e Madhe Gjakova', 45, 60),
             H('하둠 모스크', 'Hadum Mosque', '16세기 오스만 모스크로, 안쪽 벽화와 시계탑이 볼거리입니다.', 'A 16th-century Ottoman mosque with painted interiors and a clock tower beside it.', 'Hadum Mosque Gjakova', 15, 20,
               n='기도 시간에는 들어가지 마세요.|Avoid prayer times.'),
             H('대 테케', 'Great Tekke (Teqja e Madhe)', '수피 교단 사디 종파의 수도원으로, 바자르 근처에 있습니다.', 'The lodge of the Sufi Sadi order, near the bazaar.', 'Teqja e Madhe Gjakova', 15, 20),
             H('시계탑과 민속 박물관', 'Clock Tower & Ethnological Museum', '바자르 끝의 시계탑과, 옛 저택에 지역 의상과 공예를 전시한 박물관입니다.', 'The clock tower at the end of the bazaar and a museum of local costume and crafts in an old house.', 'Sahat kulla Gjakova', 20, 30),
             H('테르지 다리', 'Terzi Bridge', '18세기 오스만 시대 아치 11개의 돌다리로, 재봉사 조합이 세웠다고 전합니다.', 'An 18th-century Ottoman stone bridge of eleven arches, said to have been built by the tailors’ guild.', 'Ura e Terzive', 20, 30, group=DAY,
               n='자코바에서 차로 약 10분입니다.|About 10 min by car from Gjakova.'),
         ],
         hubs="    air: [PRN('버스로 약 1시간 30분|About 1 hr 30 by bus')],\n    bus: [['Stacioni i Autobusëve Gjakovë', '자코바 버스터미널']],\n",
         hubs_file='hubs-east.ts', hubs_before='  peja: {\n', itin_file='itinerary-south.ts', itin_before='  peja: ',
         itinerary=[1, 2, 3, 4, 5],
         season='봄~가을이 걷기 좋습니다. 여름 저녁엔 바자르 노천 카페가 붐빕니다.|Spring to autumn is best for walking; summer evenings fill the bazaar terraces.',
         visit_file='visit-balkan.ts', visit_after=r"^  'prizren-h7': v\(.*\),\n",
         stay=[('바자르 주변', 'Around the bazaar', 'Gjakova old bazaar', '처음 가는 여행에 추천|Best for a first visit', '바자르와 모스크, 식당이 걸어서 닿습니다.|The bazaar, mosques and restaurants on foot.')],
         stay_before='  peja: [',
         routes=[('routes-east.ts', r"^  r\('prizren', 'peja', .*\),\n",
                  "  r('pristina', 'gjakova', 'bus', 90),\n  r('prizren', 'gjakova', 'bus', 55),\n")],
         transit=dict(modes=['walk', 'bus', 'taxi'], ko='바자르와 시내는 걸어서 다닙니다. 테르지 다리는 택시나 차로 갑니다.', en='Walk the bazaar and centre; take a taxi or car to the Terzi Bridge.'),
         apps='', transit_before='  peja: {', places=None, daytrips=[]),
    dict(id='rahovec', country='xk', after='gjakova', ko='라호베츠', en='Rahovec', native='Rahovec / Orahovac', lat=42.3994, lng=20.6547,
         blurb=['코소보 와인의 중심지. 언덕을 덮은 포도밭 사이로 와이너리가 흩어져 있고, 9월엔 포도 수확 축제가 열립니다.',
                'The heart of Kosovo’s wine country, with wineries scattered through vineyard-covered hills and a grape-harvest festival in September.'],
         highlights=[
             H('라호베츠 포도밭', 'Rahovec vineyards', '마을을 둘러싼 언덕의 포도밭으로, 와인 길을 따라 걷거나 차로 돕니다.', 'The vineyards on the hills around town, walked or driven along the wine roads.', 'Rahovec vineyards', 60, 120),
             H('스톤 캐슬 와이너리', 'Stone Castle Winery', '코소보에서 가장 큰 와이너리로, 지하 저장고 투어와 시음이 있습니다.', 'Kosovo’s largest winery, with cellar tours and tastings.', 'Stone Castle Vineyards & Winery', 60, 90,
               b='rec', n='투어는 미리 예약하세요.|Book tours ahead.'),
             H('마야 에 슈코드라니트 전망', 'Maja e Shkodranit viewpoint', '마을 위 언덕 꼭대기로, 포도밭과 평야가 한눈에 내려다보입니다.', 'The hilltop above town, with views over the vineyards and plain.', 'Maja e Shkodranit Rahovec', 60, 90),
             H('라호베츠 옛 동네', 'Rahovec old quarter', '돌담과 옛 가옥이 남은 언덕 위 옛 동네입니다.', 'The hillside old quarter of stone walls and traditional houses.', 'Rahovec', 30, 45),
         ],
         hubs="    air: [PRN('버스로 약 1시간 15분|About 1 hr 15 by bus')],\n    bus: [['Rahovec', '라호베츠 버스 정류장']],\n",
         hubs_file='hubs-east.ts', hubs_before='  peja: {\n', itin_file='itinerary-south.ts', itin_before='  peja: ',
         itinerary=[4, 1, 3, 2],
         season='9월 포도 수확 축제(Vjeshta e Rahovecit) 때 가장 활기찹니다.|Liveliest at the September harvest festival.',
         visit_file='visit-balkan.ts', visit_after=r"^  'prizren-h7': v\(.*\),\n",
         stay=[('프리즈렌에서 다녀오기', 'Base in Prizren', 'Prizren', '거점에서 다녀오기|Day trip from a base', '버스로 약 45분입니다. 마을엔 숙소가 적습니다.|About 45 min by bus; few rooms in town.')],
         stay_before='  peja: [',
         routes=[('routes-east.ts', r"^  r\('prizren', 'peja', .*\),\n",
                  "  r('prizren', 'rahovec', 'bus', 45),\n")],
         transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 와이너리와 전망대는 택시나 차가 편합니다.', en='Walk the town; a taxi or car is easiest for the wineries and viewpoint.'),
         apps='', transit_before='  peja: {', places=None, daytrips=[]),
]

if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
