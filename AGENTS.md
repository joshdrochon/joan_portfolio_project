<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:figma-design-system-rules -->
# Figma MCP Integration Rules

These rules define how to translate Figma inputs into code for this project and must be followed for every Figma-driven change.

---

## 1. Project Stack

- **Framework**: Next.js 16.2.2 — App Router only (no Pages Router). Read `node_modules/next/dist/docs/` before using any Next.js API.
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 — uses `@import "tailwindcss"` and `@theme inline {}` in `src/app/globals.css`. There is NO `tailwind.config.js`.
- **Path alias**: `@/*` maps to `./src/*`
- **Test runner**: Vitest + React Testing Library (jsdom). Tests live in `__tests__/` subdirs alongside components.

---

## 2. Design Token Definitions

**File**: `src/app/globals.css`

All tokens are CSS custom properties registered via Tailwind's `@theme inline {}` block. Do NOT hardcode hex values in components.

### Color tokens (current)

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

@theme inline {
  --color-background: var(--background);  /* → bg-background */
  --color-foreground: var(--foreground);  /* → text-foreground */
}
```

### Hardcoded colors in current components (candidates to tokenize)

| Value | Usage | Suggested token name |
|---|---|---|
| `#FFFF99` | Sticky note card background | `--color-sticky-note` |
| `#C9A85C` | Clothespin SVG fill | `--color-clothespin` |
| `#1a8dd4` | LinkedIn link hover | `--color-link-hover` |
| `#0d5fa0` | LinkedIn link active | `--color-link-active` |
| `border-yellow-300` | Sticky note border | (Tailwind built-in) |

When Figma introduces new colors, spacing, or typography not covered by existing tokens:
1. Add a CSS variable in the `:root` block in `src/app/globals.css`
2. Register it in `@theme inline {}` so Tailwind generates a utility class
3. Add a `dark:` override inside the `@media (prefers-color-scheme: dark)` block if needed

### Font tokens

```css
@theme inline {
  --font-sans:        var(--font-geist-sans);    /* → font-sans */
  --font-mono:        var(--font-geist-mono);    /* → font-mono */
  --font-handwritten: var(--font-just-me);       /* → font-handwritten */
  --font-sticky:      var(--font-indie-flower);  /* → font-sticky */
}
```

All fonts are loaded in `src/app/layout.tsx` via `next/font/google`. Do NOT import fonts anywhere else.

---

## 3. Typography System

| Role | Tailwind class | Size (current usage) |
|---|---|---|
| Hero heading | `font-handwritten` | `text-[96px] tracking-[-0.96px]` |
| Section heading | `font-handwritten` | `text-[72px]` or `text-[56px]` |
| Card label | `font-sticky` | `text-[36px]` |
| Sub-label | `font-mono` | `text-[20px]` |
| Body | `font-sans` | Tailwind defaults |

- Prefer arbitrary tracking values matching Figma specs exactly (`tracking-[-0.96px]`, `tracking-[4px]`, `tracking-[6.4px]`).
- Do NOT add new Google Fonts without also registering them in `layout.tsx` and `@theme inline {}`.

---

## 4. Component Library

### Directory layout

```
src/
├── app/
│   ├── api/contact/route.ts   ← POST handler (nodemailer → Gmail)
│   ├── globals.css            ← Tailwind v4 tokens + global resets
│   ├── layout.tsx             ← Root layout: fonts, metadata
│   └── page.tsx               ← Home page (assembles sections)
├── components/
│   ├── sections/              ← Page-level sections (prefer Server Components)
│   │   ├── HeroSection.tsx
│   │   ├── CardsSection.tsx   ← "use client"
│   │   ├── ProjectsSection.tsx
│   │   └── __tests__/
│   └── ui/                    ← Reusable UI atoms
│       ├── PolaroidCard.tsx           ← "use client"
│       ├── PolaroidCard.module.css    ← EXCEPTION: animation-only CSS Module
│       ├── AboutMeModal.tsx           ← "use client"
│       ├── ContactFormModal.tsx       ← "use client"
│       └── __tests__/
├── data/
│   └── about.ts               ← Static content (greeting, sections[])
└── test/
    └── setup.tsx              ← next/image mock for jsdom
```

### Existing components — reuse before creating new ones

| Component | File | Notes |
|---|---|---|
| `PolaroidCard` | `src/components/ui/PolaroidCard.tsx` | Props: `imageUrl`, `label`, `onClick`. 288px wide. Hover develops photo. |
| `AboutMeModal` | `src/components/ui/AboutMeModal.tsx` | Props: `isOpen`, `onClose`. Reads from `@/data/about`. |
| `ContactFormModal` | `src/components/ui/ContactFormModal.tsx` | Props: `isOpen`, `onClose`. POSTs to `/api/contact`. |
| `HeroSection` | `src/components/sections/HeroSection.tsx` | Server Component. Profile image + name. |
| `CardsSection` | `src/components/sections/CardsSection.tsx` | Client. Rope + clothespin layout with 4 cards. |
| `ProjectsSection` | `src/components/sections/ProjectsSection.tsx` | Server Component. 3-col grid. |

