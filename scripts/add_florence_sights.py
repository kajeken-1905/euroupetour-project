#!/usr/bin/env python3
"""Florence (2026-11-01, user request): nine more sights (h11–h19; h10 was The Mall, moved to the outlets, so its id is
not reused), a three-day itinerary and three more day trips. Hours from the museums' own sites and Feel Florence,
checked that day. Run once."""
from add_daytrip_places import hl_block, insert_after_line, rd, wr, vline

DAY = ['근교 당일치기', 'Day trip']
S = [
    (11, dict(ko='피티 궁전', en='Palazzo Pitti', dko='메디치 가문이 살던 아르노강 남쪽의 거대한 궁전으로, 라파엘로·티치아노 그림이 걸린 팔라티나 미술관 등 여러 박물관이 있습니다.', den='The vast palace south of the Arno where the Medici lived, now several museums including the Palatine Gallery of Raphael and Titian.', maps='Palazzo Pitti',
              visit=dict(min=120, max=180, c='mon', s='https://www.uffizi.it/en/pitti-palace', n='화~일 8:15~18:30에 열고 월요일·1월 1일·12월 25일에 쉽니다. 현장 €16, 미리 예약 €19, 보볼리 정원 통합권 €22(예약 €25).|Open Tuesday to Sunday 8:15–18:30; closed Mondays, 1 January and 25 December. €16 on the day, €19 booked ahead; with the Boboli Gardens €22 (€25 booked).', k='2026-11'))),
    (12, dict(ko='보볼리 정원', en='Boboli Gardens', dko='피티 궁전 뒤 언덕에 펼쳐진 메디치 가문의 정원으로, 분수와 조각 사이를 걸어 오르면 시내가 내려다보입니다.', den='The Medici gardens on the hill behind Palazzo Pitti, climbing past fountains and statues to views over the city.', maps='Giardino di Boboli',
              visit=dict(min=90, max=150, s='https://www.uffizi.it/en/boboli-garden', n='8:15에 열고 11~2월 16:30, 3·10월 17:30~18:30, 4~9월 18:30(6~8월 19:10)에 닫습니다(마지막 입장 1시간 전). 매달 첫째·마지막 월요일과 12월 25일에 쉽니다. 현장 €10.|Opens 8:15; closes 16:30 November–February, 17:30–18:30 in March and October, 18:30 April–September (19:10 June–August), last entry an hour before. Closed on the first and last Monday of each month and 25 December. €10 on the day.', k='2026-11'))),
    (13, dict(ko='바르젤로 미술관', en='Bargello', dko='옛 경찰청 겸 감옥이던 중세 요새 건물로, 도나텔로의 〈다비드〉와 미켈란젤로의 초기 조각을 모은 조각 미술관입니다.', den='A medieval fortress that was once the police headquarters and prison, now the sculpture museum of Donatello’s David and early Michelangelo.', maps='Museo Nazionale del Bargello',
              visit=dict(min=75, max=120, c='mon', s='https://bargellomusei.it/en/museum/museo-nazionale-del-bargello/', n='화~일 8:15~18:50에 열고 월요일에 쉽니다. €12, 예약(€4)은 선택입니다.|Open Tuesday to Sunday 8:15–18:50; closed Mondays. €12; booking (€4) is optional.', k='2026-11'))),
    (14, dict(ko='산타 크로체 성당', en='Santa Croce', dko='미켈란젤로·갈릴레오·마키아벨리·로시니가 잠든 ‘이탈리아의 판테온’으로, 조토의 프레스코와 파치 예배당이 있습니다.', den='The “Pantheon of Italy”, where Michelangelo, Galileo, Machiavelli and Rossini lie, with Giotto’s frescoes and the Pazzi Chapel.', maps='Basilica di Santa Croce Firenze',
              visit=dict(min=60, max=90, s='https://www.santacroceopera.it/en/organise-your-visit/', n='월~토 9:30~17:30, 일요일·종교 축일 14:00~17:30(마지막 입장 17:00)에 열고 12월 25일에 쉽니다. €10이며 온라인 예약을 권합니다.|Open Monday to Saturday 9:30–17:30, Sundays and religious holidays 14:00–17:30 (last entry 17:00); closed 25 December. €10; booking online is recommended.', k='2026-11'))),
    (15, dict(ko='메디치 예배당', en='Medici Chapels', dko='산 로렌초 성당에 붙은 메디치 가문의 묘당으로, 색 대리석 ‘군주들의 예배당’과 미켈란젤로가 조각한 신 성구실이 있습니다.', den='The Medici mausoleum at San Lorenzo: the coloured-marble Chapel of the Princes and Michelangelo’s New Sacristy.', maps='Cappelle Medicee',
              visit=dict(min=45, max=75, c='mon', s='https://bargellomusei.it/en/museum/cappelle-medicee/', n='화~일 8:15~18:50에 열고 월요일에 쉽니다. €11, 매달 첫째 일요일은 무료입니다.|Open Tuesday to Sunday 8:15–18:50; closed Mondays. €11; free on the first Sunday of the month.', k='2026-11',
                         x=[('2026년 12월 25일, 2027년 1월 1일은 휴관합니다.|Closed 25 December 2026 and 1 January 2027.', '2027-01-01')]))),
    (16, dict(ko='산 미니아토 알 몬테', en='San Miniato al Monte', dko='미켈란젤로 광장 위 언덕의 11세기 로마네스크 성당으로, 매일 저녁 수도사들의 그레고리오 성가 저녁 기도가 열립니다.', den='An 11th-century Romanesque church on the hill above Piazzale Michelangelo, where the monks sing Gregorian vespers every evening.', maps='Basilica di San Miniato al Monte',
              visit=dict(min=30, max=60, b='no', s='https://sanminiatoalmonte.it/', n='무료이며 월~토 9:30~13:00·15:30~19:00, 일요일 8:15~13:00·15:30~19:00에 엽니다. 저녁 기도는 매일 18:30이고 미사 중엔 관람할 수 없습니다.|Free; open Monday to Saturday 9:30–13:00 and 15:30–19:00, Sundays 8:15–13:00 and 15:30–19:00. Vespers daily at 18:30; no visiting during services.', k='2026-11'))),
    (17, dict(ko='두오모 오페라 박물관', en='Opera del Duomo Museum', dko='두오모·세례당·종탑에서 옮겨 온 원작 조각을 모은 박물관으로, 기베르티의 〈천국의 문〉과 미켈란젤로의 〈피에타〉가 있습니다.', den='The museum of original sculpture from the cathedral, baptistery and bell tower, with Ghiberti’s Gates of Paradise and a Michelangelo Pietà.', maps="Museo dell'Opera del Duomo Firenze",
              visit=dict(min=90, max=120, s='https://duomo.firenze.it/en/home', n='따로 표가 없고 대성당 통합권(브루넬레스키·조토·기베르티 패스)에 모두 들어 있습니다. 매달 첫째 화요일에 쉽니다.|There is no separate ticket: every cathedral pass (Brunelleschi, Giotto or Ghiberti) includes it. Closed on the first Tuesday of the month.', k='2026-11'))),
    (18, dict(ko='시뇨리아 광장과 로자 데이 란치', en='Piazza della Signoria and Loggia dei Lanzi', dko='베키오 궁전 앞 광장으로, 다비드상 복제품과 넵투누스 분수, 첼리니의 〈페르세우스〉가 선 열린 조각 회랑이 있습니다.', den='The square before Palazzo Vecchio, with the copy of David, the Neptune Fountain and the open loggia of sculpture where Cellini’s Perseus stands.', maps='Loggia dei Lanzi',
              visit=dict(min=20, max=30, n='광장과 회랑은 무료로 언제든 볼 수 있습니다.|The square and the loggia are free and always open.'))),
    (19, dict(ko='피에솔레', en='Fiesole', dko='피렌체 북쪽 언덕 위 에트루리아·로마 시대 마을로, 로마 극장 유적과 언덕 아래로 펼쳐진 피렌체 전망이 있습니다.', den='The Etruscan and Roman hill town north of Florence, with a Roman theatre and the view down over the city.', maps='Area Archeologica di Fiesole', group=DAY,
              visit=dict(min=180, max=240, c='tue', s='https://www.feelflorence.it/en/points-interest/archaeological-museum-and-archaeological-area', n='산마르코 광장에서 7번 버스로 오릅니다. 유적지는 11~2월 10:00~15:00에 열고 화요일에 쉽니다.|Bus 7 climbs from Piazza San Marco. The archaeological area opens 10:00–15:00 from November to February and closes on Tuesdays.', k='2026-11'))),
]
ITIN = ("""  florence: {
    days: [
      ['두오모와 아카데미아|Duomo & Accademia', 7, 9, 5, 1, 8],
      ['우피치와 아르노 강|Uffizi & the Arno', 6, 2, 3, 4],
    ],
  },""", """  florence: {
    days: [
      ['두오모와 메디치|Duomo & the Medici', 7, 15, 9, 5, 1, 8, 17],
      ['시뇨리아와 우피치|Signoria & the Uffizi', 18, 6, 2, 13, 14],
      ['아르노강 건너편|Across the Arno', 3, 11, 12, 16, 4],
    ],
    trips: [['피에솔레|Fiesole', 19]],
  },""")
