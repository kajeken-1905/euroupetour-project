#!/usr/bin/env python3
"""Denmark new towns (2026-11-21, user picked all four): Skagen, Ribe, Billund, Bornholm.
Facts from English Wikipedia (Skagen northernmost town, main fishing port; Grenen spit; Råbjerg Mile, largest moving dune
in northern Europe, ~2 km², 40 m, up to 18 m a year; Sand-Covered Church, 14th c., abandoned 1795; Skagens Museum of the
Skagen Painters. Ribe oldest town in Denmark; Ribe Cathedral, founded by Ansgar, best-preserved Romanesque building;
Wadden Sea UNESCO. Billund home of Lego; Legoland opened 7 June 1968, Miniland 20 million bricks; Lego House 12,000 m²
with 25 million bricks; Givskud Zoo 1969. Bornholm 'sunshine island' of granite; Hammershus largest medieval fortress in
northern Europe; Østerlars largest of four round churches; Gudhjem; Ertholmene/Christiansø 18 km off Gudhjem;
airport 5 km from Rønne). Run once."""
import json
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

FREE = '무료입니다.|Free.'
CPH = "CPH()"
COMMON = dict(hubs_file='hubs-central.ts', hubs_before='  // —— se ——\n', itin_file='itinerary-north.ts',
              itin_before='  budapest: {', visit_file='visit-nordic.ts',
              visit_after=r"^  '(?:roskilde|skagen|ribe|billund|bornholm)-h\d+': v\(.*\),\n",
              stay_before='  debrecen: [', transit_before='  // —— se ——\n', places=None, daytrips=[],
              apps="      ta('rejsebillet', { ko: '전국 버스·기차·메트로 표', en: 'Bus, train and metro tickets nationwide' }),\n      ta('dsb'),\n")
LAST = r"^  r\('aarhus', 'odense', 'train', 100\),\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


