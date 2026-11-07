#!/usr/bin/env python3
"""Italy re-review of Florence and Rome (user request 2026-11-07).
Florence: Giotto's Campanile, Brancacci Chapel, Museo Galileo, Santo Spirito, Chianti wine day trip; the list is now
grouped by district (Florence had no district headers). Rome: Appian Way & catacombs, St John Lateran, Jewish Ghetto,
Aventine keyhole & Orange Garden, Capuchin Crypt, slotted into the existing district groups. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
F_DUOMO = ('두오모와 산 로렌초', 'Duomo & San Lorenzo')
F_SIG = ('시뇨리아와 산타 크로체', 'Signoria & Santa Croce')
F_OLTR = ('올트라르노 (아르노강 건너편)', 'Oltrarno (across the Arno)')
R_ANC = ('고대 로마', 'Ancient Rome')
R_PAN = ('판테온과 나보나', 'Pantheon & Navona')
R_TREVI = ('트레비·스페인 광장과 보르게세', 'Trevi, Spanish Steps & Borghese')
R_TERM = ('테르미니 주변', 'Around Termini')
R_APP = ('아피아 가도', 'Appian Way')
ADD = {
 'florence': [
  (20, S('조토의 종탑', 'Giotto’s Campanile', '대성당 옆 84m 대리석 종탑으로, 계단 414개를 올라 돔을 정면으로 봅니다.', 'The 84 m marble bell tower beside the cathedral—climb its 414 steps for a face-on view of the dome.', 'Campanile di Giotto', 45, 60, b='rec',
         n='대성당 통합권으로 들어가고 시간 지정 예약이 필요할 수 있습니다.|Entry is on the cathedral combined ticket, which may require a timed booking.')),
  (21, S('브란카치 예배당', 'Brancacci Chapel', '마사초의 ‘낙원 추방’ 등 르네상스 회화의 출발점이 된 프레스코가 있는 예배당입니다.', 'The chapel whose frescoes, including Masaccio’s Expulsion from Eden, launched Renaissance painting.', 'Cappella Brancacci', 45, 60, b='rec')),
  (22, S('갈릴레오 박물관', 'Museo Galileo', '갈릴레오의 망원경과 메디치 가문의 과학 기구를 모은 박물관입니다.', 'Galileo’s telescopes and the Medici collection of scientific instruments.', 'Museo Galileo', 60, 90)),
  (23, S('산토 스피리토 성당과 광장', 'Santo Spirito', '브루넬레스키가 설계한 성당과, 노천카페와 시장이 있는 올트라르노의 동네 광장입니다.', 'Brunelleschi’s church and the Oltrarno neighbourhood square of café terraces and markets.', 'Basilica di Santo Spirito', 30, 60)),
  (24, S('키안티 와인 마을', 'Chianti wine country', '피렌체와 시에나 사이 포도밭 언덕으로, 그레베 인 키안티 등 마을과 와이너리에서 시음합니다.', 'The vineyard hills between Florence and Siena—villages such as Greve in Chianti and wineries with tastings.', 'Greve in Chianti', 300, 480, group=DAY,
         n='피렌체에서 버스로 그레베까지 약 1시간이고, 와이너리는 차나 투어가 편합니다.|About 1 hr by bus from Florence to Greve; a car or tour is easiest for the wineries.')),
 ],
 'rome': [
  (29, S('아피아 가도와 카타콤베', 'Appian Way & catacombs', '로마 시대 돌길이 남은 옛 가도로, 산 칼리스토·산 세바스티아노 지하 묘지를 안내 투어로 봅니다.', 'The ancient road with its Roman paving intact, and the San Callisto and San Sebastiano catacombs seen on guided tours.', 'Catacombe di San Callisto', 180, 240, group=R_APP,
         n='일요일엔 가도 일부가 차 없는 길이 되어 자전거로 다니기 좋습니다. 카타콤베마다 쉬는 요일이 다릅니다.|On Sundays part of the road is car-free and good for cycling; each catacomb closes on a different weekday.')),
  (30, S('산 조반니 인 라테라노 대성당', 'Archbasilica of St John Lateran', '교황청 첫 대성당으로, 로마 교구의 주교좌 성당입니다. 맞은편에 성 계단이 있습니다.', 'The first papal basilica and the cathedral of Rome, with the Holy Stairs opposite.', 'Basilica di San Giovanni in Laterano', 45, 60, group=R_TERM)),
  (31, S('유대인 게토', 'Jewish Ghetto', '옥타비아 회랑 유적과 대회당, 유대식 튀김 요리 식당이 모인 옛 동네입니다.', 'The old quarter around the Portico of Octavia, with the Great Synagogue and Roman-Jewish fried-food restaurants.', 'Portico di Ottavia', 45, 60, group=R_PAN)),
  (32, S('아벤티노 열쇠 구멍과 오렌지 정원', 'Aventine keyhole & Orange Garden', '몰타 기사단 정원 문 열쇠 구멍으로 성 베드로 대성당 돔이 보이고, 옆 오렌지 정원에서 시내가 내려다보입니다.', 'Peek through the Knights of Malta keyhole to see St Peter’s dome, then take in the city from the Orange Garden next door.', 'Buco della Serratura Aventino', 30, 45, group=R_ANC)),
  (33, S('카푸친 지하 납골당', 'Capuchin Crypt', '수도사 4,000명의 유골로 장식한 방들이 이어지는 납골당입니다.', 'Chapels decorated with the bones of some 4,000 friars.', 'Cripta dei Cappuccini', 30, 45, group=R_TREVI)),
 ],
}
F_GROUPS = [(F_DUOMO, [1, 8, 20, 17, 15, 9, 5, 7]), (F_SIG, [18, 6, 2, 22, 13, 14]), (F_OLTR, [3, 11, 12, 23, 21, 16, 4]), (DAY, [19, 24])]
R_AFTER = {32: 23, 30: 14, 31: 26, 33: 18, 29: 24}
IT = [
 ("      ['두오모와 메디치|Duomo & the Medici', 7, 15, 9, 5, 1, 8, 17],\n      ['시뇨리아와 우피치|Signoria & the Uffizi', 18, 6, 2, 13, 14],\n      ['아르노강 건너편|Across the Arno', 3, 11, 12, 16, 4],\n    ],\n    trips: [['피에솔레|Fiesole', 19]],",
  "      ['두오모와 메디치|Duomo & the Medici', 7, 15, 9, 5, 1, 8, 20, 17],\n      ['시뇨리아와 우피치|Signoria & the Uffizi', 18, 6, 2, 22, 13, 14],\n      ['아르노강 건너편|Across the Arno', 3, 11, 12, 23, 21, 16, 4],\n    ],\n    trips: [['피에솔레|Fiesole', 19], ['키안티|Chianti', 24]],"),
 ("      ['고대 로마|Ancient Rome', 1, 19, 6, 20, 21, 11, 23],\n      ['바티칸에서 판테온까지|The Vatican to the Pantheon', 2, 25, 8, 10, 9, 26, 4, 27],\n    ],\n    trips: [['티볼리|Tivoli', 12], ['오스티아 안티카|Ostia Antica', 13]],",
  "      ['고대 로마|Ancient Rome', 1, 19, 6, 20, 21, 11, 23, 32],\n      ['바티칸에서 판테온까지|The Vatican to the Pantheon', 2, 25, 8, 10, 9, 26, 31, 4, 27, 24],\n      ['아피아 가도와 라테라노|Appian Way & the Lateran', 30, 28, 29],\n    ],\n    trips: [['티볼리|Tivoli', 12], ['오스티아 안티카|Ostia Antica', 13]],"),
]


def main():
    c = rd('cities.ts')
    c = add_sights(c, 'florence', ADD['florence'], 'visit-it.ts')
    c = reorder(c, 'florence', [(n, g) for g, ns in F_GROUPS for n in ns])
    old = list(blocks(c, 'rome'))
    c = add_sights(c, 'rome', ADD['rome'], 'visit-it.ts')
    by = blocks(c, 'rome')
    order = []
    for n in old:
        order.append(n)
        order += [k for k, after in R_AFTER.items() if after == n]
    assert sorted(order) == sorted(by), order
    c = reorder(c, 'rome', [(n, read_group(by[n])) for n in order])
    wr('cities.ts', c)
    it = rd('itinerary-it.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-it.ts', it)


if __name__ == '__main__':
    main()
