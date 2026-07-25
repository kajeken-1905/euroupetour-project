#!/usr/bin/env python3
"""Generate ES / PT / GR / PL / HR / IE / IS catalog data and flag assets."""

from __future__ import annotations

from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"
FLAGS = ROOT / "public" / "flags"

EXPORT_NAMES = {
    "es": "placesESExtra",
    "pt": "placesPTExtra",
    "gr": "placesGRExtra",
    "pl": "placesPLExtra",
    "hr": "placesHRExtra",
    "ie": "placesIEExtra",
    "is": "placesISExtra",
}

GROUPS = {
    "es": [
        "madrid", "barcelona", "seville", "granada", "valencia",
        "malaga", "bilbao", "toledo", "cordoba", "san-sebastian",
    ],
    "pt": ["lisbon", "porto", "sintra", "faro", "coimbra", "funchal", "lagos"],
    "gr": [
        "athens", "santorini", "heraklion", "mykonos",
        "rhodes", "thessaloniki", "corfu", "nafplio",
    ],
    "pl": ["warsaw", "krakow", "gdansk", "wroclaw", "poznan", "zakopane", "torun"],
    "hr": ["zagreb", "dubrovnik", "split", "zadar", "rovinj", "hvar"],
    "ie": ["dublin", "galway", "cork", "killarney", "kilkenny", "limerick"],
    "is": ["reykjavik", "akureyri", "vik", "husavik", "selfoss"],
}


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def highlight(city: str, n: int, ko: str, en: str, dko: str, den: str, query: str) -> str:
    q = quote(query)
    return f"""      {{
        id: "{city}-h{n}",
        name: {{ ko: "{ko}", en: "{en}" }},
        description: {{ ko: "{dko}", en: "{den}" }},
        image: "/highlights/{city}-{n}.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query={q}",
      }}"""


