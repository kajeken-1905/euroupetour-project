#!/usr/bin/env python3
"""Generate TR / BG / RO / MC / VA / AD / LI catalog data and flag assets."""

from __future__ import annotations

from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"
FLAGS = ROOT / "public" / "flags"

EXPORT_NAMES = {
    "tr": "placesTRExtra",
    "bg": "placesBGExtra",
    "ro": "placesROExtra",
    "mc": "placesMCExtra",
    "va": "placesVAExtra",
    "ad": "placesADExtra",
    "li": "placesLIExtra",
}

GROUPS = {
    "tr": [
        "istanbul", "ankara", "izmir", "antalya",
        "goreme", "bursa", "trabzon", "pamukkale",
    ],
    "bg": ["sofia", "plovdiv", "varna", "veliko-tarnovo", "nessebar"],
    "ro": [
        "bucharest", "brasov", "sibiu", "sighisoara",
        "cluj-napoca", "timisoara",
    ],
    "mc": ["monaco", "monte-carlo"],
    "va": ["vatican-city"],
    "ad": ["andorra-la-vella", "pas-de-la-casa", "ordino"],
    "li": ["vaduz", "schaan", "malbun"],
}


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def highlight(city: str, n: int, ko: str, en: str, dko: str, den: str, query: str) -> str:
    q = quote(query)
    return f"""      {{
        id: "{city}-h{n}",
        name: {{ ko: "{ko}", en: "{en}" }},
        description: {{ ko: "{dko}", en: "{den}" }},
        image: "/highlights/{city}-{n}.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query={q}",
      }}"""


