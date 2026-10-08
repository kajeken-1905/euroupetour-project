import type { RawItinerary } from './itinerary-helper'

/** France and Monaco. Numbers are highlight numbers (`<city>-hN`) in walking order. */
export const itineraryFr: Record<string, RawItinerary> = {
  paris: {
    days: [
      ['에펠탑과 앵발리드|Eiffel Tower & Invalides', 10, 1, 11, 12, 13],
      ['루브르와 시테 섬|Louvre & Île de la Cité', 18, 19, 2, 27, 25, 3],
      ['개선문에서 몽마르트르|Arc de Triomphe to Montmartre', 6, 15, 17, 21, 4, 36],
    ],
    trips: [['베르사유|Versailles', 7]],
  },
  lyon: [2, 1, 3, 5, 4],
  marseille: { days: [['', 1, 5, 3, 2]], trips: [['카랑크|Calanques', 4]] },
  nice: [5, 1, 4, 2, 3],
  bordeaux: [2, 3, 1, 5, 4],
  strasbourg: [1, 4, 2, 5, 3],
  annecy: [2, 3, 5, 4, 1],
  avignon: [4, 1, 3, 2, 5],
  giverny: [2, 3, 1, 4],
  fontainebleau: { days: [['', 2, 1]], trips: [['숲과 바르비종|Forest & Barbizon', 3, 4]] },
  chartres: [1, 2, 3, 4],
  reims: { days: [['', 1, 3, 4, 2]], trips: [['에페르네|Épernay', 5]] },
  amboise: { days: [['', 1, 2]], trips: [['루아르 고성|Loire châteaux', 3, 4]] },
  rouen: [3, 2, 1, 4],
  honfleur: [1, 2, 3, 4],
  etretat: [4, 1, 2, 3],
  bayeux: { days: [['', 2]], trips: [['노르망디 상륙 해변|D-Day beaches', 4, 3, 5]] },
  'saint-malo': { days: [['', 1, 3, 2]], trips: [['디낭|Dinan', 4]] },
  'la-rochelle': { days: [['', 2, 1, 4]], trips: [['레 섬|Île de Ré', 3]] },
  arcachon: {
    days: [['', 3, 2]],
    trips: [
      ['필라 사구|Dune du Pilat', 1],
      ['캅 페레|Cap Ferret', 4],
    ],
  },
  biarritz: { days: [['', 3, 1, 2]], trips: [['생장드뤼즈|Saint-Jean-de-Luz', 4]] },
  ajaccio: { days: [['', 1, 3, 4]], trips: [['상기네르 제도|Sanguinaires Islands', 2]] },
  bonifacio: { days: [['', 3, 1, 2]], trips: [['라베치 제도|Lavezzi Islands', 4]] },
  calvi: { days: [['', 1, 2, 3]], trips: [['레베치오 해안|Revellata coast', 4]] },
  toulouse: { days: [['', 1, 2, 3, 4]], trips: [['시테 드 레스파스|Cité de l’espace', 5]] },
  montpellier: [5, 1, 4, 2, 3],
  dijon: [1, 2, 3, 4, 5],
  chamonix: {
    days: [
      ['에귀디미디와 시내|Aiguille du Midi & town', 1, 3, 5],
      ['몽텐베르와 브르방|Montenvers & Brévent', 2, 4],
    ],
  },
  cannes: [3, 1, 2],
  'mont-saint-michel': [2, 1, 3, 4],
  monaco: [4, 1, 2, 5, 3],
  'monte-carlo': [3, 2, 1, 5, 4],
}
