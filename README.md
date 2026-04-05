# Bank Sampah Pondok Permai

Website resmi Bank Sampah Pondok Permai Padang - platform pengelolaan sampah terpadu untuk lingkungan bersih dan berkelanjutan di Limau Manis, Pauh, Kota Padang, Sumatera Barat.

**URL**: https://pondokpermai.my.id

## Features

- Company profile and service information
- Photo gallery of activities and programs
- Knowledge section about waste management
- Partnership showcase
- Location map and contact information
- Responsive design for all devices
- SEO optimized for search engines

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Router for navigation
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/nabilrn/permai-eco-landing.git

# Navigate to project directory
cd permai-eco-landing

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The application will be available at `http://localhost:8080`

### Production Build

```bash
# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run lint` - Run ESLint
- `pnpm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── PhotoGallery.tsx
│   ├── OrganizationStructure.tsx
│   ├── KnowledgeSection.tsx
│   ├── BlogSection.tsx
│   ├── LocationMap.tsx
│   ├── PartnershipSection.tsx
│   ├── Footer.tsx
│   └── ui/              # Reusable UI components
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── lib/                 # Utilities and helpers
└── hooks/               # Custom React hooks
```

## Deployment

This project uses GitHub Actions for automated deployment to GitHub Pages. The workflow triggers automatically on every push to the `main` branch.

### Manual Deployment

```bash
pnpm run build
```

The built files will be in the `dist/` directory.

## Environment Variables

Optional environment variables for analytics:

```bash
# Google Analytics ID (optional)
VITE_GA_ID=your-analytics-id
```

## Contact

**Bank Sampah Pondok Permai**

- Address: RT.01/RW.03, Limau Manis Sel., Kec. Pauh, Kota Padang, Sumatera Barat 25163
- Phone: +62 812-6707-8480
- Email: bpondokpermai@gmail.com
- Instagram: @bank_sampahpp

## License

Copyright 2025 Bank Sampah Pondok Permai. All rights reserved.
