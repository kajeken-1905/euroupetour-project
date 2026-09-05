import { place } from './placeFactory'
import type { Place } from '../types'

export const placesTRExtra: Place[] = [
  // —— istanbul ——
  place('istanbul-fine_dining-1', 'istanbul', 'fine_dining', 'Mikla', 4.7, 'Istanbul', '보스포러스 전망 모던 터키.', 'Modern Turkish with Bosphorus views.', { reviewCount: 2400 }),
  place('istanbul-fine_dining-2', 'istanbul', 'fine_dining', 'Neolokal', 4.6, 'Istanbul', '아나톨리아 재해석 코스.', 'Reimagined Anatolian tasting.', { reviewCount: 1800 }),
  place('istanbul-fine_dining-3', 'istanbul', 'fine_dining', 'Nusr-Et', 4.4, 'Istanbul', '스테이크·캐주얼 파인.', 'Steak and casual fine.', { reviewCount: 6200 }),
  place('istanbul-fine_dining-4', 'istanbul', 'fine_dining', 'Ciya Sofrası', 4.5, 'Istanbul', '지역 가정식 클래식.', 'Regional home-style classic.', { reviewCount: 4800 }),
  place('istanbul-fine_dining-5', 'istanbul', 'fine_dining', 'Pandeli', 4.4, 'Istanbul', '역사적 오스만 다이닝.', 'Historic Ottoman dining.', { reviewCount: 3200 }),
  place('istanbul-bakery-1', 'istanbul', 'bakery', 'Filizler Tarihi Fırın', 4.5, 'Istanbul', '시밋·로컬 빵.', 'Simit and local bread.', { reviewCount: 2800 }),
  place('istanbul-bakery-2', 'istanbul', 'bakery', 'Karaköy Güllüoğlu', 4.6, 'Istanbul', '바클라바 전문.', 'Baklava specialists.', { reviewCount: 12000 }),
  place('istanbul-bakery-3', 'istanbul', 'bakery', 'Baylan Pastanesi', 4.4, 'Istanbul', '클래식 파티스리.', 'Classic pastry shop.', { reviewCount: 3600 }),
  place('istanbul-bakery-4', 'istanbul', 'bakery', 'Hafız Mustafa 1864', 4.7, 'Hoca Paşa, Muradiye Cd. No:51, 34080 Fatih/İstanbul, Turkey', '1864년부터 이어온 전통 제과점, 바클라바·로쿰 전문.', 'Historic pastry shop since 1864, known for baklava and Turkish delight.', { reviewCount: 48524 }),
  place('istanbul-cafe-1', 'istanbul', 'cafe', 'Kronotrop', 4.5, 'Istanbul', '스페셜티 로스터리.', 'Specialty roastery.', { reviewCount: 2100 }),
  place('istanbul-cafe-2', 'istanbul', 'cafe', 'Mandabatmaz', 4.4, 'Istanbul', '터키식 커피 클래식.', 'Classic Turkish coffee.', { reviewCount: 4200 }),
  place('istanbul-cafe-3', 'istanbul', 'cafe', 'Petra Roasting Co.', 4.5, 'Istanbul', '로스터리 카페.', 'Roastery café.', { reviewCount: 1800 }),
  place('istanbul-cafe-4', 'istanbul', 'cafe', 'Karabatak', 4.4, 'Istanbul', '카라쾨이 브런치 카페.', 'Karaköy brunch café.', { reviewCount: 2400 }),

  // —— ankara ——
  place('ankara-fine_dining-1', 'ankara', 'fine_dining', 'La Gioia', 4.5, 'Arjantin Caddesi, Attar Sk. No:6, Gaziosmanpaşa, 06700 Ankara, Turkey', '가지오스만파샤에 위치한 고급 이탈리안 유러피언 레스토랑', 'Upscale Italian and European restaurant in the Gaziosmanpaşa district'),
  place('ankara-bakery-1', 'ankara', 'bakery', 'Hatun Pastanesi', 4.5, 'Nene Hatun Cd. No:28B, Çankaya, 06690 Ankara, Turkey', '30년 넘는 전통을 이어온 앙카라의 인기 제과점, 정성스러운 터키 전통 디저트로 유명', 'Ankara bakery with over 30 years of history, known for its time-honored Turkish pastries'),
  place('ankara-cafe-1', 'ankara', 'cafe', 'Guzu Coffee', 4.6, '36/A, 06540 Çankaya/Ankara, Turkey', '환상적인 피스타치오 치즈케이크로 유명한 앙카라의 카페', 'Ankara cafe known for its spectacular creamy pistachio cheesecake'),

  // —— izmir ——
  place('izmir-fine_dining-1', 'izmir', 'fine_dining', 'Etçi Ahmet', 4.6, 'Cemal Bülbül Sk. 15/A, 35590 Karşıyaka/İzmir, Turkey', '특별한 날을 위한 최고급 스테이크와 정통 요리로 유명한 카르시야카의 레스토랑', 'High-quality restaurant in Karşıyaka known for premium steaks, a favorite for special occasions'),
  place('izmir-bakery-1', 'izmir', 'bakery', 'Çelebi Unlu Mamuller', 4.5, 'Kültür, 1388. Sk. No:5, 35220 Konak/İzmir, Turkey', '이즈미르 명물 디저트 \'봄바\'로 유명한 제과점, 초콜릿이 흘러나오는 특별한 도우', 'Izmir bakery famous for its signature \'Bomba\' dessert, a dough shell with a liquid chocolate center'),
  place('izmir-cafe-1', 'izmir', 'cafe', 'AWAKE Coffee & Espresso', 4.6, 'Barbaros, Mithatpaşa Cd. 85-87/A, 35260 Konak/İzmir, Turkey', '이즈미르 3세대 커피 문화를 이끈 선구자적인 커피숍', 'Pioneering Izmir coffee shop that helped launch the city\'s third-wave coffee scene'),

  // —— antalya ——
  place('antalya-fine_dining-1', 'antalya', 'fine_dining', 'Seraser Fine Dining Restaurant', 4.6, 'Karanlık Sokak, Kaleiçi, 07100 Antalya, Turkey', '칼레이치 구시가지 보행자 골목에 자리한 안탈리아 최고의 파인다이닝, 감귤나무 그늘의 야외 테라스가 특징', 'Antalya\'s premier fine-dining restaurant on a quiet pedestrian street in the old town of Kaleiçi, with an open-air terrace shaded by citrus trees'),
  place('antalya-bakery-1', 'antalya', 'bakery', 'Pikan Fırın', 4.5, 'Fener, Bülent Ecevit Blv. No:40/B, 07160 Muratpaşa/Antalya, Turkey', '신선하고 건강한 빵과 아침 식사로 인기 있는 안탈리아의 베이커리', 'Popular Antalya bakery known for fresh, healthy bread and great breakfast options'),
  place('antalya-cafe-1', 'antalya', 'cafe', 'The Sudd Coffee Kaleiçi', 4.6, 'Kılıçarslan Mah. Hamam Sk. No:27, Muratpaşa, 07100 Antalya, Turkey', '안탈리아 구시가 칼레이치에 위치한 세련된 스페셜티 커피숍', 'Stylish specialty coffee shop in Antalya\'s historic Kaleiçi old town'),

  // —— goreme ——
  place('goreme-fine_dining-1', 'goreme', 'fine_dining', 'Dibek Restaurant', 4.5, 'Konak Sokak, 50180 Göreme, Nevşehir, Turkey', '475년 된 전통 가옥에서 튀르키예 전통 좌식 스타일로 식사를 즐길 수 있는 괴레메의 명소', 'Restaurant set inside a 475-year-old building offering traditional Turkish floor seating in Göreme'),
  place('goreme-bakery-1', 'goreme', 'bakery', 'Center Coffee & Baklava', 4.5, 'Hakkı Paşa Meydanı No:4/B, İsali-Gaferli-Avcılar, 50180 Göreme/Nevşehir, Turkey', '24시간 운영되는 괴레메의 인기 카페 겸 바클라바 전문점', 'Popular 24-hour Göreme coffee shop and baklava specialist'),
  place('goreme-cafe-1', 'goreme', 'cafe', 'Hopper Coffee House', 4.6, 'Aydınlı Orta Mah. Belediye Cd. No:5, 50180 Göreme/Nevşehir, Turkey', '괴레메 오토가르 맞은편에 위치한 아늑한 커피하우스', 'Cozy coffee house located across from the Göreme bus terminal'),

  // —— bursa ——
  place('bursa-fine_dining-1', 'bursa', 'fine_dining', 'Da Vittorio Restaurant Italiano', 4.5, 'Çekirge Cd. No:81, Çekirge, 16265 Osmangazi/Bursa, Turkey', '이탈리아 감성의 우아한 인테리어가 돋보이는 부르사의 이탈리안 레스토랑', 'Bursa\'s elegant Italian restaurant with classic decor that transports diners to Italy'),
  place('bursa-bakery-1', 'bursa', 'bakery', 'Tarihi İnanç Fırını', 4.6, 'Muradiye, 2. Murat Cd. No:4, 16050 Osmangazi/Bursa, Turkey', '수십 년간 전통 화덕으로 타히닐리 피데를 구워온 부르사의 역사적인 제과점', 'Historic Bursa bakery baking tahinli pide in traditional wood-fired ovens for decades'),
  place('bursa-cafe-1', 'bursa', 'cafe', 'Mahfel', 4.4, 'Kurtoğlu, Atatürk Cd. No:1, 16360 Yıldırım/Bursa, Turkey', '괵데레 강변, 이르간드 다리 인근의 100년 넘은 역사적인 부르사의 카페', 'Historic Bursa cafe over a century old, by the Gökdere river near the Irgandi Bridge'),

  // —— trabzon ——
  place('trabzon-fine_dining-1', 'trabzon', 'fine_dining', 'Cephanelik Restaurant & Cafe', 4.5, 'Boztepe Mahallesi, Cephanelik Mevkii No:89, Ortahisar, 61080 Trabzon, Turkey', '보즈테페 언덕에서 트라브존 전경을 내려다보며 즐기는 파노라마 뷰 레스토랑', 'Restaurant on Boztepe hill offering panoramic views over Trabzon along with exquisite cuisine'),
  place('trabzon-bakery-1', 'trabzon', 'bakery', 'Zemu Swiss Bakery', 4.5, '3 Nolu Erdoğdu, Manolya Cd. No:47, 61040 Trabzon Merkez/Trabzon, Turkey', '신선한 로컬·인터내셔널 베이커리 제품을 세련되게 선보이는 트라브존의 베이커리', 'Trabzon bakery offering a range of fresh local and international baked goods in a modern setting'),
  place('trabzon-cafe-1', 'trabzon', 'cafe', 'Coffee Shop Company Trabzon', 4.5, 'İskenderpaşa Merkez, Uzun Sk., 61100 Ortahisar/Trabzon, Turkey', '구시장과 신시장을 잇는 중심가에 위치한 트라브존의 인기 커피숍', 'Popular Trabzon coffee shop connecting the old and new markets in the city center'),

  // —— pamukkale ——
  place('pamukkale-fine_dining-1', 'pamukkale', 'fine_dining', 'Kayas Wine House', 4.5, 'Atatürk Cd. No:3, 20260 Pamukkale/Denizli, Turkey', '지역 요리와 훌륭한 와인을 함께 즐길 수 있는 파묵칼레의 대표 레스토랑', 'Pamukkale\'s leading restaurant offering delightful local cuisine paired with exceptional wines'),

  place('pamukkale-bakery-1', 'pamukkale', 'bakery', 'Gülsüm Bacının Yeri', 4.4, 'Pamukkale Köyü, 20260 Pamukkale/Denizli, Turkey', '즉석에서 만들어주는 괴즐레메로 유명한 파묵칼레의 정겨운 가족 운영 식당', 'Heartwarming family-run Pamukkale eatery known for gözleme made fresh in front of you'),
  place('pamukkale-cafe-1', 'pamukkale', 'cafe', 'Pastel Drink & Coffee', 4.5, 'Atatürk Cd. No:15, 20260 Pamukkale/Denizli, Turkey', '친절한 주인장이 운영하는 파묵칼레의 인기 커피숍, 아이스커피로 유명', 'Popular Pamukkale coffee shop run by a welcoming owner, known for its fresh iced coffee'),
]
