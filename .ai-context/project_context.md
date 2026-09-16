# Project Context

## Project Name
demo-sdd

## Project Type
Full Stack

## Architecture Style
Modular Monolith (Microservice Ready)

## Frontend Technology & Styling
Next.js (App Router, TypeScript), Tailwind CSS

## Backend Technology & Framework
Node.js + Express (TypeScript), organized into feature modules under `backend/src/modules/<module-name>/`

## Database & Data Access / ORM Layer
PostgreSQL + TypeORM

## Authentication & Security Strategy
JWT (via @nestjs/jwt, @nestjs/passport, passport-jwt)

## Deployment Target
Unknown / to be decided

## Governance & Reviewer Roster

- **Developer / Spec Author:** Santu Pradhan — santu.pradhan@intglobal.com
- **Gate 1 Reviewer(s) (Spec/Peer Review):** Supratim Jetty — supratim.jetty@intglobal.com
- **Gate 2 Reviewer(s) (Code Review):** Supratim Jetty — supratim.jetty@intglobal.com

## Repository Layout

- `frontend/` — Next.js application (TypeScript, App Router, Tailwind CSS)
- `backend/` — Node.js + Express application (TypeScript, TypeORM, PostgreSQL, JWT auth)
- `.agent/` — INT Control Plane (rules, workflows, local skills)
- `.ai-context/` — Project knowledge base (specs, plans, tasks, test cases, reviews, decisions, incidents, hotfixes, releases, change requests)

## Directory Tree (scanned from disk after CLI scaffolding)

See `.ai-context/architecture.md` for the full scanned directory tree.
