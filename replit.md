# Shree Krishna - Pure Veg Restaurant Website

## Overview
A premium vegetarian restaurant website built with React, Vite, TypeScript, and Tailwind CSS. Features a beautiful Indian restaurant theme with sections for menu, gallery, videos, blog, and contact.

## Project Structure
- `src/` - Main source code
  - `components/` - React components including UI components and page sections
  - `pages/` - Page components (Index, NotFound)
  - `assets/` - Images for hero, menu, and gallery sections
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions
- `public/` - Static assets

## Tech Stack
- React 18 with TypeScript
- Vite for development and building
- Tailwind CSS for styling
- Shadcn UI components
- React Router DOM for routing
- TanStack React Query for data fetching
- Recharts for any charts

## Running the Project
The app runs on port 5000 with `npm run dev`.

## Deployment
Configured as a static site deployment. Build outputs to `dist/` directory.

## Recent Changes
- January 7, 2026: Imported from Lovable to Replit
  - Updated Vite config to use port 5000 and allow all hosts
  - Fixed CSS @import ordering (moved before Tailwind directives)
  - Removed lovable-tagger plugin dependency from vite config
  - Configured static deployment
