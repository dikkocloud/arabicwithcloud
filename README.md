# ArabicWithCloud — Parent-Facing Landing Page

A one-page, parent-facing landing site for **ArabicWithCloud**, promoting live online
Qur'an, Arabic and Islamic Studies classes for children ages 5–15.

Built with **React + Vite + Tailwind CSS**. Same minimal design system as the
Colibri Hub site: pure black (`#000000`) / pure white (`#FFFFFF`), no other colors.
Fonts: **Montserrat** (display/headings) and **Inter** (body).

## Project structure

```
├── index.html          # HTML shell, loads Google Fonts (Inter + Montserrat)
├── src/
│   ├── main.jsx         # React entry point
│   ├── App.jsx           # Entire page — all sections + content
│   └── index.css         # Tailwind directives + base styles
├── tailwind.config.js    # Design tokens (colors, fonts)
├── postcss.config.js
├── vite.config.js
├── vercel.json           # Vercel build/output config
└── package.json
```

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

Output goes to `dist/`.

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
cd arabicwithcloud
vercel
```
Follow the prompts. Vercel will auto-detect the Vite framework from `vercel.json`.

### Option B — Git + Vercel dashboard
1. Push this folder to a GitHub repo.
2. In Vercel: **New Project → Import** the repo.
3. Framework preset: **Vite** (auto-detected via `vercel.json`).
4. Build command: `npm run build` — Output directory: `dist` (already set in `vercel.json`).
5. Deploy.

> ⚠️ Common 404 cause: setting the wrong **Root Directory** in the Vercel project
> settings if this folder isn't the repo root. Make sure Root Directory points to
> the folder containing this `package.json`.

## What to edit before going live

Open `src/App.jsx` and update:

| What | Where |
|---|---|
| WhatsApp number & message | `WHATSAPP_LINK` constant at the top of `App.jsx` |
| Plan prices | `PLANS` array |
| FAQ copy | `FAQS` array |
| Any section copy | corresponding data array (`JOURNEY_STEPS`, `HOW_IT_WORKS`, `WHY_US`, `LEVELS`, `CURRICULUM`) |

Replace `WHATSAPP_LINK` with your real WhatsApp Business number in international
format (no `+`, no spaces), e.g. `https://wa.me/97450001234?text=...`.

## Design system

- **Colors:** `#000000` (ink) and `#FFFFFF` (paper) only — see `tailwind.config.js`.
- **Fonts:** Montserrat for headings/labels, Inter for body copy — loaded via Google Fonts in `index.html`.
- **Motion:** subtle fade-up on hero load, smooth accordion for FAQ, respects `prefers-reduced-motion`.
