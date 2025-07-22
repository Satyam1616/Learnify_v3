# Unlox Learning Platform

## Overview

This is a full-stack web application for Unlox, an educational platform featuring AI-powered learning with their intelligent mentor "Blu". The application provides various learning modules including e-learning programs, global internships, and research paper opportunities, along with educational tablets and smart lab facilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript (ESM modules)
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: PostgreSQL session store (connect-pg-simple)
- **Development**: Hot Module Replacement (HMR) via Vite middleware

### Monorepo Structure
- **Client**: React frontend application (`client/`)
- **Server**: Express.js backend (`server/`)
- **Shared**: Common TypeScript types and database schema (`shared/`)

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Definition**: Located in `shared/schema.ts` using Drizzle ORM
- **Validation**: Zod schemas for runtime type checking and validation

### Authentication System
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: CRUD operations for user creation and retrieval
- **Session Storage**: PostgreSQL-based session management

### UI Design System
- **Theme**: Custom Unlox branding with blue color scheme
- **Components**: Comprehensive UI library including forms, dialogs, navigation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Radix UI primitives ensure WCAG compliance

### Frontend Pages
- **Home Page**: Marketing landing page with multiple sections
- **Component Architecture**: Modular sections for hero, features, partners, media coverage
- **Content Sections**: AI Blu features, educational tablets, smart labs, academic partnerships

## Data Flow

### Client-Server Communication
- **API Requests**: RESTful API with `/api` prefix
- **Data Fetching**: TanStack Query for caching and synchronization
- **Error Handling**: Centralized error management with toast notifications
- **Request Logging**: Middleware for API request/response logging

### State Management
- **Server State**: TanStack Query for API data
- **UI State**: React local state and context
- **Form State**: React Hook Form integration (configured but not implemented)

### Development Workflow
- **Hot Reloading**: Vite HMR for instant updates
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared code
- **Development Server**: Express middleware integration with Vite dev server

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **express**: Web application framework

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Conditional CSS classes

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Production bundling for server code

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Production**: Single Node.js server serves both API and static files

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: NODE_ENV=development for dev mode
- **Production**: NODE_ENV=production for optimized builds

### Database Management
- **Migrations**: Drizzle Kit for schema migrations
- **Schema Push**: Direct schema synchronization with `db:push` command
- **Connection**: Serverless PostgreSQL via Neon Database

### Hosting Considerations
- **Server**: Express.js application ready for Node.js hosting
- **Static Assets**: Frontend assets served by Express in production
- **Database**: External PostgreSQL database (Neon Database)
- **Session Storage**: PostgreSQL-based session persistence