CITIES = [
    # —— Spain ——
    {
        "id": "madrid",
        "countryId": "es",
        "ko": "마드리드",
        "en": "Madrid",
        "native": "Madrid",
        "blurb_ko": "스페인 수도. 미술관·타파스·레티로 공원이 여행의 중심입니다.",
        "blurb_en": "Spanish capital—museums, tapas, and Retiro Park.",
        "highlights": [
            ("프라도 미술관", "Prado Museum", "벨라스케스·고야 컬렉션의 상징입니다.", "Home of Velázquez and Goya.", "Prado Museum Madrid"),
            ("레티로 공원", "Retiro Park", "호수와 산책로가 있는 도심 공원입니다.", "Central park with lake and walks.", "Retiro Park Madrid"),
            ("왕궁", "Royal Palace", "유럽 최대급 왕궁 단지입니다.", "One of Europe’s largest palaces.", "Royal Palace Madrid"),
            ("플라사 마요르", "Plaza Mayor", "아치형 광장과 카페입니다.", "Arcaded square and cafés.", "Plaza Mayor Madrid"),
            ("그란 비아", "Gran Vía", "쇼핑·극장 대로입니다.", "Shopping and theatre avenue.", "Gran Vía Madrid"),
        ],
    },
    {
        "id": "barcelona",
        "countryId": "es",
        "ko": "바르셀로나",
        "en": "Barcelona",
        "native": "Barcelona",
        "blurb_ko": "가우디와 지중해의 도시. 고딕 지구와 해변을 함께 즐깁니다.",
        "blurb_en": "Gaudí and the Mediterranean—Gothic Quarter and beaches.",
        "highlights": [
            ("사그라다 파밀리아", "Sagrada Família", "가우디의 미완성 대성당입니다.", "Gaudí’s unfinished basilica.", "Sagrada Familia Barcelona"),
            ("파르크 구엘", "Park Güell", "모자이크와 전망의 공원입니다.", "Mosaic park with city views.", "Park Güell"),
            ("고딕 지구", "Gothic Quarter", "중세 골목과 대성당입니다.", "Medieval lanes and cathedral.", "Barri Gòtic Barcelona"),
            ("람블라스", "La Rambla", "카페와 시장이 있는 산책로입니다.", "Promenade of cafés and markets.", "La Rambla Barcelona"),
            ("바르셀로네타 해변", "Barceloneta Beach", "도심 옆 지중해 해변입니다.", "City beach on the Mediterranean.", "Barceloneta Beach"),
        ],
    },
    {
        "id": "seville",
        "countryId": "es",
        "ko": "세비야",
        "en": "Seville",
        "native": "Sevilla",
        "blurb_ko": "안달루시아의 심장. 알카사르·대성당·플라멩코가 유명합니다.",
        "blurb_en": "Heart of Andalusia—Alcázar, cathedral, and flamenco.",
        "highlights": [
            ("알카사르", "Alcázar of Seville", "무데하르 왕궁과 정원입니다.", "Mudéjar palace and gardens.", "Alcázar of Seville"),
            ("세비야 대성당", "Seville Cathedral", "히랄다 탑이 있는 고딕 대성당입니다.", "Gothic cathedral with the Giralda.", "Seville Cathedral"),
            ("플라사 데 에스파냐", "Plaza de España", "반원형 광장과 운하입니다.", "Semicircle plaza and canal.", "Plaza de España Seville"),
            ("트리아나", "Triana", "플라멩코와 도자기 지구입니다.", "Flamenco and ceramics quarter.", "Triana Seville"),
            ("메트로폴 파라솔", "Metropol Parasol", "현대 목재 전망 구조물입니다.", "Modern timber lookout structure.", "Metropol Parasol"),
        ],
    },
    {
        "id": "granada",
        "countryId": "es",
        "ko": "그라나다",
        "en": "Granada",
        "native": "Granada",
        "blurb_ko": "알함브라가 있는 산악 도시. 알바이신과 시에라네바다가 매력입니다.",
        "blurb_en": "Home of the Alhambra—Albaicín and Sierra Nevada views.",
        "highlights": [
            ("알함브라", "Alhambra", "나스르 왕조의 궁전과 정원입니다.", "Nasrid palace and gardens.", "Alhambra Granada"),
            ("알바이신", "Albaicín", "흰 집 골목의 이슬람 지구입니다.", "Whitewashed Moorish quarter.", "Albaicín Granada"),
            ("헤네랄리페", "Generalife", "알함브라 여름 별궁 정원입니다.", "Summer palace gardens.", "Generalife Granada"),
            ("대성당", "Granada Cathedral", "르네상스 대성당입니다.", "Renaissance cathedral.", "Granada Cathedral"),
            ("사크로몬테", "Sacromonte", "동굴 플라멩코 지구입니다.", "Cave flamenco district.", "Sacromonte Granada"),
        ],
    },
    {
        "id": "valencia",
        "countryId": "es",
        "ko": "발렌시아",
        "en": "Valencia",
        "native": "València",
        "blurb_ko": "파에야의 고향. 예술과학도시와 구시가가 공존합니다.",
        "blurb_en": "Home of paella—City of Arts and Sciences and old town.",
        "highlights": [
            ("예술과학도시", "City of Arts and Sciences", "미래형 건축 단지입니다.", "Futuristic architecture complex.", "City of Arts and Sciences"),
            ("중앙시장", "Mercado Central", "활기찬 식료품 시장입니다.", "Bustling food market.", "Mercado Central Valencia"),
            ("대성당·미게레테", "Valencia Cathedral", "성배 전승과 종탑입니다.", "Cathedral and Miguelete tower.", "Valencia Cathedral"),
            ("실크 거래소", "La Lonja", "고딕 실크 거래소입니다.", "Gothic silk exchange.", "La Lonja Valencia"),
            ("말라바로사 해변", "Malvarrosa Beach", "도시 해변 산책로입니다.", "City beach promenade.", "Malvarrosa Beach"),
        ],
    },
    {
        "id": "malaga",
        "countryId": "es",
        "ko": "말라가",
        "en": "Málaga",
        "native": "Málaga",
        "blurb_ko": "코스타델솔의 관문. 피카소·알카사바·항구가 매력입니다.",
        "blurb_en": "Costa del Sol gateway—Picasso, Alcazaba, and harbour.",
        "highlights": [
            ("알카사바", "Alcazaba", "언덕 위 무어 요새입니다.", "Hilltop Moorish fortress.", "Alcazaba Málaga"),
            ("피카소 미술관", "Picasso Museum", "피카소 고향 미술관입니다.", "Museum in Picasso’s hometown.", "Picasso Museum Málaga"),
            ("대성당", "Málaga Cathedral", "르네상스·바로크 대성당입니다.", "Renaissance-Baroque cathedral.", "Málaga Cathedral"),
            ("항구 산책로", "Muelle Uno", "항구 쇼핑·산책 지구입니다.", "Harbour shopping promenade.", "Muelle Uno Málaga"),
            ("히브랄파로", "Gibralfaro", "항구 전망 성채입니다.", "Castle with harbour views.", "Gibralfaro Málaga"),
        ],
    },
    {
        "id": "bilbao",
        "countryId": "es",
        "ko": "빌바오",
        "en": "Bilbao",
        "native": "Bilbo",
        "blurb_ko": "바스크의 현대 도시. 구겐하임과 핀초 문화가 유명합니다.",
        "blurb_en": "Basque modern city—Guggenheim and pintxo culture.",
        "highlights": [
            ("구겐하임 미술관", "Guggenheim Museum", "티타늄 곡선의 현대미술관입니다.", "Titanium modern art museum.", "Guggenheim Bilbao"),
            ("카스코 비에호", "Casco Viejo", "일곱 거리의 구시가입니다.", "Old town of seven streets.", "Casco Viejo Bilbao"),
            ("도고나 광장", "Plaza Nueva", "핀초 바 광장입니다.", "Pintxo-bar square.", "Plaza Nueva Bilbao"),
            ("아레나스 다리", "Puente de Vizcaya", "세계유산 곤돌라 다리입니다.", "UNESCO transporter bridge.", "Vizcaya Bridge"),
            ("리비아 강변", "Ría de Bilbao", "강변 산책과 현대 건축입니다.", "Riverside walks and modern architecture.", "Ría de Bilbao"),
        ],
    },
    {
        "id": "toledo",
        "countryId": "es",
        "ko": "톨레도",
        "en": "Toledo",
        "native": "Toledo",
        "blurb_ko": "세 문화가 공존한 역사 도시. 성벽과 타호 강 전망이 인상적입니다.",
        "blurb_en": "Historic city of three cultures—walls and Tagus views.",
        "highlights": [
            ("톨레도 대성당", "Toledo Cathedral", "스페인 고딕의 걸작입니다.", "Masterpiece of Spanish Gothic.", "Toledo Cathedral"),
            ("알카사르", "Alcázar of Toledo", "언덕 위 요새·박물관입니다.", "Hilltop fortress museum.", "Alcázar of Toledo"),
            ("산토 토메", "Santo Tomé", "엘 그레코의 매장이 있는 교회입니다.", "Church with El Greco’s Burial.", "Santo Tomé Toledo"),
            ("산 후안 데 로스 레예스", "San Juan de los Reyes", "이사벨 양식 수도원입니다.", "Isabelline monastery.", "San Juan de los Reyes"),
            ("타호 강 전망", "Tagus viewpoints", "성벽 도시 전경 포인트입니다.", "Viewpoints over the walled city.", "Mirador del Valle Toledo"),
        ],
    },
    {
        "id": "cordoba",
        "countryId": "es",
        "ko": "코르도바",
        "en": "Córdoba",
        "native": "Córdoba",
        "blurb_ko": "메스키타의 도시. 파티오와 유대인 지구가 아름답습니다.",
        "blurb_en": "City of the Mezquita—patios and the Judería.",
        "highlights": [
            ("메스키타", "Mosque-Cathedral", "이슬람 사원에서 성당이 된 건축입니다.", "Mosque turned cathedral.", "Mezquita Córdoba"),
            ("유대인 지구", "Judería", "흰 골목과 시나고가입니다.", "White lanes and synagogue.", "Judería Córdoba"),
            ("알카사르 정원", "Alcázar gardens", "중세 왕궁 정원입니다.", "Medieval royal gardens.", "Alcázar de los Reyes Cristianos"),
            ("로마 다리", "Roman Bridge", "과달키비르 강 석교입니다.", "Stone bridge on the Guadalquivir.", "Roman Bridge Córdoba"),
            ("파티오 축제", "Patios of Córdoba", "꽃으로 장식된 중정입니다.", "Flower-filled courtyards.", "Patios de Córdoba"),
        ],
    },
    {
        "id": "san-sebastian",
        "countryId": "es",
        "ko": "산세바스티안",
        "en": "San Sebastián",
        "native": "Donostia",
        "blurb_ko": "바스크 미식의 수도. 콘차 해변과 핀초 바가 상징입니다.",
        "blurb_en": "Basque food capital—La Concha beach and pintxo bars.",
        "highlights": [
            ("콘차 해변", "La Concha Beach", "초승달 모양의 상징 해변입니다.", "Iconic crescent beach.", "La Concha San Sebastián"),
            ("구시가 핀초", "Old Town pintxos", "파티 거리의 핀초 바입니다.", "Pintxo bars on Party Street.", "Parte Vieja San Sebastián"),
            ("우르굴 산", "Monte Urgull", "성채와 만 전망입니다.", "Castle and bay views.", "Monte Urgull"),
            ("페우스 섬", "Santa Clara Island", "만 한가운데 작은 섬입니다.", "Island in the middle of the bay.", "Santa Clara Island"),
            ("미라마레 궁전", "Miramar Palace", "영국풍 별궁과 정원입니다.", "English-style palace and gardens.", "Miramar Palace"),
        ],
    },
    # —— Portugal ——
    {
        "id": "lisbon",
        "countryId": "pt",
        "ko": "리스본",
        "en": "Lisbon",
        "native": "Lisboa",
        "blurb_ko": "언덕과 트램의 수도. 벨렘·알파마·야경이 매력입니다.",
        "blurb_en": "Hilly tram capital—Belém, Alfama, and night views.",
        "highlights": [
            ("벨렘탑", "Belém Tower", "대항해시대의 석조 탑입니다.", "Age of Discoveries stone tower.", "Belém Tower"),
            ("제로니무스 수도원", "Jerónimos Monastery", "마누엘 양식 수도원입니다.", "Manueline monastery.", "Jerónimos Monastery"),
            ("알파마", "Alfama", "골목과 파두의 구시가입니다.", "Lanes and fado old town.", "Alfama Lisbon"),
            ("상조르즈 성", "São Jorge Castle", "시내 전망 성채입니다.", "Castle with city views.", "São Jorge Castle"),
            ("타임아웃 마켓", "Time Out Market", "미식 푸드홀입니다.", "Gourmet food hall.", "Time Out Market Lisbon"),
        ],
    },
    {
        "id": "porto",
        "countryId": "pt",
        "ko": "포르투",
        "en": "Porto",
        "native": "Porto",
        "blurb_ko": "포트와인과 도우루 강변의 도시. 히베이라가 상징입니다.",
        "blurb_en": "Port wine and Douro riverfront—Ribeira is the icon.",
        "highlights": [
            ("히베이라", "Ribeira", "유네스코 강변 구시가입니다.", "UNESCO riverside old town.", "Ribeira Porto"),
            ("루이스 1세 다리", "Dom Luís I Bridge", "강 위 복층 철교입니다.", "Double-deck iron bridge.", "Dom Luís I Bridge"),
            ("클레리구스 탑", "Clérigos Tower", "바로크 전망 탑입니다.", "Baroque lookout tower.", "Clérigos Tower"),
            ("리버라토리우", "Livraria Lello", "아름다운 서점입니다.", "Ornate historic bookshop.", "Livraria Lello"),
            ("빌라노바 와인 셀러", "Vila Nova de Gaia cellars", "포트와인 셀러 투어입니다.", "Port wine cellar tours.", "Port wine cellars Gaia"),
        ],
    },
    {
        "id": "sintra",
        "countryId": "pt",
        "ko": "신트라",
        "en": "Sintra",
        "native": "Sintra",
        "blurb_ko": "동화 같은 궁전 마을. 리스본 근교 데이트립의 필수입니다.",
        "blurb_en": "Fairy-tale palace town—essential Lisbon day trip.",
        "highlights": [
            ("페나 궁전", "Pena Palace", "알록달록 낭만주의 궁전입니다.", "Colourful Romanticist palace.", "Pena Palace"),
            ("신트라 국립궁전", "National Palace of Sintra", "쌍둥이 굴뚝의 왕궁입니다.", "Palace with twin chimneys.", "Sintra National Palace"),
            ("무어성", "Castle of the Moors", "능선 위 성벽 산책입니다.", "Ridge-top castle walls.", "Castelo dos Mouros"),
            ("퀸타다헤갈레이라", "Quinta da Regaleira", "이니셔틱 정원과 우물입니다.", "Initiation wells and gardens.", "Quinta da Regaleira"),
            ("카브랄 몬세라트", "Monserrate Palace", "동양풍 별궁과 식물원입니다.", "Orientalist palace and gardens.", "Monserrate Palace"),
        ],
    },
    {
        "id": "faro",
        "countryId": "pt",
        "ko": "파로",
        "en": "Faro",
        "native": "Faro",
        "blurb_ko": "알가르브의 관문. 구시가와 리아포르모사 석호가 있습니다.",
        "blurb_en": "Algarve gateway—old town and Ria Formosa lagoons.",
        "highlights": [
            ("시다드 벨랴", "Cidade Velha", "성벽 안 구시가입니다.", "Walled old town.", "Faro Old Town"),
            ("파로 대성당", "Faro Cathedral", "광장 앞 대성당입니다.", "Cathedral on the square.", "Faro Cathedral"),
            ("리아포르모사", "Ria Formosa", "석호·섬 보트 투어입니다.", "Lagoon and island boat tours.", "Ria Formosa"),
            ("카르모 교회", "Igreja do Carmo", "뼈 예배당으로 유명합니다.", "Famous for its bone chapel.", "Capela dos Ossos Faro"),
            ("파로 해변", "Ilha de Faro", "공항 옆 모래섬 해변입니다.", "Sand-island beach by the airport.", "Ilha de Faro"),
        ],
    },
    {
        "id": "coimbra",
        "countryId": "pt",
        "ko": "코임브라",
        "en": "Coimbra",
        "native": "Coimbra",
        "blurb_ko": "포르투갈 최고 대학 도시. 도서관과 구시가 언덕이 인상적입니다.",
        "blurb_en": "Portugal’s historic university city—library and hill old town.",
        "highlights": [
            ("코임브라 대학", "University of Coimbra", "유네스코 대학 단지입니다.", "UNESCO university complex.", "University of Coimbra"),
            ("조아니나 도서관", "Biblioteca Joanina", "바로크 장식 도서관입니다.", "Baroque library interior.", "Biblioteca Joanina"),
            ("산타크루즈", "Santa Cruz Monastery", "구시가 수도원입니다.", "Old-town monastery.", "Santa Cruz Coimbra"),
            ("옛 대성당", "Sé Velha", "로마네스크 대성당입니다.", "Romanesque cathedral.", "Sé Velha Coimbra"),
            ("몬데고 강변", "Mondego riverfront", "강변 공원 산책입니다.", "Riverside park walks.", "Mondego Coimbra"),
        ],
    },
    {
        "id": "funchal",
        "countryId": "pt",
        "ko": "푼샬",
        "en": "Funchal",
        "native": "Funchal",
        "blurb_ko": "마데이라의 수도. 식물원·케이블카·와인 문화가 유명합니다.",
        "blurb_en": "Madeira’s capital—gardens, cable cars, and wine.",
        "highlights": [
            ("몬테 케이블카", "Monte cable car", "언덕 마을로 오르는 케이블입니다.", "Cable car up to Monte.", "Funchal cable car"),
            ("식물원", "Botanical Garden", "열대 식물 정원입니다.", "Tropical botanical gardens.", "Jardim Botânico Funchal"),
            ("구시가 시장", "Mercado dos Lavradores", "꽃·과일 시장입니다.", "Flower and fruit market.", "Mercado dos Lavradores"),
            ("대성당", "Funchal Cathedral", "마누엘 양식 대성당입니다.", "Manueline cathedral.", "Sé Funchal"),
            ("카마라도로보스", "Câmara de Lobos", "처칠이 사랑한 어촌입니다.", "Fishing village Churchill loved.", "Câmara de Lobos"),
        ],
    },
    {
        "id": "lagos",
        "countryId": "pt",
        "ko": "라고스",
        "en": "Lagos",
        "native": "Lagos",
        "blurb_ko": "알가르브 절벽과 해식동굴의 도시. 해변 투어의 거점입니다.",
        "blurb_en": "Algarve cliffs and sea caves—base for beach tours.",
        "highlights": [
            ("폰타다피에다드", "Ponta da Piedade", "황금 절벽과 해식동굴입니다.", "Golden cliffs and sea caves.", "Ponta da Piedade"),
            ("메이야프라이아", "Meia Praia", "긴 모래사장 해변입니다.", "Long sandy beach.", "Meia Praia Lagos"),
            ("구시가 성벽", "Lagos old walls", "요새화된 구시가입니다.", "Fortified old town.", "Lagos city walls"),
            ("노예시장", "Slave Market Museum", "역사 기념 광장·박물관입니다.", "Historic square and museum.", "Mercado de Escravos Lagos"),
            ("도나아나 해변", "Praia Dona Ana", "절벽 사이 인기 해변입니다.", "Popular beach between cliffs.", "Praia Dona Ana"),
        ],
    },
    # —— Greece ——
    {
        "id": "athens",
        "countryId": "gr",
        "ko": "아테네",
        "en": "Athens",
        "native": "Athína",
        "blurb_ko": "고대와 현대가 공존하는 수도. 아크로폴리스가 상징입니다.",
        "blurb_en": "Ancient and modern capital—the Acropolis is the icon.",
        "highlights": [
            ("아크로폴리스", "Acropolis", "파르테논이 있는 언덕입니다.", "Hill of the Parthenon.", "Acropolis Athens"),
            ("아크로폴리스 박물관", "Acropolis Museum", "유물 전시 현대 박물관입니다.", "Modern museum of Acropolis finds.", "Acropolis Museum"),
            ("플라카", "Plaka", "아크로폴리스 아래 구시가입니다.", "Old town below the Acropolis.", "Plaka Athens"),
            ("고대 아고라", "Ancient Agora", "고전 아테네의 광장 유적입니다.", "Classical civic square ruins.", "Ancient Agora Athens"),
            ("모나스티라키", "Monastiraki", "시장과 루프톱 전망입니다.", "Bazaar and rooftop views.", "Monastiraki"),
        ],
    },
    {
        "id": "santorini",
        "countryId": "gr",
        "ko": "산토리니",
        "en": "Santorini",
        "native": "Santoríni",
        "blurb_ko": "칼데라와 흰 집의 섬. 일몰과 와인이 유명합니다.",
        "blurb_en": "Caldera and whitewashed cliffs—sunsets and wine.",
        "highlights": [
            ("오이아 일몰", "Oia sunset", "세계적 일몰 포인트입니다.", "World-famous sunset viewpoint.", "Oia Santorini"),
            ("피라", "Fira", "절벽 위 수도 마을입니다.", "Cliff-top capital town.", "Fira Santorini"),
            ("레드비치", "Red Beach", "붉은 화산암 해변입니다.", "Red volcanic sand beach.", "Red Beach Santorini"),
            ("아크로티리", "Akrotiri", "청동기 유적지입니다.", "Bronze Age excavation site.", "Akrotiri Santorini"),
            ("와인 투어", "Santorini wineries", "아시르티코 와이너리입니다.", "Assyrtiko wine estates.", "Santorini wineries"),
        ],
    },
    {
        "id": "heraklion",
        "countryId": "gr",
        "ko": "이라클리온",
        "en": "Heraklion",
        "native": "Heráklio",
        "blurb_ko": "크레타의 관문. 크노소스와 고고학 박물관이 핵심입니다.",
        "blurb_en": "Crete’s gateway—Knossos and the archaeology museum.",
        "highlights": [
            ("크노소스", "Knossos", "미노아 궁전 유적입니다.", "Minoan palace ruins.", "Knossos"),
            ("고고학 박물관", "Heraklion Archaeological Museum", "미노아 유물 박물관입니다.", "Museum of Minoan artefacts.", "Heraklion Archaeological Museum"),
            ("쿠레스 요새", "Koules Fortress", "항구의 베네치아 요새입니다.", "Venetian harbour fortress.", "Koules Fortress"),
            ("시내 시장", "Market street", "로컬 먹거리 시장 거리입니다.", "Local food market street.", "1866 Street Heraklion"),
            ("모로스 해변", "Nearby beaches", "근교 모래·자갈 해변입니다.", "Nearby sand and pebble beaches.", "Ammoudara Beach"),
        ],
    },
    {
        "id": "mykonos",
        "countryId": "gr",
        "ko": "미코노스",
        "en": "Mykonos",
        "native": "Mýkonos",
        "blurb_ko": "키클라데스 파티·해변 섬. 리틀베니스가 상징입니다.",
        "blurb_en": "Cycladic beach and nightlife island—Little Venice icon.",
        "highlights": [
            ("리틀베니스", "Little Venice", "바다 위 하얀 집입니다.", "White houses over the water.", "Little Venice Mykonos"),
            ("바람의 방앗간", "Windmills", "섬 상징 풍차입니다.", "Iconic island windmills.", "Mykonos windmills"),
            ("미코노스 타운", "Mykonos Town", "흰 골목과 부티크입니다.", "White lanes and boutiques.", "Chora Mykonos"),
            ("파라다이스 비치", "Paradise Beach", "파티 해변으로 유명합니다.", "Famous party beach.", "Paradise Beach Mykonos"),
            ("델로스 데이트립", "Delos day trip", "고대 성역 섬 투어입니다.", "Ancient sanctuary island tour.", "Delos"),
        ],
    },
    {
        "id": "rhodes",
        "countryId": "gr",
        "ko": "로도스",
        "en": "Rhodes",
        "native": "Ródos",
        "blurb_ko": "중세 성벽 도시의 섬. 구시가와 린도스가 대표적입니다.",
        "blurb_en": "Medieval walled city island—Old Town and Lindos.",
        "highlights": [
            ("로도스 구시가", "Rhodes Old Town", "기사단 성벽 구시가입니다.", "Knights’ walled old town.", "Rhodes Old Town"),
            ("거장의 궁전", "Palace of the Grand Master", "중세 궁전 박물관입니다.", "Medieval palace museum.", "Palace of the Grand Master"),
            ("린도스", "Lindos", "아크로폴리스 흰 마을입니다.", "White village with acropolis.", "Lindos"),
            ("만드락키 항구", "Mandraki Harbour", "사슴 동상의 항구입니다.", "Harbour with deer statues.", "Mandraki Harbour"),
            ("츠암피카 해변", "Tsambika Beach", "인기 모래 해변입니다.", "Popular sandy beach.", "Tsambika Beach"),
        ],
    },
    {
        "id": "thessaloniki",
        "countryId": "gr",
        "ko": "테살로니키",
        "en": "Thessaloniki",
        "native": "Thessaloníki",
        "blurb_ko": "북그리스의 미식·문화 도시. 흰탑과 해안 산책로가 상징입니다.",
        "blurb_en": "Northern food and culture hub—White Tower and waterfront.",
        "highlights": [
            ("흰탑", "White Tower", "해안 상징 탑입니다.", "Waterfront landmark tower.", "White Tower Thessaloniki"),
            ("아리스토텔레스 광장", "Aristotelous Square", "중심 광장과 카페입니다.", "Main square and cafés.", "Aristotelous Square"),
            ("아노폴리", "Ano Poli", "언덕 구시가 전망입니다.", "Upper town hill views.", "Ano Poli"),
            ("로툰다", "Rotunda", "로마·비잔틴 원형 건물입니다.", "Roman-Byzantine rotunda.", "Rotunda Thessaloniki"),
            ("해안 산책로", "New Waterfront", "조각과 공원의 산책로입니다.", "Promenade of parks and sculptures.", "Thessaloniki waterfront"),
        ],
    },
    {
        "id": "corfu",
        "countryId": "gr",
        "ko": "코르푸",
        "en": "Corfu",
        "native": "Kérkyra",
        "blurb_ko": "이오니아의 녹음 섬. 베네치아 구시가와 해변이 매력입니다.",
        "blurb_en": "Green Ionian island—Venetian old town and beaches.",
        "highlights": [
            ("코르푸 구시가", "Corfu Old Town", "유네스코 베네치아 구시가입니다.", "UNESCO Venetian old town.", "Corfu Old Town"),
            ("팔라이오프로우리오", "Old Fortress", "바다 위 옛 요새입니다.", "Old fortress by the sea.", "Palaio Frourio Corfu"),
            ("리스트온", "Liston", "아치형 카페 거리입니다.", "Arcaded café street.", "Liston Corfu"),
            ("팔레오카스트리차", "Paleokastritsa", "만과 수도원 해변입니다.", "Bays and monastery beaches.", "Paleokastritsa"),
            ("아킬레이온", "Achilleion", "엘리자베스 황후의 별장입니다.", "Empress Elisabeth’s villa.", "Achilleion"),
        ],
    },
    {
        "id": "nafplio",
        "countryId": "gr",
        "ko": "나플리오",
        "en": "Nafplio",
        "native": "Náfplio",
        "blurb_ko": "펠로폰네소스의 우아한 항구 도시. 요새와 네오클래식 거리가 아름답습니다.",
        "blurb_en": "Elegant Peloponnese port—fortresses and neoclassical streets.",
        "highlights": [
            ("팔라미디 요새", "Palamidi Fortress", "계단으로 오르는 요새입니다.", "Fortress reached by steps.", "Palamidi"),
            ("부츠르지", "Bourtzi", "만 한가운데 작은 요새입니다.", "Tiny fortress in the bay.", "Bourtzi Nafplio"),
            ("신탁그마 광장", "Syntagma Square", "네오클래식 중심 광장입니다.", "Neoclassical main square.", "Syntagma Square Nafplio"),
            ("아크로나플루아", "Akronafplia", "구시가 위 전망 요새입니다.", "Lookout fortress above town.", "Akronafplia"),
            ("아르바니티아 해변", "Arvanitia Beach", "도보로 가는 자갈 해변입니다.", "Walkable pebble beach.", "Arvanitia Beach"),
        ],
    },
    # —— Poland ——
    {
        "id": "warsaw",
        "countryId": "pl",
        "ko": "바르샤바",
        "en": "Warsaw",
        "native": "Warszawa",
        "blurb_ko": "재건된 수도. 구시가·왕궁광장·비스와 강변이 중심입니다.",
        "blurb_en": "Rebuilt capital—Old Town, Castle Square, and the Vistula.",
        "highlights": [
            ("구시가", "Old Town", "유네스코 재건 구시가입니다.", "UNESCO-rebuilt old town.", "Warsaw Old Town"),
            ("왕궁광장", "Castle Square", "지기스문트 탑이 있는 광장입니다.", "Square with Sigismund’s Column.", "Castle Square Warsaw"),
            ("왕궁 공원", "Łazienki Park", "궁전과 공원의 녹지입니다.", "Palace-in-the-park green space.", "Łazienki Park"),
            ("과학문화궁전", "Palace of Culture", "스카이라인 전망 탑입니다.", "Skyline lookout tower.", "Palace of Culture Warsaw"),
            ("유대인 게토 기념", "POLIN Museum", "유대인 역사 박물관입니다.", "Museum of Polish Jewish history.", "POLIN Museum"),
        ],
    },
    {
        "id": "krakow",
        "countryId": "pl",
        "ko": "크라쿠프",
        "en": "Kraków",
        "native": "Kraków",
        "blurb_ko": "폴란드 고도. 시장광장·바벨·카지미에시가 필수입니다.",
        "blurb_en": "Historic capital—Main Square, Wawel, and Kazimierz.",
        "highlights": [
            ("시장광장", "Main Market Square", "중부 유럽 최대급 광장입니다.", "One of Europe’s largest squares.", "Rynek Główny Kraków"),
            ("바벨 성", "Wawel Castle", "왕궁과 대성당 언덕입니다.", "Royal castle and cathedral hill.", "Wawel Castle"),
            ("천막천정 상회", "Cloth Hall", "르네상스 시장 홀입니다.", "Renaissance market hall.", "Sukiennice"),
            ("카지미에시", "Kazimierz", "유대인 지구·카페 거리입니다.", "Jewish quarter and café streets.", "Kazimierz"),
            ("성모 마리아 성당", "St. Mary’s Basilica", "제단화로 유명한 성당입니다.", "Basilica famous for its altarpiece.", "St Mary Basilica Kraków"),
        ],
    },
    {
        "id": "gdansk",
        "countryId": "pl",
        "ko": "그단스크",
        "en": "Gdańsk",
        "native": "Gdańsk",
        "blurb_ko": "발트해 항구 도시. 장식된 구시가와 연대노조 역사가 있습니다.",
        "blurb_en": "Baltic port—ornate old town and Solidarity history.",
        "highlights": [
            ("들린기 거리", "Długi Targ", "황금빛 구시가 시장 거리입니다.", "Golden old-town market street.", "Długi Targ"),
            ("네ptune 분수", "Neptune’s Fountain", "구시가 상징 분수입니다.", "Old-town landmark fountain.", "Neptune Fountain Gdańsk"),
            ("쥬라브 크레인", "Żuraw Crane", "중세 항구 기중기입니다.", "Medieval harbour crane.", "Żuraw Gdańsk"),
            ("연대 박물관", "European Solidarity Centre", "민주화 운동 박물관입니다.", "Museum of the Solidarity movement.", "European Solidarity Centre"),
            ("올디바 해변", "Oliwa / Sopot day", "근교 스파·해변 데이트립입니다.", "Nearby spa and beach day trip.", "Sopot Beach"),
        ],
    },
    {
        "id": "wroclaw",
        "countryId": "pl",
        "ko": "브로츠와프",
        "en": "Wrocław",
        "native": "Wrocław",
        "blurb_ko": "난쟁이 조각상의 도시. 시장광장과 오드르 강 섬이 매력입니다.",
        "blurb_en": "City of dwarf statues—Market Square and Odra islands.",
        "highlights": [
            ("시장광장", "Market Square", "알록달록 상가 광장입니다.", "Colourful merchant square.", "Wrocław Market Square"),
            ("대성당 섬", "Ostrów Tumski", "고딕 성당이 있는 섬입니다.", "Island of Gothic churches.", "Ostrów Tumski"),
            ("백조 홀", "Centennial Hall", "유네스코 철근콘크리트 홀입니다.", "UNESCO reinforced-concrete hall.", "Centennial Hall"),
            ("난쟁이 찾기", "Wrocław dwarfs", "거리 곳곳의 청동 난쟁이입니다.", "Bronze dwarfs across the city.", "Wrocław dwarfs"),
            ("대학 아울라", "University Aula", "바로크 강당입니다.", "Baroque university hall.", "University of Wrocław"),
        ],
    },
    {
        "id": "poznan",
        "countryId": "pl",
        "ko": "포즈난",
        "en": "Poznań",
        "native": "Poznań",
        "blurb_ko": "염소 시계탑의 도시. 구시가와 대성당 섬이 핵심입니다.",
        "blurb_en": "City of the goat clock—old town and cathedral island.",
        "highlights": [
            ("구시가 광장", "Old Market Square", "염소 인형 쇼 시청입니다.", "Town hall with goat automaton.", "Poznań Old Market"),
            ("대성당 섬", "Ostrów Tumski", "폴란드 초기 기독교 중심입니다.", "Early Christian centre of Poland.", "Ostrów Tumski Poznań"),
            ("황제성", "Imperial Castle", "카이저 시대 성곽입니다.", "Kaiser-era castle.", "Imperial Castle Poznań"),
            ("성 요한 성당", "St. John / Fara", "바로크 본당입니다.", "Baroque parish church.", "Poznań Fara"),
            ("몰타 호수", "Lake Malta", "레저 호수와 케이블입니다.", "Leisure lake and cable cars.", "Lake Malta"),
        ],
    },
    {
        "id": "zakopane",
        "countryId": "pl",
        "ko": "자코파네",
        "en": "Zakopane",
        "native": "Zakopane",
        "blurb_ko": "타트라 산맥의 관문. 케이블카와 산악 마을 분위기가 매력입니다.",
        "blurb_en": "Gateway to the Tatras—cables and mountain-town vibe.",
        "highlights": [
            ("구발루프카", "Gubałówka", "케이블카 전망 언덕입니다.", "Cable-car viewpoint hill.", "Gubałówka"),
            ("카스프로비 비에르흐", "Kasprowy Wierch", "고산 케이블카입니다.", "High-mountain cable car.", "Kasprowy Wierch"),
            ("크루프프키 거리", "Krupówki Street", "산악 상점·식당 거리입니다.", "Mountain shops and dining street.", "Krupówki"),
            ("모르스키에 오코", "Morskie Oko", "타트라 호수 하이킹입니다.", "Tatra lake hike.", "Morskie Oko"),
            ("빌라누프카", "Villa / wooden architecture", "자코파네 양식 목조 건축입니다.", "Zakopane-style wooden houses.", "Zakopane architecture"),
        ],
    },
    {
        "id": "torun",
        "countryId": "pl",
        "ko": "토룬",
        "en": "Toruń",
        "native": "Toruń",
        "blurb_ko": "코페르니쿠스의 고향. 생강빵과 고딕 구시가가 유명합니다.",
        "blurb_en": "Copernicus’s hometown—gingerbread and Gothic old town.",
        "highlights": [
            ("구시가", "Old Town Toruń", "유네스코 고딕 구시가입니다.", "UNESCO Gothic old town.", "Toruń Old Town"),
            ("코페르니쿠스 생가", "Copernicus House", "천문학자 기념 박물관입니다.", "Astronomer’s house museum.", "Copernicus House Toruń"),
            ("시청탑", "Town Hall Tower", "광장 전망 탑입니다.", "Square lookout tower.", "Toruń Town Hall"),
            ("비스와 강변", "Vistula bulwarks", "성벽·강변 산책입니다.", "Walls and riverside walks.", "Toruń bulwarks"),
            ("생강빵 박물관", "Living Museum of Gingerbread", "토룬 생강빵 체험입니다.", "Gingerbread-making experience.", "Gingerbread Museum Toruń"),
        ],
    },
    # —— Croatia ——
    {
        "id": "zagreb",
        "countryId": "hr",
        "ko": "자그레브",
        "en": "Zagreb",
        "native": "Zagreb",
        "blurb_ko": "크로아티아 수도. 상·하 타운과 카페 문화가 활발합니다.",
        "blurb_en": "Croatian capital—Upper/Lower Town and café culture.",
        "highlights": [
            ("상타운", "Upper Town", "성 마르크 교회와 언덕 구시가입니다.", "St Mark’s and hill old town.", "Gornji Grad Zagreb"),
            ("금지된 촬영 박물관", "Museum of Broken Relationships", "독특한 콘셉트 박물관입니다.", "Unique concept museum.", "Museum of Broken Relationships"),
            ("돌라츠 시장", "Dolac Market", "중앙 식료품 시장입니다.", "Central food market.", "Dolac Market"),
            ("젤레니흐 광장", "Ban Jelačić Square", "중심 광장과 트램입니다.", "Main square and trams.", "Ban Jelačić Square"),
            ("미고고야 묘지", "Mirogoj Cemetery", "아치형 묘지 산책로입니다.", "Arcaded cemetery walks.", "Mirogoj"),
        ],
    },
    {
        "id": "dubrovnik",
        "countryId": "hr",
        "ko": "두브로브니크",
        "en": "Dubrovnik",
        "native": "Dubrovnik",
        "blurb_ko": "아드리아해의 성벽 도시. 스트라둔과 성벽 산책이 필수입니다.",
        "blurb_en": "Adriatic walled city—Stradun and wall walks are essential.",
        "highlights": [
            ("성벽 산책", "City Walls", "성벽 위 도시 전망입니다.", "Views from the city walls.", "Dubrovnik City Walls"),
            ("스트라둔", "Stradun", "대리석 메인 거리입니다.", "Marble main street.", "Stradun"),
            ("로브리예나츠", "Fort Lovrijenac", "성 밖 요새 전망입니다.", "Fortress views outside the walls.", "Fort Lovrijenac"),
            ("케이블카", "Srđ cable car", "산 정상 파노라마입니다.", "Mountain panorama cable car.", "Dubrovnik cable car"),
            ("로크룸 섬", "Lokrum Island", "보트 데이트립 섬입니다.", "Boat day-trip island.", "Lokrum"),
        ],
    },
    {
        "id": "split",
        "countryId": "hr",
        "ko": "스플리트",
        "en": "Split",
        "native": "Split",
        "blurb_ko": "디오클레티아누스 궁전의 도시. 섬 페리나 해안 투어의 거점입니다.",
        "blurb_en": "Diocletian’s Palace city—base for islands and coast.",
        "highlights": [
            ("디오클레티아누스 궁전", "Diocletian’s Palace", "로마 궁전 속 구시가입니다.", "Old town inside a Roman palace.", "Diocletian Palace"),
            ("리바", "Riva Promenade", "야자수 해안 산책로입니다.", "Palm-lined waterfront.", "Riva Split"),
            ("마리얀 언덕", "Marjan Hill", "시내 전망 공원입니다.", "City-view park hill.", "Marjan Hill"),
            ("유피테르 신전", "Temple of Jupiter", "로마 신전 유적입니다.", "Roman temple remains.", "Temple of Jupiter Split"),
            ("흐바르·브라치 페리", "Island ferries", "섬으로 가는 페리 허브입니다.", "Ferry hub to the islands.", "Split ferry port"),
        ],
    },
    {
        "id": "zadar",
        "countryId": "hr",
        "ko": "자다르",
        "en": "Zadar",
        "native": "Zadar",
        "blurb_ko": "바다오르간과 일몰의 도시. 로마·중세 유적이 남아 있습니다.",
        "blurb_en": "Sea Organ and sunsets—Roman and medieval remains.",
        "highlights": [
            ("바다오르간", "Sea Organ", "파도로 연주하는 해안 설치물입니다.", "Wave-powered seaside organ.", "Sea Organ Zadar"),
            ("태양의 인사", "Greeting to the Sun", "태양광 원형 설치물입니다.", "Solar circle installation.", "Greeting to the Sun"),
            ("성 도나투스", "St. Donatus Church", "원형 중세 교회입니다.", "Circular medieval church.", "St Donatus Zadar"),
            ("로마 포럼", "Roman Forum", "고대 광장 유적입니다.", "Ancient forum ruins.", "Roman Forum Zadar"),
            ("구시가 골목", "Old Town lanes", "석조 골목과 카페입니다.", "Stone lanes and cafés.", "Zadar Old Town"),
        ],
    },
    {
        "id": "rovinj",
        "countryId": "hr",
        "ko": "로비니",
        "en": "Rovinj",
        "native": "Rovinj",
        "blurb_ko": "이스트리아의 그림 같은 항구. 성 유포미아 언덕이 상징입니다.",
        "blurb_en": "Picture-book Istrian harbour—St Euphemia hill is the icon.",
        "highlights": [
            ("성 유포미아 성당", "St. Euphemia Church", "언덕 위 종탑 전망입니다.", "Hilltop bell-tower views.", "St Euphemia Rovinj"),
            ("구시가 골목", "Old Town Rovinj", "색색 집과 좁은 골목입니다.", "Colourful houses and lanes.", "Rovinj Old Town"),
            ("항구", "Rovinj harbour", "어선과 카페 항구입니다.", "Fishing boats and café harbour.", "Rovinj harbour"),
            ("황금곶 공원", "Zlatni Rt Park", "해안 소나무 공원입니다.", "Coastal pine park.", "Zlatni Rt"),
            ("붉은 섬", "Crveni otok", "보트 데이트립 섬입니다.", "Boat day-trip islands.", "Crveni otok"),
        ],
    },
    {
        "id": "hvar",
        "countryId": "hr",
        "ko": "흐바르",
        "en": "Hvar",
        "native": "Hvar",
        "blurb_ko": "라벤더와 요트의 아드리아 섬. 요새와 광장이 아름답습니다.",
        "blurb_en": "Lavender and yachts—fortress and piazza on the Adriatic.",
        "highlights": [
            ("스판욜라 요새", "Španjola Fortress", "마을 전망 요새입니다.", "Fortress overlooking town.", "Fortica Hvar"),
            ("흐바르 광장", "St. Stephen’s Square", "대리석 메인 광장입니다.", "Marble main piazza.", "Pjaca Hvar"),
            ("파클리니 제도", "Pakleni Islands", "보트 데이트립 섬들입니다.", "Boat day-trip islets.", "Pakleni Islands"),
            ("라벤더 필드", "Lavender fields", "섬 내륙 라벤더 풍경입니다.", "Inland lavender landscapes.", "Hvar lavender"),
            ("스타리그라드", "Stari Grad", "유네스코 평야의 옛 마을입니다.", "Old town by UNESCO plain.", "Stari Grad Hvar"),
        ],
    },
    # —— Ireland ——
    {
        "id": "dublin",
        "countryId": "ie",
        "ko": "더블린",
        "en": "Dublin",
        "native": "Baile Átha Cliath",
        "blurb_ko": "아일랜드 수도. 트리니티·템플바·피닉스파크가 중심입니다.",
        "blurb_en": "Irish capital—Trinity, Temple Bar, and Phoenix Park.",
        "highlights": [
            ("트리니티 칼리지", "Trinity College", "켈스의 서가 있는 대학입니다.", "Home of the Book of Kells.", "Trinity College Dublin"),
            ("템플바", "Temple Bar", "펍과 거리 음악 지구입니다.", "Pubs and street-music quarter.", "Temple Bar Dublin"),
            ("기네스 스토어하우스", "Guinness Storehouse", "기네스 체험 박물관입니다.", "Guinness experience museum.", "Guinness Storehouse"),
            ("피닉스 공원", "Phoenix Park", "유럽 최대급 도심 공원입니다.", "One of Europe’s largest city parks.", "Phoenix Park"),
            ("클리프스오브모허 투어", "Day trips from Dublin", "서부 절벽 투어 출발점입니다.", "Base for west-coast cliff tours.", "Dublin tourist office"),
        ],
    },
    {
        "id": "galway",
        "countryId": "ie",
        "ko": "골웨이",
        "en": "Galway",
        "native": "Gaillimh",
        "blurb_ko": "서부 예술·페스티벌 도시. 라틴쿼터와 클리프스 접근의 거점입니다.",
        "blurb_en": "Western arts city—Latin Quarter and Cliffs of Moher base.",
        "highlights": [
            ("라틴쿼터", "Latin Quarter", "컬러풀 펍·상점 거리입니다.", "Colourful pubs and shops.", "Latin Quarter Galway"),
            ("에이레 광장", "Eyre Square", "도심 중심 광장입니다.", "Central city square.", "Eyre Square"),
            ("갈웨이만", "Galway Bay", "해안 산책과 일몰입니다.", "Bay walks and sunsets.", "Galway Bay"),
            ("클리프스오브모허", "Cliffs of Moher", "근교 절벽 데이트립입니다.", "Nearby cliff day trip.", "Cliffs of Moher"),
            ("아라 제도", "Aran Islands", "페리로 가는 게일어 섬입니다.", "Ferry to Gaelic-speaking islands.", "Aran Islands"),
        ],
    },
    {
        "id": "cork",
        "countryId": "ie",
        "ko": "코크",
        "en": "Cork",
        "native": "Corcaigh",
        "blurb_ko": "아일랜드 남부의 활기찬 도시. 잉글리시마켓과 강섬이 매력입니다.",
        "blurb_en": "Lively southern city—English Market and river islands.",
        "highlights": [
            ("잉글리시마켓", "English Market", "전통 식료품 시장입니다.", "Historic food market.", "English Market Cork"),
            ("성 피니바르 대성당", "St Fin Barre’s Cathedral", "고딕 리바이벌 대성당입니다.", "Gothic Revival cathedral.", "St Fin Barre Cathedral"),
            ("샤논 성", "Shandon Bells", "종탑과 도시 전망입니다.", "Bells and city views.", "Shandon Cork"),
            ("대학 단지", "UCC campus", "대학 정원과 건축입니다.", "University gardens and architecture.", "University College Cork"),
            ("블라니성", "Blarney Castle", "근교 블라니 스톤 성입니다.", "Nearby Blarney Stone castle.", "Blarney Castle"),
        ],
    },
    {
        "id": "killarney",
        "countryId": "ie",
        "ko": "킬라니",
        "en": "Killarney",
        "native": "Cill Airne",
        "blurb_ko": "링오브케리의 거점. 호수·국립공원·자운팅카가 유명합니다.",
        "blurb_en": "Ring of Kerry base—lakes, national park, and jaunting cars.",
        "highlights": [
            ("킬라니 국립공원", "Killarney National Park", "호수와 숲의 국립공원입니다.", "Lakes and forest national park.", "Killarney National Park"),
            ("머크로스 하우스", "Muckross House", "빅토리아 저택과 정원입니다.", "Victorian house and gardens.", "Muckross House"),
            ("로스가 성", "Ross Castle", "호숫가 중세 성입니다.", "Lakeside medieval castle.", "Ross Castle"),
            ("링오브케리", "Ring of Kerry", "반도 순환 드라이브입니다.", "Peninsula scenic drive.", "Ring of Kerry"),
            ("토리즈 호수", "Torc Waterfall", "국립공원 폭포 산책입니다.", "Park waterfall walk.", "Torc Waterfall"),
        ],
    },
    {
        "id": "kilkenny",
        "countryId": "ie",
        "ko": "킬케니",
        "en": "Kilkenny",
        "native": "Cill Chainnigh",
        "blurb_ko": "중세 성곽 도시. 디자인·공예와 좁은 골목이 매력입니다.",
        "blurb_en": "Medieval castle town—design, crafts, and narrow lanes.",
        "highlights": [
            ("킬케니 성", "Kilkenny Castle", "공원과 연결된 성입니다.", "Castle linked to parkland.", "Kilkenny Castle"),
            ("미디벌마일", "Medieval Mile", "성과 대성당을 잇는 거리입니다.", "Street linking castle and cathedral.", "Medieval Mile"),
            ("성 카니스 대성당", "St Canice’s Cathedral", "원형 탑이 있는 대성당입니다.", "Cathedral with round tower.", "St Canice Cathedral"),
            ("스미스윅 체험", "Smithwick’s Experience", "맥주 역사 투어입니다.", "Brewery history tour.", "Smithwick Experience"),
            ("디자인센터", "Design Centre", "아일랜드 공예·디자인입니다.", "Irish craft and design.", "Kilkenny Design Centre"),
        ],
    },
    {
        "id": "limerick",
        "countryId": "ie",
        "ko": "리머릭",
        "en": "Limerick",
        "native": "Luimneach",
        "blurb_ko": "섀넌 강변의 역사 도시. 킹존스 성과 조지가가 중심입니다.",
        "blurb_en": "Historic Shannon city—King John’s Castle and Georgian streets.",
        "highlights": [
            ("킹존스 성", "King John’s Castle", "강변 노르만 성입니다.", "Riverside Norman castle.", "King John Castle Limerick"),
            ("조약석", "Treaty Stone", "도시 상징 조약 기념석입니다.", "City symbol treaty stone.", "Treaty Stone"),
            ("헌트 박물관", "Hunt Museum", "예술·유물 컬렉션입니다.", "Art and artefact collection.", "Hunt Museum"),
            ("조지가", "Georgian Quarter", "빨간 벽돌 조지아 거리입니다.", "Red-brick Georgian streets.", "Newtown Pery"),
            ("섀넌 강변", "Shannon walks", "강변 산책로입니다.", "Riverside walking paths.", "Shannon Limerick"),
        ],
    },
    # —— Iceland ——
    {
        "id": "reykjavik",
        "countryId": "is",
        "ko": "레이캬비크",
        "en": "Reykjavík",
        "native": "Reykjavík",
        "blurb_ko": "아이슬란드 수도. 홀그림스키르캬와 하프파이르가 상징입니다.",
        "blurb_en": "Icelandic capital—Hallgrímskirkja and the Harpa.",
        "highlights": [
            ("홀그림스키르캬", "Hallgrímskirkja", "시내 전망 탑 교회입니다.", "Church with city lookout tower.", "Hallgrímskirkja"),
            ("하프파 콘서트홀", "Harpa", "유리 파사드 콘서트홀입니다.", "Glass-façade concert hall.", "Harpa Reykjavík"),
            ("선 보이러 조각", "Sólfar (Sun Voyager)", "해안 바이킹 배 조각입니다.", "Waterfront Viking-ship sculpture.", "Sun Voyager"),
            ("올드하버", "Old Harbour", "고래 투어·카페 항구입니다.", "Whale tours and harbour cafés.", "Reykjavík Old Harbour"),
            ("블루라군 투어", "Blue Lagoon day trip", "근교 지열 온천 데이트립입니다.", "Nearby geothermal spa day trip.", "Blue Lagoon"),
        ],
    },
    {
        "id": "akureyri",
        "countryId": "is",
        "ko": "아쿠레이리",
        "en": "Akureyri",
        "native": "Akureyri",
        "blurb_ko": "북부의 수도. 피오르드·고래·미바튼 접근의 거점입니다.",
        "blurb_en": "Capital of the north—fjords, whales, and Mývatn base.",
        "highlights": [
            ("아쿠레이리 교회", "Akureyrarkirkja", "계단 위 상징 교회입니다.", "Landmark church up the steps.", "Akureyrarkirkja"),
            ("식물원", "Botanical Garden", "북극권 식물원입니다.", "Arctic botanical garden.", "Akureyri Botanical Garden"),
            ("피오르드 항구", "Akureyri harbour", "고래 투어 출발 항구입니다.", "Harbour for whale tours.", "Akureyri harbour"),
            ("미바튼", "Lake Mývatn", "근교 화산·온천 호수입니다.", "Nearby volcanic lake and baths.", "Mývatn"),
            ("고다포스", "Goðafoss", "근교 ‘신들의 폭포’입니다.", "Nearby ‘Waterfall of the Gods’.", "Goðafoss"),
        ],
    },
    {
        "id": "vik",
        "countryId": "is",
        "ko": "비크",
        "en": "Vík",
        "native": "Vík í Mýrdal",
        "blurb_ko": "남해안 검은 모래 마을. 레이니스파라와 바사르톰이 유명합니다.",
        "blurb_en": "South-coast black-sand village—Reynisfjara and basalt stacks.",
        "highlights": [
            ("레이니스파라", "Reynisfjara", "검은 모래와 현무암 기둥입니다.", "Black sand and basalt columns.", "Reynisfjara"),
            ("디르홀레이", "Dyrhólaey", "해안 아치 전망대입니다.", "Coastal arch viewpoint.", "Dyrhólaey"),
            ("비크 교회", "Vík church", "언덕 위 흰 교회입니다.", "White hilltop church.", "Vík church"),
            ("레이니스드랑가르", "Reynisdrangar", "바다 위 바위 기둥입니다.", "Sea stacks offshore.", "Reynisdrangar"),
            ("스코가포스 근교", "Nearby waterfalls", "스코가포스·셀랴란드포스입니다.", "Skógafoss and Seljalandsfoss nearby.", "Skógafoss"),
        ],
    },
    {
        "id": "husavik",
        "countryId": "is",
        "ko": "후사빅",
        "en": "Húsavík",
        "native": "Húsavík",
        "blurb_ko": "고래 관찰의 수도. 나무 교회와 스키야판디 만이 매력입니다.",
        "blurb_en": "Whale-watching capital—wooden church and Skjálfandi Bay.",
        "highlights": [
            ("고래 투어", "Whale watching", "스키야판디 만 고래 관찰입니다.", "Whales in Skjálfandi Bay.", "Húsavík whale watching"),
            ("후사빅 교회", "Húsavíkurkirkja", "아름다운 나무 교회입니다.", "Beautiful wooden church.", "Húsavíkurkirkja"),
            ("고래 박물관", "Whale Museum", "고래 생태 박물관입니다.", "Museum of whale biology.", "Húsavík Whale Museum"),
            ("지열 온천", "GeoSea baths", "해수 지열 온천입니다.", "Seawater geothermal baths.", "GeoSea Húsavík"),
            ("아스비르기", "Ásbyrgi canyon", "근교 말굽형 협곡입니다.", "Nearby horseshoe canyon.", "Ásbyrgi"),
        ],
    },
    {
        "id": "selfoss",
        "countryId": "is",
        "ko": "셀포스",
        "en": "Selfoss",
        "native": "Selfoss",
        "blurb_ko": "골든서클의 거점 마을. 간열·굴포스·케리드 접근이 쉽습니다.",
        "blurb_en": "Golden Circle base—easy to Geysir, Gullfoss, and Kerið.",
        "highlights": [
            ("간열·스트로쿠르", "Geysir / Strokkur", "간헐천 지대입니다.", "Geyser geothermal field.", "Geysir Iceland"),
            ("굴포스", "Gullfoss", "황금 폭포입니다.", "The Golden Waterfall.", "Gullfoss"),
            ("싱벨리르", "Þingvellir", "단층과 국립공원입니다.", "Rift valley national park.", "Þingvellir"),
            ("케리드", "Kerið crater", "화산 분화구 호수입니다.", "Volcanic crater lake.", "Kerið"),
            ("셀포스 시내", "Selfoss town", "카페와 강변 마을입니다.", "Cafés and riverside town.", "Selfoss Iceland"),
        ],
    },
]


