#!/usr/bin/env python3
"""Andorra step 2 (2026-11-21, user picked all four): Escaldes-Engordany, La Massana, Canillo, Soldeu.
Facts from Catalan/English Wikipedia (Meritxell/Bofill, Caselles altarpiece, Pal BIC 2003, Anyós 1,310 m, Casa Rull,
Engolasters 1,504 m and lake 17 m deep, Madriu UNESCO, Incles, Juclar 2,300 m / 21.3 ha, Palau de Gel).
Reuses the batch-3 writer (add_daytrip_places3.main); afterwards countries.ts cityIds are reordered by valley. Run once."""
import json
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

FREE = '무료입니다.|Free.'
SUMMER = '눈이 녹은 여름철(대략 6~10월)에 걷습니다.|Walked in summer once the snow has gone (roughly June–October).'
SKI = '스키 시즌은 대략 12월부터 4월까지입니다.|The ski season runs roughly December to April.'
LEU = ("      [\"Andorra–La Seu d'Urgell (LEU)\", '안도라–라 세우 두르젤 공항 (LEU)', '스페인 라 세우 두르젤 · 마드리드·팔마행 주 2회|La Seu d’Urgell, Spain · Madrid and Palma twice a week'],\n"
       "      BCN('스페인 바르셀로나|Barcelona, Spain'),\n"
       "      ['Toulouse–Blagnac (TLS)', '툴루즈 블라냑 공항 (TLS)', '프랑스 툴루즈|Toulouse, France'],\n")
HUBS = "    air: [\n" + LEU + "    ],\n    bus: [[\"Estació Nacional d'Autobusos\", '안도라 국립 버스터미널', '안도라라베야|Andorra la Vella']],\n"
COMMON = dict(hubs_file='hubs-central.ts', hubs_before='  // —— pt ——\n', itin_file='itinerary-iberia.ts',
              itin_before='  ordino: { days:', visit_file='visit-iberia.ts',
              visit_after=r"^  '(?:ordino|escaldes-engordany|la-massana|canillo|soldeu)-h\d+': v\(.*\),\n",
              stay_before='  vaduz: [', apps="      ta('alsa'),\n", transit_before='  // —— it ——\n', places=None, daytrips=[])
LAST = r"^  r\('andorra-la-vella', 'ordino', 'bus', 20\),\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


def R(a, b, m):
    return ('routes-central.ts', LAST, f"  r('{a}', '{b}', 'bus', {m}),\n")


