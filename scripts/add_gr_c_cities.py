#!/usr/bin/env python3
"""Greece 2nd pass, new cities (2026-11-26, user picked all 16): Kastoria (Western Macedonia); Halkidiki (Central
Macedonia); Parga (Epirus); Volos & Pelion, Skiathos, Skopelos (Thessaly); Lefkada (Ionian Islands); Patras (Western
Greece); Spetses (Attica); Pylos (Peloponnese); Lesbos, Chios (North Aegean); Syros, Tinos, Folegandros, Amorgos (South
Aegean).
Facts (Wikipedia en/el): Kastoria on Lake Orestiada, Byzantine churches (Panagia Koumbelidiki, Mavriotissa monastery),
Byzantine Museum, Doltso and Apozari mansion quarters, Dragon's Cave, Prespa lakes with Agios Achilleios basilica;
Halkidiki's Kassandra (Afytos village) and Sithonia peninsulas, Ouranoupoli tower and Mount Athos boat cruises (only men
may enter Athos), Petralona Cave; Parga Venetian castle, Valtos beach, Acheron springs at Glyki, Necromanteion; Volos
Athanasakeio Archaeological Museum (Sesklo and Dimini), Makrinitsa, Pelion steam/narrow-gauge train Ano Lechonia–Milies;
Skiathos Papadiamantis House, Bourtzi, Koukounaries, Lalaria (boat), Kastro, Evangelistria Monastery; Skopelos Chora,
Agios Ioannis Kastri chapel (Mamma Mia!, 2008), Glossa; Lefkada joined to the mainland by a causeway and floating bridge,
Porto Katsiki, Cape Lefkatas lighthouse (Sappho's leap legend), Nydri boat trips; Spetses Bouboulina Museum, Spetses
Museum in the Hatzigiannis Mexis mansion, Old Harbour boatyards, Armata festival (September, 1822 battle), Agioi Anargyroi
and Bekiris cave; Ermoupoli Miaoulis Square and Town Hall by Ernst Ziller, Apollo Theatre (1864) modelled on La Scala,
Vaporia and Agios Nikolaos church, Ano Syros Catholic quarter; Tinos Panagia Evangelistria (1823) pilgrimage, Pyrgos and
Museum of Marble Crafts, Volax boulders, dovecotes; Folegandros Chora and Kastro, Panagia church above the cliff, Ano Meria,
Katergo beach by boat; Amorgos Hozoviotissa Monastery on the cliff (1088, Alexios I Komnenos), Chora, Agia Anna (The Big
Blue, 1988), Aegiali; Pylos Niokastro (1573), Navarino Bay (1827), Voidokilia beach, Palace of Nestor, Methoni castle;
Patras Agios Andreas cathedral, castle, Roman Odeon, Rio–Antirrio bridge (2004), Achaia Clauss winery (1861), carnival;
Mytilene castle, Molyvos, Petrified Forest of Lesbos (Sigri museum, UNESCO Global Geopark), Agiasos; Chios Nea Moni (UNESCO
1990 with Hosios Loukas and Daphni), Pyrgi xysta façades, Mesta, Chios Mastic Museum, Kambos.
Times (web aggregators 2026-11-26): Thessaloniki–Kastoria bus ~3 h; Volos–Skiathos fast ~1 h 25, Volos–Skopelos fastest
~1 h 55; Athens–Lefkada bus ~5 h 15; Piraeus–Syros fast ~2 h; Rafina–Tinos fastest ~1 h 50; Naxos–Amorgos fast ~1 h 15;
Santorini–Folegandros fast ~45 min; Piraeus–Spetses ~1 h 55; others rounded usual timings. Run once."""
import json
import add_daytrip_places3 as T

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
NEAR = ('근교', 'Nearby')
FIRST = '처음이라면|First visit'
RC = 'routes-east.ts'
R_AFTER = r"^  r\('thessaloniki', 'ioannina', 'bus', 210\),\n"
FASTN = "n: FAST"
PIR = "fa: PIRAEUS"
SKG = "['Thessaloniki Makedonia (SKG)', '테살로니키 마케도니아 공항 (SKG)', '테살로니키|Thessaloniki']"
ATH = "ATH()"
PVK = "['Aktion National (PVK)', '프레베자(악티오) 공항 (PVK)', '프레베자|Preveza']"


def H(ko, en, dko, den, maps, mn, mx, n=None, group=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    d = dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)
    if group:
        d['group'] = group
    return d


