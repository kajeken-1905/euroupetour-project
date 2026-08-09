#!/usr/bin/env python3
"""Add Nazaré, Guimarães (PT) and Nerja, Gibraltar (ES)."""

from __future__ import annotations

import json
import re
import ssl
import time
import urllib.error
import urllib.parse
import urllib.request
from io import BytesIO
from pathlib import Path

import certifi
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
UA = "MyVacationPlan/1.0 (educational class project)"
CTX = ssl.create_default_context(cafile=certifi.where())


def hl(city: str, n: int, ko: str, en: str, dko: str, den: str, query: str) -> str:
    q = urllib.parse.quote(query)
    return f"""      {{
        id: "{city}-h{n}",
        name: {{ ko: "{ko}", en: "{en}" }},
        description: {{ ko: "{dko}", en: "{den}" }},
        image: "/highlights/{city}-{n}.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query={q}",
      }}"""


def city_block(city_id, country, ko, en, native, bko, ben, hs) -> str:
    items = [hl(city_id, i, *h) for i, h in enumerate(hs, 1)]
    joined = ",\n".join(items)
    return f"""  {{
    id: "{city_id}",
    countryId: "{country}",
    signatureImage: "/cities/{city_id}.jpg",
    name: {{ ko: "{ko}", en: "{en}" }},
    nativeName: "{native}",
    blurb: {{
      ko: "{bko}",
      en: "{ben}",
    }},
    highlights: [
{joined}
    ],
  }},
"""


NAZARE = city_block(
    "nazare", "pt", "나자레", "Nazaré", "Nazaré",
    "대서양 빅웨이브로 유명한 어촌·해변 마을. 시티우 전망대가 상징입니다.",
    "Atlantic big-wave town—Sítio viewpoints overlook the coast.",
    [
        ("나자레 해변", "Nazaré Beach", "시내 앞 모래사장과 산책로입니다.", "Town beach and promenade.", "Praia da Nazaré"),
        ("시티우 전망대", "Sítio viewpoint", "빅웨이브와 해안을 내려다보는 언덕입니다.", "Hilltop views of big waves and coast.", "Sítio Nazaré miradouro"),
        ("상 미겔 아르칸주 요새", "Forte de São Miguel Arcanjo", "파도 관측으로 유명한 해안 요새입니다.", "Coastal fort known for wave watching.", "Forte de São Miguel Arcanjo Nazaré"),
        ("나자레 케이블카", "Nazaré funicular", "시티우와 해변을 잇는 케이블카입니다.", "Funicular linking Sítio and the beach.", "Elevador da Nazaré"),
        ("북해변", "Praia do Norte", "빅웨이브 시즌의 핵심 해변입니다.", "Prime beach for big-wave season.", "Praia do Norte Nazaré"),
    ],
)
GUIMARAES = city_block(
    "guimaraes", "pt", "기마랑이스", "Guimarães", "Guimarães",
    "포르투갈의 발상지로 불리는 도시. 성과 유네스코 구시가가 매력입니다.",
    "Birthplace of Portugal—castle and UNESCO old town.",
    [
        ("기마랑이스 성", "Guimarães Castle", "중세 성벽과 탑이 남은 성입니다.", "Medieval castle with walls and keep.", "Castelo de Guimarães"),
        ("브라간사 공작 궁전", "Palace of the Dukes of Braganza", "중세 벽돌 궁전과 박물관입니다.", "Brick ducal palace and museum.", "Paço dos Duques de Bragança"),
        ("올리베이라 광장", "Largo da Oliveira", "구시가 중심의 광장과 기념비입니다.", "Old-town square with landmark pavilion.", "Largo da Oliveira Guimarães"),
        ("역사 지구", "Historic Centre", "유네스코 등재 중세 골목입니다.", "UNESCO-listed medieval lanes.", "Centro Histórico Guimarães"),
        ("펜야 산", "Monte da Penha", "케이블카로 올라가는 전망 언덕입니다.", "Viewpoint hill with cable car.", "Santuário da Penha Guimarães"),
    ],
)
NERJA = city_block(
    "nerja", "es", "네르하", "Nerja", "Nerja",
    "코스타 델 솔의 백인 마을. 유럽 발코니와 동굴이 유명합니다.",
    "Costa del Sol white town—Balcón de Europa and caves.",
    [
        ("유럽 발코니", "Balcón de Europa", "바다 절벽 위 전망 테라스입니다.", "Cliff-edge sea viewpoint terrace.", "Balcón de Europa Nerja"),
        ("네르하 동굴", "Cueva de Nerja", "선사 유적과 종유석 동굴입니다.", "Show cave with prehistoric finds.", "Cueva de Nerja"),
        ("부리아나 해변", "Playa de Burriana", "마을 옆 인기 모래 해변입니다.", "Popular sandy beach by town.", "Playa de Burriana Nerja"),
        ("엘살바도르 교회", "Iglesia El Salvador", "발코니 옆 흰 교회입니다.", "White church beside the balcón.", "Iglesia El Salvador Nerja"),
        ("네르하 수도교", "Acueducto del Águila", "아치형 역사 수도교입니다.", "Historic arched aqueduct.", "Acueducto del Águila Nerja"),
    ],
)
GIBRALTAR = city_block(
    "gibraltar", "es", "지브롤터", "Gibraltar", "Gibraltar",
    "영국령 바위 항구 도시. 바위·케이블카·유인원이 상징이며 스페인 남부 당일치기로 많이 갑니다.",
    "British rock territory—Upper Rock, cable car, macaques; popular Spain day trip.",
    [
        ("지브롤터 바위", "Rock of Gibraltar", "상단 암벽 자연보호구역입니다.", "Upper Rock Nature Reserve.", "Rock of Gibraltar Upper Rock"),
        ("케이블카", "Gibraltar Cable Car", "바위 정상으로 오르는 케이블카입니다.", "Cable car to the Upper Rock.", "Gibraltar Cable Car"),
        ("성 미카엘 동굴", "St. Michael's Cave", "조명 쇼가 있는 천연 동굴입니다.", "Lit natural show cave.", "St Michael's Cave Gibraltar"),
        ("바르버리 원숭이", "Barbary macaques", "유럽 유일의 야생 원숭이입니다.", "Europe’s only wild monkeys.", "Barbary macaques Gibraltar"),
        ("유로파 포인트", "Europa Point", "지중해·대서양이 만나는 남단입니다.", "Southern tip of the Rock.", "Europa Point Gibraltar"),
    ],
)


