#!/usr/bin/env python3
"""Generate native neural TTS audio for country phrase lines (edge-tts)."""

from __future__ import annotations

import asyncio
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "phrases"

# One neural voice per country (native locale where possible)
VOICES: dict[str, str] = {
    "uk": "en-GB-SoniaNeural",
    "nl": "nl-NL-FennaNeural",
    "lu": "de-DE-KatjaNeural",  # no lb voice; Luxembourgish ≈ Moselle Franconian
    "be": "nl-BE-DenaNeural",
    "no": "nb-NO-PernilleNeural",
    "fi": "fi-FI-NooraNeural",
    "se": "sv-SE-SofieNeural",
    "dk": "da-DK-ChristelNeural",
    "at": "de-AT-IngridNeural",
    "hu": "hu-HU-NoemiNeural",
    "cz": "cs-CZ-VlastaNeural",
    "fr": "fr-FR-DeniseNeural",
    "ch": "de-CH-LeniNeural",
    "de": "de-DE-KatjaNeural",
    "it": "it-IT-ElsaNeural",
    "es": "es-ES-ElviraNeural",
    "pt": "pt-PT-RaquelNeural",
    "gr": "el-GR-AthinaNeural",
    "pl": "pl-PL-ZofiaNeural",
    "hr": "hr-HR-GabrijelaNeural",
    "ie": "en-IE-EmilyNeural",
    "is": "is-IS-GudrunNeural",
    "tr": "tr-TR-EmelNeural",
    "bg": "bg-BG-KalinaNeural",
    "ro": "ro-RO-AlinaNeural",
    "mc": "fr-FR-DeniseNeural",
    "va": "it-IT-ElsaNeural",
    "ad": "ca-ES-JoanaNeural",
    "li": "de-DE-KatjaNeural",
    "sk": "sk-SK-ViktoriaNeural",
    "si": "sl-SI-PetraNeural",
    "ba": "hr-HR-GabrijelaNeural",
    "me": "sr-RS-SophieNeural",
    "rs": "sr-RS-SophieNeural",
    "ge": "ka-GE-EkaNeural",
    "mk": "mk-MK-MarijaNeural",
    "cy": "el-GR-AthinaNeural",
    "al": "sq-AL-AnilaNeural",
    "mt": "mt-MT-GraceNeural",
    "ee": "et-EE-AnuNeural",
    "lv": "lv-LV-EveritaNeural",
    "lt": "lt-LT-OnaNeural",
}

# Fallback voices when primary locale voice is unavailable
VOICE_FALLBACKS: dict[str, str] = {
    "ad": "es-ES-ElviraNeural",
    "ba": "sr-RS-SophieNeural",
    "al": "sq-AL-IlirNeural",
    "mt": "en-GB-SoniaNeural",
}

