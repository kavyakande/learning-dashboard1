'use client';
import { Play, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseCard({ course, enrolled = false, index = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="bg-[#111118] rounded-3xl overflow-hidden border border-white/5 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-shadow"
    >
      <div className="h-40 bg-gradient-to-br from-violet-600 to-fuchsia-600 relative">
        <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-xs text-white">
          {course.level}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 text-white">{course.title}</h3>
        <p className="text-white/40 text-sm mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center justify-between text-sm text-white/40 mb-4">
          <div className="flex items-center gap-1">
            <Clock size={16} /> {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} /> {course.students}
          </div>
        </div>

        {enrolled ? (
          <div className="space-y-3">
            <div className="flex justify-between text-xs text-white/40">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${course.progress}%` }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 + 0.3 }}
              />
            </div>
            <button className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-2xl font-medium flex items-center justify-center gap-2 text-white transition-colors">
              <Play size={18} /> Continue Learning
            </button>
          </div>
        ) : (
          <button className="w-full bg-white text-black py-3 rounded-2xl font-medium hover:bg-white/90 transition-colors">
            Enroll Now
          </button>
        )}
      </div>
    </motion.div>
  );
}