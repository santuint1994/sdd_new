# Architecture

## Architecture Style
Modular Monolith (Microservice Ready)

Frontend and backend are deployed as two independent modular monolith services (`frontend/`, `backend/`), each internally organized into clear module boundaries so individual modules can be extracted into microservices later without a rewrite.

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (App Router, TypeScript), Tailwind CSS |
| Backend | Node.js + Express (TypeScript) |
| Database | PostgreSQL |
| ORM / Data Access | TypeORM |
| Authentication | JWT (`jsonwebtoken`, `bcryptjs` for password hashing) |
| Config | `dotenv` |
| Validation | `class-validator`, `class-transformer` |
| Deployment Target | Unknown / to be decided |

## Scanned Directory Tree (post CLI-scaffolding)

### `frontend/` (generated via `create-next-app@latest --typescript --app --eslint --tailwind --src-dir`)

```
frontend/
├── .gitignore
├── AGENTS.md              (CLI-generated, informational — not the repo governance AGENTS.md at root)
├── CLAUDE.md              (CLI-generated)
├── README.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
└── tsconfig.json
```

### `backend/` (scaffolded via `express-generator`, converted to TypeScript)

```
backend/
├── .env.example
├── package.json
├── src/
│   ├── app.ts                        # Express app assembly (middleware, route mounting)
│   ├── server.ts                     # HTTP server entry point
│   ├── data-source.ts                # TypeORM DataSource configuration (PostgreSQL)
│   └── modules/
│       └── health/
│           └── health.routes.ts      # Example feature module (GET /health)
└── tsconfig.json
```

Backend built by scaffolding via `express-generator` (JS skeleton), then removing the generated `app.js`/`bin/`/`routes/`/`public/` and replacing them with a TypeScript `src/` layout. Dependencies: `express`, `cors`, `dotenv`, `typeorm`, `pg`, `reflect-metadata`, `jsonwebtoken`, `bcryptjs`, `class-validator`, `class-transformer` (+ `typescript`, `tsx`, `@types/*` dev dependencies). Dev server runs via `tsx watch` (TypeScript 7 is not yet compatible with `ts-node`); production build via `tsc` → `dist/`.

## Module Boundary Convention (Modular Monolith)

As backend features are added via the SDD lifecycle, each feature/domain MUST be organized as a self-contained module under `backend/src/modules/<module-name>/` (routes, service, entities, DTOs) so it can be extracted into an independent microservice later with minimal coupling. Cross-module communication should go through exported functions/interfaces, not direct internal imports of another module's internals.

Frontend features should be organized under `frontend/src/app/<route-segment>/` following Next.js App Router conventions, with shared UI/logic under `frontend/src/components/` and `frontend/src/lib/` as they are introduced.

## Root-Level Structure

```
.
├── .agent/            # INT Control Plane (rules, workflows, local skills)
├── .ai-context/        # Project knowledge base (specs, plans, tasks, reviews, decisions, etc.)
├── backend/           # Node.js + Express backend service
├── frontend/          # Next.js frontend application
├── AGENTS.md          # Vendor-agnostic governance policy (repo root)
└── .gitignore
```
