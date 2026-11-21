#!/usr/bin/env python3
"""Liechtenstein step 2 (2026-11-21, user picked all four): Balzers, Triesenberg, Schellenberg, Eschen-Nendeln.
Facts from German Wikipedia (Burg Gutenberg 12th c. on a 70 m rock, state-owned 1979, Mars von Gutenberg; St. Nikolaus 1912
by Gustav von Neumann, gift of Johann II; Mariahilf and St. Peter chapels in Mäls; Triesenberg St. Josef 1938–40 onion
tower, Masescha St. Theodul c. 1300 / 1465, Fürstensteig 1898 T3; Neu-Schellenberg c. 1200, Alt-Schellenberg c. 1250,
Biedermann-Haus 1518, Russian monument 1980; Eschen St. Martin 1893–94 neo-Gothic, Höhenweg Eschnerberg, Roman villa
Nendeln). Gutenberg opening from balzers.li (tours and events May–October).
The Walser museum moves from malbun-h5 to triesenberg-h1 (photo renamed). Run once."""
import json
import os
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

FREE = '무료입니다.|Free.'
SUMMER = '눈이 녹은 여름철(대략 6~10월)에 걷습니다.|Walked in summer once the snow has gone (roughly June–October).'
ZRH = "    air: [ZRH('스위스 취리히|Zurich, Switzerland')],\n"
COMMON = dict(hubs_file='hubs-west.ts', hubs_before='  // —— it ——\n', itin_file='itinerary-central.ts',
              itin_before='  vaduz: { days:', visit_file='visit-ch.ts',
              visit_after=r"^  '(?:malbun|balzers|triesenberg|schellenberg|eschen-nendeln)-h\d+': v\(.*\),\n",
              stay_before='  kosice: [', apps="      ta('sbb'),\n", transit_before='  // —— cz ——\n', places=None, daytrips=[])
LAST = r"^  r\('vaduz', 'malbun', 'bus', 30\),\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


def R(a, b, m):
    return ('routes-west.ts', LAST, f"  r('{a}', '{b}', 'bus', {m}),\n")


def TR(name_ko, name_en):
    return dict(modes=['bus', 'taxi', 'walk'],
                ko='마을 안은 걸어서 둘러보고, 파두츠·샨까지는 LIEmobil 버스로 다닙니다.',
                en=f'Walk around {name_en}; LIEmobil buses link it with Vaduz and Schaan.')


