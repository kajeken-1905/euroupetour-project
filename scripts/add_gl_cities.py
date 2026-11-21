#!/usr/bin/env python3
"""Greenland step 2 (2026-11-21, user picked all three): Sisimiut, Qaqortoq, Tasiilaq.
Facts from English Wikipedia (Sisimiut: second city, 320 km north of Nuuk, 4,500 years of settlement, Bethel Church 1775
the oldest surviving church in Greenland and Gammelhuset 1725, Sisimiut Museum with Saqqaq finds and a c. 1650
altarpiece, Arctic Circle Trail 165 km to Kangerlussuaq with no permits, northernmost year-round ice-free port.
Qaqortoq: largest town of the south, Stone & Man 1993–94 by Aka Høegh and 18 Nordic artists with 40+ sculptures,
Mindebrønden 1932 the oldest fountain, Qaqortoq Museum in an 1804 building, airport opened 2026; Hvalsey Norse church
ruins, UNESCO 2017 (Kujataa), last record a wedding in 1408. Tasiilaq: largest town on the east coast, church of 1986
decorated by Aka Høegh, helicopter 24 km to Kulusuk Airport with flights to Nuuk and Iceland; Kulusuk church 1908 built
from the timbers of a stranded ship; Sermilik fjord fed by the Helheim Glacier). Run once."""
import json
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

FREE = '무료입니다.|Free.'
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='  // —— ru ——\n', itin_file='itinerary-north.ts',
              itin_before='  moscow: {', visit_file='visit-nordic.ts',
              visit_after=r"^  '(?:kangerlussuaq|sisimiut|qaqortoq|tasiilaq)-h\d+': v\(.*\),\n",
              stay_before='  moscow: [', apps="      ta('air-greenland', { ko: '국내선', en: 'Domestic flights' }),\n",
              transit_before='  // —— ru (airport and operator sites) ——\n', places=None, daytrips=[])
LAST = r"^  r\('kangerlussuaq', 'ilulissat', 'flight', 45\),\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


