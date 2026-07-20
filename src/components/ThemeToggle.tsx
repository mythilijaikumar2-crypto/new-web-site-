import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={`relative p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center overflow-hidden group ${
        isDark
          ? 'bg-neutral-900/90 border-red-600/40 text-red-500 shadow-[0_0_15px_rgba(222,9,24,0.3)] hover:border-red-500 hover:shadow-[0_0_22px_rgba(222,9,24,0.6)]'
          : 'bg-stone-100 border-stone-300 text-red-600 shadow-md hover:border-red-400 hover:shadow-red-500/20'
      }`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Glow Ripple Background Animation */}
      <span aria-hidden="true" className="absolute inset-0 w-full h-full bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative z-10 flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-red-500 drop-shadow-[0_0_8px_rgba(222,9,24,0.8)]" />
        ) : (
          <Sun className="w-5 h-5 text-red-600 drop-shadow-[0_0_8px_rgba(222,9,24,0.4)]" />
        )}
      </motion.div>
    </motion.button>
  );
};
