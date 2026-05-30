'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, BookOpen, BarChart2, Settings, ChevronLeft, Menu, X } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: BookOpen, label: 'Courses', id: 'courses' },
  { icon: BarChart2, label: 'Progress', id: 'progress' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

export default function Sidebar() {
  const [active, setActive] = useState('dashboard');
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0d0d14] border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <span className="text-white font-semibold text-sm">Learning Dashboard</span>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white/50 hover:text-white">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-12 left-0 right-0 z-40 bg-[#0d0d14] border-b border-white/5 p-4 space-y-1"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActive(item.id); setMobileOpen(false); }}
                className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/50 hover:text-white transition-colors"
              >
                {active === item.id && (
                  <motion.div
                    layoutId="activeNavMobile"
                    className="absolute inset-0 bg-violet-500/10 rounded-xl border border-violet-500/20"
                  />
                )}
                <item.icon className={`w-5 h-5 relative z-10 ${active === item.id ? 'text-violet-400' : ''}`} />
                <span className={`relative z-10 ${active === item.id ? 'text-white' : ''}`}>{item.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <motion.nav
        animate={{ width: collapsed ? 64 : 220 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="hidden lg:flex h-screen bg-[#0d0d14] border-r border-white/5 flex-col py-6 px-3 relative overflow-hidden shrink-0"
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-4 right-3 text-white/30 hover:text-white/70 transition-colors"
        >
          <motion.div animate={{ rotate: collapsed ? 180 : 0 }}>
            <ChevronLeft className="w-4 h-4" />
          </motion.div>
        </button>

        <div className="mt-8 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/50 hover:text-white transition-colors"
            >
              {active === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-violet-500/10 rounded-xl border border-violet-500/20"
                />
              )}
              <item.icon className={`w-5 h-5 relative z-10 shrink-0 ${active === item.id ? 'text-violet-400' : ''}`} />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`relative z-10 whitespace-nowrap ${active === item.id ? 'text-white' : ''}`}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </motion.nav>
    </>
  );
}