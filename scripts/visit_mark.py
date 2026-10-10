#!/usr/bin/env python3
"""Stamp highlight visit entries as checked against official information.

    python3 scripts/visit_mark.py 2026-10 london-h3 london-h4 ...

Adds (or updates) `k: 'YYYY-MM'` on each id's line in src/data/visit-*.ts.
Only stamp a place after its closing days and booking rule were compared with
the operator's own site.
"""
import glob
import os
import re
import sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'data')


def stamp(line, month):
    line = re.sub(r",\s*k: '[0-9-]+'", '', line)
    if re.search(r"\}\),?\s*$", line):
        return re.sub(r"\s*\}\)(,?\s*)$", lambda m: f", k: '{month}' }})" + m.group(1), line)
    return re.sub(r"\)(,?\s*)$", lambda m: f", {{ k: '{month}' }})" + m.group(1), line)


def main():
    month, ids = sys.argv[1], set(sys.argv[2:])
    done = set()
    for path in sorted(glob.glob(os.path.join(ROOT, 'visit-*.ts'))):
        with open(path, encoding='utf-8') as f:
            lines = f.readlines()
        changed = False
        for i, line in enumerate(lines):
            m = re.match(r"\s*'([a-z0-9-]+)': v\(", line)
            if m and m.group(1) in ids:
                lines[i] = stamp(line, month)
                done.add(m.group(1))
                changed = True
        if changed:
            with open(path, 'w', encoding='utf-8') as f:
                f.writelines(lines)
    print(f'stamped {len(done)}')
    missing = ids - done
    if missing:
        print('not found:', ' '.join(sorted(missing)))


if __name__ == '__main__':
    main()
