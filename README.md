# Christopher Henrico Portfolio

A high-performance portfolio website for a full-stack engineer and serial founder. Built with modern web technologies and a cyberpunk-inspired aesthetic.

## About

This is the personal portfolio of **Christopher Henrico**, showcasing expertise in building technical foundations for fast-moving startups. The site features a distinctive "system operator" theme with monospace typography, scanline effects, and a dark, tech-forward design language.

## Features

- **Hero Section** - Introduction with glitch animations and call-to-action buttons
- **Proven Speed** - Highlights rapid delivery capabilities (48-hour Data Rooms, 2-week MVPs)
- **Experience Log** - Professional history and achievements
- **Tech Arsenal** - Technology stack and tools
- **Portfolio Section** - Showcase of shipped projects
- **Contact Uplink** - Contact form and information
- **System Footer** - Status indicators and copyright

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animation**: Framer Motion
- **State Management**: TanStack Query
- **Routing**: React Router
- **Testing**: Vitest + Playwright
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd portfolio-main

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:8080`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests with Vitest |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

```
portfolio-main/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── ContactUplink.tsx
│   │   ├── EnergyBar.tsx
│   │   ├── ExperienceLog.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ProvenSpeed.tsx
│   │   ├── SystemFooter.tsx
│   │   ├── SystemHeader.tsx
│   │   └── TechArsenal.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── test/             # Test files
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── index.html            # HTML template
└── package.json          # Dependencies
```

## Design System

The site uses a custom cyberpunk-inspired design system:

- **Typography**: Monospace fonts with tight tracking
- **Colors**: Dark backgrounds with high-contrast foregrounds
- **Effects**: Scanlines, glitch animations, energy bars
- **Layout**: Container-based with generous padding

## Deployment

Build the project for production:

```bash
npm run build
```

The `dist/` folder will contain the static files ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## License

Private - All rights reserved.

---

Built with TypeScript and speed. © 2026 Christopher Henrico.