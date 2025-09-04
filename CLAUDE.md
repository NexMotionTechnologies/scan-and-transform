# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 8080)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview build**: `npm run preview`

## Project Architecture

This is a React landing page built with Vite, TypeScript, and modern UI libraries. The project follows a component-based architecture with these key areas:

### Core Technologies
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend Services**: Firebase Firestore for beta signups
- **Routing**: React Router DOM
- **State Management**: React Query (@tanstack/react-query)

### Project Structure
- `src/components/` - Reusable React components
  - `ui/` - shadcn/ui component library (button, card, dialog, etc.)
  - Core landing page components: `Hero`, `Features`, `HowItWorks`, `Pricing`, `BetaSignup`, `Footer`
- `src/pages/` - Route-based page components (`Index`, `PrivacyPolicy`, `Contact`, `NotFound`)
- `src/services/` - Business logic services
  - `betaService.ts` - Firebase integration for beta signups
  - `emailService.ts` - Email functionality
  - `debugService.ts` - Development utilities
- `src/lib/` - Utility libraries
  - `firebase.ts` - Firebase configuration and initialization
  - `utils.ts` - Shared utility functions

### Key Features
- **Beta Signup System**: Email collection with Firebase Firestore storage
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Comprehensive shadcn/ui component system
- **Email Integration**: EmailJS for contact forms and notifications

### Environment Variables
The project uses Vite environment variables prefixed with `VITE_`:
- Firebase configuration (API keys, project IDs, etc.)
- Stored in `.env` (not committed to git)

### Build Configuration
- **Vite**: Modern build tool with SWC for fast compilation
- **Path Aliases**: `@/` maps to `src/` directory
- **Base Path**: Configured for relative deployment (`./`)
- **Development**: Component tagging enabled for debugging

### Routing Structure
- `/` - Main landing page with all sections
- `/privacy-policy` - Privacy policy page  
- `/contact` - Contact page
- `*` - 404 NotFound page for invalid routes