def city_block(c: dict) -> str:
    hs = [highlight(c["id"], i, *h) for i, h in enumerate(c["highlights"], 1)]
    return f"""  {{
    id: "{c['id']}",
    countryId: "{c['countryId']}",
    signatureImage: "/cities/{c['id']}.jpg",
    name: {{ ko: "{c['ko']}", en: "{c['en']}" }},
    nativeName: "{c['native']}",
    blurb: {{
      ko: "{c['blurb_ko']}",
      en: "{c['blurb_en']}",
    }},
    highlights: [
{",\n".join(hs)}
    ],
  }}"""


def place_line(city: str, cat: str, i: int, name: str, rating: float, addr: str, ko: str, en: str, reviews: int) -> str:
    return (
        f"  place('{city}-{cat}-{i}', '{city}', '{cat}', '{esc(name)}', {rating}, "
        f"'{esc(addr)}', '{esc(ko)}', '{esc(en)}', {{ reviewCount: {reviews} }}),"
    )


def generic_dining(label: str) -> dict:
    return {
        "fine_dining": [
            (f"{label} Fine Dining 1", 4.5, label, "시즌 코스 파인 다이닝.", "Seasonal fine dining.", 640),
            (f"{label} Fine Dining 2", 4.4, label, "모던 로컬 다이닝.", "Modern local dining.", 520),
            (f"{label} Fine Dining 3", 4.3, label, "클래식 다이닝.", "Classic dining.", 480),
            (f"{label} Bistro", 4.3, label, "캐주얼 파인 비스트로.", "Casual fine bistro.", 700),
            (f"{label} Chef's Table", 4.4, label, "셰프 테이블.", "Chef’s table.", 390),
        ],
        "bakery": [
            (f"{label} Bakery", 4.5, label, "빵·페이스트리.", "Bread and pastries.", 900),
            (f"{label} Patisserie", 4.4, label, "페이스트리 숍.", "Pastry shop.", 720),
            (f"{label} Bread House", 4.3, label, "로컬 빵집.", "Local bakery.", 580),
            (f"Café Bakery {label}", 4.3, label, "베이커리 카페.", "Bakery café.", 640),
        ],
        "cafe": [
            (f"Specialty Coffee {label}", 4.5, label, "스페셜티 커피.", "Specialty coffee.", 1100),
            (f"Old Town Café {label}", 4.4, label, "구시가 카페.", "Old-town café.", 980),
            (f"Brunch Café {label}", 4.3, label, "브런치 카페.", "Brunch café.", 860),
            (f"Espresso Bar {label}", 4.3, label, "에스프레소 바.", "Espresso bar.", 720),
        ],
        "korean": [
            (f"Korean Kitchen {label}", 4.4, label, "캐주얼 한식.", "Casual Korean.", 640),
            (f"Bibimbap {label}", 4.3, label, "비빔밥·덮밥.", "Bibimbap bowls.", 520),
            (f"Korean BBQ {label}", 4.3, label, "고기구이.", "Korean BBQ.", 480),
            (f"Kimchi House {label}", 4.2, label, "김치·반찬 중심.", "Kimchi-focused Korean.", 390),
        ],
    }


