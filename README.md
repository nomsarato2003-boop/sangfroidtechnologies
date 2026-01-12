# Movella Systems Website

Corporate website for Movella Systems - a technology company specializing in AI and blockchain solutions.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React, React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── careers/            # Careers page
│   ├── partners/           # Partners page
│   ├── case-studies/       # Case studies
│   ├── solutions/          # Solution pages
│   │   ├── blockchain/
│   │   ├── ai-security/
│   │   ├── ai-marketing/
│   │   └── transportation/
│   ├── technology/         # Technology pages
│   │   ├── platform/
│   │   ├── ai/
│   │   └── blockchain/
│   └── company/
│       └── team/
├── components/             # Shared components
│   ├── Navbar.tsx
│   ├── ChatBot.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint and Biome |
| `npm run format` | Format code with Biome |

## Deployment

The site is configured for deployment on:
- **Netlify** - See `netlify.toml`
- **Vercel** - See `vercel.json`

## License

Private - All rights reserved.
