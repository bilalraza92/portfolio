# Ahmed Raza — Premium Developer Portfolio

A production-ready, award-style portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, **GSAP + ScrollTrigger**, **Lenis** smooth scroll, and hand-crafted **shadcn-style** UI primitives.

## Stack

- Next.js 15 · React 19 · TypeScript
- Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- Framer Motion — scroll reveals, page micro-interactions
- GSAP + ScrollTrigger — parallax depth effect
- Lenis — inertia smooth scrolling
- react-hook-form + zod — validated contact form
- react-icons — Simple Icons / Font Awesome 6 icon sets

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

> **Note:** `next/font/google` fetches Space Grotesk & Inter at build time and
> requires internet access. If you're building in an offline/sandboxed
> environment that step will fail — it works normally on Vercel or any
> machine with network access.

## Project structure

```
src/
  app/                 # App Router: layout, page, sitemap, robots
  components/
    layout/            # Navbar, Footer
    sections/          # Hero, About, Skills, Services, Projects, Experience,
                        # Education, Testimonials, Contact
    shared/            # CustomCursor, LoadingScreen, MagneticButton,
                        # AnimatedText, AnimatedCounter, BackToTop
    ui/                # shadcn-style primitives (Button, Card, Badge, Input…)
    providers/         # Lenis smooth-scroll provider
  constants/           # data.ts — single source of truth for all content
  hooks/                # useContactForm, useParallax
  lib/                  # cn() and small utilities
  types/                # shared TypeScript interfaces
public/
  images/, projects/    # placeholder imagery (swap with real photos/screens)
```

## Customizing content

Everything text/data-driven lives in **`src/constants/data.ts`**:
name, role, bio, stats, skills + levels, services, projects, experience,
education, testimonials, and contact info. Update that file and the whole
site updates — no need to touch components.

## Replacing placeholder assets

This build ships with generated placeholder images so it compiles and runs
out of the box. Before shipping, replace:

- `public/images/profile.jpg`, `about-1.jpg`, `about-2.jpg`
- `public/images/testimonial-1.jpg` … `testimonial-3.jpg`
- `public/projects/*.jpg` (one per project)
- `public/og-image.jpg` (1200×630 social share image)
- `public/resume.pdf`

## Theme

Colors and fonts are defined as CSS variables in `src/app/globals.css`
(`@theme inline` block) so Tailwind utility classes like `bg-primary`,
`text-accent`, `bg-bg` work throughout the app.

| Token       | Value      |
| ----------- | ---------- |
| `primary`   | `#00E5A8`  |
| `secondary` | `#0F172A`  |
| `accent`    | `#14B8A6`  |
| `bg`        | `#020617`  |

Typography: **Space Grotesk** (display/headings) + **Inter** (body).

## Deployment

Ready for Vercel: `vercel deploy`. No environment variables are required for
the current build; wire the contact form (`src/hooks/useContactForm.ts`) up
to a real email service (Resend, Formspree, etc.) before going live.
