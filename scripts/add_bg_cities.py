#!/usr/bin/env python3
"""Bulgaria review step 2 (2026-11-15, plan approved): Burgas, Sozopol, Bansko, Koprivshtitsa, Melnik, Kazanlak and
Ruse as new cities. Reuses the batch-3 writer (add_daytrip_places3.main); the Bulgaria city groups are rewritten
afterwards. Times are rounded typical values. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='\n  // —— ro ——\n', itin_file='itinerary-south.ts',
              itin_before='  bucharest: {', visit_file='visit-east.ts', visit_after=r"^  'nessebar-h\d+': v\(.*\),\n",
              stay_before='  sighisoara: [', apps='', transit_before='  // —— ro ——\n  bucharest: {', places=None,
              daytrips=[], routes=[])
LAST = r"^  r\('varna', 'veliko-tarnovo', 'bus', 195\),\n"
SOF = "['Sofia (SOF)', '소피아 공항 (SOF)', '소피아|Sofia']"
BOJ = "['Burgas (BOJ)', '부르가스 공항 (BOJ)']"
BOJ_VIA = "['Burgas (BOJ)', '부르가스 공항 (BOJ)', '부르가스|Burgas']"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'bg'
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
    C(id='burgas', after='nessebar', ko='부르가스', en='Burgas', native='Бургас', lat=42.5048, lng=27.4626,
      blurb=['불가리아 흑해 남부의 항구 도시이자 해안 휴양지로 가는 관문. 바다를 따라 긴 해변 공원과 다리가 있고, 보행자 거리와 성당이 있는 중심가에서 네세바르·소조폴로 버스가 다닙니다.',
             'The port city of Bulgaria’s southern Black Sea coast and the gateway to its resorts, with a long seaside park and pier, a pedestrian centre with its cathedral, and buses to Nessebar and Sozopol.'],
      highlights=[
          H('해변 공원', 'Sea Garden', '바다를 따라 수 km 이어지는 공원으로, 조각과 카지노 건물, 해변으로 내려가는 길이 있습니다.', 'A park running for several kilometres along the sea, with sculptures, the old casino building and paths down to the beach.', 'Sea Garden Burgas', 45, 90),
          H('부르가스 다리', 'Burgas Pier', '해변 공원 앞에서 바다로 뻗은 다리로, 해 질 녘 산책 명소입니다.', 'The pier reaching out to sea from the Sea Garden, a favourite spot for a sunset walk.', 'Burgas Pier', 15, 20),
          H('성 키릴·메토디 대성당', 'Cathedral of Sts Cyril and Methodius', '1907년 완성한 시내 중심의 정교회 대성당으로, 종탑과 색 유리창이 있습니다.', 'The Orthodox cathedral in the city centre, completed in 1907, with its bell tower and stained glass.', 'Cathedral of Saints Cyril and Methodius Burgas', 15, 20),
          H('알렉산드로프스카 거리', 'Aleksandrovska Street', '기차역에서 해변 공원까지 이어지는 보행자 거리로, 카페와 상점이 늘어섭니다.', 'The pedestrian street from the station to the Sea Garden, lined with cafés and shops.', 'Aleksandrovska Street Burgas', 30, 45),
          H('성 아나스타시아섬', 'St Anastasia Island', '항구에서 배로 가는 작은 바위섬으로, 옛 수도원과 등대, 약초 식당이 있습니다.', 'A small rocky island reached by boat from the port, with an old monastery, a lighthouse and a herbal restaurant.', 'St. Anastasia Island', 120, 180,
            n='여름철 부르가스 항구에서 배가 다니며 약 30분 걸립니다.|Boats run from Burgas port in summer, about 30 min.', group=DAY),
      ],
      hubs=f"    air: [{BOJ}],\n    rail: [['Burgas', '부르가스역']],\n    bus: [['Avtogara Yug Burgas', '부르가스 남부 버스터미널', '기차역 옆|next to the rail station']],\n",
      itinerary={'days': [['', 4, 3, 1, 2]], 'trips': [['성 아나스타시아섬|St Anastasia Island', 5]]},
      season='6~9월이 해변 철이고, 섬 배편도 여름에만 다닙니다.|June to September is the beach season, and the island boats run only in summer.',
      stay=[('중심가 (알렉산드로프스카 거리 주변)', 'Centre (Aleksandrovska Street)', 'Aleksandrovska Street Burgas', '걸어서 다 보기|Everything on foot', '기차역·버스터미널과 해변 공원이 걸어서 가깝습니다.|The station, bus station and Sea Garden are all within walking distance.')],
      routes=R("  r('sofia', 'burgas', 'flight', 50),\n  r('sofia', 'burgas', 'bus', 360),\n  r('burgas', 'nessebar', 'bus', 40),\n  r('burgas', 'varna', 'bus', 150),\n  r('plovdiv', 'burgas', 'bus', 240),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi', 'train'], ko='중심가는 걸어서 다니고, 공항과 해안 휴양지는 버스로 오갑니다.', en='Walk the centre; buses link the airport and the coastal resorts.')),
    C(id='sozopol', after='burgas', ko='소조폴', en='Sozopol', native='Созопол', lat=42.4178, lng=27.6953,
      blurb=['기원전 7세기 그리스 식민 도시에서 시작한 흑해의 작은 반도 마을. 나무로 덧댄 19세기 집들이 좁은 골목에 늘어서고, 성벽 아래로 바다가 보이며 여름엔 예술 축제가 열립니다.',
             'A small peninsula town on the Black Sea that began as a Greek colony in the 7th century BC, with timber-clad 19th-century houses along narrow lanes, sea views below its walls and an arts festival in summer.'],
      highlights=[
          H('구시가 반도', 'Old Town peninsula', '검은 나무 벽의 옛 집과 무화과나무가 늘어선 골목으로, 반도 끝까지 걸으면 바다가 사방에 보입니다.', 'Lanes of dark timber-clad houses and fig trees; walk to the tip of the peninsula for sea on three sides.', 'Sozopol Old Town', 60, 90),
          H('고고학 박물관', 'Archaeological Museum', '고대 그리스 도시 아폴로니아의 항아리와 닻, 중세 유물을 전시합니다.', 'Shows amphorae, anchors and medieval finds from the ancient Greek city of Apollonia.', 'Archaeological Museum Sozopol', 30, 45),
          H('남쪽 성벽과 탑', 'Southern Fortress Wall and Tower', '복원한 중세 성벽 구간과 탑으로, 안쪽 전시실과 바다 전망 테라스가 있습니다.', 'A restored stretch of medieval wall and tower, with exhibition rooms inside and a sea-view terrace.', 'Southern Fortress Wall and Tower Sozopol', 20, 30),
          H('성 키릴·메토디 교회', 'Church of Sts Cyril and Methodius', '2010년 근처 섬에서 발견된 세례자 요한의 것으로 전하는 유해를 모신 교회입니다.', 'The church holding relics said to be of John the Baptist, found on a nearby island in 2010.', 'Church of Saints Cyril and Methodius Sozopol', 15, 20),
          H('로포타모강', 'Ropotamo River', '갈대와 숲 사이로 흐르는 강을 배로 거슬러 오르는 자연 보호 구역입니다.', 'A nature reserve where boats head upriver between reeds and forest.', 'Ropotamo Reserve', 90, 120,
            n='소조폴에서 남쪽으로 약 15km, 차나 버스로 가서 배를 탑니다.|About 15 km south of Sozopol; go by car or bus, then take a boat.', group=DAY),
      ],
      hubs=f"    air: [{BOJ_VIA}],\n    bus: [['Avtogara Sozopol', '소조폴 버스터미널', '철도 없음|no railway']],\n",
      itinerary={'days': [['', 1, 3, 2, 4]], 'trips': [['로포타모강|Ropotamo River', 5]]},
      season='6~9월이 성수기이고, 9월 초 아폴로니아 예술 축제 때 가장 붐빕니다.|June to September is high season, busiest during the Apollonia arts festival in early September.',
      stay=[('구시가', 'Old town', 'Sozopol Old Town', '분위기|Atmosphere', '옛 집을 고친 게스트하우스가 많고 바다 전망 식당이 가깝습니다. 여름엔 일찍 찹니다.|Guesthouses in old houses, close to sea-view restaurants; books up early in summer.'),
            ('신시가 (하르마니 해변)', 'New town (Harmanite beach)', 'Harmanite Beach Sozopol', '해변|Beach', '모래 해변 옆 호텔이 많고 구시가까지 걸어서 15분쯤입니다.|Hotels beside the sandy beach, about 15 minutes’ walk from the old town.')],
      routes=R("  r('burgas', 'sozopol', 'bus', 40),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='작은 마을이라 걸어서 다니고, 부르가스와는 버스로 오갑니다.', en='A small town best on foot; buses link it with Burgas.')),
    C(id='bansko', after='sozopol', ko='반스코', en='Bansko', native='Банско', lat=41.8383, lng=23.4885,
      blurb=['피린 산맥 자락의 불가리아 최대 스키 휴양지. 돌담과 나무 발코니의 옛 집이 남은 구시가와 19세기 교회가 있고, 여름엔 피린 국립공원 산길로 가는 거점입니다.',
             'Bulgaria’s biggest ski resort, at the foot of the Pirin Mountains, with an old town of stone-walled, wooden-balconied houses and a 19th-century church; in summer the base for trails in Pirin National Park.'],
      highlights=[
          H('반스코 구시가와 벨랴노바 집', 'Old town and Velyanova House', '두꺼운 돌담 뒤에 숨은 18~19세기 집들의 골목으로, 벨랴노바 집은 벽화와 나무 천장을 보여 줍니다.', 'Lanes of 18th–19th-century houses hidden behind thick stone walls; Velyanova House shows painted walls and carved ceilings.', 'Velyanova House Bansko', 45, 60),
          H('성 삼위일체 교회', 'Holy Trinity Church', '1835년 지은 큰 교회로, 돌담 안뜰에 약 30m 종탑이 섭니다.', 'A large church of 1835, with a bell tower of about 30 m in its walled courtyard.', 'Holy Trinity Church Bansko', 15, 20),
          H('니콜라 바프차로프 생가', 'Nikola Vaptsarov House', '시인 니콜라 바프차로프가 태어난 집으로, 그의 삶과 작품을 전시합니다.', 'The birthplace of the poet Nikola Vaptsarov, with displays on his life and work.', 'Nikola Vaptsarov House Museum Bansko', 30, 45),
          H('반스코 곤돌라', 'Bansko Gondola', '마을에서 반데리시카 폴랴나 스키장까지 오르는 곤돌라로, 여름엔 산길 출발점이 됩니다.', 'The gondola from town up to the Banderishka Polyana ski area, a trailhead in summer.', 'Bansko Gondola', 60, 120,
            n='여름 운행 기간은 해마다 다르니 미리 확인하세요.|Summer opening dates vary each year, so check ahead.'),
          H('피린 국립공원·비흐렌', 'Pirin National Park & Vihren', '해발 2,914m 비흐렌봉과 빙하 호수가 있는 세계유산 국립공원으로, 비흐렌 산장에서 산길이 시작됩니다.', 'A World Heritage national park with the 2,914 m Vihren peak and glacial lakes; trails start from the Vihren hut.', 'Vihren hut', 240, 480,
            n='비흐렌 산장까지 차나 여름철 셔틀로 약 30분입니다.|About 30 min to the Vihren hut by car or summer shuttle.', group=DAY),
      ],
      hubs=f"    air: [{SOF}],\n    rail: [['Bansko', '반스코역', '셉템브리발 협궤 열차|narrow-gauge line from Septemvri']],\n    bus: [['Avtogara Bansko', '반스코 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['피린 국립공원|Pirin National Park', 5]]},
      season='12~3월이 스키 철이고, 7~9월엔 산길이 좋습니다. 봄·가을엔 문 닫는 곳이 많습니다.|December to March for skiing and July to September for hiking; many places close in spring and autumn.',
      stay=[('구시가 주변', 'Around the old town', 'Bansko old town', '식당·분위기|Restaurants, atmosphere', '전통 식당 메하나와 교회가 걸어서 가깝고 곤돌라까지 15분쯤입니다.|Close to the traditional mehana restaurants and the church, about 15 minutes’ walk from the gondola.'),
            ('곤돌라 주변', 'Near the gondola', 'Bansko Gondola', '스키|Skiing', '큰 스키 호텔이 모여 있어 아침 리프트 타기 편합니다.|The big ski hotels, handy for an early lift.')],
      routes=R("  r('sofia', 'bansko', 'bus', 180),\n  r('plovdiv', 'bansko', 'bus', 180),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 겨울엔 스키 셔틀이 곤돌라까지 다닙니다.', en='Walk the town; in winter ski shuttles run to the gondola.')),
    C(id='koprivshtitsa', after='bansko', ko='코프리브시티차', en='Koprivshtitsa', native='Копривщица', lat=42.6372, lng=24.3581,
      blurb=['스레드나고라 산속의 박물관 마을. 1876년 4월 봉기가 시작된 곳으로, 색색 벽과 나무 처마의 19세기 부흥기 저택이 수백 채 남아 있고 여섯 채가 박물관으로 열려 있습니다.',
             'A museum village in the Sredna Gora mountains where the April Uprising of 1876 began, with hundreds of colourful 19th-century Revival mansions, six of them open as museums.'],
      highlights=[
          H('오슬레코프 집', 'Oslekov House', '1856년 부유한 상인이 지은 저택으로, 외벽에 그린 도시 풍경과 화려한 응접실이 남아 있습니다.', 'A rich merchant’s mansion of 1856, with painted cityscapes on its façade and a lavish reception room.', 'Oslekov House Koprivshtitsa', 30, 45),
          H('류토프 집', 'Lyutov House', '1854년 지은 저택으로, 둥근 천장 그림과 펠트 깔개 전시가 있습니다.', 'A mansion of 1854, with painted ceilings and a display of felt rugs.', 'Lyutov House Koprivshtitsa', 20, 30),
          H('카블레슈코프 집', 'Kableshkov House', '4월 봉기를 이끈 토도르 카블레슈코프의 생가로, 봉기 이야기를 전시합니다.', 'The birthplace of Todor Kableshkov, a leader of the April Uprising, with displays on the revolt.', 'Kableshkov House Koprivshtitsa', 20, 30),
          H('성모 승천 교회', 'Church of the Assumption', '1817년 지은 교회로, 마을에서 가장 오래된 건물 가운데 하나이며 목각 성화벽이 있습니다.', 'A church of 1817, among the village’s oldest buildings, with a carved wooden iconostasis.', 'Church of the Assumption Koprivshtitsa', 15, 20),
          H('칼라체프 다리', 'Kalachev Bridge', '1876년 4월 봉기의 첫 총성이 울렸다고 전하는 작은 돌다리입니다.', 'The small stone bridge where the first shot of the April Uprising is said to have been fired in 1876.', 'Kalachev Bridge Koprivshtitsa', 10, 15),
      ],
      hubs=f"    air: [{SOF}],\n    rail: [['Koprivshtitsa', '코프리브시티차역', '마을에서 약 9km, 열차 시간에 맞춰 버스 연결|about 9 km from the village, bus timed to trains']],\n    bus: [['Avtogara Koprivshtitsa', '코프리브시티차 버스터미널']],\n",
      itinerary={'days': [['', 5, 1, 2, 4, 3]]},
      season='5~10월이 걷기 좋고, 8월 초 5년마다 열리는 민속 축제 때 가장 붐빕니다.|May to October is best for walking; busiest during the folk festival held every five years in early August.',
      stay=[('마을 안 민박', 'Village guesthouses', 'Koprivshtitsa', '옛집 체험|Stay in an old house', '옛 집을 고친 민박에서 묵으며 저녁의 조용한 마을을 걷습니다.|Stay in a restored old house and walk the quiet village in the evening.')],
      routes=R("  r('sofia', 'koprivshtitsa', 'bus', 120),\n  r('plovdiv', 'koprivshtitsa', 'bus', 120),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 기차역은 열차 시간에 맞춘 버스로 오갑니다.', en='Walk the village; a bus timed to the trains links the station.')),
    C(id='melnik', after='koprivshtitsa', ko='멜니크', en='Melnik', native='Мелник', lat=41.5236, lng=23.3961,
      blurb=['불가리아에서 가장 작은 도시로, 사암 피라미드 절벽 아래 와인 마을입니다. 바위를 파서 만든 와인 저장고와 19세기 저택이 있고, 근교에 로젠 수도원이 있습니다.',
             'Bulgaria’s smallest town, a wine village beneath cliffs of sandstone pyramids, with rock-cut wine cellars, 19th-century mansions and the Rozhen Monastery nearby.'],
      highlights=[
          H('코르도풀로프 집', 'Kordopulov House', '1754년 지은 와인 상인의 큰 저택으로, 색 유리창 방과 바위를 파낸 긴 와인 저장고가 있습니다.', 'A wine merchant’s great house of 1754, with stained-glass rooms and long wine cellars cut into the rock.', 'Kordopulov House Melnik', 45, 60),
          H('멜니크 사암 피라미드', 'Melnik Earth Pyramids', '마을을 둘러싼 사암 절벽과 뾰족한 기둥들로, 마을 위 산길에서 가까이 볼 수 있습니다.', 'The sandstone cliffs and pointed pillars around the town, seen close up from the paths above it.', 'Melnik Earth Pyramids', 60, 90),
          H('와인 저장고', 'Wine cellars', '바위를 파서 만든 오래된 저장고에서 이 지역 포도 ‘시로카 멜니슈카’로 빚은 레드 와인을 맛봅니다.', 'Taste red wine from the local Shiroka Melnishka grape in old cellars cut into the rock.', 'Shestaka wine cellar Melnik', 30, 45),
          H('성 니콜라이 교회', 'Church of St Nicholas', '마을 위 언덕의 18세기 교회로, 테라스에서 지붕들과 사암 봉우리를 내려다봅니다.', 'An 18th-century church on the hill above town, its terrace looking over the roofs and sandstone peaks.', 'Church of St Nicholas Melnik', 15, 20),
          H('로젠 수도원', 'Rozhen Monastery', '13세기에 세운 수도원으로, 나무 회랑의 안뜰과 16세기 벽화, 포도 덩굴이 있습니다.', 'A monastery founded in the 13th century, with a courtyard of wooden galleries, 16th-century frescoes and a vine.', 'Rozhen Monastery', 45, 60,
            n='멜니크에서 약 6km, 차로 10분 또는 산길로 1시간 반입니다.|About 6 km from Melnik: 10 min by car or about 1½ hours on the footpath.', group=DAY),
      ],
      hubs=f"    air: [{SOF}],\n    bus: [['Melnik bus stop', '멜니크 버스 정류장', '산단스키에서 버스|buses from Sandanski']],\n",
      itinerary={'days': [['', 1, 3, 4, 2]], 'trips': [['로젠 수도원|Rozhen Monastery', 5]]},
      season='4~6월과 9~10월이 걷기 좋습니다. 한여름엔 덥고, 9월 말 포도 수확 철이 활기찹니다.|April to June and September to October are best for walking; midsummer is hot, and the late-September grape harvest is lively.',
      stay=[('마을 안', 'In the village', 'Melnik', '와인·조용한 저녁|Wine, quiet evenings', '옛 집을 고친 게스트하우스와 와인 식당이 모여 있습니다.|Guesthouses in old houses and wine restaurants, all together.')],
      routes=R("  r('sofia', 'melnik', 'bus', 210),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 산단스키에서 버스가 들어옵니다. 로젠은 차나 도보로 갑니다.', en='Walk the village; buses come in from Sandanski, and Rozhen is reached by car or on foot.')),
    C(id='kazanlak', after='melnik', ko='카잔루크', en='Kazanlak', native='Казанлък', lat=42.6194, lng=25.3931,
      blurb=['장미의 계곡 한가운데 도시. 세계유산 트라키아 무덤의 벽화와 장미 박물관이 있고, 5~6월 장미 수확 철엔 축제가 열리며 북쪽 쉽카 고개로 당일치기를 갑니다.',
             'The city at the heart of the Rose Valley, with the painted World Heritage Thracian tomb and a rose museum; the rose festival fills late May and early June, and Shipka Pass is a day trip to the north.'],
      highlights=[
          H('카잔루크 트라키아 무덤', 'Thracian Tomb of Kazanlak', '기원전 4세기 말 트라키아 무덤으로, 둥근 천장의 벽화가 세계유산입니다. 원본은 닫혀 있고 옆에 똑같이 만든 복제 무덤에 들어갑니다.', 'A late-4th-century BC Thracian tomb whose domed frescoes are a World Heritage Site; the original is closed and you enter an exact replica next to it.', 'Thracian Tomb of Kazanlak', 20, 30),
          H('이스크라 역사 박물관', 'Iskra History Museum', '장미의 계곡 트라키아 왕릉에서 나온 금 유물과 청동 투구를 전시합니다.', 'Shows gold finds and bronze helmets from the Thracian royal tombs of the Rose Valley.', 'Iskra History Museum Kazanlak', 45, 60),
          H('장미 박물관', 'Museum of Roses', '장미 오일 증류의 역사와 도구, 장미 제품을 보여 주는 박물관입니다.', 'A museum of the history and tools of rose-oil distilling, with rose products.', 'Museum of Roses Kazanlak', 30, 45),
          H('쿨라타 민속 단지', 'Kulata Ethnographic Complex', '19세기 장미 농가와 부유한 집을 재현한 작은 민속 마을로, 장미 증류 시연을 볼 수 있습니다.', 'A small ethnographic complex recreating a 19th-century rose-grower’s farm and a wealthy house, with rose-distilling demonstrations.', 'Kulata Ethnographic Complex Kazanlak', 30, 45),
          H('쉽카 기념 교회', 'Shipka Memorial Church', '1902년 러시아·튀르크 전쟁 전사자를 기려 지은 금빛 양파 돔의 러시아식 교회로, 쉽카 마을 위에 섭니다.', 'A Russian-style church of 1902 with golden onion domes above Shipka village, built in memory of the Russo-Turkish War dead.', 'Shipka Memorial Church', 30, 45,
            n='카잔루크에서 북쪽으로 약 12km, 버스나 차로 갑니다. 고개 위 자유 기념탑까지 더 오를 수 있습니다.|About 12 km north of Kazanlak by bus or car; you can continue up to the Freedom Monument on the pass.', group=DAY),
      ],
      hubs=f"    air: [{SOF}],\n    rail: [['Kazanlak', '카잔루크역']],\n    bus: [['Avtogara Kazanlak', '카잔루크 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['쉽카 기념 교회|Shipka Memorial Church', 5]]},
      season='5월 말~6월 초 장미 축제 때가 가장 볼만하고, 그 밖엔 4~10월이 좋습니다.|Best during the rose festival in late May and early June; otherwise April to October.',
      stay=[('시내 중심', 'Town centre', 'Kazanlak centre', '구경 거점|Sightseeing base', '박물관들과 무덤이 걸어서 가깝습니다. 축제 기간엔 일찍 예약하세요.|The museums and the tomb are all within walking distance; book early for the festival.')],
      routes=R("  r('sofia', 'kazanlak', 'bus', 180),\n  r('plovdiv', 'kazanlak', 'bus', 120),\n  r('veliko-tarnovo', 'kazanlak', 'bus', 120),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi', 'train'], ko='시내는 걸어서 다니고, 쉽카는 버스나 택시로 갑니다.', en='Walk the town; take a bus or taxi to Shipka.')),
    C(id='ruse', after='kazanlak', ko='루세', en='Ruse', native='Русе', lat=43.8564, lng=25.9708,
      blurb=['다뉴브강에 면한 불가리아 최대의 강변 도시로 ‘작은 빈’이라 불립니다. 19세기 말 유럽풍 건물이 둘러싼 자유 광장이 있고, 강 건너 루마니아와 다리로 이어지며 근교에 바위 교회가 있습니다.',
             'Bulgaria’s largest city on the Danube, nicknamed ‘Little Vienna’, with Freedom Square ringed by late-19th-century European-style buildings, a bridge to Romania across the river and rock churches nearby.'],
      highlights=[
          H('자유 광장과 수익 건물', 'Freedom Square & Dohodno Zdanie', '자유 기념비가 선 중심 광장으로, 1902년 지은 극장 건물 ‘수익 건물’과 카페가 둘러쌉니다.', 'The main square with its Monument of Liberty, ringed by cafés and the Dohodno Zdanie theatre building of 1902.', 'Freedom Square Ruse', 30, 45),
          H('지역 역사 박물관', 'Regional History Museum', '1882년 지은 바텐베르크 궁전에 든 박물관으로, 트라키아 은제 보물과 도시 역사를 전시합니다.', 'A museum in the Battenberg Palace of 1882, with a Thracian silver treasure and the city’s history.', 'Regional History Museum Ruse', 45, 60),
          H('알렉산드로프스카 거리', 'Aleksandrovska Street', '자유 광장에서 이어지는 보행자 거리로, 19세기 말 건물과 상점, 카페가 늘어섭니다.', 'The pedestrian street leading from Freedom Square, lined with late-19th-century buildings, shops and cafés.', 'Aleksandrovska Street Ruse', 30, 45),
          H('다뉴브 강변 산책로', 'Danube waterfront', '강을 따라 이어지는 공원과 산책로로, 건너편 루마니아 강가가 보입니다.', 'The riverside park and promenade along the Danube, looking across to the Romanian bank.', 'Danube riverside park Ruse', 30, 45),
          H('이바노보 바위 교회', 'Rock-Hewn Churches of Ivanovo', '루센스키 롬강 협곡 절벽에 판 중세 교회들로, 14세기 벽화가 남아 세계유산입니다.', 'Medieval churches cut into the cliffs of the Rusenski Lom gorge, with 14th-century frescoes; a World Heritage Site.', 'Rock-Hewn Churches of Ivanovo', 60, 90,
            n='루세에서 남쪽으로 약 20km, 차로 가며 절벽 계단을 오릅니다.|About 20 km south of Ruse by car, then a climb up the cliff steps.', group=DAY),
      ],
      hubs=f"    air: [['București Henri Coandă (OTP)', '부쿠레슈티 오토페니 공항 (OTP)', '부쿠레슈티 · 약 75km|Bucharest · about 75 km'], {SOF}],\n    rail: [['Ruse', '루세역']],\n    bus: [['Avtogara Yug Ruse', '루세 남부 버스터미널', '기차역 옆|next to the rail station']],\n",
      itinerary={'days': [['', 1, 3, 2, 4]], 'trips': [['이바노보 바위 교회|Ivanovo Rock Churches', 5]]},
      season='4~10월이 걷기 좋고, 3월 국제 음악 축제가 열립니다.|April to October is best for walking; the international music festival is in March.',
      stay=[('중심가 (자유 광장 주변)', 'Centre (Freedom Square)', 'Freedom Square Ruse', '걸어서 다 보기|Everything on foot', '광장과 보행자 거리, 강변이 걸어서 가깝습니다. 기차역까지는 버스나 택시로 10분쯤입니다.|The square, pedestrian street and riverside are all on foot; the station is about 10 minutes by bus or taxi.')],
      routes=R("  r('sofia', 'ruse', 'bus', 300),\n  r('veliko-tarnovo', 'ruse', 'bus', 120),\n  r('bucharest', 'ruse', 'bus', 120),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='중심가는 걸어서 다니고, 기차역은 버스나 트롤리버스로 오갑니다.', en='Walk the centre; buses and trolleybuses run to the station.')),
]

BG_NEW = """    cityIds: ['sofia', 'bansko', 'koprivshtitsa', 'melnik', 'plovdiv', 'kazanlak', 'veliko-tarnovo', 'ruse', 'varna', 'nessebar', 'burgas', 'sozopol'],
    cityGroups: [
      { title: { ko: '소피아·서부', en: 'Sofia & west' }, cityIds: ['sofia', 'bansko', 'koprivshtitsa', 'melnik'] },
      { title: { ko: '남부', en: 'South' }, cityIds: ['plovdiv', 'kazanlak'] },
      { title: { ko: '북부', en: 'North' }, cityIds: ['veliko-tarnovo', 'ruse'] },
      { title: { ko: '흑해', en: 'Black Sea' }, cityIds: ['varna', 'nessebar', 'burgas', 'sozopol'] },
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
    i = k.index("    id: 'bg',")
    j = k.index('    cityGroups: [', i)
    e = k.index('    ],\n', j) + len('    ],\n')
    s = k.index('    cityIds: [', i)
    assert s < j
    k = k[:s] + BG_NEW + k[e:]
    wr('countries.ts', k)
