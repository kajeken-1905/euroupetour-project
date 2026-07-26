#!/usr/bin/env python3
"""Generate GE / MK / CY / AL / MT / EE / LV / LT catalog data and flag assets."""

from __future__ import annotations

from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"
FLAGS = ROOT / "public" / "flags"

EXPORT_NAMES = {
    "ge": "placesGEExtra",
    "mk": "placesMKExtra",
    "cy": "placesCYExtra",
    "al": "placesALExtra",
    "mt": "placesMTExtra",
    "ee": "placesEEExtra",
    "lv": "placesLVExtra",
    "lt": "placesLTExtra",
}

GROUPS = {
    "ge": ["tbilisi", "batumi", "kutaisi", "stepantsminda", "sighnaghi"],
    "mk": ["skopje", "ohrid", "bitola", "tetovo"],
    "cy": ["nicosia", "limassol", "paphos", "ayia-napa"],
    "al": ["tirana", "berat", "gjirokaster", "sarande"],
    "mt": ["valletta", "mdina", "gozo"],
    "ee": ["tallinn", "tartu", "parnu"],
    "lv": ["riga", "jurmala", "sigulda"],
    "lt": ["vilnius", "kaunas", "klaipeda"],
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
    # —— Georgia ——
    {
        "id": "tbilisi",
        "countryId": "ge",
        "ko": "트빌리시",
        "en": "Tbilisi",
        "native": "თბილისი",
        "blurb_ko": "조지아 수도. 구시가·나리카라·유황 온천이 여행의 중심입니다.",
        "blurb_en": "Georgian capital—old town, Narikala, and sulfur baths.",
        "highlights": [
            ("나리카라 요새", "Narikala Fortress", "구시가를 내려다보는 언덕 요새입니다.", "Hill fortress above the old town.", "Narikala Fortress Tbilisi"),
            ("아바노투바니 유황 온천", "Abanotubani baths", "돔형 유황 목욕탕 지구입니다.", "Domed sulfur bath quarter.", "Abanotubani Tbilisi"),
            ("평화의 다리", "Bridge of Peace", "쿠라 강 위 유리 보행교입니다.", "Glass footbridge over the Kura.", "Bridge of Peace Tbilisi"),
            ("사메바 대성당", "Sameba Cathedral", "도시 전경의 대형 정교회 성당입니다.", "Large Orthodox cathedral with city views.", "Holy Trinity Cathedral Tbilisi"),
            ("구시가·메이다니", "Old Town / Meidan", "좁은 골목과 와인 바 지구입니다.", "Lanes and wine-bar quarter.", "Old Town Tbilisi"),
        ],
    },
    {
        "id": "batumi",
        "countryId": "ge",
        "ko": "바투미",
        "en": "Batumi",
        "native": "ბათუმი",
        "blurb_ko": "흑해 리조트 도시. 불바르와 현대 타워가 상징입니다.",
        "blurb_en": "Black Sea resort city—boulevard and modern towers.",
        "highlights": [
            ("바투미 불바르", "Batumi Boulevard", "흑해 해안 긴 산책로입니다.", "Long Black Sea promenade.", "Batumi Boulevard"),
            ("알파벳 타워", "Alphabet Tower", "조지아 문자를 담은 전망 타워입니다.", "Tower celebrating the Georgian alphabet.", "Alphabet Tower Batumi"),
            ("바투미 식물원", "Batumi Botanical Garden", "언덕 위 대규모 식물원입니다.", "Hillside botanical gardens.", "Batumi Botanical Garden"),
            ("알리와 니노", "Ali and Nino statue", "움직이는 연인 조각상입니다.", "Moving lovers sculpture.", "Ali and Nino Batumi"),
            ("피아차 광장", "Piazza Batumi", "이탈리아풍 광장과 카페입니다.", "Italian-style square and cafés.", "Piazza Batumi"),
        ],
    },
    {
        "id": "kutaisi",
        "countryId": "ge",
        "ko": "쿠타이스",
        "en": "Kutaisi",
        "native": "ქუთაისი",
        "blurb_ko": "서조지아 역사 도시. 바그라티·겔라티가 가깝습니다.",
        "blurb_en": "West Georgia historic city—Bagrati and nearby Gelati.",
        "highlights": [
            ("바그라티 대성당", "Bagrati Cathedral", "언덕 위 복원된 중세 성당입니다.", "Restored medieval hill cathedral.", "Bagrati Cathedral"),
            ("겔라티 수도원", "Gelati Monastery", "근교 세계유산 수도원입니다.", "Nearby UNESCO monastery.", "Gelati Monastery"),
            ("프로메테우스 동굴", "Prometheus Cave", "조명 카르스트 동굴 투어입니다.", "Lit karst cave tour.", "Prometheus Cave Kutaisi"),
            ("콜키스 분수", "Colchis Fountain", "중앙 광장의 황금 조각 분수입니다.", "Golden-figure fountain on the square.", "Colchis Fountain Kutaisi"),
            ("사타플리아", "Sataplia", "공룡 발자국·동굴 자연보호구입니다.", "Dinosaur tracks and cave reserve.", "Sataplia Kutaisi"),
        ],
    },
    {
        "id": "stepantsminda",
        "countryId": "ge",
        "ko": "스테판츠민다",
        "en": "Stepantsminda",
        "native": "სტეფანწმინდა",
        "blurb_ko": "카즈베기 산록 마을. 게르게티 삼위일체 교회가 상징입니다.",
        "blurb_en": "Kazbegi mountain town—Gergeti Trinity Church.",
        "highlights": [
            ("게르게티 삼위일체 교회", "Gergeti Trinity Church", "카즈베기 배경의 언덕 교회입니다.", "Hill church with Mount Kazbek backdrop.", "Gergeti Trinity Church"),
            ("카즈베기 산", "Mount Kazbek", "코카서스 설산 전망입니다.", "Caucasus snow peak views.", "Mount Kazbek"),
            ("다리알리 협곡", "Dariali Gorge", "러시아 국경 방향 협곡 드라이브입니다.", "Gorge drive toward the border.", "Dariali Gorge"),
            ("그벨레티 폭포", "Gveleti Waterfall", "근교 하이킹 폭포입니다.", "Nearby hiking waterfall.", "Gveleti Waterfall"),
            ("룸스 호텔 전망", "Rooms Hotel viewpoint", "산악 파노라마 테라스입니다.", "Mountain panorama terrace.", "Rooms Hotel Kazbegi"),
        ],
    },
    {
        "id": "sighnaghi",
        "countryId": "ge",
        "ko": "시그나기",
        "en": "Sighnaghi",
        "native": "სიღნაღი",
        "blurb_ko": "카헤티 와인 언덕의 ‘사랑의 도시’. 성벽 전망이 아름답습니다.",
        "blurb_en": "Kakheti wine-hill ‘City of Love’—wall viewpoints.",
        "highlights": [
            ("시그나기 성벽", "Sighnaghi walls", "알라자니 계곡 전망 성벽입니다.", "Walls with Alazani Valley views.", "Sighnaghi fortress walls"),
            ("보드베 수도원", "Bodbe Monastery", "성 니노와 연결된 근교 수도원입니다.", "Nearby monastery linked to St Nino.", "Bodbe Monastery"),
            ("와인 셀러", "Wine cellars", "카헤티 와인 시음 셀러입니다.", "Kakheti wine-tasting cellars.", "Sighnaghi wine cellar"),
            ("사랑의 광장", "Love City squares", "소도시 광장과 테라스입니다.", "Town squares and terraces.", "Sighnaghi square"),
            ("알라자니 전망", "Alazani viewpoint", "포도밭·산맥 파노라마입니다.", "Vineyard and mountain panorama.", "Alazani Valley viewpoint Sighnaghi"),
        ],
    },
    # —— North Macedonia ——
    {
        "id": "skopje",
        "countryId": "mk",
        "ko": "스코페",
        "en": "Skopje",
        "native": "Скопје",
        "blurb_ko": "북마케도니아 수도. 석교·구시장·조각상이 인상적입니다.",
        "blurb_en": "Capital—stone bridge, old bazaar, and monumental statues.",
        "highlights": [
            ("석교", "Stone Bridge", "바르다르 강 위 오스만 석교입니다.", "Ottoman stone bridge on the Vardar.", "Stone Bridge Skopje"),
            ("구시장", "Old Bazaar", "발칸 최대급 오스만 시장 지구입니다.", "One of the Balkans’ largest Ottoman bazaars.", "Old Bazaar Skopje"),
            ("마케도니아 광장", "Macedonia Square", "동상과 분수의 중앙 광장입니다.", "Central square of statues and fountains.", "Macedonia Square Skopje"),
            ("마트카 협곡", "Matka Canyon", "근교 호수·카약 협곡입니다.", "Nearby lake and kayak canyon.", "Matka Canyon"),
            ("칼레 요새", "Skopje Fortress (Kale)", "구시가 위 중세 요새입니다.", "Medieval fortress above the old town.", "Kale Fortress Skopje"),
        ],
    },
    {
        "id": "ohrid",
        "countryId": "mk",
        "ko": "오흐리드",
        "en": "Ohrid",
        "native": "Охрид",
        "blurb_ko": "세계유산 호수 도시. 성 요한 카네오가 엽서 풍경입니다.",
        "blurb_en": "UNESCO lake town—St John at Kaneo postcard views.",
        "highlights": [
            ("오흐리드 호수", "Lake Ohrid", "고대 호수 유람·수영입니다.", "Ancient lake for cruises and swims.", "Lake Ohrid"),
            ("성 요한 카네오", "St John at Kaneo", "절벽 위 상징 교회입니다.", "Iconic cliff-edge church.", "Church of St John at Kaneo"),
            ("오흐리드 구시가", "Ohrid Old Town", "돌골목과 성당 지구입니다.", "Stone lanes and churches.", "Ohrid Old Town"),
            ("사무엘 요새", "Samuel’s Fortress", "호수 전망 언덕 요새입니다.", "Hill fortress with lake views.", "Samuel's Fortress Ohrid"),
            ("플라오슈니크", "Plaošnik", "복원된 성당·유적 단지입니다.", "Restored church and archaeology site.", "Plaošnik Ohrid"),
        ],
    },
    {
        "id": "bitola",
        "countryId": "mk",
        "ko": "비톨라",
        "en": "Bitola",
        "native": "Битола",
        "blurb_ko": "남부 문화 도시. 시로크 소칵과 헤라클레아 유적이 유명합니다.",
        "blurb_en": "Southern cultural city—Širok Sokak and Heraclea ruins.",
        "highlights": [
            ("시로크 소칵", "Širok Sokak", "카페·상점이 늘어선 보행 거리입니다.", "Pedestrian street of cafés and shops.", "Širok Sokak Bitola"),
            ("헤라클레아 린케스티스", "Heraclea Lyncestis", "로마·초기 기독교 유적입니다.", "Roman and early Christian ruins.", "Heraclea Lyncestis"),
            ("시계탑", "Clock Tower", "구시가 상징 시계탑입니다.", "Old-town clock tower landmark.", "Bitola Clock Tower"),
            ("시티 파크", "City Park", "산책·분수 공원입니다.", "Park walks and fountains.", "City Park Bitola"),
            ("마가자 지구", "Magaza district", "오스만·네오클래식 건축 지구입니다.", "Ottoman and neoclassical quarter.", "Magaza Bitola"),
        ],
    },
    {
        "id": "tetovo",
        "countryId": "mk",
        "ko": "테토보",
        "en": "Tetovo",
        "native": "Тетово",
        "blurb_ko": "샤르 산맥 기슭 도시. 채색 모스크가 유명합니다.",
        "blurb_en": "Šar Mountain foothill city—famous Painted Mosque.",
        "highlights": [
            ("채색 모스크", "Painted Mosque", "화려한 벽화의 오스만 모스크입니다.", "Ottoman mosque with vivid murals.", "Painted Mosque Tetovo"),
            ("아라바티 바바 테케", "Arabati Baba Tekke", "베크타시 수도원 단지입니다.", "Bektashi dervish complex.", "Arabati Baba Tekke"),
            ("샤르 산맥", "Šar Mountains", "근교 하이킹·스키 산악입니다.", "Nearby hiking and ski mountains.", "Šar Mountains Tetovo"),
            ("구시장", "Old Bazaar Tetovo", "전통 시장 골목입니다.", "Traditional bazaar lanes.", "Old Bazaar Tetovo"),
            ("페나 강", "Pena River", "도심 강변 산책로입니다.", "Town riverwalk.", "Pena River Tetovo"),
        ],
    },
    # —— Cyprus ——
    {
        "id": "nicosia",
        "countryId": "cy",
        "ko": "니코시아",
        "en": "Nicosia",
        "native": "Λευκωσία / Lefkoşa",
        "blurb_ko": "키프로스 수도. 성벽 구시가와 레드라 거리가 중심입니다.",
        "blurb_en": "Capital—walled old city and Ledra Street.",
        "highlights": [
            ("베네치아 성벽", "Venetian walls", "원형 성벽과 바스티온입니다.", "Circular walls and bastions.", "Nicosia Venetian walls"),
            ("부육 한", "Büyük Han", "오스만 대상인 숙소·마당입니다.", "Ottoman caravanserai courtyard.", "Büyük Han Nicosia"),
            ("레드라 거리", "Ledra Street", "쇼핑·체크포인트 보행 거리입니다.", "Shopping and crossing pedestrian street.", "Ledra Street Nicosia"),
            ("키프로스 박물관", "Cyprus Museum", "고대 유물 국립박물관입니다.", "National museum of antiquities.", "Cyprus Museum Nicosia"),
            ("파네로메니", "Faneromeni", "구시가 광장과 성당입니다.", "Old-city square and church.", "Faneromeni Nicosia"),
        ],
    },
    {
        "id": "limassol",
        "countryId": "cy",
        "ko": "리마솔",
        "en": "Limassol",
        "native": "Λεμεσός",
        "blurb_ko": "남해안 상업·리조트 도시. 올드포트와 몰로스가 매력입니다.",
        "blurb_en": "South-coast business and resort city—old port and Molos.",
        "highlights": [
            ("올드 포트", "Old Port", "카페·요트가 있는 재개발 항구입니다.", "Redeveloped harbour of cafés and yachts.", "Limassol Old Port"),
            ("리마솔 성", "Limassol Castle", "중세 성·박물관입니다.", "Medieval castle museum.", "Limassol Castle"),
            ("몰로스 산책로", "Molos promenade", "해안 조각·산책 공원입니다.", "Seafront sculpture promenade.", "Molos Limassol"),
            ("사리폴루 광장", "Saripolou Square", "바·카페가 모인 밤 거리입니다.", "Nightlife square of bars and cafés.", "Saripolou Square"),
            ("와인 박물관 권역", "Wine museum area", "근교 와인 시음·박물관입니다.", "Nearby wine tasting and museum.", "Cyprus Wine Museum"),
        ],
    },
    {
        "id": "paphos",
        "countryId": "cy",
        "ko": "파포스",
        "en": "Paphos",
        "native": "Πάφος",
        "blurb_ko": "서해안 고고학 도시. 모자이크와 항구 성이 유명합니다.",
        "blurb_en": "West-coast archaeology hub—mosaics and harbour castle.",
        "highlights": [
            ("파포스 항구 성", "Paphos Harbour Castle", "항구 입구의 중세 요새입니다.", "Medieval fort at the harbour mouth.", "Paphos Castle"),
            ("모자이크 가옥", "Paphos Mosaics", "로마 빌라 바닥 모자이크입니다.", "Roman villa floor mosaics.", "Paphos Archaeological Park"),
            ("왕들의 무덤", "Tombs of the Kings", "헬레니즘 암굴 무덤군입니다.", "Hellenistic rock-cut tombs.", "Tombs of the Kings Paphos"),
            ("카토 파포스", "Kato Paphos", "해변·유적 보행 지구입니다.", "Seafront and ruins walk district.", "Kato Paphos"),
            ("아프로디테 바위", "Aphrodite’s Rock", "근교 전설의 해안 바위입니다.", "Legendary coastal rock nearby.", "Petra tou Romiou"),
        ],
    },
    {
        "id": "ayia-napa",
        "countryId": "cy",
        "ko": "아야나파",
        "en": "Ayia Napa",
        "native": "Αγία Νάπα",
        "blurb_ko": "동해안 비치 리조트. 니시 비치와 케이프 그레코가 대표적입니다.",
        "blurb_en": "East-coast beach resort—Nissi Beach and Cape Greco.",
        "highlights": [
            ("니시 비치", "Nissi Beach", "터키석 바다의 인기 해변입니다.", "Popular turquoise beach.", "Nissi Beach"),
            ("씨 케이브", "Sea Caves", "석회암 해안 동굴입니다.", "Limestone sea caves.", "Ayia Napa Sea Caves"),
            ("아야나파 수도원", "Ayia Napa Monastery", "광장 중심의 베네치아 수도원입니다.", "Venetian monastery on the square.", "Ayia Napa Monastery"),
            ("조각 공원", "Sculpture Park", "해안 야외 조각 공원입니다.", "Coastal open-air sculpture park.", "Ayia Napa Sculpture Park"),
            ("케이프 그레코", "Cape Greco", "절벽·트레일의 국립공원입니다.", "Cliff trails national park.", "Cape Greco"),
        ],
    },
    # —— Albania ——
    {
        "id": "tirana",
        "countryId": "al",
        "ko": "티라나",
        "en": "Tirana",
        "native": "Tiranë",
        "blurb_ko": "알바니아 수도. 스칸데르베그 광장과 블로쿠가 중심입니다.",
        "blurb_en": "Capital—Skanderbeg Square and the Blloku district.",
        "highlights": [
            ("스칸데르베그 광장", "Skanderbeg Square", "국가 상징의 중앙 광장입니다.", "Central national square.", "Skanderbeg Square Tirana"),
            ("블로쿠", "Blloku", "카페·바의 트렌디 지구입니다.", "Trendy café and bar district.", "Blloku Tirana"),
            ("다지티 산", "Mount Dajti", "케이블카 전망 산입니다.", "Cable-car mountain viewpoint.", "Dajti Ekspres"),
            ("피라미드", "Pyramid of Tirana", "재탄생한 전망·문화 공간입니다.", "Reborn lookout and culture space.", "Pyramid of Tirana"),
            ("에템 베이 모스크", "Et’hem Bey Mosque", "광장 옆 오스만 모스크입니다.", "Ottoman mosque by the square.", "Et'hem Bey Mosque"),
        ],
    },
    {
        "id": "berat",
        "countryId": "al",
        "ko": "베라트",
        "en": "Berat",
        "native": "Berati",
        "blurb_ko": "‘천 개의 창’ 세계유산 도시. 성채와 망갈렘이 아름답습니다.",
        "blurb_en": "UNESCO ‘city of a thousand windows’—castle and Mangalem.",
        "highlights": [
            ("베라트 성", "Berat Castle (Kalaja)", "거주 성채와 교회들입니다.", "Lived-in citadel and churches.", "Berat Castle"),
            ("망갈렘", "Mangalem", "흰 오스만 가옥 언덕 지구입니다.", "White Ottoman hillside quarter.", "Mangalem Berat"),
            ("고리차", "Gorica", "강 건너 석교·전망 지구입니다.", "Across-river bridge and views.", "Gorica Berat"),
            ("오누프리 박물관", "Onufri Museum", "이콘 미술 박물관입니다.", "Icon painting museum.", "Onufri Museum Berat"),
            ("오숨 강 전망", "Osum viewpoints", "강과 성채 파노라마입니다.", "River and castle panoramas.", "Osum River Berat"),
        ],
    },
    {
        "id": "gjirokaster",
        "countryId": "al",
        "ko": "지로카스트라",
        "en": "Gjirokastër",
        "native": "Gjirokastra",
        "blurb_ko": "돌지붕 세계유산 도시. 성과 구시장이 상징입니다.",
        "blurb_en": "UNESCO stone-roof city—castle and old bazaar.",
        "highlights": [
            ("지로카스트라 성", "Gjirokastër Castle", "계곡 전망의 대형 요새입니다.", "Large fortress with valley views.", "Gjirokastër Castle"),
            ("구시장", "Old Bazaar", "돌길 상점·공방 거리입니다.", "Stone-lane shops and workshops.", "Gjirokastër Old Bazaar"),
            ("스켄둘리 하우스", "Skenduli House", "오스만 귀족 가옥 박물관입니다.", "Ottoman manor museum house.", "Skenduli House"),
            ("민속 박물관", "Ethnographic Museum", "전통 생활·건축 전시입니다.", "Traditional life and architecture.", "Ethnographic Museum Gjirokastër"),
            ("냉전 터널", "Cold War Tunnel", "성 아래 비밀 벙커 투어입니다.", "Secret bunker tour under the castle.", "Cold War Tunnel Gjirokastër"),
        ],
    },
    {
        "id": "sarande",
        "countryId": "al",
        "ko": "사란다",
        "en": "Sarandë",
        "native": "Saranda",
        "blurb_ko": "이오니아 해안 리조트. 블루아이·부트린트가 가깝습니다.",
        "blurb_en": "Ionian resort—nearby Blue Eye and Butrint.",
        "highlights": [
            ("해안 산책로", "Sarandë promenade", "이오니아 해변 보행로입니다.", "Ionian waterfront walk.", "Sarandë promenade"),
            ("레쿠르시 성", "Lëkurësi Castle", "도시·바다 전망 언덕 성입니다.", "Hill castle with town and sea views.", "Lëkurësi Castle"),
            ("블루 아이", "Blue Eye (Syri i Kaltër)", "근교 청록 용천입니다.", "Nearby turquoise spring.", "Blue Eye Albania"),
            ("부트린트", "Butrint", "근교 고대 세계유산 유적입니다.", "Nearby UNESCO ancient ruins.", "Butrint"),
            ("해변·카멘", "Ksamil / beaches", "근교 섬 전망 해변입니다.", "Nearby beaches with island views.", "Ksamil Beach"),
        ],
    },
    # —— Malta ——
    {
        "id": "valletta",
        "countryId": "mt",
        "ko": "발레타",
        "en": "Valletta",
        "native": "Valletta",
        "blurb_ko": "몰타 수도. 성 요한 대성당과 그랜드 하버가 상징입니다.",
        "blurb_en": "Capital—St John’s Co-Cathedral and the Grand Harbour.",
        "highlights": [
            ("성 요한 공동대성당", "St John’s Co-Cathedral", "카라바조와 대리석 바닥의 성당입니다.", "Cathedral of Caravaggio and marble floors.", "St John's Co-Cathedral"),
            ("어퍼 바라카 정원", "Upper Barrakka Gardens", "그랜드 하버 전망 정원입니다.", "Gardens overlooking Grand Harbour.", "Upper Barrakka Gardens"),
            ("공화국 거리", "Republic Street", "상점·카페의 메인 거리입니다.", "Main street of shops and cafés.", "Republic Street Valletta"),
            ("그랜드 하버", "Grand Harbour", "요새 항구 파노라마입니다.", "Fortified harbour panorama.", "Grand Harbour Valletta"),
            ("성 엘모 요새", "Fort St Elmo", "국립전쟁박물관이 있는 요새입니다.", "Fort with the National War Museum.", "Fort St Elmo"),
        ],
    },
    {
        "id": "mdina",
        "countryId": "mt",
        "ko": "므디나",
        "en": "Mdina",
        "native": "L-Imdina",
        "blurb_ko": "‘고요한 도시’. 성문과 성벽 전망이 인상적입니다.",
        "blurb_en": "The Silent City—gates and bastion views.",
        "highlights": [
            ("므디나 성문", "Mdina Gate", "바로크 성벽 입구입니다.", "Baroque walled-city entrance.", "Mdina Gate"),
            ("성 바오로 대성당", "St Paul’s Cathedral", "므디나 중심 대성당입니다.", "Cathedral at Mdina’s heart.", "St Paul's Cathedral Mdina"),
            ("성벽 전망", "Bastion viewpoints", "섬 전경의 성벽 전망입니다.", "Island views from the bastions.", "Mdina bastions"),
            ("고요한 골목", "Silent City streets", "돌 골목과 궁전 파사드입니다.", "Stone lanes and palace façades.", "Mdina streets"),
            ("팔라초 팔손", "Palazzo Falson", "중세 저택 박물관입니다.", "Medieval house museum.", "Palazzo Falson"),
        ],
    },
    {
        "id": "gozo",
        "countryId": "mt",
        "ko": "고조",
        "en": "Gozo",
        "native": "Għawdex / Victoria",
        "blurb_ko": "고조 섬. 빅토리아 시타델과 젠틸라 신전이 대표적입니다.",
        "blurb_en": "Gozo island—Victoria Citadel and Ġgantija temples.",
        "highlights": [
            ("빅토리아 시타델", "Citadel (Victoria)", "섬 중심 요새 구시가입니다.", "Island-centre fortified old town.", "Citadel Victoria Gozo"),
            ("젠틸라 신전", "Ġgantija Temples", "선사 시대 거석 신전입니다.", "Prehistoric megalithic temples.", "Ġgantija Temples"),
            ("드웨이라 / 인랜드 시", "Dwejra / Inland Sea", "절벽·내해 지질 명소입니다.", "Cliffs and inland-sea geology.", "Dwejra Gozo"),
            ("람라 베이", "Ramla Bay", "붉은 모래 해변입니다.", "Red-sand beach.", "Ramla Bay Gozo"),
            ("슐렌디", "Xlendi", "절벽 만의 해안 마을입니다.", "Cliff-bay coastal village.", "Xlendi Gozo"),
        ],
    },
    # —— Estonia ——
    {
        "id": "tallinn",
        "countryId": "ee",
        "ko": "탈린",
        "en": "Tallinn",
        "native": "Tallinn",
        "blurb_ko": "에스토니아 수도. 중세 구시가와 텔리스키비가 매력입니다.",
        "blurb_en": "Capital—medieval old town and Telliskivi.",
        "highlights": [
            ("탈린 구시가", "Tallinn Old Town", "성벽·광장의 중세 도시입니다.", "Walled medieval city of squares.", "Tallinn Old Town"),
            ("툼페아", "Toompea", "국회·전망의 언덕 지구입니다.", "Hill of parliament and viewpoints.", "Toompea Tallinn"),
            ("알렉산드르 네프스키", "Alexander Nevsky Cathedral", "툼페아의 정교회 성당입니다.", "Orthodox cathedral on Toompea.", "Alexander Nevsky Cathedral Tallinn"),
            ("텔리스키비", "Telliskivi", "창작·카페의 산업 지구입니다.", "Creative industrial café district.", "Telliskivi Tallinn"),
            ("카드리오르그", "Kadriorg", "궁전과 공원의 바로크 지구입니다.", "Baroque palace and park district.", "Kadriorg Tallinn"),
        ],
    },
    {
        "id": "tartu",
        "countryId": "ee",
        "ko": "타르투",
        "en": "Tartu",
        "native": "Tartu",
        "blurb_ko": "대학 도시. 시청 광장과 에마여기 강이 중심입니다.",
        "blurb_en": "University city—Town Hall Square and the Emajõgi.",
        "highlights": [
            ("타르투 대학", "University of Tartu", "고전 캠퍼스와 박물관입니다.", "Classic campus and museums.", "University of Tartu"),
            ("시청 광장", "Town Hall Square", "분홍 시청과 키스하는 학생 상입니다.", "Pink town hall and kissing students.", "Tartu Town Hall Square"),
            ("아하 과학센터", "AHHAA Centre", "인터랙티브 과학 박물관입니다.", "Interactive science centre.", "AHHAA Tartu"),
            ("스트리트 아트", "Street art Tartu", "벽화·창작 골목입니다.", "Murals and creative alleys.", "Tartu street art"),
            ("에마여기 강변", "Emajõgi riverfront", "강변 산책·카페입니다.", "River walks and cafés.", "Emajõgi Tartu"),
        ],
    },
    {
        "id": "parnu",
        "countryId": "ee",
        "ko": "패르누",
        "en": "Pärnu",
        "native": "Pärnu",
        "blurb_ko": "여름 수도. 해변과 머드 스파가 유명합니다.",
        "blurb_en": "Summer capital—beach and mud spas.",
        "highlights": [
            ("패르누 해변", "Pärnu Beach", "넓은 모래 해변과 산책로입니다.", "Wide sandy beach and promenade.", "Pärnu Beach"),
            ("머드 배스", "Mud baths / spa", "전통 머드·스파 리조트입니다.", "Traditional mud and spa resorts.", "Pärnu mud baths"),
            ("구시가", "Pärnu Old Town", "목조·카페의 소도시 중심입니다.", "Timber cafés in the town centre.", "Pärnu Old Town"),
            ("해안 공원", "Coastal park", "소나무·산책 녹지입니다.", "Pine walks and green parkland.", "Pärnu coastal park"),
            ("요트 클럽", "Yacht harbour", "마리나·선셋 전망입니다.", "Marina and sunset views.", "Pärnu yacht harbour"),
        ],
    },
    # —— Latvia ——
    {
        "id": "riga",
        "countryId": "lv",
        "ko": "리가",
        "en": "Riga",
        "native": "Rīga",
        "blurb_ko": "라트비아 수도. 구시가·아르누보·중앙시장이 대표적입니다.",
        "blurb_en": "Capital—old town, Art Nouveau, and the Central Market.",
        "highlights": [
            ("리가 구시가", "Riga Old Town", "성당·광장의 중세·한자 지구입니다.", "Medieval Hanseatic churches and squares.", "Riga Old Town"),
            ("흑두상 회관", "House of the Blackheads", "광장의 화려한 길드 홀입니다.", "Ornate guild hall on the square.", "House of the Blackheads"),
            ("아르누보 지구", "Art Nouveau District", "알베르타 거리 등 장식 파사드입니다.", "Decorated façades such as Alberta Street.", "Alberta Street Riga"),
            ("중앙시장", "Central Market", "비행선 격납고형 대형 시장입니다.", "Market halls in former zeppelin hangars.", "Riga Central Market"),
            ("자유의 기념비", "Freedom Monument", "국가 상징 기념비와 꽃입니다.", "National monument and flowers.", "Freedom Monument Riga"),
        ],
    },
    {
        "id": "jurmala",
        "countryId": "lv",
        "ko": "유르말라",
        "en": "Jūrmala",
        "native": "Jūrmala",
        "blurb_ko": "리가 근교 해변 리조트. 긴 백사장과 목조 별장이 매력입니다.",
        "blurb_en": "Beach resort near Riga—long sands and wooden villas.",
        "highlights": [
            ("유르말라 해변", "Jūrmala Beach", "발트해 긴 백사장입니다.", "Long Baltic sandy beach.", "Jūrmala Beach"),
            ("요마스 거리", "Jomas Street", "카페·상점의 메인 보행 거리입니다.", "Main pedestrian street of cafés.", "Jomas Street Jūrmala"),
            ("진타리", "Dzintari", "콘서트홀·숲 산책 지구입니다.", "Concert hall and pine-walk district.", "Dzintari Jūrmala"),
            ("마요리", "Majori", "리조트 중심·기차역 지구입니다.", "Resort centre by the station.", "Majori Jūrmala"),
            ("케메리 공원", "Ķemeri Park", "근교 습지·온천 국립공원입니다.", "Nearby bog and spa national park.", "Ķemeri National Park"),
        ],
    },
    {
        "id": "sigulda",
        "countryId": "lv",
        "ko": "시굴다",
        "en": "Sigulda",
        "native": "Sigulda",
        "blurb_ko": "가우야 계곡의 성 마을. 투라이다와 케이블카가 유명합니다.",
        "blurb_en": "Gauja Valley castle town—Turaida and cable car.",
        "highlights": [
            ("투라이다 성", "Turaida Castle", "붉은 벽돌 중세 성입니다.", "Red-brick medieval castle.", "Turaida Castle"),
            ("가우야 계곡", "Gauja Valley", "국립공원 하이킹·전망입니다.", "National-park hikes and viewpoints.", "Gauja National Park Sigulda"),
            ("케이블카", "Sigulda cable car", "계곡을 가로지르는 케이블카입니다.", "Cable car across the valley.", "Sigulda cable car"),
            ("구트만 동굴", "Gutman’s Cave", "전설의 대형 사암 동굴입니다.", "Legendary sandstone cave.", "Gutman's Cave"),
            ("크리물다", "Krimulda", "근교 궁전·산책로입니다.", "Nearby manor and walking trails.", "Krimulda Manor"),
        ],
    },
    # —— Lithuania ——
    {
        "id": "vilnius",
        "countryId": "lt",
        "ko": "빌뉴스",
        "en": "Vilnius",
        "native": "Vilnius",
        "blurb_ko": "리투아니아 수도. 바로크 구시가와 우주피스가 매력입니다.",
        "blurb_en": "Capital—Baroque old town and Užupis.",
        "highlights": [
            ("빌뉴스 구시가", "Vilnius Old Town", "세계유산 바로크·고딕 지구입니다.", "UNESCO Baroque and Gothic quarter.", "Vilnius Old Town"),
            ("게디미나스 탑", "Gediminas Tower", "도시 전망의 성채 탑입니다.", "Castle tower with city views.", "Gediminas Tower"),
            ("대성당 광장", "Cathedral Square", "종탑과 대성당의 중앙 광장입니다.", "Cathedral and belfry square.", "Cathedral Square Vilnius"),
            ("우주피스", "Užupis", "예술가 ‘공화국’ 지구입니다.", "Bohemian artists’ ‘republic’.", "Užupis Vilnius"),
            ("새벽의 문", "Gate of Dawn", "성모 이콘 예배당 성문입니다.", "City gate with a Marian chapel.", "Gate of Dawn Vilnius"),
        ],
    },
    {
        "id": "kaunas",
        "countryId": "lt",
        "ko": "카우나스",
        "en": "Kaunas",
        "native": "Kaunas",
        "blurb_ko": "임시 수도였던 제2도시. 자유 거리와 성이 유명합니다.",
        "blurb_en": "Second city and former temporary capital—Laisvės and castle.",
        "highlights": [
            ("카우나스 구시가", "Kaunas Old Town", "시청 광장과 중세 골목입니다.", "Town-hall square and medieval lanes.", "Kaunas Old Town"),
            ("자유 거리", "Laisvės alėja", "긴 보행자 메인 거리입니다.", "Long pedestrian main avenue.", "Laisvės alėja"),
            ("카우나스 성", "Kaunas Castle", "네무나스 강변 벽돌 성입니다.", "Brick castle by the Nemunas.", "Kaunas Castle"),
            ("제9요새", "Ninth Fort", "역사 박물관·기념 단지입니다.", "History museum and memorial.", "Ninth Fort Kaunas"),
            ("스트리트 아트", "Kaunas street art", "현대 벽화·디자인 도시입니다.", "Contemporary murals and design.", "Kaunas street art"),
        ],
    },
    {
        "id": "klaipeda",
        "countryId": "lt",
        "ko": "클라이페다",
        "en": "Klaipėda",
        "native": "Klaipėda",
        "blurb_ko": "발트해 항구 도시. 구시가와 쿠로니아 사주가 가깝습니다.",
        "blurb_en": "Baltic port city—old town and nearby Curonian Spit.",
        "highlights": [
            ("클라이페다 구시가", "Klaipėda Old Town", "독일풍 창고·조각 거리입니다.", "German-style warehouses and sculptures.", "Klaipėda Old Town"),
            ("극장 광장", "Theatre Square", "아나슈타스 조각의 중심 광장입니다.", "Square of the Annchen sculpture.", "Theatre Square Klaipėda"),
            ("쿠로니아 사주", "Curonian Spit", "근교 사구·숲 세계유산입니다.", "Nearby UNESCO dunes and forest.", "Curonian Spit"),
            ("스밀티네", "Smiltynė", "페리로 가는 해변·해양박물관입니다.", "Ferry beach and maritime museum.", "Smiltynė"),
            ("크루즈 터미널 산책", "Port promenade", "항구·해안 산책로입니다.", "Harbour and seafront walk.", "Klaipėda port promenade"),
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
    "tbilisi": {
        "fine_dining": [
            ("Shoti / modern Georgian peers", 4.6, "Tbilisi", "모던 조지아 파인.", "Modern Georgian fine dining.", 1200),
            ("Culinarium / tasting peers", 4.5, "Tbilisi", "시즌 테이스팅.", "Seasonal tasting.", 900),
            ("Old Town supra classics", 4.5, "Tbilisi", "전통 수프라 연회.", "Traditional supra feast.", 3600),
            ("Wine bar dining peers", 4.4, "Tbilisi", "와인 바 다이닝.", "Wine-bar dining.", 2100),
            ("Riverfront bistro peers", 4.4, "Tbilisi", "강변 비스트로.", "Riverside bistro.", 1600),
        ],
        "bakery": [
            ("Shotis puri bakeries", 4.5, "Tbilisi", "쇼티 빵집.", "Shoti bread bakeries.", 4200),
            ("Khachapuri counters", 4.5, "Tbilisi", "하차푸리 카운터.", "Khachapuri counters.", 4800),
            ("Pastry shops Old Town", 4.4, "Tbilisi", "구시가 페이스트리.", "Old-town pastry shops.", 1800),
            ("Modern sourdough peers", 4.4, "Tbilisi", "사워도우.", "Sourdough.", 900),
        ],
        "cafe": [
            ("Specialty coffee Tbilisi", 4.5, "Tbilisi", "스페셜티 커피.", "Specialty coffee.", 2100),
            ("Etseri / courtyard cafés", 4.4, "Tbilisi", "중정 카페.", "Courtyard café.", 1600),
            ("Rustaveli café terraces", 4.3, "Tbilisi", "대로 테라스 카페.", "Avenue terrace cafés.", 2400),
            ("Brunch Tbilisi peers", 4.4, "Tbilisi", "브런치 카페.", "Brunch café.", 1400),
        ],
        "korean": [
            ("Korean Kitchen Tbilisi", 4.3, "Tbilisi", "캐주얼 한식.", "Casual Korean.", 480),
            ("Bibimbap Tbilisi", 4.3, "Tbilisi", "비빔밥.", "Bibimbap.", 360),
            ("Korean BBQ Tbilisi", 4.2, "Tbilisi", "고기구이.", "Korean BBQ.", 400),
            ("Kimchi Tbilisi", 4.2, "Tbilisi", "김치·반찬.", "Kimchi-focused.", 280),
        ],
    },
    "skopje": {
        "fine_dining": [
            ("Restaurant Destan / peers", 4.5, "Skopje", "모던 마케도니아.", "Modern Macedonian.", 1100),
            ("Old Bazaar grill classics", 4.5, "Skopje", "구시장 그릴.", "Old-bazaar grill classics.", 3200),
            ("Debar Maalo dining peers", 4.4, "Skopje", "데바르 마알로 다이닝.", "Debar Maalo dining.", 1600),
            ("Hotel fine dining peers", 4.4, "Skopje", "호텔 파인.", "Hotel fine dining.", 900),
            ("Vardar riverfront bistro", 4.3, "Skopje", "강변 비스트로.", "Riverfront bistro.", 1400),
        ],
        "bakery": [
            ("Burek bakeries Skopje", 4.5, "Skopje", "부렉 빵집.", "Burek bakeries.", 4200),
            ("Pita / pastry shops", 4.4, "Skopje", "피타·페이스트리.", "Pita and pastries.", 2800),
            ("Old Bazaar bread stalls", 4.3, "Skopje", "시장 빵 가판.", "Bazaar bread stalls.", 1800),
            ("Modern bakery peers", 4.4, "Skopje", "모던 베이커리.", "Modern bakery.", 900),
        ],
        "cafe": [
            ("Specialty coffee Skopje", 4.5, "Skopje", "스페셜티 커피.", "Specialty coffee.", 1600),
            ("Debar Maalo cafés", 4.4, "Skopje", "카페 거리.", "Café streets.", 2100),
            ("Square espresso bars", 4.3, "Skopje", "광장 에스프레소.", "Square espresso.", 1800),
            ("Brunch Skopje peers", 4.4, "Skopje", "브런치 카페.", "Brunch café.", 1200),
        ],
        "korean": [
            ("Korean Kitchen Skopje", 4.3, "Skopje", "캐주얼 한식.", "Casual Korean.", 420),
            ("Bibimbap Skopje", 4.2, "Skopje", "비빔밥.", "Bibimbap.", 320),
            ("Korean BBQ Skopje", 4.2, "Skopje", "고기구이.", "Korean BBQ.", 360),
            ("Kimchi Skopje", 4.2, "Skopje", "김치·반찬.", "Kimchi-focused.", 260),
        ],
    },
    "nicosia": {
        "fine_dining": [
            ("Modern Cypriot tasting peers", 4.5, "Nicosia", "모던 키프로스 코스.", "Modern Cypriot tasting.", 900),
            ("Meze house classics", 4.5, "Nicosia", "전통 메제.", "Classic meze house.", 2800),
            ("Old City tavern peers", 4.4, "Nicosia", "구시가 선술집.", "Old-city tavern.", 1600),
            ("Hotel fine dining peers", 4.4, "Nicosia", "호텔 파인.", "Hotel fine dining.", 800),
            ("Wine bar dining peers", 4.4, "Nicosia", "와인 바 다이닝.", "Wine-bar dining.", 1100),
        ],
        "bakery": [
            ("Halloumi pie bakeries", 4.5, "Nicosia", "할루미 파이 빵집.", "Halloumi pie bakeries.", 2100),
            ("Baklava pastry shops", 4.5, "Nicosia", "바클라바·과자.", "Baklava and sweets.", 1800),
            ("Village bread counters", 4.3, "Nicosia", "빌리지 브레드.", "Village bread.", 1200),
            ("Modern sourdough peers", 4.4, "Nicosia", "사워도우.", "Sourdough.", 700),
        ],
        "cafe": [
            ("Specialty coffee Nicosia", 4.5, "Nicosia", "스페셜티 커피.", "Specialty coffee.", 1400),
            ("Ledra Street cafés", 4.3, "Nicosia", "레드라 카페.", "Ledra Street cafés.", 2100),
            ("Courtyard coffee houses", 4.4, "Nicosia", "중정 커피하우스.", "Courtyard coffee houses.", 1600),
            ("Brunch Nicosia peers", 4.4, "Nicosia", "브런치 카페.", "Brunch café.", 1100),
        ],
        "korean": [
            ("Korean Kitchen Nicosia", 4.3, "Nicosia", "캐주얼 한식.", "Casual Korean.", 480),
            ("Bibimbap Nicosia", 4.3, "Nicosia", "비빔밥.", "Bibimbap.", 360),
            ("Korean BBQ Nicosia", 4.2, "Nicosia", "고기구이.", "Korean BBQ.", 400),
            ("Kimchi Nicosia", 4.2, "Nicosia", "김치·반찬.", "Kimchi-focused.", 280),
        ],
    },
    "tirana": {
        "fine_dining": [
            ("Mullixhiu", 4.7, "Tirana", "농가·시즌 알바니아 파인.", "Farm and seasonal Albanian fine dining.", 1100),
            ("Modern Balkan tasting peers", 4.5, "Tirana", "모던 발칸 코스.", "Modern Balkan tasting.", 900),
            ("Blloku bistro peers", 4.4, "Tirana", "블로쿠 비스트로.", "Blloku bistro.", 2100),
            ("Traditional tavolina peers", 4.4, "Tirana", "전통 가정식.", "Traditional home cooking.", 1800),
            ("Hotel fine dining peers", 4.4, "Tirana", "호텔 파인.", "Hotel fine dining.", 800),
        ],
        "bakery": [
            ("Byrek bakeries Tirana", 4.5, "Tirana", "부렉 빵집.", "Byrek bakeries.", 3600),
            ("Petulla / pastry shops", 4.4, "Tirana", "페툴라·페이스트리.", "Petulla and pastries.", 2100),
            ("Neighbourhood bread shops", 4.3, "Tirana", "동네 빵집.", "Neighbourhood bakeries.", 1600),
            ("Modern bakery peers", 4.4, "Tirana", "모던 베이커리.", "Modern bakery.", 900),
        ],
        "cafe": [
            ("Specialty coffee Tirana", 4.5, "Tirana", "스페셜티 커피.", "Specialty coffee.", 1800),
            ("Blloku café terraces", 4.4, "Tirana", "블로쿠 테라스.", "Blloku terrace cafés.", 2800),
            ("Square espresso bars", 4.3, "Tirana", "광장 에스프레소.", "Square espresso.", 2100),
            ("Brunch Tirana peers", 4.4, "Tirana", "브런치 카페.", "Brunch café.", 1400),
        ],
        "korean": [
            ("Korean Kitchen Tirana", 4.3, "Tirana", "캐주얼 한식.", "Casual Korean.", 420),
            ("Bibimbap Tirana", 4.2, "Tirana", "비빔밥.", "Bibimbap.", 320),
            ("Korean BBQ Tirana", 4.2, "Tirana", "고기구이.", "Korean BBQ.", 360),
            ("Kimchi Tirana", 4.2, "Tirana", "김치·반찬.", "Kimchi-focused.", 260),
        ],
    },
    "valletta": {
        "fine_dining": [
            ("Under Grain / peers", 4.6, "Valletta", "몰타 시즌 파인.", "Seasonal Maltese fine dining.", 900),
            ("Harbour view tasting peers", 4.5, "Valletta", "항구 전망 코스.", "Harbour-view tasting.", 1100),
            ("Traditional Maltese kitchen peers", 4.4, "Valletta", "전통 몰타 가정식.", "Traditional Maltese kitchen.", 1600),
            ("Wine bar dining peers", 4.4, "Valletta", "와인 바 다이닝.", "Wine-bar dining.", 1200),
            ("Hotel fine dining peers", 4.4, "Valletta", "호텔 파인.", "Hotel fine dining.", 800),
        ],
        "bakery": [
            ("Pastizzi shops", 4.6, "Valletta", "파스티치 숍.", "Pastizzi shops.", 4200),
            ("Ftira / bakery counters", 4.4, "Valletta", "프티라·빵.", "Ftira and bread.", 2100),
            ("Sweet shops Valletta", 4.4, "Valletta", "스위트 숍.", "Sweet shops.", 1600),
            ("Modern bakery peers", 4.4, "Valletta", "모던 베이커리.", "Modern bakery.", 900),
        ],
        "cafe": [
            ("Specialty coffee Valletta", 4.5, "Valletta", "스페셜티 커피.", "Specialty coffee.", 1400),
            ("Republic Street cafés", 4.3, "Valletta", "대로 카페.", "Main-street cafés.", 2400),
            ("Harbour terrace cafés", 4.4, "Valletta", "항구 테라스.", "Harbour terrace cafés.", 1800),
            ("Brunch Valletta peers", 4.4, "Valletta", "브런치 카페.", "Brunch café.", 1100),
        ],
        "korean": [
            ("Korean Kitchen Valletta", 4.3, "Valletta", "캐주얼 한식.", "Casual Korean.", 360),
            ("Bibimbap Valletta", 4.2, "Valletta", "비빔밥.", "Bibimbap.", 280),
            ("Korean BBQ Valletta", 4.2, "Valletta", "고기구이.", "Korean BBQ.", 300),
            ("Kimchi Valletta", 4.2, "Valletta", "김치·반찬.", "Kimchi-focused.", 220),
        ],
    },
    "tallinn": {
        "fine_dining": [
            ("NOA / modern Estonian peers", 4.6, "Tallinn", "모던 에스토니아 파인.", "Modern Estonian fine dining.", 1200),
            ("Old Town tasting peers", 4.5, "Tallinn", "구시가 테이스팅.", "Old-town tasting.", 1600),
            ("Michelin / chef peers", 4.6, "Tallinn", "셰프 파인 다이닝.", "Chef fine dining.", 900),
            ("Harbour bistro peers", 4.4, "Tallinn", "항구 비스트로.", "Harbour bistro.", 1400),
            ("Farm-to-table peers", 4.5, "Tallinn", "팜투테이블.", "Farm-to-table.", 1100),
        ],
        "bakery": [
            ("Karakter / bakery peers", 4.5, "Tallinn", "모던 베이커리.", "Modern bakery.", 1600),
            ("Kringel & pastry shops", 4.4, "Tallinn", "크링겔·페이스트리.", "Kringel and pastries.", 2100),
            ("Old Town bakery counters", 4.3, "Tallinn", "구시가 빵 카운터.", "Old-town bakery counters.", 1800),
            ("Rye bread houses", 4.4, "Tallinn", "호밀빵집.", "Rye bread houses.", 1400),
        ],
        "cafe": [
            ("Specialty coffee Tallinn", 4.5, "Tallinn", "스페셜티 커피.", "Specialty coffee.", 2100),
            ("Telliskivi cafés", 4.5, "Tallinn", "텔리스키비 카페.", "Telliskivi cafés.", 2400),
            ("Old Town café terraces", 4.3, "Tallinn", "구시가 테라스.", "Old-town terraces.", 3200),
            ("Brunch Tallinn peers", 4.4, "Tallinn", "브런치 카페.", "Brunch café.", 1600),
        ],
        "korean": [
            ("Korean Kitchen Tallinn", 4.4, "Tallinn", "캐주얼 한식.", "Casual Korean.", 700),
            ("Bibimbap Tallinn", 4.3, "Tallinn", "비빔밥.", "Bibimbap.", 520),
            ("Korean BBQ Tallinn", 4.3, "Tallinn", "고기구이.", "Korean BBQ.", 600),
            ("Kimchi Tallinn", 4.2, "Tallinn", "김치·반찬.", "Kimchi-focused.", 400),
        ],
    },
    "riga": {
        "fine_dining": [
            ("Modern Latvian tasting peers", 4.6, "Riga", "모던 라트비아 파인.", "Modern Latvian fine dining.", 1100),
            ("Old Town chef peers", 4.5, "Riga", "구시가 셰프 다이닝.", "Old-town chef dining.", 1600),
            ("Central Market tasting peers", 4.4, "Riga", "시장 식재료 다이닝.", "Market-led dining.", 1400),
            ("Art Nouveau district bistros", 4.4, "Riga", "아르누보 비스트로.", "Art Nouveau bistros.", 1200),
            ("Hotel fine dining peers", 4.4, "Riga", "호텔 파인.", "Hotel fine dining.", 900),
        ],
        "bakery": [
            ("Rupjmaize / rye bakeries", 4.5, "Riga", "호밀빵집.", "Rye bakeries.", 2100),
            ("Pastry shops Centrs", 4.4, "Riga", "센터 페이스트리.", "Centre pastry shops.", 1800),
            ("Market bakery stalls", 4.4, "Riga", "시장 빵 가판.", "Market bread stalls.", 2400),
            ("Modern sourdough peers", 4.5, "Riga", "사워도우.", "Sourdough.", 1100),
        ],
        "cafe": [
            ("Specialty coffee Riga", 4.5, "Riga", "스페셜티 커피.", "Specialty coffee.", 2100),
            ("Old Town cafés", 4.3, "Riga", "구시가 카페.", "Old-town cafés.", 2800),
            ("Kalnciema / neighbourhood cafés", 4.4, "Riga", "동네 카페.", "Neighbourhood cafés.", 1600),
            ("Brunch Riga peers", 4.4, "Riga", "브런치 카페.", "Brunch café.", 1400),
        ],
        "korean": [
            ("Korean Kitchen Riga", 4.4, "Riga", "캐주얼 한식.", "Casual Korean.", 640),
            ("Bibimbap Riga", 4.3, "Riga", "비빔밥.", "Bibimbap.", 480),
            ("Korean BBQ Riga", 4.3, "Riga", "고기구이.", "Korean BBQ.", 560),
            ("Kimchi Riga", 4.2, "Riga", "김치·반찬.", "Kimchi-focused.", 360),
        ],
    },
    "vilnius": {
        "fine_dining": [
            ("Nineteen18 / peers", 4.7, "Vilnius", "미슐랭 모던 리투아니아.", "Michelin modern Lithuanian.", 900),
            ("Džiaugsmas / chef peers", 4.6, "Vilnius", "셰프 시즌 다이닝.", "Chef seasonal dining.", 1100),
            ("Old Town tasting peers", 4.5, "Vilnius", "구시가 테이스팅.", "Old-town tasting.", 1600),
            ("Užupis bistro peers", 4.4, "Vilnius", "우주피스 비스트로.", "Užupis bistro.", 1400),
            ("Hotel fine dining peers", 4.4, "Vilnius", "호텔 파인.", "Hotel fine dining.", 800),
        ],
        "bakery": [
            ("Keptuve / bakery peers", 4.5, "Vilnius", "모던 베이커리.", "Modern bakery.", 1600),
            ("Šakotis & pastry shops", 4.4, "Vilnius", "샤코티스·페이스트리.", "Šakotis and pastries.", 1800),
            ("Old Town bread counters", 4.3, "Vilnius", "구시가 빵 카운터.", "Old-town bread counters.", 1400),
            ("Rye & sourdough peers", 4.5, "Vilnius", "호밀·사워도우.", "Rye and sourdough.", 1100),
        ],
        "cafe": [
            ("Specialty coffee Vilnius", 4.5, "Vilnius", "스페셜티 커피.", "Specialty coffee.", 2100),
            ("Old Town café courtyards", 4.4, "Vilnius", "구시가 중정 카페.", "Old-town courtyard cafés.", 2400),
            ("Užupis cafés", 4.4, "Vilnius", "우주피스 카페.", "Užupis cafés.", 1600),
            ("Brunch Vilnius peers", 4.4, "Vilnius", "브런치 카페.", "Brunch café.", 1400),
        ],
        "korean": [
            ("Korean Kitchen Vilnius", 4.4, "Vilnius", "캐주얼 한식.", "Casual Korean.", 700),
            ("Bibimbap Vilnius", 4.3, "Vilnius", "비빔밥.", "Bibimbap.", 520),
            ("Korean BBQ Vilnius", 4.3, "Vilnius", "고기구이.", "Korean BBQ.", 600),
            ("Kimchi Vilnius", 4.2, "Vilnius", "김치·반찬.", "Kimchi-focused.", 400),
        ],
    },
}


def write_cities_append() -> None:
    path = DATA / "cities.ts"
    text = path.read_text(encoding="utf-8")
    if 'id: "tbilisi"' in text:
        print("cities already contain tbilisi — skip append")
        return
    marker = "\n]\n\nexport function getCity"
    if marker not in text:
        raise SystemExit("cities.ts marker not found")
    blocks = ",\n".join(city_block(c) for c in CITIES)
    text = text.replace(marker, ",\n" + blocks + marker, 1)
    if "},," in text:
        text = text.replace("},,", "},")
        print("fixed },, in cities.ts")
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
        "tbilisi": [
            ("Rustaveli / Galleria fashion", "Tbilisi", "[패션] 루스타벨리·갤러리아.", "[Fashion] Rustaveli and Galleria.", 4.4, 4200),
            ("East Point / mall fashion", "Tbilisi", "[패션] 몰 패션.", "[Fashion] Mall fashion.", 4.3, 3600),
            ("Old Town boutiques", "Tbilisi", "[패션] 구시가 부티크.", "[Fashion] Old-town boutiques.", 4.3, 1800),
        ],
        "skopje": [
            ("Makedonija / City Mall fashion", "Skopje", "[패션] 시티몰·대로 패션.", "[Fashion] City Mall and avenue fashion.", 4.3, 2800),
            ("Ramstore / mall fashion", "Skopje", "[패션] 몰 패션.", "[Fashion] Mall fashion.", 4.2, 2100),
            ("Old Bazaar textiles & boutiques", "Skopje", "[패션] 시장·부티크.", "[Fashion] Bazaar and boutiques.", 4.3, 2400),
        ],
        "nicosia": [
            ("Makariou / Ledra fashion", "Nicosia", "[패션] 마카리우·레드라.", "[Fashion] Makariou and Ledra.", 4.4, 3200),
            ("Mall of Cyprus / Nicosia Mall", "Nicosia", "[패션] 니코시아 몰.", "[Fashion] Nicosia malls.", 4.3, 4800),
            ("Old City boutiques", "Nicosia", "[패션] 구시가 부티크.", "[Fashion] Old-city boutiques.", 4.3, 1600),
        ],
        "tirana": [
            ("Blloku / Toptani fashion", "Tirana", "[패션] 블로쿠·톱타니.", "[Fashion] Blloku and Toptani.", 4.4, 3600),
            ("Tirana Rock / mall fashion", "Tirana", "[패션] 몰 패션.", "[Fashion] Mall fashion.", 4.3, 2800),
            ("City centre boutiques", "Tirana", "[패션] 도심 부티크.", "[Fashion] Centre boutiques.", 4.3, 1800),
        ],
        "valletta": [
            ("Republic Street fashion", "Valletta", "[패션] 공화국 거리 패션.", "[Fashion] Republic Street fashion.", 4.4, 2800),
            ("Outlet / day-trip fashion", "Malta", "[아울렛] 몰타 권역 아울렛.", "[Outlet] Malta-area outlet.", 4.2, 2100),
            ("Valletta boutiques", "Valletta", "[패션] 발레타 부티크.", "[Fashion] Valletta boutiques.", 4.3, 1400),
        ],
        "tallinn": [
            ("Viru / Rotermann fashion", "Tallinn", "[패션] 비루·로테르만.", "[Fashion] Viru and Rotermann.", 4.4, 4200),
            ("Ülemiste / mall fashion", "Tallinn", "[패션] 윌레미스테 몰.", "[Fashion] Ülemiste mall.", 4.3, 5400),
            ("Old Town boutiques", "Tallinn", "[패션] 구시가 부티크.", "[Fashion] Old-town boutiques.", 4.3, 2100),
        ],
        "riga": [
            ("Galleria Riga / Valņu fashion", "Riga", "[패션] 갤러리아·발누.", "[Fashion] Galleria and Valņu.", 4.4, 4800),
            ("Akropole / mall fashion", "Riga", "[패션] 몰 패션.", "[Fashion] Mall fashion.", 4.3, 4200),
            ("Old Town boutiques", "Riga", "[패션] 구시가 부티크.", "[Fashion] Old-town boutiques.", 4.3, 2400),
        ],
        "vilnius": [
            ("Gedimino / CUP fashion", "Vilnius", "[패션] 게디미노·CUP.", "[Fashion] Gedimino and CUP.", 4.4, 4200),
            ("Akropolis / mall fashion", "Vilnius", "[패션] 아크로폴리스 몰.", "[Fashion] Akropolis mall.", 4.3, 5400),
            ("Old Town boutiques", "Vilnius", "[패션] 구시가 부티크.", "[Fashion] Old-town boutiques.", 4.3, 2100),
        ],
    }
    special_g = {
        "tbilisi": [
            ("Dezertirebi / farmers markets", "Tbilisi", "[식료품] 시장·파머스.", "[Grocery] Markets and farmers.", 4.5, 3600),
            ("Carrefour / Goodwill hypermarkets", "Tbilisi", "[대형마트] 까르푸·굿윌.", "[Hypermarket] Carrefour and Goodwill.", 4.1, 4800),
            ("Spar / OriNabiji supermarket", "Tbilisi", "[슈퍼] 스파·오리나비지.", "[Supermarket] Spar and OriNabiji.", 4.0, 3200),
            ("Specialty / Caucasian groceries", "Tbilisi", "[식료품점] 코카서스 특산.", "[Grocery] Caucasian specialties.", 4.3, 1400),
        ],
        "skopje": [
            ("Green market / Bit Pazar", "Skopje", "[식료품] 비트 파자르 시장.", "[Grocery] Bit Pazar market.", 4.5, 3200),
            ("Tinex / Ramstore hypermarkets", "Skopje", "[대형마트] 티넥스·램스토어.", "[Hypermarket] Tinex and Ramstore.", 4.1, 3600),
            ("Local supermarket Centar", "Skopje", "[슈퍼] 도심 슈퍼.", "[Supermarket] Central supermarket.", 4.0, 2100),
            ("Specialty / Balkan groceries", "Skopje", "[식료품점] 발칸 특산.", "[Grocery] Balkan specialties.", 4.3, 1100),
        ],
        "nicosia": [
            ("Municipal / farmers markets", "Nicosia", "[식료품] 시영·파머스 마켓.", "[Grocery] Municipal and farmers markets.", 4.5, 2400),
            ("Alphamega / Lidl hypermarkets", "Nicosia", "[대형마트] 알파메가·리들.", "[Hypermarket] Alphamega and Lidl.", 4.1, 4200),
            ("Local supermarket", "Nicosia", "[슈퍼] 로컬 슈퍼.", "[Supermarket] Local supermarket.", 4.0, 2100),
            ("Specialty / Mediterranean groceries", "Nicosia", "[식료품점] 지중해 특산.", "[Grocery] Mediterranean specialties.", 4.3, 1200),
        ],
        "tirana": [
            ("Pazari i Ri / food markets", "Tirana", "[식료품] 신시장.", "[Grocery] New Bazaar food market.", 4.5, 3600),
            ("Big Market / Conad hypermarkets", "Tirana", "[대형마트] 빅마켓·코나드.", "[Hypermarket] Big Market and Conad.", 4.1, 3200),
            ("Local supermarket", "Tirana", "[슈퍼] 로컬 슈퍼.", "[Supermarket] Local supermarket.", 4.0, 2100),
            ("Specialty / Balkan groceries", "Tirana", "[식료품점] 발칸 특산.", "[Grocery] Balkan specialties.", 4.3, 1100),
        ],
        "valletta": [
            ("Is-Suq Tal-Belt / food market", "Valletta", "[식료품] 수도 시장.", "[Grocery] City market.", 4.5, 2800),
            ("Pama / Lidl hypermarkets", "Malta", "[대형마트] 파마·리들.", "[Hypermarket] Pama and Lidl.", 4.1, 3600),
            ("Local supermarket Valletta", "Valletta", "[슈퍼] 로컬 슈퍼.", "[Supermarket] Local supermarket.", 4.0, 1400),
            ("Specialty / Maltese groceries", "Valletta", "[식료품점] 몰타 특산.", "[Grocery] Maltese specialties.", 4.3, 900),
        ],
        "tallinn": [
            ("Baltic Station Market", "Tallinn", "[식료품] 발트역 시장.", "[Grocery] Baltic Station Market.", 4.5, 4200),
            ("Prisma / Rimi hypermarkets", "Tallinn", "[대형마트] 프리즈마·리미.", "[Hypermarket] Prisma and Rimi.", 4.1, 5400),
            ("Selver / Coop supermarket", "Tallinn", "[슈퍼] 셀베르·쿱.", "[Supermarket] Selver and Coop.", 4.0, 3600),
            ("Specialty / Nordic groceries", "Tallinn", "[식료품점] 노르딕 특산.", "[Grocery] Nordic specialties.", 4.3, 1400),
        ],
        "riga": [
            ("Central Market produce", "Riga", "[식료품] 중앙시장.", "[Grocery] Central Market.", 4.6, 6400),
            ("Rimi / Maxima hypermarkets", "Riga", "[대형마트] 리미·맥시마.", "[Hypermarket] Rimi and Maxima.", 4.1, 5400),
            ("Local supermarket Centrs", "Riga", "[슈퍼] 센터 슈퍼.", "[Supermarket] Centre supermarket.", 4.0, 3200),
            ("Specialty / Baltic groceries", "Riga", "[식료품점] 발트 특산.", "[Grocery] Baltic specialties.", 4.3, 1400),
        ],
        "vilnius": [
            ("Halės / farmers markets", "Vilnius", "[식료품] 할레스·파머스.", "[Grocery] Halės and farmers markets.", 4.5, 3600),
            ("Maxima / Rimi hypermarkets", "Vilnius", "[대형마트] 맥시마·리미.", "[Hypermarket] Maxima and Rimi.", 4.1, 5400),
            ("Iki / Norfa supermarket", "Vilnius", "[슈퍼] 이키·노르파.", "[Supermarket] Iki and Norfa.", 4.0, 3600),
            ("Specialty / Baltic groceries", "Vilnius", "[식료품점] 발트 특산.", "[Grocery] Baltic specialties.", 4.3, 1400),
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
        "ge": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#FFFFFF"/>
  <rect x="15.5" y="0" width="6" height="28" fill="#FF0000"/>
  <rect x="0" y="11" width="37" height="6" fill="#FF0000"/>
  <path d="M6 4 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z" fill="#FF0000"/>
  <path d="M29 4 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z" fill="#FF0000"/>
  <path d="M6 18 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z" fill="#FF0000"/>
  <path d="M29 18 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z" fill="#FF0000"/>
</svg>
""",
        "mk": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#D20000"/>
  <circle cx="18.5" cy="14" r="5" fill="#FFE600"/>
  <polygon points="18.5,14 0,0 8,0" fill="#FFE600"/>
  <polygon points="18.5,14 29,0 37,0" fill="#FFE600"/>
  <polygon points="18.5,14 37,8 37,18" fill="#FFE600"/>
  <polygon points="18.5,14 29,28 37,28" fill="#FFE600"/>
  <polygon points="18.5,14 8,28 0,28" fill="#FFE600"/>
  <polygon points="18.5,14 0,18 0,8" fill="#FFE600"/>
  <circle cx="18.5" cy="14" r="4" fill="#D20000"/>
  <circle cx="18.5" cy="14" r="3.2" fill="#FFE600"/>
</svg>
""",
        "cy": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#FFFFFF"/>
  <ellipse cx="18.5" cy="12" rx="7" ry="4.5" fill="#D4762C"/>
  <path d="M12 18 q6.5 4 13 0" fill="none" stroke="#4C8C2B" stroke-width="1.8"/>
  <circle cx="15" cy="19.5" r="1.2" fill="#4C8C2B"/>
  <circle cx="22" cy="19.5" r="1.2" fill="#4C8C2B"/>
</svg>
""",
        "al": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#E41E20"/>
  <path d="M18.5 6 l2 4 4 .5-3 3 1 4-4-2-4 2 1-4-3-3 4-.5 z" fill="#000000"/>
  <path d="M14 11 h9 M13 14 h11 M15 17 h7" stroke="#000000" stroke-width="1.2"/>
</svg>
""",
        "mt": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="18.5" height="28" fill="#FFFFFF"/>
  <rect x="18.5" width="18.5" height="28" fill="#CF142B"/>
  <rect x="3" y="3" width="5" height="5" fill="none" stroke="#C8A200" stroke-width="1.2"/>
  <circle cx="5.5" cy="5.5" r="1.2" fill="#C8A200"/>
</svg>
""",
        "ee": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#FFFFFF"/>
  <rect width="37" height="18.667" fill="#000000"/>
  <rect width="37" height="9.333" fill="#0072CE"/>
</svg>
""",
        "lv": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#9E1B34"/>
  <rect y="10" width="37" height="8" fill="#FFFFFF"/>
</svg>
""",
        "lt": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#C1272D"/>
  <rect width="37" height="18.667" fill="#006A44"/>
  <rect width="37" height="9.333" fill="#FDB913"/>
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
    if "placesGEExtra" in text:
        print("places.ts already patched")
        return
    text = text.replace(
        "import { placesRSExtra } from './places-rs-extra'\n",
        "import { placesRSExtra } from './places-rs-extra'\n"
        "import { placesGEExtra } from './places-ge-extra'\n"
        "import { placesMKExtra } from './places-mk-extra'\n"
        "import { placesCYExtra } from './places-cy-extra'\n"
        "import { placesALExtra } from './places-al-extra'\n"
        "import { placesMTExtra } from './places-mt-extra'\n"
        "import { placesEEExtra } from './places-ee-extra'\n"
        "import { placesLVExtra } from './places-lv-extra'\n"
        "import { placesLTExtra } from './places-lt-extra'\n",
    )
    text = text.replace(
        "  ...placesRSExtra,\n  ...placesFashion,",
        "  ...placesRSExtra,\n"
        "  ...placesGEExtra,\n"
        "  ...placesMKExtra,\n"
        "  ...placesCYExtra,\n"
        "  ...placesALExtra,\n"
        "  ...placesMTExtra,\n"
        "  ...placesEEExtra,\n"
        "  ...placesLVExtra,\n"
        "  ...placesLTExtra,\n"
        "  ...placesFashion,",
    )
    path.write_text(text, encoding="utf-8")
    print("patched places.ts")


COUNTRY_BLOCKS = """  {
    id: 'ge',
    name: { ko: '조지아', en: 'Georgia' },
    nativeName: 'საქართველო / Sakartvelo',
    flagImage: '/flags/ge.svg',
    landmarkImage: '/landmarks/landmark-ge.jpg',
    flag: '🇬🇪',
    blurb: {
      ko: '코카서스와 와인의 나라. 트빌리시·카즈베기·카헤티가 여행의 중심입니다.',
      en: 'Caucasus and wine country—Tbilisi, Kazbegi, and Kakheti lead.',
    },
    facts: {
      population: { ko: '약 370만 명', en: 'Approx. 3.7 million' },
      area: { ko: '69,700 km²', en: '69,700 km²' },
      capital: { ko: '트빌리시 (Tbilisi)', en: 'Tbilisi' },
      currency: { ko: '라리 (GEL, ₾)', en: 'Lari (GEL, ₾)' },
    },
    currencyCode: 'GEL',
    currencySymbol: '₾',
    schengen: false,
    flagColors: {
      primary: '#FF0000',
      secondary: '#FFFFFF',
      accent: '#FF0000',
      background: '#FFF0F0',
      text: '#3A0A0A',
    },
    cityIds: ['tbilisi', 'batumi', 'kutaisi', 'stepantsminda', 'sighnaghi'],
  },
  {
    id: 'mk',
    name: { ko: '북마케도니아', en: 'North Macedonia' },
    nativeName: 'Северна Македонија',
    flagImage: '/flags/mk.svg',
    landmarkImage: '/landmarks/landmark-mk.jpg',
    flag: '🇲🇰',
    blurb: {
      ko: '발칸의 호수와 산. 스코페·오흐리드가 여행의 얼굴입니다.',
      en: 'Balkan lakes and mountains—Skopje and Ohrid lead.',
    },
    facts: {
      population: { ko: '약 180만 명', en: 'Approx. 1.8 million' },
      area: { ko: '25,713 km²', en: '25,713 km²' },
      capital: { ko: '스코페 (Skopje)', en: 'Skopje' },
      currency: { ko: '데나르 (MKD, den)', en: 'Denar (MKD, den)' },
    },
    currencyCode: 'MKD',
    currencySymbol: 'den',
    schengen: false,
    flagColors: {
      primary: '#D20000',
      secondary: '#FFE600',
      accent: '#FFFFFF',
      background: '#FCE8E8',
      text: '#3A0A0A',
    },
    cityIds: ['skopje', 'ohrid', 'bitola', 'tetovo'],
  },
  {
    id: 'cy',
    name: { ko: '키프로스', en: 'Cyprus' },
    nativeName: 'Κύπρος / Kıbrıs',
    flagImage: '/flags/cy.svg',
    landmarkImage: '/landmarks/landmark-cy.jpg',
    flag: '🇨🇾',
    blurb: {
      ko: '지중해의 섬나라. 니코시아·파포스·아야나파가 대표적입니다.',
      en: 'Mediterranean island—Nicosia, Paphos, and Ayia Napa.',
    },
    facts: {
      population: { ko: '약 120만 명', en: 'Approx. 1.2 million' },
      area: { ko: '9,251 km²', en: '9,251 km²' },
      capital: { ko: '니코시아 (Nicosia)', en: 'Nicosia' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: false,
    flagColors: {
      primary: '#D4762C',
      secondary: '#4C8C2B',
      accent: '#FFFFFF',
      background: '#FFF8F0',
      text: '#2A1A0A',
    },
    cityIds: ['nicosia', 'limassol', 'paphos', 'ayia-napa'],
  },
  {
    id: 'al',
    name: { ko: '알바니아', en: 'Albania' },
    nativeName: 'Shqipëria',
    flagImage: '/flags/al.svg',
    landmarkImage: '/landmarks/landmark-al.jpg',
    flag: '🇦🇱',
    blurb: {
      ko: '이오니아와 돌도시의 나라. 티라나·베라트·사란다가 중심입니다.',
      en: 'Ionian coast and stone cities—Tirana, Berat, and Sarandë.',
    },
    facts: {
      population: { ko: '약 280만 명', en: 'Approx. 2.8 million' },
      area: { ko: '28,748 km²', en: '28,748 km²' },
      capital: { ko: '티라나 (Tirana)', en: 'Tirana' },
      currency: { ko: '렉 (ALL, L)', en: 'Lek (ALL, L)' },
    },
    currencyCode: 'ALL',
    currencySymbol: 'L',
    schengen: false,
    flagColors: {
      primary: '#E41E20',
      secondary: '#000000',
      accent: '#FFFFFF',
      background: '#FCE8EA',
      text: '#2A0A10',
    },
    cityIds: ['tirana', 'berat', 'gjirokaster', 'sarande'],
  },
  {
    id: 'mt',
    name: { ko: '몰타', en: 'Malta' },
    nativeName: 'Malta',
    flagImage: '/flags/mt.svg',
    landmarkImage: '/landmarks/landmark-mt.jpg',
    flag: '🇲🇹',
    blurb: {
      ko: '지중해의 요새 섬. 발레타·므디나·고조가 여행의 중심입니다.',
      en: 'Fortified Mediterranean islands—Valletta, Mdina, and Gozo.',
    },
    facts: {
      population: { ko: '약 52만 명', en: 'Approx. 520,000' },
      area: { ko: '316 km²', en: '316 km²' },
      capital: { ko: '발레타 (Valletta)', en: 'Valletta' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#CF142B',
      secondary: '#FFFFFF',
      accent: '#C8A200',
      background: '#FCE8EA',
      text: '#3A0A10',
    },
    cityIds: ['valletta', 'mdina', 'gozo'],
  },
  {
    id: 'ee',
    name: { ko: '에스토니아', en: 'Estonia' },
    nativeName: 'Eesti',
    flagImage: '/flags/ee.svg',
    landmarkImage: '/landmarks/landmark-ee.jpg',
    flag: '🇪🇪',
    blurb: {
      ko: '발트해의 디지털 국가. 탈린 구시가와 패르누 해변이 매력입니다.',
      en: 'Baltic digital nation—Tallinn’s old town and Pärnu beaches.',
    },
    facts: {
      population: { ko: '약 130만 명', en: 'Approx. 1.3 million' },
      area: { ko: '45,227 km²', en: '45,227 km²' },
      capital: { ko: '탈린 (Tallinn)', en: 'Tallinn' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#0072CE',
      secondary: '#000000',
      accent: '#FFFFFF',
      background: '#E8F2FA',
      text: '#0A1A30',
    },
    cityIds: ['tallinn', 'tartu', 'parnu'],
  },
  {
    id: 'lv',
    name: { ko: '라트비아', en: 'Latvia' },
    nativeName: 'Latvija',
    flagImage: '/flags/lv.svg',
    landmarkImage: '/landmarks/landmark-lv.jpg',
    flag: '🇱🇻',
    blurb: {
      ko: '아르누보와 해변의 나라. 리가·유르말라·시굴다가 대표적입니다.',
      en: 'Art Nouveau and beaches—Riga, Jūrmala, and Sigulda.',
    },
    facts: {
      population: { ko: '약 190만 명', en: 'Approx. 1.9 million' },
      area: { ko: '64,589 km²', en: '64,589 km²' },
      capital: { ko: '리가 (Riga)', en: 'Riga' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#9E1B34',
      secondary: '#FFFFFF',
      accent: '#9E1B34',
      background: '#FCE8EC',
      text: '#3A0A14',
    },
    cityIds: ['riga', 'jurmala', 'sigulda'],
  },
  {
    id: 'lt',
    name: { ko: '리투아니아', en: 'Lithuania' },
    nativeName: 'Lietuva',
    flagImage: '/flags/lt.svg',
    landmarkImage: '/landmarks/landmark-lt.jpg',
    flag: '🇱🇹',
    blurb: {
      ko: '바로크와 사주의 나라. 빌뉴스·카우나스·클라이페다가 중심입니다.',
      en: 'Baroque and the Curonian Spit—Vilnius, Kaunas, and Klaipėda.',
    },
    facts: {
      population: { ko: '약 280만 명', en: 'Approx. 2.8 million' },
      area: { ko: '65,300 km²', en: '65,300 km²' },
      capital: { ko: '빌뉴스 (Vilnius)', en: 'Vilnius' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#FDB913',
      secondary: '#006A44',
      accent: '#C1272D',
      background: '#FFF8E8',
      text: '#1A2A14',
    },
    cityIds: ['vilnius', 'kaunas', 'klaipeda'],
  },
]"""


def patch_countries() -> None:
    path = DATA / "countries.ts"
    text = path.read_text(encoding="utf-8")
    if "id: 'ge'" in text:
        print("countries already has ge")
        return
    marker = "\n]\n\nexport function getCountry"
    if marker not in text:
        raise SystemExit("countries.ts marker not found")
    text = text.replace(marker, "\n" + COUNTRY_BLOCKS + "\n\nexport function getCountry", 1)
    if "},," in text:
        text = text.replace("},,", "},")
        print("fixed },, double commas")
    path.write_text(text, encoding="utf-8")
    print("appended countries ge/mk/cy/al/mt/ee/lv/lt")


def patch_phrases() -> None:
    path = DATA / "phrases.ts"
    text = path.read_text(encoding="utf-8")
    if "\n  ge: {" in text:
        print("phrases already has ge")
        return
    block = """
  ge: {
    languageLabel: { ko: '조지아어', en: 'Georgian' },
    speechLangs: ['ka-GE', 'ka'],
    lines: lines({
      morning: 'დილა მშვიდობისა',
      hello: 'გამარჯობა',
      excuse: 'ბოდიში',
      thanks: 'გმადლობთ',
      howMuch: 'რა ღირს?',
    }),
  },
  mk: {
    languageLabel: { ko: '마케도니아어', en: 'Macedonian' },
    speechLangs: ['mk-MK', 'mk'],
    lines: lines({
      morning: 'Добро утро',
      hello: 'Здраво',
      excuse: 'Извинете',
      thanks: 'Благодарам',
      howMuch: 'Колку чини?',
    }),
  },
  cy: {
    languageLabel: { ko: '그리스어 (키프로스)', en: 'Greek (Cyprus)' },
    speechLangs: ['el-CY', 'el-GR', 'el'],
    lines: lines({
      morning: 'Καλημέρα',
      hello: 'Γεια σας',
      excuse: 'Συγνώμη',
      thanks: 'Ευχαριστώ',
      howMuch: 'Πόσο κοστίζει;',
    }),
  },
  al: {
    languageLabel: { ko: '알바니아어', en: 'Albanian' },
    speechLangs: ['sq-AL', 'sq'],
    lines: lines({
      morning: 'Mirëmëngjes',
      hello: 'Tungjatjeta',
      excuse: 'Më falni',
      thanks: 'Faleminderit',
      howMuch: 'Sa kushton?',
    }),
  },
  mt: {
    languageLabel: { ko: '몰타어', en: 'Maltese' },
    speechLangs: ['mt-MT', 'mt', 'en-MT', 'en-GB'],
    lines: lines({
      morning: 'Bonġu',
      hello: 'Hello',
      excuse: 'Skużani',
      thanks: 'Grazzi',
      howMuch: 'Kemm jiswa?',
    }),
  },
  ee: {
    languageLabel: { ko: '에스토니아어', en: 'Estonian' },
    speechLangs: ['et-EE', 'et'],
    lines: lines({
      morning: 'Tere hommikust',
      hello: 'Tere',
      excuse: 'Vabandust',
      thanks: 'Aitäh',
      howMuch: 'Kui palju maksab?',
    }),
  },
  lv: {
    languageLabel: { ko: '라트비아어', en: 'Latvian' },
    speechLangs: ['lv-LV', 'lv'],
    lines: lines({
      morning: 'Labrīt',
      hello: 'Sveiki',
      excuse: 'Atvainojiet',
      thanks: 'Paldies',
      howMuch: 'Cik tas maksā?',
    }),
  },
  lt: {
    languageLabel: { ko: '리투아니아어', en: 'Lithuanian' },
    speechLangs: ['lt-LT', 'lt'],
    lines: lines({
      morning: 'Labas rytas',
      hello: 'Labas',
      excuse: 'Atsiprašau',
      thanks: 'Ačiū',
      howMuch: 'Kiek kainuoja?',
    }),
  },
"""
    # Insert before closing of countryPhrases object (after rs block)
    needle = "  rs: {\n    languageLabel: { ko: '세르비아어', en: 'Serbian' },\n    speechLangs: ['sr-RS', 'sr'],\n    lines: lines({\n      morning: 'Dobro jutro',\n      hello: 'Zdravo',\n      excuse: 'Izvinite',\n      thanks: 'Hvala',\n      howMuch: 'Koliko košta?',\n    }),\n  },\n}"
    if needle not in text:
        raise SystemExit("phrases.ts rs block marker not found")
    text = text.replace(
        needle,
        needle[:-1] + block + "}",
        1,
    )
    path.write_text(text, encoding="utf-8")
    print("patched phrases.ts")


def patch_phrase_audio() -> None:
    path = ROOT / "scripts" / "generate_phrase_audio.py"
    text = path.read_text(encoding="utf-8")
    if '"ge": "ka-GE-EkaNeural"' in text:
        print("generate_phrase_audio already has ge")
        return

    voice_insert = """    "ge": "ka-GE-EkaNeural",
    "mk": "mk-MK-MarijaNeural",
    "cy": "el-GR-AthinaNeural",
    "al": "sq-AL-AnilaNeural",
    "mt": "mt-MT-GraceNeural",
    "ee": "et-EE-AnuNeural",
    "lv": "lv-LV-EveritaNeural",
    "lt": "lt-LT-OnaNeural",
"""
    text = text.replace(
        '    "rs": "sr-RS-SophieNeural",\n}\n',
        '    "rs": "sr-RS-SophieNeural",\n' + voice_insert + "}\n",
        1,
    )

    fallback_insert = """    "al": "sq-AL-IlirNeural",
    "mt": "en-GB-SoniaNeural",
"""
    text = text.replace(
        'VOICE_FALLBACKS: dict[str, str] = {\n    "ad": "es-ES-ElviraNeural",\n    "ba": "sr-RS-SophieNeural",\n}\n',
        'VOICE_FALLBACKS: dict[str, str] = {\n    "ad": "es-ES-ElviraNeural",\n    "ba": "sr-RS-SophieNeural",\n'
        + fallback_insert
        + "}\n",
        1,
    )

    phrases_insert = '''    "ge": {
        "morning": "დილა მშვიდობისა",
        "hello": "გამარჯობა",
        "excuse": "ბოდიში",
        "thanks": "გმადლობთ",
        "howMuch": "რა ღირს?",
    },
    "mk": {
        "morning": "Добро утро",
        "hello": "Здраво",
        "excuse": "Извинете",
        "thanks": "Благодарам",
        "howMuch": "Колку чини?",
    },
    "cy": {
        "morning": "Καλημέρα",
        "hello": "Γεια σας",
        "excuse": "Συγνώμη",
        "thanks": "Ευχαριστώ",
        "howMuch": "Πόσο κοστίζει;",
    },
    "al": {
        "morning": "Mirëmëngjes",
        "hello": "Tungjatjeta",
        "excuse": "Më falni",
        "thanks": "Faleminderit",
        "howMuch": "Sa kushton?",
    },
    "mt": {
        "morning": "Bonġu",
        "hello": "Hello",
        "excuse": "Skużani",
        "thanks": "Grazzi",
        "howMuch": "Kemm jiswa?",
    },
    "ee": {
        "morning": "Tere hommikust",
        "hello": "Tere",
        "excuse": "Vabandust",
        "thanks": "Aitäh",
        "howMuch": "Kui palju maksab?",
    },
    "lv": {
        "morning": "Labrīt",
        "hello": "Sveiki",
        "excuse": "Atvainojiet",
        "thanks": "Paldies",
        "howMuch": "Cik tas maksā?",
    },
    "lt": {
        "morning": "Labas rytas",
        "hello": "Labas",
        "excuse": "Atsiprašau",
        "thanks": "Ačiū",
        "howMuch": "Kiek kainuoja?",
    },
'''
    text = text.replace(
        '''    "rs": {
        "morning": "Dobro jutro",
        "hello": "Zdravo",
        "excuse": "Izvinite",
        "thanks": "Hvala",
        "howMuch": "Koliko košta?",
    },
}
''',
        '''    "rs": {
        "morning": "Dobro jutro",
        "hello": "Zdravo",
        "excuse": "Izvinite",
        "thanks": "Hvala",
        "howMuch": "Koliko košta?",
    },
'''
        + phrases_insert
        + "}\n",
        1,
    )
    path.write_text(text, encoding="utf-8")
    print("patched generate_phrase_audio.py")


def main() -> None:
    write_flags()
    patch_countries()
    write_cities_append()
    write_extras()
    patch_places_ts()
    fashion, grocery, asian = fashion_grocery_asian_rows()
    comment = "ge/mk/cy/al/mt/ee/lv/lt"
    append_category_file(DATA / "places-fashion.ts", fashion, comment)
    append_category_file(DATA / "places-grocery.ts", grocery, comment)
    append_category_file(DATA / "places-asian.ts", asian, comment)
    patch_phrases()
    patch_phrase_audio()


if __name__ == "__main__":
    main()