CITIES = [
    # —— Turkey ——
    {
        "id": "istanbul",
        "countryId": "tr",
        "ko": "이스탄불",
        "en": "Istanbul",
        "native": "İstanbul",
        "blurb_ko": "유럽과 아시아를 잇는 도시. 보스포러스·그랜드바자·모스크가 상징입니다.",
        "blurb_en": "Bridge of Europe and Asia—Bosphorus, Grand Bazaar, and mosques.",
        "highlights": [
            ("아야소피아", "Hagia Sophia", "비잔틴·오스만의 상징 건축입니다.", "Byzantine–Ottoman landmark.", "Hagia Sophia Istanbul"),
            ("블루 모스크", "Blue Mosque", "여섯 첨탑의 술탄아흐메트 모스크입니다.", "Sultanahmet Mosque with six minarets.", "Blue Mosque Istanbul"),
            ("그랜드 바자", "Grand Bazaar", "미로 같은 역사적 시장입니다.", "Historic covered market maze.", "Grand Bazaar Istanbul"),
            ("보스포러스 유람", "Bosphorus cruise", "두 대륙을 가르는 해협 유람입니다.", "Cruise the strait between continents.", "Bosphorus cruise Istanbul"),
            ("갈라타 타워", "Galata Tower", "구시가 전망의 중세 탑입니다.", "Medieval tower with old-town views.", "Galata Tower"),
        ],
    },
    {
        "id": "ankara",
        "countryId": "tr",
        "ko": "앙카라",
        "en": "Ankara",
        "native": "Ankara",
        "blurb_ko": "튀르키예 수도. 아낫카비르와 성채 구시가가 핵심입니다.",
        "blurb_en": "Turkish capital—Anıtkabir and the citadel old town.",
        "highlights": [
            ("아낫카비르", "Anıtkabir", "아타튀르크 영묘입니다.", "Mausoleum of Atatürk.", "Anıtkabir"),
            ("앙카라 성채", "Ankara Castle", "언덕 위 성채와 골목입니다.", "Hilltop citadel and lanes.", "Ankara Castle"),
            ("박물관의 거리", "Museum of Anatolian Civilizations", "히타이트 유물 박물관입니다.", "Hittite and Anatolian museum.", "Museum of Anatolian Civilizations"),
            ("쿨루글루 공원", "Kuğulu Park", "도심 호수 공원입니다.", "Central lake park.", "Kuğulu Park Ankara"),
            ("하만외뉘", "Hamamönü", "복원된 오스만 골목 지구입니다.", "Restored Ottoman quarter.", "Hamamönü Ankara"),
        ],
    },
    {
        "id": "izmir",
        "countryId": "tr",
        "ko": "이즈미르",
        "en": "İzmir",
        "native": "İzmir",
        "blurb_ko": "에게해 항구 도시. 콘삭과 에페소스 근교가 유명합니다.",
        "blurb_en": "Aegean port city—Kordon and nearby Ephesus.",
        "highlights": [
            ("콘삭 산책로", "Kordon", "해안 카페 산책로입니다.", "Waterfront café promenade.", "Kordon İzmir"),
            ("아고라", "Agora of Smyrna", "고대 스미르나 광장 유적입니다.", "Ancient Smyrna agora ruins.", "Agora of Smyrna"),
            ("시계탑", "İzmir Clock Tower", "콘삭 광장의 상징 시계탑입니다.", "Iconic clock tower on Konak Square.", "İzmir Clock Tower"),
            ("카디페칼레", "Kadifekale", "도시 전망의 언덕 요새입니다.", "Hill fortress with city views.", "Kadifekale"),
            ("에페소스 근교", "Ephesus day trip", "세계적 고대 유적 당일 여행입니다.", "World-famous ancient ruins nearby.", "Ephesus Turkey"),
        ],
    },
    {
        "id": "antalya",
        "countryId": "tr",
        "ko": "안탈리아",
        "en": "Antalya",
        "native": "Antalya",
        "blurb_ko": "터키 리비에라의 중심. 옛항구와 폭포·해변이 매력입니다.",
        "blurb_en": "Turkish Riviera hub—old harbour, waterfalls, and beaches.",
        "highlights": [
            ("칼레이치", "Kaleiçi", "성벽 안 옛항구 구시가입니다.", "Walled old harbour quarter.", "Kaleiçi Antalya"),
            ("두덴 폭포", "Düden Waterfalls", "도심·해안 폭포입니다.", "City and coastal waterfalls.", "Düden Waterfalls"),
            ("안탈리아 박물관", "Antalya Museum", "리키아·로마 유물 박물관입니다.", "Lycian and Roman museum.", "Antalya Museum"),
            ("라라·쿤두 해변", "Lara / Kundu beaches", "리조트 해변 지대입니다.", "Resort beach stretch.", "Lara Beach Antalya"),
            ("아스피도스 극장", "Aspendos Theatre", "근교 로마 극장 유적입니다.", "Nearby Roman theatre.", "Aspendos Theatre"),
        ],
    },
    {
        "id": "goreme",
        "countryId": "tr",
        "ko": "괴레메",
        "en": "Göreme",
        "native": "Göreme",
        "blurb_ko": "카파도키아의 심장. 열기구와 암굴 교회가 유명합니다.",
        "blurb_en": "Heart of Cappadocia—balloons and cave churches.",
        "highlights": [
            ("열기구", "Hot-air balloons", "일출 열기구 비행입니다.", "Sunrise balloon flights.", "Göreme balloon"),
            ("괴레메 야외박물관", "Göreme Open-Air Museum", "암굴 교회 단지입니다.", "Cave-church complex.", "Göreme Open-Air Museum"),
            ("연인 계곡", "Love Valley", "기암 기둥 하이킹입니다.", "Fairy-chimney hiking valley.", "Love Valley Cappadocia"),
            ("우치히사르", "Uçhisar Castle", "바위에 새긴 요새 전망입니다.", "Rock fortress viewpoint.", "Uçhisar Castle"),
            ("지하도시", "Kaymaklı / Derinkuyu", "근교 지하도시 탐방입니다.", "Nearby underground cities.", "Kaymaklı Underground City"),
        ],
    },
    {
        "id": "bursa",
        "countryId": "tr",
        "ko": "부르사",
        "en": "Bursa",
        "native": "Bursa",
        "blurb_ko": "오스만 초기 수도. 울루다그와 실크·케밥이 유명합니다.",
        "blurb_en": "Early Ottoman capital—Uludağ, silk, and kebab.",
        "highlights": [
            ("울루 자미", "Grand Mosque of Bursa", "20개 돔의 초기 오스만 모스크입니다.", "Early Ottoman mosque with 20 domes.", "Ulu Cami Bursa"),
            ("예실 튀르베", "Green Tomb", "녹색 타일 영묘입니다.", "Green-tiled mausoleum.", "Green Tomb Bursa"),
            ("쿨한·시장", "Koza Han / bazaars", "실크 한과 시장 골목입니다.", "Silk han and bazaar lanes.", "Koza Han Bursa"),
            ("울루다그", "Uludağ", "스키·하이킹 산입니다.", "Ski and hiking mountain.", "Uludağ"),
            ("쿠말르칼레 근교", "Cumalıkızık", "오스만 마을 골목입니다.", "Ottoman village lanes.", "Cumalıkızık"),
        ],
    },
    {
        "id": "trabzon",
        "countryId": "tr",
        "ko": "트라브존",
        "en": "Trabzon",
        "native": "Trabzon",
        "blurb_ko": "흑해 연안 도시. 수멜라 수도원과 산악 고원이 매력입니다.",
        "blurb_en": "Black Sea city—Sümela Monastery and highland plateaus.",
        "highlights": [
            ("수멜라 수도원", "Sümela Monastery", "절벽에 매달린 수도원입니다.", "Cliffside monastery.", "Sümela Monastery"),
            ("아야소피아 트라브존", "Hagia Sophia Trabzon", "흑해 연안 비잔틴 교회입니다.", "Black Sea Byzantine church.", "Hagia Sophia Trabzon"),
            ("우중쾰", "Uzungöl", "산속 호수 마을입니다.", "Mountain lake village.", "Uzungöl"),
            ("아타튀르크 별장", "Atatürk Mansion", "역사적 별장 박물관입니다.", "Historic mansion museum.", "Atatürk Mansion Trabzon"),
            ("보즈테페 전망", "Boztepe", "도시·흑해 전망 언덕입니다.", "Hill views over city and sea.", "Boztepe Trabzon"),
        ],
    },
    {
        "id": "pamukkale",
        "countryId": "tr",
        "ko": "파묵칼레",
        "en": "Pamukkale",
        "native": "Pamukkale",
        "blurb_ko": "하얀 석회 테라스의 마을. 히에라폴리스 유적이 함께합니다.",
        "blurb_en": "White travertine terraces with Hierapolis ruins.",
        "highlights": [
            ("석회 테라스", "Travertine terraces", "하얀 석회화 계단식 연못입니다.", "White travertine pools.", "Pamukkale terraces"),
            ("히에라폴리스", "Hierapolis", "고대 온천 도시 유적입니다.", "Ancient spa-city ruins.", "Hierapolis"),
            ("고대 극장", "Hierapolis Theatre", "언덕 위 로마 극장입니다.", "Hilltop Roman theatre.", "Hierapolis Theatre"),
            ("클레오파트라 풀", "Cleopatra’s Pool", "고대 기둥 속 온천 수영입니다.", "Thermal swim among columns.", "Cleopatra Pool Pamukkale"),
            ("카리스테이 박물관", "Hierapolis Archaeology Museum", "유적 유물 전시입니다.", "Site archaeology museum.", "Hierapolis Museum"),
        ],
    },
    # —— Bulgaria ——
    {
        "id": "sofia",
        "countryId": "bg",
        "ko": "소피아",
        "en": "Sofia",
        "native": "София",
        "blurb_ko": "불가리아 수도. 알렉산드르 네프스키 성당과 브이토샤가 상징입니다.",
        "blurb_en": "Bulgarian capital—Alexander Nevsky Cathedral and Vitosha.",
        "highlights": [
            ("알렉산드르 네프스키", "Alexander Nevsky Cathedral", "황금 돔의 정교회 대성당입니다.", "Golden-domed Orthodox cathedral.", "Alexander Nevsky Cathedral Sofia"),
            ("성 게오르기 로툰다", "St George Rotunda", "도심 로마 원형 교회입니다.", "Roman rotunda church downtown.", "St George Rotunda Sofia"),
            ("비토샤 Boulevard", "Vitosha Boulevard", "카페·쇼핑 메인 거리입니다.", "Main café and shopping street.", "Vitosha Boulevard"),
            ("보이아나 교회", "Boyana Church", "유네스코 중세 프레스코 교회입니다.", "UNESCO medieval fresco church.", "Boyana Church"),
            ("비토샤 산", "Vitosha Mountain", "도심 옆 하이킹·스키 산입니다.", "City-side hiking and ski mountain.", "Vitosha Mountain"),
        ],
    },
    {
        "id": "plovdiv",
        "countryId": "bg",
        "ko": "플로브디프",
        "en": "Plovdiv",
        "native": "Пловдив",
        "blurb_ko": "유럽 문화수도 출신 도시. 고대 극장과 구시가 언덕이 아름답습니다.",
        "blurb_en": "Ex-European Capital of Culture—ancient theatre and old hills.",
        "highlights": [
            ("고대 극장", "Ancient Theatre", "언덕 위 로마 극장입니다.", "Hilltop Roman theatre.", "Plovdiv Ancient Theatre"),
            ("구시가", "Old Town Plovdiv", "부흥기 가옥과 골목입니다.", "Revival houses and lanes.", "Plovdiv Old Town"),
            ("카판 지구", "Kapana", "예술·카페 창작 지구입니다.", "Arts and café creative quarter.", "Kapana Plovdiv"),
            ("로마 경기장", "Roman Stadium", "메인 거리 아래 로마 경기장입니다.", "Roman stadium under the main street.", "Roman Stadium Plovdiv"),
            ("네베트 테페", "Nebet Tepe", "고대 성채 전망 언덕입니다.", "Ancient fortress viewpoint.", "Nebet Tepe"),
        ],
    },
    {
        "id": "varna",
        "countryId": "bg",
        "ko": "바르나",
        "en": "Varna",
        "native": "Варна",
        "blurb_ko": "흑해 리조트 도시. 해변과 해군 정원·박물관이 매력입니다.",
        "blurb_en": "Black Sea resort city—beach, Sea Garden, and museums.",
        "highlights": [
            ("해군 정원", "Sea Garden", "해안 공원과 산책로입니다.", "Seaside park and promenade.", "Sea Garden Varna"),
            ("바르나 해변", "Varna Beach", "도심 옆 흑해 해변입니다.", "City beach on the Black Sea.", "Varna Beach"),
            ("바르나 고고학 박물관", "Varna Archaeological Museum", "세계 최고령 금 보물입니다.", "World’s oldest gold treasure.", "Varna Archaeological Museum"),
            ("성모 가정 대성당", "Dormition Cathedral", "도시 상징 정교회 성당입니다.", "City Orthodox cathedral.", "Dormition Cathedral Varna"),
            ("로마 목욕탕", "Roman Baths", "대규모 로마 목욕탕 유적입니다.", "Large Roman bath ruins.", "Roman Baths Varna"),
        ],
    },
    {
        "id": "veliko-tarnovo",
        "countryId": "bg",
        "ko": "벨리코터르노보",
        "en": "Veliko Tarnovo",
        "native": "Велико Търново",
        "blurb_ko": "중세 불가리아 수도. 차레베츠 요새와 얀트라 강이 인상적입니다.",
        "blurb_en": "Medieval Bulgarian capital—Tsarevets and the Yantra.",
        "highlights": [
            ("차레베츠", "Tsarevets Fortress", "언덕 위 중세 왕궁 요새입니다.", "Hilltop medieval royal fortress.", "Tsarevets Fortress"),
            ("삼보르나 거리", "Samovodska Charshiya", "장인 골목과 기념품 거리입니다.", "Craft lane and souvenir street.", "Samovodska Charshiya"),
            ("성 베사십사", "Church of St Forty Martyrs", "중세 왕조 교회입니다.", "Medieval royal church.", "Forty Martyrs Church Veliko Tarnovo"),
            ("아스네프 기념비", "Asenevtsi Monument", "강변 왕조 기념비입니다.", "Riverside dynasty monument.", "Asenevtsi Monument"),
            ("아르바나시", "Arbanasi", "근교 역사 마을입니다.", "Nearby historic village.", "Arbanasi"),
        ],
    },
    {
        "id": "nessebar",
        "countryId": "bg",
        "ko": "네세바르",
        "en": "Nesebar",
        "native": "Несебър",
        "blurb_ko": "흑해 반도의 유네스코 구시가. 교회 유적과 해변 리조트가 공존합니다.",
        "blurb_en": "UNESCO Black Sea peninsula—church ruins and beach resorts.",
        "highlights": [
            ("구시가 반도", "Old Nesebar", "성벽·교회가 있는 반도 마을입니다.", "Walled peninsula town of churches.", "Old Nesebar"),
            ("그리스 교회들", "Medieval churches", "붉은 벽돌 중세 교회군입니다.", "Red-brick medieval churches.", "Nesebar churches"),
            ("풍차", "Nesebar windmill", "반도 입구 상징 풍차입니다.", "Iconic windmill at the entrance.", "Nesebar windmill"),
            ("남해변", "South Beach", "리조트 해변입니다.", "Resort beach.", "Nesebar South Beach"),
            ("고고학 박물관", "Archaeological Museum", "트라키아·비잔틴 유물입니다.", "Thracian and Byzantine finds.", "Nesebar Archaeological Museum"),
        ],
    },
    # —— Romania ——
    {
        "id": "bucharest",
        "countryId": "ro",
        "ko": "부쿠레슈티",
        "en": "Bucharest",
        "native": "București",
        "blurb_ko": "루마니아 수도. 의회궁과 구시가·공원 문화가 공존합니다.",
        "blurb_en": "Romanian capital—Palace of Parliament, old town, and parks.",
        "highlights": [
            ("의회궁", "Palace of the Parliament", "세계 최대급 행정 건물입니다.", "One of the world’s largest administrative buildings.", "Palace of the Parliament"),
            ("구시가", "Old Town Lipscani", "바와 카페의 역사 지구입니다.", "Bars and cafés in the historic core.", "Lipscani Bucharest"),
            ("혁명광장", "Revolution Square", "현대사 중심 광장입니다.", "Square of modern history.", "Revolution Square Bucharest"),
            ("헤러스트러우 공원", "Herăstrău Park", "호수 공원과 산책로입니다.", "Lake park and promenades.", "Herăstrău Park"),
            ("아테네움", "Romanian Athenaeum", "돔형 콘서트홀입니다.", "Domed concert hall.", "Romanian Athenaeum"),
        ],
    },
    {
        "id": "brasov",
        "countryId": "ro",
        "ko": "브라쇼브",
        "en": "Brașov",
        "native": "Brașov",
        "blurb_ko": "카르파티아 산록 도시. 흑교회와 브란 성 접근이 쉽습니다.",
        "blurb_en": "Carpathian foothill city—Black Church and easy Bran access.",
        "highlights": [
            ("흑교회", "Black Church", "고딕 개신교 대교회입니다.", "Gothic Protestant church.", "Black Church Brașov"),
            ("의회광장", "Council Square", "색색 건물 중심 광장입니다.", "Colourful central square.", "Piața Sfatului"),
            ("탐파 산", "Tâmpa Mountain", "케이블카 전망 산입니다.", "Cable-car viewpoint mountain.", "Tâmpa Brașov"),
            ("브란 성", "Bran Castle", "근교 드라큘라 전설의 성입니다.", "Nearby castle of Dracula lore.", "Bran Castle"),
            ("로프노파크", "Rope street / Șchei", "좁은 골목과 성문 지구입니다.", "Narrow lanes and gate quarter.", "Șchei Brașov"),
        ],
    },
    {
        "id": "sibiu",
        "countryId": "ro",
        "ko": "시비우",
        "en": "Sibiu",
        "native": "Sibiu",
        "blurb_ko": "트란실바니아의 문화 도시. 눈동자 지붕과 대광장이 유명합니다.",
        "blurb_en": "Transylvanian culture city—eye roofs and grand squares.",
        "highlights": [
            ("대광장", "Grand Square", "시청과 바로크 광장입니다.", "Town hall and Baroque square.", "Piața Mare Sibiu"),
            ("소광장", "Little Square", "다리와 카페 광장입니다.", "Bridge and café square.", "Piața Mică Sibiu"),
            ("거짓말의 다리", "Bridge of Lies", "전설이 있는 철제 다리입니다.", "Iron bridge of local legend.", "Bridge of Lies Sibiu"),
            ("성벽 산책", "City walls", "중세 성벽 전망 산책입니다.", "Medieval wall walks.", "Sibiu city walls"),
            ("아스트라 박물관", "ASTRA Museum", "야외 민속 박물관입니다.", "Open-air ethnography museum.", "ASTRA Museum Sibiu"),
        ],
    },
    {
        "id": "sighisoara",
        "countryId": "ro",
        "ko": "시기쇼아라",
        "en": "Sighișoara",
        "native": "Sighișoara",
        "blurb_ko": "유네스코 성벽 마을. 시계탑과 블라드 생가가 상징입니다.",
        "blurb_en": "UNESCO walled town—clock tower and Vlad’s birthplace.",
        "highlights": [
            ("시계탑", "Clock Tower", "성벽 마을의 상징 탑입니다.", "Iconic tower of the citadel.", "Sighișoara Clock Tower"),
            ("성벽 구시가", "Citadel", "색색 가옥의 중세 성채입니다.", "Colourful medieval citadel.", "Sighișoara Citadel"),
            ("블라드 생가", "Vlad Dracul House", "블라드 3세 출생지로 전하는 집입니다.", "House linked to Vlad III’s birth.", "Vlad Dracul House"),
            ("덮개 계단", "Covered Stairway", "학교로 이어지는 나무 계단입니다.", "Wooden stairs to the school hill.", "Covered Stairway Sighișoara"),
            ("주석세공인 탑", "Tin-smiths’ Tower", "성벽 방어탑입니다.", "Defensive wall tower.", "Tinmiths Tower Sighișoara"),
        ],
    },
    {
        "id": "cluj-napoca",
        "countryId": "ro",
        "ko": "클루지나포카",
        "en": "Cluj-Napoca",
        "native": "Cluj-Napoca",
        "blurb_ko": "트란실바니아 학생·IT 도시. 성 미하이 성당과 공원 문화가 활기찹니다.",
        "blurb_en": "Transylvanian student–IT city—St Michael’s and lively parks.",
        "highlights": [
            ("성 미하이 성당", "St Michael’s Church", "고딕 성당과 중앙 광장입니다.", "Gothic church on the main square.", "St Michael Church Cluj"),
            ("연맹광장", "Union Square", "카페가 늘어선 중심 광장입니다.", "Central square lined with cafés.", "Piața Unirii Cluj"),
            ("중앙공원", "Central Park", "호수와 산책로 공원입니다.", "Lake park and promenades.", "Central Park Cluj"),
            ("요새 언덕", "Cetățuia", "도시 전망 언덕입니다.", "Hill viewpoint over the city.", "Cetățuia Cluj"),
            ("식물원", "Botanical Garden", "대학 식물원입니다.", "University botanical garden.", "Cluj Botanical Garden"),
        ],
    },
    {
        "id": "timisoara",
        "countryId": "ro",
        "ko": "티미쇼아라",
        "en": "Timișoara",
        "native": "Timișoara",
        "blurb_ko": "바나트 지방의 광장 도시. 혁명의 출발지이자 문화수도입니다.",
        "blurb_en": "Banat square city—revolution cradle and culture capital.",
        "highlights": [
            ("승리광장", "Victory Square", "오페라와 대성당이 있는 광장입니다.", "Square with opera and cathedral.", "Piața Victoriei Timișoara"),
            ("연합광장", "Union Square", "바로크 색채의 광장입니다.", "Colourful Baroque square.", "Piața Unirii Timișoara"),
            ("헐로워 성채", "Theresia Bastion", "성벽 유적과 카페 지구입니다.", "Bastion ruins and café area.", "Theresia Bastion"),
            ("베가 강변", "Bega Canal", "강변 산책·자전거 길입니다.", "Riverside walks and bike paths.", "Bega Canal"),
            ("혁명기념", "Revolution memorials", "1989 혁명 관련 유적입니다.", "1989 revolution memorials.", "Revolution Timișoara"),
        ],
    },
    # —— Monaco ——
    {
        "id": "monaco",
        "countryId": "mc",
        "ko": "모나코",
        "en": "Monaco",
        "native": "Monaco",
        "blurb_ko": "지중해의 작은 공국. 왕궁·대성당·항구가 한눈에 들어옵니다.",
        "blurb_en": "Tiny Mediterranean principality—palace, cathedral, and harbour.",
        "highlights": [
            ("왕궁", "Prince’s Palace", "바위 언덕 위 공국 왕궁입니다.", "Princely palace on the Rock.", "Prince's Palace Monaco"),
            ("모나코 대성당", "Monaco Cathedral", "그레이스 켈리 묘가 있는 성당입니다.", "Cathedral with Grace Kelly’s tomb.", "Monaco Cathedral"),
            ("해양박물관", "Oceanographic Museum", "절벽 위 해양 박물관입니다.", "Cliffside ocean museum.", "Oceanographic Museum Monaco"),
            ("포르 에르퀼", "Port Hercule", "요트가 늘어선 항구입니다.", "Harbour lined with yachts.", "Port Hercule"),
            ("생마르탱 정원", "Saint-Martin Gardens", "바다 전망 공원입니다.", "Sea-view gardens.", "Jardin Saint-Martin Monaco"),
        ],
    },
    {
        "id": "monte-carlo",
        "countryId": "mc",
        "ko": "몬테카를로",
        "en": "Monte Carlo",
        "native": "Monte-Carlo",
        "blurb_ko": "카지노와 F1의 상징 지구. 럭셔리 쇼핑과 해변 산책이 유명합니다.",
        "blurb_en": "Casino and F1 icon—luxury shopping and seafront walks.",
        "highlights": [
            ("카지노", "Casino de Monte-Carlo", "벨에포크 카지노 건물입니다.", "Belle Époque casino landmark.", "Casino de Monte-Carlo"),
            ("카지노 광장", "Place du Casino", "분수와 럭셔리 호텔 광장입니다.", "Fountain and luxury-hotel square.", "Place du Casino"),
            ("그랑프리 코스", "F1 street circuit", "시내를 도는 F1 트랙입니다.", "Street circuit for Formula 1.", "Monaco Grand Prix circuit"),
            ("라르보토 해변", "Larvotto Beach", "공국의 공용 해변입니다.", "Principality public beach.", "Larvotto Beach"),
            ("메트로폴 쇼핑", "Métropole / Carré d’Or", "럭셔리 부티크 지구입니다.", "Luxury boutique district.", "Carré d'Or Monaco"),
        ],
    },
    # —— Vatican ——
    {
        "id": "vatican-city",
        "countryId": "va",
        "ko": "바티칸",
        "en": "Vatican City",
        "native": "Città del Vaticano",
        "blurb_ko": "세계 최소 국가. 성 베드로 대성당과 바티칸 박물관이 전부입니다.",
        "blurb_en": "World’s smallest state—St Peter’s and the Vatican Museums.",
        "highlights": [
            ("성 베드로 대성당", "St Peter’s Basilica", "르네상스·바로크의 상징 대성당입니다.", "Renaissance–Baroque basilica icon.", "St Peter's Basilica"),
            ("성 베드로 광장", "St Peter’s Square", "베르니니 열주 광장입니다.", "Bernini’s colonnaded square.", "St Peter's Square"),
            ("바티칸 박물관", "Vatican Museums", "라오콘·라파엘로 방 등 컬렉션입니다.", "Laocoön, Raphael Rooms, and more.", "Vatican Museums"),
            ("시스티나 성당", "Sistine Chapel", "미켈란젤로 천장화의 성당입니다.", "Michelangelo’s ceiling chapel.", "Sistine Chapel"),
            ("바티칸 정원", "Vatican Gardens", "예약제 정원 투어입니다.", "Gardens by reserved tour.", "Vatican Gardens"),
        ],
    },
    # —— Andorra ——
    {
        "id": "andorra-la-vella",
        "countryId": "ad",
        "ko": "안도라라베야",
        "en": "Andorra la Vella",
        "native": "Andorra la Vella",
        "blurb_ko": "안도라 수도. 면세 쇼핑과 카사 데 라 발이 중심입니다.",
        "blurb_en": "Andorran capital—duty-free shopping and Casa de la Vall.",
        "highlights": [
            ("카사 데 라 발", "Casa de la Vall", "역사적 의회 건물입니다.", "Historic parliament house.", "Casa de la Vall"),
            ("성 에스테베 교회", "Sant Esteve Church", "로마네스크 본당입니다.", "Romanesque parish church.", "Sant Esteve Andorra"),
            ("아베니다 메릿셀", "Avinguda Meritxell", "면세 쇼핑 메인 거리입니다.", "Main duty-free shopping avenue.", "Avinguda Meritxell"),
            ("칼데아", "Caldea spa", "산악 스파·온천 단지입니다.", "Mountain spa complex.", "Caldea Andorra"),
            ("레크 강변", "Valira riverside", "도심 강변 산책로입니다.", "Town riverside walk.", "Valira River Andorra"),
        ],
    },
    {
        "id": "pas-de-la-casa",
        "countryId": "ad",
        "ko": "파스데라카사",
        "en": "Pas de la Casa",
        "native": "Pas de la Casa",
        "blurb_ko": "프랑스 국경 스키·쇼핑 마을. 그랑발리라 접근이 쉽습니다.",
        "blurb_en": "French-border ski and shopping village—easy Grandvalira access.",
        "highlights": [
            ("그랑발리라", "Grandvalira", "안도라 최대 스키 영역입니다.", "Andorra’s largest ski domain.", "Grandvalira Pas de la Casa"),
            ("국경 쇼핑", "Border shopping", "면세 아웃렛·슈퍼입니다.", "Duty-free outlets and supers.", "Pas de la Casa shopping"),
            ("스키 마을 중심", "Resort centre", "리프트·호텔·바 거리입니다.", "Lifts, hotels, and bar street.", "Pas de la Casa centre"),
            ("고산 산책", "Alpine walks", "여름 하이킹 코스입니다.", "Summer alpine hiking.", "Pas de la Casa hiking"),
            ("전망 능선", "Border ridge views", "프랑스·안도라 능선 전망입니다.", "Ridge views into France and Andorra.", "Pas de la Casa viewpoint"),
        ],
    },
    {
        "id": "ordino",
        "countryId": "ad",
        "ko": "오르디노",
        "en": "Ordino",
        "native": "Ordino",
        "blurb_ko": "한적한 북부 교구. 로마네스크 마을과 산악 자연이 아름답습니다.",
        "blurb_en": "Quiet northern parish—Romanesque villages and mountain nature.",
        "highlights": [
            ("오르디노 마을", "Ordino village", "돌집 골목의 전통 마을입니다.", "Stone-lane traditional village.", "Ordino village"),
            ("카사 로셀", "Casa Rossell", "역사적 귀족 저택입니다.", "Historic noble house.", "Casa Rossell Ordino"),
            ("솔듀 근처", "Sorteny nature park", "고산 식물·하이킹 공원입니다.", "Alpine flora hiking park.", "Sorteny Natural Park"),
            ("아르칼리스", "Arcalís ski area", "북부 스키·자전거 영역입니다.", "Northern ski and bike area.", "Vallnord Arcalís"),
            ("성 코르넬리 교회", "Sant Corneli church", "교구 로마네스크 교회입니다.", "Parish Romanesque church.", "Sant Corneli Ordino"),
        ],
    },
    # —— Liechtenstein ——
    {
        "id": "vaduz",
        "countryId": "li",
        "ko": "파두츠",
        "en": "Vaduz",
        "native": "Vaduz",
        "blurb_ko": "리히텐슈타인 수도. 성곽 전망과 미술관·우표 박물관이 한곳에 모여 있습니다.",
        "blurb_en": "Liechtenstein capital—castle views, art museum, and stamps.",
        "highlights": [
            ("파두츠 성", "Vaduz Castle", "언덕 위 군주 거성(외부 관람)입니다.", "Princely hill castle (exterior views).", "Vaduz Castle"),
            ("슈테틀레", "Städtle", "메인 보행자 거리입니다.", "Main pedestrian street.", "Städtle Vaduz"),
            ("미술 박물관", "Kunstmuseum Liechtenstein", "현대미술관입니다.", "Modern art museum.", "Kunstmuseum Liechtenstein"),
            ("우표 박물관", "Postage Stamp Museum", "공국 우표 컬렉션입니다.", "Princely stamp collection.", "Briefmarkenmuseum Vaduz"),
            ("라인 강변", "Rhine riverside", "강변 산책과 국경 풍경입니다.", "Riverside walks and border views.", "Rhine Vaduz"),
        ],
    },
    {
        "id": "schaan",
        "countryId": "li",
        "ko": "샨",
        "en": "Schaan",
        "native": "Schaan",
        "blurb_ko": "공국 최대 마을. 산업·문화와 산록 산책이 균형 잡혀 있습니다.",
        "blurb_en": "Largest town—industry, culture, and foothill walks.",
        "highlights": [
            ("샨 중심가", "Schaan centre", "상점과 카페 마을 중심입니다.", "Shops and cafés in town centre.", "Schaan centre"),
            ("성 로렌츠 교회", "St Laurentius Church", "마을 상징 교회입니다.", "Town landmark church.", "St Laurentius Schaan"),
            ("극장·문화", "Theater am Kirchplatz", "지역 공연·문화 공간입니다.", "Local theatre and culture venue.", "Theater am Kirchplatz"),
            ("산록 트레일", "Foothill trails", "알프스 초입 산책로입니다.", "Alpine foothill walking trails.", "Schaan hiking"),
            ("파두츠 연결", "Vaduz link", "도보·버스로 수도 접근입니다.", "Walk or bus to the capital.", "Schaan to Vaduz"),
        ],
    },
    {
        "id": "malbun",
        "countryId": "li",
        "ko": "말분",
        "en": "Malbun",
        "native": "Malbun",
        "blurb_ko": "공국의 스키·하이킹 리조트. 고산 초원과 리프트가 매력입니다.",
        "blurb_en": "Princely ski and hiking resort—alpine meadows and lifts.",
        "highlights": [
            ("스키 슬로프", "Malbun ski slopes", "가족형 스키 영역입니다.", "Family-friendly ski area.", "Malbun ski"),
            ("여름 하이킹", "Alpine hiking", "고산 초원 트레일입니다.", "Alpine meadow trails.", "Malbun hiking"),
            ("곤돌라·리프트", "Chairlifts", "정상 전망 리프트입니다.", "Lifts to summit views.", "Malbun lifts"),
            ("산장 식사", "Mountain huts", "알파인 산장 식당입니다.", "Alpine hut dining.", "Malbun mountain hut"),
            ("트리젠베르크", "Triesenberg gateway", "계곡 마을을 지나 접근합니다.", "Access via the valley village.", "Triesenberg Malbun"),
        ],
    },
]


