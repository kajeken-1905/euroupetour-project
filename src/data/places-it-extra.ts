import { place } from './placeFactory'
import type { Place } from '../types'

export const placesITExtra: Place[] = [
  // —— rome ——
  place('rome-fine_dining-1', 'rome', 'fine_dining', 'La Pergola', 4.7, 'Rome', '미슐랭 로마 파인 다이닝.', 'Michelin Rome fine dining.', { reviewCount: 1800 }),
  place('rome-fine_dining-2', 'rome', 'fine_dining', 'Roscioli Salumeria', 4.6, 'Rome', '살루메리아·파스타.', 'Salumeria and pasta.', { reviewCount: 6200 }),
  place('rome-fine_dining-3', 'rome', 'fine_dining', 'Armando al Pantheon', 4.5, 'Rome', '클래식 로마 트라토리아.', 'Classic Roman trattoria.', { reviewCount: 4800 }),
  place('rome-fine_dining-4', 'rome', 'fine_dining', 'Da Enzo al 29', 4.5, 'Rome', '트라스테베레 트라토리아.', 'Trastevere trattoria.', { reviewCount: 7200 }),
  place('rome-fine_dining-5', 'rome', 'fine_dining', 'Felice a Testaccio', 4.5, 'Rome', '카르보나라·로컬 클래식.', 'Carbonara and local classics.', { reviewCount: 5600 }),
  place('rome-bakery-1', 'rome', 'bakery', 'Roscioli Forno', 4.6, 'Rome', '피자 비안카·빵.', 'Pizza bianca and bread.', { reviewCount: 4800 }),
  place('rome-bakery-2', 'rome', 'bakery', 'Pasticceria Boccione', 4.5, 'Rome', '유대인 게토 페이스트리.', 'Jewish Ghetto pastries.', { reviewCount: 3200 }),
  place('rome-bakery-3', 'rome', 'bakery', 'Antico Forno', 4.4, 'Rome', '전통 빵집.', 'Traditional bakery.', { reviewCount: 2100 }),
  place('rome-bakery-4', 'rome', 'bakery', 'Regoli', 4.5, 'Rome', '클래식 파티스리.', 'Classic pasticceria.', { reviewCount: 2800 }),
  place('rome-cafe-1', 'rome', 'cafe', 'Sant\'Eustachio Il Caffè', 4.5, 'Rome', '로마 에스프레소 클래식.', 'Classic Roman espresso.', { reviewCount: 9800 }),
  place('rome-cafe-2', 'rome', 'cafe', 'Tazza d\'Oro', 4.4, 'Rome', '판테온 근처 커피.', 'Coffee near the Pantheon.', { reviewCount: 7600 }),
  place('rome-cafe-3', 'rome', 'cafe', 'Sciascia Caffè', 4.5, 'Rome', '역사적 카페.', 'Historic café.', { reviewCount: 2400 }),
  place('rome-cafe-4', 'rome', 'cafe', 'Faroe / specialty peers', 4.5, 'Rome', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('rome-korean-1', 'rome', 'korean', 'Gainn', 4.5, 'Via dei Mille 18, 00185 Roma', '미쉐린 가이드 등재 한식당.', 'Michelin Guide-listed Korean restaurant.'),

  // —— milan ——
  place('milan-korean-1', 'milan', 'korean', 'Ginmi', 4.5, 'Via Giovanni Paisiello 7, 20131 Milano', '돌솥비빔밥이 유명한 한식당.', 'Korean restaurant known for dolsot bibimbap.'),

  // —— florence ——
  place('florence-fine_dining-1', 'florence', 'fine_dining', 'Enoteca Pinchiorri', 4.6, 'Via Ghibellina 87, 50122 Firenze', '미쉐린 3스타 레스토랑.', 'Three-Michelin-star restaurant.'),

  // —— venice ——
  place('venice-fine_dining-1', 'venice', 'fine_dining', 'Antiche Carampane', 4.6, 'Rio Terà de le Carampane 1911, 30125 Venezia', '정통 베네치아 해산물 요리.', 'Authentic Venetian seafood cuisine.'),

  // —— naples ——
  place('naples-fine_dining-1', 'naples', 'fine_dining', 'Palazzo Petrucci', 4.6, 'Via Posillipo 16C, 80123 Napoli', '나폴리 최초의 미쉐린 스타 레스토랑.', 'Naples\' first Michelin-starred restaurant.'),

  // —— bologna ——
  place('bologna-fine_dining-1', 'bologna', 'fine_dining', 'All\'Osteria Bottega', 4.6, 'Via Santa Caterina 51, 40123 Bologna', '미쉐린 가이드 등재, 정통 에밀리아 요리.', 'Michelin Guide-listed, authentic Emilian cooking.'),

  // —— verona ——
  place('verona-fine_dining-1', 'verona', 'fine_dining', 'Ristorante il Desco', 4.6, 'Via Dietro San Sebastiano 5-7, 37121 Verona', '미쉐린 스타 레스토랑.', 'Michelin-starred restaurant.'),

  // —— turin ——
  place('turin-fine_dining-1', 'turin', 'fine_dining', 'Al Gatto Nero', 4.5, 'Piazza Vittorio Veneto 2, 10123 Torino', '토리노의 전통 피에몬테 요리.', 'Traditional Piedmontese cuisine in Turin.'),

  // —— amalfi ——
  place('amalfi-fine_dining-1', 'amalfi', 'fine_dining', 'Da Gemma', 4.6, 'Via Fra Gerardo Sasso 9, 84011 Amalfi', '아말피의 역사적인 시푸드 레스토랑.', 'Historic seafood restaurant in Amalfi.'),

  // —— siena ——
  place('siena-fine_dining-1', 'siena', 'fine_dining', 'Particolare di Siena', 4.6, 'Via Baldassarre Peruzzi 26, 53100 Siena', '미쉐린 스타 레스토랑.', 'Michelin-starred restaurant.'),

  // —— genoa ——
  place('genoa-fine_dining-1', 'genoa', 'fine_dining', 'Hostaria Ducale', 4.6, 'Salita di S. Matteo 29R, 16123 Genova', '미쉐린 가이드 등재 리구리아 요리.', 'Michelin Guide-listed Ligurian cuisine.'),

  // —— palermo ——
  place('palermo-fine_dining-1', 'palermo', 'fine_dining', 'Gagini Restaurant', 4.6, 'Via dei Cassari 35, 90133 Palermo', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),

]
