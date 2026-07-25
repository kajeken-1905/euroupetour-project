#!/usr/bin/env python3
"""Append extra tourist cities to FR / CH / DE / IT."""

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
    # —— France extras ——
    {
        "id": "strasbourg",
        "countryId": "fr",
        "ko": "스트라스부르",
        "en": "Strasbourg",
        "native": "Strasbourg",
        "blurb_ko": "알자스 중심 도시. 대성당과 Petite France 운하 지구가 유명합니다.",
        "blurb_en": "Alsace hub—cathedral and Petite France canals.",
        "highlights": [
            ("스트라스부르 대성당", "Strasbourg Cathedral", "고딕 대성당과 천문시계입니다.", "Gothic cathedral and astronomical clock.", "Strasbourg Cathedral"),
            ("프티트 프랑스", "Petite France", "목조 가옥과 운하 골목입니다.", "Timber houses and canal lanes.", "Petite France Strasbourg"),
            ("유럽의회", "European Parliament", "EU 기관 단지입니다.", "EU institutions quarter.", "European Parliament Strasbourg"),
            ("바랑주 광장", "Place Kléber", "시내 중심 광장입니다.", "Central city square.", "Place Kléber Strasbourg"),
            ("라인 강변", "Rhine waterfront", "강변 산책로입니다.", "Riverside walks.", "Rhine Strasbourg"),
        ],
    },
    {
        "id": "annecy",
        "countryId": "fr",
        "ko": "안시",
        "en": "Annecy",
        "native": "Annecy",
        "blurb_ko": "알프스 호수 도시. ‘알프스의 베네치아’로 불립니다.",
        "blurb_en": "Alpine lake town often called the Venice of the Alps.",
        "highlights": [
            ("안시 호수", "Lake Annecy", "터키석빛 호수 유람·수영입니다.", "Turquoise lake cruises and swims.", "Lake Annecy"),
            ("구시가 운하", "Old Town canals", "꽃과 운하가 있는 골목입니다.", "Flowered canal alleys.", "Annecy Old Town"),
            ("성 섬", "Palais de l'Isle", "운하 위 중세 감옥 건물입니다.", "Medieval island prison building.", "Palais de l'Isle Annecy"),
            ("안시 성", "Annecy Castle", "언덕 위 성곽 박물관입니다.", "Hilltop castle museum.", "Château d'Annecy"),
            ("티우 운하", "Thioux Canal", "구시가 중심 운하입니다.", "Central old-town canal.", "Canal du Thiou"),
        ],
    },
    {
        "id": "avignon",
        "countryId": "fr",
        "ko": "아비뇽",
        "en": "Avignon",
        "native": "Avignon",
        "blurb_ko": "교황청이 있던 프로방스 도시. 다리와 성벽이 상징입니다.",
        "blurb_en": "Provence papal city—palace, bridge, and ramparts.",
        "highlights": [
            ("교황궁", "Palais des Papes", "중세 교황 궁전입니다.", "Medieval papal palace.", "Palais des Papes"),
            ("아비뇽 다리", "Pont d'Avignon", "노래로 유명한 다리 유적입니다.", "Famous bridge ruins.", "Pont Saint-Bénézet"),
            ("로셰 바위", "Rocher des Doms", "론 강 전망 공원입니다.", "Rhône viewpoint park.", "Rocher des Doms"),
            ("시계탑 광장", "Place de l'Horloge", "카페가 모인 중심 광장입니다.", "Café-lined main square.", "Place de l'Horloge Avignon"),
            ("성벽 산책", "City ramparts", "중세 성벽 둘레길입니다.", "Medieval rampart walks.", "Remparts Avignon"),
        ],
    },
    # —— Switzerland extras ——
    {
        "id": "basel",
        "countryId": "ch",
        "ko": "바젤",
        "en": "Basel",
        "native": "Basel",
        "blurb_ko": "라인 강변의 문화·미술 도시. 미술관과 구시가가 매력입니다.",
        "blurb_en": "Rhine culture city—museums and old town.",
        "highlights": [
            ("바젤 대성당", "Basel Minster", "빨간 사암 대성당과 전망입니다.", "Red sandstone minster views.", "Basel Minster"),
            ("미술관", "Kunstmuseum Basel", "스위스 대표 미술관입니다.", "Leading Swiss art museum.", "Kunstmuseum Basel"),
            ("라인 산책로", "Rhine promenade", "강변 카페와 산책로입니다.", "Riverside cafés and walks.", "Rheinpromenade Basel"),
            ("구시가 시장광장", "Marktplatz", "빨간 시청이 있는 광장입니다.", "Square with the red town hall.", "Marktplatz Basel"),
            ("팅겔리 분수", "Tinguely Fountain", "움직이는 조각 분수입니다.", "Kinetic sculpture fountain.", "Tinguely Fountain Basel"),
        ],
    },
    {
        "id": "zermatt",
        "countryId": "ch",
        "ko": "체르마트",
        "en": "Zermatt",
        "native": "Zermatt",
        "blurb_ko": "마터호른 아래 산악 마을. 차량 없는 보행 마을입니다.",
        "blurb_en": "Car-free Alpine village under the Matterhorn.",
        "highlights": [
            ("마터호른 전망", "Matterhorn views", "상징 봉우리 전망 포인트입니다.", "Iconic peak viewpoints.", "Matterhorn Zermatt"),
            ("고르너그라트", "Gornergrat", "산악열차 정상 전망대입니다.", "Cogwheel railway viewpoint.", "Gornergrat"),
            ("마을 메인 거리", "Bahnhofstrasse Zermatt", "보행 전용 상점 거리입니다.", "Car-free shopping street.", "Bahnhofstrasse Zermatt"),
            ("리펠호프", "Riffelsee", "마터호른이 비치는 호수입니다.", "Lake reflecting the Matterhorn.", "Riffelsee"),
            ("마터호른 박물관", "Matterhorn Museum", "산악 역사 박물관입니다.", "Alpine history museum.", "Matterhorn Museum"),
        ],
    },
    {
        "id": "lausanne",
        "countryId": "ch",
        "ko": "로잔",
        "en": "Lausanne",
        "native": "Lausanne",
        "blurb_ko": "레만 호수 위 올림픽 수도. 대성당과 우아한 구시가가 있습니다.",
        "blurb_en": "Olympic capital above Lake Geneva—cathedral and old town.",
        "highlights": [
            ("로잔 대성당", "Lausanne Cathedral", "고딕 대성당과 야경입니다.", "Gothic cathedral and night views.", "Lausanne Cathedral"),
            ("우시 부두", "Ouchy waterfront", "호숫가 산책·유람 거점입니다.", "Lakeside promenade and boats.", "Ouchy Lausanne"),
            ("올림픽 박물관", "Olympic Museum", "올림픽 역사 박물관입니다.", "Olympic history museum.", "Olympic Museum Lausanne"),
            ("플롱 지구", "Flon district", "카페·숍이 모인 재생 지구입니다.", "Cafés and shops in a reused quarter.", "Flon Lausanne"),
            ("에스플라나드", "Esplanade de Montbenon", "호수 전망 공원입니다.", "Lake-view park esplanade.", "Montbenon Lausanne"),
        ],
    },
    # —— Germany extras ——
    {
        "id": "dresden",
        "countryId": "de",
        "ko": "드레스덴",
        "en": "Dresden",
        "native": "Dresden",
        "blurb_ko": "엘베 강변의 바로크 도시. 츠빙거와 성모교회가 유명합니다.",
        "blurb_en": "Baroque Elbe city—Zwinger and Frauenkirche.",
        "highlights": [
            ("츠빙거 궁전", "Zwinger", "바로크 궁전·미술관입니다.", "Baroque palace and galleries.", "Zwinger Dresden"),
            ("성모교회", "Frauenkirche", "재건된 돔 교회입니다.", "Rebuilt dome church.", "Frauenkirche Dresden"),
            ("레지덴츠 궁전", "Residenzschloss", "왕궁 박물관입니다.", "Royal palace museums.", "Residenzschloss Dresden"),
            ("과정테라세", "Brühl's Terrace", "엘베를 내려다보는 ‘유럽의 발코니’입니다.", "Balcony of Europe over the Elbe.", "Brühl's Terrace"),
            ("노이슈타트", "Neustadt", "카페·거리 문화 지구입니다.", "Café and street-culture district.", "Äußere Neustadt"),
        ],
    },
    {
        "id": "heidelberg",
        "countryId": "de",
        "ko": "하이델베르크",
        "en": "Heidelberg",
        "native": "Heidelberg",
        "blurb_ko": "네카어 강변 대학 도시. 성과 구시가가 로맨틱합니다.",
        "blurb_en": "Romantic Neckar university town—castle and old town.",
        "highlights": [
            ("하이델베르크 성", "Heidelberg Castle", "언덕 위 성 유적과 전망입니다.", "Hilltop castle ruins and views.", "Heidelberg Castle"),
            ("구시가", "Old Town", "하우프트슈트라세 보행 거리입니다.", "Hauptstrasse pedestrian streets.", "Heidelberg Altstadt"),
            ("철학자의 길", "Philosophers' Walk", "성·강이 보이는 산책로입니다.", "Walk with castle and river views.", "Philosophenweg Heidelberg"),
            ("구다리", "Old Bridge", "네카어를 가로지르는 돌다리입니다.", "Stone bridge over the Neckar.", "Alte Brücke Heidelberg"),
            ("학생감옥", "Student Prison", "대학 역사 명소입니다.", "Historic university student prison.", "Studentenkarzer Heidelberg"),
        ],
    },
    {
        "id": "nuremberg",
        "countryId": "de",
        "ko": "뉘른베르크",
        "en": "Nuremberg",
        "native": "Nürnberg",
        "blurb_ko": "바이에른의 중세 도시. 황제성과 크리스마스 마켓으로 유명합니다.",
        "blurb_en": "Bavarian medieval city—Imperial Castle and Christmas markets.",
        "highlights": [
            ("황제성", "Imperial Castle", "도시를 내려다보는 성입니다.", "Castle overlooking the city.", "Nuremberg Castle"),
            ("주요 시장광장", "Hauptmarkt", "분수와 마켓이 있는 광장입니다.", "Square with fountain and markets.", "Hauptmarkt Nuremberg"),
            ("성 로렌츠 교회", "St. Lorenz Church", "고딕 교회의 상징입니다.", "Landmark Gothic church.", "St Lorenz Nuremberg"),
            ("다큐멘테이션 센터", "Documentation Center", "전당 유적의 역사 전시입니다.", "History exhibit at the Nazi Party Rally Grounds.", "Documentation Center Nuremberg"),
            ("장난감 박물관", "Toy Museum", "장난감 역사 박물관입니다.", "Toy history museum.", "Spielzeugmuseum Nuremberg"),
        ],
    },
    # —— Italy extras ——
    {
        "id": "bologna",
        "countryId": "it",
        "ko": "볼로냐",
        "en": "Bologna",
        "native": "Bologna",
        "blurb_ko": "에밀리아의 미식 수도. 포르티코와 탑이 인상적입니다.",
        "blurb_en": "Emilia’s food capital—porticoes and towers.",
        "highlights": [
            ("두에 토리", "Two Towers", "기울어진 중세 탑입니다.", "Leaning medieval towers.", "Due Torri Bologna"),
            ("산토 스테파노", "Santo Stefano", "칠 교회 단지입니다.", "Complex of seven churches.", "Santo Stefano Bologna"),
            ("마조레 광장", "Piazza Maggiore", "시청과 대성당이 있는 광장입니다.", "Square with town hall and basilica.", "Piazza Maggiore Bologna"),
            ("포르티코 산책", "Porticoes", "유네스코 아케이드 거리입니다.", "UNESCO covered arcades.", "Portici Bologna"),
            ("쿠아트로 피우트", "Quadrilatero", "델리·시장 골목입니다.", "Deli and market lanes.", "Quadrilatero Bologna"),
        ],
    },
    {
        "id": "verona",
        "countryId": "it",
        "ko": "베로나",
        "en": "Verona",
        "native": "Verona",
        "blurb_ko": "로미오와 줄리엣의 도시. 원형경기장과 광장이 아름답습니다.",
        "blurb_en": "Romeo and Juliet city—arena and piazzas.",
        "highlights": [
            ("베로나 아레나", "Verona Arena", "로마 원형경기장·오페라입니다.", "Roman arena and opera.", "Arena di Verona"),
            ("줄리엣의 집", "Juliet's House", "발코니로 유명한 관광 명소입니다.", "Famous balcony landmark.", "Casa di Giulietta"),
            ("에르베 광장", "Piazza delle Erbe", "시장과 카페 광장입니다.", "Market and café square.", "Piazza delle Erbe Verona"),
            ("브라 광장", "Piazza Bra", "아레나 앞 대형 광장입니다.", "Grand square by the Arena.", "Piazza Bra"),
            ("스칼리제리 다리", "Ponte Scaligero", "성 옆의 돌다리입니다.", "Stone bridge by the castle.", "Ponte Scaligero"),
        ],
    },
    {
        "id": "turin",
        "countryId": "it",
        "ko": "토리노",
        "en": "Turin",
        "native": "Torino",
        "blurb_ko": "피에몬테의 우아한 도시. 카페·초콜릿·이집트 박물관이 유명합니다.",
        "blurb_en": "Elegant Piedmont city—cafés, chocolate, and the Egyptian Museum.",
        "highlights": [
            ("이집트 박물관", "Egyptian Museum", "세계적 이집트 컬렉션입니다.", "World-class Egyptian collection.", "Museo Egizio Turin"),
            ("몰레 안토넬리아나", "Mole Antonelliana", "영화박물관이 있는 탑입니다.", "Tower with the cinema museum.", "Mole Antonelliana"),
            ("산카를로 광장", "Piazza San Carlo", "아케이드 카페 광장입니다.", "Arcade café square.", "Piazza San Carlo Turin"),
            ("포 강변", "Po riverside", "강변 산책로입니다.", "Riverside promenade.", "Fiume Po Turin"),
            ("수페르가", "Basilica di Superga", "언덕 위 성당·전망입니다.", "Hilltop basilica views.", "Basilica di Superga"),
        ],
    },
]

