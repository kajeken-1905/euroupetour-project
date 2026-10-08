import type { RawItinerary } from './itinerary-helper'

/** United Kingdom and Ireland. */
export const itineraryUk: Record<string, RawItinerary> = {
  london: {
    days: [
      ['웨스트민스터|Westminster', 1, 3, 15, 2, 9, 12, 7],
      ['시티와 사우스뱅크|The City & South Bank', 6, 11, 5, 13],
      ['대영박물관과 서쪽 런던|British Museum & west London', 4, 10, 8, 14],
    ],
  },
  edinburgh: {
    days: [
      ['에든버러 성과 올드타운|Castle & Old Town', 2, 7, 6, 3],
      ['홀리루드와 언덕|Holyrood & the hills', 1, 4, 5],
    ],
  },
  manchester: {
    days: [
      ['시내|City centre', 5, 1, 6, 2, 4],
      ['살포드 키스와 올드 트래포드|Salford Quays & Old Trafford', 7, 3],
    ],
  },
  bath: [3, 1, 4, 6, 2],
  oxford: [4, 2, 3, 5, 1, 6],
  cambridge: [6, 5, 1, 4, 2, 3],
  liverpool: [3, 6, 5, 1, 2],
  brighton: [1, 6, 3, 2, 4, 5],
  york: [6, 5, 1, 3, 2, 4],
  bristol: [3, 4, 2, 6, 5, 1],
  canterbury: [3, 2, 1, 4],
  windsor: [4, 1, 2, 3],
  salisbury: {
    days: [['', 2]],
    trips: [
      ['올드 새럼과 스톤헨지|Old Sarum & Stonehenge', 3, 1],
      ['에이브버리|Avebury', 4],
    ],
  },
  cotswolds: [5, 4, 1, 2, 3],
  'stratford-upon-avon': [1, 3, 4, 2],
  'lake-district': {
    days: [
      ['윈더미어와 그래스미어|Windermere & Grasmere', 1, 3, 2],
      ['케직과 얼스워터|Keswick & Ullswater', 4, 5],
    ],
  },
  'st-ives': { days: [['', 3, 1, 2]], trips: [['세인트 마이클스 마운트와 랜즈 엔드|St Michael’s Mount & Land’s End', 4, 5]] },
  glasgow: [5, 1, 3, 2, 4],
  stirling: { days: [['', 1, 3, 2]], trips: [['켈피스|The Kelpies', 4]] },
  'st-andrews': [2, 4, 1, 3],
  inverness: {
    days: [['', 4, 5]],
    trips: [
      ['네스호와 어쿼트 성|Loch Ness & Urquhart Castle', 1, 2],
      ['컬로든|Culloden', 3],
    ],
  },
  'isle-of-skye': {
    days: [
      ['트로터니시 반도|Trotternish', 4, 1, 3],
      ['서부 스카이|West Skye', 2, 5],
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
  belfast: [3, 2, 4, 1],
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
}