def city_block(c: dict) -> str:
    hs = [highlight(c["id"], i, *h) for i, h in enumerate(c["highlights"], 1)]
    return f"""  {{
    id: "{c['id']}",
    countryId: "{c['countryId']}",
    signatureImage: "/cities/{c['id']}.jpg",
    name: {{ ko: "{c['ko']}", en: "{c['en']}" }},
    nativeName: "{c['native']}",
    blurb: {{
      ko: "{c['blurb_ko']}",
      en: "{c['blurb_en']}",
    }},
    highlights: [
{",\n".join(hs)}
    ],
  }}"""


def place_line(city: str, cat: str, i: int, name: str, rating: float, addr: str, ko: str, en: str, reviews: int) -> str:
    return (
        f"  place('{city}-{cat}-{i}', '{city}', '{cat}', '{esc(name)}', {rating}, "
        f"'{esc(addr)}', '{esc(ko)}', '{esc(en)}', {{ reviewCount: {reviews} }}),"
    )


def generic_dining(label: str) -> dict:
    return {
        "fine_dining": [
            (f"{label} Fine Dining 1", 4.5, label, "시즌 코스 파인 다이닝.", "Seasonal fine dining.", 640),
            (f"{label} Fine Dining 2", 4.4, label, "모던 로컬 다이닝.", "Modern local dining.", 520),
            (f"{label} Fine Dining 3", 4.3, label, "클래식 다이닝.", "Classic dining.", 480),
            (f"{label} Bistro", 4.3, label, "캐주얼 파인 비스트로.", "Casual fine bistro.", 700),
            (f"{label} Chef's Table", 4.4, label, "셰프 테이블.", "Chef’s table.", 390),
        ],
        "bakery": [
            (f"{label} Bakery", 4.5, label, "빵·페이스트리.", "Bread and pastries.", 900),
            (f"{label} Patisserie", 4.4, label, "페이스트리 숍.", "Pastry shop.", 720),
            (f"{label} Bread House", 4.3, label, "로컬 빵집.", "Local bakery.", 580),
            (f"Café Bakery {label}", 4.3, label, "베이커리 카페.", "Bakery café.", 640),
        ],
        "cafe": [
            (f"Specialty Coffee {label}", 4.5, label, "스페셜티 커피.", "Specialty coffee.", 1100),
            (f"Old Town Café {label}", 4.4, label, "구시가 카페.", "Old-town café.", 980),
            (f"Brunch Café {label}", 4.3, label, "브런치 카페.", "Brunch café.", 860),
            (f"Espresso Bar {label}", 4.3, label, "에스프레소 바.", "Espresso bar.", 720),
        ],
        "korean": [
            (f"Korean Kitchen {label}", 4.4, label, "캐주얼 한식.", "Casual Korean.", 640),
            (f"Bibimbap {label}", 4.3, label, "비빔밥·덮밥.", "Bibimbap bowls.", 520),
            (f"Korean BBQ {label}", 4.3, label, "고기구이.", "Korean BBQ.", 480),
            (f"Kimchi House {label}", 4.2, label, "김치·반찬 중심.", "Kimchi-focused Korean.", 390),
        ],
    }