TRIPS = """    {
      to: 'orvieto',
      tip: '절벽 위 도시의 대성당과 지하 동굴을 봅니다. 기차역에서 푸니쿨라(운휴 중엔 대체 버스)로 올라갑니다.|The cliff-top town’s cathedral and underground caves; ride up from the station by funicular (or the replacement bus while it is out of service).',
    },
    {
      to: 'assisi',
      how: '기차로 약 2시간 30분(테론톨라 환승)|About 2 hrs 30 by train (change at Terontola)',
      mode: 'train',
      tip: '성 프란치스코 대성당의 조토 프레스코를 보고 언덕 위 중세 마을을 걷습니다. 하루가 깁니다.|Giotto’s frescoes in the Basilica of St Francis and the medieval hill town; it makes a long day.',
    },
    {
      to: 'ravenna',
      how: '기차로 약 2시간(볼로냐 환승)|About 2 hrs by train (change at Bologna)',
      mode: 'train',
      tip: '산 비탈레 성당과 갈라 플라치디아 영묘의 비잔틴 모자이크를 봅니다.|The Byzantine mosaics of San Vitale and the Mausoleum of Galla Placidia.',
    },
"""


def main():
    cities = rd('cities.ts')
    for n, h in S:
        hid = f'florence-h{n}'
        assert f'id: "{hid}"' not in cities
        i = cities.find('id: "florence",')
        nxt = cities.find('\n  {\n    id: "', i + 10)
        j = cities.rindex('\n', i, cities.rindex('],', i, nxt))
        sep = '' if cities[:j].rstrip().endswith(',') else ','
        cities = cities[:j] + sep + '\n' + hl_block(hid, f'/highlights/florence-{n}.jpg', h) + ',' + cities[j:]
        insert_after_line('visit-it.ts', r"^  'florence-h\d+': v\(.*\),\n", vline(hid, h['visit']))
        print('sight', hid)
    wr('cities.ts', cities)
    it = rd('itinerary-it.ts')
    assert ITIN[0] in it
    wr('itinerary-it.ts', it.replace(ITIN[0], ITIN[1]))
    s = rd('day-trips.ts')
    k = s.index('  florence: [\n')
    end = s.index('\n  ],\n', k) + 1
    wr('day-trips.ts', s[:end] + TRIPS + s[end:])


if __name__ == '__main__':
    main()
