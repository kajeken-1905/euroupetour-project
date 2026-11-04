import type { RawItinerary } from './itinerary-helper'

/** United Kingdom, Ireland and the Crown Dependencies. */
export const itineraryUk: Record<string, RawItinerary> = {
  london: {
    days: [
      ['웨스트민스터|Westminster', 1, 15, 2, 3, 21, 9, 12, 16, 7],
      ['시티와 사우스뱅크|The City & South Bank', 6, 11, 5, 24, 23, 20, 19, 13],
      ['켄싱턴과 노팅힐|Kensington & Notting Hill', 17, 18, 22, 8, 14],
      ['대영박물관과 캠던|British Museum & Camden', 4, 10, 25],
      ['그리니치|Greenwich', 26],
    ],
    trips: [
      ['큐 가든|Kew Gardens', 27],
      ['햄프턴 코트|Hampton Court', 29],
      ['해리 포터 스튜디오|Harry Potter studio', 28],
    ],
  },
  edinburgh: {
    days: [
      ['에든버러 성과 올드타운|Castle & Old Town', 2, 13, 8, 9, 3, 10, 7, 6],
      ['홀리루드와 뉴타운|Holyrood & New Town', 1, 4, 5, 12, 11],
    ],
    trips: [['리스와 브리타니아호|Leith & Britannia', 14]],
  },
  manchester: {
    days: [
      ['시내|City centre', 5, 8, 1, 6, 2, 4],
      ['살포드 키스와 축구장|Salford Quays & the stadiums', 7, 3, 9],
    ],
  },
  bath: [3, 1, 4, 7, 8, 9, 6, 2],
  oxford: { days: [['', 4, 8, 2, 7, 3, 5, 1, 9, 6]], trips: [['블레넘 궁전|Blenheim Palace', 10]] },
  cambridge: [6, 5, 1, 7, 8, 4, 2, 3],
  liverpool: [3, 6, 5, 8, 7, 1, 2, 9],
  chester: [1, 3, 2, 4, 5, 6],
  brighton: { days: [['', 1, 6, 3, 2, 4, 5]], trips: [['세븐 시스터스|Seven Sisters', 7]] },
  whitby: [3, 2, 1, 4, 5],
  york: [6, 5, 1, 3, 2, 8, 7, 4],
  durham: { days: [['', 4, 1, 2, 3]], trips: [['비미시 박물관|Beamish Museum', 5]] },
  bristol: [3, 4, 2, 7, 6, 5, 1],
  canterbury: [3, 2, 1, 4],
  dover: [1, 2, 3],
  windsor: [4, 1, 2, 3],
  salisbury: {
    days: [['', 2]],
    trips: [
      ['올드 새럼과 스톤헨지|Old Sarum & Stonehenge', 3, 1],
      ['에이브버리|Avebury', 4],
    ],
  },
  cotswolds: [5, 4, 1, 2, 3],
  'stratford-upon-avon': [1, 5, 3, 4, 2],
  'lake-district': {
    days: [
      ['윈더미어와 그래스미어|Windermere & Grasmere', 1, 3, 2],
      ['케직과 얼스워터|Keswick & Ullswater', 4, 5],
    ],
  },
  'st-ives': { days: [['', 3, 1, 2]], trips: [['세인트 마이클스 마운트와 랜즈 엔드|St Michael’s Mount & Land’s End', 4, 5]] },
  glasgow: [5, 1, 3, 2, 7, 4, 6],
  stirling: { days: [['', 1, 3, 2]], trips: [['켈피스|The Kelpies', 4], ['둔 성|Doune Castle', 5]] },
  'st-andrews': [2, 4, 1, 3],
  inverness: {
    days: [['', 4, 5]],
    trips: [
      ['네스호와 어쿼트 성|Loch Ness & Urquhart Castle', 1, 2],
      ['컬로든|Culloden', 3],
      ['스페이사이드 위스키|Speyside whisky', 6],
    ],
  },
  'fort-william': {
    days: [['', 4, 3, 2]],
    trips: [
      ['글렌피넌과 자코바이트|Glenfinnan & the Jacobite', 1],
      ['글렌코|Glencoe', 5],
    ],
  },
  'isle-of-skye': {
    days: [
      ['트로터니시 반도|Trotternish', 4, 1, 3],
      ['서부 스카이|West Skye', 2, 6, 5],
    ],
  },
  cardiff: { days: [['', 1, 3, 2]], trips: [['캐슬 코크와 세인트 페이건스|Castell Coch & St Fagans', 4, 5]] },
  conwy: [1, 2, 4, 3],
  snowdonia: {
    days: [
      ['스노든과 베투시코이드|Snowdon & Betws-y-Coed', 2, 3, 4],
      ['포트메이리온|Portmeirion', 5],
    ],
  },
  tenby: { days: [['', 4, 1, 2]], trips: [['칼디 섬|Caldey Island', 3]] },
  belfast: [3, 5, 2, 4, 6, 1],
  'giants-causeway': [3, 5, 1, 2, 4],
  derry: [3, 2, 1, 4],
  dublin: { days: [['', 1, 2, 3, 4]], trips: [['모허 절벽|Cliffs of Moher', 5]] },
  galway: {
    days: [['', 2, 1, 3]],
    trips: [
      ['모허 절벽|Cliffs of Moher', 4],
      ['아란 제도|Aran Islands', 5],
    ],
  },
  cork: { days: [['', 3, 1, 2, 4]], trips: [['블라니성|Blarney Castle', 5]] },
  killarney: { days: [['킬라니 국립공원|Killarney National Park', 3, 2, 5, 1]], trips: [['링 오브 케리|Ring of Kerry', 4]] },
  kilkenny: [1, 5, 2, 3],
  limerick: [4, 3, 1, 2, 5],
  // Crown Dependencies
  douglas: { days: [['', 2, 3, 1]], trips: [['락시와 스나펠|Laxey & Snaefell', 4, 5]] },
  castletown: [1, 2, 3],
  peel: [1, 2],
  'st-helier': { days: [['', 1, 4, 3]], trips: [['섬 안쪽|Inland', 2, 5]] },
  gorey: [1, 2, 3],
  'st-peter-port': { days: [['', 1, 4, 2]], trips: [['섬 남쪽|South of the island', 3, 5]] },
  sark: [1, 2],
}
