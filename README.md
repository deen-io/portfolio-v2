# Portfolio v2

A personal portfolio site built to showcase a senior software engineer's expertise and project history, with a clean, elegant design aimed at recruiters and hiring managers. Built with React, Vite, and Tailwind CSS, and originally scaffolded inside [Figma Make](https://www.figma.com/make/).

## Tech Stack

- **Framework:** React 19 + React DOM 19
- **Build tool:** Vite 8
- **Language:** TypeScript 5.7 (strict mode)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` (no separate Tailwind/PostCSS config needed)
- **Formatting:** oxfmt
- **Package manager:** pnpm (via mise, see below)

## Project Structure

```
.
├── index.html          # Vite HTML shell; mounts #root and loads src/main.tsx
├── src/
│   ├── main.tsx         # React entrypoint; imports index.css, mounts App.tsx
│   ├── App.tsx          # Main application component (portfolio content/sections)
│   ├── index.css        # Global CSS entrypoint + Tailwind v4 import
│   └── vite-env.d.ts    # Vite/TypeScript environment types
├── public/
│   └── favicon.svg
├── vite.config.ts      # Vite config: React + Tailwind v4 + Figma Make plugins, `@` → src alias
├── tsconfig.json        # TypeScript config (strict, `@/*` path alias to src)
├── .mise.toml           # Toolchain versions (Node 22, pnpm 10.34.3)
└── package.json
```

## Getting Started

### Prerequisites

- [mise](https://mise.jdx.dev/) (recommended) to pick up the Node/pnpm versions pinned in `.mise.toml`, or manually:
  - Node.js 22
  - pnpm 10.34.3

### Install

```bash
pnpm install
```

### Develop

```bash
pnpm dev
```

Starts the Vite dev server (default port `8443`) with hot module reload.

### Build

```bash
pnpm build
```

Produces a production build via `vite build`.

### Preview

```bash
pnpm preview
```

Serves the production build locally for a final check.

### Format

```bash
pnpm format
```

Formats the codebase with oxfmt.

## Content Overview

`src/App.tsx` drives the page content, including:

- **Projects:** ERP Universe, Billing System Modernization, and Business Applications — each with a role, description, narrative summary, and tech stack used.
- **Skills:** Grouped into Backend, Database, Frontend, and Tools & Practices.

## Notes

- This project was scaffolded in Figma Make; `vite.config.ts` includes Figma Make-specific plugins alongside the standard React and Tailwind plugins.
- Use the `@` import alias (e.g. `@/App`) to reference files under `src/`.
- See [AGENTS.md](./AGENTS.md) for agent/AI-assistant-specific conventions used in this repo (code style rules, project structure guide, etc.).