CURATED = {
    "madrid": {
        "fine_dining": [
            ("DiverXO", 4.7, "Madrid", "창의 미슐랭 코스.", "Creative Michelin tasting.", 1800),
            ("Botín", 4.5, "Madrid", "세계 최고령 식당 클래식.", "World’s oldest restaurant classic.", 12000),
            ("StreetXO", 4.5, "Madrid", "아시안 퓨전 캐주얼 파인.", "Asian-fusion casual fine.", 4200),
            ("Lakasa", 4.5, "Madrid", "시즌 스페인 다이닝.", "Seasonal Spanish dining.", 2100),
            ("Casa Lucio", 4.4, "Madrid", "휴보스 로토스 클래식.", "Classic huevos rotos.", 8600),
        ],
        "bakery": [
            ("Panadería Reliquiae", 4.5, "Madrid", "사워도우 베이커리.", "Sourdough bakery.", 1600),
            ("Moulin Chocolat", 4.5, "Madrid", "페이스트리·초콜릿.", "Pastries and chocolate.", 2400),
            ("Panic", 4.4, "Madrid", "장인 빵집.", "Artisan bakery.", 1800),
            ("La Duquesita", 4.4, "Madrid", "역사적 파티스리.", "Historic pastry shop.", 3200),
        ],
        "cafe": [
            ("Café Federal", 4.5, "Madrid", "브런치·스페셜티.", "Brunch and specialty.", 2800),
            ("HanSo Café", 4.5, "Madrid", "스페셜티 커피.", "Specialty coffee.", 1600),
            ("Café Comercial", 4.3, "Madrid", "클래식 카페.", "Classic café.", 5400),
            ("Toma Café", 4.5, "Madrid", "로스터리 카페.", "Roastery café.", 2100),
        ],
        "korean": [
            ("Korean Kitchen Madrid", 4.4, "Madrid", "캐주얼 한식.", "Casual Korean.", 1100),
            ("Bibimbap Madrid", 4.3, "Madrid", "비빔밥.", "Bibimbap.", 800),
            ("Korean BBQ Madrid", 4.3, "Madrid", "고기구이.", "Korean BBQ.", 900),
            ("Kimchi Madrid", 4.2, "Madrid", "김치·반찬.", "Kimchi-focused.", 650),
        ],
    },
    "lisbon": {
        "fine_dining": [
            ("Belcanto", 4.7, "Lisbon", "미슐랭 포르투갈 코스.", "Michelin Portuguese tasting.", 1600),
            ("Time Out Market stalls", 4.5, "Lisbon", "미식 푸드홀.", "Gourmet food hall.", 18000),
            ("Cervejaria Ramiro", 4.6, "Lisbon", "해산물 클래식.", "Seafood classic.", 12000),
            ("A Cevicheria", 4.5, "Lisbon", "세비체·창의 다이닝.", "Ceviche and creative dining.", 4200),
            ("Prado", 4.5, "Lisbon", "시즌 로컬 다이닝.", "Seasonal local dining.", 1800),
        ],
        "bakery": [
            ("Pastéis de Belém", 4.6, "Lisbon", "에그타르트 원조.", "Original egg tarts.", 42000),
            ("Manteigaria", 4.6, "Lisbon", "나타 전문.", "Nata specialists.", 12000),
            ("Padaria Portuguesa", 4.3, "Lisbon", "로컬 베이커리 체인.", "Local bakery chain.", 4800),
            ("Fábrica da Nata", 4.4, "Lisbon", "따뜻한 나타.", "Warm natas.", 3600),
        ],
        "cafe": [
            ("Café A Brasileira", 4.3, "Lisbon", "역사적 카페.", "Historic café.", 9800),
            ("Copenhagen Coffee Lab", 4.5, "Lisbon", "스페셜티 커피.", "Specialty coffee.", 2100),
            ("Fabrica Coffee Roasters", 4.5, "Lisbon", "로스터리 카페.", "Roastery café.", 2400),
            ("Dear Breakfast", 4.4, "Lisbon", "브런치 카페.", "Brunch café.", 2800),
        ],
        "korean": [
            ("Korean Kitchen Lisbon", 4.4, "Lisbon", "캐주얼 한식.", "Casual Korean.", 700),
            ("Bibimbap Lisbon", 4.3, "Lisbon", "비빔밥.", "Bibimbap.", 560),
            ("Korean BBQ Lisbon", 4.3, "Lisbon", "고기구이.", "Korean BBQ.", 520),
            ("Kimchi Lisbon", 4.2, "Lisbon", "김치·반찬.", "Kimchi-focused.", 400),
        ],
    },
    "athens": {
        "fine_dining": [
            ("Hytra", 4.6, "Athens", "모던 그리스 코스.", "Modern Greek tasting.", 1200),
            ("Cookoovaya", 4.5, "Athens", "시즌 그리스 다이닝.", "Seasonal Greek dining.", 1800),
            ("Funky Gourmet peers / Nolan", 4.5, "Athens", "창의 아테네 다이닝.", "Creative Athens dining.", 1600),
            ("Klimataria", 4.4, "Athens", "전통 타베르나.", "Traditional taverna.", 4200),
            ("Seychelles", 4.5, "Athens", "모던 타베르나.", "Modern taverna.", 2800),
        ],
        "bakery": [
            ("Ariston bakery", 4.4, "Athens", "시티 베이커리.", "City bakery.", 1600),
            ("Takis Bakery", 4.4, "Athens", "로컬 빵·페이스트리.", "Local bread and pastries.", 2100),
            ("Bread & Co Athens", 4.3, "Athens", "사워도우.", "Sourdough.", 900),
            ("Traditional koulouri stalls", 4.3, "Athens", "쿨루리 가판.", "Koulouri stalls.", 3200),
        ],
        "cafe": [
            ("Tailor Made", 4.5, "Athens", "스페셜티 커피.", "Specialty coffee.", 2400),
            ("Bean Around Town peers", 4.4, "Athens", "로스터리 카페.", "Roastery café.", 1100),
            ("Café Avissinia", 4.3, "Athens", "모나스티라키 전망 카페.", "Monastiraki view café.", 2800),
            ("Little Tree Books & Coffee", 4.4, "Athens", "북카페.", "Book café.", 980),
        ],
        "korean": [
            ("Korean Kitchen Athens", 4.4, "Athens", "캐주얼 한식.", "Casual Korean.", 640),
            ("Bibimbap Athens", 4.3, "Athens", "비빔밥.", "Bibimbap.", 480),
            ("Korean BBQ Athens", 4.3, "Athens", "고기구이.", "Korean BBQ.", 520),
            ("Kimchi Athens", 4.2, "Athens", "김치·반찬.", "Kimchi-focused.", 360),
        ],
    },
    "warsaw": {
        "fine_dining": [
            ("Atelier Amaro peers / Senses", 4.6, "Warsaw", "모던 폴란드 파인.", "Modern Polish fine dining.", 900),
            ("Bezbełz / Nolita peers", 4.5, "Warsaw", "창의 코스.", "Creative tasting.", 1100),
            ("Stary Dom", 4.4, "Warsaw", "전통 폴란드 요리.", "Traditional Polish cuisine.", 2800),
            ("Polka", 4.4, "Warsaw", "홈스타일 폴란드.", "Homestyle Polish.", 2100),
            ("Bibenda", 4.5, "Warsaw", "시즌 비스트로.", "Seasonal bistro.", 1600),
        ],
        "bakery": [
            ("Cukiernia Sowa", 4.4, "Warsaw", "케이크·페이스트리.", "Cakes and pastries.", 3200),
            ("Piecyk bakery", 4.4, "Warsaw", "로컬 빵집.", "Local bakery.", 1200),
            ("Zieniec / sourdough peers", 4.5, "Warsaw", "사워도우.", "Sourdough.", 900),
            ("A. Blikle", 4.4, "Warsaw", "역사적 파티스리.", "Historic pastry shop.", 4800),
        ],
        "cafe": [
            ("Cafe Kafka / specialty peers", 4.5, "Warsaw", "스페셜티 커피.", "Specialty coffee.", 1600),
            ("Cukiernia Pawłowicz café", 4.3, "Warsaw", "클래식 카페.", "Classic café.", 2100),
            ("Forum Meat & Coffee peers", 4.4, "Warsaw", "브런치 카페.", "Brunch café.", 1400),
            ("Coffee Affair", 4.4, "Warsaw", "로스터리 카페.", "Roastery café.", 1100),
        ],
        "korean": [
            ("Korean Kitchen Warsaw", 4.4, "Warsaw", "캐주얼 한식.", "Casual Korean.", 800),
            ("Bibimbap Warsaw", 4.3, "Warsaw", "비빔밥.", "Bibimbap.", 600),
            ("Korean BBQ Warsaw", 4.3, "Warsaw", "고기구이.", "Korean BBQ.", 720),
            ("Kimchi Warsaw", 4.2, "Warsaw", "김치·반찬.", "Kimchi-focused.", 480),
        ],
    },
    "zagreb": {
        "fine_dining": [
            ("Noel", 4.6, "Zagreb", "미슐랭 모던 크로아티아.", "Michelin modern Croatian.", 900),
            ("Dubravkin Put", 4.5, "Zagreb", "시즌 파인 다이닝.", "Seasonal fine dining.", 1100),
            ("Mundoaka Street Food peers", 4.4, "Zagreb", "창의 캐주얼.", "Creative casual.", 1600),
            ("Vinodol", 4.4, "Zagreb", "전통 크로아티아.", "Traditional Croatian.", 2800),
            ("Zinfandel's", 4.5, "Zagreb", "호텔 파인 다이닝.", "Hotel fine dining.", 1200),
        ],
        "bakery": [
            ("Pecivo bakery counters", 4.3, "Zagreb", "로컬 베이커리.", "Local bakery.", 1400),
            ("Vincek", 4.5, "Zagreb", "케이크·페이스트리.", "Cakes and pastries.", 3200),
            ("Torte i to", 4.4, "Zagreb", "토르트 전문.", "Torte specialists.", 1800),
            ("Sourdough Zagreb peers", 4.4, "Zagreb", "사워도우.", "Sourdough.", 700),
        ],
        "cafe": [
            ("Cogito Coffee", 4.5, "Zagreb", "스페셜티 커피.", "Specialty coffee.", 1600),
            ("Eli's Caffé", 4.4, "Zagreb", "로스터리 카페.", "Roastery café.", 1200),
            ("Kino Europa café peers", 4.3, "Zagreb", "클래식 카페.", "Classic café.", 900),
            ("Botaničar", 4.4, "Zagreb", "브런치 카페.", "Brunch café.", 1400),
        ],
        "korean": [
            ("Korean Kitchen Zagreb", 4.4, "Zagreb", "캐주얼 한식.", "Casual Korean.", 480),
            ("Bibimbap Zagreb", 4.3, "Zagreb", "비빔밥.", "Bibimbap.", 360),
            ("Korean BBQ Zagreb", 4.3, "Zagreb", "고기구이.", "Korean BBQ.", 400),
            ("Kimchi Zagreb", 4.2, "Zagreb", "김치·반찬.", "Kimchi-focused.", 280),
        ],
    },
    "dublin": {
        "fine_dining": [
            ("Chapter One", 4.7, "Dublin", "미슐랭 아일랜드 코스.", "Michelin Irish tasting.", 1400),
            ("Restaurant Patrick Guilbaud", 4.6, "Dublin", "클래식 파인 다이닝.", "Classic fine dining.", 1200),
            ("The Greenhouse", 4.5, "Dublin", "모던 아일랜드.", "Modern Irish.", 1100),
            ("Fallon & Byrne", 4.4, "Dublin", "마켓·다이닝.", "Market dining.", 2800),
            ("The Winding Stair", 4.4, "Dublin", "리버뷰 아일랜드 요리.", "River-view Irish cooking.", 2100),
        ],
        "bakery": [
            ("Bread 41", 4.6, "Dublin", "사워도우 베이커리.", "Sourdough bakery.", 2400),
            ("Joe's Bakery / peers", 4.4, "Dublin", "로컬 빵집.", "Local bakery.", 1200),
            ("The Cake Café", 4.4, "Dublin", "케이크·브런치.", "Cakes and brunch.", 1800),
            ("Cornucopia bakery counter", 4.3, "Dublin", "베이커리 카운터.", "Bakery counter.", 1600),
        ],
        "cafe": [
            ("3fe Coffee", 4.6, "Dublin", "스페셜티 로스터리.", "Specialty roastery.", 2800),
            ("Kaph", 4.5, "Dublin", "스페셜티 커피.", "Specialty coffee.", 1600),
            ("Bewley's", 4.3, "Dublin", "클래식 카페.", "Classic café.", 6200),
            ("Two Boys Brew", 4.4, "Dublin", "브런치 카페.", "Brunch café.", 1400),
        ],
        "korean": [
            ("Korean Kitchen Dublin", 4.4, "Dublin", "캐주얼 한식.", "Casual Korean.", 900),
            ("Bibimbap Dublin", 4.3, "Dublin", "비빔밥.", "Bibimbap.", 700),
            ("Korean BBQ Dublin", 4.3, "Dublin", "고기구이.", "Korean BBQ.", 800),
            ("Kimchi Dublin", 4.2, "Dublin", "김치·반찬.", "Kimchi-focused.", 520),
        ],
    },
    "reykjavik": {
        "fine_dining": [
            ("Dill Restaurant", 4.7, "Reykjavík", "뉴 노르딕 미슐랭.", "New Nordic Michelin.", 1100),
            ("ÓX", 4.6, "Reykjavík", "셰프스 테이블.", "Chef’s table.", 600),
            ("Grillmarkaðurinn", 4.5, "Reykjavík", "그릴·로컬 재료.", "Grill and local produce.", 2800),
            ("Fish Market", 4.5, "Reykjavík", "아이슬란드 해산물.", "Icelandic seafood.", 2400),
            ("Matur og Drykkur", 4.4, "Reykjavík", "전통 재해석.", "Reimagined tradition.", 1600),
        ],
        "bakery": [
            ("Brauð & Co", 4.6, "Reykjavík", "시나몬롤·사워도우.", "Cinnamon rolls and sourdough.", 4200),
            ("Sandholt", 4.5, "Reykjavík", "장인 베이커리.", "Artisan bakery.", 2800),
            ("Bernhöftsbakarí", 4.3, "Reykjavík", "역사적 빵집.", "Historic bakery.", 1800),
            ("Café Babalú bakery peers", 4.3, "Reykjavík", "베이커리 카페.", "Bakery café.", 1200),
        ],
        "cafe": [
            ("Reykjavík Roasters", 4.6, "Reykjavík", "스페셜티 로스터리.", "Specialty roastery.", 2400),
            ("Kaffitár", 4.3, "Reykjavík", "로컬 커피 체인.", "Local coffee chain.", 2100),
            ("The Coocoo's Nest", 4.4, "Reykjavík", "브런치 카페.", "Brunch café.", 1600),
            ("Stofan Café", 4.4, "Reykjavík", "아늑한 카페.", "Cosy café.", 1800),
        ],
        "korean": [
            ("Korean Kitchen Reykjavík", 4.3, "Reykjavík", "캐주얼 한식.", "Casual Korean.", 320),
            ("Bibimbap Reykjavík", 4.2, "Reykjavík", "비빔밥.", "Bibimbap.", 240),
            ("Korean BBQ Reykjavík", 4.2, "Reykjavík", "고기구이.", "Korean BBQ.", 280),
            ("Kimchi Reykjavík", 4.2, "Reykjavík", "김치·반찬.", "Kimchi-focused.", 200),
        ],
    },
}


