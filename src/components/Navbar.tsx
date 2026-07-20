import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame, ArrowRight, PhoneCall } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl shadow-red-950/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <NavLink to="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#DE0918] via-[#FF3B4A] to-[#690A0F] p-[1.5px] shadow-lg shadow-red-600/40 group-hover:shadow-red-600/70 transition-shadow duration-300">
            <div className={`w-full h-full rounded-[10.5px] flex items-center justify-center transition-colors duration-300 ${
              isDark ? 'bg-black' : 'bg-white'
            }`}>
              <Flame className="w-5 h-5 text-red-500 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-extrabold text-xl tracking-wider flex items-center gap-1.5 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              NEXUS <span className={`text-xs font-mono font-normal tracking-normal uppercase px-1.5 py-0.5 rounded ${
                isDark ? 'text-red-500 bg-red-950/40 border border-red-800/50' : 'text-slate-900 bg-stone-100 border border-stone-300'
              }`}>HQ</span>
            </span>
            <span className={`text-[10px] tracking-widest uppercase font-mono -mt-1 ${
              isDark ? 'text-red-500/80' : 'text-stone-500'
            }`}>Digital Agency</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-1 border backdrop-blur-xl px-4 py-1.5 rounded-full shadow-inner transition-colors duration-300 ${
          isDark ? 'bg-neutral-900/70 border-red-900/30' : 'bg-white/80 border-stone-200 shadow-stone-200/50'
        }`}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-heading font-medium transition-colors duration-300 rounded-full ${
                  isActive
                    ? isDark ? 'text-white font-semibold' : 'text-neutral-950 font-bold'
                    : isDark ? 'text-neutral-400 hover:text-neutral-200' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className={`absolute inset-0 rounded-full -z-10 ${
                      isDark ? 'bg-gradient-to-r from-red-600/30 to-red-900/20 border border-red-500/40' : 'bg-stone-100 border border-stone-300'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <MagneticButton
            variant="primary"
            size="sm"
            onClick={() => navigate('/contact')}
          >
            Start Project <ArrowRight className="w-4 h-4 ml-1" />
          </MagneticButton>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3 relative z-50">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2.5 rounded-xl border transition-colors ${
              isDark
                ? 'bg-neutral-900 border-red-900/50 text-neutral-200 hover:text-white'
                : 'bg-white border-stone-300 text-stone-800 hover:text-black'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`md:hidden fixed inset-0 backdrop-blur-2xl z-40 flex flex-col pt-28 px-6 pb-12 overflow-y-auto transition-colors duration-300 ${
              isDark ? 'bg-black/98 text-white' : 'bg-white/98 text-neutral-900'
            }`}
          >
            <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block text-2xl font-heading font-bold py-2 ${
                        isActive
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400'
                          : isDark ? 'text-neutral-300 hover:text-white' : 'text-stone-700 hover:text-black'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <div className="pt-8 border-t border-red-900/30 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <PhoneCall className="w-4 h-4 text-red-500" />
                  <span>+1 (800) 459-NEXUS</span>
                </div>
                <MagneticButton
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/contact');
                  }}
                >
                  Book Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