def R(a, b, mode, m, n=None):
    extra = f", {{ n: '{n}' }}" if n else ''
    return ('routes-central.ts', LAST, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


CITIES = [
    dict(COMMON, country='dk', id='skagen', after='aalborg', ko='스카겐', en='Skagen', native='Skagen', lat=57.7209, lng=10.5839,
         blurb=['유틀란트반도 끝, 덴마크 최북단 마을로 덴마크 최대의 어항입니다. 북쪽 곶 그레넨에선 스카게라크와 카테가트 두 바다가 부딪치고, 19세기 말 노란 집과 빛에 반한 화가들이 모여 ‘스카겐 화파’를 이뤘습니다. 남쪽엔 해마다 움직이는 거대한 모래언덕과 모래에 묻힌 교회가 있습니다.',
                'Denmark’s northernmost town and its main fishing port, at the very tip of Jutland. At the Grenen spit two seas, the Skagerrak and the Kattegat, collide, and the yellow houses and light drew the late-19th-century Skagen Painters. To the south lie a vast migrating dune and a church half buried by sand.'],
         highlights=[
             H('그레넨', 'Grenen', '스카겐 북동쪽 끝으로 길게 뻗은 모래톱으로, 덴마크 최북단에서 두 바다의 물결이 만나는 모습을 봅니다.', 'The long sandbar at the tip of the Skagen headland, Denmark’s northernmost point, where the waves of two seas meet.', 'Grenen Skagen', 60, 90, b='no', n='물살이 세서 두 바다가 만나는 곳에선 수영이 금지돼 있습니다.|Currents are strong; swimming where the seas meet is forbidden.'),
             H('스카겐 미술관', 'Skagens Museum', '19세기 말~20세기 초 이곳에 모여 산 스카겐 화가들(크뢰위에르, 안케르 부부 등)의 작품을 모은 미술관입니다.', 'An art museum of the Skagen Painters who lived here in the late 19th and early 20th centuries, among them P. S. Krøyer and Anna and Michael Ancher.', 'Skagens Museum', 60, 90),
             H('모래에 묻힌 교회', 'Sand-Covered Church', '시내 남서쪽 2km의 14세기 말 교회로, 18세기 모래언덕에 묻혀 1795년 버려졌고 지금은 탑만 모래 위에 남아 있습니다.', 'A late-14th-century church 2 km south-west of town, buried by drifting dunes in the 18th century and abandoned in 1795; only its tower now rises from the sand.', 'Den Tilsandede Kirke', 30, 45, b='no', n=FREE),
             H('로비에르 밀레 모래언덕', 'Råbjerg Mile', '스카겐과 프레데릭스하운 사이의 북유럽 최대 이동 모래언덕으로, 넓이 약 2km², 높이 40m이며 바람에 밀려 해마다 최대 18m씩 움직입니다.', 'Northern Europe’s largest migrating dune, between Skagen and Frederikshavn: about 2 km² and 40 m high, pushed up to 18 m a year by the wind.', 'Råbjerg Mile', 60, 90, b='no', n=FREE),
         ],
         hubs="    air: [['Aalborg (AAL)', '올보르 공항 (AAL)']],\n    rail: [['Skagen', '스카겐역', '프레데릭스하운 환승|change at Frederikshavn']],\n",
         itinerary={'days': [['', 1, 2, 3]], 'trips': [['로비에르 밀레|Råbjerg Mile', 4]]},
         season='해가 긴 5~9월이 좋고, 6월 하지 무렵 해변의 모닥불 축제가 이름났습니다.|Best May–September with long days; the midsummer bonfires on the beach are famous.',
         stay=[('스카겐 시내', 'Skagen town', 'Skagen', '항구·해변|Harbour, beaches', '항구와 노란 집들 사이에 숙소가 있고 그레넨까지 버스·자전거로 갑니다.|Places to stay between the harbour and the yellow houses, with buses or bikes to Grenen.')],
         routes=[R('aalborg', 'skagen', 'train', 120, '프레데릭스하운 환승|change at Frederikshavn')],
         transit=dict(modes=['bus', 'train', 'walk'], ko='시내는 걸어서 다니고, 그레넨까지 버스나 자전거로 갑니다. 올보르에서 프레데릭스하운을 거쳐 기차로 옵니다.', en='Walk around town and take a bus or bike to Grenen; trains come from Aalborg via Frederikshavn.')),
    dict(COMMON, country='dk', id='ribe', after='odense', ko='리베', en='Ribe', native='Ribe', lat=55.3283, lng=8.7622,
         blurb=['유틀란트 남서쪽의 덴마크에서 가장 오래된 도시입니다. 바이킹 시대 선교사 안스가르가 세운 덴마크 첫 교회 자리에 로마네스크 양식이 가장 잘 남은 대성당이 서 있고, 돌길과 목조 가옥이 이어지는 옛 시가가 그대로입니다. 서쪽엔 유네스코 세계유산 바덴해 갯벌이 펼쳐집니다.',
                'Denmark’s oldest town, in south-west Jutland. Its cathedral, the best-preserved Romanesque building in the country, stands where the missionary Ansgar founded Denmark’s first church in the Viking Age, amid an intact old town of cobbled lanes and half-timbered houses. To the west stretch the UNESCO-listed tidal flats of the Wadden Sea.'],
         highlights=[
             H('리베 대성당', 'Ribe Cathedral', '바이킹 시대 선교사 안스가르가 덴마크 첫 교회를 세운 자리의 대성당으로, 덴마크에서 가장 잘 보존된 로마네스크 건물입니다. 탑에 오르면 옛 시가와 습지가 내려다보입니다.', 'The cathedral on the site where the missionary Ansgar founded Denmark’s first church in the Viking Age, the best-preserved Romanesque building in the country; climb the tower for views over the old town and marshes.', 'Ribe Domkirke', 45, 60),
             H('리베 옛 시가', 'Ribe old town', '대성당 둘레로 돌길과 기울어진 목조 가옥이 이어지는 덴마크에서 가장 오래된 시가지입니다.', 'Cobbled lanes and leaning half-timbered houses round the cathedral, the oldest townscape in Denmark.', 'Ribe gamle by', 45, 60, b='no', n=FREE),
             H('바덴해 국립공원', 'Wadden Sea National Park', '덴마크·독일·네덜란드에 걸친 유네스코 세계유산 갯벌로, 썰물 때 넓은 갯벌이 드러나고 봄가을엔 철새 떼가 하늘을 덮습니다.', 'The UNESCO-listed tidal flats shared by Denmark, Germany and the Netherlands; vast mudflats appear at low tide, and huge flocks of migrating birds fill the sky in spring and autumn.', 'Nationalpark Vadehavet', 120, 240, b='no', n=FREE),
         ],
         hubs=f"    air: [['Billund (BLL)', '빌룬 공항 (BLL)']],\n    rail: [['Ribe', '리베역']],\n",
         itinerary={'days': [['', 1, 2]], 'trips': [['바덴해|Wadden Sea', 3]]},
         season='봄·가을 철새철과 여름이 좋습니다.|Spring and autumn bird migrations and the summer are best.',
         stay=[('리베 옛 시가', 'Ribe old town', 'Ribe', '옛 시가 분위기|Historic atmosphere', '대성당 둘레 옛 집을 고친 숙소가 있어 저녁 산책하기 좋습니다.|Hotels in old houses round the cathedral, lovely for an evening stroll.')],
         routes=[R('copenhagen', 'ribe', 'train', 180, '환승 1회|one change')],
         transit=dict(modes=['train', 'walk'], ko='옛 시가는 작아서 걸어서 다닙니다. 기차역이 시내 바로 옆입니다.', en='The old town is small enough to walk; the station is right by the centre.')),
    dict(COMMON, country='dk', id='billund', after='ribe', ko='빌룬', en='Billund', native='Billund', lat=55.7308, lng=9.1153,
         blurb=['레고가 태어난 유틀란트 중부의 작은 도시로, 레고 본사와 1968년 문을 연 첫 레고랜드, 2,500만 개 브릭으로 채운 레고 하우스가 있습니다. 덴마크 둘째 공항이 있어 가족 여행의 출발점이 되고, 가까이엔 사파리 동물원도 있습니다.',
                'The small central-Jutland town where Lego was born, home to the Lego headquarters, the original Legoland, opened in 1968, and Lego House, filled with 25 million bricks. Denmark’s second airport makes it an easy family base, with a safari zoo nearby.'],
         highlights=[
             H('레고랜드 빌룬', 'Legoland Billund', '1968년 6월 7일 문을 연 세계 첫 레고랜드로, 2,000만 개 넘는 브릭으로 만든 미니랜드가 유명합니다. 코펜하겐 밖에서 덴마크 최대의 관광지입니다.', 'The original Legoland, opened on 7 June 1968 and famous for its Miniland of more than 20 million bricks; the biggest attraction in Denmark outside Copenhagen.', 'Legoland Billund', 300, 480, n='대략 4~10월에 열고 겨울엔 닫습니다. 날짜를 확인하세요.|Open roughly April–October and closed in winter; check the dates.'),
             H('레고 하우스', 'Lego House', '2,500만 개 브릭으로 채운 12,000m² 건물로, 직접 조립하고 로봇을 프로그래밍하는 체험 구역과 레고 역사 박물관이 있습니다.', 'A 12,000 m² building filled with 25 million bricks, with hands-on building and robot-programming zones and a museum of Lego history.', 'Lego House Billund', 180, 240),
             H('기브스쿠 동물원', 'Givskud Zoo', '빌룬 북동쪽의 사파리 동물원으로, 1969년 사자 공원으로 시작해 지금은 70종 700마리가 넘는 동물이 삽니다. 차로 사파리를 돕니다.', 'A safari park north-east of Billund that began as a lion park in 1969 and now has more than 700 animals of over 70 species; drive through the safari.', 'Givskud Zoo', 180, 240),
         ],
         hubs="    air: [['Billund (BLL)', '빌룬 공항 (BLL)']],\n    bus: [['Billund Lufthavn', '빌룬 공항 버스 정류장', '바일레·오르후스행|to Vejle and Aarhus']],\n",
         itinerary={'days': [['', 1]], 'trips': [['레고 하우스|Lego House', 2], ['기브스쿠 동물원|Givskud Zoo', 3]]},
         season='레고랜드가 여는 4~10월이 좋고, 여름 방학엔 붐빕니다.|April–October, when Legoland is open; busy in the summer holidays.',
         stay=[('레고랜드 주변', 'By Legoland', 'Billund', '가족 여행|Family trips', '레고랜드와 공항 가까이에 테마 호텔과 휴양 시설이 모여 있습니다.|Theme hotels and holiday resorts cluster near Legoland and the airport.')],
         routes=[R('aarhus', 'billund', 'bus', 90)],
         transit=dict(modes=['bus', 'walk'], ko='철도가 없어 바일레·오르후스에서 버스로 옵니다. 공항과 레고랜드가 걸어서 닿는 거리입니다.', en='There is no railway; buses come from Vejle and Aarhus. The airport and Legoland are within walking distance.')),
    dict(COMMON, country='dk', id='bornholm', after='roskilde', ko='보른홀름섬', en='Bornholm', native='Bornholm', lat=55.1000, lng=14.7000,
         blurb=['발트해에 떠 있는 덴마크의 섬으로, 스웨덴 남쪽·폴란드 북쪽에 있습니다. 화강암 바위가 많아 ‘바위섬’, 날씨가 좋아 ‘햇빛섬’이라 불리고, 북쪽 끝엔 북유럽 최대의 중세 요새 터 함메르후스, 섬 곳곳엔 덴마크의 둥근 교회들이 있습니다. 코펜하겐에서 비행기로, 또는 스웨덴 이스타를 거쳐 배로 갑니다.',
                'A Danish island in the Baltic, south of Sweden and north of Poland. Its granite earns it the name ‘rock island’ and its weather ‘sunshine island’; Hammershus, the largest medieval fortress in northern Europe, crowns its northern tip, and Denmark’s round churches are scattered across it. Fly from Copenhagen, or go via Ystad in Sweden by ferry.'],
         highlights=[
             H('함메르후스 성터', 'Hammershus', '섬 북쪽 끝 함메렌의 중세 요새 터로, 북유럽에서 가장 큰 중세 요새입니다. 1750년 무렵 일부 헐렸고 1900년 무렵 일부 복원됐습니다.', 'The ruins of a medieval fortress at Hammeren on the island’s northern tip, the largest in northern Europe; partly demolished around 1750 and partly restored around 1900.', 'Hammershus', 60, 90, b='no', n=FREE),
             H('외스테를라르스 둥근 교회', 'Østerlars Church', '구드옘 남쪽 5km의 둥근 교회로, 섬에 있는 네 둥근 교회 가운데 가장 크고 아마 가장 오래됐습니다.', 'A round church 5 km south of Gudhjem, the largest and perhaps the oldest of the island’s four round churches.', 'Østerlars Kirke', 20, 30),
             H('구드옘', 'Gudhjem', '섬 북쪽 해안의 작은 어촌으로, 가파른 골목과 바다 전망, 훈제 생선집으로 사랑받습니다.', 'A small fishing town on the north coast, loved for its steep lanes, sea views and smokehouses.', 'Gudhjem', 60, 90, b='no', n=FREE),
             H('크리스티안쇠', 'Christiansø', '구드옘 북동쪽 18km의 작은 섬 무리(에르트홀메네)로, 덴마크 최동단이며 옛 해군 요새 섬에 약 90명이 삽니다. 구드옘에서 배로 갑니다.', 'A tiny archipelago (Ertholmene) 18 km north-east of Gudhjem, Denmark’s easternmost point, where about 90 people live on the old naval fortress islands; boats leave from Gudhjem.', 'Christiansø', 240, 360, b='no', n='배가 날씨에 따라 결항될 수 있습니다.|Boats may be cancelled in bad weather.'),
         ],
         hubs="    air: [['Bornholm (RNN)', '보른홀름 공항 (RNN)', '뢴네 남동쪽 5km|5 km south-east of Rønne']],\n    port: [['Rønne', '뢴네 항구', '이스타(스웨덴)·쾨게행 배|ferries to Ystad (Sweden) and Køge']],\n",
         itinerary={'days': [['', 1, 3, 2]], 'trips': [['크리스티안쇠|Christiansø', 4]]},
         season='해가 길고 따뜻한 6~9월이 좋습니다.|June–September, when it is warm and the days are long.',
         stay=[('뢴네·구드옘', 'Rønne or Gudhjem', 'Rønne', '섬 여행|Island stay', '항구 도시 뢴네가 교통이 편하고, 북쪽 해안 구드옘은 분위기가 좋습니다.|Rønne, the port town, is handiest; Gudhjem on the north coast has more charm.')],
         routes=[R('copenhagen', 'bornholm', 'flight', 35),
                 R('copenhagen', 'bornholm', 'ferry', 180, '이스타(스웨덴)까지 기차·버스 뒤 고속선|train or bus to Ystad (Sweden), then fast ferry')],
         transit=dict(modes=['bus', 'walk'], ko='섬 버스가 뢴네와 마을들을 잇고, 자전거 길이 잘 돼 있습니다.', en='Island buses link Rønne with the villages, and there are good cycle paths.')),
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
    s, n = re.subn(r"cityIds: \[[^\]]*'copenhagen'[^\]]*\]", "cityIds: ['copenhagen', 'roskilde', 'bornholm', 'odense', 'ribe', 'billund', 'aarhus', 'aalborg', 'skagen']", s)
    assert n == 1
    wr('countries.ts', s)
