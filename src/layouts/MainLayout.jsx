import React from 'react';
import { Outlet } from 'react-router-dom';
import Seo from '../components/Seo';
import { useDarkMode } from '../context/DarkModeContext';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function MainLayout() {
  const { isDark } = useDarkMode();

  // Efek untuk mengubah warna scrollbar berdasarkan mode gelap
  useEffect(() => {
    if (isDark) {
      document.documentElement.style.setProperty('--scrollbar-thumb', '#4b5563');
      document.documentElement.style.setProperty('--scrollbar-track', '#1f2937');
    } else {
      document.documentElement.style.setProperty('--scrollbar-thumb', '#d1d5db');
      document.documentElement.style.setProperty('--scrollbar-track', '#f9fafb');
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background dengan efek kedalaman yang lebih baik */}
      <div className="fixed inset-0 -z-10">
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        }`}></div>
        
        {/* Pola background untuk efek visual */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9jaXJjbGU+PC9zdmc+')]"></div>
        </div>
        
        {/* Efek cahaya dinamis */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            background: isDark 
              ? 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(0,0,0,0) 70%)' 
              : 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(0,0,0,0) 70%)'
          }}
        />
      </div>

      {/* Konten Utama dengan efek backdrop yang disempurnakan */}
      <div className="relative z-10">
        <Seo />

        <Navigation/>
        <main className={`pt-20 mt-automin-h-screen backdrop-blur-md ${
          isDark 
            ? 'bg-gray-900/60 text-gray-100' 
            : 'bg-white/80 text-gray-800'
        }`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Outlet />
          </motion.div>
        </main>

        {/* Footer */}
        <footer className={`py-8 text-center border-t ${
          isDark 
            ? 'border-gray-800 text-gray-400' 
            : 'border-gray-200 text-gray-500'
        }`}>
          <div className="max-w-7xl mx-auto px-4">
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            <p className="text-sm mt-2">Crafted with React and Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </div>
  );
}