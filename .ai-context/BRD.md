# Business Requirements Document (BRD)

## Status
Pending Review

## Source Document
- **File:** `docs/Employee_Leave_Management_SOW_NextJS_NodeJS.pdf`
- **Document Type:** Statement of Work (SOW)
- **Version:** 1.1
- **Prepared Date:** 2026-09-16
- Only one source document exists under `docs/` — treated as the sole authoritative source, no version conflict to resolve.

## Approved Technology Deviation
- The SOW specifies **MySQL** as "the only database in scope" (SOW §3, §6, §11).
- The project was already scaffolded during `/int-project-setup` with **PostgreSQL + TypeORM**.
- **Decision (2026-09-17, confirmed by project owner):** Keep **PostgreSQL** as the project database. This is recorded as an approved deviation from the SOW's stated database technology. All downstream specs, plans, and the data model MUST target PostgreSQL, not MySQL. See `.ai-context/decisions/ADR-001.md`.

## Objective
Deliver a secure, maintainable and responsive Employee Leave Management mini-application where employees can apply for and track leave, while authorized managers/admins can review, approve, or reject leave requests. (SOW §2)

## Scope

### In Scope — Frontend (Next.js + TypeScript)
- Login screen with client-side validation and authenticated session handling.
- Employee dashboard showing leave balance, recent requests and request status.
- Employee profile page.
- Leave application form with leave type, dates and applicable remarks/reason.
- Leave request history with status and basic filtering.
- Manager/Admin dashboard for pending and historical leave requests.
- Request review screen with approve/reject actions and rejection reason.
- Responsive layouts for desktop and common mobile/tablet screen sizes.
- Reusable UI components, form handling, loading states and user-friendly error messages.
- Integration with Node.js REST APIs.
(SOW §4)

### In Scope — Backend (Node.js + Express.js + TypeScript)
- JWT-based login and authentication APIs.
- Role-based authorization for Employee and Manager/Admin access.
- Employee profile and leave balance APIs.
- Create, list, view and track leave requests.
- Approve/reject leave requests with validation of workflow rules.
- Leave types and applicable leave data APIs.
- Pagination/filtering where required for request lists.
- Request validation, centralized error handling and standardized API responses.
- Password hashing, rate limiting and secure HTTP headers.
- Swagger/OpenAPI API documentation and environment configuration.
(SOW §5)

### In Scope — Database
Core entities: Users, Employees, Leave Types, Leave Requests, Leave Balances. Schema, relationships, indexes and migrations required for the agreed workflow. Database engine: **PostgreSQL** (approved deviation — see above; SOW originally specified MySQL). (SOW §3, §6)

## Actors
- **Employee** — logs in, views dashboard/profile, applies for leave, tracks leave request status and history.
- **Manager/Admin** — logs in, views pending/historical leave requests across employees, approves or rejects requests with a rejection reason.

(SOW does not define additional actor types; no Super Admin or HR-specific actor is mentioned.)

## Functional Requirements

| ID | Requirement | Source |
|---|---|---|
| BRD-001 | System shall provide a login screen with client-side validation and authenticated session handling. | SOW §4 |
| BRD-002 | System shall provide JWT-based login and authentication APIs. | SOW §5, §10 |
| BRD-003 | System shall enforce role-based authorization distinguishing Employee and Manager/Admin access. | SOW §5, §10 |
| BRD-004 | Employee shall be able to view a dashboard showing leave balance, recent requests and request status. | SOW §4 |
| BRD-005 | Employee shall be able to view and manage a profile page. | SOW §4 |
| BRD-006 | Employee shall be able to submit a leave application specifying leave type, dates and remarks/reason. | SOW §4, §7 |
| BRD-007 | Employee shall be able to view leave request history with status and basic filtering. | SOW §4 |
| BRD-008 | System shall expose APIs to create, list, view and track leave requests. | SOW §5 |
| BRD-009 | System shall expose APIs for leave types and applicable leave data. | SOW §5 |
| BRD-010 | System shall support pagination/filtering on leave request list APIs where required. | SOW §5 |
| BRD-011 | Manager/Admin shall be able to view a dashboard listing pending and historical leave requests. | SOW §4, §7 |
| BRD-012 | Manager/Admin shall be able to review a leave request and approve or reject it, providing a rejection reason when rejecting. | SOW §4, §5, §7 |
| BRD-013 | System shall validate leave request workflow rules when approving/rejecting requests. | SOW §5 |
| BRD-014 | Rejected leave requests shall record the rejection reason and display it to the employee. | SOW §7 |
| BRD-015 | System shall provide Swagger/OpenAPI documentation for agreed APIs. | SOW §3, §5, §8 |
| BRD-016 | Frontend shall present responsive layouts for desktop and common mobile/tablet screen sizes. | SOW §4 |
| BRD-017 | Frontend shall protect authenticated routes/areas from unauthorized access. | SOW §10 |

