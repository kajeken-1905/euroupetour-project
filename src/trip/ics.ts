/** A city plan as an iCalendar file: one all-day event per day, stops and a directions link in the notes. */
export interface IcsDay {
  summary: string
  stops: string[]
  directions?: string
}

const escape = (s: string) => s.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n')

/** Lines longer than 75 bytes are folded with CRLF + space, never splitting a character. */
function fold(line: string) {
  const enc = new TextEncoder()
  const parts: string[] = []
  let current = ''
  for (const ch of line) {
    if (enc.encode(current + ch).length > (parts.length ? 74 : 75)) {
      parts.push(current)
      current = ch
    } else current += ch
  }
  parts.push(current)
  return parts.join('\r\n ')
}

const ymd = (d: Date) => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`

export function planIcs(start: Date, days: IcsDay[]) {
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '')
  const id = Math.random().toString(36).slice(2)
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//My Vacation Plan//Europe Tour//KO', 'CALSCALE:GREGORIAN']
  days.forEach((day, i) => {
    const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
    const next = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i + 1)
    const notes = [day.stops.join(' → '), day.directions ?? ''].filter(Boolean).join('\n')
    lines.push(
      'BEGIN:VEVENT',
      `UID:${id}-${i}@europe-tour`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${ymd(date)}`,
      `DTEND;VALUE=DATE:${ymd(next)}`,
      `SUMMARY:${escape(day.summary)}`,
      ...(notes ? [`DESCRIPTION:${escape(notes)}`] : []),
      'END:VEVENT',
    )
  })
  lines.push('END:VCALENDAR')
  return lines.map(fold).join('\r\n') + '\r\n'
}

/** Hands the file to the browser; on phones this usually offers "Add to Calendar". */
export function downloadIcs(filename: string, body: string) {
  const url = URL.createObjectURL(new Blob([body], { type: 'text/calendar;charset=utf-8' }))
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
