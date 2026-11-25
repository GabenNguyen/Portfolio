# PRODUCT — Gaben Nguyen Portfolio

Product truth, captured from the existing codebase and config (assumptions labeled).

## What this is
Personal portfolio site of **Ba Hoa Nguyen ("Gaben")**, Bachelor of IT student at
Adelaide University (expected 2027), based in Para Hills, South Australia.

## Audience
Recruiters, internship/graduate-role hiring managers, and potential collaborators.

## Jobs to be done (in priority order)
1. Show who Gaben is and what he can build (home, about).
2. Show shipped projects with source links (projects).
3. Make contact frictionless — email form + phone/email/social (contact).
4. Allow CV download from anywhere (nav + footer).

## Content sources of truth
- `config/portfolio-data.ts` — name, contact, education, skills, projects (ResumeScope, IntelliCheck).
- `app/about/page.tsx` — full CV content: profile prose, soft/technical skills, education
  (Adelaide University GPA 6.18/7.0 + UniSA Merit Scholarship; International University 2022-2024),
  tutoring experience, hobbies.
- `app/project/page.tsx` — 4 projects incl. Personal Portfolio and TaskMaster (in development).
- `public/Resume_Ba_Hoa_NGUYEN_New.pdf` — CV asset.
- `public/avatar.png` — portrait.

## Functional surface (must keep working)
- Contact form posts to `/api/send` (Resend). **Backend is out of scope for UI changes.**
- Theme toggle (light / dark / system) via next-themes.
- CV download link, GitHub/LinkedIn external links.

## Assumptions (inferred, not confirmed by the owner)
- "Sophomore" = year 2 of the Bachelor of IT.
- Only the 2 projects in `portfolioData` count as "shipped"; TaskMaster is in development.
- Contact within 24h is the expected reply window (carried over from existing copy).