## Non-Functional Requirements

| ID | Requirement | Source |
|---|---|---|
| BRD-NFR-001 | Backend shall implement JWT authentication and role-based authorization. | SOW §10 |
| BRD-NFR-002 | Passwords shall be stored using secure hashing; credentials handled securely. | SOW §5, §10 |
| BRD-NFR-003 | Input shall be validated on both frontend and backend, with backend validation treated as authoritative. | SOW §10 |
| BRD-NFR-004 | Backend APIs shall implement rate limiting and secure HTTP headers. | SOW §5, §10 |
| BRD-NFR-005 | Backend shall implement centralized error handling and a consistent/standardized API response structure. | SOW §5, §10 |
| BRD-NFR-006 | No sensitive credentials or secrets shall be committed to source control. | SOW §10 |
| BRD-NFR-007 | Solution shall be responsive across desktop and common mobile/tablet screen sizes. | SOW §4 |

## Business Rules
- Leave request lifecycle: Employee applies → Manager/Admin reviews → Approved or Rejected → status visible to employee. (SOW §7)
- A rejected leave request must always carry a rejection reason, recorded and shown to the employee. (SOW §7)
- Backend validation is authoritative over frontend validation in case of any discrepancy. (SOW §10)
- Specific leave entitlement, leave type catalog, approval hierarchy, and holiday rules are **not yet defined** — see Open Questions. (SOW §11)

## Assumptions
- Business rules for leave entitlement, leave types, approval hierarchy and holidays will be confirmed before implementation. (SOW §11)
- Client/team will provide required branding/content and deployment access. (SOW §11)
- One development and one production environment are assumed. (SOW §11)
- No third-party HRMS, payroll, attendance or notification integration is included. (SOW §11)
- Changes outside the SOW will be treated as change requests and estimated separately. (SOW §11, §14)

## Out of Scope
- Native Android/iOS application. (SOW §12)
- Payroll, attendance, biometric or HRMS integrations. (SOW §12)
- Email, SMS, WhatsApp or push notification integrations. (SOW §12)
- Advanced analytics/reporting and enterprise BI dashboards. (SOW §12)
- AI/ML functionality. (SOW §12)
- Third-party SSO unless separately agreed. (SOW §12)

## Open Questions
1. What are the exact leave entitlement rules, leave type catalog, and approval hierarchy? (Flagged as unconfirmed in SOW §11 — must be resolved before the leave-application and approval specs can be finalized.)
2. Are public holidays / non-working days factored into leave date calculations, and if so, per which calendar?
3. Can a Manager/Admin also be an Employee applying for their own leave, and if so, who approves it (self-approval prohibition)?
4. Is a single "Manager/Admin" role sufficient, or should Manager and Admin be distinct roles with different permissions (e.g., Admin manages leave types/balances, Manager only approves)? SOW consistently pairs them as one actor group.
5. What deployment target should be used? Not specified in the SOW; carried over as "Unknown / to be decided" from project setup.

## Acceptance Criteria
- AC1: Next.js frontend and Node.js/Express backend are integrated and functional. (SOW §13)
- AC2: Employees can log in, view their information, apply for leave and track requests. (SOW §13)
- AC3: Managers/Admins can review, approve and reject leave requests. (SOW §13)
- AC4: Authentication, authorization and validation operate as specified. (SOW §13)
- AC5: Agreed APIs are documented in Swagger/OpenAPI. (SOW §13)
- AC6: Agreed test cases pass and no critical/high-priority defects remain at final acceptance. (SOW §13)

## Constitution Note
The SOW does not contain a dedicated "Constitution" / "Engineering Constitution" section. `.ai-context/constitution.md` therefore remains the baseline authored during `/int-project-setup`, updated only for the approved PostgreSQL deviation and Node.js/Express backend (see `.ai-context/constitution.md`). No BRD-specific constitution content is available to ingest.
