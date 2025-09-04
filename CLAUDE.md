# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Getting Started Protocol

**IMPORTANT: At the start of every new conversation, you MUST:**

1. **Read Planning.md** - Check this file first to understand the current project roadmap, priorities, and strategic direction
2. **Check TASKS.md** - Review existing tasks, their status, and priorities before starting any work
3. **Task Management Requirements:**
   - Mark completed tasks as completed IMMEDIATELY upon completion
   - Add any newly discovered tasks to TASKS.md as you encounter them
   - Update task status throughout your work session
   - Never leave tasks unmarked when they are finished

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

## Session Summary & Progress Tracking

### Current Session: 2025-01-09
**Focus**: Project initialization and documentation setup

**Completed Work**:
- ✅ Created comprehensive CLAUDE.md with development guidance
- ✅ Updated PLANNING.md with current project scope clarification
- ✅ Created detailed TASKS.md with 5 development milestones
- ✅ Analyzed existing codebase and documented architecture
- ✅ Consolidated information from SETUP.md and TODO.md
- ✅ Cleaned up redundant documentation files

**Current Project Status**:
- **Landing Page**: Fully functional with all sections complete
- **Beta Signup System**: Core implementation complete (Firebase + Email services)
- **Email Integration**: Multiple service options available (EmailJS, Web3Forms, Formspree)
- **Next Priority**: Email template testing and optimization (TASKS.md Milestone 1)

**Key Decisions Made**:
1. Clarified project scope - this is landing page only, OCR MVP built separately
2. Established TASKS.md as primary task tracking (replaced TODO.md)
3. Web3Forms recommended as primary email service
4. Focus on welcome email with download link expectations

**Files Structure After This Session**:
```
├── CLAUDE.md          # Development guidance (this file)
├── PLANNING.md        # Project vision, architecture, roadmap
├── TASKS.md           # Detailed development tasks by milestone
├── .env               # Environment variables (exists)
├── package.json       # Dependencies and scripts
└── src/
    ├── components/    # React components (Hero, Features, etc.)
    ├── pages/         # Route pages (Index, Contact, etc.)
    ├── services/      # Business logic (beta, email, debug)
    └── lib/           # Utilities (firebase, utils)
```

---

### Session Template for Future Use
**When starting a new session, add entry above using this template:**

```markdown
### Session: YYYY-MM-DD
**Focus**: [Main objectives for this session]

**Completed Work**:
- [ ] Task 1
- [ ] Task 2

**Current Project Status**:
- **Component/Area**: Status description

**Key Decisions Made**:
1. Decision with rationale

**Next Session Priorities**:
1. Priority task
2. Priority task
```