# CHOP Website Redesign - Epic

## Epic: Atomic Design Redesign with Facebook Integration

**Epic ID:** CHOP-REDESIGN
**Status:** Draft
**Created:** 2025-12-27
**Author:** Legend

---

## Overview

Redesign the Community House of Prayer website using atomic design patterns ported from cg-iptc. Transform the current single-page site into a two-page experience (Home + About) with Facebook integration for displaying church updates and pastor messages.

## Business Value

- Modern, professional design matching organizational standards
- Improved maintainability through atomic component structure
- Enhanced engagement through Facebook feed integration
- Better content organization with dedicated About page
- Scalable architecture for future enhancements

## Success Criteria

1. Website uses atomic folder structure (layout/, ui/, templates/, features/)
2. Home and About pages accessible via client-side routing
3. Facebook Page Plugin displays recent church posts
4. All existing content preserved and accessible
5. Responsive design works on mobile, tablet, and desktop
6. All tests pass with 80%+ coverage

---

## Stories

| Story | Title | Status | Points |
|-------|-------|--------|--------|
| CHOP-1 | Foundation: Atomic Structure + Routing | Draft | 5 |
| CHOP-2 | Home Page: Content Sections + Facebook Feed | Draft | 5 |
| CHOP-3 | About Page: Church Info + Beliefs | Draft | 3 |
| CHOP-4 | Polish: Testing + Cleanup + Deployment | Draft | 3 |

**Total Points:** 16

---

## Dependencies

- Facebook Page URL (required for Story 2)
- Pastor name and bio content (required for Story 3)
- Church history content (required for Story 3)
- New images when available (can use placeholders initially)

## Technical Dependencies

- react-router-dom@6.28.0 (installed in Story 1)

## Risks

| Risk | Mitigation |
|------|------------|
| Facebook embed may not load in some browsers | Graceful fallback with link to FB page |
| Content migration may miss details | Review each section against original |
| Mobile nav complexity | Test on multiple devices early |

---

## Definition of Done

- [ ] All 4 stories completed and merged
- [ ] Tests passing with 80%+ coverage
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Responsive design verified on mobile/tablet/desktop
- [ ] Facebook embed functional
- [ ] Deployed to production
- [ ] Old components deleted
