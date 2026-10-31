#!/usr/bin/env python3
"""Lisbon: Cristo Rei and the Almada side of the Tagus as a day trip, plus Pilar 7, LX Factory and MAAT on the Belém
day (2026-10-31, user request). Facts checked that day on cristorei.pt, visitlisboa.com (Pilar 7), maat.pt and ttsl.pt;
the Cacilhas–Cristo Rei bus from Transitous. Run once."""
import add_portugal_sights as P
from add_daytrip_places import rd, wr

DAY = ['근교 당일치기', 'Day trip']
P.NEW = {'lisbon': [
    dict(ko='크리스투 헤이 (예수상)', en='Cristo Rei', dko='테주강 건너 알마다 언덕에 두 팔을 벌리고 선 예수상으로, 받침대 꼭대기 전망대에서 4월 25일 다리와 리스본이 한눈에 들어옵니다.', den='The open-armed statue of Christ on the Almada heights across the Tagus; its pedestal terrace looks over the 25 de Abril Bridge and all of Lisbon.', maps='Santuário de Cristo Rei Almada', group=DAY,
         visit=dict(min=60, max=90, c='daily', s='https://www.cristorei.pt/', t='https://cristorei.pt/visitas/bilheteira/', n='매일 엽니다. 10~3월 10:00~18:00, 4~9월 10:00~19:00이고 마지막 입장은 닫기 20분 전입니다. 전망대 표는 현장에서만 팔며 엘리베이터 뒤 계단 74개를 오릅니다. 카실냐스에서 버스로 약 10분, 내려서 걸어서 약 10분입니다.|Open daily: 10:00–18:00 October to March and 10:00–19:00 April to September, last ascent 20 minutes before closing. Terrace tickets are sold on site only, and there are 74 steps after the lift. About 10 minutes by bus from Cacilhas, then a 10-minute walk.', k='2026-10')),
    dict(ko='카실냐스', en='Cacilhas', dko='테주강 건너편 페리 선착장 마을로 강변에 해산물 식당이 늘어서 있고 리스본 시내가 마주 보입니다.', den='The ferry village across the Tagus, lined with seafood restaurants and facing the Lisbon skyline.', maps='Cacilhas Almada', group=DAY,
         visit=dict(min=60, max=120, s='https://ttsl.pt/passageiros/horarios-de-ligacoes-fluviais/ligacao-cacilhas-cais-do-sodre/', n='카이스 두 소드레에서 페리로 약 10분이며 낮에는 자주 다닙니다.|About 10 minutes by ferry from Cais do Sodré, with frequent crossings by day.', k='2026-10')),
    dict(ko='지냘 강변길과 보카 두 벤투 엘리베이터', en='Cais do Ginjal and the Boca do Vento lift', dko='카실냐스에서 이어지는 옛 창고들 사이 강변 산책로로, 끝의 전망 엘리베이터를 타면 언덕 위 공원과 구시가로 올라갑니다.', den='The riverside path past old warehouses from Cacilhas, ending at a panoramic lift up to a hilltop park and the old town.', maps='Elevador Panorâmico da Boca do Vento', group=DAY,
         visit=dict(min=60, max=90, n='카실냐스 선착장에서 강을 따라 걸어서 약 15분입니다.|About 15 minutes’ walk along the river from the Cacilhas pier.')),
    dict(ko='프리깃함 D. 페르난두 2세', en='Frigate D. Fernando II e Glória', dko='19세기 중반에 지어 인도 항로를 오간 포르투갈 해군 범선으로, 카실냐스 부두에 박물관으로 떠 있습니다.', den='A mid-19th-century Portuguese navy sailing frigate of the India run, now a museum moored at Cacilhas.', maps='Fragata D. Fernando II e Glória', group=DAY,
         visit=dict(min=45, max=60, n='카실냐스 선착장 바로 옆입니다.|Right beside the Cacilhas ferry pier.')),
    dict(ko='4월 25일 다리와 필라르 7', en='25 de Abril Bridge and Pilar 7', dko='금문교를 닮은 붉은 현수교로, 리스본 쪽 교각 안의 필라르 7에서 다리 구조를 보고 유리 전망대에 섭니다.', den='The red suspension bridge that recalls the Golden Gate; Pilar 7, inside a pier on the Lisbon side, shows how it works and ends on a glass viewing deck.', maps='Pilar 7 Bridge Experience',
         visit=dict(min=45, max=60, s='https://www.visitlisboa.com/en/places/pilar-7-bridge-experience', n='필라르 7은 매일 10:00~18:00(마지막 입장 17:00)에 열고 12월 25일에 쉽니다. 리스보아 카드가 있으면 무료입니다.|Pilar 7 opens daily 10:00–18:00 (last entry 17:00), closed 25 December; free with the Lisboa Card.', k='2026-10',
                    x=[('필라르 7의 엘리베이터가 수리 중입니다(2026년 10월 기준).|Pilar 7’s lift is under repair (October 2026).', '2026-12-31')])),
    dict(ko='LX 팩토리', en='LX Factory', dko='4월 25일 다리 밑 옛 방직 공장 단지를 바꾼 상점·식당·카페 거리로 책이 천장까지 쌓인 서점이 유명합니다.', den='A former textile works under the 25 de Abril Bridge turned into shops, restaurants and cafés, famous for its floor-to-ceiling bookshop.', maps='LX Factory Lisboa',
         visit=dict(min=60, max=90, n='입장은 무료이며 가게마다 여는 시간이 다릅니다.|Free to wander; each shop keeps its own hours.')),
    dict(ko='MAAT', en='MAAT', dko='강변에 물결처럼 낮게 누운 미술·건축·기술 박물관으로, 지붕 위를 걸으며 강을 볼 수 있습니다.', den='The Museum of Art, Architecture and Technology, a low wave on the riverfront whose roof you can walk over.', maps='MAAT Lisboa',
         visit=dict(min=60, max=90, c='tue', s='https://www.maat.pt/en', n='수~월 10:00~19:00에 열고 화요일과 1월 1일·5월 1일·12월 25일에 쉽니다.|Open Wednesday to Monday 10:00–19:00; closed on Tuesdays, 1 January, 1 May and 25 December.', k='2026-10')),
]}
OLD_D2 = "      ['벨렝과 강변|Belém & the riverfront', 2, 9, 1, 6, 5, 27],\n"
NEW_D2 = "      ['벨렝과 강변|Belém & the riverfront', 2, 9, 1, 34, 32, 33, 5, 27],\n"
OLD_T = "    trips: [['마프라 궁전|Mafra', 18]],\n"
NEW_T = "    trips: [['마프라 궁전|Mafra', 18], ['테주강 건너 알마다|Across the Tagus to Almada', 29, 31, 30, 28]],\n"


def main():
    P.EXTRA['lisbon'][26] = 21
    cities = rd('cities.ts')
    if 'id: "lisbon-h28"' not in cities:
        cities = P.add_new(cities)
    it = rd('itinerary-iberia.ts')
    for old, new in ((OLD_D2, NEW_D2), (OLD_T, NEW_T)):
        assert old in it or new in it, old
        it = it.replace(old, new)
    wr('itinerary-iberia.ts', it)
    wr('cities.ts', P.regroup(cities, it, 'lisbon'))


if __name__ == '__main__':
    main()
