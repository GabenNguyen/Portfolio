# DESIGN — Developer ink

The locked visual world for this portfolio. Replaces the previous "editorial ink & accent" world with a
technical, developer-oriented system: precise type, hairline structure, one accent, real status only.

## Direction
Work-led showcase: projects are the main event; biography compresses to a short intro.
Persuasive surface (recruiter-facing), so hierarchy, scannability, and honest facts outrank expression.
The one visual moment is a code-built schematic drawn from a project's own description — never a
fake screenshot or invented metric. Brand blue is kept across runs, so theme rotation yields to it.

## Tokens (see `app/globals.css`)
- Paper (light): `oklch(0.985 0.003 250)` — cool near-white
- Paper (dark): `oklch(0.18 0.012 255)` — blue-tinted near-black
- Ink (light): `oklch(0.21 0.015 255)` · Ink (dark): `oklch(0.95 0.005 255)`
- Accent (light): `oklch(0.48 0.18 258)` electric blue · Accent (dark): `oklch(0.7 0.15 256)`
- Success: muted green, used only for the real availability status
- Radius: `0.5rem` base; chips `0.25rem`; buttons `0.5rem`

## Typography
- Display: **Space Grotesk** (`--font-display`), 600, tracking `-0.04em`, roman only.
- Body: **IBM Plex Sans** (`--font-sans`), 400/500/600, measure 60–70ch, line-height 1.7.
- Outlier: **JetBrains Mono** (`--font-mono`), used for meta, chips, indices, figure captions.
- Scale: h1 clamp 2.75rem → 4.5rem; h2 1.875–2.25rem; body 1rem–1.125rem. Tabular figures on numbers.
- No gradient text, no italic headings, no uppercase tracked decoration.

## Structure rules
- Hairlines (`border-foreground/15`), `panel`, and corner ticks are the structuring devices;
  no glass, no blur blobs, no dot grids, no floating badges.
- Section containers: `max-w-6xl` (pages) / `max-w-3xl` (about, long-form measure).
- Work-led home: compact 8/4 intro → featured project panel with a real schematic → second project
  → project index tile → toolkit → contact. Project page: one larger first entry, then uniform rows.
- Repeat bits use the `chip`, `mono-meta`, `panel`, and `flow-node` utilities in `globals.css`.
- One accent hue only; accent on primary buttons, links, active nav, corner ticks, focus rings.

## Motion
- One orchestrated GSAP entrance per page. No animate-on-scroll on every section.
- Hover: 150ms color/transform transitions; press: `scale(0.96)`.
- Banned: infinite decorative loops, scroll cues, parallax blobs, bouncy UI easing.
- All motion respects `prefers-reduced-motion` via GSAP matchMedia + CSS override.

## Components
- Nav (N6 masthead): sticky, solid paper, hairline underline, blue-dot wordmark,
  underline-offset active state, hamburger disclosure with Escape-to-close on mobile.
- Footer (Ft1): wordmark + mono tagline, inline links (GitHub / LinkedIn / Email / CV / Back to top).
- Buttons: solid `bg-primary` (no gradient), outline = hairline `border-foreground/25`.
- Chat widget: paper panel, hairline border, solid accent toggle/send, no glow, Escape to close,
  focus moves to input on open and back to the toggle on close. Typing state is a spinner + label.

## Copy rules
- One CTA label per intent: "Get in touch" (contact), "View projects" (projects).
- No invented metrics; facts come from `PRODUCT.md` content sources.
- Short, plain labels. No emoji, hype words, or exclamation marks.
