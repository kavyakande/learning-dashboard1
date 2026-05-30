# 🚀 Next-Gen Learning Dashboard

A futuristic, animated student learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## 🔗 Live Demo
[Deployed on Vercel](#) ← update this link after deployment

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📐 Architecture

### Server/Client Component Split
- `CoursesGrid.tsx` — Server Component that fetches courses from Supabase
- `CourseTile.tsx` — Client Component for animations and interactivity
- `Sidebar.tsx` — Client Component for navigation state
- `HeroTile.tsx` — Client Component for Framer Motion animations
- `ActivityTile.tsx` — Client Component for the activity graph

### Data Fetching
Courses are fetched using Next.js Server Components with the Supabase JS client. Suspense boundaries show skeleton loaders while data is loading.

### Animations
- Staggered entrance animations using Framer Motion
- Spring physics on card hover (stiffness: 300, damping: 20)
- Progress bars animate from 0% to actual value on load
- Sidebar uses `layoutId` for smooth navigation highlight

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
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📱 Responsive Design
- **Desktop (>1024px)**: Full sidebar + 3 column bento grid
- **Tablet (768-1024px)**: 2 column grid
- **Mobile (<768px)**: Hamburger menu + single column