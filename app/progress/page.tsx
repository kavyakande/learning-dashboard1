'use client';

import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { BarChart2 } from 'lucide-react';

export default function ProgressPage() {
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
            <BarChart2 className="w-10 h-10 text-violet-400" />
          </div>
          <h1 className="text-2xl font-bold text-white">Progress</h1>
          <p className="text-white/40 text-center max-w-md">
            Your learning progress and analytics will appear here. Keep learning!
          </p>
        </motion.div>
      </main>
    </div>
  );
}