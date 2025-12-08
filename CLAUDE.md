# Claude Code Context - Surya Prakash Portfolio

This document provides context for Claude Code when working on this portfolio project.

## Project Overview

This is a personal portfolio website for Surya Prakash Manubolu, a Data Analyst and Engineer. The portfolio showcases professional experience, skills, projects, and education through a single-page application deployed to GitHub Pages.

**Live URL**: https://suryaprakash-sp.github.io/portfolio/

## Tech Stack Summary

- **Frontend**: React 19.2 + TypeScript 5.8
- **Build Tool**: Vite 6.2
- **Deployment**: GitHub Pages (gh-pages branch)
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Lucide React
- **Charts**: Recharts
- **AI**: Google Generative AI (Gemini 2.5 Flash) - **Local development only, disabled for production**

## Key Architecture Decisions

1. **Single-Page Application**: All content on one page, React Router removed for simplicity
2. **Security First**: API keys never exposed in client-side code for static deployments
3. **CDN-Based Loading**: React, Recharts, and other libraries loaded via CDN to reduce bundle size
4. **Component Structure**: Modular components in `/components` and `/src/components` directories
5. **Centralized Data**: All resume/portfolio data in `constants.ts` for easy updates
6. **Type Safety**: Comprehensive TypeScript interfaces in `types.ts`
7. **Performance First**: Memoized components, lazy loading, GPU-accelerated animations
8. **AI Assistant Disabled**: For GitHub Pages deployment to prevent API key exposure

## File Organization

- `App.tsx` - Main single-page application component with all sections
- `index.tsx` - Application entry point (React Router removed)
- `src/components/ProjectDetail.tsx` - Project detail component (not currently used)
- `components/AiAssistant.tsx` - Chat widget (disabled for production, local dev only)
- `components/SkillChart.tsx` - Radar chart for skill visualization
- `services/gemini.ts` - API client for Google Gemini (local dev only)
- `constants.ts` - Resume data and configuration
- `types.ts` - TypeScript type definitions
- `public/` - Static assets (14 tech logos, favicon, profile photo)
- `vite.config.ts` - Vite config with GitHub Pages base path (no API key injection)

## Data Structure

All portfolio content is managed through the `RESUME_DATA` constant in `constants.ts`:

```typescript
{
  name: string
  title: string
  tagline: string
  contact: { email, phone, linkedin }
  about: string
  skills: Array<{ category, items }>
  experience: Array<{ title, company, period, location, achievements }>
  projects: Array<{ title, description, tech, category, icon }>
  education: Array<{ degree, institution, period }>
}
```

## Important Notes

### Safe Checkpoint Commits

If you mess up the design or something breaks, you can restore to these verified commits:

**LATEST BACKUP - Commit `42ad2df` - Complete Portfolio with Documentation (CURRENT PRODUCTION)**
- Single-page portfolio with all sections fully designed
- **"What Makes Me Different" section** between Skills and Experience:
  - 3 differentiator cards (End-to-End Ownership, Production-First, Performance)
  - 4-step "My Approach" process with connecting arrows (Problem → Design → Deploy → Optimize)
  - Closing quote: "I build data systems that teams depend on, not just one-off analyses."
- Hero section with colored underlines on ETL pipelines, dashboards, automation
- Security incident resolved - API keys never exposed
- Custom favicon and all 14 tech logos in public/
- Optimized bundle size (575 KB)
- **Documentation fully updated** - README.md and CLAUDE.md reflect all features
- To restore: `git checkout 42ad2df -- .`

**Previous Backup - Commit `06fcd48` - Security Fix + Single-Page Portfolio**
- Single-page portfolio (React Router removed for simplicity)
- API key exposure fixed - AI Assistant disabled for GitHub Pages
- Enhanced .gitignore with .env patterns and user_inputs/
- Comprehensive security documentation in README
- To restore: `git checkout 06fcd48 -- .`

