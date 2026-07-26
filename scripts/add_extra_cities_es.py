#!/usr/bin/env python3
"""Append extra tourist cities to Spain (es)."""

from __future__ import annotations

import re
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
    {
        "id": "zaragoza",
        "countryId": "es",
        "ko": "사라고사",
        "en": "Zaragoza",
        "native": "Zaragoza",
        "blurb_ko": "에브로 강변의 아라곤 수도. 필라르 성당과 무데하르 유산이 유명합니다.",
        "blurb_en": "Aragon capital on the Ebro—Basílica del Pilar and Mudéjar heritage.",
        "highlights": [
            ("필라르 대성당", "Basílica del Pilar", "에브로 강변의 상징 바로크 성당입니다.", "Iconic baroque basilica by the Ebro.", "Basílica del Pilar Zaragoza"),
            ("알하페리아 궁전", "Aljafería Palace", "이슬람 시대 요새 궁전입니다.", "Islamic-era fortified palace.", "Aljafería Zaragoza"),
            ("사라고사 대성당", "La Seo Cathedral", "타피스트리로 유명한 대성당입니다.", "Cathedral known for its tapestries.", "La Seo Zaragoza"),
            ("필라르 광장", "Plaza del Pilar", "성당 앞의 넓은 중심 광장입니다.", "Grand square in front of the basilica.", "Plaza del Pilar Zaragoza"),
            ("에브로 강변", "Ebro riverfront", "강변 산책과 다리 전망입니다.", "Riverside walks and bridge views.", "Ebro Zaragoza"),
        ],
    },
    {
        "id": "salamanca",
        "countryId": "es",
        "ko": "살라망카",
        "en": "Salamanca",
        "native": "Salamanca",
        "blurb_ko": "황금빛 대학 도시. 마요르 광장과 옛 대학이 여행의 중심입니다.",
        "blurb_en": "Golden university city—Plaza Mayor and the historic university.",
        "highlights": [
            ("마요르 광장", "Plaza Mayor", "스페인에서 가장 아름다운 광장 중 하나입니다.", "One of Spain’s finest main squares.", "Plaza Mayor Salamanca"),
            ("살라망카 대학", "University of Salamanca", "유럽 최고령급 대학 단지입니다.", "One of Europe’s oldest universities.", "Universidad de Salamanca"),
            ("새·옛 대성당", "New and Old Cathedrals", "이어진 두 대성당과 전망입니다.", "Twin cathedrals and rooftop views.", "Catedral de Salamanca"),
            ("로마 다리", "Roman Bridge", "톤메스 강을 건너는 고대 다리입니다.", "Ancient bridge over the Tormes.", "Puente Romano Salamanca"),
            ("조개집", "Casa de las Conchas", "조개 문양이 가득한 고딕 저택입니다.", "Gothic house covered in shell motifs.", "Casa de las Conchas"),
        ],
    },
    {
        "id": "santiago",
        "countryId": "es",
        "ko": "산티아고 데 콤포스텔라",
        "en": "Santiago de Compostela",
        "native": "Santiago de Compostela",
        "blurb_ko": "산티아고 순례길의 목적지. 대성당과 중세 구시가가 상징입니다.",
        "blurb_en": "End of the Camino—cathedral and medieval old town.",
        "highlights": [
            ("산티아고 대성당", "Santiago Cathedral", "순례의 종착 대성당입니다.", "Cathedral at the end of the Camino.", "Catedral de Santiago de Compostela"),
            ("오브라도이로 광장", "Praza do Obradoiro", "대성당 앞 순례 광장입니다.", "Pilgrim square before the cathedral.", "Praza do Obradoiro"),
            ("호스피탈 레이스", "Hostal dos Reis Católicos", "역사적 순례 숙소·파라도르입니다.", "Historic pilgrim hostel and parador.", "Hostal dos Reis Católicos"),
            ("퀸타나 광장", "Praza da Quintana", "돌계단이 인상적인 광장입니다.", "Stone-stepped square by the cathedral.", "Praza da Quintana"),
            ("알라메다 공원", "Alameda Park", "대성당이 보이는 공원 전망입니다.", "Park viewpoint over the cathedral.", "Parque da Alameda Santiago"),
        ],
    },
    {
        "id": "segovia",
        "countryId": "es",
        "ko": "세고비아",
        "en": "Segovia",
        "native": "Segovia",
        "blurb_ko": "로마 수도교와 동화 같은 알카사르의 도시. 마드리드 근교 데이트립입니다.",
        "blurb_en": "Roman aqueduct and fairy-tale Alcázar—classic Madrid day trip.",
        "highlights": [
            ("로마 수도교", "Aqueduct of Segovia", "도심을 가로지르는 로마 수도교입니다.", "Roman aqueduct cutting through town.", "Acueducto de Segovia"),
            ("세고비아 알카사르", "Alcázar of Segovia", "배 모양의 중세 요새 궁전입니다.", "Ship-shaped medieval fortress palace.", "Alcázar de Segovia"),
            ("세고비아 대성당", "Segovia Cathedral", "고딕 대성당입니다.", "Gothic cathedral.", "Catedral de Segovia"),
            ("후디에리아", "Jewish Quarter", "중세 유대인 지구 골목입니다.", "Medieval Jewish-quarter lanes.", "Judería Segovia"),
            ("아술라르 광장", "Plaza del Azoguejo", "수도교 아래 중심 광장입니다.", "Main square beneath the aqueduct.", "Plaza del Azoguejo"),
        ],
    },
    {
        "id": "ronda",
        "countryId": "es",
        "ko": "론다",
        "en": "Ronda",
        "native": "Ronda",
        "blurb_ko": "안달루시아의 절벽 도시. 누에보 다리와 협곡 전망이 압도적입니다.",
        "blurb_en": "Andalusian clifftop town—Puente Nuevo and gorge views.",
        "highlights": [
            ("누에보 다리", "Puente Nuevo", "엘타호 협곡을 잇는 상징 다리입니다.", "Iconic bridge over El Tajo gorge.", "Puente Nuevo Ronda"),
            ("엘타호 협곡", "El Tajo gorge", "도시를 둘로 가르는 깊은 협곡입니다.", "Deep gorge splitting the town.", "El Tajo Ronda"),
            ("론다 투우장", "Plaza de Toros", "스페인 최고령급 투우장입니다.", "One of Spain’s oldest bullrings.", "Plaza de Toros Ronda"),
            ("돈 보스코 하우스", "Casa del Rey Moro", "정원과 협곡 전망 저택입니다.", "Gardens and gorge-view mansion.", "Casa del Rey Moro Ronda"),
            ("알라메다 델 타호", "Alameda del Tajo", "절벽 끝 산책 공원입니다.", "Cliff-edge promenade park.", "Alameda del Tajo"),
        ],
    },
    {
        "id": "girona",
        "countryId": "es",
        "ko": "지로나",
        "en": "Girona",
        "native": "Girona",
        "blurb_ko": "카탈루냐의 중세 도시. 유대인 지구·성벽·다채로운 강변 집이 매력입니다.",
        "blurb_en": "Catalan medieval city—Jewish quarter, walls, and colourful river houses.",
        "highlights": [
            ("지로나 대성당", "Girona Cathedral", "거대한 고딕 계단 대성당입니다.", "Gothic cathedral with a vast stairway.", "Catedral de Girona"),
            ("유대인 지구", "Call Jueu", "잘 보존된 중세 유대인 골목입니다.", "Well-preserved medieval Jewish lanes.", "Call Jueu Girona"),
            ("성벽 산책", "Passeig de la Muralla", "도시 전망이 있는 성벽길입니다.", "Rampart walk with city views.", "Muralles de Girona"),
            ("오냐르 강변", "Onyar river houses", "알록달록 집이 늘어선 강변입니다.", "Colourful houses along the Onyar.", "Cases de l'Onyar"),
            ("아라비 목욕탕", "Banys Àrabs", "로마네스크 양식의 아랍 목욕탕입니다.", "Romanesque-style Arab baths.", "Banys Àrabs Girona"),
        ],
    },
]

