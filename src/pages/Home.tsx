import React, { useState } from 'react';
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

  const headlineWords = "We craft digital experiences and scale performance marketing.".split(" ");

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
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-hero-glow blur-3xl pointer-events-none opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-medium ${
                  isDark ? 'border-red-900/40 bg-neutral-900/60 text-red-400' : 'border-red-200 bg-red-50/50 text-red-600'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-red-500" />
                <span>Digital Marketing & Growth Agency</span>
              </motion.div>

              {/* Natural Human Headline */}
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
                      word.includes('digital') || word.includes('performance')
                        ? 'text-red-500'
                        : isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans ${
                  isDark ? 'text-neutral-400' : 'text-stone-600'
                }`}
              >
                We build modern React web applications, manage high-return search & social ad campaigns, and drive organic Google search rankings.
              </motion.p>

              {/* CTAs */}
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
                  Start a Project <ArrowRight className="w-5 h-5 ml-1" />
                </MagneticButton>

                <MagneticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate('/clients')}
                >
                  View Case Studies <Play className="w-4 h-4 ml-1 fill-current" />
                </MagneticButton>
              </motion.div>

              {/* Micro Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className={`pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-mono ${
                  isDark ? 'text-neutral-400' : 'text-stone-500'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-red-500" /> Google Ads Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-red-500" /> Meta Business Partner
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> 4.9 Rating
                </span>
              </motion.div>
            </div>

            {/* Right Clean Analytics Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              <TiltCard glowColor="rgba(222, 9, 24, 0.25)">
                <div className={`rounded-3xl p-6 border shadow-xl space-y-5 transition-colors ${
                  isDark ? 'bg-neutral-950/90 border-neutral-800' : 'bg-white border-stone-200'
                }`}>
                  
                  <div className="flex items-center justify-between border-b pb-4 border-neutral-800/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <span className={`text-xs font-mono font-medium ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                        Performance Overview
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-red-500 font-semibold">
                      Q2 Client Growth
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className={`p-3.5 rounded-2xl border ${
                      isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-stone-50 border-stone-200'
                    }`}>
                      <span className={`text-[11px] font-mono ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Avg Campaign ROAS</span>
                      <div className="text-2xl font-bold font-number text-red-500 mt-1">4.8x</div>
                    </div>

                    <div className={`p-3.5 rounded-2xl border ${
                      isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-stone-50 border-stone-200'
                    }`}>
                      <span className={`text-[11px] font-mono ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Organic Growth</span>
                      <div className="text-2xl font-bold font-number text-red-500 mt-1">+280%</div>
                    </div>
                  </div>

                  <div className={`rounded-2xl p-4 border space-y-2 ${
                    isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-stone-50 border-stone-200'
                  }`}>
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-medium ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>Tracked Revenue Lift</span>
                      <span className="font-mono text-red-500 font-bold">$142,000 / mo</span>
                    </div>
                    <div className="h-36 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={HERO_GRAPH_DATA}>
                          <defs>
                            <linearGradient id="colorRevRedSimple" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#DE0918" stopOpacity={0.6} />
                              <stop offset="95%" stopColor="#DE0918" stopOpacity={0.0} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="month" stroke={isDark ? "#525252" : "#A3A3A3"} fontSize={10} tickLine={false} />
                          <YAxis hide />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: isDark ? '#171717' : '#FFFFFF',
                              borderColor: '#DE0918',
                              borderRadius: '10px',
                              fontSize: '11px',
                              color: isDark ? '#FFF' : '#000'
                            }}
                          />
                          <Area type="monotone" dataKey="revenue" stroke="#DE0918" strokeWidth={2} fillOpacity={1} fill="url(#colorRevRedSimple)" />
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
      {/* 2. CLIENT LOGO MARQUEE */}
      {/* ========================================================================= */}
      <section className={`py-10 border-y transition-colors ${
        isDark ? 'bg-neutral-950 border-neutral-800/80' : 'bg-stone-50 border-stone-200'
      }`}>
        <Marquee items={CLIENT_LOGOS} speed={30} />
      </section>

      {/* ========================================================================= */}
      {/* 3. ABOUT PREVIEW SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="NEXUS Agency Team"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${
                isDark ? 'from-black' : 'from-white'
              }`} />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
              // About NEXUS
            </span>
            <h2 className={`text-3xl sm:text-4xl font-heading font-bold leading-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              A dedicated team of growth strategists & web developers.
            </h2>
            <p className={`text-base leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              We work directly with founders and marketing teams to build clean digital experiences and manage high-ROI advertising campaigns.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
              }`}>
                <span className="text-2xl font-bold font-number text-red-500">98%</span>
                <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Client Retention</p>
              </div>
              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
              }`}>
                <span className="text-2xl font-bold font-number text-red-500">120+</span>
                <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Projects Delivered</p>
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
      <section className={`py-24 border-y transition-colors ${
        isDark ? 'bg-neutral-950 border-neutral-800/80' : 'bg-stone-50 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
              // What We Do
            </span>
            <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Core Agency Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.filter((s) => s.featured).slice(0, 6).map((service) => (
              <div
                key={service.id}
                className={`rounded-3xl p-7 border transition-all h-full flex flex-col justify-between space-y-6 group ${
                  isDark ? 'bg-neutral-900/60 border-neutral-800 hover:border-red-500/50' : 'bg-white border-stone-200 hover:border-red-400 shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform">
                    {service.id === 'seo' && <Search className="w-5 h-5" />}
                    {service.id === 'google-ads' && <Target className="w-5 h-5" />}
                    {service.id === 'meta-ads' && <Share2 className="w-5 h-5" />}
                    {service.id === 'branding' && <Sparkles className="w-5 h-5" />}
                    {service.id === 'web-dev' && <Globe className="w-5 h-5" />}
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
                  isDark ? 'border-neutral-800' : 'border-stone-200'
                }`}>
                  <span className="font-mono text-red-500 font-semibold">{service.metrics.avgGrowth} Avg Lift</span>
                  <NavLink to="/services" className={`group-hover:text-red-500 flex items-center gap-1 font-semibold ${
                    isDark ? 'text-neutral-300' : 'text-stone-700'
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
      {/* 5. PROCESS TIMELINE */}
      {/* ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
            // Our Process
          </span>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            Simple 4-Step Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className={`rounded-3xl p-6 border space-y-4 ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
          }`}>
            <span className="text-2xl font-bold font-number text-red-500">01</span>
            <h3 className={`text-lg font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Audit & Plan</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              We review your existing analytics, ad campaigns, and website load performance.
            </p>
          </div>

          <div className={`rounded-3xl p-6 border space-y-4 ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
          }`}>
            <span className="text-2xl font-bold font-number text-red-500">02</span>
            <h3 className={`text-lg font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Design & Strategy</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Drafting ad campaign structures, landing page copy, and interface prototypes.
            </p>
          </div>

          <div className={`rounded-3xl p-6 border space-y-4 ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
          }`}>
            <span className="text-2xl font-bold font-number text-red-500">03</span>
            <h3 className={`text-lg font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Build & Launch</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Developing high-speed web code, creating ad creatives, and launching search ads.
            </p>
          </div>

          <div className={`rounded-3xl p-6 border space-y-4 ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
          }`}>
            <span className="text-2xl font-bold font-number text-red-500">04</span>
            <h3 className={`text-lg font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Optimize & Scale</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Continuous weekly testing, bid adjustments, and transparent performance reporting.
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
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
              // Client Work
            </span>
            <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Featured Projects
            </h2>
          </div>

          <NavLink to="/clients" className="text-sm font-heading font-semibold text-red-500 hover:text-red-400 flex items-center gap-1">
            View All Work <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.slice(0, 4).map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedProject(study)}
              className={`rounded-3xl overflow-hidden border transition-all duration-300 group cursor-pointer flex flex-col justify-between ${
                isDark ? 'bg-neutral-950 border-neutral-800 hover:border-red-500/50' : 'bg-white border-stone-200 hover:border-red-400 shadow-sm'
              }`}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono border ${
                  isDark ? 'bg-black/90 border-neutral-800 text-neutral-300' : 'bg-white/90 border-stone-200 text-neutral-900 shadow-xs'
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
                    <span className="text-[10px] text-red-500 uppercase font-mono">Results</span>
                    <p className="text-base font-bold text-red-500 font-number">{study.results.roi} ROI • {study.results.revenue}</p>
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

      {/* Detail Modal */}
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
          <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
            // Testimonials
          </span>

          <div className={`rounded-3xl p-8 sm:p-12 border relative space-y-8 ${
            isDark ? 'bg-black border-neutral-800' : 'bg-white border-stone-200 shadow-sm'
          }`}>
            <div className="flex justify-center items-center gap-1 text-red-500">
              {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-red-500" />
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
                className="w-12 h-12 rounded-full object-cover border border-red-500/40"
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
                    activeTestimonial === idx ? 'bg-red-500 w-8' : isDark ? 'bg-neutral-800' : 'bg-stone-300'
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
            Book a 30-minute growth consultation with our leads. We'll review your active ad channels and website load performance.
          </p>
          <MagneticButton
            variant="primary"
            size="lg"
            onClick={() => navigate('/contact')}
          >
            Schedule Strategy Call <ArrowRight className="w-5 h-5 ml-1" />
          </MagneticButton>
        </div>
      </section>

    </div>
  );
};
