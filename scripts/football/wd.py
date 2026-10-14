import json,subprocess
UA='EuropeTourGuide/1.0 (https://github.com/kajeken-1905/euroupetour-project) curl'
def get(ids):
    out={}
    ids=sorted(set(i for i in ids if i))
    for i in range(0,len(ids),50):
        r=subprocess.run(['curl','-s','-G','-H','User-Agent: '+UA,'-d','action=wbgetentities','--data-urlencode','ids='+'|'.join(ids[i:i+50]),'-d','props=labels|claims|sitelinks','-d','languages=ko|en','-d','sitefilter=kowiki|enwiki','-d','format=json','https://www.wikidata.org/w/api.php'],capture_output=True,text=True).stdout
        out.update(json.loads(r)['entities'])
    return out
