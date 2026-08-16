#!/usr/bin/env python3
"""Generate src/data/transit.ts covering every country and city."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "data" / "transit.ts"
MAP = json.loads(Path("/tmp/eu-city-map.json").read_text())

# ── helpers ──────────────────────────────────────────────────────────────

def T(ko: str, en: str) -> dict:
    return {"ko": ko, "en": en}


def city(
    modes: list[str],
    how_ko: str,
    how_en: str,
    apps: list[str],
    *,
    airport_ko: str | None = None,
    airport_en: str | None = None,
    tip_ko: str | None = None,
    tip_en: str | None = None,
    notes: dict[str, tuple[str, str]] | None = None,
) -> dict:
    notes = notes or {}
    entry: dict = {
        "modes": modes,
        "howTo": T(how_ko, how_en),
        "apps": [(a, notes.get(a)) for a in apps],
    }
    if airport_ko and airport_en:
        entry["airportToCity"] = T(airport_ko, airport_en)
    if tip_ko and tip_en:
        entry["tip"] = T(tip_ko, tip_en)
    return entry


# ── country transit ─────────────────────────────────────────────────────

COUNTRIES: dict[str, dict] = {
    "fr": {
        "summary": T("우측통행. TGV·Ouigo·FlixBus로 도시 간 이동이 편합니다.", "Drive on the right. TGV, Ouigo, and FlixBus link cities well."),
        "drivingSide": "right",
        "longDistance": T("파리 허브 TGV, 지역은 TER. 야간열차·장거리 버스도 선택지입니다.", "TGV from Paris hubs; TER regionally. Night trains and coaches are options."),
        "nationalPasses": T("Eurail/Interrail + TGV 좌석 예약이 필요할 수 있습니다.", "Eurail/Interrail; TGV often needs seat reservations."),
        "paymentTip": T("대도시는 Navigo·연락처 없는 카드 태핑. 소도시는 티켓 키오스크를 확인하세요.", "Big cities: Navigo/contactless. Smaller towns may need ticket machines."),
        "apps": [("sncf", ("기차·TGV", "Trains / TGV")), ("uber", None), ("bolt", ("우버 대체", "Uber alternative"))],
    },
    "uk": {
        "summary": T("좌측통행. National Rail·장거리 버스·런던 Tube가 중심입니다.", "Drive on the left. National Rail, coaches, and the London Tube are core."),
        "drivingSide": "left",
        "longDistance": T("도시 간은 기차가 빠르지만 요금 변동이 큽니다. 사전 예약을 권합니다.", "Trains are fast between cities but prices swing—book ahead."),
        "nationalPasses": T("BritRail·Railcard 할인. Eurail은 영국 일부 구간에 제한이 있을 수 있습니다.", "BritRail/Railcards help. Eurail coverage in Britain can be limited."),
        "paymentTip": T("런던은 contactless/Oyster. 지방은 기차 앱·키오스크가 기본입니다.", "London: contactless/Oyster. Elsewhere: rail apps and ticket machines."),
        "apps": [("tfl", ("런던", "London")), ("trainline", ("기차 예약", "Train booking")), ("uber", None), ("bolt", ("런던 등", "London etc."))],
    },
    "ie": {
        "summary": T("좌측통행. Irish Rail·Bus Éireann·시내 버스로 이동합니다.", "Drive on the left. Irish Rail, Bus Éireann, and city buses link places."),
        "drivingSide": "left",
        "longDistance": T("더블린 거점 기차·장거리 버스. 서부·소도시는 버스·렌터가 편할 때가 많습니다.", "Trains/coaches from Dublin; west and small towns often need bus or car."),
        "nationalPasses": T("Leap Visitor·Eurail 일부 구간. 버스 패스도 시즌별 있습니다.", "Leap Visitor and partial Eurail; seasonal bus passes exist."),
        "paymentTip": T("더블린 Leap 카드. 소도시는 현금·카드 버스 결제를 확인하세요.", "Dublin Leap card; check cash/card rules on rural buses."),
        "apps": [("irish-rail", ("기차", "Trains")), ("bolt", ("우버 대체", "Uber alternative")), ("free-now", ("면허 택시", "Licensed taxis")), ("uber", ("더블린 등", "Dublin etc."))],
    },
    "be": {
        "summary": T("우측통행. SNCB/NMBS 기차로 주요 도시가 잘 연결됩니다.", "Drive on the right. SNCB/NMBS trains connect main cities well."),
        "drivingSide": "right",
        "longDistance": T("브뤼셀 허브. 파리·암스테르담은 Thalys/Eurostar·고속 연결.", "Brussels hub; high-speed links to Paris and Amsterdam."),
        "nationalPasses": T("Eurail/Interrail + 벨기에 당일권·주말권이 유용합니다.", "Eurail/Interrail; Belgian day/weekend tickets help."),
        "paymentTip": T("MOBIB·앱 티켓. 브뤼셀·앤트워프는 연락처 없는 결제 확대 중.", "MOBIB/app tickets; contactless expanding in Brussels/Antwerp."),
        "apps": [("sncb", ("국영 기차", "National trains")), ("uber", None), ("bolt", None)],
    },
    "nl": {
        "summary": T("우측통행. NS 기차·트램·버스·자전거가 일상입니다.", "Drive on the right. NS trains, trams, buses, and bikes are everyday."),
        "drivingSide": "right",
        "longDistance": T("암스테르담·로테르담·위트레흐트 허브. OV-chipkaart로 대부분 환승.", "Amsterdam/Rotterdam/Utrecht hubs; OV-chipkaart covers most transfers."),
        "nationalPasses": T("Eurail/Interrail + NS 당일권. 자전거 대여는 NS·시티바이크.", "Eurail/Interrail + NS day tickets; NS and city bike hire."),
        "paymentTip": T("OV-chipkaart 또는 스마트폰 check-in/out 필수. Uber는 암스테르담·로테르담 중심, 다른 도시는 Bolt.", "OV-chipkaart or phone check-in/out. Uber is mainly Amsterdam/Rotterdam; Bolt elsewhere."),
        "apps": [("ns", ("기차", "Trains")), ("uber", ("암스테르담·로테르담", "Amsterdam & Rotterdam")), ("bolt", ("우버 대체", "Uber alternative"))],
    },
    "lu": {
        "summary": T("우측통행. 국내 대중교통이 무료인 점이 특징입니다.", "Drive on the right. Notable for free nationwide public transport."),
        "drivingSide": "right",
        "longDistance": T("룩셈부르크–트리에르·브뤼셀·파리 연결 기차·버스.", "Trains/buses to Trier, Brussels, Paris."),
        "nationalPasses": T("국내 버스·기차·트램 무료. 국제선은 별도 요금.", "Domestic bus/train/tram free; cross-border tickets sold separately."),
        "paymentTip": T("국내선 티켓 불필요. 국경 넘는 구간만 결제하면 됩니다.", "No ticket inside Luxembourg; pay only for cross-border legs."),
        "apps": [("cfl", ("기차·이동", "Rail & travel")), ("uber", ("룩셈부르크시", "Luxembourg City"))],
    },
    "mc": {
        "summary": T("우측통행. 모나코는 버스·도보·택시 중심의 작은 도시국가입니다.", "Drive on the right. Tiny city-state: buses, walking, and taxis."),
        "drivingSide": "right",
        "longDistance": T("니스·모나코 기차·버스. 공항은 니스 Côte d'Azur가 일반적입니다.", "Train/bus to Nice; Nice Côte d'Azur Airport is usual."),
        "paymentTip": T("캠(CAM) 버스 카드·앱. 우버는 모나코 안에서 호출이 안 되고, 니스에서 들어오는 식입니다.", "CAM bus card/app. Uber cannot pick up inside Monaco; rides usually start from Nice."),
        "apps": [("free-now", ("니스·코트다쥐르", "Nice / Côte d'Azur"))],
    },
    "de": {
        "summary": T("우측통행. DB ICE/IC와 지역 S-Bahn·U-Bahn이 뼈대입니다.", "Drive on the right. DB ICE/IC plus regional S-/U-Bahn are the backbone."),
        "drivingSide": "right",
        "longDistance": T("ICE로 대도시 연결. 지역은 RE/RB·FlixBus. 파업·지연을 앱으로 확인하세요.", "ICE between cities; RE/RB and FlixBus regionally—check strikes/delays in apps."),
        "nationalPasses": T("Deutschland-Ticket(지역)·Eurail/Interrail. ICE는 예약이 편합니다.", "Deutschland-Ticket (regional) and Eurail/Interrail; reserve ICE seats."),
        "paymentTip": T("대도시는 교통권·스마트폰. 호출은 Free Now가 안정적이고, Uber·Bolt는 면허 택시 배차입니다.", "City tickets/phone taps; Free Now is reliable, Uber/Bolt dispatch licensed taxis."),
        "apps": [("db", ("DB 기차", "DB trains")), ("free-now", ("우버 대체", "Uber alternative")), ("bolt", None)],
    },
    "ch": {
        "summary": T("우측통행. SBB 기차 정시성과 산악 연결이 뛰어납니다.", "Drive on the right. Excellent SBB punctuality and mountain links."),
        "drivingSide": "right",
        "longDistance": T("취리히·제네바·베른 허브. 산간은 기차+포스트버스·케이블카.", "Zürich/Geneva/Bern hubs; mountains via train + PostBus/cableways."),
        "nationalPasses": T("Swiss Travel Pass·Eurail. 산악 구간은 추가 요금이 있을 수 있습니다.", "Swiss Travel Pass/Eurail; mountain segments may cost extra."),
        "paymentTip": T("SBB 앱 티켓·Half Fare Card. 현금보다 카드가 편합니다.", "SBB app tickets/Half Fare Card; cards beat cash."),
        "apps": [("sbb", ("기차·버스", "Trains & buses")), ("uber", ("취리히·제네바 등", "Zürich, Geneva etc."))],
    },
    "at": {
        "summary": T("우측통행. ÖBB 기차와 빈·잘츠부르크 시내 교통이 잘 갖춰져 있습니다.", "Drive on the right. ÖBB trains and strong urban networks in Vienna/Salzburg."),
        "drivingSide": "right",
        "longDistance": T("빈 허브 Railjet. 잘츠캄머구트는 기차+버스.", "Vienna Railjet hub; Salzkammergut needs train+bus."),
        "nationalPasses": T("Klimaticket·Eurail/Interrail. 좌석 예약을 권합니다.", "Klimaticket and Eurail/Interrail; seat reservations help."),
        "paymentTip": T("빈은 WienMobil. 지방은 ÖBB 티켓·앱.", "Vienna: WienMobil; elsewhere ÖBB tickets/apps."),
        "apps": [("oebb", ("ÖBB 기차", "ÖBB trains")), ("citymapper", ("빈", "Vienna")), ("uber", None)],
    },
    "li": {
        "summary": T("우측통행. 리히텐슈타인은 버스(LIEmobil)와 도보가 중심입니다.", "Drive on the right. Buses (LIEmobil) and walking dominate."),
        "drivingSide": "right",
        "longDistance": T("스위스·오스트리아 국경 기차역 환승 후 버스.", "Transfer at Swiss/Austrian border stations then bus."),
        "paymentTip": T("LIEmobil 티켓·데이패스. 우버·볼트는 없고 현지 택시입니다.", "LIEmobil tickets/day passes; no Uber/Bolt—use local taxis."),
        "apps": [("sbb", ("인접 스위스 연결", "Swiss connections"))],
    },
    "cz": {
        "summary": T("우측통행. ČD 기차와 프라하 지하철·트램이 핵심입니다.", "Drive on the right. ČD trains and Prague metro/trams are key."),
        "drivingSide": "right",
        "longDistance": T("프라하 허브. 소도시는 버스·지역열차. RegioJet·FlixBus도 흔합니다.", "Prague hub; buses/regional trains for towns; RegioJet/FlixBus common."),
        "nationalPasses": T("Eurail/Interrail + ČD 할인. 프라하 관광권은 시내에 유용.", "Eurail/Interrail + ČD discounts; Prague tourist passes for the city."),
        "paymentTip": T("프라하는 PID 리트바/앱. 호출은 Bolt가 기본, Uber는 프라하·브르노.", "Prague PID Litacka/app; Bolt first, Uber in Prague/Brno."),
        "apps": [("cd", ("기차", "Trains")), ("bolt", ("우버 대체", "Uber alternative")), ("uber", ("프라하·브르노", "Prague & Brno"))],
    },
    "sk": {
        "summary": T("우측통행. ZSSK 기차와 시내버스로 이동합니다.", "Drive on the right. ZSSK trains and city buses."),
        "drivingSide": "right",
        "longDistance": T("브라티슬라바–빈은 기차가 매우 가깝습니다. 타트라 산악은 기차+버스.", "Bratislava–Vienna is a short train ride; Tatras need train+bus."),
        "nationalPasses": T("Eurail/Interrail. 국내 할인권을 시즌별로 확인하세요.", "Eurail/Interrail; check seasonal domestic discounts."),
        "paymentTip": T("시내 티켓 앱·키오스크. 브라티슬라바는 Bolt가 편하고 Uber는 수도에서만 됩니다.", "City tickets via app/kiosk; Bolt is handy, Uber only in Bratislava."),
        "apps": [("trainline", ("예약 보조", "Booking help")), ("bolt", None), ("uber", ("브라티슬라바만", "Bratislava only"))],
    },
    "hu": {
        "summary": T("우측통행. MÁV 기차와 부다페스트 지하철·트램이 중심입니다.", "Drive on the right. MÁV trains and Budapest metro/trams."),
        "drivingSide": "right",
        "longDistance": T("부다페스트 허브. 덱밴드·페치 등은 기차·버스.", "Budapest hub; Debrecen/Pécs by train or bus."),
        "nationalPasses": T("Eurail/Interrail + Budapest Card(시내).", "Eurail/Interrail plus Budapest Card in the city."),
        "paymentTip": T("부다페스트는 BudapestGO. 우버는 2016년부터 없고 Bolt가 표준입니다.", "BudapestGO app; Uber has been banned since 2016—use Bolt."),
        "apps": [("mav", ("기차", "Trains")), ("bolt", ("우버 대체", "Uber alternative"))],
    },
    "pl": {
        "summary": T("우측통행. PKP Intercity와 도시 트램·버스가 잘 발달했습니다.", "Drive on the right. PKP Intercity plus strong city trams/buses."),
        "drivingSide": "right",
        "longDistance": T("바르샤바·크라쿠프·그단스크 허브. FlixBus·PolskiBus도 선택지.", "Warsaw/Kraków/Gdańsk hubs; FlixBus also useful."),
        "nationalPasses": T("Eurail/Interrail + PKP 할인. 좌석 예약을 권합니다.", "Eurail/Interrail + PKP discounts; reserve seats."),
        "paymentTip": T("도시카드·Jakdojade 앱. 호출은 Bolt가 더 빠르고 Uber는 대도시 보조입니다.", "City cards and Jakdojade; Bolt is usually faster, Uber as backup in big cities."),
        "apps": [("pkp", ("기차", "Trains")), ("bolt", ("더 잘 잡힘", "Usually more cars")), ("uber", None)],
    },
    "es": {
        "summary": T("우측통행. 도시 간은 Renfe(AVE 고속철)·장거리 버스(ALSA 등)가 중심입니다.", "Drive on the right. Renfe (AVE high-speed) and coaches (ALSA etc.) link cities."),
        "drivingSide": "right",
        "longDistance": T("마드리드–바르셀로나·세비야 등은 AVE. 코스타 델 솔·소도시는 버스가 편할 때가 많습니다.", "AVE for Madrid–Barcelona/Seville etc.; buses are often easier for Costa del Sol and smaller towns."),
        "nationalPasses": T("Eurail/Interrail + Renfe 좌석 예약. 스페인 국내 패스·할인 상품도 시즌별 있습니다.", "Eurail/Interrail plus Renfe seat reservations; seasonal Renfe passes/discounts also exist."),
        "paymentTip": T("대도시는 교통카드·스마트폰 탭. 호출은 Cabify·Free Now·Bolt를 같이 두고, Uber는 도시마다 다릅니다.", "Big cities: transit cards or phone tap. Keep Cabify, Free Now, and Bolt; Uber coverage varies by city."),
        "apps": [("renfe", ("기차·AVE", "Trains / AVE")), ("alsa", ("장거리 버스", "Coach buses")), ("cabify", ("우버 대체", "Uber alternative")), ("bolt", None)],
    },
    "pt": {
        "summary": T("우측통행. 도시 간은 Comboios(기차)·Rede Expressos(버스)가 기본입니다.", "Drive on the right. Between cities, Comboios (train) and Rede Expressos (bus) are the bases."),
        "drivingSide": "right",
        "longDistance": T("리스본–포르투 Alfa Pendular·인터시티, 알가르브는 기차 또는 장거리 버스.", "Lisbon–Porto Alfa Pendular / Intercidades; Algarve by train or coach."),
        "nationalPasses": T("Eurail/Interrail로 대부분 장거리 기차 이용 가능. 일부는 좌석 예약이 필요할 수 있습니다.", "Eurail/Interrail covers most long-distance trains; some need seat reservations."),
        "paymentTip": T("도시 교통은 카드·모바일. TVDE 호출은 Bolt가 우버보다 잘 잡히는 경우가 많고 Cabify도 있습니다.", "City transit is card/mobile. For TVDE rides Bolt often has more cars than Uber; Cabify too."),
        "apps": [("cp", ("국영 기차", "National trains")), ("rede-expressos", ("장거리 버스", "Coach buses")), ("bolt", ("우버보다 잘 잡히는 편", "Often easier than Uber")), ("uber", ("주요 도시", "Major cities"))],
    },
    "ad": {
        "summary": T("우측통행. 안도라는 버스가 사실상 유일한 장거리 대중교통입니다.", "Drive on the right. Buses are essentially the only long-distance public option."),
        "drivingSide": "right",
        "longDistance": T("바르셀로나·툴루즈 공항/역에서 장거리 버스 환승이 일반적입니다.", "Usually coach transfers from Barcelona or Toulouse airports/stations."),
        "paymentTip": T("버스 현장·온라인 예매. 택시·렌터도 산악 일정에 유용합니다.", "Book coaches online or on-site; taxis/rentals help in the mountains."),
        "apps": [("alsa", ("바르셀로나 방면", "Toward Barcelona")), ("uber", ("안도라라베야", "Andorra la Vella")), ("cabify", None)],
    },
    "it": {
        "summary": T("우측통행. Trenitalia·Italo 고속철과 지역 버스가 중심입니다.", "Drive on the right. Trenitalia/Italo high-speed plus regional buses."),
        "drivingSide": "right",
        "longDistance": T("로마–밀라노–피렌체 Frecciarossa. 아말피·돌로미티는 버스·페리 조합.", "Frecciarossa on Rome–Milan–Florence; Amalfi/Dolomites need bus/ferry combos."),
        "nationalPasses": T("Eurail/Interrail + 좌석 예약. ITALO는 별도 티켓인 경우가 많습니다.", "Eurail/Interrail with seat reservations; Italo often separate."),
        "paymentTip": T("대도시는 교통앱·컨택리스. 일반 택시는 Free Now, Uber는 블랙 등 프리미엄 위주입니다.", "City transit apps/contactless. Free Now for regular taxis; Uber is mostly Black/premium."),
        "apps": [("trenitalia", ("기차", "Trains")), ("free-now", ("일반 택시", "Licensed taxis")), ("uber", ("블랙 위주", "Mostly Black"))],
    },
    "va": {
        "summary": T("바티칸은 보행 중심. 로마 시내 교통으로 접근합니다.", "Vatican City is walkable; access via Rome’s transit."),
        "drivingSide": "right",
        "longDistance": T("로마 테르미니·메트로 A Ottaviano/Cipro가 일반적입니다.", "Usually via Roma Termini or metro A (Ottaviano/Cipro)."),
        "paymentTip": T("로마 ATAC 티켓·앱. 바티칸 내부는 보안검색 후 도보.", "Rome ATAC tickets/apps; walk after Vatican security."),
        "apps": [("trenitalia", None), ("free-now", ("로마 택시", "Rome taxis")), ("uber", ("로마에서 블랙", "Black from Rome"))],
    },
    "mt": {
        "summary": T("좌측통행. 버스와 고조 페리가 핵심입니다.", "Drive on the left. Buses and the Gozo ferry are essential."),
        "drivingSide": "left",
        "longDistance": T("몰타 본섬은 버스 네트워크. 고조는 페리 필수.", "Bus network on Malta; ferry required for Gozo."),
        "paymentTip": T("Tallinja 카드·앱. 택시는 화이트 택시 또는 앱.", "Tallinja card/app; white taxis or ride apps."),
        "apps": [("bolt", None), ("uber", None)],
    },
    "gr": {
        "summary": T("우측통행. KTEL 버스·기차·섬 페리가 여행의 뼈대입니다.", "Drive on the right. KTEL buses, trains, and island ferries are the backbone."),
        "drivingSide": "right",
        "longDistance": T("아테네 허브. 섬은 페리·국내선. 그리스 본토는 장거리 버스가 강한 편입니다.", "Athens hub; islands by ferry/flight; mainland coaches are strong."),
        "nationalPasses": T("Eurail 일부. 페리 패스·선사 할인을 따로 확인하세요.", "Partial Eurail; check ferry passes and operator deals separately."),
        "paymentTip": T("아테네 Ath.ena 카드. 섬은 현금·카드가 섞여 있습니다.", "Athens Ath.ena card; islands mix cash and cards."),
        "apps": [("trainline", ("예약 보조", "Booking help")), ("bolt", None), ("uber", ("아테네 등", "Athens etc."))],
    },
    "cy": {
        "summary": T("좌측통행. 도시 간은 버스가 주력이며 렌터 수요가 큽니다.", "Drive on the left. Intercity buses dominate; car hire is popular."),
        "drivingSide": "left",
        "longDistance": T("니코시아·리마솔·파포스 장거리 버스. 야간·주말은 배차가 줄어듭니다.", "Intercity buses between Nicosia, Limassol, Paphos; thinner evening/weekend service."),
        "paymentTip": T("버스 현금·카드. 우버는 없고 Bolt가 표준입니다.", "Bus cash/card; no Uber—Bolt is the standard."),
        "apps": [("bolt", ("우버 없음", "No Uber"))],
    },
    "dk": {
        "summary": T("우측통행. DSB 기차와 코펜하겐 메트로·버스가 우수합니다.", "Drive on the right. Excellent DSB trains and Copenhagen metro/buses."),
        "drivingSide": "right",
        "longDistance": T("코펜하겐–오르후스 등. 외레순 다리로 말뫼 연결.", "Copenhagen–Aarhus etc.; Øresund bridge to Malmö."),
        "nationalPasses": T("Eurail/Interrail + Rejsekort/city passes.", "Eurail/Interrail plus Rejsekort/city passes."),
        "paymentTip": T("Rejsekort 또는 모바일 티켓. 2026년 우버가 재진입했지만 Bolt·공식 택시도 같이 두세요.", "Rejsekort or mobile tickets. Uber returned in 2026; still keep Bolt and official taxis."),
        "apps": [("dsb", ("기차", "Trains")), ("bolt", ("우버 대체", "Uber alternative")), ("uber", ("코펜하겐 등", "Copenhagen etc."))],
    },
    "se": {
        "summary": T("우측통행. SJ 기차와 SL(스톡홀름) 등 시내 교통이 잘 연결되어 있습니다.", "Drive on the right. SJ trains and city systems like SL (Stockholm)."),
        "drivingSide": "right",
        "longDistance": T("스톡홀름·예테보리·말뫼 허브. 북부는 야간열차·국내선.", "Stockholm/Gothenburg/Malmö hubs; north needs night trains or flights."),
        "nationalPasses": T("Eurail/Interrail + SJ 예약. SL/Västtrafik 시내 패스.", "Eurail/Interrail + SJ bookings; SL/Västtrafik city passes."),
        "paymentTip": T("앱 티켓·contactless. 도시는 Uber·Bolt도 가능합니다.", "App tickets/contactless; Uber/Bolt in cities."),
        "apps": [("sj", ("기차", "Trains")), ("bolt", None), ("uber", None)],
    },
    "no": {
        "summary": T("우측통행. Vy 기차·장거리 버스·피요르드 페리가 핵심입니다.", "Drive on the right. Vy trains, coaches, and fjord ferries are key."),
        "drivingSide": "right",
        "longDistance": T("오슬로 허브. 베르겐선·북극행은 예약 필수. 산악·피요르드는 버스+페리.", "Oslo hub; book Bergen Line/Arctic services; mountains need bus+ferry."),
        "nationalPasses": T("Eurail/Interrail + Vy. 페리·관광 열차는 추가 요금.", "Eurail/Interrail + Vy; ferries/scenic trains often extra."),
        "paymentTip": T("Entur 앱으로 통합 조회. 도시는 Ruter 등 지역 앱.", "Entur for nationwide planning; city apps like Ruter."),
        "apps": [("vy", ("기차·버스", "Trains & buses")), ("bolt", None), ("uber", ("오슬로·베르겐 등", "Oslo, Bergen etc."))],
    },
    "fi": {
        "summary": T("우측통행. VR 기차와 HSL(헬싱키) 시내 교통이 중심입니다.", "Drive on the right. VR trains and HSL (Helsinki) city transit."),
        "drivingSide": "right",
        "longDistance": T("헬싱키 허브. 북부·라플란드는 야간열차·국내선.", "Helsinki hub; north/Lapland via night trains or flights."),
        "nationalPasses": T("Eurail/Interrail + VR. HSL day tickets for the capital region.", "Eurail/Interrail + VR; HSL day tickets for the capital."),
        "paymentTip": T("HSL 앱·VR 앱. Uber·Bolt가 헬싱키에서 흔합니다.", "HSL/VR apps; Uber/Bolt common in Helsinki."),
        "apps": [("vr", ("기차", "Trains")), ("bolt", None), ("uber", None)],
    },
    "is": {
        "summary": T("우측통행. 시외는 버스·렌터가 사실상 필수에 가깝습니다.", "Drive on the right. Outside Reykjavík, buses or rentals are nearly essential."),
        "drivingSide": "right",
        "longDistance": T("스트레이토 버스·관광 버스. 링로드는 렌터 일정이 일반적입니다.", "Strætó and tour coaches; Ring Road trips usually need a car."),
        "paymentTip": T("레이캬비크는 Bolt. 우버는 없고 공항–시내는 Flybus가 훨씬 쌉니다.", "Reykjavík: Bolt. No Uber; Flybus beats taxis to the airport."),
        "apps": [("bolt", ("레이캬비크", "Reykjavík"))],
    },
    "ee": {
        "summary": T("우측통행. Elron 기차와 탈린 시내 교통이 편합니다.", "Drive on the right. Elron trains and Tallinn city transit work well."),
        "drivingSide": "right",
        "longDistance": T("탈린–타르투 기차·버스. 헬싱키는 페리.", "Tallinn–Tartu by train/bus; ferries to Helsinki."),
        "nationalPasses": T("Eurail 일부. 탈린 관광카드가 시내에 유용.", "Partial Eurail; Tallinn cards help in the city."),
        "paymentTip": T("탈린은 교통카드·앱. Bolt가 기본이고 Uber는 탈린에서만 됩니다.", "Tallinn card/app; Bolt is the default, Uber only in Tallinn."),
        "apps": [("bolt", ("우버 대체", "Uber alternative")), ("uber", ("탈린만", "Tallinn only"))],
    },
    "lv": {
        "summary": T("우측통행. 리가는 트램·버스, 시외는 버스가 중심입니다.", "Drive on the right. Riga trams/buses; coaches elsewhere."),
        "drivingSide": "right",
        "longDistance": T("리가 허브 버스·기차. 탈린·빌뉴스 국제 버스가 흔합니다.", "Riga coach/train hub; frequent buses to Tallinn/Vilnius."),
        "paymentTip": T("리가 e-talons. 우버는 없고 Bolt가 표준입니다.", "Riga e-talons; no Uber—Bolt is the standard."),
        "apps": [("bolt", ("우버 없음", "No Uber"))],
    },
    "lt": {
        "summary": T("우측통행. 빌뉴스·카우나스 버스·트롤리·기차가 연결됩니다.", "Drive on the right. Vilnius/Kaunas buses, trolleys, and trains."),
        "drivingSide": "right",
        "longDistance": T("빌뉴스 허브. 폴란드·라트비아 방면 버스가 편합니다.", "Vilnius hub; buses toward Poland and Latvia are easy."),
        "paymentTip": T("시내 교통카드·앱. Bolt가 훨씬 잘 잡히고 Uber는 빌뉴스에서만, 대기 시간이 길 수 있습니다.", "City cards/apps; Bolt is far more reliable, Uber only in Vilnius with long waits."),
        "apps": [("bolt", ("우버보다 잘 잡힘", "Usually more cars")), ("uber", ("빌뉴스만", "Vilnius only"))],
    },
    "hr": {
        "summary": T("우측통행. 장거리 버스·아드리아 페리가 핵심입니다.", "Drive on the right. Long-distance buses and Adriatic ferries are key."),
        "drivingSide": "right",
        "longDistance": T("자그레브 허브. 스플리트·두브로브니크는 버스·페리·국내선.", "Zagreb hub; Split/Dubrovnik by bus, ferry, or flight."),
        "nationalPasses": T("Eurail 일부 기차. 해안은 버스·선사 패스를 확인하세요.", "Partial Eurail rail; check coastal buses and ferry passes."),
        "paymentTip": T("시내 티켓·앱. 성수기 페리·버스는 사전 예약을 권합니다.", "City tickets/apps; book peak ferries/buses ahead."),
        "apps": [("flixbus", ("장거리 버스", "Coaches")), ("bolt", None), ("uber", None)],
    },
    "si": {
        "summary": T("우측통행. 기차·버스로 짧은 거리를 효율적으로 이동합니다.", "Drive on the right. Compact distances work well by train and bus."),
        "drivingSide": "right",
        "longDistance": T("류블랴나 허브. 블레드·포스토이나는 버스가 편합니다.", "Ljubljana hub; Bled/Postojna are easy by bus."),
        "nationalPasses": T("Eurail/Interrail. 당일 버스 패스도 유용합니다.", "Eurail/Interrail; day bus tickets help."),
        "paymentTip": T("시내 Urbana 등. 우버는 없고 Bolt를 쓰세요.", "City cards like Urbana; no Uber—use Bolt."),
        "apps": [("trainline", None), ("bolt", ("우버 없음", "No Uber"))],
    },
    "ba": {
        "summary": T("우측통행. 장거리 버스가 도시 간 이동의 기본입니다.", "Drive on the right. Intercity buses are the default."),
        "drivingSide": "right",
        "longDistance": T("사라예보·모스타르 버스. 기차는 노선이 제한적입니다.", "Sarajevo–Mostar buses; limited rail options."),
        "paymentTip": T("버스 터미널 현장 예매가 흔합니다. Bolt·택시를 이용하세요.", "Buy bus tickets at stations; use Bolt/taxis in cities."),
        "apps": [("bolt", None), ("flixbus", None)],
    },
    "me": {
        "summary": T("우측통행. 해안 버스와 렌터가 여행에 유용합니다.", "Drive on the right. Coastal buses and rentals help a lot."),
        "drivingSide": "right",
        "longDistance": T("포드를리차·코토르·부드바 버스. 두브로브니크 방면 국제 버스.", "Buses Podgorica–Kotor–Budva; coaches toward Dubrovnik."),
        "paymentTip": T("터미널·온라인 버스 티켓. 우버는 없고 Bolt·현지 택시입니다.", "Station/online bus tickets; no Uber—Bolt or local taxis."),
        "apps": [("bolt", ("우버 없음", "No Uber"))],
    },
    "rs": {
        "summary": T("우측통행. Srbija Voz 기차와 장거리 버스가 병행됩니다.", "Drive on the right. Srbija Voz trains plus long-distance buses."),
        "drivingSide": "right",
        "longDistance": T("베오그라드 허브. 노비사드·니시 기차·버스.", "Belgrade hub; Novi Sad/Niš by train or bus."),
        "paymentTip": T("시내 버스 카드·앱. CarGo·Bolt가 대도시에서 편합니다.", "City bus cards/apps; CarGo/Bolt help in big cities."),
        "apps": [("bolt", None), ("flixbus", None)],
    },
    "mk": {
        "summary": T("우측통행. 장거리 버스가 주력이고 기차는 제한적입니다.", "Drive on the right. Coaches dominate; rail is limited."),
        "drivingSide": "right",
        "longDistance": T("스코페 허브. 오흐리드 방면 버스가 일반적입니다.", "Skopje hub; buses to Ohrid are typical."),
        "paymentTip": T("터미널 티켓. 시내는 버스·택시·Bolt.", "Station tickets; city buses/taxis/Bolt."),
        "apps": [("bolt", None)],
    },
    "al": {
        "summary": T("우측통행. 푸르곤·장거리 버스가 일반적이고 렌터도 흔합니다.", "Drive on the right. Furgon minibuses/coaches are common; rentals too."),
        "drivingSide": "right",
        "longDistance": T("티라나 허브. 베라트·사란데 버스. 해안은 배차가 성수기에 늘어납니다.", "Tirana hub; buses to Berat/Sarandë; coastal service grows in peak season."),
        "paymentTip": T("현금 결제가 많은 편. 택시 요금은 미리 합의하세요.", "Cash is common; agree taxi fares first."),
        "apps": [("bolt", None)],
    },
    "bg": {
        "summary": T("우측통행. BDZ 기차와 장거리 버스가 함께 쓰입니다.", "Drive on the right. BDZ trains and long-distance buses."),
        "drivingSide": "right",
        "longDistance": T("소피아 허브. 플로브디프·바르나 기차·버스.", "Sofia hub; Plovdiv/Varna by train or bus."),
        "nationalPasses": T("Eurail/Interrail 일부. 버스가 더 빠른 구간도 많습니다.", "Partial Eurail/Interrail; buses often faster on some routes."),
        "paymentTip": T("시내 교통카드. TaxiMe·Bolt 권장.", "City transit cards; prefer TaxiMe/Bolt."),
        "apps": [("bolt", None), ("flixbus", None)],
    },
    "ro": {
        "summary": T("우측통행. CFR 기차와 시내 메트로(부쿠레슈티)·버스가 중심입니다.", "Drive on the right. CFR trains plus Bucharest metro and city buses."),
        "drivingSide": "right",
        "longDistance": T("부쿠레슈티 허브. 브라쇼브·클루지 기차·버스.", "Bucharest hub; Brașov/Cluj by train or bus."),
        "nationalPasses": T("Eurail/Interrail + CFR 예약.", "Eurail/Interrail with CFR reservations."),
        "paymentTip": T("부쿠레슈티 Metrorex 카드. Bolt가 기본이고 Uber는 대도시 보조입니다.", "Bucharest Metrorex card; Bolt first, Uber as backup in big cities."),
        "apps": [("trainline", ("예약 보조", "Booking help")), ("bolt", ("우버 대체", "Uber alternative")), ("uber", None)],
    },
    "tr": {
        "summary": T("우측통행. 고속철·장거리 버스·도시 메트로/페리가 발달했습니다.", "Drive on the right. High-speed rail, coaches, and city metro/ferries."),
        "drivingSide": "right",
        "longDistance": T("이스탄불·앙카라 허브. 국내선·고속버스(Metro/Kamil Koç 등)가 흔합니다.", "Istanbul/Ankara hubs; domestic flights and big coaches are common."),
        "paymentTip": T("이스탄불kart. BiTaksi·Bolt·Uber(규제 변동 있음). 장거리는 고속버스 앱.", "Istanbulkart; BiTaksi, Bolt, and Uber (rules shift). Coaches for long trips."),
        "apps": [("bolt", ("우버 대체", "Uber alternative")), ("uber", ("대도시·규제 확인", "Big cities; check rules"))],
    },
    "ge": {
        "summary": T("우측통행. 기차·마슈루트카·장거리 버스로 이동합니다.", "Drive on the right. Trains, marshrutkas, and coaches."),
        "drivingSide": "right",
        "longDistance": T("트빌리시 허브. 바투미 기차·버스. 카즈베기는 미니버스·렌터.", "Tbilisi hub; Batumi by train/bus; Kazbegi by minibus/rental."),
        "paymentTip": T("트빌리시 MetroMoney. Bolt·Yandex Go가 흔합니다.", "Tbilisi MetroMoney; Bolt/Yandex Go are common."),
        "apps": [("bolt", ("우버 없음", "No Uber"))],
    },
}

# ── curated city overrides (major / special) ────────────────────────────

CURATED: dict[str, dict] = {
    # Keep / mirror high-quality PT+ES (existing)
    "lisbon": city(
        ["metro", "tram", "bus", "train", "rideshare", "taxi", "walk"],
        "Viva Viagem / Navegante 카드 또는 교통 앱. 90분 환승 티켓·일일권이 편합니다. 28번 트램은 혼잡하니 일찍 타세요.",
        "Viva Viagem / Navegante card or transit apps. 90-min transfers or day passes work well. Tram 28 is crowded—go early.",
        ["citymapper", "carris", "metro-lisboa", "uber"],
        airport_ko="공항 메트로(vermelho)로 Saldanha·Baixa 방면 약 25–40분. Bolt/Uber/택시 약 15–25€.",
        airport_en="Metro (red line) toward Saldanha/Baixa ~25–40 min. Bolt/Uber/taxi about €15–25.",
        tip_ko="알파마·바이샤는 언덕이 많아 트램·엘리베이터·케이블카를 같이 쓰면 편합니다.",
        tip_en="Alfama and Baixa are hilly—combine trams, elevators, and funiculars.",
        notes={"carris": ("시내 버스·트램", "City bus & tram")},
    ),
    "porto": city(
        ["metro", "bus", "train", "tram", "rideshare", "taxi", "walk"],
        "Andante 카드로 메트로·버스 통합. 존(zone)별 요금. Sao Bento–Campanhã 기차·시내 이동에 유용합니다.",
        "Andante card covers metro and buses by zone. Handy with São Bento–Campanhã trains.",
        ["citymapper", "metro-porto", "uber"],
        airport_ko="메트로 E선으로 시내(트린다지 등) 약 30–40분. Bolt/택시 약 20–30€.",
        airport_en="Metro line E to downtown (e.g. Trindade) ~30–40 min. Bolt/taxi about €20–30.",
        tip_ko="히베이라·빌라 노바 드 가이아 강변은 도보·메트로·수상 택시 조합이 좋습니다.",
        tip_en="Ribeira and Gaia waterfront work well on foot, metro, or water taxi.",
    ),
    "sintra": city(
        ["train", "bus", "taxi", "rideshare", "walk"],
        "CP 근교 기차가 핵심. 시내–왕궁·페나 성은 투어버스(434 등)·도보·Uber를 섞습니다.",
        "CP suburban trains are the backbone. Palaces use tourist bus (e.g. 434), walking, or Uber.",
        ["cp", "uber"],
        airport_ko="리스본 공항 → 시내 기차역(Rossio/Oriente) 환승 후 Sintra선. 자동차·Uber는 성수기 주차 혼잡을 고려하세요.",
        airport_en="From Lisbon airport, transfer to Rossio/Oriente then the Sintra train. Cars/Uber face peak parking crowds.",
        tip_ko="페나 성·무어 성 구간은 경사가 심합니다. 왕복 교통을 미리 정해 두면 편합니다.",
        tip_en="Pena and Moorish castle climbs are steep—plan return transport ahead.",
    ),
    "faro": city(
        ["bus", "train", "taxi", "rideshare", "walk"],
        "시내는 도보 충분. Eva·Vamus 버스와 CP 기차로 Lagos·Albufeira 이동.",
        "Town center is walkable. Eva/Vamus buses and CP trains reach Lagos and Albufeira.",
        ["cp", "uber"],
        airport_ko="공항 버스·택시로 시내 10–20분. 알가르브 다른 해변 도시는 장거리 버스·렌터가 편합니다.",
        airport_en="Airport bus/taxi to town in 10–20 min. Other Algarve towns are easier by coach or rental car.",
    ),
    "cascais": city(
        ["train", "bus", "taxi", "rideshare", "bike", "walk"],
        "리스본–카스카이스 근교 기차가 가장 편합니다. 해안 산책·자전거는 보카 도 인페르노 방면.",
        "Suburban train from Lisbon is easiest. Walk or bike the coast toward Boca do Inferno.",
        ["cp", "uber"],
        airport_ko="리스본 공항 → Cais do Sodré 환승 후 Cascais선 기차 약 40분.",
        airport_en="Lisbon airport → Cais do Sodré, then Cascais line train ~40 min.",
    ),
    "braga": city(
        ["bus", "train", "taxi", "rideshare", "walk"],
        "시내는 도보·시내버스. Bom Jesus는 버스 또는 Uber + 언덕 엘리베이터/계단.",
        "Walk or city bus downtown. Bom Jesus: bus/Uber plus funicular or stairs.",
        ["cp", "uber"],
        airport_ko="포르투 공항에서 버스·기차 환승 또는 Bolt(약 40–50분).",
        airport_en="From Porto airport: bus/train transfer or Bolt (~40–50 min).",
    ),
    "nazare": city(
        ["bus", "taxi", "rideshare", "walk"],
        "시내–시티우(언덕)는 엘리베이터·버스·도보. 북해변은 도보 또는 짧은 택시.",
        "Town–Sítio uses the funicular, bus, or walk. Praia do Norte is a short walk or taxi.",
        ["rede-expressos", "uber"],
        airport_ko="리스본에서 Rede Expressos 등 장거리 버스 약 1.5–2시간. 렌터·Uber는 비쌀 수 있습니다.",
        airport_en="Coach from Lisbon ~1.5–2 hrs (e.g. Rede Expressos). Rental/Uber can cost more.",
        tip_ko="빅웨이브 시즌에는 시티우 전망대 접근이 혼잡합니다. 엘리베이터를 우선하세요.",
        tip_en="In big-wave season Sítio viewpoints get crowded—prefer the funicular.",
    ),
    "guimaraes": city(
        ["bus", "train", "taxi", "rideshare", "walk"],
        "구시가·성은 대부분 도보. 펜야 산은 케이블카 또는 Uber.",
        "Old town and castle are walkable. Penha is cable car or Uber.",
        ["cp", "uber"],
        airport_ko="포르투에서 기차·버스 약 1시간. 공항에서는 포르투 시내 환승이 일반적입니다.",
        airport_en="Train or bus from Porto ~1 hr. From the airport, usually transfer via Porto.",
    ),
    "madrid": city(
        ["metro", "bus", "train", "rideshare", "taxi", "walk"],
        "Tarjeta Multi / 관광 티켓. 메트로+버스 환승. Citymapper·공식 Metro de Madrid 앱이 편합니다.",
        "Tarjeta Multi or tourist passes. Metro+bus transfers. Citymapper or Metro de Madrid apps help.",
        ["citymapper", "metro-madrid", "free-now", "uber"],
        airport_ko="메트로 8호선 또는 Cercanías·공항 버스(Express). 택시 고정요금 구간이 있습니다.",
        airport_en="Metro line 8, Cercanías, or Airport Express bus. Flat-rate taxi options to the center.",
        tip_ko="공항–시내 택시는 공식 스탠드 이용. 야간에는 메트로 막차 시간을 확인하세요.",
        tip_en="Use official airport taxi ranks. Check last metro times at night.",
    ),
    "barcelona": city(
        ["metro", "tram", "bus", "train", "rideshare", "taxi", "bike", "walk"],
        "T-Casual·Hola Barcelona 카드. TMB 메트로·버스·트램 통합. 스마트폰 태핑 가능 구간이 늘고 있습니다.",
        "T-Casual or Hola Barcelona. TMB metro/bus/tram integrated; contactless tap expanding.",
        ["citymapper", "tmb", "free-now", "cabify"],
        airport_ko="Aerobus·메트로 L9·RENFE. 시내까지 약 30–45분. 택시·Cabify도 흔합니다.",
        airport_en="Aerobus, metro L9, or RENFE (~30–45 min). Taxis and Cabify are common.",
        tip_ko="사그라다 파밀리아·고딕 지구는 메트로+도보. 소매치기 주의로 가방은 앞으로.",
        tip_en="Sagrada Família and Gothic Quarter: metro + walk. Watch for pickpockets—bag in front.",
    ),
    "seville": city(
        ["metro", "tram", "bus", "rideshare", "taxi", "bike", "walk"],
        "구시가는 도보가 최고. 메트로·트람비아·버스는 교외·세비야 엑스포 방면.",
        "Old town is best on foot. Metro, tram, and buses for outer areas and Expo.",
        ["tussam", "cabify", "uber"],
        airport_ko="공항 버스 EA로 시내 약 30–40분. 택시·Cabify 약 25–35€.",
        airport_en="Airport bus EA ~30–40 min. Taxi/Cabify about €25–35.",
        notes={"tussam": ("시내버스", "City buses")},
    ),
    "malaga": city(
        ["metro", "bus", "train", "rideshare", "taxi", "walk"],
        "시내 버스·메트로. 네르하·지브롤터 당일치기는 버스 또는 렌터.",
        "City buses and metro. Day trips to Nerja/Gibraltar by bus or rental car.",
        ["renfe-cercanias", "uber", "cabify"],
        airport_ko="Cercanías C1 기차로 센터 약 15분. 버스·택시 대안.",
        airport_en="Cercanías C1 train to center ~15 min; bus/taxi also fine.",
    ),
    "nerja": city(
        ["bus", "taxi", "rideshare", "walk"],
        "마을은 도보 중심. 동굴·부리아나 해변은 시내버스·Taxi. 말라가 방면 ALSA·로컬 버스.",
        "Walk the town. Caves and Burriana beach by local bus or taxi. ALSA/local buses toward Málaga.",
        ["alsa", "uber"],
        airport_ko="말라가 공항에서 버스(환승) 또는 렌터·택시 약 50–70분.",
        airport_en="From Málaga airport: bus (with transfer) or rental/taxi ~50–70 min.",
        tip_ko="여름엔 버스가 빨리 찹니다. 동굴 티켓·버스 시간을 같이 보세요.",
        tip_en="Summer buses fill fast—align cave tickets with bus times.",
    ),
    "gibraltar": city(
        ["bus", "taxi", "walk", "rideshare"],
        "바위(Upper Rock)는 케이블카·공식 관광택시 투어. 시내는 버스·도보. 국경 대기 시간을 감안하세요.",
        "Upper Rock: cable car or official taxi tours. Town is bus/walk. Allow time at the border.",
        ["gibraltar"],
        airport_ko="지브롤터 공항은 활주로를 건너 시내로 연결. 스페인(라 리네아)에서 도보 입국 후 버스·택시가 흔합니다.",
        airport_en="Gibraltar Airport links on foot across the runway. Many arrive via La Línea (Spain) then bus/taxi.",
        tip_ko="영국령이지만 많은 여행자가 스페인 남부 일정에 묶습니다. EU 로밍·출입국 줄을 확인하세요.",
        tip_en="British territory often planned with Andalusia—check border queues and roaming.",
    ),
    "granada": city(
        ["bus", "metro", "taxi", "rideshare", "walk"],
        "알밤브라는 예약 필수 + 버스 C30/C32 또는 택시. 알바이신은 미니버스·도보.",
        "Alhambra needs timed tickets + bus C30/C32 or taxi. Albaicín: minibuses and walking.",
        ["uber", "cabify"],
        airport_ko="공항 버스 또는 택시 약 20–30분. 고속버스·AVE 연결은 안달루시아 거점 경유.",
        airport_en="Airport bus or taxi ~20–30 min. Longer rail/coach via Andalusia hubs.",
    ),
    "valencia": city(
        ["metro", "tram", "bus", "rideshare", "taxi", "bike", "walk"],
        "SUMA/교통카드로 메트로·트램·버스. 시티바이크·도보로 시우타드 데 라스 아르테스 방면도 가능.",
        "SUMA card for metro, tram, bus. Bike/walk works toward the Arts & Sciences area.",
        ["metrovalencia", "uber"],
        airport_ko="메트로 3/5호선으로 시내 약 25분.",
        airport_en="Metro lines 3/5 to the center ~25 min.",
    ),
    # Missing Portugal cities
    "coimbra": city(
        ["bus", "train", "taxi", "rideshare", "walk"],
        "구시가·대학은 도보·시내버스. CP 기차로 리스본·포르투 연결.",
        "Walk or bus the old town/university. CP trains link Lisbon and Porto.",
        ["cp", "uber"],
        airport_ko="리스본/포르투에서 기차 약 1.5–2시간. 공항에서는 각 도시 환승.",
        airport_en="Train ~1.5–2 hrs from Lisbon/Porto; transfer via those cities from airports.",
    ),
    "funchal": city(
        ["bus", "taxi", "rideshare", "walk"],
        "시내버스(HF)·택시. 언덕이 많아 케이블카·Uber를 섞습니다. 본토와는 항공.",
        "City buses (HF) and taxis. Hilly—use cable cars/Uber. Flights to/from the mainland.",
        ["uber"],
        airport_ko="푸샬 공항에서 버스·택시로 시내 약 20–30분.",
        airport_en="Airport bus or taxi to town ~20–30 min.",
        tip_ko="렌터는 산악 도로와 주차 공간을 고려하세요.",
        tip_en="If renting a car, plan for mountain roads and scarce parking.",
    ),
    "lagos": city(
        ["bus", "train", "taxi", "rideshare", "walk"],
        "구시가는 도보. 해변·절벽은 로컬 버스·택시. Faro·라구스는 CP/버스.",
        "Walk the old town; beaches/cliffs by local bus or taxi. CP/coaches to Faro and beyond.",
        ["cp", "uber", "rede-expressos"],
        airport_ko="Faro 공항에서 버스·기차 환승 또는 렌터 약 1시간.",
        airport_en="From Faro airport: bus/train transfer or rental ~1 hr.",
    ),
    "aveiro": city(
        ["bus", "train", "taxi", "rideshare", "bike", "walk"],
        "CP로 포르투·코임브라 접근. 시내는 도보·자전거·몰레이루 관광 보트.",
        "CP trains from Porto/Coimbra. Walk, bike, or moliceiro boats in town.",
        ["cp", "uber"],
        airport_ko="포르투 공항 → 기차/버스 환승으로 Aveiro 약 1–1.5시간.",
        airport_en="From Porto airport, train/bus transfer to Aveiro ~1–1.5 hrs.",
    ),
    "fatima": city(
        ["bus", "taxi", "rideshare", "walk"],
        "성지 일대는 도보. 리스본·포르투에서 Rede Expressos 등 장거리 버스가 편합니다.",
        "Walk the sanctuary area. Coaches (e.g. Rede Expressos) from Lisbon/Porto are easiest.",
        ["rede-expressos", "uber"],
        airport_ko="리스본에서 버스 약 1–1.5시간. 렌터·택시 대안.",
        airport_en="Coach from Lisbon ~1–1.5 hrs; rental/taxi also fine.",
    ),
    "evora": city(
        ["bus", "train", "taxi", "rideshare", "walk"],
        "성벽 안은 도보. 리스본에서 기차·버스. 시내는 작아 택시 수요가 적습니다.",
        "Walk inside the walls. Train/bus from Lisbon; town is compact so taxis are optional.",
        ["cp", "rede-expressos", "uber"],
        airport_ko="리스본에서 기차·버스 약 1.5–2시간.",
        airport_en="Train or bus from Lisbon ~1.5–2 hrs.",
    ),
    "obidos": city(
        ["bus", "taxi", "rideshare", "walk"],
        "중세 성곽 마을은 도보 전용에 가깝습니다. 리스본에서 버스·투어가 일반적.",
        "The walled village is almost entirely on foot. Buses/tours from Lisbon are typical.",
        ["rede-expressos", "uber"],
        airport_ko="리스본에서 버스 또는 렌터 약 1–1.5시간. 외곽 주차장 이용.",
        airport_en="Bus or rental from Lisbon ~1–1.5 hrs; use outer parking.",
        tip_ko="차로 성벽 안 진입이 제한됩니다. 주차장에서 걸어 들어가세요.",
        tip_en="Cars are restricted inside the walls—park outside and walk in.",
    ),
    # Missing Spain cities
    "palma": city(
        ["bus", "train", "metro", "rideshare", "taxi", "walk"],
        "EMT 시내버스·메트로. 마요르카 섬 열차로 Sóller 등. 구시가는 도보.",
        "EMT buses and metro. Island trains toward Sóller etc. Old town is walkable.",
        ["uber", "cabify", "renfe"],
        airport_ko="공항 버스·택시로 시내 약 20분. 메트로 연결도 있습니다.",
        airport_en="Airport bus/taxi ~20 min; metro links exist too.",
    ),
    "bilbao": city(
        ["metro", "tram", "bus", "train", "rideshare", "taxi", "walk"],
        "Metro Bilbao·트램·버스. Barik 카드. 구겐하임은 트램/도보가 편합니다.",
        "Metro Bilbao, tram, and buses with Barik card. Guggenheim is tram/walk.",
        ["uber", "cabify", "renfe"],
        airport_ko="비즈카이버스·택시로 시내 약 20분.",
        airport_en="Bizkaibus or taxi ~20 min to the center.",
    ),
    "toledo": city(
        ["bus", "train", "taxi", "rideshare", "walk"],
        "구시가는 도보·에스컬레이터. 마드리드에서 Cercanías/AVE·버스가 핵심.",
        "Walk (and escalators) in the old town. Rail/bus from Madrid is the key link.",
        ["renfe", "alsa", "uber"],
        airport_ko="마드리드 공항 → 아토차/멘데즈 알바로 환승 후 기차·버스.",
        airport_en="From Madrid airport, transfer via Atocha/Méndez Álvaro then train/bus.",
        tip_ko="자동차는 성벽 안이 협소합니다. 외곽 P 주차장을 이용하세요.",
        tip_en="Cars struggle inside the walls—use outer park-and-walk lots.",
    ),
    "cordoba": city(
        ["bus", "train", "taxi", "rideshare", "walk"],
        "메스키타·유대인 지구는 도보. AVE로 마드리드·세비야 연결. 시내버스 보조.",
        "Walk the Mezquita/Judería. AVE to Madrid/Seville; city buses fill gaps.",
        ["renfe", "uber", "cabify"],
        airport_ko="세비야/말라가 공항 경유 또는 마드리드 AVE. 시내까지 택시·버스.",
        airport_en="Via Seville/Málaga airports or Madrid AVE; taxi/bus into town.",
    ),
    "san-sebastian": city(
        ["bus", "train", "rideshare", "taxi", "bike", "walk"],
        "시내버스·도보로 해변·구시가. Euskotren·RENFE로 빌바오· Hendaye 연결.",
        "City buses and walking for beach/old town. Euskotren/RENFE toward Bilbao/Hendaye.",
        ["uber", "cabify", "renfe"],
        airport_ko="산세바스티안 공항은 소규모. 빌바오 공항+버스도 흔합니다.",
        airport_en="Small local airport; many use Bilbao airport + bus.",
    ),
    "zaragoza": city(
        ["bus", "tram", "train", "rideshare", "taxi", "walk"],
        "트램·시내버스. AVE로 마드리드·바르셀로나. 구시가는 도보.",
        "Tram and city buses. AVE to Madrid/Barcelona. Old town is walkable.",
        ["renfe", "uber", "cabify"],
        airport_ko="공항 버스·택시로 시내 약 30분. AVE 역과도 연결됩니다.",
        airport_en="Airport bus/taxi ~30 min; also linked toward the AVE station.",
    ),
    "salamanca": city(
        ["bus", "train", "taxi", "rideshare", "walk"],
        "플라자 마요르·대학 지구는 도보. 마드리드에서 기차·버스.",
        "Plaza Mayor and university area on foot. Train/bus from Madrid.",
        ["renfe", "alsa", "uber"],
        airport_ko="마드리드 경유 기차·버스. 렌터도 가능.",
        airport_en="Train/bus via Madrid; rentals also work.",
    ),
    "santiago": city(
        ["bus", "train", "taxi", "rideshare", "walk"],
        "대성당 광장 일대는 도보. 시내버스·택시. AVE/기차·버스로 마드리드·포르투 방면.",
        "Cathedral quarter on foot; city buses/taxis. Rail/coach toward Madrid/Porto.",
        ["renfe", "alsa", "uber"],
        airport_ko="공항 버스·택시로 시내 약 20–30분.",
        airport_en="Airport bus or taxi ~20–30 min.",
    ),
    "segovia": city(
        ["bus", "train", "taxi", "rideshare", "walk"],
        "로마 수도교·알카사르는 도보. 마드리드에서 AVE·버스(약 30–60분).",
        "Walk to the aqueduct and Alcázar. AVE/bus from Madrid (~30–60 min).",
        ["renfe", "alsa", "uber"],
        airport_ko="마드리드 공항 → 차마르틴/멘데즈 알바로 환승 후 세고비아.",
        airport_en="Madrid airport → Chamartín/Méndez Álvaro then on to Segovia.",
    ),
    "ronda": city(
        ["bus", "train", "taxi", "rideshare", "walk"],
        "협곡·구시가는 도보. 말라가에서 기차·버스. 협곡 전망은 경사에 주의.",
        "Walk the gorge/old town. Train/bus from Málaga. Mind steep viewpoints.",
        ["renfe", "alsa", "uber"],
        airport_ko="말라가 공항에서 기차/버스 환승 약 2시간 또는 렌터.",
        airport_en="From Málaga airport: train/bus ~2 hrs with transfers, or rental car.",
    ),
    "girona": city(
        ["bus", "train", "taxi", "rideshare", "walk", "bike"],
        "구시가·유다 지구는 도보. Renfe로 바르셀로나 약 40–60분. 공항 버스도 있습니다.",
        "Walk the old/Jewish quarter. Renfe to Barcelona ~40–60 min; airport buses exist.",
        ["renfe", "uber", "cabify"],
        airport_ko="지로나 공항 버스 또는 바르셀로나 공항 경유 기차.",
        airport_en="Girona airport bus, or via Barcelona airport + train.",
    ),
}

# Extra curated for famous capitals / hubs
CURATED.update({
    "paris": city(
        ["metro", "tram", "bus", "train", "rideshare", "taxi", "bike", "walk"],
        "Navigo Easy / Paris Visite. 메트로·RER·버스 환승. Citymapper·Bonjour RATP가 편합니다.",
        "Navigo Easy or Paris Visite. Metro/RER/bus transfers. Citymapper and Bonjour RATP help.",
        ["citymapper", "idfm", "uber", "free-now"],
        airport_ko="CDG: RER B 또는 Roissybus. ORY: Orlyval+RER/Metro. 택시 고정요금 구간 있음.",
        airport_en="CDG: RER B or Roissybus. ORY: Orlyval + RER/metro. Flat-rate taxis available.",
        tip_ko="성수기 메트로는 혼잡합니다. 박물관 구간은 일찍 이동하세요.",
        tip_en="Metro packs in peak season—travel early around museum areas.",
        notes={"idfm": ("일드프랑스 모빌리테", "Île-de-France Mobilités")},
    ),
    "london": city(
        ["metro", "bus", "train", "rideshare", "taxi", "bike", "walk"],
        "contactless/Oyster로 Tube·버스·대부분 기차. TfL Go·Citymapper 추천.",
        "Contactless/Oyster for Tube, buses, most rail. TfL Go and Citymapper recommended.",
        ["tfl", "citymapper", "uber", "trainline"],
        airport_ko="HIT: Elizabeth line·Heathrow Express. LGW: Gatwick Express·Thameslink. STN/LTN: 공항버스·기차.",
        airport_en="LHR: Elizabeth line/Heathrow Express. LGW: Gatwick Express/Thameslink. STN/LTN: coach/rail.",
        tip_ko="혼잡 요금·피크 요금을 피하려면 오프피크 이동이 유리합니다.",
        tip_en="Off-peak travel helps avoid peak fares and crush crowds.",
    ),
    "amsterdam": city(
        ["tram", "bus", "metro", "train", "ferry", "bike", "rideshare", "taxi", "walk"],
        "GVB 데이틱켓·OV-chipkaart. 트램이 시내 핵심. 자전거는 규칙과 주차에 주의.",
        "GVB day ticket or OV-chipkaart. Trams are central; bikes need careful parking and rules.",
        ["ns", "citymapper", "uber"],
        airport_ko="기차로 Centraal 약 15–20분. 버스·택시 대안.",
        airport_en="Train to Centraal ~15–20 min; bus/taxi also fine.",
        tip_ko="운하 지역은 도보·트램이 편하고, 차는 비추천입니다.",
        tip_en="Canal belt is best on foot/tram—skip driving.",
    ),
    "berlin": city(
        ["metro", "tram", "bus", "train", "rideshare", "taxi", "bike", "walk"],
        "BVG 티켓(AB존). U/S-Bahn·트램·버스 통합. Jelbi·Citymapper 유용.",
        "BVG ticket (zone AB). U/S-Bahn, tram, bus integrated. Jelbi and Citymapper help.",
        ["db", "citymapper", "free-now", "uber"],
        airport_ko="BER에서 Airport Express(FEX)·S-Bahn·지역버스. 택시·Uber도 가능.",
        airport_en="From BER: Airport Express (FEX), S-Bahn, or regional bus; taxi/Uber too.",
    ),
    "rome": city(
        ["metro", "bus", "tram", "train", "rideshare", "taxi", "walk"],
        "ATAC 티켓·BIT. 메트로 3개 노선 + 버스. 시내 중심은 도보가 빠른 구간이 많습니다.",
        "ATAC tickets/BIT. Three metro lines plus buses. Walking often wins in the core.",
        ["trenitalia", "citymapper", "uber", "free-now"],
        airport_ko="FCO: Leonardo Express→Termini 또는 버스. CIA: 공항버스.",
        airport_en="FCO: Leonardo Express to Termini or buses. CIA: airport coaches.",
        tip_ko="바티칸·콜로세오는 메트로+도보. 소매치기 주의.",
        tip_en="Vatican/Colosseum: metro + walk. Mind pickpockets.",
    ),
    "milan": city(
        ["metro", "tram", "bus", "train", "rideshare", "taxi", "walk"],
        "ATM 티켓·여행권. 메트로가 빠르고, 근교는 Trenord.",
        "ATM tickets/passes. Metro is fast; Trenord for suburbs.",
        ["trenitalia", "citymapper", "uber", "free-now"],
        airport_ko="MXP: Malpensa Express. LIN: 공항버스·지하철 환승. BGY: 버스→밀라노.",
        airport_en="MXP: Malpensa Express. LIN: coach/metro link. BGY: bus into Milan.",
    ),
    "vienna": city(
        ["metro", "tram", "bus", "train", "rideshare", "taxi", "bike", "walk"],
        "Wiener Linien 티켓·WienMobil. U-Bahn·트램이 매우 편합니다.",
        "Wiener Linien tickets and WienMobil. U-Bahn and trams are excellent.",
        ["oebb", "citymapper", "uber", "bolt"],
        airport_ko="CAT·ÖBB S7·버스(Vienna Airport Lines). 택시·Uber 대안.",
        airport_en="CAT, ÖBB S7, or Vienna Airport Lines bus; taxi/Uber too.",
    ),
    "zurich": city(
        ["tram", "bus", "train", "rideshare", "taxi", "bike", "walk"],
        "ZVV 티켓·스위스 Travel Pass. 트램·S-Bahn이 정확합니다.",
        "ZVV tickets or Swiss Travel Pass. Trams and S-Bahn are punctual.",
        ["sbb", "uber"],
        airport_ko="기차로 HB 약 10분. 트램 연결도 좋습니다.",
        airport_en="Train to HB ~10 min; tram links are strong too.",
    ),
    "prague": city(
        ["metro", "tram", "bus", "train", "rideshare", "taxi", "walk"],
        "PID Litacka/관광권. 메트로·트램 환승. 택시보다 Bolt·Uber를 쓰세요.",
        "PID Litacka/tourist pass. Metro+tram transfers. Prefer Bolt/Uber to street taxis.",
        ["cd", "bolt", "uber", "citymapper"],
        airport_ko="공항 버스 119→Nádraží Veleslavín 메트로 A, 또는 공항 버스 100.",
        airport_en="Bus 119 to metro A (Veleslavín) or airport bus 100.",
    ),
    "budapest": city(
        ["metro", "tram", "bus", "train", "ferry", "rideshare", "taxi", "walk"],
        "BudapestGO·여행권. 메트로·트램 4/6. 다뉴브 페리는 관광용으로 좋아요.",
        "BudapestGO/passes. Metro and trams 4/6. Danube ferries are fun for sightseeing.",
        ["mav", "bolt", "uber"],
        airport_ko="100E 버스 또는 지하철 환승. 택시·Bolt도 흔합니다.",
        airport_en="Bus 100E or metro with transfer; taxi/Bolt common.",
    ),
    "athens": city(
        ["metro", "tram", "bus", "train", "ferry", "rideshare", "taxi", "walk"],
        "Ath.ena 티켓. 메트로로 명소 이동. 페리 터미널(피레우스)은 메트로 연결.",
        "Ath.ena tickets. Metro to sights; Piraeus ferries link by metro.",
        ["bolt", "uber", "citymapper"],
        airport_ko="메트로 3호선 또는 X95 버스. 택시는 미터요금.",
        airport_en="Metro line 3 or bus X95; metered taxis.",
        tip_ko="섬 일정은 Blue Star 등 페리 예약을 먼저 하세요.",
        tip_en="For islands, book ferries (e.g. Blue Star) first.",
    ),
    "istanbul": city(
        ["metro", "tram", "bus", "ferry", "train", "rideshare", "taxi", "walk"],
        "Istanbulkart로 메트로·트램·버스·페리. 보스포러스 페리가 유용합니다.",
        "Istanbulkart for metro, tram, bus, ferry. Bosphorus ferries are handy.",
        ["uber", "bolt", "citymapper"],
        airport_ko="IST: 메트로/하바버스. SAW: 버스·메트로 환승. 택시·Uber 가능.",
        airport_en="IST: metro/Havaist. SAW: bus/metro links. Taxi/Uber available.",
        tip_ko="구시가(술탄아흐메트)는 트램+도보가 가장 편합니다.",
        tip_en="Sultanahmet is easiest by tram + walking.",
    ),
    "copenhagen": city(
        ["metro", "bus", "train", "bike", "rideshare", "taxi", "walk"],
        "Rejsekort·city pass. 메트로·S-tog·버스. 자전거 인프라가 매우 좋습니다.",
        "Rejsekort/city pass. Metro, S-tog, buses; outstanding bike infrastructure.",
        ["dsb", "citymapper", "uber"],
        airport_ko="메트로 M2로 시내 약 15분.",
        airport_en="Metro M2 to the city ~15 min.",
    ),
    "stockholm": city(
        ["metro", "tram", "bus", "train", "ferry", "rideshare", "taxi", "walk"],
        "SL 앱·카드. Tunnelbana·버스·페리. 아르키펠라고 보트도 SL 구간이 있습니다.",
        "SL app/card. Tunnelbana, buses, ferries; some archipelago boats are in SL.",
        ["sj", "uber", "bolt"],
        airport_ko="Arlanda Express·공항버스·pendeltåg. Bromma는 버스·택시.",
        airport_en="Arlanda Express, airport bus, or pendeltåg; Bromma by bus/taxi.",
    ),
    "oslo": city(
        ["metro", "tram", "bus", "train", "ferry", "rideshare", "taxi", "walk"],
        "Ruter 티켓. T-bane·트램·버스·페리. Entur로 장거리 연계.",
        "Ruter tickets. T-bane, tram, bus, ferry; Entur for longer trips.",
        ["vy", "uber", "bolt"],
        airport_ko="Flytoget·공항버스·지역열차로 시내 약 20–40분.",
        airport_en="Flytoget, airport bus, or local trains ~20–40 min.",
    ),
    "helsinki": city(
        ["metro", "tram", "bus", "train", "ferry", "rideshare", "taxi", "walk"],
        "HSL 티켓·앱. 트램·메트로·수완린나 페리어(수오멘린나) 연결.",
        "HSL tickets/app. Trams, metro, and ferry to Suomenlinna.",
        ["vr", "uber", "bolt"],
        airport_ko="I 기차 또는 공항버스(615 등)로 시내 약 30–40분.",
        airport_en="I train or airport buses (e.g. 615) ~30–40 min.",
    ),
    "dublin": city(
        ["bus", "tram", "train", "rideshare", "taxi", "walk"],
        "Leap 카드. Dublin Bus·Luas·DART. 시내 중심은 도보도 충분합니다.",
        "Leap card. Dublin Bus, Luas, DART. The core is walkable.",
        ["irish-rail", "uber", "bolt"],
        airport_ko="Aer Bus·Dublin Express 또는 택시/Uber 약 25–40분.",
        airport_en="Aircoach/Dublin Express or taxi/Uber ~25–40 min.",
    ),
    "brussels": city(
        ["metro", "tram", "bus", "train", "rideshare", "taxi", "walk"],
        "STIB/MIVB 티켓·MOBIB. 메트로·트램. 중앙역은 장거리 환승 허브.",
        "STIB/MIVB tickets/MOBIB. Metro and trams; Midi/Central are rail hubs.",
        ["sncb", "citymapper", "uber", "free-now"],
        airport_ko="기차(Airport→Bruxelles) 약 20분 또는 버스.",
        airport_en="Train Airport→Brussels ~20 min, or bus.",
    ),
    "warsaw": city(
        ["metro", "tram", "bus", "train", "rideshare", "taxi", "walk"],
        "ZTM 티켓·Warsaw City Card. 메트로 2개 노선 + 트램.",
        "ZTM tickets/Warsaw City Card. Two metro lines plus trams.",
        ["pkp", "bolt", "uber"],
        airport_ko="SKM/기차·버스 175/188. 택시·Bolt도 흔합니다.",
        airport_en="SKM/rail or buses 175/188; taxi/Bolt common.",
    ),
    "munich": city(
        ["metro", "tram", "bus", "train", "rideshare", "taxi", "bike", "walk"],
        "MVV 티켓. U/S-Bahn이 핵심. Tageskarte가 관광에 유리합니다.",
        "MVV tickets. U/S-Bahn core; day tickets suit sightseeing.",
        ["db", "citymapper", "free-now", "uber"],
        airport_ko="S1/S8로 시내 약 40–45분. 공항버스 대안.",
        airport_en="S1/S8 ~40–45 min; airport buses also work.",
    ),
    "edinburgh": city(
        ["bus", "tram", "train", "rideshare", "taxi", "walk"],
        "Ridacard·데이틱켓. 버스·트램. 올드타운은 언덕 도보.",
        "Ridacard/day tickets. Buses and trams; Old Town is hilly walking.",
        ["trainline", "uber"],
        airport_ko="공항 트램으로 센터 약 30분. 버스·택시 대안.",
        airport_en="Airport tram ~30 min to centre; bus/taxi too.",
    ),
    "florence": city(
        ["bus", "tram", "train", "rideshare", "taxi", "walk"],
        "구시가는 도보가 최고. Ataf 버스·트램웨이. 역은 SMN.",
        "Historic centre is best on foot. Ataf buses/tramway; SMN station.",
        ["trenitalia", "uber"],
        airport_ko="트램 T2 또는 버스·택시 약 20–30분.",
        airport_en="Tram T2 or bus/taxi ~20–30 min.",
    ),
    "venice": city(
        ["ferry", "train", "bus", "walk", "taxi"],
        "ACTV 바포레토 데이패스. 섬 이동은 배, 본섬은 도보. 다리는 캐리어에 불리합니다.",
        "ACTV vaporetto day pass. Boats between islands; walk the main island—bridges vs luggage.",
        ["trenitalia", "uber"],
        airport_ko="Alandro·버스·수상택시. 마르코 폴로→Piacale Roma 후 바포레토.",
        airport_en="Alandro, bus, or water taxi. Marco Polo → Piazzale Roma then vaporetto.",
        tip_ko="수상택시는 비쌉니다. 데이패스로 충분할 때가 많습니다.",
        tip_en="Water taxis are pricey—day passes often suffice.",
    ),
    "reykjavik": city(
        ["bus", "taxi", "rideshare", "walk"],
        "Strætó 버스·Klapp 앱. 시내 중심은 도보. 골든서클은 투어·렌터.",
        "Strætó buses/Klapp app. Walk downtown; Golden Circle needs tour or rental.",
        ["uber", "bolt"],
        airport_ko="Flybus·Airport Direct로 시내 약 45분. 택시비는 높은 편.",
        airport_en="Flybus/Airport Direct ~45 min; taxis are expensive.",
    ),
    "tbilisi": city(
        ["metro", "bus", "train", "rideshare", "taxi", "walk"],
        "MetroMoney 카드. 메트로 2개 노선 + 버스. 언덕은 케이블카·푸니쿨라.",
        "MetroMoney card. Two metro lines + buses; cable car/funicular for hills.",
        ["bolt", "uber"],
        airport_ko="버스 337 또는 택시/Bolt 약 30–40분.",
        airport_en="Bus 337 or taxi/Bolt ~30–40 min.",
    ),
    "vatican-city": city(
        ["metro", "bus", "walk", "taxi"],
        "로마 메트로 A Ottaviano/Cipro에서 도보. 바티칸 내부는 보안 검색 후 도보만 가능.",
        "Walk from Rome metro A Ottaviano/Cipro. Inside the Vatican, walking only after security.",
        ["trenitalia", "uber"],
        tip_ko="성 베드로 광장 줄이 깁니다. 일찍 또는 예약 투어를 이용하세요.",
        tip_en="St Peter’s queues are long—go early or book a timed entry.",
    ),
})

# Default transit apps by country (rideshare is merged in merge_rideshare)
COUNTRY_CITY_APPS: dict[str, list[str]] = {
    "fr": ["sncf", "citymapper"],
    "uk": ["trainline", "tfl"],
    "ie": ["irish-rail"],
    "be": ["sncb", "citymapper"],
    "nl": ["ns", "citymapper"],
    "lu": ["cfl"],
    "mc": [],
    "de": ["db", "citymapper"],
    "ch": ["sbb"],
    "at": ["oebb", "citymapper"],
    "li": ["sbb"],
    "cz": ["cd"],
    "sk": ["trainline"],
    "hu": ["mav"],
    "pl": ["pkp"],
    "es": ["renfe"],
    "pt": ["cp", "rede-expressos"],
    "ad": ["alsa"],
    "it": ["trenitalia", "citymapper"],
    "va": ["trenitalia"],
    "mt": [],
    "gr": [],
    "cy": [],
    "dk": ["dsb", "citymapper"],
    "se": ["sj"],
    "no": ["vy"],
    "fi": ["vr"],
    "is": [],
    "ee": [],
    "lv": [],
    "lt": [],
    "hr": ["flixbus"],
    "si": ["trainline"],
    "ba": ["flixbus"],
    "me": [],
    "rs": ["flixbus"],
    "mk": [],
    "al": [],
    "bg": ["flixbus"],
    "ro": ["trainline"],
    "tr": [],
    "ge": [],
}

RIDE_IDS = ("bolt", "cabify", "free-now", "uber")

# Uber banned / never launched (tourist-relevant).
NO_UBER_COUNTRIES = {
    "hu", "bg", "ge", "is", "cy", "lv", "li", "mc", "me", "rs", "mk", "al", "ba", "si",
}

# If a country is listed, Uber only in these cities (not nationwide).
UBER_ONLY_CITIES: dict[str, set[str]] = {
    "nl": {"amsterdam", "rotterdam"},
    "sk": {"bratislava"},
    "ee": {"tallinn"},
    "lt": {"vilnius"},
    "no": {"oslo", "bergen", "stavanger", "tromso", "trondheim"},
    "ch": {"zurich", "geneva", "basel", "lausanne"},
    "gr": {"athens", "thessaloniki", "corfu", "santorini"},
    "cz": {"prague", "brno"},
    "ie": {"dublin", "cork", "galway", "limerick"},
    "de": {"berlin", "munich", "hamburg", "cologne", "frankfurt", "stuttgart"},
    "mt": {"valletta"},
    "ad": {"andorra-la-vella"},
    "lu": {"luxembourg-city"},
    "at": {"vienna", "salzburg", "graz"},
    "dk": {"copenhagen"},
    "be": {"brussels", "antwerp", "ghent", "leuven"},
}

# Bolt is weak / absent.
NO_BOLT_COUNTRIES = {"li", "mc", "ch", "ad"}
BOLT_ONLY_CITIES: dict[str, set[str]] = {
    "is": {"reykjavik"},
}

CABIFY_COUNTRIES = {"es", "pt", "ad"}
FREE_NOW_COUNTRIES = {"de", "at", "uk", "ie", "es", "it", "fr", "be", "nl", "pt", "va"}

UBER_NOTES = {
    "it": ("블랙·밴 위주 (우버X 없음)", "Mostly Black/Van, not UberX"),
    "de": ("면허 택시 배차", "Licensed taxis via the app"),
    "va": ("로마에서 호출", "Hail from Rome"),
    "mc": ("니스에서 출발", "Usually starts in Nice"),
}
BOLT_NOTES = {
    "pt": ("우버보다 잘 잡히는 편", "Often more cars than Uber"),
    "hu": ("우버 대체", "Uber alternative"),
    "bg": ("우버 없음", "No Uber here"),
    "ge": ("우버 없음 · Yandex도 흔함", "No Uber; Yandex Go also common"),
    "is": ("우버 없음", "No Uber"),
    "cy": ("우버 없음", "No Uber"),
    "lv": ("우버 없음", "No Uber"),
    "si": ("우버 없음", "No Uber"),
    "ba": ("우버 없음", "No Uber"),
    "me": ("우버 없음", "No Uber"),
    "rs": ("우버 없음", "No Uber"),
    "mk": ("우버 없음", "No Uber"),
    "al": ("우버 없음", "No Uber"),
    "pl": ("우버보다 빠른 편", "Often faster than Uber"),
    "lt": ("우버보다 잘 잡힘", "Usually more cars than Uber"),
    "ee": ("탈린 기본 앱", "Default in Tallinn"),
}


def _as_pair(item) -> tuple[str, tuple[str, str] | None]:
    if isinstance(item, tuple):
        return item[0], item[1]
    return item, None


def uber_ok(country_id: str, city_id: str | None = None) -> bool:
    if country_id in NO_UBER_COUNTRIES:
        return False
    allow = UBER_ONLY_CITIES.get(country_id)
    if allow is None:
        return True
    if city_id is None:
        return True
    return city_id in allow


def bolt_ok(country_id: str, city_id: str | None = None) -> bool:
    if country_id in NO_BOLT_COUNTRIES:
        return False
    allow = BOLT_ONLY_CITIES.get(country_id)
    if allow is None:
        return True
    if city_id is None:
        return True
    return city_id in allow


def merge_rideshare(country_id: str, city_id: str | None, apps: list) -> list:
    if city_id == "gibraltar":
        return list(apps)
    parsed = [_as_pair(a) for a in apps]
    notes = {i: n for i, n in parsed if n}
    non_ride = [(i, n) for i, n in parsed if i not in RIDE_IDS]
    ride_order: list[tuple[str, tuple[str, str] | None]] = []

    if bolt_ok(country_id, city_id):
        ride_order.append(("bolt", notes.get("bolt") or BOLT_NOTES.get(country_id)))
    if country_id in CABIFY_COUNTRIES:
        ride_order.append(("cabify", notes.get("cabify") or ("우버 대체", "Uber alternative")))
    if country_id in FREE_NOW_COUNTRIES or country_id == "mc":
        fn_note = notes.get("free-now")
        if country_id == "mc":
            fn_note = fn_note or ("모나코 안 우버 불가 · 니스에서", "No Uber pickup in Monaco; try from Nice")
        elif not fn_note:
            fn_note = ("면허 택시", "Licensed taxis")
        ride_order.append(("free-now", fn_note))
    if uber_ok(country_id, city_id):
        ride_order.append(("uber", notes.get("uber") or UBER_NOTES.get(country_id)))

    seen: set[str] = set()
    out: list[tuple[str, tuple[str, str] | None]] = []
    for raw in non_ride + ride_order:
        i, n = raw if isinstance(raw[0], str) else _as_pair(raw)
        if not isinstance(i, str):
            i, n = _as_pair(i)
        if i in seen:
            continue
        seen.add(i)
        out.append((i, n))
    return out


def strip_rideshare_mode(modes: list[str], apps: list) -> list[str]:
    ids = {a[0] if isinstance(a, tuple) else a for a in apps}
    if ids & set(RIDE_IDS):
        return modes
    return [m for m in modes if m != "rideshare"]


# City class heuristics for modes / copy
METRO_CITIES = {
    "paris", "lyon", "marseille", "lille", "toulouse", "london", "glasgow",
    "amsterdam", "rotterdam", "brussels", "antwerp", "berlin", "munich", "hamburg",
    "frankfurt", "cologne", "stuttgart", "nuremberg", "zurich", "geneva", "lausanne",
    "vienna", "prague", "budapest", "warsaw", "milan", "rome", "naples", "turin",
    "athens", "thessaloniki", "istanbul", "ankara", "izmir", "copenhagen", "stockholm",
    "oslo", "helsinki", "bucharest", "sofia", "belgrade", "lisbon", "porto", "madrid",
    "barcelona", "seville", "malaga", "valencia", "bilbao", "dublin", "tbilisi",
}
TRAM_EXTRA = {
    "strasbourg", "bordeaux", "nice", "montpellier", "nottingham", "manchester",
    "edinburgh", "sheffield", "croydon", "ghent", "antwerp", "the-hague", "utrecht",
    "basel", "bern", "graz", "linz", "krakow", "wroclaw", "gdansk", "poznan",
    "bratislava", "zagreb", "sarajevo", "tallinn", "riga", "kaunas", "goteborg",
    "gothenburg", "malmo", "bergen", "tampere", "turku", "florence", "palermo",
    "genoa", "bologna", "verona", "bordeaux", "luxembourg-city",
}
FERRY_CITIES = {
    "venice", "napoli", "naples", "split", "dubrovnik", "zadar", "hvar", "rovinj",
    "corfu", "santorini", "mykonos", "rhodes", "heraklion", "gozo", "valletta",
    "stockholm", "helsinki", "tallinn", "bergen", "alesund", "flam", "oslo",
    "istanbul", "batumi", "amsterdam", "lisbon", "copenhagen", "gibraltar",
    "monaco", "monte-carlo", "piran", "stavanger", "tromso", "palermo", "genoa",
}
AIRPORT_HUBS = {
    "paris", "london", "amsterdam", "frankfurt", "munich", "zurich", "vienna",
    "rome", "milan", "madrid", "barcelona", "lisbon", "dublin", "copenhagen",
    "stockholm", "oslo", "helsinki", "athens", "istanbul", "prague", "budapest",
    "warsaw", "brussels", "berlin", "hamburg", "manchester", "edinburgh", "nice",
    "lyon", "marseille", "geneva", "porto", "malaga", "valencia", "naples",
    "bucharest", "sofia", "belgrade", "zagreb", "split", "dubrovnik", "tbilisi",
    "reykjavik", "tallinn", "riga", "vilnius", "krakow", "gdansk", "wroclaw",
}

CITY_LABEL = {
    # filled lightly via title-case of id where needed
}


def label(city_id: str) -> str:
    return CITY_LABEL.get(city_id, city_id.replace("-", " ").title())


def synthesize(country_id: str, city_id: str) -> dict:
    if city_id in CURATED:
        entry = dict(CURATED[city_id])
        entry["apps"] = merge_rideshare(country_id, city_id, entry["apps"])
        entry["modes"] = strip_rideshare_mode(list(entry["modes"]), entry["apps"])
        return entry

    name = label(city_id)
    apps = merge_rideshare(country_id, city_id, list(COUNTRY_CITY_APPS.get(country_id, [])))
    modes = ["bus", "taxi", "walk"]

    if city_id in METRO_CITIES:
        modes = ["metro", "bus", "tram", "train", "rideshare", "taxi", "walk"]
    elif city_id in TRAM_EXTRA:
        modes = ["tram", "bus", "train", "rideshare", "taxi", "walk"]
    else:
        # smaller towns
        if country_id in {"ch", "at", "de", "cz", "pl", "hu", "sk", "nl", "be", "fr", "uk", "it", "es", "pt", "dk", "se", "no", "fi"}:
            modes = ["bus", "train", "taxi", "rideshare", "walk"]
        else:
            modes = ["bus", "taxi", "rideshare", "walk"]
        if "rideshare" not in modes:
            modes.insert(-1, "rideshare")

    if city_id in FERRY_CITIES and "ferry" not in modes:
        modes.insert(1 if "metro" in modes else 0, "ferry")
    if city_id in {"amsterdam", "copenhagen", "utrecht", "malmo", "bordeaux", "seville", "barcelona"} and "bike" not in modes:
        modes.append("bike")

    # Deduplicate preserving order
    seen = set()
    modes = [m for m in modes if not (m in seen or seen.add(m))]
    modes = strip_rideshare_mode(modes, apps)

    how_ko = f"{name}: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요."
    how_en = f"{name} is mainly local buses and walking. Use trains or coaches for nearby cities."
    tip_ko = tip_en = None
    airport_ko = airport_en = None

    if "metro" in modes:
        how_ko = f"{name}: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요."
        how_en = f"In {name}, metro/tram/bus cover main areas—use a city pass or app tickets."
    elif "tram" in modes:
        how_ko = f"{name}: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다."
        how_en = f"{name} centres on trams and buses; the old town is often best on foot."
    elif "ferry" in modes:
        how_ko = f"{name}: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요."
        how_en = f"Combine ferry, bus, and walking in {name}. Check boat timetables first."
    elif "train" in modes:
        how_ko = f"{name}: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시."
        how_en = f"Reach {name} by rail and local buses; walk or take short taxis for sights."

    if city_id in AIRPORT_HUBS:
        airport_ko = f"공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. {name} 도심까지 보통 20–60분입니다."
        airport_en = f"Airport bus, train, or taxi/ride-hail into {name}—usually 20–60 minutes to the centre."
    elif country_id in {"is", "mt", "cy", "al", "me", "mk", "ad", "li"}:
        airport_ko = f"인근 공항에서 버스·택시·렌터로 {name}에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요."
        airport_en = f"Reach {name} from the nearest airport by bus, taxi, or rental—check sparse schedules."

    # Special mountain / small tips
    if city_id in {"chamonix", "zermatt", "grindelwald", "interlaken", "st-moritz", "hallstatt", "flam", "stepantsminda", "goreme", "pamukkale"}:
        tip_ko = "산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요."
        tip_en = "In mountains/gorges, check weather and cableway status ahead."
        how_ko = f"{name}: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요."
        how_en = f"{name} usually needs train, mountain rail, bus, and cableways—check car restrictions."

    if city_id in {"giethoorn", "hallstatt", "cesky-krumlov", "rothenburg", "obidos", "mdina", "piran", "bled"}:
        tip_ko = "구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요."
        tip_en = "Historic cores often restrict cars—use outer parking and shuttles."

    return city(
        modes,
        how_ko,
        how_en,
        apps,
        airport_ko=airport_ko,
        airport_en=airport_en,
        tip_ko=tip_ko,
        tip_en=tip_en,
    )


# ── TS emitter ──────────────────────────────────────────────────────────

APP_CATALOG_TS = '''
  uber: { name: 'Uber', url: 'https://www.uber.com/', icon: '/transit-apps/uber.png' },
  citymapper: { name: 'Citymapper', url: 'https://citymapper.com/', icon: '/transit-apps/citymapper.png' },
  'free-now': { name: 'Free Now', url: 'https://www.free-now.com/', icon: '/transit-apps/free-now.png' },
  cabify: { name: 'Cabify', url: 'https://cabify.com/', icon: '/transit-apps/cabify.png' },
  bolt: { name: 'Bolt', url: 'https://bolt.eu/', icon: '/transit-apps/bolt.png' },
  flixbus: { name: 'FlixBus', url: 'https://www.flixbus.com/', icon: '/transit-apps/flixbus.png' },
  trainline: { name: 'Trainline', url: 'https://www.thetrainline.com/', icon: '/transit-apps/trainline.png' },
  renfe: { name: 'Renfe', url: 'https://www.renfe.com/', icon: '/transit-apps/renfe.png' },
  'renfe-cercanias': {
    name: 'Renfe Cercanías',
    url: 'https://www.renfe.com/',
    icon: '/transit-apps/renfe.png',
  },
  alsa: { name: 'ALSA', url: 'https://www.alsa.com/', icon: '/transit-apps/alsa.png' },
  cp: { name: 'CP Oficial', url: 'https://www.cp.pt/', icon: '/transit-apps/cp.png' },
  'rede-expressos': {
    name: 'Rede Expressos',
    url: 'https://www.rede-expressos.pt/',
    icon: '/transit-apps/rede-expressos.png',
  },
  carris: { name: 'Carris', url: 'https://www.carris.pt/', icon: '/transit-apps/carris.png' },
  'metro-lisboa': {
    name: 'Metro Lisboa',
    url: 'https://www.metrolisboa.pt/',
    icon: '/transit-apps/metro-lisboa.png',
  },
  'metro-porto': {
    name: 'Metro do Porto',
    url: 'https://www.metrodoporto.pt/',
    icon: '/transit-apps/metro-porto.png',
  },
  'metro-madrid': {
    name: 'Metro de Madrid',
    url: 'https://www.metromadrid.es/',
    icon: '/transit-apps/metro-madrid.png',
  },
  tmb: { name: 'TMB App', url: 'https://www.tmb.cat/', icon: '/transit-apps/tmb.png' },
  tussam: { name: 'TUSSAM', url: 'https://www.tussam.es/', icon: '/transit-apps/tussam.png' },
  metrovalencia: {
    name: 'Metrovalencia',
    url: 'https://www.metrovalencia.es/',
    icon: '/transit-apps/metrovalencia.png',
  },
  gibraltar: {
    name: 'Gibraltar info',
    url: 'https://www.visitgibraltar.gi/',
    icon: '/transit-apps/gibraltar.png',
  },
  sncf: { name: 'SNCF Connect', url: 'https://www.sncf-connect.com/', icon: '/transit-apps/sncf.png' },
  idfm: { name: 'Île-de-France Mobilités', url: 'https://www.iledefrance-mobilites.fr/', icon: '/transit-apps/idfm.png' },
  tfl: { name: 'TfL Go', url: 'https://tfl.gov.uk/', icon: '/transit-apps/tfl.png' },
  'irish-rail': { name: 'Irish Rail', url: 'https://www.irishrail.ie/', icon: '/transit-apps/irish-rail.png' },
  sncb: { name: 'SNCB/NMBS', url: 'https://www.belgiantrain.be/', icon: '/transit-apps/sncb.png' },
  ns: { name: 'NS', url: 'https://www.ns.nl/', icon: '/transit-apps/ns.png' },
  cfl: { name: 'CFL', url: 'https://www.cfl.lu/', icon: '/transit-apps/cfl.png' },
  db: { name: 'DB Navigator', url: 'https://www.bahn.com/', icon: '/transit-apps/db.png' },
  sbb: { name: 'SBB Mobile', url: 'https://www.sbb.ch/', icon: '/transit-apps/sbb.png' },
  oebb: { name: 'ÖBB', url: 'https://www.oebb.at/', icon: '/transit-apps/oebb.png' },
  trenitalia: { name: 'Trenitalia', url: 'https://www.trenitalia.com/', icon: '/transit-apps/trenitalia.png' },
  cd: { name: 'České dráhy', url: 'https://www.cd.cz/', icon: '/transit-apps/cd.png' },
  mav: { name: 'MÁV', url: 'https://www.mav.hu/', icon: '/transit-apps/mav.png' },
  pkp: { name: 'PKP Intercity', url: 'https://www.intercity.pl/', icon: '/transit-apps/pkp.png' },
  dsb: { name: 'DSB', url: 'https://www.dsb.dk/', icon: '/transit-apps/dsb.png' },
  sj: { name: 'SJ', url: 'https://www.sj.se/', icon: '/transit-apps/sj.png' },
  vy: { name: 'Vy', url: 'https://www.vy.no/', icon: '/transit-apps/vy.png' },
  vr: { name: 'VR', url: 'https://www.vr.fi/', icon: '/transit-apps/vr.png' },
'''.strip("\n")


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def emit_text(t: dict, indent: int) -> str:
    sp = " " * indent
    return f"{sp}{{\n{sp}  ko: '{esc(t['ko'])}',\n{sp}  en: '{esc(t['en'])}',\n{sp}}}"


def emit_apps(apps: list, indent: int) -> str:
    sp = " " * indent
    lines = [f"{sp}apps: ["]
    for item in apps:
        app_id, note = _as_pair(item)
        if not isinstance(app_id, str):
            app_id, note = _as_pair(app_id)
        if note:
            lines.append(
                f"{sp}  ta('{app_id}', {{ ko: '{esc(note[0])}', en: '{esc(note[1])}' }}),"
            )
        else:
            lines.append(f"{sp}  ta('{app_id}'),")
    lines.append(f"{sp}],")
    return "\n".join(lines)


def emit_key(key: str) -> str:
    if key.isidentifier():
        return key
    return f"'{key}'"


def emit_city(city_id: str, data: dict, indent: int = 2) -> str:
    sp = " " * indent
    modes = ", ".join(f"'{m}'" for m in data["modes"])
    lines = [f"{sp}{emit_key(city_id)}: {{", f"{sp}  modes: [{modes}],"]
    if "airportToCity" in data:
        lines.append(f"{sp}  airportToCity: {emit_text(data['airportToCity'], indent + 2).strip()},")
    lines.append(f"{sp}  howTo: {emit_text(data['howTo'], indent + 2).strip()},")
    lines.append(emit_apps(data["apps"], indent + 2))
    if "tip" in data:
        lines.append(f"{sp}  tip: {emit_text(data['tip'], indent + 2).strip()},")
    lines.append(f"{sp}}},")
    return "\n".join(lines)


def emit_country(cid: str, data: dict, indent: int = 2) -> str:
    sp = " " * indent
    lines = [
        f"{sp}{emit_key(cid)}: {{",
        f"{sp}  summary: {emit_text(data['summary'], indent + 2).strip()},",
        f"{sp}  drivingSide: '{data['drivingSide']}',",
        f"{sp}  longDistance: {emit_text(data['longDistance'], indent + 2).strip()},",
    ]
    if "nationalPasses" in data:
        lines.append(f"{sp}  nationalPasses: {emit_text(data['nationalPasses'], indent + 2).strip()},")
    if "paymentTip" in data:
        lines.append(f"{sp}  paymentTip: {emit_text(data['paymentTip'], indent + 2).strip()},")
    if "apps" in data:
        # convert note dicts
        apps = []
        for a in data["apps"]:
            if isinstance(a, tuple):
                apps.append(a)
            else:
                apps.append((a, None))
        lines.append(emit_apps(apps, indent + 2))
    lines.append(f"{sp}}},")
    return "\n".join(lines)


def main() -> None:
    for cid, data in COUNTRIES.items():
        if data.get("apps"):
            data["apps"] = merge_rideshare(cid, None, data["apps"])

    # Build all cities
    all_cities: dict[str, dict] = {}
    for cid, city_ids in MAP.items():
        for city_id in city_ids:
            all_cities[city_id] = synthesize(cid, city_id)

    missing_countries = [c for c in MAP if c not in COUNTRIES]
    if missing_countries:
        raise SystemExit(f"Missing countries: {missing_countries}")

    expected = sum(len(v) for v in MAP.values())
    if len(all_cities) != expected:
        raise SystemExit(f"City count mismatch {len(all_cities)} vs {expected}")

    parts: list[str] = []
    parts.append("import type { CityTransit, CountryTransit, TransitApp, TransitModeId } from '../types'")
    parts.append("")
    parts.append("export const TRANSIT_MODE_ORDER: TransitModeId[] = [")
    parts.append("  'metro',")
    parts.append("  'tram',")
    parts.append("  'bus',")
    parts.append("  'train',")
    parts.append("  'ferry',")
    parts.append("  'rideshare',")
    parts.append("  'taxi',")
    parts.append("  'bike',")
    parts.append("  'walk',")
    parts.append("]")
    parts.append("")
    parts.append("const APP_CATALOG = {")
    parts.append(APP_CATALOG_TS)
    parts.append("} as const")
    parts.append("")
    parts.append("type AppId = keyof typeof APP_CATALOG")
    parts.append("")
    parts.append("function ta(id: AppId, note?: { ko: string; en: string }): TransitApp {")
    parts.append("  return note ? { ...APP_CATALOG[id], note } : { ...APP_CATALOG[id] }")
    parts.append("}")
    parts.append("")
    parts.append("export const countryTransitById: Record<string, CountryTransit> = {")
    for cid in MAP:
        parts.append(emit_country(cid, COUNTRIES[cid]))
    parts.append("}")
    parts.append("")
    parts.append("export const cityTransitById: Record<string, CityTransit> = {")
    for cid, city_ids in MAP.items():
        parts.append(f"  // —— {cid} ——")
        for city_id in city_ids:
            parts.append(emit_city(city_id, all_cities[city_id]))
    parts.append("}")
    parts.append("")
    parts.append("export function getCountryTransit(countryId: string): CountryTransit | undefined {")
    parts.append("  return countryTransitById[countryId]")
    parts.append("}")
    parts.append("")
    parts.append("export function getCityTransit(cityId: string): CityTransit | undefined {")
    parts.append("  return cityTransitById[cityId]")
    parts.append("}")
    parts.append("")

    OUT.write_text("\n".join(parts), encoding="utf-8")
    print(f"Wrote {OUT}")
    print(f"countries={len(COUNTRIES)} cities={len(all_cities)}")


if __name__ == "__main__":
    main()