CITIES = [
    dict(COMMON, country='li', id='balzers', after='schaan', ko='발처스', en='Balzers', native='Balzers', lat=47.0653, lng=9.5020,
         blurb=['리히텐슈타인 남쪽 끝, 스위스와 맞닿은 라인강 변 마을입니다. 마을 한가운데 70m 바위 언덕 위에 12세기 구텐베르크성이 솟아 있고, 그 아래 1912년 성 니콜라우스 성당, 옆 마을 멜스엔 용 머리 장식의 마리아힐프 예배당과 중세 성 베드로 예배당이 있습니다. 스위스 자르간스에서 버스로 들어오는 관문이기도 합니다.',
                'The southernmost village of Liechtenstein, on the Rhine by the Swiss border. The 12th-century Gutenberg Castle rises on a 70 m rock in the middle of the village, with the 1912 church of St Nicholas below it, and in neighbouring Mäls the dragon-crowned Mariahilf chapel and the medieval chapel of St Peter. It is also the gateway by bus from Sargans in Switzerland.'],
         highlights=[
             H('구텐베르크성', 'Gutenberg Castle', '사방이 깎아지른 70m 바위 언덕 위에 12세기에 세운 성으로, 1979년부터 나라 소유입니다. 언덕은 신석기 시대부터 사람이 살던 곳이라 청동상 「구텐베르크의 마르스」 같은 유물이 나왔습니다.', 'A 12th-century castle on a free-standing 70 m rock, owned by the state since 1979. The hill has been settled since the Neolithic, and finds include the bronze figure known as the Mars of Gutenberg.', 'Burg Gutenberg Balzers', 30, 75, n='성 안은 5~10월에 미리 신청한 안내 투어와 행사 때 열립니다.|The interior opens May–October for pre-booked guided tours and events.', s='https://www.balzers.li'),
             H('성 니콜라우스 성당', 'St Nicholas Church', '구텐베르크성 언덕 아래의 마을 성당으로, 빈의 건축가 구스타프 폰 노이만이 설계해 1912년에 봉헌했습니다. 군주 요한 2세가 재위 50주년을 기념해 마을에 지어 준 성당입니다.', 'The village church below the castle hill, designed by the Viennese architect Gustav von Neumann and consecrated in 1912, a gift from Prince Johann II for his 50th year on the throne.', 'Pfarrkirche St. Nikolaus Balzers', 15, 20, b='no', n=FREE),
             H('마리아힐프 예배당', 'Mariahilf Chapel', '멜스 마을의 오래된 순례 예배당으로, 마을을 괴롭히던 용을 성모가 쫓아냈다는 전설에 따라 탑 꼭대기에 용 머리가 달려 있습니다. 지금은 결혼식 예배당으로 인기가 많습니다.', 'An old pilgrimage chapel in Mäls whose spire carries a dragon’s head, after the legend that the Virgin drove away a dragon plaguing the village. Today it is a popular wedding chapel.', 'Mariahilf Kapelle Balzers', 10, 15, b='no', n=FREE),
             H('성 베드로 예배당', 'St Peter’s Chapel', '13~14세기에 지어진 것으로 보이는 멜스의 예배당으로, 후기 고딕 날개 제단과 1415년 무렵의 옥좌의 성모상이 남아 있습니다. 맞은편에 13세기 주거용 탑이 서 있습니다.', 'A chapel in Mäls probably built in the 13th or 14th century, keeping a late-Gothic winged altar and an enthroned Madonna from around 1415. A 13th-century tower house stands opposite.', 'Kapelle St. Peter Mäls Balzers', 10, 15, b='no'),
         ],
         hubs=ZRH + "    rail: [['Sargans', '자르간스역', '스위스 · 버스 연결|Switzerland · bus link']],\n",
         itinerary={'days': [['', 1, 2, 3, 4]]},
         season='구텐베르크성 안을 보려면 투어가 열리는 5~10월에 가세요.|Visit May–October if you want to see inside Gutenberg Castle.',
         stay=[('발처스 마을', 'Balzers village', 'Balzers', '조용한 마을·성 구경|Quiet village, the castle', '성 언덕 둘레에 작은 숙소가 있고, 파두츠까지 버스로 20분쯤 걸립니다.|A few small hotels around the castle hill, about 20 minutes by bus from Vaduz.')],
         routes=[R('vaduz', 'balzers', 20)],
         transit=TR('발처스', 'Balzers')),
    dict(COMMON, country='li', id='triesenberg', after='balzers', ko='트리젠베르크', en='Triesenberg', native='Triesenberg', lat=47.1183, lng=9.5417,
         blurb=['파두츠 뒤편 해발 약 900m 산비탈 계단 위의 마을로, 나라에서 가장 높고 가장 넓은 지자체입니다. 13세기 말 스위스 발레에서 건너온 발저인이 일군 곳이라 발저 박물관과 양파 모양 탑의 성 요셉 성당이 있고, 라인 계곡을 내려다보는 전망이 좋습니다. 말분으로 오르는 길목이며, 위쪽 가플라이에서 바위벽 산길 퓌르스텐슈타이크가 시작됩니다.',
                'A village on a terrace at about 900 m above Vaduz, the highest and largest municipality in the country. It was settled by the Walser, who came from the Swiss Valais in the late 13th century, and has a Walser museum, the onion-towered church of St Joseph and wide views over the Rhine valley. It is on the road up to Malbun, and the Fürstensteig cliff path starts higher up at Gaflei.'],
         highlights=[
             H('발저 박물관', 'Walser Museum', '13세기 무렵 스위스 발레에서 옮겨 온 발저인의 산간 생활과 마을 풍습을 보여 주는 박물관으로, 400년 된 발저 가옥이 딸려 있습니다.', 'A museum on the mountain life and customs of the Walser, who came from the Swiss Valais around the 13th century, with a 400-year-old Walser house attached.', 'Walser Heimatmuseum Triesenberg', 30, 45),
             H('성 요셉 성당', 'St Joseph’s Church', '1938~1940년 마을 중심 언덕 위에 지은 성당으로, 옛 성당처럼 리히텐슈타인에서 하나뿐인 양파 모양 탑을 얹었습니다. 성당 앞에서 라인 계곡이 내려다보입니다.', 'Built in 1938–40 on a raised terrace in the village centre, crowned like its predecessor with an onion tower unique in Liechtenstein; the Rhine valley spreads out below.', 'Pfarrkirche St. Josef Triesenberg', 15, 20, b='no', n=FREE),
             H('마제샤 성 테오둘 예배당', 'St Theodul’s Chapel, Masescha', '마제샤 마을의 예배당으로, 1300년 무렵 발저인이 처음 지은 것으로 보이며 1465년 기록에 처음 나옵니다. 라인 계곡 전망이 좋은 자리에 있습니다.', 'A chapel in the hamlet of Masescha, probably first built by the Walser around 1300 and first recorded in 1465, in a spot with fine views over the Rhine valley.', 'Kapelle St. Theodul Masescha', 15, 20, b='no', n=FREE),
             H('퓌르스텐슈타이크', 'Fürstensteig', '알프슈피츠 북서쪽 바위벽을 깎아 1898년에 연 산길로, 가플라이 위에서 시작해 가플라이 고개(1,853m)까지 이어집니다. 안전 시설이 있지만 좁고 아찔한 길이라 산행 경험이 필요합니다(난이도 T3).', 'A path cut into the north-west face of the Alpspitz and opened in 1898, from above Gaflei to the Gafleisattel (1,853 m). It is secured but narrow and exposed, so some mountain experience is needed (grade T3).', 'Fürstensteig Gaflei', 180, 300, b='no', n=SUMMER),
         ],
         hubs=ZRH + "    rail: [['Sargans', '자르간스역', '스위스 · 파두츠 경유 버스|Switzerland · bus via Vaduz']],\n",
         itinerary={'days': [['', 1, 2, 3]], 'trips': [['퓌르스텐슈타이크|Fürstensteig', 4]]},
         season='마을은 사계절 좋고, 퓌르스텐슈타이크 산행은 6~10월이 알맞습니다.|The village is good year-round; walk the Fürstensteig June–October.',
         stay=[('트리젠베르크 마을', 'Triesenberg village', 'Triesenberg', '전망·산행|Views, hiking', '라인 계곡이 내려다보이는 산마을 숙소로, 파두츠·말분 모두 버스로 가깝습니다.|Hillside hotels looking over the Rhine valley, a short bus ride from both Vaduz and Malbun.')],
         routes=[R('vaduz', 'triesenberg', 15), R('triesenberg', 'malbun', 15)],
         transit=TR('트리젠베르크', 'Triesenberg')),
    dict(COMMON, country='li', id='eschen-nendeln', after='malbun', ko='에셴·넨델른', en='Eschen-Nendeln', native='Eschen', lat=47.2139, lng=9.5242,
         blurb=['북쪽 운터란트에서 가장 큰 지자체로, 에셔베르크 언덕 남쪽 비탈의 에셴과 들판 건너 철도역이 있는 넨델른 두 마을로 이뤄집니다. 신고딕 성 마르틴 성당이 마을 위에 서 있고, 넨델른엔 로마 시대 농장 저택 터가 남아 있습니다. 선사 유적과 성터를 잇는 에셔베르크 역사 산책로가 이곳에서 시작됩니다.',
                'The largest municipality of the northern Unterland, made up of Eschen on the southern slope of the Eschnerberg and Nendeln, with its railway station, across the fields. The neo-Gothic church of St Martin stands above the village, and Nendeln keeps the foundations of a Roman villa. The Eschnerberg history trail, linking prehistoric sites and castle ruins, starts here.'],
         highlights=[
             H('성 마르틴 성당', 'St Martin’s Church', '842년 기록에 처음 나오는 교구의 성당으로, 지금 건물은 1893~1894년 슈투트가르트 건축가들의 설계로 다시 지은 신고딕 양식입니다.', 'The church of a parish first recorded in 842; the present neo-Gothic building was put up in 1893–94 to plans by architects from Stuttgart.', 'Pfarrkirche St. Martin Eschen', 15, 20, b='no', n=FREE),
             H('에셔베르크 역사 산책로', 'Eschnerberg history trail', '에셔베르크 언덕을 따라 걷는 산책로로, 신석기 시대 주거지와 중세 성터를 지나며 곳곳의 안내판이 이 지역 역사를 설명합니다. 라인 계곡 전망도 좋습니다.', 'A trail along the Eschnerberg ridge past Neolithic settlement sites and medieval castle ruins, with boards explaining the area’s history and views over the Rhine valley.', 'Historischer Höhenweg Eschnerberg', 120, 240, b='no', n=FREE),
             H('넨델른 로마 저택 터', 'Roman villa, Nendeln', '넨델른 마을 동쪽 위에서 발굴된 로마 시대 농장 저택의 기초입니다.', 'The excavated foundations of a Roman country villa on the slope east of Nendeln.', 'Römische Villa Nendeln', 15, 20, b='no'),
         ],
         hubs=ZRH + "    rail: [\n      ['Nendeln', '넨델른역', '정차 열차 적음|few trains stop'],\n      ['Feldkirch', '펠트키르히역', '오스트리아 · 버스 연결|Austria · bus link'],\n    ],\n",
         itinerary={'days': [['', 1, 3]], 'trips': [['에셔베르크 역사 산책로|Eschnerberg trail', 2]]},
         season='산책로는 봄부터 가을까지 걷기 좋습니다.|The trail is best walked from spring to autumn.',
         stay=[('에셴 마을', 'Eschen village', 'Eschen', '조용한 마을·산책|Quiet village, walking', '운터란트 한가운데라 셸렌베르크·샨이 버스로 가깝고, 오스트리아 펠트키르히도 가깝습니다.|In the middle of the Unterland, a short bus ride from Schellenberg and Schaan, and close to Feldkirch in Austria.')],
         routes=[R('schaan', 'eschen-nendeln', 10)],
         transit=TR('에셴·넨델른', 'Eschen-Nendeln')),
    dict(COMMON, country='li', id='schellenberg', after='eschen-nendeln', ko='셸렌베르크', en='Schellenberg', native='Schellenberg', lat=47.2336, lng=9.5481,
         blurb=['오스트리아 국경 가까이 에셔베르크 언덕 위의 마을로, 나라에서 가장 작은 지자체입니다. 중세 셸렌베르크 영주의 성터 두 곳과 1518년 통나무 농가 박물관 비더만 하우스가 있고, 1945년 망명한 러시아 부대를 기리는 기념비가 있습니다. 위쪽 라인 계곡 전망이 좋습니다.',
                'A village on the Eschnerberg near the Austrian border, the smallest municipality in the country. It has the ruins of two castles of the medieval lords of Schellenberg, the Biedermann House, a log farmhouse of 1518 now a museum, and a memorial to the Russian unit given asylum in 1945. The views over the upper Rhine valley are fine.'],
         highlights=[
             H('노이셸렌베르크 성터', 'Neu-Schellenberg ruins', '이름과 달리 두 성 가운데 더 오래된 성으로, 1200년 무렵 셸렌베르크 영주가 세웠습니다. 해발 약 670m 언덕 위에 있으며 누구나 들어가 볼 수 있습니다.', 'Despite its name the older of the two castles, built around 1200 by the lords of Schellenberg. It stands at about 670 m and is freely accessible.', 'Ruine Neu-Schellenberg', 20, 30, b='no', n=FREE),
             H('알트셸렌베르크 성터', 'Alt-Schellenberg ruins', '1250년 무렵 세운 더 젊은 성으로, 라인 계곡 위 약 150m 높이 언덕 끝에 있습니다. 누구나 들어갈 수 있고 역사 산책로로도 닿습니다.', 'The younger castle, built around 1250 on the edge of the ridge some 150 m above the Rhine valley; freely accessible and also reached on the history trail.', 'Ruine Alt-Schellenberg', 20, 30, b='no', n=FREE),
             H('비더만 하우스', 'Biedermann House', '1518년에 지은 라인 계곡식 통나무 농가로, 1900년 무렵 농가의 살림을 보여 주는 리히텐슈타인 국립박물관 분관입니다.', 'A Rhine-valley log farmhouse of 1518, now a branch of the Liechtenstein National Museum showing farm life around 1900.', 'Biedermann-Haus Schellenberg', 30, 45, n='여는 시간은 리히텐슈타인 국립박물관 누리집에서 확인하세요.|Check opening times on the Liechtenstein National Museum website.', s='https://www.landesmuseum.li'),
             H('러시아 기념비', 'Russian Memorial', '1945년 국경을 넘어 이곳으로 들어와 리히텐슈타인에 망명을 허락받은 러시아 제1국민군을 기억하는 기념비로, 1980년에 세웠습니다.', 'A memorial set up in 1980 to the 1st Russian National Army, which crossed the border here in 1945 and was granted asylum by Liechtenstein.', 'Russen-Denkmal Hinterschellenberg', 10, 15, b='no', n=FREE),
         ],
         hubs=ZRH + "    rail: [\n      ['Feldkirch', '펠트키르히역', '오스트리아 · 버스 연결|Austria · bus link'],\n      ['Nendeln', '넨델른역', '정차 열차 적음|few trains stop'],\n    ],\n",
         itinerary={'days': [['', 1, 4, 3, 2]]},
         season='성터 산책은 봄부터 가을까지 좋습니다.|The castle walks are best from spring to autumn.',
         stay=[('에셴에서 다녀오기', 'Visit from Eschen', 'Eschen', '당일치기|Day trip', '마을이 작아 숙소가 적으니 에셴이나 파두츠에 묵고 버스로 다녀오세요.|The village is tiny with few beds, so stay in Eschen or Vaduz and come by bus.')],
         routes=[R('eschen-nendeln', 'schellenberg', 10)],
         transit=TR('셸렌베르크', 'Schellenberg')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


def move_walser():
    c = rd('cities.ts')
    i = c.index('id: "malbun-h5"')
    s = c.rindex(',\n      {', 0, i)
    e = c.index('\n      }', i) + len('\n      }')
    c = c[:s] + c[e:]
    wr('cities.ts', c)
    vi = rd('visit-ch.ts')
    a = "  'malbun-h5': v(30, 45),\n"
    assert vi.count(a) == 1
    wr('visit-ch.ts', vi.replace(a, ''))
    it = rd('itinerary-central.ts')
    a = "['슈테크·트리젠베르크|Steg & Triesenberg', 6, 5]"
    assert it.count(a) == 1
    wr('itinerary-central.ts', it.replace(a, "['슈테크 갱글레 호수|Gänglesee, Steg', 6]"))
    pub = os.path.join(os.path.dirname(__file__), '..', 'public', 'highlights')
    os.replace(os.path.join(pub, 'malbun-5.jpg'), os.path.join(pub, 'triesenberg-1.jpg'))


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    move_walser()
    s = rd('countries.ts')
    s, n = re.subn(r"cityIds: \[[^\]]*'vaduz'[^\]]*\]",
                   "cityIds: ['vaduz', 'schaan', 'balzers', 'triesenberg', 'malbun', 'eschen-nendeln', 'schellenberg']", s)
    assert n == 1
    wr('countries.ts', s)