def dining(city: str, label: str) -> str:
    return f"""
  // —— {city} ——
  place('{city}-fine_dining-1', '{city}', 'fine_dining', '{label} Fine Dining 1', 4.5, '{label}', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', {{ reviewCount: 640 }}),
  place('{city}-fine_dining-2', '{city}', 'fine_dining', '{label} Fine Dining 2', 4.4, '{label}', '모던 로컬 다이닝.', 'Modern local dining.', {{ reviewCount: 520 }}),
  place('{city}-fine_dining-3', '{city}', 'fine_dining', '{label} Fine Dining 3', 4.3, '{label}', '클래식 다이닝.', 'Classic dining.', {{ reviewCount: 480 }}),
  place('{city}-fine_dining-4', '{city}', 'fine_dining', '{label} Bistro', 4.3, '{label}', '캐주얼 파인 비스트로.', 'Casual fine bistro.', {{ reviewCount: 700 }}),
  place('{city}-fine_dining-5', '{city}', 'fine_dining', '{label} Chef\\'s Table', 4.4, '{label}', '셰프 테이블.', 'Chef’s table.', {{ reviewCount: 390 }}),
  place('{city}-bakery-1', '{city}', 'bakery', '{label} Bakery', 4.5, '{label}', '빵·페이스트리.', 'Bread and pastries.', {{ reviewCount: 900 }}),
  place('{city}-bakery-2', '{city}', 'bakery', '{label} Patisserie', 4.4, '{label}', '페이스트리 숍.', 'Pastry shop.', {{ reviewCount: 720 }}),
  place('{city}-bakery-3', '{city}', 'bakery', '{label} Bread House', 4.3, '{label}', '로컬 빵집.', 'Local bakery.', {{ reviewCount: 580 }}),
  place('{city}-bakery-4', '{city}', 'bakery', 'Café Bakery {label}', 4.3, '{label}', '베이커리 카페.', 'Bakery café.', {{ reviewCount: 640 }}),
  place('{city}-cafe-1', '{city}', 'cafe', 'Specialty Coffee {label}', 4.5, '{label}', '스페셜티 커피.', 'Specialty coffee.', {{ reviewCount: 1100 }}),
  place('{city}-cafe-2', '{city}', 'cafe', 'Old Town Café {label}', 4.4, '{label}', '구시가 카페.', 'Old-town café.', {{ reviewCount: 980 }}),
  place('{city}-cafe-3', '{city}', 'cafe', 'Brunch Café {label}', 4.3, '{label}', '브런치 카페.', 'Brunch café.', {{ reviewCount: 860 }}),
  place('{city}-cafe-4', '{city}', 'cafe', 'Espresso Bar {label}', 4.3, '{label}', '에스프레소 바.', 'Espresso bar.', {{ reviewCount: 720 }}),
  place('{city}-korean-1', '{city}', 'korean', 'Korean Kitchen {label}', 4.4, '{label}', '캐주얼 한식.', 'Casual Korean.', {{ reviewCount: 640 }}),
  place('{city}-korean-2', '{city}', 'korean', 'Bibimbap {label}', 4.3, '{label}', '비빔밥·덮밥.', 'Bibimbap bowls.', {{ reviewCount: 520 }}),
  place('{city}-korean-3', '{city}', 'korean', 'Korean BBQ {label}', 4.3, '{label}', '고기구이.', 'Korean BBQ.', {{ reviewCount: 480 }}),
  place('{city}-korean-4', '{city}', 'korean', 'Kimchi House {label}', 4.2, '{label}', '김치·반찬 중심.', 'Kimchi-focused Korean.', {{ reviewCount: 390 }}),
"""


