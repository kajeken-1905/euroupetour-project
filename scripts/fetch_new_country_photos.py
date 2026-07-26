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
    # Slovakia cities
    ("cities/bratislava.jpg", "Bratislava Castle Slovakia Danube"),
    ("cities/kosice.jpg", "Kosice Slovakia St Elizabeth Cathedral"),
    ("cities/poprad.jpg", "Poprad Slovakia High Tatras"),
    ("cities/banska-bystrica.jpg", "Banska Bystrica Slovakia SNP Square"),
    ("cities/trencin.jpg", "Trencin Castle Slovakia"),
    # Slovenia cities
    ("cities/ljubljana.jpg", "Ljubljana Castle Slovenia old town"),
    ("cities/bled.jpg", "Lake Bled Slovenia island church"),
    ("cities/piran.jpg", "Piran Slovenia Tartini Square Adriatic"),
    ("cities/maribor.jpg", "Maribor Slovenia old town Drava"),
    ("cities/postojna.jpg", "Postojna Cave Slovenia"),
    # Bosnia cities
    ("cities/sarajevo.jpg", "Sarajevo Bosnia Bascarsija"),
    ("cities/mostar.jpg", "Mostar Old Bridge Bosnia"),
    ("cities/banja-luka.jpg", "Banja Luka Bosnia Kastel fortress"),
    ("cities/travnik.jpg", "Travnik Bosnia old town fortress"),
    # Montenegro cities
    ("cities/kotor.jpg", "Kotor Bay Montenegro old town"),
    ("cities/budva.jpg", "Budva old town Montenegro Adriatic"),
    ("cities/podgorica.jpg", "Podgorica Montenegro Millennium Bridge"),
    ("cities/herceg-novi.jpg", "Herceg Novi Montenegro bay"),
    # Serbia cities
    ("cities/belgrade.jpg", "Belgrade Fortress Kalemegdan Serbia"),
    ("cities/novi-sad.jpg", "Novi Sad Serbia Petrovaradin fortress"),
    ("cities/nis.jpg", "Nis Serbia fortress city"),
    ("cities/subotica.jpg", "Subotica Serbia City Hall Art Nouveau"),
    # Landmarks
    ("landmarks/landmark-sk.jpg", "Bratislava Castle Slovakia"),
    ("landmarks/landmark-si.jpg", "Lake Bled Slovenia island"),
    ("landmarks/landmark-ba.jpg", "Mostar Old Bridge Stari Most Bosnia"),
    ("landmarks/landmark-me.jpg", "Kotor Bay Montenegro"),
    ("landmarks/landmark-rs.jpg", "Belgrade Fortress Kalemegdan Serbia"),
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
