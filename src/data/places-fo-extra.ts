import { place } from './placeFactory'
import type { Place } from '../types'

export const placesFOExtra: Place[] = [
  // —— torshavn ——
  place('torshavn-fine_dining-1', 'torshavn', 'fine_dining', 'PAZ', 'Doktara Jakobsens gøta 18, FO-100 Tórshavn', '미쉐린 2스타(2026) 레스토랑. 화~금 저녁, 토요일 점심에 엽니다.', 'Two-MICHELIN-star restaurant (2026), open Tuesday–Friday evenings and Saturday lunch.', { michelin: 'star2' }),
  place('torshavn-fine_dining-2', 'torshavn', 'fine_dining', 'Ræst', 'Gongin 8, FO-100 Tórshavn', '틴가네스 옆 옛 시가의 레스토랑. 바람에 말려 숙성한 페로 전통 음식(레스트)을 냅니다.', 'Old-town restaurant by Tinganes serving ræst, the Faroese wind-fermented tradition.'),
  place('torshavn-fine_dining-3', 'torshavn', 'fine_dining', 'Áarstova', 'Gongin 1, FO-100 Tórshavn', '옛 시가에서 페로 식재료로 코스 요리를 내는 레스토랑.', 'Old-town restaurant serving set menus of Faroese produce.'),

  place('torshavn-cafe-1', 'torshavn', 'cafe', 'Paname Café', 'Vaglið 4, Tórshavn', '직접 구운 페이스트리와 빵, 유기농 커피와 차를 내는 시내 중심 카페.', 'Central café with homemade pastries and bread, organic coffee and tea.'),

  // —— vagar / eysturoy (Visit Faroe Islands listings) ——
  place('vagar-fine_dining-1', 'vagar', 'fine_dining', 'Fiskastykkið', 'Úti á Gjógv 12, Sandavágur', '산다보우구르의 생선 말리는 덕장 옆 생선 카페. 페로 요리를 냅니다.', 'Fish café beside the old fish-drying racks in Sandavágur, serving Faroese dishes.'),
  place('vagar-cafe-1', 'vagar', 'cafe', 'Gásadalsgarður', 'Lækjutún 5, Gásadalur', '뮐라포수르 폭포 가까이 있는 농가 카페. 농장에서 난 재료로 요리합니다.', 'Farm café near the Múlafossur waterfall, cooking with produce from the farm.'),
  place('eysturoy-fine_dining-1', 'eysturoy', 'fine_dining', 'Restaurant Muntra', 'Toftagøta 1, Fuglafjørður', '푸글라피외르뒤르 마을 식당. 근해 생선 같은 페로 요리와 스테이크를 냅니다.', 'Village restaurant in Fuglafjørður for Faroese cooking with local fish, and steaks.'),
  place('eysturoy-cafe-1', 'eysturoy', 'cafe', 'Gjóbiti', 'Dalavegur 20, Gjógv', '갸우그 마을의 카페. 가벼운 식사와 커피를 냅니다(매일 12~17시).', 'Café in Gjógv village for light meals and coffee (daily 12:00–17:00).'),
  place('eysturoy-cafe-2', 'eysturoy', 'cafe', 'Lúkukaffi', 'Í Støð 14, Fuglafjørður', '푸글라피외르뒤르 갤러리 리바르후스 안의 작은 카페.', 'Small coffee shop inside Gallery Ribarhús in Fuglafjørður.'),
]
