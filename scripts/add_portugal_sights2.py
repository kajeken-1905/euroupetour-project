#!/usr/bin/env python3
"""Portugal second pass (2026-10-31, user request with the owner's own photos): sights the owner photographed that the
app lacked in Lisbon and Porto, Aveiro's missing classics, a three-day Porto, then the list regrouping from
add_portugal_sights.py again. Run once."""
import add_portugal_sights as P
from add_daytrip_places import rd, wr

P.NEW = {
    'lisbon': [
        dict(ko='아우구스타 거리와 개선문', en='Rua Augusta and its Arch', dko='호시우에서 코메르시우 광장까지 이어지는 보행자 거리와 그 끝의 개선문으로, 꼭대기 전망대에서 광장과 테주강이 내려다보입니다.', den='The pedestrian street from Rossio to the Praça do Comércio and the arch at its end, whose rooftop looks over the square and the Tagus.', maps='Arco da Rua Augusta',
             visit=dict(min=30, max=45, c='daily', s='https://www.visitlisboa.com/en/places/arco-da-rua-augusta', n='개선문 전망대는 매일 10:00~19:00(마지막 입장 18:30)에 열고 리스보아 카드가 있으면 무료입니다.|The arch’s viewpoint opens daily 10:00–19:00 (last entry 18:30) and is free with the Lisboa Card.', k='2026-10')),
        dict(ko='상 페드루 드 알칸타라 전망대', en='Miradouro de São Pedro de Alcântara', dko='바이후 알투 끝의 정원 전망대로 바이샤 너머 상조르즈 성이 정면으로 보입니다.', den='The garden viewpoint at the edge of Bairro Alto, facing São Jorge Castle across the Baixa.', maps='Miradouro de São Pedro de Alcântara',
             visit=dict(min=15, max=30, n='무료입니다. 아래 헤스타우라도레스 광장과 잇는 글로리아 푸니쿨라는 운행 중단 중이라 걸어 오릅니다.|Free. The Glória funicular up from Restauradores is suspended, so walk up.')),
        dict(ko='파르크 다스 나송이스와 케이블카', en='Parque das Nações and the cable car', dko='엑스포 98 부지에 들어선 강변 신시가지로 바스코 다 가마 다리와 산책로가 있고, 강을 따라 케이블카가 다닙니다.', den='The riverside district built for Expo 98, with the Vasco da Gama Bridge, promenades and a cable car along the water.', maps='Parque das Nações Lisboa',
             visit=dict(min=90, max=150, n='지하철 빨간 선 오리엔트역에서 내립니다. 케이블카 운행 시간과 요금은 공식 사이트에서 확인하세요.|Take the red metro line to Oriente. Check the cable car’s hours and fares on its site.')),
    ],
    'porto': [
        dict(ko='아리아두스 거리와 시청', en='Avenida dos Aliados and City Hall', dko='시청 종탑이 끝을 맺는 넓은 중심 대로로 20세기 초 건물이 양옆에 늘어서 있습니다.', den='The grand central avenue closed by the City Hall tower and lined with early-20th-century buildings.', maps='Avenida dos Aliados Porto',
             visit=dict(min=20, max=30, n='무료이며 상 벤투역에서 걸어서 약 5분입니다.|Free, about five minutes’ walk from São Bento station.')),
        dict(ko='산타 카타리나 거리', en='Rua de Santa Catarina', dko='포르투의 대표 보행자 쇼핑 거리로 1921년 문을 연 마제스틱 카페가 있습니다.', den='Porto’s main pedestrian shopping street, home to the Majestic Café, opened in 1921.', maps='Rua de Santa Catarina Porto',
             visit=dict(min=30, max=60, n='알마스 예배당의 아줄레주 벽도 이 거리에 있습니다.|The tiled Capela das Almas is on the same street.')),
        dict(ko='산투 일데폰수 성당', en='Church of Santo Ildefonso', dko='파란 아줄레주 1만 1천여 장이 정면을 덮은 18세기 성당으로 바탈랴 광장 위에 서 있습니다.', den='An 18th-century church above Praça da Batalha, its front covered in some 11,000 blue tiles.', maps='Igreja de Santo Ildefonso Porto',
             visit=dict(min=15, max=20)),
        dict(ko='모후 정원', en='Jardim do Morro', dko='루이스 1세 다리 남쪽 끝의 언덕 정원으로 강 건너 히베이라와 구시가가 한눈에 들어옵니다.', den='The hillside garden at the south end of the Luís I Bridge, with the whole of Ribeira and the old town across the river.', maps='Jardim do Morro Vila Nova de Gaia',
             visit=dict(min=20, max=40, n='다리 위층을 걸어서 건너면 바로이며, 해 질 녘 전망이 가장 좋습니다.|Right at the end of the bridge’s upper deck; best at sunset.')),
        dict(ko='카사 다 무지카', en='Casa da Música', dko='렘 콜하스가 설계한 다면체 콘서트홀로 보아비스타 로터리에 있습니다.', den='Rem Koolhaas’s faceted concert hall on the Boavista roundabout.', maps='Casa da Música Porto',
             visit=dict(min=60, max=90, b='rec', s='https://casadamusica.com/en/a-casa/guided-tours/', n='가이드 투어는 약 1시간이며 언어별 시간은 미리 확인해야 합니다. 일반 12유로입니다.|Guided tours last about an hour; check the times for each language in advance. Standard ticket €12.', k='2026-10')),
        dict(ko='포즈 두 도루', en='Foz do Douro', dko='도루강이 대서양과 만나는 해안 동네로 등대와 바닷가 산책로가 이어집니다.', den='The seaside district where the Douro meets the Atlantic, with lighthouses and an ocean promenade.', maps='Foz do Douro Porto',
             visit=dict(min=90, max=150, n='시내에서 1번 트램이나 500번 버스로 강을 따라 갑니다.|Ride tram 1 or bus 500 along the river from the centre.')),
    ],
    'aveiro': [
        dict(ko='아베이루 박물관', en='Aveiro Museum', dko='15세기 헤수스 수녀원에 자리한 박물관으로 성녀 조아나 공주의 대리석 무덤과 금박 성당이 있습니다.', den='A museum in the 15th-century Convent of Jesus, with the marble tomb of Saint Joanna and a gilded chapel.', maps='Museu de Aveiro Santa Joana',
             visit=dict(min=60, max=90, n='대성당 바로 앞입니다.|Opposite the cathedral.')),
        dict(ko='바하 해변과 등대', en='Barra beach and lighthouse', dko='포르투갈에서 가장 높은 등대가 서 있는 대서양 해변으로 코스타 노바 바로 북쪽입니다.', den='The Atlantic beach under Portugal’s tallest lighthouse, just north of Costa Nova.', maps='Farol da Barra Aveiro',
             visit=dict(min=60, max=120, n='시내에서 버스로 약 25분이며 코스타 노바와 묶어 봅니다.|About 25 minutes by bus from town; pair it with Costa Nova.')),
        dict(ko='비스타 알레그르', en='Vista Alegre', dko='1824년 문을 연 도자기 회사의 박물관과 공장 마을이 있는 일랴부의 명소입니다.', den='The porcelain maker founded in 1824, with its museum and factory village at Ílhavo.', maps='Museu Vista Alegre Ílhavo',
             visit=dict(min=90, max=120, s='https://vistaalegre.com/', n='시내에서 남쪽으로 약 8km입니다.|About 8 km south of town.')),
    ],
}
ITIN = [
    ("      ['호시우에서 바이샤·알파마|Rossio, Baixa & Alfama', 15, 8, 7, 11, 13, 4, 23, 3],\n",
     "      ['호시우에서 바이샤·알파마|Rossio, Baixa & Alfama', 15, 8, 24, 7, 11, 13, 4, 23, 3],\n"),
    ("      ['굴벤키안·해양관과 시아두|Gulbenkian, the Oceanário & Chiado', 20, 21, 17, 22],\n",
     "      ['굴벤키안·해양관과 시아두|Gulbenkian, the Oceanário & Chiado', 20, 21, 17, 25, 22],\n"),
    ("""      ['상 벤투역에서 대성당·히베이라|São Bento, the cathedral & Ribeira', 8, 6, 11, 12, 13, 1, 2, 5],
      ['클레리구스에서 서쪽으로|Clérigos and the west', 3, 4, 7, 9, 15, 14],
""", """      ['볼량에서 대성당·히베이라|Bolhão, the cathedral & Ribeira', 8, 18, 19, 17, 6, 11, 12, 13, 1],
      ['다리 건너 가이아와 클레리구스|Across the bridge to Gaia, then Clérigos', 2, 20, 5, 3, 4, 7, 9, 15],
      ['보아비스타에서 바다까지|Boavista to the sea', 21, 14, 22],
"""),
    ("  aveiro: { days: [['', 6, 1, 2, 3, 5]], trips: [['코스타 노바|Costa Nova', 4]] },\n",
     "  aveiro: { days: [['', 6, 1, 2, 3, 7, 5]], trips: [['코스타 노바와 바하|Costa Nova & Barra', 4, 8], ['비스타 알레그르|Vista Alegre', 9]] },\n"),
]


def main():
    P.EXTRA['lisbon'][26] = 21  # Parque das Nações: listed beside the Oceanário, kept out of the long day
    cities = rd('cities.ts')
    if 'id: "porto-h17"' not in cities:
        cities = P.add_new(cities)
        wr('cities.ts', cities)
    it = rd('itinerary-iberia.ts')
    for old, new in ITIN:
        assert old in it or new in it, old
        it = it.replace(old, new)
    wr('itinerary-iberia.ts', it)
    for cid in ('lisbon', 'porto', 'aveiro'):
        cities = P.regroup(cities, it, cid)
    wr('cities.ts', cities)


if __name__ == '__main__':
    main()
