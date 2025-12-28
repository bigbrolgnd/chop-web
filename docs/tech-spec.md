# chop-web - Technical Specification

**Author:** Legend
**Date:** 2025-12-27
**Project Level:** Quick-Flow (Level 1)
**Change Type:** UI/UX Redesign + Feature Addition
**Development Context:** Brownfield (existing Vite + React codebase)

---

## Context

### Available Documents

- **CHOP.md** - Complete project documentation with deployment, testing, and structure details
- **cg-iptc codebase** - Reference implementation for atomic design patterns (source: `/opt/docker-stack/cg-iptc/`)

### Project Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI framework |
| TypeScript | 5.7.2 | Type safety |
| Vite | 6.0.5 | Build tool + dev server |
| Tailwind CSS | 3.4.17 | Utility-first styling |
| Lucide React | 0.468.0 | Icon library |
| Vitest | 2.1.8 | Test runner |
| @testing-library/react | 16.1.0 | Component testing |
| Node.js | >=18.0.0 | Runtime |

### Existing Codebase Structure

```
src/
├── components/
│   ├── CommunityEngagement.tsx   # Blue section with outreach info
│   ├── Footer.tsx                # Site footer with contact/newsletter
│   ├── Hero.tsx                  # Full-width hero banner
│   ├── MissionImpact.tsx         # "Who We Are" with slideshow
│   ├── Navbar.tsx                # Sticky nav with mobile menu
│   └── ValuesGrid.tsx            # 7 Pillars grid layout
├── __tests__/
│   ├── App.test.tsx
│   └── Navbar.test.tsx
├── App.tsx                       # Main app (single page currently)
├── main.tsx                      # Entry point with React DOM
├── index.css                     # Tailwind + custom components
├── types.ts                      # TypeScript interfaces
└── test-setup.ts                 # Vitest configuration
```

