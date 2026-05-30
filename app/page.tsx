import { Suspense } from 'react';
import Sidebar from './components/Sidebar';
import HeroTile from './components/HeroTile';
import ActivityTile from './components/ActivityTile';
import CoursesGrid from './components/CoursesGrid';
import SkeletonTile from './components/SkeletonTile';

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0f]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 lg:p-6 pt-16 lg:pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">

          {/* Hero Tile - full width */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <HeroTile name="Kavya" streak={7} />
          </div>

          {/* Course Tiles - fetched from Supabase */}
          <Suspense fallback={<SkeletonTile count={4} />}>
            <CoursesGrid />
          </Suspense>

          {/* Activity Tile */}
          <ActivityTile />

        </div>
      </main>
    </div>
  );
}