#!/usr/bin/env python3
"""Append a second batch of tourist cities to FR / CH / DE / IT (→ 12 each)."""

from __future__ import annotations

from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"


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
    # —— France ——
    {
        "id": "toulouse",
        "countryId": "fr",
        "ko": "툴루즈",
        "en": "Toulouse",
        "native": "Toulouse",
        "blurb_ko": "분홍 도시의 미식·항공 허브. 카피톨 광장과 가르론 강변이 중심입니다.",
        "blurb_en": "The Pink City—Capitole square and Garonne riverside.",
        "highlights": [
            ("카피톨 광장", "Place du Capitole", "시청과 카페가 모인 중심 광장입니다.", "Main square with the town hall.", "Place du Capitole Toulouse"),
            ("생세르냉 대성당", "Basilique Saint-Sernin", "로마네스크 순례 성당입니다.", "Romanesque pilgrimage basilica.", "Saint-Sernin Toulouse"),
            ("자코뱅 수도원", "Couvent des Jacobins", "야자수 기둥의 고딕 수도원입니다.", "Gothic convent with palm-tree columns.", "Jacobins Toulouse"),
            ("가르론 강변", "Garonne quays", "강변 산책과 일몰 포인트입니다.", "Riverside walks and sunsets.", "Garonne Toulouse"),
            ("시테 드 레스파스", "Cité de l'espace", "우주·항공 테마파크입니다.", "Space and aerospace park.", "Cité de l'espace"),
        ],
    },
    {
        "id": "montpellier",
        "countryId": "fr",
        "ko": "몽펠리에",
        "en": "Montpellier",
        "native": "Montpellier",
        "blurb_ko": "남프랑스 대학 도시. 코메디 광장과 구시가 골목이 활기찹니다.",
        "blurb_en": "Southern university city—Place de la Comédie and old lanes.",
        "highlights": [
            ("코메디 광장", "Place de la Comédie", "분수와 오페라가 있는 중심 광장입니다.", "Fountain and opera square.", "Place de la Comédie"),
            ("에퀴즈 지구", "Écusson", "중세 성벽 안 구시가입니다.", "Old town inside medieval walls.", "Écusson Montpellier"),
            ("생피에르 대성당", "Saint-Pierre Cathedral", "고딕 대성당입니다.", "Gothic cathedral.", "Cathédrale Saint-Pierre Montpellier"),
            ("파브르 미술관", "Musée Fabre", "지역 대표 미술관입니다.", "Leading regional art museum.", "Musée Fabre"),
            ("앙티곤느", "Antigone", "신고전주의 신도시 지구입니다.", "Neoclassical new-town quarter.", "Antigone Montpellier"),
        ],
    },
    {
        "id": "dijon",
        "countryId": "fr",
        "ko": "디종",
        "en": "Dijon",
        "native": "Dijon",
        "blurb_ko": "부르고뉴 와인 루트의 관문. 머스터드와 올드타운이 유명합니다.",
        "blurb_en": "Gateway to Burgundy wine—mustard and a rich old town.",
        "highlights": [
            ("해방광장", "Place de la Libération", "공작 궁전 앞 반원형 광장입니다.", "Semicircle square by the Ducal Palace.", "Place de la Libération Dijon"),
            ("공작 궁전", "Palais des Ducs", "미술관이 있는 부르고뉴 궁전입니다.", "Ducal palace and museum.", "Palais des Ducs Dijon"),
            ("노트르담 교회", "Notre-Dame de Dijon", "가고일과 올빼미 부적의 교회입니다.", "Church of gargoyles and the owl.", "Notre-Dame Dijon"),
            ("올빼미 골목", "Rue de la Chouette", "행운의 올빼미 조각이 있는 골목입니다.", "Lane with the lucky owl carving.", "Rue de la Chouette"),
            ("시장홀", "Les Halles", "먹거리 시장입니다.", "Food market hall.", "Halles Dijon"),
        ],
    },
    {
        "id": "chamonix",
        "countryId": "fr",
        "ko": "샤모니",
        "en": "Chamonix",
        "native": "Chamonix-Mont-Blanc",
        "blurb_ko": "몽블랑 아래 알프스 리조트. 케이블카와 하이킹의 거점입니다.",
        "blurb_en": "Alpine resort under Mont Blanc—cables and hiking base.",
        "highlights": [
            ("에귀디미디", "Aiguille du Midi", "케이블카로 오르는 몽블랑 전망입니다.", "Cable car to Mont Blanc views.", "Aiguille du Midi"),
            ("몽텐베르", "Montenvers Mer de Glace", "기차로 가는 빙하 전망입니다.", "Train to the Mer de Glace glacier.", "Montenvers Mer de Glace"),
            ("샤모니 시내", "Chamonix centre", "알파인 상점과 카페 거리입니다.", "Alpine shops and café streets.", "Chamonix centre"),
            ("브르방", "Brévent", "계곡 반대편 케이블카 전망입니다.", "Cable views across the valley.", "Le Brévent"),
            ("아르브 강변", "Arve riverwalk", "마을을 가로지르는 강변 산책입니다.", "Village river walk.", "Arve Chamonix"),
        ],
    },
    # —— Switzerland ——
    {
        "id": "lugano",
        "countryId": "ch",
        "ko": "루가노",
        "en": "Lugano",
        "native": "Lugano",
        "blurb_ko": "티치노의 호수 도시. 이탈리아어권 분위기와 산책로가 매력입니다.",
        "blurb_en": "Ticino lake city—Italian-speaking vibe and promenades.",
        "highlights": [
            ("루가노 호수", "Lake Lugano", "유람선과 호숫가 산책입니다.", "Boat rides and lakeside walks.", "Lake Lugano"),
            ("구시가", "Old Town Lugano", "Via Nassa 쇼핑·카페 거리입니다.", "Via Nassa shops and cafés.", "Via Nassa Lugano"),
            ("산살바토레", "Monte San Salvatore", "푸니쿨라 정상 전망입니다.", "Funicular summit views.", "Monte San Salvatore"),
            ("파라이소 부두", "Paradiso waterfront", "호수 전망 부두 지구입니다.", "Lakefront quarter with views.", "Paradiso Lugano"),
            ("치안니", "Parco Ciani", "호숫가 공원입니다.", "Lakeside city park.", "Parco Ciani"),
        ],
    },
    {
        "id": "montreux",
        "countryId": "ch",
        "ko": "몽트뢰",
        "en": "Montreux",
        "native": "Montreux",
        "blurb_ko": "레만 호수 재즈의 도시. 시용성과 호숫가 산책로가 유명합니다.",
        "blurb_en": "Lake Geneva jazz town—Chillon Castle and the lakeside.",
        "highlights": [
            ("시용성", "Chillon Castle", "호수 위 중세 성입니다.", "Medieval castle on the lake.", "Château de Chillon"),
            ("호숫가 산책로", "Montreux Riviera", "조각과 꽃이 있는 산책로입니다.", "Promenade with flowers and sculptures.", "Montreux promenade"),
            ("프레디 머큐리 동상", "Freddie Mercury statue", "호숫가 기념 동상입니다.", "Waterfront memorial statue.", "Freddie Mercury statue Montreux"),
            ("구시가 시장", "Old Town market", "언덕 위 골목과 시장입니다.", "Hill lanes and market.", "Montreux Old Town"),
            ("로셰드네", "Rochers-de-Naye", "산악열차 정상 전망입니다.", "Cog railway summit views.", "Rochers-de-Naye"),
        ],
    },
    {
        "id": "grindelwald",
        "countryId": "ch",
        "ko": "그린델발트",
        "en": "Grindelwald",
        "native": "Grindelwald",
        "blurb_ko": "아이거 아래 산악 마을. 융프라우 권역 하이킹·케이블의 거점입니다.",
        "blurb_en": "Village under the Eiger—Jungfrau hiking and cable base.",
        "highlights": [
            ("아이거 북벽 전망", "Eiger north face views", "마을에서 보이는 아이거 북벽입니다.", "North-face views from the village.", "Eiger Grindelwald"),
            ("피르스트", "First", "절벽 산책로·케이블카입니다.", "Cliff walk and cable car.", "First Grindelwald"),
            ("만리헨", "Männlichen", "능선 전망 케이블입니다.", "Ridge viewpoint cable.", "Männlichen"),
            ("글레처 협곡", "Glacier Canyon", "빙하 협곡 산책로입니다.", "Glacier gorge walk.", "Gletscherschlucht Grindelwald"),
            ("마을 메인 거리", "Dorfstrasse", "산악 상점·호텔 거리입니다.", "Alpine shop and hotel street.", "Dorfstrasse Grindelwald"),
        ],
    },
    {
        "id": "st-moritz",
        "countryId": "ch",
        "ko": "생모리츠",
        "en": "St. Moritz",
        "native": "St. Moritz",
        "blurb_ko": "엥가딘의 글로발 리조트. 호수와 고급 쇼핑·산악 액티비티가 공존합니다.",
        "blurb_en": "Engadin resort—lake, luxury shopping, and mountain sports.",
        "highlights": [
            ("생모리츠 호수", "Lake St. Moritz", "호숫가 산책과 겨울 스포츠입니다.", "Lakeside walks and winter sports.", "Lake St Moritz"),
            ("도르프 / 바트", "Dorf and Bad", "상·하 마을 산책 코스입니다.", "Upper and lower village walks.", "St Moritz Dorf"),
            ("코르비글리아", "Corviglia", "케이블·스키 권역 전망입니다.", "Cable and ski-area views.", "Corviglia"),
            ("세글란티나", "Segantini Museum", "산악 화가 미술관입니다.", "Alpine painter museum.", "Segantini Museum"),
            ("비아 세라스", "Via Serlas", "럭셔리 쇼핑 거리입니다.", "Luxury shopping street.", "Via Serlas"),
        ],
    },
    # —— Germany ——
    {
        "id": "stuttgart",
        "countryId": "de",
        "ko": "슈투트가르트",
        "en": "Stuttgart",
        "native": "Stuttgart",
        "blurb_ko": "자동차와 와인의 도시. 메르세데스·포르쉐 박물관이 유명합니다.",
        "blurb_en": "Cars and wine—Mercedes and Porsche museums.",
        "highlights": [
            ("메르세데스벤츠 박물관", "Mercedes-Benz Museum", "자동차 역사 박물관입니다.", "Car history museum.", "Mercedes-Benz Museum"),
            ("포르쉐 박물관", "Porsche Museum", "포르쉐 브랜드 박물관입니다.", "Porsche brand museum.", "Porsche Museum Stuttgart"),
            ("슐로스플라츠", "Schlossplatz", "신궁전 앞 중심 광장입니다.", "Central square by the New Palace.", "Schlossplatz Stuttgart"),
            ("빌헬마", "Wilhelma", "동물원·식물원 콤플렉스입니다.", "Zoo and botanical gardens.", "Wilhelma"),
            ("펜들러 언덕", "Weinberge views", "도시 전망 와인 언덕입니다.", "Vineyard viewpoints over the city.", "Stuttgart vineyards"),
        ],
    },
    {
        "id": "leipzig",
        "countryId": "de",
        "ko": "라이프치히",
        "en": "Leipzig",
        "native": "Leipzig",
        "blurb_ko": "작센의 음악·출판 도시. 바흐와 활기찬 구시가가 매력입니다.",
        "blurb_en": "Saxon music city—Bach heritage and a lively centre.",
        "highlights": [
            ("성 토마스 교회", "St. Thomas Church", "바흐가 활동한 교회입니다.", "Bach’s church.", "Thomaskirche Leipzig"),
            ("시장광장", "Markt Leipzig", "구시청이 있는 광장입니다.", "Square with the old town hall.", "Markt Leipzig"),
            ("메들러 파사주", "Mädler Passage", "쇼핑 파사주와 구시가입니다.", "Shopping passages and old town.", "Mädler Passage Leipzig"),
            ("전투기념비", "Monument to the Battle of the Nations", "나폴레옹 전쟁 기념비입니다.", "Battle of the Nations monument.", "Völkerschlachtdenkmal"),
            ("슈필게바이스", "Spinnerei", "현대미술 창고 지구입니다.", "Contemporary art in old mills.", "Leipzig Spinnerei"),
        ],
    },
    {
        "id": "rothenburg",
        "countryId": "de",
        "ko": "로텐부르크",
        "en": "Rothenburg ob der Tauber",
        "native": "Rothenburg ob der Tauber",
        "blurb_ko": "로맨틱 가도의 중세 성벽 도시. 동화 같은 골목이 남아 있습니다.",
        "blurb_en": "Romantic Road walled town—fairy-tale lanes intact.",
        "highlights": [
            ("시장광장", "Marktplatz", "시청과 시계인형이 있는 광장입니다.", "Town hall and clock-figure square.", "Marktplatz Rothenburg"),
            ("플뢴라인", "Plönlein", "가장 사진 찍히는 모퉁이입니다.", "Most photographed corner.", "Plönlein Rothenburg"),
            ("성벽 산책", "Town walls", "중세 성벽 둘레길입니다.", "Medieval wall walk.", "Rothenburg town walls"),
            ("범죄박물관", "Medieval Crime Museum", "중세 형벌 전시입니다.", "Medieval justice museum.", "Kriminalmuseum Rothenburg"),
            ("성정원", "Castle Garden", "타우버 계곡 전망 공원입니다.", "Garden views over the Tauber valley.", "Burggarten Rothenburg"),
        ],
    },
    {
        "id": "potsdam",
        "countryId": "de",
        "ko": "포츠담",
        "en": "Potsdam",
        "native": "Potsdam",
        "blurb_ko": "베를린 근교의 궁전 도시. 산수시와 정원으로 유명합니다.",
        "blurb_en": "Palace city near Berlin—Sanssouci and gardens.",
        "highlights": [
            ("산수시 궁전", "Sanssouci Palace", "프리드리히 대왕의 로코코 궁전입니다.", "Frederick’s Rococo palace.", "Sanssouci Palace"),
            ("신궁전", "New Palace", "공원 끝의 대형 바로크 궁전입니다.", "Grand Baroque palace in the park.", "Neues Palais Potsdam"),
            ("네덜란드 지구", "Dutch Quarter", "빨간 벽돌 네덜란드식 거리입니다.", "Red-brick Dutch-style streets.", "Holländisches Viertel"),
            ("세실리엔호프", "Cecilienhof", "포츠담 회담이 열린 궁전입니다.", "Palace of the Potsdam Conference.", "Cecilienhof"),
            ("호수 산책", "Potsdam lakes", "하벨 호수 권역 산책입니다.", "Havel lake walks.", "Potsdam lakes"),
        ],
    },
    # —— Italy ——
    {
        "id": "amalfi",
        "countryId": "it",
        "ko": "아말피",
        "en": "Amalfi",
        "native": "Amalfi",
        "blurb_ko": "아말피 해안의 상징 마을. 절벽과 대성당·레몬이 유명합니다.",
        "blurb_en": "Icon of the Amalfi Coast—cliffs, cathedral, and lemons.",
        "highlights": [
            ("아말피 대성당", "Amalfi Cathedral", "계단과 아라베스크 파사드입니다.", "Steps and Arab-Norman façade.", "Duomo di Amalfi"),
            ("해안 전망", "Amalfi waterfront", "항구와 절벽 전망입니다.", "Harbour and cliff views.", "Amalfi harbour"),
            ("종이 박물관", "Paper Museum", "전통 종이 공방 박물관입니다.", "Historic paper mill museum.", "Museo della Carta Amalfi"),
            ("계곡 산책", "Valle dei Mulini", "옛 방앗간 계곡 산책입니다.", "Valley of the mills walk.", "Valle dei Mulini Amalfi"),
            ("포지타노 데이트립", "Positano day views", "인근 해안 마을 전망 코스입니다.", "Nearby coast-town viewpoints.", "Positano"),
        ],
    },
    {
        "id": "siena",
        "countryId": "it",
        "ko": "시에나",
        "en": "Siena",
        "native": "Siena",
        "blurb_ko": "토스카나 중세 도시의 정수. 캄포 광장과 팔리오가 상징입니다.",
        "blurb_en": "Tuscan medieval gem—Piazza del Campo and the Palio.",
        "highlights": [
            ("캄포 광장", "Piazza del Campo", "조개형 중앙 광장입니다.", "Shell-shaped main square.", "Piazza del Campo"),
            ("시엔나 대성당", "Siena Cathedral", "흑백 대리석 대성당입니다.", "Black-and-white marble cathedral.", "Duomo di Siena"),
            ("망자 탑", "Torre del Mangia", "광장 전망 탑입니다.", "Tower views over the Campo.", "Torre del Mangia"),
            ("시내 골목", "Contrade streets", "콩트라다 깃발의 중세 골목입니다.", "Medieval lanes of the contrade.", "Siena old town"),
            ("산마르티노", "Views to countryside", "토스카나 언덕 전망입니다.", "Tuscan hillside views.", "Siena panorama"),
        ],
    },
    {
        "id": "genoa",
        "countryId": "it",
        "ko": "제노바",
        "en": "Genoa",
        "native": "Genova",
        "blurb_ko": "리구리아의 항구 도시. 구시가 골목과 아쿠아리움이 유명합니다.",
        "blurb_en": "Liguria’s port city—caruggi lanes and the aquarium.",
        "highlights": [
            ("제노바 아쿠아리움", "Aquarium of Genoa", "유럽 최대급 수족관입니다.", "One of Europe’s largest aquariums.", "Acquario di Genova"),
            ("비아프란체스카 / 구시가", "Caruggi old town", "좁은 중세 골목입니다.", "Narrow medieval lanes.", "Centro storico Genova"),
            ("페라리 광장", "Piazza de Ferrari", "분수와 오페라가 있는 광장입니다.", "Fountain and opera square.", "Piazza de Ferrari"),
            ("로열 팰리스", "Palazzo Reale", "귀족 궁전 미술관입니다.", "Noble palace galleries.", "Palazzo Reale Genova"),
            ("란테르나", "Lanterna", "항구 등대 전망입니다.", "Harbour lighthouse views.", "Lanterna Genova"),
        ],
    },
    {
        "id": "palermo",
        "countryId": "it",
        "ko": "팔레르모",
        "en": "Palermo",
        "native": "Palermo",
        "blurb_ko": "시칠리아의 수도. 아랍-노르만 건축과 시장 먹거리가 강렬합니다.",
        "blurb_en": "Sicily’s capital—Arab-Norman architecture and street food.",
        "highlights": [
            ("팔레르모 대성당", "Palermo Cathedral", "다층 양식이 섞인 대성당입니다.", "Cathedral of mixed styles.", "Cattedrale di Palermo"),
            ("팔라티노 예배당", "Palatine Chapel", "황금 모자이크 예배당입니다.", "Golden mosaic chapel.", "Cappella Palatina"),
            ("발라리 시장", "Ballarò market", "시칠리아 스트리트푸드 시장입니다.", "Sicilian street-food market.", "Ballarò market"),
            ("콰트로 칸티", "Quattro Canti", "바로크 교차로 광장입니다.", "Baroque crossroads square.", "Quattro Canti"),
            ("몬드레알레 데이트립", "Monreale", "모자이크 대성당 근교 투어입니다.", "Nearby mosaic cathedral town.", "Monreale"),
        ],
    },
]

