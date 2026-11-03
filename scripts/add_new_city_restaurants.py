#!/usr/bin/env python3
"""Restaurants for the cities added on 2026-11-01..03 (user request): only places in the 2026 MICHELIN Guide, read
from each restaurant's own guide.michelin.com page that day (name, address, cuisine, distinction). Lauterbrunnen,
Kandersteg and Clervaux have none in the guide and stay empty. Run once."""
from add_daytrip_places import rd, wr, js

S1, S2, BIB = 'star1', 'star2', 'bib'
SEL_KO, SEL_EN = '미쉐린 가이드 선정.', 'In the MICHELIN Guide.'
# file -> city -> [(name, address, ko, en, michelin)]
DATA = {
    'places-ch-extra.ts': {
        'st-gallen': [
            ('Einstein Gourmet', 'Berneggstrasse 2, 9000 St. Gallen', '호텔 아인슈타인의 창의 요리 레스토랑. 미쉐린 2스타.', 'Creative cooking at the Hotel Einstein. Two Michelin stars.', S2),
            ('Jägerhof', 'Brühlbleichestrasse 11, 9000 St. Gallen', '모던 요리를 내는 미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant serving modern cuisine.', S1),
            ('Corso', 'Brühlgasse 37, 9000 St. Gallen', '구시가의 컨템퍼러리 레스토랑. 미쉐린 1스타.', 'Contemporary restaurant in the old town. One Michelin star.', S1),
            ('Soleil d’Or by David Geisser', 'Haldenstrasse 1, 9000 St. Gallen', '다비드 가이서 셰프의 창의 요리 레스토랑. 미쉐린 1스타.', 'David Geisser’s creative restaurant. One Michelin star.', S1),
            ('Candela', 'Sonnenstrasse 5, 9000 St. Gallen', '인터내셔널 요리를 합리적인 값에 내는 곳. 미쉐린 빕 구르망.', 'International cooking at fair prices. Michelin Bib Gourmand.', BIB),
        ],
        'chur': [
            ('Mekong', 'Poststrasse 22, 7000 Chur', f'구시가의 아시아 요리 레스토랑. {SEL_KO}', f'Asian restaurant in the old town. {SEL_EN}', None),
        ],
        'locarno': [
            ('Locanda Locarnese', 'Via Bossi 1, Piazza Grande, 6600 Locarno', f'피아차 그란데에 면한 지중해 요리 레스토랑. {SEL_KO}', f'Mediterranean restaurant on the Piazza Grande. {SEL_EN}', None),
            ('Da Valentino', 'Via Torretta 7, 6600 Locarno', f'구시가 골목의 지중해 요리 레스토랑. {SEL_KO}', f'Mediterranean restaurant in an old-town lane. {SEL_EN}', None),
            ('Osteria del Centenario', 'Viale Verbano 17, 6600 Muralto', f'역 가까운 호숫가 무랄토의 지중해 요리 레스토랑. {SEL_KO}', f'Mediterranean restaurant on the Muralto lakefront near the station. {SEL_EN}', None),
            ('La Fontana Restaurant & Bar', 'Via ai Monti della Trinità 44, 6600 Locarno', f'시내 위 몬티 언덕의 지중해 요리 레스토랑. {SEL_KO}', f'Mediterranean restaurant on the Monti hillside above town. {SEL_EN}', None),
        ],
        'bellinzona': [
            ('Locanda Orico', 'Via Orico 13, 6500 Bellinzona', '구시가 골목의 지중해 요리 레스토랑. 미쉐린 1스타.', 'Mediterranean restaurant in an old-town lane. One Michelin star.', S1),
        ],
    },
    'places-nl-extra.ts': {
        'leiden': [
            ('Café Visscher', 'Stationsweg 7, 2312 AS Leiden', '중앙역 앞 길의 프렌치 비스트로. 미쉐린 빕 구르망.', 'French bistro on the street from the station. Michelin Bib Gourmand.', BIB),
            ('Café de Gaper', 'Rapenburg 97, 2311 GL Leiden', '라펜뷔르흐 운하 가의 인터내셔널 요리 레스토랑. 미쉐린 빕 구르망.', 'International cooking on the Rapenburg canal. Michelin Bib Gourmand.', BIB),
            ('In den Doofpot', 'Turfmarkt 9, 2312 CE Leiden', f'운하 가의 창의 요리 레스토랑. {SEL_KO}', f'Creative restaurant on a canal. {SEL_EN}', None),
            ('Wielinga', 'Nieuwe Rijn 28, 2312 JD Leiden', f'니우어 레인 운하 가의 모던 프렌치 레스토랑. {SEL_KO}', f'Modern French restaurant on the Nieuwe Rijn canal. {SEL_EN}', None),
            ('Bistro Bord’o', 'Apothekersdijk 2, 2312 DC Leiden', f'구시가의 컨템퍼러리 비스트로. {SEL_KO}', f'Contemporary bistro in the old town. {SEL_EN}', None),
        ],
    },
    'places-be-extra.ts': {
        'mechelen': [
            ('Tinèlle', 'Goswin de Stassartstraat 90, 2800 Mechelen', '카제르너 도신 근처의 컨템퍼러리 프렌치 레스토랑. 미쉐린 1스타.', 'Contemporary French restaurant near Kazerne Dossin. One Michelin star.', S1),
            ('Graspoort', 'Begijnenstraat 28, 2800 Mechelen', f'베긴회 수녀원 근처의 창의 프렌치 레스토랑. {SEL_KO}', f'Creative French restaurant near the beguinage. {SEL_EN}', None),
            ('The Chick', 'Sint-Romboutskerkhof 2, 2800 Mechelen', f'대성당 바로 옆의 모던 요리 레스토랑. {SEL_KO}', f'Modern restaurant right beside the cathedral. {SEL_EN}', None),
            ('Cosma', 'Befferstraat 24, 2800 Mechelen', f'여럿이 나눠 먹는 요리를 내는 레스토랑. {SEL_KO}', f'Sharing-plates restaurant. {SEL_EN}', None),
            ('Ember', 'Guldenstraat 9, 2800 Mechelen', f'제철 요리를 내는 레스토랑. {SEL_KO}', f'Seasonal cooking. {SEL_EN}', None),
        ],
    },
    'places-cz-extra.ts': {
        'olomouc': [
            ('Entrée', 'Ostravská 1, 779 00 Olomouc', '모던 요리를 내는 올로모우츠의 미쉐린 1스타 레스토랑.', 'Olomouc’s One-Michelin-star restaurant of modern cooking.', S1),
            ('Long Story Short Eatery & Bakery', 'Koželužská 945/31, 779 00 Olomouc', '직접 구운 빵과 모던 요리를 내는 식당 겸 빵집. 미쉐린 빕 구르망.', 'Eatery and bakery with its own bread and modern dishes. Michelin Bib Gourmand.', BIB),
            ('STeaK Restaurant', 'Lipenská 11/7, 779 00 Olomouc', f'그릴 스테이크 레스토랑. {SEL_KO}', f'Grill and steak restaurant. {SEL_EN}', None),
        ],
    },
    'places-hu-extra.ts': {
        'tihany': [
            ('Tihanyi Vinarius', 'Kiserdőtelepi út, 8237 Tihany', f'티하니의 컨템퍼러리 레스토랑. {SEL_KO}', f'Contemporary restaurant in Tihany. {SEL_EN}', None),
        ],
    },
}


def main():
    for f, cities in DATA.items():
        s = rd(f)
        block = ''
        for cid, rows in cities.items():
            assert f"'{cid}-" not in s, cid
            block += f'\n  // —— {cid} ——\n'
            for i, (name, addr, ko, en, m) in enumerate(rows, 1):
                opts = f", {{ michelin: '{m}' }}" if m else ''
                block += f"  place('{cid}-fine_dining-{i}', '{cid}', 'fine_dining', {js(name)}, {js(addr)}, {js(ko)}, {js(en)}{opts}),\n"
        k = s.rstrip().rindex(']')
        wr(f, s[:k].rstrip('\n') + '\n' + block + s[k:])
        print(f, sum(len(r) for r in cities.values()))


if __name__ == '__main__':
    main()
