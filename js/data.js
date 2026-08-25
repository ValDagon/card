/* SSOT for copy. Add a project in PROJECTS. Add a gig in GIGS.
   Contacts split: RU = self-employed + RU exchanges; EN/SR = Sensual Studio DOO.
   Do not invent URLs — use placeholder: true instead. */
window.SITE = {
  siteUrl: "https://valdagon.github.io/card/",
  photo: "./assets/portrait.jpg",
  langs: ["ru", "en", "sr"],
  telegram: "https://t.me/valdk_corp",
  github: "https://github.com/ValDagon",
  kwork: "https://kwork.ru/user/valdk",
  profi: "https://profi.ru/backoffice/a.php",
  linkedin: "https://www.linkedin.com/in/valkz",
  emailRu: "mailto:valrus56@yandex.ru",
  emailIntl: "mailto:valdk652@gmail.com",
  phoneRu: "tel:+79619202211",
  phoneDisplay: "+7 961 920-22-11",

  ui: {
    skip: { ru: "К содержанию", en: "Skip to content", sr: "Preskoči na sadržaj" },
    langLabel: { ru: "Язык", en: "Language", sr: "Jezik" },
    navStack: { ru: "Стек", en: "Stack", sr: "Stek" },
    navGigs: { ru: "Задачи", en: "Gigs", sr: "Poslovi" },
    navCv: { ru: "Путь", en: "Path", sr: "Put" },
    navWork: { ru: "Работы", en: "Work", sr: "Radovi" },
    navContact: { ru: "Связь", en: "Contact", sr: "Kontakt" },
    cta: { ru: "Написать в Telegram", en: "Message on Telegram", sr: "Piši na Telegramu" },
    ctaKwork: { ru: "Kwork", en: "Kwork", sr: "Kwork" },
    open: { ru: "Открыть", en: "Open", sr: "Otvori" },
    private: { ru: "закрытый репо", en: "private repo", sr: "privatni repo" },
    gate: { ru: "URL — гейт", en: "URL — gate", sr: "URL — gejt" },
    outroTitle: {
      ru: "Готов взяться.",
      en: "Ready to ship.",
      sr: "Spreman za posao.",
    },
    outroLine: {
      ru: "Опишите задачу в Telegram — отвечаю быстро, без посредников.",
      en: "Describe the task on Telegram — I reply fast, no middlemen.",
      sr: "Opišite zadatak na Telegramu — odgovaram brzo, bez posrednika.",
    },
  },

  meta: {
    ru: {
      title: "Валентин Казанцев — BI, агенты, боты",
      description:
        "Визитка: аналитика, Telegram-боты, автоматизация. Заказы в РФ — как самозанятый.",
    },
    en: {
      title: "Valentin Kazantsev — BI, agents, bots",
      description:
        "Personal card: analytics, Telegram bots, automation. International work via Sensual Studio DOO.",
    },
    sr: {
      title: "Valentin Kazancev — BI, agenti, botovi",
      description:
        "Lična vizitka: analitika, Telegram botovi, automatizacija. Međunarodni posao preko Sensual Studio DOO.",
    },
  },

  hero: {
    kicker: { ru: "VK · CARD", en: "VK · CARD", sr: "VK · CARD" },
    name: {
      ru: "Валентин Казанцев",
      en: "Valentin Kazantsev",
      sr: "Valentin Kazancev",
    },
    role: {
      ru: "BI · агенты · автоматизация",
      en: "BI · agents · automation",
      sr: "BI · agenti · automatizacija",
    },
    entity: {
      ru: "РФ: самозанятый",
      en: "Intl: Sensual Studio DOO",
      sr: "Intl: Sensual Studio DOO",
    },
  },

  stats: [
    {
      value: "4y 11m",
      label: { ru: "опыт", en: "experience", sr: "iskustvo" },
    },
    {
      value: "MISIS",
      label: { ru: "Прикл. инф. ’22", en: "Applied IT ’22", sr: "Prim. inf. ’22" },
    },
    {
      value: "RU EN SR",
      label: { ru: "языки", en: "languages", sr: "jezici" },
    },
    {
      value: "40 / 10",
      label: { ru: "найм / фриланс ч", en: "hire / freelance h", sr: "zaposlenje / frilens č" },
    },
  ],

  stackGroups: [
    {
      id: "bi",
      title: { ru: "BI", en: "BI", sr: "BI" },
      chips: ["Python", "pandas", "Excel", "SQL", "PostgreSQL", "Tableau", "ClickHouse"],
    },
    {
      id: "bots",
      title: { ru: "Боты", en: "Bots", sr: "Botovi" },
      chips: ["aiogram 3", "grammY", "Telegram", "Google Sheets", "APScheduler"],
    },
    {
      id: "web",
      title: { ru: "Веб", en: "Web", sr: "Veb" },
      chips: ["Next.js", "React", "Vercel", "Supabase", "Flutter", "GitHub"],
    },
    {
      id: "ai",
      title: { ru: "AI", en: "AI", sr: "AI" },
      chips: ["Cursor", "OpenRouter", "агенты", "vision"],
    },
  ],

  gigs: [
    {
      code: "TG·HR",
      stack: ["aiogram", "Sheets"],
      title: {
        ru: "HR-бот + таблица",
        en: "HR bot + spreadsheet",
        sr: "HR bot + tabela",
      },
      outcome: {
        ru: "Дни рождения, сроки, дайджест — Sheets как БД.",
        en: "Birthdays, probation, digest — Sheets as the DB.",
        sr: "Rođendani, rokovi, dajdžest — Sheets kao baza.",
      },
    },
    {
      code: "TG·AI",
      stack: ["aiogram", "vision", "Postgres"],
      title: {
        ru: "Фото → данные в боте",
        en: "Photo → data in a bot",
        sr: "Foto → podaci u botu",
      },
      outcome: {
        ru: "Картинка in, JSON/отчёт out. Демо на Vercel.",
        en: "Image in, JSON/report out. Demo on Vercel.",
        sr: "Slika unutra, JSON/izveštaj napolje. Demo na Vercel.",
      },
    },
    {
      code: "XLS",
      stack: ["pandas", "Excel"],
      title: {
        ru: "Грязный Excel → сдача",
        en: "Messy Excel → deliverable",
        sr: "Prljavi Excel → predaja",
      },
      outcome: {
        ru: "CSV/xlsx, остатки, витрины. Без ручной простыни.",
        en: "CSV/xlsx, stock, marts. No manual wall of sheets.",
        sr: "CSV/xlsx, zalihe, vitrine. Bez ručnog zida tabela.",
      },
    },
    {
      code: "API",
      stack: ["Python", "JSON"],
      title: {
        ru: "Парсинг / API → файл",
        en: "Parse / API → file",
        sr: "Parsiranje / API → fajl",
      },
      outcome: {
        ru: "Сайт или API → json/csv/xlsx под отчёт.",
        en: "Site or API → json/csv/xlsx for the report.",
        sr: "Sajt ili API → json/csv/xlsx za izveštaj.",
      },
    },
    {
      code: "SQL",
      stack: ["SQL", "Postgres", "Tableau"],
      title: {
        ru: "SQL + дашборд",
        en: "SQL + dashboard",
        sr: "SQL + dashboard",
      },
      outcome: {
        ru: "Запрос не врёт. Tableau Desktop / ClickHouse.",
        en: "The query does not lie. Tableau Desktop / ClickHouse.",
        sr: "Upit ne laže. Tableau Desktop / ClickHouse.",
      },
    },
    {
      code: "AGT",
      stack: ["агенты", "pandas"],
      title: {
        ru: "Команда ИИ-агентов",
        en: "AI agent crew",
        sr: "Tim AI agenata",
      },
      outcome: {
        ru: "ТЗ → очистка данных → отчёт по расписанию.",
        en: "Brief → data prep → scheduled report.",
        sr: "TZ → čišćenje podataka → izveštaj po rasporedu.",
      },
    },
  ],

  path: [
    {
      when: { ru: "2025–26", en: "2025–26", sr: "2025–26" },
      org: "Sensual Studio DOO",
      role: {
        ru: "Аналитик-разработчик",
        en: "Analyst-developer",
        sr: "Analitičar-programer",
      },
      note: {
        ru: "Сбор ТЗ. Локальные ИИ-агенты: сырьё → pandas → отчёт по расписанию.",
        en: "Requirements. Local AI agents: raw data → pandas → scheduled reports.",
        sr: "Prikupljanje TZ. Lokalni AI agenti: sirovi podaci → pandas → izveštaj po rasporedu.",
      },
    },
    {
      when: { ru: "2023–25", en: "2023–25", sr: "2023–25" },
      org: "Sensual Studio DOO",
      role: {
        ru: "Flutter",
        en: "Flutter",
        sr: "Flutter",
      },
      note: {
        ru: "Visual Novel: погода, время, место устройства → сценарий игры.",
        en: "Visual novel: device weather, time, place → live story branch.",
        sr: "Visual novel: vreme i mesto uređaja → grana priče.",
      },
    },
    {
      when: { ru: "2021–23", en: "2021–23", sr: "2021–23" },
      org: "Standard Sats · ME",
      role: {
        ru: "Flutter · crypto",
        en: "Flutter · crypto",
        sr: "Flutter · crypto",
      },
      note: {
        ru: "Кроссплатформа Crypto & Blockchain + техдок.",
        en: "Cross-platform crypto/blockchain apps + tech docs.",
        sr: "Krosplatforma crypto/blockchain + tehnička dokumentacija.",
      },
    },
  ],

  projects: [
    {
      id: "relomap",
      url: "https://relomap.vercel.app",
      stack: ["Next.js", "Supabase", "Vercel", "grammY"],
      title: {
        ru: "Relomap",
        en: "Relomap",
        sr: "Relomap",
      },
      blurb: {
        ru: "Куда уехать просто: страна × способ, PDF в Telegram после подписки.",
        en: "Simple relocation map: country × path, PDF in Telegram after subscribe.",
        sr: "Gde otići jednostavno: zemlja × način, PDF u Telegramu posle pretplate.",
      },
    },
    {
      id: "hr-bot",
      url: null,
      stack: ["aiogram 3", "gspread", "pytest"],
      title: {
        ru: "HR Telegram-бот",
        en: "HR Telegram bot",
        sr: "HR Telegram bot",
      },
      blurb: {
        ru: "Sheets как кадровая БД: уведомления, дайджест, роли. MVP сдан.",
        en: "Sheets as HR DB: alerts, digest, roles. MVP delivered.",
        sr: "Sheets kao HR baza: obaveštenja, dajdžest, uloge. MVP predat.",
      },
    },
    {
      id: "spiridonova",
      url: "https://kwork-spiridonova.vercel.app",
      stack: ["aiogram", "Supabase", "OpenRouter", "Vercel"],
      title: {
        ru: "Бот: фото еды → КБЖУ",
        en: "Bot: food photo → macros",
        sr: "Bot: foto hrane → KBŽU",
      },
      blurb: {
        ru: "Vision-бот, Postgres, webhook. Демо живое.",
        en: "Vision bot, Postgres, webhook. Live demo.",
        sr: "Vision bot, Postgres, webhook. Živi demo.",
      },
    },
    {
      id: "adult-bi",
      url: null,
      stack: ["pandas", "ClickHouse", "Excel", "FastAPI"],
      title: {
        ru: "BI · ClickHouse",
        en: "BI · ClickHouse",
        sr: "BI · ClickHouse",
      },
      blurb: {
        ru: "Аналитика: ClickHouse (Docker + Cloud) + Excel.",
        en: "Analytics: ClickHouse (Docker + Cloud) + Excel.",
        sr: "Analitika: ClickHouse (Docker + Cloud) + Excel.",
      },
    },
    {
      id: "vn-live",
      url: null,
      stack: ["Flutter"],
      title: {
        ru: "VN · живой контекст",
        en: "VN · live context",
        sr: "VN · živi kontekst",
      },
      blurb: {
        ru: "Релиз: погода/время/гео игрока крутит сюжет Visual Novel.",
        en: "Shipped: player weather/time/geo steers a visual novel.",
        sr: "Isporuka: vreme/mesto igrača okreće Visual Novel.",
      },
    },
    {
      id: "agents",
      url: null,
      stack: ["Python", "pandas", "агенты"],
      title: {
        ru: "Агенты на сырье",
        en: "Agents on raw data",
        sr: "Agenti na sirovini",
      },
      blurb: {
        ru: "Автономная команда: очистка → анализ → отчёт по расписанию клиента.",
        en: "Autonomous crew: clean → analyze → report on the client’s schedule.",
        sr: "Autonomni tim: čišćenje → analiza → izveštaj po rasporedu klijenta.",
      },
    },
    {
      id: "comics",
      url: null,
      stack: ["GCP", "vision", "OpenRouter"],
      title: {
        ru: "AI Comic Translator",
        en: "AI Comic Translator",
        sr: "AI Comic Translator",
      },
      blurb: {
        ru: "Перевод комиксов на Google Cloud: vision + LLM.",
        en: "Comic translation on Google Cloud: vision + LLM pipeline.",
        sr: "Prevod stripova na Google Cloud: vision + LLM.",
      },
    },
    {
      id: "rates",
      url: "https://github.com/ValDagon/rates-for-ex",
      stack: ["Go"],
      title: {
        ru: "rates-for-ex",
        en: "rates-for-ex",
        sr: "rates-for-ex",
      },
      blurb: {
        ru: "Публичный Go: графики BTC/USD и USD/EUR в реальном времени.",
        en: "Public Go app: live BTC/USD and USD/EUR charts.",
        sr: "Javna Go app: grafikoni BTC/USD i USD/EUR uživo.",
      },
    },
  ],

  contactIntro: {
    ru: "Сначала Telegram. Почта и телефон — если удобнее звонок.",
    en: "Telegram first. GitHub and LinkedIn for company-side work.",
    sr: "Prvo Telegram. GitHub i LinkedIn za posao preko studija.",
  },

  contacts: {
    ru: [
      { label: "Telegram", href: "https://t.me/valdk_corp", hint: "@valdk_corp" },
      { label: "Email", href: "mailto:valrus56@yandex.ru", hint: "valrus56@yandex.ru" },
      { label: "Телефон", href: "tel:+79619202211", hint: "+7 961 920-22-11" },
      { label: "Kwork", href: "https://kwork.ru/user/valdk", hint: "valdk" },
      { label: "Профи", href: "https://profi.ru/backoffice/a.php", hint: "profi.ru" },
    ],
    en: [
      { label: "Telegram", href: "https://t.me/valdk_corp", hint: "@valdk_corp" },
      { label: "Email", href: "mailto:valdk652@gmail.com", hint: "valdk652@gmail.com" },
      { label: "GitHub", href: "https://github.com/ValDagon", hint: "ValDagon" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/valkz", hint: "valkz" },
    ],
    sr: [
      { label: "Telegram", href: "https://t.me/valdk_corp", hint: "@valdk_corp" },
      { label: "Email", href: "mailto:valdk652@gmail.com", hint: "valdk652@gmail.com" },
      { label: "GitHub", href: "https://github.com/ValDagon", hint: "ValDagon" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/valkz", hint: "valkz" },
    ],
  },

  legal: {
    ru: "Заказы на территории РФ выполняю как самозанятый. Биржи: Kwork, Профи.",
    en: "International projects are fulfilled on behalf of Sensual Studio DOO (Montenegro). Not a Russian self-employed contract.",
    sr: "Međunarodni projekti se izvršavaju u ime Sensual Studio DOO (Crna Gora). Nije ugovor ruskog samozaposlenog.",
  },

  footNote: {
    ru: "Карточка · GitHub Pages · без трекеров",
    en: "Card · GitHub Pages · no trackers",
    sr: "Kartica · GitHub Pages · bez trekera",
  },
};