def asian(city: str, label: str) -> str:
    return f"""  place('{city}-asian-1', '{city}', 'asian', 'Asian dining {label}', 4.3, '{label}', '아시안 다이닝.', 'Asian dining.', {{ reviewCount: 700 }}),
  place('{city}-asian-2', '{city}', 'asian', 'Sushi / ramen {label}', 4.3, '{label}', '스시·라멘.', 'Sushi and ramen.', {{ reviewCount: 600 }}),
  place('{city}-asian-3', '{city}', 'asian', 'Thai / Vietnamese {label}', 4.2, '{label}', '태국·베트남.', 'Thai and Vietnamese.', {{ reviewCount: 550 }}),
"""


def fashion(city: str, label: str) -> str:
    return f"""  place('{city}-fashion-1', '{city}', 'fashion', '{label} fashion street', 4.3, '{label}', '[패션] {label} 메인 패션 거리.', '[Fashion] {label} fashion street.', {{ reviewCount: 1400 }}),
  place('{city}-fashion-2', '{city}', 'fashion', '{label} outlet / day trip', 4.2, '{label}', '[아울렛] {label} 권역 아울렛.', '[Outlet] {label}-area outlet.', {{ reviewCount: 1200 }}),
  place('{city}-fashion-3', '{city}', 'fashion', '{label} mall fashion', 4.2, '{label}', '[패션] {label} 몰 패션.', '[Fashion] {label} mall fashion.', {{ reviewCount: 1000 }}),
"""


def grocery(city: str, label: str) -> str:
    return f"""  place('{city}-grocery-1', '{city}', 'grocery', '{label} food market', 4.4, '{label}', '[식료품] {label} 식료품 마켓.', '[Grocery] {label} food market.', {{ reviewCount: 2200 }}),
  place('{city}-grocery-2', '{city}', 'grocery', 'Hypermarket near {label}', 4.1, '{label}', '[대형마트] {label} 근교 대형마트.', '[Hypermarket] Near {label}.', {{ reviewCount: 1600 }}),
  place('{city}-grocery-3', '{city}', 'grocery', 'Supermarket {label}', 4.0, '{label}', '[슈퍼] {label} 슈퍼마켓.', '[Supermarket] {label} supermarket.', {{ reviewCount: 1200 }}),
  place('{city}-grocery-4', '{city}', 'grocery', 'Specialty groceries {label}', 4.3, '{label}', '[식료품점] 특산·유기농 식료품.', '[Grocery] Specialty groceries.', {{ reviewCount: 800 }}),
"""