EXTRA_CITY_IDS = {
    "fr": ["toulouse", "montpellier", "dijon", "chamonix"],
    "ch": ["lugano", "montreux", "grindelwald", "st-moritz"],
    "de": ["stuttgart", "leipzig", "rothenburg", "potsdam"],
    "it": ["amalfi", "siena", "genoa", "palermo"],
}

CITY_IDS_FULL = {
    "fr": [
        "paris", "lyon", "marseille", "nice", "bordeaux", "strasbourg", "annecy", "avignon",
        "toulouse", "montpellier", "dijon", "chamonix",
    ],
    "ch": [
        "zurich", "geneva", "bern", "lucerne", "interlaken", "basel", "zermatt", "lausanne",
        "lugano", "montreux", "grindelwald", "st-moritz",
    ],
    "de": [
        "berlin", "munich", "hamburg", "cologne", "frankfurt", "dresden", "heidelberg", "nuremberg",
        "stuttgart", "leipzig", "rothenburg", "potsdam",
    ],
    "it": [
        "rome", "milan", "florence", "venice", "naples", "bologna", "verona", "turin",
        "amalfi", "siena", "genoa", "palermo",
    ],
}


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


def append_cities() -> None:
    path = DATA / "cities.ts"
    text = path.read_text(encoding="utf-8")
    if 'id: "toulouse"' in text:
        print("batch2 cities already present — skip")
        return
    marker = "\n]\n\nexport function getCity"
    blocks = ",\n".join(city_block(c) for c in CITIES)
    text = text.replace(marker, ",\n" + blocks + marker, 1)
    path.write_text(text, encoding="utf-8")
    print(f"appended {len(CITIES)} cities")


