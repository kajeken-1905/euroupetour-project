import { place } from './placeFactory'
import type { Place } from '../types'

export const placesGLExtra: Place[] = [
  // —— nuuk ——
  place('nuuk-fine_dining-1', 'nuuk', 'fine_dining', 'Sarfalik', 'Hotel Hans Egede, Aqqusinersuaq, Nuuk', '한스 에게데 호텔의 레스토랑. 사향소·순록·생선 같은 그린란드 식재료로 요리합니다.', 'Restaurant at Hotel Hans Egede cooking with Greenlandic musk ox, reindeer and fish.'),

  // —— ilulissat ——
  place('ilulissat-fine_dining-1', 'ilulissat', 'fine_dining', 'Restaurant Ulo', 'Hotel Arctic, Ilulissat', '호텔 아크틱의 레스토랑. 사향소·순록·넙치 같은 그린란드 식재료로 요리하고 디스코만이 내려다보입니다.', 'Restaurant at Hotel Arctic cooking with musk ox, reindeer and Greenland halibut, overlooking Disko Bay.'),

  // —— kangerlussuaq (Visit Greenland) ——
  place('kangerlussuaq-fine_dining-1', 'kangerlussuaq', 'fine_dining', 'Restaurant Roklubben', 'Lake Ferguson, about 5 km from Kangerlussuaq', '시내에서 5km쯤 떨어진 퍼거슨 호숫가 레스토랑. 제철 그린란드 식재료로 요리합니다. 봄·가을에는 매일 코스 하나만 냅니다.', 'Restaurant on Lake Ferguson about 5 km out of town, cooking seasonal Greenlandic produce; spring and autumn bring a single set menu each day.'),

  // —— nuuk: bakeries and cafés (2026-11-04) ——
  place('nuuk-cafe-1', 'nuuk', 'cafe', 'Kaffivik', 'Nuukullak 35, Nuuk 3900', '누크 시내의 카페.', 'Café in Nuuk.'),
  place('nuuk-cafe-2', 'nuuk', 'cafe', 'Café Esmeralda', 'Aqqusinersuaq 20, Nuuk 3900', '중심가의 카페 겸 식당.', 'Café-restaurant on the main street.'),

  // —— nuuk: restaurants, bakeries and cafés (2026-11-21) ——
  place('nuuk-fine_dining-2', 'nuuk', 'fine_dining', 'Restaurant Charoen Porn', 'Aqqusinersuaq 5, Nuuk', '중심가의 태국 요리 식당. 구글 지도 평점 4.4.', 'Thai restaurant on the main street. Rated 4.4 on Google Maps.'),
  place('nuuk-fine_dining-3', 'nuuk', 'fine_dining', 'Nivi', 'Aqqusinersuaq, Nuuk', '중심가의 타파스 식당. 구글 지도 평점 4.3.', 'Tapas restaurant on the main street. Rated 4.3 on Google Maps.'),

  // —— ilulissat: restaurants, bakeries and cafés (2026-11-21) ——
  place('ilulissat-fine_dining-2', 'ilulissat', 'fine_dining', 'Inuit Café', 'Kussangajaannguaq 2, Ilulissat', '마을 중심의 식당. 구글 지도 평점 4.4.', 'Restaurant in the town centre. Rated 4.4 on Google Maps.'),
  place('ilulissat-fine_dining-3', 'ilulissat', 'fine_dining', 'Hangout Bistro', 'Kussangajaannguaq 25, Ilulissat', '마을 중심의 비스트로. 구글 지도 평점 4.5.', 'Bistro in the town centre. Rated 4.5 on Google Maps.'),
  place('ilulissat-fine_dining-4', 'ilulissat', 'fine_dining', 'Café Iluliaq', 'Fredericiap Aqqutaa 5, Ilulissat', '마을 중심의 카페 겸 식당. 구글 지도 평점 4.3.', 'Café-restaurant in the town centre. Rated 4.3 on Google Maps.'),

  // —— qaqortoq: restaurants, bakeries and cafés (2026-11-21) ——
  place('qaqortoq-cafe-1', 'qaqortoq', 'cafe', 'Kunguak Cafe & Icebar', 'Storesvej, Qaqortoq', '항구 가까이의 카페. 구글 지도 평점 4.5.', 'Café near the harbour. Rated 4.5 on Google Maps.'),
]