CURATED = {
    "istanbul": {
        "fine_dining": [
            ("Mikla", 4.7, "Istanbul", "보스포러스 전망 모던 터키.", "Modern Turkish with Bosphorus views.", 2400),
            ("Neolokal", 4.6, "Istanbul", "아나톨리아 재해석 코스.", "Reimagined Anatolian tasting.", 1800),
            ("Nusr-Et / steak peers", 4.4, "Istanbul", "스테이크·캐주얼 파인.", "Steak and casual fine.", 6200),
            ("Ciya Sofrası", 4.5, "Istanbul", "지역 가정식 클래식.", "Regional home-style classic.", 4800),
            ("Pandeli", 4.4, "Istanbul", "역사적 오스만 다이닝.", "Historic Ottoman dining.", 3200),
        ],
        "bakery": [
            ("Filizler Tarihi Fırın / peers", 4.5, "Istanbul", "시밋·로컬 빵.", "Simit and local bread.", 2800),
            ("Karaköy Güllüoğlu", 4.6, "Istanbul", "바클라바 전문.", "Baklava specialists.", 12000),
            ("Baylan Pastanesi", 4.4, "Istanbul", "클래식 파티스리.", "Classic pastry shop.", 3600),
            ("Çırağan bakery counters", 4.3, "Istanbul", "호텔·베이커리 카운터.", "Hotel bakery counters.", 1400),
        ],
        "cafe": [
            ("Kronotrop", 4.5, "Istanbul", "스페셜티 로스터리.", "Specialty roastery.", 2100),
            ("Mandabatmaz", 4.4, "Istanbul", "터키식 커피 클래식.", "Classic Turkish coffee.", 4200),
            ("Petra Roasting Co.", 4.5, "Istanbul", "로스터리 카페.", "Roastery café.", 1800),
            ("Karabatak", 4.4, "Istanbul", "카라쾨이 브런치 카페.", "Karaköy brunch café.", 2400),
        ],
        "korean": [
            ("Korean Kitchen Istanbul", 4.4, "Istanbul", "캐주얼 한식.", "Casual Korean.", 900),
            ("Bibimbap Istanbul", 4.3, "Istanbul", "비빔밥.", "Bibimbap.", 720),
            ("Korean BBQ Istanbul", 4.3, "Istanbul", "고기구이.", "Korean BBQ.", 800),
            ("Kimchi Istanbul", 4.2, "Istanbul", "김치·반찬.", "Kimchi-focused.", 560),
        ],
    },
    "sofia": {
        "fine_dining": [
            ("Made in Blue / peers", 4.5, "Sofia", "모던 불가리아 다이닝.", "Modern Bulgarian dining.", 1100),
            ("Cosmos", 4.5, "Sofia", "창의 코스 파인.", "Creative tasting fine dining.", 900),
            ("Raketa Rakia Bar peers", 4.4, "Sofia", "로컬 라키아·캐주얼.", "Local rakia and casual dining.", 2100),
            ("Before & After", 4.4, "Sofia", "시즌 비스트로.", "Seasonal bistro.", 1400),
            ("Manastirska Magernitsa", 4.4, "Sofia", "전통 불가리아 요리.", "Traditional Bulgarian cuisine.", 2800),
        ],
        "bakery": [
            ("Penchevi / local bakeries", 4.4, "Sofia", "바니차·로컬 빵.", "Banitsa and local bread.", 1600),
            ("Sweet & Coffee peers", 4.3, "Sofia", "케이크·페이스트리.", "Cakes and pastries.", 1200),
            ("Bread House Sofia", 4.4, "Sofia", "사워도우 베이커리.", "Sourdough bakery.", 900),
            ("Traditional bakery stalls", 4.3, "Sofia", "시장 빵 가판.", "Market bakery stalls.", 1400),
        ],
        "cafe": [
            ("Coffee Break / specialty peers", 4.5, "Sofia", "스페셜티 커피.", "Specialty coffee.", 1600),
            ("The Stairs / loft cafés", 4.4, "Sofia", "로프트 카페.", "Loft café.", 1200),
            ("Cafe Theatre peers", 4.3, "Sofia", "클래식 카페.", "Classic café.", 1800),
            ("Brunch cafés Vitosha", 4.4, "Sofia", "비토샤 브런치.", "Vitosha brunch cafés.", 1400),
        ],
        "korean": [
            ("Korean Kitchen Sofia", 4.4, "Sofia", "캐주얼 한식.", "Casual Korean.", 480),
            ("Bibimbap Sofia", 4.3, "Sofia", "비빔밥.", "Bibimbap.", 360),
            ("Korean BBQ Sofia", 4.3, "Sofia", "고기구이.", "Korean BBQ.", 400),
            ("Kimchi Sofia", 4.2, "Sofia", "김치·반찬.", "Kimchi-focused.", 280),
        ],
    },
    "bucharest": {
        "fine_dining": [
            ("The Artist", 4.6, "Bucharest", "미슐랭 모던 루마니아.", "Michelin modern Romanian.", 1200),
            ("Kaiamo", 4.5, "Bucharest", "시즌 창의 코스.", "Seasonal creative tasting.", 900),
            ("Casa di David / peers", 4.4, "Bucharest", "클래식 파인 다이닝.", "Classic fine dining.", 1600),
            ("Caru' cu Bere", 4.4, "Bucharest", "역사적 맥주홀 다이닝.", "Historic beer-hall dining.", 8600),
            ("Lacrimi și Sfinți", 4.5, "Bucharest", "전통 재해석.", "Reimagined tradition.", 2100),
        ],
        "bakery": [
            ("French Revolution bakery peers", 4.5, "Bucharest", "사워도우·페이스트리.", "Sourdough and pastries.", 1800),
            ("Grace Bakery", 4.4, "Bucharest", "로컬 베이커리.", "Local bakery.", 1200),
            ("Cofoarie / covrig stalls", 4.3, "Bucharest", "코브리지 가판.", "Covrigi stalls.", 2400),
            ("Hotel pastry counters", 4.3, "Bucharest", "호텔 파티스리.", "Hotel pastry counters.", 900),
        ],
        "cafe": [
            ("Origo Coffee", 4.6, "Bucharest", "스페셜티 로스터리.", "Specialty roastery.", 2100),
            ("Steam Coffee / peers", 4.5, "Bucharest", "스페셜티 커피.", "Specialty coffee.", 1400),
            ("Cafeneaua Veche peers", 4.3, "Bucharest", "구시가 클래식 카페.", "Old-town classic café.", 2800),
            ("brunch cafés Centru Vechi", 4.4, "Bucharest", "구시가 브런치.", "Old-town brunch.", 1600),
        ],
        "korean": [
            ("Korean Kitchen Bucharest", 4.4, "Bucharest", "캐주얼 한식.", "Casual Korean.", 640),
            ("Bibimbap Bucharest", 4.3, "Bucharest", "비빔밥.", "Bibimbap.", 480),
            ("Korean BBQ Bucharest", 4.3, "Bucharest", "고기구이.", "Korean BBQ.", 520),
            ("Kimchi Bucharest", 4.2, "Bucharest", "김치·반찬.", "Kimchi-focused.", 360),
        ],
    },
    "monaco": {
        "fine_dining": [
            ("Le Louis XV – Alain Ducasse", 4.8, "Monaco", "미슐랭 클래식 파인.", "Michelin classic fine dining.", 1600),
            ("Blue Bay / Joel Robuchon peers", 4.6, "Monaco", "호텔 파인 다이닝.", "Hotel fine dining.", 1200),
            ("Yoshi", 4.5, "Monaco", "일식 파인 다이닝.", "Japanese fine dining.", 900),
            ("Cafe de Paris Monte-Carlo", 4.4, "Monaco", "카지노 광장 브라세리.", "Casino-square brasserie.", 6400),
            ("Beefbar Monaco", 4.4, "Monaco", "스테이크·캐주얼 파인.", "Steak casual fine.", 2100),
        ],
        "bakery": [
            ("Boulangerie / patisserie Monaco", 4.5, "Monaco", "프렌치 빵·페이스트리.", "French bread and pastries.", 1400),
            ("Hotel de Paris pastry", 4.5, "Monaco", "호텔 파티스리.", "Hotel pastry.", 1100),
            ("Local viennoiserie", 4.4, "Monaco", "크루아상·비엔누아즈리.", "Croissants and viennoiserie.", 900),
            ("Harbor bakery café", 4.3, "Monaco", "항구 베이커리 카페.", "Harbour bakery café.", 720),
        ],
        "cafe": [
            ("Café de Paris terrace", 4.4, "Monaco", "광장 테라스 카페.", "Square terrace café.", 5200),
            ("Specialty coffee Monaco", 4.5, "Monaco", "스페셜티 커피.", "Specialty coffee.", 800),
            ("Port Hercule cafés", 4.3, "Monaco", "항구 카페.", "Harbour cafés.", 1600),
            ("Brunch café Carré d'Or", 4.4, "Monaco", "럭셔리 지구 브런치.", "Luxury-district brunch.", 980),
        ],
        "korean": [
            ("Korean Kitchen Monaco", 4.3, "Monaco", "캐주얼 한식.", "Casual Korean.", 280),
            ("Bibimbap Monaco", 4.2, "Monaco", "비빔밥.", "Bibimbap.", 200),
            ("Korean BBQ Monaco", 4.2, "Monaco", "고기구이.", "Korean BBQ.", 220),
            ("Kimchi Monaco", 4.2, "Monaco", "김치·반찬.", "Kimchi-focused.", 160),
        ],
    },
    "vatican-city": {
        "fine_dining": [
            ("Ristorante near St Peter's", 4.4, "Vatican area", "대성당 인근 이탈리안.", "Italian near the basilica.", 1800),
            ("Borgo Pio trattoria", 4.4, "Borgo", "보르고 트라토리아.", "Borgo trattoria.", 2100),
            ("Prati fine dining peers", 4.5, "Prati", "프라티 파인 다이닝.", "Prati fine dining.", 1200),
            ("Hotel Vatican-area dining", 4.3, "Vatican area", "호텔 다이닝.", "Hotel dining.", 900),
            ("Roman classic near Vatican", 4.4, "Vatican area", "로마 클래식 요리.", "Classic Roman cooking.", 2400),
        ],
        "bakery": [
            ("Panificio near Vatican", 4.5, "Prati", "로마 빵집.", "Roman bakery.", 1600),
            ("Pasticceria Borgo", 4.4, "Borgo", "이탈리안 파티스리.", "Italian pastry shop.", 1200),
            ("Cornetto & pizza bianca", 4.4, "Vatican area", "코르네토·피자 비앙카.", "Cornetti and pizza bianca.", 2100),
            ("Gelato-bakery counter", 4.3, "Vatican area", "젤라토·베이커리.", "Gelato and bakery counter.", 1400),
        ],
        "cafe": [
            ("Café in St Peter's square area", 4.3, "Vatican area", "광장 인근 카페.", "Café near the square.", 3200),
            ("Specialty coffee Prati", 4.5, "Prati", "프라티 스페셜티.", "Prati specialty coffee.", 1100),
            ("Borgo espresso bar", 4.4, "Borgo", "에스프레소 바.", "Espresso bar.", 1600),
            ("Brunch café near Vatican", 4.3, "Vatican area", "브런치 카페.", "Brunch café.", 900),
        ],
        "korean": [
            ("Korean Kitchen Vatican area", 4.3, "Prati", "캐주얼 한식.", "Casual Korean.", 360),
            ("Bibimbap near Vatican", 4.2, "Prati", "비빔밥.", "Bibimbap.", 280),
            ("Korean BBQ Prati", 4.2, "Prati", "고기구이.", "Korean BBQ.", 300),
            ("Kimchi House Prati", 4.2, "Prati", "김치·반찬.", "Kimchi-focused.", 220),
        ],
    },
    "andorra-la-vella": {
        "fine_dining": [
            ("Bokè Wine & Grill / peers", 4.5, "Andorra la Vella", "산악 그릴·와인.", "Mountain grill and wine.", 700),
            ("Celler d'en Toni peers", 4.4, "Andorra la Vella", "카탈란·안도라 다이닝.", "Catalan–Andorran dining.", 600),
            ("Hotel fine dining Andorra", 4.4, "Andorra la Vella", "호텔 파인 다이닝.", "Hotel fine dining.", 800),
            ("Mountain bistro centre", 4.3, "Andorra la Vella", "산악 비스트로.", "Mountain bistro.", 900),
            ("Grill & local cuisine", 4.3, "Andorra la Vella", "로컬 그릴 요리.", "Local grill cuisine.", 1100),
        ],
        "bakery": [
            ("Forn / panaderia Andorra", 4.4, "Andorra la Vella", "카탈란식 빵집.", "Catalan-style bakery.", 900),
            ("Pastisseria local", 4.4, "Andorra la Vella", "페이스트리 숍.", "Pastry shop.", 720),
            ("Croissant & mountain bread", 4.3, "Andorra la Vella", "크루아상·산악 빵.", "Croissants and mountain bread.", 640),
            ("Café bakery Meritxell", 4.3, "Andorra la Vella", "쇼핑가 베이커리 카페.", "Shopping-street bakery café.", 800),
        ],
        "cafe": [
            ("Specialty coffee Andorra", 4.5, "Andorra la Vella", "스페셜티 커피.", "Specialty coffee.", 700),
            ("Meritxell terrace café", 4.3, "Andorra la Vella", "쇼핑가 테라스 카페.", "Shopping terrace café.", 1200),
            ("Old town café", 4.4, "Andorra la Vella", "구시가 카페.", "Old-town café.", 860),
            ("Brunch café Caldea area", 4.3, "Andorra la Vella", "칼데아 인근 브런치.", "Brunch near Caldea.", 640),
        ],
        "korean": [
            ("Korean Kitchen Andorra", 4.3, "Andorra la Vella", "캐주얼 한식.", "Casual Korean.", 240),
            ("Bibimbap Andorra", 4.2, "Andorra la Vella", "비빔밥.", "Bibimbap.", 180),
            ("Korean BBQ Andorra", 4.2, "Andorra la Vella", "고기구이.", "Korean BBQ.", 200),
            ("Kimchi Andorra", 4.2, "Andorra la Vella", "김치·반찬.", "Kimchi-focused.", 140),
        ],
    },
    "vaduz": {
        "fine_dining": [
            ("Restaurant Torkel", 4.6, "Vaduz", "왕실 와이너리 다이닝.", "Princely winery dining.", 700),
            ("Hotel restaurant Vaduz", 4.4, "Vaduz", "호텔 파인 다이닝.", "Hotel fine dining.", 600),
            ("Alpine bistro Vaduz", 4.4, "Vaduz", "알파인 비스트로.", "Alpine bistro.", 800),
            ("Rhine-view dining", 4.3, "Vaduz", "라인 전망 다이닝.", "Rhine-view dining.", 540),
            ("Local Liechtenstein cuisine", 4.3, "Vaduz", "로컬 공국 요리.", "Local princely cuisine.", 720),
        ],
        "bakery": [
            ("Bäckerei Vaduz", 4.5, "Vaduz", "스위스식 빵집.", "Swiss-style bakery.", 800),
            ("Konditorei Vaduz", 4.4, "Vaduz", "케이크·페이스트리.", "Cakes and pastries.", 640),
            ("Mountain bread shop", 4.3, "Vaduz", "산악 빵집.", "Mountain bread shop.", 480),
            ("Café bakery Städtle", 4.3, "Vaduz", "슈테틀레 베이커리 카페.", "Städtle bakery café.", 700),
        ],
        "cafe": [
            ("Specialty coffee Vaduz", 4.5, "Vaduz", "스페셜티 커피.", "Specialty coffee.", 560),
            ("Städtle café", 4.4, "Vaduz", "메인 거리 카페.", "Main-street café.", 900),
            ("Museum café", 4.3, "Vaduz", "미술관 카페.", "Museum café.", 480),
            ("Brunch café Vaduz", 4.3, "Vaduz", "브런치 카페.", "Brunch café.", 420),
        ],
        "korean": [
            ("Korean Kitchen Vaduz", 4.2, "Vaduz", "캐주얼 한식.", "Casual Korean.", 160),
            ("Bibimbap Vaduz", 4.2, "Vaduz", "비빔밥.", "Bibimbap.", 120),
            ("Korean BBQ Vaduz", 4.2, "Vaduz", "고기구이.", "Korean BBQ.", 140),
            ("Kimchi Vaduz", 4.1, "Vaduz", "김치·반찬.", "Kimchi-focused.", 100),
        ],
    },
}