PHOTO_JOBS = [
    ("cities/nazare.jpg", "Nazaré Portugal beach Sitio viewpoint"),
    ("highlights/nazare-1.jpg", "Nazaré Portugal beach promenade"),
    ("highlights/nazare-2.jpg", "Nazaré Sitio viewpoint Portugal"),
    ("highlights/nazare-3.jpg", "Forte São Miguel Arcanjo Nazaré"),
    ("highlights/nazare-4.jpg", "Nazaré funicular elevador Portugal"),
    ("highlights/nazare-5.jpg", "Praia do Norte Nazaré big wave"),
    ("cities/guimaraes.jpg", "Guimarães Castle Portugal old town"),
    ("highlights/guimaraes-1.jpg", "Castelo de Guimarães Portugal"),
    ("highlights/guimaraes-2.jpg", "Paço dos Duques de Bragança Guimarães"),
    ("highlights/guimaraes-3.jpg", "Largo da Oliveira Guimarães"),
    ("highlights/guimaraes-4.jpg", "Centro Histórico Guimarães streets"),
    ("highlights/guimaraes-5.jpg", "Santuário da Penha Guimarães"),
    ("cities/nerja.jpg", "Nerja Balcón de Europa Spain"),
    ("highlights/nerja-1.jpg", "Balcón de Europa Nerja Spain"),
    ("highlights/nerja-2.jpg", "Cueva de Nerja Spain cave"),
    ("highlights/nerja-3.jpg", "Playa de Burriana Nerja beach"),
    ("highlights/nerja-4.jpg", "Iglesia El Salvador Nerja"),
    ("highlights/nerja-5.jpg", "Acueducto del Águila Nerja"),
    ("cities/gibraltar.jpg", "Rock of Gibraltar cable car view"),
    ("highlights/gibraltar-1.jpg", "Upper Rock Gibraltar nature reserve"),
    ("highlights/gibraltar-2.jpg", "Gibraltar Cable Car"),
    ("highlights/gibraltar-3.jpg", "St Michael's Cave Gibraltar"),
    ("highlights/gibraltar-4.jpg", "Barbary macaques Gibraltar"),
    ("highlights/gibraltar-5.jpg", "Europa Point Gibraltar lighthouse"),
]