PHRASES: dict[str, dict[str, str]] = {
    "uk": {
        "morning": "Good morning",
        "hello": "Hello",
        "excuse": "Excuse me",
        "thanks": "Thank you",
        "howMuch": "How much is it?",
    },
    "nl": {
        "morning": "Goedemorgen",
        "hello": "Hallo",
        "excuse": "Pardon",
        "thanks": "Dank u wel",
        "howMuch": "Hoeveel kost het?",
    },
    "lu": {
        "morning": "Gudde Moien",
        "hello": "Moien",
        "excuse": "Entschëllegt",
        "thanks": "Merci",
        "howMuch": "Wéi vill kascht dat?",
    },
    "be": {
        "morning": "Goedemorgen",
        "hello": "Hallo",
        "excuse": "Pardon",
        "thanks": "Dank u wel",
        "howMuch": "Hoeveel kost het?",
    },
    "no": {
        "morning": "God morgen",
        "hello": "Hei",
        "excuse": "Unnskyld",
        "thanks": "Takk",
        "howMuch": "Hvor mye koster det?",
    },
    "fi": {
        "morning": "Hyvää huomenta",
        "hello": "Hei",
        "excuse": "Anteeksi",
        "thanks": "Kiitos",
        "howMuch": "Paljonko tämä maksaa?",
    },
    "se": {
        "morning": "God morgon",
        "hello": "Hej",
        "excuse": "Ursäkta",
        "thanks": "Tack",
        "howMuch": "Hur mycket kostar det?",
    },
    "dk": {
        "morning": "Godmorgen",
        "hello": "Hej",
        "excuse": "Undskyld",
        "thanks": "Tak",
        "howMuch": "Hvor meget koster det?",
    },
    "at": {
        "morning": "Guten Morgen",
        "hello": "Hallo",
        "excuse": "Entschuldigung",
        "thanks": "Danke",
        "howMuch": "Was kostet das?",
    },
    "hu": {
        "morning": "Jó reggelt",
        "hello": "Szia",
        "excuse": "Elnézést",
        "thanks": "Köszönöm",
        "howMuch": "Mennyibe kerül?",
    },
    "cz": {
        "morning": "Dobré ráno",
        "hello": "Ahoj",
        "excuse": "Promiňte",
        "thanks": "Děkuji",
        "howMuch": "Kolik to stojí?",
    },
    "fr": {
        "morning": "Bonjour",
        "hello": "Salut",
        "excuse": "Excusez-moi",
        "thanks": "Merci",
        "howMuch": "Combien ça coûte?",
    },
    "ch": {
        "morning": "Guten Morgen",
        "hello": "Grüezi",
        "excuse": "Entschuldigung",
        "thanks": "Danke",
        "howMuch": "Was kostet das?",
    },
    "de": {
        "morning": "Guten Morgen",
        "hello": "Hallo",
        "excuse": "Entschuldigung",
        "thanks": "Danke",
        "howMuch": "Was kostet das?",
    },
    "it": {
        "morning": "Buongiorno",
        "hello": "Ciao",
        "excuse": "Mi scusi",
        "thanks": "Grazie",
        "howMuch": "Quanto costa?",
    },
    "es": {
        "morning": "Buenos días",
        "hello": "Hola",
        "excuse": "Perdón",
        "thanks": "Gracias",
        "howMuch": "¿Cuánto cuesta?",
    },
    "pt": {
        "morning": "Bom dia",
        "hello": "Olá",
        "excuse": "Com licença",
        "thanks": "Obrigado",
        "howMuch": "Quanto custa?",
    },
    "gr": {
        "morning": "Καλημέρα",
        "hello": "Γεια σας",
        "excuse": "Συγνώμη",
        "thanks": "Ευχαριστώ",
        "howMuch": "Πόσο κοστίζει;",
    },
    "pl": {
        "morning": "Dzień dobry",
        "hello": "Cześć",
        "excuse": "Przepraszam",
        "thanks": "Dziękuję",
        "howMuch": "Ile to kosztuje?",
    },
    "hr": {
        "morning": "Dobro jutro",
        "hello": "Bok",
        "excuse": "Oprostite",
        "thanks": "Hvala",
        "howMuch": "Koliko košta?",
    },
    "ie": {
        "morning": "Good morning",
        "hello": "Hello",
        "excuse": "Excuse me",
        "thanks": "Thank you",
        "howMuch": "How much is it?",
    },
    "is": {
        "morning": "Góðan daginn",
        "hello": "Halló",
        "excuse": "Afsakið",
        "thanks": "Takk",
        "howMuch": "Hvað kostar þetta?",
    },
    "tr": {
        "morning": "Günaydın",
        "hello": "Merhaba",
        "excuse": "Affedersiniz",
        "thanks": "Teşekkürler",
        "howMuch": "Ne kadar?",
    },
    "bg": {
        "morning": "Добро утро",
        "hello": "Здравей",
        "excuse": "Извинете",
        "thanks": "Благодаря",
        "howMuch": "Колко струва?",
    },
    "ro": {
        "morning": "Bună dimineața",
        "hello": "Bună",
        "excuse": "Scuzați-mă",
        "thanks": "Mulțumesc",
        "howMuch": "Cât costă?",
    },
    "mc": {
        "morning": "Bonjour",
        "hello": "Bonjour",
        "excuse": "Excusez-moi",
        "thanks": "Merci",
        "howMuch": "Combien ça coûte ?",
    },
    "va": {
        "morning": "Buongiorno",
        "hello": "Ciao",
        "excuse": "Mi scusi",
        "thanks": "Grazie",
        "howMuch": "Quanto costa?",
    },
    "ad": {
        "morning": "Bon dia",
        "hello": "Hola",
        "excuse": "Perdó",
        "thanks": "Gràcies",
        "howMuch": "Quant val?",
    },
    "li": {
        "morning": "Guten Morgen",
        "hello": "Hallo",
        "excuse": "Entschuldigung",
        "thanks": "Danke",
        "howMuch": "Was kostet das?",
    },
    "sk": {
        "morning": "Dobré ráno",
        "hello": "Ahoj",
        "excuse": "Prepáčte",
        "thanks": "Ďakujem",
        "howMuch": "Koľko to stojí?",
    },
    "si": {
        "morning": "Dobro jutro",
        "hello": "Živjo",
        "excuse": "Oprostite",
        "thanks": "Hvala",
        "howMuch": "Koliko stane?",
    },
    "ba": {
        "morning": "Dobro jutro",
        "hello": "Zdravo",
        "excuse": "Izvinite",
        "thanks": "Hvala",
        "howMuch": "Koliko košta?",
    },
    "me": {
        "morning": "Dobro jutro",
        "hello": "Zdravo",
        "excuse": "Izvinite",
        "thanks": "Hvala",
        "howMuch": "Koliko košta?",
    },
    "rs": {
        "morning": "Dobro jutro",
        "hello": "Zdravo",
        "excuse": "Izvinite",
        "thanks": "Hvala",
        "howMuch": "Koliko košta?",
    },
    "ge": {
        "morning": "დილა მშვიდობისა",
        "hello": "გამარჯობა",
        "excuse": "ბოდიში",
        "thanks": "გმადლობთ",
        "howMuch": "რა ღირს?",
    },
    "mk": {
        "morning": "Добро утро",
        "hello": "Здраво",
        "excuse": "Извинете",
        "thanks": "Благодарам",
        "howMuch": "Колку чини?",
    },
    "cy": {
        "morning": "Καλημέρα",
        "hello": "Γεια σας",
        "excuse": "Συγνώμη",
        "thanks": "Ευχαριστώ",
        "howMuch": "Πόσο κοστίζει;",
    },
    "al": {
        "morning": "Mirëmëngjes",
        "hello": "Tungjatjeta",
        "excuse": "Më falni",
        "thanks": "Faleminderit",
        "howMuch": "Sa kushton?",
    },
    "mt": {
        "morning": "Bonġu",
        "hello": "Hello",
        "excuse": "Skużani",
        "thanks": "Grazzi",
        "howMuch": "Kemm jiswa?",
    },
    "ee": {
        "morning": "Tere hommikust",
        "hello": "Tere",
        "excuse": "Vabandust",
        "thanks": "Aitäh",
        "howMuch": "Kui palju maksab?",
    },
    "lv": {
        "morning": "Labrīt",
        "hello": "Sveiki",
        "excuse": "Atvainojiet",
        "thanks": "Paldies",
        "howMuch": "Cik tas maksā?",
    },
    "lt": {
        "morning": "Labas rytas",
        "hello": "Labas",
        "excuse": "Atsiprašau",
        "thanks": "Ačiū",
        "howMuch": "Kiek kainuoja?",
    },
}


async def synthesize(voice: str, text: str, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(str(path))
    print(f"wrote {path.relative_to(ROOT)} ({voice})")


async def main() -> None:
    # Only (re)generate missing files to avoid hitting rate limits.
    for country, lines in PHRASES.items():
        voice = VOICES[country]
        for phrase_id, text in lines.items():
            out = OUT / country / f"{phrase_id}.mp3"
            if out.exists() and out.stat().st_size > 1000:
                print(f"skip {out.relative_to(ROOT)}")
                continue
            try:
                await synthesize(voice, text, out)
            except Exception as exc:
                fallback = VOICE_FALLBACKS.get(country)
                if not fallback:
                    raise
                print(f"voice {voice} failed for {country}/{phrase_id}: {exc}; trying {fallback}")
                await synthesize(fallback, text, out)
            await asyncio.sleep(0.15)


if __name__ == "__main__":
    asyncio.run(main())