def write_cities_append() -> None:
    path = DATA / "cities.ts"
    text = path.read_text(encoding="utf-8")
    if 'id: "istanbul"' in text:
        print("cities already contain istanbul — skip append")
        return
    marker = "\n]\n\nexport function getCity"
    if marker not in text:
        raise SystemExit("cities.ts marker not found")
    blocks = ",\n".join(city_block(c) for c in CITIES)
    text = text.replace(marker, ",\n" + blocks + marker, 1)
    path.write_text(text, encoding="utf-8")
    print(f"appended {len(CITIES)} cities")


def write_country_extra(country: str, cities: list[str], dining: dict) -> None:
    lines = [
        "import { place } from './placeFactory'",
        "import type { Place } from '../types'",
        "",
        f"export const {EXPORT_NAMES[country]}: Place[] = [",
    ]
    for city in cities:
        lines.append(f"  // —— {city} ——")
        for cat in ("fine_dining", "bakery", "cafe", "korean"):
            for i, (name, rating, addr, ko, en, reviews) in enumerate(dining[city][cat], 1):
                lines.append(place_line(city, cat, i, name, rating, addr, ko, en, reviews))
        lines.append("")
    lines.append("]")
    lines.append("")
    (DATA / f"places-{country}-extra.ts").write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote places-{country}-extra.ts")


