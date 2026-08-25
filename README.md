# Valentin Kazantsev — card

Personal multilingual card (RU / EN / SR-Latn) for GitHub Pages.

**Live:** https://valdagon.github.io/

Local path: `/Users/valentin/Work/kazantsev-card`

## Design

Cinematic chiaroscuro to match the portrait: warm void (`#0B0A09`), ember key-light (`#E4A574`), Syne + Figtree + IBM Plex Mono. Signature is the light-well around the headshot — not a purple SaaS gradient.

Patterns reused (not cloned): config-driven copy like [yashrajnayak/developer-portfolio](https://github.com/yashrajnayak/developer-portfolio); zero-build Pages like [GeraldYa/portfolio-template](https://github.com/GeraldYa/portfolio-template); one primary CTA + mobile-first from [Swipe Pages personal landing advice](https://swipepages.com/create/personal-landing-page). Locale URL `?lang=` + browser detect from multilingual vCard practice.

## Run locally

```bash
cd /Users/valentin/Work/kazantsev-card
python3 -m http.server 4173
```

Open http://127.0.0.1:4173/?lang=ru — also `en` and `sr`.

Do not open `index.html` as a file — asset paths are root-absolute (`/assets/…`).

## GitHub Pages

Canonical: [ValDagon/ValDagon.github.io](https://github.com/ValDagon/ValDagon.github.io) · user site · https://valdagon.github.io/

Mirror + redirect: [ValDagon/card](https://github.com/ValDagon/card) still publishes at `/card/` and sends visitors to `/`.

## Edit copy / add a project

All user-visible strings live in [`js/data.js`](js/data.js).

Add a project to `projects`:

```js
{
  id: "slug",
  url: "https://example.com", // or null if private
  stack: ["Python", "pandas"],
  title: { ru: "…", en: "…", sr: "…" },
  blurb: { ru: "one line", en: "one line", sr: "jedna linija" },
}
```

Gigs: `gigs`. Contacts: `contacts.ru` vs `contacts.en` / `contacts.sr`. Legal: `legal`.

Language: `?lang=ru|en|sr` plus `localStorage` key `vk-lang`.

## Legal split

- **RU:** self-employed (самозанятый); Kwork / FL / Profi; phone + yandex.
- **EN / SR:** Sensual Studio DOO (Montenegro); GitHub + LinkedIn; no RU phone.

Do not commit `.env` or invent missing marketplace URLs — use `gate: true`.
