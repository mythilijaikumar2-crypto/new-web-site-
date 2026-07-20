import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Flame, ArrowUp, Send, Check, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative border-t pt-20 pb-12 overflow-hidden transition-colors duration-400 ${
      isDark
        ? 'bg-[#000000] border-red-900/30 text-neutral-400'
        : 'bg-stone-50 border-stone-200 text-stone-600'
    }`}>
      {/* Background Decorative Mesh Glow in Dark Mode Only */}
      {isDark && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-linear-to-t from-red-950/20 via-red-900/10 to-transparent blur-3xl pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-red-900/20">
          
          {/* Column 1: Brand & Availability */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-red-600 to-rose-400 p-[1.5px]">
                <div className={`w-full h-full rounded-[10.5px] flex items-center justify-center ${
                  isDark ? 'bg-black' : 'bg-white'
                }`}>
                  <Flame className="w-4 h-4 text-red-500" />
                </div>
              </div>
              <span className={`font-heading font-extrabold text-2xl tracking-wider ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}>NEXUS</span>
            </div>

            <p className="text-sm max-w-sm leading-relaxed">
              <strong className={`block mb-1 text-base font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>Make Your Mark.</strong>
              Award-winning growth agency crafting hyper-converting digital experiences, algorithmic PPC campaigns, and high-DA search engine dominance.
            </p>

            {/* Live Availability Badge */}
            <div className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border text-xs font-mono w-max ${
              isDark
                ? 'bg-neutral-950 border-red-800/40 text-red-400'
                : 'bg-white border-red-300 text-red-600 shadow-xs'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>Available for new projects Q3 2026</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className={`font-heading font-semibold text-base tracking-wide ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>Navigation</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><NavLink to="/" className="hover:text-red-500 transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-red-500 transition-colors">About Agency</NavLink></li>
              <li><NavLink to="/services" className="hover:text-red-500 transition-colors">Growth Services</NavLink></li>
              <li><NavLink to="/clients" className="hover:text-red-500 transition-colors">Case Studies</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-red-500 transition-colors">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Top Services */}
          <div className="flex flex-col gap-4">
            <h4 className={`font-heading font-semibold text-base tracking-wide ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>Services</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><NavLink to="/services" className="hover:text-red-500 transition-colors">Search Engine Optimization</NavLink></li>
              <li><NavLink to="/services" className="hover:text-red-500 transition-colors">Google & Meta Ads</NavLink></li>
              <li><NavLink to="/services" className="hover:text-red-500 transition-colors">Custom Web Development</NavLink></li>
              <li><NavLink to="/services" className="hover:text-red-500 transition-colors">Brand Identity Systems</NavLink></li>
              <li><NavLink to="/services" className="hover:text-red-500 transition-colors">UI/UX & Product Design</NavLink></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className={`font-heading font-semibold text-base tracking-wide ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>Growth Insider</h4>
            <p className="text-xs leading-relaxed">
              Subscribe to get bi-weekly performance marketing breakdowns and SEO teardowns.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-red-500 transition-colors ${
                    isDark
                      ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500'
                      : 'bg-white border-stone-300 text-neutral-900 placeholder-stone-400'
                  }`}
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-red-600 hover:bg-red-500 text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-red-500 flex items-center gap-1 font-mono">
                  <ShieldCheck className="w-3 h-3" /> Subscribed successfully!
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} NEXUS Agency Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-red-500 transition-colors">Security</a>
          </div>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border transition-all group cursor-pointer ${
              isDark
                ? 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:text-white hover:border-red-900'
                : 'bg-white border-stone-200 text-stone-700 hover:text-black hover:border-stone-400'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-red-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};
