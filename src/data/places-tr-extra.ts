import { place } from './placeFactory'
import type { Place } from '../types'

export const placesTRExtra: Place[] = [
  // —— istanbul ——
  place('istanbul-fine_dining-1', 'istanbul', 'fine_dining', 'Mikla', 'Meşrutiyet Cd. No:15, 18th floor, Tepebaşı, 34430 Beyoğlu/İstanbul', '호텔 옥상에서 보스포루스를 내려다보는 모던 터키 요리 레스토랑. 미쉐린 1스타.', 'Modern Turkish rooftop restaurant overlooking the Bosphorus. One Michelin star.', { michelin: 'star1', image: '/places/istanbul-fine_dining-1.jpg' }),
  place('istanbul-fine_dining-2', 'istanbul', 'fine_dining', 'Neolokal', 'Arap Camii, Bankalar Cd. No:11/1, 34420 Beyoğlu/İstanbul', 'SALT 갈라타 건물의 아나톨리아 요리 코스 레스토랑. 미쉐린 1스타.', 'Anatolian tasting-menu restaurant in the SALT Galata building. One Michelin star.', { michelin: 'star1' }),
  place('istanbul-fine_dining-3', 'istanbul', 'fine_dining', 'Nusr-Et Grand Bazaar', 'Beyazıt, Nuruosmaniye Cd., Sandal Bedesteni, 34126 Fatih/İstanbul', '그랜드 바자르 산달 베데스테니 안의 스테이크하우스.', 'Steakhouse inside the Sandal Bedesteni of the Grand Bazaar.'),
  place('istanbul-fine_dining-4', 'istanbul', 'fine_dining', 'Ciya Sofrası', 'Caferağa, Güneşlibahçe Sk. No:43, 34710 Kadıköy/İstanbul', '카드쾨이 시장 골목에서 아나톨리아 지방 요리를 매일 바꿔 내는 식당.', 'Kadıköy market-street restaurant serving regional Anatolian dishes that change daily.'),
  place('istanbul-fine_dining-5', 'istanbul', 'fine_dining', 'Pandeli', 'Rüstempaşa, Mısır Çarşısı İçi No:1, Eminönü, 34116 Fatih/İstanbul', '이집트 시장(향신료 시장) 입구 위층의 오스만 요리 레스토랑. 미쉐린 빕 구르망.', 'Ottoman-cuisine restaurant above the entrance of the Spice Bazaar. Michelin Bib Gourmand.', { michelin: 'bib' }),
  place('istanbul-bakery-2', 'istanbul', 'bakery', 'Karaköy Güllüoğlu', 'Kemankeş Karamustafa Paşa, Kemankeş Cd. No:67, 34425 Beyoğlu/İstanbul', '카라쾨이의 바클라바 전문점.', 'Baklava specialist in Karaköy.'),
  place('istanbul-bakery-3', 'istanbul', 'bakery', 'Baylan Pastanesi', 'Muvakkıthane Caddesi 19, 34710 Kadıköy, Turkey', '1961년부터 카드쾨이에서 영업하는 클래식 파티스리. 쿠프(선데)로 알려져 있습니다.', 'Classic Kadıköy pâtisserie open since 1961, known for its kup sundae.'),
  place('istanbul-bakery-4', 'istanbul', 'bakery', 'Hafız Mustafa 1864', 'Hoca Paşa, Muradiye Cd. No:51, 34080 Fatih/İstanbul, Turkey', '1864년 창업한 디저트 가게의 시르케지 매장. 바클라바·로쿰을 팝니다.', 'Sirkeci shop of the confectioner founded in 1864, selling baklava and lokum.'),
  place('istanbul-cafe-2', 'istanbul', 'cafe', 'Mandabatmaz', 'Asmalı Mescit, Olivya Geçidi No:1/A, 34430 Beyoğlu/İstanbul', '1967년부터 이스티클랄 거리 옆 골목에서 터키식 커피만 내는 작은 커피집.', 'Tiny coffee house off İstiklal serving only Turkish coffee since 1967.', { image: '/places/istanbul-cafe-2.jpg' }),
  place('istanbul-cafe-3', 'istanbul', 'cafe', 'Petra Roasting Co.', 'Teşvikiye, Prof. Dr. Orhan Ersek Sk. No:18/7, 34365 Şişli/İstanbul', '니샨타시 토파아즈 동네의 페트라 로스팅 지점 카페.', 'Petra Roasting Co. branch café in the Topağacı area of Nişantaşı.'),
  place('istanbul-cafe-4', 'istanbul', 'cafe', 'Karabatak', 'Kemankeş Karamustafa Paşa, Kara Ali Kaptan Sk. No:7, 34425 Beyoğlu/İstanbul', '2011년 문을 연 카라쾨이 골목의 카페. 율리우스 마이늘 커피를 냅니다.', 'Karaköy side-street café opened in 2011, serving Julius Meinl coffee.', { image: '/places/istanbul-cafe-4.jpg' }),

  // —— ankara ——
  place('ankara-fine_dining-1', 'ankara', 'fine_dining', 'La Gioia', 'Kavaklıdere, Tahran Cd. No:2, 06700 Çankaya/Ankara', '2012년부터 카바클르데레에서 영업하는 이탈리안·유러피언 레스토랑.', 'Italian and European restaurant in Kavaklıdere, open since 2012.'),
  place('ankara-fine_dining-2', 'ankara', 'fine_dining', 'Trilye', 'Kazım Özalp, Kuleli Sk. No:32, Gaziosmanpaşa, 06680 Çankaya/Ankara', '2002년부터 에게해·지중해식 해산물 요리를 내는 가지오스만파샤의 레스토랑.', 'Gaziosmanpaşa restaurant serving Aegean and Mediterranean seafood since 2002.', { image: '/places/ankara-fine_dining-2.jpg' }),
  place('ankara-bakery-1', 'ankara', 'bakery', 'Hatun Pastanesi', 'Nene Hatun Cd. No:28/A, Gaziosmanpaşa, Çankaya, Ankara, Turkey', '터키 전통 디저트를 파는 앙카라의 제과점.', 'Ankara pastry shop with traditional Turkish sweets.'),
  place('ankara-bakery-2', 'ankara', 'bakery', 'Café des Cafés', 'Kavaklıdere, Tunalı Hilmi Cd. No:83/A, 06680 Çankaya/Ankara', '1995년부터 투날르 힐미 거리에서 영업해 온 카페. 케이크·디저트와 일요일 브런치를 냅니다.', 'Café on Tunalı Hilmi running since 1995, serving cakes, desserts and Sunday breakfast.'),
  place('ankara-cafe-1', 'ankara', 'cafe', 'Guzu Coffee', 'Barbaros, Bülten Sk. No:26/A, 06680 Çankaya/Ankara', '투날르 힐미 근처 뷜텐 거리의 아담한 카페. 주인 가족이 구운 홈메이드 케이크를 냅니다.', 'Small café on Bülten Sokak off Tunalı Hilmi, with homemade cakes baked by the owner\'s family.'),
  place('ankara-cafe-3', 'ankara', 'cafe', 'Kakule Kahve', 'Kavaklıdere, Kızılırmak Cd. No:17, 06680 Çankaya/Ankara', '카바클르데레 크즐르르마크 거리의 스페셜티 커피숍.', 'Specialty coffee shop on Kızılırmak Caddesi in Kavaklıdere.'),

  // —— izmir ——
  place('izmir-fine_dining-1', 'izmir', 'fine_dining', 'Etçiahmet', 'Bostanlı, Cemal Bülbül Sk. No:15/A, 35590 Karşıyaka/İzmir', '카르시야카 보스탄르의 스테이크·고기 요리 레스토랑. 메제도 다양합니다.', 'Steak and grill restaurant in Bostanlı, Karşıyaka, with a wide choice of meze.'),
  place('izmir-fine_dining-2', 'izmir', 'fine_dining', 'Deniz Restaurant', 'Atatürk Cd. No:188/B, Alsancak, 35220 Konak/İzmir', '이즈미르 팔라스 호텔 1층, 코르돈 해변의 해산물·메제 레스토랑.', 'Seafood and meze restaurant on the Kordon waterfront, in the İzmir Palas Hotel building.'),
  place('izmir-fine_dining-3', 'izmir', 'fine_dining', 'North Pier\'s', 'Konak Pier, Atatürk Cd. No:19, 35250 Konak/İzmir', '코나크 피어 쇼핑센터의 바다 전망 지중해식 레스토랑.', 'Sea-view Mediterranean restaurant in the Konak Pier shopping centre.'),
  place('izmir-fine_dining-4', 'izmir', 'fine_dining', 'Sakız Alsancak', 'Akdeniz, Atatürk Cd. No:158/A, Pasaport, 35210 Konak/İzmir', '1989년부터 파사포르트 해안에서 영업하는 에게해·크레타식 해산물 메이하네.', 'Aegean-Cretan seafood meyhane on the Pasaport waterfront since 1989.'),
  place('izmir-bakery-1', 'izmir', 'bakery', 'Çelebi Unlu Mamuller', 'Alsancak, Kıbrıs Şehitleri Cd. No:185/A, 35220 Konak/İzmir', '초콜릿이 흘러나오는 이즈미르 명물 디저트 봄바를 파는 알산작의 가게.', 'Alsancak shop selling bomba, Izmir\'s molten-chocolate pastry.'),
  place('izmir-bakery-2', 'izmir', 'bakery', 'Alsancak Dostlar Fırını', 'Kıbrıs Şehitleri Caddesi No:120, Alsancak, 35220 Konak/İzmir', '1983년부터 같은 자리에서 보요즈를 굽는 알산자크의 빵집.', 'Alsancak bakery making boyoz at the same address since 1983.'),
  place('izmir-cafe-2', 'izmir', 'cafe', 'Baristocrat', 'Kültür Mahallesi, Alsancak, Konak/İzmir', '원두를 직접 수입·로스팅하는 이즈미르의 대표 서드웨이브 로스터리.', 'Izmir third-wave roaster that imports and roasts its own beans.'),

  // —— antalya ——
  place('antalya-fine_dining-1', 'antalya', 'fine_dining', 'Seraser Fine Dining Restaurant', 'Karanlık Sokak, Kaleiçi, 07100 Antalya, Turkey', '칼레이치 보행자 골목의 오스만 저택을 고친 레스토랑. 지중해식 코스 요리를 냅니다.', 'Restaurant in a restored Ottoman mansion on a pedestrian lane in Kaleiçi, serving Mediterranean tasting menus.'),
  place('antalya-fine_dining-2', 'antalya', 'fine_dining', 'Vanilla Restaurant', 'Hesapçı Sk. No:33, Kaleiçi, 07100 Muratpaşa/Antalya', '2007년부터 칼레이치 헤사프츠 거리에서 영국인 셰프가 운영하는 모던 레스토랑.', 'Modern restaurant on Hesapçı Sokak in Kaleiçi, run by a British chef since 2007.'),
  place('antalya-fine_dining-3', 'antalya', 'fine_dining', '7 Mehmet', 'Meltem, Atatürk Kültür Parkı, Dumlupınar Blv. No:201, 07030 Muratpaşa/Antalya', '1997년부터 아타튀르크 문화공원 안에서 영업하는 터키 요리 레스토랑. 바다 전망 테라스가 있습니다.', 'Turkish restaurant inside Atatürk Culture Park since 1997, with a sea-view terrace.'),
  place('antalya-bakery-2', 'antalya', 'bakery', 'Tarihi Balık Pazarı Unlu Mamülleri', 'Kaleiçi, 07100 Muratpaşa/Antalya', '칼레이치 옛 어시장 자리의 전통 빵·페이스트리·푸딩 가게.', "Traditional bread, pastry and pudding shop on the site of Kaleiçi's old fish market."),
  place('antalya-cafe-1', 'antalya', 'cafe', 'The Sudd Coffee Kaleiçi', 'Kılınçarslan, Hamam Sk. No:27, 07100 Muratpaşa/Antalya', '구시가 칼레이치 하드리아누스 문 근처의 스페셜티 커피숍. 원두를 직접 볶습니다.', 'Specialty coffee shop in Kaleiçi near Hadrian\'s Gate, roasting its own beans.'),

  // —— goreme ——
  place('goreme-bakery-1', 'goreme', 'bakery', 'Center Coffee & Baklava', 'Hakkı Paşa Meydanı No:4/B, İsali-Gaferli-Avcılar, 50180 Göreme/Nevşehir, Turkey', '괴레메 중심 광장의 24시간 카페. 바클라바·퀴네페와 커피를 냅니다.', 'Round-the-clock café on Göreme\'s main square, serving baklava, künefe and coffee.'),
  place('goreme-cafe-1', 'goreme', 'cafe', 'Hopper Coffee House', 'Aydınlı Orta Mah. Belediye Cd. No:5, 50180 Göreme/Nevşehir, Turkey', '괴레메 중심가 벨레디예 거리의 커피하우스. 불 화로가 있는 야외 테라스가 있습니다.', 'Coffee house on Belediye Caddesi in central Göreme, with an outdoor terrace with fire bowls.'),

  // —— bursa ——
  place('bursa-fine_dining-1', 'bursa', 'fine_dining', 'Da Vittorio Ristorante Italiano', 'Çekirge Cd. No:81, Çekirge, 16265 Osmangazi/Bursa, Turkey', '체키르게 뫼벤픽 호텔 안의 이탈리안 레스토랑.', 'Italian restaurant inside the Mövenpick hotel in Çekirge.'),
  place('bursa-fine_dining-2', 'bursa', 'fine_dining', 'Kebapçı İskender', 'Kayhan, Ünlü Cd. No:7, 16010 Osmangazi/Bursa', '이스켄데르 케밥을 처음 만든 가문이 운영하는 부르사 중심가의 케밥집.', 'Central Bursa kebab house run by the family that created the İskender kebab.'),
  place('bursa-fine_dining-3', 'bursa', 'fine_dining', 'Yüce Hünkar', 'Yeşil, Akyokuş Sk. No:17, 16360 Yıldırım/Bursa', '예실 사원 근처에서 부르사식 되네르와 이스켄데르를 내는 식당. 시내 전망이 있습니다.', 'Restaurant near the Green Mosque serving Bursa-style döner and İskender, with city views.'),
  place('bursa-bakery-1', 'bursa', 'bakery', 'Tarihi İnanç Fırını', 'Muradiye, 2. Murat Cd. No:4, 16050 Osmangazi/Bursa, Turkey', '무라디예의 오래된 화덕 빵집. 부르사 명물 타히니 피데(타한르)를 굽습니다.', 'Old wood-oven bakery in Muradiye making Bursa\'s tahini pide (tahanlı).'),
  place('bursa-cafe-1', 'bursa', 'cafe', 'Mahfel', 'Karaağaç, Namazgah Cd. No:2, 16360 Yıldırım/Bursa', '세트바시 근처 계곡을 내려다보는 부르사의 오래된 카페. 돈두르마(터키 아이스크림)로 알려져 있습니다.', 'Long-established Bursa café overlooking the ravine near Setbaşı, known for its dondurma.', { image: '/places/bursa-cafe-1.jpg' }),

  // —— trabzon ——
  place('trabzon-fine_dining-2', 'trabzon', 'fine_dining', 'Bordo Mavi Balık - Erşan Yılmaz', 'Boztepe, İpekyolu Cd., 61030 Ortahisar/Trabzon', '보즈테페의 흑해 생선 요리 전문점.', 'Black Sea fish restaurant in Boztepe.'),
  place('trabzon-fine_dining-3', 'trabzon', 'fine_dining', 'Cemilusta', 'İskenderpaşa, Belediye Cd., Atatürk Alanı No:6, 61100 Ortahisar/Trabzon', '트라브존 중앙 광장의 식당. 아크차아바트 쾨프테와 쿠이마크를 냅니다.', 'Restaurant on Trabzon\'s main square serving Akçaabat köfte and kuymak.'),
  place('trabzon-bakery-2', 'trabzon', 'bakery', 'Huna Bakery', 'Kemerkaya, Kahramanmaraş Cd., 61200 Ortahisar/Trabzon', '트라브존 중심가의 베이커리 카페. 크루아상과 튀르키예 커피를 냅니다.', 'Bakery café in central Trabzon, serving croissants and Turkish coffee.'),
  place('trabzon-cafe-1', 'trabzon', 'cafe', 'Coffee Shop Company Trabzon', 'İskenderpaşa, Dervişoğlu Çk. No:1, 61100 Ortahisar/Trabzon', '트라브존 중앙 광장(메이단) 옆의 커피숍. 옥상 좌석이 있습니다.', 'Coffee shop beside Trabzon\'s main square (Meydan), with rooftop seating.'),

  // —— pamukkale ——
  place('pamukkale-fine_dining-1', 'pamukkale', 'fine_dining', 'Kayas Wine House', 'Atatürk Cd. No:3, 20260 Pamukkale/Denizli, Turkey', '파묵칼레 마을 중심가의 레스토랑 겸 와인 바. 튀르키예·지중해 요리와 지역 와인을 냅니다.', 'Restaurant and wine bar in Pamukkale village, serving Turkish and Mediterranean dishes with local wines.'),

]
