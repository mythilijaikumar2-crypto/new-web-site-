import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 z-50 origin-left transition-colors ${
        isDark
          ? 'bg-gradient-to-r from-red-600 via-rose-500 to-red-800 shadow-[0_0_12px_rgba(222,9,24,0.8)]'
          : 'bg-slate-900 shadow-sm'
      }`}
      style={{ scaleX }}
    />
  );
};
