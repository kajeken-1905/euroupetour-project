# 클럽 엠블럼 사용 허락 받기

엠블럼은 저작권이 있는 그림이라, 자유 이용 파일이 없는 187개 클럽은 지금 이니셜 배지로 보여 줍니다.
클럽이 허락하면 그 클럽만 실제 엠블럼으로 바꿀 수 있습니다.

- 대상 목록: `crest-permission.csv` (경기장이 큰 클럽 순, 엑셀로 열림). 보낸 날·답변·허락 여부 칸에 기록하세요.
- 연락처: 목록의 공식 홈페이지에서 "Contact", "Press/Media", "Brand", "Partnerships" 메뉴를 찾으세요.
  큰 클럽은 문의 양식만 있는 경우가 많습니다.
- 메일은 직접 보내 주세요. 허락 답장(메일 원문)은 꼭 보관해 두세요.

---

## 메일 초안 (영어)

**Subject:** Permission request: displaying the [CLUB NAME] crest in a free travel guide

Dear [CLUB NAME] team,

I run *Europe Tour Guide* (https://kajeken-1905.github.io/euroupetour-project/), a free, non-commercial web app
that helps Korean travellers plan trips around Europe. Each city page lists the local top-division clubs with
their stadium, official website and stadium tour, so that visitors can go to a match or visit the ground.

We would like to show the [CLUB NAME] crest next to the club's name on our [CITY] page. It would be used only
to identify the club, at a small size (about 48 × 48 px), unaltered, with a link to your official website.
There is no advertising and nothing is sold through the app.

Could you let us know whether this is permitted, and whether you would like us to use a particular file or
follow brand guidelines? If you prefer that we do not use the crest, we will keep showing the club's name only.

Thank you for your time.

Kind regards,
[YOUR NAME]
[YOUR EMAIL]

---

## 메일 초안 (한국어, 한국 기업·기관용 또는 번역 참고용)

**제목:** 무료 여행 안내 앱에 [클럽 이름] 엠블럼 표시 허락 요청

안녕하세요, [클럽 이름] 담당자님.

저는 한국인 여행자를 위한 무료 비상업 웹앱 *Europe Tour Guide*
(https://kajeken-1905.github.io/euroupetour-project/)를 운영하고 있습니다. 각 도시 화면에서 그 도시의 1부 리그 클럽과
홈구장, 공식 홈페이지, 경기장 투어를 소개해 여행자가 경기 관람이나 경기장 방문을 계획할 수 있게 돕고 있습니다.

[도시] 화면의 클럽 이름 옆에 [클럽 이름] 엠블럼을 작은 크기(약 48×48픽셀)로, 변형 없이, 공식 홈페이지 링크와 함께
표시하고자 합니다. 클럽을 알아보게 하는 용도로만 쓰며, 앱에는 광고나 판매가 없습니다.

사용이 가능한지, 그리고 사용해야 할 파일이나 브랜드 지침이 있는지 알려 주시면 감사하겠습니다.
원하지 않으시면 지금처럼 클럽 이름만 표시하겠습니다.

감사합니다.
[이름]
[이메일]

---

## 허락을 받은 뒤 반영하는 방법 (Claude에게 맡겨도 됩니다)

1. 클럽이 준 파일(또는 지정한 파일)을 128px 이하 PNG로 줄여 `public/crests/<wikidata id 소문자>.png`로 저장합니다.
   Wikidata id는 목록의 `Wikidata` 칸입니다(예: Q8682 → `q8682.png`).
2. `crests.json`에 한 줄을 추가합니다:
   `"Q8682": { "license": "permission", "author": "", "source": "<클럽 공식 홈페이지>" }`
3. `cd scripts/football && python3 gen_ts.py ../../src/data/football.ts` 후 평소처럼 빌드·배포합니다.
   카드에는 "엠블럼: 클럽의 허락을 받아 사용"으로 표시됩니다.
