#!/usr/bin/env python3
"""Türkiye step 1 (the eight existing cities), 2026-11-18, plan approved by the user (new cities in step 2).
Fixes: every blurb and one-line description, and wrong Korean names (Kordon, Kuğulu Park, Museum of Anatolian
Civilizations, Aspendos, Koza Han, Cumalıkızık, Uzungöl, Hierapolis museum). New sights: Istanbul 21 (grouped by
district, 4-day itinerary), Ankara 3, İzmir 4, Antalya 5, Göreme 2, Bursa 3, Pamukkale 3. Ephesus stays as an İzmir
day trip until Selçuk is added in step 2. Hours only where checked; the rest says to check locally. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
K_S = ('술탄아흐메트', 'Sultanahmet')
K_B = ('바자르·쉴레이마니예', 'Bazaars & Süleymaniye')
K_G = ('골든혼 서쪽 (페네르·발라트·에위프)', 'Golden Horn west (Fener, Balat, Eyüp)')
K_BY = ('갈라타·베이올루', 'Galata & Beyoğlu')
K_BO = ('보스포루스 해안', 'Bosphorus shore')
K_A = ('아시아 쪽 (위스퀴다르·카드쾨이)', 'Asian side (Üsküdar, Kadıköy)')
MOSQUE = '예배 시간에는 관광 입장이 안 됩니다. 신발을 벗고 어깨와 무릎을 가리며 여성은 머리를 가립니다.|Closed to visitors during prayers; remove shoes, cover shoulders and knees, and women cover their hair.'
MUZE = '문화관광부(muze.gov.tr)가 운영하는 유료 유적으로, 운영 시간은 계절에 따라 바뀝니다. 뮤지엄 패스를 쓸 수 있습니다.|A ticketed Ministry of Culture site (muze.gov.tr); hours change with the season. The Museum Pass is valid.'


def J2(a, b):
    return a.split('|')[0] + ' ' + b.split('|')[0] + '|' + a.split('|')[1] + ' ' + b.split('|')[1]


BLURB = {
 'istanbul': ('보스포루스 해협을 사이에 두고 유럽과 아시아에 걸친 도시. 술탄아흐메트의 아야소피아와 톱카프 궁전, 바자르와 쉴레이마니예 모스크, 갈라타와 베이올루의 거리, 해협의 궁전과 아시아 쪽 시장까지 비잔틴과 오스만의 1,600년이 겹쳐 있습니다.',
              'A city on both sides of the Bosphorus, in Europe and Asia, where 1,600 years of Byzantine and Ottoman history overlap: Hagia Sophia and Topkapı in Sultanahmet, the bazaars and the Süleymaniye, the streets of Galata and Beyoğlu, palaces on the strait and the markets of the Asian shore.'),
 'ankara': ('튀르키예 공화국의 수도. 아타튀르크 영묘 아느트카비르와 히타이트 유물로 이름난 아나톨리아 문명 박물관, 언덕 위 성채와 오스만 골목이 볼거리입니다.',
            'The capital of the Turkish Republic, with Atatürk’s mausoleum Anıtkabir, the Museum of Anatolian Civilizations famous for its Hittite finds, and the hilltop citadel with its Ottoman lanes.'),
 'izmir': ('에게해의 항구 도시. 바닷가 산책로 코르돈과 시계탑, 케메랄트 시장과 고대 스미르나 아고라가 시내에 있고, 근교의 에페소스와 페르가몬, 체슈메 해변으로 다녀옵니다.',
           'An Aegean port with the Kordon seafront, the clock tower, the Kemeraltı bazaar and the ancient Agora of Smyrna in town, and day trips to Ephesus, Pergamon and the beaches of Çeşme.'),
 'antalya': ('지중해 해안의 중심 도시. 성벽 안 옛 항구 마을 칼레이치와 하드리아누스 문, 바다로 떨어지는 두덴 폭포가 있고, 근교에 아스펜도스 극장과 페르게, 시데 같은 고대 도시가 이어집니다.',
             'The main city of the Mediterranean coast, with the walled harbour quarter of Kaleiçi, Hadrian’s Gate and the Düden falls dropping into the sea, and ancient cities such as Aspendos, Perge and Side nearby.'),
 'goreme': ('카파도키아 여행의 거점 마을. 새벽 열기구와 바위를 깎은 교회의 야외 박물관, 요정 굴뚝 계곡과 지하 도시를 다니며, 동굴을 고친 숙소에서 묵습니다.',
            'The base village for Cappadocia: dawn balloon flights, the rock-cut churches of the open-air museum, valleys of fairy chimneys and underground cities, with nights in converted cave hotels.'),
 'bursa': ('오스만 제국의 첫 수도. 스무 개 돔의 울루 모스크와 초록 타일의 예실 영묘, 비단 상인의 코자 한이 시내에 있고, 울루다으산과 옛 마을 주말르크즈크로 다녀옵니다.',
           'The first Ottoman capital, with the twenty-domed Grand Mosque, the green-tiled Green Tomb and the silk traders’ Koza Han in town, and trips up Mount Uludağ and to the old village of Cumalıkızık.'),
 'trabzon': ('흑해 동부의 항구 도시. 13세기 아야소피아와 보즈테페 전망대가 시내에 있고, 산 절벽에 붙은 수멜라 수도원과 호수 마을 우준괼로 다녀옵니다.',
             'An eastern Black Sea port with the 13th-century Hagia Sophia and the Boztepe viewpoint in town, and trips to Sümela Monastery on its mountain cliff and the lake village of Uzungöl.'),
 'pamukkale': ('하얀 석회 계단 연못으로 유명한 마을. 언덕 위 고대 온천 도시 히에라폴리스와 클레오파트라 온천이 함께 세계유산이고, 근교에 라오디케아와 아프로디시아스 유적이 있습니다.',
               'The village of white travertine terraces; on the hill above, the ancient spa city of Hierapolis and Cleopatra’s Pool share the World Heritage listing, with the ruins of Laodicea and Aphrodisias nearby.'),
}

REWRITE = {
 'istanbul-h1': (None, None, '537년 비잔틴 황제 유스티니아누스가 세운 대성당으로, 거대한 돔 아래 모자이크와 오스만 시대의 원형 현판이 함께 있습니다. 1934~2020년 박물관이었다가 지금은 모스크입니다.', 'The cathedral built by the Byzantine emperor Justinian in 537, where mosaics and huge Ottoman roundels share the space beneath the great dome; a museum from 1934 to 2020, it is now a mosque.'),
 'istanbul-h2': (None, None, '1616년 완공한 술탄아흐메트 모스크로, 여섯 개의 첨탑과 안을 덮은 푸른 이즈니크 타일 때문에 블루 모스크라 불립니다.', 'The Sultan Ahmed Mosque, finished in 1616, called the Blue Mosque for its six minarets and the blue İznik tiles lining the interior.'),
 'istanbul-h3': ('그랜드 바자르', None, '15세기에 시작한 지붕 덮인 시장으로, 60여 개 골목에 카펫·보석·도자기·향신료 가게 수천 곳이 들어서 있습니다.', 'A covered market begun in the 15th century, with thousands of shops selling carpets, jewellery, ceramics and spices along some sixty lanes.'),
 'istanbul-h4': ('보스포루스 유람선', None, '흑해와 마르마라해를 잇는 해협을 배로 오르내리며, 양쪽 기슭의 궁전과 요새, 목조 저택을 봅니다.', 'A boat trip up and down the strait linking the Black Sea and the Sea of Marmara, past palaces, fortresses and wooden mansions on both shores.'),
 'istanbul-h5': (None, None, '1348년 제노바인이 세운 돌탑으로, 꼭대기 전망대에서 골든혼과 구시가, 보스포루스가 한눈에 보입니다.', 'A stone tower built by the Genoese in 1348, whose top gallery looks over the Golden Horn, the old city and the Bosphorus.'),
 'istanbul-h6': ('톱카프 궁전', None, '15세기부터 400년 가까이 술탄이 살던 궁전으로, 네 개의 안뜰과 하렘, 보물관, 이즈니크 타일의 정자가 바다를 내려다봅니다.', 'Home of the sultans for nearly 400 years from the 15th century, with four courtyards, the Harem, the Treasury and İznik-tiled pavilions above the sea.'),
 'ankara-h1': ('아느트카비르', None, '튀르키예 공화국을 세운 아타튀르크의 영묘로, 언덕 위 기념 광장과 독립 전쟁 박물관이 있고 근위병 교대식을 봅니다.', 'The mausoleum of Atatürk, founder of the Turkish Republic, with a ceremonial square on a hill, a War of Independence museum and the changing of the guard.'),
 'ankara-h2': (None, None, '도시를 내려다보는 언덕 위 성채로, 성벽 안에 옛 집과 골동품 가게, 전망 카페가 모여 있습니다.', 'The citadel on the hill above the city, with old houses, antique shops and view cafés inside its walls.'),
 'ankara-h3': ('아나톨리아 문명 박물관', 'Museum of Anatolian Civilizations', '오스만 시대 시장 건물에 차린 박물관으로, 차탈회위크의 신석기 유물부터 히타이트와 프리기아 유물까지 아나톨리아의 고대사를 보여 줍니다.', 'A museum in an Ottoman market building covering Anatolia’s ancient past, from Neolithic finds at Çatalhöyük to Hittite and Phrygian treasures.'),
 'ankara-h4': ('쿠울루 공원', None, '백조가 노니는 작은 연못이 있는 도심 공원으로, 시민들의 약속 장소입니다.', 'A small city-centre park around a swan pond, a favourite meeting place.'),
 'ankara-h5': ('하마뫼뉘', 'Hamamönü', '오스만 시대 목조 가옥을 고친 골목 지구로, 찻집과 공예품 가게가 많습니다.', 'A quarter of restored Ottoman wooden houses with tea houses and craft shops.'),
 'izmir-h1': ('코르돈 산책로', None, '바닷가를 따라 몇 km 이어지는 산책로로, 해 질 녘 잔디밭과 카페에 사람들이 모입니다.', 'A seafront promenade running for several kilometres, where people gather on its lawns and cafés at sunset.'),
 'izmir-h2': ('스미르나 아고라', None, '2세기 로마 시대 고대 스미르나의 광장 유적으로, 기둥이 늘어선 회랑과 지하 아치 통로가 남아 있습니다.', 'The 2nd-century Roman square of ancient Smyrna, with a colonnade and vaulted basements still standing.'),
 'izmir-h3': ('이즈미르 시계탑', None, '1901년 술탄 압뒬하미트 2세 즉위 25주년에 세운 시계탑으로, 코낙 광장의 상징입니다.', 'The clock tower built in 1901 for the 25th anniversary of Sultan Abdülhamid II’s accession, the emblem of Konak Square.'),
 'izmir-h4': ('카디페칼레', None, '파고스산 꼭대기의 옛 성채로, 이즈미르만과 시내가 한눈에 보입니다.', 'The old fortress on top of Mount Pagos, with views over the city and the Gulf of İzmir.'),
 'izmir-h5': ('에페소스 (당일치기)', None, '로마 시대 아시아 속주의 수도로, 켈수스 도서관과 대극장, 대리석 거리가 남은 세계유산입니다.', 'Capital of the Roman province of Asia and a World Heritage Site, with the Library of Celsus, the Great Theatre and marble streets.'),
 'antalya-h1': (None, None, '로마 성벽 안의 옛 항구 마을로, 오스만 시대 목조 가옥 골목에 숙소와 식당이 모여 있고 아래쪽 항구에서 유람선이 뜹니다.', 'The old harbour quarter inside the Roman walls, with Ottoman wooden houses turned into guesthouses and restaurants, and boat trips from the harbour below.'),
 'antalya-h2': (None, None, '두덴강이 시 동쪽 라라 해안 절벽에서 바다로 곧장 떨어지는 폭포로, 위쪽 공원의 폭포와 함께 봅니다.', 'Where the Düden river drops straight off the cliffs at Lara into the sea; visit it together with the upper falls in their park.'),
 'antalya-h3': (None, None, '페르게에서 나온 대리석 신상과 석관이 가득한 고고학 박물관으로, 튀르키예에서 손꼽히는 규모입니다.', 'One of Türkiye’s largest archaeological museums, full of marble statues and sarcophagi from Perge.'),
 'antalya-h4': (None, None, '시 동쪽의 모래 해변으로, 대형 리조트 호텔이 늘어서 있습니다.', 'Sandy beaches east of the city, lined with large resort hotels.'),
 'antalya-h5': ('아스펜도스 극장', None, '2세기 로마 극장으로, 무대 건물까지 거의 온전히 남아 지금도 공연이 열립니다.', 'A 2nd-century Roman theatre preserved almost intact, stage building included, and still used for performances.'),
 'goreme-h1': (None, None, '해 뜰 무렵 수십 개의 열기구가 요정 굴뚝 계곡 위로 함께 떠오릅니다. 바람에 따라 당일 취소되기도 합니다.', 'At sunrise dozens of balloons rise together over the valleys of fairy chimneys; flights can be cancelled on the day because of wind.'),
 'goreme-h2': (None, None, '바위를 깎아 만든 10~12세기 교회와 수도원이 모인 세계유산으로, 어둠의 교회 벽화가 특히 선명합니다.', 'A World Heritage cluster of 10th–12th-century churches and monasteries cut into the rock; the frescoes of the Dark Church are especially vivid.'),
 'goreme-h3': (None, None, '높은 바위 기둥이 줄지어 선 계곡으로, 괴레메에서 걸어서 들어갑니다.', 'A valley of tall rock pillars, reached on foot from Göreme.'),
 'goreme-h4': ('우치히사르 성', None, '카파도키아에서 가장 높은 바위 성채로, 꼭대기에서 괴레메와 계곡들이 내려다보입니다.', 'The tallest rock citadel in Cappadocia, with views over Göreme and the valleys from the top.'),
 'goreme-h5': (None, None, '비잔틴 시대 사람들이 숨어 살던 여러 층의 지하 도시로, 데린쿠유와 카이마클르가 대표적입니다.', 'Multi-level underground cities where people sheltered in Byzantine times; Derinkuyu and Kaymaklı are the best known.'),
 'goreme-h6': (None, None, '머리가 여럿 달린 버섯 모양 요정 굴뚝이 모인 계곡으로, 은수자가 살던 바위 방이 있습니다.', 'A valley of mushroom-shaped fairy chimneys with several caps, with rock cells where hermits lived.'),
 'goreme-h7': (None, None, '분홍빛 바위 능선 사이로 걷는 계곡으로, 해 질 녘 전망대가 붐빕니다.', 'A walk between ridges of pinkish rock; the viewpoints fill up at sunset.'),
 'goreme-h8': (None, None, '크즐으르막강 기슭의 도자기 마을로, 공방에서 물레 시연을 봅니다.', 'A pottery town on the Kızılırmak river, where workshops give wheel demonstrations.'),
 'bursa-h1': ('울루 모스크', None, '1399년 완공한 초기 오스만 모스크로, 스무 개의 돔 아래 커다란 서예 판과 실내 분수가 있습니다.', 'An early Ottoman mosque finished in 1399, with great calligraphy panels and an indoor fountain beneath its twenty domes.'),
 'bursa-h2': ('예실 영묘와 예실 모스크', 'Green Tomb & Green Mosque', '술탄 메흐메트 1세의 영묘로, 안팎을 초록·청록 타일로 덮었고 길 건너 예실 모스크도 타일이 아름답습니다.', 'The tomb of Sultan Mehmed I, faced inside and out with green and turquoise tiles; the Green Mosque across the road is tiled just as beautifully.'),
 'bursa-h3': ('코자 한과 시장', 'Koza Han & bazaars', '1491년 지은 비단 상인의 숙소로, 안뜰 찻집 주변에 비단 가게가 있고 둘레로 지붕 덮인 시장이 이어집니다.', 'A silk traders’ inn of 1491, with silk shops around a courtyard tea garden and covered bazaars all around.'),
 'bursa-h4': ('울루다으산', None, '해발 2,500m가 넘는 산으로, 시내에서 긴 케이블카를 타고 올라 여름엔 걷고 겨울엔 스키를 탑니다.', 'A mountain over 2,500 m high, reached by a long cable car from the city, for walking in summer and skiing in winter.'),
 'bursa-h5': ('주말르크즈크', 'Cumalıkızık', '오스만 초기 모습이 남은 마을로, 돌길에 색칠한 목조 가옥과 마을 아침 식당이 있습니다(세계유산).', 'A village preserving its early Ottoman look, with painted wooden houses on cobbled lanes and village breakfast spots (World Heritage).'),
 'trabzon-h1': (None, None, '해발 약 1,200m 절벽에 매달리듯 지은 수도원으로, 바위 교회 안팎에 비잔틴 벽화가 남아 있습니다.', 'A monastery clinging to a cliff at about 1,200 m, with Byzantine frescoes inside and outside its rock church.'),
 'trabzon-h2': (None, None, '13세기 트라브존 제국 때 지은 교회로, 성경 장면을 그린 벽화가 잘 남아 있고 지금은 모스크입니다.', 'A 13th-century church from the Empire of Trebizond with well-preserved biblical frescoes, now a mosque.'),
 'trabzon-h3': ('우준괼', None, '산 속 호숫가 마을로, 나무 집과 숲이 어우러진 풍경을 보러 갑니다.', 'A lakeside mountain village, visited for its wooden houses and forested scenery.'),
 'trabzon-h4': ('아타튀르크 별장', None, '숲 속의 흰 3층 저택으로, 아타튀르크가 머물던 방과 유품이 전시돼 있습니다.', 'A white three-storey mansion in the woods, with rooms and belongings from Atatürk’s stays.'),
 'trabzon-h5': ('보즈테페 전망대', None, '시내 뒤 언덕의 찻집 공원으로, 항구와 흑해가 내려다보입니다.', 'A tea-garden park on the hill behind town, looking over the harbour and the Black Sea.'),
 'pamukkale-h1': (None, None, '온천수에 녹은 석회가 쌓여 생긴 하얀 계단식 연못으로, 맨발로 걸어 오릅니다.', 'White terraced pools formed by lime deposited from the hot springs; you walk up them barefoot.'),
 'pamukkale-h2': (None, None, '석회 테라스 위의 고대 온천 도시로, 대규모 공동묘지와 성문, 대로가 남아 있습니다.', 'The ancient spa city above the terraces, with a vast necropolis, city gates and a main street.'),
 'pamukkale-h3': ('히에라폴리스 극장', None, '언덕 비탈에 지은 로마 극장으로, 무대 건물의 부조가 잘 남아 있습니다.', 'A Roman theatre built into the hillside, with well-preserved reliefs on its stage building.'),
 'pamukkale-h4': ('클레오파트라 온천', None, '무너진 고대 기둥이 물속에 잠긴 온천 수영장으로, 별도 요금을 내고 들어갑니다.', 'A thermal pool where fallen ancient columns lie under the water; entry costs extra.'),
 'pamukkale-h5': ('히에라폴리스 고고학 박물관', None, '옛 로마 목욕탕 건물에 차린 박물관으로, 히에라폴리스에서 나온 석관과 조각을 전시합니다.', 'A museum in the old Roman baths showing sarcophagi and sculpture from Hierapolis.'),
}

ADD = {
 'istanbul': [
  (7, S('예레바탄 지하 저수지', 'Basilica Cistern', '6세기 유스티니아누스 때 만든 지하 저수지로, 336개 기둥 사이로 조명이 비치고 메두사 머리 기둥 받침이 있습니다.', 'A 6th-century underground cistern from Justinian’s reign, with lit-up rows of 336 columns and two Medusa-head column bases.', 'Basilica Cistern Istanbul', 30, 45,
        n='유료이며 줄이 길어 이른 시간이 낫습니다.|Ticketed; queues are long, so go early.')),
  (8, S('히포드롬 (술탄아흐메트 광장)', 'Hippodrome (Sultanahmet Square)', '비잔틴 시대 전차 경기장 자리의 광장으로, 이집트 오벨리스크와 뱀 기둥, 독일 분수가 섭니다.', 'The square on the site of the Byzantine chariot-racing stadium, with the Egyptian Obelisk, the Serpent Column and the German Fountain.', 'Hippodrome of Constantinople', 15, 20)),
  (9, S('이스탄불 고고학 박물관', 'Istanbul Archaeology Museums', '톱카프 궁전 바깥뜰의 세 건물로 된 박물관으로, 알렉산드로스 석관과 고대 오리엔트 유물, 타일 정자가 있습니다.', 'Three buildings in Topkapı’s outer garden, with the Alexander Sarcophagus, Ancient Orient finds and the Tiled Kiosk.', 'Istanbul Archaeology Museums', 90, 120, n=MUZE)),
  (10, S('튀르크·이슬람 미술 박물관', 'Museum of Turkish and Islamic Arts', '히포드롬 옆 16세기 이브라힘 파샤 궁전에 차린 박물관으로, 옛 카펫 컬렉션이 세계적입니다.', 'A museum in the 16th-century Palace of İbrahim Pasha beside the Hippodrome, with a world-class collection of old carpets.', 'Museum of Turkish and Islamic Arts', 60, 90, n=MUZE)),
  (11, S('작은 아야소피아', 'Little Hagia Sophia', '아야소피아보다 조금 앞선 6세기 비잔틴 교회로, 지금은 조용한 모스크입니다.', 'A 6th-century Byzantine church slightly older than Hagia Sophia, now a quiet mosque.', 'Little Hagia Sophia Istanbul', 15, 20, n=MOSQUE)),
  (12, S('이집트 시장 (향신료 시장)', 'Spice Bazaar', '1660년대 지은 에미뇌뉘의 지붕 덮인 시장으로, 향신료와 로쿰, 말린 과일 가게가 늘어섭니다.', 'The covered market at Eminönü built in the 1660s, lined with stalls of spices, Turkish delight and dried fruit.', 'Spice Bazaar Istanbul', 30, 45, c='sun')),
  (13, S('쉴레이마니예 모스크', 'Süleymaniye Mosque', '건축가 미마르 시난이 1557년 완성한 술레이만 대제의 모스크로, 뒤뜰에서 골든혼이 내려다보이고 술탄의 영묘가 있습니다.', 'Süleyman the Magnificent’s mosque, completed in 1557 by the architect Mimar Sinan, with Golden Horn views from its terraces and the sultan’s tomb.', 'Süleymaniye Mosque', 45, 60, n=MOSQUE)),
  (14, S('뤼스템 파샤 모스크', 'Rüstem Pasha Mosque', '시장 골목 2층에 숨은 작은 모스크로, 안을 이즈니크 타일이 빈틈없이 덮고 있습니다.', 'A small mosque hidden above the market lanes, its interior covered wall to wall with İznik tiles.', 'Rüstem Pasha Mosque', 15, 20, n=MOSQUE)),
  (15, S('코라 (카리예 모스크)', 'Chora (Kariye Mosque)', '14세기 비잔틴 모자이크와 프레스코가 가장 잘 남은 옛 교회로, 지금은 모스크입니다.', 'A former church with the finest surviving 14th-century Byzantine mosaics and frescoes, now a mosque.', 'Kariye Mosque Istanbul', 30, 45,
        n='2024년 모스크로 다시 열렸습니다. 외국인 관광객은 유료로 들어가며 예배 시간엔 관람이 멈춥니다.|Reopened as a mosque in 2024; foreign visitors pay to enter and visits pause during prayers.')),
  (16, S('페네르와 발라트', 'Fener & Balat', '골든혼 기슭의 옛 그리스인·유대인 마을로, 알록달록한 집이 늘어선 비탈길과 그리스 정교 총대주교청, 붉은 벽돌 학교가 있습니다.', 'Former Greek and Jewish quarters on the Golden Horn, with steep lanes of colourful houses, the Ecumenical Patriarchate and a red-brick Greek school.', 'Balat Istanbul', 90, 120)),
  (17, S('에위프 술탄 모스크와 피에르 로티 언덕', 'Eyüp Sultan Mosque & Pierre Loti Hill', '이슬람 성지인 에위프 술탄 모스크를 보고 묘지 사이 길이나 케이블카로 언덕 찻집에 올라 골든혼을 내려다봅니다.', 'Visit the holy Eyüp Sultan Mosque, then walk up through the cemetery or take the cable car to the hilltop tea garden over the Golden Horn.', 'Pierre Loti Hill', 90, 120, n=MOSQUE)),
  (18, S('이스티클랄 거리와 탁심', 'İstiklal Avenue & Taksim', '탁심 광장에서 갈라타까지 1.4km 이어지는 보행자 거리로, 빨간 노면전차가 다니고 19세기 건물에 가게와 극장이 들어서 있습니다.', 'The 1.4 km pedestrian street from Taksim Square towards Galata, with a red heritage tram and shops and cinemas in 19th-century buildings.', 'Istiklal Avenue', 60, 90)),
  (19, S('페라 박물관', 'Pera Museum', '오스만 회화와 도자기 컬렉션이 있는 미술관으로, 오스만 함디 베이의 ‘거북이 조련사’가 대표작입니다.', 'An art museum with Orientalist paintings and Kütahya ceramics; its best-known work is Osman Hamdi Bey’s “The Tortoise Trainer”.', 'Pera Museum', 60, 90, c='mon')),
  (20, S('이스탄불 현대 미술관', 'Istanbul Modern', '카라쾨이 바닷가에 렌초 피아노가 설계해 2023년 새로 연 현대 미술관으로, 튀르키예 현대 미술과 사진을 전시합니다.', 'The modern art museum by the sea at Karaköy, reopened in 2023 in a building by Renzo Piano, showing Turkish modern art and photography.', 'Istanbul Modern', 90, 120, c='mon')),
  (21, S('갈라타 메블레비 수도장 박물관', 'Galata Mevlevi Lodge Museum', '15세기 메블레비 교단의 수도장으로, 팔각형 의식 홀에서 지금도 세마(회전 춤) 의식이 열립니다.', 'A 15th-century lodge of the Mevlevi order, whose octagonal hall still hosts sema (whirling) ceremonies.', 'Galata Mevlevihanesi', 30, 45, c='mon', n=MUZE)),
  (22, S('돌마바흐체 궁전', 'Dolmabahçe Palace', '1856년 보스포루스 기슭에 지은 유럽풍 궁전으로, 거대한 크리스털 샹들리에의 의식 홀과 아타튀르크가 숨진 방이 있습니다.', 'The European-style palace built on the Bosphorus in 1856, with a ceremonial hall under a vast crystal chandelier and the room where Atatürk died.', 'Dolmabahçe Palace', 90, 120, c='mon', b='rec', s='https://www.millisaraylar.gov.tr/',
        n='가이드 동반으로 정해진 구역을 돌며, 실내 사진 촬영은 제한됩니다.|Visits follow a set route, and indoor photography is restricted.')),
  (23, S('오르타쾨이 모스크', 'Ortaköy Mosque', '보스포루스 대교 바로 아래 물가의 19세기 바로크풍 모스크로, 광장 노점의 쿰피르(구운 감자)가 유명합니다.', 'A 19th-century Baroque-style mosque on the water right below the Bosphorus Bridge; the stalls on the square are known for kumpir (stuffed baked potato).', 'Ortaköy Mosque', 30, 45, n=MOSQUE)),
  (24, S('루멜리 히사르 요새', 'Rumeli Fortress', '1452년 메흐메트 2세가 콘스탄티노플 정복을 앞두고 넉 달 만에 쌓은 해협의 요새입니다.', 'The fortress Mehmed II built on the strait in four months in 1452, ahead of the conquest of Constantinople.', 'Rumeli Hisarı', 45, 60,
        n='운영 시간이 바뀌는 일이 잦으니 방문 전에 확인하세요.|Opening hours change often; check before you go.')),
  (25, S('카드쾨이 시장과 모다', 'Kadıköy market & Moda', '아시아 쪽 페리 선착장 앞의 먹자골목 시장과, 바닷가 산책로가 있는 모다 동네를 걷습니다.', 'Walk the food-market lanes by the ferry pier on the Asian side and on to the seaside promenade of Moda.', 'Kadıköy Çarşı', 120, 180)),
  (26, S('위스퀴다르와 크즈 탑', 'Üsküdar & Maiden’s Tower', '위스퀴다르 바닷가 모스크들을 보고, 해협의 작은 섬 위 크즈 탑(처녀의 탑)에 배로 건너갑니다.', 'See the waterfront mosques of Üsküdar and take a boat to the Maiden’s Tower on its islet in the strait.', 'Maiden’s Tower Istanbul', 60, 90,
        n='크즈 탑은 2023년 박물관으로 다시 열렸으며 유료입니다. 배는 살라자크와 카라쾨이에서 떠납니다.|The tower reopened as a museum in 2023 and is ticketed; boats leave from Salacak and Karaköy.')),
  (27, S('프린스 제도 (뷔위카다)', 'Princes’ Islands (Büyükada)', '마르마라해의 섬들로, 자동차가 없어 걷거나 자전거를 타고 목조 저택과 언덕 수도원을 돕니다.', 'Islands in the Sea of Marmara with no private cars; walk or cycle past wooden mansions up to the hilltop monastery.', 'Büyükada', 360, 480, group=DAY,
        n='카바타쉬·에미뇌뉘·보스탄즈에서 페리로 1~2시간 걸립니다.|1–2 hours by ferry from Kabataş, Eminönü or Bostancı.')),
 ],
 'ankara': [
  (6, S('하즈 바이람 모스크와 아우구스투스 신전', 'Hacı Bayram Mosque & Temple of Augustus', '15세기 모스크 바로 옆에 로마 황제 아우구스투스의 업적을 새긴 신전 벽이 남아 있습니다.', 'A 15th-century mosque right beside the walls of a Roman temple inscribed with the deeds of the emperor Augustus.', 'Hacı Bayram Veli Mosque', 30, 45, n=MOSQUE)),
  (7, S('라흐미 M. 코치 박물관', 'Rahmi M. Koç Museum', '성채 아래 옛 대상 숙소에 차린 산업·교통 박물관으로, 옛 자동차와 기계, 장난감이 있습니다.', 'An industry and transport museum in old caravanserais below the citadel, with vintage cars, machinery and toys.', 'Rahmi M. Koç Museum Ankara', 60, 90, c='mon')),
  (8, S('에림탄 고고학·예술 박물관', 'Erimtan Archaeology and Arts Museum', '성채 비탈의 현대식 박물관으로, 로마·비잔틴 시대 유물과 아나톨리아 장신구를 보기 좋게 전시합니다.', 'A modern museum on the citadel slope, with well-displayed Roman and Byzantine finds and Anatolian jewellery.', 'Erimtan Museum Ankara', 45, 60, c='mon')),
 ],
 'izmir': [
  (6, S('케메랄트 시장', 'Kemeraltı Bazaar', '코낙 광장 뒤로 이어지는 옛 시장 골목으로, 대상 숙소 크즐아으아으 한의 안뜰 찻집이 있습니다.', 'The old bazaar lanes behind Konak Square, with the courtyard tea garden of the Kızlarağası Han caravanserai.', 'Kemeraltı Bazaar', 60, 120, c='sun')),
  (7, S('아산쇠르 (엘리베이터)', 'Asansör', '1907년 절벽 아래 유대인 마을과 위쪽을 잇던 엘리베이터 탑으로, 꼭대기 테라스에서 만이 보입니다.', 'A lift tower of 1907 linking the old Jewish quarter below the cliff with the streets above, with bay views from its terrace.', 'Asansör İzmir', 20, 30)),
  (8, S('체슈메와 알라차트', 'Çeşme & Alaçatı', '반도 끝의 해변 마을로, 알라차트의 돌집 골목과 풍차, 체슈메 성과 해변을 다닙니다.', 'Resort towns at the tip of the peninsula: the stone lanes and windmills of Alaçatı, and Çeşme’s castle and beaches.', 'Alaçatı', 360, 480, group=DAY,
        n='이즈미르에서 서쪽 약 80km, 버스로 1시간 반쯤입니다.|About 80 km west of İzmir, roughly 1.5 hours by bus.')),
  (9, S('페르가몬 (베르가마)', 'Pergamon (Bergama)', '헬레니즘 왕국의 수도로, 산꼭대기 아크로폴리스의 가파른 극장과 트라야누스 신전, 아래쪽 의술의 성지 아스클레피온이 세계유산입니다.', 'Capital of a Hellenistic kingdom and a World Heritage Site, with the steep theatre and Temple of Trajan on the acropolis and the healing sanctuary of the Asclepion below.', 'Pergamon Acropolis', 180, 240, group=DAY,
        n=J2('이즈미르에서 북쪽 약 100km입니다. 아크로폴리스는 케이블카로 오릅니다.|About 100 km north of İzmir; a cable car goes up to the acropolis.', MUZE))),
 ],
 'antalya': [
  (6, S('하드리아누스 문', 'Hadrian’s Gate', '130년 하드리아누스 황제 방문을 기념한 세 개의 아치 문으로, 칼레이치로 들어가는 입구입니다.', 'The triple-arched gate built for Emperor Hadrian’s visit in 130, the way into Kaleiçi.', 'Hadrian’s Gate Antalya', 10, 15)),
  (7, S('이블리 미나레', 'Yivli Minaret', '13세기 셀주크 시대의 홈이 파인 벽돌 첨탑으로, 안탈리아의 상징입니다.', 'A fluted 13th-century Seljuk brick minaret, the emblem of Antalya.', 'Yivli Minaret Antalya', 10, 15)),
  (8, S('콘얄트 해변', 'Konyaaltı Beach', '시 서쪽으로 길게 이어지는 자갈 해변으로, 뒤로 산이 병풍처럼 섭니다.', 'A long pebble beach west of the city, backed by a wall of mountains.', 'Konyaaltı Beach', 120, 180)),
  (9, S('페르게', 'Perge', '고대 팜필리아의 도시 유적으로, 경기장과 성문, 가운데 수로가 흐르던 기둥 거리가 남아 있습니다.', 'The ruins of an ancient Pamphylian city, with a stadium, city gates and a colonnaded street with a water channel down its middle.', 'Perge Ancient City', 90, 120, group=DAY,
        n=J2('안탈리아에서 동쪽 약 18km, 트램과 택시로 갈 수 있습니다.|About 18 km east of Antalya, reachable by tram and taxi.', MUZE))),
  (10, S('시데', 'Side', '바닷가 반도의 고대 도시로, 아폴론 신전 기둥 뒤로 해가 지고 원형 극장과 성벽 사이에 마을이 있습니다.', 'An ancient city on a seaside peninsula, with sunsets behind the columns of the Temple of Apollo and a village among the theatre and walls.', 'Side Temple of Apollo', 240, 360, group=DAY,
        n='안탈리아에서 동쪽 약 75km, 아스펜도스와 함께 다녀오기 좋습니다.|About 75 km east of Antalya, easily combined with Aspendos.')),
 ],
 'goreme': [
  (9, S('으흘라라 계곡', 'Ihlara Valley', '깊은 협곡 바닥 개울을 따라 걷는 길로, 절벽에 바위 교회가 숨어 있고 끝에 셀리메 수도원이 있습니다.', 'A walk along the stream at the bottom of a deep gorge, with rock churches hidden in its walls and the Selime Monastery at the end.', 'Ihlara Valley', 180, 300, group=DAY,
        n=J2('괴레메에서 남서쪽 약 80km로, 그린 투어로 많이 갑니다.|About 80 km south-west of Göreme, often visited on the “Green Tour”.', MUZE))),
  (10, S('오르타히사르 성', 'Ortahisar Castle', '마을 한가운데 솟은 바위 성채로, 괴레메와 우치히사르 사이에 있습니다.', 'A rock citadel rising in the middle of its village, between Göreme and Uçhisar.', 'Ortahisar Castle', 30, 45)),
 ],
 'bursa': [
  (6, S('무라디예 단지', 'Muradiye Complex', '15세기 무라트 2세의 모스크와 정원 속 왕족 영묘들로, 영묘마다 타일과 그림 장식이 다릅니다.', 'The 15th-century mosque of Murad II and royal tombs set in a garden, each tomb decorated with its own tiles and paintings.', 'Muradiye Complex Bursa', 45, 60)),
  (7, S('오스만·오르한 영묘 (톱하네)', 'Tombs of Osman & Orhan (Tophane)', '오스만 제국을 세운 오스만 1세와 아들 오르한의 영묘가 있는 언덕 공원으로, 시계탑과 시내 전망이 있습니다.', 'The hilltop park with the tombs of Osman I, founder of the Ottoman state, and his son Orhan, beside a clock tower with city views.', 'Tombs of Osman and Orhan Bursa', 20, 30)),
  (8, S('이르간드 다리', 'Irgandı Bridge', '15세기에 지은 다리 위 시장으로, 다리 위 작은 가게들에서 공예품을 팝니다.', 'A 15th-century bridge with a market on it, its tiny shops selling crafts.', 'Irgandı Bridge', 15, 20)),
 ],
 'pamukkale': [
  (6, S('라오디케아', 'Laodicea', '요한계시록의 일곱 교회 가운데 하나가 있던 고대 도시로, 발굴과 복원이 활발해 기둥 거리와 극장이 되살아나고 있습니다.', 'An ancient city home to one of the Seven Churches of Revelation, where ongoing digs have restored colonnaded streets and theatres.', 'Laodicea on the Lycus', 90, 120, group=DAY,
        n=J2('파묵칼레에서 남쪽 약 10km입니다.|About 10 km south of Pamukkale.', MUZE))),
  (7, S('아프로디시아스', 'Aphrodisias', '대리석 조각으로 이름난 고대 도시로, 거대한 경기장과 테트라필론 문, 조각 박물관이 있는 세계유산입니다.', 'An ancient city famed for its marble sculpture and a World Heritage Site, with a huge stadium, the Tetrapylon gate and a sculpture museum.', 'Aphrodisias', 120, 180, group=DAY,
        n=J2('파묵칼레에서 서쪽 약 100km, 차로 1시간 반쯤입니다.|About 100 km west of Pamukkale, roughly 1.5 hours by car.', MUZE))),
  (8, S('카라하이트 붉은 온천', 'Karahayıt red springs', '철분 때문에 붉은빛을 띠는 온천수가 흘러내리는 옆 마을로, 온천 호텔이 모여 있습니다.', 'The neighbouring village where iron-rich hot water flows down in red-tinged streams, surrounded by spa hotels.', 'Karahayıt Red Water', 20, 30)),
 ],
}

IT = [
 ("  istanbul: {\n    days: [\n      ['술탄아흐메트|Sultanahmet', 6, 1, 2, 3],\n      ['갈라타와 보스포루스|Galata & the Bosphorus', 5, 4],\n    ],\n  },\n",
  "  istanbul: {\n    days: [\n      ['술탄아흐메트|Sultanahmet', 8, 1, 2, 7, 6],\n      ['바자르와 보스포루스|Bazaars & the Bosphorus', 3, 13, 14, 12, 4],\n      ['갈라타·베이올루와 해협|Galata, Beyoğlu & the strait', 20, 5, 21, 18, 22, 23],\n      ['골든혼 서쪽|Golden Horn west', 15, 16, 17],\n    ],\n    trips: [\n      ['아시아 쪽|Asian side', 26, 25],\n      ['프린스 제도|Princes’ Islands', 27],\n    ],\n  },\n"),
 ("  ankara: [1, 3, 2, 5, 4],\n",
  "  ankara: {\n    days: [\n      ['성채와 박물관|Citadel & museums', 5, 3, 2, 8, 7, 6],\n      ['아느트카비르|Anıtkabir', 1, 4],\n    ],\n  },\n"),
 ("  izmir: { days: [['', 3, 2, 4, 1]], trips: [['에페소스|Ephesus', 5]] },\n",
  "  izmir: {\n    days: [['', 3, 6, 2, 7, 4, 1]],\n    trips: [\n      ['에페소스|Ephesus', 5],\n      ['페르가몬|Pergamon', 9],\n      ['체슈메·알라차트|Çeşme & Alaçatı', 8],\n    ],\n  },\n"),
 ("  antalya: { days: [['', 1, 2, 4]], trips: [['아스펜도스|Aspendos', 5]] },\n",
  "  antalya: {\n    days: [\n      ['칼레이치|Kaleiçi', 6, 7, 1, 3, 8],\n      ['두덴 폭포와 라라|Düden & Lara', 2, 4],\n    ],\n    trips: [\n      ['아스펜도스·시데|Aspendos & Side', 5, 10],\n      ['페르게|Perge', 9],\n    ],\n  },\n"),
 ("      ['지하도시와 계곡|Underground city & valleys', 5, 4, 3, 7],\n    ],\n  },\n",
  "      ['지하도시와 계곡|Underground city & valleys', 5, 4, 10, 3, 7],\n    ],\n    trips: [['으흘라라 계곡|Ihlara Valley', 9]],\n  },\n"),
 ("  bursa: {\n    days: [['', 1, 3, 2]],\n",
  "  bursa: {\n    days: [['', 7, 1, 3, 8, 2, 6]],\n"),
 ("  pamukkale: [1, 4, 5, 3, 2],\n",
  "  pamukkale: {\n    days: [['', 1, 2, 3, 4, 5, 8]],\n    trips: [\n      ['라오디케아|Laodicea', 6],\n      ['아프로디시아스|Aphrodisias', 7],\n    ],\n  },\n"),
]

IST = [(8, K_S), (1, K_S), (2, K_S), (7, K_S), (6, K_S), (9, K_S), (10, K_S), (11, K_S),
       (3, K_B), (13, K_B), (14, K_B), (12, K_B),
       (15, K_G), (16, K_G), (17, K_G),
       (5, K_BY), (20, K_BY), (21, K_BY), (18, K_BY), (19, K_BY),
       (4, K_BO), (22, K_BO), (23, K_BO), (24, K_BO),
       (26, K_A), (25, K_A), (27, DAY)]
SMALL = ['ankara', 'izmir', 'antalya', 'goreme', 'bursa', 'trabzon', 'pamukkale']


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'id: "{cid}",')
        j = c.index('highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}',
                     f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j], flags=re.S)
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for hid, t in REWRITE.items():
        ko, en, dko, den = t[:4]
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko or en:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', blk)
            blk = blk.replace(m.group(0), f'name: {{ ko: "{ko or m.group(1)}", en: "{en or m.group(2)}" }}')
        blk2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        assert blk2 != blk, hid
        c = c[:i] + blk2 + c[j:]
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-east.ts')
    c = reorder(c, 'istanbul', IST)
    for cid in SMALL:
        by = blocks(c, cid)
        key = f"'{cid}'" if '-' in cid else cid
        m = re.search(rf"^  {re.escape(key)}: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
