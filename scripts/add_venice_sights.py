#!/usr/bin/env python3
"""Venice sights h10–h24 (2026-10-31, user request): museums, churches, islands and smaller sights, opening facts
checked against each official site that day. Helpers come from add_daytrip_places.py. Run once."""
import re

from add_daytrip_places import hl_block, insert_after_line, rd, vline, wr

SIGHTS = [
    dict(ko='산마르코 대성당', en="St Mark's Basilica", dko='황금 모자이크로 뒤덮인 비잔틴 양식 대성당으로, 보석 제단화 팔라 도로와 청동 말 조각이 있습니다.', den='The Byzantine basilica sheathed in gold mosaics, with the jewelled Pala d’Oro altarpiece and the bronze horses.', maps="Basilica di San Marco Venezia",
         visit=dict(min=60, max=90, b='rec', s='https://www.basilicasanmarco.it/', t='https://tickets.basilicasanmarco.it/', n='월~토 9:30~17:15(마지막 입장 16:45), 일요일·축일은 14:00부터 엽니다. 표는 이름이 적힌 시간 지정 표라 신분증이 필요하고, 어깨와 무릎을 가려야 합니다. 미사 중에는 들어갈 수 없습니다.|Mon–Sat 9:30–17:15 (last entry 16:45); Sundays and holy days from 14:00. Tickets are timed and named, so bring ID; cover shoulders and knees. No entry during services.', k='2026-10')),
    dict(ko='아카데미아 미술관', en="Gallerie dell'Accademia", dko='벨리니·조르조네·티치아노·틴토레토까지 베네치아 회화를 모은 미술관입니다.', den='The great collection of Venetian painting, from Bellini and Giorgione to Titian and Tintoretto.', maps="Gallerie dell'Accademia Venezia",
         visit=dict(min=90, max=150, c='mon', b='rec', s='https://www.gallerieaccademia.it/', n='화~일 9:00~19:00에 열고 표는 18시까지 팝니다. 붐비는 날엔 온라인 예약이 우선 입장입니다. 배낭과 큰 가방은 무료 사물함에 맡깁니다.|Open Tue–Sun 9:00–19:00, ticket sales until 18:00; online booking gives priority entry on busy days. Backpacks and large bags go in the free lockers.', k='2026-10')),
    dict(ko='페기 구겐하임 컬렉션', en='Peggy Guggenheim Collection', dko='대운하변 저택에 피카소·달리·폴록 등 20세기 미술을 모은 미술관입니다.', den='Twentieth-century art—Picasso, Dalí, Pollock and more—in a palazzo on the Grand Canal.', maps='Peggy Guggenheim Collection',
         visit=dict(min=90, max=120, c='tue', b='rec', s='https://www.guggenheim-venice.it/en/visit/', n='화요일과 12월 25일을 빼고 매일 10:00~18:00(마지막 입장 17:00)에 엽니다. 입장 시간을 골라 온라인으로 사 두는 편이 좋고, 큰 가방과 배낭은 사물함에 맡깁니다.|Open 10:00–18:00 (last entry 17:00) except Tuesdays and 25 December. Buy a timed ticket online if you can; large bags and backpacks go in the lockers.', k='2026-10')),
    dict(ko='산타 마리아 델라 살루테 성당', en='Santa Maria della Salute', dko='흑사병이 끝난 것을 감사하며 대운하 입구에 세운 팔각 돔 성당입니다.', den='The octagonal domed church at the mouth of the Grand Canal, built in thanks for the end of the plague.', maps='Basilica di Santa Maria della Salute',
         visit=dict(min=30, max=45, s='https://basilicasalutevenezia.it/orari-e-visite-turistiche/', n='본당은 무료이고 겨울(11~3월) 9:30~12:30·15:00~17:30, 여름(4~10월) 9:00~12:00·15:00~17:30에 엽니다. 티치아노 그림이 있는 성물실은 따로 표를 삽니다.|The church is free: winter (Nov–Mar) 9:30–12:30 and 15:00–17:30, summer (Apr–Oct) 9:00–12:00 and 15:00–17:30. The sacristy, with its Titians, needs a ticket.', k='2026-10')),
    dict(ko='산조르조 마조레 성당', en='San Giorgio Maggiore', dko='산마르코 광장 맞은편 섬에 선 팔라디오의 하얀 성당입니다.', den='Palladio’s white church on its own island facing St Mark’s Square.', maps='San Giorgio Maggiore Venezia',
         visit=dict(min=45, max=60, s='https://www.abbaziasangiorgio.it/', n='성당은 매일 9:00~18:00에 엽니다. 산자카리아에서 수상버스 2번으로 한 정거장입니다.|The church is open daily 9:00–18:00; one stop on vaporetto line 2 from San Zaccaria.', k='2026-10',
                    x=[('전망 좋은 종탑은 정비 공사로 임시 휴관 중이고 다시 여는 날짜는 아직 없습니다(2026년 10월 기준).|The bell tower, with its famous view, is temporarily closed for maintenance with no reopening date yet (October 2026).', '2027-01-31')])),
    dict(ko='무라노', en='Murano', dko='유리 공예로 이름난 섬으로, 공방에서 유리 불기 시연을 보고 유리 박물관을 둘러봅니다.', den='The glass-making island: watch glass-blowing in the workshops and visit the Glass Museum.', maps='Murano Venezia',
         visit=dict(min=90, max=150, s='https://museovetro.visitmuve.it/', n='본섬 폰다멘테 노베에서 수상버스로 짧게 건너갑니다. 유리 박물관은 겨울(11~3월) 10:00~17:00, 여름 10:00~18:00이며, 부라노·토르첼로와 묶어 하루에 봅니다.|A short vaporetto hop from Fondamente Nove. The Glass Museum opens 10:00–17:00 in winter (Nov–Mar) and 10:00–18:00 in summer; pair it with Burano and Torcello for a day.', k='2026-10')),
    dict(ko='산 로코 대신도회', en='Scuola Grande di San Rocco', dko='틴토레토가 24년 동안 벽과 천장을 그림으로 채운 신도회 건물입니다.', den='The confraternity hall whose walls and ceilings Tintoretto filled with paintings over 24 years.', maps='Scuola Grande di San Rocco',
         visit=dict(min=45, max=75, c='daily', b='no', s='https://www.scuolagrandesanrocco.org/', n='매일 9:30~17:30에 엽니다(매표 17:00까지, 12월 25일·1월 1일 휴무). 온라인 판매가 없어 현장에서 표를 삽니다.|Open daily 9:30–17:30 (tickets until 17:00; closed 25 December and 1 January). There are no online sales—buy at the door.', k='2026-10')),
    dict(ko='프라리 성당', en='Basilica dei Frari', dko='티치아노의 〈성모 승천〉 제단화와 그의 무덤이 있는 고딕 성당입니다.', den='The Gothic church with Titian’s Assumption altarpiece and his tomb.', maps='Basilica dei Frari Venezia',
         visit=dict(min=45, max=60, s='https://www.basilicadeifrari.it/orari-delle-visite/', n='겨울(11월~부활절) 월~토 9:00~18:00, 일·공휴일 13:00~18:00에 엽니다. 결혼식·장례식·음악회 중에는 관람이 멈춥니다.|Winter (November to Easter) Mon–Sat 9:00–18:00, Sundays and holidays 13:00–18:00. Visits pause for weddings, funerals and concerts.', k='2026-10')),
    dict(ko='토르첼로', en='Torcello', dko='베네치아가 처음 시작된 석호의 작은 섬으로, 7세기에 세운 대성당의 비잔틴 모자이크가 남아 있습니다.', den='The quiet lagoon island where Venice began, with Byzantine mosaics in its cathedral founded in the 7th century.', maps='Basilica di Santa Maria Assunta Torcello',
         visit=dict(min=60, max=90, s='https://www.patriarcatovenezia.it/basilica-di-santa-maria-assunta-di-torcello/', n='부라노 바로 옆 섬입니다. 대성당은 겨울(11~2월) 10:00~17:00, 3~10월 10:30~18:00이며 12월 25일·1월 1일에 쉽니다. 어깨와 무릎을 가려야 합니다.|Right next to Burano. The cathedral opens 10:00–17:00 in winter (Nov–Feb) and 10:30–18:00 from March to October, closed 25 December and 1 January; cover shoulders and knees.')),
    dict(ko='유대인 게토', en='Jewish Ghetto', dko='1516년에 생긴 세계 최초의 게토로, 건물 꼭대기 층에 숨은 듯한 옛 회당들과 유대 박물관이 있습니다.', den='The world’s first ghetto, founded in 1516, with old synagogues tucked into upper floors and the Jewish Museum.', maps='Museo Ebraico di Venezia',
         visit=dict(min=60, max=90, s='https://www.museoebraico.it/', n='유대 박물관은 7년 동안의 보수를 마치고 2026년 10월 22일 다시 열었습니다. 회당은 박물관의 시간 지정 가이드 투어로만 들어가며, 토요일과 유대교 축일에는 쉽니다.|The Jewish Museum reopened on 22 October 2026 after seven years of restoration. The synagogues can be entered only on the museum’s timed guided tours; closed on Saturdays and Jewish holidays.')),
    dict(ko='라 페니체 극장', en='Teatro La Fenice', dko='두 번의 화재를 딛고 다시 지은 베네치아의 오페라 극장으로, 금빛 객석을 오디오 가이드로 둘러봅니다.', den='Venice’s opera house, twice rebuilt after fire; tour the gilded auditorium with an audio guide.', maps='Teatro La Fenice',
         visit=dict(min=45, max=60, b='no', s='https://www.teatrolafenice.it/fondazione-teatro-la-fenice/visita-la-fenice/', t='https://festfenice.com/orari', n='대체로 매일 9:30부터 열지만 공연·리허설에 따라 날마다 시간이 달라 공식 일정표를 확인하세요. 예약은 없고 극장 매표소에서 표를 삽니다.|Usually open daily from 9:30, but hours change day to day with performances and rehearsals—check the official schedule. No booking; buy at the theatre box office.', k='2026-10')),
    dict(ko='카도로', en="Ca' d'Oro", dko='금박 장식에서 이름이 온 대운하변 고딕 저택으로, 프란케티 미술관이 있습니다.', den='The Gothic palazzo on the Grand Canal named for its once-gilded façade, home to the Franchetti Gallery.', maps="Ca' d'Oro Venezia",
         visit=dict(min=0, max=0, s='https://www.cadoro.org/', n='미술관이 2026년 2월부터 복원·재단장으로 휴관 중이며 2027년 봄 재개관 예정입니다. 대운하 쪽 외관은 수상버스에서 봅니다.|The gallery has been closed for restoration and rearrangement since February 2026, due to reopen in spring 2027; see the façade from a vaporetto on the Grand Canal.', k='2026-10', z=True)),
    dict(ko='카레초니코', en="Ca' Rezzonico", dko='18세기 베네치아의 귀족 생활을 보여 주는 대운하변 바로크 저택 박물관입니다.', den='A Baroque palazzo on the Grand Canal showing 18th-century Venetian aristocratic life.', maps="Ca' Rezzonico",
         visit=dict(min=60, max=90, c='tue', s='https://carezzonico.visitmuve.it/', n='화요일에 쉬고 겨울(11~3월) 10:00~17:00, 여름 10:00~18:00에 엽니다. 무도회장은 복원 공사로 비계가 서 있어 천장화가 보이지 않습니다.|Closed on Tuesdays; open 10:00–17:00 in winter (Nov–Mar) and 10:00–18:00 in summer. The ballroom is under scaffolding for restoration, hiding its ceiling fresco.', k='2026-10')),
    dict(ko='콘타리니 델 보볼로 계단', en='Scala Contarini del Bovolo', dko='골목 안 저택에 숨은 나선형 아치 계단 탑으로, 꼭대기에서 지붕들이 내려다보입니다.', den='A spiral arcaded stair tower hidden in a courtyard, with a rooftop view from the top.', maps='Scala Contarini del Bovolo',
         visit=dict(min=20, max=30, s='https://www.gioiellinascostidivenezia.it/', n='매일 엽니다. 겨울(10월 말~2월) 9:30~17:30, 여름 10:00~18:00이고 12월 25·26일에 쉽니다. 예약은 권장 사항입니다.|Open daily: winter (late October–February) 9:30–17:30, summer 10:00–18:00; closed 25–26 December. Booking is advised but not required.', k='2026-10')),
    dict(ko='아쿠아 알타 서점', en='Libreria Acqua Alta', dko='침수에 대비해 책을 곤돌라와 욕조에 쌓아 둔 헌책방으로, 책으로 만든 계단이 유명합니다.', den='A second-hand bookshop that stores its books in gondolas and bathtubs against floods, famous for its staircase of books.', maps='Libreria Acqua Alta Venezia',
         visit=dict(min=15, max=30, n='좁은 가게라 한낮에는 줄을 서기도 합니다.|It is a small shop, so there can be a queue in the middle of the day.')),
]
MINOR = ['venice-h6', 'venice-h7', 'venice-h8', 'venice-h9']


def main():
    cities = rd('cities.ts')
    i = cities.find('id: "venice",')
    nxt = cities.find('\n  {\n    id: "', i + 10)
    for k, h in enumerate(SIGHTS):
        hid = f'venice-h{10 + k}'
        if f'"{hid}"' in cities:
            continue
        j = cities.rindex('\n', i, cities.rindex('],', i, nxt))
        sep = '' if cities[:j].rstrip().endswith(',') else ','
        cities = cities[:j] + sep + '\n' + hl_block(hid, f'/highlights/venice-{10 + k}.jpg', h) + ',' + cities[j:]
        nxt = cities.find('\n  {\n    id: "', i + 10)
        insert_after_line('visit-it.ts', r"^  'venice-h\d+': v\(.*\),\n", vline(hid, h['visit']))
        print('sight', hid)
    for hid in MINOR:
        a = cities.index(f'id: "{hid}",')
        b = cities.index('\n      }', a)
        if 'minor: true' not in cities[a:b]:
            cities = cities[:b] + '\n        minor: true,' + cities[b:]
    wr('cities.ts', cities)


if __name__ == '__main__':
    main()
