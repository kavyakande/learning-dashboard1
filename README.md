# 🚀 Next-Gen Learning Dashboard

A futuristic, animated student learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## 🔗 Live Demo
[https://learning-dashboard1-sand.vercel.app](https://learning-dashboard1-sand.vercel.app)

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🏗️ Architectural Choices

### Why App Router?
Next.js App Router allows mixing Server and Client components in the same tree, giving fine-grained control over what runs on the server vs the browser.

### Why Supabase?
Supabase provides a free PostgreSQL database with a simple JavaScript client, making it easy to fetch data securely from Server Components without exposing credentials.

### Why Framer Motion?
Framer Motion provides spring physics animations that run on the GPU using transform and opacity only — avoiding layout shifts and repaints.

## 🔀 Server vs Client Component Split

This is the core architectural decision of the project:

| Component | Type | Reason |
|---|---|---|
| `page.tsx` | Server | Root layout, no interactivity needed |
| `CoursesGrid.tsx` | **Server** | Fetches data from Supabase securely on the server |
| `CourseTile.tsx` | **Client** | Needs Framer Motion animations and useEffect |
| `HeroTile.tsx` | **Client** | Needs Framer Motion entrance animations |
| `ActivityTile.tsx` | **Client** | Needs useMemo and Framer Motion |
| `Sidebar.tsx` | **Client** | Needs useState for collapse/active state |
| `SkeletonTile.tsx` | Server | Pure UI, no interactivity |

### Key Strategy
- **Data fetching happens on the server** (`CoursesGrid.tsx`) using Supabase JS client — this keeps API keys secure and improves performance
- **Animations and interactivity happen on the client** — only components that need `useState`, `useEffect`, or Framer Motion are marked `'use client'`
- **Suspense boundary** wraps `CoursesGrid` to show skeleton loaders while server data loads

## 🗄️ Database Schema
```sql
CREATE TABLE courses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  progress integer NOT NULL,
  icon_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
```bash
   npm install
```
3. Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
```bash
   cp .env.example .env.local
```
4. Run the development server:
```bash
   npm run dev
```

## 🔐 Environment Variables
See `.env.example` for required variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon public key

## 📱 Responsive Design
- **Desktop (>1024px)**: Full sidebar + 3 column bento grid
- **Tablet (768-1024px)**: 2 column grid
- **Mobile (<768px)**: Hamburger menu + single column layout