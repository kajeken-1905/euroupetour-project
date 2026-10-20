import { place } from './placeFactory'
import type { Place } from '../types'

export const placesTRExtra: Place[] = [
  // —— istanbul ——
  place('istanbul-fine_dining-1', 'istanbul', 'fine_dining', 'Mikla', 'Meşrutiyet Caddesi 15, 34430 Beyoğlu, Turkey', '보스포러스 전망 모던 터키.', 'Modern Turkish with Bosphorus views.', { image: '/places/istanbul-fine_dining-1.jpg' }),
  place('istanbul-fine_dining-2', 'istanbul', 'fine_dining', 'Neolokal', 'Bereketzade Medresesi Sokağı 11, 34421 Beyoğlu, Turkey', '아나톨리아 재해석 코스.', 'Reimagined Anatolian tasting.'),
  place('istanbul-fine_dining-3', 'istanbul', 'fine_dining', 'Nusr-Et', 'Terziler Sokağı, 34126 Istanbul, Turkey', '스테이크·캐주얼 파인.', 'Steak and casual fine.'),
  place('istanbul-fine_dining-4', 'istanbul', 'fine_dining', 'Ciya Sofrası', 'Güneşlibahçe Sokağı 43, 34710 Kadıköy, Turkey', '지역 가정식 클래식.', 'Regional home-style classic.'),
  place('istanbul-fine_dining-5', 'istanbul', 'fine_dining', 'Pandeli', 'Yenicami Meydani Sokağı 1, 34435 Istanbul, Turkey', '역사적 오스만 다이닝.', 'Historic Ottoman dining.'),
  place('istanbul-bakery-2', 'istanbul', 'bakery', 'Karaköy Güllüoğlu', 'Kemankeş Caddesi 67, 36827 Beyoğlu, Turkey', '바클라바 전문.', 'Baklava specialists.'),
  place('istanbul-bakery-3', 'istanbul', 'bakery', 'Baylan Pastanesi', 'Muvakkıthane Caddesi 19, 34710 Kadıköy, Turkey', '클래식 파티스리.', 'Classic pastry shop.'),
  place('istanbul-bakery-4', 'istanbul', 'bakery', 'Hafız Mustafa 1864', 'Hoca Paşa, Muradiye Cd. No:51, 34080 Fatih/İstanbul, Turkey', '1864년부터 이어온 전통 제과점, 바클라바·로쿰 전문.', 'Historic pastry shop since 1864, known for baklava and Turkish delight.'),
  place('istanbul-cafe-1', 'istanbul', 'cafe', 'Kronotrop', 'Aydın Sokağı, 34340 Beşiktaş, Turkey', '스페셜티 로스터리.', 'Specialty roastery.'),
  place('istanbul-cafe-2', 'istanbul', 'cafe', 'Mandabatmaz', 'Olivya Geçidi Sokağı 1a, 34430 Beyoğlu, Turkey', '터키식 커피 클래식.', 'Classic Turkish coffee.', { image: '/places/istanbul-cafe-2.jpg' }),
  place('istanbul-cafe-3', 'istanbul', 'cafe', 'Petra Roasting Co.', 'Prof. Dr. Orhan Ersek Sokağı 18, 34365 Şişli, Turkey', '로스터리 카페.', 'Roastery café.'),
  place('istanbul-cafe-4', 'istanbul', 'cafe', 'Karabatak', 'Meclis-i Mebusan Caddesi 7, 34433 Beyoğlu, Turkey', '카라쾨이 브런치 카페.', 'Karaköy brunch café.', { image: '/places/istanbul-cafe-4.jpg' }),

  // —— ankara ——
  place('ankara-fine_dining-1', 'ankara', 'fine_dining', 'La Gioia', 'Arjantin Caddesi, Attar Sk. No:6, Gaziosmanpaşa, 06700 Ankara, Turkey', '가지오스만파샤에 위치한 고급 이탈리안 유러피언 레스토랑', 'Upscale Italian and European restaurant in the Gaziosmanpaşa district'),
  place('ankara-fine_dining-2', 'ankara', 'fine_dining', 'Trilye', 'Kavaklıdere, Hafta Sk. No:11, 06700 Çankaya/Ankara', '안뜰 정원이 있는 앙카라의 해산물 레스토랑.', 'Ankara seafood restaurant with a courtyard garden.', { image: '/places/ankara-fine_dining-2.jpg' }),
  place('ankara-fine_dining-3', 'ankara', 'fine_dining', 'Çengelhan Brasserie', 'Çengelhan Rahmi M. Koç Müzesi, Sutepe, 06250 Altındağ/Ankara', '1523년 캐러밴서라이를 개조한 앙카라 성채의 브라스리, 자동차·복엽기 전시 사이에서 식사.', 'Brasserie in a 1523 caravanserai by the Ankara Citadel, dining among displays of vintage cars and biplanes.'),
  place('ankara-bakery-1', 'ankara', 'bakery', 'Hatun Pastanesi', 'Nene Hatun Cd. No:28/A, Gaziosmanpaşa, Çankaya, Ankara, Turkey', '터키 전통 디저트를 파는 앙카라의 제과점.', 'Ankara pastry shop with traditional Turkish sweets.'),
  place('ankara-bakery-2', 'ankara', 'bakery', 'Cafe Des Cafe', 'Kavaklıdere, Tunalı Hilmi Cd. No:83/A, 06680 Çankaya/Ankara', '프로피테롤과 디저트가 있는 투날르 힐미의 카페 겸 파티스리.', 'Tunalı Hilmi café-pâtisserie with profiteroles and desserts.'),
  place('ankara-cafe-1', 'ankara', 'cafe', 'Guzu Coffee', '36/A, 06540 Çankaya/Ankara, Turkey', '피스타치오 치즈케이크가 있는 앙카라의 카페.', 'Ankara café with pistachio cheesecake.'),
  place('ankara-cafe-2', 'ankara', 'cafe', 'PROD', 'Kavaklıdere, John F. Kennedy Cd. No:31, 06680 Çankaya/Ankara', '서드웨이브 커피를 표방하는 카바클르데레의 커피 아틀리에.', 'Third-wave coffee atelier in Kavaklıdere.'),
  place('ankara-cafe-3', 'ankara', 'cafe', 'Kakule Kahve', 'Kavaklıdere, Kızılırmak Cd. No:17, 06680 Çankaya/Ankara', '카바클르데레의 스페셜티 커피숍.', 'Specialty coffee shop in Kavaklıdere.'),

  // —— izmir ——
  place('izmir-fine_dining-1', 'izmir', 'fine_dining', 'Etçi Ahmet', 'Cemal Bülbül Sk. 15/A, 35590 Karşıyaka/İzmir, Turkey', '스테이크를 내는 카르시야카의 레스토랑.', 'Karşıyaka restaurant serving steaks.'),
  place('izmir-fine_dining-2', 'izmir', 'fine_dining', 'Deniz Restaurant', 'Atatürk Cd. No:188/B, Alsancak, 35220 Konak/İzmir', '1981년부터 이어온 알산작 해변가의 해산물·메제 레스토랑.', 'Seafood-and-meze restaurant on the Alsancak seafront, established 1981.'),
  place('izmir-fine_dining-3', 'izmir', 'fine_dining', 'North Pier', 'Konak Pier, Atatürk Cd. No:19, Alsancak, 35250 Konak/İzmir', '코나크 피어에 자리한 유러피언·터키 퓨전 파인다이닝.', 'European-Turkish fusion fine dining at Konak Pier.'),
  place('izmir-fine_dining-4', 'izmir', 'fine_dining', 'İzmir Sakız Alsancak', 'Pasaport, Atatürk Cd., 35210 Konak/İzmir', '파사포르트 부두변의 메이하네 스타일 해산물 레스토랑.', 'Meyhane-style seafood restaurant by the Pasaport pier.'),
  place('izmir-bakery-1', 'izmir', 'bakery', 'Çelebi Unlu Mamuller', 'Kültür, 1388. Sk. No:5, 35220 Konak/İzmir, Turkey', '초콜릿이 흘러나오는 디저트 봄바를 파는 이즈미르의 제과점.', 'Izmir pastry shop selling bomba, a pastry with a molten chocolate centre.'),
  place('izmir-bakery-2', 'izmir', 'bakery', 'Alsancak Dostlar Fırını', 'Kıbrıs Şehitleri Caddesi No:120, Alsancak, 35220 Konak/İzmir', '1983년부터 같은 자리에서 보요즈를 굽는 알산자크의 빵집.', 'Alsancak bakery making boyoz at the same address since 1983.'),
  place('izmir-cafe-1', 'izmir', 'cafe', 'AWAKE Coffee & Espresso', 'Barbaros, Mithatpaşa Cd. 85-87/A, 35260 Konak/İzmir, Turkey', '이즈미르 3세대 커피 문화를 이끈 선구자적인 커피숍', 'Pioneering Izmir coffee shop that helped launch the city\'s third-wave coffee scene'),
  place('izmir-cafe-2', 'izmir', 'cafe', 'Baristocrat', 'Kültür Mahallesi, Alsancak, Konak/İzmir', '원두를 직접 수입·로스팅하는 이즈미르의 대표 서드웨이브 로스터리.', 'Izmir third-wave roaster that imports and roasts its own beans.'),

  // —— antalya ——
  place('antalya-fine_dining-1', 'antalya', 'fine_dining', 'Seraser Fine Dining Restaurant', 'Karanlık Sokak, Kaleiçi, 07100 Antalya, Turkey', '칼레이치 구시가 골목의 레스토랑. 감귤나무 그늘의 테라스가 있습니다.', 'Restaurant on a quiet Kaleiçi lane with a terrace shaded by citrus trees.'),
  place('antalya-fine_dining-2', 'antalya', 'fine_dining', 'Vanilla Restaurant', 'Hesapçı Sk. No:33, Kaleiçi, 07100 Muratpaşa/Antalya', '2007년부터 칼레이치 구시가에서 영국인 셰프가 이끄는 모던 인터내셔널 파인다이닝.', 'British chef-led modern international fine dining in Kaleiçi since 2007.'),
  place('antalya-fine_dining-3', 'antalya', 'fine_dining', '7 Mehmet', 'Atatürk Kültür Parkı No:333, Muratpaşa/Antalya', '1958년부터 이어진 터키 요리 식당. 트레이 케밥이 있습니다.', 'Turkish restaurant operating since 1958, serving tray kebab.'),
  place('antalya-fine_dining-4', 'antalya', 'fine_dining', 'Arma Restaurant', 'Kaleiçi Yat Limanı, 07100 Muratpaşa/Antalya', '구항구 요트항의 지중해 전망 해산물 레스토랑.', 'Seafood restaurant with Mediterranean views at the old-harbour marina.'),
  place('antalya-bakery-1', 'antalya', 'bakery', 'Pikan Fırın', 'Fener, Bülent Ecevit Blv. No:40/B, 07160 Muratpaşa/Antalya, Turkey', '빵과 아침 식사를 파는 안탈리아의 빵집.', 'Antalya bakery with bread and breakfast.'),
  place('antalya-bakery-2', 'antalya', 'bakery', 'Tarihi Balık Pazarı Unlu Mamülleri', 'Kaleiçi, 07100 Muratpaşa/Antalya', '칼레이치 옛 어시장 자리의 전통 빵·페이스트리·푸딩 가게.', "Traditional bread, pastry and pudding shop on the site of Kaleiçi's old fish market."),
  place('antalya-cafe-1', 'antalya', 'cafe', 'The Sudd Coffee Kaleiçi', 'Kılıçarslan Mah. Hamam Sk. No:27, Muratpaşa, 07100 Antalya, Turkey', '안탈리아 구시가 칼레이치에 위치한 세련된 스페셜티 커피숍', 'Stylish specialty coffee shop in Antalya\'s historic Kaleiçi old town'),

  // —— goreme ——
  place('goreme-fine_dining-1', 'goreme', 'fine_dining', 'Dibek Restaurant', 'Konak Sokak, 50180 Göreme, Nevşehir, Turkey', '오래된 집에서 튀르키예식 좌식으로 식사하는 괴레메의 식당.', 'Göreme restaurant in an old house with traditional Turkish floor seating.'),
  place('goreme-bakery-1', 'goreme', 'bakery', 'Center Coffee & Baklava', 'Hakkı Paşa Meydanı No:4/B, İsali-Gaferli-Avcılar, 50180 Göreme/Nevşehir, Turkey', '24시간 여는 괴레메의 카페 겸 바클라바 가게.', '24-hour Göreme café and baklava shop.'),
  place('goreme-cafe-1', 'goreme', 'cafe', 'Hopper Coffee House', 'Aydınlı Orta Mah. Belediye Cd. No:5, 50180 Göreme/Nevşehir, Turkey', '괴레메 오토가르 맞은편에 위치한 아늑한 커피하우스', 'Cozy coffee house located across from the Göreme bus terminal'),

  // —— bursa ——
  place('bursa-fine_dining-1', 'bursa', 'fine_dining', 'Da Vittorio Restaurant Italiano', 'Çekirge Cd. No:81, Çekirge, 16265 Osmangazi/Bursa, Turkey', '이탈리아 감성의 우아한 인테리어가 돋보이는 부르사의 이탈리안 레스토랑', 'Bursa\'s elegant Italian restaurant with classic decor that transports diners to Italy'),
  place('bursa-fine_dining-2', 'bursa', 'fine_dining', 'Kebapçı İskender', 'Ünlü Cd. No:7, 16010 Osmangazi/Bursa', '이스켄데르 케밥 창시자 가문이 운영하는, 목조 오스만 건물의 레스토랑.', 'Restaurant in a wooden Ottoman building, run by the family that invented İskender kebab.'),
  place('bursa-fine_dining-3', 'bursa', 'fine_dining', 'Yüce Hünkar', 'Kirişçi, 1. Murat Cd. No:5, 16050 Osmangazi/Bursa', '50년 넘게 부르사식 되네르 케밥을 선보여온 레스토랑.', 'Restaurant serving Bursa-style döner kebab for over 50 years.'),
  place('bursa-bakery-1', 'bursa', 'bakery', 'Tarihi İnanç Fırını', 'Muradiye, 2. Murat Cd. No:4, 16050 Osmangazi/Bursa, Turkey', '수십 년간 전통 화덕으로 타히닐리 피데를 구워온 부르사의 역사적인 제과점', 'Historic Bursa bakery baking tahinli pide in traditional wood-fired ovens for decades'),
  place('bursa-bakery-2', 'bursa', 'bakery', 'Kafkas Kestane Şekeri', 'Kavaklı, Namazgah Cd., 16010 Osmangazi/Bursa', '부르사 밤 설탕 절임(케스타네 셰케리)을 파는 가게.', 'Shop selling Bursa’s candied chestnuts (kestane şekeri).'),
  place('bursa-cafe-1', 'bursa', 'cafe', 'Mahfel', 'Kurtoğlu, Atatürk Cd. No:1, 16360 Yıldırım/Bursa, Turkey', '괵데레 강변, 이르간드 다리 인근의 100년 넘은 역사적인 부르사의 카페', 'Historic Bursa cafe over a century old, by the Gökdere river near the Irgandi Bridge', { image: '/places/bursa-cafe-1.jpg' }),

  // —— trabzon ——
  place('trabzon-fine_dining-1', 'trabzon', 'fine_dining', 'Cephanelik Restaurant & Cafe', 'Boztepe Mahallesi, Cephanelik Mevkii No:89, Ortahisar, 61080 Trabzon, Turkey', '보즈테페 언덕에서 트라브존 전경을 내려다보며 즐기는 파노라마 뷰 레스토랑', 'Restaurant on Boztepe hill offering panoramic views over Trabzon along with exquisite cuisine'),
  place('trabzon-fine_dining-2', 'trabzon', 'fine_dining', 'Bordo Mavi Balık', 'Boztepe Mahallesi, İpekyolu Caddesi No:91/A, 61030 Ortahisar/Trabzon, Türkiye', '흑해 제철 생선과 메제를 내는 트라브존의 해산물 식당.', 'Trabzon seafood restaurant serving seasonal Black Sea fish and meze.'),
  place('trabzon-fine_dining-3', 'trabzon', 'fine_dining', 'Cemilusta', 'Trabzon Meydan Parkı 6, 61050 Trabzon, Turkey', '아크차아바트 쾨프테(미트볼)를 내는 트라브존의 식당.', 'Trabzon restaurant serving Akçaabat köfte.'),
  place('trabzon-bakery-1', 'trabzon', 'bakery', 'Zemu Swiss Bakery', '3 Nolu Erdoğdu, Manolya Cd. No:47, 61040 Trabzon Merkez/Trabzon, Turkey', '신선한 로컬·인터내셔널 베이커리 제품을 세련되게 선보이는 트라브존의 베이커리', 'Trabzon bakery offering a range of fresh local and international baked goods in a modern setting'),
  place('trabzon-bakery-2', 'trabzon', 'bakery', 'Huna Bakery', 'Kemerkaya Mahallesi, Ziyad Nemli Sanat Sokak No:2, Kasımoğlu İş Merkezi Kat:7, Ortahisar/Trabzon, Türkiye', '디저트와 커피가 있는 트라브존 중심가의 빵집 겸 카페.', 'City-centre bakery café with desserts and coffee.'),
  place('trabzon-cafe-1', 'trabzon', 'cafe', 'Coffee Shop Company Trabzon', 'İskenderpaşa Merkez, Uzun Sk., 61100 Ortahisar/Trabzon, Turkey', '구시장과 신시장 사이 중심가의 커피숍.', 'Coffee shop in the centre between the old and new markets.'),

  // —— pamukkale ——
  place('pamukkale-fine_dining-1', 'pamukkale', 'fine_dining', 'Kayas Wine House', 'Atatürk Cd. No:3, 20260 Pamukkale/Denizli, Turkey', '지역 요리와 와인을 내는 파묵칼레의 레스토랑.', 'Pamukkale restaurant serving local food and wine.'),

  place('pamukkale-bakery-1', 'pamukkale', 'bakery', 'Gülsüm Bacının Yeri', 'Pamukkale Köyü, 20260 Pamukkale/Denizli, Turkey', '눈앞에서 괴즐레메를 만들어 주는 가족 운영 식당.', 'Family-run eatery making gözleme in front of you.'),
  place('pamukkale-cafe-1', 'pamukkale', 'cafe', 'Pastel Drink & Coffee', 'Atatürk Cd. No:15, 20260 Pamukkale/Denizli, Turkey', '아이스커피가 있는 파묵칼레의 커피숍.', 'Pamukkale coffee shop with iced coffee.'),
]