**Older Backup - Commit `032a761` - Unified Design System with Balanced Footer**
- Consistent gray pill-style section labels across all sections (Impact Metrics, Core Competencies, Tech Stack, Experience, Portfolio)
- Clean hero section: simplified left side with identity text + CTAs, decorative right side with floating badges
- Skills section without percentage indicators - clean list layout with hover effects
- Balanced footer layout: left column (heading + description + bullets), right column (Navigation/Connect grid + CTA buttons below)
- Fixed company name from "Gola Supply" to "Masai School"
- Tech Stack section with descriptive header and logo marquee
- Professional, unified design language throughout
- To restore: `git checkout 032a761 -- App.tsx`

**Commit `3d93c98` - Infinite Logo Marquee with Best Practices**
- Multi-page portfolio with React Router 7
- Premium infinite horizontal logo scroll (14 tech logos)
- Safari-compatible translate3d animations
- Accessibility features (aria-labels, prefers-reduced-motion)
- GPU-accelerated performance optimizations
- Hover pause without glitching
- No logo clipping on scale (strategic padding)
- To restore: `git checkout 3d93c98 -- App.tsx index.html`

**Commit `853a3ae` - Experience Section with Flowing Path Animation**
- Experience section with ChartDB-style flowing path animation
- Tapered gradient segments traveling bottom-to-top
- Dotted base path with animated blue segments
- Updated footer with social icons and attribution links
- Clean, minimal, professional design
- To restore: `git checkout 853a3ae -- App.tsx index.html`

### Environment Variables & Security
- `GEMINI_API_KEY` can be set in `.env.local` for **local development only**
- **CRITICAL**: AI Assistant is disabled for GitHub Pages deployment (see security section below)
- `.env.local` is git-ignored - never commit API keys to version control
- `vite.config.ts` does NOT inject API keys into the build for static deployments
- For production API features, use a backend proxy (Vercel/Netlify Functions)

### Security Incident - December 8, 2025 (RESOLVED)
**Issue**: Google API Key was exposed in GitHub repository due to insecure vite.config.ts setup
**Resolution**:
- Removed API key injection from vite.config.ts
- Disabled AI Assistant for GitHub Pages (static deployment)
- Enhanced .gitignore with .env patterns
- Deployed clean build without API keys
- Full details in `SECURITY_INCIDENT_RESOLVED.md`

**User Action Required**: Revoke the exposed API key in Google Cloud Console

**Prevention**: Never use `define` in vite.config.ts to inject secrets for static sites

