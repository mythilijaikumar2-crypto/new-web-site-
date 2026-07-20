import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Flame,
  Target,
  Eye,
  Shield,
  ArrowRight,
  X,
} from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { TEAM_MEMBERS, MILESTONES_DATA } from '../data/mockData';
import type { TeamMember } from '../types';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`relative min-h-screen pt-32 pb-24 overflow-hidden transition-colors duration-400 ${
      isDark ? 'bg-black text-white' : 'bg-white text-neutral-900'
    }`}>
      {/* Background Red Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-rose-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* ========================================================================= */}
      {/* 1. ABOUT HERO */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border text-xs font-mono ${
            isDark ? 'border-red-900/40 text-red-400' : 'border-red-200 text-red-600 shadow-xs'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-red-500" />
          <span>About NEXUS Digital HQ</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight leading-tight"
        >
          Engineered Growth Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-800">Senior Growth Architects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base sm:text-xl leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}
        >
          We are a high-performance digital marketing agency and technology consultancy. We replace fluff and guesswork with algorithmic ad distribution, sub-second code, and deep search authority.
        </motion.p>
      </section>

      {/* ========================================================================= */}
      {/* 2. COMPANY STORY */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
              // Our Evolution
            </span>
            <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              Founded to Fix Broken Agency Models
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              In 2021, our founders left Big Tech growth teams after witnessing brands burn millions of dollars on passive agencies that prioritized vanity impressions over actual net revenue.
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              We built NEXUS on a radically transparent model: zero junior account managers, direct access to principal engineers, and strict ROI targets tied to every quarterly sprint.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className={`p-6 rounded-3xl border ${isDark ? 'bg-neutral-950 border-red-900/30' : 'bg-stone-50 border-stone-200'}`}>
              <span className="text-3xl font-bold font-number text-red-500">25+</span>
              <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Senior Engineers & Strategists</p>
            </div>
            <div className={`p-6 rounded-3xl border ${isDark ? 'bg-neutral-950 border-red-900/30' : 'bg-stone-50 border-stone-200'}`}>
              <span className="text-3xl font-bold font-number text-red-500">120+</span>
              <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>High-Growth Brands Scaled</p>
            </div>
            <div className={`p-6 rounded-3xl border ${isDark ? 'bg-neutral-950 border-red-900/30' : 'bg-stone-50 border-stone-200'}`}>
              <span className="text-3xl font-bold font-number text-red-500">4.9/5</span>
              <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Average Client Satisfaction</p>
            </div>
            <div className={`p-6 rounded-3xl border ${isDark ? 'bg-neutral-950 border-red-900/30' : 'bg-stone-50 border-stone-200'}`}>
              <span className="text-3xl font-bold font-number text-red-500">$80M+</span>
              <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Active Media Spend Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MISSION, VISION & VALUES */}
      {/* ========================================================================= */}
      <section className={`py-20 border-y transition-colors ${
        isDark ? 'bg-neutral-950 border-red-900/30' : 'bg-stone-50 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
              // Core Foundations
            </span>
            <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              Driven by Uncompromising Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`glass-card rounded-3xl p-8 border space-y-4 ${isDark ? 'border-red-900/30' : 'border-stone-200 shadow-sm'}`}>
              <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
                <Target className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Our Mission</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                To empower high-potential companies with world-class engineering and performance marketing systems that guarantee market leadership.
              </p>
            </div>

            <div className={`glass-card rounded-3xl p-8 border space-y-4 ${isDark ? 'border-red-900/30' : 'border-stone-200 shadow-sm'}`}>
              <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Our Vision</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                To redefine digital agency standards by merging Web3/AI technology, real-time data transparency, and creative brilliance into one fluid platform.
              </p>
            </div>

            <div className={`glass-card rounded-3xl p-8 border space-y-4 ${isDark ? 'border-red-900/30' : 'border-stone-200 shadow-sm'}`}>
              <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Our Values</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                Extreme accountability, technical rigor, bold visual creative, and radical transparency in every client interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMPANY TIMELINE */}
      {/* ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
            // Milestone Journey
          </span>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Key Company Milestones
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {MILESTONES_DATA.map((item, idx) => (
            <div key={idx} className={`glass-card rounded-3xl p-6 border space-y-3 relative group transition-colors ${
              isDark ? 'border-red-900/30 hover:border-red-500/50' : 'border-stone-200 hover:border-red-400 shadow-sm'
            }`}>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-red-600/20 text-red-500 border border-red-500/30">
                {item.year}
              </span>
              <h3 className={`text-lg font-heading font-bold pt-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>{item.title}</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>{item.description}</p>
              <div className="pt-2 border-t border-red-900/20 text-xs font-mono text-red-500 font-bold">
                {item.stats}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. MEET OUR TEAM */}
      {/* ========================================================================= */}
      <section className={`py-20 border-t transition-colors ${
        isDark ? 'bg-neutral-950 border-red-900/30' : 'bg-stone-50 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
              // Leadership & Strategists
            </span>
            <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              Meet the Growth Architects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`glass-card rounded-3xl overflow-hidden border transition-all duration-300 group cursor-pointer ${
                  isDark ? 'border-red-900/30 hover:border-red-500/50' : 'border-stone-200 hover:border-red-400 shadow-sm'
                }`}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${
                    isDark ? 'from-black' : 'from-white'
                  }`} />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className={`text-xl font-heading font-bold group-hover:text-red-500 transition-colors ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {member.name}
                  </h3>
                  <p className="text-xs text-red-500 font-mono">{member.role}</p>
                  <p className={`text-xs line-clamp-2 leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>{member.bio}</p>
                  <span className="inline-block text-xs font-semibold text-red-500 pt-2">View Bio Modal →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className={`fixed inset-0 backdrop-blur-md ${isDark ? 'bg-black/80' : 'bg-black/60'}`}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full max-w-lg glass-card rounded-3xl p-6 border space-y-6 z-10 ${
                isDark ? 'border-red-900/50 bg-black text-white' : 'border-stone-200 bg-white text-neutral-900'
              }`}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className={`absolute top-4 right-4 p-2 rounded-full border cursor-pointer ${
                  isDark ? 'bg-neutral-900 border-red-900/40 text-neutral-400 hover:text-white' : 'bg-stone-100 border-stone-200 text-stone-700 hover:text-black'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-20 h-20 rounded-2xl object-cover border border-red-500/40"
                />
                <div>
                  <h3 className={`text-xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>{selectedMember.name}</h3>
                  <p className="text-xs text-red-500 font-mono">{selectedMember.role}</p>
                </div>
              </div>

              <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-stone-600'}`}>{selectedMember.bio}</p>

              <div>
                <span className="text-xs text-red-500 font-mono uppercase">Key Expertise</span>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedMember.expertise.map((exp) => (
                    <span key={exp} className="px-3 py-1 rounded-full text-xs bg-red-600/20 text-red-500 font-mono font-semibold">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 6. FINAL ABOUT CTA */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-card rounded-3xl p-8 sm:p-12 border text-center space-y-6 ${
          isDark ? 'border-red-900/40' : 'border-stone-200 shadow-lg'
        }`}>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Want to Join Forces with NEXUS?
          </h2>
          <p className={`max-w-xl mx-auto text-sm sm:text-base ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
            Whether you need a full digital marketing takeover or bespoke engineering, let's start the dialogue.
          </p>
          <MagneticButton variant="primary" size="lg" onClick={() => navigate('/contact')}>
            Schedule Strategic Call <ArrowRight className="w-5 h-5 ml-1" />
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};
