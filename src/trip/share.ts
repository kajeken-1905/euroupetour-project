import type { PlanDay } from './store'

/**
 * A plan or a route packed into the link itself (after `#`, so it never reaches a server): no account,
 * no storage, nothing collected. Stop ids drop their city prefix to keep the link short.
 */
export type Shared = { kind: 'plan'; cityId: string; days: PlanDay[] } | { kind: 'route'; route: string[] }

type Packed = { v: 1; c: string; d: [string, ...string[]][] } | { v: 1; r: string[] }

function toBase64Url(text: string) {
  const bytes = new TextEncoder().encode(text)
  let binary = ''
  bytes.forEach((b) => (binary += String.fromCharCode(b)))
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function fromBase64Url(code: string) {
  const binary = atob(code.replace(/-/g, '+').replace(/_/g, '/'))
  return new TextDecoder().decode(Uint8Array.from(binary, (c) => c.charCodeAt(0)))
}

export function encodeShare(shared: Shared): string {
  if (shared.kind === 'route') return toBase64Url(JSON.stringify({ v: 1, r: shared.route } satisfies Packed))
  const prefix = `${shared.cityId}-`
  const d = shared.days.map((day): [string, ...string[]] => [
    day.title ? `${day.title.ko}|${day.title.en}` : '',
    ...day.stops.map((id) => (id.startsWith(prefix) ? id.slice(prefix.length) : `!${id}`)),
  ])
  return toBase64Url(JSON.stringify({ v: 1, c: shared.cityId, d } satisfies Packed))
}

/** Undo encodeShare; anything malformed comes back undefined rather than half-read. */
export function decodeShare(code: string): Shared | undefined {
  try {
    const raw = JSON.parse(fromBase64Url(code)) as Record<string, unknown>
    const strings = (v: unknown) => Array.isArray(v) && v.every((s) => typeof s === 'string')
    if (raw.v !== 1) return undefined
    if (strings(raw.r)) return { kind: 'route', route: raw.r as string[] }
    if (typeof raw.c !== 'string' || !Array.isArray(raw.d) || !raw.d.every(strings)) return undefined
    const cityId = raw.c
    const days = (raw.d as string[][]).map(([title, ...stops]): PlanDay => {
      const [ko, en] = (title ?? '').split('|')
      return {
        ...(ko && en ? { title: { ko, en } } : {}),
        stops: stops.map((s) => (s.startsWith('!') ? s.slice(1) : `${cityId}-${s}`)),
      }
    })
    return { kind: 'plan', cityId, days }
  } catch {
    return undefined
  }
}

/** The app's own address for a shared plan or route. */
export function shareUrl(shared: Shared): string {
  return `${location.origin}${import.meta.env.BASE_URL.replace(/\/$/, '')}/share#${encodeShare(shared)}`
}

/** Hand text and a link to the phone's share sheet, or copy them when there is none. Resolves to what happened. */
export async function shareOut(title: string, text: string, url: string): Promise<'shared' | 'copied' | 'failed'> {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url })
      return 'shared'
    } catch (e) {
      if ((e as Error).name === 'AbortError') return 'failed'
    }
  }
  try {
    await navigator.clipboard.writeText(`${text}\n${url}`)
    return 'copied'
  } catch {
    return 'failed'
  }
}

/** Copy only the text (with the link at the end) for pasting into a chat. */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}
