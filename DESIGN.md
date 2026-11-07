# Design System: Developer Portfolio

## 1. Design Philosophy & Stance

- **Mode**: EXPERIENCE / PERSUADE (Technical Developer Showcase).
- **Aesthetic**: Premium, minimalist, engineering-first, distraction-free.
- **Tone**: Competent, precise, credible, recruiter-friendly.
- **Negative Rules (Zero AI Slop)**:
  - No purple/violet/indigo gradient backgrounds.
  - No pill-shaped buttons (standardize on `rounded-md` 6px or `rounded-lg` 8px).
  - No generic 3-column feature grids with icons in colored circles.
  - No decorative floating blobs, wavy SVG dividers, or glow halos.
  - No fake statistics, fake testimonials, or percentage-based skill meters.
  - No default font stacks (`system-ui`, `-apple-system`) as the display face.

## 2. Color Palette & Surface Tokens

```css
:root {
  /* Surfaces */
  --bg-primary: #0a0d14;    /* Deep slate base canvas */
  --bg-secondary: #111622;  /* Section alternating background */
  --bg-card: #161f30;       /* Elevated card and modal background */
  --bg-hover: #1c273c;      /* Interactive hover background */

  /* Borders & Dividers */
  --border-subtle: #1e293b; /* Slate-800 default boundary stroke */
  --border-focus: #334155;  /* Slate-700 active / focus stroke */

  /* Typography */
  --text-primary: #f8fafc;  /* Slate-50 high-contrast headings */
  --text-secondary: #94a3b8;/* Slate-400 body and descriptions */
  --text-muted: #64748b;    /* Slate-500 captions and meta labels */

  /* Functional Accents */
  --accent-active: #10b981; /* Emerald-500 for live status badge */
  --accent-cta: #38bdf8;    /* Sky-400 subtle interactive focus */
}
```

## 3. Typography Hierarchy

- **Display & Body Face**: `Inter`, sans-serif.
  - Page Title (H1): `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-50`.
  - Section Header (H2): `text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100`.
  - Card Title (H3): `text-lg sm:text-xl font-medium text-slate-100`.
  - Body: `text-base text-slate-400 leading-relaxed`.
- **Technical & Monospace Face**: `JetBrains Mono`, monospace.
  - Tags & Badges: `text-xs font-mono tracking-wide px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50`.
  - Code / Architecture Callouts: `text-xs sm:text-sm font-mono text-slate-300`.

## 4. Layout & Spacing Grid

- **8pt Spacing Grid**: `space-y-4` (16px), `space-y-8` (32px), `space-y-16` (64px), `py-20` (80px) per section.
- **Max Width Container**: `max-w-6xl` (1152px), centered with `mx-auto px-4 sm:px-6 lg:px-8`.
- **Rhythm**:
  - Hero $\rightarrow$ Featured Projects Showcase $\rightarrow$ Technical Skills Matrix $\rightarrow$ Experience Timeline $\rightarrow$ Education & Achievements $\rightarrow$ Contact.

## 5. Interaction States & Motion Guidelines

- **Motion**: Subtle exponential ease-out transitions (`transition-all duration-200 ease-out`).
  - No bouncing animations or jarring scroll-jacked reveals.
  - Respects `@media (prefers-reduced-motion: reduce)`.
- **Browser Surfaces**:
  - Selection: `::selection { background: #334155; color: #f8fafc; }`
  - Scrollbar: Dark tinted slate track and thumb (`scrollbar-thin scrollbar-thumb-slate-700`).
  - Focus Ring: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950`.

## 6. Accessibility & Touch Standards

- **Color Contrast**: All body text $\ge 4.5:1$ against background; display text $\ge 3:1$.
- **Touch Targets**: Minimum $44 \times 44\text{px}$ on all interactive buttons and mobile links.
- **Modals**: Focus trapped within dialog, `role="dialog"`, `aria-modal="true"`, closed via `Escape` key or backdrop click.