def write_cities_append() -> None:
    path = DATA / "cities.ts"
    text = path.read_text(encoding="utf-8")
    if 'id: "madrid"' in text:
        print("cities already contain madrid — skip append")
        return
    marker = "\n]\n\nexport function getCity"
    if marker not in text:
        raise SystemExit("cities.ts marker not found")
    # Last city may lack trailing comma — always insert comma before new blocks
    blocks = ",\n".join(city_block(c) for c in CITIES)
    text = text.replace(marker, ",\n" + blocks + marker, 1)
    path.write_text(text, encoding="utf-8")
    print(f"appended {len(CITIES)} cities")


def write_country_extra(country: str, cities: list[str], dining: dict) -> None:
    lines = [
        "import { place } from './placeFactory'",
        "import type { Place } from '../types'",
        "",
        f"export const {EXPORT_NAMES[country]}: Place[] = [",
    ]
    for city in cities:
        lines.append(f"  // —— {city} ——")
        for cat in ("fine_dining", "bakery", "cafe", "korean"):
            for i, (name, rating, addr, ko, en, reviews) in enumerate(dining[city][cat], 1):
                lines.append(place_line(city, cat, i, name, rating, addr, ko, en, reviews))
        lines.append("")
    lines.append("]")
    lines.append("")
    (DATA / f"places-{country}-extra.ts").write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote places-{country}-extra.ts")


