# CHOP.md - Community House of Prayer

Project initialization and reference document for the CHOP ministry website.

---

## Quick Reference

### URLs
| Environment | URL |
|-------------|-----|
| **Production** | https://communityhouseofprayer.org |
| **WWW Redirect** | https://www.communityhouseofprayer.org → redirects to root |

### Commands
```bash
# Development
cd /opt/docker-stack/chop-web
npm run dev          # Start Vite dev server (port 5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm test             # Run Vitest tests
npm run test:ui      # Run tests with UI
npm run lint         # ESLint check
npm run type-check   # TypeScript check

# Docker
docker compose build chop-web              # Build container
docker compose up -d chop-web              # Start service
docker compose restart chop-web            # Restart
docker compose logs chop-web --tail 50     # View logs

# Git
git pull origin main                       # Pull latest
git add . && git commit -m "message"       # Commit changes
git push origin main                       # Push to GitHub
```

---

## Credentials & Access

> **Note**: Sensitive credentials are stored in `/opt/docker-stack/CLAUDE.md` (server-only, not in repo).
> See the Deploy Skill section for full credential reference.

### GitHub Repository
| Item | Value |
|------|-------|
| **Repository** | https://github.com/bigbrolgnd/chop-web |
| **Visibility** | Public |
| **Username** | `bigbrolgnd` |
| **Clone SSH** | `git@github.com:bigbrolgnd/chop-web.git` |
| **Clone HTTPS** | `https://github.com/bigbrolgnd/chop-web.git` |

### Cloudflare DNS
| Item | Value |
|------|-------|
| **Domain** | `communityhouseofprayer.org` |
| **Zone ID** | `35ea112aa61931e61403995b9b44cfb2` |
| **Server IP** | `178.156.164.143` |

### Server Access
| Item | Value |
|------|-------|
| **Server** | `178.156.164.143` |
| **SSH Key** | `~/.ssh/b2aserver_key` |
| **Docker Stack** | `/opt/docker-stack` |
| **Project Path** | `/opt/docker-stack/chop-web` |

---

## File Locations

### Project Structure
```
/opt/docker-stack/chop-web/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── LayoutShell.tsx       # Main layout wrapper
│   │   │   ├── Navbar.tsx            # Header + navigation
│   │   │   └── Footer.tsx            # Site footer
│   │   ├── ui/
│   │   │   ├── Logo.tsx              # Reusable logo
│   │   │   └── AboutSection.tsx      # Reusable section wrapper
│   │   ├── templates/
│   │   │   ├── HomePage.tsx          # Home page template
│   │   │   └── AboutPage.tsx         # About page template
│   │   └── features/
│   │       ├── Hero.tsx              # Hero banner
│   │       ├── ServiceTimes.tsx      # Service schedule
│   │       ├── WhoWeAre.tsx          # Mission section
│   │       ├── FacebookFeed.tsx      # Facebook embed
│   │       ├── QuickContact.tsx      # Contact section
│   │       ├── ChurchHistory.tsx     # Church story
│   │       ├── PastorBio.tsx         # Pastor bio
│   │       ├── MissionVision.tsx     # Mission & vision
│   │       └── Beliefs.tsx           # 7 Pillars
│   ├── pages/
│   │   ├── Home.tsx                  # Home route
│   │   └── About.tsx                 # About route
│   ├── __tests__/
│   │   ├── App.test.tsx              # App tests
│   │   ├── layout/                   # Layout component tests
│   │   ├── ui/                       # UI component tests
│   │   └── features/                 # Feature component tests
│   ├── App.tsx                       # Router + LayoutShell
│   ├── main.tsx                      # Entry point
│   ├── index.css                     # Global styles/Tailwind
│   └── test-setup.ts                 # Vitest setup
├── public/
│   └── favicon.svg                   # Site favicon
├── dist/                             # Production build output
├── Dockerfile                        # Docker build config
├── nginx.conf                        # Nginx server config
├── docker-compose.yml                # (in parent directory)
├── package.json                      # Dependencies
├── vite.config.ts                    # Vite configuration
├── tailwind.config.js                # Tailwind CSS config
├── tsconfig.json                     # TypeScript config
├── postcss.config.js                 # PostCSS config
├── .gitignore                        # Git ignore rules
├── .replit                           # Replit config (dev)
└── README.md                         # Project readme
```

