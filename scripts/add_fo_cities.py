#!/usr/bin/env python3
"""Faroe Islands step 2 (2026-11-21, user picked all three): Klaksvík, Sandoy, Suðuroy.
Facts from English Wikipedia (Klaksvík: second town, on Borðoy; Christianskirkjan 1963 by Peter Koch in basalt and
timber; Kalsoy: ferry landing at Syðradalur from Klaksvík, four unlit tunnels, lighthouse at Kallur; Viðareiði the
northernmost settlement. Sandoy: only island with dunes, Sandur and its 11th-century silver hoard, Sandoyartunnilin
10.8 km opened 21 Dec 2023; Skúvoy, one settlement, named after the great skuas. Suðuroy: MS Smyril 2–3 times daily
Tórshavn–Krambatangi in 2 hours, buses 700/701; Beinisvørð 469 m; Sumba southernmost village, church 1887; Fámjin
church with the original Faroese flag Merkið of 1919; Tvøroyri founded 1836). Run once."""
import json
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

FREE = '무료입니다.|Free.'
WEATHER = '날씨가 급변하니 출발 전에 예보와 도로 상황을 확인하세요.|Conditions change fast—check the forecast and roads before setting out.'
FAE = "    air: [['Vágar (FAE)', '바가르 공항 (FAE)', '바가르섬|on Vágar']],\n"
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='  nuuk: {\n', itin_file='itinerary-north.ts',
              itin_before='  nuuk: {', visit_file='visit-nordic.ts',
              visit_after=r"^  '(?:eysturoy|klaksvik|sandoy|suduroy)-h\d+': v\(.*\),\n",
              stay_before='  nuuk: [', apps='', transit_before='  // —— gl (Visit Greenland) ——\n', places=None, daytrips=[])
LAST = r"^  r\('vagar', 'copenhagen', 'flight', 130\),\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


