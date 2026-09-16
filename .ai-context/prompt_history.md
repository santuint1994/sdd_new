# Prompt History

Append-only chronological audit log of user prompts, change requests, and AI execution turns.

---

## 2026-09-16 — Initial Project Setup

**User:** Requested `/int-project-setup`.

**Discovery Gate Outcomes:**
- Project Name: demo-sdd
- Project Type: Full Stack
- Architecture Style: Modular Monolith (Microservice Ready)
- Frontend: Next.js (TypeScript, App Router, Tailwind CSS)
- Backend: Separate Node.js/TypeScript service — NestJS selected (fits modular-monolith/microservice-ready architecture)
- Database & ORM: PostgreSQL + TypeORM (selected over Sequelize for native NestJS integration)
- Authentication: JWT
- Deployment Target: Unknown / decide later
- Gate 1 Reviewer: Supratim Jetty (supratim.jetty@intglobal.com)
- Gate 2 Reviewer: Supratim Jetty (supratim.jetty@intglobal.com)
- Developer: Shamik Bhattacharya (shamik.bhattacharya@intglobal.com)

**Execution:**
- Scaffolded `frontend/` via `create-next-app@latest`.
- Scaffolded `backend/` via `@nestjs/cli@10` (latest CLI failed on this machine's Node v22.14.0 due to an ESM require-cycle error; pinned to v10 as a compatible fallback).
- Installed backend dependencies: `@nestjs/typeorm`, `typeorm`, `pg`, `@nestjs/jwt`, `@nestjs/passport`, `passport`, `passport-jwt`, `@nestjs/config`, `class-validator`, `class-transformer`, `@types/passport-jwt`.
- Copied INT Control Plane (`.agent/rules/`, `.agent/workflows/`, excluding `int-sync-global-skills.md`) from local skill resources.
- Copied local project skills (`SKILL.md` only, no `resources/`) into `.agent/skills/`.
- Generated `.ai-context/` knowledge base: `constitution.md`, `project_context.md`, `architecture.md`, `BRD.md`, `brd-change-log.md`, `status.md`, `prompt_history.md`, all 10 mandatory subdirectories with `.gitkeep`, and all 12 templates in `.ai-context/templates/`.
- Note: global template/config resources referenced by the skill (`C:\Users\Supratim_Jetty\.gemini\config\...`) do not exist on this machine; the 12 templates and root `AGENTS.md` were authored directly from the skill's embedded specification instead of copied.
- Generated root `AGENTS.md` and `.gitignore`.

---

## 2026-09-16 — Backend Framework Correction

**User:** "backend will be node js insted of nest.js" (backend must be plain Node.js, not NestJS). User also manually edited `.ai-context/project_context.md` to set Developer/Spec Author to Santu Pradhan (santu.pradhan@intglobal.com).

**Execution:**
- Removed the NestJS `backend/` scaffold entirely.
- Re-scaffolded `backend/` via `express-generator` (official CLI for plain Node.js/Express), then converted the generated JS skeleton to TypeScript: removed `app.js`/`bin/`/`routes/`/`public/`, added `src/app.ts`, `src/server.ts`, `src/data-source.ts` (TypeORM DataSource), `src/modules/health/health.routes.ts` (example module), `tsconfig.json`, `.env.example`.
- Kept PostgreSQL + TypeORM and JWT auth (switched from NestJS packages `@nestjs/typeorm`/`@nestjs/jwt`/`@nestjs/passport` to framework-agnostic `typeorm`, `pg`, `jsonwebtoken`, `bcryptjs`).
- `ts-node-dev` was incompatible with the installed TypeScript 7 (`Cannot read properties of undefined (reading 'fileExists')`); replaced with `tsx watch` for the `dev` script.
- Verified: `tsc --noEmit` passes, `npm run build` produces `dist/`, `tsx watch src/server.ts` serves `GET /health` → `{"status":"ok"}`.
- Updated `.ai-context/project_context.md`, `.ai-context/architecture.md`, `.ai-context/constitution.md`, and root `AGENTS.md` to reflect Node.js/Express instead of NestJS, and synced the Developer/Spec Author roster (Santu Pradhan) into `AGENTS.md`.

---

## 2026-09-17 — BRD Ingestion (Employee Leave Management)

**User:** Ran `/int-brd-ingestion`.

**Source:** `docs/Employee_Leave_Management_SOW_NextJS_NodeJS.pdf` (SOW v1.1, prepared 2026-09-16) — the only document under `docs/`, so no authoritative-version ambiguity.

**Conflict Raised:** SOW mandates MySQL as the only in-scope database, but the project was already scaffolded with PostgreSQL + TypeORM during `/int-project-setup`. Asked the user to resolve. **User decision: keep PostgreSQL.**

**Execution:**
- Created `.ai-context/decisions/ADR-001.md` recording the approved PostgreSQL-over-MySQL deviation.
- Authored `.ai-context/BRD.md` baseline: Objective, Scope (frontend/backend/database), Actors (Employee, Manager/Admin), 17 functional requirements (BRD-001–BRD-017), 7 non-functional requirements (BRD-NFR-001–BRD-NFR-007), business rules, assumptions, out-of-scope items, 5 open questions (leave entitlement rules, holiday calendar, self-approval, Manager vs Admin role split, deployment target), and acceptance criteria AC1–AC6 — all traced to SOW sections. Status set to **Pending Review** (Gate 0).
- No BRD-provided Constitution section exists in the SOW, so `.ai-context/constitution.md` was left as the setup-time baseline (already reflects Node.js/Express + PostgreSQL); noted this explicitly in BRD.md.
- No stakeholder/reviewer names are given in the SOW, so no team-role conflict with the existing governance roster (Developer: Santu Pradhan; Gate 1/Gate 2: Supratim Jetty).
- Logged the ingestion, conflict, and resolution in `.ai-context/brd-change-log.md`.
- Updated `.ai-context/status.md` with BRD status (Pending Review) and next step (Gate 0 reviewer sign-off required).
- **Not done (per protocol):** No specs or business module folders generated — blocked until Gate 0 (BRD PR review) approval, and Gate 1 (architecture review) after that.

---

## 2026-09-17 — Gate 0 PR Review (BRD-Baseline)

**User:** Ran `/int-pr-gate-workflow`.

**Pre-Check Authorization:**
- Logged-in Git user: Supratim (`supratim.jetty@intglobal.com`)
- Assigned Reviewer: Supratim Jetty (`supratim.jetty@intglobal.com`)
- Verification: Matched assigned reviewer roster for Gate 0, Gate 1, and Gate 2. Authorized.

**Action:**
- Selected **Option 1 — Review Pending PR Items**.
- Item reviewed: `BRD-Baseline` (`.ai-context/BRD.md`).
- Review Decision: **Rejected**.
- Reviewer Feedback: `"There is no mention how to create role base access for employee , please review and re submit"`.

**Synchronization Performed:**
- Created dedicated PR Review file: `.ai-context/pr_reviews/GATE0-BRD-Baseline-20260917-003748.md`.
- Updated `.ai-context/BRD.md` status to `Rejected (Gate 0 Rejection — 2026-09-17)` with review comments and action required.
- Updated `.ai-context/status.md` BRD section status to `Rejected (Gate 0)` with reviewer feedback and next steps.
- Appended turn log entry to `.ai-context/prompt_history.md`.