### Infrastructure Files
| File | Location | Purpose |
|------|----------|---------|
| **Docker Compose** | `/opt/docker-stack/docker-compose.yml` | Service orchestration |
| **Caddyfile** | `/opt/docker-stack/caddy/Caddyfile` | Reverse proxy config |
| **Dockerfile** | `/opt/docker-stack/chop-web/Dockerfile` | Container build |
| **Nginx Config** | `/opt/docker-stack/chop-web/nginx.conf` | Static file serving |

---

## Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI framework |
| TypeScript | 5.7.2 | Type safety |
| Vite | 6.0.5 | Build tool |
| Tailwind CSS | 3.4.17 | Styling |
| Lucide React | 0.468.0 | Icons |

### Testing
| Technology | Version | Purpose |
|------------|---------|---------|
| Vitest | 2.1.8 | Test runner |
| Testing Library | 16.1.0 | Component testing |
| jsdom | 25.0.1 | DOM simulation |

### Infrastructure
| Technology | Purpose |
|------------|---------|
| Docker | Containerization |
| Nginx Alpine | Static file server |
| Caddy | Reverse proxy + SSL |
| Cloudflare | DNS + CDN |

---

## Docker Configuration

### docker-compose.yml Entry
```yaml
chop-web:
  build: ./chop-web
  container_name: chop-web
  restart: unless-stopped
  environment:
    - TZ=America/Chicago
  networks:
    - griot-network
```

### Dockerfile
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Container Details
| Item | Value |
|------|-------|
| **Container Name** | `chop-web` |
| **Internal Port** | `80` |
| **Network** | `griot-network` |
| **Base Image** | `nginx:alpine` |

---

## Caddy Configuration

```caddyfile
www.communityhouseofprayer.org {
    redir https://communityhouseofprayer.org{uri}
}

communityhouseofprayer.org {
    reverse_proxy chop-web:80

    header {
        X-Content-Type-Options nosniff
        X-Frame-Options SAMEORIGIN
        X-XSS-Protection "1; mode=block"
        Strict-Transport-Security "max-age=31536000; includeSubDomains"
        Referrer-Policy "strict-origin-when-cross-origin"
    }

    # Static assets with long cache
    handle /_next/static/* {
        header Cache-Control "public, max-age=31536000, immutable"
    }

    # HTML pages - no cache for fresh content
    handle {
        header Cache-Control "no-cache, no-store, must-revalidate"
        header Pragma "no-cache"
    }
}
```

---

## DNS Configuration

### Current Records
| Type | Name | Content | Proxied |
|------|------|---------|---------|
| A | `@` | `178.156.164.143` | Yes |
| CNAME | `www` | `communityhouseofprayer.org` | Yes |

### DNS Management Commands
```bash
# Set zone ID and API token (get token from CLAUDE.md)
ZONE_ID="35ea112aa61931e61403995b9b44cfb2"
CF_TOKEN="<your-cloudflare-api-token>"

# List all DNS records
curl -s -X GET "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
  -H "Authorization: Bearer $CF_TOKEN" | jq '.result[] | {name, type, content, id}'

# Create A record for subdomain
curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
  -H "Authorization: Bearer $CF_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "A",
    "name": "<subdomain>",
    "content": "178.156.164.143",
    "ttl": 1,
    "proxied": true
  }'
```

---

## Development Workflow

### Local Development
```bash
cd /opt/docker-stack/chop-web
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:5173
```

### Making Changes
1. Edit files in `src/` directory
2. Test locally with `npm run dev`
3. Run tests: `npm test`
4. Build: `npm run build`
5. Commit and push:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

