import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Search,
  Target,
  Share2,
  Globe,
  Star,
  ChevronRight,
  ShieldCheck,
  Play,
  Flame,
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { Marquee } from '../components/Marquee';
import { ProjectModal } from '../components/ProjectModal';
import { CLIENT_LOGOS, SERVICES_DATA, CASE_STUDIES, TESTIMONIALS } from '../data/mockData';
import type { CaseStudy } from '../types';
import { useTheme } from '../context/ThemeContext';
import bgLightVideo from '../assets/bglight1.mp4';
import bgDarkVideo from '../assets/bgdark1.mp4';

const HERO_GRAPH_DATA = [
  { month: 'Jan', revenue: 28000, roas: 3.4 },
  { month: 'Feb', revenue: 42000, roas: 3.9 },
  { month: 'Mar', revenue: 58000, roas: 4.2 },
  { month: 'Apr', revenue: 84000, roas: 5.1 },
  { month: 'May', revenue: 112000, roas: 5.6 },
  { month: 'Jun', revenue: 156000, roas: 6.4 },
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const headlineWords = "Make Your Mark. Transform Your Brand With Strategic Performance Marketing.".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
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
        {/* Background Video in Light Mode & Dark Mode */}
        <video
          key={isDark ? 'dark-hero-video' : 'light-hero-video'}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 ${
            isDark ? 'opacity-40 mix-blend-screen' : 'opacity-50'
          }`}
        >
          <source src={isDark ? bgDarkVideo : bgLightVideo} type="video/mp4" />
        </video>

        {/* Optional Crimson Glow Overlay in Dark Mode */}
        {isDark && (
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-hero-glow blur-3xl pointer-events-none opacity-40 z-0" />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-medium ${
                  isDark ? 'border-red-900/40 bg-neutral-900/60 text-red-400' : 'border-stone-300 bg-stone-100 text-stone-800'
                }`}
              >
                <Flame className={`w-3.5 h-3.5 ${isDark ? 'text-red-500' : 'text-slate-800'}`} />
                <span>Make Your Mark.</span>
              </motion.div>

              {/* Large Statement Heading */}
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-6xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.12]"
              >
                {headlineWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className={`inline-block mr-2.5 ${
                      word.includes('Make') || word.includes('Mark.') || word.includes('Strategic') || word.includes('Marketing.')
                        ? isDark ? 'text-red-500 font-black' : 'text-red-600 font-black'
                        : isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Supporting Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans ${
                  isDark ? 'text-neutral-400' : 'text-stone-600'
                }`}
              >
                We help growing businesses build modern digital experiences, scale search engine visibility, and run high-converting search & social ad campaigns.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <MagneticButton
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/contact')}
                >
                  Get Started <ArrowRight className="w-5 h-5 ml-1" />
                </MagneticButton>

                <MagneticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate('/clients')}
                >
                  View Our Work <Play className="w-4 h-4 ml-1 fill-current" />
                </MagneticButton>
              </motion.div>

              {/* Trust Micro-Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className={`pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-mono ${
                  isDark ? 'text-neutral-400' : 'text-stone-500'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className={`w-4 h-4 ${isDark ? 'text-red-500' : 'text-slate-800'}`} /> Google Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className={`w-4 h-4 ${isDark ? 'text-red-500' : 'text-slate-800'}`} /> Meta Partner
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> 4.9 Rating
                </span>
              </motion.div>
            </div>

            {/* Right Visual Analytics Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              <TiltCard glowColor={isDark ? "rgba(222, 9, 24, 0.25)" : "rgba(0, 0, 0, 0.05)"}>
                <div className={`rounded-3xl p-6 border shadow-xl space-y-5 transition-colors ${
                  isDark ? 'bg-neutral-950/90 border-neutral-800' : 'bg-white border-stone-200'
                }`}>
                  
                  <div className={`flex items-center justify-between border-b pb-4 ${isDark ? 'border-neutral-800/60' : 'border-stone-200'}`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-red-500' : 'bg-slate-900'}`}></div>
                      <span className={`text-xs font-mono font-medium ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                        Analytics Overview
                      </span>
                    </div>
                    <span className={`text-[11px] font-mono font-semibold ${isDark ? 'text-red-500' : 'text-slate-700'}`}>
                      Live Performance
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className={`p-3.5 rounded-2xl border ${
                      isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-stone-50 border-stone-200'
                    }`}>
                      <span className={`text-[11px] font-mono ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Campaign ROAS</span>
                      <div className={`text-2xl font-bold font-number mt-1 ${isDark ? 'text-red-500' : 'text-slate-950'}`}>4.8x</div>
                    </div>

                    <div className={`p-3.5 rounded-2xl border ${
                      isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-stone-50 border-stone-200'
                    }`}>
                      <span className={`text-[11px] font-mono ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Organic Growth</span>
                      <div className={`text-2xl font-bold font-number mt-1 ${isDark ? 'text-red-500' : 'text-slate-950'}`}>+280%</div>
                    </div>
                  </div>

                  <div className={`rounded-2xl p-4 border space-y-2 ${
                    isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-stone-50 border-stone-200'
                  }`}>
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-medium ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>Tracked Revenue Growth</span>
                      <span className={`font-mono font-bold ${isDark ? 'text-red-500' : 'text-slate-950'}`}>$156,000 / mo</span>
                    </div>
                    <div className="h-36 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={HERO_GRAPH_DATA}>
                          <defs>
                            <linearGradient id="colorRevRedInf" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={isDark ? "#DE0918" : "#0F172A"} stopOpacity={0.5} />
                              <stop offset="95%" stopColor={isDark ? "#DE0918" : "#0F172A"} stopOpacity={0.0} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="month" stroke={isDark ? "#525252" : "#A3A3A3"} fontSize={10} tickLine={false} />
                          <YAxis hide />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: isDark ? '#171717' : '#FFFFFF',
                              borderColor: isDark ? '#DE0918' : '#0F172A',
                              borderRadius: '10px',
                              fontSize: '11px',
                              color: isDark ? '#FFF' : '#000'
                            }}
                          />
                          <Area type="monotone" dataKey="revenue" stroke={isDark ? "#DE0918" : "#0F172A"} strokeWidth={2} fillOpacity={1} fill="url(#colorRevRedInf)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CLIENT SHOWCASE SECTION */}
      {/* ========================================================================= */}
      <section className={`py-10 border-y transition-colors ${
        isDark ? 'bg-neutral-950 border-neutral-800/80' : 'bg-stone-50 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <span className={`text-xs font-mono tracking-widest uppercase font-semibold ${
            isDark ? 'text-red-500' : 'text-stone-700'
          }`}>
            Trusted By Market Leaders
          </span>
        </div>
        <Marquee items={CLIENT_LOGOS} speed={25} />
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY CHOOSE US / AGENCY OVERVIEW */}
      {/* ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="NEXUS Digital Team"
                className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-linear-to-t via-transparent to-transparent ${
                isDark ? 'from-black' : 'from-white'
              }`} />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className={`text-xs font-mono uppercase tracking-widest font-semibold ${
              isDark ? 'text-red-500' : 'text-stone-700'
            }`}>
              // Why Choose NEXUS
            </span>
            <h2 className={`text-3xl sm:text-4xl font-heading font-bold leading-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Dedicated marketing leads & modern frontend developers.
            </h2>
            <p className={`text-base leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              We partner directly with business leads and marketing directors to build modern React applications, optimize local search rankings, and manage profitable ad spend.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
              }`}>
                <span className={`text-2xl font-bold font-number ${isDark ? 'text-red-500' : 'text-slate-950'}`}>98%</span>
                <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Client Satisfaction</p>
              </div>
              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
              }`}>
                <span className={`text-2xl font-bold font-number ${isDark ? 'text-red-500' : 'text-slate-950'}`}>100+</span>
                <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Successful Campaigns</p>
              </div>
            </div>

            <NavLink to="/about" className={`inline-flex items-center gap-2 text-sm font-heading font-semibold pt-2 group ${
              isDark ? 'text-red-500 hover:text-red-400' : 'text-slate-900 hover:text-black'
            }`}>
              Learn More About Our Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SERVICES SECTION */}
      {/* ========================================================================= */}
      <section className={`py-24 border-y transition-colors ${
        isDark ? 'bg-neutral-950 border-neutral-800/80' : 'bg-stone-50 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className={`text-xs font-mono uppercase tracking-widest font-semibold ${
              isDark ? 'text-red-500' : 'text-stone-700'
            }`}>
              // Our Services
            </span>
            <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Comprehensive Growth Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.filter((s) => s.featured).slice(0, 6).map((service) => (
              <div
                key={service.id}
                className={`rounded-3xl p-7 border transition-all h-full flex flex-col justify-between space-y-6 group ${
                  isDark ? 'bg-neutral-900/60 border-neutral-800 hover:border-red-500/50' : 'bg-white border-stone-200 hover:border-stone-400 shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center group-hover:scale-105 transition-transform ${
                    isDark ? 'bg-red-600/15 border-red-500/30 text-red-500' : 'bg-stone-100 border-stone-200 text-slate-800'
                  }`}>
                    {service.id === 'seo' && <Search className="w-5 h-5" />}
                    {service.id === 'google-ads' && <Target className="w-5 h-5" />}
                    {service.id === 'meta-ads' && <Share2 className="w-5 h-5" />}
                    {service.id === 'branding' && <Sparkles className="w-5 h-5" />}
                    {service.id === 'web-dev' && <Globe className="w-5 h-5" />}
                  </div>

                  <h3 className={`text-xl font-heading font-bold transition-colors ${
                    isDark ? 'text-white group-hover:text-red-500' : 'text-neutral-900 group-hover:text-slate-950'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                    {service.shortDescription}
                  </p>
                </div>

                <div className={`pt-4 border-t flex items-center justify-between text-xs ${
                  isDark ? 'border-neutral-800' : 'border-stone-200'
                }`}>
                  <span className={`font-mono font-semibold ${isDark ? 'text-red-500' : 'text-slate-900'}`}>{service.metrics.avgGrowth} Avg Lift</span>
                  <NavLink to="/services" className={`flex items-center gap-1 font-semibold ${
                    isDark ? 'text-neutral-300 group-hover:text-red-500' : 'text-stone-700 group-hover:text-black'
                  }`}>
                    Explore <ChevronRight className="w-4 h-4" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <MagneticButton
              variant="outline"
              size="md"
              onClick={() => navigate('/services')}
            >
              View All 14 Services <ArrowRight className="w-4 h-4 ml-1" />
            </MagneticButton>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PROCESS SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold ${
            isDark ? 'text-red-500' : 'text-stone-700'
          }`}>
            // How We Work
          </span>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            Clear 4-Step Methodology
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className={`rounded-3xl p-6 border space-y-4 ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
          }`}>
            <span className={`text-2xl font-bold font-number ${isDark ? 'text-red-500' : 'text-slate-950'}`}>01</span>
            <h3 className={`text-lg font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Discovery & Audit</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Reviewing active advertising accounts, SEO rankings, and website technical performance.
            </p>
          </div>

          <div className={`rounded-3xl p-6 border space-y-4 ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
          }`}>
            <span className={`text-2xl font-bold font-number ${isDark ? 'text-red-500' : 'text-slate-950'}`}>02</span>
            <h3 className={`text-lg font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Strategy & Design</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Structuring ad campaign hierarchy, landing page copy, and responsive UI wireframes.
            </p>
          </div>

          <div className={`rounded-3xl p-6 border space-y-4 ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
          }`}>
            <span className={`text-2xl font-bold font-number ${isDark ? 'text-red-500' : 'text-slate-950'}`}>03</span>
            <h3 className={`text-lg font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Build & Launch</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Developing fast web code, launching ad campaigns, and setting up conversion tracking.
            </p>
          </div>

          <div className={`rounded-3xl p-6 border space-y-4 ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
          }`}>
            <span className={`text-2xl font-bold font-number ${isDark ? 'text-red-500' : 'text-slate-950'}`}>04</span>
            <h3 className={`text-lg font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Optimize & Scale</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Continuous bid optimization, A/B ad copy testing, and transparent performance updates.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FEATURED CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className={`text-xs font-mono uppercase tracking-widest font-semibold ${
              isDark ? 'text-red-500' : 'text-stone-700'
            }`}>
              // Client Success
            </span>
            <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Featured Work
            </h2>
          </div>

          <NavLink to="/clients" className={`text-sm font-heading font-semibold flex items-center gap-1 ${
            isDark ? 'text-red-500 hover:text-red-400' : 'text-slate-900 hover:text-black'
          }`}>
            View All Clients <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedProject(study)}
              className={`rounded-3xl p-7 border transition-all duration-300 group cursor-pointer flex flex-col justify-between space-y-6 ${
                isDark ? 'bg-neutral-950 border-neutral-800 hover:border-red-500/50' : 'bg-white border-stone-200 hover:border-stone-400 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                    isDark ? 'bg-black border-red-900/40 text-red-400' : 'bg-stone-100 border-stone-200 text-slate-900'
                  }`}>
                    {study.client}
                  </span>
                  <span className={`text-[10px] font-mono ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>
                    {study.industry}
                  </span>
                </div>

                <h3 className={`text-xl font-heading font-bold transition-colors ${
                  isDark ? 'text-white group-hover:text-red-500' : 'text-neutral-900 group-hover:text-slate-950'
                }`}>
                  {study.title}
                </h3>
                <p className={`text-xs line-clamp-3 leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                  {study.summary}
                </p>
              </div>

              <div className={`pt-4 border-t flex items-center justify-between ${
                isDark ? 'border-neutral-900' : 'border-stone-200'
              }`}>
                <div>
                  <span className={`text-[10px] uppercase font-mono ${isDark ? 'text-red-500' : 'text-stone-600'}`}>Results</span>
                  <p className={`text-base font-bold font-number ${isDark ? 'text-red-500' : 'text-slate-950'}`}>{study.results.roi} ROI • {study.results.revenue}</p>
                </div>
                <span className={`p-2 rounded-full transition-all ${
                  isDark ? 'bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white' : 'bg-stone-100 text-slate-800 group-hover:bg-slate-900 group-hover:text-white'
                }`}>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsultationClick={() => navigate('/contact')}
      />

      {/* ========================================================================= */}
      {/* 7. TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className={`py-24 border-t transition-colors ${
        isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold ${
            isDark ? 'text-red-500' : 'text-stone-700'
          }`}>
            // Client Testimonials
          </span>

          <div className={`rounded-3xl p-8 sm:p-12 border relative space-y-8 ${
            isDark ? 'bg-black border-neutral-800' : 'bg-white border-stone-200 shadow-sm'
          }`}>
            <div className={`flex justify-center items-center gap-1 ${isDark ? 'text-red-500' : 'text-amber-500'}`}>
              {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${isDark ? 'fill-red-500' : 'fill-amber-500'}`} />
              ))}
            </div>

            <blockquote className={`text-lg sm:text-2xl font-heading leading-relaxed ${
              isDark ? 'text-neutral-200' : 'text-neutral-800'
            }`}>
              "{TESTIMONIALS[activeTestimonial].content}"
            </blockquote>

            <div className="flex items-center justify-center gap-4 pt-4">
              <img
                src={TESTIMONIALS[activeTestimonial].avatar}
                alt={TESTIMONIALS[activeTestimonial].author}
                className={`w-12 h-12 rounded-full object-cover border ${isDark ? 'border-red-500/40' : 'border-stone-300'}`}
              />
              <div className="text-left">
                <h4 className={`font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  {TESTIMONIALS[activeTestimonial].author}
                </h4>
                <p className={`text-xs ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>
                  {TESTIMONIALS[activeTestimonial].role}
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-2 pt-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === idx
                      ? isDark ? 'bg-red-500 w-8' : 'bg-slate-900 w-8'
                      : isDark ? 'bg-neutral-800' : 'bg-stone-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FINAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl p-8 sm:p-14 border text-center space-y-6 ${
          isDark
            ? 'bg-neutral-950 border-neutral-800'
            : 'bg-stone-50 border-stone-200 shadow-lg'
        }`}>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            Ready to grow your online presence?
          </h2>
          <p className={`max-w-xl mx-auto text-sm sm:text-base ${
            isDark ? 'text-neutral-400' : 'text-stone-600'
          }`}>
            Book a 30-minute strategic consultation with our leads. We will review your current ad performance and digital presence.
          </p>
          <MagneticButton
            variant="primary"
            size="lg"
            onClick={() => navigate('/contact')}
          >
            Get Started Today <ArrowRight className="w-5 h-5 ml-1" />
          </MagneticButton>
        </div>
      </section>

    </div>
  );
};
