"""Italy: city groups = the official 20 regioni (ISTAT order), 2026-11-23."""
import re
G = [
 ('피에몬테','Piedmont',['turin','stresa']),
 ('발레다오스타','Aosta Valley',['aosta']),
 ('롬바르디아','Lombardy',['milan','como','bergamo','sirmione','mantua']),
 ('트렌티노알토아디제','Trentino-South Tyrol',['bolzano','merano','trento','ortisei']),
 ('베네토','Veneto',['venice','verona','vicenza','padua','cortina']),
 ('프리울리베네치아줄리아','Friuli-Venezia Giulia',['trieste']),
 ('리구리아','Liguria',['genoa','portofino','cinque-terre']),
 ('에밀리아로마냐','Emilia-Romagna',['bologna','modena','parma','ferrara','ravenna']),
 ('토스카나','Tuscany',['florence','pisa','lucca','siena','arezzo','san-gimignano','montepulciano','cortona']),
 ('움브리아','Umbria',['perugia','gubbio','assisi','spoleto','orvieto']),
 ('마르케','Marche',['urbino']),
 ('라치오','Lazio',['rome']),
 ('캄파니아','Campania',['naples','pompeii','sorrento','positano','amalfi','capri','ischia']),
 ('풀리아','Apulia',['bari','alberobello','ostuni','polignano-a-mare','lecce']),
 ('바실리카타','Basilicata',['matera']),
 ('칼라브리아','Calabria',['tropea']),
 ('시칠리아','Sicily',['palermo','trapani','cefalu','agrigento','siracusa','ragusa','catania','taormina']),
 ('사르데냐','Sardinia',['cagliari','alghero','olbia','cala-gonone']),
]
p='src/data/countries.ts'; s=open(p).read()
i=s.index("    id: 'it',"); j=s.index("    id: 'va',")
blk=s[i:j]
old=re.search(r"    cityIds: \[[^\]]*\],\n    cityGroups: \[\n.*?\n    \],\n", blk, re.S)
ids=re.findall(r"'([a-z-]+)'", re.search(r"cityIds: \[([^\]]*)\]", blk).group(1))
allg=[c for *_,cs in G for c in cs]
assert sorted(ids)==sorted(allg) and len(allg)==len(set(allg)), set(ids)^set(allg)
q=lambda l:', '.join(f"'{c}'" for c in l)
new=f"    cityIds: [{q(allg)}],\n    cityGroups: [\n"+''.join(f"      {{ title: {{ ko: '{k}', en: '{e}' }}, cityIds: [{q(cs)}] }},\n" for k,e,cs in G)+"    ],\n"
s=s[:i]+blk.replace(old.group(0),new)+s[j:]
open(p,'w').write(s); print(len(allg),'cities',len(G),'groups')
