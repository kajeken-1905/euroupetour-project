import type { RawItinerary } from './itinerary-helper'

/** Nordics, Baltics, Poland, Czechia, Slovakia and Hungary. */
export const itineraryNorth: Record<string, RawItinerary> = {
  oslo: [2, 6, 4, 1, 3],
  bergen: {
    days: [
      ['브뤼겐과 플뢰위엔|Bryggen & Fløyen', 3, 1, 2, 5],
      ['트롤하우겐과 울리켄|Troldhaugen & Ulriken', 4, 6],
    ],
  },
  tromso: { days: [['', 5, 4, 1, 2]], trips: [['피오르 크루즈|Fjord cruise', 3]] },
  stavanger: { days: [['', 2, 5, 4, 3]], trips: [['프레이케스톨렌|Preikestolen', 1]] },
  trondheim: [1, 2, 3, 4, 5],
  alesund: { days: [['', 2, 4, 1]], trips: [['주변 섬|Nearby islands', 3]] },
  flam: [1, 4, 2, 3],
  helsinki: { days: [['', 4, 7, 1, 3, 5]], trips: [['수오멘린나|Suomenlinna', 2]] },
  turku: [2, 4, 3, 5, 1],
  tampere: {
    days: [
      ['시내|City centre', 4, 3, 2, 1],
      ['새르캔니에미|Särkänniemi', 5],
    ],
  },
  rovaniemi: { days: [['', 3, 4]], trips: [['산타클로스 마을|Santa Claus Village', 1, 2]] },
  porvoo: [3, 1, 4, 2],
  stockholm: {
    days: [
      ['감라스탄과 쇠데르말름|Gamla Stan & Södermalm', 5, 1, 2, 7, 4],
      ['유르고르덴|Djurgården', 3, 6],
    ],
  },
  gothenburg: {
    days: [
      ['시내|City centre', 1, 3, 6, 4, 5],
      ['리세베리|Liseberg', 2],
    ],
  },
  malmo: [2, 4, 5, 1, 3],
  uppsala: [5, 3, 1, 4, 2],
  kiruna: { days: [['', 1, 4, 3]], trips: [['아이스호텔|Icehotel', 2]] },
  copenhagen: {
    days: [
      ['시내|City centre', 5, 1, 2, 7, 6, 4],
      ['티볼리|Tivoli', 3],
    ],
  },
  aarhus: [2, 1, 4, 3, 5],
  odense: [4, 3, 2, 1],
  aalborg: [4, 1, 2, 3],
  roskilde: [4, 2, 1, 3],
  budapest: {
    days: [
      ['국회의사당과 부다 언덕|Parliament & Castle Hill', 1, 5, 7, 9, 2],
      ['페스트|Pest', 6, 8, 4, 3],
    ],
  },
  debrecen: [4, 1, 2, 3, 5],
  pecs: [5, 2, 1, 3, 4],
  szeged: [2, 1, 3, 5, 4],
  eger: [1, 2, 3, 5, 4],
  prague: {
    days: [
      ['프라하 성과 말라스트라나|Prague Castle & Malá Strana', 1, 9, 12, 5, 10, 2],
      ['구시가와 유대인 지구|Old Town & Jewish Quarter', 8, 7, 3, 4, 6, 11],
    ],
  },
  brno: [5, 4, 3, 1, 2],
  'cesky-krumlov': [2, 3, 5, 1],
  'karlovy-vary': [5, 1, 4, 2, 3],
  'ceske-budejovice': [1, 2, 4, 5, 3],
  warsaw: {
    days: [
      ['구시가와 게토 기념지|Old Town & ghetto memorials', 2, 1, 5],
      ['문화과학궁전과 와지엔키|Palace of Culture & Łazienki', 4, 3],
    ],
  },
  krakow: [1, 3, 5, 2, 4],
  gdansk: { days: [['', 1, 2, 3, 4]], trips: [['올리바와 해변|Oliwa & the beach', 5]] },
  wroclaw: [1, 4, 5, 2, 3],
  poznan: [3, 1, 4, 2, 5],
  zakopane: { days: [['', 2, 3, 1]], trips: [['모르스키에 오코|Morskie Oko', 4]] },
  torun: [4, 1, 3, 2, 5],
  reykjavik: { days: [['', 1, 3, 2, 4]], trips: [['블루라군|Blue Lagoon', 5]] },
  akureyri: { days: [['', 3, 1, 2]], trips: [['고다포스와 미바튼|Goðafoss & Mývatn', 5, 4]] },
  vik: [5, 2, 1, 4, 3],
  husavik: { days: [['', 2, 3, 1, 4]], trips: [['아우스비르기|Ásbyrgi', 5]] },
  selfoss: [5, 4, 1, 2, 3],
  bratislava: { days: [['', 2, 4, 3, 1]], trips: [['데빈 성|Devín Castle', 5]] },
  kosice: [5, 3, 2, 1, 4],
  poprad: { days: [['', 3, 2]], trips: [['고타트라|High Tatras', 1, 5, 4]] },
  'banska-bystrica': [1, 3, 2, 4, 5],
  trencin: [3, 4, 2, 1, 5],
  tallinn: [4, 2, 3, 1, 5],
  tartu: [2, 1, 4, 5, 3],
  parnu: [3, 4, 2, 1, 5],
  riga: [4, 2, 1, 5, 3],
  jurmala: { days: [['', 4, 2, 1, 3]], trips: [['케메리 국립공원|Ķemeri National Park', 5]] },
  sigulda: [3, 5, 4, 1, 2],
  vilnius: [5, 1, 3, 2, 4],
  kaunas: { days: [['', 3, 1, 2, 5]], trips: [['제9요새|Ninth Fort', 4]] },
  klaipeda: { days: [['', 2, 1, 5]], trips: [['쿠로니아 사주|Curonian Spit', 4, 3]] },
}