EXTRA_IDS = [c["id"] for c in CITIES]
NEW_CITY_IDS = (
    "['madrid', 'barcelona', 'seville', 'granada', 'valencia', 'malaga', "
    "'bilbao', 'toledo', 'cordoba', 'san-sebastian', "
    "'zaragoza', 'salamanca', 'santiago', 'segovia', 'ronda', 'girona']"
)


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
    if 'id: "zaragoza"' in text:
        print("extra ES cities already present — skip cities")
        return
    blocks = ",\n".join(city_block(c) for c in CITIES)
    needle = '  },\n  {\n    id: "lisbon",'
    if needle not in text:
        raise SystemExit("could not find san-sebastian→lisbon boundary")
    text = text.replace(needle, "  },\n" + blocks + ",\n  {\n    id: \"lisbon\",", 1)
    path.write_text(text, encoding="utf-8")
    print(f"appended {len(CITIES)} ES cities before lisbon")


def patch_country_city_ids() -> None:
    path = DATA / "countries.ts"
    text = path.read_text(encoding="utf-8")
    pattern = r"(id: 'es'[\s\S]*?cityIds: )(\[[^\]]+\])"
    m = re.search(pattern, text)
    if not m:
        raise SystemExit("es country not found")
    if "zaragoza" in m.group(2):
        print("cityIds for es already expanded")
        return
    text = text[: m.start(2)] + NEW_CITY_IDS + text[m.end(2) :]
    path.write_text(text, encoding="utf-8")
    print("updated cityIds for es")


def append_to_extra_files() -> None:
    path = DATA / "places-es-extra.ts"
    text = path.read_text(encoding="utf-8")
    if "// —— zaragoza ——" in text:
        print("skip extra dining es")
        return
    labels = {c["id"]: c["en"] for c in CITIES}
    lines = []
    for city in EXTRA_IDS:
        dining = generic_dining(labels[city])
        lines.append(f"  // —— {city} ——")
        for cat in ("fine_dining", "bakery", "cafe", "korean"):
            for i, (name, rating, addr, ko, en, reviews) in enumerate(dining[cat], 1):
                lines.append(place_line(city, cat, i, name, rating, addr, ko, en, reviews))
        lines.append("")
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
        text = text[:-1].rstrip() + "\n\n  // —— es city extras ——\n" + "\n".join(rows) + "\n]\n"
        path.write_text(text, encoding="utf-8")
        print(f"appended {len(rows)} to {path.name}")


def main() -> None:
    append_cities()
    patch_country_city_ids()
    append_to_extra_files()
    append_category_rows()


if __name__ == "__main__":
    main()
