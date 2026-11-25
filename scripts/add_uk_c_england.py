#!/usr/bin/env python3
"""UK 2nd pass, new cities — England (2026-11-25, user picked): Newcastle, Hadrian's Wall (Hexham), Alnwick &
Northumberland coast (North East); Haworth & Yorkshire Dales; Peak District (Bakewell); Birmingham, Warwick & Kenilworth
(West Midlands); Norwich; Winchester, Rye (South East); Wells & Glastonbury, Jurassic Coast (Lyme Regis) (South West).
Facts (Wikipedia en): Tyne Bridge 1928, Gateshead Millennium Bridge tilting (2001), Newcastle Castle keep 12th c. on the
site of the 1080 'new castle', Grey's Monument, BALTIC in a former flour mill (free), Angel of the North by Antony
Gormley (1998, 20 m high, 54 m wings); Hadrian's Wall begun AD 122, UNESCO 1987, Housesteads the best-preserved fort,
Vindolanda writing tablets, Sycamore Gap tree felled in 2023, Hexham Abbey Saxon crypt; Alnwick Castle seat of the Duke
of Northumberland, used in the Harry Potter films, open Easter–October; Alnwick Garden's Poison Garden; Barter Books in
the old station; Bamburgh Castle; Lindisfarne reached by a tidal causeway; Brontë Parsonage Museum; Keighley & Worth
Valley Railway (The Railway Children); Top Withens; Malham Cove limestone cliff; Chatsworth House seat of the Dukes of
Devonshire; Haddon Hall; Monsal Trail and Headstone Viaduct; Castleton caverns below Mam Tor; Bakewell pudding;
Birmingham canals and Gas Street Basin, Jewellery Quarter, Library of Birmingham (2013), Bullring and St Martin's,
Cadbury World at Bournville; Warwick Castle (1068), Lord Leycester Hospital, St Mary's Beauchamp Chapel, Kenilworth Castle
ruins with Elizabethan garden; Norwich Cathedral (spire second tallest in England, largest monastic cloisters), Norwich
Castle Norman keep museum, Elm Hill, market, the Broads; Winchester Cathedral (Jane Austen's grave), Great Hall with the
Round Table, Wolvesey Castle, Hospital of St Cross; Rye Mermaid Street, Ypres Tower, St Mary's tower, Lamb House (Henry
James), Camber Sands; Wells Cathedral west front and scissor arches, Bishop's Palace moat, Vicars' Close, Glastonbury Tor
and Abbey; Jurassic Coast UNESCO 2001, Lyme Regis Cobb, Lyme Regis Museum (Mary Anning), Charmouth fossils, Durdle Door
and Lulworth Cove. Times via Transitous (2026-11-25): London–Newcastle ~2 h 50, Newcastle–Hexham 39, Newcastle–Alnwick
~1 h 25 (Alnmouth + bus), York–Haworth ~1 h 50 (Keighley + bus), London–Birmingham ~1 h 25, Birmingham–Warwick 40,
Stratford–Warwick ~30, Manchester–Bakewell ~2 h (rail + bus), London–Norwich ~1 h 50, London–Winchester ~1 h,
London–Rye ~1 h 15 (change at Ashford), Bristol–Wells bus ~65, London–Lyme Regis ~3 h 25 (Axminster + bus). Run once."""
from add_daytrip_places import rd, wr
from uk_c_common import H, R, C, day, run, FREE, DAY, NEAR, FIRST

NCL = "['Newcastle (NCL)', '뉴캐슬 공항 (NCL)']"
BHX = "['Birmingham (BHX)', '버밍엄 공항 (BHX)']"
MAN = "['Manchester (MAN)', '맨체스터 공항 (MAN)', '맨체스터|Manchester']"
BRS = "['Bristol (BRS)', '브리스틀 공항 (BRS)', '브리스틀|Bristol']"
NE, YH, EM, WM, EE, SE, SW = '잉글랜드 북동부', '요크셔 험버', '이스트미들랜즈', '웨스트미들랜즈', '잉글랜드 동부', '잉글랜드 남동부', '잉글랜드 남서부'

