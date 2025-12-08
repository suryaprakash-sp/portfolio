# Surya Prakash Manubolu - Data Portfolio

A modern, interactive portfolio showcasing data engineering and analytics expertise. Built with React, TypeScript, and powered by AI.

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.0-61dafb?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06b6d4?logo=tailwindcss)](https://tailwindcss.com/)

</div>

## Overview

This portfolio demonstrates modern web development practices while showcasing data engineering and analytics capabilities. It features an AI-powered chat assistant, interactive visualizations, and a polished user experience.

## Features

- **Single-Page Portfolio**: Clean, focused portfolio showcasing all content on one page
- **Infinite Logo Marquee**: Smooth, performant horizontal scroll showcasing 14+ technology stack logos with hover pause and accessibility support
- **AI Chat Assistant** *(Local development only)*: Interactive chatbot powered by Google Gemini API that answers questions about professional experience
- **Skill Visualization**: Radar chart displaying proficiency across key technical areas
- **Interactive IDE Demo**: Animated code editor showcasing data engineering capabilities
- **Responsive Design**: Mobile-first approach with glass-morphism effects and smooth animations
- **Professional Timeline**: Visual representation of work experience with flowing path animation (ChartDB-inspired)
- **Project Showcase**: Interactive slideshow cards with hover effects

## Tech Stack

### Core
- **React 19.2** - UI library
- **TypeScript 5.8** - Type safety and developer experience
- **Vite 6.2** - Fast build tool with HMR

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework (CDN)
- **Lucide React** - Icon library
- **Recharts** - Data visualization

### AI Integration
- **Google Generative AI** - Gemini 2.5 Flash for conversational interface

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Gemini API key (get one at [Google AI Studio](https://aistudio.google.com/))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.local.example` to `.env.local` (or create `.env.local`)
   - Add your Gemini API key:
```bash
GEMINI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Project Structure

```
Portfolio/
├── src/
│   └── components/          # React components
│       └── ProjectDetail.tsx # Project detail component (not currently used)
├── components/              # UI components
│   ├── AiAssistant.tsx     # Chat widget (disabled for GitHub Pages)
│   └── SkillChart.tsx      # Radar chart visualization
├── services/               # External service integrations
│   └── gemini.ts           # Gemini API client (local dev only)
├── public/                 # Static assets
│   ├── *.png              # Logo images (14 tech stack logos)
│   ├── favicon.png        # Custom favicon
│   └── surya.png          # Profile photo
├── App.tsx                 # Main single-page application component
├── constants.ts            # Resume data and configuration
├── types.ts                # TypeScript type definitions
├── index.tsx               # Application entry point
├── index.html              # HTML template with Tailwind config
├── vite.config.ts          # Vite configuration (no secret injection)
├── tsconfig.json           # TypeScript configuration
├── .gitignore              # Git ignore (includes .env files)
└── package.json            # Project dependencies
```

## Configuration

### Vite Configuration

The project uses Vite with React plugin and custom configuration:
- Dev server on port 3000
- Base path `/portfolio/` for GitHub Pages
- Path alias `@` pointing to project root
- **No API keys in build** - Secrets are never injected into client bundles for security

### TypeScript Configuration

- Target: ES2022
- Module resolution: bundler
- JSX: react-jsx
- Strict type checking enabled

## Key Components

### AiAssistant
Interactive chat widget that uses Gemini API to answer questions about professional experience. Features:
- Context-aware responses based on resume data
- Scrollable message history
- Loading states and error handling
- Graceful fallback when API key is missing

### SkillChart
Radar chart visualization using Recharts showing proficiency across 6 key technical areas:
- Python (95%)
- SQL (90%)
- ETL & Data Engineering (90%)
- Data Analysis (85%)
- Visualization (80%)
- Cloud & Infrastructure (75%)

### Infinite Logo Marquee
Premium horizontal scrolling tech stack showcase with best-in-class implementation:
- **14 Technology Logos**: MySQL, PostgreSQL, MongoDB, Python, Tableau, Power BI, Metabase, Google Sheets, GitHub, ChartDB, Claude AI, Excel, Pandas, Redash
- **Seamless Infinite Loop**: Dual content sets with translate3d animation for flawless cycling
- **Safari Compatible**: Uses translate3d instead of translateX to prevent flickering
- **Hover Pause**: Smooth animation-play-state pause without glitching
- **No Clipping**: Strategic padding allows 1.2x scale on hover without cutoff
- **Accessibility**: aria-hidden on duplicates, prefers-reduced-motion support
- **GPU Accelerated**: will-change: transform for 60fps performance
- **40-second Duration**: Optimal speed for comfortable viewing

## Customization

### Updating Resume Data

Edit `constants.ts` to update:
- Personal information
- Work experience
- Projects
- Skills
- Education

### Styling

The project uses Tailwind CSS with custom configuration in `index.html`:
- Custom color palette (slate and blue primary)
- Font families: Inter (sans), Fira Code (mono)
- Custom animations: slideUp, float, fadeIn

### AI System Prompt

Modify the system prompt in `components/AiAssistant.tsx` to customize the AI assistant's personality and response style.

## Performance Optimizations

- **CDN Delivery**: React, Recharts, and Lucide libraries loaded from CDN
- **Component Memoization**: React.memo() on ProjectCard components
- **Lazy Loading**: All images use loading="lazy" attribute
- **GPU Acceleration**: transform animations with will-change optimization
- **Vite HMR**: Fast build times and Hot Module Replacement
- **Intersection Observer**: Scroll-based animation triggers for efficient rendering
- **translate3d**: Hardware-accelerated animations (Safari compatible)
- **Optimized Transitions**: Reduced durations (300ms-700ms) for snappy interactions

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Deployment

### GitHub Pages (Current Deployment)

This portfolio is deployed to GitHub Pages at: **https://suryaprakash-sp.github.io/portfolio/**

To deploy:

```bash
npm run deploy
```

This command:
1. Builds the project with base path `/portfolio/`
2. Deploys the `dist/` folder to the `gh-pages` branch
3. GitHub Pages automatically serves the content

**Note**: The AI chat assistant is disabled for GitHub Pages to prevent API key exposure.

### Other Platforms

The production build can also be deployed to:
- **Vercel** - Supports serverless functions for secure API proxying
- **Netlify** - Supports Netlify Functions for backend logic
- Any static hosting service

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key for chat assistant (local dev only) | Optional |

**⚠️ Important**: The AI chat assistant is **disabled for GitHub Pages deployment** because API keys cannot be securely stored in client-side code for static sites. To use the AI assistant in production, you would need to set up a backend proxy (e.g., Vercel/Netlify Functions).

## Security Best Practices

### API Keys and Secrets

**Never commit API keys to version control!** This project follows these security practices:

1. **Environment Variables**: All sensitive data goes in `.env.local` (git-ignored)
2. **No Client-Side Secrets**: For static deployments (GitHub Pages), API keys are not included in builds
3. **AI Assistant Disabled**: The chat feature is commented out for static deployments to prevent API key exposure

### If You Accidentally Committed a Secret

1. **Immediately revoke the exposed key** in Google Cloud Console
2. **Remove from git history** using git-filter-repo or BFG Repo-Cleaner
3. **Generate a new key** and add it only to `.env.local`
4. **Never use `define` in vite.config.ts** to inject secrets for static deployments

### Example .env.local

```bash
# Local development only - NEVER commit this file
GEMINI_API_KEY=your_actual_api_key_here
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

**Surya Prakash Manubolu**
- Email: suryaprakash.manubolu@gmail.com
- LinkedIn: [suryaprakashmanubolu](https://linkedin.com/in/suryaprakashmanubolu)
- Phone: +91 8309206731

## Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Google Gemini](https://ai.google.dev/)
- Icons by [Lucide](https://lucide.dev/)
- Charts by [Recharts](https://recharts.org/)