### Styling Approach
- Tailwind CSS configuration is inline in `index.html`
- Custom animations: slideUp, float, fadeIn, marqueeScroll (infinite logo scroll)
- Color scheme: Slate grays with blue primary (#3b82f6)
- Responsive breakpoints: md (768px)
- GPU acceleration: will-change: transform on animated elements
- Safari compatibility: translate3d instead of translateX for smooth animations

### AI Assistant Context
The chat assistant is prompted with the entire resume data and instructed to:
- Answer in third person about Surya's experience
- Provide specific metrics and achievements
- Stay professional and data-focused
- Be concise and helpful

## Development Workflow

1. **Local Development**: `npm run dev` on port 3000
2. **Building**: `npm run build` outputs to `dist/`
3. **Preview**: `npm run preview` to test production build

## Code Style Guidelines

1. **React Patterns**:
   - Functional components with hooks
   - TypeScript for all components
   - Props interfaces defined inline or in types.ts

2. **State Management**:
   - React useState for local state
   - No global state management (Redux, Zustand, etc.)
   - Simple prop drilling where needed

3. **Naming Conventions**:
   - Components: PascalCase (e.g., `AiAssistant.tsx`)
   - Files: camelCase for utilities, PascalCase for components
   - Constants: SCREAMING_SNAKE_CASE (e.g., `RESUME_DATA`)

4. **CSS/Styling**:
   - Tailwind utility classes preferred
   - Minimal custom CSS (animations only)
   - Responsive-first with mobile breakpoints

## Common Tasks

### Updating Portfolio Content
Edit `constants.ts` > `RESUME_DATA` object

### Adding New Sections
1. Add section to `App.tsx`
2. Add navigation link to `NAV_ITEMS` in `constants.ts`
3. Update scroll handling in `App.tsx` navigation component

### Modifying AI Assistant
Edit `components/AiAssistant.tsx`:
- System prompt at line ~50
- UI/styling in the return statement
- API integration in `handleSend` function

### Changing Skill Chart
Edit `components/SkillChart.tsx`:
- Data source is `SKILL_METRICS` from constants
- Recharts configuration for appearance
- Animation triggers based on `isVisible` state

### Infinite Logo Marquee - Implementation Details
The horizontal scrolling logo section uses best practices from 6+ industry sources:

**Key Implementation Points:**
- Located in `App.tsx` between Skills and Experience sections
- Uses CSS classes defined in `index.html`: `.logo-marquee-track`, `.logo-marquee-content`, `.logo-marquee-item`, `.logo-wrapper`, `.logo-image`
- Animation: `@keyframes marqueeScroll` with `translate3d(-50%, 0, 0)` for Safari compatibility
- Dual content sets for seamless infinite loop (14 logos × 2 = 28 total DOM elements)
- Gap: 3rem (48px) between logos - must match in both `.logo-marquee-track` and `.logo-marquee-content`
- Padding: 1rem on `.logo-marquee-item` to prevent clipping when logos scale to 1.2x on hover
- Animation duration: 40s (slower is more accessible per WCAG guidelines)
- Hover behavior: `animation-play-state: paused` on `.logo-marquee-track:hover`
- Accessibility: `aria-hidden="true"` on duplicate set, `prefers-reduced-motion` support
- Performance: `will-change: transform` for GPU acceleration

**To Add/Remove Logos:**
1. Edit the logo array in `App.tsx` (appears twice - primary and duplicate)
2. Ensure logo PNG files are in `/public` directory
3. Keep both arrays identical for seamless loop

**Common Issues:**
- If loop "jumps": Check that gap values match in track and content
- If logos clip on hover: Increase padding in `.logo-marquee-item`
- If animation stutters: Verify `translate3d` is used (not `translateX`)

## Performance Considerations

- **CDN Usage**: Large libraries loaded from CDN (React, Recharts, Lucide)
- **Component Memoization**: `React.memo()` on ProjectCard components prevents unnecessary re-renders
- **Lazy Loading**: `loading="lazy"` on all images (logos, project screenshots)
- **Intersection Observer**: Scroll-based animation triggers for efficient rendering
- **GPU Acceleration**: `will-change: transform` on animated elements
- **translate3d**: Hardware-accelerated animations (Safari compatible)
- **Optimized Transitions**: Reduced durations (300ms-700ms) for snappy feel
- **Code Splitting**: Vite handles automatic splitting for routes

## Deployment

Currently deployed to Google AI Studio:
- URL: https://ai.studio/apps/drive/1cM3INqXbUXvvtk0Iblx2kWOdVDrjszx5
- Can also deploy to Vercel, Netlify, or any static host

## Future Enhancement Ideas

- Add blog section for articles
- Implement dark mode toggle
- Add animations on scroll for project cards
- Include resume download button
- Add contact form with backend
- Integrate analytics (Google Analytics, Plausible)
- Add more interactive data visualizations
- Include certifications section

## Dependencies Management

All dependencies are in `package.json`. Key versions:
- React 19.2 (latest)
- React Router DOM 7 (for multi-page navigation)
- TypeScript 5.8
- Vite 6.2
- Google GenAI 1.30

Run `npm install` after cloning to install all dependencies.

## Troubleshooting

**Issue**: AI Assistant not responding
- **Solution**: Check GEMINI_API_KEY in .env.local

**Issue**: Port 3000 already in use
- **Solution**: Change port in vite.config.ts or kill process on 3000

**Issue**: TypeScript errors
- **Solution**: Run `npm install` to ensure all type definitions are installed

**Issue**: Tailwind classes not applying
- **Solution**: Check that CDN script is loading in index.html

## Contact for Project Questions

- **Owner**: Surya Prakash Manubolu
- **Email**: suryaprakash.manubolu@gmail.com
