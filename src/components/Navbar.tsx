import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import logoImg from '../assets/logo_icon_3-removebg-preview.png';
import logo8Img from '../assets/logo8-removebg-preview.png';
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
          ? 'glass-nav py-2.5 shadow-2xl shadow-red-950/20'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* ── LEFT: Brand Logo ── */}
        <NavLink to="/" className="flex items-center group relative z-50 shrink-0">
          {/* Icon - removebg, transparent, no container */}
          <img
            src={logoImg}
            alt="KEVORCH Icon"
            className="w-12 h-12 object-contain flex-shrink-0"
          />
          {/* Wordmark - already transparent background */}
          <img
            src={logo8Img}
            alt="KEVORCH"
            className={`h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-75 ${
              isDark ? '' : 'brightness-0'
            }`}
          />
        </NavLink>

        {/* ── CENTER: Desktop Navigation (standalone pill) ── */}
        <nav className={`hidden md:flex items-center gap-1 border backdrop-blur-xl px-3 py-1.5 rounded-full shadow-inner transition-colors duration-300 absolute left-1/2 -translate-x-1/2 ${
          isDark
            ? 'bg-neutral-900/70 border-red-900/30'
            : 'bg-white/90 border-stone-200 shadow-stone-200/50'
        }`}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={`relative px-4 py-1.5 text-sm font-heading font-medium transition-colors duration-300 rounded-full whitespace-nowrap ${
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
                      isDark
                        ? 'bg-linear-to-r from-red-600/30 to-red-900/20 border border-red-500/40'
                        : 'bg-stone-100 border border-stone-300'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* ── RIGHT: CTA & Theme Toggle ── */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <MagneticButton
            variant="primary"
            size="sm"
            onClick={() => navigate('/contact')}
          >
            Start Project <ArrowRight className="w-4 h-4 ml-1" />
          </MagneticButton>
        </div>

        {/* ── Mobile Controls ── */}
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

      {/* ── Mobile Drawer Overlay ── */}
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
                          ? 'text-transparent bg-clip-text bg-linear-to-r from-red-500 to-rose-400'
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
