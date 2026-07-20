import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
  size = 'md',
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = 'relative inline-flex items-center justify-center font-heading font-medium transition-all duration-300 rounded-full overflow-hidden group focus:outline-none cursor-pointer';
  
  const sizeStyles = {
    sm: 'px-5 py-2 text-xs tracking-wider uppercase',
    md: 'px-7 py-3.5 text-sm tracking-wide',
    lg: 'px-9 py-4 text-base tracking-wide',
  };

  const variantStyles = {
    primary: isDark
      ? 'bg-gradient-to-r from-red-600 via-red-700 to-rose-900 text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/60 hover:from-red-500 hover:to-red-700 border border-red-500/30'
      : 'bg-slate-950 text-white hover:bg-red-600 shadow-sm border border-slate-900',
    secondary: isDark
      ? 'bg-neutral-900 text-white border border-red-900/50 hover:border-red-500/80 hover:bg-neutral-800 backdrop-blur-md'
      : 'bg-stone-100 text-neutral-900 border border-stone-300 hover:border-red-500 hover:text-red-600 hover:bg-stone-200 shadow-sm',
    outline: isDark
      ? 'border border-red-500/50 text-red-400 hover:bg-red-600/10 hover:border-red-400 hover:text-white'
      : 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
    ghost: isDark
      ? 'text-neutral-300 hover:text-white hover:bg-white/5'
      : 'text-stone-700 hover:text-red-600 hover:bg-stone-100',
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.2 }}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {/* Glow Effect in Dark Mode Only */}
      {isDark && (
        <span className="absolute inset-0 w-full h-full bg-linear-to-r from-red-500/30 to-rose-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none" />
      )}
      <span className="relative z-10 flex items-center gap-2 font-semibold">{children}</span>
    </motion.button>
  );
};
