# Project Constitution

> No BRD was supplied during initial project setup. This constitution captures the baseline engineering rules confirmed at setup. It MUST be revised once a BRD with a Constitution / Engineering Constitution section is ingested (see `int-brd-ingestion`) — at that point, BRD-provided constraints become authoritative and take precedence over these defaults.

## Testing Discipline
- Test-first (TDD) discipline is followed per the `int-sdd-lifecycle` skill: unit test cases are derived directly from spec Acceptance Criteria before implementation.
- Automated tests live under `tests/frontend/` and `tests/backend/` (or the respective app's own test directories, e.g. `backend/src/**/*.test.ts`), never inside `.ai-context/test_cases/` (specs only).

## Security Posture
- Authentication strategy: JWT (`jsonwebtoken`, with `bcryptjs` for password hashing).
- Secrets and credentials MUST NOT be committed to the repository (see `.gitignore`: `.env`, `.env.local`, `.env.*.local`, `*.pem`). Use `backend/.env.example` as the template for local `.env` files.

## Architectural Constraints
- Architecture style: Modular Monolith (Microservice Ready) — see `.ai-context/architecture.md`.
- Backend: Node.js + Express (TypeScript), organized into per-feature modules under `backend/src/modules/<module-name>/`.
- Frontend: Next.js (App Router, TypeScript) with Tailwind CSS.
- Database: PostgreSQL accessed via TypeORM.
- No new datastore, message broker, or external infrastructure dependency may be introduced without an ADR (`.ai-context/decisions/ADR-NNN.md`).

## Non-Functional Baselines
- Not yet specified by a BRD. To be defined per-feature in spec Non-Functional Constraints sections, or organization-wide once a BRD is ingested.

## Versioning Rules
- Releases are tracked via `.ai-context/releases/RELEASE-vX.Y.Z.md` and follow semantic versioning (MAJOR.MINOR.PATCH).
