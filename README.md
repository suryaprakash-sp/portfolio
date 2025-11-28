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

**Live Demo:** [View on AI Studio](https://ai.studio/apps/drive/1cM3INqXbUXvvtk0Iblx2kWOdVDrjszx5)

## Features

- **AI Chat Assistant**: Interactive chatbot powered by Google Gemini API that answers questions about professional experience
- **Skill Visualization**: Radar chart displaying proficiency across key technical areas
- **Interactive IDE Demo**: Animated code editor showcasing data engineering capabilities
- **Responsive Design**: Mobile-first approach with glass-morphism effects and smooth animations
- **Professional Timeline**: Visual representation of work experience with achievements
- **Project Showcase**: Featured projects with tech stack tags and detailed descriptions

## Tech Stack

### Core
- **React 19.2** - UI library
- **TypeScript 5.8** - Type safety and developer experience
- **Vite 6.2** - Fast build tool with HMR

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
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

## Project Structure

```
Portfolio/
├── components/           # React components
│   ├── AiAssistant.tsx  # Chat widget component
│   └── SkillChart.tsx   # Radar chart visualization
├── services/            # External service integrations
│   └── gemini.ts        # Gemini API client
├── App.tsx              # Main application component
├── constants.ts         # Resume data and configuration
├── types.ts             # TypeScript type definitions
├── index.tsx            # React DOM entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Configuration

### Vite Configuration

The project uses Vite with React plugin and custom configuration:
- Dev server on port 3000
- Path alias `@` pointing to project root
- Environment variable handling for `GEMINI_API_KEY`

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

- CDN delivery for React, Recharts, and Lucide libraries
- Vite's fast build times and Hot Module Replacement
- Intersection Observer for scroll-based animation triggers
- Lazy loading and code splitting

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to AI Studio

This project is configured for deployment to Google AI Studio. See the [AI Studio documentation](https://ai.studio/docs) for deployment instructions.

### Other Platforms

The production build can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key for chat assistant | Yes |

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
