import type { RawRoute } from './routes'

const LYON = '파리 리옹역|Paris Gare de Lyon'
const MONTP = '파리 몽파르나스역|Paris Montparnasse'
const EST = '파리 동역|Paris Gare de l\'Est'
const LAZARE = '파리 생라자르역|Paris Saint-Lazare'

export const routesFr: RawRoute[] = [
  // —— Paris day trips ——
  ['paris', 'fontainebleau', 'train', 40, false, LYON, '퐁텐블로-아봉역|Fontainebleau–Avon', '교외선 R|suburban line R'],
  ['paris', 'giverny', 'mixed', 75, false, LAZARE, '베르농-지베르니역|Vernon–Giverny', '베르농까지 기차 후 셔틀버스|train to Vernon, then shuttle bus'],
  ['paris', 'chartres', 'train', 65, false, MONTP, '샤르트르역|Chartres'],
  ['paris', 'reims', 'train', 46, true, EST, '랭스역|Reims', 'TGV'],
  ['paris', 'rouen', 'train', 80, false, LAZARE, '루앙 리브드루아트역|Rouen-Rive-Droite'],
  ['paris', 'amboise', 'train', 110, false, '파리 오스테를리츠역|Paris Austerlitz', '앙부아즈역|Amboise'],

  ['paris', 'honfleur', 'mixed', 190, false, LAZARE, '옹플뢰르 버스터미널|Honfleur bus station', '트루빌-도빌까지 기차 후 버스|train to Trouville-Deauville, then bus'],
  ['paris', 'etretat', 'mixed', 180, false, LAZARE, undefined, '르아브르까지 기차 후 버스|train to Le Havre, then bus'],

  // —— Paris to the regions ——
  ['paris', 'strasbourg', 'train', 106, true, EST, '스트라스부르역|Strasbourg-Ville', 'TGV'],
  ['paris', 'dijon', 'train', 95, true, LYON, '디종역|Dijon-Ville', 'TGV'],
  ['paris', 'lyon', 'train', 120, true, LYON, '리옹 파르디외역|Lyon Part-Dieu', 'TGV'],
  ['paris', 'annecy', 'train', 220, true, LYON, '안시역|Annecy', 'TGV'],
  ['paris', 'avignon', 'train', 160, true, LYON, '아비뇽 TGV역|Avignon TGV', 'TGV'],
  ['paris', 'marseille', 'train', 185, true, LYON, '마르세유 생샤를역|Marseille-Saint-Charles', 'TGV'],
  ['paris', 'montpellier', 'train', 195, true, LYON, '몽펠리에 생로슈역|Montpellier-Saint-Roch', 'TGV'],
  ['paris', 'nice', 'train', 340, true, LYON, '니스역|Nice-Ville', 'TGV'],
  ['paris', 'bordeaux', 'train', 125, true, MONTP, '보르도 생장역|Bordeaux-Saint-Jean', 'TGV'],
  ['paris', 'la-rochelle', 'train', 150, true, MONTP, '라로셸역|La Rochelle-Ville', 'TGV'],
  ['paris', 'toulouse', 'train', 260, true, MONTP, '툴루즈 마타비오역|Toulouse-Matabiau', 'TGV'],
  ['paris', 'saint-malo', 'train', 135, true, MONTP, '생말로역|Saint-Malo', 'TGV'],
  ['paris', 'bayeux', 'train', 130, false, LAZARE, '바이외역|Bayeux'],
  ['paris', 'mont-saint-michel', 'mixed', 225, true, MONTP, '몽생미셸 셔틀 정류장|Mont Saint-Michel shuttle stop', '렌까지 TGV 후 직행버스|TGV to Rennes, then direct coach'],

  // —— Between regional cities ——
  ['lyon', 'dijon', 'train', 120, false, '리옹 파르디외역|Lyon Part-Dieu', '디종역|Dijon-Ville', '일반 열차(TER) 기준 · TGV는 더 빠르고 예약 필수|regional (TER) trains · TGVs are faster and need a reservation'],
  ['lyon', 'annecy', 'train', 120, false, '리옹 파르디외역|Lyon Part-Dieu', '안시역|Annecy'],
  ['lyon', 'avignon', 'train', 65, true, '리옹 파르디외역|Lyon Part-Dieu', '아비뇽 TGV역|Avignon TGV', 'TGV'],
  ['lyon', 'marseille', 'train', 100, true, '리옹 파르디외역|Lyon Part-Dieu', '마르세유 생샤를역|Marseille-Saint-Charles', 'TGV'],
  ['lyon', 'montpellier', 'train', 105, true, '리옹 파르디외역|Lyon Part-Dieu', '몽펠리에 생로슈역|Montpellier-Saint-Roch', 'TGV'],
  ['lyon', 'strasbourg', 'train', 220, true, '리옹 파르디외역|Lyon Part-Dieu', '스트라스부르역|Strasbourg-Ville', 'TGV'],
  ['annecy', 'chamonix', 'bus', 90, false, '안시 버스터미널|Annecy bus station', '샤모니 쉬드 버스터미널|Chamonix Sud bus station', '직행 버스|direct coach'],
  ['annecy', 'chamonix', 'train', 180, false, '안시역|Annecy', '샤모니 몽블랑역|Chamonix-Mont-Blanc', '라로슈쉬르포롱·생제르베에서 환승|change at La Roche-sur-Foron and Saint-Gervais'],
  ['strasbourg', 'dijon', 'train', 125, true, '스트라스부르역|Strasbourg-Ville', '디종역|Dijon-Ville', 'TGV'],
  ['bordeaux', 'arcachon', 'train', 50, false, '보르도 생장역|Bordeaux-Saint-Jean', '아르카숑역|Arcachon'],
  ['bordeaux', 'biarritz', 'train', 115, true, '보르도 생장역|Bordeaux-Saint-Jean', '비아리츠역|Biarritz', 'TGV'],
  ['bordeaux', 'toulouse', 'train', 125, true, '보르도 생장역|Bordeaux-Saint-Jean', '툴루즈 마타비오역|Toulouse-Matabiau'],
  ['bordeaux', 'la-rochelle', 'train', 140, true, '보르도 생장역|Bordeaux-Saint-Jean', '라로셸역|La Rochelle-Ville'],
  ['toulouse', 'montpellier', 'train', 130, true, '툴루즈 마타비오역|Toulouse-Matabiau', '몽펠리에 생로슈역|Montpellier-Saint-Roch'],
  ['montpellier', 'avignon', 'train', 60, false, '몽펠리에 생로슈역|Montpellier-Saint-Roch', '아비뇽 상트르역|Avignon-Centre'],
  ['avignon', 'marseille', 'train', 35, true, '아비뇽 TGV역|Avignon TGV', '마르세유 생샤를역|Marseille-Saint-Charles', 'TGV · 일반 열차는 아비뇽 상트르역에서 약 1시간 15분|TGV · regional trains from Avignon-Centre take about 1h15'],
  ['marseille', 'cannes', 'train', 125, false, '마르세유 생샤를역|Marseille-Saint-Charles', '칸역|Cannes'],
  ['marseille', 'nice', 'train', 155, false, '마르세유 생샤를역|Marseille-Saint-Charles', '니스역|Nice-Ville'],
  ['cannes', 'nice', 'train', 30, false, '칸역|Cannes', '니스역|Nice-Ville'],
  ['nice', 'monaco', 'train', 22, false, '니스역|Nice-Ville', '모나코 몬테카를로역|Monaco–Monte-Carlo'],
  ['nice', 'monte-carlo', 'train', 22, false, '니스역|Nice-Ville', '모나코 몬테카를로역|Monaco–Monte-Carlo'],
  ['cannes', 'monaco', 'train', 65, false, '칸역|Cannes', '모나코 몬테카를로역|Monaco–Monte-Carlo'],

  // —— Corsica ——
  ['marseille', 'ajaccio', 'ferry', 720, false, '마르세유 여객터미널|Marseille ferry terminal', '아작시오 여객터미널|Ajaccio ferry terminal', '야간 페리|overnight ferry'],
  ['ajaccio', 'bonifacio', 'bus', 300, false, undefined, undefined, '포르토베키오에서 환승|change at Porto-Vecchio'],
  ['ajaccio', 'calvi', 'train', 300, false, '아작시오역|Ajaccio', '칼비역|Calvi', '폰테 레차에서 환승|change at Ponte Leccia'],
]
