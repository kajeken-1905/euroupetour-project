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
]
