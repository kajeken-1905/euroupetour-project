import { place } from './placeFactory'
import type { Place } from '../types'

// Moscow bakeries and Korean places from the T—Zh (t-j.ru) lists of April 2026; cafés from Afisha Daily
// (2023) rechecked against Restoclub and KudaGo; restaurants against their own websites. St Petersburg, Khabarovsk and
// Vladivostok restaurants from the WHERETOEAT rankings reported by Snob (Northwest 2024, International 2026,
// Far East 2026), with addresses from each restaurant's own website.
export const placesRUExtra: Place[] = [
  // —— moscow ——
  place('moscow-fine_dining-1', 'moscow', 'fine_dining', 'Café Pushkin', 'Tverskoy Bulvar 26A, Moscow', '트베르스코이 거리의 19세기 귀족 저택처럼 꾸민 러시아 요리 레스토랑.', 'Russian restaurant on Tverskoy Boulevard, styled as a 19th-century aristocratic mansion.'),
  place('moscow-fine_dining-2', 'moscow', 'fine_dining', 'White Rabbit', 'Smolenskaya Square 3, 16th floor (Smolensky Passage), Moscow', '스몰렌스키 파사주 16층 레스토랑. 블라디미르 무힌 셰프가 옛 러시아 요리를 현대식으로 냅니다.', 'Sixteenth-floor restaurant in Smolensky Passage where chef Vladimir Mukhin reworks old Russian cooking.'),
  place('moscow-fine_dining-3', 'moscow', 'fine_dining', 'Dr. Zhivago', 'Mokhovaya St 15/1, Hotel National, Moscow', '크렘린 맞은편 나치오날 호텔 1층의 러시아 요리 카페.', 'Russian café on the ground floor of the Hotel National, across from the Kremlin.'),

  place('moscow-bakery-1', 'moscow', 'bakery', 'Masa Madre', 'Solyanka St 1/2 bldg 1, Moscow', '빵과 시나몬 멍키 브레드, 바스크 치즈케이크로 알려진 베이커리.', 'Bakery known for its bread, cinnamon monkey bread and Basque cheesecake.'),
  place('moscow-bakery-2', 'moscow', 'bakery', 'Pechorin', 'Shabolovka St 19, Moscow', '여러 종류의 수제 빵과 점심 메뉴를 내는 베이커리.', 'Bakery with many kinds of artisan bread and full lunches.'),
  place('moscow-bakery-3', 'moscow', 'bakery', 'Bulka', 'Pokrovka St 19, Moscow', '갓 구운 빵과 작은 페이스트리를 파는 베이커리.', 'Bakery selling fresh bread and small pastries.'),
  place('moscow-bakery-4', 'moscow', 'bakery', 'La Poste', 'Myasnitskaya St 13 bldg 3, Moscow', '바게트와 카늘레 같은 프랑스식 빵을 굽는 베이커리.', 'French-style bakery for baguettes and canelés.'),

  place('moscow-cafe-1', 'moscow', 'cafe', 'YCP', 'Myasnitskaya St 13 bldg 24, Moscow', '게이샤 같은 희귀 원두를 내는 치스티예 프루디 근처 스페셜티 커피숍.', 'Specialty coffee bar near Chistye Prudy serving rare lots such as Gesha.'),
  place('moscow-cafe-2', 'moscow', 'cafe', 'Cream Soda', 'Myasnitskaya St 15, Moscow', '낮에는 스페셜티 커피, 저녁에는 사이더 칵테일 바가 되는 카페.', 'Specialty coffee by day, cider-cocktail bar by night.'),
  place('moscow-cafe-3', 'moscow', 'cafe', 'Erna', 'Bolshaya Polyanka St 44/2, Moscow', '북유럽풍 인테리어의 미니멀한 스페셜티 커피숍.', 'Minimalist specialty coffee shop with a Scandinavian interior.'),

  place('moscow-korean-1', 'moscow', 'korean', 'Белый журавль (White Crane)', 'Frunzenskaya Embankment 14, Moscow', '2000년부터 영업한 한식당. 테이블 불판에서 고기를 굽습니다.', 'Korean restaurant open since 2000, with grills set into the tables.'),
  place('moscow-korean-2', 'moscow', 'korean', 'Кимчи (Kimchi)', 'Stremyanny Pereulok 26, Moscow', '메뉴가 간단하고 값이 싼 한식 분식집.', 'Inexpensive Korean snack bar with a short menu.'),
  place('moscow-korean-3', 'moscow', 'korean', 'Hite', 'Ulitsa 1905 Goda 2 bldg 1, Moscow', '테이블에 불판이 있는 한국식 바비큐.', 'Korean barbecue with burners built into the tables.'),
  place('moscow-korean-4', 'moscow', 'korean', 'Kook', 'Petrovsky Bulvar 15 bldg 1, Moscow', '현대식 한국 길거리 음식을 내는 비스트로.', 'Bistro serving modern Korean street food.'),

  // —— saint-petersburg ——
  place('saint-petersburg-fine_dining-1', 'saint-petersburg', 'fine_dining', 'Palkin', 'Nevsky Prospekt 47, Saint Petersburg', '넵스키 대로의 러시아 요리 레스토랑. 에르미타주 전문가들이 실내 복원을 맡았습니다.', 'Russian restaurant on Nevsky Prospekt whose interiors were restored under Hermitage specialists.'),
  place('saint-petersburg-fine_dining-2', 'saint-petersburg', 'fine_dining', 'BoBo (Bourgeois Bohemians)', 'Vilensky Pereulok 15, Saint Petersburg', 'WHERETOEAT 2026 \'올해의 레스토랑\'. 아르툠 그레벤시코프 셰프가 이끄는 레스토랑입니다.', 'WHERETOEAT International 2026 restaurant of the year, led by chef Artyom Grebenshchikov.'),
  place('saint-petersburg-fine_dining-3', 'saint-petersburg', 'fine_dining', 'Frantsuza Bistrot', 'Admirala Lazareva Embankment 22, Saint Petersburg', '현대 프랑스 요리 비스트로. 파리의 알랭 뒤카스 밑에서 일한 이반 프롤루힌 셰프가 주방을 맡습니다.', 'Modern French bistro run by chef Ivan Frolukhin, who worked under Alain Ducasse in Paris.'),
  place('saint-petersburg-fine_dining-4', 'saint-petersburg', 'fine_dining', 'Harvest', 'Dobrolyubova Prospekt 11, Saint Petersburg', '\'수확\'이라는 이름처럼 채소를 주인공으로 하는 레스토랑.', 'Restaurant built around vegetables, as its name — “harvest” — suggests.'),
  place('saint-petersburg-fine_dining-5', 'saint-petersburg', 'fine_dining', 'La Biga', 'Gorokhovaya St 16/71, Saint Petersburg', '피자와 파스타를 내는 이탈리아 식당.', 'Italian restaurant for pizza and pasta.'),
  place('saint-petersburg-fine_dining-6', 'saint-petersburg', 'fine_dining', 'Inner', 'Pionerskaya St 31, Saint Petersburg', '페트로그라드 쪽의 유럽 요리 레스토랑. 2024년 \'올해의 셰프\' 알렉세이 알렉세예프의 식당입니다.', 'European restaurant on the Petrograd Side from Alexey Alekseev, 2024 chef of the year.'),

  place('saint-petersburg-cafe-1', 'saint-petersburg', 'cafe', 'René', 'Nevsky Prospekt 28, 2nd floor (Singer House), Saint Petersburg', '넵스키 대로 싱어 하우스(돔 크니기 서점) 2층의 카페. 러시아·프랑스 요리를 냅니다.', 'Café on the second floor of the Singer House bookshop on Nevsky Prospekt, with Russian and French cooking.'),

  // —— kazan ——
  place('kazan-fine_dining-1', 'kazan', 'fine_dining', 'Tatar by Tubatay', 'Shigabutdina Mardzhani St 4, Kazan', '크렘린 근처의 타타르 요리 레스토랑. 2주쯤 전에 예약이 차기도 합니다.', 'Tatar restaurant near the Kremlin; tables are often booked about two weeks ahead.'),
  place('kazan-fine_dining-2', 'kazan', 'fine_dining', 'Татарская усадьба (Tatar Estate)', 'Shigabutdina Mardzhani St 8, Kazan', '옛 타타르 마을 분위기의 호텔 레스토랑. 아주와 말고기 요리 같은 타타르 음식을 냅니다.', 'Hotel restaurant styled on the old Tatar quarter, serving Tatar dishes such as azu and braised horse meat.'),

  // —— vladivostok (Snob gastro guide, 14 Oct 2026) ——
  place('vladivostok-fine_dining-1', 'vladivostok', 'fine_dining', 'Улисс Азия (Ulysses Asia)', 'Naberezhnaya St 13, 14th floor (Burny complex), Vladivostok', '부르니 복합 건물 14층의 해산물 레스토랑. 아무르만이 내려다보입니다.', 'Seafood restaurant on the 14th floor of the Burny complex, looking over Amur Bay.'),
  place('vladivostok-fine_dining-2', 'vladivostok', 'fine_dining', 'Густо (Gusto)', 'GUM courtyard, Svetlanskaya St 35, Vladivostok', '굼 백화점 옛 안뜰의 가스트로바. 연해주 제철 식재료로 유럽식 요리를 냅니다.', 'Gastrobar in the old GUM courtyard serving European dishes with seasonal local produce.'),

  place('vladivostok-fine_dining-3', 'vladivostok', 'fine_dining', 'TiAMA', 'Laninsky Pereulok 4, Vladivostok', '연해주식으로 만든 이탈리아 요리 레스토랑. WHERETOEAT 극동 2026 5위.', 'Italian restaurant with a Primorye twist, fifth in WHERETOEAT Far East 2026.'),
  place('vladivostok-fine_dining-4', 'vladivostok', 'fine_dining', 'Супра (Supra)', 'Admirala Fokina St 1B, Vladivostok', '조지아 요리 레스토랑. 시내에 지점이 여러 곳 있습니다. WHERETOEAT 극동 2026 7위.', 'Georgian restaurant with several branches in the city, seventh in WHERETOEAT Far East 2026.'),

  // —— khabarovsk ——
  place('khabarovsk-fine_dining-1', 'khabarovsk', 'fine_dining', 'Амур (Amur)', 'Lenina St 29, Khabarovsk', '극동 요리 레스토랑. WHERETOEAT 극동 2026 2위, 아크바르혼 코디로프 셰프는 \'올해의 셰프\'에 뽑혔습니다.', 'Far Eastern restaurant, second in WHERETOEAT Far East 2026; chef Akbarkhon Kodirov was named chef of the year.'),
  place('khabarovsk-fine_dining-2', 'khabarovsk', 'fine_dining', 'Ruma', 'Pionerskaya St 2B, Khabarovsk', '범아시아 요리에 하바롭스크 지방 원주민 문화를 더한 레스토랑. WHERETOEAT 극동 2026 3위.', 'Pan-Asian restaurant drawing on the culture of the Khabarovsk region’s indigenous peoples, third in WHERETOEAT Far East 2026.'),
  place('khabarovsk-korean-1', 'khabarovsk', 'korean', 'Корея Хаус (Korea House)', 'Amursky Bulvar 2 (Hotel Intourist), Khabarovsk', '인투리스트 호텔 안의 한식당.', 'Korean restaurant in the Hotel Intourist.'),

  // —— irkutsk ——
  place('irkutsk-fine_dining-1', 'irkutsk', 'fine_dining', 'Охотников (Okhotnikov)', 'Yadrintseva St 1Zh (Hotel Zvezda), Irkutsk', '시베리아 생선과 사냥고기 요리를 내는 레스토랑. 노루 갈비가 대표 요리입니다.', 'Siberian restaurant for local fish and game; rack of roe deer is the signature dish.'),

  // —— suzdal ——
  place('suzdal-fine_dining-1', 'suzdal', 'fine_dining', 'Улей (Uley)', 'Pushkarskaya Sloboda, Lenina St 45, Suzdal', '푸시카르스카야 슬로보다 호텔 안의 큰 목조 건물 레스토랑. 제철 식재료로 러시아 요리를 냅니다.', 'Restaurant in a large timber building in the Pushkarskaya Sloboda hotel grounds, serving Russian dishes with seasonal produce.'),
]
