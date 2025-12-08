# Security Incident Resolution - API Key Exposure

**Date**: December 8, 2025
**Status**: ✅ Code Fixed & Deployed | ⚠️ User Action Required

## Incident Summary

GitHub Security and GitGuardian detected a **Google API Key** exposed in your portfolio repository. This happened because the Vite build configuration was injecting the API key directly into the client-side JavaScript bundle during deployment to GitHub Pages.

## What Was Fixed

### ✅ Completed Actions

1. **Removed API Key Injection** (vite.config.ts)
   - Removed the `define` block that was baking the API key into the client bundle
   - Added security comments explaining why this is dangerous

2. **Disabled AI Assistant** (App.tsx)
   - Commented out the `<AiAssistant />` component for GitHub Pages deployment
   - AI chat feature now only works in local development
   - Added clear comment explaining the security reason

3. **Enhanced .gitignore**
   - Added explicit patterns for `.env`, `.env.local`, `.env*.local`
   - Added `user_inputs/` folder to prevent accidental commits

4. **Updated README.md**
   - Added comprehensive "Security Best Practices" section
   - Documented why AI Assistant is disabled for static deployments
   - Explained how to properly handle API keys
   - Added instructions for incident response if secrets are exposed

5. **Clean Deployment**
   - Deployed new build to GitHub Pages **without any API keys**
   - Bundle size reduced from 795 KB to 569 KB (confirming AI code removed)
   - Live site: https://suryaprakash-sp.github.io/portfolio/

6. **Git Commits**
   - Commit `06fcd48`: Security fixes and documentation
   - Pushed to master branch
   - Clean build deployed to gh-pages branch

## ⚠️ ACTION REQUIRED: What You Must Do Now

### CRITICAL - Revoke the Exposed API Key

**You must immediately revoke the exposed Google API Key to prevent unauthorized usage.**

#### Steps to Revoke:

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/apis/credentials

2. **Select Your Project**
   - Find the project containing the exposed API key

3. **Find the API Key**
   - Look for the key that matches the one in the GitHub alerts
   - The alerts mentioned it was detected in `assets/index-hHEGG-OHjs#l.415`

4. **Delete or Regenerate the Key**
   - Click on the key
   - Click "DELETE" or "REGENERATE"
   - Confirm the action

5. **Generate a New Key (Optional - for local development only)**
   - If you want to use the AI assistant locally, create a new API key
   - Add it to `.env.local` (which is git-ignored)
   - **Never** commit this file or add keys to vite.config.ts

### Check GitHub Alerts

After revoking the key:
1. Go to your repository: https://github.com/suryaprakash-sp/portfolio
2. Click on "Security" tab
3. Check "Secret scanning alerts"
4. The alerts should eventually be resolved (may take a few hours)

## Technical Explanation

### Why This Happened

The issue was in `vite.config.ts`:

```typescript
// INSECURE - This was the problem
define: {
  'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
}
```

When Vite builds for production, it replaces `process.env.API_KEY` with the actual string value throughout your code. This means the API key gets hardcoded into the JavaScript bundle that's served to users.

For GitHub Pages (a static hosting service), there's no way to keep secrets secure because everything is client-side JavaScript.

### The Fix

Removed the `define` block entirely and disabled the AI Assistant for production. For static sites, you have two options:

1. **Don't use features requiring API keys** (current solution)
2. **Use a backend proxy** (Vercel/Netlify Functions) to keep keys server-side

## Current Portfolio Status

### What Works
✅ Single-page portfolio with all sections
✅ Hero section with highlighted specializations
✅ Infinite tech stack logo marquee
✅ Skills radar chart
✅ Experience timeline
✅ Project showcase
✅ Custom favicon
✅ Responsive design
✅ All images loading correctly

### What's Disabled
❌ AI Chat Assistant (requires backend for security)

### Live Site
**URL**: https://suryaprakash-sp.github.io/portfolio/
**Status**: Deployed and secure (no API keys)

## Files Modified

1. `vite.config.ts` - Removed API key injection
2. `App.tsx` - Disabled AI Assistant component
3. `.gitignore` - Added .env patterns and user_inputs/
4. `README.md` - Added security best practices section
5. `SECURITY_INCIDENT_RESOLVED.md` - This document

## Prevention for Future

### Do's ✅
- Keep all API keys in `.env.local` (git-ignored)
- Use backend services for API key handling in production
- Review `.gitignore` before committing
- Use environment variables for local development only

### Don'ts ❌
- Never commit `.env` or `.env.local` files
- Never use `define` in vite.config.ts to inject secrets for static sites
- Never hardcode API keys in source code
- Never push `dist/` folder to version control

## Questions?

If you have questions about this incident or the fixes:
1. Review the updated `README.md` security section
2. Check the git commit `06fcd48` for all changes
3. Contact me via the repository issues

## References

- [GitHub Security Alerts](https://github.com/suryaprakash-sp/portfolio/security)
- [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [OWASP API Security](https://owasp.org/www-project-api-security/)

---

**Last Updated**: 2025-12-08
**Status**: Incident contained, user action required for full resolution
