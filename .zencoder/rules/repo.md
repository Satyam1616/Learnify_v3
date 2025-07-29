---
description: Repository Information Overview
alwaysApply: true
---

# Learnify Learning Platform Information

## Summary

Learnify is a full-stack web application for an educational platform featuring AI-powered learning with an intelligent mentor called "Blu". The platform provides various learning modules including e-learning programs, global internships, and research paper opportunities, along with educational tablets and smart lab facilities.

## Structure

- **client/**: React frontend application with TypeScript
- **server/**: Express.js backend with TypeScript
- **shared/**: Common TypeScript types and database schema
- **attached_assets/**: Static assets and images
- **dist/**: Production build output directory

## Language & Runtime

**Language**: TypeScript
**Version**: TypeScript 5.6.3
**Build System**: Vite 5.4.19 (frontend), esbuild 0.25.0 (backend)
**Package Manager**: npm

## Dependencies

**Main Dependencies**:

- **Frontend**: React 18.3.1, Wouter 3.3.5, TanStack Query 5.60.5
- **UI**: Radix UI components, Tailwind CSS 3.4.17, shadcn/ui
- **Backend**: Express 4.21.2, Node.js (ESM modules)
- **Database**: Drizzle ORM 0.39.1, MongoDB 6.18.0, Neon Database (PostgreSQL)
- **Authentication**: Passport 0.7.0, express-session 1.18.1
- **Validation**: Zod 3.24.2

**Development Dependencies**:

- Vite 5.4.19, TypeScript 5.6.3, tsx 4.19.1
- Tailwind CSS tools and plugins
- Drizzle Kit 0.30.4 for database migrations

## Build & Installation

```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Database schema push
npm run db:push

# Build only the client
npm run build:client

# Deploy to Netlify (draft)
npm run deploy:netlify

# Deploy to Netlify (production)
npm run deploy:netlify:prod
```

## Database Configuration

**PostgreSQL**: Uses Neon Database (serverless PostgreSQL)

- Configuration in drizzle.config.ts
- Schema defined in shared/schema.ts
- Requires DATABASE_URL environment variable

**MongoDB**: Uses MongoDB Atlas

- Connection in server/mongo.ts
- Database name: "Learnify"
- Default connection string provided with fallback options

## Architecture

**Monorepo Structure**:

- Full-stack application with shared code between frontend and backend
- Client-side routing with Wouter
- Server-side REST API with Express
- Database abstraction with Drizzle ORM and MongoDB client

**Development Workflow**:

- Hot Module Replacement via Vite middleware
- Type safety across frontend, backend, and shared code
- Express middleware integration with Vite dev server

**Deployment Strategy**:

- Frontend: Vite builds React app to dist/public
- Backend: esbuild bundles server code to dist/index.js
- Production: Single Node.js server serves both API and static files
- Hosting: Express.js application ready for Node.js hosting

**Netlify Deployment**:

- Frontend can be deployed separately to Netlify
- Configuration in client/netlify.toml
- API proxying via client/public/\_redirects
- Deployment scripts in package.json
- See client/NETLIFY_DEPLOYMENT.md for detailed instructions