def R(a, b, mode, m, *opts):
    extra = f", {{ {', '.join(opts)} }}" if opts else ''
    return (RC, R_AFTER, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


def C(**k):
    d = dict(country='gr', hubs_file='hubs-east.ts', hubs_before='  // —— cy ——\n', itin_file='itinerary-south.ts',
             itin_before='  meteora: ', visit_file='visit-med.ts', visit_after=r"^  'athens-h1': v\(.*\),\n",
             stay_before='  athens: [', transit_before='  athens: {', places=None, daytrips=[], apps='')
    d.update(k)
    return d


def hubs(air, bus=None, port=None):
    s = f"    air: [{', '.join(air)}],\n"
    if bus:
        s += f"    bus: [{bus}],\n"
    if port:
        s += f"    port: [{port}],\n"
    return s


CITIES = [
    C(id='halkidiki', group_title='중앙마케도니아', after='thessaloniki', ko='할키디키', en='Halkidiki', native='Χαλκιδική (Chalkidikí)', lat=40.2236, lng=23.6658,
      blurb=['테살로니키 남동쪽으로 세 손가락처럼 뻗은 반도 지역으로, 카산드라·시토니아의 해변과 수도사의 산 아토스가 있습니다. 시토니아 입구의 니키티를 기준으로 안내합니다.',
             'The three-fingered peninsula south-east of Thessaloniki: beaches on Kassandra and Sithonia, and the monks’ mountain of Athos. Times here are from Nikiti, at the entrance to Sithonia.'],
      highlights=[
          H('시토니아 해변', 'Sithonia beaches', '소나무 숲과 화강암 바위 사이의 맑은 바다 해변들로, 카부로트리페스가 유명합니다.', 'Clear-water coves among pines and granite rocks, Kavourotrypes the best known.', 'Kavourotrypes beach', 120, 240, b='no', n=FREE),
          H('아피토스 마을', 'Afytos', '카산드라 반도 절벽 위의 돌집 마을로, 바다 전망이 좋습니다.', 'A stone village on the cliffs of Kassandra, with sea views.', 'Afytos Halkidiki', 60, 90, group=NEAR, b='no', n=FREE),
          H('아토스산 유람선', 'Mount Athos cruise', '우라노폴리에서 배를 타고 바다에서 아토스산 수도원들을 봅니다. 아토스 땅엔 허가받은 남성만 들어갈 수 있습니다.', 'A boat trip from Ouranoupoli along the coast of Mount Athos, viewing the monasteries from the sea; only permitted men may land on Athos.', 'Ouranoupoli port', 180, 240, group=DAY),
          H('페트랄로나 동굴', 'Petralona Cave', '종유석이 가득한 동굴로, 선사 시대 인류의 두개골이 발견된 곳입니다.', 'A cave full of stalactites, where a prehistoric human skull was found.', 'Petralona Cave', 60, 75, group=DAY),
      ],
      hubs=hubs([SKG], "['Nikiti bus stop', '니키티 버스 정류장', '테살로니키행|to Thessaloniki']", "['Ouranoupoli port', '우라노폴리 항구', '아토스산 유람선|Mount Athos cruises']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['아토스산 유람선|Mount Athos cruise', 3], ['페트랄로나 동굴|Petralona Cave', 4]]},
      season='해수욕은 6~9월이 좋고, 7~8월은 붐빕니다.|June–September for swimming; July–August are busy.',
      stay=[('시토니아(니키티·네오스 마르마라스)', 'Sithonia (Nikiti, Neos Marmaras)', 'Neos Marmaras', FIRST, '조용한 해변이 가깝습니다.|Close to quieter beaches.'),
            ('우라노폴리', 'Ouranoupoli', 'Ouranoupoli', '아토스 유람선|For Athos cruises', '아토스산 유람선이 출발하는 마을입니다.|The village the Athos cruises leave from.')],
      routes=[R('thessaloniki', 'halkidiki', 'bus', 105, "n: '니키티 기준|to Nikiti'")],
      transit=dict(modes=['bus', 'taxi', 'walk'], ko='반도 사이 버스가 드물어 차가 편합니다.', en='Buses between the peninsulas are sparse; a car is easiest.')),
    C(id='kastoria', group_title=None, after='halkidiki', ko='카스토리아', en='Kastoria', native='Καστοριά (Kastoriá)', lat=40.5193, lng=21.2687,
      blurb=['오레스티아다 호수로 뻗은 반도 위의 도시로, 수십 채의 비잔틴 교회와 옛 모피 상인의 저택이 남아 있습니다.',
             'A town on a peninsula in Lake Orestiada, with dozens of Byzantine churches and the mansions of old fur merchants.'],
      highlights=[
          H('오레스티아다 호숫가와 마브리오티사 수도원', 'Lake Orestiada & Mavriotissa Monastery', '호숫가 산책길 끝에 비잔틴 프레스코가 남은 마브리오티사 수도원이 있습니다.', 'A lakeside walk ending at the Mavriotissa Monastery, with Byzantine frescoes.', 'Panagia Mavriotissa Kastoria', 90, 120, b='no', n=FREE),
          H('비잔틴 박물관', 'Byzantine Museum of Kastoria', '도시의 교회들에서 옮겨 온 성상화를 전시합니다.', 'Icons gathered from the town’s churches.', 'Byzantine Museum of Kastoria', 45, 60),
          H('돌초·아포자리 구역', 'Doltso & Apozari quarters', '모피 상인들이 지은 18~19세기 저택들이 남은 옛 동네입니다.', 'The old quarters of 18th–19th-century fur merchants’ mansions.', 'Doltso Kastoria', 45, 60, b='no', n=FREE),
          H('용의 동굴', "Dragon's Cave", '호숫가 석회 동굴로, 지하 호수와 종유석을 봅니다.', 'A limestone cave by the lake, with underground pools and stalactites.', "Dragon's Cave Kastoria", 45, 60),
          H('프레스파 호수', 'Prespa Lakes', '아요스 아힐리오스섬의 비잔틴 성당 유적까지 물 위 다리를 걸어 건넙니다.', 'Walk the floating bridge to Agios Achilleios island and its ruined Byzantine basilica.', 'Agios Achilleios Prespa', 180, 240, group=DAY, b='no', n=FREE),
      ],
      hubs=hubs([SKG], "['KTEL Kastoria', '카스토리아 KTEL 버스터미널', '테살로니키·아테네행|to Thessaloniki, Athens']"),
      itinerary={'days': [['', 1, 3, 2, 4]], 'trips': [['프레스파 호수|Prespa Lakes', 5]]},
      season='봄·가을이 좋고, 겨울엔 호수 안개와 눈이 아름답지만 춥습니다.|Spring and autumn are best; winter brings lake mist and snow, but it is cold.',
      stay=[('호숫가 구시가', 'Lakeside old town', 'Doltso Kastoria', FIRST, '저택 구역과 호숫가 길이 가깝습니다.|Near the mansions and the lake path.')],
      routes=[R('thessaloniki', 'kastoria', 'bus', 180)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내와 호숫가는 걸어서 다니고, 프레스파는 차가 필요합니다.', en='Walk the town and lakeside; you need a car for Prespa.')),
    C(id='parga', group_title='이피로스', after='ioannina', ko='파르가', en='Parga', native='Πάργα (Párga)', lat=39.2846, lng=20.4005,
      blurb=['이오니아해에 면한 이피로스의 항구 마을로, 베네치아 성 아래 알록달록한 집들이 만을 감쌉니다.',
             'An Epirus harbour town on the Ionian Sea, its colourful houses ringing the bay below a Venetian castle.'],
      highlights=[
          H('베네치아 성', 'Venetian Castle', '마을 위 언덕의 성으로, 만과 섬이 내려다보입니다.', 'The hilltop castle above town, overlooking the bay and its islet.', 'Venetian Castle Parga', 45, 60),
          H('발토스 해변', 'Valtos Beach', '성 너머의 긴 해변으로, 걸어가거나 배로 갑니다.', 'The long beach beyond the castle, reached on foot or by boat.', 'Valtos Beach Parga', 120, 180, b='no', n=FREE),
          H('아케론강 샘', 'Springs of the Acheron', '신화 속 저승의 강으로, 글리키에서 차가운 강물을 따라 협곡을 걷습니다.', 'The mythical river of the underworld; wade up the cold river into the gorge from Glyki.', 'Acheron Springs Glyki', 120, 180, group=DAY, b='no', n=FREE),
          H('네크로만테이온', 'Necromanteion of Acheron', '죽은 자에게 신탁을 묻던 고대 성소 유적입니다.', 'Ruins of the ancient oracle of the dead.', 'Necromanteion of Acheron', 45, 60, group=DAY),
      ],
      hubs=hubs([PVK], "['KTEL Parga', '파르가 버스 정류장', '이오안니나·프레베자행|to Ioannina, Preveza']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['아케론강과 네크로만테이온|Acheron & Necromanteion', 3, 4]]},
      season='해수욕은 6~9월, 아케론강 걷기는 물이 따뜻한 7~8월이 좋습니다.|June–September for the beach; July–August for wading the Acheron.',
      stay=[('항구 주변', 'Harbour area', 'Parga', FIRST, '식당과 해변, 성이 걸어서 닿습니다.|Restaurants, beaches and the castle on foot.')],
      routes=[R('ioannina', 'parga', 'bus', 120)],
      transit=dict(modes=['walk', 'bus', 'taxi', 'ferry'], ko='마을은 걸어서 다니고, 해변엔 작은 배가 다닙니다.', en='Walk the town; small boats run to the beaches.')),
    C(id='volos', group_title='테살리아', after='meteora', ko='볼로스·펠리온', en='Volos & Pelion', native='Βόλος (Vólos)', lat=39.3610, lng=22.9425,
      blurb=['아르고호 신화의 항구 도시 볼로스와, 그 뒤 펠리온산의 돌집 마을들을 함께 둘러봅니다. 스포라데스 제도로 가는 배도 이곳에서 떠납니다.',
             'The port of Volos, of Argonaut legend, and the stone villages of Mount Pelion behind it; ferries leave here for the Sporades.'],
      highlights=[
          H('볼로스 해안 산책로', 'Volos waterfront', '치푸라데스(치푸로 안줏집)가 늘어선 해안 산책로입니다.', 'The seafront promenade lined with tsipouradika (tsipouro bars).', 'Argonafton Volos', 60, 90, b='no', n=FREE),
          H('아타나사키오 고고학 박물관', 'Athanasakeio Archaeological Museum', '근교 세스클로·디미니의 신석기 유물을 전시합니다.', 'Neolithic finds from nearby Sesklo and Dimini.', 'Athanasakeio Archaeological Museum of Volos', 60, 75),
          H('마크리니차', 'Makrinitsa', '‘펠리온의 발코니’라 불리는 산마을로, 볼로스만이 내려다보입니다.', 'The “balcony of Pelion”, a mountain village above the Gulf of Volos.', 'Makrinitsa', 90, 120, group=NEAR, b='no', n=FREE),
          H('펠리온 산악 열차', 'Pelion train', '아노 레호니아에서 밀리에스까지 다리와 숲을 지나는 좁은 궤도 관광 열차입니다.', 'The narrow-gauge tourist train from Ano Lechonia to Milies, over bridges and through woods.', 'Ano Lechonia train station', 180, 240, group=DAY, n='주말과 여름철 위주로 운행합니다.|Runs mainly at weekends and in summer.'),
      ],
      hubs=hubs([SKG, ATH], "['KTEL Volos', '볼로스 KTEL 버스터미널', '아테네·테살로니키행|to Athens, Thessaloniki']", "['Port of Volos', '볼로스 항구', '스키아토스·스코펠로스행|ferries to Skiathos, Skopelos']"),
      itinerary={'days': [['', 1, 2], ['', 3]], 'trips': [['펠리온 산악 열차|Pelion train', 4]]},
      season='봄·가을은 펠리온 산행, 여름은 해변, 겨울엔 펠리온 스키장이 열립니다.|Spring and autumn for walking on Pelion, summer for the beaches; there is skiing on Pelion in winter.',
      stay=[('볼로스 해안', 'Volos waterfront', 'Volos', '교통이 편한 곳|Convenient', '버스 터미널과 항구가 가깝습니다.|Near the bus station and ferries.'),
            ('펠리온 산마을', 'Pelion villages', 'Makrinitsa', '산마을 분위기|Village stay', '돌집 게스트하우스가 많고, 차가 있으면 좋습니다.|Stone guesthouses; best with a car.')],
      routes=[R('athens', 'volos', 'bus', 240), R('thessaloniki', 'volos', 'bus', 135)],
      transit=dict(modes=['walk', 'bus', 'taxi', 'ferry'], ko='볼로스 시내는 걸어서 다니고, 펠리온 마을은 버스가 드물어 차가 편합니다.', en='Walk Volos; buses to Pelion villages are sparse, so a car is easiest.')),
    C(id='skiathos', group_title='테살리아', after='volos', ko='스키아토스', en='Skiathos', native='Σκιάθος (Skiáthos)', lat=39.1622, lng=23.4906,
      blurb=['스포라데스 제도에서 가장 붐비는 섬으로, 소나무 숲이 바다까지 내려오는 해변이 60곳이 넘습니다. 작가 파파디아만디스의 고향입니다.',
             'The busiest of the Sporades, with more than 60 beaches where pine woods run down to the sea; the home of the writer Papadiamantis.'],
      highlights=[
          H('스키아토스 타운과 부르치', 'Skiathos Town & Bourtzi', '항구 마을과 소나무 곶 부르치, 작가 파파디아만디스의 집 박물관이 있습니다.', 'The harbour town, the pine-clad Bourtzi headland and the Papadiamantis House museum.', 'Bourtzi Skiathos', 90, 120, b='no', n=FREE),
          H('쿠쿠나리에스 해변', 'Koukounaries Beach', '소나무 숲 뒤에 석호가 있는 섬에서 가장 유명한 해변입니다.', 'The island’s most famous beach, backed by pines and a lagoon.', 'Koukounaries Beach', 120, 240, b='no', n=FREE),
          H('랄라리아 해변', 'Lalaria Beach', '흰 조약돌과 바위 아치가 있는 해변으로, 배로만 갈 수 있습니다.', 'A beach of white pebbles and a rock arch, reached only by boat.', 'Lalaria Beach', 180, 240, n='섬 일주 보트 투어로 갑니다.|Reached on round-island boat trips.'),
          H('카스트로와 에방겔리스트리아 수도원', 'Kastro & Evangelistria Monastery', '해적을 피해 절벽 위에 지었던 옛 마을 유적과, 숲속 18세기 수도원입니다.', 'The ruined clifftop old town built against pirates, and the 18th-century monastery in the woods.', 'Kastro Skiathos', 120, 180, group=NEAR),
      ],
      hubs=hubs(["['Skiathos (JSI)', '스키아토스 공항 (JSI)']"], None, "['Port of Skiathos', '스키아토스 항구', '볼로스·스코펠로스행|ferries to Volos, Skopelos']"),
      itinerary={'days': [['', 1, 2], ['', 3, 4]]},
      season='해수욕은 6~9월이 좋고, 배편은 겨울에 크게 줄어듭니다.|June–September for swimming; boats are much reduced in winter.',
      stay=[('스키아토스 타운', 'Skiathos Town', 'Skiathos', FIRST, '항구와 식당이 모여 있고 해변 버스가 출발합니다.|The harbour and restaurants, and the beach bus starts here.')],
      routes=[R('volos', 'skiathos', 'ferry', 85, FASTN), R('athens', 'skiathos', 'flight', 40)],
      transit=dict(modes=['bus', 'walk', 'ferry', 'taxi'], ko='타운에서 남쪽 해안 해변들까지 버스가 자주 다닙니다.', en='Frequent buses run from town along the south-coast beaches.')),
    C(id='skopelos', group_title='테살리아', after='skiathos', ko='스코펠로스', en='Skopelos', native='Σκόπελος (Skópelos)', lat=39.1228, lng=23.7262,
      blurb=['초록 숲과 하얀 항구 마을의 스포라데스 섬으로, 영화 ‘맘마 미아!’의 바위 위 교회로 유명합니다.',
             'A green Sporades island with a white harbour town, famous for the clifftop chapel from Mamma Mia!'],
      highlights=[
          H('스코펠로스 초라', 'Skopelos Town', '항구를 둘러싼 언덕에 하얀 집과 교회들이 겹겹이 선 마을입니다.', 'White houses and churches stacked on the hill around the harbour.', 'Skopelos Town', 90, 120, b='no', n=FREE),
          H('아이오스 이오아니스 카스트리 교회', 'Agios Ioannis Kastri', '바다 위 바위 꼭대기의 작은 교회로, 영화 ‘맘마 미아!’에 나왔습니다.', 'The tiny chapel on a sea rock, seen in Mamma Mia!', 'Agios Ioannis Kastri', 60, 90, group=NEAR, b='no', n='바위 위까지 계단을 오릅니다.|Steps up the rock.'),
          H('글로사', 'Glossa', '섬 북서쪽 언덕 위 마을로, 아래 항구 로우트라키에 배가 닿습니다.', 'The hill village in the north-west, above the port of Loutraki.', 'Glossa Skopelos', 60, 90, group=NEAR, b='no', n=FREE),
          H('스코펠로스 해변', 'Skopelos beaches', '소나무 숲 아래의 파노르모스·카스타니 등 해변들입니다.', 'Pine-backed beaches such as Panormos and Kastani.', 'Panormos Beach Skopelos', 120, 240, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["['Skiathos (JSI)', '스키아토스 공항 (JSI)', '배로 스키아토스 경유|via Skiathos by boat']"], None, "['Port of Skopelos', '스코펠로스 항구', '스키아토스·볼로스행|ferries to Skiathos, Volos']"),
      itinerary={'days': [['', 1], ['', 2, 3, 4]]},
      season='해수욕은 6~9월이 좋고, 배편은 겨울에 크게 줄어듭니다.|June–September for swimming; boats are much reduced in winter.',
      stay=[('스코펠로스 타운', 'Skopelos Town', 'Skopelos', FIRST, '항구와 식당이 모여 있습니다.|The harbour and restaurants.')],
      routes=[R('skiathos', 'skopelos', 'ferry', 50, FASTN), R('volos', 'skopelos', 'ferry', 115, FASTN)],
      transit=dict(modes=['bus', 'walk', 'ferry', 'taxi'], ko='타운에서 해변과 글로사까지 버스가 다닙니다.', en='Buses run from town to the beaches and Glossa.')),
    C(id='lefkada', group_title='이오니아 제도', after='corfu', ko='레프카다', en='Lefkada', native='Λευκάδα (Lefkáda)', lat=38.8317, lng=20.7069,
      blurb=['둑길과 부교로 본토와 이어진 이오니아 섬으로, 서쪽 절벽 아래 포르토 카치키 같은 하얀 절벽 해변이 유명합니다.',
             'An Ionian island joined to the mainland by a causeway and floating bridge, famous for west-coast beaches below white cliffs such as Porto Katsiki.'],
      highlights=[
          H('레프카다 타운', 'Lefkada Town', '지진에 견디게 지은 양철 벽 집들이 있는 항구 마을입니다.', 'The harbour town, its houses built with light metal-clad upper floors against earthquakes.', 'Lefkada Town', 60, 90, b='no', n=FREE),
          H('포르토 카치키 해변', 'Porto Katsiki', '하얀 절벽 아래 청록색 바다의 해변입니다.', 'A beach of turquoise water below white cliffs.', 'Porto Katsiki', 120, 180, group=NEAR, b='no', n=FREE),
          H('레프카타스곶 등대', 'Cape Lefkatas lighthouse', '섬 남쪽 끝 절벽 위 등대로, 사포가 몸을 던졌다는 전설이 있습니다.', 'The lighthouse on the cliffs at the island’s southern tip, where legend says Sappho leapt.', 'Cape Lefkada lighthouse', 45, 60, group=NEAR, b='no', n=FREE),
          H('니드리와 보트 투어', 'Nydri & boat trips', '동쪽 해안 마을에서 메가니시섬과 스코르피오스섬 주변을 도는 배가 떠납니다.', 'The east-coast village where boats leave for trips around Meganisi and Skorpios.', 'Nydri Lefkada', 240, 360, group=DAY),
      ],
      hubs=hubs([PVK], "['KTEL Lefkada', '레프카다 KTEL 버스터미널', '아테네행|to Athens']", "['Nydri port', '니드리 항구', '메가니시행·보트 투어|Meganisi, boat trips']"),
      itinerary={'days': [['', 1], ['', 2, 3]], 'trips': [['니드리 보트 투어|Nydri boat trip', 4]]},
      season='해수욕은 6~9월이 좋고, 서쪽 해안은 바람이 셀 때가 있습니다.|June–September for swimming; the west coast can be windy.',
      stay=[('레프카다 타운', 'Lefkada Town', 'Lefkada', FIRST, '버스 터미널과 식당이 모여 있습니다.|The bus station and restaurants.'),
            ('니드리', 'Nydri', 'Nydri', '보트 투어|For boat trips', '보트 투어가 출발하는 동쪽 해안 마을입니다.|The east-coast village where boat trips leave.')],
      routes=[R('athens', 'lefkada', 'bus', 315, "fa: '키피소스 버스터미널|KTEL Kifissos'")],
      transit=dict(modes=['bus', 'walk', 'taxi', 'ferry'], ko='서쪽 해변엔 버스가 드물어 차나 스쿠터가 편합니다.', en='Buses to the west-coast beaches are sparse; a car or scooter is easiest.')),
    C(id='patras', group_title='서부 그리스', after='olympia', ko='파트라스', en='Patras', native='Πάτρα (Pátra)', lat=38.2466, lng=21.7346,
      blurb=['펠로폰네소스 북쪽의 항구 도시로, 이탈리아행 페리가 떠나고 그리스에서 가장 큰 성당과 큰 카니발이 있습니다.',
             'The port city on the northern Peloponnese, with ferries to Italy, Greece’s largest church and a big carnival.'],
      highlights=[
          H('성 안드레아스 대성당', 'Saint Andrew’s Cathedral', '그리스에서 가장 큰 성당으로, 성 안드레아스의 유해를 모십니다.', 'Greece’s largest church, holding relics of St Andrew.', 'Agios Andreas Patras', 30, 45, b='no', n=FREE),
          H('파트라스 성과 로마 오데온', 'Patras Castle & Roman Odeon', '언덕 위 성과, 공연장으로 다시 쓰는 로마 시대 극장입니다.', 'The hilltop castle and the Roman odeon, used again for performances.', 'Patras Castle', 60, 90),
          H('리오–안티리오 다리', 'Rio–Antirrio Bridge', '2004년 개통한 펠로폰네소스와 본토를 잇는 긴 사장교입니다.', 'The long cable-stayed bridge, opened in 2004, linking the Peloponnese to the mainland.', 'Rio–Antirrio Bridge', 30, 60, group=NEAR, b='no', n=FREE),
          H('아하이아 클라우스 와이너리', 'Achaia Clauss winery', '1861년에 세운 와이너리로, 마브로다프니 와인으로 유명합니다.', 'A winery founded in 1861, known for its Mavrodaphne.', 'Achaia Clauss', 60, 90, group=NEAR),
      ],
      hubs=hubs([ATH], "['KTEL Achaia', '파트라스 KTEL 버스터미널', '아테네행|to Athens']", "['Port of Patras', '파트라스 항구', '이탈리아(바리·안코나·베네치아)·이오니아 섬행|ferries to Italy and the Ionian islands']"),
      itinerary={'days': [['', 1, 2]], 'trips': [['리오 다리와 와이너리|Rio bridge & winery', 3, 4]]},
      season='1~3월 카니발 기간이 가장 활기찹니다.|Liveliest at carnival time, January–March.',
      stay=[('시내 중심', 'City centre', 'Patras', FIRST, '항구·버스 터미널·성당이 가깝습니다.|Close to the port, bus station and cathedral.')],
      routes=[R('athens', 'patras', 'bus', 180, "fa: '키피소스 버스터미널|KTEL Kifissos'")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 리오 다리는 시내버스로 갑니다.', en='Walk the centre; city buses go to the Rio bridge.')),
    C(id='spetses', group_title='아티키', after='hydra', ko='스페체스', en='Spetses', native='Σπέτσες (Spétses)', lat=37.2626, lng=23.1572,
      blurb=['사로닉만 끝의 소나무 섬으로, 독립전쟁 영웅 부불리나의 고향입니다. 마을 안엔 일반 차가 거의 다니지 않아 마차·스쿠터·배로 다닙니다.',
             'A pine island at the end of the Saronic Gulf, home of the independence heroine Bouboulina; private cars are largely banned in town, so people get around by carriage, scooter and boat.'],
      highlights=[
          H('다피아와 옛 항구', 'Dapia & Old Harbour', '대포가 놓인 다피아 항구에서 전통 배를 만드는 옛 항구까지 바닷가를 걷습니다.', 'Walk the seafront from the cannon-lined Dapia to the Old Harbour and its boatyards.', 'Old Harbour Spetses', 60, 90, b='no', n=FREE),
          H('부불리나 박물관', 'Bouboulina Museum', '독립전쟁 여성 함장 부불리나의 저택 박물관으로, 안내 투어로 봅니다.', 'The mansion of Bouboulina, the War of Independence naval commander, seen on a guided tour.', 'Bouboulina Museum', 45, 60),
          H('스페체스 박물관', 'Spetses Museum', '하치야니스 멕시스 저택에 섬의 해양 역사 유물을 전시합니다.', 'The island’s maritime history in the Hatzigiannis Mexis mansion.', 'Spetses Museum', 45, 60),
          H('아이오이 아나르기리 해변', 'Agioi Anargyroi beach', '소나무 해변으로, 근처에 바다 동굴 베키리스가 있습니다.', 'A pine-backed beach near the sea cave of Bekiris.', 'Agioi Anargyroi beach Spetses', 120, 180, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs([ATH], None, "['Dapia port', '다피아 항구', '피레우스·이드라행 쾌속선|fast boats to Piraeus, Hydra']"),
      itinerary={'days': [['', 1, 2, 3], ['', 4]]},
      season='해수욕은 6~9월이 좋고, 9월엔 1822년 해전을 재현하는 아르마타 축제가 열립니다.|June–September for swimming; the Armata festival re-enacts the 1822 sea battle in September.',
      stay=[('다피아', 'Dapia', 'Spetses', FIRST, '선착장과 식당이 모여 있습니다.|By the ferry quay and restaurants.')],
      routes=[R('athens', 'spetses', 'ferry', 115, PIR, FASTN), R('hydra', 'spetses', 'ferry', 45, FASTN)],
      transit=dict(modes=['walk', 'bus', 'taxi', 'ferry'], ko='마을은 걸어서 다니고, 해변엔 작은 버스·수상택시가 다닙니다.', en='Walk the town; small buses and water taxis run to the beaches.')),
    C(id='pylos', group_title='펠로폰네소스', after='kalamata', ko='필로스', en='Pylos', native='Πύλος (Pýlos)', lat=36.9131, lng=21.6965,
      blurb=['1827년 나바리노 해전이 벌어진 만의 항구 마을로, 오스만 시대 요새와 오메가 모양 해변, 미케네 시대 네스토르 궁전이 가깝습니다.',
             'The harbour town on Navarino Bay, scene of the 1827 battle, near an Ottoman fortress, an omega-shaped beach and the Mycenaean Palace of Nestor.'],
      highlights=[
          H('니오카스트로', 'Niokastro', '1573년 오스만이 지은 요새로, 안에 박물관이 있습니다.', 'The Ottoman fortress of 1573, with museums inside.', 'Niokastro Pylos', 60, 90),
          H('보이도킬리아 해변', 'Voidokilia Beach', '오메가 모양의 모래 해변으로, 뒤에 석호와 옛 성이 있습니다.', 'An omega-shaped sandy beach backed by a lagoon and an old castle.', 'Voidokilia Beach', 120, 180, group=NEAR, b='no', n=FREE),
          H('네스토르 궁전', 'Palace of Nestor', '지붕을 씌워 보존한 미케네 시대 궁전 유적으로, 욕조가 남아 있습니다.', 'A Mycenaean palace under a protective roof, its bathtub still in place.', 'Palace of Nestor', 60, 75, group=NEAR),
          H('메토니 성', 'Methoni Castle', '바다로 튀어나온 베네치아 성으로, 끝에 팔각 탑 부르치가 있습니다.', 'A Venetian castle on a promontory, ending in the octagonal Bourtzi tower.', 'Methoni Castle', 75, 90, group=NEAR),
      ],
      hubs=hubs(["['Kalamata (KLX)', '칼라마타 공항 (KLX)', '칼라마타|Kalamata']", ATH], "['Pylos bus station', '필로스 버스 정류장', '칼라마타·아테네행|to Kalamata, Athens']"),
      itinerary={'days': [['', 1, 4], ['', 3, 2]]},
      season='해수욕은 6~9월이 좋고, 봄·가을은 유적 둘러보기에 좋습니다.|June–September for swimming; spring and autumn for the sites.',
      stay=[('필로스 항구', 'Pylos harbour', 'Pylos', FIRST, '광장과 식당이 모여 있습니다.|Around the square and restaurants.')],
      routes=[R('kalamata', 'pylos', 'bus', 75)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 해변과 유적은 차가 편합니다.', en='Walk the town; a car is easiest for the beach and sites.')),
    C(id='lesbos', group_title=None, after='monemvasia', ko='레스보스(미틸리니)', en='Lesbos (Mytilene)', native='Λέσβος / Μυτιλήνη', lat=39.1067, lng=26.5550,
      blurb=['튀르키예 해안 가까이의 큰 섬으로, 시인 사포의 고향이자 우조의 고장입니다. 중심 도시 미틸리니를 거점으로 돌성 마을 몰리보스와 화석 숲을 찾아갑니다.',
             'A large island off the Turkish coast, home of the poet Sappho and of ouzo; from the main town, Mytilene, visit the castle village of Molyvos and the petrified forest.'],
      highlights=[
          H('미틸리니 성', 'Mytilene Castle', '항구를 내려다보는 큰 성으로, 비잔틴·제노바·오스만 시대가 겹쳐 있습니다.', 'A large castle above the harbour, layered with Byzantine, Genoese and Ottoman work.', 'Castle of Mytilene', 60, 90),
          H('몰리보스', 'Molyvos', '언덕 위 성 아래 돌집이 계단처럼 이어진 북쪽 바닷가 마을입니다.', 'A north-coast village of stone houses climbing to a hilltop castle.', 'Molyvos Castle', 120, 180, group=DAY),
          H('레스보스 화석 숲', 'Petrified Forest of Lesbos', '화산재에 묻혀 돌이 된 나무들로, 시그리의 박물관과 함께 봅니다.', 'Trees turned to stone under volcanic ash, seen with the museum at Sigri.', 'Natural History Museum of the Lesvos Petrified Forest', 120, 180, group=DAY),
          H('아야소스 마을', 'Agiasos', '올림보스산 비탈의 마을로, 도자기 공방과 성모 교회가 있습니다.', 'A village on the slopes of Mount Olympus, with potters and a church of the Virgin.', 'Agiasos', 90, 120, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["['Mytilene (MJT)', '미틸리니 공항 (MJT)']"], "['KTEL Lesvos', '미틸리니 KTEL 버스터미널', '몰리보스·시그리행|to Molyvos, Sigri']", "['Port of Mytilene', '미틸리니 항구', '피레우스·키오스·튀르키예 아이발리크행|ferries to Piraeus, Chios, Ayvalık']"),
      itinerary={'days': [['', 1]], 'trips': [['아야소스|Agiasos', 4], ['몰리보스|Molyvos', 2], ['화석 숲과 시그리|Petrified forest & Sigri', 3]]},
      season='봄(4~5월)은 들꽃과 새 관찰, 6~9월은 해수욕이 좋습니다.|Spring (April–May) for wildflowers and birdwatching; June–September for swimming.',
      stay=[('미틸리니', 'Mytilene', 'Mytilene', FIRST, '공항·항구·버스 터미널이 가깝습니다.|Near the airport, port and bus station.'),
            ('몰리보스', 'Molyvos', 'Molyvos', '바닷가 마을|Village stay', '돌집 마을과 해변이 가깝습니다.|Stone village by the beach.')],
      routes=[R('athens', 'lesbos', 'flight', 50)],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='섬이 커서 마을 사이 버스가 드물어 차가 편합니다.', en='The island is large and buses between villages are sparse; a car is easiest.')),
    C(id='chios', group_title=None, after='lesbos', ko='키오스', en='Chios', native='Χίος (Chíos)', lat=38.3710, lng=26.1360,
      blurb=['세계에서 이 섬 남부에서만 나는 매스틱 수지의 섬으로, 매스틱 마을들과 유네스코 세계유산 네아 모니 수도원이 있습니다.',
             'The island of mastic, a resin produced only in its south; its mastic villages and the UNESCO-listed Nea Moni monastery are the highlights.'],
      highlights=[
          H('네아 모니 수도원', 'Nea Moni', '11세기 금빛 모자이크가 남은 수도원으로, 유네스코 세계유산입니다.', 'An 11th-century monastery with golden mosaics; a UNESCO World Heritage Site.', 'Nea Moni Chios', 60, 75),
          H('피르기', 'Pyrgi', '집 벽을 흑백 기하학 무늬(크시스타)로 긁어 장식한 매스틱 마을입니다.', 'A mastic village whose house walls are scratched with black-and-white geometric patterns (xysta).', 'Pyrgi Chios', 60, 90, group=DAY, b='no', n=FREE),
          H('메스타', 'Mesta', '해적을 막으려고 바깥벽이 성벽처럼 이어진 중세 매스틱 마을입니다.', 'A medieval mastic village whose outer houses form a defensive wall.', 'Mesta Chios', 60, 90, group=DAY, b='no', n=FREE),
          H('키오스 매스틱 박물관', 'Chios Mastic Museum', '매스틱 나무 재배와 수지 생산을 보여 주는 박물관입니다.', 'A museum of mastic-tree cultivation and resin production.', 'Chios Mastic Museum', 60, 75, group=DAY),
          H('캄보스', 'Kambos', '돌담 안에 감귤 과수원과 옛 저택이 숨은 키오스 타운 남쪽 지역입니다.', 'The district south of Chios Town, with citrus orchards and old mansions behind stone walls.', 'Kambos Chios', 60, 90, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["['Chios (JKH)', '키오스 공항 (JKH)']"], "['KTEL Chios', '키오스 KTEL 버스터미널', '피르기·메스타행|to Pyrgi, Mesta']", "['Port of Chios', '키오스 항구', '피레우스·레스보스·튀르키예 체슈메행|ferries to Piraeus, Lesbos, Çeşme']"),
      itinerary={'days': [['', 5]], 'trips': [['네아 모니|Nea Moni', 1], ['매스틱 마을|Mastic villages', 4, 2, 3]]},
      season='해수욕은 6~9월이 좋고, 매스틱 수확은 7~10월입니다.|June–September for swimming; the mastic harvest runs July–October.',
      stay=[('키오스 타운', 'Chios Town', 'Chios', FIRST, '항구와 버스 터미널이 가깝습니다.|Near the port and bus station.')],
      routes=[R('athens', 'chios', 'flight', 50), R('lesbos', 'chios', 'ferry', 180)],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='매스틱 마을엔 버스가 하루 몇 편이라 차가 편합니다.', en='Buses to the mastic villages run a few times a day; a car is easiest.')),
    C(id='syros', group_title='남에게해', after='milos', ko='시로스(에르무폴리)', en='Syros (Ermoupoli)', native='Σύρος / Ερμούπολη', lat=37.4448, lng=24.9420,
      blurb=['키클라데스 제도의 행정 중심지 에르무폴리의 섬으로, 19세기 신고전주의 광장과 극장, 언덕 위 가톨릭 마을이 있습니다.',
             'The island of Ermoupoli, capital of the Cyclades, with a 19th-century Neoclassical square and theatre and a Catholic hill town.'],
      highlights=[
          H('미아울리 광장과 시청', 'Miaoulis Square & Town Hall', '대리석 광장과 에른스트 칠러가 설계한 신고전주의 시청입니다.', 'The marble square and the Neoclassical town hall designed by Ernst Ziller.', 'Miaoulis Square', 30, 45, b='no', n=FREE),
          H('아폴로 극장', 'Apollo Theatre', '1864년 밀라노 라 스칼라를 본떠 지은 작은 오페라 극장입니다.', 'A small opera house of 1864 modelled on La Scala in Milan.', 'Apollo Theatre Ermoupoli', 20, 30),
          H('바포리아와 아요스 니콜라오스 교회', 'Vaporia & Agios Nikolaos', '선주 저택이 바다에 면한 동네와, 파란 돔의 아요스 니콜라오스 교회입니다.', 'The quarter of shipowners’ mansions over the sea, and the blue-domed church of Agios Nikolaos.', 'Vaporia Syros', 60, 90, b='no', n=FREE),
          H('아노 시로스', 'Ano Syros', '언덕 위 중세 가톨릭 마을로, 꼭대기에 산 조르조 대성당이 있습니다.', 'The medieval Catholic hill town, crowned by the cathedral of San Giorgio.', 'Ano Syros', 90, 120, b='no', n=FREE),
      ],
      hubs=hubs(["['Syros (JSY)', '시로스 공항 (JSY)']"], "['Ermoupoli bus station', '에르무폴리 버스 정류장', '섬 해변행|to the island beaches']", "['Port of Syros', '시로스 항구', '피레우스·미코노스·티노스행|ferries to Piraeus, Mykonos, Tinos']"),
      itinerary=[1, 2, 3, 4],
      season='5~10월이 좋고, 다른 섬과 달리 겨울에도 도시가 살아 있습니다.|May–October; unlike many islands, the town stays lively in winter.',
      stay=[('에르무폴리', 'Ermoupoli', 'Ermoupoli', FIRST, '항구와 광장이 걸어서 닿습니다.|The port and square on foot.')],
      routes=[R('athens', 'syros', 'ferry', 120, PIR, FASTN), R('mykonos', 'syros', 'ferry', 35, FASTN)],
      transit=dict(modes=['walk', 'bus', 'taxi', 'ferry'], ko='에르무폴리는 걸어서 다니고, 아노 시로스는 버스나 계단으로 오릅니다.', en='Walk Ermoupoli; take the bus or the steps up to Ano Syros.')),
    C(id='tinos', group_title='남에게해', after='syros', ko='티노스', en='Tinos', native='Τήνος (Tínos)', lat=37.5380, lng=25.1626,
      blurb=['그리스 정교회 최대 순례지인 성모 교회와, 대리석 장인 마을·비둘기 집이 흩어진 키클라데스 섬입니다.',
             'A Cycladic island with Greece’s greatest Orthodox pilgrimage church, villages of marble carvers and scattered dovecotes.'],
      highlights=[
          H('파나기아 에방겔리스트리아 교회', 'Panagia Evangelistria', '1823년 발견된 성상화를 모신 순례 성당으로, 8월 15일에 순례자가 가장 많습니다.', 'The pilgrimage church built for an icon found in 1823; pilgrims peak on 15 August.', 'Panagia Evangelistria Tinos', 45, 60, b='no', n=FREE),
          H('피르고스와 대리석 공예 박물관', 'Pyrgos & Museum of Marble Crafts', '대리석 조각가의 마을과, 섬의 대리석 공예를 보여 주는 박물관입니다.', 'The village of marble sculptors and the museum of the island’s marble craft.', 'Museum of Marble Crafts Tinos', 120, 150, group=NEAR),
          H('볼락스', 'Volax', '거대한 둥근 바위들 사이에 자리한 작은 바구니 마을입니다.', 'A tiny basket-weaving village among giant round boulders.', 'Volax Tinos', 45, 60, group=NEAR, b='no', n=FREE),
          H('비둘기 집', 'Dovecotes', '타람바도스 계곡 등에 흩어진, 돌로 무늬를 낸 비둘기 집들입니다.', 'Stone dovecotes with patterned walls, scattered in valleys such as Tarambados.', 'Tarambados dovecotes', 45, 60, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs([ATH], None, "['Port of Tinos', '티노스 항구', '라피나·피레우스·미코노스행|ferries to Rafina, Piraeus, Mykonos']"),
      itinerary={'days': [['', 1], ['', 2, 3, 4]]},
      season='5~10월이 좋고, 8월 15일 성모 축일엔 섬이 순례자로 가득합니다.|May–October; the island fills with pilgrims for the Dormition on 15 August.',
      stay=[('티노스 타운', 'Tinos Town', 'Tinos', FIRST, '항구와 성당, 버스 정류장이 가깝습니다.|Near the port, church and buses.')],
      routes=[R('athens', 'tinos', 'ferry', 110, "fa: '라피나 항구|Port of Rafina'", FASTN), R('mykonos', 'tinos', 'ferry', 30, FASTN)],
      transit=dict(modes=['walk', 'bus', 'taxi', 'ferry'], ko='마을 사이 버스가 드물어 차나 스쿠터가 편합니다.', en='Buses between villages are sparse; a car or scooter is easiest.')),
    C(id='folegandros', group_title='남에게해', after='tinos', ko='폴레간드로스', en='Folegandros', native='Φολέγανδρος (Folégandros)', lat=36.6223, lng=24.9216,
      blurb=['바다 절벽 위에 하얀 초라 마을이 선 조용한 키클라데스 섬으로, 산토리니에서 배로 가깝습니다.',
             'A quiet Cycladic island with a white Chora on the edge of a sea cliff, a short boat ride from Santorini.'],
      highlights=[
          H('초라와 카스트로', 'Chora & Kastro', '광장이 이어진 절벽 위 마을과, 집들이 성벽을 이룬 중세 카스트로입니다.', 'The clifftop village of linked squares and the medieval Kastro, whose houses form its walls.', 'Chora Folegandros', 90, 120, b='no', n=FREE),
          H('파나기아 교회', 'Church of the Panagia', '초라 위 지그재그 길 끝의 하얀 교회로, 해 질 녘 전망이 좋습니다.', 'The white church at the top of the zigzag path above Chora, best at sunset.', 'Panagia Church Folegandros', 45, 60, b='no', n=FREE),
          H('아노 메리아', 'Ano Meria', '섬 북쪽 능선의 농가 마을로, 민속 박물관이 있습니다.', 'The farming village along the northern ridge, with a folklore museum.', 'Ano Meria Folegandros', 60, 90, group=NEAR),
          H('카테르고 해변', 'Katergo Beach', '카라보스타시스에서 작은 배로 가는 조약돌 해변입니다.', 'A pebble beach reached by small boat from Karavostasis.', 'Katergo Beach', 120, 180, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["['Santorini (JTR)', '산토리니 공항 (JTR)', '배로 산토리니 경유|via Santorini by boat']"], None, "['Karavostasis port', '카라보스타시스 항구', '산토리니·밀로스·피레우스행|ferries to Santorini, Milos, Piraeus']"),
      itinerary={'days': [['', 1, 2], ['', 3, 4]]},
      season='5~10월이 좋고, 바람(멜테미)이 센 7~8월엔 배가 결항할 수 있습니다.|May–October; ferries can be cancelled in the strong meltemi winds of July–August.',
      stay=[('초라', 'Chora', 'Chora Folegandros', FIRST, '식당과 광장이 모여 있습니다.|Around the squares and restaurants.')],
      routes=[R('santorini', 'folegandros', 'ferry', 45, FASTN)],
      transit=dict(modes=['walk', 'bus', 'ferry', 'taxi'], ko='항구·초라·아노 메리아를 작은 버스가 잇습니다.', en='A small bus links the port, Chora and Ano Meria.')),
    C(id='amorgos', group_title='남에게해', after='folegandros', ko='아모르고스', en='Amorgos', native='Αμοργός (Amorgós)', lat=36.8319, lng=25.8977,
      blurb=['키클라데스 동쪽 끝의 길쭉한 섬으로, 바다 절벽에 붙은 호조비오티사 수도원과 영화 ‘그랑 블루’의 바다로 알려졌습니다.',
             'The long island at the eastern edge of the Cyclades, known for the cliff-hugging Hozoviotissa Monastery and the sea of The Big Blue.'],
      highlights=[
          H('호조비오티사 수도원', 'Hozoviotissa Monastery', '바다 절벽 중턱에 붙은 하얀 수도원으로, 1088년 알렉시오스 1세가 세웠습니다.', 'A white monastery clinging to a sea cliff, founded by Alexios I Komnenos in 1088.', 'Monastery of Hozoviotissa', 60, 90, b='no', n='긴 계단을 오르고, 복장 규정이 있습니다.|Long climb by steps; a dress code applies.'),
          H('아모르고스 초라', 'Chora', '바위 위 성과 풍차가 있는 섬 한가운데의 하얀 마을입니다.', 'The white inland village with a castle on a rock and windmills.', 'Chora Amorgos', 60, 90, b='no', n=FREE),
          H('아야 안나 해변', 'Agia Anna', '수도원 아래 바위 만으로, 영화 ‘그랑 블루’(1988)의 촬영지입니다.', 'The rocky cove below the monastery, a location for The Big Blue (1988).', 'Agia Anna Amorgos', 60, 120, b='no', n=FREE),
          H('에길리와 산길', 'Aegiali & hiking trails', '북쪽 항구 마을 에길리에서 랑가다·톨라리아 산마을로 이어지는 산길입니다.', 'Trails from the northern port of Aegiali up to the villages of Langada and Tholaria.', 'Aegiali Amorgos', 180, 240, group=NEAR, b='no', n=FREE),
      ],
      hubs=hubs(["['Naxos (JNX)', '낙소스 공항 (JNX)', '배로 낙소스 경유|via Naxos by boat']"], None, "['Katapola port', '카타폴라 항구', '낙소스·피레우스행|ferries to Naxos, Piraeus'], ['Aegiali port', '에길리 항구', '북쪽 항구|northern port']"),
      itinerary={'days': [['', 1, 3, 2], ['', 4]]},
      season='5~10월이 좋고, 봄·가을은 산행에 좋습니다.|May–October; spring and autumn are good for hiking.',
      stay=[('카타폴라', 'Katapola', 'Katapola', FIRST, '주 항구로 초라행 버스가 출발합니다.|The main port, with buses up to Chora.'),
            ('에길리', 'Aegiali', 'Aegiali', '해변과 산길|Beach & trails', '해변과 산길이 가까운 북쪽 마을입니다.|The northern village, close to the beach and trails.')],
      routes=[R('naxos', 'amorgos', 'ferry', 75, FASTN)],
      transit=dict(modes=['bus', 'walk', 'ferry', 'taxi'], ko='항구·초라·수도원·에길리를 버스가 잇습니다.', en='Buses link the ports, Chora, the monastery and Aegiali.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
