export default function SkeletonTile({ count = 4 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl p-5 bg-[#111118] border border-white/5 animate-pulse"
        >
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
    </>
  );
}