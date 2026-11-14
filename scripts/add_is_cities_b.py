#!/usr/bin/env python3
"""Iceland step 2/3 follow-up (2026-11-14): no free-licence photos exist for the Library of Water (Stykkishólmur) or
Vök Baths, so stykkisholmur-h2 becomes Stykkishólmur Church and seydisfjordur-h4 becomes Hengifoss; the Hornafjörður
Airport card is removed for lack of any photo. Run once."""
import re, urllib.parse
from add_daytrip_places import rd, wr

SWAP = {
 'stykkisholmur-h2': ('스티키스홀뮈르 교회', 'Stykkishólmur Church', '1990년 완공한 하얀 현대 교회로, 고래 등뼈 같은 곡선 탑이 마을 언덕 위에 서서 항구와 섬들을 내려다봅니다.', 'The white modern church completed in 1990, its curving, whale-spine-like tower standing on the hill above the harbour and islands.', 'Stykkishólmskirkja', 15, 30, None, None),
 'seydisfjordur-h4': ('헹이포스 폭포', 'Hengifoss', '붉은 점토층이 줄무늬를 이룬 현무암 절벽에서 떨어지는 높이 약 128m 폭포로, 아이슬란드에서 손꼽히게 높습니다.', 'A waterfall of about 128 m, one of Iceland’s tallest, dropping from basalt cliffs striped with red clay layers.', 'Hengifoss', 150, 180,
                      '에길스타디르 남서쪽 플료츠달뤼르 계곡에 있으며, 주차장에서 오르막을 왕복 약 2시간 걷습니다.|In the Fljótsdalur valley southwest of Egilsstaðir; about two hours’ return walk uphill from the car park.', ('뵈크 온천|Vök Baths', '헹이포스 폭포|Hengifoss')),
}


def main():
    c = rd('cities.ts')
    for hid, (ko, en, dko, den, maps, mn, mx, n, it) in SWAP.items():
        i = c.index(f'id: "{hid}"'); j = c.index('\n      }', i); b = c[i:j]
        b = re.sub(r'name: \{[^\n]*\}', f'name: {{ ko: "{ko}", en: "{en}" }}', b)
        b = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', b)
        b = re.sub(r'mapsUrl: "[^"]*"', 'mapsUrl: "https://www.google.com/maps/search/?api=1&query=' + urllib.parse.quote(maps) + '"', b)
        c = c[:i] + b + c[j:]
    wr('cities.ts', c)
    v = rd('visit-nordic.ts')
    for hid, t in SWAP.items():
        new = f"  '{hid}': v({t[5]}, {t[6]}" + (f", {{ n: '{t[7]}' }}" if t[7] else '') + "),\n"
        v, k = re.subn(rf"^  '{hid}': v\(.*\),\n", new, v, flags=re.M)
        assert k == 1, hid
    wr('visit-nordic.ts', v)
    it = rd('itinerary-north.ts')
    a, b = SWAP['seydisfjordur-h4'][8]
    assert it.count(a) == 1
    wr('itinerary-north.ts', it.replace(a, b))
    g = rd('gateways/is.ts')
    i = g.index("  {\n    id: 'gw-hfn',")
    j = g.index('\n  },\n', i) + len('\n  },\n')
    wr('gateways/is.ts', g[:i] + g[j:])


if __name__ == '__main__':
    main()
