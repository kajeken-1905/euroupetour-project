import { place } from './placeFactory'
import type { Place } from '../types'

/** Asian restaurants (Thai, Japanese, Chinese, Vietnamese, Indian, etc.). */
export const placesAsian: Place[] = [
  // —— london ——
  place('london-asian-1', 'london', 'asian', 'Dishoom Covent Garden', 4.6, '12 Upper St Martin\'s Lane, London', '봄베이 카페 스타일 인디안 요리.', 'Bombay café-style Indian cooking.', { reviewCount: 18000 }),
  place('london-asian-2', 'london', 'asian', 'Kanada-Ya', 4.5, '64 St Giles High St, London', '돈코츠 라멘 인기 지점.', 'Popular tonkotsu ramen spot.', { reviewCount: 5200 }),
  place('london-asian-3', 'london', 'asian', 'Bao Soho', 4.4, '53 Lexington St, London', '대만식 바오·스낵.', 'Taiwanese bao and snacks.', { reviewCount: 4100 }),

  // —— edinburgh ——
  place('edinburgh-asian-1', 'edinburgh', 'asian', 'Mother India\'s Cafe', 4.5, '3-5 Infirmary St, Edinburgh', '스코틀랜드 인기 인디안.', 'Popular Indian in Edinburgh.', { reviewCount: 2800 }),
  place('edinburgh-asian-2', 'edinburgh', 'asian', 'Hanedan / Turkish-Asian mix locals', 4.3, 'Edinburgh', '미들이스턴·아시안 캐주얼.', 'Middle Eastern and Asian casual.', { reviewCount: 900 }),
  place('edinburgh-asian-3', 'edinburgh', 'asian', 'Yeni Meze Bar (Asian sides) / ramen locals', 4.2, 'Edinburgh', '아시안 사이드·라멘 옵션.', 'Asian sides and ramen options.', { reviewCount: 700 }),

  // —— manchester ——
  place('manchester-asian-1', 'manchester', 'asian', 'Almost Famous / Pacific Rim', 4.3, 'Manchester', '아시안 퓨전·스트리트푸드.', 'Asian fusion and street food.', { reviewCount: 2100 }),
  place('manchester-asian-2', 'manchester', 'asian', 'Try Thai', 4.4, 'Manchester', '태국 요리.', 'Thai cooking.', { reviewCount: 1600 }),
  place('manchester-asian-3', 'manchester', 'asian', 'Japaneiro / ramen spots', 4.3, 'Manchester', '일식·라멘.', 'Japanese and ramen.', { reviewCount: 1200 }),

  // —— bath ——
  place('bath-asian-1', 'bath', 'asian', 'Yak Yeti Yak', 4.5, '12 Pierrepont St, Bath', '네팔·히말라야 요리.', 'Nepalese Himalayan cooking.', { reviewCount: 1800 }),
  place('bath-asian-2', 'bath', 'asian', 'Thai Barn', 4.3, 'Bath', '태국 요리.', 'Thai restaurant.', { reviewCount: 900 }),
  place('bath-asian-3', 'bath', 'asian', 'Local Japanese / sushi', 4.2, 'Bath', '스시·일식 캐주얼.', 'Casual sushi and Japanese.', { reviewCount: 700 }),

  // —— oxford ——
  place('oxford-asian-1', 'oxford', 'asian', 'Thaikhun Oxford', 4.3, 'Oxford', '태국 스트리트푸드 스타일.', 'Thai street-food style.', { reviewCount: 1400 }),
  place('oxford-asian-2', 'oxford', 'asian', 'My Sichuan / Chinese', 4.3, 'Oxford', '시츄안·중식.', 'Sichuan and Chinese.', { reviewCount: 1100 }),
  place('oxford-asian-3', 'oxford', 'asian', 'Kokoro / Japanese casual', 4.2, 'Oxford', '일식 캐주얼.', 'Casual Japanese.', { reviewCount: 800 }),

  // —— cambridge ——
  place('cambridge-asian-1', 'cambridge', 'asian', 'Aromi / Asian options nearby', 4.2, 'Cambridge', '시내 아시안 옵션.', 'City Asian options.', { reviewCount: 900 }),
  place('cambridge-asian-2', 'cambridge', 'asian', 'Dojo / noodle bars', 4.3, 'Cambridge', '누들·일식 캐주얼.', 'Noodle and Japanese casual.', { reviewCount: 1200 }),
  place('cambridge-asian-3', 'cambridge', 'asian', 'Thai restaurants on Mill Road', 4.4, 'Mill Road, Cambridge', '밀로드 태국 식당가.', 'Thai restaurants on Mill Road.', { reviewCount: 1600 }),

  // —— liverpool ——
  place('liverpool-asian-1', 'liverpool', 'asian', 'Yuet Ben', 4.3, 'Liverpool', '클래식 중식.', 'Classic Chinese.', { reviewCount: 1100 }),
  place('liverpool-asian-2', 'liverpool', 'asian', 'Thai Café Liverpool', 4.3, 'Liverpool', '태국 요리.', 'Thai cooking.', { reviewCount: 900 }),
  place('liverpool-asian-3', 'liverpool', 'asian', 'Japanese / ramen locals', 4.2, 'Liverpool', '일식·라멘.', 'Japanese and ramen.', { reviewCount: 800 }),

  // —— brighton ——
  place('brighton-asian-1', 'brighton', 'asian', 'Food for Friends Asian plates / Thai locals', 4.3, 'Brighton', '아시안 플레이트·태국.', 'Asian plates and Thai.', { reviewCount: 1400 }),
  place('brighton-asian-2', 'brighton', 'asian', 'Bincho Yakitori', 4.4, 'Brighton', '야키토리·일식.', 'Yakitori and Japanese.', { reviewCount: 1600 }),
  place('brighton-asian-3', 'brighton', 'asian', 'Indian / South Asian on Preston Street', 4.3, 'Brighton', '남아시아 요리.', 'South Asian cooking.', { reviewCount: 1200 }),

  // —— york ——
  place('york-asian-1', 'york', 'asian', 'Khao San Road York', 4.4, 'York', '태국 요리.', 'Thai cooking.', { reviewCount: 1300 }),
  place('york-asian-2', 'york', 'asian', 'Il Paradiso del Cibo / Asian nearby', 4.2, 'York', '아시안 캐주얼 옵션.', 'Casual Asian options.', { reviewCount: 700 }),
  place('york-asian-3', 'york', 'asian', 'Japanese / sushi locals', 4.2, 'York', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 650 }),

  // —— bristol ——
  place('bristol-asian-1', 'bristol', 'asian', 'Thali Group / Indian', 4.4, 'Bristol', '인디안 탈리·커리.', 'Indian thali and curry.', { reviewCount: 2100 }),
  place('bristol-asian-2', 'bristol', 'asian', 'Woky Ko / Asian street food', 4.3, 'Bristol', '아시안 스트리트푸드.', 'Asian street food.', { reviewCount: 1500 }),
  place('bristol-asian-3', 'bristol', 'asian', 'No.1 Harbourside Asian options', 4.2, 'Bristol', '하버사이드 아시안.', 'Harbourside Asian options.', { reviewCount: 900 }),

  // —— amsterdam ——
  place('amsterdam-asian-1', 'amsterdam', 'asian', 'Restaurant Blauw', 4.5, 'Amsterdam', '인기 인도네시아 라이스타펠.', 'Popular Indonesian rijsttafel.', { reviewCount: 4200 }),
  place('amsterdam-asian-2', 'amsterdam', 'asian', 'Takumi Ramen', 4.4, 'Amsterdam', '라멘 전문.', 'Ramen specialist.', { reviewCount: 2800 }),
  place('amsterdam-asian-3', 'amsterdam', 'asian', 'Bird / Thai', 4.4, 'Amsterdam', '태국 요리.', 'Thai cooking.', { reviewCount: 3100 }),

  // —— rotterdam ——
  place('rotterdam-asian-1', 'rotterdam', 'asian', 'Asian Glories', 4.4, 'Rotterdam', '중식·딤섬.', 'Chinese and dim sum.', { reviewCount: 1800 }),
  place('rotterdam-asian-2', 'rotterdam', 'asian', 'Takumi / ramen', 4.3, 'Rotterdam', '라멘.', 'Ramen.', { reviewCount: 1400 }),
  place('rotterdam-asian-3', 'rotterdam', 'asian', 'Thai Street Food locals', 4.3, 'Rotterdam', '태국 스트리트푸드.', 'Thai street food.', { reviewCount: 1100 }),

  // —— the-hague ——
  place('the-hague-asian-1', 'the-hague', 'asian', 'Garuda / Indonesian', 4.4, 'The Hague', '인도네시아 요리.', 'Indonesian cooking.', { reviewCount: 1600 }),
  place('the-hague-asian-2', 'the-hague', 'asian', 'Asian restaurants around Chinatown', 4.3, 'The Hague', '차이나타운 아시안.', 'Chinatown Asian spots.', { reviewCount: 1200 }),
  place('the-hague-asian-3', 'the-hague', 'asian', 'Sushi / Japanese locals', 4.2, 'The Hague', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 900 }),

  // —— utrecht ——
  place('utrecht-asian-1', 'utrecht', 'asian', 'Seb\'s / Asian fusion', 4.3, 'Utrecht', '아시안 퓨전.', 'Asian fusion.', { reviewCount: 1000 }),
  place('utrecht-asian-2', 'utrecht', 'asian', 'Thai / Vietnamese locals', 4.3, 'Utrecht', '태국·베트남 요리.', 'Thai and Vietnamese.', { reviewCount: 1100 }),
  place('utrecht-asian-3', 'utrecht', 'asian', 'Ramen / Japanese', 4.2, 'Utrecht', '라멘·일식.', 'Ramen and Japanese.', { reviewCount: 800 }),

  // —— haarlem ——
  place('haarlem-asian-1', 'haarlem', 'asian', 'Asian Kitchen / Thai', 4.3, 'Haarlem', '태국·아시안.', 'Thai and Asian.', { reviewCount: 700 }),
  place('haarlem-asian-2', 'haarlem', 'asian', 'Sushi / Japanese locals', 4.2, 'Haarlem', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 600 }),
  place('haarlem-asian-3', 'haarlem', 'asian', 'Indian restaurants', 4.3, 'Haarlem', '인디안 요리.', 'Indian cooking.', { reviewCount: 650 }),

  // —— delft ——
  place('delft-asian-1', 'delft', 'asian', 'Asian / Chinese locals', 4.2, 'Delft', '중식·아시안.', 'Chinese and Asian.', { reviewCount: 500 }),
  place('delft-asian-2', 'delft', 'asian', 'Thai restaurants', 4.3, 'Delft', '태국 요리.', 'Thai cooking.', { reviewCount: 550 }),
  place('delft-asian-3', 'delft', 'asian', 'Sushi bars', 4.2, 'Delft', '스시 바.', 'Sushi bars.', { reviewCount: 480 }),

  // —— maastricht ——
  place('maastricht-asian-1', 'maastricht', 'asian', 'Asian Palace / Chinese', 4.3, 'Maastricht', '중식.', 'Chinese restaurant.', { reviewCount: 800 }),
  place('maastricht-asian-2', 'maastricht', 'asian', 'Thai / Indonesian locals', 4.3, 'Maastricht', '태국·인도네시아.', 'Thai and Indonesian.', { reviewCount: 700 }),
  place('maastricht-asian-3', 'maastricht', 'asian', 'Japanese / sushi', 4.2, 'Maastricht', '일식·스시.', 'Japanese and sushi.', { reviewCount: 600 }),

  // —— giethoorn ——
  place('giethoorn-asian-1', 'giethoorn', 'asian', 'Asian dishes at canal restaurants', 4.1, 'Giethoorn', '운하 식당의 아시안 메뉴.', 'Asian dishes at canal restaurants.', { reviewCount: 400 }),
  place('giethoorn-asian-2', 'giethoorn', 'asian', 'Nearby Zwolle Asian restaurants', 4.2, 'Zwolle', '근교 도시 아시안 식당.', 'Asian restaurants in nearby Zwolle.', { reviewCount: 600 }),
  place('giethoorn-asian-3', 'giethoorn', 'asian', 'Thai / Chinese day-trip options', 4.1, 'Overijssel', '권역 태국·중식.', 'Regional Thai and Chinese.', { reviewCount: 350 }),

  // —— luxembourg-city ——
  place('luxembourg-city-asian-1', 'luxembourg-city', 'asian', 'Bazaar / Asian fusion', 4.3, 'Luxembourg City', '아시안 퓨전.', 'Asian fusion.', { reviewCount: 900 }),
  place('luxembourg-city-asian-2', 'luxembourg-city', 'asian', 'Thai / Vietnamese locals', 4.3, 'Luxembourg City', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 800 }),
  place('luxembourg-city-asian-3', 'luxembourg-city', 'asian', 'Japanese / sushi', 4.2, 'Luxembourg City', '일식·스시.', 'Japanese and sushi.', { reviewCount: 700 }),

  // —— vianden ——
  place('vianden-asian-1', 'vianden', 'asian', 'Local restaurants with Asian menus', 4.1, 'Vianden', '아시안 메뉴 제공 식당.', 'Restaurants with Asian menus.', { reviewCount: 250 }),
  place('vianden-asian-2', 'vianden', 'asian', 'Luxembourg City Asian day trip', 4.2, 'Luxembourg City', '수도 아시안 식당 데이트립.', 'Capital Asian restaurant day trip.', { reviewCount: 500 }),
  place('vianden-asian-3', 'vianden', 'asian', 'Thai / Chinese regional', 4.1, 'Region', '권역 태국·중식.', 'Regional Thai and Chinese.', { reviewCount: 220 }),

  // —— echternach ——
  place('echternach-asian-1', 'echternach', 'asian', 'Town restaurants Asian options', 4.1, 'Echternach', '타운 식당 아시안 옵션.', 'Town restaurant Asian options.', { reviewCount: 200 }),
  place('echternach-asian-2', 'echternach', 'asian', 'Trier Asian restaurants day trip', 4.2, 'Trier', '트리어 아시안 데이트립.', 'Trier Asian day trip.', { reviewCount: 450 }),
  place('echternach-asian-3', 'echternach', 'asian', 'Thai / Chinese regional', 4.1, 'Region', '권역 태국·중식.', 'Regional Thai and Chinese.', { reviewCount: 180 }),

  // —— remich ——
  place('remich-asian-1', 'remich', 'asian', 'Moselle restaurants Asian sides', 4.1, 'Remich', '모젤 식당 아시안 사이드.', 'Moselle restaurants with Asian sides.', { reviewCount: 200 }),
  place('remich-asian-2', 'remich', 'asian', 'Luxembourg City Asian day trip', 4.2, 'Luxembourg City', '수도 아시안 데이트립.', 'Capital Asian day trip.', { reviewCount: 450 }),
  place('remich-asian-3', 'remich', 'asian', 'Thai / sushi regional', 4.1, 'Region', '권역 태국·스시.', 'Regional Thai and sushi.', { reviewCount: 180 }),

  // —— brussels ——
  place('brussels-asian-1', 'brussels', 'asian', 'Yamato / Japanese', 4.4, 'Brussels', '일식.', 'Japanese restaurant.', { reviewCount: 1600 }),
  place('brussels-asian-2', 'brussels', 'asian', 'Henri / Asian & beyond', 4.3, 'Brussels', '아시안 포함 모던 다이닝.', 'Modern dining including Asian.', { reviewCount: 1200 }),
  place('brussels-asian-3', 'brussels', 'asian', 'Chinatown / Rue de la Vierge Noire Thai-Chinese', 4.3, 'Brussels', '차이나타운 태국·중식.', 'Chinatown Thai and Chinese.', { reviewCount: 2100 }),

  // —— bruges ——
  place('bruges-asian-1', 'bruges', 'asian', 'Tanuki / Japanese', 4.3, 'Bruges', '일식.', 'Japanese restaurant.', { reviewCount: 900 }),
  place('bruges-asian-2', 'bruges', 'asian', 'Thai restaurants near Markt', 4.3, 'Bruges', '마르크트 인근 태국.', 'Thai near the Markt.', { reviewCount: 800 }),
  place('bruges-asian-3', 'bruges', 'asian', 'Chinese / Asian locals', 4.2, 'Bruges', '중식·아시안.', 'Chinese and Asian.', { reviewCount: 650 }),

  // —— ghent ——
  place('ghent-asian-1', 'ghent', 'asian', 'Mokagon / Asian', 4.3, 'Ghent', '아시안 요리.', 'Asian cooking.', { reviewCount: 900 }),
  place('ghent-asian-2', 'ghent', 'asian', 'Thai / Vietnamese locals', 4.3, 'Ghent', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 850 }),
  place('ghent-asian-3', 'ghent', 'asian', 'Sushi / Japanese', 4.2, 'Ghent', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 700 }),

  // —— antwerp ——
  place('antwerp-asian-1', 'antwerp', 'asian', 'The Jane nearby Asian / Chinatown', 4.3, 'Antwerp', '차이나타운·아시안.', 'Chinatown and Asian spots.', { reviewCount: 1400 }),
  place('antwerp-asian-2', 'antwerp', 'asian', 'Thai / Vietnamese', 4.3, 'Antwerp', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 1100 }),
  place('antwerp-asian-3', 'antwerp', 'asian', 'Japanese / ramen', 4.3, 'Antwerp', '일식·라멘.', 'Japanese and ramen.', { reviewCount: 1000 }),

  // —— leuven ——
  place('leuven-asian-1', 'leuven', 'asian', 'Asian / Thai locals', 4.3, 'Leuven', '태국·아시안.', 'Thai and Asian.', { reviewCount: 700 }),
  place('leuven-asian-2', 'leuven', 'asian', 'Sushi / Japanese', 4.2, 'Leuven', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 600 }),
  place('leuven-asian-3', 'leuven', 'asian', 'Indian / South Asian', 4.3, 'Leuven', '인디안·남아시아.', 'Indian and South Asian.', { reviewCount: 650 }),

  // —— dinant ——
  place('dinant-asian-1', 'dinant', 'asian', 'Local Asian menu restaurants', 4.1, 'Dinant', '아시안 메뉴 식당.', 'Restaurants with Asian menus.', { reviewCount: 220 }),
  place('dinant-asian-2', 'dinant', 'asian', 'Namur Asian day trip', 4.2, 'Namur', '나뮈르 아시안 데이트립.', 'Namur Asian day trip.', { reviewCount: 400 }),
  place('dinant-asian-3', 'dinant', 'asian', 'Thai / Chinese regional', 4.1, 'Wallonia', '권역 태국·중식.', 'Regional Thai and Chinese.', { reviewCount: 200 }),

  // —— oslo ——
  place('oslo-asian-1', 'oslo', 'asian', 'Asia Aker Brygge / Asian hubs', 4.3, 'Oslo', '아시안 다이닝 허브.', 'Asian dining hubs.', { reviewCount: 1800 }),
  place('oslo-asian-2', 'oslo', 'asian', 'Sushi / Japanese locals', 4.3, 'Oslo', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 1500 }),
  place('oslo-asian-3', 'oslo', 'asian', 'Thai / Vietnamese', 4.3, 'Oslo', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 1400 }),

  // —— bergen ——
  place('bergen-asian-1', 'bergen', 'asian', 'Asian / Thai locals', 4.2, 'Bergen', '태국·아시안.', 'Thai and Asian.', { reviewCount: 700 }),
  place('bergen-asian-2', 'bergen', 'asian', 'Sushi / Japanese', 4.2, 'Bergen', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 650 }),
  place('bergen-asian-3', 'bergen', 'asian', 'Indian restaurants', 4.3, 'Bergen', '인디안 요리.', 'Indian cooking.', { reviewCount: 700 }),

  // —— tromso ——
  place('tromso-asian-1', 'tromso', 'asian', 'Asian / Thai locals', 4.2, 'Tromsø', '태국·아시안.', 'Thai and Asian.', { reviewCount: 450 }),
  place('tromso-asian-2', 'tromso', 'asian', 'Sushi bars', 4.2, 'Tromsø', '스시 바.', 'Sushi bars.', { reviewCount: 400 }),
  place('tromso-asian-3', 'tromso', 'asian', 'Indian / Chinese', 4.2, 'Tromsø', '인디안·중식.', 'Indian and Chinese.', { reviewCount: 380 }),

  // —— stavanger ——
  place('stavanger-asian-1', 'stavanger', 'asian', 'Asian / Thai locals', 4.2, 'Stavanger', '태국·아시안.', 'Thai and Asian.', { reviewCount: 550 }),
  place('stavanger-asian-2', 'stavanger', 'asian', 'Sushi / Japanese', 4.2, 'Stavanger', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 500 }),
  place('stavanger-asian-3', 'stavanger', 'asian', 'Indian restaurants', 4.3, 'Stavanger', '인디안.', 'Indian.', { reviewCount: 520 }),

  // —— trondheim ——
  place('trondheim-asian-1', 'trondheim', 'asian', 'Asian / Thai locals', 4.2, 'Trondheim', '태국·아시안.', 'Thai and Asian.', { reviewCount: 500 }),
  place('trondheim-asian-2', 'trondheim', 'asian', 'Sushi / Japanese', 4.2, 'Trondheim', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 450 }),
  place('trondheim-asian-3', 'trondheim', 'asian', 'Vietnamese / Chinese', 4.2, 'Trondheim', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 420 }),

  // —— alesund ——
  place('alesund-asian-1', 'alesund', 'asian', 'Asian menu restaurants', 4.1, 'Ålesund', '아시안 메뉴 식당.', 'Restaurants with Asian menus.', { reviewCount: 280 }),
  place('alesund-asian-2', 'alesund', 'asian', 'Sushi / Thai locals', 4.2, 'Ålesund', '스시·태국.', 'Sushi and Thai.', { reviewCount: 300 }),
  place('alesund-asian-3', 'alesund', 'asian', 'Chinese / Indian', 4.1, 'Ålesund', '중식·인디안.', 'Chinese and Indian.', { reviewCount: 260 }),

  // —— flam ——
  place('flam-asian-1', 'flam', 'asian', 'Hotel restaurants Asian options', 4.1, 'Flåm', '호텔 식당 아시안 옵션.', 'Hotel restaurants with Asian options.', { reviewCount: 250 }),
  place('flam-asian-2', 'flam', 'asian', 'Bergen Asian day trip', 4.2, 'Bergen', '베르겐 아시안 데이트립.', 'Bergen Asian day trip.', { reviewCount: 500 }),
  place('flam-asian-3', 'flam', 'asian', 'Thai / sushi regional', 4.1, 'Sogn', '권역 태국·스시.', 'Regional Thai and sushi.', { reviewCount: 200 }),

  // —— helsinki ——
  place('helsinki-asian-1', 'helsinki', 'asian', 'Passio / Asian-influenced & Thai locals', 4.3, 'Helsinki', '아시안 인플루언스·태국.', 'Asian-influenced and Thai.', { reviewCount: 1400 }),
  place('helsinki-asian-2', 'helsinki', 'asian', 'Sushi / Japanese', 4.3, 'Helsinki', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 1600 }),
  place('helsinki-asian-3', 'helsinki', 'asian', 'Vietnamese / Chinese', 4.3, 'Helsinki', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 1200 }),

  // —— turku ——
  place('turku-asian-1', 'turku', 'asian', 'Asian / Thai locals', 4.2, 'Turku', '태국·아시안.', 'Thai and Asian.', { reviewCount: 500 }),
  place('turku-asian-2', 'turku', 'asian', 'Sushi / Japanese', 4.2, 'Turku', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 450 }),
  place('turku-asian-3', 'turku', 'asian', 'Chinese / Indian', 4.2, 'Turku', '중식·인디안.', 'Chinese and Indian.', { reviewCount: 420 }),

  // —— tampere ——
  place('tampere-asian-1', 'tampere', 'asian', 'Asian / Thai locals', 4.2, 'Tampere', '태국·아시안.', 'Thai and Asian.', { reviewCount: 550 }),
  place('tampere-asian-2', 'tampere', 'asian', 'Sushi / Japanese', 4.2, 'Tampere', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 500 }),
  place('tampere-asian-3', 'tampere', 'asian', 'Vietnamese / Chinese', 4.2, 'Tampere', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 480 }),

  // —— rovaniemi ——
  place('rovaniemi-asian-1', 'rovaniemi', 'asian', 'Asian / Chinese locals', 4.1, 'Rovaniemi', '중식·아시안.', 'Chinese and Asian.', { reviewCount: 350 }),
  place('rovaniemi-asian-2', 'rovaniemi', 'asian', 'Sushi / Thai', 4.1, 'Rovaniemi', '스시·태국.', 'Sushi and Thai.', { reviewCount: 320 }),
  place('rovaniemi-asian-3', 'rovaniemi', 'asian', 'Indian restaurants', 4.2, 'Rovaniemi', '인디안.', 'Indian.', { reviewCount: 300 }),

  // —— porvoo ——
  place('porvoo-asian-1', 'porvoo', 'asian', 'Local Asian menu restaurants', 4.1, 'Porvoo', '아시안 메뉴 식당.', 'Restaurants with Asian menus.', { reviewCount: 250 }),
  place('porvoo-asian-2', 'porvoo', 'asian', 'Helsinki Asian day trip', 4.2, 'Helsinki', '헬싱키 아시안 데이트립.', 'Helsinki Asian day trip.', { reviewCount: 600 }),
  place('porvoo-asian-3', 'porvoo', 'asian', 'Thai / sushi regional', 4.1, 'Region', '권역 태국·스시.', 'Regional Thai and sushi.', { reviewCount: 220 }),

  // —— stockholm ——
  place('stockholm-asian-1', 'stockholm', 'asian', 'Sturekatten nearby Asian / Thai Town vibes', 4.3, 'Stockholm', '태국·아시안 씬.', 'Thai and Asian scene.', { reviewCount: 1800 }),
  place('stockholm-asian-2', 'stockholm', 'asian', 'Sushi / Japanese', 4.4, 'Stockholm', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 2200 }),
  place('stockholm-asian-3', 'stockholm', 'asian', 'Vietnamese / Chinese', 4.3, 'Stockholm', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 1600 }),

  // —— gothenburg ——
  place('gothenburg-asian-1', 'gothenburg', 'asian', 'Asian / Thai locals', 4.3, 'Gothenburg', '태국·아시안.', 'Thai and Asian.', { reviewCount: 1200 }),
  place('gothenburg-asian-2', 'gothenburg', 'asian', 'Sushi / Japanese', 4.3, 'Gothenburg', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 1100 }),
  place('gothenburg-asian-3', 'gothenburg', 'asian', 'Vietnamese / Chinese', 4.2, 'Gothenburg', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 900 }),

  // —— malmo ——
  place('malmo-asian-1', 'malmo', 'asian', 'Asian / Thai locals', 4.3, 'Malmö', '태국·아시안.', 'Thai and Asian.', { reviewCount: 1000 }),
  place('malmo-asian-2', 'malmo', 'asian', 'Sushi / Japanese', 4.3, 'Malmö', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 950 }),
  place('malmo-asian-3', 'malmo', 'asian', 'Vietnamese / Middle-Asian mix', 4.3, 'Malmö', '베트남·아시안 믹스.', 'Vietnamese and Asian mix.', { reviewCount: 1100 }),

  // —— uppsala ——
  place('uppsala-asian-1', 'uppsala', 'asian', 'Asian / Thai locals', 4.2, 'Uppsala', '태국·아시안.', 'Thai and Asian.', { reviewCount: 500 }),
  place('uppsala-asian-2', 'uppsala', 'asian', 'Sushi / Japanese', 4.2, 'Uppsala', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 450 }),
  place('uppsala-asian-3', 'uppsala', 'asian', 'Chinese / Indian', 4.2, 'Uppsala', '중식·인디안.', 'Chinese and Indian.', { reviewCount: 420 }),

  // —— kiruna ——
  place('kiruna-asian-1', 'kiruna', 'asian', 'Asian / Chinese locals', 4.1, 'Kiruna', '중식·아시안.', 'Chinese and Asian.', { reviewCount: 220 }),
  place('kiruna-asian-2', 'kiruna', 'asian', 'Thai / sushi regional', 4.1, 'Kiruna', '태국·스시.', 'Thai and sushi.', { reviewCount: 200 }),
  place('kiruna-asian-3', 'kiruna', 'asian', 'Luleå Asian day trip', 4.2, 'Luleå', '룰레오 아시안 데이트립.', 'Luleå Asian day trip.', { reviewCount: 350 }),

  // —— copenhagen ——
  place('copenhagen-asian-1', 'copenhagen', 'asian', 'Restaurant Kiin Kiin', 4.6, 'Copenhagen', '미슐랭 태국 파인 다이닝.', 'Michelin Thai fine dining.', { reviewCount: 2100 }),
  place('copenhagen-asian-2', 'copenhagen', 'asian', 'Sticks\'n\'Sushi', 4.3, 'Copenhagen', '스시·야키토리 체인.', 'Sushi and yakitori.', { reviewCount: 4800 }),
  place('copenhagen-asian-3', 'copenhagen', 'asian', 'Vietnamese / Chinese locals', 4.3, 'Copenhagen', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 1600 }),

  // —— aarhus ——
  place('aarhus-asian-1', 'aarhus', 'asian', 'Asian / Thai locals', 4.3, 'Aarhus', '태국·아시안.', 'Thai and Asian.', { reviewCount: 800 }),
  place('aarhus-asian-2', 'aarhus', 'asian', 'Sushi / Japanese', 4.2, 'Aarhus', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 700 }),
  place('aarhus-asian-3', 'aarhus', 'asian', 'Vietnamese / Chinese', 4.2, 'Aarhus', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 650 }),

  // —— odense ——
  place('odense-asian-1', 'odense', 'asian', 'Asian / Thai locals', 4.2, 'Odense', '태국·아시안.', 'Thai and Asian.', { reviewCount: 450 }),
  place('odense-asian-2', 'odense', 'asian', 'Sushi / Japanese', 4.2, 'Odense', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 400 }),
  place('odense-asian-3', 'odense', 'asian', 'Chinese / Indian', 4.2, 'Odense', '중식·인디안.', 'Chinese and Indian.', { reviewCount: 380 }),

  // —— aalborg ——
  place('aalborg-asian-1', 'aalborg', 'asian', 'Asian / Thai locals', 4.2, 'Aalborg', '태국·아시안.', 'Thai and Asian.', { reviewCount: 420 }),
  place('aalborg-asian-2', 'aalborg', 'asian', 'Sushi / Japanese', 4.2, 'Aalborg', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 380 }),
  place('aalborg-asian-3', 'aalborg', 'asian', 'Chinese / Indian', 4.2, 'Aalborg', '중식·인디안.', 'Chinese and Indian.', { reviewCount: 360 }),

  // —— roskilde ——
  place('roskilde-asian-1', 'roskilde', 'asian', 'Asian menu restaurants', 4.1, 'Roskilde', '아시안 메뉴 식당.', 'Restaurants with Asian menus.', { reviewCount: 250 }),
  place('roskilde-asian-2', 'roskilde', 'asian', 'Copenhagen Asian day trip', 4.3, 'Copenhagen', '코펜하겐 아시안 데이트립.', 'Copenhagen Asian day trip.', { reviewCount: 800 }),
  place('roskilde-asian-3', 'roskilde', 'asian', 'Thai / sushi regional', 4.1, 'Zealand', '권역 태국·스시.', 'Regional Thai and sushi.', { reviewCount: 220 }),

  // —— at / hu / cz ——
  place('vienna-asian-1', 'vienna', 'asian', 'Tian Bistro / Asian peers', 4.4, 'Vienna', '아시안 인플루언스 다이닝.', 'Asian-influenced dining.', { reviewCount: 900 }),
  place('vienna-asian-2', 'vienna', 'asian', 'Takumi / ramen Vienna', 4.5, 'Vienna', '라멘.', 'Ramen.', { reviewCount: 1600 }),
  place('vienna-asian-3', 'vienna', 'asian', 'Thai / Vietnamese Vienna', 4.3, 'Vienna', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 1200 }),
  place('salzburg-asian-1', 'salzburg', 'asian', 'Asian / Thai Salzburg', 4.3, 'Salzburg', '태국·아시안.', 'Thai and Asian.', { reviewCount: 700 }),
  place('salzburg-asian-2', 'salzburg', 'asian', 'Sushi Salzburg', 4.2, 'Salzburg', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 600 }),
  place('salzburg-asian-3', 'salzburg', 'asian', 'Chinese Salzburg', 4.2, 'Salzburg', '중식.', 'Chinese.', { reviewCount: 550 }),
  place('innsbruck-asian-1', 'innsbruck', 'asian', 'Asian / Thai Innsbruck', 4.3, 'Innsbruck', '태국·아시안.', 'Thai and Asian.', { reviewCount: 600 }),
  place('innsbruck-asian-2', 'innsbruck', 'asian', 'Sushi Innsbruck', 4.2, 'Innsbruck', '스시.', 'Sushi.', { reviewCount: 500 }),
  place('innsbruck-asian-3', 'innsbruck', 'asian', 'Indian / Chinese Innsbruck', 4.2, 'Innsbruck', '인디안·중식.', 'Indian and Chinese.', { reviewCount: 480 }),
  place('graz-asian-1', 'graz', 'asian', 'Asian / Thai Graz', 4.3, 'Graz', '태국·아시안.', 'Thai and Asian.', { reviewCount: 650 }),
  place('graz-asian-2', 'graz', 'asian', 'Sushi Graz', 4.2, 'Graz', '스시.', 'Sushi.', { reviewCount: 520 }),
  place('graz-asian-3', 'graz', 'asian', 'Vietnamese Graz', 4.3, 'Graz', '베트남.', 'Vietnamese.', { reviewCount: 580 }),
  place('hallstatt-asian-1', 'hallstatt', 'asian', 'Hotel restaurants Asian options', 4.1, 'Hallstatt', '호텔 아시안 메뉴.', 'Hotel Asian options.', { reviewCount: 250 }),
  place('hallstatt-asian-2', 'hallstatt', 'asian', 'Salzburg Asian day trip', 4.2, 'Salzburg', '잘츠부르크 아시안.', 'Salzburg Asian day trip.', { reviewCount: 500 }),
  place('hallstatt-asian-3', 'hallstatt', 'asian', 'Thai / sushi regional', 4.1, 'Salzkammergut', '권역 태국·스시.', 'Regional Thai and sushi.', { reviewCount: 220 }),
  place('budapest-asian-1', 'budapest', 'asian', 'Kishoi / Asian Budapest', 4.4, 'Budapest', '아시안 다이닝.', 'Asian dining.', { reviewCount: 1100 }),
  place('budapest-asian-2', 'budapest', 'asian', 'Sushisamba peers / sushi Budapest', 4.3, 'Budapest', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 1400 }),
  place('budapest-asian-3', 'budapest', 'asian', 'Thai / Vietnamese Budapest', 4.3, 'Budapest', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 1200 }),
  place('debrecen-asian-1', 'debrecen', 'asian', 'Asian / Chinese Debrecen', 4.2, 'Debrecen', '중식·아시안.', 'Chinese and Asian.', { reviewCount: 450 }),
  place('debrecen-asian-2', 'debrecen', 'asian', 'Sushi Debrecen', 4.2, 'Debrecen', '스시.', 'Sushi.', { reviewCount: 380 }),
  place('debrecen-asian-3', 'debrecen', 'asian', 'Thai Debrecen', 4.2, 'Debrecen', '태국.', 'Thai.', { reviewCount: 360 }),
  place('pecs-asian-1', 'pecs', 'asian', 'Asian / Chinese Pécs', 4.2, 'Pécs', '중식·아시안.', 'Chinese and Asian.', { reviewCount: 400 }),
  place('pecs-asian-2', 'pecs', 'asian', 'Sushi Pécs', 4.2, 'Pécs', '스시.', 'Sushi.', { reviewCount: 340 }),
  place('pecs-asian-3', 'pecs', 'asian', 'Thai Pécs', 4.2, 'Pécs', '태국.', 'Thai.', { reviewCount: 320 }),
  place('szeged-asian-1', 'szeged', 'asian', 'Asian / Chinese Szeged', 4.2, 'Szeged', '중식·아시안.', 'Chinese and Asian.', { reviewCount: 420 }),
  place('szeged-asian-2', 'szeged', 'asian', 'Sushi Szeged', 4.2, 'Szeged', '스시.', 'Sushi.', { reviewCount: 350 }),
  place('szeged-asian-3', 'szeged', 'asian', 'Thai Szeged', 4.2, 'Szeged', '태국.', 'Thai.', { reviewCount: 330 }),
  place('eger-asian-1', 'eger', 'asian', 'Asian menu restaurants Eger', 4.1, 'Eger', '아시안 메뉴.', 'Asian menus.', { reviewCount: 280 }),
  place('eger-asian-2', 'eger', 'asian', 'Sushi / Chinese Eger', 4.2, 'Eger', '스시·중식.', 'Sushi and Chinese.', { reviewCount: 300 }),
  place('eger-asian-3', 'eger', 'asian', 'Budapest Asian day trip', 4.3, 'Budapest', '수도 아시안 데이트립.', 'Capital Asian day trip.', { reviewCount: 600 }),
  place('prague-asian-1', 'prague', 'asian', 'Sansho / Asian Prague', 4.5, 'Prague', '아시안 퓨전.', 'Asian fusion.', { reviewCount: 1600 }),
  place('prague-asian-2', 'prague', 'asian', 'Nasushi / ramen Prague', 4.4, 'Prague', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 1800 }),
  place('prague-asian-3', 'prague', 'asian', 'Thai / Vietnamese Prague', 4.3, 'Prague', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 1400 }),
  place('brno-asian-1', 'brno', 'asian', 'Asian / Thai Brno', 4.3, 'Brno', '태국·아시안.', 'Thai and Asian.', { reviewCount: 700 }),
  place('brno-asian-2', 'brno', 'asian', 'Sushi Brno', 4.2, 'Brno', '스시.', 'Sushi.', { reviewCount: 600 }),
  place('brno-asian-3', 'brno', 'asian', 'Vietnamese Brno', 4.3, 'Brno', '베트남.', 'Vietnamese.', { reviewCount: 750 }),
  place('cesky-krumlov-asian-1', 'cesky-krumlov', 'asian', 'Asian menu restaurants', 4.1, 'Český Krumlov', '아시안 메뉴.', 'Asian menus.', { reviewCount: 300 }),
  place('cesky-krumlov-asian-2', 'cesky-krumlov', 'asian', 'Thai / Chinese Krumlov', 4.2, 'Český Krumlov', '태국·중식.', 'Thai and Chinese.', { reviewCount: 320 }),
  place('cesky-krumlov-asian-3', 'cesky-krumlov', 'asian', 'Prague Asian day trip', 4.3, 'Prague', '프라하 아시안.', 'Prague Asian day trip.', { reviewCount: 700 }),
  place('karlovy-vary-asian-1', 'karlovy-vary', 'asian', 'Asian / Chinese Karlovy Vary', 4.2, 'Karlovy Vary', '중식·아시안.', 'Chinese and Asian.', { reviewCount: 450 }),
  place('karlovy-vary-asian-2', 'karlovy-vary', 'asian', 'Sushi Karlovy Vary', 4.2, 'Karlovy Vary', '스시.', 'Sushi.', { reviewCount: 380 }),
  place('karlovy-vary-asian-3', 'karlovy-vary', 'asian', 'Thai Karlovy Vary', 4.2, 'Karlovy Vary', '태국.', 'Thai.', { reviewCount: 360 }),
  place('ceske-budejovice-asian-1', 'ceske-budejovice', 'asian', 'Asian / Chinese České Budějovice', 4.2, 'České Budějovice', '중식·아시안.', 'Chinese and Asian.', { reviewCount: 420 }),
  place('ceske-budejovice-asian-2', 'ceske-budejovice', 'asian', 'Sushi České Budějovice', 4.2, 'České Budějovice', '스시.', 'Sushi.', { reviewCount: 360 }),
  place('ceske-budejovice-asian-3', 'ceske-budejovice', 'asian', 'Thai / Vietnamese', 4.2, 'České Budějovice', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 340 }),

  // —— fr / ch / de / it ——
  place('paris-asian-1', 'paris', 'asian', 'Asian dining Paris', 4.3, 'Paris', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('paris-asian-2', 'paris', 'asian', 'Sushi / ramen Paris', 4.3, 'Paris', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('paris-asian-3', 'paris', 'asian', 'Thai / Vietnamese Paris', 4.2, 'Paris', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('lyon-asian-1', 'lyon', 'asian', 'Asian dining Lyon', 4.3, 'Lyon', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('lyon-asian-2', 'lyon', 'asian', 'Sushi / ramen Lyon', 4.3, 'Lyon', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('lyon-asian-3', 'lyon', 'asian', 'Thai / Vietnamese Lyon', 4.2, 'Lyon', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('marseille-asian-1', 'marseille', 'asian', 'Asian dining Marseille', 4.3, 'Marseille', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('marseille-asian-2', 'marseille', 'asian', 'Sushi / ramen Marseille', 4.3, 'Marseille', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('marseille-asian-3', 'marseille', 'asian', 'Thai / Vietnamese Marseille', 4.2, 'Marseille', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('nice-asian-1', 'nice', 'asian', 'Asian dining Nice', 4.3, 'Nice', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('nice-asian-2', 'nice', 'asian', 'Sushi / ramen Nice', 4.3, 'Nice', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('nice-asian-3', 'nice', 'asian', 'Thai / Vietnamese Nice', 4.2, 'Nice', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('bordeaux-asian-1', 'bordeaux', 'asian', 'Asian dining Bordeaux', 4.3, 'Bordeaux', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('bordeaux-asian-2', 'bordeaux', 'asian', 'Sushi / ramen Bordeaux', 4.3, 'Bordeaux', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('bordeaux-asian-3', 'bordeaux', 'asian', 'Thai / Vietnamese Bordeaux', 4.2, 'Bordeaux', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('zurich-asian-1', 'zurich', 'asian', 'Asian dining Zurich', 4.3, 'Zurich', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('zurich-asian-2', 'zurich', 'asian', 'Sushi / ramen Zurich', 4.3, 'Zurich', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('zurich-asian-3', 'zurich', 'asian', 'Thai / Vietnamese Zurich', 4.2, 'Zurich', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('geneva-asian-1', 'geneva', 'asian', 'Asian dining Geneva', 4.3, 'Geneva', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('geneva-asian-2', 'geneva', 'asian', 'Sushi / ramen Geneva', 4.3, 'Geneva', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('geneva-asian-3', 'geneva', 'asian', 'Thai / Vietnamese Geneva', 4.2, 'Geneva', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('bern-asian-1', 'bern', 'asian', 'Asian dining Bern', 4.3, 'Bern', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('bern-asian-2', 'bern', 'asian', 'Sushi / ramen Bern', 4.3, 'Bern', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('bern-asian-3', 'bern', 'asian', 'Thai / Vietnamese Bern', 4.2, 'Bern', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('lucerne-asian-1', 'lucerne', 'asian', 'Asian dining Lucerne', 4.3, 'Lucerne', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('lucerne-asian-2', 'lucerne', 'asian', 'Sushi / ramen Lucerne', 4.3, 'Lucerne', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('lucerne-asian-3', 'lucerne', 'asian', 'Thai / Vietnamese Lucerne', 4.2, 'Lucerne', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('interlaken-asian-1', 'interlaken', 'asian', 'Asian dining Interlaken', 4.3, 'Interlaken', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('interlaken-asian-2', 'interlaken', 'asian', 'Sushi / ramen Interlaken', 4.3, 'Interlaken', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('interlaken-asian-3', 'interlaken', 'asian', 'Thai / Vietnamese Interlaken', 4.2, 'Interlaken', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('berlin-asian-1', 'berlin', 'asian', 'Asian dining Berlin', 4.3, 'Berlin', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('berlin-asian-2', 'berlin', 'asian', 'Sushi / ramen Berlin', 4.3, 'Berlin', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('berlin-asian-3', 'berlin', 'asian', 'Thai / Vietnamese Berlin', 4.2, 'Berlin', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('munich-asian-1', 'munich', 'asian', 'Asian dining Munich', 4.3, 'Munich', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('munich-asian-2', 'munich', 'asian', 'Sushi / ramen Munich', 4.3, 'Munich', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('munich-asian-3', 'munich', 'asian', 'Thai / Vietnamese Munich', 4.2, 'Munich', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('hamburg-asian-1', 'hamburg', 'asian', 'Asian dining Hamburg', 4.3, 'Hamburg', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('hamburg-asian-2', 'hamburg', 'asian', 'Sushi / ramen Hamburg', 4.3, 'Hamburg', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('hamburg-asian-3', 'hamburg', 'asian', 'Thai / Vietnamese Hamburg', 4.2, 'Hamburg', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('cologne-asian-1', 'cologne', 'asian', 'Asian dining Cologne', 4.3, 'Cologne', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('cologne-asian-2', 'cologne', 'asian', 'Sushi / ramen Cologne', 4.3, 'Cologne', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('cologne-asian-3', 'cologne', 'asian', 'Thai / Vietnamese Cologne', 4.2, 'Cologne', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('frankfurt-asian-1', 'frankfurt', 'asian', 'Asian dining Frankfurt', 4.3, 'Frankfurt', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('frankfurt-asian-2', 'frankfurt', 'asian', 'Sushi / ramen Frankfurt', 4.3, 'Frankfurt', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('frankfurt-asian-3', 'frankfurt', 'asian', 'Thai / Vietnamese Frankfurt', 4.2, 'Frankfurt', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('rome-asian-1', 'rome', 'asian', 'Asian dining Rome', 4.3, 'Rome', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('rome-asian-2', 'rome', 'asian', 'Sushi / ramen Rome', 4.3, 'Rome', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('rome-asian-3', 'rome', 'asian', 'Thai / Vietnamese Rome', 4.2, 'Rome', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('milan-asian-1', 'milan', 'asian', 'Asian dining Milan', 4.3, 'Milan', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('milan-asian-2', 'milan', 'asian', 'Sushi / ramen Milan', 4.3, 'Milan', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('milan-asian-3', 'milan', 'asian', 'Thai / Vietnamese Milan', 4.2, 'Milan', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('florence-asian-1', 'florence', 'asian', 'Asian dining Florence', 4.3, 'Florence', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('florence-asian-2', 'florence', 'asian', 'Sushi / ramen Florence', 4.3, 'Florence', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('florence-asian-3', 'florence', 'asian', 'Thai / Vietnamese Florence', 4.2, 'Florence', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('venice-asian-1', 'venice', 'asian', 'Asian dining Venice', 4.3, 'Venice', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('venice-asian-2', 'venice', 'asian', 'Sushi / ramen Venice', 4.3, 'Venice', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('venice-asian-3', 'venice', 'asian', 'Thai / Vietnamese Venice', 4.2, 'Venice', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),
  place('naples-asian-1', 'naples', 'asian', 'Asian dining Naples', 4.3, 'Naples', '아시안 다이닝.', 'Asian dining.', { reviewCount: 800 }),
  place('naples-asian-2', 'naples', 'asian', 'Sushi / ramen Naples', 4.3, 'Naples', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 700 }),
  place('naples-asian-3', 'naples', 'asian', 'Thai / Vietnamese Naples', 4.2, 'Naples', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 650 }),

  // —— fr/ch/de/it city extras ——
  place('strasbourg-asian-1', 'strasbourg', 'asian', 'Asian dining Strasbourg', 4.3, 'Strasbourg', '아시안 다이닝.', 'Asian dining.', { reviewCount: 700 }),
  place('strasbourg-asian-2', 'strasbourg', 'asian', 'Sushi / ramen Strasbourg', 4.3, 'Strasbourg', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 600 }),
  place('strasbourg-asian-3', 'strasbourg', 'asian', 'Thai / Vietnamese Strasbourg', 4.2, 'Strasbourg', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 550 }),
  place('annecy-asian-1', 'annecy', 'asian', 'Asian dining Annecy', 4.3, 'Annecy', '아시안 다이닝.', 'Asian dining.', { reviewCount: 700 }),
  place('annecy-asian-2', 'annecy', 'asian', 'Sushi / ramen Annecy', 4.3, 'Annecy', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 600 }),
  place('annecy-asian-3', 'annecy', 'asian', 'Thai / Vietnamese Annecy', 4.2, 'Annecy', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 550 }),
  place('avignon-asian-1', 'avignon', 'asian', 'Asian dining Avignon', 4.3, 'Avignon', '아시안 다이닝.', 'Asian dining.', { reviewCount: 700 }),
  place('avignon-asian-2', 'avignon', 'asian', 'Sushi / ramen Avignon', 4.3, 'Avignon', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 600 }),
  place('avignon-asian-3', 'avignon', 'asian', 'Thai / Vietnamese Avignon', 4.2, 'Avignon', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 550 }),
  place('basel-asian-1', 'basel', 'asian', 'Asian dining Basel', 4.3, 'Basel', '아시안 다이닝.', 'Asian dining.', { reviewCount: 700 }),
  place('basel-asian-2', 'basel', 'asian', 'Sushi / ramen Basel', 4.3, 'Basel', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 600 }),
  place('basel-asian-3', 'basel', 'asian', 'Thai / Vietnamese Basel', 4.2, 'Basel', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 550 }),
  place('zermatt-asian-1', 'zermatt', 'asian', 'Asian dining Zermatt', 4.3, 'Zermatt', '아시안 다이닝.', 'Asian dining.', { reviewCount: 700 }),
  place('zermatt-asian-2', 'zermatt', 'asian', 'Sushi / ramen Zermatt', 4.3, 'Zermatt', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 600 }),
  place('zermatt-asian-3', 'zermatt', 'asian', 'Thai / Vietnamese Zermatt', 4.2, 'Zermatt', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 550 }),
  place('lausanne-asian-1', 'lausanne', 'asian', 'Asian dining Lausanne', 4.3, 'Lausanne', '아시안 다이닝.', 'Asian dining.', { reviewCount: 700 }),
  place('lausanne-asian-2', 'lausanne', 'asian', 'Sushi / ramen Lausanne', 4.3, 'Lausanne', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 600 }),
  place('lausanne-asian-3', 'lausanne', 'asian', 'Thai / Vietnamese Lausanne', 4.2, 'Lausanne', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 550 }),
  place('dresden-asian-1', 'dresden', 'asian', 'Asian dining Dresden', 4.3, 'Dresden', '아시안 다이닝.', 'Asian dining.', { reviewCount: 700 }),
  place('dresden-asian-2', 'dresden', 'asian', 'Sushi / ramen Dresden', 4.3, 'Dresden', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 600 }),
  place('dresden-asian-3', 'dresden', 'asian', 'Thai / Vietnamese Dresden', 4.2, 'Dresden', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 550 }),
  place('heidelberg-asian-1', 'heidelberg', 'asian', 'Asian dining Heidelberg', 4.3, 'Heidelberg', '아시안 다이닝.', 'Asian dining.', { reviewCount: 700 }),
  place('heidelberg-asian-2', 'heidelberg', 'asian', 'Sushi / ramen Heidelberg', 4.3, 'Heidelberg', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 600 }),
  place('heidelberg-asian-3', 'heidelberg', 'asian', 'Thai / Vietnamese Heidelberg', 4.2, 'Heidelberg', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 550 }),
  place('nuremberg-asian-1', 'nuremberg', 'asian', 'Asian dining Nuremberg', 4.3, 'Nuremberg', '아시안 다이닝.', 'Asian dining.', { reviewCount: 700 }),
  place('nuremberg-asian-2', 'nuremberg', 'asian', 'Sushi / ramen Nuremberg', 4.3, 'Nuremberg', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 600 }),
  place('nuremberg-asian-3', 'nuremberg', 'asian', 'Thai / Vietnamese Nuremberg', 4.2, 'Nuremberg', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 550 }),
  place('bologna-asian-1', 'bologna', 'asian', 'Asian dining Bologna', 4.3, 'Bologna', '아시안 다이닝.', 'Asian dining.', { reviewCount: 700 }),
  place('bologna-asian-2', 'bologna', 'asian', 'Sushi / ramen Bologna', 4.3, 'Bologna', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 600 }),
  place('bologna-asian-3', 'bologna', 'asian', 'Thai / Vietnamese Bologna', 4.2, 'Bologna', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 550 }),
  place('verona-asian-1', 'verona', 'asian', 'Asian dining Verona', 4.3, 'Verona', '아시안 다이닝.', 'Asian dining.', { reviewCount: 700 }),
  place('verona-asian-2', 'verona', 'asian', 'Sushi / ramen Verona', 4.3, 'Verona', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 600 }),
  place('verona-asian-3', 'verona', 'asian', 'Thai / Vietnamese Verona', 4.2, 'Verona', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 550 }),
  place('turin-asian-1', 'turin', 'asian', 'Asian dining Turin', 4.3, 'Turin', '아시안 다이닝.', 'Asian dining.', { reviewCount: 700 }),
  place('turin-asian-2', 'turin', 'asian', 'Sushi / ramen Turin', 4.3, 'Turin', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 600 }),
  place('turin-asian-3', 'turin', 'asian', 'Thai / Vietnamese Turin', 4.2, 'Turin', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 550 }),

  // —— fr/ch/de/it city batch2 ——
  place('toulouse-asian-1', 'toulouse', 'asian', 'Asian dining Toulouse', 4.3, 'Toulouse', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('toulouse-asian-2', 'toulouse', 'asian', 'Sushi / ramen Toulouse', 4.3, 'Toulouse', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('toulouse-asian-3', 'toulouse', 'asian', 'Thai / Vietnamese Toulouse', 4.2, 'Toulouse', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('montpellier-asian-1', 'montpellier', 'asian', 'Asian dining Montpellier', 4.3, 'Montpellier', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('montpellier-asian-2', 'montpellier', 'asian', 'Sushi / ramen Montpellier', 4.3, 'Montpellier', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('montpellier-asian-3', 'montpellier', 'asian', 'Thai / Vietnamese Montpellier', 4.2, 'Montpellier', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('dijon-asian-1', 'dijon', 'asian', 'Asian dining Dijon', 4.3, 'Dijon', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('dijon-asian-2', 'dijon', 'asian', 'Sushi / ramen Dijon', 4.3, 'Dijon', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('dijon-asian-3', 'dijon', 'asian', 'Thai / Vietnamese Dijon', 4.2, 'Dijon', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('chamonix-asian-1', 'chamonix', 'asian', 'Asian dining Chamonix', 4.3, 'Chamonix', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('chamonix-asian-2', 'chamonix', 'asian', 'Sushi / ramen Chamonix', 4.3, 'Chamonix', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('chamonix-asian-3', 'chamonix', 'asian', 'Thai / Vietnamese Chamonix', 4.2, 'Chamonix', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('lugano-asian-1', 'lugano', 'asian', 'Asian dining Lugano', 4.3, 'Lugano', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('lugano-asian-2', 'lugano', 'asian', 'Sushi / ramen Lugano', 4.3, 'Lugano', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('lugano-asian-3', 'lugano', 'asian', 'Thai / Vietnamese Lugano', 4.2, 'Lugano', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('montreux-asian-1', 'montreux', 'asian', 'Asian dining Montreux', 4.3, 'Montreux', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('montreux-asian-2', 'montreux', 'asian', 'Sushi / ramen Montreux', 4.3, 'Montreux', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('montreux-asian-3', 'montreux', 'asian', 'Thai / Vietnamese Montreux', 4.2, 'Montreux', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('grindelwald-asian-1', 'grindelwald', 'asian', 'Asian dining Grindelwald', 4.3, 'Grindelwald', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('grindelwald-asian-2', 'grindelwald', 'asian', 'Sushi / ramen Grindelwald', 4.3, 'Grindelwald', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('grindelwald-asian-3', 'grindelwald', 'asian', 'Thai / Vietnamese Grindelwald', 4.2, 'Grindelwald', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('st-moritz-asian-1', 'st-moritz', 'asian', 'Asian dining St. Moritz', 4.3, 'St. Moritz', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('st-moritz-asian-2', 'st-moritz', 'asian', 'Sushi / ramen St. Moritz', 4.3, 'St. Moritz', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('st-moritz-asian-3', 'st-moritz', 'asian', 'Thai / Vietnamese St. Moritz', 4.2, 'St. Moritz', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('stuttgart-asian-1', 'stuttgart', 'asian', 'Asian dining Stuttgart', 4.3, 'Stuttgart', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('stuttgart-asian-2', 'stuttgart', 'asian', 'Sushi / ramen Stuttgart', 4.3, 'Stuttgart', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('stuttgart-asian-3', 'stuttgart', 'asian', 'Thai / Vietnamese Stuttgart', 4.2, 'Stuttgart', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('leipzig-asian-1', 'leipzig', 'asian', 'Asian dining Leipzig', 4.3, 'Leipzig', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('leipzig-asian-2', 'leipzig', 'asian', 'Sushi / ramen Leipzig', 4.3, 'Leipzig', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('leipzig-asian-3', 'leipzig', 'asian', 'Thai / Vietnamese Leipzig', 4.2, 'Leipzig', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('rothenburg-asian-1', 'rothenburg', 'asian', 'Asian dining Rothenburg ob der Tauber', 4.3, 'Rothenburg ob der Tauber', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('rothenburg-asian-2', 'rothenburg', 'asian', 'Sushi / ramen Rothenburg ob der Tauber', 4.3, 'Rothenburg ob der Tauber', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('rothenburg-asian-3', 'rothenburg', 'asian', 'Thai / Vietnamese Rothenburg ob der Tauber', 4.2, 'Rothenburg ob der Tauber', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('potsdam-asian-1', 'potsdam', 'asian', 'Asian dining Potsdam', 4.3, 'Potsdam', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('potsdam-asian-2', 'potsdam', 'asian', 'Sushi / ramen Potsdam', 4.3, 'Potsdam', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('potsdam-asian-3', 'potsdam', 'asian', 'Thai / Vietnamese Potsdam', 4.2, 'Potsdam', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('amalfi-asian-1', 'amalfi', 'asian', 'Asian dining Amalfi', 4.3, 'Amalfi', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('amalfi-asian-2', 'amalfi', 'asian', 'Sushi / ramen Amalfi', 4.3, 'Amalfi', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('amalfi-asian-3', 'amalfi', 'asian', 'Thai / Vietnamese Amalfi', 4.2, 'Amalfi', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('siena-asian-1', 'siena', 'asian', 'Asian dining Siena', 4.3, 'Siena', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('siena-asian-2', 'siena', 'asian', 'Sushi / ramen Siena', 4.3, 'Siena', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('siena-asian-3', 'siena', 'asian', 'Thai / Vietnamese Siena', 4.2, 'Siena', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('genoa-asian-1', 'genoa', 'asian', 'Asian dining Genoa', 4.3, 'Genoa', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('genoa-asian-2', 'genoa', 'asian', 'Sushi / ramen Genoa', 4.3, 'Genoa', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('genoa-asian-3', 'genoa', 'asian', 'Thai / Vietnamese Genoa', 4.2, 'Genoa', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
  place('palermo-asian-1', 'palermo', 'asian', 'Asian dining Palermo', 4.3, 'Palermo', '아시안 다이닝.', 'Asian dining.', { reviewCount: 600 }),
  place('palermo-asian-2', 'palermo', 'asian', 'Sushi / ramen Palermo', 4.3, 'Palermo', '스시·라멘.', 'Sushi and ramen.', { reviewCount: 500 }),
  place('palermo-asian-3', 'palermo', 'asian', 'Thai / Vietnamese Palermo', 4.2, 'Palermo', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 480 }),
]