def patch_country_city_ids() -> None:
    import re

    path = DATA / "countries.ts"
    text = path.read_text(encoding="utf-8")
    for cc, ids in CITY_IDS_FULL.items():
        new_ids = "[" + ", ".join(f"'{i}'" for i in ids) + "]"
        pattern = rf"(id: '{cc}'[\s\S]*?cityIds: )(\[[^\]]+\])"
        m = re.search(pattern, text)
        if not m:
            raise SystemExit(f"country {cc} not found")
        if "toulouse" in m.group(2) or "lugano" in m.group(2) or "stuttgart" in m.group(2) or "amalfi" in m.group(2):
            print(f"cityIds for {cc} already expanded")
            continue
        text = text[: m.start(2)] + new_ids + text[m.end(2) :]
        print(f"updated cityIds for {cc} → {len(ids)}")
    path.write_text(text, encoding="utf-8")


def append_to_extra_files() -> None:
    labels = {c["id"]: c["en"] for c in CITIES}
    for cc, city_ids in EXTRA_CITY_IDS.items():
        path = DATA / f"places-{cc}-extra.ts"
        text = path.read_text(encoding="utf-8")
        if f"// —— {city_ids[0]} ——" in text:
            print(f"skip extra dining {cc}")
            continue
        lines = []
        for city in city_ids:
            dining = generic_dining(labels[city])
            lines.append(f"  // —— {city} ——")
            for cat in ("fine_dining", "bakery", "cafe", "korean"):
                for i, (name, rating, addr, ko, en, reviews) in enumerate(dining[cat], 1):
                    lines.append(place_line(city, cat, i, name, rating, addr, ko, en, reviews))
            lines.append("")
        text = text.rstrip()
        text = text[:-1].rstrip() + "\n\n" + "\n".join(lines) + "\n]\n"
        path.write_text(text, encoding="utf-8")
        print(f"appended dining to {path.name}")


