# CHOP Website - Development Notes

Community House of Prayer website documentation.

**Live URL:** https://communityhouseofprayer.org

## Tech Stack

- React 18 with TypeScript
- Vite 6 for build tooling
- Tailwind CSS 3 for styling
- Lucide React for icons
- React Router for navigation
- Docker + Nginx for production deployment
- Caddy reverse proxy with automatic SSL

## Brand Colors

| Color | Hex | CSS Variable |
|-------|-----|--------------|
| Charcoal Blue | `#2F5262` | `brand-charcoal` |
| Golden Apricot | `#CF984D` | `brand-gold` |
| Silver | `#C9CECD` | `brand-silver` |
| Cool Steel | `#8BAAB5` | `brand-steel` |

---

## Changelog

### 2025-12-29: SVG Logo Flashing Fix

**Issue:** Logo was flashing before animation - "appears, disappears, then reappears"

**Root Cause:** The SVG file had **two conflicting style blocks** with different animation timings. When the browser loaded the SVG, both style blocks competed, causing race conditions.

**Fix Applied:**
- Consolidated into a single clean style block in `public/logo-animated.svg`
- Elements start with `opacity: 0` (no conflicts)
- Animations staggered layer-by-layer, completing in ~3 seconds

**Files Modified:**
- `public/logo-animated.svg` - Replaced dual style blocks with single consolidated block
- `src/components/ui/Logo.tsx` - Uses fetch + dangerouslySetInnerHTML to inject SVG

### 2025-12-29: Layer-by-Layer Logo Animation

**Requirement:** Logo should animate layer-by-layer, not fade in as a single image

**Implementation:**
- Using original 1.9MB SVG (`logo-animated.svg`) with embedded CSS animations
- Each layer has staggered animation delays:
  - `#pixel` (sun): 0.1s delay
  - `#left-house`: 0.4s delay
  - `#right-house`: 0.5s delay
  - `#boy`: 0.7s delay
  - `#mother`: 0.9s delay
  - `#dad`: 1.1s delay
  - `#girl`: 1.3s delay
  - `#girl-hands`: 1.5s delay
  - `#main-text`: 1.9s delay
  - `#Layer-1` (subtitle): 2.4s delay
- Total animation duration: ~3 seconds

**Files Modified:**
- `public/logo-animated.svg` - SVG with embedded CSS animations
- `src/components/ui/Logo.tsx` - Fetches SVG and injects via dangerouslySetInnerHTML

### 2025-12-29: Scroll Down Indicator

**Feature:** Added "Scroll Down" text with bouncing arrow below logo

**Behavior:**
- Appears 3 seconds after page load (after logo animation completes)
- Disappears when user scrolls past 10px
- Uses Lucide `ChevronDown` icon with Tailwind `animate-bounce`

**Files Modified:**
- `src/components/layout/Navbar.tsx` - Added scroll indicator with fade-in transition

### 2025-12-29: Navbar Marquee Animation Speed

**Issue:** Marquee animation was too fast on mobile/tablet devices

**Changes:**
- Initial speed: 15s
- First adjustment: 30s (50% slower)
- Final speed: 60s (50% slower again)

**Files Modified:**
- `src/components/layout/Navbar.tsx` - Changed marquee animation duration to 60s

### 2025-12-29: Logo Animation Duration

**Requirement:** Logo animation should take exactly 3 seconds

**Changes:**
- Changed from `duration-700` to `duration-[3000ms]`
- Removed initial delay

**Files Modified:**
- `src/components/ui/Logo.tsx`

### 2025-12-29: Performance Optimization

**Issues Found:**
- `logo.svg`: 1.9MB (SVG with embedded raster images)
- `slideshow/`: 13MB total
- `favicon.svg`: 241KB

**Optimizations Applied:**

1. **Slideshow Images** (13MB -> 1.5MB)
   - Compressed all images in `public/slideshow/`
   - Used ImageMagick for quality reduction

2. **Pastor Image** (47KB -> 29KB)
   - `public/images/pastor-stevens.jpg` compressed

3. **Lazy Loading**
   - Added `loading="lazy"` and `decoding="async"` to images
   - Applied to slideshow and pastor image components

4. **Nginx Caching & Compression**
   - Enhanced gzip settings in `nginx.conf`
   - Added cache headers for static assets

**Files Modified:**
- `nginx.conf` - Enhanced gzip configuration
- `public/slideshow/*` - Compressed images
- `public/images/pastor-stevens.jpg` - Compressed
- `src/components/features/PastorBio.tsx` - Added lazy loading

### 2025-12-29: Deployment & DNS

**Actions:**
- Fixed TypeScript errors (unused imports in PastorBio.tsx, QuickContact.tsx, LayoutShell.tsx)
- Updated Cloudflare DNS A record from Framer to server IP `178.156.164.143`
- Deployed via Docker Compose

**DNS Configuration:**
- Zone ID: `35ea112aa61931e61403995b9b44cfb2`
- Domain: `communityhouseofprayer.org`
- A record pointing to: `178.156.164.143`
- Proxied through Cloudflare

---

## File Structure

```
chop-web/
├── public/
│   ├── logo.svg              # Original logo (1.9MB, with embedded images)
│   ├── logo-animated.svg     # Animated version with CSS transitions
│   ├── logo.png              # PNG fallback
│   ├── favicon.svg           # Site favicon
│   ├── images/
│   │   └── pastor-stevens.jpg
│   └── slideshow/            # Slideshow images (compressed)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx    # Header, logo, navigation with marquee
│   │   ├── features/
│   │   │   └── PastorBio.tsx # Pastor section
│   │   └── ui/
│   │       └── Logo.tsx      # SVG logo with animation
│   └── main.tsx
├── nginx.conf                # Production nginx configuration
├── Dockerfile                # Multi-stage build
└── index.html                # Entry point with preload hints
```

---

## Deployment

```bash
# Build and deploy
cd /opt/docker-stack
docker compose build chop-web
docker compose up -d chop-web

# View logs
docker compose logs chop-web --tail 50

# Restart
docker compose restart chop-web
```

---

## Known Issues & Notes

1. **Logo File Size:** The animated logo uses the original 1.9MB SVG with embedded raster images. This is intentional to preserve layer-by-layer animation. Consider creating a true vector version in the future for better performance.

2. **SVG Preload:** The `index.html` includes a preload hint for the animated SVG, but the actual loading is done via JavaScript fetch for animation control.

3. **Cache Busting:** After deployments, users may need to hard refresh (Ctrl+Shift+R) to see updated animations due to browser caching.
