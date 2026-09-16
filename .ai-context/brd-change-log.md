# BRD Change Log

This is an append-only chronological log of BRD ingestions and changes, maintained by the `int-brd-ingestion` skill.

## 2026-09-17 — Initial BRD Ingestion

- **Source:** `docs/Employee_Leave_Management_SOW_NextJS_NodeJS.pdf` (SOW v1.1, prepared 2026-09-16). Sole document under `docs/` — no version conflict.
- **Action:** Created `.ai-context/BRD.md` baseline (BRD-001 … BRD-017 functional requirements, BRD-NFR-001 … BRD-NFR-007 non-functional requirements, actors, business rules, assumptions, out-of-scope, 5 open questions, acceptance criteria AC1–AC6). Status set to **Pending Review** — Gate 0 approval required before spec generation.
- **Conflict Identified & Resolved:** SOW specifies MySQL as the only in-scope database; project was already scaffolded with PostgreSQL + TypeORM during `/int-project-setup`. Flagged to project owner; **resolved 2026-09-17: keep PostgreSQL** (approved deviation). Recorded in `.ai-context/decisions/ADR-001.md` and in the BRD's "Approved Technology Deviation" section.
- **No team role conflict:** SOW does not name any stakeholders/reviewers, so no conflict with the existing `.ai-context/constitution.md` / `project_context.md` governance roster (Developer: Santu Pradhan; Gate 1/Gate 2 Reviewer: Supratim Jetty).
- **Business modules:** Not yet generated — blocked pending Gate 0 BRD approval and Gate 1 architecture review, per protocol.
- **Impact:** No existing specs affected (none exist yet).
