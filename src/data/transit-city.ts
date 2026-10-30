// City transit, kept apart from the country part (transit.ts) so the country screen does not load it.
import type { CityTransit } from '../types'
import { ta } from './transit-apps'

export const cityTransitById: Record<string, CityTransit> = {
  // —— fr ——
  paris: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: 'CDG: RER B 또는 Roissybus. ORY: Orlyval+RER/Metro. 택시 고정요금 구간 있음.',
      en: 'CDG: RER B or Roissybus. ORY: Orlyval + RER/metro. Flat-rate taxis available.',
    },
    howTo: {
      ko: 'Navigo Easy / Paris Visite. 메트로·RER·버스 환승. Citymapper·Bonjour RATP가 편합니다.',
      en: 'Navigo Easy or Paris Visite. Metro/RER/bus transfers. Citymapper and Bonjour RATP help.',
    },
    apps: [
      ta('bonjour-ratp', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('citymapper'),
      ta('idfm', { ko: '일드프랑스 모빌리테', en: 'Île-de-France Mobilités' }),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '성수기 메트로는 혼잡합니다. 박물관 구간은 일찍 이동하세요.',
      en: 'Metro packs in peak season—travel early around museum areas.',
    },
  },
  lyon: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Lyon 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Lyon—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Lyon: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Lyon, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('tcl', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  marseille: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Marseille 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Marseille—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Marseille: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Marseille, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('rtm', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  nice: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Nice 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Nice—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Nice: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Nice centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('lignes-azur', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('sncf'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  bordeaux: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk', 'bike'],
    howTo: {
      ko: 'Bordeaux: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Bordeaux centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('tbm', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  colmar: {
    modes: ['walk', 'bus', 'train'],
    howTo: {
      ko: '구시가는 걸어서 다닙니다. 근교 와인 마을은 역 앞에서 버스로 갑니다.',
      en: 'Walk the old town; buses from the station serve the wine villages.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  strasbourg: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Strasbourg: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Strasbourg centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('cts', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  annecy: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Annecy: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Annecy by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sibra', { ko: '표 구매', en: 'Tickets' }),
      ta('sncf'),
      ta('bolt'),
    ],
  },
  avignon: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Avignon: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Avignon by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('orizo', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('sncf'),
      ta('uber'),
    ],
  },
  'aix-en-provence': {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: '구시가는 걸어서 다닙니다. 시내 버스와 마르세유행 50번 급행버스는 메트로폴 교통망이고, TGV역은 시내에서 40번 셔틀버스로 갑니다.',
      en: 'Walk the old town. City buses and the express bus 50 to Marseille belong to the metropole network; shuttle bus 40 runs to the TGV station.',
    },
    apps: [
      ta('la-metropole-mobilite', { ko: '노선·실시간·표', en: 'Routes, live times, tickets' }),
      ta('sncf'),
    ],
  },
  'saint-tropez': {
    modes: ['bus', 'ferry', 'taxi', 'walk'],
    howTo: {
      ko: '마을 안은 걸어서 다닙니다. 기차역이 없어 생라파엘에서 지역 버스(Zou!)나 배로 오고, 해변은 버스·택시로 갑니다.',
      en: 'Walk the village. There is no railway: come by regional Zou! bus or boat from Saint-Raphaël, and reach the beaches by bus or taxi.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  antibes: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: '구시가와 항구는 걸어서 다닙니다. 캅 당티브와 쥐앙레팽은 시내버스나 기차로 갑니다.',
      en: 'Walk the old town and harbour; take city buses or the train to the Cap d’Antibes and Juan-les-Pins.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  grasse: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: '구시가는 걸어서 다니지만 오르막이 많습니다. 기차역에서 구시가까지는 언덕길이나 시내버스로 갑니다.',
      en: 'Walk the old town, with plenty of climbing; from the station, walk up or take a city bus.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  'saint-paul-de-vence': {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: '마을 안은 걸어서만 다닙니다. 니스 직행 400번 버스는 없어졌고, 카뉴쉬르메르역에서 Zou! 655번 버스(약 30분)로 옵니다. 같은 버스가 방스의 로사리오 성당까지 이어집니다. 니스 버스표는 쓸 수 없어 기사에게 따로 삽니다.',
      en: 'The village is on foot only. The direct bus 400 from Nice has gone; take Zou! bus 655 from Cagnes-sur-Mer station (about 30 min), which continues to Vence for the Rosary Chapel. Nice bus tickets are not valid, so buy one from the driver.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  eze: {
    modes: ['bus', 'train', 'walk'],
    howTo: {
      ko: '마을은 걸어서만 다닙니다. 니스에서 버스로 마을까지 바로 오거나, 기차로 바닷가 에즈역에 내려 버스나 니체의 길로 올라옵니다.',
      en: 'The village is on foot only. Take the bus from Nice straight up, or the train to Èze station on the coast and then a bus or the Nietzsche path.',
    },
    apps: [
      ta('lignes-azur', { ko: "버스 노선·실시간", en: "Bus routes, live times" }),
      ta('sncf'),
    ],
  },
  menton: {
    modes: ['bus', 'train', 'walk'],
    howTo: {
      ko: '구시가와 해변은 걸어서 다닙니다. 니스·모나코·이탈리아 벤티밀리아는 해안 기차로 이어집니다.',
      en: 'Walk the old town and seafront; the coastal railway links Nice, Monaco and Ventimiglia in Italy.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  arles: {
    modes: ['walk', 'bus', 'taxi'],
    howTo: {
      ko: '구시가는 걸어서 다닙니다. 카마르그는 차를 빌리거나 투어로 가는 편이 편합니다.',
      en: 'Walk the old town; for the Camargue a car or a tour is easiest.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  'les-baux-de-provence': {
    modes: ['walk', 'taxi'],
    howTo: {
      ko: '마을 안은 걸어서 다닙니다. 대중교통이 드물어 아를이나 아비뇽에서 차나 투어로 오는 편이 편합니다.',
      en: 'Walk around the village; public transport is sparse, so come by car or on a tour from Arles or Avignon.',
    },
    apps: [
    ],
  },
  gordes: {
    modes: ['walk', 'taxi'],
    howTo: {
      ko: '마을 안은 걸어서 다닙니다. 수도원과 주변 마을은 대중교통이 거의 없어 차나 투어로 갑니다.',
      en: 'Walk the village; the abbey and nearby villages have almost no public transport, so go by car or tour.',
    },
    apps: [
    ],
  },
  'isle-sur-la-sorgue': {
    modes: ['walk', 'bus', 'taxi'],
    howTo: {
      ko: '마을은 걸어서 다닙니다. 퐁텐드보클뤼즈는 버스나 택시로 약 15분 걸립니다.',
      en: 'Walk the town; Fontaine-de-Vaucluse is about 15 minutes by bus or taxi.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  cassis: {
    modes: ['walk', 'bus', 'ferry', 'taxi'],
    howTo: {
      ko: '항구 주변은 걸어서 다닙니다. 기차역은 언덕 위에 있어 버스로 항구까지 내려갑니다.',
      en: 'Walk around the port; the station is up the hill, so take the bus down to the harbour.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  'moustiers-sainte-marie': {
    modes: ['walk', 'taxi'],
    howTo: {
      ko: '마을 안은 걸어서 다닙니다. 호수와 협곡은 대중교통이 거의 없어 차가 필요합니다.',
      en: 'Walk the village; the lake and gorge have almost no public transport, so you need a car.',
    },
    apps: [
    ],
  },
  carcassonne: {
    modes: ['walk', 'bus', 'taxi'],
    howTo: {
      ko: '시테와 아랫마을은 걸어서 오갈 수 있습니다. 여름에는 역과 시테를 잇는 셔틀버스가 다닙니다.',
      en: 'Walk between the Cité and the lower town; in summer a shuttle bus links the station and the Cité.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  narbonne: {
    modes: ['walk', 'bus', 'taxi'],
    howTo: {
      ko: '구시가는 걸어서 다닙니다.',
      en: 'Walk around the old town.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  perpignan: {
    modes: ['walk', 'bus', 'taxi'],
    howTo: {
      ko: '구시가는 걸어서 다닙니다. 왕궁은 구시가 남쪽 언덕에 있습니다.',
      en: 'Walk the old town; the palace is on a rise at its southern edge.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  collioure: {
    modes: ['walk', 'train'],
    howTo: {
      ko: '마을은 걸어서 다닙니다. 이웃 포르방드르·바뉼스까지 지역 열차가 다닙니다.',
      en: 'Walk the village; regional trains run on to Port-Vendres and Banyuls.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  sete: {
    modes: ['walk', 'bus', 'taxi'],
    howTo: {
      ko: '시내는 걸어서 다닙니다. 생클레르산은 오르막이 가팔라 버스나 택시가 편합니다.',
      en: 'Walk the centre; Mont Saint-Clair is steep, so take a bus or taxi up.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  'aigues-mortes': {
    modes: ['walk', 'bus', 'taxi'],
    howTo: {
      ko: '성벽 안은 걸어서 다닙니다. 해변은 르그로뒤루아까지 버스나 기차로 갑니다.',
      en: 'Walk inside the walls; take the bus or train to Le Grau-du-Roi for the beaches.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  nimes: {
    modes: ['walk', 'bus', 'taxi'],
    howTo: {
      ko: '구시가는 걸어서 다닙니다. 퐁뒤가르는 버스터미널에서 지역 버스로 갑니다.',
      en: 'Walk the old town; take a regional bus from the bus station to the Pont du Gard.',
    },
    apps: [
      ta('sncf'),
    ],
  },
  toulouse: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Toulouse: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Toulouse, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('tisseo', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('sncf'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  montpellier: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Montpellier: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Montpellier centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('mticket-tam', { ko: '표 구매', en: 'Tickets' }),
      ta('sncf'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  dijon: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Dijon: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Dijon by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('divia-mobilites', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('sncf'),
      ta('bolt'),
    ],
  },
  chamonix: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Chamonix: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Chamonix usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('chamonix-mobilite', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('sncf'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  // —— uk ——
  london: {
    modes: ['metro', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: 'HIT: Elizabeth line·Heathrow Express. LGW: Gatwick Express·Thameslink. STN/LTN: 공항버스·기차.',
      en: 'LHR: Elizabeth line/Heathrow Express. LGW: Gatwick Express/Thameslink. STN/LTN: coach/rail.',
    },
    howTo: {
      ko: 'contactless/Oyster로 Tube·버스·대부분 기차. TfL Go·Citymapper 추천.',
      en: 'Contactless/Oyster for Tube, buses, most rail. TfL Go and Citymapper recommended.',
    },
    apps: [
      ta('tfl'),
      ta('citymapper'),
      ta('trainline'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '혼잡 요금·피크 요금을 피하려면 오프피크 이동이 유리합니다.',
      en: 'Off-peak travel helps avoid peak fares and crush crowds.',
    },
  },
  edinburgh: {
    modes: ['bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항 트램으로 센터 약 30분. 버스·택시 대안.',
      en: 'Airport tram ~30 min to centre; bus/taxi too.',
    },
    howTo: {
      ko: 'Ridacard·데이틱켓. 버스·트램. 올드타운은 언덕 도보.',
      en: 'Ridacard/day tickets. Buses and trams; Old Town is hilly walking.',
    },
    apps: [
      ta('lothian', { ko: '버스·트램 표·실시간', en: 'Bus and tram tickets, live times' }),
      ta('trainline'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  manchester: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Manchester 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Manchester—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Manchester: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Manchester centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  bath: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Bath: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Bath by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  oxford: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Oxford: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Oxford by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  cambridge: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Cambridge: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Cambridge by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  liverpool: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Liverpool: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Liverpool by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  brighton: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Brighton: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Brighton by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  york: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'York: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach York by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('uber'),
    ],
  },
  bristol: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Bristol: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Bristol by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('tfl'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  // —— ie ——
  dublin: {
    modes: ['bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'Aer Bus·Dublin Express 또는 택시/Uber 약 25–40분.',
      en: 'Aircoach/Dublin Express or taxi/Uber ~25–40 min.',
    },
    howTo: {
      ko: 'Leap 카드. Dublin Bus·Luas·DART. 시내 중심은 도보도 충분합니다.',
      en: 'Leap card. Dublin Bus, Luas, DART. The core is walkable.',
    },
    apps: [
      ta('tfi-live', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('irish-rail'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  galway: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Galway: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Galway is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('tfi-live', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('irish-rail'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  cork: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Cork: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Cork is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('tfi-live', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('irish-rail'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  killarney: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Killarney: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Killarney is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('tfi-live', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('irish-rail'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  kilkenny: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Kilkenny: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Kilkenny is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('tfi-live', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('irish-rail'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  limerick: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Limerick: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Limerick is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('tfi-live', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('irish-rail'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  // —— be ——
  brussels: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '기차(Airport→Bruxelles) 약 20분 또는 버스.',
      en: 'Train Airport→Brussels ~20 min, or bus.',
    },
    howTo: {
      ko: 'STIB/MIVB 티켓·MOBIB. 메트로·트램. 중앙역은 장거리 환승 허브.',
      en: 'STIB/MIVB tickets/MOBIB. Metro and trams; Midi/Central are rail hubs.',
    },
    apps: [
      ta('stib', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('sncb'),
      ta('citymapper'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  bruges: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Bruges: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Bruges by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('de-lijn', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('sncb'),
      ta('bolt'),
    ],
  },
  ghent: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Ghent: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Ghent centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('de-lijn', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('sncb'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  antwerp: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Antwerp: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Antwerp, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('de-lijn', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('sncb'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  leuven: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Leuven: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Leuven by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('de-lijn', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('sncb'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  dinant: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Dinant: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Dinant by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sncb'),
      ta('bolt'),
    ],
  },
  // —— nl ——
  amsterdam: {
    modes: ['tram', 'bus', 'metro', 'train', 'ferry', 'bike', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '기차로 Centraal 약 15–20분. 버스·택시 대안.',
      en: 'Train to Centraal ~15–20 min; bus/taxi also fine.',
    },
    howTo: {
      ko: 'GVB 데이틱켓·OV-chipkaart. 트램이 시내 핵심. 자전거는 규칙과 주차에 주의.',
      en: 'GVB day ticket or OV-chipkaart. Trams are central; bikes need careful parking and rules.',
    },
    apps: [
      ta('gvb', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('9292', { ko: '전국 길찾기·표', en: 'Nationwide routes and tickets' }),
      ta('ns'),
      ta('citymapper'),
      ta('bolt'),
      ta('uber'),
    ],
    tip: {
      ko: '운하 지역은 도보·트램이 편하고, 차는 비추천입니다.',
      en: 'Canal belt is best on foot/tram—skip driving.',
    },
  },
  rotterdam: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Rotterdam: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Rotterdam, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('ret', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('9292', { ko: '전국 길찾기·표', en: 'Nationwide routes and tickets' }),
      ta('ns'),
      ta('citymapper'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  'the-hague': {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'The Hague: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'The Hague centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('htm', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('9292', { ko: '전국 길찾기·표', en: 'Nationwide routes and tickets' }),
      ta('ns'),
      ta('citymapper'),
      ta('bolt'),
    ],
  },
  utrecht: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk', 'bike'],
    howTo: {
      ko: 'Utrecht: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Utrecht centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('9292', { ko: '전국 길찾기·표', en: 'Nationwide routes and tickets' }),
      ta('ns'),
      ta('citymapper'),
      ta('bolt'),
    ],
  },
  haarlem: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Haarlem: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Haarlem by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('9292', { ko: '전국 길찾기·표', en: 'Nationwide routes and tickets' }),
      ta('ns'),
      ta('citymapper'),
    ],
  },
  delft: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Delft: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Delft by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('9292', { ko: '전국 길찾기·표', en: 'Nationwide routes and tickets' }),
      ta('ns'),
      ta('citymapper'),
    ],
  },
  maastricht: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Maastricht: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Maastricht by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('9292', { ko: '전국 길찾기·표', en: 'Nationwide routes and tickets' }),
      ta('ns'),
    ],
  },
  giethoorn: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Giethoorn: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Giethoorn by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('9292', { ko: '전국 길찾기·표', en: 'Nationwide routes and tickets' }),
      ta('ns'),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  // —— lu ——
  'luxembourg-city': {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Luxembourg City: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Luxembourg City centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('mobiliteit-lu', { ko: '전국 길찾기 (대중교통 무료)', en: 'Nationwide planner (public transport is free)' }),
      ta('cfl'),
      ta('uber'),
    ],
  },
  vianden: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Vianden: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Vianden is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('mobiliteit-lu', { ko: '전국 길찾기 (대중교통 무료)', en: 'Nationwide planner (public transport is free)' }),
      ta('cfl'),
    ],
  },
  echternach: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Echternach: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Echternach is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('mobiliteit-lu', { ko: '전국 길찾기 (대중교통 무료)', en: 'Nationwide planner (public transport is free)' }),
      ta('cfl'),
    ],
  },
  remich: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Remich: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Remich is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('mobiliteit-lu', { ko: '전국 길찾기 (대중교통 무료)', en: 'Nationwide planner (public transport is free)' }),
      ta('cfl'),
    ],
  },
  // —— mc ——
  monaco: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Monaco: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Monaco. Check boat timetables first.',
    },
    apps: [
    ],
  },
  'monte-carlo': {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Monte Carlo: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Monte Carlo. Check boat timetables first.',
    },
    apps: [
    ],
  },
  // —— de ——
  berlin: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: 'BER에서 Airport Express(FEX)·S-Bahn·지역버스. 택시·Uber도 가능.',
      en: 'From BER: Airport Express (FEX), S-Bahn, or regional bus; taxi/Uber too.',
    },
    howTo: {
      ko: 'BVG 티켓(AB존). U/S-Bahn·트램·버스 통합. Jelbi·Citymapper 유용.',
      en: 'BVG ticket (zone AB). U/S-Bahn, tram, bus integrated. Jelbi and Citymapper help.',
    },
    apps: [
      ta('bvg', { ko: '표 구매', en: 'Tickets' }),
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
    ],
  },
  munich: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: 'S1/S8로 시내 약 40–45분. 공항버스 대안.',
      en: 'S1/S8 ~40–45 min; airport buses also work.',
    },
    howTo: {
      ko: 'MVV 티켓. U/S-Bahn이 핵심. Tageskarte가 관광에 유리합니다.',
      en: 'MVV tickets. U/S-Bahn core; day tickets suit sightseeing.',
    },
    apps: [
      ta('mvgo', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
    ],
  },
  hamburg: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Hamburg 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Hamburg—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Hamburg: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Hamburg, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('hvv-switch', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
    ],
  },
  cochem: {
    modes: ['walk', 'bus', 'train'],
    howTo: {
      ko: '마을은 걸어서 다닙니다. 성까지는 걸어서 오르거나 봄~가을엔 셔틀버스를 탑니다.',
      en: 'Walk the town; climb to the castle on foot or take the shuttle bus in spring to autumn.',
    },
    apps: [
      ta('db'),
    ],
  },
  cologne: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Cologne: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Cologne, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('kvb-app', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
    ],
  },
  rudesheim: {
    modes: ['walk', 'ferry', 'train'],
    howTo: {
      ko: '마을은 걸어서 다닙니다. 라인강 유람선 선착장이 역 바로 옆에 있습니다.',
      en: 'Walk the town; the Rhine cruise piers are right by the station.',
    },
    apps: [
      ta('db'),
    ],
  },
  frankfurt: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Frankfurt 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Frankfurt—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Frankfurt: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Frankfurt, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('rmvgo', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
    ],
  },
  dresden: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Dresden: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Dresden by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('dvb-mobil', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('db'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  heidelberg: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Heidelberg: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Heidelberg by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('rnv-start-info', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('db'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  bamberg: {
    modes: ['walk', 'bus', 'train'],
    howTo: {
      ko: '구시가는 걸어서 다닙니다. 역에서 구시가까지는 걸어서 약 20분이거나 시내버스를 탑니다.',
      en: 'Walk the old town; it is about 20 min on foot or a short bus ride from the station.',
    },
    apps: [
      ta('db'),
    ],
  },
  wurzburg: {
    modes: ['walk', 'tram', 'bus', 'train'],
    howTo: {
      ko: '구시가는 걸어서 다닙니다. 요새까지는 걸어서 오르거나 여름엔 9번 버스를 탑니다.',
      en: 'Walk the old town; climb to the fortress on foot or take bus 9 in summer.',
    },
    apps: [
      ta('db'),
    ],
  },
  regensburg: {
    modes: ['walk', 'bus', 'train'],
    howTo: {
      ko: '구시가는 걸어서 다닙니다. 발할라는 5번 버스로 갑니다.',
      en: 'Walk the old town; take bus 5 to the Walhalla.',
    },
    apps: [
      ta('db'),
    ],
  },
  berchtesgaden: {
    modes: ['bus', 'walk', 'train'],
    howTo: {
      ko: '쾨니히스제와 오버잘츠베르크는 중앙역 앞에서 버스로 갑니다.',
      en: 'Buses from the main station go to the Königssee and Obersalzberg.',
    },
    apps: [
      ta('db'),
    ],
  },
  'garmisch-partenkirchen': {
    modes: ['walk', 'bus', 'train'],
    howTo: {
      ko: '마을 안은 걷거나 시내버스를 탑니다. 추크슈피체 톱니바퀴 열차는 중앙역 옆 전용 역에서 출발합니다.',
      en: 'Walk or take local buses; the Zugspitze cogwheel train leaves from its own station beside the main one.',
    },
    apps: [
      ta('db'),
    ],
  },
  nuremberg: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Nuremberg: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Nuremberg, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  stuttgart: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Stuttgart: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Stuttgart, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('vvs-mobil', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '면허 택시 배차', en: 'Licensed taxis via the app' }),
    ],
  },
  leipzig: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Leipzig: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Leipzig by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('leipzigmove', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('db'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  rothenburg: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Rothenburg: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Rothenburg by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('db'),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  potsdam: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Potsdam: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Potsdam by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('db'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  // —— ch ——
  zurich: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: '기차로 HB 약 10분. 트램 연결도 좋습니다.',
      en: 'Train to HB ~10 min; tram links are strong too.',
    },
    howTo: {
      ko: 'ZVV 티켓·스위스 Travel Pass. 트램·S-Bahn이 정확합니다.',
      en: 'ZVV tickets or Swiss Travel Pass. Trams and S-Bahn are punctual.',
    },
    apps: [
      ta('sbb'),
      ta('uber'),
    ],
  },
  geneva: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Geneva 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Geneva—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Geneva: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Geneva, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('sbb'),
      ta('uber'),
    ],
  },
  bern: {
    modes: ['tram', 'bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Bern: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Bern centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  lucerne: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Lucerne: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Lucerne by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  interlaken: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Interlaken: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Interlaken usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('sbb'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  basel: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Basel: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Basel centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('sbb'),
      ta('uber'),
    ],
  },
  zermatt: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Zermatt: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Zermatt usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('sbb'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  lausanne: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Lausanne: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Lausanne, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('sbb'),
      ta('uber'),
    ],
  },
  lugano: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Lugano: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Lugano by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  montreux: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Montreux: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Montreux by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  grindelwald: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'Grindelwald: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Grindelwald usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('sbb'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  'st-moritz': {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: 'St Moritz: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'St Moritz usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('sbb'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  // —— at ——
  vienna: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: 'CAT·ÖBB S7·버스(Vienna Airport Lines). 택시·Uber 대안.',
      en: 'CAT, ÖBB S7, or Vienna Airport Lines bus; taxi/Uber too.',
    },
    howTo: {
      ko: 'Wiener Linien 티켓·WienMobil. U-Bahn·트램이 매우 편합니다.',
      en: 'Wiener Linien tickets and WienMobil. U-Bahn and trams are excellent.',
    },
    apps: [
      ta('wienmobil', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('oebb'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  salzburg: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Salzburg: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Salzburg by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('salzburg-verkehr', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('oebb'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  innsbruck: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Innsbruck: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Innsbruck by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('ivb-tickets-app', { ko: '표 구매', en: 'Tickets' }),
      ta('oebb'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  graz: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Graz: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Graz centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('grazmobil', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('oebb'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  hallstatt: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Hallstatt: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Hallstatt usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('oebb'),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  // —— li ——
  vaduz: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Vaduz에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Vaduz from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Vaduz: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Vaduz is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  schaan: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Schaan에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Schaan from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Schaan: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Schaan is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  malbun: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Malbun에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Malbun from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Malbun: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Malbun is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('sbb'),
    ],
  },
  // —— cz ——
  prague: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항 버스 119→Nádraží Veleslavín 메트로 A, 또는 공항 버스 100.',
      en: 'Bus 119 to metro A (Veleslavín) or airport bus 100.',
    },
    howTo: {
      ko: 'PID Litacka/관광권. 메트로·트램 환승. 택시보다 Bolt·Uber를 쓰세요.',
      en: 'PID Litacka/tourist pass. Metro+tram transfers. Prefer Bolt/Uber to street taxis.',
    },
    apps: [
      ta('pid-litacka', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('cd'),
      ta('citymapper'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  brno: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Brno: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Brno by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('cd'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  'cesky-krumlov': {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Cesky Krumlov: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Cesky Krumlov by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('cd'),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  'karlovy-vary': {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Karlovy Vary: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Karlovy Vary by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('cd'),
      ta('bolt'),
    ],
  },
  'ceske-budejovice': {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Ceske Budejovice: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Ceske Budejovice by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('cd'),
      ta('bolt'),
    ],
  },
  // —— sk ——
  bratislava: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Bratislava: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Bratislava centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  kosice: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Kosice: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Kosice by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
    ],
  },
  poprad: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Poprad: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Poprad by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
    ],
  },
  'banska-bystrica': {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Banska Bystrica: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Banska Bystrica by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
    ],
  },
  trencin: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Trencin: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Trencin by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
    ],
  },
  // —— hu ——
  szentendre: {
    modes: ['walk', 'bus', 'train'],
    howTo: {
      ko: '마을은 걸어서 다닙니다. 스칸젠은 HÉV역 앞에서 버스로 갑니다.',
      en: 'Walk the town; take a bus from the HÉV station to the Skanzen.',
    },
    apps: [
      ta('budapestgo'),
    ],
  },
  budapest: {
    modes: ['metro', 'tram', 'bus', 'train', 'ferry', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '100E 버스 또는 지하철 환승. 택시·Bolt도 흔합니다.',
      en: 'Bus 100E or metro with transfer; taxi/Bolt common.',
    },
    howTo: {
      ko: 'BudapestGO·여행권. 메트로·트램 4/6. 다뉴브 페리는 관광용으로 좋아요.',
      en: 'BudapestGO/passes. Metro and trams 4/6. Danube ferries are fun for sightseeing.',
    },
    apps: [
      ta('budapestgo', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('mav'),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
    ],
  },
  debrecen: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Debrecen: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Debrecen by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('mav'),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
    ],
  },
  pecs: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Pecs: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Pecs by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('mav'),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
    ],
  },
  szeged: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Szeged: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Szeged by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('mav'),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
    ],
  },
  eger: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Eger: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Eger by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('mav'),
      ta('bolt', { ko: '우버 대체', en: 'Uber alternative' }),
    ],
  },
  // —— pl ——
  warsaw: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'SKM/기차·버스 175/188. 택시·Bolt도 흔합니다.',
      en: 'SKM/rail or buses 175/188; taxi/Bolt common.',
    },
    howTo: {
      ko: 'ZTM 티켓·Warsaw City Card. 메트로 2개 노선 + 트램.',
      en: 'ZTM tickets/Warsaw City Card. Two metro lines plus trams.',
    },
    apps: [
      ta('jakdojade', { ko: '시내 교통 표·길찾기', en: 'City transport tickets and routes' }),
      ta('pkp'),
      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),
      ta('uber'),
    ],
  },
  krakow: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Krakow 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Krakow—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Krakow: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Krakow centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('jakdojade', { ko: '시내 교통 표·길찾기', en: 'City transport tickets and routes' }),
      ta('pkp'),
      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),
      ta('uber'),
    ],
  },
  gdansk: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Gdansk 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Gdansk—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Gdansk: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Gdansk centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('jakdojade', { ko: '시내 교통 표·길찾기', en: 'City transport tickets and routes' }),
      ta('pkp'),
      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),
      ta('uber'),
    ],
  },
  wroclaw: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Wroclaw 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Wroclaw—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Wroclaw: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Wroclaw centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('jakdojade', { ko: '시내 교통 표·길찾기', en: 'City transport tickets and routes' }),
      ta('pkp'),
      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),
      ta('uber'),
    ],
  },
  poznan: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Poznan: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Poznan centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('peka', { ko: '표 구매', en: 'Tickets' }),
      ta('jakdojade', { ko: '시내 교통 표·길찾기', en: 'City transport tickets and routes' }),
      ta('pkp'),
      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),
      ta('uber'),
    ],
  },
  zakopane: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Zakopane: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Zakopane by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('pkp'),
      ta('uber'),
    ],
  },
  torun: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Torun: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Torun by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('pkp'),
      ta('bolt', { ko: '우버보다 빠른 편', en: 'Often faster than Uber' }),
      ta('uber'),
    ],
  },
  // —— es ——
  madrid: {
    modes: ['metro', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '메트로 8호선 또는 Cercanías·공항 버스(Express). 택시 고정요금 구간이 있습니다.',
      en: 'Metro line 8, Cercanías, or Airport Express bus. Flat-rate taxi options to the center.',
    },
    howTo: {
      ko: 'Tarjeta Multi / 관광 티켓. 메트로+버스 환승. Citymapper·공식 Metro de Madrid 앱이 편합니다.',
      en: 'Tarjeta Multi or tourist passes. Metro+bus transfers. Citymapper or Metro de Madrid apps help.',
    },
    apps: [
      ta('citymapper'),
      ta('metro-madrid'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '공항–시내 택시는 공식 스탠드 이용. 야간에는 메트로 막차 시간을 확인하세요.',
      en: 'Use official airport taxi ranks. Check last metro times at night.',
    },
  },
  barcelona: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: 'Aerobus·메트로 L9·RENFE. 시내까지 약 30–45분. 택시·Cabify도 흔합니다.',
      en: 'Aerobus, metro L9, or RENFE (~30–45 min). Taxis and Cabify are common.',
    },
    howTo: {
      ko: 'T-Casual·Hola Barcelona 카드. TMB 메트로·버스·트램 통합. 스마트폰 태핑 가능 구간이 늘고 있습니다.',
      en: 'T-Casual or Hola Barcelona. TMB metro/bus/tram integrated; contactless tap expanding.',
    },
    apps: [
      ta('citymapper'),
      ta('tmb'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
    tip: {
      ko: '사그라다 파밀리아·고딕 지구는 메트로+도보. 소매치기 주의로 가방은 앞으로.',
      en: 'Sagrada Família and Gothic Quarter: metro + walk. Watch for pickpockets—bag in front.',
    },
  },
  palma: {
    modes: ['bus', 'train', 'metro', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항 버스·택시로 시내 약 20분. 메트로 연결도 있습니다.',
      en: 'Airport bus/taxi ~20 min; metro links exist too.',
    },
    howTo: {
      ko: 'EMT 시내버스·메트로. 마요르카 섬 열차로 Sóller 등. 구시가는 도보.',
      en: 'EMT buses and metro. Island trains toward Sóller etc. Old town is walkable.',
    },
    apps: [
      ta('emt-palma', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('tib-mallorca', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('renfe'),
      ta('uber'),
    ],
  },
  cadiz: {
    modes: ['walk', 'bus', 'taxi'],
    howTo: {
      ko: '구시가는 걸어서 다닙니다. 기차역이 구시가 입구에 있습니다.',
      en: 'Walk the old town; the station is at its edge.',
    },
    apps: [
      ta('renfe'),
    ],
  },
  seville: {
    modes: ['metro', 'tram', 'bus', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: '공항 버스 EA로 시내 약 30–40분. 택시·Cabify 약 25–35€.',
      en: 'Airport bus EA ~30–40 min. Taxi/Cabify about €25–35.',
    },
    howTo: {
      ko: '구시가는 도보가 최고. 메트로·트람비아·버스는 교외·세비야 엑스포 방면.',
      en: 'Old town is best on foot. Metro, tram, and buses for outer areas and Expo.',
    },
    apps: [
      ta('tussam', { ko: '시내버스', en: 'City buses' }),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  granada: {
    modes: ['bus', 'metro', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '공항 버스 또는 택시 약 20–30분. 고속버스·AVE 연결은 안달루시아 거점 경유.',
      en: 'Airport bus or taxi ~20–30 min. Longer rail/coach via Andalusia hubs.',
    },
    howTo: {
      ko: '알밤브라는 예약 필수 + 버스 C30/C32 또는 택시. 알바이신은 미니버스·도보.',
      en: 'Alhambra needs timed tickets + bus C30/C32 or taxi. Albaicín: minibuses and walking.',
    },
    apps: [
      ta('transporte-urbano-de-granada', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('transporte-de-andalucia', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('uber'),
    ],
  },
  valencia: {
    modes: ['metro', 'tram', 'bus', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: '메트로 3/5호선으로 시내 약 25분.',
      en: 'Metro lines 3/5 to the center ~25 min.',
    },
    howTo: {
      ko: 'SUMA/교통카드로 메트로·트램·버스. 시티바이크·도보로 시우타드 데 라스 아르테스 방면도 가능.',
      en: 'SUMA card for metro, tram, bus. Bike/walk works toward the Arts & Sciences area.',
    },
    apps: [
      ta('metrovalencia'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  malaga: {
    modes: ['metro', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'Cercanías C1 기차로 센터 약 15분. 버스·택시 대안.',
      en: 'Cercanías C1 train to center ~15 min; bus/taxi also fine.',
    },
    howTo: {
      ko: '시내 버스·메트로. 네르하·지브롤터 당일치기는 버스 또는 렌터.',
      en: 'City buses and metro. Day trips to Nerja/Gibraltar by bus or rental car.',
    },
    apps: [
      ta('emt-malaga', { ko: '표 구매', en: 'Tickets' }),
      ta('renfe-cercanias'),
      ta('bolt'),
      ta('cabify', { ko: '우버 대체', en: 'Uber alternative' }),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  bilbao: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '비즈카이버스·택시로 시내 약 20분.',
      en: 'Bizkaibus or taxi ~20 min to the center.',
    },
    howTo: {
      ko: 'Metro Bilbao·트램·버스. Barik 카드. 구겐하임은 트램/도보가 편합니다.',
      en: 'Metro Bilbao, tram, and buses with Barik card. Guggenheim is tram/walk.',
    },
    apps: [
      ta('bilbobus', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('barik', { ko: '표 구매', en: 'Tickets' }),
      ta('renfe'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  toledo: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '마드리드 공항 → 아토차/멘데즈 알바로 환승 후 기차·버스.',
      en: 'From Madrid airport, transfer via Atocha/Méndez Álvaro then train/bus.',
    },
    howTo: {
      ko: '구시가는 도보·에스컬레이터. 마드리드에서 Cercanías/AVE·버스가 핵심.',
      en: 'Walk (and escalators) in the old town. Rail/bus from Madrid is the key link.',
    },
    apps: [
      ta('renfe'),
      ta('alsa'),
      ta('bolt'),
    ],
    tip: {
      ko: '자동차는 성벽 안이 협소합니다. 외곽 P 주차장을 이용하세요.',
      en: 'Cars struggle inside the walls—use outer park-and-walk lots.',
    },
  },
  cordoba: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '세비야/말라가 공항 경유 또는 마드리드 AVE. 시내까지 택시·버스.',
      en: 'Via Seville/Málaga airports or Madrid AVE; taxi/bus into town.',
    },
    howTo: {
      ko: '메스키타·유대인 지구는 도보. AVE로 마드리드·세비야 연결. 시내버스 보조.',
      en: 'Walk the Mezquita/Judería. AVE to Madrid/Seville; city buses fill gaps.',
    },
    apps: [
      ta('renfe'),
    ],
  },
  'san-sebastian': {
    modes: ['bus', 'train', 'rideshare', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: '산세바스티안 공항은 소규모. 빌바오 공항+버스도 흔합니다.',
      en: 'Small local airport; many use Bilbao airport + bus.',
    },
    howTo: {
      ko: '시내버스·도보로 해변·구시가. Euskotren·RENFE로 빌바오· Hendaye 연결.',
      en: 'City buses and walking for beach/old town. Euskotren/RENFE toward Bilbao/Hendaye.',
    },
    apps: [
      ta('dbus', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('renfe'),
      ta('uber'),
    ],
  },
  zaragoza: {
    modes: ['bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항 버스·택시로 시내 약 30분. AVE 역과도 연결됩니다.',
      en: 'Airport bus/taxi ~30 min; also linked toward the AVE station.',
    },
    howTo: {
      ko: '트램·시내버스. AVE로 마드리드·바르셀로나. 구시가는 도보.',
      en: 'Tram and city buses. AVE to Madrid/Barcelona. Old town is walkable.',
    },
    apps: [
      ta('avanza-zaragoza', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('renfe'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber'),
    ],
  },
  salamanca: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '마드리드 경유 기차·버스. 렌터도 가능.',
      en: 'Train/bus via Madrid; rentals also work.',
    },
    howTo: {
      ko: '플라자 마요르·대학 지구는 도보. 마드리드에서 기차·버스.',
      en: 'Plaza Mayor and university area on foot. Train/bus from Madrid.',
    },
    apps: [
      ta('renfe'),
      ta('alsa'),
    ],
  },
  santiago: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '공항 버스·택시로 시내 약 20–30분.',
      en: 'Airport bus or taxi ~20–30 min.',
    },
    howTo: {
      ko: '대성당 광장 일대는 도보. 시내버스·택시. AVE/기차·버스로 마드리드·포르투 방면.',
      en: 'Cathedral quarter on foot; city buses/taxis. Rail/coach toward Madrid/Porto.',
    },
    apps: [
      ta('renfe'),
      ta('alsa'),
    ],
  },
  avila: {
    modes: ['walk', 'bus', 'taxi'],
    howTo: {
      ko: '구시가는 걸어서 다닙니다. 기차역에서 성벽까지는 걸어서 약 15분입니다.',
      en: 'Walk the old town; the walls are about 15 minutes on foot from the station.',
    },
    apps: [
      ta('renfe'),
    ],
  },
  segovia: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '마드리드 공항 → 차마르틴/멘데즈 알바로 환승 후 세고비아.',
      en: 'Madrid airport → Chamartín/Méndez Álvaro then on to Segovia.',
    },
    howTo: {
      ko: '로마 수도교·알카사르는 도보. 마드리드에서 AVE·버스(약 30–60분).',
      en: 'Walk to the aqueduct and Alcázar. AVE/bus from Madrid (~30–60 min).',
    },
    apps: [
      ta('autobuses-urbanos-de-segovia', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('renfe'),
      ta('alsa'),
    ],
  },
  ronda: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '말라가 공항에서 기차/버스 환승 약 2시간 또는 렌터.',
      en: 'From Málaga airport: train/bus ~2 hrs with transfers, or rental car.',
    },
    howTo: {
      ko: '협곡·구시가는 도보. 말라가에서 기차·버스. 협곡 전망은 경사에 주의.',
      en: 'Walk the gorge/old town. Train/bus from Málaga. Mind steep viewpoints.',
    },
    apps: [
      ta('renfe'),
      ta('alsa'),
    ],
  },
  girona: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk', 'bike'],
    airportToCity: {
      ko: '지로나 공항 버스 또는 바르셀로나 공항 경유 기차.',
      en: 'Girona airport bus, or via Barcelona airport + train.',
    },
    howTo: {
      ko: '구시가·유다 지구는 도보. Renfe로 바르셀로나 약 40–60분. 공항 버스도 있습니다.',
      en: 'Walk the old/Jewish quarter. Renfe to Barcelona ~40–60 min; airport buses exist.',
    },
    apps: [
      ta('renfe'),
    ],
  },
  nerja: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '말라가 공항에서 버스(환승) 또는 렌터·택시 약 50–70분.',
      en: 'From Málaga airport: bus (with transfer) or rental/taxi ~50–70 min.',
    },
    howTo: {
      ko: '마을은 도보 중심. 동굴·부리아나 해변은 시내버스·Taxi. 말라가 방면 ALSA·로컬 버스.',
      en: 'Walk the town. Caves and Burriana beach by local bus or taxi. ALSA/local buses toward Málaga.',
    },
    apps: [
      ta('alsa'),
      ta('uber'),
    ],
    tip: {
      ko: '여름엔 버스가 빨리 찹니다. 동굴 티켓·버스 시간을 같이 보세요.',
      en: 'Summer buses fill fast—align cave tickets with bus times.',
    },
  },
  gibraltar: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '지브롤터 공항은 활주로를 건너 시내로 연결. 스페인(라 리네아)에서 도보 입국 후 버스·택시가 흔합니다.',
      en: 'Gibraltar Airport links on foot across the runway. Many arrive via La Línea (Spain) then bus/taxi.',
    },
    howTo: {
      ko: '바위(Upper Rock)는 케이블카·공식 관광택시 투어. 시내는 버스·도보. 국경 대기 시간을 감안하세요.',
      en: 'Upper Rock: cable car or official taxi tours. Town is bus/walk. Allow time at the border.',
    },
    apps: [
    ],
    tip: {
      ko: '영국령이지만 많은 여행자가 스페인 남부 일정에 묶습니다. EU 로밍·출입국 줄을 확인하세요.',
      en: 'British territory often planned with Andalusia—check border queues and roaming.',
    },
  },
  // —— pt ——
  lisbon: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항 메트로(vermelho)로 Saldanha·Baixa 방면 약 25–40분. Bolt/Uber/택시 약 15–25€.',
      en: 'Metro (red line) toward Saldanha/Baixa ~25–40 min. Bolt/Uber/taxi about €15–25.',
    },
    howTo: {
      ko: 'Viva Viagem / Navegante 카드 또는 교통 앱. 90분 환승 티켓·일일권이 편합니다. 28번 트램은 혼잡하니 일찍 타세요.',
      en: 'Viva Viagem / Navegante card or transit apps. 90-min transfers or day passes work well. Tram 28 is crowded—go early.',
    },
    apps: [
      ta('navegante', { ko: '교통권·충전', en: 'Transit passes and top-ups' }),
      ta('citymapper'),
      ta('carris', { ko: '시내 버스·트램', en: 'City bus & tram' }),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('uber'),
    ],
    tip: {
      ko: '알파마·바이샤는 언덕이 많아 트램을 같이 쓰면 편합니다. 옛 푸니쿨라와 산타 후스타 엘리베이터는 2025년 9월 사고 뒤 운행이 멈춰 있습니다.',
      en: 'Alfama and Baixa are hilly, so trams help; the historic funiculars and the Santa Justa lift have been closed since an accident in September 2025.',
    },
  },
  porto: {
    modes: ['metro', 'bus', 'train', 'tram', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '메트로 E선으로 시내(트린다지 등) 약 30–40분. Bolt/택시 약 20–30€.',
      en: 'Metro line E to downtown (e.g. Trindade) ~30–40 min. Bolt/taxi about €20–30.',
    },
    howTo: {
      ko: 'Andante 카드로 메트로·버스 통합. 존(zone)별 요금. Sao Bento–Campanhã 기차·시내 이동에 유용합니다.',
      en: 'Andante card covers metro and buses by zone. Handy with São Bento–Campanhã trains.',
    },
    apps: [
      ta('anda', { ko: '교통권 (탭해서 탑승)', en: 'Tickets — tap in with your phone' }),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('uber'),
    ],
    tip: {
      ko: '히베이라·빌라 노바 드 가이아 강변은 도보·메트로·수상 택시 조합이 좋습니다.',
      en: 'Ribeira and Gaia waterfront work well on foot, metro, or water taxi.',
    },
  },
  sintra: {
    modes: ['train', 'bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '리스본 공항 → 시내 기차역(Rossio/Oriente) 환승 후 Sintra선. 자동차·Uber는 성수기 주차 혼잡을 고려하세요.',
      en: 'From Lisbon airport, transfer to Rossio/Oriente then the Sintra train. Cars/Uber face peak parking crowds.',
    },
    howTo: {
      ko: 'CP 근교 기차가 핵심. 시내–왕궁·페나 성은 투어버스(434 등)·도보·Uber를 섞습니다.',
      en: 'CP suburban trains are the backbone. Palaces use tourist bus (e.g. 434), walking, or Uber.',
    },
    apps: [
      ta('carris-metropolitana', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('cp'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('uber'),
    ],
    tip: {
      ko: '페나 성·무어 성 구간은 경사가 심합니다. 왕복 교통을 미리 정해 두면 편합니다.',
      en: 'Pena and Moorish castle climbs are steep—plan return transport ahead.',
    },
  },
  faro: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '공항 버스·택시로 시내 10–20분. 알가르브 다른 해변 도시는 장거리 버스·렌터가 편합니다.',
      en: 'Airport bus/taxi to town in 10–20 min. Other Algarve towns are easier by coach or rental car.',
    },
    howTo: {
      ko: '시내는 도보 충분. Eva·Vamus 버스와 CP 기차로 Lagos·Albufeira 이동.',
      en: 'Town center is walkable. Eva/Vamus buses and CP trains reach Lagos and Albufeira.',
    },
    apps: [
      ta('cp'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('uber'),
    ],
  },
  coimbra: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '리스본/포르투에서 기차 약 1.5–2시간. 공항에서는 각 도시 환승.',
      en: 'Train ~1.5–2 hrs from Lisbon/Porto; transfer via those cities from airports.',
    },
    howTo: {
      ko: '구시가·대학은 도보·시내버스. CP 기차로 리스본·포르투 연결.',
      en: 'Walk or bus the old town/university. CP trains link Lisbon and Porto.',
    },
    apps: [
      ta('cp'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('uber'),
    ],
  },
  funchal: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '푸샬 공항에서 버스·택시로 시내 약 20–30분.',
      en: 'Airport bus or taxi to town ~20–30 min.',
    },
    howTo: {
      ko: '시내버스(HF)·택시. 언덕이 많아 케이블카·Uber를 섞습니다. 본토와는 항공.',
      en: 'City buses (HF) and taxis. Hilly—use cable cars/Uber. Flights to/from the mainland.',
    },
    apps: [
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('uber'),
    ],
    tip: {
      ko: '렌터는 산악 도로와 주차 공간을 고려하세요.',
      en: 'If renting a car, plan for mountain roads and scarce parking.',
    },
  },
  lagos: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: 'Faro 공항에서 버스·기차 환승 또는 렌터 약 1시간.',
      en: 'From Faro airport: bus/train transfer or rental ~1 hr.',
    },
    howTo: {
      ko: '구시가는 도보. 해변·절벽은 로컬 버스·택시. Faro·라구스는 CP/버스.',
      en: 'Walk the old town; beaches/cliffs by local bus or taxi. CP/coaches to Faro and beyond.',
    },
    apps: [
      ta('cp'),
      ta('rede-expressos'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('uber'),
    ],
  },
  cascais: {
    modes: ['train', 'bus', 'taxi', 'rideshare', 'bike', 'walk'],
    airportToCity: {
      ko: '리스본 공항 → Cais do Sodré 환승 후 Cascais선 기차 약 40분.',
      en: 'Lisbon airport → Cais do Sodré, then Cascais line train ~40 min.',
    },
    howTo: {
      ko: '리스본–카스카이스 근교 기차가 가장 편합니다. 해안 산책·자전거는 보카 도 인페르노 방면.',
      en: 'Suburban train from Lisbon is easiest. Walk or bike the coast toward Boca do Inferno.',
    },
    apps: [
      ta('mobicascais', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('cp'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('uber'),
    ],
  },
  aveiro: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'bike', 'walk'],
    airportToCity: {
      ko: '포르투 공항 → 기차/버스 환승으로 Aveiro 약 1–1.5시간.',
      en: 'From Porto airport, train/bus transfer to Aveiro ~1–1.5 hrs.',
    },
    howTo: {
      ko: 'CP로 포르투·코임브라 접근. 시내는 도보·자전거·몰레이루 관광 보트.',
      en: 'CP trains from Porto/Coimbra. Walk, bike, or moliceiro boats in town.',
    },
    apps: [
      ta('cp'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('uber'),
    ],
  },
  fatima: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '리스본에서 버스 약 1–1.5시간. 렌터·택시 대안.',
      en: 'Coach from Lisbon ~1–1.5 hrs; rental/taxi also fine.',
    },
    howTo: {
      ko: '성지 일대는 도보. 리스본·포르투에서 Rede Expressos 등 장거리 버스가 편합니다.',
      en: 'Walk the sanctuary area. Coaches (e.g. Rede Expressos) from Lisbon/Porto are easiest.',
    },
    apps: [
      ta('rede-expressos'),
      ta('uber'),
    ],
  },
  evora: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '리스본에서 기차·버스 약 1.5–2시간.',
      en: 'Train or bus from Lisbon ~1.5–2 hrs.',
    },
    howTo: {
      ko: '성벽 안은 도보. 리스본에서 기차·버스. 시내는 작아 택시 수요가 적습니다.',
      en: 'Walk inside the walls. Train/bus from Lisbon; town is compact so taxis are optional.',
    },
    apps: [
      ta('cp'),
      ta('rede-expressos'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('uber'),
    ],
  },
  obidos: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '리스본에서 버스 또는 렌터 약 1–1.5시간. 외곽 주차장 이용.',
      en: 'Bus or rental from Lisbon ~1–1.5 hrs; use outer parking.',
    },
    howTo: {
      ko: '중세 성곽 마을은 도보 전용에 가깝습니다. 리스본에서 버스·투어가 일반적.',
      en: 'The walled village is almost entirely on foot. Buses/tours from Lisbon are typical.',
    },
    apps: [
      ta('rede-expressos'),
      ta('uber'),
    ],
    tip: {
      ko: '차로 성벽 안 진입이 제한됩니다. 주차장에서 걸어 들어가세요.',
      en: 'Cars are restricted inside the walls—park outside and walk in.',
    },
  },
  braga: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '포르투 공항에서 버스·기차 환승 또는 Bolt(약 40–50분).',
      en: 'From Porto airport: bus/train transfer or Bolt (~40–50 min).',
    },
    howTo: {
      ko: '시내는 도보·시내버스. Bom Jesus는 버스 또는 Uber + 언덕 엘리베이터/계단.',
      en: 'Walk or city bus downtown. Bom Jesus: bus/Uber plus funicular or stairs.',
    },
    apps: [
      ta('tub-app', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('cp'),
      ta('bolt', { ko: '우버보다 잘 잡히는 편', en: 'Often more cars than Uber' }),
      ta('uber'),
    ],
  },
  nazare: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '리스본에서 Rede Expressos 등 장거리 버스 약 1.5–2시간. 렌터·Uber는 비쌀 수 있습니다.',
      en: 'Coach from Lisbon ~1.5–2 hrs (e.g. Rede Expressos). Rental/Uber can cost more.',
    },
    howTo: {
      ko: '시내–시티우(언덕)는 엘리베이터·버스·도보. 북해변은 도보 또는 짧은 택시.',
      en: 'Town–Sítio uses the funicular, bus, or walk. Praia do Norte is a short walk or taxi.',
    },
    apps: [
      ta('rede-expressos'),
      ta('uber'),
    ],
    tip: {
      ko: '빅웨이브 시즌에는 시티우 전망대 접근이 혼잡합니다. 엘리베이터를 우선하세요.',
      en: 'In big-wave season Sítio viewpoints get crowded—prefer the funicular.',
    },
  },
  guimaraes: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '포르투에서 기차·버스 약 1시간. 공항에서는 포르투 시내 환승이 일반적입니다.',
      en: 'Train or bus from Porto ~1 hr. From the airport, usually transfer via Porto.',
    },
    howTo: {
      ko: '구시가·성은 대부분 도보. 펜야 산은 케이블카 또는 Uber.',
      en: 'Old town and castle are walkable. Penha is cable car or Uber.',
    },
    apps: [
      ta('cp'),
      ta('uber'),
    ],
  },
  // —— ad ——
  'andorra-la-vella': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Andorra La Vella에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Andorra La Vella from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Andorra La Vella: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Andorra La Vella is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('alsa'),
      ta('uber'),
    ],
  },
  'pas-de-la-casa': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Pas De La Casa에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Pas De La Casa from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Pas De La Casa: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Pas De La Casa is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('alsa'),
    ],
  },
  ordino: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Ordino에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Ordino from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Ordino: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Ordino is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('alsa'),
    ],
  },
  // —— it ——
  rome: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'FCO: Leonardo Express→Termini 또는 버스. CIA: 공항버스.',
      en: 'FCO: Leonardo Express to Termini or buses. CIA: airport coaches.',
    },
    howTo: {
      ko: 'ATAC 티켓·BIT. 메트로 3개 노선 + 버스. 시내 중심은 도보가 빠른 구간이 많습니다.',
      en: 'ATAC tickets/BIT. Three metro lines plus buses. Walking often wins in the core.',
    },
    apps: [
      ta('atac', { ko: '표 구매', en: 'Tickets' }),
      ta('trenitalia'),
      ta('citymapper'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
    tip: {
      ko: '바티칸·콜로세오는 메트로+도보. 소매치기 주의.',
      en: 'Vatican/Colosseum: metro + walk. Mind pickpockets.',
    },
  },
  milan: {
    modes: ['metro', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'MXP: Malpensa Express. LIN: 공항버스·지하철 환승. BGY: 버스→밀라노.',
      en: 'MXP: Malpensa Express. LIN: coach/metro link. BGY: bus into Milan.',
    },
    howTo: {
      ko: '지하철·트램·버스는 ATM이 운영합니다. ATM 앱에서 표를 사고 앱으로 개찰하며, 길찾기와 실시간 대기 시간도 봅니다. 메트로가 빠르고, 근교는 Trenord.',
      en: 'ATM runs the metro, trams and buses: buy and validate tickets in the ATM app, which also plans routes and shows live waiting times. The metro is fastest; Trenord serves the suburbs.',
    },
    apps: [
      ta('atm-milano', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trenitalia'),
      ta('citymapper'),
      ta('bolt'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  florence: {
    modes: ['bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '트램 T2 또는 버스·택시 약 20–30분.',
      en: 'Tram T2 or bus/taxi ~20–30 min.',
    },
    howTo: {
      ko: '구시가는 도보가 최고. 버스는 at(Autolinee Toscane)가 운영하며, at bus 앱에서 표를 사고 노선·실시간 도착을 봅니다. 버스·트램은 비접촉 카드로도 탑니다. 역은 SMN.',
      en: 'The historic centre is best on foot. Buses are run by at (Autolinee Toscane): buy tickets and check routes and live arrivals in the at bus app, or tap a contactless card on buses and trams. Main station: SMN.',
    },
    apps: [
      ta('at-bus', { ko: '버스 표·노선', en: 'Bus tickets and routes' }),
      ta('trenitalia'),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  venice: {
    modes: ['ferry', 'train', 'bus', 'walk', 'taxi'],
    airportToCity: {
      ko: 'Alandro·버스·수상택시. 마르코 폴로→Piacale Roma 후 바포레토.',
      en: 'Alandro, bus, or water taxi. Marco Polo → Piazzale Roma then vaporetto.',
    },
    howTo: {
      ko: 'ACTV 바포레토 데이패스. 섬 이동은 배, 본섬은 도보. 다리는 캐리어에 불리합니다.',
      en: 'ACTV vaporetto day pass. Boats between islands; walk the main island—bridges vs luggage.',
    },
    apps: [
      ta('avm-venezia', { ko: '바포레토·버스 표', en: 'Vaporetto and bus tickets' }),
      ta('trenitalia'),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
    tip: {
      ko: '수상택시는 비쌉니다. 데이패스로 충분할 때가 많습니다.',
      en: 'Water taxis are pricey—day passes often suffice.',
    },
  },
  naples: {
    modes: ['metro', 'ferry', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Naples 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Naples—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Naples: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Naples, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('anm-go', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trenitalia'),
      ta('citymapper'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  bologna: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Bologna: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Bologna centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('roger', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trenitalia'),
      ta('citymapper'),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  verona: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Verona: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Verona centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('trenitalia'),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  turin: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Turin: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Turin, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('to-move', { ko: '표 구매', en: 'Tickets' }),
      ta('trenitalia'),
      ta('citymapper'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  amalfi: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Amalfi: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Amalfi by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  siena: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Siena: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Siena by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  genoa: {
    modes: ['ferry', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Genoa: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Genoa centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('trenitalia'),
      ta('citymapper'),
    ],
  },
  palermo: {
    modes: ['ferry', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Palermo: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Palermo centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('trenitalia'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '블랙·밴 위주 (우버X 없음)', en: 'Mostly Black/Van, not UberX' }),
    ],
  },
  como: {
    modes: ['train', 'ferry', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '밀라노에서 기차로 약 40~60분. 호수 마을은 페리(Navigazione Laghi)로 다닙니다.',
      en: 'About 40–60 min by train from Milan; lake villages by Navigazione Laghi ferries.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  bergamo: {
    modes: ['train', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '밀라노에서 기차로 약 50분, 오리오 알 세리오 공항에서 버스. 윗마을은 푸니콜라레로 오릅니다.',
      en: '~50 min by train from Milan; airport bus from Orio al Serio. Funicular up to Città Alta.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  stresa: {
    modes: ['train', 'ferry', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '밀라노에서 기차로 약 1시간. 보로메오 섬은 선착장에서 페리로 갑니다.',
      en: '~1 hr by train from Milan; ferries from the pier to the Borromean Islands.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  sirmione: {
    modes: ['train', 'bus', 'ferry', 'taxi', 'walk'],
    howTo: {
      ko: '데센차노 델 가르다역에서 버스·페리로 이동. 구시가는 차량 통제 구역입니다.',
      en: 'Train to Desenzano del Garda, then bus or ferry; the old town is car-free.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  padua: {
    modes: ['train', 'tram', 'bus', 'walk', 'bike'],
    howTo: {
      ko: '베네치아에서 기차로 약 30분. 역에서 시내까지 트램 한 노선이 다닙니다.',
      en: '~30 min by train from Venice; a single tram line runs from the station into town.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  trieste: {
    modes: ['train', 'bus', 'ferry', 'taxi', 'walk'],
    howTo: {
      ko: '베네치아에서 기차로 약 2시간. 시내는 버스와 도보로 충분합니다.',
      en: '~2 hrs by train from Venice; buses and walking cover the city.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  bolzano: {
    modes: ['train', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '베로나·인스브루크에서 기차로 연결. 레논 고원은 시내에서 케이블카로 오릅니다.',
      en: 'Rail links to Verona and Innsbruck; cable car from town up to the Renon plateau.',
    },
    apps: [
      ta('sudtirolmobil', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trenitalia'),
    ],
  },
  cortina: {
    modes: ['bus', 'taxi', 'walk'],
    howTo: {
      ko: '기차역이 없습니다. 베네치아·칼랄초역에서 Cortina Express·Dolomiti Bus를 탑니다. 트레킹 출발점도 버스로 갑니다.',
      en: 'No railway—take Cortina Express or Dolomiti Bus from Venice or Calalzo; trailheads by bus.',
    },
    apps: [
    ],
  },
  portofino: {
    modes: ['train', 'ferry', 'bus', 'walk'],
    howTo: {
      ko: '산타 마르게리타 리구레역에서 버스 또는 페리. 마을 안 차량 진입은 제한됩니다.',
      en: 'Train to Santa Margherita Ligure, then bus or ferry; cars are restricted in the village.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  'cinque-terre': {
    modes: ['train', 'ferry', 'walk'],
    howTo: {
      ko: '라 스페치아에서 Cinque Terre Express 기차로 다섯 마을을 잇습니다. 친퀘테레 카드가 편리합니다. 계절에 따라 페리도 다닙니다.',
      en: 'The Cinque Terre Express train links La Spezia and all five villages—get the Cinque Terre Card; seasonal ferries too.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  modena: {
    modes: ['train', 'bus', 'walk', 'bike'],
    howTo: {
      ko: '볼로냐에서 기차로 약 20분. 구시가는 도보, 페라리 박물관은 셔틀버스를 탑니다.',
      en: '~20 min by train from Bologna; walk the center, shuttle bus to the Ferrari museums.',
    },
    apps: [
      ta('seta', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('roger', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trenitalia'),
    ],
  },
  parma: {
    modes: ['train', 'bus', 'walk', 'bike'],
    howTo: {
      ko: '볼로냐·밀라노에서 기차로 1시간 안팎. 구시가는 걸어서 둘러봅니다.',
      en: 'About an hour by train from Bologna or Milan; the center is walkable.',
    },
    apps: [
      ta('roger', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trenitalia'),
    ],
  },
  ravenna: {
    modes: ['train', 'bus', 'walk', 'bike'],
    howTo: {
      ko: '볼로냐에서 기차로 약 1시간 10분. 모자이크 명소는 도보, 클라세는 버스·기차로 갑니다.',
      en: '~70 min by train from Bologna; walk to mosaics, bus or train out to Classe.',
    },
    apps: [
      ta('roger', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trenitalia'),
    ],
  },
  lucca: {
    modes: ['train', 'bus', 'walk', 'bike'],
    howTo: {
      ko: '피렌체·피사에서 기차로 연결. 성벽 위는 자전거 대여가 인기입니다.',
      en: 'Trains from Florence and Pisa; rent a bike to ride the walls.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  montepulciano: {
    modes: ['bus', 'taxi', 'walk'],
    howTo: {
      ko: '키우시·시에나에서 버스를 탑니다. 발도르차 마을은 렌터카가 가장 편합니다.',
      en: 'Buses from Chiusi or Siena; a rental car is easiest for the Val d\'Orcia.',
    },
    apps: [
    ],
  },
  assisi: {
    modes: ['train', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '페루자·로마·피렌체에서 기차. 역에서 언덕 위 구시가까지 버스로 오릅니다.',
      en: 'Trains from Perugia, Rome or Florence; bus from the station up to the old town.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  perugia: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '기차역에서 무인 경전철 미니메트로로 구시가까지 갑니다. 로카 파올리나에는 에스컬레이터가 있습니다.',
      en: 'Minimetrò people-mover from the station to the center; escalators through Rocca Paolina.',
    },
    apps: [
      ta('salgo', { ko: '표 구매', en: 'Tickets' }),
      ta('trenitalia'),
    ],
  },
  orvieto: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '로마·피렌체에서 기차. 역 앞 푸니콜라레로 절벽 위 구시가에 오르는데, 2026년 6월부터 정비로 멈춰 있어 그동안은 대체 버스가 같은 간격으로 다닙니다.',
      en: 'Trains from Rome and Florence; the funicular from the station up to the old town has been shut for maintenance since June 2026, with a replacement bus at the same frequency.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  pompeii: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '나폴리에서 치르쿰베수비아나선 Pompei Scavi역 하차(약 35분). 유적은 도보로 둘러봅니다.',
      en: 'Circumvesuviana from Naples to Pompei Scavi (~35 min); explore the site on foot.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  sorrento: {
    modes: ['train', 'ferry', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '나폴리에서 치르쿰베수비아나(약 70분) 또는 페리. 아말피 해안은 SITA 버스, 카프리는 페리로 갑니다.',
      en: 'Circumvesuviana (~70 min) or ferry from Naples; SITA buses to the Amalfi Coast, ferries to Capri.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  capri: {
    modes: ['ferry', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '나폴리·소렌토에서 페리. 마리나 그란데에서 푸니콜라레로 카프리 마을까지, 섬 안은 미니버스로 다닙니다.',
      en: 'Ferry from Naples or Sorrento; funicular from Marina Grande to Capri town, minibuses around the island.',
    },
    apps: [
    ],
  },
  matera: {
    modes: ['train', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '바리에서 FAL 사철로 약 1시간 30분. 사시 지구는 걸어서 둘러봅니다.',
      en: 'FAL regional train from Bari (~1.5 hrs); explore the Sassi on foot.',
    },
    apps: [
      ta('my-bus-matera', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('trenitalia'),
    ],
  },
  bari: {
    modes: ['train', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '공항에서 기차로 약 20분. 바리 베키아는 도보로 다닙니다. 풀리아 소도시는 기차로 이어집니다.',
      en: '~20 min train from the airport; Bari Vecchia on foot; trains out to Puglia towns.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  alberobello: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '바리에서 FSE 기차로 약 1시간 30분. 트룰리 지구는 도보로 둘러봅니다.',
      en: 'FSE train from Bari (~1.5 hrs); trulli districts on foot.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  'polignano-a-mare': {
    modes: ['train', 'walk'],
    howTo: {
      ko: '바리에서 기차로 약 30분. 역에서 구시가까지 걸어서 10분입니다.',
      en: '~30 min by train from Bari; the old town is a 10-min walk from the station.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  lecce: {
    modes: ['train', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '바리에서 기차로 약 1시간 30분. 구시가는 도보, 살렌토 해안은 버스·렌터카로 갑니다.',
      en: '~1.5 hrs by train from Bari; walk the center, bus or car for the Salento coast.',
    },
    apps: [
      ta('sgm-lecce', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trenitalia'),
    ],
  },
  tropea: {
    modes: ['train', 'taxi', 'walk'],
    howTo: {
      ko: '라메치아 테르메역에서 지역 기차로 약 1시간. 구시가와 해변은 계단으로 이어집니다.',
      en: 'Regional train from Lamezia Terme (~1 hr); steps link the old town and the beach.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  taormina: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: '카타니아 공항·시내에서 버스로 약 1시간 30분. 해변은 케이블카로 내려갑니다.',
      en: '~1.5 hrs by bus from Catania; cable car down to the beaches.',
    },
    apps: [
      ta('etnatrasporti', { ko: '표 구매', en: 'Tickets' }),
      ta('trenitalia'),
    ],
  },
  catania: {
    modes: ['metro', 'bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: '공항에서 알리버스(Alibus)로 시내까지. 에트나 투어는 AST 버스나 투어를 이용합니다.',
      en: 'Alibus from the airport to the center; AST bus or tours for Etna.',
    },
    apps: [
      ta('ct-mover', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('trenitalia'),
    ],
  },
  siracusa: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '카타니아에서 기차·버스로 약 1시간 30분. 오르티자는 도보로 다닙니다.',
      en: '~1.5 hrs by train or bus from Catania; Ortigia on foot.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  agrigento: {
    modes: ['train', 'bus', 'taxi'],
    howTo: {
      ko: '팔레르모에서 기차로 약 2시간. 신전의 계곡은 시내에서 버스로 갑니다.',
      en: '~2 hrs by train from Palermo; city buses to the Valley of the Temples.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  cefalu: {
    modes: ['train', 'walk'],
    howTo: {
      ko: '팔레르모에서 기차로 약 1시간. 역에서 구시가까지 걸어서 갑니다.',
      en: '~1 hr by train from Palermo; walk from the station to the old town.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  cagliari: {
    modes: ['train', 'bus', 'tram', 'taxi', 'walk'],
    howTo: {
      ko: '공항에서 기차로 약 10분. 포에토 해변은 시내버스로, 카스텔로 지구는 엘리베이터를 이용하면 편합니다.',
      en: '~10 min train from the airport; city bus to Poetto, public lifts up to Castello.',
    },
    apps: [
      ta('trenitalia'),
    ],
  },
  alghero: {
    modes: ['bus', 'taxi', 'walk'],
    howTo: {
      ko: '공항에서 버스로 약 20분. 넵튠 동굴은 버스나 항구 보트로 갑니다.',
      en: '~20 min by bus from the airport; bus or harbor boat to Neptune\'s Grotto.',
    },
    apps: [
    ],
  },
  mantua: {
    modes: ['train', 'bus', 'walk', 'bike'],
    howTo: {
      ko: '베로나에서 기차로 약 45분. 구시가는 도보·자전거로 충분합니다.',
      en: '~45 min by train from Verona; walk or bike the compact center.',
    },
    apps: [
      ta('apam-mobile', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('trenitalia'),
    ],
  },
  vicenza: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '베네치아·베로나에서 기차로 약 45분. 빌라 라 로톤다는 버스나 도보로 갑니다.',
      en: '~45 min by train from Venice or Verona; bus or walk out to Villa La Rotonda.',
    },
    apps: [
      ta('svt-vicenza', { ko: '표 구매', en: 'Tickets' }),
      ta('trenitalia'),
    ],
  },
  ferrara: {
    modes: ['train', 'bus', 'walk', 'bike'],
    howTo: {
      ko: '볼로냐에서 기차로 약 30분. 자전거의 도시라 대여 자전거가 편합니다.',
      en: '~30 min by train from Bologna; rent a bike—it\'s Italy\'s cycling city.',
    },
    apps: [
      ta('roger', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trenitalia'),
    ],
  },
  urbino: {
    modes: ['bus', 'taxi', 'walk'],
    howTo: {
      ko: '기차역이 없습니다. 페사로역에서 버스로 약 1시간. 구시가는 언덕길 도보입니다.',
      en: 'No railway—bus from Pesaro station (~1 hr); the old town is hilly and walkable.',
    },
    apps: [
    ],
  },
  positano: {
    modes: ['bus', 'ferry', 'taxi', 'walk'],
    howTo: {
      ko: '기차역이 없습니다. 소렌토·아말피에서 SITA 버스를 타거나, 여름에는 아말피·살레르노·카프리에서 페리로 옵니다. 마을 안은 계단길 도보입니다.',
      en: 'No railway—take the SITA bus from Sorrento or Amalfi, or summer ferries from Amalfi, Salerno and Capri. Getting around town means steps on foot.',
    },
    apps: [
    ],
  },
  canterbury: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '런던 세인트판크라스에서 고속열차로 약 1시간. 구시가는 도보로 충분합니다.',
      en: '~1 hr by high-speed train from London St Pancras; the old town is walkable.',
    },
    apps: [
      ta('stagecoach-bus', { ko: '표 구매', en: 'Tickets' }),
      ta('trainline'),
    ],
  },
  windsor: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '런던 워털루 또는 패딩턴(슬라우 환승)에서 기차로 약 1시간. 역에서 성까지 걸어갑니다.',
      en: '~1 hr by train from London Waterloo or Paddington (change at Slough); walk from the station to the castle.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  salisbury: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '런던 워털루에서 기차로 약 1시간 30분. 스톤헨지는 역 앞 투어버스로 갑니다.',
      en: '~1.5 hrs by train from London Waterloo; Stonehenge tour bus from the station.',
    },
    apps: [
      ta('salisbury-reds', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trainline'),
    ],
  },
  cotswolds: {
    modes: ['train', 'bus', 'taxi'],
    howTo: {
      ko: '모턴인마시·킹엄역까지 기차, 마을 사이는 버스가 드물어 렌터카나 투어가 편합니다.',
      en: 'Train to Moreton-in-Marsh or Kingham; buses between villages are sparse—car or tour is easiest.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  'stratford-upon-avon': {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '버밍엄·런던 메릴본에서 기차로 연결. 시내는 걸어서 둘러봅니다.',
      en: 'Trains from Birmingham and London Marylebone; the town is walkable.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  'lake-district': {
    modes: ['train', 'bus', 'ferry', 'walk'],
    howTo: {
      ko: '옥슨홀름에서 윈더미어역까지 기차, 이후 555번 버스와 호수 유람선으로 다닙니다.',
      en: 'Train via Oxenholme to Windermere, then the 555 bus and lake cruises.',
    },
    apps: [
      ta('stagecoach-bus', { ko: '표 구매', en: 'Tickets' }),
      ta('trainline'),
    ],
  },
  'st-ives': {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '세인트어스에서 해안선 지선 기차로 약 15분(경치 좋은 노선). 구시가는 도보입니다.',
      en: 'Scenic 15-min branch train from St Erth; the town is on foot.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  glasgow: {
    modes: ['metro', 'train', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '공항버스(500번)로 시내까지. 순환 지하철 \'서브웨이\'와 도보가 편합니다.',
      en: 'Airport Express 500 bus to the center; the circular Subway and walking cover most sights.',
    },
    apps: [
      ta('first-bus', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trainline'),
    ],
  },
  stirling: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '에든버러·글래스고에서 기차로 약 45분. 역에서 성까지 오르막 도보.',
      en: '~45 min by train from Edinburgh or Glasgow; uphill walk to the castle.',
    },
    apps: [
      ta('first-bus', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trainline'),
    ],
  },
  'st-andrews': {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '에든버러에서 기차로 루카스역까지 간 뒤 버스로 약 10분.',
      en: 'Train from Edinburgh to Leuchars, then ~10 min by bus.',
    },
    apps: [
      ta('stagecoach-bus', { ko: '표 구매', en: 'Tickets' }),
      ta('trainline'),
    ],
  },
  inverness: {
    modes: ['train', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '에든버러·글래스고에서 기차로 약 3시간 30분. 네스호는 버스나 투어로 갑니다.',
      en: '~3.5 hrs by train from Edinburgh or Glasgow; bus or tour to Loch Ness.',
    },
    apps: [
      ta('stagecoach-bus', { ko: '표 구매', en: 'Tickets' }),
      ta('trainline'),
    ],
  },
  'isle-of-skye': {
    modes: ['bus', 'ferry', 'taxi'],
    howTo: {
      ko: '인버네스·포트윌리엄에서 시티링크 버스, 또는 말레이그에서 페리. 섬 안은 렌터카가 가장 편합니다.',
      en: 'Citylink bus from Inverness or Fort William, or ferry from Mallaig; a car is best on the island.',
    },
    apps: [
      ta('stagecoach-bus', { ko: '표 구매', en: 'Tickets' }),
    ],
  },
  cardiff: {
    modes: ['train', 'bus', 'walk', 'bike'],
    howTo: {
      ko: '런던 패딩턴에서 기차로 약 2시간. 카디프 베이는 버스나 기차로 갑니다.',
      en: '~2 hrs by train from London Paddington; bus or train to Cardiff Bay.',
    },
    apps: [
      ta('cardiff-bus', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('trainline'),
    ],
  },
  conwy: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '체스터·런던에서 북웨일스 해안선 기차로 연결. 마을은 성벽 안 도보입니다.',
      en: 'North Wales coast line trains from Chester and London; the walled town is on foot.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  snowdonia: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '베투시코이드는 콘위 밸리선 기차로, 란베리스는 뱅거에서 버스로 갑니다. 스노든 셰르파 버스가 등산로를 잇습니다.',
      en: 'Conwy Valley line to Betws-y-Coed; bus from Bangor to Llanberis; Snowdon Sherpa buses link trailheads.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  tenby: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '카디프·스완지에서 기차로 연결. 구시가와 해변은 도보로 다닙니다.',
      en: 'Trains from Cardiff and Swansea; the old town and beaches are walkable.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  belfast: {
    modes: ['bus', 'train', 'taxi', 'walk'],
    howTo: {
      ko: '공항에서 에어포트 익스프레스 버스로 시내까지. 시내는 글라이더 버스와 도보.',
      en: 'Airport Express bus into the center; Glider buses and walking in town.',
    },
    apps: [
      ta('translink', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trainline'),
    ],
  },
  'giants-causeway': {
    modes: ['bus', 'train', 'taxi'],
    howTo: {
      ko: '콜레인·포트러시까지 기차 후 402번 코즈웨이 해안 버스. 투어버스가 가장 편합니다.',
      en: 'Train to Coleraine or Portrush, then the 402 Causeway Rambler bus; tours are easiest.',
    },
    apps: [
      ta('translink', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trainline'),
    ],
  },
  derry: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '벨파스트에서 기차로 약 2시간(해안 절경 노선). 성벽 안은 도보입니다.',
      en: '~2 hrs by scenic train from Belfast; inside the walls on foot.',
    },
    apps: [
      ta('translink', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trainline'),
    ],
  },
  fussen: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '뮌헨에서 지역열차로 약 2시간(바이에른 티켓 사용 가능). 역 앞에서 73·78번 버스로 호엔슈방가우 매표소까지 갑니다.',
      en: 'Regional train from Munich (~2 hrs, Bayern-Ticket valid); buses 73/78 from the station to the Hohenschwangau ticket center.',
    },
    apps: [
      ta('trainline'),
    ],
    tip: {
      ko: '노이슈반슈타인 성 입장권은 시간 지정제라 미리 온라인 예약하세요.',
      en: 'Neuschwanstein tickets are timed—book online in advance.',
    },
  },
  meteora: {
    modes: ['train', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '아테네·테살로니키에서 기차로 칼람바카역까지. 수도원 사이는 버스·택시·투어나 도보 트레일로 다닙니다.',
      en: 'Train to Kalambaka from Athens or Thessaloniki; bus, taxi, tour or trails between monasteries.',
    },
    apps: [
    ],
  },
  delphi: {
    modes: ['bus', 'taxi', 'walk'],
    howTo: {
      ko: '아테네 리오시온 터미널에서 KTEL 버스로 약 2시간 30분. 유적은 마을에서 걸어갑니다.',
      en: 'KTEL bus from Athens Liosion terminal (~2.5 hrs); walk from the village to the site.',
    },
    apps: [
    ],
  },
  sounion: {
    modes: ['bus', 'taxi'],
    howTo: {
      ko: '아테네 페디온 아레오스에서 KTEL 해안 버스로 약 1시간 30분. 일몰 투어도 많습니다.',
      en: 'KTEL coastal bus from Pedion Areos in Athens (~1.5 hrs); many sunset tours.',
    },
    apps: [
    ],
  },
  olympia: {
    modes: ['train', 'bus', 'taxi', 'walk'],
    howTo: {
      ko: '피르고스까지 버스 후 올림피아 지선 열차·버스로 갑니다. 유적은 마을에서 도보.',
      en: 'Bus to Pyrgos, then the local train or bus to Olympia; the site is walkable from town.',
    },
    apps: [
    ],
  },
  chania: {
    modes: ['bus', 'taxi', 'walk'],
    howTo: {
      ko: '하니아 공항·이라클리온에서 KTEL 버스. 발로스·엘라포니시는 버스·투어·렌터카로 갑니다.',
      en: 'KTEL buses from Chania airport and Heraklion; bus, tour or car to Balos and Elafonissi.',
    },
    apps: [
    ],
  },
  naxos: {
    modes: ['ferry', 'bus', 'walk'],
    howTo: {
      ko: '아테네 피레우스·산토리니·미코노스에서 페리. 섬 안은 KTEL 버스나 렌터카.',
      en: 'Ferries from Piraeus, Santorini and Mykonos; KTEL buses or a rental car on the island.',
    },
    apps: [
    ],
  },
  zakynthos: {
    modes: ['ferry', 'bus', 'taxi'],
    howTo: {
      ko: '킬리니항에서 페리 약 1시간, 또는 비행기. 나바요 해변은 보트 투어로 갑니다.',
      en: '~1 hr ferry from Kyllini or fly in; boat tours to Navagio Beach.',
    },
    apps: [
    ],
  },
  giverny: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '파리 생라자르역에서 베르농행 기차(약 50분) 후 셔틀버스로 약 15분.',
      en: 'Train from Paris Saint-Lazare to Vernon (~50 min), then a ~15 min shuttle bus.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  fontainebleau: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '파리 리옹역에서 기차로 약 40분, 역에서 궁전까지 1번 버스.',
      en: '~40 min train from Paris Gare de Lyon; bus 1 from the station to the palace.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  chartres: {
    modes: ['train', 'walk'],
    howTo: {
      ko: '파리 몽파르나스역에서 기차로 약 1시간. 역에서 대성당까지 걸어갑니다.',
      en: '~1 hr train from Paris Montparnasse; walk to the cathedral.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  reims: {
    modes: ['train', 'tram', 'walk'],
    howTo: {
      ko: '파리 동역에서 TGV로 약 45분. 시내는 트램과 도보.',
      en: '~45 min TGV from Paris Gare de l\'Est; tram and walking in town.',
    },
    apps: [
      ta('grand-reims-mobilites', { ko: '표 구매', en: 'Tickets' }),
      ta('trainline'),
    ],
  },
  amboise: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '투르에서 기차로 약 20분. 고성들은 투어버스나 렌터카·자전거로 다닙니다.',
      en: '~20 min train from Tours; tour buses, cars or bikes for the châteaux.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  rouen: {
    modes: ['train', 'metro', 'bus', 'walk'],
    howTo: {
      ko: '파리 생라자르역에서 기차로 약 1시간 10분. 구시가는 도보.',
      en: '~70 min train from Paris Saint-Lazare; the old town is walkable.',
    },
    apps: [
      ta('my-astuce', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trainline'),
    ],
  },
  honfleur: {
    modes: ['bus', 'walk'],
    howTo: {
      ko: '기차역이 없습니다. 르아브르·캉·도빌에서 버스로 갑니다.',
      en: 'No railway—buses from Le Havre, Caen or Deauville.',
    },
    apps: [
    ],
  },
  etretat: {
    modes: ['bus', 'walk'],
    howTo: {
      ko: '기차역이 없습니다. 르아브르에서 버스로 약 1시간.',
      en: 'No railway—~1 hr bus from Le Havre.',
    },
    apps: [
    ],
  },
  bayeux: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '파리 생라자르역에서 캉 경유 기차. 상륙 해변은 투어나 렌터카로 갑니다.',
      en: 'Train from Paris Saint-Lazare via Caen; tours or a car for the D-Day beaches.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  'saint-malo': {
    modes: ['train', 'bus', 'ferry', 'walk'],
    howTo: {
      ko: '파리 몽파르나스역에서 TGV로 약 2시간 30분. 디나르는 페리로 건넙니다.',
      en: '~2.5 hr TGV from Paris Montparnasse; ferry across to Dinard.',
    },
    apps: [
      ta('reseau-mat', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('trainline'),
    ],
  },
  'la-rochelle': {
    modes: ['train', 'bus', 'ferry', 'bike', 'walk'],
    howTo: {
      ko: '파리에서 TGV로 약 3시간. 구항구는 도보, 레 섬은 버스·자전거로 갑니다.',
      en: '~3 hr TGV from Paris; walk the old port, bus or bike to Île de Ré.',
    },
    apps: [
      ta('yelo', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trainline'),
    ],
  },
  arcachon: {
    modes: ['train', 'bus', 'ferry', 'walk'],
    howTo: {
      ko: '보르도에서 기차로 약 50분. 필라 사구는 버스, 캅 페레는 페리로 갑니다.',
      en: '~50 min train from Bordeaux; bus to the Dune du Pilat, ferry to Cap Ferret.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  biarritz: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '보르도에서 기차로 약 2시간, 비아리츠역에서 버스로 시내. 생장드뤼즈까지 기차 10분.',
      en: '~2 hr train from Bordeaux, bus from Biarritz station; 10 min train to Saint-Jean-de-Luz.',
    },
    apps: [
      ta('txik-txak', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('trainline'),
    ],
  },
  olbia: {
    modes: ['bus', 'ferry', 'taxi'],
    howTo: {
      ko: '올비아 공항·항구에서 버스·렌터카로 코스타 스메랄다까지 약 30분. 라 마달레나는 팔라우항에서 페리.',
      en: 'From Olbia airport/port, ~30 min by bus or car to the Costa Smeralda; ferry from Palau to La Maddalena.',
    },
    apps: [
    ],
  },
  'cala-gonone': {
    modes: ['bus', 'ferry', 'walk'],
    howTo: {
      ko: '올비아·누오로에서 버스로 도르갈리 경유. 해변들은 항구에서 보트로 갑니다.',
      en: 'Bus via Dorgali from Olbia or Nuoro; boats from the harbour to the coves.',
    },
    apps: [
    ],
  },
  ajaccio: {
    modes: ['bus', 'train', 'ferry', 'walk'],
    howTo: {
      ko: '공항에서 버스로 약 20분. 코르시카 협궤 열차로 바스티아·코르테와 연결됩니다.',
      en: '~20 min bus from the airport; narrow-gauge train to Corte and Bastia.',
    },
    apps: [
    ],
  },
  bonifacio: {
    modes: ['bus', 'ferry', 'walk'],
    howTo: {
      ko: '피가리 공항에서 버스·택시. 사르데냐 산타 테레사행 페리가 다닙니다.',
      en: 'Bus or taxi from Figari airport; ferries to Santa Teresa in Sardinia.',
    },
    apps: [
    ],
  },
  calvi: {
    modes: ['train', 'bus', 'walk'],
    howTo: {
      ko: '칼비 공항에서 차로 약 10분. 해안 열차 \'트라미네\'가 일 루스까지 이어집니다.',
      en: '~10 min from Calvi airport; the coastal \'Tramway de Balagne\' runs to L\'Île-Rousse.',
    },
    apps: [
    ],
  },
  // —— va ——
  'vatican-city': {
    modes: ['metro', 'bus', 'walk', 'taxi'],
    howTo: {
      ko: '로마 메트로 A Ottaviano/Cipro에서 도보. 바티칸 내부는 보안 검색 후 도보만 가능.',
      en: 'Walk from Rome metro A Ottaviano/Cipro. Inside the Vatican, walking only after security.',
    },
    apps: [
      ta('trenitalia'),
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
      ta('uber', { ko: '로마에서 호출', en: 'Hail from Rome' }),
    ],
    tip: {
      ko: '성 베드로 광장 줄이 깁니다. 일찍 또는 예약 투어를 이용하세요.',
      en: 'St Peter’s queues are long—go early or book a timed entry.',
    },
  },
  // —— mt ——
  valletta: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Valletta에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Valletta from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Valletta: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Valletta. Check boat timetables first.',
    },
    apps: [
      ta('tallinja', { ko: '버스 노선·실시간·교통카드', en: 'Bus routes, live times, Tallinja card' }),
      ta('bolt'),
      ta('uber'),
    ],
  },
  mdina: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Mdina에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Mdina from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Mdina: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Mdina is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('tallinja', { ko: '버스 노선·실시간·교통카드', en: 'Bus routes, live times, Tallinja card' }),
      ta('bolt'),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  gozo: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Gozo에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Gozo from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Gozo: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Gozo. Check boat timetables first.',
    },
    apps: [
      ta('tallinja', { ko: '버스 노선·실시간·교통카드', en: 'Bus routes, live times, Tallinja card' }),
      ta('bolt'),
    ],
  },
  // —— gr ——
  hydra: {
    modes: ['walk', 'ferry'],
    howTo: {
      ko: '섬에는 자동차가 없어 걸어 다니고, 짐은 당나귀가 나르며, 다른 해변까지는 물 택시를 탑니다.',
      en: 'There are no cars: walk, let donkeys carry the bags and take water taxis to other beaches.',
    },
    apps: [
    ],
  },
  athens: {
    modes: ['metro', 'tram', 'bus', 'train', 'ferry', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '메트로 3호선 또는 X95 버스. 택시는 미터요금.',
      en: 'Metro line 3 or bus X95; metered taxis.',
    },
    howTo: {
      ko: 'Ath.ena 티켓. 메트로로 명소 이동. 페리 터미널(피레우스)은 메트로 연결.',
      en: 'Ath.ena tickets. Metro to sights; Piraeus ferries link by metro.',
    },
    apps: [
      ta('oasa', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('citymapper'),
      ta('bolt'),
      ta('uber'),
    ],
    tip: {
      ko: '섬 일정은 Blue Star 등 페리 예약을 먼저 하세요.',
      en: 'For islands, book ferries (e.g. Blue Star) first.',
    },
  },
  santorini: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Santorini: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Santorini. Check boat timetables first.',
    },
    apps: [
      ta('uber'),
    ],
  },
  heraklion: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Heraklion: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Heraklion. Check boat timetables first.',
    },
    apps: [
      ta('free-now', { ko: '면허 택시', en: 'Licensed taxis' }),
    ],
  },
  mykonos: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Mykonos: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Mykonos. Check boat timetables first.',
    },
    apps: [
      ta('uber'),
    ],
  },
  rhodes: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Rhodes: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Rhodes. Check boat timetables first.',
    },
    apps: [
    ],
  },
  thessaloniki: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Thessaloniki: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Thessaloniki, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('oasth', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('uber'),
    ],
  },
  corfu: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Corfu: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Corfu. Check boat timetables first.',
    },
    apps: [
      ta('uber'),
    ],
  },
  nafplio: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Nafplio: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Nafplio is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('uber'),
    ],
  },
  // —— cy ——
  nicosia: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Nicosia에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Nicosia from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Nicosia: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Nicosia is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('cyprus-bus', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  limassol: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Limassol에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Limassol from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Limassol: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Limassol is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('cyprus-bus', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  paphos: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Paphos에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Paphos from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Paphos: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Paphos is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('cyprus-bus', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  'ayia-napa': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Ayia Napa에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Ayia Napa from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Ayia Napa: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Ayia Napa is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('cyprus-bus', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  // —— dk ——
  copenhagen: {
    modes: ['metro', 'bus', 'train', 'bike', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '메트로 M2로 시내 약 15분.',
      en: 'Metro M2 to the city ~15 min.',
    },
    howTo: {
      ko: 'Rejsekort·city pass. 메트로·S-tog·버스. 자전거 인프라가 매우 좋습니다.',
      en: 'Rejsekort/city pass. Metro, S-tog, buses; outstanding bike infrastructure.',
    },
    apps: [
      ta('rejsebillet', { ko: '전국 버스·기차·메트로 표', en: 'Bus, train and metro tickets nationwide' }),
      ta('dsb'),
      ta('citymapper'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  aarhus: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Aarhus: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Aarhus by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('midttrafik-live', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('rejsebillet', { ko: '전국 버스·기차·메트로 표', en: 'Bus, train and metro tickets nationwide' }),
      ta('dsb'),
      ta('bolt'),
    ],
  },
  odense: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Odense: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Odense by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('rejsebillet', { ko: '전국 버스·기차·메트로 표', en: 'Bus, train and metro tickets nationwide' }),
      ta('dsb'),
    ],
  },
  aalborg: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Aalborg: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Aalborg by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('rejsebillet', { ko: '전국 버스·기차·메트로 표', en: 'Bus, train and metro tickets nationwide' }),
      ta('dsb'),
    ],
  },
  roskilde: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Roskilde: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Roskilde by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('rejsebillet', { ko: '전국 버스·기차·메트로 표', en: 'Bus, train and metro tickets nationwide' }),
      ta('dsb'),
    ],
  },
  // —— se ——
  stockholm: {
    modes: ['metro', 'tram', 'bus', 'train', 'ferry', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'Arlanda Express·공항버스·pendeltåg. Bromma는 버스·택시.',
      en: 'Arlanda Express, airport bus, or pendeltåg; Bromma by bus/taxi.',
    },
    howTo: {
      ko: 'SL 앱·카드. Tunnelbana·버스·페리. 아르키펠라고 보트도 SL 구간이 있습니다.',
      en: 'SL app/card. Tunnelbana, buses, ferries; some archipelago boats are in SL.',
    },
    apps: [
      ta('sl', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('sj'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  gothenburg: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Gothenburg: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Gothenburg centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('vasttrafik', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('sj'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  malmo: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk', 'bike'],
    howTo: {
      ko: 'Malmo: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Malmo centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('skanetrafiken', { ko: '표 구매', en: 'Tickets' }),
      ta('sj'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  uppsala: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Uppsala: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Uppsala by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('ul', { ko: '표 구매', en: 'Tickets' }),
      ta('sj'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  kiruna: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Kiruna: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Kiruna by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('sj'),
    ],
  },
  // —— no ——
  oslo: {
    modes: ['metro', 'tram', 'bus', 'train', 'ferry', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'Flytoget·공항버스·지역열차로 시내 약 20–40분.',
      en: 'Flytoget, airport bus, or local trains ~20–40 min.',
    },
    howTo: {
      ko: 'Ruter 티켓. T-bane·트램·버스·페리. Entur로 장거리 연계.',
      en: 'Ruter tickets. T-bane, tram, bus, ferry; Entur for longer trips.',
    },
    apps: [
      ta('ruter', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('vy'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  bergen: {
    modes: ['ferry', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Bergen: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Bergen centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('skyss', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('vy'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  tromso: {
    modes: ['ferry', 'bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Tromso: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Tromso. Check boat timetables first.',
    },
    apps: [
      ta('svipper', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('vy'),
      ta('uber'),
    ],
  },
  stavanger: {
    modes: ['ferry', 'bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Stavanger: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Stavanger. Check boat timetables first.',
    },
    apps: [
      ta('kolumbus', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('vy'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  trondheim: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Trondheim: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Trondheim by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('atb', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('vy'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  alesund: {
    modes: ['ferry', 'bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Alesund: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Alesund. Check boat timetables first.',
    },
    apps: [
      ta('vy'),
      ta('bolt'),
    ],
  },
  flam: {
    modes: ['ferry', 'bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Flam: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Flam usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('vy'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  // —— fi ——
  helsinki: {
    modes: ['metro', 'tram', 'bus', 'train', 'ferry', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'I 기차 또는 공항버스(615 등)로 시내 약 30–40분.',
      en: 'I train or airport buses (e.g. 615) ~30–40 min.',
    },
    howTo: {
      ko: 'HSL 티켓·앱. 트램·메트로·수완린나 페리어(수오멘린나) 연결.',
      en: 'HSL tickets/app. Trams, metro, and ferry to Suomenlinna.',
    },
    apps: [
      ta('hsl', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('vr'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  turku: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Turku: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Turku centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('foli', { ko: '표 구매', en: 'Tickets' }),
      ta('vr'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  tampere: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Tampere: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Tampere centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('vr'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  rovaniemi: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Rovaniemi: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Rovaniemi by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('vr'),
      ta('uber'),
    ],
  },
  porvoo: {
    modes: ['bus', 'train', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Porvoo: 기차역·시내버스로 접근합니다. 구시가·명소는 도보·짧은 택시.',
      en: 'Reach Porvoo by rail and local buses; walk or take short taxis for sights.',
    },
    apps: [
      ta('vr'),
      ta('uber'),
    ],
  },
  // —— is ——
  reykjavik: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: 'Flybus·Airport Direct로 시내 약 45분. 택시비는 높은 편.',
      en: 'Flybus/Airport Direct ~45 min; taxis are expensive.',
    },
    howTo: {
      ko: 'Strætó 버스·Klapp 앱. 시내 중심은 도보. 골든서클은 투어·렌터.',
      en: 'Strætó buses/Klapp app. Walk downtown; Golden Circle needs tour or rental.',
    },
    apps: [
      ta('klappid', { ko: '버스 표', en: 'Bus tickets' }),
    ],
  },
  akureyri: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Akureyri에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Akureyri from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Akureyri: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Akureyri is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  vik: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Vik에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Vik from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Vik: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Vik is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  husavik: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Husavik에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Husavik from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Husavik: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Husavik is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  selfoss: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Selfoss에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Selfoss from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Selfoss: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Selfoss is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  // —— ee ——
  tallinn: {
    modes: ['ferry', 'tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Tallinn 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Tallinn—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Tallinn: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Tallinn centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('bolt', { ko: '탈린 기본 앱', en: 'Default in Tallinn' }),
      ta('uber'),
    ],
  },
  tartu: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Tartu: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Tartu is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '탈린 기본 앱', en: 'Default in Tallinn' }),
    ],
  },
  parnu: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Parnu: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Parnu is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '탈린 기본 앱', en: 'Default in Tallinn' }),
    ],
  },
  // —— lv ——
  riga: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Riga 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Riga—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Riga: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Riga centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('rigas-satiksme', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  jurmala: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Jurmala: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Jurmala is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음', en: 'No Uber' }),
    ],
  },
  sigulda: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Sigulda: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Sigulda is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  // —— lt ——
  vilnius: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Vilnius 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Vilnius—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Vilnius: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Vilnius is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trafi', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('bolt', { ko: '우버보다 잘 잡힘', en: 'Usually more cars than Uber' }),
      ta('uber'),
    ],
  },
  kaunas: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Kaunas: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Kaunas centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('ziogas', { ko: '표 구매', en: 'Tickets' }),
      ta('bolt', { ko: '우버보다 잘 잡힘', en: 'Usually more cars than Uber' }),
    ],
  },
  klaipeda: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Klaipeda: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Klaipeda is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('e-ticket-klaipeda', { ko: '표 구매', en: 'Tickets' }),
      ta('bolt', { ko: '우버보다 잘 잡힘', en: 'Usually more cars than Uber' }),
    ],
  },
  // —— hr ——
  zagreb: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Zagreb 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Zagreb—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Zagreb: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Zagreb centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  dubrovnik: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Dubrovnik 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Dubrovnik—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Dubrovnik: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Dubrovnik. Check boat timetables first.',
    },
    apps: [
      ta('libertas-app', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('flixbus'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  split: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Split 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Split—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Split: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Split. Check boat timetables first.',
    },
    apps: [
      ta('promet-split', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('flixbus'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  zadar: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Zadar: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Zadar. Check boat timetables first.',
    },
    apps: [
      ta('flixbus'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  rovinj: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Rovinj: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Rovinj. Check boat timetables first.',
    },
    apps: [
      ta('flixbus'),
      ta('uber'),
    ],
  },
  hvar: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Hvar: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Hvar. Check boat timetables first.',
    },
    apps: [
      ta('flixbus'),
      ta('uber'),
    ],
  },
  // —— si ——
  ljubljana: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Ljubljana: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Ljubljana is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('urbana', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('trainline'),
    ],
  },
  bled: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Bled: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Bled is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  piran: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Piran: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Piran. Check boat timetables first.',
    },
    apps: [
      ta('trainline'),
    ],
    tip: {
      ko: '구시가는 차가 제한되는 구간이 많습니다. 외곽 주차장·셔틀을 이용하세요.',
      en: 'Historic cores often restrict cars—use outer parking and shuttles.',
    },
  },
  maribor: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Maribor: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Maribor is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  postojna: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Postojna: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Postojna is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
    ],
  },
  // —— ba ——
  sarajevo: {
    modes: ['tram', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Sarajevo: 트램·버스가 중심입니다. 구시가는 도보가 편할 때가 많습니다.',
      en: 'Sarajevo centres on trams and buses; the old town is often best on foot.',
    },
    apps: [
      ta('flixbus'),
    ],
  },
  mostar: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Mostar: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Mostar is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
    ],
  },
  'banja-luka': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Banja Luka: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Banja Luka is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
    ],
  },
  travnik: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Travnik: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Travnik is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
    ],
  },
  // —— me ——
  kotor: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Kotor에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Kotor from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Kotor: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Kotor is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  budva: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Budva에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Budva from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Budva: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Budva is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  podgorica: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Podgorica에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Podgorica from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Podgorica: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Podgorica is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  'herceg-novi': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Herceg Novi에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Herceg Novi from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Herceg Novi: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Herceg Novi is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  // —— rs ——
  belgrade: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Belgrade 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Belgrade—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Belgrade: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Belgrade, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('beograd-plus', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('flixbus'),
    ],
  },
  'novi-sad': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Novi Sad: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Novi Sad is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('nsmart', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('flixbus'),
    ],
  },
  nis: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Nis: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Nis is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('nicard', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('flixbus'),
    ],
  },
  subotica: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Subotica: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Subotica is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
    ],
  },
  // —— mk ——
  skopje: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Skopje에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Skopje from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Skopje: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Skopje is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  ohrid: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Ohrid에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Ohrid from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Ohrid: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Ohrid is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  bitola: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Bitola에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Bitola from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Bitola: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Bitola is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  tetovo: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Tetovo에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Tetovo from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Tetovo: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Tetovo is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  // —— al ——
  tirana: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Tirana에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Tirana from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Tirana: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Tirana is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  berat: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Berat에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Berat from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Berat: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Berat is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  gjirokaster: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Gjirokaster에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Gjirokaster from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Gjirokaster: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Gjirokaster is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  sarande: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    airportToCity: {
      ko: '인근 공항에서 버스·택시·렌터로 Sarande에 들어옵니다. 배차가 많지 않을 수 있으니 시간을 확인하세요.',
      en: 'Reach Sarande from the nearest airport by bus, taxi, or rental—check sparse schedules.',
    },
    howTo: {
      ko: 'Sarande: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Sarande is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  // —— bg ——
  sofia: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Sofia 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Sofia—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Sofia: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Sofia, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('flixbus'),
    ],
  },
  plovdiv: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Plovdiv: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Plovdiv is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
    ],
  },
  varna: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Varna: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Varna is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('ticketvarna', { ko: '표 구매', en: 'Tickets' }),
      ta('flixbus'),
    ],
  },
  'veliko-tarnovo': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Veliko Tarnovo: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Veliko Tarnovo is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
    ],
  },
  nessebar: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Nessebar: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Nessebar is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('flixbus'),
    ],
  },
  // —— ro ——
  bucharest: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항에서 시내까지 공항버스·기차·택시(또는 라이드앱)를 이용하세요. Bucharest 도심까지 보통 20–60분입니다.',
      en: 'Airport bus, train, or taxi/ride-hail into Bucharest—usually 20–60 minutes to the centre.',
    },
    howTo: {
      ko: 'Bucharest: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Bucharest, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('info-transport-stb', { ko: '표·노선·실시간', en: 'Tickets, routes, live times' }),
      ta('trainline'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  brasov: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Brasov: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Brasov is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  sibiu: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Sibiu: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Sibiu is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('sibiubus', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('trainline'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  sighisoara: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Sighisoara: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Sighisoara is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
      ta('uber'),
    ],
  },
  'cluj-napoca': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Cluj Napoca: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Cluj Napoca is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('trainline'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  timisoara: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Timisoara: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Timisoara is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('infotrafic-tpt', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('trainline'),
      ta('bolt'),
      ta('uber'),
    ],
  },
  // —— tr ——
  istanbul: {
    modes: ['metro', 'tram', 'bus', 'ferry', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: 'IST: 메트로/하바버스. SAW: 버스·메트로 환승. 택시·Uber 가능.',
      en: 'IST: metro/Havaist. SAW: bus/metro links. Taxi/Uber available.',
    },
    howTo: {
      ko: 'Istanbulkart로 메트로·트램·버스·페리. 보스포러스 페리가 유용합니다.',
      en: 'Istanbulkart for metro, tram, bus, ferry. Bosphorus ferries are handy.',
    },
    apps: [
      ta('istanbulkart', { ko: '교통카드 충전·QR 탑승', en: 'Top up İstanbulkart, ride by QR' }),
      ta('citymapper'),
      ta('uber'),
    ],
    tip: {
      ko: '구시가(술탄아흐메트)는 트램+도보가 가장 편합니다.',
      en: 'Sultanahmet is easiest by tram + walking.',
    },
  },
  goreme: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Goreme: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Goreme usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('uber'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  ankara: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Ankara: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Ankara, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('ego-cepte', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('uber'),
    ],
  },
  izmir: {
    modes: ['metro', 'bus', 'tram', 'train', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: 'Izmir: 메트로·트램·버스로 주요 지역을 이동합니다. 교통권·앱 티켓을 쓰세요.',
      en: 'In Izmir, metro/tram/bus cover main areas—use a city pass or app tickets.',
    },
    apps: [
      ta('uber'),
    ],
  },
  antalya: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Antalya: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Antalya is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('antalyakart', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('uber'),
    ],
  },
  bursa: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Bursa: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Bursa is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bursakart', { ko: '노선·실시간', en: 'Routes, live times' }),
      ta('uber'),
    ],
  },
  trabzon: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Trabzon: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Trabzon is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('uber'),
    ],
  },
  pamukkale: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Pamukkale: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Pamukkale usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('uber'),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  // —— ge ——
  tbilisi: {
    modes: ['metro', 'bus', 'train', 'rideshare', 'taxi', 'walk'],
    airportToCity: {
      ko: '버스 337 또는 택시/Bolt 약 30–40분.',
      en: 'Bus 337 or taxi/Bolt ~30–40 min.',
    },
    howTo: {
      ko: 'MetroMoney 카드. 메트로 2개 노선 + 버스. 언덕은 케이블카·푸니쿨라.',
      en: 'MetroMoney card. Two metro lines + buses; cable car/funicular for hills.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음 · Yandex도 흔함', en: 'No Uber; Yandex Go also common' }),
    ],
  },
  batumi: {
    modes: ['ferry', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Batumi: 페리·버스·도보를 조합합니다. 배 시간표를 먼저 확인하세요.',
      en: 'Combine ferry, bus, and walking in Batumi. Check boat timetables first.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음 · Yandex도 흔함', en: 'No Uber; Yandex Go also common' }),
    ],
  },
  kutaisi: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Kutaisi: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Kutaisi is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음 · Yandex도 흔함', en: 'No Uber; Yandex Go also common' }),
    ],
  },
  stepantsminda: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Stepantsminda: 기차·산악열차·버스·케이블카 조합이 기본입니다. 자동차 규제를 확인하세요.',
      en: 'Stepantsminda usually needs train, mountain rail, bus, and cableways—check car restrictions.',
    },
    apps: [
      ta('bolt', { ko: '우버 없음 · Yandex도 흔함', en: 'No Uber; Yandex Go also common' }),
    ],
    tip: {
      ko: '산악·협곡 구간은 기상과 케이블카 운행을 미리 확인하세요.',
      en: 'In mountains/gorges, check weather and cableway status ahead.',
    },
  },
  sighnaghi: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: 'Sighnaghi: 시내버스·도보가 기본입니다. 인근 도시는 기차·장거리 버스를 이용하세요.',
      en: 'Sighnaghi is mainly local buses and walking. Use trains or coaches for nearby cities.',
    },
    apps: [
    ],
  },
  kyiv: {
    modes: ['metro', 'bus', 'tram', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: '메트로 3개 노선이 뼈대. 버스·트램을 함께 씁니다.',
      en: 'Three metro lines form the backbone; combine with buses and trams.',
    },
    apps: [ta('bolt')],
  },
  lviv: {
    modes: ['tram', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: '트램·버스망이 촘촘한 도보 친화 구시가입니다.',
      en: 'Dense tram/bus network; the old town itself is walkable.',
    },
    apps: [ta('bolt')],
  },
  odesa: {
    modes: ['tram', 'bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: '트램·버스가 기본. 해안 지구는 도보로 충분합니다.',
      en: 'Trams and buses are standard; the seafront district is walkable.',
    },
    apps: [ta('bolt')],
  },
  chisinau: {
    modes: ['bus', 'tram', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: '트롤리버스·버스망이 시내 전역을 덮습니다.',
      en: 'Trolleybus and bus network covers the whole city.',
    },
    apps: [ta('bolt')],
  },
  'orheiul-vechi': {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: '키시너우에서 투어나 렌터카로 당일치기하기 좋습니다.',
      en: 'Best as a day trip from Chișinău by tour or rental car.',
    },
    apps: [],
  },
  soroca: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: '키시너우에서 버스나 렌터카로 이동합니다.',
      en: 'Reach it from Chișinău by bus or rental car.',
    },
    apps: [],
  },
  yerevan: {
    modes: ['metro', 'bus', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: '단일 메트로 노선 + 버스망을 씁니다.',
      en: 'A single metro line plus a bus network.',
    },
    apps: [],
  },
  gyumri: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: '예레반에서 마슈루트카·기차로 이동합니다.',
      en: 'Reach it from Yerevan by marshrutka or train.',
    },
    apps: [],
  },
  dilijan: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: '예레반에서 마슈루트카로 약 2시간입니다.',
      en: 'About 2 hours from Yerevan by marshrutka.',
    },
    apps: [],
  },
  baku: {
    modes: ['metro', 'bus', 'rideshare', 'taxi', 'walk'],
    howTo: {
      ko: '메트로 3개 노선 + BakıKart 버스를 씁니다.',
      en: 'Three metro lines plus BakıKart buses.',
    },
    apps: [
      ta('baku-metropolitan', { ko: '시내 교통 공식 앱', en: 'Official transit app' }),
      ta('bolt'),
    ],
  },
  sheki: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: '바쿠에서 버스로 약 5~6시간입니다.',
      en: 'About 5–6 hours from Baku by bus.',
    },
    apps: [ta('bolt')],
  },
  gabala: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: '바쿠에서 버스나 렌터카로 이동합니다.',
      en: 'Reach it from Baku by bus or rental car.',
    },
    apps: [ta('bolt')],
  },
  'san-marino-city': {
    modes: ['walk', 'taxi', 'bus'],
    howTo: {
      ko: '구시가는 전부 도보권입니다. 케이블카로 보르고 마조레와 연결됩니다.',
      en: 'The old town is entirely walkable; a cable car links to Borgo Maggiore.',
    },
    apps: [],
  },
  'borgo-maggiore': {
    modes: ['walk', 'taxi', 'bus'],
    howTo: {
      ko: '케이블카로 산마리노 시와 몇 분 만에 연결됩니다.',
      en: 'A few minutes from the City of San Marino by cable car.',
    },
    apps: [],
  },
  pristina: {
    modes: ['bus', 'taxi', 'rideshare', 'walk'],
    howTo: {
      ko: '시내버스망과 도보로 대부분 이동 가능합니다.',
      en: 'Most of the city is reachable by local bus or on foot.',
    },
    apps: [],
  },
  prizren: {
    modes: ['bus', 'taxi', 'walk'],
    howTo: {
      ko: '프리슈티나에서 버스로 약 1시간입니다.',
      en: 'About 1 hour from Pristina by bus.',
    },
    apps: [],
  },
  peja: {
    modes: ['bus', 'taxi', 'walk'],
    howTo: {
      ko: '프리슈티나에서 버스로 약 1시간입니다.',
      en: 'About 1 hour from Pristina by bus.',
    },
    apps: [],
  },
  // —— im (Isle of Man Bus & Rail) ——
  douglas: {
    modes: ['bus', 'train', 'tram', 'taxi', 'walk'],
    airportToCity: {
      ko: '로널즈웨이 공항 정문에서 왼쪽으로 45m쯤 가면 버스 정류장이 있습니다. 더글러스행은 붐비는 시간에 20분마다 다닙니다.',
      en: 'The bus stand is about 45 m left of Ronaldsway Airport’s main entrance; buses to Douglas run every 20 minutes at peak times.',
    },
    howTo: {
      ko: '로드 스트리트 버스 환승장에서 섬 모든 노선으로 갈아탑니다. 해변 산책로에는 말이 끄는 트램이 다니고, 전기 철도는 락시·램지로, 증기 철도는 캐슬타운·포트에린으로 갑니다.',
      en: 'Lord Street interchange connects every bus route. A horse tram runs along the promenade, the electric railway goes to Laxey and Ramsey, and the steam railway to Castletown and Port Erin.',
    },
    apps: [],
    tip: {
      ko: '옛 철도들은 계절에 따라 운행합니다. 버스와 옛 철도를 함께 탈 거라면 고 익스플로어 카드가 편합니다.',
      en: 'The heritage railways run seasonally; Go Explore covers both buses and heritage trains.',
    },
  },
  castletown: {
    modes: ['bus', 'train', 'walk'],
    airportToCity: {
      ko: '공항이 마을 바로 옆입니다. 공항에서 남쪽으로 가는 버스가 캐슬타운을 거칩니다.',
      en: 'The airport is right next to town; southbound buses from the airport call at Castletown.',
    },
    howTo: {
      ko: '마을은 걸어서 돌아봅니다. 더글러스와 포트에린 사이를 버스와 증기 철도(계절 운행)가 잇습니다.',
      en: 'Walk the town; buses and the seasonal steam railway link it with Douglas and Port Erin.',
    },
    apps: [],
  },
  peel: {
    modes: ['bus', 'walk'],
    airportToCity: {
      ko: '공항 버스를 타고 더글러스 빅토리아 스트리트에서 내린 뒤, 125m쯤 걸어 로드 스트리트 환승장에서 필행 버스로 갈아탑니다.',
      en: 'Take an airport bus to Victoria Street in Douglas, walk about 125 m to Lord Street interchange and change for Peel.',
    },
    howTo: {
      ko: '항구와 성, 해변이 가까워 걸어서 다닙니다.',
      en: 'Harbour, castle and beach are all within walking distance.',
    },
    apps: [],
  },
  // —— je, gg (Visit Jersey, Visit Guernsey, Sark Tourism) ——
  'st-helier': {
    modes: ['bus', 'ferry', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: '15번·12번 버스가 공항과 리버레이션 버스터미널을 잇습니다.',
      en: 'Routes 15 and 12 link the airport with Liberation Station.',
    },
    howTo: {
      ko: '섬 버스는 대부분 리버레이션 버스터미널에서 출발합니다. 월~토요일에는 시내를 도는 버스도 있습니다.',
      en: 'Most island buses start at Liberation Station; a town service runs Monday to Saturday.',
    },
    apps: [ta('libertybus', { ko: '표·실시간 위치', en: 'Tickets and live buses' })],
    tip: {
      ko: '터미널에서 무료 시간표를 받을 수 있습니다.',
      en: 'Free printed timetables are available at Liberation Station.',
    },
  },
  gorey: {
    modes: ['bus', 'walk'],
    howTo: {
      ko: '세인트헬리어 리버레이션 버스터미널에서 1번·1A번 버스가 고리 마을(몽오르게이 성)로 갑니다.',
      en: 'Routes 1 and 1A run from Liberation Station in St Helier to Gorey village and Mont Orgueil Castle.',
    },
    apps: [ta('libertybus')],
  },
  'st-peter-port': {
    modes: ['bus', 'ferry', 'taxi', 'walk'],
    howTo: {
      ko: '섬 버스는 타운 터미너스에서 출발하고 비접촉 결제만 받습니다. 사크·험섬으로 가는 배는 세인트피터포트 항구에서 탑니다.',
      en: 'Island buses leave from the Town Terminus and take contactless payment only; boats to Sark and Herm sail from St Peter Port Harbour.',
    },
    apps: [ta('buses-gg', { ko: '실시간 버스', en: 'Live bus times' })],
  },
  sark: {
    modes: ['ferry', 'bike', 'walk'],
    howTo: {
      ko: '차가 없는 섬입니다. 마슬린 항구에서 트랙터 버스(현금·카드)를 타고 언덕을 오르거나 걸어 올라갑니다. 마을에서 자전거를 빌릴 수 있습니다.',
      en: 'A car-free island: from Maseline Harbour ride the tractor bus up the hill (cash or card) or walk; bikes can be hired in the village.',
    },
    apps: [],
    tip: {
      ko: '이름표를 단 짐은 배에서 숙소까지 배달해 줍니다. 길에서는 왼쪽으로 다니고, 자전거는 오솔길·절벽길에서 타면 안 됩니다.',
      en: 'Labelled luggage is delivered from the boat to your lodging. Keep left on the lanes; no cycling on footpaths or cliff paths.',
    },
  },
  // —— fo (SSL, Visit Faroe Islands) ——
  torshavn: {
    modes: ['bus', 'ferry', 'taxi', 'walk'],
    airportToCity: {
      ko: '바가르 공항에서 SSL 300번 버스가 토르스하운까지 갑니다. 렌터카는 공항에서 바로 빌릴 수 있습니다.',
      en: 'SSL route 300 runs from Vágar Airport to Tórshavn; rental cars are available at the airport.',
    },
    howTo: {
      ko: '섬과 섬 사이는 SSL 버스와 여객선으로 다닙니다. 키르큐뵈르 마을도 토르스하운 주변을 도는 버스로 갈 수 있습니다.',
      en: 'SSL buses and ferries link the islands; Kirkjubøur is reachable on the bus around Tórshavn.',
    },
    apps: [],
    tip: {
      ko: '날씨로 운행이 자주 취소되니 ssl.fo 공지를 확인하세요. 운전할 때는 도로 위의 양을 조심하세요.',
      en: 'Weather often cancels departures—check ssl.fo. Watch for sheep on the roads.',
    },
  },
  vagar: {
    modes: ['bus', 'ferry', 'walk'],
    howTo: {
      ko: '300번 버스가 토르스하운–공항–쇠르보우구르를, 350번이 쇠르보우구르에서 뵈르·가사달루르까지 갑니다. 미키네스섬행 배는 쇠르보우구르에서 탑니다.',
      en: 'Route 300 runs Tórshavn–airport–Sørvágur and route 350 continues to Bøur and Gásadalur; the boat to Mykines leaves from Sørvágur.',
    },
    apps: [],
  },
  eysturoy: {
    modes: ['bus', 'walk'],
    howTo: {
      ko: '토르스하운에서 400번 버스를 타고 다리 건너 오위라르바키에서 내린 뒤 200번(에이디)·201번(갸우그)으로 갈아탑니다.',
      en: 'Take route 400 from Tórshavn to Oyrarbakki, just over the bridge, then change to route 200 for Eiði or 201 for Gjógv.',
    },
    apps: [],
    tip: {
      ko: '마을로 가는 버스는 하루 몇 번뿐이라 돌아오는 시간을 먼저 확인하세요.',
      en: 'Village buses run only a few times a day—check the return times first.',
    },
  },
  // —— gl (Visit Greenland) ——
  nuuk: {
    modes: ['bus', 'taxi', 'bike', 'walk'],
    airportToCity: {
      ko: '누크 버스(Nuup Bussii) 3번이 공항에 가지만 비행기 시간에 맞추지는 않습니다. 택시는 미리 부르는 편이 좋습니다.',
      en: 'Nuup Bussii line 3 serves the airport but is not timed to flights; pre-book a taxi if you can.',
    },
    howTo: {
      ko: '시내 중심은 걸어서 다닐 만합니다. 버스 4개 노선이 시내 거의 전체를 다니고, 차내에서 동전으로 낼 수 있습니다.',
      en: 'The centre is walkable; four bus lines cover almost all of Nuuk, and coins are accepted on board.',
    },
    apps: [ta('air-greenland', { ko: '국내선', en: 'Domestic flights' })],
  },
  ilulissat: {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '큰 호텔들은 공항과 시내를 오가는 셔틀을 운행합니다. 택시도 있습니다.',
      en: 'The larger hotels run airport and town shuttles; taxis are available.',
    },
    howTo: {
      ko: '대부분 걸어서 다니지만 마을이 꽤 넓습니다. 버스는 붐비는 시간 20분, 그 밖에는 30~40분 간격입니다.',
      en: 'Most visitors walk, though the town is spread out; buses run every 20 minutes at peak and every 30–40 otherwise.',
    },
    apps: [ta('air-greenland', { ko: '국내선', en: 'Domestic flights' })],
  },
  kangerlussuaq: {
    modes: ['bus', 'walk'],
    airportToCity: {
      ko: '공항 맞은편 기념품 가게 앞에 버스 정류장이 있습니다. 숙소에 마중을 부탁할 수도 있습니다.',
      en: 'A bus stop faces the souvenir shops outside the airport, or arrange a transfer with your lodging.',
    },
    howTo: {
      ko: '마을이 활주로 양쪽으로 퍼져 있습니다. 버스는 약 30분마다 다니고 요금은 현금으로만 냅니다(거스름돈 있음).',
      en: 'The settlement straddles the runway; buses call about every 30 minutes and take cash only (change given).',
    },
    apps: [ta('air-greenland', { ko: '국내선', en: 'Domestic flights' })],
  },
  // —— ru (airport and operator sites) ——
  moscow: {
    modes: ['metro', 'train', 'bus', 'tram', 'taxi', 'walk'],
    airportToCity: {
      ko: '아에로엑스프레스: 셰레메티예보–벨로루스키역 46분, 도모데도보–파벨레츠키역 약 45분. 브누코보 노선은 2024년 7월부터 운행하지 않습니다.',
      en: 'Aeroexpress: Sheremetyevo–Belorussky station 46 min, Domodedovo–Paveletsky about 45 min. The Vnukovo line has not run since July 2024.',
    },
    howTo: {
      ko: '교통카드 트로이카는 지하철 매표소와 자동판매기에서 사고 충전하며, 지하철·버스·트램에 씁니다.',
      en: 'Buy and top up a Troika card at metro ticket offices and machines; it works on the metro, buses and trams.',
    },
    apps: [
      ta('moscow-metro', { ko: '지하철 공식', en: 'Official metro app' }),
      ta('moscow-transport', { ko: '모스크바 교통국', en: 'City transport department' }),
      ta('yandex-go', { ko: '택시', en: 'Taxis' }),
    ],
    tip: {
      ko: '해외 발급 카드는 쓸 수 없으니 트로이카는 현금으로 충전하세요. 아에로엑스프레스 시간표는 수시로 바뀌니 출발 전 확인하세요.',
      en: 'Foreign-issued cards do not work, so top up Troika with cash; Aeroexpress timetables change often.',
    },
  },
  'saint-petersburg': {
    modes: ['metro', 'bus', 'tram', 'train', 'taxi', 'walk'],
    airportToCity: {
      ko: '풀코보 공항에서 39번 버스와 39Э 급행버스가 지하철 모스콥스카야역까지 갑니다.',
      en: 'Bus 39 and express 39Э run from Pulkovo Airport to Moskovskaya metro station.',
    },
    howTo: {
      ko: '교통카드 포도로즈니크로 지하철·버스·트램을 탑니다. 모스크바행 기차는 모스크바역에서 출발합니다.',
      en: 'Use the Podorozhnik card on the metro, buses and trams; trains to Moscow leave from Moskovsky station.',
    },
    apps: [ta('podorozhnik', { ko: '교통카드', en: 'Transport card' }), ta('yandex-go', { ko: '택시', en: 'Taxis' })],
  },
  kazan: {
    modes: ['metro', 'bus', 'train', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항과 카잔 교외선 역 사이를 전동차가 약 30분에 잇습니다. 낮에는 197번 시내버스도 다닙니다.',
      en: 'A suburban train links the airport with Kazan in about 30 minutes; city bus 197 also runs during the day.',
    },
    howTo: {
      ko: '크렘린과 바우만 거리 일대는 걸어서 다닙니다. 시내는 지하철과 버스로 이동합니다.',
      en: 'Walk around the Kremlin and Bauman Street; the metro and buses cover the rest.',
    },
    apps: [ta('yandex-go', { ko: '택시', en: 'Taxis' }), ta('yandex-maps', { ko: '길찾기', en: 'Routes' })],
  },
  suzdal: {
    modes: ['bus', 'taxi', 'walk'],
    howTo: {
      ko: '수즈달에는 철도가 없습니다. 모스크바에서 기차로 블라디미르까지 간 뒤 버스로 갈아탑니다. 마을은 걸어서 돌아봅니다.',
      en: 'Suzdal has no railway: take a train from Moscow to Vladimir and a bus from there. The town is walkable.',
    },
    apps: [ta('yandex-maps', { ko: '길찾기', en: 'Routes' })],
  },
  vladivostok: {
    modes: ['bus', 'train', 'ferry', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항(크네비치)역에서 블라디보스토크역까지 엑스프레스 프리모리야의 전동차가 다닙니다.',
      en: 'Express Primorya suburban trains run from the airport (Knevichi) to Vladivostok station.',
    },
    howTo: {
      ko: '블라디보스토크역은 시베리아 횡단철도의 종착역이며, 여객선 터미널에서 한국 동해항으로 가는 배가 있습니다.',
      en: 'Vladivostok station is the Trans-Siberian terminus, and a ferry to Donghae in Korea sails from the sea terminal.',
    },
    apps: [ta('yandex-go', { ko: '택시', en: 'Taxis' }), ta('yandex-maps', { ko: '길찾기', en: 'Routes' })],
  },
  khabarovsk: {
    modes: ['bus', 'tram', 'train', 'taxi', 'walk'],
    airportToCity: {
      ko: '트롤리버스 1번이 공항과 아무르강 가까운 콤소몰스카야 광장을 잇습니다. 2·3번은 공항–기차역을 도는 노선입니다.',
      en: 'Trolleybus 1 links the airport with Komsomolskaya Square near the Amur; lines 2 and 3 loop via the railway station.',
    },
    howTo: {
      ko: '시내는 트롤리버스·버스로 다닙니다. 하바롭스크-1역에 시베리아 횡단철도가 섭니다.',
      en: 'Trolleybuses and buses cover the city; Trans-Siberian trains stop at Khabarovsk-1.',
    },
    apps: [ta('yandex-go', { ko: '택시', en: 'Taxis' }), ta('yandex-maps', { ko: '길찾기', en: 'Routes' })],
  },
  irkutsk: {
    modes: ['bus', 'tram', 'train', 'taxi', 'walk'],
    airportToCity: {
      ko: '공항이 시내에서 가까워 트롤리버스와 시내버스로 중심가까지 갑니다.',
      en: 'The airport is close to town, with trolleybuses and city buses to the centre.',
    },
    howTo: {
      ko: '시내는 트롤리버스·버스로 다닙니다. 이르쿠츠크 여객역에 시베리아 횡단철도가 섭니다.',
      en: 'Trolleybuses and buses cover the city; Trans-Siberian trains stop at Irkutsk-Passazhirsky.',
    },
    apps: [ta('yandex-go', { ko: '택시', en: 'Taxis' }), ta('yandex-maps', { ko: '길찾기', en: 'Routes' })],
  },
  // —— xc (UK travel advice; enter through the south) ——
  'north-nicosia': {
    modes: ['bus', 'taxi', 'walk'],
    airportToCity: {
      ko: '남쪽 라르나카 공항으로 들어와 남니코시아에서 그린라인 검문소를 걸어서 건너는 것이 외교부 권고 경로입니다.',
      en: 'Fly into Larnaca in the south and cross the Green Line on foot in Nicosia—the route the Korean Foreign Ministry advises.',
    },
    howTo: {
      ko: '레드라 팰리스와 레드라·로크마즈 거리 검문소는 보행자 전용입니다. 성벽 안 구시가는 걸어서 돌아보고, 키레니아·파마구스타는 버스나 돌무시로 갑니다.',
      en: 'The Ledra Palace and Ledra/Lokmacı Street crossings are for pedestrians only. Walk the walled old town; take buses or dolmuş to Kyrenia and Famagusta.',
    },
    apps: [],
    tip: {
      ko: '저녁과 일요일에는 버스가 줄어듭니다. 택시는 타기 전에 요금을 정하세요.',
      en: 'Buses thin out in the evening and on Sundays; agree taxi fares before you ride.',
    },
  },
  kyrenia: {
    modes: ['bus', 'taxi', 'walk'],
    howTo: {
      ko: '북니코시아에서 버스로 옵니다. 옛 항구와 성은 걸어서 돌아봅니다.',
      en: 'Come by bus from North Nicosia; walk the old harbour and castle.',
    },
    apps: [],
    tip: {
      ko: '남쪽에서 빌린 차는 북쪽에서 쓸 보험을 따로 들어야 합니다.',
      en: 'Cars hired in the south need separate insurance for the north.',
    },
  },
  famagusta: {
    modes: ['bus', 'taxi', 'walk'],
    howTo: {
      ko: '북니코시아에서 버스·돌무시로 옵니다. 성벽 안 구시가는 걸어서 다닙니다. 바로샤 지역은 외교부 3단계(출국권고) 지역입니다.',
      en: 'Come by bus or dolmuş from North Nicosia and walk the walled city. Varosha is under a Korean level 3 alert.',
    },
    apps: [],
  },
}

export function getCityTransit(cityId: string): CityTransit | undefined {
  return cityTransitById[cityId]
}
