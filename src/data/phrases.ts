export type PhraseId =
  | 'morning'
  | 'hello'
  | 'excuse'
  | 'thanks'
  | 'howMuch'

export interface PhraseLine {
  id: PhraseId
  ko: string
  native: string
}

export interface CountryPhrases {
  languageLabel: { ko: string; en: string }
  /** BCP-47 codes to try for speechSynthesis (first match wins) */
  speechLangs: string[]
  lines: PhraseLine[]
}

const PHRASE_ORDER: PhraseId[] = ['morning', 'hello', 'excuse', 'thanks', 'howMuch']

const KO_LABELS: Record<PhraseId, string> = {
  morning: '아침 인사',
  hello: '인사',
  excuse: '실례합니다.',
  thanks: '감사합니다.',
  howMuch: '얼마예요?',
}

function lines(native: Record<PhraseId, string>): PhraseLine[] {
  return PHRASE_ORDER.map((id) => ({
    id,
    ko: KO_LABELS[id],
    native: native[id],
  }))
}

/** 국가별 간단 회화 (한글 + 현지 언어) */
export const countryPhrases: Record<string, CountryPhrases> = {
  uk: {
    languageLabel: { ko: '영어', en: 'English' },
    speechLangs: ['en-GB', 'en-US', 'en'],
    lines: lines({
      morning: 'Good morning',
      hello: 'Hello',
      excuse: 'Excuse me',
      thanks: 'Thank you',
      howMuch: 'How much is it?',
    }),
  },
  nl: {
    languageLabel: { ko: '네덜란드어', en: 'Dutch' },
    speechLangs: ['nl-NL', 'nl-BE', 'nl'],
    lines: lines({
      morning: 'Goedemorgen',
      hello: 'Hallo',
      excuse: 'Pardon',
      thanks: 'Dank u wel',
      howMuch: 'Hoeveel kost het?',
    }),
  },
  lu: {
    languageLabel: { ko: '룩셈부르크어', en: 'Luxembourgish' },
    // lb voices are rare — fall back to French / German
    speechLangs: ['lb', 'lb-LU', 'fr-FR', 'fr-LU', 'de-LU', 'de-DE'],
    lines: lines({
      morning: 'Gudde Moien',
      hello: 'Moien',
      excuse: 'Entschëllegt',
      thanks: 'Merci',
      howMuch: 'Wéi vill kascht dat?',
    }),
  },
  be: {
    languageLabel: { ko: '네덜란드어 (벨기에)', en: 'Dutch (Belgium)' },
    speechLangs: ['nl-BE', 'nl-NL', 'nl'],
    lines: lines({
      morning: 'Goedemorgen',
      hello: 'Hallo',
      excuse: 'Pardon',
      thanks: 'Dank u wel',
      howMuch: 'Hoeveel kost het?',
    }),
  },
  no: {
    languageLabel: { ko: '노르웨이어', en: 'Norwegian' },
    speechLangs: ['nb-NO', 'nn-NO', 'no', 'nb'],
    lines: lines({
      morning: 'God morgen',
      hello: 'Hei',
      excuse: 'Unnskyld',
      thanks: 'Takk',
      howMuch: 'Hvor mye koster det?',
    }),
  },
  fi: {
    languageLabel: { ko: '핀란드어', en: 'Finnish' },
    speechLangs: ['fi-FI', 'fi'],
    lines: lines({
      morning: 'Hyvää huomenta',
      hello: 'Hei',
      excuse: 'Anteeksi',
      thanks: 'Kiitos',
      howMuch: 'Paljonko tämä maksaa?',
    }),
  },
  se: {
    languageLabel: { ko: '스웨덴어', en: 'Swedish' },
    speechLangs: ['sv-SE', 'sv'],
    lines: lines({
      morning: 'God morgon',
      hello: 'Hej',
      excuse: 'Ursäkta',
      thanks: 'Tack',
      howMuch: 'Hur mycket kostar det?',
    }),
  },
  dk: {
    languageLabel: { ko: '덴마크어', en: 'Danish' },
    speechLangs: ['da-DK', 'da'],
    lines: lines({
      morning: 'Godmorgen',
      hello: 'Hej',
      excuse: 'Undskyld',
      thanks: 'Tak',
      howMuch: 'Hvor meget koster det?',
    }),
  },
  at: {
    languageLabel: { ko: '독일어', en: 'German' },
    speechLangs: ['de-AT', 'de-DE', 'de'],
    lines: lines({
      morning: 'Guten Morgen',
      hello: 'Hallo',
      excuse: 'Entschuldigung',
      thanks: 'Danke',
      howMuch: 'Was kostet das?',
    }),
  },
  hu: {
    languageLabel: { ko: '헝가리어', en: 'Hungarian' },
    speechLangs: ['hu-HU', 'hu'],
    lines: lines({
      morning: 'Jó reggelt',
      hello: 'Szia',
      excuse: 'Elnézést',
      thanks: 'Köszönöm',
      howMuch: 'Mennyibe kerül?',
    }),
  },
  cz: {
    languageLabel: { ko: '체코어', en: 'Czech' },
    speechLangs: ['cs-CZ', 'cs'],
    lines: lines({
      morning: 'Dobré ráno',
      hello: 'Ahoj',
      excuse: 'Promiňte',
      thanks: 'Děkuji',
      howMuch: 'Kolik to stojí?',
    }),
  },
  fr: {
    languageLabel: { ko: '프랑스어', en: 'French' },
    speechLangs: ['fr-FR', 'fr'],
    lines: lines({
      morning: 'Bonjour',
      hello: 'Salut',
      excuse: 'Excusez-moi',
      thanks: 'Merci',
      howMuch: 'Combien ça coûte ?',
    }),
  },
  ch: {
    languageLabel: { ko: '독일어·프랑스어', en: 'German / French' },
    speechLangs: ['de-CH', 'de-DE', 'fr-CH', 'fr-FR'],
    lines: lines({
      morning: 'Guten Morgen',
      hello: 'Grüezi',
      excuse: 'Entschuldigung',
      thanks: 'Danke',
      howMuch: 'Was kostet das?',
    }),
  },
  de: {
    languageLabel: { ko: '독일어', en: 'German' },
    speechLangs: ['de-DE', 'de'],
    lines: lines({
      morning: 'Guten Morgen',
      hello: 'Hallo',
      excuse: 'Entschuldigung',
      thanks: 'Danke',
      howMuch: 'Was kostet das?',
    }),
  },
  it: {
    languageLabel: { ko: '이탈리아어', en: 'Italian' },
    speechLangs: ['it-IT', 'it'],
    lines: lines({
      morning: 'Buongiorno',
      hello: 'Ciao',
      excuse: 'Mi scusi',
      thanks: 'Grazie',
      howMuch: 'Quanto costa?',
    }),
  },
  es: {
    languageLabel: { ko: '스페인어', en: 'Spanish' },
    speechLangs: ['es-ES', 'es'],
    lines: lines({
      morning: 'Buenos días',
      hello: 'Hola',
      excuse: 'Perdón',
      thanks: 'Gracias',
      howMuch: '¿Cuánto cuesta?',
    }),
  },
  pt: {
    languageLabel: { ko: '포르투갈어', en: 'Portuguese' },
    speechLangs: ['pt-PT', 'pt'],
    lines: lines({
      morning: 'Bom dia',
      hello: 'Olá',
      excuse: 'Com licença',
      thanks: 'Obrigado',
      howMuch: 'Quanto custa?',
    }),
  },
  gr: {
    languageLabel: { ko: '그리스어', en: 'Greek' },
    speechLangs: ['el-GR', 'el'],
    lines: lines({
      morning: 'Καλημέρα',
      hello: 'Γεια σας',
      excuse: 'Συγνώμη',
      thanks: 'Ευχαριστώ',
      howMuch: 'Πόσο κοστίζει;',
    }),
  },
  pl: {
    languageLabel: { ko: '폴란드어', en: 'Polish' },
    speechLangs: ['pl-PL', 'pl'],
    lines: lines({
      morning: 'Dzień dobry',
      hello: 'Cześć',
      excuse: 'Przepraszam',
      thanks: 'Dziękuję',
      howMuch: 'Ile to kosztuje?',
    }),
  },
  hr: {
    languageLabel: { ko: '크로아티아어', en: 'Croatian' },
    speechLangs: ['hr-HR', 'hr'],
    lines: lines({
      morning: 'Dobro jutro',
      hello: 'Bok',
      excuse: 'Oprostite',
      thanks: 'Hvala',
      howMuch: 'Koliko košta?',
    }),
  },
  ie: {
    languageLabel: { ko: '영어(아일랜드)', en: 'English (Ireland)' },
    speechLangs: ['en-IE', 'en-GB', 'en'],
    lines: lines({
      morning: 'Good morning',
      hello: 'Hello',
      excuse: 'Excuse me',
      thanks: 'Thank you',
      howMuch: 'How much is it?',
    }),
  },
  is: {
    languageLabel: { ko: '아이슬란드어', en: 'Icelandic' },
    speechLangs: ['is-IS', 'is'],
    lines: lines({
      morning: 'Góðan daginn',
      hello: 'Halló',
      excuse: 'Afsakið',
      thanks: 'Takk',
      howMuch: 'Hvað kostar þetta?',
    }),
  },
  tr: {
    languageLabel: { ko: '튀르키예어', en: 'Turkish' },
    speechLangs: ['tr-TR', 'tr'],
    lines: lines({
      morning: 'Günaydın',
      hello: 'Merhaba',
      excuse: 'Affedersiniz',
      thanks: 'Teşekkürler',
      howMuch: 'Ne kadar?',
    }),
  },
  bg: {
    languageLabel: { ko: '불가리아어', en: 'Bulgarian' },
    speechLangs: ['bg-BG', 'bg'],
    lines: lines({
      morning: 'Добро утро',
      hello: 'Здравей',
      excuse: 'Извинете',
      thanks: 'Благодаря',
      howMuch: 'Колко струва?',
    }),
  },
  ro: {
    languageLabel: { ko: '루마니아어', en: 'Romanian' },
    speechLangs: ['ro-RO', 'ro'],
    lines: lines({
      morning: 'Bună dimineața',
      hello: 'Bună',
      excuse: 'Scuzați-mă',
      thanks: 'Mulțumesc',
      howMuch: 'Cât costă?',
    }),
  },
  mc: {
    languageLabel: { ko: '프랑스어', en: 'French' },
    speechLangs: ['fr-FR', 'fr'],
    lines: lines({
      morning: 'Bonjour',
      hello: 'Bonjour',
      excuse: 'Excusez-moi',
      thanks: 'Merci',
      howMuch: 'Combien ça coûte ?',
    }),
  },
  va: {
    languageLabel: { ko: '이탈리아어', en: 'Italian' },
    speechLangs: ['it-IT', 'it'],
    lines: lines({
      morning: 'Buongiorno',
      hello: 'Ciao',
      excuse: 'Mi scusi',
      thanks: 'Grazie',
      howMuch: 'Quanto costa?',
    }),
  },
  ad: {
    languageLabel: { ko: '카탈루냐어', en: 'Catalan' },
    speechLangs: ['ca-ES', 'ca', 'es-ES'],
    lines: lines({
      morning: 'Bon dia',
      hello: 'Hola',
      excuse: 'Perdó',
      thanks: 'Gràcies',
      howMuch: 'Quant val?',
    }),
  },
  li: {
    languageLabel: { ko: '독일어', en: 'German' },
    speechLangs: ['de-LI', 'de-DE', 'de'],
    lines: lines({
      morning: 'Guten Morgen',
      hello: 'Hallo',
      excuse: 'Entschuldigung',
      thanks: 'Danke',
      howMuch: 'Was kostet das?',
    }),
  },
  sk: {
    languageLabel: { ko: '슬로바키아어', en: 'Slovak' },
    speechLangs: ['sk-SK', 'sk'],
    lines: lines({
      morning: 'Dobré ráno',
      hello: 'Ahoj',
      excuse: 'Prepáčte',
      thanks: 'Ďakujem',
      howMuch: 'Koľko to stojí?',
    }),
  },
  si: {
    languageLabel: { ko: '슬로베니아어', en: 'Slovenian' },
    speechLangs: ['sl-SI', 'sl'],
    lines: lines({
      morning: 'Dobro jutro',
      hello: 'Živjo',
      excuse: 'Oprostite',
      thanks: 'Hvala',
      howMuch: 'Koliko stane?',
    }),
  },
  ba: {
    languageLabel: { ko: '보스니아어', en: 'Bosnian' },
    speechLangs: ['bs-BA', 'hr-HR', 'sr-RS'],
    lines: lines({
      morning: 'Dobro jutro',
      hello: 'Zdravo',
      excuse: 'Izvinite',
      thanks: 'Hvala',
      howMuch: 'Koliko košta?',
    }),
  },
  me: {
    languageLabel: { ko: '몬테네그로어', en: 'Montenegrin' },
    speechLangs: ['sr-RS', 'hr-HR', 'sr'],
    lines: lines({
      morning: 'Dobro jutro',
      hello: 'Zdravo',
      excuse: 'Izvinite',
      thanks: 'Hvala',
      howMuch: 'Koliko košta?',
    }),
  },
  rs: {
    languageLabel: { ko: '세르비아어', en: 'Serbian' },
    speechLangs: ['sr-RS', 'sr'],
    lines: lines({
      morning: 'Dobro jutro',
      hello: 'Zdravo',
      excuse: 'Izvinite',
      thanks: 'Hvala',
      howMuch: 'Koliko košta?',
    }),
  },
}

export function getCountryPhrases(countryId: string): CountryPhrases | undefined {
  return countryPhrases[countryId]
}
