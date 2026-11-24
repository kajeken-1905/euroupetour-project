"""France (13 régions, INSEE order) and Germany (16 Länder, official order; only those with cities) city groups,
2026-11-24, user request. Run once."""
import re
FR = [
 ('일드프랑스', 'Île-de-France', ['paris', 'fontainebleau']),
 ('상트르발드루아르', 'Centre-Val de Loire', ['tours', 'amboise', 'blois', 'chartres']),
 ('부르고뉴프랑슈콩테', 'Bourgogne-Franche-Comté', ['dijon']),
 ('노르망디', 'Normandy', ['rouen', 'giverny', 'honfleur', 'etretat', 'caen', 'bayeux', 'mont-saint-michel']),
 ('오드프랑스', 'Hauts-de-France', ['lille']),
 ('그랑테스트', 'Grand Est', ['strasbourg', 'colmar', 'riquewihr', 'nancy', 'reims']),
 ('페이드라루아르', 'Pays de la Loire', ['nantes']),
 ('브르타뉴', 'Brittany', ['saint-malo', 'quimper']),
 ('누벨아키텐', 'Nouvelle-Aquitaine', ['bordeaux', 'saint-emilion', 'arcachon', 'la-rochelle', 'sarlat', 'biarritz', 'saint-jean-pied-de-port', 'pau']),
 ('옥시타니', 'Occitania', ['toulouse', 'albi', 'rocamadour', 'lourdes', 'carcassonne', 'narbonne', 'perpignan', 'collioure', 'montpellier', 'sete', 'aigues-mortes', 'nimes']),
 ('오베르뉴론알프', 'Auvergne-Rhône-Alpes', ['lyon', 'annecy', 'chamonix', 'grenoble', 'clermont-ferrand', 'le-puy-en-velay']),
 ('프로방스알프코트다쥐르', 'Provence-Alpes-Côte d’Azur', ['marseille', 'cassis', 'aix-en-provence', 'avignon', 'arles', 'les-baux-de-provence', 'gordes', 'isle-sur-la-sorgue', 'moustiers-sainte-marie', 'saint-tropez', 'nice', 'cannes', 'antibes', 'grasse', 'saint-paul-de-vence', 'eze', 'menton']),
 ('코르시카', 'Corsica', ['ajaccio', 'bonifacio', 'calvi', 'bastia', 'corte']),
]
DE = [
 ('슐레스비히홀슈타인', 'Schleswig-Holstein', ['lubeck']),
 ('함부르크', 'Hamburg', ['hamburg']),
 ('브레멘', 'Bremen', ['bremen']),
 ('노르트라인베스트팔렌', 'North Rhine-Westphalia', ['cologne', 'aachen']),
 ('헤센', 'Hesse', ['frankfurt', 'rudesheim']),
 ('라인란트팔츠', 'Rhineland-Palatinate', ['cochem', 'trier']),
 ('바덴뷔르템베르크', 'Baden-Württemberg', ['stuttgart', 'heidelberg', 'freiburg', 'konstanz']),
 ('바이에른', 'Bavaria', ['munich', 'nuremberg', 'bamberg', 'wurzburg', 'rothenburg', 'regensburg', 'fussen', 'garmisch-partenkirchen', 'berchtesgaden', 'lindau']),
 ('베를린', 'Berlin', ['berlin']),
 ('브란덴부르크', 'Brandenburg', ['potsdam']),
 ('메클렌부르크포어포메른', 'Mecklenburg-Vorpommern', ['schwerin']),
 ('작센', 'Saxony', ['dresden', 'leipzig', 'gorlitz']),
 ('작센안할트', 'Saxony-Anhalt', ['quedlinburg']),
 ('튀링겐', 'Thuringia', ['weimar', 'eisenach']),
]
p = 'src/data/countries.ts'
s = open(p).read()
q = lambda l: ', '.join(f"'{c}'" for c in l)
for cid, nxt, G in (('fr', 'mc', FR), ('de', 'be', DE)):
    i = s.index(f"    id: '{cid}',"); j = s.index(f"    id: '{nxt}',")
    blk = s[i:j]
    ids = re.findall(r"'([a-z-]+)'", re.search(r"\n    cityIds: \[([^\]]*)\]", blk).group(1))
    allg = [c for *_, cs in G for c in cs]
    assert sorted(ids) == sorted(allg) and len(allg) == len(set(allg)), (cid, set(ids) ^ set(allg))
    old = re.search(r"    cityIds: \[[^\]]*\],\n    cityGroups: \[\n.*?\n    \],\n", blk, re.S).group(0)
    new = f"    cityIds: [{q(allg)}],\n    cityGroups: [\n" + ''.join(
        f"      {{ title: {{ ko: '{k}', en: '{e}' }}, cityIds: [{q(cs)}] }},\n" for k, e, cs in G) + "    ],\n"
    s = s[:i] + blk.replace(old, new) + s[j:]
    print(cid, len(allg), 'cities', len(G), 'groups')
open(p, 'w').write(s)
