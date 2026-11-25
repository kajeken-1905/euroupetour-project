#!/usr/bin/env python3
"""UK 2nd pass (2026-11-25, user approved): +27 sights in 18 existing cities. Facts from Wikipedia (en): Science Museum
South Kensington, free, Apollo 10 command module; Tate Britain at Millbank, British art from 1500, Turner Bequest in the
Clore Gallery, free; St Dunstan-in-the-East church bombed in the Blitz (1941), Wren tower, ruins made a public garden;
Scottish National Gallery on the Mound, free; Royal Botanic Garden Edinburgh, free garden, glasshouses closed for the
Edinburgh Biomes rebuilding; Burrell Collection in Pollok Country Park, reopened 2022, free; Willow Tea Rooms designed by
Charles Rennie Mackintosh (1903), restored as Mackintosh at the Willow; National Museum Cardiff in Cathays Park, free,
Impressionists from the Davies sisters' bequest; Llandaff Cathedral with Epstein's Majestas; Belfast Cathedral Quarter
around St Anne's Cathedral; Botanic Gardens with the Victorian Palm House beside Queen's University's Lanyon Building;
Manchester Museum reopened 2023, free; St George's Hall, Neoclassical (1854) opposite Lime Street; Merchant Adventurers'
Hall, York, medieval guildhall (1357–61); Magdalen College and Addison's Walk with its deer park; Grantchester reached by
the meadows or by punt, Orchard Tea Garden; Holburne Museum at the end of Great Pulteney Street in Sydney Gardens;
Aerospace Bristol at Filton with Concorde Alpha Foxtrot, the last Concorde to fly; Walmer Castle, Henrician artillery
fort, residence of the Lord Warden of the Cinque Ports, gardens; International Bomber Command Centre, Lincoln, memorial
spire; Godrevy Lighthouse, inspiration for Woolf's To the Lighthouse; Mary Arden's Farm at Wilmcote, home of
Shakespeare's mother; Chipping Campden wool town, Market Hall 1627; Keswick and Derwentwater launches. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
NEAR = ('근교', 'Nearby')
VF = 'visit-uk.ts'
ADD = {
 'london': [
  (30, S('과학 박물관', 'Science Museum', '사우스켄싱턴의 과학·기술 박물관으로, 아폴로 10호 사령선과 증기 기관, 체험 전시가 있습니다. 입장은 무료입니다.', 'The science and technology museum in South Kensington, with the Apollo 10 command module, steam engines and hands-on galleries; entry is free.', 'Science Museum London', 120, 180, b='no', n=FREE)),
  (31, S('테이트 브리튼', 'Tate Britain', '템스강 가 밀뱅크의 미술관으로, 1500년부터 오늘날까지의 영국 미술과 터너의 작품을 모은 전시실이 있습니다. 상설 전시는 무료입니다.', 'The gallery at Millbank on the Thames, covering British art from 1500 to today, with a dedicated Turner collection; the permanent collection is free.', 'Tate Britain', 90, 120, b='no', n='상설 전시는 무료이고 특별전은 유료입니다.|Free permanent collection; special exhibitions are ticketed.')),
  (32, S('세인트 던스턴 인 더 이스트', 'St Dunstan-in-the-East', '1941년 공습으로 무너진 교회 터를 정원으로 꾸민 곳으로, 담쟁이 덮인 벽과 렌이 지은 탑이 남아 있습니다.', 'A church ruined in the 1941 Blitz and turned into a garden, with ivy-clad walls and Wren’s surviving tower.', 'St Dunstan in the East', 15, 20, b='no', n=FREE)),
 ],
 'edinburgh': [
  (15, S('스코틀랜드 국립 미술관', 'Scottish National Gallery', '마운드 언덕의 미술관으로, 르네상스부터 인상파까지 유럽 회화와 스코틀랜드 회화를 전시합니다. 입장은 무료입니다.', 'The gallery on the Mound, with European painting from the Renaissance to the Impressionists and Scottish art; entry is free.', 'Scottish National Gallery', 60, 90, b='no', n=FREE)),
  (16, S('로열 보타닉 가든', 'Royal Botanic Garden Edinburgh', '뉴타운 북쪽의 넓은 식물원으로, 바위 정원과 중국 언덕 정원이 있고 시내 스카이라인이 보입니다.', 'The large botanic garden north of the New Town, with a rock garden, a Chinese hillside and views of the skyline.', 'Royal Botanic Garden Edinburgh', 90, 120, b='no', n='정원은 무료입니다. 온실은 재건축 공사로 닫혀 있습니다.|The garden is free; the glasshouses are closed for rebuilding.')),
 ],
 'glasgow': [
  (8, S('버렐 컬렉션', 'The Burrell Collection', '폴록 컨트리 파크 안의 미술관으로, 해운업자 버렐이 모은 중세 태피스트리·중국 도자기·인상파 그림을 전시합니다. 2022년 새로 단장해 다시 문을 열었고 입장은 무료입니다.', 'The museum in Pollok Country Park showing shipowner William Burrell’s medieval tapestries, Chinese ceramics and Impressionist paintings; it reopened after refurbishment in 2022 and entry is free.', 'Burrell Collection', 120, 150, b='no', n=FREE)),
  (9, S('매킨토시 앳 더 윌로', 'Mackintosh at the Willow', '찰스 레니 매킨토시가 1903년 설계한 윌로 티룸을 복원한 곳으로, 그가 꾸민 방에서 차를 마시고 전시를 봅니다.', 'Charles Rennie Mackintosh’s Willow Tea Rooms of 1903, restored: take tea in his interiors and see the exhibition.', 'Mackintosh at the Willow', 60, 90, b='rec', n='찻집은 예약하는 것이 좋습니다.|Booking the tea room is advisable.')),
 ],
 'cardiff': [
  (6, S('카디프 국립 박물관', 'National Museum Cardiff', '캐세이즈 공원의 박물관으로, 데이비스 자매가 기증한 인상파 그림과 웨일스의 자연사를 전시합니다. 입장은 무료입니다.', 'The museum in Cathays Park, with Impressionist paintings bequeathed by the Davies sisters and Welsh natural history; entry is free.', 'National Museum Cardiff', 90, 120, b='no', n=FREE)),
  (7, S('랜다프 대성당', 'Llandaff Cathedral', '시내 북서쪽 옛 마을의 대성당으로, 신랑 가운데 걸린 엡스타인의 그리스도상 ‘마예스타스’가 인상적입니다.', 'The cathedral in the old village of Llandaff, dominated by Epstein’s figure of Christ in Majesty above the nave.', 'Llandaff Cathedral', 30, 45, b='no', n=FREE)),
 ],
 'belfast': [
  (7, S('캐시드럴 쿼터', 'Cathedral Quarter', '세인트 앤 대성당 주변 옛 골목에 펍과 식당, 벽화가 모인 동네입니다.', 'The old lanes around St Anne’s Cathedral, full of pubs, restaurants and murals.', 'Cathedral Quarter Belfast', 45, 90, b='no', n=FREE)),
  (8, S('보타닉 가든과 퀸스 대학교', 'Botanic Gardens & Queen’s University', '빅토리아 시대 유리 온실 팜 하우스가 있는 공원으로, 바로 옆에 퀸스 대학교의 붉은 벽돌 본관이 있습니다.', 'A park with the Victorian Palm House glasshouse, next to the red-brick Lanyon Building of Queen’s University.', 'Botanic Gardens Belfast', 45, 60, b='no', n=FREE)),
 ],
 'manchester': [
  (10, S('맨체스터 박물관', 'Manchester Museum', '맨체스터 대학교의 자연사·고고학 박물관으로, 이집트 유물과 공룡 화석이 있습니다. 2023년 새로 단장했고 입장은 무료입니다.', 'The University of Manchester’s museum of natural history and archaeology, with Egyptian collections and dinosaur fossils; reopened after redevelopment in 2023, free.', 'Manchester Museum', 90, 120, b='no', n=FREE)),
 ],
 'liverpool': [
  (10, S('세인트 조지 홀', 'St George’s Hall', '라임 스트리트역 맞은편의 1854년 신고전주의 건물로, 화려한 대홀과 옛 법정을 둘러봅니다.', 'The Neoclassical hall of 1854 opposite Lime Street station, with a magnificent Great Hall and old courtrooms.', 'St George’s Hall Liverpool', 45, 60)),
 ],
 'york': [
  (9, S('머천트 어드벤처러스 홀', 'Merchant Adventurers’ Hall', '1357~61년에 지은 상인 조합 회관으로, 중세 목조 대홀이 남아 있습니다.', 'The merchants’ guildhall built in 1357–61, with its great timber-framed medieval hall.', 'Merchant Adventurers Hall York', 45, 60)),
 ],
 'oxford': [
  (11, S('모들린 칼리지와 애디슨 산책로', 'Magdalen College & Addison’s Walk', '첼웰강 가의 칼리지로, 사슴 공원과 강가 산책로 애디슨스 워크가 있습니다.', 'The college on the River Cherwell, with its deer park and the riverside Addison’s Walk.', 'Magdalen College Oxford', 60, 90)),
 ],
 'cambridge': [
  (9, S('그랜체스터', 'Grantchester', '초원 길을 걷거나 나룻배로 닿는 강가 마을로, 과수원 찻집 ‘오처드 티 가든’에서 쉬어 갑니다.', 'A riverside village reached across the meadows or by punt, where you stop for tea at the Orchard Tea Garden.', 'The Orchard Tea Garden Grantchester', 120, 180, group=NEAR, b='no', n='시내에서 걸어서 약 1시간입니다.|About an hour’s walk from the centre.')),
 ],
 'bath': [
  (10, S('홀번 미술관', 'Holburne Museum', '그레이트 풀트니 거리 끝 시드니 가든스 안의 미술관으로, 게인즈버러 등 18세기 그림과 장식 미술을 전시합니다.', 'The museum at the end of Great Pulteney Street in Sydney Gardens, with 18th-century paintings such as Gainsborough’s and decorative arts.', 'Holburne Museum', 60, 90)),
 ],
 'bristol': [
  (8, S('에어로스페이스 브리스톨', 'Aerospace Bristol', '필턴의 항공 박물관으로, 마지막으로 비행한 콩코드 ‘알파 폭스트롯’ 안에 들어가 봅니다.', 'The aviation museum at Filton, where you can board Concorde Alpha Foxtrot, the last Concorde to fly.', 'Aerospace Bristol', 150, 180, group=NEAR)),
 ],
 'dover': [
  (5, S('월머 성', 'Walmer Castle', '헨리 8세가 지은 해안 포대 성으로, 오친 항구 장관의 관저로 쓰였고 정원이 아름답습니다.', 'Henry VIII’s coastal artillery fort, later the residence of the Lord Warden of the Cinque Ports, with lovely gardens.', 'Walmer Castle', 90, 120, group=NEAR, n='겨울엔 문을 여는 날이 줄어듭니다.|Opening days are reduced in winter.')),
 ],
 'lincoln': [
  (6, S('국제 폭격기 사령부 센터', 'International Bomber Command Centre', '시내 남쪽 언덕의 추모 첨탑과 전시관으로, 제2차 세계대전 폭격기 사령부 대원들을 기립니다.', 'The memorial spire and exhibition on a hill south of the city, remembering the crews of Bomber Command in the Second World War.', 'International Bomber Command Centre', 60, 90)),
 ],
 'st-ives': [
  (5, S('고드레비 등대', 'Godrevy Lighthouse', '바위섬 위의 하얀 등대로, 버지니아 울프의 ‘등대로’에 영감을 주었습니다. 맞은편 곶에서 바라보며 바다표범을 볼 때도 있습니다.', 'The white lighthouse on its rocky islet that inspired Virginia Woolf’s To the Lighthouse; seen from the headland opposite, where seals are often spotted.', 'Godrevy Point', 60, 90, group=NEAR, b='no', n=FREE)),
 ],
 'stratford-upon-avon': [
  (6, S('메리 아든의 농장', 'Mary Arden’s Farm', '셰익스피어 어머니의 집이 있는 윌름코트의 농장으로, 튜더 시대 농촌 생활을 재현합니다.', 'The Wilmcote farm of Shakespeare’s mother, recreating Tudor farm life.', 'Mary Arden’s Farm', 90, 120, group=NEAR, n='봄~가을에 엽니다.|Open from spring to autumn.')),
 ],
 'cotswolds': [
  (6, S('치핑 캠든', 'Chipping Campden', '양모 무역으로 번성한 마을로, 1627년 마켓 홀과 꿀빛 석회암 집들이 하이 스트리트에 늘어서 있습니다.', 'A wool town whose High Street is lined with honey-coloured stone houses and the Market Hall of 1627.', 'Chipping Campden Market Hall', 60, 90, b='no', n=FREE)),
 ],
 'lake-district': [
  (6, S('케직과 더웬트워터', 'Keswick & Derwentwater', '호숫가 마을 케직에서 유람선을 타고 더웬트워터 호수를 돌며 산책로 선착장에 내립니다.', 'From the lakeside town of Keswick, take the launch round Derwentwater and hop off at the walking piers.', 'Keswick Launch', 120, 180, b='no', n='마을은 무료이고 유람선은 유료입니다.|The town is free; the launch is not.')),
 ],
}


def groups_of(c, cid):
    out = []
    for m in re.finditer(rf'id: "{cid}-h(\d+)"(.*?)\n      \}}', c, re.S):
        g = re.search(r'group: \{ ko: "([^"]*)", en: "([^"]*)" \}', m.group(2))
        out.append((int(m.group(1)), g.groups() if g else None))
    return out


def ins(o, after, new):
    out = []
    for n, gr in o:
        out.append((n, gr))
        if n == after:
            out += [(x, gx if gx != 'same' else gr) for x, gx in new]
    return out


def place(c, cid, steps):
    new = {n for n, _ in ADD[cid]}
    o = [x for x in groups_of(c, cid) if x[0] not in new]
    for after, items in steps:
        o = ins(o, after, items)
    return reorder(c, cid, o)


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, VF)
    c = place(c, 'london', [(16, [(31, 'same')]), (23, [(32, 'same')]), (18, [(30, 'same')])])
    c = place(c, 'edinburgh', [(11, [(15, 'same'), (16, 'same')])])
    c = place(c, 'glasgow', [(2, [(9, None)]), (6, [(8, None)])])
    c = place(c, 'cardiff', [(1, [(6, None)]), (5, [(7, None)])])
    c = place(c, 'belfast', [(4, [(7, None)]), (6, [(8, None)])])
    c = place(c, 'manchester', [(2, [(10, None)])])
    c = place(c, 'liverpool', [(5, [(10, None)])])
    c = place(c, 'york', [(2, [(9, None)])])
    c = place(c, 'oxford', [(6, [(11, None)])])
    c = place(c, 'cambridge', [(3, [(9, NEAR)])])
    c = place(c, 'bath', [(5, [(10, None)])])
    c = place(c, 'bristol', [(1, [(8, NEAR)])])
    c = place(c, 'dover', [(4, [(5, NEAR)])])
    c = place(c, 'lincoln', [(5, [(6, None)])])
    c = place(c, 'st-ives', [(4, [(5, NEAR)])])
    c = place(c, 'stratford-upon-avon', [(2, [(6, NEAR)])])
    c = place(c, 'cotswolds', [(5, [(6, None)])])
    c = place(c, 'lake-district', [(5, [(6, None)])])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