def write_extras() -> None:
    labels = {c["id"]: c["en"] for c in CITIES}
    for cc, city_ids in GROUPS.items():
        path = DATA / f"places-{cc}-extra.ts"
        if path.exists() and f"// —— {city_ids[0]} ——" in path.read_text(encoding="utf-8"):
            print(f"skip extra {cc}")
            continue
        dining = {
            cid: CURATED.get(cid, generic_dining(labels[cid])) for cid in city_ids
        }
        write_country_extra(cc, city_ids, dining)


def append_category_file(path: Path, rows: list[str], comment: str) -> None:
    text = path.read_text(encoding="utf-8")
    first_id = rows[0].split("'")[1]
    if first_id in text:
        print(f"skip {path.name} — already has {first_id}")
        return
    text = text.rstrip()
    if not text.endswith("]"):
        raise SystemExit(f"unexpected end of {path}")
    text = text[:-1].rstrip() + f"\n\n  // —— {comment} ——\n" + "\n".join(rows) + "\n]\n"
    path.write_text(text, encoding="utf-8")
    print(f"appended {len(rows)} to {path.name}")


def fashion_grocery_asian_rows() -> tuple[list[str], list[str], list[str]]:
    fashion, grocery, asian = [], [], []
    special_f = {
        "istanbul": [
            ("İstiklal / Nişantaşı fashion", "Istanbul", "[패션] 이스티클랄·니샨타시.", "[Fashion] İstiklal and Nişantaşı.", 4.5, 9800),
            ("Olivium / outlet day trip", "Istanbul", "[아울렛] 이스탄불 권역 아울렛.", "[Outlet] Istanbul-area outlet.", 4.3, 5400),
            ("Grand Bazaar textiles & boutiques", "Istanbul", "[패션] 그랜드바자·부티크.", "[Fashion] Grand Bazaar and boutiques.", 4.4, 12000),
        ],
        "sofia": [
            ("Vitosha Boulevard fashion", "Sofia", "[패션] 비토샤 대로 패션.", "[Fashion] Vitosha Boulevard fashion.", 4.4, 3200),
            ("Sofia outlet / mall fashion", "Sofia", "[아울렛] 소피아 몰·아울렛.", "[Outlet] Sofia mall and outlet.", 4.2, 2100),
            ("Serdika / Boulevard boutiques", "Sofia", "[패션] 세르디카·부티크.", "[Fashion] Serdika boutiques.", 4.3, 1600),
        ],
        "bucharest": [
            ("Calea Victoriei fashion", "Bucharest", "[패션] 빅토리에이 대로.", "[Fashion] Calea Victoriei.", 4.4, 4200),
            ("Designer Outlet Bucharest / malls", "Bucharest", "[아울렛] 부쿠레슈티 아울렛·몰.", "[Outlet] Bucharest outlet and malls.", 4.3, 3600),
            ("Lipscani / boutique streets", "Bucharest", "[패션] 립스카니 부티크.", "[Fashion] Lipscani boutiques.", 4.3, 2100),
        ],
        "monaco": [
            ("Carré d'Or luxury fashion", "Monaco", "[패션] 카레도르 럭셔리.", "[Fashion] Carré d'Or luxury.", 4.6, 4800),
            ("Métropole shopping", "Monaco", "[패션] 메트로폴 쇼핑.", "[Fashion] Métropole shopping.", 4.5, 3200),
            ("Monte-Carlo boutiques", "Monte Carlo", "[패션] 몬테카를로 부티크.", "[Fashion] Monte-Carlo boutiques.", 4.5, 2800),
        ],
        "vatican-city": [
            ("Via Cola di Rienzo / Prati fashion", "Prati", "[패션] 프라티 쇼핑 거리.", "[Fashion] Prati shopping street.", 4.4, 3600),
            ("Roma outlet day trip", "Rome area", "[아울렛] 로마 권역 아울렛.", "[Outlet] Rome-area outlet.", 4.3, 5400),
            ("Borgo souvenir & shops", "Borgo", "[패션] 보르고 상점.", "[Fashion] Borgo shops.", 4.2, 1800),
        ],
        "andorra-la-vella": [
            ("Avinguda Meritxell fashion", "Andorra la Vella", "[패션] 메릿셀 면세 패션.", "[Fashion] Meritxell duty-free fashion.", 4.4, 4200),
            ("Andorra outlet / sportswear", "Andorra la Vella", "[아울렛] 스포츠·면세 아울렛.", "[Outlet] Sports and duty-free outlet.", 4.3, 2800),
            ("Duty-free boutiques", "Andorra la Vella", "[패션] 면세 부티크.", "[Fashion] Duty-free boutiques.", 4.3, 2100),
        ],
        "vaduz": [
            ("Städtle fashion & souvenirs", "Vaduz", "[패션] 슈테틀레 패션·기념품.", "[Fashion] Städtle fashion and souvenirs.", 4.3, 900),
            ("Schaan / regional mall", "Schaan", "[아울렛] 샨·권역 몰.", "[Outlet] Schaan regional mall.", 4.2, 700),
            ("Local design boutiques Vaduz", "Vaduz", "[패션] 로컬 디자인 부티크.", "[Fashion] Local design boutiques.", 4.2, 480),
        ],
    }
    special_g = {
        "istanbul": [
            ("Spice Bazaar / food markets", "Istanbul", "[식료품] 향신료 시장.", "[Grocery] Spice market.", 4.5, 18000),
            ("Migros / CarrefourSA", "Istanbul", "[대형마트] 미그로스·카르푸SA.", "[Hypermarket] Migros and CarrefourSA.", 4.1, 6400),
            ("Şok / A101 supermarket", "Istanbul", "[슈퍼] 쇼크·A101.", "[Supermarket] Şok and A101.", 4.0, 5200),
            ("Asian / specialty groceries", "Istanbul", "[식료품점] 아시안·특산.", "[Grocery] Asian specialties.", 4.3, 1800),
        ],
        "sofia": [
            ("Women's Market / food halls", "Sofia", "[식료품] 여성시장·푸드홀.", "[Grocery] Women's Market and food halls.", 4.4, 3200),
            ("Kaufland / Fantastico", "Sofia", "[대형마트] 카우플란트·판타스티코.", "[Hypermarket] Kaufland and Fantastico.", 4.1, 2800),
            ("Lidl / Billa supermarket", "Sofia", "[슈퍼] 리들·빌라.", "[Supermarket] Lidl and Billa.", 4.0, 2400),
            ("Specialty / deli groceries", "Sofia", "[식료품점] 델리·특산.", "[Grocery] Deli specialties.", 4.3, 900),
        ],
        "bucharest": [
            ("Obor / local food markets", "Bucharest", "[식료품] 오보르·로컬 마켓.", "[Grocery] Obor and local markets.", 4.4, 4200),
            ("Carrefour / Auchan", "Bucharest", "[대형마트] 카르푸·오샹.", "[Hypermarket] Carrefour and Auchan.", 4.1, 3600),
            ("Lidl / Mega Image", "Bucharest", "[슈퍼] 리들·메가이미지.", "[Supermarket] Lidl and Mega Image.", 4.0, 3200),
            ("Asian / specialty groceries", "Bucharest", "[식료품점] 아시안·특산.", "[Grocery] Asian specialties.", 4.3, 1200),
        ],
        "monaco": [
            ("Marché de la Condamine", "Monaco", "[식료품] 콩다민 마켓.", "[Grocery] Condamine market.", 4.5, 2100),
            ("Carrefour Monaco", "Monaco", "[대형마트] 카르푸 모나코.", "[Hypermarket] Carrefour Monaco.", 4.1, 1600),
            ("Local supermarket Monaco", "Monaco", "[슈퍼] 로컬 슈퍼.", "[Supermarket] Local supermarket.", 4.0, 1100),
            ("Gourmet / specialty groceries", "Monaco", "[식료품점] 고메·특산.", "[Grocery] Gourmet specialties.", 4.4, 800),
        ],
        "vatican-city": [
            ("Prati / Trionfale market", "Prati", "[식료품] 프라티·트리온팔레 마켓.", "[Grocery] Prati and Trionfale markets.", 4.4, 2800),
            ("Carrefour / Conad near Vatican", "Prati", "[대형마트] 카르푸·코나드.", "[Hypermarket] Carrefour and Conad.", 4.1, 2100),
            ("Local supermarket Prati", "Prati", "[슈퍼] 프라티 슈퍼.", "[Supermarket] Prati supermarket.", 4.0, 1600),
            ("Specialty / gourmet near Vatican", "Prati", "[식료품점] 고메·특산.", "[Grocery] Gourmet specialties.", 4.3, 900),
        ],
        "andorra-la-vella": [
            ("Meritxell food / wine shops", "Andorra la Vella", "[식료품] 메릿셀 식료·와인.", "[Grocery] Meritxell food and wine.", 4.4, 2400),
            ("Pyrénées / hypermarket Andorra", "Andorra la Vella", "[대형마트] 피레네·대형마트.", "[Hypermarket] Pyrénées hypermarket.", 4.2, 2800),
            ("Supermercat local", "Andorra la Vella", "[슈퍼] 로컬 슈퍼.", "[Supermarket] Local supermarket.", 4.0, 1400),
            ("Specialty / duty-free groceries", "Andorra la Vella", "[식료품점] 면세·특산.", "[Grocery] Duty-free specialties.", 4.3, 1100),
        ],
        "vaduz": [
            ("Vaduz farm shop / markets", "Vaduz", "[식료품] 파두츠 팜숍·마켓.", "[Grocery] Farm shop and markets.", 4.3, 700),
            ("Migros / Coop nearby", "Schaan / CH border", "[대형마트] 미그로스·쿱 근교.", "[Hypermarket] Nearby Migros and Coop.", 4.1, 1200),
            ("Local supermarket Schaan", "Schaan", "[슈퍼] 샨 슈퍼.", "[Supermarket] Schaan supermarket.", 4.0, 800),
            ("Specialty / Alpine groceries", "Vaduz", "[식료품점] 알파인 특산.", "[Grocery] Alpine specialties.", 4.3, 480),
        ],
    }

    for c in CITIES:
        city, label = c["id"], c["en"]
        if city in special_f:
            spots = special_f[city]
        else:
            spots = [
                (f"{label} fashion street", label, f"[패션] {label} 메인 패션 거리.", f"[Fashion] {label} fashion street.", 4.3, 1200),
                (f"{label} outlet / day trip", label, f"[아울렛] {label} 권역 아울렛.", f"[Outlet] {label}-area outlet.", 4.2, 1000),
                (f"{label} mall fashion", label, f"[패션] {label} 몰 패션.", f"[Fashion] {label} mall fashion.", 4.2, 900),
            ]
        for i, (name, addr, ko, en, rating, reviews) in enumerate(spots, 1):
            fashion.append(place_line(city, "fashion", i, name, rating, addr, ko, en, reviews))

        if city in special_g:
            gspots = special_g[city]
        else:
            gspots = [
                (f"{label} food market", label, f"[식료품] {label} 식료품 마켓.", f"[Grocery] {label} food market.", 4.4, 1800),
                (f"Hypermarket near {label}", label, f"[대형마트] {label} 근교 대형마트.", f"[Hypermarket] Near {label}.", 4.1, 1400),
                (f"Supermarket {label}", label, f"[슈퍼] {label} 슈퍼마켓.", f"[Supermarket] {label} supermarket.", 4.0, 1100),
                (f"Specialty groceries {label}", label, f"[식료품점] 특산·유기농.", f"[Grocery] Specialty groceries.", 4.3, 700),
            ]
        for i, (name, addr, ko, en, rating, reviews) in enumerate(gspots, 1):
            grocery.append(place_line(city, "grocery", i, name, rating, addr, ko, en, reviews))

        for i, (name, addr, ko, en, rating, reviews) in enumerate(
            [
                (f"Asian dining {label}", label, "아시안 다이닝.", "Asian dining.", 4.3, 600),
                (f"Sushi / ramen {label}", label, "스시·라멘.", "Sushi and ramen.", 4.3, 500),
                (f"Thai / Vietnamese {label}", label, "태국·베트남.", "Thai and Vietnamese.", 4.2, 480),
            ],
            1,
        ):
            asian.append(place_line(city, "asian", i, name, rating, addr, ko, en, reviews))

    return fashion, grocery, asian


