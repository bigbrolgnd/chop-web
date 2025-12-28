# Story: About Page - Church Info + Beliefs

**Story ID:** CHOP-3
**Epic:** CHOP-REDESIGN
**Status:** Draft
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

- [ ] `ChurchHistory` section displays church story (placeholder for user content)
- [ ] `PastorBio` section displays pastor name, photo placeholder, and bio
- [ ] `MissionVision` section displays mission statement and vision
- [ ] `Beliefs` section displays 7 Pillars (migrated from ValuesGrid)
- [ ] All sections render in correct order on About page
- [ ] Responsive: All sections work on mobile, tablet, desktop
- [ ] Content from ValuesGrid preserved in Beliefs section
- [ ] Section design matches cg-iptc AboutPage pattern
- [ ] Navigation from Home to About works
- [ ] Tests written for all new components

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

- [ ] Create reusable `AboutSection` component (port from cg-iptc)
- [ ] Create `ChurchHistory.tsx` with placeholder content
- [ ] Create `PastorBio.tsx` with placeholder photo and bio
- [ ] Create `MissionVision.tsx` repurposing existing content
- [ ] Create `Beliefs.tsx` migrating 7 Pillars from ValuesGrid
- [ ] Create `AboutPage.tsx` template assembling all sections
- [ ] Update `About.tsx` page to render AboutPage
- [ ] Style sections with brand colors (blue accents instead of red)
- [ ] Add dividers between sections (matching cg-iptc)
- [ ] Test responsive behavior at all breakpoints
- [ ] Write tests for each new component
- [ ] Run `npm run type-check` - no errors
- [ ] Run `npm test` - all pass

---

## Dependencies

- Story CHOP-1 (Foundation) must be complete

## Blocked By

- CHOP-1 (LayoutShell, routing must exist)

## Provided Information

- **Pastor:** Pastor Loretta Stevens
- **Church History:** Pull from Facebook page or use placeholder
- **Mission/Vision:** Repurpose existing content from MissionImpact component
