#!/usr/bin/env python3
"""The Mall Firenze as a Florence day-trip sight (2026-10-31, user request). Facts from firenze.themall.it that day.
Reuses add_daytrip_places4.py (sight block, visit line and itinerary trip). Run once."""
import add_daytrip_places4 as B

B.SIGHTS = [
    ('florence', 'visit-it.ts', 'itinerary-it.ts', '더몰 아울렛|The Mall outlet', dict(
        ko='더몰 럭셔리 아울렛', en='The Mall Luxury Outlets', dko='피렌체 남동쪽 레초 마을에 있는 명품 아울렛으로 구찌·생로랑·보테가 베네타 등 이탈리아·해외 명품 브랜드가 모여 있습니다.', den='A luxury outlet village at Leccio, south-east of Florence, gathering Gucci, Saint Laurent, Bottega Veneta and other Italian and international labels.', maps='The Mall Firenze Leccio Reggello',
        visit=dict(min=180, max=240, c='daily', s='https://firenze.themall.it/en/visit-us/', t='https://themall.busitaliashop.it/en/', n='매일 10:00~19:00에 엽니다. 피렌체 피아찰레 몬텔룽고(산타 마리아 노벨라역 북쪽)에서 직행 셔틀버스가 8:40~17:00에 하루 11편, 돌아오는 차는 19:20이 막차이며 표는 Busitalia 온라인 판매처에서 삽니다. 면세 환급 라운지가 있습니다.|Open daily 10:00–19:00. A direct shuttle runs from Piazzale Montelungo (north of Santa Maria Novella station) 11 times a day from 8:40 to 17:00, last bus back 19:20; buy tickets from the Busitalia online shop. There is a tax-free lounge.', k='2026-10'))),
]

if __name__ == '__main__':
    B.main()
