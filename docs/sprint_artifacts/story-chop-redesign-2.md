# Story: Home Page - Content Sections + Facebook Feed

**Story ID:** CHOP-2
**Epic:** CHOP-REDESIGN
**Status:** Review
**Points:** 5
**Created:** 2025-12-27

---

## User Story

**As a** website visitor
**I want** to see the church's mission, service times, and latest Facebook posts on the home page
**So that** I can quickly understand who they are and stay updated

---

## Description

Build out the Home page with all content sections: Hero, Service Times, Who We Are (migrated from MissionImpact), Facebook Feed embed, and Quick Contact. This transforms the placeholder Home page into the full experience.

---

## Acceptance Criteria

- [x] `Hero` component displays tagline, CTAs, and background image
- [x] `ServiceTimes` component shows weekly service schedule
- [x] `WhoWeAre` component displays mission content (from MissionImpact)
- [x] `FacebookFeed` component embeds Facebook Page Plugin iframe
- [x] `QuickContact` component displays address, phone, email with CTAs
- [x] All sections render in correct order on Home page
- [x] Responsive: All sections work on mobile, tablet, desktop
- [x] Facebook embed loads and displays recent posts
- [x] Existing content from MissionImpact preserved
- [x] Hero CTAs link to appropriate sections/pages
- [x] Tests written for all new components

---

## Technical Notes

**Reference:** See tech-spec.md Section "Content Migration" and "Facebook Page Plugin"

**Key Files to Create:**
```
src/components/features/Hero.tsx
src/components/features/ServiceTimes.tsx
src/components/features/WhoWeAre.tsx
src/components/features/FacebookFeed.tsx
src/components/features/QuickContact.tsx
src/components/templates/HomePage.tsx
```

**Key Files to Modify:**
```
src/pages/Home.tsx - Import and render HomePage template
```

**Facebook Page Plugin iframe:**
```html
<iframe
  src="https://www.facebook.com/plugins/page.php?href=https://facebook.com/PAGE_NAME&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true"
  width="340"
  height="500"
  style="border:none;overflow:hidden"
  scrolling="no"
  frameborder="0"
  allowfullscreen="true"
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
</iframe>
```

**Content to Migrate:**
- Hero: Keep "Commissioned by God to Serve Our City" tagline
- WhoWeAre: Migrate from `src/components/MissionImpact.tsx:49-84`
- Service list: The Homeless, Youth & Families, Seniors

**Service Times (placeholder - user to provide actual times):**
```
Sunday Worship: 10:00 AM
Wednesday Bible Study: 7:00 PM
Saturday Outreach: 9:00 AM
```

---

## Tasks

- [x] Create `Hero.tsx` adapted from existing Hero
- [x] Create `ServiceTimes.tsx` with schedule grid
- [x] Create `WhoWeAre.tsx` migrating MissionImpact content
- [x] Create `FacebookFeed.tsx` with iframe embed
- [x] Create `QuickContact.tsx` with contact info and CTA
- [x] Create `HomePage.tsx` template assembling all sections
- [x] Update `Home.tsx` page to render HomePage
- [x] Style all sections with brand colors
- [x] Test responsive behavior at all breakpoints
- [x] Verify Facebook embed loads correctly
- [x] Write tests for each new component
- [x] Run `npm run type-check` - no errors
- [x] Run `npm test` - all pass

---

## Dependencies

- Story CHOP-1 (Foundation) must be complete
- Facebook Page URL from user

## Blocked By

- CHOP-1 (LayoutShell, routing must exist)

## Provided Information

- **Facebook Page URL:** `https://www.facebook.com/profile.php?id=100092857989783`
- **Service Times:** Pull from Facebook page during implementation
- **Hero Images:** User will provide (use placeholders initially)

---

## Dev Agent Record

### Debug Log
- 2025-12-28: Started Home page implementation
- Created Hero with background image, tagline, and CTAs
- Built ServiceTimes with 3-column grid layout
- Created WhoWeAre migrating content from MissionImpact
- Implemented FacebookFeed with Page Plugin iframe
- Built QuickContact with contact info and Partner CTA
- Assembled HomePage template with all sections

### Completion Notes
- All 11 acceptance criteria satisfied
- All 13 tasks completed
- 36 tests passing (8 test files)
- TypeScript type-check passes with no errors
- Facebook Page Plugin configured with provided URL
- Hero links: "Our Mission" -> #mission, "Learn More" -> /about
- Service times are placeholder (Sunday 10AM, Wed 7PM, Sat 9AM)
- QuickContact includes Partner With Us CTA in blue section

---

## File List

### Created
- `src/components/features/Hero.tsx`
- `src/components/features/ServiceTimes.tsx`
- `src/components/features/WhoWeAre.tsx`
- `src/components/features/FacebookFeed.tsx`
- `src/components/features/QuickContact.tsx`
- `src/components/templates/HomePage.tsx`
- `src/__tests__/features/HomePage.test.tsx`

### Modified
- `src/pages/Home.tsx` - Now renders HomePage template
- `src/__tests__/App.test.tsx` - Updated for new home page content

---

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2025-12-28 | Story implementation complete - Home page with all sections | Dev Agent |
