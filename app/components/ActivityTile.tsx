'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function ActivityTile() {
  const activity = useMemo(() => {
    return Array.from({ length: 52 }, (_, wi) =>
      Array.from({ length: 7 }, (_, di) => (wi * 7 + di) % 4)
    );
  }, []);

  const colors = [
    'bg-white/5',
    'bg-violet-500/30',
    'bg-violet-500/60',
    'bg-violet-500',
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="rounded-2xl p-5 bg-[#111118] border border-white/5 lg:col-span-3"
    >
      <h2 className="text-sm font-medium text-white/70 mb-4">Activity</h2>
      <div className="flex gap-1 overflow-x-auto">
        {activity.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <div
                key={di}
                className={`w-3 h-3 rounded-sm ${colors[day]}`}
              />
            ))}
          </div>
        ))}
      </div>
    </motion.section>
  );
}