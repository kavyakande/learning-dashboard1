export default function Loading() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Sidebar skeleton */}
      <div className="hidden lg:flex w-[220px] h-screen bg-[#0d0d14] border-r border-white/5 flex-col py-6 px-3 shrink-0">
        <div className="mt-8 space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-10 rounded-xl bg-white/5 animate-pulse" />
          ))}
        </div>
      </div>

      {/* Main content skeleton */}
      <main className="flex-1 overflow-y-auto p-4 lg:p-6 pt-16 lg:pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Hero skeleton */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 h-28 rounded-2xl bg-white/5 animate-pulse" />

          {/* Course skeletons */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl p-5 bg-[#111118] border border-white/5 animate-pulse">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white/5" />
                <div className="h-4 w-32 rounded bg-white/5" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-white/5" />
                <div className="h-1.5 w-full rounded-full bg-white/5" />
              </div>
            </div>
          ))}

          {/* Activity skeleton */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 h-48 rounded-2xl bg-white/5 animate-pulse" />
        </div>
      </main>
    </div>
  );
}