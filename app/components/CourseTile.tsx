'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';
import { Course } from '../lib/types';

interface Props {
  course: Course;
  index: number;
}

export default function CourseTile({ course, index }: Props) {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgressWidth(course.progress), 300);
    return () => clearTimeout(timer);
  }, [course.progress]);

  const IconComponent = (Icons as any)[course.icon_name] ?? Icons.BookOpen;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className="relative rounded-2xl p-5 bg-[#111118] border border-white/5 overflow-hidden hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-shadow cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-violet-500/10">
            <IconComponent className="w-5 h-5 text-violet-400" />
          </div>
          <h3 className="font-medium text-sm text-white/90">{course.title}</h3>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-white/40">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
              initial={{ width: '0%' }}
              animate={{ width: `${progressWidth}%` }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 + 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}