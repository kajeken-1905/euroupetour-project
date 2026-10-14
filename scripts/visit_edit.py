#!/usr/bin/env python3
"""Change fields of highlight visit entries in src/data/visit-*.ts.

    python3 scripts/visit_edit.py edits.json

edits.json is a list of {"id": "lyon-h5", "c": null, "b": "rec", "n": "ko|en"}; a key set to null is
removed, a missing key is left alone. Only c, b and n can be changed; dated notices (x) are kept.
"""
import glob
import json
import os
import re
import sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'data')
ORDER = ['c', 'b', 's', 't', 'n', 'k', 'z']


def apply(line, edit):
    # Dated notices (x: [['ko|en', 'YYYY-MM-DD'], ...]) are kept as they are and put back at the end.
    notices = re.search(r",\s*x: \[\[.*\]\]", line)
    if notices:
        line = line.replace(notices.group(0), '')
    m = re.match(r"(\s*'[a-z0-9-]+': v\(\d+, \d+)(?:, \{ (.*) \})?(\),?\s*)$", line)
    if not m:
        raise SystemExit('cannot parse: ' + line[:80])
    fields = dict(re.findall(r"(\w+): ('(?:[^'\\]|\\.)*'|[A-Z_]+|true)", m.group(2) or ''))
    for key in ('c', 'b', 'n'):
        if key in edit:
            if edit[key] is None:
                fields.pop(key, None)
            else:
                fields[key] = "'" + edit[key].replace("'", '’') + "'"
    body = ', '.join(f'{k}: {fields[k]}' for k in ORDER if k in fields)
    if notices:
        body = (body + notices.group(0)) if body else notices.group(0).lstrip(', ')
    return m.group(1) + (f', {{ {body} }}' if body else '') + m.group(3)


def main():
    edits = {e['id']: e for e in json.load(open(sys.argv[1], encoding='utf-8'))}
    done = set()
    for path in sorted(glob.glob(os.path.join(ROOT, 'visit-*.ts'))):
        lines = open(path, encoding='utf-8').readlines()
        changed = False
        for i, line in enumerate(lines):
            m = re.match(r"\s*'([a-z0-9-]+)': v\(", line)
            if m and m.group(1) in edits:
                lines[i] = apply(line, edits[m.group(1)])
                done.add(m.group(1))
                changed = True
        if changed:
            open(path, 'w', encoding='utf-8').writelines(lines)
    print('edited', len(done), 'missing', sorted(set(edits) - done))


if __name__ == '__main__':
    main()
