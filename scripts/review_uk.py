#!/usr/bin/env python3
"""UK step 1 (2026-11-05, all-country plan): more sights for 17 UK cities, incl. whisky distilleries
(Scotch Whisky Experience, Clydeside, Glenfiddich, Talisker). London and Edinburgh grouped by district; the rest in
itinerary order. Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
FREE = '무료입니다(특별전은 유료).|Free (special exhibitions are ticketed).'
ADD = {
 'london': [
  (16, S('내셔널 갤러리', 'National Gallery', '트라팔가 광장에 면한 미술관으로, 반 고흐 ‘해바라기’와 터너·레오나르도 등 13~20세기 유럽 회화를 모았습니다.', 'The gallery on Trafalgar Square, with European painting from the 13th to the 20th century, from Leonardo to Turner and Van Gogh’s Sunflowers.', 'National Gallery London', 120, 180, n=FREE)),
  (17, S('자연사 박물관', 'Natural History Museum', '대성당 같은 로마네스크 건물에 공룡 화석과 대왕고래 뼈가 있는 자연사 박물관입니다.', 'The cathedral-like Romanesque building with dinosaur fossils and a blue-whale skeleton.', 'Natural History Museum London', 120, 180, n=FREE)),
  (18, S('빅토리아 앤드 앨버트 박물관', 'Victoria and Albert Museum', '디자인·공예·패션을 모은 세계 최대급 장식 미술 박물관입니다.', 'One of the world’s greatest museums of design, crafts and fashion.', 'Victoria and Albert Museum', 120, 180, n=FREE)),
  (19, S('테이트 모던', 'Tate Modern', '템스강 변 옛 발전소를 바꾼 현대 미술관으로, 거대한 터빈 홀이 상징입니다.', 'The modern art museum in a former power station on the Thames, famous for its vast Turbine Hall.', 'Tate Modern', 90, 120, n=FREE)),
  (20, S('셰익스피어 글로브', 'Shakespeare’s Globe', '셰익스피어 시대의 원형 극장을 복원한 곳으로, 지붕 없는 극장에서 연극을 보거나 투어를 합니다.', 'A reconstruction of Shakespeare’s open-air playhouse, for plays or guided tours.', 'Shakespeare’s Globe', 60, 180)),
  (21, S('처칠 전쟁 상황실', 'Churchill War Rooms', '제2차 세계 대전 때 처칠 내각이 쓰던 지하 벙커를 그대로 보존한 박물관입니다.', 'The underground bunker used by Churchill’s war cabinet in World War II, preserved as it was.', 'Churchill War Rooms', 90, 120, b='rec', n='시간 지정 표라 미리 사는 편이 좋습니다.|Timed tickets—best bought ahead.')),
  (22, S('켄싱턴 궁전', 'Kensington Palace', '켄싱턴 가든스 안의 왕실 궁전으로, 빅토리아 여왕이 태어난 곳입니다.', 'The royal palace in Kensington Gardens where Queen Victoria was born.', 'Kensington Palace', 90, 120)),
  (23, S('스카이 가든', 'Sky Garden', '시티의 ‘워키토키’ 빌딩 꼭대기 정원 전망대로, 런던 시내가 한눈에 보입니다.', 'The garden viewing deck atop the City’s “Walkie-Talkie” tower, with views across London.', 'Sky Garden London', 45, 60, b='req', n='무료지만 미리 예약해야 하고, 표는 보통 몇 주 전에 풀립니다.|Free, but booking is required; slots are released a few weeks ahead.')),
  (24, S('레든홀 마켓', 'Leadenhall Market', '시티의 빅토리아 시대 지붕 덮인 시장으로, 해리 포터 영화에 나왔습니다.', 'The Victorian covered market in the City, seen in the Harry Potter films.', 'Leadenhall Market', 15, 30)),
  (25, S('캠던 마켓', 'Camden Market', '운하 옆 옛 마구간 건물에 노점과 길거리 음식이 모인 시장입니다.', 'The canal-side market of stalls and street food in the old stables.', 'Camden Market', 60, 120)),
  (26, S('그리니치(왕립 천문대와 커티삭)', 'Greenwich (Royal Observatory & Cutty Sark)', '본초 자오선이 지나는 왕립 천문대와 차 무역 범선 커티삭, 국립 해양 박물관이 모인 유네스코 세계유산 지구입니다.', 'The UNESCO-listed riverside district with the Royal Observatory on the Prime Meridian, the tea clipper Cutty Sark and the National Maritime Museum.', 'Royal Observatory Greenwich', 180, 240, n='템스강 배나 DLR로 갑니다. 해양 박물관은 무료이고 천문대·커티삭은 유료입니다.|Reach it by Thames boat or DLR; the Maritime Museum is free, the Observatory and Cutty Sark are ticketed.')),
  (27, S('큐 가든', 'Kew Gardens', '거대한 온실과 나무 위 산책로가 있는 왕립 식물원으로, 유네스코 세계유산입니다.', 'The Royal Botanic Gardens, with great glasshouses and a treetop walkway; a UNESCO World Heritage Site.', 'Kew Gardens', 180, 240, group=DAY)),
  (28, S('해리 포터 스튜디오 투어', 'Warner Bros. Studio Tour – The Making of Harry Potter', '영화 해리 포터를 찍은 스튜디오에서 세트와 소품을 보는 투어로, 런던 북서쪽 리브스든에 있습니다.', 'The studio where the Harry Potter films were made, with sets and props, at Leavesden north-west of London.', 'Warner Bros. Studio Tour London', 240, 300, group=DAY, b='req', n='시간 지정 표를 미리 사야 합니다. 왓퍼드 정션역에서 셔틀버스가 다닙니다.|Timed tickets must be booked ahead; shuttle buses run from Watford Junction.')),
  (29, S('햄프턴 코트 궁전', 'Hampton Court Palace', '헨리 8세의 튜더 궁전으로, 바로크 정원과 생울타리 미로가 있습니다.', 'Henry VIII’s Tudor palace, with Baroque gardens and a hedge maze.', 'Hampton Court Palace', 180, 240, group=DAY)),
 ],
 'edinburgh': [
  (8, S('스카치 위스키 익스피리언스', 'The Scotch Whisky Experience', '에든버러 성 앞의 위스키 체험관으로, 통 모양 차를 타고 제조 과정을 보고 세계 최대 스카치 컬렉션 앞에서 시음합니다.', 'The whisky experience by the castle: ride a barrel through the making of Scotch and taste in front of the world’s largest collection.', 'The Scotch Whisky Experience', 60, 90)),
  (9, S('세인트 자일스 대성당', 'St Giles’ Cathedral', '로열 마일 한가운데의 왕관 모양 첨탑 교회로, 엉겅퀴 예배당이 볼거리입니다.', 'The crown-spired church halfway down the Royal Mile, with the ornate Thistle Chapel.', 'St Giles’ Cathedral Edinburgh', 30, 45)),
  (10, S('빅토리아 스트리트와 그레이프라이어스', 'Victoria Street & Greyfriars Kirkyard', '알록달록한 곡선 상점가와, 충견 보비 이야기가 전하는 옛 묘지입니다.', 'The curving street of colourful shopfronts and the old kirkyard of the loyal dog Greyfriars Bobby.', 'Victoria Street Edinburgh', 30, 45)),
  (11, S('딘 빌리지', 'Dean Village', '리스강 계곡에 숨은 옛 방앗간 마을로, 시내 한가운데서 걸어서 15분 거리입니다.', 'The old mill village hidden in the Water of Leith valley, 15 minutes’ walk from the centre.', 'Dean Village', 30, 45)),
  (12, S('스콧 기념탑과 프린세스 스트리트 가든스', 'Scott Monument & Princes Street Gardens', '작가 월터 스콧을 기리는 고딕 첨탑과, 성 아래 옛 호수 자리의 정원입니다.', 'The Gothic spire honouring Sir Walter Scott and the gardens below the castle on a drained loch.', 'Scott Monument', 30, 60)),
  (13, S('카메라 옵스큐라와 착시의 세계', 'Camera Obscura & World of Illusions', '19세기 카메라 옵스큐라로 시내를 비추고 착시 전시를 보는 체험관입니다.', 'A 19th-century camera obscura projecting the city, plus floors of optical illusions.', 'Camera Obscura Edinburgh', 60, 90)),
  (14, S('로열 요트 브리타니아', 'Royal Yacht Britannia', '엘리자베스 2세가 40여 년 타던 왕실 요트로, 리스 항에 정박해 있습니다.', 'The royal yacht used by Queen Elizabeth II for over 40 years, moored at Leith.', 'Royal Yacht Britannia', 90, 120, group=DAY)),
 ],
 'manchester': [
  (8, S('국립 축구 박물관', 'National Football Museum', '세계 최대 규모의 축구 박물관으로, 직접 차 보는 체험도 있습니다.', 'The world’s largest football museum, with hands-on games.', 'National Football Museum Manchester', 90, 120)),
  (9, S('에티하드 스타디움 투어', 'Etihad Stadium Tour', '맨체스터 시티의 홈구장 투어로, 라커룸과 터널을 걸어 봅니다.', 'Tour of Manchester City’s home ground, through the dressing room and tunnel.', 'Etihad Stadium Manchester', 90, 90, b='rec', n='경기 날엔 투어가 없거나 바뀝니다.|Tours change or stop on match days.')),
 ],
 'bath': [
  (7, S('펄트니 다리', 'Pulteney Bridge', '양쪽에 상점이 늘어선 18세기 다리로, 아래로 계단식 둑이 보입니다.', 'The 18th-century bridge lined with shops, above a horseshoe weir.', 'Pulteney Bridge Bath', 10, 20)),
  (8, S('서메 배스 스파', 'Thermae Bath Spa', '천연 온천수를 쓰는 현대식 스파로, 옥상 노천탕에서 시내가 보입니다.', 'The modern spa using Bath’s natural hot springs, with a rooftop pool over the city.', 'Thermae Bath Spa', 120, 180)),
  (9, S('제인 오스틴 센터', 'Jane Austen Centre', '배스에 살았던 작가 제인 오스틴과 당시 생활을 소개하는 전시관입니다.', 'An exhibition on Jane Austen, who lived in Bath, and Regency life.', 'Jane Austen Centre Bath', 45, 60)),
 ],
 'oxford': [
  (7, S('탄식의 다리(허트퍼드 다리)', 'Bridge of Sighs', '허트퍼드 칼리지의 두 건물을 잇는 지붕 다리입니다.', 'The covered skyway joining two parts of Hertford College.', 'Bridge of Sighs Oxford', 5, 10)),
  (8, S('셸도니언 극장', 'Sheldonian Theatre', '크리스토퍼 렌이 설계한 대학 의식장으로, 지붕 위 큐폴라에서 시내가 보입니다.', 'Christopher Wren’s university ceremonial hall, whose cupola looks over the city.', 'Sheldonian Theatre', 30, 45)),
  (9, S('피트 리버스 박물관', 'Pitt Rivers Museum', '자연사 박물관 안쪽의 인류학 박물관으로, 빽빽한 진열장에 세계 각지의 유물이 가득합니다.', 'The anthropology museum behind the Natural History Museum, its crowded cases full of objects from around the world.', 'Pitt Rivers Museum', 60, 90, n=FREE)),
  (10, S('블레넘 궁전', 'Blenheim Palace', '처칠이 태어난 바로크 궁전으로, 유네스코 세계유산입니다.', 'The Baroque palace where Winston Churchill was born, a UNESCO World Heritage Site.', 'Blenheim Palace', 180, 240, group=DAY, n='옥스퍼드에서 버스로 약 30분입니다.|About 30 min by bus from Oxford.')),
 ],
 'cambridge': [
  (7, S('트리니티 칼리지와 렌 도서관', 'Trinity College & Wren Library', '뉴턴이 공부한 칼리지로, 크리스토퍼 렌이 지은 도서관을 정해진 시간에 볼 수 있습니다.', 'Newton’s college, whose Wren Library opens at set times.', 'Trinity College Cambridge', 45, 60)),
  (8, S('캠강 펀팅', 'Punting on the Cam', '평저선을 장대로 밀며 칼리지 뒤편 ‘백스’를 따라 내려가는 케임브리지 명물입니다.', 'Poling a flat-bottomed punt along the Backs behind the colleges.', 'Punting Cambridge', 45, 60)),
 ],
 'liverpool': [
  (7, S('피어 헤드와 로열 리버 빌딩', 'Pier Head & Royal Liver Building', '리버 버드 조각을 얹은 ‘세 여신’ 건물이 선 강변 광장으로, 비틀스 동상이 있습니다.', 'The waterfront of the “Three Graces” crowned by the Liver Birds, with the Beatles statue.', 'Royal Liver Building', 30, 45)),
  (8, S('캐번 클럽', 'The Cavern Club', '비틀스가 300번 가까이 공연한 매슈 스트리트의 클럽으로, 지금도 라이브 공연이 열립니다.', 'The Mathew Street club where the Beatles played nearly 300 times, still hosting live music.', 'The Cavern Club Liverpool', 45, 90)),
  (9, S('안필드 스타디움 투어', 'Anfield Stadium Tour', '리버풀 FC 홈구장 투어와 클럽 박물관입니다.', 'Tour and museum at Liverpool FC’s home ground.', 'Anfield Stadium Tour', 90, 90, b='rec', n='경기 날엔 투어가 없거나 바뀝니다.|Tours change or stop on match days.')),
 ],
 'brighton': [
  (7, S('세븐 시스터스', 'Seven Sisters', '하얀 백악 절벽 일곱 봉우리가 이어지는 해안으로, 절벽 위 산책로를 걷습니다.', 'A chain of seven white chalk cliffs, walked along the clifftop path.', 'Seven Sisters Country Park', 180, 240, group=DAY, n='브라이턴에서 버스로 약 1시간입니다.|About 1 hr by bus from Brighton.')),
 ],
 'york': [
  (7, S('요르빅 바이킹 센터', 'JORVIK Viking Centre', '발굴된 바이킹 시대 요크 거리를 재현한 체험관입니다.', 'A recreation of Viking-age York built on its excavated street.', 'JORVIK Viking Centre', 60, 90)),
  (8, S('요크스 초콜릿 스토리', 'York’s Chocolate Story', '킷캣·스마티스를 낳은 초콜릿 도시 요크의 역사를 보는 체험관입니다.', 'The story of York as the chocolate city behind KitKat and Smarties.', 'York’s Chocolate Story', 60, 75)),
 ],
 'bristol': [
  (7, S('엠 셰드', 'M Shed', '항구 창고 박물관으로, 브리스톨의 역사와 사람들을 보여 줍니다.', 'The harbourside museum of Bristol’s history and people.', 'M Shed Bristol', 60, 90, n=FREE)),
 ],
 'stratford-upon-avon': [
  (5, S('셰익스피어의 뉴 플레이스', 'Shakespeare’s New Place', '셰익스피어가 말년을 보낸 집터에 꾸민 정원과 전시입니다.', 'The garden and exhibition on the site of Shakespeare’s last home.', 'Shakespeare’s New Place', 30, 45)),
 ],
 'glasgow': [
  (6, S('클라이드사이드 증류소', 'The Clydeside Distillery', '클라이드강 변 옛 펌프하우스의 싱글몰트 증류소로, 투어 뒤 시음합니다.', 'A single-malt distillery in an old pumphouse on the Clyde, with tours and tastings.', 'The Clydeside Distillery', 60, 75, b='rec')),
  (7, S('헌터리안 박물관', 'Hunterian Museum', '글래스고 대학의 고딕 건물 안 박물관으로, 매킨토시 하우스 재현 공간이 있습니다.', 'The museum in the University of Glasgow’s Gothic buildings, with the reassembled Mackintosh House.', 'Hunterian Museum Glasgow', 60, 90, n=FREE)),
 ],
 'stirling': [
  (5, S('둔 성', 'Doune Castle', '14세기 성으로, ‘몬티 파이선’과 드라마 ‘아웃랜더’·‘왕좌의 게임’ 촬영지입니다.', 'The 14th-century castle used in Monty Python, Outlander and Game of Thrones.', 'Doune Castle', 60, 90, group=DAY, n='스털링에서 버스로 약 25분입니다.|About 25 min by bus from Stirling.')),
 ],
 'inverness': [
  (6, S('글렌피딕 증류소(더프타운)', 'Glenfiddich Distillery (Dufftown)', '스페이사이드 싱글몰트의 대표 증류소로, 가족 경영 시절부터의 설비를 둘러보고 시음합니다.', 'A flagship Speyside single-malt distillery, toured with a tasting.', 'Glenfiddich Distillery', 90, 120, group=DAY, b='rec', n='인버네스에서 차로 약 1시간 20분이라 투어나 차가 편합니다.|About 1 hr 20 by car from Inverness; easiest by tour or car.')),
 ],
 'isle-of-skye': [
  (6, S('탈리스커 증류소', 'Talisker Distillery', '카보스트 바닷가의 스카이섬 대표 증류소로, 바다 내음 나는 싱글몰트로 유명합니다.', 'Skye’s distillery on the shore at Carbost, known for its maritime single malt.', 'Talisker Distillery', 60, 90, b='rec')),
 ],
 'belfast': [
  (5, S('크럼린 로드 교도소', 'Crumlin Road Gaol', '1996년까지 쓰인 빅토리아 시대 교도소로, 투어로 감방과 터널을 봅니다.', 'The Victorian prison used until 1996, toured through cells and the tunnel.', 'Crumlin Road Gaol', 75, 90)),
  (6, S('얼스터 박물관', 'Ulster Museum', '식물원 옆의 박물관으로, 북아일랜드 분쟁 전시와 미술·자연사를 모았습니다.', 'The museum by the Botanic Gardens, covering the Troubles, art and natural history.', 'Ulster Museum', 60, 90, n=FREE)),
 ],
}
IT = [
 ("  london: {\n    days: [\n      ['웨스트민스터|Westminster', 1, 3, 15, 2, 9, 12, 7],\n      ['시티와 사우스뱅크|The City & South Bank', 6, 11, 5, 13],\n      ['대영박물관과 서쪽 런던|British Museum & west London', 4, 10, 8, 14],\n    ],\n  },",
  "  london: {\n    days: [\n      ['웨스트민스터|Westminster', 1, 15, 2, 3, 21, 9, 12, 16, 7],\n      ['시티와 사우스뱅크|The City & South Bank', 6, 11, 5, 24, 23, 20, 19, 13],\n      ['켄싱턴과 노팅힐|Kensington & Notting Hill', 17, 18, 22, 8, 14],\n      ['대영박물관과 캠던|British Museum & Camden', 4, 10, 25],\n      ['그리니치|Greenwich', 26],\n    ],\n    trips: [\n      ['큐 가든|Kew Gardens', 27],\n      ['햄프턴 코트|Hampton Court', 29],\n      ['해리 포터 스튜디오|Harry Potter studio', 28],\n    ],\n  },"),
 ("      ['에든버러 성과 올드타운|Castle & Old Town', 2, 7, 6, 3],\n      ['홀리루드와 언덕|Holyrood & the hills', 1, 4, 5],\n    ],\n  },",
  "      ['에든버러 성과 올드타운|Castle & Old Town', 2, 13, 8, 9, 3, 10, 7, 6],\n      ['홀리루드와 뉴타운|Holyrood & New Town', 1, 4, 5, 12, 11],\n    ],\n    trips: [['리스와 브리타니아호|Leith & Britannia', 14]],\n  },"),
 ("      ['시내|City centre', 5, 1, 6, 2, 4],\n      ['살포드 키스와 올드 트래포드|Salford Quays & Old Trafford', 7, 3],",
  "      ['시내|City centre', 5, 8, 1, 6, 2, 4],\n      ['살포드 키스와 축구장|Salford Quays & the stadiums', 7, 3, 9],"),
 ("  bath: [3, 1, 4, 6, 2],", "  bath: [3, 1, 4, 7, 8, 9, 6, 2],"),
 ("  oxford: [4, 2, 3, 5, 1, 6],", "  oxford: { days: [['', 4, 8, 2, 7, 3, 5, 1, 9, 6]], trips: [['블레넘 궁전|Blenheim Palace', 10]] },"),
 ("  cambridge: [6, 5, 1, 4, 2, 3],", "  cambridge: [6, 5, 1, 7, 8, 4, 2, 3],"),
 ("  liverpool: [3, 6, 5, 1, 2],", "  liverpool: [3, 6, 5, 8, 7, 1, 2, 9],"),
 ("  brighton: [1, 6, 3, 2, 4, 5],", "  brighton: { days: [['', 1, 6, 3, 2, 4, 5]], trips: [['세븐 시스터스|Seven Sisters', 7]] },"),
 ("  york: [6, 5, 1, 3, 2, 4],", "  york: [6, 5, 1, 3, 2, 8, 7, 4],"),
 ("  bristol: [3, 4, 2, 6, 5, 1],", "  bristol: [3, 4, 2, 7, 6, 5, 1],"),
 ("  'stratford-upon-avon': [1, 3, 4, 2],", "  'stratford-upon-avon': [1, 5, 3, 4, 2],"),
 ("  glasgow: [5, 1, 3, 2, 4],", "  glasgow: [5, 1, 3, 2, 7, 4, 6],"),
 ("  stirling: { days: [['', 1, 3, 2]], trips: [['켈피스|The Kelpies', 4]] },",
  "  stirling: { days: [['', 1, 3, 2]], trips: [['켈피스|The Kelpies', 4], ['둔 성|Doune Castle', 5]] },"),
 ("      ['컬로든|Culloden', 3],\n    ],", "      ['컬로든|Culloden', 3],\n      ['스페이사이드 위스키|Speyside whisky', 6],\n    ],"),
 ("      ['서부 스카이|West Skye', 2, 5],", "      ['서부 스카이|West Skye', 2, 6, 5],"),
 ("  belfast: [3, 2, 4, 1],", "  belfast: [3, 5, 2, 4, 6, 1],"),
]
G = {
 'london': [(('웨스트민스터', 'Westminster'), [1, 15, 2, 3, 21, 9, 12, 16]), (('코번트 가든과 블룸즈버리', 'Covent Garden & Bloomsbury'), [7, 4]),
            (('시티', 'The City'), [6, 11, 5, 24, 23]), (('사우스뱅크', 'South Bank'), [20, 19, 13]),
            (('켄싱턴과 하이드 파크', 'Kensington & Hyde Park'), [17, 18, 22, 8]), (('노팅힐·메릴본·캠던', 'Notting Hill, Marylebone & Camden'), [14, 10, 25]),
            (('그리니치', 'Greenwich'), [26]), (DAY, [27, 29, 28])],
 'edinburgh': [(('올드타운', 'Old Town'), [2, 13, 8, 9, 3, 10, 7, 6]), (('홀리루드', 'Holyrood'), [1, 4]),
               (('뉴타운과 딘 빌리지', 'New Town & Dean Village'), [5, 12, 11]), (DAY, [14])],
}


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-uk.ts')
    it = rd('itinerary-uk.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-uk.ts', it)
    for cid in ADD:
        if cid in G:
            c = reorder(c, cid, [(n, g) for g, ns in G[cid] for n in ns])
        else:
            by = blocks(c, cid)
            c = reorder(c, cid, [(n, read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
