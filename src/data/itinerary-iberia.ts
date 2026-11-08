import type { RawItinerary } from './itinerary-helper'

/** Spain, Portugal and Andorra. */
export const itineraryIberia: Record<string, RawItinerary> = {
  madrid: {
    days: [
      ['구시가와 왕궁|Old town & Royal Palace', 5, 26, 21, 4, 11, 24, 13, 3, 6, 10, 9],
      ['그란비아와 프라도, 레티로|Gran Vía, Prado & Retiro', 28, 20, 8, 25, 27, 7, 19, 1, 2],
      ['레이나 소피아와 소로야|Reina Sofía & Sorolla', 14, 18, 23, 12],
    ],
    trips: [['엘에스코리알|El Escorial', 15], ['알칼라 데 에나레스|Alcalá de Henares', 16], ['아랑후에스|Aranjuez', 17]],
  },
  barcelona: {
    days: [
      ['람블라스와 고딕 지구|La Rambla & Gothic Quarter', 9, 4, 10, 17, 15, 3, 13, 27],
      ['가우디|Gaudí', 6, 7, 1, 26, 2, 28],
      ['몬주익과 바다|Montjuïc & the waterfront', 20, 8, 19, 5],
    ],
    trips: [['피게레스 달리 극장 박물관|Figueres Dalí Museum', 25], ['카바 와이너리|Cava cellars', 30]],
  },
  cadiz: [1, 2, 5, 6, 4, 3],
  seville: {
    days: [
      ['대성당과 알카사르|Cathedral & Alcázar', 2, 6, 7, 1, 12, 3],
      ['시내와 트리아나|City centre & Triana', 11, 13, 5, 9, 8, 4],
    ],
    trips: [['헤레스 셰리 와이너리|Jerez sherry bodegas', 14]],
  },
  granada: {
    days: [
      ['알함브라|Alhambra', 12, 7, 1, 11, 3],
      ['시내와 알바이신|City centre & Albaicín', 4, 6, 10, 9, 8, 2, 13, 5],
    ],
  },
  valencia: { days: [['', 7, 3, 2, 4, 6, 1, 5]], trips: [['알부페라|L’Albufera', 8]] },
  malaga: { days: [['', 3, 2, 8, 1, 5, 9, 4]], trips: [['미하스|Mijas', 6], ['프리힐리아나|Frigiliana', 7], ['카미니토 델 레이|Caminito del Rey', 10]] },
  bilbao: { days: [['', 1, 5, 6, 2, 3, 7]], trips: [['비스카야 다리|Vizcaya Bridge', 4], ['산 후안 데 가스텔루가체|San Juan de Gaztelugatxe', 8]] },
  cuenca: { days: [['', 1, 2, 4, 3, 5]], trips: [['시우다드 엔칸타다|Ciudad Encantada', 6]] },
  toledo: { days: [['', 8, 2, 7, 1, 3, 4, 6, 5]], trips: [['콘수에그라 풍차|Consuegra windmills', 10]] },
  cordoba: { days: [['', 4, 1, 6, 2, 3, 5]], trips: [['메디나 아사아라|Medina Azahara', 7]] },
  'san-sebastian': { days: [['', 5, 7, 6, 1, 3, 2, 4]], trips: [['게타리아|Getaria', 8]] },
  zaragoza: [2, 4, 1, 3, 6, 5],
  salamanca: [1, 5, 6, 2, 3, 7, 4],
  santiago: [5, 2, 1, 7, 3, 4, 6],
  segovia: { days: [['', 1, 5, 6, 7, 3, 4, 8, 2]], trips: [['라 그랑하|La Granja', 9]] },
  avila: [1, 3, 2, 4, 6, 5],
  ronda: { days: [['', 5, 3, 1, 2, 4]], trips: [['세테닐 데 라스 보데가스|Setenil de las Bodegas', 6]] },
  tarragona: { days: [['', 1, 3, 4, 2, 5]], trips: [['악마의 다리|Devil’s Bridge', 6]] },
  sitges: [1, 5, 3, 4, 2],
  girona: { days: [['', 4, 2, 1, 5, 3]], trips: [['베살루|Besalú', 6]] },
  montserrat: [1, 4, 3, 2],
  nerja: { days: [['', 4, 1, 3]], trips: [['수도교와 네르하 동굴|Aqueduct & Nerja Caves', 5, 2]] },
  gibraltar: [5, 1, 3, 4, 6],
  palma: { days: [['', 1, 3, 5, 2, 4, 6]], trips: [['발데모사|Valldemossa', 7], ['소예르 기차|Sóller train', 8]] },
  lisbon: {
    days: [
      ['호시우에서 바이샤·알파마|Rossio, Baixa & Alfama', 15, 8, 24, 7, 11, 13, 4, 23, 3],
      ['벨렝과 강변|Belém & the riverfront', 2, 9, 1, 34, 32, 33, 5, 27],
      ['굴벤키안·해양관과 시아두|Gulbenkian, the Oceanário & Chiado', 20, 21, 17, 25, 22],
    ],
    trips: [['마프라 궁전|Mafra', 18], ['테주강 건너 알마다|Across the Tagus to Almada', 29, 31, 30, 28]],
  },
  porto: {
    days: [
      ['볼량에서 대성당·히베이라|Bolhão, the cathedral & Ribeira', 8, 18, 19, 17, 6, 11, 12, 13, 1],
      ['다리 건너 가이아와 클레리구스|Across the bridge to Gaia, then Clérigos', 2, 20, 5, 3, 4, 7, 9, 15],
      ['보아비스타에서 바다까지|Boavista to the sea', 21, 14, 22],
    ],
    trips: [['도루 계곡|Douro Valley', 16]],
  },
  sintra: { days: [['', 1, 3, 2, 4]], trips: [['몬세라트와 호카곶|Monserrate & Cabo da Roca', 5, 6]] },
  faro: {
    days: [['', 4, 1, 2]],
    trips: [
      ['리아 포르모사|Ria Formosa', 3],
      ['파로 해변|Faro beach', 5],
    ],
  },
  coimbra: [6, 1, 2, 7, 4, 3, 5],
  funchal: { days: [['', 3, 4, 1, 2]], trips: [['카마라 드 로부스|Câmara de Lobos', 5]] },
  lagos: [2, 3, 4, 5, 1],
  cascais: [1, 5, 3, 4, 2],
  aveiro: { days: [['', 6, 1, 2, 3, 7, 5]], trips: [['코스타 노바와 바하|Costa Nova & Barra', 4, 8], ['비스타 알레그르|Vista Alegre', 9]] },
  tomar: [1, 3, 5, 4, 2],
  fatima: { days: [['', 3, 4, 1, 2, 5]], trips: [['바탈랴 수도원|Batalha Monastery', 6]] },
  evora: [4, 3, 2, 1, 5],
  obidos: [5, 4, 3, 1, 2],
  braga: { days: [['', 4, 2, 6, 3]], trips: [['봉 제수스와 사메이루|Bom Jesus & Sameiro', 1, 5]] },
  nazare: [1, 4, 2, 3, 5],
  guimaraes: [1, 2, 4, 3, 5],
  'andorra-la-vella': [1, 2, 3, 5, 4],
  'pas-de-la-casa': [3, 2, 4, 5],
  ordino: { days: [['', 1, 2, 5]], trips: [['아르칼리스|Arcalís', 4]] },
}
