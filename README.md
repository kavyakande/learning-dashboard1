# Next-Gen Student Learning Dashboard

A futuristic, highly animated, dark-mode-only education platform prototype. Built as part of a frontend engineering challenge to showcase server-rendered data fetching, smooth hardware-accelerated animations, and zero layout shifts.

## 🚀 Live Links
- **Live Application:** [learning-dashboard1-sand.vercel.app](https://learning-dashboard1-sand.vercel.app)
- **GitHub Repository:** [github.com/kavyakande/learning-dashboard1](https://github.com/kavyakande/learning-dashboard1)

---

## 🛠️ Tech Stack & Constraints
- **Framework:** Next.js (App Router)
- **Database/BaaS:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (Strict requirement)
- **Icons:** Lucide React

---

## 📐 Architectural Choices & Component Split

To maximize performance, ensure a buttery-smooth user experience, and prevent Cumulative Layout Shift (CLS), the architecture relies on a strict separation between server-rendered data and client-side interactivity.

### 1. Server Components (RSC)
* **Data Fetching:** Course records are fetched securely on the server directly from the Supabase PostgreSQL database using the `@supabase/supabase-js` client library. This eliminates client-side API waterfalls and protects database credentials.
* **Streaming & Hydration:** Utilizes React `<Suspense>` boundaries paired with custom, pulsing skeleton loading components (`loading.tsx`) to handle async data-fetching phases gracefully without blocking page layout renders or causing layout shifts.

### 2. Client Components (`"use client"`)
* **Animations:** Interactive individual UI elements—such as the Bento Grid tiles, animated progress tracks, and the sidebar wrapper—are marked as Client Components to utilize Framer Motion's hardware-accelerated properties.
* **Micro-interactions:** Sidebar menu items leverage Framer Motion's shared `layoutId` attribute to snap highlights seamlessly into place when links change state.

---

## ⚡ Performance & Animation Implementation
* **Zero Layout Shifts:** All entrance cascades and card hover scales exclusively animate `transform` and `opacity` properties, keeping browser repaints and document layout reflows at zero.
* **Spring Physics:** Smooth interactive feedback loops are engineered using spring configurations (`stiffness: 300, damping: 20`) for a natural, premium feel.
* **Staggered Orchestration:** Grid layouts use Framer Motion variant propagation to cascade elements upward sequentially on mount.

---

## 📱 Responsive Layout Breakdown
* **Desktop (> 1024px):** Displays the full Bento grid alongside the open sidebar.
* **Tablet (768px - 1024px):** The sidebar collapses seamlessly to icons only, and the Bento grid shifts to a clean 2-column layout.
* **Mobile (< 768px):** The sidebar drops to a responsive bottom navigation/hamburger layout, and the Bento grid gracefully stacks into a single, vertical scrolling column.

---

## 🔧 Environment Setup

Create a `.env.local` file in your root folder and add your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_public_key