def write_flags() -> None:
    flags = {
        "tr": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#E30A17"/>
  <circle cx="14" cy="14" r="7" fill="#FFFFFF"/>
  <circle cx="16.2" cy="14" r="5.6" fill="#E30A17"/>
  <polygon points="22.5,14 25.8,15.1 23.7,12.2 23.7,15.8 25.8,12.9" fill="#FFFFFF"/>
</svg>
""",
        "bg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#00966E"/>
  <rect width="37" height="18.667" fill="#D62612"/>
  <rect width="37" height="9.333" fill="#FFFFFF"/>
</svg>
""",
        "ro": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#002B7F"/>
  <rect x="12.333" width="12.334" height="28" fill="#FCD116"/>
  <rect x="24.667" width="12.333" height="28" fill="#CE1126"/>
</svg>
""",
        "mc": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#FFFFFF"/>
  <rect width="37" height="14" fill="#CE1126"/>
</svg>
""",
        "va": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#FFFFFF"/>
  <rect width="18.5" height="28" fill="#FFE000"/>
  <circle cx="24" cy="14" r="4.5" fill="none" stroke="#B Pan" stroke-width="0"/>
  <circle cx="22.5" cy="13" r="3.2" fill="none" stroke="#C8102E" stroke-width="1.2"/>
  <circle cx="25.5" cy="15" r="3.2" fill="none" stroke="#C8102E" stroke-width="1.2"/>
  <rect x="23.6" y="10" width="1.2" height="10" fill="#C8102E"/>
</svg>
""",
        "ad": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#0018A8"/>
  <rect x="12.333" width="12.334" height="28" fill="#FEDF00"/>
  <rect x="24.667" width="12.333" height="28" fill="#D52B1E"/>
  <rect x="16" y="10" width="5" height="8" fill="#C8102E"/>
  <rect x="16.8" y="10.6" width="3.4" height="2" fill="#FEDF00"/>
</svg>
""",
        "li": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#CE1126"/>
  <rect width="37" height="14" fill="#002B7F"/>
  <circle cx="8" cy="7" r="3.2" fill="#FFD700"/>
  <rect x="7.3" y="4" width="1.4" height="6" fill="#FFD700"/>
</svg>
""",
    }
    # Fix accidental typo in va flag if any
    flags["va"] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#FFFFFF"/>
  <rect width="18.5" height="28" fill="#FFE000"/>
  <circle cx="22.5" cy="13" r="3.2" fill="none" stroke="#C8102E" stroke-width="1.2"/>
  <circle cx="25.5" cy="15" r="3.2" fill="none" stroke="#C8102E" stroke-width="1.2"/>
  <rect x="23.6" y="10" width="1.2" height="10" fill="#C8102E"/>
</svg>
"""
    FLAGS.mkdir(parents=True, exist_ok=True)
    for cid, svg in flags.items():
        (FLAGS / f"{cid}.svg").write_text(svg, encoding="utf-8")
        print(f"wrote flag {cid}.svg")


def patch_places_ts() -> None:
    path = DATA / "places.ts"
    text = path.read_text(encoding="utf-8")
    if "placesTRExtra" in text:
        print("places.ts already patched")
        return
    text = text.replace(
        "import { placesISExtra } from './places-is-extra'\n",
        "import { placesISExtra } from './places-is-extra'\n"
        "import { placesTRExtra } from './places-tr-extra'\n"
        "import { placesBGExtra } from './places-bg-extra'\n"
        "import { placesROExtra } from './places-ro-extra'\n"
        "import { placesMCExtra } from './places-mc-extra'\n"
        "import { placesVAExtra } from './places-va-extra'\n"
        "import { placesADExtra } from './places-ad-extra'\n"
        "import { placesLIExtra } from './places-li-extra'\n",
    )
    text = text.replace(
        "  ...placesISExtra,\n  ...placesFashion,",
        "  ...placesISExtra,\n"
        "  ...placesTRExtra,\n"
        "  ...placesBGExtra,\n"
        "  ...placesROExtra,\n"
        "  ...placesMCExtra,\n"
        "  ...placesVAExtra,\n"
        "  ...placesADExtra,\n"
        "  ...placesLIExtra,\n"
        "  ...placesFashion,",
    )
    path.write_text(text, encoding="utf-8")
    print("patched places.ts")


COUNTRY_BLOCKS = """  {
    id: 'tr',
    name: { ko: '튀르키예', en: 'Türkiye' },
    nativeName: 'Türkiye',
    flagImage: '/flags/tr.svg',
    landmarkImage: '/landmarks/landmark-tr.jpg',
    flag: '🇹🇷',
    blurb: {
      ko: '유럽과 아시아를 잇는 나라. 이스탄불·카파도키아·안탈리아가 대표적입니다.',
      en: 'Bridge of continents—Istanbul, Cappadocia, and Antalya lead.',
    },
    facts: {
      population: { ko: '약 8,500만 명', en: 'Approx. 85 million' },
      area: { ko: '783,562 km²', en: '783,562 km²' },
      capital: { ko: '앙카라 (Ankara)', en: 'Ankara' },
      currency: { ko: '리라 (TRY, ₺)', en: 'Lira (TRY, ₺)' },
    },
    currencyCode: 'TRY',
    currencySymbol: '₺',
    schengen: false,
    flagColors: {
      primary: '#E30A17',
      secondary: '#FFFFFF',
      accent: '#E30A17',
      background: '#FCE8EA',
      text: '#3A0A10',
    },
    cityIds: ['istanbul', 'ankara', 'izmir', 'antalya', 'goreme', 'bursa', 'trabzon', 'pamukkale'],
  },
  {
    id: 'bg',
    name: { ko: '불가리아', en: 'Bulgaria' },
    nativeName: 'България',
    flagImage: '/flags/bg.svg',
    landmarkImage: '/landmarks/landmark-bg.jpg',
    flag: '🇧🇬',
    blurb: {
      ko: '발칸의 산과 흑해. 소피아·플로브디프·바르나가 여행의 중심입니다.',
      en: 'Balkan mountains and Black Sea—Sofia, Plovdiv, and Varna.',
    },
    facts: {
      population: { ko: '약 640만 명', en: 'Approx. 6.4 million' },
      area: { ko: '110,994 km²', en: '110,994 km²' },
      capital: { ko: '소피아 (Sofia)', en: 'Sofia' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#00966E',
      secondary: '#D62612',
      accent: '#FFFFFF',
      background: '#E8F6F1',
      text: '#0A2A20',
    },
    cityIds: ['sofia', 'plovdiv', 'varna', 'veliko-tarnovo', 'nessebar'],
  },
  {
    id: 'ro',
    name: { ko: '루마니아', en: 'Romania' },
    nativeName: 'România',
    flagImage: '/flags/ro.svg',
    landmarkImage: '/landmarks/landmark-ro.jpg',
    flag: '🇷🇴',
    blurb: {
      ko: '카르파티아와 성채의 나라. 부쿠레슈티·브라쇼브·시기쇼아라가 유명합니다.',
      en: 'Carpathians and citadels—Bucharest, Brașov, and Sighișoara.',
    },
    facts: {
      population: { ko: '약 1,900만 명', en: 'Approx. 19 million' },
      area: { ko: '238,397 km²', en: '238,397 km²' },
      capital: { ko: '부쿠레슈티 (Bucharest)', en: 'Bucharest' },
      currency: { ko: '레우 (RON, lei)', en: 'Leu (RON, lei)' },
    },
    currencyCode: 'RON',
    currencySymbol: 'lei',
    schengen: true,
    flagColors: {
      primary: '#002B7F',
      secondary: '#FCD116',
      accent: '#CE1126',
      background: '#E8EEF8',
      text: '#0A1A30',
    },
    cityIds: ['bucharest', 'brasov', 'sibiu', 'sighisoara', 'cluj-napoca', 'timisoara'],
  },
  {
    id: 'mc',
    name: { ko: '모나코', en: 'Monaco' },
    nativeName: 'Monaco',
    flagImage: '/flags/mc.svg',
    landmarkImage: '/landmarks/landmark-mc.jpg',
    flag: '🇲🇨',
    blurb: {
      ko: '지중해의 작은 공국. 몬테카를로 카지노와 F1이 상징입니다.',
      en: 'Tiny Mediterranean principality—Monte Carlo casino and F1.',
    },
    facts: {
      population: { ko: '약 3.9만 명', en: 'Approx. 39,000' },
      area: { ko: '2.08 km²', en: '2.08 km²' },
      capital: { ko: '모나코 (Monaco)', en: 'Monaco' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: false,
    flagColors: {
      primary: '#CE1126',
      secondary: '#FFFFFF',
      accent: '#CE1126',
      background: '#FCE8EA',
      text: '#3A0A10',
    },
    cityIds: ['monaco', 'monte-carlo'],
  },
  {
    id: 'va',
    name: { ko: '바티칸', en: 'Vatican City' },
    nativeName: 'Status Civitatis Vaticanae',
    flagImage: '/flags/va.svg',
    landmarkImage: '/landmarks/landmark-va.jpg',
    flag: '🇻🇦',
    blurb: {
      ko: '세계 최소 국가. 성 베드로 대성당과 바티칸 박물관이 전부입니다.',
      en: 'World’s smallest state—St Peter’s and the Vatican Museums.',
    },
    facts: {
      population: { ko: '약 800 명', en: 'Approx. 800' },
      area: { ko: '0.49 km²', en: '0.49 km²' },
      capital: { ko: '바티칸 시국 (Vatican City)', en: 'Vatican City' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: false,
    flagColors: {
      primary: '#FFE000',
      secondary: '#FFFFFF',
      accent: '#C8102E',
      background: '#FFFCE8',
      text: '#2A2000',
    },
    cityIds: ['vatican-city'],
  },
  {
    id: 'ad',
    name: { ko: '안도라', en: 'Andorra' },
    nativeName: 'Andorra',
    flagImage: '/flags/ad.svg',
    landmarkImage: '/landmarks/landmark-ad.jpg',
    flag: '🇦🇩',
    blurb: {
      ko: '피레네의 산악 공국. 스키·면세 쇼핑·온천이 매력입니다.',
      en: 'Pyrenean mountain state—skiing, duty-free, and spas.',
    },
    facts: {
      population: { ko: '약 8만 명', en: 'Approx. 80,000' },
      area: { ko: '468 km²', en: '468 km²' },
      capital: { ko: '안도라라베야 (Andorra la Vella)', en: 'Andorra la Vella' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: false,
    flagColors: {
      primary: '#0018A8',
      secondary: '#FEDF00',
      accent: '#D52B1E',
      background: '#E8ECF8',
      text: '#0A1A30',
    },
    cityIds: ['andorra-la-vella', 'pas-de-la-casa', 'ordino'],
  },
  {
    id: 'li',
    name: { ko: '리히텐슈타인', en: 'Liechtenstein' },
    nativeName: 'Liechtenstein',
    flagImage: '/flags/li.svg',
    landmarkImage: '/landmarks/landmark-li.jpg',
    flag: '🇱🇮',
    blurb: {
      ko: '알프스 소공국. 파두츠 성과 말분 스키가 가까이 있습니다.',
      en: 'Alpine microstate—Vaduz Castle and Malbun skiing.',
    },
    facts: {
      population: { ko: '약 4만 명', en: 'Approx. 40,000' },
      area: { ko: '160 km²', en: '160 km²' },
      capital: { ko: '파두츠 (Vaduz)', en: 'Vaduz' },
      currency: { ko: '프랑 (CHF, Fr.)', en: 'Franc (CHF, Fr.)' },
    },
    currencyCode: 'CHF',
    currencySymbol: 'Fr.',
    schengen: true,
    flagColors: {
      primary: '#002B7F',
      secondary: '#CE1126',
      accent: '#FFD700',
      background: '#E8EEF8',
      text: '#0A1A30',
    },
    cityIds: ['vaduz', 'schaan', 'malbun'],
  },
]"""


def patch_countries() -> None:
    path = DATA / "countries.ts"
    text = path.read_text(encoding="utf-8")
    if "id: 'tr'" in text:
        print("countries already has tr")
        return
    marker = "\n]\n\nexport function getCountry"
    if marker not in text:
        raise SystemExit("countries.ts marker not found")
    text = text.replace(marker, "\n" + COUNTRY_BLOCKS + "\n\nexport function getCountry", 1)
    if "},," in text:
        text = text.replace("},,", "},")
        print("fixed },, double commas")
    path.write_text(text, encoding="utf-8")
    print("appended countries tr/bg/ro/mc/va/ad/li")


def main() -> None:
    write_flags()
    patch_countries()
    write_cities_append()
    write_extras()
    patch_places_ts()
    fashion, grocery, asian = fashion_grocery_asian_rows()
    append_category_file(DATA / "places-fashion.ts", fashion, "tr/bg/ro/mc/va/ad/li")
    append_category_file(DATA / "places-grocery.ts", grocery, "tr/bg/ro/mc/va/ad/li")
    append_category_file(DATA / "places-asian.ts", asian, "tr/bg/ro/mc/va/ad/li")


if __name__ == "__main__":
    main()
