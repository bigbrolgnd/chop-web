# Story: Foundation - Atomic Structure + Routing

**Story ID:** CHOP-1
**Epic:** CHOP-REDESIGN
**Status:** Review
**Points:** 5
**Created:** 2025-12-27

---

## User Story

**As a** developer
**I want** the codebase restructured with atomic design patterns and routing
**So that** the website has a maintainable architecture for the redesign

---

## Description

Set up the foundational architecture by creating the atomic folder structure, installing react-router-dom, and building the core layout components (LayoutShell, Navbar, Footer). This establishes the scaffold for all subsequent stories.

---

## Acceptance Criteria

- [x] Folder structure created: `src/components/{layout,ui,templates,features,feed}/`
- [x] `react-router-dom@6.28.0` installed and configured
- [x] `LayoutShell` component renders Navbar + children + Footer
- [x] `Navbar` component has centered branding with sticky nav
- [x] `Footer` component displays dynamic year and copyright
- [x] `BrowserRouter` configured in `main.tsx`
- [x] Routes configured for `/` and `/about` in `App.tsx`
- [x] Placeholder `Home` and `About` pages render within LayoutShell
- [x] Navigation between pages works without full page reload
- [x] Marquee animation added to `tailwind.config.js` and `index.css`
- [x] All new components have basic tests

---

## Technical Notes

**Reference:** See tech-spec.md Section "Implementation Details" and "Source Tree Changes"

**Key Files to Create:**
```
src/components/layout/LayoutShell.tsx
src/components/layout/Navbar.tsx
src/components/layout/Footer.tsx
src/components/ui/Logo.tsx
src/pages/Home.tsx
src/pages/About.tsx
```

**Key Files to Modify:**
```
src/App.tsx - Add BrowserRouter and Routes
src/main.tsx - Wrap with BrowserRouter (if needed)
src/index.css - Add marquee animation
tailwind.config.js - Add marquee keyframes
package.json - Add react-router-dom
```

**Navbar Design (from cg-iptc):**
- Header section: Logo + "Community House of Prayer" title
- Sticky nav bar below header
- Desktop: Centered nav links (HOME, ABOUT, CONTACT, PARTNER WITH US)
- Mobile: Hamburger menu or marquee ticker

**Brand Colors:**
- Blue: `brand-blue` / #1e3a8a
- Gold: `brand-gold` / #f59e0b

---

## Tasks

- [x] Create folder structure under `src/components/`
- [x] Run `npm install react-router-dom@6.28.0`
- [x] Create `Logo.tsx` component
- [x] Create `Navbar.tsx` with centered branding pattern
- [x] Create `Footer.tsx` with dynamic year
- [x] Create `LayoutShell.tsx` wrapper
- [x] Create placeholder `Home.tsx` page
- [x] Create placeholder `About.tsx` page
- [x] Update `App.tsx` with Routes
- [x] Add marquee animation to Tailwind config
- [x] Add marquee CSS to index.css
- [x] Write tests for LayoutShell, Navbar, Footer
- [x] Verify routing works (click navigation, direct URL access)
- [x] Run `npm run type-check` - no errors
- [x] Run `npm test` - all pass

---

## Dependencies

- None (first story in epic)

## Blocked By

- None

---

## Dev Agent Record

### Debug Log
- 2025-12-28: Started implementation of atomic folder structure and routing
- Created src/components/{layout,ui,templates,features,feed}/ and src/pages/
- Installed react-router-dom@6.28.0
- Built layout components following existing codebase patterns

### Completion Notes
- All 11 acceptance criteria satisfied
- All 15 tasks completed
- 20 tests passing (5 test files)
- TypeScript type-check passes with no errors
- Navbar features centered branding with blue header, tagline, and sticky nav below
- Footer simplified to centered copyright with dynamic year
- BrowserRouter wraps app at App.tsx level (not main.tsx) for cleaner structure
- Marquee animation configured in Tailwind for future mobile nav enhancement

---

## File List

### Created
- `src/components/layout/LayoutShell.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/ui/Logo.tsx`
- `src/pages/Home.tsx`
- `src/pages/About.tsx`
- `src/__tests__/layout/LayoutShell.test.tsx`
- `src/__tests__/layout/Navbar.test.tsx`
- `src/__tests__/layout/Footer.test.tsx`

### Modified
- `src/App.tsx` - Replaced with BrowserRouter + Routes
- `src/index.css` - Added marquee utility classes
- `tailwind.config.js` - Added marquee animation keyframes
- `package.json` - Added react-router-dom dependency
- `src/__tests__/App.test.tsx` - Updated for new structure

---

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2025-12-28 | Story implementation complete - atomic structure + routing | Dev Agent |
