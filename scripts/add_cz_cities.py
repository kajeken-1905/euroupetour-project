#!/usr/bin/env python3
"""Czechia new towns (2026-11-21, user picked all four): Lednice–Valtice, Litomyšl, Kroměříž, Bohemian Paradise; plus
Hřensko +2. Facts from English/Czech Wikipedia (Lednice–Valtice Cultural Landscape 283 km², UNESCO 1996, Liechtenstein
land for nearly 700 years; Lednice château rebuilt in the mid-19th c. in Tudor Gothic; Valtice Baroque château, princely
seat until 1945, national monument 1995. Litomyšl castle, Renaissance arcade castle, UNESCO 1999; Smetana born 1824 in
the castle brewery, museum April–October; Portmoneum, Josef Váchal museum. Kroměříž castle, residence of the Olomouc
(arch)bishops, gardens and castle UNESCO 1998. Bohemian Paradise protected area 181 km², the only UNESCO Global Geopark
in Czechia; Prachov Rocks 5 km west of Jičín, reserve since 1933; Trosky on two basalt plugs (Baba 47 m, Panna 57 m);
Hrubá Skála château rebuilt from the 14th-c. castle of the lords of Valdštejn; Valdštejn castle, second half of the
13th c. Hřensko: Mariina vyhlídka 428 m north of Jetřichovice; Dolský mlýn ruined mill at the Kamenice / Jetřichovická
Bělá confluence). mikulov-h5 and mikulov-h7 move to lednice-h5 and lednice-h4. Run once."""
import json
import os
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from sight_order import add_sights
from review_sk import S

FREE = '무료입니다.|Free.'
SEASON = '대략 4~10월에 열고 월요일에 쉬는 곳이 많습니다. 운영 시간을 확인하세요.|Mostly open roughly April–October and often closed on Mondays; check opening times.'
PRG = "PRG()"
COMMON = dict(hubs_file='hubs-central.ts', hubs_before='  // —— sk ——\n', itin_file='itinerary-north.ts',
              itin_before="  'ceske-budejovice': {", visit_file='visit-central.ts',
              visit_after=r"^  '(?:ceske-budejovice|lednice|litomysl|kromeriz|cesky-raj)-h\d+': v\(.*\),\n",
              stay_before='  agrigento: [', transit_before='  // —— sk ——\n', places=None, daytrips=[],
              apps="      ta('cd'),\n")
LAST = r"^  r\('brno', 'olomouc', 'train', 75\),\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


