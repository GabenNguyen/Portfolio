# DESIGN — Editorial ink & accent

The locked visual world for this portfolio. Replaces the previous glassy blue-gradient world.

## Direction
Editorial: ink on paper, hairlines instead of cards, one accent used sparingly.
Persuasive surface (recruiter-facing), so hierarchy and scannability outrank expression.

## Tokens (see `app/globals.css`)
- Paper (light): `oklch(0.988 0.004 250)` — cool near-white
- Paper (dark): `oklch(0.18 0.012 255)` — blue-tinted near-black
- Ink (light): `oklch(0.22 0.014 255)` · Ink (dark): `oklch(0.95 0.005 255)`
- Accent (light): `oklch(0.47 0.17 256)` deep blue · Accent (dark): `oklch(0.7 0.15 256)`
- Muted ink: L 0.47 light / 0.68 dark (AA at body size)
- Radius: `0.5rem` base; chips `rounded-sm`; buttons `rounded-md`

## Typography
- Display: **Space Grotesk** (`--font-display`), weights 700, tracking-tight, roman only.
- Body: **Archivo** (`--font-sans`), 400/500/600, measure 60–70ch.
- Scale: h1 clamp 3rem → 4.5rem; h2 1.875–2.25rem; body 1rem–1.125rem.
- No gradient text. Emphasis via weight/color only. No italic headings.

## Structure rules
- Hairlines (`border-foreground/15`) are the primary structuring device; no card grids,
  no glass, no blur blobs, no dot grids, no floating badges.
- Section containers: `max-w-6xl` (pages) / `max-w-3xl` (about, long-form measure).
- Asymmetric splits (7/5 hero, 3/9 toolkit rows, index rows on projects).
- One accent hue only; accent appears on primary buttons, links, active nav, focus rings.

## Motion
- One orchestrated GSAP entrance timeline per page + `.stagger-item` scroll reveals.
- Hover: 150ms color/transform transitions; press: `scale-95`.
- **Banned:** infinite loops (rings, floats, pulses, ping rings), scroll cues, parallax blobs.
- All motion respects `prefers-reduced-motion` via GSAP matchMedia + CSS override.

## Components
- Nav (N6 masthead): sticky, solid paper, hairline underline, blue-dot wordmark,
  underline-offset active state, hamburger disclosure panel on mobile.
- Footer (Ft1): wordmark + tagline, inline links (GitHub / LinkedIn / Email / CV).
- Buttons: solid `bg-primary` (no gradient), outline = hairline `border-foreground/25`.
- Chat widget: paper panel, hairline border, solid accent send/toggle, no glows.

## Copy rules
- One CTA label per intent: "Get in touch" (contact), "View projects" (projects).
- No em/en dashes as separators (hyphen or middle-free construction).
- No invented metrics; facts come from `PRODUCT.md` content sources.