def R(a, b, mode, m, n=None):
    extra = f", {{ n: '{n}' }}" if n else ''
    return ('routes-east.ts', LAST, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


CITIES = [
    dict(COMMON, country='fo', id='klaksvik', after='eysturoy', ko='클락스비크', en='Klaksvík', native='Klaksvík', lat=62.2239, lng=-6.5786,
         blurb=['페로 제도 두 번째 도시로, 북쪽 섬들(노르도야르) 가운데 보르도이섬에 있는 어업 항구입니다. 현무암과 나무로 지은 1963년 크리스티안 교회가 있고, 여기서 배를 타고 칼소이섬 북쪽 끝 칼루르 등대로, 다리를 건너 페로 최북단 마을 비더레이디로 갑니다. 토르스하운과는 해저 터널로 이어집니다.',
                'The second town of the Faroe Islands, a fishing port on Borðoy in the northern isles (Norðoyar). It has Christianskirkjan, a 1963 church of basalt and timber, and from here boats cross to Kalsoy for the Kallur lighthouse at its northern tip while roads run over to Viðareiði, the northernmost village. Undersea tunnels link it to Tórshavn.'],
         highlights=[
             H('크리스티안 교회', 'Christianskirkjan', '1963년 봉헌된 현대 교회로, 덴마크 건축가 페테르 코크가 현무암과 나무 같은 페로 재료로 지어 페로 현대 건축의 출발점으로 꼽힙니다.', 'A modern church consecrated in 1963, built by the Danish architect Peter Koch in native basalt and timber and seen as a starting point for modern Faroese architecture.', 'Christianskirkjan Klaksvík', 15, 20, b='no', n=FREE),
             H('칼루르 등대', 'Kallur Lighthouse', '칼소이섬 북쪽 끝 칼루르의 등대로, 깎아지른 절벽 능선 위에 서 있습니다. 클락스비크에서 배로 쉬드라달루르에 내린 뒤, 조명 없는 터널 네 개를 지나는 길로 섬 북쪽 트뢸라네스까지 가서 걸어 오릅니다.', 'The lighthouse at Kallur, the northern tip of Kalsoy, on a knife-edge cliff ridge. Take the boat from Klaksvík to Syðradalur, follow the road through four unlit tunnels to Trøllanes, then walk up.', 'Kallur Lighthouse Kalsoy', 180, 300, b='no', n=WEATHER),
             H('비더레이디', 'Viðareiði', '비도이섬에 있는 페로 제도 최북단 마을로, 높은 산과 바다 절벽에 둘러싸여 있습니다.', 'The northernmost village in the Faroe Islands, on the island of Viðoy, ringed by high mountains and sea cliffs.', 'Viðareiði', 45, 60, b='no', n=FREE),
         ],
         hubs=FAE + "    bus: [['Klaksvík', '클락스비크 버스 정류장', '토르스하운행 400번|route 400 to Tórshavn']],\n",
         itinerary={'days': [['', 1, 3]], 'trips': [['칼소이섬|Kalsoy', 2]]},
         season='칼소이섬 산행은 해가 긴 5~9월이 알맞습니다.|May–September, with long days, suits the Kalsoy walk.',
         stay=[('클락스비크 항구', 'Klaksvík harbour', 'Klaksvík', '북쪽 섬 거점|Base for the northern isles', '숙소와 식당이 항구 둘레에 있고, 칼소이섬 배가 여기서 떠납니다.|Hotels and restaurants around the harbour, where the Kalsoy boat leaves.')],
         routes=[R('torshavn', 'klaksvik', 'bus', 60, '400번 버스|bus 400')],
         transit=dict(modes=['bus', 'ferry', 'walk'], ko='토르스하운에서 400번 버스가 다닙니다. 칼소이섬은 배, 비더레이디는 버스나 차로 갑니다.', en='Route 400 runs from Tórshavn; take the boat to Kalsoy and a bus or car to Viðareiði.')),
    dict(COMMON, country='fo', id='sandoy', after='torshavn', ko='산도이섬', en='Sandoy', native='Sandoy', lat=61.8425, lng=-6.8078,
         blurb=['토르스하운 남쪽의 섬으로, 이름처럼 페로에서 유일하게 모래 언덕이 있는 섬입니다. 기름진 들판과 호수 사이에 11세기 은화가 발견된 산두르 마을을 비롯한 조용한 마을이 흩어져 있습니다. 2023년 12월 해저 터널이 열려 토르스하운에서 차로 바로 갑니다.',
                'An island south of Tórshavn which, true to its name (‘sand island’), is the only one in the Faroes with dunes. Quiet villages such as Sandur, where an 11th-century silver hoard was found, lie among fertile fields and lakes. Since December 2023 an undersea tunnel has linked it directly to Tórshavn by road.'],
         highlights=[
             H('산두르 마을과 해변', 'Sandur', '섬에서 가장 큰 마을로, 두 호수 사이 반도에 자리하고 남쪽엔 섬 이름의 유래가 된 큰 모래 해변이 있습니다. 11세기 말 은화 보물이 발견된 곳입니다.', 'The island’s largest village, on a peninsula between two lakes, with the big sandy beach that gave Sandoy its name; an 11th-century silver hoard was found here.', 'Sandur Sandoy', 45, 90, b='no', n=FREE),
             H('산도이 해저 터널', 'Sandoy Tunnel', '스트레이모이와 산도이를 잇는 길이 10.8km의 해저 터널로, 2023년 12월 21일 개통해 배를 대신하게 됐습니다.', 'A 10.8 km undersea road tunnel between Streymoy and Sandoy, opened on 21 December 2023 to replace the ferry.', 'Sandoyartunnilin', 15, 20, n='통행료가 있습니다.|A toll is charged.'),
             H('스쿠보이섬', 'Skúvoy', '산도이 남서쪽의 작은 섬으로 마을이 하나뿐입니다. 이름은 많이 사는 큰도둑갈매기에서 왔고, 이 새는 사람에게 달려들기도 합니다.', 'A small island south-west of Sandoy with a single village, named after its many great skuas, birds that are known to dive at people.', 'Skúvoy', 180, 300, b='no', n='배로 건너갑니다. 시간표를 확인하세요.|Reached by boat; check the timetable.'),
         ],
         hubs=FAE,
         itinerary={'days': [['', 2, 1]], 'trips': [['스쿠보이섬|Skúvoy', 3]]},
         season='해가 긴 5~9월이 좋습니다.|Best May–September, when the days are long.',
         stay=[('토르스하운에서 다녀오기', 'Visit from Tórshavn', 'Tórshavn', '당일치기|Day trip', '해저 터널로 차로 가깝고 섬 숙소가 적어 토르스하운에 묵는 사람이 많습니다.|Close by car through the tunnel, with few places to stay on the island, so most stay in Tórshavn.')],
         routes=[R('torshavn', 'sandoy', 'bus', 40)],
         transit=dict(modes=['bus', 'walk'], ko='해저 터널 개통 뒤 토르스하운에서 버스와 차로 갑니다. 버스는 자주 다니지 않으니 시간표를 확인하세요.', en='Since the tunnel opened, buses and cars run from Tórshavn; buses are infrequent, so check the timetable.')),
    dict(COMMON, country='fo', id='suduroy', after='sandoy', ko='수드르오이섬', en='Suðuroy', native='Suðuroy', lat=61.5558, lng=-6.8033,
         blurb=['페로 제도 가장 남쪽의 섬으로, 토르스하운에서 페리 스미릴로 약 2시간 걸립니다. 서해안엔 높이 469m의 바다 절벽 베이니스뵈르드가 솟아 있고, 최남단 마을 숨바, 1919년 처음 만든 페로 국기가 걸린 퍼민 교회가 있습니다. 섬에 들어오면 버스 두 노선으로 마을들을 잇습니다.',
                'The southernmost of the Faroe Islands, about two hours from Tórshavn on the ferry Smyril. The 469 m sea cliff of Beinisvørð rises on the west coast, Sumba is the southernmost village, and the church at Fámjin holds the original Faroese flag made in 1919. Two bus routes link the villages once you are on the island.'],
         highlights=[
             H('베이니스뵈르드', 'Beinisvørð', '로프라와 숨바 사이에 솟은 높이 469m의 바다 절벽으로, 바다 쪽은 수직 절벽, 숨바 쪽은 초록 비탈입니다. 옛날 숨바 사람들은 밧줄을 타고 내려가 새알을 모았습니다.', 'A 469 m sea cliff between Lopra and Sumba, sheer on the sea side and a green slope towards Sumba; men from Sumba once climbed down it on ropes to gather birds and eggs.', 'Beinisvørð', 45, 90, b='no', n=WEATHER),
             H('숨바 마을', 'Sumba', '페로 제도 최남단 마을로, 7세기 흔적이 발견된 오래된 마을입니다. 1887년 교회가 있고 전통 원무 춤으로 이름났습니다.', 'The southernmost village in the Faroe Islands, one of the oldest, with traces from the 7th century; it has an 1887 church and is known for Faroese chain dancing.', 'Sumba Faroe Islands', 30, 45, b='no', n=FREE),
             H('퍼민 교회와 첫 페로 국기', 'Fámjin church & Merkið', '서해안 퍼민 마을의 교회로, 1919년 코펜하겐 유학생들이 만든 최초의 페로 국기 ‘메르키드’가 걸려 있습니다.', 'The church in the west-coast village of Fámjin, where the first Faroese flag, Merkið, made by students in Copenhagen in 1919, hangs.', 'Fámjin church', 15, 20, b='no', n=FREE),
             H('트뵈로위리', 'Tvøroyri', '1836년 덴마크 왕실 독점 상점이 들어서며 생긴 마을로, 20세기 초엔 페로에서 손꼽히는 큰 어업 마을이었습니다. 페리 항구가 피오르 맞은편에 있습니다.', 'A village founded in 1836 around a Royal Danish monopoly store, by 1900 one of the biggest fishing towns in the Faroes; the ferry port lies across the fjord.', 'Tvøroyri', 30, 45, b='no', n=FREE),
         ],
         hubs=FAE + "    port: [['Krambatangi', '크람바탕기 페리 항구', '토르스하운행 스미릴호 · 약 2시간|Smyril to Tórshavn · about 2 hours']],\n",
         itinerary={'days': [['', 4, 3, 2, 1]]},
         season='페리가 하루 2~3번 다니니 해가 긴 5~9월에 1박을 잡으면 넉넉합니다.|With 2–3 ferries a day, an overnight stay in the long days of May–September works best.',
         stay=[('트뵈로위리·바구르', 'Tvøroyri or Vágur', 'Tvøroyri', '섬에서 1박|A night on the island', '페리 시간이 정해져 있어 섬에서 하룻밤 묵으면 서두르지 않고 둘러볼 수 있습니다.|With fixed ferry times, a night on the island lets you explore without rushing.')],
         routes=[('routes-east.ts', LAST, "  r('torshavn', 'suduroy', 'ferry', 120, { n: '스미릴호 · 하루 2~3회|Smyril · 2–3 sailings a day' }),\n")],
         transit=dict(modes=['ferry', 'bus', 'walk'], ko='토르스하운에서 스미릴호로 크람바탕기에 닿습니다. 섬 안은 700번(트뵈로위리~숨바)·701번(퍼민~산드비크) 버스가 다닙니다.', en='The Smyril sails from Tórshavn to Krambatangi; on the island, bus 700 runs Tvøroyri–Sumba and 701 Fámjin–Sandvík.')),
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
    s, n = re.subn(r"cityIds: \[[^\]]*'torshavn'[^\]]*\]", "cityIds: ['torshavn', 'sandoy', 'vagar', 'eysturoy', 'klaksvik', 'suduroy']", s)
    assert n == 1
    wr('countries.ts', s)
