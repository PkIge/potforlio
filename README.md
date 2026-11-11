# Praise Kehinde-Ige — Product Portfolio

Space-themed personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS 4, replicating the Figma reference frames.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build / deploy

```bash
npm run build
npm start
```

Deploys to Vercel with zero configuration (framework preset: Next.js).

## Content

All content lives in `src/data/`:

- `profile.ts` – name, role, bio, social links (set `email` to enable the mail link)
- `projects.ts` – case studies (text from the Notion export); screenshots in `public/projects/<slug>/`, dimensions in `project-images.json`
- `experience.ts` – roles shown in the "My work experience" carousel (`period` is optional)
- `skills.ts` – 16 skills for the 4 x 4 grid
- `credentials.ts` – certifications and degrees

Backgrounds (`public/bg/*.webp`) are the Figma frames with placeholder text removed; heading assets (`public/headings/*.png`) are the extracted glowing titles.

## Keyboard

- `Enter` opens / closes the panel of the section in view
- `←` / `→` move the projects and experience carousels
- `↑` / `↓` move between sections, `Esc` closes a panel
- Hover the right edge for section jump shortcuts (the current section is always marked)

## Hidden mini-game

The astronaut floats idly on the globe in every scene. `A` / `D` walk and spin the globe,
`W` jumps a little, `S` dives back down faster (otherwise the landing is slow and floaty).
Hills sit on the far side of the globe: clear one in the air to score, bump into one on the
ground and the run resets. Tapping the astronaut also jumps. Game logic lives in
`src/components/game/GameProvider.tsx`; the globe textures and astronaut sprites in `public/game/`
were extracted from the Figma frames (`src/data/game-layers.json` holds their positions).