CITIES = [
    C(id='newcastle', group_title=NE, after='durham', ko='뉴캐슬', en='Newcastle upon Tyne', native='Newcastle upon Tyne', lat=54.9738, lng=-1.6131,
      blurb=['타인강을 따라 여러 다리가 겹쳐 선 잉글랜드 북동부의 중심 도시로, 강 건너 게이츠헤드에는 현대 미술관 발틱이 있습니다. 1080년에 세운 ‘새 성’이 도시 이름이 되었습니다.',
             'The hub of North East England, where bridge after bridge spans the Tyne; across the river, Gateshead has the BALTIC art centre. The city takes its name from the “new castle” founded in 1080.'],
      highlights=[
          H('타인강 다리들과 키사이드', 'Tyne bridges & Quayside', '1928년 타인 브리지와, 배가 지나갈 때 통째로 기울어지는 게이츠헤드 밀레니엄 브리지(2001년)가 보이는 강변 산책로입니다.', 'The riverside walk below the 1928 Tyne Bridge and the Gateshead Millennium Bridge (2001), which tilts to let ships pass.', 'Gateshead Millennium Bridge', 45, 60, b='no', n=FREE),
          H('뉴캐슬 성', 'Newcastle Castle', '1080년 세운 ‘새 성’ 자리에 남은 12세기 성채와 블랙 게이트로, 옥상에서 다리들과 시내가 보입니다.', 'The 12th-century keep and Black Gate on the site of the 1080 “new castle”, with views of the bridges from the roof.', 'Newcastle Castle', 45, 60),
          H('그레이 스트리트와 그레이 기념탑', 'Grey Street & Grey’s Monument', '우아한 곡선의 조지 왕조풍 거리와 기념탑이 있는 시내 중심입니다.', 'The elegantly curving Georgian street and the monument at the heart of the city centre.', 'Grey’s Monument', 30, 45, b='no', n=FREE),
          H('발틱 현대 미술관', 'BALTIC Centre for Contemporary Art', '게이츠헤드 강변의 옛 제분소를 고친 현대 미술관으로, 꼭대기 전망대에서 다리들이 보입니다. 입장은 무료입니다.', 'A contemporary art centre in a converted flour mill on the Gateshead bank, with a viewing box over the bridges; entry is free.', 'BALTIC Centre for Contemporary Art', 60, 90, b='no', n=FREE),
          H('북쪽의 천사', 'Angel of the North', '앤터니 곰리의 1998년 철제 조각으로, 높이 20m에 날개 폭이 54m입니다.', 'Antony Gormley’s 1998 steel sculpture, 20 m tall with a 54 m wingspan.', 'Angel of the North', 30, 45, group=NEAR, b='no', n='시내에서 버스로 약 20분입니다.|About 20 min by bus from the centre.'),
      ],
      hubs=f"    air: [{NCL}],\n    rail: [['Newcastle', '뉴캐슬역']],\n",
      itinerary=[1, 4, 2, 3, 5],
      season='봄~가을이 강변을 걷기 좋습니다.|Spring to autumn for the riverside.',
      stay=[('시내 중심과 키사이드', 'City centre & Quayside', 'Grey Street Newcastle', FIRST, '역과 강변, 쇼핑가가 걸어서 닿습니다.|The station, riverside and shops on foot.')],
      routes=[R('london', 'newcastle', 'train', 170), R('durham', 'newcastle', 'train', 15), R('edinburgh', 'newcastle', 'train', 90)],
      transit=dict(modes=['walk', 'metro', 'bus', 'train'], ko='시내는 걸어서 다니고, 타인 앤드 웨어 메트로가 공항과 해안을 잇습니다.', en='Walk the centre; the Tyne and Wear Metro runs to the airport and the coast.')),
    C(id='hadrians-wall', group_title=NE, after='newcastle', ko='하드리아누스 방벽', en='Hadrian’s Wall', native='Hadrian’s Wall (Hexham)', lat=54.9711, lng=-2.1020,
      blurb=['서기 122년부터 쌓은 로마 제국의 북쪽 국경 방벽으로, 유네스코 세계유산입니다. 장터 도시 헥섬을 거점으로 요새 유적과 언덕을 넘는 성벽 길을 걷습니다.',
             'The northern frontier of the Roman Empire, begun in AD 122 and now a UNESCO World Heritage Site; from the market town of Hexham, visit the forts and walk the wall over the crags.'],
      highlights=[
          H('하우스스테즈 로마 요새', 'Housesteads Roman Fort', '방벽에서 가장 잘 남은 요새로, 언덕 위에 막사와 곡물 창고, 화장실 터가 남아 있습니다.', 'The best-preserved fort on the wall, with barracks, granaries and latrines on its ridge.', 'Housesteads Roman Fort', 90, 120),
          H('빈돌란다', 'Vindolanda', '방벽 남쪽의 요새 유적으로, 로마 병사들의 편지가 적힌 나무 서판이 나온 곳입니다. 여름엔 발굴 현장을 봅니다.', 'The fort south of the wall where the Vindolanda writing tablets, letters from Roman soldiers, were found; excavations continue in summer.', 'Vindolanda', 120, 150),
          H('시커모어 갭과 성벽 길', 'Sycamore Gap & the wall walk', '스틸 릭에서 언덕을 따라 성벽 위를 걷는 길로, 2023년에 베어진 유명한 단풍나무가 서 있던 골짜기를 지납니다.', 'The walk along the wall over the crags from Steel Rigg, past the gap where the famous sycamore stood until it was felled in 2023.', 'Steel Rigg car park', 90, 150, b='no', n=FREE),
          H('헥섬 수도원', 'Hexham Abbey', '헥섬 장터 광장의 수도원 교회로, 7세기 색슨 시대 지하 묘실이 남아 있습니다.', 'The abbey church on Hexham’s market square, with a 7th-century Saxon crypt.', 'Hexham Abbey', 30, 45, b='no', n=FREE),
      ],
      hubs=f"    air: [{NCL}],\n    rail: [['Hexham', '헥섬역'], ['Haltwhistle', '홀트휘슬역', '성벽 중심부와 가까움|close to the central wall']],\n    bus: [['AD122 Hadrian’s Wall Country Bus', 'AD122 방벽 버스', '여름철 운행|summer service']],\n",
      itinerary={'days': [['', 4], ['요새와 성벽 길|Forts & the wall walk', 1, 3, 2]]},
      season='AD122 버스가 다니는 봄~가을이 좋고, 성벽 길은 바람이 세니 따뜻하게 입으세요.|Spring to autumn, when the AD122 bus runs; dress warmly for the windy crags.',
      stay=[('헥섬', 'Hexham', 'Hexham', FIRST, '역과 식당이 있고 방벽까지 버스나 차로 갑니다.|Station and restaurants, with buses or a car to the wall.')],
      routes=[R('newcastle', 'hadrians-wall', 'train', 40, '헥섬역|Hexham')],
      transit=dict(modes=['bus', 'train', 'walk', 'taxi'], ko='여름엔 AD122 버스가 요새들을 잇고, 다른 때는 차나 택시가 편합니다.', en='In summer the AD122 bus links the forts; at other times a car or taxi is easiest.')),
    C(id='alnwick', group_title=NE, after='hadrians-wall', ko='안윅·노섬벌랜드 해안', en='Alnwick & Northumberland coast', native='Alnwick', lat=55.4134, lng=-1.7066,
      blurb=['노섬벌랜드 공작의 성이 있는 장터 마을로, 해리 포터 영화 촬영지로도 알려졌습니다. 가까운 해안엔 밤버러 성과, 물이 빠질 때만 건너는 성스러운 섬 린디스판이 있습니다.',
             'A market town crowned by the Duke of Northumberland’s castle, known from the Harry Potter films; on the nearby coast stand Bamburgh Castle and Lindisfarne, the Holy Island reached only at low tide.'],
      highlights=[
          H('안윅 성', 'Alnwick Castle', '노섬벌랜드 공작 가문이 사는 성으로, 해리 포터 영화의 빗자루 수업 장면을 찍은 곳입니다.', 'The seat of the Dukes of Northumberland, where the broomstick lessons in the Harry Potter films were shot.', 'Alnwick Castle', 150, 180, n='부활절 무렵부터 10월까지 엽니다.|Open from around Easter to October.'),
          H('안윅 가든과 독초 정원', 'The Alnwick Garden & Poison Garden', '계단식 분수가 있는 정원으로, 가이드와 함께 들어가는 독초 정원이 유명합니다.', 'Gardens with a grand cascade, famous for the Poison Garden, visited with a guide.', 'The Alnwick Garden', 90, 120),
          H('바터 북스', 'Barter Books', '옛 기차역 건물에 들어선 큰 헌책방으로, 대합실이 카페입니다.', 'A huge second-hand bookshop in the old railway station, with a café in the waiting rooms.', 'Barter Books', 45, 60, b='no', n=FREE),
          H('밤버러 성', 'Bamburgh Castle', '해변 바위 위에 우뚝 선 성으로, 모래 언덕과 바다가 함께 보입니다.', 'The castle on a rock above the beach, with dunes and sea all around.', 'Bamburgh Castle', 120, 180, group=DAY),
          H('린디스판(성스러운 섬)', 'Lindisfarne (Holy Island)', '물이 빠질 때만 둑길로 건너는 섬으로, 수도원 터와 작은 성이 있습니다.', 'The island reached by a causeway only at low tide, with priory ruins and a small castle.', 'Lindisfarne Priory', 180, 240, group=DAY, n='둑길 통행 가능 시간을 반드시 확인하세요.|Always check the causeway safe-crossing times.'),
      ],
      hubs=f"    air: [{NCL}],\n    rail: [['Alnmouth', '알른머스역', '안윅까지 버스 약 10분|about 10 min by bus to Alnwick']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['노섬벌랜드 해안|Northumberland coast', 4, 5]]},
      season='성과 정원이 여는 4~10월이 좋습니다.|April–October, when the castle and gardens are open.',
      stay=[('안윅 시내', 'Alnwick town', 'Alnwick', FIRST, '성과 정원, 헌책방이 걸어서 닿습니다.|Castle, gardens and bookshop on foot.')],
      routes=[R('newcastle', 'alnwick', 'train', 85, '알른머스역에서 버스|bus from Alnmouth'), R('edinburgh', 'alnwick', 'train', 90, '알른머스역에서 버스|bus from Alnmouth')],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 해안은 버스나 차로 갑니다.', en='Walk the town; reach the coast by bus or car.')),
    C(id='haworth', group_title=YH, after='whitby', ko='하워스·요크셔 데일스', en='Haworth & Yorkshire Dales', native='Haworth', lat=53.8303, lng=-1.9573,
      blurb=['브론테 자매가 소설을 쓴 목사관이 있는 황야 언덕의 마을입니다. 증기 기관차가 다니고, 조금 북쪽에는 석회암 절벽이 솟은 요크셔 데일스 국립공원이 펼쳐집니다.',
             'The moorland village where the Brontë sisters wrote their novels in the parsonage; steam trains still run here, and to the north lies the limestone country of the Yorkshire Dales National Park.'],
      highlights=[
          H('브론테 목사관 박물관', 'Brontë Parsonage Museum', '샬럿·에밀리·앤 브론테가 살며 소설을 쓴 목사관입니다.', 'The parsonage where Charlotte, Emily and Anne Brontë lived and wrote.', 'Brontë Parsonage Museum', 60, 90),
          H('메인 스트리트', 'Main Street', '가파른 돌길 양쪽에 찻집과 가게가 늘어선 마을 중심 거리입니다.', 'The steep cobbled street of tea rooms and shops at the heart of the village.', 'Main Street Haworth', 30, 45, b='no', n=FREE),
          H('키슬리 앤드 워스 밸리 철도', 'Keighley & Worth Valley Railway', '영화 ‘철도의 아이들’ 촬영지인 보존 증기 철도입니다.', 'The heritage steam railway where The Railway Children was filmed.', 'Haworth station Keighley Worth Valley Railway', 60, 120, n='주말과 성수기 위주로 운행합니다.|Runs mainly at weekends and in peak season.'),
          H('하워스 황야와 톱 위든스', 'Haworth Moor & Top Withens', '‘폭풍의 언덕’의 무대로 여겨지는 황야의 폐가까지 걷는 길입니다.', 'A walk across the moor to the ruined farmhouse thought to have inspired Wuthering Heights.', 'Top Withens', 150, 210, b='no', n=FREE),
          H('말럼 코브', 'Malham Cove', '요크셔 데일스의 거대한 석회암 절벽으로, 꼭대기에 석회암 포장 지대가 펼쳐집니다.', 'A huge limestone cliff in the Yorkshire Dales, topped by limestone pavement.', 'Malham Cove', 150, 210, group=DAY, b='no', n=FREE),
      ],
      hubs="    air: [['Leeds Bradford (LBA)', '리즈 브래드퍼드 공항 (LBA)']],\n    rail: [['Keighley', '키슬리역', '하워스까지 버스나 증기 철도|bus or steam railway to Haworth']],\n",
      itinerary={'days': [['', 1, 2, 4, 3]], 'trips': [['요크셔 데일스|Yorkshire Dales', 5]]},
      season='황야의 히스가 보랏빛으로 피는 8~9월이 아름답습니다.|August–September, when the heather turns the moors purple.',
      stay=[('하워스 마을', 'Haworth village', 'Haworth', FIRST, '목사관과 찻집이 바로 옆입니다.|The parsonage and tea rooms on your doorstep.')],
      routes=[R('york', 'haworth', 'train', 110, '리즈·키슬리에서 환승|change at Leeds and Keighley'), R('manchester', 'haworth', 'train', 120, '키슬리에서 버스|bus from Keighley')],
      transit=dict(modes=['walk', 'bus', 'train'], ko='마을은 걸어서 다니고, 키슬리까지 버스나 증기 철도를 탑니다.', en='Walk the village; take the bus or steam railway to Keighley.')),
    C(id='peak-district', group_title=EM, after='lincoln', ko='피크 디스트릭트', en='Peak District', native='Peak District (Bakewell)', lat=53.2140, lng=-1.6760,
      blurb=['영국 최초의 국립공원으로, 언덕과 돌담 사이에 대저택과 동굴 마을이 있습니다. 거점 마을 베이크웰은 같은 이름의 푸딩으로 유명합니다.',
             'Britain’s first national park, with stately homes and cavern villages among hills and drystone walls; the base town of Bakewell is famous for its pudding.'],
      highlights=[
          H('채스워스 하우스', 'Chatsworth House', '데번셔 공작 가문의 대저택으로, 미술품과 넓은 정원, 폭포 계단이 있습니다.', 'The stately home of the Dukes of Devonshire, with art collections, vast gardens and the Cascade.', 'Chatsworth House', 180, 240, n='겨울엔 크리스마스 행사 기간 외에 닫는 때가 있습니다.|Closed for part of the winter outside the Christmas season.'),
          H('베이크웰 마을', 'Bakewell', '와이강 다리와 장터가 있는 마을로, 베이크웰 푸딩을 파는 가게들이 있습니다.', 'A market town by the River Wye, with shops selling Bakewell pudding.', 'Bakewell', 45, 60, b='no', n=FREE),
          H('해던 홀', 'Haddon Hall', '중세부터 이어진 저택으로, 오래된 석조 방과 정원이 잘 남아 있습니다.', 'A medieval manor house with remarkably intact stone rooms and gardens.', 'Haddon Hall', 90, 120, n='봄~가을 위주로 엽니다.|Mainly open from spring to autumn.'),
          H('몬설 트레일과 헤드스톤 고가교', 'Monsal Trail & Headstone Viaduct', '옛 철길을 따라 터널과 고가교를 지나는 산책·자전거 길입니다.', 'A walking and cycling path on the old railway line through tunnels and over the viaduct.', 'Monsal Head', 60, 150, b='no', n=FREE),
          H('캐슬턴 동굴과 맘 토르', 'Castleton caverns & Mam Tor', '맘 토르 언덕 아래 마을로, 블루존 광석이 나는 동굴들을 가이드와 함께 들어갑니다.', 'The village below Mam Tor, with caverns, some yielding Blue John stone, visited on guided tours.', 'Castleton Derbyshire', 180, 240, group=DAY),
      ],
      hubs=f"    air: [{MAN}],\n    rail: [['Matlock', '매틀록역', '베이크웰까지 버스|bus to Bakewell'], ['Sheffield', '셰필드역', '버스 환승|change to buses']],\n",
      itinerary={'days': [['', 2, 1], ['', 3, 4]], 'trips': [['캐슬턴|Castleton', 5]]},
      season='봄~가을이 걷기 좋고, 채스워스는 크리스마스 장식 기간도 볼만합니다.|Spring to autumn for walking; Chatsworth’s Christmas season is worth seeing too.',
      stay=[('베이크웰', 'Bakewell', 'Bakewell', FIRST, '버스가 모이고 채스워스·해던 홀이 가깝습니다.|Buses meet here, close to Chatsworth and Haddon Hall.')],
      routes=[R('manchester', 'peak-district', 'bus', 120, '기차와 버스 환승|train and bus')],
      transit=dict(modes=['bus', 'walk', 'taxi'], ko='마을 사이엔 버스가 다니지만 편수가 적어 차가 편합니다.', en='Buses link the villages but are infrequent; a car is easiest.'),
      daytrips=[day('manchester', 'peak-district', '채스워스 하우스와 베이크웰 마을을 봅니다. 버스는 편수가 적으니 시간을 확인하세요.|Chatsworth House and Bakewell; buses are infrequent, so check times.')]),
    C(id='birmingham', group_title=WM, after='stratford-upon-avon', ko='버밍엄', en='Birmingham', native='Birmingham', lat=52.4797, lng=-1.9026,
      blurb=['산업 혁명을 이끈 잉글랜드 제2의 도시로, 시내를 가로지르는 운하와 보석 공방 지구가 남아 있습니다. 근교 본빌에는 캐드버리 초콜릿 공장 체험관이 있습니다.',
             'England’s second city and a powerhouse of the Industrial Revolution, crossed by canals and home to the Jewellery Quarter; in nearby Bournville is the Cadbury World chocolate experience.'],
      highlights=[
          H('운하와 개스 스트리트 베이슨', 'Canals & Gas Street Basin', '좁은 운하 배가 정박한 시내 운하 교차점으로, 운하 길을 따라 걷습니다.', 'The city-centre canal junction lined with narrowboats, the start of towpath walks.', 'Gas Street Basin', 45, 60, b='no', n=FREE),
          H('주얼리 쿼터', 'Jewellery Quarter', '수백 곳의 보석 공방이 모인 지구로, 옛 공방을 그대로 보존한 박물관이 있습니다.', 'A district of hundreds of jewellers’ workshops, with a museum in a preserved old workshop.', 'Museum of the Jewellery Quarter', 90, 120),
          H('버밍엄 도서관', 'Library of Birmingham', '금빛 원형 무늬로 덮인 2013년 도서관으로, 옥상 정원에서 시내가 보입니다.', 'The 2013 library wrapped in gold rings, with rooftop gardens over the city.', 'Library of Birmingham', 30, 45, b='no', n=FREE),
          H('불링과 세인트 마틴 교회', 'Bullring & St Martin’s Church', '곡면 외벽의 쇼핑센터와 그 아래 고딕 양식 교회가 대조를 이루는 곳입니다.', 'The curved shopping centre and the Gothic church below it, side by side.', 'St Martin in the Bull Ring', 45, 60, b='no', n=FREE),
          H('캐드버리 월드', 'Cadbury World', '본빌의 초콜릿 공장 체험관으로, 초콜릿 역사와 만드는 과정을 봅니다.', 'The chocolate experience at Bournville, on the history and making of chocolate.', 'Cadbury World', 150, 180, group=NEAR, b='rec', n='시간 지정 예약제입니다.|Timed tickets, booked in advance.'),
      ],
      hubs=f"    air: [{BHX}],\n    rail: [['Birmingham New Street', '버밍엄 뉴 스트리트역'], ['Birmingham Moor Street', '버밍엄 무어 스트리트역']],\n",
      itinerary={'days': [['', 1, 3, 4, 2]], 'trips': [['캐드버리 월드|Cadbury World', 5]]},
      season='1년 내내 다닐 수 있고, 11~12월엔 독일식 크리스마스 시장이 열립니다.|Fine all year; a German Christmas market runs in November–December.',
      stay=[('시내 중심', 'City centre', 'Birmingham New Street', FIRST, '역과 운하, 쇼핑가가 걸어서 닿습니다.|The station, canals and shops on foot.')],
      routes=[R('london', 'birmingham', 'train', 85), R('manchester', 'birmingham', 'train', 90), R('birmingham', 'stratford-upon-avon', 'train', 60)],
      transit=dict(modes=['walk', 'tram', 'bus', 'train'], ko='시내는 걸어서 다니고, 웨스트미들랜즈 메트로(트램)가 주얼리 쿼터로 갑니다.', en='Walk the centre; the West Midlands Metro tram runs to the Jewellery Quarter.')),
    C(id='warwick', group_title=WM, after='birmingham', ko='워릭·케닐워스', en='Warwick & Kenilworth', native='Warwick', lat=52.2819, lng=-1.5849,
      blurb=['1068년 정복왕 윌리엄이 세운 성이 강가에 솟은 중세 도시로, 근교 케닐워스에는 엘리자베스 1세가 머문 성의 폐허가 있습니다. 스트랫퍼드어폰에이번에서도 가깝습니다.',
             'A medieval town below the castle William the Conqueror founded in 1068, with the ruins of Kenilworth Castle, where Elizabeth I stayed, close by; Stratford-upon-Avon is a short hop away.'],
      highlights=[
          H('워릭 성', 'Warwick Castle', '에이번강 위에 솟은 중세 성으로, 성벽 위를 걷고 공연과 전시를 봅니다.', 'The medieval castle above the River Avon, with rampart walks, shows and exhibitions.', 'Warwick Castle', 180, 240, b='rec'),
          H('로드 레스터 병원', 'Lord Leycester Hospital', '1571년부터 퇴역 군인을 위한 숙소였던 목조 건물들과 정원입니다.', 'Half-timbered buildings and garden, a home for retired soldiers since 1571.', 'Lord Leycester Hospital', 45, 60),
          H('성 마리아 교회와 보챔프 예배당', 'St Mary’s Church & Beauchamp Chapel', '워릭 백작들의 무덤이 있는 예배당과 전망 탑이 있는 교회입니다.', 'The church with the Beauchamp Chapel of the Earls of Warwick and a tower to climb.', 'St Mary’s Church Warwick', 30, 45),
          H('케닐워스 성', 'Kenilworth Castle', '엘리자베스 1세를 맞이한 성의 폐허로, 엘리자베스 시대 정원을 다시 꾸몄습니다.', 'The ruined castle where Elizabeth I was entertained, with a recreated Elizabethan garden.', 'Kenilworth Castle', 120, 150, group=NEAR),
      ],
      hubs=f"    air: [{BHX}],\n    rail: [['Warwick', '워릭역'], ['Kenilworth', '케닐워스역']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['케닐워스 성|Kenilworth Castle', 4]]},
      season='봄~가을이 좋고, 성은 여름 휴가철에 가장 붐빕니다.|Spring to autumn; the castle is busiest in the summer holidays.',
      stay=[('워릭 시내', 'Warwick town', 'Market Place Warwick', FIRST, '성과 옛 거리가 걸어서 닿습니다.|The castle and old streets on foot.')],
      routes=[R('birmingham', 'warwick', 'train', 40), R('stratford-upon-avon', 'warwick', 'train', 30)],
      transit=dict(modes=['walk', 'bus', 'train'], ko='시내는 걸어서 다니고, 케닐워스는 버스나 기차로 갑니다.', en='Walk the town; take a bus or train to Kenilworth.')),
    C(id='norwich', group_title=EE, after='cambridge', ko='노리치', en='Norwich', native='Norwich', lat=52.6309, lng=1.2974,
      blurb=['노퍽의 중심 도시로, 노르만 대성당과 성, 중세 골목이 잘 남아 있습니다. 근교에는 운하와 호수가 이어진 습지 노퍽 브로즈가 있습니다.',
             'The capital of Norfolk, with a Norman cathedral and castle and well-preserved medieval lanes; nearby, the Norfolk Broads are a waterland of rivers and lakes.'],
      highlights=[
          H('노리치 대성당', 'Norwich Cathedral', '잉글랜드에서 두 번째로 높은 첨탑과 가장 큰 수도원 회랑을 가진 노르만 대성당입니다.', 'A Norman cathedral with the second-tallest spire in England and the largest monastic cloister.', 'Norwich Cathedral', 45, 60, b='no', n=FREE),
          H('노리치 성 박물관', 'Norwich Castle Museum', '언덕 위 노르만 성채를 박물관으로 꾸민 곳입니다.', 'The Norman keep on its mound, now a museum.', 'Norwich Castle', 90, 120),
          H('엘름 힐', 'Elm Hill', '튜더 시대 집들이 늘어선 자갈 골목입니다.', 'A cobbled lane of Tudor houses.', 'Elm Hill Norwich', 20, 30, b='no', n=FREE),
          H('노리치 시장', 'Norwich Market', '색색의 지붕 아래 노점이 모인 오래된 시장입니다.', 'The historic market of stalls under striped roofs.', 'Norwich Market', 30, 45, b='no', n=FREE),
          H('노퍽 브로즈', 'Norfolk Broads', '강과 호수가 이어진 습지로, 로샘에서 배를 빌리거나 유람선을 탑니다.', 'A waterland of rivers and lakes; hire a boat or take a cruise from Wroxham.', 'Wroxham Broads', 180, 240, group=DAY),
      ],
      hubs="    air: [['Norwich (NWI)', '노리치 공항 (NWI)', '운항편 적음|few flights']],\n    rail: [['Norwich', '노리치역']],\n",
      itinerary={'days': [['', 1, 3, 4, 2]], 'trips': [['노퍽 브로즈|Norfolk Broads', 5]]},
      season='봄~가을이 브로즈 뱃놀이에 좋습니다.|Spring to autumn for boating on the Broads.',
      stay=[('시내 중심', 'City centre', 'Norwich Market', FIRST, '대성당과 성, 시장이 걸어서 닿습니다.|The cathedral, castle and market on foot.')],
      routes=[R('london', 'norwich', 'train', 110)],
      transit=dict(modes=['walk', 'bus', 'train'], ko='시내는 걸어서 다니고, 브로즈는 기차나 버스로 로샘까지 갑니다.', en='Walk the centre; take a train or bus to Wroxham for the Broads.')),
    C(id='winchester', group_title=SE, after='portsmouth', ko='윈체스터', en='Winchester', native='Winchester', lat=51.0632, lng=-1.3080,
      blurb=['앵글로색슨 시대 잉글랜드의 수도였던 도시로, 제인 오스틴이 묻힌 대성당과 ‘아서 왕의 원탁’이 걸린 대홀이 있습니다.',
             'The capital of Anglo-Saxon England, with the cathedral where Jane Austen is buried and the Great Hall that houses “King Arthur’s Round Table”.'],
      highlights=[
          H('윈체스터 대성당', 'Winchester Cathedral', '유럽에서 손꼽히게 긴 중세 대성당으로, 제인 오스틴의 무덤이 있습니다.', 'One of Europe’s longest medieval cathedrals, with Jane Austen’s grave.', 'Winchester Cathedral', 60, 90),
          H('그레이트 홀과 원탁', 'Great Hall & Round Table', '옛 성에서 유일하게 남은 중세 대홀로, 벽에 ‘아서 왕의 원탁’이 걸려 있습니다.', 'The surviving medieval hall of the castle, where “King Arthur’s Round Table” hangs on the wall.', 'Great Hall Winchester', 30, 45),
          H('울브시 성', 'Wolvesey Castle', '윈체스터 주교들이 살던 중세 궁전의 폐허입니다.', 'The ruins of the medieval palace of the Bishops of Winchester.', 'Wolvesey Castle', 30, 45, b='no', n='봄~가을에 엽니다.|Open from spring to autumn.'),
          H('세인트 크로스 병원', 'Hospital of St Cross', '12세기에 세운 구호소로, 지금도 형제들이 살며 순례자에게 빵과 맥주를 나눠 주는 전통이 있습니다.', 'A 12th-century almshouse where brothers still live, keeping the tradition of the wayfarer’s dole of bread and ale.', 'Hospital of St Cross', 45, 60),
      ],
      hubs="    air: [['Southampton (SOU)', '사우샘프턴 공항 (SOU)', '사우샘프턴|Southampton'], LHR()],\n    rail: [['Winchester', '윈체스터역']],\n",
      itinerary=[1, 2, 3, 4],
      season='봄~가을이 좋고, 12월엔 대성당 앞 크리스마스 시장이 열립니다.|Spring to autumn; a Christmas market fills the cathedral close in December.',
      stay=[('시내 중심', 'City centre', 'Winchester High Street', FIRST, '대성당과 대홀이 걸어서 닿습니다.|The cathedral and Great Hall on foot.')],
      routes=[R('london', 'winchester', 'train', 60)],
      transit=dict(modes=['walk', 'bus', 'train'], ko='시내는 걸어서 다닙니다.', en='Walk the city.'),
      daytrips=[day('london', 'winchester', '제인 오스틴이 묻힌 대성당과 ‘아서 왕의 원탁’이 걸린 대홀을 봅니다.|The cathedral where Jane Austen lies and the Great Hall with the Round Table.')]),
    C(id='rye', group_title=SE, after='dover', ko='라이', en='Rye', native='Rye', lat=50.9503, lng=0.7333,
      blurb=['언덕 위 중세 항구 마을로, 자갈길 머메이드 거리와 목조 가옥이 남아 있습니다. 근교에는 모래 언덕이 이어진 캠버 샌즈 해변이 있습니다.',
             'A medieval hilltop port town of cobbled Mermaid Street and half-timbered houses, with the dunes of Camber Sands nearby.'],
      highlights=[
          H('머메이드 스트리트', 'Mermaid Street', '자갈이 깔린 가파른 길에 목조 가옥과 오래된 여관이 늘어서 있습니다.', 'A steep cobbled street of timber-framed houses and an old inn.', 'Mermaid Street Rye', 20, 30, b='no', n=FREE),
          H('이프르 타워', 'Ypres Tower', '13세기 방어 탑으로, 마을 박물관이 들어 있고 습지가 내려다보입니다.', 'A 13th-century defensive tower housing the town museum, overlooking the marshes.', 'Ypres Tower Rye', 30, 45),
          H('성 마리아 교회 탑', 'St Mary’s Church tower', '교회 탑에 올라 붉은 지붕과 습지, 바다를 내려다봅니다.', 'Climb the church tower for views over red roofs, marshes and sea.', 'St Mary’s Church Rye', 30, 45),
          H('램 하우스', 'Lamb House', '작가 헨리 제임스가 살던 조지 왕조풍 저택과 정원입니다.', 'The Georgian house and garden where Henry James lived.', 'Lamb House Rye', 45, 60, n='봄~가을에 엽니다.|Open from spring to autumn.'),
          H('캠버 샌즈', 'Camber Sands', '모래 언덕이 이어진 넓은 모래 해변입니다.', 'A wide sandy beach backed by dunes.', 'Camber Sands', 90, 180, group=NEAR, b='no', n=FREE),
      ],
      hubs="    air: [['London Gatwick (LGW)', '런던 개트윅 공항 (LGW)', '런던|London']],\n    rail: [['Rye', '라이역']],\n",
      itinerary={'days': [['', 1, 3, 2, 4]], 'trips': [['캠버 샌즈|Camber Sands', 5]]},
      season='봄~가을이 좋고, 해변은 여름이 제철입니다.|Spring to autumn; summer for the beach.',
      stay=[('구시가', 'Old town', 'High Street Rye', FIRST, '언덕 위 골목과 식당이 모여 있습니다.|The hilltop lanes and restaurants.')],
      routes=[R('london', 'rye', 'train', 75, '애시퍼드에서 환승|change at Ashford')],
      transit=dict(modes=['walk', 'bus', 'train'], ko='마을은 걸어서 다니고, 캠버 샌즈는 버스로 갑니다.', en='Walk the town; take a bus to Camber Sands.'),
      daytrips=[day('london', 'rye', '자갈길 머메이드 스트리트와 교회 탑, 습지 풍경을 봅니다.|Cobbled Mermaid Street, the church tower and the marsh views.')]),
    C(id='wells', group_title=SW, after='bath', ko='웰스·글래스턴베리', en='Wells & Glastonbury', native='Wells', lat=51.2094, lng=-2.6450,
      blurb=['조각상으로 덮인 대성당과 해자로 둘러싸인 주교관이 있는 작은 대성당 도시입니다. 근교 글래스턴베리엔 아서 왕 전설이 얽힌 수도원 터와 언덕 토르가 있습니다.',
             'A small cathedral city with a statue-covered cathedral and a moated Bishop’s Palace; nearby Glastonbury has an abbey and the Tor steeped in Arthurian legend.'],
      highlights=[
          H('웰스 대성당', 'Wells Cathedral', '수백 개 조각상으로 덮인 서쪽 정면과 가위 모양 아치가 유명한 고딕 대성당입니다.', 'A Gothic cathedral famed for its west front of hundreds of statues and its scissor arches.', 'Wells Cathedral', 60, 90),
          H('주교관', 'Bishop’s Palace', '해자로 둘러싸인 주교의 궁전과 정원으로, 해자의 백조가 줄을 당겨 종을 울립니다.', 'The moated palace and gardens of the bishops, where swans ring a bell for food.', 'Bishop’s Palace Wells', 60, 90),
          H('바이커스 클로스', 'Vicars’ Close', '14세기부터 사람이 살아온 돌집들이 줄지어 선 골목입니다.', 'A lane of stone houses lived in since the 14th century.', 'Vicars’ Close Wells', 15, 20, b='no', n=FREE),
          H('글래스턴베리 토르', 'Glastonbury Tor', '세인트 마이클 탑이 선 언덕으로, 서머싯 평원이 내려다보입니다.', 'The hill crowned by St Michael’s Tower, looking over the Somerset Levels.', 'Glastonbury Tor', 60, 90, group=NEAR, b='no', n=FREE),
          H('글래스턴베리 수도원', 'Glastonbury Abbey', '아서 왕의 무덤 전설이 전하는 수도원 폐허입니다.', 'The abbey ruins linked to the legend of King Arthur’s grave.', 'Glastonbury Abbey', 60, 90, group=NEAR),
      ],
      hubs=f"    air: [{BRS}],\n    bus: [['Wells Bus Station', '웰스 버스 정류장', '브리스틀·배스행|to Bristol, Bath']],\n",
      itinerary={'days': [['', 1, 3, 2]], 'trips': [['글래스턴베리|Glastonbury', 5, 4]]},
      season='봄~가을이 좋습니다. 6월 말 글래스턴베리 페스티벌 무렵엔 숙소가 붐빕니다.|Spring to autumn; rooms fill up around the Glastonbury Festival in late June.',
      stay=[('대성당 주변', 'Around the cathedral', 'Market Place Wells', FIRST, '대성당과 주교관, 장터 광장이 걸어서 닿습니다.|The cathedral, palace and market square on foot.')],
      routes=[R('bristol', 'wells', 'bus', 65), R('bath', 'wells', 'bus', 75)],
      transit=dict(modes=['walk', 'bus'], ko='시내는 걸어서 다니고, 글래스턴베리는 버스로 갑니다.', en='Walk the city; take a bus to Glastonbury.'),
      daytrips=[day('bath', 'wells', '조각상 정면의 대성당과 해자 주교관을 보고, 글래스턴베리 토르에 오릅니다.|The statue-fronted cathedral and moated palace, then Glastonbury Tor.')]),
    C(id='jurassic-coast', group_title=SW, after='salisbury', ko='쥐라기 해안', en='Jurassic Coast', native='Jurassic Coast (Lyme Regis)', lat=50.7253, lng=-2.9365,
      blurb=['2억 년 가까운 지구 역사가 절벽에 드러난 해안으로, 유네스코 세계유산입니다. 거점 마을 라임 레지스는 화석 사냥꾼 메리 애닝의 마을이며, 동쪽엔 바다 아치 더들 도어가 있습니다.',
             'A coast whose cliffs reveal almost 200 million years of Earth’s history, a UNESCO World Heritage Site; the base town of Lyme Regis was fossil hunter Mary Anning’s home, and to the east stands the sea arch of Durdle Door.'],
      highlights=[
          H('라임 레지스 코브', 'The Cobb, Lyme Regis', '항구를 감싸는 굽은 돌 방파제로, 소설과 영화에 자주 나옵니다.', 'The curving stone harbour wall, familiar from novels and films.', 'The Cobb Lyme Regis', 30, 45, b='no', n=FREE),
          H('라임 레지스 박물관', 'Lyme Regis Museum', '메리 애닝의 집터에 선 박물관으로, 이 해안의 화석과 화석 발굴의 역사를 전시합니다.', 'The museum on the site of Mary Anning’s home, with the coast’s fossils and the story of fossil hunting.', 'Lyme Regis Museum', 45, 60),
          H('차머스 화석 해변', 'Charmouth fossil beach', '썰물 때 해변에서 암모나이트 화석을 찾을 수 있는 곳으로, 해설 센터가 있습니다.', 'A beach where ammonites can be found at low tide, with a heritage centre.', 'Charmouth Heritage Coast Centre', 90, 120, b='no', n='절벽 가까이는 낙석 위험이 있으니 피하세요.|Keep away from the cliffs: rockfalls happen.'),
          H('더들 도어와 럴워스 코브', 'Durdle Door & Lulworth Cove', '석회암 바다 아치와 조개 모양의 작은 만으로, 절벽 길로 이어집니다.', 'The limestone sea arch and the shell-shaped cove, linked by a cliff path.', 'Durdle Door', 120, 180, group=DAY, b='no', n=FREE),
      ],
      hubs="    air: [['Exeter (EXT)', '엑서터 공항 (EXT)', '엑서터|Exeter']],\n    rail: [['Axminster', '액스민스터역', '라임 레지스까지 버스|bus to Lyme Regis']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['더들 도어|Durdle Door', 4]]},
      season='봄~가을이 해안 길 걷기에 좋고, 화석은 겨울 폭풍 뒤에 잘 드러납니다.|Spring to autumn for the coast path; winter storms expose the most fossils.',
      stay=[('라임 레지스', 'Lyme Regis', 'Lyme Regis', FIRST, '해변과 코브, 박물관이 걸어서 닿습니다.|The beach, Cobb and museum on foot.')],
      routes=[R('london', 'jurassic-coast', 'train', 205, '액스민스터에서 버스|bus from Axminster')],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다니고, 해안 마을 사이는 버스나 차로 이동합니다.', en='Walk the town; use buses or a car between coastal villages.')),
]


if __name__ == '__main__':
    run(CITIES)
    co = rd('countries.ts')
    a = "'stratford-upon-avon', 'birmingham', 'warwick'"
    assert co.count(a) == 2
    wr('countries.ts', co.replace(a, "'birmingham', 'stratford-upon-avon', 'warwick'"))