def open_url(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json,image/*"})
    for attempt in range(6):
        try:
            with urllib.request.urlopen(req, timeout=45, context=CTX) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code in (429, 503):
                time.sleep(min(40, 2 ** attempt))
                continue
            raise
        except Exception:
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(url)


def find_openverse(query: str) -> str | None:
    qs = urllib.parse.urlencode(
        {
            "q": query,
            "page_size": "8",
            "license": "cc0,pdm,by,by-sa,by-nc,by-nd,by-nc-sa,by-nc-nd",
            "category": "photograph",
        }
    )
    data = json.loads(open_url("https://api.openverse.org/v1/images/?" + qs).decode())
    for item in data.get("results") or []:
        src = item.get("url") or item.get("thumbnail")
        if src:
            return src
    return None


def find_wikimedia(query: str) -> str | None:
    qs = urllib.parse.urlencode(
        {
            "action": "query",
            "format": "json",
            "generator": "search",
            "gsrsearch": query,
            "gsrlimit": "5",
            "gsrnamespace": "6",
            "prop": "imageinfo",
            "iiprop": "url",
            "iiurlwidth": "1600",
        }
    )
    data = json.loads(open_url("https://commons.wikimedia.org/w/api.php?" + qs).decode())
    pages = (data.get("query") or {}).get("pages") or {}
    for page in pages.values():
        infos = page.get("imageinfo") or []
        if infos:
            return infos[0].get("thumburl") or infos[0].get("url")
    return None


def save_cover(rel: str, query: str) -> None:
    out = ROOT / "public" / rel
    out.parent.mkdir(parents=True, exist_ok=True)
    if out.exists() and out.stat().st_size > 20_000:
        print(f"KEEP {rel}")
        return
    src = find_openverse(query) or find_wikimedia(query)
    if not src:
        print(f"MISS {rel} :: {query}")
        return
    raw = open_url(src)
    img = Image.open(BytesIO(raw)).convert("RGB")
    img.thumbnail((1600, 1600))
    img.save(out, "JPEG", quality=85, optimize=True)
    print(f"OK {rel}")
    time.sleep(0.35)


def insert_before_closing(path: Path, block: str, already: str) -> None:
    text = path.read_text(encoding="utf-8")
    if already in text:
        print(f"skip {path.name}")
        return
    text2, n = re.subn(r"\n\]\s*$", "\n" + block + "\n]\n", text, count=1)
    if n != 1:
        raise SystemExit(f"could not append to {path}")
    path.write_text(text2, encoding="utf-8")
    print(f"appended {path.name}")


def append_after(path: Path, token: str, block: str, already: str) -> None:
    text = path.read_text(encoding="utf-8")
    if already in text:
        print(f"skip {path.name}")
        return
    if token not in text:
        raise SystemExit(f"token missing in {path.name}")
    path.write_text(text.replace(token, token + "\n" + block, 1), encoding="utf-8")
    print(f"updated {path.name}")


def main() -> None:
    cities_path = ROOT / "src/data/cities.ts"
    cities = cities_path.read_text(encoding="utf-8")
    if 'id: "nazare"' not in cities:
        m = re.search(r'(id: "braga",[\s\S]*?highlights: \[[\s\S]*?\],\n  \},\n)', cities)
        if not m:
            raise SystemExit("braga not found")
        cities = cities.replace(m.group(1), m.group(1) + NAZARE + GUIMARAES, 1)
        m2 = re.search(r'(id: "girona",[\s\S]*?highlights: \[[\s\S]*?\],\n  \},\n)', cities)
        if not m2:
            raise SystemExit("girona not found")
        cities = cities.replace(m2.group(1), m2.group(1) + NERJA + GIBRALTAR, 1)
        cities_path.write_text(cities, encoding="utf-8")
        print("cities.ts updated")
    else:
        print("cities already present")

    countries = ROOT / "src/data/countries.ts"
    ct = countries.read_text(encoding="utf-8")
    ct = ct.replace(
        "cityIds: ['madrid', 'barcelona', 'palma', 'seville', 'granada', 'valencia', 'malaga', 'bilbao', 'toledo', 'cordoba', 'san-sebastian', 'zaragoza', 'salamanca', 'santiago', 'segovia', 'ronda', 'girona'],",
        "cityIds: ['madrid', 'barcelona', 'palma', 'seville', 'granada', 'valencia', 'malaga', 'bilbao', 'toledo', 'cordoba', 'san-sebastian', 'zaragoza', 'salamanca', 'santiago', 'segovia', 'ronda', 'girona', 'nerja', 'gibraltar'],",
    )
    ct = ct.replace(
        "cityIds: ['lisbon', 'porto', 'sintra', 'faro', 'coimbra', 'funchal', 'lagos', 'cascais', 'aveiro', 'fatima', 'evora', 'obidos', 'braga'],",
        "cityIds: ['lisbon', 'porto', 'sintra', 'faro', 'coimbra', 'funchal', 'lagos', 'cascais', 'aveiro', 'fatima', 'evora', 'obidos', 'braga', 'nazare', 'guimaraes'],",
    )
    countries.write_text(ct, encoding="utf-8")
    print("countries.ts updated")

    insert_before_closing(
        ROOT / "src/data/places-pt-extra.ts",
        dining("nazare", "Nazaré") + dining("guimaraes", "Guimarães"),
        "nazare-fine_dining-1",
    )
    insert_before_closing(
        ROOT / "src/data/places-es-extra.ts",
        dining("nerja", "Nerja") + dining("gibraltar", "Gibraltar"),
        "nerja-fine_dining-1",
    )

    extra_cities = [
        ("nazare", "Nazaré"),
        ("guimaraes", "Guimarães"),
        ("nerja", "Nerja"),
        ("gibraltar", "Gibraltar"),
    ]
    append_after(
        ROOT / "src/data/places-asian.ts",
        "place('palma-asian-3', 'palma', 'asian', 'Thai / Vietnamese Palma', 4.2, 'Palma', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 550 }),",
        "".join(asian(c, l) for c, l in extra_cities),
        "nazare-asian-1",
    )
    append_after(
        ROOT / "src/data/places-fashion.ts",
        "place('palma-fashion-3', 'palma', 'fashion', 'Palma mall fashion', 4.2, 'Palma', '[패션] Palma 몰 패션.', '[Fashion] Palma mall fashion.', { reviewCount: 1000 }),",
        "".join(fashion(c, l) for c, l in extra_cities),
        "nazare-fashion-1",
    )
    append_after(
        ROOT / "src/data/places-grocery.ts",
        "place('palma-grocery-4', 'palma', 'grocery', 'Specialty groceries Palma', 4.3, 'Palma', '[식료품점] 특산·유기농 식료품.', '[Grocery] Specialty groceries.', { reviewCount: 800 }),",
        "".join(grocery(c, l) for c, l in extra_cities),
        "nazare-grocery-1",
    )

    print("fetching photos...")
    for rel, query in PHOTO_JOBS:
        try:
            save_cover(rel, query)
        except Exception as e:
            print(f"ERR {rel}: {e}")


if __name__ == "__main__":
    main()
