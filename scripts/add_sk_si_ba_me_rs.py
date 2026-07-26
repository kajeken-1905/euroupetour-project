#!/usr/bin/env python3
"""Generate SK / SI / BA / ME / RS catalog data and flag assets."""

from __future__ import annotations

from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"
FLAGS = ROOT / "public" / "flags"

EXPORT_NAMES = {
    "sk": "placesSKExtra",
    "si": "placesSIExtra",
    "ba": "placesBAExtra",
    "me": "placesMEExtra",
    "rs": "placesRSExtra",
}

GROUPS = {
    "sk": ["bratislava", "kosice", "poprad", "banska-bystrica", "trencin"],
    "si": ["ljubljana", "bled", "piran", "maribor", "postojna"],
    "ba": ["sarajevo", "mostar", "banja-luka", "travnik"],
    "me": ["kotor", "budva", "podgorica", "herceg-novi"],
    "rs": ["belgrade", "novi-sad", "nis", "subotica"],
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
    # —— Slovakia ——
    {
        "id": "bratislava",
        "countryId": "sk",
        "ko": "브라티슬라바",
        "en": "Bratislava",
        "native": "Bratislava",
        "blurb_ko": "슬로바키아 수도. 도나우 강변 성과 구시가가 콤팩트합니다.",
        "blurb_en": "Slovak capital—Danube castle and a compact old town.",
        "highlights": [
            ("브라티슬라바 성", "Bratislava Castle", "도나우를 내려다보는 하얀 성입니다.", "White castle above the Danube.", "Bratislava Castle"),
            ("구시가·미하엘 문", "Old Town / Michael’s Gate", "중세 골목과 성문 탑입니다.", "Medieval lanes and gate tower.", "Michael's Gate Bratislava"),
            ("성 마틴 대성당", "St Martin’s Cathedral", "대관식이 열린 고딕 성당입니다.", "Gothic cathedral of coronations.", "St Martin's Cathedral Bratislava"),
            ("슬로바키아 국립극장", "Slovak National Theatre", "오페라·발레의 신고전 극장입니다.", "Neoclassical opera and ballet house.", "Slovak National Theatre"),
            ("데빈 성", "Devín Castle", "모라바·도나우 합류의 폐성입니다.", "Ruin at the Morava–Danube confluence.", "Devín Castle"),
        ],
    },
    {
        "id": "kosice",
        "countryId": "sk",
        "ko": "코시체",
        "en": "Košice",
        "native": "Košice",
        "blurb_ko": "동슬로바키아 중심. 성 엘리자베스 대성당과 긴 광장이 상징입니다.",
        "blurb_en": "East Slovakia hub—St Elizabeth Cathedral and a long square.",
        "highlights": [
            ("성 엘리자베스 대성당", "St Elizabeth Cathedral", "슬로바키아 최대 고딕 성당입니다.", "Slovakia’s largest Gothic cathedral.", "St Elizabeth Cathedral Košice"),
            ("흐라브나 광장", "Hlavné námestie", "분수·카페의 긴 메인 광장입니다.", "Long main square with fountain and cafés.", "Hlavné námestie Košice"),
            ("동슬로바키아 박물관", "East Slovak Museum", "지역 역사·미술 박물관입니다.", "Regional history and art museum.", "East Slovak Museum"),
            ("성 미하엘 예배당", "St Michael’s Chapel", "대성당 옆 고딕 예배당입니다.", "Gothic chapel beside the cathedral.", "St Michael Chapel Košice"),
            ("자크 정원·성벽", "City walls / Jakab’s Palace", "성벽 흔적과 역사 건축입니다.", "Wall remnants and historic architecture.", "Jakabov palác Košice"),
        ],
    },
    {
        "id": "poprad",
        "countryId": "sk",
        "ko": "포프라트",
        "en": "Poprad",
        "native": "Poprad",
        "blurb_ko": "고타트라 관문. 산악 열차와 온천·호수가 가깝습니다.",
        "blurb_en": "Gateway to the High Tatras—mountain trains, spas, and lakes.",
        "highlights": [
            ("고타트라 열차", "Tatra Electric Railway", "산악 마을로 가는 협궤 열차입니다.", "Mountain railway to Tatra villages.", "Tatra Electric Railway Poprad"),
            ("아쿠아시티 포프라트", "AquaCity Poprad", "온천·워터파크 리조트입니다.", "Thermal waterpark resort.", "AquaCity Poprad"),
            ("성 에게디우스 교회", "St Egidius Church", "광장의 고딕 교회입니다.", "Gothic church on the square.", "St Egidius Poprad"),
            ("타트라 국립공원", "Tatra National Park", "하이킹·케이블카의 산악 공원입니다.", "Hiking and cable-car national park.", "Tatra National Park Slovakia"),
            ("슈트르브스케 플레소", "Štrbské Pleso", "근교 고산 호수 리조트입니다.", "Nearby alpine lake resort.", "Štrbské Pleso"),
        ],
    },
    {
        "id": "banska-bystrica",
        "countryId": "sk",
        "ko": "반스카비스트리차",
        "en": "Banská Bystrica",
        "native": "Banská Bystrica",
        "blurb_ko": "중부 슬로바키아의 광산 도시. 광장과 성채 언덕이 아름답습니다.",
        "blurb_en": "Central Slovak mining town—square and castle hill.",
        "highlights": [
            ("SNP 광장", "SNP Square", "시계탑과 카페의 메인 광장입니다.", "Main square with clock tower and cafés.", "SNP Square Banská Bystrica"),
            ("바르바칸·성채", "Barbican / castle", "중세 성벽과 바르바칸입니다.", "Medieval walls and barbican.", "Barbican Banská Bystrica"),
            ("성 프란치스코 자비에르", "Parish Church", "광장의 바로크 본당입니다.", "Baroque parish church on the square.", "Parish Church Banská Bystrica"),
            ("중앙슬로바키아 박물관", "Central Slovak Museum", "광산·지역사 전시입니다.", "Mining and regional history.", "Central Slovak Museum"),
            ("우르핀 힐", "Urpin Hill", "도시 전망의 산책 언덕입니다.", "Hill walks with city views.", "Urpin Banská Bystrica"),
        ],
    },
    {
        "id": "trencin",
        "countryId": "sk",
        "ko": "트렌친",
        "en": "Trenčín",
        "native": "Trenčín",
        "blurb_ko": "바흐강 위의 성 도시. 로마 비문과 구시가가 유명합니다.",
        "blurb_en": "Castle town on the Váh—Roman inscription and old town.",
        "highlights": [
            ("트렌친 성", "Trenčín Castle", "강 위 언덕의 대형 성채입니다.", "Large hilltop castle above the river.", "Trenčín Castle"),
            ("로마 비문", "Roman inscription", "성 바위 로마군 비문입니다.", "Roman army inscription on the castle rock.", "Roman inscription Trenčín"),
            ("미로베 광장", "Mierové námestie", "분수·카페의 구시가 광장입니다.", "Old-town square with fountain and cafés.", "Mierové námestie Trenčín"),
            ("성 프란치스코 성당", "Parish church", "구시가 본당과 종탑입니다.", "Parish church and tower.", "Parish church Trenčín"),
            ("바흐 강 산책", "Váh riverwalk", "성 전망의 강변 산책로입니다.", "River promenade with castle views.", "Váh river Trenčín"),
        ],
    },
    # —— Slovenia ——
    {
        "id": "ljubljana",
        "countryId": "si",
        "ko": "류블랴나",
        "en": "Ljubljana",
        "native": "Ljubljana",
        "blurb_ko": "슬로베니아 수도. 용 다리·성·강변 카페가 아담합니다.",
        "blurb_en": "Slovenian capital—Dragon Bridge, castle, and riverside cafés.",
        "highlights": [
            ("류블랴나 성", "Ljubljana Castle", "케이블카로 오르는 언덕 성입니다.", "Hill castle reached by funicular.", "Ljubljana Castle"),
            ("용 다리", "Dragon Bridge", "용이 지키는 아르누보 다리입니다.", "Art Nouveau bridge guarded by dragons.", "Dragon Bridge Ljubljana"),
            ("프레셰렌 광장", "Prešeren Square", "분홍 성당과 중앙 광장입니다.", "Central square by the pink church.", "Prešeren Square"),
            ("류블랴니차 강변", "Ljubljanica riverside", "카페·시장이 있는 강변입니다.", "Riverside cafés and market.", "Ljubljanica"),
            ("츠베타르나 시장", "Central Market", "플레치니크 설계의 야외 시장입니다.", "Plečnik-designed open market.", "Ljubljana Central Market"),
        ],
    },
    {
        "id": "bled",
        "countryId": "si",
        "ko": "블레드",
        "en": "Bled",
        "native": "Bled",
        "blurb_ko": "알프스 호수 마을. 섬 교회와 절벽 성이 엽서 풍경입니다.",
        "blurb_en": "Alpine lake town—island church and cliff-top castle.",
        "highlights": [
            ("블레드 호수", "Lake Bled", "보트·산책의 에메랄드 호수입니다.", "Emerald lake for boats and walks.", "Lake Bled"),
            ("블레드 섬 교회", "Bled Island church", "종을 치는 호수 섬 성모 교회입니다.", "Island church with wishing bell.", "Bled Island"),
            ("블레드 성", "Bled Castle", "호수 절벽 위의 중세 성입니다.", "Medieval castle on a lakeside cliff.", "Bled Castle"),
            ("블레드 케이크", "Bled cream cake", "현지 명물 크림 케이크입니다.", "Famous local cream cake.", "Kremsnita Bled"),
            ("브인트 전망", "Ojstrica / viewpoints", "호수 전경 하이킹 포인트입니다.", "Hiking viewpoints over the lake.", "Ojstrica Bled"),
        ],
    },
    {
        "id": "piran",
        "countryId": "si",
        "ko": "피란",
        "en": "Piran",
        "native": "Piran",
        "blurb_ko": "아드리아 해안 베네치아풍 마을. 타르티니 광장이 중심입니다.",
        "blurb_en": "Venetian-style Adriatic town—Tartini Square at its heart.",
        "highlights": [
            ("타르티니 광장", "Tartini Square", "타원형 해안 메인 광장입니다.", "Oval main square by the sea.", "Tartini Square Piran"),
            ("성 게오르기 성당", "St George’s Church", "도시·바다 전망의 언덕 성당입니다.", "Hill church with town and sea views.", "St George Piran"),
            ("성벽 산책", "Town walls", "붉은 지붕 전망의 성벽입니다.", "Walls with red-roof views.", "Piran town walls"),
            ("해안 산책로", "Piran promenade", "아드리아 해안 보행로입니다.", "Adriatic waterfront walk.", "Piran promenade"),
            ("소금 창고·항구", "Harbour / salt warehouses", "역사 항구와 소금 창고입니다.", "Historic harbour and salt stores.", "Piran harbour"),
        ],
    },
    {
        "id": "maribor",
        "countryId": "si",
        "ko": "마리보르",
        "en": "Maribor",
        "native": "Maribor",
        "blurb_ko": "동슬로베니아 와인 도시. 구시가와 포흐리예가 가깝습니다.",
        "blurb_en": "East Slovenia wine city—old town and nearby Pohorje.",
        "highlights": [
            ("렌트 광장", "Main Square / Plague Column", "구시가 중앙 광장입니다.", "Central old-town square.", "Maribor Main Square"),
            ("세계 최고령 포도나무", "Old Vine", "세계 최고령 포도나무 하우스입니다.", "World’s oldest vine house.", "Old Vine Maribor"),
            ("마리보르 성", "Maribor Castle", "지역 박물관이 있는 성입니다.", "Castle with regional museum.", "Maribor Castle"),
            ("드라바 강변", "Drava riverfront", "강변 산책·카페 지구입니다.", "River walks and cafés.", "Drava Maribor"),
            ("포흐리예", "Pohorje", "근교 스키·하이킹 산입니다.", "Nearby ski and hiking mountain.", "Mariborsko Pohorje"),
        ],
    },
    {
        "id": "postojna",
        "countryId": "si",
        "ko": "포스트오이나",
        "en": "Postojna",
        "native": "Postojna",
        "blurb_ko": "세계적 카르스트 동굴 마을. 프레디아마 성도 함께 찾습니다.",
        "blurb_en": "Home of a world-famous karst cave—and Predjama Castle.",
        "highlights": [
            ("포스트오이나 동굴", "Postojna Cave", "열차로 들어가는 거대 종유석 동굴입니다.", "Huge stalactite cave entered by train.", "Postojna Cave"),
            ("프레디아마 성", "Predjama Castle", "동굴 절벽에 박힌 성입니다.", "Castle built into a cave cliff.", "Predjama Castle"),
            ("비바리움", "Vivarium Proteus", "올름(인간물고기) 전시입니다.", "Olm (proteus) exhibit.", "Vivarium Proteus Postojna"),
            ("동굴 공원 산책", "Cave Park walks", "입구 공원·산책로입니다.", "Entrance park walks.", "Postojna Cave Park"),
            ("포스트오이나 구시가", "Postojna town", "소규모 광장과 카페입니다.", "Small square and cafés.", "Postojna town"),
        ],
    },
    # —— Bosnia and Herzegovina ——
    {
        "id": "sarajevo",
        "countryId": "ba",
        "ko": "사라예보",
        "en": "Sarajevo",
        "native": "Sarajevo",
        "blurb_ko": "보스니아 수도. 바슈차르시야와 모스크·성당이 산기슭에 공존합니다.",
        "blurb_en": "Bosnian capital—Baščaršija, mosques, and mountain views.",
        "highlights": [
            ("바슈차르시야", "Baščaršija", "오스만 시장 골목 지구입니다.", "Ottoman bazaar quarter.", "Baščaršija Sarajevo"),
            ("세비르 분교 모스크", "Gazi Husrev-beg Mosque", "구시가의 대표 모스크입니다.", "Landmark mosque in the old town.", "Gazi Husrev-beg Mosque"),
            ("라트나 터널 박물관", "Tunnel of Hope", "포위 시기 보급 터널 박물관입니다.", "Siege supply-tunnel museum.", "Tunnel of Hope Sarajevo"),
            ("라틴 다리", "Latin Bridge", "역사적 석교와 강변입니다.", "Historic stone bridge and river.", "Latin Bridge Sarajevo"),
            ("브레베자 / 트레베비치", "Trebević cable car", "케이블카로 오르는 산 전망입니다.", "Cable car to mountain views.", "Trebević cable car"),
        ],
    },
    {
        "id": "mostar",
        "countryId": "ba",
        "ko": "모스타르",
        "en": "Mostar",
        "native": "Mostar",
        "blurb_ko": "헤르체고비나의 상징. 스타리모스트 돌다리가 유명합니다.",
        "blurb_en": "Herzegovina icon—the Stari Most stone bridge.",
        "highlights": [
            ("스타리 모스트", "Stari Most", "네레트바 강 위 재건된 돌다리입니다.", "Rebuilt stone bridge over the Neretva.", "Stari Most Mostar"),
            ("구시가 시장", "Old Bazaar", "다리 옆 상점 골목입니다.", "Shop lanes by the bridge.", "Mostar old bazaar"),
            ("코스키 메흐메드 파샤", "Koski Mehmet Pasha Mosque", "강·다리 전망의 모스크입니다.", "Mosque with bridge views.", "Koski Mehmet Pasha Mosque"),
            ("네레트바 강변", "Neretva riverwalk", "다리 전망 강변 산책입니다.", "Riverwalk with bridge views.", "Neretva Mostar"),
            ("블라구시 근교", "Blagaj tekke day trip", "절벽 수피 수도원 당일 여행입니다.", "Cliffside Sufi tekke nearby.", "Blagaj tekke"),
        ],
    },
    {
        "id": "banja-luka",
        "countryId": "ba",
        "ko": "바냐루카",
        "en": "Banja Luka",
        "native": "Banja Luka",
        "blurb_ko": "스르프스카의 중심 도시. 성채와 브르바스 강변이 편안합니다.",
        "blurb_en": "Main city of Republika Srpska—fortress and Vrbas river.",
        "highlights": [
            ("카스텔 요새", "Kastel Fortress", "강변 역사 요새입니다.", "Riverside historic fortress.", "Kastel Banja Luka"),
            ("성 삼위일체 대성당", "Christ the Saviour Cathedral", "황금 돔의 정교회 대성당입니다.", "Orthodox cathedral with golden domes.", "Christ the Saviour Banja Luka"),
            ("고스파 공원", "Gospodska Street", "카페·쇼핑 메인 거리입니다.", "Main café and shopping street.", "Gospodska Banja Luka"),
            ("브르바스 강", "Vrbas River", "래프팅·산책의 강입니다.", "River for rafting and walks.", "Vrbas Banja Luka"),
            ("페르라디야 모스크", "Ferhadija Mosque", "재건된 오스만 모스크입니다.", "Rebuilt Ottoman mosque.", "Ferhadija Mosque"),
        ],
    },
    {
        "id": "travnik",
        "countryId": "ba",
        "ko": "트라브니크",
        "en": "Travnik",
        "native": "Travnik",
        "blurb_ko": "옛 오스만 주둔 도시. 성채와 색색 모스크가 인상적입니다.",
        "blurb_en": "Former Ottoman seat—citadel and colourful mosques.",
        "highlights": [
            ("트라브니크 성", "Travnik Castle", "언덕 위 중세·오스만 성채입니다.", "Hilltop medieval–Ottoman fortress.", "Travnik Castle"),
            ("다채로운 모스크", "Sulejmanija / Many-Coloured Mosque", "벽화로 유명한 모스크입니다.", "Mosque known for painted walls.", "Many-Coloured Mosque Travnik"),
            ("구시가 골목", "Old town lanes", "오스만풍 상점 골목입니다.", "Ottoman-style shop lanes.", "Travnik old town"),
            ("플리바 근교", "Pliva lakes day trip", "야이체·플리바 호수 당일 여행입니다.", "Day trip to Jajce and Pliva lakes.", "Pliva lakes"),
            ("이보 안드리치 생가", "Ivo Andrić birthplace", "노벨상 작가 생가 박물관입니다.", "Nobel laureate birthplace museum.", "Ivo Andrić Travnik"),
        ],
    },
    # —— Montenegro ——
    {
        "id": "kotor",
        "countryId": "me",
        "ko": "코토르",
        "en": "Kotor",
        "native": "Kotor",
        "blurb_ko": "코토르 만의 성벽 도시. 구시가와 산악 성벽이 유네스코 유산입니다.",
        "blurb_en": "Walled Bay of Kotor town—UNESCO old town and mountain walls.",
        "highlights": [
            ("코토르 구시가", "Kotor Old Town", "성벽 안 석조 광장과 골목입니다.", "Stone squares and lanes inside the walls.", "Kotor Old Town"),
            ("성 트리푼 대성당", "Cathedral of Saint Tryphon", "로마네스크 대성당입니다.", "Romanesque cathedral.", "Saint Tryphon Kotor"),
            ("산 조반니 성벽", "San Giovanni fortress hike", "성벽 하이킹과 만 전망입니다.", "Wall hike with bay views.", "San Giovanni Kotor"),
            ("코토르 만 유람", "Bay of Kotor cruise", "협만 같은 만 유람입니다.", "Cruise the fjord-like bay.", "Bay of Kotor cruise"),
            ("고양이 박물관", "Cats Museum", "소소한 고양이 테마 박물관입니다.", "Small cat-themed museum.", "Cats Museum Kotor"),
        ],
    },
    {
        "id": "budva",
        "countryId": "me",
        "ko": "부드바",
        "en": "Budva",
        "native": "Budva",
        "blurb_ko": "몬테네그로 해변 중심. 올드타운과 섬·리조트가 밀집합니다.",
        "blurb_en": "Montenegro’s beach hub—old town, islands, and resorts.",
        "highlights": [
            ("부드바 올드타운", "Budva Old Town", "성벽 안 해변 구시가입니다.", "Walled seaside old town.", "Budva Old Town"),
            ("슬로벤스카 해변", "Slovenska Beach", "긴 도시 해변 산책로입니다.", "Long city beach promenade.", "Slovenska Beach Budva"),
            ("스베티 니콜라 섬", "Sveti Nikola Island", "보트 당일 섬 여행입니다.", "Boat day trip island.", "Sveti Nikola Budva"),
            ("모그렌 해변", "Mogren Beach", "절벽 산책로 끝 해변입니다.", "Beach at the end of a cliff walk.", "Mogren Beach"),
            ("시트니치 / 스베티스테판", "Sveti Stefan viewpoint", "근교 섬 호텔 전망입니다.", "Viewpoint over the island hotel.", "Sveti Stefan"),
        ],
    },
    {
        "id": "podgorica",
        "countryId": "me",
        "ko": "포드고리차",
        "en": "Podgorica",
        "native": "Podgorica",
        "blurb_ko": "몬테네그로 수도. 강변 공원과 현대 도심이 중심입니다.",
        "blurb_en": "Montenegrin capital—river parks and a modern centre.",
        "highlights": [
            ("밀레니엄 다리", "Millennium Bridge", "모라차 강 위 사장교입니다.", "Cable-stayed bridge over the Morača.", "Millennium Bridge Podgorica"),
            ("구시가 스토카시야", "Stara Varoš", "오스만 흔적의 옛 지구입니다.", "Old quarter with Ottoman traces.", "Stara Varoš Podgorica"),
            ("독립 광장", "Independence Square", "카페가 있는 중앙 광장입니다.", "Central square with cafés.", "Independence Square Podgorica"),
            ("모라차 강변", "Morača riverwalk", "강변 산책·공원입니다.", "River walks and parks.", "Morača Podgorica"),
            ("자연사·시립 박물관", "Museums / Clock Tower", "시계탑과 시립 전시입니다.", "Clock tower and city museums.", "Sahat kula Podgorica"),
        ],
    },
    {
        "id": "herceg-novi",
        "countryId": "me",
        "ko": "헤르체그노비",
        "en": "Herceg Novi",
        "native": "Herceg Novi",
        "blurb_ko": "코토르 만 입구 언덕 도시. 계단 골목과 요새가 매력입니다.",
        "blurb_en": "Hill town at the bay entrance—stair lanes and fortresses.",
        "highlights": [
            ("포르테 마레", "Forte Mare", "해변 위 베네치아 요새입니다.", "Venetian fortress above the sea.", "Forte Mare Herceg Novi"),
            ("사하트 쿨라 광장", "Old Town square", "시계탑과 계단 광장입니다.", "Clock tower and stepped square.", "Herceg Novi old town"),
            ("스파니올라 요새", "Španjola Fortress", "만 전망의 언덕 요새입니다.", "Hill fortress with bay views.", "Španjola Fortress"),
            ("페트 다닐라 수도원", "Savina Monastery", "근교 정교회 수도원입니다.", "Nearby Orthodox monastery.", "Savina Monastery"),
            ("해안 산책로", "Pet Danica promenade", "긴 해안 보행로입니다.", "Long seaside promenade.", "Pet Danica promenade"),
        ],
    },
    # —— Serbia ——
    {
        "id": "belgrade",
        "countryId": "rs",
        "ko": "베오그라드",
        "en": "Belgrade",
        "native": "Beograd",
        "blurb_ko": "세르비아 수도. 칼레메그단 요새와 강 합류, 밤문화가 유명합니다.",
        "blurb_en": "Serbian capital—Kalemegdan fortress, river confluence, nightlife.",
        "highlights": [
            ("칼레메그단", "Kalemegdan Fortress", "사바·도나우 합류의 성채 공원입니다.", "Fortress park at the Sava–Danube confluence.", "Kalemegdan"),
            ("스카다르리야", "Skadarlija", "보헤미안 골목 식당가입니다.", "Bohemian lane of taverns.", "Skadarlija Belgrade"),
            ("성 사바 성당", "Temple of Saint Sava", "거대한 돔의 정교회 성당입니다.", "Huge-domed Orthodox temple.", "Temple of Saint Sava"),
            ("크네즈 미하일로바", "Knez Mihailova", "보행자 쇼핑 메인 거리입니다.", "Main pedestrian shopping street.", "Knez Mihailova"),
            ("제문", "Zemun", "도나우 전망의 구시가 지구입니다.", "Old quarter with Danube views.", "Zemun Belgrade"),
        ],
    },
    {
        "id": "novi-sad",
        "countryId": "rs",
        "ko": "노비사드",
        "en": "Novi Sad",
        "native": "Novi Sad",
        "blurb_ko": "보이보디나 중심. 페트로바라딘 요새와 EXIT 페스티벌로 유명합니다.",
        "blurb_en": "Vojvodina hub—Petrovaradin fortress and EXIT Festival.",
        "highlights": [
            ("페트로바라딘 요새", "Petrovaradin Fortress", "도나우 위 ‘다뉴브의 지브롤터’입니다.", "Danube fortress nicknamed Gibraltar on the Danube.", "Petrovaradin Fortress"),
            ("자유 광장", "Freedom Square", "성당과 시청의 중앙 광장입니다.", "Central square with church and city hall.", "Freedom Square Novi Sad"),
            ("두나브스키 공원", "Dunavski Park", "도심 호수 공원입니다.", "Central lake park.", "Dunavski Park"),
            ("알마스키 시장", "Almašani / market streets", "로컬 시장·카페 거리입니다.", "Local market and café streets.", "Novi Sad market"),
            ("스렘스키카르로브치", "Sremski Karlovci day trip", "근교 와인·바로크 마을입니다.", "Nearby wine and Baroque town.", "Sremski Karlovci"),
        ],
    },
    {
        "id": "nis",
        "countryId": "rs",
        "ko": "니시",
        "en": "Niš",
        "native": "Niš",
        "blurb_ko": "남세르비아의 역사 도시. 요새와 스컬 타워가 강렬합니다.",
        "blurb_en": "Historic southern city—fortress and the Skull Tower.",
        "highlights": [
            ("니시 요새", "Niš Fortress", "강변 오스만·로마 요새입니다.", "Riverside Ottoman–Roman fortress.", "Niš Fortress"),
            ("스컬 타워", "Skull Tower", "역사적 두개골 탑 기념물입니다.", "Historic skull-tower memorial.", "Skull Tower Niš"),
            ("체레비치 기념공원", "Ćele Kula / parks", "도심 공원과 기념 공간입니다.", "City parks and memorial spaces.", "Niš parks"),
            ("타슈마이다나 거리", "Obrenovićeva Street", "보행자 카페·쇼핑 거리입니다.", "Pedestrian café and shopping street.", "Obrenovićeva Niš"),
            ("메디아나 유적", "Mediana", "콘스탄티누스 황제 관련 로마 유적입니다.", "Roman site linked to Constantine.", "Mediana Niš"),
        ],
    },
    {
        "id": "subotica",
        "countryId": "rs",
        "ko": "수보티차",
        "en": "Subotica",
        "native": "Subotica",
        "blurb_ko": "헝가리 국경 아르누보 도시. 시청과 팔리치 호수가 유명합니다.",
        "blurb_en": "Art Nouveau border city—city hall and Lake Palić.",
        "highlights": [
            ("수보티차 시청", "City Hall", "화려한 아르누보 시청입니다.", "Ornate Art Nouveau city hall.", "Subotica City Hall"),
            ("시나고가", "Subotica Synagogue", "재건된 아름다운 시나고가입니다.", "Beautifully restored synagogue.", "Subotica Synagogue"),
            ("팔리치 호수", "Lake Palić", "근교 호수 리조트입니다.", "Nearby lake resort.", "Lake Palić"),
            ("중앙 광장", "Main Square", "분수·카페의 광장입니다.", "Square with fountain and cafés.", "Subotica main square"),
            ("아르누보 거리", "Art Nouveau walk", "장식 건물 산책 코스입니다.", "Walk of decorative façades.", "Art Nouveau Subotica"),
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
    "bratislava": {
        "fine_dining": [
            ("Albrecht", 4.6, "Bratislava", "슬로바키아 시즌 파인.", "Seasonal Slovak fine dining.", 900),
            ("UFO Restaurant", 4.5, "Bratislava", "다리 탑 전망 다이닝.", "Bridge-tower view dining.", 2800),
            ("Bratislava Flagship / Modern Slovak peers", 4.5, "Bratislava", "모던 슬로바키아.", "Modern Slovak.", 1200),
            ("Slovak Pub classics peers", 4.4, "Bratislava", "전통 슬로바키아 가정식.", "Traditional Slovak home cooking.", 3200),
            ("Riverfront bistro peers", 4.4, "Bratislava", "도나우 강변 비스트로.", "Danube riverside bistro.", 1600),
        ],
        "bakery": [
            ("Kübler Bakery peers", 4.5, "Bratislava", "로컬 빵·페이스트리.", "Local bread and pastries.", 1800),
            ("Urban bakery Bratislava", 4.4, "Bratislava", "사워도우 베이커리.", "Sourdough bakery.", 1100),
            ("Cake & pastry shops Old Town", 4.4, "Bratislava", "구시가 케이크 숍.", "Old-town cake shops.", 2100),
            ("Trdelník / sweet stalls", 4.3, "Bratislava", "트르델니크·스위트.", "Trdelník and sweets.", 2800),
        ],
        "cafe": [
            ("Štúr Café / specialty peers", 4.5, "Bratislava", "스페셜티 커피.", "Specialty coffee.", 1600),
            ("Café Trafačka peers", 4.4, "Bratislava", "로스터리 카페.", "Roastery café.", 1200),
            ("Old Town café terraces", 4.3, "Bratislava", "구시가 테라스 카페.", "Old-town terrace cafés.", 2400),
            ("Brunch spots Bratislava", 4.4, "Bratislava", "브런치 카페.", "Brunch café.", 1400),
        ],
        "korean": [
            ("Korean Kitchen Bratislava", 4.4, "Bratislava", "캐주얼 한식.", "Casual Korean.", 700),
            ("Bibimbap Bratislava", 4.3, "Bratislava", "비빔밥.", "Bibimbap.", 520),
            ("Korean BBQ Bratislava", 4.3, "Bratislava", "고기구이.", "Korean BBQ.", 600),
            ("Kimchi Bratislava", 4.2, "Bratislava", "김치·반찬.", "Kimchi-focused.", 400),
        ],
    },
    "ljubljana": {
        "fine_dining": [
            ("Strelec", 4.7, "Ljubljana", "성 안 미슐랭 다이닝.", "Castle Michelin dining.", 1100),
            ("JB Restaurant", 4.6, "Ljubljana", "클래식 파인 다이닝.", "Classic fine dining.", 900),
            ("AS / modern Slovenian peers", 4.5, "Ljubljana", "모던 슬로베니아.", "Modern Slovenian.", 1200),
            ("Gostilna local classics", 4.4, "Ljubljana", "전통 고스틸나.", "Traditional gostilna.", 2100),
            ("Riverside tasting peers", 4.4, "Ljubljana", "강변 시즌 다이닝.", "Riverside seasonal dining.", 1600),
        ],
        "bakery": [
            ("Žito / local bakery counters", 4.3, "Ljubljana", "로컬 베이커리.", "Local bakery.", 1800),
            ("Sourdough Ljubljana peers", 4.5, "Ljubljana", "사워도우.", "Sourdough.", 900),
            ("Potica & pastry shops", 4.4, "Ljubljana", "포티차·페이스트리.", "Potica and pastries.", 1400),
            ("Market bakery stalls", 4.3, "Ljubljana", "시장 빵 가판.", "Market bread stalls.", 1200),
        ],
        "cafe": [
            ("Café Cokl / specialty peers", 4.5, "Ljubljana", "스페셜티 커피.", "Specialty coffee.", 1600),
            ("Tozd / riverside cafés", 4.4, "Ljubljana", "강변 카페.", "Riverside café.", 2100),
            ("Slovenska / centre cafés", 4.3, "Ljubljana", "도심 클래식 카페.", "Central classic café.", 1800),
            ("Brunch Ljubljana peers", 4.4, "Ljubljana", "브런치 카페.", "Brunch café.", 1400),
        ],
        "korean": [
            ("Korean Kitchen Ljubljana", 4.4, "Ljubljana", "캐주얼 한식.", "Casual Korean.", 560),
            ("Bibimbap Ljubljana", 4.3, "Ljubljana", "비빔밥.", "Bibimbap.", 420),
            ("Korean BBQ Ljubljana", 4.3, "Ljubljana", "고기구이.", "Korean BBQ.", 480),
            ("Kimchi Ljubljana", 4.2, "Ljubljana", "김치·반찬.", "Kimchi-focused.", 320),
        ],
    },
    "sarajevo": {
        "fine_dining": [
            ("Restaurant Park Princeva peers", 4.5, "Sarajevo", "전망 보스니아 다이닝.", "Viewpoint Bosnian dining.", 1800),
            ("Modern Balkan tasting peers", 4.5, "Sarajevo", "모던 발칸 코스.", "Modern Balkan tasting.", 900),
            ("Inat Kuća", 4.4, "Sarajevo", "전통 보스니아 가정식.", "Traditional Bosnian home cooking.", 3200),
            ("Ćevabdžinica Željo / classic peers", 4.5, "Sarajevo", "체바피 클래식.", "Ćevapi classic.", 8600),
            ("Bistrik fine casual peers", 4.4, "Sarajevo", "비스트리크 캐주얼 파인.", "Bistrik casual fine.", 1200),
        ],
        "bakery": [
            ("Somun / pita bakeries", 4.5, "Sarajevo", "소문·피타 빵집.", "Somun and pita bakeries.", 4200),
            ("Baklava pastry shops", 4.5, "Sarajevo", "바클라바·과자.", "Baklava and sweets.", 2800),
            ("Old Town bakery counters", 4.3, "Sarajevo", "구시가 빵 카운터.", "Old-town bakery counters.", 1600),
            ("Modern sourdough peers", 4.4, "Sarajevo", "사워도우.", "Sourdough.", 700),
        ],
        "cafe": [
            ("Zlatna Ribica / classic cafés", 4.4, "Sarajevo", "클래식 카페.", "Classic café.", 2100),
            ("Specialty coffee Sarajevo", 4.5, "Sarajevo", "스페셜티 커피.", "Specialty coffee.", 1100),
            ("Baščaršija tea & coffee", 4.3, "Sarajevo", "시장가 차·커피.", "Bazaar tea and coffee.", 3600),
            ("Brunch cafés Centar", 4.4, "Sarajevo", "브런치 카페.", "Brunch café.", 1400),
        ],
        "korean": [
            ("Korean Kitchen Sarajevo", 4.3, "Sarajevo", "캐주얼 한식.", "Casual Korean.", 360),
            ("Bibimbap Sarajevo", 4.2, "Sarajevo", "비빔밥.", "Bibimbap.", 280),
            ("Korean BBQ Sarajevo", 4.2, "Sarajevo", "고기구이.", "Korean BBQ.", 300),
            ("Kimchi Sarajevo", 4.2, "Sarajevo", "김치·반찬.", "Kimchi-focused.", 220),
        ],
    },
    "kotor": {
        "fine_dining": [
            ("Galion", 4.6, "Kotor", "만 전망 해산물 파인.", "Bay-view seafood fine dining.", 1200),
            ("Restaurant Vapor / peers", 4.5, "Kotor", "시즌 해산물.", "Seasonal seafood.", 1600),
            ("Old Town konoba classics", 4.4, "Kotor", "전통 코노바.", "Traditional konoba.", 2100),
            ("Marriott / hotel fine peers", 4.4, "Kotor", "호텔 파인 다이닝.", "Hotel fine dining.", 900),
            ("Waterfront bistro peers", 4.4, "Kotor", "해안 비스트로.", "Waterfront bistro.", 1400),
        ],
        "bakery": [
            ("Old Town bakery", 4.4, "Kotor", "구시가 빵집.", "Old-town bakery.", 900),
            ("Pastry & gelato counters", 4.3, "Kotor", "페이스트리·젤라토.", "Pastry and gelato.", 1200),
            ("Bread house Kotor", 4.3, "Kotor", "로컬 빵집.", "Local bakery.", 700),
            ("Café bakery Kotor", 4.3, "Kotor", "베이커리 카페.", "Bakery café.", 800),
        ],
        "cafe": [
            ("Square cafés Kotor", 4.4, "Kotor", "광장 카페.", "Square café.", 1800),
            ("Specialty coffee Kotor", 4.4, "Kotor", "스페셜티 커피.", "Specialty coffee.", 700),
            ("Walls viewpoint café peers", 4.3, "Kotor", "전망 카페.", "Viewpoint café.", 900),
            ("Harbour espresso bars", 4.3, "Kotor", "항구 에스프레소.", "Harbour espresso.", 1100),
        ],
        "korean": [
            ("Korean Kitchen Kotor", 4.2, "Kotor", "캐주얼 한식.", "Casual Korean.", 200),
            ("Bibimbap Kotor", 4.2, "Kotor", "비빔밥.", "Bibimbap.", 160),
            ("Korean BBQ Kotor", 4.2, "Kotor", "고기구이.", "Korean BBQ.", 180),
            ("Kimchi Kotor", 4.1, "Kotor", "김치·반찬.", "Kimchi-focused.", 140),
        ],
    },
    "belgrade": {
        "fine_dining": [
            ("Homa", 4.7, "Belgrade", "미슐랭 모던 세르비아.", "Michelin modern Serbian.", 900),
            ("Langouste", 4.6, "Belgrade", "해산물 파인 다이닝.", "Seafood fine dining.", 1100),
            ("Salon 1905 / classic peers", 4.5, "Belgrade", "클래식 파인.", "Classic fine dining.", 1200),
            ("Skadarlija tavern classics", 4.4, "Belgrade", "스카다르리야 선술집.", "Skadarlija tavern classics.", 4800),
            ("Lorenzo & Kakalamba peers", 4.5, "Belgrade", "창의 캐주얼 파인.", "Creative casual fine.", 2100),
        ],
        "bakery": [
            ("Pekara local chains", 4.3, "Belgrade", "로컬 빵집.", "Local bakery.", 2800),
            ("Sourdough Belgrade peers", 4.5, "Belgrade", "사워도우.", "Sourdough.", 1100),
            ("Burek & pastry shops", 4.5, "Belgrade", "부렉·페이스트리.", "Burek and pastries.", 4200),
            ("Cake shops Centar", 4.4, "Belgrade", "도심 케이크 숍.", "Central cake shops.", 1800),
        ],
        "cafe": [
            ("Specialty coffee Belgrade", 4.5, "Belgrade", "스페셜티 커피.", "Specialty coffee.", 2100),
            ("Kafeterija / peers", 4.4, "Belgrade", "로스터리 카페.", "Roastery café.", 1600),
            ("Dorćol café streets", 4.4, "Belgrade", "도르촐 카페 거리.", "Dorćol café streets.", 2400),
            ("Brunch Belgrade peers", 4.4, "Belgrade", "브런치 카페.", "Brunch café.", 1800),
        ],
        "korean": [
            ("Korean Kitchen Belgrade", 4.4, "Belgrade", "캐주얼 한식.", "Casual Korean.", 800),
            ("Bibimbap Belgrade", 4.3, "Belgrade", "비빔밥.", "Bibimbap.", 600),
            ("Korean BBQ Belgrade", 4.3, "Belgrade", "고기구이.", "Korean BBQ.", 720),
            ("Kimchi Belgrade", 4.2, "Belgrade", "김치·반찬.", "Kimchi-focused.", 480),
        ],
    },
}


def write_cities_append() -> None:
    path = DATA / "cities.ts"
    text = path.read_text(encoding="utf-8")
    if 'id: "bratislava"' in text:
        print("cities already contain bratislava — skip append")
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
        "bratislava": [
            ("Eurovea / Obchodná fashion", "Bratislava", "[패션] 유로베아·옵호드나.", "[Fashion] Eurovea and Obchodná.", 4.4, 4200),
            ("Fashion Arena outlet", "Bratislava", "[아울렛] 패션 아레나 아울렛.", "[Outlet] Fashion Arena outlet.", 4.3, 5400),
            ("Old Town boutiques", "Bratislava", "[패션] 구시가 부티크.", "[Fashion] Old-town boutiques.", 4.3, 1800),
        ],
        "ljubljana": [
            ("Čopova / Citypark fashion", "Ljubljana", "[패션] 초포바·시티파크.", "[Fashion] Čopova and Citypark.", 4.4, 3600),
            ("BTC City fashion", "Ljubljana", "[패션] BTC 시티 패션.", "[Fashion] BTC City fashion.", 4.3, 4800),
            ("Old Town boutiques", "Ljubljana", "[패션] 구시가 부티크.", "[Fashion] Old-town boutiques.", 4.3, 1600),
        ],
        "sarajevo": [
            ("Ferhadija / City Center fashion", "Sarajevo", "[패션] 페르하디야·시티센터.", "[Fashion] Ferhadija and City Center.", 4.3, 2800),
            ("Importanne / mall fashion", "Sarajevo", "[패션] 몰 패션.", "[Fashion] Mall fashion.", 4.2, 2100),
            ("Baščaršija textiles & boutiques", "Sarajevo", "[패션] 시장·부티크.", "[Fashion] Bazaar and boutiques.", 4.3, 3200),
        ],
        "kotor": [
            ("Old Town boutiques", "Kotor", "[패션] 구시가 부티크.", "[Fashion] Old-town boutiques.", 4.3, 1200),
            ("Waterfront resort shops", "Kotor", "[패션] 리조트 숍.", "[Fashion] Resort shops.", 4.2, 900),
            ("Day-trip mall / Budva fashion", "Budva area", "[패션] 부드바 권역 패션.", "[Fashion] Budva-area fashion.", 4.2, 1400),
        ],
        "belgrade": [
            ("Knez Mihailova / Rajiceva fashion", "Belgrade", "[패션] 크네즈 미하일로바.", "[Fashion] Knez Mihailova fashion.", 4.5, 8600),
            ("Ušće / Delta City malls", "Belgrade", "[패션] 우슈체·델타시티.", "[Fashion] Ušće and Delta City.", 4.3, 6400),
            ("Outlet / day-trip fashion", "Belgrade", "[아울렛] 베오그라드 권역 아울렛.", "[Outlet] Belgrade-area outlet.", 4.2, 3200),
        ],
    }
    special_g = {
        "bratislava": [
            ("Old Market Hall / farmers markets", "Bratislava", "[식료품] 구시장·파머스.", "[Grocery] Market hall and farmers markets.", 4.5, 2800),
            ("Tesco / Lidl hypermarkets", "Bratislava", "[대형마트] 테스코·리들.", "[Hypermarket] Tesco and Lidl.", 4.1, 5400),
            ("Billa / Fresh supermarket", "Bratislava", "[슈퍼] 빌라·프레시.", "[Supermarket] Billa and Fresh.", 4.0, 4200),
            ("Asian / specialty groceries", "Bratislava", "[식료품점] 아시안·특산.", "[Grocery] Asian specialties.", 4.3, 1100),
        ],
        "ljubljana": [
            ("Central Market produce", "Ljubljana", "[식료품] 중앙시장.", "[Grocery] Central Market.", 4.5, 3600),
            ("Mercator / Spar hypermarkets", "Ljubljana", "[대형마트] 메르카토르·스파.", "[Hypermarket] Mercator and Spar.", 4.1, 4800),
            ("Hofer / Lidl supermarket", "Ljubljana", "[슈퍼] 호퍼·리들.", "[Supermarket] Hofer and Lidl.", 4.0, 3600),
            ("Specialty / organic groceries", "Ljubljana", "[식료품점] 유기농·특산.", "[Grocery] Organic specialties.", 4.3, 900),
        ],
        "sarajevo": [
            ("Markale / Baščaršija food", "Sarajevo", "[식료품] 마르칼레·시장.", "[Grocery] Markale and bazaar food.", 4.5, 4200),
            ("Bingo / Konzum hypermarkets", "Sarajevo", "[대형마트] 빙고·콘줌.", "[Hypermarket] Bingo and Konzum.", 4.1, 3600),
            ("Local supermarket Centar", "Sarajevo", "[슈퍼] 도심 슈퍼.", "[Supermarket] Central supermarket.", 4.0, 2100),
            ("Specialty / Balkan groceries", "Sarajevo", "[식료품점] 발칸 특산.", "[Grocery] Balkan specialties.", 4.3, 1200),
        ],
        "kotor": [
            ("Old Town mini markets", "Kotor", "[식료품] 구시가 미니마켓.", "[Grocery] Old-town mini markets.", 4.2, 900),
            ("Voli / Idea supermarket", "Kotor", "[슈퍼] 볼리·이데아.", "[Supermarket] Voli and Idea.", 4.0, 1400),
            ("Fresh produce stalls", "Kotor", "[식료품] 신선 채소 가판.", "[Grocery] Fresh produce stalls.", 4.3, 700),
            ("Specialty / Adriatic groceries", "Kotor", "[식료품점] 아드리아 특산.", "[Grocery] Adriatic specialties.", 4.3, 500),
        ],
        "belgrade": [
            ("Zeleni Venac / food markets", "Belgrade", "[식료품] 젤레니 베나츠 시장.", "[Grocery] Zeleni Venac market.", 4.5, 6400),
            ("Maxi / Idea hypermarkets", "Belgrade", "[대형마트] 막시·이데아.", "[Hypermarket] Maxi and Idea.", 4.1, 7200),
            ("Univerexport / supermarket", "Belgrade", "[슈퍼] 유니버렉스포트.", "[Supermarket] Univerexport.", 4.0, 4800),
            ("Asian / specialty groceries", "Belgrade", "[식료품점] 아시안·특산.", "[Grocery] Asian specialties.", 4.3, 1600),
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
        "sk": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#EE1C25"/>
  <rect width="37" height="18.667" fill="#0B4EA2"/>
  <rect width="37" height="9.333" fill="#FFFFFF"/>
  <path d="M8 8 h5 v2 h-2 v6 h-1 v-6 h-2 z" fill="#EE1C25"/>
  <circle cx="10.5" cy="11" r="3.2" fill="#FFFFFF" stroke="#EE1C25" stroke-width="0.8"/>
  <path d="M9 11.5 h3 v2.5 h-3 z" fill="#0B4EA2"/>
</svg>
""",
        "si": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#ED1C24"/>
  <rect width="37" height="18.667" fill="#005DA8"/>
  <rect width="37" height="9.333" fill="#FFFFFF"/>
  <path d="M7 7.5 l3.5-1.5 3.5 1.5 v4.5 l-3.5 2-3.5-2 z" fill="#FFFFFF" stroke="#ED1C24" stroke-width="0.5"/>
  <circle cx="10.5" cy="9.2" r="0.7" fill="#005DA8"/>
  <circle cx="9.2" cy="10.2" r="0.7" fill="#005DA8"/>
  <circle cx="11.8" cy="10.2" r="0.7" fill="#005DA8"/>
</svg>
""",
        "ba": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#002395"/>
  <polygon points="7,0 28,0 7,28" fill="#FECB00"/>
  <polygon points="12,3 13.2,6.2 16.5,6.2 13.8,8.1 14.9,11.2 12,9.2 9.1,11.2 10.2,8.1 7.5,6.2 10.8,6.2" fill="#FFFFFF"/>
  <polygon points="15,7 16.2,10.2 19.5,10.2 16.8,12.1 17.9,15.2 15,13.2 12.1,15.2 13.2,12.1 10.5,10.2 13.8,10.2" fill="#FFFFFF"/>
  <polygon points="18,11 19.2,14.2 22.5,14.2 19.8,16.1 20.9,19.2 18,17.2 15.1,19.2 16.2,16.1 13.5,14.2 16.8,14.2" fill="#FFFFFF"/>
  <polygon points="21,15 22.2,18.2 25.5,18.2 22.8,20.1 23.9,23.2 21,21.2 18.1,23.2 19.2,20.1 16.5,18.2 19.8,18.2" fill="#FFFFFF"/>
  <polygon points="24,19 25.2,22.2 28.5,22.2 25.8,24.1 26.9,27.2 24,25.2 21.1,27.2 22.2,24.1 19.5,22.2 22.8,22.2" fill="#FFFFFF"/>
</svg>
""",
        "me": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#C40308"/>
  <rect x="1.2" y="1.2" width="34.6" height="25.6" fill="none" stroke="#D4AF37" stroke-width="2.4"/>
  <circle cx="18.5" cy="14" r="5.5" fill="#D4AF37"/>
  <circle cx="18.5" cy="14" r="4.2" fill="#C40308"/>
  <rect x="16.5" y="10" width="4" height="8" fill="#D4AF37"/>
  <path d="M15 11 h7 v1.5 h-7 z" fill="#002395"/>
</svg>
""",
        "rs": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#FFFFFF"/>
  <rect width="37" height="18.667" fill="#0C4076"/>
  <rect width="37" height="9.333" fill="#C6363C"/>
  <circle cx="10" cy="14" r="4.5" fill="#D4AF37"/>
  <circle cx="10" cy="14" r="3.2" fill="#0C4076"/>
  <path d="M8.5 12.5 h3 v4 h-3 z" fill="#C6363C"/>
  <path d="M9 13.2 h2 v1 h-2 z" fill="#FFFFFF"/>
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
    if "placesSKExtra" in text:
        print("places.ts already patched")
        return
    text = text.replace(
        "import { placesLIExtra } from './places-li-extra'\n",
        "import { placesLIExtra } from './places-li-extra'\n"
        "import { placesSKExtra } from './places-sk-extra'\n"
        "import { placesSIExtra } from './places-si-extra'\n"
        "import { placesBAExtra } from './places-ba-extra'\n"
        "import { placesMEExtra } from './places-me-extra'\n"
        "import { placesRSExtra } from './places-rs-extra'\n",
    )
    text = text.replace(
        "  ...placesLIExtra,\n  ...placesFashion,",
        "  ...placesLIExtra,\n"
        "  ...placesSKExtra,\n"
        "  ...placesSIExtra,\n"
        "  ...placesBAExtra,\n"
        "  ...placesMEExtra,\n"
        "  ...placesRSExtra,\n"
        "  ...placesFashion,",
    )
    path.write_text(text, encoding="utf-8")
    print("patched places.ts")


COUNTRY_BLOCKS = """  {
    id: 'sk',
    name: { ko: '슬로바키아', en: 'Slovakia' },
    nativeName: 'Slovensko',
    flagImage: '/flags/sk.svg',
    landmarkImage: '/landmarks/landmark-sk.jpg',
    flag: '🇸🇰',
    blurb: {
      ko: '타트라와 도나우의 나라. 브라티슬라바·고타트라가 여행의 중심입니다.',
      en: 'Tatras and the Danube—Bratislava and the High Tatras lead.',
    },
    facts: {
      population: { ko: '약 540만 명', en: 'Approx. 5.4 million' },
      area: { ko: '49,035 km²', en: '49,035 km²' },
      capital: { ko: '브라티슬라바 (Bratislava)', en: 'Bratislava' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#0B4EA2',
      secondary: '#EE1C25',
      accent: '#FFFFFF',
      background: '#E8EEF8',
      text: '#0A1A30',
    },
    cityIds: ['bratislava', 'kosice', 'poprad', 'banska-bystrica', 'trencin'],
  },
  {
    id: 'si',
    name: { ko: '슬로베니아', en: 'Slovenia' },
    nativeName: 'Slovenija',
    flagImage: '/flags/si.svg',
    landmarkImage: '/landmarks/landmark-si.jpg',
    flag: '🇸🇮',
    blurb: {
      ko: '알프스와 아드리아가 한 나라에. 류블랴나·블레드·피란이 대표적입니다.',
      en: 'Alps and Adriatic in one country—Ljubljana, Bled, and Piran.',
    },
    facts: {
      population: { ko: '약 210만 명', en: 'Approx. 2.1 million' },
      area: { ko: '20,271 km²', en: '20,271 km²' },
      capital: { ko: '류블랴나 (Ljubljana)', en: 'Ljubljana' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#005DA8',
      secondary: '#ED1C24',
      accent: '#FFFFFF',
      background: '#E8F0F8',
      text: '#0A1A30',
    },
    cityIds: ['ljubljana', 'bled', 'piran', 'maribor', 'postojna'],
  },
  {
    id: 'ba',
    name: { ko: '보스니아헤르체고비나', en: 'Bosnia and Herzegovina' },
    nativeName: 'Bosna i Hercegovina',
    flagImage: '/flags/ba.svg',
    landmarkImage: '/landmarks/landmark-ba.jpg',
    flag: '🇧🇦',
    blurb: {
      ko: '발칸의 산과 돌다리. 사라예보·모스타르가 여행의 얼굴입니다.',
      en: 'Balkan mountains and stone bridges—Sarajevo and Mostar.',
    },
    facts: {
      population: { ko: '약 320만 명', en: 'Approx. 3.2 million' },
      area: { ko: '51,209 km²', en: '51,209 km²' },
      capital: { ko: '사라예보 (Sarajevo)', en: 'Sarajevo' },
      currency: { ko: '태환 마르카 (BAM, KM)', en: 'Convertible mark (BAM, KM)' },
    },
    currencyCode: 'BAM',
    currencySymbol: 'KM',
    schengen: false,
    flagColors: {
      primary: '#002395',
      secondary: '#FECB00',
      accent: '#FFFFFF',
      background: '#E8ECF8',
      text: '#0A1A30',
    },
    cityIds: ['sarajevo', 'mostar', 'banja-luka', 'travnik'],
  },
  {
    id: 'me',
    name: { ko: '몬테네그로', en: 'Montenegro' },
    nativeName: 'Crna Gora',
    flagImage: '/flags/me.svg',
    landmarkImage: '/landmarks/landmark-me.jpg',
    flag: '🇲🇪',
    blurb: {
      ko: '아드리아 협만과 산악. 코토르·부드바가 해안 여행의 중심입니다.',
      en: 'Adriatic bays and mountains—Kotor and Budva lead the coast.',
    },
    facts: {
      population: { ko: '약 62만 명', en: 'Approx. 620,000' },
      area: { ko: '13,812 km²', en: '13,812 km²' },
      capital: { ko: '포드고리차 (Podgorica)', en: 'Podgorica' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: false,
    flagColors: {
      primary: '#C40308',
      secondary: '#D4AF37',
      accent: '#002395',
      background: '#FCE8EA',
      text: '#3A0A10',
    },
    cityIds: ['kotor', 'budva', 'podgorica', 'herceg-novi'],
  },
  {
    id: 'rs',
    name: { ko: '세르비아', en: 'Serbia' },
    nativeName: 'Srbija',
    flagImage: '/flags/rs.svg',
    landmarkImage: '/landmarks/landmark-rs.jpg',
    flag: '🇷🇸',
    blurb: {
      ko: '발칸의 강과 요새. 베오그라드·노비사드가 여행의 중심입니다.',
      en: 'Balkan rivers and fortresses—Belgrade and Novi Sad lead.',
    },
    facts: {
      population: { ko: '약 660만 명', en: 'Approx. 6.6 million' },
      area: { ko: '88,361 km²', en: '88,361 km²' },
      capital: { ko: '베오그라드 (Belgrade)', en: 'Belgrade' },
      currency: { ko: '디나르 (RSD, din)', en: 'Dinar (RSD, din)' },
    },
    currencyCode: 'RSD',
    currencySymbol: 'din',
    schengen: false,
    flagColors: {
      primary: '#C6363C',
      secondary: '#0C4076',
      accent: '#FFFFFF',
      background: '#FCE8EA',
      text: '#2A0A10',
    },
    cityIds: ['belgrade', 'novi-sad', 'nis', 'subotica'],
  },
]"""


def patch_countries() -> None:
    path = DATA / "countries.ts"
    text = path.read_text(encoding="utf-8")
    if "id: 'sk'" in text:
        print("countries already has sk")
        return
    marker = "\n]\n\nexport function getCountry"
    if marker not in text:
        raise SystemExit("countries.ts marker not found")
    text = text.replace(marker, "\n" + COUNTRY_BLOCKS + "\n\nexport function getCountry", 1)
    if "},," in text:
        text = text.replace("},,", "},")
        print("fixed },, double commas")
    path.write_text(text, encoding="utf-8")
    print("appended countries sk/si/ba/me/rs")


def main() -> None:
    write_flags()
    patch_countries()
    write_cities_append()
    write_extras()
    patch_places_ts()
    fashion, grocery, asian = fashion_grocery_asian_rows()
    append_category_file(DATA / "places-fashion.ts", fashion, "sk/si/ba/me/rs")
    append_category_file(DATA / "places-grocery.ts", grocery, "sk/si/ba/me/rs")
    append_category_file(DATA / "places-asian.ts", asian, "sk/si/ba/me/rs")


if __name__ == "__main__":
    main()
