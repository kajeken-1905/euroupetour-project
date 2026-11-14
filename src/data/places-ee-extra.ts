import { place } from './placeFactory'
import type { Place } from '../types'

export const placesEEExtra: Place[] = [
  // —— tallinn ——
  place('tallinn-fine_dining-1', 'tallinn', 'fine_dining', 'NOA', 'Ranna tee 3, Tallinn', '피리타 해안의 레스토랑. 바다가 보이는 큰 창과 테라스가 있고 미쉐린 가이드에 실려 있습니다.', 'Restaurant on the Pirita coast with big sea-facing windows and a terrace, listed in the Michelin Guide.', { image: '/places/tallinn-fine_dining-1.jpg' }),
  place('tallinn-fine_dining-2', 'tallinn', 'fine_dining', 'Restaurant Rataskaevu 16', 'Rataskaevu tn 16, Tallinn', '구시가의 에스토니아 요리 레스토랑. 직접 구운 빵이 있고 예약하는 편이 좋습니다.', 'Old Town restaurant serving Estonian food with bread baked in-house; booking advised.'),
  place('tallinn-fine_dining-3', 'tallinn', 'fine_dining', 'KOGU Resto', 'Võrgu tn 6, 10415 Tallinn', '칼라란나 지구 옛 통조림 공장 건물의 레스토랑. 바다가 보이는 테라스가 있습니다.', 'Restaurant in a former canning factory in Kalaranna with a sea-view terrace.'),
  place('tallinn-fine_dining-4', 'tallinn', 'fine_dining', 'Restaurant Tchaikovsky', 'Vene tn 9, Tallinn', '텔레그라프 호텔 안의 레스토랑. 프랑스식 바탕에 러시아 요리를 더하고 유리 지붕이 있습니다.', 'Restaurant in the Hotel Telegraaf with French-based Russian cooking under a glass roof.'),
  place('tallinn-fine_dining-5', 'tallinn', 'fine_dining', 'Farm', 'Müürivahe 27b, Tallinn', '구시가의 에스토니아 요리 레스토랑. 전통 요리를 현대적으로 냅니다.', 'Old Town restaurant giving traditional Estonian food a modern treatment.', { image: '/places/tallinn-fine_dining-5.jpg' }),
  place('tallinn-bakery-1', 'tallinn', 'bakery', 'RØST Bakery', 'Rotermanni tn 14, Tallinn', '로테르만 지구 옛 제분소 건물의 사워도우 빵집. 카다멈 번이 있고 일요일은 쉽니다.', 'Sourdough bakery in a former mill building in the Rotermann Quarter, with cardamom buns; closed Sundays.'),
  place('tallinn-bakery-2', 'tallinn', 'bakery', 'PullaBakery', 'Voorimehe 7, Tallinn', '시나몬·카다멈 번과 포카치아를 굽는 작은 빵집.', 'Small bakery with cinnamon and cardamom buns and focaccia.'),
  place('tallinn-bakery-4', 'tallinn', 'bakery', 'Bekker Pagariäri', 'Kopli tn 27, 10412 Tallinn', '코플리 거리의 빵집 겸 카페. 머랭 케이크·에클레어·카다멈 빵과 비건·글루텐 프리 메뉴가 있습니다.', 'Bakery café on Kopli street with meringue cakes, éclairs, cardamom buns and vegan and gluten-free options.'),
  place('tallinn-cafe-1', 'tallinn', 'cafe', 'The Brick Coffee Roastery', 'Telliskivi 60M, 10412 Tallinn', '텔리스키비 창작 지구의 커피 로스터리 겸 브루 바. 직접 볶은 싱글 오리진 커피를 냅니다.', 'Coffee roastery and brew bar in the Telliskivi creative quarter serving its own single-origin coffee.', { image: '/places/tallinn-cafe-1.jpg' }),
  place('tallinn-cafe-2', 'tallinn', 'cafe', 'Fika Cafe', 'Telliskivi 60a-1, 10412 Tallinn', '텔리스키비의 카페. 스페셜티 커피와 카다멈 롤, 사워도우 샌드위치가 있습니다.', 'Telliskivi café with specialty coffee, cardamom rolls and sourdough sandwiches.'),
  place('tallinn-cafe-3', 'tallinn', 'cafe', 'Cafe Maiasmokk', 'Pikk tn 16, Tallinn', '1864년부터 같은 자리에서 영업한 구시가의 카페. 옆에 마지판 방이 있습니다.', 'Old Town café on the same site since 1864, with a marzipan room next door.', { image: '/places/tallinn-cafe-3.jpg' }),

  // —— tartu ——
  place('tartu-fine_dining-2', 'tartu', 'fine_dining', 'Restoran Hõlm', 'Ülikooli tn 14, 51003 Tartu', '리디아 호텔 안의 레스토랑. 1920년대 요리책 레시피를 바탕으로 한 요리를 내고 미쉐린 가이드에 실려 있습니다.', 'Restaurant in the Hotel Lydia cooking from a 1920s recipe collection, listed in the Michelin Guide.'),
  place('tartu-fine_dining-3', 'tartu', 'fine_dining', 'Chez Andre', 'Küütri tn 3, Tartu', '프랑스 요리를 내는 타르투의 레스토랑.', 'French restaurant in Tartu.'),
  place('tartu-bakery-2', 'tartu', 'bakery', 'Cake Shop Mandel', 'Veski tn 5a, 51005 Tartu', '토메매기 언덕의 케이크 가게 겸 카페. 케이크와 페이스트리가 있습니다.', 'Cake shop and café on Toome Hill with cakes and pastries.'),
  place('tartu-cafe-2', 'tartu', 'cafe', 'Werner Café', 'Ülikooli tn 11, Tartu', '1895년 문을 연 타르투의 카페. 빈풍 케이크가 있고 2층은 레스토랑입니다.', 'Tartu café opened in 1895, with Viennese-style cakes and a restaurant upstairs.'),
  place('tartu-cafe-3', 'tartu', 'cafe', 'Karlova Kohv', 'Tähe tn 63, Tartu', '카를로바 지구의 커피 로스터리 겸 카페. 월요일은 쉽니다.', 'Coffee roastery and café in the Karlova district; closed Mondays.'),

  // —— parnu ——
  place('parnu-fine_dining-1', 'parnu', 'fine_dining', 'Noot Restaurant', 'A. H. Tammsaare pst 4a, 80010 Pärnu', '에스토니아 리조트 호텔 안의 레스토랑. 에스토니아 요리를 현대적으로 냅니다.', 'Restaurant in the Estonia Resort Hotel serving modern Estonian cooking.'),
  place('parnu-fine_dining-2', 'parnu', 'fine_dining', 'Supelsaksad Pärnu', 'Nikolai tn 32, 80014 Pärnu', '약 150년 된 목조 주택의 카페 레스토랑. 화려한 실내와 수프·샐러드·차가 있습니다.', 'Café-restaurant in a roughly 150-year-old log house with a colourful interior, soups, salads and tea.'),
  place('parnu-fine_dining-3', 'parnu', 'fine_dining', 'Mon Ami', 'Kuninga tn 11, 80011 Pärnu', '구시가 프로스트 호텔 1층의 레스토랑. 벽난로가 있고 저녁에 엽니다.', 'Restaurant on the ground floor of the Frost boutique hotel in the old town, with a fireplace; evenings.'),

  place('parnu-bakery-1', 'parnu', 'bakery', 'Pärnamäed bakery and café', 'Reiu küla, Häädemeeste vald, 86508 Pärnu maakond', '패르누 시내에서 남쪽으로 13km, 레이우 강변의 빵집 겸 카페. 강이 보이는 여름 테라스가 있습니다.', 'Bakery café on the Reiu river, 13 km south of Pärnu, with a summer terrace over the river.'),
  place('parnu-bakery-2', 'parnu', 'bakery', 'Leivakas - Pagaritöökoda / Kiviahjupitsa', 'Lai tn 10/3, 80010 Pärnu', '패르누 강변 옛 공장 지구의 빵집 겸 카페. 장작 화덕 피자도 굽습니다.', 'Bakery café in a former industrial quarter on the Pärnu river, also baking wood-fired pizza.'),
  place('parnu-cafe-2', 'parnu', 'cafe', 'Kohvila', 'Lai tn 10/3, 80010 Pärnu', '강변의 커피·와인 카페. 원두와 내추럴 와인이 자주 바뀝니다. 월요일은 쉽니다.', 'Riverside coffee and wine café with rotating beans and natural wines; closed Mondays.'),

  // —— rakvere: restaurants, bakeries and cafés (2026-11-14) ——
  place('rakvere-fine_dining-1', 'rakvere', 'fine_dining', 'Bonzai', 'Niine tn 4, Rakvere', '라크베레의 아시아 요리 식당. 구글 지도 평점 4.9.', 'Asian restaurant in Rakvere. Rated 4.9 on Google Maps.'),
  place('rakvere-fine_dining-2', 'rakvere', 'fine_dining', 'Sarvik', 'Tallinna tn 8, Rakvere', '라크베레의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Rakvere. Rated 4.5 on Google Maps.'),
  place('rakvere-fine_dining-3', 'rakvere', 'fine_dining', 'Rohuaia Kohvik', 'Rohuaia tn 13, Rakvere', '라크베레의 카페 겸 식당. 구글 지도 평점 4.6.', 'Café restaurant in Rakvere. Rated 4.6 on Google Maps.'),
  place('rakvere-fine_dining-4', 'rakvere', 'fine_dining', 'Ciao Bella pitsa', 'Tallinna tn 1, Rakvere', '라크베레의 피자 가게. 구글 지도 평점 4.9.', 'Pizzeria in Rakvere. Rated 4.9 on Google Maps.'),
  place('rakvere-fine_dining-5', 'rakvere', 'fine_dining', 'Berlin\'s Tavern', 'Lai 15, Rakvere', '라크베레의 펍 겸 식당. 구글 지도 평점 4.5.', 'Pub restaurant in Rakvere. Rated 4.5 on Google Maps.'),
  place('rakvere-bakery-1', 'rakvere', 'bakery', 'Päts sahver', 'Jaama pst 15, Rakvere', '라크베레의 빵집. 구글 지도 평점 4.8.', 'Bakery in Rakvere. Rated 4.8 on Google Maps.'),
  place('rakvere-bakery-2', 'rakvere', 'bakery', 'Pihlaka', 'Parkali tn 7, Rakvere', '라크베레의 제과점. 구글 지도 평점 4.6.', 'Pâtisserie in Rakvere. Rated 4.6 on Google Maps.'),
  place('rakvere-cafe-1', 'rakvere', 'cafe', 'Art Cafe', 'Lai 13, Rakvere', '라크베레의 카페. 구글 지도 평점 4.5.', 'Café in Rakvere. Rated 4.5 on Google Maps.'),
  place('rakvere-cafe-2', 'rakvere', 'cafe', 'Rakvere Teatrikohvik', 'F. R. Kreutzwaldi tn 2, Rakvere', '라크베레의 카페. 구글 지도 평점 4.6.', 'Café in Rakvere. Rated 4.6 on Google Maps.'),

  // —— narva: restaurants, bakeries and cafés (2026-11-14) ——
  place('narva-fine_dining-1', 'narva', 'fine_dining', 'Franzia', 'Koidu tn 10, Narva', '나르바의 레스토랑. 구글 지도 평점 4.6.', 'Restaurant in Narva. Rated 4.6 on Google Maps.'),
  place('narva-fine_dining-2', 'narva', 'fine_dining', 'Khachapuri Georgian Cafe', 'Paul Kerese tn 5, Narva', '나르바의 조지아 요리 식당. 구글 지도 평점 4.5.', 'Georgian restaurant in Narva. Rated 4.5 on Google Maps.'),
  place('narva-fine_dining-3', 'narva', 'fine_dining', 'Monk Narva Astri', 'Tallinna mnt 41, Narva', '나르바의 아시아 요리 식당. 구글 지도 평점 4.3.', 'Asian restaurant in Narva. Rated 4.3 on Google Maps.'),
  place('narva-bakery-1', 'narva', 'bakery', 'Oven cafe', 'Paul Kerese tn 5, Narva', '나르바의 빵집 겸 카페. 구글 지도 평점 4.8.', 'Bakery and café in Narva. Rated 4.8 on Google Maps.'),
  place('narva-cafe-1', 'narva', 'cafe', 'Maius', 'Energia tn 7, Narva', '나르바의 에스프레소 바. 구글 지도 평점 4.5.', 'Espresso bar in Narva. Rated 4.5 on Google Maps.'),
  place('narva-cafe-2', 'narva', 'cafe', 'Kohvik Muna', 'Raekoja plats 2, Narva', '나르바의 카페. 구글 지도 평점 4.5.', 'Café in Narva. Rated 4.5 on Google Maps.'),
  place('narva-cafe-3', 'narva', 'cafe', 'Bublik CAFÉ', 'A. Puškini tn 13, Narva', '나르바의 카페. 구글 지도 평점 4.6.', 'Café in Narva. Rated 4.6 on Google Maps.'),
  place('narva-cafe-4', 'narva', 'cafe', 'Valge Kõrvits', 'Lavretsovi tn 8, Narva', '나르바의 카페. 구글 지도 평점 4.4.', 'Café in Narva. Rated 4.4 on Google Maps.'),

  // —— viljandi: restaurants, bakeries and cafés (2026-11-14) ——
  place('viljandi-fine_dining-1', 'viljandi', 'fine_dining', 'Fellin', 'Kauba 11, Viljandi', '빌랸디의 미쉐린 빕 구르망 식당(에스토니아 전통 요리)입니다.', 'MICHELIN Bib Gourmand restaurant serving traditional Estonian food in Viljandi.', { michelin: 'bib' }),
  place('viljandi-fine_dining-2', 'viljandi', 'fine_dining', 'koduKOHVIK', 'Tartu tn 1, Viljandi', '빌랸디의 카페 겸 식당. 구글 지도 평점 4.7.', 'Café restaurant in Viljandi. Rated 4.7 on Google Maps.'),
  place('viljandi-fine_dining-3', 'viljandi', 'fine_dining', 'Bodega Veiniresto', 'Lossi tn 15, Viljandi', '빌랸디의 와인 바 겸 식당. 구글 지도 평점 4.8.', 'Wine bar and restaurant in Viljandi. Rated 4.8 on Google Maps.'),
  place('viljandi-fine_dining-4', 'viljandi', 'fine_dining', 'Armeenia Köök Soso Juures', 'Posti tn 6a, Viljandi', '빌랸디의 아르메니아 요리 식당. 구글 지도 평점 4.6.', 'Armenian restaurant in Viljandi. Rated 4.6 on Google Maps.'),
  place('viljandi-fine_dining-5', 'viljandi', 'fine_dining', 'Restaurant Ormisson', 'Johan Laidoneri plats 8, Viljandi', '빌랸디의 레스토랑. 구글 지도 평점 4.5.', 'Restaurant in Viljandi. Rated 4.5 on Google Maps.'),
  place('viljandi-bakery-1', 'viljandi', 'bakery', 'Kivi Pagar', 'C. R. Jakobsoni tn 7, Viljandi', '빌랸디의 빵집. 구글 지도 평점 4.5.', 'Bakery in Viljandi. Rated 4.5 on Google Maps.'),
  place('viljandi-bakery-2', 'viljandi', 'bakery', 'Magusatuba', 'Tallinna tn 3, Viljandi', '빌랸디의 제과점. 구글 지도 평점 4.8.', 'Pâtisserie in Viljandi. Rated 4.8 on Google Maps.'),
  place('viljandi-cafe-1', 'viljandi', 'cafe', 'Cafe Viljandi', 'Lossi tn 31, Viljandi', '빌랸디의 카페. 구글 지도 평점 4.4.', 'Café in Viljandi. Rated 4.4 on Google Maps.'),
  place('viljandi-cafe-2', 'viljandi', 'cafe', 'Aida Kohvik', 'Tasuja pst 6, Viljandi', '빌랸디의 카페. 구글 지도 평점 4.6.', 'Café in Viljandi. Rated 4.6 on Google Maps.'),
  place('viljandi-cafe-3', 'viljandi', 'cafe', 'Kohvik Herr Artur', 'Väike-Turu tn 8, Viljandi', '빌랸디의 카페. 구글 지도 평점 4.6.', 'Café in Viljandi. Rated 4.6 on Google Maps.'),

  // —— haapsalu: restaurants, bakeries and cafés (2026-11-14) ——
  place('haapsalu-fine_dining-1', 'haapsalu', 'fine_dining', 'Wiigi Kohvik', 'Suur-Lossi tn 25, Haapsalu', '합살루의 카페 겸 식당. 구글 지도 평점 4.7.', 'Café restaurant in Haapsalu. Rated 4.7 on Google Maps.'),
  place('haapsalu-fine_dining-2', 'haapsalu', 'fine_dining', 'demoresto', 'Karja tn 21, Haapsalu', '합살루의 작은 접시 요리 식당. 구글 지도 평점 4.7.', 'Small-plates restaurant in Haapsalu. Rated 4.7 on Google Maps.'),
  place('haapsalu-fine_dining-3', 'haapsalu', 'fine_dining', 'Restaurant Kärme Küülik', 'Karja tn 5, Haapsalu', '합살루의 모던 유러피언 식당. 구글 지도 평점 4.3.', 'Modern European restaurant in Haapsalu. Rated 4.3 on Google Maps.'),
  place('haapsalu-fine_dining-4', 'haapsalu', 'fine_dining', 'Trühvlid&Sidrunid', 'Posti tn 19, Haapsalu', '합살루의 모던 유러피언 식당. 구글 지도 평점 4.9.', 'Modern European restaurant in Haapsalu. Rated 4.9 on Google Maps.'),
  place('haapsalu-fine_dining-5', 'haapsalu', 'fine_dining', 'Restaurant Talumehe kõrts', 'Karja tn 2, Haapsalu', '합살루의 에스토니아 시골 요리 식당. 구글 지도 평점 4.4.', 'Estonian country-food restaurant in Haapsalu. Rated 4.4 on Google Maps.'),
  place('haapsalu-bakery-1', 'haapsalu', 'bakery', 'Teele Bakery', 'Metsa tn 53, Haapsalu', '합살루의 빵집. 구글 지도 평점 4.7.', 'Bakery in Haapsalu. Rated 4.7 on Google Maps.'),
  place('haapsalu-bakery-2', 'haapsalu', 'bakery', 'Müüriääre Pagar', 'Karja tn 12, Haapsalu', '합살루의 빵집. 구글 지도 평점 4.8.', 'Bakery in Haapsalu. Rated 4.8 on Google Maps.'),
  place('haapsalu-cafe-1', 'haapsalu', 'cafe', 'Müüriääre cafe', 'Karja tn 7, Haapsalu', '합살루의 커피숍. 구글 지도 평점 4.5.', 'Coffee shop in Haapsalu. Rated 4.5 on Google Maps.'),
  place('haapsalu-cafe-2', 'haapsalu', 'cafe', 'Hapsal Dietrich', 'Karja tn 10, Haapsalu', '합살루의 카페. 구글 지도 평점 4.7.', 'Café in Haapsalu. Rated 4.7 on Google Maps.'),

  // —— kuressaare: restaurants, bakeries and cafés (2026-11-14) ——
  place('kuressaare-fine_dining-1', 'kuressaare', 'fine_dining', 'Söstar köök & baar', 'Tallinna tn 1, Kuressaare', '쿠레사레의 레스토랑. 구글 지도 평점 4.9.', 'Restaurant in Kuressaare. Rated 4.9 on Google Maps.'),
  place('kuressaare-fine_dining-2', 'kuressaare', 'fine_dining', 'Resto HAFEN', 'Tori tn 4, Kuressaare', '쿠레사레의 레스토랑. 구글 지도 평점 4.7.', 'Restaurant in Kuressaare. Rated 4.7 on Google Maps.'),
  place('kuressaare-fine_dining-3', 'kuressaare', 'fine_dining', 'Põide Grillhouse', 'Uus tn 20, Kuressaare', '쿠레사레의 그릴 식당. 구글 지도 평점 4.7.', 'Grill restaurant in Kuressaare. Rated 4.7 on Google Maps.'),
  place('kuressaare-fine_dining-4', 'kuressaare', 'fine_dining', 'OmNom söök & jook', 'Veski tn 9, Kuressaare', '쿠레사레의 레스토랑. 구글 지도 평점 4.9.', 'Restaurant in Kuressaare. Rated 4.9 on Google Maps.'),
  place('kuressaare-fine_dining-5', 'kuressaare', 'fine_dining', 'Ristorante la Perla', 'Lossi tn 3, Kuressaare', '쿠레사레의 이탈리아 요리 식당. 구글 지도 평점 4.5.', 'Italian restaurant in Kuressaare. Rated 4.5 on Google Maps.'),
  place('kuressaare-bakery-1', 'kuressaare', 'bakery', 'Pagariäri Vanalinna kohvik', 'Kauba tn 8, Kuressaare', '쿠레사레의 빵집 겸 카페. 구글 지도 평점 4.7.', 'Bakery and café in Kuressaare. Rated 4.7 on Google Maps.'),
  place('kuressaare-cafe-1', 'kuressaare', 'cafe', 'Classic Café', 'Lossi tn 9, Kuressaare', '쿠레사레의 카페. 구글 지도 평점 4.4.', 'Café in Kuressaare. Rated 4.4 on Google Maps.'),
  place('kuressaare-cafe-2', 'kuressaare', 'cafe', 'Chameleon Cafe', 'Kauba tn 2, Kuressaare', '쿠레사레의 카페. 구글 지도 평점 4.6.', 'Café in Kuressaare. Rated 4.6 on Google Maps.'),
]
