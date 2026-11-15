#!/usr/bin/env python3
"""Lithuania review step 2 (2026-11-15, plan approved): Šiauliai, Palanga, Nida and Druskininkai as new cities.
Reuses the batch-3 writer (add_daytrip_places3.main); the Lithuania city groups are rewritten afterwards. Times are
rounded typical values. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='\n  // —— hr ——\n', itin_file='itinerary-north.ts',
              itin_before='  // Faroe Islands, Greenland', visit_file='visit-med.ts', visit_after=r"^  'klaipeda-h\d+': v\(.*\),\n",
              stay_before='  chisinau: [', apps='', transit_before='  // —— hr ——\n', places=None, daytrips=[], routes=[])
LAST = r"^  r\('kaunas', 'klaipeda', 'bus', 170\),\n"
VNO = "['Vilnius (VNO)', '빌뉴스 공항 (VNO)', '빌뉴스|Vilnius']"
PLQ = "['Palanga (PLQ)', '팔랑가 공항 (PLQ)', '팔랑가|Palanga']"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'lt'
    return d


def H(ko, en, dko, den, maps, mn, mx, n=None, group=None):
    v = dict(min=mn, max=mx)
    if n:
        v['n'] = n
    d = dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)
    if group:
        d['group'] = group
    return d


def R(*lines):
    return [('routes-east.ts', LAST, ''.join(lines))]


CITIES = [
    C(id='siauliai', after='klaipeda', ko='시아울랴이', en='Šiauliai', native='Šiauliai', lat=55.9349, lng=23.3137,
      blurb=['리투아니아 북부의 중심 도시로 ‘태양의 도시’라 불립니다. 북쪽 들판에 10만 개가 넘는 십자가가 꽂힌 십자가 언덕이 있고, 르네상스 대성당과 독특한 박물관들이 있습니다.',
             'The main city of northern Lithuania, nicknamed the ‘city of the sun’, with the Hill of Crosses and its more than 100,000 crosses in the fields to the north, a Renaissance cathedral and some unusual museums.'],
      highlights=[
          H('십자가 언덕', 'Hill of Crosses', '19세기부터 사람들이 십자가를 꽂아 온 작은 언덕으로, 소련 시절 여러 번 밀어 버렸지만 다시 채워져 지금은 10만 개가 넘습니다.', 'A small hill where people have planted crosses since the 19th century; bulldozed several times in the Soviet era, it filled up again and now holds more than 100,000.', 'Hill of Crosses', 45, 60,
            n='시아울랴이에서 북쪽으로 약 12km입니다. 시외버스에서 내려 약 2km 걷거나 택시로 갑니다.|About 12 km north of Šiauliai; walk about 2 km from the intercity bus stop or take a taxi.', group=DAY),
          H('성 베드로·바오로 대성당', 'Cathedral of St Peter and St Paul', '1625년 완성한 르네상스 성당으로, 약 70m 흰 첨탑이 시내 어디서나 보입니다.', 'A Renaissance church completed in 1625, its white spire of about 70 m visible across town.', 'Šiauliai Cathedral', 20, 30),
          H('해시계 광장', 'Sundial Square', '‘태양의 도시’를 상징하는 해시계 광장으로, 기둥 꼭대기에 황금빛 궁수 조각이 서 있습니다.', 'The sundial square that symbolises the ‘city of the sun’, with a golden archer statue on top of its column.', 'Sundial Square Šiauliai', 15, 20),
          H('하임 프렌켈 저택', 'Chaim Frenkel Villa', '1908년 가죽 공장 주인이 지은 아르누보 저택으로, 지금은 아우슈로스 박물관의 전시관입니다.', 'An Art Nouveau villa built in 1908 by a leather-factory owner, now a branch of the Aušros Museum.', 'Chaim Frenkel Villa', 45, 60),
          H('자전거 박물관', 'Bicycle Museum', '나무 바퀴 자전거부터 소련 시절 자전거까지 모은 박물관으로, 이 도시의 자전거 공장 역사도 다룹니다.', 'A museum of bicycles from wooden-wheeled machines to Soviet-era models, including the story of the city’s bicycle factory.', 'Šiauliai Bicycle Museum', 30, 45),
      ],
      hubs=f"    air: [{VNO}, RIX()],\n    rail: [['Šiaulių geležinkelio stotis', '시아울랴이역']],\n    bus: [['Šiaulių autobusų stotis', '시아울랴이 버스터미널']],\n",
      itinerary={'days': [['', 2, 3, 4, 5]], 'trips': [['십자가 언덕|Hill of Crosses', 1]]},
      season='5~9월이 둘러보기 좋습니다. 십자가 언덕은 사계절 언제든 갈 수 있습니다.|May to September is best; the Hill of Crosses can be visited all year.',
      stay=[('시내 중심', 'City centre', 'Šiauliai centre', '교통이 편한 곳|Convenient', '역과 버스터미널, 대성당이 걸어서 가깝습니다.|The station, bus station and cathedral are all within walking distance.')],
      routes=R("  r('vilnius', 'siauliai', 'train', 140),\n  r('kaunas', 'siauliai', 'bus', 120),\n  r('siauliai', 'klaipeda', 'train', 120),\n  r('riga', 'siauliai', 'bus', 150),\n"),
      transit=dict(modes=['walk', 'bus', 'train', 'taxi'], ko='시내는 걸어서 다니고, 십자가 언덕은 시외버스나 택시로 갑니다.', en='Walk the centre; take an intercity bus or a taxi to the Hill of Crosses.')),
    C(id='palanga', after='siauliai', ko='팔랑가', en='Palanga', native='Palanga', lat=55.9175, lng=21.0686,
      blurb=['리투아니아 최대의 해변 휴양지. 긴 모래 해변과 바다로 뻗은 해상 다리, 백작 가문의 궁전을 고친 호박 박물관과 넓은 식물원 공원이 있습니다.',
             'Lithuania’s biggest seaside resort, with a long sandy beach, a pier reaching out to sea, and an amber museum in a count’s palace set in a large botanical park.'],
      highlights=[
          H('팔랑가 호박 박물관', 'Palanga Amber Museum', '1897년 티슈케비치우스 백작 궁전에 들어선 박물관으로, 벌레가 갇힌 호박 등 수만 점의 호박을 봅니다.', 'A museum in the Tiškevičius counts’ palace of 1897, showing tens of thousands of pieces of amber, some with insects trapped inside.', 'Palanga Amber Museum', 60, 90),
          H('식물원 공원과 비루테 언덕', 'Botanical Park & Birutė Hill', '궁전을 둘러싼 넓은 공원으로, 숲 사이 언덕 위에 대공비 비루테 전설이 깃든 작은 예배당이 있습니다.', 'The large park around the palace, with a small chapel on a wooded hill tied to the legend of Grand Duchess Birutė.', 'Palanga Botanical Park', 60, 90),
          H('팔랑가 해상 다리', 'Palanga Pier', '바다로 약 470m 뻗은 나무 다리로, 해 질 녘이면 노을을 보러 사람들이 모입니다.', 'A wooden pier reaching about 470 m out to sea, where crowds gather to watch the sunset.', 'Palanga Pier', 20, 30),
          H('바사나비추스 거리', 'J. Basanavičius Street', '해상 다리로 이어지는 보행자 거리로, 여름엔 식당과 카페, 놀이 시설로 붐빕니다.', 'The pedestrian street leading to the pier, busy with restaurants, cafés and amusements in summer.', 'J. Basanavičiaus gatvė Palanga', 30, 60),
          H('팔랑가 해변', 'Palanga beach', '모래 언덕과 소나무 숲을 뒤로한 긴 하얀 모래 해변입니다.', 'A long white-sand beach backed by dunes and pine woods.', 'Palanga beach', 60, 180),
      ],
      hubs=f"    air: [{PLQ}],\n    bus: [['Palangos autobusų stotis', '팔랑가 버스터미널', '여객 철도 없음|no passenger railway']],\n",
      itinerary={'days': [['', 1, 2, 5, 4, 3]]},
      season='6~8월이 해수욕 철이고, 해 질 녘 해상 다리가 가장 좋습니다.|June to August is the beach season; the pier is best at sunset.',
      stay=[('바사나비추스 거리 주변', 'Around J. Basanavičius Street', 'J. Basanavičiaus gatvė Palanga', '걸어서 다 보기|Everything on foot', '해변과 해상 다리, 식당이 걸어서 가깝고 호박 박물관까지 15분 안팎입니다.|Close to the beach, pier and restaurants, about 15 minutes’ walk from the amber museum.')],
      routes=R("  r('klaipeda', 'palanga', 'bus', 35),\n  r('vilnius', 'palanga', 'bus', 270),\n"),
      transit=dict(modes=['walk', 'bus', 'bike', 'taxi'], ko='작은 휴양지라 걸어서 다니거나 자전거를 빌립니다. 클라이페다와는 버스로 오갑니다.', en='A small resort best on foot or by bike; buses link it with Klaipėda.')),
    C(id='nida', after='palanga', ko='니다', en='Nida', native='Nida', lat=55.3036, lng=21.0056,
      blurb=['쿠로니아 사주 남쪽 끝의 어촌 마을. 거대한 모래 언덕 파르니디스 사구와 푸른 목조 어부 집, 작가 토마스 만의 여름 별장이 있는 세계유산 마을입니다.',
             'A fishing village near the southern end of the Curonian Spit, with the great Parnidis Dune, blue wooden fishermen’s houses and the writer Thomas Mann’s summer house, inside the World Heritage Site.'],
      highlights=[
          H('파르니디스 사구', 'Parnidis Dune', '약 52m 높이의 모래 언덕으로, 꼭대기의 돌 해시계에서 석호와 사구 너머 러시아 쪽까지 내려다봅니다.', 'A sand dune about 52 m high; from the stone sundial on top, look over the lagoon and the dunes towards the Russian side.', 'Parnidis Dune', 60, 90),
          H('토마스 만 기념관', 'Thomas Mann Memorial Museum', '노벨상 작가 토마스 만이 1930~1932년 여름을 보낸 별장으로, 언덕 위에서 석호가 보입니다.', 'The summer house where the Nobel-winning writer Thomas Mann spent the summers of 1930–1932, with lagoon views from its hill.', 'Thomas Mann Memorial Museum Nida', 30, 45),
          H('니다 어촌 마을', 'Nida fishing village', '푸른 창틀의 목조 어부 집과 화려한 바람개비가 남은 석호 쪽 마을로, 어부 생활을 보여 주는 민속 가옥이 있습니다.', 'The lagoon-side village of wooden fishermen’s houses with blue window frames and colourful weathervanes, plus an ethnographic fisherman’s home.', 'Nida fishermen’s ethnographic homestead', 45, 60),
          H('니다 해변', 'Nida beach', '소나무 숲을 지나 사주 서쪽 발트해 쪽으로 나가는 넓은 모래 해변입니다.', 'A wide sandy beach on the Baltic side of the spit, reached through the pine woods.', 'Nida beach', 60, 180),
          H('마녀의 언덕', 'Hill of Witches', '유오드크란테 마을 숲속 오솔길에 리투아니아 민담 속 마녀와 악마를 새긴 나무 조각 수십 점이 서 있습니다.', 'A forest path in the village of Juodkrantė lined with dozens of wooden carvings of witches and devils from Lithuanian folk tales.', 'Hill of Witches Juodkrantė', 45, 60,
            n='니다에서 북쪽으로 약 30km, 클라이페다 방면 버스로 갑니다.|About 30 km north of Nida, on the bus towards Klaipėda.', group=DAY),
      ],
      hubs=f"    air: [{PLQ}],\n    bus: [['Nidos autobusų stotis', '니다 버스정류장', '클라이페다에서 페리 건너 버스|bus from Klaipėda via the ferry']],\n",
      itinerary={'days': [['', 3, 2, 1, 4]], 'trips': [['마녀의 언덕|Hill of Witches', 5]]},
      season='6~8월이 해수욕 철입니다. 차로 들어가면 국립공원 통행료를 냅니다.|June to August is the beach season; drivers pay a national park entry fee.',
      stay=[('니다 마을', 'Nida village', 'Nida', '걸어서 다 보기|Everything on foot', '석호 쪽 마을에 숙소가 모여 있고, 사구와 해변까지 걷거나 자전거로 갑니다.|Places to stay cluster in the lagoon-side village, with the dune and beach a walk or bike ride away.'),
            ('클라이페다에서 다녀오기', 'Base in Klaipėda', 'Klaipėda', '당일치기|Day trip', '페리와 버스로 약 1시간 15분이라 하루에 다녀올 수 있습니다.|About 1 hr 15 min by ferry and bus, so it works as a day trip.')],
      routes=R("  r('klaipeda', 'nida', 'bus', 75),\n"),
      transit=dict(modes=['walk', 'bus', 'bike', 'taxi'], ko='마을 안은 걸어서 다니고, 사구와 해변은 자전거를 빌려 다니기 좋습니다. 클라이페다에서 페리를 건너 버스로 옵니다.', en='Walk the village and hire a bike for the dunes and beach; reach it from Klaipėda by ferry and bus.')),
    C(id='druskininkai', after='nida', ko='드루스키닝카이', en='Druskininkai', native='Druskininkai', lat=54.0167, lng=23.9667,
      blurb=['네무나스강 굽이의 소나무 숲에 자리한 온천 휴양 도시. 소련 시절 동상을 모은 그루타스 공원과 화가 치우를료니스가 자란 집, 대형 아쿠아 파크가 있습니다.',
             'A spa town in pine woods on a bend of the Nemunas, with Grūtas Park and its Soviet-era statues, the house where the painter Čiurlionis grew up and a large water park.'],
      highlights=[
          H('치우를료니스 기념관', 'M. K. Čiurlionis Memorial Museum', '작곡가이자 화가 치우를료니스가 어린 시절을 보낸 집으로, 여름엔 정원에서 피아노 연주회가 열립니다.', 'The house where the composer and painter Čiurlionis spent his childhood, with piano recitals in the garden in summer.', 'M. K. Čiurlionis Memorial Museum Druskininkai', 45, 60),
          H('정교회 성당', 'Orthodox Church', '파란 지붕과 양파 돔의 목조 정교회 성당으로, 시내 중심 공원에 서 있습니다.', 'A wooden Orthodox church with blue roofs and onion domes in the central park.', 'Druskininkai Orthodox Church', 15, 20),
          H('네무나스 케이블카', 'Nemunas cable car', '시내에서 네무나스강을 건너 실내 스키장까지 가는 케이블카로, 강과 숲을 내려다봅니다.', 'A cable car from town across the Nemunas to the indoor ski centre, looking down over the river and forest.', 'Druskininkai cable car', 20, 30),
          H('드루스키닝카이 아쿠아 파크', 'Druskininkai Aquapark', '실내 물놀이장과 사우나를 갖춘 대형 워터파크로, 날씨와 상관없이 즐깁니다.', 'A large indoor water park with pools, slides and saunas, good whatever the weather.', 'Druskininkai Aquapark', 120, 240),
          H('그루타스 공원', 'Grūtas Park', '소련 시절 거리에서 철거한 레닌·스탈린 동상 등을 숲속에 모아 놓은 야외 박물관입니다.', 'An open-air museum gathering the Lenin, Stalin and other statues removed from streets after the Soviet era in a forest.', 'Grūtas Park', 90, 120,
            n='시내에서 약 8km 떨어져 있어 차나 택시로 갑니다.|About 8 km from town; go by car or taxi.', group=DAY),
      ],
      hubs=f"    air: [{VNO}],\n    bus: [['Druskininkų autobusų stotis', '드루스키닝카이 버스터미널', '여객 철도 없음|no passenger railway']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['그루타스 공원|Grūtas Park', 5]]},
      season='5~9월엔 강변 산책과 자전거가 좋고, 겨울엔 아쿠아 파크와 실내 스키장이 붐빕니다.|May to September for riverside walks and cycling; in winter the water park and indoor ski centre are busy.',
      stay=[('시내 중심과 강변', 'Centre & riverside', 'Druskininkai centre', '걸어서 다 보기|Everything on foot', '버스터미널과 공원, 아쿠아 파크, 케이블카가 걸어서 가깝습니다.|The bus station, park, water park and cable car are all within walking distance.')],
      routes=R("  r('vilnius', 'druskininkai', 'bus', 120),\n  r('kaunas', 'druskininkai', 'bus', 120),\n"),
      transit=dict(modes=['walk', 'bus', 'bike', 'taxi'], ko='작은 도시라 걸어서 다니거나 자전거를 빌립니다. 빌뉴스·카우나스와는 버스로 오갑니다.', en='A small town best on foot or by bike; buses link it with Vilnius and Kaunas.')),
]

LT_NEW = """    cityIds: ['vilnius', 'druskininkai', 'kaunas', 'siauliai', 'klaipeda', 'palanga', 'nida'],
    cityGroups: [
      { title: { ko: '빌뉴스·남동부', en: 'Vilnius & south-east' }, cityIds: ['vilnius', 'druskininkai'] },
      { title: { ko: '중부·북부', en: 'Centre & north' }, cityIds: ['kaunas', 'siauliai'] },
      { title: { ko: '해안', en: 'Coast' }, cityIds: ['klaipeda', 'palanga', 'nida'] },
    ],
"""


class J:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = J
    T.CITIES = CITIES
    T.main()
    k = rd('countries.ts')
    i = k.index("    id: 'lt',")
    j = k.index('    cityGroups: [', i)
    e = k.index('    ],\n', j) + len('    ],\n')
    s = k.index('    cityIds: [', i)
    assert s < j
    k = k[:s] + LT_NEW + k[e:]
    wr('countries.ts', k)
