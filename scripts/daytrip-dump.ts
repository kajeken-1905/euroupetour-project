// Dumps every day trip with its target town's sights and their checked visit facts, for checking the tips.
import { DAY_TRIPS } from '../src/data/day-trips'
import { cities } from '../src/data/cities'
import { getHighlightVisit } from '../src/data/visit'
const W: Record<string, string> = { mon: '월', tue: '화', wed: '수', thu: '목', fri: '금', sat: '토', sun: '일', daily: '매일' }
for (const [base, trips] of Object.entries(DAY_TRIPS)) {
  for (const trip of trips) {
    const city = cities.find((c) => c.id === trip.to)
    console.log(`## ${base} → ${trip.to}${city ? '' : ' [도시 없음]'}`)
    console.log(`  TIP ${trip.tip.split('|')[0]}`)
    if (trip.how) console.log(`  HOW ${trip.how.split('|')[0]}`)
    for (const h of city?.highlights ?? []) {
      const v = getHighlightVisit(h.id)
      const bits = [
        v?.closed ? `휴:${v.closed.split(',').map((d) => W[d] ?? d).join('')}` : '',
        v?.booking && v.booking !== 'none' ? `예약:${v.booking === 'required' ? '필수' : '권장'}` : '',
        v?.checked ? `✓${v.checked}` : '',
        v?.shut ? '장기휴관' : '',
        ...(v?.notices ?? []).map((n) => `공지:${n.text.ko}~${n.until}`),
      ].filter(Boolean)
      console.log(`    - ${h.name.ko}${bits.length ? ' [' + bits.join(' ') + ']' : ''}`)
    }
  }
}
