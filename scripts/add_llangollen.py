#!/usr/bin/env python3
"""Wales new town (2026-11-22, user request): Llangollen with the Pontcysyllte Aqueduct.
Facts from English Wikipedia: Pontcysyllte Aqueduct carries the Llangollen Canal over the Dee, 19 arches, stone and
cast iron, completed 1805 after ten years, by Thomas Telford and William Jessop, 307 m long, trough 39 m above the
river, longest aqueduct in Great Britain and highest canal aqueduct in the world, towpath on one side, Grade I, part of
a UNESCO World Heritage Site. Castell Dinas Brân: hilltop above Llangollen, stone castle probably 1260s by Gruffydd
Maelor II of Powys Fadog, on an Iron Age hillfort, "Crow Castle". Llangollen Railway: volunteer-run heritage line
Llangollen–Corwen, 16 km, daily in summer, weekends in winter, steam and diesel. Plas Newydd: home of the Ladies of
Llangollen (Eleanor Butler, Sarah Ponsonby) for nearly 50 years, council museum. Valle Crucis Abbey: Cistercian, 1201
by Madog ap Gruffydd Maelor, dissolved 1537, Cadw. Horseshoe Falls: weir on the Dee ~5 km NW of Llangollen, short walk
from Berwyn station. Chirk Castle: Grade I, National Trust, 2.4 km from Chirk station. Transit (web search): Arriva bus
5 Wrexham–Ruabon–Trevor–Llangollen hourly, Ruabon–Llangollen ~16 min; Trevor stop 5–10 min walk to the aqueduct;
Ruabon on the Chester–Shrewsbury line. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

FREE = '무료입니다.|Free.'
COMMON = dict(hubs_file='hubs-west.ts', hubs_before='  belfast: {\n', itin_file='itinerary-uk.ts',
              itin_before='  belfast: [', visit_file='visit-uk.ts',
              visit_after=r"^  '(?:conwy|llangollen)-h\d+': v\(.*\),\n",
              stay_before='  tenby: [', transit_before='  tenby: {', places=None, daytrips=[],
              apps="      ta('trainline'),\n")
LAST = r"^  r\('conwy', 'snowdonia', .*\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


CITIES = [
    dict(COMMON, country='uk', id='llangollen', after='conwy', ko='랭골렌', en='Llangollen', native='Llangollen', lat=52.9700, lng=-3.1700,
         blurb=['웨일스 북동부 디강 가의 작은 마을로, 잉글랜드 체스터에서 가깝습니다. 마을 동쪽엔 1805년 완공된 폰트치실트 수로교가 디 계곡을 가로질러 운하 배를 39m 높이로 건네고, 수로교와 운하는 유네스코 세계유산입니다. 언덕 위 디나스 브란 성터, 증기기관차가 다니는 보존 철도, 중세 수도원 유적이 마을을 둘러싸고 있습니다.',
                'A small town on the River Dee in north-east Wales, close to Chester in England. East of town the Pontcysyllte Aqueduct, completed in 1805, carries narrowboats 39 m above the Dee valley; the aqueduct and canal are a UNESCO World Heritage Site. A hilltop castle ruin, a steam heritage railway and a medieval abbey ruin surround the town.'],
         highlights=[
             H('폰트치실트 수로교', 'Pontcysyllte Aqueduct', '토머스 텔퍼드와 윌리엄 제솝이 10년에 걸쳐 1805년 완공한 운하 수로교로, 길이 307m, 강 위 39m 높이의 주철 수로를 돌기둥이 받칩니다. 영국에서 가장 긴 수로교이자 세계에서 가장 높은 운하 수로교로, 한쪽 끝의 좁은 산책로를 걸어서 건너거나 운하 배를 타고 건넙니다.', 'Completed in 1805 after ten years’ work by Thomas Telford and William Jessop, this 307 m aqueduct carries a cast-iron trough 39 m above the Dee on stone piers. It is the longest aqueduct in Britain and the highest canal aqueduct in the world; walk across on the narrow towpath or cross on a canal boat.', 'Pontcysyllte Aqueduct', 60, 90, b='no', n='건너는 건 무료입니다. 트레버 정류장에서 걸어서 5~10분입니다.|Free to cross; a 5–10 minute walk from the Trevor bus stop.'),
             H('디나스 브란 성', 'Castell Dinas Brân', '마을 위 언덕 꼭대기의 성터로, 1260년대 포위스 파도그의 군주 그리피드 마엘로르 2세가 철기 시대 언덕 요새 자리에 지은 것으로 봅니다. ‘까마귀 성’이라고도 부르며, 디 계곡이 한눈에 내려다보입니다.', 'A ruined castle on the hilltop above town, probably built in the 1260s by Gruffydd Maelor II of Powys Fadog on an Iron Age hillfort. Also called Crow Castle, it looks out over the whole Dee valley.', 'Castell Dinas Bran', 90, 120, b='no', n='가파른 오르막을 걸어 올라갑니다. 무료입니다.|A steep walk up; free.'),
             H('랭골렌 보존 철도', 'Llangollen Railway', '자원봉사자들이 운영하는 보존 철도로, 랭골렌에서 코웬까지 디 계곡을 따라 16km를 증기·디젤 기관차가 달립니다.', 'A volunteer-run heritage railway running 16 km up the Dee valley from Llangollen to Corwen with steam and diesel locomotives.', 'Llangollen Railway Station', 90, 150, n='여름엔 매일, 겨울엔 주말 위주로 운행합니다.|Daily in summer, mainly weekends in winter.'),
             H('플라스 뉴이드', 'Plas Newydd', '‘랭골렌의 두 귀부인’ 엘리너 버틀러와 세라 폰슨비가 50년 가까이 함께 산 집으로, 지금은 박물관으로 엽니다.', 'The house where the Ladies of Llangollen, Eleanor Butler and Sarah Ponsonby, lived together for nearly 50 years, now open as a museum.', 'Plas Newydd Llangollen', 45, 60),
             H('발레 크루시스 수도원', 'Valle Crucis Abbey', '1201년 포위스 파도그의 군주 마도그가 세운 시토회 수도원으로, 1537년 해산된 뒤 폐허가 됐지만 큰 부분이 남아 있습니다.', 'A Cistercian abbey founded in 1201 by Madog ap Gruffydd Maelor of Powys Fadog; dissolved in 1537, it is a ruin but large parts survive.', 'Valle Crucis Abbey', 30, 45),
             H('호스슈 폭포', 'Horseshoe Falls', '랭골렌에서 북서쪽으로 약 5km, 디강을 가로지른 말굽 모양의 둑으로, 보존 철도 버윈역에서 조금 걸으면 닿습니다.', 'A horseshoe-shaped weir across the Dee about 5 km north-west of Llangollen, a short walk from Berwyn station on the heritage railway.', 'Horseshoe Falls Llangollen', 30, 45, b='no', n=FREE),
             H('처크 성', 'Chirk Castle', '랭골렌 남동쪽 처크 마을의 성으로, 내셔널 트러스트가 운영합니다. 처크역에서 약 2.4km입니다.', 'A castle in the village of Chirk south-east of Llangollen, run by the National Trust, about 2.4 km from Chirk station.', 'Chirk Castle', 120, 180),
         ],
         hubs="    air: [\n      ['Manchester (MAN)', '맨체스터 공항 (MAN)', '맨체스터|Manchester'],\n      ['Liverpool John Lennon (LPL)', '리버풀 존 레넌 공항 (LPL)', '리버풀|Liverpool'],\n    ],\n    rail: [['Ruabon', '루아본역', '5번 버스로 랭골렌|bus 5 to Llangollen']],\n",
         itinerary={'days': [['수로교와 마을|Aqueduct & town', 1, 4, 2], ['디 계곡|Dee Valley', 3, 6, 5]], 'trips': [['처크 성|Chirk Castle', 7]]},
         season='보존 철도가 매일 다니고 운하 산책이 좋은 5~9월이 알맞습니다.|May–September, when the heritage railway runs daily and the towpaths are at their best.',
         stay=[('랭골렌 마을', 'Llangollen town', 'Llangollen', '처음이라면|First visit', '디강 다리 주변에 식당과 숙소가 모여 있고 보존 철도역이 가깝습니다.|Restaurants and rooms cluster around the Dee bridge, close to the heritage railway station.')],
         routes=[('routes-west.ts', LAST, "  r('chester', 'llangollen', 'mixed', 50, { n: '루아본역까지 기차 후 5번 버스|train to Ruabon, then bus 5' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='루아본역에서 5번 버스로 오고, 같은 버스가 수로교 근처 트레버에 섭니다. 마을은 걸어서 다닙니다.', en='Bus 5 runs from Ruabon station, also stopping at Trevor near the aqueduct; walk around town.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
