# Story: Polish - Testing + Cleanup + Deployment

**Story ID:** CHOP-4
**Epic:** CHOP-REDESIGN
**Status:** Draft
**Points:** 3
**Created:** 2025-12-27

---

## User Story

**As a** developer
**I want** to clean up unused code, ensure full test coverage, and deploy the redesigned site
**So that** the codebase is maintainable and the new design is live

---

## Description

Final polish story: Delete old components that have been replaced, ensure all tests pass with good coverage, verify responsive design across devices, update documentation, and deploy to production.

---

## Acceptance Criteria

- [ ] All old components deleted (see list below)
- [ ] No unused imports or dead code
- [ ] All tests pass (`npm test`)
- [ ] Test coverage >= 80%
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No ESLint warnings (`npm run lint`)
- [ ] Responsive design verified on mobile (375px), tablet (768px), desktop (1440px)
- [ ] Facebook embed functional and loading
- [ ] All navigation links work correctly
- [ ] `CHOP.md` updated with new component structure
- [ ] Production build succeeds (`npm run build`)
- [ ] Deployed to production and verified

---

## Technical Notes

**Files to Delete:**
```
src/components/CommunityEngagement.tsx
src/components/Footer.tsx
src/components/Hero.tsx
src/components/MissionImpact.tsx
src/components/Navbar.tsx
src/components/ValuesGrid.tsx
src/__tests__/Navbar.test.tsx (old test)
```

**Documentation Updates:**
Update `CHOP.md` section "Component Reference" with new structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── LayoutShell.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   └── Logo.tsx
│   ├── templates/
│   │   ├── HomePage.tsx
│   │   └── AboutPage.tsx
│   ├── features/
│   │   ├── Hero.tsx
│   │   ├── ServiceTimes.tsx
│   │   ├── WhoWeAre.tsx
│   │   ├── FacebookFeed.tsx
│   │   ├── QuickContact.tsx
│   │   ├── ChurchHistory.tsx
│   │   ├── PastorBio.tsx
│   │   ├── MissionVision.tsx
│   │   └── Beliefs.tsx
│   └── feed/
│       └── EmptyState.tsx
├── pages/
│   ├── Home.tsx
│   └── About.tsx
```

**Deployment Commands:**
```bash
# On server
cd /opt/docker-stack/chop-web
git pull origin main
cd /opt/docker-stack
docker compose build chop-web
docker compose up -d chop-web
docker compose logs chop-web --tail 20
curl -I https://communityhouseofprayer.org
```

---

## Tasks

### Cleanup
- [ ] Delete `src/components/CommunityEngagement.tsx`
- [ ] Delete `src/components/Footer.tsx`
- [ ] Delete `src/components/Hero.tsx`
- [ ] Delete `src/components/MissionImpact.tsx`
- [ ] Delete `src/components/Navbar.tsx`
- [ ] Delete `src/components/ValuesGrid.tsx`
- [ ] Delete `src/__tests__/Navbar.test.tsx`
- [ ] Remove any unused imports in remaining files
- [ ] Clean up `src/types.ts` (remove Pillar if moved to feature)

### Testing
- [ ] Run full test suite: `npm test`
- [ ] Check coverage: `npm run test:coverage`
- [ ] Achieve >= 80% coverage
- [ ] Fix any failing tests

### Quality Checks
- [ ] Run `npm run type-check` - no errors
- [ ] Run `npm run lint` - no warnings
- [ ] Fix any issues found

### Responsive Verification
- [ ] Test on mobile viewport (375px width)
- [ ] Test on tablet viewport (768px width)
- [ ] Test on desktop viewport (1440px width)
- [ ] Verify all navigation works at each size
- [ ] Verify Facebook embed displays correctly

### Documentation
- [ ] Update `CHOP.md` Component Reference section
- [ ] Update `CHOP.md` to add About page route info
- [ ] Update `README.md` if needed

### Deployment
- [ ] Run `npm run build` locally - succeeds
- [ ] Commit all changes
- [ ] Push to GitHub
- [ ] SSH to server
- [ ] Pull latest changes
- [ ] Rebuild Docker container
- [ ] Restart service
- [ ] Verify site loads at https://communityhouseofprayer.org
- [ ] Verify About page at https://communityhouseofprayer.org/about
- [ ] Check for console errors
- [ ] Verify Facebook embed loads

---

## Dependencies

- Story CHOP-1 (Foundation) complete
- Story CHOP-2 (Home Page) complete
- Story CHOP-3 (About Page) complete

## Blocked By

- CHOP-1, CHOP-2, CHOP-3 must all be complete

---

## Definition of Done Checklist

- [ ] Old components deleted
- [ ] All tests pass
- [ ] Coverage >= 80%
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Responsive design verified
- [ ] Documentation updated
- [ ] Deployed to production
- [ ] Production site verified working
