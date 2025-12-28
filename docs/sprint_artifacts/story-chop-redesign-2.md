# Story: Home Page - Content Sections + Facebook Feed

**Story ID:** CHOP-2
**Epic:** CHOP-REDESIGN
**Status:** Draft
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

- [ ] `Hero` component displays tagline, CTAs, and background image
- [ ] `ServiceTimes` component shows weekly service schedule
- [ ] `WhoWeAre` component displays mission content (from MissionImpact)
- [ ] `FacebookFeed` component embeds Facebook Page Plugin iframe
- [ ] `QuickContact` component displays address, phone, email with CTAs
- [ ] All sections render in correct order on Home page
- [ ] Responsive: All sections work on mobile, tablet, desktop
- [ ] Facebook embed loads and displays recent posts
- [ ] Existing content from MissionImpact preserved
- [ ] Hero CTAs link to appropriate sections/pages
- [ ] Tests written for all new components

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

- [ ] Create `Hero.tsx` adapted from existing Hero
- [ ] Create `ServiceTimes.tsx` with schedule grid
- [ ] Create `WhoWeAre.tsx` migrating MissionImpact content
- [ ] Create `FacebookFeed.tsx` with iframe embed
- [ ] Create `QuickContact.tsx` with contact info and CTA
- [ ] Create `HomePage.tsx` template assembling all sections
- [ ] Update `Home.tsx` page to render HomePage
- [ ] Style all sections with brand colors
- [ ] Test responsive behavior at all breakpoints
- [ ] Verify Facebook embed loads correctly
- [ ] Write tests for each new component
- [ ] Run `npm run type-check` - no errors
- [ ] Run `npm test` - all pass

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
