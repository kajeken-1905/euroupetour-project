import { place } from './placeFactory'
import type { Place } from '../types'

export const placesIMExtra: Place[] = [
  // —— douglas ——
  place('douglas-fine_dining-1', 'douglas', 'fine_dining', 'Little Fish Café', '30 North Quay, Douglas IM1 4LB', '항구 앞 해산물·섬 식재료 레스토랑. 브런치부터 저녁까지 엽니다.', 'Harbourside restaurant for seafood and island produce, open from brunch to dinner.'),
  place('douglas-bakery-1', 'douglas', 'bakery', 'Noa Bakehouse', 'Peveril Buildings, Peveril Square, Douglas', '피버릴 광장의 사워도우 베이커리. 커피와 브런치도 냅니다.', 'Sourdough bakery on Peveril Square, also serving coffee and brunch.'),
  place('douglas-cafe-1', 'douglas', 'cafe', 'The Tea Junction', '14 Castle Street, Douglas IM1 2EU', '2015년 문을 연 섬 첫 찻집 겸 카페. 잎차와 직접 만든 케이크를 내고, 매일 엽니다.', 'The island’s first dedicated tea room, open since 2015, serving loose-leaf teas and home-made cakes seven days a week.'),

  // —— peel ——
  place('peel-fine_dining-1', 'peel', 'fine_dining', 'The Boatyard', 'Mariners Wharf, East Quay, Peel IM5 1AR', '2013년부터 영업한 필 항구 앞 레스토랑.', 'Restaurant on Peel harbour, open since 2013.'),

  // —— castletown / peel (Visit Isle of Man listings) ——
  place('peel-cafe-1', 'peel', 'cafe', 'The Coffee Station', 'Station Place, Peel', '필 부두 하우스 오브 마나난 바로 옆 커피숍.', 'Coffee shop beside the House of Manannan on Peel quayside.'),
  place('peel-cafe-2', 'peel', 'cafe', 'Roots by the Sea', '26 Shore Road, Peel IM5 1NH', '필 해변 길의 작은 동네 커피숍. 직접 만든 빵과 간식을 냅니다.', 'Small locally owned coffee shop on Peel’s shore road, with home-made bakes and snacks.'),

  // —— castletown ——
  place('castletown-fine_dining-1', 'castletown', 'fine_dining', 'The Castle Arms', 'The Quayside, Castletown IM9 1LD', '러셴 성 앞 부두의 오래된 펍.', 'Old pub on the quayside facing Castle Rushen.'),

  // —— douglas: restaurants, bakeries and cafés (2026-11-21) ——
  place('douglas-fine_dining-2', 'douglas', 'fine_dining', 'Aura Bar & Bistro', 'Queens Promenade, Douglas', '퀸스 프로머나드의 현대 인도 요리 식당. 구글 지도 평점 4.8.', 'Modern Indian restaurant on Queens Promenade. Rated 4.8 on Google Maps.'),
  place('douglas-fine_dining-3', 'douglas', 'fine_dining', 'Orange Indya', '24 Castle Street, Douglas', '캐슬 스트리트의 현대 인도 요리 식당. 구글 지도 평점 4.8.', 'Modern Indian restaurant on Castle Street. Rated 4.8 on Google Maps.'),
  place('douglas-fine_dining-4', 'douglas', 'fine_dining', 'Sabor Brazil Steakhouse', '28-29 Loch Promenade, Douglas', '해안 산책로의 브라질식 스테이크 식당. 구글 지도 평점 4.9.', 'Brazilian steakhouse on Loch Promenade. Rated 4.9 on Google Maps.'),
  place('douglas-fine_dining-5', 'douglas', 'fine_dining', 'The Barbary Coast Grill & Bar', 'Douglas Chambers, North Quay, Douglas', '항구 앞의 그릴 식당 겸 바. 구글 지도 평점 4.4.', 'Grill and bar by the harbour. Rated 4.4 on Google Maps.'),

  // —— laxey: restaurants, bakeries and cafés (2026-11-21) ——
  place('laxey-fine_dining-1', 'laxey', 'fine_dining', 'La Mona Lisa', '10 Glen Road, Laxey', '락시의 이탈리아 요리 식당. 구글 지도 평점 4.7.', 'Italian restaurant in Laxey. Rated 4.7 on Google Maps.'),
  place('laxey-fine_dining-2', 'laxey', 'fine_dining', 'Shore Hotel Laxey', 'Old Laxey Hill, Laxey', '올드 락시 강가의 브루펍 식당. 구글 지도 평점 4.6.', 'Brew-pub restaurant by the river in Old Laxey. Rated 4.6 on Google Maps.'),
  place('laxey-fine_dining-3', 'laxey', 'fine_dining', 'Ballacregga Corn Mill Tea Room & Restaurant', 'Mines Road, Laxey', '락시 휠 가는 길의 옛 방앗간 찻집 겸 식당. 구글 지도 평점 4.4.', 'Tea room and restaurant in an old corn mill on the way to the Laxey Wheel. Rated 4.4 on Google Maps.'),
  place('laxey-cafe-1', 'laxey', 'cafe', 'The Shed', 'Laxey Bridge, Laxey', '락시 다리 끝의 작은 카페. 구글 지도 평점 4.7.', 'Little café at the end of Laxey Bridge. Rated 4.7 on Google Maps.'),
  place('laxey-cafe-2', 'laxey', 'cafe', 'Laxey Beach Cafe', 'Laxey Beach, Laxey', '락시 해변의 카페. 구글 지도 평점 4.6.', 'Café on Laxey beach. Rated 4.6 on Google Maps.'),
  place('laxey-cafe-3', 'laxey', 'cafe', 'The Laxey Glen', 'Glen Gardens, New Road, Laxey', '락시 글렌 정원 안의 카페 겸 비스트로. 구글 지도 평점 4.5.', 'Café-bistro in the Laxey Glen Gardens. Rated 4.5 on Google Maps.'),

  // —— ramsey: restaurants, bakeries and cafés (2026-11-21) ——
  place('ramsey-fine_dining-1', 'ramsey', 'fine_dining', 'Vellika\'s', '6 Parliament Square, Ramsey', '의회 광장의 인도 요리 식당. 구글 지도 평점 4.5.', 'Indian restaurant on Parliament Square. Rated 4.5 on Google Maps.'),
  place('ramsey-fine_dining-2', 'ramsey', 'fine_dining', 'Ravioli House', '44 Parliament Street, Ramsey', '파를러먼트 스트리트의 이탈리아 요리 식당. 구글 지도 평점 4.5.', 'Italian restaurant on Parliament Street. Rated 4.5 on Google Maps.'),
  place('ramsey-fine_dining-3', 'ramsey', 'fine_dining', 'The Swan', '3 Parliament Street, Ramsey', '시내 중심의 식당. 구글 지도 평점 4.3.', 'Restaurant in the town centre. Rated 4.3 on Google Maps.'),
  place('ramsey-fine_dining-4', 'ramsey', 'fine_dining', 'Golden Phoenix Restaurant', '13-15 Parliament Street, Ramsey', '파를러먼트 스트리트의 중국 요리 식당. 구글 지도 평점 4.4.', 'Chinese restaurant on Parliament Street. Rated 4.4 on Google Maps.'),
  place('ramsey-cafe-1', 'ramsey', 'cafe', 'Gophers Coffee Shop', '2 West Quay, Ramsey', '항구 앞 웨스트 키의 커피집. 구글 지도 평점 4.5.', 'Coffee shop on West Quay by the harbour. Rated 4.5 on Google Maps.'),
  place('ramsey-cafe-2', 'ramsey', 'cafe', 'Northern Pool Cafe', 'Old River Road, Ramsey', '북부 수영장 건물의 카페. 구글 지도 평점 4.7.', 'Café at the Northern Pool. Rated 4.7 on Google Maps.'),
  place('ramsey-cafe-3', 'ramsey', 'cafe', 'Court Cafe', '12 Parliament Street, Ramsey', '파를러먼트 스트리트의 카페. 구글 지도 평점 4.3.', 'Café on Parliament Street. Rated 4.3 on Google Maps.'),

  // —— port-erin: restaurants, bakeries and cafés (2026-11-21) ——
  place('port-erin-fine_dining-1', 'port-erin', 'fine_dining', 'Port Erin Chippy & Diner', '3 Station Road, Port Erin', '역 앞의 피시 앤 칩스 식당. 구글 지도 평점 4.5.', 'Fish and chip diner by the station. Rated 4.5 on Google Maps.'),
  place('port-erin-fine_dining-2', 'port-erin', 'fine_dining', 'The Station', 'Station Road, Port Erin', '역 옆의 식당 겸 바. 구글 지도 평점 4.3.', 'Restaurant and bar beside the station. Rated 4.3 on Google Maps.'),
  place('port-erin-fine_dining-3', 'port-erin', 'fine_dining', 'La Gusto Pizza', 'Shore Road, Port Erin', '해변 길의 피자 가게(포장 위주). 구글 지도 평점 4.7.', 'Pizza place on Shore Road, mainly takeaway. Rated 4.7 on Google Maps.'),
  place('port-erin-cafe-1', 'port-erin', 'cafe', 'Cafe Red', '37 Station Road, Port Erin', '역 앞 거리의 카페. 구글 지도 평점 4.6.', 'Café on Station Road. Rated 4.6 on Google Maps.'),
  place('port-erin-cafe-2', 'port-erin', 'cafe', 'Whistlestop Coffee Shop', 'Port Erin Railway Station', '증기 철도 포트에린역 안의 커피집. 구글 지도 평점 4.7.', 'Coffee shop inside Port Erin steam railway station. Rated 4.7 on Google Maps.'),
  place('port-erin-cafe-3', 'port-erin', 'cafe', 'The Sound Cafe', 'Sound Road, Rushen', '섬 남서쪽 끝, 카프 오브 맨이 마주 보이는 카페. 구글 지도 평점 4.6.', 'Café at the island’s south-west tip, facing the Calf of Man. Rated 4.6 on Google Maps.'),
]