**Existing Patterns:**
- Default exports for all components
- Functional components with React hooks
- Lucide React for icons (consistent)
- Tailwind utility classes with custom component classes
- Path alias: `@/` → `src/`
- Brand colors: `brand-blue` (#1e3a8a), `brand-gold` (#f59e0b)
- Inter font family via Google Fonts CDN

---

## The Change

### Problem Statement

The current CHOP website has a dated, generic design that doesn't match the professional, clean aesthetic of the cg-iptc project. The site lacks:
1. An atomic design structure for maintainability
2. A dedicated About page for detailed church information
3. Facebook integration to showcase pastor messages and church updates
4. Modern responsive layout patterns (two-column desktop, stacked mobile)

### Proposed Solution

Redesign chop-web using cg-iptc's atomic design patterns while:
1. Porting the layout structure (LayoutShell, Navbar, Footer, TwoColumnShell)
2. Adapting components to CHOP's brand colors (#1e3a8a blue, #f59e0b gold)
3. Adding React Router for Home + About page navigation
4. Integrating Facebook Page Plugin for embedded feed
5. Preserving existing content (mission, values, contact info)
6. Keeping OpenGraph metadata and favicon

### Scope

**In Scope:**
- Port atomic folder structure from cg-iptc (layout/, ui/, templates/)
- Create new LayoutShell with responsive two-column layout
- Redesign Navbar with centered branding (cg-iptc style)
- Redesign Footer (simpler, centered copyright)
- Add React Router for `/` (Home) and `/about` routes
- Create Home page with: Hero, Service Times, Who We Are, Facebook Feed, Contact
- Create About page with: Church History, Pastor Bio, Mission/Vision, Beliefs
- Integrate Facebook Page Plugin (embedded feed)
- Update tests for new components
- Preserve all existing text content

**Out of Scope:**
- Converting to Next.js (staying with Vite + React)
- Substack integration (removed from cg-iptc pattern)
- Events calendar
- Member portal / authentication
- Online giving integration
- Contact form backend

---

## Implementation Details

### Source Tree Changes

```
src/
├── components/
│   ├── layout/                          # CREATE - Layout components
│   │   ├── LayoutShell.tsx              # CREATE - Main layout wrapper
│   │   ├── Navbar.tsx                   # CREATE - Centered branding navbar
│   │   ├── Footer.tsx                   # CREATE - Simplified footer
│   │   └── TwoColumnShell.tsx           # CREATE - Responsive grid layout
│   ├── ui/                              # CREATE - Reusable UI components
│   │   ├── Logo.tsx                     # CREATE - Logo component
│   │   └── Button.tsx                   # CREATE - Button variants
│   ├── templates/                       # CREATE - Page templates
│   │   ├── HomePage.tsx                 # CREATE - Home page content
│   │   └── AboutPage.tsx                # CREATE - About page content
│   ├── features/                        # CREATE - Feature components
│   │   ├── Hero.tsx                     # MOVE+MODIFY - Adapted hero
│   │   ├── ServiceTimes.tsx             # CREATE - Service schedule
│   │   ├── WhoWeAre.tsx                 # CREATE - Repurposed MissionImpact
│   │   ├── FacebookFeed.tsx             # CREATE - FB Page Plugin embed
│   │   ├── QuickContact.tsx             # CREATE - Contact CTA section
│   │   └── ChurchHistory.tsx            # CREATE - History section
│   ├── feed/                            # CREATE - Feed-related components
│   │   └── EmptyState.tsx               # CREATE - Empty/error states
│   ├── CommunityEngagement.tsx          # DELETE - Content merged elsewhere
│   ├── Footer.tsx                       # DELETE - Replaced by layout/Footer
│   ├── Hero.tsx                         # DELETE - Moved to features/
│   ├── MissionImpact.tsx                # DELETE - Repurposed as WhoWeAre
│   ├── Navbar.tsx                       # DELETE - Replaced by layout/Navbar
│   └── ValuesGrid.tsx                   # DELETE - Content moved to AboutPage
├── pages/                               # CREATE - Route components
│   ├── Home.tsx                         # CREATE - Home route
│   └── About.tsx                        # CREATE - About route
├── __tests__/
│   ├── App.test.tsx                     # MODIFY - Update for router
│   ├── Navbar.test.tsx                  # DELETE - Replace with new test
│   ├── layout/
│   │   └── Navbar.test.tsx              # CREATE - New navbar tests
│   └── features/
│       └── FacebookFeed.test.tsx        # CREATE - FB embed tests
├── App.tsx                              # MODIFY - Add React Router
├── main.tsx                             # KEEP - No changes
├── index.css                            # MODIFY - Add marquee animation
├── types.ts                             # MODIFY - Add new interfaces
└── test-setup.ts                        # KEEP - No changes

public/
├── favicon.svg                          # KEEP - Existing favicon
└── og-image.png                         # CREATE - OpenGraph image (user provides)

index.html                               # MODIFY - Update meta tags if needed
tailwind.config.js                       # MODIFY - Add marquee animation
package.json                             # MODIFY - Add react-router-dom
```

### Technical Approach

**Routing:** Add `react-router-dom` v6.28.0 for client-side routing
- BrowserRouter in main.tsx
- Routes in App.tsx for `/` and `/about`
- Use `<Link>` components for navigation

**Layout System:** Port cg-iptc's LayoutShell pattern
- LayoutShell wraps all pages with Navbar + Footer
- TwoColumnShell provides 12-column grid (2+10 on desktop, stacked on mobile)
- For CHOP: Use single-column centered layout (no left sidebar needed)

**Facebook Integration:** Use Facebook Page Plugin (SDK-free embed)
```html
<iframe
  src="https://www.facebook.com/plugins/page.php?href=https://facebook.com/PAGE_NAME&tabs=timeline&width=340&height=500"
  width="340"
  height="500"
  style="border:none;overflow:hidden"
  scrolling="no"
  frameborder="0"
  allowfullscreen="true"
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
</iframe>
```

**Fonts:** Keep Inter via Google Fonts CDN (already configured)
- Add Oswald for headings (matching cg-iptc style) - optional enhancement

**Animation:** Port marquee animation for mobile nav ticker
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### Existing Patterns to Follow

Follow the established CHOP codebase patterns:

1. **Component Structure:**
   - Default exports for all components
   - Functional components with TypeScript
   - Props interfaces defined inline or in types.ts

2. **Styling:**
   - Tailwind utility classes as primary styling method
   - Custom component classes in index.css `@layer components`
   - Brand colors via Tailwind config: `brand-blue`, `brand-gold`

3. **Icons:**
   - Lucide React for all icons
   - Import individual icons: `import { Icon } from 'lucide-react'`

4. **Testing:**
   - Vitest + Testing Library
   - Tests in `__tests__/` directory
   - File pattern: `ComponentName.test.tsx`
   - Use `describe`, `it`, `expect` from Vitest
   - Use `render`, `screen` from Testing Library

### Integration Points

1. **React Router DOM**
   - Install: `react-router-dom@6.28.0`
   - BrowserRouter wraps App in main.tsx
   - Routes defined in App.tsx

2. **Facebook Page Plugin**
   - No SDK required (iframe embed)
   - Responsive width handling via container
   - Facebook Page URL required from user

3. **Existing Components**
   - Content from ValuesGrid → AboutPage (7 Pillars section)
   - Content from MissionImpact → WhoWeAre component
   - Content from Footer → layout/Footer (simplified)
   - Hero styling adapted for new layout

---

## Development Context

### Relevant Existing Code

| File | Reference For |
|------|---------------|
| `src/components/Hero.tsx` | Hero section styling, gradient overlays |
| `src/components/ValuesGrid.tsx` | 7 Pillars content and grid layout |
| `src/components/MissionImpact.tsx` | "Who We Are" content, slideshow pattern |
| `src/components/Footer.tsx` | Contact info, newsletter form pattern |
| `src/index.css` | Custom Tailwind components, btn-primary, card |
| `tailwind.config.js` | Brand colors, font configuration |
| `/opt/docker-stack/cg-iptc/components/layout/` | Layout patterns to port |
| `/opt/docker-stack/cg-iptc/components/layout/Navbar.tsx` | Centered branding navbar |

### Dependencies

**Framework/Libraries (existing):**
- react@18.3.1
- react-dom@18.3.1
- lucide-react@0.468.0
- tailwindcss@3.4.17
- typescript@5.7.2
- vite@6.0.5
- vitest@2.1.8
- @testing-library/react@16.1.0

**New Dependencies:**
- react-router-dom@6.28.0 (client-side routing)

**Internal Modules:**
- `@/components/layout/LayoutShell` - Main layout wrapper
- `@/components/layout/Navbar` - Navigation
- `@/components/layout/Footer` - Footer
- `@/pages/Home` - Home route component
- `@/pages/About` - About route component

### Configuration Changes

1. **package.json** - Add react-router-dom dependency
2. **tailwind.config.js** - Add marquee animation keyframes
3. **index.css** - Add marquee animation class
4. **vite.config.ts** - No changes needed (path alias already configured)

### Existing Conventions (Brownfield)

| Convention | Pattern |
|------------|---------|
| Exports | Default exports for components |
| Components | Functional with hooks |
| Styling | Tailwind utilities + custom classes |
| Icons | Lucide React, individual imports |
| Path Alias | `@/` → `src/` |
| Testing | Vitest + Testing Library in `__tests__/` |
| Colors | `brand-blue` (#1e3a8a), `brand-gold` (#f59e0b) |
| Font | Inter via Google Fonts CDN |

### Test Framework & Standards

- **Framework:** Vitest 2.1.8
- **DOM Environment:** jsdom 25.0.1
- **Component Testing:** @testing-library/react 16.1.0
- **Assertions:** @testing-library/jest-dom 6.6.3
- **File Pattern:** `src/__tests__/**/*.test.tsx`
- **Setup File:** `src/test-setup.ts`
- **Coverage:** Vitest built-in coverage reporter

---

## Implementation Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Runtime | Node.js | >=18.0.0 |
| Framework | React | 18.3.1 |
| Language | TypeScript | 5.7.2 |
| Build Tool | Vite | 6.0.5 |
| Styling | Tailwind CSS | 3.4.17 |
| Routing | React Router DOM | 6.28.0 |
| Icons | Lucide React | 0.468.0 |
| Testing | Vitest | 2.1.8 |
| Test Utils | Testing Library | 16.1.0 |

---

## Technical Details

### Component Architecture

**LayoutShell (Adapted from cg-iptc):**
```typescript
interface LayoutShellProps {
  children: ReactNode;
}

// Renders: Navbar → Main Content → Footer
// Responsive: Full-width container, max-w-screen-2xl centered
```

**Navbar (New Design):**
- Centered logo/branding section (stacked on mobile, horizontal on desktop)
- Sticky navigation below branding
- Desktop: Centered nav links
- Mobile: Marquee ticker animation OR hamburger menu
- Links: HOME, ABOUT, CONTACT, PARTNER WITH US

**FacebookFeed Component:**
```typescript
interface FacebookFeedProps {
  pageUrl: string;        // Facebook page URL
  width?: number;         // Default: 340
  height?: number;        // Default: 500
  tabs?: string;          // Default: 'timeline'
}
```

### Routing Structure

```typescript
// App.tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

### Content Migration

| Old Component | New Location | Content |
|---------------|--------------|---------|
| Hero.tsx | features/Hero.tsx | Tagline, CTAs (adapted styling) |
| MissionImpact.tsx | features/WhoWeAre.tsx | "Who We Are" text, service list |
| ValuesGrid.tsx | templates/AboutPage.tsx | 7 Pillars content |
| Footer.tsx | layout/Footer.tsx | Copyright only (simplified) |
| CommunityEngagement.tsx | features/WhoWeAre.tsx | City View content merged |

### Facebook Page Plugin Configuration

The Facebook Page Plugin requires:
1. **Facebook Page URL:** `https://www.facebook.com/profile.php?id=100092857989783`
2. No App ID or SDK required for basic embed
3. Iframe-based implementation (no JavaScript SDK)

**Pastor:** Pastor Loretta Stevens

Responsive handling:
```typescript
// Container constrains width, iframe fills container
<div className="w-full max-w-[340px] mx-auto">
  <iframe ... />
</div>
```

---

## Development Setup

```bash
# 1. Navigate to project
cd /opt/docker-stack/chop-web

# 2. Install dependencies (including new react-router-dom)
npm install react-router-dom@6.28.0

# 3. Start development server
npm run dev

# 4. Run tests
npm test

# 5. Type check
npm run type-check

# 6. Build for production
npm run build
```

---

## Implementation Guide

### Setup Steps

1. Create feature branch: `git checkout -b feature/redesign-atomic-layout`
2. Install react-router-dom: `npm install react-router-dom@6.28.0`
3. Create new folder structure: `src/components/{layout,ui,templates,features,feed}/`
4. Create pages folder: `src/pages/`

### Implementation Steps

**Phase 1: Foundation (Story 1)**
1. Create folder structure
2. Install react-router-dom
3. Create LayoutShell component
4. Create new Navbar component (centered branding)
5. Create new Footer component (simplified)
6. Update App.tsx with BrowserRouter and Routes
7. Create placeholder Home and About pages
8. Update tailwind.config.js with marquee animation

**Phase 2: Home Page (Story 2)**
1. Adapt Hero component for new layout
2. Create ServiceTimes component
3. Create WhoWeAre component (migrate MissionImpact content)
4. Create FacebookFeed component with iframe embed
5. Create QuickContact component
6. Assemble HomePage template
7. Wire up Home route

**Phase 3: About Page (Story 3)**
1. Create ChurchHistory section component
2. Create PastorBio section component
3. Create MissionVision section component
4. Migrate 7 Pillars content to Beliefs section
5. Assemble AboutPage template
6. Wire up About route

**Phase 4: Polish & Testing (Story 4)**
1. Update/create tests for new components
2. Verify responsive behavior (mobile, tablet, desktop)
3. Test Facebook embed loading
4. Clean up old components (delete unused files)
5. Update index.html meta tags if needed
6. Final type-check and lint
7. Build and verify production bundle

### Testing Strategy

**Unit Tests:**
- LayoutShell renders children correctly
- Navbar renders all links and handles mobile menu
- Footer displays copyright with current year
- FacebookFeed renders iframe with correct src

**Integration Tests:**
- Navigation between Home and About works
- All content sections render on each page
- Responsive layout switches at breakpoints

**Manual Testing Checklist:**
- [ ] Desktop: Two-column layout displays correctly
- [ ] Mobile: Stacked layout, hamburger/marquee nav works
- [ ] Facebook embed loads and displays posts
- [ ] All internal links navigate correctly
- [ ] External links open in new tab
- [ ] Images load (once provided)
- [ ] No console errors
- [ ] Lighthouse score > 90 for performance

### Acceptance Criteria

1. **Layout:** Website uses atomic folder structure matching cg-iptc pattern
2. **Navigation:** Home (`/`) and About (`/about`) routes work with client-side navigation
3. **Navbar:** Centered branding with sticky nav, responsive mobile menu
4. **Footer:** Simplified centered copyright
5. **Home Page:** Displays Hero, Service Times, Who We Are, Facebook Feed, Quick Contact
6. **About Page:** Displays Church History, Pastor Bio, Mission/Vision, Beliefs (7 Pillars)
7. **Facebook:** Embedded feed displays recent posts from church page
8. **Responsive:** Works on mobile (375px), tablet (768px), desktop (1440px)
9. **Content:** All existing text content preserved and accessible
10. **Tests:** All new components have passing tests

---

## Developer Resources

### File Paths Reference

**New Files to Create:**
```
src/components/layout/LayoutShell.tsx
src/components/layout/Navbar.tsx
src/components/layout/Footer.tsx
src/components/layout/TwoColumnShell.tsx
src/components/ui/Logo.tsx
src/components/ui/Button.tsx
src/components/templates/HomePage.tsx
src/components/templates/AboutPage.tsx
src/components/features/Hero.tsx
src/components/features/ServiceTimes.tsx
src/components/features/WhoWeAre.tsx
src/components/features/FacebookFeed.tsx
src/components/features/QuickContact.tsx
src/components/features/ChurchHistory.tsx
src/components/feed/EmptyState.tsx
src/pages/Home.tsx
src/pages/About.tsx
```

**Files to Modify:**
```
src/App.tsx
src/index.css
src/types.ts
tailwind.config.js
package.json
```

**Files to Delete (after migration):**
```
src/components/CommunityEngagement.tsx
src/components/Footer.tsx
src/components/Hero.tsx
src/components/MissionImpact.tsx
src/components/Navbar.tsx
src/components/ValuesGrid.tsx
src/__tests__/Navbar.test.tsx
```

### Key Code Locations

| Purpose | Location |
|---------|----------|
| Brand colors | `tailwind.config.js:9-13` |
| Custom CSS components | `src/index.css:18-34` |
| Existing pillars data | `src/components/ValuesGrid.tsx:4-40` |
| Mission content | `src/components/MissionImpact.tsx:49-84` |
| Contact info | `src/components/Footer.tsx:29-49` |
| Hero styling | `src/components/Hero.tsx:5-51` |

### Testing Locations

```
src/__tests__/                    # All test files
src/__tests__/App.test.tsx        # App/routing tests
src/__tests__/layout/             # Layout component tests
src/__tests__/features/           # Feature component tests
```

### Documentation to Update

- `README.md` - Update project description, add routing info
- `CHOP.md` - Update component reference, add About page route

---

## UX/UI Considerations

**UI Components Affected:**
- Navbar: Complete redesign (centered branding, sticky nav)
- Footer: Simplified (copyright only)
- Hero: Styling adapted for new layout
- All content sections: New component structure

**UX Flow Changes:**
- Current: Single scrolling page with hash navigation
- New: Two-page site (Home + About) with client-side routing
- Navigation: Top nav with HOME, ABOUT, CONTACT, PARTNER WITH US

**Responsive Breakpoints:**
- Mobile: < 768px (stacked layout, hamburger menu)
- Tablet: 768px - 1024px (transitional)
- Desktop: > 1024px (full layout, centered nav)

**Accessibility:**
- Semantic HTML (header, nav, main, footer, section)
- Skip-to-content link
- Keyboard navigation for all interactive elements
- ARIA labels on icon-only buttons
- Focus visible states on all interactive elements

**Visual Patterns:**
- Follow CHOP brand colors (blue #1e3a8a, gold #f59e0b)
- White background, zinc-900 text (matching cg-iptc)
- Consistent spacing using Tailwind scale
- Rounded corners on cards/buttons (rounded-xl, rounded-full)

---

## Testing Approach

**Test Framework:** Vitest 2.1.8 with Testing Library

**Test Strategy:**
1. Unit tests for all new components
2. Integration tests for routing
3. Accessibility tests for interactive elements

**Coverage Targets:**
- Statements: 80%
- Branches: 75%
- Functions: 80%
- Lines: 80%

**Test Patterns:**
```typescript
// Follow existing pattern from Navbar.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ComponentName from '../components/path/ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <ComponentName />
      </BrowserRouter>
    );
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

---

## Deployment Strategy

### Deployment Steps

1. Merge feature branch to main
2. SSH to server: `ssh -i ~/.ssh/b2aserver_key dev@178.156.164.143`
3. Pull latest: `cd /opt/docker-stack/chop-web && git pull origin main`
4. Rebuild container: `docker compose build chop-web`
5. Restart service: `docker compose up -d chop-web`
6. Verify: `curl -I https://communityhouseofprayer.org`

### Rollback Plan

1. Identify last working commit: `git log --oneline -10`
2. Revert: `git revert HEAD` or `git checkout <commit-hash>`
3. Rebuild and redeploy: `docker compose build chop-web && docker compose up -d chop-web`

### Monitoring

- Check container logs: `docker compose logs chop-web --tail 50`
- Verify site loads: `curl -I https://communityhouseofprayer.org`
- Check browser console for JavaScript errors
- Verify Facebook embed loads (may take a few seconds)