def write_extras() -> None:
    labels = {c["id"]: c["en"] for c in CITIES}
    for cc, city_ids in GROUPS.items():
        path = DATA / f"places-{cc}-extra.ts"
        if path.exists() and f"// —— {city_ids[0]} ——" in path.read_text(encoding="utf-8"):
            print(f"skip extra {cc}")
            continue
        dining = {
            cid: CURATED.get(cid, generic_dining(labels[cid])) for cid in city_ids
        }
        write_country_extra(cc, city_ids, dining)


def append_category_file(path: Path, rows: list[str], comment: str) -> None:
    text = path.read_text(encoding="utf-8")
    first_id = rows[0].split("'")[1]
    if first_id in text:
        print(f"skip {path.name} — already has {first_id}")
        return
    text = text.rstrip()
    if not text.endswith("]"):
        raise SystemExit(f"unexpected end of {path}")
    text = text[:-1].rstrip() + f"\n\n  // —— {comment} ——\n" + "\n".join(rows) + "\n]\n"
    path.write_text(text, encoding="utf-8")
    print(f"appended {len(rows)} to {path.name}")


def fashion_grocery_asian_rows() -> tuple[list[str], list[str], list[str]]:
    fashion, grocery, asian = [], [], []
    special_f = {
        "madrid": [
            ("Gran Vía / Salamanca fashion", "Madrid", "[패션] 그란비아·살라망카.", "[Fashion] Gran Vía and Salamanca.", 4.5, 9800),
            ("Las Rozas Village outlet", "Las Rozas", "[아울렛] 마드리드 근교 아울렛.", "[Outlet] Outlet near Madrid.", 4.4, 12000),
            ("Fuencarral boutiques", "Madrid", "[패션] 푸엔카랄 부티크.", "[Fashion] Fuencarral boutiques.", 4.4, 4200),
        ],
        "barcelona": [
            ("Passeig de Gràcia", "Barcelona", "[패션] 그라시아 대로 패션.", "[Fashion] Passeig de Gràcia.", 4.5, 11000),
            ("La Roca Village", "Barcelona", "[아울렛] 라로카 아울렛.", "[Outlet] La Roca Village.", 4.4, 14000),
            ("Born / El Born boutiques", "Barcelona", "[패션] 본 지구 부티크.", "[Fashion] El Born boutiques.", 4.4, 3600),
        ],
        "lisbon": [
            ("Avenida da Liberdade", "Lisbon", "[패션] 자유대로 럭셔리.", "[Fashion] Avenida da Liberdade luxury.", 4.5, 7200),
            ("Freeport / outlet day trip", "Lisbon region", "[아울렛] 리스본 권역 아울렛.", "[Outlet] Lisbon-area outlet.", 4.3, 5400),
            ("Chiado boutiques", "Lisbon", "[패션] 시아두 부티크.", "[Fashion] Chiado boutiques.", 4.4, 3100),
        ],
        "athens": [
            ("Ermou / Kolonaki fashion", "Athens", "[패션] 에르무·콜로나키.", "[Fashion] Ermou and Kolonaki.", 4.4, 6800),
            ("Designer Outlet Athens / McArthurGlen", "Spata", "[아울렛] 아테네 아울렛.", "[Outlet] Athens designer outlet.", 4.3, 7200),
            ("Monastiraki boutiques", "Athens", "[패션] 모나스티라키 부티크.", "[Fashion] Monastiraki boutiques.", 4.3, 2800),
        ],
        "warsaw": [
            ("Nowy Świat / Marszałkowska", "Warsaw", "[패션] 노비시비아트·마르샤우코프스카.", "[Fashion] Nowy Świat fashion.", 4.4, 5400),
            ("Designer Outlet Warsaw", "Piaseczno", "[아울렛] 바르샤바 아울렛.", "[Outlet] Warsaw designer outlet.", 4.3, 6800),
            ("Złote Tarasy fashion", "Warsaw", "[패션] 즈워테 타라시 몰.", "[Fashion] Złote Tarasy mall.", 4.3, 7200),
        ],
        "zagreb": [
            ("Ilica fashion street", "Zagreb", "[패션] 일리차 패션 거리.", "[Fashion] Ilica fashion street.", 4.3, 2100),
            ("Designer Outlet Croatia / regional", "Croatia", "[아울렛] 권역 아울렛.", "[Outlet] Regional outlet.", 4.2, 1800),
            ("Avenue Mall fashion", "Zagreb", "[패션] 애비뉴 몰.", "[Fashion] Avenue Mall.", 4.2, 2400),
        ],
        "dublin": [
            ("Grafton Street", "Dublin", "[패션] 그래프턴 스트리트.", "[Fashion] Grafton Street.", 4.5, 8600),
            ("Kildare Village outlet", "Kildare", "[아울렛] 킬데어 빌리지.", "[Outlet] Kildare Village.", 4.4, 11000),
            ("Powerscourt / boutiques", "Dublin", "[패션] 파워스코트 부티크.", "[Fashion] Powerscourt boutiques.", 4.4, 3200),
        ],
        "reykjavik": [
            ("Laugavegur fashion", "Reykjavík", "[패션] 뢰이가베귀르 패션.", "[Fashion] Laugavegur fashion.", 4.4, 2800),
            ("Kringlan mall fashion", "Reykjavík", "[패션] 크링글란 몰.", "[Fashion] Kringlan mall.", 4.2, 2100),
            ("Local design boutiques", "Reykjavík", "[패션] 로컬 디자인 부티크.", "[Fashion] Local design boutiques.", 4.3, 1200),
        ],
    }
    special_g = {
        "madrid": [
            ("Mercado de San Miguel", "Madrid", "[식료품] 산미겔 마켓.", "[Grocery] San Miguel market.", 4.5, 28000),
            ("El Corte Inglés / Carrefour", "Madrid", "[대형마트] 엘코르테·카르푸.", "[Hypermarket] El Corte Inglés and Carrefour.", 4.2, 6400),
            ("Mercadona supermarket", "Madrid", "[슈퍼] 메르카도나.", "[Supermarket] Mercadona.", 4.1, 5200),
            ("Organic / specialty groceries", "Madrid", "[식료품점] 유기농·특산.", "[Grocery] Organic specialties.", 4.3, 1800),
        ],
        "lisbon": [
            ("Time Out / Mercado da Ribeira", "Lisbon", "[식료품] 리베이라 마켓.", "[Grocery] Ribeira market.", 4.5, 18000),
            ("Continente / Pingo Doce", "Lisbon", "[대형마트] 콘티넨테·핑고도스.", "[Hypermarket] Continente and Pingo Doce.", 4.1, 4200),
            ("Mini Preço supermarket", "Lisbon", "[슈퍼] 미니프레수.", "[Supermarket] Mini Preço.", 4.0, 2800),
            ("Specialty / gourmet groceries", "Lisbon", "[식료품점] 고메·특산.", "[Grocery] Gourmet specialties.", 4.3, 1400),
        ],
        "athens": [
            ("Varvakios Market", "Athens", "[식료품] 바르바키오스 마켓.", "[Grocery] Varvakios market.", 4.4, 6200),
            ("AB / Sklavenitis hypermarket", "Athens", "[대형마트] AB·스클라베니티스.", "[Hypermarket] AB and Sklavenitis.", 4.1, 3600),
            ("Lidl supermarket", "Athens", "[슈퍼] 리들.", "[Supermarket] Lidl.", 4.0, 2800),
            ("Specialty deli groceries", "Athens", "[식료품점] 델리·특산.", "[Grocery] Deli specialties.", 4.3, 1200),
        ],
        "warsaw": [
            ("Hala Mirowska / food markets", "Warsaw", "[식료품] 미로프스카 홀.", "[Grocery] Hala Mirowska market.", 4.4, 4200),
            ("Carrefour / Auchan", "Warsaw", "[대형마트] 카르푸·오샹.", "[Hypermarket] Carrefour and Auchan.", 4.1, 4800),
            ("Biedronka / Lidl", "Warsaw", "[슈퍼] 비에드론카·리들.", "[Supermarket] Biedronka and Lidl.", 4.0, 5200),
            ("Asian / specialty groceries", "Warsaw", "[식료품점] 아시안·특산.", "[Grocery] Asian specialties.", 4.3, 1600),
        ],
        "zagreb": [
            ("Dolac Market", "Zagreb", "[식료품] 돌라츠 마켓.", "[Grocery] Dolac market.", 4.5, 5400),
            ("Konzum / Spar hypermarket", "Zagreb", "[대형마트] 콘줌·스파.", "[Hypermarket] Konzum and Spar.", 4.1, 2800),
            ("Lidl / Plodine supermarket", "Zagreb", "[슈퍼] 리들·플로디네.", "[Supermarket] Lidl and Plodine.", 4.0, 2100),
            ("Specialty / deli groceries", "Zagreb", "[식료품점] 델리·특산.", "[Grocery] Deli specialties.", 4.3, 900),
        ],
        "dublin": [
            ("English Market peers / Temple Bar Food Market", "Dublin", "[식료품] 파머스·푸드 마켓.", "[Grocery] Farmers and food markets.", 4.4, 3600),
            ("Tesco Extra / Dunnes", "Dublin", "[대형마트] 테스코·던스.", "[Hypermarket] Tesco and Dunnes.", 4.1, 4800),
            ("Lidl / Aldi supermarket", "Dublin", "[슈퍼] 리들·알디.", "[Supermarket] Lidl and Aldi.", 4.0, 3600),
            ("Asian / specialty groceries", "Dublin", "[식료품점] 아시안·특산.", "[Grocery] Asian specialties.", 4.3, 1800),
        ],
        "reykjavik": [
            ("Reykjavík food hall / Kolaportið", "Reykjavík", "[식료품] 푸드홀·플레어마켓.", "[Grocery] Food hall and flea market.", 4.3, 2100),
            ("Bónus / Krónan", "Reykjavík", "[대형마트] 보누스·크로난.", "[Hypermarket] Bónus and Krónan.", 4.1, 3200),
            ("Nettó supermarket", "Reykjavík", "[슈퍼] 네토.", "[Supermarket] Nettó.", 4.0, 1800),
            ("Specialty / gourmet groceries", "Reykjavík", "[식료품점] 고메·특산.", "[Grocery] Gourmet specialties.", 4.3, 900),
        ],
    }

    for c in CITIES:
        city, label = c["id"], c["en"]
        if city in special_f:
            spots = special_f[city]
        else:
            spots = [
                (f"{label} fashion street", label, f"[패션] {label} 메인 패션 거리.", f"[Fashion] {label} fashion street.", 4.3, 1200),
                (f"{label} outlet / day trip", label, f"[아울렛] {label} 권역 아울렛.", f"[Outlet] {label}-area outlet.", 4.2, 1000),
                (f"{label} mall fashion", label, f"[패션] {label} 몰 패션.", f"[Fashion] {label} mall fashion.", 4.2, 900),
            ]
        for i, (name, addr, ko, en, rating, reviews) in enumerate(spots, 1):
            fashion.append(place_line(city, "fashion", i, name, rating, addr, ko, en, reviews))

        if city in special_g:
            gspots = special_g[city]
        else:
            gspots = [
                (f"{label} food market", label, f"[식료품] {label} 식료품 마켓.", f"[Grocery] {label} food market.", 4.4, 1800),
                (f"Hypermarket near {label}", label, f"[대형마트] {label} 근교 대형마트.", f"[Hypermarket] Near {label}.", 4.1, 1400),
                (f"Supermarket {label}", label, f"[슈퍼] {label} 슈퍼마켓.", f"[Supermarket] {label} supermarket.", 4.0, 1100),
                (f"Specialty groceries {label}", label, f"[식료품점] 특산·유기농.", f"[Grocery] Specialty groceries.", 4.3, 700),
            ]
        for i, (name, addr, ko, en, rating, reviews) in enumerate(gspots, 1):
            grocery.append(place_line(city, "grocery", i, name, rating, addr, ko, en, reviews))

        for i, (name, addr, ko, en, rating, reviews) in enumerate(
            [
                (f"Asian dining {label}", label, "아시안 다이닝.", "Asian dining.", 4.3, 600),
                (f"Sushi / ramen {label}", label, "스시·라멘.", "Sushi and ramen.", 4.3, 500),
                (f"Thai / Vietnamese {label}", label, "태국·베트남.", "Thai and Vietnamese.", 4.2, 480),
            ],
            1,
        ):
            asian.append(place_line(city, "asian", i, name, rating, addr, ko, en, reviews))

    return fashion, grocery, asian


