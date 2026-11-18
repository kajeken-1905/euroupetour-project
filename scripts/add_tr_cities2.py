#!/usr/bin/env python3
"""Türkiye step 2, batch B (2026-11-18): Konya, Safranbolu, Amasra, Edirne, Kars, Gaziantep, Şanlıurfa, Mardin.
Gaziantep, Şanlıurfa and Mardin are travel-advisory level 2 (여행자제) on 0404.go.kr (checked 2026-11-18), stated in
their blurbs as done for Kairouan; the user chose them after being told. Afterwards the Türkiye city groups are
rewritten, the essentials safety line lists the advisory levels, and Pamukkale's mistaken transit text is replaced.
Run once."""
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_tr_cities1 import C, H, J2, R, MUZE, DAY, Jx

MOSQUE = '예배 시간에는 관광 입장이 안 됩니다. 신발을 벗고 어깨와 무릎을 가리며 여성은 머리를 가립니다.|Closed to visitors during prayers; remove shoes, cover shoulders and knees, and women cover their hair.'
L2 = ' 외교부 여행경보 2단계(여행자제) 지역입니다.'

CITIES = [
    C(id='konya', after='goreme', ko='콘야', en='Konya', native='Konya', lat=37.8746, lng=32.4932,
      blurb=['셀주크 시대 수도이자 신비주의 시인 메블라나(루미)의 도시. 초록 돔 아래 메블라나 영묘와 셀주크 신학교의 타일·석조 박물관이 있고, 회전 춤 세마를 보며, 근교에 9천 년 전 신석기 마을 차탈회위크가 있습니다.',
             'The Seljuk capital and city of the mystic poet Mevlana (Rumi), with his tomb under a green dome and tile and stone-carving museums in Seljuk madrasas; watch the whirling sema, and visit the 9,000-year-old Neolithic town of Çatalhöyük nearby.'],
      highlights=[
          H('알라에딘 언덕과 모스크', 'Alaeddin Hill & Mosque', '시내 한가운데 언덕 공원의 12~13세기 셀주크 모스크로, 술탄들의 영묘가 있습니다.', 'A 12th–13th-century Seljuk mosque in the hilltop park at the centre of town, with the sultans’ tombs.', 'Alaeddin Mosque Konya', 30, 45, n=MOSQUE),
          H('카라타이 신학교 (타일 박물관)', 'Karatay Madrasa (Tile Museum)', '1251년 신학교로, 별무늬 타일로 덮인 돔 아래 셀주크 타일을 전시합니다.', 'A madrasa of 1251 displaying Seljuk tiles beneath a dome covered in star-patterned tilework.', 'Karatay Madrasa', 30, 45, n=MUZE),
          H('인제 미나렐리 신학교', 'İnce Minareli Madrasa', '정교한 석조 문으로 유명한 13세기 신학교로, 안에 석조·목조 공예 박물관이 있습니다.', 'A 13th-century madrasa famous for its intricately carved stone portal, now a museum of stone and wood carving.', 'İnce Minareli Medrese', 30, 45, n=MUZE),
          H('메블라나 박물관', 'Mevlana Museum', '초록 타일 돔 아래 메블라나 젤랄렛딘 루미의 영묘와 메블레비 교단의 옛 수도장입니다.', 'The tomb of Mevlana Jalaluddin Rumi under its green-tiled dome, in the former lodge of the Mevlevi order.', 'Mevlana Museum', 60, 90, n=MUZE),
          H('메블라나 문화센터 세마', 'Sema at the Mevlana Cultural Centre', '메블레비 교단의 회전 춤 세마 의식을 보는 곳으로, 12월 메블라나 기념 주간엔 매일 열립니다.', 'Where the Mevlevi whirling ceremony (sema) is performed, nightly during the Mevlana commemoration week in December.', 'Mevlana Kültür Merkezi', 60, 90,
            n='정기 공연 요일과 시간은 문화센터에서 확인하세요.|Check the centre for the regular performance days and times.'),
          H('차탈회위크', 'Çatalhöyük', '기원전 7천 년 무렵의 신석기 도시 유적으로, 지붕으로 드나들던 흙벽돌 집터를 덮개 아래에서 봅니다(세계유산).', 'A Neolithic town of around 7000 BC whose mud-brick houses, entered through the roof, are seen under shelters (World Heritage).', 'Çatalhöyük', 60, 90, group=DAY,
            n=J2('콘야에서 남동쪽 약 50km, 차나 택시로 갑니다.|About 50 km south-east of Konya by car or taxi.', MUZE)),
      ],
      hubs="    air: [['Konya (KYA)', '콘야 공항 (KYA)']],\n    rail: [['Konya YHT Garı', '콘야 고속철도역', '앙카라·이스탄불행 고속열차|high-speed trains to Ankara and Istanbul']],\n    bus: [['Konya Otogarı', '콘야 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3, 4, 5]], 'trips': [['차탈회위크|Çatalhöyük', 6]]},
      season='4~6월과 9~10월이 좋습니다. 12월 메블라나 기념 주간엔 세마가 매일 열리지만 숙소가 붐빕니다.|April–June and September–October are best; in Mevlana week (December) sema is nightly but hotels fill up.',
      stay=[('메블라나 박물관 근처', 'Near the Mevlana Museum', 'Mevlana Museum Konya', '구경하기 편함|Handy for sightseeing', '박물관과 알라에딘 언덕, 시장이 걸어서 가깝습니다.|The museum, Alaeddin Hill and the bazaar are on foot.')],
      routes=R("  r('ankara', 'konya', 'train', 105),\n  r('istanbul', 'konya', 'train', 280),\n  r('konya', 'goreme', 'bus', 210),\n"),
      transit=dict(modes=['walk', 'tram', 'bus', 'taxi'], ko='볼거리는 걸어서 다니고, 기차역·버스터미널과 시내는 트램으로 잇습니다.', en='Walk between the sights; trams link the station and bus terminal with the centre.')),

    C(id='safranbolu', after='trabzon', ko='사프란볼루', en='Safranbolu', native='Safranbolu', lat=41.2436, lng=32.6911,
      blurb=['오스만 시대 목조 가옥 마을로 통째로 세계유산인 곳. 골짜기 구시가 차르시의 흰 벽 목조 집과 대상 숙소, 로쿰 가게를 걷고, 근교 요뤼크 마을과 인제카야 수도교로 다녀옵니다.',
             'An Ottoman town of timber houses that is a World Heritage Site in its entirety: walk the white-walled wooden houses, caravanserai and Turkish-delight shops of the Çarşı quarter in its valley, with trips to Yörük village and the İncekaya Aqueduct.'],
      highlights=[
          H('차르시 구시가', 'Çarşı old town', '골짜기 안 오스만 목조 가옥과 돌길 골목으로, 대장장이·구두장이 거리와 로쿰·사프란 가게가 이어집니다.', 'Ottoman timber houses and cobbled lanes in the valley, with blacksmiths’ and cobblers’ streets and shops selling Turkish delight and saffron.', 'Safranbolu Çarşı', 120, 180),
          H('진지 한', 'Cinci Han', '1640년대 지은 대상 숙소로, 지금은 호텔이며 지붕에 올라 마을을 내려다볼 수 있습니다.', 'A caravanserai of the 1640s, now a hotel, whose roof looks out over the town.', 'Cinci Han', 30, 45),
          H('카이마캄라르 저택 박물관', 'Kaymakamlar House Museum', '19세기 오스만 저택을 그대로 둔 박물관으로, 방과 부엌, 손님방을 밀랍 인형으로 재현했습니다.', 'A 19th-century Ottoman mansion kept as a museum, with rooms, kitchen and guest hall recreated with figures.', 'Kaymakamlar Gezi Evi', 30, 45),
          H('흐드를르크 언덕', 'Hıdırlık Hill', '구시가 위 언덕 공원으로, 지붕들이 골짜기를 채운 풍경이 한눈에 보입니다.', 'A hilltop park above the old town, looking over the rooftops filling the valley.', 'Hıdırlık Tepesi', 20, 30),
          H('요뤼크 마을', 'Yörük village', '유목민이 정착한 산마을로, 오래된 집과 공동 빨래터가 남아 있습니다.', 'A hill village settled by nomads, with old houses and a communal washhouse.', 'Yörükköy Safranbolu', 60, 90, group=DAY,
            n='사프란볼루에서 동쪽 약 11km입니다.|About 11 km east of Safranbolu.'),
          H('인제카야 수도교와 크리스탈 테라스', 'İncekaya Aqueduct & glass terrace', '협곡 위 오스만 시대 수도교와, 토카틀르 협곡에 내민 유리 전망대입니다.', 'An Ottoman-era aqueduct over a gorge and a glass viewing platform jutting over Tokatlı Canyon.', 'İncekaya Su Kemeri', 60, 90, group=DAY,
            n='구시가에서 북쪽 약 7km, 택시나 투어로 갑니다.|About 7 km north of the old town by taxi or tour.'),
      ],
      hubs="    rail: [['Karabük', '카라뷔크역', '버스로 약 20분|about 20 min by bus']],\n    bus: [['Safranbolu Otogarı', '사프란볼루 버스터미널', '구시가까지 미니버스|minibus to the old town']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['요뤼크 마을|Yörük village', 5], ['인제카야 수도교|İncekaya', 6]]},
      season='4~6월과 9~10월이 좋습니다. 사프란 꽃은 10월 말에 핍니다.|April–June and September–October are best; the saffron flowers bloom in late October.',
      stay=[('차르시 구시가', 'Çarşı old town', 'Safranbolu Çarşı', '분위기|Atmosphere', '목조 저택을 고친 숙소에서 묵습니다. 계단이 가파른 곳이 많습니다.|Stay in a restored timber mansion; many have steep stairs.')],
      routes=R("  r('ankara', 'safranbolu', 'bus', 180),\n  r('istanbul', 'safranbolu', 'bus', 390),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='구시가는 걸어서 다니고, 버스터미널과 신시가지 사이는 미니버스를 탑니다.', en='Walk the old town; minibuses link it with the bus terminal and new town.')),

    C(id='amasra', after='safranbolu', ko='아마스라', en='Amasra', native='Amasra', lat=41.7469, lng=32.3866,
      blurb=['흑해 서부의 작은 반도 항구 마을. 두 항구 사이 바위 반도에 비잔틴·제노바 성벽이 둘러 있고, 성 안 옛 교회 모스크와 아치 다리, 나무 공예품 골목을 걸은 뒤 바닷가에서 생선 구이를 먹습니다.',
             'A small harbour town on a peninsula on the western Black Sea: Byzantine and Genoese walls wrap the rocky headland between two harbours; walk past a church-turned-mosque, an arched bridge and lanes of wood crafts, then eat grilled fish by the sea.'],
      highlights=[
          H('아마스라 성', 'Amasra Castle', '반도를 둘러싼 비잔틴·제노바 시대 성벽으로, 성 안에 지금도 사람이 사는 마을이 있습니다.', 'Byzantine and Genoese walls around the peninsula, enclosing a village still lived in today.', 'Amasra Kalesi', 45, 60),
          H('파티흐 모스크 (옛 교회)', 'Fatih Mosque (former church)', '성 안의 9세기 비잔틴 교회를 1460년 모스크로 바꾼 건물입니다.', 'A 9th-century Byzantine church inside the walls, turned into a mosque in 1460.', 'Fatih Camii Amasra', 15, 20, n=MOSQUE),
          H('케메레 다리와 보즈테페섬', 'Kemere Bridge & Boztepe island', '본토와 섬을 잇는 비잔틴 시대 아치 다리로, 건너면 섬 꼭대기 전망대입니다.', 'A Byzantine arched bridge to the island, whose top is a viewpoint.', 'Kemere Köprüsü', 30, 45),
          H('체키질레르 시장', 'Çekiciler Çarşısı', '나무를 깎아 만든 수저와 기념품을 파는 작은 시장 골목입니다.', 'A small market lane selling carved wooden spoons and souvenirs.', 'Çekiciler Çarşısı Amasra', 30, 45),
          H('아마스라 박물관', 'Amasra Museum', '옛 해군 학교 건물의 박물관으로, 고대 아마스트리스의 조각과 동전을 전시합니다.', 'A museum in a former naval school, showing sculpture and coins from ancient Amastris.', 'Amasra Müzesi', 30, 45, n=MUZE),
      ],
      hubs="    bus: [['Amasra Otobüs Durağı', '아마스라 버스 정류장', '바르튼행 미니버스|minibus to Bartın']],\n",
      itinerary={'days': [['', 1, 2, 3, 4, 5]]},
      season='6~9월이 바다와 날씨가 좋습니다. 겨울은 비가 많고 흐립니다.|June–September has the best sea and weather; winters are wet and grey.',
      stay=[('성 안과 항구', 'Inside the walls & the harbour', 'Amasra Kalesi', '바다 전망|Sea views', '작은 마을이라 어디서든 걸어 다닙니다. 여름 주말엔 일찍 예약하세요.|Everything is walkable in this small town; book early for summer weekends.')],
      routes=R("  r('safranbolu', 'amasra', 'bus', 120, { n: '바르튼 환승|change at Bartın' }),\n  r('istanbul', 'amasra', 'bus', 420),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 바르튼까지 미니버스로 나가 장거리 버스를 갈아탑니다.', en='Walk the town; take a minibus to Bartın for long-distance buses.')),

    C(id='edirne', after='istanbul', ko='에디르네', en='Edirne', native='Edirne', lat=41.6771, lng=26.5557,
      blurb=['그리스·불가리아 국경 옆의 옛 오스만 수도. 건축가 시난의 걸작 셀리미예 모스크와 옛 모스크들, 대상 숙소와 시장이 시내에 모여 있고, 강가에 오스만 다리와 옛 병원 박물관이 있습니다. 여름엔 기름 레슬링 크르크프나르가 열립니다.',
             'The former Ottoman capital by the Greek and Bulgarian borders: Sinan’s masterpiece the Selimiye Mosque, older mosques, a caravanserai and bazaars fill the centre, with Ottoman bridges and a historic hospital museum by the rivers; the Kırkpınar oil-wrestling festival is held in summer.'],
      highlights=[
          H('셀리미예 모스크', 'Selimiye Mosque', '미마르 시난이 80세에 완성한 1575년 모스크로, 지름 31m 돔과 네 첨탑이 세계유산입니다.', 'The mosque Mimar Sinan completed at 80 in 1575, a World Heritage Site with a 31 m dome and four minarets.', 'Selimiye Mosque Edirne', 45, 60, n=MOSQUE),
          H('옛 모스크 (에스키 자미)', 'Old Mosque (Eski Cami)', '1414년 완공한 아홉 돔 모스크로, 벽마다 커다란 서예가 쓰여 있습니다.', 'A nine-domed mosque finished in 1414, its walls covered in giant calligraphy.', 'Eski Cami Edirne', 15, 20, n=MOSQUE),
          H('위체 셰레펠리 모스크', 'Üç Şerefeli Mosque', '첨탑마다 발코니가 세 개인 15세기 모스크로, 오스만 대형 돔 모스크의 출발점입니다.', 'A 15th-century mosque whose minaret has three balconies, the forerunner of the great Ottoman domed mosques.', 'Üç Şerefeli Cami', 15, 20, n=MOSQUE),
          H('알리 파샤 시장과 뤼스템 파샤 대상 숙소', 'Ali Paşa Bazaar & Rüstem Pasha Caravanserai', '시난이 설계한 긴 지붕 시장과 16세기 대상 숙소로, 과일 비누와 아몬드 과자가 명물입니다.', 'Sinan’s long covered bazaar and a 16th-century caravanserai; fruit-shaped soaps and almond sweets are local specialities.', 'Ali Paşa Çarşısı', 30, 45),
          H('술탄 바예지트 2세 복합단지 보건 박물관', 'Sultan Bayezid II Complex Health Museum', '15세기 병원 건물로, 물소리와 음악으로 정신병을 치료했던 방식을 보여 줍니다.', 'A 15th-century hospital showing how patients were treated with the sound of water and music.', 'Sultan Bayezid II Complex Health Museum', 45, 60),
          H('메리치 다리', 'Meriç Bridge', '19세기 오스만 다리로, 강 위로 해가 지는 모습을 보러 사람들이 모입니다.', 'A 19th-century Ottoman bridge where people gather for sunset over the river.', 'Meriç Köprüsü', 20, 30),
      ],
      hubs="    bus: [['Edirne Otogarı', '에디르네 버스터미널', '이스탄불·불가리아행|to Istanbul and Bulgaria']],\n",
      itinerary={'days': [['', 1, 2, 3, 4, 5, 6]]},
      season='4~6월과 9~10월이 좋습니다. 크르크프나르 기름 레슬링 대회는 보통 6~7월에 열립니다.|April–June and September–October are best; the Kırkpınar oil-wrestling festival is usually in June or July.',
      stay=[('셀리미예 주변 시내', 'Centre around the Selimiye', 'Selimiye Edirne', '걸어서 다니기|Walkable', '모스크와 시장이 모두 걸어서 가깝습니다.|The mosques and bazaars are all on foot.')],
      routes=R("  r('istanbul', 'edirne', 'bus', 150),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 보건 박물관과 버스터미널은 시내버스나 택시를 탑니다.', en='Walk the centre; take a city bus or taxi to the Health Museum and bus terminal.')),

    C(id='kars', after='trabzon', ko='카르스', en='Kars', native='Kars', lat=40.6013, lng=43.0975,
      blurb=['아르메니아 국경 가까운 동부 고원 도시. 러시아 지배 시절의 석조 건물과 언덕 위 성채가 시내에 있고, 근교 국경 협곡에 중세 아르메니아 수도 아니의 교회 유적이 흩어져 있습니다. 앙카라에서 오는 도우 익스프레스 열차의 종점입니다.',
             'An eastern highland city near the Armenian border, with Russian-era stone buildings and a hilltop citadel in town; nearby, the church ruins of Ani, the medieval Armenian capital, are scattered above a border gorge. The Doğu Express train from Ankara ends here.'],
      highlights=[
          H('카르스 성', 'Kars Castle', '시내를 내려다보는 언덕 위 성채로, 아래 개울가에 오스만 다리와 목욕탕이 있습니다.', 'The citadel on the hill above town, with an Ottoman bridge and bathhouses by the stream below.', 'Kars Kalesi', 30, 45),
          H('열두 사도 교회 (퀌베트 모스크)', 'Church of the Holy Apostles (Kümbet Mosque)', '10세기 아르메니아 교회로, 원뿔 지붕 아래 벽에 열두 사도 부조가 있고 지금은 모스크입니다.', 'A 10th-century Armenian church with reliefs of the twelve apostles beneath its conical roof, now a mosque.', 'Kümbet Camii Kars', 15, 20, n=MOSQUE),
          H('러시아 시대 거리와 페티예 모스크', 'Russian-era streets & Fethiye Mosque', '19세기 말 러시아가 지은 석조 건물이 늘어선 거리와, 옛 러시아 정교회를 고친 페티예 모스크입니다.', 'Streets of late-19th-century Russian stone buildings and the Fethiye Mosque, a former Russian Orthodox church.', 'Fethiye Camii Kars', 45, 60),
          H('아니 유적', 'Ani', '10~11세기 아르메니아 왕국의 수도로, 국경 협곡 위 들판에 대성당과 교회, 성벽이 흩어져 있는 세계유산입니다.', 'The 10th–11th-century Armenian capital, a World Heritage Site of a cathedral, churches and walls scattered over a plain above the border gorge.', 'Ani Ruins', 150, 240, group=DAY,
            n=J2('카르스에서 동쪽 약 45km, 택시나 투어로 갑니다.|About 45 km east of Kars by taxi or tour.', MUZE)),
          H('츨드르 호수', 'Lake Çıldır', '해발 2천m 가까운 고원 호수로, 겨울엔 얼어붙은 호수 위를 말 썰매로 달립니다.', 'A lake at nearly 2,000 m; in winter, horse-drawn sleighs race across its frozen surface.', 'Çıldır Gölü', 180, 300, group=DAY,
            n='카르스에서 북쪽 약 60km, 차로 갑니다.|About 60 km north of Kars by car.'),
      ],
      hubs="    air: [['Kars Harakani (KSY)', '카르스 공항 (KSY)']],\n    rail: [['Kars Garı', '카르스역', '도우 익스프레스·투리스틱 도우 익스프레스|Doğu Express and Touristic Doğu Express']],\n    bus: [['Kars Otogarı', '카르스 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['아니 유적|Ani', 4], ['츨드르 호수|Lake Çıldır', 5]]},
      season='6~9월이 좋습니다. 겨울은 영하 20도까지 내려가지만 눈 덮인 열차 여행과 언 호수를 보러 오는 사람이 많습니다.|June–September is best; winter falls to −20 °C, yet many come for the snowy train ride and the frozen lake.',
      stay=[('시내 중심', 'City centre', 'Kars Merkez', '걸어서 다니기|Walkable', '러시아 시대 거리와 식당이 걸어서 가깝습니다.|The Russian-era streets and restaurants are on foot.')],
      routes=R("  r('istanbul', 'kars', 'flight', 135),\n  r('ankara', 'kars', 'train', 1500, { n: '도우 익스프레스 야간열차|Doğu Express, overnight' }),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 아니와 츨드르 호수는 택시나 투어를 이용합니다.', en='Walk the town; use a taxi or tour for Ani and Lake Çıldır.')),

    C(id='gaziantep', after='kars', ko='가지안테프', en='Gaziantep', native='Gaziantep', lat=37.0662, lng=37.3833,
      blurb=['바클라바와 케밥으로 유명한 유네스코 미식 도시. 제우그마 모자이크 박물관의 ‘집시 소녀’와 구리 장인 시장, 옛 커피하우스와 음식 박물관이 볼거리입니다.' + L2,
             'A UNESCO City of Gastronomy famous for baklava and kebabs; see the “Gypsy Girl” at the Zeugma Mosaic Museum, the coppersmiths’ bazaar, an old coffee house and a culinary museum. Korean travel advisory level 2 (reconsider travel).'],
      highlights=[
          H('제우그마 모자이크 박물관', 'Zeugma Mosaic Museum', '유프라테스강가 로마 도시 제우그마에서 옮겨 온 모자이크를 모은 세계 최대급 모자이크 박물관으로, ‘집시 소녀’가 대표작입니다.', 'One of the world’s largest mosaic museums, with floors moved from the Roman city of Zeugma on the Euphrates; its star is the “Gypsy Girl”.', 'Zeugma Mosaic Museum', 90, 120, n=MUZE),
          H('구리 장인 시장과 진지를리 베데스텐', 'Coppersmiths’ Bazaar & Zincirli Bedesten', '망치 소리가 울리는 구리 공방 골목과 향신료·피스타치오를 파는 지붕 덮인 옛 시장입니다.', 'Lanes of copper workshops ringing with hammers and an old covered market selling spices and pistachios.', 'Bakırcılar Çarşısı Gaziantep', 60, 90),
          H('가지안테프 성', 'Gaziantep Castle', '시내 한가운데 언덕의 성채로, 2023년 지진에 성벽 일부가 무너져 복원 중입니다.', 'The citadel on a mound in the city centre; parts of its walls collapsed in the 2023 earthquake and are being restored.', 'Gaziantep Kalesi', 30, 45,
            n='복원 공사로 안쪽 출입이 막힐 수 있습니다.|Restoration may close the interior.'),
          H('에미네 괴위시 음식 박물관', 'Emine Göğüş Culinary Museum', '가지안테프 음식의 재료와 조리 도구, 식탁 문화를 보여 주는 작은 박물관입니다.', 'A small museum on Gaziantep’s ingredients, cooking tools and table customs.', 'Emine Göğüş Mutfak Müzesi', 30, 45),
          H('탐스 커피하우스', 'Tahmis Coffee House', '1635년 문을 연 옛 커피하우스로, 피스타치오 커피 멘엔기치를 맛봅니다.', 'An old coffee house opened in 1635, the place to try menengiç, a coffee made from wild pistachio.', 'Tahmis Kahvesi', 20, 30),
      ],
      hubs="    air: [['Gaziantep (GZT)', '가지안테프 공항 (GZT)']],\n    bus: [['Gaziantep Otogarı', '가지안테프 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3, 4, 5]]},
      season='4~5월과 10~11월이 좋습니다. 7~8월은 40도에 이를 만큼 덥습니다.|April–May and October–November are best; July and August can reach 40 °C.',
      stay=[('성과 시장 주변', 'Around the castle & bazaars', 'Gaziantep Kalesi', '걸어서 다니기|Walkable', '시장과 커피하우스, 식당이 걸어서 가깝습니다.|The bazaars, coffee houses and restaurants are on foot.')],
      routes=R("  r('istanbul', 'gaziantep', 'flight', 110),\n"),
      transit=dict(modes=['walk', 'tram', 'bus', 'taxi'], ko='구시가는 걸어서 다니고, 모자이크 박물관은 트램이나 택시로 갑니다.', en='Walk the old town; take the tram or a taxi to the Mosaic Museum.')),

    C(id='sanliurfa', after='gaziantep', ko='샨르우르파 (괴베클리 테페)', en='Şanlıurfa (Göbekli Tepe)', native='Şanlıurfa', lat=37.1591, lng=38.7969,
      blurb=['아브라함의 도시로 불리는 순례지. 신성한 잉어가 사는 발르클르괼 연못과 옛 시장이 있고, 우르파 사람 석상의 고고학 박물관을 본 뒤 1만 1천 년 전 세계 최고(最古) 신전 유적 괴베클리 테페와 벌집 모양 집의 하란으로 다녀옵니다.' + L2,
             'A pilgrimage city known as the city of Abraham, with the sacred carp pools of Balıklıgöl and an old bazaar; see the Urfa Man statue in the archaeology museum, then visit Göbekli Tepe, the world’s oldest known temple at 11,000 years, and the beehive houses of Harran. Korean travel advisory level 2 (reconsider travel).'],
      highlights=[
          H('발르클르괼 (아브라함의 연못)', 'Balıklıgöl (Pool of Abraham)', '아브라함이 불에 던져진 자리에 물이 솟았다는 연못으로, 신성한 잉어가 살고 옆에 아브라함이 태어났다는 동굴이 있습니다.', 'The pool said to have sprung up where Abraham was thrown into the fire, home to sacred carp, beside the cave where he is said to have been born.', 'Balıklıgöl', 60, 90),
          H('카파르 차르시 (옛 시장)', 'Covered bazaar & Gümrük Han', '16세기 대상 숙소 귐뤼크 한의 안뜰 찻집과 주변 시장 골목입니다.', 'The courtyard tea garden of the 16th-century Gümrük Han caravanserai and the bazaar lanes around it.', 'Gümrük Hanı Şanlıurfa', 60, 90),
          H('샨르우르파 고고학 박물관', 'Şanlıurfa Archaeology Museum', '1만 1천 년 전 ‘우르파 사람’ 석상과 괴베클리 테페 실물 크기 복원 모형이 있습니다.', 'Home to the 11,000-year-old “Urfa Man” statue and a full-size replica of a Göbekli Tepe enclosure.', 'Şanlıurfa Archaeology Museum', 90, 120, n=MUZE),
          H('하레플리바흐체 모자이크 박물관', 'Haleplibahçe Mosaic Museum', '로마 시대 저택 바닥 모자이크를 제자리에서 덮개 아래 보여 주는 박물관으로, 아마존 여왕 모자이크가 유명합니다.', 'Roman villa floor mosaics shown in place under a cover, famous for the Amazon queens.', 'Haleplibahçe Mozaik Müzesi', 45, 60, n=MUZE),
          H('괴베클리 테페', 'Göbekli Tepe', '기원전 9600년 무렵 수렵채집민이 세운 T자 돌기둥 원형 신전 유적으로, 세계유산입니다.', 'Circular enclosures of T-shaped stone pillars raised by hunter-gatherers around 9600 BC, a World Heritage Site.', 'Göbekli Tepe', 120, 150, group=DAY,
            n=J2('시내에서 북동쪽 약 18km, 택시나 투어로 갑니다.|About 18 km north-east of the city by taxi or tour.', MUZE)),
          H('하란', 'Harran', '벌집 모양 흙벽돌 집과 세계에서 손꼽히게 오래된 이슬람 대학 유적이 있는 평원 마을입니다.', 'A plain-side village of beehive mud-brick houses and the ruins of one of the oldest Islamic universities.', 'Harran Beehive Houses', 120, 180, group=DAY,
            n='시내에서 남쪽 약 45km로, 시리아 국경 10km 이내 3단계 지역과 가깝습니다. 투어로 다녀오세요.|About 45 km south of the city, close to the level-3 zone within 10 km of the Syrian border; go on a tour.'),
      ],
      hubs="    air: [['Şanlıurfa GAP (GNY)', '샨르우르파 공항 (GNY)']],\n    bus: [['Şanlıurfa Otogarı', '샨르우르파 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['괴베클리 테페|Göbekli Tepe', 5], ['하란|Harran', 6]]},
      season='4~5월과 10~11월이 좋습니다. 여름 한낮엔 40도를 넘습니다.|April–May and October–November are best; summer afternoons pass 40 °C.',
      stay=[('발르클르괼 주변', 'Around Balıklıgöl', 'Balıklıgöl', '걸어서 다니기|Walkable', '연못과 시장, 박물관이 걸어서 가깝습니다.|The pools, bazaar and museums are on foot.')],
      routes=R("  r('gaziantep', 'sanliurfa', 'bus', 150),\n  r('istanbul', 'sanliurfa', 'flight', 120),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='구시가와 박물관은 걸어서 다니고, 괴베클리 테페와 하란은 택시나 투어를 이용합니다.', en='Walk the old town and museums; use a taxi or tour for Göbekli Tepe and Harran.')),

    C(id='mardin', after='sanliurfa', ko='마르딘', en='Mardin', native='Mardin', lat=37.3122, lng=40.7350,
      blurb=['메소포타미아 평원을 내려다보는 언덕 위 석조 도시. 꿀빛 돌집과 신학교, 모스크가 비탈에 층층이 서 있고, 근교에 시리아 정교회 수도원과 고대 도시 다라, 수도원 마을 미디야트가 있습니다.' + L2,
             'A stone city on a hillside above the Mesopotamian plain, its honey-coloured houses, madrasas and mosques stacked in terraces; Syriac Orthodox monasteries, the ancient city of Dara and the monastery town of Midyat lie nearby. Korean travel advisory level 2 (reconsider travel).'],
      highlights=[
          H('마르딘 구시가와 대모스크', 'Mardin old town & Grand Mosque', '비탈을 따라 이어진 돌집 골목과 시장으로, 12세기 대모스크의 홈 파인 첨탑이 솟아 있습니다.', 'Stone-house lanes and bazaars climbing the slope, with the fluted minaret of the 12th-century Grand Mosque.', 'Mardin Ulu Camii', 120, 180),
          H('진지리예 신학교', 'Zinciriye Madrasa', '14세기 신학교로, 안뜰과 지붕 테라스에서 평원이 내려다보입니다.', 'A 14th-century madrasa whose courtyard and roof terrace overlook the plain.', 'Zinciriye Medresesi', 30, 45),
          H('마르딘 박물관', 'Mardin Museum', '19세기 시리아 가톨릭 총대주교관 건물의 박물관으로, 지역 고고 유물을 전시합니다.', 'A museum in the 19th-century Syriac Catholic patriarchate, showing regional archaeological finds.', 'Mardin Museum', 45, 60, n=MUZE),
          H('카스미예 신학교', 'Kasımiye Madrasa', '15세기 신학교로, 안뜰 수로를 흐르는 물이 삶의 흐름을 뜻한다고 합니다.', 'A 15th-century madrasa whose courtyard water channel is said to symbolise the course of life.', 'Kasımiye Medresesi', 30, 45),
          H('데이룰자파란 수도원', 'Deyrulzafaran Monastery', '5세기부터 이어진 시리아 정교회 수도원으로, 오랫동안 총대주교좌였습니다.', 'A Syriac Orthodox monastery dating back to the 5th century, for centuries the seat of the patriarch.', 'Deyrulzafaran Monastery', 45, 60, group=DAY,
            n='시내에서 동쪽 약 5km이며 가이드 안내로 둘러봅니다. 유료입니다.|About 5 km east of town, visited with a guide; ticketed.'),
          H('다라 고대 도시', 'Dara ancient city', '비잔틴 시대 국경 요새 도시로, 바위를 판 묘지와 거대한 지하 저수조가 남아 있습니다.', 'A Byzantine frontier fortress city with rock-cut tombs and huge underground cisterns.', 'Dara Antik Kenti', 60, 90, group=DAY,
            n='시내에서 남동쪽 약 30km입니다.|About 30 km south-east of town.'),
          H('미디야트와 모르 가브리엘 수도원', 'Midyat & Mor Gabriel Monastery', '은세공 골목과 석조 저택의 미디야트, 4세기에 세워 지금도 수도사가 사는 모르 가브리엘 수도원입니다.', 'Midyat with its silversmiths’ lanes and stone mansions, and Mor Gabriel, founded in the 4th century and still home to monks.', 'Mor Gabriel Monastery', 240, 360, group=DAY,
            n='마르딘에서 동쪽 약 65km입니다. 수도원 방문 시간은 정해져 있습니다.|About 65 km east of Mardin; the monastery has fixed visiting hours.'),
      ],
      hubs="    air: [['Mardin (MQM)', '마르딘 공항 (MQM)']],\n    bus: [['Mardin Otogarı', '마르딘 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['데이룰자파란 수도원|Deyrulzafaran', 5], ['다라|Dara', 6], ['미디야트·모르 가브리엘|Midyat & Mor Gabriel', 7]]},
      season='4~5월과 10~11월이 좋습니다. 여름은 매우 덥습니다.|April–May and October–November are best; summers are very hot.',
      stay=[('구시가', 'Old town', 'Mardin Eski Şehir', '분위기·전망|Atmosphere, views', '석조 저택을 고친 숙소에서 평원을 내려다봅니다. 계단과 비탈이 많습니다.|Stay in a restored stone mansion overlooking the plain; expect steps and slopes.')],
      routes=R("  r('sanliurfa', 'mardin', 'bus', 180),\n  r('istanbul', 'mardin', 'flight', 125),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='구시가는 걸어서 다니고, 근교 수도원과 유적은 택시나 투어를 이용합니다.', en='Walk the old town; use a taxi or tour for the monasteries and ruins nearby.')),
]

TR_NEW = """    cityIds: ['istanbul', 'edirne', 'bursa', 'canakkale', 'izmir', 'selcuk', 'ayvalik', 'bodrum', 'pamukkale', 'antalya', 'olympos', 'kas', 'fethiye', 'alanya', 'ankara', 'goreme', 'konya', 'trabzon', 'safranbolu', 'amasra', 'gaziantep', 'sanliurfa', 'mardin', 'kars'],
    cityGroups: [
      { title: { ko: '이스탄불·마르마라', en: 'Istanbul & Marmara' }, cityIds: ['istanbul', 'edirne', 'bursa', 'canakkale'] },
      { title: { ko: '에게해', en: 'Aegean' }, cityIds: ['izmir', 'selcuk', 'ayvalik', 'bodrum', 'pamukkale'] },
      { title: { ko: '지중해', en: 'Mediterranean' }, cityIds: ['antalya', 'olympos', 'kas', 'fethiye', 'alanya'] },
      { title: { ko: '중부 아나톨리아', en: 'Central Anatolia' }, cityIds: ['ankara', 'goreme', 'konya'] },
      { title: { ko: '흑해', en: 'Black Sea' }, cityIds: ['trabzon', 'safranbolu', 'amasra'] },
      { title: { ko: '동부·동남부', en: 'East & south-east' }, cityIds: ['kars', 'gaziantep', 'sanliurfa', 'mardin'] },
    ],
"""

SAFETY_OLD = '시리아·이라크 국경 지역은 외교부 여행경보가 높습니다.'
SAFETY_NEW = '외교부 여행경보는 대부분 1단계(여행유의)이고, 가지안테프·샨르우르파·마르딘·디야르바키르·반 등은 2단계(여행자제), 시리아 국경 10km 이내와 시르나크·하카리 등은 3단계(출국권고)입니다.'
SAFETY_OLD_EN = 'Korea’s travel advisory is high for areas near the Syrian and Iraqi borders.'
SAFETY_NEW_EN = 'Korea’s travel advisory is level 1 for most of the country, level 2 (reconsider travel) for Gaziantep, Şanlıurfa, Mardin, Diyarbakır, Van and others, and level 3 (leave) within 10 km of the Syrian border and in Şırnak, Hakkari and others.'

PAM_OLD = """    howTo: {
      ko: 'Pamukkale: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Pamukkale usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('uber'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
"""
PAM_NEW = """    howTo: {
      ko: '마을과 석회 테라스는 걸어서 다니고, 데니즐리 기차역·버스터미널까지는 돌무시(미니버스)로 20분쯤입니다.',
      en: 'Walk the village and travertines; a dolmuş (minibus) takes about 20 minutes to Denizli’s station and bus terminal.',
    },
    apps: [
      ta('uber'),
    ],
"""

if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    k = rd('countries.ts')
    i = k.index("    id: 'tr',")
    s = k.index('    cityIds: [', i)
    e = k.index('\n', s) + 1
    assert 'cityGroups' not in k[e:k.index("\n  },", e)]
    wr('countries.ts', k[:s] + TR_NEW + k[e:])
    es = rd('essentials.ts')
    assert es.count(SAFETY_OLD) == 1 and es.count(SAFETY_OLD_EN) == 1
    wr('essentials.ts', es.replace(SAFETY_OLD, SAFETY_NEW).replace(SAFETY_OLD_EN, SAFETY_NEW_EN))
    tc = rd('transit-city.ts')
    assert tc.count(PAM_OLD) == 1
    wr('transit-city.ts', tc.replace(PAM_OLD, PAM_NEW))