EXTRA_CITY_IDS = {
    "fr": ["strasbourg", "annecy", "avignon"],
    "ch": ["basel", "zermatt", "lausanne"],
    "de": ["dresden", "heidelberg", "nuremberg"],
    "it": ["bologna", "verona", "turin"],
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
    if 'id: "strasbourg"' in text:
        print("extra cities already present — skip cities")
        return
    marker = "\n]\n\nexport function getCity"
    blocks = ",\n".join(city_block(c) for c in CITIES)
    text = text.replace(marker, ",\n" + blocks + marker, 1)
    path.write_text(text, encoding="utf-8")
    print(f"appended {len(CITIES)} cities")


def patch_country_city_ids() -> None:
    path = DATA / "countries.ts"
    text = path.read_text(encoding="utf-8")
    replacements = {
        "fr": "['paris', 'lyon', 'marseille', 'nice', 'bordeaux', 'strasbourg', 'annecy', 'avignon']",
        "ch": "['zurich', 'geneva', 'bern', 'lucerne', 'interlaken', 'basel', 'zermatt', 'lausanne']",
        "de": "['berlin', 'munich', 'hamburg', 'cologne', 'frankfurt', 'dresden', 'heidelberg', 'nuremberg']",
        "it": "['rome', 'milan', 'florence', 'venice', 'naples', 'bologna', 'verona', 'turin']",
    }
    for cc, new_ids in replacements.items():
        # replace cityIds line inside that country block only — match existing 5-city list
        import re

        pattern = rf"(id: '{cc}'[\s\S]*?cityIds: )(\[[^\]]+\])"
        m = re.search(pattern, text)
        if not m:
            raise SystemExit(f"country {cc} not found")
        if "strasbourg" in m.group(2) or "basel" in m.group(2) or "dresden" in m.group(2) or "bologna" in m.group(2):
            print(f"cityIds for {cc} already expanded")
            continue
        text = text[: m.start(2)] + new_ids + text[m.end(2) :]
        print(f"updated cityIds for {cc}")
    path.write_text(text, encoding="utf-8")


def append_to_extra_files() -> None:
    export = {"fr": "placesFRExtra", "ch": "placesCHExtra", "de": "placesDEExtra", "it": "placesITExtra"}
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
        # insert before final ]
        text = text.rstrip()
        if not text.endswith("]"):
            raise SystemExit(path)
        text = text[:-1].rstrip() + "\n\n" + "\n".join(lines) + "\n]\n"
        path.write_text(text, encoding="utf-8")
        print(f"appended dining places to {path.name}")


def append_category_rows() -> None:
    fashion, grocery, asian = [], [], []
    for c in CITIES:
        city, label = c["id"], c["en"]
        for i, (name, addr, ko, en, rating, reviews) in enumerate(
            [
                (f"{label} fashion street", label, f"[패션] {label} 메인 패션 거리.", f"[Fashion] {label} fashion street.", 4.3, 1400),
                (f"{label} outlet / day trip", label, f"[아울렛] {label} 권역 아울렛.", f"[Outlet] {label}-area outlet.", 4.2, 1200),
                (f"{label} mall fashion", label, f"[패션] {label} 몰 패션.", f"[Fashion] {label} mall fashion.", 4.2, 1000),
            ],
            1,
        ):
            fashion.append(place_line(city, "fashion", i, name, rating, addr, ko, en, reviews))
        for i, (name, addr, ko, en, rating, reviews) in enumerate(
            [
                (f"{label} food market", label, f"[식료품] {label} 식료품 마켓.", f"[Grocery] {label} food market.", 4.4, 2200),
                (f"Hypermarket near {label}", label, f"[대형마트] {label} 근교 대형마트.", f"[Hypermarket] Near {label}.", 4.1, 1600),
                (f"Supermarket {label}", label, f"[슈퍼] {label} 슈퍼마켓.", f"[Supermarket] {label} supermarket.", 4.0, 1200),
                (f"Specialty groceries {label}", label, f"[식료품점] 특산·유기농 식료품.", f"[Grocery] Specialty groceries.", 4.3, 800),
            ],
            1,
        ):
            grocery.append(place_line(city, "grocery", i, name, rating, addr, ko, en, reviews))
        for i, (name, addr, ko, en, rating, reviews) in enumerate(
            [
                (f"Asian dining {label}", label, "아시안 다이닝.", "Asian dining.", 4.3, 700),
                (f"Sushi / ramen {label}", label, "스시·라멘.", "Sushi and ramen.", 4.3, 600),
                (f"Thai / Vietnamese {label}", label, "태국·베트남.", "Thai and Vietnamese.", 4.2, 550),
            ],
            1,
        ):
            asian.append(place_line(city, "asian", i, name, rating, addr, ko, en, reviews))

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
        text = text[:-1].rstrip() + "\n\n  // —— fr/ch/de/it city extras ——\n" + "\n".join(rows) + "\n]\n"
        path.write_text(text, encoding="utf-8")
        print(f"appended {len(rows)} to {path.name}")


def fix_annecy_blurb() -> None:
    """Avoid broken JS if Petite France quote issues — already used straight text in cities."""
    pass


def main() -> None:
    # Fix Annecy blurb: don't use curly quotes that break - use ASCII
    for c in CITIES:
        if c["id"] == "annecy":
            pass
        if c["id"] == "strasbourg":
            c["blurb_ko"] = "알자스 중심 도시. 대성당과 프티트 프랑스 운하 지구가 유명합니다."
    append_cities()
    patch_country_city_ids()
    append_to_extra_files()
    append_category_rows()


if __name__ == "__main__":
    main()
