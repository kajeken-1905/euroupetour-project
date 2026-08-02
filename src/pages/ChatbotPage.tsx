import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { LanguageToggle } from '../components/LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import {
  hasOpenAIKey,
  sendChatCompletion,
  type ChatMessage,
} from '../services/openaiChat'

type UiMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

function errorMessage(code: string, lang: 'ko' | 'en'): string {
  if (code === 'MISSING_API_KEY') return t('chatbotMissingKey', lang)
  if (code === 'UNAUTHORIZED') return t('chatbotUnauthorized', lang)
  if (code === 'RATE_LIMIT') return t('chatbotRateLimit', lang)
  if (code === 'NETWORK_ERROR') return t('chatbotNetworkError', lang)
  if (code.startsWith('API_ERROR:')) return code.slice('API_ERROR:'.length)
  return t('chatbotGenericError', lang)
}

export function ChatbotPage() {
  const { lang } = useLanguage()
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [messages, setMessages] = useState<UiMessage[]>([])
  const listRef = useRef<HTMLDivElement>(null)
  const keyReady = hasOpenAIKey()

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [messages, busy])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const text = input.trim()
    if (!text || busy) return

    const userMsg: UiMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text,
    }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setBusy(true)

    try {
      const history: ChatMessage[] = next.map((m) => ({
        role: m.role,
        content: m.content,
      }))
      const reply = await sendChatCompletion(history, lang)
      setMessages((prev) => [
        ...prev,
        { id: `a-${Date.now()}`, role: 'assistant', content: reply },
      ])
    } catch (err) {
      const code = err instanceof Error ? err.message : 'UNKNOWN'
      setMessages((prev) => [
        ...prev,
        {
          id: `e-${Date.now()}`,
          role: 'assistant',
          content: errorMessage(code, lang),
        },
      ])
    } finally {
      setBusy(false)
    }
  }

  function handleClose() {
    if (window.history.length > 1) navigate(-1)
    else navigate('/')
  }

  return (
    <div className="chatbot-page">
      <header className="chatbot-header">
        <div className="chatbot-header-main">
          <button type="button" className="chatbot-close" onClick={handleClose}>
            ✕
          </button>
          <div>
            <p className="chatbot-kicker">{t('chatbotPopupLabel', lang)}</p>
            <h1>{t('chatbot', lang)}</h1>
          </div>
        </div>
        <LanguageToggle />
      </header>

      {!keyReady && (
        <p className="chatbot-banner" role="status">
          {t('chatbotMissingKey', lang)}
        </p>
      )}

      <div className="chatbot-messages" ref={listRef}>
        {messages.length === 0 && (
          <div className="chatbot-empty">
            <p>{t('chatbotEmpty', lang)}</p>
            <ul>
              <li>{t('chatbotHint1', lang)}</li>
              <li>{t('chatbotHint2', lang)}</li>
              <li>{t('chatbotHint3', lang)}</li>
            </ul>
          </div>
        )}
        {messages.map((m) => (
          <div
            key={m.id}
            className={`chatbot-bubble chatbot-bubble-${m.role}`}
          >
            {m.content}
          </div>
        ))}
        {busy && (
          <div className="chatbot-bubble chatbot-bubble-assistant chatbot-typing">
            {t('chatbotThinking', lang)}
          </div>
        )}
      </div>

      <form className="chatbot-composer" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('chatbotPlaceholder', lang)}
          disabled={busy}
          aria-label={t('chatbotPlaceholder', lang)}
        />
        <button type="submit" disabled={busy || !input.trim()}>
          {t('chatbotSend', lang)}
        </button>
      </form>
    </div>
  )
}
