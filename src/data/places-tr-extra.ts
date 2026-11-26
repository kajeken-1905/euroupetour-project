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

  // —— pamukkale: bakeries and cafés (2026-11-04) ——
  place('pamukkale-bakery-1', 'pamukkale', 'bakery', 'Le Four Patisserie', 'Cumhuriyet Meydanı 13/D, Pamukkale', '파묵칼레 마을 광장의 제과점.', 'Pastry shop on the Pamukkale village square.'),

  // —— bodrum: restaurants, bakeries and cafés (2026-11-18) ——
  place('bodrum-fine_dining-1', 'bodrum', 'fine_dining', 'Arka Ristorante Pizzeria', 'Çarşı, Cumhuriyet Caddesi No:102, Bodrum', '시내 바닷가 거리의 이탈리아 식당. 미쉐린 가이드 빕 구르망.', 'Italian restaurant on the seafront street in town. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('bodrum-fine_dining-2', 'bodrum', 'fine_dining', 'Otantik Ocakbaşı', 'Atatürk Caddesi No:46, Bodrum', '숯불 꼬치구이를 내는 오자크바시. 미쉐린 가이드 빕 구르망.', 'Charcoal grill house (ocakbaşı). MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('bodrum-fine_dining-3', 'bodrum', 'fine_dining', 'Orfoz', 'Kumbahçe Mahallesi, Zeki Müren Caddesi No:13/1, Bodrum', '쿰바흐체의 해산물 식당. 미쉐린 가이드 선정.', 'Seafood restaurant in Kumbahçe, listed in the MICHELIN Guide.'),

  // —— izmir: restaurants, bakeries and cafés (2026-11-18) ——
  place('izmir-fine_dining-5', 'izmir', 'fine_dining', 'Kemal\'in Yeri', 'Alsancak, 1453. Sokak No:22, Konak, Izmir', '알산자크의 생선·메제 식당. 미쉐린 가이드 빕 구르망.', 'Fish and meze restaurant in Alsancak. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('izmir-bakery-3', 'izmir', 'bakery', 'Ayşa Boşnak Börekçisi', 'Anafartalar Caddesi Abacıoğlu Hanı No:228 Z15, Kemeraltı/Konak, Izmir', '케메랄트 시장 옛 상인 숙소 안의 보스니아식 뵈렉 가게. 미쉐린 가이드 빕 구르망.', 'Bosnian börek shop inside an old inn in the Kemeraltı bazaar. MICHELIN Bib Gourmand.', { michelin: 'bib' }),

  // —— selcuk: restaurants, bakeries and cafés (2026-11-18) ——
  place('selcuk-fine_dining-1', 'selcuk', 'fine_dining', 'Eski Ev Restaurant (Old House)', '1005. Sk. No:1/A, Selçuk', '옛 집 안뜰의 튀르키예 가정식 식당. 구글 지도 평점 4.8.', 'Turkish home cooking in an old house courtyard. Rated 4.8 on Google Maps.'),
  place('selcuk-fine_dining-2', 'selcuk', 'fine_dining', 'Ayasuluk Şehir Lokantası', 'Selçuk', '장터 근처의 튀르키예식 대중 식당(로칸타). 구글 지도 평점 4.9.', 'Turkish canteen-style lokanta near the market. Rated 4.9 on Google Maps.'),
  place('selcuk-fine_dining-3', 'selcuk', 'fine_dining', 'Selçuk Lokantacısı Alex\'in Yeri', 'Cengiz Topel Cd. No:31/A, Selçuk', '시내 중심 거리의 로칸타. 구글 지도 평점 4.8.', 'Lokanta on the main street. Rated 4.8 on Google Maps.'),
  place('selcuk-fine_dining-4', 'selcuk', 'fine_dining', 'ŞİŞ\'KO SElÇUK', '1013. Sk. No:3, Selçuk', '꼬치구이 식당. 구글 지도 평점 4.8.', 'Grill restaurant. Rated 4.8 on Google Maps.'),
  place('selcuk-bakery-1', 'selcuk', 'bakery', 'Bizim Börekçi & Cafe', '1016. Sk. No:10, Selçuk', '뵈렉을 굽는 작은 가게. 구글 지도 평점 4.8.', 'Small börek bakery. Rated 4.8 on Google Maps.'),
  place('selcuk-bakery-2', 'selcuk', 'bakery', 'Roma Pastanesi', 'Şht. Polis Murat Akancay Cd. No:19, Selçuk', '동네 과자점. 구글 지도 평점 4.6.', 'Local pastry shop. Rated 4.6 on Google Maps.'),
  place('selcuk-bakery-3', 'selcuk', 'bakery', 'Ekşi Fırın', 'Barış Cd. No:31, Selçuk', '동네 빵집. 구글 지도 평점 4.4.', 'Neighbourhood bakery. Rated 4.4 on Google Maps.'),
  place('selcuk-cafe-1', 'selcuk', 'cafe', 'Kallinos Kafe', '1045. Sk. No:6, Selçuk', '시내의 커피 가게. 구글 지도 평점 4.7.', 'Coffee shop in town. Rated 4.7 on Google Maps.'),
  place('selcuk-cafe-2', 'selcuk', 'cafe', 'STAIRS COFFEE', '1045. Sk. No:11, Selçuk', '작은 커피 가게. 구글 지도 평점 4.9.', 'Small coffee shop. Rated 4.9 on Google Maps.'),
  place('selcuk-cafe-3', 'selcuk', 'cafe', 'Münire Selçuk', 'Uğur Mumcu Sevgi Yolu 12 B, Selçuk', '보행자 거리의 카페. 구글 지도 평점 4.9.', 'Café on the pedestrian street. Rated 4.9 on Google Maps.'),

  // —— bodrum: restaurants, bakeries and cafés (2026-11-18) ——
  place('bodrum-fine_dining-4', 'bodrum', 'fine_dining', 'LİNAM RESTAURANT', 'Neyzen Tevfik Cd. No:156, Bodrum', '마리나 거리의 식당. 구글 지도 평점 4.8.', 'Restaurant on the marina road. Rated 4.8 on Google Maps.'),
  place('bodrum-fine_dining-5', 'bodrum', 'fine_dining', 'sultan bahçe restaurant', 'Derviş Görgün Cd. No:43, Bodrum', '정원 자리가 있는 해산물 식당. 구글 지도 평점 4.7.', 'Seafood restaurant with a garden. Rated 4.7 on Google Maps.'),
  place('bodrum-bakery-1', 'bodrum', 'bakery', 'Mirzaoğlu Baklavaları ve KÜNEFE', 'Cevat Şakir Cd. No:89/C, Bodrum', '바클라바와 퀴네페 가게. 구글 지도 평점 4.8.', 'Baklava and künefe shop. Rated 4.8 on Google Maps.'),
  place('bodrum-bakery-2', 'bodrum', 'bakery', 'Bakery Stuff Bodrum', 'Turgut Reis Cd., Bodrum', '작은 빵집. 구글 지도 평점 5.0.', 'Small bakery. Rated 5.0 on Google Maps.'),
  place('bodrum-bakery-3', 'bodrum', 'bakery', 'Maride Cafe&Patisserie', 'Adliye Caddesi, Adalet İş Merkezi, Bodrum', '과자점 겸 카페. 구글 지도 평점 4.6.', 'Patisserie and café. Rated 4.6 on Google Maps.'),
  place('bodrum-cafe-1', 'bodrum', 'cafe', 'Frenk Bodrum', 'Yangı Çıkmazı Sok. No:4/A, Bodrum', '시내 골목의 카페. 구글 지도 평점 4.8.', 'Café in a side lane in town. Rated 4.8 on Google Maps.'),
  place('bodrum-cafe-2', 'bodrum', 'cafe', 'Cafe Chives', 'Cafer Paşa Cd. No:57/A, Bodrum', '브런치 카페. 구글 지도 평점 4.8.', 'Brunch café. Rated 4.8 on Google Maps.'),
  place('bodrum-cafe-3', 'bodrum', 'cafe', 'Zakka Cafe & Restaurant', 'Banka Sk. No:33/A, Bodrum', '카페 겸 식당. 구글 지도 평점 4.9.', 'Café-restaurant. Rated 4.9 on Google Maps.'),

  // —— fethiye: restaurants, bakeries and cafés (2026-11-18) ——
  place('fethiye-fine_dining-1', 'fethiye', 'fine_dining', 'Çarıklı Et Restaurant', 'Cahit Gündüz Cd. No:11, Fethiye', '고기 요리 식당. 구글 지도 평점 4.7.', 'Meat restaurant. Rated 4.7 on Google Maps.'),
  place('fethiye-fine_dining-2', 'fethiye', 'fine_dining', 'Zoi Fish Restaurant', 'Barış Manço Blv. No:19, Fethiye', '해산물 식당. 구글 지도 평점 4.8.', 'Seafood restaurant. Rated 4.8 on Google Maps.'),
  place('fethiye-fine_dining-3', 'fethiye', 'fine_dining', 'Zoka Restaurant', '973. Sk. No:26/1, Fethiye', '메제와 술을 곁들이는 메이하네. 구글 지도 평점 4.9.', 'Meyhane for meze and drinks. Rated 4.9 on Google Maps.'),
  place('fethiye-fine_dining-4', 'fethiye', 'fine_dining', 'Yengec Restaurant', 'Yes Marina, Fethiye', '항구의 해산물 식당. 구글 지도 평점 4.6.', 'Seafood restaurant at the harbour. Rated 4.6 on Google Maps.'),
  place('fethiye-bakery-1', 'fethiye', 'bakery', 'Bereket Künefe & Baklava', 'Çarşı Cd. No:198, Fethiye', '퀴네페와 바클라바 가게. 구글 지도 평점 5.0.', 'Künefe and baklava shop. Rated 5.0 on Google Maps.'),
  place('fethiye-bakery-2', 'fethiye', 'bakery', 'Ulaslioglu Baklava Fethiye', 'Çarşı Cd. No:46, Fethiye', '바클라바 가게. 구글 지도 평점 4.7.', 'Baklava shop. Rated 4.7 on Google Maps.'),
  place('fethiye-bakery-3', 'fethiye', 'bakery', 'Efe Fırın Bazlama Dükkanı', 'Baha Şıkman Cd. No:185, Fethiye', '시골 빵 바즐라마를 굽는 아침 식당. 구글 지도 평점 4.7.', 'Breakfast spot baking bazlama flatbread. Rated 4.7 on Google Maps.'),
  place('fethiye-cafe-1', 'fethiye', 'cafe', 'KeçiCoffeeRoastery', '504. Sk., Fethiye', '원두를 볶는 커피 가게. 구글 지도 평점 4.8.', 'Coffee roastery. Rated 4.8 on Google Maps.'),
  place('fethiye-cafe-2', 'fethiye', 'cafe', 'Doc Coffee Co.', 'Yerguzlar Cd. 58 A, Fethiye', '커피 가게. 구글 지도 평점 4.8.', 'Coffee shop. Rated 4.8 on Google Maps.'),
  place('fethiye-cafe-3', 'fethiye', 'cafe', 'Sirius Coffee', 'Cumhuriyet Caddesi, 504. Sk. No:3, Fethiye', '작은 커피 가게. 구글 지도 평점 4.9.', 'Small coffee shop. Rated 4.9 on Google Maps.'),

  // —— kas: restaurants, bakeries and cafés (2026-11-18) ——
  place('kas-fine_dining-1', 'kas', 'fine_dining', 'Naturel', 'Andifli Mh. Uzun Çarşı Gürsoy Sok. No:6, Kaş', '구시가 골목의 가정식 식당. 구글 지도 평점 4.7.', 'Home-style restaurant in an old-town lane. Rated 4.7 on Google Maps.'),
  place('kas-fine_dining-2', 'kas', 'fine_dining', 'Ehlikeyf Meyhanesi Kaş', 'Hükümet Cd. No:3, Kaş', '메제를 내는 메이하네. 구글 지도 평점 4.8.', 'Meyhane serving meze. Rated 4.8 on Google Maps.'),
  place('kas-fine_dining-3', 'kas', 'fine_dining', 'Kaş Gurme Falafel', '2 sokak no:3/A, Kaş', '팔라펠 가게. 구글 지도 평점 4.8.', 'Falafel shop. Rated 4.8 on Google Maps.'),
  place('kas-fine_dining-4', 'kas', 'fine_dining', 'Sempati Türk Mutfağı', 'Uzun Çarşı Gürsoy Sokak No:11, Kaş', '튀르키예 가정식 식당. 구글 지도 평점 4.7.', 'Turkish home cooking. Rated 4.7 on Google Maps.'),
  place('kas-bakery-1', 'kas', 'bakery', 'N8 Bakery', 'İlkokul Sk. No:5, Kaş', '빵집. 구글 지도 평점 4.7.', 'Bakery. Rated 4.7 on Google Maps.'),
  place('kas-bakery-2', 'kas', 'bakery', 'Hira Pattisserie', 'Eski Antalya Cd. No:114, Kaş', '과자점. 구글 지도 평점 4.6.', 'Patisserie. Rated 4.6 on Google Maps.'),
  place('kas-bakery-3', 'kas', 'bakery', 'CaFe LoKaL', 'Gürsoy Sokak No:4, Kaş', '빵과 디저트를 내는 카페. 구글 지도 평점 5.0.', 'Café baking bread and desserts. Rated 5.0 on Google Maps.'),
  place('kas-cafe-1', 'kas', 'cafe', 'Bla Bla Cafe Kaş', 'Liman Sk. No:4/A, Kaş', '항구 근처의 카페. 구글 지도 평점 4.9.', 'Café near the harbour. Rated 4.9 on Google Maps.'),
  place('kas-cafe-2', 'kas', 'cafe', 'Haz\'al Cafe', 'Gürsoy Sokak No:13/A, Kaş', '작은 커피 가게. 구글 지도 평점 5.0.', 'Small coffee shop. Rated 5.0 on Google Maps.'),
  place('kas-cafe-3', 'kas', 'cafe', 'Blue Soul Coffee & More', 'Atatürk Blv. No:10/A, Kaş', '커피 가게. 구글 지도 평점 4.9.', 'Coffee shop. Rated 4.9 on Google Maps.'),

  // —— olympos: restaurants, bakeries and cafés (2026-11-18) ——
  place('olympos-fine_dining-1', 'olympos', 'fine_dining', 'Erizo Gastro & Bar', 'Ulupınar Köyü, Sahil Yolu, Çıralı', '치랄르 해변의 지중해 식당. 구글 지도 평점 4.7.', 'Mediterranean restaurant on Çıralı beach. Rated 4.7 on Google Maps.'),
  place('olympos-fine_dining-2', 'olympos', 'fine_dining', 'Ceylan Restaurant & Bar', 'Çıralı Sk No:29, Çıralı', '치랄르의 식당. 구글 지도 평점 4.5.', 'Restaurant in Çıralı. Rated 4.5 on Google Maps.'),
  place('olympos-fine_dining-3', 'olympos', 'fine_dining', 'Cemils Restaurant Bistro cafe', 'Çıralı Yolu No:41, Çıralı', '치랄르 길가의 식당. 구글 지도 평점 4.5.', 'Restaurant on the Çıralı road. Rated 4.5 on Google Maps.'),
  place('olympos-fine_dining-4', 'olympos', 'fine_dining', 'Emek Cafe & Bistro', 'Çıralı Sk No:328, Çıralı', '튀르키예 가정식 식당. 구글 지도 평점 4.7.', 'Turkish home-cooking spot. Rated 4.7 on Google Maps.'),
  place('olympos-bakery-1', 'olympos', 'bakery', 'Asma Altı Cafe & Patisserie', 'Çıralı Sokak No:39, Çıralı', '포도 덩굴 아래 과자점 겸 카페. 구글 지도 평점 4.3.', 'Patisserie café under a vine. Rated 4.3 on Google Maps.'),
  place('olympos-cafe-1', 'olympos', 'cafe', 'The Beaver Coffee Shop Çıralı', 'Çıralı Sk No:540/1, Çıralı', '커피 가게. 구글 지도 평점 4.4.', 'Coffee shop. Rated 4.4 on Google Maps.'),

  // —— alanya: restaurants, bakeries and cafés (2026-11-18) ——
  place('alanya-fine_dining-1', 'alanya', 'fine_dining', 'Mazali Restaurant', 'Hükümet Cd. 81/A, Alanya', '투르크멘 요리 식당. 구글 지도 평점 4.7.', 'Turkmen restaurant. Rated 4.7 on Google Maps.'),
  place('alanya-fine_dining-2', 'alanya', 'fine_dining', 'Yönet Bamse Restaurant', 'Rıhtım Cd. No:8, Alanya', '항구 거리의 튀르키예 식당. 구글 지도 평점 4.8.', 'Turkish restaurant on the harbour road. Rated 4.8 on Google Maps.'),
  place('alanya-fine_dining-3', 'alanya', 'fine_dining', 'Mezze Grill Restaurant & Ocakbaşı', 'Atatürk Blv. No:84, Alanya', '숯불구이와 메제 식당. 구글 지도 평점 4.6.', 'Grill and meze restaurant. Rated 4.6 on Google Maps.'),
  place('alanya-fine_dining-4', 'alanya', 'fine_dining', 'Ay\'La Food & More', 'Sugözü Cd. No:10, Alanya', '메이하네. 구글 지도 평점 4.7.', 'Meyhane. Rated 4.7 on Google Maps.'),
  place('alanya-bakery-1', 'alanya', 'bakery', 'Çıtırım Pastanesi', 'Yunus Emre Cd. No:50, Alanya', '과자점. 구글 지도 평점 4.3.', 'Patisserie. Rated 4.3 on Google Maps.'),
  place('alanya-bakery-2', 'alanya', 'bakery', 'Grand Harman ekmek fırını & pastane', 'Saray Mah. Gülen Sok. No:6, Alanya', '빵집 겸 과자점. 구글 지도 평점 4.4.', 'Bakery and patisserie. Rated 4.4 on Google Maps.'),
  place('alanya-cafe-1', 'alanya', 'cafe', 'Cafe Local', 'Yunus Emre Cd. No:16, Alanya', '카페. 구글 지도 평점 4.8.', 'Café. Rated 4.8 on Google Maps.'),
  place('alanya-cafe-2', 'alanya', 'cafe', 'Caffe Ribelle', 'Hayate Hanım Cd. No:43, Alanya', '작은 커피 가게. 구글 지도 평점 5.0.', 'Small coffee shop. Rated 5.0 on Google Maps.'),
  place('alanya-cafe-3', 'alanya', 'cafe', 'Daphne\'s Coffee & Tea', 'Yunus Emre Cd. No:41/B, Alanya', '커피·차 카페. 구글 지도 평점 4.6.', 'Coffee and tea café. Rated 4.6 on Google Maps.'),

  // —— ayvalik: restaurants, bakeries and cafés (2026-11-18) ——
  place('ayvalik-fine_dining-1', 'ayvalik', 'fine_dining', 'Ayvalık Meyhanesi', 'Cumhuriyet Cd. No:132, Ayvalık', '메제를 내는 메이하네. 구글 지도 평점 4.8.', 'Meyhane serving meze. Rated 4.8 on Google Maps.'),
  place('ayvalik-fine_dining-2', 'ayvalik', 'fine_dining', 'Bi Meyhane Ayvalık', 'Cumhuriyet Cd. 4. Sk. No:11, Ayvalık', '메이하네. 구글 지도 평점 4.7.', 'Meyhane. Rated 4.7 on Google Maps.'),
  place('ayvalik-fine_dining-3', 'ayvalik', 'fine_dining', 'Sofia Ayvalık', 'Cumhuriyet Cd. 21. Sk. 1/A, Ayvalık', '구시가의 식당. 구글 지도 평점 4.7.', 'Restaurant in the old town. Rated 4.7 on Google Maps.'),
  place('ayvalik-fine_dining-4', 'ayvalik', 'fine_dining', 'La Perla Ayvalık', 'Atatürk Blv. No:99, Ayvalık', '해산물 식당. 구글 지도 평점 4.8.', 'Seafood restaurant. Rated 4.8 on Google Maps.'),
  place('ayvalik-bakery-1', 'ayvalik', 'bakery', 'Kurkubinya Fırın Pasta Kafe', 'Cumhuriyet Cd. No:166/A, Ayvalık', '빵집 겸 카페. 구글 지도 평점 4.9.', 'Bakery café. Rated 4.9 on Google Maps.'),
  place('ayvalik-bakery-2', 'ayvalik', 'bakery', 'Kosovara Börek Evi', '10023 Sokak No:6, Ayvalık', '뵈렉 가게. 구글 지도 평점 4.8.', 'Börek shop. Rated 4.8 on Google Maps.'),
  place('ayvalik-cafe-1', 'ayvalik', 'cafe', 'Oloa Coffee', 'Perşembe Sk. No:10/A, Ayvalık', '목요 장터 골목의 커피 가게. 구글 지도 평점 4.9.', 'Coffee shop on the Thursday-market lane. Rated 4.9 on Google Maps.'),
  place('ayvalik-cafe-2', 'ayvalik', 'cafe', 'Crow Coffee Roastery', 'Cumhuriyet Cd. No:218, Ayvalık', '원두를 볶는 커피 가게. 구글 지도 평점 4.7.', 'Coffee roastery. Rated 4.7 on Google Maps.'),
  place('ayvalik-cafe-3', 'ayvalik', 'cafe', 'AIMA CAFE', 'Gümrük Cd. 2. Sk. No:45, Ayvalık', '커피 가게. 구글 지도 평점 4.7.', 'Coffee shop. Rated 4.7 on Google Maps.'),

  // —— canakkale: restaurants, bakeries and cafés (2026-11-18) ——
  place('canakkale-fine_dining-1', 'canakkale', 'fine_dining', 'Köfteci Yaşar Usta', 'Mehmet Çavuş Sk. 1/A, Çanakkale', '쾨프테(완자) 식당. 구글 지도 평점 4.9.', 'Köfte (meatball) restaurant. Rated 4.9 on Google Maps.'),
  place('canakkale-fine_dining-2', 'canakkale', 'fine_dining', 'Rebeka Concept', 'Matbaa Sk. No:3/A, Çanakkale', '시내의 식당. 구글 지도 평점 4.8.', 'Restaurant in town. Rated 4.8 on Google Maps.'),
  place('canakkale-fine_dining-3', 'canakkale', 'fine_dining', 'Bizim Yaka Restaurant', 'Atatürk Cd. No:318/36, Çanakkale', '식당. 구글 지도 평점 4.7.', 'Restaurant. Rated 4.7 on Google Maps.'),
  place('canakkale-fine_dining-4', 'canakkale', 'fine_dining', '1986 Balıkevi', 'Sarıçay Cd. No:67, Çanakkale', '생선 식당. 구글 지도 평점 4.6.', 'Fish restaurant. Rated 4.6 on Google Maps.'),
  place('canakkale-bakery-1', 'canakkale', 'bakery', 'Meşhur Çanakkale Helvacısı Kadir Usta', 'Arap İbrahim Paşa Cd. No:24, Çanakkale', '차나칼레 명물 치즈 할바(페이니르 헬바스)를 파는 가게. 구글 지도 평점 4.6.', 'Shop for Çanakkale’s cheese halva (peynir helvası). Rated 4.6 on Google Maps.'),
  place('canakkale-bakery-2', 'canakkale', 'bakery', 'ferin | patisserie & coffee', 'Dibek Sk. No:22, Çanakkale', '과자점 겸 커피 가게. 구글 지도 평점 4.7.', 'Patisserie and coffee shop. Rated 4.7 on Google Maps.'),
  place('canakkale-bakery-3', 'canakkale', 'bakery', 'Samanyolu Peynir Helvası', 'Saat Kulesi Meydanı No:11/A, Çanakkale', '시계탑 광장의 치즈 할바 가게. 구글 지도 평점 4.7.', 'Cheese-halva shop on the clock-tower square. Rated 4.7 on Google Maps.'),
  place('canakkale-cafe-1', 'canakkale', 'cafe', 'Chemex Coffee Çanakkale', 'Kemalyeri Sk. 6/C, Çanakkale', '커피 가게. 구글 지도 평점 4.9.', 'Coffee shop. Rated 4.9 on Google Maps.'),
  place('canakkale-cafe-2', 'canakkale', 'cafe', 'BUEGROS Coffee Shop', 'Çarşı Cd. No:84, Çanakkale', '시장 거리의 커피 가게. 구글 지도 평점 4.9.', 'Coffee shop on the market street. Rated 4.9 on Google Maps.'),
  place('canakkale-cafe-3', 'canakkale', 'cafe', 'Cankuş Cafe', 'Çarşı Cd. No:38-40, Çanakkale', '시장 거리의 카페. 구글 지도 평점 4.6.', 'Café on the market street. Rated 4.6 on Google Maps.'),

  // —— konya: restaurants, bakeries and cafés (2026-11-18) ——
  place('konya-fine_dining-1', 'konya', 'fine_dining', 'Konya Sufi Restaurant', 'Türbe Önü Çarşısı, Müze Alanı Cd. No:6/E, Konya', '메블라나 박물관 앞의 콘야 향토 요리 식당. 구글 지도 평점 4.6.', 'Konya regional cooking opposite the Mevlana Museum. Rated 4.6 on Google Maps.'),
  place('konya-fine_dining-2', 'konya', 'fine_dining', 'Maruf Türbeönü Lokantası', 'Şht. Nazım Bey Cd. No:13, Konya', '메블라나 박물관 근처 로칸타. 구글 지도 평점 4.7.', 'Lokanta near the Mevlana Museum. Rated 4.7 on Google Maps.'),
  place('konya-fine_dining-3', 'konya', 'fine_dining', 'Sultan Somatı', 'Mengüç Cd. No:41, Konya', '셀주크·오스만 궁중 요리를 내는 식당. 구글 지도 평점 4.8.', 'Restaurant serving Seljuk and Ottoman palace dishes. Rated 4.8 on Google Maps.'),
  place('konya-fine_dining-4', 'konya', 'fine_dining', 'Ali Baba Fırın Kebap', 'Şeref Şirin Sk. No:5/A, Konya', '콘야식 화덕 케밥(프른 케밥) 가게. 구글 지도 평점 4.7.', 'Konya-style oven kebab (fırın kebap). Rated 4.7 on Google Maps.'),
  place('konya-bakery-1', 'konya', 'bakery', 'Makara Tatlı Evi', 'Ebu Suhud Efendi Cd. No:15, Konya', '디저트 가게. 구글 지도 평점 4.8.', 'Dessert shop. Rated 4.8 on Google Maps.'),
  place('konya-bakery-2', 'konya', 'bakery', 'Kırkikindi Pastane', 'Sultan Mesut Sk. No:11, Konya', '과자점. 구글 지도 평점 4.6.', 'Patisserie. Rated 4.6 on Google Maps.'),
  place('konya-cafe-1', 'konya', 'cafe', 'Coffee D\'Basil', 'Şht. Nazım Bey Cd. No:6B, Konya', '메블라나 박물관 근처 카페. 구글 지도 평점 4.8.', 'Café near the Mevlana Museum. Rated 4.8 on Google Maps.'),

  // —— safranbolu: restaurants, bakeries and cafés (2026-11-18) ——
  place('safranbolu-fine_dining-1', 'safranbolu', 'fine_dining', 'Taş Bahçe', 'Demirciler Çarşısı No:26, Safranbolu', '대장장이 시장 안의 돌 정원 식당. 구글 지도 평점 4.5.', 'Stone-garden restaurant in the blacksmiths’ bazaar. Rated 4.5 on Google Maps.'),
  place('safranbolu-fine_dining-2', 'safranbolu', 'fine_dining', 'Şehr-i Safran Köftecisi', 'Han Arkası Sokak No:14/1, Safranbolu', '쾨프테 식당. 구글 지도 평점 4.4.', 'Köfte restaurant. Rated 4.4 on Google Maps.'),
  place('safranbolu-fine_dining-3', 'safranbolu', 'fine_dining', 'Atiş Butik Restaurant', 'Han Arkası Sokak No:34, Safranbolu', '진지 한 뒤 골목의 식당. 구글 지도 평점 4.3.', 'Restaurant in the lane behind Cinci Han. Rated 4.3 on Google Maps.'),
  place('safranbolu-fine_dining-4', 'safranbolu', 'fine_dining', 'Filinta Konak Restaurant', 'Akpınar Sokak No:16, Safranbolu', '옛 저택 식당. 구글 지도 평점 5.0.', 'Restaurant in an old mansion. Rated 5.0 on Google Maps.'),
  place('safranbolu-bakery-1', 'safranbolu', 'bakery', 'Safranbolu İnci Pastanesi', 'Sefa Sk. No:21, Safranbolu', '신시가의 과자점. 구글 지도 평점 4.4.', 'Patisserie in the new town. Rated 4.4 on Google Maps.'),
  place('safranbolu-cafe-1', 'safranbolu', 'cafe', 'SaffronBrew', 'Kasaplar İçi Sokak No:19/A, Safranbolu', '사프란 커피를 내는 커피 가게. 구글 지도 평점 4.7.', 'Coffee shop serving saffron coffee. Rated 4.7 on Google Maps.'),
  place('safranbolu-cafe-2', 'safranbolu', 'cafe', 'Kahvehan Safranbolu', 'Akın Sokak No:13/A, Safranbolu', '구시가의 카페. 구글 지도 평점 4.4.', 'Café in the old town. Rated 4.4 on Google Maps.'),

  // —— amasra: restaurants, bakeries and cafés (2026-11-18) ——
  place('amasra-fine_dining-1', 'amasra', 'fine_dining', 'Günbatımı Balık Restoran (İbrahim Amca’nın Yeri)', 'Küçük Liman Cd. No:5, Amasra', '작은 항구의 생선 식당. 구글 지도 평점 4.3.', 'Fish restaurant on the small harbour. Rated 4.3 on Google Maps.'),
  place('amasra-fine_dining-2', 'amasra', 'fine_dining', 'Anne Eli Ev Yemekleri', 'Küçük Liman Cd. 15/A, Amasra', '가정식 식당. 구글 지도 평점 4.5.', 'Home-cooking restaurant. Rated 4.5 on Google Maps.'),
  place('amasra-fine_dining-3', 'amasra', 'fine_dining', 'Günay Ev Yemekleri', 'Cumhuriyet Cd. No:19/B, Amasra', '가정식 식당. 구글 지도 평점 4.5.', 'Home-cooking restaurant. Rated 4.5 on Google Maps.'),
  place('amasra-cafe-1', 'amasra', 'cafe', 'Sand Coffee Amasra', 'Turgut Işık Cd. No:3/3, Amasra', '커피 가게. 구글 지도 평점 4.9.', 'Coffee shop. Rated 4.9 on Google Maps.'),
  place('amasra-cafe-2', 'amasra', 'cafe', 'Marina Cafe', 'General Mithat Ceylan Cd. No:13, Amasra', '바닷가 카페. 구글 지도 평점 4.5.', 'Seaside café. Rated 4.5 on Google Maps.'),
  place('amasra-cafe-3', 'amasra', 'cafe', 'Star Cafe & Bistro', 'Çekiciler Sk., Amasra', '체키질레르 시장 골목의 카페. 구글 지도 평점 4.4.', 'Café on the Çekiciler market lane. Rated 4.4 on Google Maps.'),

  // —— edirne: restaurants, bakeries and cafés (2026-11-18) ——
  place('edirne-fine_dining-1', 'edirne', 'fine_dining', 'Meşhur Edirne Ciğercisi Kazım ve İlhan Usta', 'Osmaniye Cd. No:69, Edirne', '에디르네 명물 튀긴 간 요리(타바 지에르) 식당. 구글 지도 평점 4.5.', 'Edirne’s famous fried liver (tava ciğer). Rated 4.5 on Google Maps.'),
  place('edirne-fine_dining-2', 'edirne', 'fine_dining', 'Aydın Tava Ciğer', 'Tahmis Çarşısı Sk. No:8, Edirne', '타바 지에르 식당. 구글 지도 평점 4.4.', 'Tava ciğer restaurant. Rated 4.4 on Google Maps.'),
  place('edirne-fine_dining-3', 'edirne', 'fine_dining', 'Kıyık Et Lokantası', 'Kıyık Cd., Edirne', '고기 요리 식당. 구글 지도 평점 4.7.', 'Meat restaurant. Rated 4.7 on Google Maps.'),
  place('edirne-fine_dining-4', 'edirne', 'fine_dining', 'Vargo Restaurant & Bar', 'Atatürk Blv. No:232, Edirne', '식당 겸 바. 구글 지도 평점 4.8.', 'Restaurant and bar. Rated 4.8 on Google Maps.'),
  place('edirne-bakery-1', 'edirne', 'bakery', 'Konak Patisserie', 'Muammer Aksoy Cd. No:33, Edirne', '과자점. 구글 지도 평점 4.6.', 'Patisserie. Rated 4.6 on Google Maps.'),
  place('edirne-bakery-2', 'edirne', 'bakery', 'Edirne Petek Pastanesi', 'Kıyık Cd., Edirne', '과자점. 구글 지도 평점 4.4.', 'Patisserie. Rated 4.4 on Google Maps.'),
  place('edirne-cafe-1', 'edirne', 'cafe', 'Mola Kahvaltı Salonu', 'Kuyumcular Sk. No:6, Edirne', '옛 베데스텐 시장 옆 아침 식사 카페. 구글 지도 평점 4.5.', 'Breakfast café beside the old Bedesten. Rated 4.5 on Google Maps.'),
  place('edirne-cafe-2', 'edirne', 'cafe', 'Kahverengi Cafe&Bar&Bistro', 'Orhaniye Cd. No:14, Edirne', '카페. 구글 지도 평점 4.6.', 'Café. Rated 4.6 on Google Maps.'),
  place('edirne-cafe-3', 'edirne', 'cafe', 'Latife Türk Kahvesi Edirne', 'Kelebek Sk. No:14, Edirne', '튀르키예 커피 가게. 구글 지도 평점 4.6.', 'Turkish coffee house. Rated 4.6 on Google Maps.'),

  // —— kars: restaurants, bakeries and cafés (2026-11-18) ——
  place('kars-fine_dining-1', 'kars', 'fine_dining', '1855 Gazi Restaurant', 'Halilpaşa Caddesi No:62, Kars', '튀르키예 식당. 구글 지도 평점 4.6.', 'Turkish restaurant. Rated 4.6 on Google Maps.'),
  place('kars-fine_dining-2', 'kars', 'fine_dining', 'Kale Cafe & Restaurant', 'Şht. Hulusi Aytekin Cd. No:13, Kars', '카르스 성 아래의 식당. 구글 지도 평점 4.5.', 'Restaurant below Kars Castle. Rated 4.5 on Google Maps.'),
  place('kars-fine_dining-3', 'kars', 'fine_dining', 'Piroşki Ev Yemekleri ve Mantı Evi', 'Hakim Ali Rıza Arslan Caddesi, Kars', '만트(만두)와 가정식 식당. 구글 지도 평점 4.9.', 'Mantı and home-cooking restaurant. Rated 4.9 on Google Maps.'),
  place('kars-fine_dining-4', 'kars', 'fine_dining', 'Kafkas Restoran', 'İnönü Caddesi No:76G, Kars', '식당. 구글 지도 평점 4.5.', 'Restaurant. Rated 4.5 on Google Maps.'),
  place('kars-cafe-1', 'kars', 'cafe', 'Neo Kaff Coffee Store', 'Şht. Hulusi Aytekin Cd. No:9, Kars', '성 아래 커피 가게. 구글 지도 평점 4.9.', 'Coffee shop below the castle. Rated 4.9 on Google Maps.'),
  place('kars-cafe-2', 'kars', 'cafe', 'David People', 'Atatürk Cd. No:107, Kars', '카페. 구글 지도 평점 4.8.', 'Café. Rated 4.8 on Google Maps.'),

  // —— gaziantep: restaurants, bakeries and cafés (2026-11-18) ——
  place('gaziantep-fine_dining-1', 'gaziantep', 'fine_dining', 'Kelebek Restoran', 'Kemal Köker Cd. No:67/A, Gaziantep', '파차·베이란 수프와 케밥 식당. 구글 지도 평점 4.6.', 'Restaurant for paça and beyran soups and kebabs. Rated 4.6 on Google Maps.'),
  place('gaziantep-fine_dining-2', 'gaziantep', 'fine_dining', 'Sakıp Usta Paça Beyran Kebap', 'Kemal Köker Cd. No:55, Gaziantep', '베이란 수프와 케밥 식당. 구글 지도 평점 4.5.', 'Beyran soup and kebab house. Rated 4.5 on Google Maps.'),
  place('gaziantep-fine_dining-3', 'gaziantep', 'fine_dining', 'Tarihi Bey Kebapçısı (İsmail Şef)', 'Tufan Hamam Sk. No:7, Gaziantep', '옛 시가의 케밥 가게. 구글 지도 평점 4.7.', 'Kebab house in the old city. Rated 4.7 on Google Maps.'),
  place('gaziantep-fine_dining-4', 'gaziantep', 'fine_dining', 'Yesemek Gaziantep Mutfağı', 'Hamdi Kutlar Cd. No:51/1-B, Gaziantep', '가지안테프 향토 요리 식당. 구글 지도 평점 4.3.', 'Gaziantep regional cooking. Rated 4.3 on Google Maps.'),
  place('gaziantep-bakery-1', 'gaziantep', 'bakery', 'Ömer Kozan Baklava', 'Belibağlı Sk. No:21, Gaziantep', '바클라바 가게. 구글 지도 평점 5.0.', 'Baklava shop. Rated 5.0 on Google Maps.'),
  place('gaziantep-bakery-2', 'gaziantep', 'bakery', 'Koçak Baklava', 'Abdulkadir Behçet Cd. No:44, Gaziantep', '바클라바 가게. 구글 지도 평점 4.3.', 'Baklava shop. Rated 4.3 on Google Maps.'),
  place('gaziantep-bakery-3', 'gaziantep', 'bakery', 'Tarihi Elmacıpazarı Güllüoğlu Baklava', 'Elmacı Çk. No:4, Gaziantep', '엘마즈 시장의 옛 바클라바 가게. 구글 지도 평점 4.4.', 'Historic baklava shop in the Elmacı market. Rated 4.4 on Google Maps.'),
  place('gaziantep-cafe-1', 'gaziantep', 'cafe', 'Menengiç Kafe', 'Müftüoğlu Sk. No:11, Gaziantep', '피스타치오 커피 멘엔기치를 내는 카페. 구글 지도 평점 4.9.', 'Café serving menengiç coffee. Rated 4.9 on Google Maps.'),
  place('gaziantep-cafe-2', 'gaziantep', 'cafe', 'Tütün Han & Cave Cafe', 'Külekçi Çarşısı Sk., Tütün Hanı, Gaziantep', '옛 담배 상인 숙소 안의 카페. 구글 지도 평점 4.3.', 'Café inside the old tobacco inn. Rated 4.3 on Google Maps.'),
  place('gaziantep-cafe-3', 'gaziantep', 'cafe', 'Çatı Katı 1877 Coffee', 'Tepe Sk. No:5, Gaziantep', '커피 가게. 구글 지도 평점 4.4.', 'Coffee shop. Rated 4.4 on Google Maps.'),

  // —— sanliurfa: restaurants, bakeries and cafés (2026-11-18) ——
  place('sanliurfa-fine_dining-1', 'sanliurfa', 'fine_dining', 'Şirinhan Restaurant', 'Akarbaşı Caddesi No:24, Şanlıurfa', '케밥 식당. 구글 지도 평점 4.8.', 'Kebab restaurant. Rated 4.8 on Google Maps.'),
  place('sanliurfa-fine_dining-2', 'sanliurfa', 'fine_dining', 'Hanehan Restaurant', 'Kazancı Bedih Sk. No:3, Şanlıurfa', '옛 집의 향토 요리 식당. 구글 지도 평점 4.7.', 'Regional cooking in an old house. Rated 4.7 on Google Maps.'),
  place('sanliurfa-fine_dining-3', 'sanliurfa', 'fine_dining', 'Birinci Ciğer & Kebap', 'Balıklı Göl Cd., 1211. Sk. No:1/A, Şanlıurfa', '간 꼬치와 케밥 가게. 구글 지도 평점 4.7.', 'Liver skewer and kebab house. Rated 4.7 on Google Maps.'),
  place('sanliurfa-fine_dining-4', 'sanliurfa', 'fine_dining', 'Gümrükhan Ciğer', 'Balıklı Göl Cd. 25B, Şanlıurfa', '간 꼬치 가게. 구글 지도 평점 4.8.', 'Liver skewer house. Rated 4.8 on Google Maps.'),
  place('sanliurfa-bakery-1', 'sanliurfa', 'bakery', 'Edessa Künefe Salonu', 'Balıklı Göl Cd. No:18, Şanlıurfa', '퀴네페 가게. 구글 지도 평점 4.3.', 'Künefe shop. Rated 4.3 on Google Maps.'),
  place('sanliurfa-cafe-1', 'sanliurfa', 'cafe', 'KAFEADAR', 'Çarşı Cd. No:44, Şanlıurfa', '카페. 구글 지도 평점 4.6.', 'Café. Rated 4.6 on Google Maps.'),

  // —— mardin: restaurants, bakeries and cafés (2026-11-18) ——
  place('mardin-fine_dining-1', 'mardin', 'fine_dining', 'Daar Restaurant', 'Küme Evleri No:53, Mardin', '튀르키예 식당. 구글 지도 평점 4.9.', 'Turkish restaurant. Rated 4.9 on Google Maps.'),
  place('mardin-fine_dining-2', 'mardin', 'fine_dining', 'Lummi Restaurant', '225 Sokak No:5, Mardin', '마르딘 박물관 옆 식당. 구글 지도 평점 4.8.', 'Restaurant beside the Mardin Museum. Rated 4.8 on Google Maps.'),
  place('mardin-fine_dining-3', 'mardin', 'fine_dining', 'Leyli Muse Mutfak', 'Kültür Sok. No:17, Mardin', '마르딘 향토 요리 식당. 구글 지도 평점 4.7.', 'Mardin regional cooking. Rated 4.7 on Google Maps.'),
  place('mardin-fine_dining-4', 'mardin', 'fine_dining', 'Yay Konağı', '1. Cadde No:194/B, Mardin', '옛 저택 식당. 구글 지도 평점 4.5.', 'Restaurant in an old mansion. Rated 4.5 on Google Maps.'),
  place('mardin-bakery-1', 'mardin', 'bakery', 'Tandoğan Unlu Mamulleri', 'Kültür Cd. No:11, Mardin', '빵과 과자 가게. 구글 지도 평점 4.4.', 'Bread and pastry shop. Rated 4.4 on Google Maps.'),
  place('mardin-cafe-1', 'mardin', 'cafe', 'Tarihi Mardin Kahvecisi', '1. Cadde No:185/B, Mardin', '옛 커피 가게. 구글 지도 평점 4.9.', 'Historic coffee house. Rated 4.9 on Google Maps.'),
  place('mardin-cafe-2', 'mardin', 'cafe', 'The Republic Cafe Mardin', '248 Hisarcık Sokak No:1/2, Mardin', '카페. 구글 지도 평점 4.4.', 'Café. Rated 4.4 on Google Maps.'),

  // —— goreme: restaurants, bakeries and cafés (2026-11-18) ——
  place('goreme-fine_dining-1', 'goreme', 'fine_dining', 'Topdeck Cave Restaurant', 'Hafız Abdullah Efendi Sk. No:15, Göreme', '동굴 안의 튀르키예 식당. 구글 지도 평점 4.6.', 'Turkish restaurant in a cave. Rated 4.6 on Google Maps.'),
  place('goreme-fine_dining-2', 'goreme', 'fine_dining', 'İnci Cave Restaurant', 'Cami Sk. No:22, Göreme', '동굴 식당. 구글 지도 평점 4.7.', 'Cave restaurant. Rated 4.7 on Google Maps.'),
  place('goreme-fine_dining-3', 'goreme', 'fine_dining', 'Göreme Han Restaurant', 'Bilal Eroğlu Cd. No:29, Göreme', '튀르키예 식당. 구글 지도 평점 4.7.', 'Turkish restaurant. Rated 4.7 on Google Maps.'),
  place('goreme-fine_dining-4', 'goreme', 'fine_dining', 'Taste of Moms', 'Kazım Eren Sk. No:33, Göreme', '가정식 식당. 구글 지도 평점 4.8.', 'Home-cooking restaurant. Rated 4.8 on Google Maps.'),

  // —— pamukkale: restaurants, bakeries and cafés (2026-11-18) ——
  place('pamukkale-fine_dining-2', 'pamukkale', 'fine_dining', 'Almanyalının Yeri', 'Turgut Özal Cd. No:4 C, Pamukkale', '튀르키예 식당. 구글 지도 평점 4.9.', 'Turkish restaurant. Rated 4.9 on Google Maps.'),
  place('pamukkale-fine_dining-3', 'pamukkale', 'fine_dining', 'As Teras Mantı Evi', 'Traverter Sk. No:1/B, Pamukkale', '만트(만두) 식당. 구글 지도 평점 4.8.', 'Mantı restaurant. Rated 4.8 on Google Maps.'),

  // —— iznik: restaurants, bakeries and cafés (2026-11-26) ——
  place('iznik-fine_dining-1', 'iznik', 'fine_dining', 'İznik Rıhtım', 'Şehit Sedat Pelit Parkı No:42, İznik, Türkiye', '해산물 레스토랑. 구글 지도 평점 4.3(리뷰 2743개).', 'Seafood restaurant. Rated 4.3 on Google Maps (2743 reviews).'),
  place('iznik-fine_dining-2', 'iznik', 'fine_dining', 'Enfal Izgara Kasap', 'Kılıçaslan Cd. No:142, İznik, Türkiye', '그릴 레스토랑. 구글 지도 평점 4.4(리뷰 1041개).', 'Grill restaurant. Rated 4.4 on Google Maps (1041 reviews).'),
  place('iznik-fine_dining-3', 'iznik', 'fine_dining', 'Kota Chef', 'Kılıçaslan Cd. No:52/A, İznik, Türkiye', '이탈리아 요리 레스토랑. 구글 지도 평점 4.7(리뷰 106개).', 'Italian restaurant. Rated 4.7 on Google Maps (106 reviews).'),
  place('iznik-bakery-1', 'iznik', 'bakery', 'Tarihi İznik Fırını (Ekmekçil)', 'Atatürk Cd. 91/A, İznik, Türkiye', '빵집. 구글 지도 평점 4.6(리뷰 181개).', 'Bakery. Rated 4.6 on Google Maps (181 reviews).'),
  place('iznik-bakery-2', 'iznik', 'bakery', 'İznik Ballı Dondurma ve Tatlı', 'Atatürk Cd. 28/C, İznik, Türkiye', '디저트 가게. 구글 지도 평점 4.6(리뷰 146개).', 'Dessert shop. Rated 4.6 on Google Maps (146 reviews).'),
  place('iznik-bakery-3', 'iznik', 'bakery', 'Ceren Pastanesi', 'Atatürk Cd., İznik, Türkiye', '과자점. 구글 지도 평점 4.5(리뷰 293개).', 'Pastry shop. Rated 4.5 on Google Maps (293 reviews).'),
  place('iznik-cafe-1', 'iznik', 'cafe', 'Ada Kahve İznik', 'Kılıçaslan Cd. No:127/A, İznik, Türkiye', '카페. 구글 지도 평점 4.9(리뷰 412개).', 'Café. Rated 4.9 on Google Maps (412 reviews).'),
  place('iznik-cafe-2', 'iznik', 'cafe', 'Es Coffee', 'Kutalmışoğlu Süleymanşah Caddesi No:95E, İznik, Türkiye', '카페. 구글 지도 평점 4.6(리뷰 92개).', 'Café. Rated 4.6 on Google Maps (92 reviews).'),

  // —— assos: restaurants, bakeries and cafés (2026-11-26) ——
  place('assos-fine_dining-1', 'assos', 'fine_dining', 'Assos Bohemian Restaurant', 'Köyiçi Mevkii No:66, Behramkale, Türkiye', '레스토랑. 구글 지도 평점 4.7(리뷰 1003개).', 'Restaurant. Rated 4.7 on Google Maps (1003 reviews).'),
  place('assos-fine_dining-2', 'assos', 'fine_dining', 'Assos Palamud Restaurant', 'Antik Liman, İskele Meydanı No:35, Behramkale, Türkiye', '해산물 레스토랑. 구글 지도 평점 4.4(리뷰 1313개).', 'Seafood restaurant. Rated 4.4 on Google Maps (1313 reviews).'),
  place('assos-fine_dining-3', 'assos', 'fine_dining', 'Cengiz Lokantası', 'Behramkale, Türkiye', '로칸타(튀르키예 가정식 식당). 구글 지도 평점 4.5(리뷰 655개).', 'Lokanta (Turkish home-cooking restaurant). Rated 4.5 on Google Maps (655 reviews).'),
  place('assos-fine_dining-4', 'assos', 'fine_dining', 'Assos Hilal Butik Otel Cafe Restaurant', 'Behramkale, Türkiye', '레스토랑. 구글 지도 평점 4.3(리뷰 1532개).', 'Restaurant. Rated 4.3 on Google Maps (1532 reviews).'),
  place('assos-bakery-1', 'assos', 'bakery', 'Assos Dondurmacısı Ali Usta', 'Köy İçi, Behramkale, Türkiye', '아이스크림 가게. 구글 지도 평점 4.8(리뷰 113개).', 'Ice-cream shop. Rated 4.8 on Google Maps (113 reviews).'),
  place('assos-cafe-1', 'assos', 'cafe', 'Cleanthes Cafe', 'Köy Meydanı No:50/A, Behramkale, Türkiye', '카페. 구글 지도 평점 4.8(리뷰 333개).', 'Café. Rated 4.8 on Google Maps (333 reviews).'),
  place('assos-cafe-2', 'assos', 'cafe', 'Kahvassos', 'Behramkale Küme Evleri 255/E, Behramkale, Türkiye', '카페. 구글 지도 평점 4.7(리뷰 150개).', 'Café. Rated 4.7 on Google Maps (150 reviews).'),

  // —— cesme: restaurants, bakeries and cafés (2026-11-26) ——
  place('cesme-fine_dining-1', 'cesme', 'fine_dining', 'Terakki Alaçatı', 'Alaçatı, 12000 Sk No:21, 35930 Çeşme/İzmir, Türkiye', '레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.6(리뷰 664개).', 'Restaurant. Listed in the MICHELIN Guide. Rated 4.6 on Google Maps (664 reviews).'),
  place('cesme-fine_dining-2', 'cesme', 'fine_dining', 'Ritüel', 'Ardıç, 5495. Sk No:26, 35000 Çeşme/İzmir, Türkiye', '현대 요리 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.6(리뷰 67개).', 'Modern cuisine restaurant. Listed in the MICHELIN Guide. Rated 4.6 on Google Maps (67 reviews).'),
  place('cesme-fine_dining-3', 'cesme', 'fine_dining', 'Çark Balık Restorant Çeşme', '16 Eylül, 3047. Sk. No:7/A, 35930 Çeşme/İzmir, Türkiye', '해산물 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.5(리뷰 991개).', 'Seafood restaurant. Listed in the MICHELIN Guide. Rated 4.5 on Google Maps (991 reviews).'),
  place('cesme-fine_dining-4', 'cesme', 'fine_dining', 'Sota Alaçatı', 'Alaçatı, 11039. Sokak No:18, 35930 Çeşme/İzmir, Türkiye', '해산물 레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.4(리뷰 659개).', 'Seafood restaurant. Listed in the MICHELIN Guide. Rated 4.4 on Google Maps (659 reviews).'),
  place('cesme-fine_dining-5', 'cesme', 'fine_dining', 'Roka Bahçe', 'Hacımemiş Mahallesi, 2027. Sk. No:6, 35937 Çeşme/İzmir, Türkiye', '레스토랑. 미쉐린 가이드 소개. 구글 지도 평점 4.3(리뷰 302개).', 'Restaurant. Listed in the MICHELIN Guide. Rated 4.3 on Google Maps (302 reviews).'),
  place('cesme-bakery-1', 'cesme', 'bakery', 'Nejla Hanım Alaçatı', '11500 Sokak No:159, Alaçatı, Türkiye', '빵집. 구글 지도 평점 4.7(리뷰 512개).', 'Bakery. Rated 4.7 on Google Maps (512 reviews).'),
  place('cesme-bakery-2', 'cesme', 'bakery', 'Apéro Bakery & Sandwicherie', '2047. Sk. No:20, Çeşme, Türkiye', '빵집. 구글 지도 평점 4.8(리뷰 218개).', 'Bakery. Rated 4.8 on Google Maps (218 reviews).'),
  place('cesme-bakery-3', 'cesme', 'bakery', 'Alatat Alaçatı', '12024 Sokak No:6, Alaçatı, Türkiye', '과자점. 구글 지도 평점 4.6(리뷰 104개).', 'Pastry shop. Rated 4.6 on Google Maps (104 reviews).'),
  place('cesme-bakery-4', 'cesme', 'bakery', 'Kadet', '12012. Sk. No:27, Alaçatı, Türkiye', '디저트 가게. 구글 지도 평점 4.6(리뷰 770개).', 'Dessert shop. Rated 4.6 on Google Maps (770 reviews).'),
  place('cesme-bakery-5', 'cesme', 'bakery', 'Radika Cafe Alaçatı', 'Kemalpaşa Cd. 101B, Alaçatı, Türkiye', '빵집. 구글 지도 평점 4.3(리뷰 125개).', 'Bakery. Rated 4.3 on Google Maps (125 reviews).'),
  place('cesme-cafe-1', 'cesme', 'cafe', 'Cafe Du Musee', '12031 Sokak No:2, Alaçatı, Türkiye', '카페. 구글 지도 평점 4.9(리뷰 279개).', 'Café. Rated 4.9 on Google Maps (279 reviews).'),
  place('cesme-cafe-2', 'cesme', 'cafe', 'The Mass Coffee', '11026/1 Sok No:4/1A, Çeşme, Türkiye', '카페. 구글 지도 평점 4.9(리뷰 103개).', 'Café. Rated 4.9 on Google Maps (103 reviews).'),
  place('cesme-cafe-3', 'cesme', 'cafe', 'Unda Alaçatı', '2000. Sk. No:44/A, Çeşme, Türkiye', '카페. 구글 지도 평점 4.9(리뷰 149개).', 'Café. Rated 4.9 on Google Maps (149 reviews).'),
  place('cesme-cafe-4', 'cesme', 'cafe', 'Matcha Mia', '12012. Sk. No:38, Alaçatı, Türkiye', '카페. 구글 지도 평점 4.6(리뷰 141개).', 'Café. Rated 4.6 on Google Maps (141 reviews).'),

  // —— bergama: restaurants, bakeries and cafés (2026-11-26) ——
  place('bergama-fine_dining-1', 'bergama', 'fine_dining', 'İstiklal Lokantası', 'Eski Elektrik Fbr. Cd. No:20, Bergama, Türkiye', '로칸타(튀르키예 가정식 식당). 구글 지도 평점 4.8(리뷰 169개).', 'Lokanta (Turkish home-cooking restaurant). Rated 4.8 on Google Maps (169 reviews).'),
  place('bergama-fine_dining-2', 'bergama', 'fine_dining', 'Bergama Arasta Lokantası', 'Eski Bahçıvan Pazarı No:3, Bergama, Türkiye', '로칸타(튀르키예 가정식 식당). 구글 지도 평점 4.6(리뷰 96개).', 'Lokanta (Turkish home-cooking restaurant). Rated 4.6 on Google Maps (96 reviews).'),
  place('bergama-fine_dining-3', 'bergama', 'fine_dining', 'Altın Kepçe Bergama Köfte', 'Hacı Yamak Sk. No:1, Bergama, Türkiye', '쾨프테(튀르키예식 미트볼) 식당. 구글 지도 평점 4.4(리뷰 2822개).', 'Köfte (Turkish meatball) restaurant. Rated 4.4 on Google Maps (2822 reviews).'),
  place('bergama-fine_dining-4', 'bergama', 'fine_dining', 'Date Line', '1. Manifaturacılar Sok. No:1, Bergama, Türkiye', '피자 식당. 구글 지도 평점 4.9(리뷰 505개).', 'Pizza restaurant. Rated 4.9 on Google Maps (505 reviews).'),
  place('bergama-fine_dining-5', 'bergama', 'fine_dining', 'Karabey Şarküteri ve Kahvaltı Salonu', 'İsmet İnönü Cd. No:48/C, Bergama, Türkiye', '튀르키예식 아침 식당. 구글 지도 평점 5.0(리뷰 99개).', 'Turkish breakfast restaurant. Rated 5.0 on Google Maps (99 reviews).'),
  place('bergama-bakery-1', 'bergama', 'bakery', '4k Cafe & Patisserie', 'Hasan Çelebi Cd. No:63, Bergama, Türkiye', '과자점. 구글 지도 평점 4.5(리뷰 111개).', 'Pastry shop. Rated 4.5 on Google Maps (111 reviews).'),
  place('bergama-cafe-1', 'bergama', 'cafe', 'Çınarlı Kahve', 'Eski Bahçıvan Pazarı, Bergama, Türkiye', '카페. 구글 지도 평점 4.6(리뷰 715개).', 'Café. Rated 4.6 on Google Maps (715 reviews).'),
  place('bergama-cafe-2', 'bergama', 'cafe', 'Vikont Coffee & Roastery Bergama', 'İlke Sokak No:6/A, Bergama, Türkiye', '직접 원두를 볶는 커피숍. 구글 지도 평점 4.6(리뷰 143개).', 'Coffee roastery café. Rated 4.6 on Google Maps (143 reviews).'),
  place('bergama-cafe-3', 'bergama', 'cafe', 'Boston Drink & Dessert', 'Özgürlük Cd. No:29A, Bergama, Türkiye', '카페. 구글 지도 평점 4.6(리뷰 164개).', 'Café. Rated 4.6 on Google Maps (164 reviews).'),
  place('bergama-cafe-4', 'bergama', 'cafe', 'Bobby Coffee', 'Kınık Cd. No:68, Bergama, Türkiye', '카페. 구글 지도 평점 4.3(리뷰 315개).', 'Café. Rated 4.3 on Google Maps (315 reviews).'),

  // —— kusadasi: restaurants, bakeries and cafés (2026-11-26) ——
  place('kusadasi-fine_dining-1', 'kusadasi', 'fine_dining', 'Bottarga Restaurant', 'Atatürk Blv., Kuşadası, Türkiye', '해산물 레스토랑. 구글 지도 평점 4.7(리뷰 695개).', 'Seafood restaurant. Rated 4.7 on Google Maps (695 reviews).'),
  place('kusadasi-fine_dining-2', 'kusadasi', 'fine_dining', 'Saray Restaurant', 'Bozkurt Sk. No:25, Kuşadası, Türkiye', '튀르키예 요리 레스토랑. 구글 지도 평점 4.6(리뷰 822개).', 'Turkish restaurant. Rated 4.6 on Google Maps (822 reviews).'),
  place('kusadasi-fine_dining-3', 'kusadasi', 'fine_dining', 'Mezgit Restaurant', 'Turgut Özal Blv. 346. Sokak No:5A, Kuşadası, Türkiye', '레스토랑. 구글 지도 평점 4.5(리뷰 1724개).', 'Restaurant. Rated 4.5 on Google Maps (1724 reviews).'),
  place('kusadasi-fine_dining-4', 'kusadasi', 'fine_dining', 'Ladies Beach Restaurant Cafe & Bar', 'Kadınlar Denizi Cd. 47/B, Kuşadası, Türkiye', '레스토랑. 구글 지도 평점 4.8(리뷰 553개).', 'Restaurant. Rated 4.8 on Google Maps (553 reviews).'),
  place('kusadasi-fine_dining-5', 'kusadasi', 'fine_dining', 'Mood Beach Restaurant', 'Kadınlar Denizi Cd. No:55, Kuşadası, Türkiye', '레스토랑. 구글 지도 평점 4.8(리뷰 171개).', 'Restaurant. Rated 4.8 on Google Maps (171 reviews).'),
  place('kusadasi-bakery-1', 'kusadasi', 'bakery', 'Chimney House Kuşadası', 'Kemal Arıkan Sk. 15/AA, Kuşadası, Türkiye', '디저트 가게. 구글 지도 평점 4.8(리뷰 215개).', 'Dessert shop. Rated 4.8 on Google Maps (215 reviews).'),
  place('kusadasi-bakery-2', 'kusadasi', 'bakery', 'İstanköy Marina', 'Atatürk Blv. No:102, Kuşadası, Türkiye', '빵집. 구글 지도 평점 4.6(리뷰 98개).', 'Bakery. Rated 4.6 on Google Maps (98 reviews).'),
  place('kusadasi-bakery-3', 'kusadasi', 'bakery', 'Cakeland Kuşadası', 'Hüseyin Reis Sk., Kuşadası, Türkiye', '과자점. 구글 지도 평점 4.5(리뷰 165개).', 'Pastry shop. Rated 4.5 on Google Maps (165 reviews).'),
  place('kusadasi-bakery-4', 'kusadasi', 'bakery', 'Yörük Fırını', 'Candan Tarhan Blv. No:37, Kuşadası, Türkiye', '빵집. 구글 지도 평점 4.4(리뷰 308개).', 'Bakery. Rated 4.4 on Google Maps (308 reviews).'),
  place('kusadasi-cafe-1', 'kusadasi', 'cafe', 'The Roost Coffee Co.', 'Aslanlar Cd. No:15, Kuşadası, Türkiye', '카페. 구글 지도 평점 5.0(리뷰 100개).', 'Café. Rated 5.0 on Google Maps (100 reviews).'),
  place('kusadasi-cafe-2', 'kusadasi', 'cafe', 'The Geyik Kuşadası', 'Sevgi Sk. No:5/C, Kuşadası, Türkiye', '카페. 구글 지도 평점 4.9(리뷰 325개).', 'Café. Rated 4.9 on Google Maps (325 reviews).'),
  place('kusadasi-cafe-3', 'kusadasi', 'cafe', 'Public Art Kuşadası', 'Atatürk Blv. No:42 D:1A, Kuşadası, Türkiye', '카페. 구글 지도 평점 4.8(리뷰 248개).', 'Café. Rated 4.8 on Google Maps (248 reviews).'),
  place('kusadasi-cafe-4', 'kusadasi', 'cafe', 'Court Coffee Company', 'İstiklal Cd. No:7A, Kuşadası, Türkiye', '카페. 구글 지도 평점 4.7(리뷰 316개).', 'Café. Rated 4.7 on Google Maps (316 reviews).'),
  place('kusadasi-cafe-5', 'kusadasi', 'cafe', 'Deja Vu Cafe & Bar', 'Bahar Sk., Kuşadası, Türkiye', '카페. 구글 지도 평점 4.5(리뷰 102개).', 'Café. Rated 4.5 on Google Maps (102 reviews).'),

  // —— datca: restaurants, bakeries and cafés (2026-11-26) ——
  place('datca-fine_dining-1', 'datca', 'fine_dining', 'Datça Ocakbaşı', 'Rauf Balıkçı Sk. No:10, Datça, Türkiye', '케밥 식당. 구글 지도 평점 4.9(리뷰 280개).', 'Kebab restaurant. Rated 4.9 on Google Maps (280 reviews).'),
  place('datca-fine_dining-2', 'datca', 'fine_dining', 'Kavruk Datça', 'Rauf Balıkçı Sokak D:4C, Datça, Türkiye', '튀르키예 요리 레스토랑. 구글 지도 평점 4.9(리뷰 93개).', 'Turkish restaurant. Rated 4.9 on Google Maps (93 reviews).'),
  place('datca-fine_dining-3', 'datca', 'fine_dining', 'Ömer Usta Datça', 'Atatürk Cd. No:86 D:F, Datça, Türkiye', '튀르키예 요리 레스토랑. 구글 지도 평점 4.7(리뷰 1201개).', 'Turkish restaurant. Rated 4.7 on Google Maps (1201 reviews).'),
  place('datca-fine_dining-4', 'datca', 'fine_dining', 'Zeytin Dalı Datça', 'Buxerolles Sk. No:7/B, Datça, Türkiye', '튀르키예 요리 레스토랑. 구글 지도 평점 4.7(리뷰 226개).', 'Turkish restaurant. Rated 4.7 on Google Maps (226 reviews).'),
  place('datca-fine_dining-5', 'datca', 'fine_dining', 'Meyhane Datça', 'Ambarcı Cd. No:9, Datça, Türkiye', '메이하네(튀르키예식 선술집). 구글 지도 평점 4.6(리뷰 1029개).', 'Meyhane (Turkish tavern). Rated 4.6 on Google Maps (1029 reviews).'),
  place('datca-bakery-1', 'datca', 'bakery', 'Espadin Artisan Bakery', 'Kazım Yılmaz Cd. No:194/C, Datça, Türkiye', '빵집. 구글 지도 평점 4.9(리뷰 137개).', 'Bakery. Rated 4.9 on Google Maps (137 reviews).'),
  place('datca-bakery-2', 'datca', 'bakery', 'No:96 Patisserie & Coffee Datça', 'Atatürk Cd. No:88/D, Datça, Türkiye', '과자점. 구글 지도 평점 4.8(리뷰 124개).', 'Pastry shop. Rated 4.8 on Google Maps (124 reviews).'),
  place('datca-bakery-3', 'datca', 'bakery', 'Emir Bakery', 'Hasan Efendi Cd. No:1, Datça, Türkiye', '빵집. 구글 지도 평점 4.4(리뷰 159개).', 'Bakery. Rated 4.4 on Google Maps (159 reviews).'),
  place('datca-cafe-1', 'datca', 'cafe', 'SOSO Coffee House', 'Rauf Balıkçı Sk. 14/2, Datça, Türkiye', '카페. 구글 지도 평점 4.9(리뷰 431개).', 'Café. Rated 4.9 on Google Maps (431 reviews).'),
  place('datca-cafe-2', 'datca', 'cafe', 'Ayşe Datça', 'Şehit Ali Osman Çetiner Caddesi No:5, Datça, Türkiye', '카페. 구글 지도 평점 4.6(리뷰 117개).', 'Café. Rated 4.6 on Google Maps (117 reviews).'),
  place('datca-cafe-3', 'datca', 'cafe', 'Dalida Datça', 'Sabiha Gökçen Cad. No:8, Datça, Türkiye', '카페. 구글 지도 평점 4.5(리뷰 199개).', 'Café. Rated 4.5 on Google Maps (199 reviews).'),
  place('datca-cafe-4', 'datca', 'cafe', 'Cafe Inn', 'Kumluk Yolu 32/B, Datça, Türkiye', '카페. 구글 지도 평점 4.5(리뷰 1879개).', 'Café. Rated 4.5 on Google Maps (1879 reviews).'),

  // —— dalyan: restaurants, bakeries and cafés (2026-11-26) ——
  place('dalyan-fine_dining-1', 'dalyan', 'fine_dining', 'Ayaz Restaurant', 'Gülpınar Cd. 48/A, Dalyan, Türkiye', '케밥 식당. 구글 지도 평점 4.9(리뷰 183개).', 'Kebab restaurant. Rated 4.9 on Google Maps (183 reviews).'),
  place('dalyan-fine_dining-2', 'dalyan', 'fine_dining', 'Goodness is Good Dalyan', 'Davran Caddesi No:4A, Dalyan, Türkiye', '레스토랑. 구글 지도 평점 4.8(리뷰 153개).', 'Restaurant. Rated 4.8 on Google Maps (153 reviews).'),
  place('dalyan-fine_dining-3', 'dalyan', 'fine_dining', 'Dalyan Duble Meze Evi', 'Pazaryeri Sk. No:3/D, Dalyan, Türkiye', '메제(전채 요리) 식당. 구글 지도 평점 4.7(리뷰 374개).', 'Meze restaurant. Rated 4.7 on Google Maps (374 reviews).'),
  place('dalyan-fine_dining-4', 'dalyan', 'fine_dining', 'Lime Restaurant', 'Maraş Cd., Dalyan, Türkiye', '레스토랑. 구글 지도 평점 4.7(리뷰 188개).', 'Restaurant. Rated 4.7 on Google Maps (188 reviews).'),
  place('dalyan-fine_dining-5', 'dalyan', 'fine_dining', 'The Limon Tree Garden Restaurant', 'Maraş Cd. No:91, Dalyan, Türkiye', '레스토랑. 구글 지도 평점 4.6(리뷰 172개).', 'Restaurant. Rated 4.6 on Google Maps (172 reviews).'),
  place('dalyan-bakery-1', 'dalyan', 'bakery', 'Miela Bakehouse', 'Pazaryeri Sk. B Blok No:4/A, Dalyan, Türkiye', '빵집. 구글 지도 평점 4.9(리뷰 95개).', 'Bakery. Rated 4.9 on Google Maps (95 reviews).'),
  place('dalyan-bakery-2', 'dalyan', 'bakery', 'Demet Pastanesi', 'Maraş Cd. No:37, Dalyan, Türkiye', '과자점. 구글 지도 평점 4.3(리뷰 198개).', 'Pastry shop. Rated 4.3 on Google Maps (198 reviews).'),
  place('dalyan-cafe-1', 'dalyan', 'cafe', 'Bistro Cafe Seliş', 'Maraş Cd. 61/B, Dalyan, Türkiye', '카페. 구글 지도 평점 4.7(리뷰 299개).', 'Café. Rated 4.7 on Google Maps (299 reviews).'),
  place('dalyan-cafe-2', 'dalyan', 'cafe', 'Kaunos Kral Cafe', 'Dalyan, Türkiye', '카페. 구글 지도 평점 4.4(리뷰 1566개).', 'Café. Rated 4.4 on Google Maps (1566 reviews).'),

  // —— kalkan: restaurants, bakeries and cafés (2026-11-26) ——
  place('kalkan-fine_dining-1', 'kalkan', 'fine_dining', 'Blue Terrace Restaurant', 'Süleyman Yılmaz Cd. No:2, Kalkan, Türkiye', '레스토랑. 구글 지도 평점 4.8(리뷰 1000개).', 'Restaurant. Rated 4.8 on Google Maps (1000 reviews).'),
  place('kalkan-fine_dining-2', 'kalkan', 'fine_dining', 'Sade Terrace Restaurant', 'Hasan Altan Cd. No:7, Kalkan, Türkiye', '레스토랑. 구글 지도 평점 4.8(리뷰 234개).', 'Restaurant. Rated 4.8 on Google Maps (234 reviews).'),
  place('kalkan-fine_dining-3', 'kalkan', 'fine_dining', 'Panorama Restaurant', 'Hasan Altan Cd. No:31, Kalkan, Türkiye', '레스토랑. 구글 지도 평점 4.8(리뷰 179개).', 'Restaurant. Rated 4.8 on Google Maps (179 reviews).'),
  place('kalkan-fine_dining-4', 'kalkan', 'fine_dining', 'Sini Cafe & Restaurant', 'Mustafa Kocakaya Cd. No:25, Kalkan, Türkiye', '레스토랑. 구글 지도 평점 4.8(리뷰 587개).', 'Restaurant. Rated 4.8 on Google Maps (587 reviews).'),
  place('kalkan-fine_dining-5', 'kalkan', 'fine_dining', 'Rose Restaurant', 'Ortaokul Cd. No:5, Kalkan, Türkiye', '레스토랑. 구글 지도 평점 4.7(리뷰 478개).', 'Restaurant. Rated 4.7 on Google Maps (478 reviews).'),
  place('kalkan-bakery-1', 'kalkan', 'bakery', 'Gulbahar\'s Bakery', 'Cumhuriyet Cd. No:72, Kalkan, Türkiye', '빵집. 구글 지도 평점 5.0(리뷰 90개).', 'Bakery. Rated 5.0 on Google Maps (90 reviews).'),
  place('kalkan-cafe-1', 'kalkan', 'cafe', 'Olala Cafe Kalkan', 'Şehitler Cd. No:39/A, Kalkan, Türkiye', '카페. 구글 지도 평점 4.9(리뷰 214개).', 'Café. Rated 4.9 on Google Maps (214 reviews).'),
  place('kalkan-cafe-2', 'kalkan', 'cafe', 'House Kitchen and Bar', 'Akdeniz Cd., Kalkan, Türkiye', '카페. 구글 지도 평점 4.8(리뷰 197개).', 'Café. Rated 4.8 on Google Maps (197 reviews).'),
  place('kalkan-cafe-3', 'kalkan', 'cafe', 'Cafe Del Mar', 'Hasan Altan Cd. No:61, Kalkan, Türkiye', '카페. 구글 지도 평점 4.6(리뷰 149개).', 'Café. Rated 4.6 on Google Maps (149 reviews).'),

  // —— side: restaurants, bakeries and cafés (2026-11-26) ——
  place('side-fine_dining-1', 'side', 'fine_dining', 'Sky Safran Restaurant Bar', 'Sidem Sitesi No:15A, Side, Türkiye', '레스토랑. 구글 지도 평점 4.9(리뷰 2954개).', 'Restaurant. Rated 4.9 on Google Maps (2954 reviews).'),
  place('side-fine_dining-2', 'side', 'fine_dining', 'First Point', 'Yasemin Sokak No:80, Side, Türkiye', '레스토랑. 구글 지도 평점 4.9(리뷰 323개).', 'Restaurant. Rated 4.9 on Google Maps (323 reviews).'),
  place('side-fine_dining-3', 'side', 'fine_dining', 'Küçükoğlu Restaurant Side', 'Side Bulvarı No:53 D:B, Side, Türkiye', '레스토랑. 구글 지도 평점 4.7(리뷰 1611개).', 'Restaurant. Rated 4.7 on Google Maps (1611 reviews).'),
  place('side-fine_dining-4', 'side', 'fine_dining', 'İskele Balık Side', '606. Sk. No:2, Side, Türkiye', '해산물 레스토랑. 구글 지도 평점 4.7(리뷰 896개).', 'Seafood restaurant. Rated 4.7 on Google Maps (896 reviews).'),
  place('side-fine_dining-5', 'side', 'fine_dining', 'Via Restaurant Cafe & Bar', 'Kazım Karabekir Cd. No:55, Side, Türkiye', '레스토랑. 구글 지도 평점 4.6(리뷰 114개).', 'Restaurant. Rated 4.6 on Google Maps (114 reviews).'),
  place('side-bakery-1', 'side', 'bakery', 'Fika People', 'Turgut Reis Cd. No:18, Side, Türkiye', '과자점. 구글 지도 평점 4.5(리뷰 88개).', 'Pastry shop. Rated 4.5 on Google Maps (88 reviews).'),
  place('side-bakery-2', 'side', 'bakery', 'Simit Noktası Side', 'Atatürk Bulvarı No:122 Z/6, Side, Türkiye', '시미트(깨 고리빵) 빵집. 구글 지도 평점 4.5(리뷰 332개).', 'Simit (sesame bread ring) bakery. Rated 4.5 on Google Maps (332 reviews).'),
  place('side-cafe-1', 'side', 'cafe', 'Carre Caffe', 'Kazım Karabekir Cd. No:32, Side, Türkiye', '카페. 구글 지도 평점 4.8(리뷰 131개).', 'Café. Rated 4.8 on Google Maps (131 reviews).'),
  place('side-cafe-2', 'side', 'cafe', 'Gardenia Side Cafe & Restaurant', 'Mimar Sinan Cd. No:24, Side, Türkiye', '카페. 구글 지도 평점 4.7(리뷰 324개).', 'Café. Rated 4.7 on Google Maps (324 reviews).'),
  place('side-cafe-3', 'side', 'cafe', 'Apollonik Cafe', 'Nar Sk. No:35, Side, Türkiye', '카페. 구글 지도 평점 4.6(리뷰 1107개).', 'Café. Rated 4.6 on Google Maps (1107 reviews).'),

  // —— rize: restaurants, bakeries and cafés (2026-11-26) ——
  place('rize-fine_dining-1', 'rize', 'fine_dining', 'Fasuli Rize', 'Osman Karavin Cad., Rize, Türkiye', '튀르키예 요리 레스토랑. 구글 지도 평점 4.6(리뷰 4455개).', 'Turkish restaurant. Rated 4.6 on Google Maps (4455 reviews).'),
  place('rize-fine_dining-2', 'rize', 'fine_dining', 'Etli Keyf', 'Şht. Ömer Halisdemir Cd. No:8A, Rize, Türkiye', '케밥 식당. 구글 지도 평점 4.8(리뷰 231개).', 'Kebab restaurant. Rated 4.8 on Google Maps (231 reviews).'),
  place('rize-fine_dining-3', 'rize', 'fine_dining', 'Liman Lokantası', 'Osman Karavin Caddesi No:4 D:E, Rize, Türkiye', '로칸타(튀르키예 가정식 식당). 구글 지도 평점 4.3(리뷰 8620개).', 'Lokanta (Turkish home-cooking restaurant). Rated 4.3 on Google Maps (8620 reviews).'),
  place('rize-fine_dining-4', 'rize', 'fine_dining', 'Pizzabey', 'Osman Karavin Cad. No:8, Rize, Türkiye', '피자 식당. 구글 지도 평점 5.0(리뷰 198개).', 'Pizza restaurant. Rated 5.0 on Google Maps (198 reviews).'),
  place('rize-bakery-1', 'rize', 'bakery', 'Konak Pastaneleri', 'Osman Karavin Caddesi, Rize, Türkiye', '과자점. 구글 지도 평점 4.3(리뷰 450개).', 'Pastry shop. Rated 4.3 on Google Maps (450 reviews).'),
  place('rize-cafe-1', 'rize', 'cafe', 'Espressolab Rize Merkez', 'Armutlu Sk. No:1, Rize, Türkiye', '카페. 구글 지도 평점 4.7(리뷰 256개).', 'Café. Rated 4.7 on Google Maps (256 reviews).'),
  place('rize-cafe-2', 'rize', 'cafe', 'Haura Coffee Lounge', 'Tevfik İleri Cd., Çarşı AVM, Rize, Türkiye', '카페. 구글 지도 평점 4.5(리뷰 2112개).', 'Café. Rated 4.5 on Google Maps (2112 reviews).'),
  place('rize-cafe-3', 'rize', 'cafe', 'Coffee de Madrid Rize', 'Osman Karavin Cd., Çarşı AVM, Rize, Türkiye', '카페. 구글 지도 평점 4.4(리뷰 238개).', 'Café. Rated 4.4 on Google Maps (238 reviews).'),
  place('rize-cafe-4', 'rize', 'cafe', 'Canto Coffee', 'Cumhuriyet Cd., Rize, Türkiye', '카페. 구글 지도 평점 4.3(리뷰 359개).', 'Café. Rated 4.3 on Google Maps (359 reviews).'),

  // —— sinop: restaurants, bakeries and cafés (2026-11-26) ——
  place('sinop-fine_dining-1', 'sinop', 'fine_dining', 'Esra\'nın Mutfağı', 'Okullar Cd. No:21, Sinop, Türkiye', '튀르키예 요리 레스토랑. 구글 지도 평점 4.9(리뷰 638개).', 'Turkish restaurant. Rated 4.9 on Google Maps (638 reviews).'),
  place('sinop-fine_dining-2', 'sinop', 'fine_dining', 'Kotra Restoran', 'Dr. Ahmet Örs Cd. No:1A, Sinop, Türkiye', '레스토랑. 구글 지도 평점 4.8(리뷰 137개).', 'Restaurant. Rated 4.8 on Google Maps (137 reviews).'),
  place('sinop-fine_dining-3', 'sinop', 'fine_dining', 'Laço Balık ve Mantı', 'Ortayol Sk. No:10, Sinop, Türkiye', '해산물 레스토랑. 구글 지도 평점 4.8(리뷰 117개).', 'Seafood restaurant. Rated 4.8 on Google Maps (117 reviews).'),
  place('sinop-fine_dining-4', 'sinop', 'fine_dining', 'Annemin Mantısı', 'Okullar Cd. No:3/B, Sinop, Türkiye', '만트(튀르키예식 만두) 식당. 구글 지도 평점 4.8(리뷰 492개).', 'Mantı (Turkish dumpling) restaurant. Rated 4.8 on Google Maps (492 reviews).'),
  place('sinop-fine_dining-5', 'sinop', 'fine_dining', 'Tacomigos', 'Kaledibi Sk. No:3 D:A, Sinop, Türkiye', '멕시코 요리 식당. 구글 지도 평점 4.8(리뷰 357개).', 'Mexican restaurant. Rated 4.8 on Google Maps (357 reviews).'),
  place('sinop-bakery-1', 'sinop', 'bakery', 'Mathilda Croissant & Coffee', 'Gazi Cd. 35/1, Sinop, Türkiye', '빵집. 구글 지도 평점 4.8(리뷰 435개).', 'Bakery. Rated 4.8 on Google Maps (435 reviews).'),
  place('sinop-bakery-2', 'sinop', 'bakery', 'İstankol Unlu Mamülleri', 'Fatih Cd. No:50 D:B, Sinop, Türkiye', '빵집. 구글 지도 평점 4.4(리뷰 272개).', 'Bakery. Rated 4.4 on Google Maps (272 reviews).'),
  place('sinop-bakery-3', 'sinop', 'bakery', 'Kosk Pastanesi', 'Sakarya Cd. No:27, Sinop, Türkiye', '과자점. 구글 지도 평점 4.3(리뷰 1118개).', 'Pastry shop. Rated 4.3 on Google Maps (1118 reviews).'),
  place('sinop-bakery-4', 'sinop', 'bakery', 'Marry Lane Bakery - Coffee', 'Kurtuluş Cd. No:2, Sinop, Türkiye', '빵집. 구글 지도 평점 4.3(리뷰 83개).', 'Bakery. Rated 4.3 on Google Maps (83 reviews).'),
  place('sinop-cafe-1', 'sinop', 'cafe', 'Tusu Coffee Co.', 'Kurtuluş Cd. No:15, Sinop, Türkiye', '카페. 구글 지도 평점 4.9(리뷰 237개).', 'Café. Rated 4.9 on Google Maps (237 reviews).'),
  place('sinop-cafe-2', 'sinop', 'cafe', 'La Mer House Of Coffee', 'Çalıkuşu Sk. No:10, Sinop, Türkiye', '카페. 구글 지도 평점 4.8(리뷰 120개).', 'Café. Rated 4.8 on Google Maps (120 reviews).'),
  place('sinop-cafe-3', 'sinop', 'cafe', 'Bouche Coffee', 'Enver Bahadır Cd. No:15/A, Sinop, Türkiye', '카페. 구글 지도 평점 4.6(리뷰 202개).', 'Café. Rated 4.6 on Google Maps (202 reviews).'),
  place('sinop-cafe-4', 'sinop', 'cafe', 'Marks Coffee & Crafts', 'Anasu Sk. 6A, Sinop, Türkiye', '카페. 구글 지도 평점 4.6(리뷰 88개).', 'Café. Rated 4.6 on Google Maps (88 reviews).'),
  place('sinop-cafe-5', 'sinop', 'cafe', 'Tarihi Yalı Kahvesi', 'Kurtuluş Cd., Sinop, Türkiye', '카페. 구글 지도 평점 4.3(리뷰 1437개).', 'Café. Rated 4.3 on Google Maps (1437 reviews).'),

  // —— amasya: restaurants, bakeries and cafés (2026-11-26) ——
  place('amasya-fine_dining-1', 'amasya', 'fine_dining', 'Çorba Konağı Amasya', 'Şifre Sokak No:4, Hatuniye, Amasya, Türkiye', '수프 전문 식당. 구글 지도 평점 4.9(리뷰 1235개).', 'Soup restaurant. Rated 4.9 on Google Maps (1235 reviews).'),
  place('amasya-fine_dining-2', 'amasya', 'fine_dining', 'By Etçii', 'Elvan Çelebi Cad. 16/A, Amasya, Türkiye', '그릴 레스토랑. 구글 지도 평점 4.9(리뷰 1186개).', 'Grill restaurant. Rated 4.9 on Google Maps (1186 reviews).'),
  place('amasya-fine_dining-3', 'amasya', 'fine_dining', 'Meat Works Amasya', 'Kazım Karabekir Paşa Caddesi No:17/1-A, Amasya, Türkiye', '스테이크 하우스. 구글 지도 평점 4.8(리뷰 2265개).', 'Steakhouse. Rated 4.8 on Google Maps (2265 reviews).'),
  place('amasya-fine_dining-4', 'amasya', 'fine_dining', 'Küçükağa Restaurant', 'Zübeyde Hanım Cd. No:25, Amasya, Türkiye', '레스토랑. 구글 지도 평점 4.7(리뷰 7585개).', 'Restaurant. Rated 4.7 on Google Maps (7585 reviews).'),
  place('amasya-fine_dining-5', 'amasya', 'fine_dining', 'Amasya Kocabey Restaurant', 'Necip Fazıl Cd. No:33/A, Amasya, Türkiye', '레스토랑. 구글 지도 평점 4.6(리뷰 247개).', 'Restaurant. Rated 4.6 on Google Maps (247 reviews).'),
  place('amasya-bakery-1', 'amasya', 'bakery', 'Amasya Çörekçisi', 'Kolaylı Hüseyin Sk. No:6/B, Amasya, Türkiye', '최렉(튀르키예식 빵) 가게. 구글 지도 평점 4.9(리뷰 298개).', 'Çörek (Turkish bun) bakery. Rated 4.9 on Google Maps (298 reviews).'),
  place('amasya-bakery-2', 'amasya', 'bakery', 'Pasta Sanatı Mycakeshop', 'Muhsin Yazıcıoğlu Cd. No:22, Amasya, Türkiye', '케이크 가게. 구글 지도 평점 4.8(리뷰 1046개).', 'Cake shop. Rated 4.8 on Google Maps (1046 reviews).'),
  place('amasya-bakery-3', 'amasya', 'bakery', 'Taş Fırın', 'Zübeyde Hanım Cd. No:82, Amasya, Türkiye', '빵집. 구글 지도 평점 4.4(리뷰 197개).', 'Bakery. Rated 4.4 on Google Maps (197 reviews).'),
  place('amasya-bakery-4', 'amasya', 'bakery', 'Öz Yeşilırmak Simit Fırını', 'Zübeyde Hanım Cd. No:27, Amasya, Türkiye', '시미트(깨 고리빵) 빵집. 구글 지도 평점 4.4(리뷰 84개).', 'Simit (sesame bread ring) bakery. Rated 4.4 on Google Maps (84 reviews).'),
  place('amasya-cafe-1', 'amasya', 'cafe', 'Wone Coffee and More Amasya', 'Elvan Çelebi Cad. No:18, Amasya, Türkiye', '카페. 구글 지도 평점 4.7(리뷰 133개).', 'Café. Rated 4.7 on Google Maps (133 reviews).'),
  place('amasya-cafe-2', 'amasya', 'cafe', 'Rafine Coffee', 'Kemal Nehrozoğlu Cd. No:47A, Amasya, Türkiye', '카페. 구글 지도 평점 4.7(리뷰 98개).', 'Café. Rated 4.7 on Google Maps (98 reviews).'),
  place('amasya-cafe-3', 'amasya', 'cafe', 'Cafe On Amasya', 'Şifre Sk. No:4, Amasya, Türkiye', '카페. 구글 지도 평점 4.7(리뷰 209개).', 'Café. Rated 4.7 on Google Maps (209 reviews).'),
  place('amasya-cafe-4', 'amasya', 'cafe', 'Midtown Coffee Co.', 'Ziya Paşa Blv. No:59/4, Amasya, Türkiye', '카페. 구글 지도 평점 4.5(리뷰 126개).', 'Café. Rated 4.5 on Google Maps (126 reviews).'),

  // —— kayseri: restaurants, bakeries and cafés (2026-11-26) ——
  place('kayseri-fine_dining-1', 'kayseri', 'fine_dining', 'Tarihi Kayseri Kebapçısı', 'Kalpaklıoğlu Cd. 1/D, Kayseri, Türkiye', '케밥 식당. 구글 지도 평점 4.7(리뷰 867개).', 'Kebab restaurant. Rated 4.7 on Google Maps (867 reviews).'),
  place('kayseri-fine_dining-2', 'kayseri', 'fine_dining', 'Chef Remzi Restaurant', 'Farabi Cd. No:50/A, Kayseri, Türkiye', '레스토랑. 구글 지도 평점 4.7(리뷰 2235개).', 'Restaurant. Rated 4.7 on Google Maps (2235 reviews).'),
  place('kayseri-fine_dining-3', 'kayseri', 'fine_dining', 'Veranda Restaurant', 'Kenarcık Sk. No:2, Kayseri, Türkiye', '레스토랑. 구글 지도 평점 5.0(리뷰 108개).', 'Restaurant. Rated 5.0 on Google Maps (108 reviews).'),
  place('kayseri-fine_dining-4', 'kayseri', 'fine_dining', 'UstaŞef Et Lokantası', 'Billur Bağları Cd. No:1/B, Kayseri, Türkiye', '그릴 레스토랑. 구글 지도 평점 4.4(리뷰 868개).', 'Grill restaurant. Rated 4.4 on Google Maps (868 reviews).'),
  place('kayseri-fine_dining-5', 'kayseri', 'fine_dining', 'The Hunger Kayseri', 'Bayram Sk. No:12, Kayseri, Türkiye', '레스토랑. 구글 지도 평점 4.4(리뷰 2118개).', 'Restaurant. Rated 4.4 on Google Maps (2118 reviews).'),
  place('kayseri-bakery-1', 'kayseri', 'bakery', 'Naide Patisserie & Bakery', 'Komando Cd. No:57, Kayseri, Türkiye', '과자점. 구글 지도 평점 4.7(리뷰 1950개).', 'Pastry shop. Rated 4.7 on Google Maps (1950 reviews).'),
  place('kayseri-bakery-2', 'kayseri', 'bakery', 'Kruvasan Fabrikası', 'Emek Sk. No:25/B, Kayseri, Türkiye', '빵집. 구글 지도 평점 4.5(리뷰 1802개).', 'Bakery. Rated 4.5 on Google Maps (1802 reviews).'),
  place('kayseri-bakery-3', 'kayseri', 'bakery', 'Nan Fırın', 'Yahya Kemal Cd. 13/A, Kayseri, Türkiye', '빵집. 구글 지도 평점 4.4(리뷰 313개).', 'Bakery. Rated 4.4 on Google Maps (313 reviews).'),
  place('kayseri-cafe-1', 'kayseri', 'cafe', 'Coffee de Madrid Kayseri', '15 Temmuz Cd. 19/B, Kayseri, Türkiye', '카페. 구글 지도 평점 4.9(리뷰 103개).', 'Café. Rated 4.9 on Google Maps (103 reviews).'),
  place('kayseri-cafe-2', 'kayseri', 'cafe', 'LUX', 'Hacı Cemil Cd. 1/A, Kayseri, Türkiye', '카페. 구글 지도 평점 4.5(리뷰 464개).', 'Café. Rated 4.5 on Google Maps (464 reviews).'),
  place('kayseri-cafe-3', 'kayseri', 'cafe', 'Renn Coffee Erciyesevler', 'Levent Çetinkaya Sokak No:6/B, Kayseri, Türkiye', '카페. 구글 지도 평점 4.3(리뷰 421개).', 'Café. Rated 4.3 on Google Maps (421 reviews).'),
  place('kayseri-cafe-4', 'kayseri', 'cafe', 'Anatolia Cafe Kayseri', 'Mehmet Özhaseki Bulvarı No:27, Kayseri, Türkiye', '카페. 구글 지도 평점 4.3(리뷰 382개).', 'Café. Rated 4.3 on Google Maps (382 reviews).'),

  // —— eskisehir: restaurants, bakeries and cafés (2026-11-26) ——
  place('eskisehir-fine_dining-1', 'eskisehir', 'fine_dining', 'Köşk Balaban', 'Beyler Sk. No:4, Eskişehir, Türkiye', '쾨프테(튀르키예식 미트볼) 식당. 구글 지도 평점 4.8(리뷰 481개).', 'Köfte (Turkish meatball) restaurant. Rated 4.8 on Google Maps (481 reviews).'),
  place('eskisehir-fine_dining-2', 'eskisehir', 'fine_dining', 'Etevim Steakhouse', 'İsmet İnönü-1 Blv. No:135, Eskişehir, Türkiye', '스테이크 하우스. 구글 지도 평점 4.6(리뷰 5445개).', 'Steakhouse. Rated 4.6 on Google Maps (5445 reviews).'),
  place('eskisehir-fine_dining-3', 'eskisehir', 'fine_dining', 'Teho Restaurant', 'Vural Sk. No:9/1, Eskişehir, Türkiye', '이탈리아 요리 레스토랑. 구글 지도 평점 4.5(리뷰 1010개).', 'Italian restaurant. Rated 4.5 on Google Maps (1010 reviews).'),
  place('eskisehir-fine_dining-4', 'eskisehir', 'fine_dining', 'Mutfak Sanatları Restaurant Brasserie Cafe', 'Depboy Sk. 15A, Eskişehir, Türkiye', '튀르키예 요리 레스토랑. 구글 지도 평점 4.5(리뷰 333개).', 'Turkish restaurant. Rated 4.5 on Google Maps (333 reviews).'),
  place('eskisehir-bakery-1', 'eskisehir', 'bakery', 'Ham Bakery', 'Atatürk Blv. No:209 D:1B, Eskişehir, Türkiye', '과자점. 구글 지도 평점 4.9(리뷰 145개).', 'Pastry shop. Rated 4.9 on Google Maps (145 reviews).'),
  place('eskisehir-bakery-2', 'eskisehir', 'bakery', 'İTA Artisan Bakery', 'Behiç Erkin Caddesi No:4/D, Eskişehir, Türkiye', '빵집. 구글 지도 평점 4.8(리뷰 196개).', 'Bakery. Rated 4.8 on Google Maps (196 reviews).'),
  place('eskisehir-bakery-3', 'eskisehir', 'bakery', 'Fournil Bakery Batıkent', 'Org. Kıvrıkoğlu Cd. No:71A, Eskişehir, Türkiye', '과자점. 구글 지도 평점 4.4(리뷰 555개).', 'Pastry shop. Rated 4.4 on Google Maps (555 reviews).'),
  place('eskisehir-bakery-4', 'eskisehir', 'bakery', 'Grande Maia Bakery & Pastry', 'Atatürk Blv. No:223, Eskişehir, Türkiye', '빵집. 구글 지도 평점 4.3(리뷰 360개).', 'Bakery. Rated 4.3 on Google Maps (360 reviews).'),
  place('eskisehir-cafe-1', 'eskisehir', 'cafe', 'Kokopelli Coffee Co.', 'Sökmen Sk. No:7/B, Eskişehir, Türkiye', '카페. 구글 지도 평점 4.9(리뷰 1056개).', 'Café. Rated 4.9 on Google Maps (1056 reviews).'),
  place('eskisehir-cafe-2', 'eskisehir', 'cafe', 'Dead Poets Chocolate & Coffee', 'Yalaman Sk. 11/A, Eskişehir, Türkiye', '카페. 구글 지도 평점 4.8(리뷰 420개).', 'Café. Rated 4.8 on Google Maps (420 reviews).'),
  place('eskisehir-cafe-3', 'eskisehir', 'cafe', 'Cotta Coffee', 'İşbulma Sokak No:28, Eskişehir, Türkiye', '카페. 구글 지도 평점 4.8(리뷰 390개).', 'Café. Rated 4.8 on Google Maps (390 reviews).'),
  place('eskisehir-cafe-4', 'eskisehir', 'cafe', 'Aura Cafe & Patisserie', 'Başarılı Sk. No:17/A, Eskişehir, Türkiye', '카페. 구글 지도 평점 4.7(리뷰 293개).', 'Café. Rated 4.7 on Google Maps (293 reviews).'),
  place('eskisehir-cafe-5', 'eskisehir', 'cafe', 'Monk Coffee & Books', 'Yeşiltepe Sk. 14/A, Eskişehir, Türkiye', '카페. 구글 지도 평점 4.6(리뷰 569개).', 'Café. Rated 4.6 on Google Maps (569 reviews).'),

  // —— van: restaurants, bakeries and cafés (2026-11-26) ——
  place('van-fine_dining-1', 'van', 'fine_dining', 'Mahar-et Grill Restaurant', 'Türkoğlu 1. Sk. No:10/E, Van, Türkiye', '그릴 레스토랑. 구글 지도 평점 4.8(리뷰 486개).', 'Grill restaurant. Rated 4.8 on Google Maps (486 reviews).'),
  place('van-fine_dining-2', 'van', 'fine_dining', 'Adem Şef Van\'ın Kültür Sofrası', 'İpekyolu Bulvarı No:37/A, Van, Türkiye', '튀르키예 요리 레스토랑. 구글 지도 평점 4.7(리뷰 956개).', 'Turkish restaurant. Rated 4.7 on Google Maps (956 reviews).'),
  place('van-fine_dining-3', 'van', 'fine_dining', 'Kuşhane', 'Gölbaşı Sk., Van, Türkiye', '그릴 레스토랑. 구글 지도 평점 4.7(리뷰 1368개).', 'Grill restaurant. Rated 4.7 on Google Maps (1368 reviews).'),
  place('van-fine_dining-4', 'van', 'fine_dining', 'Mezzo Italy', 'Cambazoğlu 2. Sk. No:1, Van, Türkiye', '이탈리아 요리 레스토랑. 구글 지도 평점 4.7(리뷰 554개).', 'Italian restaurant. Rated 4.7 on Google Maps (554 reviews).'),
  place('van-fine_dining-5', 'van', 'fine_dining', 'Urartu Han Van Kahvaltısı ve Yöresel Yemekler', 'Meçhul Asker Sk. No:11, Van, Türkiye', '튀르키예식 아침 식당. 구글 지도 평점 4.6(리뷰 6538개).', 'Turkish breakfast restaurant. Rated 4.6 on Google Maps (6538 reviews).'),
  place('van-bakery-1', 'van', 'bakery', 'Özpulatlar Unlu Mamülleri', 'Van Ferit Melen Havaalanı, Van, Türkiye', '빵집. 구글 지도 평점 4.6(리뷰 103개).', 'Bakery. Rated 4.6 on Google Maps (103 reviews).'),
  place('van-cafe-1', 'van', 'cafe', 'Blain Coffee Co.', 'Eski Cezaevi Cd. No:64B, Van, Türkiye', '카페. 구글 지도 평점 4.8(리뷰 177개).', 'Café. Rated 4.8 on Google Maps (177 reviews).'),
  place('van-cafe-2', 'van', 'cafe', 'June Coffee Brewed 3rd', 'Kültür Sarayı Sokak, Van, Türkiye', '카페. 구글 지도 평점 4.8(리뷰 173개).', 'Café. Rated 4.8 on Google Maps (173 reviews).'),
  place('van-cafe-3', 'van', 'cafe', 'Mekan Cafe', 'Cumhuriyet Cd. No:31, Van, Türkiye', '카페. 구글 지도 평점 4.7(리뷰 193개).', 'Café. Rated 4.7 on Google Maps (193 reviews).'),
  place('van-cafe-4', 'van', 'cafe', 'NAV Coffee & Tea', 'İki Nisan Blv. No:54, Van, Türkiye', '카페. 구글 지도 평점 4.3(리뷰 364개).', 'Café. Rated 4.3 on Google Maps (364 reviews).'),

  // —— nemrut: restaurants, bakeries and cafés (2026-11-26) ——
  place('nemrut-fine_dining-1', 'nemrut', 'fine_dining', 'Damak Yemekçilik', '6016. Sk. No:32, Kâhta, Türkiye', '카흐타에 있는 로칸타(튀르키예 가정식 식당). 구글 지도 평점 4.9(리뷰 141개).', 'Lokanta (Turkish home-cooking restaurant) in Kâhta. Rated 4.9 on Google Maps (141 reviews).'),
  place('nemrut-fine_dining-2', 'nemrut', 'fine_dining', 'Kâhta Ustam Çiğköfte', 'Mustafa Kemal Cd. No:138, Kâhta, Türkiye', '카흐타에 있는 치으쾨프테 식당. 구글 지도 평점 4.9(리뷰 229개).', 'Çiğ köfte restaurant in Kâhta. Rated 4.9 on Google Maps (229 reviews).'),
  place('nemrut-fine_dining-3', 'nemrut', 'fine_dining', 'Kasabım Ömer', 'Filistin Cd., Kâhta, Türkiye', '카흐타에 있는 그릴 레스토랑. 구글 지도 평점 4.7(리뷰 842개).', 'Grill restaurant in Kâhta. Rated 4.7 on Google Maps (842 reviews).'),
  place('nemrut-fine_dining-4', 'nemrut', 'fine_dining', 'Kahta Mangal', 'Adeviye Bulvarı No:47, Kâhta, Türkiye', '카흐타에 있는 그릴 레스토랑. 구글 지도 평점 4.7(리뷰 92개).', 'Grill restaurant in Kâhta. Rated 4.7 on Google Maps (92 reviews).'),
  place('nemrut-fine_dining-5', 'nemrut', 'fine_dining', 'Etika Et Restoran', '5017 Sokak No:8, Kâhta, Türkiye', '카흐타에 있는 그릴 레스토랑. 구글 지도 평점 4.6(리뷰 143개).', 'Grill restaurant in Kâhta. Rated 4.6 on Google Maps (143 reviews).'),
  place('nemrut-bakery-1', 'nemrut', 'bakery', 'Keyif Baklava Kahta', 'Hastane Cd. No:34 D:E, Kâhta, Türkiye', '카흐타에 있는 바클라바 가게. 구글 지도 평점 5.0(리뷰 120개).', 'Baklava shop in Kâhta. Rated 5.0 on Google Maps (120 reviews).'),
  place('nemrut-bakery-2', 'nemrut', 'bakery', 'Kahta Divan Pastanesi', 'Mustafa Kemal Cd. No:140, Kâhta, Türkiye', '카흐타에 있는 과자점. 구글 지도 평점 4.3(리뷰 97개).', 'Pastry shop in Kâhta. Rated 4.3 on Google Maps (97 reviews).'),
]