def append_category_rows() -> None:
    fashion, grocery, asian = [], [], []
    for c in CITIES:
        city, label = c["id"], c["en"]
        for i, row in enumerate(
            [
                (f"{label} fashion street", label, f"[패션] {label} 메인 패션 거리.", f"[Fashion] {label} fashion street.", 4.3, 1200),
                (f"{label} outlet / day trip", label, f"[아울렛] {label} 권역 아울렛.", f"[Outlet] {label}-area outlet.", 4.2, 1000),
                (f"{label} mall fashion", label, f"[패션] {label} 몰 패션.", f"[Fashion] {label} mall fashion.", 4.2, 900),
            ],
            1,
        ):
            fashion.append(place_line(city, "fashion", i, row[0], row[4], row[1], row[2], row[3], row[5]))
        for i, row in enumerate(
            [
                (f"{label} food market", label, f"[식료품] {label} 식료품 마켓.", f"[Grocery] {label} food market.", 4.4, 1800),
                (f"Hypermarket near {label}", label, f"[대형마트] {label} 근교 대형마트.", f"[Hypermarket] Near {label}.", 4.1, 1400),
                (f"Supermarket {label}", label, f"[슈퍼] {label} 슈퍼마켓.", f"[Supermarket] {label} supermarket.", 4.0, 1100),
                (f"Specialty groceries {label}", label, f"[식료품점] 특산·유기농.", f"[Grocery] Specialty groceries.", 4.3, 700),
            ],
            1,
        ):
            grocery.append(place_line(city, "grocery", i, row[0], row[4], row[1], row[2], row[3], row[5]))
        for i, row in enumerate(
            [
                (f"Asian dining {label}", label, "아시안 다이닝.", "Asian dining.", 4.3, 600),
                (f"Sushi / ramen {label}", label, "스시·라멘.", "Sushi and ramen.", 4.3, 500),
                (f"Thai / Vietnamese {label}", label, "태국·베트남.", "Thai and Vietnamese.", 4.2, 480),
            ],
            1,
        ):
            asian.append(place_line(city, "asian", i, row[0], row[4], row[1], row[2], row[3], row[5]))

    for path, rows in (
        (DATA / "places-fashion.ts", fashion),
        (DATA / "places-grocery.ts", grocery),
        (DATA / "places-asian.ts", asian),
    ):
        text = path.read_text(encoding="utf-8")
        first_id = rows[0].split("'")[1]
        if first_id in text:
            print(f"skip {path.name}")
            continue
        text = text.rstrip()
        text = text[:-1].rstrip() + "\n\n  // —— fr/ch/de/it city batch2 ——\n" + "\n".join(rows) + "\n]\n"
        path.write_text(text, encoding="utf-8")
        print(f"appended {len(rows)} to {path.name}")


def main() -> None:
    append_cities()
    patch_country_city_ids()
    append_to_extra_files()
    append_category_rows()


if __name__ == "__main__":
    main()
