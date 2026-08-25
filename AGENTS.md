# AGENTS.md — kazantsev-card

> Карта репо, не энциклопедия. Сначала этот файл → `docs/PROGRESS.md` (шапка + хвост журнала).
> Crystal-skills глобальные (`~/.cursor/skills`). Не копировать их сюда.

## 0.1 NOW

> **Сейчас:** публичная визитка Valentin Kazantsev на GitHub Pages (RU / EN / SR-Latn).
> **Не делать:** секреты / `.env` в git; Next.js; писать в vault `/Users/valentin/Work/base` из этого окна; выдумывать контакты.

| | |
|---|---|
| **Live** | Static HTML/CSS/JS · GitHub Pages user site · https://valdagon.github.io/ |
| **Ship** | `git push origin main && git push user-site main` (`ValDagon/card` + `ValDagon.github.io`) |
| **Next** | Человек заполняет гейты (FL / Профи / Upwork URL). Правки копи — `js/data.js`. |
| **Проверка** | `python3 -m http.server 4173` (не `file://`) · 375px + десктоп · RU/EN/SR |

## 1. Миссия

Личная визитка: меньше текста, больше чипов, карточек и таймлайна. RU = самозанятый + RU-биржи. EN/SR = Sensual Studio DOO + международные контакты.

## 2. Старт сессии

1. Прочитай §0.1 и хвост `docs/PROGRESS.md`.
2. Нетривиальная задача → `discover-skills-mcp`, затем `crystal-pipeline`.
3. UI → `crystal-frontend-ui`. Не отправлять человека «напиши код сам».

## 3. Карта

| Путь | Зачем |
|---|---|
| `js/data.js` | весь копирайт, проекты, контакты, i18n |
| `js/app.js` | язык (`?lang=` + localStorage), рендер |
| `css/style.css` | визуал |
| `assets/` | портрет, favicon |
| `docs/PROGRESS.md` | журнал сессий |

## 4. Инварианты

1. Нет секретов, нет чтения `.env`.
2. Коммит только если человек попросил (хостинг Pages — исключение по явной просьбе).
3. Готовое (skill/MCP) важнее самописного.
4. Остаёмся в **этом** корне. Исключение: зеркало `~/.cursor/skills`.
5. Нельзя трогать: `.env`, чужие телефоны/почты, Crystal OS internals.
6. Один эксперимент — одна переменная.
7. Пути ассетов корневые (`/assets/…`, `/css/…`, `/js/…`) — канон https://valdagon.github.io/. Локально: `python3 -m http.server`, не `file://`. Старый `/card/` редиректит на `/`.

## 5. Конец сессии

Строка в конец журнала `docs/PROGRESS.md`. Человеку: сделано / блокер / next.

*Следующий агент увидит только то, что записано.*
