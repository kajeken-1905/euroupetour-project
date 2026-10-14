import json,subprocess,re,sys,html
from html.parser import HTMLParser
UA='EuropeTourGuide/1.0 (https://github.com/kajeken-1905/euroupetour-project) curl'
class T(HTMLParser):
    def __init__(s):
        super().__init__(); s.tables=[]; s.depth=0; s.cell=None; s.row=None
    def handle_starttag(s,tag,a):
        a=dict(a)
        if tag=='table':
            s.depth+=1
            if s.depth==1: s.cur={'cls':a.get('class',''),'rows':[]}
        if s.depth!=1: return
        if tag=='tr': s.row=[]
        elif tag in('td','th') and s.row is not None:
            s.cell={'text':'','links':[],'rs':int(re.sub(r'\D','',a.get('rowspan','1')) or 1),'cs':int(re.sub(r'\D','',a.get('colspan','1')) or 1),'th':tag=='th'}
        elif tag=='a' and s.cell is not None and a.get('href','').startswith('/wiki/') and ':' not in a['href'][6:]:
            s.cell['links'].append(a['href'][6:].split('#')[0])
        elif tag=='br' and s.cell is not None: s.cell['text']+=' '
    def handle_endtag(s,tag):
        if tag=='table':
            if s.depth==1: s.tables.append(s.cur)
            s.depth-=1
        if s.depth!=1: return
        if tag in('td','th') and s.cell is not None: s.row.append(s.cell); s.cell=None
        elif tag=='tr' and s.row is not None: s.cur['rows'].append(s.row); s.row=None
    def handle_data(s,d):
        if s.cell is not None and s.depth==1: s.cell['text']+=d
def grid(rows):
    out=[];pend={}
    for r in rows:
        line=[];i=0;cells=list(r)
        while cells or i in pend:
            if i in pend:
                c,n=pend[i]; line.append(c)
                if n>1: pend[i]=(c,n-1)
                else: del pend[i]
                i+=1; continue
            c=cells.pop(0)
            for k in range(c['cs']):
                line.append(c)
                if c['rs']>1: pend[i]=(c,c['rs']-1)
                i+=1
        out.append(line)
    return out
def fetch(title):
    out=subprocess.run(['curl','-s','-G','-H','User-Agent: '+UA,'--data-urlencode','page='+title,'-d','action=parse','-d','prop=text','-d','format=json','-d','formatversion=2','-d','redirects=1','https://en.wikipedia.org/w/api.php'],capture_output=True,text=True).stdout
    return json.loads(out)['parse']['text']
res={}
if __name__!="__main__": raise SystemExit
for key,title in json.load(open('titles.json')).items():
    if not title: continue
    p=T(); p.feed(fetch(title))
    best=None
    for tb in p.tables:
        if 'wikitable' not in tb['cls'] or not tb['rows']: continue
        g=grid(tb['rows'])
        head=[c['text'].strip().lower() for c in g[0]]
        hs=' '.join(head)
        if re.search(r'stadium|venue|ground|arena',hs) and re.search(r'team|club',hs):
            best=(g,head); break
    if not best: print(key,'NO TABLE'); continue
    g,head=best
    col=lambda pat: next((i for i,h in enumerate(head) if re.search(pat,h)),None)
    ci,li,vi,ki=col(r'team|club'),col(r'location|city|town|home city'),col(r'stadium|venue|ground|arena'),col(r'capacity')
    teams=[]
    for r in g[1:]:
        if ci is None or ci>=len(r) or r[ci]['th'] and not r[ci]['links']: continue
        cl=r[ci]; v=r[vi] if vi is not None and vi<len(r) else None
        if not cl['links']: continue
        teams.append({'club':cl['links'][0],'clubText':cl['text'].strip(),'loc':(r[li]['text'].strip() if li is not None and li<len(r) else ''),
                      'venue':(v['links'][0] if v and v['links'] else None),'venueText':(v['text'].strip() if v else ''),
                      'cap':(r[ki]['text'].strip() if ki is not None and ki<len(r) else '')})
    res[key]={'title':title,'teams':teams}
    print(key,len(teams),title)
json.dump(res,open('wp_teams.json','w'),ensure_ascii=False,indent=1)
