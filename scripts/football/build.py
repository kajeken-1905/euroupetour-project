import json,urllib.parse,math,re
res=json.load(open('wp_teams.json')); q=json.load(open('qids.json')); E=json.load(open('ents.json')); C=json.load(open('cities.json'))
def claims(e,p): return e.get('claims',{}).get(p,[])
def val(c): return c['mainsnak'].get('datavalue',{}).get('value')
def lab(e,l): return e.get('labels',{}).get(l,{}).get('value')
def ended(c): return 'P582' in c.get('qualifiers',{})
def km(a,b):
    x=math.radians(b[1]-a[1])*math.cos(math.radians((a[0]+b[0])/2)); y=math.radians(b[0]-a[0]); return 6371*math.hypot(x,y)
def best(cs):
    pref=[c for c in cs if c.get('rank')=='preferred']
    norm=[c for c in cs if c.get('rank')!='deprecated']
    return pref or norm
def capacity(v):
    cs=best(claims(v,'P1083'))
    if not cs: return None
    def t(c): 
        x=c.get('qualifiers',{}).get('P585',[{}])[0].get('datavalue',{}).get('value',{}).get('time','')
        return x
    cs=sorted(cs,key=t)
    a=val(cs[-1]); return int(float(a['amount'])) if a else None
def site(e):
    cs=best(claims(e,'P856'))
    urls=[val(c) for c in cs if val(c)]
    # prefer url without language qualifier
    nolang=[val(c) for c in cs if val(c) and 'P407' not in c.get('qualifiers',{})]
    return (nolang or urls or [None])[0]
out=[]
for key,v in res.items():
    seen={}
    for t in v['teams']:
        title=urllib.parse.unquote(t['club']).replace('_',' ')
        qid=q.get(title)
        if not qid or qid in seen: 
            if qid in seen and t['venue']: seen[qid]['wpVenues'].append(urllib.parse.unquote(t['venue']).replace('_',' '))
            continue
        e=E.get(qid,{})
        inc=next((val(c)['time'][1:5] for c in best(claims(e,'P571')) if val(c)),None)
        cur=[val(c)['id'] for c in claims(e,'P115') if val(c) and not ended(c) and c.get('rank')!='deprecated']
        wpv=[urllib.parse.unquote(t['venue']).replace('_',' ')] if t['venue'] else []
        rec={'league':key,'qid':qid,'title':title,'en':lab(e,'en'),'ko':lab(e,'ko'),'kowiki':e.get('sitelinks',{}).get('kowiki',{}).get('title'),
             'inception':inc,'site':site(e),'wdVenues':cur,'wpVenues':wpv,'loc':t['loc'],'cap':t['cap']}
        seen[qid]=rec; out.append(rec)
for r in out:
    vq=[q.get(v) for v in r['wpVenues'] if q.get(v)]
    r['venueQ']= vq[0] if vq else (r['wdVenues'][0] if len(r['wdVenues'])==1 else None)
    r['venueAgree']= bool(vq) and vq[0] in r['wdVenues']
    v=E.get(r['venueQ'],{}) if r['venueQ'] else {}
    co=next((val(c) for c in best(claims(v,'P625')) if val(c)),None)
    r['venue']={'en':lab(v,'en'),'ko':lab(v,'ko'),'kowiki':v.get('sitelinks',{}).get('kowiki',{}).get('title'),'cap':capacity(v) if v else None,
                'coord':[co['latitude'],co['longitude']] if co else None,'site':site(v) if v else None}
    if co:
        d=sorted((km(r['venue']['coord'],(c['lat'],c['lng'])),c['id']) for c in C if c['lat'] is not None)
        r['near']=[(round(x,1),i) for x,i in d[:2]]
    else: r['near']=None
json.dump(out,open('clubs.json','w'),ensure_ascii=False,indent=1)
print(len(out),'clubs; no venue', sum(1 for r in out if not r['venueQ']),'; no coord',sum(1 for r in out if r['venueQ'] and not r['venue']['coord']),
      '; disagree', sum(1 for r in out if r['wpVenues'] and not r['venueAgree']))
for lim in (3,6,10,15,25): print('within',lim,'km:',sum(1 for r in out if r['near'] and r['near'][0][0]<=lim))
