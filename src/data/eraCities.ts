/**
 * Recommended cities on the search screen: by the period of history each is best known for, by mixed culture,
 * and by landscape. Every city spans several periods; it sits under the one its best-known sights come from
 * (noted beside each id), and appears only once.
 */
export interface EraGroup {
  id: string
  kind: 'history' | 'culture' | 'nature'
  title: { ko: string; en: string }
  period: { ko: string; en: string }
  note: { ko: string; en: string }
  cityIds: string[]
}

export const ERA_GROUPS: EraGroup[] = [
  {
    id: 'ancient',
    kind: 'history',
    title: { ko: '고대 그리스·로마', en: 'Ancient Greece & Rome' },
    period: { ko: '기원전~6세기', en: 'BC–6th century' },
    note: { ko: '신전과 원형 경기장, 유럽 문명이 시작된 곳', en: 'Temples and arenas where European civilisation began' },
    cityIds: [
      'athens', // Parthenon, 5th century BC
      'rome', // Colosseum, AD 80
      'istanbul', // Hagia Sophia, 537
      'dubrovnik', // founded in the 7th century by refugees from Roman Epidaurum
    ],
  },
  {
    id: 'medieval',
    kind: 'history',
    title: { ko: '중세', en: 'Middle Ages' },
    period: { ko: '5~15세기', en: '5th–15th century' },
    note: { ko: '성벽과 성당, 돌길이 그대로 남은 도시', en: 'Walls, cathedrals and cobbled lanes still standing' },
    cityIds: [
      'prague', // Charles Bridge, begun 1357
      'bruges',
      'tallinn', // Hanseatic old town
      'cesky-krumlov',
      'rothenburg', // town walls
      'mont-saint-michel',
      'edinburgh', // Edinburgh Castle and the Royal Mile
      'krakow', // Main Market Square and Wawel
      'siena', // Piazza del Campo, 13th–14th century
      'toledo', // walled hilltop city
      'rhodes', // medieval town of the Knights of St John
      'york', // York Minster and city walls
    ],
  },
  {
    id: 'renaissance',
    kind: 'history',
    title: { ko: '르네상스', en: 'Renaissance' },
    period: { ko: '15~16세기', en: '15th–16th century' },
    note: { ko: '미켈란젤로와 다빈치가 남긴 도시', en: 'Cities of Michelangelo and Leonardo' },
    cityIds: [
      'florence', // Duomo dome, 1436
      'vatican-city', // Sistine Chapel ceiling, 1508–12
      'venice', // Rialto Bridge, 1591
      'milan', // The Last Supper, 1495–98
    ],
  },
  {
    id: 'baroque',
    kind: 'history',
    title: { ko: '대항해·바로크', en: 'Age of Sail & Baroque' },
    period: { ko: '16~18세기', en: '16th–18th century' },
    note: { ko: '바다로 나간 왕국과 화려한 바로크 궁전', en: 'Seafaring kingdoms and lavish Baroque palaces' },
    cityIds: [
      'lisbon', // Jerónimos Monastery, begun 1502
      'amsterdam', // 17th-century canal ring
      'porto', // Clérigos Tower, 18th century
      'madrid', // Royal Palace, 18th century
      'salzburg', // Baroque old town
      'munich', // Nymphenburg Palace, begun 1664
      'dublin', // Georgian squares, 18th century
    ],
  },
  {
    id: 'empire',
    kind: 'history',
    title: { ko: '제국의 시대', en: 'Age of Empires' },
    period: { ko: '19세기~20세기 초', en: '19th–early 20th century' },
    note: { ko: '대로와 궁전, 왕의 성이 만든 풍경', en: 'Boulevards, palaces and fairy-tale castles' },
    cityIds: [
      'paris', // Haussmann's boulevards, Eiffel Tower 1889
      'london', // Big Ben, 1859
      'vienna', // Ringstrasse, 1860s
      'budapest', // Parliament, 1904
      'fussen', // Neuschwanstein, begun 1869
    ],
  },
  {
    id: 'modern',
    kind: 'history',
    title: { ko: '현대', en: 'Modern' },
    period: { ko: '20세기~', en: '20th century–' },
    note: { ko: '과감한 건축과 20세기 역사의 현장', en: 'Bold architecture and the sites of 20th-century history' },
    cityIds: [
      'barcelona', // Sagrada Família, begun 1882
      'berlin', // Berlin Wall, 1961–89
      'bilbao', // Guggenheim Museum, 1997
      'valencia', // City of Arts and Sciences, from 1998
      'rotterdam', // postwar architecture
    ],
  },
  {
    id: 'viking',
    kind: 'culture',
    title: { ko: '바이킹', en: 'Vikings' },
    period: { ko: '8~11세기', en: '8th–11th century' },
    note: { ko: '바이킹 배와 왕의 고분, 북유럽 신화의 무대', en: 'Longships, royal mounds and the world of Norse myth' },
    cityIds: [
      'roskilde', // Viking Ship Museum
      'uppsala', // royal mounds of Gamla Uppsala
      'trondheim', // founded by the Viking king Olaf Tryggvason, 997
      'reykjavik', // Settlement Exhibition, c. 871
    ],
  },
  {
    id: 'islamic',
    kind: 'culture',
    title: { ko: '이슬람과 유럽이 만난 곳', en: 'Where Islam met Europe' },
    period: { ko: '8~16세기', en: '8th–16th century' },
    note: { ko: '모스크와 궁전, 성당이 한 도시에 겹친 풍경', en: 'Mosques, palaces and cathedrals layered in one city' },
    cityIds: [
      'granada', // Alhambra, 13th–14th century
      'seville', // Alcázar, Moorish and Mudéjar palace
      'sarajevo', // Ottoman Baščaršija, 15th century
      'mostar', // Old Bridge, 1566
    ],
  },
  {
    id: 'alps',
    kind: 'nature',
    title: { ko: '알프스', en: 'The Alps' },
    period: { ko: '봉우리 · 빙하 · 호수', en: 'Peaks · glaciers · lakes' },
    note: { ko: '산악열차로 오르는 봉우리와 맑은 호수 마을', en: 'Peaks by mountain railway and clear lakeside villages' },
    cityIds: ['interlaken', 'grindelwald', 'zermatt', 'lucerne', 'chamonix', 'hallstatt', 'como', 'bled'],
  },
  {
    id: 'mediterranean',
    kind: 'nature',
    title: { ko: '지중해', en: 'The Mediterranean' },
    period: { ko: '해안 절벽 · 섬', en: 'Cliffs · islands' },
    note: { ko: '절벽 위 마을과 하얀 섬, 햇살 가득한 바다', en: 'Clifftop villages, white islands and sunlit sea' },
    cityIds: ['amalfi', 'cinque-terre', 'nice', 'palma', 'santorini', 'taormina'],
  },
  {
    id: 'adriatic',
    kind: 'nature',
    title: { ko: '아드리아해', en: 'The Adriatic' },
    period: { ko: '성벽 도시 · 섬', en: 'Walled towns · islands' },
    note: { ko: '붉은 지붕 성벽 도시와 맑은 바다', en: 'Red-roofed walled towns over clear water' },
    cityIds: ['kotor', 'hvar', 'rovinj', 'piran', 'polignano-a-mare'],
  },
  {
    id: 'north-sea',
    kind: 'nature',
    title: { ko: '북해 · 피오르', en: 'North Sea & fjords' },
    period: { ko: '피오르 · 해안', en: 'Fjords · coast' },
    note: { ko: '깎아지른 피오르와 항구 도시', en: 'Sheer fjords and harbour towns' },
    cityIds: ['bergen', 'flam', 'alesund', 'stavanger'],
  },
]
