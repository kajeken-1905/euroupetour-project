#!/usr/bin/env python3
"""Fetch Openverse (Wikimedia fallback) photos for city signatures + landmarks.

Force-overwrites existing files so small placeholders are replaced.
"""

from __future__ import annotations

import json
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

# Force overwrite always (user requested real photos for new countries).
FORCE = True

JOBS = [
    # Georgia
    ("cities/tbilisi.jpg", "Tbilisi old town Narikala Georgia"),
    ("cities/batumi.jpg", "Batumi Georgia Black Sea boulevard"),
    ("cities/kutaisi.jpg", "Kutaisi Georgia Bagrati Cathedral"),
    ("cities/stepantsminda.jpg", "Stepantsminda Kazbegi Gergeti Trinity Church"),
    ("cities/sighnaghi.jpg", "Sighnaghi Georgia Kakheti wall town"),
    # North Macedonia
    ("cities/skopje.jpg", "Skopje Macedonia Stone Bridge plaza"),
    ("cities/ohrid.jpg", "Ohrid lake Macedonia old town"),
    ("cities/bitola.jpg", "Bitola Macedonia Sirok Sokak"),
    ("cities/tetovo.jpg", "Tetovo Macedonia Painted Mosque"),
    # Cyprus
    ("cities/nicosia.jpg", "Nicosia Cyprus old town Venetian walls"),
    ("cities/limassol.jpg", "Limassol Cyprus marina seafront"),
    ("cities/paphos.jpg", "Paphos Cyprus harbour castle"),
    ("cities/ayia-napa.jpg", "Ayia Napa Cyprus beach cape greco"),
    # Albania
    ("cities/tirana.jpg", "Tirana Albania Skanderbeg Square"),
    ("cities/berat.jpg", "Berat Albania white ottoman houses"),
    ("cities/gjirokaster.jpg", "Gjirokaster Albania stone old town"),
    ("cities/sarande.jpg", "Sarande Albania Ionian seafront"),
    # Malta
    ("cities/valletta.jpg", "Valletta Malta harbour fortifications"),
    ("cities/mdina.jpg", "Mdina Malta silent city walls"),
    ("cities/gozo.jpg", "Gozo Malta Victoria Citadel"),
    # Estonia
    ("cities/tallinn.jpg", "Tallinn Estonia old town walls"),
    ("cities/tartu.jpg", "Tartu Estonia town hall square"),
    ("cities/parnu.jpg", "Parnu Estonia beach promenade"),
    # Latvia
    ("cities/riga.jpg", "Riga Latvia old town house of blackheads"),
    ("cities/jurmala.jpg", "Jurmala Latvia wooden villas beach"),
    ("cities/sigulda.jpg", "Sigulda Latvia Turaida castle Gauja"),
    # Lithuania
    ("cities/vilnius.jpg", "Vilnius Lithuania old town cathedral"),
    ("cities/kaunas.jpg", "Kaunas Lithuania old town town hall"),
    ("cities/klaipeda.jpg", "Klaipeda Lithuania old town theatre square"),
    # Landmarks
    ("landmarks/landmark-ge.jpg", "Tbilisi Narikala old town Georgia"),
    ("landmarks/landmark-mk.jpg", "Ohrid lake Macedonia church"),
    ("landmarks/landmark-cy.jpg", "Paphos Aphrodite Rock Cyprus"),
    ("landmarks/landmark-al.jpg", "Berat Albania ottoman houses UNESCO"),
    ("landmarks/landmark-mt.jpg", "Valletta Malta Grand Harbour"),
    ("landmarks/landmark-ee.jpg", "Tallinn old town Estonia"),
    ("landmarks/landmark-lv.jpg", "Riga old town Latvia"),
    ("landmarks/landmark-lt.jpg", "Vilnius old town Lithuania"),
]



def open_url(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json,image/*"})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=45, context=CTX) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code in (429, 503):
                time.sleep(min(30, 2**attempt))
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
    # retry without category
    qs2 = urllib.parse.urlencode(
        {
            "q": query,
            "page_size": "8",
            "license": "cc0,pdm,by,by-sa,by-nc,by-nd,by-nc-sa,by-nc-nd",
        }
    )
    data = json.loads(open_url("https://api.openverse.org/v1/images/?" + qs2).decode())
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
            "iiprop": "url|mime|size",
            "iiurlwidth": "1600",
        }
    )
    data = json.loads(open_url("https://commons.wikimedia.org/w/api.php?" + qs).decode())
    pages = (data.get("query") or {}).get("pages") or {}
    for page in pages.values():
        infos = page.get("imageinfo") or []
        if not infos:
            continue
        info = infos[0]
        mime = (info.get("mime") or "").lower()
        if not mime.startswith("image/") or "svg" in mime:
            continue
        url = info.get("thumburl") or info.get("url")
        if url:
            return url
    return None


def find_image(query: str) -> str | None:
    src = find_openverse(query)
    if src:
        return src
    return find_wikimedia(query)


def save_cover(url: str, out: Path) -> None:
    raw = open_url(url)
    img = Image.open(BytesIO(raw)).convert("RGB")
    w, h = img.size
    target = 1200 / 800
    if w / h > target:
        nw = int(h * target)
        left = max(0, (w - nw) // 2)
        img = img.crop((left, 0, min(w, left + nw), h))
    else:
        nh = int(w / target)
        top = max(0, (h - nh) // 2)
        img = img.crop((0, top, w, min(h, top + nh)))
    img = img.resize((1200, 800), Image.Resampling.LANCZOS)
    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out, "JPEG", quality=85, optimize=True)


def main() -> None:
    ok = 0
    fail = 0
    for rel, query in JOBS:
        out = ROOT / "public" / rel
        if out.exists() and out.stat().st_size >= 30_000:
            print(f"skip {rel} ({out.stat().st_size // 1024}KB)")
            continue
        try:
            src = find_image(query)
            if not src:
                print(f"FAIL no image {rel} {query!r}")
                fail += 1
                continue
            save_cover(src, out)
            size = out.stat().st_size
            print(f"OK {rel} ({size // 1024}KB) <- {query!r}")
            ok += 1
        except Exception as e:
            print(f"FAIL {rel} {type(e).__name__}:{e}")
            fail += 1
        time.sleep(0.35)
    print(f"DONE ok={ok} fail={fail}")


if __name__ == "__main__":
    main()
