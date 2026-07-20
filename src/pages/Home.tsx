import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  Search,
  Target,
  Share2,
  Globe,
  Zap,
  Star,
  ChevronRight,
  ShieldCheck,
  Play,
  Flame,
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { Counter } from '../components/Counter';
import { Marquee } from '../components/Marquee';
import { ProjectModal } from '../components/ProjectModal';
import { CLIENT_LOGOS, SERVICES_DATA, CASE_STUDIES, TESTIMONIALS } from '../data/mockData';
import type { CaseStudy } from '../types';
import { useTheme } from '../context/ThemeContext';

// Simulated chart data for the interactive hero dashboard
const HERO_GRAPH_DATA = [
  { month: 'Jan', revenue: 24000, roas: 3.2 },
  { month: 'Feb', revenue: 38000, roas: 3.8 },
  { month: 'Mar', revenue: 52000, roas: 4.1 },
  { month: 'Apr', revenue: 78000, roas: 4.9 },
  { month: 'May', revenue: 104000, roas: 5.4 },
  { month: 'Jun', revenue: 142000, roas: 6.2 },
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Headline word animation variants
  const headlineWords = "Scaling Unicorns & Global Brands via Engineered Growth.".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-400 overflow-hidden ${
      isDark ? 'bg-black text-white' : 'bg-white text-neutral-900'
    }`}>
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
        {/* Crimson Red Glow Blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-hero-glow blur-3xl pointer-events-none opacity-80 animate-pulse" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border text-xs sm:text-sm font-medium ${
                  isDark ? 'border-red-900/40 text-red-400' : 'border-red-200 text-red-600 shadow-xs'
                }`}
              >
                <Flame className="w-4 h-4 text-red-500 animate-bounce" />
                <span>Awarded #1 Growth Agency of 2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              </motion.div>

              {/* Animated Headline Word-by-Word */}
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.08]"
              >
                {headlineWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className={`inline-block mr-3 ${
                      word.includes('Engineered') || word.includes('Growth.')
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-800'
                        : isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans ${
                  isDark ? 'text-neutral-400' : 'text-stone-600'
                }`}
              >
                We merge algorithmic performance marketing, sub-second React engineering, and high-DA search engine authority to deliver predictable 5x+ ROAS.
              </motion.p>

              {/* Dual CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <MagneticButton
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/contact')}
                >
                  Claim Growth Strategy <ArrowRight className="w-5 h-5 ml-1" />
                </MagneticButton>

                <MagneticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate('/clients')}
                >
                  Explore Case Studies <Play className="w-4 h-4 ml-1 fill-current" />
                </MagneticButton>
              </motion.div>

              {/* Trust Micro-Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={`pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-mono ${
                  isDark ? 'text-neutral-400' : 'text-stone-500'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-red-500" /> Google Premier Partner
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-red-500" /> Meta Business Badged
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> 4.9/5 Client Rating
                </span>
              </motion.div>
            </div>

            {/* Right Interactive Floating 3D Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring', damping: 20 }}
              className="lg:col-span-5 relative"
            >
              <TiltCard glowColor="rgba(222, 9, 24, 0.4)">
                <div className={`glass-card rounded-3xl p-5 border shadow-2xl relative overflow-hidden space-y-5 transition-colors ${
                  isDark ? 'bg-neutral-950/90 border-red-900/40' : 'bg-white border-stone-200 shadow-stone-200'
                }`}>
                  
                  {/* Floating Top Bar */}
                  <div className={`flex items-center justify-between border-b pb-4 ${
                    isDark ? 'border-neutral-900' : 'border-stone-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-600"></div>
                      <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                      <div className="w-3 h-3 rounded-full bg-red-800"></div>
                      <span className={`ml-2 text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>
                        nexus_analytics_live.v4
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-red-600/20 text-red-500 border border-red-500/40 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span> Live Engine
                    </span>
                  </div>

                  {/* Top Live Stat Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className={`p-3.5 rounded-2xl border ${
                      isDark ? 'bg-black border-neutral-900' : 'bg-stone-50 border-stone-200'
                    }`}>
                      <span className={`text-[11px] font-mono ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Monthly ROAS</span>
                      <div className="text-xl font-bold font-number text-red-500 mt-0.5">6.2x</div>
                      <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-mono">
                        <TrendingUp className="w-3 h-3" /> +142% vs Target
                      </span>
                    </div>

                    <div className={`p-3.5 rounded-2xl border ${
                      isDark ? 'bg-black border-neutral-900' : 'bg-stone-50 border-stone-200'
                    }`}>
                      <span className={`text-[11px] font-mono ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>SEO Audit Score</span>
                      <div className="text-xl font-bold font-number text-red-500 mt-0.5">99/100</div>
                      <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-mono">
                        <Zap className="w-3 h-3" /> Sub-second Speed
                      </span>
                    </div>
                  </div>

                  {/* Recharts Area Graph */}
                  <div className={`rounded-2xl p-3 border space-y-2 ${
                    isDark ? 'bg-black border-neutral-900' : 'bg-stone-50 border-stone-200'
                  }`}>
                    <div className="flex items-center justify-between text-xs px-1">
                      <span className={`font-medium ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>Monthly Revenue Scaled</span>
                      <span className="font-mono text-red-500 font-bold">$142,000</span>
                    </div>
                    <div className="h-40 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={HERO_GRAPH_DATA}>
                          <defs>
                            <linearGradient id="colorRevRed" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#DE0918" stopOpacity={0.7} />
                              <stop offset="95%" stopColor="#DE0918" stopOpacity={0.0} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="month" stroke={isDark ? "#404040" : "#A3A3A3"} fontSize={10} tickLine={false} />
                          <YAxis hide />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: isDark ? '#000000' : '#FFFFFF',
                              borderColor: '#DE0918',
                              borderRadius: '12px',
                              fontSize: '11px',
                              color: isDark ? '#FFF' : '#000'
                            }}
                          />
                          <Area type="monotone" dataKey="revenue" stroke="#DE0918" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevRed)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Bottom Campaign Pill Widgets */}
                  <div className={`flex items-center justify-between gap-2 text-xs p-2.5 rounded-xl border ${
                    isDark ? 'bg-black border-neutral-900' : 'bg-stone-50 border-stone-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      <span className={`font-mono text-[11px] ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                        Google Ads: PMax Active
                      </span>
                    </div>
                    <span className="text-red-500 font-mono font-bold">$48.2k Spend</span>
                  </div>

                </div>
              </TiltCard>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono ${
            isDark ? 'text-neutral-500' : 'text-stone-400'
          }`}
        >
          <span>SCROLL TO EXPLORE</span>
          <div className={`w-5 h-8 rounded-full border-2 flex items-start justify-center p-1 ${
            isDark ? 'border-neutral-800' : 'border-stone-300'
          }`}>
            <div className="w-1 h-2 rounded-full bg-red-500 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUSTED CLIENTS MARQUEE */}
      {/* ========================================================================= */}
      <section className={`py-12 border-y relative transition-colors ${
        isDark ? 'bg-neutral-950 border-red-900/30' : 'bg-stone-50 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
          <span className="text-xs font-mono tracking-widest text-red-500 uppercase font-semibold">
            Trusted by venture-backed startups and industry leaders
          </span>
        </div>
        <Marquee items={CLIENT_LOGOS} speed={30} />
      </section>

      {/* ========================================================================= */}
      {/* 3. ABOUT PREVIEW SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-red-600/30 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="NEXUS Agency Team Collaboration"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${
                isDark ? 'from-black' : 'from-white'
              }`} />
              
              <div className={`absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl border flex items-center justify-between ${
                isDark ? 'border-red-900/30' : 'border-stone-200'
              }`}>
                <div>
                  <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Headquarters</span>
                  <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>San Francisco • London • Remote</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-red-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
              // Why We Exist
            </span>
            <h2 className={`text-3xl sm:text-5xl font-heading font-bold leading-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              We eliminate traditional agency bloat.
            </h2>
            <p className={`text-base leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Most digital agencies hide behind vanity metrics and bloated account management fees. At NEXUS, we pair senior growth architects directly with engineers to build data engines that drive bottom-line enterprise valuation.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-neutral-950 border-red-900/30' : 'bg-stone-50 border-stone-200'
              }`}>
                <span className="text-2xl font-bold font-number text-red-500">98.4%</span>
                <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Quarterly Client Retention</p>
              </div>
              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-neutral-950 border-red-900/30' : 'bg-stone-50 border-stone-200'
              }`}>
                <span className="text-2xl font-bold font-number text-red-500">$150M+</span>
                <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Tracked Client Revenue</p>
              </div>
            </div>

            <NavLink to="/about" className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-red-500 hover:text-red-400 pt-2 group">
              Read Our Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SERVICES OVERVIEW GRID */}
      {/* ========================================================================= */}
      <section className={`py-24 border-y relative transition-colors ${
        isDark ? 'bg-neutral-950 border-red-900/30' : 'bg-stone-50 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
              // Full-Stack Growth Engine
            </span>
            <h2 className={`text-3xl sm:text-5xl font-heading font-bold ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Growth Services Engineered for Impact
            </h2>
            <p className={`text-base ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Explore our core specialized capabilities designed to scale leads, ad spend ROAS, and organic rank dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.filter((s) => s.featured).slice(0, 6).map((service) => (
              <TiltCard key={service.id} glowColor="rgba(222, 9, 24, 0.35)">
                <div className={`glass-card rounded-3xl p-8 border transition-all h-full flex flex-col justify-between space-y-6 group ${
                  isDark ? 'border-red-900/30 hover:border-red-500/50' : 'border-stone-200 hover:border-red-400 shadow-sm'
                }`}>
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600/30 to-rose-900/30 border border-red-500/40 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      {service.id === 'seo' && <Search className="w-6 h-6" />}
                      {service.id === 'google-ads' && <Target className="w-6 h-6" />}
                      {service.id === 'meta-ads' && <Share2 className="w-6 h-6" />}
                      {service.id === 'branding' && <Sparkles className="w-6 h-6" />}
                      {service.id === 'web-dev' && <Globe className="w-6 h-6" />}
                    </div>

                    <h3 className={`text-xl font-heading font-bold group-hover:text-red-500 transition-colors ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {service.title}
                    </h3>

                    <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className={`pt-4 border-t flex items-center justify-between text-xs ${
                    isDark ? 'border-neutral-900' : 'border-stone-200'
                  }`}>
                    <span className="font-mono text-red-500 font-semibold">{service.metrics.avgGrowth} Avg Lift</span>
                    <NavLink to="/services" className={`group-hover:text-red-500 flex items-center gap-1 font-semibold ${
                      isDark ? 'text-neutral-300' : 'text-stone-700'
                    }`}>
                      Explore <ChevronRight className="w-4 h-4" />
                    </NavLink>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="text-center pt-4">
            <MagneticButton
              variant="outline"
              size="md"
              onClick={() => navigate('/services')}
            >
              View All 14 Growth Services <ArrowRight className="w-4 h-4 ml-1" />
            </MagneticButton>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR PROCESS (Animated Strategy Timeline) */}
      {/* ========================================================================= */}
      <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
            // The NEXUS Methodology
          </span>
          <h2 className={`text-3xl sm:text-5xl font-heading font-bold ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            4-Stage Performance Framework
          </h2>
          <p className={isDark ? 'text-neutral-400' : 'text-stone-600'}>
            From initial pixel auditing to multi-channel hyper-scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className={`glass-card rounded-3xl p-6 border space-y-4 relative ${
            isDark ? 'border-red-900/30' : 'border-stone-200'
          }`}>
            <span className="text-3xl font-extrabold font-number text-red-600/40">01</span>
            <h3 className={`text-lg font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Discover & Audit</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Deep-dive technical SEO audit, tracking pixel integrity check, and competitor ad intelligence mapping.
            </p>
          </div>

          <div className={`glass-card rounded-3xl p-6 border space-y-4 relative ${
            isDark ? 'border-red-900/30' : 'border-stone-200'
          }`}>
            <span className="text-3xl font-extrabold font-number text-red-600/40">02</span>
            <h3 className={`text-lg font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Strategy & Funnel</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Structuring SKAG campaign hierarchies, dynamic landing page wireframes, and attribution models.
            </p>
          </div>

          <div className={`glass-card rounded-3xl p-6 border space-y-4 relative ${
            isDark ? 'border-red-900/30' : 'border-stone-200'
          }`}>
            <span className="text-3xl font-extrabold font-number text-red-600/40">03</span>
            <h3 className={`text-lg font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Execution & Launch</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              High-production ad creative deployment, sub-second web build release, and automated bidding activation.
            </p>
          </div>

          <div className={`glass-card rounded-3xl p-6 border space-y-4 relative ${
            isDark ? 'border-red-900/30' : 'border-stone-200'
          }`}>
            <span className="text-3xl font-extrabold font-number text-red-600/40">04</span>
            <h3 className={`text-lg font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Hyper-Growth</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Real-time CAPI optimization, automated budget reallocation to top ROAS channels, and scale.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. STATISTICS COUNTER SECTION */}
      {/* ========================================================================= */}
      <section className={`py-16 border-y ${
        isDark
          ? 'bg-gradient-to-r from-red-950/40 via-black to-red-950/40 border-red-900/30'
          : 'bg-stone-50 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          <div className="space-y-2">
            <Counter to={480} prefix="+" suffix="%" className="text-3xl sm:text-5xl font-extrabold text-red-500" />
            <p className={`text-xs sm:text-sm font-heading ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Average ROAS Lift
            </p>
          </div>

          <div className="space-y-2">
            <Counter to={150} prefix="$" suffix="M+" className="text-3xl sm:text-5xl font-extrabold text-red-500" />
            <p className={`text-xs sm:text-sm font-heading ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Client Revenue Scaled
            </p>
          </div>

          <div className="space-y-2">
            <Counter to={98.4} suffix="%" decimals={1} className="text-3xl sm:text-5xl font-extrabold text-red-500" />
            <p className={`text-xs sm:text-sm font-heading ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Client Retention Rate
            </p>
          </div>

          <div className="space-y-2">
            <Counter to={500} prefix="+" className="text-3xl sm:text-5xl font-extrabold text-red-500" />
            <p className={`text-xs sm:text-sm font-heading ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              High-Scale Campaigns
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FEATURED PROJECTS SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
              // Proven Track Record
            </span>
            <h2 className={`text-3xl sm:text-5xl font-heading font-bold ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Featured Case Studies
            </h2>
          </div>

          <NavLink to="/clients" className="text-sm font-heading font-semibold text-red-500 hover:text-red-400 flex items-center gap-1">
            View All Portfolio <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.slice(0, 4).map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedProject(study)}
              className={`glass-card rounded-3xl overflow-hidden border transition-all duration-500 group cursor-pointer flex flex-col justify-between ${
                isDark ? 'border-red-900/30 hover:border-red-500/50' : 'border-stone-200 hover:border-red-400 shadow-sm'
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${
                  isDark ? 'from-black' : 'from-white'
                }`} />
                
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono border ${
                  isDark ? 'bg-black/90 border-red-900/40 text-red-400' : 'bg-white/90 border-stone-200 text-red-600 shadow-xs'
                }`}>
                  {study.client}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className={`text-xl font-heading font-bold group-hover:text-red-500 transition-colors ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}>
                  {study.title}
                </h3>
                <p className={`text-xs line-clamp-2 leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                  {study.summary}
                </p>

                <div className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-neutral-900' : 'border-stone-200'
                }`}>
                  <div>
                    <span className="text-[10px] text-red-500 uppercase font-mono">Primary Impact</span>
                    <p className="text-base font-bold text-red-500 font-number">{study.results.roi} ROAS • {study.results.revenue}</p>
                  </div>
                  <span className="p-2 rounded-full bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal Detail */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsultationClick={() => navigate('/contact')}
      />

      {/* ========================================================================= */}
      {/* 8. TESTIMONIALS SLIDER */}
      {/* ========================================================================= */}
      <section className={`py-24 border-t relative transition-colors ${
        isDark ? 'bg-neutral-950 border-red-900/30' : 'bg-stone-50 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
              // Verified Feedback
            </span>
            <h2 className={`text-3xl sm:text-5xl font-heading font-bold ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              What Executive Clients Say
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`glass-card rounded-3xl p-8 sm:p-12 border relative space-y-8 ${
              isDark ? 'border-red-900/30' : 'border-stone-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-1 text-red-500">
                {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-500" />
                ))}
              </div>

              <blockquote className={`text-lg sm:text-2xl font-heading leading-relaxed ${
                isDark ? 'text-neutral-200' : 'text-neutral-800'
              }`}>
                "{TESTIMONIALS[activeTestimonial].content}"
              </blockquote>

              <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t ${
                isDark ? 'border-neutral-900' : 'border-stone-200'
              }`}>
                <div className="flex items-center gap-4">
                  <img
                    src={TESTIMONIALS[activeTestimonial].avatar}
                    alt={TESTIMONIALS[activeTestimonial].author}
                    className="w-12 h-12 rounded-full object-cover border border-red-500/40"
                  />
                  <div>
                    <h4 className={`font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                      {TESTIMONIALS[activeTestimonial].author}
                    </h4>
                    <p className={`text-xs ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>
                      {TESTIMONIALS[activeTestimonial].role}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-xl bg-red-600/20 border border-red-500/30 text-xs font-mono text-red-500 font-bold">
                  {TESTIMONIALS[activeTestimonial].metric}
                </div>
              </div>

              {/* Slider Navigation Dots */}
              <div className="flex justify-center gap-2 pt-4">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                      activeTestimonial === idx ? 'bg-red-500 w-8' : isDark ? 'bg-neutral-800' : 'bg-stone-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-card rounded-3xl p-8 sm:p-16 border text-center space-y-8 relative overflow-hidden bg-gradient-to-br ${
          isDark
            ? 'from-red-950/40 via-black to-red-900/30 border-red-900/40'
            : 'from-red-50 via-white to-stone-100 border-red-200 shadow-xl'
        }`}>
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
              // Ready for Next-Level Scale?
            </span>
            <h2 className={`text-3xl sm:text-5xl font-heading font-bold ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Let's Engineer Your Growth Engine Today.
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-neutral-300' : 'text-stone-600'
            }`}>
              Book a 30-minute growth strategy consultation with senior architects. We'll audit your active campaigns and deliver a custom roadmap.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <MagneticButton
              variant="primary"
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Book Strategy Consultation <ArrowRight className="w-5 h-5 ml-1" />
            </MagneticButton>
          </div>
        </div>
      </section>

    </div>
  );
};