---

## 5. Styling Rules

- **Primary**: Tailwind CSS v4 utility classes directly in JSX.
- **Exception — CSS Modules**: Only for multi-step CSS animations that cannot be expressed in Tailwind (e.g., the 4s photo-developing filter in `PolaroidCard.module.css`). Keep modules minimal.
- **Exception — inline `style={{}}`**: Only for truly dynamic values (e.g., computed rotation angles, gradient strings built at runtime). Never for static design values.
- **Never** use `@apply` — Tailwind v4 dropped broad `@apply` support.
- **Never** hardcode hex color values in components — use CSS variables or Tailwind tokens.

### Layout patterns in use

| Pattern | Classes |
|---|---|
| Page max-width container | `max-w-[1280px] mx-auto` |
| Section vertical rhythm | `pt-16 pb-20` or `px-12 py-20` |
| Card grid (projects) | `grid grid-cols-3 gap-10` |
| Card row (clothesline) | `flex gap-6` (inside CardsSection) |
| Full-viewport modal overlay | `fixed inset-0 flex items-center justify-center` |

### Responsive design

Currently desktop-first. When adding responsive breakpoints use Tailwind's `sm:`, `md:`, `lg:` prefixes.

---

## 6. Asset Management

- **Static assets**: `public/` directory — referenced as `/filename` (e.g., `/profile.jpg`, `/resume.pdf`).
- **All images**: Use `next/image` with explicit `width`/`height` or `fill` prop. Never use `<img>`.
- **Remote images**: Allowed hosts are configured in `next.config.ts`. Currently only `picsum.photos` is allowed. Add new hostnames there if needed.
- **Resume download**: Triggered client-side with `<a href="/resume.pdf" download>` or `window.open`.

```typescript
// next.config.ts — add remote hosts here
images: {
  remotePatterns: [
    { protocol: "https", hostname: "picsum.photos" },
  ],
}
```

---

## 7. Icon System

No icon package is installed. All icons are inline SVGs authored directly in component files.

- Store reusable SVG components in `src/components/icons/` (directory exists per convention; currently empty).
- Do NOT install `react-icons`, `lucide-react`, `heroicons`, or similar packages.
- If Figma provides an SVG asset via localhost URL, embed it directly.
- Name icon components `{Name}Icon.tsx` (PascalCase + `Icon` suffix).

### Example pattern (from CardsSection.tsx)

```tsx
function ClothespinSVG() {
  return (
    <svg width="16" height="68" viewBox="0 0 16 68" fill="none">
      <rect x="0" y="0" width="16" height="68" rx="4" fill="#C9A85C" />
      <line x1="0" y1="48" x2="16" y2="48" stroke="#A0A0A0" strokeWidth="2.5" />
    </svg>
  );
}
```

---

## 8. Server vs. Client Components

Only add `"use client"` when the component **requires** one of:
- React state or effects (`useState`, `useEffect`, `useRef`, etc.)
- Browser-only APIs (`window`, `document`, `localStorage`)
- Event handlers attached directly in JSX (`onClick`, `onChange`)

Current client components: `CardsSection`, `PolaroidCard`, `AboutMeModal`, `ContactFormModal`.
Current server components: `HeroSection`, `ProjectsSection`, `layout.tsx`, `page.tsx`.

---

## 9. Data Layer

Static content lives in `src/data/`. Import with `@/data/…`.

```typescript
// src/data/about.ts shape
export const about = {
  greeting: string;
  subtitle: string;
  intro: string;
  sections: Array<{ emoji: string; title: string; body: string }>;
};
```

Project data is currently inlined in `ProjectsSection.tsx`. If it grows, extract to `src/data/projects.ts` using the same pattern.

---

## 10. API Routes

- `POST /api/contact` — sends email via nodemailer (Gmail SMTP).
- Requires env vars: `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`.
- Returns `{ success: true }` on success, HTTP 500 on failure.

---

## 11. Required Figma Implementation Flow (do not skip)

1. Run `get_design_context` for the exact node(s) to get structured output + a code reference.
2. If response is too large/truncated, run `get_metadata` for the node map, then re-fetch specific nodes.
3. Run `get_screenshot` to get a visual reference of the variant.
4. Only after you have both outputs, begin implementation.
5. Adapt Figma MCP output (React + Tailwind) to this project's conventions (tokens, font classes, component reuse).
6. Validate the final UI against the Figma screenshot for 1:1 visual parity before marking complete.

---

## 12. Implementation Rules

- Treat Figma MCP output as design intent, not final code — always adapt to project conventions.
- Reuse existing components from `src/components/` before creating new ones.
- Use the `@/` import alias for all internal imports.
- Use `next/image` for all images with explicit dimensions or `fill`.
- Use `next/link` for all internal navigation.
- Server Components are the default — only add `"use client"` when strictly required.
- If the Figma MCP server returns a localhost URL for an image or SVG, use it directly.
- Do NOT install new icon or UI packages without explicit user approval.
<!-- END:figma-design-system-rules -->
