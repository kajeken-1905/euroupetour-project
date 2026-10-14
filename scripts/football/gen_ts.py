import json,re,sys
from names import CLUB_KO,VENUE_KO,VENUE_EN,SUBURB,NO_STADIUM,NOTES
from leagues_ko import LEAGUE_META,EXTRA
keep=json.load(open('keep.json')); CRESTS=json.load(open('crests.json')); LV=json.load(open('leagues_verified.json')); LV.update(EXTRA)
def clean(s): return re.sub(r'\s*\([^)]*\)\s*$','',s or '').replace(" men's football",'').strip()
def rnd(c):
    if not c: return None
    return int(round(c,-3)) if c>=10000 else int(round(c,-2))
def capnum(s):
    m=re.search(r'\d[\d,. ]{2,}',s or ''); 
    return int(re.sub(r'\D','',m.group(0))) if m else None
TOURNOTE={'group15':('15명 이상 단체만 받습니다.','Groups of 15 or more only.'),'summer':('여름(6~8월)에만 운영합니다.','Runs in summer (June–August) only.')}
clubs={}
for r in keep:
    ko=CLUB_KO.get(r['en']) or clean(r['kowiki'] or r['ko'])
    en=clean(r['title'])
    if r['en']=='Inter Milan': en='Inter Milan'
    c={'id':r['qid'],'name':{'ko':ko,'en':en},'league':r['league']}
    if r['inception']: c['founded']=int(r['inception'])
    if r['qid'] in CRESTS:
        m=CRESTS[r['qid']]; c['crest']={'license':m['license'],'source':m['source']}
        if m['author']: c['crest']['author']=m['author']
    v=r['venue']
    if r['en'] not in NO_STADIUM and v['en'] and v['coord']:
        vko=VENUE_KO.get(v['en']) or clean(v['kowiki'] or v['ko'])
        ven=VENUE_EN.get(v['en'],v['en'])
        cap=rnd(v['cap'] or capnum(r['cap']))
        c['stadium']={'name':{'ko':vko,'en':ven},'lat':round(v['coord'][0],5),'lng':round(v['coord'][1],5)}
        if cap: c['stadium']['capacity']=cap
    if r['homepage']: c['site']=r['homepage'].rstrip('/')+'/' if re.match(r'^https?://[^/]+/?$',r['homepage']) else r['homepage']
    if r['tour']:
        t={'kind':r['tour'][0],'url':r['tour'][1]}
        if len(r['tour'])>2: t['note']=dict(zip(('ko','en'),TOURNOTE[r['tour'][2]]))
        c['tour']=t
    if r['en'] in SUBURB or r.get('suburb'):
        s=SUBURB.get(r['en'])
        if not s: print('SUBURB MISSING',r['en'],file=sys.stderr)
        else: c['suburb']={'ko':s[0],'en':s[1]}
    if r['en'] in NOTES and NOTES[r['en']][0]: c['note']={'ko':NOTES[r['en']][0],'en':NOTES[r['en']][1]}
    if not ko: print('NO KO',r['en'],file=sys.stderr)
    clubs.setdefault(r['city'],[]).append(c)
# order clubs in a city by founded year
for v in clubs.values(): v.sort(key=lambda c:c.get('founded',9999))
leagues={}
for cc,items in LEAGUE_META.items():
    out=[]
    for key,ko,en,note in items:
        L={'name':{'ko':ko,'en':en}}
        if key:
            info=LV[key]; L['key']=key; L['site']=info['site']
            if info.get('clubs'): L['clubs']=info['clubs']
            if info.get('start'): L['start']=info['start']
            if info.get('end'): L['end']=info['end']
            if info.get('calendarYear'): L['calendarYear']=True
        if note:
            if '|' in note: k,e=note.split('|'); L['note']={'ko':k,'en':e}
            else: L['region']={'ko':note,'en':{'잉글랜드':'England','스코틀랜드':'Scotland','웨일스':'Wales','북아일랜드':'Northern Ireland'}[note]}
        out.append(L)
    leagues[cc]=out
ts='''// Generated from verified sources (league official sites; Wikidata and club sites for clubs and stadiums), 2026-10.
// Top-division clubs of the 2026-27 season (2026 for calendar-year leagues) whose home ground is in or beside a city.
import type { FootballClub, FootballLeague } from '../types'

export const FOOTBALL_LEAGUES: Record<string, FootballLeague[]> = '''+json.dumps(leagues,ensure_ascii=False,indent=1)+'''

export const FOOTBALL_CLUBS: Record<string, FootballClub[]> = '''+json.dumps(clubs,ensure_ascii=False,separators=(',',':')).replace('],"','],\n"')+'\n'
open(sys.argv[1],'w').write(ts)
print(sum(len(v) for v in clubs.values()),'clubs in',len(clubs),'cities;',len(leagues),'countries; tours',sum(1 for v in clubs.values() for c in v if 'tour' in c),'; no stadium',sum(1 for v in clubs.values() for c in v if 'stadium' not in c))
