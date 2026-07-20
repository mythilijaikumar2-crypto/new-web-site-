import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  MapPin,
  Code2,
  FileText,
  Link as LinkIcon,
  Target,
  Share2,
  Video,
  MessageSquare,
  Palette,
  Globe,
  Zap,
  ShoppingCart,
  Layout,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  X,
  Flame,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import type { Service } from '../types';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { RoiCalculator } from '../components/RoiCalculator';
import { useTheme } from '../context/ThemeContext';

export const Services: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<'All' | 'SEO' | 'Paid Media' | 'Social & Branding' | 'Design & Dev'>('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const categories = ['All', 'SEO', 'Paid Media', 'Social & Branding', 'Design & Dev'] as const;

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'Link': return <LinkIcon className="w-6 h-6" />;
      case 'Target': return <Target className="w-6 h-6" />;
      case 'Share2': return <Share2 className="w-6 h-6" />;
      case 'Video': return <Video className="w-6 h-6" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'ShoppingCart': return <ShoppingCart className="w-6 h-6" />;
      case 'Layout': return <Layout className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div className={`relative min-h-screen pt-32 pb-24 overflow-hidden transition-colors duration-400 ${
      isDark ? 'bg-black text-white' : 'bg-white text-neutral-900'
    }`}>
      {/* Red Glow background */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-red-600/10 blur-3xl pointer-events-none" />

      {/* ========================================================================= */}
      {/* 1. SERVICES HERO & FILTER TABS */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border text-xs font-mono ${
            isDark ? 'border-red-900/40 text-red-400' : 'border-red-200 text-red-600 shadow-xs'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-red-500" />
          <span>14 Specialized Capabilities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight leading-tight"
        >
          End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-800">Growth Services</span>
        </motion.h1>

        <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
          From technical SEO audits to full-scale Meta ad creative production and React web development.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-red-600 to-rose-800 text-white shadow-lg shadow-red-600/30'
                  : isDark ? 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white' : 'bg-stone-100 text-stone-600 border border-stone-200 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SERVICES GRID (14 SERVICES) */}
      {/* ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <TiltCard key={service.id} glowColor="rgba(222, 9, 24, 0.35)">
              <div className={`glass-card rounded-3xl p-8 border transition-all h-full flex flex-col justify-between space-y-6 group ${
                isDark ? 'border-red-900/30 hover:border-red-500/50' : 'border-stone-200 hover:border-red-400 shadow-sm'
              }`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600/30 to-rose-900/30 border border-red-500/40 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                      isDark ? 'bg-black border-red-900/40 text-red-400' : 'bg-stone-100 border-stone-200 text-red-600'
                    }`}>
                      {service.category}
                    </span>
                  </div>

                  <h3 className={`text-xl font-heading font-bold group-hover:text-red-500 transition-colors ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                    {service.shortDescription}
                  </p>

                  {/* Checklist */}
                  <ul className={`space-y-2 pt-2 text-xs ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-neutral-900' : 'border-stone-200'
                }`}>
                  <div className="text-xs">
                    <span className="text-red-500 block font-mono text-[10px]">Benchmark</span>
                    <span className="font-bold font-number text-red-500">{service.metrics.avgGrowth}</span>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="px-4 py-2 rounded-xl bg-red-600/20 border border-red-500/30 text-red-500 hover:bg-red-600 hover:text-white transition-all text-xs font-semibold cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className={`fixed inset-0 backdrop-blur-md ${isDark ? 'bg-black/80' : 'bg-black/60'}`}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full max-w-xl glass-card rounded-3xl p-8 border space-y-6 z-10 ${
                isDark ? 'border-red-900/50 bg-black text-white' : 'border-stone-200 bg-white text-neutral-900'
              }`}
            >
              <button
                onClick={() => setSelectedService(null)}
                className={`absolute top-4 right-4 p-2 rounded-full border cursor-pointer ${
                  isDark ? 'bg-neutral-900 border-red-900/40 text-neutral-400 hover:text-white' : 'bg-stone-100 border-stone-200 text-stone-700 hover:text-black'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-red-600/20 text-red-500 border border-red-500/30">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono text-red-500">{selectedService.category}</span>
                  <h3 className={`text-2xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-stone-600'}`}>
                {selectedService.fullDescription}
              </p>

              <div className={`grid grid-cols-3 gap-3 p-4 rounded-2xl border text-center text-xs ${
                isDark ? 'bg-neutral-950 border-neutral-900' : 'bg-stone-50 border-stone-200'
              }`}>
                <div>
                  <span className="text-red-500 block font-mono text-[10px]">Avg Lift</span>
                  <span className="font-bold text-red-500 font-number text-base">{selectedService.metrics.avgGrowth}</span>
                </div>
                <div>
                  <span className="text-red-500 block font-mono text-[10px]">Timeline</span>
                  <span className="font-bold text-red-500 font-number text-base">{selectedService.metrics.timeline}</span>
                </div>
                <div>
                  <span className="text-red-500 block font-mono text-[10px]">Expected ROI</span>
                  <span className="font-bold text-red-500 font-number text-base">{selectedService.metrics.roas}</span>
                </div>
              </div>

              <MagneticButton
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => {
                  setSelectedService(null);
                  navigate('/contact');
                }}
              >
                Inquire About {selectedService.title} <ArrowRight className="w-4 h-4 ml-1" />
              </MagneticButton>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE ROI CALCULATOR WIDGET */}
      {/* ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RoiCalculator />
      </section>

      {/* ========================================================================= */}
      {/* 4. FINAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-card rounded-3xl p-8 sm:p-12 border text-center space-y-6 ${
          isDark ? 'border-red-900/40' : 'border-stone-200 shadow-lg'
        }`}>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Need a Customized Growth Suite?
          </h2>
          <p className={`max-w-xl mx-auto text-sm sm:text-base ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
            We build multi-service performance packages tailored precisely to your ARR targets.
          </p>
          <MagneticButton variant="primary" size="lg" onClick={() => navigate('/contact')}>
            Get Custom Proposal <ArrowRight className="w-5 h-5 ml-1" />
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};
