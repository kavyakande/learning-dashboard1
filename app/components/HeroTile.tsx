'use client';

import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

interface Props {
  name: string;
  streak: number;
}

export default function HeroTile({ name, streak }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl p-6 bg-gradient-to-br from-violet-900/30 to-[#111118] border border-violet-500/20 flex items-center justify-between"
    >
      <div>
        <p className="text-white/50 text-sm mb-1">Good morning</p>
        <h1 className="text-3xl font-bold text-white">Welcome back, {name} 👋</h1>
      </div>
      <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-2">
        <Flame className="text-orange-400 w-5 h-5" />
        <span className="text-orange-300 font-semibold">{streak} day streak</span>
      </div>
    </motion.section>
  );
}