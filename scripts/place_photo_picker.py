#!/usr/bin/env python3
"""Find, review and apply in-venue photos for places (restaurants, bakeries, cafés).

Only CC0 / public domain / CC BY / CC BY-SA photos are kept (NC and ND are
excluded), and only photos whose title names the venue — i.e. taken at that
place, not a generic dish.

Work files live in a work directory (default: $PLACE_PICKER_DIR or ./.picker).

    search <set>          read <set>_cfg.json {pid: {name, city_ko?, q: [...], key: [...]}},
                          write <set>_res.json with candidates + thumbnails
    sheet  <set> <title>  write <set>_candidates.html — click a photo to pick it
                          (one per place), then "선택 저장"
    serve                 serve the work dir on http://127.0.0.1:8765; the sheet's
                          save button writes <set>_picks.json
    apply  <set> <label> [keys|@picks]
                          save chosen photos to public/places/<pid>.jpg (600px square),
                          set `image:` on the place() entries, append credits
"""
from __future__ import annotations

import glob
import hashlib
import html
import http.server
import json
import os
import re
import ssl
import sys
import time
import unicodedata
import urllib.error
import urllib.parse
import urllib.request
from io import BytesIO

import certifi
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WORK = os.environ.get("PLACE_PICKER_DIR") or os.path.join(ROOT, ".picker")
UA = "MyVacationPlan/1.0 (educational class project)"
CTX = ssl.create_default_context(cafile=certifi.where())
CAT_KO = {"fine_dining": "로컬푸드", "bakery": "베이커리", "cafe": "카페", "korean": "한식당"}


