# CRC Car - Premium Automotive Website

## Overview

This is a full-stack web application for CRC Car, a premium automotive business owned by Chaitanya Chopde. The application is built as a modern, responsive website showcasing luxury vehicles and automotive services with a focus on premium user experience and visual appeal.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Comprehensive set of Radix UI primitives via shadcn/ui
- **Animations**: Custom CSS animations with intersection observers for scroll-triggered effects

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database serverless PostgreSQL
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Hot module replacement and development server via Vite integration

### Design System
- **Theme**: Dark-themed automotive design with custom color palette
- **Colors**: Racing red, electric blue, gold accent, deep black, charcoal, and graphite
- **Typography**: Poppins and Inter font families for modern, professional appearance
- **Icons**: Font Awesome for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation and mobile hamburger menu
- **Hero Section**: Full-screen landing area with parallax effects and call-to-action
- **About Section**: Business information with owner details and contact information
- **Gallery Section**: Automotive collection showcase with responsive grid layout
- **Services Section**: Four main service offerings with gradient card designs
- **Contact Section**: Contact form with validation and toast notifications
- **Footer**: Site navigation and business information
- **Floating Elements**: Contact button and animated particles for enhanced UX

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)
- **User Management**: Basic user schema and CRUD operations
- **Route Registration**: Modular route handling system
- **Development Tools**: Vite integration for seamless development experience

## Data Flow

### Current Implementation
- **Static Content**: All content is currently static and embedded in components
- **Form Handling**: Contact form submissions trigger toast notifications (no backend processing yet)
- **User Interactions**: Smooth scrolling, animations, and responsive interactions handled client-side

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **Extensible Design**: Schema designed for easy extension with additional automotive-related entities

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management
- **@radix-ui/**: Complete set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Minimalist routing library

### Development Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Type safety and enhanced developer experience
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **drizzle-kit**: Database migration and introspection tools

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: esbuild compiles TypeScript server to ESM format in `dist`
- **Assets**: Static assets and fonts served from CDN

### Environment Configuration
- **Development**: Hot reload with Vite middleware integration
- **Production**: Static file serving with Express.js
- **Database**: Environment-based PostgreSQL connection via `DATABASE_URL`

### Hosting Requirements
- **Node.js**: Runtime environment for Express server
- **PostgreSQL**: Database service (currently configured for Neon)
- **Static Assets**: CDN integration for fonts and external resources

### Current Status
The application is a sophisticated frontend showcase ready for backend integration. The database schema and storage interfaces are defined but the actual database operations and API endpoints need implementation to make it fully functional.