def R(a, b, mode, m, n=None):
    extra = f", {{ n: '{n}' }}" if n else ''
    return ('routes-east.ts', LAST, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


CITIES = [
    dict(COMMON, country='gl', id='sisimiut', after='ilulissat', ko='시시미우트', en='Sisimiut', native='Sisimiut', lat=66.9389, lng=-53.6722,
         blurb=['누크에서 북쪽으로 약 320km, 북극권 바로 위의 그린란드 둘째 도시입니다. 4,500년 전부터 사람이 살았고, 옛 식민지 구역엔 그린란드에서 가장 오래된 교회(1775년)와 1725년 집이 남아 있습니다. 내륙의 캉에를루수아크까지 165km를 걷는 아크틱 서클 트레일의 끝점이며, 겨울엔 개썰매와 스키의 거점입니다.',
                'Greenland’s second city, about 320 km north of Nuuk just above the Arctic Circle. People have lived here for 4,500 years, and the old colonial quarter keeps the oldest surviving church in Greenland (1775) and a house from 1725. It is the end of the 165 km Arctic Circle Trail from Kangerlussuaq, and in winter a base for dog sledding and skiing.'],
         highlights=[
             H('옛 식민지 구역과 베델 교회', 'Old quarter & Bethel Church', '1775년 지은 ‘푸른 교회’ 베델 교회는 그린란드에 남은 가장 오래된 교회이고, 옆의 감멜후세트는 1725년 집입니다. 옛 정착지에서 옮겨 온 건물들입니다.', 'The ‘Blue Church’, Bethel Church of 1775, is the oldest surviving church in Greenland, and Gammelhuset next to it dates from 1725; both were moved here from the earlier settlement.', 'Bethel Church Sisimiut', 30, 45, b='no', n=FREE),
             H('시시미우트 박물관', 'Sisimiut Museum', '항구 옆 옛 건물의 박물관으로, 가까운 4,000년 전 사카크 문화 유적 발굴품과 1650년 무렵의 옛 교회 제단화, 무역·해운 역사를 보여 줍니다.', 'A museum in a historic building by the harbour, showing finds from 4,000-year-old Saqqaq sites nearby, an altarpiece from around 1650 from the old church, and the history of trade and shipping.', 'Sisimiut Museum', 45, 60),
             H('아크틱 서클 트레일', 'Arctic Circle Trail', '캉에를루수아크에서 시시미우트까지 165km를 걷는 그린란드에서 가장 유명한 장거리 산길로, 허가 없이 무료로 걸을 수 있습니다. 보통 1~2주가 걸리고 산장과 캠핑으로 지냅니다.', 'Greenland’s best-known long-distance trail, 165 km from Kangerlussuaq to Sisimiut, free and with no permit needed; it usually takes one to two weeks, staying in huts or camping.', 'Arctic Circle Trail Sisimiut', 60, 120, b='no', n='여름(대략 6~9월)에 걷습니다. 표지가 드물어 지도와 장비를 갖춰야 합니다.|Walked in summer (roughly June–September); markings are sparse, so carry maps and full kit.'),
         ],
         hubs="    air: [['Sisimiut (JHS)', '시시미우트 공항 (JHS)', '누크 경유 유럽행|to Europe via Nuuk']],\n    port: [['Sisimiut', '시시미우트 항구', '연중 얼지 않는 가장 북쪽 항구|northernmost year-round ice-free port']],\n",
         itinerary={'days': [['', 1, 2]], 'trips': [['아크틱 서클 트레일|Arctic Circle Trail', 3]]},
         season='산행은 6~9월, 개썰매와 스키는 2~4월이 좋습니다.|June–September for hiking, February–April for dog sledding and skiing.',
         stay=[('시시미우트 시내', 'Sisimiut town', 'Sisimiut', '도시 거점|Town base', '항구와 옛 식민지 구역 가까이에 호텔과 게스트하우스가 있습니다.|Hotels and guesthouses near the harbour and the old quarter.')],
         routes=[R('nuuk', 'sisimiut', 'flight', 50), R('kangerlussuaq', 'sisimiut', 'flight', 30)],
         transit=dict(modes=['bus', 'walk'], ko='시내는 걸어서 다닙니다. 다른 도시와는 도로가 없어 비행기나 배로 갑니다.', en='Walk around town; there are no roads to other towns, so fly or take a boat.')),
    dict(COMMON, country='gl', id='qaqortoq', after='kangerlussuaq', ko='카코르토크', en='Qaqortoq', native='Qaqortoq', lat=60.7222, lng=-46.0403,
         blurb=['남부 그린란드에서 가장 큰 마을로, 알록달록한 집들이 항구를 둘러싼 언덕에 늘어서 있습니다. 마을 곳곳의 바위에 새긴 40점 넘는 조각 ‘돌과 사람’, 1932년 그린란드 최초의 분수가 있고, 배로 가까운 흐발세이 노르드인 교회 유적(유네스코)에 다녀옵니다. 2026년 공항이 열려 비행기로 바로 옵니다.',
                'The largest town in southern Greenland, its brightly painted houses climbing the hills round the harbour. More than 40 rock carvings of the ‘Stone & Man’ project are scattered through town, the 1932 fountain was Greenland’s first, and boats run to the UNESCO-listed Norse church ruins at Hvalsey. Its airport opened in 2026.'],
         highlights=[
             H('돌과 사람', 'Stone & Man', '1993~1994년 카코르토크 화가 아카 회에그와 북유럽 예술가 18명이 마을의 바위와 돌에 새긴 조각 프로젝트로, 지금 40점이 넘는 작품이 마을 곳곳에 있습니다.', 'A 1993–94 project in which the local artist Aka Høegh and 18 other Nordic artists carved the town’s rocks and boulders; more than 40 works are now scattered through Qaqortoq.', 'Stone and Man Qaqortoq', 60, 90, b='no', n=FREE),
             H('민데브뢴덴 분수', 'Mindebrønden fountain', '1932년 완성된 그린란드에서 가장 오래된 분수로, 고래들이 숨구멍으로 물을 뿜는 모양입니다. 마을 중심 광장에 있습니다.', 'Greenland’s oldest fountain, finished in 1932, with whales spouting water from their blowholes; it stands on the central square.', 'Mindebrønden Qaqortoq', 10, 15, b='no', n=FREE),
             H('카코르토크 박물관', 'Qaqortoq Museum', '분수 광장 옆 1804년 건물(옛 대장간)의 박물관으로, 도싯·툴레 문화와 노르드인 유물, 옛 이누이트 배와 사냥 도구, 민족 의상을 보여 줍니다.', 'A museum by the fountain square in an 1804 building, once the blacksmith’s shop, with Dorset, Thule and Norse finds, old Inuit boats, hunting gear and national dress.', 'Qaqortoq Museum', 45, 60),
             H('흐발세이 교회 유적', 'Hvalsey Church ruins', '카코르토크 뒤편 피오르의 노르드인 농장 터로, 그린란드에서 가장 크고 잘 남은 노르드 유적입니다. 1408년 이 교회의 결혼식이 노르드인의 마지막 기록이며, 2017년 유네스코 세계유산(쿠야타)이 됐습니다.', 'A Norse farmstead in the fjord behind Qaqortoq, the largest and best-preserved Norse ruins in Greenland; a wedding here in 1408 is the last written record of the Norse, and it became part of the Kujataa UNESCO site in 2017.', 'Hvalsey Church ruins', 180, 300, b='no', n='보트 투어로 갑니다.|Reached on a boat tour.'),
         ],
         hubs="    air: [['Qaqortoq (JJU)', '카코르토크 공항 (JJU)', '2026년 개항 · 국내선·아이슬란드|opened 2026 · domestic and Iceland']],\n    port: [['Qaqortoq', '카코르토크 항구', '아크틱 우미아크 연안 여객선|Arctic Umiaq coastal ferry']],\n",
         itinerary={'days': [['', 2, 3, 1]], 'trips': [['흐발세이|Hvalsey', 4]]},
         season='보트 투어가 다니는 6~9월이 좋습니다.|June–September, when the boat tours run.',
         stay=[('카코르토크 시내', 'Qaqortoq town', 'Qaqortoq', '남부 거점|Base for the south', '항구 둘레에 호텔과 호스텔이 있고 보트 투어가 여기서 떠납니다.|A hotel and hostel round the harbour, where boat tours leave.')],
         routes=[R('nuuk', 'qaqortoq', 'flight', 75)],
         transit=dict(modes=['walk'], ko='마을은 걸어서 다닙니다. 다른 마을과는 도로가 없어 비행기·헬리콥터·배로 갑니다.', en='Walk around town; there are no roads to other places, so fly, take a helicopter or a boat.')),
    dict(COMMON, country='gl', id='tasiilaq', after='qaqortoq', ko='타실라크', en='Tasiilaq', native='Tasiilaq', lat=65.6136, lng=-37.6311,
         blurb=['그린란드 동해안에서 가장 큰 마을로, 빙산이 떠 있는 바다와 험한 산 사이 암마살리크섬에 있습니다. 아카 회에그가 꾸민 1986년 교회가 있고, 서쪽으로 빙하가 쏟아지는 거대한 세르밀리크 피오르가 펼쳐집니다. 아이슬란드에서 쿨루수크 공항으로 날아와 헬리콥터로 들어옵니다.',
                'The largest town on Greenland’s east coast, on Ammassalik Island between an iceberg-strewn sea and rugged mountains. It has a 1986 church decorated by Aka Høegh, and to the west the vast Sermilik fjord fills with glacier ice. Visitors fly from Iceland to Kulusuk and come in by helicopter.'],
         highlights=[
             H('타실라크 교회', 'Tasiilaq Church', '1986년 지은 마을 교회로, 그린란드 화가 아카 회에그가 실내를 꾸몄습니다.', 'The town church of 1986, its interior decorated by the Greenlandic artist Aka Høegh.', 'Tasiilaq Church', 15, 20, b='no', n=FREE),
             H('세르밀리크 피오르', 'Sermilik Fjord', '타실라크 서쪽의 남동 그린란드 최대급 피오르로, 헬하임 빙하 등에서 떨어져 나온 빙산이 가득합니다.', 'One of the largest fjords in south-east Greenland, west of Tasiilaq, crowded with ice from the Helheim and other glaciers.', 'Sermilik Fjord', 240, 480, b='no', n='보트 투어로 갑니다.|Reached on a boat tour.'),
             H('쿨루수크 마을', 'Kulusuk', '공항이 있는 이웃 섬의 작은 마을로, 1908년 해안에 좌초한 덴마크 배의 목재로 지은 교회가 있고 오르간 위에 그 배의 모형이 걸려 있습니다.', 'The small village on the neighbouring island with the airport; its church was built in 1908 from the timbers of a Danish ship wrecked on the coast, and a model of the ship hangs above the organ.', 'Kulusuk church', 60, 90, b='no', n=FREE),
         ],
         hubs="    air: [['Kulusuk (KUS)', '쿨루수크 공항 (KUS)', '헬리콥터로 24km · 누크·아이슬란드행|24 km by helicopter · flights to Nuuk and Iceland']],\n",
         itinerary={'days': [['', 1]], 'trips': [['세르밀리크 피오르|Sermilik Fjord', 2], ['쿨루수크|Kulusuk', 3]]},
         season='배와 산행은 7~9월, 개썰매는 3~4월이 좋습니다.|July–September for boats and hiking, March–April for dog sledding.',
         stay=[('타실라크 마을', 'Tasiilaq town', 'Tasiilaq', '동부 거점|Base for the east', '호텔과 게스트하우스가 몇 곳 있어 미리 예약해야 합니다.|A few hotels and guesthouses; book ahead.')],
         routes=[R('nuuk', 'tasiilaq', 'flight', 120, '쿨루수크 공항 뒤 헬리콥터|helicopter on from Kulusuk Airport')],
         transit=dict(modes=['walk'], ko='쿨루수크 공항에서 헬리콥터(약 24km)로 들어옵니다. 마을은 걸어서 다니고, 주변은 헬리콥터나 배로 갑니다.', en='Fly into Kulusuk and take the helicopter (about 24 km); walk around town and use helicopters or boats beyond.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    s = rd('countries.ts')
    s, n = re.subn(r"cityIds: \[[^\]]*'nuuk'[^\]]*\]", "cityIds: ['nuuk', 'sisimiut', 'ilulissat', 'kangerlussuaq', 'qaqortoq', 'tasiilaq']", s)
    assert n == 1
    wr('countries.ts', s)
