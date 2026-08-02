import type { Lang } from '../types'

export type ChatRole = 'system' | 'user' | 'assistant'

export type ChatMessage = {
  role: ChatRole
  content: string
}

type OpenAIChatResponse = {
  choices?: Array<{ message?: { content?: string | null } }>
  error?: { message?: string }
}

function getApiKey(): string {
  return (import.meta.env.VITE_OPENAI_API_KEY as string | undefined)?.trim() ?? ''
}

function getModel(): string {
  return (import.meta.env.VITE_OPENAI_MODEL as string | undefined)?.trim() || 'gpt-4o-mini'
}

export function hasOpenAIKey(): boolean {
  return getApiKey().length > 0
}

export function buildSystemPrompt(lang: Lang): string {
  const languageLine =
    lang === 'ko'
      ? 'Respond primarily in Korean. You may keep place names in their local form.'
      : 'Respond primarily in English. You may keep place names in their local form.'

  return [
    'You are the travel assistant for “My Vacation Plan”, a Europe trip checklist and city guide web app.',
    'Help with countries, cities, itineraries, packing, Schengen basics, and practical tips.',
    'Be concise, friendly, and actionable. Prefer short bullet lists when helpful.',
    'If unsure, say so and suggest verifying on official sources or Google Maps.',
    'Do not invent real-time prices, opening hours, or visa rules as facts—give general guidance and caveats.',
    languageLine,
  ].join(' ')
}

export async function sendChatCompletion(
  history: ChatMessage[],
  lang: Lang,
): Promise<string> {
  const apiKey = getApiKey()
  if (!apiKey) {
    throw new Error('MISSING_API_KEY')
  }

  const messages: ChatMessage[] = [
    { role: 'system', content: buildSystemPrompt(lang) },
    ...history.filter((m) => m.role === 'user' || m.role === 'assistant'),
  ]

  let response: Response
  try {
    response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: getModel(),
        messages,
        temperature: 0.6,
      }),
    })
  } catch {
    throw new Error('NETWORK_ERROR')
  }

  let data: OpenAIChatResponse
  try {
    data = (await response.json()) as OpenAIChatResponse
  } catch {
    throw new Error('BAD_RESPONSE')
  }

  if (!response.ok) {
    if (response.status === 401) throw new Error('UNAUTHORIZED')
    if (response.status === 429) throw new Error('RATE_LIMIT')
    const msg = data.error?.message?.trim()
    throw new Error(msg ? `API_ERROR:${msg}` : `HTTP_${response.status}`)
  }

  const content = data.choices?.[0]?.message?.content?.trim()
  if (!content) throw new Error('EMPTY_RESPONSE')
  return content
}
