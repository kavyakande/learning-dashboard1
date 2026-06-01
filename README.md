# Next-Gen Student Learning Dashboard

A student learning dashboard built using Next.js, Supabase, Tailwind CSS, and Framer Motion. This project was created as part of a frontend engineering challenge focused on server-side data fetching, responsive design, and smooth user interactions.

## Live Links

* Live Application: https://learning-dashboard1-sand.vercel.app
* GitHub Repository: https://github.com/kavyakande/learning-dashboard1

---

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React Icons

---

## Project Overview

The dashboard follows a Bento Grid layout and includes:

* A collapsible sidebar navigation
* A hero section with a welcome message and learning streak
* Dynamic course cards fetched from Supabase
* An activity chart section
* Responsive layouts for desktop, tablet, and mobile devices

The application uses a dark theme throughout the interface.

---

## Architecture

### Server Components

Course data is fetched from Supabase using Next.js Server Components. Fetching data on the server helps improve performance and keeps database access separate from client-side UI logic.

### Client Components

Components that require animations or user interactions are implemented as Client Components. Framer Motion is used for page transitions, card hover effects, sidebar interactions, and animated progress bars.

### Loading States

A loading skeleton is displayed while course data is being fetched. This provides visual feedback to users and helps maintain a consistent layout during loading.

### Error Handling

Basic error handling is included to display a fallback message if course data cannot be loaded from Supabase.

---

## Animation Features

* Staggered card animations when the dashboard loads
* Hover effects using Framer Motion spring animations
* Animated course progress bars
* Smooth sidebar navigation interactions
* Transform and opacity-based animations to reduce layout shifts

---

## Responsive Design

### Desktop (>1024px)

* Full sidebar is visible
* Complete Bento Grid layout

### Tablet (768px - 1024px)

* Sidebar collapses to icons
* Grid adjusts to a two-column layout

### Mobile (<768px)

* Navigation switches to a mobile-friendly layout
* Dashboard content stacks into a single column

---

## Environment Variables

Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_public_key
```

---

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Notes

This project was built to demonstrate:

* Server-side data fetching with Next.js
* Integration with Supabase
* Reusable component architecture
* Responsive UI development
* Framer Motion animations
* TypeScript-based development
