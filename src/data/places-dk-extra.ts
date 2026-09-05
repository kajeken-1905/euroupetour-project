import { place } from './placeFactory'
import type { Place } from '../types'

export const placesDKExtra: Place[] = [
  // —— aarhus ——
  place('aarhus-fine_dining-1', 'aarhus', 'fine_dining', 'Domestic', 4.7, 'Mejlgade 35B, 8000 Aarhus C', '미슐랭 다이닝.', 'Michelin dining.', { reviewCount: 786 }),
  place('aarhus-fine_dining-2', 'aarhus', 'fine_dining', 'Frederikshøj', 4.9, 'Oddervej 19-21, 8000 Aarhus C', '미슐랭 2스타.', 'Two-Michelin-star dining.', { reviewCount: 1061 }),
  place('aarhus-fine_dining-3', 'aarhus', 'fine_dining', 'Substans', 4.9, 'Marianne Thomsens Gade 2F, 8000 Aarhus C', '미슐랭 다이닝.', 'Michelin dining.', { reviewCount: 509 }),
  place('aarhus-fine_dining-4', 'aarhus', 'fine_dining', 'Gastromé', 4.7, 'Grenåvej 127, 8200 Aarhus N', '미슐랭 다이닝.', 'Michelin dining.', { reviewCount: 197 }),
  place('aarhus-fine_dining-5', 'aarhus', 'fine_dining', 'Restaurant Malt', 4.2, 'Ceresbyen 63C, 8000 Aarhus C', '옛 세레스 양조장의 로컬 인기 레스토랑.', 'Local favorite in the old Ceres brewery.', { reviewCount: 3041 }),
  place('aarhus-bakery-1', 'aarhus', 'bakery', 'Lagkagehuset Aarhus', 4.5, 'M. P. Bruuns Gade 34, 8000 Aarhus C', '베이커리 체인.', 'Bakery chain.', { reviewCount: 994 }),
  place('aarhus-bakery-2', 'aarhus', 'bakery', 'La Cabra Bakery', 4.7, 'Borggade 4F, 8000 Aarhus C', '라틴쿼터 사워도우 베이커리.', 'Sourdough bakery in the Latin Quarter.', { reviewCount: 187 }),
  place('aarhus-bakery-3', 'aarhus', 'bakery', 'DavidBreadHead', 4.5, 'Ny Munkegade 4B, 8000 Aarhus C', '사워도우 마이크로 베이커리.', 'Sourdough micro-bakery.', { reviewCount: 349 }),
  place('aarhus-bakery-4', 'aarhus', 'bakery', 'Strandvejens Bageri', 4.7, 'Nordre Strandvej 11A, 8240 Risskov', '해안가 베이커리.', 'Seaside bakery in Risskov.', { reviewCount: 10 }),
  place('aarhus-cafe-1', 'aarhus', 'cafe', 'La Cabra Coffee', 4.4, 'Graven 20, 8000 Aarhus C', '스페셜티 로스터리.', 'Specialty coffee roastery.', { reviewCount: 121 }),
  place('aarhus-cafe-2', 'aarhus', 'cafe', 'Café Faust', 4.3, 'Åboulevarden 38, 8000 Aarhus C', '클래식 브런치 카페.', 'Classic brunch café.', { reviewCount: 489 }),
  place('aarhus-cafe-3', 'aarhus', 'cafe', 'ARoS café', 3.6, 'ARoS Allé 2, 8000 Aarhus C', '미술관 카페.', 'Museum café.', { reviewCount: 101 }),
  place('aarhus-cafe-4', 'aarhus', 'cafe', "Stiller's Coffee", 4.0, 'Klostergade 32, 8000 Aarhus C', '로스터리 겸 카페.', 'Roastery and coffee lab.', { reviewCount: 87 }),
  place('aarhus-cafe-5', 'aarhus', 'cafe', 'Bådcafé', 4.1, 'Marselisborg Havnevej 20, 8000 Aarhus C', '마르셀리스보 항구 카페.', 'Café at Marselisborg harbour.', { reviewCount: 161 }),
  place('aarhus-korean-1', 'aarhus', 'korean', 'Gogi The Korean Grillhouse', 4.3, 'Skt. Knuds Torv 25, 8000 Aarhus C', '한국식 그릴 하우스.', 'Korean grillhouse.', { reviewCount: 232 }),

  // —— odense ——
  place('odense-fine_dining-1', 'odense', 'fine_dining', 'Under Lindetræet', 4.5, 'Ramsherred 2, 5000 Odense C', '1771년 건물의 고급 다이닝.', 'Fine dining in an 1771 building.', { reviewCount: 858 }),
  place('odense-fine_dining-2', 'odense', 'fine_dining', 'ARO', 4.9, 'Østerbro 32, 5000 Odense C', '미슐랭 1스타.', 'One-Michelin-star dining.', { reviewCount: 397 }),
  place('odense-fine_dining-3', 'odense', 'fine_dining', 'Pasfall', 4.8, 'Brandts Passage 31, 5000 Odense C', '모던 데니시 다이닝.', 'Modern Danish dining.', { reviewCount: 526 }),
  place('odense-fine_dining-4', 'odense', 'fine_dining', 'Den Gamle Kro', 4.4, 'Overgade 23, 5000 Odense C', '전통 덴마크 요리.', 'Traditional Danish cuisine.', { reviewCount: 1126 }),
  place('odense-bakery-1', 'odense', 'bakery', 'Baker Boys', 4.5, 'Edisonsvej 27, 5000 Odense C', '모던 아티산 베이커리.', 'Modern artisan bakery.', { reviewCount: 113 }),
  place('odense-bakery-2', 'odense', 'bakery', 'Smörbagt', 4.5, 'Vestergade 44, 5000 Odense C', '사워도우와 크루아상.', 'Sourdough and croissants.', {}),
  place('odense-cafe-1', 'odense', 'cafe', 'Café Sølle', 4.8, 'Nedergade 18, 5000 Odense C', '스페셜티 커피와 내추럴 와인.', 'Specialty coffee and natural wine.', { reviewCount: 188 }),
  place('odense-cafe-2', 'odense', 'cafe', 'Café Biografen', 4.3, 'Brandts Passage 41, 5000 Odense C', '시네마 카페.', 'Cinema café.', { reviewCount: 380 }),
  place('odense-cafe-3', 'odense', 'cafe', "Nelle's Coffee & Wine", 4.4, 'Overgade 21B, 5000 Odense C', '올드타운 커피 & 와인바.', 'Old Town coffee and wine bar.', { reviewCount: 197 }),
  place('odense-korean-1', 'odense', 'korean', 'Sitta Korean BBQ', 3.7, 'Kongensgade 41, 5000 Odense C', '한국식 그릴셀프 BBQ.', 'Korean grill-it-yourself BBQ.', {}),

  // —— aalborg ——
  place('aalborg-fine_dining-1', 'aalborg', 'fine_dining', 'Restaurant Fusion', 4.4, 'Strandvejen 4, 9000 Aalborg', '림피오르 전망의 퓨전 다이닝.', 'Fusion dining overlooking the Limfjord.', { reviewCount: 424 }),
  place('aalborg-fine_dining-2', 'aalborg', 'fine_dining', 'Mortens Kro', 4.5, 'Mølleå 2-6, 9000 Aalborg', '로컬 파인 다이닝.', 'Local fine dining institution.', {}),
  place('aalborg-fine_dining-3', 'aalborg', 'fine_dining', 'Alimentum', 4.8, 'Løkkegade 23, 9000 Aalborg', '미슐랭 1스타, 팜투테이블.', 'One-Michelin-star, farm-to-table.', { reviewCount: 95 }),
  place('aalborg-bakery-1', 'aalborg', 'bakery', 'Lagkagehuset Aalborg', 4.2, 'Otto Mønsteds Vej 1, 9200 Aalborg SV', '베이커리 체인.', 'Bakery chain.', {}),
  place('aalborg-bakery-2', 'aalborg', 'bakery', 'Othello Bageriet', 4.4, 'Christiansgade 35, 9000 Aalborg', '120년 전통 베이커리.', 'Bakery with 120 years of history.', { reviewCount: 185 }),
  place('aalborg-cafe-1', 'aalborg', 'cafe', 'Behag Din Smag', 4.8, 'Slotsgade 16A, 9000 Aalborg', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 78 }),
  place('aalborg-cafe-2', 'aalborg', 'cafe', "Koch's Kaffebar", 4.0, 'Algade 23, 9000 Aalborg', '아늑한 가족 운영 카페.', 'Cozy family-run coffee shop.', {}),

  // —— roskilde ——
  place('roskilde-fine_dining-1', 'roskilde', 'fine_dining', 'Restaurant Store Børs', 4.2, 'Havnevej 43, 4000 Roskilde', '로스킬레 항구의 시푸드 다이닝.', 'Seafood dining at Roskilde harbour.', { reviewCount: 940 }),
  place('roskilde-fine_dining-2', 'roskilde', 'fine_dining', 'Raadhuskælderen', 4.2, 'Fondens Bro 3, 4000 Roskilde', '대성당 인근 시청 지하 레스토랑.', 'Cellar restaurant by the cathedral.', { reviewCount: 2347 }),
  place('roskilde-fine_dining-3', 'roskilde', 'fine_dining', 'Gusto Giusto', 4.4, 'Jernbanegade 19, 4000 Roskilde', '이탈리안 파인 다이닝.', 'Italian fine dining.', {}),
  place('roskilde-bakery-1', 'roskilde', 'bakery', 'Bakkegårdens Bageri', 4.3, 'Køgevej 39, 4000 Roskilde', '100년 전통 베이커리.', 'Bakery with 100 years of tradition.', { reviewCount: 267 }),
  place('roskilde-bakery-2', 'roskilde', 'bakery', 'Rustik Bageriet', 4.7, 'Støden 1, 4000 Roskilde', '베이커리 겸 카페.', 'Bakery and café.', { reviewCount: 48 }),
  place('roskilde-cafe-1', 'roskilde', 'cafe', 'MØRK', 4.8, 'Penselstrøget 44, 4000 Roskilde', '뮤지콘 지구 커피 로스터리.', 'Coffee roastery in the Musicon district.', { reviewCount: 178 }),
  place('roskilde-cafe-2', 'roskilde', 'cafe', 'Kaffekilden', 4.3, 'Hestetorvet 7, 4000 Roskilde', '로스킬레역 인근 카페.', 'Café near Roskilde station.', {}),
  place('roskilde-cafe-3', 'roskilde', 'cafe', 'Café 48', 4.5, 'Algade 48, 4000 Roskilde', '클래식 스뫼레브뢰드 카페.', 'Classic smørrebrød café.', {}),
  place('roskilde-korean-1', 'roskilde', 'korean', 'Seoul Koreansk BBQ', 4.7, "Ro's Torv 1, 4000 Roskilde", '로스토브의 한국식 셀프 그릴.', 'Korean grill-it-yourself BBQ at Ro’s Torv.', { reviewCount: 251 }),

]
