'use client';

import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { Trophy, Target, Clock, TrendingUp } from 'lucide-react';

const courseProgress = [
  { title: 'Advanced React Patterns', progress: 75, color: 'from-violet-500 to-fuchsia-500' },
  { title: 'TypeScript Mastery', progress: 45, color: 'from-blue-500 to-cyan-500' },
  { title: 'System Design', progress: 30, color: 'from-orange-500 to-pink-500' },
  { title: 'CSS & Animation', progress: 90, color: 'from-green-500 to-emerald-500' },
];

const stats = [
  { icon: Trophy, label: 'Achievements', value: '12', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  { icon: Target, label: 'Goals Met', value: '8', color: 'text-violet-400', bg: 'bg-violet-500/10' },
  { icon: Clock, label: 'Hours Learned', value: '48h', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { icon: TrendingUp, label: 'Current Streak', value: '7 days', color: 'text-green-400', bg: 'bg-green-500/10' },
];

const weeklyData = [40, 65, 30, 80, 55, 90, 70];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function ProgressPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0f]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 lg:p-6 pt-16 lg:pt-6">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-8"
        >
          My Progress
        </motion.h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl p-5 bg-[#111118] border border-white/5"
            >
              <div className={`p-2 rounded-lg ${stat.bg} w-fit mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-white/40 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Weekly Activity Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl p-6 bg-[#111118] border border-white/5"
          >
            <h2 className="text-lg font-semibold text-white mb-6">Weekly Activity</h2>
            <div className="flex items-end gap-3 h-40">
              {weeklyData.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    className="w-full rounded-t-lg bg-gradient-to-t from-violet-500 to-fuchsia-500"
                    initial={{ height: 0 }}
                    animate={{ height: `${value}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6, ease: 'easeOut' }}
                  />
                  <span className="text-white/30 text-xs">{days[index]}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Course Progress List */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl p-6 bg-[#111118] border border-white/5"
          >
            <h2 className="text-lg font-semibold text-white mb-6">Course Progress</h2>
            <div className="space-y-5">
              {courseProgress.map((course, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/70">{course.title}</span>
                    <span className="text-white/40">{course.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                      initial={{ width: '0%' }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  );
}