def write_flags() -> None:
    flags = {
        "es": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#AA151B"/>
  <rect y="7" width="37" height="14" fill="#F1BF00"/>
</svg>
""",
        "pt": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#FF0000"/>
  <rect width="14.8" height="28" fill="#006600"/>
  <circle cx="14.8" cy="14" r="5.5" fill="#FFCC00"/>
  <circle cx="14.8" cy="14" r="3.2" fill="#FF0000"/>
</svg>
""",
        "gr": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#0D5EAF"/>
  <rect y="3.111" width="37" height="3.111" fill="#FFFFFF"/>
  <rect y="9.333" width="37" height="3.111" fill="#FFFFFF"/>
  <rect y="15.556" width="37" height="3.111" fill="#FFFFFF"/>
  <rect y="21.778" width="37" height="3.111" fill="#FFFFFF"/>
  <rect width="14.8" height="15.556" fill="#0D5EAF"/>
  <rect x="5.84" width="3.12" height="15.556" fill="#FFFFFF"/>
  <rect y="6.218" width="14.8" height="3.12" fill="#FFFFFF"/>
</svg>
""",
        "pl": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#DC143C"/>
  <rect width="37" height="14" fill="#FFFFFF"/>
</svg>
""",
        "hr": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#171796"/>
  <rect width="37" height="18.667" fill="#FFFFFF"/>
  <rect width="37" height="9.333" fill="#FF0000"/>
  <rect x="13.5" y="8" width="10" height="12" fill="#FF0000"/>
  <rect x="13.5" y="8" width="5" height="6" fill="#FFFFFF"/>
  <rect x="18.5" y="14" width="5" height="6" fill="#FFFFFF"/>
</svg>
""",
        "ie": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#FF883E"/>
  <rect width="24.667" height="28" fill="#FFFFFF"/>
  <rect width="12.333" height="28" fill="#169B62"/>
</svg>
""",
        "is": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#02529C"/>
  <rect x="10" width="6" height="28" fill="#FFFFFF"/>
  <rect y="11" width="37" height="6" fill="#FFFFFF"/>
  <rect x="11.5" width="3" height="28" fill="#DC1E35"/>
  <rect y="12.5" width="37" height="3" fill="#DC1E35"/>
</svg>
""",
    }
    FLAGS.mkdir(parents=True, exist_ok=True)
    for cid, svg in flags.items():
        (FLAGS / f"{cid}.svg").write_text(svg, encoding="utf-8")
        print(f"wrote flag {cid}.svg")


def patch_places_ts() -> None:
    path = DATA / "places.ts"
    text = path.read_text(encoding="utf-8")
    if "placesESExtra" in text:
        print("places.ts already patched")
        return
    text = text.replace(
        "import { placesITExtra } from './places-it-extra'\n",
        "import { placesITExtra } from './places-it-extra'\n"
        "import { placesESExtra } from './places-es-extra'\n"
        "import { placesPTExtra } from './places-pt-extra'\n"
        "import { placesGRExtra } from './places-gr-extra'\n"
        "import { placesPLExtra } from './places-pl-extra'\n"
        "import { placesHRExtra } from './places-hr-extra'\n"
        "import { placesIEExtra } from './places-ie-extra'\n"
        "import { placesISExtra } from './places-is-extra'\n",
    )
    text = text.replace(
        "  ...placesITExtra,\n  ...placesFashion,",
        "  ...placesITExtra,\n"
        "  ...placesESExtra,\n"
        "  ...placesPTExtra,\n"
        "  ...placesGRExtra,\n"
        "  ...placesPLExtra,\n"
        "  ...placesHRExtra,\n"
        "  ...placesIEExtra,\n"
        "  ...placesISExtra,\n"
        "  ...placesFashion,",
    )
    path.write_text(text, encoding="utf-8")
    print("patched places.ts")


COUNTRY_BLOCKS = """  {
    id: 'es',
    name: { ko: '스페인', en: 'Spain' },
    nativeName: 'España',
    flagImage: '/flags/es.svg',
    landmarkImage: '/landmarks/landmark-es.jpg',
    flag: '🇪🇸',
    blurb: {
      ko: '타파스와 태양의 나라. 마드리드·바르셀로나·안달루시아가 대표적입니다.',
      en: 'Tapas and sunshine—Madrid, Barcelona, and Andalusia lead.',
    },
    facts: {
      population: { ko: '약 4,840만 명', en: 'Approx. 48.4 million' },
      area: { ko: '505,990 km²', en: '505,990 km²' },
      capital: { ko: '마드리드 (Madrid)', en: 'Madrid' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#AA151B',
      secondary: '#F1BF00',
      accent: '#AA151B',
      background: '#FDF6E3',
      text: '#3A1010',
    },
    cityIds: ['madrid', 'barcelona', 'seville', 'granada', 'valencia', 'malaga', 'bilbao', 'toledo', 'cordoba', 'san-sebastian'],
  },
  {
    id: 'pt',
    name: { ko: '포르투갈', en: 'Portugal' },
    nativeName: 'Portugal',
    flagImage: '/flags/pt.svg',
    landmarkImage: '/landmarks/landmark-pt.jpg',
    flag: '🇵🇹',
    blurb: {
      ko: '대항해와 타일의 나라. 리스본·포르투·알가르브가 여행의 중심입니다.',
      en: 'Discoveries and azulejos—Lisbon, Porto, and the Algarve.',
    },
    facts: {
      population: { ko: '약 1,040만 명', en: 'Approx. 10.4 million' },
      area: { ko: '92,212 km²', en: '92,212 km²' },
      capital: { ko: '리스본 (Lisbon)', en: 'Lisbon' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#006600',
      secondary: '#FF0000',
      accent: '#FFCC00',
      background: '#E8F5E8',
      text: '#0A2A0A',
    },
    cityIds: ['lisbon', 'porto', 'sintra', 'faro', 'coimbra', 'funchal', 'lagos'],
  },
  {
    id: 'gr',
    name: { ko: '그리스', en: 'Greece' },
    nativeName: 'Elláda',
    flagImage: '/flags/gr.svg',
    landmarkImage: '/landmarks/landmark-gr.jpg',
    flag: '🇬🇷',
    blurb: {
      ko: '신화와 섬의 나라. 아테네·산토리니·크레타가 대표적입니다.',
      en: 'Myths and islands—Athens, Santorini, and Crete star.',
    },
    facts: {
      population: { ko: '약 1,040만 명', en: 'Approx. 10.4 million' },
      area: { ko: '131,957 km²', en: '131,957 km²' },
      capital: { ko: '아테네 (Athens)', en: 'Athens' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#0D5EAF',
      secondary: '#FFFFFF',
      accent: '#0D5EAF',
      background: '#E8F0FA',
      text: '#0A1A30',
    },
    cityIds: ['athens', 'santorini', 'heraklion', 'mykonos', 'rhodes', 'thessaloniki', 'corfu', 'nafplio'],
  },
  {
    id: 'pl',
    name: { ko: '폴란드', en: 'Poland' },
    nativeName: 'Polska',
    flagImage: '/flags/pl.svg',
    landmarkImage: '/landmarks/landmark-pl.jpg',
    flag: '🇵🇱',
    blurb: {
      ko: '역사와 재건의 나라. 바르샤바·크라쿠프·그단스크가 핵심입니다.',
      en: 'History and rebuilding—Warsaw, Kraków, and Gdańsk lead.',
    },
    facts: {
      population: { ko: '약 3,680만 명', en: 'Approx. 36.8 million' },
      area: { ko: '312,696 km²', en: '312,696 km²' },
      capital: { ko: '바르샤바 (Warsaw)', en: 'Warsaw' },
      currency: { ko: '즈워티 (PLN, zł)', en: 'Złoty (PLN, zł)' },
    },
    currencyCode: 'PLN',
    currencySymbol: 'zł',
    schengen: true,
    flagColors: {
      primary: '#DC143C',
      secondary: '#FFFFFF',
      accent: '#DC143C',
      background: '#FCE8EC',
      text: '#3A0A10',
    },
    cityIds: ['warsaw', 'krakow', 'gdansk', 'wroclaw', 'poznan', 'zakopane', 'torun'],
  },
  {
    id: 'hr',
    name: { ko: '크로아티아', en: 'Croatia' },
    nativeName: 'Hrvatska',
    flagImage: '/flags/hr.svg',
    landmarkImage: '/landmarks/landmark-hr.jpg',
    flag: '🇭🇷',
    blurb: {
      ko: '아드리아해 성벽 도시의 나라. 두브로브니크·스플리트가 유명합니다.',
      en: 'Adriatic walled towns—Dubrovnik and Split are classics.',
    },
    facts: {
      population: { ko: '약 390만 명', en: 'Approx. 3.9 million' },
      area: { ko: '56,594 km²', en: '56,594 km²' },
      capital: { ko: '자그레브 (Zagreb)', en: 'Zagreb' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#FF0000',
      secondary: '#171796',
      accent: '#FFFFFF',
      background: '#FCE8E8',
      text: '#1A0A20',
    },
    cityIds: ['zagreb', 'dubrovnik', 'split', 'zadar', 'rovinj', 'hvar'],
  },
  {
    id: 'ie',
    name: { ko: '아일랜드', en: 'Ireland' },
    nativeName: 'Éire / Ireland',
    flagImage: '/flags/ie.svg',
    landmarkImage: '/landmarks/landmark-ie.jpg',
    flag: '🇮🇪',
    blurb: {
      ko: '초록 섬의 펍과 해안. 더블린·골웨이·킬라니가 대표적입니다.',
      en: 'Green isle of pubs and coast—Dublin, Galway, and Killarney.',
    },
    facts: {
      population: { ko: '약 530만 명', en: 'Approx. 5.3 million' },
      area: { ko: '70,273 km²', en: '70,273 km²' },
      capital: { ko: '더블린 (Dublin)', en: 'Dublin' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: false,
    flagColors: {
      primary: '#169B62',
      secondary: '#FF883E',
      accent: '#FFFFFF',
      background: '#E8F6EE',
      text: '#0A2A18',
    },
    cityIds: ['dublin', 'galway', 'cork', 'killarney', 'kilkenny', 'limerick'],
  },
  {
    id: 'is',
    name: { ko: '아이슬란드', en: 'Iceland' },
    nativeName: 'Ísland',
    flagImage: '/flags/is.svg',
    landmarkImage: '/landmarks/landmark-is.jpg',
    flag: '🇮🇸',
    blurb: {
      ko: '불과 얼음의 섬. 레이캬비크와 남·북부 자연 루트가 매력입니다.',
      en: 'Fire and ice—Reykjavík and nature routes north and south.',
    },
    facts: {
      population: { ko: '약 39만 명', en: 'Approx. 390,000' },
      area: { ko: '103,000 km²', en: '103,000 km²' },
      capital: { ko: '레이캬비크 (Reykjavík)', en: 'Reykjavík' },
      currency: { ko: '크로나 (ISK, kr)', en: 'Króna (ISK, kr)' },
    },
    currencyCode: 'ISK',
    currencySymbol: 'kr',
    schengen: true,
    flagColors: {
      primary: '#02529C',
      secondary: '#DC1E35',
      accent: '#FFFFFF',
      background: '#E6EEF7',
      text: '#0A1A30',
    },
    cityIds: ['reykjavik', 'akureyri', 'vik', 'husavik', 'selfoss'],
  },
]"""


def patch_countries() -> None:
    path = DATA / "countries.ts"
    text = path.read_text(encoding="utf-8")
    if "id: 'es'" in text:
        print("countries already has es")
        return
    marker = "\n]\n\nexport function getCountry"
    if marker not in text:
        raise SystemExit("countries.ts marker not found")
    # Italy already ends with trailing comma after `}` — do NOT add another leading comma
    text = text.replace(marker, "\n" + COUNTRY_BLOCKS + "\n\nexport function getCountry", 1)
    # Guard against accidental },,
    if "},," in text:
        text = text.replace("},,", "},")
        print("fixed },, double commas")
    path.write_text(text, encoding="utf-8")
    print("appended countries es/pt/gr/pl/hr/ie/is")


def main() -> None:
    write_flags()
    patch_countries()
    write_cities_append()
    write_extras()
    patch_places_ts()
    fashion, grocery, asian = fashion_grocery_asian_rows()
    append_category_file(DATA / "places-fashion.ts", fashion, "es/pt/gr/pl/hr/ie/is")
    append_category_file(DATA / "places-grocery.ts", grocery, "es/pt/gr/pl/hr/ie/is")
    append_category_file(DATA / "places-asian.ts", asian, "es/pt/gr/pl/hr/ie/is")


if __name__ == "__main__":
    main()
