'use client';

import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { BookOpen } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0f]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 lg:p-6 pt-16 lg:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 bg-[#111118] border border-white/5 flex flex-col items-center justify-center min-h-[400px] gap-4"
        >
          <div className="p-4 rounded-2xl bg-violet-500/10">
            <BookOpen className="w-10 h-10 text-violet-400" />
          </div>
          <h1 className="text-2xl font-bold text-white">Courses</h1>
          <p className="text-white/40 text-center max-w-md">
            All your enrolled courses will appear here. Stay tuned for updates!
          </p>
        </motion.div>
      </main>
    </div>
  );
}