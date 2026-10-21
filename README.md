# The Golden Mandapa

A public, static wedding invitation for Thejashwini M.H. & Karthik M., built with React, TypeScript, Vite, Three.js and Motion. No accounts, database, or backend.

## Install and preview

Use Node 22.12+ and pnpm 10.

```sh
pnpm install
pnpm dev
```

The Figma Make workspace already runs its own supervised preview; do not start another server there.

```sh
pnpm build
pnpm preview
```

`pnpm build` creates `dist/`. Type checking: `pnpm exec tsc --noEmit`. Formatting: `pnpm format`.

## Replace the photographs

Place optimized WebP/JPEG images in `public/photos/`, then edit the `photos` array in `src/content.ts`, e.g. `src: "/photos/couple.webp"`. The first slot is the lead couple photograph; subsequent slots are the bride, groom and another couple moment. Edit accessible alt text and captions there too. Empty sources deliberately show ornamental placeholders, not generated people. All gallery items support an enlarged lightbox.

## Music

Add your own **licensed or otherwise permitted instrumental wedding recording** at `public/music/wedding.mp3`, or edit `config.music` in `src/content.ts`. No recording is bundled or claimed to be licensed. Playback starts only from the music button; a missing file produces a graceful message. Use a compressed MP3, ideally under 4 MB.

## Website URL and WhatsApp

Copy `.env.example` to `.env` and set `VITE_WEBSITE_URL` to the final public HTTPS address, then rebuild. This is public build-time configuration, not a secret. Without configuration, a public non-Figma origin is used; localhost is never inserted. Before deployment the message can still be shared without a site URL. For reliable production sharing, explicitly configure the final address.

## Static deployment

Run `pnpm install` and `pnpm build`. Upload the contents of `dist/` to any static host (Cloudflare Pages, Netlify, Vercel, GitHub Pages or a conventional web server). For hosted CI builds set build command `pnpm build` and output directory `dist`. Set `VITE_WEBSITE_URL` in the host's environment before building. No automatic deployment is performed.

The app uses hash navigation, so no server-side routing rewrite is required. For subdirectory hosting set Vite's `base` and adjust public photo/music paths accordingly.

## Editing

- Wedding data, translations, media paths and calendar generation: `src/content.ts`
- Main components, gallery, sharing, music and intro: `src/App.tsx`
- Original vector ornaments: `src/Ornaments.tsx`
- Lazy-loaded WebGL gold particles: `src/GoldenScene.tsx`
- Responsive visual tokens and styling: `src/index.css`

English is the default. Kannada copy is centralized alongside English, while the names remain exactly as provided. Countdown uses the explicit `2026-11-15T09:00:00+05:30` instant (Asia/Kolkata). Calendar exports use UTC: reception begins at 13:00 UTC on November 14, and muhurtham runs 03:30–04:10 UTC on November 15. The reception has no invented end time.

The opening is visitor-triggered from the hero and replay controls, keeping event information immediately accessible. It includes an opening envelope, an emerging card, skip and Escape controls. Reduced-motion visitors can proceed without the animation. WebGL is decorative and lazily loaded; all content remains available if it fails. Fonts load from Google Fonts with local serif/sans-serif fallbacks.
