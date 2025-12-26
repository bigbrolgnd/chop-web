# Community House of Prayer Website

A modern, responsive website for Community House of Prayer - a Fort Worth ministry dedicated to serving the homeless, youth, seniors, and families.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Testing**: Vitest with Testing Library
- **Production**: Docker with Nginx

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests |
| `npm run test:ui` | Run tests with UI |
| `npm run test:coverage` | Run tests with coverage |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

## Project Structure

```
chop-web/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── MissionImpact.tsx
│   │   ├── ValuesGrid.tsx
│   │   ├── CommunityEngagement.tsx
│   │   └── Footer.tsx
│   ├── __tests__/          # Test files
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   ├── index.css           # Global styles
│   ├── types.ts            # TypeScript types
│   └── test-setup.ts       # Test configuration
├── Dockerfile              # Docker production config
├── nginx.conf              # Nginx configuration
├── tailwind.config.js      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── package.json
```

## Docker Deployment

### Build and Run Locally

```bash
# Build the Docker image
docker build -t chop-web .

# Run the container
docker run -p 3000:80 chop-web
```

### Production Deployment

The website is deployed as part of the b2ainvestments.com Docker stack and served at `https://communityhouseofprayer.org`.

## Replit Compatibility

This project includes Replit configuration files (`.replit` and `replit.nix`) for easy development and deployment on Replit.

To run on Replit:
1. Import the repository to Replit
2. Click "Run" - dependencies will be installed automatically
3. The dev server will start on port 3000

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Brand Blue | `#1e3a8a` | Primary - Trust, Faith, Stability |
| Brand Gold | `#f59e0b` | Accent - Service, Light, Energy |
| Brand Gray | `#f3f4f6` | Background - Neutral |

## Contributing

1. Create a feature branch
2. Make changes
3. Run tests: `npm run test`
4. Run linting: `npm run lint`
5. Submit a pull request

## License

Copyright (c) 2025 Community House of Prayer. All rights reserved.
