<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:figma-design-system-rules -->
# Figma MCP Integration Rules

These rules define how to translate Figma inputs into code for this project and must be followed for every Figma-driven change.

## Project Stack

- **Framework**: Next.js 16.2.2 — App Router only (no Pages Router). Read `node_modules/next/dist/docs/` before using any Next.js API.
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 — uses `@import "tailwindcss"` and `@theme inline {}` in `src/app/globals.css`. There is NO `tailwind.config.js`.
- **Path alias**: `@/*` maps to `./src/*`
- **Fonts**: Geist Sans (`--font-geist-sans`) and Geist Mono (`--font-geist-mono`) loaded via `next/font/google` in `src/app/layout.tsx`

## Component Organization

- Place new UI components in `src/components/ui/`
- Place page-level sections in `src/components/sections/`
- Use PascalCase for component filenames and exports (e.g., `HeroSection.tsx`)
- Export components as default exports

## Styling Rules

- IMPORTANT: Use Tailwind CSS v4 utility classes for all styling — do NOT use inline styles or CSS Modules
- IMPORTANT: Never hardcode color hex values — use the CSS variables defined in `src/app/globals.css`:
  - `var(--background)` / `bg-background` — page background
  - `var(--foreground)` / `text-foreground` — default text
  - Extend `@theme inline {}` in `src/app/globals.css` when adding new design tokens
- For dark mode, use the `dark:` Tailwind variant (dark mode is `prefers-color-scheme` based)
- Typography uses `font-sans` (Geist) and `font-mono` (Geist Mono)
- IMPORTANT: Tailwind v4 does NOT use `@apply` the same way as v3 — prefer utility classes directly in JSX

## Required Figma Implementation Flow (do not skip)

1. Run `get_design_context` to fetch the structured representation for the exact node(s)
2. If the response is too large or truncated, run `get_metadata` for the high-level node map, then re-fetch only required nodes
3. Run `get_screenshot` for a visual reference of the variant being implemented
4. Only after you have both `get_design_context` and `get_screenshot`, download assets and begin implementation
5. Translate the Figma MCP output (usually React + Tailwind) into this project's conventions
6. Validate the final UI against the Figma screenshot for 1:1 visual parity before marking complete

## Implementation Rules

- Treat Figma MCP output as a representation of design intent, not final code — adapt to project conventions
- Reuse existing components from `src/components/` before creating new ones
- Use the `@/` import alias for all internal imports (e.g., `import Hero from "@/components/sections/Hero"`)
- Use `next/image` for all images with explicit `width` and `height` props
- Use `next/link` for all internal navigation links
- Server Components are the default in Next.js App Router — only add `"use client"` when strictly required (event handlers, browser APIs, hooks)

## Asset Handling

- IMPORTANT: If the Figma MCP server returns a localhost source for an image or SVG, use that source directly
- IMPORTANT: DO NOT install new icon packages — use assets from the Figma payload or inline SVGs
- IMPORTANT: DO NOT use placeholder images if a localhost source is provided
- Store static assets in `public/` (accessible as `/filename` in the app)
- Store SVG components in `src/components/icons/`

## Design Token Additions

When Figma introduces new colors, spacing, or typography not covered by existing tokens:
1. Add the token as a CSS variable in the `:root` block in `src/app/globals.css`
2. Register it in the `@theme inline {}` block so Tailwind can use it as a utility class
3. Use `dark:` overrides inside the `@media (prefers-color-scheme: dark)` block when needed
<!-- END:figma-design-system-rules -->
