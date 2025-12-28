# Story: About Page - Church Info + Beliefs

**Story ID:** CHOP-3
**Epic:** CHOP-REDESIGN
**Status:** Review
**Points:** 3
**Created:** 2025-12-27

---

## User Story

**As a** website visitor
**I want** to learn about the church's history, pastor, and beliefs on a dedicated About page
**So that** I can understand the church's identity and values before visiting

---

## Description

Build the About page with sections for Church History, Pastor Bio, Mission & Vision, and Core Beliefs (7 Pillars migrated from ValuesGrid). This gives visitors deeper context about the church.

---

## Acceptance Criteria

- [x] `ChurchHistory` section displays church story (placeholder for user content)
- [x] `PastorBio` section displays pastor name, photo placeholder, and bio
- [x] `MissionVision` section displays mission statement and vision
- [x] `Beliefs` section displays 7 Pillars (migrated from ValuesGrid)
- [x] All sections render in correct order on About page
- [x] Responsive: All sections work on mobile, tablet, desktop
- [x] Content from ValuesGrid preserved in Beliefs section
- [x] Section design matches cg-iptc AboutPage pattern
- [x] Navigation from Home to About works
- [x] Tests written for all new components

---

## Technical Notes

**Reference:** See tech-spec.md Section "Content Migration" and cg-iptc AboutPage pattern

**Key Files to Create:**
```
src/components/features/ChurchHistory.tsx
src/components/features/PastorBio.tsx
src/components/features/MissionVision.tsx
src/components/features/Beliefs.tsx
src/components/templates/AboutPage.tsx
```

**Key Files to Modify:**
```
src/pages/About.tsx - Import and render AboutPage template
```

**Content to Migrate:**
- 7 Pillars data from `src/components/ValuesGrid.tsx:4-40`
  - Biblical Truth
  - Spirit-Led Prayer
  - Compassionate Service
  - Authentic Community
  - Integrity
  - Hope
  - Unconditional Love

**AboutSection Pattern (from cg-iptc):**
```typescript
function AboutSection({ title, heading, children, imageElement }) {
  return (
    <section className="flex flex-col gap-4 mx-auto w-full max-w-none py-8">
      <div className="px-6 mt-4">
        <div className="w-full max-w-lg mx-auto">{imageElement}</div>
      </div>
      <header className="px-6">
        <h3 className="text-sm uppercase font-semibold tracking-widest text-brand-blue mb-3 text-center">{title}</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight text-center">{heading}</h2>
      </header>
      <div className="px-6 mt-4">
        <div className="prose prose-lg max-w-3xl mx-auto text-left">{children}</div>
      </div>
    </section>
  );
}
```

**Placeholder Content (user to provide):**
- Church History: "Community House of Prayer was founded in..."
- Pastor Bio: Name, background, vision
- Mission: Existing content from MissionImpact
- Vision: "To see Fort Worth transformed..."

---

## Tasks

- [x] Create reusable `AboutSection` component (port from cg-iptc)
- [x] Create `ChurchHistory.tsx` with placeholder content
- [x] Create `PastorBio.tsx` with placeholder photo and bio
- [x] Create `MissionVision.tsx` repurposing existing content
- [x] Create `Beliefs.tsx` migrating 7 Pillars from ValuesGrid
- [x] Create `AboutPage.tsx` template assembling all sections
- [x] Update `About.tsx` page to render AboutPage
- [x] Style sections with brand colors (blue accents instead of red)
- [x] Add dividers between sections (matching cg-iptc)
- [x] Test responsive behavior at all breakpoints
- [x] Write tests for each new component
- [x] Run `npm run type-check` - no errors
- [x] Run `npm test` - all pass

---

## Dependencies

- Story CHOP-1 (Foundation) must be complete

## Blocked By

- CHOP-1 (LayoutShell, routing must exist)

## Provided Information

- **Pastor:** Pastor Loretta Stevens
- **Church History:** Pull from Facebook page or use placeholder
- **Mission/Vision:** Repurpose existing content from MissionImpact component

---

## Dev Agent Record

### Debug Log
- 2025-12-28: Started About page implementation
- Created AboutSection reusable component following cg-iptc pattern
- Built ChurchHistory, PastorBio, MissionVision, Beliefs components
- Migrated 7 Pillars content from ValuesGrid to Beliefs component
- Assembled AboutPage template with proper section ordering and dividers

### Completion Notes
- All 10 acceptance criteria satisfied
- All 13 tasks completed
- 29 tests passing (7 test files)
- TypeScript type-check passes with no errors
- AboutSection component provides consistent styling across all sections
- 7 Pillars migrated with icons and descriptions preserved
- Added "Get Involved" CTA card in Beliefs section
- Hero banner with blue background added at top of About page

---

## File List

### Created
- `src/components/ui/AboutSection.tsx`
- `src/components/features/ChurchHistory.tsx`
- `src/components/features/PastorBio.tsx`
- `src/components/features/MissionVision.tsx`
- `src/components/features/Beliefs.tsx`
- `src/components/templates/AboutPage.tsx`
- `src/__tests__/ui/AboutSection.test.tsx`
- `src/__tests__/features/AboutPage.test.tsx`

### Modified
- `src/pages/About.tsx` - Now renders AboutPage template

---

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2025-12-28 | Story implementation complete - About page with all sections | Dev Agent |