CITIES = [
    dict(COMMON, country='ad', id='escaldes-engordany', after='andorra-la-vella', ko='에스칼데스엥고르다니', en='Escaldes-Engordany',
         native='Escaldes-Engordany', lat=42.5086, lng=1.5389,
         blurb=['안도라라베야와 강 하나를 사이에 두고 붙어 있는 시가지로, 칼데아 온천과 카를레마니 거리 상점가가 있는 쇼핑·휴양 중심입니다. 뒷산엔 로마네스크 성당 산 미겔 데 엥골라스테르스와 빙하호가 있고, 유네스코 세계유산 마드리우-페라피타-클라로르 계곡도 이곳에서 걸어 들어갑니다.',
                'A town joined to Andorra la Vella across the river, the country’s shopping and spa centre with Caldea and the shops of Avinguda Carlemany. On the slopes above are the Romanesque church of Sant Miquel d’Engolasters and a glacial lake, and the UNESCO-listed Madriu-Perafita-Claror valley is entered on foot from here.'],
         highlights=[
             H('카를레마니 거리', 'Avinguda Carlemany', '안도라라베야의 메리체이 거리에서 이어지는 에스칼데스의 큰 쇼핑 거리로, 세금이 낮아 시계·화장품·전자제품 상점과 백화점이 늘어서 있습니다.', 'Escaldes’ main shopping street, continuing from Andorra la Vella’s Avinguda Meritxell, lined with low-tax watch, cosmetics and electronics shops and department stores.', 'Avinguda Carlemany Escaldes-Engordany', 60, 90, b='no'),
             H('산 미겔 데 엥골라스테르스 성당', 'Sant Miquel d’Engolasters', '해발 1,504m 언덕에서 안도라 골짜기를 내려다보는 로마네스크 성당으로, 롬바르디아식 종탑이 우뚝합니다. 2003년 최고 등급 문화재로 지정됐습니다.', 'A Romanesque church at 1,504 m looking down over the Andorran valley, with a tall Lombard bell tower; listed in 2003 in the highest heritage category.', "Sant Miquel d'Engolasters", 15, 20, b='no'),
             H('엥골라스테르스 호수', 'Engolasters Lake', '산비탈에 걸린 깊이 17m의 빙하호로, 둘레를 걷는 산책로에서 안도라라베야 쪽 골짜기가 내려다보입니다. 행정상 엔캄프 소속이지만 엥골라스테르스 마을 바로 위에 있습니다.', 'A 17 m-deep glacial lake hanging on the hillside, with a path around it looking down towards Andorra la Vella. It belongs to Encamp but sits just above the hamlet of Engolasters.', "Estany d'Engolasters", 60, 90, b='no', n=FREE),
             H('마드리우-페라피타-클라로르 계곡', 'Madriu-Perafita-Claror Valley', '2004년 유네스코 세계유산에 오른 빙하 계곡으로 나라 면적의 약 9%를 차지합니다. 도로가 없어 걸어서만 들어가며, 돌담과 목동 오두막 같은 옛 산간 생활의 흔적이 남아 있습니다.', 'A glacial valley listed by UNESCO in 2004, covering about 9% of the country. With no roads it is entered only on foot, past dry-stone walls and shepherds’ huts from centuries of mountain life.', 'Vall del Madriu-Perafita-Claror', 180, 360, b='no', n=SUMMER),
         ],
         hubs="    air: [\n" + LEU + "    ],\n    rail: [[\"L'Hospitalet-près-l'Andorre\", '로스피탈레 프레 랑도르역', '프랑스 · 안도라엔 철도 없음|France · no railway in Andorra']],\n    bus: [[\"Estació Nacional d'Autobusos\", '안도라 국립 버스터미널', '안도라라베야|Andorra la Vella']],\n",
         itinerary={'days': [['', 1, 2, 3]], 'trips': [['마드리우 계곡|Madriu valley', 4]]},
         season='쇼핑·온천은 사계절 좋고, 마드리우 계곡 산행은 6~10월이 알맞습니다.|Shopping and the spa work year-round; walk the Madriu valley June–October.',
         stay=[('에스칼데스 중심', 'Escaldes centre', 'Avinguda Carlemany, Escaldes-Engordany', '쇼핑·온천|Shopping, spa', '칼데아 온천과 카를레마니 거리 사이로, 안도라라베야 구시가까지 걸어갈 수 있습니다.|Between Caldea and Avinguda Carlemany, within walking distance of Andorra la Vella’s old quarter.')],
         routes=[R('andorra-la-vella', 'escaldes-engordany', 10)],
         transit=dict(modes=['bus', 'taxi', 'walk'], ko='안도라라베야와 붙어 있어 걸어서 오갈 수 있습니다. 엥골라스테르스는 차나 택시가 편합니다.', en='It runs into Andorra la Vella, so you can walk between them; Engolasters is easiest by car or taxi.')),
    dict(COMMON, country='ad', id='la-massana', after='escaldes-engordany', ko='라 마사나', en='La Massana', native='La Massana',
         lat=42.5450, lng=1.5150,
         blurb=['안도라라베야 북쪽 계곡의 마을로, 오르디노와 아린살로 길이 갈라지는 길목입니다. 돌집 마을 팔, 17세기 가옥 박물관 카사 룰, 로마네스크 성당들이 흩어져 있고, 겨울엔 팔-아린살 스키장, 여름엔 안도라 최고봉 코마페드로사 산행의 거점이 됩니다.',
                'A valley town north of Andorra la Vella where the roads to Ordino and Arinsal part. The stone village of Pal, the 17th-century Casa Rull house museum and Romanesque churches are scattered around, with the Pal-Arinsal ski area in winter and hikes up Comapedrosa, Andorra’s highest peak, in summer.'],
         highlights=[
             H('팔 마을과 산 클레멘트 성당', 'Pal & Sant Climent', '돌집이 비탈에 모인 산마을로, 마을 위에 2003년 최고 등급 문화재로 지정된 로마네스크 성당 산 클레멘트가 있습니다.', 'A mountain village of stone houses on the slope, topped by the Romanesque church of Sant Climent, listed in 2003 in the highest heritage category.', 'Sant Climent de Pal', 45, 60, b='no', n=FREE),
             H('산 크리스토폴 다니오스 성당', 'Sant Cristòfol d’Anyós', '아니오스 고원 끝 절벽 위(해발 약 1,310m)에 선 작은 로마네스크 성당으로, 16세기에 본당을 늘렸습니다.', 'A small Romanesque church on a cliff at the end of the Anyós plateau (about 1,310 m), its nave lengthened in the 16th century.', "Sant Cristòfol d'Anyós", 15, 20, b='no'),
             H('카사 룰', 'Casa Rull', '시스포니 마을의 17세기 집을 19세기~20세기 초 안도라 부농 가족의 살림 그대로 꾸민 박물관입니다.', 'A 17th-century house in Sispony furnished as the home of a well-off Andorran family of the 19th and early 20th centuries.', 'Museu Casa Rull Sispony', 40, 60),
             H('팔-아린살 스키장', 'Pal-Arinsal ski area', '팔과 아린살 두 마을 위로 펼쳐진 스키장으로, 두 구역이 케이블카로 이어지고 라 마사나 시내에서 곤돌라로 올라갈 수 있습니다.', 'A ski area above the villages of Pal and Arinsal, the two sectors linked by cable car, reached by gondola from La Massana.', 'Pal Arinsal ski resort', 240, 420, n=SKI),
             H('코마페드로사 자연공원', 'Comapedrosa Natural Park', '안도라 최고봉 코마페드로사(2,942m)를 품은 자연공원으로, 아린살에서 산길이 시작됩니다.', 'The natural park around Comapedrosa (2,942 m), Andorra’s highest peak, with trails starting from Arinsal.', 'Parc Natural Comunal de les Valls del Comapedrosa', 240, 480, b='no', n=SUMMER),
         ],
         hubs=HUBS,
         itinerary={'days': [['', 1, 2, 3]], 'trips': [['팔-아린살 스키장|Pal-Arinsal', 4], ['코마페드로사|Comapedrosa', 5]]},
         season='12~4월은 스키, 6~10월은 산행에 좋습니다.|December–April for skiing, June–October for hiking.',
         stay=[('라 마사나 중심', 'La Massana centre', 'La Massana, Andorra', '스키·산행|Skiing, hiking', '스키장 곤돌라가 출발하고 오르디노·아린살 버스가 지나는 마을 중심입니다.|The village centre where the ski gondola starts and buses for Ordino and Arinsal pass.')],
         routes=[R('andorra-la-vella', 'la-massana', 15), R('la-massana', 'ordino', 10)],
         transit=dict(modes=['bus', 'taxi', 'walk'], ko='안도라라베야와 버스로 이어지고, 팔·아린살·시스포니도 버스나 차로 갑니다.', en='Buses link it with Andorra la Vella; Pal, Arinsal and Sispony are reached by bus or car.')),
    dict(COMMON, country='ad', id='canillo', after='ordino', ko='카니요', en='Canillo', native='Canillo', lat=42.5667, lng=1.5978,
         blurb=['동쪽 계곡 중간의 마을로, 안도라에서 면적이 가장 큰 행정구(파로키아)의 중심입니다. 나라의 수호 성지 메리체이 성모 성당과 11~12세기 로마네스크 성당 산 조안 데 카셀레스가 있고, 절벽 전망대 로크 델 케르와 아이스링크도 마을 가까이에 있습니다. 그란발리라 스키장으로 오르는 곤돌라가 마을에서 출발합니다.',
                'A village halfway up the eastern valley, seat of Andorra’s largest parish. It has the Sanctuary of Meritxell, the national shrine, and the 11th–12th-century Romanesque church of Sant Joan de Caselles, with the Roc del Quer cliff viewpoint and an ice rink close by. A gondola climbs from the village into Grandvalira.'],
         highlights=[
             H('메리체이 성모 성당', 'Sanctuary of Meritxell', '안도라의 수호성인 메리체이 성모를 모시는 성지로, 1972년 불탄 옛 성당 옆에 건축가 리카르도 보필이 새 성당을 지었습니다. 해마다 9월 8일 국경일에 순례 행사가 열립니다.', 'The shrine of Our Lady of Meritxell, Andorra’s patron, rebuilt by the architect Ricardo Bofill beside the old church that burned in 1972. A pilgrimage is held every 8 September, the national day.', 'Santuari de Meritxell', 30, 45, b='no', n=FREE),
             H('산 조안 데 카셀레스 성당', 'Sant Joan de Caselles', '11~12세기 로마네스크 성당으로, 사도 요한의 생애와 순교를 그린 16세기 제단화가 뛰어납니다.', 'An 11th–12th-century Romanesque church whose 16th-century altarpiece of the life and martyrdom of St John is of exceptional quality.', 'Sant Joan de Caselles', 15, 20),
             H('로크 델 케르 전망대', 'Roc del Quer viewpoint', '절벽 밖으로 길게 뻗은 보행 다리 끝에서 계곡과 카니요 마을을 내려다보는 전망대입니다.', 'A walkway jutting out from the cliff, looking down over the valley and Canillo.', 'Mirador Roc del Quer Canillo', 20, 30, b='no', n=FREE),

         ],
         hubs=HUBS,
         itinerary={'days': [['', 1, 3, 2]]},
         season='12~4월은 스키, 9월 8일엔 메리체이 순례가 있습니다.|December–April for skiing; the Meritxell pilgrimage is on 8 September.',
         stay=[('카니요 마을', 'Canillo village', 'Canillo, Andorra', '스키·조용한 숙소|Skiing, quiet base', '스키장 곤돌라가 마을에서 출발하고 안도라라베야까지 버스로 오갑니다.|The ski gondola leaves from the village, with buses to Andorra la Vella.')],
         routes=[R('andorra-la-vella', 'canillo', 30)],
         transit=dict(modes=['bus', 'taxi', 'walk'], ko='마을 안은 걸어 다니고, 메리체이·로크 델 케르는 버스나 차로 갑니다.', en='Walk around the village; take a bus or car to Meritxell and Roc del Quer.')),
    dict(COMMON, country='ad', id='soldeu', after='canillo', ko='솔데우', en='Soldeu', native='Soldeu', lat=42.5768, lng=1.6678,
         blurb=['해발 약 1,800m의 스키 마을로, 그란발리라 스키장 솔데우-엘 타르테르 구역의 중심입니다. 겨울엔 마을에서 곤돌라로 슬로프에 오르고, 여름엔 바로 옆 인클레스 계곡에서 안도라에서 가장 큰 호수 후클라르까지 걷습니다. 행정상 카니요에 속합니다.',
                'A ski village at about 1,800 m, the heart of Grandvalira’s Soldeu–El Tarter sector. In winter a gondola lifts you straight to the slopes; in summer the Incles valley next door leads up to Juclar, Andorra’s largest lake. It belongs to the parish of Canillo.'],
         highlights=[
             H('그란발리라 솔데우 구역', 'Grandvalira Soldeu', '마을에서 곤돌라로 오르는 그란발리라 스키장 구역으로, 파스 데 라 카사 쪽 슬로프까지 이어집니다.', 'The Grandvalira sector reached by gondola from the village, linked across to the slopes above Pas de la Casa.', 'Grandvalira Soldeu', 240, 420, s='https://www.grandvalira.com/en', n=SKI),
             H('인클레스 계곡', 'Incles valley', '솔데우와 엘 타르테르 사이로 들어가는 빙하 계곡으로, 좁은 길로 일부까지 차로 갈 수 있고 경치가 아름답습니다.', 'A glacial valley entered between Soldeu and El Tarter, partly reachable by a narrow road and known for its scenery.', "Vall d'Incles", 60, 120, b='no', n=FREE),
             H('후클라르 호수', 'Juclar lakes', '해발 2,300m에 있는 안도라에서 가장 큰 호수(21.3ha)로 두 호수로 이뤄집니다. 인클레스 계곡에서 걸어 올라가며 옆에 산장이 있습니다.', 'At 2,300 m, Andorra’s largest lake (21.3 ha), made up of two basins; reached on foot from the Incles valley, with a mountain refuge beside it.', 'Estany de Juclar', 240, 300, b='no', n=SUMMER),
         ],
         hubs="    air: [\n" + LEU + "    ],\n    rail: [[\"L'Hospitalet-près-l'Andorre\", '로스피탈레 프레 랑도르역', '프랑스 · 안도라엔 철도 없음|France · no railway in Andorra']],\n",
         itinerary={'days': [['', 1]], 'trips': [['인클레스·후클라르|Incles & Juclar', 2, 3]]},
         season='12~4월은 스키, 7~9월은 후클라르 호수 산행에 좋습니다.|December–April for skiing, July–September for the Juclar hike.',
         stay=[('솔데우 마을', 'Soldeu village', 'Soldeu, Andorra', '스키|Skiing', '곤돌라 승강장 가까이에 호텔이 모여 있어 스키 타기에 편합니다.|Hotels cluster near the gondola station, handy for skiing.')],
         routes=[R('canillo', 'soldeu', 15), R('soldeu', 'pas-de-la-casa', 25)],
         transit=dict(modes=['bus', 'taxi', 'walk'], ko='마을은 걸어서 다니고, 안도라라베야·카니요까지 버스로 이어집니다.', en='Walk around the village; buses run to Canillo and Andorra la Vella.')),
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
    s = re.sub(r"cityIds: \[[^\]]*'andorra-la-vella'[^\]]*\]",
               "cityIds: ['andorra-la-vella', 'escaldes-engordany', 'la-massana', 'ordino', 'canillo', 'soldeu', 'pas-de-la-casa']", s)
    wr('countries.ts', s)
