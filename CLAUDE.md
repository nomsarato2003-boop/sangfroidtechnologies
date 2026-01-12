# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sangfroid Technologies corporate website - a Next.js 14 App Router site for an enterprise solutions company focusing on ERP, Messaging Applications, and E-commerce platforms. Built with TypeScript and Tailwind CSS.

**Company Information:**
- Company Name: Sangfroid Technologies
- Founder: Timothy Hwizah
- Founded: 4 May 2020
- Location: 2202 St Mary's, Chitungwiza, Zimbabwe
- Website: sangfroidtechnologies.com
- Color Theme: Purple and Orange

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint + Biome lint (requires bun for Biome)
npm run format   # Biome auto-format (requires bun for Biome)
```

## Architecture

### App Router Structure
Routes are defined in `src/app/` using file-based routing:
- `src/app/page.tsx` - Home (/)
- `src/app/about/page.tsx` - About page
- `src/app/contact/page.tsx` - Contact form
- `src/app/services/erp/page.tsx` - ERP Solutions page
- `src/app/services/messaging/page.tsx` - Messaging Application page
- `src/app/services/ecommerce/page.tsx` - E-commerce Solutions page
- `src/app/company/team/page.tsx` - Team page
- `src/app/careers/page.tsx` - Careers

### Services Offered
1. Enterprise Resource Planning (ERP)
   - Human Capital and Business Process Management
   - Engineering and Production Management
   - Materials Management
   - Customer Relationship Management
   - Spending Management
   - Transport Management
   - Financial Control and Reporting
2. Messaging Application
3. E-commerce Solutions

### Component Organization
- `src/app/layout.tsx` - Root layout (Navbar + ChatBot wrapper)
- `src/app/globals.css` - Global styles with Tailwind directives
- `src/components/` - Shared components:
  - `Navbar.tsx` - Navigation with dropdowns
  - `ChatBot.tsx` - Floating chat widget
  - `Footer.tsx` - Site footer
- `src/components/ui/` - Shadcn/ui components
- `src/lib/utils.ts` - Utility functions (`cn()` for Tailwind class merging)

### Key Conventions
- Path alias: `@/*` maps to `./src/*`
- Client components: Add `"use client"` directive for components using hooks/state
- Shadcn/ui style: "new-york" with Lucide icons, RSC disabled (`rsc: false` in components.json)
- Forms: React Hook Form + Zod validation
- Styling: Tailwind CSS with CSS variables for theming
- Color theme: Purple (#7c3aed) and Orange (#f97316)

### Deployment
- Primary: Netlify (`netlify.toml`)
- Fallback: Vercel (`vercel.json`)