def get(url: str) -> bytes | None:
    for attempt in range(4):
        time.sleep(1.5)
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json,image/*"})
            return urllib.request.urlopen(req, context=CTX, timeout=60).read()
        except urllib.error.HTTPError as e:
            if e.code not in (429, 503):
                return None
            time.sleep(10 * (attempt + 1))
        except Exception:
            time.sleep(5)
    return None


def openverse(q: str, n: int = 8) -> list[dict]:
    r = get("https://api.openverse.org/v1/images/?" + urllib.parse.urlencode(
        {"q": q, "page_size": 20, "license": "cc0,pdm,by,by-sa"}))
    out = []
    for it in (json.loads(r).get("results", []) if r else []):
        if (it.get("width") or 999) < 700:
            continue
        lic = ((it.get("license") or "").upper() + " " + (it.get("license_version") or "")).strip()
        out.append({"title": it.get("title") or "", "page": it.get("foreign_landing_url"), "img": it.get("url"),
                    "thumb": it.get("thumbnail") or it.get("url"), "lic": lic, "artist": (it.get("creator") or "")[:60]})
        if len(out) >= n:
            break
    return out


def commons(q: str, n: int = 4) -> list[dict]:
    r = get("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode({
        "action": "query", "format": "json", "generator": "search", "gsrsearch": f"{q} filetype:bitmap",
        "gsrnamespace": 6, "gsrlimit": 12, "prop": "imageinfo", "iiprop": "url|size|extmetadata", "iiurlwidth": 900}))
    out = []
    pages = json.loads(r).get("query", {}).get("pages", {}).values() if r else []
    for p in sorted(pages, key=lambda p: p.get("index", 99)):
        ii = p["imageinfo"][0]
        if ii["width"] < 700:
            continue
        md = ii["extmetadata"]
        lic = md.get("LicenseShortName", {}).get("value", "")
        if not re.search("CC|Public domain|PD", lic) or re.search("ND|NC", lic):
            continue
        artist = re.sub("<[^>]+>", "", md.get("Artist", {}).get("value", "")).strip()[:60]
        out.append({"title": p["title"], "page": ii["descriptionurl"], "img": ii["url"], "thumb": ii["thumburl"],
                    "lic": lic, "artist": artist})
        if len(out) >= n:
            break
    return out


def norm(s: str) -> str:
    return unicodedata.normalize("NFKD", s or "").encode("ascii", "ignore").decode().lower()


def square(im: Image.Image, side: int | None = None) -> Image.Image:
    w, h = im.size
    m = min(w, h)
    c = im.crop(((w - m) // 2, (h - m) // 2, (w - m) // 2 + m, (h - m) // 2 + m))
    side = side or min(600, m)
    return c.resize((side, side), Image.LANCZOS)


def load(name: str):
    return json.load(open(os.path.join(WORK, name)))


def dump(obj, name: str) -> None:
    json.dump(obj, open(os.path.join(WORK, name), "w"), ensure_ascii=False, indent=1)


def cmd_search(s: str) -> None:
    cfg = load(f"{s}_cfg.json")
    rf = os.path.join(WORK, f"{s}_res.json")
    res = json.load(open(rf)) if os.path.exists(rf) else {}
    os.makedirs(os.path.join(WORK, "pl"), exist_ok=True)
    for pid, c in cfg.items():
        if pid in res:
            continue
        found, seen = [], set()
        for q in c["q"]:
            for x in openverse(q) + commons(q):
                if x["img"] in seen or not any(norm(k) in norm(x["title"]) for k in c["key"]):
                    continue
                seen.add(x["img"])
                found.append(x)
        for x in found:
            x["file"] = "pl/" + hashlib.md5(x["img"].encode()).hexdigest()[:10] + ".jpg"
            path = os.path.join(WORK, x["file"])
            if not os.path.exists(path):
                b = get(x["thumb"])
                if b:
                    open(path, "wb").write(b)
        res[pid] = [x for x in found if os.path.exists(os.path.join(WORK, x["file"]))]
        json.dump(res, open(rf, "w"), ensure_ascii=False, indent=1)
        print(pid, len(res[pid]), flush=True)


SHEET_CSS = """<style>body{font-family:-apple-system,sans-serif;background:#f4f1ec;margin:20px;color:#222}
.sec{margin:26px 0 10px}.row{background:#fff;border-radius:14px;padding:12px 16px;margin-bottom:12px}
h3{margin:0 0 8px;font-size:16px}.en{color:#999;font-size:12px;font-weight:500}.grid{display:flex;flex-wrap:wrap;gap:10px}
.c{width:270px}.c b{font-size:13px}.sq{display:flex;gap:8px;align-items:flex-end;margin-top:4px}
.sq img{border-radius:12px;object-fit:cover;border:1px solid #e5e0d8}
.tag{font-size:11px;background:#fde8c8;color:#8a4b00;padding:1px 6px;border-radius:6px}
.src{font-size:10px;color:#888;margin:4px 0 0;line-height:1.3}.none{color:#999;font-size:13px}
.pick{cursor:pointer;border-radius:14px;padding:6px;border:3px solid transparent;transition:.12s}
.pick:hover{background:#f7f3ec}.pick.sel{border-color:#1f7a4d;background:#eaf6ef}
.pick.sel b::after{content:"  ✓ 선택됨";color:#1f7a4d}
.nobox{width:140px;height:140px;border-radius:12px;border:2px dashed #ccc;display:flex;align-items:center;
justify-content:center;text-align:center;color:#999;font-size:13px}
.bar{position:sticky;top:0;z-index:9;background:#1f2a24;color:#fff;padding:12px 16px;border-radius:12px;
margin-bottom:14px;display:flex;gap:12px;align-items:center;flex-wrap:wrap}
.bar button{background:#3ecf8e;border:0;color:#062;font-weight:800;padding:10px 18px;border-radius:10px;font-size:15px;cursor:pointer}
.bar .msg{font-size:14px}</style>"""

SHEET_JS = """<script>
const SHEET=%s;
function pick(el){document.querySelectorAll('.pick[data-pid="'+el.dataset.pid+'"]').forEach(e=>e.classList.remove('sel'));
 el.classList.add('sel');count()}
function picks(){const o={};document.querySelectorAll('.pick.sel').forEach(e=>{if(e.dataset.key)o[e.dataset.pid]=e.dataset.key});return o}
function count(){document.getElementById('n').textContent=Object.keys(picks()).length}
async function save(){const p=picks(),m=document.getElementById('msg');
 try{const r=await fetch('/save?sheet='+SHEET,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({picks:p})});
  if(!r.ok)throw 0;m.textContent='✅ 저장 완료 ('+Object.keys(p).length+'곳). 대화창에 "선택했어"라고만 알려주세요.'}
 catch(e){const t=Object.values(p).join(', ');if(navigator.clipboard)navigator.clipboard.writeText(t);
  m.textContent='⚠ 저장 서버에 연결되지 않아 선택 목록을 클립보드에 복사했어요 → 대화창에 붙여넣어 주세요.'}}
</script>"""


def cmd_sheet(s: str, title: str) -> None:
    cfg, res = load(f"{s}_cfg.json"), load(f"{s}_res.json")
    os.makedirs(os.path.join(WORK, "t"), exist_ok=True)
    sec, sel, cur = [], {}, None
    for pid, c in cfg.items():
        cat = pid.split("-")[-2]
        if cat != cur:
            sec.append(f'<h2 class="sec">{CAT_KO[cat]}</h2>')
            cur = cat
        prefix = (c.get("city_ko") or "").replace(" ", "") or pid.rsplit("-", 2)[0]
        cards = []
        for j, x in enumerate(res.get(pid, []), 1):
            if j in c.get("drop", []):
                continue
            k = f"{prefix}-{cat.replace('fine_dining', 'food')}{pid.split('-')[-1]}-{j}"
            square(Image.open(os.path.join(WORK, x["file"])).convert("RGB"), 280).save(
                os.path.join(WORK, f"t/{s}_{k}.jpg"), quality=85)
            sel[k] = dict(pid=pid, **x)
            note = c.get("note", {}).get(str(j), "")
            tag = f" <span class=tag>{html.escape(note)}</span>" if note else ""
            cards.append(
                f'<div class="c pick" data-pid="{pid}" data-key="{k}" onclick="pick(this)"><b>{k}</b>{tag}'
                f'<div class="sq"><img src="t/{s}_{k}.jpg" width=104 height=104><img src="t/{s}_{k}.jpg" width=140 height=140></div>'
                f'<p class="src">{html.escape(x["title"][:70])}<br>{html.escape(x["lic"])} · {html.escape(x["artist"][:30])} · '
                f'<a href="{x["page"]}" target="_blank" onclick="event.stopPropagation()">원본</a></p></div>')
        if cards:
            cards.append(f'<div class="c pick sel" data-pid="{pid}" data-key="" onclick="pick(this)"><b>선택 안 함</b>'
                         f'<div class="sq"><div class="nobox">사진 보기<br>타일 유지</div></div></div>')
        body = "".join(cards) or '<p class="none">그 가게에서 찍은 CC 사진 없음 → "사진 보기(Google Maps)" 타일 유지</p>'
        sec.append(f'<section class="row"><h3>{html.escape(c["name"])} <span class="en">{pid}</span></h3>'
                   f'<div class="grid">{body}</div></section>')
    dump(sel, f"{s}_sel.json")
    bar = ('<div class="bar"><button onclick="save()">선택 저장</button><span class="msg">선택 <b id="n">0</b>곳 · '
           '사진을 클릭하면 선택돼요 (가게마다 1장) · <span id="msg"></span></span></div>')
    page = (f'<!doctype html><meta charset="utf-8"><title>{html.escape(title)}</title>{SHEET_CSS}'
            f'{SHEET_JS % json.dumps(s)}<h1>{html.escape(title)}</h1>'
            '<p>그 가게에서 찍은 것이 확인된 사진만 (NC·ND 제외) · 목록 104 / 상세 140 정사각형</p>'
            f'{bar}{"".join(sec)}')
    open(os.path.join(WORK, f"{s}_candidates.html"), "w").write(page)
    print(len(sel), "candidates →", f"http://127.0.0.1:8765/{s}_candidates.html")


def cmd_serve() -> None:
    os.chdir(WORK)

    class Handler(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass

        def do_POST(self):
            q = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            name = re.sub(r"[^\w-]", "", q.get("sheet", ["x"])[0])
            body = json.loads(self.rfile.read(int(self.headers["Content-Length"])) or b"{}")
            body["_saved"] = time.strftime("%Y-%m-%dT%H:%M:%S")
            json.dump(body, open(f"{name}_picks.json", "w"), ensure_ascii=False, indent=1)
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(b'{"ok":true}')

    http.server.ThreadingHTTPServer(("127.0.0.1", 8765), Handler).serve_forever()


def cmd_apply(s: str, label: str, which: str) -> None:
    sel = load(f"{s}_sel.json")
    keys = list(load(f"{s}_picks.json")["picks"].values()) if which == "@picks" else which.split(",")
    cred = {}
    for k in keys:
        x = sel[k]
        pid = x["pid"]
        b = get(x["img"])
        im = Image.open(BytesIO(b) if b else os.path.join(WORK, x["file"])).convert("RGB")
        out = square(im)
        out.save(os.path.join(ROOT, f"public/places/{pid}.jpg"), quality=85, optimize=True, progressive=True)
        cred[pid] = f'places/{pid}.jpg | {x["page"]} | {x["lic"]} | {x["artist"]}'
        print(k, pid, im.size, out.size, x["lic"])
    done = set()
    for f in glob.glob(os.path.join(ROOT, "src/data/places*.ts")):
        src = orig = open(f).read()
        for pid in cred:
            m = re.search(r"  place\('" + re.escape(pid) + r"',.*\),?\n", src)
            if not m:
                continue
            line, img = m.group(0), f"image: '/places/{pid}.jpg'"
            if "image:" in line:
                new = re.sub(r"image: '[^']*'", img, line)
            elif re.search(r"\{ [^{}]*\}\),?\n$", line):
                new = re.sub(r" \}\)(,?)\n$", f", {img} }})\\1\n", line)
            else:
                new = re.sub(r"\)(,?)\n$", f", {{ {img} }})\\1\n", line)
            src = src.replace(line, new)
            done.add(pid)
        if src != orig:
            open(f, "w").write(src)
            print("updated", os.path.relpath(f, ROOT))
    print("missing:", set(cred) - done or "none")
    p = os.path.join(ROOT, "scripts/landmark_photo_credits.txt")
    t = open(p).read()
    block = f"\n\n# {label} place photos\n" + "\n".join(cred.values()) + "\n\n# Owner's own photos"
    open(p, "w").write(t.replace("\n\n# Owner's own photos", block, 1))


if __name__ == "__main__":
    os.makedirs(WORK, exist_ok=True)
    a = sys.argv[1:]
    {"search": lambda: cmd_search(a[1]), "sheet": lambda: cmd_sheet(a[1], a[2]), "serve": cmd_serve,
     "apply": lambda: cmd_apply(a[1], a[2], a[3] if len(a) > 3 else "@picks")}[a[0]]()
