import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMDExtra: Place[] = [
  // —— chisinau ——
  place('chisinau-fine_dining-1', 'chisinau', 'fine_dining', 'La Taifas', 'Strada București 67, Chișinău', '옛 시골집을 재현한 몰도바 전통 레스토랑. 민속 음악 라이브와 파이·폴렌타를 냅니다.', 'Traditional Moldovan restaurant in a village-house setting, with live folk music, pies and polenta.'),
  place('chisinau-fine_dining-2', 'chisinau', 'fine_dining', 'Carpe Diem Wine Shop & Bar', 'Strada Columna 136, Chișinău', '2011년 문을 연 몰도바 최초의 와인 바. 몰도바 와인을 잔으로 다양하게 내고 치즈·햄 플래터가 있습니다.', 'Moldova\'s first wine bar, opened in 2011, pouring many Moldovan wines by the glass with cheese and meat boards.'),
  place('chisinau-fine_dining-3', 'chisinau', 'fine_dining', 'Vatra Neamului', 'Strada Pușkin 20b, Chișinău', '전통 몰도바·루마니아 요리를 내는 레스토랑. 매일 저녁 민속 음악 라이브가 열립니다.', 'Traditional Moldovan and Romanian restaurant with live folk music every evening.'),
  place('chisinau-fine_dining-4', 'chisinau', 'fine_dining', 'La Plăcinte', 'Bulevardul Moscova 9/1, Chișinău', '몰도바 전통 파이 플러친타로 유명한 체인 레스토랑의 리시카니 지점.', 'Rîșcani branch of the chain known for Moldovan plăcintă pies.', { image: '/places/chisinau-fine_dining-4.jpg' }),

  place('chisinau-bakery-1', 'chisinau', 'bakery', 'Dulcinella', 'Strada Albișoara 68/1, Chișinău, Moldova', '2005년 키시너우에서 시작한 수제 제과점 체인의 지점. 전통·현대 케이크와 파이를 냅니다.', 'Branch of a handmade confectionery chain founded in Chișinău in 2005, with traditional and modern cakes and pies.'),
  place('chisinau-bakery-2', 'chisinau', 'bakery', 'Vanille', 'Bulevardul Dacia 31, Chișinău', '다양한 케이크와 디저트를 내는 아늑한 카페 겸 제과점.', 'Cosy café and patisserie with a wide range of cakes and desserts.'),
  place('chisinau-bakery-4', 'chisinau', 'bakery', 'Caramel', 'Strada Mitropolit Gavriil Bănulescu-Bodoni 4, Chișinău', '여러 맛의 에클레어로 알려진 프랑스식 제과점 겸 카페. 작은 테라스가 있습니다.', 'French-style patisserie and café known for éclairs in many flavours, with a small terrace.'),

  place('chisinau-cafe-2', 'chisinau', 'cafe', 'Tucano Coffee', 'Strada A. Pușkin 15, Chișinău', '2011년 키시너우에서 시작한 커피 체인의 중심가 지점. 가벼운 식사와 디저트를 냅니다.', 'Central branch of a coffee chain founded in Chișinău in 2011, with light meals and desserts.'),
  place('chisinau-cafe-3', 'chisinau', 'cafe', 'Crème de la Crème', 'Strada Alexandru cel Bun 98A, Chișinău', '3층으로 된 파리풍 제과점 겸 카페. 정오까지 브런치를 냅니다.', 'Parisian-style patisserie and café over three floors, serving brunch until noon.'),


  // —— orheiul-vechi ——
  place('orheiul-vechi-fine_dining-1', 'orheiul-vechi', 'fine_dining', 'Ellada', 'Strada Vasile Lupu 46, Orhei', '오르헤이 중심의 몰도바 요리 레스토랑. 연회와 행사로도 인기입니다.', 'Moldovan restaurant in central Orhei, also popular for weddings and events.'),
  place('orheiul-vechi-fine_dining-2', 'orheiul-vechi', 'fine_dining', 'LA STRADA', 'Strada Mihai Eminescu 10, Orhei', '오르헤이의 레스토랑. 스튜와 그릴 요리를 내고 밤늦게까지 엽니다.', 'Orhei restaurant serving stews and grills, open until late.'),
  place('orheiul-vechi-bakery-2', 'orheiul-vechi', 'bakery', 'Marcu Bakery', 'Peresecina, MD-3505, Orhei District, Moldova', '키시너우-오르헤이 도로변 페레세치나의 빵집 겸 카페. 갓 구운 파이와 커피가 인기이고 어린이 공간이 있습니다.', 'Bakery-café in Peresecina on the Chișinău–Orhei road, popular for fresh pies and coffee, with a children\'s area.'),

  // —— soroca ——
  place('soroca-fine_dining-1', 'soroca', 'fine_dining', 'Restaurant Apollon', 'Strada Vasile Alecsandri 2, Soroca', '호텔 유로파 1928 안의 레스토랑.', 'Restaurant inside Hotel Europa 1928.'),

  place('soroca-cafe-1', 'soroca', 'cafe', 'In Vogue Cafe', 'Independenței 76, Soroca, Moldova', '소로카 요새에서 약 130m 떨어진 서양식 카페.', 'Western-style café about 130 m from Soroca Fortress.'),
]
