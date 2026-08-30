import { place } from './placeFactory'
import type { Place } from '../types'

export const placesTRExtra: Place[] = [
  // —— istanbul ——
  place('istanbul-fine_dining-1', 'istanbul', 'fine_dining', 'Mikla', 4.7, 'Istanbul', '보스포러스 전망 모던 터키.', 'Modern Turkish with Bosphorus views.', { reviewCount: 2400 }),
  place('istanbul-fine_dining-2', 'istanbul', 'fine_dining', 'Neolokal', 4.6, 'Istanbul', '아나톨리아 재해석 코스.', 'Reimagined Anatolian tasting.', { reviewCount: 1800 }),
  place('istanbul-fine_dining-3', 'istanbul', 'fine_dining', 'Nusr-Et / steak peers', 4.4, 'Istanbul', '스테이크·캐주얼 파인.', 'Steak and casual fine.', { reviewCount: 6200 }),
  place('istanbul-fine_dining-4', 'istanbul', 'fine_dining', 'Ciya Sofrası', 4.5, 'Istanbul', '지역 가정식 클래식.', 'Regional home-style classic.', { reviewCount: 4800 }),
  place('istanbul-fine_dining-5', 'istanbul', 'fine_dining', 'Pandeli', 4.4, 'Istanbul', '역사적 오스만 다이닝.', 'Historic Ottoman dining.', { reviewCount: 3200 }),
  place('istanbul-bakery-1', 'istanbul', 'bakery', 'Filizler Tarihi Fırın / peers', 4.5, 'Istanbul', '시밋·로컬 빵.', 'Simit and local bread.', { reviewCount: 2800 }),
  place('istanbul-bakery-2', 'istanbul', 'bakery', 'Karaköy Güllüoğlu', 4.6, 'Istanbul', '바클라바 전문.', 'Baklava specialists.', { reviewCount: 12000 }),
  place('istanbul-bakery-3', 'istanbul', 'bakery', 'Baylan Pastanesi', 4.4, 'Istanbul', '클래식 파티스리.', 'Classic pastry shop.', { reviewCount: 3600 }),
  place('istanbul-bakery-4', 'istanbul', 'bakery', 'Çırağan bakery counters', 4.3, 'Istanbul', '호텔·베이커리 카운터.', 'Hotel bakery counters.', { reviewCount: 1400 }),
  place('istanbul-cafe-1', 'istanbul', 'cafe', 'Kronotrop', 4.5, 'Istanbul', '스페셜티 로스터리.', 'Specialty roastery.', { reviewCount: 2100 }),
  place('istanbul-cafe-2', 'istanbul', 'cafe', 'Mandabatmaz', 4.4, 'Istanbul', '터키식 커피 클래식.', 'Classic Turkish coffee.', { reviewCount: 4200 }),
  place('istanbul-cafe-3', 'istanbul', 'cafe', 'Petra Roasting Co.', 4.5, 'Istanbul', '로스터리 카페.', 'Roastery café.', { reviewCount: 1800 }),
  place('istanbul-cafe-4', 'istanbul', 'cafe', 'Karabatak', 4.4, 'Istanbul', '카라쾨이 브런치 카페.', 'Karaköy brunch café.', { reviewCount: 2400 }),

  // —— ankara ——
  place('ankara-fine_dining-1', 'ankara', 'fine_dining', 'La Gioia', 4.5, 'Arjantin Caddesi, Attar Sk. No:6, Gaziosmanpaşa, 06700 Ankara, Turkey', '가지오스만파샤에 위치한 고급 이탈리안 유러피언 레스토랑', 'Upscale Italian and European restaurant in the Gaziosmanpaşa district'),

  // —— izmir ——
  place('izmir-fine_dining-1', 'izmir', 'fine_dining', 'Etçi Ahmet', 4.6, 'Cemal Bülbül Sk. 15/A, 35590 Karşıyaka/İzmir, Turkey', '특별한 날을 위한 최고급 스테이크와 정통 요리로 유명한 카르시야카의 레스토랑', 'High-quality restaurant in Karşıyaka known for premium steaks, a favorite for special occasions'),

  // —— antalya ——
  place('antalya-fine_dining-1', 'antalya', 'fine_dining', 'Seraser Fine Dining Restaurant', 4.6, 'Karanlık Sokak, Kaleiçi, 07100 Antalya, Turkey', '칼레이치 구시가지 보행자 골목에 자리한 안탈리아 최고의 파인다이닝, 감귤나무 그늘의 야외 테라스가 특징', 'Antalya\'s premier fine-dining restaurant on a quiet pedestrian street in the old town of Kaleiçi, with an open-air terrace shaded by citrus trees'),

  // —— goreme ——
  place('goreme-fine_dining-1', 'goreme', 'fine_dining', 'Dibek Restaurant', 4.5, 'Konak Sokak, 50180 Göreme, Nevşehir, Turkey', '475년 된 전통 가옥에서 튀르키예 전통 좌식 스타일로 식사를 즐길 수 있는 괴레메의 명소', 'Restaurant set inside a 475-year-old building offering traditional Turkish floor seating in Göreme'),

  // —— bursa ——
  place('bursa-fine_dining-1', 'bursa', 'fine_dining', 'Da Vittorio Restaurant Italiano', 4.5, 'Çekirge Cd. No:81, Çekirge, 16265 Osmangazi/Bursa, Turkey', '이탈리아 감성의 우아한 인테리어가 돋보이는 부르사의 이탈리안 레스토랑', 'Bursa\'s elegant Italian restaurant with classic decor that transports diners to Italy'),

  // —— trabzon ——
  place('trabzon-fine_dining-1', 'trabzon', 'fine_dining', 'Cephanelik Restaurant & Cafe', 4.5, 'Boztepe Mahallesi, Cephanelik Mevkii No:89, Ortahisar, 61080 Trabzon, Turkey', '보즈테페 언덕에서 트라브존 전경을 내려다보며 즐기는 파노라마 뷰 레스토랑', 'Restaurant on Boztepe hill offering panoramic views over Trabzon along with exquisite cuisine'),

  // —— pamukkale ——
  place('pamukkale-fine_dining-1', 'pamukkale', 'fine_dining', 'Kayas Wine House', 4.5, 'Atatürk Cd. No:3, 20260 Pamukkale/Denizli, Turkey', '지역 요리와 훌륭한 와인을 함께 즐길 수 있는 파묵칼레의 대표 레스토랑', 'Pamukkale\'s leading restaurant offering delightful local cuisine paired with exceptional wines'),

]
