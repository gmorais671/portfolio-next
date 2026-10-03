# Portfolio content architecture

Professional source: `../../gabriel_morais_master_brag_document_v2.md`.
Public language: Portuguese (`/pt`) and English (`/en`). `/` redirects to `/pt`.
The descriptive barbershop title replaces the retired brand in both languages and URLs.

## Homepage: curiosity and proof

Hero → three featured case studies → four delivery signals → supporting project rail → short About → contact → footer.

The redesign removes the homepage architecture diagram, secondary project-card grid,
long delivery columns and experience timeline. Supporting work uses a manual horizontal
rail with real project images, concise copy, at most three tags and one delivery highlight.
It shows approximately 2.75 cards on desktop and 1.1 on mobile, with CSS scroll snap,
native touch scrolling, mouse drag, arrow/Home/End keyboard navigation and manual controls.
There is no autoplay. It keeps the existing routes, data model,
contact integration, project images and bilingual structure from the preceding version.

The featured previews use one paragraph, at most five technology names, one factual
highlight, one link and one visual. Numbering expresses the requested showcase order.
The barbershop visual is explicitly labeled as a flow illustration, not a screenshot.
Deep architecture, trade-offs, delivery context and quality limitations belong on case pages.

## Source mapping

| Case | Brag document sections | Placement |
| --- | --- | --- |
| Barbershop management platform | PROJ-002, 4.0, 16 | Featured first |
| Olá Cliente | PROJ-005, EXP-005 | Featured second |
| Sanorte suite | PROJ-003, PROJ-004, EXP-006 | Featured third |
| Thermal printing | PROJ-007 | Supporting |
| URBSocial | PROJ-006 | Supporting |
| VM Tabacos | PROJ-008 | Supporting |
| StepCare | PROJ-001 | Supporting |
| Reservoir controller | PROJ-009, 9 | Supporting |

Source references are also retained in each project record for future content updates.
Edit the master document first, then update both languages. Translation must preserve
ownership boundaries, approximate dates/metrics, delivery statuses and confidentiality.

## Delivery evidence

Featured placement does not mean a system is currently live. The proof strip distinguishes:

- Barbershop platform: confirmed API production deployment, week of October 3, 2026.
- Sanorte: field MVP delivered in approximately three weeks.
- VM Tabacos: historical active client use for more than two years.
- Thermal printing: physical hardware validation.

No public system URL is invented. Olá Cliente is described through product delivery,
production readiness and support. StepCare has a hosted backend without inferred adoption.
Barbershop concurrency safeguards, PostgreSQL integration tests, observability and CI/CD
remain planned improvements. The document's quantification backlog is not published as metrics.

## Presentation and motion

Dark navy tokens, blue accent, local Geist, 1200px container, generous section spacing.
Primary portrait: `/profile/gabriel-profile-primary.jpg`, 4:5 crop with original background.
Motion uses CSS and Intersection Observer; no animation dependency is added.
Content is visible before hydration and without JavaScript. Reduced motion disables
animations, hover movement and smooth scrolling.

## Validation

Run `npm run lint` and `npm run build`. Start the production server on port 3001:
`npm run start -- --hostname 127.0.0.1 --port 3001`, then run `npm run check:portfolio`.
Set `PORTFOLIO_CHECK_URL` to check a different local origin.

The smoke check covers 18 localized pages, canonical/alternate metadata, internal
destinations, root redirect, missing routes, image assets and invalid contact requests.
It never sends a valid email. Full email delivery requires the existing Resend configuration.
Geist is compiled locally from files shipped with the locked Next.js dependency;
revalidate those paths when upgrading Next.js.

## Real public product evidence

Camisa 10 is the first live branded landing implementation, confirmed by Gabriel and recorded in PROJ-002. A real 1440 x 900 browser screenshot is optimized in public/projects/barbershop-camisa-10.jpg. It replaces the illustrative booking preview. The case separates the acquisition flow from technical architecture and keeps a neutral booking screenshot slot. API production status does not imply adoption or availability of every interface.