### Deploying to Production
```bash
cd /opt/docker-stack

# Pull latest changes
cd chop-web && git pull origin main && cd ..

# Rebuild and restart container
docker compose build chop-web
docker compose up -d chop-web

# Verify deployment
docker compose logs chop-web --tail 20
curl -I https://communityhouseofprayer.org
```

---

## Component Reference

### Routes
| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, Service Times, Who We Are, Facebook Feed, Contact |
| `/about` | About | Church History, Pastor Bio, Mission/Vision, 7 Pillars |

### Home Page Sections (top to bottom)
1. **Hero** - Full-width banner with gradient, tagline, CTAs
2. **ServiceTimes** - 3-column grid of service schedule
3. **WhoWeAre** - Mission content with "Who We Serve" list
4. **FacebookFeed** - Embedded Facebook Page Plugin
5. **QuickContact** - Contact info + Partner CTA (blue background)

### About Page Sections (top to bottom)
1. **Hero Banner** - Blue header with "About Us" title
2. **ChurchHistory** - Church story section
3. **PastorBio** - Pastor Loretta Stevens bio
4. **MissionVision** - Mission, vision, and who we serve
5. **Beliefs** - 7 Pillars of faith + Get Involved CTA

### Layout Components
- **LayoutShell** - Wraps all pages with Navbar + Footer
- **Navbar** - Centered branding header + sticky nav
- **Footer** - Simplified copyright footer

### Adding New Components
```bash
# Create feature component
touch src/components/features/NewComponent.tsx

# Add to appropriate page template
# src/components/templates/HomePage.tsx or AboutPage.tsx
```

### Color Palette (Tailwind)
- Primary Blue: `brand-blue` (#1e3a8a)
- Accent Gold: `brand-gold` (#f59e0b)
- Background: `gray-50`, `white`
- Text: `gray-900`, `gray-600`

---

## Testing

### Running Tests
```bash
npm test              # Watch mode
npm run test:ui       # Interactive UI
npm run test:coverage # Coverage report
```

### Test Files Location
- `src/__tests__/App.test.tsx` - Main app tests
- `src/__tests__/layout/` - LayoutShell, Navbar, Footer tests
- `src/__tests__/ui/` - AboutSection tests
- `src/__tests__/features/` - HomePage, AboutPage tests

### Adding Tests
```typescript
// src/__tests__/ComponentName.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ComponentName from '../components/ComponentName'

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

---

## Troubleshooting

### Common Issues

**Container won't start**
```bash
docker compose logs chop-web --tail 50
docker compose build --no-cache chop-web
```

**502 Bad Gateway**
```bash
# Check if container is running
docker compose ps chop-web

# Restart container
docker compose restart chop-web

# Check Caddy logs
docker compose logs caddy --tail 20
```

**Build failures**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**SSL certificate issues**
```bash
# Reload Caddy config
docker exec caddy caddy reload --config /etc/caddy/Caddyfile

# Check certificate status
curl -vI https://communityhouseofprayer.org 2>&1 | grep -E "subject:|expire"
```

### Health Checks
```bash
# Container status
docker inspect --format='{{.State.Status}}' chop-web

# Test website accessibility
curl -I https://communityhouseofprayer.org

# Check all services
docker compose ps
```

---

## Future Enhancements

### Planned Features
- [ ] Events calendar integration
- [ ] Contact form with email notifications
- [ ] Sermon/media archive
- [ ] Member portal
- [ ] Online giving integration

### Potential Subdomains
| Subdomain | Purpose |
|-----------|---------|
| `events.communityhouseofprayer.org` | Events calendar |
| `give.communityhouseofprayer.org` | Donations |
| `members.communityhouseofprayer.org` | Member area |

---

## Contact & Support

- **GitHub Issues**: https://github.com/bigbrolgnd/chop-web/issues
- **Server Admin**: Contact via B2A Investments

---

*Last Updated: December 28, 2024*