def R(a, b, mode, m, n=None):
    extra = f", {{ n: '{n}' }}" if n else ''
    return ('routes-central.ts', LAST, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


CITIES = [
    dict(COMMON, country='cz', id='lednice', after='mikulov', ko='레드니체·발티체', en='Lednice–Valtice', native='Lednice', lat=48.8014, lng=16.8056,
         blurb=['남모라비아의 레드니체와 발티체 두 마을과 그 사이 283km²의 숲·정원·연못을 묶은 유네스코 세계유산 경관입니다. 리히텐슈타인 가문이 700년 가까이 다스리며 영국 튜더 고딕풍 레드니체 성, 바로크 발티체 성, 숲속의 미나레트와 정자들을 하나의 정원처럼 꾸몄습니다. 체코 와인의 중심지이기도 합니다.',
                'A UNESCO-listed landscape in South Moravia joining the villages of Lednice and Valtice and 283 km² of woods, gardens and ponds between them. The Liechtenstein family, who held it for nearly 700 years, shaped it like one great garden, with the Tudor-Gothic Lednice château, Baroque Valtice château and a minaret and follies hidden in the woods. It is also the heart of Czech wine country.'],
         highlights=[
             H('레드니체 성', 'Lednice Château', '디예강 가의 성으로, 리히텐슈타인 가문이 19세기 중반 영국 튜더 고딕 양식으로 크게 고쳐 지었습니다. 넓은 정원과 온실이 함께 있습니다.', 'A château on the Dyje, rebuilt by the Liechtensteins in the mid-19th century in English Tudor Gothic, with vast gardens and a glasshouse.', 'Zámek Lednice', 90, 120, n=SEASON),
             H('미나레트', 'Minaret', '레드니체 성 정원 안에 18세기 말~19세기 초 세운 높이 약 60m의 이슬람풍 탑으로, 꼭대기 전망대에서 정원과 숲이 내려다보입니다.', 'An Islamic-style tower about 60 m high, built in the Lednice château park around 1800, with a lookout over the gardens and woods.', 'Minaret Lednice', 30, 45, n=SEASON),
             H('발티체 성', 'Valtice Château', '1945년까지 리히텐슈타인 가문의 거처였던 바로크 성으로, 1995년 국가 문화재가 됐습니다.', 'The Baroque château that was the seat of the princes of Liechtenstein until 1945, a national cultural monument since 1995.', 'Zámek Valtice', 60, 90, n=SEASON),
         ],
         hubs="    air: [VIE(), ['Brno (BRQ)', '브르노 공항 (BRQ)']],\n    rail: [['Valtice', '발티체역'], ['Břeclav', '브르제츨라프역', '레드니체행 버스|buses to Lednice']],\n",
         itinerary={'days': [['', 1, 2]], 'trips': [['발티체|Valtice', 3, 4], ['레드니체·발티체 정원 경관|Lednice–Valtice landscape', 5]]},
         season='성과 정원이 여는 4~10월이 좋고, 9월은 포도 수확철입니다.|April–October, when the châteaux and gardens open; September is harvest time.',
         stay=[('레드니체 마을', 'Lednice village', 'Lednice', '성 가까이|By the château', '성 정원 바로 옆 마을로, 와인 펜션이 많습니다.|The village right by the château park, with many wine guesthouses.')],
         routes=[R('mikulov', 'lednice', 'bus', 30), R('brno', 'lednice', 'mixed', 75, '브르제츨라프에서 버스 환승|change at Břeclav for the bus')],
         transit=dict(modes=['bus', 'train', 'walk'], ko='레드니체와 발티체 사이는 버스로 약 20분입니다. 발티체엔 기차역이 있고, 레드니체는 브르제츨라프에서 버스로 갑니다.', en='Buses link Lednice and Valtice in about 20 minutes; Valtice has a station, and Lednice is reached by bus from Břeclav.')),
    dict(COMMON, country='cz', id='litomysl', after='kutna-hora', ko='리토미슐', en='Litomyšl', native='Litomyšl', lat=49.8719, lng=16.3106,
         blurb=['동보헤미아의 작은 도시로, 이탈리아식 아케이드 성 가운데 가장 뛰어난 르네상스 성이 유네스코 세계유산입니다. 성 양조장에서 작곡가 베드르지흐 스메타나가 태어났고, 화가 요세프 바할의 벽화로 온 집을 채운 포르트모네움이 있습니다. 성과 함께 옛 시가가 잘 보존돼 있습니다.',
                'A small town in eastern Bohemia whose Renaissance castle, the finest of the Italian-style arcade castles, is a UNESCO World Heritage Site. The composer Bedřich Smetana was born in the castle brewery, and the Portmoneum is a house covered inside with Josef Váchal’s paintings. The old town around the castle is well preserved.'],
         highlights=[
             H('리토미슐 성', 'Litomyšl Castle', '체코에서 손꼽히게 큰 르네상스 성으로, 이탈리아에서 온 아케이드 성을 보헤미아식으로 발전시킨 대표작이라 1999년 유네스코 세계유산이 됐습니다. 18세기 바로크 장식이 더해졌습니다.', 'One of the largest Renaissance castles in Czechia and the outstanding example of the arcade castle, an Italian type developed in Bohemia; a UNESCO World Heritage Site since 1999, with High Baroque touches added in the 18th century.', 'Zámek Litomyšl', 60, 90, n=SEASON),
             H('스메타나 생가', 'Smetana’s Birthplace', '작곡가 베드르지흐 스메타나가 1824년 태어난 성 양조장 1층 집으로, 그의 어린 시절과 가족을 보여 주며 〈나의 조국〉을 들려줍니다.', 'The ground-floor flat in the castle brewery where Bedřich Smetana was born in 1824, on his childhood and family, with excerpts from Má vlast.', 'Rodný byt Bedřicha Smetany', 30, 45, n='4~10월에 엽니다.|Open April–October.'),
             H('포르트모네움', 'Portmoneum', '화가 요세프 바할이 벽과 천장, 가구까지 그림으로 채운 집으로, 지금은 바할 박물관입니다.', 'A house whose walls, ceilings and furniture were covered in paintings by Josef Váchal, now a museum of his work.', 'Portmoneum Litomyšl', 30, 45, n=SEASON),
         ],
         hubs="    air: [PRG()],\n    bus: [['Litomyšl', '리토미슐 버스터미널', '프라하행|to Prague']],\n",
         itinerary={'days': [['', 1, 2, 3]]},
         season='성과 박물관이 여는 4~10월이 좋습니다.|April–October, when the castle and museums open.',
         stay=[('리토미슐 옛 시가', 'Litomyšl old town', 'Litomyšl', '조용한 소도시|Quiet small town', '성과 광장 가까이에 숙소가 있어 걸어서 다닙니다.|Places to stay near the castle and square, all on foot.')],
         routes=[R('prague', 'litomysl', 'bus', 180)],
         transit=dict(modes=['bus', 'walk'], ko='작은 도시라 걸어서 다닙니다. 프라하에서 버스로 옵니다.', en='The town is small enough to walk; buses come from Prague.')),
    dict(COMMON, country='cz', id='kromeriz', after='olomouc', ko='크로메르지시', en='Kroměříž', native='Kroměříž', lat=49.2989, lng=17.3931,
         blurb=['모라바강 가의 도시로, 올로모우츠 주교·대주교가 수백 년 동안 살던 성과 바로크 정원이 유네스코 세계유산입니다. 기하학적으로 다듬은 꽃 정원과 강가의 넓은 성 정원이 성과 함께 펼쳐지고, 성을 둘러싼 옛 시가도 잘 남아 있습니다. 올로모우츠에서 당일로 다녀오기 좋습니다.',
                'A town on the Morava whose castle, for centuries the residence of the bishops and archbishops of Olomouc, and its Baroque gardens are a UNESCO World Heritage Site. A formal Flower Garden and a broad riverside Castle Garden spread out around the castle and well-preserved old town; an easy day trip from Olomouc.'],
         highlights=[
             H('크로메르지시 성', 'Kroměříž Castle', '올로모우츠 주교(1777년부터 대주교)의 주 거처였던 성으로, 뛰어나게 보존된 바로크 정원과 함께 1998년 유네스코 세계유산이 됐습니다.', 'The main residence of the bishops (from 1777 archbishops) of Olomouc, listed by UNESCO in 1998 together with its exceptionally well-preserved Baroque gardens.', 'Arcibiskupský zámek Kroměříž', 60, 90, n=SEASON),
             H('꽃 정원', 'Flower Garden', '성 밖에 따로 있는 17세기 바로크 정원으로, 기하학적인 화단과 긴 열주 회랑, 원형 정자가 있습니다.', 'A 17th-century Baroque garden outside the castle, with geometric flowerbeds, a long colonnade and a rotunda.', 'Květná zahrada Kroměříž', 45, 60),
             H('성 정원', 'Castle Garden', '성 뒤 모라바강 쪽으로 펼쳐진 넓은 풍경식 정원으로, 연못과 정자 사이를 걷습니다.', 'A broad landscape garden behind the castle towards the Morava, with ponds and pavilions to stroll among.', 'Podzámecká zahrada Kroměříž', 45, 90, b='no', n=FREE),
         ],
         hubs="    air: [PRG()],\n    rail: [['Kroměříž', '크로메르지시역', '훌린 환승|change at Hulín']],\n",
         itinerary={'days': [['', 1, 2, 3]]},
         season='정원이 가장 아름다운 5~9월이 좋습니다.|May–September, when the gardens are at their best.',
         stay=[('올로모우츠에서 다녀오기', 'Visit from Olomouc', 'Olomouc', '당일치기|Day trip', '기차로 1시간이 안 걸려 올로모우츠에 묵고 다녀오기 좋습니다.|Under an hour by train, so it is easy to stay in Olomouc and come for the day.')],
         routes=[R('olomouc', 'kromeriz', 'train', 50, '훌린 환승|change at Hulín')],
         transit=dict(modes=['train', 'bus', 'walk'], ko='역에서 성과 정원까지 걸어서 갑니다.', en='Walk from the station to the castle and gardens.')),
    dict(COMMON, country='cz', id='cesky-raj', after='hrensko', ko='보헤미안 파라다이스', en='Bohemian Paradise', native='Český ráj', lat=50.5873, lng=15.1569,
         blurb=['북보헤미아의 사암 바위 지대로, 체코의 유일한 유네스코 세계지질공원입니다. 바람과 비가 깎은 바위 탑 사이를 걷는 ‘바위 도시’가 이어지고, 화산암 봉우리 두 개 위에 선 트로스키 성터가 이 지역의 상징입니다. 투르노프와 이친을 거점으로 걸어서 둘러봅니다.',
                'A sandstone region in northern Bohemia, the only UNESCO Global Geopark in Czechia. Trails wind through ‘rock towns’ of wind-carved towers, and the ruins of Trosky Castle, perched on two volcanic plugs, are its landmark. Turnov and Jičín are the bases for exploring on foot.'],
         highlights=[
             H('프라호프 바위', 'Prachov Rocks', '이친 서쪽 5km의 사암 바위 지대로, 1933년부터 자연보호구역입니다. ‘기울어진 탑’, ‘코끼리’ 같은 이름의 바위 탑 사이로 길이 나 있습니다.', 'A sandstone rock city 5 km west of Jičín, a nature reserve since 1933, with paths among towers named the Leaning Tower, the Elephant and more.', 'Prachovské skály', 120, 180),
             H('트로스키 성터', 'Trosky Castle', '화산암 봉우리 두 개 위에 지은 성터로, 낮은 봉우리(47m) 위 ‘바바(노파)’와 높은 봉우리(57m) 위 ‘판나(처녀)’ 탑이 지역의 상징입니다.', 'Castle ruins on two basalt volcanic plugs: the ‘Baba’ (Crone) on the lower 47 m peak and the ‘Panna’ (Maiden) on the higher 57 m one, the landmark of Bohemian Paradise.', 'Hrad Trosky', 60, 90, n=SEASON),
             H('흐루바 스칼라 바위 도시와 성', 'Hrubá Skála', '사암 바위 탑 사이 숲길과, 14세기 발트슈테인 가문의 성을 고친 바위 위 성이 함께 있습니다.', 'Forest paths among sandstone towers, with a château on the rocks rebuilt from the 14th-century castle of the lords of Valdštejn.', 'Hrubá Skála', 120, 180, b='no'),
             H('발트슈테인 성터', 'Valdštejn Castle', '투르노프 가까이의 13세기 후반 성터로, 이 지역에서 가장 오래된 성 가운데 하나입니다.', 'Ruins of a castle from the second half of the 13th century near Turnov, one of the oldest in the area.', 'Hrad Valdštejn', 45, 60, n=SEASON),
         ],
         hubs="    air: [PRG()],\n    rail: [['Turnov', '투르노프역'], ['Jičín', '이친역']],\n",
         itinerary={'days': [['', 4, 3]], 'trips': [['트로스키 성|Trosky Castle', 2], ['프라호프 바위|Prachov Rocks', 1]]},
         season='산행하기 좋은 5~10월이 알맞습니다.|May–October suits walking.',
         stay=[('투르노프', 'Turnov', 'Turnov', '거점 도시|Base town', '기차역과 숙소가 있고 흐루바 스칼라·발트슈테인까지 걸어서도 갑니다.|Station and hotels, with Hrubá Skála and Valdštejn within walking distance.')],
         routes=[R('prague', 'cesky-raj', 'train', 100, '투르노프역|to Turnov')],
         transit=dict(modes=['train', 'bus', 'walk'], ko='투르노프·이친에서 버스와 걷는 길로 바위 지대와 성을 잇습니다.', en='Buses and marked trails link the rock towns and castles from Turnov and Jičín.')),
]

HRENSKO = [
 (5, S('마리나 전망대', 'Mariina vyhlídka', '예트르지호비체 마을 북쪽 해발 428m 사암 봉우리 꼭대기의 전망대로, 사다리와 계단으로 올라 국립공원 숲을 내려다봅니다.', 'A lookout on a 428 m sandstone summit north of Jetřichovice, climbed by ladders and steps, looking over the national park forests.', 'Mariina vyhlídka Jetřichovice', 90, 120, b='no', n=FREE)),
 (6, S('돌스키 물레방앗간 터', 'Dolský mlýn', '카메니체강과 예트르지호비체 벨라강이 만나는 숲속의 옛 물레방앗간 폐허로, 국립공원 산책로가 지나갑니다.', 'The ruins of an old mill in the woods where the Kamenice meets the Jetřichovická Bělá, on the national park trails.', 'Dolský mlýn', 30, 45, b='no', n=FREE)),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


def move_from_mikulov():
    c = rd('cities.ts')
    vi = rd('visit-central.ts')
    pub = os.path.join(os.path.dirname(__file__), '..', 'public', 'highlights')
    gm_p = os.path.join(os.path.dirname(__file__), 'itinerary', 'geo-manual.json')
    gm = json.load(open(gm_p))
    for sn, dn in [(7, 4), (5, 5)]:
        i = c.index(f'id: "mikulov-h{sn}"')
        s = c.rindex(',\n      {', 0, i)
        e = c.index('\n      }', i) + len('\n      }')
        blk = c[s:e].replace(f'id: "mikulov-h{sn}"', f'id: "lednice-h{dn}"').replace(f'/highlights/mikulov-{sn}.jpg', f'/highlights/lednice-{dn}.jpg')
        c = c[:s] + c[e:]
        k = c.index('id: "lednice",')
        j = c.index('\n    ],\n', k)
        c = c[:j] + blk + c[j:]
        m = re.search(rf"^  'mikulov-h{sn}': (v\(.*\)),\n", vi, re.M)
        vi = vi.replace(m.group(0), '')
        a = re.search(rf"^  'lednice-h{dn - 1}': v\(.*\),\n", vi, re.M)
        val = m.group(1).replace("미쿨로프에서 기차나 버스로 약 15분입니다.|About 15 min by train or bus from Mikulov.", "발티체 성 지하에 있습니다.|In the cellars of Valtice Château.").replace("미쿨로프에서 버스로 갑니다. 성은 봄~가을 위주로 엽니다.|Reached by bus from Mikulov; the castles open mainly spring to autumn.", "넓은 지역이라 차나 자전거, 버스로 돕니다.|A large area, best toured by car, bike or bus.")
        vi = vi[:a.end()] + f"  'lednice-h{dn}': {val},\n" + vi[a.end():]
        if f'mikulov-h{sn}' in gm:
            gm[f'lednice-h{dn}'] = gm.pop(f'mikulov-h{sn}')
        if os.path.exists(os.path.join(pub, f'mikulov-{sn}.jpg')):
            os.replace(os.path.join(pub, f'mikulov-{sn}.jpg'), os.path.join(pub, f'lednice-{dn}.jpg'))
    c = add_sights(c, 'hrensko', HRENSKO, 'visit-central.ts')
    wr('cities.ts', c)
    wr('visit-central.ts', vi)
    json.dump(gm, open(gm_p, 'w'), ensure_ascii=False, indent=2)
    open(gm_p, 'a').write('\n')
    it = rd('itinerary-north.ts')
    a = "  mikulov: { days: [['', 1, 6, 4, 3, 2]], trips: [['레드니체·발티체|Lednice–Valtice', 5], ['발티체 와인 살롱|Valtice Wine Salon', 7]] },\n"
    assert it.count(a) == 1
    it = it.replace(a, "  mikulov: { days: [['', 1, 6, 4, 3, 2]] },\n")
    a = "  hrensko: { days: [['', 3, 2], ['프라브치츠카 문|Pravčická brána', 1]], trips: [['데친 성|Děčín Castle', 4]] },\n"
    assert it.count(a) == 1
    it = it.replace(a, "  hrensko: { days: [['', 3, 2], ['프라브치츠카 문|Pravčická brána', 1]], trips: [['데친 성|Děčín Castle', 4], ['마리나 전망대|Mariina vyhlídka', 5, 6]] },\n")
    wr('itinerary-north.ts', it)


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    move_from_mikulov()
