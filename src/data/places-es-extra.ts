import { place } from './placeFactory'
import type { Place } from '../types'

export const placesESExtra: Place[] = [
  // —— madrid ——
  place('madrid-fine_dining-1', 'madrid', 'fine_dining', 'DiverXO', 4.7, 'Madrid', '창의 미슐랭 코스.', 'Creative Michelin tasting.', { reviewCount: 1800 }),
  place('madrid-fine_dining-2', 'madrid', 'fine_dining', 'Botín', 4.5, 'Madrid', '세계 최고령 식당 클래식.', 'World’s oldest restaurant classic.', { reviewCount: 12000 }),
  place('madrid-fine_dining-3', 'madrid', 'fine_dining', 'StreetXO', 4.5, 'Madrid', '아시안 퓨전 캐주얼 파인.', 'Asian-fusion casual fine.', { reviewCount: 4200 }),
  place('madrid-fine_dining-4', 'madrid', 'fine_dining', 'Lakasa', 4.5, 'Madrid', '시즌 스페인 다이닝.', 'Seasonal Spanish dining.', { reviewCount: 2100 }),
  place('madrid-fine_dining-5', 'madrid', 'fine_dining', 'Casa Lucio', 4.4, 'Madrid', '휴보스 로토스 클래식.', 'Classic huevos rotos.', { reviewCount: 8600 }),
  place('madrid-bakery-1', 'madrid', 'bakery', 'Panadería Reliquiae', 4.5, 'Madrid', '사워도우 베이커리.', 'Sourdough bakery.', { reviewCount: 1600 }),
  place('madrid-bakery-2', 'madrid', 'bakery', 'Moulin Chocolat', 4.5, 'Madrid', '페이스트리·초콜릿.', 'Pastries and chocolate.', { reviewCount: 2400 }),
  place('madrid-bakery-3', 'madrid', 'bakery', 'Panic', 4.4, 'Madrid', '장인 빵집.', 'Artisan bakery.', { reviewCount: 1800 }),
  place('madrid-bakery-4', 'madrid', 'bakery', 'La Duquesita', 4.4, 'Madrid', '역사적 파티스리.', 'Historic pastry shop.', { reviewCount: 3200 }),
  place('madrid-cafe-1', 'madrid', 'cafe', 'Café Federal', 4.5, 'Madrid', '브런치·스페셜티.', 'Brunch and specialty.', { reviewCount: 2800 }),
  place('madrid-cafe-2', 'madrid', 'cafe', 'HanSo Café', 4.5, 'Madrid', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1600 }),
  place('madrid-cafe-3', 'madrid', 'cafe', 'Café Comercial', 4.3, 'Madrid', '클래식 카페.', 'Classic café.', { reviewCount: 5400 }),
  place('madrid-cafe-4', 'madrid', 'cafe', 'Toma Café', 4.5, 'Madrid', '로스터리 카페.', 'Roastery café.', { reviewCount: 2100 }),
  place('madrid-korean-1', 'madrid', 'korean', 'Maru', 4.5, 'Calle de la Reina 37, 28004 Madrid', '마드리드의 대표 한식당.', 'Well-known Korean restaurant in Madrid.'),

  // —— barcelona ——
  place('barcelona-fine_dining-1', 'barcelona', 'fine_dining', 'Alkimia', 4.6, 'Ronda de Sant Antoni 41, 08011 Barcelona', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),
  place('barcelona-korean-1', 'barcelona', 'korean', 'Shingané', 4.5, 'Carrer de Calàbria 232, 08029 Barcelona', '에이샴플레 지구의 정통 한식당.', 'Authentic Korean restaurant in Eixample.'),

  // —— seville ——
  place('seville-fine_dining-1', 'seville', 'fine_dining', 'Lalola de Javi Abascal', 4.6, 'Marco Sancho 1, 41003 Sevilla', '미쉐린 빕 구르망 레스토랑.', 'Michelin Bib Gourmand restaurant.'),

  // —— granada ——
  place('granada-fine_dining-1', 'granada', 'fine_dining', 'Damasqueros', 4.6, 'Calle Damasqueros 3, 18009 Granada', '미쉐린 추천 창의적 테이스팅 메뉴.', 'Michelin-recommended creative tasting menus.'),
  place('granada-korean-1', 'granada', 'korean', 'CoreOlé Korean Food Bar', 4.5, 'C. Elvira, 114, 18010 Granada', '알바이신 지구의 한식당.', 'Korean restaurant in the Albaicín district.'),

  // —— valencia ——
  place('valencia-fine_dining-1', 'valencia', 'fine_dining', 'Ricard Camarena Restaurant', 4.5, 'Carrer del Dr. Sumsi 4, 46005 València', '미쉐린 2스타 파인 다이닝.', 'Two-Michelin-star fine dining.'),
  place('valencia-fine_dining-2', 'valencia', 'fine_dining', 'El Poblet', 4.5, 'Carrer dels Correus 8, 46002 València', '미쉐린 2스타 발렌시아 요리.', 'Two-Michelin-star Valencian cuisine.'),
  place('valencia-fine_dining-3', 'valencia', 'fine_dining', 'Fierro', 4.5, 'Carrer Dr. Serrano 4, 46006 València', '미쉐린 1스타 지중해 요리.', 'One-Michelin-star Mediterranean cuisine.'),
  place('valencia-bakery-1', 'valencia', 'bakery', 'La Más Bonita Ruzafa', 4.4, 'Pujada del Toledà 8, 46001 València', '루사파의 인기 베이커리 카페.', 'Popular bakery café in Ruzafa.'),
  place('valencia-cafe-1', 'valencia', 'cafe', 'Bluebell Coffee Co.', 4.4, 'Mercat Central, 46001 València', '발렌시아 최초의 스페셜티 커피.', "Valencia's first specialty coffee shop."),

  // —— malaga ——
  place('malaga-fine_dining-1', 'malaga', 'fine_dining', 'José Carlos García Restaurante', 4.6, 'Puerto de Málaga, Plaza de la Capilla 1, 29016 Málaga', '말라가 유일의 미쉐린 스타 레스토랑.', 'Málaga\'s only Michelin-starred restaurant.'),

  // —— bilbao ——
  place('bilbao-fine_dining-1', 'bilbao', 'fine_dining', 'Nerua Guggenheim Bilbao', 4.6, 'Abandoibarra Etorbidea 2, 48001 Bilbao', '구겐하임 미술관 안의 미쉐린 레스토랑.', 'Michelin restaurant inside the Guggenheim Museum.'),

  // —— toledo ——
  place('toledo-fine_dining-1', 'toledo', 'fine_dining', 'Adolfo', 4.6, 'Calle Hombre de Palo 7, 45001 Toledo', '14세기 건물의 톨레도 미식.', 'Toledo fine dining in a 14th-century house.'),

  // —— cordoba ——
  place('cordoba-fine_dining-1', 'cordoba', 'fine_dining', 'Noor', 4.6, 'Paseo de la Victoria s/n, 14004 Córdoba', '미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant.'),

  // —— san-sebastian ——
  place('san-sebastian-fine_dining-1', 'san-sebastian', 'fine_dining', 'Arzak', 4.7, 'Alcalde J. Elosegi Hiribidea 273, 20015 Donostia', '미쉐린 3스타 레스토랑.', 'Three-Michelin-star restaurant.'),

  // —— zaragoza ——
  place('zaragoza-fine_dining-1', 'zaragoza', 'fine_dining', 'La Prensa', 4.6, 'Calle de los Estébanes 10, 50003 Zaragoza', '미쉐린 1스타 아라곤 요리.', 'One-Michelin-star Aragonese cuisine.'),

  // —— salamanca ——
  place('salamanca-fine_dining-1', 'salamanca', 'fine_dining', 'Restaurante Víctor Gutiérrez', 4.6, 'Calle Empedrada 4, 37001 Salamanca', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),

  // —— santiago ——
  place('santiago-fine_dining-1', 'santiago', 'fine_dining', 'Abastos 2.0', 4.6, 'Rúa das Hortas 1, 15705 Santiago de Compostela', '아바스토스 시장의 갈리시아 요리.', 'Galician cuisine at the Abastos market.'),

  // —— segovia ——
  place('segovia-fine_dining-1', 'segovia', 'fine_dining', 'José María', 4.6, 'Cronista Lecea 11, 40001 Segovia', '세고비아 명물 코치니요 아사도.', 'Segovia\'s classic roast suckling pig.'),

  // —— ronda ——
  place('ronda-fine_dining-1', 'ronda', 'fine_dining', 'Bardal', 4.7, 'Calle José Aparicio 1, 29400 Ronda', '미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant.'),

  // —— girona ——
  place('girona-fine_dining-1', 'girona', 'fine_dining', 'El Celler de Can Roca', 4.7, 'Can Sunyer 48, 17007 Girona', '미쉐린 3스타, 세계 최고 레스토랑 중 하나.', 'Three-Michelin-star restaurant, among the world\'s best.'),

  // —— palma ——
  place('palma-fine_dining-1', 'palma', 'fine_dining', 'Marc Fosh Restaurant', 4.6, 'Carrer de la Missió 7, 07003 Palma', '미쉐린 1스타 지중해 요리.', 'One-Michelin-star Mediterranean cuisine.'),


  // —— nerja ——
  place('nerja-fine_dining-1', 'nerja', 'fine_dining', 'Oliva', 4.6, 'Plaza de España 2, 29780 Nerja', '지중해·스페인 요리의 미식 레스토랑.', 'Gourmet Mediterranean and Spanish cuisine.'),

  // —— gibraltar ——
  place('gibraltar-fine_dining-1', 'gibraltar', 'fine_dining', 'Rock Salt', 4.5, 'Unit 2, Chatham Counterguard, GX11 1AA Gibraltar', '지브롤터 해협 전망 레스토랑.', 'Restaurant with views over the Strait of Gibraltar.'),

]
