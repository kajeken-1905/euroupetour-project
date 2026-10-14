import sys,subprocess,re,json,os,urllib.parse,html
from concurrent.futures import ThreadPoolExecutor
UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
KW=r'(stadium[-_ ]?tour|stadion[-_ ]?tour|stadiontour|stadionf(ue|ü)hrung|f(ue|ü)hrung|rundgang|arena[-_ ]?tour|tour[-_ ]?(du|del|de|do|of)?[-_ ]?(stade|stadio|estadio|estádio|stadium|stadion|arena)|visite[-_ ]?(du|des|guid)|visita[-_ ]?(guidata|al|ao|do|del|estadio|stadio)|museo|museum|museu|muzeum|múzeum|muze|stadium-experience|tours?\b|rondleiding|stadionrundvisning|omvisning|stadionkierros|tur[-_ ]?stadion|prehliadk|prohlídk|zwiedzan|wycieczk|ξενάγ|экскурс|екскурс|stadyum[-_ ]?tur)'
def get(u):
    try:
        r=subprocess.run(['curl','-s','-L','-m','25','-A',UA,'-H','Accept-Language: en,*;q=0.5',u],capture_output=True,timeout=40)
        return r.stdout.decode('utf-8','ignore')
    except Exception: return ''
def work(line):
    q,u=line.split()[:2]
    h=get(u)
    open(f'html/{q}.html','w').write(h)
    links=set()
    for m in re.finditer(r'<a\b[^>]*href=["\']([^"\'#]+)["\'][^>]*>(.*?)</a>',h,re.S|re.I):
        href,txt=m.group(1),re.sub(r'<[^>]+>',' ',m.group(2))
        txt=html.unescape(re.sub(r'\s+',' ',txt)).strip()[:80]
        if re.search(KW,href,re.I) or re.search(KW,txt,re.I):
            links.add((urllib.parse.urljoin(u,href),txt))
    return q,{'len':len(h),'links':sorted(links)[:15]}
lines=[l for l in open('urls.txt').read().split('\n') if l.strip()]
res={}
with ThreadPoolExecutor(10) as ex:
    for q,v in ex.map(work,lines): res[q]=v
json.dump(res,open('tourlinks.json','w'),ensure_ascii=False,indent=1)
print(len(res), sum(1 for v in res.values() if v['links']))
