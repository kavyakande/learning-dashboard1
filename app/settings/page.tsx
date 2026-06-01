'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { User, Bell, Shield, Palette } from 'lucide-react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  const Toggle = ({ value, onChange }: { value: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`w-12 h-6 rounded-full transition-colors relative ${value ? 'bg-violet-500' : 'bg-white/10'}`}
    >
      <motion.div
        animate={{ x: value ? 24 : 2 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-5 h-5 bg-white rounded-full absolute top-0.5"
      />
    </button>
  );

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
          Settings
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl">

          {/* Profile Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl p-6 bg-[#111118] border border-white/5 lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <User className="w-5 h-5 text-violet-400" />
              </div>
              <h2 className="text-lg font-semibold text-white">Profile</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-white/40 text-sm mb-2 block">Full Name</label>
                <input
                  type="text"
                  defaultValue="Kavya Kande"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/40 text-sm mb-2 block">Email</label>
                <input
                  type="email"
                  defaultValue="kavya@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/40 text-sm mb-2 block">Username</label>
                <input
                  type="text"
                  defaultValue="kavyakande"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/40 text-sm mb-2 block">Role</label>
                <input
                  type="text"
                  defaultValue="Frontend Developer"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>
            <button className="mt-4 bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-xl transition-colors">
              Save Changes
            </button>
          </motion.section>

          {/* Notifications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl p-6 bg-[#111118] border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Bell className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-lg font-semibold text-white">Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm">Push Notifications</p>
                  <p className="text-white/40 text-xs">Get notified about course updates</p>
                </div>
                <Toggle value={notifications} onChange={() => setNotifications(!notifications)} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm">Email Updates</p>
                  <p className="text-white/40 text-xs">Receive weekly progress reports</p>
                </div>
                <Toggle value={emailUpdates} onChange={() => setEmailUpdates(!emailUpdates)} />
              </div>
            </div>
          </motion.section>

          {/* Appearance */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl p-6 bg-[#111118] border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <Palette className="w-5 h-5 text-orange-400" />
              </div>
              <h2 className="text-lg font-semibold text-white">Appearance</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm">Dark Mode</p>
                  <p className="text-white/40 text-xs">Toggle dark/light theme</p>
                </div>
                <Toggle value={darkMode} onChange={() => setDarkMode(!darkMode)} />
              </div>
            </div>
          </motion.section>

          {/* Security */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl p-6 bg-[#111118] border border-white/5 lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-green-500/10">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <h2 className="text-lg font-semibold text-white">Security</h2>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm">Two Factor Authentication</p>
                <p className="text-white/40 text-xs">Add an extra layer of security</p>
              </div>
              <Toggle value={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  );
}