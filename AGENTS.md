# AGENTS.md — INT AI-First Engineering Policy

This file makes the repository self-contained and vendor-agnostic: any AI coding assistant (Claude, Gemini, Cursor, Windsurf, Copilot, etc.) or human contributor working in this repository MUST follow the rules below.

## Authority Hierarchy

1. **Local repository first** — `.agent/workflows/<workflow>.md`, `AGENTS.md` (this file), and `.agent/skills/<skill>/SKILL.md` inside this repository take precedence over everything else.
2. **Global fallback second** — only if a requested workflow, skill, or rule is not present locally under `.agent/`, fall back to the assistant's global workflow/skill configuration.
3. **Project knowledge base (`.ai-context/`)** — the authoritative source of project-specific facts: requirements (`BRD.md`), constraints (`constitution.md`), architecture (`architecture.md`), and current status (`status.md`). It MUST NOT be overwritten with generic/organization-wide standards, and organization-wide rules MUST NOT silently override BRD-provided constraints.

## Project Snapshot

- **Name:** demo-sdd
- **Type:** Full Stack
- **Architecture:** Modular Monolith (Microservice Ready)
- **Frontend:** Next.js (TypeScript, App Router, Tailwind CSS) — `frontend/`
- **Backend:** Node.js + Express (TypeScript, TypeORM, PostgreSQL, JWT) — `backend/`
- Full details: `.ai-context/project_context.md`, `.ai-context/architecture.md`

## Lifecycle

This repository follows the INT Spec-Driven Development (SDD) lifecycle:

1. **BRD Ingestion** (`.agent/skills/int-brd-ingestion` or the global `int-brd-ingestion` skill) — ingest business requirements into `.ai-context/BRD.md`.
2. **Feature Development** (`int-sdd-lifecycle`) — Spec → Gate 1 Peer Review → Plan → Tasks → Test-First (TDD) Implementation → Gate 2 Code Review → Done.
3. **Production Incident Management** (`int-incident-management`) — triage and classify incidents under `.ai-context/incidents/`.
4. **Hotfix Management** (`int-hotfix-management`) — emergency fixes with post-hoc Gate 2 review, tracked under `.ai-context/hotfixes/`.
5. **Release Management** (`int-release-management`) — release notes and version transitions under `.ai-context/releases/`.
6. **Session Continuation** (`int-session-continuation`) — resume work across session restarts using `.ai-context/status.md` and git state.

## Core Governance Rules

- Every feature MUST have an approved Spec (`.ai-context/specs/<feature-slug>.spec.md`) before implementation begins.
- Every Spec requires a **Gate 1** reviewer sign-off before planning, and every implementation requires a **Gate 2** reviewer sign-off before merge/release.
- All artifacts in `.ai-context/` use **flat file naming** — no feature-slug subdirectories inside `specs/`, `plans/`, `tasks/`, or `test_cases/`.
- All file references inside repository artifacts MUST be **repository-relative paths** — never absolute local filesystem paths.
- `.ai-context/test_cases/` holds test-case specifications only; executable automated tests live in `frontend/` and `backend/`'s own test directories.
- `.ai-context/prompt_history.md` is **strictly append-only**.
- The INT Control Plane (`.agent/`) is an organizational standard and MUST remain unchanged except through the `int-sync-global-skills` (master admin only) or `/int-project-setup` non-destructive sync protocol.

## Governance Roster

- **Developer / Spec Author:** Santu Pradhan — santu.pradhan@intglobal.com
- **Gate 1 Reviewer(s):** Supratim Jetty — supratim.jetty@intglobal.com
- **Gate 2 Reviewer(s):** Supratim Jetty — supratim.jetty@intglobal.com
