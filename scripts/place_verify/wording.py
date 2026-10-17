"""Neutral-wording pass for places not yet re-verified (2026-10 campaign).

python3 scripts/place_verify/wording.py add '{"id": {"ko": "...", "en": "..."}}'   record rewrites
python3 scripts/place_verify/wording.py apply                                    write them into src/data/places*.ts

Only ko/en change; the place stays unchecked in decisions.json, so pv.py next still lists it.
"""
import glob, json, os, re, sys

D = os.path.dirname(os.path.abspath(__file__))
W = D + '/wording.json'
ROOT = os.path.abspath(D + '/../..')
exec(open(D + '/pv.py').read().split('\ndef main')[0].split('\ndef apply')[0])


def load():
    return json.load(open(W)) if os.path.exists(W) else {}


def apply():
    w, n = load(), 0
    dec = json.load(open(D + '/decisions.json'))
    for f in sorted(glob.glob(ROOT + '/src/data/places*.ts')):
        s = open(f).read()
        out, i = '', 0
        for m in re.finditer(r"\n([ \t]*)place\('([^']+)'", s):
            pid = m.group(2)
            if pid not in w or pid in dec or m.start() < i:
                continue
            start = s.index('(', m.start())
            end = call_end(s, start)
            args = [a.strip() for a in split_top(s[start + 1:end])]
            args[5], args[6] = lit(w[pid]['ko']), lit(w[pid]['en'])
            out += s[i:start + 1] + ', '.join(args) + ')'
            i = end + 1
            n += 1
        out += s[i:]
        if out != s:
            open(f, 'w').write(out)
    print('rewrote', n)


cmd = sys.argv[1]
if cmd == 'add':
    w = load()
    w.update(json.loads(sys.argv[2]))
    json.dump(w, open(W, 'w'), ensure_ascii=False, indent=0, sort_keys=True)
    print(len(w), 'rewrites')
elif cmd == 'apply':
    apply()
